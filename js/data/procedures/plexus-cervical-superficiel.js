/* Fiche : plexus cervical superficiel et intermédiaire — bloc échoguidé. */
ECHO.register({
  id: 'plexus-cervical-superficiel',
  titre: 'Plexus cervical superficiel et intermédiaire — bloc échoguidé',
  titreCourt: 'Plexus cervical superficiel',
  en: 'Ultrasound-guided superficial and intermediate cervical plexus block — posterior border of sternocleidomastoid (Erb\'s point / punctum nervosum)',
  region: 'tete-cou',
  types: ['bloc'],
  niveau: 1,
  grade: 'Forte en périopératoire (ECR et revues systématiques en chirurgie carotidienne et thyroïdienne) · faible en douleur chronique (extrapolation, séries)',
  motsCles: ['plexus cervical', 'point d\'Erb', 'punctum nervosum', 'grand auriculaire', 'petit occipital', 'transverse du cou', 'supraclaviculaires', 'SCM', 'cervicalgie', 'post-thyroïdectomie', 'endartériectomie carotidienne', 'curage ganglionnaire'],
  maj: '2026-09',
  resume: 'Bloc le plus simple de la région cervicale : on dépose l\'anesthésique local au bord postérieur du sterno-cléido-mastoïdien, à mi-hauteur (point d\'Erb), là où les quatre branches sensitives du plexus cervical émergent en éventail. Deux plans possibles, à ne pas confondre : le bloc **superficiel** (sous-cutané, au-dessus du fascia cervical superficiel) et le bloc **intermédiaire** (sous ce fascia, dans la nappe graisseuse en arrière du SCM, au-dessus du fascia prévertébral) — c\'est ce dernier qui est le vrai bloc échoguidé. Il couvre la peau de l\'angle mandibulaire, de la région rétro-auriculaire, de la face latérale du cou, de la région sus-claviculaire et du moignon de l\'épaule. En algologie, c\'est le geste de première intention devant une douleur neuropathique cicatricielle cervicale ou une névralgie du grand auriculaire, et un excellent bloc test avant PRF ou cryoneurolyse d\'une branche isolée. Niveau 1, mais le nerf accessoire spinal et le nerf phrénique sont dans le voisinage : ce n\'est pas un bloc sans conséquence.',

  flash: {
    position: 'semi-assis', positionNote: 'décubitus dorsal, tête tournée de 30–45° du côté opposé, coussin fin sous l\'épaule homolatérale ; position semi-assise plus confortable et meilleure tolérance vagale',
    sonde: 'lineaire', sondeNote: '10–18 MHz, profondeur 2,5–3,5 cm, focale 1–2 cm, gain modéré ; hockey stick utile sur les cous fins',
    approche: 'in-plane', approcheNote: 'postéro-antérieure (de latéral en médial) le long du bord postérieur du SCM ; voie antéro-postérieure possible mais l\'aiguille pointe alors vers le creux interscalénique',
    aiguille: '25 G 40–50 mm, biseau court, sur prolongateur',
    cible: 'Nappe graisseuse **en arrière du bord postérieur du SCM, sous le fascia cervical superficiel et au-dessus du fascia prévertébral** ; critère de fin : lentille anéchogène qui décolle le SCM du plan des scalènes et s\'étend en éventail sur 3–4 cm',
    injectat: '5–10 mL : ropivacaïne 0,2–0,375 % ± dexaméthasone 2–4 mg (non particulaire)',
    duree: '5–10 min',
  },

  indications: [
    '**Douleur neuropathique cicatricielle cervicale** : séquelles de thyroïdectomie, de parathyroïdectomie, d\'endartériectomie carotidienne, de curage ganglionnaire ou de chirurgie ORL — territoire du nerf transverse du cou et du grand auriculaire. Indication la plus fréquente en HDJ douleur.',
    '**Névralgie du nerf grand auriculaire** (post-traumatique, post-chirurgicale, après lifting ou chirurgie parotidienne) : douleur de l\'angle mandibulaire, du lobule et de la région rétro-auriculaire, souvent étiquetée à tort « ATM » ou « névralgie du trijumeau ».',
    '**Névralgie du nerf petit occipital** : douleur latéro-occipitale rétro-auriculaire, à distinguer du grand occipital (fiche dédiée) — les deux territoires se chevauchent et le bloc sélectif est le seul moyen de trancher.',
    '**Douleur du moignon de l\'épaule et de la région sus-claviculaire** (nerfs supraclaviculaires) : douleur post-fracture ou post-ostéosynthèse de clavicule, douleur référée de la coupole diaphragmatique, douleur post-chirurgie de l\'épaule par voie supérieure. Complément utile d\'un bloc suprascapulaire qui ne couvre pas la « cape » cutanée.',
    '**Cervicalgie latérale** avec composante myofasciale et allodynie cutanée : le bloc a une valeur diagnostique (part cutanée vs part articulaire postérieure) plus que thérapeutique.',
    '**Névrome cicatriciel** d\'une branche superficielle : bloc test avant hydrodissection, cryoneurolyse ou PRF.',
    '**Bloc test avant geste durable** : un bloc franc et reproductible sur une branche identifiée est le prérequis de toute neurolyse thermique ou par le froid.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides.',
    '**Relatives** : hémostase — bloc **superficiel et compressible**, classé à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures interventionnelles de la douleur : pas d\'interruption systématique des antiagrégants, anticoagulants au cas par cas. Attention toutefois à la veine jugulaire externe, superficielle et directement sur le trajet.',
    '**Insuffisance respiratoire, paralysie phrénique ou récurrentielle controlatérale, pneumonectomie controlatérale** : le bloc intermédiaire diffuse vers le nerf phrénique dans une proportion non négligeable de cas, surtout si le volume dépasse 10 mL. **Jamais de bloc bilatéral dans la même séance.**',
    'Trouble de la marche ou de l\'équilibre chez le sujet âgé : un bloc partiel du nerf accessoire spinal donne une faiblesse transitoire du trapèze qui peut déstabiliser.',
    'Corticoïdes : sans intérêt démontré sur ce site ; si employés, **non particulaires** (dexaméthasone), à faible dose.',
  ],
  alternatives: 'Bloc **profond** du plexus cervical (paravertébral, au contact des processus transverses C2-C4) : plus complet mais nettement plus risqué (injection intrathécale ou intra-artérielle vertébrale, bloc phrénique quasi constant, bloc récurrentiel) — la littérature de chirurgie carotidienne a montré que le bloc superficiel ou intermédiaire seul suffit avec beaucoup moins de complications, et le bloc profond n\'a **aucune place en douleur chronique**. Autres options : bloc sélectif d\'une branche isolée sous échographie (grand auriculaire au bord postérieur du SCM ou sur la parotide, petit occipital au bord postérieur du SCM plus haut, supraclaviculaires au-dessus de la clavicule) quand le territoire est bien délimité ; infiltration de névrome ou hydrodissection ; blocs cervicaux postérieurs (grand occipital, troisième nerf occipital, facettes cervicales) si la douleur est postérieure. Ne pas confondre les territoires : le plexus cervical superficiel est **antéro-latéral**, il ne couvre pas la nuque médiane.',

  anatomie: `Le plexus cervical superficiel naît des **rameaux ventraux de C2, C3 et C4**. Ses branches contournent le bord postérieur du **sterno-cléido-mastoïdien** en un point unique, à peu près à **mi-hauteur du muscle** — le **point d\'Erb** ou *punctum nervosum*, décrit en anatomie au niveau **C4** (bord supérieur du cartilage thyroïde). En pratique échoguidée, la sonde est posée un peu plus bas, **au niveau du cartilage cricoïde (C6)**, là où les branches sont déjà individualisées en arrière du bord postérieur du SCM ; remonter de 1–2 cm si elles n\'y sont pas vues. De là, quatre branches partent en éventail :

| Branche | Racines | Territoire |
|---|---|---|
| **Nerf petit occipital** | C2 | Latéro-occipital, rétro-auriculaire, face postérieure du pavillon |
| **Nerf grand auriculaire** | C2-C3 | Angle mandibulaire, lobule, région parotidienne et mastoïdienne |
| **Nerf transverse du cou** | C2-C3 | Face antéro-latérale du cou, du menton au sternum |
| **Nerfs supraclaviculaires** | C3-C4 | Région sus-claviculaire, moignon de l\'épaule, partie haute du thorax (« cape ») |

### Ce qui compte pour le geste
- **Trois plans, trois blocs différents** (nomenclature de Telford et Stoneham) : *superficiel* = sous-cutané, au-dessus du fascia cervical superficiel ; *intermédiaire* = sous ce fascia, dans la nappe graisseuse en arrière du SCM et **au-dessus du fascia prévertébral** ; *profond* = en dedans du fascia prévertébral, au contact des processus transverses. Le geste échoguidé décrit ici est le bloc **intermédiaire** — c\'est lui qui donne un bloc complet et reproductible avec 5–10 mL, là où le bloc purement sous-cutané est plus aléatoire sur les branches profondes.
- **Le fascia prévertébral est la barrière de sécurité** : tant que la pointe reste au-dessus, on ne touche ni le plexus brachial, ni le phrénique, ni les vaisseaux vertébraux. Une pointe qui le franchit fait un bloc interscalénique par accident.
- **Nerf phrénique** : il chemine sur la face antérieure du **scalène antérieur**, sous le fascia prévertébral, à quelques millimètres en profondeur du plan cible. Une diffusion à travers le fascia (volume élevé, fascia perforé par l\'aiguille) explique les blocs phréniques rapportés après bloc « superficiel ».
- **Nerf accessoire spinal (XI)** : il émerge lui aussi au bord postérieur du SCM, **dans le même plan interfascial**, un peu plus haut et plus **postérieur**, pour traverser le triangle postérieur vers le trapèze. Il est **systématiquement exposé** : une faiblesse transitoire du trapèze après le bloc n\'est pas une complication rare, c\'est de l\'anatomie.
- **Veine jugulaire externe** : superficielle, elle croise obliquement la face externe du SCM à ce niveau, souvent pile sur la trajectoire — la voir en mode B (elle s\'écrase à la pression, se remplit à la manœuvre de Valsalva) évite un hématome disgracieux.
- Profondeur du plan cible : **0,5 à 1,5 cm** chez l\'adulte. C\'est un bloc de surface : monter la fréquence, baisser la profondeur, et travailler avec beaucoup de gel.
- Les branches sont visibles **en petit paquet hypoéchogène** juste sous le fascia, au coin postérieur du SCM, dans environ la moitié des cas chez le sujet mince ; l\'échec de visualisation n\'empêche pas le bloc, qui est un bloc **de plan**, pas un bloc de nerf.`,

  installation: {
    patient: `**Semi-assis ou décubitus dorsal**, tête tournée de **30 à 45°** du côté opposé, coussin fin sous l\'épaule homolatérale pour dégager le triangle postérieur. Bras le long du corps, épaule abaissée. Prévenir le patient qu\'une sensation de « cou endormi », un engourdissement du lobe de l\'oreille et parfois une gêne à la déglutition sont attendus.

Repérer et marquer au feutre le **bord postérieur du SCM** et le **cartilage cricoïde** avant la désinfection : demander au patient de relever la tête contre résistance fait saillir le muscle et rend le repère évident, y compris sur les cous épais.`,
    operateur: `Opérateur **du côté à traiter**, à hauteur de l\'épaule, écran en face de lui de l\'autre côté du patient. Sonde transversale sur le bord postérieur du SCM, à hauteur du cricoïde. Ponction **in-plane, de postérieur (latéral) vers antérieur (médial)** : l\'aiguille arrive par l\'arrière, s\'éloigne du creux interscalénique et progresse tangentiellement au plan cible.

La direction inverse (antéro-postérieure) est acceptable mais dirige la pointe vers le plexus brachial : la réserver aux opérateurs qui contrôlent parfaitement la profondeur, et arrêter dès le franchissement du fascia superficiel.`,
    sonde: `- Linéaire **10–18 MHz** (ou hockey stick), preset « small parts »/« nerf », **profondeur 2,5–3,5 cm**, focale à 1–1,5 cm.
- Couche généreuse de gel : le plan cible est à moins d\'1 cm, la zone morte de la sonde peut l\'engloutir. Ne pas comprimer — la nappe graisseuse s\'écrase et disparaît.
- **Doppler couleur** : veine jugulaire externe (superficielle), artère cervicale superficielle / transverse du cou (dans le triangle postérieur), artère carotide et jugulaire interne en dedans.
- Repérer le fascia prévertébral et les racines C5-C6 du creux interscalénique **avant** de piquer : ce sont les structures à ne pas atteindre, il faut savoir où elles sont.`,
  },

  reperage: [
    { titre: 'Coupe transversale sur le SCM', texte: 'Sonde transversale à hauteur du **cartilage cricoïde**, posée sur le corps du SCM. Le muscle apparaît comme une bande musculaire aplatie ; suivre sa face profonde vers l\'arrière jusqu\'à son **bord postérieur effilé** — c\'est le repère central du geste. Faire relever la tête au patient si le bord est incertain.' },
    { titre: 'Identifier les deux fascias', texte: 'En surface du SCM, une fine ligne hyperéchogène : le **fascia cervical superficiel** (couche d\'enveloppement), qui se prolonge en arrière du muscle. En profondeur, sur les scalènes, une seconde ligne : le **fascia prévertébral**. Entre les deux, en arrière du bord postérieur du SCM : la **nappe graisseuse cible**, discrètement hypoéchogène.' },
    { titre: 'Situer le creux interscalénique', texte: 'Glisser en arrière et en profondeur : scalène antérieur et scalène moyen encadrent les **racines C5 et C6** (« feux tricolores », structures rondes hypoéchogènes empilées). Les repérer explicitement — non pour les viser, mais pour savoir que la pointe ne doit jamais aller jusque-là.' },
    { titre: 'Doppler', texte: 'Chercher la **veine jugulaire externe** en surface (elle s\'écrase à la moindre pression : relâcher pour la voir), et les branches artérielles du triangle postérieur. Repositionner le point d\'entrée si un vaisseau est sur la trajectoire.' },
    { titre: 'Chercher les branches (facultatif)', texte: 'Juste sous le fascia superficiel, au coin postérieur du SCM, on distingue souvent 2 à 4 petites structures ovalaires hypoéchogènes de 1–3 mm : les branches du plexus. Le **nerf grand auriculaire** est le plus constant, sur la face superficielle du SCM à sa partie postérieure. Ne pas s\'acharner : le bloc est un bloc de plan.' },
    { titre: 'Si on ne trouve pas', texte: 'Cou épais, muscle mal individualisé : remonter d\'un ou deux centimètres vers la mastoïde, où le SCM est plus épais et son bord postérieur plus net, ou descendre vers la clavicule pour suivre les nerfs supraclaviculaires en sens rétrograde. Autre solution : suivre la **veine jugulaire externe**, qui croise le bord postérieur du SCM à peu près au point d\'Erb.' },
  ],

  sonoanatomie: [
    { structure: 'Sterno-cléido-mastoïdien', aspect: 'Bande musculaire aplatie, striée, s\'effilant en arrière', repere: 'Son **bord postérieur** est le repère du geste' },
    { structure: 'Fascia cervical superficiel', aspect: 'Fine ligne hyperéchogène coiffant le SCM et se prolongeant en arrière', repere: 'La cible est **juste en dessous**' },
    { structure: 'Nappe graisseuse interfasciale', aspect: 'Zone hypoéchogène triangulaire en arrière du bord postérieur du SCM', repere: 'Là où se forme la lentille d\'injectat' },
    { structure: 'Branches du plexus cervical', aspect: '2–4 petites structures ovalaires de 1–3 mm, hypoéchogènes à halo clair', repere: 'Inconstamment visibles ; leur absence n\'empêche pas le bloc' },
    { structure: 'Fascia prévertébral', aspect: 'Ligne hyperéchogène sur les scalènes, plus profonde', repere: '**La barrière à ne pas franchir**' },
    { structure: 'Scalènes antérieur et moyen', aspect: 'Deux masses musculaires encadrant un espace', repere: 'Le nerf phrénique est sur la face antérieure du scalène antérieur' },
    { structure: 'Racines C5-C6', aspect: 'Structures rondes hypoéchogènes empilées entre les scalènes', repere: 'Signal d\'alarme : la pointe est trop profonde' },
    { structure: 'Veine jugulaire externe', aspect: 'Structure anéchogène superficielle, écrasée par la sonde', repere: 'Relâcher la pression pour la voir ; croise le bord postérieur du SCM' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist. Désinfection large de la face latérale du cou. Seringue de 10 mL étiquetée, aiguille 25 G 40–50 mm à biseau court sur prolongateur. Pas besoin de housse de sonde si l\'on travaille avec un gel stérile et un champ adhésif.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 25 G : une papule de lidocaïne 1 % dégrade l\'image d\'un plan situé à moins d\'1 cm. Si le patient est très anxieux, poser un patch anesthésiant 45 min avant.' },
    { titre: 'Ponction in-plane, postéro-antérieure', texte: 'Entrer à 1–1,5 cm du bord latéral de la sonde, angle très plat (10–20°), pointe visible en permanence. Traverser le tissu sous-cutané puis le **fascia cervical superficiel** — on perçoit un ressaut net. La pointe doit s\'arrêter **immédiatement après**, dans la nappe graisseuse en arrière du bord postérieur du SCM. Profondeur habituelle : 0,5 à 1,5 cm.' },
    { titre: 'Hydrolocalisation', texte: 'Aspiration, puis **0,5 à 1 mL** : l\'injectat doit s\'étaler **en lentille sous le fascia**, décollant le SCM du plan profond et s\'étendant en avant et en arrière. Si le liquide reste en amas rond sous-cutané → trop superficiel (avancer de 1–2 mm). Si le SCM se gonfle → intramusculaire (reculer). Si la nappe descend vers les racines → **trop profond, retirer immédiatement**.' },
    { titre: 'Injection fractionnée et critère de fin', texte: 'Injecter **5 à 10 mL** par bolus de 2–3 mL, avec aspiration entre chaque. Critère de fin : lentille anéchogène de 3–4 cm de long, étalée le long du bord postérieur du SCM, **entièrement au-dessus du fascia prévertébral**. Un redéploiement de la pointe de quelques millimètres en avant puis en arrière améliore l\'étalement sans augmenter le volume.' },
    { titre: 'Après le geste', texte: 'Compression douce 1–2 min (veine jugulaire externe). Tester le bloc à 10–15 min : hypoesthésie de l\'angle mandibulaire, du lobule, de la face latérale du cou et de la région sus-claviculaire. **Tester aussi l\'élévation de l\'épaule contre résistance** (trapèze / nerf XI) et interroger sur une gêne respiratoire. EN avant / à 30 min notée. Surveillance 20–30 min, pas de conduite si le patient se sent instable.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique (localisation de la branche douloureuse) | Lidocaïne 1 % ou ropivacaïne 0,2 % | **3–5 mL** | Petit volume délibéré : au-delà, la diffusion couvre tout le plexus et on perd la valeur localisatrice |
| Bloc thérapeutique / analgésie | Ropivacaïne 0,2–0,375 % (ou lévobupivacaïne 0,25 %) | **5–10 mL** | 10 mL est un plafond raisonnable : au-delà, diffusion phrénique et vers le creux interscalénique |
| Douleur neuropathique cicatricielle | Ropivacaïne 0,2 % + dexaméthasone 2–4 mg (**non particulaire**) | 5–10 mL | La dexaméthasone périneurale allonge la durée ; le corticoïde particulaire n\'a rien à faire ici |
| Bloc sélectif d\'une branche (grand auriculaire, petit occipital) | Ropivacaïne 0,2 % | **1–3 mL** | Sous contrôle direct de la branche, hydrodissection à la clé |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), bupivacaïne/lévobupivacaïne 2–2,5 mg/kg. Un bloc à 10 mL de ropivacaïne 0,375 % = 37,5 mg : très en dessous. Le vrai sujet est le **cumul** si l\'on associe dans la même séance un bloc occipital, des points gâchettes et une infiltration d\'épaule — additionner et écrire la dose totale dans le dossier.

**Bilatéral** : possible pour l\'analgésie chirurgicale, **à éviter en douleur chronique** (bloc phrénique bilatéral potentiel). Si nécessaire, espacer d\'au moins une semaine et se limiter à 5 mL par côté.`,

  variantes: [
    { titre: 'Bloc intermédiaire vs bloc superficiel (sous-cutané)', texte: `Le bloc **superficiel** stricto sensu est une infiltration sous-cutanée en éventail le long du bord postérieur du SCM, sans échographie : simple, très sûr, mais couverture incomplète et inconstante des branches profondes. Le bloc **intermédiaire** (sous le fascia cervical superficiel) est celui décrit ici : même sécurité apparente, meilleure couverture, et il rend le geste reproductible.

En pratique de douleur chronique, préférer l\'intermédiaire pour le bloc thérapeutique et le sous-cutané pur quand on cherche à cartographier une allodynie cutanée strictement superficielle.` },
    { titre: 'Bloc sélectif du nerf grand auriculaire', texte: 'Sonde transversale sur le corps du SCM, à mi-hauteur : le nerf est une petite structure ovalaire de 1–2 mm sur la **face superficielle** du muscle, près de son bord postérieur, et on peut le suivre en remontant vers la parotide et le lobule. Injection de 1–2 mL en hydrodissection circonférentielle. C\'est le bloc à faire devant une douleur de l\'angle mandibulaire faussement attribuée à l\'ATM ou au trijumeau, et c\'est un excellent test avant cryoneurolyse.' },
    { titre: 'Bloc sélectif des nerfs supraclaviculaires', texte: 'Sonde parallèle à la clavicule, 1–2 cm au-dessus d\'elle : les branches croisent la clavicule dans le plan sous-cutané / sous-fascial. 2–4 mL suffisent. Indiqué dans la douleur post-fracture ou post-ostéosynthèse de clavicule et dans la douleur du moignon de l\'épaule non couverte par le bloc suprascapulaire. À confirmer par le territoire hypoesthésié.' },
    { titre: 'Gestes durables sur une branche', texte: 'Après **deux blocs tests concordants** (≥ 50 % de soulagement pendant la durée de l\'AL) : **cryoneurolyse** de la branche (grand auriculaire, petit occipital, supraclaviculaire) — nerfs superficiels, cible facile, risque de neurome faible avec le froid ; ou **radiofréquence pulsée** (42 °C, 2 Hz, 20 ms, 120–360 s), avec stimulation sensitive préalable. Les données publiées sur ces branches sont des séries et des cas cliniques — niveau de preuve faible, à annoncer au patient. **Pas de neurolyse chimique** : le territoire est cutané et visible, une anesthésie douloureuse y est invalidante.' },
    { titre: 'Bloc cervical profond — ce qu\'il ne faut pas faire ici', texte: 'Injection au contact des processus transverses C2, C3 et C4, en dedans du fascia prévertébral. Il couvre les branches motrices et sensitives profondes mais expose à l\'injection intrathécale, intra-artérielle vertébrale, au bloc phrénique quasi systématique et au bloc récurrentiel. La littérature de chirurgie carotidienne a conclu que le bénéfice ne compense pas les complications par rapport au bloc superficiel/intermédiaire seul : **aucune indication en douleur chronique.**' },
  ],

  pearls: [
    'Faire relever la tête au patient contre résistance : le bord postérieur du SCM saute aux yeux, y compris sur un cou épais.',
    'Ne pas comprimer avec la sonde : le plan graisseux cible s\'écrase et la veine jugulaire externe disparaît. Beaucoup de gel, appui minimal.',
    'Le repère fonctionnel est le **ressaut du fascia superficiel** : dès qu\'on le franchit, on s\'arrête. Un bloc réussi est un bloc où l\'on n\'a presque pas avancé.',
    'Le grand auriculaire explique une bonne part des « douleurs de l\'ATM » et des « névralgies faciales basses » : un bloc de 2 mL tranche en 10 minutes ce qu\'un mois d\'examens ne tranche pas.',
    'Tester **l\'élévation de l\'épaule** après le bloc, pas seulement la sensibilité : c\'est ainsi qu\'on documente un bloc partiel du nerf XI avant que le patient ne s\'en plaigne au téléphone.',
    'Petit volume pour le diagnostic, volume plus large pour la thérapeutique : le même geste ne répond pas à la même question selon les millilitres injectés.',
  ],
  pieges: [
    'Rester **au-dessus** du fascia superficiel : bloc sous-cutané incomplet, patient qui revient en disant « ça n\'a rien fait ».',
    'Franchir le **fascia prévertébral** : bloc interscalénique par mégarde — bloc moteur du membre supérieur, bloc phrénique, patient inquiet et séance ratée.',
    'Injecter dans le SCM : le muscle gonfle, rien ne diffuse, aucun effet.',
    'Ignorer la veine jugulaire externe parce qu\'elle est écrasée par la sonde : relâcher la pression avant de piquer.',
    'Attribuer au plexus cervical superficiel une douleur de la nuque médiane : ce territoire est celui du grand occipital et du troisième nerf occipital, pas le sien. Un bloc négatif mal ciblé fait conclure à tort à une douleur « centrale ».',
    'Faire un bloc bilatéral dans la même séance chez un patient BPCO ou obèse.',
  ],
  complications: [
    '**Bloc du nerf accessoire spinal (XI)** : faiblesse transitoire du trapèze, épaule tombante, gêne à l\'élévation. Fréquent et attendu (même plan anatomique), régressif en quelques heures. CAT : rassurer, écharpe si besoin, pas de port de charge, pas de conduite.',
    '**Bloc phrénique** : hémi-diaphragme paralysé, dyspnée surtout chez le patient à réserve respiratoire limitée. Plus fréquent avec des volumes > 10 mL ou si le fascia prévertébral a été franchi. CAT : position demi-assise, O₂, surveillance jusqu\'à régression ; contre-indique tout bloc controlatéral.',
    '**Bloc récurrentiel** : dysphonie, gêne à la déglutition. CAT : à jeun jusqu\'à récupération, rassurer.',
    '**Syndrome de Claude Bernard-Horner** : par diffusion vers la chaîne sympathique cervicale. Sans gravité, mais il faut l\'avoir annoncé.',
    '**Hématome de la veine jugulaire externe** : bénin mais visible et mal vécu ; compression 2–3 min.',
    '**Injection intravasculaire** (jugulaire externe, artère cervicale superficielle) : goût métallique, acouphènes, agitation — arrêt immédiat, O₂, protocole d\'intoxication aux AL. Volume faible : événement rare.',
    '**Bloc interscalénique accidentel** : bloc moteur du membre supérieur pendant plusieurs heures. Pas dangereux en soi mais impose une surveillance, une écharpe et l\'annulation de tout retour au volant.',
    '**Toxicité systémique** : exceptionnelle à ces volumes, sauf cumul de blocs dans la même séance.',
  ],
  securite: [
    '**Faible risque hémorragique (ASRA-ESRA 2018)** : site superficiel et compressible ; pas d\'arrêt systématique des antiagrégants, anticoagulants au cas par cas.',
    '**Le fascia prévertébral est la limite absolue.** Si la pointe n\'est pas parfaitement visible au-dessus de lui, on n\'injecte pas.',
    'Doppler avant chaque ponction (jugulaire externe et branches artérielles du triangle postérieur), en relâchant la compression de la sonde.',
    'Aspiration avant chaque bolus, injection fractionnée, contact verbal maintenu.',
    'Plafonner le volume à 10 mL par côté ; **jamais bilatéral dans la même séance** en douleur chronique.',
    'Documenter systématiquement, avant la sortie : sensibilité des quatre territoires, force du trapèze, voix, déglutition, absence de dyspnée.',
  ],

  suivi: `- **J0** : EN avant / à 30 min ; cartographie de l\'hypoesthésie obtenue (dessiner le territoire dans le dossier — c\'est la donnée qui rendra le geste suivant interprétable) ; force du trapèze, voix, déglutition, respiration avant la sortie.
- **J7–J15** : EN, retentissement sur le sommeil, allodynie cutanée, consommation d\'antalgiques. Un bloc diagnostique se juge sur les **24 premières heures** ; un bloc thérapeutique sur 2 à 4 semaines.
- **J30** : décision — répéter (série de 2 à 3 blocs espacés de 2 à 4 semaines), passer à un geste durable sur une branche identifiée (cryoneurolyse, PRF) si la réponse est franche mais brève, ou reconsidérer le diagnostic si deux blocs bien conduits n\'ont rien donné.
- **3 mois** : EN, échelle DN4 si composante neuropathique, retour aux activités. Ne pas entretenir une série de blocs sans critère de réponse écrit.
- Coupler systématiquement à la prise en charge de fond : traitement de la douleur neuropathique, désensibilisation cutanée, travail postural si cervicalgie associée.`,

  evidence: `- **Périopératoire — chirurgie carotidienne** : le corpus le plus solide vient de l\'anesthésie. Les revues systématiques comparant bloc cervical superficiel/intermédiaire et bloc profond (ou combiné) concluent à une **efficacité équivalente pour l\'endartériectomie carotidienne avec significativement moins de complications graves** dans le groupe superficiel (Pandit et coll., revue systématique). C\'est l\'argument qui a fait abandonner le bloc profond en routine — et il s\'applique *a fortiori* en douleur chronique, où le rapport bénéfice/risque est encore moins favorable au profond.
- **Nomenclature et plans anatomiques** : la distinction superficiel / intermédiaire / profond (Telford et Stoneham) est l\'apport conceptuel qui a rendu la littérature lisible ; beaucoup d\'études anciennes appelées « superficielles » étaient en réalité des blocs intermédiaires, ce qui explique une partie des divergences de résultats et des taux de bloc phrénique rapportés.
- **Échoguidage vs repères anatomiques** : des essais randomisés en anesthésie (Tran et coll.) montrent un avantage de l\'échoguidage sur la qualité du bloc et/ou le volume nécessaire. La supériorité en termes de **complications graves** n\'a jamais été démontrée par un essai de puissance suffisante — le geste est trop sûr pour cela. Argument anatomique, pas statistique.
- **Chirurgie de la clavicule et de l\'épaule** : le bloc du plexus cervical superficiel apporte une analgésie complémentaire du territoire des nerfs supraclaviculaires, non couvert par les blocs du plexus brachial ni par le bloc suprascapulaire. Littérature limitée à des séries et des cas cliniques, résultats cohérents.
- **Douleur chronique** : c\'est le **trou de la littérature**. Il n\'existe **aucun essai randomisé publié** du bloc du plexus cervical superficiel dans la douleur neuropathique cicatricielle cervicale, la névralgie du grand auriculaire ou la douleur post-thyroïdectomie chronique. Les données sont des séries, des cas cliniques et l\'extrapolation du périopératoire. **Grade faible, assumé** : ce bloc se justifie ici par sa valeur **diagnostique** (cartographier un territoire, valider une cible avant un geste durable) plus que par une efficacité thérapeutique prouvée à long terme. Le dire au patient fait partie du geste.
- **PRF et cryoneurolyse des branches** : séries et cas cliniques uniquement. Aucun ECR. À réserver aux patients ayant répondu de façon reproductible à deux blocs tests.`,

  references: [
    { auteurs: 'Pandit JJ, Satya-Krishna R, Gration P', titre: 'Superficial or deep cervical plexus block for carotid endarterectomy: a systematic review of complications', revue: 'Br J Anaesth', annee: '2007', type: 'revue systématique', verif: false, note: 'Référence historique de l\'abandon du bloc profond en routine.' },
    { auteurs: 'Telford RJ, Stoneham MD', titre: 'Correct nomenclature of superficial cervical plexus blocks', revue: 'Br J Anaesth', annee: '2004', type: 'anatomie / mise au point', verif: false, note: 'Introduit la distinction superficiel / intermédiaire / profond.' },
    { auteurs: 'Ramachandran SK, Picton P, Shanks A, et al.', titre: 'Comparison of intermediate vs subcutaneous cervical plexus block for carotid endarterectomy', revue: 'Br J Anaesth', annee: '2011', type: 'étude comparative', verif: false },
    { auteurs: 'Tran DQH, Dugani S, Finlayson RJ', titre: 'A randomized comparison between ultrasound-guided and landmark-based superficial cervical plexus block', revue: 'Reg Anesth Pain Med', annee: '2010', type: 'ECR', verif: false },
    { auteurs: 'Herring AA, Stone MB, Frenkel O, Chipman A, Nagdev AD', titre: 'The ultrasound-guided superficial cervical plexus block for anesthesia and analgesia in emergency care settings', revue: 'Am J Emerg Med', annee: '2012', type: 'technique', verif: false },
    { auteurs: 'Nash L, Nicholson HD, Zhang M', titre: 'Does the investing layer of the deep cervical fascia exist?', revue: 'Anesthesiology', annee: '2005', type: 'anatomie', verif: false, note: 'Remet en cause la description classique du fascia d\'enveloppement — utile pour comprendre pourquoi les plans « superficiel » et « intermédiaire » se confondent en pratique.' },
    { auteurs: 'Choi DS, Atchabahian A, Brown AR', titre: 'Cervical plexus block provides postoperative analgesia after clavicle surgery', revue: 'Anesth Analg', annee: '2005', type: 'cas cliniques / lettre', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Classification du risque hémorragique des procédures de douleur interventionnelle.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'pcs-repere', section: 'sonoanatomie', titre: 'Coupe transversale au bord postérieur du SCM (niveau cricoïde) — repérage',
      legende: 'Le SCM s\'effile en arrière ; la cible est la nappe graisseuse comprise entre le fascia cervical superficiel et le fascia prévertébral, en arrière de son bord postérieur — 0,5 à 1,5 cm de profondeur. Les branches du plexus y émergent en éventail au point d\'Erb ; le nerf accessoire spinal chemine dans le même plan, plus postérieur. En profondeur, le fascia prévertébral sépare la cible du nerf phrénique (sur le scalène antérieur) et des racines C5-C6 : c\'est la barrière à ne pas franchir.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur / médial', right: 'Postérieur / latéral' }).probeInfo({ plan: 'Transverse au niveau du cricoïde', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 7, fatBelow: 14 });
        S.muscle({ path: 'M0 66 L280 84 L352 112 L268 172 L0 168 Z', label: 'SCM', at: [116, 126], opacity: 0.5 });
        S.fascia({ points: [[0, 62], [170, 74], [290, 86], [386, 112], [500, 128], [640, 140]], width: 2, opacity: 1 });
        S.label({ x: 430, y: 96, text: 'Fascia cervical superficiel', anchor: 'start', cls: 'lbl-fascia', small: true, lead: [424, 118] });
        S.vein({ x: 274, y: 74, rx: 16, ry: 9, label: 'V. jugulaire externe', lx: 248, ly: 60, anchor: 'end', small: true });
        S.region({ path: 'M290 92 L386 116 L500 132 L540 196 L380 206 L286 178 Z', fill: '#6a747d', opacity: 0.28 });
        S.label({ x: 470, y: 196, text: 'Nappe graisseuse interfasciale', anchor: 'start', cls: 'lbl-region', small: true });
        S.nerve({ x: 350, y: 134, r: 6 });
        S.nerve({ x: 371, y: 142, r: 6 });
        S.nerve({ x: 392, y: 148, r: 6 });
        S.label({ x: 320, y: 186, text: 'Branches du plexus cervical\n(point d\'Erb)', anchor: 'middle', cls: 'lbl-nerve', small: true, lead: [366, 148] });
        S.nerve({ x: 470, y: 144, r: 6, label: 'N. accessoire (XI)', lx: 496, ly: 166, anchor: 'start', small: true, lead: [477, 148] });
        S.fascia({ points: [[190, 230], [330, 236], [470, 246], [610, 258]], width: 2.2, opacity: 1 });
        S.label({ x: 614, y: 222, text: 'Fascia prévertébral', anchor: 'end', cls: 'lbl-fascia', small: true, lead: [546, 250] });
        S.muscle({ path: 'M210 240 L346 244 L356 420 L224 420 Z', label: 'Scalène ant.', at: [284, 344], opacity: 0.45, small: true });
        S.muscle({ path: 'M406 252 L620 262 L640 420 L424 420 Z', label: 'Scalène moyen', at: [522, 344], opacity: 0.45, small: true });
        S.nerve({ x: 286, y: 250, rx: 9, ry: 5 });
        S.label({ x: 140, y: 232, text: 'N. phrénique', anchor: 'middle', cls: 'lbl-nerve', small: true, lead: [277, 250] });
        S.nerve({ x: 372, y: 278, r: 13 });
        S.nerve({ x: 382, y: 326, r: 14 });
        S.label({ x: 300, y: 388, text: 'Racines C5-C6', anchor: 'middle', cls: 'lbl-nerve', small: true, lead: [368, 332] });
        S.artery({ x: 96, y: 300, r: 26, label: 'Carotide', lx: 96, ly: 352, small: true });
        S.vein({ x: 176, y: 282, rx: 30, ry: 18, label: 'VJI', lx: 176, ly: 322, small: true });
      },
    },
    {
      id: 'pcs-geste', section: 'technique', titre: 'Bloc intermédiaire — aiguille in-plane, postéro-antérieure',
      legende: 'L\'aiguille arrive par l\'arrière, à angle très plat, et s\'arrête dès le ressaut du fascia cervical superficiel : profondeur habituelle 0,5 à 1,5 cm seulement. L\'injectat forme une lentille qui décolle le bord postérieur du SCM du plan profond et s\'étale sur 3–4 cm. Critère de fin : toute la nappe reste au-dessus du fascia prévertébral. Si elle descend vers les racines, on est en train de faire un bloc interscalénique.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur / médial', right: 'Postérieur / latéral' }).probeInfo({ plan: 'Transverse au niveau du cricoïde', type: 'in-plane, postéro-antérieur' });
        S.skin({ thickness: 7, fatBelow: 14 });
        S.muscle({ path: 'M0 66 L280 84 L352 112 L268 172 L0 168 Z', label: 'SCM', at: [110, 126], opacity: 0.5 });
        S.fascia({ points: [[0, 62], [170, 74], [290, 86], [386, 112], [500, 128], [640, 140]], width: 2, opacity: 1 });
        S.vein({ x: 274, y: 74, rx: 16, ry: 9, label: 'VJE', lx: 246, ly: 60, anchor: 'end', small: true });
        S.nerve({ x: 350, y: 134, r: 6 });
        S.nerve({ x: 371, y: 142, r: 6 });
        S.nerve({ x: 392, y: 148, r: 6 });
        S.fascia({ points: [[190, 230], [330, 236], [470, 246], [610, 258]], width: 2.2, opacity: 1 });
        S.label({ x: 322, y: 222, text: 'Fascia prévertébral — limite absolue', anchor: 'middle', cls: 'lbl-fascia', small: true, lead: [340, 238] });
        S.muscle({ path: 'M210 240 L346 244 L356 420 L224 420 Z', label: 'Scalène ant.', at: [284, 344], opacity: 0.45, small: true });
        S.muscle({ path: 'M406 252 L620 262 L640 420 L424 420 Z', label: 'Scalène moyen', at: [522, 344], opacity: 0.45, small: true });
        S.nerve({ x: 286, y: 250, rx: 9, ry: 5, label: 'N. phrénique', lx: 138, ly: 232, anchor: 'middle', small: true, lead: [277, 250] });
        S.nerve({ x: 372, y: 278, r: 13 });
        S.nerve({ x: 382, y: 326, r: 14 });
        S.label({ x: 300, y: 388, text: 'Racines C5-C6 — ne jamais y arriver', anchor: 'middle', cls: 'lbl-nerve', small: true, lead: [368, 332] });
        S.artery({ x: 96, y: 300, r: 26, label: 'Carotide', lx: 96, ly: 352, small: true });
        S.vein({ x: 176, y: 282, rx: 30, ry: 18 });
        S.needle({ from: [640, 90], to: [384, 140], label: '25 G, angle 10–20°' });
        /* lentille interfasciale percée autour du bouquet de branches, qui reste visible */
        S.spreadPath({ path: 'M316 150 A84 30 0 1 1 484 150 A84 30 0 1 1 316 150 Z M337 140 A34 17 0 1 0 405 140 A34 17 0 1 0 337 140 Z', at: [214, 178], label: '5–10 mL' });
      },
    },
  ],

  checklist: [
    'Bord postérieur du SCM et cartilage cricoïde marqués avant désinfection (tête relevée contre résistance)',
    'Veine jugulaire externe recherchée en relâchant la pression de la sonde, avant de choisir le point d\'entrée',
    'Fascia prévertébral et racines C5-C6 identifiés AVANT la ponction : on sait où est la limite',
    'Volume plafonné à 10 mL par côté ; pas de bloc bilatéral dans la même séance',
    'Après le geste : cartographie du territoire hypoesthésié dessinée dans le dossier',
    'Force du trapèze (nerf XI), voix, déglutition et respiration vérifiées avant la sortie',
    'Patient prévenu : cou et lobe de l\'oreille endormis, éventuel Horner, éventuelle épaule « lourde » quelques heures',
  ],
});
