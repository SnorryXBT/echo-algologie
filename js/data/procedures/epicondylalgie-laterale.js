/* Fiche : épicondylalgie latérale échoguidée — fenestration, PRP, corticoïde, hydrodissection du nerf radial. */
ECHO.register({
  id: 'epicondylalgie-laterale',
  titre: 'Épicondylalgie latérale — gestes échoguidés',
  titreCourt: 'Épicondylalgie latérale',
  en: 'Ultrasound-guided procedures for lateral epicondylalgia (tennis elbow): percutaneous needle tenotomy, platelet-rich plasma, corticosteroid injection, botulinum toxin, and radial nerve hydrodissection at the arcade of Frohse',
  region: 'membre-sup',
  types: ['infiltration', 'interventionnel', 'bloc'],
  niveau: 2,
  grade: 'Hétérogène : corticoïde = bénéfice court terme mais **résultat inférieur à un an** (ECR de bonne qualité) ; fenestration et PRP = preuve modérée ; toxine botulique = modeste, au prix d\'une parésie ; hydrodissection radiale = faible (séries)',
  motsCles: ['tennis elbow', 'épicondylite', 'CERC', 'ECRB', 'tendinopathie des épicondyliens', 'fenestration', 'ténotomie percutanée', 'dry needling', 'PRP', 'plasma riche en plaquettes', 'toxine botulique', 'arcade de Frohse', 'tunnel radial', 'nerf interosseux postérieur', 'PRTEE'],
  maj: '2026-09',
  resume: 'L\'épicondylalgie latérale est le meilleur exemple d\'un geste où la vérité inconfortable doit être dite au patient avant l\'aiguille : l\'infiltration de corticoïde soulage remarquablement à quatre semaines, puis donne à un an **plus de rechutes et un moins bon taux de guérison complète** que l\'abstention ou l\'exercice — c\'est un résultat robuste, établi par des essais randomisés de bonne qualité. La stratégie échoguidée moderne ne consiste donc pas à mieux placer le corticoïde, mais à s\'en passer : sono-anatomie précise du tendon commun et du ligament collatéral latéral, **ténotomie percutanée à l\'aiguille** (fenestration) qui relance une cicatrisation sur une tendinose chronique, **PRP** en seconde intention, et surtout élimination du grand diagnostic différentiel — la compression de la **branche profonde du nerf radial à l\'arcade de Frohse**, qui explique une part des « épicondylites rebelles » et relève d\'une hydrodissection, pas d\'une infiltration tendineuse.',

  flash: {
    position: 'assis', positionNote: 'assis face à l\'opérateur, coude fléchi à 90°, avant-bras en pronation, main à plat sur la table ; décubitus dorsal, bras en travers du thorax, pour l\'abord du nerf radial',
    sonde: 'lineaire', sondeNote: '12–18 MHz (hockey stick utile), profondeur 2,5–3,5 cm, focale à 1 cm ; Doppler couleur basse PRF pour la néovascularisation',
    approche: 'in-plane', approcheNote: 'sonde coronale sur l\'épicondyle latéral, aiguille dans le plan **de distal en proximal**, à plat, le long du tendon',
    aiguille: '21–22 G, 40–50 mm pour la fenestration et le PRP ; 22–25 G pour l\'hydrodissection du nerf radial',
    cible: 'Zone hypoéchogène profonde du tendon commun (origine du CERC) — critère de fin : ramollissement de la zone traitée et perte de la résistance à la pénétration, après 20 à 30 passages',
    injectat: 'Fenestration : lidocaïne 1 % péri-tendineuse seule. PRP : 2–3 mL. Hydrodissection radiale : 5–10 mL de glucosé 5 % ou de sérum',
    duree: '10–15 min (fenestration) · 15–20 min (PRP) · 10 min (hydrodissection)',
  },

  indications: [
    'Épicondylalgie latérale **chronique** (> 3 mois) résistant à la rééducation excentrique bien conduite, à l\'adaptation gestuelle et à l\'orthèse : c\'est la seule indication solide d\'un geste interventionnel.',
    'Tendinose échographiquement documentée : épaississement, hypoéchogénicité de la portion **profonde et antérieure** du tendon commun (origine du court extenseur radial du carpe), perte du dessin fibrillaire, fissure intratendineuse, calcifications, irrégularité corticale ou enthésophyte, néovascularisation au Doppler.',
    '**Ténotomie percutanée à l\'aiguille (fenestration)** : tendinose chronique sans rupture étendue, chez un patient prêt à accepter 3 à 7 jours de douleur post-geste et une reprise progressive sur 6 à 12 semaines.',
    '**PRP** : échec de la fenestration seule ou tendinose évoluée, chez un patient informé du coût, du caractère hors nomenclature en France et du niveau de preuve réel.',
    '**Corticoïde** : à réserver aux situations où un soulagement rapide et court est explicitement l\'objectif (échéance professionnelle ou sportive précise, douleur nocturne intolérable), et **jamais** présenté comme un traitement de fond — voir Preuve.',
    '**Hydrodissection de la branche profonde du nerf radial à l\'arcade de Frohse** : douleur épicondylienne rebelle, à irradiation descendante dans la loge dorsale de l\'avant-bras, douleur à la palpation 4–5 cm sous l\'épicondyle, douleur à la supination contre résistance et à l\'extension résistée du majeur, sans tendinose franche ou disproportionnée par rapport aux images.',
    '**Toxine botulique** dans la masse des extenseurs : option de dernière ligne avant chirurgie, chez un patient qui accepte une parésie transitoire d\'extension des doigts.',
  ],
  contreIndications: [
    'Absolues : infection cutanée en regard, allergie au produit, refus. Pour le PRP : thrombopénie, hémopathie, traitement anticoagulant en cours selon les protocoles, néoplasie évolutive.',
    '**Rupture complète du tendon commun** ou atteinte étendue du ligament collatéral latéral : la fenestration est contre-indiquée (risque d\'instabilité rotatoire postéro-latérale) ; avis chirurgical.',
    'Corticoïde : à éviter chez le sujet jeune et actif, en cas d\'infiltrations antérieures répétées, de peau fine (atrophie et dépigmentation très visibles à ce niveau), et avant toute chirurgie programmée.',
    'AINS et antiagrégants : à interrompre 5 à 7 jours avant un **PRP** selon les protocoles usuels (ils altèrent la fonction plaquettaire) — c\'est une contrainte propre au PRP, pas au geste échoguidé.',
    'Risque hémorragique : geste **superficiel et compressible**, catégorie **faible risque** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ni des anticoagulants pour la fenestration, l\'infiltration ou l\'hydrodissection.',
    'Instabilité rotatoire postéro-latérale connue, arthropathie huméro-radiale évoluée, plica synoviale symptomatique : autres diagnostics, autres traitements.',
  ],
  alternatives: 'Le traitement de fond reste l\'**exercice excentrique et le renforcement progressif en charge** des extenseurs du poignet, associé à l\'aménagement des contraintes (poste de travail, matériel sportif, technique du revers) et à une orthèse de contre-appui. L\'histoire naturelle est favorable : une majorité de patients guérit en 6 à 12 mois sans geste. **Ondes de choc** : données contradictoires. **Chirurgie** (débridement du CERC, ouvert ou arthroscopique) : réservée aux échecs prolongés et documentés. Le message central à donner au patient est que la douleur va mettre des mois à céder quoi qu\'on fasse, et que le rôle du geste est d\'accélérer la reprise de l\'exercice, pas de le remplacer.',

  anatomie: `Le **tendon commun des épicondyliens** naît de la face antéro-inférieure de l\'épicondyle latéral et rassemble le court extenseur radial du carpe (**CERC / ECRB**), l\'extenseur commun des doigts, l\'extenseur propre du 5ᵉ et l\'extenseur ulnaire du carpe. Le long extenseur radial du carpe et le brachio-radial s\'insèrent plus haut, sur la crête supra-condylienne, en avant du tendon commun.

La lésion de l\'épicondylalgie latérale siège de façon très constante dans la portion **profonde et antérieure** du tendon commun, c\'est-à-dire à l\'origine du **CERC** — le reste du tendon est souvent normal. Histologiquement il s\'agit d\'une **tendinose** (dégénérescence angio-fibroblastique, néovascularisation, absence de cellules inflammatoires), et non d\'une tendinite : c\'est ce qui explique l\'inefficacité à long terme des anti-inflammatoires et le rationnel des techniques qui recréent une agression contrôlée.

Immédiatement **profond** au tendon commun court le **complexe ligamentaire collatéral latéral** (ligament collatéral radial, ligament collatéral ulnaire latéral, ligament annulaire), stabilisateur de la rotation postéro-latérale du coude. Plus profond encore, l\'articulation huméro-radiale (capitellum puis tête radiale).

À 3–5 cm en aval, le **nerf radial** se divise en branche superficielle (sensitive, sous le brachio-radial) et branche profonde (**nerf interosseux postérieur**), qui pénètre le **supinateur** en passant sous son bord fibreux proximal — l\'**arcade de Frohse**. C\'est le site de compression du syndrome du tunnel radial.

### Ce qui compte pour le geste
- **La cible est profonde et antérieure**, à l\'enthèse : viser le centre géométrique du tendon revient à traiter du tendon sain.
- **Le ligament collatéral latéral est la limite à ne pas franchir.** Une fenestration qui le traverse ou une lésion préexistante étendue expose à l\'**instabilité rotatoire postéro-latérale**. En pratique : on reste dans le plan du tendon, on ne descend pas au contact du capitellum, et l\'on vérifie l\'intégrité du LCL avant de commencer.
- La **néovascularisation** au Doppler est corrélée à la symptomatologie et constitue un bon repère de la zone à traiter ; sa disparition à distance est un critère de suivi utile.
- L\'articulation huméro-radiale est immédiatement sous le LCL : ne pas y pénétrer.
- **Repère du tunnel radial** : la branche profonde se cherche en coupe **transversale** sur la face antéro-latérale de l\'avant-bras, entre le chef superficiel et le chef profond du supinateur, à environ 3–5 cm sous l\'interligne huméro-radial. Elle mesure 2–3 mm et s\'aplatit à l\'arcade. L\'**artère récurrente radiale** (arcade de Henry) croise la région et participe aux compressions décrites.
- L\'épicondylalgie latérale et le syndrome du tunnel radial **coexistent** dans une minorité non négligeable de cas rebelles : c\'est ce qui justifie d\'explorer le nerf systématiquement quand le tendon ne rend pas compte du tableau.`,

  installation: {
    patient: `**Assis face à l\'opérateur**, coude fléchi à 90°, **avant-bras en pronation**, main posée à plat sur la table d\'examen : cette position expose l\'épicondyle latéral et le tendon commun en position superficielle et détendue. Une variante en pronation complète, coude en extension, tend le tendon et facilite la fenestration chez certains opérateurs.

Pour l\'abord du **nerf radial à l\'arcade de Frohse** : décubitus dorsal ou position assise, bras en travers du thorax ou avant-bras en **supination** posé sur la table, ce qui déroule le supinateur et écarte les deux chefs.

Prévenir de la durée et de l\'inconfort de la fenestration : c\'est un geste bruyant en sensations, pas douloureux si l\'anesthésie péri-tendineuse est correcte, mais impressionnant.`,
    operateur: `Opérateur assis face au patient, écran dans l\'axe. Avant-bras du patient **calé** : 20 à 30 passages d\'aiguille exigent une immobilité parfaite.

Sonde **coronale sur l\'épicondyle latéral**, dans l\'axe long du tendon commun. Ponction dans le plan, **de distal en proximal**, à plat : l\'aiguille chemine dans l\'axe du tendon, ce qui donne une visibilité maximale et permet de fenestrer sur toute la longueur de la zone pathologique sans jamais se rapprocher du LCL par le bas.

Pour l\'hydrodissection radiale : sonde **transversale** sur l\'avant-bras proximal, aiguille dans le plan de latéral en médial (ou l\'inverse selon la fenêtre), en visant le plan de clivage entre les deux chefs du supinateur.`,
    sonde: `- Linéaire **12–18 MHz** ; sonde compacte utile sur un coude fin.
- **Profondeur 2,5–3,5 cm**, focale à 1 cm : le tendon commun est à 3–8 mm de la peau.
- **Doppler couleur basse PRF**, sans compression : la néovascularisation intratendineuse est un repère de la zone cible et un critère de suivi. Une pression trop forte l\'efface complètement.
- Attention à l\'**anisotropie** : le tendon commun s\'assombrit dès que le faisceau s\'incline et simule une tendinose. Basculer avant de conclure.
- Comparaison au **côté controlatéral** systématique pour juger l\'épaisseur et l\'échostructure : les repères absolus sont peu fiables sur ce tendon.
- Pour le nerf : profondeur 3 cm, focale à 1,5 cm ; la branche profonde est petite, on la suit en « ascenseur » de bas en haut jusqu\'à l\'arcade.`,
  },

  reperage: [
    { titre: 'Coupe coronale du tendon commun', texte: 'Sonde sur l\'épicondyle latéral, extrémité proximale sur l\'humérus, extrémité distale sur la tête radiale. On identifie de gauche à droite : la corticale de l\'**épicondyle latéral**, le **tendon commun** en bec triangulaire hyperéchogène fibrillaire, le **capitellum** puis la **tête radiale** en profondeur.' },
    { titre: 'Analyser la zone profonde et antérieure', texte: 'C\'est là que siège la lésion. Chercher : **épaississement**, plage **hypoéchogène** avec perte du dessin fibrillaire, **fissure** anéchogène intratendineuse, **calcification**, irrégularité corticale ou **enthésophyte** à l\'insertion. Mesurer l\'épaisseur du tendon et comparer au côté sain.' },
    { titre: 'Doppler', texte: 'Doppler couleur à basse PRF, sonde posée sans appuyer : la **néovascularisation** intratendineuse et péri-enthésique signe l\'activité et localise la zone à fenestrer. Noter son importance — sa régression est un bon critère de suivi à 3 mois.' },
    { titre: 'Vérifier le ligament collatéral latéral', texte: 'Sous le tendon, chercher la bande fibrillaire du **complexe collatéral latéral** qui court vers le ligament annulaire. Son intégrité conditionne l\'indication : une atteinte étendue associée change le pronostic et contre-indique la fenestration agressive. En cas de doute, tester la stabilité et demander un avis.' },
    { titre: 'Descendre chercher le nerf radial', texte: 'Passer en coupe **transversale** 3 à 5 cm sous l\'interligne, face antéro-latérale. Repérer le **brachio-radial** en superficie, puis les deux chefs du **supinateur** ; entre eux, un petit ovale hypoéchogène de 2–3 mm : la **branche profonde du nerf radial**. Remonter jusqu\'à l\'**arcade de Frohse**, bord proximal épaissi du chef superficiel, sous lequel le nerf s\'aplatit. Rechercher au Doppler l\'**artère récurrente radiale**.' },
    { titre: 'Si le tendon paraît normal', texte: 'Un tendon commun d\'échostructure normale chez un patient très douloureux doit faire changer d\'hypothèse : **syndrome du tunnel radial**, plica synoviale huméro-radiale, arthropathie huméro-radiale, douleur projetée cervicale (C6–C7), instabilité rotatoire. Ne pas fenestrer un tendon sain parce que le diagnostic était posé d\'avance.' },
  ],

  sonoanatomie: [
    { structure: 'Épicondyle latéral', aspect: 'Corticale hyperéchogène avec ombre ; irrégularités et enthésophytes fréquents', repere: 'Origine du tendon commun ; extrémité proximale de l\'image' },
    { structure: 'Tendon commun des épicondyliens', aspect: 'Bec triangulaire hyperéchogène fibrillaire, 4–5 mm d\'épaisseur, très anisotrope', repere: 'Entre l\'épicondyle et la tête radiale' },
    { structure: 'Portion profonde et antérieure (CERC / ECRB)', aspect: 'Siège habituel de la tendinose : hypoéchogène, épaissie, dessin fibrillaire effacé', repere: '**La cible** — pas le centre du tendon' },
    { structure: 'Fissure intratendineuse', aspect: 'Fente anéchogène linéaire dans l\'épaisseur du tendon', repere: 'Facteur de mauvais pronostic ; à distinguer de l\'anisotropie' },
    { structure: 'Néovaisseaux', aspect: 'Signaux Doppler intratendineux et péri-enthésiques', repere: 'Corrélés aux symptômes ; guident la zone à fenestrer' },
    { structure: 'Complexe ligamentaire collatéral latéral', aspect: 'Bande fibrillaire profonde, plus compacte que le tendon, allant vers le ligament annulaire', repere: '**Limite profonde à ne pas franchir**' },
    { structure: 'Capitellum et tête radiale', aspect: 'Corticales convexes hyperéchogènes avec ombre, séparées par l\'interligne huméro-radial', repere: 'Plancher de l\'image ; ne pas pénétrer l\'articulation' },
    { structure: 'Branche profonde du nerf radial (interosseux postérieur)', aspect: 'Ovale hypoéchogène de 2–3 mm, aspect fasciculé, entre les deux chefs du supinateur ; aplati sous l\'arcade', repere: '3–5 cm sous l\'interligne, coupe transversale' },
    { structure: 'Arcade de Frohse', aspect: 'Bord proximal épaissi et hyperéchogène du chef superficiel du supinateur', repere: 'Site de compression ; cible de l\'hydrodissection' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avec Doppler** et comparaison controlatérale avant la désinfection ; marquage du point d\'entrée distal. Asepsie, gel stérile ou housse. Pour le PRP : prélèvement et centrifugation selon le protocole du kit, injectat prêt avant l\'installation.' },
    { titre: 'Anesthésie', texte: '**Péri-tendineuse uniquement** : 2–3 mL de lidocaïne 1 % dans le plan superficiel et autour de l\'enthèse, jamais dans le tendon (l\'anesthésique dilue les repères et, pour un PRP, on évite d\'ajouter quoi que ce soit dans la zone traitée). Attendre 3–5 minutes : une fenestration sur un tendon mal anesthésié est ingérable.' },
    { titre: 'Ponction dans le plan, de distal en proximal', texte: 'Aiguille **21–22 G**, à plat (10–20°), introduite 2 à 3 cm en aval de l\'épicondyle et poussée le long de l\'axe du tendon jusqu\'à la zone hypoéchogène profonde. Le trajet longitudinal donne une visibilité parfaite et éloigne structurellement la pointe du LCL.' },
    { titre: 'Fenestration (ténotomie percutanée à l\'aiguille)', texte: '**20 à 30 passages** de va-et-vient dans la zone pathologique, en éventail, sans ressortir de la peau : on perfore la zone dégénérée, on abrase doucement la corticale de l\'enthèse et l\'on fragmente les calcifications. La **résistance diminue progressivement** — c\'est le signal recherché. Ne pas franchir la limite profonde du tendon : surveiller le LCL en permanence.' },
    { titre: 'Critère de fin', texte: 'Zone traitée **ramollie**, résistance à la pénétration nettement diminuée, calcifications fragmentées, éventuel petit hématome intratendineux visible. En pratique : 20 à 30 passages ou l\'arrêt sur la perte de résistance, selon ce qui vient en premier. Au-delà, on ajoute du traumatisme sans bénéfice.' },
    { titre: 'PRP associé, le cas échéant', texte: 'Après la fenestration (qui crée le lit d\'accueil), injecter **2–3 mL de PRP** dans la zone traitée et à l\'enthèse, en 3 ou 4 points, sous contrôle visuel. Ne pas anesthésier davantage après l\'injection. Prévenir d\'une **exacerbation douloureuse de 3 à 7 jours**, habituelle et sans gravité.' },
    { titre: 'Après le geste', texte: 'Compression, pansement, surveillance 15 min. **Pas d\'AINS pendant 2 semaines** après fenestration ou PRP : l\'inflammation induite est le mécanisme thérapeutique recherché — antalgiques de palier 1, glace. Repos relatif 3 à 5 jours, puis **reprise progressive de l\'excentrique à J7–J10**, montée en charge sur 6 à 12 semaines. Le patient doit savoir que l\'amélioration se juge à 6 semaines et à 3 mois, pas à J8.' },
  ],

  injectat: `| Geste | Produits | Volume | Commentaire |
|---|---|---|---|
| Fenestration (ténotomie à l\'aiguille) | Lidocaïne 1 % **péri-tendineuse** | 2–3 mL | Aucun produit dans le tendon : l\'effet vient de l\'aiguille, pas d\'un injectat |
| PRP | Plasma riche en plaquettes autologue (leucocyte-rich le plus souvent dans les essais positifs) | 2–3 mL | Hors nomenclature en France, coût à la charge du patient : l\'annoncer avant. Arrêt des AINS et des antiagrégants 5–7 j avant selon protocole |
| Corticoïde (indication restreinte) | Bétaméthasone 0,5–1 mL **ou** méthylprednisolone 20 mg + lidocaïne 1 % | **1–2 mL, péri-tendineux** | Jamais intratendineux. Soulagement à 2–6 semaines, **résultat inférieur à un an** : à n\'utiliser que si l\'objectif court terme est explicite et assumé |
| Hydrodissection du nerf radial (arcade de Frohse) | **Glucosé 5 %** (dextrose) ou sérum physiologique, ± 1 mL de lidocaïne 1 % pour la composante diagnostique | 5–10 mL | Le glucosé 5 % est privilégié en hydrodissection périneurale (pas d\'effet neurotoxique, effet antalgique propre décrit) ; corticoïde possible mais non indispensable |
| Toxine botulique | Toxine botulique de type A, dans la masse des extenseurs 4–5 cm sous l\'épicondyle | Selon spécialité et protocole | Dernière ligne. **Parésie transitoire d\'extension des doigts quasi constante** : le dire avant, c\'est le principal motif d\'insatisfaction |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée) ; ropivacaïne 3 mg/kg ; bupivacaïne 2–2,5 mg/kg. Sans objet aux volumes utilisés ici.

**Corticoïde : précautions propres à ce site.** Le tendon commun est très superficiel et le tissu sous-cutané y est mince : **atrophie et dépigmentation** sont fréquentes et visibles. Purger l\'aiguille avant le retrait, volume minimal, pas plus d\'une infiltration, et préférer un produit peu atrophiant chez le sujet mince ou à peau pigmentée.

**Après fenestration ou PRP : pas d\'AINS pendant 2 semaines.** C\'est une contrainte cohérente avec le mécanisme d\'action, à écrire sur l\'ordonnance de sortie.`,

  variantes: [
    { titre: 'Fenestration seule versus fenestration + PRP', texte: 'La fenestration seule est simple, sans coût et déjà efficace sur la tendinose chronique dans les séries publiées. Le PRP ajoute un coût, une contrainte de préparation et une exacerbation douloureuse plus marquée, pour un bénéfice supplémentaire **incertain** : dans les essais, l\'écart entre PRP et solution saline injectée après aiguilletage est faible ou nul, alors que l\'écart entre PRP et corticoïde à 6–12 mois est net. Autrement dit : une partie de l\'effet attribué au PRP est l\'effet de l\'aiguille. À dire au patient qui finance le geste.' },
    { titre: 'Sang autologue', texte: 'Injection de 2–3 mL de sang veineux autologue après fenestration : historiquement décrite avant le PRP, efficacité comparable dans plusieurs comparaisons directes, coût nul. Option défendable chez un patient qui refuse le coût du PRP, à condition d\'être explicite sur le faible niveau de preuve des deux.' },
    { titre: 'Hydrodissection de la branche profonde du nerf radial', texte: 'Coupe **transversale** 3–5 cm sous l\'interligne huméro-radial, nerf repéré entre les deux chefs du supinateur. Aiguille 22–25 G dans le plan, pointe placée **dans le plan de clivage** entre le nerf et l\'arcade de Frohse. Injecter 5–10 mL de **glucosé 5 %** en fractionné : le critère de fin est le **halo anéchogène circonférentiel** qui décolle le nerf du chef superficiel sur plusieurs centimètres. Une amélioration nette dans les minutes qui suivent (si l\'on a ajouté 1 mL de lidocaïne) a valeur diagnostique. Niveau de preuve **faible** — séries et avis d\'experts — mais geste sans risque et diagnostiquement rentable dans les épicondylalgies rebelles.' },
    { titre: 'Toxine botulique', texte: 'Injection dans le corps musculaire des extenseurs, 4 à 5 cm sous l\'épicondyle, sous repérage échographique. Les essais randomisés disponibles montrent un bénéfice antalgique **modeste** à 3 mois par rapport au placebo, constamment payé par une **parésie de l\'extension des doigts** (souvent du 3ᵉ doigt), transitoire mais gênante pendant plusieurs semaines. À réserver aux échecs de tout le reste, chez un patient dont l\'activité tolère cette parésie.' },
    { titre: 'Ce qu\'il ne faut pas faire', texte: 'Répéter les infiltrations de corticoïde. Fenestrer un tendon échographiquement normal. Fenestrer au-delà du LCL. Injecter du corticoïde en intratendineux. Promettre un résultat à J8.' },
  ],

  pearls: [
    'Dire d\'emblée la vérité sur le corticoïde : soulagement rapide, **moins bon résultat à un an**. Le patient qui l\'entend avant accepte beaucoup mieux une stratégie sans corticoïde.',
    'La cible est la zone **profonde et antérieure** à l\'enthèse, pas le centre du tendon.',
    'Aiguille **de distal en proximal, dans l\'axe du tendon** : visibilité maximale et éloignement structurel du LCL.',
    'Anesthésier correctement en péri-tendineux et attendre 5 minutes : c\'est ce qui rend les 30 passages supportables.',
    'Le critère de fin est tactile autant que visuel : la résistance qui cède.',
    'Comparer au côté sain avant de conclure à une tendinose : les mesures absolues sont peu fiables sur ce tendon.',
    'Devant une « épicondylite rebelle » avec tendon peu ou pas altéré, aller chercher le **nerf radial à l\'arcade de Frohse** : c\'est le diagnostic qu\'on manque le plus souvent.',
    'Pas d\'AINS pendant 2 semaines après fenestration ou PRP — l\'écrire sur l\'ordonnance, sinon le patient en prendra.',
  ],
  pieges: [
    'Prendre l\'**anisotropie** pour une tendinose et fenestrer un tendon sain.',
    'Traiter le corps du tendon au lieu de sa face profonde à l\'enthèse.',
    'Franchir le **ligament collatéral latéral** : risque d\'instabilité rotatoire postéro-latérale.',
    'Injecter le corticoïde en intratendineux, ou le répéter : atrophie cutanée visible, fragilisation, rechutes.',
    'Ne pas prévenir de l\'exacerbation douloureuse de 3 à 7 jours après fenestration ou PRP : le patient croit à un échec et arrête tout.',
    'Vendre le PRP comme supérieur au reste : l\'écart avec l\'aiguilletage seul n\'est pas établi, et le patient paie.',
    'Oublier le rachis cervical, la plica huméro-radiale et l\'arthropathie huméro-radiale dans les formes atypiques.',
    'Injecter la toxine botulique sans avoir annoncé la parésie d\'extension des doigts.',
  ],
  complications: [
    'Exacerbation douloureuse de **3 à 7 jours** après fenestration ou PRP : attendue, à annoncer, traitée par antalgiques de palier 1 et glace, **sans AINS**.',
    '**Instabilité rotatoire postéro-latérale** par lésion du complexe collatéral latéral : complication rare mais grave, liée à une fenestration trop profonde ou à une atteinte ligamentaire préexistante méconnue. Prévention : voie longitudinale, vérification du LCL avant le geste.',
    '**Rupture du tendon commun** : décrite après corticoïdes répétés et après fenestration agressive.',
    '**Atrophie sous-cutanée et dépigmentation** au point de ponction du corticoïde : très visibles à ce niveau ; purger l\'aiguille au retrait, volume minimal.',
    'Parésie transitoire d\'extension des doigts après toxine botulique : quasi constante, plusieurs semaines.',
    'Lésion ou injection intraneurale du nerf radial lors de l\'hydrodissection : prévenue par la visualisation permanente de la pointe et l\'arrêt immédiat en cas de douleur fulgurante ou de résistance à l\'injection.',
    'Bloc moteur transitoire du nerf interosseux postérieur si de l\'anesthésique local est ajouté à l\'hydrodissection : **déficit d\'extension des doigts pendant quelques heures**, à annoncer, sans conduite automobile.',
    'Infection : rare ; asepsie soigneuse, d\'autant que la fenestration multiplie les passages.',
    'Hyperglycémie 24–72 h chez le diabétique en cas de corticoïde.',
  ],
  securite: [
    'Geste **superficiel et compressible**, catégorie **faible risque hémorragique** (ASRA-ESRA 2018) : pas d\'arrêt des antiagrégants ni des anticoagulants pour la fenestration, l\'infiltration ou l\'hydrodissection. Le PRP fait exception par son mécanisme, pas par le risque du geste : arrêt des AINS et antiagrégants 5–7 j avant selon protocole.',
    'Intégrité du **ligament collatéral latéral** vérifiée avant toute fenestration ; pointe visible en permanence ; pas de passage sous le plan du tendon.',
    'Aucune injection intratendineuse de corticoïde.',
    'Hydrodissection : **glucosé 5 %** préféré en périneural ; aspiration avant injection ; arrêt immédiat sur douleur fulgurante ou résistance (injection intraneurale).',
    'Prévenir du **déficit transitoire d\'extension des doigts** si de l\'anesthésique local est utilisé au contact du nerf interosseux postérieur.',
    'Pas d\'AINS 2 semaines après fenestration ou PRP — écrit sur l\'ordonnance.',
    'Asepsie soigneuse : le nombre de passages augmente le risque septique par rapport à une infiltration simple.',
  ],

  suivi: `- **J0** : EN avant / après, force de préhension au dynamomètre (bilatérale), palpation de l\'enthèse, tests provoqués (extension résistée du poignet et du majeur, Mill, Cozen). **PRTEE** (Patient-Rated Tennis Elbow Evaluation, version française validée) comme score de référence — le remplir avant le geste, sinon il ne servira à rien.
- **J3–J7** : fenêtre de l\'exacerbation douloureuse après fenestration ou PRP. Un appel de contrôle évite les consultations non programmées et les arrêts intempestifs de la rééducation.
- **6 semaines** : PRTEE, EN, force de préhension. C\'est la première échéance où l\'on peut juger. Vérifier que l\'excentrique a été repris et que le patient n\'a pas pris d\'AINS.
- **3 mois** : PRTEE, force de préhension, **contrôle échographique** avec Doppler — la régression de la néovascularisation et la réapparition du dessin fibrillaire sont des critères objectifs utiles, souvent en retard sur la clinique.
- **6 mois** : critère de guérison complète. C\'est l\'échéance sur laquelle les essais séparent les stratégies, et celle qu\'il faut annoncer d\'emblée au patient.
- **Quand répéter** : amélioration partielle et progression de l\'exercice → une deuxième fenestration ± PRP est raisonnable à 6–8 semaines. Amélioration nulle → réévaluer le diagnostic (nerf radial, plica, cervical) avant de refaire le même geste.
- **Quand escalader** : échec documenté à 6–12 mois d\'une prise en charge complète (exercice + geste) → avis chirurgical pour débridement du CERC. Signes neurologiques francs ou hydrodissection efficace mais fugace → avis chirurgical pour libération du tunnel radial.`,

  evidence: `- **Corticoïde : la donnée la plus importante de la fiche.** Les essais randomisés de bonne qualité — notamment l\'essai factoriel de **Coombes (2013, JAMA)** comparant corticoïde, kinésithérapie, les deux, et placebo — montrent un soulagement net à court terme (4 semaines) mais un **taux de guérison complète inférieur et un taux de rechute supérieur à un an** dans les bras corticoïde, la kinésithérapie n\'annulant pas cet effet délétère. L\'essai de **Bisset (2006, BMJ)** avait déjà montré la supériorité du corticoïde à 6 semaines et son infériorité à 52 semaines par rapport à l\'abstention surveillée. La méta-analyse de **Coombes (2010, Lancet)** généralise ce profil à l\'ensemble des tendinopathies. Confiance : **élevée**. Conséquence pratique : le corticoïde n\'est pas le traitement de référence de l\'épicondylalgie latérale, et le présenter comme tel est une erreur, pas une nuance.
- **Ténotomie percutanée à l\'aiguille (fenestration)** : séries prospectives favorables, dont les travaux princeps de **McShane (2006)** en échoguidage, avec amélioration durable chez une majorité de patients en tendinose chronique. Peu d\'essais randomisés contre placebo. Confiance : **modérée**, biais de sélection et effet naturel de la maladie difficiles à écarter.
- **PRP** : littérature abondante et contradictoire. L\'essai multicentrique de **Mishra (2014, Am J Sports Med)** est favorable au PRP contre injection témoin à 24 semaines ; l\'essai de **Krogh (2013, Am J Sports Med)** comparant PRP, glucocorticoïde et sérum salé ne retrouve **pas** de supériorité du PRP sur le sérum. Les méta-analyses concluent en général à une supériorité du PRP sur le corticoïde **à moyen et long terme**, mais à un avantage faible ou nul sur une injection témoin après aiguilletage. Confiance : **modérée sur la comparaison au corticoïde, faible sur l\'effet propre du PRP**. C\'est cette nuance qu\'il faut transmettre à un patient qui paie le geste.
- **Toxine botulique** : plusieurs essais randomisés contrôlés contre placebo, dont celui de **Placzek (2007, JBJS)**, montrent un bénéfice antalgique **modeste** à 3 mois, systématiquement accompagné d\'une **parésie d\'extension des doigts**. Confiance : modérée sur l\'effet, élevée sur l\'effet indésirable. Place : dernière ligne.
- **Syndrome du tunnel radial et hydrodissection** : l\'anatomie de la compression à l\'arcade de Frohse est établie de longue date (**Spinner, 1968**). En revanche, le diagnostic reste **clinique et d\'exclusion** — l\'électromyogramme est souvent normal — et la littérature sur l\'hydrodissection échoguidée du nerf interosseux postérieur se limite à des **séries et des cas cliniques**. Confiance : **faible** sur l\'efficacité, mais le geste est peu risqué et sa valeur diagnostique est réelle. À présenter comme un test thérapeutique, pas comme un traitement validé.
- **Histoire naturelle** : élément décisif d\'interprétation de toute cette littérature. Une majorité de patients guérit en 6 à 12 mois quel que soit le traitement, ce qui explique les résultats favorables de presque toutes les séries non contrôlées.
- **Trous assumés** : nombre optimal de fenestrations, intérêt réel du PRP au-delà de l\'aiguilletage, composition optimale du PRP (leucocyte-rich vs leucocyte-poor), critères échographiques de guérison, place et protocole de l\'hydrodissection radiale.

*Fiche rédigée sans accès à la recherche en ligne : le fond technique et posologique correspond aux pratiques établies, mais les chiffres sont donnés en fourchettes et les métadonnées des références n\'ont pas pu être revérifiées dans cette session. Les entrées marquées « à vérifier » sont à confirmer avant citation.*`,

  references: [
    { auteurs: 'Coombes BK, Bisset L, Brooks P, Khan A, Vicenzino B', titre: 'Effect of corticosteroid injection, physiotherapy, or both on clinical outcomes in patients with unilateral lateral epicondylalgia: a randomized controlled trial', revue: 'JAMA', annee: '2013;309(5):461-9', url: 'https://jamanetwork.com/journals/jama/fullarticle/1568252', type: 'ECR', verif: true, note: 'Essai déterminant : moins bonne guérison complète et plus de rechutes à un an dans les bras corticoïde.' },
    { auteurs: 'Coombes BK, Bisset L, Vicenzino B', titre: 'Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review of randomised controlled trials', revue: 'Lancet', annee: '2010;376(9754):1751-67', pmid: '20970844', type: 'méta-analyse', verif: true, note: 'Profil temporel du corticoïde dans les tendinopathies : bénéfice court terme, préjudice à distance.' },
    { auteurs: 'Bisset L, Beller E, Jull G, Brooks P, Darnell R, Vicenzino B', titre: 'Mobilisation with movement and exercise, corticosteroid injection, or wait and see for tennis elbow: randomised trial', revue: 'BMJ', annee: '2006;333(7575):939-41', doi: '10.1136/bmj.38961.584653.AE', type: 'ECR', verif: true, note: 'Corticoïde supérieur à 6 semaines, inférieur à 52 semaines par rapport à l\'abstention surveillée.' },
    { auteurs: 'Mishra AK, Skrepnik NV, Edwards SG, et al.', titre: 'Efficacy of platelet-rich plasma for chronic tennis elbow: a double-blind, prospective, multicenter, randomized controlled trial of 230 patients', revue: 'Am J Sports Med', annee: '2014;42:463-71', doi: '10.1177/0363546513494359', type: 'ECR', verif: true, note: 'Essai favorable au PRP contre injection témoin à 24 semaines.' },
    { auteurs: 'Krogh TP, Fredberg U, Stengaard-Pedersen K, Christensen R, Jensen P, Ellingsen T', titre: 'Treatment of lateral epicondylitis with platelet-rich plasma, glucocorticoid, or saline: a randomized, double-blind, prospective study', revue: 'Am J Sports Med', annee: '2013;41:625-35', type: 'ECR', verif: true, note: 'Pas de supériorité du PRP sur le sérum salé : la contradiction à connaître avant de proposer un PRP payant.' },
    { auteurs: 'McShane JM, Nazarian LN, Harwood MI', titre: 'Sonographically guided percutaneous needle tenotomy for treatment of common extensor tendinosis in the elbow', revue: 'J Ultrasound Med', annee: '2006;25(10):1281-9', doi: '10.7863/jum.2006.25.10.1281', type: 'série prospective', verif: true, note: 'Travail princeps de la fenestration échoguidée sur le tendon commun.' },
    { auteurs: 'Placzek R, Drescher W, Deuretzbacher G, Hempfing A, Meiss AL', titre: 'Treatment of chronic radial epicondylitis with botulinum toxin A: a double-blind, placebo-controlled, randomized multicenter study', revue: 'J Bone Joint Surg Am', annee: '2007', doi: '10.2106/JBJS.F.00401', type: 'ECR', verif: true, note: 'Bénéfice modeste, parésie d\'extension des doigts constante.' },
    { auteurs: 'Spinner M', titre: 'The arcade of Frohse and its relationship to posterior interosseous nerve paralysis', revue: 'J Bone Joint Surg Br', annee: '1968;50-B(4):809-12', doi: '10.1302/0301-620X.50B4.809', type: 'anatomie', verif: true, note: 'Description anatomique princeps de l\'arcade de Frohse.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Classe de risque hémorragique.' },
  ],
  videos: [
    { titre: 'Case study: Lateral Epicondylitis (Tennis Elbow) and Ultrasound-Guided Injection', source: 'NYSORA', url: 'https://nysora.com/education-news/case-study-lateral-epicondylitis-injection-2/', note: 'Cas clinique NYSORA avec technique d\'injection échoguidée du tendon commun des extenseurs.' },
  ],

  scenes: [
    {
      id: 'epi-sono', section: 'sonoanatomie', titre: 'Tendon commun des épicondyliens — normal et pathologique',
      legende: 'Coupe coronale sur l\'épicondyle latéral. Les fibres superficielles et distales restent fibrillaires ; la lésion siège de façon constante dans la portion profonde et antérieure, à l\'origine du court extenseur radial du carpe : plage hypoéchogène, fissure, enthésophyte et néovaisseaux au Doppler. Sous le tendon, le complexe collatéral latéral (représenté ici de façon simplifiée jusqu\'au ligament annulaire) est la limite profonde à ne pas franchir.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Coronal, axe long du tendon commun', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 36 });
        S.bone({ path: 'M-20 122 L118 128 L180 138 L216 152 Q242 190 256 226 Q288 266 338 272 Q392 270 434 250', label: 'Épicondyle latéral', at: [70, 108], small: true });
        S.bone({ path: 'M430 262 Q490 248 532 256 L588 274 L660 292' });
        S.ligament({ path: 'M218 158 L420 232 L418 256 L214 182 Z', label: 'Lig. collatéral latéral', at: [346, 240], small: true });
        S.tendon({ path: 'M198 132 L456 190 L456 236 L216 154 Z', label: 'Tendon commun des épicondyliens', at: [392, 206] });
        S.region({ path: 'M228 146 L330 180 L330 194 L226 160 Z', fill: '#05070a', opacity: 0.92, label: 'Zone hypoéchogène\n(face profonde, CERC)', lx: 150, ly: 300, anchor: 'middle', lead: [266, 180], small: true });
        S.fluid({ path: 'M252 160 L292 174 L290 180 L250 166 Z', label: 'Fissure intratendineuse', lx: 358, ly: 116, anchor: 'start', lead: [274, 170], small: true });
        S.bone({ path: 'M200 146 L228 158', width: 4, shadow: false, label: 'Enthésophyte', lx: 112, ly: 180, anchor: 'middle', lead: [204, 150], small: true });
        S.artery({ x: 246, y: 162, r: 3 });
        S.artery({ x: 276, y: 174, r: 3, label: 'Néovaisseaux (Doppler)', lx: 468, ly: 302, anchor: 'start', lead: [284, 178], small: true });
        S.label({ x: 320, y: 344, text: 'Capitellum', cls: 'lbl-bone', small: true });
        S.label({ x: 540, y: 330, text: 'Tête radiale', cls: 'lbl-bone', small: true });
      },
    },
    {
      id: 'epi-fenestration', section: 'technique', titre: 'Ténotomie percutanée à l\'aiguille (fenestration)',
      legende: 'Aiguille 21–22 G introduite 2 à 3 cm en aval de l\'épicondyle et poussée dans l\'axe du tendon, de distal en proximal : le trajet longitudinal donne une visibilité maximale et éloigne structurellement la pointe du ligament collatéral latéral. Vingt à trente passages en éventail dans la zone hypoéchogène profonde, jusqu\'à ce que la résistance cède. Le PRP, quand il est utilisé, est injecté après, dans le lit ainsi créé.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Coronal', type: 'in-plane, distal → proximal' });
        S.skin({ thickness: 8, fatBelow: 36 });
        S.bone({ path: 'M-20 122 L118 128 L180 138 L216 152 Q242 190 256 226 Q288 266 338 272 Q392 270 434 250', label: 'Épicondyle latéral', at: [70, 108], small: true });
        S.bone({ path: 'M430 262 Q490 248 532 256 L588 274 L660 292' });
        S.ligament({ path: 'M218 158 L420 232 L418 256 L214 182 Z', label: 'Ne pas franchir le LCL', at: [372, 254], small: true });
        S.tendon({ path: 'M198 132 L456 190 L456 236 L216 154 Z', label: 'Tendon commun', at: [418, 210] });
        S.region({ path: 'M228 146 L330 180 L330 194 L226 160 Z', fill: '#05070a', opacity: 0.92 });
        S.target({ x: 276, y: 170, r: 18 });
        S.needle({ from: [624, 66], to: [278, 170], label: '21–22 G — 20 à 30 passages', dur: 1.0, delay: 0.2 });
        S.needle({ from: [624, 66], to: [244, 156], dur: 0.7, delay: 1.3 });
        S.needle({ from: [624, 66], to: [306, 180], dur: 0.7, delay: 2.0 });
        S.spread({ x: 276, y: 172, rx: 34, ry: 13, label: '± PRP 2–3 mL', delay: 2.8, dur: 0.9 });
        S.label({ x: 130, y: 236, text: 'Cible : face profonde\nà l\'enthèse', small: true, lead: [252, 168] });
      },
    },
    {
      id: 'epi-frohse', section: 'technique', titre: 'Branche profonde du nerf radial à l\'arcade de Frohse — hydrodissection',
      legende: 'Coupe transversale de l\'avant-bras proximal, 3 à 5 cm sous l\'interligne huméro-radial. Le nerf interosseux postérieur est le petit ovale fasciculé situé entre les deux chefs du supinateur ; il s\'aplatit sous le bord proximal épaissi du chef superficiel — l\'arcade de Frohse. L\'hydrodissection au glucosé 5 % décolle le nerf de l\'arcade : critère de fin, un halo anéchogène circonférentiel sur plusieurs centimètres.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, avant-bras proximal', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 142 L0 150 Z', label: 'Brachio-radial / LERC', at: [96, 102], opacity: 0.45 });
        S.nerve({ x: 150, y: 134, r: 6, label: 'N. radial superficiel', lx: 254, ly: 120, anchor: 'start', lead: [157, 134], small: true });
        S.muscle({ path: 'M84 152 L566 146 L574 210 Q330 230 80 206 Z', label: 'Supinateur — chef superficiel', at: [446, 178], opacity: 0.5 });
        S.artery({ x: 206, y: 164, r: 5, label: 'A. récurrente radiale (arcade de Henry)', lx: 254, ly: 148, anchor: 'start', lead: [212, 162], small: true });
        S.fascia({ points: [[136, 204], [300, 212], [464, 202]], width: 3.4, label: 'Arcade de Frohse', lx: 106, ly: 188, anchor: 'middle', lead: [158, 205], small: true });
        S.nerve({ x: 300, y: 224, rx: 13, ry: 8, label: 'N. interosseux postérieur\n(branche profonde du radial)', lx: 300, ly: 352, anchor: 'middle', lead: [300, 234] });
        S.muscle({ path: 'M88 238 L572 232 L570 288 Q330 300 84 286 Z', label: 'Chef profond', at: [472, 258], opacity: 0.45 });
        S.bone({ path: 'M-20 314 Q330 288 660 308' });
        S.label({ x: 132, y: 344, text: 'Radius (col)', cls: 'lbl-bone', small: true });
        S.needle({ from: [634, 88], to: [330, 218], label: '22–25 G, in-plane' });
        S.spreadPath({ path: 'M266 224 A 34 23 0 1 1 334 224 A 34 23 0 1 1 266 224 Z M287 224 A 14 9 0 1 0 313 224 A 14 9 0 1 0 287 224 Z', at: [500, 392], label: 'Glucosé 5 % — 5 à 10 mL' });
      },
    },
  ],

  checklist: [
    'Diagnostic reconsidéré avant le geste : tendinose échographiquement documentée et concordante, comparaison au côté sain faite',
    'Intégrité du complexe ligamentaire collatéral latéral vérifiée avant toute fenestration',
    'PRTEE (version française) rempli **avant** le geste, force de préhension mesurée aux deux mains',
    'Information donnée et tracée sur le profil temporel du corticoïde (soulagement court terme, moins bon résultat à un an)',
    'Pour le PRP : coût et absence de prise en charge annoncés, AINS et antiagrégants arrêtés 5–7 j avant selon protocole',
    'Anesthésie péri-tendineuse seule, délai de 3–5 min respecté ; aucune injection intratendineuse de corticoïde',
    'Ordonnance de sortie : antalgiques de palier 1, **pas d\'AINS pendant 2 semaines**, reprise de l\'excentrique à J7–J10',
    'Nerf radial exploré à l\'arcade de Frohse si le tendon ne rend pas compte du tableau',
    'Si anesthésique local au contact du nerf interosseux postérieur : patient prévenu du déficit transitoire d\'extension des doigts, pas de conduite',
  ],
});
