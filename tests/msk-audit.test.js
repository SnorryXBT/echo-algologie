// tests/msk-audit.test.js
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { auditMsk, slug } = require('../scripts/lib/msk-audit-rules');
const { loadEcho, ROOT } = require('../scripts/lib/load-echo');

const fiche = () => ({
  id: 'genou', titre: 'Genou', en: 'Knee', maj: '2026-10', valide: false, motsCles: ['genou'],
  flash: { sonde: 'lineaire' },
  protocole: [{ n: 1, titre: 'Tendon quadricipital', position: 'Dorsal, genou fléchi 30°', repere: 'Patella', structures: ['Tendon quadricipital'],
    image: { src: 'img/nerf-axillaire/echo-1.jpg', credit: 'Abril-Serván et al. 2026', licence: 'CC BY 4.0', marqueurs: [{ n: 1, x: 0.3, y: 0.2, label: 'Deltoïde' }, { n: 2, x: 0.6, y: 0.6, label: 'Nerf' }] } }],
  sonoanatomie: [{ structure: 'Tendon quadricipital', aspect: 'fibrillaire', mesure: 'épaisseur 5–7 mm', source: [0] }],
  pathologies: [{ nom: 'Tendinopathie quadricipitale', signes: ['épaississement'], conduite: 'rééducation', gestes: ['genou-intra-articulaire'] }],
  artefacts: [{ nom: 'Anisotropie', texte: 'basculer la sonde' }],
  dictee: 'Tendon quadricipital de 5–7 mm, fibrillaire.',
  competences: [{ id: 'genou.c01', type: 'coupe', libelle: 'Coupe 1', niveau: 1, sources: [0] }, { id: 'genou.p01', type: 'pathologie', libelle: 'Tendinopathie', niveau: 2, sources: [0], patho: 'tendinopathie-quadricipitale' }],
  references: [{ titre: 'ESSR knee', annee: '2010', url: 'https://essr.org/content-essr/uploads/2016/10/knee.pdf', verif: true }],
  videos: [{ titre: 'v', url: 'https://www.youtube.com/watch?v=x' }],
});
const ctx = { root: ROOT, procedures: { 'genou-intra-articulaire': {} }, types: { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' } };
const errsOf = mut => { const f = fiche(); mut(f); return auditMsk(f, ctx); };

test('slug', () => assert.strictEqual(slug('Bursite sous-acromio-deltoïdienne !'), 'bursite-sous-acromio-deltoidienne'));
test('fiche conforme : aucune erreur', () => assert.deepStrictEqual(auditMsk(fiche(), ctx), []));
test('chaque règle produit son erreur', () => {
  const cas = [
    [f => { f.competences[0].id = 'genou.s01'; }, /lettre « s » ne correspond pas au type coupe/],
    [f => { f.competences[1].id = 'genou.c01'; f.competences[1].type = 'coupe'; }, /en double/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/x.jpg'; f.protocole[0].image.licence = 'CC BY-SA 4.0'; }, /jamais ND ni SA/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/absente.jpg'; }, /image absente sur le disque/],
    [f => { f.protocole[0].image.marqueurs[0].x = 1.4; }, /hors de l'image/],
    [f => { f.protocole[0].image.marqueurs[1].n = 1; }, /marqueur 1 en double/],
    [f => { f.dictee = 'Bourse de 3 mm.'; }, /mesure « 3 mm » sans source/],
    [f => { f.pathologies[0].gestes = []; }, /ni geste du mémo ni phrase aucunGeste/],
    [f => { f.pathologies[0].gestes = ['inconnu']; }, /geste inconnu/],
    [f => { f.protocole[0].n = 2; }, /numéro attendu 1/],
    [f => { f.references[0].verif = 'oui'; }, /verif \(true\/false\)/],
    [f => { f.sonoanatomie[0].source = [4]; }, /hors des références/],
    [f => { f.competences[1].patho = 'rien'; }, /ne désigne aucune pathologie/],
    [f => { delete f.valide; }, /valide/],
  ];
  for (const [mut, re] of cas) { const e = errsOf(mut); assert.ok(e.some(m => re.test(m)), `attendu ${re} dans ${JSON.stringify(e)}`); }
});
test('le squelette épaule du dépôt passe l\'audit', () => {
  const E = loadEcho({ procedures: true, msk: true });
  assert.deepStrictEqual(auditMsk(E.msk.epaule, { root: ROOT, procedures: E.procedures, types: E.mskTypes }), []);
});
