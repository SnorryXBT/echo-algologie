/* Fiche : articulation temporo-mandibulaire — infiltration échoguidée, arthrocentèse. */
ECHO.register({
  id: 'articulation-temporo-mandibulaire',
  titre: 'Articulation temporo-mandibulaire — infiltration échoguidée',
  titreCourt: 'ATM',
  en: 'Ultrasound-guided temporomandibular joint (TMJ) injection — superior joint space, preauricular approach; corticosteroid, hyaluronic acid, PRP, arthrocentesis',
  region: 'tete-cou',
  types: ['infiltration'],
  niveau: 2,
  grade: 'Modérée : nombreux ECR mais de petite taille, à risque de biais élevé, et méta-analyses hétérogènes ; supériorité franche d\'un produit sur un autre non établie',
  motsCles: ['ATM', 'TMJ', 'dysfonction temporo-mandibulaire', 'DTM', 'SADAM', 'arthrose temporo-mandibulaire', 'déplacement discal', 'closed lock', 'arthrocentèse', 'acide hyaluronique', 'PRP', 'viscosupplémentation', 'craquement', 'trismus'],
  maj: '2026-09',
  resume: 'L\'infiltration de l\'ATM ne concerne que la **dysfonction arthrogène** — arthrose, arthrite inflammatoire, déplacement discal avec limitation d\'ouverture. La forme **myogène**, de loin la plus fréquente, relève des points gâchettes des masticateurs et de la gouttière occlusale, pas d\'une aiguille intra-articulaire : c\'est le premier tri à faire, et c\'est là que la plupart des échecs se décident. La cible est l\'**espace articulaire supérieur** (disco-temporal), abordé par voie pré-auriculaire, bouche entrouverte. L\'échographie apporte trois choses : elle voit l\'artère temporale superficielle, elle confirme que la pointe est bien dans l\'espace supérieur (et non dans le disque ou dans le tissu rétro-discal), et elle permet de suivre l\'ouverture de l\'interligne pendant l\'injection. Volumes minuscules — l\'espace supérieur contient environ 1 à 1,5 mL. Geste à faire en lien avec un odontologiste ou un chirurgien maxillo-facial, jamais isolément.',

  flash: {
    position: 'lateral', positionNote: 'décubitus latéral, côté à traiter vers le haut, tête calée ; décubitus dorsal tête tournée possible mais moins stable pour la sonde',
    sonde: 'lineaire', sondeNote: 'linéaire ou hockey stick **10–18 MHz**, profondeur 2,5–3,5 cm, focale 1–2 cm ; Doppler sur les vaisseaux temporaux superficiels',
    approche: 'in-plane', approcheNote: 'postéro-antérieure, sonde oblique dans l\'axe de l\'arcade zygomatique, **bouche entrouverte de 15–25 mm** (le condyle se translate en avant et l\'interligne s\'ouvre)',
    aiguille: '25–27 G 25–30 mm sur seringue Luer-lock de 1–2 mL ; 2 aiguilles 19–21 G pour une arthrocentèse à double voie',
    cible: 'Espace articulaire **supérieur** (disco-temporal), entre le disque et la fosse mandibulaire ; critère de fin : ouverture visible de l\'interligne, injection sans résistance, aucune diffusion dans le tissu rétro-discal',
    injectat: '**0,5–1 mL** : corticoïde, acide hyaluronique de faible volume ou PRP — jamais plus, l\'espace ne le contient pas',
    duree: '10 min infiltration · 30–40 min arthrocentèse',
  },

  indications: [
    '**Arthrose temporo-mandibulaire** symptomatique : douleur pré-auriculaire mécanique, crépitations, limitation d\'ouverture, après échec de 4 à 6 semaines de traitement conservateur bien conduit (gouttière de décharge, rééducation, AINS, hygiène articulaire).',
    '**Déplacement discal irréductible avec limitation d\'ouverture** (« closed lock ») : c\'est l\'indication historique de l\'arthrocentèse, qui lève l\'adhérence disco-temporale et restaure l\'amplitude — souvent plus efficace qu\'une simple infiltration.',
    '**Arthrite inflammatoire de l\'ATM** : polyarthrite rhumatoïde, spondyloarthrite, arthrite juvénile idiopathique (atteinte ATM fréquente et longtemps muette) — infiltration cortisonique en complément du traitement de fond, en concertation avec le rhumatologue.',
    '**Douleur arthrogène réfractaire** avec confirmation d\'imagerie (arthrose, épanchement, remaniement condylien) : bloc-infiltration à visée diagnostique et thérapeutique.',
    '**Ce qui n\'est PAS une indication** : dysfonction **myogène** pure (douleur des masséters et temporaux, absence de bruit articulaire, ouverture normale ou limitée par contracture) — voir la fiche points gâchettes ; bruxisme isolé ; douleur pré-auriculaire d\'origine auriculo-temporale (bloc de branche, fiche trijumeau) ; céphalée de tension. Confondre ces tableaux avec une arthropathie est l\'erreur la plus fréquente et la plus coûteuse.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée pré-auriculaire ou otite externe, suspicion d\'arthrite septique de l\'ATM (fièvre, tuméfaction inflammatoire, trismus fébrile → avis chirurgical urgent, pas d\'infiltration), tumeur locale.',
    '**Relatives** : hémostase — site **superficiel et compressible**, donc **faible risque hémorragique** au sens des recommandations ASRA-ESRA 2018 sur les procédures de douleur interventionnelle ; pas d\'interruption systématique des antiagrégants, mais l\'artère temporale superficielle est immédiatement sur le trajet et l\'hématome pré-auriculaire est visible.',
    '**Corticoïdes** : diabète déséquilibré ; **surtout, ne pas répéter** — l\'ATM a un fibrocartilage fin et la répétition des injections de corticoïdes est associée à une dégradation cartilagineuse et à une résorption condylienne, décrite notamment chez le sujet jeune et dans l\'arthrite juvénile. Plafonner à 2, exceptionnellement 3 injections par articulation, espacées d\'au moins 3 mois, et privilégier l\'acide hyaluronique en entretien.',
    'Patient qui ne peut pas maintenir la bouche entrouverte (trismus serré, patient non coopérant) : l\'interligne ne s\'ouvre pas et le geste devient aveugle.',
    'Grossesse : différer un PRP ou une viscosupplémentation non urgente.',
  ],
  alternatives: 'Le traitement conservateur reste la référence et doit précéder toute aiguille : **gouttière occlusale de décharge**, rééducation maxillo-faciale (mobilisation, décontraction, correction des parafonctions), éducation (alimentation molle transitoire, arrêt du chewing-gum et de l\'onychophagie), AINS courts, traitement du bruxisme. En cas d\'échec : **arthrocentèse** (lavage articulaire), infiltration (corticoïde, acide hyaluronique, PRP), puis **arthroscopie** ou chirurgie ouverte (discopexie, éminectomie, prothèse) en dernier recours, qui relèvent du chirurgien maxillo-facial. Traiter en parallèle la composante myofasciale (points gâchettes des masséters, temporaux, ptérygoïdiens) : une ATM arthrosique s\'accompagne presque toujours d\'une contracture masticatrice, et infiltrer l\'articulation sans traiter le muscle donne un résultat partiel et décevant. Enfin, le bloc du **nerf auriculo-temporal** est un excellent test diagnostique quand on hésite entre douleur articulaire et névralgie de branche.',

  anatomie: `L\'ATM est une articulation **synoviale bicondylienne à disque interposé**. Le **disque articulaire**, fibrocartilagineux et biconcave, divise la cavité en **deux compartiments qui ne communiquent pas** en situation normale :

- **Compartiment supérieur (disco-temporal)** : entre le disque et la fosse mandibulaire / l\'éminence articulaire du temporal. Volume ≈ **1 à 1,5 mL**. C\'est le compartiment de la **translation** — et **la cible de l\'infiltration et de l\'arthrocentèse**.
- **Compartiment inférieur (disco-condylien)** : entre le disque et la tête du condyle. Volume ≈ **0,5 à 0,9 mL**. Compartiment de la **rotation**. Rarement ciblé, plus difficile à atteindre.

En avant, le disque se prolonge par les insertions du **faisceau supérieur du ptérygoïdien latéral** ; en arrière, par le **tissu rétro-discal** (zone bilaminaire), richement vascularisé et innervé — c\'est lui qui fait mal quand le disque est déplacé en avant, et c\'est lui qu\'on injecte par erreur quand on est trop postérieur.

### Ce qui compte pour le geste
- **Bouche entrouverte de 15 à 25 mm** : le condyle se **translate en avant** sur l\'éminence, ce qui **ouvre l\'espace supérieur** et le rend ponctionnable. Bouche fermée, l\'interligne est virtuel. C\'est la manœuvre qui conditionne tout le geste — la faire répéter au patient avant la désinfection et vérifier qu\'il la tient.
- **Artère et veine temporales superficielles** : elles montent verticalement juste en avant du tragus, **superficielles à la capsule**, exactement sur le trajet classique. Le Doppler les localise en dix secondes.
- **Nerf auriculo-temporal** (V3) : innerve la partie postérieure de la capsule ; il accompagne les vaisseaux temporaux superficiels, **en arrière** de l\'artère. Il explique la douleur référée à l\'oreille et à la tempe.
- **Tronc du nerf facial** : il sort du foramen stylo-mastoïdien et traverse la parotide **en dessous et en dedans** de l\'articulation. Rester superficiel et ne pas dériver en caudal évite la parésie faciale transitoire par diffusion d\'anesthésique.
- **Conduit auditif externe** : immédiatement en arrière du condyle. Une aiguille trop postérieure y arrive — repère à connaître, faute de quoi la ponction est douloureuse et inutile.
- **Innervation antérieure** : nerfs massétérin et temporaux profonds (V3), qui expliquent qu\'un bloc articulaire ne soulage jamais complètement une douleur mixte articulaire + musculaire.
- Profondeurs : capsule à **0,5–1 cm**, contour osseux du condyle à **1–1,8 cm** chez l\'adulte.`,

  installation: {
    patient: `**Décubitus latéral**, côté à traiter vers le haut, tête calée sur un coussin ferme, oreille protégée par une compresse (l\'antiseptique ne doit pas couler dans le conduit auditif). Le décubitus dorsal tête tournée est possible mais la sonde y est moins stable.

**Répétition de la manœuvre d\'ouverture avant la désinfection** : demander au patient d\'ouvrir la bouche de 15–25 mm (environ deux travers de doigt) et de tenir. Le lui faire faire deux ou trois fois en regardant l\'écran : on voit le condyle glisser en avant et l\'interligne s\'ouvrir. Un patient qui ne tient pas la position n\'est pas candidat au geste ce jour-là.

Prévenir : ponction brève, sensation de pression, éventuel bruit de « pop » articulaire, possible ecchymose pré-auriculaire, et **gêne transitoire à la mastication** le soir même.`,
    operateur: `Opérateur **derrière le patient**, écran en face, dans l\'axe. Sonde en prise crayon, **auriculaire en appui sur la joue ou la mastoïde** — la stabilité de la sonde est le déterminant principal de la réussite sur une cible de 2 mm.

Sonde posée **obliquement dans l\'axe de l\'arcade zygomatique**, en avant du tragus, puis basculée jusqu\'à obtenir le contour convexe du condyle. Ponction **in-plane, de postérieur en antérieur**, à angle plat : on aborde l\'espace supérieur tangentiellement, on s\'éloigne du conduit auditif et du tronc facial.`,
    sonde: `- Linéaire ou hockey stick **10–18 MHz**, preset « small parts », **profondeur 2,5–3,5 cm**, focale à 1–1,5 cm, gain bas pour un contour osseux franc.
- **Doppler couleur systématique** avant la ponction : artère et veine temporales superficielles. Ne pas comprimer, sinon la veine disparaît.
- Balayage **dynamique obligatoire** : faire ouvrir et fermer la bouche en filmant — on voit le condyle se translater, et l\'on repère l\'aspect du disque (bande hypoéchogène coiffant le condyle) ainsi qu\'un éventuel **épanchement** (plage anéchogène dans l\'espace supérieur), argument fort pour infiltrer.
- Gel généreux, appui minimal : la capsule est à 5–10 mm.`,
  },

  reperage: [
    { titre: 'Poser la sonde en avant du tragus', texte: 'Sonde **oblique dans l\'axe de l\'arcade zygomatique**, immédiatement en avant du tragus. On identifie d\'abord la **parotide** (parenchyme homogène) en surface, puis le contour osseux profond.' },
    { titre: 'Trouver le condyle', texte: 'Basculer la sonde jusqu\'à obtenir un **arc hyperéchogène convexe** avec cône d\'ombre : la tête condylienne. En avant d\'elle, un second arc hyperéchogène, l\'**éminence articulaire du temporal**. Entre les deux, la dépression de la fosse mandibulaire.' },
    { titre: 'Manœuvre dynamique', texte: 'Faire **ouvrir et fermer la bouche** : le condyle glisse en avant sur l\'éminence à l\'ouverture. C\'est le test qui confirme qu\'on est bien sur l\'articulation et non sur l\'arcade zygomatique. Repérer au passage un éventuel ressaut ou un claquement.' },
    { titre: 'Identifier le disque et l\'espace supérieur', texte: 'Le **disque** apparaît comme une bande fine, hypo- à hyperéchogène, coiffant le condyle et se déplaçant avec lui. L\'**espace articulaire supérieur** est la fine interface entre le disque et le plan osseux temporal ; il devient visible (voire anéchogène s\'il y a un épanchement) **bouche entrouverte**.' },
    { titre: 'Doppler', texte: 'Repérer l\'**artère et la veine temporales superficielles**, verticales, superficielles, juste en avant du tragus. Choisir un point d\'entrée qui les évite — décaler de quelques millimètres suffit presque toujours.' },
    { titre: 'Si on ne trouve pas', texte: 'Contour osseux illisible : diminuer le gain, augmenter la fréquence, et repartir de l\'**arcade zygomatique** (ligne osseuse horizontale continue) que l\'on suit en arrière jusqu\'à la rupture qui marque la fosse. Interligne qui ne s\'ouvre pas malgré l\'ouverture buccale : penser à une **ankylose ou à une adhérence disco-temporale** — c\'est une indication d\'arthrocentèse, pas d\'infiltration à l\'aveugle. Si le patient ne peut pas ouvrir du tout, ne pas forcer le geste.' },
  ],

  sonoanatomie: [
    { structure: 'Parotide', aspect: 'Parenchyme homogène, finement granité, superficiel', repere: 'Premier plan traversé ; le tronc du facial y chemine plus bas et plus profond' },
    { structure: 'Artère / veine temporales superficielles', aspect: 'Structures verticales anéchogènes, l\'artère pulsatile en Doppler', repere: 'Juste en avant du tragus, superficielles à la capsule — à éviter' },
    { structure: 'Tête du condyle mandibulaire', aspect: 'Arc hyperéchogène convexe avec cône d\'ombre', repere: 'Se translate en avant à l\'ouverture buccale : le test de repérage' },
    { structure: 'Éminence articulaire / fosse mandibulaire', aspect: 'Second arc hyperéchogène, en avant et en haut du condyle', repere: 'Le toit de l\'espace supérieur' },
    { structure: 'Disque articulaire', aspect: 'Bande fine hypo- à hyperéchogène coiffant le condyle, mobile avec lui', repere: 'Sépare les deux compartiments ; ne pas le transpercer' },
    { structure: 'Espace articulaire supérieur', aspect: 'Interface fine, anéchogène si épanchement', repere: '**La cible** ; s\'ouvre bouche entrouverte' },
    { structure: 'Capsule articulaire latérale', aspect: 'Fine ligne hyperéchogène tendue entre temporal et col du condyle', repere: 'Franchie par l\'aiguille ; ressaut perceptible' },
    { structure: 'Tissu rétro-discal (zone bilaminaire)', aspect: 'Zone hypoéchogène hétérogène en arrière du condyle, vascularisée au Doppler', repere: 'Zone douloureuse à ne pas injecter — signe qu\'on est trop postérieur' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist. Compresse dans le conduit auditif, antiseptique non alcoolique au voisinage de l\'œil et de l\'oreille. Seringue **Luer-lock de 1–2 mL** (indispensable : on doit sentir la pression), aiguille 25–27 G 25–30 mm. Gel stérile en couche épaisse.' },
    { titre: 'Positionner l\'ouverture buccale', texte: 'Faire **entrouvrir la bouche de 15–25 mm** et vérifier à l\'écran que le condyle s\'est translaté en avant et que l\'interligne s\'est ouvert. Caler éventuellement l\'ouverture avec un rouleau de coton entre les molaires. Le patient tient la position pendant tout le geste.' },
    { titre: 'Ponction in-plane, postéro-antérieure', texte: 'Entrer à 5–10 mm du bord postérieur de la sonde, **angle 20–30°**, aiguille suivie en permanence. Traverser la parotide et la capsule — on perçoit un ressaut net — et **arrêter la pointe dans l\'espace supérieur, entre le disque et le plan osseux temporal**, sans contact osseux appuyé.' },
    { titre: 'Test avant injection', texte: 'Aspiration (un liquide synovial trouble ou hémorragique change la conduite : penser à une arthrite septique ou à une hémarthrose, ne pas injecter de corticoïde). Injecter **0,1–0,2 mL** : l\'espace supérieur doit **s\'élargir sous les yeux**. Si l\'injection est **dure** ou si le produit ne se voit pas → la pointe est dans le disque, dans la capsule ou dans le tissu rétro-discal : **repositionner, ne jamais forcer**.' },
    { titre: 'Injection et critère de fin', texte: 'Injecter **0,5 à 1 mL** au total, lentement. Critère de fin : élargissement visible de l\'interligne supérieur, absence de diffusion postérieure dans le tissu rétro-discal, absence de résistance. Au-delà de 1,5 mL, le produit reflue dans les tissus mous et la douleur post-injection augmente sans bénéfice.' },
    { titre: 'Arthrocentèse (variante)', texte: 'Deux aiguilles 19–21 G placées dans l\'espace supérieur (entrée postérieure, sortie antérieure), lavage au sérum physiologique **100 à 300 mL** en circuit ouvert, sous anesthésie locale et éventuellement bloc auriculo-temporal. Mobilisation douce en fin de lavage, puis instillation de corticoïde ou d\'acide hyaluronique avant retrait. Variante à une seule aiguille possible.' },
    { titre: 'Après le geste', texte: 'Compression douce 2 min. Vérifier immédiatement : **motricité faciale** (grimace, occlusion palpébrale, sourire), ouverture buccale mesurée en millimètres (inter-incisive), absence de vertige. Consignes : alimentation molle 48 h, pas de chewing-gum, pas de grande ouverture forcée, glace 10 min × 3 le premier jour, reprise de la kinésithérapie et port de la gouttière dès le lendemain.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Poussée douloureuse arthrosique ou arthrite inflammatoire | Corticoïde **non ou peu particulaire** : dexaméthasone 4 mg, ou bétaméthasone **phosphate soluble** (Célestène® 4 mg/mL), dilué ou non dans 0,3–0,5 mL de lidocaïne 1 % | **0,5–1 mL** | Effet rapide sur la composante inflammatoire. **Ne pas répéter** au-delà de 2, exceptionnellement 3 fois par articulation, espacées d\'au moins 3 mois — risque de dégradation cartilagineuse et de résorption condylienne |
| Arthrose, entretien, patient jeune | **Acide hyaluronique** de faible volume (présentations 0,5–1 mL) | **0,5–1 mL** | Schémas publiés très variables : injection unique ou série de 3 à 5 injections hebdomadaires. Efficacité globalement comparable au corticoïde à court terme, avec un meilleur profil sur la répétition |
| Arthrose évoluée, échec des précédents | **PRP** (0,5–1 mL de plasma riche en plaquettes) | 0,5–1 mL | Signal favorable dans plusieurs revues, protocoles de préparation non standardisés, non remboursé — à présenter comme une option de deuxième intention, pas comme un standard |
| Anesthésie locale du geste / bloc test | Lidocaïne 1 % ou ropivacaïne 0,2 % | 0,3–0,5 mL intra-articulaire, 1–2 mL en sous-cutané | Un soulagement franc et immédiat confirme l\'origine articulaire de la douleur : information de grande valeur avant tout geste répété |
| Arthrocentèse | Sérum physiologique | **100–300 mL** de lavage, puis 0,5–1 mL de corticoïde ou d\'AH | Le lavage lui-même est le traitement (levée des adhérences, élimination des médiateurs) |

**Volumes** : l\'espace supérieur contient **1 à 1,5 mL**. Injecter davantage ne remplit pas mieux l\'articulation, cela distend la capsule et fait mal. Ici, la retenue est technique, pas prudentielle.

**Corticoïde particulaire ou non ?** L\'injection est **intra-articulaire**, dans un espace clos et sans artère terminale dans l\'axe de l\'aiguille : un corticoïde particulaire n\'est pas formellement proscrit. Mais l\'artère temporale superficielle est à quelques millimètres et l\'anastomose avec le réseau orbitaire existe : à volume et bénéfice égaux, **préférer une forme soluble** — dexaméthasone 4 mg ou bétaméthasone phosphate (Célestène® injectable 4 mg/mL). Attention aux noms de marque : **Diprostène® et Célestène® Chronodose sont des suspensions particulaires** (dipropionate, acétate), tout comme Dépo-Médrol® et Kenacort retard®. La **triamcinolone hexacétonide (Hexatrione®)** est réservée à l\'intra-articulaire par son RCP mais destinée aux grosses articulations : son emploi dans l\'ATM n\'est pas une pratique établie — **à confirmer avant tout usage**.

**Doses maximales d\'AL** : sans objet à ces volumes ; ne compter que le cumul si l\'on associe blocs de branche et infiltrations dans la même séance.`,

  variantes: [
    { titre: 'Arthrocentèse (lavage articulaire)', texte: `Geste de référence du **déplacement discal irréductible avec limitation d\'ouverture** (« closed lock ») et des arthralgies réfractaires. Principe : distendre puis laver l\'espace supérieur pour lever les adhérences disco-temporales, éliminer les médiateurs inflammatoires et restaurer la lubrification.

Technique à deux aiguilles : une aiguille d\'entrée postérieure dans l\'espace supérieur, une aiguille de sortie antérieure, lavage au sérum physiologique **100 à 300 mL**, mobilisation douce en fin de lavage, instillation terminale de corticoïde ou d\'acide hyaluronique. Variante à **une seule aiguille** (injection/aspiration alternées) décrite, plus simple, moins efficace pour le lavage. Décrite initialement sans échographie (Nitzan) ; l\'échoguidage améliore le placement et diminue le nombre de tentatives.

Résultats : gain d\'ouverture buccale et baisse de la douleur bien documentés dans le closed lock. C\'est probablement le geste au meilleur rapport bénéfice/risque de cette fiche.` },
    { titre: 'Bloc du nerf auriculo-temporal — le test diagnostique à ne pas oublier', texte: 'Avant d\'infiltrer une ATM douloureuse sans signe articulaire franc, faire un **bloc du nerf auriculo-temporal** (1–2 mL, en arrière de l\'artère temporale superficielle — fiche trijumeau). S\'il soulage complètement une douleur pré-auriculaire, la piste est neuropathique ou référée, pas arthrogène, et l\'aiguille intra-articulaire ne sert à rien. Ce test prend cinq minutes et évite des séries d\'infiltrations inutiles.' },
    { titre: 'Compartiment inférieur (disco-condylien)', texte: 'Cible plus rarement retenue, réservée aux situations où le compartiment supérieur ne peut être atteint ou en cas d\'adhérence disco-condylienne. Volume encore plus faible (0,5–0,9 mL), abord plus difficile car l\'espace n\'existe qu\'à l\'état virtuel. À réserver à des équipes entraînées ; **données très limitées**.' },
    { titre: 'Prise en charge de la composante musculaire', texte: 'Presque toute arthropathie de l\'ATM s\'accompagne d\'une contracture des masséters, des temporaux et des ptérygoïdiens. Les traiter dans la même séance ou dans la foulée (points gâchettes, étirements, gouttière, relaxation) est ce qui transforme un soulagement de trois semaines en un résultat durable. Une infiltration articulaire isolée dans un tableau mixte donne un résultat partiel — et le patient conclut que « ça n\'a pas marché ».' },
  ],

  pearls: [
    'Trier d\'abord **arthrogène vs myogène** : bruit articulaire, douleur au chargement, limitation avec déviation → articulation ; douleur des masséters à la palpation, ouverture limitée par contracture, absence de bruit → muscle. L\'aiguille intra-articulaire ne répond qu\'à la première question.',
    '**La manœuvre d\'ouverture buccale est le geste**, pas la ponction : bouche fermée, l\'interligne est virtuel et la cible n\'existe pas.',
    'Balayage **dynamique** systématique (ouverture/fermeture filmée) : il confirme le repérage, montre le disque et révèle un épanchement — un épanchement visible est un argument fort pour infiltrer.',
    'Seringue de 1 mL Luer-lock : la pression d\'injection est une information diagnostique, une seringue de 10 mL ne la transmet pas.',
    'Une aspiration ramenant du liquide trouble ou du sang **arrête le geste** : penser arthrite septique ou hémarthrose, et ne pas injecter de corticoïde.',
    'Mesurer l\'**ouverture inter-incisive en millimètres** avant et après, et à chaque consultation : c\'est le critère de jugement objectif de cette pathologie, bien plus fiable que l\'EN seule.',
  ],
  pieges: [
    'Infiltrer une dysfonction **myogène** : le geste sera techniquement réussi et cliniquement inutile.',
    'Piquer **trop en arrière** : on est dans le tissu rétro-discal, richement innervé — injection douloureuse, sans effet, et parfois aggravation.',
    'Injecter **dans le disque** : résistance élevée, pas d\'élargissement de l\'interligne. Si l\'injection est dure, on n\'est pas au bon endroit.',
    'Injecter **trop de volume** : au-delà de 1–1,5 mL le produit reflue dans les tissus mous et la douleur post-injection domine le tableau des 48 h.',
    'Répéter les corticoïdes « parce que la première a bien marché » : c\'est ainsi qu\'on abîme un fibrocartilage déjà fragile, particulièrement chez le sujet jeune.',
    'Négliger le Doppler : l\'artère temporale superficielle est verticale, superficielle, et pile en avant du tragus.',
    'Faire le geste sans filière : l\'ATM se cogère avec l\'odontologiste (gouttière, occlusion) et le chirurgien maxillo-facial. Une infiltration isolée, sans gouttière ni rééducation, ne tient pas trois semaines.',
  ],
  complications: [
    '**Hématome pré-auriculaire** (artère ou veine temporale superficielle) : bénin mais visible. CAT : compression 3–5 min, glace. Prévention : Doppler et décalage du point d\'entrée.',
    '**Parésie faciale transitoire** par diffusion de l\'anesthésique local vers le tronc du facial : régressive en 2 à 6 h. CAT : protection oculaire (larmes artificielles, occlusion nocturne), réassurance, information écrite. Prévention : rester superficiel, ne pas dériver en caudal.',
    '**Douleur post-injection et gêne à la mastication** pendant 24–72 h : fréquentes, à annoncer. Glace, antalgique de palier 1, alimentation molle.',
    '**Malocclusion transitoire** liée à l\'épanchement induit : régressive en quelques heures.',
    '**Arthrite septique de l\'ATM** : rarissime mais grave (trismus fébrile, tuméfaction, douleur intense croissante). CAT : avis chirurgical maxillo-facial en urgence, ponction pour analyse, antibiothérapie — pas d\'attentisme.',
    '**Lésion du disque ou du fibrocartilage** par ponction répétée ou par injections cortisoniques itératives : résorption condylienne décrite, notamment chez le sujet jeune et dans l\'arthrite juvénile idiopathique. C\'est l\'argument principal du plafonnement des corticoïdes.',
    '**Ponction du conduit auditif externe** si l\'aiguille est trop postérieure : douloureuse, sans conséquence durable, mais elle signe une erreur de repérage.',
    '**Réaction inflammatoire post-viscosupplémentation ou post-PRP** : poussée douloureuse de 24–72 h, à distinguer d\'une infection par l\'absence de fièvre et l\'évolution spontanément régressive.',
  ],
  securite: [
    '**Faible risque hémorragique (ASRA-ESRA 2018)** : site superficiel et compressible, pas d\'interruption systématique des antiagrégants ; anticoagulants au cas par cas.',
    '**Doppler couleur avant chaque ponction** sur les vaisseaux temporaux superficiels, sans comprimer (la veine s\'efface).',
    '**Seringue Luer-lock de 1–2 mL** et injection lente : la résistance est le principal signal de mauvais positionnement.',
    '**Aspiration systématique** avant injection : liquide trouble ou hémorragique = arrêt du geste et réorientation.',
    'Compresse dans le conduit auditif, antiseptique non alcoolique près de l\'œil et de l\'oreille.',
    '**Plafonner les corticoïdes** : 2 (exceptionnellement 3) par articulation, espacées ≥ 3 mois, et tracer le compte cumulé dans le dossier — c\'est une information que personne d\'autre ne suivra.',
    'Vérifier la **motricité faciale** avant la sortie et mesurer l\'ouverture inter-incisive.',
  ],

  suivi: `- **J0** : EN avant / à 30 min ; **ouverture inter-incisive maximale mesurée en mm** avant et après (critère objectif principal) ; latéralité et propulsion ; motricité faciale avant la sortie.
- **J7–J15** : EN, ouverture, bruits articulaires, alimentation (solide/molle), sommeil. Reprise effective de la gouttière et de la kinésithérapie — le vérifier explicitement, c\'est le déterminant du résultat.
- **1 mois** : décision — réponse franche et durable → surveillance ; réponse partielle ou brève → discuter arthrocentèse (surtout si limitation d\'ouverture) ou acide hyaluronique en série ; échec complet → **réinterroger le diagnostic** (composante myogène dominante ? névralgie auriculo-temporale ? douleur référée cervicale ?) et adresser au chirurgien maxillo-facial.
- **3–6 mois** : EN, ouverture, retentissement fonctionnel et alimentaire, nombre cumulé d\'injections de corticoïde dans l\'articulation (à tracer nominativement).
- **Toujours en filière** : odontologiste pour la gouttière et l\'occlusion, kinésithérapeute maxillo-facial, chirurgien maxillo-facial en cas d\'échec. L\'algologue est ici un maillon, pas la chaîne.`,

  evidence: `- **Arthrocentèse dans le déplacement discal irréductible** : c\'est le geste le mieux étayé de cette fiche. Depuis la description princeps (Nitzan et coll., début des années 1990), de nombreuses séries et essais rapportent un gain d\'ouverture buccale et une baisse de la douleur. Preuve **modérée**, largement admise en pratique maxillo-faciale.
- **Corticoïde vs acide hyaluronique** : plusieurs revues systématiques et méta-analyses ont comparé les deux dans l\'arthropathie de l\'ATM. La conclusion la plus constante est une **efficacité comparable à court terme**, avec un avantage de tolérance pour l\'acide hyaluronique lorsqu\'il faut répéter. **Aucune de ces méta-analyses n\'établit une supériorité franche** : effectifs faibles, protocoles hétérogènes (nombre d\'injections, poids moléculaire, compartiment ciblé), risque de biais élevé.
- **Méta-analyses en réseau des traitements de la DTM arthrogène** : elles classent globalement l\'arthrocentèse et les injections intra-articulaires au-dessus du placebo, sans hiérarchie robuste entre produits. À lire comme une confirmation que « faire quelque chose dans l\'articulation » aide, pas comme un argument pour un produit précis.
- **PRP** : revues systématiques favorables sur la douleur et l\'ouverture, mais protocoles de préparation non standardisés et comparateurs hétérogènes. **Preuve faible à modérée**, option de deuxième intention.
- **Échoguidage vs technique aveugle** : quelques travaux comparatifs suggèrent un meilleur placement et moins de tentatives sous échographie ; **aucune démonstration sur les complications graves**, qui sont trop rares pour être étudiées à cette échelle. L\'argument est anatomique.
- **Nosologie** : les critères diagnostiques internationaux de la DTM (DC/TMD) séparent explicitement les formes **myogènes** et **arthrogènes**. Toute la littérature d\'infiltration porte sur la seconde. Appliquer ces résultats à une DTM myogène est une erreur de lecture, et c\'est la plus fréquente.
- **Ce que la littérature ne dit pas** : pas de consensus sur le nombre optimal d\'injections d\'acide hyaluronique, pas de donnée solide au-delà de 12 mois, pas de comparaison directe arthrocentèse échoguidée vs à l\'aveugle sur des critères cliniques durs, et un seuil de sécurité des corticoïdes répétés dans l\'ATM qui repose sur des séries et sur un raisonnement physiopathologique, pas sur un essai.`,

  references: [
    { auteurs: 'Nitzan DW, Dolwick MF, Martinez GA', titre: 'Temporomandibular joint arthrocentesis: a simplified treatment for severe, limited mouth opening', revue: 'J Oral Maxillofac Surg', annee: '1991', type: 'description princeps / série', verif: false },
    { auteurs: 'Schiffman E, Ohrbach R, Truelove E, et al.', titre: 'Diagnostic Criteria for Temporomandibular Disorders (DC/TMD) for clinical and research applications', revue: 'J Oral Facial Pain Headache', annee: '2014', type: 'critères diagnostiques', verif: false, note: 'Sépare formes myogènes et arthrogènes — le tri qui conditionne l\'indication.' },
    { auteurs: 'Machado E, Bonotto D, Cunali PA', titre: 'Intra-articular injections with corticosteroids and sodium hyaluronate for treating temporomandibular joint disorders: a systematic review', revue: 'Dental Press J Orthod', annee: '2013', type: 'revue systématique', verif: false },
    { auteurs: 'Goiato MC, da Silva EVF, de Medeiros RA, et al.', titre: 'Are intra-articular injections of hyaluronic acid effective for the treatment of temporomandibular disorders? A systematic review', revue: 'Int J Oral Maxillofac Surg', annee: '2016', type: 'revue systématique', verif: false },
    { auteurs: 'Liu Y, Wu J, Fei W, et al.', titre: 'Is there a difference in intra-articular injections of corticosteroids, hyaluronate, or placebo for temporomandibular osteoarthritis?', revue: 'J Oral Maxillofac Surg', annee: '2018', type: 'méta-analyse', verif: false },
    { auteurs: 'Al-Moraissi EA, Wolford LM, Ellis E, Neff A', titre: 'The hierarchy of different treatments for arthrogenous temporomandibular disorders: a network meta-analysis of randomized clinical trials', revue: 'J Craniomaxillofac Surg', annee: '2020', type: 'méta-analyse en réseau', verif: false },
    { auteurs: 'Bousnaki M, Bakopoulou A, Koidis P', titre: 'Platelet-rich plasma for the therapeutic management of temporomandibular joint disorders: a systematic review', revue: 'Int J Oral Maxillofac Surg', annee: '2018', type: 'revue systématique', verif: false },
    { auteurs: 'Sivri MB, Ozkan Y, Pekiner FN, Gocmen G', titre: 'Comparison of ultrasound-guided and conventional arthrocentesis of the temporomandibular joint', revue: 'Br J Oral Maxillofac Surg', annee: '2016', type: 'étude comparative', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'atm-repere', section: 'sonoanatomie', titre: 'ATM, coupe oblique pré-auriculaire, bouche fermée — repérage',
      legende: 'Sonde en avant du tragus, dans l\'axe de l\'arcade zygomatique. Contour osseux temporal : l\'éminence articulaire descend en avant (point le plus profond), la fosse mandibulaire est la concavité postérieure (point le plus superficiel). Bouche fermée, la tête du condyle est logée dans la fosse, coiffée du disque ; l\'espace articulaire supérieur, entre le disque et le temporal, n\'est qu\'une fine interface virtuelle. Les vaisseaux temporaux superficiels montent en avant du tragus, superficiels à la capsule ; le tronc du facial est plus profond et plus bas, dans la parotide.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Oblique, axe de l\'arcade zygomatique', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 7, fatBelow: 16 });
        S.muscle({ path: 'M0 66 L214 66 L214 172 L0 192 Z', label: 'Masséter', at: [88, 118], opacity: 0.45 });
        S.organ({ path: 'M300 66 L640 66 L640 186 L332 172 Z', label: 'Parotide', at: [612, 146], anchor: 'end', opacity: 0.5, small: true });
        S.artery({ x: 508, y: 94, r: 9 });
        S.vein({ x: 548, y: 98, rx: 12, ry: 9 });
        S.label({ x: 300, y: 124, text: 'A. et V. temporales superficielles', anchor: 'middle', cls: 'lbl-artery', small: true, lead: [499, 98] });
        S.bone({ path: 'M30 200 Q90 196 150 214 Q212 242 270 216 Q334 184 400 174 Q446 172 472 186', shadow: false });
        S.label({ x: 168, y: 272, text: 'Éminence articulaire (en avant)\net fosse mandibulaire (en arrière)', anchor: 'middle', cls: 'lbl-bone', small: true, lead: [300, 200] });
        S.region({ path: 'M338 208 Q420 172 502 204 L498 222 Q420 190 342 226 Z', fill: '#9aa4ae', opacity: 0.32 });
        S.label({ x: 150, y: 322, text: 'Espace articulaire\nsupérieur (virtuel)', anchor: 'middle', cls: 'lbl-region', small: true, lead: [352, 214] });
        S.cartilage({ path: 'M326 256 Q420 180 516 250 L508 268 Q420 200 334 274 Z' });
        S.label({ x: 424, y: 322, text: 'Disque articulaire', anchor: 'middle', cls: 'lbl-cart', small: true, lead: [424, 240] });
        S.bone({ path: 'M330 280 Q420 202 512 274', label: 'Tête du condyle', at: [424, 356], ldy: 0, small: true });
        S.fascia({ points: [[340, 158], [420, 138], [500, 160], [548, 206]], width: 1.5, opacity: 0.75 });
        S.label({ x: 604, y: 176, text: 'Capsule latérale', anchor: 'end', cls: 'lbl-fascia', small: true, lead: [532, 190] });
        S.label({ x: 616, y: 244, text: 'CAE', anchor: 'end', cls: 'lbl-bone', small: true });
        S.nerve({ x: 600, y: 306, r: 10 });
        S.label({ x: 592, y: 352, text: 'Tronc du n. facial\n(plus profond, plus bas)', anchor: 'end', cls: 'lbl-nerve', small: true, lead: [598, 316] });
      },
    },
    {
      id: 'atm-geste', section: 'technique', titre: 'Infiltration de l\'espace supérieur — bouche entrouverte, aiguille in-plane',
      legende: 'Bouche entrouverte de 15 à 25 mm : la tête du condyle et son disque se translatent **en avant**, sous l\'éminence, et la fosse mandibulaire se vide — c\'est cette partie postérieure de l\'espace articulaire supérieur qui devient ponctionnable. L\'aiguille arrive de postérieur en antérieur, passe en arrière du bord postérieur de la fosse, franchit la capsule et s\'arrête dans l\'interligne sans contact osseux appuyé. Critère de fin : élargissement visible de l\'interligne pour 0,5 à 1 mL, sans résistance et sans diffusion dans le tissu rétro-discal, plus profond et plus postérieur.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Oblique pré-auriculaire, bouche entrouverte', type: 'in-plane, postéro-antérieur' });
        S.skin({ thickness: 7, fatBelow: 16 });
        S.muscle({ path: 'M0 66 L200 66 L200 172 L0 192 Z', label: 'Masséter', at: [84, 110], opacity: 0.45 });
        S.organ({ path: 'M300 66 L640 66 L640 186 L332 172 Z', label: 'Parotide', at: [540, 150], opacity: 0.5, small: true });
        S.artery({ x: 448, y: 90, r: 9 });
        S.label({ x: 384, y: 116, text: 'A. temporale sup.', anchor: 'end', cls: 'lbl-artery', small: true, lead: [440, 94] });
        S.bone({ path: 'M30 200 Q90 196 150 214 Q212 242 270 216 Q334 184 400 174 Q446 172 472 186', shadow: false });
        S.label({ x: 56, y: 274, text: 'Éminence articulaire', anchor: 'start', cls: 'lbl-bone', small: true, lead: [190, 238] });
        S.region({ path: 'M128 290 Q215 240 320 284 Q400 320 464 300 L470 190 Q446 174 400 176 Q334 186 270 218 Q212 244 150 216 Z', fill: '#9aa4ae', opacity: 0.35 });
        S.label({ x: 120, y: 172, text: 'Espace articulaire supérieur\n— fosse vacante = cible', anchor: 'middle', cls: 'lbl-region', small: true, lead: [330, 226] });
        S.cartilage({ path: 'M114 310 Q215 232 322 304 L314 324 Q215 254 122 330 Z' });
        S.label({ x: 200, y: 372, text: 'Disque', anchor: 'middle', cls: 'lbl-cart', small: true, lead: [200, 296] });
        S.bone({ path: 'M120 338 Q215 258 316 332', label: 'Condyle translaté en avant', at: [216, 402], ldy: 0, small: true });
        S.fascia({ points: [[290, 180], [370, 156], [450, 164], [516, 204], [566, 252]], width: 1.5, opacity: 0.75 });
        S.label({ x: 340, y: 146, text: 'Capsule latérale', anchor: 'middle', cls: 'lbl-fascia', small: true, lead: [382, 158] });
        S.label({ x: 610, y: 332, text: 'Tissu rétro-discal —\nne pas y injecter', anchor: 'end', cls: 'lbl-region', small: true, lead: [452, 312] });
        S.needle({ from: [640, 100], to: [434, 248], label: '25–27 G 25–30 mm' });
        S.spread({ x: 408, y: 252, rx: 54, ry: 16, label: '0,5–1 mL' });
      },
    },
  ],

  checklist: [
    'Tri arthrogène / myogène fait et écrit : bruit articulaire, douleur au chargement, limitation avec déviation ?',
    'Traitement conservateur (gouttière, rééducation, AINS) réellement conduit pendant 4 à 6 semaines',
    'Ouverture inter-incisive mesurée en millimètres AVANT le geste',
    'Compresse dans le conduit auditif ; antiseptique non alcoolique près de l\'œil et de l\'oreille',
    'Balayage dynamique ouverture/fermeture fait avant la désinfection ; ouverture de 15–25 mm tenue par le patient',
    'Doppler sur les vaisseaux temporaux superficiels, sans comprimer',
    'Seringue Luer-lock de 1–2 mL ; volume total plafonné à 1 mL ; jamais d\'injection forcée',
    'Nombre cumulé d\'injections de corticoïde dans cette articulation vérifié et tracé (max 2–3, espacées ≥ 3 mois)',
    'Motricité faciale et ouverture inter-incisive contrôlées avant la sortie ; consignes alimentation molle 48 h',
  ],
});
