/* Fiche : bloc paravertébral thoracique échoguidé — approches sagittale paramédiane et transversale. */
ECHO.register({
  id: 'paravertebral-thoracique',
  titre: 'Bloc paravertébral thoracique échoguidé',
  titreCourt: 'Paravertébral thoracique',
  en: 'Ultrasound-guided thoracic paravertebral block (TPVB) — paramedian sagittal approach and transverse in-plane (intercostal) approach',
  region: 'thorax',
  types: ['bloc'],
  niveau: 3,
  grade: 'Forte en prévention de la douleur chronique post-thoracotomie (méta-analyse Cochrane) ; modérée dans le zona ; faible dans les douleurs pariétales chroniques constituées',
  maj: '2026-09',
  motsCles: ['TPVB', 'paravertébral', 'zona', 'névralgie post-zostérienne', 'post-thoracotomie', 'post-mastectomie', 'PMPS', 'fractures de côtes', 'ligament costo-transversaire supérieur', 'Karmakar', 'Shibata', 'pneumothorax'],
  resume: 'Le bloc métamérique le plus complet de la paroi thoracique : en déposant l’injectat dans l’espace cunéiforme où le nerf spinal vient de sortir du foramen, on bloque en une injection la branche dorsale, la branche ventrale (intercostale) et la chaîne sympathique du même côté, sur plusieurs métamères. C’est ce qui le distingue de l’intercostal (purement somatique, mono-étagé) et de l’ESP block (plus sûr mais de diffusion moins prévisible). Deux abords échoguidés font référence : sagittal paramédian, plus intuitif mais où l’aiguille est vue de biais, et transversal in-plane latéro-médial, où l’aiguille est vue en entier mais pointe vers le foramen. Le critère de fin est le même dans les deux cas : le **déplacement antérieur de la plèvre** par l’injectat. Geste de niveau 3 : pneumothorax, hypotension, diffusion épidurale et intrathécale sont tous décrits, et ils justifient un environnement de surveillance, pas un couloir de consultation.',

  flash: {
    position: 'assis', positionNote: 'assis penché en avant sur un support (dos cyphosé, espaces ouverts) ou décubitus latéral côté à traiter vers le haut ; décubitus ventral possible avec coussin sous le thorax',
    sonde: 'lineaire', sondeNote: '8–13 MHz, profondeur 4–6 cm ; convexe 3–5 MHz au-dessus d’un IMC élevé ou au niveau thoracique haut — la plèvre doit rester parfaitement nette',
    approche: 'in-plane', approcheNote: 'sagittal paramédian (2,5–3 cm de la ligne médiane) crânio-caudal ou caudo-crânial ; ou transversal in-plane latéro-médial (abord « intercostal » de Shibata / Karmakar), où l’aiguille est vue sur toute sa longueur',
    aiguille: '20–22 G, 80–100 mm écho-visible, à biseau court (Tuohy 20 G si l’on pose un cathéter)',
    cible: 'Espace paravertébral, **en avant du ligament costo-transversaire supérieur** et en arrière de la plèvre pariétale ; critère de fin : **déplacement antérieur de la plèvre** et élargissement de l’espace à l’injection',
    injectat: '10–20 mL ropivacaïne 0,2–0,375 % ± corticoïde (ou 4–5 mL par niveau si abord multi-étagé)',
    duree: '15–20 min · 25–30 min pour une pose de cathéter',
  },

  indications: [
    '**Zona thoracique aigu et névralgie post-zostérienne** : c’est l’indication où le bloc paravertébral a le plus de données en douleur, avec un rationnel double (composante somatique et sympathique) et des essais favorables sur la prévention de la névralgie post-zostérienne.',
    '**Douleur chronique post-thoracotomie** (PTPS) : à la fois en prévention péri-opératoire — c’est là que le niveau de preuve est le plus élevé — et en traitement d’une douleur constituée, comme bloc test ou bloc antalgique.',
    '**Douleur chronique post-mastectomie** (PMPS) et douleur pariétale après curage axillaire : couverture de T1–T6 en une ou deux injections.',
    'Fractures de côtes multiples, y compris anciennes et douloureuses, quand un bloc intercostal multi-étagé serait limité par la dose totale d’anesthésique local.',
    'Douleur pariétale thoracique d’origine tumorale ou post-radique, en particulier quand la composante sympathique est manifeste (allodynie, troubles vasomoteurs).',
    'Bloc test avant un geste plus lésionnel, ou avant la pose d’un cathéter paravertébral pour analgésie prolongée en situation palliative.',
    'Douleur pariétale thoracique diffuse chez un patient où l’ESP block a échoué : la diffusion paravertébrale est plus directe.',
  ],
  contreIndications: [
    'Absolues : refus, infection au point de ponction, allergie vraie aux amino-amides, **empyème ou infection pleurale homolatérale**, tumeur occupant l’espace paravertébral au niveau visé.',
    '**Coagulopathie ou anticoagulation curative non interrompue** : bloc **profond, non compressible, à proximité de l’espace épidural** — classé à **risque hémorragique intermédiaire** dans la stratification ASRA-ESRA 2018. Appliquer les délais d’interruption correspondants ; en pratique, gérer ce bloc comme on gère un geste rachidien intermédiaire, pas comme un bloc de paroi.',
    '**Insuffisance respiratoire sévère, poumon unique, pneumonectomie controlatérale, emphysème bulleux** : un pneumothorax y serait mal toléré. Si le geste reste indiqué, il se fait là où un drainage est immédiatement disponible.',
    'Instabilité hémodynamique, hypovolémie : le bloc sympathique associé peut donner une hypotension, surtout sur plusieurs métamères ou en bilatéral.',
    'Déformation rachidienne majeure, chirurgie rachidienne antérieure avec matériel, radiothérapie locale ayant remanié les plans : repères dégradés, taux d’échec élevé.',
    'Bloc **bilatéral** : à éviter en dehors d’une indication forte et d’un environnement de surveillance (risque cumulé d’hypotension, de diffusion épidurale et de toxicité systémique).',
    'Corticoïdes : diabète déséquilibré ; ne pas dépasser 3 injections par an sur le même site.',
  ],
  alternatives: '**ESP block** (erector spinae plane) : plus superficiel, loin de la plèvre et du foramen, réalisable sous anticoagulation avec beaucoup plus de latitude, courbe d’apprentissage courte — c’est aujourd’hui le premier choix raisonnable pour une douleur pariétale thoracique, en acceptant une diffusion moins prévisible et un effet sympathique moindre. **Bloc intercostal** (fiche dédiée) : plus simple, mais purement somatique, mono-étagé, avec une absorption systémique élevée qui limite le nombre de niveaux. **Serratus plane block** pour les douleurs latérales et post-mastectomie. **PRF du ganglion spinal** au niveau correspondant : le geste lésionnel de référence dans la douleur thoracique chronique post-chirurgicale, mais il relève d’une autre technique (le plus souvent radioguidée) et d’une autre fiche. **Péridurale thoracique** : couverture bilatérale, mais risques et contraintes supérieurs. Positionner honnêtement le paravertébral : il n’est pas le premier geste à proposer dans une douleur pariétale chronique banale — il est le geste de choix quand on veut une couverture métamérique large **et** un bloc sympathique, ou quand l’ESP a échoué.',

  anatomie: `L’espace paravertébral thoracique est un espace **cunéiforme** (triangulaire en coupe transversale), situé de part et d’autre du rachis. Ses limites, qui sont exactement les repères du geste :

- **en arrière** : le **ligament costo-transversaire supérieur**, tendu du **bord inférieur du processus transverse sus-jacent** à la **crête du col de la côte sous-jacente** (à l’écran, en coupe sagittale paramédiane, il apparaît simplement comme la bande qui ponte l’espace entre deux processus transverses) — c’est la structure que l’aiguille doit franchir, avec un ressaut souvent perceptible ; latéralement il se prolonge par la **membrane intercostale interne** ;
- **en avant et latéralement** : la **plèvre pariétale**, seule barrière entre la pointe de l’aiguille et le poumon ;
- **en dedans** : le corps vertébral, le disque et le **foramen intervertébral**, qui fait communiquer l’espace avec l’**espace épidural** ;
- **latéralement** : l’espace se prolonge sans rupture par l’**espace intercostal**.

Il contient le **nerf spinal** à sa sortie du foramen, dépourvu de gaine à ce niveau (d’où un délai d’installation court et un bloc dense), ses **rameaux ventral et dorsal**, les **rameaux communicants** et la **chaîne sympathique**, le tout dans de la graisse et avec les vaisseaux intercostaux postérieurs.

### Ce qui compte pour le geste
- **Un seul point, plusieurs métamères — mais de façon imprévisible.** L’espace communique en haut et en bas avec les espaces adjacents, latéralement avec l’espace intercostal et médialement avec l’épidural. Une injection unique de 15–20 mL couvre habituellement **plusieurs métamères**, mais la littérature rapporte une **grande variabilité individuelle** : ne jamais promettre au patient un nombre exact de niveaux, et privilégier une injection par niveau (4–5 mL) quand la couverture doit être précise.
- **La plèvre est à la fois le repère et le danger.** Ligne hyperéchogène glissante, à 1,5–4 cm selon le morphotype. Elle doit être vue en permanence, et le **critère de fin est son déplacement antérieur** à l’injection : c’est la preuve directe que l’injectat est dans l’espace et non dans le muscle.
- **Le foramen est en dedans.** Toute progression médiale expose à une diffusion épidurale (fréquente, souvent silencieuse) ou, exceptionnellement, à une injection **intrathécale** par un manchon dural étendu. C’est la limite de l’abord transversal in-plane : l’aiguille y pointe vers le rachis.
- **Bloc sympathique associé** : c’est un atout dans le zona et les douleurs à composante vasomotrice, et un risque hémodynamique (hypotension) sur plusieurs métamères ou en bilatéral. Une diffusion vers T1–T2 peut donner un **syndrome de Claude Bernard-Horner**, bénin mais spectaculaire, à annoncer.
- **Profondeurs usuelles** : processus transverses à 2–4 cm, plèvre 1–1,5 cm plus profond ; au niveau thoracique **haut** (T1–T4) les processus transverses sont plus longs, plus obliques et plus superficiels, et la fenêtre est plus étroite qu’au niveau moyen (T5–T8), qui reste le plus facile. À confirmer sur chaque patient.
- **Compter les niveaux** : partir de la 12e côte, ou de C7 (processus épineux le plus saillant), ou de la pointe de la scapula (voisine de T7, repère grossier à vérifier). Marquer chaque niveau au feutre.`,

  installation: {
    patient: `**Assis, penché en avant** sur un support avec les bras croisés : le dos se cyphose, les espaces interépineux et intertransversaires s’ouvrent, la plèvre s’éloigne un peu. C’est la position de référence, à condition que le patient soit stable et surveillé (malaise vagal possible).

**Décubitus latéral**, côté à traiter vers le haut, genoux repliés : bon choix chez le patient fragile, algique ou anxieux, et obligatoire si l’on prévoit une sédation. **Décubitus ventral** avec coussin sous le thorax : confortable pour l’opérateur, permet plusieurs niveaux d’affilée, mais moins adapté au patient dyspnéique.

**Voie veineuse obligatoire**, monitorage de la pression artérielle et de la SpO₂ pendant et après le geste : le bloc sympathique peut faire chuter la pression, et le volume d’anesthésique local est élevé. Ce n’est pas un geste de consultation.

Compter et **marquer les niveaux au feutre avant la désinfection**, ainsi que la ligne des processus épineux et la ligne de ponction à 2,5–3 cm en dehors.`,
    operateur: `Opérateur derrière le patient, écran en face, dans l’axe du regard.

**Abord sagittal paramédian** : sonde sagittale à **2,5–3 cm de la ligne médiane**, montrant deux processus transverses en coupe et, entre eux, le ligament costo-transversaire supérieur puis la plèvre. Aiguille dans le plan, caudo-crâniale le plus souvent. Limite : l’angle d’insonation est défavorable et l’aiguille se voit mal — c’est la principale raison des échecs et des ponctions pleurales.

**Abord transversal in-plane latéro-médial** : sonde transversale, légèrement obliquée pour passer entre deux processus transverses, aiguille de **latéral en médial**. L’aiguille est alors vue **sur toute sa longueur**, ce qui est un gain de sécurité majeur vis-à-vis de la plèvre — au prix d’une trajectoire dirigée vers le foramen, donc d’un risque de diffusion épidurale. Choisir en fonction de ce que l’on redoute le plus, et le dire au patient.`,
    sonde: `- Linéaire 8–13 MHz, preset nerf ou MSK, **profondeur 4–6 cm**, focale sur la plèvre, gain réglé pour un contraste franc entre l’ombre osseuse et la ligne pleurale.
- **Vérifier le glissement pleural avant et après** le geste, des deux côtés (mode M en cas de doute : « bord de mer » normal, « code-barres » si pneumothorax).
- **Doppler couleur** sur l’espace : les vaisseaux intercostaux postérieurs y cheminent.
- Convexe 3–5 MHz si la paroi est épaisse ; la perte de résolution est acceptable tant que la ligne pleurale reste nette. **Si la plèvre n’est pas visible, le geste ne se fait pas.**
- Aiguille écho-visible **obligatoire** : c’est le bloc de ce mémo où la perte de la pointe a les conséquences les plus directes.
- Aiguille à biseau court : le ressaut du ligament costo-transversaire supérieur est mieux perçu et la plèvre moins facilement embrochée.`,
  },

  reperage: [
    { titre: 'Compter les niveaux', texte: 'Balayage sagittal paramédian de bas en haut à partir de la **12e côte**, ou de haut en bas à partir de **C7** (processus épineux le plus saillant). Marquer chaque niveau au feutre. Vérification croisée par la pointe de la scapula. Se tromper de niveau est fréquent et invisible sur l’image.' },
    { titre: 'Obtenir la coupe sagittale paramédiane', texte: 'Sonde sagittale à 2,5–3 cm de la ligne médiane : deux **processus transverses** apparaissent comme des masses hyperéchogènes **arrondies et à sommet aplati**, avec cône d’ombre, séparées par un espace. Si les structures osseuses sont **convexes et continues**, la sonde est trop latérale : ce sont les côtes, pas les processus transverses. C’est l’erreur de repérage la plus fréquente du geste.' },
    { titre: 'Identifier le ligament costo-transversaire supérieur', texte: 'Entre les deux processus transverses, une **bande hyperéchogène** tendue de l’un à l’autre. C’est la structure que l’aiguille franchit ; sous elle commence l’espace paravertébral.' },
    { titre: 'Identifier la plèvre et son glissement', texte: 'Sous le ligament, une seconde ligne hyperéchogène **qui glisse** avec la respiration, avec les artefacts pulmonaires en dessous. La distance ligament–plèvre est la **marge de travail** : la mesurer, elle est souvent de 5 à 15 mm.' },
    { titre: 'Basculer en transversal si nécessaire', texte: 'Sonde tournée à 90°, obliquée pour passer **entre** deux processus transverses : on identifie de dedans en dehors le processus épineux, la lame, l’articulation costo-transversaire, puis latéralement l’espace intercostal. L’espace paravertébral apparaît comme un **coin hypoéchogène** entre la membrane intercostale interne (en arrière) et la plèvre (en avant). C’est la vue de l’abord in-plane latéro-médial.' },
    { titre: 'Si les repères sont mauvais', texte: 'Trois manœuvres, dans cet ordre : (1) rapprocher ou éloigner la sonde de la ligne médiane par pas de 5 mm jusqu’à retrouver le profil aplati des processus transverses ; (2) descendre à un niveau **thoracique moyen** (T5–T8), plus facile que le thoracique haut ; (3) accentuer la cyphose du patient. Si la plèvre reste invisible ou le ligament non identifiable : **renoncer et faire un ESP block** au même niveau — moins précis, mais sans risque pleural comparable.' },
  ],

  sonoanatomie: [
    { structure: 'Processus transverses (coupe sagittale)', aspect: 'Masses hyperéchogènes à sommet **aplati**, cône d’ombre franc', repere: 'Si les structures sont convexes et continues, ce sont les côtes : sonde trop latérale' },
    { structure: 'Muscles érecteurs du rachis', aspect: 'Masse striée épaisse, gris moyen, au-dessus des processus transverses', repere: 'À traverser ; leur épaisseur donne la profondeur du geste' },
    { structure: 'Ligament costo-transversaire supérieur', aspect: 'Bande hyperéchogène tendue entre deux processus transverses', repere: '**La barrière à franchir** — ressaut à l’aiguille à biseau court' },
    { structure: 'Espace paravertébral', aspect: 'Coin hypoéchogène entre le ligament (en arrière) et la plèvre (en avant)', repere: 'S’élargit à l’injection en repoussant la plèvre' },
    { structure: 'Plèvre pariétale', aspect: 'Ligne hyperéchogène brillante, **glissante** avec la respiration', repere: 'Repère de sécurité et critère de fin (déplacement antérieur)' },
    { structure: 'Poumon', aspect: 'Artefacts (lignes A, queues de comète) sous la plèvre', repere: 'Confirme que l’on est au-delà de la plèvre' },
    { structure: 'Lame et processus épineux (coupe transversale)', aspect: 'Structures osseuses médiales avec ombre', repere: 'Limite médiale à ne pas dépasser — au-delà, le foramen' },
    { structure: 'Membrane intercostale interne', aspect: 'Fine ligne hyperéchogène prolongeant le ligament costo-transversaire vers le dehors', repere: 'Franchie dans l’abord transversal in-plane' },
    { structure: 'Vaisseaux intercostaux postérieurs', aspect: 'Signal Doppler inconstant dans l’espace', repere: 'Doppler avant la ponction' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). **Voie veineuse posée, monitorage tensionnel et SpO₂ en place.** Niveaux comptés et marqués au feutre avant désinfection. Glissement pleural vérifié et noté. Désinfection large, gel stérile ou housse, gants stériles. Dose totale d’AL calculée en mg/kg et écrite. Aiguille 20–22 G 80–100 mm écho-visible sur prolongateur. **Émulsion lipidique 20 % et chariot d’urgence dans la salle.**' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point d’entrée et sur le trajet superficiel. Systématique ici : l’aiguille est de gros calibre et le trajet long à travers les érecteurs.' },
    { titre: 'Ponction dans le plan', texte: '**Abord sagittal** : entrer au bord caudal de la sonde, progresser en crânial et en profondeur, aiguille visible autant que possible ; en cas de perte de la pointe, hydrolocaliser plutôt qu’avancer. **Abord transversal** : entrer au bord latéral, progresser de latéral en médial, tangentiellement à la plèvre, l’aiguille restant visible sur toute sa longueur.' },
    { titre: 'Franchir le ligament costo-transversaire supérieur', texte: 'Un **ressaut** est souvent perçu (aiguille à biseau court). En sagittal, la manœuvre de sécurité est de prendre d’abord le **contact osseux du processus transverse** et d’en **noter la profondeur**, puis de reculer, de réorienter légèrement pour passer au-delà de son bord (caudal si l’aiguille progresse de crânial en caudal, crânial dans le sens inverse) et de ne pas dépasser **1 à 1,5 cm au-delà de la profondeur du contact osseux** — la règle porte sur la profondeur, pas sur la distance horizontale à l’écran. Jamais plus, sous peine d’aborder la plèvre.' },
    { titre: 'Hydrolocalisation et test', texte: 'Aspiration (sang, air, LCR). Injecter **1–2 mL de sérum** : le bon signe est un **déplacement antérieur de la plèvre** et un élargissement visible de l’espace. Si le muscle érecteur se gonfle sans que la plèvre bouge, la pointe est en arrière du ligament : avancer prudemment. Si rien ne se voit, retirer et recommencer le repérage — on n’avance jamais à l’aveugle à ce niveau.' },
    { titre: 'Injection fractionnée', texte: '**10 à 20 mL** par bolus de 3–5 mL, avec aspiration entre chaque, en surveillant en continu la plèvre et le patient (pression artérielle, symptômes de toxicité). Si l’on traite plusieurs niveaux, **4–5 mL par niveau** donnent une couverture plus fiable qu’une injection unique de gros volume.' },
    { titre: 'Critère de fin', texte: 'Élargissement franc de l’espace paravertébral avec **déplacement antérieur de la plèvre**, glissement pleural conservé, absence de résistance anormale, patient asymptomatique. Retrait de l’aiguille en gardant la pointe visible.' },
    { titre: 'Après le geste', texte: '**Contrôle échographique du glissement pleural bilatéral.** Surveillance **au minimum 60 min** avec pression artérielle répétée (bloc sympathique), SpO₂ et évaluation neurologique des membres inférieurs (dépistage d’une diffusion épidurale ou intrathécale). Cartographie sensitive à 20–30 min pour documenter les métamères réellement couverts — c’est ce qui donne sa valeur au bloc test. Consigne écrite : dyspnée, douleur thoracique brutale, faiblesse des membres inférieurs ou malaise dans les 24 h = urgence. Pas de conduite le jour même.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test / bloc antalgique mono-injection | Ropivacaïne 0,2–0,375 % (ou lévobupivacaïne 0,25 %) | **10–20 mL** en un point | Couvre habituellement plusieurs métamères, mais avec une **variabilité individuelle importante** : documenter la cartographie obtenue, ne rien promettre à l’avance |
| Couverture métamérique précise | Même produit | **4–5 mL par niveau**, 3 à 5 niveaux | Plus fiable qu’une injection unique de gros volume quand la cible métamérique est étroite |
| Bloc thérapeutique avec corticoïde | Ropivacaïne 0,2 % + **dexaméthasone 4–8 mg** | 10–15 mL | **Corticoïde non particulaire, par principe.** L’espace paravertébral communique avec l’espace épidural par le foramen, la diffusion épidurale y est fréquente et souvent silencieuse, et les **artères médullaires segmentaires** (dont l’artère d’Adamkiewicz, T9–L2, le plus souvent à gauche) naissent des artères intercostales postérieures et rejoignent le canal par le foramen. Aucun bénéfice du particulaire n’est démontré sur cette cible : il n’y a pas de raison d’en prendre le risque. Méthylprednisolone 40 mg envisageable seulement sur un abord franchement latéral, pointe à distance du foramen, et à tracer |
| Zona aigu / prévention de la névralgie post-zostérienne | Ropivacaïne 0,2 % + corticoïde, injections **répétées** | 10–15 mL par séance | Schéma des essais positifs : injections répétées, pas une seule. À confirmer sur le protocole exact des publications avant transposition |
| Cathéter paravertébral (situation palliative) | Ropivacaïne 0,2 % en perfusion continue | bolus initial 15–20 mL puis perfusion | Aiguille de Tuohy 20 G, cathéter monté de 2–3 cm ; geste d’équipe entraînée, environnement de surveillance |

**Doses maximales — contrainte réelle ici** : ropivacaïne 3 mg/kg (≈ 225 mg chez 75 kg), lévobupivacaïne / bupivacaïne 2–2,5 mg/kg (≈ 150 mg), lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Repère opérationnel : 20 mL de ropivacaïne 0,375 % = 75 mg, confortable en unilatéral ; **le même bloc en bilatéral double la dose et n’est plus anodin chez un sujet de faible poids ou dénutri**. Calculer et écrire la dose avant de commencer.

**Injection fractionnée obligatoire**, aspiration avant chaque bolus (sang, air, LCR), patient interrogé entre les bolus. **Émulsion lipidique 20 % dans la salle.**

Corticoïde : au maximum 3 injections par an sur le même site, espacées d’au moins 3 mois.`,

  variantes: [
    { titre: 'Abord sagittal paramédian — l’abord classique', texte: `Sonde sagittale à 2,5–3 cm de la ligne médiane, deux processus transverses à l’écran, aiguille dans le plan en direction caudo-crâniale (ou l’inverse selon l’accès).

Avantages : anatomie intuitive, repères osseux nets, technique de sécurité disponible (contact osseux du processus transverse, profondeur notée, puis progression contrôlée de **1–1,5 cm au maximum au-delà de cette profondeur**).

Limite majeure : **l’angle d’insonation est défavorable et l’aiguille se voit mal**, ce qui est précisément le problème quand la plèvre est à 10 mm. Hydrolocaliser abondamment, ne jamais avancer sans voir. Certaines équipes réalisent cet abord **hors du plan**, la pointe étant repérée par le déplacement tissulaire et l’hydrolocalisation — à réserver aux opérateurs très entraînés.` },
    { titre: 'Abord transversal in-plane latéro-médial (Shibata, Karmakar)', texte: `Sonde transversale, obliquée pour passer entre deux processus transverses ; on identifie de dedans en dehors le processus épineux, la lame, l’articulation costo-transversaire, puis latéralement l’espace intercostal et la plèvre. L’aiguille est introduite au bord **latéral** de la sonde et progresse **de latéral en médial**, tangentiellement à la plèvre, à travers la membrane intercostale interne, jusqu’au coin paravertébral.

Avantage décisif : **l’aiguille est visible sur toute sa longueur**, et sa trajectoire est tangentielle à la plèvre — c’est l’abord le plus sûr vis-à-vis du pneumothorax et celui que privilégient la plupart des équipes formées à l’échographie.

Limite : l’aiguille pointe **vers le foramen**. Fixer visuellement une limite médiale (la ligne du processus articulaire) et ne jamais la dépasser. La diffusion épidurale, souvent silencieuse, est plus fréquente par cet abord — d’où l’argument pour un corticoïde non particulaire.` },
    { titre: 'Injection unique de gros volume ou injections étagées ?', texte: 'Une injection unique de 15–20 mL diffuse sur plusieurs métamères, mais de façon **peu prévisible** : les séries rapportent des étendues très variables d’un patient à l’autre, et parfois une diffusion épidurale qui explique une partie de la couverture. Quand la cible métamérique est précise (une bande zostérienne, une cicatrice de thoracotomie), préférer **3 à 5 injections de 4–5 mL** à des niveaux consécutifs. Quand on veut simplement une large couverture antalgique, l’injection unique suffit. Documenter systématiquement la cartographie sensitive obtenue : c’est la seule façon d’apprendre ce que fait réellement le geste chez ses propres patients.' },
    { titre: 'Cathéter paravertébral', texte: 'Aiguille de Tuohy 20 G, espace ouvert par 10–15 mL d’injectat, puis cathéter monté de 2–3 cm seulement (au-delà, il s’enroule ou part dans l’espace intercostal). Indication en algologie : douleur pariétale tumorale ou post-traumatique nécessitant une analgésie continue de plusieurs jours. Geste d’équipe, en environnement de surveillance, avec un protocole de gestion du cathéter et de dépistage de la migration épidurale.' },
    { titre: 'Ce que ce bloc ne fait pas', texte: 'Il ne traite pas la cause d’une douleur neuropathique chronique constituée. Dans le zona, les données les plus solides concernent la **prévention** de la névralgie post-zostérienne, pas son traitement une fois installée. Dans la douleur post-thoracotomie, la méta-analyse Cochrane porte sur la **prévention péri-opératoire**. Répéter des blocs paravertébraux chez un patient dont la douleur chronique est constituée depuis deux ans est un geste à risque pour un bénéfice non démontré : à ce stade, discuter plutôt PRF du ganglion spinal, neuromodulation ou optimisation du traitement de fond.' },
  ],

  pearls: [
    'Processus transverses = sommet **aplati** ; côtes = arcs **convexes et continus**. Si l’image est convexe, la sonde est trop latérale — c’est l’erreur de repérage n°1.',
    'Le critère de fin n’est pas une sensation, c’est une image : **la plèvre qui recule**.',
    'Mesurer la distance ligament–plèvre avant de ponctionner : c’est la marge de travail, et elle se compte en millimètres.',
    'T5–T8 est nettement plus facile que T1–T4 : s’y faire la main avant d’aborder le thoracique haut.',
    'Abord transversal in-plane quand on redoute la plèvre ; abord sagittal quand on redoute le foramen. Savoir pourquoi on choisit.',
    'Injections étagées de 4–5 mL plutôt qu’un gros bolus quand la cible métamérique est précise.',
    'Documenter la cartographie sensitive obtenue à 30 min : c’est ce qui rend le bloc test exploitable et c’est ainsi qu’on apprend son propre taux de couverture.',
    'Voie veineuse, monitorage, une heure de surveillance : le geste ne se termine pas au retrait de l’aiguille.',
  ],
  pieges: [
    'Prendre les côtes pour les processus transverses : on injecte alors dans l’espace intercostal ou dans le muscle, et le bloc est incomplet ou nul.',
    'Progresser en sagittal sans voir la pointe : c’est le mécanisme habituel du pneumothorax de ce bloc.',
    'Dépasser 1,5 cm au-delà de la **profondeur** du contact osseux du processus transverse en sagittal : au-delà, on est sur la plèvre.',
    'En transversal, se laisser entraîner en dedans : diffusion épidurale, hypotension bilatérale, voire injection intrathécale.',
    'Promettre une couverture de « quatre à cinq métamères » : la variabilité individuelle rend cette promesse fausse une fois sur deux.',
    'Faire un bloc bilatéral sans réévaluer la dose totale d’anesthésique local ni l’environnement de surveillance.',
    'Renvoyer le patient à 20 minutes : l’hypotension du bloc sympathique et le pic plasmatique d’AL sont plus tardifs.',
    'Réaliser ce geste en consultation, sans voie veineuse ni monitorage, parce qu’« il a bien marché la dernière fois ».',
  ],
  complications: [
    '**Pneumothorax** : décrit dans toutes les séries, y compris échoguidées. Signes : disparition du glissement pleural (mode M : « code-barres »), dyspnée, douleur pleurale, toux. Conduite : arrêt, échographie pleurale bilatérale, radiographie thoracique, oxygène, exsufflation ou drainage selon la tolérance. Un pneumothorax minime asymptomatique se surveille. **Consigne écrite systématique** au patient.',
    '**Hypotension** par bloc sympathique, d’autant plus que le nombre de métamères est élevé et le bloc bilatéral. Prévention : voie veineuse, remplissage disponible, surveillance tensionnelle prolongée, lever accompagné.',
    '**Diffusion épidurale** : relativement fréquente, souvent silencieuse, parfois responsable d’un bloc bilatéral inattendu et d’une hypotension. À dépister par l’examen des membres inférieurs en surveillance.',
    '**Injection intrathécale** : exceptionnelle (manchon dural étendu), potentiellement grave (rachianesthésie totale). Aspiration systématique à la recherche de LCR, injection fractionnée, surveillance immédiate.',
    '**Ponction vasculaire** (vaisseaux intercostaux postérieurs) et hématome dans un espace **non compressible** : d’où le classement en risque hémorragique intermédiaire.',
    '**Toxicité systémique aux anesthésiques locaux (LAST)** : volumes élevés, absorption significative. Prodromes (goût métallique, acouphènes, paresthésies péribuccales), puis convulsions et troubles du rythme. Émulsion lipidique 20 % dans la salle, protocole affiché.',
    '**Syndrome de Claude Bernard-Horner** par diffusion vers le ganglion stellaire lors d’un bloc thoracique haut : bénin, régressif, spectaculaire — à annoncer avant le geste sinon le patient panique.',
    'Échec du bloc : rapporté dans une proportion non négligeable des cas même en mains entraînées (séries historiques du bloc au repère anatomique). Le documenter comme échec **technique** et non comme absence de composante pariétale.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie.',
  ],
  securite: [
    '**Environnement** : voie veineuse, monitorage tensionnel et SpO₂, chariot d’urgence, émulsion lipidique 20 %, possibilité d’un drainage thoracique dans un délai raisonnable. Surveillance ≥ 60 min. Ce bloc ne se fait pas en consultation.',
    '**Plèvre visible et glissement vérifié avant chaque ponction, et glissement bilatéral revérifié en fin de geste.** Si la plèvre n’est pas visible, le geste ne se fait pas — faire un ESP block.',
    '**Pointe visible en permanence.** En cas de perte de la pointe : arrêt, hydrolocalisation, réalignement de la sonde. Jamais de progression à l’aveugle.',
    'Limite médiale fixée visuellement en abord transversal ; en abord sagittal, limite de 1–1,5 cm au-delà de la **profondeur** du contact osseux du processus transverse.',
    'Aspiration systématique à la recherche de **sang, d’air et de LCR** avant chaque bolus ; injection fractionnée par 3–5 mL ; patient interrogé entre les bolus.',
    'Dose totale d’AL calculée en mg/kg et écrite avant le geste ; réévaluation obligatoire en cas de bloc bilatéral ou de gestes associés.',
    'Risque hémorragique **intermédiaire** (ASRA-ESRA 2018) : appliquer les délais d’interruption des anticoagulants correspondants. Ne pas assimiler ce bloc à un bloc de paroi.',
    '**Corticoïde non particulaire (dexaméthasone)** : l’espace communique avec l’épidural par le foramen, où cheminent les artères médullaires segmentaires. Le particulaire n’apporte rien de démontré ici.',
    'Consigne écrite remise : dyspnée, douleur thoracique brutale, faiblesse des membres inférieurs ou malaise dans les 24 h = consultation en urgence, avec mention du geste réalisé. Pas de conduite le jour même.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, **cartographie sensitive comparée** des métamères réellement couverts (c’est la donnée qui rend le bloc test exploitable), pression artérielle répétée pendant 60 min, glissement pleural bilatéral vérifié, examen des membres inférieurs avant le lever, consigne écrite remise.
- **J1–J7** : journal de douleur. Prévenir de la reprise à la levée du bloc, qui n’est pas un échec.
- **J15–J30** : EN, DN4, retentissement respiratoire et fonctionnel, sommeil, antalgiques. Décision : répéter (schéma d’injections répétées dans le zona ; max 3 corticoïdes/an), passer à une autre technique (ESP, intercostal ciblé, PRF du ganglion spinal), ou poser un cathéter en situation palliative.
- **3 mois** : juger sur la fonction (kinésithérapie respiratoire, reprise d’activité, sommeil) autant que sur l’EN. Dans une douleur chronique constituée, si deux séries bien conduites n’ont rien donné de durable, changer de stratégie plutôt que de répéter un geste à risque.
- **Toujours coupler** au traitement de fond : gabapentinoïde ou IRSNA à dose efficace, **emplâtre de lidocaïne 5 %** ou **patch de capsaïcine 8 %** dans la névralgie post-zostérienne, kinésithérapie respiratoire et travail de la cicatrice après thoracotomie ou mastectomie. Le bloc paravertébral ouvre une fenêtre large ; ce qu’on met dedans décide du résultat.`,

  evidence: `- **Prévention de la douleur chronique post-chirurgicale : preuve la plus forte du dossier.** La revue systématique et méta-analyse Cochrane d’Andreae et Andreae (2013) sur l’anesthésie régionale pour prévenir la douleur chronique post-opératoire retient le **bloc paravertébral après thoracotomie** parmi les interventions à effet favorable. C’est une donnée de prévention péri-opératoire — elle ne dit rien de l’efficacité sur une douleur déjà constituée, et il faut le préciser au patient.
- **Zona et névralgie post-zostérienne : preuve modérée, sur la prévention.** Plusieurs essais ont évalué des **injections paravertébrales répétées** d’anesthésique local et de corticoïde à la phase aiguë du zona (travaux de Ji et coll. en 2009, de Makharita et Amr) avec des résultats favorables sur l’incidence de la névralgie post-zostérienne. À comparer à l’étude PINE (van Wijck et coll., 2006, *Lancet*), qui montre qu’une injection épidurale unique ne prévient **pas** la névralgie post-zostérienne : la répétition semble être la variable clé, ce qui est cohérent mais non formellement démontré.
- **Douleur pariétale chronique constituée : preuve faible.** Séries et pratique. Aucune méta-analyse, aucun ECR de bonne taille du bloc paravertébral en traitement d’une douleur post-thoracotomie ou post-mastectomie déjà installée. L’usage y est raisonnable comme bloc test et comme fenêtre antalgique, pas comme traitement de fond.
- **Description technique : solide.** L’espace, ses limites et le comportement de la diffusion ont été décrits par Karmakar puis par Richardson et Lönnqvist ; l’abord transversal in-plane a été popularisé par Shibata et Nishiwaki et par Karmakar. Ce corpus est technique, pas comparatif : **aucun essai n’a établi la supériorité d’un abord échoguidé sur l’autre**, ni de l’échoguidage sur le repère anatomique en termes de complications. Confiance : *probable*, sur un raisonnement mécanique (voir la plèvre et l’aiguille réduit le risque de les faire se rencontrer), pas *certaine*.
- **Complications : quantifiées surtout pour la technique au repère anatomique.** Les séries de référence (Naja et Lönnqvist, 2001) donnent des taux d’échec et de complications — pneumothorax, ponction vasculaire, diffusion épidurale, hypotension — qui restent la base de l’information du patient. Les taux sous échographie sont probablement plus bas, sans démonstration comparative.
- **Variabilité de la diffusion métamérique** : constante dans toute la littérature, avec des étendues très inégales d’un sujet à l’autre pour un même volume. C’est le point qui doit modérer les promesses faites au patient.
- **Trous de littérature assumés** : pas de comparaison paravertébral contre **ESP block** en douleur chronique, pas de schéma optimal (volume, nombre de niveaux, place et type de corticoïde), pas de donnée sur la répétition des blocs en douleur constituée, pas de donnée robuste sur le cathéter paravertébral en algologie non chirurgicale.`,

  references: [
    { auteurs: 'Karmakar MK', titre: 'Thoracic paravertebral block', revue: 'Anesthesiology', annee: '2001', type: 'mise au point', verif: false, note: 'La description de référence de l’espace, de ses limites et de la diffusion.' },
    { auteurs: 'Richardson J, Lönnqvist PA', titre: 'Thoracic paravertebral block', revue: 'Br J Anaesth', annee: '1998', type: 'mise au point', verif: false },
    { auteurs: 'Naja Z, Lönnqvist PA', titre: 'Somatic paravertebral nerve blockade: incidence of failed block and complications', revue: 'Anaesthesia', annee: '2001', type: 'série', verif: false, note: 'Base de l’information du patient sur le taux d’échec et de complications (technique au repère anatomique).' },
    { auteurs: 'Shibata Y, Nishiwaki K', titre: 'Ultrasound-guided intercostal approach to thoracic paravertebral block', revue: 'Anesth Analg', annee: '2009', type: 'technique', verif: false, note: 'Abord transversal in-plane latéro-médial.' },
    { auteurs: 'Karmakar MK', titre: 'Ultrasound-guided thoracic paravertebral block', revue: 'Tech Reg Anesth Pain Manag', annee: '2009', type: 'technique', verif: false },
    { auteurs: 'Andreae MH, Andreae DA', titre: 'Regional anaesthesia to prevent chronic pain after surgery: a Cochrane systematic review and meta-analysis', revue: 'Br J Anaesth', annee: '2013', type: 'méta-analyse', verif: false, note: 'Le meilleur niveau de preuve de la fiche — mais il porte sur la prévention péri-opératoire.' },
    { auteurs: 'Ji G, Niu J, Shi Y, Hou L, Lu Y, Xiong L', titre: 'The effectiveness of repetitive paravertebral injections with local anesthetics and steroids for the prevention of postherpetic neuralgia in patients with acute herpes zoster', revue: 'Anesth Analg', annee: '2009', type: 'ECR', verif: false },
    { auteurs: 'Makharita MY, Amr YM', titre: 'Effect of repeated paravertebral injections with local anesthetics and steroids on prevention of post-herpetic neuralgia', revue: 'Pain Physician', annee: '2018', type: 'ECR', verif: false },
    { auteurs: 'van Wijck AJ, Opstelten W, Moons KG, et al.', titre: 'The PINE study of epidural steroids and local anaesthetics to prevent postherpetic neuralgia: a randomised controlled trial', revue: 'Lancet', annee: '2006', type: 'ECR', verif: false, note: 'Comparateur essentiel : une injection épidurale unique ne prévient pas la névralgie post-zostérienne.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Bloc paravertébral thoracique : risque hémorragique intermédiaire.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'pvt-sagittal-sono', section: 'sonoanatomie', titre: 'Coupe sagittale paramédiane (2,5–3 cm de la ligne médiane) — vue de repérage',
      legende: 'Deux processus transverses à sommet APLATI (et non convexes comme les côtes : c’est le test de la bonne position de sonde), reliés par le ligament costo-transversaire supérieur. Sous ce ligament s’ouvre l’espace paravertébral, limité en avant par la plèvre. La distance ligament–plèvre est la marge de travail : la mesurer avant de ponctionner.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Sagittal paramédian', type: 'linéaire 8–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 116 L0 122 Z', label: 'Trapèze / rhomboïde', at: [110, 98], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 122], [640, 116]], width: 1.5 });
        S.muscle({ path: 'M0 122 L640 116 L640 212 L0 220 Z', label: 'Érecteurs du rachis', at: [120, 172], opacity: 0.55 });
        S.bone({ path: 'M40 232 Q140 212 240 232', label: 'Processus transverse', at: [130, 268], small: true, ldy: 0 });
        S.bone({ path: 'M400 232 Q500 212 600 232', label: 'Processus transverse', at: [500, 268], small: true, ldy: 0 });
        S.ligament({ path: 'M236 226 L404 226 L404 248 L236 248 Z', label: 'Lig. costo-transversaire supérieur', at: [320, 210], small: true });
        S.region({ path: 'M236 250 L404 250 L400 292 L240 292 Z', fill: '#7d8790', opacity: 0.32, label: 'Espace paravertébral', at: [286, 274], small: true });
        S.pleura({ points: [[214, 298], [320, 294], [426, 298]] });
        S.label({ x: 524, y: 310, text: 'Plèvre (glissement)', cls: 'lbl-pleura', small: true, anchor: 'middle', lead: [430, 298] });
        S.lung({ rect: [0, 302, 640, 118], label: 'Poumon — lignes A', at: [200, 356], small: true });
        S.target({ x: 386, y: 268, r: 13 });
      },
    },
    {
      id: 'pvt-sagittal-bloc', section: 'technique', titre: 'Abord sagittal paramédian — aiguille dans le plan, caudo-crâniale',
      legende: 'Technique de sécurité : prendre le contact osseux du processus transverse, reculer, puis progresser au maximum de 1 à 1,5 cm au-delà de son bord caudal — jamais plus. Franchissement du ligament costo-transversaire supérieur (ressaut à l’aiguille à biseau court), puis hydrolocalisation par 1–2 mL. Critère de fin : la plèvre RECULE et l’espace s’élargit. Limite de l’abord : l’angle d’insonation est défavorable et l’aiguille se voit mal — ne jamais avancer sans voir la pointe.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Sagittal paramédian', type: 'in-plane, caudo-crânial' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 116 L0 122 Z', opacity: 0.42 });
        S.fascia({ points: [[0, 122], [640, 116]], width: 1.5 });
        S.muscle({ path: 'M0 122 L640 116 L640 212 L0 220 Z', label: 'Érecteurs du rachis', at: [110, 168], opacity: 0.55, small: true });
        S.bone({ path: 'M40 232 Q140 212 240 232', label: 'PT', at: [130, 266], small: true, ldy: 0 });
        S.bone({ path: 'M400 232 Q500 212 600 232', label: 'PT', at: [500, 266], small: true, ldy: 0 });
        S.ligament({ path: 'M236 226 L404 226 L404 248 L236 248 Z', label: 'Lig. costo-transversaire sup.', at: [320, 208], small: true });
        S.region({ path: 'M236 250 L404 250 L400 292 L240 292 Z', fill: '#7d8790', opacity: 0.32 });
        S.pleura({ points: [[214, 300], [320, 296], [426, 300]] });
        S.lung({ rect: [0, 304, 640, 116], label: 'Poumon', at: [110, 350], small: true });
        S.target({ x: 322, y: 258, r: 18 });
        S.needle({ from: [636, 86], to: [332, 254], label: '20–22 G 80–100 mm, biseau court' });
        S.spread({ x: 320, y: 272, rx: 80, ry: 22, label: '10–20 mL' });
        S.label({ x: 500, y: 340, text: 'Plèvre repoussée en avant =\ncritère de fin', cls: 'lbl-pleura', small: true, anchor: 'middle', lead: [420, 302] });
      },
    },
    {
      id: 'pvt-transversal', section: 'technique', titre: 'Abord transversal in-plane latéro-médial (Shibata / Karmakar)',
      legende: 'Sonde transversale obliquée pour passer entre deux processus transverses. L’aiguille entre au bord latéral et progresse de latéral en médial, TANGENTIELLEMENT à la plèvre : elle est visible sur toute sa longueur, ce qui en fait l’abord le plus sûr vis-à-vis du pneumothorax. Contrepartie : la trajectoire pointe vers le foramen. Fixer visuellement une limite médiale (ligne du processus articulaire) et ne jamais la dépasser — au-delà, diffusion épidurale, voire injection intrathécale.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Latéral', right: 'Médial' }).probeInfo({ plan: 'Transversal oblique, entre deux processus transverses', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 74 L640 74 L640 114 L0 120 Z', label: 'Trapèze', at: [90, 96], opacity: 0.42, small: true });
        S.muscle({ path: 'M300 120 L640 114 L640 204 L312 214 Z', label: 'Érecteurs du rachis', at: [468, 164], opacity: 0.55, small: true });
        S.muscle({ path: 'M0 120 L300 120 L312 214 L0 224 Z', label: 'Muscles intercostaux', at: [128, 174], opacity: 0.45, small: true });
        S.fascia({ points: [[0, 240], [300, 244], [472, 282]], width: 2.4 });
        S.label({ x: 120, y: 232, text: 'Membrane intercostale interne', cls: 'lbl-fascia', small: true, anchor: 'middle' });
        S.region({ path: 'M300 252 L474 290 L448 314 L288 300 Z', fill: '#7d8790', opacity: 0.34, label: 'Espace paravertébral', at: [360, 342], small: true, lead: [368, 296] });
        S.bone({ path: 'M496 206 Q562 178 632 174', label: 'Lame / processus épineux', at: [556, 240], small: true, ldy: 0 });
        S.pleura({ points: [[74, 308], [280, 302], [452, 314]] });
        S.label({ x: 100, y: 330, text: 'Plèvre', cls: 'lbl-pleura', small: true, anchor: 'middle', lead: [110, 308] });
        S.lung({ rect: [0, 318, 640, 102], label: 'Poumon', at: [210, 372], small: true });
        S.target({ x: 382, y: 282, r: 18 });
        S.needle({ from: [0, 138], to: [398, 278], label: 'in-plane, visible sur toute sa longueur' });
        S.spread({ x: 368, y: 288, rx: 66, ry: 20, label: '10–20 mL' });
        S.label({ x: 500, y: 372, text: 'Limite médiale : ne pas dépasser —\nau-delà, le foramen', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
  ],

  checklist: [
    'Voie veineuse posée, monitorage tensionnel et SpO₂ en place — ce bloc ne se fait pas en consultation',
    'Émulsion lipidique 20 % et chariot d’urgence DANS la salle ; possibilité de drainage thoracique connue',
    'Niveaux comptés et marqués au feutre avant la désinfection',
    'Processus transverses formellement identifiés (sommet APLATI) et non confondus avec les côtes',
    'Distance ligament costo-transversaire – plèvre mesurée avant la ponction (marge de travail)',
    'Glissement pleural vérifié avant le geste, et BILATÉRALEMENT en fin de geste',
    'Anticoagulants gérés selon un risque hémorragique INTERMÉDIAIRE (et non comme un bloc de paroi)',
    'Corticoïde NON PARTICULAIRE (dexaméthasone) si un corticoïde est utilisé — communication avec l’espace épidural par le foramen',
    'Aspiration à la recherche de sang, d’air ET de LCR avant chaque bolus',
    'Patient prévenu : hypotension possible, Claude Bernard-Horner possible en thoracique haut, couverture métamérique non garantie',
    'Surveillance ≥ 60 min avec pression artérielle répétée et examen des membres inférieurs avant le lever',
    'Consigne écrite remise : dyspnée, douleur thoracique brutale, faiblesse des membres inférieurs ou malaise dans les 24 h = urgence ; pas de conduite le jour même',
  ],
});
