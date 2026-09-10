/* Fiche : rhizarthrose — infiltration trapézo-métacarpienne échoguidée. */
(function () {

  /* Base : coupe longitudinale dorso-radiale sur la colonne du pouce (scaphoïde → trapèze → M1). */
  function baseTMC(S, labels) {
    S.skin({ thickness: 7, fatBelow: 14 });
    S.nerve({ x: 404, y: 88, r: 4 });
    S.artery({ x: 250, y: 160, r: 11 });
    S.bone({ path: 'M-20 258 Q40 220 96 216 Q130 218 150 234', label: labels ? 'Scaphoïde' : null, at: [64, 322], ldy: 0, small: true });
    S.bone({ path: 'M176 234 Q212 206 262 202 Q320 206 346 230', label: labels ? 'Trapèze' : null, at: [256, 322], ldy: 0, small: true });
    S.bone({ path: 'M382 228 Q414 202 470 198 L660 202', label: labels ? 'Base de M1' : null, at: [530, 322], ldy: 0, small: true });
    S.region({ path: 'M146 230 L182 230 L182 424 L146 424 Z', fill: '#04060a', opacity: 0.95 });
    S.region({ path: 'M342 224 L388 224 L388 424 L342 424 Z', fill: '#04060a', opacity: 0.95 });
    S.bone({ path: 'M328 212 L344 188 L352 216', shadow: false, width: 3 });
    S.bone({ path: 'M378 214 L390 190 L400 212', shadow: false, width: 3 });
    S.fascia({ points: [[324, 206], [364, 194], [404, 196]], width: 1.8, opacity: 0.75 });
    S.fluid({ path: 'M352 217 L377 214 L383 288 L357 292 Z' });
    S.tendon({ path: 'M640 150 L520 162 L524 180 L640 168 Z' });
  }

  ECHO.register({
    id: 'rhizarthrose-tmc',
    titre: 'Rhizarthrose — infiltration trapézo-métacarpienne échoguidée',
    titreCourt: 'Rhizarthrose (TMC)',
    en: 'Ultrasound-guided trapeziometacarpal (first carpometacarpal) joint injection for thumb base osteoarthritis; corticosteroid, hyaluronic acid, platelet-rich plasma; scaphotrapeziotrapezoid and thumb metacarpophalangeal joints',
    region: 'membre-sup',
    types: ['infiltration'],
    niveau: 1,
    grade: 'Faible à modérée : effet modeste et de courte durée du corticoïde, ECR contre placebo souvent négatifs ; acide hyaluronique équivalent au corticoïde, PRP insuffisamment étayé',
    maj: '2026-09',
    motsCles: ['rhizarthrose', 'trapézo-métacarpienne', 'TMC', 'arthrose de la base du pouce', 'STT', 'scapho-trapézo-trapézoïdienne', 'Eaton', 'acide hyaluronique', 'PRP', 'tabatière anatomique', 'artère radiale'],
    resume: 'La rhizarthrose est l\'arthrose la plus fréquemment infiltrée de la main, et probablement la plus surinfiltrée : les essais contrôlés contre placebo sont pour la plupart négatifs ou ne montrent qu\'un effet modeste et bref, et l\'acide hyaluronique ne fait pas mieux que le corticoïde. Le dire d\'emblée change la conduite — l\'infiltration est un adjuvant à l\'orthèse de repos nocturne et à la rééducation, pas un traitement en soi. L\'échographie apporte ici trois choses concrètes : elle place l\'aiguille dans une articulation en selle, étroite et souvent ostéophytique où le repérage à la vue échoue une fois sur deux ; elle repère l\'artère radiale, qui croise la tabatière juste au-dessus ; et surtout elle **distingue la trapézo-métacarpienne de la scapho-trapézo-trapézoïdienne**, souvent atteinte en même temps et responsable d\'une bonne part des échecs quand on n\'infiltre que la première.',

    flash: {
      position: 'assis', positionNote: 'assis face à l\'opérateur, avant-bras en demi-pronation, bord ulnaire de la main posé sur un billot, pouce détendu ; traction douce dans l\'axe du pouce pour ouvrir l\'interligne',
      sonde: 'lineaire', sondeNote: '15–18 MHz, hockey stick très recommandée ; profondeur 1,5–2 cm, focale à 5–10 mm',
      approche: 'in-plane', approcheNote: 'sonde longitudinale sur la face dorso-radiale de la colonne du pouce, aiguille de distal en proximal ; hors du plan acceptable sur un interligne très pincé',
      aiguille: '25–27 G, 25 mm',
      cible: 'Interligne trapézo-métacarpien ou récessus dorsal : le liquide doit **élargir l\'interligne** ou noircir le récessus, sans aucune résistance',
      injectat: 'Corticoïde 10–20 mg + lidocaïne, **0,3–1 mL au total** — l\'articulation ne contient presque rien',
      duree: '5–10 min',
    },

    indications: [
      'Rhizarthrose symptomatique (stades I à III d\'Eaton-Littler) en **poussée douloureuse**, après échec ou insuffisance de 4–6 semaines d\'orthèse de repos nocturne et de rééducation — c\'est-à-dire en **complément** du traitement de fond, jamais à sa place.',
      'Poussée inflammatoire nette avec **synovite ou épanchement documentés en échographie** : c\'est la situation où le corticoïde a le plus de chances d\'agir, et la seule où le rapport bénéfice/risque est franchement favorable.',
      'Patient **en attente de chirurgie** (trapézectomie, prothèse) ou récusé : soulagement d\'attente, assumé comme tel.',
      'Doute sur le niveau responsable (TMC / STT / De Quervain) : **bloc diagnostique à l\'AL seul**, 0,3 mL, articulation par articulation — c\'est l\'usage le mieux justifié de ce geste.',
      'Arthrose **métacarpo-phalangienne du pouce** ou **scapho-trapézo-trapézoïdienne** associées, quand elles portent la douleur.',
      'Acide hyaluronique ou PRP : à réserver aux patients informés du faible niveau de preuve, notamment quand le corticoïde est indésirable (diabète mal équilibré, infiltrations répétées).',
    ],
    contreIndications: [
      'Absolues : refus, infection cutanée en regard, arthrite septique suspectée, allergie vraie aux amino-amides.',
      'Relatives : diabète déséquilibré, plus de 2 à 3 infiltrations par an sur la même articulation, chirurgie programmée à court terme, peau très fine (atrophie sous-cutanée à ce site saillant).',
      'Hémostase : geste **à faible risque hémorragique** (superficiel, compressible, ASRA-ESRA 2018) — mais **l\'artère radiale croise la tabatière anatomique** juste au-dessus de la cible : Doppler impératif, trajectoire choisie à distance, prudence chez l\'anticoagulé.',
      '**Stade IV d\'Eaton (atteinte STT associée avec destruction)** : l\'infiltration TMC isolée n\'a pas de sens ; discuter la cible ou l\'avis chirurgical.',
      '**Ne pas infiltrer une instabilité** : une base de M1 subluxée avec laxité du ligament oblique antérieur relève de l\'orthèse et de la rééducation proprioceptive (renforcement du 1er interosseux dorsal et de l\'opposant), pas du corticoïde.',
    ],
    alternatives: '**Traitement de fond en première ligne, et à maintenir après le geste** : orthèse de repos nocturne courte (colonne du pouce, poignet libre), éducation à l\'économie articulaire, renforcement du 1er interosseux dorsal et rééducation proprioceptive, AINS topiques, antalgiques. Les recommandations européennes sur l\'arthrose digitale placent l\'orthèse et les topiques avant tout geste. **Chirurgie** en cas d\'échec et de retentissement fonctionnel : trapézectomie avec ou sans ligamentoplastie, arthroplastie prothétique, arthrodèse — la trapézectomie reste la référence de comparaison, les prothèses donnant une récupération plus rapide au prix d\'un risque de reprise. Positionner honnêtement l\'infiltration devant le patient : quelques semaines à quelques mois de soulagement dans le meilleur des cas, sur une articulation dont l\'histoire naturelle n\'est pas modifiée.',

    anatomie: `L\'articulation **trapézo-métacarpienne (TMC)** est une articulation **en selle** (deux surfaces concaves-convexes croisées) entre le **trapèze** et la **base du premier métacarpien**. Cette géométrie autorise l\'opposition du pouce — et fait de la TMC l\'articulation la plus sollicitée en compression de toute la main, d\'où l\'usure.

Sa stabilité repose sur un complexe ligamentaire dont le **ligament oblique antérieur (« beak ligament »)** est la pièce maîtresse : sa défaillance entraîne la **subluxation dorso-radiale de la base de M1**, premier stade de la maladie, et les **ostéophytes dorso-radiaux** qui font la saillie palpable caractéristique.

Le champ opératoire est celui de la **tabatière anatomique**, limitée en avant par le long abducteur et le court extenseur du pouce, en arrière par le long extenseur du pouce. **L\'artère radiale la traverse**, en croisant le scaphoïde et le trapèze avant de plonger entre les deux chefs du premier interosseux dorsal. Elle est immédiatement au-dessus de la cible.

### Ce qui compte pour le geste
- **Deux interlignes voisins, deux diagnostics** : la **TMC** (trapèze / base de M1) et la **scapho-trapézo-trapézoïdienne (STT)**, juste en amont. L\'atteinte STT est associée à la rhizarthrose dans une proportion importante des cas, et elle est **la première cause d\'échec d\'une infiltration TMC techniquement réussie**. Les repérer et les distinguer à l\'écran est le vrai apport de l\'échographie ici.
- **L\'artère radiale** est le seul vrai danger vasculaire. **Doppler systématique** avant de choisir la trajectoire ; on aborde l\'articulation par son versant **dorso-radial**, en restant à distance du trajet artériel.
- **Les branches du nerf radial superficiel** croisent le dos du pouce en sous-cutané : les mêmes précautions que pour le De Quervain.
- **La capacité articulaire est minuscule** : de l\'ordre de quelques dixièmes de millilitre. Au-delà de 1 mL on distend la capsule, on fait mal, et le produit ressort le long de l\'aiguille. **Le volume n\'est pas un gage d\'efficacité, c\'est un gage de douleur.**
- **Ostéophytes et pincement** peuvent rendre l\'interligne inaccessible : dans ce cas, viser le **récessus dorsal** plutôt que la fente elle-même, ou renoncer.
- **La traction douce dans l\'axe du pouce ouvre l\'interligne** de 1 à 2 mm et transforme un geste impossible en geste simple. C\'est le seul « truc » indispensable de cette fiche.
- **Profondeurs** : interligne à 5–10 mm, artère radiale à 3–8 mm. Tout se joue dans un centimètre, sur un relief osseux mobile.`,

    installation: {
      patient: `**Assis face à l\'opérateur**, coude sur la table, avant-bras en **demi-pronation**, **bord ulnaire de la main posé** sur un billot ou un champ roulé, pouce vers le haut et détendu. La colonne du pouce doit être libre et accessible sur sa face dorso-radiale.

**Traction axiale douce sur le pouce** pendant le repérage et pendant la ponction : elle ouvre l\'interligne de 1 à 2 mm. Elle peut être exercée par un aide, par le patient lui-même avec sa main libre, ou en calant le pouce en légère flexion-adduction. C\'est le geste qui fait la différence sur une articulation pincée.

Marquer au feutre la saillie dorso-radiale de la base de M1 avant désinfection.`,
      operateur: `Opérateur **assis face au patient**, écran dans l\'axe. Sonde tenue en appui léger, **hockey stick** de préférence : la surface est convexe, courte et mobile.

Sens de ponction : **de distal vers proximal**, l\'aiguille glissant le long de la corticale dorsale de M1 jusqu\'à tomber dans l\'interligne. C\'est le trajet qui s\'éloigne le plus de l\'artère radiale (qui croise en amont, sur le trapèze et le scaphoïde).

Convention d\'image en longitudinal : **proximal (scaphoïde, trapèze) à gauche, distal (M1) à droite**.`,
      sonde: `- Linéaire **15–18 MHz**, preset MSK superficiel ; **hockey stick** quasiment indispensable chez une patiente de petite morphologie.
- Profondeur **1,5–2 cm**, focale à 5–10 mm.
- **Doppler couleur basse PRF, obligatoire** : localiser l\'**artère radiale** avant de choisir le point d\'entrée, et rechercher une **hyperémie synoviale** (argument pour infiltrer).
- Appui minimal : le récessus dorsal se collabe et l\'interligne se ferme sous la pression.
- Balayage dynamique en opposition-rétropulsion et sous traction : on voit l\'interligne s\'ouvrir, et on dépiste la **subluxation dorsale** de la base de M1.`,
    },

    reperage: [
      { titre: 'Suivre le premier métacarpien vers sa base', texte: 'Sonde **longitudinale sur la face dorso-radiale du pouce**, dans l\'axe de M1. Remonter la diaphyse jusqu\'à voir la **base élargie** de M1, puis la **fente articulaire** et le **trapèze** au-delà. C\'est le balayage le plus fiable : on ne cherche pas l\'articulation, on remonte l\'os jusqu\'à elle.' },
      { titre: 'Reconnaître l\'interligne TMC et ses ostéophytes', texte: 'L\'interligne apparaît comme une **interruption de la ligne corticale**, souvent bordée de deux **ostéophytes dorso-radiaux** en éperon. Mesurer le pincement, chercher l\'**épanchement ou la synovite** du récessus dorsal (hypoéchogène, avec ou sans Doppler), et l\'éventuelle **subluxation dorsale** de la base de M1 (la corticale de M1 déborde en arrière de celle du trapèze).' },
      { titre: 'Remonter à la scapho-trapézo-trapézoïdienne', texte: 'Poursuivre le balayage en proximal : au-delà du trapèze apparaît un **deuxième interligne**, la STT. **Toujours l\'examiner** — pincement, ostéophytes, synovite. Si c\'est elle qui est active alors que la TMC est calme, infiltrer la TMC est une erreur de cible.' },
      { titre: 'Passer le Doppler sur la tabatière', texte: 'Activer le Doppler couleur : l\'**artère radiale** se voit croiser le scaphoïde et le trapèze, en amont et au-dessus de la cible. **Noter sa position** et choisir un point d\'entrée distal, à distance. C\'est le temps qui rend ce geste sûr.' },
      { titre: 'Ouvrir l\'interligne par la traction', texte: 'Exercer une **traction axiale douce** sur le pouce en regardant l\'écran : l\'interligne s\'élargit de 1 à 2 mm et le récessus se remplit. Maintenir cette traction pendant la ponction. Sur une articulation très pincée, c\'est ce qui fait la différence entre un geste possible et un geste abandonné.' },
      { titre: 'Si l\'interligne reste inaccessible', texte: 'Ne pas forcer contre un ostéophyte. Trois options : viser le **récessus dorsal** (souvent plus accessible que la fente elle-même), passer en **coupe transversale** pour trouver une autre fenêtre, ou **renoncer** et réorienter (STT, MCP, avis chirurgical). Un ostéophyte raclé, c\'est une douleur pour rien et une aiguille émoussée.' },
    ],

    sonoanatomie: [
      { structure: 'Base du premier métacarpien', aspect: 'Ligne corticale hyperéchogène élargie, avec cône d\'ombre ; débord dorsal si subluxation', repere: 'Point de départ du balayage : remonter la diaphyse' },
      { structure: 'Trapèze', aspect: 'Convexité corticale, séparée de M1 par la fente articulaire', repere: 'Entre la STT (en amont) et la TMC (en aval)' },
      { structure: 'Interligne trapézo-métacarpien', aspect: 'Interruption de la ligne corticale ; pincée et bordée d\'ostéophytes dans la maladie', repere: 'Cible principale ; s\'ouvre sous traction axiale' },
      { structure: 'Ostéophytes dorso-radiaux', aspect: 'Éperons hyperéchogènes en marches d\'escalier sur les berges de l\'interligne', repere: 'Responsables de la saillie palpable et des échecs de ponction' },
      { structure: 'Récessus dorsal et synovite', aspect: 'Zone hypoéchogène sous la capsule dorsale, avec hyperémie Doppler si active', repere: 'Cible de repli quand la fente est inaccessible' },
      { structure: 'Interligne scapho-trapézo-trapézoïdien (STT)', aspect: 'Deuxième interruption corticale, en amont du trapèze', repere: '**À examiner systématiquement** : atteinte associée fréquente' },
      { structure: 'Artère radiale (tabatière anatomique)', aspect: 'Vaisseau pulsatile, bien vu en Doppler, croisant le scaphoïde et le trapèze', repere: 'Juste au-dessus et en amont de la cible : repérage impératif' },
      { structure: 'Insertion du long abducteur du pouce', aspect: 'Bande fibrillaire s\'attachant sur la face dorso-radiale de la base de M1', repere: 'Ne pas la traverser ; repère de la base de M1' },
      { structure: 'Branches du nerf radial superficiel', aspect: 'Fins faisceaux de 1–2 mm en sous-cutané', repere: 'Croisent le dos du pouce : à éviter dès la traversée cutanée' },
    ],

    technique: [
      { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** l\'asepsie : TMC et STT examinées, interligne cible choisi, **Doppler passé sur l\'artère radiale**, branches nerveuses superficielles localisées, ouverture de l\'interligne testée sous traction. Désinfection large, gel stérile. Seringue de 1 mL (petite seringue : elle permet de sentir la résistance), aiguille **25–27 G 25 mm**.' },
      { titre: 'Anesthésie cutanée', texte: 'Habituellement inutile avec une 27 G. Si elle est faite : 0,2 mL de lidocaïne 1 % strictement en sous-cutané, hors du champ de vue.' },
      { titre: 'Ponction dans le plan, de distal en proximal, sous traction', texte: 'Traction axiale maintenue sur le pouce. Aiguille inclinée à **20–30°**, entrée à 1 cm du bord distal de la sonde, glissée le long de la **corticale dorsale de M1** jusqu\'à ce que la pointe **tombe dans la fente** — la sensation est nette. Ne pas viser l\'interligne « en piquant vers le bas » : on plante un ostéophyte.' },
      { titre: 'Test : le premier dixième de millilitre', texte: 'Aspiration. Puis **0,1 mL** : le liquide doit **élargir l\'interligne** ou noircir le récessus dorsal, **sans aucune résistance**. Toute résistance signifie que la pointe est dans le cartilage, dans la capsule ou contre l\'os — reculer de 1 mm et retester. Un produit qui reflue le long de l\'aiguille signe l\'extra-articulaire.' },
      { titre: 'Injection', texte: 'Compléter à **0,3–0,5 mL** (jusqu\'à 1 mL au maximum, et seulement si l\'articulation accepte). Fractionner. **Arrêter dès que la résistance apparaît** : le critère de fin de ce geste, c\'est la capacité de l\'articulation, pas la dose prévue sur le plateau.' },
      { titre: 'Critère de fin', texte: 'Interligne ou récessus dorsal **visiblement distendu et anéchogène** autour de la pointe, injection sans résistance, aucun reflux sous-cutané, aucune douleur brutale.' },
      { titre: 'Après le geste', texte: 'Compression 1 min, pansement. Consignes écrites : **reprise de l\'orthèse nocturne le soir même** (elle fait partie du traitement), repos relatif du pouce 48 h, pas de pince forte ni de port de charge. Prévenir de la **poussée douloureuse de 24–48 h**, fréquente sur cette petite articulation, et du risque d\'atrophie sous-cutanée sur ce relief osseux.' },
    ],

    injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Corticoïde (option de première intention)** | Triamcinolone hexacétonide (Hexatrione®) 10–20 mg **ou** triamcinolone acétonide 10–20 mg **ou** méthylprednisolone 10–20 mg **ou** bétaméthasone 5,7 mg (Célestène® Chronodose 1 mL) ou 7 mg (Diprostène® 1 mL), + lidocaïne 1 % | **0,3–0,5 mL** (max 1 mL) | Site **strictement intra-articulaire** : l\'hexacétonide est ici autorisé, contrairement à De Quervain ou au doigt à ressort. Effet attendu : modeste et de quelques semaines à quelques mois — le dire |
| **Acide hyaluronique** | AH de bas ou haut poids moléculaire, présentation adaptée aux petites articulations | **0,3–0,5 mL**, 1 à 3 injections hebdomadaires selon le produit | Dans les essais comparatifs, **équivalent au corticoïde** sans supériorité démontrée sur le placebo. Non remboursé dans cette indication. À réserver au patient chez qui le corticoïde est indésirable, informé du niveau de preuve |
| **PRP** | Plasma riche en plaquettes autologue | 0,5–1 mL | Preuves **insuffisantes** dans cette localisation ; coût, cadre réglementaire à sécuriser. Pas de proposition en routine |
| **Bloc diagnostique** | Lidocaïne 1 % seule | **0,3 mL par articulation** | L\'usage le mieux justifié : trancher entre TMC, STT et MCP avant décision chirurgicale. EN avant / 15 min après, une articulation à la fois |
| Articulation STT | Idem corticoïde, en amont du trapèze | 0,3–0,5 mL | Ne pas la sauter quand c\'est elle qui est active |
| Métacarpo-phalangienne du pouce | Corticoïde 10 mg + lidocaïne | 0,2–0,3 mL | Interligne encore plus étroit ; hyperextension compensatrice fréquente (déformation en Z) |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Sans objet isolément.

**Rythme** : **2 à 3 infiltrations par an au maximum** par articulation, espacées d\'au moins 3 mois. Une rhizarthrose qui redemande une infiltration tous les deux mois est une indication de discussion chirurgicale, pas de réinfiltration.

**Diabète** : prévenir du pic glycémique de 48–72 h — argument pour privilégier l\'orthèse et les topiques dans cette population.`,

    variantes: [
      { titre: 'Voie hors du plan (out-of-plane)', texte: 'Sonde transversale sur l\'interligne, aiguille piquée verticalement au milieu du bord de la sonde, pointe suivie par hydrolocalisation. Utile quand l\'interligne est très pincé et que le trajet dans le plan bute sur un ostéophyte. **Ne pas l\'utiliser sans avoir localisé l\'artère radiale** : on ne voit pas le corps de l\'aiguille.' },
      { titre: 'Cibler le récessus dorsal plutôt que la fente', texte: 'Sur une articulation très remaniée, la fente est virtuelle. Le **récessus dorsal**, distendu par la synovite, est souvent plus accessible et communique avec l\'articulation. Cible de repli légitime, à condition de vérifier que le liquide diffuse bien dans l\'interligne et ne reste pas sous la capsule.' },
      { titre: 'Articulation scapho-trapézo-trapézoïdienne (STT)', texte: 'Un interligne en amont du trapèze, souvent atteint conjointement. Même installation, sonde translatée de quelques millimètres en proximal, même technique, 0,3–0,5 mL. **L\'attention à porter** : l\'artère radiale croise précisément à ce niveau — Doppler et trajectoire distale obligatoires. Une douleur de la base du pouce qui persiste après une infiltration TMC techniquement parfaite doit faire examiner la STT avant toute autre décision.' },
      { titre: 'Métacarpo-phalangienne du pouce', texte: 'Souvent hyperextensible en compensation de l\'adduction de M1 (déformation en Z). L\'infiltrer n\'a d\'intérêt que si elle est elle-même arthrosique ou synovitique. Interligne dorsal, aiguille 27 G, **0,2–0,3 mL**, hors du plan ou dans le plan de distal en proximal. En cas d\'instabilité en hyperextension, la réponse est orthétique ou chirurgicale.' },
      { titre: 'Ce qu\'il faut savoir refuser', texte: 'Instabilité pure sans synovite : orthèse et rééducation. Troisième infiltration dans l\'année : discussion chirurgicale. Demande d\'acide hyaluronique « parce que c\'est plus naturel » : expliquer que les essais ne le départagent pas du corticoïde et qu\'aucun des deux n\'a fait la preuve d\'un effet marqué contre placebo. Rhizarthrose bilatérale invalidante chez un patient jeune : c\'est une consultation chirurgicale, pas une série d\'infiltrations.' },
    ],

    pearls: [
      '**Traction axiale du pouce** pendant tout le geste : elle ouvre l\'interligne de 1 à 2 mm et rend accessible ce qui ne l\'était pas.',
      'Remonter la diaphyse de M1 jusqu\'à sa base : on ne cherche pas l\'interligne, on tombe dessus.',
      '**Toujours examiner la STT** avant d\'infiltrer la TMC : c\'est la première cause d\'échec d\'un geste techniquement réussi.',
      'Doppler avant de choisir le point d\'entrée : l\'artère radiale croise la tabatière juste au-dessus de la cible.',
      'Petite seringue (1 mL) : elle transmet la résistance, une seringue de 5 mL la masque et on injecte en extra-articulaire sans le savoir.',
      'La capacité articulaire est le critère de fin : **arrêter à la résistance**, pas à la dose prévue.',
      'Annoncer d\'emblée l\'ordre de grandeur du bénéfice attendu (quelques semaines à quelques mois) : c\'est ce qui évite la déception et la surenchère.',
    ],
    pieges: [
      'Infiltrer la TMC quand la douleur vient de la STT, d\'un De Quervain ou d\'un canal carpien : refaire l\'examen avant de refaire un geste.',
      'Piquer perpendiculairement sur un ostéophyte : douleur, aiguille émoussée, injection extra-articulaire.',
      'Injecter 2 mL « pour être sûr » : l\'articulation ne les contient pas, le produit reflue et la douleur post-geste est majorée.',
      'Se passer du Doppler : l\'artère radiale est à quelques millimètres, et la voie hors du plan ne montre pas le corps de l\'aiguille.',
      'Appuyer avec la sonde : l\'interligne se ferme et le récessus disparaît.',
      'Présenter l\'acide hyaluronique comme supérieur au corticoïde : les essais ne le montrent pas.',
      'Enchaîner les infiltrations sans jamais prescrire ni vérifier l\'orthèse nocturne : c\'est le traitement de fond qui manque, pas une injection de plus.',
    ],
    complications: [
      '**Poussée douloureuse post-injection** (24–48 h) : fréquente sur cette petite articulation à capsule tendue, majorée si le volume a été excessif. À annoncer.',
      '**Atrophie sous-cutanée et dépigmentation** : site superficiel sur un relief osseux saillant, peau souvent fine chez la patiente âgée — complication réelle, souvent lentement réversible.',
      'Ponction de l\'**artère radiale** : hématome de la tabatière, exceptionnellement pseudo-anévrisme. Prévenue par le Doppler ; comprimer 5 min.',
      'Lésion d\'une branche du **nerf radial superficiel** : dysesthésie ou névrome du dos du pouce.',
      'Injection extra-articulaire (fréquente en l\'absence de guidage) : simple inefficacité, mais elle fait conclure à tort à un « échec du traitement ».',
      'Fragilisation ligamentaire et **aggravation d\'une instabilité** après infiltrations répétées : argument supplémentaire pour limiter à 2–3 par an.',
      'Arthrite septique : exceptionnelle, mais c\'est une articulation — asepsie stricte, consignes écrites (fièvre, douleur croissante, rougeur).',
      'Effets systémiques du corticoïde : hyperglycémie 48–72 h, flush, insomnie.',
    ],
    securite: [
      'Site superficiel et compressible : **faible risque hémorragique** (ASRA-ESRA 2018) — mais **Doppler obligatoire sur l\'artère radiale** avant de choisir la trajectoire ; prudence chez l\'anticoagulé.',
      'Point d\'entrée **distal**, trajet le long de la corticale dorsale de M1 : c\'est le trajet qui s\'éloigne le plus de l\'artère.',
      'Branches du nerf radial superficiel repérées avant la traversée cutanée.',
      'Asepsie d\'articulation : détersion-désinfection, gel stérile, gants stériles, pas de repalpation après désinfection.',
      'Aspiration avant injection ; liquide trouble → analyse (cytologie, bactériologie, cristaux — la chondrocalcinose est fréquente à ce niveau), **aucun corticoïde**.',
      '**Arrêt immédiat à la première résistance** ; volume plafonné à 1 mL.',
      'Maximum 2–3 infiltrations par an et par articulation, espacées de 3 mois ; ne pas infiltrer TMC et STT le même jour sans nécessité (on perd la valeur localisatrice).',
    ],

    suivi: `- **J0** : EN avant / 15 min après (valeur diagnostique si AL), **force de pince pouce-index (pinch test, dynamomètre)** — c\'est le critère le plus reproductible dans la rhizarthrose —, opposition de Kapandji. Consigner **quelle articulation** a été infiltrée et le volume réellement injecté.
- **J2–J3** : la poussée douloureuse doit avoir cédé.
- **J15–J30** : EN, force de pince, **QuickDASH** ou score fonctionnel de la main, gêne dans les activités clés (ouvrir un bocal, tourner une clé, écrire), observance de l\'orthèse nocturne. C\'est l\'échéance qui juge le geste.
- **3 mois** : décision. Effet net ayant duré ≥ 3 mois → une deuxième infiltration est raisonnable. Effet nul malgré une injection **vue** intra-articulaire → **reprendre le diagnostic** (STT ? De Quervain ? canal carpien ? MCP ?) plutôt que répéter. Effet bref et récidive rapide → discussion chirurgicale.
- **Escalade** : retentissement fonctionnel majeur, déformation en adduction de M1 avec hyperextension MCP, échec de 2 infiltrations bien placées et d\'un traitement conservateur bien conduit → avis chirurgical (trapézectomie ± ligamentoplastie, arthroplastie, arthrodèse selon l\'âge et la demande fonctionnelle).
- **Toujours coupler à la rééducation** : c\'est le seul volet du traitement qui agit sur la mécanique de l\'articulation (renforcement du 1er interosseux dorsal, proprioception, économie articulaire).`,

    evidence: `- **Corticoïde intra-articulaire contre placebo** : les essais randomisés disponibles dans la rhizarthrose sont **peu nombreux, de petite taille, et souvent négatifs** sur le critère principal au-delà de quelques semaines — l\'essai de **Meenagh et al. (Annals of the Rheumatic Diseases, milieu des années 2000)** est la référence négative la plus citée. Niveau de preuve **faible**, avec un effet au mieux modeste et bref. C\'est le point où l\'écart entre la pratique courante et les données est le plus large.
- **Corticoïde contre acide hyaluronique contre placebo** : l\'essai en double aveugle de **Heyworth et al. (Journal of Hand Surgery américain, fin des années 2000)** ne met en évidence **aucune supériorité nette** d\'un bras sur l\'autre, y compris sur le placebo. Les méta-analyses ultérieures concluent à une **équivalence corticoïde / acide hyaluronique**, avec des effets globaux modestes et une hétérogénéité importante. Retenir : **l\'AH n\'est pas une alternative supérieure**, seulement une alternative sans corticoïde.
- **PRP** : données **insuffisantes** dans cette localisation précise ; les séries positives existent mais sont de faible effectif et de méthodologie hétérogène. Ne pas extrapoler les résultats du genou.
- **Recommandations** : les recommandations européennes de prise en charge de l\'**arthrose digitale (EULAR, mise à jour 2018 publiée en 2019)** placent l\'éducation, les orthèses, l\'exercice et les topiques en première ligne, et considèrent l\'infiltration de corticoïde comme une option **de recours dans les poussées douloureuses**, pas comme un traitement de fond.
- **Échoguidage** : les travaux de précision montrent qu\'une part importante des injections de la base du pouce faites au repérage anatomique se retrouve **hors de l\'articulation visée**, cette articulation étant étroite, souvent ostéophytique et voisine de l\'artère radiale. Preuve **modérée** sur la précision, plus faible sur le gain clinique — mais un échec dont on ignore s\'il était intra-articulaire n\'a aucune valeur décisionnelle.
- **Chirurgie** : la revue Cochrane sur la chirurgie de la rhizarthrose (**Wajon et al.**) ne départage pas nettement les techniques ; la **trapézectomie** reste la référence de comparaison, avec un profil de complications plus favorable que certaines alternatives.
- **Trous de la littérature, à assumer** : pas d\'essai de bonne qualité comparant infiltration échoguidée et infiltration à l\'aveugle **sur le résultat clinique** dans cette localisation ; pas de donnée sur le nombre optimal d\'injections ; pas d\'essai comparant l\'infiltration au traitement conservateur bien conduit.`,

    references: [
      { auteurs: 'Meenagh G, Patton J, Kynes C, Wright GD', titre: 'A randomised controlled trial of intra-articular corticosteroid injection of the carpometacarpal joint of the thumb in osteoarthritis', revue: 'Annals of the Rheumatic Diseases', annee: '2004', type: 'ECR', verif: false, note: 'Essai négatif ; année à confirmer.' },
      { auteurs: 'Heyworth BE, Lee JH, Kim PD, et al.', titre: 'Hylan versus corticosteroid versus placebo for treatment of basal joint arthritis: a prospective, randomized, double-blinded clinical trial', revue: 'The Journal of Hand Surgery (American Volume)', annee: '2008', type: 'ECR', verif: false, note: 'Comparaison à trois bras ; année à confirmer.' },
      { auteurs: 'Kloppenburg M, Kroon FPB, Blanco FJ, et al.', titre: '2018 update of the EULAR recommendations for the management of hand osteoarthritis', revue: 'Annals of the Rheumatic Diseases', annee: '2019', type: 'reco', verif: false, note: 'Orthèses, exercice et topiques en première ligne.' },
      { auteurs: 'Wajon A, Vinycomb T, Carr E, Edmunds I, Ada L', titre: 'Surgery for thumb (trapeziometacarpal joint) osteoarthritis', revue: 'Cochrane Database of Systematic Reviews', annee: '2015', type: 'revue systématique', verif: false, note: 'Année de la dernière mise à jour à confirmer.' },
      { auteurs: 'Uson J, Rodriguez-García SC, Castellanos-Moreira R, et al.', titre: 'EULAR recommendations for intra-articular therapies', revue: 'Annals of the Rheumatic Diseases (RMD Open selon la version)', annee: '2021', type: 'reco', verif: false, note: 'Revue et année à confirmer.' },
      { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage)', annee: '2007', type: 'ouvrage', verif: false, note: 'Sono-anatomie de la colonne du pouce, tabatière anatomique, TMC et STT.' },
      { auteurs: 'Özçakar L, Kara M, Chang KV, et al.', titre: 'EURO-MUSCULUS/USPRM basic scanning protocols for the wrist and hand', revue: 'European Journal of Physical and Rehabilitation Medicine', annee: '2015', type: 'protocole', verif: false, note: 'Protocole de balayage standardisé ; année à confirmer.' },
      { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Métadonnées reprises de la fiche nerf-suprascapulaire, vérifiées lors d\'une session antérieure.' },
    ],
    videos: [],

    scenes: [
      {
        id: 'tmc-longitudinal', section: 'sonoanatomie', titre: 'Colonne du pouce, coupe longitudinale dorso-radiale — TMC et STT',
        legende: 'Deux interlignes successifs sur la même coupe : scapho-trapézo-trapézoïdien (à gauche) et trapézo-métacarpien (au centre), séparés par le trapèze. Les ostéophytes dorso-radiaux en éperon bordent l\'interligne TMC et font la saillie palpable. L\'artère radiale croise la tabatière juste au-dessus et en amont de la cible : son repérage au Doppler conditionne le choix du point d\'entrée. Le long abducteur du pouce s\'insère sur la face dorso-radiale de la base de M1.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Proximal (scaphoïde)', right: 'Distal (M1)' }).probeInfo({ plan: 'Longitudinal dorso-radial', type: 'linéaire 15–18 MHz' });
          baseTMC(S, true);
          S.label({ x: 152, y: 122, text: 'A. radiale (tabatière)', cls: 'lbl-artery', small: true, lead: [240, 158] });
          S.label({ x: 372, y: 116, text: 'Ostéophytes dorsaux', cls: 'lbl-bone', small: true, lead: [368, 186] });
          S.label({ x: 618, y: 210, text: 'Insertion du LAP', cls: 'lbl-tendon', anchor: 'end', small: true, lead: [560, 176] });
          S.label({ x: 566, y: 118, text: 'Br. n. radial superficiel', cls: 'lbl-nerve', anchor: 'end', small: true, lead: [408, 94] });
          S.label({ x: 148, y: 386, text: 'Interligne STT', cls: 'lbl-bone', small: true, lead: [163, 238] });
          S.label({ x: 396, y: 386, text: 'Interligne TMC', cls: 'lbl-fluid', small: true, lead: [370, 268] });
        },
      },
      {
        id: 'tmc-injection', section: 'technique', titre: 'Infiltration trapézo-métacarpienne — aiguille dans le plan, sous traction axiale',
        legende: 'Traction axiale douce maintenue sur le pouce pendant tout le geste : elle ouvre l\'interligne de 1 à 2 mm. L\'aiguille entre en distal et glisse le long de la corticale dorsale de M1 jusqu\'à tomber dans la fente — trajet qui s\'éloigne au maximum de l\'artère radiale, restée en amont. Critère de fin : l\'interligne se distend sans la moindre résistance. On arrête à la résistance, pas à la dose prévue : l\'articulation ne contient que quelques dixièmes de millilitre.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Proximal (scaphoïde)', right: 'Distal (M1)' }).probeInfo({ plan: 'Longitudinal dorso-radial', type: 'in-plane' });
          baseTMC(S, false);
          S.label({ x: 152, y: 122, text: 'A. radiale — Doppler\navant de choisir le point d\'entrée', cls: 'lbl-artery', small: true, lead: [240, 158] });
          S.label({ x: 596, y: 300, text: 'Traction axiale du pouce\n= interligne ouvert', cls: 'lbl-bone', anchor: 'end', small: true });
          S.target({ x: 366, y: 230, r: 26 });
          S.needle({ from: [632, 88], to: [366, 224], label: '25–27 G, 20–30°', delay: 0.2, dur: 1.2 });
          S.spread({ x: 366, y: 238, rx: 22, ry: 26, label: '0,3–0,5 mL', delay: 1.5, dur: 1.0 });
        },
      },
    ],

    checklist: [
      'TMC **et** STT examinées ; articulation cible choisie et consignée',
      'Doppler passé sur l\'artère radiale ; point d\'entrée choisi en distal, à distance',
      'Branches du nerf radial superficiel repérées',
      'Ouverture de l\'interligne testée sous traction axiale avant l\'asepsie',
      'Seringue de 1 mL (transmission de la résistance) ; volume plafonné à 1 mL, arrêt à la première résistance',
      'Orthèse de repos nocturne prescrite ou vérifiée — le geste ne la remplace pas',
      'Nombre d\'infiltrations déjà reçues vérifié (maximum 2–3 par an, espacées de 3 mois)',
      'Patient informé de l\'ordre de grandeur du bénéfice attendu (quelques semaines à quelques mois) et de la poussée douloureuse possible à 24–48 h',
    ],
  });

})();
