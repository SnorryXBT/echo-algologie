// tests/msk-export.test.js  — NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { execFileSync, spawnSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');

test('msk-export epaule : cartes du squelette + socle des 7 gestes, médias préfixés, digest', (t) => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'mx-'));
  t.after(() => fs.rmSync(out, { recursive: true, force: true }));
  const log = execFileSync('node', ['scripts/msk-export.js', 'epaule', '--out', out], { cwd: ROOT, env: process.env, encoding: 'utf8' });
  assert.match(log, /epaule : \d+ cartes/);
  const data = JSON.parse(fs.readFileSync(path.join(out, 'epaule.cards.json'), 'utf8'));
  assert.strictEqual(data.region, 'epaule'); assert.strictEqual(data.nom, 'Épaule');
  assert.ok(data.cards.length >= 40, 'au moins 40 cartes avec les 7 fiches gestes : ' + data.cards.length);
  const keys = data.cards.map(c => c.key); assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  for (const c of data.cards) for (const m of c.media) { assert.ok(path.basename(m).startsWith('msk-epaule-'), m); assert.match(m, /\.jpg$/, 'média JPEG : ' + m); assert.ok(fs.existsSync(path.join(ROOT, m)), 'média présent : ' + m); }
  const s = data.cards.find(c => c.key === 'coupe-1-structures');
  assert.match(s.front_html, /<img src="msk-epaule-coupe-1-structures-recto\.jpg">/); assert.match(s.back_html, /<img src="msk-epaule-coupe-1-structures-verso\.jpg">/);
  assert.ok(fs.existsSync(path.join(out, 'epaule.json')) && fs.existsSync(path.join(out, 'epaule-digest.md')));
  assert.ok(!fs.existsSync(path.join(out, '_render.html')), 'page temporaire nettoyée');
});

test('msk-export : un id de --gestes absent du mémo est refusé avant tout rendu', (t) => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'mx-'));
  t.after(() => fs.rmSync(out, { recursive: true, force: true }));
  const r = spawnSync('node', ['scripts/msk-export.js', 'genou', '--gestes', 'sous-acromiale,inconnu', '--out', out], { cwd: ROOT, env: process.env, encoding: 'utf8' });
  assert.strictEqual(r.status, 1, 'code de sortie'); assert.match(r.stderr, /^geste inconnu : inconnu$/m); assert.ok(!/sous-acromiale/.test(r.stderr), 'un id connu n\'est pas signalé');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');   // les fonctions de cartes ignorent un id inconnu sans rien dire : l'export doit refuser avant
});

test('msk-export : un rendu en échec ne laisse ni page temporaire ni cartes', (t) => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'mx-'));
  t.after(() => fs.rmSync(out, { recursive: true, force: true }));
  fs.mkdirSync(path.join(out, 'img', 'epaule', 'msk-epaule-coupe-1-structures-recto.jpg'), { recursive: true });   // un dossier à la place du premier média : son écriture échoue (EISDIR), page temporaire déjà ouverte
  const r = spawnSync('node', ['scripts/msk-export.js', 'epaule', '--out', out], { cwd: ROOT, env: process.env, encoding: 'utf8', timeout: 60000 });
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.status + ' ' + (r.stderr || '').slice(0, 200));
  assert.ok(!fs.existsSync(path.join(out, '_render.html')), 'page temporaire supprimée malgré l\'échec');
  assert.ok(!fs.existsSync(path.join(out, 'epaule.cards.json')), 'aucun cards.json écrit');
});
