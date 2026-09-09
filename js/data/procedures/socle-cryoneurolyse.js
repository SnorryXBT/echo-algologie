/* Chapitre socle : cryoneurolyse échoguidée — mécanisme, matériel, cibles, technique, preuves. */
ECHO.register({
  id: 'socle-cryoneurolyse',
  titre: 'Cryoneurolyse échoguidée',
  titreCourt: 'Cryoneurolyse',
  en: 'Ultrasound-guided percutaneous cryoneurolysis (cryoanalgesia) — mechanism, cryoprobes, freeze–thaw cycles, targets, duration of effect, complications',
  region: 'socle',
  types: ['socle', 'interventionnel'],
  niveau: 2,
  grade: 'Modérée pour la douleur aiguë périopératoire (ECR contre sham), faible pour la douleur chronique (séries, consensus d\'experts) ; hétérogénéité majeure des protocoles de congélation',
  maj: '2026-09',
  motsCles: ['cryoneurolyse', 'cryoanalgésie', 'cryoablation', 'cryosonde', 'boule de glace', 'iceball', 'dégénérescence wallérienne', 'Sunderland 2', 'iovera', 'Cryo-S', 'Metrum', 'protoxyde d\'azote', 'gel-dégel', 'névrome', 'géniculés', 'intercostaux'],
  resume: `La cryoneurolyse congèle le nerf pour produire une lésion de Sunderland grade 2 : l'axone et la myéline dégénèrent (dégénérescence wallérienne) tandis que l'endonèvre, le périnèvre et l'épinèvre restent intacts. Le nerf repousse sur ce tuteur conservé à raison de 1 à 2 mm par jour, ce qui donne un effet analgésique long — classiquement 3 à 6 mois — puis une récupération complète, sans névrome ni douleur de déafférentation décrits. C'est la seule technique de ce mémo qui offre une durée d'effet de plusieurs mois avec une réversibilité assurée, ce qui en fait l'alternative logique à la radiofréquence thermique sur les nerfs cutanés purement sensitifs. La boule de glace est directement visible en échographie, ce qui donne un critère de fin visuel dont ne dispose ni le bloc ni la radiofréquence. Le prix à payer : un matériel dédié et coûteux, des cryosondes de gros calibre, des protocoles de congélation non standardisés, et une littérature dominée par la douleur périopératoire plus que par la douleur chronique.`,

  flash: {
    position: 'dorsal', positionNote: 'variable selon la cible ; reproduire l\'installation du bloc test',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 2–5 cm ; la cible doit être à moins de 4–5 cm sous la peau pour que la sonde l\'atteigne',
    approche: 'in-plane', approcheNote: 'la boule de glace doit être vue se former autour du nerf : hors du plan, on ne contrôle rien',
    aiguille: 'Cryosonde 14–18 G (1,3–2,0 mm) selon le système, 80–120 mm ; introducteur ou trocart 12–14 G pour les sondes larges ; certains dispositifs utilisent des micro-aiguilles fines à protoxyde d\'azote pour les nerfs très superficiels',
    cible: 'Boule de glace hyperéchogène avec cône d\'ombre englobant le nerf sur tout son diamètre — c\'est le critère de fin visuel',
    injectat: 'Anesthésie locale du trajet uniquement (lidocaïne 1 %, 3–10 mL) ; hydrodissection de sérum entre la peau et la cible si le nerf est très superficiel, pour protéger le derme',
    duree: '15–25 min pour une cible · 30–45 min pour plusieurs intercostaux',
  },

  indications: [
    `**Douleur chronique focale, de topographie nerveuse identifiée, ayant répondu à un bloc test** — c'est la condition d'entrée, comme pour la radiofréquence.`,
    `**Névromes cicatriciels et de moignon d'amputation** : indication où le rapport bénéfice/risque de la cryoneurolyse est le plus favorable, la cible étant visible et purement sensitive.`,
    `**Gonarthrose douloureuse** non opérable : cryoneurolyse des nerfs géniculés, ou cryoneurolyse préopératoire avant PTG pour réduire la douleur et la consommation d'opioïdes.`,
    `**Douleurs de paroi thoracique** : intercostaux après thoracotomie, après fractures de côtes, névralgies intercostales post-zostériennes ou post-chirurgicales.`,
    `**Névralgies de nerfs cutanés** : cutané latéral de cuisse (méralgie paresthésique), ilio-inguinal et ilio-hypogastrique après cure de hernie, sous-costal, branche infrapatellaire du saphène, sural, radial superficiel.`,
    `**Névralgies occipitales** (grand et petit occipital) réfractaires aux blocs répétés.`,
    `**Épaule douloureuse chronique** non opérable : nerf suprascapulaire, plutôt à l'échancrure spinoglénoïdienne pour épargner le supra-épineux.`,
    `**Névralgie pudendale** : décrite, littérature limitée à des séries ; l'accès et la profondeur en font une indication d'équipe entraînée.`,
    `**Alternative explicite à la RF thermique** quand la réversibilité est un objectif : nerf cutané d'un territoire visible, patient jeune, doute sur la cible.`,
  ],
  contreIndications: [
    `**Absolues** : refus ; infection cutanée ou générale ; **cryoglobulinémie, maladie des agglutinines froides, cryofibrinogénémie, urticaire au froid, phénomène de Raynaud sévère** — la seule famille de contre-indications spécifique à cette technique ; nerf **moteur pur ou mixte à fonction motrice utile** (le bloc moteur dure aussi longtemps que l'analgésie).`,
    `**Relatives** : troubles de la cicatrisation ou artériopathie évoluée du territoire ; peau fine, foncée ou glabre au point de ponction (risque de dépigmentation et d'alopécie) ; nerf à moins de 10 mm de la peau sans possibilité de protection cutanée.`,
    `Anticoagulation : les cryosondes sont de **gros calibre** (14–18 G), ce qui pèse davantage que pour un bloc. Cibles superficielles compressibles = faible risque au sens ASRA-ESRA 2018 ; cibles profondes ou non compressibles = risque intermédiaire à élevé, gestion selon le tableau ASRA.`,
    `Stimulateur cardiaque : pas de contre-indication propre à la cryoneurolyse (pas de courant traversant le patient) — c'est même un argument face à la RF monopolaire, à condition de ne pas utiliser la fonction de neurostimulation intégrée sans précaution.`,
    `Bloc test négatif ou non fait.`,
  ],
  alternatives: `Face au même bloc test positif, trois options : **radiofréquence pulsée** (pas de destruction, effet 3–6 mois, matériel plus répandu, aucune contrainte de calibre), **radiofréquence thermique** (effet 6–12 mois, mais neurite et risque de douleur de déafférentation), **cryoneurolyse** (effet 3–6 mois, réversibilité assurée, pas de neurite de déafférentation décrite, mais matériel dédié et cryosondes larges).

Le raisonnement pratique :
- nerf **cutané purement sensitif d'un territoire visible** (cutané latéral de cuisse, ilio-inguinal, sural, radial superficiel, névrome) → la cryoneurolyse est le meilleur compromis, précisément parce qu'un échec est réversible ;
- nerf **mixte ou proche d'un tronc moteur** → PRF ;
- nerf **articulaire pur, profond, difficile d'accès** (branches médiales, branches sacrées) → radiofréquence, sous radioscopie ;
- **compression ou adhérence** documentée → hydrodissection d'abord.

Il n'existe **aucun essai randomisé comparant directement cryoneurolyse et radiofréquence sur une même cible** : ce choix relève du raisonnement, pas de la preuve (à confirmer si une telle étude paraît).`,

  anatomie: `**Le mécanisme, et ce qu'il impose.** L'application de froid extrême (−20 à −100 °C selon les systèmes ; −50 à −70 °C au contact du nerf dans les descriptions cliniques) provoque la formation de cristaux de glace intra- et extracellulaires, un choc osmotique et une ischémie par vasoconstriction puis thrombose de la microcirculation endoneurale. L'axone et la gaine de myéline sont détruits ; **l'endonèvre, le périnèvre et l'épinèvre survivent**. C'est la définition exacte de l'**axonotmésis, lésion de grade 2 de Sunderland**.

La conséquence est double, et c'est tout l'intérêt de la technique :
1. La dégénérescence wallérienne se fait en aval de la lésion, donc l'analgésie est complète dans le territoire — pas un simple bloc partiel.
2. Le tube conjonctif étant intact, la repousse axonale est **guidée** : environ **1 à 2 mm par jour**, sans bourgeonnement anarchique, donc **sans névrome** et sans douleur de déafférentation. Une cible située à 15 cm du territoire cutané récupérera donc en 75 à 150 jours, ce qui recoupe la durée d'effet observée de 3 à 6 mois.

**Il n'y a pas de sélectivité fibre par fibre.** La cryoneurolyse ne préserve pas les grosses fibres myélinisées : elle bloque le sensitif **et** le moteur. C'est pourquoi la sélection des cibles porte sur des nerfs à fonction motrice nulle ou négligeable — c'est la règle principale de la technique.

**La boule de glace.** Le refroidissement se fait par détente d'un gaz sous pression dans la pointe de la sonde (effet Joule-Thomson) : protoxyde d'azote (−89 °C) ou dioxyde de carbone (−78 °C) selon les systèmes. La glace se forme autour de la pointe en un ellipsoïde dont le grand axe suit l'axe de la sonde, et dont la taille dépend du calibre de la sonde, du gaz, de la durée du cycle et de la perfusion tissulaire locale. Elle apparaît en échographie comme une **structure hyperéchogène convexe avec cône d'ombre postérieur franc** : on voit son bord antérieur, pas son intérieur.

### Ce qui compte pour le geste
- **Le nerf doit être dans la boule, pas à côté** : la glace ne diffuse pas comme un injectat. Une sonde placée à 3 mm du nerf peut ne le congeler qu'en surface — c'est le mécanisme d'échec identifié dans les essais négatifs sur le nerf sciatique de la cuisse (nerf trop volumineux et trop profond pour être congelé sur toute son épaisseur).
- **Le calibre du nerf est un critère de sélection.** Un nerf de 2 à 5 mm est congelé de part en part ; un tronc de 12 mm ne l'est pas de façon fiable avec une sonde unique.
- **La profondeur limite la technique** : au-delà de 4–5 cm, la boule de glace devient difficile à voir et le nerf difficile à englober.
- **La peau est la structure à protéger** : la glace qui atteint le derme donne gelure, dépigmentation et alopécie locale. Prévoir 10 mm de tissu entre la boule et la peau, ou créer cet espace par une hydrodissection de sérum.
- **Une artère satellite est un puits de chaleur** : elle réchauffe le tissu et déforme la boule de glace, ce qui peut faire échouer la congélation du côté vasculaire du nerf.`,

  installation: {
    patient: `Reproduire l'installation du bloc test. Décubitus adapté à la cible, membre positionné pour éloigner la cible des structures à risque. Le geste dure plusieurs minutes de congélation immobile : installer le patient **confortablement pour 20 minutes**, pas pour 2.

Voie veineuse recommandée. Sédation légère possible : la ponction et la mise en place de la sonde sont douloureuses (calibre), la congélation elle-même est **anesthésiante en quelques secondes**. Il faut en revanche garder le patient capable de signaler une douleur cutanée à type de brûlure par le froid.

Prévenir explicitement, avant le geste, que le territoire sera **engourdi pendant plusieurs mois** et que la sensibilité reviendra progressivement : un patient non prévenu vit l'hypoesthésie comme une complication.`,
    operateur: `Opérateur du côté de la cible, écran en face, console de cryothérapie et bouteille de gaz vérifiées avant le champ (pression suffisante pour le nombre de cycles prévus — une bouteille vide en cours de cycle ruine le geste). Tester la sonde à vide selon la procédure du constructeur (formation de glace visible sur la pointe) **avant** de la placer.

Sens de ponction choisi pour que la sonde arrive **le long du nerf** quand c'est possible, comme en radiofréquence : la boule de glace est allongée selon l'axe de la sonde, donc un placement tangentiel congèle un segment de nerf plutôt qu'un point.`,
    sonde: `- Linéaire 6–13 MHz, preset nerf, profondeur ajustée pour voir le nerf **et** l'espace entre lui et la peau.
- Doppler couleur avant ponction : repérer les vaisseaux satellites (puits de chaleur et risque de ponction avec une sonde 14 G).
- Le gain doit être réglé pour voir apparaître la **ligne hyperéchogène convexe** de la boule de glace ; ne pas surcompenser en TGC profond, l'ombre postérieure est un signe utile.
- Prévoir de figer et mesurer la boule de glace à la fin du premier cycle : c'est la traçabilité du geste.`,
  },

  reperage: [
    { titre: 'Retrouver la cible du bloc test', texte: 'Mêmes repères, même coupe, même orientation qu\'au bloc test positif. Identifier le nerf en coupe transversale, mesurer son diamètre et sa profondeur : ces deux chiffres décident de la faisabilité (nerf de 2–5 mm, profondeur < 4–5 cm).' },
    { titre: 'Doppler', texte: 'Repérer l\'artère satellite : elle est à la fois un obstacle à la ponction avec une sonde de gros calibre et un puits de chaleur qui déformera la boule de glace du côté vasculaire.' },
    { titre: 'Mesurer la distance nerf–peau', texte: 'Si elle est inférieure à 10 mm, prévoir la protection cutanée : hydrodissection sous-cutanée de 5–10 mL de sérum entre la peau et la cible, ou compresse tiède, ou dispositif à réchauffeur cutané intégré selon le matériel.' },
    { titre: 'Choisir l\'axe tangentiel', texte: 'Basculer la sonde jusqu\'à trouver la coupe où la cryosonde pourra arriver dans l\'axe du nerf. À défaut, une approche perpendiculaire reste possible pour un nerf fin, mais elle ne congèle qu\'un point.' },
    { titre: 'Si le nerf n\'est pas individualisable', texte: 'Ne pas congeler un plan : contrairement à un bloc, l\'injectat n\'existe pas pour rattraper une imprécision. Repasser au bloc test, à la PRF, ou renoncer à cette cible.' },
  ],

  sonoanatomie: [
    { structure: 'Nerf cible (transversal)', aspect: 'Nid d\'abeilles, fascicules hypoéchogènes dans un épinèvre hyperéchogène', repere: 'Mesurer le diamètre : au-delà de 6–8 mm, la congélation transfixiante n\'est pas garantie' },
    { structure: 'Cryosonde', aspect: 'Ligne hyperéchogène épaisse et très échogène (calibre 14–18 G), réverbérations marquées', repere: 'Bien plus visible qu\'une aiguille de bloc, ce qui facilite l\'in-plane' },
    { structure: 'Boule de glace en formation', aspect: 'Arc hyperéchogène convexe naissant à la pointe et s\'élargissant, avec **cône d\'ombre postérieur** franc', repere: 'Seul le bord antérieur est visible ; l\'ombre masque tout ce qui est derrière, y compris le nerf' },
    { structure: 'Artère satellite (Doppler)', aspect: 'Anéchogène pulsatile', repere: 'Puits de chaleur : la boule de glace est amputée de son côté' },
    { structure: 'Plan cutané et derme', aspect: 'Bande hyperéchogène superficielle de 1–3 mm', repere: 'Structure à protéger : 10 mm de marge, ou hydrodissection de sécurité' },
    { structure: 'Nappe d\'hydrodissection de protection', aspect: 'Nappe anéchogène entre la peau et la cible', repere: 'Éloigne le derme de la boule de glace ; contrôler qu\'elle n\'éloigne pas aussi le nerf de la sonde' },
    { structure: 'Plèvre (cibles intercostales)', aspect: 'Ligne hyperéchogène animée d\'un glissement', repere: 'À garder à l\'écran en permanence ; la sonde de gros calibre est peu tolérante à l\'erreur' },
  ],

  technique: [
    { titre: 'Préparation et vérifications', texte: 'Bloc test tracé et positif ; consentement mentionnant l\'engourdissement de plusieurs mois, la gelure cutanée, la dépigmentation et l\'alopécie possibles ; pression de la bouteille de gaz suffisante ; test de la sonde à vide ; asepsie chirurgicale (la ponction est large, l\'introducteur reste en place plusieurs minutes).' },
    { titre: 'Anesthésie locale du trajet', texte: 'Lidocaïne 1 %, 3–10 mL, **sur le trajet et jusqu\'au voisinage de la cible, sans noyer le nerf** : la cryoneurolyse ne dépend d\'aucune stimulation, donc l\'AL est ici sans inconvénient — c\'est une différence pratique importante avec la radiofréquence. Petite incision de 2 mm au bistouri si la sonde est de gros calibre.' },
    { titre: 'Mise en place de la cryosonde', texte: 'Ponction in-plane, sonde amenée **au contact du nerf**, idéalement tangentiellement pour que la boule de glace couvre un segment. Vérifier la position dans deux plans (rotation de 90° de la sonde d\'échographie) avant de congeler : une fois la glace formée, l\'ombre acoustique empêche toute vérification.' },
    { titre: 'Protection cutanée', texte: 'Si la cible est à moins de 10 mm de la peau : hydrodissection sous-cutanée de sérum tiède, ou compresse tiède maintenue à la surface, ou activation du réchauffeur cutané si le matériel en dispose. Ne jamais congeler « à travers » un pannicule mince sans protection.' },
    { titre: 'Cycles de gel–dégel', texte: 'Protocole usuel : **gel 2 min / dégel 30 s à 1 min, répété 2 à 3 fois** (fourchettes rapportées dans la littérature : 1 à 3 min de gel, 2 à 3 cycles). Le cycle de dégel n\'est pas facultatif : c\'est la recristallisation au dégel qui parachève la destruction axonale. Surveiller la croissance de la boule de glace au premier cycle et **arrêter si elle atteint le plan cutané**.' },
    { titre: 'Critère de fin', texte: 'Boule de glace ayant **englobé le nerf sur tout son diamètre** au premier cycle (bord antérieur visible au-delà du nerf des deux côtés), 2 à 3 cycles complétés, absence d\'atteinte cutanée. Figer et mesurer l\'image : c\'est la trace du geste. Retrait de la sonde après dégel complet — jamais sur une sonde encore adhérente à la glace, sous peine d\'arrachement tissulaire.' },
    { titre: 'Après le geste', texte: 'Pansement, glace **contre-indiquée** sur la zone (le froid a déjà été appliqué), surveillance 30 min. Tester et cartographier l\'hypoesthésie obtenue : elle valide immédiatement le geste. Consignes écrites : engourdissement de plusieurs mois, protection du territoire insensible (brûlures, appuis), retour progressif de la sensibilité, dysesthésies possibles entre J2 et J14.' },
  ],

  injectat: `La cryoneurolyse n'a **pas d'injectat thérapeutique** : c'est une lésion physique. Les produits utilisés le sont pour le confort et la sécurité.

| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Anesthésie du trajet et de la cible | Lidocaïne 1 % (± adrénalinée) | 3–10 mL | La sonde est de gros calibre et reste en place plusieurs minutes : anesthésier généreusement. Aucun inconvénient à anesthésier la cible elle-même |
| Protection cutanée | Sérum physiologique tiède | 5–10 mL en sous-cutané | Éloigne le derme de la boule de glace quand la cible est à moins de 10 mm |
| Hydrodissection d'écartement | Sérum physiologique ou dextrose 5 % | 3–10 mL | Pour écarter une structure à risque (plèvre, vaisseau, tendon) du volume de congélation |
| Bloc test préalable (séance antérieure) | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | 2–5 mL | Petit volume, pour ne pas surestimer la couverture du bloc |

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg avec adrénaline) — 10 mL de lidocaïne 1 % = 100 mg. Pertinent seulement sur les séances multi-cibles (plusieurs intercostaux).

**Pas de corticoïde** : il n'a rien à faire dans une cryoneurolyse, ni avant ni après. Si l'on cherche un effet anti-inflammatoire, on fait une infiltration, pas une cryolésion.`,

  variantes: [
    { titre: 'Cibles échoguidées documentées', texte: `**Les mieux documentées** :
- **Nerfs géniculés** (gonarthrose, gonalgie après PTG) : cible la plus étudiée, en préopératoire de PTG comme en traitement de la gonarthrose non opérable.
- **Nerfs intercostaux** : fractures de côtes (séries et cohortes montrant une baisse de la consommation d'opioïdes et une amélioration du sevrage en oxygène), post-thoracotomie, chirurgie du pectus excavatum, VATS. C'est le champ où la technique est passée dans la pratique courante chirurgicale.
- **Névromes de moignon** : série avec 100 % de succès technique, baisse de l'EN de 8,3 à 2–3 avec un recul moyen de plus de 2 ans (voir la fiche « Névromes »).
- **Nerf cutané latéral de cuisse** : cas et séries, y compris pour les douleurs de zone de prélèvement de greffe cutanée.
- **Nerfs occipitaux** : étude pilote multicentrique non randomisée d'environ 26 patients, soulagement significatif à 30 jours, profil de tolérance acceptable.
- **Nerfs pectoraux et intercostaux avant mastectomie** : ECR contre sham positif (Anesthesiology 2022).

**Décrites, moins étayées** : nerf suprascapulaire, ilio-inguinal, sous-costal, pudendal, branche infrapatellaire du saphène, nerf sural, nerf radial superficiel, nerfs fémoral et sciatique en périopératoire d'amputation sous le genou.

**Signal négatif à connaître** : la cryoneurolyse des quatre nerfs de la cuisse pour la **douleur fantôme après amputation trans-fémorale** n'a pas montré de bénéfice durable dans deux essais randomisés contre sham, l'explication avancée étant une congélation insuffisante sur toute l'épaisseur du nerf sciatique. C'est l'illustration clinique de la règle « le nerf doit être dans la boule ».` },
    { titre: 'Matériel et systèmes', texte: `Deux familles de dispositifs coexistent :
- Les **systèmes à cryosondes percutanées** de type Cryo-S (Metrum Cryoflex) : gaz protoxyde d'azote (−89 °C) ou CO2 (−78 °C), gamme de cryosondes allant d'une aiguille 21 G (0,8 mm, 90 mm) à des sondes à pointe triangulaire de 18 G (1,3 mm, 80 ou 120 mm) et 14 G (2,0 mm, 120 mm), reconnaissance automatique de la sonde, modes de congélation continu ou séquentiel et **neurostimulation diagnostique intégrée** permettant de distinguer nerf sensitif et nerf moteur avant de congeler — fonctionnalité précieuse et sous-utilisée.
- Les **dispositifs de poche à micro-aiguilles** (type iovera°, protoxyde d'azote) conçus pour les nerfs superficiels, utilisables en consultation ; certains intègrent un réchauffeur cutané qui protège la peau et les follicules pileux.

En pratique d'HDJ : la cryosonde 18 G est le compromis usuel (boule de glace suffisante, ponction acceptable) ; réserver la 14 G aux cibles profondes ou volumineuses. **Vérifier l'autonomie de la bouteille avant chaque séance** : c'est le premier motif d'interruption de geste.` },
    { titre: 'Cryoneurolyse préopératoire (« prehabilitation »)', texte: `Application désormais bien décrite : congeler le nerf **quelques jours à deux semaines avant** une chirurgie prévue (PTG, mastectomie, prothèse d'épaule, thoracotomie), pour que la dégénérescence wallérienne soit installée le jour de l'intervention. Les essais randomisés positifs portent surtout sur ce schéma (mastectomie, PTG), avec réduction de la douleur postopératoire et de la consommation d'opioïdes.

Intérêt pour un centre de douleur travaillant avec des chirurgiens : c'est un acte programmable en HDJ, en amont d'un parcours chirurgical, qui crée une collaboration naturelle avec l'orthopédie et la chirurgie thoracique. À confirmer : l'applicabilité en France dépend de la disponibilité du matériel et de la cotation, non vérifiée ici.` },
    { titre: 'Neurostimulation avant congélation', texte: `Les consoles récentes permettent une stimulation par la cryosonde. L'usage est le miroir de la radiofréquence : **stimulation sensitive à haute fréquence** pour vérifier que les paresthésies reproduisent la douleur, **stimulation motrice à basse fréquence** pour vérifier qu'aucune contraction utile n'apparaît — car une cryoneurolyse sur un nerf mixte donne un déficit moteur de plusieurs mois. Les seuils publiés sont ceux de la radiofréquence (voir le chapitre correspondant) ; leur transposition exacte à la cryoneurolyse est à confirmer.` },
  ],

  pearls: [
    `La cryoneurolyse est la technique de choix quand on veut un effet long **et** la garantie que l'échec sera réversible : un nerf cutané sensitif pur en est l'indication canonique.`,
    `Contrairement à la radiofréquence, on peut anesthésier largement la cible avant de congeler : aucune stimulation n'est requise pour le geste lui-même.`,
    `Vérifier la position dans deux plans **avant** le premier cycle : l'ombre de la boule de glace rend toute vérification impossible ensuite.`,
    `Une boule de glace qui n'apparaît pas signe un défaut de pression de gaz ou une sonde mal montée, pas un problème anatomique : arrêter et vérifier le matériel.`,
    `Mesurer et figer la boule de glace au premier cycle : c'est la seule trace objective du geste, et la seule façon d'expliquer un échec a posteriori.`,
    `Cartographier l'hypoesthésie en salle de surveillance : elle confirme immédiatement la réussite technique, ce qu'aucune radiofréquence ne permet.`,
    `Ne jamais retirer une sonde encore prise dans la glace : attendre le dégel complet.`,
  ],
  pieges: [
    `Croire que la glace « diffuse » comme un injectat : elle ne compense aucune imprécision de placement.`,
    `Congeler un tronc nerveux trop volumineux ou trop profond : la partie distale du nerf n'est pas atteinte et l'effet est nul — c'est l'explication des essais négatifs sur le sciatique de cuisse.`,
    `Oublier l'artère satellite : elle réchauffe le tissu et ampute la boule de glace du côté vasculaire, là où se trouve souvent le nerf.`,
    `Traiter un nerf mixte : le déficit moteur dure aussi longtemps que l'analgésie, soit plusieurs mois.`,
    `Négliger la marge cutanée : gelure, dépigmentation définitive chez les peaux foncées, alopécie locale sur le cuir chevelu (occipitaux) ou la barbe.`,
    `Ne pas prévenir de l'engourdissement prolongé : le patient le vit comme une complication et la confiance est rompue.`,
    `Partir sans vérifier la pression de la bouteille de gaz, et devoir interrompre au deuxième cycle.`,
  ],
  complications: [
    `**Gelure cutanée** au point de ponction ou en regard de la boule de glace : la complication spécifique. Prévention par la marge de 10 mm, l'hydrodissection de protection ou le réchauffeur cutané.`,
    `**Dépigmentation ou hyperpigmentation** locale, potentiellement définitive, surtout sur peau pigmentée. À mentionner explicitement dans le consentement.`,
    `**Alopécie locale** si la boule de glace atteint les follicules pileux (cuir chevelu pour les occipitaux, région pubienne pour l'ilio-inguinal, barbe).`,
    `**Dysesthésies transitoires** entre J2 et J14, parfois sévères et insomniantes ; rapportées chez environ 1 % des patients dans les séries de PTG. Résolutives, mais à annoncer.`,
    `**Névrite** : un seul cas rapporté dans la littérature à ce jour ; aucune donnée de lésion nerveuse permanente ni de névrome après cryoneurolyse percutanée n'est publiée. Nuance importante : la cryoanalgésie **chirurgicale** des intercostaux lors des thoracotomies a été associée à des névralgies modérées à sévères — le mécanisme (congélation ouverte, prolongée, sans contrôle d'image) n'est pas celui de la technique percutanée échoguidée.`,
    `**Déficit moteur** de plusieurs mois si un nerf mixte a été congelé : évitable par la sélection de la cible et la neurostimulation préalable.`,
    `**Hématome, saignement local** : plus fréquents qu'avec une aiguille de bloc du fait du calibre 14–18 G ; compression.`,
    `**Infection** : exceptionnelle, mais l'incision et le maintien prolongé d'un introducteur imposent une asepsie chirurgicale.`,
    `**Pneumothorax** pour les cibles intercostales : plèvre à l'écran en permanence.`,
  ],
  securite: [
    `Rechercher activement une **cryoglobulinémie, une maladie des agglutinines froides, une urticaire au froid ou un Raynaud sévère** à l'interrogatoire : c'est la seule contre-indication propre à la technique et elle n'est jamais spontanément déclarée.`,
    `**Marge cutanée de 10 mm** ou protection active. Le patient doit pouvoir signaler une brûlure cutanée pendant la congélation : sédation légère, pas profonde.`,
    `**Cible purement sensitive** : c'est le principal filtre de sécurité. Utiliser la neurostimulation intégrée quand le matériel le permet.`,
    `**Risque hémorragique ASRA-ESRA 2018** avec la nuance du calibre : cibles superficielles compressibles = faible risque ; cibles profondes = intermédiaire à élevé.`,
    `**Doppler** avant ponction : une sonde 14 G dans une artère satellite n'est pas un incident bénin.`,
    `Vérifier la pression de gaz et tester la sonde à vide avant chaque geste ; ne jamais forcer le retrait sur une sonde adhérente.`,
    `Consignes de **protection du territoire anesthésié** pendant plusieurs mois : brûlures, appuis, chaussage, sources de chaleur.`,
    `Traçabilité : cible, calibre de sonde, gaz, nombre et durée des cycles, taille mesurée de la boule de glace, cartographie de l'hypoesthésie obtenue.`,
  ],

  suivi: `- **J0** : EN avant / après ; **cartographie de l'hypoesthésie** (dessin ou photo dans le dossier) — c'est la preuve de la réussite technique ; consignes écrites de protection du territoire insensible.
- **J7–J15** : fenêtre des dysesthésies. Un patient qui décrit des fourmillements désagréables à J10 est dans l'évolution attendue, pas en complication ; rassurer, traiter symptomatiquement.
- **1 mois** : EN, score fonctionnel adapté à la cible, consommation d'antalgiques. L'effet doit être installé.
- **3 et 6 mois** : durée d'effet réelle et **retour de la sensibilité**, qui doit être progressif et concomitant du retour éventuel de la douleur. Une douleur qui revient **avant** la sensibilité oriente vers une autre source que le nerf traité — information diagnostique précieuse, propre à cette technique.
- **Répétition** : possible sans limite théorique, le nerf ayant régénéré. C'est le principal argument face à la radiofréquence thermique. Vérifier que le bloc test reste positif si le tableau a changé.
- **Escalade** : échec technique documenté (boule de glace insuffisante) → refaire avec une sonde de plus gros calibre ou plusieurs positions ; échec malgré une hypoesthésie obtenue → la cible n'est pas la bonne, reprendre le raisonnement diagnostique avant de proposer une radiofréquence.
- **Registre** : cible, matériel, cycles, taille de boule, EN et durée d'effet. La littérature étant hétérogène sur les protocoles, un registre interne a ici une vraie valeur.`,

  evidence: `- **Mécanisme** : solidement établi et cohérent entre sources — axonotmésis de grade 2 de Sunderland, dégénérescence wallérienne, conservation des enveloppes conjonctives, repousse à 1–2 mm par jour. Ce n'est pas un point de débat.
- **Douleur périopératoire** : c'est là que la preuve est la meilleure. Essais randomisés contre sham positifs pour la **mastectomie** (Anesthesiology 2022) et essai randomisé monocentrique positif pour la **cryoneurolyse avant PTG** (Journal of Arthroplasty 2021), avec réduction de la douleur et de la consommation d'opioïdes. Preuve **modérée**, sur des effectifs modestes.
- **Amputation** : résultats contrastés et instructifs. Bénéfice périopératoire après amputation **sous le genou** (essai pilote randomisé 2024), mais **absence de bénéfice** sur la douleur fantôme chronique après amputation **trans-fémorale** (essai multicentrique randomisé et essai pilote ultérieur), attribuée à une congélation incomplète du sciatique. À retenir comme une leçon technique, pas comme une réfutation de la méthode.
- **Douleur chronique** : la littérature reste dominée par des **séries et des cas cliniques** (névromes de moignon, occipitaux, cutané latéral de cuisse, intercostaux post-thoracotomie). Un consensus d'experts par méthode Delphi (CardioVascular and Interventional Radiology, 2025, 22 interventionnistes, 42 propositions) a été publié : il valide l'indication dans la douleur chronique localisée réfractaire avec cible nerveuse identifiable, exige un **bloc diagnostique préalable**, un **guidage par imagerie** et des cycles gel–dégel **individualisés** visant une lésion de Sunderland II. C'est un consensus, pas une démonstration.
- **Gonarthrose** : les données de cryoneurolyse restent moins fournies que celles de la radiofréquence. À noter, comme comparateur récent, un essai randomisé contre sham de **neurolyse chimique** échoguidée des géniculés à l'éthanol 95 % (Pain Medicine, 100 patients) concluant à une réduction significative de la douleur et de la consommation d'opioïdes — technique différente, même logique de neurolyse durable.
- **Sécurité** : le profil est le point fort de la technique. Pas de lésion nerveuse permanente ni de névrome rapportés après cryoneurolyse percutanée ; un seul cas de névrite publié ; les complications sont cutanées et locales.
- **Trous de la littérature à assumer** : (1) aucune comparaison directe randomisée avec la radiofréquence pulsée ou thermique ; (2) protocoles de congélation non standardisés — la durée et le nombre de cycles varient d'une équipe à l'autre, ce qui rend les comparaisons entre études peu interprétables ; (3) données de durée d'effet au-delà de 6–12 mois rares.`,

  references: [
    { verif: true, auteurs: 'Biel E, Aroke EN, Maye J, Zhang SJ', titre: 'The applications of cryoneurolysis for acute and chronic pain management', revue: 'Pain Practice', annee: '2023', doi: '10.1111/papr.13182', type: 'revue', note: 'Bonne revue générale : mécanisme, indications aiguës et chroniques, profil de tolérance.' },
    { verif: true, titre: 'Interventional management of pain with cryoneurolysis: expert consensus recommendations for standardizing patient selection and techniques based on Delphi process', revue: 'CardioVascular and Interventional Radiology', annee: '2025', doi: '10.1007/s00270-025-04310-5', type: 'consensus', note: '22 interventionnistes, 42 propositions : bloc diagnostique préalable, guidage par imagerie, cycles individualisés visant une lésion de Sunderland II.' },
    { verif: true, titre: 'Percutaneous image-guided cryoneurolysis: applications and techniques', revue: 'RadioGraphics', doi: '10.1148/rg.220082', type: 'revue technique', note: 'Année non relevée lors de la recherche. Panorama des cibles (ilio-inguinal, pudendal, cutané latéral de cuisse, occipitaux) et des pièges techniques.' },
    { verif: true, titre: 'A narrative review of ultrasound-guided and landmark-based percutaneous cryoneurolysis for the management of acute and chronic pain', revue: 'Current Pain and Headache Reports', annee: '2024', doi: '10.1007/s11916-024-01281-z', type: 'revue' },
    { verif: true, titre: 'Preoperative ultrasound-guided percutaneous cryoneurolysis for the treatment of pain after mastectomy: a randomized, participant- and observer-masked, sham-controlled study', revue: 'Anesthesiology', annee: '2022', pmid: '35929983', type: 'ECR' },
    { verif: true, titre: 'Cryoneurolysis before total knee arthroplasty in patients with severe osteoarthritis for reduction of postoperative pain and opioid use in a single-center randomized controlled trial', revue: 'The Journal of Arthroplasty', annee: '2021', url: 'https://www.arthroplastyjournal.org/article/S0883-5403(20)31204-3/fulltext', type: 'ECR' },
    { verif: true, titre: 'Ultrasound-guided percutaneous cryoneurolysis to treat chronic postamputation phantom limb pain: a multicenter randomized controlled trial', revue: 'Anesthesiology', annee: '2023', doi: '10.1097/ALN.0000000000004429', type: 'ECR', note: 'Essai négatif à 4 mois ; signal de bénéfice possible sur les amputations trans-tibiales seulement.' },
    { verif: true, titre: 'Ultrasound-guided percutaneous cryoneurolysis for perioperative analgesia following major lower extremity amputation: a randomized, participant- and observer-masked, sham-controlled pilot study', annee: '2024', pmid: '38445120', type: 'ECR pilote', note: 'Revue non relevée lors de la recherche. Bénéfice à un mois après amputation sous le genou.' },
    { verif: true, titre: 'Ultrasound-guided percutaneous intercostal nerve cryoneurolysis for analgesia following traumatic rib fracture — a case series', revue: 'Korean Journal of Anesthesiology', pmid: '31684715', type: 'série de cas', note: 'Année non relevée lors de la recherche.' },
    { verif: true, titre: 'Ultrasound-guided percutaneous cryoneurolysis for post-thoracotomy pain syndrome: a case report', revue: 'Cureus', annee: '2023', pmid: '36699749', type: 'cas clinique' },
    { verif: true, titre: 'Icing the pain — ultrasound-guided cryoablation of symptomatic post-amputation stump neuroma', revue: 'CardioVascular and Interventional Radiology', annee: '2022', pmid: '34820693', type: 'série de cas', note: '7 patients, EN 8,3 → 2,1 à une semaine, recul moyen 27 mois, 100 % de succès technique.' },
    { verif: true, titre: 'Effect of ultrasound-guided genicular nerve neurolysis versus sham procedure on pain in patients with knee osteoarthritis: a randomized clinical trial', revue: 'Pain Medicine', pmid: '40581824', type: 'ECR', note: 'Neurolyse **chimique** (éthanol 95 %), 100 patients — comparateur utile, technique différente. Année non relevée lors de la recherche.' },
  ],
  videos: [
    { titre: 'Cryoanalgesia — StatPearls', source: 'NCBI Bookshelf (texte + figures)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK482123/', note: 'Mécanisme, matériel, complications' },
    { titre: 'Percutaneous image-guided cryoneurolysis: applications and techniques', source: 'RadioGraphics (RSNA)', url: 'https://pubs.rsna.org/doi/full/10.1148/rg.220082', note: 'Iconographie des cibles et des boules de glace' },
    { titre: 'Cryo-S Painless — cryoanalgésie dans la douleur chronique', source: 'Metrum Cryoflex', url: 'https://www.metrum.com.pl/en/medical-products/cryoanalgesia/cryo-s-painless-for-cryoanalgesia-for-chronic-pain/', note: 'Documentation constructeur : gaz, gamme de cryosondes, neurostimulation intégrée' },
    { titre: 'Cryoneurolysis fails to demonstrate lasting benefit for phantom limb pain after above-knee amputation', source: 'NYSORA', url: 'https://www.nysora.com/education-news/cryoneurolysis-fails-to-demonstrate-lasting-benefit-for-phantom-limb-pain-after-above-knee-amputation/', note: 'Le signal négatif et son explication technique' },
  ],

  scenes: [
    {
      id: 'cryo-boule', section: 'sonoanatomie', titre: 'Boule de glace autour du nerf — critère de fin',
      legende: 'La boule de glace naît à la pointe de la cryosonde et s\'élargit selon son axe. Seul son bord antérieur est visible : au-delà, le cône d\'ombre masque tout, nerf compris. Le critère de fin est que ce bord dépasse le nerf des deux côtés au premier cycle. L\'artère satellite, puits de chaleur, ampute la boule de son côté.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, nerf en coupe', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.fat({ path: 'M0 76 L640 76 L640 132 L0 132 Z', label: 'Graisse sous-cutanée', at: [96, 106] });
        S.fascia({ points: [[0, 134], [640, 134]], width: 1.6 });
        S.muscle({ path: 'M0 134 L640 134 L640 360 L0 360 Z', label: 'Muscle', at: [70, 320], opacity: 0.34 });
        S.artery({ x: 396, y: 214, r: 16, label: 'Artère satellite\n(puits de chaleur)', lx: 500, ly: 176, anchor: 'start', lead: [410, 206] });
        S.nerve({ x: 320, y: 224, rx: 20, ry: 15, label: 'Nerf cible', lx: 236, ly: 300, anchor: 'end', lead: [306, 236] });
        S.region({ path: 'M252 190 Q272 168 316 166 Q362 166 378 190 Q392 214 378 244 Q352 274 314 274 Q268 272 252 244 Q240 216 252 190 Z', fill: '#bfe6ff', opacity: 0.34, stroke: '#dff2ff' });
        S.fascia({ path: 'M252 190 Q272 168 316 166 Q362 166 378 190', width: 3.4, opacity: 1 });
        S.label({ x: 316, y: 150, text: 'Bord antérieur de la boule de glace', anchor: 'middle', small: true, cls: 'lbl-target' });
        S.region({ path: 'M250 236 L384 236 L420 400 L216 400 Z', fill: '#04070a', opacity: 0.72 });
        S.label({ x: 318, y: 352, text: 'Cône d\'ombre', anchor: 'middle', small: true, cls: 'lbl-bone' });
        S.needle({ from: [636, 92], to: [352, 200], label: 'Cryosonde 18 G' });
        S.target({ x: 348, y: 202, r: 12 });
      },
    },
    {
      id: 'cryo-geste', section: 'technique', titre: 'Cryoneurolyse d\'un nerf superficiel — protection cutanée et placement tangentiel',
      legende: 'Nerf sensitif superficiel (type cutané latéral de cuisse, ilio-inguinal, radial superficiel). La cryosonde arrive dans le plan et se couche le long du nerf : la boule de glace, allongée selon l\'axe de la sonde, congèle un segment plutôt qu\'un point. Une nappe de sérum tiède injectée entre la peau et la cible éloigne le derme de la glace — c\'est la parade à la gelure, à la dépigmentation et à l\'alopécie.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Longitudinal, aiguille dans le plan', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 9, fatBelow: 16 });
        S.fluid({ path: 'M120 68 L560 68 L560 96 L120 96 Z', label: 'Sérum tiède — protection cutanée', lx: 340, ly: 84, small: true });
        S.fat({ path: 'M0 100 L640 100 L640 156 L0 156 Z', label: 'Graisse', at: [56, 128] });
        S.fascia({ points: [[0, 158], [640, 152]], width: 1.6 });
        S.muscle({ path: 'M0 158 L640 152 L640 340 L0 346 Z', label: 'Plan musculaire', at: [76, 320], opacity: 0.32 });
        S.nerve({ path: 'M0 232 L640 214 L640 234 L0 252 Z', label: 'Nerf sensitif (coupe longitudinale)', lx: 120, ly: 292, anchor: 'start', lead: [120, 248] });
        S.region({ path: 'M228 194 Q262 176 330 174 Q404 174 434 196 Q452 214 438 244 Q404 274 330 276 Q256 276 228 250 Q212 222 228 194 Z', fill: '#bfe6ff', opacity: 0.32, stroke: '#dff2ff' });
        S.fascia({ path: 'M228 194 Q262 176 330 174 Q404 174 434 196', width: 3.2, opacity: 1 });
        S.region({ path: 'M224 236 L442 236 L482 400 L188 400 Z', fill: '#04070a', opacity: 0.7 });
        S.label({ x: 332, y: 160, text: 'Boule de glace — gel 2 min / dégel 1 min × 2–3', anchor: 'middle', small: true, cls: 'lbl-target' });
        S.label({ x: 336, y: 350, text: 'Cône d\'ombre : le nerf n\'est plus vérifiable après le 1er cycle', anchor: 'middle', small: true, cls: 'lbl-bone' });
        S.needle({ from: [636, 176], to: [300, 222], label: 'Cryosonde 18 G, couchée le long du nerf' });
        S.target({ x: 300, y: 224, r: 12 });
      },
    },
  ],

  checklist: [
    'Bloc test tracé et positif ; cible **purement sensitive** vérifiée (ou neurostimulation prévue)',
    'Cryoglobulinémie, agglutinines froides, urticaire au froid, Raynaud sévère : recherchés et écartés',
    'Consentement mentionnant l\'engourdissement de plusieurs mois, la gelure cutanée, la dépigmentation et l\'alopécie possibles',
    'Distance nerf–peau mesurée ; protection cutanée prévue si < 10 mm',
    'Pression de la bouteille de gaz vérifiée pour le nombre de cycles prévus ; sonde testée à vide',
    'Position de la cryosonde contrôlée dans deux plans AVANT le premier cycle',
    'Boule de glace mesurée et image figée au premier cycle ; arrêt si elle atteint le plan cutané',
    'Dégel complet obtenu avant le retrait de la sonde',
    'Cartographie de l\'hypoesthésie faite en salle de surveillance et consignes de protection du territoire remises',
  ],
});
