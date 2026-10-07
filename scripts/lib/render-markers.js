/* Rendu PNG d'une image à marqueurs numérotés (Playwright) : 'front' = numéros seuls, 'back' = numéros et libellés, 'plain' = image nue.
   renderMarkers(page, { src: chemin absolu, crop: [x0, y0, w, h] en fractions, marqueurs: [{ n, x, y, dx, dy, label }], mode }, outPng, tmpHtml)
   La page est écrite dans tmpHtml et ouverte en file:// : une page about:blank ne peut pas charger d'image locale. */
const fs = require('fs'), path = require('path');
const CSS = `body{margin:0;background:#000}.wrap{position:relative;width:900px;overflow:hidden;background:#000}.clip{position:absolute;inset:0;overflow:hidden}.clip img{position:absolute;display:block;max-width:none}
svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}line{stroke:#d97706;stroke-width:1.6px;vector-effect:non-scaling-stroke}circle{fill:#d97706;stroke:#fff;stroke-width:.3}
.lbl{position:absolute;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);color:#1f2937;border:1.5px solid #d97706;border-radius:7px;padding:2px 8px;font:600 15px -apple-system,system-ui,sans-serif;white-space:nowrap}
.lbl.num{border-radius:999px;min-width:30px;text-align:center;padding:2px 6px;font-size:16px}`;
async function renderMarkers(page, spec, out, tmpHtml) {
  const crop = spec.crop || [0, 0, 1, 1], mode = spec.mode || 'front';
  fs.mkdirSync(path.dirname(tmpHtml), { recursive: true }); fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(tmpHtml, `<!doctype html><meta charset="utf-8"><style>${CSS}</style><div class="wrap" id="w"><div class="clip"><img id="i" src="file://${spec.src}"></div><svg id="s" viewBox="0 0 100 100" preserveAspectRatio="none"></svg></div>`);
  await page.goto('file://' + tmpHtml);
  await page.waitForFunction(() => { const i = document.getElementById('i'); return i.complete && i.naturalWidth > 0; }, null, { timeout: 15000 });
  await page.evaluate(({ crop, marqueurs, mode }) => {
    const w = document.getElementById('w'), img = document.getElementById('i'), svg = document.getElementById('s');
    const W = 900, H = Math.round(W * (img.naturalHeight * crop[3]) / (img.naturalWidth * crop[2]));
    w.style.height = H + 'px';
    img.style.width = (100 / crop[2]) + '%'; img.style.height = (100 / crop[3]) + '%';
    img.style.left = (-crop[0] / crop[2] * 100) + '%'; img.style.top = (-crop[1] / crop[3] * 100) + '%';
    if (mode === 'plain') return;
    svg.innerHTML = marqueurs.map(m => { const tx = m.x + (m.dx || 0), ty = m.y + (m.dy || 0); return `<line x1="${tx * 100}" y1="${ty * 100}" x2="${m.x * 100}" y2="${m.y * 100}"/><circle cx="${m.x * 100}" cy="${m.y * 100}" r="0.9"/>`; }).join('');
    for (const m of marqueurs) { const d = document.createElement('div'); d.className = 'lbl' + (mode === 'front' ? ' num' : ''); d.style.left = ((m.x + (m.dx || 0)) * 100) + '%'; d.style.top = ((m.y + (m.dy || 0)) * 100) + '%'; d.textContent = mode === 'front' ? String(m.n) : `${m.n}. ${m.label}`; w.appendChild(d); }
  }, { crop, marqueurs: spec.marqueurs || [], mode });
  await page.locator('#w').screenshot({ path: out });
  return out;
}
module.exports = { renderMarkers };
