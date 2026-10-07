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
/* données factices, indépendantes du squelette épaule (que la tâche 13 remplace) et des figures du mémo. Fiche « epaule » : coupe 1 imagée (trois marqueurs),
   coupe 2 sans image libre (image null + sansImage), une pathologie imagée reliée au geste factice, une sans image, un artefact ; geste factice : une figure écho
   à deux étiquettes, un piège. Image : un SVG du dossier de test, désigné comme une vraie par un chemin relatif au dépôt. `retouche` : code appliqué ensuite à E. */
const factice = (dir, retouche = '') => {
  const svg = path.join(dir, 'coupe.svg');
  fs.writeFileSync(svg, '<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300"><rect width="400" height="300" fill="#444"/><circle cx="200" cy="150" r="70" fill="#aaa"/></svg>');
  const src = path.relative(ROOT, svg);
  const fiche = { id: 'epaule', titre: 'Fiche factice', valide: false, gestes: ['geste-factice'],
    protocole: [
      { n: 1, titre: 'Coupe imagée', position: 'Assis', repere: 'Repère', structures: ['Un', 'Deux', 'Trois'],
        image: { src, credit: 'Test', licence: 'CC0', marqueurs: [{ n: 1, x: 0.2, y: 0.3, dy: -0.15, label: 'Un' }, { n: 2, x: 0.5, y: 0.5, dx: 0.2, label: 'Deux' }, { n: 3, x: 0.7, y: 0.8, dy: 0.1, label: 'Trois' }] } },
      { n: 2, titre: 'Coupe sans image libre', position: 'Assis', repere: 'Repère', structures: ['Quatre'], image: null, sansImage: 'Aucune figure CC BY de cette coupe (test)' },
    ],
    pathologies: [
      { nom: 'Pathologie imagée', signes: ['Signe'], conduite: 'Conduite', gestes: ['geste-factice'], vignette: 'Vignette', image: { src, credit: 'Test', licence: 'CC0' } },
      { nom: 'Pathologie sans image', signes: ['Signe'], conduite: 'Conduite' },
    ],
    artefacts: [{ nom: 'Artefact', texte: 'Texte' }],
  };
  const geste = { id: 'geste-factice', titre: 'Geste factice', pieges: ['Un piège assez long pour une carte : et sa parade, assez longue aussi'] };
  const figures = [{ type: 'echo', src, labels: [{ x: 0.3, y: 0.4, text: 'Cinq' }, { x: 0.6, y: 0.6, text: 'Six' }] }];
  return donnees(dir, `E => { E.msk.epaule = ${JSON.stringify(fiche)}; E.procedures['geste-factice'] = ${JSON.stringify(geste)}; E.figures['geste-factice'] = ${JSON.stringify(figures)}; ${retouche} }`);
};
/* arborescence d'un dossier : chemin (et empreinte du contenu pour un fichier), fichiers et dossiers cachés compris */
const arbre = d => fs.readdirSync(d, { recursive: true }).sort().map(n => { const p = path.join(d, n); return fs.statSync(p).isFile() ? `${n} ${crypto.createHash('sha1').update(fs.readFileSync(p)).digest('hex')}` : n + '/'; });
const doubles = stderr => { const m = /^clés de cartes en double .*?: (.+)$/m.exec(stderr); assert.ok(m, 'message des clés en double : ' + stderr); return m[1].split(', '); };
const cartes = out => JSON.parse(fs.readFileSync(path.join(out, 'epaule.cards.json'), 'utf8')).cards;
const medias = (cs, key) => cs.find(c => c.key === key).media.map(m => path.basename(m));

