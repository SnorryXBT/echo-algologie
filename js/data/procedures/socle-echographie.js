/* Chapitre transversal : bases de l'échoguidage interventionnel. */
ECHO.register({
  id: 'socle-echographie',
  titre: 'Bases de l’échoguidage interventionnel',
  titreCourt: 'Bases de l’échoguidage',
  en: 'Fundamentals of ultrasound-guided interventional procedures: transducer selection, image optimization, needle visualization, in-plane vs out-of-plane, artifacts, probe asepsis and documentation',
  region: 'socle',
  types: ['socle'],
  niveau: 1,
  grade: 'Forte pour l’échoguidage lui-même ; faible à modérée pour la plupart des aides à la visualisation de l’aiguille',
  maj: '2026-09',
  motsCles: ['échoguidage', 'knobology', 'réglages', 'sonde', 'linéaire', 'convexe', 'hockey stick', 'in-plane', 'out-of-plane', 'hors du plan', 'dans le plan', 'anisotropie', 'artefact', 'ombre acoustique', 'renforcement postérieur', 'réverbération', 'bayonet', 'hydrolocalisation', 'aiguille échogène', 'Doppler', 'PRF', 'asepsie', 'housse de sonde', 'SF2H', 'documentation', 'nid d’abeilles'],
  resume: 'Ce chapitre est le socle technique commun à toutes les fiches de gestes : ce qu’il faut savoir régler, voir et faire avant que la question du site anatomique se pose. Il couvre le choix de la sonde, l’optimisation de l’image (profondeur, focale, gain et TGC, harmoniques, compound, Doppler), l’ergonomie de l’opérateur et de l’écran, la visualisation de l’aiguille (angle d’insonation, aiguilles écho-visibles, beam steering, hydrolocalisation), le choix entre dans le plan et hors du plan, les artefacts utiles et les artefacts trompeurs, la reconnaissance des nerfs, l’asepsie des sondes selon les préconisations françaises et la documentation du geste. La règle de fond ne change jamais : on ne pousse jamais une aiguille qu’on ne voit pas, et l’image qu’on ne comprend pas est un artefact jusqu’à preuve du contraire.',

  indications: [
    'Tout geste percutané d’algologie où la cible est visible ou déductible en échographie : blocs nerveux périphériques, infiltrations articulaires et péri-tendineuses, gestes de paroi, hydrodissection, radiofréquence pulsée périphérique, cryoneurolyse.',
    'Situations où l’échoguidage apporte un gain net et démontré : structures superficielles < 5 cm, présence d’une artère satellite à éviter, patient chez qui les repères palpatoires sont inutilisables (obésité, œdème, cicatrices, déformation post-chirurgicale).',
    'Gestes à proximité de la plèvre ou du péritoine : l’échographie est le seul moyen de contrôle en temps réel de la profondeur de la pointe.',
    'Réduction de la dose d’anesthésique local et du volume injecté par rapport aux techniques par repères : conséquence directe sur le risque de toxicité systémique.',
    'Contexte HDJ, sans radioscopie ni injection de produit de contraste : c’est l’imagerie de guidage par défaut du centre.',
  ],
  contreIndications: [
    'Limites physiques : l’échographie ne traverse ni l’os ni l’air. Toute cible située derrière un cortex, un gaz digestif ou du parenchyme pulmonaire aéré est hors de portée (facettes lombaires profondes chez le sujet épais, foramen, espace épidural chez l’adulte, ganglions sympathiques abdominaux) — repli sur la radioscopie ou le scanner.',
    'Limites de profondeur : au-delà de 6–8 cm, la résolution latérale de la sonde convexe ne permet plus de distinguer une aiguille de 22 G d’un septum fibreux. Poser explicitement la question du guidage alternatif plutôt que de ponctionner « à l’estime avec la sonde posée à côté ».',
    'Limites de l’opérateur : la courbe d’apprentissage est réelle et documentée ; un geste que l’on ne sait pas faire sous échographie n’est pas plus sûr parce qu’on tient une sonde. Ne pas commencer une nouvelle cible sur un patient difficile.',
    'Précautions : pansement ou lésion cutanée sur la fenêtre acoustique, impossibilité de désinfecter la sonde entre deux patients, sonde ou housse endommagée — reporter le geste plutôt que dégrader l’asepsie.',
  ],
  alternatives: 'Radioscopie (référence historique du rachis interventionnel, elle reste supérieure pour tout ce qui est épidural, foraminal, discal ou intra-osseux, au prix de l’irradiation et d’une salle dédiée), scanner (ganglions sympathiques profonds, cimentoplastie), repères anatomiques seuls (acceptable pour quelques infiltrations superficielles très codifiées, mais sans contrôle de la diffusion ni du voisinage vasculaire), neurostimulation (elle confirme le nerf mais ne montre ni l’artère ni la diffusion ; en association avec l’échographie, elle garde une place pour les nerfs profonds et mal visibles). En algologie périphérique, l’échographie est le guidage par défaut ; la vraie question à se poser fiche par fiche est « cette cible est-elle réellement visible ? », pas « puis-je utiliser l’échographie ? ».',

  anatomie: `L’image échographique n’est pas une coupe anatomique : c’est une carte des **interfaces d’impédance acoustique**. Toute la sémiologie en découle — un tissu homogène est noir, une succession d’interfaces est blanche, et ce qui renvoie l’onde ailleurs que vers la sonde disparaît de l’image alors qu’il est bien là.

### Les textures de base

- **Nerf** : en coupe transversale, aspect en **nid d’abeilles** — fascicules hypoéchogènes séparés par un périnèvre et un épinèvre hyperéchogènes. En coupe longitudinale, aspect fasciculaire en câble. Le nerf est **peu anisotrope** : il reste reconnaissable quand on bascule la sonde, contrairement au tendon. Il est aussi **non compressible** et ne se déforme pas sous la pression, à la différence d’une veine.
- **Tendon** : texture **fibrillaire** dense, plus hyperéchogène que le nerf, et **très anisotrope** — quelques degrés de bascule suffisent à le faire virer au noir et à simuler une rupture ou une ténosynovite. Le test décisif entre nerf et tendon est justement ce basculement (*toggling*) : le tendon s’éteint, le nerf reste.
- **Muscle** : fond hypoéchogène strié de septa hyperéchogènes (aspect penné ou en « ciel étoilé » selon l’axe de coupe) ; se déforme à la contraction et à la pression.
- **Fascia et aponévrose** : ligne fine, franchement hyperéchogène, continue — c’est le repère de tous les blocs de plan (*plane blocks*) et le plan de clivage que l’injectat doit ouvrir.
- **Os et calcification** : ligne hyperéchogène très brillante avec **cône d’ombre acoustique** net en arrière. C’est le repère le plus fiable de l’image et souvent le point de départ du balayage.
- **Cartilage hyalin** : bande anéchogène régulière recouvrant le cortex — à ne pas prendre pour un épanchement.
- **Artère** : lumière anéchogène, ronde, **pulsatile**, non compressible, signal Doppler franc. **Veine** : lumière anéchogène, ovalaire, **compressible** à la simple pression de la sonde — le meilleur test veineux est le relâchement de la pression, pas le Doppler.
- **Graisse sous-cutanée** : hypoéchogène, cloisonnée de fines lignes hyperéchogènes ; épaisseur très variable, elle conditionne la profondeur de travail et le choix de la sonde.
- **Plèvre** : ligne hyperéchogène animée du **glissement pleural** synchrone de la ventilation, avec artefacts en queue de comète. Sa reconnaissance est une obligation de sécurité pour tout geste de paroi thoracique, de creux sus-claviculaire ou de région lombaire haute.

### Ce qui compte pour le geste

- **Anisotropie** = dépendance de l’échogénicité à l’angle. Elle est maximale pour les tendons, forte pour les muscles, faible pour les nerfs, nulle pour les liquides. C’est un piège (fausse lésion) et un outil (elle permet d’identifier une structure en la faisant clignoter).
- **La profondeur commande tout** : elle dicte la fréquence de la sonde, la focale, l’angle de ponction et la longueur d’aiguille. Estimer la profondeur de la cible **avant** de choisir l’aiguille, pas l’inverse.
- **L’aiguille est un réflecteur spéculaire** : sa visibilité dépend presque entièrement de l’angle entre son axe et le faisceau. À 90° d’insonation elle est éclatante ; au-delà de 45° d’inclinaison par rapport à la peau, elle disparaît quasiment. C’est le paramètre le plus important de tout le chapitre, avant le matériel et avant les logiciels.
- **Ce qu’on ne voit pas est aussi une information** : l’absence de diffusion visible à l’injection signifie que l’injectat part ailleurs (intravasculaire, autre plan) — c’est un critère d’arrêt, pas un détail.`,

  installation: {
    patient: `Installer d’abord le patient pour le geste, ensuite l’opérateur, ensuite la machine — jamais l’inverse. La position retenue doit tenir **10 à 20 minutes sans bouger** : c’est elle qui détermine la qualité de l’image et le confort de la ponction, pas le confort de l’opérateur.

- **Décubitus chaque fois que possible.** La position assise multiplie le risque de malaise vagal (incidence de 1 à 8 % selon les séries de gestes interventionnels de la douleur, plus élevée sur le rachis cervical) et complique la prise en charge s’il survient. Réserver l’assis aux gestes qui l’exigent réellement (fosse supra-épineuse chez certains morphotypes).
- **Coussins, cales, rotation du membre** préparés avant l’asepsie. Toute correction de position après la mise en place du champ oblige à recommencer le repérage.
- **Marquer la fenêtre au feutre** après le repérage préalable, avant la désinfection : on retrouve le site même si l’image se déplace.
- **Zone de ponction exposée largement**, vêtements dégagés loin du champ, table à la bonne hauteur (coudes de l’opérateur à 90°).
- Prévenir le patient de ce qu’il va ressentir (fraîcheur de l’antiseptique, pression de la sonde, piqûre cutanée puis sensation de pression) : la moitié des mouvements per-geste sont des surprises évitables.`,
    operateur: `**Écran, cible et opérateur dans le même axe de regard.** L’écran doit se trouver de l’autre côté du patient, dans le prolongement de la main qui ponctionne : la tête ne doit pas tourner entre l’aiguille et l’image. C’est l’erreur ergonomique la plus fréquente et elle coûte directement en précision.

- **Main de la sonde en appui** : le bord cubital de la main ou le petit doigt posé sur le patient, jamais la sonde tenue « en l’air ». L’appui transforme les micro-mouvements du bras en mouvements contrôlés du poignet.
- **Avant-bras de la main qui ponctionne posé** ou stabilisé, coude près du corps. Aiguille montée sur **prolongateur** dès que le geste demande une injection fractionnée : la main de la seringue devient indépendante de la main de l’aiguille.
- **Manipulations de sonde codifiées — mnémonique PART** : *Pressure* (comprimer pour rapprocher la cible et chasser la graisse), *Alignment* (translation le long de la structure), *Rotation* (aligner l’axe de coupe), *Tilting* (bascule pour perpendiculariser le faisceau). S’y ajoute le **heel-toe** (« talon-pointe ») : appuyer sur un bord de la sonde pour incliner le faisceau et retrouver un angle d’insonation favorable sans changer le trajet d’aiguille.
- **Repère de sonde (marqueur) toujours du même côté de l’écran** — par convention, à gauche de l’image. Vérifier ce point à chaque changement de sonde ou de machine ; une erreur de latéralité de l’image est une erreur de côté du geste.
- Le geste se fait **debout ou assis, mais stable** ; si la position oblige à se pencher, elle est mauvaise pour l’image comme pour le rachis de l’opérateur.`,
    sonde: `**Choix de la sonde**

| Sonde | Fréquence | Profondeur utile | Emploi en algologie |
|---|---|---|---|
| Linéaire | 6–15 MHz | 0–5 cm | Sonde de référence : nerfs périphériques, articulations superficielles, blocs de paroi, tendons |
| Linéaire compacte « hockey stick » | 8–18 MHz | 0–3 cm | Zones exiguës et courbes : poignet, main, cheville, avant-pied, région cervicale antérieure |
| Convexe | 2–5 MHz | 4–15 cm | Morphotype épais, hanche, sacro-iliaque, plans profonds ; champ large pour se situer avant de repasser en linéaire |

**Réglages, dans l’ordre où on les touche**

1. **Preset** : nerf / MSK / small parts. Un preset adapté fait 80 % du réglage ; ne pas partir d’un preset abdominal.
2. **Profondeur** : la cible au **tiers moyen à mi-hauteur** de l’image. Trop de profondeur = cible minuscule ; pas assez = on perd le plan profond et les structures à risque.
3. **Focale** : au niveau de la cible ou **juste en dessous** — c’est là que la résolution latérale est la meilleure. Une seule focale (pas de focale multiple : elle effondre la cadence image et rend l’aiguille saccadée).
4. **Gain global puis TGC** : régler pour que le muscle reste gris moyen et le cortex osseux franchement blanc. Le TGC compense l’atténuation en profondeur, curseur par curseur ; un gain global trop élevé blanchit l’image et **masque l’aiguille** dans le bruit.
5. **Imagerie harmonique (THI)** : réduit le bruit de champ proche et le clutter, améliore le contraste — utile chez le sujet épais, au prix d’une légère perte de sensibilité sur les petits réflecteurs (dont l’aiguille). À moduler pendant la ponction.
6. **Compound spatial** : moyenne des tirs sous plusieurs angles, réduit le speckle et **améliore la visibilité de l’aiguille inclinée** ; il atténue en revanche l’ombre acoustique et le renforcement postérieur, donc les artefacts qui servent de repères. Savoir le désactiver quand on cherche un cône d’ombre.
7. **Doppler couleur ou puissance avant toute ponction**, sur le trajet prévu : **PRF (échelle) basse** (typiquement 300–1 000 Hz), **filtre de paroi bas**, boîte couleur étroite et peu profonde pour garder la cadence image. Le **Doppler puissance** est plus sensible aux flux lents et indépendant de l’angle : c’est lui qui montre les petites artères satellites qui font manquer une infiltration. Attention à l’excès de gain couleur, qui remplit l’image de bruit et de faux vaisseaux.
8. **Aide à la visualisation de l’aiguille (needle enhancement / beam steering)** : à activer une fois l’aiguille engagée, à désactiver pour l’anatomie — ces modes déforment l’image du reste de la coupe.

Vérifier enfin la **cadence image** : sous 15–20 images/s, l’aiguille « saute » et la pointe se perd. Réduire la profondeur, la largeur du secteur, le nombre de focales ou la boîte Doppler avant de ponctionner.`,
  },

  reperage: [
    { titre: 'Repérage préalable systématique, avant l’asepsie', texte: 'Le *scout scan* n’est pas optionnel : sonde sans champ, gel standard, on balaie la région entière, on identifie la cible et **tout ce qu’il ne faut pas traverser**, on choisit la fenêtre, on mesure la profondeur (curseur) et on marque le point d’entrée. Ce temps décide de la longueur d’aiguille, de l’angle et du choix in-plane / out-of-plane. Il est aussi le moment de découvrir qu’on ne verra pas la cible — et de changer de plan avant d’avoir ouvert un champ stérile.' },
    { titre: 'Partir de la structure la plus facile', texte: 'Jamais de la cible. On accroche d’abord un **repère osseux** (ligne brillante + ombre) ou une **artère** (Doppler), toujours identifiables, puis on progresse par translations vers la cible. C’est la logique de toutes les fiches de ce mémo : os ou artère → plan musculaire → fascia → cible.' },
    { titre: 'Balayer, ne pas fixer', texte: 'Translation continue de proximal en distal en gardant la structure au centre de l’image (technique de l’« ascenseur ») : un nerf se reconnaît d’abord à son **trajet** et à ses rapports constants, pas à son aspect sur une image figée. Toute structure douteuse doit être suivie sur plusieurs centimètres avant d’être nommée.' },
    { titre: 'Discriminer : compression, bascule, Doppler', texte: 'Trois manœuvres, dans cet ordre. **Compression** : la veine s’écrase, l’artère et le nerf non. **Bascule (toggling)** : le tendon s’éteint par anisotropie, le nerf reste. **Doppler puissance à PRF basse** : identifie les artères, y compris de petit calibre, et signe certains repères (échancrure, canal, hiatus).' },
    { titre: 'Cartographier le trajet d’aiguille, pas seulement la cible', texte: 'Une fois la fenêtre choisie, faire mentalement (et avec le Doppler) le chemin complet de la peau à la cible : quels plans traversés, quel vaisseau à éviter, quelle distance à la plèvre ou au péritoine, où est l’os qui servira de butée. Un trajet qui longe une structure à risque sur plusieurs centimètres doit être reconsidéré, même si la cible est parfaitement visible.' },
    { titre: 'Si on ne trouve pas', texte: 'Ne pas s’acharner sur les réglages. Reprendre dans l’ordre : (1) position du patient — la plupart des fenêtres « perdues » sont des fenêtres mal ouvertes ; (2) profondeur et fréquence — descendre en fréquence ou passer au convexe chez le sujet épais ; (3) axe de coupe — repartir d’un repère osseux connu et refaire le trajet ; (4) côté controlatéral comme référence anatomique chez le même patient. Si la cible reste invisible, **changer de cible ou de technique** : viser un plan fascial fiable plutôt qu’un nerf supposé, ou renoncer et réorienter vers un guidage radioscopique.' },
  ],

  sonoanatomie: [
    { structure: 'Nerf périphérique (coupe transversale)', aspect: 'Nid d’abeilles : fascicules hypoéchogènes, cloisons hyperéchogènes ; contour net', repere: 'Peu anisotrope, non compressible, trajet constant ; se suit sur plusieurs centimètres' },
    { structure: 'Tendon', aspect: 'Texture fibrillaire dense, hyperéchogène', repere: 'Très anisotrope : s’éteint dès quelques degrés de bascule — c’est le test de discrimination avec le nerf' },
    { structure: 'Muscle', aspect: 'Fond hypoéchogène, septa hyperéchogènes, aspect penné ou moucheté selon l’axe', repere: 'Se déforme à la contraction et à la compression' },
    { structure: 'Fascia / aponévrose', aspect: 'Ligne fine, continue, franchement hyperéchogène', repere: 'Plan de clivage des blocs de plan ; l’injectat doit l’ouvrir en nappe, pas s’y arrêter' },
    { structure: 'Os cortical, calcification', aspect: 'Ligne très brillante avec cône d’ombre acoustique postérieur', repere: 'Repère le plus fiable de l’image ; sert de butée et de point de départ du balayage' },
    { structure: 'Cartilage hyalin', aspect: 'Bande anéchogène régulière plaquée sur le cortex', repere: 'Ne pas confondre avec un épanchement : il épouse l’os et ne se mobilise pas' },
    { structure: 'Artère', aspect: 'Lumière anéchogène ronde, pulsatile, non compressible', repere: 'Doppler couleur / puissance à PRF basse ; à cartographier avant toute ponction' },
    { structure: 'Veine', aspect: 'Lumière anéchogène ovalaire, parois fines', repere: 'S’écrase à la simple pression de la sonde — le test de compression prime sur le Doppler' },
    { structure: 'Plèvre', aspect: 'Ligne hyperéchogène animée du glissement pleural, queues de comète', repere: 'À identifier avant tout geste thoracique, sus-claviculaire ou lombaire haut' },
    { structure: 'Aiguille', aspect: 'Ligne hyperéchogène linéaire avec réverbérations parallèles en arrière ; pointe = extrémité brillante', repere: 'Visibilité gouvernée par l’angle d’insonation ; la réverbération signe le corps, pas la pointe' },
  ],

  technique: [
    { titre: 'Asepsie et préparation', texte: 'Détersion-désinfection cutanée en deux temps sur peau propre (cinq temps si peau souillée) avec un antiseptique alcoolique à large spectre, **séchage complet** avant ponction. Gel **stérile en conditionnement unidose** sur la peau. Sonde protégée : housse stérile pour tout geste percutané où l’aiguille chemine à proximité immédiate de la sonde, gants stériles pour l’opérateur. Champ, seringues étiquetées, aiguille et prolongateur purgés (l’air résiduel dans le prolongateur crée un artefact brillant et fausse le volume injecté).' },
    { titre: 'Choisir dans le plan ou hors du plan — et l’assumer', texte: '**Dans le plan (in-plane)** : l’aiguille est parallèle au grand axe de la sonde, on voit **le corps et la pointe** sur toute la progression. C’est le choix par défaut dès qu’il y a une structure à risque (artère, plèvre, nerf à ne pas transfixier) ou qu’on veut contrôler une diffusion. Coût : trajet plus long, angle souvent plus grand chez le sujet épais. **Hors du plan (out-of-plane)** : l’aiguille croise le faisceau, on ne voit qu’un **point brillant** dont rien ne dit qu’il s’agit de la pointe — le risque de dépasser la cible est structurel. Réserver aux trajets courts, superficiels et sans structure à risque en arrière (certaines articulations, ponction-évacuation), et travailler alors par « pas d’escalier » (*walk-down*) : point d’entrée à une distance de la sonde égale à la profondeur de la cible, progression par petits avancements avec bascule croissante, en retrouvant le point brillant à chaque pas.' },
    { titre: 'Aligner avant de piquer', texte: 'Poser la pointe sur la peau au point marqué, aligner **visuellement** l’aiguille avec le plan de la sonde avant de franchir le derme : l’immense majorité des « aiguilles invisibles » sont des aiguilles hors du plan de coupe de quelques millimètres. Si l’aiguille n’apparaît pas, on ne l’avance pas : on **balaie la sonde latéralement de 1–2 mm** de part et d’autre pour la retrouver, puis on réaligne la sonde sur l’aiguille — jamais l’aiguille sur la sonde en profondeur.' },
    { titre: 'Piquer à plat, corriger l’angle avec la sonde', texte: 'Viser un angle peau-aiguille **inférieur à 30°** chaque fois que la profondeur le permet : c’est le seul déterminant majeur de la visibilité. Si la cible impose un angle raide, agir sur l’image plutôt que sur l’aiguille : **heel-toe** de la sonde pour incliner le faisceau, activation du **beam steering / needle enhancement**, ou entrée plus à distance de la sonde pour aplatir le trajet. Éloigner le point d’entrée de la sonde augmente le trajet mais rend l’aiguille visible : c’est presque toujours le bon compromis.' },
    { titre: 'Hydrolocalisation', texte: 'Dès qu’un doute existe sur la position de la pointe, injecter **0,5 à 1 mL de sérum physiologique** : la petite nappe anéchogène qui apparaît **localise la pointe** de façon fiable, ouvre le plan devant l’aiguille et permet de progresser dans un espace déjà décollé. Technique de première intention, sans matériel, plus fiable que la plupart des artifices électroniques. Elle sert aussi de test négatif : pas de nappe visible = pointe hors du plan de coupe ou injection intravasculaire.' },
    { titre: 'Injection fractionnée et critère de fin', texte: 'Aspiration avant chaque fraction, injection **par 2–3 mL**, en gardant la pointe et la diffusion à l’écran. Le critère de fin est **échographique** : nappe hypoéchogène dans le bon plan, entourant la cible, de dimension attendue. Arrêt immédiat en cas de douleur fulgurante, de résistance anormale à l’injection, de gonflement d’une structure nerveuse ou d’absence de diffusion visible.' },
    { titre: 'Documentation et fin de geste', texte: 'Enregistrer au minimum **deux images** : le repérage annoté (cible et structures à risque) et l’image de fin avec la pointe de l’aiguille et la diffusion. Les images sont archivées avec identité, côté, date et site — elles sont la trace du geste effectivement réalisé et, en cas de contrôle, la preuve de sa conformité. Retraitement de la sonde immédiatement après le geste (voir *Variantes et gestes associés*), retrait du champ, pansement, surveillance.' },
  ],

  injectat: `Ce chapitre n’a pas d’injectat propre : il décrit ce qu’on injecte **pour voir**, pas pour traiter. La pharmacologie des produits thérapeutiques est traitée dans le chapitre *Pharmacologie des injectables*.

| Objectif | Produit | Volume | Commentaire |
|---|---|---|---|
| Localiser la pointe (hydrolocalisation) | Sérum physiologique 0,9 % | 0,5–1 mL par test | Neutre, répétable, n’entame pas la dose d’anesthésique local ; à préférer à l’anesthésique local pour tous les tests de position |
| Ouvrir un plan avant de progresser | Sérum physiologique 0,9 % ou dextrose 5 % | 1–3 mL | Le **dextrose 5 %** ne bloque pas la conduction : il est le choix quand on veut préserver une réponse à la stimulation ou éviter tout bloc moteur (hydrodissection, gestes avec test fonctionnel) |
| Anesthésie du trajet | Lidocaïne 1 % | 1–3 mL | Au point de ponction et dans le trajet superficiel ; systématique avant aiguille de gros calibre ou aiguille de radiofréquence |
| Améliorer le contact sonde-peau | Gel stérile unidose | — | Conditionnement individuel stérile obligatoire pour tout geste percutané ; jamais de flacon multidose sur un champ |

**À proscrire** : l’injection d’air comme « marqueur » (il crée une ombre qui masque définitivement la zone d’intérêt et fausse toute la suite du geste), et l’utilisation de l’anesthésique local comme produit de repérage quand la localisation est incertaine — chaque millilitre gaspillé compte pour la dose maximale et pour le risque de toxicité systémique.`,

  variantes: [
    { titre: 'Dans le plan ou hors du plan : arbitrer', texte: `**Dans le plan** — avantages : visualisation continue du corps et de la pointe, contrôle de la diffusion, sécurité vis-à-vis des structures voisines, possibilité de corriger la trajectoire à vue. Inconvénients : trajet plus long et souvent plus douloureux, exigence d’alignement millimétrique, angle défavorable pour les cibles profondes.

**Hors du plan** — avantages : trajet le plus court, angle naturel, geste rapide sur cible superficielle, confort du patient. Inconvénient rédhibitoire dans la plupart des situations d’algologie : **on ne sait jamais si le point brillant est la pointe ou le corps** de l’aiguille. Toute cible située devant une structure à risque impose le plan.

En pratique : *in-plane* par défaut pour tout bloc nerveux, tout geste de paroi thoracique ou abdominale, tout site à voisinage artériel ; *out-of-plane* acceptable pour une ponction articulaire superficielle codifiée, une évacuation de kyste ou lorsque l’anatomie interdit l’alignement. Dans tous les cas, l’hydrolocalisation lève l’ambiguïté sur la pointe.` },
    { titre: 'Artefacts : les utiles et les trompeurs', texte: `**Utiles (à ne pas supprimer)**
- **Ombre acoustique postérieure** : signe l’os, une calcification, un corps étranger. Repère de premier plan pour se situer.
- **Renforcement postérieur** : plage plus claire derrière une structure liquidienne — argument fort pour un kyste, une bourse, un épanchement plutôt qu’une masse tissulaire.
- **Réverbération de l’aiguille** : les lignes parallèles régulières en arrière du corps de l’aiguille confirment qu’il s’agit bien d’une aiguille et non d’un septum. Attention : elles marquent le **corps**, jamais la pointe.
- **Anisotropie** utilisée volontairement (basculer pour éteindre un tendon et le distinguer d’un nerf).

**Trompeurs**
- **Anisotropie subie** : fausse hypoéchogénicité d’un tendon prise pour une fissure ou une ténosynovite ; corriger en perpendicularisant le faisceau avant de conclure.
- **Artefact en baïonnette (*bayonet*)** : l’aiguille paraît coudée alors qu’elle est droite, parce que la vitesse de propagation diffère entre deux tissus traversés (typiquement graisse et muscle). Piège d’interprétation de la profondeur de la pointe.
- **Réverbérations multiples / queues de comète** : peuvent créer de fausses « aiguilles fantômes » en profondeur et induire une erreur d’estimation de la profondeur, particulièrement quand l’aiguille est très perpendiculaire au faisceau. Réduire le gain lointain et diminuer l’angle d’insonation.
- **Lobes latéraux, largeur de faisceau** : structures apparaissant dans l’image alors qu’elles sont hors du plan de coupe — source classique de « nerf » ou de « vaisseau » qui disparaît dès qu’on bascule.
- **Faux Doppler** : gain couleur trop élevé, filtre de paroi trop bas, mouvement du patient — l’image se remplit de couleur sans vaisseau. Vérifier sur deux réglages avant d’affirmer une structure vasculaire.` },
    { titre: 'Faire voir l’aiguille : hiérarchie des moyens', texte: `Par ordre décroissant de rendement réel :

1. **Réduire l’angle d’insonation** (entrer plus loin de la sonde, heel-toe, choisir une fenêtre plus tangentielle). Gratuit, immédiat, le plus efficace.
2. **Hydrolocalisation** (0,5–1 mL de sérum). Gratuit, fiable, applicable dans le plan comme hors du plan.
3. **Alignement rigoureux** et micro-balayage de la sonde pour retrouver l’aiguille — plutôt que d’avancer à l’aveugle.
4. **Aiguilles écho-visibles** (surface micro-usinée ou revêtement écho-réfléchissant) : le bénéfice est **surtout démontré aux angles raides** (> 30–45°) ; à angle plat, une aiguille standard est déjà bien visible. Les essais randomisés montrent un gain sur le confort de l’opérateur, le temps de procédure et l’inconfort du patient, avec des scores de visibilité parfois non différents, et une netteté d’image tissulaire parfois moindre qu’avec une aiguille classique. Utile, pas magique.
5. **Beam steering / needle enhancement logiciel** : le faisceau est incliné pour venir frapper l’aiguille plus perpendiculairement. Gain net sur les trajets raides ; à désactiver pour lire l’anatomie.
6. **Compound spatial** : améliore la visibilité de l’aiguille inclinée, mais atténue ombre et renforcement.
7. **Systèmes de suivi d’aiguille** (tracking électromagnétique type GPS, capteur piézoélectrique en pointe d’aiguille) : ils prédisent la trajectoire et le point de croisement du faisceau. Les données montrent un bénéfice surtout chez l’opérateur **novice** et pour les approches hors du plan (moins de repositionnements, temps d’exécution réduit). Coût et consommables dédiés ; pas un prérequis d’une activité d’algologie interventionnelle.` },
    { titre: 'Asepsie et retraitement des sondes', texte: `Le cadre français distingue les sondes selon le niveau de risque de l’acte, et non selon la sonde elle-même. Pour un **geste percutané**, la sonde entre en contact avec une peau saine désinfectée mais **le champ opératoire est stérile** et l’aiguille chemine à son contact immédiat : la conduite retenue est **housse stérile + gel stérile unidose**, puis **désinfection de la sonde après l’acte**.

- **Avant l’acte** : sonde nettoyée et désinfectée entre chaque patient ; vérification de l’intégrité de la sonde, du câble et de la housse. Housse stérile posée avec du gel (non stérile côté sonde, **stérile côté peau**).
- **Pendant l’acte** : gel stérile unidose uniquement ; jamais de flacon multidose ni de gel ré-entamé sur un champ.
- **Après l’acte** : nettoyage puis **désinfection de niveau intermédiaire** — le niveau retenu par les préconisations nationales françaises pour les sondes en contact avec des muqueuses ou avec un risque de contact avec des liquides biologiques (efficacité bactéricide, fongicide, virucide et mycobactéricide, hors spores) : lingettes désinfectantes validées ou procédé automatisé. Une housse visuellement intacte en fin d’examen ne dispense pas de la désinfection, elle en conditionne seulement le niveau.
- **Traçabilité** du retraitement, et procédure écrite disponible dans la salle : c’est un point de contrôle attendu en HDJ.
- Produits compatibles avec la sonde selon le fabricant : l’alcool et certains désinfectants détruisent les lentilles acoustiques. Une sonde fissurée n’est plus désinfectable.` },
    { titre: 'Documentation, compte rendu et archivage', texte: `Chaque geste laisse une trace image et une trace écrite. Le **minimum** exploitable : une image de repérage annotée (cible + structure à risque identifiée) et une image de fin (pointe + diffusion). Une boucle vidéo de quelques secondes vaut mieux qu’une image figée lorsque le geste est difficile.

Ces images ne sont pas décoratives : elles documentent que le guidage a réellement été utilisé, ce qui conditionne la description de l’acte réalisé, et elles servent de référence pour le geste suivant (fenêtre retenue, profondeur mesurée, difficulté rencontrée). Les archiver avec identité, côté, date, site et opérateur, dans le dossier patient — donc dans un stockage conforme, jamais sur un téléphone ou une clé personnelle.` },
  ],

  pearls: [
    'L’angle d’insonation gouverne tout : à trajet égal, une entrée 2 cm plus loin de la sonde rend visible une aiguille qui ne l’était pas.',
    'Quand l’aiguille disparaît, on bouge la sonde — jamais l’aiguille. Micro-balayage latéral de 1–2 mm pour la retrouver, puis réalignement.',
    '0,5 mL de sérum physiologique localisent la pointe mieux que n’importe quel logiciel : hydrolocaliser au moindre doute, et systématiquement avant la fraction principale.',
    'Le test de compression identifie une veine plus sûrement que le Doppler ; le test de bascule sépare le tendon du nerf plus sûrement que la texture.',
    'Repérer avant de désinfecter, marquer la fenêtre au feutre, mesurer la profondeur : trois minutes qui font gagner le geste entier.',
    'Régler le gain sur le cortex osseux : s’il est blanc franc et le muscle gris moyen, l’aiguille se détachera. Une image trop claire cache l’aiguille.',
    'Baisser la PRF et passer en Doppler puissance pour chercher une petite artère satellite ; la retrouver après avoir piqué ne sert plus à rien.',
  ],
  pieges: [
    'Avancer l’aiguille en la cherchant : c’est le mécanisme de la quasi-totalité des ponctions vasculaires et pleurales évitables.',
    'Prendre la réverbération ou une aiguille fantôme pour la pointe : la pointe est le point brillant le plus superficiel du groupe, confirmé par l’hydrolocalisation.',
    'Conclure à une lésion tendineuse sur une plage sombre d’anisotropie sans avoir perpendicularisé le faisceau.',
    'Laisser le compound et les harmoniques activés en permanence : on perd le cône d’ombre et le renforcement postérieur, donc des repères et des arguments diagnostiques.',
    'Travailler avec une cadence image effondrée (profondeur excessive, focales multiples, grande boîte Doppler) : la pointe devient saccadée et se perd entre deux images.',
    'Marqueur de sonde du mauvais côté de l’écran : erreur de latéralité de l’image, donc risque d’erreur de côté ou de trajectoire inversée.',
    'Gel non stérile ou flacon multidose sur un champ ; housse posée avec des bulles d’air (artefacts et perte de contact).',
  ],
  complications: [
    'Ponction vasculaire par perte de la pointe : hématome, injection intravasculaire, toxicité systémique. Prévention = visualisation continue + Doppler préalable + injection fractionnée avec aspiration.',
    'Ponction pleurale et pneumothorax lors des gestes de paroi thoracique, sus-claviculaires ou lombaires hauts : identifier la ligne pleurale et son glissement **avant** de piquer, garder une marge et une trajectoire tangentielle.',
    'Lésion nerveuse par ponction ou injection intrafasciculaire : douleur fulgurante à la progression ou à l’injection, résistance anormale, gonflement du nerf à l’image → arrêt immédiat, retrait de 1–2 mm, réévaluation. L’échoguidage réduit le risque sans l’annuler.',
    'Infection du site de ponction, exceptionnelle mais réelle : elle relève de l’asepsie du geste et du retraitement de la sonde, pas d’une antibioprophylaxie.',
    'Malaise vagal, surtout en position assise et sur les gestes cervicaux : décubitus, jambes surélevées, surveillance ; anticiper plutôt que traiter.',
    'Inconfort et douleur du trajet long des approches dans le plan : anesthésie cutanée et du trajet, progression lente, prévenir le patient.',
  ],
  securite: [
    'Aucune aiguille n’avance sans que la pointe soit identifiée. C’est la seule règle non négociable du chapitre.',
    'Doppler couleur ou puissance à PRF basse sur **le trajet prévu** et non seulement sur la cible, avant chaque ponction.',
    'Test d’aspiration avant chaque fraction, injection lente et fractionnée par 2–3 mL ; l’échoguidage diminue le risque de toxicité systémique mais ne dispense d’aucune de ces mesures (chapitre *Sécurité, consentement, antithrombotiques*).',
    'Vérification du couple côté / site avant la ponction (time-out), avec le marqueur de sonde contrôlé sur l’écran.',
    'Housse stérile et gel stérile unidose pour tout geste percutané ; désinfection de niveau intermédiaire de la sonde après l’acte, tracée.',
    'Chariot d’urgence accessible et émulsion lipidique 20 % disponible dès que le volume d’anesthésique local est significatif ou que plusieurs blocs sont réalisés dans la même séance.',
    'Pas de radioprotection à prévoir : l’échographie n’expose à aucun rayonnement ionisant, ce qui autorise des repérages longs, répétés, et l’usage chez la femme enceinte.',
  ],

  suivi: `Le suivi porte ici sur **la pratique**, pas sur le patient.

- **Courbe d’apprentissage** : les recommandations conjointes ASRA-ESRA sur la formation en anesthésie locorégionale échoguidée décrivent l’acquisition comme la maîtrise d’une **liste de tâches élémentaires** (obtenir l’image, l’optimiser, identifier les structures, aligner l’aiguille, la maintenir visible, reconnaître la diffusion) et non comme un nombre de gestes. Se former cible par cible, et compter ses gestes **par cible**, pas globalement.
- **Auto-audit trimestriel** raisonnable en démarrage de centre : taux de gestes réalisés comme prévus, nombre de ponctions vasculaires accidentelles, nombre de gestes abandonnés faute de visibilité, durée moyenne. Ces trois derniers indicateurs chutent nettement dans les premiers mois et sont le meilleur reflet de la progression.
- **Images conservées systématiquement** : la relecture des images de fin de geste des cas difficiles est le retour d’expérience le plus rentable, et il alimente directement les fiches de ce mémo.
- **Matériel** : contrôle régulier de l’état des sondes et des câbles, traçabilité du retraitement, vérification des presets après chaque mise à jour logicielle (les presets sont souvent réinitialisés).`,

  evidence: `- **Bénéfice de l’échoguidage lui-même : preuve forte** en anesthésie locorégionale (réduction des ponctions vasculaires, des volumes d’anesthésique local, amélioration du taux de succès). En algologie interventionnelle périphérique, la démonstration est **extrapolée** de l’anesthésie locorégionale et de séries : les essais comparant directement échoguidage et repères anatomiques sur des critères cliniques à distance restent peu nombreux — c’est un trou assumé de la littérature.
- **Angle d’insonation et visibilité de l’aiguille : consensus physique et clinique**. La revue de référence sur les artefacts liés à l’aiguille (*Needle-related ultrasound artifacts and their importance in anaesthetic practice*, Br J Anaesth 2014) décrit réverbération, queue de comète, lobes latéraux, largeur de faisceau et artefact en baïonnette, et rappelle que ces artefacts culminent quand l’aiguille est perpendiculaire au faisceau et se réduisent en abaissant l’angle et le gain lointain.
- **Aiguilles écho-visibles : bénéfice réel mais circonscrit.** Les essais randomisés disponibles montrent un avantage aux angles raides (> 30–45°) sur le confort de l’opérateur et la qualité perçue de l’image, avec une réduction du temps de procédure, mais des scores de visibilité parfois **non différents** et une netteté tissulaire parfois supérieure avec l’aiguille conventionnelle. Preuve **modérée**, effet dépendant du contexte (références précises à reconfirmer lors de la passe de vérification bibliographique).
- **Systèmes de suivi d’aiguille (tracking électromagnétique) : preuve faible à modérée, essentiellement sur fantôme et chez le novice** — réduction du nombre de repositionnements et du temps d’exécution, surtout hors du plan (études sur fantôme, Anaesthesia 2014 ; travaux plus récents sur le suivi électromagnétique miniaturisé, Sci Rep 2024). Aucun bénéfice clinique démontré sur les complications.
- **Hydrolocalisation** : technique ancienne, validée par l’usage et décrite dans les revues de visualisation de l’aiguille (injection de ~1 mL de sérum déplaçant les tissus à la pointe et la rendant visible). Niveau de preuve **faible formellement**, rapport bénéfice/coût imbattable.
- **Doppler pour la détection des petits vaisseaux** : le Doppler puissance est plus sensible que le Doppler couleur pour les flux lents et de petit calibre ; les réglages déterminants sont une **PRF basse** et un filtre de paroi bas (tutoriels d’optimisation Doppler, RadioGraphics 2019). Preuve **forte** sur le plan technique.
- **Asepsie des sondes** : le cadre français repose sur les préconisations nationales validées en mars 2019 (groupe de travail national, diffusion SF2H), qui imposent une **désinfection de niveau intermédiaire** après chaque acte à risque et l’usage d’une protection de sonde et de gel stérile unidose. Recommandation professionnelle, opposable en pratique, pas un essai.
- **Formation** : les recommandations conjointes ASRA-ESRA (Reg Anesth Pain Med 2010) restent la référence pour structurer l’apprentissage par compétences ; elles n’ont pas d’équivalent français spécifique à l’algologie interventionnelle — trou à signaler.`,

  references: [
    { auteurs: 'Reusz G, Sarkany P, Gal J, Csomos A', titre: 'Needle-related ultrasound artifacts and their importance in anaesthetic practice', revue: 'Br J Anaesth', annee: '2014', type: 'revue', verif: false, note: 'Référence sur réverbération, queue de comète, lobes latéraux et artefact en baïonnette. Auteurs et année cités de mémoire, à confirmer.' },
    { titre: 'Challenges, solutions, and advances in ultrasound-guided regional anaesthesia', revue: 'BJA Education', annee: '2017', url: 'https://www.bjaed.org/article/S2058-5349(17)30023-9/fulltext', type: 'revue', verif: true, note: 'Optimisation d’image, compound spatial, harmoniques, visualisation de l’aiguille.' },
    { titre: 'Essential knobology for ultrasound-guided regional anesthesia and interventional pain management', revue: 'chapitre d’ouvrage, Springer', type: 'référence technique', verif: false, note: 'Fréquence, profondeur, gain, TGC, focale, presets, Doppler, compound, harmoniques ; ouvrage, année et DOI à confirmer.' },
    { titre: 'The American Society of Regional Anesthesia and Pain Medicine and the European Society of Regional Anaesthesia and Pain Therapy joint committee recommendations for education and training in ultrasound-guided regional anesthesia', revue: 'Reg Anesth Pain Med', annee: '2010', type: 'reco', verif: false, note: 'Décrit les tâches élémentaires de l’échoguidage et la formation par compétences ; année et pagination à confirmer.' },
    { titre: 'Prévention du risque infectieux associé aux actes d’échographie — préconisations du groupe de travail national, mars 2019', revue: 'SF2H / Mission nationale', annee: '2019', url: 'https://www.sf2h.net/k-stock/data/uploads/2019/04/Preconisations_Mission_Nationale_Sonde-Endocavitaire_Vallidees_Mars_2019.pdf', type: 'reco', verif: true, note: 'Désinfection de niveau intermédiaire après chaque acte à risque, protection de sonde, gel stérile unidose.' },
    { titre: 'Ultrasound physics and instrumentation', revue: 'StatPearls, NCBI Bookshelf', type: 'référence technique', verif: false, note: 'Physique de l’image et genèse des artefacts ; identifiant de chapitre et année de révision à confirmer.' },
    { auteurs: 'Tielens LKP, et al.', titre: 'Ultrasound-guided needle handling using a guidance positioning system in a phantom', revue: 'Anaesthesia', annee: '2014', doi: '10.1111/anae.12461', type: 'étude sur fantôme', verif: true, note: 'Suivi électromagnétique : gain chez le novice, surtout hors du plan.' },
    { titre: 'Miniaturized electromagnetic tracking enables efficient ultrasound-navigated needle insertions', revue: 'Sci Rep', annee: '2024', doi: '10.1038/s41598-024-64530-6', type: 'étude expérimentale', verif: true },
    { titre: 'Optimizing image quality when evaluating blood flow at Doppler US: a tutorial', revue: 'RadioGraphics', annee: '2019', doi: '10.1148/rg.2019180055', type: 'revue technique', verif: true, note: 'PRF, filtre de paroi, gain couleur, angle : les réglages qui font apparaître ou disparaître un petit vaisseau.' },
  ],
  videos: [
    { titre: 'Ultrasound technical aspects: how to improve needle visibility', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-technical-aspects-how-to-improve-needle-visibility/' },
  ],

  scenes: [
    {
      id: 'echo-textures', section: 'sonoanatomie', titre: 'Les textures de base : nerf, tendon, artère, veine, os',
      legende: 'Le nerf est en nid d’abeilles et peu anisotrope ; le tendon est fibrillaire et très anisotrope (il s’éteint dès quelques degrés de bascule) ; l’artère est ronde, pulsatile et non compressible ; la veine, ovalaire, s’écrase sous la sonde ; l’os est une ligne brillante suivie d’un cône d’ombre.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe transversale', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.fascia({ points: [[0, 75], [640, 73]], width: 1.6 });
        S.muscle({ path: 'M0 74 L640 74 L640 292 L0 300 Z', label: 'Muscle', at: [60, 132], opacity: 0.45 });
        S.nerve({ x: 120, y: 150, rx: 22, ry: 15, label: 'Nerf (nid d’abeilles)', lx: 120, ly: 202, small: true, lead: [120, 166] });
        S.tendon({ path: 'M240 132 L360 122 L360 150 L240 160 Z', label: 'Tendon (fibrillaire)', at: [300, 108], small: true });
        S.artery({ x: 452, y: 150, r: 17, label: 'Artère', lx: 452, ly: 202, small: true, lead: [452, 168] });
        S.vein({ x: 540, y: 152, rx: 24, ry: 14, label: 'Veine', lx: 552, ly: 202, small: true, lead: [546, 167] });
        S.bone({ path: 'M0 302 Q160 288 320 292 Q480 296 640 288', label: 'Os cortical', at: [300, 280], small: true });
        S.label({ x: 300, y: 352, text: 'Cône d’ombre acoustique', cls: 'lbl-bone', small: true });
        S.label({ x: 520, y: 94, text: 'Fascia', cls: 'lbl-fascia', small: true });
      },
    },
    {
      id: 'echo-artefacts', section: 'sonoanatomie', titre: 'Trois artefacts à reconnaître',
      legende: 'À gauche, l’ombre acoustique derrière un cortex ou une calcification : repère utile. Au centre, le renforcement postérieur derrière une structure liquidienne : argument pour un kyste ou une bourse. À droite, l’anisotropie : le tendon vire au noir quand le faisceau n’est plus perpendiculaire — fausse lésion classique.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Gauche', right: 'Droite' }).probeInfo({ plan: 'Coupe transversale', type: 'linéaire' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 420 L0 420 Z', opacity: 0.32 });
        S.bone({ path: 'M40 176 Q110 162 178 178', label: 'Calcification / cortex', at: [110, 148], small: true });
        S.label({ x: 110, y: 300, text: 'Ombre acoustique', cls: 'lbl-bone', small: true });
        S.fluid({ x: 306, y: 168, rx: 52, ry: 36, label: 'Kyste (anéchogène)', lx: 306, ly: 124, small: true });
        S.region({ path: 'M258 206 L354 206 L354 386 L258 386 Z', fill: '#dfe7ee', opacity: 0.2 });
        S.label({ x: 306, y: 300, text: 'Renforcement\npostérieur', small: true });
        S.tendon({ path: 'M424 150 L610 178 L610 202 L424 174 Z', label: 'Tendon', at: [470, 136], small: true });
        S.region({ path: 'M528 165 L610 178 L610 202 L528 189 Z', fill: '#05070a', opacity: 0.82 });
        S.label({ x: 520, y: 250, text: 'Anisotropie\n(fausse hypoéchogénicité)', small: true, lead: [560, 190] });
      },
    },
    {
      id: 'echo-angle', section: 'technique', titre: 'Angle d’insonation : ce qui rend l’aiguille visible',
      legende: 'Même cible, deux points d’entrée. À gauche, entrée éloignée de la sonde : angle ≈ 25°, corps et pointe se détachent avec les réverbérations parallèles caractéristiques. À droite, entrée proche : angle > 55°, le faisceau est renvoyé ailleurs et seule la pointe apparaît par intermittence. Corriger par le point d’entrée, le heel-toe ou le beam steering — jamais en poussant.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Dans le plan (in-plane)', type: 'linéaire' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.fascia({ points: [[0, 75], [640, 73]], width: 1.6 });
        S.muscle({ path: 'M0 74 L640 74 L640 300 L0 306 Z', label: 'Muscle', at: [70, 286], opacity: 0.4 });
        S.bone({ path: 'M0 310 Q200 300 340 304 Q500 308 640 302' });
        S.fascia({ points: [[0, 196], [640, 188]], width: 1.8, label: 'Plan cible', at: [96, 178], small: true });
        S.nerve({ x: 330, y: 210, rx: 18, ry: 13, label: 'Cible', lx: 214, ly: 214, anchor: 'end', small: true, lead: [310, 210] });
        S.target({ x: 330, y: 210, r: 30 });
        S.needle({ from: [6, 76], to: [306, 208], label: '≈ 25° : aiguille bien visible' });
        S.needle({ from: [470, 66], to: [368, 214], label: '> 55° : signal faible', delay: 1.8 });
        S.spread({ x: 330, y: 240, rx: 58, ry: 15, label: 'Diffusion', delay: 3.2 });
      },
    },
    {
      id: 'echo-hors-plan', section: 'technique', titre: 'Hors du plan : la pointe n’est qu’un point — hydrolocaliser',
      legende: 'En out-of-plane l’aiguille croise le faisceau : le point brillant peut être la pointe comme le corps. L’injection de 0,5 mL de sérum crée une nappe anéchogène qui localise réellement la pointe. Approche réservée aux cibles superficielles sans structure à risque en arrière.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Hors du plan (out-of-plane)', type: 'linéaire' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.fascia({ points: [[0, 73], [640, 71]], width: 1.6 });
        S.muscle({ path: 'M0 72 L640 72 L640 268 L0 276 Z', label: 'Muscle', at: [80, 240], opacity: 0.4 });
        S.bone({ path: 'M0 280 Q200 268 340 272 Q500 276 640 268', label: 'Butée osseuse', at: [470, 250], small: true });
        S.artery({ x: 205, y: 196, r: 14, label: 'Artère (Doppler)', lx: 205, ly: 240, small: true, lead: [205, 211] });
        S.nerve({ x: 348, y: 196, rx: 17, ry: 13, label: 'Cible', lx: 430, ly: 210, anchor: 'start', small: true, lead: [366, 197] });
        S.needle({ from: [348, 118], to: [348, 158], label: 'Section de l’aiguille' });
        S.target({ x: 348, y: 196, r: 28 });
        S.spread({ x: 348, y: 166, rx: 30, ry: 11, label: '0,5 mL' });
      },
    },
  ],

  checklist: [
    'Sonde et preset adaptés à la profondeur de la cible ; profondeur, focale, gain et TGC réglés avant d’ouvrir le champ',
    'Repérage préalable fait, fenêtre marquée au feutre, profondeur mesurée, longueur d’aiguille choisie en conséquence',
    'Marqueur de sonde vérifié sur l’écran (latéralité de l’image) avant la ponction',
    'Doppler couleur ou puissance à PRF basse passé sur le trajet prévu, pas seulement sur la cible',
    'Choix in-plane / out-of-plane explicite et justifié par le voisinage de structures à risque',
    'Housse stérile + gel stérile unidose ; intégrité de la housse vérifiée en fin de geste',
    'Deux images enregistrées au minimum (repérage annoté, fin de geste avec pointe et diffusion)',
    'Désinfection de niveau intermédiaire de la sonde après l’acte, tracée',
  ],
});
