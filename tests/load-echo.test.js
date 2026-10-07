// tests/load-echo.test.js
const test = require('node:test');
const assert = require('node:assert');
const { loadEcho } = require('../scripts/lib/load-echo');

test('registre MSK : 8 régions dans l\'ordre du plan, registerMsk vérifie la région', () => {
  const E = loadEcho({});
  assert.deepStrictEqual(E.mskRegions.map(r => r.id), ['epaule', 'genou', 'rachis', 'coude', 'poignet-main', 'hanche', 'cheville-pied', 'paroi-nerfs']);
  assert.deepStrictEqual(E.mskTypes, { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' });
  assert.throws(() => E.registerMsk({ id: 'nez' }), /Région MSK inconnue/);
  assert.throws(() => E.registerMsk({}), /sans id/);
  E.registerMsk({ id: 'genou', titre: 'Genou' });
  assert.strictEqual(E.msk.genou.titre, 'Genou');
});

test('loadEcho charge fiches, figures et md à la demande', () => {
  const E = loadEcho({ procedures: true, figures: true, md: true });
  assert.ok(E.procedures['sous-acromiale'], 'fiche sous-acromiale chargée');
  assert.ok(E.figures['sous-acromiale'].length > 0, 'figures chargées');
  assert.strictEqual(E.inline('**a**'), '<strong>a</strong>');
});
