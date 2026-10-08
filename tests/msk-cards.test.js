// tests/msk-cards.test.js
const test = require('node:test');
const assert = require('node:assert');
const { loadEcho } = require('../scripts/lib/load-echo');
const { cardsFromMsk, cardsFromGestes } = require('../scripts/lib/msk-cards');
const { digest } = require('../scripts/lib/msk-digest');
const slug = require('../scripts/lib/slug');

test('cardsFromMsk sur la fiche épaule du dépôt : cinq types, clés dérivées du contenu, uniques et stables', () => {
  const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
  const f = E.msk.epaule, cards = cardsFromMsk(f, E), keys = cards.map(c => c.key);
  assert.deepStrictEqual([...new Set(cards.map(c => c.type))].sort(), ['coupe', 'geste', 'pathologie', 'piege', 'structure']);
  assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  /* schéma des clés, dérivé de la fiche chargée (le comportement, pas le contenu) : une carte coupe par coupe (coupe-<n>), une carte structure par image
     à ≥ 2 marqueurs (coupe-<n>-structures), une carte pathologie par pathologie (patho-<slug>), une carte geste par pathologie reliée à un geste
     (geste-<slug>), une carte piège par artefact (piege-<slug>) — dans l'ordre de la fiche */
  const attendues = [];
  for (const c of f.protocole) { if (c.image && c.image.src && (c.image.marqueurs || []).length >= 2) attendues.push(`coupe-${c.n}-structures`); attendues.push(`coupe-${c.n}`); }
  for (const p of f.pathologies) { attendues.push(`patho-${slug(p.nom)}`); if ((p.gestes || []).length) attendues.push(`geste-${slug(p.nom)}`); }
  for (const a of f.artefacts || []) attendues.push(`piege-${slug(a.nom)}`);
  assert.deepStrictEqual(keys, attendues);
  assert.ok(keys.includes('patho-bursite-sous-acromio-deltoidienne') && keys.includes('piege-anisotropie'), 'clés du pilote conservées (GUID Anki du paquet déjà distribué)');
  /* carte structure : image recto-verso, marqueurs de la coupe, verso = libellés ; carte coupe : image au verso ; source = crédit, puis licence */
  const c0 = f.protocole.find(c => c.image && c.image.src && (c.image.marqueurs || []).length >= 2), fi = c0.image;
  const s = cards.find(c => c.key === `coupe-${c0.n}-structures`), k = cards.find(c => c.key === `coupe-${c0.n}`);
  assert.strictEqual(s.image.mode, 'front-back'); assert.strictEqual(s.image.marqueurs.length, fi.marqueurs.length);
  for (const m of fi.marqueurs) assert.ok(s.back.includes(E.inline(m.label)), 'verso : ' + m.label);
  assert.strictEqual(k.image.mode, 'back');
  const credit = E.inline(`${fi.credit} — ${fi.licence}`);
  assert.strictEqual(s.source, credit); assert.strictEqual(k.source, credit);
  assert.ok(s.image.marqueurs !== fi.marqueurs && s.image.crop !== fi.crop && k.image.marqueurs !== fi.marqueurs, 'pas d\'alias avec la fiche'); assert.deepStrictEqual(s.image.crop, fi.crop);
  /* pathologie : sans image, pas de source ; avec image, crédit puis licence ; geste : lien vers la fiche du site ; piège : question au recto, réponse au verso */
  const pSans = f.pathologies.find(p => !p.image), pAvec = f.pathologies.find(p => p.image && p.image.src), pG = f.pathologies.find(p => (p.gestes || []).length);
  /* chaque cas doit exister dans la fiche chargée : une fiche qui en manque un échoue ici, bruyamment, au lieu de sauter l'assertion */
  assert.ok(pSans, 'la fiche doit compter une pathologie sans image'); assert.ok(pAvec, 'la fiche doit compter une pathologie illustrée'); assert.ok(pG, 'la fiche doit compter une pathologie reliée à un geste du mémo');
  assert.strictEqual(cards.find(c => c.key === `patho-${slug(pSans.nom)}`).source, '', 'pathologie sans image : pas de source');
  assert.strictEqual(cards.find(c => c.key === `patho-${slug(pAvec.nom)}`).source, E.inline(`${pAvec.image.credit} — ${pAvec.image.licence}`));
  assert.ok(cards.find(c => c.key === `geste-${slug(pG.nom)}`).back.includes(`echo-algologie.pages.dev/#/fiche/${pG.gestes[0]}`));
  const a0 = (f.artefacts || []).find(a => a.question && a.reponse);
  assert.ok(a0, 'la fiche doit compter un artefact à question et réponse');
  const piege = cards.find(c => c.key === `piege-${slug(a0.nom)}`);
  assert.ok(piege.front.includes(E.inline(a0.question)) && piege.back.includes(E.inline(a0.reponse)));
  assert.deepStrictEqual(cardsFromMsk(f, E), cards, 'déterministe');
  assert.ok(cards.every(c => c.tags.includes('msk::epaule')));
});

