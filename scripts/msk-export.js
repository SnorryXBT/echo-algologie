/* Export d'une région pour Anki et NotebookLM.
   node scripts/msk-export.js <region> [--gestes id,id,…] [--out dist/msk]
   Cartes = fiche MSK (si présente, avec ses `gestes`) + fiches gestes de --gestes quand la fiche n'existe pas encore.
   Sorties dans --out : <region>.cards.json (cartes + médias rendus), <region>.json (fiche brute), <region>-digest.md (NotebookLM),
   img/<region>/msk-<region>-<key>-{recto,verso,image}.png. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const { loadEcho, ROOT } = require('./lib/load-echo');
const { cardsFromMsk, cardsFromGestes } = require('./lib/msk-cards');
const { digest } = require('./lib/msk-digest');
const { renderMarkers } = require('./lib/render-markers');
const args = process.argv.slice(2), region = args.find((a, i) => !a.startsWith('--') && (i === 0 || !args[i - 1].startsWith('--')));
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
if (!region) { console.error('usage : node scripts/msk-export.js <region> [--gestes id,id] [--out dist/msk]'); process.exit(1); }
const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
const nom = ((E.mskRegions || []).find(r => r.id === region) || {}).nom;
if (!nom) { console.error('région inconnue : ' + region); process.exit(1); }
const cli = opt('--gestes', '') ? opt('--gestes').split(',') : [];
const f = E.msk[region], gestes = (f && f.gestes) || cli;
if (!f && !gestes.length) { console.error('ni fiche MSK ni --gestes : rien à exporter'); process.exit(1); }
/* les fonctions de cartes sautent un id inconnu sans rien dire : tout id (--gestes, gestes de la fiche) doit exister dans le mémo, avant tout rendu */
const inconnus = [...new Set(cli.concat(gestes))].filter(id => !Object.hasOwn(E.procedures, id));
if (inconnus.length) { inconnus.forEach(id => console.error('geste inconnu : ' + id)); process.exit(1); }
const out = path.resolve(ROOT, opt('--out', 'dist/msk')), imgDir = path.join(out, 'img', region);
fs.mkdirSync(imgDir, { recursive: true });
const cards = (f ? cardsFromMsk(f, E) : []).concat(cardsFromGestes(gestes, E, region));
(async () => {
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 2 });
  const tmp = path.join(out, '_render.html');
  for (const c of cards) {
    c.media = []; c.front_html = c.front; c.back_html = c.back;
    if (!c.image) { delete c.image; continue; }
    const base = `msk-${region}-${c.key}`, spec = { src: path.join(ROOT, c.image.src), crop: c.image.crop, marqueurs: c.image.marqueurs };
    const add = async (mode, suffix) => { const file = `${base}-${suffix}.png`; await renderMarkers(page, Object.assign({}, spec, { mode }), path.join(imgDir, file), tmp); c.media.push(path.relative(ROOT, path.join(imgDir, file))); return `<img src="${file}">`; };
    if (c.image.mode === 'front-back') { c.front_html = (await add('front', 'recto')) + '<br>' + c.front; c.back_html = (await add('back', 'verso')) + '<br>' + c.back; }
    else if (c.image.mode === 'back') c.back_html = c.back + '<br>' + (await add('back', 'verso'));
    else c.front_html = (await add('plain', 'image')) + '<br>' + c.front;
    delete c.image;
  }
  await browser.close();
  if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
  fs.writeFileSync(path.join(out, `${region}.cards.json`), JSON.stringify({ region, nom, genere: new Date().toISOString().slice(0, 10), cards }, null, 1));
  if (f) fs.writeFileSync(path.join(out, `${region}.json`), JSON.stringify(f, null, 1));
  fs.writeFileSync(path.join(out, `${region}-digest.md`), digest(f, gestes, E, nom));
  const par = {}; cards.forEach(c => { par[c.type] = (par[c.type] || 0) + 1; });
  console.log(`${region} : ${cards.length} cartes (${Object.entries(par).map(([k, v]) => `${k} ${v}`).join(', ')}), ${cards.reduce((a, c) => a + c.media.length, 0)} images → ${path.relative(ROOT, out) || '.'}/`);
})();
