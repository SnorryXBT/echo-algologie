/* Fiche : patte d'oie (bourse anserine) et tendinopathie patellaire.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références non revérifiées → verif:false. */
ECHO.register({
  id: 'patte-d-oie-tendinopathie-patellaire',
  titre: `Patte d'oie et tendinopathie patellaire — infiltrations et ténotomie échoguidées`,
  titreCourt: `Patte d'oie / tendon patellaire`,
  en: `Ultrasound-guided pes anserine bursa injection and management of patellar tendinopathy (jumper's knee): needle tenotomy/fenestration, platelet-rich plasma, hyperosmolar dextrose; prepatellar and deep infrapatellar bursitis`,
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: `Faible — bénéfice modeste et bref pour la bourse anserine ; dans la tendinopathie patellaire, la charge excentrique/HSR reste supérieure à toute injection, et le corticoïde intratendineux est délétère`,
  maj: '2026-09',
  motsCles: ['patte d\'oie', 'pes anserinus', 'bourse anserine', 'bursite', 'gonalgie médiale', 'tendinopathie patellaire', 'jumper\'s knee', 'tendinite rotulienne', 'ténotomie à l\'aiguille', 'fenestration', 'PRP', 'dextrose', 'prolothérapie', 'bursite pré-patellaire', 'Hoffa'],
  resume: `Deux tableaux péri-articulaires que l'on confond volontiers avec « le genou qui fait mal ». La **douleur de la patte d'oie** siège 4–6 cm sous l'interligne médial, sur les tendons conjoints du sartorius, du gracile et du semi-tendineux ; elle coexiste très souvent avec une gonarthrose médiale, chez des patients en surpoids ou diabétiques — et c'est précisément ce qui rend l'infiltration décevante quand on s'est trompé de cible. La **tendinopathie patellaire** touche la face profonde du tendon à la pointe de la patella ; son traitement de référence n'est pas une injection mais un **programme de charge lente et lourde**, et le corticoïde intratendineux y est franchement délétère (risque de rupture). Ce que l'échographie apporte ici, ce n'est pas tant la précision du geste que la **décision** : voir la bourse, voir la zone hypoéchogène et ses néovaisseaux, et surtout voir qu'il n'y a rien à infiltrer.`,

  flash: {
    position: 'dorsal', positionNote: `patte d'oie : membre en rotation externe, genou fléchi 20–30°. Tendon patellaire : genou fléchi à **30°** sur un coussin — la flexion tend le tendon et fait disparaître les fausses images d'anisotropie`,
    sonde: 'lineaire', sondeNote: `10–15 MHz, profondeur 2–4 cm ; gain élevé et angle d'insonation perpendiculaire (les tendons sont très anisotropes)`,
    approche: 'in-plane', approcheNote: `patte d'oie : transversale, aiguille antéro-postérieure sous les tendons. Tendon patellaire : **longitudinale, aiguille dans l'axe du tendon**, de distal en proximal`,
    aiguille: `25 G 40 mm pour la bourse anserine · 21–22 G 50 mm pour la ténotomie à l'aiguille (le calibre fait le geste)`,
    cible: `Patte d'oie : plan **entre les tendons conjoints et le ligament collatéral médial** — critère de fin = décollement anéchogène sous les tendons. Tendon patellaire : zone hypoéchogène de la **face profonde du tiers proximal**`,
    injectat: `Bourse anserine : 2–3 mL (AL + corticoïde faible dose). Tendon patellaire : 2–3 mL de PRP, ou dextrose 20–25 %, ou fenestration sèche — **jamais de corticoïde intratendineux**`,
    duree: `5–8 min bourse · 10–15 min ténotomie`,
  },

  indications: [
    `**Douleur de la patte d'oie** : point douloureux exquis 4–6 cm sous l'interligne médial, sur la face antéro-médiale du tibia proximal, réveillée à la montée d'escalier et au décubitus latéral genoux joints — après échec de 4–6 semaines de traitement conservateur (charge, étirements, correction du surpoids, contrôle glycémique).`,
    `**Tendinopathie patellaire (jumper's knee)** proximale, douleur à la pointe de la patella, après **au moins 12 semaines** d'un programme de charge bien conduit et documenté. C'est un seuil, pas une suggestion : injecter avant, c'est court-circuiter le seul traitement qui a fait ses preuves.`,
    `**Bursite pré-patellaire** ou **infrapatellaire profonde** symptomatique : ponction évacuatrice (et bactériologie si le moindre signe inflammatoire — la bursite pré-patellaire septique est fréquente et se ponctionne, ne s'infiltre pas).`,
    `**Bloc test / test diagnostique** : dans une gonalgie médiale mixte, l'infiltration sélective de la patte d'oie sépare ce qui vient de la bourse de ce qui vient du compartiment fémoro-tibial médial. C'est souvent son meilleur usage.`,
    `Tendinopathie patellaire **distale** (insertion sur la tubérosité tibiale) ou bursite infrapatellaire profonde associée.`,
  ],
  contreIndications: [
    `**Absolues** : infection cutanée au point de ponction ; **bursite pré-patellaire d'allure septique** (chaleur, rougeur, fièvre, porte d'entrée cutanée) — on ponctionne pour documenter, on n'infiltre pas ; allergie documentée.`,
    `**Absolue de principe** : **corticoïde intratendineux** dans le tendon patellaire. Le risque de rupture est réel et la littérature sur les tendinopathies est claire sur la dégradation du résultat à long terme (Coombes 2010).`,
    `**Relatives** : diabète déséquilibré (fréquent chez ces patients — c'est un facteur de risque de la douleur anserine elle-même) ; site très superficiel = risque élevé d'**atrophie cutanée et de dépigmentation** avec les corticoïdes, majoré chez les phototypes foncés ; sportif en période de compétition (la fenestration et le PRP imposent une décharge relative).`,
    `**Hémostase** : geste de **faible risque hémorragique** (ASRA-ESRA 2018), superficiel et compressible — pas d'arrêt des antiagrégants, anticoagulants au cas par cas. Pour le **PRP**, l'arrêt préalable des AINS (et souvent des antiagrégants) est demandé par la plupart des protocoles : à vérifier auprès du fournisseur du kit utilisé.`,
  ],
  alternatives: `Pour la patte d'oie : la première ligne reste **non interventionnelle** — perte de poids, renforcement du quadriceps et des ischio-jambiers, correction du valgus dynamique, équilibration du diabète, et surtout **traitement de la gonarthrose médiale** qui l'accompagne dans la majorité des cas. Si la douleur médiale est neuropathique (bande, brûlure, allodynie), c'est le **saphène / IPBSN** qu'il faut bloquer, pas la bourse (fiche dédiée).

Pour la tendinopathie patellaire : **charge lente et lourde (HSR) ou excentrique**, 12 semaines minimum, supervisée — c'est le traitement de référence (Kongsgaard 2009, Malliaras 2013). Les injections ne sont qu'un adjuvant chez le non-répondeur. En dernier recours : chirurgie (peignage, résection du tissu dégénératif), dont les résultats ne sont pas supérieurs à un programme de charge bien conduit dans les essais disponibles.`,

  anatomie: `La **patte d'oie** (*pes anserinus*) est l'insertion conjointe, sur la face antéro-médiale du tibia proximal, de trois tendons qui arrivent de trois nerfs et trois loges différentes : le **sartorius** (le plus antérieur et le plus superficiel, aponévrotique et aplati), le **gracile** et le **semi-tendineux** (plus postérieurs, plus ronds, plus profonds). Ils s'insèrent **4 à 6 cm sous l'interligne articulaire médial**.

Entre ce plan tendineux et le **ligament collatéral médial** (faisceau superficiel) se trouve la **bourse anserine**, virtuelle à l'état normal. C'est le seul espace réellement infiltrable de la région : le corticoïde n'a rien à faire *dans* les tendons.

Le **tendon patellaire** s'étend de la pointe de la patella à la tubérosité tibiale antérieure. Sa **face profonde**, au **tiers proximal**, est le siège quasi exclusif de la tendinopathie du sauteur : c'est là qu'on cherche l'épaississement, la perte de la structure fibrillaire, l'hypoéchogénicité et les **néovaisseaux en Doppler**. En avant, la **graisse de Hoffa** comble l'espace entre le tendon, le fémur et le tibia ; deux bourses l'encadrent, la **bourse infrapatellaire profonde** (entre tendon et tibia, juste au-dessus de la tubérosité) et la **bourse pré-patellaire** (sous-cutanée, devant la patella).

### Ce qui compte pour le geste
- **L'anisotropie est le piège majeur de cette fiche.** Un tendon exploré avec une sonde inclinée devient artificiellement hypoéchogène et simule une tendinopathie. Garder la sonde **strictement perpendiculaire** aux fibres, et faire basculer la sonde d'avant en arrière : une vraie lésion reste hypoéchogène dans toutes les incidences, une anisotropie disparaît.
- **Le genou fléchi à 30° pour le tendon patellaire** : en extension, le tendon est relâché, ondulé, et donne de fausses images.
- **Les néovaisseaux en Doppler** de la face profonde signent une tendinopathie active. Régler le Doppler à basse échelle et **ne pas comprimer** : la moindre pression de sonde les efface.
- **La bourse anserine est presque toujours virtuelle**, même chez un patient très symptomatique : ne pas exiger de la voir pour porter le diagnostic, et ne pas conclure à l'absence de pathologie parce qu'elle est sèche. Le diagnostic est **clinique** ; l'échographie sert surtout à éliminer autre chose (lésion du LCM, kyste méniscal médial, arthrose, fracture de contrainte du plateau tibial médial chez le sujet âgé ostéoporotique).
- Profondeurs : bourse anserine **0,8–1,5 cm** ; face profonde du tendon patellaire **0,8–1,5 cm**. Tout est superficiel : sonde haute fréquence, gain élevé, aiguille très tangentielle.`,

  installation: {
    patient: `**Patte d'oie** : décubitus dorsal, membre en **rotation externe de hanche**, genou fléchi 20–30° sur un coussin, face antéro-médiale du tibia proximal offerte. Palper et **marquer au feutre le point douloureux exquis avant la désinfection** — il oriente le placement de la sonde, et il disparaît sous le champ.

**Tendon patellaire** : décubitus dorsal, **genou fléchi à 30°** sur un coussin ou un billot. Cette flexion est indispensable : elle met le tendon sous tension et supprime les artefacts.

**Bursite pré-patellaire** : genou en extension ou légère flexion, la poche étant alors bien saillante.`,
    operateur: `Opérateur du côté à traiter, écran en face. **Patte d'oie** : sonde **transversale** sur le point douloureux, aiguille in-plane d'**antérieur en postérieur**, glissée sous le plan tendineux — on aborde la bourse par son bord, jamais à travers un tendon.

**Tendon patellaire** : sonde **longitudinale** dans l'axe du tendon, aiguille in-plane de **distal en proximal**, cheminant dans l'axe des fibres. C'est le seul sens qui permette de fenestrer sans sectionner transversalement des fibres saines.`,
    sonde: `- Linéaire **10–15 MHz**, preset MSK superficiel, **profondeur 2–4 cm**, focale à 1 cm, gain élevé.
- **Perpendicularité stricte** aux fibres tendineuses : c'est le réglage principal. Basculer la sonde pour distinguer anisotropie et lésion vraie.
- **Doppler couleur basse échelle** sur le tendon patellaire, **sans compression**, pour objectiver les néovaisseaux ; et sur la face médiale pour repérer les veines satellites avant de ponctionner.
- Une **sonde hockey** est confortable au tibia proximal médial, où le relief osseux gêne l'appui d'une grande sonde.
- Couche de gel généreuse ou standoff pour les structures très superficielles (bourse pré-patellaire).`,
  },

  reperage: [
    { titre: `Repérer l'interligne médial et descendre`, texte: `Sonde **coronale** sur l'interligne fémoro-tibial médial : on identifie le **LCM** (bande fibrillaire bi-couche pontant l'interligne) et le ménisque médial. Descendre ensuite de **4 à 6 cm** le long du tibia proximal, en gardant le LCM à l'écran.` },
    { titre: `Basculer en transversal sur la patte d'oie`, texte: `Sonde **transversale** au niveau du point douloureux marqué : on voit, de la superficie à la profondeur, le **sartorius** (bande aponévrotique aplatie, antérieure), le **gracile** et le **semi-tendineux** (ovalaires, plus postérieurs), puis le **LCM**, puis la **corticale tibiale**. La **bourse anserine** est l'interface entre le plan tendineux et le LCM — le plus souvent virtuelle.` },
    { titre: `Chercher ce qui n'est pas la patte d'oie`, texte: `Avant de conclure, balayer : **LCM** (épaississement, lésion), **kyste méniscal médial** (masse anéchogène à l'interligne), **compartiment fémoro-tibial médial** (pincement, ostéophytes, extrusion méniscale = arthrose médiale), **corticale tibiale** (irrégularité d'une fracture de contrainte chez le sujet âgé), et le trajet du **saphène/IPBSN** si la douleur est en bande. Ce balayage change le diagnostic dans une bonne part des cas.` },
    { titre: `Tendon patellaire — coupe longitudinale`, texte: `Genou fléchi 30°, sonde **sagittale** de la pointe de la patella à la tubérosité tibiale. Le tendon normal est une bande fibrillaire homogène de 3–5 mm d'épaisseur. Rechercher, à la **face profonde du tiers proximal** : épaississement focal, plage **hypoéchogène**, perte de la trame fibrillaire, parfois calcification ou irrégularité de la pointe patellaire.` },
    { titre: `Doppler et coupe transversale`, texte: `Doppler basse échelle **sans appuyer** : les néovaisseaux entrent par la face profonde, depuis la graisse de Hoffa. Puis coupe **transversale** pour localiser la lésion en largeur (centrale, médiale ou latérale) — information indispensable pour viser une fenestration.` },
    { titre: `Si l'image est douteuse`, texte: `Toute zone hypoéchogène doit être retestée en **basculant la sonde** : si elle disparaît, c'était de l'anisotropie. Comparer systématiquement au **côté controlatéral**. Et rappeler que l'imagerie et la clinique sont dissociées dans les tendinopathies : un tendon anormal chez un sujet asymptomatique est banal — **on traite un patient, pas une image**.` },
  ],

  sonoanatomie: [
    { structure: `Sartorius (tendon)`, aspect: `Bande aponévrotique aplatie, hyperéchogène, très anisotrope`, repere: `Le plus **antérieur et superficiel** des trois` },
    { structure: `Gracile et semi-tendineux`, aspect: `Deux tendons ovalaires, plus ronds et plus profonds`, repere: `Postérieurs au sartorius, au-dessus du LCM` },
    { structure: `Bourse anserine`, aspect: `Interface virtuelle ; si épanchement, fine lame anéchogène`, repere: `**Entre les tendons conjoints et le LCM** — la cible` },
    { structure: `Ligament collatéral médial`, aspect: `Bande fibrillaire bi-couche pontant l'interligne`, repere: `Plancher de la bourse ; ne pas infiltrer dedans` },
    { structure: `Corticale tibiale proximale médiale`, aspect: `Ligne hyperéchogène régulière avec ombre`, repere: `Une irrégularité doit faire évoquer une fracture de contrainte` },
    { structure: `Tendon patellaire`, aspect: `Bande fibrillaire homogène de 3–5 mm ; pathologique : épaissi, hypoéchogène, trame perdue`, repere: `Lésion à la **face profonde du tiers proximal**` },
    { structure: `Néovaisseaux (Doppler)`, aspect: `Fins signaux pénétrant par la face profonde, effacés par la moindre compression`, repere: `Signent une tendinopathie active` },
    { structure: `Graisse de Hoffa`, aspect: `Coussinet échogène finement hétérogène en arrière du tendon`, repere: `Origine des néovaisseaux ; **pas une cible d'injection**` },
    { structure: `Bourse infrapatellaire profonde / pré-patellaire`, aspect: `Collections anéchogènes, respectivement entre tendon et tibia, et en avant de la patella`, repere: `Se ponctionnent ; la pré-patellaire peut être septique` },
  ],

  technique: [
    { titre: `Préparation`, texte: `Checklist en fin de fiche. Point douloureux marqué avant désinfection. Désinfection large, gel stérile ou housse, gants stériles. Pour le PRP : prélèvement et centrifugation selon le protocole du kit, étiquetage rigoureux, et **pas d'anesthésique local mélangé au concentré plaquettaire** (effet délétère rapporté sur les plaquettes — à confirmer selon les préparations).` },
    { titre: `Anesthésie cutanée`, texte: `0,5–1 mL de lidocaïne 1 % strictement **intradermique et sous-cutanée**, au point d'entrée seulement. Pour la ténotomie à l'aiguille, anesthésier plus généreusement le plan péri-tendineux (le geste est long et douloureux), sans infiltrer le tendon lui-même.` },
    { titre: `Patte d'oie — ponction sous le plan tendineux`, texte: `Sonde transversale. Aiguille **25 G** in-plane, d'antérieur en postérieur, très tangentielle, glissée **sous les tendons conjoints, au-dessus du LCM**. Ne jamais traverser un tendon. Injecter **0,3 mL** en test : l'injectat doit **décoller les tendons du LCM** en une lame anéchogène. S'il gonfle en boule dans le tendon, retirer et repositionner. Puis compléter à **2–3 mL**.` },
    { titre: `Tendon patellaire — ténotomie à l'aiguille (fenestration)`, texte: `Sonde **longitudinale**, aiguille **21 G** in-plane, entrée distale, dirigée dans l'axe des fibres jusqu'à la zone hypoéchogène de la face profonde. Réaliser **20 à 40 passages** de va-et-vient dans le tissu dégénératif, en éventail, en franchissant la zone pathologique sans traverser le tendon de part en part. Le geste s'arrête quand le tissu, initialement ferme, devient franchement plus mou sous l'aiguille — **c'est ce changement de résistance qui est le critère de fin**, pas un compte de passages. Puis injecter l'agent choisi (PRP, dextrose) dans la zone fenestrée.` },
    { titre: `Bursites pré-patellaire et infrapatellaire profonde`, texte: `Aiguille 21 G in-plane, entrée **latérale et à distance** (jamais en plein centre d'une bourse pré-patellaire, dont la peau est fragile et la cicatrisation lente). Aspiration complète, puis analyse du liquide si le moindre doute septique. Corticoïde **uniquement** si le liquide est clair, la bourse froide et l'apyrexie certaine. Compression et bandage 48 h : c'est le geste qui prévient la récidive.` },
    { titre: `Critère de fin`, texte: `Patte d'oie : lame anéchogène décollant les tendons du LCM sur 2–3 cm. Ténotomie : ramollissement perçu de la zone traitée et diffusion de l'injectat dans la zone fenestrée. Bursite : poche vidée et affaissée à l'écran.` },
    { titre: `Après le geste`, texte: `**Patte d'oie** : repos relatif 48 h, glace, reprise progressive ; le programme de renforcement reprend à J3. **Ténotomie / PRP** : décharge relative 48–72 h, **pas d'AINS pendant 2 semaines** si PRP (ils s'opposent au mécanisme recherché), puis reprise **progressive et obligatoire** du programme de charge à partir de J7–J10 — l'injection ne remplace pas la rééducation, elle lui ouvre une fenêtre. Prévenir d'une **poussée douloureuse de 3 à 7 jours** après fenestration ou PRP : elle est constante et attendue.` },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bourse anserine — test diagnostique** | Lidocaïne 1 % seule | **2 mL** | Sépare la douleur anserine de la douleur fémoro-tibiale médiale. Souvent l'usage le plus utile du geste |
| **Bourse anserine — thérapeutique** | Lidocaïne 1 % 2 mL + **faible dose** de corticoïde : méthylprednisolone 20 mg, ou bétaméthasone 0,5–1 mL, ou dexaméthasone 4 mg | **2–3 mL** | Site **très superficiel** : dose minimale efficace, retrait de l'aiguille en aspirant pour éviter le reflux sous-cutané. Prévenir du risque d'atrophie et de dépigmentation. Max 2–3 par an |
| **Tendinopathie patellaire — fenestration sèche** | Aucun produit, ou 1–2 mL de lidocaïne 1 % péri-tendineuse | — | Le geste mécanique est l'agent thérapeutique ; c'est aussi le comparateur des essais de PRP |
| **Tendinopathie patellaire — PRP** | PRP autologue selon kit (leucocyte-rich ou leucocyte-poor), après fenestration | **2–3 mL** | Ne pas mélanger à un AL. Arrêt des AINS 2 semaines avant et après. Preuve inconstante (Dragoo 2014 favorable à 12 semaines ; Scott 2019 négatif vs sérum) |
| **Tendinopathie patellaire — dextrose hyperosmolaire** | Dextrose **20–25 %** (dilué avec de la lidocaïne), injections péri- et intratendineuses répétées toutes les 4–6 semaines | 1–3 mL | Option de prolothérapie, preuve limitée à des essais pilotes (Ryan 2011). Bon rapport coût/risque, à présenter comme non démontrée |
| **Bursite pré-patellaire / infrapatellaire profonde** | Vidange, puis corticoïde faible dose **si et seulement si** aucun argument septique | 1 mL | La bursite pré-patellaire septique est fréquente : au moindre doute, ponction + bactériologie, pas de corticoïde |
| **Tendon patellaire — corticoïde** | — | — | **Contre-indiqué en intratendineux.** Soulagement bref puis dégradation à long terme et risque de rupture (Coombes 2010). En péri-tendineux, à réserver aux situations exceptionnelles et à assumer explicitement |

**Doses maximales d'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg. Sans objet aux volumes utilisés ici, sauf gestes multiples dans la même séance d'HDJ.

**Corticoïde particulaire ou non ?** Pas d'artère terminale ici : le choix n'est pas guidé par le risque embolique mais par le **caractère très superficiel** du site. Un produit peu concentré et une dose faible limitent l'atrophie cutanée, qui est la vraie complication esthétique du geste.`,

  variantes: [
    { titre: `Injection à haut volume péri-tendineuse (high-volume injection)`, texte: `Injection d'un volume important (couramment 10–40 mL de sérum physiologique ± AL) dans l'espace **entre la face profonde du tendon et la graisse de Hoffa**, avec l'objectif mécanique de **rompre les néovaisseaux et les néo-nerfs** qui pénètrent par cette face. Le geste est décrit surtout pour le tendon d'Achille et transposé au tendon patellaire. Preuve : séries et petits essais, résultats contradictoires, protocoles très hétérogènes (avec ou sans corticoïde associé). À classer comme **option de seconde intention non validée**, et à ne pas proposer avant un programme de charge complet.` },
    { titre: `Hydrodissection de la graisse de Hoffa — ce qu'on ne fait pas`, texte: `L'idée circule, elle n'a pas de fondement. La **graisse de Hoffa n'est pas un nerf piégé** : il n'y a rien à libérer, et le syndrome de Hoffa (impingement de la graisse infrapatellaire) est un conflit mécanique qui relève de la rééducation, du contrôle du recurvatum et, exceptionnellement, de la chirurgie. Si l'on veut agir sur la face profonde du tendon, la logique décrite est celle de l'**injection à haut volume** ci-dessus — mécanisme différent, cible différente. Et une douleur antéro-médiale attribuée à Hoffa mais s'accompagnant d'allodynie superficielle et d'un Tinel doit d'abord faire chercher une **branche infrapatellaire du saphène** (fiche dédiée).` },
    { titre: `Écho ou pas d'écho pour la patte d'oie ?`, texte: `L'infiltration à l'aveugle de la patte d'oie est simple et souvent efficace — mais **Finnoff 2010** a montré que la précision de placement dans la bourse est nettement supérieure sous échographie. L'argument décisif n'est cependant pas la précision : c'est que l'échographie **fait le diagnostic différentiel** dans le même temps (arthrose médiale, kyste méniscal, LCM, fracture de contrainte). En HDJ douleur, on ne fait pas ce geste à l'aveugle.` },
    { titre: `Ce qui doit précéder toute injection dans la tendinopathie patellaire`, texte: `Un programme de **charge lente et lourde (heavy slow resistance)** ou **excentrique** supervisé, 12 semaines minimum, 3 séances par semaine, en tolérant une douleur modérée pendant l'exercice. C'est le traitement dont l'efficacité est la mieux établie (**Kongsgaard 2009**, **Malliaras 2013**, **Rudavsky 2014**). Proposer une injection à un patient qui n'a pas fait ce travail, c'est lui offrir un raccourci qui n'existe pas — et se priver du seul levier durable. Le dire clairement en consultation fait partie du geste.` },
  ],

  pearls: [
    `**Marquer le point douloureux au feutre avant de désinfecter** : c'est lui qui guide la sonde, et il disparaît sous le champ.`,
    `Basculer la sonde sur toute image hypoéchogène : ce qui disparaît était de l'anisotropie, ce qui reste est une lésion.`,
    `Genou fléchi à 30° pour explorer le tendon patellaire — en extension, tout tendon paraît anormal.`,
    `Doppler **sans appuyer** : la moindre pression efface les néovaisseaux qu'on cherche.`,
    `Passer sous les tendons de la patte d'oie, jamais à travers : l'aiguille se glisse par le bord antérieur, tangentiellement.`,
    `Le critère de fin de la ténotomie est **tactile** (le tissu se ramollit), pas numérique.`,
    `Utiliser l'infiltration anserine comme **test** : si elle ne soulage pas, la douleur venait de l'articulation, et on a gagné une information.`,
    `Retirer l'aiguille en aspirant après un corticoïde superficiel : c'est ce qui évite la dépigmentation.`,
  ],
  pieges: [
    `Infiltrer une « patte d'oie » qui est en réalité une **gonarthrose médiale** : c'est le motif d'échec numéro un. Le balayage préalable de l'interligne l'évite.`,
    `Prendre l'anisotropie pour une tendinopathie et traiter un tendon sain.`,
    `Injecter un **corticoïde dans le tendon patellaire** : soulagement bref, dégradation durable, risque de rupture.`,
    `Infiltrer une bursite pré-patellaire **septique** : diagnostic à évoquer systématiquement devant une bourse chaude ou une effraction cutanée.`,
    `Injecter le PRP mélangé à un anesthésique local, ou laisser le patient sous AINS après.`,
    `Traiter l'image et non le patient : les anomalies tendineuses asymptomatiques sont banales.`,
    `Faire l'injection **avant** le programme de charge, puis constater la rechute à 3 mois sans avoir rien construit.`,
  ],
  complications: [
    `**Atrophie cutanée et dépigmentation** au point d'injection : la complication caractéristique des corticoïdes en site superficiel, définitive ou très lentement régressive, plus visible sur peau foncée. Prévention : dose faible, produit peu concentré, retrait en aspirant. Information préalable systématique.`,
    `**Rupture du tendon patellaire** après corticoïde intratendineux : rare mais grave, chirurgicale. C'est la raison de la contre-indication.`,
    `**Poussée douloureuse** de 3 à 7 jours après fenestration ou PRP : constante, attendue, à annoncer. Glace, antalgique de palier 1, pas d'AINS si PRP.`,
    `**Infection** : exceptionnelle en dehors de la bourse pré-patellaire, dont la peau est fine et souvent lésée. Asepsie stricte, point d'entrée à distance.`,
    `**Récidive d'une bursite pré-patellaire** après simple ponction : très fréquente sans compression ni éviction du facteur causal (appui sur les genoux).`,
    `**Lésion tendineuse iatrogène** par ponction transtendineuse répétée à l'aveugle ou par fenestration excessive : rester dans l'axe des fibres, cibler la zone pathologique.`,
    `Hématome sous-cutané, malaise vagal : bénins, prévisibles.`,
  ],
  securite: [
    `**Éliminer une bursite septique** avant tout corticoïde en pré-patellaire : chaleur, rougeur, fièvre, effraction cutanée → ponction et bactériologie.`,
    `**Aucun corticoïde intratendineux**, quelle qu'en soit la demande du patient.`,
    `Doppler avant ponction (veines satellites médiales) et repérage du trajet du saphène/IPBSN pour ne pas le léser.`,
    `Site superficiel : dose minimale de corticoïde, retrait en aspirant, information sur l'atrophie cutanée.`,
    `Risque hémorragique **faible** (ASRA-ESRA 2018). Pour le PRP, gestion des AINS et antiagrégants selon le protocole du kit.`,
    `Éliminer une **fracture de contrainte du plateau tibial médial** chez le sujet âgé ostéoporotique avant d'infiltrer une douleur médiale d'apparition récente.`,
  ],

  suivi: `- **J0** : EN avant / à 20 min. Pour la patte d'oie, ce delta est **l'information diagnostique principale** : soulagement franc = origine anserine ; soulagement nul ou partiel = la douleur vient d'ailleurs (articulation, saphène, rachis).
- **J15–J30** : EN, douleur à la palpation du point, montée d'escalier, sommeil (décubitus latéral). Pour le tendon patellaire : score fonctionnel (VISA-P si utilisé au centre), douleur au *single leg decline squat*, et surtout **observance du programme de charge**.
- **3 mois** : décision. Patte d'oie — réponse durable : rien à faire de plus ; réponse brève et récidivante : chercher la cause entretenue (surpoids, gonarthrose médiale, diabète) plutôt que de répéter (max 2–3 corticoïdes par an sur ce site superficiel). Tendon patellaire — poursuite de la charge ; en cas d'échec, discuter une deuxième séance de PRP ou l'avis chirurgical.
- **À tracer systématiquement** : produit, dose, volume, nombre de passages de fenestration, et le fait que le programme de charge a bien été prescrit et suivi — c'est ce qui rend la décision suivante possible.
- **Réinterroger le diagnostic** devant tout échec : douleur médiale neuropathique (saphène/IPBSN), gonarthrose médiale, fracture de contrainte, douleur projetée de hanche ou du rachis L3-L4.`,

  evidence: `- **Précision de l'échoguidage — Finnoff 2010 (PM&R)** : la précision de placement dans la bourse anserine est significativement supérieure sous échographie par rapport à l'infiltration guidée par les repères palpatoires. Preuve **forte** sur la précision technique, sans démonstration d'un meilleur résultat clinique.
- **Bursite anserine — preuve faible et ancienne.** **Alvarez-Nemegyei et Canoso (2004)**, dans leur série de revues « evidence-based » des affections des parties molles, soulignaient déjà la pauvreté de la littérature. **Yoon 2005 (J Korean Med Sci)** a montré que les anomalies échographiques de la région anserine **corrèlent mal** avec la réponse au corticoïde chez des patients arthrosiques — argument fort pour considérer l'entité comme un syndrome douloureux régional souvent secondaire à l'arthrose médiale plutôt que comme une bursite vraie. Preuve **faible** ; bénéfice réel mais modeste et bref.
- **Tendinopathie patellaire — la charge d'abord.** **Kongsgaard 2009 (Scand J Med Sci Sports)** compare corticoïde, squat excentrique sur plan incliné et entraînement en résistance lente et lourde (HSR) : bon résultat à court terme pour le corticoïde, **supériorité nette de la charge à long terme**. **Malliaras 2013 (Sports Medicine)** et **Rudavsky 2014 (J Physiother)** confirment la place centrale des programmes de charge. Preuve **forte** — c'est le point le plus solide de la fiche.
- **Corticoïde et tendon — Coombes 2010 (The Lancet)** : revue systématique des injections dans les tendinopathies, montrant un bénéfice à court terme puis une **dégradation du résultat à moyen et long terme**. Preuve **forte contre** l'usage intratendineux.
- **PRP — résultats contradictoires.** **Dragoo 2014 (Am J Sports Med)** : ECR en double aveugle, PRP + fenestration contre fenestration sèche ; **avantage du PRP à 12 semaines, qui ne persiste pas à 26 semaines**. **Scott 2019 (Am J Sports Med)** : ECR comparant PRP riche en leucocytes, PRP pauvre en leucocytes et sérum physiologique — **aucune supériorité du PRP**. Preuve **incertaine**, avec des essais méthodologiquement solides négatifs : à présenter comme une option non démontrée et non remboursée.
- **Fenestration / ténotomie à l'aiguille** : **Housner 2009** et **Finnoff 2011** rapportent des séries favorables, sans comparateur robuste ; c'est aussi le bras contrôle des essais de PRP, où il obtient de bons résultats. Preuve **faible**, geste peu coûteux et peu risqué.
- **Dextrose hyperosmolaire — Ryan 2011 (Br J Sports Med)** : étude pilote favorable dans la tendinopathie patellaire. Preuve **faible**.
- **Trous assumés** : aucun essai n'a comparé fenestration, PRP et dextrose entre eux avec une puissance suffisante ; et il n'existe pas de donnée permettant de dire si l'infiltration anserine ajoute quoi que ce soit au traitement de la gonarthrose médiale sous-jacente. Ces deux questions sont exactement celles que pose la pratique — la littérature n'y répond pas.`,

  references: [
    { auteurs: `Kongsgaard M, Kovanen V, Aagaard P, et al.`, titre: `Corticosteroid injections, eccentric decline squat training and heavy slow resistance training in patellar tendinopathy`, revue: `Scandinavian Journal of Medicine & Science in Sports`, annee: '2009', type: 'ECR', verif: false, note: `Corticoïde bon à court terme, charge supérieure à long terme.` },
    { auteurs: `Coombes BK, Bisset L, Vicenzino B`, titre: `Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review of randomised controlled trials`, revue: `The Lancet`, annee: '2010', type: 'revue systématique', verif: false },
    { auteurs: `Dragoo JL, Wasterlain AS, Braun HJ, Nead KT`, titre: `Platelet-rich plasma as a treatment for patellar tendinopathy: a double-blind, randomized controlled trial`, revue: `The American Journal of Sports Medicine`, annee: '2014', type: 'ECR', verif: false },
    { auteurs: `Scott A, LaPrade RF, Harmon KG, et al.`, titre: `Platelet-rich plasma for patellar tendinopathy: a randomized controlled trial of leukocyte-rich PRP or leukocyte-poor PRP versus saline`, revue: `The American Journal of Sports Medicine`, annee: '2019', type: 'ECR', verif: false, note: `Essai négatif : aucune supériorité du PRP sur le sérum.` },
    { auteurs: `Malliaras P, Barton CJ, Reeves ND, Langberg H`, titre: `Achilles and patellar tendinopathy loading programmes: a systematic review comparing clinical outcomes and identifying potential mechanisms for effectiveness`, revue: `Sports Medicine`, annee: '2013', type: 'revue systématique', verif: false },
    { auteurs: `Rudavsky A, Cook J`, titre: `Physiotherapy management of patellar tendinopathy (jumper's knee)`, revue: `Journal of Physiotherapy`, annee: '2014', type: 'revue', verif: false },
    { auteurs: `Ryan M, Wong A, Rabago D, Lee K, Taunton J`, titre: `Ultrasound-guided injections of hyperosmolar dextrose for overuse patellar tendinopathy: a pilot study`, revue: `British Journal of Sports Medicine`, annee: '2011', type: 'pilote', verif: false },
    { auteurs: `Housner JA, Jacobson JA, Misko R`, titre: `Sonographically guided percutaneous needle tenotomy for the treatment of chronic tendinosis`, revue: `Journal of Ultrasound in Medicine`, annee: '2009', type: 'série', verif: false },
    { auteurs: `Finnoff JT, Fowler SP, Lai JK, et al.`, titre: `Treatment of chronic tendinopathy with ultrasound-guided needle tenotomy and platelet-rich plasma injection`, revue: `PM&R`, annee: '2011', type: 'série', verif: false },
    { auteurs: `Finnoff JT, Nutz DJ, Henning PT, et al.`, titre: `Accuracy of ultrasound-guided versus unguided pes anserinus bursa injections`, revue: `PM&R`, annee: '2010', type: 'cadavérique', verif: false },
    { auteurs: `Yoon HS, Kim SE, Suh YR, Seo YI, Kim HA`, titre: `Correlation between ultrasonographic findings and the response to corticosteroid injection in pes anserinus tendinobursitis syndrome in knee osteoarthritis patients`, revue: `Journal of Korean Medical Science`, annee: '2005', type: 'série', verif: false },
    { auteurs: `Alvarez-Nemegyei J, Canoso JJ`, titre: `Evidence-based soft tissue rheumatology IV: anserine bursitis`, revue: `Journal of Clinical Rheumatology`, annee: '2004', type: 'revue', verif: false },
    { auteurs: `Narouze S, Benzon HT, Provenzano D, et al.`, titre: `Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018', type: 'reco', verif: false },
  ],
  videos: [],

  scenes: [
    {
      id: 'po-sono', section: 'sonoanatomie', titre: `Patte d'oie — coupe transversale du tibia proximal médial`,
      legende: `4–6 cm sous l'interligne médial. Le **sartorius** est le plus antérieur et le plus superficiel (aponévrotique et aplati), le gracile et le semi-tendineux plus postérieurs et plus ronds. La **bourse anserine** est l'interface entre ce plan tendineux et le **LCM** : le plus souvent virtuelle, y compris chez un patient très symptomatique.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transverse, tibia proximal médial', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.tendon({ x: 300, y: 106, rx: 62, ry: 11, label: 'Sartorius', lx: 196, ly: 94, anchor: 'end', lead: [242, 104] });
        S.tendon({ x: 356, y: 130, rx: 16, ry: 11, label: 'Gracile', lx: 474, ly: 104, anchor: 'start', lead: [370, 126] });
        S.tendon({ x: 400, y: 136, rx: 17, ry: 12, label: 'Semi-tendineux', lx: 474, ly: 130, anchor: 'start', lead: [416, 135] });
        S.fluid({ path: 'M250 148 Q350 140 442 152 L444 170 Q350 182 248 170 Z', label: 'Bourse anserine', lx: 158, ly: 158, anchor: 'end', lead: [250, 160] });
        S.ligament({ path: 'M118 176 Q340 168 562 180 L564 204 Q340 194 116 202 Z', label: 'LCM', at: [210, 190] });
        S.bone({ path: 'M60 240 Q340 258 600 236', label: 'Tibia proximal médial', at: [330, 302] });
      },
    },
    {
      id: 'po-inj', section: 'technique', titre: `Infiltration de la bourse anserine — aiguille tangentielle, sous les tendons`,
      legende: `Aiguille 25 G in-plane, d'antérieur en postérieur, glissée **sous les tendons conjoints et au-dessus du LCM** : on n'entre jamais dans un tendon. Critère de fin : lame anéchogène qui décolle les tendons du ligament sur 2–3 cm. 2–3 mL, dose de corticoïde minimale — le site est très superficiel.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transverse, tibia proximal médial', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.tendon({ x: 300, y: 106, rx: 62, ry: 11, label: 'Tendons conjoints', lx: 300, ly: 88 });
        S.tendon({ x: 356, y: 130, rx: 16, ry: 11 });
        S.tendon({ x: 400, y: 136, rx: 17, ry: 12 });
        S.fluid({ path: 'M250 148 Q350 140 442 152 L444 170 Q350 182 248 170 Z' });
        S.ligament({ path: 'M118 176 Q340 168 562 180 L564 204 Q340 194 116 202 Z', label: 'LCM', at: [180, 192] });
        S.bone({ path: 'M60 240 Q340 258 600 236', label: 'Tibia', at: [180, 300] });
        S.target({ x: 300, y: 160, r: 16 });
        S.needle({ from: [0, 106], to: [286, 158], label: '25 G, tangentielle' });
        S.spread({ x: 352, y: 160, rx: 92, ry: 15, label: '2–3 mL' });
      },
    },
    {
      id: 'po-tendon', section: 'technique', titre: `Tendinopathie patellaire — ténotomie à l'aiguille dans l'axe des fibres`,
      legende: `Genou fléchi à 30°, sonde longitudinale. La lésion siège à la **face profonde du tiers proximal**, sous la pointe de la patella, avec néovaisseaux entrant depuis la graisse de Hoffa. Aiguille 21 G in-plane **dans l'axe des fibres**, de distal en proximal : 20–40 passages en éventail. Le critère de fin est **tactile** — le tissu se ramollit. Puis PRP ou dextrose. Jamais de corticoïde intratendineux.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal (patella)', right: 'Distal (TTA)' }).probeInfo({ plan: 'Sagittal, tendon patellaire', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 14 });
        S.bone({ path: 'M0 62 Q60 70 116 94', label: 'Patella', at: [46, 128] });
        S.tendon({ path: 'M120 92 L600 108 L604 154 L118 142 Z', label: 'Tendon patellaire', at: [432, 128] });
        S.region({ path: 'M126 114 Q180 118 234 124 L236 148 Q180 144 124 140 Z', fill: '#4aa3ff', opacity: 0.34, label: 'Zone hypoéchogène profonde', lx: 262, ly: 86, lead: [196, 118] });
        S.artery({ x: 196, y: 150, r: 4 });
        S.artery({ x: 222, y: 154, r: 4, label: 'Néovaisseaux', lx: 300, ly: 186, anchor: 'start', small: true, lead: [232, 158] });
        S.fat({ path: 'M124 158 Q260 166 378 170 L376 206 Q250 204 122 196 Z', label: 'Graisse de Hoffa', at: [212, 186], small: true });
        S.bone({ path: 'M130 224 Q340 232 560 238 Q604 240 640 250', label: 'Tibia', at: [420, 292] });
        S.target({ x: 196, y: 134, r: 17 });
        S.needle({ from: [640, 172], to: [202, 136], label: '21 G, dans l\'axe des fibres' });
        S.spread({ x: 190, y: 132, rx: 38, ry: 13, label: '2–3 mL' });
      },
    },
  ],

  checklist: [
    `Point douloureux exquis palpé et **marqué au feutre avant la désinfection**`,
    `Balayage préalable de l'interligne médial : arthrose médiale, kyste méniscal, LCM, fracture de contrainte éliminés`,
    `Anisotropie écartée en basculant la sonde avant de conclure à une tendinopathie`,
    `Genou fléchi à 30° pour toute exploration du tendon patellaire`,
    `Bursite pré-patellaire : caractère septique éliminé **avant** tout corticoïde`,
    `**Aucun corticoïde intratendineux** dans le tendon patellaire`,
    `Programme de charge (HSR / excentrique) prescrit et documenté avant toute injection tendineuse`,
    `PRP : AINS arrêtés 2 semaines avant et après, pas d'anesthésique local mélangé au concentré`,
    `Patient prévenu : atrophie/dépigmentation possible en site superficiel, poussée douloureuse de 3–7 jours après fenestration ou PRP`,
  ],
});