test('cardsFromGestes : images étiquetées, sono-anatomie, pièges « énoncé : parade »', () => {
  const E = loadEcho({ procedures: true, figures: true, md: true });
  const cards = cardsFromGestes(['sous-acromiale'], E);
  const keys = cards.map(c => c.key);
  assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  assert.ok(keys.includes('socle-sous-acromiale-echo-1'), 'echo-2 (5 étiquettes) devient la carte image n° 1');
  assert.strictEqual(cards.filter(c => c.key.startsWith('socle-sous-acromiale-sono-')).length, 8);
  const piege = cards.find(c => c.key === 'socle-sous-acromiale-piege-1');
  assert.match(piege.front, /anisotropie/); assert.match(piege.back, /basculer la sonde/);
  assert.match(piege.front, /<br>Quelle conséquence, quelle parade \?$/); assert.ok(!piege.front.includes('Que faire'), 'la 2e moitié d\'un piège est une conséquence ou une parade, pas toujours une action');
  const echo = cards.find(c => c.key === 'socle-sous-acromiale-echo-1'), fig = E.figures['sous-acromiale'].find(x => x.src === echo.image.src);
  assert.ok(echo.image.crop !== fig.crop, 'pas d\'alias avec la figure'); assert.deepStrictEqual(echo.image.crop, fig.crop);
  assert.ok(cards.every(c => c.tags.includes('geste::sous-acromiale')));
  assert.ok(cards.every(c => c.tags.includes('msk::socle')), 'sans région : msk::socle');
  const ep = cardsFromGestes(['sous-acromiale'], E, 'epaule');
  assert.ok(ep.every(c => c.tags.includes('msk::epaule') && c.tags.includes('geste::sous-acromiale') && !c.tags.includes('msk::socle')), 'avec région : msk::epaule à la place de msk::socle');
  assert.deepStrictEqual(ep[0].tags, ['msk::epaule', 'geste::sous-acromiale', 'type::structure']);
  assert.deepStrictEqual(ep.map(c => c.key), keys, 'la région ne touche pas aux clés (GUID Anki)');
});

