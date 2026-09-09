/* Fiche : articulation sacro-iliaque — infiltration intra-articulaire, blocs des branches latérales sacrées, RF. */
ECHO.register({
  id: 'sacro-iliaque',
  titre: 'Articulation sacro-iliaque — infiltration intra-articulaire, blocs des branches latérales et radiofréquence',
  titreCourt: 'Sacro-iliaque',
  en: 'Ultrasound-guided sacroiliac joint intra-articular injection (caudal one-third approach), sacral lateral branch blocks (S1–S3 posterior sacral foramina) and lateral branch radiofrequency neurotomy',
  region: 'rachis-bassin',
  types: ['infiltration', 'bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Modérée pour l\'infiltration intra-articulaire (ECR de petite taille, effet à court terme) · modérée pour la radiofréquence des branches latérales (ECR contrôlés) · faisabilité échographique bonne mais précision intra-articulaire variable (≈ 60–90 %)',
  maj: '2026-09',
  motsCles: ['SI', 'sacro-iliite', 'spondyloarthrite', 'branches latérales sacrées', 'foramens sacrés postérieurs', 'Laslett', 'RF refroidie', 'EIPS', 'post-arthrodèse', 'douleur fessière'],
  resume: 'L\'articulation sacro-iliaque rend compte de 15 à 30 % des lombalgies chroniques basses et reste sous-diagnostiquée. Deux gestes bien distincts s\'y rapportent : l\'**infiltration intra-articulaire**, qui n\'est possible que dans le **tiers caudal** — seule portion réellement synoviale et seule fenêtre accessible en échographie — et le **bloc des branches latérales sacrées S1–S3**, qui cible l\'innervation postérieure de l\'articulation et sert de test avant radiofréquence. Ils ne traitent pas la même chose : l\'infiltration s\'adresse à la douleur intra-articulaire (spondyloarthrite, arthrose, post-arthrodèse), le bloc des branches latérales à la composante ligamentaire postérieure. L\'échoguidage évite les rayons et voit les parties molles, mais il ne confirme pas la position intra-articulaire : la précision rapportée va de 60 à 90 % selon l\'expérience, et le Doppler ou un contrôle par contraste restent utiles quand la position doit être certaine.',

  flash: {
    position: 'procubitus', positionNote: 'coussin sous l\'abdomen ; pieds légèrement en rotation interne pour ouvrir le bassin',
    sonde: 'convexe', sondeNote: '2–5 MHz, profondeur 6–9 cm ; linéaire 6–13 MHz possible chez le sujet mince (la fente est à 3–5 cm)',
    approche: 'in-plane', approcheNote: 'coupe transversale au tiers caudal, ponction **médio-latérale** dans l\'axe de la fente articulaire',
    aiguille: '22 G 80–90 mm pour l\'intra-articulaire ; 22 G 50–90 mm pour les branches latérales ; canule RF refroidie 17–18 G ou bipolaire selon le système',
    cible: 'Intra-articulaire : franchissement de la fente entre le bord postéro-latéral du sacrum et le bord médial de l\'ilium, au tiers caudal. **Critère de fin : l\'injectat reste dans la fente et ne reflue pas dans le muscle**',
    injectat: 'Intra-articulaire : 2–3 mL au total (AL + corticoïde, particulaire acceptable) · branches latérales : 1–1,5 mL par site',
    duree: '10–15 min intra-articulaire · 20–30 min pour un bloc S1–S3 · 45–60 min pour une RF',
  },

  indications: [
    '**Douleur sacro-iliaque mécanique** : douleur fessière basse, sous-L5, à projection fessière et trochantérienne, réveillée par l\'appui monopodal et le passage assis-debout, avec au moins **3 tests de provocation positifs sur 5** (batterie de Laslett : distraction, thigh thrust, compression, Gaenslen, sacral thrust).',
    '**Spondyloarthrite avec sacro-iliite** active mal contrôlée : c\'est l\'indication où l\'infiltration intra-articulaire de corticoïde a le meilleur niveau de preuve.',
    '**Douleur sacro-iliaque post-arthrodèse lombo-sacrée** : fréquente, la fusion transférant les contraintes sur l\'articulation sous-jacente.',
    '**Douleur sacro-iliaque du post-partum** et instabilité de la ceinture pelvienne.',
    '**Bloc diagnostique** avant radiofréquence des branches latérales : le bloc intra-articulaire teste la composante articulaire, le bloc des branches latérales teste la composante postérieure ligamentaire — ce ne sont pas des tests interchangeables.',
    'Coxarthrose ou pathologie de hanche déjà écartées, radiculalgie L5-S1 exclue : la douleur sacro-iliaque est un diagnostic d\'exclusion clinique autant que d\'imagerie.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée en regard, sepsis, allergie vraie aux amino-amides.',
    '**Sacro-iliite infectieuse** : contre-indication formelle à l\'infiltration de corticoïde. Y penser devant une douleur inflammatoire fébrile — ponction à visée bactériologique d\'abord.',
    '**Relatives** : morphotype (au-delà d\'un IMC de 35, la fente n\'est plus identifiable de façon fiable et l\'échoguidage devient illusoire — passer au scanner ou à la fluoroscopie), articulation ankylosée (spondyloarthrite évoluée : l\'espace n\'existe plus, l\'infiltration est impossible et inutile), matériel d\'arthrodèse sacro-iliaque.',
    '**Hémostase** : geste superficiel sur site compressible, à distance du névraxe — **risque faible** dans la stratification ASRA-ESRA 2018 pour l\'infiltration articulaire ; le classement des blocs des branches latérales et de la radiofréquence sacrée n\'est pas individualisé dans le texte (*à confirmer*). En pratique : pas d\'arrêt des antiagrégants, anticoagulants discutés.',
    'Corticoïde : diabète déséquilibré, infection évolutive, corticothérapie récente sur le même site (espacer de 3 mois, maximum 3 infiltrations par an et par articulation).',
  ],
  alternatives: 'La **fluoroscopie et le scanner restent les références** pour l\'infiltration intra-articulaire : ils confirment la position par le contraste (arthrogramme), ce que l\'échographie ne fait pas. L\'échographie se justifie pour éviter les rayons, pour voir les parties molles (kyste, épanchement, ligament sacro-iliaque long dorsal, tendinopathie de l\'insertion du grand fessier) et pour un plateau technique sans arceau. Autres options selon le phénotype : infiltration **péri-articulaire** ou du ligament sacro-iliaque long dorsal (plus facile, effet réel sur la composante ligamentaire), bloc et radiofréquence des branches latérales, prolothérapie (données faibles), arthrodèse sacro-iliaque mini-invasive en dernier recours après tests positifs répétés. Chez le patient dont l\'articulation est ankylosée ou la fente inaccessible, l\'infiltration péri-articulaire échoguidée est un compromis honnête — à condition de le dire au patient.',

  anatomie: `L\'articulation sacro-iliaque est une articulation **mixte** : sa moitié postéro-supérieure est **syndesmotique** (ligaments interosseux et sacro-iliaques postérieurs, épais et puissants — il n\'y a pas d\'espace articulaire à y chercher), et seule sa portion **antéro-inférieure** est **synoviale**, avec une capsule et un espace virtuel de 1 à 2,5 mL de capacité. En pratique, **le seul accès postérieur possible est le tiers caudal**, où la fente articulaire s\'ouvre en arrière : c\'est la fenêtre de tous les gestes intra-articulaires, quelle que soit la modalité de guidage.

Le repère cutané est la ligne entre l\'**épine iliaque postéro-supérieure (EIPS)** et le **hiatus sacré** : le pôle caudal de l\'articulation se situe à l\'union du tiers moyen et du tiers inférieur de cette ligne, en général 1 à 2 cm au-dessus du pôle caudal osseux de l\'articulation.

L\'**innervation postérieure** provient des **branches latérales des rameaux dorsaux de S1, S2 et S3** (avec une contribution inconstante du rameau dorsal de L5 et de S4). Elles émergent des **foramens sacrés postérieurs** et cheminent en éventail, en dehors et en bas, dans le plan situé entre le périoste sacré et le ligament sacro-iliaque postérieur, pour rejoindre la face postérieure de l\'articulation. L\'innervation **antérieure**, issue des rameaux ventraux L4-S2, est débattue et de toute façon inaccessible : c\'est une limite structurelle de toute dénervation sacro-iliaque.

### Ce qui compte pour le geste
- **On ne peut pas infiltrer une articulation sacro-iliaque « au milieu »** : plus on remonte vers l\'EIPS, plus l\'articulation est ligamentaire et l\'aiguille bute sur de l\'os. Le geste commence toujours par identifier le pôle caudal.
- **L\'orientation de la fente** est oblique, ouverte en arrière et en dedans : l\'aiguille doit l\'aborder **de dedans en dehors**, dans son axe, sinon elle glisse sur le bord osseux du sacrum ou de l\'ilium.
- **Profondeur** : 3–5 cm chez le sujet mince, 6–8 cm au-delà. La masse du grand fessier est le principal obstacle.
- **Les branches latérales ne sont jamais visibles.** Le geste est un dépôt en arc, entre le bord **latéral** de chaque foramen sacré postérieur et la ligne articulaire, dans le plan sous-ligamentaire — c\'est un bloc de plan, pas un bloc nerveux ciblé.
- **La variabilité anatomique des branches latérales est majeure** (nombre, niveau d\'émergence, trajet) : c\'est la raison pour laquelle les techniques modernes de radiofréquence utilisent des lésions **en bande** (RF refroidie ou bipolaire « en palissade ») plutôt que des lésions ponctuelles.
- Le **ligament sacro-iliaque long dorsal**, tendu entre l\'EIPS et le bord latéral du sacrum, est directement palpable et échographiquement visible : sa sensibilité élective est un signe clinique utile et il constitue une cible d\'infiltration à part entière.`,

  installation: {
    patient: `**Procubitus**, coussin ferme sous l\'abdomen (délordose), pieds en légère rotation interne (ouvre le bassin et découvre le pôle caudal). Bras le long du corps ou au-dessus de la tête.

Repérer et marquer à la palpation l\'**EIPS** et le **hiatus sacré** avant la désinfection, puis tracer la ligne qui les joint : elle donne l\'axe du balayage et le point d\'entrée approximatif. Chez le patient obèse, ce marquage palpatoire est souvent la seule information fiable pour démarrer.`,
    operateur: `Opérateur du côté à traiter, écran de l\'autre côté du patient. Sonde **transversale**, appui ferme (on gagne 1–2 cm sur le grand fessier). La ponction se fait **de médial en latéral**, l\'aiguille entrant 2–3 cm en dedans du bord médial de la sonde et abordant la fente dans son axe oblique. Un abord latéro-médial ferait buter l\'aiguille sur le bord postérieur de l\'ilium.

Pour les branches latérales, la sonde reste transversale sur le sacrum et l\'on travaille foramen par foramen, de S1 vers S3, en marquant chaque niveau.`,
    sonde: `- **Convexe 2–5 MHz**, preset MSK, profondeur 6–9 cm, une seule focale sur la fente, gain remonté pour distinguer la fente hypoéchogène des deux corticales.
- **Linéaire 6–13 MHz** chez le sujet mince : bien meilleure définition de la fente et du ligament long dorsal.
- **Doppler couleur pendant l\'injection** : le passage intra-articulaire donne un signal de flux qui reste confiné entre les deux corticales, sans reflux dans le muscle — c\'est le meilleur substitut échographique à l\'arthrogramme, sans en avoir la valeur.
- Aiguille écho-visible utile : l\'angle de ponction est raide et le trajet long.`,
  },

  reperage: [
    { titre: 'Partir du sacrum en transversal', texte: 'Sonde **transversale sur la ligne médiane** au niveau de S2, puis translation latérale : on suit la crête sacrée médiane, puis la face postérieure du sacrum, jusqu\'à voir apparaître un deuxième relief osseux plus latéral et plus **superficiel** — l\'ilium.' },
    { titre: 'Identifier l\'EIPS', texte: 'Remonter jusqu\'au niveau où l\'ilium est le plus saillant et le plus superficiel : c\'est l\'**EIPS**. À ce niveau, l\'espace entre sacrum et ilium n\'est **pas** une fente ouverte mais un massif ligamentaire hyperéchogène (ligaments sacro-iliaques postérieurs). Ne pas y ponctionner : c\'est le piège classique.' },
    { titre: 'Glisser en caudal vers le pôle inférieur', texte: 'Translater la sonde de **2 à 3 cm en caudal**, vers le hiatus sacré. L\'écart entre les deux corticales s\'ouvre progressivement : la **fente articulaire** apparaît comme une interruption hypoéchogène oblique entre le bord postéro-latéral du sacrum et le bord médial de l\'ilium. C\'est la seule vue exploitable.' },
    { titre: 'Optimiser l\'axe de la fente', texte: 'Petits mouvements de bascule et de rotation de la sonde jusqu\'à obtenir la fente la plus **profonde et la plus nette** possible, et à en visualiser l\'axe oblique. Mesurer la profondeur peau-fente avant de ponctionner. Repérer au Doppler l\'absence de vaisseau sur le trajet.' },
    { titre: 'Repérer les foramens sacrés postérieurs (branches latérales)', texte: 'Sonde transversale sur le sacrum, translation en caudal depuis la crête sacrée : les **foramens sacrés postérieurs** apparaissent comme des dépressions ou des interruptions arrondies de la ligne osseuse, à 1,5–2 cm en dehors de la ligne médiane. En coupe **para-sagittale**, ils se succèdent en creux réguliers (S1, S2, S3) : c\'est la vue la plus lisible pour compter les niveaux et marquer les cibles.' },
    { titre: 'Si la fente ne s\'ouvre pas', texte: 'Trois causes : sonde encore trop crâniale (rester patient, descendre par pas de 5 mm) ; articulation ankylosée (spondyloarthrite évoluée — le geste intra-articulaire n\'a alors plus d\'objet) ; morphotype. **Ne pas forcer** : basculer sur une infiltration péri-articulaire et du ligament long dorsal, ou reprogrammer le geste sous scanner. Injecter « à peu près » dans un massif ligamentaire n\'est ni un geste intra-articulaire ni un test valable.' },
  ],

  sonoanatomie: [
    { structure: 'Grand fessier', aspect: 'Épaisse couche musculaire striée, hypoéchogène', repere: 'Seule structure entre la peau et l\'os ; son épaisseur conditionne la faisabilité' },
    { structure: 'Sacrum (face postérieure)', aspect: 'Ligne hyperéchogène relativement plate, avec cône d\'ombre', repere: 'Structure **médiale** de la vue transversale' },
    { structure: 'Ilium / EIPS', aspect: 'Relief hyperéchogène **plus superficiel** et plus convexe que le sacrum', repere: 'Structure **latérale** ; sa saillie maximale marque l\'EIPS' },
    { structure: 'Fente sacro-iliaque (tiers caudal)', aspect: 'Interruption hypoéchogène oblique entre les deux corticales, 2–4 mm de large', repere: 'Cible du geste intra-articulaire ; n\'existe qu\'au tiers caudal' },
    { structure: 'Ligaments sacro-iliaques postérieurs', aspect: 'Massif hyperéchogène fibrillaire comblant l\'espace au niveau de l\'EIPS', repere: 'Signe qu\'on est **trop crânial** pour un geste intra-articulaire' },
    { structure: 'Ligament sacro-iliaque long dorsal', aspect: 'Bande fibrillaire tendue de l\'EIPS au bord latéral du sacrum', repere: 'Cible d\'infiltration à part entière ; sensibilité élective à la palpation' },
    { structure: 'Foramens sacrés postérieurs S1–S3', aspect: 'Dépressions ou interruptions arrondies régulières de la ligne osseuse sacrée', repere: '1,5–2 cm en dehors de la ligne médiane ; repères des branches latérales' },
    { structure: 'Branches latérales sacrées', aspect: '**Jamais visibles**', repere: 'Cible = plan sous-ligamentaire entre bord latéral du foramen et ligne articulaire' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Time-out : côté et geste (intra-articulaire ou branches latérales — ce ne sont pas les mêmes seringues ni le même objectif). Désinfection large de toute la région fessière et sacrée, housse de sonde stérile. Seringue de 5 mL pour l\'intra-articulaire, seringues de 2 mL pour les branches latérales.' },
    { titre: 'Anesthésie cutanée', texte: '1 mL de lidocaïne 1 % au point d\'entrée, 2–3 cm en dedans du bord médial de la sonde. Le trajet à travers le grand fessier est douloureux : prévenir.' },
    { titre: 'Ponction in-plane, de médial en latéral (intra-articulaire)', texte: 'Aiguille 22 G 80–90 mm engagée à 40–60°, visualisée en continu, dirigée **dans l\'axe de la fente**. Traverser le grand fessier puis les fibres du ligament sacro-iliaque postérieur — on sent un ressaut au franchissement. Si l\'aiguille bute sur le bord osseux du sacrum ou de l\'ilium, **ne pas forcer** : la retirer de 5 mm et corriger l\'angulation de quelques degrés.' },
    { titre: 'Test d\'injection et contrôle Doppler', texte: 'Aspiration, puis injecter **0,5 mL sous Doppler couleur**. Le signe recherché est un **flux confiné entre les deux corticales**, s\'étendant en profondeur et en crânial le long de la fente, **sans nappe dans le muscle ni reflux le long de l\'aiguille**. Un reflux musculaire signe une position péri-articulaire : soit on corrige, soit on assume et on requalifie le geste (et on le note comme tel).' },
    { titre: 'Injection et critère de fin', texte: 'Injecter **2 à 3 mL au total** lentement. La capacité articulaire étant de 1 à 2,5 mL, une **résistance croissante après 1,5–2 mL est normale** ; une résistance d\'emblée franche signe une position extra-articulaire. Critère de fin : injectat confiné dans la fente et résistance de fin de capacité. Ne jamais forcer au-delà — la rupture capsulaire diffuse vers le plexus lombo-sacré et fausse le test.' },
    { titre: 'Blocs des branches latérales S1–S3', texte: 'Sonde transversale sur le sacrum, foramen par foramen. Aiguille 22 G in-plane, cible : le plan **sous-ligamentaire au contact du périoste sacré, immédiatement en dehors du bord latéral du foramen**, à distance du foramen lui-même (ne jamais y pénétrer). Aspiration, puis **1 à 1,5 mL par site**, en cherchant une nappe qui s\'étale en arc du foramen vers la ligne articulaire. Répéter à S1, S2 et S3, et ajouter le rameau dorsal de L5 (gouttière aile du sacrum / PAS de S1) si l\'on veut couvrir toute l\'innervation postérieure.' },
    { titre: 'Après le geste', texte: 'Surveillance 20–30 min avec **test de la marche systématique** (une diffusion vers le plexus sacré ou le nerf sciatique donne une faiblesse transitoire du membre inférieur). EN avant / à 30 min notée. Carnet de douleur sur 8 h si le geste est diagnostique. Consignes : pas de conduite le jour même, reprise progressive, pas de sport d\'impact 48 h.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique intra-articulaire | Lidocaïne 2 % **seule** | 1–1,5 mL | Petit volume : au-delà, la diffusion péri-articulaire et vers le plexus sacré fait chuter la spécificité. Seuil de positivité usuel ≥ 75 % de soulagement |
| Infiltration thérapeutique intra-articulaire | AL (lidocaïne 1 % ou ropivacaïne 0,2 %) + **corticoïde** : bétaméthasone 5,7 mg (Diprostène® 1 mL), méthylprednisolone 40 mg (Dépo-Médrol®), ou triamcinolone hexacétonide 20 mg (Hexatrione®) | **2–3 mL au total** | **Corticoïde particulaire acceptable et même préférable** : site articulaire, sans artère terminale ni risque médullaire. L\'Hexatrione® est réservée à l\'intra-articulaire strict : ne l\'utiliser que si la position articulaire est certaine |
| Bloc des branches latérales S1–S3 (diagnostique) | Lidocaïne 2 % ou bupivacaïne 0,5 % | **1–1,5 mL par site**, 3 à 4 sites | Sans corticoïde. Le volume ne doit pas fuser vers le foramen (bloc radiculaire = faux positif) |
| Bloc des branches latérales (thérapeutique) | AL + dexaméthasone 4 mg ou méthylprednisolone 20–40 mg répartis | 1–1,5 mL par site | Ici, **non particulaire** : la proximité des foramens sacrés impose la prudence |
| Ligament sacro-iliaque long dorsal | AL + corticoïde, ou dextrose 5 % (prolothérapie) | 2–3 mL | Cible péri-articulaire assumée, utile quand la fente est inaccessible |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), bupivacaïne 2–2,5 mg/kg, ropivacaïne 3 mg/kg. Un bloc bilatéral de branches latérales sur 3 niveaux = 6 à 9 mL : rester attentif chez le sujet âgé ou de faible poids, et fractionner.

**Rythme** : maximum **3 infiltrations de corticoïde par an et par articulation**, espacées d\'au moins 3 mois. Au-delà, la question n\'est plus le produit mais la stratégie (radiofréquence, avis chirurgical, réévaluation du diagnostic).`,

  variantes: [
    { titre: 'Infiltration péri-articulaire assumée', texte: `Quand la fente ne s\'ouvre pas — morphotype, ankylose, anatomie défavorable —, le dépôt **dans le plan ligamentaire postérieur, au contact du bord latéral du sacrum et de la ligne articulaire**, reste utile : il traite la composante ligamentaire, qui participe largement au tableau clinique.

Ce n\'est **pas** un geste intra-articulaire et cela doit être écrit comme tel dans le compte rendu : un soulagement obtenu par cette voie ne valide pas le diagnostic d\'arthropathie sacro-iliaque et n\'autorise pas à conclure pour une éventuelle indication chirurgicale. Le corticoïde doit y être **non particulaire** (on est hors articulation).` },
    { titre: 'Radiofréquence des branches latérales sacrées', texte: `L\'objectif est de dénerver la face **postérieure** de l\'articulation. Deux difficultés : les branches latérales sont **inconstantes en nombre et en trajet**, et l\'innervation antérieure reste inaccessible. D\'où les techniques modernes, qui ne cherchent pas une cible ponctuelle mais une **barrière de lésions** entre le foramen et l\'articulation :

- **Radiofréquence refroidie** (canule 17–18 G, lésions sphériques de grand diamètre) : 3 lésions posées en arc, en dehors des foramens S1, S2 et S3, plus une lésion sur le rameau dorsal de L5. C\'est la technique la mieux étayée par des essais contrôlés.
- **Radiofréquence bipolaire « en palissade »** : lésions bipolaires entre canules successives, formant une bande continue.
- Paramètres usuels de RF thermique : **80 °C, 90 s** pour la RF conventionnelle ; **60 °C, 150 s** pour la RF refroidie (*paramètres constructeur — à confirmer selon le générateur utilisé*).

**Place de l\'échoguidage** : il permet de repérer et de marquer les foramens et de mesurer les profondeurs, mais il **ne contrôle pas l\'orientation des canules** ni ne remplace la vérification radioscopique de leur position par rapport au foramen — dont la pénétration accidentelle exposerait à une lésion radiculaire sacrée. **Faire le repérage en échographie et la pose sous arceau** est ici la stratégie raisonnable.` },
    { titre: 'Rameau dorsal de L5', texte: 'Il contribue à l\'innervation postérieure de l\'articulation chez une majorité de sujets. Cible : la gouttière entre l\'**aile du sacrum** et le processus articulaire supérieur de **S1** (voir la fiche des branches médiales lombaires). À inclure systématiquement dans un bloc test ou une dénervation sacro-iliaque complète — l\'oublier est une cause classique d\'échec.' },
    { titre: 'Ponction diagnostique et aspiration', texte: 'Devant une suspicion de sacro-iliite infectieuse (fièvre, syndrome inflammatoire, douleur nocturne inflammatoire, immunodépression), l\'échoguidage permet une ponction-aspiration à visée bactériologique **avant** tout corticoïde. Une articulation sacro-iliaque douloureuse et fébrile n\'est pas une indication d\'infiltration.' },
  ],

  pearls: [
    'Le geste commence par le pôle caudal : partir de l\'EIPS et **descendre**, jamais l\'inverse. Au niveau de l\'EIPS, il n\'y a pas d\'articulation à ponctionner.',
    'Ponctionner **de dedans en dehors**, dans l\'axe oblique de la fente : c\'est le seul angle qui permet d\'y entrer.',
    'Le Doppler pendant l\'injection est le meilleur substitut échographique à l\'arthrogramme : un flux confiné entre les corticales, sans reflux musculaire.',
    'La résistance croissante après 1,5–2 mL est le signe d\'une position intra-articulaire — c\'est une information, pas un obstacle à contourner.',
    'Toujours faire au moins trois tests de provocation de Laslett avant de poser l\'indication : la sélection clinique fait plus pour le résultat que la technique de guidage.',
    'Ne pas oublier le rameau dorsal de L5 dans un bloc test ou une dénervation.',
    'Si la fente ne s\'ouvre pas, requalifier honnêtement le geste en péri-articulaire et l\'écrire dans le compte rendu.',
  ],
  pieges: [
    'Injecter dans le massif ligamentaire au niveau de l\'EIPS en croyant être intra-articulaire : c\'est l\'erreur la plus fréquente, et elle produit un test ininterprétable.',
    'Forcer l\'injection au-delà de la capacité articulaire : rupture capsulaire, diffusion vers le plexus lombo-sacré, faux positif et faiblesse du membre inférieur.',
    'Utiliser un corticoïde **particulaire** — a fortiori l\'hexacétonide de triamcinolone — sans certitude de la position intra-articulaire.',
    'Faire pénétrer l\'aiguille dans un foramen sacré lors d\'un bloc de branches latérales : bloc radiculaire, faux positif, et risque de lésion nerveuse.',
    'Conclure d\'un bloc intra-articulaire négatif que l\'articulation n\'est pas en cause : la composante ligamentaire postérieure peut être seule responsable, et elle se teste par le bloc des branches latérales.',
    'Retenir un diagnostic de douleur sacro-iliaque sans avoir écarté une coxopathie et une radiculalgie S1.',
    'Chez le patient obèse, s\'obstiner en échographie : la fiabilité s\'effondre et le test perd toute valeur.',
  ],
  complications: [
    'Diffusion vers le **plexus lombo-sacré ou le nerf sciatique** (rupture capsulaire, excès de volume) : faiblesse et hypoesthésie transitoires du membre inférieur, quelques heures. **Test de la marche obligatoire avant la sortie.**',
    'Ponction radiculaire sacrée lors d\'un bloc des branches latérales, si l\'aiguille entre dans un foramen : douleur fulgurante en éclair → arrêt immédiat, retrait, pas d\'injection.',
    'Arthrite septique : exceptionnelle, gravissime — asepsie chirurgicale, jamais de corticoïde sur un tableau infectieux non écarté.',
    'Hématome fessier : rare, sans conséquence.',
    'Douleur post-geste pendant 24–72 h (poussée congestive après corticoïde particulaire) : fréquente, à annoncer systématiquement, cède aux AINS et à la glace.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h chez le diabétique, flush, insomnie, saignement chez la femme réglée.',
    'Névrite post-radiofréquence, hypoesthésie fessière ou dysesthésies pendant quelques semaines : à annoncer avant toute dénervation.',
  ],
  securite: [
    'Doppler couleur sur le trajet **avant** la ponction et **pendant** l\'injection : c\'est le seul contrôle disponible en échographie, il ne vaut pas un arthrogramme.',
    'Volume limité et injection lente : la capacité articulaire est de 1 à 2,5 mL, pas plus.',
    'Corticoïde **particulaire** réservé à l\'intra-articulaire certain ; **non particulaire** pour tout dépôt péri-articulaire ou péri-foraminal.',
    'Ne jamais engager l\'aiguille dans un foramen sacré ; contact périosté maintenu en dehors du bord latéral du foramen.',
    'Risque hémorragique faible (site compressible, à distance du névraxe) : pas d\'arrêt des antiagrégants ; anticoagulants au cas par cas. *Le classement précis des blocs de branches latérales sacrées et de la RF sacrée dans ASRA-ESRA 2018 est à confirmer.*',
    'Surveillance 20–30 min avec test de la marche et évaluation de la force du membre inférieur avant la sortie.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, reproduction des tests de provocation de Laslett après le bloc (leur négativation est un argument fort), test de la marche. Si le geste est diagnostique : **carnet horaire de douleur sur 8 h**.
- **Interprétation du bloc diagnostique** : positif si soulagement **≥ 75 %** pendant la durée attendue de l\'AL (seuil usuel ; certains retiennent ≥ 50 %, au prix de plus de faux positifs). Un bloc intra-articulaire négatif n\'exclut pas la composante ligamentaire postérieure : envisager alors un bloc des branches latérales.
- **J15–J30** : EN, Oswestry ou score fonctionnel, périmètre de marche, sommeil. Décision : répéter l\'infiltration (maximum 3 par an), passer au bloc des branches latérales puis à la radiofréquence, ou réorienter.
- **Après radiofréquence** : évaluation à 6 semaines, 3 mois et 6 mois. Durée d\'effet attendue de l\'ordre de 6 à 12 mois, répétable. Une reprise progressive de la douleur à 9–12 mois correspond à la repousse des branches et n\'est pas un échec.
- **Toujours associer** un travail de stabilisation lombo-pelvienne et un réentraînement : l\'articulation sacro-iliaque douloureuse est une pathologie de contrainte, et l\'infiltration seule ne change pas les contraintes.
- Tracer : niveau d\'accès (intra-articulaire vs péri-articulaire — **le distinguer explicitement**), volume, produit, seuil de positivité retenu, résultat des tests de provocation avant et après.`,

  evidence: `- **Faisabilité échographique (Pekkafahli et coll., 2003 ; Klauser et coll., 2008)** : les deux travaux fondateurs établissent la faisabilité de l\'infiltration sacro-iliaque échoguidée en définissant les repères sono-anatomiques et le niveau d\'abord. La précision intra-articulaire rapportée s\'améliore nettement avec l\'expérience de l\'opérateur — c\'est un geste à **courbe d\'apprentissage marquée**, ce qui explique la dispersion des chiffres (de l\'ordre de **60 à 90 %** selon les séries).
- **Écho vs fluoroscopie** : les comparaisons publiées (essais randomisés de petite taille et séries comparatives, notamment autour de 2014–2016) retrouvent des **résultats cliniques comparables**, avec une précision de positionnement inférieure en échographie. Interprétation raisonnable : l\'échoguidage est acceptable pour un geste thérapeutique, discutable pour un **bloc diagnostique de sélection** avant chirurgie, où la certitude intra-articulaire compte.
- **Infiltration intra-articulaire de corticoïde** : le meilleur niveau de preuve concerne la **sacro-iliite des spondyloarthrites** (essai contrôlé français en double aveugle de Maugars et coll., années 1990, favorable). Dans la douleur sacro-iliaque mécanique non inflammatoire, les essais sont **peu nombreux, de petite taille, et l\'effet est de courte durée** (quelques semaines à quelques mois). Preuve **modérée à faible**.
- **Radiofréquence des branches latérales** : c\'est ici que le niveau de preuve est le meilleur de la fiche. Plusieurs **essais randomisés contrôlés contre placebo** (dont ceux de l\'équipe de Cohen avec la RF conventionnelle, et de Patel et coll. avec la RF refroidie) montrent un bénéfice sur la douleur et la fonction à 3 et 6 mois chez des patients sélectionnés par blocs positifs. Preuve **modérée**. Limite constante : l\'innervation antérieure n\'est pas atteinte, ce qui borne le taux de succès.
- **Sélection clinique** : la batterie de tests de provocation de Laslett (≥ 3 tests positifs sur 5) est le meilleur outil clinique disponible ; aucun test isolé n\'est suffisant. C\'est la **qualité de la sélection**, plus que la modalité de guidage, qui détermine le résultat.
- **Les trous de la littérature** : (1) aucun essai comparant la **radiofréquence échoguidée** à la radiofréquence sous arceau sur des critères cliniques ; (2) pas de consensus sur le seuil de positivité du bloc diagnostique (50 % vs 75 % vs 80 %) ni sur le recours à un bloc unique ou à des blocs comparatifs ; (3) données très limitées sur l\'efficacité au-delà de 6 mois. Toute promesse de durabilité relève de l\'extrapolation.`,

  references: [
    { auteurs: 'Klauser A, De Zordo T, Feuchtner G, et al.', titre: 'Feasibility of ultrasound-guided sacroiliac joint injection considering sonoanatomic landmarks at two different levels in cadavers and patients', revue: 'Arthritis and Rheumatism', annee: '2008', type: 'faisabilité', verif: false },
    { auteurs: 'Pekkafahli MZ, Kiralp MZ, Başekim CC, et al.', titre: 'Sacroiliac joint injections performed with sonographic guidance', revue: 'Journal of Ultrasound in Medicine', annee: '2003', type: 'faisabilité', note: 'Première description ; précision fortement liée à l\'expérience de l\'opérateur.', verif: false },
    { auteurs: 'Laslett M, Aprill CN, McDonald B, Young SB', titre: 'Diagnosis of sacroiliac joint pain: validity of individual provocation tests and composites of tests', revue: 'Manual Therapy', annee: '2005', type: 'diagnostic', note: 'La batterie de référence (≥ 3 tests positifs sur 5).', verif: false },
    { auteurs: 'Maugars Y, Mathis C, Berthelot JM, Charlier C, Prost A', titre: 'Assessment of the efficacy of sacroiliac corticosteroid injections in spondylarthropathies: a double-blind study', revue: 'British Journal of Rheumatology', annee: '1996', type: 'ECR', note: 'Équipe française ; meilleure preuve dans la sacro-iliite inflammatoire.', verif: false },
    { auteurs: 'Cohen SP, Hurley RW, Buckenmaier CC, Kurihara C, Morlando B, Dragovich A', titre: 'Randomized placebo-controlled study evaluating lateral branch radiofrequency denervation for sacroiliac joint pain', revue: 'Anesthesiology', annee: '2008', type: 'ECR', verif: false },
    { auteurs: 'Patel N, Gross A, Brown L, Gekht G', titre: 'A randomized, placebo-controlled study to assess the efficacy of lateral branch neurotomy for chronic sacroiliac joint pain', revue: 'Pain Medicine', annee: '2012', type: 'ECR', note: 'Radiofréquence refroidie.', verif: false },
    { auteurs: 'Finlayson RJ, Etheridge JP, Elgueta MF, et al.', titre: 'A randomized comparison between ultrasound- and fluoroscopy-guided sacral lateral branch blocks', revue: 'Regional Anesthesia and Pain Medicine', annee: '2016', type: 'ECR', note: 'Technique de référence du bloc échoguidé des branches latérales. *Année à confirmer.*', verif: false },
    { auteurs: 'Jee H, Lee JH, Park KD, Ahn J, Park Y', titre: 'Ultrasound-guided versus fluoroscopy-guided sacroiliac joint intra-articular injections in the noninflammatory sacroiliac joint dysfunction: a prospective, randomized, single-blinded study', revue: 'Archives of Physical Medicine and Rehabilitation', annee: '2014', type: 'ECR', verif: false },
    { auteurs: 'Soneji N, Bhatia A, Seib R, Tumber P, Dissanayake M, Peng PWH', titre: 'Comparison of fluoroscopy and ultrasound guidance for sacroiliac joint injection in patients with chronic low back pain', revue: 'Pain Practice', annee: '2016', type: 'étude comparative', verif: false },
    { auteurs: 'Cohen SP, Chen Y, Neufeld NJ', titre: 'Sacroiliac joint pain: a comprehensive review of epidemiology, diagnosis and treatment', revue: 'Expert Review of Neurotherapeutics', annee: '2013', type: 'revue', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'si-eips', section: 'sonoanatomie', titre: 'Coupe transversale au niveau de l\'EIPS — le piège du massif ligamentaire',
      legende: 'À hauteur de l\'épine iliaque postéro-supérieure, l\'espace entre le sacrum (médial, plus profond) et l\'ilium (latéral, plus superficiel) n\'est pas une fente articulaire mais un massif ligamentaire hyperéchogène. Y injecter, c\'est faire un geste péri-articulaire en croyant faire un geste intra-articulaire. Il faut glisser de 2 à 3 cm en caudal.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial (ligne médiane)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, niveau EIPS', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M0 78 L640 78 L640 214 L0 226 Z', label: 'Grand fessier', at: [110, 148], opacity: 0.5 });
        S.fascia({ points: [[0, 226], [300, 218], [640, 208]], width: 1.4, opacity: 0.6 });
        S.bone({ path: 'M12 258 Q56 220 100 256 Q190 244 288 250', label: 'Sacrum', at: [146, 300], small: true });
        S.bone({ path: 'M336 254 Q408 212 508 222 L634 234', label: 'Ilium — EIPS', at: [498, 276], small: true });
        S.ligament({ path: 'M288 248 L336 252 L332 292 L284 286 Z' });
        S.label({ x: 310, y: 332, text: 'Ligaments sacro-iliaques\npostérieurs (pas de fente ici)', cls: 'lbl-lig', small: true });
        S.label({ x: 396, y: 160, text: 'Glisser 2–3 cm en caudal\n→ la fente s\'ouvre', anchor: 'start', small: true });
      },
    },
    {
      id: 'si-intra', section: 'technique', titre: 'Tiers caudal — aiguille in-plane médio-latérale dans la fente articulaire',
      legende: 'Deux à trois centimètres plus bas, la fente s\'ouvre entre le bord postéro-latéral du sacrum et le bord médial de l\'ilium. L\'aiguille l\'aborde de dedans en dehors, dans son axe oblique. Critère de fin : l\'injectat reste confiné entre les deux corticales, avec une résistance croissante après 1,5–2 mL, et sans reflux dans le muscle.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, tiers caudal', type: 'in-plane médio-latéral' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M0 78 L640 78 L640 220 L0 232 Z', label: 'Grand fessier', at: [116, 156], opacity: 0.5 });
        S.bone({ path: 'M12 262 Q60 226 104 260 Q200 250 300 262', label: 'Sacrum', at: [150, 306], small: true });
        S.bone({ path: 'M348 250 Q430 222 520 230 L634 240', label: 'Ilium', at: [546, 278], small: true });
        S.region({ path: 'M300 258 L348 246 L364 344 L316 350 Z', fill: '#05080b', opacity: 0.92 });
        S.label({ x: 452, y: 336, text: 'Fente articulaire', anchor: 'start', cls: 'lbl-fluid', small: true, lead: [356, 320] });
        S.target({ x: 328, y: 272, r: 14 });
        S.needle({ from: [8, 108], to: [322, 268], label: '22 G 90 mm' });
        S.spread({ x: 334, y: 300, rx: 17, ry: 40, label: '2–3 mL' });
      },
    },
    {
      id: 'si-foramens', section: 'technique', titre: 'Foramens sacrés postérieurs — blocs des branches latérales S1–S3',
      legende: 'En coupe para-sagittale sur le sacrum, les foramens postérieurs se succèdent en creux réguliers. Les branches latérales ne sont jamais visibles : le dépôt se fait au contact du périoste, en arc, immédiatement en dehors du bord latéral de chaque foramen, jamais dans le foramen. Ajouter le rameau dorsal de L5 pour couvrir toute l\'innervation postérieure.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Para-sagittal sur le sacrum', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 76 L640 244 L0 244 Z', label: 'Grand fessier', at: [110, 140], opacity: 0.5 });
        S.bone({ path: 'M18 252 L120 252 Q160 300 200 252 L300 252 Q340 298 380 252 L480 252 Q518 296 556 252 L624 254' });
        S.label({ x: 160, y: 330, text: 'Foramen S1', cls: 'lbl-bone', small: true });
        S.label({ x: 340, y: 330, text: 'Foramen S2', cls: 'lbl-bone', small: true });
        S.label({ x: 518, y: 328, text: 'Foramen S3', cls: 'lbl-bone', small: true });
        S.target({ x: 206, y: 262, r: 12 });
        S.target({ x: 386, y: 262, r: 12 });
        S.needle({ from: [8, 100], to: [200, 256], label: '22 G 90 mm' });
        S.spread({ x: 212, y: 262, rx: 32, ry: 12, label: '1–1,5 mL' });
        S.spread({ x: 392, y: 262, rx: 32, ry: 12, label: '1–1,5 mL' });
        S.label({ x: 300, y: 200, text: 'Dépôt en arc, en dehors du bord latéral\ndu foramen — jamais dans le foramen', small: true });
      },
    },
  ],

  checklist: [
    'Au moins 3 tests de provocation de Laslett positifs sur 5, coxopathie et radiculalgie S1 écartées',
    'EIPS et hiatus sacré palpés et marqués avant désinfection ; pôle caudal identifié en échographie',
    'Sacro-iliite infectieuse écartée avant tout corticoïde (fièvre, syndrome inflammatoire, immunodépression)',
    'Nature du geste tranchée et notée : intra-articulaire vs péri-articulaire vs branches latérales',
    'Corticoïde particulaire réservé à l\'intra-articulaire certain ; non particulaire ailleurs',
    'Volume plafonné à 2–3 mL en intra-articulaire ; injection interrompue si résistance d\'emblée franche',
    'Test de la marche et évaluation de la force du membre inférieur avant la sortie',
    'Carnet horaire de douleur sur 8 h remis si le geste est diagnostique',
  ],
});
