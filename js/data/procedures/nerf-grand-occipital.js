/* Fiche : nerf grand occipital (GON) — bloc proximal C2 et distal, PRF, cryoneurolyse. */
ECHO.register({
  id: 'nerf-grand-occipital',
  titre: 'Nerf grand occipital — bloc proximal (C2) et distal',
  titreCourt: 'Nerf grand occipital (GON)',
  en: 'Ultrasound-guided greater occipital nerve block (GON block) — proximal C2 approach (between obliquus capitis inferior and semispinalis capitis) and classical distal approach at the superior nuchal line; pulsed radiofrequency, cryoneurolysis',
  region: 'tete-cou',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Modérée à forte selon l\'indication (méta-analyses d\'ECR dans la migraine ; ECR dans l\'algie vasculaire ; séries dans la névralgie d\'Arnold)',
  maj: '2026-09',
  motsCles: ['Arnold', 'névralgie d\'Arnold', 'GON', 'occipital', 'céphalée cervicogénique', 'migraine chronique', 'algie vasculaire de la face', 'cluster', 'céphalée post-PL', 'brèche dure-mérienne', 'C2', 'oblique inférieur', 'OCI', 'semi-épineux', 'PRF', 'cryoneurolyse'],
  resume: 'Le bloc du nerf grand occipital est le geste de tête et cou le plus rentable en algologie : simple, superficiel, à la fois diagnostique et thérapeutique, et documenté par plusieurs méta-analyses d\'ECR dans la migraine. Deux cibles échoguidées coexistent. L\'approche **proximale C2** (Greher 2010) place l\'aiguille dans le plan interfascial entre l\'oblique inférieur de la tête et le semi-épineux de la tête, là où le rapport nerf-muscle est constant : c\'est l\'approche la plus fiable anatomiquement et celle qui bloque le tronc avant sa division. L\'approche **distale** (ligne nuchale supérieure, en dedans de l\'artère occipitale) reste la plus rapide, mais elle manque le nerf dans une proportion non négligeable de cas en repérage anatomique pur. Le bloc sert de test avant PRF ou cryoneurolyse, et il est utilisé en transitionnel dans l\'algie vasculaire (injection sous-occipitale de corticoïdes, ECR positifs).',

  flash: {
    position: 'ventral', positionNote: 'procubitus tête fléchie sur un coussin, ou assis tête penchée sur une table ; décubitus latéral confortable pour l\'approche C2 et pour le patient vagal',
    sonde: 'lineaire', sondeNote: '10–15 MHz ; profondeur 3,5–5 cm en proximal C2, 2–3 cm en distal ; hockey stick utile chez le sujet mince',
    approche: 'in-plane', approcheNote: 'proximal C2 : latéro-médial, dans le plan, sonde axiale oblique sur la lame de C2 · distal : latéro-médial court, dans le plan, sonde transversale sur la ligne nuchale supérieure',
    aiguille: '25 G 50 mm (distal) · 22 G 50–80 mm écho-visible (proximal C2) · aiguille RF 22 G 54–100 mm, extrémité active 5–10 mm',
    cible: 'Proximal : nappe anéchogène dans le plan interfascial entre oblique inférieur (profond) et semi-épineux de la tête (superficiel), au contact du nerf · Distal : nappe sous-cutanée entourant le nerf, en dedans de l\'artère occipitale',
    injectat: 'Proximal : 3–5 mL · Distal : 2–3 mL — AL (lidocaïne 1–2 %, ropivacaïne 0,2–0,5 %) ± corticoïde non particulaire',
    duree: '5–10 min bloc · 20–30 min PRF · 20–30 min cryoneurolyse',
  },

  indications: [
    '**Névralgie d\'Arnold (névralgie occipitale)** : douleur lancinante en éclair dans le territoire du GON, avec allodynie du cuir chevelu et point d\'Arnold douloureux. Bloc à la fois **diagnostique** (critère ICHD-3 : soulagement transitoire par bloc anesthésique) et thérapeutique.',
    '**Céphalée cervicogénique** : bloc du GON seul ou associé au nerf occipital III / branches médiales cervicales, selon que la douleur naît de C2 ou de C2-C3.',
    '**Migraine chronique** : geste adjuvant, largement documenté ; réduction de l\'intensité, des jours de céphalée mensuels et de la consommation d\'antalgiques versus sham (méta-analyse 2025 sur les seuls blocs échoguidés). Utile dans la fenêtre de sevrage d\'un abus médicamenteux et chez la femme enceinte ou allaitante (AL seul).',
    '**Migraine aiguë réfractaire** aux urgences ou en HDJ : réduction significative de l\'EN à 45–60 min (méta-analyse 2024, 4 ECR).',
    '**Algie vasculaire de la face** : injection sous-occipitale de corticoïdes en traitement **transitionnel** pendant la montée du vérapamil — c\'est ici que la preuve est la plus solide (deux ECR contre placebo). Cible distale suboccipitale, corticoïde retard.',
    '**Céphalée post-brèche dure-mérienne** : alternative ou temporisation avant blood-patch, plusieurs ECR positifs (souvent bilatéral, parfois bi-niveau).',
    'Douleur du cuir chevelu post-chirurgicale ou post-traumatique (craniotomie occipitale, cicatrice, neurinome de section) ; hémicrânie continue et névralgie occipitale secondaire (à distinguer des céphalées trigémino-autonomiques).',
    'Bloc test avant **PRF**, **cryoneurolyse**, stimulation occipitale ou décompression chirurgicale.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides, hypertension intracrânienne non explorée ou céphalée d\'allure secondaire non bilanée (le bloc masque un diagnostic).',
    '**Prudence majeure après chirurgie de la fosse postérieure ou craniectomie occipitale** : perte de la barrière osseuse — des injections sous-arachnoïdiennes accidentelles avec toxicité du tronc cérébral ont été rapportées dans ce contexte. Imagerie et repérage échographique du défect osseux avant tout geste, ou renoncer.',
    '**Risque hémorragique (ASRA-ESRA 2018)** : le bloc occipital **distal**, superficiel et compressible, est classé **à faible risque** — pas d\'interruption des antiagrégants ni, en règle, des anticoagulants. L\'approche **proximale C2**, profonde et non compressible, n\'est pas explicitement cotée : la traiter comme un geste cervical profond, donc **risque intermédiaire** — même raisonnement que pour les branches médiales cervicales (chapitre Sécurité).',
    'Relatives : diabète déséquilibré, dermatose du scalp, alopécie préexistante (atrophie sous-cutanée et dépigmentation possibles avec les corticoïdes), grossesse (AL seul).',
    'Corticoïdes : ne pas dépasser 3 à 4 injections par an sur le même site ; jamais de **corticoïde particulaire** en proximal C2 (voisinage de l\'artère vertébrale V3 et de l\'artère occipitale).',
  ],
  alternatives: 'Traitement de fond de la céphalée sous-jacente (le bloc n\'en dispense jamais) ; bloc du nerf occipital III et des branches médiales cervicales si la douleur naît de C2-C3 (fiche dédiée) ; bloc du petit occipital et du grand auriculaire pour les territoires latéraux ; toxine botulique (protocole PREEMPT) dans la migraine chronique ; PRF ou cryoneurolyse du GON après bloc test positif ; stimulation du nerf occipital et décompression chirurgicale en dernier recours. La méta-analyse 2025 des blocs **échoguidés** dans la migraine chronique montre une efficacité comparable à la PRF, améliorée quand la PRF est ajoutée au bloc — l\'escalade se justifie donc sur la durée d\'effet, pas sur l\'amplitude du soulagement.',

  anatomie: `Le **nerf grand occipital (GON, nerf d\'Arnold)** est la branche médiale du **ramus dorsal de C2**. Il émerge sous l\'arc postérieur de l\'atlas, contourne le **bord inférieur puis la face dorsale de l\'oblique inférieur de la tête** (obliquus capitis inferior, OCI), monte obliquement en dedans et en haut dans le plan interfascial situé **entre l\'OCI (profond) et le semi-épineux de la tête (superficiel)**, puis perce le semi-épineux et l\'aponévrose du trapèze à hauteur de la **ligne nuchale supérieure**, où il devient sous-cutané, **en dedans de l\'artère occipitale**.

Il assure la sensibilité du cuir chevelu depuis la nuque jusqu\'au vertex, parfois jusqu\'à la région frontale. Ses connexions avec le complexe trigémino-cervical expliquent l\'efficacité du bloc dans des céphalées primaires qui ne sont pas des névralgies.

### Ce qui compte pour le geste
- **Le rapport constant est nerf / OCI**, pas nerf / os. C\'est ce qui fonde l\'approche proximale : l\'OCI est un repère musculaire fiable, le nerf est toujours sur sa face dorsale (Greher 2010, dissection). L\'approche distale par repères palpatoires seuls manque le nerf dans une proportion notable de cas, l\'échoguidage corrige ce défaut.
- **Profondeurs usuelles** : plan OCI / semi-épineux à 2,5–4 cm chez l\'adulte, jusqu\'à 5 cm chez le sujet épais ; GON distal à 5–10 mm sous la peau.
- **Empilement musculaire en proximal, de la superficie à la profondeur** : trapèze → splénius de la tête → semi-épineux de la tête → *plan du GON* → OCI → arc postérieur de C1 / lame de C2. Sauter une couche = injecter dans le semi-épineux et manquer le nerf.
- **Artère vertébrale (segment V3)** : elle sort du foramen transversaire de C1, contourne la masse latérale et chemine dans le **sillon de la face supérieure de l\'arc postérieur de C1**, au fond du triangle sous-occipital — donc **en profondeur de la partie latérale de l\'OCI et en céphalique par rapport à lui**. Elle n\'est pas sur le trajet d\'une aiguille qui reste au contact dorsal de l\'OCI, mais elle est la raison pour laquelle on ne traverse jamais l\'OCI et on ne remonte jamais l\'aiguille en direction céphalique et latérale.
- **Artère occipitale** : latérale au nerf en distal (elle passe de dehors en dedans à travers le champ) ; c\'est le repère Doppler qui identifie la ligne nuchale supérieure. Le nerf est **médial** à elle dans la majorité des cas.
- Le **nerf occipital III (TON)** croise l\'articulation C2-C3, plus en dedans et plus caudal ; le **petit occipital** monte le long du bord postérieur du SCM, plus en dehors. Un territoire occipital latéral qui ne répond pas au bloc du GON doit faire changer de cible, pas augmenter le volume.
- **Variantes** : nerf bifide ou plexiforme, passage à travers le trapèze plus latéral ou plus médial, artère occipitale médiale au nerf. L\'échographie règle la question au cas par cas.`,

  installation: {
    patient: `**Procubitus**, front sur un appui ou sur les avant-bras croisés, **tête légèrement fléchie** : la flexion écarte l\'occiput de C1-C2, ouvre l\'espace et tend l\'OCI. Coussin sous le thorax et sous les chevilles. C\'est la position de référence pour l\'approche proximale C2.

**Assis**, front posé sur une table ou sur un appui-tête, dos rond — pratique et rapide, surtout pour le geste distal, mais surveiller le malaise vagal (fréquent sur ce geste, chez un patient souvent algique et anxieux).

**Décubitus latéral** côté à traiter vers le haut : bonne alternative chez le patient qui ne tolère pas le procubitus (obésité, BPCO, cervicalgie).

Repérer et marquer au feutre la **protubérance occipitale externe**, la **mastoïde** et l\'**épineuse bifide de C2** (première épineuse saillante palpable sous l\'occiput) avant la désinfection. Écarter les cheveux au ruban adhésif ou avec du gel plutôt que de raser.`,
    operateur: `Opérateur **à la tête du patient** ou du côté à traiter, écran dans l\'axe du regard, au-delà de la tête. Ponction **de latéral en médial** dans les deux approches : le trajet reste tangentiel au plan cible et éloigne la pointe de la ligne médiane et du canal.

Pour l\'approche proximale, poser d\'abord la sonde en position **axiale oblique** sur la lame de C2 : extrémité médiale sur l\'épineuse de C2, extrémité latérale orientée vers la mastoïde — la sonde est ainsi parallèle à l\'axe de l\'OCI.

Main non dominante en appui sur l\'occiput ou la nuque : le champ est très mobile, la stabilité fait tout.`,
    sonde: `- Linéaire 10–15 MHz, preset nerf/MSK superficiel. Profondeur **4 cm** pour l\'approche C2 (réduire à 3 cm quand le plan est trouvé), **2,5–3 cm** pour l\'approche distale.
- Focale sur le plan interfascial ; gain modéré — le nerf est hypoéchogène, il ressort si le muscle n\'est pas saturé.
- **Doppler couleur systématique**, réglé pour les bas débits (échelle de vitesse 5–10 cm/s, filtre de paroi bas) : artère occipitale en distal, artères musculaires et rameaux de l\'artère cervicale profonde en proximal.
- Sonde hockey stick chez le sujet mince ou pour le geste distal : meilleur contact sur une nuque convexe.
- Aiguille écho-visible ou hydrolocalisation par 0,3–0,5 mL de sérum : à 3–4 cm de profondeur et angle plat, la pointe se perd vite.`,
  },

  reperage: [
    { titre: '1. Épineuse bifide de C2 (approche proximale)', texte: 'Sonde **transversale sur la ligne médiane**, sous l\'occiput : la première épineuse volumineuse et **bifide** est C2 (C1 n\'a pas d\'épineuse palpable). On voit une image osseuse en « double bosse » avec cône d\'ombre.' },
    { titre: '2. Rotation vers l\'oblique inférieur', texte: 'Garder l\'extrémité médiale de la sonde sur l\'épineuse de C2 et **faire tourner l\'extrémité latérale vers la mastoïde** (environ 30–45°) : apparaît un ventre musculaire oblique qui part de l\'épineuse et monte en dehors — c\'est l\'**OCI**, qui relie l\'épineuse de C2 au processus transverse de C1. Il est le seul muscle de la région à avoir cette orientation.' },
    { titre: '3. Identifier le plan du nerf', texte: 'Compter les couches au-dessus de l\'OCI : trapèze (fin), splénius de la tête, semi-épineux de la tête (épais, penné). Le **GON est la structure hypoéchogène ovalaire de 2–4 mm** posée sur la face dorsale de l\'OCI, dans l\'interface hyperéchogène qui la sépare du semi-épineux, en général au tiers moyen de l\'OCI.' },
    { titre: '4. Doppler', texte: 'Balayer en Doppler couleur avant toute ponction : rameaux artériels musculaires fréquents dans le semi-épineux, artère cervicale profonde en profondeur. **L\'artère vertébrale n\'est pas dans le plan** si la sonde reste sur l\'OCI — si on la voit, on est trop céphalique et trop latéral : revenir.' },
    { titre: '5. Approche distale — ligne nuchale supérieure', texte: 'Sonde **transversale** à 2 cm sous la protubérance occipitale externe, puis glisser en dehors : repérer la **pulsatilité de l\'artère occipitale** en Doppler, à l\'union tiers interne–tiers moyen de la ligne protubérance-mastoïde. Le GON est le petit ovale hypoéchogène **médial** à l\'artère, dans le tissu sous-cutané, juste au-dessus de l\'aponévrose.' },
    { titre: 'Si on ne trouve pas le nerf', texte: 'En proximal : ne pas s\'acharner sur l\'image du nerf, **le plan suffit** — l\'injection dans l\'interface OCI / semi-épineux au tiers moyen de l\'OCI baigne le nerf de façon fiable. En distal : si l\'artère n\'est pas vue, remonter ou descendre de 1 cm, augmenter le gain Doppler, comprimer moins fort (la pression de la sonde écrase l\'artère occipitale). En cas d\'échec des deux, passer à la cible proximale, dont les repères sont musculaires et donc reproductibles.' },
  ],

  sonoanatomie: [
    { structure: 'Épineuse bifide de C2', aspect: 'Double bosse hyperéchogène avec cône d\'ombre franc', repere: 'Point de départ du repérage proximal ; première épineuse saillante sous l\'occiput' },
    { structure: 'Oblique inférieur de la tête (OCI)', aspect: 'Ventre musculaire oblique, strié, profond, tendu de l\'épineuse de C2 au processus transverse de C1', repere: 'Repère clé de l\'approche proximale ; le nerf est sur sa face dorsale' },
    { structure: 'Semi-épineux de la tête', aspect: 'Muscle épais penné, immédiatement superficiel à l\'OCI', repere: 'Le plan cible est l\'interface hyperéchogène entre les deux' },
    { structure: 'Splénius / trapèze', aspect: 'Deux lames musculaires fines, superficielles', repere: 'Les traverser en gardant l\'aiguille visible' },
    { structure: 'Nerf grand occipital (proximal)', aspect: 'Ovale hypoéchogène 2–4 mm, halo hyperéchogène, aspect fasciculé aux hautes fréquences', repere: 'Face dorsale de l\'OCI, tiers moyen' },
    { structure: 'Nerf grand occipital (distal)', aspect: 'Petit ovale hypoéchogène sous-cutané, souvent aplati', repere: 'En dedans de l\'artère occipitale, sur l\'aponévrose, à 5–10 mm de profondeur' },
    { structure: 'Artère occipitale', aspect: 'Structure pulsatile 1–2 mm, Doppler positif, facilement écrasée par la sonde', repere: 'Repère de la cible distale ; latérale au nerf' },
    { structure: 'Artère vertébrale V3', aspect: 'Gros vaisseau pulsatile en profondeur du triangle sous-occipital, au-dessus de l\'arc de C1', repere: 'Ne doit **jamais** être sur le trajet ; sa présence dans le champ signe une sonde trop céphalique et trop latérale' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Cheveux écartés, désinfection large, gel stérile ou housse de sonde. Seringue de 5 mL préparée, aiguille montée sur prolongateur si on travaille seul. Vérifier que le patient a bien noté son **EN de départ** : ce geste vaut autant par sa valeur diagnostique que par son effet.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative en distal (aiguille 25 G). En proximal, 0,5–1 mL de lidocaïne 1 % au point d\'entrée, 1 cm en dehors du bord latéral de la sonde. Systématique avant une aiguille RF ou une sonde de cryo.' },
    { titre: 'Ponction proximale (C2), dans le plan, de latéral en médial', texte: 'Angle 25–35°, aiguille visible sur toute sa longueur. Traverser trapèze, splénius, semi-épineux ; le passage de chaque fascia donne un ressaut. **S\'arrêter au contact de la face dorsale de l\'OCI** — ne jamais traverser l\'OCI. Si le nerf est vu, viser à côté, pas dedans.' },
    { titre: 'Ponction distale, dans le plan, de latéral en médial', texte: 'Aiguille 25 G, angle très plat (10–20°), entrée 1,5 cm en dehors de la sonde, **en dehors de l\'artère occipitale** puis progression vers le nerf en passant **superficiellement à l\'artère**. Ne jamais avancer vers l\'os sans voir la pointe.' },
    { titre: 'Test et hydrolocalisation', texte: 'Aspiration systématique dans deux plans. Injecter 0,3–0,5 mL : l\'injectat doit **ouvrir le plan interfascial** en une lame anéchogène qui décolle le semi-épineux de l\'OCI (proximal) ou entourer le nerf dans le tissu sous-cutané (distal). Une image en « nid d\'abeille » qui reste dans le muscle = repositionner. Douleur fulgurante irradiée au vertex = pointe intraneurale, retirer de 1–2 mm avant de reprendre.' },
    { titre: 'Injection fractionnée et critère de fin', texte: 'Proximal : **3–5 mL** fractionnés par 1 mL, avec réaspiration ; nappe hypoéchogène de 2–3 cm de long le long de l\'OCI, englobant le nerf. Distal : **2–3 mL**, halo circonférentiel autour du nerf sur 1–2 cm, sans blanchiment cutané ni diffusion intramusculaire. Arrêter dès que la nappe entoure le nerf : au-delà, on ne gagne que de la diffusion non sélective.' },
    { titre: 'Après le geste', texte: 'Compression douce 1–2 min (artère occipitale). **Tester l\'hypoesthésie du territoire à 10–15 min** : c\'est le critère de réussite technique. Noter l\'EN à 30 min et le pourcentage de soulagement — c\'est cette donnée qui autorisera ou non la PRF. Prévenir : anesthésie du cuir chevelu 2–8 h, sensation de tête « lourde », douleurs au point de ponction 24–48 h, et exceptionnellement lipoatrophie / dépigmentation locale si corticoïde. Pas de conduite immédiate en cas de vertige (effet indésirable le plus fréquent des séries).' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique (névralgie d\'Arnold, critère ICHD-3) | Lidocaïne 1–2 % **seule** | 2–3 mL (distal) · 3 mL (proximal) | AL seul, sans corticoïde : c\'est l\'unique moyen d\'interpréter la réponse. EN avant / 30 min après, et durée du soulagement |
| Bloc thérapeutique — névralgie occipitale, céphalée cervicogénique | Ropivacaïne 0,2–0,5 % ou lidocaïne 2 % + **corticoïde non particulaire** : dexaméthasone 4–8 mg, ou bétaméthasone phosphate soluble (Célestène® injectable 4 mg/mL) | 3–5 mL proximal · 2–3 mL distal | Site à voisinage artériel (artère occipitale en distal, artère vertébrale V3 dans le champ en proximal) : **non particulaire obligatoire en proximal C2**. Diprostène® et Célestène® Chronodose sont des formes **particulaires** (dipropionate / acétate) : à proscrire ici. Jamais de triamcinolone hexacétonide (Hexatrione®, strictement intra-articulaire) |
| Migraine chronique / aiguë | Lidocaïne 1–2 % ou bupivacaïne 0,5 %, **AL seul** dans la plupart des ECR | 1,5–3 mL par côté, souvent **bilatéral** | Le bénéfice des corticoïdes n\'est pas établi dans la migraine ; les protocoles positifs sont majoritairement AL seul. Répétable toutes les 2–4 semaines |
| Algie vasculaire — traitement transitionnel | Corticoïde sous-occipital, mélange forme rapide + forme retard (bétaméthasone phosphate + dipropionate) ± AL | 2–3 mL, du côté des crises | Schéma des ECR contre placebo (Ambrosini 2005 ; Lancet Neurology 2011), reproduit **au site distal sous-cutané sous-occipital** — c\'est la seule situation où une forme particulaire est justifiée ici, et elle reste proscrite en proximal C2. Injection unique, en attendant l\'efficacité du vérapamil. Ne pas répéter à intervalles rapprochés ; prévenir du risque d\'atrophie sous-cutanée |
| Céphalée post-brèche dure-mérienne | Bupivacaïne 0,5 % 2 mL par côté ± dexaméthasone 4 mg | 2 mL × 2 (bilatéral) | Schéma retrouvé dans les ECR récents ; ne dispense pas de discuter le blood-patch |
| Hydrodissection | Dextrose 5 % (± lidocaïne 0,5–1 %) | 5–10 mL | Décrit dans des cas cliniques seulement (plan OCI / semi-épineux et plan semi-épineux / trapèze). Preuve faible — à réserver aux patients refusant les corticoïdes ou en échec |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Les volumes ici sont dérisoires en isolé — le risque naît du **cumul** (bloc bilatéral + petit occipital + grand auriculaire + branches médiales dans la même séance) et surtout du **passage intravasculaire direct** : la vascularisation de la région se draine vers la circulation postérieure, et une injection intra-artérielle de quelques dixièmes de mL peut suffire à provoquer une crise convulsive.

**Corticoïdes** : dose cumulée à tracer, glycémie capillaire chez le diabétique 48 h, et prévenir de l\'atrophie sous-cutanée et de la dépigmentation en cas d\'injection trop superficielle en distal (préjudice esthétique réel sur un cuir chevelu dégarni).`,

  variantes: [
    { titre: 'Radiofréquence pulsée (PRF) du GON', texte: `Après **bloc test positif** (≥ 50 % de soulagement pendant la durée de l\'AL) mais de durée insuffisante. Cible proximale C2 (le plus souvent) ou distale. Aiguille RF 22 G, extrémité active 5–10 mm, placée **parallèlement au trajet du nerf** dans le plan interfascial. Stimulation sensitive 50 Hz : paresthésies occipitales à < 0,5 V ; stimulation motrice 2 Hz sans contraction segmentaire. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120–240 s**, un à trois cycles. Injecter l\'AL ± corticoïde **après** la lésion.

Preuves : revue systématique 2024 (Can J Pain) de la PRF du GON dans les céphalées — bénéfice cohérent mais littérature dominée par des séries et des ECR de petite taille ; la méta-analyse 2025 des blocs échoguidés trouve la PRF **comparable au bloc seul**, avec un gain quand elle s\'ajoute au bloc. Autrement dit : la PRF achète de la **durée**, pas de l\'amplitude. Durée d\'effet attendue 3–6 mois, répétable.` },
    { titre: 'Radiofréquence continue (thermique) proximale', texte: 'Une cohorte rétrospective récente rapporte l\'efficacité de la RF **continue** du GON proximal dans la névralgie occipitale réfractaire. À manier avec prudence : le GON est **quasi exclusivement sensitif à partir de sa traversée du semi-épineux** (il donne des rameaux moteurs à ce muscle en amont, ce qui plaide pour lésionner en aval plutôt qu\'en amont si on choisit la RF continue), et une lésion thermique expose à l\'anesthésie douloureuse et à la névrite de désafférentation du cuir chevelu. À réserver aux échecs de la PRF, après information explicite, et jamais en première intention.' },
    { titre: 'Cryoneurolyse', texte: 'Technique de choix quand on veut une dénervation longue et **réversible** : l\'axonotmésis cryogénique respecte l\'endonèvre, la repousse se fait sans névrome. Sonde cryo 14–16 G, cycles gel 2 min / dégel 30 s, deux à trois cycles, après AL. Une technique échoguidée sur le **GON proximal** a été décrite (Stogicza 2019). Les données publiées sont des séries : soulagement significatif immédiat chez la majorité, décroissant à J7-J30, durée typique de quelques semaines à 2 mois. Preuve faible, indication : névralgie occipitale invalidante en échec des blocs répétés, ou patient refusant les corticoïdes.' },
    { titre: 'Hydrodissection du GON', texte: 'Dextrose 5 % (5–10 mL) dans le plan OCI / semi-épineux, puis éventuellement dans le plan semi-épineux / trapèze au niveau de la traversée aponévrotique — logique de piégeage nerveux plutôt que d\'inflammation. Publications limitées à des cas cliniques (2024). À proposer comme alternative sans corticoïde, en annonçant honnêtement le niveau de preuve.' },
    { titre: 'Bloc bi-niveau (proximal + distal)', texte: 'Séduisant sur le papier, non validé : un ECR échoguidé dans la migraine chronique avec allodynie a montré que **l\'ajout du niveau distal au bloc C2 n\'apporte aucun bénéfice supplémentaire**. Choisir une cible et l\'exécuter correctement. En revanche, un ECR de comparaison directe dans l\'algie vasculaire retrouve un avantage de durée pour le niveau C2.' },
    { titre: 'Gestes associés dans la même séance', texte: 'Petit occipital et grand auriculaire si le territoire douloureux déborde en dehors (fiche dédiée) ; nerf occipital III et branches médiales C2-C3 si la douleur est facettaire ; points gâchettes du trapèze supérieur et blocs supra-orbitaire / supratrochléaire dans la migraine chronique (un ECR retrouve un gain sur l\'allodynie et le handicap avec la combinaison). Additionner les doses d\'AL.' },
  ],

  pearls: [
    'Le repère n\'est pas l\'os, c\'est l\'**oblique inférieur** : sonde médiale sur l\'épineuse de C2, extrémité latérale tournée vers la mastoïde, et le muscle apparaît.',
    'Le plan suffit — inutile de voir le nerf pour réussir le bloc proximal. Injecter dans l\'interface OCI / semi-épineux au tiers moyen de l\'OCI.',
    'En distal, chercher **l\'artère au Doppler** et non le nerf ; appuyer moins fort sur la sonde, l\'artère occipitale s\'écrase pour rien.',
    'Toujours faire un **premier bloc AL seul** : c\'est la seule mesure qui a une valeur diagnostique et qui justifiera une PRF devant un contrôle.',
    'Tester l\'hypoesthésie du territoire à 15 min : un bloc techniquement réussi mais cliniquement inefficace fait changer de diagnostic, pas de volume.',
    'Le vertige est l\'effet indésirable le plus fréquent (jusqu\'à un tiers des patients dans les séries) : prévenir, faire lever progressivement, ne pas laisser repartir seul en voiture.',
  ],
  pieges: [
    'Confondre le semi-épineux et l\'OCI et injecter une couche trop haut : nappe intramusculaire, bloc inefficace, patient étiqueté « non répondeur » à tort.',
    'Prendre l\'épineuse de C1 pour celle de C2 : C1 n\'a pas d\'épineuse palpable — la première grosse épineuse bifide sous l\'occiput **est** C2.',
    'Traverser l\'OCI ou remonter l\'aiguille en céphalique et latéral : c\'est le seul trajet qui approche l\'artère vertébrale V3.',
    'Bloquer le GON devant une douleur occipitale **latérale** (petit occipital) ou **para-médiane haute cervicale** (nerf occipital III) : mauvaise cible, échec attribué à la technique.',
    'Injecter du corticoïde particulaire ou trop superficiellement en distal : atrophie sous-cutanée et zone dépigmentée, visibles et durables.',
    'Faire le geste sans avoir éliminé une céphalée secondaire, ou chez un opéré de la fosse postérieure sans imagerie : le seul contexte où ce bloc bénin devient dangereux.',
  ],
  complications: [
    '**Injection intravasculaire** (artère occipitale en distal, rameaux musculaires en proximal) : acouphènes, goût métallique, malaise, convulsion. Prévention : Doppler, aspiration dans deux plans, injection fractionnée lente, dose totale faible. Conduite : arrêt immédiat, O₂, surveillance, intralipide disponible.',
    '**Injection sous-arachnoïdienne / toxicité du tronc cérébral** : exceptionnelle, décrite surtout après chirurgie de la fosse postérieure ou en cas de défect osseux — contre-indication relative forte dans ce contexte.',
    '**Ponction de l\'artère occipitale**, hématome sous-cutané : compression 2 min, sans gravité.',
    '**Malaise vagal** : le plus fréquent après le vertige ; installer allongé, ne jamais faire le geste debout.',
    'Vertige, instabilité transitoire, douleur au point de ponction 24–48 h, aggravation transitoire de la céphalée.',
    '**Effets locaux des corticoïdes** : atrophie sous-cutanée, dépigmentation, alopécie localisée au point d\'injection ; hyperglycémie 24–72 h ; bouffées vasomotrices.',
    'Névrite ou dysesthésies persistantes après lésion (RF continue, cryo) : rare, à annoncer avant tout geste de dénervation.',
  ],
  securite: [
    '**Risque hémorragique** : occipital **distal = faible risque** (ASRA-ESRA 2018), pas d\'arrêt des antiagrégants ni, en règle, des anticoagulants. **Proximal C2 = à traiter comme un geste cervical profond, risque intermédiaire** : discuter avec le prescripteur, appliquer les délais des anticoagulants oraux directs comme pour les branches médiales cervicales. Ce classement n\'est pas explicite dans le texte ASRA : c\'est une extrapolation prudente, à assumer comme telle.',
    'Doppler couleur **avant chaque ponction**, pas seulement au repérage initial : la vascularisation musculaire de la nuque est variable.',
    'Aspiration dans deux plans avant chaque bolus, injection fractionnée par 1 mL, contact verbal maintenu.',
    'Ne jamais dépasser la face dorsale de l\'OCI en proximal ; ne jamais viser l\'os en distal sans voir la pointe.',
    'Bloc bilatéral et gestes associés : additionner les doses d\'AL et le corticoïde. Un bloc occipital bilatéral + petit occipital + grand auriculaire reste très en deçà des seuils, mais la traçabilité doit exister.',
    'Corticoïdes : maximum 3 à 4 injections par an sur le même site, non particulaire au voisinage artériel, glycémie chez le diabétique.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, **pourcentage de soulagement**, hypoesthésie du territoire (validité technique), durée de l\'effet anesthésique rapportée par le patient. Ces quatre données conditionnent toute la suite.
- **J7–J15** : agenda de céphalées — jours de céphalée, intensité moyenne, consommation d\'antalgiques de crise (c\'est le critère qui a bougé dans les méta-analyses, pas seulement l\'EN).
- **J30 et 3 mois** : durée réelle de l\'effet, HIT-6 ou MIDAS dans la migraine, retentissement sur le sommeil et le travail.
- **Décision** : effet > 6–8 semaines → répéter le bloc (rythme 4–12 semaines, corticoïde limité à 3–4/an) · effet net mais < 3–4 semaines et bloc test ≥ 50 % → **PRF** ou cryoneurolyse · effet nul avec hypoesthésie obtenue → mauvaise cible, réexaminer (nerf occipital III, petit occipital, facettes C2-C3, céphalée primaire non nociceptive) · aggravation ou signes d\'alarme → imagerie.
- Toujours articuler avec le **traitement de fond** et la prise en charge du surconsommation d\'antalgiques : les ECR positifs sont des ECR de geste *ajouté*, pas de geste isolé.`,

  evidence: `- **Migraine chronique, blocs échoguidés (méta-analyse 2025, Head & Face Medicine, 6 études, n = 344 dont 4 ECR)** : versus sham, réduction significative de l\'intensité douloureuse, des **jours de céphalée mensuels** et de la consommation d\'antalgiques. Efficacité comparable à la PRF, meilleure quand PRF et bloc sont associés. Effet indésirable le plus fréquent : vertige (38,9 %) ; complications sévères rares. Preuve **modérée** (effectifs faibles, hétérogénéité des protocoles).
- **Migraine aiguë (méta-analyse 2024, Medicine, 4 ECR, n = 224)** : réduction significative de l\'EN à **45–60 min** versus contrôle. Preuve modérée, effectifs faibles.
- **Migraine chronique (méta-analyse 2024, BMC Neurology)** et **umbrella review 2025 (Cephalalgia)** : effet favorable mais taille d\'effet modeste et hétérogénéité importante ; les auteurs de l\'umbrella review restent prudents sur la robustesse de la littérature. C\'est le jugement honnête à retenir : bénéfice réel, ampleur modérée, durabilité incertaine.
- **Algie vasculaire** : c\'est ici que la preuve est la plus solide — deux ECR contre placebo (Ambrosini 2005, *Pain* ; essai du Lancet Neurology 2011 chez les patients à plus de deux crises par jour) montrent un bénéfice transitionnel net de l\'injection sous-occipitale de corticoïdes. Preuve **forte** pour cette indication précise, avec une réserve : ce sont des injections sous-occipitales (repère anatomique), pas nécessairement échoguidées.
- **Céphalée post-brèche dure-mérienne** : plusieurs ECR récents positifs, dont un montrant qu\'un bloc bi-niveau réduit le recours au blood-patch ; niveau de preuve modéré, méthodologies hétérogènes, populations obstétricales.
- **Anatomie et technique** : Greher 2010 (*BJA*, dissection cadavérique) établit la supériorité du site proximal C2 sur le site classique en termes de taux de succès. La comparaison **clinique** proximal vs distal reste peu tranchée : pas de bénéfice à ajouter le niveau distal au niveau C2 dans la migraine chronique (ECR, *Ann Indian Acad Neurol* 2023), avantage de durée pour C2 dans l\'algie vasculaire (étude comparative récente).
- **Névralgie d\'Arnold** : paradoxalement, l\'indication la plus « logique » est la moins bien documentée — séries, cohortes rétrospectives, aucun ECR de qualité contre placebo. Preuve **faible**, pratique universelle. La cryoneurolyse et la RF continue reposent également sur des séries.

*Trous assumés de la littérature* : pas d\'ECR comparant proximal et distal dans la névralgie occipitale ; pas de consensus sur le volume, la concentration ni l\'intérêt du corticoïde ; durée d\'effet au-delà de 3 mois mal documentée dans toutes les indications.`,

  references: [
    { auteurs: 'Greher M, Moriggl B, Curatolo M, Kirchmair L, Eichenberger U', titre: 'Sonographic visualization and ultrasound-guided blockade of the greater occipital nerve: a comparison of two selective techniques confirmed by anatomical dissection', revue: 'Br J Anaesth', annee: '2010;104(5):637-42', pmid: '20299347', type: 'anatomie / technique', note: 'Étude fondatrice de l\'approche proximale C2 (face dorsale de l\'oblique inférieur).' },
    { auteurs: '—', titre: 'Ultrasound-guided greater occipital nerve block for chronic migraine: a systematic review and meta-analysis', revue: 'Head Face Med', annee: '2025;21(1):81', doi: '10.1186/s13005-025-00554-1', type: 'méta-analyse', note: 'La seule méta-analyse restreinte aux blocs échoguidés — 6 études, n = 344.' },
    { auteurs: '—', titre: 'Influence of greater occipital nerve block on the relief of acute migraine: a meta-analysis', revue: 'Medicine (Baltimore)', annee: '2024', doi: '10.1097/MD.0000000000039955', pmid: '39432635', type: 'méta-analyse' },
    { auteurs: '—', titre: 'Assessing the effectiveness of greater occipital nerve block in chronic migraine: a systematic review and meta-analysis', revue: 'BMC Neurol', annee: '2024', doi: '10.1186/s12883-024-03834-6', type: 'méta-analyse' },
    { auteurs: 'Atraszkiewicz D, Ünal E, Bassett P, Morell-Ducos F, Bahra A', titre: 'Greater occipital nerve block for the treatment of migraine: an umbrella review, systematic review, and meta-analysis', revue: 'Cephalalgia', annee: '2025', doi: '10.1177/03331024251398390', type: 'revue parapluie' },
    { auteurs: 'Ambrosini A, et al.', titre: 'Suboccipital injection with a mixture of rapid- and long-acting steroids in cluster headache: a double-blind placebo-controlled study', revue: 'Pain', annee: '2005', doi: '10.1016/j.pain.2005.07.015', pmid: '16202532', type: 'ECR' },
    { auteurs: '—', titre: 'Suboccipital steroid injections for transitional treatment of patients with more than two cluster headache attacks per day: a randomised, double-blind, placebo-controlled trial', revue: 'Lancet Neurol', annee: '2011', url: 'https://www.thelancet.com/journals/laneur/article/PIIS1474-4422(11)70186-7/abstract', type: 'ECR' },
    { auteurs: 'Palamar D, et al.', titre: 'Ultrasound-guided greater occipital nerve block: an efficient technique in chronic refractory migraine without aura?', revue: 'Pain Physician', annee: '2015', type: 'ECR', url: 'https://www.researchgate.net/publication/273833771_Ultrasound-Guided_Greater_Occipital_Nerve_Block_An_Efficient_Technique_in_Chronic_Refractory_Migraine_Without_Aura' },
    { auteurs: '—', titre: 'Efficacy of adding a distal level block to a C2 level greater occipital nerve block under ultrasound guidance in chronic migraine', revue: 'Ann Indian Acad Neurol', annee: '2023', doi: '10.4103/aian.aian_169_23', pmid: '37970254', type: 'ECR', note: 'Le bi-niveau n\'apporte rien de plus que le seul niveau C2.' },
    { auteurs: '—', titre: 'Comparison of two methods of greater occipital nerve block in patients with chronic migraine: ultrasound-guided and landmark-based techniques', revue: 'BMC Neurol', annee: '2024', doi: '10.1186/s12883-024-03816-8', type: 'ECR' },
    { auteurs: '—', titre: 'Pulsed radiofrequency neuromodulation of the greater occipital nerve for the treatment of headache disorders in adults: a systematic review', revue: 'Can J Pain', annee: '2024', doi: '10.1080/24740527.2024.2355571', type: 'revue systématique' },
    { auteurs: 'Stogicza AR, et al.', titre: 'New technique for cryoneuroablation of the proximal greater occipital nerve', revue: 'Pain Pract', annee: '2019', doi: '10.1111/papr.12779', type: 'technique' },
    { auteurs: '—', titre: 'Ultrasound-guided continuous radiofrequency ablation of the proximal greater occipital nerve is effective in refractory occipital neuralgia: a retrospective cohort study', revue: '—', annee: '2025', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11964712/', type: 'cohorte rétrospective' },
    { auteurs: '—', titre: 'Novel ultrasound-guided hydrodissection with 5 % dextrose for the treatment of occipital neuralgia targeting the greater occipital nerve', revue: '—', annee: '2024', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC11241494/', type: 'cas cliniques' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [
    { titre: 'Ultrasound-guided greater occipital nerve block', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-greater-occipital-nerve-block/', note: 'sono-anatomie des deux niveaux, images de référence' },
    { titre: 'Greater occipital nerve block', source: 'USRA (usra.ca)', url: 'https://usra.ca/pain-medicine/specific-blocks/head-neck/gon.php', note: 'coupes commentées et trajet d\'aiguille' },
    { titre: 'Greater occipital nerve block (ultrasound-guided)', source: 'Radiopaedia', url: 'https://radiopaedia.org/articles/greater-occipital-nerve-block-ultrasound-guided', note: 'rappel anatomique et repères' },
    { titre: 'Occipital nerve block — StatPearls', source: 'NCBI Bookshelf', url: 'https://www.ncbi.nlm.nih.gov/books/NBK580523/', note: 'texte de synthèse, complications' },
  ],

  scenes: [
    {
      id: 'gon-c2-reperage', section: 'sonoanatomie', titre: 'Approche proximale C2 — coupe axiale oblique sur la lame de C2',
      legende: 'Sonde médiale sur l\'épineuse bifide de C2, extrémité latérale tournée vers la mastoïde. De la superficie à la profondeur : trapèze, splénius, semi-épineux de la tête, puis le plan interfascial où court le GON sur la face dorsale de l\'oblique inférieur. L\'artère vertébrale (V3) est profonde et latérale, sous l\'OCI : elle n\'est jamais sur le trajet d\'une aiguille qui s\'arrête au contact dorsal du muscle.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Axiale oblique, lame de C2', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 72 L640 72 L640 102 L0 110 Z', label: 'Trapèze', at: [80, 92], opacity: 0.45 });
        S.fascia({ points: [[0, 110], [640, 102]], width: 1.4 });
        S.muscle({ path: 'M0 110 L640 102 L640 140 L0 150 Z', label: 'Splénius de la tête', at: [110, 130], opacity: 0.45 });
        S.fascia({ points: [[0, 150], [640, 140]], width: 1.4 });
        S.muscle({ path: 'M0 150 L640 140 L640 212 L0 232 Z', label: 'Semi-épineux de la tête', at: [140, 190], opacity: 0.5 });
        S.fascia({ points: [[0, 232], [640, 212]], width: 1.9, opacity: 0.9 });
        S.muscle({ path: 'M60 252 L640 226 L640 292 L60 318 Z', label: 'Oblique inférieur (OCI)', at: [330, 278], opacity: 0.62 });
        S.nerve({ x: 300, y: 236, r: 6, label: 'N. grand occipital', lx: 396, ly: 200, anchor: 'start', lead: [307, 235] });
        S.bone({ path: 'M0 302 L36 298 L64 288 Q92 274 120 288 L152 302', label: 'Épineuse bifide de C2', at: [86, 336], small: true, ldy: 0 });
        S.bone({ path: 'M508 330 Q572 312 640 306', label: 'Proc. transverse C1', at: [566, 356], small: true, ldy: 0 });
        S.artery({ x: 452, y: 336, r: 15, label: 'A. vertébrale (V3)', lx: 400, ly: 386, anchor: 'end', lead: [440, 344] });
        S.label({ x: 152, y: 224, text: 'Plan interfascial = cible', cls: 'lbl-target', small: true });
      },
    },
    {
      id: 'gon-c2-geste', section: 'technique', titre: 'Bloc proximal C2 — aiguille dans le plan, de latéral en médial',
      legende: 'L\'aiguille traverse trapèze, splénius et semi-épineux et s\'arrête **au contact de la face dorsale de l\'OCI** : on ne traverse jamais ce muscle. Critère de fin : nappe anéchogène de 2–3 cm qui décolle le semi-épineux de l\'OCI et englobe le nerf. Une image restée dans le muscle signe une pointe trop superficielle.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Axiale oblique, lame de C2', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 72 L640 72 L640 102 L0 110 Z', label: 'Trapèze', at: [70, 92], opacity: 0.45, small: true });
        S.fascia({ points: [[0, 110], [640, 102]], width: 1.4 });
        S.muscle({ path: 'M0 110 L640 102 L640 140 L0 150 Z', label: 'Splénius', at: [70, 130], opacity: 0.45, small: true });
        S.fascia({ points: [[0, 150], [640, 140]], width: 1.4 });
        S.muscle({ path: 'M0 150 L640 140 L640 212 L0 232 Z', label: 'Semi-épineux', at: [92, 190], opacity: 0.5, small: true });
        S.fascia({ points: [[0, 232], [640, 212]], width: 1.9, opacity: 0.9 });
        S.muscle({ path: 'M60 252 L640 226 L640 292 L60 318 Z', label: 'OCI — ne pas traverser', at: [340, 282], opacity: 0.62, small: true });
        S.bone({ path: 'M0 302 L36 298 L64 288 Q92 274 120 288 L152 302' });
        S.bone({ path: 'M508 330 Q572 312 640 306' });
        S.artery({ x: 452, y: 336, r: 15, label: 'A. vertébrale', lx: 398, ly: 388, anchor: 'end', lead: [440, 344], small: true });
        S.nerve({ x: 296, y: 236, r: 6, label: 'GON', lx: 232, ly: 206, anchor: 'end', lead: [290, 233], small: true });
        S.target({ x: 320, y: 238, r: 15 });
        S.needle({ from: [640, 88], to: [332, 238], label: '22 G 50–80 mm, 25–35°' });
        /* nappe interfasciale percée d'un « trou » autour du nerf : la diffusion englobe le GON sans le masquer */
        S.spreadPath({ path: 'M218 240 A78 16 0 1 1 374 240 A78 16 0 1 1 218 240 Z M287 236 A9 9 0 1 0 305 236 A9 9 0 1 0 287 236 Z', at: [148, 224], label: '3–5 mL' });
      },
    },
    {
      id: 'gon-distal', section: 'technique', titre: 'Approche distale — ligne nuchale supérieure, en dedans de l\'artère occipitale',
      legende: 'Sonde transversale 2 cm sous la protubérance occipitale externe. Le nerf est sous-cutané, sur l\'aponévrose, **en dedans** de l\'artère occipitale repérée au Doppler. Aiguille très plate, entrée latérale, progression superficielle à l\'artère : 2–3 mL suffisent pour un halo circonférentiel. Ne jamais viser l\'os sans voir la pointe.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transversale, ligne nuchale supérieure', type: 'in-plane' });
        S.skin({ thickness: 9, fatBelow: 62 });
        S.fascia({ points: [[0, 152], [320, 146], [640, 154]], width: 2, opacity: 0.9 });
        S.label({ x: 92, y: 140, text: 'Aponévrose du trapèze', cls: 'lbl-fascia', small: true });
        S.muscle({ path: 'M0 154 L320 148 L640 156 L640 232 L320 214 L0 226 Z', label: 'Trapèze / semi-épineux (insertions)', at: [320, 192], opacity: 0.5, small: true });
        S.bone({ path: 'M0 300 Q160 268 320 264 Q480 268 640 298', label: 'Écaille occipitale', at: [320, 332], ldy: 0 });
        S.nerve({ x: 238, y: 130, r: 7, label: 'N. grand occipital', lx: 138, ly: 96, anchor: 'end', lead: [232, 124] });
        S.artery({ x: 400, y: 126, r: 7, label: 'A. occipitale (Doppler)', lx: 452, ly: 176, anchor: 'start', lead: [406, 132] });
        S.needle({ from: [640, 74], to: [270, 116], label: '25 G 50 mm, angle 10–20°' });
        /* halo circonférentiel autour du nerf : anneau (le nerf reste visible au centre) */
        S.spreadPath({ path: 'M190 130 A48 19 0 1 1 286 130 A48 19 0 1 1 190 130 Z M228 130 A10 10 0 1 0 248 130 A10 10 0 1 0 228 130 Z', at: [334, 134], label: '2–3 mL' });
      },
    },
  ],

  checklist: [
    'Céphalée secondaire éliminée ; antécédent de chirurgie de la fosse postérieure ou de craniectomie occipitale recherché explicitement (contre-indication relative forte)',
    'Premier bloc en AL seul si la valeur diagnostique compte (critère ICHD-3 de la névralgie occipitale)',
    'EN avant / 30 min après et hypoesthésie du territoire notées dans le dossier — c\'est ce qui justifiera une PRF',
    'Corticoïde non particulaire au voisinage artériel ; dose cumulée annuelle tracée (max 3–4 injections/an sur le même site)',
    'Prévenir du vertige et du malaise vagal ; ne pas laisser repartir seul en voiture immédiatement',
  ],
});
