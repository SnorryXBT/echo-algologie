// tests/msk-export.test.js  — NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const crypto = require('crypto'), fs = require('fs'), os = require('os'), path = require('path');
const { spawnSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const tmp = (t, prefixe) => { const d = fs.mkdtempSync(path.join(os.tmpdir(), prefixe)); t.after(() => fs.rmSync(d, { recursive: true, force: true })); return d; };
/* export réel ; `pre` : modules chargés avant le script (--require) pour observer le rendu ou modifier les données reçues, sans toucher au dépôt */
const exporter = (args, pre = []) => spawnSync(process.execPath, [...pre.flatMap(p => ['--require', p]), 'scripts/msk-export.js', ...args], { cwd: ROOT, env: process.env, encoding: 'utf8', timeout: 120000 });
/* espion de renderMarkers : chaque appel ({ spec, out }) est noté dans dir/rendus.json à la sortie du processus ; `panne` = rang de l'appel qui échoue (rendu en échec simulé) */
const espion = (dir, panne = 0) => {
  const f = path.join(dir, 'espion.js'), journal = path.join(dir, 'rendus.json');
  fs.writeFileSync(f, `const fs = require('fs'), m = require(${JSON.stringify(path.join(ROOT, 'scripts/lib/render-markers.js'))}), vrai = m.renderMarkers, appels = [];
process.on('exit', () => fs.writeFileSync(${JSON.stringify(journal)}, JSON.stringify(appels)));
m.renderMarkers = (page, spec, out, html) => { appels.push({ spec, out }); if (appels.length === ${panne}) throw new Error('rendu en échec (simulé)'); return vrai(page, spec, out, html); };\n`);
  return { pre: f, appels: () => JSON.parse(fs.readFileSync(journal, 'utf8')) };
};
/* données du mémo modifiées le temps d'un export : `corps` (texte d'une fonction de ECHO) s'applique à ce que loadEcho rend */
const donnees = (dir, corps) => {
  const f = path.join(dir, 'donnees.js');
  fs.writeFileSync(f, `const m = require(${JSON.stringify(path.join(ROOT, 'scripts/lib/load-echo.js'))}), vrai = m.loadEcho;\nm.loadEcho = (...a) => { const E = vrai(...a); (${corps})(E); return E; };\n`);
  return f;
};
/* arborescence d'un dossier : chemin (et empreinte du contenu pour un fichier), fichiers et dossiers cachés compris */
const arbre = d => fs.readdirSync(d, { recursive: true }).sort().map(n => { const p = path.join(d, n); return fs.statSync(p).isFile() ? `${n} ${crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex')}` : n + '/'; });
const doubles = stderr => { const m = /^clés de cartes en double .*?: (.+)$/m.exec(stderr); assert.ok(m, 'message des clés en double : ' + stderr); return m[1].split(', '); };

test('msk-export epaule : cartes du squelette + socle des 7 gestes, médias préfixés, digest ; sorties d\'un export antérieur remplacées', (t) => {
  const out = tmp(t, 'mx-');
  fs.mkdirSync(path.join(out, 'img', 'epaule'), { recursive: true });
  fs.writeFileSync(path.join(out, 'img', 'epaule', 'msk-epaule-perimee-recto.jpg'), 'ancien');   // média d'une carte disparue depuis l'export précédent
  fs.writeFileSync(path.join(out, 'epaule.cards.json'), '{"cards":[]}');
  const r = exporter(['epaule', '--out', out]);
  assert.strictEqual(r.status, 0, r.stderr);
  assert.match(r.stdout, /epaule : \d+ cartes/);
  const data = JSON.parse(fs.readFileSync(path.join(out, 'epaule.cards.json'), 'utf8'));
  assert.strictEqual(data.region, 'epaule'); assert.strictEqual(data.nom, 'Épaule');
  assert.ok(data.cards.length >= 40, 'au moins 40 cartes avec les 7 fiches gestes : ' + data.cards.length);
  const keys = data.cards.map(c => c.key); assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  for (const c of data.cards) for (const m of c.media) { assert.ok(path.basename(m).startsWith('msk-epaule-'), m); assert.match(m, /\.jpg$/, 'média JPEG : ' + m); assert.ok(fs.existsSync(path.join(ROOT, m)), 'média présent : ' + m); }
  const s = data.cards.find(c => c.key === 'coupe-1-structures');
  assert.match(s.front_html, /<img src="msk-epaule-coupe-1-structures-recto\.jpg">/); assert.match(s.back_html, /<img src="msk-epaule-coupe-1-structures-verso\.jpg">/);
  const medias = [...new Set(data.cards.flatMap(c => c.media.map(m => path.basename(m))))].sort();
  assert.deepStrictEqual(fs.readdirSync(path.join(out, 'img', 'epaule')).sort(), medias, 'img/epaule : exactement les médias des cartes, le média périmé est retiré');
  assert.deepStrictEqual(fs.readdirSync(out).sort(), ['epaule-digest.md', 'epaule.cards.json', 'epaule.json', 'img'], 'ni page temporaire ni dossier de travail');
});

test('msk-export : un dessin identique est rendu une fois (verso de coupe-1 et de coupe-1-structures), copié pour la seconde carte', (t) => {
  const out = tmp(t, 'mx-'), e = espion(tmp(t, 'mx-pre-'));
  const r = exporter(['epaule', '--out', out], [e.pre]);
  assert.strictEqual(r.status, 0, r.stderr);
  const appels = e.appels(), dessins = appels.map(a => JSON.stringify(a.spec));
  assert.ok(appels.length > 0, 'des rendus ont eu lieu');
  assert.strictEqual(new Set(dessins).size, dessins.length, 'aucun dessin rendu deux fois');
  assert.strictEqual(appels.filter(a => /-coupe-1(-structures)?-verso\.jpg$/.test(a.out)).length, 1, 'verso de la coupe 1 rendu une seule fois');
  const data = JSON.parse(fs.readFileSync(path.join(out, 'epaule.cards.json'), 'utf8')), media = k => data.cards.find(c => c.key === k).media.map(m => path.basename(m));
  assert.deepStrictEqual(media('coupe-1'), ['msk-epaule-coupe-1-verso.jpg'], 'chaque carte garde son propre nom de média');
  assert.deepStrictEqual(media('coupe-1-structures'), ['msk-epaule-coupe-1-structures-recto.jpg', 'msk-epaule-coupe-1-structures-verso.jpg']);
  const img = f => fs.readFileSync(path.join(out, 'img', 'epaule', f));
  assert.ok(img('msk-epaule-coupe-1-verso.jpg').equals(img('msk-epaule-coupe-1-structures-verso.jpg')), 'même verso, octet pour octet');
});

test('msk-export : un id de --gestes absent du mémo est refusé avant tout rendu', (t) => {
  const out = tmp(t, 'mx-');
  const r = exporter(['genou', '--gestes', 'sous-acromiale,inconnu', '--out', out]);
  assert.strictEqual(r.status, 1, 'code de sortie'); assert.match(r.stderr, /^geste inconnu : inconnu$/m); assert.ok(!/sous-acromiale/.test(r.stderr), 'un id connu n\'est pas signalé');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');   // les fonctions de cartes ignorent un id inconnu sans rien dire : l'export doit refuser avant
});

test('msk-export : clés de cartes en double (--gestes répété) refusées avant tout rendu, clés nommées', (t) => {
  const out = tmp(t, 'mx-');
  const r = exporter(['genou', '--gestes', 'sous-acromiale,sous-acromiale', '--out', out]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  const cles = doubles(r.stderr);
  assert.ok(cles.includes('socle-sous-acromiale-echo-1') && cles.includes('socle-sous-acromiale-piege-1'), cles.join(', '));
  assert.ok(cles.every(k => k.startsWith('socle-sous-acromiale-')), 'seules les clés en double sont citées : ' + cles.join(', '));
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');   // une clé en double = un GUID Anki en double et une image écrasée
});

test('msk-export : deux pathologies de même slug refusées sur la liste finale des cartes (clés patho- et geste-)', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d);
  const pre = donnees(d, `E => { const p = E.msk.epaule.pathologies; p.push(Object.assign({}, p[0], { nom: p[0].nom.toUpperCase() })); }`);   // même nom en capitales : même slug
  const r = exporter(['epaule', '--out', out], [pre, e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  assert.deepStrictEqual(doubles(r.stderr), ['patho-bursite-sous-acromio-deltoidienne', 'geste-bursite-sous-acromio-deltoidienne']);
  assert.deepStrictEqual(e.appels(), [], 'aucun rendu');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');
});

test('msk-export : image source absente → refus immédiat, carte, fiche et fichier nommés, aucun rendu', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d);
  const pre = donnees(d, `E => {
    E.msk.epaule.protocole[0].image.src = 'img/msk/epaule/absente.jpg';
    E.figures['sous-acromiale'].filter(f => f.type === 'echo' && (f.labels || []).length >= 2)[0].src = 'img/sous-acromiale/absente.jpg';
  }`);
  const r = exporter(['epaule', '--out', out], [pre, e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  assert.match(r.stderr, /^image absente : carte coupe-1-structures \(fiche MSK epaule\) → img\/msk\/epaule\/absente\.jpg$/m);
  assert.match(r.stderr, /^image absente : carte coupe-1 \(fiche MSK epaule\) → img\/msk\/epaule\/absente\.jpg$/m);
  assert.match(r.stderr, /^image absente : carte socle-sous-acromiale-echo-1 \(fiche sous-acromiale\) → img\/sous-acromiale\/absente\.jpg$/m);
  assert.deepStrictEqual(e.appels(), [], 'aucun rendu lancé');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');
});

test('msk-export : un rendu en échec laisse intactes les sorties de l\'export précédent, sans page temporaire ni dossier de travail', (t) => {
  const out = tmp(t, 'mx-'), e = espion(tmp(t, 'mx-pre-'), 3);   // le 3e rendu échoue : deux médias sont déjà écrits
  fs.mkdirSync(path.join(out, 'img', 'epaule'), { recursive: true });
  for (const [f, s] of [['epaule.cards.json', '{"cards":[]}'], ['epaule.json', '{}'], ['epaule-digest.md', '# ancien'], ['img/epaule/msk-epaule-coupe-1-structures-recto.jpg', 'ancien recto']]) fs.writeFileSync(path.join(out, f), s);
  const avant = arbre(out);
  const r = exporter(['epaule', '--out', out], [e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie');
  assert.match(r.stderr, /rendu en échec \(simulé\)/);
  assert.strictEqual(e.appels().length, 3, 'échec au 3e rendu');
  assert.deepStrictEqual(arbre(out), avant, 'sorties précédentes intactes, rien d\'autre');
});

test('msk-export sans fiche MSK (--gestes) : la fiche brute d\'un export antérieur est retirée', (t) => {
  const out = tmp(t, 'mx-');
  fs.writeFileSync(path.join(out, 'genou.json'), '{}');
  const r = exporter(['genou', '--gestes', 'genou-intra-articulaire', '--out', out]);
  assert.strictEqual(r.status, 0, r.stderr);
  assert.deepStrictEqual(fs.readdirSync(out).sort(), ['genou-digest.md', 'genou.cards.json', 'img']);
});
