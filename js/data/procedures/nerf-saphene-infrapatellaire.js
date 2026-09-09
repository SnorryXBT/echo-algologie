/* Fiche : nerf saphène au canal des adducteurs et branche infrapatellaire (IPBSN).
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références non revérifiées → verif:false. */
ECHO.register({
  id: 'nerf-saphene-infrapatellaire',
  titre: `Nerf saphène et branche infrapatellaire — bloc du canal des adducteurs et bloc de l'IPBSN`,
  titreCourt: `Saphène / infrapatellaire`,
  en: `Ultrasound-guided saphenous nerve block at the adductor canal (subsartorial) and block of the infrapatellar branch of the saphenous nerve (IPBSN); hydrodissection, pulsed radiofrequency, cryoneurolysis`,
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: `Faible à modérée — technique très bien codifiée et étayée en anesthésie péri-opératoire, mais preuve limitée à des séries et des avis d'experts dans la douleur chronique`,
  maj: '2026-09',
  motsCles: ['saphène', 'saphenous', 'canal des adducteurs', 'Hunter', 'IPBSN', 'branche infrapatellaire', 'névralgie', 'douleur médiale du genou', 'post-arthroscopie', 'PTG', 'prélèvement ischio-jambiers', 'DIDT', 'Hoffa', 'hydrodissection', 'sous-sartorial'],
  resume: `Le nerf saphène est le seul contingent **purement sensitif** du nerf fémoral, et la cause la plus sous-diagnostiquée de douleur médiale du genou. Deux niveaux d'abord, deux indications différentes. Au **canal des adducteurs** (sous le sartorius, latéral à l'artère fémorale), on bloque le tronc : c'est le geste large, celui du genou médial douloureux dans son ensemble, et le complément logique des nerfs géniculés dans la gonarthrose médiale. Plus bas, au **condyle médial**, on bloque sélectivement la **branche infrapatellaire (IPBSN)**, victime récurrente des arthroscopies, des prothèses de genou et des prélèvements d'ischio-jambiers : douleur en bande, allodynie, Tinel — un tableau typiquement neuropathique que l'on continue de traiter comme une arthrose. Le geste est simple et superficiel ; sa seule vraie complication est la faiblesse du quadriceps si l'on diffuse trop haut, vers le nerf du vaste médial.`,

  flash: {
    position: 'dorsal', positionNote: `membre en **rotation externe et légère abduction de hanche**, genou en flexion de 20–30° (position « en grenouille ») : elle dégage toute la face médiale de la cuisse jusqu'au condyle`,
    sonde: 'lineaire', sondeNote: `10–15 MHz, profondeur 4–5 cm au canal des adducteurs, 2–3 cm pour l'IPBSN ; sonde hockey utile au condyle médial`,
    approche: 'in-plane', approcheNote: `latéro-médiale (antéro-postérieure), sonde transversale ; au canal on traverse le sartorius, à l'IPBSN on reste très superficiel`,
    aiguille: `22 G 50–80 mm au canal des adducteurs · 25 G 40 mm pour l'IPBSN`,
    cible: `Canal : espace sous-sartorial **latéral et antérieur à l'artère fémorale** — critère de fin = injectat qui entoure l'artère sous le sartorius. IPBSN : plan sous-cutané au bord postérieur du sartorius, au niveau du condyle médial / tubercule de l'adducteur`,
    injectat: `Canal : 5–10 mL ropivacaïne 0,2 % ± corticoïde. IPBSN : 2–3 mL. Hydrodissection : 5–10 mL de dextrose 5 %`,
    duree: `8–12 min · 20–30 min avec PRF`,
  },

  indications: [
    `**Névralgie du nerf saphène ou de sa branche infrapatellaire** : douleur en bande de la face médiale du genou et de la jambe, brûlure, allodynie au frottement, signe de Tinel au bord du sartorius — après arthroscopie, prothèse totale de genou, **prélèvement des ischio-jambiers (DIDT)**, enclouage tibial, saphénectomie, ou spontanée.`,
    `**Douleur médiale résiduelle du genou** après un bloc géniculé partiellement efficace : les nerfs géniculés couvrent la capsule, pas le revêtement cutané ni la région infrapatellaire (Fonkoué 2019, Tran 2018). Le saphène est le complément logique.`,
    `**Gonarthrose médiale** en complément d'un protocole géniculé, quand la douleur déborde la capsule.`,
    `**Douleur antéro-médiale du genou d'allure « Hoffa »** avec point douloureux et allodynie superficielle : c'est souvent une IPBSN, pas une graisse de Hoffa.`,
    `**Bloc test** avant PRF, cryoneurolyse ou avis chirurgical de neurectomie dans une névralgie invalidante.`,
    `**Syndrome du canal des adducteurs** (compression du saphène par la membrane vasto-adductrice) : entité rare et discutée, à retenir devant une douleur médiale de cuisse et de jambe **sans** point de départ chirurgical — diagnostic d'exclusion, à confirmer par la réponse au bloc.`,
  ],
  contreIndications: [
    `**Absolues** : infection cutanée au point de ponction, allergie documentée aux amino-amides.`,
    `**Relatives** : patient à risque de chute (la diffusion proximale au nerf du vaste médial donne une faiblesse du quadriceps de quelques heures) — prévoir un accompagnant et pas de conduite ; diabète déséquilibré si corticoïde.`,
    `**Hémostase** : geste de **faible risque hémorragique** (ASRA-ESRA 2018) — site superficiel et compressible. Réserve pour le canal des adducteurs : l'**artère fémorale** y est au contact et n'est pas compressible manuellement de façon fiable sous le sartorius chez un patient épais. Sous anticoagulant à dose curative, préférer l'abord distal (IPBSN, très superficiel) ou différer.`,
    `Ne pas bloquer un saphène chez un patient dont le déficit d'appui est déjà limite sans avoir organisé le retour à domicile.`,
  ],
  alternatives: `Selon le siège de la douleur : **nerfs géniculés** si elle est capsulaire et profonde (fiche dédiée) ; **infiltration de la patte d'oie** si le point douloureux est sur la bourse anserine, 4–5 cm sous l'interligne ; **infiltration intra-articulaire** si l'épanchement domine. En traitement médicamenteux de fond, une névralgie du saphène relève des antalgiques des douleurs neuropathiques (gabapentinoïdes, duloxétine, amitriptyline, emplâtre de lidocaïne 5 % sur le territoire allodynique) — le bloc n'est pas un substitut mais un accélérateur et un test. En cas d'échec répété d'une IPBSN post-chirurgicale documentée, la **neurectomie** est discutée avec le chirurgien : elle transforme une allodynie en zone d'anesthésie, ce qui n'est acceptable que si le patient l'a compris et accepté.`,

  anatomie: `Le **nerf saphène** est la branche terminale, **exclusivement sensitive**, du nerf fémoral. Il descend dans le triangle fémoral puis entre dans le **canal des adducteurs (canal de Hunter)** : un tunnel aponévrotique de la cuisse moyenne, dont le **toit est le muscle sartorius** doublé de la **membrane vasto-adductrice**, la paroi antéro-latérale le **vaste médial**, la paroi postéro-médiale le **grand** et le **long adducteur**. Le canal contient l'**artère fémorale**, la **veine fémorale** (postérieure et profonde à l'artère), le **nerf saphène** (**antéro-latéral à l'artère**) et le **nerf du vaste médial** (latéral, moteur).

Le saphène quitte le canal en perforant la membrane vasto-adductrice au-dessus du condyle médial, puis devient sous-cutané entre le sartorius et le gracile, et descend avec la **veine grande saphène** jusqu'à la malléole médiale.

La **branche infrapatellaire (IPBSN)** naît juste avant ou à la sortie du canal. Son trajet est **variable, et c'est ce qui explique sa vulnérabilité** : elle **traverse le sartorius** dans une partie des cas, le **contourne par son bord postérieur** dans les autres, puis croise obliquement en avant, au niveau du **condyle fémoral médial / tubercule de l'adducteur**, pour innerver la peau de la face antéro-médiale du genou, la région du tendon patellaire et la partie antérieure de la capsule superficielle. Elle se divise fréquemment en 2 ou 3 rameaux.

### Ce qui compte pour le geste
- **Le nerf saphène se repère par l'artère fémorale, pas par lui-même** : au canal, il est un petit faisceau hyperéchogène de 2–4 mm, **antéro-latéral à l'artère**, immédiatement sous le sartorius. Quand on ne le distingue pas, on injecte dans l'espace sous-sartorial autour de l'artère : la diffusion fait le bloc.
- **Le niveau change le résultat.** Plus on est **proximal** dans le canal, plus on risque de bloquer le **nerf du vaste médial** et donc de faire une faiblesse du quadriceps ; plus on est **distal** (tiers inférieur de cuisse), plus le bloc est purement sensitif. En douleur chronique, on n'a aucune raison d'être proximal : rester au **tiers moyen bas ou au tiers inférieur**.
- **L'IPBSN se cherche sur le patient, pas sur l'écran** : on palpe le point de Tinel au bord du sartorius, on y pose la sonde en transversal, et on suit le petit faisceau sous-cutané. Le repérage est facilité par la **veine grande saphène**, voisine constante.
- Profondeurs : nerf saphène au canal **2,5–4 cm** ; IPBSN **0,5–1,5 cm**, parfois moins — la sonde hockey et un gain élevé sont utiles.
- Une **anesthésie médiale de jambe et de cheville** après le bloc est attendue et normale : le territoire saphène descend jusqu'à la malléole médiale. Le dire avant, sinon le patient s'inquiète.`,

  installation: {
    patient: `**Décubitus dorsal**, membre en **rotation externe de hanche et légère abduction**, genou fléchi à 20–30° sur un coussin — la position dite « en grenouille » atténuée, qui présente toute la face médiale de la cuisse, du tiers moyen jusqu'au condyle.

Repérer et marquer : l'**épine iliaque antéro-supérieure**, le **bord supérieur de la patella**, le milieu de la distance entre les deux (repère classique du canal des adducteurs), le **condyle fémoral médial** et le **tubercule de l'adducteur**. Chercher et marquer le **point de Tinel** au doigt avant de désinfecter : c'est le meilleur guide pour l'IPBSN, et il disparaît sous le champ.`,
    operateur: `Opérateur du côté à traiter, écran en face, de l'autre côté de la table. Sonde **transversale** sur la face médiale de la cuisse, tenue en main non dominante, appui hypothénar sur le vaste médial. Ponction **in-plane**, du **bord antéro-latéral vers le postéro-médial** — l'aiguille traverse le vaste médial puis le sartorius et arrive au contact de l'espace péri-artériel **par le côté opposé à l'artère**. C'est le sens qui met la pointe le plus loin possible du vaisseau à chaque instant.

Pour l'IPBSN, même orientation mais trajet très court : on reste dans le plan sous-cutané, aiguille presque tangentielle.`,
    sonde: `- Linéaire 10–15 MHz. Canal des adducteurs : **profondeur 4–5 cm**, focale à 3 cm. IPBSN : **profondeur 2–3 cm**, focale à 1 cm, gain élevé ; une sonde **hockey** facilite l'appui au condyle.
- **Doppler couleur** systématique : l'artère fémorale au canal, la veine grande saphène et les veines satellites au condyle (une veine prise pour un nerf est le piège classique de l'IPBSN — la compression douce la vide, le nerf ne bouge pas).
- Pression **très légère** au niveau distal : une pression appuyée efface la veine saphène et écrase le plan sous-cutané où court l'IPBSN.
- Aiguille écho-visible ; angle d'insonation plat, indispensable en superficiel.`,
  },

  reperage: [
    { titre: `Trouver l'artère fémorale au tiers moyen`, texte: `Sonde **transversale** sur la face médiale de la cuisse, à mi-distance entre l'épine iliaque antéro-supérieure et la patella. Repérer l'**artère fémorale** (structure ronde, anéchogène, pulsatile, non compressible) et, en profondeur d'elle, la **veine fémorale** (compressible). Doppler pour confirmer.` },
    { titre: `Identifier le toit : le sartorius`, texte: `Au-dessus de l'artère, le **sartorius** apparaît comme un muscle ovalaire, aplati, oblique, superficiel — c'est le toit du canal. En dehors, le **vaste médial** ; en dedans et en arrière, les **adducteurs**. Le triangle formé par ces trois muscles autour de l'artère est le canal.` },
    { titre: `Repérer le nerf saphène`, texte: `Chercher un petit faisceau **hyperéchogène, ovalaire, de 2–4 mm, antéro-latéral à l'artère**, immédiatement sous le sartorius. Il est souvent difficile à individualiser : basculer légèrement la sonde (anisotropie) le fait apparaître et disparaître. **Si on ne le voit pas, ce n'est pas grave** : la cible est l'espace sous-sartorial péri-artériel.` },
    { titre: `Choisir le niveau`, texte: `Glisser en distal jusqu'au **tiers inférieur de cuisse**, juste avant que l'artère ne plonge vers le hiatus des adducteurs. À ce niveau, le nerf du vaste médial s'est le plus souvent séparé du paquet : le bloc est plus purement sensitif et le risque de faiblesse du quadriceps diminue. C'est le niveau à privilégier en douleur chronique.` },
    { titre: `Chercher l'IPBSN au condyle médial`, texte: `Descendre la sonde, en **transversal**, jusqu'au **condyle fémoral médial / tubercule de l'adducteur**. Repérer le **bord postérieur du sartorius** et la **veine grande saphène**. L'IPBSN est un fin faisceau de 1–2 mm, sous-cutané, croisant en avant, souvent divisé en 2–3 rameaux. Placer la sonde sur le **point de Tinel** repéré à la palpation : c'est le repère le plus fiable.` },
    { titre: `Si on ne trouve rien`, texte: `Deux manœuvres. (1) **Suivre le nerf de proximal en distal** depuis le canal, en glissant lentement — la technique dite de « traçage » est plus fiable que de chercher directement en distal. (2) **Hydrolocaliser** : 1 mL de sérum ou de dextrose 5 % dans le plan sous-sartorial ou sous-cutané ; le liquide décolle et fait apparaître le nerf en négatif. En dernier recours, un bloc de champ dans le plan sous-cutané au bord postérieur du sartorius, sur 3–4 cm, couvre l'IPBSN dans la plupart des configurations — au prix d'une moindre valeur diagnostique.` },
  ],

  sonoanatomie: [
    { structure: `Sartorius`, aspect: `Muscle ovalaire aplati, oblique, superficiel`, repere: `**Toit du canal** — le repère anatomique de la fiche` },
    { structure: `Artère fémorale`, aspect: `Ronde, anéchogène, pulsatile, **non compressible**`, repere: `Sous le sartorius ; la cible se définit par rapport à elle` },
    { structure: `Veine fémorale`, aspect: `Ovalaire, **compressible**, se vide à la pression`, repere: `Profonde et postérieure à l'artère` },
    { structure: `Nerf saphène`, aspect: `Faisceau hyperéchogène ovalaire de 2–4 mm, très anisotrope`, repere: `**Antéro-latéral à l'artère**, juste sous le sartorius` },
    { structure: `Nerf du vaste médial`, aspect: `Petit faisceau latéral à l'artère, dans le canal`, repere: `Le bloquer = faiblesse du quadriceps. Rester distal` },
    { structure: `Vaste médial / adducteurs`, aspect: `Muscles striés bordant le canal (antéro-latéral / postéro-médial)`, repere: `Parois du canal` },
    { structure: `Veine grande saphène`, aspect: `Veine sous-cutanée compressible, effacée par la pression de la sonde`, repere: `Compagne de l'IPBSN au condyle — piège classique` },
    { structure: `Branche infrapatellaire (IPBSN)`, aspect: `Fin faisceau de 1–2 mm, sous-cutané, souvent divisé en 2–3 rameaux`, repere: `Bord postérieur du sartorius, au niveau du condyle médial` },
  ],

  technique: [
    { titre: `Préparation`, texte: `Checklist en fin de fiche. Désinfection de toute la face médiale de la cuisse et du genou (on travaille souvent aux deux niveaux dans la même séance). Gel stérile ou housse. Seringues étiquetées : lidocaïne 1 % pour la peau, injectat monté sur prolongateur.` },
    { titre: `Anesthésie cutanée`, texte: `1 mL de lidocaïne 1 % au point d'entrée. Facultative pour l'IPBSN (aiguille 25 G, trajet de 1 cm) — l'anesthésie cutanée serait ici presque aussi douloureuse que le geste, et elle risque de « noyer » la cible superficielle.` },
    { titre: `Canal des adducteurs — ponction in-plane`, texte: `Aiguille 22 G entrée au **bord antéro-latéral** de la sonde, angle 30–45°, visualisée en continu. Traverser le **vaste médial** puis percer le **sartorius** — le franchissement du fascia profond donne un ressaut net. Amener la pointe dans l'espace **entre le sartorius et l'artère, du côté antéro-latéral du vaisseau**. Ne jamais approcher l'artère de front.` },
    { titre: `Hydrolocalisation et injection`, texte: `Aspiration. Injecter **1 mL** en test : l'injectat doit **décoller le sartorius de l'artère** et former un croissant anéchogène qui contourne le vaisseau. S'il reste dans le muscle (image en nid d'abeille), avancer de 1–2 mm. Puis **5–10 mL fractionnés par 2–3 mL**, avec aspiration entre chaque fraction, en surveillant que la diffusion **entoure l'artère** sans la comprimer.` },
    { titre: `IPBSN — ponction sous-cutanée`, texte: `Sonde sur le point de Tinel, au bord postérieur du sartorius. Aiguille **25 G** presque tangentielle, in-plane, pointe amenée **au contact du faisceau sans le transfixier**. Injecter **0,5 mL** en test : le nerf doit apparaître en négatif, entouré d'une lentille anéchogène. Puis **2–3 mL** au total, en balayant les 2–3 rameaux si on les identifie. Douleur fulgurante ou paresthésie en éclair = pointe intraneurale : **retirer de 1 mm avant de poursuivre**.` },
    { titre: `Critère de fin`, texte: `Canal : croissant anéchogène complet autour de l'artère sous le sartorius, sur 2–3 cm de hauteur. IPBSN : lentille anéchogène entourant le ou les faisceaux dans le plan sous-cutané. Dans les deux cas, aucune injection contre résistance.` },
    { titre: `Après le geste`, texte: `Tester à 15–20 min : hypoesthésie de la face médiale du genou et de la jambe (attendue), et **force du quadriceps** (extension active contre résistance, relever de chaise). Si le quadriceps est faible : pas de conduite, marche accompagnée, prévenir d'un retour à la normale en 2–6 h. EN avant / à 30 min notée pour la valeur diagnostique.` },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bloc test du saphène (canal)** | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | **5 mL** | Volume volontairement modeste : au-delà de 10 mL la diffusion proximale gagne le nerf du vaste médial et le test perd en spécificité |
| **Bloc thérapeutique du saphène** | Ropivacaïne 0,2 % + dexaméthasone 4 mg, ou méthylprednisolone 20–40 mg | **5–10 mL** | Le corticoïde a peu d'intérêt sur un nerf non comprimé ; il se justifie en cas de fibrose péri-nerveuse post-chirurgicale |
| **Bloc de l'IPBSN** | Ropivacaïne 0,2 % ou lidocaïne 1 % ± dexaméthasone 2–4 mg | **2–3 mL** | Petit volume : la cible est sous-cutanée et un excès diffuse sans rien apporter |
| **Hydrodissection** | **Dextrose 5 % (D5W)** 5–10 mL au canal, 3–5 mL à l'IPBSN, éventuellement précédé de 1–2 mL de lidocaïne 1 % | 3–10 mL | Le D5W est privilégié car il **ne bloque pas la conduction** : on peut retester la sensibilité et la force juste après. Indication de choix dans les névralgies post-chirurgicales avec adhérences |
| **Avant PRF** | Lidocaïne 1 %, 0,5–1 mL **après** les tests de stimulation | 0,5–1 mL | Injecter avant la stimulation fausse le test |

**Doses maximales** : ropivacaïne 3 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), bupivacaïne 2–2,5 mg/kg. Un bloc de 10 mL de ropivacaïne 0,2 % représente 20 mg : très en deçà des seuils. Le calcul devient réel si l'on enchaîne saphène + géniculés + patte d'oie dans la même séance d'HDJ — additionner systématiquement.

**Corticoïde** : la dexaméthasone (non particulaire) est le choix par défaut au contact d'un nerf périphérique. Éviter les particulaires au canal des adducteurs, à proximité immédiate de l'artère fémorale.`,

  variantes: [
    { titre: `Bloc distal vs proximal du canal des adducteurs`, texte: `Le **niveau** est la seule vraie variante technique, et elle décide de la tolérance. Un bloc **proximal** (tiers moyen haut) atteint plus volontiers le **nerf du vaste médial** : bloc plus complet, mais faiblesse du quadriceps de 2 à 6 h et risque de chute. Un bloc **distal** (tiers inférieur, juste avant le hiatus des adducteurs) est plus purement sensitif. En anesthésie péri-opératoire, le débat proximal/distal porte sur la qualité de l'analgésie après prothèse ; **en douleur chronique, il n'y a aucune raison d'accepter un bloc moteur** : rester distal.` },
    { titre: `Hydrodissection au dextrose 5 %`, texte: `Indication : névralgie post-chirurgicale avec nerf adhérent, épaissi ou piégé dans une cicatrice (post-arthroscopie, post-DIDT, post-PTG). Aiguille 22–25 G, pointe placée **au contact du nerf**, puis injection de **D5W** de part et d'autre du faisceau jusqu'à obtenir un **halo anéchogène circonférentiel** qui décolle le nerf de son lit sur 2–3 cm. Le D5W est préféré à l'AL parce qu'il permet de vérifier immédiatement que la sensibilité est conservée, et parce qu'il aurait un effet propre sur les fibres nociceptives (mécanisme discuté). Répétable 2 à 4 fois à 2–4 semaines d'intervalle. Preuve : essais convaincants pour le **canal carpien** (Wu 2017), extrapolation raisonnée pour le saphène — à annoncer comme telle. Voir le chapitre transversal Hydrodissection.` },
    { titre: `Radiofréquence pulsée (PRF)`, texte: `Après bloc test positif (≥ 50 %) mais trop bref. Le saphène et l'IPBSN étant **purement sensitifs**, la question du bloc moteur ne se pose pas — mais on ne fait **pas de RF thermique** sur un nerf cutané sensitif : le risque de déafférentation et d'anesthésie douloureuse est réel. La **PRF** est la modalité adaptée : électrode 22 G à pointe active 5–10 mm, placée **parallèle** au nerf ; stimulation sensitive 50 Hz reproduisant les paresthésies dans le territoire à < 0,5 V ; paramètres usuels **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 2–3 mL d'AL ± corticoïde. Preuve : séries et cas cliniques, pas d'ECR dédié — le dire au patient.` },
    { titre: `Cryoneurolyse`, texte: `Bonne indication théorique sur l'IPBSN : nerf **superficiel, purement sensitif, facilement accessible**, et la cryoneurolyse préserve l'endonèvre, donc pas de névrome ni de déafférentation. Sonde 14–16 G, cycles de 2 min de gel / 30 s de dégel × 2–3, après anesthésie locale. Durée d'effet 3–6 mois, repousse ordonnée. C'est d'ailleurs sur les branches sensitives antérieures du genou, dont l'IPBSN, que porte l'ECR contre sham de **Radnovich 2017**. Prévenir de l'**anesthésie du territoire** pendant toute la durée de l'effet — certains patients la supportent mal. Voir le chapitre transversal Cryoneurolyse.` },
    { titre: `Association saphène + géniculés`, texte: `Dans la gonarthrose médiale douloureuse, associer le bloc du saphène (ou de l'IPBSN) aux blocs géniculés est logique sur le plan anatomique : les travaux de **Tran 2018** et **Fonkoué 2019** montrent que la capsule antérieure reçoit aussi la branche infrapatellaire du saphène, qui n'est atteinte par aucune des trois cibles géniculées classiques. C'est une des explications les plus probables d'un bloc géniculé « à moitié efficace ». Séquence pratique : faire d'abord les géniculés seuls, évaluer, puis ajouter le saphène à la séance suivante — sinon on ne saura pas ce qui a marché.` },
  ],

  pearls: [
    `Chercher le **point de Tinel au doigt et le marquer avant de désinfecter** : c'est le meilleur guide de l'IPBSN, et il disparaît sous le champ.`,
    `Au canal, on ne cherche pas le nerf : on cherche **l'artère fémorale sous le sartorius**, et on injecte dans l'espace antéro-latéral qui la borde.`,
    `Rester **distal** dans le canal : le bloc est aussi bon et le quadriceps reste solide.`,
    `Pression de sonde **très légère** en distal : une pression appuyée écrase le plan sous-cutané où court l'IPBSN et fait disparaître la veine saphène qui sert de repère.`,
    `Une veine se vide à la compression, un nerf non : c'est le test qui évite la confusion la plus fréquente au condyle médial.`,
    `Prévenir de l'**hypoesthésie de la jambe et de la cheville médiales** : elle est attendue, elle n'est pas une complication.`,
    `Devant une douleur antéro-médiale du genou avec allodynie au frottement, penser IPBSN **avant** de penser Hoffa.`,
  ],
  pieges: [
    `Injecter trop proximal ou trop de volume : faiblesse du quadriceps, patient qui ne peut pas rentrer chez lui, et bloc test ininterprétable.`,
    `Prendre la **veine grande saphène** ou une veine satellite pour l'IPBSN : test de compression systématique.`,
    `Appuyer sur la sonde en distal : la cible s'écrase et devient invisible.`,
    `Injecter contre résistance ou malgré une paresthésie fulgurante : injection intraneurale.`,
    `Traiter une douleur médiale du genou comme une arthrose alors que le tableau est neuropathique (bande, brûlure, allodynie, Tinel, antécédent d'arthroscopie ou de DIDT).`,
    `Faire une **RF thermique** sur un nerf cutané purement sensitif : anesthésie douloureuse du territoire. PRF ou cryoneurolyse, pas de lésion thermique.`,
    `Additionner saphène + géniculés dans la même première séance : plus aucune information diagnostique exploitable.`,
  ],
  complications: [
    `**Faiblesse du quadriceps** par diffusion au nerf du vaste médial : la complication à connaître. Durée 2–6 h, **risque de chute**. Prévention : niveau distal, volume ≤ 10 mL. Conduite à tenir : tester la force avant le départ, marche accompagnée, pas de conduite, consignes écrites.`,
    `**Ponction de l'artère ou de la veine fémorale** au canal : hématome, rarement significatif. Prévention : Doppler, abord antéro-latéral, aspiration avant chaque fraction. Conduite à tenir : retrait, compression 5 min, surveillance.`,
    `**Injection intraneurale** : douleur fulgurante, résistance à l'injection, gonflement du faisceau. Arrêt immédiat, retrait de 1–2 mm, réévaluation. Le risque est plus élevé sur l'IPBSN, petit et superficiel.`,
    `**Toxicité systémique des AL** : très improbable aux volumes utilisés, mais le canal des adducteurs est un territoire richement vascularisé — injection fractionnée et aspiration répétée restent la règle.`,
    `**Aggravation transitoire de la névralgie** dans les 24–72 h après le geste, surtout après hydrodissection ou PRF : la prévenir systématiquement, sinon elle est vécue comme un échec.`,
    `**Anesthésie persistante du territoire** après cryoneurolyse ou PRF répétée : à annoncer avant, notamment chez les patients dont l'allodynie est le symptôme principal.`,
    `Infection : exceptionnelle. Hématome sous-cutané au condyle : fréquent, bénin, glace.`,
  ],
  securite: [
    `**Doppler couleur avant chaque ponction** : artère fémorale au canal, veines satellites au condyle.`,
    `Abord **antéro-latéral** de l'artère, jamais frontal ; aspiration avant chaque fraction de 2–3 mL.`,
    `Risque hémorragique **faible** (ASRA-ESRA 2018). Nuance propre à cette fiche : l'artère fémorale au canal des adducteurs n'est pas compressible de façon fiable — sous anticoagulation curative, préférer l'abord distal ou différer.`,
    `**Tester la force du quadriceps avant le départ** : c'est un critère de sortie, pas une formalité.`,
    `Volume ≤ 10 mL au canal ; additionner les doses d'AL si d'autres gestes sont faits dans la même séance.`,
    `Pas de RF thermique sur ces nerfs sensitifs : PRF ou cryoneurolyse.`,
    `Corticoïde non particulaire (dexaméthasone) au contact du paquet fémoral.`,
  ],

  suivi: `- **J0** : EN avant / à 30 min ; cartographie de l'hypoesthésie obtenue (elle valide le bloc et documente le territoire) ; **force du quadriceps** avant la sortie ; consignes écrites.
- **J7–J15** : EN, retentissement sur le sommeil et sur l'appui, allodynie au frottement (test simple au coton, reproductible d'une consultation à l'autre), consommation d'antalgiques.
- **J30** : décision. Réponse franche et prolongée → répéter si récidive. Réponse franche mais brève (≥ 50 % pendant la durée de l'AL, puis retour) → **hydrodissection au D5W** en série de 2–4 séances, ou **PRF**, ou **cryoneurolyse** selon le profil. Réponse nulle → le saphène n'est pas la source : réinterroger le diagnostic (géniculés, patte d'oie, articulation, hanche, rachis L3-L4, sensibilisation centrale).
- **3 mois** : si l'IPBSN post-chirurgicale reste invalidante malgré 2 séries de gestes bien conduits et un traitement des douleurs neuropathiques optimisé, **discuter avec le chirurgien** l'option d'une neurectomie — en ayant expliqué au patient qu'elle échange une douleur contre une zone insensible.
- **Toujours** associer le traitement de fond des douleurs neuropathiques : le bloc ouvre une fenêtre, il ne remplace pas le traitement.`,

  evidence: `- **Bloc du canal des adducteurs — preuve solide, mais dans une autre indication.** La technique est validée par une littérature anesthésique abondante après prothèse totale de genou : **Jaeger 2013** (ECR, bloc du canal des adducteurs vs bloc fémoral) montre une analgésie comparable **avec préservation de la force du quadriceps**, et **Lund 2011** en avait décrit l'usage adjuvant. **Bendtsen 2016** en fait la synthèse. Preuve **forte** pour la technique et sa tolérance, **transposée** — et non démontrée — à la douleur chronique.
- **Anatomie du canal — Burckett-St Laurent 2016 (Reg Anesth Pain Med)** : étude anatomique des nerfs du canal des adducteurs et de l'innervation du genou, qui précise la position relative du saphène et du nerf du vaste médial. **Andersen 2015** a étudié la diffusion de l'injectat au canal sur cadavre, base rationnelle du choix du volume. Preuve **forte** sur l'anatomie.
- **IPBSN — preuve faible et ancienne.** La vulnérabilité chirurgicale de la branche infrapatellaire est bien documentée (**Mochida 1995** sur les lésions en arthroscopie ; **Kartus 2001** sur la morbidité du site de prélèvement en reconstruction du LCA), mais le **traitement interventionnel** repose sur des revues narratives et des séries : **Trescot 2013** (revue de la névralgie infrapatellaire, *Pain Physician*), **Clendenen 2015** (traitement échoguidé après PTG), **Kachar 2008** (névrome de l'IPBSN après PTG). **Le Corroller 2011** a validé la visualisation échographique du nerf. Preuve **faible** : aucun ECR du bloc de l'IPBSN dans la névralgie chronique. C'est un trou franc de la littérature, à assumer devant le patient.
- **Hydrodissection** : le rationnel et la méthode sont posés (**Cass 2016**, **Lam 2020**) et l'efficacité du dextrose 5 % péri-nerveux est démontrée par ECR **au canal carpien** (**Wu 2017**, *Mayo Clinic Proceedings*). Aucun essai sur le saphène : extrapolation raisonnée, à présenter comme telle. Preuve **indirecte**.
- **Cryoneurolyse** : **Radnovich 2017** (ECR contre sham) porte précisément sur les branches sensitives antérieures du genou, dont l'IPBSN, dans la gonarthrose — c'est la meilleure preuve disponible touchant ce territoire. Preuve **modérée** pour cette indication, **faible** pour la névralgie post-chirurgicale.
- **PRF** : séries et cas cliniques uniquement sur le saphène et l'IPBSN. Preuve **faible**.
- **Ce que la littérature ne dit pas** : aucune étude ne compare le bloc du saphène aux blocs géniculés, ni ne quantifie l'apport de leur association dans la gonarthrose médiale — alors que c'est exactement la question posée en HDJ douleur. Le raisonnement anatomique (Tran 2018, Fonkoué 2019) est solide, la démonstration clinique manque.`,

  references: [
    { auteurs: `Jaeger P, Zaric D, Fomsgaard JS, et al.`, titre: `Adductor canal block versus femoral nerve block for analgesia after total knee arthroplasty: a randomized, double-blind study`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2013', type: 'ECR', verif: false, note: `Analgésie comparable au bloc fémoral avec préservation de la force du quadriceps.` },
    { auteurs: `Lund J, Jenstrup MT, Jaeger P, Sørensen AM, Dahl JB`, titre: `Continuous adductor-canal-blockade for adjuvant post-operative analgesia after major knee surgery: preliminary results`, revue: `Acta Anaesthesiologica Scandinavica`, annee: '2011', type: 'série', verif: false },
    { auteurs: `Burckett-St Laurent D, Peng P, Girón Arango L, et al.`, titre: `The nerves of the adductor canal and the innervation of the knee: an anatomic study`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2016', type: 'anatomie', verif: false },
    { auteurs: `Andersen HL, Andersen SL, Tranum-Jensen J`, titre: `The spread of injectate during saphenous nerve block at the adductor canal: a cadaver study`, revue: `Acta Anaesthesiologica Scandinavica`, annee: '2015', type: 'cadavérique', verif: false },
    { auteurs: `Bendtsen TF, Moriggl B, Chan V, Børglum J`, titre: `The optimal analgesic block for total knee arthroplasty`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2016', type: 'revue', verif: false },
    { auteurs: `Trescot AM, Brown MN, Karl HW`, titre: `Infrapatellar saphenous neuralgia — diagnosis and treatment`, revue: `Pain Physician`, annee: '2013', type: 'revue', verif: false },
    { auteurs: `Le Corroller T, Lagier A, Pirro N, Champsaur P`, titre: `Anatomical study of the infrapatellar branch of the saphenous nerve using ultrasonography`, revue: `Muscle & Nerve`, annee: '2011', type: 'anatomie', verif: false, note: `Validation de la visualisation échographique de l'IPBSN.` },
    { auteurs: `Mochida H, Kikuchi S`, titre: `Injury to infrapatellar branch of saphenous nerve in arthroscopic knee surgery`, revue: `Clinical Orthopaedics and Related Research`, annee: '1995', type: 'série', verif: false },
    { auteurs: `Kartus J, Movin T, Karlsson J`, titre: `Donor-site morbidity and anterior knee problems after anterior cruciate ligament reconstruction using autografts`, revue: `Arthroscopy`, annee: '2001', type: 'revue', verif: false },
    { auteurs: `Kachar SM, Williams KM, Finn HA`, titre: `Neuroma of the infrapatellar branch of the saphenous nerve: a cause of reversible knee stiffness after total knee arthroplasty`, revue: `The Journal of Arthroplasty`, annee: '2008', type: 'série', verif: false },
    { auteurs: `Clendenen S, Greengrass R, Whalen J, O'Connor MI`, titre: `Infrapatellar saphenous neuralgia after TKA can be improved with ultrasound-guided local treatments`, revue: `Clinical Orthopaedics and Related Research`, annee: '2015', type: 'série', verif: false },
    { auteurs: `Wu YT, Ho TY, Chou YC, et al.`, titre: `Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial`, revue: `Mayo Clinic Proceedings`, annee: '2017', type: 'ECR', verif: false, note: `Base de preuve du dextrose 5 % péri-nerveux — indication différente.` },
    { auteurs: `Cass SP`, titre: `Ultrasound-guided nerve hydrodissection: what is it? A review of the literature`, revue: `Current Sports Medicine Reports`, annee: '2016', type: 'revue', verif: false },
    { auteurs: `Radnovich R, Scott D, Patel AT, et al.`, titre: `Cryoneurolysis to treat the pain and symptoms of knee osteoarthritis: a multicenter, randomized, double-blind, sham-controlled trial`, revue: `Osteoarthritis and Cartilage`, annee: '2017', type: 'ECR', verif: false },
  ],
  videos: [],

  scenes: [
    {
      id: 'sap-canal', section: 'sonoanatomie', titre: `Canal des adducteurs — coupe transversale du tiers inférieur de cuisse`,
      legende: `Le **sartorius** est le toit du canal ; l'**artère fémorale** en est le repère. Le nerf saphène est le petit faisceau **antéro-latéral à l'artère**, juste sous le sartorius ; le nerf du vaste médial lui est plus latéral — c'est lui qu'on bloque par erreur quand on monte trop haut ou qu'on injecte trop de volume.`,
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Vaste médial', right: 'Adducteurs' }).probeInfo({ plan: 'Transverse, tiers inférieur de cuisse', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 86 L176 88 Q170 150 200 200 L120 262 L0 250 Z', label: 'Vaste médial', at: [76, 168], opacity: 0.5 });
        S.muscle({ path: 'M466 88 L640 84 L640 266 L470 252 Q430 200 462 148 Z', label: 'Adducteurs', at: [556, 182], opacity: 0.5 });
        S.muscle({ path: 'M180 84 Q320 74 460 86 Q472 130 400 148 Q320 158 240 148 Q176 134 180 84 Z', label: 'Sartorius', at: [320, 112], opacity: 0.62 });
        S.artery({ x: 322, y: 192, r: 22, label: 'A. fémorale', lx: 396, ly: 192, anchor: 'start', lead: [345, 192] });
        S.vein({ x: 354, y: 240, rx: 26, ry: 17, label: 'V. fémorale', lx: 392, ly: 254, anchor: 'start', lead: [378, 244] });
        S.nerve({ x: 288, y: 166, r: 8, label: 'N. saphène', lx: 190, ly: 132, anchor: 'end', lead: [282, 162] });
        S.nerve({ x: 252, y: 196, r: 7, label: 'N. du vaste médial', lx: 238, ly: 284, lead: [251, 204] });
        S.bone({ path: 'M100 302 Q320 332 560 302', label: 'Fémur', at: [320, 368] });
      },
    },
    {
      id: 'sap-bloc', section: 'technique', titre: `Bloc du canal des adducteurs — aiguille in-plane, latéro-médiale`,
      legende: `L'aiguille traverse le vaste médial puis perce le sartorius (ressaut net) et se place **du côté antéro-latéral de l'artère**, jamais de front. Critère de fin : croissant anéchogène qui décolle le sartorius et contourne l'artère. 5–10 mL, pas plus — au-delà on bloque le nerf du vaste médial et le patient repart avec un quadriceps faible.`,
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Vaste médial', right: 'Adducteurs' }).probeInfo({ plan: 'Transverse, tiers inférieur de cuisse', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 86 L176 88 Q170 150 200 200 L120 262 L0 250 Z', opacity: 0.5 });
        S.muscle({ path: 'M466 88 L640 84 L640 266 L470 252 Q430 200 462 148 Z', label: 'Adducteurs', at: [560, 190], small: true, opacity: 0.5 });
        S.muscle({ path: 'M180 84 Q320 74 460 86 Q472 130 400 148 Q320 158 240 148 Q176 134 180 84 Z', label: 'Sartorius', at: [352, 112], opacity: 0.62 });
        S.artery({ x: 322, y: 192, r: 22, label: 'A. fémorale', lx: 400, ly: 196, anchor: 'start', lead: [345, 193] });
        S.vein({ x: 354, y: 240, rx: 26, ry: 17 });
        S.nerve({ x: 288, y: 166, r: 8, label: 'N. saphène', lx: 176, ly: 296, anchor: 'middle', lead: [283, 172] });
        S.bone({ path: 'M100 302 Q320 332 560 302' });
        S.target({ x: 292, y: 168, r: 18 });
        S.needle({ from: [0, 96], to: [280, 166], label: '22 G 80 mm, in-plane' });
        S.spread({ x: 306, y: 176, rx: 62, ry: 26, label: '5–10 mL' });
      },
    },
    {
      id: 'sap-ipbsn', section: 'technique', titre: `Branche infrapatellaire (IPBSN) au condyle médial — bloc sous-cutané`,
      legende: `Sonde posée sur le **point de Tinel** repéré au doigt, au bord postérieur du tendon du sartorius, au niveau du condyle médial / tubercule de l'adducteur. Le nerf est un fin faisceau sous-cutané de 1–2 mm, souvent divisé en 2–3 rameaux, voisin de la veine grande saphène — qui, elle, se vide à la compression. Aiguille 25 G tangentielle, 2–3 mL.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur (patella)', right: 'Postérieur' }).probeInfo({ plan: 'Transverse, condyle fémoral médial', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 88 L292 92 L286 142 L0 150 Z', label: 'Vaste médial', at: [128, 134], small: true, opacity: 0.45 });
        S.tendon({ path: 'M300 92 Q382 82 448 98 Q458 128 400 138 Q332 142 296 124 Z', label: 'T. du sartorius', at: [374, 112], small: true });
        S.vein({ x: 476, y: 128, rx: 15, ry: 11, label: 'V. grande saphène', lx: 528, ly: 108, anchor: 'start', lead: [489, 124] });
        S.nerve({ x: 430, y: 156, r: 7, label: 'N. saphène (tronc)', lx: 476, ly: 192, anchor: 'start', lead: [437, 161] });
        S.nerve({ x: 288, y: 154, r: 6, label: 'Branche infrapatellaire (IPBSN)', lx: 248, ly: 214, lead: [286, 162] });
        S.bone({ path: 'M60 268 Q300 242 520 270 Q582 284 640 302', label: 'Condyle fémoral médial', at: [216, 320] });
        S.target({ x: 290, y: 154, r: 15 });
        S.needle({ from: [0, 118], to: [280, 152], label: '25 G, tangentielle' });
        S.spread({ x: 300, y: 158, rx: 46, ry: 16, label: '2–3 mL' });
      },
    },
  ],

  checklist: [
    `Point de Tinel cherché au doigt et **marqué au feutre avant la désinfection**`,
    `Niveau **distal** choisi dans le canal des adducteurs (limiter le bloc du nerf du vaste médial)`,
    `Volume ≤ 10 mL au canal, 2–3 mL sur l'IPBSN`,
    `Test de compression pour distinguer veine et nerf au condyle médial`,
    `**Force du quadriceps testée avant la sortie** ; pas de conduite, marche accompagnée si faiblesse`,
    `Patient prévenu de l'hypoesthésie médiale de jambe et de cheville (attendue) et de l'aggravation transitoire possible à 24–72 h`,
    `Pas de radiofréquence thermique sur ces nerfs sensitifs — PRF ou cryoneurolyse`,
  ],
});
