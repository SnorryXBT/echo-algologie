// tests/render-markers.test.js  — NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { chromium } = require('playwright');
const { renderMarkers } = require('../scripts/lib/render-markers');
const ROOT = path.resolve(__dirname, '..');
const pngSize = f => { const b = fs.readFileSync(f); return [b.readUInt32BE(16), b.readUInt32BE(20)]; };

test('renderMarkers : recto, verso et image nue à 900 px de large, hauteur selon le crop', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rm-'));
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 1 });
    const spec = { src: path.join(ROOT, 'img/nerf-axillaire/echo-1.jpg'), crop: [0.09, 0.385, 0.34, 0.25], marqueurs: [{ n: 1, x: 0.3, y: 0.22, dy: -0.1, label: 'Deltoïde' }, { n: 2, x: 0.59, y: 0.58, dx: -0.06, dy: -0.3, label: 'Nerf axillaire' }] };
    for (const mode of ['front', 'back', 'plain']) {
      const out = path.join(tmp, mode + '.png');
      await renderMarkers(page, Object.assign({ mode }, spec), out, path.join(tmp, 'r.html'));
      const [w, h] = pngSize(out);
      assert.strictEqual(w, 900, mode + ' : largeur'); assert.ok(h > 300 && h < 900, mode + ' : hauteur ' + h);
    }
  } finally { await browser.close(); }   // une assertion en échec ne doit pas laisser Chromium ouvert : node --test resterait bloqué
});
