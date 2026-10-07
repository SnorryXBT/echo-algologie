/* Règles de contrôle statique d'une fiche MSK (spec §11). auditMsk(f, ctx) → messages d'erreur (vide = conforme).
   ctx = { root: dossier du dépôt (existence des images), procedures: ECHO.procedures, types: ECHO.mskTypes } */
const fs = require('fs'), path = require('path');
const slug = require('./slug');
const LICENCES_MSK = /^(CC BY(-NC)?( \d(\.\d)?)?|CC0( 1\.0)?|domaine public|image personnelle|schéma original)/i;
const isStr = s => typeof s === 'string' && s.trim().length > 0;
function auditMsk(f, ctx) {
  const E = [], err = m => E.push(m);
  ctx = ctx || {};
  const types = ctx.types || { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' };
  if (!f || !isStr(f.id)) return ['fiche sans id'];
  for (const k of ['titre', 'en', 'maj', 'dictee']) if (!isStr(f[k])) err(`champ texte manquant : ${k}`);
  if (typeof f.valide !== 'boolean') err('`valide` doit être un booléen (false tant que Mat n\'a pas validé)');
  if (!Array.isArray(f.motsCles) || !f.motsCles.length) err('motsCles vide');
  if (!f.flash || !isStr(f.flash.sonde)) err('flash.sonde manquant');
  for (const k of ['protocole', 'sonoanatomie', 'pathologies', 'competences', 'references', 'videos']) if (!Array.isArray(f[k]) || !f[k].length) err(`${k} vide`);
  const refs = f.references || [];
  const srcOk = (s, where) => (s == null ? [] : Array.isArray(s) ? s : [s]).forEach(k => { if (!Number.isInteger(k) || k < 0 || k >= refs.length) err(`${where} : source [${k}] hors des références`); });
  const checkImage = (img, where) => {
    if (!img) return;
    if (!isStr(img.src)) { err(`${where} : image sans src`); return; }
    if (ctx.root && !fs.existsSync(path.join(ctx.root, img.src))) err(`${where} : image absente sur le disque (${img.src})`);
    if (!isStr(img.credit)) err(`${where} : image sans credit`);
    if (/^img\/msk\//.test(img.src)) {
      if (!isStr(img.licence)) err(`${where} : image sans licence`);
      else if (!LICENCES_MSK.test(img.licence) || /\b(ND|SA)\b/.test(img.licence)) err(`${where} : licence non admise sous img/msk/ (« ${img.licence} ») — CC BY, CC BY-NC ou CC0 seulement, jamais ND ni SA`);
    }
    if (img.crop != null && (!Array.isArray(img.crop) || img.crop.length !== 4 || img.crop.some(v => typeof v !== 'number' || v < 0 || v > 1))) err(`${where} : crop invalide`);
    const ns = new Set();
    (img.marqueurs || []).forEach(m => {
      if (!Number.isInteger(m.n) || m.n < 1) err(`${where} : marqueur sans numéro`);
      if (ns.has(m.n)) err(`${where} : marqueur ${m.n} en double`);
      ns.add(m.n);
      if (!(m.x >= 0 && m.x <= 1 && m.y >= 0 && m.y <= 1)) err(`${where} : marqueur ${m.n} hors de l'image (x, y en fractions de 0 à 1)`);
      if (!isStr(m.label)) err(`${where} : marqueur ${m.n} sans label`);
    });
  };
  (f.protocole || []).forEach((c, i) => {
    const where = `protocole coupe ${c.n || i + 1}`;
    if (c.n !== i + 1) err(`${where} : numéro attendu ${i + 1}`);
    if (!isStr(c.titre)) err(`${where} : titre manquant`);
    if (!isStr(c.position) || !isStr(c.repere)) err(`${where} : position et repère obligatoires`);
    if (!Array.isArray(c.structures) || !c.structures.length) err(`${where} : structures attendues vides`);
    checkImage(c.image, where);
  });
  (f.sonoanatomie || []).forEach((s, i) => {
    const where = `sonoanatomie « ${s.structure || i + 1} »`;
    if (!isStr(s.structure) || !isStr(s.aspect)) err(`${where} : structure et aspect obligatoires`);
    if (isStr(s.mesure) && s.source == null) err(`${where} : mesure sans source`);
    srcOk(s.source, where);
  });
  (f.pathologies || []).forEach((p, i) => {
    const where = `pathologie ${i + 1}${p.nom ? ' (' + p.nom + ')' : ''}`;
    if (!isStr(p.nom)) err(`${where} : nom manquant`);
    if (!Array.isArray(p.signes) || !p.signes.length) err(`${where} : signes vides`);
    if (!isStr(p.conduite)) err(`${where} : conduite manquante`);
    const gestes = p.gestes || [];
    if (!gestes.length && !isStr(p.aucunGeste)) err(`${where} : ni geste du mémo ni phrase aucunGeste`);
    if (ctx.procedures) gestes.forEach(id => { if (!ctx.procedures[id]) err(`${where} : geste inconnu « ${id} »`); });
    checkImage(p.image, where);
  });
  (f.artefacts || []).forEach((a, i) => { if (!isStr(a.nom) || !isStr(a.texte)) err(`artefact ${i + 1} : nom et texte obligatoires`); });
  const ids = new Set(), re = new RegExp(`^${f.id}\\.([a-z])(\\d{2})$`);
  (f.competences || []).forEach((c, i) => {
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
    if (c.type === 'pathologie' && isStr(c.patho) && !(f.pathologies || []).some(p => slug(p.nom) === c.patho)) err(`${where} : patho « ${c.patho} » ne désigne aucune pathologie`);
  });
  refs.forEach((r, i) => {
    if (!isStr(r.titre) || !isStr(r.annee)) err(`référence ${i + 1} : titre et année obligatoires`);
    if (typeof r.verif !== 'boolean') err(`référence ${i + 1} : verif (true/false) obligatoire`);
    else if (r.verif && !(isStr(r.doi) || isStr(r.pmid) || isStr(r.url))) err(`référence ${i + 1} : vérifiée mais sans doi, pmid ni url`);
  });
  (f.videos || []).forEach((v, i) => { if (!isStr(v.titre) || !/^https?:\/\//.test(v.url || '')) err(`vidéo ${i + 1} : titre et url http(s) obligatoires`); });
  /* dictée : toute mesure chiffrée doit figurer dans une mesure de la sono-anatomie */
  const mesures = (f.sonoanatomie || []).map(s => s.mesure || '').join(' | ');
  for (const m of String(f.dictee || '').matchAll(/\d+(?:[.,]\d+)?(?:\s?[–-]\s?\d+(?:[.,]\d+)?)?\s?(?:mm|cm|°|MHz|ms)(?![A-Za-z])/g)) if (!mesures.includes(m[0])) err(`dictée : mesure « ${m[0]} » sans source dans sonoanatomie.mesure`);
  return E;
}
module.exports = { auditMsk, slug, LICENCES_MSK };
