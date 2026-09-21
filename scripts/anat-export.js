/* Export PNG autonome d'une paire écho / coupe anatomique, pour l'enseignement.
   node scripts/anat-export.js <fiche> [n] [sortie.png] [--prive]
   Garde-fous : seules les images diffusables sortent sans filigrane (CC BY, CC BY-SA, CC0, domaine public, image
   personnelle). NC / ND : refus, sauf --prive (filigrane « usage privé — ne pas diffuser »). Une coupe non validée
   (`valide: false`) n'est jamais exportée sans --prive. Le crédit de l'image est incrusté sous la planche. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const args = process.argv.slice(2), prive = args.includes('--prive'), pos = args.filter(a => !a.startsWith('--'));
const [fiche, n = '0'] = pos, out = pos[2] || `export-${fiche}-${n}.png`;
if (!fiche) { console.error('usage : node scripts/anat-export.js <fiche> [n] [sortie.png] [--prive]'); process.exit(1); }
global.window = global; global.ECHO = { figures: {}, anat: {} };
for (const d of ['figures', 'anat']) { const f = path.join(root, 'js/data', d, fiche + '.js'); if (fs.existsSync(f)) eval(fs.readFileSync(f, 'utf8')); }
const a = (ECHO.anat[fiche] || [])[+n]; if (!a) { console.error(`pas de coupe anatomique n° ${n} pour ${fiche}`); process.exit(1); }
const f = ECHO.figures[fiche].find(x => x.src === a.fig), credit = f.credit || '';
const libre = /CC0|domaine public|image personnelle|CC BY(?:-SA)?(?![-A-Z])/i.test(credit) && !/-NC|-ND/i.test(credit);
if (!libre && !prive) { console.error(`REFUS : licence non diffusable (« ${credit} »). NC / ND restent dans le mémo privé ; --prive pour un export filigrané à usage personnel.`); process.exit(2); }
if (!a.valide && !prive) { console.error('REFUS : coupe non validée par Mat (valide: false). Valider d\'abord (#/validation), ou --prive.'); process.exit(2); }
(async () => {
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const page = await browser.newPage({ viewport: { width: 1700, height: 1100 }, deviceScaleFactor: 2 });
  await page.goto('file://' + path.join(root, 'index.html') + '#/validation/' + fiche);
  await page.waitForTimeout(1200);
  await page.evaluate(({ n, titre, credit, filigrane }) => {
    const host = document.querySelectorAll('.anat-valid')[n].querySelectorAll('.anat-host')[1];
    const box = document.createElement('div'); box.id = 'anat-export';
    box.style.cssText = 'position:fixed;inset:0 auto auto 0;z-index:99999;width:1660px;padding:20px;background:#fff;color:#14181d;font-family:-apple-system,system-ui,sans-serif';
    box.innerHTML = `<div style="font:600 22px Georgia,serif;margin-bottom:10px">${titre}</div>`;
    box.appendChild(host); host.querySelector('.anat-bar').remove();
    box.insertAdjacentHTML('beforeend', `<div style="font-size:13px;color:#5b6672;margin-top:10px">Échographie : ${credit}. Coupe anatomique : dessin original, Dr M. Abou-Badra — Institut Français de la Douleur.${filigrane ? ' <b style="color:#b91c1c">USAGE PRIVÉ — NE PAS DIFFUSER.</b>' : ''}</div>`);
    document.body.appendChild(box);
  }, { n: +n, titre: f.titre || fiche, credit, filigrane: !libre || !a.valide });
  await page.waitForTimeout(500);
  await page.locator('#anat-export').screenshot({ path: out });
  console.log(`${out}  (${libre ? 'diffusable, crédit incrusté' : 'FILIGRANE usage privé'}${a.valide ? '' : ', coupe NON VALIDÉE'})`);
  await browser.close();
})();
