/* Fiche : infiltration intra-articulaire de hanche, voie antérieure échoguidée. */
ECHO.register({
  id: 'coxo-femorale',
  titre: 'Articulation coxo-fémorale — infiltration intra-articulaire par voie antérieure',
  titreCourt: 'Coxo-fémorale',
  en: 'Ultrasound-guided intra-articular hip injection — anterior approach, femoral head-neck junction, anterior recess',
  region: 'membre-inf',
  types: ['infiltration'],
  niveau: 1,
  grade: 'Modérée pour le corticoïde à court terme (ECR) ; faible pour l’acide hyaluronique et le PRP',
  maj: '2026-09',
  motsCles: ['hanche', 'coxarthrose', 'coxopathie', 'récessus antérieur', 'jonction tête-col', 'conflit fémoro-acétabulaire', 'FAI', 'bloc test', 'PTH', 'descellement', 'acide hyaluronique', 'PRP', 'triamcinolone hexacétonide'],
  resume: 'L’infiltration coxo-fémorale est le geste articulaire le plus rentable du membre inférieur en HDJ douleur, parce qu’il est à la fois thérapeutique et diagnostique : chez le patient qui cumule coxarthrose et rachis lombaire dégénératif, c’est souvent lui qui tranche l’origine de la douleur. La hanche n’est pas palpable : l’infiltration à l’aveugle n’a pas sa place, le guidage (échographie ou scopie) est la règle. La cible est le récessus antérieur, à la jonction tête-col, sous la capsule et le ligament ilio-fémoral, atteinte par une aiguille spinale in-plane caudo-crâniale. Le paquet fémoral reste médial et l’artère circonflexe fémorale latérale croise le trajet en superficie : ce sont les deux structures à repérer au Doppler avant de ponctionner. Le débat actuel ne porte plus sur l’efficacité à court terme du corticoïde, qui est établie, mais sur sa sécurité articulaire à moyen terme et sur le délai à respecter avant une arthroplastie.',

  flash: {
    position: 'dorsal', positionNote: 'membre en extension, rotation neutre ou légère rotation interne ; ne pas mettre la hanche en rotation externe (le col fuit sous la sonde)',
    sonde: 'convexe', sondeNote: '2–5 MHz, profondeur 6–9 cm ; linéaire basse fréquence (5–8 MHz) acceptable chez le sujet mince',
    approche: 'in-plane', approcheNote: 'coupe longitudinale oblique dans l’axe du col fémoral, ponction caudo-crâniale (entrée distale et latérale, progression vers la jonction tête-col)',
    aiguille: 'Aiguille spinale 22 G 90 mm (21 G 100 mm si IMC élevé) ; 25 G 40 mm pour l’anesthésie cutanée',
    cible: 'Contact osseux à la jonction tête-col, puis retrait de 1–2 mm : l’injectat doit soulever la capsule et remplir le récessus antérieur en nappe anéchogène, sans résistance',
    injectat: '4–6 mL au total : corticoïde retard + AL, ou acide hyaluronique, ou AL seul pour un bloc test',
    duree: '10–15 min',
  },

  indications: [
    '**Coxarthrose symptomatique** en échec d’antalgiques, d’AINS et de kinésithérapie, notamment en attente d’arthroplastie ou chez le patient non opérable (comorbidités, refus, âge).',
    '**Arthrite inflammatoire** de hanche : polyarthrite rhumatoïde, spondyloarthrite, rhumatisme psoriasique — infiltration en complément du traitement de fond.',
    '**Conflit fémoro-acétabulaire (FAI)** et lésion labrale : surtout comme **bloc test** — une réponse franche à l’anesthésique local plaide pour une origine intra-articulaire et pour un bénéfice de l’arthroscopie.',
    '**Bloc test avant PTH ou avant chirurgie rachidienne** : chez le patient qui cumule coxarthrose et canal lombaire étroit ou arthrose lombaire, c’est l’examen qui départage la hanche du rachis. Noter l’EN avant et à 30 min, et la distance de marche.',
    '**Suspicion de descellement ou d’infection de prothèse** : la ponction articulaire échoguidée sert au prélèvement (bactériologie, cytologie) ; un bloc anesthésique peut aider à rattacher la douleur à l’implant. Aucune injection de corticoïde sur une prothèse suspecte d’infection.',
    'Douleur cancéreuse de hanche (métastase acétabulaire ou du col) : geste palliatif, en association aux traitements systémiques.',
  ],
  contreIndications: [
    '**Absolues** : infection cutanée au point de ponction, arthrite septique connue ou suspectée, bactériémie évolutive, allergie vraie au produit injecté, refus.',
    '**Absolue pour le corticoïde** : suspicion d’infection de prothèse (ponction diagnostique seule).',
    '**Relatives** : diabète déséquilibré (hyperglycémie de 24–72 h sous corticoïde), chirurgie de la hanche programmée à court terme, ostéonécrose de la tête fémorale déjà connue (le corticoïde intra-articulaire est discuté dans ce contexte), fracture d’insuffisance sous-chondrale.',
    '**Arthroplastie programmée** : ne pas infiltrer dans les **3 mois** précédant la pose d’une PTH. Le signal épidémiologique d’une augmentation du risque d’infection périprothétique après infiltration récente est cohérent dans plusieurs bases de données ; le seuil de 3 mois est le plus souvent retenu, certaines équipes allant jusqu’à 6 mois (*seuil à confirmer sur la littérature source*).',
    '**Risque hémorragique** : infiltration articulaire périphérique sur site compressible, classée **à faible risque** dans les recommandations ASRA-ESRA 2018 sur les procédures interventionnelles de la douleur — pas d’interruption systématique des antiagrégants, anticoagulants oraux au cas par cas.',
  ],
  alternatives: 'Avant l’infiltration : antalgiques, AINS, perte de poids, kinésithérapie et renforcement des abducteurs, canne controlatérale — la conférence de consensus internationale (OARSI) place ces mesures en socle, l’infiltration de corticoïde n’étant qu’une recommandation conditionnelle, réservée aux poussées et explicitement conditionnée au guidage par l’image. En cas d’échec ou de contre-indication au corticoïde : bloc du **nerf obturateur** et des branches articulaires (fiche dédiée), **bloc PENG** (fiche dédiée), puis radiofréquence des branches articulaires fémorale et obturatrice — c’est la filière neuro-ablative, qui ne touche pas au cartilage et n’expose ni à l’hyperglycémie ni au risque périprothétique. L’acide hyaluronique intra-articulaire de hanche reste hors nomenclature et son bénéfice n’est pas démontré de façon convaincante contre placebo. Le PRP est expérimental à cette localisation. La vraie alternative chez le patient opérable reste l’arthroplastie totale : l’infiltration ne doit pas devenir un moyen de la retarder au-delà du raisonnable.',

  anatomie: `L’articulation coxo-fémorale est une **énarthrose profonde**, entièrement recouverte de muscles : aucune voie d’abord n’est palpable, et c’est la seule grosse articulation où le geste sans imagerie n’a pas de justification.

La **capsule** s’insère sur le pourtour acétabulaire et le labrum en haut, et sur la ligne intertrochantérienne en bas ; elle est renforcée en avant par le **ligament ilio-fémoral** (ligament de Bertin), la structure ligamentaire la plus résistante du corps. Entre la face profonde de cette capsule et le col fémoral, il existe un espace virtuel, le **récessus antérieur (récessus cervical)**, qui se distend dès qu’il y a un épanchement : c’est la cible du geste. Le **labrum** antérieur apparaît en coupe comme un triangle hyperéchogène appendu au rebord acétabulaire.

En avant de la capsule chemine le **muscle ilio-psoas**, dont le tendon croise l’éminence ilio-pubienne ; la **bourse ilio-psoas** est interposée et communique avec l’articulation dans environ 15 % des cas (ce qui explique certaines diffusions d’injectat en avant). Plus superficiellement se trouvent le **sartorius** et le **droit fémoral**.

### Ce qui compte pour le geste
- **Le plan de coupe fait tout.** La sonde est placée dans l’axe du col fémoral, c’est-à-dire selon une ligne oblique allant approximativement de l’EIAS vers l’angle latéral de la symphyse pubienne. On obtient alors l’image en « cône de glace » : la tête, la concavité de la jonction tête-col, puis le col qui s’éloigne en profondeur.
- **La jonction tête-col est la cible, pas la tête.** Piquer la tête, c’est piquer du cartilage ; piquer le col au-delà de la jonction, c’est risquer d’être extra-capsulaire, la capsule s’insérant plus distalement. Le point d’entrée articulaire est la concavité entre les deux, sous la capsule.
- **Le paquet vasculo-nerveux fémoral est médial** : de médial en latéral, veine, artère, puis nerf fémoral, ce dernier sous le fascia iliaca et appliqué sur le psoas. Une ponction menée de caudal-latéral vers crânial-médial ne le rencontre pas, à condition de ne jamais dériver en médial.
- **L’artère circonflexe fémorale latérale** (branche ascendante) croise le champ en superficie, entre le sartorius et le droit fémoral : c’est le vaisseau que le Doppler doit chercher sur le trajet prévu, plus que l’artère fémorale.
- **Profondeur de la cible** : 4–6 cm chez le sujet mince, 8–10 cm chez le patient obèse. Au-delà de 7 cm, le convexe s’impose et une aiguille de 90 mm peut devenir juste.`,

  installation: {
    patient: `**Décubitus dorsal**, tête légèrement relevée si le patient le supporte mal à plat. Membre inférieur **en extension**, pied en **rotation neutre ou en légère rotation interne** — une rotation externe fait basculer le col et fait sortir la jonction tête-col du plan de coupe. Un billot sous le creux poplité soulage le rachis lombaire mais ne doit pas fléchir la hanche à plus de 10–15°.

Repérer et marquer l’**EIAS** et le **bord latéral de l’artère fémorale** au feutre avant la désinfection : ce sont les deux bornes du champ. Désinfection large, du pli inguinal au tiers supérieur de la cuisse. Le pli inguinal est une zone macérée : détersion soignée puis deux passages d’antiseptique alcoolique.`,
    operateur: `Opérateur du **côté à traiter**, écran de l’autre côté du patient, dans l’axe du regard. Sonde tenue en prise basse, talon appuyé sur la cuisse pour stabiliser. La ponction se fait de **caudal vers crânial**, l’aiguille entrant à 2–4 cm en aval du bord caudal de la sonde afin d’obtenir un angle d’attaque proche de 30–40° : plus l’angle est plat, mieux l’aiguille est visible, mais plus le trajet dans les parties molles est long.

Ne jamais orienter la pointe en direction du pli inguinal (crânio-médial franc) : c’est la direction du paquet fémoral.`,
    sonde: `- **Convexe 2–5 MHz**, preset MSK ou abdominal, profondeur réglée pour que le col fémoral occupe le tiers inférieur de l’image (typiquement 7–9 cm), focale sur la jonction tête-col.
- Linéaire basse fréquence (5–8 MHz) possible chez le sujet mince : meilleure définition de la capsule et du labrum, mais champ étroit.
- **Doppler couleur à basse PRF** obligatoire sur le trajet prévu, à la recherche de l’artère circonflexe fémorale latérale et, plus médialement, du paquet fémoral.
- Gain réglé pour que la capsule reste une bande fibrillaire nettement plus claire que le muscle, et que le récessus apparaisse comme un fin liseré sombre.
- Aiguille écho-visible utile : à 30–40° et 6 cm de profondeur, une aiguille standard se perd vite. Hydrolocalisation par 0,3–0,5 mL de sérum en cas de doute sur la pointe.`,
  },

  reperage: [
    { titre: 'Coupe transverse au pli inguinal — bornes vasculaires', texte: 'Commencer par une coupe **transversale au pli inguinal** : identifier la **veine fémorale** (médiale, compressible), l’**artère fémorale** et, latéralement à elle, le **nerf fémoral** aplati sur le psoas sous le fascia iliaca. Cette étape n’est pas une perte de temps : elle fixe mentalement la limite médiale à ne jamais franchir.' },
    { titre: 'Basculer dans l’axe du col', texte: 'Translater la sonde de 2–3 cm en latéral et en distal, puis la faire pivoter d’environ 45° pour l’aligner sur une ligne **EIAS → angle latéral de la symphyse pubienne**. Apparaît l’image caractéristique : ligne osseuse convexe de la **tête fémorale**, concavité de la **jonction tête-col**, puis le **col** qui plonge en profondeur.' },
    { titre: 'Identifier la capsule et le récessus', texte: 'Au-dessus de l’os, chercher la bande hyperéchogène fibrillaire de la **capsule / ligament ilio-fémoral**, tendue du rebord acétabulaire au col. Entre elle et la corticale, à la jonction tête-col, se trouve le **récessus antérieur** : normalement un simple liseré, il devient une lame anéchogène de plus de 7 mm en cas d’épanchement (mesure à comparer au côté sain).' },
    { titre: 'Doppler sur le trajet', texte: 'Activer le Doppler couleur et balayer le trajet prévu, du point d’entrée cutané à la cible : repérer la branche ascendante de l’**artère circonflexe fémorale latérale**, qui croise en superficie entre sartorius et droit fémoral. Décaler le point d’entrée de quelques millimètres plutôt que de traverser un vaisseau.' },
    { titre: 'Si la jonction tête-col ne se voit pas', texte: 'Trois causes par ordre de fréquence : (1) la sonde n’est pas dans l’axe du col — faire pivoter de 10° dans les deux sens jusqu’à obtenir le plus long segment de col visible ; (2) la hanche est en rotation externe — corriger la position du pied ; (3) la profondeur ou la fréquence sont inadaptées — passer au convexe. Chez le patient obèse, appuyer fermement et faire expirer.' },
    { titre: 'Cas de la prothèse', texte: 'Sur une PTH, la tête prothétique est une **ligne hyperéchogène franche avec réverbérations** et non un arc régulier ; le col est métallique, hyperéchogène, avec artefacts. Le récessus para-prothétique se ponctionne de la même façon, en visant l’espace entre le col prothétique et la pseudo-capsule. Attention à ne pas rayer l’implant : contact osseux prudent.' },
  ],

  sonoanatomie: [
    { structure: 'Sartorius / droit fémoral', aspect: 'Muscles superficiels, striés, gris moyen', repere: 'Premier plan musculaire sous la graisse' },
    { structure: 'Ilio-psoas', aspect: 'Masse musculaire épaisse, penné, avec son tendon central hyperéchogène', repere: 'Repose directement sur la capsule antérieure' },
    { structure: 'Capsule / ligament ilio-fémoral', aspect: 'Bande hyperéchogène fibrillaire de 2–4 mm, tendue de l’acétabulum au col', repere: 'Coiffe la tête fémorale ; se décolle sous l’injectat' },
    { structure: 'Récessus antérieur', aspect: 'Liseré hypo/anéchogène entre capsule et corticale, à la jonction tête-col', repere: '**La cible.** Distendu (> 7 mm) si épanchement' },
    { structure: 'Tête fémorale', aspect: 'Ligne hyperéchogène régulièrement convexe, ombre acoustique franche', repere: 'Ne jamais y laisser la pointe (cartilage)' },
    { structure: 'Jonction tête-col', aspect: 'Concavité entre l’arc de la tête et la ligne du col', repere: 'Point de contact osseux visé' },
    { structure: 'Col fémoral', aspect: 'Ligne hyperéchogène rectiligne s’éloignant en profondeur', repere: 'Au-delà de la jonction, la capsule s’éloigne : risque extra-capsulaire' },
    { structure: 'Labrum antérieur', aspect: 'Triangle hyperéchogène appendu au rebord acétabulaire', repere: 'Limite crâniale ; ne pas traverser' },
    { structure: 'A. circonflexe fémorale latérale', aspect: 'Petit vaisseau pulsatile superficiel, Doppler positif', repere: 'Entre sartorius et droit fémoral, sur le trajet' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Deux seringues étiquetées : une de 5 mL (AL cutané) et une de 5–10 mL (injectat articulaire) montée sur un **prolongateur souple** — indispensable ici, l’aiguille est longue et la main de la sonde ne doit pas bouger pendant l’injection. Aiguille spinale 22 G 90 mm. Housse de sonde stérile et gel stérile (le geste dure plus longtemps qu’un bloc superficiel).' },
    { titre: 'Anesthésie cutanée et du trajet', texte: '2–3 mL de lidocaïne 1 % au point d’entrée, puis infiltration du trajet superficiel sous contrôle échographique. Le trajet est long et traverse plusieurs plans musculaires : une anesthésie du seul derme rend le geste inconfortable et fait bouger le patient au moment décisif.' },
    { titre: 'Ponction in-plane caudo-crâniale', texte: 'Entrer à 2–4 cm en aval du bord caudal de la sonde, angle 30–40°, pointe orientée vers la **jonction tête-col**. Visualiser l’aiguille sur toute sa longueur ; si elle se perd, ne pas avancer : rechercher le corps par un léger mouvement de va-et-vient de 1–2 mm (*jiggle*) ou par hydrolocalisation. Traverser sartorius/droit fémoral puis l’ilio-psoas, en restant latéral à la limite médiale marquée.' },
    { titre: 'Traversée capsulaire et contact osseux', texte: 'Le franchissement de la capsule donne un ressaut net et parfois une brève douleur profonde. Poursuivre jusqu’au **contact osseux** de la jonction tête-col, puis **retirer de 1–2 mm**. Aspiration : la présence de liquide articulaire signe la position intra-articulaire et doit être envoyée en bactériologie/cytologie si la question infectieuse se pose.' },
    { titre: 'Test et injection fractionnée', texte: 'Injecter 0,5–1 mL de test : l’injectat doit **soulever la capsule** et former une lame anéchogène qui progresse le long du col, **sans résistance**. Une résistance nette ou une image de « pelote » intra-musculaire signifie une position extra-capsulaire : repositionner. Puis injecter le volume total par fractions de 1–2 mL, en surveillant la distension du récessus.' },
    { titre: 'Critère de fin', texte: 'Récessus antérieur distendu sur 2–4 cm le long du col, capsule nettement décollée de la corticale, absence de diffusion intramusculaire. Retrait de l’aiguille sous contrôle, compression douce 1 min, pansement.' },
    { titre: 'Après le geste', texte: '**EN à 30 min** notée systématiquement (c’est la valeur diagnostique du geste) ainsi qu’un test de marche. Prévenir : douleur possible pendant 24–48 h (flare cortisonique), pas de sport ni de charge lourde pendant 48 h, marche normale autorisée. Chez le diabétique, autosurveillance glycémique 72 h. Consigne écrite de reconsultation en cas de fièvre, de douleur croissante ou d’impotence au-delà de 48 h.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 %, seule | 4–5 mL | Le geste qui départage hanche et rachis lombaire. EN et test de marche avant / à 30 min. Pas de corticoïde si l’objectif est purement diagnostique |
| Infiltration thérapeutique | Corticoïde retard + AL : méthylprednisolone 40–80 mg (Dépo-Médrol®), ou triamcinolone acétonide 40 mg (Kenacort retard®), ou bétaméthasone 5,7 mg (Diprostène® 1 mL) + lidocaïne 1 % ou ropivacaïne 0,2 % | 4–6 mL | Le corticoïde **particulaire est ici légitime** : articulation profonde, pas d’artère terminale sur le trajet. C’est le schéma de référence |
| Infiltration thérapeutique — option longue durée | Triamcinolone hexacétonide (Hexatrione® 2 %) 20–40 mg + AL | 4–6 mL | **Strictement intra-articulaire**, jamais péri-tendineux ni péri-nerveux. C’est le corticoïde le moins soluble, donc le plus rémanent dans l’articulation. Des restrictions d’utilisation ont été émises en France après des cas d’arthropathie destructrice rapide au genou : *vérifier le RCP et l’état des recommandations ANSM en vigueur avant emploi* |
| Viscosupplémentation | Acide hyaluronique de haut poids moléculaire, monoinjection | 2–3 mL selon le dispositif | Dispositif médical, **hors nomenclature et non remboursé** à la hanche. Bénéfice contre placebo non démontré de façon convaincante ; à réserver à une contre-indication au corticoïde, en informant le patient du coût et du niveau de preuve |
| PRP | Plasma riche en plaquettes, préparation standardisée | 3–5 mL | **Expérimental à la hanche**, hors nomenclature. Ne pas le présenter comme une alternative validée |
| Ponction diagnostique (prothèse) | Aucun injectat ; aspiration | — | Prélèvement bactériologique et cytologique. Si le liquide manque, lavage par 5 mL de sérum physiologique **sans antiseptique résiduel** puis réaspiration |

**Doses maximales d’anesthésique local** : ropivacaïne 3 mg/kg (≈ 225 mg), bupivacaïne 2–2,5 mg/kg (≈ 150 mg), lidocaïne 4,5 mg/kg (7 mg/kg avec adrénaline). Une infiltration de hanche isolée n’en approche jamais le seuil ; le calcul devient nécessaire si l’on associe dans la même séance un bloc PENG ou obturateur, ou si l’on infiltre les deux hanches.

**Corticoïdes — règles de cumul** : ne pas dépasser 3 infiltrations par an sur une même hanche, espacées d’au moins 3 mois. Additionner les corticoïdes reçus par toutes voies dans la séance (rachis, autre articulation) : c’est la dose systémique cumulée qui fait l’hyperglycémie et l’effet sur l’axe corticotrope.`,

  variantes: [
    { titre: 'Voie antérieure sagittale (parasagittale)', texte: `Variante où la sonde est placée en **coupe sagittale stricte** sur le col, l’aiguille étant introduite dans le plan de caudal en crânial avec un angle plus fermé. L’image est plus facile à obtenir chez le patient obèse (moins de dérive latérale), mais le trajet est plus long et le col est vu sur un segment plus court. Le repère et le critère de fin sont identiques : contact osseux à la jonction tête-col, décollement capsulaire.` },
    { titre: 'Voie latérale', texte: `Sonde en coupe coronale sur le grand trochanter, aiguille dirigée en crânial et en médial vers la jonction tête-col. Décrite surtout en pédiatrie et pour l’évacuation d’épanchement. Elle traverse le moyen fessier et est moins confortable ; elle garde un intérêt quand la voie antérieure est inaccessible (cicatrice, pli inguinal macéré, obésité abdominale majeure).` },
    { titre: 'Guidage scopique — quand le préférer', texte: `La scopie garde deux avantages : la **traçabilité opposable** d’un arthrogramme (produit de contraste iodé, cliché conservé au dossier), et la fiabilité sur **prothèse**, où les artefacts métalliques dégradent l’image échographique. Dans un dossier médico-légal complexe, dans un bilan pré-arthroscopique ou sur une PTH suspecte de descellement, la scopie reste la référence. Pour la coxarthrose native courante en HDJ, l’échographie fait le travail sans irradier.` },
    { titre: 'Ponction-évacuation d’un épanchement', texte: `Devant un récessus distendu, aspirer avant d’injecter : le geste soulage immédiatement, permet l’analyse du liquide (cellularité, cristaux, culture) et évite la dilution de l’injectat. Utiliser une aiguille 20–21 G, un robinet trois voies et un prolongateur. Un liquide trouble ou puriforme interdit toute injection de corticoïde.` },
    { titre: 'Bloc articulaire plutôt qu’infiltration', texte: `Chez le patient qui répond bien à l’AL mais chez qui les corticoïdes sont problématiques (diabète, PTH programmée, infiltrations répétées), passer à la filière neuro-ablative : bloc test des branches articulaires (fémorale + obturatrice, voir fiches **PENG** et **nerf obturateur**), puis radiofréquence si le test est positif. Cette filière ne touche ni au cartilage ni à la glycémie.` },
  ],

  pearls: [
    'La rotation du pied est le premier réglage : rotation neutre ou légère rotation interne, jamais externe.',
    'Faire la coupe transverse au pli inguinal **avant** d’oublier où est l’artère : la limite médiale doit être posée mentalement avant de tenir l’aiguille.',
    'Le contact osseux à la jonction tête-col est le meilleur critère de position : la capsule y est plaquée sur l’os, le récessus est juste au-dessus.',
    'Injecter avec un prolongateur et une aide : trois mains sont nécessaires pour maintenir une sonde convexe, une aiguille de 90 mm et une seringue.',
    'Une résistance à l’injection est toujours une information : elle signifie extra-capsulaire ou intratendineux, jamais « l’articulation est serrée ».',
    'Coter le geste comme diagnostique la première fois : EN et distance de marche avant / à 30 min, tracés au dossier. C’est ce qui justifiera l’indication chirurgicale ou la suite algologique.',
  ],
  pieges: [
    'Piquer trop crânialement : on est sur le labrum ou dans le cartilage de la tête, sans jamais entrer dans le récessus.',
    'Piquer trop distalement sur le col : la capsule s’est déjà insérée, l’injectat part en extra-capsulaire dans le psoas.',
    'Dériver en médial pendant la progression : c’est la seule manière de rencontrer le paquet fémoral. Se recaler visuellement à chaque centimètre.',
    'Prendre un épanchement du **récessus ilio-psoas** (bourse) pour le récessus articulaire : la bourse est plus superficielle et en avant du tendon du psoas.',
    'Croire le geste réussi parce que l’aiguille est au contact de l’os : sans décollement capsulaire visible à l’injection test, on est probablement en dehors.',
    'Infiltrer une hanche dont l’arthroplastie est programmée dans les semaines qui suivent : demander systématiquement la date opératoire avant de préparer le corticoïde.',
  ],
  complications: [
    '**Douleur post-injection (flare cortisonique)** : 5–10 % des cas, 24–48 h, cède sous glace et antalgiques de palier 1. Prévenir avant le geste, sinon elle sera vécue comme un échec.',
    '**Arthrite septique** : rare (ordre de grandeur classiquement cité de 1/10 000 à 1/50 000 infiltrations articulaires, *chiffre à confirmer*), mais c’est la complication grave. Toute douleur croissante avec fièvre au-delà de 48 h impose une ponction avant toute antibiothérapie.',
    '**Infection périprothétique ultérieure** si une PTH est posée dans les mois suivant l’infiltration : respecter un délai d’au moins 3 mois.',
    '**Progression accélérée de l’arthrose, fracture d’insuffisance sous-chondrale, ostéonécrose de la tête fémorale, destruction osseuse rapide** : quatre événements indésirables rapportés après infiltrations de corticoïde de hanche et de genou. Ce signal, resté longtemps sous-estimé, impose d’informer le patient et de limiter les répétitions.',
    '**Ponction vasculaire** : artère circonflexe fémorale latérale surtout ; hématome de cuisse, compressible. Ponction du paquet fémoral en cas de dérive médiale.',
    '**Lésion du nerf fémoral** : paresthésies fulgurantes du territoire crural, déficit du quadriceps. Arrêt immédiat, retrait, surveillance.',
    '**Effets systémiques du corticoïde** : hyperglycémie 24–72 h (à anticiper chez le diabétique), flush facial, insomnie, poussée hypertensive, aménorrhée transitoire.',
    '**Atrophie et dépigmentation cutanées** : rares ici (trajet profond), sauf reflux le long du trajet à l’ablation de l’aiguille — injecter 0,2 mL de sérum en retirant.',
  ],
  securite: [
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018, procédures articulaires périphériques compressibles) : pas d’arrêt systématique des antiagrégants ; anticoagulants oraux directs discutés au cas par cas selon le risque thrombotique.',
    'Doppler couleur systématique sur le trajet prévu avant la ponction ; aspiration avant chaque fraction d’injection.',
    'Limite médiale posée avant le geste : ne jamais franchir la verticale du bord latéral de l’artère fémorale.',
    'Asepsie renforcée : le pli inguinal est une zone à forte densité bactérienne. Détersion, séchage, deux passages d’antiseptique alcoolique, respect du temps de séchage, housse de sonde stérile.',
    'Chez le diabétique : glycémie capillaire le jour du geste et les 72 h suivantes ; prévenir le médecin traitant si l’équilibre est fragile.',
    'Tracer la date de la dernière infiltration et la dose cumulée annuelle de corticoïde sur la hanche traitée.',
  ],

  suivi: `- **J0** : EN avant et à 30 min, test de marche (périmètre, boiterie), rotation interne passive. La réponse immédiate à l’AL est l’élément **diagnostique** : une réponse < 50 % oriente vers une autre source (rachis lombaire, sacro-iliaque, syndrome du grand trochanter, hernie, pathologie abdomino-pelvienne).
- **J2–J3** : appel ou message de contrôle si l’organisation le permet — c’est la fenêtre du flare et celle de l’arthrite septique débutante.
- **J15–J30** : EN, WOMAC ou HOOS si un registre PROM est en place, périmètre de marche, consommation d’antalgiques. Le pic d’effet du corticoïde se situe dans les 2 à 4 premières semaines.
- **3 mois** : décision. Effet maintenu → possibilité de répéter (maximum 3/an, espacement ≥ 3 mois). Effet bref ou nul mais bloc AL initialement positif → orienter vers la filière neuro-ablative (bloc obturateur / PENG puis radiofréquence des branches articulaires) ou vers la chirurgie. Bloc AL initialement négatif → reprendre le diagnostic, ne pas répéter l’infiltration.
- **Toujours** coupler à la kinésithérapie et au renforcement des abducteurs : l’infiltration ouvre une fenêtre, elle ne remplace pas le programme.`,

  evidence: `- **Corticoïde intra-articulaire de hanche vs placebo** : plusieurs ECR en double aveugle montrent un bénéfice significatif sur la douleur et la fonction, maximal entre 2 et 8 semaines et s’estompant vers 3 mois. L’ECR de **Lambert (2007)** en double aveugle contre placebo est le plus cité. Preuve **modérée**, cohérente, mais limitée dans le temps.
- **Infiltration guidée à 4 bras (Atchia, 2011)** : comparaison corticoïde / acide hyaluronique / sérum physiologique / soins usuels sous guidage ; seul le bras corticoïde se distinguait. C’est l’argument le plus direct contre la viscosupplémentation de hanche.
- **Acide hyaluronique** : les méta-analyses sont discordantes et grevées d’hétérogénéité ; aucune ne démontre un bénéfice cliniquement pertinent contre placebo à la hanche. Les recommandations internationales ne le recommandent pas à cette localisation. Preuve **faible et défavorable**.
- **PRP de hanche** : essais de petite taille, comparateurs hétérogènes, résultats non concluants. Preuve **insuffisante** — ne pas le proposer hors protocole.
- **Sécurité articulaire des corticoïdes (Kompel, 2019)** : mise en garde radiologique décrivant quatre types d’événements indésirables (progression accélérée de l’arthrose, fracture d’insuffisance sous-chondrale, ostéonécrose, destruction osseuse rapide) après infiltrations de hanche et de genou. Il s’agit de séries observationnelles, sans dénominateur fiable : le lien de causalité n’est pas établi, mais le signal a modifié la pratique et doit être exposé au patient.
- **Infiltration et infection périprothétique** : plusieurs analyses de grandes bases de données administratives retrouvent un sur-risque d’infection du site opératoire quand la PTH est posée dans les 3 mois suivant une infiltration, sur-risque qui disparaît au-delà. Niveau de preuve **observationnel**, mais convergent, et suffisant pour justifier la règle des 3 mois.
- **Guidage** : la précision de l’infiltration de hanche sans imagerie est médiocre et celle du guidage échographique proche de 100 % dans les séries. Aucun ECR ne démontre proprement la supériorité **clinique** de l’échographie sur la scopie — le choix se fait sur la disponibilité, l’irradiation et la traçabilité.
- **Trou de la littérature** : il n’existe pas d’étude de bon niveau évaluant la valeur **prédictive** du bloc test intra-articulaire de hanche pour le résultat d’une arthroplastie. La pratique repose sur des séries et sur le raisonnement clinique. *À confirmer lors de la passe de vérification bibliographique.*`,

  references: [
    { auteurs: 'Lambert RGW, et al.', titre: 'Steroid injection for osteoarthritis of the hip: a randomized, double-blind, placebo-controlled trial', revue: 'Arthritis and Rheumatism', annee: '2007', type: 'ECR', verif: false, note: 'ECR de référence pour le corticoïde intra-articulaire de hanche. Volume, pages et DOI non vérifiés.' },
    { auteurs: 'Atchia I, et al.', titre: 'Efficacy of a single ultrasound-guided injection for the treatment of hip osteoarthritis', revue: 'Annals of the Rheumatic Diseases', annee: '2011', type: 'ECR', verif: false, note: 'Essai à quatre bras (corticoïde, acide hyaluronique, sérum, soins usuels) sous guidage échographique.' },
    { auteurs: 'Kompel AJ, Roemer FW, Murakami AM, Diaz LE, Crema MD, Guermazi A', titre: 'Intra-articular corticosteroid injections in the hip and knee: perhaps not as safe as we thought?', revue: 'Radiology', annee: '2019', type: 'revue / mise en garde', verif: false, note: 'Description des quatre événements indésirables articulaires imputés aux infiltrations de corticoïde.' },
    { auteurs: 'Bannuru RR, Osani MC, Vaysbrot EE, et al.', titre: 'OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis', revue: 'Osteoarthritis and Cartilage', annee: '2019', type: 'recommandation', verif: false, note: 'Corticoïde intra-articulaire en recommandation conditionnelle à la hanche, sous guidage par l’image.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'recommandation', verif: true, note: 'DOI vu dans une recherche antérieure (fiche nerf suprascapulaire).' },
    { auteurs: 'Pfirrmann CWA, Chung CB, Theumann NH, Trudell DJ, Resnick D', titre: 'Greater trochanter of the hip: attachment of the abductor mechanism and a complex of three bursae — MR imaging and MR bursography in cadavers and MR imaging in asymptomatic volunteers', revue: 'Radiology', annee: '2001', type: 'anatomie', verif: false, note: 'Cité ici pour l’anatomie régionale de la hanche ; référence principale de la fiche GTPS.' },
    { auteurs: 'Micu MC, Bogdan GD, Fodor D', titre: 'Steroid injection for hip osteoarthritis: efficacy under ultrasound guidance', revue: 'Rheumatology (Oxford)', annee: '2010', type: 'série prospective', verif: false, note: 'Série sous guidage échographique ; existence probable, à confirmer.' },
    { auteurs: 'Short AJ, Barnett JJG, Gofeld M, et al.', titre: 'Anatomic study of innervation of the anterior hip capsule: implication for image-guided intervention', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'anatomie', verif: false, note: 'Base anatomique de la filière neuro-ablative alternative à l’infiltration.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'hanche-long', section: 'sonoanatomie', titre: 'Coupe longitudinale oblique dans l’axe du col fémoral — vue de repérage',
      legende: 'L’image en « cône de glace » : dôme de la tête fémorale, concavité de la jonction tête-col, puis le col qui plonge. La capsule et le ligament ilio-fémoral coiffent l’ensemble et s’insèrent en bas sur le col ; entre les deux, à la jonction, se creuse le récessus antérieur — la cible. L’ilio-psoas repose directement sur la capsule.',
      opts: { depth: 7 },
      build: S => {
        S.orient({ left: 'Crânial (acétabulum)', right: 'Caudal (col)' }).probeInfo({ plan: 'Longitudinal oblique, axe du col', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 72 L640 128 L0 134 Z', label: 'Sartorius / droit fémoral', at: [140, 106], opacity: 0.45 });
        S.fascia({ points: [[0, 134], [640, 128]], width: 1.5 });
        S.muscle({ path: 'M0 134 L640 128 L640 296 Q560 306 478 312 Q444 302 402 266 Q332 208 250 202 Q175 200 96 248 L0 240 Z', label: 'Ilio-psoas', at: [120, 178], opacity: 0.5 });
        S.ligament({ path: 'M96 248 Q175 200 250 202 Q332 208 402 266 Q444 302 478 312 L478 322 Q430 296 396 272 Q328 218 250 218 Q176 216 100 264 Z', label: 'Capsule / lig. ilio-fémoral', at: [268, 172], lead: [258, 202] });
        S.bone({ path: 'M0 196 L68 224 L116 254', label: 'Acétabulum', at: [46, 300] });
        S.cartilage({ path: 'M110 246 L144 260 L112 274 Z', label: 'Labrum', at: [152, 244], anchor: 'start', small: true, lead: [136, 258] });
        S.bone({ path: 'M112 272 Q175 232 245 232 Q322 236 356 286 Q392 314 424 316 L570 326 L640 332', label: 'Tête fémorale', at: [216, 372] });
        S.label({ x: 546, y: 372, text: 'Col fémoral', cls: 'lbl-bone' });
        S.target({ x: 388, y: 286, r: 13 });
        S.label({ x: 430, y: 250, text: 'Récessus antérieur', anchor: 'start', small: true, cls: 'lbl-target', lead: [398, 278] });
        S.artery({ x: 434, y: 132, r: 6, label: 'A. circonflexe fém. lat.', lx: 458, ly: 122, anchor: 'start', small: true, lead: [440, 130] });
      },
    },
    {
      id: 'hanche-transverse', section: 'sonoanatomie', titre: 'Coupe transverse au pli inguinal — poser la limite médiale',
      legende: 'Étape de sécurité, à faire avant de basculer dans l’axe du col : de médial en latéral, veine fémorale, artère fémorale, puis nerf fémoral aplati sur l’ilio-psoas sous le fascia iliaca. La ponction se fera latéralement à cette limite, jamais en dedans.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, pli inguinal', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 84 L146 88 L164 252 L0 246 Z', label: 'Pectiné', at: [66, 216], opacity: 0.45 });
        S.muscle({ path: 'M322 80 L468 84 L450 150 L318 144 Z', label: 'Sartorius', at: [392, 118], opacity: 0.5, small: true });
        S.muscle({ path: 'M484 82 L640 80 L640 162 L468 154 Z', label: 'Droit fémoral', at: [556, 124], opacity: 0.45 });
        S.muscle({ path: 'M180 146 L640 172 L640 306 L200 298 Z', label: 'Ilio-psoas', at: [452, 250], opacity: 0.5 });
        S.fascia({ points: [[176, 140], [340, 150], [480, 166]], width: 2, label: 'Fascia iliaca', at: [268, 128], small: true });
        S.vein({ x: 92, y: 126, rx: 24, ry: 16, label: 'V. fémorale', lx: 92, ly: 170, small: true });
        S.artery({ x: 172, y: 120, r: 18, label: 'A. fémorale', lx: 172, ly: 80, small: true });
        S.nerve({ x: 236, y: 160, rx: 16, ry: 8, label: 'N. fémoral', lx: 264, ly: 202, anchor: 'start', small: true, lead: [242, 166] });
        S.bone({ path: 'M150 330 Q380 282 640 322', label: 'Tête fémorale / acétabulum', at: [386, 372] });
        S.label({ x: 84, y: 322, text: 'Limite médiale\n— ne pas franchir', cls: 'lbl-target', small: true });
      },
    },
    {
      id: 'hanche-geste', section: 'technique', titre: 'Ponction in-plane caudo-crâniale — récessus antérieur',
      legende: 'L’aiguille entre en aval de la sonde, à 30–40°, traverse le sartorius puis l’ilio-psoas et franchit la capsule au niveau de la jonction tête-col. Contact osseux, retrait de 1–2 mm, puis injection test : le critère de fin est le décollement de la capsule et le remplissage du récessus le long du col, sans résistance.',
      opts: { depth: 7 },
      build: S => {
        S.orient({ left: 'Crânial (acétabulum)', right: 'Caudal (col)' }).probeInfo({ plan: 'Longitudinal oblique, axe du col', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 72 L640 128 L0 134 Z', label: 'Sartorius / droit fémoral', at: [140, 106], opacity: 0.45 });
        S.fascia({ points: [[0, 134], [640, 128]], width: 1.5 });
        S.muscle({ path: 'M0 134 L640 128 L640 296 Q560 306 478 312 Q444 302 402 266 Q332 208 250 202 Q175 200 96 248 L0 240 Z', label: 'Ilio-psoas', at: [120, 178], opacity: 0.5 });
        S.ligament({ path: 'M96 248 Q175 200 250 202 Q332 208 402 266 Q444 302 478 312 L478 322 Q430 296 396 272 Q328 218 250 218 Q176 216 100 264 Z', label: 'Capsule', at: [236, 178], lead: [230, 206] });
        S.bone({ path: 'M0 196 L68 224 L116 254' });
        S.bone({ path: 'M112 272 Q175 232 245 232 Q322 236 356 286 Q392 314 424 316 L570 326 L640 332', label: 'Tête fémorale', at: [206, 372] });
        S.label({ x: 546, y: 372, text: 'Col fémoral', cls: 'lbl-bone' });
        S.target({ x: 384, y: 280, r: 12 });
        S.needle({ from: [636, 104], to: [404, 284], label: '22 G 90 mm, caudo-crânial' });
        S.spread({ x: 406, y: 294, rx: 48, ry: 11, label: '4–6 mL' });
      },
    },
  ],
  checklist: [
    'Date d’une éventuelle arthroplastie programmée demandée au patient (pas de corticoïde si < 3 mois)',
    'Coupe transverse au pli inguinal faite, limite médiale posée avant la ponction',
    'Rotation du pied vérifiée : neutre ou légère rotation interne',
    'EN et test de marche notés avant le geste et à 30 min (valeur diagnostique)',
    'Diabétique : consigne d’autosurveillance glycémique sur 72 h remise',
    'Dose cumulée annuelle de corticoïde sur cette hanche tracée au dossier',
  ],
});
