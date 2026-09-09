/* Fiche : bloc du plan du dentelé antérieur (serratus anterior plane block). */
ECHO.register({
  id: 'serratus-plane',
  titre: 'Bloc du plan du dentelé antérieur (serratus plane block)',
  titreCourt: 'Serratus plane',
  en: 'Ultrasound-guided serratus anterior plane block (SAPB) — superficial and deep approaches',
  region: 'thorax',
  types: ['bloc'],
  niveau: 1,
  grade: 'Forte en douleur aiguë (méta-analyses d\'ECR) · faible en douleur chronique (séries et cas)',
  maj: '2026-09',
  motsCles: ['SAPB', 'dentelé antérieur', 'serratus', 'Blanco', 'post-mastectomie', 'PMPS', 'post-thoracotomie', 'fractures de côtes', 'intercosto-brachial', 'paroi thoracique', 'bloc de fascia', 'plan interfascial'],
  resume: 'Bloc de fascia de la paroi thoracique latérale : une nappe d\'anesthésique local déposée superficiellement ou profondément au dentelé antérieur, à la ligne axillaire moyenne sur la 4e–5e côte, atteint les branches cutanées latérales des nerfs intercostaux T2–T9 et le nerf intercosto-brachial — ainsi que, de façon incidente, le nerf thoracique long et le nerf thoraco-dorsal, qui sont moteurs et dont le bloc explique la faiblesse transitoire du dentelé. Décrit par Blanco en 2013, c\'est le geste le plus simple et le plus sûr de la paroi thoracique latérale : pas de rachis, pas de risque neuraxial, plèvre visible et tenue à distance sous contrôle de la vue. En algologie il sert de bloc test et de fenêtre thérapeutique dans le syndrome douloureux post-mastectomie, la douleur post-thoracotomie ou post-thoracoscopie, la névralgie intercosto-brachiale et les fractures de côtes. Il ne couvre ni la ligne médiane, ni la paroi antérieure para-sternale, ni les branches cutanées postérieures : une douleur para-sternale ou dorsale ne relève pas de ce bloc. Son point faible est la preuve, robuste en péri-opératoire et très mince dans la douleur chronique constituée. Volumes élevés (20–30 mL) : l\'absorption systémique d\'un bloc interfascial est importante et la dose maximale d\'AL est le vrai facteur limitant, surtout en bilatéral.',

  flash: {
    position: 'lateral', positionNote: 'décubitus latéral, côté à bloquer vers le haut, bras en abduction-antépulsion (main sur la tête) ; décubitus dorsal bras en abduction si le décubitus latéral est trop douloureux',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 3–5 cm ; convexe 2–5 MHz si IMC élevé',
    approche: 'in-plane', approcheNote: 'sonde perpendiculaire aux côtes sur la ligne axillaire moyenne, à hauteur de la 4e–5e côte ; ponction de crânial en caudal, 30–60°',
    aiguille: '21–22 G, 50–80 mm échovisible (80–100 mm si IMC élevé) ; cathéter 18–20 G si bloc continu',
    cible: 'Plan **profond** : décollement du dentelé antérieur du périoste costal et des intercostaux externes, sur le sommet de la côte. Plan **superficiel** : décollement du grand dorsal du dentelé, autour de l\'artère thoraco-dorsale. Critère de fin : nappe anéchogène étalée sur au moins deux espaces intercostaux',
    injectat: '20–30 mL ropivacaïne 0,2–0,375 % ± dexaméthasone 4–8 mg',
    duree: '10–15 min',
  },

  indications: [
    'Syndrome douloureux post-mastectomie (PMPS) : douleur neuropathique du territoire T2–T6 latéral, de l\'aisselle et de la face interne du bras — **bloc test** puis fenêtre thérapeutique pour engager la rééducation et la désensibilisation.',
    'Névralgie intercosto-brachiale après curage axillaire ou ganglion sentinelle : le nerf intercosto-brachial chemine dans le plan superficiel au dentelé, ce qui en fait la meilleure indication « anatomique » du bloc.',
    'Douleur chronique post-thoracotomie ou post-thoracoscopie (PTPS) de topographie latérale.',
    'Fractures de côtes, en aigu comme en subaigu (côtes 3 à 9, arc latéral) : analgésie permettant la kinésithérapie respiratoire et la toux.',
    'Douleur pariétale latérale d\'origine tumorale ou post-radique, zona thoracique en phase aiguë ou névralgie post-zostérienne latérale (données faibles, à confirmer).',
    'Bloc diagnostique de paroi : différencier une douleur pariétale d\'une douleur viscérale ou rachidienne projetée avant d\'engager un geste plus lourd (RF intercostale, ESP, paravertébral).',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides.',
    'Relatives : troubles de l\'hémostase — bloc **superficiel et compressible**, classé à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures douleur ; pas d\'interruption systématique des antiagrégants, anticoagulants au cas par cas.',
    'Poids faible, insuffisance hépatique, grand âge : le volume (20–30 mL) et l\'absorption systémique élevée des blocs interfasciaux imposent de recalculer la dose en mg/kg, pas en mL.',
    'Bloc bilatéral : ne l\'envisager qu\'après calcul de la dose cumulée, avec surveillance monitorée et intralipide disponible.',
    'Anatomie modifiée : lambeau de grand dorsal, prothèse mammaire, radiodermite étendue — repérage plus difficile, plèvre parfois plus proche ; ne pas ponctionner à l\'aveugle dans une zone reconstruite.',
    'Corticoïdes : diabète déséquilibré, infection évolutive.',
  ],
  alternatives: 'Bloc intercostal étagé (plus sélectif, mais 3 à 5 ponctions et absorption systémique supérieure), bloc paravertébral thoracique (couverture complète d\'un hémithorax, y compris branches postérieures et sympathique, mais risque de pneumothorax et d\'extension épidurale), bloc ESP (couverture postérieure, plus profond, plus sûr que le paravertébral), blocs PECS I/II pour la paroi antérieure et la région rétro-mammaire (fiche dédiée). Dans le PMPS, le serratus est le geste d\'entrée : le moins risqué, le plus rapide, et celui qui donne l\'information diagnostique la plus utile. S\'il soulage franchement mais brièvement et de façon reproductible, l\'escalade logique est la radiofréquence des nerfs intercostaux concernés ou un cathéter, pas la répétition indéfinie du bloc.',

  anatomie: `Le **dentelé antérieur** naît des 8 ou 9 premières côtes par des digitations et s\'insère sur le bord médial de la scapula. À la ligne axillaire moyenne, il recouvre la face latérale des côtes et des muscles intercostaux, et il est lui-même recouvert par le **grand dorsal** (en arrière et en bas) et le **grand rond** (en haut). Deux plans interfasciaux exploitables se superposent donc : le plan **superficiel** (entre grand dorsal et dentelé) et le plan **profond** (entre dentelé et côtes / intercostaux externes).

Le **plan superficiel** contient l\'**artère thoraco-dorsale**, le **nerf thoraco-dorsal** et le **nerf thoracique long** : les études cadavériques placent ces trois éléments dans le plan situé entre dentelé et grand dorsal. C\'est aussi là que cheminent, après avoir traversé le dentelé, le **nerf intercosto-brachial** (branche cutanée latérale de T2) et les **branches cutanées latérales** des nerfs intercostaux T3–T9, qui se divisent en rameaux antérieurs et postérieurs pour la peau de la paroi latérale.

Les **branches cutanées latérales** naissent du nerf intercostal dans la gouttière costale, traversent les intercostaux externes puis le dentelé à la hauteur de la ligne axillaire moyenne : elles traversent donc successivement les deux plans, ce qui explique qu\'une injection superficielle **ou** profonde puisse les bloquer.

### Ce qui compte pour le geste
- **Étendue attendue** : anesthésie de l\'hémithorax latéral de T2 à T9 environ dans les études de volontaires ; en pratique clinique la couverture est plus étroite et plus variable, souvent T3–T7. Ne rien promettre au-delà.
- **Ce qui n\'est pas couvert** : les branches cutanées **antérieures** (paroi para-sternale) et **postérieures** (gouttière para-vertébrale), le rachis, la plèvre pariétale médiastinale et le sein médial. Une douleur para-sternale relève du PECS, du pecto-intercostal ou d\'un bloc intercostal antérieur.
- **Superficiel vs profond** : les deux marchent. Le plan profond est privilégié quand on veut éviter d\'infiltrer les plans axillaires (chirurgie du ganglion sentinelle, curage) ; le plan superficiel est plus facile, plus loin de la plèvre, et cible directement le trajet de l\'intercosto-brachial — c\'est celui que je choisis par défaut en douleur chronique. Une étude cadavérique récente sur le bloc profond montre une diffusion au nerf thoracique long, au nerf thoraco-dorsal et aux branches cutanées latérales des 5e–7e espaces, avec passage pleural possible du côté fracturé : la diffusion n\'est jamais totalement prévisible.
- **Profondeurs** : peau–plan superficiel 1–2 cm, peau–plan profond 1,5–3 cm, plèvre 2,5–4 cm chez l\'adulte de corpulence moyenne. La plèvre est donc à moins d\'un centimètre de la cible profonde : elle doit être vue en permanence.
- **Repère osseux fiable** : la côte. Toute pointe d\'aiguille posée **sur le sommet d\'une côte** est mécaniquement tenue à distance de la plèvre — c\'est le principe de sécurité du bloc profond.`,

  installation: {
    patient: `**Décubitus latéral**, côté à bloquer vers le haut, bras en abduction-antépulsion, main posée sur la tête ou sur un support : la scapula se translate en avant, le grand dorsal se met sous tension et la fenêtre axillaire moyenne s\'ouvre. C\'est l\'installation la plus confortable pour l\'opérateur et la plus reproductible.

Alternative : **décubitus dorsal**, bras en abduction à 90°, sonde posée sur la face latérale du thorax — utile chez le patient qui ne tolère pas l\'appui latéral (fractures de côtes, douleur mécanique). Semi-assis possible chez le patient dyspnéique.

Marquer au feutre le mamelon, le creux axillaire et la ligne axillaire moyenne avant la désinfection. Chez la patiente mastectomisée ou reconstruite, repérer et noter les cicatrices : elles déforment les plans et changent les profondeurs.`,
    operateur: `Opérateur **face au patient**, du côté à traiter ; écran en face, dans l\'axe du regard, au-delà du thorax du patient. Sonde tenue dans la main non dominante, talon en appui sur le gril costal (le thorax bouge à chaque respiration : l\'appui est ce qui garde la fenêtre).

Ponction **de crânial en caudal**, dans le plan, l\'aiguille entrant par le bord supérieur de la sonde. Ce sens fait progresser la pointe le long de l\'axe des côtes plutôt que perpendiculairement à la plèvre — en cas de dérive, la pointe bute sur la côte suivante, pas sur le poumon. Prolongateur systématique : le geste se fait à deux mains, une sur la sonde, une sur l\'aiguille.`,
    sonde: `- Linéaire 6–13 MHz, preset MSK ou nerf, profondeur **3–5 cm** (mettre la plèvre au tiers inférieur de l\'écran, jamais hors champ).
- Focale sur le plan visé ; gain réglé pour que les fascias apparaissent en lignes blanches fines et que le glissement pleural reste visible.
- **Doppler couleur** obligatoire avant la ponction : l\'artère thoraco-dorsale dans le plan superficiel, les vaisseaux intercostaux sous le bord inférieur des côtes.
- Vérifier le **glissement pleural** avant le geste et le revérifier après : c\'est la référence qui rendra interprétable toute dyspnée post-procédure.
- IMC élevé : convexe 2–5 MHz, ou linéaire avec compression ferme et fréquence abaissée.`,
  },

  reperage: [
    { titre: 'Compter les côtes', texte: 'Partir de l\'**angle de Louis** (marche palpable du manubrium, en regard du 2e cartilage costal) ou poser la sonde **sagittale sous la clavicule**, en para-sternal : la première côte visible sous la clavicule est la **2e**. Descendre ensuite en glissant vers le bas et le dehors, en comptant les côtes jusqu\'à la **4e ou 5e côte** sur la ligne axillaire moyenne. Compter est plus fiable que viser le mamelon, surtout après mastectomie ou chez la femme âgée.' },
    { titre: 'Orienter la sonde perpendiculairement aux côtes', texte: 'À la ligne axillaire moyenne, la sonde est grossièrement sagittale, perpendiculaire à l\'axe des côtes : on doit voir **deux côtes en coupe transversale** (arcs hyperéchogènes convexes avec cône d\'ombre) séparées par un espace intercostal où le glissement pleural est visible.' },
    { titre: 'Identifier les deux muscles', texte: 'De la superficie à la profondeur : graisse sous-cutanée, **grand dorsal** (fin, à peine 5–10 mm à ce niveau), fascia, **dentelé antérieur** (plus épais, fibres pennées, appliqué sur les côtes). Le grand rond apparaît si l\'on remonte trop haut ; le dentelé seul persiste si l\'on descend en avant.' },
    { titre: 'Doppler', texte: 'Activer le Doppler couleur sur le plan superficiel : l\'**artère thoraco-dorsale** signe le plan entre grand dorsal et dentelé et sert de repère. Vérifier aussi l\'absence de vaisseau sur le trajet d\'aiguille prévu.' },
    { titre: 'Vérifier la plèvre', texte: 'Mesurer la profondeur peau–plèvre et noter le **glissement pleural** dans l\'espace intercostal. Si la plèvre n\'est pas identifiable (emphysème sous-cutané, pansement, obésité majeure), ne pas faire le bloc profond : rester dans le plan superficiel ou renoncer.' },
    { titre: 'Si on ne trouve pas les plans', texte: 'Le repère de secours est **osseux** : poser la pointe au contact du sommet d\'une côte et retirer de 1–2 mm ; l\'hydrodissection ouvre alors le plan profond de façon fiable. Si le grand dorsal n\'est pas identifiable (patient mince, lambeau, position trop antérieure), reculer la sonde vers la ligne axillaire postérieure : le grand dorsal y est franchement plus épais.' },
  ],

  sonoanatomie: [
    { structure: 'Grand dorsal', aspect: 'Muscle superficiel mince (5–15 mm), fibres obliques, hypoéchogène strié', repere: 'Le plus superficiel après la graisse ; s\'épaissit vers l\'arrière' },
    { structure: 'Fascia superficiel du dentelé', aspect: 'Ligne hyperéchogène fine, séparant grand dorsal et dentelé', repere: 'Contient l\'artère thoraco-dorsale — cible du bloc superficiel' },
    { structure: 'Dentelé antérieur', aspect: 'Muscle plus épais, penné, moulé sur les côtes et les espaces intercostaux', repere: 'Se prolonge vers l\'avant en digitations ; c\'est le muscle « qui suit l\'os »' },
    { structure: 'Côtes (4e et 5e)', aspect: 'Arcs hyperéchogènes convexes avec cône d\'ombre postérieur franc', repere: 'Deux côtes dans le champ = bonne orientation de sonde' },
    { structure: 'Muscles intercostaux', aspect: 'Bande fine et striée entre deux côtes, sous le dentelé', repere: 'Fenêtre où la plèvre devient visible' },
    { structure: 'Plèvre', aspect: 'Ligne hyperéchogène brillante avec glissement respiratoire (« sliding »)', repere: 'Toujours dans le champ ; profondeur à noter avant la ponction' },
    { structure: 'Artère thoraco-dorsale', aspect: 'Petit vaisseau pulsatile en Doppler dans le plan superficiel', repere: 'Confirme le plan superficiel ; à éviter avec l\'aiguille' },
    { structure: 'Branches cutanées latérales / intercosto-brachial', aspect: 'Rarement individualisés ; parfois petits points en nid d\'abeilles traversant le dentelé', repere: 'Cible fonctionnelle : c\'est le plan, pas le nerf, que l\'on vise' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Voie veineuse recommandée compte tenu du volume d\'AL. Désinfection large de la paroi latérale et de l\'aisselle, housse de sonde ou gel stérile. Deux seringues de 20 mL étiquetées, aiguille 21–22 G 50–80 mm sur prolongateur purgé.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point de ponction, au bord **crânial** de la sonde, à 1 cm du bord. Facultative avec une aiguille fine, utile avant un cathéter.' },
    { titre: 'Ponction dans le plan, de crânial en caudal', texte: 'Angle 30–60° selon la profondeur. Visualiser l\'aiguille sur toute sa longueur, en permanence. Pour le bloc **superficiel** : arrêter à la traversée du fascia entre grand dorsal et dentelé (ressaut net). Pour le bloc **profond** : traverser le dentelé et poser la pointe au contact du **sommet de la côte**, puis retirer de 1–2 mm.' },
    { titre: 'Hydrolocalisation', texte: 'Aspiration, puis 1–2 mL de sérum physiologique : l\'ouverture du bon plan est un **décollement linéaire anéchogène** qui sépare les deux muscles sur plusieurs centimètres. Si l\'injectat forme une lentille arrondie **dans** le muscle, la pointe est intramusculaire : avancer ou reculer de 1–2 mm et refaire le test. Ne jamais injecter le volume complet sans avoir vu la nappe se former.' },
    { titre: 'Injection fractionnée', texte: '20–30 mL par bolus de 5 mL, avec aspiration entre chaque, en suivant la progression de la nappe en crânial et en caudal. Repositionner la sonde en cours d\'injection pour vérifier que la diffusion couvre au moins **deux espaces intercostaux**. Interroger le patient à chaque bolus (goût métallique, acouphènes, paresthésies péribuccales).' },
    { titre: 'Critère de fin', texte: 'Nappe hypoéchogène continue entre les deux muscles, s\'étendant sur ≥ 2 espaces, sans lentille intramusculaire, sans disparition de l\'injectat (signe d\'un passage intravasculaire), plèvre intacte et glissement pleural conservé. Retrait, pansement.' },
    { titre: 'Après le geste', texte: 'Contrôler le glissement pleural. Cartographier au test du froid ou à la piqûre le territoire anesthésié à 20–30 min : c\'est ce qui donne au bloc sa valeur diagnostique. Surveillance 30 min minimum (volumes d\'AL). EN avant / à 30 min / à 24 h. Consignes : hypoesthésie du flanc et de la face interne du bras attendue 6–12 h, pas de source de chaleur sur la zone insensible.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 % | 20 mL | Volume nécessaire à l\'étalement du plan : ce bloc n\'est pas « sélectif », un petit volume ne le rend pas plus spécifique, il le rend seulement inefficace. Cartographier le territoire à 20–30 min |
| Bloc thérapeutique (PMPS, PTPS, névralgie intercosto-brachiale) | Ropivacaïne 0,2–0,375 % ± dexaméthasone 4–8 mg | 20–30 mL | La dexaméthasone est l\'adjuvant le mieux documenté des blocs de fascia pour prolonger la durée ; usage hors AMM en périnerveux, à tracer |
| Fractures de côtes | Ropivacaïne 0,2–0,375 % ou bupivacaïne 0,25 % | 20–30 mL | Répétable ; envisager un cathéter au-delà de deux injections |
| Bloc continu | Cathéter interfascial, ropivacaïne 0,2 % | 5–10 mL/h ou bolus intermittents 10–20 mL / 4–6 h | Réservé aux situations hospitalières avec surveillance de la dose cumulée sur 24 h |

**Doses maximales à recalculer systématiquement** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Ordres de grandeur utiles : 30 mL de ropivacaïne 0,375 % = **112,5 mg** ; 30 mL de ropivacaïne 0,5 % = **150 mg** ; un bloc **bilatéral** à 2 × 30 mL de 0,375 % = **225 mg**, soit la dose maximale d\'un patient de 75 kg — sans marge pour un autre bloc dans la même séance.

Les blocs interfasciaux exposent à une **absorption systémique élevée** (grande surface de diffusion, tissu bien vascularisé), avec des pics plasmatiques comparables à ceux d\'un bloc intercostal. Le volume est donc un paramètre de sécurité, pas seulement d\'efficacité : diluer plutôt que concentrer, et ne jamais additionner deux blocs de fascia sans calcul écrit.

**Pas de corticoïde particulaire** ici : aucun bénéfice démontré sur un plan de fascia, et risque d\'atrophie et de dépigmentation en cas de reflux sous-cutané. Si un corticoïde est utilisé, préférer la dexaméthasone (non particulaire) comme adjuvant.`,

  variantes: [
    { titre: 'Plan superficiel vs plan profond', texte: `**Superficiel** (entre grand dorsal et dentelé) : plan le plus large, le plus loin de la plèvre, contenant l\'intercosto-brachial et les branches cutanées latérales déjà émergées. Plus facile, plus sûr — mon choix par défaut en douleur chronique de paroi latérale et en névralgie intercosto-brachiale.

**Profond** (entre dentelé et côtes) : plan plus étroit, à ouvrir sur le sommet d\'une côte. Il évite d\'infiltrer les plans axillaires et semble donner une diffusion un peu plus étendue en direction des espaces intercostaux. Les essais comparatifs en chirurgie mammaire ne dégagent pas de supériorité nette de l\'un sur l\'autre en termes d\'analgésie ; le choix se fait sur l\'anatomie du patient et sur ce que l\'on veut éviter d\'infiltrer.` },
    { titre: 'Cathéter interfascial', texte: 'Le plan se prête bien à un cathéter (nappe ouverte à l\'hydrodissection puis cathéter avancé de 3–5 cm). Indications en algologie : fractures de côtes multiples, poussée douloureuse tumorale pariétale, préparation d\'une kinésithérapie intensive dans un PMPS très évolué. Contrainte : structure d\'hospitalisation, surveillance de la dose cumulée, risque infectieux au-delà de 72 h. Peu adapté à un HDJ.' },
    { titre: 'Radiofréquence : ce qui est décrit et ce qui ne l\'est pas', texte: `Il n\'existe pas de « radiofréquence du plan du dentelé » : un plan interfascial est un espace, pas une cible nerveuse — on ne lésionne pas un fascia. Ce qui est décrit en douleur chronique de paroi, après un bloc test positif, c\'est la **radiofréquence des nerfs intercostaux** correspondants (RF pulsée, RF thermique ou RF refroidie selon les équipes) ou de leurs branches cutanées latérales, et, pour la paroi antérieure, des cas de radiofréquence dans le plan pecto-intercostal.

Conséquence pratique : le serratus est un **outil de sélection**. Si le patient est soulagé de façon franche, reproductible et strictement limitée à la durée de l\'AL, la question posée est « quels espaces intercostaux » — et la réponse s\'obtient ensuite par des blocs intercostaux étagés sélectifs, pas par la répétition du bloc de plan.` },
    { titre: 'Associations', texte: 'Serratus + PECS I/II pour couvrir simultanément la paroi antérieure et la région rétro-mammaire dans un PMPS étendu (attention à la dose cumulée d\'AL : c\'est la limite, pas la technique). Serratus + ESP quand la douleur déborde en arrière. En prévention post-opératoire, l\'association d\'un bloc interpectoral et d\'un serratus superficiel a été évaluée dans un essai randomisé contre placebo sur la douleur persistante après mastectomie totale.' },
    { titre: 'Rhomboid intercostal / sous-serratus', texte: 'Variante plus postérieure décrite pour la chirurgie thoracique, injectant entre rhomboïde et intercostaux puis sous le dentelé, dans l\'idée de couvrir aussi les rameaux postérieurs. Littérature encore limitée à des essais péri-opératoires ; pas de donnée en douleur chronique (à confirmer).' },
  ],

  pearls: [
    'Compter les côtes depuis la clavicule plutôt que de viser une hauteur « au jugé » : après mastectomie ou reconstruction, tous les repères de surface mentent.',
    'Deux côtes dans le champ = sonde bien orientée. Une seule côte, ou aucune, = sonde parallèle aux côtes, image ininterprétable.',
    'Le sommet de la côte est le garde-fou du bloc profond : la pointe posée sur l\'os ne peut pas atteindre la plèvre.',
    'Le bon signe est le **décollement linéaire** des deux muscles, pas une lentille d\'injectat. Une lentille ronde = intramusculaire = bloc raté.',
    'Cartographier le territoire anesthésié à 30 min et le dessiner dans le dossier : c\'est l\'information qui orientera un geste intercostal ciblé plus tard.',
    'Chez la patiente reconstruite par lambeau de grand dorsal, le plan superficiel n\'existe plus au niveau du prélèvement : passer d\'emblée par le plan profond, plus haut ou plus bas que la zone opérée.',
  ],
  pieges: [
    'Attendre du serratus qu\'il couvre une douleur para-sternale ou dorsale : il ne le fera jamais, et un « échec » de ce type est en réalité une erreur d\'indication.',
    'Raisonner en millilitres et non en milligrammes : 30 mL bilatéraux de ropivacaïne 0,375 % saturent la dose maximale d\'un adulte de 75 kg.',
    'Perdre la plèvre de vue en travaillant en profondeur réduite pour « mieux voir » les plans superficiels.',
    'Confondre le fascia entre grand dorsal et dentelé avec le fascia profond du dentelé, et injecter dans le corps du dentelé.',
    'Injecter sans hydrolocalisation préalable : sur un plan interfascial, on ne rattrape pas un mauvais placement une fois les 20 mL passés.',
    'Répéter le bloc indéfiniment sans stratégie de sortie : un bloc de fascia qui soulage 8 h et qu\'on refait tous les mois n\'est pas un traitement, c\'est un report de décision.',
  ],
  complications: [
    '**Pneumothorax** : rare mais rapporté, y compris sous échographie et avec l\'approche profonde. Conduite à tenir : arrêt du geste, échographie pleurale immédiate (perte du glissement, point poumon), surveillance, radiographie et avis si symptomatique.',
    '**Toxicité systémique des AL (LAST)** : le vrai risque de ce bloc, du fait des volumes et de l\'absorption interfasciale. Prodromes (goût métallique, acouphènes, dysarthrie, agitation) → arrêt immédiat, oxygène, intralipide 20 % disponible dans la salle.',
    'Ponction de l\'artère thoraco-dorsale : hématome de la loge axillaire, compressible ; Doppler avant la ponction.',
    'Bloc moteur du dentelé ou du grand dorsal : faiblesse transitoire, scapula ailée passagère si diffusion au nerf thoracique long — à annoncer, sans conséquence.',
    'Douleur ou ecchymose au point de ponction ; infection exceptionnelle (plus à craindre avec un cathéter).',
    'Chez le patient dyspnéique, aggravation par la douleur de l\'installation en décubitus latéral : préférer le décubitus dorsal.',
  ],
  securite: [
    'Bloc superficiel, site compressible : **faible risque hémorragique** (ASRA-ESRA 2018, procédures douleur) — pas d\'arrêt systématique des antiagrégants ; anticoagulants au cas par cas.',
    'La plèvre doit être visible à l\'écran pendant tout le geste ; pointe d\'aiguille jamais perdue de vue ; en cas de doute, hydrolocaliser plutôt qu\'avancer.',
    'Dose calculée en mg/kg **avant** de préparer les seringues, et écrite. Voie veineuse et intralipide 20 % disponibles pour tout volume ≥ 20 mL.',
    'Aspiration avant chaque bolus de 5 mL, contact verbal maintenu avec le patient.',
    'Échographie pleurale de contrôle après le geste (glissement conservé) : c\'est ce qui rendra interprétable une dyspnée survenant plus tard.',
    'Pas de bloc bilatéral en HDJ sans monitorage et sans marge sur la dose maximale.',
  ],

  suivi: `- **J0** : EN avant / 30 min / 24 h, **cartographie du territoire anesthésié** (croquis dans le dossier), test du froid, tolérance. C\'est le socle de la valeur diagnostique.
- **J15–J30** : EN moyenne et maximale, DN4 ou questionnaire neuropathique si PMPS, sommeil, consommation d\'antalgiques, capacité à mobiliser l\'épaule et le bras. Décision : répéter (au plus 2 à 3 fois, avec un bénéfice croissant attendu), passer à un bloc intercostal étagé sélectif si le territoire utile est identifié, ou changer de stratégie (traitement neuropathique systémique, TENS, désensibilisation, rééducation).
- **3 mois** : durée réelle de l\'effet, retour à la kinésithérapie, reprise d\'activité. Un bloc dont l\'effet n\'excède pas la durée pharmacologique de l\'AL, deux fois de suite, ne doit plus être répété tel quel.
- Fractures de côtes : capacité inspiratoire, efficacité de la toux, spirométrie incitative — ce sont ces critères, pas l\'EN seule, qui justifient la répétition ou un cathéter.
- Coupler systématiquement à la rééducation et à la désensibilisation : le bloc ouvre une fenêtre, il ne traite pas.`,

  evidence: `- **Description princeps (Blanco 2013, Anaesthesia)** : injection superficielle ou profonde au dentelé chez le volontaire, anesthésie de l\'hémithorax latéral décrite de T2 à T9, durée prolongée. C\'est une étude de faisabilité sur volontaires, pas un essai d\'efficacité.
- **Douleur aiguë post-opératoire (chirurgie mammaire, thoracoscopie)** : plusieurs méta-analyses d\'ECR concluent à une réduction significative de la douleur et de la consommation d\'opioïdes par rapport au traitement standard. Preuve **forte** dans ce cadre.
- **Fractures de côtes** : revues systématiques et méta-analyses d\'ECR récentes favorables sur la douleur et la fonction respiratoire, avec un profil de sécurité meilleur que la péridurale ou le paravertébral, mais une efficacité un peu inférieure à ces derniers sur le critère « douleur nulle ou minime ». L\'essai randomisé SABRE en traumatologie a évalué le bloc en prise en charge précoce. Preuve **modérée**.
- **Prévention de la douleur chronique post-mastectomie** : un ECR a rapporté une réduction de la prévalence de la douleur chronique à 3 et 6 mois avec un bloc pré-opératoire à la ropivacaïne 0,5 % ; un essai randomisé contre placebo en triple aveugle a évalué l\'association bloc interpectoral + serratus superficiel sur la douleur persistante après mastectomie totale. Preuve **modérée et hétérogène**, sur un critère de prévention.
- **Traitement de la douleur chronique constituée (PMPS, PTPS, névralgie intercosto-brachiale)** : c\'est le trou de la littérature. On ne dispose que de séries et de cas — dont une série sur la gestion au long cours de la douleur post-thoracoscopie — sans essai contrôlé. Preuve **faible** ; l\'usage se justifie par la sécurité du geste et par sa valeur diagnostique, pas par un niveau de preuve d\'efficacité.
- **Superficiel vs profond** : essais randomisés en chirurgie mammaire sans différence nette ; étude cadavérique récente décrivant la diffusion du bloc profond (nerf thoracique long, nerf thoraco-dorsal, branches cutanées latérales T5–T7). Preuve **faible**, choix technique laissé à l\'opérateur.
- **Radiofréquence dans ce plan** : aucune donnée. Ce qui existe concerne les nerfs intercostaux (RF pulsée, thermique, refroidie) et, en para-sternal, le plan pecto-intercostal.`,

  references: [
    { auteurs: 'Blanco R, Parras T, McDonnell JG, Prats-Galino A', titre: 'Serratus plane block: a novel ultrasound-guided thoracic wall nerve block', revue: 'Anaesthesia', annee: '2013', doi: '10.1111/anae.12344', type: 'description princeps', verif: true },
    { auteurs: 'Xie C, et al.', titre: 'A narrative review of ultrasound-guided serratus anterior plane block', revue: 'Ann Palliat Med', url: 'https://apm.amegroups.org/article/view/59494/html', type: 'revue', verif: true, note: 'Année non affichée dans le résultat consulté.' },
    { auteurs: '—', titre: 'Research progress on serratus anterior plane block in breast surgery: a narrative review', revue: 'Pain Ther', annee: '2022', doi: '10.1007/s40122-022-00456-z', type: 'revue', verif: true },
    { auteurs: '—', titre: 'The deep serratus anterior plane block for intensive care management of rib fractures: a cadaveric study on spread patterns', revue: 'BMC Anesthesiol', annee: '2025', doi: '10.1186/s12871-025-03527-8', type: 'anatomie / cadavre', verif: true },
    { auteurs: '—', titre: 'Efficacy and safety of serratus anterior plane block for pain management in patients with rib fractures: a systematic review and meta-analysis of randomized controlled trials', revue: '—', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC12943399/', type: 'méta-analyse', verif: true, note: 'Revue et année non affichées dans le résultat consulté.' },
    { auteurs: '—', titre: 'Serratus anterior plane blocks for early rib fracture pain management: the SABRE randomized clinical trial', revue: '—', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11063926/', type: 'ECR', verif: true, note: 'Revue et année non affichées dans le résultat consulté.' },
    { auteurs: '—', titre: 'Serratus anterior plane block reduces the prevalence of chronic postsurgical pain after modified radical mastectomy: a randomized controlled trial', revue: '—', url: 'https://www.sciencedirect.com/science/article/abs/pii/S0952818021002506', type: 'ECR', verif: true },
    { auteurs: '—', titre: 'The combination of interpectoral plane and superficial serratus anterior plane blocks for the prevention of persistent pain after total mastectomy: a triple-blinded, randomised, placebo-controlled trial', revue: '—', pmid: '41006194', type: 'ECR', verif: true },
    { auteurs: '—', titre: 'Comparison of the analgesic efficacy of ultrasound-guided superficial serratus anterior plane block with deep serratus anterior plane block in patients undergoing modified radical mastectomy: a randomized clinical trial', revue: '—', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC9703619/', type: 'ECR', verif: true },
    { auteurs: '—', titre: 'Serratus anterior block for long-term post-thoracoscopy pain management', revue: 'J Pain Res', doi: '10.2147/JPR.S295019', type: 'série', verif: true },
    { auteurs: '—', titre: 'Pneumothorax following serratus anterior plane block', revue: '—', pmid: '32154513', type: 'complication', verif: true },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
  ],
  videos: [
    { titre: 'Ultrasound-guided serratus anterior blocks — StatPearls', source: 'NCBI Bookshelf (texte + figures)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538476/' },
    { titre: 'How I do it: serratus anterior plane block for rib fractures', source: 'ASRA News (2020)', url: 'https://asra.com/news-publications/asra-newsletter/newsletter-item/asra-news/2020/05/02/how-i-do-it-serratus-anterior-plane-block-for-rib-fractures' },
    { titre: 'Pectoralis and serratus plane nerve blocks', source: 'NYSORA', url: 'https://www.nysora.com/topics/regional-anesthesia-for-specific-surgical-procedures/thorax/pectoralis-serratus-plane-blocks/' },
    { titre: 'Serratus anterior plane block', source: 'LITFL — Nerve Block Library', url: 'https://litfl.com/serratus-anterior-plane-block/' },
  ],

  scenes: [
    {
      id: 'sap-repere', section: 'sonoanatomie', titre: 'Ligne axillaire moyenne, 4e–5e côte — vue de repérage',
      legende: 'Sonde perpendiculaire aux côtes : deux côtes en coupe avec leur cône d\'ombre, muscles intercostaux et plèvre dans l\'espace. De la superficie à la profondeur : grand dorsal, plan superficiel (artère thoraco-dorsale, nerf thoracique long), dentelé antérieur moulé sur les côtes, plan profond sur le périoste.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Perpendiculaire aux côtes, ligne axillaire moyenne', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 78 L640 78 L640 126 L0 122 Z', label: 'Grand dorsal', at: [66, 104] });
        S.fascia({ points: [[0, 122], [640, 126]], width: 1.8 });
        S.muscle({ path: 'M0 130 L640 130 L640 240 Q580 246 520 244 Q445 200 370 244 Q310 254 250 244 Q175 200 100 244 Q50 246 0 240 Z', label: 'Dentelé antérieur', at: [112, 180], opacity: 0.5 });
        S.muscle({ path: 'M0 240 Q50 246 100 244 L96 282 Q50 288 0 280 Z', opacity: 0.45 });
        S.muscle({ path: 'M250 244 Q310 254 370 244 L368 284 Q310 296 252 284 Z', label: 'Mm. intercostaux', at: [310, 268], opacity: 0.45, small: true });
        S.muscle({ path: 'M520 244 Q580 246 640 240 L640 280 Q580 288 524 284 Z', opacity: 0.45 });
        S.bone({ path: 'M104 246 Q175 200 246 246', label: 'Côte (4e)', at: [175, 322] });
        S.bone({ path: 'M374 246 Q445 200 516 246', label: 'Côte (5e)', at: [445, 300] });
        S.pleura({ points: [[0, 278], [46, 286], [96, 282]] });
        S.pleura({ points: [[254, 288], [310, 296], [366, 288]], label: 'Plèvre', at: [310, 318], small: true });
        S.pleura({ points: [[524, 284], [582, 288], [640, 278]] });
        S.lung({ path: 'M250 298 L370 298 L378 420 L242 420 Z', label: 'Poumon', at: [310, 362], small: true });
        S.artery({ x: 524, y: 124, r: 5.5, label: 'A. thoraco-dorsale', lx: 546, ly: 100, small: true, lead: [528, 117] });
        S.nerve({ x: 162, y: 126, r: 4.5, label: 'N. thoracique long', lx: 244, ly: 100, small: true, lead: [167, 122] });
        S.nerve({ x: 302, y: 236, r: 4, label: 'Br. cutanées latérales (T2–T9)', lx: 470, ly: 334, anchor: 'middle', small: true, lead: [306, 240] });
      },
    },
    {
      id: 'sap-bloc', section: 'technique', titre: 'Bloc profond — aiguille dans le plan, pointe sur le sommet de la côte',
      legende: 'Ponction de crânial en caudal, 30–60°. La pointe touche le périoste au sommet de la 4e côte puis recule de 1–2 mm : la plèvre est mécaniquement hors d\'atteinte. L\'injectat décolle le dentelé de la côte en une nappe qui doit couvrir deux espaces. Le plan superficiel (flèche) est la variante par défaut en douleur chronique.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Perpendiculaire aux côtes', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 78 L640 78 L640 126 L0 122 Z', label: 'Grand dorsal', at: [66, 104] });
        S.fascia({ points: [[0, 122], [640, 126]], width: 1.8 });
        S.muscle({ path: 'M0 130 L640 130 L640 240 Q580 246 520 244 Q445 200 370 244 Q310 254 250 244 Q175 200 100 244 Q50 246 0 240 Z', label: 'Dentelé antérieur', at: [112, 182], opacity: 0.5 });
        S.muscle({ path: 'M250 244 Q310 254 370 244 L368 284 Q310 296 252 284 Z', opacity: 0.45 });
        S.muscle({ path: 'M520 244 Q580 246 640 240 L640 280 Q580 288 524 284 Z', opacity: 0.45 });
        S.muscle({ path: 'M0 240 Q50 246 100 244 L96 282 Q50 288 0 280 Z', opacity: 0.45 });
        S.bone({ path: 'M104 246 Q175 200 246 246', label: '4e côte', at: [175, 330] });
        S.bone({ path: 'M374 246 Q445 200 516 246', label: '5e côte', at: [445, 330] });
        S.pleura({ points: [[254, 288], [310, 296], [366, 288]], label: 'Plèvre — jamais hors champ', at: [312, 316], small: true });
        S.pleura({ points: [[0, 278], [46, 286], [96, 282]] });
        S.pleura({ points: [[524, 284], [582, 288], [640, 278]] });
        S.artery({ x: 524, y: 124, r: 5.5 });
        S.target({ x: 176, y: 214, r: 15 });
        S.needle({ from: [10, 92], to: [172, 216], label: '21–22 G, 30–60°, de crânial en caudal' });
        S.spread({ x: 190, y: 226, rx: 108, ry: 11, label: '20–30 mL — plan profond' });
        S.arrow({ from: [470, 176], to: [470, 130], text: 'Plan superficiel (variante)' });
      },
    },
  ],

  checklist: [
    'Dose d\'AL recalculée en mg/kg et écrite avant de préparer les seringues (bloc à haut volume, absorption interfasciale élevée)',
    'Intralipide 20 % et voie veineuse disponibles ; surveillance 30 min après l\'injection',
    'Glissement pleural vérifié avant ET après le geste, noté dans le compte rendu',
    'Territoire anesthésié cartographié à 20–30 min (croquis) : c\'est la valeur diagnostique du bloc',
    'Plan utilisé (superficiel / profond) et niveau costal tracés dans le dossier',
  ],
});
