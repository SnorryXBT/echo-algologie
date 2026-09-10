/* Fiche : ponction-lavage-aspiration (barbotage) échoguidée des calcifications de la coiffe. */
ECHO.register({
  id: 'calcifications-coiffe-barbotage',
  titre: 'Calcifications de la coiffe — ponction-lavage (barbotage) échoguidé',
  titreCourt: 'Barbotage de calcification',
  en: 'Ultrasound-guided percutaneous irrigation of calcific tendinopathy (US-PICT) — needling, lavage and aspiration of rotator cuff calcific deposits',
  region: 'membre-sup',
  types: ['interventionnel'],
  niveau: 2,
  grade: 'Modérée à bonne — plusieurs ECR et revues systématiques favorables, hétérogénéité technique importante',
  motsCles: ['tendinopathie calcifiante', 'barbotage', 'US-PICT', 'needling', 'lavage', 'calcification', 'supra-épineux', 'Molé', 'Gärtner', 'ondes de choc', 'épaule'],
  maj: '2026-09',
  resume: 'Le barbotage est le geste interventionnel le plus rentable de l\'épaule : une calcification symptomatique de la coiffe, une aiguille de 18–20 G, un lavage au sérum ou à la lidocaïne tiède, et l\'on retire en une séance ce que des mois de rééducation ne feront pas bouger. Trois choses le font réussir ou échouer. D\'abord la **sélection** : calcification dense, bien limitée, avec cône d\'ombre (types A et B de Molé, I et II de Gärtner), symptomatique et concordante — pas une calcification dystrophique d\'enthèse ni une image de découverte fortuite. Ensuite la **patience technique** : on fragmente avant de laver, on lave par cycles, et le retour lacté est le signal qu\'on est dedans. Enfin la **prévention de la bursite réactionnelle** : une infiltration sous-acromiale de corticoïde en fin de geste, systématique, et un patient prévenu que les 24 à 72 heures suivantes peuvent être douloureuses. Sans ces trois points, le geste marche quand même, mais le patient ne revient pas.',

  flash: {
    position: 'lateral', positionNote: 'décubitus latéral, côté à traiter vers le haut, bras en légère rotation interne ; position assise possible (moins stable, risque vagal, mais lavage aidé par la gravité)',
    sonde: 'lineaire', sondeNote: '6–15 MHz, profondeur 3–4 cm, focale sur la calcification ; gain modéré pour garder l\'arc calcique franchement hyperéchogène',
    approche: 'in-plane', approcheNote: 'axe long ou axe court du supra-épineux, aiguille dans le plan de latéral en médial ; technique à une ou deux aiguilles',
    aiguille: '18–20 G, 40–50 mm (16 G si calcification très dure) ; deux aiguilles 18 G pour la technique à double voie',
    cible: 'Cœur de la calcification — critère de fin : retour lacté qui s\'éclaircit puis se tarit, effondrement de l\'arc calcique et réapparition du cône d\'ombre atténué',
    injectat: 'Lavage : sérum physiologique ou lidocaïne 1 % **tiédis à 37 °C**, 20–60 mL par cycles ; puis corticoïde sous-acromial en fin de geste',
    duree: '20–30 min',
  },

  indications: [
    'Tendinopathie calcifiante symptomatique de la coiffe (supra-épineux surtout, puis infra-épineux, rarement subscapulaire) après échec des mesures conservatrices : douleur mécanique et nocturne, conflit, limitation fonctionnelle.',
    'Calcification **dense, bien limitée, avec cône d\'ombre** — types **A et B de Molé**, **I et II de Gärtner** : ce sont les meilleures candidates, celles qui persistent et qui ne se résorberont pas seules.',
    'Calcification de taille suffisante, en pratique **≥ 5 mm** : au-dessous, le rapport bénéfice / inconfort devient discutable.',
    'Crise hyperalgique de résorption : le geste peut être fait, mais la calcification est alors « crémeuse » et se draine très facilement — dans ce contexte, une simple ponction-décompression suivie d\'une infiltration sous-acromiale suffit souvent, et la question du timing se discute (voir Preuve).',
    'Échec ou refus des ondes de choc extracorporelles, ou indisponibilité de celles-ci.',
    'Alternative à l\'arthroscopie chez un patient qui souhaite éviter la chirurgie : le barbotage se répète, ne brûle aucun pont, et une chirurgie reste possible ensuite.',
  ],
  contreIndications: [
    'Absolues : infection cutanée en regard, sepsis, allergie aux produits utilisés, refus, troubles majeurs de l\'hémostase non corrigés.',
    'Calcifications **de type C ou D (Molé)** — hétérogènes, mal limitées, ou dystrophiques d\'enthèse : mauvaise indication. Les types C se résorbent souvent seuls, les types D ne se lavent pas.',
    'Calcification asymptomatique ou discordante (découverte d\'imagerie) : **ne pas traiter une image**.',
    'Rupture transfixiante étendue de la coiffe associée : la calcification n\'est plus le problème principal.',
    'Capsulite rétractile en cours : le geste risque de l\'aggraver ; traiter d\'abord la raideur.',
    'Risque hémorragique : geste **superficiel et compressible**, catégorie **faible risque** des recommandations ASRA-ESRA 2018 — pas d\'arrêt systématique des antiagrégants ni des anticoagulants ; l\'usage d\'aiguilles de gros calibre justifie néanmoins une compression prolongée et une vigilance chez l\'anticoagulé.',
    'Diabète déséquilibré : à prendre en compte pour le corticoïde de fin de geste, non pour le lavage.',
  ],
  alternatives: 'Rééducation et antalgiques : suffisent dans les formes peu symptomatiques, mais ne font pas disparaître une calcification dense. **Ondes de choc extracorporelles de haute énergie** : alternative non invasive validée, moins efficace que le barbotage dans les comparaisons directes disponibles, mais sans effraction ; plusieurs séances nécessaires. **Infiltration sous-acromiale de corticoïde seule** : soulage la bursite associée sans toucher la calcification — utile en attente, insuffisante en traitement. **Ponction-décompression simple** (needling sans lavage) : geste plus rapide, dont l\'effet tient à la décompression du dépôt. **Arthroscopie** : réservée aux échecs, avec ablation de la calcification ± acromioplastie ; elle n\'est pas supérieure au barbotage en première intention et coûte une anesthésie générale.',

  anatomie: `Le dépôt calcique de la tendinopathie calcifiante est fait d\'**hydroxyapatite** et siège **dans l\'épaisseur du tendon**, à quelques millimètres de son insertion, le plus souvent dans le **supra-épineux** (portion antérieure, à 1–2 cm de la grande tubérosité), puis dans l\'**infra-épineux** et beaucoup plus rarement dans le subscapulaire. Il ne s\'agit pas d\'une enthésopathie dégénérative mais d\'une **métaplasie fibro-cartilagineuse** évoluant en trois phases (pré-calcique, calcique — formation puis repos puis résorption —, post-calcique), dont la phase de **résorption** est la plus douloureuse : le dépôt se liquéfie, augmente de pression et peut migrer dans la bourse sous-acromio-deltoïdienne.

Au-dessus du tendon, la **bourse sous-acromio-deltoïdienne** — cible obligatoire de la fin du geste. Au-dessous, la tête humérale et son cartilage. En dedans, l\'auvent acromial et son cône d\'ombre.

### Ce qui compte pour le geste
- **Classification de Molé** (arthroscopique et radiologique, française, celle qu\'utilisent les chirurgiens) : **A** dense, homogène, contours nets ; **B** dense, fragmentée ou multilobée, contours nets ; **C** hétérogène, non dense, contours irréguliers ; **D** calcification dystrophique de l\'enthèse. **Classification de Gärtner** (radiologique, allemande) : **I** dense à contours nets, **II** intermédiaire, **III** transparente à contours flous. Les deux disent la même chose : **A/B et I/II sont les indications du barbotage**, C et III se résorbent volontiers seules, D n\'est pas une calcification à laver.
- **Traduction échographique** : type A = **arc hyperéchogène franc avec cône d\'ombre net** ; type B = foyers hyperéchogènes multiples, ombre plus discrète ; type C = plage hyperéchogène **sans ombre**, à limites floues, souvent « pâteuse ». Une calcification sans ombre se draine très facilement — parfois trop, l\'aiguille traverse sans rien ramener.
- La calcification est **superficielle** : 1,5 à 3 cm sous la peau. Une aiguille de 40–50 mm suffit.
- La **bourse** est au-dessus : elle sert de voie d\'accès (on la traverse), de site d\'anesthésie initiale et de cible du corticoïde final. C\'est aussi elle qui fait la douleur post-geste si l\'on y laisse du matériel calcique sans corticoïde.
- Le **cône d\'ombre** est utile et gênant à la fois : il signe la densité du dépôt, mais il masque la pointe de l\'aiguille dès qu\'elle passe derrière la calcification. On travaille donc **par le bord** du dépôt et non par son centre géométrique.
- Rapports à respecter : ne pas descendre jusqu\'au **cartilage** et à la **corticale humérale** (douleur vive, sans intérêt), ne pas s\'égarer en dedans sous l\'**acromion** (aiguille invisible dans l\'ombre).`,

  installation: {
    patient: `**Décubitus latéral**, côté à traiter vers le haut, coussin entre les genoux, bras reposant le long du corps en **légère rotation interne** (main sur la hanche opposée ou sur l\'abdomen) : cette position dégage la portion antérieure du supra-épineux de sous l\'acromion, stabilise l\'épaule et supprime le risque vagal — c\'est un geste long, ce n\'est pas un détail.

La **position assise**, main sur la fesse (Crass modifiée), reste possible et a l\'avantage de laisser la gravité aider le drainage du lavage vers l\'aiguille déclive. Elle expose au malaise vagal sur un geste de 20 à 30 minutes : prévoir un plan B allongé.

Voie veineuse non obligatoire, mais patient à jeun non nécessaire ; prévenir de la durée et de l\'inconfort. Un antalgique de palier 1 une heure avant est raisonnable.`,
    operateur: `Opérateur du côté à traiter, écran en face. **Table ou support pour poser l\'avant-bras** : le geste dure, et une main de sonde qui tremble à la vingtième minute ruine le lavage.

Matériel prêt avant de commencer : deux seringues de 20 mL de sérum ou de lidocaïne 1 % **tiédis à 37 °C** (bain-marie ou étuve — la chaleur fluidifie le dépôt et améliore le rendement), une seringue de 10 mL de lidocaïne 1 % pour l\'anesthésie bursale et du trajet, la seringue de corticoïde de fin de geste, une cupule pour recueillir le retour, et les aiguilles (18–20 G).

Ponction **dans le plan, de latéral en médial**, sur l\'axe long ou l\'axe court du supra-épineux selon la géométrie du dépôt. Choisir l\'incidence où la calcification est la plus large et la plus superficielle.`,
    sonde: `- Linéaire 6–15 MHz, preset MSK, **profondeur 3–4 cm**, focale sur la calcification.
- **Gain modéré** : un gain trop élevé « blanchit » le tendon et fait disparaître le contraste calcification / tendon ; il fait aussi perdre le cône d\'ombre, qui est le critère de typage.
- Doppler couleur : hypervascularisation péri-lésionnelle fréquente en phase douloureuse ; sans conséquence sur le geste.
- Repérer et **mesurer** la calcification dans les deux plans avant de commencer : c\'est la mesure initiale qui permettra de juger le résultat immédiat et le contrôle à 3 mois.
- Housse de sonde stérile plutôt que gel stérile : le geste est long et la sonde bouge beaucoup.`,
  },

  reperage: [
    { titre: 'Localiser la calcification', texte: 'Balayage complet de la coiffe en **axe long et axe court** (position de Crass modifiée). La calcification apparaît comme une structure **hyperéchogène** dans l\'épaisseur du tendon, à 1–2 cm de la grande tubérosité. Mesurer ses deux plus grands diamètres et noter la distance à la peau et à la corticale.' },
    { titre: 'Typer le dépôt', texte: 'Chercher le **cône d\'ombre** : net et franc = dense (A / I), discret ou fragmenté = B / II, absent avec limites floues = C / III. Ce typage décide de l\'indication et de la stratégie (fragmenter d\'abord ou laver d\'emblée).' },
    { titre: 'Choisir l\'incidence de ponction', texte: 'Retenir l\'incidence où la calcification est **la plus large, la plus superficielle et la plus éloignée de l\'ombre acromiale**. Marquer le point d\'entrée au feutre. La règle est de rentrer par le **bord latéral** du dépôt, pas par son centre, pour garder la pointe visible.' },
    { titre: 'Examiner la bourse', texte: 'Repérer la **bourse sous-acromio-deltoïdienne** au-dessus du tendon : elle sera anesthésiée en premier, traversée par l\'aiguille, et infiltrée de corticoïde en fin de geste. Noter un éventuel épanchement bursal préexistant ou une migration calcique intra-bursale.' },
    { titre: 'Vérifier la coiffe et la bourse pour éliminer un autre problème', texte: 'Rupture transfixiante, bursite majeure, arthropathie acromio-claviculaire : si l\'un d\'eux domine le tableau, la calcification n\'est peut-être pas la coupable. Le barbotage traite une calcification symptomatique, pas une épaule douloureuse en général.' },
    { titre: 'Si la calcification est mal visible', texte: 'Baisser le gain, remonter la focale, et repasser en **axe court** : une calcification linéaire en axe long devient souvent une tache franche en axe court. Si elle reste inaccessible (sous l\'acromion, très petite, très profonde), renoncer et proposer les ondes de choc plutôt que de ponctionner à l\'aveugle.' },
  ],

  sonoanatomie: [
    { structure: 'Deltoïde', aspect: 'Muscle superficiel strié', repere: 'Traversé par l\'aiguille' },
    { structure: 'Bourse sous-acromio-deltoïdienne', aspect: 'Lame hypoéchogène < 2 mm entre deux liserés graisseux', repere: 'Anesthésiée en premier, infiltrée de corticoïde en dernier' },
    { structure: 'Tendon du supra-épineux', aspect: 'Bande fibrillaire hyperéchogène convexe, très anisotrope', repere: 'Contient le dépôt, à 1–2 cm de la grande tubérosité' },
    { structure: 'Calcification type A (Molé) / I (Gärtner)', aspect: 'Arc hyperéchogène franc avec **cône d\'ombre net**', repere: 'Meilleure indication ; souvent dure, à fragmenter avant de laver' },
    { structure: 'Calcification type B / II', aspect: 'Foyers hyperéchogènes multiples ou fragmentés, ombre partielle', repere: 'Bonne indication ; se lave bien' },
    { structure: 'Calcification type C / III', aspect: 'Plage hyperéchogène **sans ombre**, limites floues, aspect pâteux', repere: 'Phase de résorption ; se draine seule, indication discutable' },
    { structure: 'Grande tubérosité', aspect: 'Ligne corticale hyperéchogène avec ombre', repere: 'Limite profonde à ne pas atteindre avec l\'aiguille' },
    { structure: 'Acromion', aspect: 'Corticale superficielle avec ombre acoustique franche', repere: 'Zone aveugle : ne pas y engager l\'aiguille' },
  ],

  technique: [
    { titre: 'Préparation et anesthésie', texte: 'Checklist (fin de fiche). Asepsie large, housse de sonde stérile, champs. **Anesthésie cutanée et du trajet** : 3–5 mL de lidocaïne 1 %. Puis **anesthésie de la bourse sous-acromio-deltoïdienne** : 5–10 mL de lidocaïne 1 % sous contrôle échographique (voir la fiche `sous-acromiale`) — c\'est elle qui rend le geste supportable, car la douleur du barbotage est largement bursale. Attendre 3 à 5 minutes.' },
    { titre: 'Ponction du dépôt', texte: 'Aiguille **18–20 G**, dans le plan, de latéral en médial, abordant la calcification **par son bord** pour rester visible. Le franchissement de la coque donne un ressaut caractéristique et, souvent, une douleur brève à prévenir. Vérifier la position de la pointe **dans** le dépôt avant toute injection : c\'est le point qui conditionne tout le reste.' },
    { titre: 'Fragmentation (needling) si nécessaire', texte: 'Sur une calcification dure (type A), commencer par **fragmenter** : 10 à 20 passages de va-et-vient à travers le dépôt, en éventail, sans ressortir du tendon. On sent la résistance céder. Cette étape seule (ponction-décompression) a déjà un effet thérapeutique ; elle rend le lavage possible sur les dépôts qui ne se laveraient pas.' },
    { titre: 'Lavage — technique à une aiguille', texte: 'Seringue de 10–20 mL de sérum ou de lidocaïne 1 % **tiède**, montée directement sur l\'aiguille. Injecter par **à-coups brefs** puis relâcher : la pression intra-lésionnelle refoule spontanément le liquide et le matériel calcique dans la seringue — c\'est le **retour lacté**. Répéter les cycles injection / reflux passif, en changeant l\'orientation de la pointe, et vider la seringue dans une cupule dès qu\'elle se trouble. Ne jamais aspirer violemment : le vide colmate l\'aiguille.' },
    { titre: 'Lavage — technique à deux aiguilles', texte: 'Deux aiguilles **18 G** placées dans le dépôt, l\'une proximale et l\'autre distale, dans le plan. On injecte par l\'aiguille **haute**, le liquide et les cristaux ressortent par l\'aiguille **basse**, aidés par la gravité, sans jamais aspirer. Lavage continu, plus efficace sur les gros dépôts et sur les types A, au prix d\'une deuxième effraction. C\'est la technique décrite dans les séries italiennes de référence, avec sérum tiédi.' },
    { titre: 'Critère de fin', texte: 'Trois signes convergents : le **retour s\'éclaircit** puis se tarit ; l\'**arc calcique s\'effondre** à l\'écran et le cône d\'ombre s\'atténue ; la calcification mesurée en fin de geste a nettement diminué. Ne pas s\'acharner : au-delà de **15–20 minutes de lavage**, le rendement s\'effondre et la bursite réactionnelle augmente. Un dépôt partiellement évacué et décomprimé donne déjà un bon résultat clinique.' },
    { titre: 'Infiltration sous-acromiale de fin de geste', texte: '**Systématique.** Retirer l\'aiguille jusque dans la bourse et y injecter **40 mg de méthylprednisolone (ou 1 mL de bétaméthasone) + 3–5 mL d\'AL**. C\'est la mesure qui prévient — sans l\'abolir — la bursite réactionnelle post-lavage. Vérifier la distension bursale en fuseau avant de retirer.' },
    { titre: 'Après le geste', texte: 'Compression, pansement, surveillance 20–30 min (geste long, risque vagal). **Ordonnance remise d\'avance** : antalgiques de palier 1 ± 2 et AINS courts si non contre-indiqués, glace, écharpe de repos pour 24–48 h. Consignes écrites explicites : *les 24 à 72 heures peuvent être plus douloureuses que la veille du geste, c\'est attendu et cela cède*. Rééducation reprise à J5–J7, pas avant. Numéro à appeler en cas de fièvre ou de douleur croissante au-delà de 72 h.' },
  ],

  injectat: `| Étape | Produits | Volume | Commentaire |
|---|---|---|---|
| Anesthésie cutanée et trajet | Lidocaïne 1 % | 3–5 mL | Papule puis trajet jusqu\'au deltoïde |
| Anesthésie bursale | Lidocaïne 1 % (± 1 mL d\'AL de longue durée) | 5–10 mL | **Étape clé du confort** : la douleur du barbotage est surtout bursale. Attendre 3–5 min |
| Lavage | Sérum physiologique **ou** lidocaïne 1 %, **tiédis à 37 °C** | 20–60 mL par cycles | Le tiédissement fluidifie le dépôt et améliore le rendement (données radiologiques concordantes). Compter la dose totale de lidocaïne si c\'est elle qu\'on utilise |
| Fin de geste (sous-acromial) | Méthylprednisolone 40 mg **ou** bétaméthasone 1 mL + lidocaïne ou ropivacaïne | 4–6 mL | **Systématique** — prévention de la bursite réactionnelle |

**Attention à la dose cumulée de lidocaïne** si l\'on lave à la lidocaïne 1 % : 60 mL de lidocaïne 1 % = **600 mg**, très au-dessus des 4,5 mg/kg (≈ 315 mg pour 70 kg). Deux solutions : laver au **sérum physiologique** (le plus simple et le plus sûr), ou diluer et plafonner strictement le volume de lidocaïne. C\'est le seul vrai risque toxique de ce geste, et il est entièrement évitable — le rappeler dans le protocole de service.

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée) ; ropivacaïne 3 mg/kg ; bupivacaïne 2–2,5 mg/kg.

**Corticoïde.** Site péri-tendineux non artériel terminal : particulaire licite (méthylprednisolone, bétaméthasone). Pas de triamcinolone hexacétonide (Hexatrione®), réservée à l\'intra-articulaire. Ne **jamais** injecter le corticoïde dans le tendon ni dans la cavité de la calcification : il va dans la bourse.`,

  variantes: [
    { titre: 'Ponction-décompression simple (needling sans lavage)', texte: 'Une aiguille, 10 à 20 perforations du dépôt, sans irrigation, suivies de l\'infiltration sous-acromiale. Plus rapide, moins douloureux, et déjà efficace : une part importante du bénéfice du barbotage vient de la **décompression** du dépôt et de la réaction de résorption qu\'elle déclenche, pas de la quantité de calcium récupérée dans la seringue. C\'est l\'option raisonnable sur les petits dépôts, les dépôts de type C et chez les patients qui tolèrent mal le geste.' },
    { titre: 'Deux aiguilles versus une aiguille', texte: 'La technique à **deux aiguilles** (injection par l\'une, sortie passive par l\'autre) est celle des séries radiologiques italiennes qui ont le plus long recul ; elle lave mieux les gros dépôts durs. La technique à **une aiguille** avec cycles d\'injection et reflux passif est plus simple, suffisante dans la majorité des cas, et c\'est celle à maîtriser en premier. Aucune donnée de bonne qualité n\'établit la supériorité clinique de l\'une sur l\'autre.' },
    { titre: 'Sérum tiède', texte: 'Le tiédissement du liquide de lavage à environ 37 °C améliore le rendement d\'évacuation et, dans les travaux qui l\'ont testé, le résultat à court terme. C\'est une mesure sans coût : prévoir un dispositif de chauffe dans le protocole d\'HDJ plutôt que de l\'improviser.' },
    { titre: 'Séance itérative', texte: 'Une calcification volumineuse peut nécessiter **deux séances** espacées de 4 à 8 semaines. Le dire d\'emblée évite que le patient vive la deuxième comme un échec. Ne pas réintervenir avant contrôle échographique.' },
    { titre: 'Ondes de choc en relais', texte: 'En cas de reliquat calcique symptomatique après barbotage, les ondes de choc de haute énergie sont une suite logique et non redondante. L\'inverse est vrai aussi : un échec des ondes de choc n\'est pas une contre-indication au barbotage, au contraire.' },
    { titre: 'Migration intra-bursale', texte: 'Une calcification qui a migré dans la bourse (crise hyperalgique typique, épaule bloquée) se **ponctionne et se lave directement dans la bourse**, avec un excellent résultat immédiat. C\'est l\'une des rares urgences relatives de l\'algologie de l\'épaule ; ne pas la manquer.' },
  ],

  pearls: [
    'Anesthésier la **bourse** avant tout : c\'est elle qui fait mal pendant le barbotage, pas la calcification.',
    'Tiédir le liquide de lavage : geste gratuit, rendement nettement meilleur.',
    'Aborder la calcification **par son bord** : au centre, la pointe disparaît dans le cône d\'ombre.',
    'Fragmenter d\'abord, laver ensuite, sur les dépôts durs — l\'ordre inverse ne donne rien.',
    'Laisser refluer plutôt qu\'aspirer : le dépôt est sous pression, il se vide tout seul par à-coups.',
    'Mesurer la calcification avant et après : c\'est ce qui permet de juger objectivement et de décider d\'une deuxième séance.',
    'Remettre l\'ordonnance d\'antalgiques **avant** que le patient sorte : la bursite réactionnelle survient la nuit suivante, pas au cabinet.',
    'Un dépôt partiellement évacué mais décomprimé donne un bon résultat : savoir s\'arrêter est une compétence technique.',
  ],
  pieges: [
    'Traiter une calcification **asymptomatique** ou discordante : la meilleure façon de transformer un patient content en patient douloureux.',
    'Choisir un type C ou D : soit elle se résorbait seule, soit elle ne se lavera pas.',
    'Oublier l\'infiltration sous-acromiale de fin de geste : bursite réactionnelle sévère, patient perdu.',
    'Ne pas prévenir de la douleur des 24–72 h : le patient croit à une complication et appelle les urgences.',
    'Laver à la lidocaïne 1 % sans compter : 60 mL = 600 mg, au-delà de la dose toxique. Laver au sérum.',
    'S\'acharner au-delà de 20 minutes : rendement nul, bursite garantie.',
    'Descendre jusqu\'à la corticale humérale : douleur vive et aucun bénéfice.',
    'Travailler assis sur un geste de 30 minutes chez un patient vagal, sans plan B.',
  ],
  complications: [
    '**Bursite réactionnelle post-lavage** : complication la plus fréquente, dans les 24 à 72 h, parfois intense. Prévention : infiltration sous-acromiale systématique en fin de geste, information et ordonnance remises d\'avance. Traitement : glace, antalgiques, AINS courts, repos relatif ; en cas de tableau sévère, réévaluer et discuter une nouvelle infiltration bursale.',
    'Malaise vagal : fréquent sur un geste long ; d\'où le décubitus latéral.',
    'Infection (bursite ou arthrite septique) : rare mais grave, favorisée par la durée du geste et les aiguilles de gros calibre. Asepsie chirurgicale stricte. Toute aggravation fébrile au-delà de 72 h impose écho, ponction et bactériologie.',
    'Capsulite rétractile secondaire : décrite après barbotage, favorisée par l\'immobilisation prolongée et la douleur post-geste. Prévention : reprise de la mobilisation à J5–J7, pas d\'écharpe au-delà de 48 h.',
    'Lésion tendineuse : les aiguilles de 18–20 G traversent le tendon de façon répétée ; le risque de rupture reste théorique mais impose de limiter le nombre de passages et de ne pas fragmenter au-delà du nécessaire.',
    'Toxicité systémique des anesthésiques locaux si le lavage est fait à la lidocaïne sans plafonnement du volume — évitable en lavant au sérum.',
    'Hyperglycémie 24–72 h chez le diabétique (corticoïde de fin de geste).',
    'Échec d\'évacuation : dépôt trop dur ou trop petit ; se voit et s\'annonce, ne se rattrape pas par l\'acharnement.',
  ],
  securite: [
    'Geste **superficiel et compressible**, catégorie **faible risque hémorragique** (ASRA-ESRA 2018) : pas d\'arrêt des antiagrégants ni des anticoagulants — mais compression prolongée du fait du calibre des aiguilles.',
    '**Plafonner la dose d\'anesthésique local** : laver au sérum physiologique par défaut ; si lavage à la lidocaïne, calculer et tracer la dose totale (4,5 mg/kg).',
    'Asepsie chirurgicale : durée du geste et gros calibre = risque septique supérieur à celui d\'une infiltration simple.',
    'Ne pas dépasser 15–20 minutes de lavage effectif.',
    'Aiguille toujours visible : aborder par le bord du dépôt, ne pas travailler dans le cône d\'ombre acromial.',
    'Surveillance post-geste 20–30 minutes, patient allongé, avant la sortie d\'HDJ.',
    'Information et ordonnance de sortie remises et tracées : la bursite réactionnelle est prévisible, donc elle doit être annoncée.',
  ],

  suivi: `- **J0** : mesure de la calcification avant / après, aspect du retour, volume de lavage, dose de corticoïde, durée du geste — tout dans le compte rendu. EN avant et à 30 min.
- **J1–J3** : c\'est la fenêtre de la **bursite réactionnelle**. Un appel de contrôle à J2 en HDJ évite la plupart des consultations non programmées et rassure efficacement.
- **J15–J30** : EN au repos et la nuit, amplitudes, reprise de la rééducation. La douleur doit être inférieure à celle d\'avant le geste ; sinon, réévaluer (bursite persistante, capsulite débutante, diagnostic à revoir).
- **3 mois** : **contrôle échographique** — comparer à la mesure initiale. L\'évolution radiologique est souvent dissociée du résultat clinique : une calcification résiduelle chez un patient asymptomatique ne justifie aucun geste supplémentaire.
- **Quand répéter** : reliquat symptomatique et accessible à 6–8 semaines, avec un premier geste bien toléré → deuxième séance. Ne pas répéter plus de deux fois.
- **Quand escalader** : échec de deux séances, calcification inaccessible, ou rupture de coiffe associée → avis chirurgical. Douleur persistante avec calcification disparue → chercher ailleurs (bursite chronique, capsulite, acromio-claviculaire, cervical).`,

  evidence: `- **Efficacité du barbotage** : plusieurs essais randomisés et revues systématiques concluent à un bénéfice **cliniquement significatif et durable** sur la douleur et la fonction, avec disparition ou réduction du dépôt chez une majorité de patients. L\'essai randomisé de **de Witte (2013, Am J Sports Med)** comparant ponction-lavage échoguidée + corticoïde sous-acromial à corticoïde sous-acromial seul est la référence : supériorité du barbotage à un an sur la douleur, la fonction et la résorption. Confiance : **bonne**.
- **Recul à long terme** : les séries radiologiques italiennes (Serafini, Sconfienza et coll.) rapportent des résultats maintenus à plusieurs années avec la technique **à deux aiguilles**, et un bénéfice du **sérum tiédi** sur le résultat à court terme. Ce sont des séries et des essais de taille modeste, mais cohérents entre eux.
- **Revue systématique (Lanza et coll., 2015)** : le barbotage est efficace, mais la littérature est **très hétérogène** — calibres d\'aiguille, nombre d\'aiguilles, volumes, produits, définition du succès, tout varie. D\'où l\'absence de protocole standard opposable et l\'importance d\'écrire le sien.
- **Barbotage versus ondes de choc** : les comparaisons directes disponibles, dont l\'essai randomisé de **Louwerens (2020, Arthroscopy)**, sont plutôt en faveur du barbotage associé à l\'infiltration sous-acromiale sur les critères fonctionnels et la résorption. Confiance : modérée — un seul essai de bonne taille, populations sélectionnées.
- **Barbotage versus infiltration seule** : supériorité du barbotage établie sur la résorption ; sur la douleur, l\'écart se creuse avec le temps (l\'infiltration seule soulage vite puis s\'épuise).
- **Lavage versus simple needling** : question **non tranchée**. Une part importante du bénéfice semble venir de la décompression et de la réaction inflammatoire de résorption qu\'elle déclenche, pas du volume de calcium récupéré. Aucun essai de bonne qualité ne les sépare clairement. À dire honnêtement : le geste minimal fait probablement l\'essentiel du travail.
- **Timing par rapport à la phase** : question mal étudiée. La logique physiopathologique (traiter le dépôt dense qui ne se résorbera pas, laisser se résoudre la phase de résorption) est cohérente mais repose sur peu de données prospectives. Supposition raisonnée, pas une preuve.
- **Trous assumés** : calibre optimal, volume optimal, intérêt réel de la deuxième aiguille, place du corticoïde intra-bursal (systématique dans la plupart des protocoles mais jamais isolé dans un essai dédié), critères d\'arrêt du lavage.

*Fiche rédigée sans accès à la recherche en ligne : le fond technique et posologique correspond aux protocoles publiés, mais les chiffres sont donnés en fourchettes et les métadonnées des références n\'ont pas pu être revérifiées dans cette session. Les entrées marquées « à vérifier » sont à confirmer avant citation.*`,

  references: [
    { auteurs: 'de Witte PB, Selten JW, Navas A, et al.', titre: 'Calcific tendinitis of the rotator cuff: a randomized controlled trial of ultrasound-guided needling and lavage versus subacromial corticosteroids', revue: 'Am J Sports Med', annee: '2013', type: 'ECR', verif: false, note: 'Essai de référence : supériorité du barbotage sur l\'infiltration seule à un an.' },
    { auteurs: 'Serafini G, Sconfienza LM, Lacelli F, Silvestri E, Aliprandi A, Sardanelli F', titre: 'Rotator cuff calcific tendonitis: short-term and 10-year outcomes after two-needle US-guided percutaneous treatment', revue: 'Radiology', annee: '2009', type: 'étude contrôlée non randomisée', verif: false, note: 'Technique à deux aiguilles, recul à 10 ans.' },
    { auteurs: 'Sconfienza LM, Bandirali M, Serafini G, et al.', titre: 'Rotator cuff calcific tendinitis: does warm saline solution improve the short-term outcome of double-needle US-guided treatment?', revue: 'Radiology', annee: '2012', type: 'ECR', verif: false, note: 'Base du tiédissement du liquide de lavage à 37 °C.' },
    { auteurs: 'Lanza E, Banfi G, Serafini G, et al.', titre: 'Ultrasound-guided percutaneous irrigation in rotator cuff calcific tendinopathy: what is the evidence? A systematic review with proposals for future reporting', revue: 'Eur Radiol', annee: '2015', type: 'revue systématique', verif: false, note: 'Documente l\'hétérogénéité technique majeure de la littérature.' },
    { auteurs: 'Louwerens JKG, Sierevelt IN, Kramer ET, et al.', titre: 'Comparing ultrasound-guided needling combined with a subacromial corticosteroid injection versus high-energy extracorporeal shockwave therapy for calcific tendinitis of the rotator cuff: a randomized controlled trial', revue: 'Arthroscopy', annee: '2020', type: 'ECR', verif: false, note: 'Comparaison directe barbotage vs ondes de choc.' },
    { auteurs: 'Molé D, Kempf JF, Gleyze P, Rio B, Bonnomet F, Walch G', titre: 'Résultats du traitement arthroscopique des tendinopathies non rompues de la coiffe des rotateurs — 2. Calcifications de la coiffe des rotateurs', revue: 'Rev Chir Orthop Reparatrice Appar Mot', annee: '1993', type: 'série', verif: false, note: 'Origine de la classification A / B / C / D utilisée en France.' },
    { auteurs: 'Gärtner J, Heyer A', titre: 'Calcific tendinitis of the shoulder', revue: 'Der Orthopäde', annee: '1995', type: 'revue', verif: false, note: 'Classification radiologique I / II / III.' },
    { auteurs: 'Uhthoff HK, Loehr JW', titre: 'Calcific tendinopathy of the rotator cuff: pathogenesis, diagnosis, and management', revue: 'J Am Acad Orthop Surg', annee: '1997', type: 'revue', verif: false, note: 'Description des phases (formation, repos, résorption) qui fonde le raisonnement sur le timing.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Classe de risque hémorragique.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'calc-sono', section: 'sonoanatomie', titre: 'Calcification du supra-épineux — typage échographique',
      legende: 'Axe long du supra-épineux. Le type A/B (à droite ici) est un arc hyperéchogène franc suivi d\'un cône d\'ombre net : c\'est la bonne indication du barbotage, mais l\'ombre masque la pointe de l\'aiguille, d\'où l\'abord par le bord du dépôt. Le type C (à gauche) est une plage hyperéchogène sans ombre, à limites floues, en phase de résorption : elle se draine seule et se lave trop facilement.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Axe long du supra-épineux', type: 'linéaire 6–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 158 Q320 176 0 160 Z', label: 'Deltoïde', at: [86, 108], opacity: 0.5 });
        S.bone({ path: 'M-20 148 L96 154 L168 172', label: 'Acromion', at: [58, 132], small: true });
        S.fascia({ points: [[172, 182], [360, 190], [600, 202]], width: 2 });
        S.fluid({ path: 'M174 185 L600 205 L600 214 L174 194 Z', label: 'Bourse SAD', lx: 596, ly: 168, anchor: 'end', lead: [560, 196], small: true });
        S.fascia({ points: [[174, 197], [360, 205], [600, 217]], width: 2 });
        S.tendon({ path: 'M176 199 L604 221 L596 262 L558 282 Q470 246 340 242 Q250 250 178 272 Z', label: 'Supra-épineux', at: [474, 232] });
        S.bone({ path: 'M160 288 Q250 264 340 256 Q452 254 542 270 L590 302 L660 336' });
        S.region({ x: 214, y: 216, rx: 26, ry: 10, fill: '#e2e8ee', opacity: 0.9, label: 'Type C — sans ombre', lx: 196, ly: 148, anchor: 'middle', lead: [210, 206], small: true });
        S.bone({ path: 'M320 220 Q356 202 392 220', width: 6, label: 'Calcification type A/B\narc + cône d\'ombre', lx: 386, ly: 126, anchor: 'middle', lead: [370, 206] });
        S.label({ x: 356, y: 368, text: 'Cône d\'ombre acoustique', cls: 'lbl-bone', small: true });
      },
    },
    {
      id: 'calc-lavage', section: 'technique', titre: 'Lavage à deux aiguilles — retour lacté',
      legende: 'Deux aiguilles 18 G placées dans le dépôt, dans le plan. On injecte du sérum tiédi par l\'aiguille haute, le liquide et les cristaux ressortent passivement par l\'aiguille basse : jamais d\'aspiration au vide, qui colmate. Critère de fin : le retour lacté s\'éclaircit puis se tarit, l\'arc calcique s\'effondre et le cône d\'ombre s\'atténue.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Axe long du supra-épineux', type: 'in-plane, deux aiguilles 18 G' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 158 Q320 176 0 160 Z', label: 'Deltoïde', at: [86, 108], opacity: 0.5 });
        S.bone({ path: 'M-20 148 L96 154 L168 172', label: 'Acromion', at: [58, 132], small: true });
        S.fascia({ points: [[172, 182], [360, 190], [600, 202]], width: 2 });
        S.fluid({ path: 'M174 185 L600 205 L600 214 L174 194 Z' });
        S.fascia({ points: [[174, 197], [360, 205], [600, 217]], width: 2 });
        S.tendon({ path: 'M176 199 L604 221 L596 262 L558 282 Q470 246 340 242 Q250 250 178 272 Z', label: 'Supra-épineux', at: [212, 250] });
        S.bone({ path: 'M160 288 Q250 264 340 256 Q452 254 542 270 L590 302 L660 336' });
        S.bone({ path: 'M262 222 Q306 200 350 222', width: 6, label: 'Dépôt calcique', lx: 200, ly: 208, anchor: 'end', small: true, lead: [280, 212] });
        S.target({ x: 306, y: 220, r: 19 });
        S.needle({ from: [634, 82], to: [326, 214], label: 'Aiguille haute — injection' });
        S.needle({ from: [630, 136], to: [312, 230], label: 'Aiguille basse — sortie passive' });
        S.spread({ x: 302, y: 236, rx: 30, ry: 9, label: 'Sérum tiède 37 °C' });
        S.arrow({ from: [474, 208], to: [560, 182], text: 'Retour lacté' });
      },
    },
    {
      id: 'calc-fin', section: 'technique', titre: 'Fragmentation puis corticoïde sous-acromial de fin de geste',
      legende: 'Sur un dépôt dur, on fragmente d\'abord : 10 à 20 passages en éventail à travers la calcification, sans ressortir du tendon, jusqu\'à sentir la résistance céder. Le geste se termine toujours par une infiltration de corticoïde dans la bourse sous-acromio-deltoïdienne : c\'est ce qui limite la bursite réactionnelle des 24 à 72 heures.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Axe long du supra-épineux', type: 'needling puis bourse' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 158 Q320 176 0 160 Z', label: 'Deltoïde', at: [86, 108], opacity: 0.5 });
        S.bone({ path: 'M-20 148 L96 154 L168 172', label: 'Acromion', at: [58, 132], small: true });
        S.fascia({ points: [[172, 182], [360, 190], [600, 202]], width: 2 });
        S.fluid({ path: 'M174 185 L600 205 L600 214 L174 194 Z' });
        S.fascia({ points: [[174, 197], [360, 205], [600, 217]], width: 2 });
        S.tendon({ path: 'M176 199 L604 221 L596 262 L558 282 Q470 246 340 242 Q250 250 178 272 Z', label: 'Supra-épineux', at: [462, 236] });
        S.bone({ path: 'M160 288 Q250 264 340 256 Q452 254 542 270 L590 302 L660 336' });
        S.bone({ path: 'M262 234 Q306 212 350 234', width: 6, label: 'Dépôt calcique', lx: 204, ly: 222, anchor: 'end', small: true, lead: [278, 226] });
        S.needle({ from: [634, 96], to: [306, 226], label: '18–20 G — 10 à 20 passages en éventail', dur: 1.0, delay: 0.2 });
        S.needle({ from: [634, 96], to: [288, 238], dur: 0.7, delay: 1.3 });
        S.needle({ from: [634, 96], to: [324, 242], dur: 0.7, delay: 2.0 });
        S.spreadPath({ path: 'M188 184 Q400 168 596 198 Q400 216 188 200 Z', at: [312, 152], label: 'Corticoïde sous-acromial — 4–6 mL', delay: 2.8, dur: 1.0 });
      },
    },
  ],

  checklist: [
    'Calcification symptomatique, concordante, typée A/B (Molé) ou I/II (Gärtner), mesurée dans deux plans avant le geste',
    'Liquide de lavage préparé et **tiédi à 37 °C** ; sérum physiologique par défaut (dose cumulée de lidocaïne sinon calculée et tracée)',
    'Bourse sous-acromio-deltoïdienne anesthésiée en premier, délai de 3–5 min respecté',
    'Abord par le bord du dépôt, aiguille visible en permanence hors du cône d\'ombre',
    'Lavage effectif limité à 15–20 min ; mesure de contrôle de la calcification en fin de geste',
    'Infiltration sous-acromiale de corticoïde faite en fin de geste (systématique)',
    'Ordonnance d\'antalgiques et consignes écrites remises : douleur attendue à 24–72 h, mobilisation à J5–J7, numéro à appeler si fièvre',
    'Surveillance 20–30 min en décubitus avant la sortie',
  ],
});