test('msk-export epaule (données réelles) : cartes de la fiche et du socle des gestes, médias préfixés et cités, sorties d\'un export antérieur remplacées', (t) => {
  const out = tmp(t, 'mx-');
  fs.mkdirSync(path.join(out, 'img', 'epaule'), { recursive: true });
  for (const f of ['msk-epaule-perimee-recto.jpg', '.DS_Store']) fs.writeFileSync(path.join(out, 'img', 'epaule', f), 'ancien');   // média d'une carte disparue ; métadonnées du Finder, tolérées
  fs.writeFileSync(path.join(out, 'epaule.cards.json'), '{"cards":[]}');
  const r = exporter(['epaule', '--out', out]);
  assert.strictEqual(r.status, 0, r.stderr);
  assert.match(r.stdout, /^epaule : \d+ cartes \(.+\), \d+ images → /m);
  const data = JSON.parse(fs.readFileSync(path.join(out, 'epaule.cards.json'), 'utf8'));
  assert.strictEqual(data.region, 'epaule'); assert.strictEqual(data.nom, 'Épaule');
  assert.ok(data.cards.length >= 40, 'au moins 40 cartes avec les fiches gestes : ' + data.cards.length);
  const keys = data.cards.map(c => c.key); assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  for (const c of data.cards) for (const m of c.media) {
    assert.ok(path.basename(m).startsWith('msk-epaule-'), m); assert.match(m, /\.jpg$/, 'média JPEG : ' + m); assert.ok(fs.existsSync(path.join(ROOT, m)), 'média présent : ' + m);
    assert.ok((c.front_html + c.back_html).includes(`<img src="${path.basename(m)}">`), `média cité par sa carte : ${c.key} → ${path.basename(m)}`);
  }
  const tous = [...new Set(data.cards.flatMap(c => c.media.map(m => path.basename(m))))].sort();
  assert.ok(tous.length > 0, 'des médias');
  assert.deepStrictEqual(fs.readdirSync(path.join(out, 'img', 'epaule')).sort(), tous, 'img/epaule : exactement les médias des cartes, média périmé et .DS_Store retirés');
  assert.deepStrictEqual(fs.readdirSync(out).sort(), ['epaule-digest.md', 'epaule.cards.json', 'epaule.json', 'img'], 'ni page temporaire ni dossier de travail');
});

test('msk-export : un dessin identique est rendu une fois (verso de coupe-n et de coupe-n-structures), copié sous le nom de la seconde carte', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d);
  const r = exporter(['epaule', '--out', out], [factice(d), e.pre]);
  assert.strictEqual(r.status, 0, r.stderr);
  const appels = e.appels();
  assert.deepStrictEqual(appels.map(a => path.basename(a.out)), ['msk-epaule-coupe-1-structures-recto.jpg', 'msk-epaule-coupe-1-structures-verso.jpg', 'msk-epaule-patho-pathologie-imagee-image.jpg',
    'msk-epaule-socle-geste-factice-echo-1-recto.jpg', 'msk-epaule-socle-geste-factice-echo-1-verso.jpg'], 'cinq rendus pour six médias : le verso de coupe-1 n\'est pas rendu');
  assert.strictEqual(new Set(appels.map(a => JSON.stringify(a.spec))).size, appels.length, 'aucun dessin rendu deux fois');
  const cs = cartes(out);
  assert.deepStrictEqual(medias(cs, 'coupe-1'), ['msk-epaule-coupe-1-verso.jpg'], 'chaque carte garde son propre nom de média');
  assert.deepStrictEqual(medias(cs, 'coupe-1-structures'), ['msk-epaule-coupe-1-structures-recto.jpg', 'msk-epaule-coupe-1-structures-verso.jpg']);
  const img = f => fs.readFileSync(path.join(out, 'img', 'epaule', f));
  assert.ok(img('msk-epaule-coupe-1-verso.jpg').equals(img('msk-epaule-coupe-1-structures-verso.jpg')), 'même verso, octet pour octet');
});

test('msk-export : une coupe sans image libre (image null + sansImage) garde sa carte « coupe » en texte seul, sans rendu ni média, sans carte « structures »', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d);
  const r = exporter(['epaule', '--out', out], [factice(d), e.pre]);
  assert.strictEqual(r.status, 0, r.stderr);
  const cs = cartes(out), c = cs.find(x => x.key === 'coupe-2');
  assert.ok(c, 'carte coupe-2 présente');
  assert.deepStrictEqual(c.media, []); assert.ok(!/<img/.test(c.front_html + c.back_html), 'aucune image dans la carte');
  assert.ok(!cs.some(x => x.key === 'coupe-2-structures'), 'pas de carte « structures » sans image');
  assert.ok(!e.appels().some(a => /-coupe-2-/.test(a.out)), 'aucun rendu pour la coupe 2');
});

test('msk-export : un id de --gestes absent du mémo est refusé avant tout rendu', (t) => {
  const out = tmp(t, 'mx-');
  const r = exporter(['genou', '--gestes', 'sous-acromiale,inconnu', '--out', out]);
  assert.strictEqual(r.status, 1, 'code de sortie'); assert.match(r.stderr, /^geste inconnu : inconnu$/m); assert.ok(!/sous-acromiale/.test(r.stderr), 'un id connu n\'est pas signalé');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');   // les fonctions de cartes ignorent un id inconnu sans rien dire : l'export doit refuser avant
});

