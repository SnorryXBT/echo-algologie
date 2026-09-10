/* Chapitre socle : radiofréquence sous échographie — principes, PRF vs RF thermique, cibles échoguidées. */
ECHO.register({
  id: 'socle-radiofrequence',
  titre: 'Radiofréquence sous échographie : principes, pulsée vs thermique, cibles échoguidées',
  titreCourt: 'Radiofréquence',
  en: 'Ultrasound-guided radiofrequency for chronic pain — continuous (thermal) radiofrequency ablation, pulsed radiofrequency (PRF), cooled and bipolar RF: physics, lesion geometry, sensory and motor stimulation, target selection',
  region: 'socle',
  types: ['socle', 'interventionnel'],
  niveau: 2,
  grade: 'Hétérogène : forte pour la RF thermique des branches médiales rachidiennes (radioscopie), modérée à faible pour les cibles périphériques échoguidées, faible pour la PRF (ECR de petite taille, méta-analyses de qualité basse)',
  maj: '2026-09',
  motsCles: ['radiofréquence', 'RF', 'PRF', 'radiofréquence pulsée', 'thermolésion', 'neurotomie', 'rhizolyse', 'dénervation', 'cooled RF', 'RF refroidie', 'bipolaire', 'stimulation 50 Hz', 'stimulation 2 Hz', 'géniculés', 'branches médiales', 'électrode', 'extrémité active'],
  resume: `La radiofréquence transforme un bloc test positif mais fugace en un effet de plusieurs mois. Deux modes à ne pas confondre : la RF thermique (continue), qui détruit le nerf par chauffage à 80–90 °C pendant 60–90 s, et la RF pulsée (PRF), qui module sans détruire à 42 °C par salves de 20 ms à 2 Hz. La géométrie de la lésion — un ellipsoïde autour de l'extrémité active, jamais au-delà de la pointe — impose de placer l'aiguille parallèlement au nerf, ce qui est précisément ce que l'échographie permet de contrôler mieux que la radioscopie sur les cibles superficielles. Toutes les cibles ne sont pas échoguidables : les géniculés, le suprascapulaire, les occipitaux, les intercostaux, le pudendal, l'obturateur et les névromes le sont ; les branches médiales lombaires, les facettes cervicales et les branches sacrées le restent avec des réserves, et l'accès foraminal, le ganglion sympathique et le DRG demeurent du domaine de la radioscopie ou du scanner. Aucune RF ne se conçoit sans bloc test préalable ni consentement spécifique mentionnant la neurite post-lésionnelle et la douleur de déafférentation.`,

  flash: {
    position: 'dorsal', positionNote: 'variable selon la cible ; installation identique à celle du bloc test correspondant (voir la fiche de la cible)',
    sonde: 'lineaire', sondeNote: '6–13 MHz pour les cibles superficielles (géniculés, occipitaux, intercostaux, suprascapulaire) ; convexe 2–5 MHz pour le pudendal, l\'obturateur, le rachis profond',
    approche: 'in-plane', approcheNote: 'obligatoire : le contrôle de l\'axe de l\'électrode par rapport au nerf est le geste, pas un confort',
    aiguille: 'Électrode RF 22 G (ou 20 G / 18 G pour une lésion thermique large), 50–150 mm, extrémité active 5–10 mm ; canule à extrémité active 4 mm pour les cibles fines',
    cible: 'Extrémité active parallèle au trajet du nerf, au contact ; stimulation sensitive 50 Hz reproduisant la douleur à < 0,5 V et pas de réponse motrice indésirable à 2 Hz jusqu\'à 1,5–2 V',
    injectat: 'RF thermique : 1–2 mL de lidocaïne 2 % après stimulation et avant chaque lésion. PRF : rien avant (l\'AL n\'empêche pas la PRF mais gêne la stimulation), 2–4 mL d\'AL ± corticoïde après',
    duree: '20–30 min pour une cible unique · 40–60 min pour 3–5 géniculés',
  },

  indications: [
    `**Douleur chronique nociceptive ou neuropathique focale, d'origine identifiée, ayant répondu à un bloc test** : soulagement ≥ 50 % (idéalement ≥ 80 % pour une RF thermique) pendant la durée pharmacologique de l'anesthésique local, documenté par une EN avant / 30 min / 2 h.`,
    `**Gonarthrose douloureuse** non opérable ou en attente de prothèse, ou gonalgie persistante après PTG : RF des nerfs géniculés (thermique, refroidie ou pulsée).`,
    `**Épaule douloureuse chronique** (capsulite, omarthrose, coiffe non opérable) : PRF du nerf suprascapulaire, éventuellement associée au nerf axillaire.`,
    `**Céphalées cervicogéniques et névralgies d'Arnold** : PRF du grand occipital, du petit occipital, du troisième nerf occipital.`,
    `**Névralgies intercostales, douleurs post-thoracotomie, névromes cicatriciels et de moignon** : PRF ou RF thermique de l'intercostal ou du névrome.`,
    `**Névralgie pudendale** confirmée par bloc test (critères de Nantes) : PRF haute tension au canal d'Alcock ou à l'épine ischiatique.`,
    `**Douleur de hanche non opérable** : PRF des branches articulaires (obturateur et fémoral, repères PENG) — indication à réserver, littérature limitée.`,
    `Prévention ou traitement d'un syndrome douloureux régional focal après échec de deux lignes médicamenteuses adaptées et d'un programme de rééducation.`,
  ],
  contreIndications: [
    `**Absolues** : refus ou consentement non éclairé sur la neurite et la déafférentation ; infection cutanée ou générale évolutive ; **stimulateur cardiaque ou défibrillateur non reprogrammé** (la RF thermique monopolaire génère un courant à travers le corps — avis cardiologique, mode asynchrone ou désactivation des thérapies, RF bipolaire préférable) ; grossesse ; nerf **moteur mixte** en cible pour une RF thermique.`,
    `**Relatives** : coagulopathie ou anticoagulation — la plupart des cibles périphériques échoguidées sont **superficielles et compressibles**, donc à faible risque hémorragique au sens ASRA-ESRA 2018 ; le pudendal, l'obturateur et les cibles paravertébrales relèvent du risque intermédiaire à élevé.`,
    `Diabète déséquilibré si un corticoïde est associé ; immunodépression.`,
    `**Bloc test négatif ou non fait** : contre-indication à part entière. La RF sans bloc test n'a ni valeur prédictive ni justification médico-légale.`,
    `Trouble cognitif ou barrière de langue empêchant la stimulation sensitive et le retour verbal pendant la lésion.`,
    `Douleur diffuse, sensibilisation centrale majeure, catastrophisme non pris en charge : la RF échoue et peut aggraver.`,
  ],
  alternatives: `La RF n'est qu'un des trois moyens de prolonger un bloc test positif — les deux autres sont la **cryoneurolyse** (effet 3–6 mois, régénération assurée, pas de neurite de déafférentation décrite) et la **neurolyse chimique** (alcool, phénol : réservée aux situations palliatives ou aux névromes, risque de neurite intense et de déafférentation). Face à une compression ou à une adhérence nerveuse, l'**hydrodissection** est le geste logique avant toute lésion. Enfin, la neuromodulation (stimulation médullaire ou périphérique) reste l'échelon suivant, hors du périmètre de ce mémo.

Arbitrage pratique : nerf **purement sensitif, superficiel, bien visible** → RF thermique ou cryoneurolyse envisageables ; nerf **mixte ou proche d'un tronc moteur** → PRF seule ; **DRG, sympathique, foramen** → radioscopie ou scanner, pas d'échographie.`,

  anatomie: `La radiofréquence ne modifie pas l'anatomie utile — elle en durcit les exigences. Ce qui suffisait pour déposer 5 mL d'anesthésique local (« être dans le bon plan ») ne suffit plus : il faut être **au contact du nerf, parallèlement à lui, sur 5 à 10 mm**.

**Physique de la lésion thermique.** Le générateur délivre un courant alternatif de 300–500 kHz entre l'extrémité active de l'électrode et une plaque de dispersion. Le courant agite les ions tissulaires ; c'est le **tissu** qui chauffe par friction ionique, pas l'électrode — l'électrode est chauffée par le tissu, et le thermocouple qu'elle contient mesure donc la température de l'interface. La chaleur est produite **radialement autour de la portion dénudée** et **ne dépasse pas la pointe** : la lésion est un ellipsoïde aplati centré sur l'extrémité active, dont le rayon efficace utile est de l'ordre de 2 mm au-delà de la surface de l'électrode pour une canule 22 G.

**Conséquence opératoire, la seule qui compte** : une électrode placée **perpendiculairement** au nerf ne capte qu'un point — ou le manque — tandis qu'une électrode placée **parallèlement** capte un segment de nerf égal à la longueur de l'extrémité active. C'est la démonstration classique de la neurotomie des branches médiales, transposable à toutes les cibles.

**RF pulsée.** Le courant est délivré par salves brèves (classiquement 20 ms) à 2 Hz, soit un rapport cyclique de 4 % : entre deux salves, le tissu se refroidit et la température de l'électrode est plafonnée à **42 °C**. Il n'y a pas de lésion thermique visible. L'effet passe par le **champ électrique** lui-même : modulation des canaux ioniques, expression de c-Fos et d'ATF3 dans la corne dorsale, action sur la microglie. La tension délivrée (45 V classiquement, 60–100 V pour les protocoles « haute tension ») est le paramètre que l'on fait varier.

### Ce qui compte pour le geste
- **L'extrémité active définit la lésion.** 5 mm pour un nerf fin et superficiel (géniculés, occipitaux) ; 10 mm quand on veut couvrir une variabilité anatomique (branches articulaires, intercostal).
- **La lésion ne va pas au-delà de la pointe** : viser au contact du nerf, pas « à 2 mm devant ».
- **Le calibre change la taille de la lésion** : 18 G > 20 G > 22 G. En périphérie superficielle, on choisit le 22 G pour la précision, quitte à multiplier les lésions.
- **RF refroidie (cooled RF)** : une circulation interne de sérum refroidit l'électrode, ce qui évite la carbonisation à l'interface et permet de déposer plus d'énergie ; la lésion devient plus **sphérique** et **se projette au-delà de la pointe**, ce qui est exactement ce qu'on cherche quand la position exacte du nerf est incertaine (géniculés, branches sacrées latérales). Consommable coûteux, générateur dédié.
- **RF bipolaire** : deux électrodes, le courant circule de l'une à l'autre, la lésion est une bande entre les deux. Pertinent pour couvrir un territoire (paroi thoracique, branches sacrées) ; la distance inter-électrodes conditionne la confluence de la lésion — au-delà, deux lésions séparées.
- **Doppler avant tout** : une artère satellite dans le champ de la lésion est le seul vrai danger vasculaire de la RF thermique périphérique.`,

  installation: {
    patient: `Identique à celle du bloc test de la même cible — c'est un principe : **on refait exactement l'installation qui a permis le bloc positif**, sinon la cible atteinte n'est plus la même que celle qui a été validée.

Voie veineuse posée pour toute RF thermique (douleur de la lésion, malaise vagal, sédation éventuelle). Monitorage minimal : scope, SpO2, PA non invasive, pour une RF thermique ou une cible profonde. **Plaque de dispersion** collée sur une surface musculaire large, sèche, rasée si nécessaire, à distance du site (cuisse ou dos), jamais sur une prothèse métallique ni sur un relief osseux — c'est la cause classique de brûlure cutanée.

Le patient doit rester **coopérant et non sédaté au moment de la stimulation** : c'est lui qui dit si les paresthésies reproduisent sa douleur. Une sédation légère (rémifentanil ou midazolam titrés) est acceptable une fois la stimulation faite, avant la lésion thermique.`,
    operateur: `Opérateur du côté à traiter, écran en face, générateur RF et son écran de paramètres **dans le champ visuel** (température, impédance, temps). L'aide vérifie l'impédance à chaque connexion : une impédance normale se situe classiquement entre 100 et 500 ohms selon les tissus et le matériel — une impédance très basse évoque un court-circuit ou un contact liquidien, très haute un mauvais contact de la plaque ou une électrode dans la graisse ou l'air.

Sens de ponction choisi pour que le **trajet de l'aiguille soit le plus tangentiel possible au nerf**, quitte à entrer loin du point d'entrée habituel du bloc : c'est le point où la RF diffère du bloc.`,
    sonde: `- Linéaire 6–13 MHz, preset nerf ou MSK, profondeur réglée pour que le nerf occupe le tiers médian de l'image, focale sur le nerf.
- **Doppler couleur à basse PRF systématique** sur le trajet prévu et sur le volume de la future lésion.
- Angle d'insonation aussi plat que possible : une électrode RF est rigide et peu échogène en dehors de l'axe ; en cas de doute, hydrolocalisation par 0,2–0,3 mL de sérum, ou petits mouvements de va-et-vient de 1 mm (« jiggling ») qui révèlent la pointe.
- Housse de sonde stérile et gel stérile : le geste dure et la sonde reste dans le champ.`,
  },

  reperage: [
    { titre: 'Refaire le repérage du bloc test', texte: 'Retrouver la cible exactement comme le jour du bloc positif : mêmes repères osseux, même orientation de sonde, même profondeur. Comparer avec les images enregistrées lors du bloc test — c\'est l\'intérêt de les archiver.' },
    { titre: 'Doppler sur la zone de lésion', texte: 'Balayer le volume de la future lésion, pas seulement le point de ponction. Une artère à moins de 5 mm de l\'extrémité active contre-indique la RF thermique à cet endroit (thrombose, lésion pariétale) : décaler la cible ou passer en PRF.' },
    { titre: 'Choisir l\'axe de ponction, pas le point de ponction', texte: 'Faire pivoter mentalement la sonde jusqu\'à obtenir une **coupe longitudinale du nerf** ou, à défaut, une coupe où l\'aiguille pourra arriver tangentiellement. C\'est l\'étape qui distingue une RF réussie d\'un bloc coûteux.' },
    { titre: 'Mesurer la profondeur et choisir l\'électrode', texte: 'Longueur : profondeur mesurée + trajet oblique + 2 cm de marge. Extrémité active : 5 mm si le nerf est fin et l\'anatomie sûre, 10 mm si la position exacte du nerf est incertaine.' },
    { titre: 'Si le nerf n\'est pas visible', texte: 'Ne pas faire de RF thermique à l\'aveugle sur un repère osseux : soit on repasse en PRF (plus tolérante à l\'imprécision), soit on renonce à l\'échographie pour cette cible et on la traite en radioscopie. C\'est notamment le cas des branches médiales lombaires chez le patient corpulent et du C7.' },
  ],

  sonoanatomie: [
    { structure: 'Nerf cible en coupe transversale', aspect: 'Aspect en nid d\'abeilles, fascicules hypoéchogènes dans un épinèvre hyperéchogène ; 1–6 mm selon la cible', repere: 'Vérifier la continuité en balayant de proximal en distal' },
    { structure: 'Nerf cible en coupe longitudinale', aspect: 'Faisceau de lignes hyperéchogènes parallèles discontinues (« câble »)', repere: 'C\'est la vue qui permet le placement parallèle de l\'électrode' },
    { structure: 'Artère satellite (Doppler)', aspect: 'Structure anéchogène pulsatile, comprimée par la sonde si veine adjacente', repere: 'Repère principal pour de nombreuses cibles (géniculés, suprascapulaire, pudendal) et principal danger de la lésion thermique' },
    { structure: 'Électrode RF', aspect: 'Ligne hyperéchogène épaisse avec réverbérations en queue de comète ; extrémité active non distinguable du corps en échographie', repere: 'Se repérer sur la pointe et compter la longueur active en arrière d\'elle' },
    { structure: 'Corticale osseuse', aspect: 'Ligne hyperéchogène franche, cône d\'ombre postérieur', repere: 'Butée de sécurité pour les cibles périostées (géniculés, branches médiales) : contact puis retrait de 1 mm' },
    { structure: 'Plan fascial / graisse péri-neurale', aspect: 'Fines lignes hyperéchogènes séparant des lobules', repere: 'Une électrode dans la graisse donne une impédance élevée et une lésion inefficace' },
    { structure: 'Muscle traversé', aspect: 'Fibres striées, hypoéchogène', repere: 'Une stimulation 2 Hz peut faire contracter le muscle traversé sans que ce soit un nerf moteur — juger sur la topographie de la contraction' },
  ],

  technique: [
    { titre: 'Vérifications avant ponction', texte: 'Bloc test tracé et positif ; consentement spécifique signé (neurite, déafférentation, échec) ; plaque de dispersion posée et branchée ; générateur testé (impédance, stimulateur) ; électrode adaptée sortie et vérifiée (la canule et le thermocouple doivent être du même constructeur et de même longueur active).' },
    { titre: 'Anesthésie cutanée et progression', texte: '1–2 mL de lidocaïne 1 % au point d\'entrée **uniquement dans la peau et le tissu sous-cutané** : une infiltration profonde abolit la stimulation sensitive. Progression in-plane, lente, sous contrôle permanent de la pointe, jusqu\'au contact du nerf ou de l\'os selon la cible ; en cas de contact osseux, retirer de 1 mm.' },
    { titre: 'Stimulation sensitive 50 Hz', texte: 'Retirer le mandrin, connecter le thermocouple. Monter la tension progressivement : des paresthésies **dans le territoire douloureux et reproduisant la douleur habituelle** doivent apparaître entre 0,2 et 0,5 V. Au-delà de 0,7–1 V, l\'électrode est trop loin : repositionner. En dessous de 0,2 V, suspecter une position intraneurale.' },
    { titre: 'Stimulation motrice 2 Hz', texte: 'Monter jusqu\'à 1,5–2 V. Aucune contraction dans un territoire moteur utile ne doit apparaître : c\'est la garantie qu\'une lésion thermique ne provoquera pas de déficit. Une contraction locale du muscle traversé par l\'aiguille est banale. En PRF, une réponse motrice n\'est pas rédhibitoire (pas de destruction), mais elle signale la proximité d\'un tronc mixte.' },
    { titre: 'RF thermique — anesthésier puis léser', texte: 'Injecter **1–2 mL de lidocaïne 2 %** par la canule (la lésion est douloureuse), attendre 60–90 s, puis lancer le cycle : montée en température jusqu\'à **80 °C (protocoles 80–90 °C)** pendant **60–90 s**. Surveiller l\'impédance : une chute brutale signe une ébullition ou une carbonisation, un arrêt et un repositionnement s\'imposent. Pour couvrir un trajet, faire 2–3 lésions consécutives en reculant l\'électrode d\'une longueur active entre chaque.' },
    { titre: 'RF pulsée — paramètres et cycles', texte: 'Pas d\'AL avant. Paramètres usuels : **42 °C de plafond, 2 Hz, salves de 20 ms, 45 V**, durée **120 s**, répétée 2 à 3 fois (soit 240–360 s au total ; certains protocoles vont jusqu\'à 600 s). Les protocoles « haute tension » (60–100 V) modulent la tension à la baisse dès que 42 °C sont atteints. Injecter ensuite 2–4 mL d\'AL ± corticoïde non particulaire.' },
    { titre: 'Fin de geste et consignes', texte: 'Retrait sous contrôle, compression, pansement. Surveillance 30 min (60 min si sédation). Prévenir : **douleur de rebond ou brûlure locale pendant 7 à 15 jours** après une RF thermique, hypoesthésie attendue et durable dans le territoire, effet maximal à 2–4 semaines. Antalgiques de palier 1–2 et glace prescrits d\'emblée ; certaines équipes associent une corticothérapie courte pour limiter la neurite.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Anesthésie cutanée | Lidocaïne 1 % | 1–2 mL | Peau et sous-cutané seulement — ne pas infiltrer la cible, sous peine d'abolir la stimulation |
| Avant chaque lésion thermique | Lidocaïne 2 % (ou 1 %) par la canule | 1–2 mL par lésion | Injectée **après** la stimulation, 60–90 s avant la montée en température |
| Après PRF | Ropivacaïne 0,2 % ou lidocaïne 1 % ± corticoïde | 2–4 mL | **Dexaméthasone 4 mg (non particulaire) dès qu'une artère satellite est dans le champ** — occipitaux, pudendal, intercostaux, géniculés. La bétaméthasone (Célestène chronodose 5,70 mg/mL, Diprostène) est une **suspension particulaire** : elle ne se substitue pas à la dexaméthasone sur ces sites, et ne se justifie que sur une cible sans voisinage artériel |
| Après RF thermique | AL ± corticoïde | 2–4 mL | Objectif : confort immédiat et limitation de la neurite ; pas de bénéfice démontré, pratique courante |
| Multi-cibles (3–5 géniculés) | Lidocaïne 1–2 % | 1–2 mL par cible | **Additionner les doses** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée) ; 10 mL de lidocaïne 2 % = 200 mg, soit déjà la moitié de la dose d'un patient de 60 kg |

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg avec adrénaline), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Une séance de RF multi-cibles est l'un des rares gestes de ce mémo où le cumul devient réel. Intralipide disponible.

**Ce qu'il ne faut pas injecter** : pas de corticoïde particulaire à proximité d'une artère terminale ; pas de sérum ou d'AL en volume avant une PRF (l'injectat éloigne le nerf de l'électrode et déplace la cible) ; pas d'alcool ni de phénol en association à une RF thermique (cumul de neurotoxicité sans bénéfice).`,

  variantes: [
    { titre: 'Cibles réellement faisables sous échographie seule', texte: `**Bien établies** (nerf ou repère vasculaire directement visible) :
- **Nerfs géniculés** (supéro-médial, supéro-latéral, inféro-médial ± branches antérieures) : repérés au Doppler sur les artères géniculées, à la jonction diaphyse–condyle. Cible échoguidée de référence, avec la littérature la plus fournie.
- **Nerf suprascapulaire** : fosse supra-épineuse ou échancrure spinoglénoïdienne (voir la fiche dédiée) — PRF surtout.
- **Nerfs occipitaux** : grand occipital au niveau de l'oblique inférieur (C1-C2), petit occipital au bord postérieur du sterno-cléido-mastoïdien, troisième nerf occipital sur l'articulaire C2-C3.
- **Nerfs intercostaux** : sous le bord inférieur de la côte, à l'angle costal ou plus latéralement — PRF ou RF thermique, plèvre en visuel permanent.
- **Névromes cicatriciels et de moignon** : la masse est visible, l'électrode se place dans son axe (voir la fiche dédiée).
- **Nerf cutané latéral de cuisse**, **nerf saphène et sa branche infrapatellaire**, **nerf sural**, **nerf radial superficiel** : nerfs purement sensitifs, superficiels, cibles idéales.

**Faisables avec réserves** (repère osseux visible, nerf non individualisé) :
- **Branches médiales lombaires** : jonction processus transverse–processus articulaire supérieur visible en échographie, mais l'orientation parallèle exigée par la RF thermique est difficile à garantir, et le morphotype limite. La littérature valide surtout le **bloc** échoguidé (non-infériorité vs radioscopie), pas la neurotomie.
- **Branches médiales cervicales et troisième nerf occipital** : études cadavériques favorables, C7 visualisé dans environ un tiers des cas seulement.
- **Branches latérales sacrées** : séries échoguidées publiées, notamment après arthrodèse lombo-sacrée ; l'anatomie multiple et variable des branches est un argument fort pour la RF refroidie ou bipolaire, donc pour la radioscopie.
- **Nerf obturateur et branches articulaires de la hanche** (repères PENG) : faisable, littérature limitée.
- **Nerf pudendal** : PRF échoguidée décrite (voie transglutéale, repère de l'artère pudendale interne à l'épine ischiatique) ; l'échoguidage seul est acceptable en PRF, discutable en thermique.` },
    { titre: 'Cibles qui restent du domaine de la radioscopie ou du scanner', texte: `Le **ganglion rachidien postérieur (DRG)**, les **procédures foraminales et transforaminales**, la **rhizolyse thoracique**, le **ganglion sphéno-palatin**, le **ganglion stellaire en thermique**, la **chaîne sympathique lombaire**, le **ganglion impar**, la **discographie et la RF intradiscale**, ainsi que toute cible où l'on doit garantir un contact osseux précis sur un repère profond non visible en échographie.

À cela s'ajoute une raison médico-légale : sur les cibles rachidiennes, les recommandations internationales de consensus (facettes lombaires 2020, cervicales 2022) décrivent des protocoles **sous contrôle radioscopique** avec blocs diagnostiques contrôlés. Faire ces gestes sous échographie seule, c'est sortir du cadre publié — ce qui est défendable en pratique clinique argumentée, mais doit être tracé comme tel.

Le compromis utile en HDJ : échographie pour tout ce qui est périphérique et superficiel, radioscopie pour le rachis, et écho-assistance (repérage échographique du point d'entrée, contrôle scopique final) sur les cibles intermédiaires.` },
    { titre: 'RF refroidie (cooled RF)', texte: `L'électrode est parcourue par un sérum refroidi en circuit fermé : la température de l'interface reste basse alors que le tissu périphérique chauffe, ce qui évite la carbonisation et permet une lésion **plus volumineuse et plus sphérique, se projetant au-delà de la pointe** — l'exact inverse de la contrainte de la RF conventionnelle. Intérêt : cibles dont la position exacte est incertaine (branches sacrées latérales, géniculés). Les lésions de RF refroidie à 60 °C / 150 s sont significativement plus larges que celles d'une électrode monopolaire standard, mais une canule 16 G conventionnelle à 80–90 °C pendant 2–3 min produit une largeur de lésion comparable — l'avantage n'est donc pas absolu, il porte sur la géométrie. Coût du consommable et générateur dédié : à discuter en HDJ sur le volume d'actes.` },
    { titre: 'RF bipolaire', texte: `Deux électrodes placées en parallèle, le courant circulant de l'une à l'autre : la lésion est une **bande continue** entre les deux si la distance est respectée. Une étude ex vivo de 2024 (Wondra, Pain Practice) propose des distances inter-électrodes maximales de l'ordre de 12 mm pour des sondes 18 G, 10 mm pour des 20 G et 8 mm pour des 22 G, au-delà desquelles les lésions ne confluent plus. Application logique : paroi (intercostaux, branches sacrées, cicatrices étendues). Pas de plaque de dispersion nécessaire, ce qui règle la question de la brûlure sous plaque.` },
    { titre: 'PRF haute tension et longue durée', texte: `Le protocole standard 45 V / 120 s est de plus en plus concurrencé par des protocoles à **60–100 V** et **360–600 s**, notamment pour la névralgie pudendale et l'épaule. Un essai pilote randomisé récent sur le suprascapulaire retrouve un gain avec 100 V par rapport à 45 V. Le niveau de preuve reste celui d'essais pilotes : à réserver aux échecs d'un protocole standard, en traçant les paramètres.` },
  ],

  pearls: [
    `**L'axe avant le point.** Choisir d'abord la coupe qui montre le nerf en long, en déduire ensuite le point de ponction. L'inverse produit une électrode perpendiculaire et une RF inefficace.`,
    `Archiver les images du bloc test (capture + mesures) : c'est ce qui permet de reproduire la cible le jour de la RF.`,
    `Une stimulation sensitive qui reproduit **la douleur du patient**, et pas seulement des paresthésies dans le territoire, est le meilleur prédicteur de succès disponible en salle.`,
    `Impédance anormale = problème mécanique, pas problème de patient : plaque décollée, connecteur, électrode dans la graisse ou dans du liquide.`,
    `Prévenir systématiquement de la **douleur de rebond des 7–15 jours** et donner l'ordonnance avant la sortie : c'est ce qui distingue un patient satisfait d'un patient qui appelle en urgence à J3.`,
    `Sur une cible incertaine, préférer 3 lésions courtes en reculant l'électrode à une lésion longue mal placée.`,
  ],
  pieges: [
    `Faire une RF sans bloc test, ou après un bloc test « à peu près positif » : c'est le premier facteur d'échec et le plus évitable.`,
    `Infiltrer largement la cible avant la stimulation : le patient ne sent plus rien, la stimulation devient ininterprétable et on lèse à l'aveugle.`,
    `Confondre la contraction du muscle traversé (banale) et une réponse motrice du nerf cible (rédhibitoire en thermique) : juger sur la **topographie** de la contraction, pas sur sa présence.`,
    `Croire que la lésion se fait devant la pointe : elle se fait autour de l'extrémité active et s'arrête à la pointe.`,
    `Faire une RF thermique sur un nerf mixte ou sur une cible dont on n'a pas exclu la composante motrice — le déficit est alors définitif à l'échelle de plusieurs mois.`,
    `Poser la plaque de dispersion sur un relief osseux, une cicatrice, une peau humide ou en regard d'une prothèse : c'est le mécanisme de la brûlure cutanée.`,
    `Répéter une PRF inefficace à l'identique en espérant un autre résultat : si le bloc test est positif mais la PRF négative, la question est celle de la cible ou du passage à la thermique / cryoneurolyse.`,
  ],
  complications: [
    `**Neurite post-lésionnelle** (RF thermique) : douleur de brûlure dans le territoire, apparaissant à J2–J7, durant 2 à 6 semaines. Prise en charge : antalgiques, corticothérapie courte, gabapentinoïde si composante neuropathique. À annoncer avant le geste, sinon elle est vécue comme une complication.`,
    `**Douleur de déafférentation** : douleur neuropathique séquellaire dans un territoire désormais hypoesthésique, rare mais durable et difficile à traiter. Argument majeur pour préférer la PRF ou la cryoneurolyse sur les nerfs cutanés purement sensitifs des territoires visibles.`,
    `**Déficit moteur** : évitable par la stimulation 2 Hz ; définitif à l'échelle de 6–12 mois si un tronc mixte a été lésé thermiquement.`,
    `**Brûlure cutanée** : sous la plaque de dispersion (mauvaise pose) ou au point d'entrée si l'électrode est trop superficielle (nerfs occipitaux, radial superficiel). Vérifier que l'extrémité active est entièrement dans les tissus profonds.`,
    `**Névrome** après régénération anarchique : décrit, rare.`,
    `**Hypoesthésie et dysesthésies** dans le territoire traité : attendues après RF thermique, à annoncer explicitement — un patient qui découvre une zone insensible qu'on ne lui a pas annoncée considère qu'il y a eu une faute.`,
    `**Lésion vasculaire** : thrombose ou lésion pariétale d'une artère située dans le volume de la lésion. Doppler systématique.`,
    `**Pneumothorax** pour les cibles intercostales et thoraciques ; hématome ; infection (exceptionnelle, asepsie chirurgicale).`,
    `**Interférence avec un stimulateur cardiaque ou un DAI** : avis cardiologique préalable, RF bipolaire quand elle est possible.`,
  ],
  securite: [
    `**Consentement spécifique écrit**, distinct de celui du bloc : mentionner explicitement l'hypoesthésie durable attendue, la neurite des 2–6 premières semaines, la douleur de déafférentation, le taux d'échec, la durée limitée de l'effet (6–12 mois) et la possibilité de répéter.`,
    `**Bloc test préalable obligatoire.** Idéalement contrôlé (deux blocs avec des AL de durées différentes) sur les cibles rachidiennes ; un bloc unique bien documenté est le standard pragmatique en périphérie.`,
    `**Risque hémorragique ASRA-ESRA 2018** : cibles superficielles compressibles (géniculés, occipitaux, suprascapulaire, névromes, nerfs cutanés) = **faible risque**, pas d'interruption des antiagrégants. Cibles profondes ou non compressibles (pudendal, obturateur, paravertébral, branches sacrées) = risque intermédiaire à élevé, gestion des anticoagulants selon le tableau ASRA.`,
    `**Plaque de dispersion** : surface large, peau sèche, à distance des prothèses, contact vérifié avant chaque lésion.`,
    `**Doppler** sur tout le volume de la future lésion, pas seulement sur le trajet de l'aiguille.`,
    `**Stimulation motrice non négociable** avant toute lésion thermique.`,
    `Doses cumulées d'anesthésique local sur les séances multi-cibles ; intralipide disponible.`,
    `Traçabilité : cible, latéralité, longueur active, paramètres exacts (température, durée, tension, nombre de cycles), impédances, seuils de stimulation. C'est ce qui permet de comprendre un échec et de tenir un contrôle.`,
  ],

  suivi: `- **J0** : EN avant / 30 min / à la sortie ; cartographie de l'hypoesthésie ; force dans le territoire moteur adjacent. Consignes écrites remises, ordonnance d'antalgiques et de glace **donnée avant la sortie**.
- **J7–J15** : appel ou consultation courte — c'est la fenêtre de la neurite. Un patient plus douloureux à J7 après une RF thermique n'est pas un échec, c'est une évolution attendue.
- **4 semaines** : première évaluation d'efficacité (l'effet d'une PRF met 2 à 4 semaines à s'installer). EN moyenne et maximale, échelle fonctionnelle adaptée à la cible (WOMAC ou KOOS pour le genou, Constant ou QuickDASH pour l'épaule, HIT-6 pour les céphalées), consommation d'antalgiques, sommeil.
- **3 et 6 mois** : durée d'effet réelle. Une RF thermique efficace tient classiquement 6 à 12 mois, une PRF 3 à 6 mois.
- **Répétition** : possible à la récidive, avec une efficacité en général comparable à la première fois pour la RF thermique. Reposer la question du bloc test si la topographie de la douleur a changé.
- **Escalade** : échec d'une PRF bien conduite sur un nerf purement sensitif → discuter RF thermique ou cryoneurolyse ; échec des deux → réévaluer le diagnostic avant d'envisager la neuromodulation.
- **Registre** : consigner systématiquement cible, paramètres, EN à 4 semaines et à 3 mois. C'est la seule façon de savoir, dans deux ans, quelles cibles marchent réellement en HDJ.`,

  evidence: `- **RF thermique des branches médiales rachidiennes** : c'est la cible dont la preuve est la plus solide, mais elle repose sur des protocoles **radioscopiques** avec blocs diagnostiques contrôlés (recommandations de consensus multidisciplinaires : facettes lombaires, Cohen 2020, Reg Anesth Pain Med ; facettes cervicales, 2022). Transposer ces résultats à un guidage échographique est une extrapolation — probable pour le bloc (essai randomisé multicentrique de non-infériorité du bloc lombaire échoguidé vs radioscopique, 2023), **non démontrée** pour la neurotomie.
- **Nerfs géniculés** : la méta-analyse de 2025 (Osteoarthritis and Cartilage, 25 ECR, n ≈ 2 049) conclut à un bénéfice **modéré sur la douleur à 4 et 12 semaines** contre sham, **sans bénéfice à 24 et 48 semaines** et **sans gain fonctionnel à aucun temps**, avec une certitude de preuve jugée **basse à très basse** ; les auteurs déconseillent l'usage en routine en l'état. À mettre en balance avec l'essai randomisé multicentrique de RF refroidie qui rapporte une durabilité à 24 mois. Conclusion honnête : la RF des géniculés soulage à court terme, sa durabilité est disputée.
- **Protocole 3 vs 5 nerfs (Guven Kose, Pain Medicine 2023)** : essai randomisé comparatif — argument pour élargir la couverture des branches géniculées, sans preuve de supériorité définitive.
- **PRF** : la revue de synthèse la plus récente (Jitsinthunun, Pain Physician 2025, 80 articles) et une revue narrative de 2025 (Frontiers in Pain Research) concluent à un effet réel mais **hétérogène**, sur des essais de petite taille, avec un rapport bénéfice/risque favorable du fait de l'absence de destruction nerveuse. Il n'existe pas, à ce jour, de méta-analyse de haute qualité établissant la supériorité de la PRF sur le bloc seul de façon générale ; les signaux les plus constants concernent l'épaule (suprascapulaire), les occipitaux et le pudendal.
- **Branches sacrées latérales échoguidées** : série prospective de 46 patients après arthrodèse lombo-sacrée (Scientific Reports 2023) — 82,6 % de réponse satisfaisante à 12 mois, sans complication significative. Niveau de preuve : série, sans groupe contrôle.
- **Géométrie de lésion** : les données sont physiques et cadavériques, pas cliniques — mais elles sont robustes et convergentes (Pain Medicine 2014 sur les facteurs de taille de lésion ; Wondra 2024 pour le bipolaire). C'est le socle technique le plus solide de ce chapitre.
- **Trou de la littérature à assumer** : il n'existe pas d'essai randomisé comparant RF thermique, PRF et cryoneurolyse sur une même cible périphérique. Le choix entre les trois relève aujourd'hui du raisonnement (nerf sensitif pur ou mixte, réversibilité souhaitée, matériel disponible), pas de la preuve.`,

  references: [
    { verif: true, auteurs: 'Jitsinthunun T, Li C, Ng TK, Zinboonyahgoon N', titre: 'Pulsed radiofrequency treatment: evidence for and applications in chronic pain', revue: 'Pain Physician', annee: '2025;28(6):467-481', pmid: '41337760', type: 'revue', note: 'Synthèse la plus récente sur la PRF : 80 articles, applications par cible.' },
    { verif: true, titre: 'Efficacy of pulsed radiofrequency stimulation in patients with chronic pain: a narrative review', revue: 'Frontiers in Pain Research', annee: '2025', doi: '10.3389/fpain.2025.1544909', type: 'revue' },
    { verif: true, titre: 'Factors that affect radiofrequency heat lesion size', revue: 'Pain Medicine', annee: '2014;15(12):2020-36', url: 'https://academic.oup.com/painmedicine/article/15/12/2020/1817249', type: 'physique', note: 'Référence sur la taille de lésion en fonction du calibre, de la longueur active, de la température et de la durée.' },
    { verif: true, auteurs: 'Wondra JP, et al.', titre: 'Bipolar radiofrequency ablation lesion areas and confluence: an ex vivo study and technical report', revue: 'Pain Practice', annee: '2024', doi: '10.1111/papr.13323', type: 'étude ex vivo', note: 'Distances inter-électrodes maximales : < 12 mm (18 G), < 10 mm (20 G), < 8 mm (22 G).' },
    { verif: true, titre: 'Radiofrequency techniques for chronic pain', revue: 'BJA Education', annee: '2022', url: 'https://www.bjaed.org/article/S2058-5349(22)00117-2/fulltext', type: 'revue pédagogique', note: 'Bonne mise au point sur les seuils de stimulation (50 Hz 0,4–0,6 V ; 2 Hz 1–2 V) et la physique.' },
    { verif: true, auteurs: 'Cohen SP, Bhatia A, et al.', titre: 'Consensus practice guidelines on interventions for lumbar facet joint pain from a multispecialty, international working group', revue: 'Reg Anesth Pain Med', annee: '2020;45(6):424-467', type: 'reco', url: 'https://pure.johnshopkins.edu/en/publications/consensus-practice-guidelines-on-interventions-for-lumbar-facet-j/' },
    { verif: true, titre: 'Consensus practice guidelines on interventions for cervical spine (facet) joint pain from a multispecialty international working group', revue: 'Reg Anesth Pain Med', annee: '2022', pmid: '34764220', type: 'reco' },
    { verif: true, titre: 'Efficacy and safety of minimally invasive interventions targeting the genicular nerves for knee osteoarthritis: a meta-analysis', revue: 'Osteoarthritis and Cartilage', annee: '2025', url: 'https://www.oarsijournal.com/article/S1063-4584(25)00823-4/fulltext', type: 'méta-analyse', note: '25 ECR, n ≈ 2 049 : bénéfice à 4 et 12 semaines, aucun à 24 et 48 semaines ; certitude basse à très basse.' },
    { verif: true, auteurs: 'Guven Kose S, et al.', titre: 'Ultrasound-guided genicular nerve radiofrequency treatment: prospective randomized comparative trial of a 3-nerve protocol versus a 5-nerve protocol', revue: 'Pain Medicine', annee: '2023;24(7):758-767', pmid: '36869680', type: 'ECR' },
    { verif: true, titre: 'Ultrasound-guided lateral branch radiofrequency neurotomy for sacroiliac joint pain after lumbosacral spinal fusion surgery', revue: 'Scientific Reports', annee: '2023', doi: '10.1038/s41598-023-33960-z', type: 'série prospective', note: '46 patients, 82,6 % de réponse à 12 mois.' },
    { verif: true, titre: 'Comparison of the effectiveness of ultrasound-guided versus fluoroscopy-guided medial lumbar branch block on pain related to lumbar facet joints: a multicenter randomized controlled non-inferiority study', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10007783/', type: 'ECR de non-infériorité', note: 'Revue et année non relevées lors de la recherche. Porte sur le **bloc**, pas sur la neurotomie — ne pas surinterpréter.' },
    { verif: true, auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [
    { titre: 'Radiofrequency ablation — StatPearls', source: 'NCBI Bookshelf', url: 'https://www.ncbi.nlm.nih.gov/sites/books/NBK482387/', note: 'Texte de référence libre : physique, paramètres, complications' },
    { titre: 'Radiofrequency ablation and its role in treating chronic pain', source: 'ASRA News', url: 'https://asra.com/news-publications/asra-newsletter/newsletter-item/asra-news/2020/08/01/radiofrequency-ablation-and-its-role-in-treating-chronic-pain' },
    { titre: 'The role of sensory and motor stimulation in RF pain procedures', source: 'Polar Medical', url: 'https://www.polarmedical.co.uk/the-role-of-sensory-and-motor-stimulation-in-rf-pain-procedures/', note: 'Rappel pratique des seuils' },
    { titre: 'Ultrasound-guided third occipital nerve and cervical medial branch nerve blocks', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-third-occipital-nerve-and-cervical-medial-branch-nerve-blocks/', note: 'Sono-anatomie des cibles cervicales, préalable à toute PRF cervicale' },
  ],

  scenes: [
    {
      id: 'rf-geometrie', section: 'sonoanatomie', titre: 'Géométrie de la lésion selon l\'orientation de l\'aiguille',
      legende: 'Coupe longitudinale du nerf. À gauche, électrode perpendiculaire : la lésion, centrée sur l\'extrémité active et arrêtée à la pointe, ne fait qu\'effleurer le nerf. À droite, électrode parallèle : la lésion englobe un segment de nerf égal à la longueur active. C\'est le seul argument qui compte dans le choix de l\'axe de ponction.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Coupe longitudinale du nerf', type: 'schéma de principe' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 318 L0 318 Z', label: 'Plan musculaire traversé', at: [96, 100], opacity: 0.3 });
        S.bone({ path: 'M0 345 Q320 341 640 343', label: 'Plan osseux', at: [80, 372], ldy: 0 });
        S.nerve({ path: 'M0 246 L640 246 L640 268 L0 268 Z', label: 'Nerf cible (coupe longitudinale)', lx: 320, ly: 300, small: true });
        S.region({ x: 186, y: 224, rx: 24, ry: 32, fill: '#ff7a45', opacity: 0.4, stroke: '#ffb08a' });
        S.region({ path: 'M420 244 Q424 216 470 212 Q526 208 553 221 Q570 232 557 251 Q537 276 470 278 Q428 274 420 244 Z', fill: '#ff7a45', opacity: 0.4, stroke: '#ffb08a' });
        S.label({ x: 246, y: 196, text: 'Lésion 80–90 °C', anchor: 'start', small: true, cls: 'lbl-target', lead: [212, 214] });
        S.label({ x: 16, y: 330, text: 'Perpendiculaire\nun point du nerf, ou rien', anchor: 'start', small: true, cls: 'lbl-target' });
        S.label({ x: 588, y: 330, text: 'Parallèle\n8–10 mm de nerf dans la lésion', anchor: 'end', small: true, cls: 'lbl-target' });
        S.needle({ from: [120, 60], to: [196, 250], label: 'Électrode perpendiculaire' });
        S.needle({ from: [636, 196], to: [430, 242], label: 'Électrode parallèle' });
      },
    },
    {
      id: 'rf-parallele', section: 'technique', titre: 'Placement parallèle de l\'électrode le long du nerf, au contact osseux',
      legende: 'Cible type « nerf sur un plan osseux » (géniculé, branche articulaire). L\'aiguille arrive dans le plan, très à plat, contacte l\'os puis recule d\'1 mm : l\'extrémité active de 10 mm se retrouve couchée le long du nerf. Stimulation sensitive 50 Hz reproduisant la douleur à < 0,5 V, stimulation motrice 2 Hz muette jusqu\'à 1,5–2 V, puis 1–2 mL de lidocaïne 2 % avant la montée en température.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Coupe longitudinale, aiguille dans le plan', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 240 L0 252 Z', label: 'Muscle', at: [70, 162], opacity: 0.38 });
        S.fascia({ points: [[0, 252], [640, 240]], width: 1.5 });
        S.nerve({ path: 'M0 290 L640 268 L640 286 L0 308 Z', label: 'Nerf cible', lx: 24, ly: 264, anchor: 'start', lead: [120, 292] });
        S.artery({ path: 'M0 324 L640 302 L640 316 L0 338 Z', label: 'Artère satellite (Doppler) — hors du volume de lésion', lx: 24, ly: 372, anchor: 'start', lead: [150, 332] });
        S.bone({ path: 'M0 356 Q320 348 640 342', label: 'Corticale — contact puis retrait 1 mm', at: [626, 388], anchor: 'end', ldy: 0 });
        S.region({ path: 'M288 264 Q330 250 412 246 Q450 248 452 268 Q454 292 406 302 Q330 312 292 296 Q276 282 288 264 Z', fill: '#ff7a45', opacity: 0.38, stroke: '#ffb08a' });
        S.region({ path: 'M300 274 L404 257 L406 265 L302 282 Z', fill: '#ffd166', opacity: 0.9 });
        S.target({ x: 302, y: 278, r: 13 });
        S.label({ x: 626, y: 330, text: 'Lésion 80–90 °C · 60–90 s', anchor: 'end', small: true, cls: 'lbl-target', lead: [452, 288] });
        S.label({ x: 16, y: 100, text: 'Stimulation 50 Hz : douleur reproduite < 0,5 V', anchor: 'start', small: true });
        S.label({ x: 16, y: 118, text: 'Stimulation 2 Hz : aucune réponse motrice < 2 V', anchor: 'start', small: true });
        S.label({ x: 250, y: 222, text: 'Extrémité active 10 mm', anchor: 'end', small: true, cls: 'lbl-target', lead: [330, 266] });
        S.label({ x: 626, y: 166, text: 'Électrode RF 22 G', anchor: 'end', small: true, cls: 'lbl-needle' });
        S.needle({ from: [636, 224], to: [300, 278] });
        S.spread({ x: 380, y: 240, rx: 44, ry: 10, label: '1–2 mL lidocaïne' });
      },
    },
  ],

  checklist: [
    'Bloc test tracé, positif (≥ 50 %, idéalement ≥ 80 % pour une thermique), et images du repérage archivées',
    'Consentement spécifique RF signé : hypoesthésie durable, neurite de 2–6 semaines, déafférentation, échec possible, effet limité dans le temps',
    'Stimulateur cardiaque / DAI recherché et géré (avis cardiologique, bipolaire si possible)',
    'Plaque de dispersion posée sur une surface large et sèche, à distance de toute prothèse, contact vérifié',
    'Générateur testé : impédance dans les valeurs attendues, stimulateur fonctionnel, thermocouple apparié à la canule',
    'Longueur active choisie et notée ; Doppler sur tout le volume de la future lésion',
    'Stimulation sensitive 50 Hz puis motrice 2 Hz réalisées et consignées avant toute lésion thermique',
    'Paramètres exacts tracés : température, durée, tension, nombre de cycles, nombre de lésions par cible',
    'Ordonnance d\'antalgiques et consignes écrites sur la douleur de rebond remises avant la sortie',
  ],
});
