/* Fiche : infiltration intra-articulaire gléno-humérale échoguidée et hydrodilatation capsulaire. */
ECHO.register({
  id: 'gleno-humerale',
  titre: 'Articulation gléno-humérale — infiltration échoguidée et hydrodilatation capsulaire',
  titreCourt: 'Gléno-humérale',
  en: 'Ultrasound-guided glenohumeral joint injection — posterior and rotator interval (anterior) approaches; capsular hydrodilatation (arthrographic distension) for adhesive capsulitis',
  region: 'membre-sup',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée à forte pour la corticothérapie intra-articulaire à court terme · modérée pour l\'hydrodilatation dans la capsulite · faible pour l\'acide hyaluronique et le PRP',
  maj: '2026-09',
  motsCles: ['omarthrose', 'capsulite rétractile', 'épaule gelée', 'frozen shoulder', 'hydrodilatation', 'distension capsulaire', 'arthrodistension', 'voie postérieure', 'intervalle des rotateurs', 'labrum postérieur', 'acide hyaluronique', 'PRP', 'chondrotoxicité'],
  resume: 'L\'infiltration gléno-humérale échoguidée est un geste **courant, rapide et précis** : la voie postérieure, sonde sous l\'épine de la scapula, place la pointe entre le labrum postérieur et la tête humérale, sous la capsule, en une trentaine de secondes. L\'arthrographie n\'est plus nécessaire — l\'échoguidage atteint des taux de placement intra-articulaire très supérieurs au geste à l\'aveugle, avec une précision comparable au repérage radioscopique et sans irradiation. Deux registres d\'usage : l\'**infiltration de corticoïde** (omarthrose, arthrite, phase douloureuse de la capsulite), et l\'**hydrodilatation capsulaire** dans la capsulite rétractile, où l\'on injecte 20 à 40 mL de sérum physiologique avec anesthésique local et corticoïde pour distendre — voire rompre — la capsule rétractée. La voie antérieure par l\'intervalle des rotateurs est une alternative utile quand la voie postérieure est inexploitable. Deux points de vigilance qui structurent la fiche : la **chondrotoxicité des anesthésiques locaux**, qui interdit de banaliser l\'AL intra-articulaire répété, et la **limite médiale** de l\'aiguille, au-delà de laquelle on rencontre le nerf suprascapulaire à l\'échancrure spinoglénoïdienne.',

  flash: {
    position: 'assis', positionNote: 'assis dos à l\'opérateur, main du côté traité posée sur la cuisse opposée (adduction-rotation interne, qui ouvre l\'interligne postérieur) ; décubitus latéral côté à traiter vers le haut si risque vagal ou si l\'on enchaîne avec un bloc',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 4–6 cm ; convexe 2–5 MHz si morphotype épais (l\'interligne postérieur est à 3–5 cm)',
    approche: 'in-plane', approcheNote: 'sonde transversale sous l\'épine de la scapula, dans l\'axe de l\'infra-épineux ; ponction **de latéral en médial**, en visant l\'espace entre tête humérale et labrum postérieur',
    aiguille: '21–22 G, 50–90 mm échovisible pour la voie postérieure ; 22 G 50 mm pour la voie antérieure. Prolongateur indispensable pour l\'hydrodilatation (changements de seringue)',
    cible: 'Entre le **labrum postérieur** et le **cartilage de la tête humérale**, sous la capsule postérieure. Critère de fin : injection sans résistance, injectat qui **décolle la capsule** et se répartit dans le récessus, sans lentille intramusculaire',
    injectat: 'Infiltration : 2–5 mL (corticoïde ± AL). Hydrodilatation : 20–40 mL (sérum physiologique + AL + corticoïde)',
    duree: '5–10 min infiltration · 15–20 min hydrodilatation',
  },

  indications: [
    '**Omarthrose** (primitive, post-traumatique, excentrée sur rupture de coiffe) douloureuse malgré antalgiques, AINS et kinésithérapie : infiltration de corticoïde, éventuellement acide hyaluronique en relais.',
    '**Capsulite rétractile** (épaule gelée), phase douloureuse et phase de raideur : infiltration de corticoïde en phase douloureuse ; **hydrodilatation** dès que la raideur domine, pour rendre la kinésithérapie possible.',
    '**Arthrites inflammatoires** : polyarthrite rhumatoïde, spondyloarthrite, rhumatisme à cristaux, en complément du traitement de fond.',
    '**Arthropathie sur rupture massive de coiffe** non opérable, à visée antalgique.',
    '**Geste diagnostique** : distinguer une douleur d\'origine articulaire d\'une douleur sous-acromiale ou cervicale, par un test à l\'anesthésique local intra-articulaire (à ne pas répéter, cf. chondrotoxicité).',
    'Épaule douloureuse chez le diabétique : indication à peser — la capsulite y est plus fréquente et plus sévère, mais le corticoïde y est moins bien toléré. C\'est typiquement là que le bloc suprascapulaire prend l\'avantage.',
  ],
  contreIndications: [
    '**Absolues** : suspicion d\'arthrite septique (fièvre, épanchement, terrain), infection cutanée en regard, bactériémie, allergie vraie. Devant un épanchement fébrile : **ponction à visée bactériologique, jamais de corticoïde**.',
    'Absolues pour l\'hydrodilatation : infection, et prudence extrême en cas de fragilité capsulaire connue (instabilité, chirurgie récente).',
    'Relatives : troubles de l\'hémostase — geste **superficiel à intermédiaire, compressible**, classé à **faible risque hémorragique** (ASRA-ESRA 2018) ; pas d\'arrêt systématique des antiagrégants, anticoagulants au cas par cas.',
    'Relatives : diabète déséquilibré (hyperglycémie de 24–72 h attendue, à anticiper avec le patient), corticoïde sur le même site il y a moins de 3 mois, **prothèse d\'épaule ou chirurgie programmée à moins de 3 mois** (risque infectieux post-opératoire majoré par une infiltration récente).',
    'Rupture transfixiante massive de la coiffe : l\'infiltration reste possible mais l\'injectat diffuse dans l\'espace sous-acromial ; le prévoir plutôt que de s\'en étonner.',
    'Injections répétées d\'anesthésique local intra-articulaire : à éviter (chondrotoxicité) — cf. chapitre Injectat.',
  ],
  alternatives: '**Bloc du nerf suprascapulaire** (fiche dédiée) : dans la méta-analyse de Chang 2016, il est **équivalent** à l\'infiltration intra-articulaire de corticoïde sur la douleur et la fonction — c\'est donc l\'alternative de choix chez le diabétique, après plusieurs infiltrations, ou quand on veut éviter le corticoïde intra-articulaire. **Bloc combiné suprascapulaire + axillaire** dans la capsulite (fiche dédiée). Infiltration **sous-acromiale** si le conflit domine le tableau. **Kinésithérapie** : elle n\'est pas une alternative mais la condition d\'efficacité de tout ce qui précède. Chirurgie : capsulotomie arthroscopique ou mobilisation sous anesthésie générale dans les capsulites rebelles, prothèse dans l\'omarthrose évoluée. Ordre pratique : corticoïde intra-articulaire ou bloc suprascapulaire en première ligne, **hydrodilatation** si la raideur est le problème, avis chirurgical si rien ne bouge à 6 mois.',

  anatomie: `L\'articulation gléno-humérale est une énarthrose très mobile et peu congruente : une **glène** petite et plate, agrandie par un bourrelet fibro-cartilagineux, le **labrum**, et une **tête humérale** sphérique bien plus grande. La stabilité vient des parties molles, pas de l\'os — d\'où une capsule ample, doublée des ligaments gléno-huméraux, et des récessus.

**Par voie postérieure**, la fenêtre est simple : sous l\'épine de la scapula, le **deltoïde postérieur** puis l\'**infra-épineux** recouvrent la **capsule postérieure**. Celle-ci s\'insère sur le col de la glène et sur le col anatomique de l\'humérus, et ménage un **récessus postérieur** entre le labrum postérieur et le cartilage de la tête humérale : c\'est la cible.

**En avant**, l\'**intervalle des rotateurs** est l\'espace triangulaire entre le bord antérieur du supra-épineux et le bord supérieur du subscapulaire, comblé par le **ligament coraco-huméral** et traversé par le **tendon du long biceps**, encore intra-articulaire à ce niveau (il n\'entre dans la gouttière bicipitale qu\'un peu plus bas). C\'est un accès direct à l\'articulation, et c\'est aussi la zone dont l\'épaississement signe la capsulite en imagerie.

### Ce qui compte pour le geste
- **La cible est un espace, pas une cavité** : hors épanchement, le récessus postérieur est virtuel. On ne « rentre » pas dans un liquide, on décolle un plan — le critère de réussite est le **décollement de la capsule** par les premiers dixièmes de millilitre, pas un reflux articulaire.
- **La limite médiale est vitale** : au-delà du labrum, en dedans, on quitte l\'articulation pour l\'**échancrure spinoglénoïdienne**, où passent le **nerf suprascapulaire** et l\'artère suprascapulaire. L\'aiguille ne doit jamais dépasser le rebord glénoïdien.
- **La limite inférieure aussi** : le récessus axillaire est proche du **nerf axillaire**, qui contourne le col chirurgical. Une voie trop basse expose à un bloc moteur du deltoïde non désiré.
- **Profondeurs** : interligne postérieur à **3–5 cm** chez l\'adulte de corpulence moyenne, plus chez le sujet musclé ou obèse ; intervalle des rotateurs à 2–3 cm seulement.
- **Capsulite = capsule épaissie et peu compliante** : l\'aiguille rencontre une résistance nette, le volume acceptable avant douleur est faible, et c\'est précisément ce que l\'hydrodilatation exploite. À l\'inverse, dans l\'omarthrose avec épanchement, l\'articulation se remplit sans résistance.
- **L\'échographie a rendu l\'arthrographie inutile** pour ce geste : les travaux comparatifs montrent une précision de placement intra-articulaire très élevée, comparable à la radioscopie, sans irradiation ni produit de contraste.`,

  installation: {
    patient: `**Assis**, dos à l\'opérateur, **main du côté traité posée sur la cuisse opposée** : cette adduction-rotation interne fait tourner la tête humérale en dedans, écarte le deltoïde postérieur et **ouvre l\'interligne postérieur**. C\'est le détail qui fait la différence entre une fenêtre confortable et un geste laborieux.

Alternative : **décubitus latéral**, côté à traiter vers le haut, bras en légère adduction — position de choix chez le patient à risque vagal, chez le patient algique, et quand on enchaîne dans la même installation avec un bloc suprascapulaire ou axillaire.

Pour la voie antérieure : **décubitus dorsal**, bras le long du corps en légère rotation externe, qui déroule l\'intervalle des rotateurs sous la sonde.

Marquer l\'**épine de la scapula** et l\'**angle postéro-latéral de l\'acromion** au feutre avant la désinfection.`,
    operateur: `Opérateur **derrière le patient**, du côté à traiter ; écran en face, dans l\'axe du regard. Sonde tenue en appui ferme sur le deltoïde postérieur.

Sonde **transversale, 1–2 cm sous l\'épine de la scapula**, dans l\'axe des fibres de l\'infra-épineux, glissée en dehors jusqu\'à voir simultanément la **glène**, le **labrum postérieur** et la **convexité de la tête humérale**.

Ponction **in-plane, de latéral en médial**, l\'aiguille entrant par le bord latéral de la sonde. Ce sens amène la pointe **de la tête humérale vers le labrum**, c\'est-à-dire du côté sûr vers le côté à risque, avec la convexité osseuse comme guide : on suit le cartilage, on s\'arrête au labrum. L\'inverse (médio-latéral) dirige l\'aiguille vers l\'échancrure spinoglénoïdienne — à proscrire.`,
    sonde: `- Linéaire 6–13 MHz, preset MSK, profondeur **4–6 cm**, focale sur l\'interligne, gain modéré (la corticale de la tête humérale doit rester une ligne blanche franche, le cartilage une bande hypoéchogène régulière au-dessus d\'elle).
- Rechercher un **épanchement** (récessus postérieur distendu, anéchogène) et une **synovite** (comblement hypoéchogène avec signal Doppler) : leur présence change le geste — ponction évacuatrice d\'abord, analyse au moindre doute.
- **Doppler couleur** avant la ponction, et surtout si l\'on est tenté d\'aller en dedans : l\'artère suprascapulaire signe l\'échancrure spinoglénoïdienne, c\'est-à-dire la zone interdite.
- Pour l\'hydrodilatation : garder à l\'écran le récessus postérieur pendant toute l\'injection — c\'est lui qui se distend et qui montre en temps réel que l\'on est bien intra-articulaire.
- Voie antérieure : sonde **axiale** sur la face antérieure de l\'épaule, repérer le **tendon du long biceps** dans sa gouttière, puis remonter jusqu\'à l\'intervalle des rotateurs entre supra-épineux et subscapulaire.`,
  },

  reperage: [
    { titre: 'Épine de la scapula puis descente', texte: 'Poser la sonde **transversale sur l\'épine**, ligne hyperéchogène avec ombre franche, puis descendre de 1–2 cm : apparaissent le **deltoïde postérieur** en superficie et l\'**infra-épineux** en dessous, fibres pennées.' },
    { titre: 'Glisser en dehors jusqu\'à la tête humérale', texte: 'Translater la sonde vers le dehors : la **convexité régulière de la tête humérale** apparaît en profondeur, coiffée d\'une fine bande hypoéchogène — le **cartilage articulaire**. C\'est le repère le plus reconnaissable de la coupe.' },
    { titre: 'Trouver le labrum et l\'interligne', texte: 'Poursuivre en dedans jusqu\'à voir la **glène** (ligne osseuse plus plate, plus médiale) et, à sa jonction avec la tête humérale, le **labrum postérieur** : petit **triangle hyperéchogène** appuyé sur le rebord glénoïdien. L\'espace entre labrum et cartilage huméral, sous la capsule, est la cible.' },
    { titre: 'Chercher épanchement et synovite', texte: 'Un récessus postérieur distendu et anéchogène signe l\'épanchement (à ponctionner en premier, et à analyser si le contexte est douteux) ; un comblement hypoéchogène avec signal Doppler signe la synovite. Dans la capsulite pure, il n\'y a **ni l\'un ni l\'autre** : le récessus est virtuel et la capsule paraît épaissie.' },
    { titre: 'Mesurer et borner', texte: 'Noter la profondeur de l\'interligne et repérer visuellement le **rebord glénoïdien** : c\'est la butée médiale, à ne jamais dépasser. Un coup de Doppler en dedans rappelle pourquoi (artère suprascapulaire, échancrure spinoglénoïdienne).' },
    { titre: 'Si la voie postérieure est inexploitable', texte: 'Sujet très musclé, arthrose majeure avec ostéophytes postérieurs, douleur interdisant l\'adduction : passer à la **voie antérieure par l\'intervalle des rotateurs** — patient en décubitus dorsal, sonde axiale, repérage du long biceps dans sa gouttière puis remontée jusqu\'à l\'intervalle, aiguille in-plane de latéral en médial, cible en profondeur du ligament coraco-huméral et du tendon.' },
  ],

  sonoanatomie: [
    { structure: 'Deltoïde postérieur', aspect: 'Muscle superficiel strié, épaisseur variable', repere: 'Premier plan à traverser' },
    { structure: 'Infra-épineux', aspect: 'Muscle penné, appliqué sur la capsule postérieure', repere: 'Son plan profond conduit à la capsule' },
    { structure: 'Capsule postérieure', aspect: 'Fine ligne hyperéchogène pontant de la glène à la tête humérale', repere: 'Le décollement de cette ligne par l\'injectat est le critère de réussite' },
    { structure: 'Tête humérale', aspect: 'Convexité corticale régulière, très hyperéchogène, avec ombre franche', repere: 'Repère le plus reconnaissable ; guide le trajet de l\'aiguille' },
    { structure: 'Cartilage huméral', aspect: 'Bande hypoéchogène régulière de 1–2 mm coiffant la corticale', repere: 'Ne pas le confondre avec un épanchement ; ne pas le racler avec l\'aiguille' },
    { structure: 'Glène', aspect: 'Ligne osseuse plus plate, médiale, avec ombre', repere: 'Versant médial de l\'interligne' },
    { structure: 'Labrum postérieur', aspect: 'Petit triangle hyperéchogène au rebord glénoïdien', repere: '**Butée médiale absolue** de l\'aiguille' },
    { structure: 'Récessus postérieur', aspect: 'Virtuel à l\'état normal ; anéchogène et distendu en cas d\'épanchement', repere: 'Cible ; se distend en direct pendant l\'hydrodilatation' },
    { structure: 'Échancrure spinoglénoïdienne (en dedans)', aspect: 'Dépression osseuse entre épine et col de la glène, artère constante en Doppler', repere: 'Zone interdite : nerf et artère suprascapulaires' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Asepsie chirurgicale stricte — c\'est une articulation, pas un plan de fascia : détersion, désinfection, gants stériles, housse de sonde et gel stérile. Aiguille 21–22 G 50–90 mm sur prolongateur. Pour l\'hydrodilatation, préparer à l\'avance les seringues (une de 10 mL pour AL + corticoïde, deux à quatre de 20 mL de sérum physiologique) et un robinet trois voies.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au bord latéral de la sonde. Systématique pour l\'hydrodilatation, qui dure plus longtemps et met la capsule en tension.' },
    { titre: 'Ponction in-plane, de latéral en médial', texte: 'Angle 30–45°. Traverser deltoïde puis infra-épineux en gardant l\'aiguille visible sur toute sa longueur. **Suivre la convexité de la tête humérale** jusqu\'à sentir le franchissement de la capsule postérieure — ressaut net — puis poser la pointe dans l\'espace entre cartilage huméral et labrum. **S\'arrêter au labrum** : ne jamais le dépasser en dedans.' },
    { titre: 'Test d\'injection', texte: 'Aspiration (ponctionner et analyser tout épanchement avant d\'injecter). Puis **0,5 mL** en regardant l\'écran : l\'injectat doit **décoller la capsule** de la tête humérale et remplir le récessus. Une résistance forte, une douleur intense ou une image de lentille intramusculaire = pointe extra-articulaire → repositionner de 1–2 mm. Ne jamais forcer sur le piston pour « vaincre » une résistance : dans cette articulation, une résistance qui ne cède pas signifie que l\'on n\'est pas dedans.' },
    { titre: 'Infiltration simple', texte: 'Injecter **2–5 mL** lentement, en surveillant la distension du récessus. Retrait, compression, pansement.' },
    { titre: 'Hydrodilatation (capsulite)', texte: 'Après confirmation intra-articulaire : injecter d\'abord l\'**AL + corticoïde** (5–10 mL), puis compléter au **sérum physiologique** par bolus de 5 mL jusqu\'à un volume total de **20–40 mL**, en suivant la distension du récessus à l\'écran. Trois critères d\'arrêt : **douleur du patient**, **résistance franche au piston**, ou **rupture capsulaire** (chute brutale de la résistance et diffusion de l\'injectat hors du récessus, souvent vers l\'espace sous-acromial ou l\'intervalle). Aucun de ces trois ne doit être forcé ; le volume est un objectif, pas une obligation.' },
    { titre: 'Après le geste', texte: 'Compression 1 min, pansement. Tester la **mobilité passive** en élévation et rotation externe à 15–20 min : le gain immédiat, quand il existe, motive le patient et valide le geste. Surveillance 20–30 min. **Kinésithérapie dans les 24–48 h** : c\'est la condition d\'efficacité de l\'hydrodilatation, pas une option. EN et amplitudes avant / après, tracées.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration de corticoïde (omarthrose, arthrite, capsulite douloureuse) | **Triamcinolone hexacétonide** (Hexatrione® 2 %, 20 mg/mL) 20–40 mg, **ou** méthylprednisolone (Dépo-Médrol®) 40 mg, **ou** bétaméthasone (Diprostène®) 7 mg | 2–5 mL avec le diluant | L\'hexacétonide est le corticoïde de plus longue durée d\'action et son AMM est **strictement intra-articulaire** — c\'est ici l\'une des rares indications où il est à sa place |
| Test diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 % | 5 mL | **À ne pas répéter** (chondrotoxicité). Évaluation à 20–30 min, tracée |
| Acide hyaluronique | Une seringue de viscosupplémentation, 2 mL | 2 mL | En relais ou en alternative au corticoïde dans l\'omarthrose, notamment chez le diabétique. Preuve **faible** à l\'épaule, et prise en charge non garantie : le dire au patient |
| **Hydrodilatation** (capsulite) | Sérum physiologique + AL (lidocaïne 1 % ou ropivacaïne 0,2 %, 5–10 mL) + corticoïde (triamcinolone hexacétonide 20 mg ou méthylprednisolone 40 mg) | **20–40 mL au total** | Arrêt sur douleur, résistance franche ou rupture capsulaire. Le volume réellement toléré dans une capsulite serrée est souvent de 15–25 mL seulement — c\'est normal |
| PRP | Préparation autologue | 3–5 mL | Données **très limitées** à la gléno-humérale ; hors nomenclature, à visée exploratoire seulement. Ne pas le proposer comme un standard |

**Chondrotoxicité des anesthésiques locaux** — le point que l\'on oublie le plus souvent. Les travaux in vitro montrent une cytotoxicité de la bupivacaïne 0,5 % sur les chondrocytes articulaires, plus marquée que celle de la ropivacaïne, et dose- et durée-dépendante. Conséquences pratiques : **pas de perfusion intra-articulaire continue d\'AL**, pas de tests anesthésiques intra-articulaires répétés, et si un AL est utilisé, préférer une **ropivacaïne à faible concentration** ou s\'en passer. Dans l\'hydrodilatation, l\'AL est dilué dans un grand volume de sérum, ce qui limite l\'exposition — mais ne l\'annule pas.

**Rythme et dose cumulée** : au plus **3 infiltrations de corticoïde par an** sur la même articulation, espacées d\'au moins 3 mois. Après deux infiltrations sans bénéfice durable, la bonne question n\'est plus « quelle dose » mais « quelle autre stratégie » (bloc suprascapulaire, hydrodilatation, avis chirurgical).

**Diabétique** : hyperglycémie de 24 à 72 h attendue après tout corticoïde intra-articulaire. Prévenir, faire surveiller la glycémie capillaire, et envisager sérieusement le **bloc suprascapulaire** à la place — il est d\'efficacité équivalente dans la méta-analyse de Chang 2016.`,

  variantes: [
    { titre: 'Voie antérieure — intervalle des rotateurs', texte: `Patient en **décubitus dorsal**, bras le long du corps en légère rotation externe. Sonde **axiale** sur la face antérieure de l\'épaule : repérer le **tendon du long biceps** dans la gouttière bicipitale, puis remonter jusqu\'à l\'**intervalle des rotateurs**, espace triangulaire entre le bord antérieur du **supra-épineux** et le bord supérieur du **subscapulaire**, comblé par le **ligament coraco-huméral**.

Aiguille in-plane, de latéral en médial, cible en profondeur du ligament coraco-huméral, au contact de la tête humérale. Avantages : cible **superficielle** (2–3 cm), facile chez l\'obèse et chez le patient qui ne tolère pas l\'adduction ; c\'est aussi la zone dont l\'épaississement signe la capsulite, ce qui donne un argument diagnostique en même temps que l\'accès. Limites : proximité du tendon du long biceps (à ne pas injecter) et de l\'artère circonflexe antérieure ; anatomie plus difficile à tenir dans le plan.` },
    { titre: 'Hydrodilatation : les trois écoles', texte: `Les protocoles publiés diffèrent sur un point : faut-il **rompre** la capsule ou seulement la **distendre** ?

- *Distension sans rupture* : injection jusqu\'à résistance ou douleur, volume typiquement 15–30 mL, arrêt avant rupture. C\'est la pratique la plus répandue et la plus confortable.
- *Distension jusqu\'à rupture* : on poursuit jusqu\'à la chute brutale de résistance. Effet mécanique maximal, geste plus douloureux, et l\'injectat diffuse alors hors de l\'articulation — le corticoïde doit donc avoir été injecté **avant**.
- *Séries répétées* : 2 à 3 hydrodilatations espacées de 2 à 6 semaines, plutôt qu\'une seule à fort volume.

Aucune de ces trois stratégies n\'a démontré sa supériorité de façon convaincante. Mon choix : injecter le corticoïde en premier, distendre jusqu\'à résistance ou douleur, ne pas chercher la rupture, et **répéter à 4–6 semaines** si le gain d\'amplitude s\'est essoufflé. Dans tous les cas, la kinésithérapie dans les 48 h fait plus que le volume injecté.` },
    { titre: 'Ponction évacuatrice et analyse', texte: 'Devant un épanchement, ponctionner **avant** d\'injecter : décompression antalgique immédiate, et surtout analyse (cytologie, cristaux, bactériologie) au moindre doute. Un épanchement fébrile, ou chez un patient immunodéprimé, diabétique ou porteur d\'une prothèse, interdit le corticoïde tant que la bactériologie n\'est pas revenue.' },
    { titre: 'Association aux blocs de l\'épaule', texte: 'Dans une capsulite douloureuse et raide, la séquence la plus utile en HDJ est : **bloc suprascapulaire (± axillaire) pour l\'antalgie**, puis **hydrodilatation dans la même séance**, puis kinésithérapie à 24–48 h. Le bloc rend l\'hydrodilatation supportable et permet d\'atteindre un volume plus élevé. Calculer la **dose cumulée d\'AL et de corticoïde** de la séance entière — c\'est le point de vigilance de cette combinaison.' },
    { titre: 'Ce que l\'échographie a rendu inutile', texte: 'L\'**arthrographie** préalable n\'est plus nécessaire pour confirmer le placement intra-articulaire : le décollement capsulaire et la distension du récessus se voient en direct. Cela supprime l\'irradiation, le produit de contraste et le passage en salle de radiologie — argument organisationnel non négligeable pour une HDJ.' },
  ],

  pearls: [
    'Main sur la cuisse opposée : l\'adduction-rotation interne ouvre l\'interligne postérieur et transforme le geste.',
    'Suivre la convexité de la tête humérale comme un rail, et s\'arrêter au labrum : c\'est toute la sécurité du geste en une phrase.',
    'Le premier demi-millilitre décide : s\'il décolle la capsule, on est dedans ; s\'il fait une lentille, on ne l\'est pas. Ne jamais injecter les 5 mL « pour voir ».',
    'Dans la capsulite, le volume toléré est faible et la résistance est forte : c\'est le diagnostic, pas un échec technique.',
    'Injecter le corticoïde **avant** le sérum dans une hydrodilatation : si la capsule rompt, il est déjà en place.',
    'Programmer la kinésithérapie avant de faire le geste, pas après : une hydrodilatation sans rééducation dans les 48 h est un geste à moitié fait.',
    'Chez le diabétique, poser explicitement la question du bloc suprascapulaire en alternative : efficacité équivalente, pas d\'hyperglycémie.',
  ],
  pieges: [
    'Aller trop en dedans, au-delà du labrum : on quitte l\'articulation pour l\'échancrure spinoglénoïdienne et le nerf suprascapulaire.',
    'Prendre le cartilage huméral (bande hypoéchogène régulière) pour un épanchement, et conclure à tort à une articulation « pleine ».',
    'Forcer sur le piston devant une résistance : dans cette articulation, la résistance qui ne cède pas veut dire qu\'on est en dehors.',
    'Infiltrer un épanchement fébrile ou un patient à risque sans analyse préalable : l\'arthrite septique iatrogène ou méconnue est la complication qui coûte l\'épaule.',
    'Répéter les tests anesthésiques intra-articulaires : la chondrotoxicité des AL est dose- et durée-dépendante, et l\'articulation est déjà arthrosique.',
    'Faire une hydrodilatation sans avoir organisé la kinésithérapie et sans avoir prévenu de la douleur des 24 premières heures.',
    'Infiltrer une épaule dont la chirurgie est programmée dans les trois mois : le risque infectieux post-opératoire est majoré.',
  ],
  complications: [
    '**Arthrite septique iatrogène** : rare mais grave — c\'est ce qui impose une asepsie chirurgicale et non une simple désinfection. Toute douleur croissante avec fièvre après le geste impose un avis en urgence, une ponction et une bactériologie.',
    '**Chondrotoxicité des anesthésiques locaux** : documentée in vitro, dose- et durée-dépendante, plus marquée pour la bupivacaïne que pour la ropivacaïne. Éviter l\'AL intra-articulaire répété et toute perfusion continue.',
    '**Poussée douloureuse post-injection** (cristaux de corticoïde) : 24–48 h, très fréquente après hydrodilatation. Glace, antalgiques de palier 1–2, et surtout **information préalable** — sans elle, elle est vécue comme un échec.',
    '**Hyperglycémie** de 24–72 h chez le diabétique, parfois marquée. Prévenir, faire surveiller, adapter.',
    'Atrophie et dépigmentation cutanées en cas de reflux du corticoïde le long du trajet ; rupture tendineuse si un corticoïde est déposé dans un tendon (long biceps par voie antérieure).',
    'Lésion du **nerf suprascapulaire** (voie postérieure trop médiale) ou du **nerf axillaire** (voie trop inférieure) : bloc moteur, voire lésion durable.',
    '**Rupture capsulaire** lors de l\'hydrodilatation : attendue dans certains protocoles, sans conséquence clinique connue, mais elle met fin à la distension et disperse l\'injectat.',
    'Malaise vagal en position assise : patient surveillé, position allongée prête.',
  ],
  securite: [
    'Geste **intra-articulaire** : asepsie chirurgicale (gants stériles, housse de sonde, gel stérile), pas une simple désinfection.',
    'Risque hémorragique **faible** (ASRA-ESRA 2018, procédures douleur) : pas d\'arrêt systématique des antiagrégants ; anticoagulants au cas par cas.',
    '**Butée médiale** : ne jamais dépasser le labrum postérieur. Doppler en dedans pour se rappeler ce qu\'il y a derrière (artère et nerf suprascapulaires).',
    'Aspiration avant injection ; tout épanchement est ponctionné et, au moindre doute, analysé avant qu\'un corticoïde ne soit injecté.',
    'Pointe visible en permanence ; jamais d\'injection contre une résistance non cédante.',
    'Dose cumulée de corticoïde tracée : 3 infiltrations par an au maximum sur cette articulation, espacées d\'au moins 3 mois. Si un bloc est associé dans la même séance, additionner.',
    'Pas d\'infiltration si une chirurgie de l\'épaule est prévue dans les 3 mois, sauf décision partagée avec le chirurgien.',
  ],

  suivi: `- **J0** : EN avant / à 20–30 min, **amplitudes passives** en élévation et rotation externe avant et après (le gain immédiat après hydrodilatation est un bon marqueur), volume injecté et critère d\'arrêt notés, tolérance.
- **J2–J7** : la poussée douloureuse initiale doit être passée. Vérifier que la **kinésithérapie a bien démarré** — c\'est le point de rupture le plus fréquent du parcours.
- **J15–J30** : EN, amplitudes actives et passives, score fonctionnel (Constant simplifié ou DASH), sommeil, consommation d\'antalgiques. Décision : répéter l\'hydrodilatation à 4–6 semaines si le gain s\'essouffle ; ne pas répéter le corticoïde avant 3 mois.
- **3 mois** : bilan de la stratégie. Capsulite : amplitude en rotation externe, retour aux activités. Omarthrose : durée de l\'effet — moins de 6 semaines deux fois de suite ferme la voie de l\'infiltration itérative et ouvre celle du bloc suprascapulaire, de l\'acide hyaluronique ou de l\'avis chirurgical.
- **Toujours coupler à la kinésithérapie.** Le geste ouvre une fenêtre de mobilisation ; c\'est la rééducation qui produit le résultat durable. Écrire l\'ordonnance de kinésithérapie **le jour du geste**, pas plus tard.`,

  evidence: `- **Corticoïde intra-articulaire dans l\'épaule douloureuse** : les revues systématiques historiques (Cochrane, Buchbinder 2003) concluent à un bénéfice **à court terme** sur la douleur et la fonction, avec un effet qui s\'atténue au-delà de quelques semaines. Preuve **modérée à forte à court terme, faible au-delà de 12 semaines**.
- **Comparaison au bloc suprascapulaire** : dans la méta-analyse de Chang 2016 (Arch Phys Med Rehabil, 12 ECR), l\'infiltration intra-articulaire de corticoïde et le bloc suprascapulaire sont **équivalents** sur la douleur et la fonction. C\'est une donnée importante en pratique : le choix entre les deux devient un choix de **sécurité** (diabète, corticothérapies répétées), pas d\'efficacité.
- **Hydrodilatation dans la capsulite** : la revue Cochrane sur la distension arthrographique (Buchbinder 2008) conclut à un bénéfice sur la douleur, la mobilité et la fonction à court terme, avec des preuves de qualité limitée. Les revues systématiques et méta-analyses plus récentes (dont Catapano 2018 et Saltychev 2018) confirment un bénéfice à court terme, mais **sans supériorité franche et durable** sur l\'infiltration de corticoïde seule à moyen terme. Preuve **modérée à court terme, incertaine au-delà de 3–6 mois**.
- **Précision de l\'échoguidage** : les travaux comparant l\'injection gléno-humérale échoguidée à l\'injection à l\'aveugle et à la radioscopie (dont Rutten 2009 et Patel 2012) montrent une précision de placement intra-articulaire nettement supérieure à l\'aveugle et comparable à la radioscopie. Preuve **solide sur la précision**, ce qui est un critère technique et non un critère clinique — l\'échoguidage n\'a pas démontré partout qu\'il améliorait les résultats.
- **Acide hyaluronique à l\'épaule** : données plus rares et moins convaincantes qu\'au genou. Preuve **faible** ; place réelle chez le diabétique ou après échec du corticoïde, en information loyale sur le niveau de preuve et sur la prise en charge.
- **PRP à la gléno-humérale** : données **très limitées**, pas de recommandation. À ne pas proposer comme un standard.
- **Chondrotoxicité des anesthésiques locaux** : démontrée in vitro sur chondrocytes humains et animaux (Chu 2006, Piper et Kim 2008), dose- et durée-dépendante, la bupivacaïne étant plus toxique que la ropivacaïne. La transposition clinique n\'est pas quantifiée, mais elle suffit à proscrire les usages prolongés ou répétés. Preuve **expérimentale solide, extrapolation clinique prudente**.
- **Trou de la littérature** : il n\'existe pas de comparaison directe convaincante entre hydrodilatation, bloc suprascapulaire et mobilisation sous anesthésie générale dans la capsulite rebelle. La séquence proposée dans cette fiche est un raisonnement, pas une recommandation.`,

  references: [
    { auteurs: 'Buchbinder R, Green S, Youd JM', titre: 'Corticosteroid injections for shoulder pain', revue: 'Cochrane Database Syst Rev', annee: '2003;(1):CD004016', doi: '10.1002/14651858.CD004016', type: 'revue systématique', verif: true },
    { auteurs: 'Buchbinder R, Green S, Youd JM, Johnston RV, Cumpston M', titre: 'Arthrographic distension for adhesive capsulitis (frozen shoulder)', revue: 'Cochrane Database Syst Rev', annee: '2008;(1):CD007005', doi: '10.1002/14651858.CD007005', type: 'revue systématique', verif: true },
    { auteurs: 'Catapano M, Mittal N, Adamich J, et al.', titre: 'Hydrodilatation with corticosteroid for the treatment of adhesive capsulitis: a systematic review', revue: 'PM R', annee: '2018;10(6):623-35', doi: '10.1016/j.pmrj.2017.10.013', type: 'revue systématique', verif: true },
    { auteurs: 'Saltychev M, Laimi K, Virolainen P, Fredericson M', titre: 'Effectiveness of hydrodilatation in adhesive capsulitis of shoulder: a systematic review and meta-analysis', revue: 'Scand J Surg', annee: '2018;107(4):285-93', doi: '10.1177/1457496918772367', type: 'méta-analyse', verif: true },
    { auteurs: 'Rutten MJ, Collins JM, Maresch BJ, et al.', titre: 'Glenohumeral joint injection: a comparative study of ultrasound and fluoroscopically guided techniques before MR arthrography', revue: 'Eur Radiol', annee: '2009;19:722-30', pmid: '18958474', type: 'comparatif technique', verif: true },
    { auteurs: 'Patel DN, Nayyar S, Hasan S, Khatib O, Sidash S, Jazrawi LM', titre: 'Comparison of ultrasound-guided versus blind glenohumeral injections: a cadaveric study', revue: 'J Shoulder Elbow Surg', annee: '2012;21:1664-8', url: 'https://www.sciencedirect.com/science/article/abs/pii/S1058274611006033', type: 'cadavre / précision', verif: true },
    { auteurs: 'Chu CR, Izzo NJ, Papas NE, Fu FH', titre: 'In vitro exposure to 0.5% bupivacaine is cytotoxic to bovine articular chondrocytes', revue: 'Arthroscopy', annee: '2006;22(7):693-9', doi: '10.1016/j.arthro.2006.05.006', type: 'expérimental', verif: true },
    { auteurs: 'Piper SL, Kim HT', titre: 'Comparison of ropivacaine and bupivacaine toxicity in human articular chondrocytes', revue: 'J Bone Joint Surg Am', annee: '2008;90(5):986-91', type: 'expérimental', verif: true },
    { auteurs: 'Chang KV, Hung CY, Wu WT, Han DS, Yang RS, Lin CP', titre: 'Comparison of the effectiveness of suprascapular nerve block with physical therapy, placebo, and intra-articular injection in management of chronic shoulder pain: a meta-analysis of randomized controlled trials', revue: 'Arch Phys Med Rehabil', annee: '2016;97(8):1366-80', doi: '10.1016/j.apmr.2015.11.009', type: 'méta-analyse', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
  ],
  videos: [
    { titre: 'Ultrasound guided shoulder (glenohumeral) joint injection (posterior approach)', source: 'YouTube', url: 'https://www.youtube.com/watch?v=ShY36L9Nr1M&pp=0gcJCdgAo7VqN5tD', note: 'Abord postérieur échoguidé (Murat Karkucak MD).' },
    { titre: 'Ultrasound-Guided Glenohumeral Joint Injection Using the Posterior Approach', source: 'Am J Phys Med Rehabil (PMC)', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4640052/', note: 'Article court avec vidéo associée (AJPMR 2015).' },
  ],

  scenes: [
    {
      id: 'gh-repere', section: 'sonoanatomie', titre: 'Voie postérieure — repérage sous l\'épine de la scapula',
      legende: 'Sonde transversale 1–2 cm sous l\'épine, dans l\'axe de l\'infra-épineux. De la superficie à la profondeur : deltoïde postérieur, infra-épineux, capsule postérieure. En profondeur, la convexité régulière de la tête humérale coiffée de son cartilage, et en dedans la glène surmontée du labrum postérieur, triangle hyperéchogène. Le récessus entre labrum et cartilage huméral est la cible ; le labrum est la butée médiale.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial (glène)', right: 'Latéral (tête humérale)' }).probeInfo({ plan: 'Transversale, sous l\'épine de la scapula', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 114 L0 118 Z', label: 'Deltoïde postérieur', at: [116, 98] });
        S.fascia({ points: [[0, 118], [640, 114]], width: 1.5 });
        S.muscle({ path: 'M0 122 L640 118 L640 186 Q550 182 470 188 Q380 212 300 246 Q240 246 0 236 Z', label: 'Infra-épineux', at: [122, 172], opacity: 0.5 });
        S.fascia({ points: [[236, 236], [262, 248], [310, 242], [380, 212], [470, 192], [560, 188], [640, 198]], width: 2, label: 'Capsule postérieure', at: [452, 164], small: true, lead: [452, 194] });
        S.bone({ path: 'M-20 250 L258 250', label: 'Glène', at: [104, 300] });
        S.bone({ path: 'M256 268 Q470 176 660 228', label: 'Tête humérale', at: [486, 260] });
        S.cartilage({ path: 'M258 258 Q470 168 660 218 L660 228 Q470 176 256 268 Z' });
        S.ligament({ path: 'M248 232 L248 260 L292 250 Z', label: 'Labrum postérieur', at: [190, 300], anchor: 'start', small: true, lead: [262, 250] });
        S.label({ x: 400, y: 290, text: 'Récessus postérieur — cible', cls: 'lbl-target', small: true, lead: [312, 254] });
      },
    },
    {
      id: 'gh-aiguille', section: 'technique', titre: 'Infiltration intra-articulaire — aiguille dans le plan, de latéral en médial',
      legende: 'L\'aiguille suit la convexité de la tête humérale comme un rail, franchit la capsule postérieure (ressaut net) et s\'arrête dans le récessus, entre cartilage huméral et labrum. Le labrum est la butée médiale absolue : au-delà se trouvent l\'échancrure spinoglénoïdienne, le nerf et l\'artère suprascapulaires. Le critère de réussite est le décollement de la capsule par le premier demi-millilitre.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial (glène)', right: 'Latéral (tête humérale)' }).probeInfo({ plan: 'Transversale postérieure', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 114 L0 118 Z', label: 'Deltoïde', at: [92, 98] });
        S.fascia({ points: [[0, 118], [640, 114]], width: 1.5 });
        S.muscle({ path: 'M0 122 L640 118 L640 186 Q550 182 470 188 Q380 212 300 246 Q240 246 0 236 Z', label: 'Infra-épineux', at: [116, 176], opacity: 0.5 });
        S.fascia({ points: [[236, 236], [262, 248], [310, 242], [380, 212], [470, 192], [560, 188], [640, 198]], width: 2 });
        S.bone({ path: 'M-20 250 L258 250', label: 'Glène', at: [96, 302] });
        S.bone({ path: 'M256 268 Q470 176 660 228', label: 'Tête humérale', at: [500, 266] });
        S.cartilage({ path: 'M258 258 Q470 168 660 218 L660 228 Q470 176 256 268 Z' });
        S.ligament({ path: 'M248 232 L248 260 L292 250 Z', label: 'Labrum — butée médiale', at: [150, 300], anchor: 'start', small: true, lead: [260, 250] });
        S.target({ x: 308, y: 252, r: 14 });
        S.needle({ from: [636, 116], to: [306, 254], label: '21–22 G, 30–45°, de latéral en médial' });
        S.spread({ x: 348, y: 238, rx: 56, ry: 12, label: '2–5 mL' });
      },
    },
    {
      id: 'gh-hydrodilatation', section: 'technique', titre: 'Hydrodilatation capsulaire — distension du récessus postérieur',
      legende: 'Même abord, même cible. Après confirmation intra-articulaire, on injecte l\'anesthésique local et le corticoïde, puis le sérum physiologique par bolus de 5 mL jusqu\'à 20–40 mL. Le récessus postérieur se distend à l\'écran et refoule la capsule et l\'infra-épineux vers la superficie : c\'est le contrôle en temps réel du geste. Trois critères d\'arrêt, aucun ne se force : douleur du patient, résistance franche au piston, ou rupture capsulaire (chute brutale de résistance et fuite de l\'injectat).',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial (glène)', right: 'Latéral (tête humérale)' }).probeInfo({ plan: 'Transversale postérieure', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 114 L0 118 Z', label: 'Deltoïde', at: [92, 98] });
        S.fascia({ points: [[0, 118], [640, 114]], width: 1.5 });
        S.muscle({ path: 'M0 122 L640 118 L640 136 Q550 128 470 130 Q380 150 300 224 Q240 238 0 236 Z', label: 'Infra-épineux refoulé', at: [132, 182], opacity: 0.5 });
        S.fluid({ path: 'M246 248 L302 236 Q380 158 470 138 Q560 142 656 154 L656 214 Q560 204 470 208 Q380 230 304 258 Z' });
        S.fascia({ points: [[238, 244], [302, 234], [380, 158], [470, 138], [560, 142], [656, 152]], width: 2.2, label: 'Capsule distendue', at: [368, 118], small: true, lead: [368, 158] });
        S.bone({ path: 'M-20 250 L258 250', label: 'Glène', at: [96, 302] });
        S.bone({ path: 'M256 268 Q470 176 660 228', label: 'Tête humérale', at: [504, 272] });
        S.cartilage({ path: 'M258 258 Q470 168 660 218 L660 228 Q470 176 256 268 Z' });
        S.ligament({ path: 'M248 232 L248 260 L292 250 Z' });
        S.target({ x: 316, y: 246, r: 14 });
        S.needle({ from: [636, 106], to: [318, 244], label: 'Aiguille + robinet 3 voies' });
        S.spreadPath({ path: 'M246 248 L302 236 Q380 158 470 138 Q560 142 656 154 L656 214 Q560 204 470 208 Q380 230 304 258 Z', at: [456, 180], label: '20–40 mL — distension capsulaire' });
      },
    },
  ],

  checklist: [
    'Asepsie chirurgicale (geste intra-articulaire) : gants stériles, housse de sonde, gel stérile',
    'Arthrite septique éliminée ; tout épanchement ponctionné et, au moindre doute, analysé AVANT toute injection de corticoïde',
    'Pas de chirurgie de l\'épaule programmée dans les 3 mois (sinon décision partagée avec le chirurgien)',
    'Diabétique : alternative du bloc suprascapulaire discutée ; surveillance glycémique 48–72 h organisée',
    'Butée médiale identifiée à l\'écran (labrum postérieur) avant la ponction ; Doppler en dedans',
    'Corticoïde injecté AVANT le sérum en cas d\'hydrodilatation',
    'Volume injecté et critère d\'arrêt (douleur / résistance / rupture) notés dans le compte rendu',
    'Ordonnance de kinésithérapie remise le jour même, séance dans les 24–48 h',
    'Patient prévenu de la poussée douloureuse des 24–48 h et de la durée attendue de l\'effet',
    'Dose cumulée de corticoïde de l\'année tracée (≤ 3 infiltrations, ≥ 3 mois d\'intervalle)',
  ],
});
