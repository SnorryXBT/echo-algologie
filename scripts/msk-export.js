/* Export d'une région pour Anki et NotebookLM.
   node scripts/msk-export.js <region> [--gestes id,id,…] [--out dist/msk]
   Cartes = fiche MSK (si présente, avec ses `gestes`) + fiches gestes de --gestes quand la fiche n'existe pas encore.
   Sorties dans --out : <region>.cards.json (cartes + médias rendus), <region>.json (fiche brute), <region>-digest.md (NotebookLM),
   img/<region>/msk-<region>-<key>-{recto,verso,image}.jpg (JPEG qualité 85).
   Refus avant tout rendu (code 1, rien n'est écrit) : option sans valeur ; région ou geste inconnu ; clé de carte en double (même GUID Anki, même nom d'image) ;
   image source absente (carte, fiche et fichier nommés) ; dossier <out>/img/<region> contenant autre chose que des médias msk-<region>-*.jpg
   (--out mal choisi : la mise en place l'aurait supprimé ; seul .DS_Store, du Finder, est toléré).
   Tout est produit dans un dossier de travail sous --out et mis en place seulement si l'export réussit : un export en échec laisse intactes
   les sorties de l'export réussi précédent ; un export réussi remplace toutes celles de la région (images d'une carte disparue comprises).
   Un arrêt brutal (kill, Ctrl-C) peut laisser <out>/.<region>-XXXXXX (ignoré par git, à supprimer sans risque) ; interrompu pendant la mise en place,
   l'export peut mêler les sorties de deux exécutions : le relancer.
   Un dessin identique (src, crop, marqueurs, mode) n'est rendu qu'une fois : le verso de coupe-<n> est la copie de celui de coupe-<n>-structures. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const { loadEcho, ROOT } = require('./lib/load-echo');
const { cardsFromMsk, cardsFromGestes } = require('./lib/msk-cards');
const { digest } = require('./lib/msk-digest');
const { renderMarkers } = require('./lib/render-markers');
const args = process.argv.slice(2), region = args.find((a, i) => !a.startsWith('--') && (i === 0 || !args[i - 1].startsWith('--')));
const opt = (k, d) => {   // valeur d'une option ; option donnée sans valeur (absente, vide ou suivie d'une autre option) : refus nommé, code 1, avant tout chargement
  const i = args.indexOf(k); if (i < 0) return d;
  const v = args[i + 1]; if (!v || v.startsWith('--')) { console.error(`${k} : valeur manquante`); process.exit(1); }
  return v;
};
if (!region) { console.error('usage : node scripts/msk-export.js <region> [--gestes id,id] [--out dist/msk]'); process.exit(1); }
const optGestes = opt('--gestes', ''), optOut = opt('--out', 'dist/msk');
const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
const nom = ((E.mskRegions || []).find(r => r.id === region) || {}).nom;
if (!nom) { console.error('région inconnue : ' + region); process.exit(1); }
const cli = optGestes ? optGestes.split(',') : [];
const f = E.msk[region], gestes = (f && f.gestes) || cli;
if (!f && !gestes.length) { console.error('ni fiche MSK ni --gestes : rien à exporter'); process.exit(1); }
/* les fonctions de cartes sautent un id inconnu sans rien dire : tout id (--gestes, gestes de la fiche) doit exister dans le mémo, avant tout rendu */
const inconnus = [...new Set(cli.concat(gestes))].filter(id => !Object.hasOwn(E.procedures, id));
if (inconnus.length) { inconnus.forEach(id => console.error('geste inconnu : ' + id)); process.exit(1); }
const cards = (f ? cardsFromMsk(f, E) : []).concat(cardsFromGestes(gestes, E, region));
/* la clé fixe le GUID Anki et le nom des images : contrôle sur la liste finale des cartes, quelle que soit l'origine du doublon (--gestes répété, deux pathologies de même slug) */
const vues = new Set(), doubles = new Set();
for (const c of cards) (vues.has(c.key) ? doubles : vues).add(c.key);
if (doubles.size) { console.error(`clés de cartes en double (même GUID Anki, même nom d'image) : ${[...doubles].join(', ')}`); process.exit(1); }
/* image source absente : refus avant d'ouvrir Chromium, qui sinon attend 15 s puis échoue sans nommer le fichier */
const estFichier = p => { try { return fs.statSync(p).isFile(); } catch { return false; } };
const origine = c => { const g = c.tags.find(t => t.startsWith('geste::')); return g ? 'fiche ' + g.slice('geste::'.length) : 'fiche MSK ' + region; };
const absentes = cards.filter(c => c.image && !(c.image.src && estFichier(path.join(ROOT, c.image.src))));
if (absentes.length) { absentes.forEach(c => console.error(`image absente : carte ${c.key} (${origine(c)}) → ${c.image.src || '(aucun chemin)'}`)); process.exit(1); }
const out = path.resolve(ROOT, optOut), imgDir = path.join(out, 'img', region);
/* la mise en place remplace <out>/img/<region> en entier : s'il contient autre chose que des médias de l'export (--out mal choisi), refus, dossier laissé intact */
const estMedia = n => n.startsWith(`msk-${region}-`) && n.endsWith('.jpg') && estFichier(path.join(imgDir, n));
const etranger = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).find(n => n !== '.DS_Store' && !estMedia(n)) : undefined;   // .DS_Store : recréé par le Finder dès que le dossier est ouvert
if (etranger !== undefined) { console.error(`dossier laissé intact : ${imgDir} contient « ${etranger} », qui n'est pas un média msk-${region}-*.jpg de l'export — vérifier --out`); process.exit(1); }
fs.mkdirSync(out, { recursive: true });
const travail = fs.mkdtempSync(path.join(out, `.${region}-`)), imgTravail = path.join(travail, 'img');   // sous --out : même volume, la mise en place se fait par renommage
(async () => {
  try {   // en échec, l'erreur remonte (code 1) après fermeture de Chromium et suppression du dossier de travail : les sorties en place ne changent pas
    fs.mkdirSync(imgTravail);
    const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
    try {
      const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 2 });
      const rendus = new Map();   // dessin (src, crop, marqueurs, mode) → fichier déjà rendu dans ce dossier de travail
      for (const c of cards) {
        c.media = []; c.front_html = c.front; c.back_html = c.back;
        if (!c.image) { delete c.image; continue; }
        const base = `msk-${region}-${c.key}`, spec = { src: path.join(ROOT, c.image.src), crop: c.image.crop, marqueurs: c.image.marqueurs };
        const add = async (mode, suffix) => {
          const file = `${base}-${suffix}.jpg`, dessin = Object.assign({}, spec, { mode }), cle = JSON.stringify(dessin), deja = rendus.get(cle);
          if (deja) fs.copyFileSync(path.join(imgTravail, deja), path.join(imgTravail, file));   // chaque carte garde son propre nom de média : copie identique octet pour octet
          else { await renderMarkers(page, dessin, path.join(imgTravail, file), path.join(travail, '_render.html')); rendus.set(cle, file); }
          c.media.push(path.relative(ROOT, path.join(imgDir, file)));
          return `<img src="${file}">`;
        };
        if (c.image.mode === 'front-back') { c.front_html = (await add('front', 'recto')) + '<br>' + c.front; c.back_html = (await add('back', 'verso')) + '<br>' + c.back; }
        else if (c.image.mode === 'back') c.back_html = c.back + '<br>' + (await add('back', 'verso'));
        else c.front_html = (await add('plain', 'image')) + '<br>' + c.front;
        delete c.image;
      }
    } finally { await browser.close(); }
    const sorties = { [`${region}.json`]: f ? JSON.stringify(f, null, 1) : null, [`${region}-digest.md`]: digest(f, gestes, E, nom),
      [`${region}.cards.json`]: JSON.stringify({ region, nom, genere: new Date().toISOString().slice(0, 10), cards }, null, 1) };
    for (const [n, s] of Object.entries(sorties)) if (s !== null) fs.writeFileSync(path.join(travail, n), s);
    /* mise en place, l'export ayant réussi : images d'abord (l'ancien dossier passe dans le dossier de travail, supprimé avec lui), cards.json en dernier */
    if (fs.existsSync(imgDir)) fs.renameSync(imgDir, path.join(travail, 'img-precedent'));
    fs.mkdirSync(path.dirname(imgDir), { recursive: true }); fs.renameSync(imgTravail, imgDir);
    for (const [n, s] of Object.entries(sorties)) {
      if (s !== null) fs.renameSync(path.join(travail, n), path.join(out, n));
      else fs.rmSync(path.join(out, n), { force: true });   // fiche brute d'un export antérieur alors que la région n'a plus de fiche : périmée
    }
  } finally { fs.rmSync(travail, { recursive: true, force: true }); }
  const par = {}; cards.forEach(c => { par[c.type] = (par[c.type] || 0) + 1; });
  console.log(`${region} : ${cards.length} cartes (${Object.entries(par).map(([k, v]) => `${k} ${v}`).join(', ')}), ${cards.reduce((a, c) => a + c.media.length, 0)} images → ${path.relative(ROOT, out) || '.'}/`);
})();
