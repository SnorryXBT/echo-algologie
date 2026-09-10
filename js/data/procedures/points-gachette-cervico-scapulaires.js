/* Fiche : points gâchettes myofasciaux cervico-scapulaires sous échographie. */
ECHO.register({
  id: 'points-gachette-cervico-scapulaires',
  titre: 'Points gâchettes cervico-scapulaires — dry needling et infiltration échoguidés',
  titreCourt: 'Points gâchettes cervico-scapulaires',
  en: 'Ultrasound-guided myofascial trigger point dry needling and injection — upper trapezius, levator scapulae, rhomboids, splenius, infraspinatus, subscapularis',
  region: 'tete-cou',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: 'Faible à modérée : bénéfice antalgique à court terme démontré contre placebo pour le needling, sans supériorité établie d\'un produit ; preuve négative ou non concluante pour la toxine botulique',
  motsCles: ['syndrome myofascial', 'trigger point', 'dry needling', 'puncture sèche', 'bande tendue', 'trapèze supérieur', 'élévateur de la scapula', 'rhomboïdes', 'splénius', 'infra-épineux', 'sous-scapulaire', 'toxine botulique', 'cervicalgie', 'pneumothorax', 'élastographie'],
  maj: '2026-09',
  resume: 'Le syndrome myofascial cervico-scapulaire est un diagnostic **clinique** : bande tendue palpable, nodule exquisément douloureux, douleur référée reproduite, réponse de secousse locale. L\'échographie n\'établit pas le diagnostic — aucun critère échographique n\'est validé comme standard de référence. Elle sert à trois choses, et ce sont trois bonnes raisons : voir la **plèvre**, qui est à 2–4 cm sous le trapèze et les rhomboïdes et dont la ponction est la complication grave et régulièrement publiée du dry needling ; atteindre les muscles **profonds ou inaccessibles à la palpation** (sous-scapulaire, splénius, élévateur de la scapula sous le trapèze) ; et contrôler la **profondeur et l\'obliquité** de l\'aiguille. Sur le fond : le needling — sec ou avec anesthésique local — soulage à court terme ; l\'anesthésique local réduit surtout la douleur post-ponction ; le corticoïde n\'a pas sa place dans le muscle ; la toxine botulique n\'a pas fait la preuve de sa supériorité sur le placebo dans cette indication et reste hors AMM en France.',

  flash: {
    position: 'ventral', positionNote: 'décubitus ventral bras le long du corps pour trapèze, rhomboïdes, splénius, infra-épineux ; assis penché en avant possible ; décubitus latéral bras en abduction-rotation externe pour le sous-scapulaire',
    sonde: 'lineaire', sondeNote: '6–15 MHz, profondeur adaptée au muscle : 2–3 cm (trapèze) à 5–6 cm (sous-scapulaire, région inter-scapulaire épaisse) ; **la plèvre doit être identifiée avant toute ponction du plan postérieur du thorax**',
    approche: 'in-plane', approcheNote: 'in-plane, **trajet le plus tangentiel possible au plan costal** — jamais perpendiculaire à la paroi thoracique',
    aiguille: 'Dry needling : aiguille d\'acupuncture 0,25–0,30 mm × 40–60 mm. Injection : 25–27 G 40–50 mm (jusqu\'à 70–90 mm pour le sous-scapulaire)',
    cible: 'Nodule hypoéchogène au sein de la bande tendue, **au-dessus du plan costal et de la plèvre** ; critère de fin : réponses de secousse locale obtenues puis épuisées, ou nappe d\'AL englobant le nodule',
    injectat: 'Rien (dry needling) ou **lidocaïne 0,5–1 %, 0,5 à 2 mL par point** — pas de corticoïde',
    duree: '10–20 min selon le nombre de points',
  },

  indications: [
    '**Syndrome myofascial cervico-scapulaire** documenté cliniquement (bande tendue, point exquis, douleur référée reproductible), résistant à 4–6 semaines de traitement conservateur : étirements, correction posturale et ergonomique, traitement manuel, activité physique adaptée.',
    '**Cervicalgie chronique avec composante myofasciale dominante**, souvent chez le patient de bureau ou porteur de charges : trapèze supérieur et élévateur de la scapula en premier lieu.',
    '**Céphalée de tension et céphalée cervicogénique** : points gâchettes du trapèze supérieur, du splénius de la tête et du semi-épineux, dont la douleur référée est typiquement temporo-occipitale — le needling est un adjuvant, pas un traitement de fond.',
    '**Douleur inter-scapulaire** (rhomboïdes, trapèze moyen) : c\'est précisément la localisation où la plèvre est la plus proche et où l\'échoguidage change le rapport bénéfice/risque.',
    '**Épaule douloureuse avec composante myofasciale** : infra-épineux (douleur référée profonde antérieure du bras, souvent prise pour une tendinopathie) et **sous-scapulaire** (pseudo-capsulite avec limitation de rotation externe) — ce dernier n\'est pas atteignable à la palpation, l\'échoguidage y est indispensable.',
    '**Point gâchette persistant après un geste articulaire réussi** : composante myofasciale résiduelle qui fait conclure à tort à l\'échec d\'une infiltration d\'épaule ou d\'une facettectomie cervicale.',
    '**Valeur diagnostique** : reproduire puis abolir la douleur référée du patient confirme l\'origine myofasciale et réoriente la prise en charge — information souvent plus utile que l\'effet antalgique lui-même.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides (le dry needling reste alors possible), cellulite ou lymphœdème du territoire (post-curage axillaire notamment).',
    '**Relatives** : hémostase — geste **superficiel et compressible**, à **faible risque hémorragique** au sens des recommandations ASRA-ESRA 2018 sur les procédures de douleur interventionnelle ; pas d\'interruption systématique des antiagrégants. Sous anticoagulant curatif, préférer une aiguille fine, limiter le nombre de points et comprimer.',
    '**Insuffisance respiratoire sévère, emphysème, pneumonectomie ou pneumothorax controlatéral** : un pneumothorax même partiel y serait mal toléré — indication à peser, ponction strictement tangentielle, ou renoncer.',
    'Patient très maigre, morphotype longiligne, région inter-scapulaire : la plèvre peut être à moins de 2 cm. **Mesurer la profondeur avant de choisir la longueur de l\'aiguille**, pas l\'inverse.',
    'Anxiété majeure, antécédent de malaise vagal : la réponse de secousse locale est désagréable et fréquemment vagale — installer en décubitus, jamais assis sans surveillance.',
    'Grossesse : pas de contre-indication au needling local, mais différer toute toxine botulique.',
    '**Corticoïdes intramusculaires : à proscrire.** Aucun bénéfice démontré dans le syndrome myofascial, myotoxicité et atrophie sous-cutanée documentées. Si un corticoïde est envisagé, c\'est que le diagnostic est autre.',
  ],
  alternatives: 'Le needling n\'est jamais le traitement : c\'est une fenêtre. Le traitement du syndrome myofascial est l\'**identification et la suppression du facteur d\'entretien** (posture de travail, port de charges, dysfonction articulaire cervicale ou scapulaire sous-jacente, trouble du sommeil, carence martiale ou vitaminique, hypothyroïdie, anxiété), associé à un programme d\'**étirements et de renforcement** progressif. Autres options : traitement manuel et techniques de pression ischémique, thérapies physiques (chaleur, TENS, ondes de choc radiales — données limitées), traitement pharmacologique court (AINS, myorelaxant sur quelques jours), et prise en charge de la douleur chronique quand le tableau est diffus (penser à la fibromyalgie devant des points multiples, bilatéraux et symétriques : la réponse au needling y est médiocre et la stratégie est différente). Un patient qui revient tous les mois pour la même série de points n\'a pas un problème d\'aiguille, il a un facteur d\'entretien non traité — c\'est le point sur lequel il faut être honnête avec lui.',

  anatomie: `Les muscles cervico-scapulaires se superposent en trois plans, et c\'est cette superposition qui rend la palpation peu fiable et l\'échographie utile.

| Muscle | Plan | Douleur référée typique | Ce qu\'il y a en dessous |
|---|---|---|---|
| **Trapèze supérieur** | Superficiel | Cervicalgie postéro-latérale, tempe, angle mandibulaire | Élévateur de la scapula, splénius, supra-épineux ; **apex pulmonaire dans sa partie médiale et basse** |
| **Élévateur de la scapula** | Sous le trapèze | Angle supéro-interne de la scapula, base du cou, torticolis | Rhomboïdes, paroi thoracique |
| **Rhomboïdes** | Sous le trapèze moyen | Douleur inter-scapulaire profonde | Muscles intercostaux, côtes et **plèvre — à 2 à 4 cm de la peau** |
| **Splénius de la tête / du cou** | Sous le trapèze, paravertébral | Vertex, région rétro-orbitaire, occiput | Semi-épineux, massif articulaire cervical |
| **Infra-épineux** | Fosse infra-épineuse | Face antérieure profonde de l\'épaule et du bras (mime une tendinopathie) | **Plancher osseux de la scapula** — pas de plèvre en regard |
| **Sous-scapulaire** | Face antérieure de la scapula | Épaule postérieure, bras, poignet ; limitation de rotation externe | Face antérieure de la scapula ; **paroi thoracique et plèvre en dedans du bord médial** |

### Ce qui compte pour le geste
- **La plèvre est le sujet de cette fiche.** Sous le trapèze et les rhomboïdes, la paroi thoracique est mince : côtes, muscles intercostaux, puis ligne pleurale. Le pneumothorax après puncture sèche est régulièrement publié, y compris entre des mains expérimentées. La parade n\'est pas de « faire attention » mais de **voir la plèvre avant de piquer et de ne jamais orienter l\'aiguille perpendiculairement à la paroi**.
- **Le point gâchette est un diagnostic de doigt, pas d\'image.** À l\'échographie, on décrit un **nodule hypoéchogène** de quelques millimètres au sein d\'une bande tendue, plus rigide en élastographie et à amplitude de vibration réduite en sonoélastographie vibratoire. Ces travaux sont convaincants sur le plan physiopathologique mais **ne constituent pas un critère diagnostique validé** : la reproductibilité inter-opérateur est médiocre et il n\'existe pas de standard de référence. Ne pas fonder une indication sur une image.
- **Vaisseaux du plan profond** : artère cervicale transverse et **artère dorsale de la scapula** cheminent sous le trapèze, le long du bord médial de la scapula, souvent au contact des rhomboïdes et de l\'élévateur — Doppler avant les points médiaux.
- **Nerf accessoire spinal (XI)** : il chemine sur la face profonde du trapèze, dans le triangle postérieur ; une ponction agressive répétée au même endroit peut le léser. Rester dans le ventre musculaire, ne pas travailler au bord postérieur du SCM.
- **Nerf dorsal de la scapula** : sous l\'élévateur de la scapula et les rhomboïdes, le long du bord médial ; sa lésion donne une gêne inter-scapulaire chronique — c\'est un diagnostic différentiel, et une complication potentielle.
- Profondeurs usuelles : trapèze supérieur **0,5–1,5 cm** ; élévateur **1,5–3 cm** ; rhomboïdes **1,5–2,5 cm** ; plèvre inter-scapulaire **2,5–4 cm** ; sous-scapulaire **4–6 cm**.`,

  installation: {
    patient: `**Décubitus ventral**, bras le long du corps, front sur une têtière ou un coussin en U, pour le trapèze, les rhomboïdes, le splénius et l\'infra-épineux. Un coussin sous le thorax dégage la région inter-scapulaire. La position assise penchée en avant, sur un dossier, est possible mais **expose au malaise vagal** : la réserver aux patients déjà traités et à un seul point.

**Sous-scapulaire** : décubitus latéral, côté à traiter vers le haut, bras en abduction et rotation externe (main sur la tête) pour dégager la face antérieure de la scapula ; ou décubitus dorsal avec abduction-rotation externe.

Marquer au feutre les points repérés à la palpation **avant** l\'installation et la désinfection : en décubitus ventral, les repères se déplacent. Prévenir le patient : la **réponse de secousse locale** (contraction brève et involontaire) est recherchée, elle est brève et désagréable ; une **courbature de 24 à 72 h** est la règle, pas une complication.`,
    operateur: `Opérateur **du côté à traiter**, écran en face. Sonde posée **perpendiculairement aux fibres** du muscle visé pour identifier la bande tendue en coupe transversale, puis tournée dans l\'axe des fibres pour le geste.

Ponction **in-plane, avec le trajet le plus tangentiel possible** : l\'aiguille doit rester parallèle au plan costal, jamais dirigée vers la profondeur thoracique. Sur la région inter-scapulaire, la règle est simple — **l\'aiguille doit entrer par un bord latéral de la sonde et progresser à moins de 30° de l\'horizontale**.`,
    sonde: `- Linéaire **6–15 MHz**, preset MSK. Profondeur réglée d\'emblée pour **inclure le plan costal et la plèvre** dans l\'image, même si le point ciblé est superficiel : c\'est la profondeur de sécurité, pas la profondeur de confort.
- **Mesurer la distance peau–plèvre** avant de choisir la longueur d\'aiguille, et le noter. Sur un sujet mince, elle peut être inférieure à 20 mm.
- **Doppler couleur** sur le trajet : artère cervicale transverse, artère dorsale de la scapula, artères intercostales.
- Sonde convexe 2–5 MHz utile pour le sous-scapulaire ou un morphotype très épais.
- Compression douce et alternée : le nodule est plus rigide que le muscle voisin et se déforme moins — comparaison utile en l\'absence d\'élastographie.`,
  },

  reperage: [
    { titre: 'Palper d\'abord, imager ensuite', texte: 'Identifier cliniquement la **bande tendue** (corde palpable dans l\'axe des fibres), le **nodule exquis** et la **douleur référée reproduite**. Marquer au feutre. L\'échographie vient **confirmer la profondeur et la sécurité**, elle ne remplace pas ce temps clinique.' },
    { titre: 'Coupe transversale au point marqué', texte: 'Sonde perpendiculaire aux fibres : on identifie les plans successifs — peau, graisse, **trapèze**, fascia, **élévateur de la scapula ou rhomboïde**, fascia, plan costal. Le nodule apparaît comme une **zone hypoéchogène de 3–10 mm** au sein d\'une bande d\'aspect plus dense — inconstamment visible.' },
    { titre: 'Descendre jusqu\'à la plèvre — étape obligatoire', texte: 'Augmenter la profondeur jusqu\'à voir les **côtes** (arcs hyperéchogènes avec cône d\'ombre) et, dans l\'espace intercostal, la **ligne pleurale** animée du glissement respiratoire. **Mesurer la distance peau–plèvre** et l\'annoncer à voix haute. Aucun point postérieur du thorax ne se pique sans cette mesure.' },
    { titre: 'Doppler', texte: 'Balayer la trajectoire prévue : **artère cervicale transverse** et **artère dorsale de la scapula** longent le bord médial de la scapula sous le trapèze ; les artères intercostales cheminent au bord inférieur des côtes.' },
    { titre: 'Cas du sous-scapulaire', texte: 'Bras en abduction-rotation externe : la sonde, placée dans le creux axillaire ou en arrière du bord latéral de la scapula, montre la **face antérieure (costale) de la scapula** et le corps musculaire strié. Repérer le **paquet vasculo-nerveux axillaire** et la **paroi thoracique en dedans** : on ne va jamais en dedans du bord médial du muscle.' },
    { titre: 'Si on ne trouve pas', texte: 'Nodule invisible : **c\'est fréquent et ce n\'est pas un obstacle**. On traite le point palpé, à la profondeur repérée, dans le ventre musculaire identifié à l\'écran. L\'objectif de l\'image est ici la sécurité et la localisation du plan, pas la visualisation du nodule. Si la plèvre n\'est pas identifiable (obésité, emphysème, mauvaise fenêtre), **ne pas piquer ce point** : choisir un point plus latéral, sur un plan osseux (fosse infra-épineuse, épine de la scapula), ou renoncer.' },
  ],

  sonoanatomie: [
    { structure: 'Trapèze', aspect: 'Muscle superficiel mince, strié, fibres obliques', repere: 'Premier plan sous la graisse ; épaisseur 0,5–1,5 cm' },
    { structure: 'Fascia inter-musculaire', aspect: 'Fine ligne hyperéchogène séparant les plans', repere: 'Permet de compter les couches et de savoir dans quel muscle on est' },
    { structure: 'Élévateur de la scapula / rhomboïdes', aspect: 'Muscles du deuxième plan, fibres obliques ou transversales', repere: 'Sous le trapèze ; cible fréquente et non palpable de façon sélective' },
    { structure: 'Nodule de point gâchette', aspect: 'Plage hypoéchogène de 3–10 mm dans une bande d\'aspect plus dense, moins déformable à la compression', repere: '**Non spécifique et inconstant** — jamais un critère diagnostique à lui seul' },
    { structure: 'Côtes', aspect: 'Arcs hyperéchogènes avec cône d\'ombre franc', repere: 'Le plan de sécurité : rester au-dessus' },
    { structure: 'Muscles intercostaux', aspect: 'Deux à trois fines couches striées entre les côtes', repere: 'Séparent le plan musculaire de la plèvre' },
    { structure: 'Ligne pleurale', aspect: 'Ligne hyperéchogène animée du glissement respiratoire, avec artefacts en queue de comète', repere: '**La structure à identifier avant toute ponction** ; noter sa profondeur' },
    { structure: 'Artère dorsale de la scapula / cervicale transverse', aspect: 'Petit signal pulsatile sous le trapèze, le long du bord médial de la scapula', repere: 'Doppler avant les points médiaux' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist. Points marqués au feutre avant installation. Désinfection large. **Profondeur peau–plèvre mesurée et notée**, longueur d\'aiguille choisie en conséquence. Pour le dry needling : aiguille d\'acupuncture 0,25–0,30 mm × 40–60 mm, avec tube guide. Pour l\'injection : 25–27 G 40–50 mm et seringue de 2–5 mL de lidocaïne 0,5–1 %.' },
    { titre: 'Ponction in-plane, tangentielle', texte: 'Entrer par un **bord latéral de la sonde**, angle **< 30°** par rapport au plan cutané, aiguille suivie sur toute sa longueur. Progresser jusqu\'au nodule ou, à défaut, jusqu\'à la profondeur du point palpé dans le ventre musculaire visé. **Ne jamais orienter la pointe vers la profondeur thoracique**, et garder en permanence le plan costal visible sous la pointe.' },
    { titre: 'Dry needling — obtenir les réponses de secousse locale', texte: 'Technique de va-et-vient rapide (« fast-in, fast-out ») sur quelques millimètres, en éventail dans la bande tendue, **sans retirer l\'aiguille du plan sous-cutané** entre les passages. Chaque **réponse de secousse locale** (contraction brève et involontaire) est le repère : les rechercher jusqu\'à ce qu\'elles s\'épuisent, généralement 3 à 10 secousses. Prévenir avant : c\'est bref, c\'est désagréable, c\'est le signe que l\'on est au bon endroit.' },
    { titre: 'Injection d\'anesthésique local (variante)', texte: 'Même repérage, même trajet. Après aspiration, injecter **0,5 à 2 mL de lidocaïne 0,5–1 %** dans le nodule, en fractionnant sur 2–3 positions de la pointe. La nappe doit rester **dans le muscle**, au-dessus du plan costal. L\'anesthésique local ne fait pas mieux que la puncture sèche sur la douleur à distance, mais il **réduit nettement la courbature post-ponction** : c\'est son intérêt principal.' },
    { titre: 'Critère de fin', texte: 'Dry needling : épuisement des réponses de secousse locale et détente palpable de la bande tendue. Injection : nappe anéchogène englobant le nodule, sans diffusion vers le plan costal. Dans les deux cas : **reproduction puis abolition de la douleur référée** du patient — c\'est le meilleur critère, et il a une valeur diagnostique.' },
    { titre: 'Nombre de points par séance', texte: 'Se limiter à **2 à 4 points par séance**, en commençant par le point « clé » (celui qui reproduit le mieux la douleur du patient). Traiter huit points d\'un coup garantit une courbature majeure, une mauvaise tolérance et l\'impossibilité de savoir quel point était efficace.' },
    { titre: 'Après le geste', texte: 'Compression 1–2 min par point. **Surveillance 30 minutes avec consigne explicite** : toute douleur thoracique, dyspnée ou toux doit être signalée immédiatement — un pneumothorax peut se révéler de façon **retardée, jusqu\'à plusieurs heures**. Consignes écrites remises. Étirements du muscle traité montrés et faits sur place, application de chaleur, hydratation, reprise d\'activité normale, éviter l\'effort intense 24 h.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Puncture sèche (dry needling) | **Aucun produit** | — | Aussi efficace que l\'injection d\'AL sur la douleur à distance dans les essais comparatifs ; plus de courbature post-ponction |
| Injection d\'anesthésique local | **Lidocaïne 0,5–1 %** (sans adrénaline) | **0,5–2 mL par point**, 2 à 4 points par séance | Le choix par défaut quand on veut limiter la courbature. Procaïne 1 % utilisée dans les schémas historiques |
| Point profond ou peu accessible (sous-scapulaire, splénius) | Lidocaïne 0,5 % | 1–2 mL | Le volume aide à localiser la pointe (hydrolocalisation) autant qu\'à traiter |
| **Corticoïde** | — | — | **À proscrire** : aucun bénéfice démontré dans le syndrome myofascial, myotoxicité, atrophie sous-cutanée si reflux. Si l\'on pense corticoïde, c\'est que le diagnostic n\'est pas myofascial |
| Toxine botulique de type A | Hors AMM en France dans cette indication | — | Voir ci-dessous |

**Doses maximales d\'AL** : lidocaïne **4,5 mg/kg** (7 mg/kg adrénalinée) — soit environ 300 mg, c\'est-à-dire 60 mL de lidocaïne 0,5 % chez un adulte de 70 kg. On en est très loin avec 4 points à 2 mL, mais **additionner** si l\'on associe dans la même séance blocs cervicaux et infiltrations.

**Toxine botulique — le point à connaître.** En France, l\'AMM de la toxine botulique de type A couvre notamment la **dystonie cervicale** et la **migraine chronique** (protocole PREEMPT, environ 155 à 195 unités d\'onabotulinumtoxinA réparties par 5 unités sur des sites fixes incluant les trapèzes et les paravertébraux cervicaux — **à confirmer sur le RCP en vigueur avant tout usage**). Elle **n\'a pas d\'AMM dans le syndrome myofascial**, et la littérature ne plaide pas pour un usage large : plusieurs essais randomisés, dont un essai contrôlé dans la douleur myofasciale cervico-thoracique, n\'ont **pas montré de supériorité sur le placebo**, et la revue Cochrane sur la toxine botulique dans les syndromes myofasciaux conclut à l\'absence de preuve suffisante. À réserver, le cas échéant, à des situations très sélectionnées, en RCP, avec information écrite sur le caractère hors AMM.`,

  variantes: [
    { titre: 'Sous-scapulaire — le point qu\'on ne peut pas palper', texte: `Décubitus latéral ou dorsal, bras en abduction-rotation externe. Sonde dans le creux axillaire ou en arrière du bord latéral de la scapula, montrant la **face antérieure (costale) de la scapula** et le corps du sous-scapulaire. Aiguille 70–90 mm in-plane, progression jusqu\'au contact du plan osseux scapulaire, retrait de 2–3 mm, puis needling ou injection de 1–2 mL.

**Règle de sécurité** : rester **en dehors du bord médial de la scapula**, l\'os servant de plancher protecteur ; en dedans, il n\'y a plus que la paroi thoracique. Repérer le paquet vasculo-nerveux axillaire au Doppler. Indication typique : pseudo-capsulite avec limitation de rotation externe et douleur postérieure d\'épaule, souvent après immobilisation.` },
    { titre: 'Infra-épineux — la cible la plus sûre', texte: 'Fosse infra-épineuse : le plancher osseux de la scapula est immédiatement sous le muscle, il n\'y a **pas de plèvre en regard**. C\'est le point idéal pour débuter en échoguidage. Sonde parallèle à l\'épine, aiguille in-plane, contact osseux possible sans danger. Douleur référée caractéristique : face antérieure profonde de l\'épaule et du bras, régulièrement confondue avec une tendinopathie de la coiffe.' },
    { titre: 'Hydrodissection du plan inter-fascial', texte: 'Chez les patients où la douleur semble liée à une **adhérence entre plans musculaires** (trapèze / élévateur, trapèze / rhomboïde) plutôt qu\'à un nodule, injecter 5–10 mL de sérum physiologique ou de dextrose 5 % dans le plan fascial pour le décoller. Rationnel emprunté à l\'hydrodissection nerveuse, **données très limitées dans cette indication — à confirmer**, mais geste à faible risque et sans corticoïde.' },
    { titre: 'Association aux blocs cervicaux', texte: 'Un syndrome myofascial cervico-scapulaire coexiste très souvent avec une arthropathie facettaire cervicale ou une névralgie occipitale. Traiter les deux dans la même séance est efficace mais **rend l\'évaluation ininterprétable** : si l\'objectif est diagnostique, faire un geste à la fois et évaluer entre les deux. Si l\'objectif est thérapeutique et que le diagnostic est fait, l\'association est légitime — en additionnant les doses d\'AL et en l\'écrivant.' },
  ],

  pearls: [
    '**Mesurer et annoncer la distance peau–plèvre** avant chaque point postérieur du thorax. C\'est le geste qui distingue une puncture échoguidée d\'une puncture avec une sonde à côté.',
    'Aiguille **tangentielle, < 30°**, entrée par un bord latéral de la sonde : la géométrie fait la sécurité, pas la prudence.',
    'Commencer par le **point clé** — celui qui reproduit le mieux la douleur du patient — et se limiter à 2–4 points : on saura ce qui a marché.',
    'Le **sous-scapulaire** et le **splénius** sont les deux muscles que l\'échographie permet d\'atteindre et que la palpation ne permet pas : c\'est là que le geste apporte le plus.',
    'Prévenir de la **courbature de 24 à 72 h** : sans cette information, le patient interprète la douleur post-ponction comme un échec ou une complication.',
    'La reproduction puis l\'abolition de la douleur référée est le meilleur critère de succès — **et une information diagnostique** qu\'aucun examen d\'imagerie ne fournira.',
    'Un patient qui revient tous les mois pour les mêmes points a un **facteur d\'entretien** non traité (poste de travail, sommeil, dysfonction articulaire, carence, anxiété). Le lui dire, plutôt que de reprogrammer une séance.',
  ],
  pieges: [
    '**Piquer perpendiculairement** au plan thoracique : c\'est le mécanisme du pneumothorax, y compris avec une aiguille d\'acupuncture fine.',
    'Régler la profondeur sur la cible et non sur la plèvre : on ne voit pas ce qu\'on ne cherche pas.',
    'Traiter huit points en une séance : courbature majeure, patient découragé, et aucune information sur ce qui a fonctionné.',
    'Prendre un nodule hypoéchogène pour une preuve : l\'image n\'est **ni sensible ni spécifique** et ne remplace pas la palpation.',
    'Injecter un corticoïde dans le muscle : sans bénéfice, avec une myotoxicité et un risque d\'atrophie cutanée.',
    'Méconnaître une **fibromyalgie** (points multiples, bilatéraux, symétriques, fatigue, troubles du sommeil) : le needling y donne des résultats médiocres et retarde la bonne stratégie.',
    'Laisser repartir sans consigne écrite sur le pneumothorax : il peut se révéler plusieurs heures après le geste.',
    'Piquer en dedans du bord médial de la scapula en visant le sous-scapulaire : il n\'y a plus d\'os sous l\'aiguille.',
  ],
  complications: [
    '**Pneumothorax** — la complication grave, régulièrement publiée après puncture sèche du trapèze, des rhomboïdes et des paravertébraux thoraciques. Signes : douleur thoracique, dyspnée, toux, parfois retardées de plusieurs heures. CAT : arrêt du geste, position demi-assise, O₂, radiographie ou échographie thoracique (abolition du glissement pleural, point poumon), avis pneumologique ou chirurgical. **Prévention** : repérage pleural systématique, aiguille tangentielle, longueur adaptée.',
    '**Courbature post-ponction** de 24 à 72 h : très fréquente, attendue, majorée par la puncture sèche par rapport à l\'injection d\'AL. CAT : chaleur, étirements doux, antalgique de palier 1. Elle doit être annoncée avant.',
    '**Malaise vagal** pendant la réponse de secousse locale : fréquent, surtout en position assise. CAT : décubitus, jambes surélevées ; prévention par l\'installation en décubitus ventral.',
    '**Hématome intramusculaire** : bénin ; compression. Plus fréquent sous anticoagulant ou après un needling en éventail appuyé.',
    '**Lésion nerveuse** : nerf accessoire spinal (faiblesse du trapèze), nerf dorsal de la scapula (gêne inter-scapulaire chronique). Rares, favorisées par des ponctions répétées au même point et par une progression aveugle.',
    '**Ponction vasculaire** (artère dorsale de la scapula, artère cervicale transverse, artère intercostale) : Doppler préalable.',
    '**Infection** : exceptionnelle avec une asepsie correcte ; y penser devant une douleur croissante avec fièvre au-delà de 72 h.',
    '**Effets de la toxine botulique** si elle est utilisée : faiblesse du muscle injecté, dysphagie par diffusion cervicale, ptosis. Argument supplémentaire pour ne pas y recourir en routine.',
  ],
  securite: [
    '**Faible risque hémorragique (ASRA-ESRA 2018)** : site superficiel et compressible ; pas d\'interruption systématique des antiagrégants, anticoagulants au cas par cas.',
    '**Repérage pleural systématique et mesure de la profondeur peau–plèvre** avant tout point postérieur du thorax ; profondeur d\'image réglée pour inclure le plan costal.',
    '**Trajet tangentiel, angle < 30°, aiguille visible sur toute sa longueur.** Si on perd le corps de l\'aiguille, on s\'arrête.',
    '**Longueur d\'aiguille choisie après la mesure**, jamais avant : une 60 mm dans une paroi de 25 mm est une erreur de conception, pas un accident.',
    'Doppler couleur sur la trajectoire (artère dorsale de la scapula, cervicale transverse, intercostales).',
    'Limiter à 2–4 points par séance ; ne jamais piquer un point dont la plèvre n\'est pas identifiable.',
    '**Consignes écrites de pneumothorax** remises à chaque patient : douleur thoracique, essoufflement ou toux dans les heures suivant le geste → consultation en urgence. Surveillance 30 min avant la sortie.',
    'Tracer : muscles traités, nombre de points, profondeur peau–plèvre mesurée, technique (sèche ou AL), volume total, réponses de secousse obtenues.',
  ],

  suivi: `- **J0** : EN avant / à 30 min ; **douleur référée reproduite puis abolie ?** (à écrire — c\'est la donnée diagnostique) ; amplitudes cervicales et de l\'épaule ; consignes de surveillance du pneumothorax remises par écrit.
- **J2–J3** : la courbature domine ; ne pas évaluer l\'efficacité avant sa disparition, sous peine de conclure à tort à un échec.
- **J7–J15** : EN, amplitudes, sommeil, capacité de travail, consommation d\'antalgiques. **Vérifier que le programme d\'étirements est fait quotidiennement** — sans lui, l\'effet ne dépasse pas quelques jours.
- **1 mois** : décision — répéter (série de 2 à 4 séances espacées de 1 à 2 semaines), changer de muscle cible, ou **arrêter les aiguilles et traiter le facteur d\'entretien**. Deux séances bien conduites sans effet doivent faire reconsidérer le diagnostic (arthropathie facettaire, radiculopathie, pathologie d\'épaule, fibromyalgie, cause générale).
- **3 mois** : EN, retentissement fonctionnel et professionnel, nombre de séances cumulées. Un traitement myofascial qui dure au-delà de 3 mois sans progrès fonctionnel n\'est plus un traitement.
- **Toujours en parallèle** : étirements et renforcement, correction ergonomique du poste, traitement du sommeil et de l\'anxiété, bilan d\'une cause générale devant des points multiples et récidivants.`,

  evidence: `- **Needling contre placebo** : les revues systématiques les plus anciennes comme les plus récentes convergent sur un **bénéfice antalgique à court terme** de la puncture des points gâchettes par rapport à un placebo ou à l\'absence de traitement, avec des essais de faible effectif, souvent à risque de biais élevé, et une hétérogénéité importante des protocoles. Preuve **faible à modérée**, effet réel mais de courte durée.
- **Puncture sèche vs injection d\'anesthésique local** : les travaux princeps (Hong) et les revues ultérieures ne montrent **pas de différence sur la douleur à distance**, mais une **courbature post-ponction nettement moindre avec l\'anesthésique local**. C\'est le seul argument solide pour choisir entre les deux, et il est de tolérance, pas d\'efficacité.
- **Ce qui compte techniquement** : l\'obtention des **réponses de secousse locale** est associée à un meilleur résultat dans plusieurs travaux. Preuve indirecte mais constante ; c\'est ce qui justifie de chercher activement la secousse plutôt que de se contenter d\'un dépôt.
- **Toxine botulique** : plusieurs essais randomisés, dont un essai contrôlé spécifiquement conduit dans la douleur myofasciale **cervico-thoracique**, n\'ont **pas montré de supériorité sur le placebo** ; la revue Cochrane consacrée à la toxine botulique dans les syndromes myofasciaux conclut à une preuve insuffisante. **Preuve négative ou non concluante**, hors AMM en France : ce n\'est pas une option de routine, et la présenter comme telle serait malhonnête.
- **Échographie diagnostique du point gâchette** : les travaux de caractérisation (imagerie en mode B, élastographie, sonoélastographie vibratoire) décrivent des nodules hypoéchogènes plus rigides et moins vibrants que le muscle voisin. Résultats convaincants sur le plan physiopathologique, mais **aucun critère validé, pas de standard de référence, reproductibilité inter-opérateur insuffisante**. Le diagnostic reste clinique — c\'est une limite à assumer explicitement.
- **Échoguidage vs technique aveugle** : la littérature comparative est **mince** et porte surtout sur la faisabilité et sur l\'accès aux muscles profonds. La justification de l\'échoguidage est ici **de sécurité** (repérage pleural) et **d\'accès** (sous-scapulaire, splénius, élévateur), pas d\'efficacité démontrée. Le dire ainsi, plutôt que de sur-vendre l\'image.
- **Ce que la littérature ne dit pas** : pas de consensus sur le nombre de points par séance, le nombre de séances, l\'intervalle optimal, ni sur le volume d\'anesthésique local ; pas d\'incidence chiffrée fiable du pneumothorax après dry needling (des séries de cas et des enquêtes, pas de dénominateur).`,

  references: [
    { auteurs: 'Simons DG, Travell JG, Simons LS', titre: 'Myofascial Pain and Dysfunction: The Trigger Point Manual (vol. 1, 2e éd.)', revue: 'Williams & Wilkins', annee: '1999', type: 'ouvrage de référence', verif: false, note: 'Description princeps des critères cliniques et des cartes de douleur référée.' },
    { auteurs: 'Hong CZ', titre: 'Lidocaine injection versus dry needling to myofascial trigger point: the importance of the local twitch response', revue: 'Am J Phys Med Rehabil', annee: '1994', type: 'étude comparative', verif: false },
    { auteurs: 'Cummings TM, White AR', titre: 'Needling therapies in the management of myofascial trigger point pain: a systematic review', revue: 'Arch Phys Med Rehabil', annee: '2001', type: 'revue systématique', verif: false },
    { auteurs: 'Sikdar S, Shah JP, Gebreab T, et al.', titre: 'Novel applications of ultrasound technology to visualize and characterize myofascial trigger points and surrounding soft tissue', revue: 'Arch Phys Med Rehabil', annee: '2009', type: 'étude de faisabilité', verif: false, note: 'Nodule hypoéchogène, élastographie, sonoélastographie vibratoire.' },
    { auteurs: 'Ferrante FM, Bearn L, Rothrock R, King L', titre: 'Evidence against trigger point injection technique for the treatment of cervicothoracic myofascial pain with botulinum toxin type A', revue: 'Anesthesiology', annee: '2005', type: 'ECR', verif: false },
    { auteurs: 'Soares A, Andriolo RB, Atallah AN, da Silva EM', titre: 'Botulinum toxin for myofascial pain syndromes in adults', revue: 'Cochrane Database Syst Rev', annee: '2014', type: 'revue Cochrane', verif: false },
    { auteurs: 'Espejo-Antúnez L, Tejeda JF, Albornoz-Cabello M, et al.', titre: 'Dry needling in the management of myofascial trigger points: a systematic review of randomized controlled trials', revue: 'Complement Ther Med', annee: '2017', type: 'revue systématique', verif: false },
    { auteurs: 'Cummings M, Ross-Marrs R, Gerwin R', titre: 'Pneumothorax complication of deep dry needling demonstration', revue: 'Acupunct Med', annee: '2014', type: 'cas clinique', verif: false, note: 'Rappel que l\'aiguille fine ne protège pas de la ponction pleurale.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'tp-plevre', section: 'sonoanatomie', titre: 'Région inter-scapulo-vertébrale — pourquoi on regarde la plèvre',
      legende: 'Quatre plans seulement séparent la peau du poumon : graisse, trapèze, rhomboïde, muscles intercostaux. Les côtes et leur cône d\'ombre encadrent l\'espace intercostal où apparaît la ligne pleurale animée du glissement respiratoire. Chez un sujet mince, elle peut être à moins de 25 mm. Le nodule de point gâchette est la plage hypoéchogène du trapèze, au sein de la bande tendue — un aspect inconstant et non spécifique, jamais un critère diagnostique à lui seul.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial (épineuses)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, para-vertébral thoracique haut', type: 'linéaire 6–15 MHz' });
        S.skin({ thickness: 7, fatBelow: 22 });
        S.muscle({ path: 'M0 78 L640 74 L640 132 L0 140 Z', label: 'Trapèze', at: [92, 108], opacity: 0.45 });
        S.fascia({ points: [[0, 140], [640, 132]], width: 1.4, opacity: 0.7 });
        S.muscle({ path: 'M0 140 L640 132 L640 200 L0 212 Z', label: 'Rhomboïde', at: [96, 176], opacity: 0.5 });
        S.fascia({ points: [[0, 212], [640, 200]], width: 1.4, opacity: 0.7 });
        S.fascia({ points: [[186, 102], [300, 107], [430, 101]], width: 1.6, opacity: 0.55 });
        S.label({ x: 466, y: 96, text: 'Bande tendue', anchor: 'start', cls: 'lbl-fascia', small: true, lead: [434, 101] });
        S.fluid({ x: 300, y: 106, rx: 38, ry: 14 });
        S.label({ x: 300, y: 62, text: 'Nodule de point gâchette (hypoéchogène)', anchor: 'middle', cls: 'lbl-fluid', small: true, lead: [300, 94] });
        S.muscle({ path: 'M240 246 L384 242 L380 288 L244 292 Z', label: 'Intercostaux', at: [312, 270], opacity: 0.5, small: true });
        S.bone({ path: 'M40 268 Q140 228 240 258', label: 'Côte', at: [150, 372], ldy: 0, small: true });
        S.bone({ path: 'M382 254 Q470 218 566 250', label: 'Côte', at: [478, 312], ldy: 0, small: true });
        S.pleura({ points: [[244, 292], [380, 289]] });
        S.label({ x: 402, y: 348, text: 'Ligne pleurale (glissement)', anchor: 'start', cls: 'lbl-pleura', small: true, lead: [366, 292] });
        S.lung({ path: 'M240 298 L384 295 L384 420 L240 420 Z', label: 'Poumon', at: [312, 372], small: true });
        S.artery({ x: 552, y: 166, r: 7, label: 'A. dorsale de la scapula', lx: 530, ly: 182, anchor: 'end', small: true, lead: [546, 172] });
        S.label({ x: 130, y: 300, text: 'Peau → plèvre : 25–40 mm\nà mesurer avant de piquer', anchor: 'middle', cls: 'lbl-region', small: true });
      },
    },
    {
      id: 'tp-geste', section: 'technique', titre: 'Puncture du point — aiguille in-plane tangentielle, plan costal en vue',
      legende: 'L\'aiguille entre par un bord latéral de la sonde, à moins de 30° du plan cutané, et progresse dans la bande tendue en gardant le plan costal visible sous la pointe. Dry needling : va-et-vient rapide en éventail jusqu\'à épuisement des réponses de secousse locale. Injection : 0,5 à 2 mL de lidocaïne 0,5–1 % englobant le nodule, sans jamais diffuser vers le plan costal. Une trajectoire perpendiculaire à la paroi thoracique est le mécanisme du pneumothorax — y compris avec une aiguille d\'acupuncture.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial (épineuses)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, para-vertébral thoracique haut', type: 'in-plane, angle < 30°' });
        S.skin({ thickness: 7, fatBelow: 22 });
        S.muscle({ path: 'M0 78 L640 74 L640 132 L0 140 Z', label: 'Trapèze', at: [80, 110], opacity: 0.45 });
        S.fascia({ points: [[0, 140], [640, 132]], width: 1.4, opacity: 0.7 });
        S.muscle({ path: 'M0 140 L640 132 L640 200 L0 212 Z', label: 'Rhomboïde', at: [84, 178], opacity: 0.5 });
        S.fascia({ points: [[0, 212], [640, 200]], width: 1.4, opacity: 0.7 });
        S.muscle({ path: 'M240 246 L384 242 L380 288 L244 292 Z', opacity: 0.5 });
        S.bone({ path: 'M40 268 Q140 228 240 258', label: 'Côte', at: [130, 322], ldy: 0, small: true });
        S.bone({ path: 'M382 254 Q470 218 566 250', label: 'Côte', at: [478, 312], ldy: 0, small: true });
        S.pleura({ points: [[244, 292], [380, 289]] });
        S.label({ x: 402, y: 348, text: 'Plèvre — à voir avant de piquer', anchor: 'start', cls: 'lbl-pleura', small: true, lead: [366, 292] });
        S.lung({ path: 'M240 298 L384 295 L384 420 L240 420 Z', label: 'Poumon', at: [312, 372], small: true });
        S.fluid({ x: 288, y: 108, rx: 28, ry: 10 });
        S.label({ x: 288, y: 62, text: 'Point gâchette', anchor: 'middle', cls: 'lbl-target', small: true, lead: [288, 92] });
        S.needle({ from: [640, 84], to: [304, 110], label: 'Aiguille tangentielle, < 30°' });
        /* nappe percée autour du nodule, qui reste visible au centre */
        S.spreadPath({ path: 'M214 110 A58 18 0 1 1 330 110 A58 18 0 1 1 214 110 Z M258 108 A30 12 0 1 0 318 108 A30 12 0 1 0 258 108 Z', at: [434, 130], label: '0,5–2 mL' });
        S.label({ x: 320, y: 226, text: 'Le plan costal doit rester visible sous la pointe', anchor: 'middle', cls: 'lbl-bone', small: true });
      },
    },
  ],

  checklist: [
    'Diagnostic clinique posé : bande tendue, point exquis, douleur référée reproduite — pas une image',
    'Points marqués au feutre avant l\'installation en décubitus',
    'Profondeur d\'image réglée pour inclure le plan costal ; **distance peau–plèvre mesurée et notée**',
    'Longueur d\'aiguille choisie APRÈS cette mesure',
    'Doppler sur la trajectoire (artère dorsale de la scapula, cervicale transverse, intercostales)',
    'Trajet in-plane tangentiel, angle < 30°, aiguille visible sur toute sa longueur',
    'Maximum 2 à 4 points par séance, en commençant par le point clé',
    'Patient prévenu : secousse locale brève et désagréable, courbature de 24 à 72 h attendue',
    'Consignes ÉCRITES de pneumothorax remises (douleur thoracique, dyspnée ou toux, même retardées → urgence) ; surveillance 30 min',
    'Aucun point piqué si la plèvre n\'est pas identifiable ; aucun corticoïde intramusculaire',
  ],
});
