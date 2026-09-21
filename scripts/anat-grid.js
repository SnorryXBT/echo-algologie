/* Repérage d'une coupe échographique avant tracé (skill /echo-anatomie).
   node scripts/anat-grid.js <fiche> <n> [dossier-sortie]      n = rang de la figure `type:'echo'` dans la fiche (0, 1…)
   Produit, dans le repère de tracé (largeur 1000, hauteur proportionnelle à l'image APRÈS crop) :
     grille.png            image entière + grille cotée (pas de 50)
     zoom-hg|hd|bg|bd.png  quatre quadrants agrandis, grille au pas de 25
   et imprime `vb`, puis les pics de brillance le long de colonnes verticales (x tous les 50) :
   ce sont eux qui placent les interfaces (corticale, fascia, plèvre), pas l'œil. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const [fiche, n = '0', outDir = '.'] = process.argv.slice(2);
if (!fiche) { console.error('usage : node scripts/anat-grid.js <fiche> <n> [dossier-sortie]'); process.exit(1); }
global.window = global; global.ECHO = { figures: {} };
eval(fs.readFileSync(path.join(root, 'js/data/figures', fiche + '.js'), 'utf8'));
const fig = (ECHO.figures[fiche] || []).filter(f => f.type === 'echo')[+n];
if (!fig) { console.error(`pas de figure echo n° ${n} dans ${fiche}`); process.exit(1); }
const file = path.join(root, fig.src), crop = fig.crop || [0, 0, 1, 1];
const data = 'data:image/' + (/\.png$/i.test(file) ? 'png' : 'jpeg') + ';base64,' + fs.readFileSync(file).toString('base64');

(async () => {
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const page = await browser.newPage({ viewport: { width: 1900, height: 1500 } });
  const info = await page.evaluate(async ({ data, crop }) => {
    const im = new Image(); im.src = data; await im.decode();
    const w = Math.round(im.width * crop[2]), h = Math.round(im.height * crop[3]);
    const c = document.createElement('canvas'); c.width = w; c.height = h;
    const g = c.getContext('2d'); g.drawImage(im, im.width * crop[0], im.height * crop[1], w, h, 0, 0, w, h);
    const D = g.getImageData(0, 0, w, h).data, H = Math.round(1000 * h / w), prof = {};
    for (let xu = 50; xu < 1000; xu += 50) {
      const x = Math.round(xu / 1000 * w), col = [];
      for (let y = 0; y < h; y++) { let s = 0; for (const dx of [-1, 0, 1]) { const i = (y * w + Math.min(w - 1, Math.max(0, x + dx))) * 4; s += D[i] + D[i + 1] + D[i + 2]; } col.push(Math.round(s / 9)); }
      const pk = []; for (let y = 1; y < h - 1; y++) if (col[y] >= col[y - 1] && col[y] > col[y + 1] && col[y] > 95) pk.push(Math.round(y / h * H) + ':' + col[y]);
      prof[xu] = pk.join(' ');
    }
    return { w, h, H, url: c.toDataURL('image/png'), prof };
  }, { data, crop });
  const H = info.H;
  const svg = (vb, pas, fs0) => {
    const [x0, y0, ww, hh] = vb; let g = '';
    for (let x = Math.ceil(x0 / pas) * pas; x <= x0 + ww; x += pas) { const M = x % (pas * 2) === 0; g += `<line x1="${x}" y1="${y0}" x2="${x}" y2="${y0 + hh}" stroke="${M ? '#ff0' : '#0ff'}" stroke-width="${M ? fs0 / 12 : fs0 / 25}" opacity=".7"/>` + (M ? `<text x="${x + 2}" y="${y0 + fs0}" font-size="${fs0}" fill="#ff0">${x}</text>` : ''); }
    for (let y = Math.ceil(y0 / pas) * pas; y <= y0 + hh; y += pas) { const M = y % (pas * 2) === 0; g += `<line x1="${x0}" y1="${y}" x2="${x0 + ww}" y2="${y}" stroke="${M ? '#ff0' : '#0ff'}" stroke-width="${M ? fs0 / 12 : fs0 / 25}" opacity=".7"/>` + (M ? `<text x="${x0 + 2}" y="${y - 2}" font-size="${fs0}" fill="#ff0">${y}</text>` : ''); }
    return `<html><body style="margin:0;background:#222"><svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" width="1900" height="${Math.round(1900 * hh / ww)}"><image href="${info.url}" width="1000" height="${H}" preserveAspectRatio="none" style="filter:brightness(1.45) contrast(1.15)"/>${g}</svg></body></html>`;
  };
  const shoot = async (name, vb, pas, fs0) => {
    await page.setViewportSize({ width: 1900, height: Math.round(1900 * vb[3] / vb[2]) });
    await page.setContent(svg(vb, pas, fs0)); await page.waitForTimeout(200);
    await page.screenshot({ path: path.join(outDir, name) });
  };
  fs.mkdirSync(outDir, { recursive: true });
  await shoot('grille.png', [0, 0, 1000, H], 50, 10);
  const hw = 540, hh = Math.round(H * 0.54);
  await shoot('zoom-hg.png', [0, 0, hw, hh], 25, 6); await shoot('zoom-hd.png', [1000 - hw, 0, hw, hh], 25, 6);
  await shoot('zoom-bg.png', [0, H - hh, hw, hh], 25, 6); await shoot('zoom-bd.png', [1000 - hw, H - hh, hw, hh], 25, 6);
  console.log(`image : ${fig.src}  crop ${JSON.stringify(crop)}  → ${info.w} × ${info.h} px utiles${info.w < 400 ? '  (BASSE RÉSOLUTION : interfaces fines non traçables avec certitude)' : ''}`);
  console.log(`vb: [1000, ${H}]`);
  console.log('pics de brillance  x | y:intensité');
  for (const k in info.prof) console.log(String(k).padStart(4), '|', info.prof[k]);
  await browser.close();
})();
