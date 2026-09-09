/* Fiche : syndrome douloureux du grand trochanter — infiltration péri-tendineuse / bourse sous-glutéale, ténotomie à l'aiguille. */
ECHO.register({
  id: 'bourse-trochanterienne-gtps',
  titre: 'Syndrome douloureux du grand trochanter — bourse sous-glutéale et tendons fessiers',
  titreCourt: 'GTPS / bourse trochantérienne',
  en: 'Greater trochanteric pain syndrome (GTPS) — ultrasound-guided peritendinous / subgluteal bursa injection, gluteal tendinopathy, needle tenotomy',
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée (ECR) — corticoïde efficace à court terme seulement, inférieur à l’exercice à un an',
  maj: '2026-09',
  motsCles: ['grand trochanter', 'GTPS', 'bursite trochantérienne', 'tendinopathie fessière', 'moyen fessier', 'petit fessier', 'bourse sous-glutéale', 'ressaut de hanche', 'bandelette ilio-tibiale', 'PRF', 'PRP', 'ténotomie'],
  resume: 'Le syndrome douloureux du grand trochanter a remplacé la « bursite trochantérienne » parce que l’imagerie a montré que la lésion dominante est une **tendinopathie d’insertion des moyen et petit fessiers**, la bourse n’étant enflammée que secondairement et dans une minorité de cas. Cela change tout : la cible du geste est l’espace péri-tendineux et la bourse sous-glutéale, jamais le tendon lui-même, et l’infiltration de corticoïde n’est qu’une fenêtre de quelques semaines ouverte devant un programme de rééducation qui, lui, tient à un an. C’est le geste le plus demandé du membre inférieur en HDJ douleur, et celui où l’on rend le plus service en refusant de le répéter indéfiniment. L’échographie sert autant au diagnostic — épanchement de bourse, rupture partielle, calcifications, trochanter dénudé — qu’au guidage.',

  flash: {
    position: 'lateral', positionNote: 'décubitus latéral, côté douloureux **en haut**, hanche fléchie à 20–30°, coussin entre les genoux pour éviter l’adduction (qui comprime les tendons)',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 4–5 cm ; convexe 2–5 MHz si IMC > 35 (le trochanter peut être à 6–8 cm)',
    approche: 'in-plane', approcheNote: 'coupe transverse pour identifier les facettes, puis coupe longitudinale sur la facette latérale ; ponction de distal en proximal',
    aiguille: '21–22 G, 50–70 mm (90 mm si obésité) ; 21 G pour une ténotomie percutanée',
    cible: 'Espace entre la face profonde de la bandelette ilio-tibiale / du grand fessier et la face superficielle du tendon du moyen fessier — la nappe doit **glisser le long du tendon sans le pénétrer**',
    injectat: '3–5 mL : corticoïde + AL, ou PRP 3–5 mL, ou AL seul avant ténotomie',
    duree: '10 min',
  },

  indications: [
    'Douleur latérale de hanche mécanique, réveillée par le décubitus latéral homolatéral, la montée d’escalier et la station debout prolongée, avec **douleur à la palpation du grand trochanter**, après échec d’au moins 6 semaines de rééducation bien conduite.',
    '**Tendinopathie des moyen / petit fessiers** documentée en échographie (épaississement, hypoéchogénicité, enthésophytes, néovascularisation) sans rupture transfixiante.',
    '**Bursite sous-glutéale** avec épanchement objectivé — indication la plus rentable pour le corticoïde, mais la moins fréquente.',
    '**Ressaut latéral de hanche** (bandelette ilio-tibiale accrochant le trochanter) avec bursite réactionnelle : infiltration de la bourse, la correction reste rééducative.',
    'Bloc diagnostique quand la douleur latérale de hanche peut relever du rachis lombaire (L4-L5), de la sacro-iliaque ou de la coxo-fémorale : la réponse immédiate à l’AL trochantérien tranche.',
    'Rupture partielle des tendons fessiers : infiltration possible mais **sans corticoïde à proximité du tendon**, ou PRP / ténotomie selon le projet.',
  ],
  contreIndications: [
    '**Absolues** : infection cutanée locale, refus, allergie au produit.',
    '**Rupture transfixiante étendue** des tendons fessiers (« trochanter dénudé ») : le corticoïde est contre-indiqué — le patient relève d’un avis chirurgical (réinsertion) ou d’une prise en charge fonctionnelle.',
    '**Relatives** : diabète déséquilibré, patient maigre (le trochanter est très superficiel : risque élevé d’atrophie graisseuse et de dépigmentation), corticothérapie récente sur le même site (< 3 mois), infiltrations répétées (> 2–3 au total sur ce site).',
    '**Risque hémorragique faible** (ASRA-ESRA 2018) : site superficiel et compressible — pas d’interruption des antiagrégants, anticoagulants oraux au cas par cas.',
    'Ne pas infiltrer de corticoïde chez un patient dont l’objectif est la reprise sportive à court terme : le corticoïde fragilise transitoirement le tendon.',
  ],
  alternatives: 'La référence n’est pas l’infiltration : c’est l’**éducation + exercice** (renforcement progressif des abducteurs en chaîne fermée, correction de l’adduction en charge, éviction des postures en adduction — jambes croisées, appui monopodal en « hanche cassée », couchage avec coussin entre les genoux). Un ECR de bonne qualité a montré que ce programme fait mieux que l’infiltration de corticoïde **et** que l’abstention, non seulement à 8 semaines mais surtout à 52 semaines, où l’infiltration a perdu tout avantage. Autres options : ondes de choc radiales ou focalisées (résultats au moins équivalents au corticoïde à moyen terme), PRP (supérieur au corticoïde à 12 semaines dans au moins un ECR en double aveugle), ténotomie percutanée à l’aiguille, chirurgie de réinsertion des tendons fessiers pour les ruptures symptomatiques. Positionner clairement l’infiltration devant le patient : **une fenêtre antalgique de 4 à 12 semaines pour rendre la rééducation possible**, pas un traitement.',

  anatomie: `Le grand trochanter présente **quatre facettes** (description de référence de Pfirrmann et Resnick) : antérieure, latérale, postéro-supérieure et postérieure.

- Le **petit fessier** s’insère sur la **facette antérieure**.
- Le **moyen fessier** a deux insertions : un tendon latéral sur la **facette latérale** et un tendon postérieur sur la **facette postéro-supérieure**.
- La **facette postérieure** ne reçoit pas d’insertion tendineuse : elle est recouverte par la bourse et le grand fessier.

Trois bourses accompagnent cet appareil abducteur : la **bourse sous-glutéale** (dite trochantérienne, la plus volumineuse, entre le grand fessier / la bandelette ilio-tibiale et le tendon du moyen fessier sur la facette latérale et postérieure), la bourse sub-medius et la bourse sub-minimus. C’est la première qui est en cause en pratique.

La **bandelette ilio-tibiale** passe en superficie, tendue et parfois épaissie ; le **grand fessier** la rejoint en arrière. Le nerf glutéal supérieur chemine bien au-dessus, entre moyen et petit fessiers, hors du champ de ponction.

### Ce qui compte pour le geste
- **Le mécanisme est une compression tendineuse en adduction**, pas une inflammation primitive de la bourse : l’adduction (jambes croisées, couchage sans coussin, appui monopodal en bascule) comprime les tendons entre le trochanter et la bandelette. La correction posturale fait partie du traitement, et son absence explique les récidives après infiltration.
- **La cible est un plan, pas une cavité.** La bourse est le plus souvent virtuelle : on injecte dans l’espace péri-tendineux entre la face profonde de la bandelette / du grand fessier et la face superficielle du tendon du moyen fessier. L’injectat doit **glisser** en nappe.
- **Ne jamais injecter dans le tendon.** Une injection intratendineuse de corticoïde expose à la nécrose collagénique et à la rupture ; c’est l’erreur qui transforme une tendinopathie en indication chirurgicale.
- **Repère de profondeur** : facette latérale à 2–4 cm chez un sujet de corpulence normale, jusqu’à 6–8 cm en cas d’obésité gynoïde — c’est la localisation du membre inférieur où le morphotype change le plus la difficulté du geste.
- Rechercher en même temps une **rupture** (interruption des fibres, trochanter dénudé), des **calcifications** (enthésopathie calcifiante, accessible au barbotage) et un **épanchement de bourse** : ces trois éléments changent l’indication.`,

  installation: {
    patient: `**Décubitus latéral**, côté douloureux **en haut**, dos bien perpendiculaire au plan du lit (une bascule postérieure fait fuir la facette latérale). Hanche fléchie à 20–30°, genou fléchi, **coussin entre les genoux** : l’adduction du membre inférieur comprime les tendons contre le trochanter et referme l’espace visé.

Repérer le trochanter à la palpation et faire préciser au patient le point le plus douloureux : la concordance entre le point palpé et l’anomalie échographique est un élément diagnostique. Marquer au feutre, désinfecter largement.

Chez le patient qui ne tolère pas le décubitus latéral (rachis, obésité), le décubitus dorsal avec un billot sous la fesse controlatérale et une légère rotation est une alternative acceptable.`,
    operateur: `Opérateur **derrière le patient**, écran en face. La ponction se fait de **distal vers proximal** dans le plan de la sonde longitudinale : le trajet longe la surface du tendon au lieu de plonger vers lui, ce qui limite le risque d’injection intratendineuse. Certains préfèrent l’abord proximo-distal ; ce qui compte est de rester **tangentiel au tendon**, jamais perpendiculaire.

Main de la sonde en appui sur la crête iliaque ou sur la cuisse pour absorber les mouvements respiratoires.`,
    sonde: `- Linéaire 6–13 MHz, preset MSK, profondeur 4–5 cm, focale à la corticale du trochanter.
- Convexe 2–5 MHz si le trochanter est au-delà de 5 cm.
- **Attention à l’anisotropie** : les tendons fessiers s’insèrent obliquement ; un tendon normal paraît hypoéchogène (donc « pathologique ») si le faisceau n’est pas perpendiculaire. Basculer la sonde de 10–15° dans les deux sens avant de conclure à une tendinopathie.
- Doppler couleur : néovascularisation péri-insertionnelle (argument de tendinopathie active) et repérage des branches de l’artère circonflexe fémorale latérale.
- Comparer au côté sain en cas de doute sur l’épaisseur tendineuse ou sur une lame liquidienne.`,
  },

  reperage: [
    { titre: 'Trouver le trochanter en transverse', texte: 'Sonde **transversale** sur le relief palpé du grand trochanter, patient en décubitus latéral. Apparaît une ligne osseuse convexe très hyperéchogène avec ombre franche. Balayer de crânial en caudal jusqu’à obtenir le sommet du trochanter.' },
    { titre: 'Identifier les facettes et les tendons', texte: 'Sur cette coupe transverse, reconnaître d’avant en arrière la **facette antérieure** avec le tendon du **petit fessier** (plus fin, plus profond), puis la **facette latérale** avec le tendon du **moyen fessier** (plus épais, plus superficiel), enfin la facette postérieure recouverte par le grand fessier. Le petit fessier est le plus souvent atteint en premier, le moyen fessier le plus souvent symptomatique.' },
    { titre: 'Passer en longitudinal sur la facette latérale', texte: 'Rotation de 90° : le tendon du moyen fessier apparaît en **coupe longitudinale**, fibrillaire, convergeant en « bec » sur la facette latérale. C’est la coupe de travail : elle montre à la fois le tendon, son insertion, la bourse au-dessus et la bandelette.' },
    { titre: 'Chercher les quatre anomalies', texte: '(1) **Épaississement / hypoéchogénicité** du tendon (après avoir corrigé l’anisotropie) ; (2) **calcifications** intratendineuses ou enthésophytes de la corticale ; (3) **rupture** partielle (lacune anéchogène) ou transfixiante (« trochanter dénudé », tendon absent, corticale directement sous la bandelette) ; (4) **épanchement de bourse** : lame anéchogène ou hypoéchogène de plus de 2 mm entre la bandelette et le tendon. Doppler pour la néovascularisation.' },
    { titre: 'Si l’on ne trouve pas la cible', texte: 'La bourse est **virtuelle dans la majorité des cas** : ne pas chercher une cavité. Le repère fiable est le plan de clivage entre la face profonde de la bandelette ilio-tibiale et la face superficielle du tendon, immédiatement au-dessus de la facette latérale. Si le tendon reste illisible chez un patient obèse, passer au convexe, appuyer fermement et remonter légèrement en crânial où le trochanter est plus superficiel.' },
    { titre: 'Éliminer les diagnostics voisins', texte: 'Avant d’infiltrer, balayer rapidement : coxo-fémorale (récessus antérieur), sacro-iliaque, insertion du tenseur du fascia lata, muscles fessiers (déchirure musculaire), et penser à une radiculalgie L4-L5 ou à une fracture de fatigue du col chez le sujet âgé ou sportif.' },
  ],

  sonoanatomie: [
    { structure: 'Bandelette ilio-tibiale', aspect: 'Bande hyperéchogène fibrillaire fine, tendue, superficielle', repere: 'Toit de l’espace visé' },
    { structure: 'Grand fessier', aspect: 'Muscle strié, en arrière de la bandelette', repere: 'Recouvre la facette postérieure' },
    { structure: 'Bourse sous-glutéale', aspect: 'Le plus souvent **virtuelle** ; si épanchement, lame anéchogène > 2 mm', repere: 'Entre bandelette / grand fessier et tendon du moyen fessier' },
    { structure: 'Tendon du moyen fessier', aspect: 'Tendon épais, fibrillaire, convergeant en bec sur la facette latérale', repere: 'La structure à contourner, jamais à traverser' },
    { structure: 'Tendon du petit fessier', aspect: 'Tendon plus fin et plus profond, en avant', repere: 'Facette antérieure' },
    { structure: 'Facette latérale du grand trochanter', aspect: 'Corticale hyperéchogène convexe, ombre acoustique franche', repere: 'Plancher de l’espace visé' },
    { structure: 'Facette antérieure', aspect: 'Corticale plus antérieure, souvent irrégulière si enthésopathie', repere: 'Insertion du petit fessier' },
    { structure: 'Enthésophytes / calcifications', aspect: 'Spicules ou amas hyperéchogènes avec ombre', repere: 'Signe de chronicité ; cible éventuelle de barbotage' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Seringue de 5 mL (corticoïde + AL) sur aiguille 21–22 G 50–70 mm, prolongateur souple. Housse de sonde et gel stérile. Prévenir le patient qu’il ressentira une pression, pas une douleur vive : une douleur vive à l’injection signe une position intratendineuse.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point d’entrée, 1–2 cm en aval du bord distal de la sonde. Systématique chez le patient maigre où la ponction est très superficielle, et avant toute ténotomie.' },
    { titre: 'Ponction in-plane, tangentielle au tendon', texte: 'Coupe **longitudinale** sur la facette latérale. Entrer de distal vers proximal, angle faible (15–25°), et **longer** la face superficielle du tendon jusqu’à ce que la pointe se trouve dans le plan de clivage sous la bandelette, en regard de la zone la plus douloureuse. Ne pas viser le contact osseux : on est alors dans le tendon.' },
    { titre: 'Hydrolocalisation et test', texte: 'Aspiration, puis injection test de 0,5 mL : le liquide doit **décoller la bandelette du tendon** et progresser en nappe le long de la surface tendineuse, sans résistance. Si l’image se fait « en pointillés » à l’intérieur du tendon ou si la résistance est forte, **retirer de 2 mm** et recommencer.' },
    { titre: 'Injection fractionnée', texte: 'Puis 3–5 mL par fractions de 1 mL, en balayant légèrement l’aiguille d’avant en arrière pour couvrir la facette latérale et la facette postérieure. Surveiller que la nappe reste au-dessus du tendon.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène de 3–4 cm de long décollant la bandelette de la surface tendineuse, sans image intratendineuse. Retrait sous contrôle, compression douce, pansement.' },
    { titre: 'Après le geste', texte: '**EN avant et à 20 min** (valeur diagnostique du bloc AL : une chute franche confirme l’origine trochantérienne). Test de la marche et de l’appui monopodal. Consignes : pas d’adduction forcée, coussin entre les genoux la nuit, reprise du programme de renforcement des abducteurs à 48–72 h. Le rendez-vous de kinésithérapie doit être **pris avant** la sortie, sinon l’infiltration ne sert à rien.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 %, seule | 3–4 mL | EN avant / à 20 min ; tranche entre trochanter, hanche et rachis |
| Infiltration standard | Corticoïde + AL : méthylprednisolone 40 mg (Dépo-Médrol®), ou bétaméthasone 5,7 mg (Diprostène® 1 mL), ou triamcinolone acétonide 40 mg (Kenacort retard®) + lidocaïne 1 % ou ropivacaïne 0,2 % | 3–5 mL | **Péri-tendineux strict.** Site superficiel : préférer la **dose la plus basse efficace** et diluer, pour limiter l’atrophie graisseuse. La triamcinolone hexacétonide (Hexatrione®) est **réservée à l’intra-articulaire** : jamais ici |
| Patient maigre / risque cosmétique | Bétaméthasone ou dexaméthasone 4–8 mg + AL | 4–5 mL | La dexaméthasone (non particulaire, soluble) réduit le risque d’atrophie et de dépigmentation, au prix d’une durée d’action plus courte |
| PRP | Plasma riche en plaquettes, préparation standardisée | 3–5 mL | Alternative documentée par au moins un ECR en double aveugle favorable à 12 semaines contre corticoïde. Hors nomenclature, à la charge du patient ; à réserver aux tendinopathies sans rupture, chez un patient qui accepte 4–6 semaines de latence |
| Ténotomie percutanée à l’aiguille | Lidocaïne 1 % 3–5 mL pour anesthésier la zone, puis 20–40 passages d’une aiguille 21 G dans la zone pathologique et les enthésophytes | — | Geste séparé, sous AL ; peut être suivi d’une injection de PRP. Prévenir d’une recrudescence douloureuse de 5 à 10 jours |
| Barbotage d’une calcification | Lidocaïne 1 %, aiguilles 18–21 G, sérum physiologique | Variable | Uniquement si calcification volumineuse symptomatique — cf. fiche calcifications de coiffe pour la méthode, transposable |

**Doses maximales d’anesthésique local** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Les volumes utilisés ici en sont très éloignés ; le calcul n’a d’intérêt qu’en cas de gestes bilatéraux ou multiples dans la même séance.

**Règle de répétition** : au maximum 2 à 3 infiltrations de corticoïde sur ce site au total, espacées d’au moins 3 mois. Au-delà, le rapport bénéfice-risque bascule (fragilisation tendineuse, atrophie cutanée) et le patient relève d’une autre stratégie.`,

  variantes: [
    { titre: 'Ténotomie percutanée à l’aiguille (needle tenotomy / fenestration)', texte: `Sous anesthésie locale généreuse (lidocaïne 1 %, 3–5 mL en péri-tendineux **et** en intratendineux dans la zone à traiter), aiguille 21 G introduite in-plane dans la zone hypoéchogène et dans les enthésophytes, puis 20 à 40 passages en éventail jusqu’à percevoir un ramollissement de la résistance. Objectif : provoquer un saignement local et relancer une réponse cicatricielle sur une tendinopathie chronique dégénérative.

Prévenir d’une **recrudescence douloureuse de 5 à 10 jours**, interdire le corticoïde dans le même temps (il annulerait la réponse recherchée), et enchaîner sur un programme de charge progressive à partir de J10. Peut être combiné à une injection de PRP. Niveau de preuve : séries, extrapolé des autres enthésopathies — *à confirmer*.` },
    { titre: 'PRP', texte: `Injection péri-tendineuse et intratendineuse de 3–5 mL de PRP, sous AL cutané seul (pas d’AL dans le PRP, la plupart des protocoles évitant le contact anesthésique-plaquettes). Un ECR en double aveugle a montré une supériorité sur le corticoïde à 12 semaines dans la tendinopathie fessière, avec un bénéfice maintenu dans le suivi prolongé. Latence de 4 à 6 semaines : à annoncer, sinon le patient conclura à un échec. Hors nomenclature.` },
    { titre: 'Ondes de choc', texte: `Ondes de choc radiales ou focalisées, 3 à 5 séances hebdomadaires. Au moins un ECR à trois bras (auto-rééducation, corticoïde, ondes de choc) montre un avantage du corticoïde à 1 mois mais un renversement à 4 et 15 mois en faveur des ondes de choc et de l’exercice. À proposer d’emblée au patient qui refuse le corticoïde ou qui en a déjà reçu.` },
    { titre: 'Infiltration de la bourse en coupe transverse', texte: `Variante utile chez le patient obèse ou lorsque la coupe longitudinale reste illisible : sonde transversale sur le trochanter, aiguille in-plane d’antérieur en postérieur (ou l’inverse), pointe placée entre bandelette et facette latérale. Moins précise sur le niveau d’insertion, mais plus facile à obtenir. Même critère de fin : décollement en nappe.` },
    { titre: 'Ressaut latéral de hanche', texte: `Devant un ressaut audible ou palpable, faire l’examen **dynamique** : sonde transversale sur le trochanter, patient en décubitus latéral, on demande une flexion-extension active de hanche — la bandelette accroche brutalement le trochanter. L’infiltration de la bourse soulage la bursite réactionnelle mais ne corrige pas le ressaut, qui relève de l’étirement de la bandelette et du renforcement des abducteurs, et exceptionnellement de la chirurgie.` },
  ],

  pearls: [
    'Le coussin entre les genoux n’est pas du confort : sans lui, l’adduction referme l’espace que l’on cherche à ponctionner.',
    'Corriger l’anisotropie avant de conclure à une tendinopathie : basculer la sonde de 10–15° dans les deux sens.',
    'La bourse est virtuelle dans la majorité des cas — chercher le **plan** entre bandelette et tendon, pas une cavité.',
    'Aiguille tangentielle, angle faible : si l’on vise le contact osseux, on traverse le tendon.',
    'Une douleur vive ou une forte résistance à l’injection = intratendineux. Retirer de 2 mm avant d’insister.',
    'Prendre le rendez-vous de kinésithérapie avant la sortie : c’est l’exercice qui tient à un an, pas l’infiltration.',
  ],
  pieges: [
    'Injecter dans le tendon : la faute la plus fréquente et la plus lourde de conséquences (rupture secondaire).',
    'Infiltrer un « trochanter dénudé » (rupture transfixiante) : aucun bénéfice attendu, et un avis chirurgical retardé.',
    'Utiliser une dose forte de corticoïde particulaire chez un patient maigre : atrophie graisseuse et dépigmentation visibles, souvent définitives, sur une zone que le patient regarde tous les jours.',
    'Confondre la douleur trochantérienne projetée d’une radiculalgie L4-L5 ou d’une coxarthrose avec un GTPS : la palpation exquise du trochanter et la réponse au bloc AL font la différence.',
    'Répéter l’infiltration parce que « ça a marché trois semaines » : c’est justement le signe qu’il faut changer de stratégie.',
    'Oublier l’examen dynamique devant un ressaut : le diagnostic se fait en mouvement, pas sur une image figée.',
  ],
  complications: [
    '**Atrophie graisseuse sous-cutanée et dépigmentation** : la complication la plus fréquente ici, car le site est superficiel. Prévenir, diluer, choisir la dose la plus basse, éviter le reflux en injectant 0,2 mL de sérum au retrait.',
    '**Rupture tendineuse secondaire** après injection intratendineuse de corticoïde ou après infiltrations répétées : rare mais grave, avec boiterie de Trendelenburg. Prévention = technique péri-tendineuse et limitation du nombre d’infiltrations.',
    '**Recrudescence douloureuse post-injection (flare)** : 24–48 h ; systématique et prolongée (5–10 jours) après ténotomie ou PRP — l’annoncer.',
    '**Infection** : exceptionnelle, mais le décubitus latéral et la proximité du pli fessier imposent une asepsie soignée.',
    '**Hyperglycémie** 24–72 h chez le diabétique ; flush, insomnie.',
    '**Échec d’emblée** : le plus souvent un mauvais diagnostic (rachis, hanche, sacro-iliaque) ou une injection hors du plan visé. Ne pas répéter à l’identique.',
  ],
  securite: [
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018) : site superficiel, compressible — pas d’arrêt des antiagrégants ; anticoagulants au cas par cas.',
    'Doppler couleur avant la ponction : branches de l’artère circonflexe fémorale latérale et néovaisseaux tendineux.',
    'Aspiration avant chaque fraction ; arrêt immédiat en cas de douleur fulgurante.',
    'Dose de corticoïde la plus basse compatible avec l’objectif, diluée dans l’AL, chez tout patient maigre ou à peau pigmentée (risque de dépigmentation).',
    'Tracer au dossier le nombre cumulé d’infiltrations sur ce trochanter — c’est ce chiffre qui doit arrêter la répétition, pas la demande du patient.',
    'Chez le diabétique : glycémie capillaire sur 72 h.',
  ],

  suivi: `- **J0** : EN avant / à 20 min, test d’appui monopodal (30 s) et de marche. La réponse immédiate à l’AL est l’information diagnostique.
- **J2–J10** : fenêtre du flare. Recrudescence attendue et prolongée après ténotomie ou PRP.
- **J15–J30** : EN, tolérance du décubitus latéral (question la plus discriminante chez ces patients : « pouvez-vous dormir sur ce côté ? »), périmètre de marche, observance du programme d’exercices. C’est le pic d’effet du corticoïde.
- **3 mois** : le moment de vérité. Bénéfice maintenu → poursuite du seul programme d’exercices. Bénéfice perdu → **ne pas répéter à l’identique** : réévaluer l’imagerie (rupture ? calcification ?), envisager PRP, ondes de choc, ténotomie, ou reprendre le diagnostic.
- **6–12 mois** : c’est l’horizon auquel l’exercice fait la différence et où l’infiltration n’en fait plus. Le message doit être donné dès J0, sinon le patient revient tous les trois mois demander « la même piqûre ».`,

  evidence: `- **Corticoïde vs placebo / abstention** : bénéfice réel mais **de courte durée**, mesurable jusqu’à 4–8 semaines, non maintenu à 6 et 12 mois. Preuve **modérée**, cohérente entre les essais.
- **Éducation + exercice vs corticoïde vs abstention (LEAP, Mellor, 2018, BMJ)** : ECR à trois bras dans la tendinopathie fessière ; le programme d’éducation et d’exercice fait mieux que l’infiltration et que l’abstention à 8 semaines, et l’avantage se maintient à 52 semaines alors que l’infiltration ne se distingue plus de l’abstention. C’est l’essai qui doit structurer le discours au patient. Preuve **forte** pour l’exercice.
- **PRP vs corticoïde (Fitzpatrick, 2018, American Journal of Sports Medicine)** : ECR en double aveugle, injection unique échoguidée ; supériorité du PRP sur le corticoïde à 12 semaines sur la douleur et la fonction. Essai unicentrique de taille modérée ; preuve **modérée**, à confirmer par d’autres équipes.
- **Ondes de choc (Rompe, 2009, American Journal of Sports Medicine)** : ECR à trois bras (auto-rééducation, infiltration de corticoïde, ondes de choc radiales) ; le corticoïde domine à 1 mois, mais est dépassé par les deux autres bras à 4 et 15 mois. Cohérent avec le LEAP.
- **Guidage échographique vs repères palpatoires** : le guidage augmente la précision de placement, mais la supériorité **clinique** n’est pas clairement démontrée pour ce site, où le trochanter est palpable. L’intérêt principal de l’échographie ici est **diagnostique** (rupture, calcification, épanchement) et la sélection des patients — argument suffisant en HDJ.
- **Anatomie (Pfirrmann, 2001, Radiology)** : description des quatre facettes trochantériennes et des trois bourses, socle de la lecture échographique moderne.
- **Trous de la littérature** : peu de données comparatives sur la **ténotomie percutanée** à ce site (extrapolation depuis l’épicondylalgie et la coiffe) ; pas de consensus sur le nombre maximal d’infiltrations ; place de la chirurgie de réinsertion mal codifiée. *À confirmer lors de la passe de vérification bibliographique.*`,

  references: [
    { auteurs: 'Mellor R, Bennell K, Grimaldi A, et al.', titre: 'Education plus exercise versus corticosteroid injection use versus a wait and see approach on global outcome and pain from gluteal tendinopathy: prospective, single blinded, randomised clinical trial (LEAP)', revue: 'BMJ', annee: '2018', type: 'ECR', verif: false, note: 'Essai structurant : l’exercice bat l’infiltration à 8 et 52 semaines.' },
    { auteurs: 'Fitzpatrick J, Bulsara MK, O’Donnell J, McCrory PR, Zheng MH', titre: 'The effectiveness of platelet-rich plasma injections in gluteal tendinopathy: a randomized, double-blind controlled trial comparing a single platelet-rich plasma injection with a single corticosteroid injection', revue: 'American Journal of Sports Medicine', annee: '2018', type: 'ECR', verif: false },
    { auteurs: 'Rompe JD, Segal NA, Cacchio A, Furia JP, Morral A, Maffulli N', titre: 'Home training, local corticosteroid injection, or radial shock wave therapy for greater trochanter pain syndrome', revue: 'American Journal of Sports Medicine', annee: '2009', type: 'ECR', verif: false },
    { auteurs: 'Pfirrmann CWA, Chung CB, Theumann NH, Trudell DJ, Resnick D', titre: 'Greater trochanter of the hip: attachment of the abductor mechanism and a complex of three bursae — MR imaging and MR bursography in cadavers and MR imaging in asymptomatic volunteers', revue: 'Radiology', annee: '2001', type: 'anatomie', verif: false },
    { auteurs: 'Grimaldi A, Fearon A', titre: 'Gluteal tendinopathy: integrating pathomechanics and clinical features in its management', revue: 'Journal of Orthopaedic and Sports Physical Therapy', annee: '2015', type: 'revue', verif: false, note: 'Modèle compression-en-adduction, base des consignes posturales données au patient.' },
    { auteurs: 'Long SS, Surrey DE, Nazarian LN', titre: 'Sonography of greater trochanteric pain syndrome and the rarity of primary bursitis', revue: 'American Journal of Roentgenology', annee: '2013', type: 'série', verif: false, note: 'Série échographique montrant la rareté de la bursite isolée ; titre à confirmer.' },
    { auteurs: 'Brinks A, van Rijn RM, Willemsen SP, et al.', titre: 'Corticosteroid injections for greater trochanteric pain syndrome: a randomized controlled trial in primary care', revue: 'Annals of Family Medicine', annee: '2011', type: 'ECR', verif: false, note: 'Bénéfice à 3 mois, disparu à 12 mois.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'recommandation', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'gt-transverse', section: 'sonoanatomie', titre: 'Coupe transverse sur le grand trochanter — les facettes et leurs tendons',
      legende: 'La coupe qui donne la carte : facette antérieure avec le tendon du petit fessier, facette latérale avec le tendon du moyen fessier, plus épais et plus superficiel. La bourse sous-glutéale est le plan situé entre la bandelette ilio-tibiale / le grand fessier et la face superficielle du tendon — le plus souvent virtuelle.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transverse, sommet du grand trochanter', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 34 });
        S.muscle({ path: 'M306 96 L640 90 L640 214 Q470 200 384 178 L310 152 Z', label: 'Grand fessier', at: [548, 120], opacity: 0.5 });
        S.ligament({ path: 'M0 110 L336 124 L336 138 L0 124 Z', label: 'Bandelette ilio-tibiale', at: [136, 100] });
        S.fluid({ path: 'M252 158 Q352 154 452 170 L450 182 Q352 166 252 172 Z', label: 'Bourse sous-glutéale', lx: 252, ly: 142, anchor: 'start', small: true, lead: [300, 162] });
        S.tendon({ path: 'M58 194 L232 178 L238 200 L64 216 Z', label: 'T. petit fessier', lx: 60, ly: 168, anchor: 'start', small: true, lead: [120, 186] });
        S.tendon({ path: 'M248 176 L452 188 L448 210 L244 198 Z', label: 'T. moyen fessier', lx: 300, ly: 238, anchor: 'start', small: true, lead: [344, 200] });
        S.bone({ path: 'M0 268 L70 254 Q140 226 216 212 L300 210 Q420 220 530 246 L640 270' });
        S.label({ x: 128, y: 316, text: 'Facette antérieure', cls: 'lbl-bone', small: true });
        S.label({ x: 388, y: 316, text: 'Facette latérale', cls: 'lbl-bone', small: true });
        S.label({ x: 560, y: 344, text: 'Grand trochanter', cls: 'lbl-bone' });
      },
    },
    {
      id: 'gt-geste', section: 'technique', titre: 'Coupe longitudinale sur la facette latérale — ponction tangentielle au tendon',
      legende: 'Coupe de travail : le tendon du moyen fessier converge en bec sur la facette latérale. L’aiguille entre en distal, à angle faible, et longe la face superficielle du tendon jusqu’au plan de clivage sous la bandelette. L’injectat doit décoller la bandelette du tendon en une nappe qui glisse — jamais d’image intratendineuse.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Longitudinal, facette latérale', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 32 });
        S.muscle({ path: 'M0 86 L640 82 L640 190 Q400 178 200 140 L0 104 Z', label: 'Grand fessier', at: [150, 116], opacity: 0.5 });
        S.fascia({ points: [[0, 106], [300, 152], [560, 198]], width: 2.4, label: 'Bandelette ilio-tibiale', at: [430, 168], small: true });
        S.fluid({ path: 'M120 176 L430 226 L434 210 L124 160 Z', label: 'Bourse sous-glutéale', lx: 118, ly: 148, anchor: 'start', small: true, lead: [230, 178] });
        S.tendon({ path: 'M0 190 L440 256 L498 272 L506 250 L450 234 L0 160 Z', label: 'Tendon du moyen fessier', lx: 90, ly: 232, anchor: 'start', small: true, lead: [230, 210] });
        S.bone({ path: 'M0 372 L200 356 Q300 340 380 300 Q450 264 520 272 Q580 282 620 320 L640 342', label: 'Grand trochanter', at: [430, 372] });
        S.target({ x: 420, y: 216, r: 13 });
        S.needle({ from: [636, 118], to: [424, 216], label: '21–22 G, tangentielle' });
        S.spread({ x: 348, y: 202, rx: 76, ry: 10, label: '3–5 mL' });
      },
    },
  ],

  checklist: [
    'Rupture transfixiante recherchée avant d’injecter un corticoïde (« trochanter dénudé » = pas de corticoïde)',
    'Coussin entre les genoux en place, hanche hors adduction',
    'Nombre cumulé d’infiltrations déjà reçues sur ce trochanter vérifié et tracé',
    'Chez le patient maigre ou à peau pigmentée : dose de corticoïde réduite et diluée, risque cosmétique expliqué',
    'Rendez-vous de kinésithérapie (renforcement des abducteurs) pris avant la sortie',
    'Consignes posturales remises : pas de jambes croisées, coussin la nuit, éviter l’appui monopodal en bascule',
  ],
});
