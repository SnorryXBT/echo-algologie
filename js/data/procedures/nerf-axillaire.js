/* Fiche : nerf axillaire — bloc échoguidé dans l'espace quadrilatère et au col chirurgical, PRF des branches articulaires. */
ECHO.register({
  id: 'nerf-axillaire',
  titre: 'Nerf axillaire — bloc échoguidé et radiofréquence pulsée',
  titreCourt: 'Nerf axillaire',
  en: 'Ultrasound-guided axillary (circumflex) nerve block — posterior approach in the quadrilateral space and at the surgical neck of the humerus; pulsed radiofrequency of the articular branches',
  region: 'membre-sup',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Modérée en association au bloc suprascapulaire (ECR de petite taille) · faible en bloc isolé',
  maj: '2026-09',
  motsCles: ['nerf circonflexe', 'espace quadrilatère', 'col chirurgical', 'capsulite rétractile', 'épaule gelée', 'omarthrose', 'épaule hémiplégique', 'artère circonflexe postérieure', 'branches articulaires', 'PRF', 'bloc combiné', 'shoulder block'],
  resume: 'Le nerf axillaire est le **deuxième des trois ponts** de l\'innervation sensitive de l\'épaule : il prend en charge la capsule **antéro-inférieure** et **inférieure**, précisément la zone que le bloc suprascapulaire ne couvre pas. C\'est pour cela qu\'il ne se conçoit presque jamais seul en algologie, mais **en association au bloc suprascapulaire** — le « shoulder block » décrit par Price en 2007, repris sous échographie après la description de Rothe en 2011. Deux cibles échoguidées : l\'**espace quadrilatère** par voie postérieure, où le nerf accompagne l\'artère circonflexe postérieure de l\'humérus, et le **col chirurgical** sous le deltoïde, où cheminent les branches articulaires décrites par Eckmann. La contrepartie du bloc proximal est le **bloc moteur du deltoïde**, transitoire mais gênant, qu\'il faut annoncer. La radiofréquence pulsée des branches articulaires est l\'escalade logique après un bloc test positif ; les données restent des séries.',

  flash: {
    position: 'assis', positionNote: 'assis dos à l\'opérateur, bras pendant ou main sur la cuisse opposée ; décubitus latéral côté à traiter vers le haut, ou décubitus ventral, si risque vagal',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 4–6 cm ; convexe 2–5 MHz si morphotype épais (le nerf est à 3–5 cm)',
    approche: 'in-plane', approcheNote: 'sonde **sagittale**, appliquée sur la face postérieure de l\'épaule, 2–3 cm sous l\'angle postéro-latéral de l\'acromion ; ponction de crânial en caudal',
    aiguille: '22 G, 50–80 mm échovisible ; aiguille RF 22 G 100 mm à extrémité active 5–10 mm pour la PRF',
    cible: 'Espace quadrilatère : nerf et artère circonflexe postérieure, entre petit rond (crânial) et grand rond (caudal), contre le col chirurgical. Critère de fin : nappe anéchogène entourant le signal Doppler, contre l\'os',
    injectat: '5–10 mL ropivacaïne 0,2–0,5 % ± corticoïde (méthylprednisolone 40 mg ou équivalent)',
    duree: '10–15 min bloc · 25–35 min PRF',
  },

  indications: [
    '**Épaule douloureuse chronique, en association au bloc suprascapulaire** : capsulite rétractile (surtout en phase douloureuse et raide), omarthrose, arthrite inflammatoire, rupture non opérable de la coiffe avec douleur antéro-inférieure. C\'est l\'indication principale — le bloc combiné couvre les capsules postéro-supérieure et antéro-inférieure.',
    '**Épaule hémiplégique douloureuse** : bloc combiné suprascapulaire + axillaire, sans corticoïde possible, chez des patients pour lesquels la mobilisation passive est le traitement.',
    '**Douleur antérieure et inférieure persistante après un bloc suprascapulaire efficace mais incomplet** : c\'est la situation qui révèle le territoire axillaire, et c\'est le meilleur argument d\'indication.',
    '**Bloc test avant radiofréquence pulsée** des branches articulaires de l\'épaule, ou avant dénervation chirurgicale.',
    '**Syndrome de l\'espace quadrilatère** (compression du nerf axillaire et de l\'artère circonflexe postérieure) : bloc diagnostique et hydrodissection, chez le sportif de lancer — entité rare, données limitées.',
    'Analgésie de la chirurgie d\'épaule en association au bloc suprascapulaire, quand un bloc interscalénique est contre-indiqué (insuffisance respiratoire) — hors périmètre de ce mémo, mais c\'est la source de la plupart des données.',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides.',
    'Relatives : troubles de l\'hémostase. Les blocs périphériques sont globalement classés à **faible risque hémorragique** par l\'ASRA-ESRA 2018, mais celui-ci est **profond et non compressible**, avec une artère à la cible : le traiter en pratique comme un site **à risque intermédiaire** (un hématome de l\'espace quadrilatère ne se comprime pas et peut comprimer le nerf). Pas d\'arrêt systématique des antiagrégants ; anticoagulants au cas par cas, avec la même prudence que pour un bloc profond.',
    '**Déficit moteur préexistant du deltoïde**, ou patient dont l\'autonomie repose sur l\'abduction du bras (transferts, béquilles, fauteuil roulant manuel) : le bloc moteur transitoire est alors une perte fonctionnelle réelle pendant quelques heures. En parler avant, prévoir l\'accompagnement du retour à domicile.',
    'Neuropathie axillaire connue ou suspectée (post-traumatique, post-luxation) : un bloc peut masquer l\'évolution ; faire l\'EMG d\'abord si le diagnostic n\'est pas fait.',
    'Corticoïdes : diabète déséquilibré, infection évolutive, prothèse d\'épaule ou chirurgie programmée à moins de 3 mois.',
  ],
  alternatives: 'Bloc suprascapulaire seul (fiche dédiée) : première ligne, couvre environ 70 % de l\'innervation sensitive de l\'épaule — c\'est par lui qu\'on commence, toujours. Infiltration intra-articulaire gléno-humérale ou hydrodilatation capsulaire dans la capsulite (fiche dédiée), qui traitent la capsule plutôt que son innervation. Bloc interscalénique (analgésie complète mais bloc phrénique quasi constant : à proscrire en HDJ douleur). Bloc du nerf pectoral latéral pour le troisième « pont » antéro-supérieur, inconstant et peu documenté. En pratique : **suprascapulaire d\'abord, axillaire ensuite si la douleur antéro-inférieure persiste**, puis PRF sur la ou les cibles ayant répondu.',

  anatomie: `Le nerf axillaire naît du **cordon postérieur** du plexus brachial (C5–C6). Il quitte l\'aisselle en traversant l\'**espace quadrilatère**, délimité par : le **petit rond** en haut, le **grand rond** en bas, la **longue portion du triceps** en dedans et le **col chirurgical de l\'humérus** en dehors. Il y est accompagné de l\'**artère circonflexe postérieure de l\'humérus**, repère Doppler du bloc.

À la sortie de l\'espace, il se divise en deux branches :
- une **branche postérieure** : petit rond, puis **nerf cutané latéral supérieur du bras** (peau du moignon de l\'épaule) ;
- une **branche antérieure** : contourne le **col chirurgical** sous le deltoïde, à 5–7 cm de l\'angle acromial, et innerve le deltoïde.

Des **branches articulaires** naissent au voisinage de l\'espace quadrilatère et du col et gagnent la **capsule antéro-inférieure et inférieure** de l\'articulation gléno-humérale — c\'est la description cadavérique d\'Eckmann, reprise par les travaux sur les cibles de dénervation de l\'épaule.

### Ce qui compte pour le geste
- **Les trois ponts sensitifs de l\'épaule** (Laumonerie 2020) : suprascapulaire (postéro-supérieur, majoritaire), **axillaire (antéro-inférieur)**, pectoral latéral (antéro-supérieur, inconstant). Ce découpage justifie la pratique du bloc combiné : un suprascapulaire seul laisse en place tout le versant antéro-inférieur.
- **Bloc proximal = bloc moteur.** Dans l\'espace quadrilatère, le nerf est encore complet : le bloc entraîne une **paralysie transitoire du deltoïde** (2–6 h). C\'est attendu, ce n\'est pas une complication, mais ce n\'est pas anodin pour un patient âgé ou hémiplégique.
- **Cible distale = plus sélective.** Au **col chirurgical**, sous le deltoïde, on peut viser les branches articulaires en épargnant en partie la fonction musculaire — c\'est la cible de la radiofréquence pulsée, pour la même raison qu\'on choisit l\'échancrure spinoglénoïdienne plutôt que la fosse pour le suprascapulaire.
- **L\'artère est le repère, pas la cible.** L\'artère circonflexe postérieure signe l\'espace quadrilatère ; sur la coupe sagittale postérieure, le nerf est le plus souvent **immédiatement crânial** à l\'artère (parfois accolé à elle), et n\'est individualisé que chez le sujet mince — la variabilité est réelle, ne pas se fier à la seule position théorique.
- **L\'artère circonflexe postérieure assure l\'essentiel de la vascularisation de la tête humérale** : c\'est un argument de plus pour l\'aspiration systématique, et pour préférer un corticoïde non particulaire (dexaméthasone) si la pointe reste au contact du signal Doppler.
- **Profondeurs** : nerf à **3–5 cm** chez l\'adulte de corpulence moyenne, jusqu\'à 6 cm ; le col chirurgical à 4–6 cm. C\'est plus profond que le suprascapulaire — d\'où le niveau 2 et l\'intérêt d\'une aiguille échovisible.
- **La longue portion du triceps est médiale, donc hors du plan** de la coupe sagittale postérieure : on ne la voit pas, et vouloir la trouver dans l\'image fait perdre du temps.`,

  installation: {
    patient: `**Assis**, dos à l\'opérateur, bras pendant le long du corps ou main posée sur la cuisse opposée : la position bras au corps ferme l\'espace quadrilatère, mais c\'est la position dans laquelle l\'artère est la plus constamment repérable et le patient le plus stable. Certaines équipes préfèrent une légère abduction-rotation interne pour dégager l\'espace.

Chez le patient à risque vagal, ou pour enchaîner avec un bloc suprascapulaire, préférer le **décubitus latéral** (côté à traiter vers le haut) ou le **décubitus ventral** : les deux blocs se font alors dans la même installation, ce qui est le mode opératoire logique en HDJ.

Marquer l\'**angle postéro-latéral de l\'acromion** et l\'**épine de la scapula** au feutre avant la désinfection : ce sont les deux repères qui ramènent à la fenêtre quand elle est perdue.`,
    operateur: `Opérateur **derrière le patient**, du côté à traiter ; écran en face, de l\'autre côté du patient, dans l\'axe du regard. Main non dominante sur la sonde, en appui ferme sur le deltoïde postérieur (l\'appui est nécessaire : la cible est profonde et le moindre mouvement de sonde la fait sortir du plan).

Sonde **sagittale**, appliquée 2–3 cm sous l\'angle postéro-latéral de l\'acromion, puis glissée vers le bas jusqu\'à voir le col chirurgical et le signal Doppler. Ponction **in-plane, de crânial en caudal** : ce sens amène l\'aiguille tangentiellement au plan osseux et permet d\'utiliser le col comme butée. Enchaîner logiquement : suprascapulaire d\'abord (sonde plus haut, sur la fosse), axillaire ensuite, même installation, même champ.`,
    sonde: `- Linéaire 6–13 MHz, preset nerf, profondeur **4–6 cm**, focale sur le col chirurgical, gain modéré (le col doit rester une ligne blanche franche).
- **Doppler couleur à basse PRF** : l\'artère circonflexe postérieure de l\'humérus est le repère du bloc — on cherche l\'artère, pas le nerf.
- Morphotype épais ou deltoïde très musclé : convexe 2–5 MHz.
- Aiguille échovisible fortement recommandée : angle d\'insonation défavorable à cette profondeur ; hydrolocalisation par 0,5 mL de sérum sinon.
- Repérer et noter la profondeur du col avant de piquer : c\'est la limite de progression de l\'aiguille.`,
  },

  reperage: [
    { titre: 'Partir de l\'acromion', texte: 'Poser la sonde **sagittale sur l\'angle postéro-latéral de l\'acromion** : ligne osseuse hyperéchogène franche avec ombre. Descendre de 2–3 cm en gardant l\'orientation : le deltoïde postérieur occupe alors toute la superficie du champ.' },
    { titre: 'Trouver le col chirurgical', texte: 'Poursuivre la descente jusqu\'à voir, en profondeur, la **ligne osseuse convexe et régulière du col chirurgical de l\'humérus**, avec son cône d\'ombre. C\'est le plancher du geste et son garde-fou. Si l\'on voit une surface articulaire ou la glène, on est trop haut et trop médial.' },
    { titre: 'Encadrer l\'espace quadrilatère', texte: 'Identifier le **petit rond** (crânial) et le **grand rond** (caudal) : deux ventres musculaires séparés par un intervalle graisseux triangulaire, appliqué sur le col — c\'est l\'espace quadrilatère en coupe. La longue portion du triceps est médiale, **hors du plan** : ne pas la chercher dans l\'image.' },
    { titre: 'Doppler', texte: 'Activer le Doppler couleur : l\'**artère circonflexe postérieure de l\'humérus** pulse dans l\'espace, contre l\'os. C\'est le repère décisif. Le **nerf axillaire** est adjacent — le plus souvent **crânial** à l\'artère sur cette coupe, parfois accolé — et n\'apparaît comme une structure ovalaire en nid d\'abeilles de 3–5 mm que chez le sujet mince.' },
    { titre: 'Vérifier avant de piquer', texte: 'Balayer de haut en bas pour vérifier la continuité de l\'artère et l\'absence de branche sur le trajet prévu ; mesurer la profondeur du col ; repérer le point d\'entrée cutané au bord crânial de la sonde.' },
    { titre: 'Si l\'on ne trouve ni l\'espace ni l\'artère', texte: 'Deux options. **Descendre** : suivre le col chirurgical vers le bas jusqu\'au niveau sous-deltoïdien, où la branche antérieure et l\'artère contournent l\'os — cible plus distale, plus sélective, souvent plus facile chez le sujet épais. Ou **renoncer à l\'axillaire** et vérifier d\'abord que le bloc suprascapulaire a été fait correctement : dans la majorité des épaules, c\'est lui qui manque, pas l\'axillaire.' },
  ],

  sonoanatomie: [
    { structure: 'Deltoïde (portion postérieure)', aspect: 'Muscle épais et strié occupant toute la superficie du champ', repere: 'Premier plan après la graisse ; à traverser' },
    { structure: 'Petit rond', aspect: 'Ventre musculaire crânial, appliqué sur la capsule postérieure', repere: 'Bord supérieur de l\'espace quadrilatère' },
    { structure: 'Grand rond', aspect: 'Ventre musculaire caudal, plus épais', repere: 'Bord inférieur de l\'espace quadrilatère' },
    { structure: 'Espace quadrilatère', aspect: 'Intervalle graisseux triangulaire entre les deux ronds, contre l\'os', repere: 'Contient nerf et artère ; la longue portion du triceps est médiale, hors du plan' },
    { structure: 'Col chirurgical de l\'humérus', aspect: 'Ligne hyperéchogène convexe et régulière avec cône d\'ombre franc', repere: 'Plancher et butée du geste ; sa profondeur est la limite de progression' },
    { structure: 'A. circonflexe postérieure de l\'humérus', aspect: 'Point pulsatile en Doppler, contre l\'os dans l\'espace', repere: 'Repère principal : chercher l\'artère, pas le nerf' },
    { structure: 'Nerf axillaire', aspect: 'Structure ovalaire de 3–5 mm en nid d\'abeilles, souvent non individualisée', repere: 'Adjacent à l\'artère, le plus souvent immédiatement crânial à elle sur la coupe sagittale' },
    { structure: 'Branche antérieure et branches articulaires (voie distale)', aspect: 'Non visibles isolément ; espace sous-deltoïdien contre le col', repere: 'Cible de la PRF, plus sélective, plus bas sur le col' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Désinfection large de l\'épaule postérieure (champ commun avec le bloc suprascapulaire si les deux sont prévus), gel stérile ou housse. Seringue de 10 mL (AL ± corticoïde), aiguille 22 G 50–80 mm échovisible sur prolongateur purgé.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au bord crânial de la sonde, à 1–2 cm du bord. Le trajet est long et traverse un muscle épais : la faire, contrairement au bloc suprascapulaire où elle est optionnelle.' },
    { titre: 'Ponction in-plane, de crânial en caudal', texte: 'Angle 40–60° (la cible est profonde). Visualiser l\'aiguille sur toute sa longueur ; si le corps de l\'aiguille disparaît, corriger l\'alignement de la sonde avant d\'avancer, jamais l\'inverse. Traverser le deltoïde puis progresser dans l\'intervalle entre petit et grand rond jusqu\'au **contact du col chirurgical**, à distance du signal Doppler, puis reculer de 1–2 mm.' },
    { titre: 'Hydrolocalisation et test', texte: 'Aspiration. Injecter 0,5–1 mL de sérum ou d\'AL : l\'injectat doit s\'étaler **contre l\'os, autour du signal Doppler**, en soulevant les ventres musculaires. Une lentille dans le grand rond ou le deltoïde signe une pointe trop superficielle. Douleur fulgurante ou paresthésie du moignon de l\'épaule = pointe intraneurale → **arrêt immédiat, retrait de 2 mm**, ne jamais forcer.' },
    { titre: 'Injection fractionnée', texte: '5–10 mL par bolus de 2–3 mL, avec aspiration entre chaque, en surveillant la diffusion dans l\'espace et le long du col. Contact verbal maintenu.' },
    { titre: 'Critère de fin', texte: 'Nappe hypoéchogène contre le col chirurgical, englobant le signal Doppler et s\'étalant en crânial et en caudal dans l\'espace quadrilatère, sans injection intramusculaire ni disparition brutale de l\'injectat. Retrait, pansement.' },
    { titre: 'Après le geste', texte: 'Tester l\'**abduction active** et la sensibilité du moignon de l\'épaule à 15–20 min : la faiblesse du deltoïde et l\'hypoesthésie en pastille confirment le bloc. Compléter par un bloc suprascapulaire si les deux sont prévus (même installation). EN avant / 30 min / 24 h. Consignes : **bras en écharpe le temps du bloc moteur (2–6 h)**, pas de conduite le jour même, accompagnement pour le retour à domicile chez le sujet âgé.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test diagnostique (avant PRF) | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | 4–5 mL | Petit volume pour limiter la diffusion aux ronds et au triceps ; EN avant / 30 min, et test des amplitudes |
| Bloc thérapeutique, en association au suprascapulaire | Ropivacaïne 0,2–0,5 % + méthylprednisolone 40 mg, ou triamcinolone 40 mg, ou bétaméthasone 5,7 mg | **5–10 mL** | Corticoïde particulaire acceptable (pas d\'artère à destinée médullaire ou encéphalique), mais l\'artère circonflexe postérieure vascularise la tête humérale : aspiration avant chaque bolus, et **dexaméthasone 4–8 mg** si la pointe reste au contact du signal Doppler. Additionner avec le volume du bloc suprascapulaire de la même séance |
| Épaule hémiplégique | AL seul ou AL + corticoïde | 5–8 mL | Le corticoïde n\'est pas indispensable ; l\'objectif est la fenêtre de mobilisation |
| Hydrodissection (syndrome de l\'espace quadrilatère) | Sérum physiologique ou dextrose 5 % ± AL | 5–10 mL | Vise à libérer le nerf de l\'espace ; données limitées, à confirmer |
| Avant PRF | Lidocaïne 1 % ou sérum | 1–2 mL | Volume minimal : au-delà, le nerf est déplacé hors de portée de l\'électrode |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg (≈ 225 mg pour 75 kg), bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Un bloc axillaire isolé n\'en approche jamais ; c\'est le **cumul** qui compte, et il est la règle ici puisqu\'on l\'associe presque toujours au suprascapulaire (10 mL + 10 mL) et parfois à une infiltration gléno-humérale dans la même séance.

**Corticoïdes** : ne pas dépasser l\'équivalent de 40–80 mg de méthylprednisolone par séance toutes cibles confondues, et espacer de 3 mois sur un même site. Chez le diabétique, glycémie capillaire le jour même et les 48 h suivantes.`,

  variantes: [
    { titre: 'Voie distale — col chirurgical, sous le deltoïde', texte: `Sonde **transversale sur la face postéro-latérale du bras**, à 5–7 cm sous l\'angle acromial : l\'humérus apparaît en coupe comme une corticale convexe, et la **branche antérieure** du nerf axillaire, accompagnée de l\'artère circonflexe postérieure, contourne le col dans l\'espace sous-deltoïdien. Aiguille in-plane, **de postérieur en antérieur**, tangentiellement à la corticale, pointe posée contre l\'os en arrière du signal Doppler : ce sens évite d\'aborder le nerf en traversant l\'artère. 3–5 mL.

Avantages : cible plus superficielle chez certains morphotypes, plus **sélective** sur les branches articulaires, avec un bloc moteur du deltoïde moins complet. C\'est la cible que je privilégie pour la **radiofréquence pulsée** — même logique que l\'échancrure spinoglénoïdienne pour le suprascapulaire. Limite : le territoire capsulaire couvert est plus étroit, et le repérage exige de bien tenir la coupe.` },
    { titre: 'Bloc combiné suprascapulaire + axillaire (« shoulder block »)', texte: `C\'est le mode d\'emploi normal de cette fiche. Historiquement décrit par Price en 2007 sur repères anatomiques comme alternative au bloc interscalénique, il est aujourd\'hui réalisé sous échographie, les deux cibles étant abordées **dans la même installation** (assis ou décubitus latéral), avec un seul champ.

Ordre pratique : suprascapulaire d\'abord (fosse supra-épineuse ou échancrure spinoglénoïdienne), axillaire ensuite (sonde descendue sous l\'acromion). Volume total 15–20 mL. Un essai randomisé en double aveugle de 2024 dans l\'épaule gelée montre un gain sur la douleur et la fonction par rapport au bloc suprascapulaire seul ; les effectifs restent modestes.` },
    { titre: 'Radiofréquence pulsée des branches articulaires', texte: `**Après bloc test positif** (soulagement ≥ 50 % pendant la durée de l\'AL, avec un territoire cohérent). Cible : espace quadrilatère ou, mieux, **col chirurgical** au niveau des branches articulaires.

Aiguille RF 22 G 100 mm, extrémité active 5–10 mm, placée **parallèle** au trajet du nerf, contre l\'os. Stimulation sensitive 50 Hz : paresthésies du moignon de l\'épaule à < 0,5 V. Stimulation motrice 2 Hz : contraction du deltoïde à < 1 V — en PRF, contrairement à la RF thermique, cette contraction confirme la proximité et n\'est pas rédhibitoire, mais elle impose de vérifier que l\'on n\'est pas dans le tronc principal si l\'on vise les branches articulaires. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles** (protocoles de 240 à 600 s selon les équipes). Puis 2–4 mL d\'AL ± corticoïde.

Niveau de preuve : **faible** — séries et pratique d\'experts, extrapolation des données du nerf suprascapulaire. Effet attendu 3–6 mois, répétable.` },
    { titre: 'Cryoneurolyse', texte: 'Même cible distale, sonde cryo 14–16 G, cycles gel/dégel après repérage et anesthésie locale. Données limitées à des séries ; à réserver aux épaules non opérables ayant clairement répondu au bloc test (chapitre Cryoneurolyse).' },
    { titre: 'Syndrome de l\'espace quadrilatère', texte: 'Entité rare (sportif de lancer, volleyeur) associant douleur postérieure de l\'épaule, paresthésies non systématisées et parfois amyotrophie du petit rond ou du deltoïde, par compression du nerf axillaire et de l\'artère circonflexe postérieure dans l\'espace. Le bloc a d\'abord une valeur **diagnostique** ; l\'hydrodissection du nerf est une option. Vérifier l\'artère en Doppler en abduction-rotation externe (occlusion dynamique). Données anciennes et limitées — le décrire au patient comme tel.' },
  ],

  pearls: [
    'Ne jamais faire ce bloc en premier : le suprascapulaire couvre l\'essentiel. L\'axillaire se décide sur une douleur antéro-inférieure **qui persiste** après un suprascapulaire efficace.',
    'Chercher l\'artère circonflexe postérieure au Doppler, pas le nerf : à 4 cm de profondeur, le nerf n\'est individualisable que chez le sujet mince.',
    'Le col chirurgical est la butée : l\'aiguille au contact de l\'os, retirée de 1–2 mm, est au bon endroit.',
    'Une seule installation pour les deux blocs (décubitus latéral ou assis) : c\'est ce qui rend le bloc combiné praticable en HDJ sans allonger le geste.',
    'Annoncer et organiser le bloc moteur du deltoïde : écharpe fournie, accompagnant prévenu. C\'est ce qui distingue un bloc bien conduit d\'un patient inquiet à 18 h.',
    'Si l\'espace quadrilatère est illisible, descendre sur le col sous le deltoïde plutôt que de s\'acharner : cible plus accessible et plus sélective.',
  ],
  pieges: [
    'Prendre la glène ou la capsule postérieure pour le col chirurgical : la sonde est alors trop haute et trop médiale, et l\'injection se fait dans l\'articulation ou dans l\'infra-épineux.',
    'Chercher la longue portion du triceps dans l\'image : elle est médiale, hors du plan de coupe.',
    'Injecter dans le grand rond en croyant être dans l\'espace : la lentille intramusculaire arrondie est le signe, l\'hydrolocalisation la détecte avant les 10 mL.',
    'Négliger la ponction de l\'artère circonflexe postérieure : elle est à la cible, pas à distance — Doppler avant et aspiration à chaque bolus.',
    'Faire ce bloc chez un patient qui a besoin de son deltoïde pour se transférer ou marcher avec des cannes, sans l\'avoir anticipé.',
    'Passer à la PRF sans bloc test formalisé (EN chiffrée, territoire, durée) : on perd la valeur prédictive et l\'argument médico-économique du geste.',
  ],
  complications: [
    '**Bloc moteur du deltoïde** : attendu, 2–6 h — abduction impossible, risque de chute et d\'impotence pour les transferts. Écharpe, consignes écrites, accompagnement. Ce n\'est pas une complication, mais c\'est le premier motif d\'appel après le geste.',
    '**Ponction de l\'artère circonflexe postérieure de l\'humérus** : hématome profond dans l\'espace quadrilatère, peu compressible. Doppler préalable, aspiration répétée, compression et surveillance en cas de ponction.',
    '**Injection intraneurale** : douleur fulgurante ou paresthésie violente du moignon → arrêt immédiat, retrait de 2 mm, ne pas réinjecter au même endroit. Risque de lésion axillaire durable (deltoïde) — c\'est le nerf dont la lésion se voit le plus.',
    'Diffusion au nerf radial ou aux branches du triceps si l\'injection est trop médiale ou trop caudale : faiblesse d\'extension du coude transitoire.',
    'Douleur au point de ponction, hématome superficiel du deltoïde.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie ; atrophie sous-cutanée si reflux le long du trajet.',
    'Malaise vagal en position assise : patient surveillé, position allongée prête.',
  ],
  securite: [
    'Bloc périphérique (classe **faible risque** dans la grille ASRA-ESRA 2018) mais **site profond, non compressible, artère à la cible** : le gérer comme un risque intermédiaire chez l\'anticoagulé — pas d\'arrêt systématique des antiagrégants, décision au cas par cas pour les anticoagulants, surveillance neurologique du membre après le geste.',
    '**Doppler couleur systématique** sur le trajet prévu avant la ponction ; l\'artère est à la cible et non à distance.',
    'Pointe d\'aiguille jamais perdue de vue ; en cas de perte de l\'image, corriger la sonde, jamais avancer « au jugé » à cette profondeur.',
    'Aspiration avant chaque bolus de 2–3 mL ; arrêt immédiat sur douleur fulgurante ou résistance anormale.',
    'Dose cumulée d\'AL et de corticoïde calculée pour la **séance entière** (bloc combiné, éventuelle infiltration associée), et écrite.',
    'Test moteur systématique avant la sortie ; écharpe et consignes de sécurité remises par écrit.',
  ],

  suivi: `- **J0** : EN avant / 30 min / 24 h. Test moteur (abduction) et sensitif (pastille deltoïdienne) à 20 min — c\'est la preuve que le bloc a atteint sa cible. Amplitudes passives en élévation, abduction et rotations, avant et après.
- **J15–J30** : EN, amplitudes, score fonctionnel (Constant simplifié ou DASH), sommeil, consommation d\'antalgiques, adhésion à la kinésithérapie. Décision : répéter le bloc combiné (au plus 2–3 fois par an avec corticoïde), passer à la **PRF** si la réponse au bloc test a été ≥ 50 % mais brève, ou réorienter (hydrodilatation capsulaire dans la capsulite, infiltration gléno-humérale, avis chirurgical).
- **PRF** : évaluation à 4 et 12 semaines ; effet attendu 3–6 mois, répétable.
- Toujours coupler à la **kinésithérapie** : le bloc combiné n\'a d\'intérêt que s\'il ouvre une fenêtre de mobilisation exploitée dans les jours qui suivent. C\'est le schéma de tous les essais positifs.
- Tracer explicitement **quelle cible a répondu** (suprascapulaire, axillaire, ou les deux) : c\'est cette information qui déterminera la cible de radiofréquence.`,

  evidence: `- **Description échographique (Rothe 2011, étude de volontaires)** : faisabilité et fiabilité du repérage postérieur du nerf axillaire par l\'artère circonflexe postérieure. Étude de faisabilité, pas d\'efficacité.
- **« Shoulder block » (Price 2007)** : association suprascapulaire + axillaire sur repères anatomiques, proposée comme alternative au bloc interscalénique en chirurgie d\'épaule. Description technique et série.
- **Anatomie des cibles** : l\'étude cadavérique d\'Eckmann (2017) sur les branches articulaires de l\'épaule et les travaux sur l\'innervation sensitive gléno-humérale (Laumonerie 2020, Tran 2019) constituent la base rationnelle du bloc et de la dénervation. Preuve anatomique **solide** ; elle fonde l\'indication, elle ne démontre pas l\'efficacité clinique.
- **Bloc combiné vs suprascapulaire seul dans la capsulite** : un essai randomisé en double aveugle de 2024 montre un bénéfice sur la douleur et la fonction pour l\'association. Effectifs modestes, résultat cohérent avec le raisonnement anatomique. Preuve **modérée**.
- **Bloc axillaire isolé en douleur chronique** : peu de données propres — l\'essentiel de la littérature est péri-opératoire, en association. Preuve **faible** ; je ne le pratique pas isolément.
- **Radiofréquence pulsée du nerf axillaire ou de ses branches articulaires** : séries et cas cliniques, souvent dans le cadre d\'une dénervation combinée de l\'épaule. Aucun ECR dédié à ma connaissance. Preuve **faible** — l\'usage repose sur l\'extrapolation des données du nerf suprascapulaire et sur la valeur prédictive du bloc test.
- **Syndrome de l\'espace quadrilatère** : entité décrite anciennement, littérature rare et essentiellement chirurgicale ou radiologique. Le bloc y a une valeur surtout diagnostique. Preuve **très faible**.`,

  references: [
    { auteurs: 'Rothe C, Asghar S, Andersen HL, Christensen JK, Lange KHW', titre: 'Ultrasound-guided block of the axillary nerve: a volunteer study of a new method', revue: 'Acta Anaesthesiol Scand', annee: '2011', doi: '10.1111/j.1399-6576.2011.02420.x', type: 'technique / volontaires', verif: true },
    { auteurs: 'Price DJ', titre: 'The shoulder block: a new alternative to interscalene brachial plexus blockade for the control of postoperative shoulder pain', revue: 'Anaesth Intensive Care', annee: '2007;35(4):575-81', doi: '10.1177/0310057x0703500418', type: 'description technique', verif: true },
    { auteurs: 'Eckmann MS, Bickelhaupt B, Fehl J, et al.', titre: 'Cadaveric study of the articular branches of the shoulder joint', revue: 'Reg Anesth Pain Med', annee: '2017;42(5):564-70', pmid: '28786899', type: 'anatomie', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
    { auteurs: 'Laumonerie P, Dalmas Y, Tibbo ME, et al.', titre: 'Sensory innervation of the human shoulder joint: the three bridges to break', revue: 'J Shoulder Elbow Surg', annee: '2020;29(12):e499-e507', doi: '10.1016/j.jse.2020.07.017', type: 'anatomie', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire) ; équipe toulousaine.' },
    { auteurs: 'Tran J, Peng PWH, Agur AMR', titre: 'Anatomical study of the innervation of glenohumeral and acromioclavicular joint capsules: implications for image-guided intervention', revue: 'Reg Anesth Pain Med', annee: '2019;44:452-8', type: 'anatomie', verif: true },
    { auteurs: 'Uz A, Apaydin N, Bozkurt M, Elhan A', titre: 'The anatomic branch pattern of the axillary nerve', revue: 'J Shoulder Elbow Surg', annee: '2007;16:240-4', url: 'https://www.jshoulderelbow.org/article/S1058-2746(06)00166-2/abstract', type: 'anatomie', verif: true },
    { auteurs: 'Chan CW, Peng PW', titre: 'Suprascapular nerve block: a narrative review', revue: 'Reg Anesth Pain Med', annee: '2011;36(4):358-73', url: 'https://www.semanticscholar.org/paper/Suprascapular-Nerve-Block:-A-Narrative-Review-Chan-Peng/ba95f9fde65711edc14a3085ba2fe50f15b7530c', type: 'revue', verif: true, note: 'Cadre général des blocs de l\'épaule en douleur chronique.' },
    { auteurs: 'Cahill BR, Palmer RE', titre: 'Quadrilateral space syndrome', revue: 'J Hand Surg Am', annee: '1983;8:65-9', doi: '10.1016/S0363-5023(83)80056-2', type: 'description clinique', verif: true },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
  ],
  videos: [
    { titre: 'Axillary Nerve Block - Ultrasound Scanning Technique', source: 'YouTube', url: 'https://www.youtube.com/watch?v=u0RbrMCugEI', note: 'Titre vu en résultat de recherche : vérifier au visionnage qu\'il s\'agit bien du bloc du nerf axillaire (espace quadrilatère) et non du bloc axillaire du plexus brachial.' },
  ],

  scenes: [
    {
      id: 'ax-espace', section: 'sonoanatomie', titre: 'Espace quadrilatère — coupe sagittale postérieure',
      legende: 'Sonde sagittale, 2–3 cm sous l\'angle postéro-latéral de l\'acromion. Le deltoïde postérieur occupe la superficie ; petit rond en haut et grand rond en bas encadrent l\'espace quadrilatère, appliqué sur le col chirurgical. L\'artère circonflexe postérieure de l\'humérus signe l\'espace ; le nerf lui est adjacent, le plus souvent immédiatement crânial. La longue portion du triceps borde l\'espace en dedans : elle est hors du plan de coupe et ne doit pas être cherchée dans l\'image.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Sagittale, face postérieure de l\'épaule', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 72 L640 72 L640 168 L0 178 Z', label: 'Deltoïde postérieur', at: [116, 122] });
        S.fascia({ points: [[0, 178], [640, 168]], width: 1.5 });
        S.muscle({ path: 'M0 182 L250 180 L250 282 L0 286 Z', label: 'Petit rond', at: [108, 222], opacity: 0.5 });
        S.muscle({ path: 'M394 178 L640 172 L640 276 L392 282 Z', label: 'Grand rond', at: [522, 222], opacity: 0.5 });
        S.region({ path: 'M250 180 L394 178 L392 282 L250 284 Z', fill: '#5c666f', opacity: 0.28, label: 'Espace quadrilatère', at: [322, 200], small: true });
        S.bone({ path: 'M-20 302 Q320 260 660 304', label: 'Col chirurgical de l\'humérus', at: [330, 336] });
        S.nerve({ x: 300, y: 248, r: 7, label: 'N. axillaire', lx: 246, ly: 272, anchor: 'end', small: true, lead: [294, 250] });
        S.artery({ x: 344, y: 260, r: 6, label: 'A. circonflexe post. de l\'humérus', lx: 398, ly: 272, anchor: 'start', small: true, lead: [350, 262] });
      },
    },
    {
      id: 'ax-bloc', section: 'technique', titre: 'Bloc dans l\'espace quadrilatère — aiguille dans le plan, de crânial en caudal',
      legende: 'Ponction in-plane à 40–60°, de crânial en caudal : le col chirurgical sert de butée. La pointe est posée au contact de l\'os à distance du signal Doppler, puis retirée de 1–2 mm. L\'injectat doit s\'étaler contre l\'os en englobant l\'artère et le nerf, jamais en lentille intramusculaire. Bloc moteur du deltoïde attendu 2 à 6 h.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Sagittale postérieure', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 72 L640 72 L640 168 L0 178 Z', label: 'Deltoïde', at: [452, 122] });
        S.fascia({ points: [[0, 178], [640, 168]], width: 1.5 });
        S.muscle({ path: 'M0 182 L250 180 L250 282 L0 286 Z', label: 'Petit rond', at: [108, 222], opacity: 0.5 });
        S.muscle({ path: 'M394 178 L640 172 L640 276 L392 282 Z', label: 'Grand rond', at: [522, 222], opacity: 0.5 });
        S.bone({ path: 'M-20 302 Q320 260 660 304', label: 'Col chirurgical — butée', at: [330, 340] });
        S.nerve({ x: 300, y: 248, r: 7, label: 'N. axillaire', lx: 246, ly: 236, anchor: 'end', small: true, lead: [294, 246] });
        S.artery({ x: 344, y: 260, r: 6, label: 'A. circonflexe post.', lx: 400, ly: 244, anchor: 'start', small: true, lead: [350, 258] });
        S.target({ x: 316, y: 262, r: 14 });
        S.needle({ from: [6, 110], to: [300, 268], label: '22 G 80 mm, 40–60°' });
        S.spread({ x: 330, y: 272, rx: 62, ry: 9, label: '5–10 mL' });
      },
    },
    {
      id: 'ax-distal', section: 'technique', titre: 'Voie distale — col chirurgical sous le deltoïde (cible de la PRF)',
      legende: 'Sonde transversale sur la face postéro-latérale du bras, 5–7 cm sous l\'angle acromial. La branche antérieure du nerf axillaire et l\'artère circonflexe postérieure contournent le col dans l\'espace sous-deltoïdien ; c\'est là que naissent les branches articulaires. Abord de postérieur en antérieur, pointe posée contre l\'os en arrière du signal Doppler : on n\'aborde jamais le nerf en traversant l\'artère. Cible plus sélective, bloc moteur moins complet : à privilégier pour la radiofréquence pulsée, électrode parallèle au trajet.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Postérieur', right: 'Antérieur' }).probeInfo({ plan: 'Transversale sur le bras, 5–7 cm sous l\'acromion', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 196 L0 206 Z', label: 'Deltoïde', at: [104, 132] });
        S.fascia({ points: [[0, 206], [640, 196]], width: 1.5, opacity: 0.75 });
        S.bone({ path: 'M-20 334 Q320 252 660 334', label: 'Humérus — col chirurgical', at: [322, 358] });
        S.nerve({ x: 300, y: 268, r: 7, label: 'N. axillaire, br. antérieure\net branches articulaires', lx: 168, ly: 232, small: true, lead: [294, 264] });
        S.artery({ x: 342, y: 270, r: 6, label: 'A. circonflexe post.', lx: 420, ly: 240, anchor: 'start', small: true, lead: [348, 266] });
        S.target({ x: 300, y: 268, r: 15 });
        S.needle({ from: [8, 118], to: [286, 268], label: 'Aiguille RF 22 G, parallèle au trajet' });
        S.spread({ x: 312, y: 284, rx: 54, ry: 8, label: '3–5 mL' });
      },
    },
  ],

  checklist: [
    'Bloc suprascapulaire déjà réalisé ou prévu dans la même séance : ce bloc ne se justifie pas isolément en douleur chronique',
    'Autonomie du patient évaluée : transferts, cannes, fauteuil manuel — le bloc moteur du deltoïde (2–6 h) est-il acceptable et organisé ?',
    'Écharpe fournie et consignes écrites remises ; accompagnant prévenu pour le retour',
    'Doppler couleur sur le trajet prévu : l\'artère circonflexe postérieure est à la cible, pas à distance',
    'Profondeur du col chirurgical mesurée avant la ponction (limite de progression de l\'aiguille)',
    'Dose cumulée d\'AL et de corticoïde de la séance entière (bloc combiné ± infiltration) calculée et écrite',
    'Test moteur et sensitif à 20 min réalisé et tracé ; cible ayant répondu notée explicitement pour orienter une éventuelle radiofréquence',
  ],
});
