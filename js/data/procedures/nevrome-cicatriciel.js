/* Fiche : névromes cicatriciels, névromes de moignon et douleurs de cicatrice. */
ECHO.register({
  id: 'nevrome-cicatriciel',
  titre: 'Névromes cicatriciels, névromes post-amputation et douleurs de cicatrice',
  titreCourt: 'Névromes cicatriciels',
  en: 'Ultrasound-guided diagnosis and treatment of traumatic, scar and stump (amputation) neuromas — diagnostic block, hydrodissection, corticosteroid, pulsed radiofrequency, cryoneurolysis and chemical neurolysis',
  region: 'socle',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Faible à modérée : séries de cas convergentes et cohortes rétrospectives, aucun essai randomisé contrôlé de geste percutané sur névrome ; preuve la plus solide pour la cryoablation et la neurolyse alcoolique des névromes de moignon',
  maj: '2026-09',
  motsCles: ['névrome', 'névrome cicatriciel', 'névrome de moignon', 'stump neuroma', 'douleur de cicatrice', 'amputation', 'douleur du membre résiduel', 'Tinel', 'ilio-inguinal', 'Pfannenstiel', 'post-thoracotomie', 'TMR', 'RPNI', 'alcoolisation', 'phénol'],
  resume: `Un névrome est le bourgeonnement anarchique d'un nerf sectionné ou lésé, en bulbe ou en fuseau, spontanément électrogène et mécano-sensible. En échographie il se reconnaît à trois éléments : une masse hypoéchogène ovalaire ou en bulbe, **en continuité directe avec un nerf identifiable**, et un signe de Tinel déclenché par la sonde elle-même — c'est la seule situation où l'échographe est aussi l'outil d'examen clinique. Le raisonnement est simple et rigide : identifier la masse, la relier à son nerf, la confirmer par un **bloc test de 1 à 3 mL** d'anesthésique local, puis seulement traiter. La hiérarchie thérapeutique va du moins destructeur au plus destructeur — hydrodissection, corticoïde, radiofréquence pulsée, cryoneurolyse — la neurolyse chimique restant réservée aux situations palliatives ou aux échecs, et la chirurgie moderne (TMR, RPNI) devenant l'option de référence chez l'amputé chez qui les gestes percutanés échouent.`,

  flash: {
    position: 'dorsal', positionNote: 'variable selon le site ; exposer la cicatrice, membre détendu, moignon dégagé de la prothèse',
    sonde: 'lineaire', sondeNote: '10–18 MHz (« hockey stick » utile pour les cicatrices de main, de poignet et de cheville) ; 6–13 MHz pour un moignon épais ou une paroi abdominale',
    approche: 'in-plane', approcheNote: 'in-plane, dans l\'axe du nerf, en abordant le névrome par son versant proximal — jamais en le transperçant',
    aiguille: '25–27 G pour le bloc test et l\'hydrodissection ; 22 G 50–100 mm à extrémité active 5–10 mm pour la PRF ; cryosonde 14–18 G',
    cible: 'Espace péri-neural immédiatement en amont du renflement ; halo anéchogène entourant le nerf et la base du névrome',
    injectat: 'Bloc test : 1–3 mL. Traitement : dextrose 5 % ou sérum 3–10 mL ± corticoïde non particulaire',
    duree: '10 min (bloc test) · 15–20 min (hydrodissection) · 25–35 min (PRF ou cryoneurolyse)',
  },

  indications: [
    `**Douleur focale, élective, reproductible à la pression d'un point cicatriciel**, avec irradiation dans un territoire nerveux et signe de Tinel positif : c'est le tableau à reconnaître.`,
    `**Douleur du membre résiduel après amputation** (à distinguer de la douleur fantôme) : douleur du moignon, intolérance à l'emboîture, impossibilité d'appareillage.`,
    `**Douleur inguinale chronique après cure de hernie** : ilio-inguinal, ilio-hypogastrique, génito-fémoral, avec ou sans matériel prothétique en cause.`,
    `**Douleur de cicatrice de Pfannenstiel** (césarienne, chirurgie gynécologique) : ilio-inguinal et ilio-hypogastrique piégés dans la cicatrice ou dans le muscle grand droit.`,
    `**Douleur post-thoracotomie ou post-VATS** : névrome ou piégeage d'un nerf intercostal sur le trajet de la cicatrice ou d'un orifice de trocart.`,
    `**Névrome du nerf radial superficiel** après chirurgie du poignet, cathéter ou traumatisme ; **névrome du nerf saphène ou de sa branche infrapatellaire** après chirurgie du genou, prélèvement de greffon ou stripping veineux ; **névrome du nerf sural** après chirurgie du tendon d'Achille.`,
    `**Bloc test à visée diagnostique** avant toute décision : geste percutané destructeur, ou orientation chirurgicale (neurolyse, TMR, RPNI).`,
    `**Documentation médico-légale** d'une douleur post-opératoire d'origine nerveuse : le couple image + bloc test positif est la meilleure preuve disponible.`,
  ],
  contreIndications: [
    `**Absolues** : refus ; infection cutanée ou de la cicatrice ; suspicion de **récidive tumorale** ou de tumeur nerveuse (schwannome, neurofibrome) non explorée — un névrome se prouve par sa continuité avec un nerf et son contexte, sinon on explore avant de traiter.`,
    `**Relatives** : cicatrice inflammatoire récente (moins de 3 mois) — traiter d'abord médicalement ; troubles de la cicatrisation, artériopathie du moignon ; prothèse ou plaque au contact (hernie) ; anticoagulation, avec un risque hémorragique **faible** (site superficiel compressible, ASRA-ESRA 2018) pour la plupart des sites, **intermédiaire** pour les sites profonds (paroi abdominale profonde, moignon proximal).`,
    `**Alcoolisation et phénolisation : contre-indiquées de principe sur un nerf mixte ou à proximité d'un territoire cutané fonctionnel**, en raison du risque de névrite intense, de nécrose des tissus voisins et de récidive sur un mode plus douloureux.`,
    `Corticoïde chez le diabétique, ou en répétition sur un même site (fragilisation cutanée et sous-cutanée en zone déjà cicatricielle).`,
    `Douleur fantôme isolée sans point-gâchette de moignon : ce n'est pas l'indication d'un geste percutané sur le névrome.`,
  ],
  alternatives: `**Avant tout geste** : traitement de fond de la douleur neuropathique (gabapentinoïdes, IRSNa, tricycliques), lidocaïne topique 5 % en emplâtre sur la cicatrice, désensibilisation et travail cicatriciel par le kinésithérapeute ou l'ergothérapeute, adaptation de l'emboîture par l'orthoprothésiste chez l'amputé. Ces mesures traitent une part importante des cas et ne coûtent rien.

**Gestes percutanés, du moins au plus destructeur** : hydrodissection périneurale → infiltration de corticoïde → radiofréquence pulsée → cryoneurolyse → neurolyse chimique (alcool, phénol).

**Chirurgie** : neurolyse et transposition du nerf dans un tissu sain (muscle, os), résection du névrome — mais la résection simple **recrée un névrome** et son taux d'échec est ce qui a motivé les techniques modernes. Le **TMR** (targeted muscle reinnervation : transfert du nerf sectionné sur un nerf moteur d'un muscle voisin) et le **RPNI** (regenerative peripheral nerve interface : coiffage de l'extrémité nerveuse par un greffon musculaire libre) donnent des résultats convergents dans une revue systématique de 2023 : amélioration de la douleur de névrome chez 75 à 100 % des patients et de la douleur fantôme chez 45 à 80 % en traitement, avec un taux de complications de 13 à 31 %, dominées par les retards de cicatrisation. Le corpus reste essentiellement observationnel (un seul essai randomisé sur 17 études).

**La position raisonnable** : les gestes percutanés servent à confirmer la cible, à soulager durablement une partie des patients, et à sélectionner ceux qui relèvent de la chirurgie. Ils ne sont pas en concurrence avec le TMR / RPNI — ils en sont le filtre.`,

  anatomie: `Un nerf périphérique sectionné ou lésé tente de repousser. Si le tube conjonctif distal est absent (section complète, amputation) ou si la repousse est bloquée par une fibrose cicatricielle, les axones bourgeonnent de façon désordonnée et se mêlent à du tissu conjonctif : c'est le **névrome**, qui est donc une cicatrice nerveuse, pas une tumeur.

Deux formes anatomiques :
- **Névrome terminal (en bulbe)** : à l'extrémité d'un nerf sectionné — moignon d'amputation, nerf coupé pendant une chirurgie. Masse arrondie ou en massue, en continuité avec le nerf par un seul versant.
- **Névrome en continuité (fusiforme)** : sur un nerf partiellement lésé ou piégé dans une cicatrice, qui reste continu. Renflement fusiforme, avec du nerf de part et d'autre.

La douleur vient de trois mécanismes concomitants : décharges ectopiques spontanées des axones régénérants, **mécanosensibilité** (d'où le Tinel et la douleur à l'appui de l'emboîture), et sensibilisation centrale secondaire.

**Sites classiques à connaître, par contexte chirurgical :**
- **Moignon d'amputation** : nerf sciatique et ses divisions (tibial, fibulaire commun) pour les amputations de cuisse et de jambe ; nerf sural ; nerfs médian, ulnaire et radial au membre supérieur. Le névrome est souvent **profond**, adhérent à l'os ou plaqué contre l'emboîture.
- **Cicatrice de cure de hernie inguinale** : **nerf ilio-inguinal** (le plus souvent), ilio-hypogastrique, branche génitale du génito-fémoral ; nerf englobé dans la fibrose péri-prothétique ou attrapé par un point.
- **Cicatrice de Pfannenstiel** : nerfs **ilio-inguinal et ilio-hypogastrique** à leur passage dans le muscle transverse et l'oblique interne, aux extrémités latérales de la cicatrice — le site typique est à quelques centimètres en dedans de l'épine iliaque antéro-supérieure.
- **Thoracotomie, trocarts de VATS, drains** : **nerfs intercostaux**, sur le trajet de la cicatrice ou à l'orifice d'un drain.
- **Poignet et avant-bras** : **nerf radial superficiel** (cathéters, chirurgie de De Quervain, fractures du radius distal), branche cutanée palmaire du médian.
- **Genou et jambe** : **branche infrapatellaire du nerf saphène** (arthroscopie, prélèvement du tendon rotulien ou des ischio-jambiers, PTG, chirurgie veineuse), **nerf saphène** au canal de Hunter, **nerf sural** (chirurgie du tendon d'Achille, prélèvement de greffon nerveux).
- **Paroi abdominale** : branches cutanées antérieures des nerfs intercostaux à leur passage dans la gaine du grand droit (mécanisme du syndrome ACNES).

### Ce qui compte pour le geste
- **Le névrome se prouve par sa continuité avec un nerf.** Une masse sans nerf identifiable en amont n'est pas un névrome tant qu'on ne l'a pas démontré.
- **Le Tinel échographique** : reproduire la douleur avec la sonde, précisément sur la masse et non à côté, est le meilleur argument diagnostique disponible.
- **Il n'y a pas de vascularisation** dans un névrome typique en Doppler couleur : sa présence doit faire évoquer une autre lésion.
- **Le névrome de moignon est souvent multiple** : chercher tous les nerfs sectionnés, pas seulement le plus gros.
- **La cible du geste est le nerf en amont, pas la masse elle-même** : injecter dans un névrome est douloureux, inefficace et potentiellement traumatique.`,

  installation: {
    patient: `Cicatrice exposée, segment détendu et confortablement calé pour un geste de 15 à 30 minutes. Chez l'amputé, le moignon est dégagé de l'emboîture depuis au moins 30 minutes (l'appui déforme les tissus et déplace les repères).

**Repérer et marquer au feutre le point de Tinel maximal avant de désinfecter** : le patient le désigne lui-même, et c'est le repère clinique qu'il faut retrouver à l'écran. C'est l'étape la plus rentable du geste.

Chez le patient très hyperalgique de la cicatrice (allodynie majeure), prévoir un temps de désensibilisation et une anesthésie cutanée soignée : la simple pression de la sonde peut être insupportable et rendre le repérage impossible.`,
    operateur: `Opérateur du côté de la lésion, écran en face, dans l'axe du regard. Sens de ponction choisi pour **aborder le névrome par son versant proximal**, le long du nerf, et non transversalement : on cherche à entourer le nerf en amont du renflement.

Prolongateur souple systématique pour l'hydrodissection. Pour la PRF, générateur et écran de paramètres dans le champ visuel.`,
    sonde: `- Linéaire haute fréquence (10–18 MHz), preset « small parts », profondeur minimale, focale sur la masse ; sonde compacte (« hockey stick ») pour les reliefs cicatriciels de la main, du poignet, de la cheville et du moignon.
- **Doppler couleur** : absence de vascularisation intralésionnelle attendue ; sa présence doit faire remettre en cause le diagnostic. Repérer aussi les vaisseaux du trajet.
- **Compression douce contrôlée** avec la sonde pour reproduire le Tinel — geste diagnostique à part entière, à faire avant toute injection.
- **Mesurer** : plus grand diamètre, longueur, aire de section du nerf en amont. Comparer au côté sain pour les nerfs pairs (ilio-inguinal, saphène, sural).
- Si la peau cicatricielle est irrégulière, gel en excès ou coussin de gel pour obtenir un contact acoustique correct.`,
  },

  reperage: [
    { titre: 'Partir du nerf, pas de la masse', texte: 'Identifier le nerf en amont, en territoire sain, là où il est facile, puis le suivre en balayage transversal jusqu\'à la cicatrice. C\'est la seule façon de prouver la continuité et d\'éviter de prendre pour un névrome un fil, un granulome ou un ganglion.' },
    { titre: 'Reconnaître le renflement', texte: 'Masse **hypoéchogène**, ovalaire ou en bulbe, à contours nets, homogène, sans dessin fasciculaire ou avec un dessin appauvri, en continuité avec le nerf. En coupe longitudinale, on voit le nerf entrer dans la masse et s\'y arrêter (névrome terminal) ou la traverser (névrome en continuité).' },
    { titre: 'Tinel échographique', texte: 'Appuyer précisément sur la masse avec la sonde et demander au patient si sa douleur habituelle est reproduite, puis appuyer 1–2 cm à côté pour vérifier la sélectivité. C\'est le test clé : une masse indolore n\'explique pas la douleur, même si elle est bien un névrome.' },
    { titre: 'Doppler et diagnostic différentiel', texte: 'Absence de flux intralésionnel. Éliminer : granulome sur fil (souvent hyperéchogène ou avec cône d\'ombre, non relié à un nerf), collection ou sérome (anéchogène, compressible), récidive tumorale (vascularisée, contexte), endométriose de cicatrice (masse hétérogène, femme en âge de procréer, douleur cataméniale), schwannome (excentré sur le nerf, vascularisé, parfois avec cône d\'ombre postérieur en renforcement).' },
    { titre: 'Chercher les autres nerfs', texte: 'Sur un moignon d\'amputation, systématiquement explorer tous les troncs sectionnés. Sur une cicatrice inguinale ou de Pfannenstiel, explorer les trois nerfs candidats. Une douleur persistante après traitement d\'un seul névrome est souvent une douleur de névrome voisin non traité.' },
    { titre: 'Si on ne trouve rien', texte: 'Une douleur cicatricielle typique sans névrome visible reste possible : le nerf peut être simplement piégé dans la fibrose, sans renflement. Le geste reste alors une **hydrodissection au point de Tinel**, guidée sur le nerf et non sur une masse — et le bloc test garde toute sa valeur.' },
  ],

  sonoanatomie: [
    { structure: 'Névrome terminal (en bulbe)', aspect: 'Masse hypoéchogène ovalaire ou en massue, homogène, contours nets, avasculaire en Doppler', repere: 'Un seul versant nerveux : le nerf entre et s\'arrête' },
    { structure: 'Névrome en continuité', aspect: 'Renflement fusiforme du nerf, dessin fasciculaire effacé ou désorganisé', repere: 'Du nerf de part et d\'autre — signe la lésion partielle ou le piégeage' },
    { structure: 'Nerf d\'amont', aspect: 'Aspect fasciculaire normal, parfois épaissi en amont du névrome', repere: 'C\'est la cible du geste : mesurer son aire de section' },
    { structure: 'Fibrose cicatricielle', aspect: 'Plage hyperéchogène désorganisée, perte des plans de clivage, atténuation postérieure', repere: 'Explique l\'absence d\'excursion du nerf à la mobilisation' },
    { structure: 'Signe de Tinel échographique', aspect: 'Non visible — c\'est la réponse du patient à la pression de la sonde sur la masse', repere: 'Comparer avec la pression 1–2 cm à côté : c\'est la sélectivité qui compte' },
    { structure: 'Matériel prothétique (hernie)', aspect: 'Ligne ou treillis hyperéchogène, cône d\'ombre, parfois plicaturé', repere: 'Rapport avec le nerf à préciser avant tout geste ; peut contre-indiquer l\'abord' },
    { structure: 'Granulome sur fil / suture', aspect: 'Petit nodule hyper- ou hypoéchogène, parfois avec un filament hyperéchogène linéaire en son centre', repere: 'Non relié à un nerf : c\'est le principal piège diagnostique' },
    { structure: 'Plèvre (cicatrices thoraciques)', aspect: 'Ligne hyperéchogène animée d\'un glissement', repere: 'À l\'écran en permanence sur toute cible intercostale' },
  ],

  technique: [
    { titre: 'Bloc test — le geste qui conditionne tout le reste', texte: 'EN notée avant. Ponction in-plane, pointe placée **au contact du nerf en amont du névrome**, jamais dans la masse. **1 à 3 mL** de lidocaïne 1–2 % ou de ropivacaïne 0,2 % — pas plus : un gros volume diffuse aux nerfs voisins et ruine la valeur localisatrice du test. EN à 15 et 30 min, puis à 2 h, et Tinel retesté. Un test positif est un soulagement ≥ 50 % **et** une disparition du Tinel.' },
    { titre: 'Hydrodissection — geste de première intention', texte: 'Aiguille 25–27 G sur prolongateur, in-plane, dans le plan péri-neural en amont du névrome. Hydrolocalisation par 0,2–0,5 mL à chaque avancée. Décoller le nerf du plan cicatriciel sur **360° et sur toute la longueur du segment adhérent**, en repositionnant l\'aiguille de part et d\'autre. Injectat : dextrose 5 % ou sérum, 3 à 10 mL selon le site. Critère de fin : halo circonférentiel et nerf redevenu mobile à la mobilisation passive.' },
    { titre: 'Infiltration de corticoïde — quand la composante inflammatoire domine', texte: 'À réserver aux cicatrices récentes et inflammatoires, ou aux échecs partiels de l\'hydrodissection. Corticoïde **non particulaire** (dexaméthasone 4 mg) ou méthylprednisolone 20–40 mg, ajouté au volume d\'hydrodissection, déposé en péri-neural. Pas de répétition rapprochée sur une cicatrice : le sous-cutané se fragilise et se dépigmente.' },
    { titre: 'Radiofréquence pulsée — après bloc test positif mais bref', texte: 'Aiguille RF 22 G, extrémité active 5–10 mm, placée **le long du nerf en amont du névrome**, pas dans la masse. Stimulation sensitive 50 Hz : reproduction de la douleur à < 0,5 V ; stimulation motrice 2 Hz muette jusqu\'à 1,5–2 V. Paramètres usuels : 42 °C, 2 Hz, salves de 20 ms, 45 V, 120 s répétées 2 à 3 fois. Puis 2–4 mL d\'AL ± corticoïde non particulaire. Voir le chapitre Radiofréquence.' },
    { titre: 'Cryoneurolyse — l\'option la plus étayée sur le névrome de moignon', texte: 'Cryosonde 14–18 G amenée au contact du nerf en amont du névrome, idéalement couchée le long de lui. Protection cutanée si la cible est à moins de 10 mm de la peau. Cycles gel 2 min / dégel 1 min répétés 2 à 3 fois, sous contrôle de la boule de glace. Critère de fin : boule englobant le nerf sur tout son diamètre. Voir le chapitre Cryoneurolyse.' },
    { titre: 'Neurolyse chimique — en dernier recours et sous conditions', texte: '**Alcool absolu 2 à 5 mL, précédé de 5 à 10 mL d\'anesthésique local en péri-neural**, ou phénol. Protocole décrit : 1 à 3 séances espacées d\'environ 2 semaines. Réservé aux névromes de moignon rebelles, au patient non chirurgical ou en situation palliative, et **jamais sur un nerf mixte ni sur un territoire cutané fonctionnel** : risque de névrite intense, de nécrose tissulaire de voisinage et de récidive plus douloureuse. Consentement écrit spécifique.' },
    { titre: 'Après le geste', texte: 'EN et Tinel retestés en salle. Reprise progressive de l\'appareillage chez l\'amputé, en concertation avec l\'orthoprothésiste — un névrome traité sans emboîture révisée récidive sur le plan symptomatique. Programme de désensibilisation cicatricielle prescrit systématiquement. Consignes écrites, réévaluation à J15–J30.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bloc test diagnostique** | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | **1–3 mL, pas plus** | Le petit volume est la condition de la valeur localisatrice. EN avant / 30 min / 2 h et Tinel retesté |
| Hydrodissection | Dextrose 5 % ou sérum physiologique | 3–10 mL | Première intention. Pas de plafond de dose, répétable, utilisable chez le diabétique |
| Composante inflammatoire | Dexaméthasone 4 mg (non particulaire) ou méthylprednisolone 20–40 mg, ajoutée au volume d'hydrodissection | 3–10 mL au total | Non particulaire par principe sur ces sites superficiels et vascularisés. Pas de répétition rapprochée |
| Après PRF | Ropivacaïne 0,2 % ou lidocaïne 1 % ± corticoïde non particulaire | 2–4 mL | Confort post-geste |
| Neurolyse chimique | AL en péri-neural puis **alcool absolu** | 5–10 mL d'AL puis 2–5 mL d'alcool | Dernier recours, nerf sensitif pur uniquement, consentement spécifique, 1–3 séances espacées d'environ 2 semaines |
| Cryoneurolyse | Lidocaïne 1 % (trajet) ± sérum tiède (protection cutanée) | 3–10 mL | Pas d'injectat thérapeutique : la lésion est physique |

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Pertinent surtout quand on traite plusieurs névromes de moignon dans la même séance.

**À ne pas faire** : injecter **dans** le névrome (douloureux, inefficace, traumatisant) ; utiliser un gros volume pour le bloc test « pour être sûr » (on perd exactement ce qu'on cherchait à établir) ; répéter les corticoïdes sur une cicatrice ; utiliser un corticoïde particulaire près d'une artère.`,

  variantes: [
    { titre: 'Névrome de moignon d\'amputation', texte: `Le contexte le mieux documenté. Trois options percutanées ont des données publiées :
- **Neurolyse alcoolique échoguidée** : série prospective rapportant un soulagement chez environ 54 % des patients après 1 à 3 injections de 2–5 mL d'alcool précédées de 10 mL d'anesthésique local, séances espacées d'environ 2 semaines.
- **Radiofréquence** : la RF **continue** échoguidée, dans une série rétrospective, a permis une réduction d'au moins 50 % de la douleur chez 6 patients sur 9, avec une meilleure tolérance de la prothèse et sans effet indésirable. La **PRF** a fait l'objet de cas et de courtes séries anciennes avec de bons résultats.
- **Cryoablation** : la série la plus convaincante (7 patients, CardioVascular and Interventional Radiology 2022) rapporte 100 % de succès technique, une EN passant de 8,3 à 2,1 à une semaine et 3 au dernier contrôle, avec un recul moyen de 27 mois et une satisfaction élevée. C'est, en niveau de preuve comme en durée d'effet, l'option percutanée la plus solide sur cette indication.

**Point pratique** : chez l'amputé, aucun geste ne tient si l'emboîture appuie sur le névrome. Le geste percutané et la révision de l'appareillage se décident ensemble.

**Une donnée récente à connaître** : une étude observationnelle en contexte de guerre suggère qu'une **hydrodissection péri-névromateuse précoce**, dans les suites immédiates d'une amputation, améliore la douleur du membre résiduel et, à un moindre degré, la douleur fantôme. Signal intéressant, à confirmer.` },
    { titre: 'Douleurs inguinales et de Pfannenstiel', texte: `Après cure de hernie inguinale, l'**ilio-inguinal** est le nerf le plus souvent en cause, suivi de l'ilio-hypogastrique et de la branche génitale du génito-fémoral. Le bloc échoguidé sélectif des deux premiers, réalisé entre l'oblique interne et le transverse à quelques centimètres en dedans et au-dessus de l'épine iliaque antéro-supérieure, a une bonne précision anatomique validée par dissection, et les séries de blocs répétés dans la douleur post-herniorraphie rapportent une réponse antalgique satisfaisante chez une majorité de patients — de l'ordre de 55 à 70 % selon les séries.

**Stratégie** : bloc test sélectif nerf par nerf pour identifier lequel est en cause (le petit volume est ici décisif), puis hydrodissection dans le plan inter-musculaire cicatriciel, puis PRF ou cryoneurolyse en cas d'effet net mais bref. La présence d'un treillis prothétique doit être repérée avant tout geste.

Pour la **cicatrice de Pfannenstiel**, les mêmes nerfs sont en cause, piégés à leurs extrémités latérales ; penser systématiquement à l'**endométriose de cicatrice** comme diagnostic différentiel chez la femme en âge de procréer, avec sa douleur cataméniale et sa masse hétérogène vascularisée.` },
    { titre: 'Douleurs de paroi thoracique et post-thoracotomie', texte: `Le syndrome douloureux post-thoracotomie touche une proportion importante des opérés et son mécanisme est neuropathique, par lésion iatrogène d'un nerf intercostal. La cible est le nerf intercostal sous la côte, en amont du point de Tinel ou de la cicatrice, en gardant la **plèvre à l'écran en permanence**.

Options publiées : PRF échoguidée (série rétrospective favorable après chirurgie du cancer du poumon, avec amélioration de la douleur et du sommeil), **cryoneurolyse** (cas cliniques rapportant une amélioration de 75 % pendant 6 semaines puis 50 % pendant 8 semaines) — et, en radiologie interventionnelle, la cryoablation scanoguidée. À noter : la cryoanalgésie **chirurgicale** des intercostaux, pratiquée en peropératoire lors des thoracotomies, a été associée à des névralgies séquellaires, ce qui n'est pas rapporté avec la technique percutanée échoguidée.` },
    { titre: 'Névromes des nerfs cutanés des membres', texte: `**Nerf radial superficiel** (syndrome de Wartenberg post-traumatique ou post-chirurgical) et **branche cutanée palmaire du médian** : nerfs très superficiels, faciles à voir en 15–18 MHz, faciles à bloquer et à hydrodisséquer, faciles aussi à léser par une infiltration trop appuyée.

**Branche infrapatellaire du saphène** après arthroscopie, prélèvement de greffon, PTG ou chirurgie veineuse : cause classique et méconnue de douleur médiale du genou. Une série de traitement local échoguidé (hydrodissection et corticoïde) après PTG rapporte une efficacité à court terme sur le névrome saphène infrapatellaire ; une revue narrative récente couvre l'ensemble du spectre, **du bloc à la cryoneurolyse**, sur cette cible.

**Nerf sural** après chirurgie du tendon d'Achille ou prélèvement de greffon nerveux : même logique, cible superficielle et purement sensitive — donc candidate idéale à la cryoneurolyse si le bloc test est positif et l'effet bref.` },
    { titre: 'Quand orienter vers la chirurgie (TMR / RPNI)', texte: `Critères pratiques d'orientation :
- bloc test **franchement positif et reproductible**, mais effet non prolongé par au moins deux gestes percutanés bien conduits ;
- névrome de moignon empêchant l'appareillage malgré une emboîture révisée ;
- névrome accessible et patient opérable, avec un projet fonctionnel (marche, prothèse myoélectrique).

Ce qu'il faut dire au patient et au chirurgien : la **résection simple d'un névrome recrée un névrome**. Les techniques de reconstruction de l'extrémité nerveuse (TMR, RPNI), utilisées en traitement comme en prophylaxie au moment de l'amputation, améliorent la douleur de névrome chez 75 à 100 % des patients traités dans la revue systématique de 2023, avec 13 à 31 % de complications essentiellement cicatricielles. Le niveau de preuve est celui d'un corpus majoritairement observationnel : c'est une orientation raisonnable, pas une garantie.` },
  ],

  pearls: [
    `**Faire marquer le point douloureux par le patient avant de désinfecter**, puis retrouver ce point à l'écran : c'est le geste le plus rentable de la consultation.`,
    `Toujours partir du nerf en amont et le suivre jusqu'à la masse : c'est ce qui prouve le diagnostic et évite de traiter un granulome sur fil.`,
    `Le Tinel déclenché par la sonde, **et sa sélectivité** (négatif 1–2 cm à côté), vaut mieux que la taille de la masse : de gros névromes sont asymptomatiques.`,
    `Bloc test à 1–3 mL, jamais davantage. Un bloc test « généreux » ne prouve rien.`,
    `La cible est toujours le **nerf en amont**, jamais l'intérieur du névrome.`,
    `Chez l'amputé, explorer tous les troncs sectionnés : le névrome non traité du voisin explique la plupart des échecs apparents.`,
    `Traiter le névrome sans revoir l'emboîture ni prescrire la désensibilisation, c'est programmer la récidive.`,
    `Un névrome vascularisé au Doppler n'est probablement pas un névrome : explorer avant de traiter.`,
  ],
  pieges: [
    `Prendre un granulome sur fil, un sérome, une endométriose de cicatrice ou une récidive tumorale pour un névrome : la continuité avec un nerf est le critère qui tranche.`,
    `Traiter une masse indolore à la pression : elle n'explique pas la douleur, même si c'est bien un névrome.`,
    `Injecter dans le névrome : douloureux, sans efficacité et potentiellement traumatique.`,
    `Utiliser 10 mL pour le bloc test et conclure sur un résultat positif qui pourrait venir de trois nerfs voisins.`,
    `Alcooliser un nerf mixte ou un nerf dont le territoire cutané est fonctionnel : névrite intense, déafférentation, récidive plus douloureuse.`,
    `Oublier de repérer un treillis prothétique inguinal avant de ponctionner.`,
    `Confondre douleur du membre résiduel (accessible au geste local) et douleur fantôme (qui ne l'est pas) : les deux coexistent souvent, elles ne relèvent pas du même traitement.`,
    `Répéter les infiltrations de corticoïde sur une cicatrice : atrophie sous-cutanée et dépigmentation en zone déjà fragile.`,
  ],
  complications: [
    `**Aggravation transitoire de la douleur** dans les 48–72 h : fréquente sur ces cibles hyperalgiques, à annoncer systématiquement.`,
    `**Injection intraneurale** : douleur fulgurante, résistance à l'injection, gonflement du nerf → arrêt immédiat, retrait de 1–2 mm, surveillance.`,
    `**Névrite après neurolyse chimique** : la complication redoutée de l'alcool et du phénol, parfois plus invalidante que la douleur initiale. C'est la raison de reléguer ces produits en dernier recours.`,
    `**Extension de l'anesthésie** à un nerf voisin en cas de volume excessif : bloc moteur inattendu (fémoral après un bloc ilio-inguinal généreux), chute — prévenir et surveiller.`,
    `**Atrophie et dépigmentation sous-cutanées** après corticoïde en zone superficielle et cicatricielle.`,
    `**Gelure, dépigmentation et alopécie** locales si cryoneurolyse sans protection cutanée (voir le chapitre correspondant).`,
    `**Hypoesthésie durable** du territoire après un geste neurolytique : attendue, mais à annoncer, surtout si le territoire est visible ou fonctionnel (main, face antérieure du genou).`,
    `**Pneumothorax** pour les cibles intercostales et pariétales thoraciques ; **ponction viscérale** en paroi abdominale mince — visualiser le péritoine.`,
    `**Hématome et infection** : rares, site superficiel, asepsie standard.`,
  ],
  securite: [
    `**Diagnostic avant traitement** : masse vascularisée, contexte oncologique, croissance récente, absence de continuité avec un nerf → imagerie complémentaire ou avis avant tout geste destructeur.`,
    `**Risque hémorragique ASRA-ESRA 2018** : faible pour les cibles superficielles compressibles (cicatrices, nerfs cutanés, moignons superficiels) ; intermédiaire pour la paroi abdominale profonde et les cibles proximales.`,
    `**Doppler systématique** : trajet et absence de vascularisation intralésionnelle.`,
    `**Plèvre à l'écran** pour toute cible thoracique ; **péritoine repéré** en paroi abdominale.`,
    `**Petit volume au bloc test** : c'est aussi une mesure de sécurité (pas de bloc moteur inattendu, pas de chute).`,
    `**Corticoïde non particulaire** sur ces sites superficiels et vascularisés.`,
    `**Consentement écrit spécifique** avant toute neurolyse chimique, PRF ou cryoneurolyse, mentionnant l'hypoesthésie durable, la névrite et l'échec possible.`,
    `Traçabilité : localisation et dimensions du névrome, nerf d'origine, Tinel avant / après, volume et produit exacts, EN à 30 min et 2 h. C'est le dossier qui décide de l'orientation chirurgicale ultérieure.`,
  ],

  suivi: `- **J0** : EN avant / 30 min / 2 h, **Tinel retesté et noté**, cartographie de l'hypoesthésie si geste neurolytique. Consignes écrites, prescription de désensibilisation cicatricielle, avertissement sur l'aggravation transitoire de 48–72 h.
- **J15–J30** : EN, retentissement fonctionnel (tolérance de l'emboîture et périmètre de marche chez l'amputé, port de charge, sommeil, habillage), questionnaire neuropathique (DN4). Décision : répéter l'hydrodissection, passer à la PRF ou à la cryoneurolyse, ou orienter.
- **3 mois** : effet consolidé ; contrôle échographique du névrome (taille, mobilité du nerf) si le tableau a changé.
- **6 mois** : durée d'effet réelle. La cryoneurolyse et la RF continue rapportent des effets tenant plusieurs mois à plus d'un an sur les névromes de moignon ; l'hydrodissection est plus volontiers répétée.
- **Répétition** : hydrodissection sans limite ; cryoneurolyse répétable après régénération ; PRF répétable ; corticoïde à espacer ; neurolyse chimique en 1 à 3 séances espacées d'environ 2 semaines, pas au-delà.
- **Critère d'orientation chirurgicale** : bloc test franchement positif mais deux gestes percutanés bien conduits sans effet durable, chez un patient opérable avec un projet fonctionnel → avis de chirurgie des nerfs périphériques pour discuter TMR ou RPNI. Ne pas proposer une résection simple.
- **Toujours en parallèle** : traitement de fond de la douleur neuropathique, désensibilisation, révision de l'appareillage. Le geste percutané est un temps d'un parcours, pas un traitement isolé.`,

  evidence: `- **Diagnostic échographique** : bien établi et convergent entre sources. Le névrome apparaît comme une masse hypoéchogène circonscrite, homogène, **avasculaire en Doppler couleur**, en continuité avec le nerf d'origine ; la moitié environ des cas montre un effilement fusiforme d'une extrémité (« tail sign »), et la percussion reproduit les symptômes (Tinel). Ces descriptions figurent dans la littérature de référence de l'échographie des nerfs périphériques (AJR, 2004, et sources ultérieures). Preuve : **descriptive mais solide**.
- **Cryoablation des névromes de moignon** : la meilleure donnée percutanée disponible — série de 7 patients (CardioVascular and Interventional Radiology, 2022), 100 % de succès technique, EN 8,3 → 2,1 à une semaine et 3 au dernier contrôle, recul moyen 27 mois, aucune complication majeure. Effectif faible, pas de groupe contrôle.
- **Neurolyse alcoolique** : série prospective de 13 à 15 patients, environ 54 % de soulagement après 1 à 3 injections. Preuve **faible**, avec un profil de risque non négligeable (névrite).
- **Radiofréquence** : série rétrospective de RF continue échoguidée sur névrome de moignon — 6 patients sur 9 avec au moins 50 % de réduction de la douleur et meilleure tolérance de la prothèse, sans effet indésirable. Pour la PRF, données anciennes et éparses : série de PRF sur points-gâchettes et névromes cicatriciels (Pain Medicine, 2009) avec 8 patients sur 9 améliorés de 75–100 % à 4 semaines et 6 sur 9 conservant le bénéfice de 6 mois à plus d'un an ; cas cliniques de PRF sur névrome de moignon. Preuve **faible**, cohérente.
- **Chirurgie (TMR / RPNI)** : revue systématique de 2023 (Mauch, PM&R) — 17 études, 14 sur le TMR (366 patients) et 3 sur le RPNI (75 patients), **un seul essai randomisé** ; amélioration de la douleur de névrome chez 75–100 % des patients traités, de la douleur fantôme chez 45–80 %, complications 13–31 %. Preuve **modérée en volume, faible en méthodologie**.
- **Blocs de la région inguinale** : la précision anatomique du bloc ilio-inguinal / ilio-hypogastrique échoguidé est validée par dissection, et les séries dans la douleur post-herniorraphie rapportent une réponse antalgique chez environ 55 à 70 % des patients. Preuve **modérée pour le bloc**, faible pour les gestes durables.
- **Trous de la littérature à assumer, et ils sont grands** : (1) **aucun essai randomisé contrôlé** d'un geste percutané sur névrome cicatriciel ou de moignon — tout repose sur des séries ; (2) aucune comparaison directe hydrodissection / PRF / cryoneurolyse / alcool ; (3) pas de critères validés pour prédire quel névrome répondra ; (4) la frontière entre névrome symptomatique et névrome asymptomatique reste clinique (Tinel et bloc test), sans critère d'imagerie discriminant. La hiérarchie thérapeutique proposée ici est **un raisonnement de sécurité — du moins destructeur au plus destructeur — et non une hiérarchie démontrée**.`,

  references: [
    { verif: true, titre: 'Sonography of peripheral nerve pathology', revue: 'American Journal of Roentgenology', annee: '2004', doi: '10.2214/ajr.182.1.1820123', type: 'revue iconographique', note: 'Description de référence de l\'aspect échographique des névromes traumatiques et de leur continuité avec le nerf.' },
    { verif: true, titre: 'Icing the pain — ultrasound-guided cryoablation of symptomatic post-amputation stump neuroma', revue: 'CardioVascular and Interventional Radiology', annee: '2022', pmid: '34820693', type: 'série de cas', note: '7 patients, EN 8,3 → 2,1 à une semaine, recul moyen 27 mois, 100 % de succès technique. Meilleure donnée percutanée disponible sur cette indication.' },
    { verif: true, titre: 'Ultrasound-guided alcohol neurolysis and radiofrequency ablation of painful stump neuroma: effective treatments for post-amputation pain', annee: '2017', pmid: '28223839', type: 'série prospective', note: 'Revue non relevée lors de la recherche. Environ 54 % de soulagement après 1 à 3 alcoolisations.' },
    { verif: true, titre: 'Sonographically guided alcohol injection in painful stump neuroma', annee: '2012', pmid: '22837978', type: 'série de cas', note: 'Revue non relevée lors de la recherche.' },
    { verif: true, titre: 'Ultrasound-guided continuous radiofrequency ablation of painful residual limb neuroma in individuals with limb amputation — a retrospective case series', annee: '2023', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10443475/', type: 'série rétrospective', note: 'Revue non relevée lors de la recherche. 6 patients sur 9 avec au moins 50 % de réduction de la douleur.' },
    { verif: true, titre: 'A case series of pulsed radiofrequency treatment of myofascial trigger points and scar neuromas', revue: 'Pain Medicine', annee: '2009', url: 'https://academic.oup.com/painmedicine/article-abstract/10/6/1140/1843892', type: 'série de cas', note: '8 patients sur 9 améliorés de 75–100 % à 4 semaines ; 6 sur 9 avec un bénéfice de 6 mois à plus d\'un an.' },
    { verif: true, titre: 'Pulsed radiofrequency under ultrasound guidance for persistent stump-neuroma pain', annee: '2010', pmid: '20642489', type: 'cas clinique', note: 'Revue non relevée lors de la recherche.' },
    { verif: true, auteurs: 'Mauch JT, et al.', titre: 'Targeted muscle reinnervation and regenerative peripheral nerve interfaces for pain prophylaxis and treatment: a systematic review', revue: 'PM&R', annee: '2023', doi: '10.1002/pmrj.12972', type: 'revue systématique', note: '17 études, un seul ECR ; douleur de névrome améliorée chez 75–100 % des patients traités, complications 13–31 %.' },
    { verif: true, titre: 'Midterm outcomes of ultrasound-guided local treatment for infrapatellar saphenous neuroma following total knee arthroplasty', revue: 'Cureus', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6996533/', type: 'série de cas', note: 'Année non relevée lors de la recherche. Hydrodissection et corticoïde : efficacité à court terme.' },
    { verif: true, titre: 'From block to cryoneurolysis: ultrasound-guided interventions for the infrapatellar branch of the saphenous nerve in knee surgery: a narrative review', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13367342/', type: 'revue narrative', note: 'Revue et année non relevées lors de la recherche. Souligne l\'hétérogénéité des protocoles de congélation et l\'absence d\'ECR multicentrique.' },
    { verif: true, titre: 'Perineuromal hydrodissection for acute postamputation pain? An observational study in a time of war', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13422112/', type: 'étude observationnelle', note: 'Revue et année non relevées lors de la recherche. Signal en faveur d\'une hydrodissection précoce sur la douleur du membre résiduel.' },
    { verif: true, titre: 'Review of ilioinguinal nerve blocks for ilioinguinal neuralgia post hernia surgery', revue: 'Current Pain and Headache Reports', annee: '2020', url: 'https://link.springer.com/article/10.1007/s11916-020-00913-4', type: 'revue', note: 'Réponse antalgique de l\'ordre de 55 à 70 % selon les séries.' },
    { verif: true, titre: 'Ultrasound-guided percutaneous cryoneurolysis for post-thoracotomy pain syndrome: a case report', revue: 'Cureus', annee: '2023', pmid: '36699749', type: 'cas clinique', note: 'Amélioration de 75 % pendant 6 semaines puis 50 % pendant 8 semaines.' },
  ],
  videos: [
    { titre: 'Ultrasound-guided neuroma injection', source: 'ASRA — blog', url: 'https://asra.com/news-publications/asra-updates/blog-landing/legacy-b-blog-posts/2019/08/06/ultrasound-guided-neuroma-injection', note: 'Technique de bloc et d\'infiltration péri-névromateuse' },
    { titre: 'Traumatic neuroma — imagerie', source: 'Radsource (MRI Web Clinic)', url: 'https://radsource.us/traumatic-neuroma/', note: 'Sémiologie et diagnostic différentiel' },
    { titre: 'Sonography of peripheral nerve pathology', source: 'AJR (texte intégral, figures)', url: 'https://ajronline.org/doi/full/10.2214/ajr.182.1.1820123', note: 'Iconographie des névromes et des lésions nerveuses' },
  ],

  scenes: [
    {
      id: 'nevrome-long', section: 'sonoanatomie', titre: 'Névrome terminal de moignon — coupe longitudinale',
      legende: 'Le nerf, suivi depuis l\'amont, s\'arrête dans une masse hypoéchogène en bulbe, homogène, à contours nets, sans flux en Doppler couleur. La fibrose cicatricielle l\'entoure et supprime son excursion. Le diagnostic tient à deux éléments : la continuité avec un nerf identifiable, et le Tinel reproduit par la pression de la sonde exactement sur la masse — négatif 1 à 2 cm à côté.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal (nerf sain)', right: 'Distal (extrémité du moignon)' }).probeInfo({ plan: 'Longitudinal, le long du nerf', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 9, fatBelow: 24 });
        S.fat({ path: 'M0 78 L640 78 L640 136 L0 136 Z', label: 'Graisse sous-cutanée', at: [88, 108] });
        S.fascia({ points: [[0, 138], [640, 138]], width: 1.6 });
        S.muscle({ path: 'M0 138 L640 138 L640 366 L0 366 Z', label: 'Muscle du moignon', at: [72, 336], opacity: 0.3 });
        S.region({ path: 'M300 160 L620 160 L620 344 L300 344 Z', fill: '#8d9aa6', opacity: 0.22, label: 'Fibrose cicatricielle', at: [546, 182] });
        S.nerve({ path: 'M0 214 L338 210 L338 240 L0 244 Z', label: 'Nerf d\'amont (aspect fasciculaire)', lx: 130, ly: 288, anchor: 'start', lead: [130, 240] });
        S.nerve({ x: 404, y: 226, rx: 68, ry: 44, label: 'Névrome en bulbe\nhypoéchogène, avasculaire', lx: 404, ly: 314, small: true });
        S.label({ x: 512, y: 178, text: 'Le nerf entre et s\'arrête', anchor: 'start', small: true, cls: 'lbl-nerve', lead: [468, 208] });
        S.target({ x: 404, y: 226, r: 78 });
        S.label({ x: 404, y: 128, text: 'Tinel reproduit par la pression de la sonde ICI', anchor: 'middle', small: true, cls: 'lbl-target' });
      },
    },
    {
      id: 'nevrome-bloc', section: 'technique', titre: 'Bloc test et hydrodissection — aborder le nerf en amont, jamais la masse',
      legende: 'Aiguille 25–27 G in-plane, arrivant par le versant proximal, le long du nerf. Le bloc test se fait avec 1 à 3 mL seulement : c\'est le petit volume qui donne sa valeur localisatrice au test. Pour l\'hydrodissection, on décolle le nerf de la fibrose sur 360° et sur toute la longueur du segment adhérent, en repositionnant l\'aiguille de part et d\'autre. On n\'injecte jamais dans le névrome.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Longitudinal, aiguille dans le plan', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 9, fatBelow: 22 });
        S.fat({ path: 'M0 76 L640 76 L640 130 L0 130 Z', label: 'Graisse', at: [52, 104] });
        S.fascia({ points: [[0, 132], [640, 132]], width: 1.6 });
        S.muscle({ path: 'M0 132 L640 132 L640 366 L0 366 Z', label: 'Muscle', at: [66, 340], opacity: 0.3 });
        S.region({ path: 'M300 156 L622 156 L622 348 L300 348 Z', fill: '#8d9aa6', opacity: 0.22, label: 'Fibrose', at: [578, 176] });
        S.nerve({ path: 'M0 214 L336 210 L336 240 L0 244 Z' });
        S.nerve({ x: 404, y: 226, rx: 66, ry: 42, label: 'Névrome — ne jamais injecter dedans', lx: 470, ly: 316, anchor: 'start', lead: [432, 264] });
        S.label({ x: 150, y: 196, text: 'Nerf d\'amont = la cible', anchor: 'middle', small: true, cls: 'lbl-nerve' });
        S.target({ x: 292, y: 226, r: 26 });
        S.needle({ from: [8, 122], to: [268, 214], label: '25–27 G + prolongateur' });
        S.spread({ x: 286, y: 226, rx: 62, ry: 30, label: '1–3 mL (test) · 3–10 mL (halo)' });
      },
    },
    {
      id: 'nevrome-inguinal', section: 'technique', titre: 'Cicatrice inguinale ou de Pfannenstiel — nerfs ilio-inguinal et ilio-hypogastrique',
      legende: 'Coupe transversale au-dessus et en dedans de l\'épine iliaque antéro-supérieure. Les deux nerfs cheminent dans le plan entre l\'oblique interne et le transverse de l\'abdomen, souvent accompagnés d\'une branche de l\'artère circonflexe iliaque profonde. Bloc test sélectif de 1 à 2 mL par nerf pour identifier lequel est en cause, puis hydrodissection du plan cicatriciel. Repérer le treillis prothétique avant de ponctionner, et garder le péritoine à l\'écran.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral (EIAS)' }).probeInfo({ plan: 'Transverse, oblique vers l\'EIAS', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.fat({ path: 'M0 78 L640 78 L640 140 L0 140 Z', label: 'Graisse sous-cutanée', at: [92, 110] });
        S.muscle({ path: 'M0 142 L640 130 L640 178 L0 192 Z', label: 'Oblique externe', at: [110, 166], opacity: 0.42 });
        S.fascia({ points: [[0, 192], [640, 178]], width: 1.5 });
        S.muscle({ path: 'M0 192 L640 178 L640 236 L0 252 Z', label: 'Oblique interne', at: [110, 220], opacity: 0.42 });
        S.fascia({ points: [[0, 252], [640, 236]], width: 1.8 });
        S.muscle({ path: 'M0 252 L640 236 L640 296 L0 314 Z', label: 'Transverse de l\'abdomen', at: [130, 278], opacity: 0.42 });
        S.fascia({ points: [[0, 314], [640, 296]], width: 2, opacity: 0.85 });
        S.label({ x: 128, y: 336, text: 'Fascia transversalis / péritoine', anchor: 'start', small: true, cls: 'lbl-fascia' });
        S.organ({ path: 'M0 330 L640 312 L640 400 L0 400 Z', label: 'Contenu abdominal', at: [478, 366], opacity: 0.5 });
        S.bone({ path: 'M596 250 Q622 262 636 288', label: 'EIAS', at: [592, 226], ldy: 0 });
        S.nerve({ x: 376, y: 246, r: 9, label: 'N. ilio-inguinal', lx: 306, ly: 186, anchor: 'end', lead: [368, 240] });
        S.nerve({ x: 434, y: 243, r: 8, label: 'N. ilio-hypogastrique', lx: 520, ly: 200, anchor: 'start', lead: [442, 238] });
        S.artery({ x: 406, y: 248, r: 6, label: 'A. circonflexe iliaque profonde', lx: 406, ly: 350, small: true, lead: [406, 256] });
        S.target({ x: 404, y: 246, r: 44 });
        S.needle({ from: [10, 128], to: [340, 244], label: '25 G, in-plane, médio-latéral' });
        S.spread({ x: 400, y: 246, rx: 62, ry: 12, label: '1–2 mL par nerf (test)' });
      },
    },
  ],

  checklist: [
    'Point douloureux marqué par le patient au feutre avant désinfection, et retrouvé à l\'écran',
    'Continuité de la masse avec un nerf identifiable démontrée en balayage depuis l\'amont',
    'Doppler : absence de vascularisation intralésionnelle (sinon, explorer avant de traiter)',
    'Diagnostic différentiel écarté : granulome sur fil, sérome, endométriose de cicatrice, récidive tumorale, schwannome',
    'Tous les nerfs candidats explorés (moignon : tous les troncs sectionnés ; inguinal : les trois nerfs)',
    'Treillis prothétique repéré si cure de hernie ; plèvre ou péritoine à l\'écran selon le site',
    'Bloc test à 1–3 mL maximum, EN et Tinel notés avant / 30 min / 2 h',
    'Consentement spécifique si PRF, cryoneurolyse ou neurolyse chimique envisagée',
    'Aggravation transitoire de 48–72 h annoncée et couverte par une ordonnance',
    'Désensibilisation cicatricielle prescrite, et révision de l\'emboîture organisée avec l\'orthoprothésiste chez l\'amputé',
  ],
});
