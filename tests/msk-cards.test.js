// tests/msk-cards.test.js
const test = require('node:test');
const assert = require('node:assert');
const { loadEcho } = require('../scripts/lib/load-echo');
const { cardsFromMsk, cardsFromGestes } = require('../scripts/lib/msk-cards');
const { digest } = require('../scripts/lib/msk-digest');

test('cardsFromMsk sur le squelette épaule : cinq types, clés uniques et stables', () => {
  const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
  const cards = cardsFromMsk(E.msk.epaule, E);
  const types = cards.map(c => c.type).sort();
  assert.deepStrictEqual(types, ['coupe', 'geste', 'pathologie', 'piege', 'structure']);
  assert.deepStrictEqual(cards.map(c => c.key).sort(), ['coupe-1', 'coupe-1-structures', 'geste-bursite-sous-acromio-deltoidienne', 'patho-bursite-sous-acromio-deltoidienne', 'piege-anisotropie']);
  const s = cards.find(c => c.type === 'structure');
  assert.strictEqual(s.image.mode, 'front-back'); assert.strictEqual(s.image.marqueurs.length, 4); assert.match(s.back, /Nerf axillaire/);
  assert.strictEqual(cards.find(c => c.type === 'coupe').image.mode, 'back');
  assert.match(cards.find(c => c.type === 'geste').back, /echo-algologie\.pages\.dev\/#\/fiche\/sous-acromiale/);
  assert.match(cards.find(c => c.type === 'piege').front, /rupture \?/);
  assert.deepStrictEqual(cardsFromMsk(E.msk.epaule, E), cards, 'déterministe');
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
