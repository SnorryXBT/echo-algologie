/* Fiche : muscle piriforme — infiltration échoguidée, bloc sciatique sous-piriforme, toxine botulique.
   Rédigée en mode dégradé (budget de recherche web épuisé) : références marquées verif:false à confirmer. */
ECHO.register({
  id: 'piriforme',
  titre: 'Muscle piriforme — infiltration échoguidée et bloc sciatique sous-piriforme',
  titreCourt: 'Piriforme',
  en: 'Ultrasound-guided piriformis muscle injection; deep gluteal syndrome; peri-sciatic (subgluteal) block, botulinum toxin injection, pulsed radiofrequency',
  region: 'rachis-bassin',
  types: ['infiltration', 'bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Modérée pour la précision de l\'échoguidage (études cadavériques et comparatives) ; faible pour l\'efficacité antalgique (ECR de petite taille, hétérogènes)',
  maj: '2026-09',
  motsCles: ['piriforme', 'pyramidal', 'syndrome du piriforme', 'syndrome du muscle profond fessier', 'deep gluteal syndrome', 'fessalgie', 'pseudo-sciatique', 'sciatique tronculaire', 'nerf sciatique', 'toxine botulique', 'FAIR test', 'incisure ischiatique', 'grand trochanter'],
  resume: 'Le syndrome du piriforme est un diagnostic d\'exclusion devenu, sous le nom de syndrome du muscle profond fessier, une famille : le piriforme n\'est qu\'une des structures qui peuvent irriter le nerf sciatique à sa sortie du bassin, à côté des jumeaux et de l\'obturateur interne, de l\'origine des ischio-jambiers, des brides fibro-vasculaires et du conflit ischio-fémoral. L\'échographie a fait basculer ce geste : là où l\'injection à l\'aveugle ou sous scopie atteignait rarement le muscle, l\'échoguidage le vise directement et surtout **voit** le nerf sciatique qu\'il faut éviter. Deux gestes distincts à ne pas confondre : l\'injection *intramusculaire* du piriforme (thérapeutique, AL + corticoïde ou toxine botulique) et le bloc *péri-sciatique sous-piriforme* (diagnostique, petit volume). Le premier est sûr, le second bloque le nerf : il faut l\'annoncer et organiser la sortie du patient. Le rendement du geste tient moins à sa technique qu\'à la rigueur du tri clinique en amont.',

  flash: {
    position: 'ventral', positionNote: 'décubitus ventral strict, pieds hors du bord de la table pour permettre la rotation passive de hanche (manœuvre d\'identification dynamique)',
    sonde: 'convexe', sondeNote: 'convexe 2–5 MHz, profondeur 8–12 cm ; linéaire basse fréquence 5–8 MHz possible chez le sujet mince (profondeur du piriforme : 4–8 cm)',
    approche: 'in-plane', approcheNote: 'sonde sur la ligne EIPS → grand trochanter ; ponction dans le plan, nerf sciatique gardé à l\'écran en permanence',
    aiguille: '22 G 90–120 mm (aiguille à rachianesthésie ou aiguille de bloc écho-visible) ; 25 G 90 mm suffit pour la toxine',
    cible: 'Corps du piriforme pour l\'injection intramusculaire (élargissement du muscle par l\'injectat) ; plan graisseux entre le piriforme et le nerf sciatique pour le bloc test (croissant anéchogène autour du nerf, sans augmentation de son diamètre)',
    injectat: 'Intramusculaire : 5–10 mL AL ± corticoïde · Péri-sciatique diagnostique : 2–3 mL AL seul · Toxine botulique : voir tableau',
    duree: '15 min · 20–25 min si bloc test associé',
  },

  indications: [
    'Fessalgie chronique unilatérale majorée par la station assise prolongée, avec point douloureux profond en regard de la grande incisure ischiatique, après échec du traitement conservateur (rééducation ciblée, étirements, correction des facteurs mécaniques).',
    '« Sciatique » sans lombalgie, sans syndrome rachidien et sans corrélat radiculaire à l\'IRM lombaire : le tronc sciatique est irrité en aval du foramen.',
    'Tests cliniques évocateurs concordants (FAIR, Freiberg, Pace, Beatty, test d\'étirement en position assise et test actif du piriforme) — aucun n\'est spécifique isolément, c\'est leur faisceau qui oriente.',
    'Confirmation diagnostique : bloc péri-sciatique sous-piriforme à petit volume, ou test thérapeutique par injection intramusculaire.',
    'Spasticité ou hypertonie du piriforme documentée, douleur myofasciale du muscle : indication de la toxine botulique après échec de l\'AL + corticoïde.',
    'Douleur post-traumatique fessière, séquelle d\'injection intramusculaire fessière, hypertrophie du piriforme chez le sportif (course, cyclisme).',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée ou profonde au point de ponction, allergie vraie aux amino-amides ; pour la toxine : myasthénie et syndromes myasthéniques, grossesse et allaitement, infection au site.',
    'Relatives : troubles de l\'hémostase — geste **profond et non compressible**, au contact de l\'artère glutéale inférieure : classer en risque **intermédiaire** dans le cadre ASRA-ESRA 2018 et gérer les anticoagulants en conséquence (à l\'inverse des blocs superficiels).',
    'Déficit neurologique du membre inférieur préexistant : documenter précisément avant le geste, sous peine de ne plus pouvoir interpréter l\'après.',
    'Patient qui doit conduire ou repartir seul le jour même : le **bloc sciatique moteur transitoire** est une éventualité réelle, pas une complication rare — organiser le retour avant, pas après.',
    'Corticoïde : diabète déséquilibré ; injections répétées dans le même muscle (risque de myopathie et d\'atrophie locale).',
  ],
  alternatives: 'En amont, et c\'est le vrai enjeu : éliminer les causes rachidiennes et sacro-iliaques, et rééduquer (étirement du piriforme, renforcement des abducteurs, correction de la station assise). Le geste ne remplace pas la kinésithérapie, il ouvre la fenêtre pour la faire. Au sein du syndrome du muscle profond fessier, les cibles concurrentes à considérer avant de s\'acharner sur le piriforme sont l\'obturateur interne / les jumeaux, l\'origine des ischio-jambiers (fiche dédiée), la bourse ischio-glutéale et le conflit ischio-fémoral (espace quadratus femoris). En aval : radiofréquence pulsée du nerf sciatique, et en dernier recours la chirurgie (ténotomie du piriforme, décompression endoscopique du nerf sciatique), qui reste d\'indication rare et doit être précédée d\'un bloc test franchement positif.',

  anatomie: `Le **piriforme** naît de la face antérieure du sacrum (S2-S4), sort du bassin par la **grande incisure ischiatique** et se termine par un tendon sur le bord supérieur du **grand trochanter**. Il est rotateur externe hanche en extension et abducteur hanche fléchie — d\'où la manœuvre FAIR (flexion-adduction-rotation interne) qui le met en tension.

Le **nerf sciatique** quitte le bassin par la même incisure. La disposition la plus fréquente est un passage **sous** le piriforme (environ 80–85 % des sujets selon les descriptions classiques — *chiffre à confirmer*), les variantes de Beaton décrivant un nerf qui traverse le muscle, se divise de part et d\'autre du corps musculaire, ou passe au-dessus. Ces variantes sont invoquées comme facteur favorisant, sans qu\'aucune ne soit prouvée comme cause.

Autour du nerf, à ne pas oublier : l\'**artère glutéale inférieure** et le nerf glutéal inférieur, qui sortent médialement au nerf sciatique sous le piriforme, le nerf cutané postérieur de la cuisse, le nerf du muscle carré fémoral, et le pédicule pudendal qui contourne l\'épine ischiatique plus en dedans et en bas.

De la superficie à la profondeur, sur le trajet de l\'aiguille : peau, tissu sous-cutané, **grand fessier** (épais, superficiel), fascia, **piriforme**, puis le plan profond où se trouvent le nerf sciatique, les jumeaux et l\'obturateur interne, appliqués sur l\'ilium et l\'ischion.

### Ce qui compte pour le geste
- **Deux muscles superposés, deux comportements** : le grand fessier est superficiel et ne bouge pas à la rotation passive de hanche ; le **piriforme glisse** sous lui. C\'est le critère d\'identification le plus fiable, plus que la seule reconnaissance des plans.
- **La ligne osseuse s\'interrompt à l\'incisure** : latéralement l\'ilium puis l\'ischion donnent une ligne hyperéchogène continue ; médialement, en regard de l\'incisure, elle disparaît. Le piriforme est le muscle qui **enjambe** cette interruption.
- **Le nerf sciatique est profond au piriforme et latéral à l\'incisure**, aplati, ovalaire, de 8–12 mm de grand axe, d\'aspect fasciculaire, posé sur les jumeaux et l\'ischion. Il doit rester visible pendant tout le geste.
- **Profondeur** : 4–6 cm chez le sujet mince, 7–9 cm chez le sujet obèse. C\'est la raison d\'être de la sonde convexe et d\'une aiguille de 90–120 mm.
- **Cible différente selon l\'objectif** : *dans* le muscle pour le traiter, *à côté* du nerf pour le bloquer. Confondre les deux, c\'est soit un bloc moteur non voulu, soit un traitement qui n\'atteint pas sa cible.`,

  installation: {
    patient: `**Décubitus ventral** strict, coussin fin sous l\'abdomen, bras le long du corps. **Pieds hors du bord de la table** ou genou fléchi accessible : il faut pouvoir imprimer une rotation interne/externe passive de hanche pendant l\'examen, c\'est la manœuvre qui identifie le piriforme. Un aide, ou la main libre de l\'opérateur si le patient est mince, suffit.

Repérer et marquer au feutre l\'**EIPS**, le **grand trochanter** et la ligne qui les joint : le piriforme est sur cette ligne, dans son tiers moyen. Marquer aussi le point de reproduction maximale de la douleur.`,
    operateur: `Opérateur du côté à traiter, écran de l\'autre côté dans l\'axe du regard. Écran orienté de sorte que le **médial soit à gauche**. Ponction dans le plan, en général de **latéral en médial** (accès le plus court au corps musculaire, trajet sur l\'os) ; l\'abord médio-latéral est également décrit. Dans les deux cas, deux règles : le **nerf sciatique reste affiché pendant tout le geste**, et la pointe n\'est jamais dirigée vers lui.`,
    sonde: `- **Convexe 2–5 MHz**, preset MSK profond, profondeur initiale 10–12 cm puis réduite à 8 cm une fois la cible centrée ; focale sur le plan piriforme / nerf. Linéaire 5–8 MHz acceptable chez le sujet mince.
- **Doppler couleur, PRF basse** : repérer l\'**artère glutéale inférieure** médialement au nerf sciatique avant toute ponction. C\'est le vaisseau qui compte ici.
- Aiguille écho-visible fortement recommandée : à 45° et 8 cm de profondeur, une aiguille standard est difficile à suivre ; à défaut, hydrolocalisation par 0,5 mL.
- Housse de sonde stérile (le geste est long et profond, le champ large).`,
  },

  reperage: [
    { titre: 'Trouver le grand trochanter', texte: 'Sonde **transversale sur le grand trochanter** : ligne osseuse convexe très brillante avec ombre franche, sous le grand fessier. C\'est le point de départ le plus fiable, celui qu\'on ne peut pas confondre.' },
    { titre: 'Basculer vers l\'EIPS', texte: 'Faire pivoter l\'extrémité médiale de la sonde vers l\'**EIPS** en gardant le trochanter au bord latéral de l\'image : la sonde est alors dans l\'axe du piriforme, et l\'on voit apparaître, sous le grand fessier, une **seconde couche musculaire** dont les fibres sont orientées différemment.' },
    { titre: 'Reconnaître l\'incisure ischiatique', texte: 'Suivre la ligne osseuse profonde de latéral en médial : continue sur l\'ischion puis l\'ilium, elle **s\'interrompt** en regard de la grande incisure ischiatique. Le muscle qui enjambe cette interruption et se dirige vers le trochanter est le **piriforme**.' },
    { titre: 'Confirmer par la rotation passive de hanche', texte: 'Genou fléchi à 90°, imprimer une **rotation interne puis externe passive** : le piriforme **glisse** sous le grand fessier qui, lui, reste immobile. C\'est le critère d\'identification décisif — le faire systématiquement avant de ponctionner, et le refaire si le doute revient.' },
    { titre: 'Identifier le nerf sciatique et le Doppler', texte: 'Sous le piriforme, latéralement à l\'incisure, chercher la structure **ovalaire aplatie, fasciculaire (« nid d\'abeilles »), de 8–12 mm**, posée sur le plan des jumeaux et de l\'ischion : c\'est le nerf sciatique. Activer le Doppler : l\'**artère glutéale inférieure** est médiale au nerf. Ne pas commencer avant d\'avoir les deux à l\'écran.' },
    { titre: 'Si on ne trouve pas le piriforme', texte: 'Trois causes, dans cet ordre : sonde trop crâniale (on est sur le moyen fessier, qui ne glisse pas à la rotation) ; sonde trop caudale (on est sur les jumeaux / l\'obturateur interne, muscles plus fins, tendus vers l\'ischion) ; profondeur insuffisante chez le sujet obèse. Repartir du grand trochanter et refaire la manœuvre dynamique — c\'est toujours elle qui tranche.' },
  ],

  sonoanatomie: [
    { structure: 'Grand fessier', aspect: 'Muscle épais, superficiel, strié, fibres obliques ; ne bouge pas à la rotation passive de hanche', repere: 'Première couche musculaire sous le tissu sous-cutané' },
    { structure: 'Piriforme', aspect: 'Deuxième couche musculaire, fibres orientées vers le trochanter ; **glisse** sous le grand fessier à la rotation passive', repere: 'Enjambe l\'interruption de la ligne osseuse (incisure ischiatique)' },
    { structure: 'Ilium / ischion', aspect: 'Ligne hyperéchogène continue avec cône d\'ombre, latéralement', repere: 'Plancher du champ ; le nerf repose dessus' },
    { structure: 'Grande incisure ischiatique', aspect: 'Interruption de la ligne osseuse, médialement', repere: 'Point de sortie du piriforme et du pédicule ; repère de la limite médiale sûre' },
    { structure: 'Nerf sciatique', aspect: 'Structure ovalaire aplatie, 8–12 mm, fasciculaire en nid d\'abeilles, hyperéchogène', repere: 'Profond au piriforme, latéral à l\'incisure, superficiel aux jumeaux' },
    { structure: 'Artère glutéale inférieure', aspect: 'Petit vaisseau pulsatile en Doppler couleur', repere: 'Médiale au nerf sciatique, sous le piriforme — à repérer avant toute ponction' },
    { structure: 'Jumeaux / obturateur interne', aspect: 'Fine couche musculaire profonde au nerf, tendue vers l\'ischion', repere: 'Plan profond ; cible alternative dans le syndrome du muscle profond fessier' },
    { structure: 'Grand trochanter', aspect: 'Relief osseux convexe, très brillant, ombre franche', repere: 'Point de départ du repérage, limite latérale de l\'image' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche) + documentation de l\'examen neurologique du membre **avant** le geste (force de la flexion dorsale du pied, sensibilité). Housse de sonde stérile, champ large. Aiguille 22 G 90–120 mm sur prolongateur, seringues étiquetées séparément si AL et corticoïde ne sont pas mélangés.' },
    { titre: 'Anesthésie cutanée', texte: '2–3 mL de lidocaïne 1 % au point d\'entrée et sur le trajet dans le grand fessier : le geste est profond, l\'aiguille traverse une masse musculaire épaisse, la ponction sans anesthésie est mal tolérée et fait bouger le patient.' },
    { titre: 'Ponction dans le plan', texte: 'Entrée à 1,5–2 cm du bord de la sonde, angle **45–60°** (imposé par la profondeur). Progression lente, aiguille suivie en continu ; réaligner la sonde plutôt que de forcer si l\'aiguille se perd. Traverser le grand fessier, franchir le fascia (ressaut), puis entrer dans le **corps du piriforme**. **Ne jamais avancer vers le nerf sciatique** ni au-delà de la limite médiale de l\'incisure.' },
    { titre: 'Vérification de la position — injection intramusculaire', texte: 'Aspiration. Injecter 0,5–1 mL : l\'injectat doit **écarter les fibres et élargir le corps musculaire** (image en fuseau à l\'intérieur du muscle). Si le produit se répand en nappe entre grand fessier et piriforme, la pointe est trop superficielle : avancer de 2–3 mm. Si une **nappe apparaît autour du nerf**, la pointe est trop profonde : retirer — l\'injection intramusculaire ne doit pas être péri-sciatique.' },
    { titre: 'Injection fractionnée', texte: 'Injecter **5–10 mL** par bolus de 2 mL, avec aspiration entre chaque, en répartissant sur deux points du corps musculaire si le muscle est volumineux. Douleur fulgurante, paresthésie descendante ou résistance anormale → **arrêt immédiat** et repositionnement.' },
    { titre: 'Critère de fin', texte: 'Muscle piriforme visiblement **élargi et hypoéchogène**, distribution intramusculaire homogène, nerf sciatique inchangé (pas de croissant liquidien autour de lui, pas d\'augmentation de son diamètre). Retrait de l\'aiguille, compression 2 min, pansement.' },
    { titre: 'Après le geste', texte: 'Tester **avant la sortie** : flexion dorsale et plantaire du pied, sensibilité de la face dorsale du pied, station debout puis marche accompagnée. Prévenir : en cas de bloc moteur partiel, il régresse en 2–8 h selon l\'AL utilisé ; **pas de conduite le jour même**, retour accompagné, consigne écrite de reconsulter si le déficit persiste au-delà de 24 h. EN avant / à 30 min tracée.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Injection intramusculaire thérapeutique | Ropivacaïne 0,2 % ou lidocaïne 1 % + corticoïde : bétaméthasone 5,7 mg (Diprostène® 1 mL), méthylprednisolone 40 mg (Dépo-Médrol®) ou dexaméthasone 4–8 mg | 5–10 mL | Le corticoïde particulaire est acceptable ici (site musculaire, pas d\'artère terminale) ; la dexaméthasone évite le risque de myopathie locale en cas d\'injections répétées |
| Bloc péri-sciatique **diagnostique** (sous-piriforme) | Lidocaïne 1–2 % ou ropivacaïne 0,2 %, **sans corticoïde** | 2–3 mL | Petit volume : au-delà, la diffusion perd toute spécificité. Bloc moteur attendu — organiser la sortie du patient |
| Toxine botulique (**hors AMM**) | OnabotulinumtoxinA (Botox®) : ordre de grandeur **100–200 U** · AbobotulinumtoxinA (Dysport®) : **200–300 U**, reconstituées et diluées selon la RCP | Volume de dilution 2–5 mL, réparti en 2–3 points intramusculaires | *Doses à confirmer sur les protocoles publiés et la RCP avant utilisation* : les schémas varient d\'une équipe à l\'autre et les unités **ne sont pas interchangeables** entre spécialités. Prescription hors AMM à tracer et à expliquer au patient |
| Hydrodissection péri-sciatique | G5 % 5–10 mL ± lidocaïne 1 % | 5–10 mL | Logique de libération des adhérences péri-nerveuses dans le syndrome du muscle profond fessier ; preuve limitée pour cette cible — *à confirmer* |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Avec 10 mL d\'AL dilué on reste très en deçà, mais ce geste s\'associe souvent à d\'autres blocs dans la même séance : additionner et tracer.

**Toxine botulique** : délai d\'action 1–2 semaines, pic à 3–4 semaines, durée 3–4 mois ; ne jamais réinjecter à moins de 12 semaines. Elle n\'a d\'intérêt que si la kinésithérapie est menée pendant la fenêtre de relâchement — c\'est le schéma de tous les protocoles publiés.`,

  variantes: [
    { titre: 'Bloc péri-sciatique sous-piriforme (bloc test)', texte: `Même installation et même repérage. La cible n\'est plus le muscle mais le **plan graisseux entre la face profonde du piriforme et le nerf sciatique**. Aiguille dans le plan, pointe posée dans ce plan sans contact avec le nerf, aspiration, puis **2–3 mL** d\'AL seul : un **croissant anéchogène** doit entourer le nerf sans que son diamètre augmente (une augmentation de calibre signe l\'injection intraneurale — arrêt immédiat).

Objectif purement diagnostique : si la fessalgie et l\'irradiation disparaissent pendant la durée de l\'AL, l\'irritation tronculaire est confirmée en aval du foramen ; cela ne dit **pas** que le piriforme en est la cause. Conséquence obligatoire : bloc moteur du membre inférieur, sortie organisée, pas de conduite. Ne pas l\'associer à un corticoïde périneural en routine.` },
    { titre: 'Toxine botulique intramusculaire', texte: `Indication : échec d\'au moins une injection AL + corticoïde bien conduite, chez un patient dont le bloc test a été positif. Injection **intramusculaire pure**, échoguidée, répartie en 2–3 points du corps musculaire, en s\'éloignant du nerf sciatique — la diffusion de la toxine vers le nerf n\'est pas neurotoxique mais la parésie de voisinage (jumeaux, obturateur interne, grand fessier profond) est possible et se traduit par une instabilité à la marche pendant quelques semaines.

Les essais contrôlés existent mais sont **de petite taille, anciens et hétérogènes** (produits, doses, unités, protocoles de rééducation différents) ; les synthèses restent prudentes. Position raisonnable : option de deuxième ligne, hors AMM, à réserver aux répondeurs partiels, avec objectif fonctionnel écrit et rééducation programmée dans la fenêtre.` },
    { titre: 'Radiofréquence pulsée du nerf sciatique', texte: `Décrite après bloc test positif et rechute rapide : aiguille RF 22 G placée dans le plan sous-piriforme, à proximité immédiate du nerf sans contact, stimulation sensitive 50 Hz (paresthésies du territoire à basse tension) et paramètres usuels de PRF (**42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2 cycles**). Contrairement à un nerf purement sensitif, la réponse motrice est ici attendue et sert au positionnement — **aucune radiofréquence thermique** ne doit être faite sur un tronc mixte. Données : séries et cas, *niveau de preuve faible, à confirmer*.` },
    { titre: 'Cibles voisines du syndrome du muscle profond fessier', texte: `Quand le piriforme est visiblement normal ou que le geste échoue, penser à changer de cible dans la même séance ou à la suivante : **obturateur interne / jumeaux** (plus caudal, tendu vers l\'ischion), **espace ischio-fémoral** (carré fémoral, entre ischion et petit trochanter), **origine des ischio-jambiers** et **bourse ischio-glutéale** (fiche dédiée). La sono-anatomie est contiguë : un seul balayage bien conduit permet de trancher.` },
    { titre: 'Repérage assisté par la stimulation', texte: `Historiquement, les injections de piriforme se faisaient sous EMG, scopie ou TDM. La comparaison échoguidage vs neurostimulation + scopie a été étudiée dans un essai randomisé ; l\'échoguidage a l\'avantage décisif de **voir** le nerf et les vaisseaux, et la comparaison cadavérique de la précision est nettement en sa faveur (95 % vs 30 % pour la scopie avec contrôle par contraste, Finnoff 2008). L\'association d\'un neurostimulateur reste possible chez l\'obèse où le nerf est mal visible, mais elle ne compense pas une mauvaise image.` },
  ],

  pearls: [
    'La rotation passive de hanche est le seul critère d\'identification vraiment fiable : le piriforme glisse, le grand fessier non. La faire avant chaque geste, pas seulement en cas de doute.',
    'Partir du grand trochanter, jamais du sacrum : c\'est le repère osseux le moins ambigu de la région.',
    'Décider **avant** de ponctionner si l\'on veut le muscle ou le nerf : la cible, le volume et les consignes de sortie ne sont pas les mêmes.',
    'Anesthésier généreusement le trajet dans le grand fessier : un patient qui bouge à 8 cm de profondeur ruine le geste.',
    'Doppler systématique sur l\'artère glutéale inférieure avant la ponction, et non après avoir choisi son trajet.',
    'Toxine botulique sans rééducation programmée dans les 2 à 6 semaines : dépense inutile. La fenêtre est le traitement, la toxine ne fait que l\'ouvrir.',
  ],
  pieges: [
    'Injecter entre le grand fessier et le piriforme en croyant être dans le muscle : la nappe s\'étale au lieu d\'élargir le corps musculaire — signe à reconnaître immédiatement.',
    'Confondre le piriforme avec le moyen fessier (trop crânial) ou avec les jumeaux / l\'obturateur interne (trop caudal) : dans les deux cas la manœuvre dynamique corrige.',
    'Laisser le nerf sciatique sortir du champ pendant la progression de l\'aiguille.',
    'Faire un bloc péri-sciatique avec 8–10 mL et conclure au syndrome du piriforme : à ce volume on bloque tout ce qui sort de l\'incisure, le test ne prouve plus rien.',
    'Ne pas prévenir du bloc moteur et laisser le patient repartir en conduisant : c\'est la complication médico-légale de ce geste, pas la complication médicale.',
    'Retenir le diagnostic sans avoir éliminé une cause rachidienne, sacro-iliaque ou coxo-fémorale : le syndrome du piriforme reste un diagnostic d\'exclusion.',
  ],
  complications: [
    '**Bloc sciatique moteur et sensitif transitoire** : attendu après un bloc test, possible après une injection intramusculaire par diffusion. Régression en 2–8 h. Conduite à tenir : surveillance jusqu\'à la reprise de la marche, retour accompagné, pas de conduite, consigne écrite de reconsulter si déficit > 24 h.',
    '**Injection intraneurale** : douleur fulgurante à l\'injection, résistance anormale, augmentation du diamètre du nerf à l\'écran → arrêt immédiat, retrait, surveillance neurologique et traçabilité. Risque de dysesthésies prolongées.',
    'Ponction de l\'artère glutéale inférieure : hématome profond **non compressible** — d\'où le classement en risque hémorragique intermédiaire et la vérification Doppler préalable.',
    'Injection intravasculaire d\'AL : toxicité systémique (acouphènes, goût métallique, agitation, convulsions) — aspiration et fractionnement, chariot d\'urgence et émulsion lipidique disponibles.',
    'Atrophie ou myopathie locale du piriforme après corticoïdes répétés ; hyperglycémie 24–72 h chez le diabétique.',
    'Toxine botulique : parésie de voisinage (instabilité à la marche, faiblesse en rotation externe) pendant quelques semaines ; syndrome pseudo-grippal ; diffusion à distance exceptionnelle mais à mentionner.',
    'Infection profonde : exceptionnelle, mais le site est profond et mal drainé — asepsie chirurgicale.',
  ],
  securite: [
    'Geste **profond, non compressible, au contact d\'un tronc nerveux mixte et d\'une artère** : le classer en risque hémorragique **intermédiaire** dans le cadre ASRA-ESRA 2018 et gérer les antithrombotiques en conséquence (à la différence des blocs superficiels de la région).',
    'Examen neurologique du membre **documenté avant** le geste : sans cela, tout déficit post-geste est ininterprétable.',
    'Nerf sciatique et artère glutéale inférieure affichés en permanence ; Doppler avant la ponction ; aspiration avant chaque bolus ; injection fractionnée par 2 mL.',
    'Aucune radiofréquence **thermique** sur le nerf sciatique (tronc mixte) : PRF uniquement.',
    'Toxine botulique : produit et unités vérifiés à voix haute avant reconstitution (les unités Botox® et Dysport® ne sont pas équivalentes), prescription hors AMM tracée dans le dossier avec l\'information donnée au patient.',
    'Sortie conditionnée à la reprise d\'une marche stable ; consignes écrites remises.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, reproduction du test provocateur (FAIR) après le geste, examen moteur et sensitif du membre avant la sortie, marche testée.
- **J15–J30** : EN moyenne et maximale, tolérance de la station assise (**le meilleur critère fonctionnel dans cette indication** : durée assise avant douleur, en minutes), reprise des activités, observance de la rééducation. Décision :
  - réponse franche et durable → poursuivre la rééducation, ne pas réinjecter par principe ;
  - réponse franche mais brève → discuter la toxine botulique ou la PRF ;
  - réponse nulle malgré un geste techniquement réussi (muscle visiblement infiltré) → **rouvrir le diagnostic**, changer de cible ou de piste, ne pas répéter le même geste.
- **Toxine** : évaluation à 4 semaines (pic d\'effet) et à 3 mois ; réinjection au plus tôt à 12 semaines et seulement si le premier cycle a produit un bénéfice fonctionnel mesurable.
- **Corticoïdes** : pas plus de 2 à 3 injections par an dans le même muscle.
- Dans tous les cas, la rééducation (étirement du piriforme, renforcement des abducteurs et du moyen fessier, ergonomie de la position assise) est le traitement de fond ; le geste n\'est qu\'une fenêtre.`,

  evidence: `- **Précision de l\'échoguidage (Finnoff 2008, J Ultrasound Med, étude cadavérique)** : 95 % d\'injections correctement placées dans le piriforme sous échographie contre 30 % sous scopie avec contrôle par contraste. C\'est la donnée la plus solide du dossier, et elle porte sur la **précision**, pas sur l\'efficacité clinique.
- **Description technique (Smith 2006, Arch Phys Med Rehabil)** : première description validée de la technique échoguidée, avec vérification de la position ; elle reste la référence méthodologique du geste.
- **Comparaison de techniques (essai randomisé, 2014)** : échoguidage versus neurostimulation avec guidage fluoroscopique — l\'échoguidage n\'est pas inférieur et évite l\'irradiation ; effectif modeste.
- **Toxine botulique** : les essais contrôlés existent depuis le début des années 2000 (toxine A en étude pilote, toxine B en étude de recherche de dose), mais ils sont **de petite taille, hétérogènes** en produits, unités, sites et protocoles de rééducation associés. Les synthèses ultérieures concluent à un signal favorable sans permettre de recommandation ferme ni de posologie consensuelle. Preuve **faible**, usage **hors AMM**.
- **Corticoïdes intramusculaires** : essais de petite taille, souvent comparés à d\'autres modalités (dont les ondes de choc extracorporelles) plutôt qu\'à un placebo. Le bénéfice à court terme est cohérent d\'une étude à l\'autre, la durabilité au-delà de 3 mois n\'est pas établie.
- **Cadre nosologique** : le déplacement conceptuel du « syndrome du piriforme » vers le **syndrome du muscle profond fessier** est aujourd\'hui admis dans la littérature spécialisée — il change la pratique, puisqu\'il impose d\'examiner et de balayer les structures voisines avant de conclure.
- **Trous de la littérature, à assumer** : aucun ECR de bonne taille comparant l\'infiltration échoguidée du piriforme à un placebo ; aucun critère diagnostique validé faisant consensus ; pas de standardisation du volume, du produit, ni du nombre d\'injections ; la valeur prédictive du bloc test sur le résultat chirurgical n\'est pas quantifiée. Le geste se justifie par sa sécurité sous échographie, sa valeur d\'orientation et l\'absence d\'alternative diagnostique, plus que par un niveau de preuve d\'efficacité.

*Mode dégradé : les références de cette fiche marquées « à vérifier » n\'ont pas pu être reconfirmées par une recherche bibliographique lors de sa rédaction (budget épuisé). Vérifier revue, année et pagination avant toute citation externe.*`,

  references: [
    { verif: true, auteurs: 'Smith J, Hurdle MF, Locketz AJ, Wisniewski SJ', titre: 'Ultrasound-guided piriformis injection: technique description and verification', revue: 'Archives of Physical Medicine and Rehabilitation', annee: '2006', pmid: '17141652', type: 'technique', note: 'Description princeps validée de la technique échoguidée.' },
    { verif: true, auteurs: 'Finnoff JT, Hurdle MF, Smith J', titre: 'Accuracy of ultrasound-guided versus fluoroscopically guided contrast-controlled piriformis injections: a cadaveric study', revue: 'Journal of Ultrasound in Medicine', annee: '2008;27(8):1157-63', type: 'étude cadavérique', note: '95 % de précision sous échographie contre 30 % sous scopie.' },
    { verif: false, auteurs: 'Fowler IM, et al.', titre: 'A randomized comparison of the efficacy of 2 techniques for piriformis muscle injection: ultrasound-guided versus nerve stimulator with fluoroscopic guidance', revue: '', annee: '2014', pmid: '24509422', type: 'ECR', note: 'Revue et pagination à confirmer.' },
    { verif: true, auteurs: '—', titre: 'Ultrasound-guided injection of the piriformis muscle', revue: 'American Journal of Physical Medicine & Rehabilitation', annee: '2011', type: 'technique', note: 'Auteurs à confirmer.' },
    { verif: false, auteurs: '—', titre: 'Efficacy of ultrasound-guided piriformis muscle corticosteroid injection versus extracorporeal shockwave therapy in patients with piriformis syndrome: a randomized controlled trial', revue: '', annee: '2025', type: 'ECR', note: 'Revue à confirmer.' },
    { verif: false, auteurs: 'Childers MK, et al.', titre: 'Botulinum toxin type A use in piriformis muscle syndrome: a pilot study', revue: '', annee: '2002', pmid: '12362115', type: 'étude pilote', note: 'Revue et année à confirmer.' },
    { verif: false, auteurs: 'Fishman LM, et al.', titre: 'Botulinum neurotoxin type B and physical therapy in the treatment of piriformis syndrome: a dose-finding study', revue: '', annee: '', type: 'étude de dose', note: 'Revue et année à confirmer.' },
    { verif: false, auteurs: '—', titre: 'Low-dose botulinum toxin type A for the treatment of refractory piriformis syndrome', revue: '', annee: '', pmid: '17461700', type: 'étude', note: 'Revue et année à confirmer.' },
    { verif: false, auteurs: 'Michel F, et al.', titre: 'Le syndrome du muscle piriforme : critères diagnostiques et traitement d\'une série monocentrique', revue: 'Annals of Physical and Rehabilitation Medicine', annee: '2013', type: 'série clinique', note: 'Série française de référence ; titre exact, revue et année à confirmer.' },
    { verif: false, auteurs: 'Martin HD, Reddy M, Gómez-Hoyos J', titre: 'Deep gluteal syndrome', revue: 'Journal of Hip Preservation Surgery', annee: '2015', type: 'revue', note: 'Cadre nosologique ; revue et année à confirmer.' },
    { verif: false, auteurs: '—', titre: 'Find the piriformis muscle easily: from anatomical landmark to sonographic target', revue: '', annee: '', pmid: '38264595', type: 'technique', note: 'Revue et année à confirmer.' },
    { verif: false, auteurs: '—', titre: 'Ultrasound-guided injections for the retrotrochanteric region: a cadaveric investigation', revue: '', annee: '', type: 'étude cadavérique', note: 'Revue et année à confirmer.' },
    { verif: true, auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'piri-repere', section: 'sonoanatomie', titre: 'Coupe EIPS → grand trochanter — repérage du piriforme et du nerf sciatique',
      legende: 'Sonde posée sur la ligne joignant l\'EIPS au grand trochanter. Sous le grand fessier apparaît le piriforme, qui enjambe l\'interruption de la ligne osseuse (grande incisure ischiatique). Le nerf sciatique est profond au piriforme, latéral à l\'incisure, posé sur les jumeaux et l\'ischion ; l\'artère glutéale inférieure est médiale au nerf. Critère décisif : à la rotation passive de hanche, le piriforme glisse, le grand fessier non.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial (EIPS / sacrum)', right: 'Latéral (grand trochanter)' }).probeInfo({ plan: 'Oblique EIPS → grand trochanter', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 84 L640 84 L640 196 L0 212 Z', label: 'Grand fessier', at: [104, 146], opacity: 0.5 });
        S.fascia({ points: [[0, 212], [320, 204], [640, 196]], width: 1.8, opacity: 0.85 });
        S.muscle({ path: 'M0 218 L640 202 L640 262 L0 288 Z', label: 'Piriforme', at: [130, 254], opacity: 0.62 });
        S.label({ x: 130, y: 274, text: '(glisse à la rotation passive)', cls: 'lbl-muscle', small: true });
        S.muscle({ path: 'M300 320 L640 300 L640 340 L316 356 Z', label: 'Jumeaux / obturateur interne', at: [500, 332], opacity: 0.45, small: true });
        S.bone({ path: 'M296 366 Q440 356 540 356 Q600 358 640 366', label: 'Ilium / ischion', at: [470, 396], ldy: 0, small: true });
        S.nerve({ x: 434, y: 300, rx: 30, ry: 12, label: 'Nerf sciatique (8–12 mm)', lx: 434, ly: 262, anchor: 'middle', lead: [434, 290], small: true });
        S.artery({ x: 306, y: 302, r: 7, label: 'A. glutéale inf.', lx: 214, ly: 318, anchor: 'end', lead: [300, 303], small: true });
        S.label({ x: 150, y: 372, text: 'Grande incisure ischiatique :\nla ligne osseuse s\'interrompt', cls: 'lbl-bone', small: true });
      },
    },
    {
      id: 'piri-im', section: 'technique', titre: 'Injection intramusculaire du piriforme — aiguille dans le plan, de latéral en médial',
      legende: 'Cible : le corps du piriforme, en restant crânial et à distance du nerf sciatique, qui doit rester affiché pendant tout le geste. Critère de fin : le muscle s\'élargit et devient hypoéchogène, l\'injectat reste intramusculaire. Une nappe entre grand fessier et piriforme = pointe trop superficielle ; un croissant autour du nerf = pointe trop profonde.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Oblique EIPS → grand trochanter', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 84 L640 84 L640 196 L0 212 Z', label: 'Grand fessier', at: [104, 142], opacity: 0.5 });
        S.fascia({ points: [[0, 212], [320, 204], [640, 196]], width: 1.8, opacity: 0.85 });
        S.muscle({ path: 'M0 218 L640 202 L640 262 L0 288 Z', label: 'Piriforme', at: [96, 258], opacity: 0.62 });
        S.muscle({ path: 'M300 320 L640 300 L640 340 L316 356 Z', opacity: 0.4 });
        S.bone({ path: 'M296 366 Q440 356 540 356 Q600 358 640 366' });
        S.nerve({ x: 434, y: 300, rx: 30, ry: 12, label: 'Nerf sciatique — à garder à l\'écran', lx: 434, ly: 336, anchor: 'middle', lead: [434, 311], small: true });
        S.artery({ x: 306, y: 302, r: 7 });
        S.target({ x: 300, y: 244, r: 20 });
        S.needle({ from: [638, 100], to: [318, 246], label: '22 G 90–120 mm, 45–60°' });
        S.spread({ x: 292, y: 246, rx: 84, ry: 20, label: '5–10 mL intramusculaires' });
      },
    },
    {
      id: 'piri-sciatique', section: 'technique', titre: 'Bloc test péri-sciatique sous-piriforme — petit volume',
      legende: 'Geste différent, cible différente : le plan graisseux entre la face profonde du piriforme et le nerf sciatique. 2–3 mL d\'AL seul suffisent ; le critère de fin est un croissant anéchogène autour du nerf **sans augmentation de son diamètre**. Un bloc moteur du membre inférieur est attendu : sortie organisée, pas de conduite.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Oblique EIPS → grand trochanter', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 84 L640 84 L640 196 L0 212 Z', label: 'Grand fessier', at: [104, 142], opacity: 0.5 });
        S.fascia({ points: [[0, 212], [320, 204], [640, 196]], width: 1.8, opacity: 0.85 });
        S.muscle({ path: 'M0 218 L640 202 L640 262 L0 288 Z', label: 'Piriforme', at: [96, 254], opacity: 0.62 });
        S.muscle({ path: 'M300 320 L640 300 L640 340 L316 356 Z', label: 'Jumeaux', at: [560, 330], opacity: 0.45, small: true });
        S.bone({ path: 'M296 366 Q440 356 540 356 Q600 358 640 366', label: 'Ischion', at: [408, 396], ldy: 0, small: true });
        S.artery({ x: 306, y: 302, r: 7, label: 'A. glutéale inf.', lx: 200, ly: 316, anchor: 'end', lead: [300, 303], small: true });
        S.nerve({ x: 434, y: 302, rx: 30, ry: 12, label: 'Nerf sciatique', lx: 528, ly: 262, anchor: 'start', lead: [458, 296], small: true });
        S.target({ x: 434, y: 284, r: 16 });
        S.needle({ from: [638, 116], to: [462, 284], label: '22 G, pointe dans le plan sous-piriforme' });
        S.spread({ x: 434, y: 292, rx: 48, ry: 20, label: '2–3 mL' });
      },
    },
  ],

  checklist: [
    'Examen neurologique du membre inférieur documenté **avant** le geste (force, sensibilité, marche)',
    'Objectif du geste tranché avant la ponction : intramusculaire (thérapeutique) ou péri-sciatique (diagnostique, petit volume)',
    'Nerf sciatique et artère glutéale inférieure identifiés et affichés en permanence ; Doppler fait avant la ponction',
    'Patient prévenu du bloc moteur transitoire possible : retour accompagné organisé, pas de conduite le jour même',
    'Marche stable vérifiée avant la sortie ; consignes écrites remises',
    'Toxine botulique : produit, unités et dilution vérifiés à voix haute ; prescription hors AMM tracée avec l\'information donnée',
  ],
});
