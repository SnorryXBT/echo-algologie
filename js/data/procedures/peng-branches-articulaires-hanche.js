/* Fiche : bloc PENG et branches articulaires de la hanche — bloc test, PRF/RF. */
ECHO.register({
  id: 'peng-branches-articulaires-hanche',
  titre: 'Bloc PENG et branches articulaires de la hanche',
  titreCourt: 'PENG / branches articulaires hanche',
  en: 'Pericapsular nerve group (PENG) block and articular branches of the hip — ultrasound-guided block, diagnostic block, pulsed and thermal radiofrequency denervation',
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Forte en douleur aiguë (méta-analyses d’ECR) ; faible en douleur chronique (séries, pas d’ECR contre sham publié à ma connaissance)',
  maj: '2026-09',
  motsCles: ['PENG', 'pericapsular nerve group', 'éminence ilio-pubienne', 'branches articulaires', 'dénervation de hanche', 'coxarthrose', 'nerf fémoral', 'obturateur accessoire', 'incisura acetabuli', 'radiofréquence', 'psoas', 'Girón-Arango'],
  resume: 'Le bloc PENG a été décrit en 2018 pour la fracture de hanche, avec une idée simple : plutôt que de bloquer des troncs nerveux entiers — au prix d’une faiblesse du quadriceps qui empêche la mobilisation —, déposer l’anesthésique dans le plan où convergent les **branches articulaires** de la capsule antérieure, entre le tendon du psoas et l’éminence ilio-pubienne. En algologie chronique, cette sélectivité devient le vrai sujet : le PENG est le bloc test qui identifie les candidats à une dénervation de hanche par radiofréquence. Il faut être clair sur l’état des preuves — massives en périopératoire, minces en douleur chronique — et sur le fait que la sélectivité annoncée n’est pas absolue : la faiblesse du quadriceps par diffusion au nerf fémoral est rapportée, surtout avec les volumes de 20 mL.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, membre en rotation neutre, hanche en extension ; billot sous le creux poplité si le rachis lombaire le réclame',
    sonde: 'convexe', sondeNote: '2–5 MHz, profondeur 7–10 cm ; linéaire basse fréquence possible chez le sujet mince',
    approche: 'in-plane', approcheNote: 'sonde transversale sur l’EIAI puis pivotée ~45° pour s’aligner sur la branche supérieure du pubis ; ponction **latéro-médiale**',
    aiguille: '22 G 90–100 mm échovisible ; aiguille RF 22 G 100 mm à extrémité active 5–10 mm pour la PRF/RF',
    cible: 'Plan entre la face profonde du **tendon du psoas** et la corticale de l’**éminence ilio-pubienne** : contact osseux, retrait de 1 mm, puis nappe qui **soulève le tendon du psoas** de l’os',
    injectat: '20 mL en périopératoire · **10–15 mL** en bloc test chronique (moins de diffusion fémorale, meilleure spécificité)',
    duree: '10–15 min bloc · 30–40 min RF',
  },

  indications: [
    '**Bloc test** avant radiofréquence des branches articulaires de la hanche, chez le patient à coxarthrose douloureuse **non opérable** ou refusant la chirurgie.',
    '**Douleur chronique de hanche** en échec d’infiltration intra-articulaire ou lorsque les corticoïdes sont contre-indiqués (diabète, arthroplastie programmée, infiltrations déjà répétées).',
    '**Douleur persistante après arthroplastie totale de hanche**, une fois le descellement et l’infection écartés.',
    '**Douleur cancéreuse** de hanche (métastase acétabulaire ou du col fémoral), en association aux traitements systémiques et à la radiothérapie.',
    'Analgésie de la **fracture de hanche** et de l’arthroplastie — indication d’origine, hors périmètre habituel de l’HDJ douleur mais utile à connaître : c’est là que se trouve la preuve.',
    'Facilitation de la kinésithérapie ou d’une mobilisation sous bloc chez un patient enraidi et algique.',
  ],
  contreIndications: [
    '**Absolues** : infection cutanée au point de ponction, refus, allergie aux amino-amides.',
    '**Relatives fortes** : patient à haut risque de chute, vivant seul, sans accompagnant — la **faiblesse du quadriceps** par diffusion au nerf fémoral est rapportée, surtout avec un volume de 20 mL.',
    '**Anticoagulation curative** : le PENG est un bloc **profond, dans le plan du psoas, sur un site non compressible**. Il n’existait pas lors de la publication des recommandations ASRA-ESRA 2018 et n’y figure donc pas ; par analogie avec les blocs profonds du compartiment du psoas, le classer par prudence en risque **intermédiaire à élevé**. *Classification extrapolée, à confirmer.*',
    '**Relatives** : diabète déséquilibré si corticoïde, obésité majeure rendant la cible inaccessible à une aiguille de 100 mm, antécédent de chirurgie ou de radiothérapie modifiant l’anatomie.',
    'Ne pas réaliser de radiofréquence sans **bloc test positif** documenté : on perd la valeur prédictive et l’on expose un patient à un geste ablatif sans argument.',
  ],
  alternatives: 'Pour la hanche douloureuse, l’ordre logique reste : mesures conservatrices et rééducation, puis **infiltration intra-articulaire** (fiche coxo-fémorale), qui est à la fois plus simple et mieux étayée. Le PENG intervient ensuite, comme bloc test et comme antalgie chez le patient non opérable. Il est **complémentaire du bloc obturateur** (fiche dédiée) : le PENG couvre la capsule antéro-supérieure via les branches fémorales et de l’obturateur accessoire, l’obturateur couvre la capsule antéro-inférieure. Un bloc test qui doit être concluant associe les deux. Les alternatives au PENG en analgésie sont le bloc du compartiment iliofascial et le bloc fémoral, tous deux plus anciens et mieux documentés mais **moins sélectifs** (faiblesse du quadriceps constante) — c’est précisément la comparaison sur laquelle le PENG a été construit. Enfin, l’**arthroplastie** reste le traitement de la coxarthrose évoluée chez le patient opérable : aucun bloc ne doit servir à la repousser indûment.',

  anatomie: `L’innervation de la **capsule antérieure** de la hanche provient de trois contingents :
- le **nerf fémoral**, qui donne des branches articulaires à la capsule antéro-supérieure et antéro-latérale ;
- le **nerf obturateur accessoire**, inconstant (présent dans une minorité de cas, proportion classiquement estimée entre 10 et 30 % — *à confirmer*), qui descend sur le pectiné ;
- le **nerf obturateur**, qui innerve la capsule antéro-inférieure, ses branches cheminant au voisinage de l’**incisura acetabuli** (échancrure acétabulaire) et du bord inférieur de l’acétabulum.

Le point de convergence des branches fémorales et de l’obturateur accessoire est le plan musculo-osseux compris entre la face profonde du **tendon du psoas** et la corticale de l’**éminence ilio-pubienne** — la crête osseuse qui unit l’ilion au pubis, entre l’**EIAI** (épine iliaque antéro-inférieure) en dehors et la branche supérieure du pubis en dedans. C’est ce plan que remplit le bloc PENG.

La **capsule postérieure** est innervée par des branches du nerf du carré fémoral et du nerf sciatique : elle n’est atteinte ni par le PENG ni par le bloc obturateur, ce qui explique une partie des blocs tests incomplets.

### Ce qui compte pour le geste
- **Le PENG ne couvre pas tout.** Il atteint les branches **fémorales** et de l’**obturateur accessoire**, mais pas de façon fiable les branches **obturatrices** de la capsule antéro-inférieure, ni la capsule postérieure. Pour un bloc test destiné à sélectionner un candidat à la dénervation, l’associer à un bloc obturateur.
- **La sélectivité n’est pas absolue.** Le plan visé est contigu au compartiment du psoas ; un volume important, une injection trop superficielle par rapport au tendon ou une diffusion latérale peuvent atteindre le **nerf fémoral** et faire dérober le quadriceps. En chronique, réduire le volume à 10–15 mL améliore à la fois la sécurité et la spécificité diagnostique.
- **Deux repères osseux, un plan.** L’**EIAI** en dehors, l’**éminence ilio-pubienne** en dedans ; le tendon du psoas, ovale hyperéchogène, repose sur cette dernière. La cible est le contact osseux **sous** le tendon.
- **Vaisseaux à repérer** : l’**artère fémorale** en dedans et en superficie, et surtout la **branche ascendante de l’artère circonflexe fémorale latérale**, qui croise fréquemment le trajet en superficie — c’est elle que le Doppler doit chercher.
- **Profondeur** : 5–8 cm chez l’adulte de corpulence normale, jusqu’à 10 cm chez l’obèse. Une aiguille de 90 mm peut être insuffisante : prévoir 100 mm.
- **Deux sites de dénervation** en radiofréquence : le plan sous-psoas à l’éminence ilio-pubienne (branches fémorales et de l’obturateur accessoire), et le voisinage de l’**incisura acetabuli** (branches obturatrices).`,

  installation: {
    patient: `**Décubitus dorsal**, membre inférieur en **rotation neutre**, hanche en extension. Un billot sous le creux poplité soulage le rachis lombaire sans fermer le pli inguinal, à condition de ne pas dépasser 10–15° de flexion de hanche.

Marquer l’**EIAS**, l’**EIAI** approximative et le trajet de l’**artère fémorale** au feutre avant la désinfection : ces trois repères bornent le champ. Désinfection large, du pli inguinal au tiers supérieur de la cuisse, avec détersion soignée d’une zone souvent macérée.

**Voie veineuse** recommandée : le volume d’anesthésique local est significatif et le site est profond.`,
    operateur: `Opérateur du **côté à traiter**, écran de l’autre côté du patient, dans l’axe du regard. La sonde convexe est d’abord placée transversalement à hauteur de l’**EIAI**, puis pivotée d’environ **45°** pour s’aligner sur la branche supérieure du pubis — l’image obtenue montre, de latéral en médial, l’EIAI, l’éminence ilio-pubienne, le tendon du psoas posé dessus, et l’artère fémorale en dedans.

La ponction se fait de **latéral en médial**, l’aiguille entrant à 2–3 cm en dehors du bord latéral de la sonde. Cette direction est essentielle : elle éloigne le trajet de l’artère fémorale et du nerf fémoral, qui sont en dedans.

Une aide est utile pour l’injection : sonde convexe, aiguille de 100 mm et seringue de 20 mL ne se tiennent pas à deux mains.`,
    sonde: `- **Convexe 2–5 MHz**, preset MSK ou abdominal, profondeur 7–10 cm, focale sur le plan osseux, gain réglé pour que la corticale de l’éminence ilio-pubienne soit blanche et franche et que le tendon du psoas s’en distingue.
- Linéaire basse fréquence (5–8 MHz) acceptable chez le sujet mince, avec un champ plus étroit.
- **Doppler couleur à basse PRF obligatoire** : artère fémorale en dedans, **branche ascendante de l’artère circonflexe fémorale latérale** en superficie sur le trajet.
- Aiguille **échovisible** fortement recommandée : à 7 cm et à 45°, une aiguille standard est difficile à suivre — or ici la profondeur de la pointe conditionne à la fois l’efficacité et la sécurité.
- Repérer le **tendon** du psoas (ovale hyperéchogène, dense) et non seulement le corps musculaire : c’est sa face profonde qui borne la cible.`,
  },

  reperage: [
    { titre: 'Partir de la coupe transverse au pli inguinal', texte: 'Comme pour toute la région, commencer par identifier de médial en latéral **veine fémorale, artère fémorale, nerf fémoral** sur le psoas. On pose ainsi la limite médiale du champ avant de la perdre de vue.' },
    { titre: 'Trouver l’EIAI', texte: 'Translater la sonde en latéral et en crânial jusqu’à voir l’**épine iliaque antéro-inférieure** : saillie corticale hyperéchogène avec ombre franche, sous le sartorius et le droit fémoral.' },
    { titre: 'Pivoter de 45° sur la branche pubienne', texte: 'Faire pivoter la sonde d’environ **45°**, de manière à aligner son grand axe sur la **branche supérieure du pubis**. L’image de travail apparaît : de latéral en médial, l’EIAI, puis le plateau de l’**éminence ilio-pubienne**, puis, plus en dedans et en superficie, l’**artère fémorale**.' },
    { titre: 'Identifier le tendon du psoas', texte: 'Sur ce plateau osseux repose le **tendon du psoas** : structure ovale, hyperéchogène et dense, distincte du corps musculaire qui l’entoure. La cible est **entre lui et l’os** — un espace virtuel, que l’injectat va ouvrir.' },
    { titre: 'Doppler sur le trajet prévu', texte: 'Balayer le trajet de la ponction au Doppler couleur : rechercher la **branche ascendante de l’artère circonflexe fémorale latérale**, qui croise fréquemment en superficie entre sartorius et droit fémoral, et vérifier la distance à l’artère fémorale en dedans.' },
    { titre: 'Si l’éminence ilio-pubienne ne se voit pas', texte: 'Le plus souvent, la sonde n’est pas assez pivotée ou trop crâniale : reprendre depuis l’EIAI et pivoter progressivement en gardant l’os à l’écran. Chez le patient obèse, augmenter la profondeur, appuyer fermement et faire expirer. Si la fenêtre reste mauvaise, ne pas forcer : le contact osseux à l’aveugle dans ce plan n’est pas acceptable.' },
  ],

  sonoanatomie: [
    { structure: 'Sartorius, droit fémoral', aspect: 'Muscles superficiels striés, en dehors', repere: 'Premier plan traversé par l’aiguille' },
    { structure: 'Ilio-psoas (corps musculaire)', aspect: 'Masse musculaire épaisse, pennée', repere: 'Entoure le tendon' },
    { structure: 'Tendon du psoas', aspect: 'Ovale **hyperéchogène dense**, distinct du corps musculaire', repere: 'Toit de la cible ; il doit se soulever à l’injection' },
    { structure: 'Éminence ilio-pubienne', aspect: 'Plateau cortical hyperéchogène avec ombre franche', repere: 'Plancher de la cible ; contact osseux visé' },
    { structure: 'EIAI (épine iliaque antéro-inférieure)', aspect: 'Saillie corticale, en dehors de l’éminence', repere: 'Borne latérale de l’image' },
    { structure: 'Artère fémorale', aspect: 'Vaisseau pulsatile, Doppler positif, en dedans et en superficie', repere: 'Limite médiale à ne pas franchir' },
    { structure: 'Nerf fémoral', aspect: 'Structure fasciculée aplatie sur le psoas, sous le fascia iliaca', repere: 'En dedans et en superficie du plan visé — cible de la diffusion indésirable' },
    { structure: 'A. circonflexe fémorale latérale (br. ascendante)', aspect: 'Petit vaisseau pulsatile superficiel', repere: 'Sur le trajet ; à éviter au Doppler' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Seringue de 20 mL étiquetée sur prolongateur souple, aiguille 22 G **100 mm** échovisible. Voie veineuse posée. **Émulsion lipidique et chariot d’urgence vérifiés** : le volume d’AL n’est pas anodin, surtout si un bloc obturateur est associé. Image de travail obtenue et figée mentalement avant de piquer.' },
    { titre: 'Anesthésie cutanée et du trajet', texte: '3 mL de lidocaïne 1 % au point d’entrée puis le long du trajet superficiel sous contrôle échographique. Le trajet fait 6 à 9 cm et traverse plusieurs plans musculaires : une anesthésie insuffisante fait bouger le patient au moment du contact osseux.' },
    { titre: 'Ponction in-plane latéro-médiale', texte: 'Entrée à 2–3 cm en dehors du bord latéral de la sonde, angle 40–50°, pointe orientée vers le **plateau de l’éminence ilio-pubienne**. Suivre l’aiguille sur toute sa longueur ; traverser sartorius / droit fémoral puis le corps du psoas. **Ne jamais dériver en dedans** : l’artère et le nerf fémoral y sont.' },
    { titre: 'Contact osseux et retrait', texte: 'Avancer jusqu’au **contact osseux franc** sur l’éminence ilio-pubienne, sous le tendon du psoas, puis **retirer de 1 mm**. Le contact osseux n’est pas une option : c’est lui qui garantit qu’on est sous le tendon et non dans le corps musculaire.' },
    { titre: 'Test et injection fractionnée', texte: 'Aspiration. Injection test de 1 mL : le liquide doit **soulever le tendon du psoas** de la corticale en une nappe qui s’étale le long de l’os. Si l’injectat forme une pelote dans le muscle, avancer de 1–2 mm jusqu’au contact osseux. Puis le volume total par fractions de 3–5 mL, avec aspiration entre chaque, en surveillant que la nappe reste plaquée sur l’os et ne fuse pas en dedans.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène **étalée le long de la corticale sur 3–5 cm**, tendon du psoas nettement décollé de l’os, sans diffusion médiale visible vers le paquet fémoral. Retrait sous contrôle, compression, pansement.' },
    { titre: 'Après le geste — évaluation obligatoire du quadriceps', texte: '**EN avant / à 30 min**, et surtout **test du quadriceps** : extension active du genou contre pesanteur, puis lever de chaise et marche encadrée avant la sortie. Toute faiblesse impose de garder le patient jusqu’à récupération complète et de contre-indiquer la conduite. Accompagnant obligatoire. Rappeler que le bloc ne dispense pas des précautions de charge habituelles.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test avant radiofréquence | Lidocaïne 1 % ou ropivacaïne 0,2 %, seule | **10–15 mL** | Volume réduit par rapport au protocole périopératoire : moins de diffusion vers le nerf fémoral, donc **meilleure spécificité diagnostique et moins de risque de chute**. Pas de corticoïde : on cherche une information |
| Bloc thérapeutique (patient non opérable) | Ropivacaïne 0,2 % + **dexaméthasone 4–8 mg** | 15–20 mL | Corticoïde **non particulaire** : plan profond au contact de branches artérielles, aucune raison de prendre le risque d’un particulaire |
| Analgésie périopératoire (protocole d’origine) | Ropivacaïne 0,2–0,5 % ou bupivacaïne 0,25 % | **20 mL** | Protocole des essais en fracture de hanche et arthroplastie. 20 mL de ropivacaïne 0,5 % = **100 mg** |
| Avant PRF / RF | Lidocaïne 1 % | 0,5–1 mL par site | Volume minimal : un volume important déplace la cible hors de portée de l’électrode et fausse la stimulation |
| Après PRF / RF | Ropivacaïne 0,2 % ± dexaméthasone 4 mg | 3–5 mL | Confort post-geste, prévention de la névrite post-RF |

**Doses maximales d’anesthésique local — à calculer systématiquement ici** : ropivacaïne **3 mg/kg** (≈ 225 mg chez 75 kg ; 20 mL de ropivacaïne 0,2 % = 40 mg, 20 mL de 0,5 % = 100 mg), bupivacaïne 2–2,5 mg/kg (≈ 150 mg), lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée).

**Le point d’attention n’est pas le PENG seul, c’est l’association.** Un bloc test complet de la hanche (PENG 15 mL + bloc obturateur inter-fascial 10 mL) représente 25 mL d’AL en site profond et vascularisé : chez un patient de 50 kg, le calcul devient contraignant. Réduire les concentrations plutôt que les volumes lorsque la couverture anatomique prime.

**Émulsion lipidique disponible et vérifiée** avant tout PENG : c’est un bloc profond, à volume significatif, dans une région vascularisée.`,

  variantes: [
    { titre: 'PENG à volume réduit — le bloc test de l’algologue', texte: `La différence entre le PENG d’anesthésie et le PENG d’algologie tient au volume. En périopératoire, on cherche une analgésie maximale et 20 mL sont justifiés. En bloc test, on cherche une **information sélective** : 10 à 15 mL suffisent, diffusent moins vers le nerf fémoral, et donnent un résultat plus interprétable — un patient soulagé par 12 mL déposés sous le psoas l’est très probablement par blocage des branches articulaires, pas par un bloc fémoral incomplet.

Documenter systématiquement, à côté de l’EN, la **force du quadriceps** : un soulagement obtenu avec un quadriceps faible est un bloc fémoral déguisé et n’a pas de valeur prédictive pour une dénervation.` },
    { titre: 'Radiofréquence pulsée (PRF) des branches articulaires', texte: `Après bloc test positif. Aiguille RF 22 G 100 mm, extrémité active 5–10 mm, placée **parallèlement** au plan osseux, au contact de l’éminence ilio-pubienne sous le tendon du psoas. Stimulation sensitive **50 Hz** : reproduction de la douleur de hanche à moins de 0,5 V. Stimulation motrice **2 Hz** : une contraction du quadriceps signe la proximité du nerf fémoral et impose de repositionner.

Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**, avec deux à trois positions successives le long de la corticale pour couvrir la variabilité anatomique. La PRF n’étant pas destructrice, elle est le premier choix ablatif chez un patient chez qui la sélectivité motrice n’est pas parfaitement assurée.` },
    { titre: 'Radiofréquence thermique — les deux cibles de la dénervation de hanche', texte: `La dénervation complète de la capsule antérieure suppose deux cibles :
1. **Plan sous-psoas à l’éminence ilio-pubienne** : branches du nerf **fémoral** et du nerf **obturateur accessoire** ;
2. **Voisinage de l’incisura acetabuli** (jonction ilio-ischiatique inférieure, bord inférieur de l’acétabulum) : branches du nerf **obturateur**.

Paramètres classiques : **80 °C pendant 90 s** par lésion, ou radiofréquence refroidie à 60 °C pendant 150 s ; plusieurs lésions par cible. **Stimulation motrice à 2 Hz obligatoire avant chaque lésion** : toute contraction du quadriceps ou des adducteurs impose de repositionner.

Ces cibles étant définies par des **repères osseux**, la dénervation de hanche a été décrite et est majoritairement pratiquée **sous scopie**. L’échographie sert au bloc test, au repérage préalable et au contrôle vasculaire ; la réalisation entièrement échoguidée est décrite mais moins validée. *À confirmer.*` },
    { titre: 'PENG + bloc obturateur : le bloc test complet', texte: `Parce que le PENG ne couvre pas de façon fiable les branches obturatrices de la capsule antéro-inférieure, un bloc test négatif sous PENG seul peut être un **faux négatif**. Chez un candidat sérieux à la dénervation, associer dans la même séance **PENG 15 mL** et **bloc obturateur inter-fascial 10 mL** (fiche dédiée), après calcul de la dose cumulée d’AL, puis évaluer l’EN et la marche à 30 min et à 24 h.` },
    { titre: 'PENG et bloc du nerf cutané latéral de la cuisse', texte: `En périopératoire d’arthroplastie par voie antérieure ou latérale, le PENG ne couvre pas le territoire cutané de l’incision : il est souvent complété par un **bloc du nerf cutané latéral de la cuisse** (fiche dédiée), qui n’ajoute aucun bloc moteur. Utile à connaître pour la douleur de cicatrice post-arthroplastie, où la composante neuropathique cutanée est fréquente et méconnue.` },
  ],

  pearls: [
    'Le contact osseux n’est pas facultatif : c’est lui qui garantit qu’on est sous le tendon du psoas et non dans le muscle.',
    'Le bon signe est le **soulèvement du tendon du psoas** ; une pelote intramusculaire signifie qu’on est trop superficiel.',
    'Ponction toujours de latéral en médial : l’artère et le nerf fémoral sont en dedans.',
    'En bloc test, réduire à 10–15 mL : moins de diffusion fémorale, résultat plus interprétable.',
    'Toujours documenter la force du quadriceps à côté de l’EN — sans cela, on ne sait pas si l’on a fait un PENG ou un bloc fémoral.',
    'Aiguille de 100 mm, pas 90 : chez le patient corpulent, 90 mm laisse la pointe à un centimètre de la cible.',
    'Pour un bloc test destiné à sélectionner un candidat à la dénervation, associer un bloc obturateur — sinon on s’expose à un faux négatif.',
  ],
  pieges: [
    'Injecter dans le corps du psoas faute de contact osseux : bloc inefficace, et le patient est classé « non répondeur » à tort.',
    'Utiliser 20 mL pour un bloc test : diffusion fémorale, quadriceps faible, résultat ininterprétable et risque de chute.',
    'Dériver en dedans pendant la progression : c’est la seule façon de rencontrer le paquet fémoral.',
    'Confondre le corps musculaire du psoas et son tendon : la cible est sous le **tendon**.',
    'Laisser repartir un patient sans avoir testé l’extension active du genou et la marche.',
    'Présenter le PENG comme validé en douleur chronique : la preuve est en périopératoire, pas en chronique. Le dire au patient.',
    'Enchaîner sur une radiofréquence sans bloc test documenté.',
  ],
  complications: [
    '**Faiblesse du quadriceps par diffusion au nerf fémoral** : la complication caractéristique du PENG, rapportée malgré la sélectivité annoncée, surtout avec 20 mL ou une injection trop superficielle. Conduite à tenir : garder le patient jusqu’à récupération complète, test de lever de chaise et de marche encadrée, conduite interdite, accompagnant obligatoire, information écrite.',
    '**Ponction de la branche ascendante de l’artère circonflexe fémorale latérale** : sur le trajet superficiel ; hématome de cuisse, compressible. Doppler préalable.',
    '**Ponction de l’artère ou de la veine fémorale** en cas de dérive médiale : hématome du pli inguinal, potentiellement volumineux.',
    '**Hématome profond dans le plan du psoas** : site **non compressible** ; prudence chez le patient anticoagulé, surveillance clinique prolongée en cas de ponction vasculaire.',
    '**Toxicité systémique aux anesthésiques locaux** : volume significatif en région vascularisée, risque majoré par l’association à un autre bloc. Signes prodromiques (goût métallique, acouphènes, agitation) → arrêt, oxygène, émulsion lipidique.',
    '**Injection intraneurale** (nerf fémoral) : douleur fulgurante, paresthésies crurales → arrêt immédiat, retrait.',
    '**Névrite post-radiofréquence** : douleur de désafférentation transitoire de quelques semaines après RF thermique ; prévention par corticoïde non particulaire en fin de geste et information préalable.',
    '**Bloc inefficace** : le plus souvent une pointe restée dans le corps du psoas, ou une douleur dont la source n’est pas capsulaire antérieure (capsule postérieure, rachis, sacro-iliaque).',
  ],
  securite: [
    'Doppler couleur systématique : artère fémorale en dedans, branche ascendante de la circonflexe fémorale latérale sur le trajet.',
    'Ponction strictement latéro-médiale ; limite médiale posée avant la ponction et jamais franchie.',
    'Contact osseux obligatoire avant injection ; aspiration avant chaque fraction ; injection fractionnée par 3–5 mL ; arrêt si l’injectat disparaît de l’écran.',
    'Dose cumulée d’AL calculée dès qu’un bloc obturateur ou un autre bloc est associé ; **émulsion lipidique vérifiée et immédiatement disponible** ; voie veineuse posée.',
    'Risque hémorragique : bloc **profond, plan du psoas, site non compressible** → classer par prudence en **intermédiaire à élevé**. *Le PENG ne figure pas dans les recommandations ASRA-ESRA 2018, publiées avant sa description : classification extrapolée, à confirmer.*',
    'Test du quadriceps (extension active, lever de chaise, marche encadrée) avant toute sortie, tracé au dossier ; accompagnant vérifié ; conduite interdite le jour même.',
    'Radiofréquence : stimulation motrice à 2 Hz avant chaque lésion ; toute contraction du quadriceps ou des adducteurs impose un repositionnement.',
  ],

  suivi: `- **J0** : EN avant / à 30 min ; **force du quadriceps** (extension active contre pesanteur, lever de chaise) ; marche encadrée avant la sortie. Consigner **conjointement** le soulagement et l’état moteur : c’est le couple qui donne sa valeur au test.
- **J1** : appel de contrôle. Un soulagement qui persiste au-delà de la durée pharmacologique de l’AL est un bon signe pronostique pour la dénervation.
- **J15–J30** : EN, périmètre de marche, retentissement nocturne, consommation d’antalgiques, HOOS ou WOMAC si un registre PROM est en place.
- **Décision** : soulagement **≥ 50 % pendant la durée de l’AL, avec quadriceps conservé** → candidat à la radiofréquence des branches articulaires. Soulagement obtenu avec quadriceps faible → test non valide, à refaire à volume réduit. Soulagement nul malgré une technique correcte → compléter par un **bloc obturateur** avant de conclure, puis reprendre le diagnostic (capsule postérieure, rachis lombaire, sacro-iliaque, trochanter).
- **Après radiofréquence** : évaluation à **4 et 12 semaines**, puis à **6 mois**. Durée d’effet rapportée de 6 à 12 mois dans les séries, répétable. Vérifier l’absence de déficit moteur à chaque visite.
- **En continu** : réévaluer l’opérabilité. Le PENG et la dénervation s’adressent au patient qui ne peut pas être opéré — pas à celui qui repousse une arthroplastie indiquée.`,

  evidence: `- **Description princeps (Girón-Arango, 2018, Regional Anesthesia and Pain Medicine)** : description du bloc PENG pour la fracture de hanche, fondée sur l’anatomie des branches articulaires de la capsule antérieure. C’est le point de départ de toute la littérature du sujet.
- **Base anatomique (Short, 2018, Regional Anesthesia and Pain Medicine)** : étude cadavérique de l’innervation de la capsule antérieure de la hanche, identifiant les contingents fémoral, obturateur et obturateur accessoire et les repères osseux utilisables. Preuve anatomique **solide** — c’est la partie la mieux établie de cette fiche.
- **Douleur aiguë** : la littérature est abondante et convergente. Plusieurs **méta-analyses d’essais randomisés** en fracture de hanche et en arthroplastie retrouvent, par rapport au bloc du compartiment iliofascial ou au bloc fémoral, une analgésie au moins équivalente au repos et supérieure au mouvement, avec une **préservation nettement meilleure de la force du quadriceps**. Preuve **forte** — mais dans une indication qui n’est pas celle de l’HDJ douleur.
- **Douleur chronique : preuve faible.** Les données se limitent à des rapports de cas, des petites séries et des cohortes prospectives, dans la coxarthrose non opérable, la douleur post-arthroplastie et la douleur cancéreuse. **À ma connaissance, aucun essai randomisé contre sham n’a été publié pour le PENG ni pour la radiofréquence articulaire de hanche** — contrairement au genou, où des essais contrôlés existent pour les nerfs géniculés. C’est le **trou principal de la littérature** et il doit être exposé au patient. *Point à confirmer en priorité lors de la passe de vérification bibliographique.*
- **Faiblesse du quadriceps après PENG** : rapportée dans plusieurs cas et séries, ce qui a conduit à discuter le volume et la profondeur exacte de l’injection. La sélectivité motrice du PENG est **relative, pas absolue** : c’est un avantage comparatif, pas une garantie.
- **Radiofréquence des branches articulaires** : rationnel anatomique solide, séries concordantes rapportant des durées d’effet de 6 à 12 mois chez les répondeurs au bloc test, aucun essai contrôlé de qualité. Preuve **faible**.
- **Seuil de 50 % au bloc test** : jamais validé formellement pour la hanche ; repris par analogie avec les branches médiales lombaires et les nerfs géniculés. *Extrapolation assumée.*`,

  references: [
    { auteurs: 'Girón-Arango L, Peng PWH, Chin KJ, Brull R, Perlas A', titre: 'Pericapsular nerve group (PENG) block for hip fracture', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'description technique', verif: false },
    { auteurs: 'Short AJ, Barnett JJG, Gofeld M, et al.', titre: 'Anatomic study of innervation of the anterior hip capsule: implication for image-guided intervention', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'anatomie', verif: false },
    { auteurs: 'Tran J, Agur A, Peng P', titre: 'Anatomical study of the innervation of anterior knee joint capsule: implication for image-guided intervention', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'anatomie', verif: false, note: 'Même équipe, méthodologie transposée ; cité pour la logique de cartographie des branches articulaires.' },
    { auteurs: 'Kawaguchi M, Hashizume K, Iwata T, Furuya H', titre: 'Percutaneous radiofrequency lesioning of sensory branches of the obturator and femoral nerves for the treatment of hip joint pain', revue: 'Regional Anesthesia and Pain Medicine', annee: '2001', type: 'série', verif: false },
    { auteurs: 'Locher S, Burmeister H, Böhlen T, et al.', titre: 'Radiological anatomy of the obturator nerve and its articular branches: basis to develop a method of radiofrequency denervation for hip joint pain', revue: 'Pain Medicine', annee: '2008', type: 'anatomie', verif: false },
    { auteurs: 'Birnbaum K, Prescher A, Hessler S, Heller KD', titre: 'The sensory innervation of the hip joint — an anatomical study', revue: 'Surgical and Radiologic Anatomy', annee: '1997', type: 'anatomie', verif: false, note: 'Étude cadavérique classique de l’innervation sensitive de la hanche, antérieure aux travaux de Short.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'recommandation', verif: true, note: 'Antérieur à la description du PENG : ce bloc n’y figure pas, la classification retenue dans la fiche est une extrapolation.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'peng-plan', section: 'sonoanatomie', titre: 'Coupe oblique PENG — le plan entre le tendon du psoas et l’éminence ilio-pubienne',
      legende: 'Sonde transversale sur l’EIAI puis pivotée d’environ 45° sur la branche supérieure du pubis. De latéral en médial : EIAI, plateau de l’éminence ilio-pubienne portant le tendon du psoas, puis l’artère fémorale et le nerf fémoral en dedans et en superficie. La cible est l’espace virtuel entre le tendon et la corticale.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (pubis)', right: 'Latéral (EIAI)' }).probeInfo({ plan: 'Oblique 45°, branche sup. du pubis', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M470 82 L640 78 L640 148 L482 154 Z', label: 'Sartorius / droit fémoral', at: [556, 116], opacity: 0.45, small: true });
        S.muscle({ path: 'M232 118 L560 112 L560 246 Q460 266 380 266 Q300 266 244 242 Z', label: 'Ilio-psoas', at: [346, 150], opacity: 0.5 });
        S.tendon({ x: 384, y: 214, rx: 62, ry: 18, label: 'Tendon du psoas', lx: 384, ly: 178, small: true });
        S.bone({ path: 'M0 322 Q140 294 268 278 L400 274 Q472 270 522 242 Q570 220 640 232' });
        S.label({ x: 250, y: 330, text: 'Éminence ilio-pubienne', cls: 'lbl-bone' });
        S.label({ x: 596, y: 204, text: 'EIAI', cls: 'lbl-bone', small: true, lead: [566, 230] });
        S.vein({ x: 56, y: 200, rx: 24, ry: 16, label: 'V. fémorale', lx: 56, ly: 246, small: true });
        S.artery({ x: 136, y: 186, r: 17, label: 'A. fémorale', lx: 136, ly: 146, small: true });
        S.nerve({ x: 202, y: 200, rx: 14, ry: 8, label: 'N. fémoral', lx: 208, ly: 158, anchor: 'start', small: true, lead: [206, 194] });
        S.artery({ x: 448, y: 138, r: 6, label: 'A. circonflexe fém. lat.', lx: 466, ly: 172, anchor: 'start', small: true, lead: [453, 143] });
        S.target({ x: 384, y: 258, r: 12 });
      },
    },
    {
      id: 'peng-geste', section: 'technique', titre: 'Ponction in-plane latéro-médiale — contact osseux sous le tendon du psoas',
      legende: 'L’aiguille entre en dehors et progresse vers le plateau de l’éminence ilio-pubienne, sans jamais dériver en dedans où sont l’artère et le nerf fémoral. Contact osseux franc, retrait de 1 mm, puis injection : le critère de fin est le soulèvement du tendon du psoas par une nappe étalée le long de la corticale. En bloc test, 10–15 mL suffisent.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (pubis)', right: 'Latéral (EIAI)' }).probeInfo({ plan: 'Oblique 45°, branche sup. du pubis', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M470 82 L640 78 L640 148 L482 154 Z', opacity: 0.45 });
        S.muscle({ path: 'M232 118 L560 112 L560 246 Q460 266 380 266 Q300 266 244 242 Z', label: 'Ilio-psoas', at: [346, 148], opacity: 0.5 });
        S.tendon({ x: 384, y: 214, rx: 62, ry: 18, label: 'Tendon du psoas', lx: 384, ly: 178, small: true });
        S.bone({ path: 'M0 322 Q140 294 268 278 L400 274 Q472 270 522 242 Q570 220 640 232' });
        S.label({ x: 232, y: 336, text: 'Éminence ilio-pubienne', cls: 'lbl-bone' });
        S.artery({ x: 136, y: 186, r: 17, label: 'A. fémorale', lx: 136, ly: 146, small: true });
        S.nerve({ x: 202, y: 200, rx: 14, ry: 8, label: 'N. fémoral', lx: 208, ly: 158, anchor: 'start', small: true, lead: [206, 194] });
        S.label({ x: 84, y: 272, text: 'Limite médiale\n— ne pas franchir', cls: 'lbl-target', small: true, anchor: 'start', lead: [218, 204] });
        S.target({ x: 386, y: 258, r: 12 });
        S.needle({ from: [636, 104], to: [398, 270], label: '22 G 100 mm' });
        S.spread({ x: 340, y: 254, rx: 86, ry: 18, label: '10–15 mL (test) · 20 mL (aigu)' });
      },
    },
    {
      id: 'peng-rf', section: 'technique', titre: 'Radiofréquence des branches articulaires — extrémité active couchée sur la corticale',
      legende: 'Après bloc test positif. L’aiguille RF est amenée au même endroit, aussi tangentiellement que possible au plateau osseux, de façon que son extrémité active longe la corticale sous le tendon du psoas. Stimulation sensitive à 50 Hz pour reproduire la douleur, stimulation motrice à 2 Hz pour exclure la proximité du nerf fémoral : toute contraction du quadriceps impose de repositionner. Deux à trois positions successives couvrent la variabilité anatomique.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (pubis)', right: 'Latéral (EIAI)' }).probeInfo({ plan: 'Oblique 45°, branche sup. du pubis', type: 'aiguille RF 22 G, extrémité active 10 mm' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M470 82 L640 78 L640 148 L482 154 Z', opacity: 0.45 });
        S.muscle({ path: 'M232 118 L560 112 L560 246 Q460 266 380 266 Q300 266 244 242 Z', label: 'Ilio-psoas', at: [346, 148], opacity: 0.5 });
        S.tendon({ x: 384, y: 214, rx: 62, ry: 18, label: 'Tendon du psoas', lx: 384, ly: 178, small: true });
        S.bone({ path: 'M0 322 Q140 294 268 278 L400 274 Q472 270 522 242 Q570 220 640 232' });
        S.label({ x: 232, y: 336, text: 'Éminence ilio-pubienne', cls: 'lbl-bone' });
        S.nerve({ x: 202, y: 200, rx: 14, ry: 8, label: 'N. fémoral', lx: 208, ly: 158, anchor: 'start', small: true, lead: [206, 194] });
        S.label({ x: 130, y: 254, text: 'Contraction du quadriceps\nà 2 Hz = repositionner', cls: 'lbl-target', small: true });
        S.needle({ from: [636, 116], to: [352, 268], label: 'Position 1' });
        S.needle({ from: [636, 176], to: [286, 272], label: 'Position 2' });
        S.spread({ x: 320, y: 260, rx: 58, ry: 10, label: '3–5 mL après lésion' });
      },
    },
  ],

  checklist: [
    'Bloc test documenté (EN + force du quadriceps) avant toute radiofréquence — pas de geste ablatif sans test positif',
    'Volume adapté à l’objectif : 10–15 mL en bloc test, 20 mL en analgésie aiguë',
    'Doppler fait : artère fémorale en dedans, branche ascendante de la circonflexe fémorale latérale sur le trajet',
    'Aiguille de 100 mm disponible (90 mm insuffisante chez le patient corpulent)',
    'Contact osseux obtenu avant injection ; soulèvement du tendon du psoas vérifié à l’injection test',
    'Dose cumulée d’AL calculée si bloc obturateur associé ; émulsion lipidique vérifiée ; voie veineuse posée',
    'Test du quadriceps (extension active, lever de chaise, marche encadrée) fait et tracé avant la sortie',
    'Accompagnant vérifié, conduite interdite le jour même',
    'Niveau de preuve expliqué au patient : solide en périopératoire, faible en douleur chronique',
  ],
});
