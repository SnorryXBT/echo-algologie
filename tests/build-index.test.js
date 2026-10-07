// tests/build-index.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { buildHtml } = require('../scripts/build-index');

test('buildHtml : balises dans l\'ordre registry, libs, données, app.js ; msk.js et js/data/msk présents', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'bi-'));
  for (const d of ['procedures', 'figures', 'anat', 'msk']) fs.mkdirSync(path.join(root, 'js/data', d), { recursive: true });
  fs.writeFileSync(path.join(root, 'js/data/procedures/zz.js'), '');
  fs.writeFileSync(path.join(root, 'js/data/msk/epaule.js'), '');
  const { html, counts } = buildHtml(root);
  assert.deepStrictEqual(counts, { procedures: 1, figures: 0, anat: 0, msk: 1 });
  const pos = s => html.indexOf(s);
  assert.ok(pos('js/data/registry.js') < pos('js/lib/anat.js'), 'registry avant les libs');
  assert.ok(pos('js/lib/anat.js') < pos('js/lib/msk.js'), 'msk.js après anat.js');
  assert.ok(pos('js/lib/msk.js') < pos('js/data/procedures/zz.js'), 'libs avant les données');
  assert.ok(pos('js/data/procedures/zz.js') < pos('js/data/msk/epaule.js'), 'fiches MSK après les fiches gestes');
  assert.ok(pos('js/data/msk/epaule.js') < pos('js/app.js'), 'app.js en dernier');
  assert.ok(html.includes('<a href="#/validation">Validation des coupes anatomiques</a>'), 'pied de colonne inchangé');
});
