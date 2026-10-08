// tests/phi-guard.test.js
const test = require('node:test');
const assert = require('node:assert');
const { detecter, verifierTextes } = require('../scripts/lib/phi-guard');

test('phrases pièges refusées', () => {
  const pieges = [
    'Mme Dupont, épaule droite', 'MME DUPONT epaule', 'M. Martin : bourse épaissie', 'le patient Lefèvre', 'J.-P. L., 54 ans', 'née le 3 mai 1970',
    'nee le 03/05/1970', 'patiente de 72 ans', 'la dame de la chambre 4', 'le monsieur de Libourne', 'chambre 12, genou gauche', 'dossier IPP 123456',
    'vu le 07/10/2026 au box 3', 'tél 06 12 34 56 78', 'habite à Bergerac', 'travaille chez Renault', 'NIR 1 84 04 31 555 123 45', 'mail x@y.fr',
    // dictée réelle : début de phrase, point après la civilité, initiale seule, « à » sans accent, typographie (espace insécable, apostrophe, indicateur ordinal U+00BA)
    'Le monsieur de Libourne, épaule droite', 'Habite à Bergerac', 'Patient Dupont : coiffe des rotateurs', 'Mme D. avait une bursite épaissie', 'Mme. Dupont, épaule droite',
    'Dr. Martin m\'a adressé la patiente', 'madame lefevre, rotation externe difficile', 'habite a Bergerac', 'la dame d\u{2019}Auch, genou gauche', 'chambre n\xba 4, genou gauche',
    'tél 06\xa012\xa034\xa056\xa078', 'tél +33 6 12 34 56 78', 'adresse jean arobase gmail point com', 'née en 1970, capsulite', 'dossier 4521, épaule droite',
    // personne désignée par un lieu ou une origine sans article défini, nom à particule, âge en lettres, autre forme verbale
    'un patient de Marmande, épaule droite', 'patient de Bergerac, épaule droite', 'une dame de Pessac, genou gauche', 'le patient vient de Libourne', 'patient originaire de Libourne',
    'elle vit dans le Gers', 'née à Marmande', 'le patient Da Silva, épaule droite', 'une patiente de soixante-douze ans', 'travaillait chez Michelin',
    // revue 1 : nom en capitales ou initiale après « patient », chambre elliptique, naissance sous toutes ses formes, résidence sans préposition
    'le patient DUPONT, épaule droite', 'patiente MARTIN Sophie', 'la patiente B., épaule droite', 'le patient L. a une tendinopathie',
    'la dame de la 12, bursite', 'la dame de la 12bis, bursite', 'le monsieur du 1204, genou', 'le patient du 8', 'La patiente de la 12 avait un épanchement', 'ch. 12, genou gauche',
    'née le : 3 mai 1970', 'née le vingt-trois mai 1970', 'née le jeudi 3 mai 1970', 'née en mai 1970', 'nee le : 3 mai 1970', 'né le 3 mai 1970',
    'habite Bergerac', 'elle habite Libourne, genou', 'vit seule à Pineuilh',
    // revue 1 : dates en lettres et ISO, employeur (« à la Poste »), blanc initial, lettres hors latin-1, civilités élargies, âges
    'opérée le 12 mars 2019', 'vue le 7 octobre 2026', 'vu le 2026-10-07 en HDJ', 'il a travaillé à la Poste', 'travaille a la poste',
    ' Patient Dupont : coiffe des rotateurs', 'le patient \u{15e}ahin, épaule droite', 'M. \u{141}ukasz, hanche',
    'M Dupont, épaule droite', 'M. de Villiers, épaule droite', 'Dr de Villiers m\'a adressé la patiente', 'MONSIEUR DUPONT, épaule', 'MR DUPONT, épaule',
    'un rugbyman de dix-neuf ans', 'patiente âgée de 72, épaule droite',
    // revue 1, retouches : nom en capitales à particule, chambre par son ordinal, origine sans sujet, avec incise ou après un retour à la ligne
    'le patient DA SILVA, épaule droite', 'la patiente de la 12e chambre, bursite', 'Épaule droite, vient de Libourne', 'Coupe 3 vue\nVient de Libourne, épaule droite',
    'la patiente, adressée ce matin, vient de Marmande', 'un patient venant de Bergerac, épaule droite', 'Elle est venue de Bergerac ce matin',
    // tâche 9b, ronde 1 : numéro coupé par un retour à la ligne (msk-progress écrit chaque texte sur une ligne, où il redevient un numéro)
    'Rappeler au 06\n12 34 56 78', 'secu 1 85 03 75\n123 456 78',
    // revue finale : civilité masculine en minuscules ou abrégée (« madame » l'était déjà), identifiant collé à son sigle
    'vu monsieur dupont ce matin', 'mr dupont, épaule', 'm. dupont, épaule', 'MONSIEUR dupont, épaule', 'IPP4521', 'NIR1840431555123',
  ];
  const passes = pieges.filter(p => detecter(p).length === 0);
  assert.deepStrictEqual(passes, [], 'phrases pièges non refusées (' + passes.length + ') :\n  ' + passes.join('\n  '));
});
test('phrases légitimes acceptées', () => {
  const ok = [
    '3 épaules aujourd\'hui : supra-épineux vu 3/3, sous-scapulaire en rotation externe 1/3 (difficulté 3), bourse 2/3.',
    'Question : comment dégager l\'infra-épineux quand le patient ne peut pas mettre la main dans le dos ?',
    'Genou : récessus supra-patellaire trouvé 2 fois sur 2, dicté seul une fois.',
    'Anisotropie du long biceps prise pour une fissure, corrigée en basculant la sonde.',
    'Coupe 4 impossible ce matin : patient trop douloureux pour la rotation externe.',
    'Les 2 premiers patients du matin, puis un sujet âgé pour la hanche.',
    // « ne le » est la négation, pas « né le » ; plage décimale ; « au sujet de » ; anatomie (« né de L2 », « viennent des ECR ») ; début de phrase sans nom propre ; sigles et éponymes
    'Le long biceps, je ne le trouve pas en coupe longitudinale.',
    'Sous-scapulaire : on ne le voit bien qu\'en rotation externe.',
    'Ne le cherchez pas : le sous-scapulaire se voit en rotation externe.',
    'Épaisseur du nerf 2.5-10 mm selon le niveau.',
    'Question au sujet du Doppler puissance : quel réglage ?',
    'Né de L2-L3, le nerf cutané latéral de la cuisse émerge du bord latéral du psoas.',
    'Fente hypoéchogène en V ouvert vers le haut, 1–3 mm.',
    'Les protocoles viennent des ECR conduits sur le canal carpien.',
    'Le patient vient de l\'IRM : comparaison avec l\'échographie du jour.',
    'Patient très algique, coupe 5 non réalisée.',
    'Patient sous AVK, hématome de la bourse, pas de geste.',
    'Une patiente de petite taille, coupe 4 facile.',
    'Signe de Hill-Sachs vu en postérieur, lésion de Bankart suspectée.',
    // revue 1 : sigles après « patient », ordinal, anatomie (« né le long du », « né en C5 »), origine d'une coupe, service, pourcentage, « travailler à main levée », date sans année
    'Patient BPCO, position assise obligatoire, rotation externe limitée.',
    'Patient SDRC : examen limité, pas de manœuvre dynamique.',
    'Question : la patiente de la 2e séance était-elle en rotation externe ?',
    'Chez le patient A, la coupe 3 est plus facile que chez le patient B ce matin.',
    'Rameau né le long du nerf, non retrouvé en coupe 3.',
    'La branche née le long du nerf est difficile à suivre.',
    'Le rameau né le plus souvent de C5 est difficile à repérer.',
    'Rameau né en C5, repéré en coupe 2.',
    'Douleur née le lendemain de l\'infiltration, tendon épaissi.',
    'Cette coupe vient de Nysora.',
    'Une patiente de Rhumatologie adressée pour une capsulite.',
    'CSA du nerf médian +33 % par rapport au côté sain.',
    'J\'ai travaillé à main levée.', 'Je travaille au Doppler puissance.', 'Travaillé à 15 MHz.', 'En travaillant à deux mains.',
    'Le 3 septembre, coupe 4 dictée seul pour la première fois.',
    // revue 1, retouches : sigles de la pratique douloureuse, biomécanique, mode M, âge d'une lésion, négation + mois, source d'une image
    'Patient EVA 7 au repos, 4 en mouvement.', 'Patient COVID long, fatigue importante.', 'Le deltoïde travaille à l\'étirement en fin de course.',
    'En mode M, le mouvement du tendon se voit mieux.', 'Rupture âgée de 3 semaines, tendon rétracté.', 'Hématome âgé de 48 h, coupe 4.',
    'Je ne le revois qu\'en mai.', 'Le signal vient de Philips ou de Canon selon la sonde.', 'Question : d\'où vient ce signal Doppler ?',
    // revue finale : « m. » après un nombre est une unité, pas une civilité
    'Profondeur réglée à 4 cm. Le tendon est net.', 'Périmètre de marche limité à 500 m. Le genou lâche ensuite.',
  ];
  const refusees = ok.map(p => [p, detecter(p)]).filter(([, h]) => h.length);
  assert.deepStrictEqual(refusees.map(([p]) => p), [], 'phrases légitimes refusées (' + refusees.length + ') :\n  ' + refusees.map(([p, h]) => p + '   →   ' + h.map(x => x.motif + ' [' + x.extrait + ']').join(' | ')).join('\n  '));
  assert.deepStrictEqual([null, undefined, ''].flatMap(detecter), [], 'texte absent ou vide : rien de suspect');
});
test('verifierTextes agrège', () => assert.strictEqual(verifierTextes(['rien', 'Mme Dupont']).length, 1));
test('textes adversaires : durée bornée, aucune dérive quadratique', () => {
  const cas = {
    '« chambre » + 100 000 retours à la ligne': 'chambre' + '\n'.repeat(100000) + 'x',
    '« chambre » + 100 000 espaces': 'chambre' + ' '.repeat(100000) + 'x',
    '« née le » + 100 000 retours à la ligne': 'née le' + '\n'.repeat(100000) + 'x',
    '« habite » + 100 000 retours à la ligne': 'habite' + '\n'.repeat(100000) + 'x',
    '« patient » + 100 000 retours à la ligne': 'patient' + '\n'.repeat(100000) + 'x',
    '« lit » + 50 000 « espace, retour à la ligne »': 'lit' + ' \n'.repeat(50000) + 'x',
    '« chambre » + 50 000 « retour à la ligne, espace »': 'chambre' + '\n '.repeat(50000) + 'x',
    '« vingt » × 16 000': 'vingt '.repeat(16000) + 'x',
    '« A. a. » × 16 000': 'A. a. '.repeat(16000),
    '« le patient vient » × 8 000': 'le patient vient '.repeat(8000),
  };
  const lents = [];
  for (const [nom, t] of Object.entries(cas)) { const t0 = process.hrtime.bigint(); detecter(t); const ms = Number(process.hrtime.bigint() - t0) / 1e6; if (ms >= 500) lents.push(nom + ' : ' + ms.toFixed(0) + ' ms'); }
  assert.deepStrictEqual(lents, [], 'au moins 500 ms : ' + lents.join(' ; '));
});
