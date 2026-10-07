// tests/render-markers.test.js  — NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { chromium } = require('playwright');
const { renderMarkers } = require('../scripts/lib/render-markers');
const ROOT = path.resolve(__dirname, '..');
/* dimensions d'un JPEG : segments lus depuis l'octet 2 jusqu'au marqueur SOF (0xC0–0xCF sauf C4, C8, CC), comme size() dans scripts/anat-check.js ; null si ce n'est pas un JPEG */
const jpgSize = f => {
  const b = fs.readFileSync(f);
  if (b[0] !== 0xff || b[1] !== 0xd8) return null;
  for (let i = 2; i + 8 < b.length;) { const m = b[i + 1], l = b.readUInt16BE(i + 2); if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; i += 2 + l; }
  return null;
};

test('renderMarkers : recto, verso et image nue en JPEG à 900 px de large, hauteur selon le crop', async (t) => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rm-'));
  t.after(() => fs.rmSync(tmp, { recursive: true, force: true }));
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 1 });
    const spec = { src: path.join(ROOT, 'img/nerf-axillaire/echo-1.jpg'), crop: [0.09, 0.385, 0.34, 0.25], marqueurs: [{ n: 1, x: 0.3, y: 0.22, dy: -0.1, label: 'Deltoïde' }, { n: 2, x: 0.59, y: 0.58, dx: -0.06, dy: -0.3, label: 'Nerf axillaire' }] };
    for (const mode of ['front', 'back', 'plain']) {
      const out = path.join(tmp, mode + '.jpg');
      await renderMarkers(page, Object.assign({ mode }, spec), out, path.join(tmp, 'r.html'));
      const dim = jpgSize(out);
      assert.ok(dim, mode + ' : JPEG lisible');
      const [w, h] = dim;
      assert.strictEqual(w, 900, mode + ' : largeur'); assert.ok(h > 300 && h < 900, mode + ' : hauteur ' + h);
    }
  } finally { await browser.close(); }   // une assertion en échec ne doit pas laisser Chromium ouvert : node --test resterait bloqué
});
