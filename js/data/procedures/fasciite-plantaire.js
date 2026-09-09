/* Fiche : fasciite / fasciopathie plantaire — infiltration, fenestration, PRP, nerf de Baxter.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références citées de
   mémoire, marquées verif:false, sans DOI/PMID/URL reconstitués. */
ECHO.register({
  id: 'fasciite-plantaire',
  titre: 'Fasciopathie plantaire — infiltration échoguidée, fenestration, PRP et nerf de Baxter',
  titreCourt: 'Fasciite plantaire',
  en: 'Plantar fasciitis / plantar fasciopathy: ultrasound-guided corticosteroid injection (medial in-plane approach), needle fenestration (tenotomy), platelet-rich plasma, dextrose prolotherapy, botulinum toxin; inferior calcaneal (Baxter\'s) nerve block and hydrodissection',
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée pour le corticoïde à court terme (ECR et revue Cochrane : effet réel mais bref) ; modérée pour le PRP au-delà de 3 mois (méta-analyses d\'ECR de qualité inégale) ; faible pour la fenestration, le dextrose et la toxine botulique',
  motsCles: ['fasciite plantaire', 'fasciopathie plantaire', 'talalgie', 'épine calcanéenne', 'aponévrosite', 'nerf de Baxter', 'nerf calcanéen inférieur', 'PRP', 'fenestration', 'ondes de choc', 'toxine botulique'],
  maj: '2026-09',
  resume: 'La talalgie plantaire de l\'adulte est une **fasciopathie dégénérative** de l\'insertion calcanéenne, non une inflammation — le terme « fasciite » est consacré mais trompeur, et cela change la logique thérapeutique. L\'échographie fait le diagnostic (épaisseur > 4 mm à l\'insertion, hypoéchogénicité, parfois rupture partielle) et écarte les diagnostics différentiels, au premier rang desquels la **compression du nerf calcanéen inférieur (nerf de Baxter)**, présente dans une proportion notable des talalgies rebelles et qui ne répond pas à l\'infiltration du fascia. Le corticoïde échoguidé soulage réellement, mais brièvement, et expose à deux complications spécifiques : la rupture du fascia et l\'atrophie du coussinet graisseux. Le PRP fait mieux à 6–12 mois dans plusieurs méta-analyses, au prix d\'un coût et d\'un accès limités. Rien ne dispense des étirements spécifiques et des ondes de choc, qui restent la colonne vertébrale du traitement.',

  flash: {
    position: 'ventral', positionNote: 'procubitus, pied dépassant du bord de la table, cheville en dorsiflexion (le fascia se met en tension) ; décubitus dorsal genou fléchi et hanche en rotation externe possible',
    sonde: 'lineaire', sondeNote: '10–15 MHz, profondeur 3–4 cm ; passer en 8–10 MHz sur un talon épais',
    approche: 'in-plane', approcheNote: 'voie **médiale**, aiguille venant du bord médial du talon, jamais par la face plantaire (peau épaisse, zone d\'appui, coussinet graisseux)',
    aiguille: '22–25 G, 40–50 mm',
    cible: '**Face profonde du fascia** à son insertion calcanéenne — ni dans le fascia, ni dans le coussinet graisseux : nappe anéchogène qui décolle le fascia du plan profond',
    injectat: 'Corticoïde 20–40 mg équivalent méthylprednisolone (ou bétaméthasone 3,5–7 mg) + 1–2 mL d\'AL ; ou PRP 3–5 mL',
    duree: '5–10 min (15–20 min avec fenestration)',
  },

  indications: [
    '**Talalgie plantaire** de plus de 3 mois, résistante aux étirements spécifiques du fascia, aux orthèses et à l\'adaptation du chaussage, avec fasciopathie confirmée en échographie.',
    'Douleur mécanique typique : **premiers pas du matin** ou après une station assise prolongée, s\'atténuant puis reprenant en fin de journée, avec douleur exquise à la palpation du tubercule médial du calcanéus.',
    '**Fasciopathie avec hypoéchogénicité et épaississement > 4 mm** à l\'insertion : c\'est la cible du geste.',
    '**Rupture partielle du fascia** : contre-indique le corticoïde ; oriente vers le repos, l\'immobilisation relative et éventuellement le PRP.',
    '**Suspicion de compression du nerf calcanéen inférieur (nerf de Baxter)** : douleur plus latérale et plus proximale, brûlure, douleur nocturne ou au repos, absence de réponse aux gestes sur le fascia — indication de **bloc diagnostique** puis d\'hydrodissection.',
    '**Bloc diagnostique** quand la topographie est ambiguë (fascia vs nerf de Baxter vs tunnel tarsien vs fracture de fatigue du calcanéus) : un seul site à la fois, EN avant / 30 min après.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée ou mycose plantaire au point de ponction, **rupture complète du fascia** (aucun corticoïde).',
    '**Relatives majeures** : **rupture partielle** ou fascia très aminci et hypoéchogène sur une grande hauteur — le corticoïde y multiplie le risque de rupture complète ; **atrophie du coussinet graisseux** déjà constituée ; sportif en charge d\'entraînement (différer et privilégier PRP ou ondes de choc).',
    '**Relatives** : diabète déséquilibré, neuropathie ou artériopathie (zone d\'appui, cicatrisation), chirurgie du pied programmée à moins de 3 mois.',
    '**Nombre d\'injections** : ne pas dépasser 2 à 3 corticoïdes au même talon, espacés d\'au moins 3 mois. L\'accumulation est la principale cause iatrogène de rupture.',
    '**Risque hémorragique** : geste superficiel et compressible, classe **faible** (ASRA-ESRA 2018) — pas d\'arrêt systématique des antiagrégants ni des anticoagulants.',
  ],
  alternatives: 'Le socle du traitement n\'est pas interventionnel : **étirements spécifiques du fascia plantaire** (plus efficaces que les étirements du triceps seuls), étirement du triceps sural, orthèse plantaire, adaptation du chaussage, contrôle du poids et de la charge d\'entraînement, orthèse nocturne de dorsiflexion chez certains. Les **ondes de choc** (radiales ou focales) ont un niveau de preuve au moins comparable à celui des infiltrations, sans risque de rupture ni d\'atrophie graisseuse : c\'est l\'alternative à proposer en premier chez le sportif et chez tout patient à fascia fragilisé. Viennent ensuite les gestes échoguidés : corticoïde (effet net mais court), fenestration à l\'aiguille, PRP (effet plus durable dans plusieurs méta-analyses), dextrose, toxine botulique (données limitées). La **chirurgie** (fasciotomie partielle, libération du nerf de Baxter) reste marginale et tardive. Dans la stratégie IFD en HDJ, la valeur ajoutée du geste échoguidé est double : traiter, et surtout **trancher la topographie** (fascia vs nerf de Baxter) chez les talalgies rebelles où l\'errance diagnostique est la règle.',

  anatomie: `Le **fascia plantaire** (aponévrose plantaire) naît du **tubercule médial de la tubérosité calcanéenne** et se divise distalement en bandelettes pour les cinq rayons. Sa **bandelette centrale**, la plus épaisse, est celle qui est atteinte : c\'est elle que l\'on mesure. Épaisseur normale à l\'insertion : **< 4 mm** ; au-delà, avec hypoéchogénicité et perte du caractère fibrillaire, la fasciopathie est retenue.

Il est séparé de la peau par le **coussinet graisseux plantaire**, structure cloisonnée en logettes fibro-adipeuses qui absorbe l\'impact au talon. Ce coussinet ne se régénère pas : son atrophie, favorisée par les corticoïdes, crée une douleur d\'appui permanente pour laquelle il n\'existe aucun traitement satisfaisant. Sa préservation est une contrainte de conception du geste, pas un détail.

En profondeur du fascia : le **court fléchisseur des orteils**, puis le **carré plantaire**, puis le calcanéus. En dedans, l\'**abducteur de l\'hallux** forme le relief médial du talon.

Le **nerf calcanéen inférieur (première branche du nerf plantaire latéral, « nerf de Baxter »)** se détache du nerf plantaire latéral, chemine d\'abord **verticalement entre le fascia profond de l\'abducteur de l\'hallux et le bord médial du carré plantaire**, puis se coude pour prendre un trajet **horizontal, latéral**, entre le carré plantaire et le court fléchisseur des orteils, jusqu\'à l\'abducteur du 5ᵉ orteil qu\'il innerve. Il donne au passage des branches sensitives au périoste calcanéen et au fascia. Ses deux sites de compression sont le **coude entre abducteur de l\'hallux et carré plantaire** (le principal) et le passage au contact d\'un éperon ou d\'un fascia épaissi.

L\'**éperon calcanéen** est un ostéophyte de traction développé dans l\'insertion des muscles courts plantaires, plus haut que l\'insertion du fascia. Il est **fréquent chez l\'asymptomatique et absent chez beaucoup de symptomatiques** : ce n\'est ni la cause ni la cible.

### Ce qui compte pour le geste
- **La voie est médiale, jamais plantaire** : la peau plantaire est épaisse, très sensible, en zone d\'appui, et la traverser fait passer l\'aiguille et le produit par le coussinet graisseux qu\'on veut protéger.
- **La cible est la face profonde du fascia**, à l\'interface avec le court fléchisseur des orteils : ni intrafasciculaire (risque de rupture), ni dans le coussinet (risque d\'atrophie).
- La dorsiflexion de la cheville et des orteils **met le fascia en tension** et le rend plus lisible : l\'utiliser pour le repérage.
- **Toujours regarder le nerf de Baxter** avant de conclure : une talalgie qui brûle, qui réveille la nuit, qui ne cède pas à deux gestes bien conduits sur le fascia doit faire chercher le nerf.
- L\'**anisotropie** est majeure sur le fascia : une inclinaison de quelques degrés le fait paraître faussement hypoéchogène. Garder la sonde perpendiculaire avant d\'affirmer une hypoéchogénicité.`,

  installation: {
    patient: `**Procubitus**, pied dépassant du bord de la table, cheville en **dorsiflexion** spontanée ou maintenue (le fascia se tend, s\'aplatit et devient plus lisible). C\'est la position de référence : elle donne un accès médial confortable et un appui stable à la sonde.

Alternative : **décubitus dorsal**, genou fléchi, hanche en rotation externe, bord médial du pied vers le haut, plante posée sur la table — utile chez le patient qui ne tolère pas le procubitus.

Marquer le **tubercule médial du calcanéus** (point de douleur exquise) au feutre avant de désinfecter : c\'est le repère clinique de l\'insertion.`,
    operateur: `Opérateur **assis face au bord médial du talon**, écran **au-delà du patient dans l\'axe du regard**. Sonde tenue en appui sur le talon.

Deux temps distincts : **repérage en coupe longitudinale** (mesure de l\'épaisseur, recherche d\'une rupture et de l\'éperon), puis **geste en coupe transversale (petit axe)**, l\'aiguille venant du bord médial dans le plan de la sonde. C\'est la géométrie qui rend la voie médiale réellement *in-plane* et permet de voir l\'aiguille sur toute sa longueur jusqu\'à la face profonde du fascia.`,
    sonde: `- Linéaire **10–15 MHz**, preset MSK, **profondeur 3–4 cm**, focale sur l\'insertion (1,5–2,5 cm), gain modéré. Talon épais ou œdémateux : descendre à 8–10 MHz.
- **Perpendicularité stricte** : l\'anisotropie du fascia crée de fausses zones hypoéchogènes. Basculer la sonde d\'avant en arrière pour vérifier qu\'une zone sombre persiste avant de l\'appeler « hypoéchogénicité ».
- **Doppler puissance** à basse PRF sur l\'insertion : une néovascularisation est possible dans les fasciopathies évoluées ; elle appuie le diagnostic mais n\'est pas indispensable.
- Mesure de l\'épaisseur : **coupe longitudinale, perpendiculaire au fascia, au niveau de l\'insertion calcanéenne**, bord supérieur à bord inférieur. Comparer au talon controlatéral quand il est asymptomatique — l\'asymétrie vaut souvent mieux qu\'un seuil absolu.`,
  },

  reperage: [
    { titre: 'Coupe longitudinale sur l\'insertion', texte: 'Sonde **longitudinale** sur la face plantaire du talon, alignée sur l\'axe du fascia, bord postérieur sur la tubérosité calcanéenne. On voit : la peau épaisse, le **coussinet graisseux** lobulé, puis la bande fibrillaire hyperéchogène du **fascia plantaire** naissant de la corticale calcanéenne.' },
    { titre: 'Mesurer et qualifier', texte: 'Mesurer l\'**épaisseur à l\'insertion**, perpendiculairement au fascia : **> 4 mm** = fasciopathie. Chercher la perte du caractère fibrillaire, l\'**hypoéchogénicité** (après avoir éliminé l\'anisotropie par bascule de la sonde), une **rupture partielle** (interruption focale, zone anéchogène) et un **éperon** (bec hyperéchogène avec ombre, à l\'insertion des muscles courts, plus haut que le fascia).' },
    { titre: 'Passer en coupe transversale', texte: 'Tourner la sonde de 90° au niveau de l\'insertion : le fascia apparaît en **petit axe** comme une bande hyperéchogène transversale, avec le **court fléchisseur des orteils** en profondeur et l\'**abducteur de l\'hallux** en dedans. C\'est la coupe du geste : elle donne un trajet médial entièrement dans le plan.' },
    { titre: 'Identifier l\'interface profonde', texte: 'Repérer précisément la **face profonde du fascia**, à l\'interface avec le court fléchisseur des orteils : c\'est la cible. La distinguer du plan superficiel (coussinet graisseux) et de l\'épaisseur du fascia lui-même.' },
    { titre: 'Chercher le nerf de Baxter', texte: 'Toujours, avant de conclure. Glisser la sonde en dedans et en arrière : l\'intervalle entre le **fascia profond de l\'abducteur de l\'hallux** et le **bord médial du carré plantaire** est le site de compression principal. Le nerf y est un très petit faisceau de 1–2 mm, souvent non individualisé : c\'est l\'**intervalle graisseux** entre les deux muscles qui sert de cible. Un abducteur de l\'hallux hypertrophié ou une atrophie graisseuse de l\'abducteur du 5ᵉ orteil sont des signes indirects.' },
    { titre: 'Si on ne trouve pas', texte: 'Fascia mal vu : augmenter la dorsiflexion de la cheville et des orteils (le fascia se tend et se redresse), remettre du gel, réduire la pression. Épaisseur limite (3,5–4,5 mm) : comparer au côté opposé. Aspect normal malgré une clinique franche : penser au **nerf de Baxter**, à la **fracture de fatigue du calcanéus** (douleur au pincement transversal du talon, œdème osseux — IRM), au **syndrome du tunnel tarsien**, à une **atrophie du coussinet graisseux** isolée, ou à une talalgie inflammatoire (enthésite de spondyloarthrite : Doppler positif, contexte).' },
  ],

  sonoanatomie: [
    { structure: 'Peau plantaire et coussinet graisseux', aspect: 'Peau très épaisse ; graisse lobulée en logettes séparées par des cloisons hyperéchogènes', repere: 'Structure à préserver absolument : ne jamais y déposer de corticoïde' },
    { structure: 'Fascia plantaire (bandelette centrale)', aspect: 'Bande fibrillaire hyperéchogène régulière, très anisotrope, naissant du tubercule médial du calcanéus', repere: 'Épaisseur normale < 4 mm à l\'insertion ; mesure perpendiculaire en coupe longitudinale' },
    { structure: 'Fasciopathie', aspect: 'Épaississement > 4 mm, hypoéchogénicité, perte du caractère fibrillaire, parfois néovascularisation au Doppler', repere: 'Vérifier par bascule de sonde que l\'hypoéchogénicité n\'est pas de l\'anisotropie' },
    { structure: 'Rupture partielle', aspect: 'Interruption focale des fibres, plage anéchogène, parfois fascia aminci en aval', repere: 'Contre-indique le corticoïde — le chercher systématiquement avant d\'injecter' },
    { structure: 'Éperon calcanéen', aspect: 'Bec osseux hyperéchogène avec cône d\'ombre, à l\'insertion des muscles courts plantaires', repere: 'Fréquent chez l\'asymptomatique : ni cause ni cible' },
    { structure: 'Court fléchisseur des orteils', aspect: 'Muscle strié immédiatement profond au fascia', repere: 'L\'interface fascia / court fléchisseur est la cible de l\'injection' },
    { structure: 'Abducteur de l\'hallux', aspect: 'Muscle du relief médial du talon, avec son fascia profond hyperéchogène', repere: 'Traversé ou longé par la voie médiale ; borde le tunnel du nerf de Baxter' },
    { structure: 'Nerf calcanéen inférieur (Baxter)', aspect: 'Faisceau de 1–2 mm, rarement individualisé ; l\'intervalle graisseux entre abducteur de l\'hallux et carré plantaire sert de repère', repere: 'Cible du bloc diagnostique et de l\'hydrodissection dans les talalgies rebelles' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). **Recherche d\'une rupture partielle faite et tracée** avant toute décision de corticoïde. Désinfection large du talon et du bord médial (inspecter la peau : mycose, fissures, hyperkératose). Gel stérile ou housse, gants stériles. Seringue de 3–5 mL, aiguille **22–25 G, 40–50 mm**.' },
    { titre: 'Anesthésie cutanée', texte: 'Bouton de lidocaïne 1 % (0,5–1 mL) au point d\'entrée **médial**. Le geste est réputé douloureux : ne pas l\'escamoter. Rester en sous-cutané médial, sans infiltrer le trajet profond (on masquerait la sensation de franchissement).' },
    { titre: 'Ponction médiale in-plane', texte: 'Sonde en **coupe transversale** sur l\'insertion, fascia centré. Entrer par le **bord médial du talon**, aiguille strictement **dans le plan**, à plat, pointe visible en permanence. Traverser le tissu sous-cutané médial et l\'abducteur de l\'hallux (ou le longer) en direction de l\'interface profonde du fascia. **Ne pas traverser le fascia** ni le coussinet graisseux.' },
    { titre: 'Positionner et tester', texte: 'Amener la pointe **au contact de la face profonde du fascia**, à l\'interface avec le court fléchisseur des orteils. Aspiration. Injecter **0,3–0,5 mL** en test : l\'injectat doit **décoller le fascia du plan musculaire** en une nappe anéchogène linéaire qui court le long de l\'interface. Si le produit forme une bille dans le muscle ou remonte dans le coussinet graisseux : repositionner avant de poursuivre.' },
    { titre: 'Injection et critère de fin', texte: 'Injecter le reste **fractionné**, en surveillant la diffusion. Critère de fin : **nappe anéchogène étalée sur la face profonde du fascia à l\'insertion**, sans injection intrafasciculaire (résistance franche, fascia qui « gonfle ») et sans nappe dans le coussinet graisseux. Volume total 2–3 mL.' },
    { titre: 'Fenestration à l\'aiguille (si indiquée)', texte: 'Après l\'anesthésie locale, **passages répétés (10 à 20)** de l\'aiguille dans la zone hypoéchogène de l\'insertion, en éventail, sous contrôle échographique permanent, jusqu\'à ressentir une perte de résistance homogène. Objectif : provoquer un saignement local et relancer une réponse cicatricielle sur un tissu dégénératif. Peut être fait seul, ou combiné au PRP. **Ne pas y associer de corticoïde** : on cherche une réponse de cicatrisation, l\'inverse de ce que fait le corticoïde.' },
    { titre: 'Après le geste', texte: 'Compression, pansement. Consignes : **décharge relative 48–72 h**, glace, **pas de course ni de saut pendant 2 à 4 semaines** après un corticoïde (fenêtre de fragilité du fascia) — c\'est la consigne qui prévient la rupture. Reprise des **étirements spécifiques** dès J3. Prévenir de la poussée douloureuse des 24–48 h. Glycémie chez le diabétique. Après PRP : pas d\'AINS pendant 2 semaines (à confirmer selon le protocole du centre).' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Corticoïde (talalgie rebelle, fascia continu) | Méthylprednisolone 20–40 mg **ou** bétaméthasone 3,5–7 mg (Diprostène® 0,5–1 mL) + lidocaïne 1 % ou ropivacaïne 0,2 % | 2–3 mL au total | Effet net mais **court** (quelques semaines à ~3 mois). **Maximum 2–3 injections par talon, espacées de 3 mois.** Jamais si rupture partielle |
| Bloc diagnostique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % seule | 2–3 mL | Un seul site par séance (fascia **ou** nerf de Baxter), EN avant / 30 min après. C\'est ce qui départage les talalgies rebelles |
| PRP | PRP selon le protocole du centre (leucocyte-pauvre ou -riche : protocoles hétérogènes) | 3–5 mL | Souvent associé à une fenestration. Effet plus lent que le corticoïde mais **plus durable à 6–12 mois** dans plusieurs méta-analyses. Pas de corticoïde associé |
| Fenestration / ténotomie à l\'aiguille | AL seul (lidocaïne 1 %) puis 10–20 passages | 2–4 mL d\'AL | Geste mécanique ; peut être réalisé seul. Prévenir d\'une recrudescence douloureuse de 1–2 semaines |
| Dextrose (prolothérapie) | Dextrose **12,5–25 %** dilué dans un AL (préparations et protocoles variables) | 2–4 mL, 3 séances espacées de 3–4 semaines | Preuve **faible** ; alternative sans risque de rupture ni d\'atrophie. Protocole à formaliser avec la pharmacie |
| Toxine botulique | Toxine botulique A, doses très variables selon les séries (à confirmer, hors AMM en France dans cette indication) | selon protocole | Données limitées à quelques ECR de petite taille. **Hors AMM** : information et traçabilité renforcées |
| Nerf de Baxter — bloc | Lidocaïne 1 % ou ropivacaïne 0,2 % ± corticoïde non particulaire (dexaméthasone 4 mg) | 2–4 mL | Bloc diagnostique d\'abord ; l\'effet prolongé oriente vers l\'hydrodissection ou la libération |
| Nerf de Baxter — hydrodissection | Sérum physiologique ou **dextrose 5 %** ± AL | 5–10 mL | Décollement du nerf dans l\'intervalle abducteur de l\'hallux / carré plantaire (chapitre *Hydrodissection*) |

**Doses maximales d\'AL** (à additionner si plusieurs sites) : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée).

**Nature du corticoïde** : pas d\'artère terminale ici, le particulaire est acceptable — mais c\'est le particulaire qui est en cause dans l\'atrophie graisseuse. Sur un coussinet déjà aminci, une peau fragile ou une deuxième injection, préférer un corticoïde moins particulaire et un volume réduit. **Jamais de triamcinolone hexacétonide (Hexatrione®)**, réservée à l\'intra-articulaire. Pour le nerf de Baxter, préférer un **non particulaire**.`,

  variantes: [
    { titre: 'Fenestration (ténotomie) à l\'aiguille', texte: `Sous AL, 10 à 20 passages de l\'aiguille en éventail dans la zone hypoéchogène de l\'insertion, sous contrôle échographique continu. L\'objectif est de convertir une lésion dégénérative chronique en lésion aiguë qui cicatrise : saignement local, afflux de facteurs de croissance. Se combine bien avec le **PRP** (fenestration puis injection). **Jamais avec un corticoïde**, dont l\'effet est antagoniste de la cicatrisation recherchée. Prévenir d\'une recrudescence douloureuse de 1 à 2 semaines, puis d\'une amélioration progressive sur 6 à 12 semaines : un patient non prévenu conclut à un échec au 10ᵉ jour.` },
    { titre: 'PRP', texte: `Injection de plasma riche en plaquettes, le plus souvent après fenestration, dans la zone dégénérative de l\'insertion. Plusieurs méta-analyses d\'ECR retrouvent un **avantage du PRP sur le corticoïde à partir de 3 mois et jusqu\'à 12 mois**, alors que le corticoïde fait mieux dans les premières semaines : c\'est un arbitrage entre rapidité et durabilité, à poser explicitement avec le patient. Limites réelles : hétérogénéité majeure des protocoles de préparation (leucocyte-pauvre / -riche, nombre d\'injections), qualité méthodologique inégale des essais, **coût et non-remboursement** en France. Pas de corticoïde associé, pas d\'AINS dans les deux semaines suivantes (à confirmer selon le protocole retenu).` },
    { titre: 'Ondes de choc — l\'alternative à ne pas oublier', texte: `Ondes de choc radiales ou focales, 3 à 5 séances hebdomadaires, associées aux étirements spécifiques. Niveau de preuve au moins comparable à celui des infiltrations, **sans risque de rupture du fascia ni d\'atrophie du coussinet graisseux**. C\'est l\'option à proposer en priorité chez le sportif, chez le patient à fascia aminci ou déjà infiltré, et chez celui qui refuse le corticoïde. L\'ECR de Rompe 2010 souligne par ailleurs la supériorité des **étirements spécifiques du fascia** en traitement initial : ne jamais présenter le geste comme un substitut à la rééducation.` },
    { titre: 'Nerf de Baxter — bloc et hydrodissection', texte: `Cible : l\'intervalle entre le **fascia profond de l\'abducteur de l\'hallux** et le **bord médial du carré plantaire**, où le nerf calcanéen inférieur se coude. Sonde en coupe transversale sur le talon médial, aiguille **in-plane de médial en latéral**, pointe amenée dans l\'intervalle graisseux entre les deux muscles. **Bloc diagnostique** d\'abord (2–4 mL d\'AL) : une abolition franche et transitoire de la douleur signe la cible et change complètement la stratégie. Puis **hydrodissection** (5–10 mL de sérum ou de dextrose 5 %) qui décolle le nerf de son tunnel. **PRF** possible en cas de réponse courte mais répétée au bloc. À considérer devant toute talalgie qui brûle, qui réveille la nuit, ou qui a résisté à deux gestes bien conduits sur le fascia — c\'est le diagnostic manqué classique de la talalgie chronique.` },
    { titre: 'Dextrose et toxine botulique', texte: `**Dextrose (prolothérapie)** : 12,5–25 % dilué, 3 séances espacées de 3–4 semaines. Preuve faible mais profil de sécurité favorable — pas de risque de rupture ni d\'atrophie ; option raisonnable chez le patient qui a une contre-indication au corticoïde et pas d\'accès au PRP. **Toxine botulique A** : quelques ECR de petite taille rapportent un bénéfice antalgique ; doses et sites d\'injection très variables selon les publications. **Hors AMM en France dans cette indication** : à réserver à des situations d\'exception, avec information écrite et traçabilité.` },
  ],

  pearls: [
    'Chercher la **rupture partielle avant** de décider du corticoïde : c\'est le seul examen qui change la contre-indication, et il prend trente secondes.',
    'Voie **médiale**, jamais plantaire : on protège le coussinet graisseux et on évite la zone d\'appui.',
    'Faire le geste en **coupe transversale** : c\'est la seule géométrie où la voie médiale est vraiment dans le plan sur toute la longueur de l\'aiguille.',
    'La bonne image de fin est une **nappe qui décolle** le fascia du court fléchisseur, pas une bille dans le muscle.',
    'Basculer la sonde avant d\'affirmer une hypoéchogénicité : le fascia est l\'une des structures les plus anisotropes du pied.',
    'Devant une talalgie qui **brûle ou réveille la nuit**, penser au nerf de Baxter avant d\'infiltrer une troisième fois le fascia.',
    'La consigne « pas de course ni de saut pendant 2 à 4 semaines » après un corticoïde vaut autant que le geste lui-même.',
    'Corticoïde = soulagement rapide et bref ; PRP = plus lent et plus durable. Poser l\'arbitrage explicitement avec le patient plutôt que de choisir à sa place.',
  ],
  pieges: [
    'Injecter du corticoïde dans un fascia partiellement rompu ou très aminci : c\'est le scénario de la **rupture complète**.',
    'Passer par la face plantaire : douleur inutile, point de ponction en zone d\'appui, et trajet à travers le coussinet graisseux.',
    'Injecter **dans** le fascia (résistance franche, fascia qui gonfle) au lieu de sa face profonde.',
    'Laisser diffuser le corticoïde dans le coussinet graisseux : **atrophie définitive**, douleur d\'appui permanente, aucun traitement de rattrapage.',
    'Prendre l\'anisotropie pour une lésion hypoéchogène et traiter une image plutôt qu\'un patient.',
    'Traiter l\'éperon calcanéen : il n\'est ni la cause ni la cible, et il est fréquent chez l\'asymptomatique.',
    'Enchaîner les infiltrations sans corriger la charge, le chaussage et les étirements : récidive garantie et fascia fragilisé.',
    'Oublier le nerf de Baxter, la fracture de fatigue du calcanéus et l\'enthésite de spondyloarthrite devant une talalgie qui ne répond pas.',
  ],
  complications: [
    '**Poussée douloureuse post-infiltration** (24–48 h) : très fréquente au talon, prévenir systématiquement.',
    '**Rupture du fascia plantaire** : la complication spécifique, favorisée par les corticoïdes répétés, l\'injection intrafasciculaire et la reprise précoce de l\'impact. Se traduit par une douleur brutale avec sensation de déchirure, un effondrement de l\'arche et parfois une ecchymose. Conduite : arrêt de l\'impact, immobilisation relative, avis orthopédique ; **aucune nouvelle infiltration**.',
    '**Atrophie du coussinet graisseux plantaire** : définitive, responsable d\'une douleur d\'appui permanente sans traitement satisfaisant. C\'est la raison de la voie médiale et de la limitation stricte du nombre d\'injections.',
    '**Dépigmentation et atrophie cutanée** au point de ponction médial.',
    '**Infection** : rare, mais le talon est une zone à peau souvent fissurée ou hyperkératosique ; inspecter avant de désinfecter.',
    '**Lésion nerveuse** (branches calcanéennes médiales, nerf de Baxter) sur un trajet médial mal contrôlé : dysesthésies du talon.',
    '**Hyperglycémie** 24–72 h chez le diabétique.',
    'Après **fenestration ou PRP** : recrudescence douloureuse de 1 à 2 semaines, attendue et à annoncer — ce n\'est pas un échec.',
  ],
  securite: [
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018) : pas d\'arrêt systématique des antiagrégants ni des anticoagulants.',
    'Recherche systématique d\'une **rupture partielle** avant tout corticoïde : contre-indication formelle.',
    'Voie médiale exclusive ; contrôle échographique permanent de la diffusion pour ne pas charger le coussinet graisseux.',
    'Limiter à **2–3 corticoïdes par talon**, espacés d\'au moins 3 mois ; ne pas réinjecter si l\'effet précédent a duré moins de 6 semaines.',
    'Consignes de décharge écrites : pas de course ni de saut 2 à 4 semaines après un corticoïde — la fragilisation est maximale dans cette fenêtre.',
    'Inspection cutanée du talon avant désinfection (fissures, hyperkératose, mycose) ; asepsie en deux temps.',
    'Prudence majorée chez le diabétique neuropathe et l\'artéritique : zone d\'appui, cicatrisation compromise.',
    'Nerf de Baxter : corticoïde **non particulaire** et injection péri-nerveuse, jamais intraneurale (douleur en éclair = retrait immédiat).',
  ],

  suivi: `- **J0** : EN avant et à 30 min (valeur diagnostique de l\'AL, surtout si l\'on a bloqué le nerf de Baxter), épaisseur du fascia mesurée et tracée, présence ou absence de rupture notée.
- **J2–J3** : fin de la poussée douloureuse ; reprise des étirements spécifiques du fascia.
- **J15–J30** : EN aux premiers pas du matin (le critère le plus discriminant dans cette pathologie), périmètre de marche, antalgiques. Vérifier l\'observance des étirements, du chaussage et de l\'orthèse.
- **3 mois** : durabilité. C\'est le point de bascule : le corticoïde s\'épuise typiquement à ce terme, le PRP est à son maximum.
- **6–12 mois** après PRP : c\'est là que se juge le bénéfice ; ne pas conclure trop tôt.
- **Contrôle échographique** en cas de récidive ou d\'aggravation brutale : rechercher une **rupture**, réévaluer l\'épaisseur, et regarder le nerf de Baxter si ce n\'a pas été fait.
- **Quand répéter** : réponse ≥ 50 % pendant au moins 8 semaines ; maximum 2–3 corticoïdes par talon, jamais avant 3 mois, jamais sur un fascia rompu ou aminci.
- **Quand escalader / changer d\'axe** : après deux gestes bien conduits sur le fascia sans résultat durable, **ne pas en faire un troisième** — refaire le diagnostic (nerf de Baxter, fracture de fatigue, enthésite inflammatoire, atrophie du coussinet), passer aux ondes de choc ou au PRP, ou adresser.
- Dans tous les cas, associer **étirements spécifiques du fascia plantaire**, travail du triceps sural, adaptation de la charge et du chaussage : les ECR positifs reposent tous sur cette base.`,

  evidence: `*Fiche rédigée sans accès à la recherche bibliographique (budget de session épuisé) : les références sont citées de mémoire et marquées « à vérifier ». Les jugements de force de preuve sont qualitatifs et à reconfirmer.*

- **Corticoïde injecté (revue Cochrane, David 2017)** : effet antalgique **réel mais de faible ampleur et de courte durée** (essentiellement dans le premier mois, s\'estompant ensuite), sur des essais de qualité méthodologique globalement médiocre. C\'est le message principal : le corticoïde achète des semaines, pas des mois. Preuve **modérée** pour le court terme, **faible ou nulle** au-delà.
- **Échoguidage** : il améliore le placement de l\'injectat et réduit la diffusion au coussinet graisseux. Le bénéfice clinique par rapport à l\'injection palpatoire est **suggéré mais non solidement démontré** ; la justification principale reste la **sécurité** (éviter le coussinet et le fascia lui-même) et la **précision diagnostique** du même temps d\'examen.
- **Imagerie et seuil des 4 mm (McMillan 2009, revue systématique)** : l\'échographie a de bonnes performances diagnostiques dans la talalgie plantaire chronique, avec l\'**épaisseur du fascia** comme critère principal. Le seuil de 4 mm est robuste en pratique mais reste un seuil : la comparaison au côté sain est souvent plus informative.
- **PRP vs corticoïde (méta-analyses d\'ECR, dont Hurley 2020)** : le corticoïde fait mieux à très court terme, le **PRP fait mieux à partir de ~3 mois et jusqu\'à 12 mois**. Preuve **modérée**, limitée par l\'hétérogénéité majeure des protocoles de préparation du PRP et par la qualité inégale des essais inclus. L\'ECR de Monto 2014 va dans le même sens (supériorité du PRP à distance).
- **Ondes de choc et étirements (Rompe 2010, ECR)** : les **étirements spécifiques du fascia** sont supérieurs aux ondes de choc en traitement initial de la fasciopathie plantaire. Enseignement pratique majeur : aucun geste ne doit être proposé sans le programme d\'étirements, et les ondes de choc gardent leur place en deuxième intention, avec un profil de sécurité supérieur aux infiltrations.
- **Orthèses plantaires** : bénéfice modeste et surtout à court terme dans les essais (Landorf 2006) ; elles restent utiles comme mesure d\'accompagnement, pas comme traitement isolé.
- **Fenestration à l\'aiguille, dextrose, toxine botulique** : preuve **faible** — séries et ECR de petite taille, protocoles hétérogènes. La toxine botulique dispose de quelques ECR positifs de petite taille (dont Babcock 2005) mais reste **hors AMM** dans cette indication en France.
- **Nerf de Baxter** : la compression de la première branche du nerf plantaire latéral est une cause reconnue de talalgie chronique depuis les travaux de **Baxter et Pfeffer (1992)**, avec de bons résultats de la libération chirurgicale dans des séries. En revanche, les données sur le **bloc et l\'hydrodissection échoguidés** se limitent à des **séries et à des avis d\'experts** : preuve **faible** sur le plan thérapeutique, mais valeur **diagnostique** élevée du bloc test — c\'est à ce titre que la fiche le recommande.
- **Trou principal de la littérature** : aucune stratégie séquentielle validée (que faire après l\'échec d\'un corticoïde), et très peu de données comparant directement gestes échoguidés et ondes de choc sur des critères à 12 mois.`,

  references: [
    { auteurs: 'David JA, Sankarapandian V, Christopher PR, Chatterjee A, Macaden AS', titre: 'Injected corticosteroids for treating plantar heel pain in adults', revue: 'Cochrane Database of Systematic Reviews', annee: '2017', type: 'revue systématique', verif: false, note: 'Effet antalgique de faible ampleur et de courte durée.' },
    { auteurs: 'Crawford F, Thomson C', titre: 'Interventions for treating plantar heel pain', revue: 'Cochrane Database of Systematic Reviews', annee: '2003', type: 'revue systématique', verif: false },
    { auteurs: 'McMillan AM, Landorf KB, Barrett JT, Menz HB, Bird AR', titre: 'Diagnostic imaging for chronic plantar heel pain: a systematic review and meta-analysis', revue: 'Journal of Foot and Ankle Research', annee: '2009', type: 'revue systématique', verif: false, note: 'Base du seuil d\'épaisseur du fascia.' },
    { auteurs: 'Hurley ET, Shimozono Y, Hannon CP, Smyth NA, Murawski CD, Kennedy JG', titre: 'Platelet-rich plasma versus corticosteroids for plantar fasciitis: a systematic review of randomized controlled trials', revue: 'Orthopaedic Journal of Sports Medicine', annee: '2020', type: 'revue systématique', verif: false },
    { auteurs: 'Monto RR', titre: 'Platelet-rich plasma efficacy versus corticosteroid injection treatment for chronic severe plantar fasciitis', revue: 'Foot & Ankle International', annee: '2014', type: 'ECR', verif: false },
    { auteurs: 'Rompe JD, Cacchio A, Weil L Jr, et al.', titre: 'Plantar fascia-specific stretching versus radial shock-wave therapy as initial treatment of plantar fasciopathy', revue: 'Journal of Bone and Joint Surgery (Am)', annee: '2010', type: 'ECR', verif: false, note: 'Supériorité des étirements spécifiques en traitement initial.' },
    { auteurs: 'Landorf KB, Keenan AM, Herbert RD', titre: 'Effectiveness of foot orthoses to treat plantar fasciitis: a randomized trial', revue: 'Archives of Internal Medicine', annee: '2006', type: 'ECR', verif: false },
    { auteurs: 'Baxter DE, Pfeffer GB', titre: 'Treatment of chronic heel pain by surgical release of the first branch of the lateral plantar nerve', revue: 'Clinical Orthopaedics and Related Research', annee: '1992', type: 'série chirurgicale', verif: false, note: 'Description princeps du nerf calcanéen inférieur comme cause de talalgie.' },
    { auteurs: 'Babcock MS, Foster L, Pasquina P, Jabbari B', titre: 'Treatment of pain attributed to plantar fasciitis with botulinum toxin A: a short-term, randomized, placebo-controlled, double-blind study', revue: 'American Journal of Physical Medicine & Rehabilitation', annee: '2005', type: 'ECR', verif: false, note: 'Hors AMM en France dans cette indication.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence reprise telle quelle de la fiche nerf-suprascapulaire.js, dont le DOI avait été vérifié lors de sa rédaction.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'fascia-long', section: 'sonoanatomie', titre: 'Coupe longitudinale de l\'insertion calcanéenne — mesurer et qualifier',
      legende: 'Le fascia naît du tubercule médial du calcanéus et court vers l\'avant, séparé de la peau par le coussinet graisseux. La mesure se fait à l\'insertion, perpendiculairement au fascia : plus de 4 mm avec hypoéchogénicité et perte du caractère fibrillaire signe la fasciopathie. L\'éperon naît plus haut, dans l\'insertion des muscles courts : ni cause ni cible.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Postérieur (calcanéus)', right: 'Antérieur (fascia)' }).probeInfo({ plan: 'Longitudinal, face plantaire du talon', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 14, fatBelow: 52 });
        S.label({ x: 470, y: 92, text: 'Coussinet graisseux — à préserver', cls: 'lbl-fat', small: true });
        S.tendon({ path: 'M62 118 L300 138 L624 152 L624 160 L300 150 L64 142 Z' });
        S.region({ path: 'M66 122 L188 133 L188 145 L68 140 Z', fill: '#0d1116', opacity: 0.85 });
        S.bone({ path: 'M0 150 L58 148 L128 158 L104 162 Q172 168 216 180', label: 'Calcanéus', at: [70, 214], ldy: 0 });
        S.muscle({ path: 'M196 194 Q392 204 640 216 L640 276 Q392 266 196 250 Z', label: 'Court fléchisseur des orteils', at: [412, 236], opacity: 0.5 });
        S.label({ x: 300, y: 316, text: 'Fascia plantaire', cls: 'lbl-tendon', small: true, lead: [300, 152] });
        S.label({ x: 126, y: 348, text: 'Insertion épaissie > 4 mm\net hypoéchogène', cls: 'lbl-target', small: true, lead: [124, 138] });
        S.label({ x: 214, y: 172, text: 'Éperon', cls: 'lbl-bone', small: true, lead: [122, 159] });
      },
    },
    {
      id: 'fascia-injection', section: 'technique', titre: 'Coupe transversale — voie médiale in-plane vers la face profonde du fascia',
      legende: 'C\'est la coupe qui rend la voie médiale réellement dans le plan. L\'aiguille traverse ou longe l\'abducteur de l\'hallux et s\'arrête à l\'interface entre le fascia et le court fléchisseur des orteils. Critère de fin : nappe anéchogène qui décolle le fascia du plan musculaire — ni dans le fascia (risque de rupture), ni dans le coussinet graisseux (risque d\'atrophie définitive).',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse sur l\'insertion', type: 'in-plane' });
        S.skin({ thickness: 14, fatBelow: 44 });
        S.label({ x: 430, y: 88, text: 'Coussinet graisseux — ne pas injecter', cls: 'lbl-fat', small: true });
        S.muscle({ path: 'M0 104 L112 116 L124 224 L0 230 Z', label: 'Abducteur\nde l\'hallux', at: [56, 170], opacity: 0.5 });
        S.tendon({ path: 'M96 120 L566 128 L566 146 L98 140 Z' });
        S.muscle({ path: 'M118 154 L568 158 L590 224 L120 218 Z', label: 'Court fléchisseur des orteils', at: [370, 190], opacity: 0.5 });
        S.bone({ path: 'M70 274 Q330 252 626 270', label: 'Calcanéus', at: [330, 306], ldy: 0 });
        S.label({ x: 452, y: 112, text: 'Fascia plantaire', cls: 'lbl-tendon', small: true, lead: [420, 128] });
        S.target({ x: 300, y: 150, r: 15 });
        S.needle({ from: [2, 116], to: [292, 148], label: '22–25 G, voie médiale' });
        S.spread({ x: 306, y: 152, rx: 86, ry: 13, label: '2–3 mL — face profonde' });
      },
    },
    {
      id: 'fascia-baxter', section: 'technique', titre: 'Nerf de Baxter — bloc et hydrodissection dans l\'intervalle abducteur / carré plantaire',
      legende: 'Le nerf calcanéen inférieur se coude entre le fascia profond de l\'abducteur de l\'hallux et le bord médial du carré plantaire : c\'est le site de compression. Le nerf mesure 1 à 2 mm et n\'est souvent pas individualisé — c\'est l\'intervalle graisseux entre les deux muscles qui sert de cible. Bloc diagnostique d\'abord, hydrodissection ensuite si la réponse est franche mais brève.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, talon médial', type: 'in-plane' });
        S.skin({ thickness: 12, fatBelow: 40 });
        S.muscle({ path: 'M0 100 L150 112 L166 218 L0 226 Z', label: 'Abducteur\nde l\'hallux', at: [70, 166], opacity: 0.5 });
        S.tendon({ path: 'M174 106 L620 102 L620 118 L174 122 Z' });
        S.muscle({ path: 'M180 130 L606 124 L606 190 L180 196 Z', label: 'Court fléchisseur des orteils', at: [396, 160], opacity: 0.45 });
        S.muscle({ path: 'M184 208 L600 198 L610 288 L188 296 Z', label: 'Carré plantaire', at: [420, 250], opacity: 0.5 });
        S.fascia({ points: [[16, 210], [162, 218]], width: 1.8 });
        S.nerve({ x: 186, y: 210, r: 7 });
        S.bone({ path: 'M206 330 Q408 316 638 328', label: 'Calcanéus', at: [420, 360], ldy: 0 });
        S.label({ x: 458, y: 96, text: 'Fascia plantaire', cls: 'lbl-tendon', small: true });
        S.label({ x: 320, y: 372, text: 'N. calcanéen inférieur (Baxter)', cls: 'lbl-nerve', small: true, lead: [190, 218] });
        S.needle({ from: [2, 140], to: [174, 204], label: '25 G, in-plane médial' });
        S.spread({ x: 192, y: 212, rx: 38, ry: 18, label: '2–4 mL bloc · 5–10 mL hydrodissection' });
      },
    },
  ],

  checklist: [
    'Recherche d\'une rupture partielle du fascia faite et tracée AVANT toute décision de corticoïde',
    'Épaisseur mesurée à l\'insertion, perpendiculairement, et comparée au côté opposé',
    'Anisotropie éliminée par bascule de sonde avant d\'affirmer une hypoéchogénicité',
    'Voie médiale confirmée, coupe transversale en place — jamais de ponction plantaire',
    'Nerf de Baxter examiné si talalgie brûlante, nocturne ou déjà traitée sans succès',
    'Nombre de corticoïdes déjà reçus au même talon vérifié (maximum 2–3, espacés de 3 mois)',
    'Consignes écrites remises : pas de course ni de saut 2 à 4 semaines, étirements repris à J3',
    'Si PRP ou fenestration : recrudescence douloureuse de 1–2 semaines expliquée, pas de corticoïde associé',
  ],
});