test('digest : fiche puis gestes, sans balises ni astérisques', () => {
  const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
  const md = digest(E.msk.epaule, ['sous-acromiale'], E, 'Épaule');
  assert.match(md, /^# Écho MSK — Épaule/); assert.match(md, /## Fiche diagnostique/); assert.match(md, /## Geste : Bourse sous-acromio/);
  assert.ok(!md.includes('**anisotropie**'), 'gras retiré'); assert.match(md, /### Dictée/);
  // un « < » et un « > » dans une même chaîne sont des comparateurs, pas une balise ; une vraie balise reste retirée
  const g = { titre: 'Test', resume: 'Texte <b>x</b> gras.', protocole: [], sonoanatomie: [], pathologies: [], artefacts: [], dictee: 'Bourse normale < 2 mm ; pathologique > 2 mm.' };
  const out = digest(g, [], E, 'Test');
  assert.ok(out.includes('< 2 mm ; pathologique > 2 mm'), 'comparateurs conservés'); assert.ok(out.includes('Texte x gras.') && !/<\/?b>/.test(out), 'vraie balise retirée, texte gardé');
  assert.ok(digest(Object.assign({}, g, { dictee: '- Bourse fine (< 2 mm).\n- Tendon épaissi (> 5 mm).' }), [], E, 'Test').includes('(< 2 mm).\n- Tendon épaissi (> 5 mm)'), 'comparateurs conservés sur plusieurs lignes');
});

test('cardsFromMsk : verso des structures trié par numéro, libellés passés par inline', () => {
  const E = loadEcho({ procedures: true, md: true });
  const f = { id: 'epaule', titre: 'T', protocole: [{ n: 1, titre: 'c', image: { src: 'img/x.jpg', marqueurs: [{ n: 2, x: 0.6, y: 0.6, label: 'Nerf **axillaire**' }, { n: 1, x: 0.3, y: 0.2, label: 'Deltoïde' }] } }] };
  const s = cardsFromMsk(f, E).find(c => c.type === 'structure');   // marqueurs donnés dans l'ordre n = 2, n = 1 : l'audit les refuse, la carte reste juste
  assert.strictEqual(s.back, '<ol><li value="1">Deltoïde</li><li value="2">Nerf <strong>axillaire</strong></li></ol>');
  assert.match(s.front, /Nommer les structures 1 à 2\./); assert.deepStrictEqual(s.image.marqueurs.map(m => m.n), [1, 2]);
  assert.deepStrictEqual(f.protocole[0].image.marqueurs.map(m => m.n), [2, 1], 'la fiche n\'est pas réordonnée');
});

test('source : crédit et licence passent par inline, comme les crédits du site', () => {
  const E = loadEcho({ procedures: true, md: true });
  const im = { src: 'img/x.jpg', credit: 'Auteur *et al.*, fig. 2', licence: 'CC BY **4.0**', marqueurs: [{ n: 1, x: 0.1, y: 0.1, label: 'a' }, { n: 2, x: 0.2, y: 0.2, label: 'b' }] };
  const cs = cardsFromMsk({ id: 'epaule', titre: 'T', protocole: [{ n: 1, titre: 'c', image: im }], pathologies: [{ nom: 'P', image: im }] }, E);
  for (const k of ['coupe-1', 'coupe-1-structures', 'patho-p']) assert.strictEqual(cs.find(c => c.key === k).source, 'Auteur <em>et al.</em>, fig. 2 — CC BY <strong>4.0</strong>', k);
  const Eg = Object.assign({}, E, { procedures: { h: { titre: 'H' } }, figures: { h: [{ type: 'echo', src: 'img/x.jpg', credit: 'Walter *et al.*', labels: [{ x: 0.1, y: 0.1, text: 'a' }, { x: 0.2, y: 0.2, text: 'b' }] }] } });
  assert.strictEqual(cardsFromGestes(['h'], Eg)[0].source, 'Walter <em>et al.</em>');
});

test('aucun HTML brut issu des données dans les cartes, avec ou sans E.inline et E.md', () => {
  const E = loadEcho({ procedures: true, md: true });
  const H = '<script>x</script> & "q"', mq = [{ n: 1, x: 0.1, y: 0.1, label: H }, { n: 2, x: 0.2, y: 0.2, label: H }];
  const f = {
    id: 'epaule', titre: H,
    protocole: [{ n: 1, titre: H, position: H, repere: H, structures: [H, H], dynamique: H, image: { src: 'img/x.jpg', crop: [0, 0, 1, 1], credit: H, licence: H, marqueurs: mq } }],
    pathologies: [{ nom: H, en: H, vignette: H, signes: [H, H, H, H], conduite: H, gestes: [H, 'sous-acromiale'], image: { src: 'img/p.jpg', credit: H, licence: H } }],
    artefacts: [{ nom: H, texte: H, question: H, reponse: H }, { nom: 'Autre ' + H, texte: H }],
  };
  const hote = { procedures: { h: { titre: H, sonoanatomie: [{ structure: H, aspect: H, repere: H }], pieges: [H + ' : ' + H] } }, figures: { h: [{ type: 'echo', src: 'img/x.jpg', titre: H, legende: H, credit: H, labels: [{ x: 0.1, y: 0.1, text: H }, { x: 0.2, y: 0.2, text: H }] }] } };
  const texte = cs => cs.flatMap(c => [c.front, c.back, c.source]).join('\n');
  const verifie = (nom, t) => { assert.ok(!/<script/i.test(t), nom + ' : <script brut'); assert.ok(t.includes('&amp;') && t.includes('&lt;script&gt;'), nom + ' : esperluette et chevrons échappés'); };
  for (const [nom, EE] of [['E complet', E], ['sans inline ni md', { procedures: E.procedures }], ['sans E', undefined]]) verifie('cardsFromMsk, ' + nom, texte(cardsFromMsk(f, EE)));
  for (const [nom, EE] of [['E complet', Object.assign({}, E, hote)], ['sans inline ni md', hote]]) verifie('cardsFromGestes, ' + nom, texte(cardsFromGestes(['h'], EE, 'epaule')));
  const geste = cardsFromMsk(f, E).find(c => c.type === 'geste');   // l'identifiant d'un geste entre dans un href : encodé, il ne peut pas sortir de l'attribut
  assert.ok([...geste.back.matchAll(/href="([^"]*)"/g)].every(m => /^[\w:\/#.%~!*'()-]*$/.test(m[1])), 'href sans caractère à échapper');
  assert.match(geste.back, /fiche\/sous-acromiale"/); assert.match(geste.back, /fiche\/%3Cscript%3Ex%3C%2Fscript%3E%20%26%20%22q%22"/);
});

test('corpus des fiches gestes : clés uniques, aucun « ** » résiduel dans les cartes', () => {
  const E = loadEcho({ procedures: true, figures: true, md: true });
  const cards = cardsFromGestes(E.manifest, E), keys = cards.map(c => c.key);
  assert.ok(cards.length > 0);
  assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  const residus = cards.flatMap(c => ['front', 'back', 'source'].filter(k => c[k].includes('**')).map(k => `${c.key}.${k}`));
  assert.deepStrictEqual(residus, [], 'balisage Markdown mal formé dans les données (symbole « *** », gras non fermé) : à corriger dans la fiche ou la figure');
});
