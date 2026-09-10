/* Chapitre socle : hydrodissection nerveuse et périneurale. */
ECHO.register({
  id: 'socle-hydrodissection',
  titre: 'Hydrodissection nerveuse et périneurale',
  titreCourt: 'Hydrodissection',
  en: 'Ultrasound-guided nerve hydrodissection / perineural injection — 5% dextrose (D5W), saline, local anaesthetic and corticosteroid: rationale, technique, targets and evidence in entrapment neuropathies',
  region: 'socle',
  types: ['socle', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée au canal carpien (ECR et méta-analyse en réseau favorables au dextrose 5 %) ; faible ailleurs (séries, cas, un ECR isolé pour la méralgie paresthésique)',
  motsCles: ['hydrodissection', 'hydrodissection périneurale', 'neurolyse hydraulique', 'dextrose 5 %', 'D5W', 'G5', 'prolothérapie', 'canal carpien', 'syndrome canalaire', 'adhérences', 'halo', 'décollement', 'TRPV1'],
  maj: '2026-09',
  resume: `L'hydrodissection consiste à séparer mécaniquement un nerf des plans qui l'entourent en injectant un liquide sous contrôle échographique, jusqu'à obtenir un halo anéchogène circonférentiel. Le rationnel est double : lever les adhérences péri-nerveuses et la contrainte mécanique qui entretiennent l'ischémie et la sensibilisation d'un nerf comprimé, et — pour le dextrose 5 % — exercer un effet propre sur les fibres nociceptives, dont le mécanisme reste hypothétique. C'est le geste le moins agressif de l'arsenal interventionnel : aiguille fine, pas de destruction, répétable, sans corticoïde obligatoire, donc utilisable chez le diabétique et chez le patient déjà multi-infiltré. Sa preuve est solide au canal carpien, où le dextrose 5 % fait au moins aussi bien que le corticoïde à 4–6 mois, et beaucoup plus mince partout ailleurs. C'est logiquement le premier geste à proposer devant une neuropathie canalaire ou une douleur cicatricielle avec nerf adhérent, avant d'envisager une PRF, une cryoneurolyse ou une chirurgie.`,

  flash: {
    position: 'dorsal', positionNote: 'variable selon la cible ; membre ou segment exposé et détendu pour ne pas tendre le nerf',
    sonde: 'lineaire', sondeNote: '10–18 MHz pour les nerfs superficiels (médian, ulnaire, radial superficiel, occipitaux) ; 6–13 MHz pour le fibulaire, le tibial, le cutané latéral de cuisse',
    approche: 'in-plane', approcheNote: 'in-plane, biseau tourné vers le nerf pour décoller sans le pénétrer ; approche hors du plan possible mais déconseillée près d\'un nerf',
    aiguille: '25–27 G, 25–50 mm (rachianesthésie 25 G ou aiguille à biseau court) ; 22 G seulement si la cible est profonde',
    cible: 'Halo anéchogène circonférentiel — le nerf doit être décollé sur 360° et « flotter » dans l\'injectat, séparé du plan adjacent sur toute la longueur du segment traité',
    injectat: 'Dextrose 5 % 5–20 mL (référence), ou sérum physiologique, ± lidocaïne 1 % en petite quantité, ± corticoïde selon l\'indication',
    duree: '10–20 min selon le nombre de segments',
  },

  indications: [
    `**Syndrome du canal carpien léger à modéré** : indication la mieux documentée. Hydrodissection périneurale du nerf médian, dextrose 5 % de préférence.`,
    `**Autres syndromes canalaires** : nerf ulnaire au coude (gouttière épitrochléo-olécrânienne, arcade de Osborne), nerf ulnaire au canal de Guyon, nerf radial superficiel (syndrome de Wartenberg), nerf interosseux postérieur, nerf fibulaire commun au col de la fibula, nerf tibial au tunnel tarsien, nerf cutané latéral de cuisse (méralgie paresthésique).`,
    `**Douleurs cicatricielles avec nerf adhérent** : nerf englobé dans une cicatrice (hernie inguinale, Pfannenstiel, thoracotomie, arthroscopie de genou), avant ou à la place d'une PRF ou d'une cryoneurolyse.`,
    `**Névromes cicatriciels et de moignon** : décollement du nerf en amont du névrome, seul ou associé à un autre geste (voir la fiche dédiée).`,
    `**Névralgies occipitales** avec grand occipital adhérent au muscle oblique inférieur ou traversant le trapèze.`,
    `**Branche infrapatellaire du nerf saphène** après chirurgie du genou ou prélèvement de greffon.`,
    `**Nerf médian ou ulnaire chez le diabétique**, ou après plusieurs infiltrations de corticoïdes : l'hydrodissection au dextrose évite d'ajouter du corticoïde.`,
    `**Test thérapeutique et diagnostique** : un soulagement immédiat après hydrodissection au sérum ou au dextrose seul, sans anesthésique local, oriente fortement vers une composante mécanique et périneurale.`,
  ],
  contreIndications: [
    `**Absolues** : refus ; infection cutanée au point de ponction ; allergie vraie au produit injecté (exceptionnelle avec le dextrose ou le sérum).`,
    `**Relatives** : neuropathie canalaire **sévère** avec déficit moteur, amyotrophie thénarienne ou bloc de conduction majeur à l'EMG — l'indication est chirurgicale, l'hydrodissection ne fait que retarder ; masse ou kyste compressif nécessitant un geste spécifique.`,
    `Diabète : contre-indication au **corticoïde**, pas à l'hydrodissection — c'est même l'argument principal du dextrose 5 %.`,
    `Troubles de l'hémostase : geste **superficiel et compressible** dans la quasi-totalité des cibles, donc **faible risque hémorragique** au sens ASRA-ESRA 2018 ; pas d'interruption des antiagrégants, anticoagulants au cas par cas.`,
    `Volumes importants d'anesthésique local sur plusieurs sites dans la même séance : compter les doses cumulées, ou n'utiliser que du dextrose et du sérum (aucune toxicité systémique — argument de sécurité mis en avant dans les descriptions de la technique).`,
  ],
  alternatives: `Devant un syndrome canalaire léger à modéré : orthèse nocturne, correction des facteurs favorisants, infiltration de corticoïde (efficace mais à effet décroissant et non répétable indéfiniment), hydrodissection au dextrose 5 %, PRP (signal favorable au canal carpien à 12–24 semaines dans la méta-analyse en réseau, littérature encore restreinte), chirurgie de décompression pour les formes sévères ou déficitaires.

Devant une douleur cicatricielle nerveuse : l'hydrodissection est **le premier geste**, précisément parce qu'elle est réversible et non destructrice. Si l'effet est net mais bref et reproductible sur deux séances, la question devient celle d'une PRF, d'une cryoneurolyse ou d'une neurolyse chirurgicale.

Le raisonnement à retenir : **hydrodissection = lever une contrainte mécanique** ; **PRF / cryoneurolyse / RF = interrompre un message nociceptif**. Ce ne sont pas des concurrents mais deux étages d'un même parcours, et l'ordre logique commence par le moins destructeur.`,

  anatomie: `Un nerf périphérique normal **glisse** dans son lit : il se déplace de plusieurs millimètres lors de la mobilisation du segment, et cette excursion est indispensable à sa physiologie. Ce glissement se fait dans le **paranèvre** (ou tissu conjonctif péri-neural aréolaire), interface graisseuse lâche entre l'épinèvre et les structures voisines, traversée par les vaisseaux nourriciers.

Toute agression de cette interface — compression chronique dans un défilé, traumatisme, chirurgie, cicatrice, inflammation locale, mouvements répétés — produit une **fibrose du paranèvre** : le nerf adhère, perd son excursion, subit une traction à chaque mouvement, et la microcirculation épineurale s'altère. Il en résulte un œdème intraneural, un épaississement du nerf en amont du point de compression (le renflement pseudo-névromateux visible en échographie), une démyélinisation focale, et une sensibilisation des fibres nociceptives du nerf lui-même (nervi nervorum).

L'hydrodissection s'attaque à ce **compartiment paraneural** : le liquide injecté sous pression décolle mécaniquement les plans, rétablit un espace de glissement, et lave localement les médiateurs inflammatoires. C'est un geste **extraneural**, jamais intraneural.

### Ce qui compte pour le geste
- **La cible n'est pas le nerf, c'est l'interface**. Le biseau doit rester dans le paranèvre, jamais dans l'épinèvre. Toute résistance à l'injection ou toute douleur fulgurante signe une position intraneurale.
- **Le décollement doit être circonférentiel (360°)**. Une nappe d'un seul côté ne rétablit pas le glissement : il faut en général deux à quatre positions d'aiguille, ou une rotation de l'aiguille autour du nerf.
- **Le décollement doit être longitudinal**. Une hydrodissection ponctuelle n'a pas de sens : on suit le nerf en balayant, en avançant ou en reculant l'aiguille, sur toute la longueur du segment adhérent (au canal carpien : de l'avant-bras distal jusqu'au-delà du rétinaculum).
- **Le halo est le critère de fin, pas le volume injecté**. Le volume est ce qu'il faut pour obtenir le halo, pas un chiffre à atteindre.
- **Les vaisseaux satellites sont dans le même plan** que le nerf : Doppler systématique, notamment pour l'artère ulnaire au canal de Guyon, l'artère médiane persistante au canal carpien, les vaisseaux occipitaux et l'artère fibulaire.
- **Le mécanisme propre du dextrose 5 %** est hypothétique et doit être présenté comme tel : effet allostérique sur le canal TRPV1, hyperpolarisation des fibres C normoglycémiques, correction d'une hypoglycémie neurale locale — aucune de ces hypothèses n'est démontrée. Ce qui est établi, c'est le résultat clinique au canal carpien, pas son explication.`,

  installation: {
    patient: `Adaptée à la cible, avec deux principes constants :
- **Détendre le nerf** : un nerf mis en tension est plaqué contre son plan et se décolle mal. Canal carpien : avant-bras en supination, poignet en légère extension sur un coussin. Ulnaire au coude : coude en flexion modérée (30–45°), pas en flexion maximale qui aplatit le nerf dans la gouttière. Fibulaire au col : décubitus latéral, genou légèrement fléchi.
- **Installer pour un geste long** : l'hydrodissection demande plusieurs repositionnements d'aiguille et un balayage du nerf sur plusieurs centimètres.

Prévenir que l'injection sous pression est **désagréable**, avec une sensation de tension et parfois des paresthésies transitoires dans le territoire : c'est normal, ce n'est pas un signe d'alarme, contrairement à la douleur fulgurante.`,
    operateur: `Opérateur du côté de la cible, écran en face. **Prolongateur souple systématique** entre l'aiguille et la seringue : le geste demande de garder l'aiguille strictement immobile pendant que l'on injecte, ce qui est impossible avec une seringue montée directement. Un aide manipule la seringue, ou l'opérateur injecte de la main libre.

Sens de ponction choisi pour arriver **tangentiellement au nerf**, dans l'interface, et non perpendiculairement à sa surface : on cherche à glisser le long de l'épinèvre, pas à le viser.`,
    sonde: `- Linéaire haute fréquence, preset nerf ou « small parts », profondeur minimale, focale sur le nerf, gain réglé pour distinguer l'épinèvre hyperéchogène de la graisse péri-neurale.
- **Doppler couleur systématique** avant ponction : vaisseaux satellites et variantes vasculaires (artère médiane persistante).
- Comparer avec le côté sain quand c'est possible et **mesurer l'aire de section du nerf** avant le geste : c'est la mesure de suivi la plus reproductible (canal carpien, ulnaire au coude).
- Balayer le nerf sur toute sa longueur avant de ponctionner, pour repérer le ou les niveaux d'adhérence et de renflement.`,
  },

  reperage: [
    { titre: 'Identifier le nerf en coupe transversale', texte: 'Trouver le nerf à distance de la zone pathologique, là où il est facile, puis le suivre en « ascenseur » jusqu\'à la zone symptomatique. Mesurer son aire de section au point le plus épais et la noter.' },
    { titre: 'Repérer le niveau et le plan d\'adhérence', texte: 'Mobiliser passivement le segment sous l\'échographe : un nerf sain glisse par rapport au plan sous-jacent. L\'absence d\'excursion localise l\'adhérence — c\'est l\'information que l\'échographie apporte et que l\'EMG ne donne pas.' },
    { titre: 'Doppler', texte: 'Repérer les vaisseaux satellites et les variantes (artère médiane persistante au canal carpien, artère ulnaire au canal de Guyon, artère occipitale). Choisir la trajectoire qui les évite.' },
    { titre: 'Choisir le point d\'entrée et le côté d\'attaque', texte: 'Entrer à distance, tangentiellement, du côté où le plan de clivage est le plus accessible — le plus souvent le côté superficiel ou le côté opposé aux vaisseaux. Prévoir dès le départ comment on ira de l\'autre côté du nerf pour compléter les 360°.' },
    { titre: 'Si le nerf ne se laisse pas décoller', texte: 'Injectat qui refoule le nerf sans le contourner, ou nappe qui reste d\'un seul côté : la fibrose est dense. Repositionner l\'aiguille de l\'autre côté du nerf et recommencer plutôt que d\'augmenter la pression. Si le nerf reste bloqué sur deux séances, réévaluer l\'indication (chirurgie).' },
  ],

  sonoanatomie: [
    { structure: 'Nerf cible (transversal)', aspect: 'Nid d\'abeilles : fascicules hypoéchogènes dans un épinèvre hyperéchogène', repere: 'Mesurer l\'aire de section ; comparer au côté sain et au segment sus-jacent' },
    { structure: 'Nerf comprimé', aspect: 'Renflement hypoéchogène en amont du défilé, perte du dessin fasciculaire, aplatissement au niveau du défilé', repere: 'Le « notch sign » au point de compression signe la contrainte mécanique' },
    { structure: 'Paranèvre / interface de glissement', aspect: 'Fine bande hypo- à hyperéchogène entre l\'épinèvre et le plan adjacent', repere: 'C\'est la cible : le liquide doit s\'y engager, pas dans le nerf' },
    { structure: 'Halo d\'hydrodissection', aspect: 'Anneau anéchogène circonférentiel séparant le nerf du plan voisin, nerf « flottant »', repere: 'Critère de fin. Un croissant d\'un seul côté ne suffit pas' },
    { structure: 'Injection intraneurale (à reconnaître pour l\'éviter)', aspect: 'Augmentation brutale de l\'aire de section, effacement du dessin fasciculaire, aspect en cible', repere: 'Arrêt immédiat, retrait de 1–2 mm ; ne jamais poursuivre' },
    { structure: 'Vaisseaux satellites (Doppler)', aspect: 'Anéchogènes, l\'artère pulsatile, la veine compressible', repere: 'Artère médiane persistante (canal carpien), artère ulnaire (Guyon), artère occipitale' },
    { structure: 'Tendons fléchisseurs / rétinaculum', aspect: 'Tendons fibrillaires anisotropes ; rétinaculum en bande hyperéchogène convexe', repere: 'Ne pas confondre un tendon et le nerf : basculer la sonde, le tendon devient noir (anisotropie), le nerf beaucoup moins' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Asepsie, gel stérile ou housse. Seringues de 10 mL de dextrose 5 % (ou de sérum) préparées et étiquetées, aiguille 25–27 G montée sur prolongateur souple. Prévoir 2 à 4 seringues : on ne connaît pas d\'avance le volume nécessaire.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 27 G. Si elle est faite : une papule de lidocaïne 1 % **strictement intradermique**, à distance, sans infiltrer le plan de travail (l\'AL dans le paranèvre gêne l\'appréciation du décollement et fausse le test thérapeutique).' },
    { titre: 'Ponction in-plane et hydrolocalisation', texte: 'Progression lente, in-plane, biseau tourné vers le nerf. Injecter **0,2–0,5 mL à chaque avancée** : cette hydrolocalisation ouvre le plan devant l\'aiguille et confirme la position avant d\'aller plus loin. Ne jamais avancer sans avoir vu où va le liquide.' },
    { titre: 'Décollement du premier versant', texte: 'Pointe placée dans l\'interface, injecter **lentement et sans forcer** : un croissant anéchogène doit se former et **repousser le plan voisin en s\'étendant longitudinalement**. Si l\'injectat forme une bille immobile ou s\'il faut forcer, la pointe est dans un tissu dense ou dans l\'épinèvre : repositionner.' },
    { titre: 'Décollement circonférentiel et longitudinal', texte: 'Retirer partiellement l\'aiguille et la repositionner de l\'autre côté du nerf (ou la faire passer au-dessus ou en dessous en suivant le plan déjà ouvert) pour obtenir le **halo sur 360°**. Puis avancer et reculer la pointe le long du nerf pour étendre le décollement sur tout le segment adhérent — au canal carpien, de l\'avant-bras distal jusqu\'en aval du rétinaculum.' },
    { titre: 'Critère de fin', texte: 'Nerf **entièrement entouré d\'injectat**, séparé de son plan sur toute la longueur du segment, **mobile** à la mobilisation passive du segment. Volume usuel atteint : 5 à 20 mL selon la cible et l\'étendue. Le halo est le critère, pas le volume.' },
    { titre: 'Après le geste', texte: 'Pansement, mobilisation active immédiate et **répétée dans les jours qui suivent** — le glissement rétabli doit être entretenu, c\'est la logique du geste ; y associer les exercices de mobilisation neurale (« nerve gliding ») et le traitement du facteur mécanique (orthèse nocturne au canal carpien, ergonomie). Prévenir de paresthésies et d\'une tension locale pendant 24–48 h.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Hydrodissection de référence | **Dextrose 5 % (G5)** | 5–10 mL (canal carpien) ; 10–20 mL pour un long segment ou un nerf profond | Injectat le mieux étayé : le plus efficace sur les scores fonctionnels à 4, 12 et 24 semaines dans la méta-analyse en réseau du canal carpien. Aucune toxicité systémique, répétable, utilisable chez le diabétique |
| Hydrodissection neutre | Sérum physiologique | 5–20 mL | Alternative simple et disponible ; sert de comparateur dans les essais. Effet mécanique identique, sans l'effet propre supposé du dextrose |
| Confort de l'injection | Lidocaïne 1 % | 1–2 mL, mélangée ou injectée en premier | À limiter : l'AL soulage le patient pendant le geste mais brouille l'interprétation du résultat immédiat et le bloc moteur peut inquiéter |
| Composante inflammatoire | **Dexaméthasone 4 mg (non particulaire)** en première intention. Méthylprednisolone 20–40 mg ou triamcinolone 20–40 mg **seulement** sur un site sans artère satellite dans le champ — ce sont des suspensions particulaires | Ajouté au volume d'hydrodissection | Indiqué si la ténosynovite ou l'inflammation locale domine. À éviter chez le diabétique et en répétition sur un même nerf |
| PRP | Plasma riche en plaquettes | 2–4 mL | Signal favorable au canal carpien à 12–24 semaines dans la méta-analyse en réseau. Coût, préparation, encadrement réglementaire : hors périmètre courant d'une HDJ douleur |

**Doses maximales à garder en tête** dès que l'on met de l'anesthésique local dans le volume : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Un volume de 20 mL de lidocaïne 1 % représente déjà 200 mg — c'est l'argument principal pour hydrodisséquer au **dextrose ou au sérum** et non à l'anesthésique local, en particulier sur les séances à plusieurs cibles.

**Ce qu'il ne faut pas injecter** : rien de particulaire à proximité immédiate d'un nerf comprimé (dépôt cristallin dans un espace déjà contraint) ; pas d'alcool ni de phénol (ce n'est plus une hydrodissection) ; pas de gros volume d'AL par principe.`,

  variantes: [
    { titre: 'Cibles et niveau de preuve, cible par cible', texte: `**Nerf médian au canal carpien** — la seule cible avec un niveau de preuve solide. Essai randomisé en double aveugle comparant le dextrose 5 % au corticoïde (Wu, Annals of Neurology 2018) : supériorité du dextrose à 4–6 mois sur la douleur, l'incapacité et les paramètres électrophysiologiques. Méta-analyse en réseau (9 études, 458 patients, recherche jusqu'en avril 2024) : le dextrose 5 % est l'option la mieux classée sur la fonction (BCTQ) à 4, 12 et 24 semaines, le PRP prenant la tête sur les symptômes à 12 et 24 semaines. Technique : abord ulnaire au niveau du pli du poignet, décollement entre le nerf et le rétinaculum puis entre le nerf et les tendons fléchisseurs, extension proximale et distale.

**Nerf ulnaire** au coude (gouttière, arcade d'Osborne) et au canal de Guyon : séries et pratique courante, littérature nettement plus mince. Doppler impératif au Guyon (artère ulnaire).

**Nerf cutané latéral de cuisse (méralgie paresthésique)** : essai randomisé en double aveugle comparant dextrose 5 % et corticoïde publié récemment — première donnée randomisée sur cette cible. Décollement au niveau de l'épine iliaque antéro-supérieure, entre le nerf et le ligament inguinal, puis entre les fascias du sartorius et du tenseur du fascia lata.

**Nerf fibulaire commun au col de la fibula** : décrit, séries récentes y compris en postopératoire, souvent associé à un programme de rééducation. Cible facile et superficielle.

**Nerf tibial au tunnel tarsien** et ses branches (plantaire médial, plantaire latéral, nerf calcanéen inférieur de Baxter) : décrit ; l'échographie apporte beaucoup au diagnostic topographique.

**Nerfs occipitaux** : décollement du grand occipital de l'oblique inférieur (niveau C1-C2) ou de son passage trans-trapézien ; pratique répandue, littérature limitée à des séries.

**Branche infrapatellaire du saphène**, **nerf radial superficiel**, **nerf sural** : nerfs superficiels, très accessibles, indications de cicatrice ou de traumatisme direct ; niveau de preuve : cas et séries.

**Névromes cicatriciels et de moignon** : l'hydrodissection en amont du névrome est décrite, y compris en contexte d'amputation traumatique récente (étude observationnelle) — voir la fiche dédiée.` },
    { titre: 'Hydrodissection en deux temps (corticoïde puis dextrose)', texte: `Protocole décrit au canal carpien : une première hydrodissection au corticoïde pour l'effet anti-inflammatoire, puis une seconde au dextrose 5 % à un mois pour l'effet de décollement et l'effet propre du dextrose. Rationnel séduisant, données rétrospectives seulement. À considérer comme une option chez le patient avec une composante inflammatoire nette (ténosynovite associée) et non chez le diabétique.` },
    { titre: 'Hydrodissection comme temps préalable d\'un autre geste', texte: `Trois usages, souvent sous-exploités :
- **Écarter une structure à risque** avant une radiofréquence ou une cryoneurolyse : créer une nappe de sérum entre le nerf cible et la plèvre, une artère, la peau. C'est la parade standard à la gelure cutanée en cryoneurolyse.
- **Ouvrir le plan** avant un bloc difficile, pour vérifier que l'injectat va bien là où on croit.
- **Test diagnostique** : hydrodisséquer au dextrose ou au sérum **sans anesthésique local**. Un soulagement immédiat et durable dans ces conditions ne peut pas être un effet d'anesthésique : il oriente fortement vers une composante mécanique péri-nerveuse.` },
    { titre: 'Hydrodissection profonde et grands volumes', texte: `Une école décrit l'usage du dextrose 5 % comme injectat principal des blocs profonds du tronc et du cou (Lam, BioMed Research International 2017), l'argument étant qu'un volume important peut être injecté sans aucun risque de toxicité systémique — ce qui est vrai, et pertinent dans les séances à cibles multiples. Le niveau de preuve reste celui d'une série rétrospective ; l'intérêt pratique est réel pour la sécurité, pas démontré pour l'efficacité.` },
  ],

  pearls: [
    `Le critère de fin est **le halo à 360° et sur toute la longueur du segment**, pas le volume injecté. Un volume « standard » sans halo est un geste raté.`,
    `Injecter 0,2–0,5 mL avant chaque avancée d'aiguille : le liquide ouvre le plan et rend le geste bien plus sûr qu'une progression à sec.`,
    `Prolongateur souple obligatoire : garder l'aiguille immobile pendant l'injection est ce qui distingue une hydrodissection d'une infiltration.`,
    `Mobiliser passivement le segment sous l'échographe **avant et après** : voir le nerf redevenir mobile est le meilleur retour immédiat sur la qualité du geste.`,
    `Mesurer et noter l'aire de section du nerf avant le geste : c'est le paramètre de suivi le plus reproductible.`,
    `Dextrose 5 % plutôt qu'anesthésique local : aucune toxicité systémique, donc aucune limite de volume, et le résultat immédiat reste interprétable.`,
    `Prescrire la mobilisation neurale et corriger le facteur mécanique dès la sortie : sans cela, les adhérences se reconstituent.`,
  ],
  pieges: [
    `Confondre une **infiltration** (déposer un produit près du nerf) et une **hydrodissection** (décoller le nerf sur 360° et sur une longueur). Le premier geste ne fait pas le second.`,
    `Se contenter d'un croissant d'un seul côté : le glissement n'est pas rétabli et l'effet est bref.`,
    `Injecter à travers l'épinèvre : douleur fulgurante, résistance, augmentation brutale de l'aire de section. Arrêt immédiat et retrait de 1–2 mm.`,
    `Utiliser un gros volume d'anesthésique local par confort : on plafonne la dose, on bloque le territoire et on ne peut plus interpréter le résultat.`,
    `Traiter par hydrodissection un canal carpien **sévère et déficitaire** : on retarde une chirurgie qui est l'indication.`,
    `Oublier le Doppler et l'artère médiane persistante au canal carpien.`,
    `Ne pas traiter le facteur mécanique (orthèse, ergonomie, geste répétitif) : la récidive est alors la règle.`,
  ],
  complications: [
    `**Injection intraneurale** : la complication à connaître. Sous échographie, la fréquence des injections intraneurales inaperçues est loin d'être nulle (de l'ordre de 16–17 % dans les données rapportées pour les injections périneurales en général), avec des séquelles à long terme rares. Signes : douleur fulgurante, résistance à l'injection, gonflement du nerf. Conduite : arrêt immédiat, retrait de 1–2 mm, surveillance, information du patient.`,
    `**Paresthésies et engourdissement transitoires** dans les heures qui suivent : très fréquents, liés à la pression et au volume, résolutifs.`,
    `**Douleur locale et tension** pendant 24–48 h : attendue avec les volumes importants.`,
    `**Bloc moteur transitoire** si de l'anesthésique local a été utilisé (main pour le médian, releveurs pour le fibulaire) : prévenir, pas de conduite le jour même.`,
    `**Hématome** : rare, superficiel, compressible ; Doppler préalable.`,
    `**Infection** : exceptionnelle, asepsie standard.`,
    `**Effets systémiques du corticoïde** s'il est associé : hyperglycémie chez le diabétique, flush, insomnie.`,
    `**Atrophie ou dépigmentation sous-cutanée** en cas de reflux de corticoïde vers la peau, sur les cibles très superficielles.`,
  ],
  securite: [
    `**Faible risque hémorragique** (ASRA-ESRA 2018) pour toutes les cibles superficielles et compressibles : pas d'interruption des antiagrégants, anticoagulants au cas par cas.`,
    `**Doppler couleur systématique** avant ponction ; rechercher les variantes vasculaires (artère médiane persistante).`,
    `**Aiguille fine (25–27 G) et biseau court** : moins de risque de lésion fasciculaire ; ne jamais avancer sans injecter.`,
    `**Injection à basse pression** : la résistance est le signal d'alarme le plus fiable dont on dispose. Une pression élevée = repositionner, jamais forcer.`,
    `**Ne pas anesthésier le plan de travail** : la douleur fulgurante du patient est un signal de sécurité qu'il faut préserver.`,
    `**Doses cumulées d'anesthésique local** si l'on en met dans le volume ; privilégier le dextrose 5 % ou le sérum, qui n'ont pas de plafond de dose.`,
    `**Corticoïde non particulaire** dès qu'une artère est dans le champ ; pas de corticoïde en répétition sur un même nerf.`,
    `Traçabilité : cible, injectat, volume réel, aire de section avant, halo obtenu, mobilité du nerf après.`,
  ],

  suivi: `- **J0** : EN avant / 30 min ; paresthésies ; force et sensibilité dans le territoire ; **aire de section notée**. Consignes : mobilisation active immédiate, exercices de glissement neural, orthèse nocturne si canal carpien, correction ergonomique.
- **J15–J30** : EN, score fonctionnel spécifique (BCTQ pour le canal carpien : sous-scores symptômes et fonction ; DN4 ou questionnaire neuropathique si composante neuropathique). Décision : répéter ou non.
- **Répétition** : l'hydrodissection au dextrose ou au sérum est **répétable sans limite pharmacologique**. Un protocole de 2 à 3 séances espacées de 2 à 4 semaines est une pratique courante quand la première séance donne une amélioration partielle — à confirmer, les protocoles publiés étant hétérogènes.
- **3 mois** : évaluation de l'effet consolidé, aire de section de contrôle. C'est le moment de la décision d'escalade.
- **6 mois** : les données du canal carpien montrent un effet du dextrose qui se maintient à 4–6 mois ; au-delà, les données manquent.
- **Escalade** : amélioration nulle après deux séances bien conduites (halo obtenu, nerf mobile) → l'hypothèse mécanique péri-nerveuse est fausse ou insuffisante : réévaluer (EMG, imagerie, cible différente), puis discuter PRF, cryoneurolyse ou chirurgie selon le tableau. Apparition ou aggravation d'un déficit moteur → avis chirurgical sans délai.`,

  evidence: `- **Canal carpien : la seule cible bien étayée.** L'essai randomisé en double aveugle de Wu (Annals of Neurology, 2018) comparant dextrose 5 % et triamcinolone conclut à un **bénéfice supérieur du dextrose à 4–6 mois**. Un essai antérieur du même groupe (2017) avait montré la persistance de l'effet d'une injection unique de 5 mL de dextrose 5 % pendant au moins 6 mois. La méta-analyse en réseau la plus récente (9 études, 458 patients, recherche jusqu'en avril 2024) place le **dextrose 5 % en tête sur la fonction** (BCTQ) à 4, 12 et 24 semaines, et le PRP en tête sur les symptômes à 12 et 24 semaines. Niveau de preuve : **modéré**, sur des effectifs limités et des protocoles hétérogènes.
- **Autres cibles : preuve faible.** La revue historique de Cass (Current Sports Medicine Reports, 2016) concluait déjà à l'absence d'étude de haut niveau permettant d'établir la nécessité, l'efficacité ou la sécurité de l'hydrodissection en dehors du canal carpien. La revue de synthèse la plus récente (Colorado, McNeill, Norbury, Muscle & Nerve, 2025) confirme que le corpus reste dominé par des séries et des cas hors canal carpien.
- **Méralgie paresthésique** : un essai randomisé en double aveugle comparant dextrose 5 % et corticoïde a été publié — première donnée randomisée sur cette cible.
- **Sécurité** : les revues systématiques d'injectats et de tolérance concluent à un profil favorable, sans effet indésirable grave rapporté ; la complication propre est l'injection intraneurale, dont la fréquence sous échographie est loin d'être négligeable mais dont les séquelles à long terme sont rares.
- **Mécanisme** : l'effet mécanique de décollement est cohérent et directement visible. Les mécanismes proposés pour l'effet propre du dextrose 5 % (TRPV1, hyperpolarisation des fibres C, hypoglycémie neurale locale) restent **des hypothèses explicitement présentées comme telles** par leurs auteurs. Ne pas les présenter comme acquis à un patient ni à un confrère.
- **Trous de la littérature à assumer** : (1) pas de consensus sur le volume, le nombre de séances ni l'intervalle ; (2) pas de comparaison dextrose vs sérum de puissance suffisante pour trancher la part de l'effet mécanique et la part de l'effet du produit ; (3) quasi rien au-delà de 6 mois ; (4) pas de données comparant l'hydrodissection à la PRF ou à la chirurgie sur une même population.`,

  references: [
    { verif: true, auteurs: 'Wu YT, et al.', titre: 'Randomized double-blinded clinical trial of 5% dextrose versus triamcinolone injection for carpal tunnel syndrome patients', revue: 'Annals of Neurology', annee: '2018', doi: '10.1002/ana.25332', type: 'ECR', note: 'Supériorité du dextrose 5 % sur le corticoïde à 4–6 mois.' },
    { verif: false, auteurs: 'Wu YT, et al.', titre: 'Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial', revue: 'Mayo Clinic Proceedings', annee: '2017', type: 'ECR', note: 'Cité de mémoire — titre, revue et année à confirmer. L\'existence d\'un ECR de Wu en 2017 sur le dextrose 5 % à 6 mois est en revanche confirmée par plusieurs sources secondaires.' },
    { verif: true, titre: 'Ultrasound-guided nerve hydrodissection for the management of carpal tunnel syndrome: a systematic review and network meta-analysis', annee: '2025', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC11790405/', type: 'méta-analyse en réseau', note: 'Revue non relevée lors de la recherche. 9 études, 458 patients, recherche jusqu\'en avril 2024 : dextrose 5 % en tête sur la fonction, PRP sur les symptômes à 12–24 semaines.' },
    { verif: true, auteurs: 'Cass SP', titre: 'Ultrasound-guided nerve hydrodissection: what is it? A review of the literature', revue: 'Current Sports Medicine Reports', annee: '2016', pmid: '26745165', type: 'revue', note: 'Référence historique : définit la technique et souligne l\'absence d\'étude de haut niveau hors canal carpien.' },
    { verif: true, auteurs: 'Colorado B, McNeill D, Norbury J', titre: 'Ultrasound-guided nerve hydrodissection for peripheral entrapment neuropathies', revue: 'Muscle & Nerve', annee: '2025', doi: '10.1002/mus.28471', type: 'revue', note: 'Synthèse la plus récente sur les cibles et les injectats.' },
    { verif: true, titre: 'Ultrasound-guided nerve hydrodissection for pain management: rationale, methods, current literature, and theoretical mechanisms', revue: 'Journal of Pain Research', annee: '2020', doi: '10.2147/JPR.S247208', type: 'revue', note: 'Source des mécanismes hypothétiques du dextrose 5 % (TRPV1, hyperpolarisation des fibres C, hypoglycémie neurale) — présentés comme hypothèses par les auteurs eux-mêmes.' },
    { verif: true, auteurs: 'Lam SKH, et al.', titre: 'Transition from deep regional blocks toward deep nerve hydrodissection in the upper body and torso: method description and results from a retrospective chart review of the analgesic effect of 5% dextrose water as the primary hydrodissection injectate to enhance safety', revue: 'BioMed Research International', annee: '2017', doi: '10.1155/2017/7920438', type: 'série rétrospective' },
    { verif: true, titre: 'The effectiveness and safety of commonly used injectates for ultrasound-guided hydrodissection treatment of peripheral nerve entrapment syndromes: a systematic review', revue: 'Frontiers in Pharmacology', annee: '2020', doi: '10.3389/fphar.2020.621150', type: 'revue systématique' },
    { verif: true, titre: 'Safety and efficacy of ultrasound-guided perineural hydrodissection as a minimally invasive treatment in carpal tunnel syndrome: a systematic review', revue: 'Journal of Personalized Medicine', annee: '2024', url: 'https://www.mdpi.com/2075-4426/14/2/154', type: 'revue systématique' },
    { verif: true, titre: 'A randomized double-blind trial of 5% dextrose versus corticosteroid hydrodissection for meralgia paresthetica', pmid: '39621981', type: 'ECR', note: 'Revue et année non relevées lors de la recherche. Première donnée randomisée sur le nerf cutané latéral de cuisse.' },
    { verif: true, auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Reprise de la fiche de référence du mémo.' },
  ],
  videos: [
    { titre: 'Ultrasound-guided nerve hydrodissection for pain management: rationale, methods, current literature, and theoretical mechanisms', source: 'Journal of Pain Research (texte intégral + figures)', url: 'https://www.tandfonline.com/doi/full/10.2147/JPR.S247208', note: 'Iconographie des cibles et des plans de décollement' },
    { titre: 'The effectiveness and safety of commonly used injectates for ultrasound-guided hydrodissection of peripheral nerve entrapment syndromes', source: 'Frontiers in Pharmacology', url: 'https://www.frontiersin.org/journals/pharmacology/articles/10.3389/fphar.2020.621150/full', note: 'Comparaison des injectats' },
  ],

  scenes: [
    {
      id: 'hydro-avant-apres', section: 'sonoanatomie', titre: 'Nerf avant et après hydrodissection — coupe transversale',
      legende: 'À gauche, le nerf est plaqué contre le plan profond, sans interface visible : il ne glisse plus à la mobilisation. À droite, après hydrodissection, un halo anéchogène l\'entoure sur 360° et il « flotte », séparé du plan adjacent. C\'est ce halo circonférentiel, et non le volume injecté, qui est le critère de fin.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Avant', right: 'Après' }).probeInfo({ plan: 'Transverse, nerf en coupe', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 9, fatBelow: 22 });
        S.fat({ path: 'M0 78 L640 78 L640 140 L0 140 Z', label: 'Graisse sous-cutanée', at: [90, 110] });
        S.fascia({ points: [[0, 143], [640, 141]], width: 1.6 });
        S.tendon({ x: 118, y: 300, rx: 46, ry: 22, label: 'Tendons fléchisseurs', lx: 118, ly: 350, small: true });
        S.tendon({ x: 452, y: 300, rx: 46, ry: 22 });
        S.fascia({ points: [[16, 257], [300, 255]], width: 3.2 });
        S.fascia({ points: [[348, 273], [624, 271]], width: 3.2 });
        S.label({ x: 296, y: 300, text: 'Plan profond', anchor: 'end', small: true, cls: 'lbl-fascia' });
        S.label({ x: 620, y: 316, text: 'Plan profond repoussé', anchor: 'end', small: true, cls: 'lbl-fascia' });
        S.nerve({ x: 158, y: 236, rx: 30, ry: 17, label: 'Nerf plaqué, sans interface', lx: 158, ly: 186, small: true });
        S.fluid({ x: 452, y: 224, rx: 58, ry: 40, label: 'Halo 360°', lx: 546, ly: 180, anchor: 'start', lead: [500, 200] });
        S.nerve({ x: 452, y: 224, rx: 30, ry: 17, label: 'Nerf décollé, mobile', lx: 452, ly: 172, small: true });
        S.label({ x: 158, y: 388, text: 'Avant', anchor: 'middle', cls: 'lbl-target' });
        S.label({ x: 452, y: 388, text: 'Après 5–10 mL de dextrose 5 %', anchor: 'middle', cls: 'lbl-target' });
      },
    },
    {
      id: 'hydro-approche', section: 'technique', titre: 'Approche in-plane : ouvrir le plan devant l\'aiguille',
      legende: 'Aiguille 25–27 G in-plane par **abord ulnaire** (le trajet reste à distance de l\'artère et du nerf), biseau tourné vers le nerf, prolongateur souple. On injecte 0,2–0,5 mL avant chaque avancée : le liquide ouvre le plan devant la pointe et confirme la position. Le premier versant décollé, on repositionne l\'aiguille de l\'autre côté du nerf pour compléter les 360°, puis on avance et recule la pointe pour étendre le décollement à tout le segment adhérent.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Radial', right: 'Ulnaire' }).probeInfo({ plan: 'Transverse, aiguille dans le plan', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 9, fatBelow: 20 });
        S.fat({ path: 'M0 76 L640 76 L640 128 L0 128 Z', label: 'Graisse', at: [60, 104] });
        S.ligament({ path: 'M100 132 Q300 118 490 132 L490 148 Q300 136 100 148 Z', label: 'Rétinaculum des fléchisseurs', at: [150, 112], anchor: 'start', small: true });
        S.fascia({ points: [[0, 307], [640, 305]], width: 3 });
        S.label({ x: 24, y: 300, text: 'Plan profond', anchor: 'start', small: true, cls: 'lbl-fascia' });
        S.tendon({ x: 200, y: 272, rx: 44, ry: 22, label: 'Tendons fléchisseurs', lx: 200, ly: 336, small: true });
        S.tendon({ x: 340, y: 278, rx: 40, ry: 20 });
        S.artery({ x: 566, y: 172, r: 10, label: 'A. ulnaire (Doppler)', lx: 624, ly: 142, anchor: 'end', lead: [572, 166] });
        S.nerve({ x: 268, y: 200, rx: 32, ry: 18, label: 'Nerf médian', lx: 268, ly: 164, small: true });
        S.target({ x: 268, y: 200, r: 44 });
        S.needle({ from: [636, 214], to: [326, 200], label: '27 G, abord ulnaire' });
        S.spreadPath({ path: 'M178 200 A90 40 0 1 0 358 200 A90 40 0 1 0 178 200 Z M232 200 A36 21 0 1 1 304 200 A36 21 0 1 1 232 200 Z', at: [620, 262], label: 'Halo circonférentiel — 5–10 mL' });
        S.label({ x: 624, y: 352, text: 'Puis repositionner de l\'autre côté\npour compléter les 360°', anchor: 'end', small: true, cls: 'lbl-target' });
      },
    },
  ],

  checklist: [
    'Forme sévère ou déficitaire écartée (déficit moteur, amyotrophie, bloc de conduction) : sinon, avis chirurgical',
    'Aire de section du nerf mesurée et notée avant le geste ; excursion du nerf testée à la mobilisation passive',
    'Doppler fait, variantes vasculaires recherchées (artère médiane persistante, artère ulnaire au Guyon)',
    'Injectat choisi : dextrose 5 % par défaut ; corticoïde seulement si composante inflammatoire, jamais chez le diabétique',
    'Prolongateur souple monté ; 2 à 4 seringues prêtes (le volume dépend du halo, pas d\'un chiffre)',
    'Plan de travail non anesthésié : la douleur fulgurante du patient reste un signal de sécurité',
    'Halo circonférentiel obtenu et mobilité du nerf revérifiée avant de retirer l\'aiguille',
    'Mobilisation neurale, orthèse et correction du facteur mécanique prescrites à la sortie',
  ],
});
