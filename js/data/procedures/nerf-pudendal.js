/* Fiche : nerf pudendal — bloc échoguidé transglutéal à l'épine ischiatique, canal d'Alcock, PRF.
   Rédigée en mode dégradé (budget de recherche web épuisé) : références marquées verif:false à confirmer. */
ECHO.register({
  id: 'nerf-pudendal',
  titre: 'Nerf pudendal — bloc échoguidé transglutéal et canal d\'Alcock',
  titreCourt: 'Nerf pudendal',
  en: 'Ultrasound-guided pudendal nerve block — transgluteal approach at the ischial spine (interligamentous space between sacrospinous and sacrotuberous ligaments), Alcock (pudendal) canal approach; pulsed radiofrequency, cryoneurolysis',
  region: 'rachis-bassin',
  types: ['bloc', 'interventionnel'],
  niveau: 3,
  grade: 'Modérée pour la faisabilité et la comparaison écho vs fluoroscopie (ECR de petite taille) ; faible pour l\'efficacité antalgique à moyen terme',
  maj: '2026-09',
  motsCles: ['pudendal', 'honteux interne', 'névralgie pudendale', 'critères de Nantes', 'douleur pelvi-périnéale chronique', 'épine ischiatique', 'ligament sacro-épineux', 'ligament sacro-tubéral', 'canal d\'Alcock', 'canal pudendal', 'douleur assise', 'périnée', 'PRF'],
  resume: 'Le bloc pudendal échoguidé est à la fois le cinquième critère diagnostique de la névralgie pudendale et son premier traitement. La cible de référence est l\'espace inter-ligamentaire à la pointe de l\'épine ischiatique, entre le ligament sacro-épineux (profond) et le ligament sacro-tubéral (superficiel), où l\'artère pudendale interne au Doppler sert de repère au nerf. L\'échoguidage a supplanté le repérage à l\'aveugle et rivalise avec la fluoroscopie et le scanner, avec l\'avantage de voir l\'artère et de ne pas irradier un patient jeune souvent multi-infiltré. La deuxième cible, le canal d\'Alcock, est plus distale, moins fiable, et sert surtout à l\'hydrodissection. Le geste est de niveau avancé : profondeur, proximité du nerf sciatique, ponction artérielle possible — et il exige une évaluation post-bloc **en position assise**, sans quoi il ne prouve rien. Un bloc bien conduit oriente ensuite tout le parcours, jusqu\'à la décompression chirurgicale.',

  flash: {
    position: 'ventral', positionNote: 'décubitus ventral, coussin sous le bassin ; prévenir de la sensation d\'engourdissement périnéal et de l\'éventuel bloc sciatique',
    sonde: 'convexe', sondeNote: 'convexe 2–5 MHz, profondeur 8–12 cm (épine ischiatique à 5–9 cm selon le morphotype) ; Doppler couleur indispensable',
    approche: 'in-plane', approcheNote: 'coupe transversale à l\'épine ischiatique ; ponction dans le plan, de médial en latéral, pointe arrêtée à l\'épine (le nerf sciatique est immédiatement latéral)',
    aiguille: '22 G 100–120 mm écho-visible (aiguille de bloc ou aiguille à rachianesthésie) ; aiguille RF 22 G 100–145 mm à extrémité active 5–10 mm pour la PRF',
    cible: 'Espace inter-ligamentaire entre ligament sacro-épineux et ligament sacro-tubéral, au contact médial de l\'épine ischiatique, immédiatement adjacent à l\'artère pudendale interne repérée au Doppler ; critère de fin : nappe anéchogène qui écarte les deux ligaments et entoure le signal artériel',
    injectat: '4–5 mL par côté : AL (lidocaïne 2 % ou ropivacaïne 0,2 %) ± corticoïde',
    duree: '15–20 min par côté · 30 min pour une PRF',
  },

  indications: [
    'Névralgie pudendale par syndrome canalaire répondant aux **critères de Nantes** : douleur du territoire pudendal (de l\'anus au pénis/clitoris), aggravée en position assise, ne réveillant pas la nuit, sans déficit sensitif objectif, et **soulagée par le bloc** — le geste est le cinquième critère, il fait partie du diagnostic.',
    'Bloc diagnostique avant toute escalade : radiofréquence pulsée, cryoneurolyse, neuromodulation ou décompression chirurgicale. Sans bloc positif tracé, aucune de ces options n\'est défendable.',
    'Bloc thérapeutique dans la névralgie pudendale confirmée, en association au traitement médicamenteux (antalgiques des douleurs neuropathiques) et à la prise en charge périnéale.',
    'Douleur pelvi-périnéale chronique après chirurgie pelvienne, obstétricale ou proctologique, avec topographie pudendale ; douleur post-radique périnéale.',
    'Douleur périnéale d\'origine cancéreuse : bloc à visée antalgique, en complément d\'un bloc du ganglion impar quand la composante sympathique médiane s\'y ajoute.',
    'Antalgie périopératoire de la chirurgie périnéale et proctologique (hors périmètre de ce mémo, mais c\'est de là que vient la technique).',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée ou profonde sur le trajet, allergie vraie aux amino-amides, sepsis pelvien.',
    'Relatives : troubles de l\'hémostase. ASRA-ESRA 2018 range les **blocs nerveux périphériques** dans la catégorie à **faible risque** et n\'individualise pas le bloc pudendal. Mais le site est **profond, non compressible et au contact direct de l\'artère pudendale interne** : le traiter avec la prudence d\'un geste à risque intermédiaire (Doppler systématique, anticoagulants oraux discutés au cas par cas avec le prescripteur) est défendable — c\'est un choix clinique argumenté, pas la lettre du texte, et il faut le présenter comme tel.',
    'Douleur ne répondant pas aux critères de Nantes, et notamment les **critères d\'exclusion** : douleur purement coccygienne, fessière, hypogastrique ou pubienne ; prurit isolé ; douleur exclusivement paroxystique ; anomalie d\'imagerie expliquant la douleur. Bloquer un patient hors critères, c\'est produire un résultat ininterprétable.',
    'Déficit sensitif objectif du territoire pudendal : il fait sortir du cadre du syndrome canalaire et impose un bilan (lésion sacrée, tumorale, radique).',
    'Patient devant conduire ou repartir seul : bloc sciatique de voisinage possible, et gêne périnéale constante.',
    'Corticoïde : diabète déséquilibré ; infiltrations répétées rapprochées (privilégier l\'espacement à l\'augmentation de dose).',
  ],
  alternatives: 'Le bloc s\'inscrit dans une prise en charge qui ne lui appartient pas entièrement : traitement médicamenteux des douleurs neuropathiques, kinésithérapie périnéale et travail postural (la station assise sur un coussin évidé reste une mesure simple et efficace), prise en charge psycho-comportementale de la douleur chronique. Cibles voisines à ne pas confondre : nerf cutané postérieur de la cuisse (branche périnéale), nerfs ilio-inguinal et génito-fémoral, ganglion impar pour la composante médiane et sympathique (fiche dédiée), nerfs clunéaux moyens pour une douleur fessière haute. En aval du bloc : radiofréquence pulsée, cryoneurolyse, neuromodulation sacrée ou pudendale, et **décompression chirurgicale transglutéale** du nerf, seule intervention évaluée par un essai randomisé dans cette indication — avec un bénéfice réel mais partiel, qui doit être annoncé comme tel.',

  anatomie: `Le **nerf pudendal** naît des racines **S2-S3-S4** (plexus sacré), quitte le pelvis par le **grand foramen ischiatique** sous le muscle piriforme, contourne la **pointe de l\'épine ischiatique** en passant dans l\'**espace inter-ligamentaire** — entre le **ligament sacro-épineux** (profond/ventral, tendu du sacrum à l\'épine ischiatique) et le **ligament sacro-tubéral** (superficiel/dorsal, tendu du sacrum à la tubérosité ischiatique) — puis rentre dans le pelvis par le **petit foramen ischiatique** et chemine dans le **canal pudendal (canal d\'Alcock)**, dédoublement du fascia de l\'obturateur interne sur la paroi latérale de la fosse ischio-rectale.

Il donne trois branches : le **nerf rectal inférieur** (sphincter anal externe, peau péri-anale), le **nerf périnéal** (périnée, sphincter urétral, muscles périnéaux) et le **nerf dorsal du pénis / du clitoris**. Cette division peut être **précoce**, parfois avant l\'épine ischiatique — c\'est une des raisons des échecs d\'un bloc réalisé trop distalement.

L\'**artère pudendale interne** accompagne le nerf à l\'épine ischiatique et constitue le repère Doppler du geste. La disposition la plus souvent décrite, en anatomie comme en échographie, va de dedans en dehors : **nerf pudendal → artère pudendale interne → nerf de l\'obturateur interne**. Le nerf est donc en règle **médial** à l\'artère, mais la disposition varie (nerf parfois postérieur ou latéral au vaisseau, division précoce en branches encadrant l\'artère) — *l\'ampleur de cette variabilité est à confirmer*. La conséquence pratique ne change pas : on repère **l\'artère**, on injecte dans **l\'espace inter-ligamentaire** au contact de celle-ci, et l\'injectat couvre toutes les dispositions. Plus latéralement encore, à distance, se trouve le **nerf sciatique**.

Deux sites de conflit sont décrits : la **pince ligamentaire** entre sacro-épineux et sacro-tubéral (le plus fréquent) et le **canal d\'Alcock**.

### Ce qui compte pour le geste
- **Reconnaître l\'épine ischiatique** : en coupe transversale, elle donne une ligne osseuse **droite** avec ombre franche, alors que la grande incisure ischiatique, juste au-dessus, donne une ligne **concave** puis une interruption. Ce passage « concave → droit » en descendant est le repère décisif.
- **Le ligament sacro-épineux prolonge l\'épine en dedans** : fine bande hyperéchogène, plus mince et plus brillante que le muscle qui la surmonte. C\'est le plancher de la cible.
- **Le nerf sciatique est immédiatement latéral** à l\'épine ischiatique, superficiel au plan osseux : c\'est la structure qu\'on bloque par erreur, et la raison pour laquelle on ponctionne **de médial en latéral** en arrêtant la pointe à l\'épine.
- **Le rectum est en dedans et en avant** : ne jamais diriger la pointe médialement ni la faire franchir le ligament sacro-épineux vers l\'avant.
- **Profondeur** : 5–7 cm chez le sujet mince, jusqu\'à 9–10 cm chez le sujet obèse. Sonde convexe, aiguille de 100–120 mm, angle d\'insonation défavorable — l\'aiguille écho-visible n\'est pas un luxe.
- **Bilatéralité** : la névralgie pudendale est souvent bilatérale à prédominance unilatérale. Bloquer **un côté à la fois** pour garder la valeur diagnostique, et additionner les doses d\'AL si l\'on fait les deux côtés dans la séance.`,

  installation: {
    patient: `**Décubitus ventral**, coussin sous le bassin, bras le long du corps, jambes légèrement écartées. Voie veineuse posée : le geste est profond, la ponction artérielle possible, et le patient est souvent anxieux après un long parcours diagnostique.

Marquer au feutre l\'**EIPS**, le **grand trochanter** et la **tubérosité ischiatique** ; le champ doit couvrir toute la fesse. Expliquer avant le geste ce qui va être ressenti : engourdissement périnéal (attendu), éventuelle sensation de jambe lourde (bloc sciatique de voisinage), et **la nécessité de se rasseoir 30 minutes après** pour évaluer le bloc.`,
    operateur: `Opérateur du côté à traiter, écran de l\'autre côté dans l\'axe du regard, **médial affiché à gauche**. Ponction dans le plan, de **médial en latéral** : le trajet s\'éloigne du rectum et la progression est arrêtée par l\'épine ischiatique, qui fait butée avant le nerf sciatique. Main de sonde en appui ferme (la profondeur amplifie le moindre mouvement).`,
    sonde: `- **Convexe 2–5 MHz**, preset abdomen profond ou MSK profond, profondeur initiale 10–12 cm, focale sur le plan ligamentaire, gain adapté pour distinguer un ligament fin d\'un muscle.
- **Doppler couleur, PRF basse et échelle de vitesse basse** : l\'artère pudendale interne est petite et lente ; sans réglage adapté on ne la voit pas. Elle est le repère du geste — pas d\'injection sans l\'avoir identifiée.
- Aiguille écho-visible fortement recommandée (angle de 45–60° à 7–9 cm de profondeur) ; à défaut, hydrolocalisation par bolus de 0,5 mL.
- Housse de sonde stérile, champ large, asepsie chirurgicale.`,
  },

  reperage: [
    { titre: 'Partir du grand trochanter et de la grande incisure', texte: 'Sonde **transversale** sur la fesse, repérer le grand trochanter en dehors, puis remonter vers la **grande incisure ischiatique** : la ligne osseuse est **concave** et l\'on retrouve le piriforme et le nerf sciatique (voir la fiche Piriforme, dont le repérage est le point de départ de celui-ci).' },
    { titre: 'Descendre jusqu\'à l\'épine ischiatique', texte: 'Translater la sonde en **caudal**, parallèlement à elle-même : la ligne osseuse concave se **redresse** et devient une **ligne droite, régulière, très brillante, avec une ombre franche** — c\'est l\'**épine ischiatique**. Ce passage « concave → droit » est le repère central du geste ; s\'il n\'est pas obtenu, ne pas ponctionner.' },
    { titre: 'Identifier les deux ligaments', texte: 'En dedans de l\'épine, la ligne osseuse se prolonge par une **fine bande hyperéchogène** : le **ligament sacro-épineux**. Plus superficiellement, une seconde bande, plus épaisse et plus oblique, sous le grand fessier : le **ligament sacro-tubéral**. La cible est l\'espace entre les deux.' },
    { titre: 'Doppler : trouver l\'artère pudendale interne', texte: 'Activer le Doppler couleur à basse PRF sur la pointe de l\'épine et juste en dedans : l\'**artère pudendale interne** apparaît comme un petit signal pulsatile dans l\'espace inter-ligamentaire. Le nerf est immédiatement adjacent — souvent en dedans d\'elle — sous la forme d\'une petite structure ovalaire hyperéchogène de 4–8 mm, **inconstamment individualisable**.' },
    { titre: 'Repérer le nerf sciatique avant de ponctionner', texte: 'Le balayer et le garder en mémoire : il est **latéral à l\'épine**, plus superficiel, nettement plus gros (8–12 mm, fasciculaire). Toute paresthésie descendante en cours de geste signe une progression trop latérale.' },
    { titre: 'Si l\'artère n\'est pas visible', texte: 'Trois manœuvres, dans cet ordre : baisser l\'échelle de vitesse et la PRF du Doppler ; réduire la pression de la sonde (une pression forte collabe le vaisseau) ; corriger l\'obliquité de la sonde pour aligner le faisceau sur l\'axe du vaisseau. Si l\'artère reste invisible, **le repère anatomique reste valable** : espace entre les deux ligaments, au contact médial de la pointe de l\'épine ischiatique — mais l\'aspiration et le fractionnement deviennent d\'autant plus impératifs.' },
  ],

  sonoanatomie: [
    { structure: 'Grand fessier', aspect: 'Muscle épais superficiel, strié', repere: 'Première couche traversée par l\'aiguille' },
    { structure: 'Épine ischiatique', aspect: 'Ligne osseuse **droite**, très hyperéchogène, ombre franche', repere: 'Repère central ; la ligne concave sus-jacente est la grande incisure' },
    { structure: 'Ligament sacro-épineux', aspect: 'Fine bande hyperéchogène prolongeant l\'épine en dedans, plus mince et plus brillante que le muscle', repere: 'Plancher (profond/ventral) de la cible' },
    { structure: 'Ligament sacro-tubéral', aspect: 'Bande fibrillaire plus épaisse et plus superficielle, oblique', repere: 'Toit (superficiel/dorsal) de la cible' },
    { structure: 'Artère pudendale interne', aspect: 'Petit signal pulsatile en Doppler couleur, réglage basse vitesse', repere: 'Dans l\'espace inter-ligamentaire, à la pointe de l\'épine — repère du nerf' },
    { structure: 'Nerf pudendal', aspect: 'Structure ovalaire hyperéchogène de 4–8 mm, souvent non individualisable', repere: 'Immédiatement adjacent à l\'artère, le plus souvent en dedans (disposition variable)' },
    { structure: 'Nerf sciatique', aspect: 'Structure ovalaire fasciculaire de 8–12 mm, nettement plus volumineuse', repere: 'Latéral à l\'épine ischiatique, plus superficiel — à ne pas confondre ni bloquer' },
    { structure: 'Obturateur interne (voie d\'Alcock)', aspect: 'Muscle appliqué sur la face médiale de l\'ischion, plus caudalement', repere: 'Le canal pudendal est dans le dédoublement de son fascia' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche), voie veineuse, monitorage si le patient est fragile ou si l\'on prévoit un geste bilatéral. Asepsie chirurgicale, housse de sonde stérile. Aiguille **22 G 100–120 mm** écho-visible sur prolongateur, seringues étiquetées. Repérage **complet** — épine, deux ligaments, artère, nerf sciatique — avant toute ponction.' },
    { titre: 'Anesthésie cutanée et du trajet', texte: '3–5 mL de lidocaïne 1 % à la peau et sur le trajet dans le grand fessier. Point d\'entrée à 2 cm du bord **médial** de la sonde, dans le plan.' },
    { titre: 'Ponction dans le plan, de médial en latéral', texte: 'Angle **45–60°**. Progresser lentement en gardant l\'aiguille visible sur toute sa longueur, à travers le grand fessier, puis à travers le **ligament sacro-tubéral** — le franchissement donne un ressaut net et vaut repère tactile — pour arriver dans l\'espace inter-ligamentaire, au contact médial de la **pointe de l\'épine ischiatique**. **Ne pas dépasser l\'épine en dehors** (nerf sciatique) et ne pas franchir le ligament sacro-épineux en avant (pelvis, rectum).' },
    { titre: 'Aspiration et hydrolocalisation', texte: 'Aspiration soigneuse, répétée et dans deux orientations (l\'artère est au contact). Injecter **0,5 mL** : l\'injectat doit **écarter les deux ligaments** et former une nappe anéchogène qui entoure le signal Doppler. Si rien ne s\'ouvre, la pointe est encore dans le ligament sacro-tubéral : avancer de 2–3 mm. Douleur fulgurante ou paresthésie périnéale intense → reculer de 1–2 mm avant d\'injecter.' },
    { titre: 'Injection fractionnée', texte: 'Injecter **4–5 mL** par bolus de 1 mL, avec aspiration entre chaque, en surveillant en continu la diffusion et l\'absence de disparition brutale de l\'injectat (signe d\'injection intravasculaire). Surveiller le patient : acouphènes, goût métallique, agitation imposent l\'arrêt immédiat.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène **inter-ligamentaire**, de 2–3 cm d\'étalement le long de l\'épine, englobant le signal artériel, sans augmentation du diamètre du nerf. Retrait de l\'aiguille ; si un côté seulement était prévu, ne pas enchaîner l\'autre.' },
    { titre: 'Après le geste — l\'évaluation qui compte', texte: 'Tester la sensibilité périnéale (attendue diminuée) et la motricité du membre inférieur (le bloc sciatique de voisinage est possible). Puis, **impérativement, faire rasseoir le patient 20 à 30 minutes** et coter la douleur assise avant / après : c\'est la seule évaluation qui a une valeur diagnostique dans la névralgie pudendale, puisque la douleur est définie par la position assise. Noter aussi l\'EN à 2 h et le lendemain. Sortie accompagnée, pas de conduite.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique (critère de Nantes) | Lidocaïne 2 % ou ropivacaïne 0,2 %, **AL seul** | 4–5 mL par côté | Un seul côté par séance pour garder la lecture. Évaluation **en position assise** à 30 min, puis EN à 2 h et à 24 h |
| Bloc thérapeutique | AL + corticoïde : bétaméthasone 5,7 mg (Diprostène® 1 mL), méthylprednisolone 40 mg, ou dexaméthasone 4–8 mg | 5–8 mL par côté | Site au contact d\'une artère : préférer un **corticoïde non particulaire** (dexaméthasone) ou justifier explicitement le choix d\'un particulaire. L\'apport réel du corticoïde par rapport à l\'AL seul est discuté — un essai contrôlé n\'a pas retrouvé de bénéfice à 3 mois (*à confirmer*) |
| Hydrodissection (canal d\'Alcock) | G5 % 8–10 mL ± lidocaïne 1 % | 8–10 mL | Logique de libération du canal ; preuve limitée à des séries — *à confirmer* |
| Avant PRF | Lidocaïne 1 % ou sérum physiologique | 1–2 mL | Volume minimal : ne pas éloigner le nerf de l\'électrode |
| Geste bilatéral | Mêmes produits | Additionner | Vérifier la dose totale et l\'espacer si possible sur deux séances |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Un bloc pudendal unilatéral à 5 mL en est très loin ; c\'est le **bloc bilatéral, ou son association à un bloc du ganglion impar ou à d\'autres infiltrations dans la même séance**, qui impose le calcul. Émulsion lipidique disponible.

**Ne pas utiliser d\'adrénaline** dans cet injectat : le nerf chemine avec une artère satellite dans un canal inextensible, et le bénéfice attendu ne compense pas le risque théorique ischémique.`,

  variantes: [
    { titre: 'Voie du canal d\'Alcock (pudendal canal)', texte: `Cible plus **distale**, dans le dédoublement du fascia de l\'obturateur interne sur la paroi latérale de la fosse ischio-rectale. Sonde transversale descendue en caudal depuis l\'épine ischiatique jusqu\'à voir l\'**ischion** et l\'**obturateur interne** ; le canal se situe à la face médiale du muscle, et le pédicule pudendal (artère au Doppler) y est recherché. Aiguille in-plane, de latéral en médial, 4–5 mL ou 8–10 mL en hydrodissection.

Deux limites à assumer : le nerf y est **moins souvent visible** qu\'à l\'épine, et la division du nerf est fréquemment déjà faite à ce niveau, de sorte qu\'un bloc distal peut manquer une branche (typiquement le nerf rectal inférieur, parfois issu directement du plexus). C\'est donc une voie de **seconde intention** ou de complément — utile quand le conflit est jugé canalaire distal, ou pour une hydrodissection — mais **pas** la voie du bloc diagnostique de référence.` },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Après **au moins un bloc test franchement positif** (soulagement significatif de la douleur assise pendant la durée de l\'AL). Aiguille RF 22 G 100–145 mm à extrémité active 5–10 mm, positionnée dans l\'espace inter-ligamentaire par la même voie transglutéale. Stimulation sensitive 50 Hz : paresthésies **périnéales** à basse tension (une paresthésie du membre inférieur signe une position trop latérale — repositionner) ; stimulation motrice 2 Hz : contraction du sphincter anal possible, elle confirme la proximité. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**, puis 2–3 mL d\'AL ± corticoïde.

**Aucune radiofréquence thermique** sur le nerf pudendal : c\'est un nerf mixte, avec innervation sphinctérienne. Le niveau de preuve de la PRF pudendale repose sur des **séries et des cas**, avec des durées d\'effet de quelques mois — *à confirmer*.` },
    { titre: 'Cryoneurolyse', texte: `Décrite sur la même cible transglutéale, sonde cryo 14–16 G, cycles gel/dégel après repérage et anesthésie locale. Intérêt théorique : pas de névrome de désafférentation, effet plus long qu\'un bloc. Données **très limitées** (séries, cas) dans cette indication ; à réserver aux répondeurs au bloc test chez qui la chirurgie n\'est pas envisageable — *à confirmer*.` },
    { titre: 'Voie transpérinéale et voie transvaginale', texte: `La voie **transpérinéale** échoguidée, avec sonde placée au périnée et aiguille dirigée vers l\'épine ischiatique, est décrite ; elle expose au risque de **ponction rectale** et d\'injection intrarectale, et à une asepsie plus difficile. La voie **transvaginale** (repérage digital de l\'épine ischiatique) reste l\'usage obstétrical. Ni l\'une ni l\'autre n\'a d\'intérêt en algologie face à la voie transglutéale échoguidée, sauf accès postérieur impossible.` },
    { titre: 'Après plusieurs blocs : neuromodulation et chirurgie', texte: `Chez le patient qui répond franchement mais brièvement, et dont les critères de Nantes sont complets : discussion en équipe spécialisée de la **neuromodulation** (sacrée ou pudendale) et de la **décompression chirurgicale transglutéale** du nerf, avec section des ligaments et transposition. C\'est la seule intervention évaluée par un essai randomisé dans la névralgie pudendale, avec un bénéfice **réel mais partiel** et une amélioration qui peut mettre des mois à s\'installer : l\'information du patient doit être franche sur ce point. Notre rôle est de fournir le bloc test tracé, l\'évaluation assise et la description exacte du site répondeur.` },
  ],

  pearls: [
    'Le repère n\'est pas le nerf, c\'est la **transition ligne concave (incisure) → ligne droite (épine ischiatique)** en descendant la sonde. Sans elle, on ne ponctionne pas.',
    'Régler le Doppler pour un petit vaisseau lent (PRF et échelle basses) et alléger la pression de la sonde : c\'est la manœuvre qui fait apparaître l\'artère pudendale.',
    'Ponctionner de médial en latéral : le rectum reste derrière soi et l\'épine ischiatique fait butée avant le nerf sciatique.',
    'Un côté par séance pour un bloc diagnostique : deux côtés bloqués simultanément, c\'est une information perdue et une dose doublée.',
    'Faire rasseoir le patient 30 minutes après : dans la névralgie pudendale, l\'évaluation debout ou couchée ne veut rien dire.',
    'Chez le patient hors critères de Nantes, le bloc ne tranchera rien : mieux vaut reprendre l\'examen que de produire un résultat ininterprétable.',
  ],
  pieges: [
    'Ponctionner sur la grande incisure (ligne concave) en croyant être sur l\'épine : on injecte alors autour du nerf sciatique.',
    'Prendre le nerf sciatique pour le nerf pudendal : il est latéral, plus superficiel et deux fois plus gros.',
    'Injecter dans l\'épaisseur du ligament sacro-tubéral : rien ne s\'ouvre à l\'écran, l\'injectat n\'atteint pas la cible et le test est faussement négatif.',
    'Franchir le ligament sacro-épineux vers l\'avant : on entre dans le pelvis, à proximité du rectum.',
    'Utiliser un gros volume « pour être sûr » : au-delà de 5 mL, la diffusion atteint le sciatique et le plexus, et le bloc perd sa valeur diagnostique tout en produisant un bloc moteur.',
    'Conclure « bloc négatif » sans avoir vérifié que l\'injectat s\'était bien ouvert entre les deux ligaments : un échec technique n\'est pas un échec diagnostique.',
  ],
  complications: [
    '**Bloc sciatique de voisinage** : engourdissement et faiblesse du membre inférieur, fréquent, régressif en 2–8 h. Prévenir systématiquement, vérifier la marche avant la sortie, retour accompagné, pas de conduite.',
    '**Ponction de l\'artère pudendale interne** : hématome profond **non compressible**. Aspiration répétée, Doppler préalable, prudence majorée sous antithrombotiques.',
    '**Injection intravasculaire d\'AL** : toxicité systémique (acouphènes, goût métallique, agitation, convulsions, troubles du rythme) — injection fractionnée, surveillance verbale continue, émulsion lipidique immédiatement disponible.',
    '**Injection intraneurale** : douleur fulgurante, résistance à l\'injection, augmentation du calibre du nerf → arrêt immédiat, retrait, surveillance et traçabilité.',
    'Troubles transitoires de la continence urinaire ou anale, difficulté à uriner : liés au bloc lui-même et au volume ; prévenir, surveiller la reprise mictionnelle avant la sortie.',
    'Ponction rectale et contamination : risque propre à la **voie transpérinéale** ; argument supplémentaire pour la voie transglutéale.',
    'Infection profonde de la fesse : exceptionnelle mais grave à cette profondeur — asepsie chirurgicale, pas de geste sur peau douteuse.',
    'Aggravation transitoire de la douleur 24–72 h (réaction au corticoïde ou au trajet) : prévenir, antalgiques simples.',
  ],
  securite: [
    'Risque hémorragique : **faible** au sens strict d\'ASRA-ESRA 2018 (bloc nerveux périphérique), mais site **profond, non compressible, au contact d\'une artère** — prudence individuelle de niveau intermédiaire sous anticoagulant oral, et ne pas transposer la permissivité des blocs superficiels de la région.',
    'Doppler couleur obligatoire avant la ponction, réglé pour un vaisseau lent ; aspiration dans deux orientations avant chaque bolus ; injection fractionnée par 1 mL.',
    'Nerf sciatique repéré et sa position mémorisée avant de commencer ; pointe jamais latérale à l\'épine ischiatique.',
    'Pas d\'adrénaline dans l\'injectat ; corticoïde non particulaire de préférence.',
    'Voie veineuse posée, chariot d\'urgence et **émulsion lipidique** disponibles, surtout si geste bilatéral ou associé à d\'autres blocs.',
    'Aucune radiofréquence thermique sur ce nerf mixte à innervation sphinctérienne : PRF uniquement.',
    'Sortie conditionnée à la reprise d\'une marche stable et d\'une miction ; consignes écrites remises.',
  ],

  suivi: `- **J0** : EN **en position assise** avant le geste et 20–30 min après (l\'évaluation de référence), EN couchée, sensibilité périnéale, examen moteur du membre inférieur, reprise mictionnelle. Tracer le côté, le volume, le produit et le site exact.
- **J1** : EN assise à 24 h (fin de l\'effet de l\'AL) — permet de séparer l\'effet anesthésique de l\'effet corticoïde éventuel.
- **J15–J30** : EN assise moyenne, **durée de station assise tolérée en minutes** (le critère fonctionnel le plus parlant dans cette indication), retentissement sur le sommeil, la sexualité et la vie sociale, consommation d\'antalgiques et de traitements des douleurs neuropathiques.
- **3 mois** : décision.
  - Réponse franche et prolongée → répéter au besoin, poursuivre le traitement de fond.
  - Réponse franche mais brève, critères de Nantes complets → discuter PRF, cryoneurolyse, neuromodulation, ou adresser pour **décompression chirurgicale**.
  - Réponse nulle malgré un bloc techniquement réussi → **remettre en cause le diagnostic** : rouvrir la piste des autres générateurs pelvi-périnéaux (ganglion impar, nerf cutané postérieur de la cuisse, sacro-iliaque, syndrome myofascial du plancher pelvien, douleur nociplastique).
- Ne pas empiler les blocs : au-delà de 2 à 3 gestes sans bénéfice durable, la répétition n\'apporte rien et retarde la bonne orientation.`,

  evidence: `- **Cadre diagnostique** : les **critères de Nantes** (Labat et al., 2008) restent le référentiel international de la névralgie pudendale par syndrome canalaire. Ils intègrent explicitement le **soulagement par le bloc** comme critère indispensable, ce qui donne au geste un statut particulier : il n\'est pas seulement thérapeutique, il est constitutif du diagnostic. Preuve : **consensus d\'experts multidisciplinaire**, largement adopté, jamais validé contre un étalon-or indépendant — parce qu\'il n\'en existe pas.
- **Faisabilité échoguidée (Rofaeel et al., 2008)** : première description de la faisabilité du bloc pudendal échoguidé en temps réel chez des patients douloureux chroniques, à l\'épine ischiatique, avec l\'artère pudendale comme repère. Preuve **descriptive**.
- **Écho versus fluoroscopie (Bellingham et al., 2012, essai randomisé)** : comparaison des deux guidages pour le bloc pudendal ; l\'échoguidage est au moins équivalent en termes de succès du bloc, avec l\'avantage de la visualisation vasculaire et de l\'absence d\'irradiation. **Effectif limité** — c\'est une comparaison de technique, pas d\'efficacité clinique.
- **Apport du corticoïde** : un essai contrôlé a comparé bloc pudendal avec et sans corticoïde et n\'a pas mis en évidence de bénéfice supplémentaire à moyen terme (*résultat à confirmer, référence à vérifier*). Conséquence pratique raisonnable : ne pas considérer le corticoïde comme indispensable, et l\'omettre chez le diabétique ou en cas d\'infiltrations répétées.
- **Radiofréquence pulsée et cryoneurolyse** : **séries et cas cliniques uniquement**, sans comparateur. Le signal est favorable mais le niveau de preuve est faible ; l\'information du patient doit le dire.
- **Décompression chirurgicale (Robert et al., 2005, essai randomisé)** : la transposition-décompression transglutéale du nerf pudendal a été comparée au traitement conservateur, avec un bénéfice significatif mais **partiel** et d\'installation lente. C\'est la donnée la plus robuste de tout le champ, et elle concerne la chirurgie, pas le bloc.
- **Trous de la littérature, à assumer** : aucun ECR du bloc pudendal échoguidé contre placebo ; pas de standardisation du volume, du produit ni du nombre de blocs ; valeur prédictive du bloc sur le résultat chirurgical non quantifiée ; visualisation directe du nerf inconstante, ce qui rend le « bloc du nerf » en pratique un **bloc d\'espace** ; place respective des voies épine ischiatique et canal d\'Alcock non tranchée par une comparaison directe.

*Mode dégradé : les références de cette fiche marquées « à vérifier » n\'ont pas pu être reconfirmées par une recherche bibliographique lors de sa rédaction (budget épuisé). Vérifier auteurs, revue, année et pagination avant toute citation externe.*`,

  references: [
    { verif: false, auteurs: 'Labat JJ, Riant T, Robert R, Amarenco G, Lefaucheur JP, Rigaud J', titre: 'Diagnostic criteria for pudendal neuralgia by pudendal nerve entrapment (Nantes criteria)', revue: 'Neurourology and Urodynamics', annee: '2008', type: 'consensus', note: 'Référentiel diagnostique ; revue et année à confirmer.' },
    { verif: false, auteurs: 'Rofaeel A, Peng P, Louis I, Chan V', titre: 'Feasibility of real-time ultrasound for pudendal nerve block in patients with chronic perineal pain', revue: 'Regional Anesthesia and Pain Medicine', annee: '2008', type: 'faisabilité', note: 'Description princeps de la voie transglutéale échoguidée ; à confirmer.' },
    { verif: false, auteurs: 'Bellingham GA, Bhatia A, Chan CW, Peng PW', titre: 'Randomized controlled trial comparing pudendal nerve block under ultrasound and fluoroscopic guidance', revue: 'Regional Anesthesia and Pain Medicine', annee: '2012', type: 'ECR', note: 'Comparaison de guidage ; à confirmer.' },
    { verif: false, auteurs: 'Peng PW, Tumber PS', titre: 'Ultrasound-guided interventional procedures for patients with chronic pelvic pain — a description of techniques and review of the literature', revue: 'Pain Physician', annee: '2008', type: 'revue technique', note: 'À confirmer.' },
    { verif: false, auteurs: 'Bendtsen TF, Parras T, Moriggl B, et al.', titre: 'Ultrasound-guided pudendal nerve block at the entrance of the pudendal (Alcock) canal: description of anatomy and clinical technique', revue: 'Regional Anesthesia and Pain Medicine', annee: '2016', type: 'anatomie / technique', note: 'Voie du canal d\'Alcock ; à confirmer.' },
    { verif: false, auteurs: 'Robert R, Labat JJ, Bensignor M, et al.', titre: 'Decompression and transposition of the pudendal nerve in pudendal neuralgia: a randomized controlled trial and long-term evaluation', revue: 'European Urology', annee: '2005', type: 'ECR', note: 'Équipe nantaise ; seule chirurgie évaluée par ECR dans cette indication. À confirmer.' },
    { verif: false, auteurs: 'Labat JJ, Riant T, Lassaux A, et al.', titre: 'Adding corticosteroids to the pudendal nerve block for pudendal neuralgia: a randomised, double-blind, controlled trial', revue: 'BJOG', annee: '2017', type: 'ECR', note: 'Conditionne la recommandation sur le corticoïde ; année et pagination à confirmer.' },
    { verif: true, auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'pud-epine', section: 'sonoanatomie', titre: 'Coupe transversale à l\'épine ischiatique — espace inter-ligamentaire',
      legende: 'En descendant la sonde depuis la grande incisure, la ligne osseuse concave devient droite : c\'est l\'épine ischiatique. En dedans, elle se prolonge par le fin ligament sacro-épineux ; plus superficiellement court le ligament sacro-tubéral. Le pédicule pudendal est entre les deux, l\'artère au Doppler servant de repère au nerf. Le nerf sciatique, deux fois plus gros, est latéral à l\'épine et plus superficiel.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (sacrum)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, épine ischiatique', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 80 L640 80 L640 178 L0 194 Z', label: 'Grand fessier', at: [96, 136], opacity: 0.5 });
        S.ligament({ path: 'M28 214 L392 200 L396 224 L32 240 Z', label: 'Lig. sacro-tubéral (superficiel)', at: [186, 186], small: true });
        S.ligament({ path: 'M24 288 L406 268 L410 288 L28 310 Z', label: 'Lig. sacro-épineux (profond)', at: [180, 342], small: true });
        S.bone({ path: 'M410 274 L640 268', label: 'Épine ischiatique\n(ligne droite)', at: [532, 312], ldy: 0, small: true });
        S.artery({ x: 372, y: 250, r: 8, label: 'A. pudendale (Doppler)', lx: 470, ly: 250, anchor: 'start', lead: [382, 250], small: true });
        S.nerve({ x: 334, y: 256, rx: 11, ry: 9, label: 'N. pudendal (4–8 mm)', lx: 236, ly: 250, anchor: 'end', lead: [324, 254], small: true });
        S.nerve({ x: 546, y: 218, rx: 26, ry: 11, label: 'N. sciatique (latéral)', lx: 546, ly: 180, anchor: 'middle', lead: [546, 208], small: true });
        S.label({ x: 200, y: 386, text: 'Cible = l\'espace entre les deux ligaments', cls: 'lbl-target', small: true });
      },
    },
    {
      id: 'pud-bloc', section: 'technique', titre: 'Bloc transglutéal — aiguille dans le plan, de médial en latéral',
      legende: 'Le trajet médio-latéral éloigne la pointe du rectum et l\'épine ischiatique fait butée avant le nerf sciatique. Franchir le ligament sacro-tubéral (ressaut net), poser la pointe dans l\'espace inter-ligamentaire au contact médial de l\'épine, aspirer dans deux orientations, puis injecter 4–5 mL fractionnés. Critère de fin : les deux ligaments s\'écartent et l\'injectat entoure le signal artériel.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (sacrum)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, épine ischiatique', type: 'in-plane, médio-latéral' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 80 L640 80 L640 178 L0 194 Z', label: 'Grand fessier', at: [520, 136], opacity: 0.5 });
        S.ligament({ path: 'M28 214 L392 200 L396 224 L32 240 Z', label: 'Lig. sacro-tubéral', at: [150, 186], small: true });
        S.ligament({ path: 'M24 288 L406 268 L410 288 L28 310 Z', label: 'Lig. sacro-épineux', at: [140, 332], small: true });
        S.bone({ path: 'M410 274 L640 268', label: 'Épine ischiatique', at: [540, 302], ldy: 0, small: true });
        S.artery({ x: 372, y: 250, r: 8 });
        S.nerve({ x: 334, y: 256, rx: 11, ry: 9 });
        S.nerve({ x: 546, y: 218, rx: 26, ry: 11, label: 'N. sciatique — ne pas dépasser l\'épine', lx: 516, ly: 182, anchor: 'middle', lead: [532, 208], small: true });
        S.target({ x: 352, y: 254, r: 20 });
        S.needle({ from: [4, 112], to: [318, 252], label: '22 G 100–120 mm, 45–60°' });
        S.spreadPath({ path: 'M232 240 Q350 216 466 238 Q350 250 232 240 Z', at: [160, 266], label: '4–5 mL — les ligaments s\'écartent' });
      },
    },
    {
      id: 'pud-alcock', section: 'technique', titre: 'Voie du canal d\'Alcock — dédoublement du fascia de l\'obturateur interne',
      legende: 'Cible plus caudale : la sonde descend jusqu\'à voir l\'ischion et l\'obturateur interne appliqué sur sa face médiale. Le canal pudendal est dans le dédoublement fascial, à la face médiale du muscle. Voie de seconde intention : le nerf y est moins souvent visible et sa division est souvent déjà faite — utile surtout pour l\'hydrodissection.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (fosse ischio-rectale)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, sous l\'épine ischiatique', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 80 L640 80 L640 164 L0 182 Z', label: 'Grand fessier', at: [500, 128], opacity: 0.5 });
        S.fat({ path: 'M0 190 L250 206 L250 300 L0 318 Z', label: 'Graisse ischio-rectale', at: [110, 258] });
        S.muscle({ path: 'M244 214 L636 196 L640 268 L256 300 Z', label: 'Obturateur interne', at: [470, 250], opacity: 0.55 });
        S.bone({ path: 'M268 320 Q440 300 640 288', label: 'Ischion', at: [470, 348], ldy: 0, small: true });
        S.region({ path: 'M236 216 L308 210 L318 268 L246 288 Z', fill: '#7c8894', opacity: 0.4, label: 'Canal pudendal\n(dédoublement fascial)', at: [140, 356], small: true, lead: [246, 272] });
        S.artery({ x: 296, y: 226, r: 6, label: 'A. pudendale', lx: 384, ly: 202, anchor: 'start', lead: [302, 228], small: true });
        S.nerve({ x: 272, y: 264, rx: 9, ry: 8, label: 'N. pudendal', lx: 372, ly: 288, anchor: 'start', lead: [281, 264], small: true });
        S.needle({ from: [638, 110], to: [314, 242], label: '22 G, in-plane latéro-médial' });
        S.spread({ x: 288, y: 245, rx: 34, ry: 8, label: '4–5 mL' });
        S.label({ x: 148, y: 306, text: '8–10 mL si hydrodissection\ndu canal', anchor: 'middle', cls: 'lbl-spread', small: true });
      },
    },
  ],

  checklist: [
    'Critères de Nantes vérifiés point par point, y compris les critères d\'exclusion, **avant** de poser l\'indication du bloc',
    'Voie veineuse posée ; émulsion lipidique et chariot d\'urgence vérifiés (geste profond au contact d\'une artère)',
    'Transition ligne concave (incisure) → ligne droite (épine ischiatique) obtenue et les deux ligaments identifiés avant toute ponction',
    'Artère pudendale recherchée au Doppler basse vitesse ; nerf sciatique repéré et sa position mémorisée',
    'Un seul côté par séance si le bloc est diagnostique ; dose totale d\'AL calculée si geste bilatéral ou associé',
    'EN **en position assise** notée avant et 20–30 min après le geste — sans cette mesure, le bloc n\'a pas de valeur diagnostique',
    'Marche stable et reprise mictionnelle vérifiées avant la sortie ; retour accompagné, pas de conduite',
  ],
});
