/* Fiche : nerf obturateur — bloc inter-fascial, approche proximale, branches articulaires de hanche, RF/PRF. */
ECHO.register({
  id: 'nerf-obturateur',
  titre: 'Nerf obturateur — bloc inter-fascial, approche proximale et branches articulaires de hanche',
  titreCourt: 'Nerf obturateur',
  en: 'Ultrasound-guided obturator nerve block — interfascial (distal) and proximal sub-pectineal approaches; articular branches of the hip, radiofrequency',
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Forte pour le bloc anesthésique (ECR) ; faible en algologie chronique de hanche (séries, pas d’ECR contre sham)',
  maj: '2026-09',
  motsCles: ['obturateur', 'adducteurs', 'coxarthrose', 'branches articulaires', 'dénervation de hanche', 'inter-fascial', 'court adducteur', 'pectiné', 'canal obturateur', 'radiofréquence', 'PRF', 'bloc test'],
  resume: 'En anesthésie, le bloc obturateur sert à supprimer la contraction des adducteurs ; en algologie, on cherche exactement l’inverse — atteindre les **branches articulaires** destinées à la capsule antéro-inférieure de la hanche sans bloquer les adducteurs. Cette différence d’objectif commande tout : le choix de la cible, le volume, et le fait que le geste diagnostique n’a de valeur que s’il reste sélectif. Le bloc obturateur est le pilier, avec le bloc des branches fémorales (voir la fiche PENG), de la filière neuro-ablative de la hanche douloureuse non opérable : bloc test, puis radiofréquence des branches articulaires. Deux approches échoguidées coexistent — inter-fasciale distale entre les adducteurs, simple et fiable, et proximale sous-pubienne, qui bloque le tronc en un seul point avant sa division.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, cuisse en **abduction 30° et rotation externe** (ouvre l’interstice des adducteurs) ; genou légèrement fléchi sur un coussin',
    sonde: 'lineaire', sondeNote: '6–13 MHz pour l’approche inter-fasciale distale (profondeur 4–6 cm) ; convexe 2–5 MHz pour l’approche proximale sous-pubienne chez le patient épais',
    approche: 'in-plane', approcheNote: 'inter-fasciale : sonde transversale à la racine de la cuisse, ponction médio-latérale ou latéro-médiale ; proximale : ponction latéro-médiale sous la branche supérieure du pubis',
    aiguille: '22 G 80–100 mm (échovisible recommandée) ; aiguille RF 22 G 100 mm à extrémité active 5–10 mm pour la PRF/RF',
    cible: 'Décollement des plans fasciaux : entre pectiné/long adducteur et court adducteur (branche antérieure), et entre court adducteur et grand adducteur (branche postérieure). Critère de fin : nappe anéchogène étalée le long du fascia, pas une pelote intramusculaire',
    injectat: '5 mL par plan (10 mL au total) pour la voie inter-fasciale ; 8–10 mL en un point pour la voie proximale',
    duree: '15 min bloc · 30–40 min RF',
  },

  indications: [
    '**Bloc test** avant radiofréquence des branches articulaires de la hanche, chez le patient présentant une coxarthrose douloureuse **non opérable** (comorbidités, refus, âge, obésité majeure) ou une douleur persistante après arthroplastie.',
    '**Douleur chronique de hanche** en échec d’infiltration intra-articulaire, ou chez qui les corticoïdes sont contre-indiqués (diabète, arthroplastie programmée, infiltrations déjà répétées).',
    '**Diagnostic différentiel** : une douleur inguinale et de la face médiale de la cuisse peut relever de la hanche, du nerf obturateur lui-même (compression dans le canal obturateur, hernie obturatrice, endométriose, syndrome de l’obturateur du sportif) ou du rachis L2-L4. Le bloc tronculaire tranche.',
    '**Neuropathie obturatrice** authentique : douleur inguinale et médiale de cuisse avec faiblesse des adducteurs, souvent post-chirurgicale (chirurgie pelvienne, gynécologique, urologique) ou post-traumatique.',
    'Douleur cancéreuse de hanche ou du bassin, en association aux traitements systémiques.',
    '*Hors périmètre de cette fiche* : bloc obturateur pour spasticité des adducteurs (neurologie / MPR) et bloc peropératoire pour résection endoscopique de tumeur vésicale — mêmes repères, autre objectif.',
  ],
  contreIndications: [
    '**Absolues** : infection cutanée au point de ponction, refus, allergie aux amino-amides.',
    '**Relatives fortes** : patient à haut risque de chute, vivant seul, sans accompagnant — le bloc tronculaire entraîne une **faiblesse des adducteurs** avec instabilité à la marche pendant toute la durée de l’AL.',
    '**Anticoagulation curative** : l’approche **proximale** longe les vaisseaux obturateurs dans un espace **non compressible** (canal obturateur, petit bassin). La classer par prudence en risque **intermédiaire à élevé** ; l’approche inter-fasciale distale, plus superficielle et compressible, se rapproche du risque **faible à intermédiaire**. Ce bloc ne figure pas explicitement dans les recommandations ASRA-ESRA 2018 : *classification extrapolée, à confirmer*.',
    '**Relatives** : diabète déséquilibré si corticoïde, grossesse (approche proximale à éviter), antécédent de chirurgie pelvienne modifiant l’anatomie.',
    'Ne pas réaliser de **radiofréquence thermique sur le tronc obturateur** : elle entraînerait un déficit moteur permanent des adducteurs. Seules les **branches articulaires** sont des cibles ablatives légitimes.',
  ],
  alternatives: 'Pour la douleur de hanche : infiltration intra-articulaire (fiche coxo-fémorale) en première intention, puis **bloc PENG** qui couvre les branches articulaires fémorales et de l’obturateur accessoire (fiche dédiée). Le bloc obturateur et le PENG sont **complémentaires, pas concurrents** : le PENG atteint la capsule antéro-supérieure, l’obturateur la capsule antéro-inférieure. Un bloc test complet de la hanche associe donc les deux. Ensuite : radiofréquence (pulsée ou thermique) des branches articulaires fémorale et obturatrice, historiquement décrite et validée **sous scopie** sur des repères osseux fiables, l’échoguidage venant en complément ou en repérage préalable. Enfin : arthroplastie chez le patient opérable — le geste neuro-ablatif ne doit jamais servir à repousser une chirurgie qui reste indiquée.',

  anatomie: `Le nerf obturateur naît des racines **L2-L3-L4**, émerge du **bord médial du psoas**, descend contre la paroi latérale du petit bassin et franchit le **canal obturateur**, sous la **branche supérieure du pubis** et au-dessus de la membrane obturatrice, accompagné des **vaisseaux obturateurs** (l’artère et la veine étant le plus souvent supérieures et latérales au nerf dans le canal).

À la sortie du canal, il se divise en deux branches, séparées par le **court adducteur** :
- la **branche antérieure** passe **en avant du court adducteur** et en arrière du pectiné puis du long adducteur. Elle innerve long adducteur, court adducteur et gracile, donne un rameau cutané inconstant à la face médiale de la cuisse, et surtout — pour ce qui nous occupe — des **branches articulaires pour la hanche** ;
- la **branche postérieure** passe **en arrière du court adducteur** et en avant du grand adducteur. Elle innerve le grand adducteur et l’obturateur externe, et donne une branche articulaire pour le **genou** (d’où des douleurs de hanche projetées au genou, et réciproquement).

Un **nerf obturateur accessoire** existe dans une minorité de cas (proportion classiquement estimée entre 10 et 30 % — *à confirmer*) ; il descend sur le pectiné plutôt que dans le canal, et participe à l’innervation de la capsule antérieure.

### Ce qui compte pour le geste
- **Deux objectifs, deux cibles.** Bloquer le **tronc** (approche proximale) donne un bloc complet, diagnostique, mais avec faiblesse des adducteurs. Bloquer les **branches articulaires** seules est plus sélectif mais techniquement plus exigeant, et se fait surtout en association avec les branches fémorales (fiche PENG).
- **L’approche inter-fasciale distale ne cherche pas le nerf, elle cherche un plan.** Les branches y sont fines et rarement individualisées : le repère est le **fascia** entre pectiné/long adducteur et court adducteur, puis entre court adducteur et grand adducteur. Le critère de succès est le décollement de ces plans, pas la visualisation du nerf.
- **L’approche proximale sous-pubienne** bloque le tronc avant sa division, en un seul point, avec un volume moindre. Elle est plus rapide et plus fiable mais passe près des vaisseaux obturateurs et du petit bassin : plus exigeante et moins tolérante à l’erreur.
- **Les branches articulaires de la hanche issues de l’obturateur** cheminent vers la capsule antéro-inférieure, au voisinage de l’**incisura acetabuli** (échancrure acétabulaire). C’est le repère cible de la dénervation, décrit par les travaux d’anatomie appliquée sur l’innervation de la capsule antérieure.
- **Repères de profondeur** : plans inter-fasciaux à 2–5 cm en distal ; canal obturateur à 4–7 cm en proximal.`,

  installation: {
    patient: `**Décubitus dorsal**, cuisse à traiter en **abduction de 30° et rotation externe modérée**, genou légèrement fléchi sur un coussin : cette position ouvre l’interstice entre les adducteurs et rend les plans fasciaux lisibles. Sans elle, les muscles sont tassés et le geste devient difficile.

Champ opératoire allant du pli inguinal au tiers supérieur de la face médiale de la cuisse. Zone à forte densité bactérienne et souvent macérée : détersion soignée, séchage, deux passages d’antiseptique alcoolique. Champage écartant la région génitale, et **information explicite du patient** sur la nature du site abordé — c’est un geste dont il faut expliquer la localisation avant de commencer.

Voie veineuse recommandée pour l’approche proximale et pour tout geste de radiofréquence.`,
    operateur: `Opérateur du **côté à traiter**, écran en face. Pour la voie inter-fasciale, la sonde est transversale sur la face médiale de la cuisse, 2 à 4 cm sous le pli inguinal, et l’aiguille est introduite in-plane, le plus souvent de **médial en latéral** (le trajet suit alors le plan à décoller) ; l’abord latéro-médial est possible et éloigne davantage du champ génital, ce qui est parfois préférable.

Pour la voie proximale, la sonde est placée au niveau du pli inguinal sur le pectiné et l’aiguille vient de **latéral en médial**, sous la branche supérieure du pubis — direction qui l’éloigne des vaisseaux fémoraux.

Deux seringues préparées et étiquetées si l’on réalise le double bloc inter-fascial : on ne recharge pas une seringue avec l’aiguille en place.`,
    sonde: `- **Linéaire 6–13 MHz** pour l’approche inter-fasciale (profondeur 4–6 cm) ; **convexe 2–5 MHz** pour l’approche proximale ou chez le patient obèse.
- Preset MSK ou nerf, focale sur le plan fascial visé, gain réglé pour que les fascias apparaissent comme des lignes blanches nettes entre des muscles gris.
- **Doppler couleur systématique** : artère fémorale profonde et ses branches en superficie latérale pour la voie distale ; **vaisseaux obturateurs** pour la voie proximale — ce sont eux qui font le risque du geste.
- Aiguille **échovisible** fortement recommandée : les plans sont profonds et l’angle souvent supérieur à 40°.
- Repérer et compter les couches musculaires **avant** de piquer : de superficiel à profond, long adducteur (médial) et pectiné (latéral), puis court adducteur, puis grand adducteur. Trois muscles, deux plans, deux cibles.`,
  },

  reperage: [
    { titre: 'Se placer à la racine de la face médiale de cuisse', texte: 'Sonde **transversale** sur la face médiale de la cuisse, 2 à 4 cm sous le pli inguinal, cuisse en abduction-rotation externe. Balayer en dedans et en dehors jusqu’à obtenir une image claire de trois couches musculaires superposées.' },
    { titre: 'Compter les trois muscles', texte: 'De superficiel à profond : **long adducteur** (médial) et **pectiné** (latéral) forment la couche superficielle ; puis le **court adducteur** ; puis le **grand adducteur**. Les identifier un par un est l’étape clé : tout le geste repose sur ce comptage. En cas de doute, glisser en dedans jusqu’au gracile (le plus médial et le plus fin) et revenir.' },
    { titre: 'Repérer les deux plans fasciaux', texte: 'Entre couche superficielle et court adducteur : **plan 1**, où chemine la **branche antérieure**. Entre court adducteur et grand adducteur : **plan 2**, où chemine la **branche postérieure**. Les branches y apparaissent comme de fines structures aplaties hyperéchogènes, souvent **non individualisables** — ce n’est pas un problème, le plan est la cible.' },
    { titre: 'Doppler', texte: 'Activer le Doppler couleur sur le trajet prévu : l’artère fémorale profonde et ses branches perforantes traversent la région, généralement en position superficielle et latérale. Décaler le point d’entrée plutôt que de traverser un vaisseau.' },
    { titre: 'Approche proximale — retrouver la branche supérieure du pubis', texte: 'Remonter la sonde jusqu’au **pli inguinal**, sur le pectiné : apparaît en profondeur et en dedans la corticale de la **branche supérieure du pubis** avec son ombre. Sous elle, entre pectiné et **obturateur externe**, se trouve le tronc obturateur, accompagné des vaisseaux obturateurs (Doppler). C’est la cible de la voie proximale : un seul plan, un seul point d’injection.' },
    { titre: 'Si les plans restent illisibles', texte: 'Trois manœuvres : (1) accentuer l’abduction et la rotation externe ; (2) faire contracter les adducteurs contre résistance — les ventres musculaires se dissocient et les fascias apparaissent ; (3) passer au convexe et augmenter la profondeur. En dernier recours, se contenter du **plan 1** (branche antérieure), qui porte l’essentiel des branches articulaires de la hanche.' },
  ],

  sonoanatomie: [
    { structure: 'Long adducteur', aspect: 'Muscle superficiel médial, strié', repere: 'Couche superficielle, en dedans' },
    { structure: 'Pectiné', aspect: 'Muscle superficiel latéral, plus court', repere: 'Couche superficielle, en dehors ; devient la couverture de la cible en proximal' },
    { structure: 'Court adducteur', aspect: 'Couche musculaire intermédiaire', repere: '**Le muscle clé** : il sépare les deux branches' },
    { structure: 'Grand adducteur', aspect: 'Couche musculaire profonde, épaisse', repere: 'Plancher du plan 2' },
    { structure: 'Plan fascial 1', aspect: 'Ligne hyperéchogène entre couche superficielle et court adducteur', repere: 'Branche **antérieure** — porte les branches articulaires de hanche' },
    { structure: 'Plan fascial 2', aspect: 'Ligne hyperéchogène entre court adducteur et grand adducteur', repere: 'Branche **postérieure** — donne la branche articulaire du genou' },
    { structure: 'Branches du nerf obturateur', aspect: 'Fines structures aplaties hyperéchogènes, souvent **non individualisées**', repere: 'Dans les plans fasciaux ; ne pas s’acharner à les voir' },
    { structure: 'Branche supérieure du pubis', aspect: 'Corticale hyperéchogène avec ombre franche (voie proximale)', repere: 'Toit du canal obturateur' },
    { structure: 'Vaisseaux obturateurs', aspect: 'Artère pulsatile et veine, Doppler positif (voie proximale)', repere: 'Le risque principal de la voie proximale' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Deux seringues de 10 mL étiquetées, aiguille 22 G 80–100 mm échovisible sur prolongateur souple. Voie veineuse pour la voie proximale et pour la RF. Comptage des trois muscles fait et validé **avant** la ponction.' },
    { titre: 'Anesthésie cutanée', texte: '2 mL de lidocaïne 1 % au point d’entrée et le long du trajet superficiel. Systématique : le trajet est long et la région sensible.' },
    { titre: 'Plan 1 — branche antérieure', texte: 'Ponction in-plane, pointe amenée dans le **fascia entre la couche superficielle (pectiné / long adducteur) et le court adducteur**. Aspiration, puis injection test de 0,5–1 mL : le liquide doit **écarter les deux muscles** en une nappe linéaire qui s’étale le long du fascia. Une image en pelote arrondie signifie une position intramusculaire : repositionner de 1–2 mm. Puis **5 mL** fractionnés.' },
    { titre: 'Plan 2 — branche postérieure', texte: 'Sans retirer complètement l’aiguille, la réorienter plus profondément jusqu’au **fascia entre court adducteur et grand adducteur**. Même séquence : aspiration, test de 0,5 mL, décollement fascial visible, puis **5 mL** fractionnés. Total 10 mL.' },
    { titre: 'Voie proximale (alternative) — un seul point', texte: 'Sonde au pli inguinal sur le pectiné, branche supérieure du pubis identifiée, vaisseaux obturateurs repérés au Doppler. Aiguille in-plane de latéral en médial, pointe placée dans le plan entre **pectiné et obturateur externe**, juste sous la corticale pubienne. Aspiration soigneuse et **répétée**. Injection de **8–10 mL** fractionnés par 2 mL, en surveillant la nappe.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène **linéaire, étalée sur 3–4 cm le long du fascia**, sans image intramusculaire ni disparition brutale de l’injectat (qui signerait une injection intravasculaire). Retrait de l’aiguille sous contrôle, compression 2 min, pansement.' },
    { titre: 'Après le geste — évaluation du bloc', texte: 'À 20 min : **EN avant / après**, et test moteur de l’**adduction contre résistance** (le bloc tronculaire l’affaiblit — c’est le témoin de la réussite technique, pas de l’efficacité antalgique). **Test de marche obligatoire avant la sortie** : instabilité par faiblesse des adducteurs. Conduite interdite le jour même, accompagnant nécessaire. Consignes écrites.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test avant RF | Lidocaïne 1 % ou ropivacaïne 0,2 %, seule | 5 mL par plan (10 mL) ou 8 mL en proximal | Pas de corticoïde : on cherche une **information**, pas un effet prolongé. Utiliser la lidocaïne quand on veut une récupération rapide de la marche |
| Bloc thérapeutique | Ropivacaïne 0,2 % + dexaméthasone 4–8 mg, ou bétaméthasone 5,7 mg | 5 mL par plan (10 mL) | **Corticoïde non particulaire recommandé** : proximité des vaisseaux obturateurs, notamment en voie proximale. Le particulaire n’est acceptable qu’en voie inter-fasciale distale, et sans justification forte il n’apporte rien |
| Voie proximale sous-pubienne | Ropivacaïne 0,2 % ± dexaméthasone 4 mg | 8–10 mL | Un seul point ; volume plus élevé pour couvrir le tronc avant division |
| Avant PRF / RF | Lidocaïne 1 % | 0,5–1 mL par site | Volume minimal : un volume important déplace la cible hors de portée de l’électrode et fausse la stimulation |
| Après PRF / RF | Ropivacaïne 0,2 % ± dexaméthasone 4 mg | 2–3 mL par site | Confort post-geste, limitation de la névrite post-RF |

**Doses maximales d’anesthésique local** — à calculer ici, les volumes n’étant plus négligeables : ropivacaïne **3 mg/kg** (≈ 225 mg chez 75 kg ; 10 mL de ropivacaïne 0,2 % = 20 mg), bupivacaïne 2–2,5 mg/kg, lidocaïne **4,5 mg/kg** (7 mg/kg adrénalinée ; 10 mL de lidocaïne 1 % = 100 mg). Un bloc obturateur isolé reste très en deçà — **mais l’association fréquente avec un bloc PENG (15–20 mL) dans la même séance impose d’additionner**, surtout chez un patient de faible poids.

**Chariot d’urgence et émulsion lipidique disponibles** dès que le volume cumulé d’AL dépasse une dizaine de millilitres ou qu’un bloc est réalisé à proximité de vaisseaux.`,

  variantes: [
    { titre: 'Voie inter-fasciale distale — pourquoi la préférer en routine', texte: `Décrite comme technique de référence pour l’échoguidage, elle a l’avantage d’être **superficielle, compressible et sans structure noble sur le trajet**, et de ne demander qu’un comptage musculaire. Elle bloque les deux branches par deux injections, ou la seule branche antérieure par une injection unique lorsque l’objectif est la hanche. Son défaut : elle est en aval de l’origine de certaines branches articulaires proximales, ce qui peut expliquer des blocs tests incomplets. En pratique : voie de première intention, sauf si le bloc test doit être aussi complet que possible.` },
    { titre: 'Voie proximale sous-pubienne', texte: `Sonde au pli inguinal sur le pectiné, orientée pour dégager la **branche supérieure du pubis** ; le nerf est abordé dans le plan entre **pectiné et obturateur externe**, avant sa division, en un seul point avec 8–10 mL.

Avantages : bloc plus complet et plus fiable, un seul point de ponction, volume total moindre qu’un double bloc — c’est la voie à choisir pour un **bloc test qui doit être concluant**. Inconvénients : profondeur, proximité des **vaisseaux obturateurs**, espace non compressible, courbe d’apprentissage plus longue. Chez le patient anticoagulé ou anxieux, préférer la voie distale.` },
    { titre: 'Radiofréquence pulsée (PRF) du nerf ou de ses branches', texte: `Après bloc test positif (soulagement ≥ 50 % pendant la durée de l’AL). Aiguille RF 22 G 100 mm, extrémité active 5–10 mm, placée **parallèlement** au trajet. Stimulation sensitive **50 Hz** : reproduction de la douleur inguinale ou de hanche à moins de 0,5 V. Stimulation motrice **2 Hz** : une contraction des adducteurs à faible tension signe la proximité du tronc — acceptable en PRF (qui n’est pas destructrice), **rédhibitoire avant une RF thermique**.

Paramètres usuels de PRF : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. La PRF a l’avantage majeur de ne pas créer de déficit moteur, ce qui la rend utilisable même lorsque la sélectivité sur les branches articulaires n’est pas parfaite.` },
    { titre: 'Radiofréquence thermique des branches articulaires — pas du tronc', texte: `La dénervation de la hanche associe classiquement deux cibles : les **branches articulaires du nerf fémoral** (au voisinage de l’éminence ilio-pubienne, voir la fiche PENG) et les **branches articulaires de l’obturateur** (au voisinage de l’**incisura acetabuli**, à la jonction ilio-ischiatique inférieure). Paramètres de RF thermique classiques : **80 °C pendant 90 s** par site, ou RF refroidie à 60 °C pendant 150 s ; plusieurs lésions par cible pour couvrir la variabilité anatomique.

**Règle absolue** : la RF thermique ne s’applique **jamais au tronc obturateur** — elle produirait un déficit moteur permanent des adducteurs. La stimulation motrice à 2 Hz avant lésion sert précisément à l’exclure : toute contraction des adducteurs impose de repositionner.

Ces cibles étant définies par des **repères osseux**, la dénervation de hanche est historiquement réalisée **sous scopie**, l’échographie servant au repérage préalable, au bloc test et au contrôle des structures vasculaires. Réaliser la RF sous échographie seule est décrit mais moins validé : *à confirmer*.` },
    { titre: 'Association obturateur + PENG — le bloc test complet de la hanche', texte: `La capsule antérieure de la hanche est innervée par des branches du nerf **fémoral** (antéro-supérieure), du nerf **obturateur** (antéro-inférieure) et du nerf **obturateur accessoire** quand il existe. Un bloc test qui ne couvre qu’un seul de ces contingents peut être faussement négatif.

En pratique, chez un candidat à la dénervation : **PENG 15 mL + bloc obturateur inter-fascial 10 mL** dans la même séance, avec calcul de la dose cumulée d’AL, puis évaluation de l’EN et de la marche à 30 min et à 24 h. Un soulagement ≥ 50 % autorise à proposer la radiofréquence.` },
  ],

  pearls: [
    'Compter les trois muscles avant de piquer : long adducteur / pectiné, puis court adducteur, puis grand adducteur. Tout le geste tient à ce comptage.',
    'Ne pas chercher le nerf : chercher le **plan**. La nappe doit être linéaire et étalée, pas arrondie.',
    'Abduction 30° + rotation externe : sans cette position, les plans sont tassés et illisibles.',
    'Faire contracter les adducteurs contre résistance pour faire apparaître les fascias quand l’image est mauvaise.',
    'Si l’on ne peut faire qu’un seul plan, faire le **plan 1** (branche antérieure) : c’est lui qui porte les branches articulaires de la hanche.',
    'Pour un bloc test qui doit être concluant, associer PENG et obturateur — sinon on risque un faux négatif.',
    'Choisir la lidocaïne plutôt qu’un AL de longue durée chez un patient âgé : la marche redevient sûre en 1–2 h.',
  ],
  pieges: [
    'Confondre court adducteur et grand adducteur : on injecte alors deux fois dans le même plan et le bloc est incomplet.',
    'Prendre une pelote intramusculaire pour un décollement fascial et déclarer le geste réussi.',
    'Réaliser une RF thermique sur le tronc : déficit moteur permanent des adducteurs — la faute grave de cette fiche.',
    'Négliger la stimulation motrice à 2 Hz avant lésion thermique.',
    'Oublier le test de marche avant la sortie : le patient repart avec des adducteurs faibles et chute.',
    'Additionner un PENG et un bloc obturateur sans calculer la dose cumulée d’AL chez un patient de faible poids.',
    'Conclure à un bloc test négatif alors qu’on n’a couvert qu’un seul contingent d’innervation capsulaire.',
  ],
  complications: [
    '**Faiblesse des adducteurs** : attendue après bloc tronculaire, durée équivalente à celle de l’AL. Instabilité à la marche, risque de **chute**. Prévenir avant, tester la marche après, accompagnant obligatoire, conduite interdite.',
    '**Ponction des vaisseaux obturateurs** (voie proximale) : hématome dans le canal obturateur ou le petit bassin, **non compressible**. Doppler préalable et aspiration répétée sont les seules protections. Surveillance clinique prolongée en cas de ponction vasculaire.',
    '**Ponction de l’artère fémorale profonde ou de ses branches** (voie distale) : hématome de cuisse, compressible.',
    '**Injection intravasculaire et toxicité systémique aux AL** : disparition brutale de l’injectat à l’écran, goût métallique, acouphènes, agitation. Arrêt immédiat, oxygène, émulsion lipidique disponible. Risque majoré par le volume et par l’association à un autre bloc.',
    '**Injection intraneurale** : douleur fulgurante, paresthésies de la face médiale de la cuisse → arrêt immédiat, retrait, repositionnement.',
    '**Névrite post-radiofréquence** : douleur de désafférentation transitoire de quelques semaines après RF thermique ; prévention par corticoïde non particulaire en fin de geste, information préalable.',
    '**Lésion vésicale ou d’un organe pelvien** : théorique, décrite avec les approches très proximales par repères anatomiques ; l’échoguidage et le contact osseux pubien la rendent exceptionnelle. Ne jamais progresser en aveugle en direction du petit bassin.',
  ],
  securite: [
    'Doppler couleur systématique — vaisseaux obturateurs en voie proximale, artère fémorale profonde en voie distale.',
    'Aspiration avant chaque fraction ; injection fractionnée par 2 mL maximum ; arrêt immédiat si l’injectat disparaît de l’écran.',
    'Dose cumulée d’AL calculée quand un PENG ou un autre bloc est associé dans la même séance ; émulsion lipidique et chariot d’urgence disponibles.',
    'Risque hémorragique : voie proximale en site **non compressible** → classer par prudence en **intermédiaire à élevé** ; voie inter-fasciale distale en **faible à intermédiaire**. *Bloc non listé explicitement dans les recommandations ASRA-ESRA 2018 : classification extrapolée, à confirmer.*',
    'Stimulation motrice à 2 Hz obligatoire avant toute lésion thermique ; toute contraction des adducteurs impose de repositionner.',
    'Jamais de radiofréquence thermique sur le tronc obturateur.',
    'Test de marche et évaluation de l’adduction contre résistance avant la sortie, tracés au dossier ; accompagnant vérifié.',
  ],

  suivi: `- **J0** : EN avant / à 20 min et à 60 min ; force d’adduction contre résistance ; **test de marche avant la sortie**. Consigner la durée de la faiblesse des adducteurs.
- **J1** : appel de contrôle si possible — c’est à 24 h que l’on juge la valeur du bloc test (au-delà de la durée pharmacologique de l’AL, un soulagement persistant est un bon signe pronostique).
- **J15–J30** : EN, périmètre de marche, retentissement nocturne, consommation d’antalgiques. Décision : si le soulagement a été **≥ 50 % pendant la durée de l’AL**, le patient est candidat à la radiofréquence des branches articulaires ; sinon, reprendre le diagnostic.
- **Après radiofréquence** : évaluation à **4 et 12 semaines**, puis à **6 mois**. Durée d’effet attendue de 6 à 12 mois dans les séries publiées, répétable. Vérifier systématiquement l’absence de déficit d’adduction.
- **En continu** : ne pas laisser la filière neuro-ablative retarder une arthroplastie chez un patient qui redevient opérable (perte de poids, équilibration d’une comorbidité). Réévaluer l’indication chirurgicale à chaque étape.`,

  evidence: `- **Bloc obturateur échoguidé en anesthésie** : le domaine est solidement documenté. Les approches **inter-fasciale distale** et **proximale sous-pubienne** ont été décrites et comparées dans des essais randomisés, avec des taux de succès élevés et une supériorité de l’échoguidage sur la neurostimulation seule. Preuve **forte** — mais pour un objectif (bloc moteur des adducteurs) qui n’est pas le nôtre.
- **Anatomie des branches articulaires de la hanche (Short, 2018)** : étude cadavérique décrivant l’innervation de la capsule antérieure par des branches du nerf fémoral, de l’obturateur et de l’obturateur accessoire, et définissant les repères osseux utilisables pour l’intervention guidée par l’image. C’est le socle anatomique de toute la filière de dénervation. Preuve anatomique **solide**.
- **Anatomie radiologique du nerf obturateur et de ses branches articulaires (Locher, 2008)** : travail visant précisément à définir une méthode de dénervation par radiofréquence de la hanche à partir de repères radiologiques.
- **Radiofréquence des branches sensitives de l’obturateur et du fémoral (Kawaguchi, 2001)** : description princeps de la lésion percutanée par radiofréquence des branches sensitives pour douleur de hanche, réalisée sous scopie. Suivie de séries prospectives et rétrospectives concordantes.
- **Niveau de preuve en algologie chronique : faible.** À ma connaissance, **il n’existe pas d’essai randomisé contre sham** de la radiofréquence articulaire de hanche — contrairement au genou, où des essais contrôlés existent. Les données disponibles sont des séries de cas, des cohortes prospectives et des revues narratives, rapportant des durées d’effet de 6 à 12 mois chez des répondeurs au bloc test. C’est le **trou principal de la littérature** sur ce sujet, et il doit être annoncé au patient : on lui propose un geste dont le rationnel anatomique est solide mais dont le niveau de preuve clinique est celui d’une série.
- **Bloc test** : aucune étude n’a validé formellement le seuil de 50 % de soulagement comme prédicteur du succès de la radiofréquence de hanche ; ce seuil est repris par analogie avec les branches médiales lombaires et les nerfs géniculés. *Extrapolation assumée.*
- *L’ensemble de ces références est à confirmer lors de la passe de vérification bibliographique.*`,

  references: [
    { auteurs: 'Taha AM', titre: 'Brief reports: ultrasound-guided obturator nerve block — a proximal interfascial technique', revue: 'Anesthesia and Analgesia', annee: '2012', type: 'technique', verif: false },
    { auteurs: 'Yoshida T, Nakamoto T, Kamibayashi T', titre: 'Ultrasound-guided obturator nerve block: a focused review on anatomy and updated techniques', revue: 'BioMed Research International', annee: '2017', type: 'revue', verif: false },
    { auteurs: 'Short AJ, Barnett JJG, Gofeld M, et al.', titre: 'Anatomic study of innervation of the anterior hip capsule: implication for image-guided intervention', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'anatomie', verif: false },
    { auteurs: 'Locher S, Burmeister H, Böhlen T, et al.', titre: 'Radiological anatomy of the obturator nerve and its articular branches: basis to develop a method of radiofrequency denervation for hip joint pain', revue: 'Pain Medicine', annee: '2008', type: 'anatomie', verif: false },
    { auteurs: 'Kawaguchi M, Hashizume K, Iwata T, Furuya H', titre: 'Percutaneous radiofrequency lesioning of sensory branches of the obturator and femoral nerves for the treatment of hip joint pain', revue: 'Regional Anesthesia and Pain Medicine', annee: '2001', type: 'série', verif: false },
    { auteurs: 'Choquet O, Capdevila X, Bennourine K, Feugeas JL, Bringuier-Branchereau S, Manelli JC', titre: 'A new inguinal approach for the obturator nerve block: anatomical and randomized clinical studies', revue: 'Anesthesiology', annee: '2005', type: 'ECR / anatomie', verif: false },
    { auteurs: 'Sinha SK, Abrams JH, Houle TT, Weller RS', titre: 'Ultrasound-guided obturator nerve block: an interfascial injection approach without nerve stimulation', revue: 'Regional Anesthesia and Pain Medicine', annee: '2009', type: 'technique', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'recommandation', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'obt-interfascial', section: 'sonoanatomie', titre: 'Coupe transverse des adducteurs — les trois muscles et les deux plans',
      legende: 'Toute la voie inter-fasciale tient à ce comptage : couche superficielle (long adducteur en dedans, pectiné en dehors), puis court adducteur, puis grand adducteur. La branche antérieure chemine dans le plan 1, la branche postérieure dans le plan 2. Les branches elles-mêmes sont rarement individualisables : le plan est la cible.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, racine de la face médiale de cuisse', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 80 L252 84 L242 170 L0 166 Z', label: 'Long adducteur', at: [112, 128], opacity: 0.5 });
        S.muscle({ path: 'M268 84 L640 78 L640 158 L258 168 Z', label: 'Pectiné', at: [452, 122], opacity: 0.5 });
        S.fascia({ points: [[0, 174], [300, 176], [640, 164]], width: 2.2 });
        S.muscle({ path: 'M0 180 L640 170 L640 262 L0 274 Z', label: 'Court adducteur', at: [128, 226], opacity: 0.5 });
        S.fascia({ points: [[0, 280], [320, 272], [640, 266]], width: 2.2 });
        S.muscle({ path: 'M0 286 L640 272 L640 400 L0 400 Z', label: 'Grand adducteur', at: [140, 336], opacity: 0.5 });
        S.artery({ x: 540, y: 118, r: 8, label: 'A. fémorale profonde', lx: 540, ly: 82, small: true });
        S.nerve({ x: 322, y: 176, rx: 16, ry: 5, label: 'Br. antérieure (plan 1)', lx: 348, ly: 208, anchor: 'start', small: true, lead: [330, 180] });
        S.nerve({ x: 356, y: 274, rx: 15, ry: 5, label: 'Br. postérieure (plan 2)', lx: 382, ly: 308, anchor: 'start', small: true, lead: [364, 278] });
      },
    },
    {
      id: 'obt-geste', section: 'technique', titre: 'Double injection inter-fasciale — plan 1 puis plan 2',
      legende: 'Deux ponctions dans le plan, de médial en latéral : la première dans le fascia entre la couche superficielle et le court adducteur, la seconde entre court adducteur et grand adducteur. Critère de fin identique pour les deux : une nappe linéaire étalée le long du fascia, jamais une pelote intramusculaire.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, adducteurs', type: 'in-plane, médio-latéral' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 80 L252 84 L242 170 L0 166 Z', label: 'Long adducteur', at: [104, 126], opacity: 0.5 });
        S.muscle({ path: 'M268 84 L640 78 L640 158 L258 168 Z', label: 'Pectiné', at: [470, 108], opacity: 0.5 });
        S.fascia({ points: [[0, 174], [300, 176], [640, 164]], width: 2.2 });
        S.muscle({ path: 'M0 180 L640 170 L640 262 L0 274 Z', label: 'Court adducteur', at: [104, 224], opacity: 0.5 });
        S.fascia({ points: [[0, 280], [320, 272], [640, 266]], width: 2.2 });
        S.muscle({ path: 'M0 286 L640 272 L640 400 L0 400 Z', label: 'Grand adducteur', at: [120, 344], opacity: 0.5 });
        S.needle({ from: [6, 96], to: [300, 174], label: 'Plan 1' });
        S.spread({ x: 400, y: 172, rx: 96, ry: 9, label: '5 mL' });
        S.needle({ from: [6, 172], to: [318, 274], label: 'Plan 2' });
        S.spread({ x: 418, y: 272, rx: 96, ry: 9, label: '5 mL' });
      },
    },
    {
      id: 'obt-proximal', section: 'technique', titre: 'Voie proximale sous-pubienne — le tronc avant sa division',
      legende: 'Sonde au pli inguinal sur le pectiné. La branche supérieure du pubis donne le repère osseux ; sous elle, entre pectiné et obturateur externe, le tronc obturateur chemine avec les vaisseaux obturateurs. Un seul point d’injection, 8–10 mL, aspiration répétée — l’espace est profond et non compressible.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial (pubis)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, pli inguinal', type: 'convexe 2–5 MHz, in-plane' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 84 L640 80 L640 212 L0 224 Z', label: 'Pectiné', at: [130, 150], opacity: 0.5 });
        S.fascia({ points: [[150, 230], [400, 226], [640, 218]], width: 2 });
        S.bone({ path: 'M0 268 Q130 224 252 244', label: 'Branche sup. du pubis', at: [122, 330] });
        S.muscle({ path: 'M96 262 L640 238 L640 386 L128 396 Z', label: 'Obturateur externe', at: [430, 320], opacity: 0.5 });
        S.nerve({ x: 306, y: 240, rx: 16, ry: 7, label: 'N. obturateur (tronc)', lx: 296, ly: 196, small: true });
        S.artery({ x: 358, y: 228, r: 7, label: 'Vaisseaux obturateurs', lx: 400, ly: 196, anchor: 'start', small: true, lead: [366, 226] });
        S.vein({ x: 388, y: 236, rx: 10, ry: 7 });
        S.target({ x: 308, y: 244, r: 14 });
        S.needle({ from: [636, 112], to: [326, 242], label: '22 G 90 mm, latéro-médial' });
        S.spread({ x: 292, y: 250, rx: 62, ry: 12, label: '8–10 mL' });
      },
    },
  ],

  checklist: [
    'Objectif du geste explicité : bloc test avant radiofréquence, ou bloc thérapeutique — le volume et le produit en dépendent',
    'Comptage des trois muscles (long adducteur/pectiné, court adducteur, grand adducteur) validé avant la ponction',
    'Doppler fait sur le trajet ; vaisseaux obturateurs identifiés si voie proximale',
    'Dose cumulée d’AL calculée si un bloc PENG ou un autre bloc est associé dans la même séance',
    'Émulsion lipidique et chariot d’urgence vérifiés ; voie veineuse posée si voie proximale ou radiofréquence',
    'Patient prévenu de la faiblesse des adducteurs et de l’instabilité à la marche ; accompagnant vérifié, conduite interdite',
    'Test de marche et force d’adduction évalués et tracés avant la sortie',
    'Si radiofréquence : stimulation motrice à 2 Hz faite, aucune lésion thermique sur le tronc',
  ],
});
