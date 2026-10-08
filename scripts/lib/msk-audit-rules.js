/* Règles de contrôle statique d'une fiche MSK (spec §11). auditMsk(f, ctx) → messages d'erreur (vide = conforme).
   ctx = { root: dossier du dépôt (existence des images), procedures: ECHO.procedures, types: ECHO.mskTypes } */
const fs = require('fs'), path = require('path');
const slug = require('./slug');
const LICENCES_MSK = /^(CC BY(-NC)?( \d(\.\d)?)?|CC0( 1\.0)?|domaine public|image personnelle|schéma original)/i;
const isStr = s => typeof s === 'string' && s.trim().length > 0;
const arr = x => Array.isArray(x) ? x : [];   // toute liste lue dans une fiche passe par arr() : une fiche mal formée est signalée, jamais une exception
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
/* existence d'un fichier, casse comprise, segment par segment : macOS ignore la casse (img/msk/epaule/Coupe-2.jpg y « existe » pour coupe-2.jpg), Cloudflare non (404 en ligne) */
const surDisque = (root, src) => {
  let d = root;
  for (const s of path.normalize(src).split('/').filter(x => x && x !== '.')) {
    if (s !== '..') { let noms; try { noms = fs.readdirSync(d); } catch { return false; } if (!noms.includes(s)) return false; }
    d = path.join(d, s);
  }
  return fs.existsSync(d);
};
/* Mesures chiffrées d'un texte, en jetons « <nombre> <unité> », un jeton par borne : mesuresDe('5–7 mm') → ['5 mm', '7 mm'] ; ('1,5 mm') → ['1.5 mm'] ; ('30º') → ['30 °'].
   Comparés entiers, jamais en sous-chaîne (« 5 mm » n'est pas dans « 15 mm »). Texte normalisé avant lecture : espaces (insécables compris) → espace,
   tirets typographiques et signe moins → « - », « º » → « ° », virgule décimale → point. Bornes : a-b, a à b, entre a et b, a x b (ou ×), a ± b ;
   chaque borne reçoit l'unité. Une unité suivie d'une lettre (mmHg, °C) n'est pas une mesure d'échographie. */
