// tests/msk-audit.test.js
const test = require('node:test');
const assert = require('node:assert');
const { auditMsk, slug, mesuresDe } = require('../scripts/lib/msk-audit-rules');
const { loadEcho, ROOT } = require('../scripts/lib/load-echo');

const fiche = () => ({
  id: 'genou', titre: 'Genou', en: 'Knee', maj: '2026-10', valide: false, motsCles: ['genou'],
  gestes: ['genou-intra-articulaire'],
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

test('slug', () => {
  assert.strictEqual(slug('Bursite sous-acromio-deltoïdienne !'), 'bursite-sous-acromio-deltoidienne');
  assert.strictEqual(slug('Œdème osseux'), 'oedeme-osseux');   // ligatures développées, pas supprimées : identifiants de cartes stables
  assert.strictEqual(slug('Cæcum'), 'caecum');
});
test('fiche conforme : aucune erreur', () => assert.deepStrictEqual(auditMsk(fiche(), ctx), []));
test('chaque règle produit son erreur', () => {
  const cas = [
    [f => { f.competences[0].id = 'genou.s01'; }, /lettre « s » ne correspond pas au type coupe/],
    [f => { f.competences[1].id = 'genou.c01'; f.competences[1].type = 'coupe'; }, /en double/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/x.jpg'; f.protocole[0].image.licence = 'CC BY-SA 4.0'; }, /jamais ND ni SA/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/x.jpg'; f.protocole[0].image.licence = 'cc by-sa 4.0'; }, /jamais ND ni SA/],
    [f => { f.protocole[0].image.src = './IMG/msk/genou/x.jpg'; f.protocole[0].image.licence = 'GPL'; }, /licence non admise sous img\/msk\//],
    [f => { f.protocole[0].image.src = '/img/msk/genou/x.jpg'; f.protocole[0].image.licence = 'GPL'; }, /licence non admise sous img\/msk\//],
    [f => { f.protocole[0].image.src = 'img/msk/genou/x.jpg'; f.protocole[0].image.licence = 'GPL'; }, /admis : CC BY, CC BY-NC, CC0, domaine public, image personnelle ou schéma original — jamais ND ni SA/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/absente.jpg'; }, /image absente sur le disque/],
    [f => { f.protocole[0].image.marqueurs[0].x = 1.4; }, /marqueur 1 hors de l'image/],
    [f => { f.protocole[0].image.marqueurs[0].x = '0.3'; }, /x et y doivent être des nombres/],
    [f => { f.protocole[0].image.crop = [0.5, 0, 0.6, 1]; }, /crop hors de l'image/],
    [f => { f.protocole[0].image.crop = [0, 0, 0, 1]; }, /crop invalide/],
    [f => { f.protocole[0].image.crop = [0, 0, 1, 0]; }, /crop invalide/],
    [f => { f.protocole[0].image.crop = [NaN, 0, 1, 1]; }, /crop invalide/],
    [f => { f.protocole[0].image.marqueurs[1].n = 1; }, /marqueur 1 en double/],
    // numéros en ordre : le verso d'une carte « structure » liste les marqueurs par numéro, la réponse doit correspondre aux pastilles de l'image
    [f => { f.protocole[0].image.marqueurs.reverse(); }, /protocole coupe 1 : position 1 : marqueur 1 attendu, 2 trouvé — numéroter les marqueurs 1, 2, 3… dans l'ordre du tableau/],
    [f => { f.protocole[0].image.marqueurs[1].n = 3; }, /position 2 : marqueur 2 attendu, 3 trouvé/],
    [f => { f.dictee = 'Bourse de 3 mm.'; }, /mesure « 3 mm » sans source/],
    [f => { f.pathologies[0].gestes = []; }, /ni geste du mémo ni phrase aucunGeste/],
    [f => { f.pathologies[0].gestes = ['inconnu']; }, /pathologie .* geste inconnu/],
    [f => { f.gestes = ['inconnu']; }, /^gestes : geste inconnu/],
    [f => { f.protocole[0].n = 2; }, /numéro attendu 1/],
    [f => { f.references[0].verif = 'oui'; }, /verif \(true\/false\)/],
    [f => { f.sonoanatomie[0].source = [4]; }, /hors des références/],
    [f => { f.competences[1].patho = 'rien'; }, /ne désigne aucune pathologie \(valides : tendinopathie-quadricipitale\)/],
    [f => { delete f.competences[1].patho; }, /patho \(slug du nom de la pathologie\) obligatoire/],
    [f => { delete f.valide; }, /`valide` doit être un booléen/],
    // listes mal formées et identifiant à métacaractères : une erreur, jamais une exception
    [f => { f.gestes = 'sous-acromiale'; }, /^gestes : liste attendue/],
    [f => { f.protocole = 'x'; }, /^protocole : liste attendue/],
    [f => { f.pathologies[0].gestes = 'sous-acromiale'; }, /pathologie .* gestes : liste attendue/],
    [f => { f.protocole[0].image.marqueurs = 'x'; }, /marqueurs : liste attendue/],
    [f => { f.protocole = [null]; }, /protocole coupe 1 : titre manquant/],
    [f => { f.id = 'a('; }, /identifiant attendu a\(\./],
  ];
  const muets = [];   // tous les cas silencieux d'un coup, pas seulement le premier
  for (const [mut, re] of cas) {
    let e;
    try { e = errsOf(mut); } catch (x) { muets.push(`${re} : exception ${x.message}`); continue; }
    if (!e.some(m => re.test(m))) muets.push(`${re} : absent de ${JSON.stringify(e)}`);
  }
  assert.deepStrictEqual(muets, []);
  assert.deepStrictEqual(errsOf(f => { f.protocole[0].image.marqueurs[1].n = 1; }), ['protocole coupe 1 : marqueur 1 en double'], 'un doublon ne produit pas, en plus, un message de position');
  assert.deepStrictEqual(errsOf(f => { f.protocole[0].image.marqueurs[1].n = 'deux'; }), ['protocole coupe 1 : marqueur sans numéro'], 'un numéro invalide ne produit pas, en plus, un message de position');
});
test('mesuresDe : jetons « nombre unité », une borne par jeton, texte normalisé', () => {
  const cas = [
    ['5-7 mm', ['5 mm', '7 mm']],
    ['5 à 7 mm', ['5 mm', '7 mm']],
    ['entre 5 et 7 mm', ['5 mm', '7 mm']],
    ['5 mm - 7 mm', ['5 mm', '7 mm']],
    ['12 x 5 mm', ['12 mm', '5 mm']],
    ['12 × 5 × 3 mm', ['12 mm', '5 mm', '3 mm']],
    ['5 ± 1 mm', ['5 mm', '1 mm']],
    ['1,5 mm', ['1.5 mm']],
    ['3,5\u20134,5 mm', ['3.5 mm', '4.5 mm']],
    ['30\u00ba', ['30 °']],                  // « º » (ordinal masculin) pris pour « ° »
    ['5\u202fmm', ['5 mm']],                 // espace fine insécable
    ['5\u00a0mm', ['5 mm']],                 // espace insécable
    ['5\u20137 mm', ['5 mm', '7 mm']],       // demi-cadratin
    ['5\u20147 mm', ['5 mm', '7 mm']],       // cadratin
    ['5\u22127 mm', ['5 mm', '7 mm']],       // signe moins
    ['15 mm', ['15 mm']],                    // jamais « 5 mm » lu dans « 15 mm »
    ['6-15 MHz', ['6 MHz', '15 MHz']],
    ['3 cm', ['3 cm']], ['4 ms', ['4 ms']], ['50 %', ['50 %']], ['2 mL', ['2 mL']], ['2 ml', ['2 mL']],
    ['120 mmHg', []], ['37 °C', []], ['37°C', []], ['100 cmH2O', []],   // unité suivie d'une lettre : pas une mesure d'échographie
    ['Bourse 2 mm, tendon 5 mm', ['2 mm', '5 mm']],
    ['- 2 mm', ['2 mm']],
    ['mesure 3\n- 5 mm', ['5 mm']],          // une puce de liste sur la ligne suivante n'est pas une borne
    ['', []], [null, []], [undefined, []], [42, []],
  ];
  const faux = cas.filter(([t, att]) => JSON.stringify(mesuresDe(t)) !== JSON.stringify(att)).map(([t, att]) => `${JSON.stringify(t)} donne ${JSON.stringify(mesuresDe(t))}, attendu ${JSON.stringify(att)}`);
  assert.deepStrictEqual(faux, []);
});
test('dictée : chaque mesure est comparée, jeton entier, à celles de la sono-anatomie', () => {
  const msg = t => `dictée : mesure « ${t} » sans source dans sonoanatomie.mesure`;
  const cas = [   // [dictée, mesure de la sono-anatomie, jetons de la dictée sans source]
    ['5 mm', '15 mm', ['5 mm']],
    ['3 mm', '13 mm', ['3 mm']],
    ['< 2 mm', '< 1,2 mm', ['2 mm']],
    ['5 à 7 mm', '5–7 mm', []],
    ['1,5 mm', '1.5 mm', []],
    ['5\u202fmm', '5 mm', []],
    ['30\u00ba', '30°', []],
    ['12 x 5 mm', '12 mm', ['5 mm']],
    // bornes et variantes qui ne doivent plus se perdre
    ['5 à 7 mm', '5 mm', ['7 mm']],
    ['entre 5 et 7 mm', '5 mm', ['7 mm']],
    ['5\u20147 mm', '7 mm', ['5 mm']],
    ['5\u22127 mm', '7 mm', ['5 mm']],
    ['5\u00a0mm', '5 mm', []],
    ['30\u00ba', '40°', ['30 °']],
    ['12 × 5 mm', '12 mm', ['5 mm']],
    ['1,5 mm', '15 mm', ['1.5 mm']],
    ['TA 120 mmHg, 37 °C', '', []],
    ['2 mm puis 2 mm, 6–15 MHz', '2 mm', ['6 MHz', '15 MHz']],   // un seul message par jeton sans source
  ];
  const faux = [];
  for (const [dictee, mesure, att] of cas) {
    const f = fiche(); f.dictee = dictee; f.sonoanatomie[0].mesure = mesure;
    const e = auditMsk(f, ctx), voulu = att.map(msg);
    if (JSON.stringify(e) !== JSON.stringify(voulu)) faux.push(`dictée ${JSON.stringify(dictee)} / mesure ${JSON.stringify(mesure)} : ${JSON.stringify(e)}, attendu ${JSON.stringify(voulu)}`);
  }
  assert.deepStrictEqual(faux, []);
});
test('licences sous img/msk/ : liste admise, ND et SA refusés quelle que soit la casse', () => {
  const erreursLicence = lic => errsOf(f => { f.protocole[0].image.src = 'img/msk/genou/x.jpg'; f.protocole[0].image.licence = lic; }).filter(m => /licence/.test(m));
  const faux = [];
  for (const l of ['CC BY 4.0', 'cc by 4.0', 'CC BY-NC 4.0', 'CC0 1.0', 'domaine public', 'image personnelle', 'schéma original']) if (erreursLicence(l).length) faux.push(`« ${l} » refusée à tort`);
  for (const l of ['CC BY-SA 4.0', 'cc by-sa 4.0', 'CC BY-ND 4.0', 'cc by-nd 4.0', 'CC BY-NC-ND 4.0', 'cc by-nc-sa 4.0', 'GPL', 'Tous droits réservés']) if (erreursLicence(l).length !== 1) faux.push(`« ${l} » devait donner exactement une erreur de licence`);
  assert.deepStrictEqual(faux, []);
});
test('listes mal formées : l\'audit signale, il ne lève jamais d\'exception', () => {
  const champs = {
    protocole: (f, v) => { f.protocole = v; }, sonoanatomie: (f, v) => { f.sonoanatomie = v; }, pathologies: (f, v) => { f.pathologies = v; },
    artefacts: (f, v) => { f.artefacts = v; }, competences: (f, v) => { f.competences = v; }, references: (f, v) => { f.references = v; },
    videos: (f, v) => { f.videos = v; }, gestes: (f, v) => { f.gestes = v; }, motsCles: (f, v) => { f.motsCles = v; },
    'protocole[0].structures': (f, v) => { f.protocole[0].structures = v; }, 'protocole[0].image.marqueurs': (f, v) => { f.protocole[0].image.marqueurs = v; },
    'pathologies[0].signes': (f, v) => { f.pathologies[0].signes = v; }, 'pathologies[0].gestes': (f, v) => { f.pathologies[0].gestes = v; },
  };
  const valeurs = ['sous-acromiale', 5, true, { a: 1 }, [null], [undefined], [5], [{}], ['x'], [[]]];
  const faux = [];
  for (const [nom, pose] of Object.entries(champs)) for (const v of valeurs) {
    const f = fiche(); pose(f, v);
    let e;
    try { e = auditMsk(f, ctx); } catch (x) { faux.push(`${nom} = ${JSON.stringify(v)} : exception ${x.message}`); continue; }
    if (!Array.isArray(v) && !e.length) faux.push(`${nom} = ${JSON.stringify(v)} : aucune erreur`);   // un contenant qui n'est pas une liste est toujours signalé
  }
  assert.deepStrictEqual(faux, []);
});
test('le squelette épaule du dépôt passe l\'audit', () => {
  const E = loadEcho({ procedures: true, msk: true });
  assert.deepStrictEqual(auditMsk(E.msk.epaule, { root: ROOT, procedures: E.procedures, types: E.mskTypes }), []);
});
test('coupe du protocole : image ou sansImage, exactement l\'un des deux', () => {
  const motif = 'Europe PMC (7 octobre 2026) : aucune figure CC BY, CC BY-NC ni CC0 de cette coupe ; seules des figures ND ou SA';
  assert.deepStrictEqual(errsOf(f => { f.protocole[0].image = null; f.protocole[0].sansImage = motif; }), [], 'sansImage seul : conforme');
  assert.deepStrictEqual(errsOf(f => { f.protocole[0].image = null; }), ['protocole coupe 1 : ni image ni sansImage']);
  assert.deepStrictEqual(errsOf(f => { delete f.protocole[0].image; f.protocole[0].sansImage = '  '; }), ['protocole coupe 1 : ni image ni sansImage'], 'motif blanc : comme absent');
  assert.deepStrictEqual(errsOf(f => { f.protocole[0].sansImage = motif; }), ['protocole coupe 1 : image et sansImage à la fois']);
});