test('msk-export : clés de cartes en double (--gestes répété) refusées avant tout rendu, toutes nommées', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d);
  const r = exporter(['genou', '--gestes', 'geste-factice,geste-factice', '--out', out], [factice(d), e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  assert.deepStrictEqual(doubles(r.stderr), ['socle-geste-factice-echo-1', 'socle-geste-factice-piege-1']);
  assert.deepStrictEqual(e.appels(), [], 'aucun rendu');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');   // une clé en double = un GUID Anki en double et une image écrasée
});

test('msk-export : deux pathologies de même slug refusées sur la liste finale des cartes (clés patho- et geste-)', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d);
  const pre = factice(d, `const p = E.msk.epaule.pathologies; p.push(Object.assign({}, p[0], { nom: p[0].nom.toUpperCase() }));`);   // même nom en capitales : même slug
  const r = exporter(['epaule', '--out', out], [pre, e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  assert.deepStrictEqual(doubles(r.stderr), ['patho-pathologie-imagee', 'geste-pathologie-imagee']);
  assert.deepStrictEqual(e.appels(), [], 'aucun rendu');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');
});

test('msk-export : image source absente → refus immédiat, carte, fiche et fichier nommés, aucun rendu', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d), absente = path.relative(ROOT, path.join(d, 'absente.jpg'));
  const pre = factice(d, `E.msk.epaule.protocole[0].image.src = ${JSON.stringify(absente)}; E.figures['geste-factice'][0].src = ${JSON.stringify(absente)};`);
  const r = exporter(['epaule', '--out', out], [pre, e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  assert.deepStrictEqual(r.stderr.split('\n').filter(Boolean), [
    `image absente : carte coupe-1-structures (fiche MSK epaule) → ${absente}`,
    `image absente : carte coupe-1 (fiche MSK epaule) → ${absente}`,
    `image absente : carte socle-geste-factice-echo-1 (fiche geste-factice) → ${absente}`]);
  assert.deepStrictEqual(e.appels(), [], 'aucun rendu lancé');
  assert.deepStrictEqual(fs.readdirSync(out), [], 'rien n\'est écrit');
});

test('msk-export : un dossier img/<region> qui contient autre chose que des médias de l\'export est refusé, laissé intact, rien n\'est écrit', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d), dossier = path.join(out, 'img', 'epaule');
  fs.mkdirSync(dossier, { recursive: true });
  fs.writeFileSync(path.join(dossier, 'msk-epaule-coupe-1-verso.jpg'), 'média');
  fs.writeFileSync(path.join(dossier, 'notes.txt'), 'à garder');   // --out mal choisi : un fichier qui n'est pas un média de l'export
  const avant = arbre(out);
  const r = exporter(['epaule', '--out', out], [factice(d), e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie : ' + r.stderr);
  assert.ok(r.stderr.includes(dossier) && r.stderr.includes('notes.txt'), 'dossier et entrée étrangère nommés : ' + r.stderr);
  assert.deepStrictEqual(e.appels(), [], 'aucun rendu');
  assert.deepStrictEqual(arbre(out), avant, 'dossier intact, rien d\'autre écrit');
});

test('msk-export : un rendu en échec laisse intactes les sorties de l\'export précédent, sans page temporaire ni dossier de travail', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-'), e = espion(d, 3);   // le 3e rendu échoue : deux médias et une copie sont déjà écrits
  fs.mkdirSync(path.join(out, 'img', 'epaule'), { recursive: true });
  for (const [f, s] of [['epaule.cards.json', '{"cards":[]}'], ['epaule.json', '{}'], ['epaule-digest.md', '# ancien'], ['img/epaule/msk-epaule-coupe-1-structures-recto.jpg', 'ancien recto']]) fs.writeFileSync(path.join(out, f), s);
  const avant = arbre(out);
  const r = exporter(['epaule', '--out', out], [factice(d), e.pre]);
  assert.strictEqual(r.status, 1, 'code de sortie');
  assert.match(r.stderr, /rendu en échec \(simulé\)/);
  assert.strictEqual(e.appels().length, 3, 'échec au 3e rendu');
  assert.deepStrictEqual(arbre(out), avant, 'sorties précédentes intactes, rien d\'autre');
});

test('msk-export sans fiche MSK (--gestes) : la fiche brute d\'un export antérieur est retirée', (t) => {
  const out = tmp(t, 'mx-'), d = tmp(t, 'mx-pre-');
  fs.writeFileSync(path.join(out, 'genou.json'), '{}');
  const r = exporter(['genou', '--gestes', 'geste-factice', '--out', out], [factice(d)]);
  assert.strictEqual(r.status, 0, r.stderr);
  assert.deepStrictEqual(fs.readdirSync(out).sort(), ['genou-digest.md', 'genou.cards.json', 'img']);
});