const MESURE = /(\d+(?:\.\d+)?(?:(?: ?[-±x×] ?| (?:à|et) )\d+(?:\.\d+)?)*) ?(mm|cm|°|MHz|ms|mL|ml|%)(?!\p{L})/gu;
function mesuresDe(texte) {
  const t = String(texte == null ? '' : texte).normalize('NFC').replace(/[^\S\r\n]+/g, ' ').replace(/[\u2010-\u2015\u2212]/g, '-').replace(/\u00ba/g, '°').replace(/(?<=\d),(?=\d)/g, '.');
  const jetons = [];
  for (const m of t.matchAll(MESURE)) for (const n of m[1].match(/\d+(?:\.\d+)?/g)) jetons.push(`${n} ${m[2] === 'ml' ? 'mL' : m[2]}`);
  return jetons;
}
function auditMsk(f, ctx) {
  const E = [], err = m => E.push(m);
  ctx = ctx || {};
  const types = ctx.types || { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' };
  if (!f || !isStr(f.id)) return ['fiche sans id'];
  for (const k of ['titre', 'en', 'maj', 'dictee']) if (!isStr(f[k])) err(`champ texte manquant : ${k}`);
  if (typeof f.valide !== 'boolean') err('`valide` doit être un booléen (false tant que Mat n\'a pas validé)');
  if (!Array.isArray(f.motsCles) || !f.motsCles.length) err('motsCles vide');
  if (!f.flash || !isStr(f.flash.sonde)) err('flash.sonde manquant');
  for (const k of ['protocole', 'sonoanatomie', 'pathologies', 'competences', 'references', 'videos']) { if (f[k] != null && !Array.isArray(f[k])) err(`${k} : liste attendue`); else if (!arr(f[k]).length) err(`${k} vide`); }
  for (const k of ['artefacts', 'gestes']) if (f[k] != null && !Array.isArray(f[k])) err(`${k} : liste attendue`);
  const refs = arr(f.references);
  const srcOk = (s, where) => (s == null ? [] : Array.isArray(s) ? s : [s]).forEach(k => { if (!Number.isInteger(k) || k < 0 || k >= refs.length) err(`${where} : source [${k}] hors des références`); });
  const checkImage = (img, where) => {
    if (img == null) return;
    if (typeof img !== 'object' || !isStr(img.src)) { err(`${where} : image sans src`); return; }   // '' , false, 0 : ni image ni motif sansImage affichés
    if (ctx.root && !surDisque(ctx.root, img.src)) err(`${where} : image absente sur le disque (${img.src})${fs.existsSync(path.join(ctx.root, img.src)) ? ' — la casse diffère du fichier présent : le site en ligne la distingue' : ''}`);
    if (!isStr(img.credit)) err(`${where} : image sans credit`);
    const srcN = img.src.replace(/^\.\//, '').replace(/^\//, '').toLowerCase();   // « ./IMG/msk/… » ou « /img/msk/… » n'échappent pas au contrôle de licence ; img.src garde sa casse pour le disque
    if (srcN.startsWith('img/msk/')) {
      if (!isStr(img.licence)) err(`${where} : image sans licence`);
      else if (!LICENCES_MSK.test(img.licence) || /\b(ND|SA)\b/i.test(img.licence)) err(`${where} : licence non admise sous img/msk/ (« ${img.licence} ») — admis : CC BY, CC BY-NC, CC0, domaine public, image personnelle ou schéma original — jamais ND ni SA`);
    }
    if (img.crop != null) {   /* [x, y, largeur, hauteur] en fractions de l'image : quatre nombres finis dans [0, 1], largeur et hauteur > 0, rectangle dans l'image */
      const c = img.crop;
      if (!Array.isArray(c) || c.length !== 4 || !c.every(v => Number.isFinite(v) && v >= 0 && v <= 1) || !(c[2] > 0 && c[3] > 0)) err(`${where} : crop invalide`);
      else if (c[0] + c[2] > 1 + 1e-9 || c[1] + c[3] > 1 + 1e-9) err(`${where} : crop hors de l'image`);
    }
    if (img.marqueurs != null && !Array.isArray(img.marqueurs)) err(`${where} : marqueurs : liste attendue`);
    const ns = new Set();
    arr(img.marqueurs).forEach((m, k) => {   // numérotation : n = rang + 1, sans trou ; le message de rang ne s'ajoute pas à « sans numéro » ni à « en double »
      m = m || {};
      if (!Number.isInteger(m.n) || m.n < 1) err(`${where} : marqueur sans numéro`);
      if (ns.has(m.n)) err(`${where} : marqueur ${m.n} en double`);
      else if (Number.isInteger(m.n) && m.n >= 1 && m.n !== k + 1) err(`${where} : position ${k + 1} : marqueur ${k + 1} attendu, ${m.n} trouvé — numéroter les marqueurs 1, 2, 3… dans l'ordre du tableau`);   // la carte « structure » nomme les marqueurs par numéro : l'ordre du tableau doit être celui des pastilles
      ns.add(m.n);
      if (typeof m.x !== 'number' || typeof m.y !== 'number') err(`${where} : marqueur ${m.n} : x et y doivent être des nombres`);
      else if (!(m.x >= 0 && m.x <= 1 && m.y >= 0 && m.y <= 1)) err(`${where} : marqueur ${m.n} hors de l'image (x, y en fractions de 0 à 1)`);
      if (!isStr(m.label)) err(`${where} : marqueur ${m.n} sans label`);
    });
  };
  arr(f.protocole).forEach((c, i) => {
    c = c || {};
    const where = `protocole coupe ${c.n || i + 1}`;
    if (c.n !== i + 1) err(`${where} : numéro attendu ${i + 1}`);
    if (!isStr(c.titre)) err(`${where} : titre manquant`);
    if (!isStr(c.position) || !isStr(c.repere)) err(`${where} : position et repère obligatoires`);
    if (!arr(c.structures).length) err(`${where} : structures attendues vides`);
    checkImage(c.image, where);
    /* exactement l'un des deux : image (règles ci-dessus) ou, faute d'image libre admissible, image null et sansImage = ce qui a été cherché, pourquoi rien ne convient */
    if (c.image != null && c.sansImage != null) err(`${where} : image et sansImage à la fois`);
    else if (c.image == null && !isStr(c.sansImage)) err(`${where} : ni image ni sansImage`);
  });
  arr(f.sonoanatomie).forEach((s, i) => {
    s = s || {};
    const where = `sonoanatomie « ${s.structure || i + 1} »`;
    if (!isStr(s.structure) || !isStr(s.aspect)) err(`${where} : structure et aspect obligatoires`);
    if (isStr(s.mesure) && s.source == null) err(`${where} : mesure sans source`);
    srcOk(s.source, where);
  });
  arr(f.pathologies).forEach((p, i) => {
    p = p || {};
    const where = `pathologie ${i + 1}${p.nom ? ' (' + p.nom + ')' : ''}`;
    if (!isStr(p.nom)) err(`${where} : nom manquant`);
    if (!arr(p.signes).length) err(`${where} : signes vides`);
    if (!isStr(p.conduite)) err(`${where} : conduite manquante`);
    if (p.gestes != null && !Array.isArray(p.gestes)) err(`${where} : gestes : liste attendue`);
    const gestes = arr(p.gestes);
    if (!gestes.length && !isStr(p.aucunGeste)) err(`${where} : ni geste du mémo ni phrase aucunGeste`);
    if (ctx.procedures) gestes.forEach(id => { if (!ctx.procedures[id]) err(`${where} : geste inconnu « ${id} »`); });
    checkImage(p.image, where);
  });
  /* gestes de la fiche (pastilles de la vue d'ensemble) : chaque id doit exister dans le registre */
  arr(f.gestes).forEach(id => { if (ctx.procedures && !ctx.procedures[id]) err(`gestes : geste inconnu « ${id} »`); });
  arr(f.artefacts).forEach((a, i) => { a = a || {}; if (!isStr(a.nom) || !isStr(a.texte)) err(`artefact ${i + 1} : nom et texte obligatoires`); });
  const ids = new Set(), re = new RegExp(`^${escRe(f.id)}\\.([a-z])(\\d{2})$`), slugsPatho = arr(f.pathologies).map(p => slug((p || {}).nom)).filter(Boolean);
  arr(f.competences).forEach((c, i) => {
    c = c || {};
    const where = `compétence ${c.id || i + 1}`;
    const m = re.exec(c.id || '');
    if (!m) { err(`${where} : identifiant attendu ${f.id}.<lettre><nn>`); return; }
    if (ids.has(c.id)) err(`${where} : identifiant en double`);
    ids.add(c.id);
    if (!types[c.type]) err(`${where} : type inconnu « ${c.type} »`);
    else if (types[c.type] !== m[1]) err(`${where} : la lettre « ${m[1]} » ne correspond pas au type ${c.type} (attendu « ${types[c.type]} »)`);
    if (![1, 2].includes(c.niveau)) err(`${where} : niveau 1 ou 2`);
    if (!isStr(c.libelle)) err(`${where} : libellé manquant`);
    srcOk(c.sources, where);
    if (c.type === 'pathologie') {
      if (!isStr(c.patho)) err(`${where} : patho (slug du nom de la pathologie) obligatoire pour une compétence pathologie`);
      else if (!slugsPatho.includes(c.patho)) err(`${where} : patho « ${c.patho} » ne désigne aucune pathologie (valides : ${slugsPatho.join(', ') || 'aucune'})`);
    }
  });
  refs.forEach((r, i) => {
    r = r || {};
    if (!isStr(r.titre) || !isStr(r.annee)) err(`référence ${i + 1} : titre et année obligatoires`);
    if (typeof r.verif !== 'boolean') err(`référence ${i + 1} : verif (true/false) obligatoire`);
    else if (r.verif && !(isStr(r.doi) || isStr(r.pmid) || isStr(r.url))) err(`référence ${i + 1} : vérifiée mais sans doi, pmid ni url`);
  });
  arr(f.videos).forEach((v, i) => { v = v || {}; if (!isStr(v.titre) || !/^https?:\/\//.test(v.url || '')) err(`vidéo ${i + 1} : titre et url http(s) obligatoires`); });
  /* dictée : chaque jeton de mesure (mesuresDe) doit figurer, entier, parmi ceux des mesures de la sono-anatomie */
  const sourcees = new Set(arr(f.sonoanatomie).flatMap(s => mesuresDe((s || {}).mesure)));
  for (const t of new Set(mesuresDe(f.dictee))) if (!sourcees.has(t)) err(`dictée : mesure « ${t} » sans source dans sonoanatomie.mesure`);
  return E;
}
module.exports = { auditMsk, slug, LICENCES_MSK, mesuresDe };
