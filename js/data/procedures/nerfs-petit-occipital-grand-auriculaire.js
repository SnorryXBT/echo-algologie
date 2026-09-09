/* Fiche : nerfs petit occipital et grand auriculaire (point d'Erb) — blocs échoguidés. */
ECHO.register({
  id: 'nerfs-petit-occipital-grand-auriculaire',
  titre: 'Nerfs petit occipital et grand auriculaire — blocs au point d\'Erb',
  titreCourt: 'Petit occipital & grand auriculaire',
  en: 'Ultrasound-guided lesser occipital nerve (LON) and great auricular nerve (GAN) blocks at the posterior border of sternocleidomastoid (Erb\'s point); superficial cervical plexus branches',
  region: 'tete-cou',
  types: ['bloc'],
  niveau: 2,
  grade: 'Faible à modérée : anatomie échographique bien établie, efficacité surtout documentée par des séries et des ECR périopératoires ; aucun ECR en douleur chronique',
  motsCles: ['petit occipital', 'occipital minor', 'LON', 'grand auriculaire', 'great auricular', 'GAN', 'point d\'Erb', 'punctum nervosum', 'plexus cervical superficiel', 'névralgie occipitale latérale', 'otalgie', 'parotidectomie', 'lifting', 'névrome', 'SCM'],
  maj: '2026-09',
  resume: 'Deux petits nerfs sensitifs du plexus cervical superficiel, tous deux nés de C2-C3 et émergeant au **point d\'Erb** au bord postérieur du sterno-cléido-mastoïdien : le **petit occipital** monte vers l\'occiput latéral, le **grand auriculaire** croise obliquement la face superficielle du SCM vers l\'angle de la mandibule, la parotide et le pavillon de l\'oreille. Ce sont les cibles qu\'on oublie et qui expliquent la moitié des échecs d\'un bloc du nerf grand occipital : un territoire douloureux latéral ou auriculaire ne répond pas à une injection médiane. Le repérage échographique est simple et fiable (le nerf lui-même est souvent visible aux hautes fréquences), le geste est superficiel, à faible risque hémorragique, et les volumes nécessaires sont minimes. Indications d\'algologie : névralgies occipitales latérales, névralgie du grand auriculaire, douleurs neuropathiques et névromes après parotidectomie, lifting cervico-facial, chirurgie ORL ou abord cervical postérieur, otalgies non ORL.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, tête tournée du côté opposé, sans coussin sous la nuque ; semi-assis possible chez le patient dyspnéique',
    sonde: 'lineaire', sondeNote: '12–18 MHz (hockey stick idéale) ; profondeur 2–3 cm ; nerfs entre 3 et 15 mm de la peau',
    approche: 'in-plane', approcheNote: 'postéro-latéral vers antéro-médial, sonde transversale au tiers moyen du bord postérieur du SCM (niveau du cartilage cricoïde)',
    aiguille: '25 G 40–50 mm, ou 27 G 25 mm pour le grand auriculaire chez le sujet mince',
    cible: 'Petit occipital : plan interfascial entre le bord postérieur du SCM et le fascia prévertébral (élévateur de la scapula / scalène moyen) · Grand auriculaire : espace sous-fascial à la face **superficielle** du SCM',
    injectat: '2–4 mL par nerf — AL (lidocaïne 1–2 %, ropivacaïne 0,2–0,5 %) ± corticoïde non particulaire ; 0,1–1 mL suffisent en repérage pur',
    duree: '5–10 min pour les deux nerfs',
  },

  indications: [
    '**Névralgie occipitale latérale** : territoire du petit occipital (arrière de l\'oreille, occiput latéral), typiquement après échec d\'un bloc du nerf grand occipital correctement exécuté et techniquement réussi (hypoesthésie médiane obtenue, douleur inchangée).',
    '**Névralgie du grand auriculaire** : douleur paroxystique péri-auriculaire, angle de la mandibule, région parotidienne, souvent déclenchée par la rotation de la tête, le contact du cou ou la position de sommeil. Entité rare, sous-diagnostiquée (série de 13 cas, Duvall 2020, où **tous** les patients bloqués ont été nettement améliorés, certains avec des blocs sériés efficaces pendant 2 à 5 ans).',
    '**Douleurs post-chirurgicales** : parotidectomie (le grand auriculaire est sacrifié ou lésé de façon très fréquente, avec névrome d\'amputation dans quelques pourcents des cas), lifting cervico-facial (nerf le plus souvent lésé de cette chirurgie), curage cervical, thyroïdectomie, abord cervical postérieur, craniotomie rétrosigmoïdienne ou occipitale.',
    '**Otalgie** non expliquée par un examen ORL normal, otalgie référée, douleur du pavillon (le grand auriculaire couvre le lobule, l\'antitragus, la queue de l\'hélix et l\'angle mandibulaire — mais **pas** la conque ni l\'anthélix, territoire du nerf de Wrisberg et de l\'auriculo-temporal : c\'est le meilleur test topographique).',
    '**Zona et névralgie post-zostérienne** du territoire C2-C3.',
    'Bloc **diagnostique cartographique** : quand la douleur occipito-auriculaire ne colle pas à un territoire unique, bloquer séquentiellement grand occipital, puis petit occipital, puis grand auriculaire, en notant l\'EN à 20 min à chaque étape, est le seul moyen de trancher.',
    'Analgésie périopératoire (hors périmètre principal) : le bloc combiné petit occipital + grand auriculaire réduit la douleur post-craniotomie rétrosigmoïdienne dans un ECR en double aveugle (BMC Anesthesiology 2024).',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée locale, allergie vraie aux amino-amides.',
    '**Risque hémorragique faible** (ASRA-ESRA 2018 pour les blocs superficiels compressibles) : pas d\'interruption des antiagrégants, anticoagulants au cas par cas sans arrêt systématique. Le site est compressible et directement visible.',
    'Relatives : anticoagulation avec INR très instable (hématome cervical superficiel gênant mais non compressif) ; dermatose locale ; chirurgie cervicale récente rendant les plans illisibles.',
    'Prudence sur les gros volumes : au-delà de 8–10 mL au bord postérieur du SCM, on réalise de fait un **bloc du plexus cervical superficiel**, avec possibilité de diffusion vers le nerf spinal accessoire (parésie transitoire du trapèze) et, si l\'injection passe sous le fascia prévertébral, vers le phrénique. Rester sous 5 mL par nerf en algologie.',
    'Corticoïdes : injection très superficielle → risque réel d\'atrophie sous-cutanée et de dépigmentation sur une zone visible (cou, région rétro-auriculaire). Préférer l\'AL seul ou une petite dose de corticoïde non particulaire, et le dire au patient.',
  ],
  alternatives: 'Bloc du nerf grand occipital (première cible, fiche dédiée) ; bloc du nerf occipital III et des branches médiales cervicales si la douleur est facettaire (fiche dédiée) ; bloc du plexus cervical superficiel « en bloc » si les trois branches sont concernées ; bloc du nerf auriculo-temporal ou du ganglion sphénopalatin pour une otalgie de territoire trigéminal ; PRF ou cryoneurolyse du grand auriculaire dans les névralgies et névromes réfractaires (données limitées à des cas cliniques) ; exérèse ou enfouissement chirurgical d\'un névrome d\'amputation post-parotidectomie. En pratique : ces deux nerfs sont un **complément** du bloc occipital, rarement un premier geste isolé — sauf dans la névralgie du grand auriculaire, où ils sont le traitement.',

  anatomie: `Le **petit occipital (LON)** et le **grand auriculaire (GAN)** sont deux branches cutanées ascendantes du **plexus cervical superficiel** (rameaux ventraux de C2, C3). Elles contournent le bord postérieur du sterno-cléido-mastoïdien à son **tiers moyen** — le *punctum nervosum* ou **point d\'Erb** — puis divergent :

- le **petit occipital** monte **le long du bord postérieur du SCM**, contourne l\'insertion mastoïdienne et innerve la peau de l\'occiput **latéral**, la face médiale et la partie supérieure du pavillon, la région rétro-auriculaire ;
- le **grand auriculaire**, la plus volumineuse des branches cutanées du plexus cervical, croise **obliquement la face superficielle du SCM** en direction du lobule, sous le fascia d\'enveloppe et à proximité de la veine jugulaire externe. Il se divise en rameaux antérieur (angle de la mandibule, région parotidienne) et postérieur (mastoïde, face postérieure du pavillon, lobule).

Le **nerf occipital III (TON)**, lui, n\'a rien à voir : c\'est la branche superficielle du ramus **dorsal** de C3, qui croise l\'articulation zygapophysaire C2-C3 et innerve la région occipitale haute paramédiane. Il ne passe **jamais** par le point d\'Erb. Rappel utile parce qu\'en pratique il est la troisième cible de la « cartographie occipitale » : GON médian, LON latéral, TON paramédian haut (fiche dédiée).

### Ce qui compte pour le geste
- **Le repère est le bord postérieur du SCM**, pas un point sur la peau. En coupe transversale au niveau du cartilage cricoïde, le SCM apparaît en lentille ; son bord postérieur s\'amincit en biseau, et le plexus se voit comme un **petit amas de nodules hypoéchogènes en nid d\'abeilles**, immédiatement en profondeur ou en arrière de ce biseau, **au-dessus du fascia prévertébral** qui recouvre l\'élévateur de la scapula et le scalène moyen.
- **Deux plans différents** : le petit occipital reste **postérieur / profond** au SCM dans l\'espace interfascial ; le grand auriculaire devient rapidement **superficiel au SCM**. Une seule injection au bord postérieur les prend souvent tous les deux — mais si l\'on veut être sélectif (bloc diagnostique), il faut deux points.
- Le **grand auriculaire** est le nerf superficiel le mieux visible du cou aux hautes fréquences : ovale hypoéchogène de 1,5–3 mm sur la face superficielle du SCM, à 3–8 mm de la peau. Thallaj (2010) l\'a vu chez 100 % des volontaires et bloqué avec **0,1 mL** de mépivacaïne — ordre de grandeur à garder en tête : ces blocs ne demandent pas de volume.
- **Ne pas descendre sous le fascia prévertébral** : c\'est la frontière entre bloc superficiel (bénin) et bloc cervical profond (phrénique, racines, artère vertébrale). Le fascia est la ligne hyperéchogène nette au-dessus des scalènes.
- **Structures à éviter** : veine jugulaire externe (superficielle au SCM, à proximité immédiate du grand auriculaire — Doppler ou simple relâchement de la pression de sonde pour la faire apparaître), **nerf spinal accessoire** (XI) qui traverse la région du point d\'Erb en direction du trapèze, et plus en avant l\'axe carotidien.
- **Profondeurs habituelles** : grand auriculaire 3–8 mm ; petit occipital 8–15 mm.
- Variantes fréquentes : nombre et niveau de division des branches, petit occipital double, grand auriculaire naissant plus haut ou plus bas sur le bord postérieur. L\'échographie tranche à chaque fois — c\'est tout son intérêt ici.`,

  installation: {
    patient: `**Décubitus dorsal**, sans coussin sous la nuque, **tête tournée de 30–45° du côté opposé** : la rotation met le SCM en tension et dégage son bord postérieur. Ne pas hyper-tourner, cela aplatit le muscle et efface le biseau.

Demander au patient de **soulever la tête** un instant : le SCM se contracte et son bord postérieur devient palpable et visible — repère utile avant de désinfecter, à marquer au feutre au niveau du cartilage cricoïde.

Un billot fin sous les épaules aide chez le patient cyphotique. Semi-assis acceptable si le décubitus est mal toléré.`,
    operateur: `Opérateur **du côté à traiter**, à hauteur d\'épaule, écran de l\'autre côté du patient dans l\'axe du regard. Ponction **de postéro-latéral vers antéro-médial**, dans le plan : on vient de l\'arrière, on progresse vers le bord postérieur du SCM, on ne dépasse jamais ce bord vers l\'avant (l\'axe carotidien est en avant et en profondeur).

Pour le grand auriculaire pris isolément, on peut au contraire venir **d\'antéro-médial vers postéro-latéral** en restant strictement au-dessus du SCM : trajet très court, tangentiel, sous le fascia d\'enveloppe.

Main non dominante en appui sur la clavicule ou la mandibule : le cou est mobile et le nerf est à 5 mm.`,
    sonde: `- Linéaire **12–18 MHz** ; la **hockey stick** est le meilleur choix (empreinte courte sur un cou concave, en arrière du SCM).
- Profondeur **2–2,5 cm**, focale au tiers superficiel, gain élevé mais sans saturation : ces nerfs sont des ovales hypoéchogènes de 2 mm sur fond de tissu graisseux, ils disparaissent si l\'image est trop claire.
- **Pression de sonde très légère** : c\'est le piège dominant. Une pression normale écrase la jugulaire externe (qu\'on croit alors absente) et efface le plan interfascial.
- **Doppler couleur** à basse PRF avant chaque ponction : jugulaire externe, veines superficielles, rameaux de l\'artère occipitale en haut du champ.
- Aiguille 25 G : la visibilité est bonne car le trajet est très tangentiel et superficiel ; hydrolocalisation par 0,2 mL si doute.`,
  },

  reperage: [
    { titre: '1. Poser sur le SCM au niveau du cricoïde', texte: 'Sonde **transversale** sur la face latérale du cou, au niveau du **cartilage cricoïde** (C6), c\'est-à-dire au tiers moyen du SCM. Le muscle apparaît en **lentille biconvexe** hypoéchogène striée, occupant la moitié antérieure du champ.' },
    { titre: '2. Trouver le bord postérieur (point d\'Erb)', texte: 'Glisser la sonde en arrière jusqu\'à ce que le SCM **s\'effile en biseau** et disparaisse du champ. Ce biseau est le point d\'Erb. En profondeur apparaît la ligne hyperéchogène du **fascia prévertébral**, recouvrant l\'élévateur de la scapula et le scalène moyen.' },
    { titre: '3. Identifier le plexus superficiel', texte: 'Chercher l\'**amas de 2 à 4 nodules hypoéchogènes** (aspect en nid d\'abeilles, 1–3 mm chacun) dans le tissu graisseux **entre le biseau du SCM et le fascia prévertébral**. C\'est le plexus cervical superficiel : le petit occipital en est la branche la plus postéro-supérieure.' },
    { titre: '4. Suivre le grand auriculaire en balayage crânial', texte: 'Depuis le point d\'Erb, **remonter lentement la sonde vers la mastoïde** en gardant la coupe transversale : on voit une des branches quitter le plan profond, contourner le bord postérieur et **passer à la face superficielle du SCM** — c\'est le grand auriculaire. Il chemine ensuite entre le SCM et le fascia d\'enveloppe, souvent accolé à la **veine jugulaire externe**.' },
    { titre: '5. Doppler et vérification des limites', texte: 'Doppler couleur : jugulaire externe (facilement écrasée — relâcher la pression pour la voir), veines superficielles. Vérifier que le **fascia prévertébral est bien identifié** : il matérialise la limite à ne pas franchir. En dessous, on est dans le plexus profond.' },
    { titre: 'Si on ne voit pas les nerfs', texte: 'Ne pas s\'obstiner sur l\'image nerveuse : **le plan suffit**. Une injection de 3–5 mL dans l\'espace interfascial au bord postérieur du SCM bloque les quatre branches du plexus superficiel de façon fiable. Autre astuce : remonter ou descendre de 1–2 cm le long du bord postérieur, l\'émergence est variable ; ou augmenter la fréquence et diminuer la pression. Chez le patient obèse ou opéré du cou, accepter un bloc de plan plutôt qu\'un bloc sélectif.' },
  ],

  sonoanatomie: [
    { structure: 'Sterno-cléido-mastoïdien', aspect: 'Lentille musculaire biconvexe, striée, superficielle ; bord postérieur effilé en biseau', repere: 'Repère central ; le point d\'Erb est à son tiers moyen' },
    { structure: 'Plexus cervical superficiel', aspect: 'Amas de 2–4 nodules hypoéchogènes de 1–3 mm, aspect en nid d\'abeilles', repere: 'Immédiatement en arrière/profondeur du biseau du SCM, au-dessus du fascia prévertébral' },
    { structure: 'Nerf petit occipital', aspect: 'Ovale hypoéchogène 1–2 mm, se dirige en arrière et en haut le long du bord postérieur du SCM', repere: 'Branche la plus postérieure et supérieure de l\'amas' },
    { structure: 'Nerf grand auriculaire', aspect: 'Ovale hypoéchogène 1,5–3 mm, le plus visible des quatre branches, à 3–8 mm de la peau', repere: 'Sur la face **superficielle** du SCM en remontant vers la mastoïde' },
    { structure: 'Fascia prévertébral', aspect: 'Ligne hyperéchogène nette recouvrant l\'élévateur de la scapula et le scalène moyen', repere: 'Limite profonde à ne jamais franchir (au-delà : plexus profond, phrénique)' },
    { structure: 'Veine jugulaire externe', aspect: 'Structure anéchogène compressible, superficielle au SCM ; disparaît sous la pression de la sonde', repere: 'Voisine immédiate du grand auriculaire ; relâcher la pression pour la voir' },
    { structure: 'Élévateur de la scapula / scalène moyen', aspect: 'Masses musculaires profondes, sous le fascia prévertébral', repere: 'Plancher du plan d\'injection' },
    { structure: 'Axe carotidien', aspect: 'Artère pulsatile ronde non compressible + veine jugulaire interne compressible', repere: 'En avant et en profondeur du SCM — jamais dans la direction de l\'aiguille' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Désinfection large de la région latéro-cervicale et rétro-auriculaire, gel stérile. Seringue de 5 mL, aiguille 25 G 40 mm. EN de départ et **cartographie du territoire douloureux dessinée** (au crayon dermographique ou sur schéma) : c\'est ce qui rendra le bloc interprétable.' },
    { titre: 'Anesthésie cutanée', texte: 'Inutile en règle (25 G, trajet court). Une papule de lidocaïne 1 % si l\'on prévoit deux points de ponction ou une aiguille de plus gros calibre.' },
    { titre: 'Bloc du petit occipital — plan interfascial postérieur', texte: 'Aiguille **dans le plan, de postéro-latéral vers antéro-médial**, angle 20–30°, pointe amenée dans l\'espace graisseux entre le biseau du SCM et le fascia prévertébral, au contact de l\'amas nerveux. Ne **jamais** franchir le fascia prévertébral. Injecter 0,3 mL de test : le plan doit s\'ouvrir en une lame anéchogène qui décolle le SCM du fascia.' },
    { titre: 'Bloc du grand auriculaire — plan superficiel', texte: 'Remonter la sonde de 1–2 cm vers la mastoïde jusqu\'à voir le nerf **au-dessus du SCM**. Aiguille dans le plan, trajet très tangentiel (10–20°), pointe amenée **à côté** du nerf, sous le fascia d\'enveloppe, en évitant la jugulaire externe. Le halo doit entourer le nerf sans le déplacer brutalement.' },
    { titre: 'Injection fractionnée et critère de fin', texte: '**2–4 mL par nerf**, fractionnés par 1 mL, avec réaspiration. Critère de fin : halo circonférentiel autour du nerf sur 1–2 cm, ou nappe interfasciale de 2–3 cm au bord postérieur du SCM. Au-delà de 5 mL, on réalise un bloc du plexus cervical superficiel entier — ce qui peut être voulu, mais doit être conscient et annoncé (risque de parésie transitoire du trapèze par diffusion vers le nerf spinal accessoire).' },
    { titre: 'Après le geste', texte: 'Compression douce 1 min. **Tester à 10–15 min l\'hypoesthésie du territoire** : lobule et angle mandibulaire pour le grand auriculaire, occiput latéral et région rétro-auriculaire pour le petit occipital. Un bloc du grand auriculaire correctement fait n\'anesthésie ni la conque ni l\'anthélix — l\'expliquer avant, sinon le patient conclut à un échec. Noter l\'EN à 30 min. Prévenir : anesthésie du lobule 2–8 h, sensation d\'oreille « épaisse », rarement gêne transitoire à l\'élévation de l\'épaule.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique sélectif (cartographie) | Lidocaïne 1–2 % **seule** | 1–2 mL par nerf | Petit volume **impératif** : au-delà, la diffusion emporte les branches voisines et le bloc perd toute valeur topographique. Thallaj a obtenu un bloc sensitif du grand auriculaire avec 0,1 mL sous échographie |
| Névralgie du grand auriculaire, névralgie occipitale latérale | Ropivacaïne 0,2–0,5 % ou lidocaïne 2 % + **dexaméthasone 2–4 mg** (non particulaire) | 2–3 mL par nerf | Corticoïde **non particulaire** et à petite dose : injection très superficielle, l\'atrophie sous-cutanée et la dépigmentation sont un risque cosmétique réel sur le cou |
| Névrome post-parotidectomie / post-lifting | Lidocaïne 1 % ± dexaméthasone 2 mg, injection **autour** du névrome | 1–2 mL | Repérer d\'abord le renflement hypoéchogène en amont de la cicatrice, puis injecter en périphérie. Effet souvent bref : sert surtout de test avant cryoneurolyse ou chirurgie |
| Bloc du plexus cervical superficiel entier (les 4 branches) | Ropivacaïne 0,2–0,375 % ou lidocaïne 1 % | 5–8 mL en un point interfascial | Volume usuel des protocoles périopératoires (5 mL de ropivacaïne 0,5 % dans l\'ECR de craniotomie rétrosigmoïdienne). Prévenir du risque de parésie transitoire du trapèze |
| Hydrodissection (piégeage cicatriciel) | Dextrose 5 % ± lidocaïne 0,5 % | 3–5 mL | Logique de libération d\'un nerf englué dans une cicatrice cervicale. Aucune donnée spécifique sur ces deux nerfs — **à confirmer**, à proposer comme option sans corticoïde |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Ces blocs sont dérisoires en isolé ; le calcul se fait quand ils s\'ajoutent à un bloc occipital bilatéral, à des blocs de branches médiales cervicales ou à des points gâchettes dans la même séance d\'HDJ.

**Ne jamais** utiliser de triamcinolone hexacétonide (Hexatrione®), réservée à l\'intra-articulaire. Éviter les corticoïdes particulaires : le site est superficiel, visible, et voisin de rameaux artériels.`,

  variantes: [
    { titre: 'Bloc du plexus cervical superficiel « en bloc »', texte: `Quand la douleur déborde les deux territoires (cou latéral, région sus-claviculaire, angle mandibulaire), une injection unique de 5–8 mL dans le plan interfascial au bord postérieur du SCM bloque les quatre branches : petit occipital, grand auriculaire, transverse du cou et supra-claviculaires. Technique identique, volume plus important.

Deux réserves : la valeur diagnostique disparaît (on ne saura pas quel nerf portait la douleur), et la diffusion peut atteindre le **nerf spinal accessoire** (parésie transitoire du trapèze, chute d\'épaule de quelques heures) — bénin mais impressionnant si le patient n\'a pas été prévenu. L\'injection doit rester **au-dessus du fascia prévertébral** : sous le fascia, c\'est un bloc cervical profond, avec risque phrénique.` },
    { titre: 'Bloc combiné petit occipital + grand auriculaire (LOGAB)', texte: 'Association décrite et validée en périopératoire : dans un ECR prospectif en double aveugle (BMC Anesthesiology 2024, n = 59) sur la craniotomie rétrosigmoïdienne pour schwannome vestibulaire, 5 mL de ropivacaïne 0,5 % en bloc combiné réduisent significativement les scores de douleur au repos et à la mobilisation dans les 48 h. En algologie chronique, la même association couvre l\'ensemble de la région rétro-auriculaire et occipito-latérale — c\'est le complément logique du bloc du nerf grand occipital quand ce dernier a « raté » latéralement.' },
    { titre: 'Radiofréquence pulsée du grand auriculaire', texte: 'Décrite dans des cas cliniques (notamment une névralgie post-zostérienne de la tête et du cou traitée par PRF sélective échoguidée du grand auriculaire). Paramètres usuels de PRF : 42 °C, 2 Hz, 20 ms, 45 V, 120–240 s, électrode parallèle au nerf. **Preuve très faible** (cas isolés) : à réserver aux névralgies invalidantes ayant répondu de façon franche mais brève à des blocs répétés, et à annoncer comme tel.' },
    { titre: 'Cryoneurolyse et névromes', texte: 'La cryoneurolyse est l\'option la plus séduisante devant un **névrome d\'amputation** du grand auriculaire après parotidectomie ou lifting : lésion réversible, sans névrome secondaire. Elle est proposée dans la littérature chirurgicale comme alternative à la reprise chirurgicale (dissection du tissu cicatriciel). Données spécifiques quasi inexistantes pour ce nerf — **à confirmer** ; procéder comme pour tout névrome superficiel (fiche Névrome cicatriciel) après un bloc test concluant.' },
    { titre: 'Toxine botulique', texte: 'Une utilisation de la toxine botulique de type A dans la névralgie du grand auriculaire a été publiée. Niveau de preuve anecdotique ; à réserver aux impasses, hors AMM, avec information et traçabilité explicites.' },
  ],

  pearls: [
    'La topographie fait le diagnostic : **lobule + angle de la mandibule = grand auriculaire ; occiput latéral + rétro-auriculaire = petit occipital ; conque et anthélix = ni l\'un ni l\'autre** (Wrisberg, auriculo-temporal).',
    'Appuyer le moins possible sur la sonde : la jugulaire externe et le plan interfascial disparaissent sous une pression normale.',
    'Le grand auriculaire se trouve en **remontant** vers la mastoïde : c\'est là qu\'il devient superficiel au SCM et parfaitement visible.',
    'Petits volumes. Sous échographie, quelques dixièmes de mL suffisent à bloquer ces nerfs — le volume ne fait qu\'effacer la valeur diagnostique du geste.',
    'Un bloc du nerf grand occipital techniquement réussi mais cliniquement inefficace doit faire penser à ces deux nerfs **avant** de conclure à une céphalée primaire réfractaire.',
    'Toujours dessiner le territoire douloureux avant, et retester le même dessin après : c\'est le seul compte rendu qui vaudra quelque chose dans six mois.',
  ],
  pieges: [
    'Franchir le **fascia prévertébral** : on passe d\'un bloc superficiel bénin à un bloc cervical profond (phrénique, racines, artère vertébrale). Le fascia doit être identifié avant la ponction, pas pendant.',
    'Injecter 8–10 mL « pour être sûr » : on bloque tout le plexus superficiel, on perd l\'information diagnostique et on expose à la parésie du trapèze.',
    'Chercher les nerfs trop bas : au tiers inférieur du SCM, les branches sont déjà séparées et plus profondes. Le point d\'Erb est au **tiers moyen**, niveau cricoïde.',
    'Confondre le grand auriculaire et la veine jugulaire externe collabée sous la sonde : relâcher la pression, mettre le Doppler.',
    'Corticoïde particulaire ou trop superficiel : dépigmentation et dépression cutanée sur une zone découverte — préjudice esthétique durable et parfaitement évitable.',
    'Promettre une anesthésie de toute l\'oreille : la conque et l\'anthélix ne sont pas dans le territoire, le patient conclura à un échec du geste.',
  ],
  complications: [
    'Hématome superficiel (ponction de la jugulaire externe ou d\'une veine sous-cutanée) : compression 2 min, sans gravité mais ecchymose visible plusieurs jours.',
    '**Parésie transitoire du trapèze** par diffusion vers le nerf spinal accessoire : chute d\'épaule et gêne à l\'abduction pendant quelques heures. Bénin, mais à annoncer avant le geste et à ne pas confondre avec une lésion.',
    '**Bloc phrénique / bloc cervical profond involontaire** si l\'injection passe sous le fascia prévertébral : dyspnée, gêne thoracique. Prévention : identifier le fascia et rester au-dessus.',
    'Injection intravasculaire (veineuse le plus souvent) : goût métallique, acouphènes, malaise. Aspiration, fractionnement, faibles volumes.',
    'Injection intraneurale : douleur fulgurante irradiée à l\'oreille → arrêt immédiat, retrait de 1–2 mm.',
    'Syndrome de Claude Bernard-Horner transitoire par diffusion antérieure : décrit après bloc du plexus cervical superficiel ; régressif, rassurer.',
    'Effets locaux des corticoïdes : atrophie sous-cutanée, dépigmentation, alopécie rétro-auriculaire.',
    'Malaise vagal.',
  ],
  securite: [
    '**Risque hémorragique faible** (ASRA-ESRA 2018, procédures superficielles compressibles) : pas d\'arrêt des antiagrégants, anticoagulants au cas par cas, sans interruption systématique.',
    'Le **fascia prévertébral est la ligne rouge** : au-dessus, bloc superficiel bénin ; au-dessous, bloc profond avec risque phrénique et vasculaire. L\'identifier et le montrer sur l\'écran avant de ponctionner.',
    'Doppler couleur systématique (jugulaire externe très proche du grand auriculaire, veines superficielles, rameaux occipitaux), pression de sonde minimale pour ne pas les collaber.',
    'Aspiration avant chaque bolus, injection fractionnée par 1 mL, volumes faibles (2–4 mL/nerf).',
    'Ne jamais orienter l\'aiguille vers l\'avant au-delà du bord postérieur du SCM : l\'axe carotidien est en avant et en profondeur.',
    'Additionner les doses d\'AL et de corticoïde quand le geste s\'ajoute à un bloc occipital bilatéral ou à d\'autres blocs de la même séance.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, **pourcentage de soulagement**, et surtout **cartographie de l\'hypoesthésie obtenue** comparée au territoire douloureux dessiné avant le geste. C\'est le cœur de la valeur diagnostique : un bloc techniquement réussi (hypoesthésie du lobule) mais sans effet antalgique élimine la cible.
- **J7–J15** : intensité moyenne, fréquence des paroxysmes, gâchettes (rotation de la tête, contact, sommeil), consommation d\'antalgiques.
- **1 mois puis 3 mois** : durée réelle du soulagement, retentissement (sommeil, port du col de chemise, position de sommeil).
- **Décision** : soulagement franc et durable → répéter à la demande, jusqu\'à des blocs sériés au long cours (des patients ont été suivis 2 à 5 ans sous blocs itératifs du grand auriculaire dans la série de Duvall) · soulagement franc mais bref et répété → discuter PRF ou cryoneurolyse, en annonçant le faible niveau de preuve · aucun effet malgré une hypoesthésie obtenue → mauvaise cible : réévaluer vers l\'auriculo-temporal, le nerf occipital III, les facettes C2-C3 ou une cause ORL/dentaire · névrome documenté et bloc test positif → avis chirurgical.
- Toujours tracer la **dose cumulée de corticoïde** et le nombre d\'injections annuelles sur le site.`,

  evidence: `- **Anatomie échographique : solide.** Le grand auriculaire est visualisable et évaluable sur tout son trajet en échographie haute résolution (Lieba-Samal 2014, *Ultraschall in der Medizin*) et son bloc échoguidé est reproductible chez 100 % des volontaires avec des volumes minimes (Thallaj 2010, *Anaesthesia*, 0,1 mL de mépivacaïne, avec la cartographie exacte du territoire : queue de l\'hélix, antitragus, lobule, angle mandibulaire bloqués ; anthélix et conque jamais). Le petit occipital a été caractérisé de la même façon en sonographie haute résolution (Platzgummer 2015, *Cephalalgia*). Une revue d\'anatomie sonographique du grand auriculaire a été publiée en 2025 (*Surgical and Radiologic Anatomy*). Preuve **forte** sur le plan anatomique et technique.
- **Efficacité en douleur chronique : faible.** La névralgie du grand auriculaire ne repose que sur des **séries de cas** — la principale est celle de Duvall (2020, *Headache*, 13 patients) : douleur paroxystique en éclair déclenchée par la rotation de la tête, le contact du cou ou la position de sommeil ; **7 patients bloqués, tous nettement améliorés**, dont 3 traités par blocs sériés pendant 2 à 5 ans. Aucun ECR. Même constat pour le petit occipital, dont l\'atteinte est le plus souvent associée à celle du grand occipital.
- **Efficacité périopératoire : modérée.** ECR prospectif en double aveugle (BMC Anesthesiology 2024, n = 59) : bloc combiné petit occipital + grand auriculaire (5 mL ropivacaïne 0,5 %) versus sérum salé avant craniotomie rétrosigmoïdienne — scores de douleur au repos et à la mobilisation significativement plus bas à 48 h. Preuve de faisabilité et d\'efficacité analgésique du bloc, extrapolable à la douleur post-chirurgicale chronique avec prudence.
- **Lésion iatrogène du grand auriculaire : bien documentée.** Nerf le plus fréquemment lésé lors du lifting cervico-facial ; troubles sensitifs dans son territoire chez environ un tiers des patients après parotidectomie, que le nerf soit sacrifié ou préservé ; névrome d\'amputation dans quelques pourcents des cas après chirurgie parotidienne. Cette épidémiologie est le meilleur argument pour penser à ce nerf devant une douleur péri-auriculaire post-opératoire.
- **Trous assumés** : aucun ECR contre placebo en douleur chronique pour l\'un ou l\'autre nerf ; pas de donnée sur l\'intérêt du corticoïde ; PRF, cryoneurolyse, toxine botulique et hydrodissection reposent sur des cas isolés. Le niveau de preuve global de ce geste en algologie est celui d\'un **accord professionnel adossé à une anatomie échographique solide** — ce qui, pour un bloc superficiel, à faible risque et immédiatement interprétable, reste raisonnable.`,

  references: [
    { auteurs: 'Thallaj A, et al.', titre: 'Great auricular nerve blockade using high resolution ultrasound: a volunteer study', revue: 'Anaesthesia', annee: '2010;65(8):836-40', doi: '10.1111/j.1365-2044.2010.06443.x', pmid: '20573147', type: 'étude de volontaires', note: 'Nerf vu chez 100 % des volontaires ; bloc obtenu avec 0,1 mL. Cartographie du territoire réellement bloqué.' },
    { auteurs: 'Lieba-Samal D, Pivec C, Platzgummer H, et al.', titre: 'High-resolution ultrasound for diagnostic assessment of the great auricular nerve — normal and first pathologic findings', revue: 'Ultraschall Med', annee: '2015 (Epub 2014)', pmid: '24824761', type: 'anatomie' },
    { auteurs: 'Platzgummer H, Moritz T, Gruber GM, Pivec C, Wöber C, Bodner G, Lieba-Samal D', titre: 'The lesser occipital nerve visualized by high-resolution sonography — normal and initial suspect findings', revue: 'Cephalalgia', annee: '2015;35(9):816-24', doi: '10.1177/0333102414559293', pmid: '25414471', type: 'anatomie' },
    { auteurs: 'Duvall JR, et al.', titre: 'Great auricular neuralgia: case series', revue: 'Headache', annee: '2020', doi: '10.1111/head.13690', pmid: '31749202', type: 'série de cas', note: 'La seule description clinique structurée : 13 cas, présentation, gâchettes, réponse aux blocs.' },
    { auteurs: '—', titre: 'Ultrasound-guided lesser occipital nerve combined with great auricular nerve block for vestibular schwannoma craniotomy via a suboccipital retrosigmoid approach: a prospective, double-blind randomized controlled trial', revue: 'BMC Anesthesiol', annee: '2024', doi: '10.1186/s12871-024-02642-2', type: 'ECR' },
    { auteurs: 'Fenech M, Gallagher J, Berry C', titre: 'Sonographic anatomy and imaging of the great auricular nerve', revue: 'Surg Radiol Anat', annee: '2025', doi: '10.1007/s00276-025-03765-y', pmid: '41233613', type: 'anatomie / imagerie' },
    { auteurs: '—', titre: 'Treatment of great auricular neuralgia with real-time ultrasound-guided great auricular nerve block: a case report and review of the literature', revue: 'Medicine (Baltimore)', annee: '2017', pmid: '28328811', type: 'cas clinique / revue' },
    { auteurs: '—', titre: 'Ultrasound-guided greater auricular nerve block as sole anesthetic for ear surgery', revue: '—', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4943106/', type: 'série de cas', note: 'Territoire réellement couvert par le bloc, utile pour informer le patient.' },
    { auteurs: '—', titre: 'Ultrasound-guided selective pulsed radiofrequency treatment of great auricular nerve for post-herpetic neuralgia of the head and neck: a case report', revue: 'J Pain Res', doi: '10.2147/JPR.S312805', type: 'cas clinique' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [
    { titre: 'Ultrasound-guided cervical plexus block', source: 'NYSORA', url: 'https://www.nysora.com/techniques/head-and-neck-blocks/cervical/ultrasound-guided-cervical-plexus-block/', note: 'sono-anatomie du point d\'Erb et des quatre branches superficielles' },
    { titre: 'Superficial cervical plexus nerve block (ultrasound)', source: 'Radiopaedia', url: 'https://radiopaedia.org/articles/superficial-cervical-plexus-nerve-block-ultrasound', note: 'coupes commentées, plan interfascial' },
    { titre: 'Cervical plexus block', source: 'USRA (usra.ca)', url: 'https://usra.ca/regional-anesthesia/specific-blocks/neck/cervicalplexus.php', note: 'repères, technique et limites du bloc superficiel' },
  ],

  scenes: [
    {
      id: 'lon-gan-erb', section: 'sonoanatomie', titre: 'Point d\'Erb — coupe transversale au bord postérieur du SCM (niveau cricoïde)',
      legende: 'Le SCM s\'effile en biseau ; le plexus cervical superficiel apparaît en nodules hypoéchogènes juste en arrière de ce biseau, **au-dessus du fascia prévertébral** (ligne à ne jamais franchir). Le petit occipital est la branche postéro-supérieure ; le grand auriculaire passe à la face superficielle du SCM, accolé à la jugulaire externe. L\'axe carotidien est en avant et en profondeur.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transversale, niveau du cricoïde', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 7, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 84 L0 86 Z', label: 'Platysma', at: [560, 80], opacity: 0.35, small: true });
        S.muscle({ path: 'M0 92 L110 88 L240 94 L330 122 L296 160 L150 178 L0 176 Z', label: 'Sterno-cléido-mastoïdien', at: [130, 136], opacity: 0.55 });
        S.fascia({ points: [[236, 176], [360, 196], [470, 208], [640, 214]], width: 2.2, opacity: 0.95 });
        S.label({ x: 500, y: 200, text: 'Fascia prévertébral', cls: 'lbl-fascia', small: true });
        S.muscle({ path: 'M250 186 L640 216 L640 336 L280 320 Z', label: 'Élévateur de la scapula / scalène moyen', at: [452, 276], opacity: 0.45, small: true });
        S.vein({ x: 286, y: 92, rx: 15, ry: 8, label: 'V. jugulaire externe', lx: 380, ly: 70, anchor: 'start', lead: [300, 90], small: true });
        S.nerve({ x: 212, y: 84, r: 6, label: 'N. grand auriculaire', lx: 116, ly: 62, anchor: 'end', lead: [206, 80] });
        S.nerve({ x: 352, y: 146, r: 6, label: 'N. petit occipital', lx: 452, ly: 128, anchor: 'start', lead: [359, 144] });
        S.nerve({ x: 344, y: 168, r: 5 });
        S.nerve({ x: 328, y: 184, r: 5, label: 'Plexus cervical superficiel', lx: 440, ly: 176, anchor: 'start', lead: [334, 182], small: true });
        S.artery({ x: 76, y: 246, r: 20, label: 'Carotide', lx: 76, ly: 292, small: true });
        S.vein({ x: 148, y: 232, rx: 26, ry: 16, label: 'JI', lx: 148, ly: 236, small: true });
        S.label({ x: 330, y: 118, text: 'Biseau = point d\'Erb', cls: 'lbl-target', small: true, anchor: 'start' });
      },
    },
    {
      id: 'lon-gan-geste', section: 'technique', titre: 'Bloc des deux nerfs — aiguille dans le plan, de postérieur en antérieur',
      legende: 'Premier temps : pointe dans le plan interfascial entre le biseau du SCM et le fascia prévertébral, 2–3 mL qui décollent le muscle du fascia (petit occipital et plexus). Second temps si l\'on veut un bloc sélectif du grand auriculaire : trajet très tangentiel à la face **superficielle** du SCM, 2 mL autour du nerf en évitant la jugulaire externe. Ne jamais franchir le fascia prévertébral.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transversale, bord postérieur du SCM', type: 'in-plane' });
        S.skin({ thickness: 7, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 84 L0 86 Z', label: 'Platysma', at: [560, 80], opacity: 0.35, small: true });
        S.muscle({ path: 'M0 92 L110 88 L240 94 L330 122 L296 160 L150 178 L0 176 Z', label: 'SCM', at: [120, 136], opacity: 0.55 });
        S.fascia({ points: [[236, 176], [360, 196], [470, 208], [640, 214]], width: 2.2, opacity: 0.95 });
        S.label({ x: 528, y: 200, text: 'Fascia prévertébral — limite', cls: 'lbl-fascia', small: true, anchor: 'end' });
        S.muscle({ path: 'M250 186 L640 216 L640 336 L280 320 Z', label: 'Élévateur de la scapula', at: [452, 282], opacity: 0.45, small: true });
        S.vein({ x: 286, y: 92, rx: 15, ry: 8 });
        S.nerve({ x: 212, y: 84, r: 6, label: 'GAN', lx: 172, ly: 62, anchor: 'end', lead: [207, 80], small: true });
        S.nerve({ x: 352, y: 146, r: 6, label: 'LON', lx: 402, ly: 122, anchor: 'start', lead: [358, 143], small: true });
        S.nerve({ x: 336, y: 176, r: 5 });
        S.artery({ x: 76, y: 246, r: 20, label: 'Carotide', lx: 76, ly: 294, small: true });
        S.target({ x: 344, y: 160, r: 17 });
        S.needle({ from: [640, 116], to: [368, 158], label: '25 G — plan interfascial' });
        S.spread({ x: 322, y: 166, rx: 58, ry: 14, label: '2–3 mL' });
        S.needle({ from: [640, 60], to: [232, 80], label: '2e point : grand auriculaire' });
        S.spread({ x: 210, y: 84, rx: 32, ry: 11, label: '2 mL' });
      },
    },
  ],

  checklist: [
    'Territoire douloureux dessiné avant le geste (lobule / angle mandibulaire / occiput latéral / rétro-auriculaire) et retesté après',
    'Fascia prévertébral identifié à l\'écran avant la ponction — limite profonde absolue',
    'Pression de sonde relâchée et Doppler passé sur la jugulaire externe',
    'Volumes limités (2–4 mL par nerf) si le bloc a une visée diagnostique',
    'Patient prévenu : anesthésie du lobule 2–8 h, conque et anthélix non couverts, possible gêne transitoire de l\'épaule',
    'Corticoïde non particulaire et à faible dose — risque d\'atrophie et de dépigmentation sur zone visible',
  ],
});
