// tests/build-index.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { buildHtml } = require('../scripts/build-index');

test('buildHtml : balises dans l\'ordre registry, libs, données (fiches gestes, figures, coupes anatomiques, fiches MSK), app.js', (t) => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'bi-'));
  t.after(() => fs.rmSync(root, { recursive: true, force: true }));   // racine factice supprimée après le test
  for (const d of ['procedures', 'figures', 'anat', 'msk']) fs.mkdirSync(path.join(root, 'js/data', d), { recursive: true });
  for (const f of ['procedures/zz.js', 'figures/aa.js', 'anat/aa.js', 'msk/epaule.js']) fs.writeFileSync(path.join(root, 'js/data', f), '');   // « aa » avant « zz » : l'ordre vient du dossier, pas du nom
  const { html, counts } = buildHtml(root);
  assert.deepStrictEqual(counts, { procedures: 1, figures: 1, anat: 1, msk: 1 });
  const pos = s => html.indexOf(s);
  assert.ok(pos('js/data/registry.js') >= 0, 'registry présent');
  assert.ok(pos('js/data/registry.js') < pos('js/lib/anat.js'), 'registry avant les libs');
  assert.ok(pos('js/lib/anat.js') < pos('js/lib/msk.js'), 'msk.js après anat.js');
  assert.ok(pos('js/lib/msk.js') < pos('js/data/procedures/zz.js'), 'libs avant les données');
  assert.ok(pos('js/data/procedures/zz.js') < pos('js/data/figures/aa.js'), 'figures après les fiches gestes');
  assert.ok(pos('js/data/figures/aa.js') < pos('js/data/anat/aa.js'), 'coupes anatomiques après les figures');
  assert.ok(pos('js/data/anat/aa.js') < pos('js/data/msk/epaule.js'), 'fiches MSK après les coupes anatomiques');
  assert.ok(pos('js/data/msk/epaule.js') < pos('js/app.js'), 'app.js en dernier');
  assert.ok(html.includes('<a href="#/validation">Validation des coupes anatomiques</a>'), 'pied de colonne inchangé');
});
