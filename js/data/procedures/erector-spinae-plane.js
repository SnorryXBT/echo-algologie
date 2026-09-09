/* Fiche : bloc du plan des érecteurs du rachis (ESP) — thoracique et lombaire, douleur chronique. */
ECHO.register({
  id: 'erector-spinae-plane',
  titre: 'Bloc du plan des érecteurs du rachis (ESP) — thoracique et lombaire',
  titreCourt: 'ESP block',
  en: 'Ultrasound-guided erector spinae plane (ESP) block — thoracic and lumbar approaches for chronic pain; interfascial plane block, pulsed radiofrequency of the erector spinae plane',
  region: 'rachis-bassin',
  types: ['bloc'],
  niveau: 1,
  grade: 'Forte en douleur aiguë péri-opératoire (méta-analyses d\'ECR) · faible en douleur chronique (séries, cas cliniques, quelques ECR de petite taille)',
  maj: '2026-09',
  motsCles: ['ESP', 'ESPB', 'bloc interfascial', 'plan de fascia', 'névralgie post-zostérienne', 'douleur post-thoracotomie', 'lombalgie', 'myofascial', 'Forero', 'processus transverse'],
  resume: 'Le bloc du plan des érecteurs du rachis est le geste le plus simple et le plus sûr du rachis : la cible est un plan interfascial entre le muscle érecteur et le **processus transverse**, à 3 cm de la ligne médiane, loin de la plèvre, du foramen et du canal. C\'est aussi le plus mal compris — Forero l\'a décrit en 2016 précisément pour de la **douleur thoracique neuropathique chronique**, mais l\'essentiel de la littérature accumulée depuis est péri-opératoire, et le mécanisme (diffusion paravertébrale, épidurale, ou simple effet myofascial) reste discuté et surtout **inconstant** d\'un sujet à l\'autre. En algologie, il a sa place comme geste d\'appoint à faible risque : névralgie post-zostérienne, douleur pariétale post-chirurgicale, lombalgie chronique, syndrome myofascial des érecteurs — à condition d\'annoncer un objectif de fenêtre thérapeutique et non de traitement de fond. Il ne remplace jamais un bloc ciblé quand une cible précise existe.',

  flash: {
    position: 'procubitus', positionNote: 'coussin sous l\'abdomen ; décubitus latéral ou position assise possibles (utile chez le douloureux qui ne tient pas à plat ventre)',
    sonde: 'lineaire', sondeNote: '6–13 MHz au niveau thoracique (cible à 2–4 cm) ; convexe 2–5 MHz au niveau lombaire ou chez le patient épais (cible à 4–7 cm)',
    approche: 'in-plane', approcheNote: 'sonde para-sagittale à 3 cm de la ligne médiane, aiguille crânio-caudale dans le grand axe de la sonde',
    aiguille: '21–22 G, 80–100 mm, écho-visible ; aiguille RF 22 G 100 mm si PRF du plan',
    cible: 'Contact osseux sur le processus transverse, puis retrait de 1 mm : l\'injectat doit **décoller l\'érecteur du rachis de l\'os** et fuser en nappe crânio-caudale sur plusieurs niveaux — c\'est le critère de fin',
    injectat: '20–30 mL par côté : ropivacaïne 0,2–0,375 % ± corticoïde (dexaméthasone 4 mg ou méthylprednisolone 40 mg)',
    duree: '10 min par côté',
  },

  indications: [
    '**Névralgie post-zostérienne** thoracique et douleur de zona en phase aiguë ou subaiguë : indication historique (séries de cas), à faire au niveau du dermatome le plus douloureux.',
    '**Douleur thoracique chronique post-chirurgicale** : syndrome douloureux post-thoracotomie, post-sternotomie, post-mastectomie — l\'indication la mieux documentée en chronique, mais sur des séries.',
    '**Lombalgie chronique**, y compris d\'allure facettaire, et douleur du rachis lombaire post-arthrodèse : ESP lombaire, souvent bilatéral, sur plusieurs niveaux.',
    '**Syndrome de douleur myofasciale** des érecteurs du rachis et des trapèzes bas : l\'hydrodissection du plan a un effet propre, indépendant de toute diffusion paravertébrale.',
    'Douleur d\'épaule et de ceinture scapulaire (ESP haut thoracique, T2-T3) : décrit, mais nettement moins étayé que le bloc suprascapulaire — à ne pas proposer en première ligne.',
    'Douleur pariétale abdominale haute et douleur de fracture costale ancienne : le plan diffuse aux rameaux dorsaux et, de façon inconstante, aux nerfs intercostaux.',
    'Patient **anticoagulé ou à haut risque hémorragique** chez qui un bloc paravertébral ou épidural est exclu : c\'est l\'argument de sécurité principal de l\'ESP.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides.',
    '**Hémostase** : bloc superficiel, sur un site compressible, à distance du névraxe — **risque faible** dans la stratification ASRA-ESRA 2018 des procédures douleur (*à confirmer sur la table du texte princeps : les blocs de plan interfascial du tronc n\'y sont pas tous individualisés*). En pratique, c\'est le bloc du rachis que l\'on peut proposer sous antiagrégant, et discuter sous anticoagulant.',
    '**Relatives** : troubles de la crase majeurs (le plan est vascularisé par les artères segmentaires et un hématome y serait volumineux mais non compressif du névraxe) ; infection profonde ; grands volumes chez le sujet de faible poids (voir doses maximales).',
    'Corticoïde : diabète déséquilibré, infection évolutive. Le bénéfice du corticoïde dans ce bloc n\'est pas démontré (*à confirmer*) — le faire d\'abord en AL seul est défendable.',
  ],
  alternatives: 'Si une cible précise existe, la préférer : bloc intercostal ou bloc du rameau cutané latéral pour une douleur métamérique limitée, bloc paravertébral thoracique pour une couverture segmentaire fiable (mais risque de pneumothorax et classement hémorragique plus défavorable), bloc des branches médiales lombaires pour une douleur facettaire documentée, infiltration épidurale pour une radiculalgie. L\'ESP est le choix quand on veut **couvrir large avec un risque minimal**, ou quand les autres voies sont contre-indiquées. Dans le syndrome myofascial, il concurrence directement l\'infiltration des points gâchettes, avec l\'avantage de traiter tout le plan en une ponction.',

  anatomie: `Les muscles **érecteurs du rachis** (ilio-costal en dehors, longissimus au milieu, épineux en dedans) forment une colonne musculaire posée sur la face postérieure des **processus transverses** et des lames, entourée par le fascia thoraco-lombaire. Le « plan des érecteurs » est l\'**espace interfascial situé entre la face profonde de cette colonne et le périoste du processus transverse** : un plan virtuel, avasculaire, que l\'injectat ouvre.

De ce plan partent, en avant et en dehors, les **rameaux dorsaux** des nerfs spinaux (qui innervent les muscles paravertébraux, les articulations facettaires et la peau paravertébrale) et, plus en avant à travers les ligaments costo-transversaires, l\'espace **paravertébral** où cheminent les rameaux ventraux (nerfs intercostaux) et la chaîne sympathique.

### Ce qui compte pour le geste
- **Repère osseux thoracique** : le processus transverse thoracique est une structure **plate, large, à bord carré**, à 3 cm de la ligne médiane, à 2–4 cm de profondeur. À ne pas confondre avec la **côte**, plus latérale, plus étroite et **plus superficielle**, sous laquelle la plèvre glisse : si on voit la plèvre juste sous l\'os, on est sur la côte — il faut revenir en médial.
- **Repère osseux lombaire** : le processus transverse lombaire est plus profond (4–7 cm), plus étroit, avec de larges fenêtres inter-transversaires — et il n\'y a **pas de plèvre**, ce qui rend l\'ESP lombaire encore plus sûr.
- **Le mécanisme est inconstant.** Les études cadavériques et d\'imagerie montrent une diffusion très reproductible dans le plan interfascial sur **3 à 6 niveaux en crânio-caudal**, mais une diffusion **paravertébrale et épidurale variable, souvent partielle voire absente**. La conséquence clinique est directe : l\'ESP couvre de façon fiable les rameaux dorsaux et le compartiment myofascial, de façon **aléatoire** les rameaux ventraux. Un patient chez qui l\'ESP échoue ne doit pas être considéré comme « non répondeur aux blocs ».
- **Le volume fait la diffusion** : la longueur de nappe est proportionnelle au volume, d\'où les 20–30 mL usuels. C\'est aussi ce qui fait la contrainte toxicologique du geste, surtout en bilatéral.
- **Aucune structure noble sur le trajet** : le trajet crânio-caudal reste dans le muscle, et l\'os arrête l\'aiguille. C\'est ce qui en fait un bloc de niveau 1.`,

  installation: {
    patient: `**Procubitus**, coussin sous l\'abdomen, bras pendants de part et d\'autre de la table (l\'abduction des scapulas dégage les processus transverses hauts). Chez le patient qui ne tolère pas le procubitus — ce qui est fréquent en douleur chronique du rachis — le **décubitus latéral** côté à traiter vers le haut, ou la **position assise** penchée en avant sur une table, donnent une fenêtre équivalente.

Repérer et marquer le niveau : compter depuis C7 (processus épineux le plus saillant) au thorax, ou depuis le sacrum au niveau lombaire, en coupe para-sagittale. Marquer au feutre avant la désinfection.`,
    operateur: `Opérateur du côté à traiter, écran en face. Sonde **para-sagittale à 3 cm de la ligne médiane**, marqueur dirigé en crânial : l\'image montre alors le crânial à gauche. La ponction se fait **de crânial en caudal** dans le grand axe de la sonde (approche originale de Forero) — l\'aiguille aborde le processus transverse par au-dessus et le contact osseux arrête la progression. L\'approche caudo-crâniale est équivalente si l\'ergonomie l\'impose.`,
    sonde: `- Thoracique : **linéaire 6–13 MHz**, preset MSK, profondeur 4–5 cm, focale sur le processus transverse.
- Lombaire ou patient épais : **convexe 2–5 MHz**, profondeur 7–9 cm.
- Vérifier systématiquement, en glissant en latéral, que l\'os visé est bien le processus transverse et non la côte : au thorax, le glissement pleural apparaît **immédiatement sous la côte**, alors qu\'il n\'apparaît **qu\'entre** les processus transverses.
- Aiguille écho-visible : l\'angle est raide (45–60°) et le trajet long ; à défaut, hydrolocaliser par bolus de 0,5 mL.`,
  },

  reperage: [
    { titre: 'Compter le niveau en para-sagittal médian', texte: 'Sonde longitudinale sur la ligne des épineuses : compter depuis **C7** (l\'épineuse la plus saillante, qui ne bouge pas à la flexion-extension du cou, contrairement à C6) au thorax, ou depuis le **sacrum** au niveau lombaire. Marquer le niveau visé au feutre.' },
    { titre: 'Translater de 3 cm en dehors', texte: 'Garder la sonde para-sagittale et la translater de **3 cm** latéralement. On passe de l\'aspect ondulé des épineuses et des lames à une succession de **blocs osseux plats et carrés** : les processus transverses, avec leurs cônes d\'ombre et des fenêtres sombres entre eux.' },
    { titre: 'Identifier les couches musculaires', texte: 'De la superficie à la profondeur, au thorax haut : **trapèze**, **rhomboïde** (disparaît au-dessous de T7), puis **érecteur du rachis** (colonne épaisse, striée). Au niveau lombaire, le trapèze et le rhomboïde ont disparu : sous le fascia thoraco-lombaire superficiel, la colonne des érecteurs est directement au contact du plan cible.' },
    { titre: 'Vérifier qu\'on n\'est pas sur les côtes', texte: 'Glisser franchement en latéral : les côtes apparaissent — plus **superficielles**, plus **étroites**, convexes, et surtout avec le **glissement pleural immédiatement en dessous**. Revenir en médial jusqu\'à retrouver les blocs plats et l\'absence de plèvre sous l\'os. **Ce contrôle n\'est pas facultatif** : c\'est le seul mécanisme de sécurité du geste au thorax.' },
    { titre: 'Si on ne trouve pas les processus transverses', texte: 'Trois causes : sonde trop médiale (on voit les lames, ligne ondulée continue sans fenêtre), trop latérale (côtes + plèvre), ou trop peu de compression. Chez le patient épais, passer au convexe. Au niveau lombaire, la fenêtre est plus large et l\'erreur est moins possible.' },
  ],

  sonoanatomie: [
    { structure: 'Trapèze', aspect: 'Muscle superficiel mince, hypoéchogène strié', repere: 'Thorax haut et moyen uniquement' },
    { structure: 'Rhomboïde', aspect: 'Deuxième couche musculaire, mince', repere: 'Présent jusqu\'à T6-T7 ; absent en dessous et au niveau lombaire' },
    { structure: 'Érecteur du rachis', aspect: 'Colonne musculaire épaisse, fibres longitudinales, gris moyen ; fascia profond hyperéchogène', repere: 'La cible est **sous** son fascia profond' },
    { structure: 'Processus transverse thoracique', aspect: 'Bloc osseux **plat, large, carré**, hyperéchogène, cône d\'ombre franc', repere: '3 cm de la ligne médiane, 2–4 cm de profondeur' },
    { structure: 'Processus transverse lombaire', aspect: 'Relief plus étroit et plus profond, larges fenêtres inter-transversaires', repere: '4–7 cm de profondeur ; pas de plèvre en arrière-plan' },
    { structure: 'Plèvre (thorax)', aspect: 'Ligne hyperéchogène animée d\'un glissement, visible **entre** les processus transverses', repere: 'Si elle apparaît **sous** l\'os : on est sur une côte, revenir en médial' },
    { structure: 'Plan des érecteurs (cible)', aspect: 'Plan virtuel entre fascia profond de l\'érecteur et périoste ; devient une nappe anéchogène à l\'injection', repere: 'Le décollement du muscle est le critère de fin' },
    { structure: 'Ligament costo-transversaire (thorax)', aspect: 'Bande hyperéchogène oblique en avant du processus transverse', repere: 'Sépare le plan des érecteurs de l\'espace paravertébral' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Désinfection large, housse de sonde stérile. Seringues de 20 mL préparées et **étiquetées**, aiguille 21–22 G 80–100 mm montée sur prolongateur. Calculer d\'emblée la dose totale d\'AL si le bloc est bilatéral ou multi-niveaux.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point d\'entrée, 1–2 cm au-dessus du bord crânial de la sonde. Le trajet musculaire est long : l\'anesthésie cutanée seule ne suffit pas toujours, prévenir le patient.' },
    { titre: 'Ponction in-plane, de crânial en caudal', texte: 'Aiguille engagée à 45–60°, visualisée en continu, traversant trapèze, rhomboïde puis érecteur du rachis. **Aller au contact osseux du processus transverse** — c\'est l\'objectif, pas un accident : l\'os est la butée de sécurité. Puis retirer de 1 mm.' },
    { titre: 'Hydrolocalisation et test', texte: 'Aspiration, puis injecter **1–2 mL de sérum physiologique** : l\'image attendue est le **décollement linéaire de l\'érecteur du rachis du plan osseux**, une nappe anéchogène qui s\'étend en crânial et en caudal. Si le liquide reste sous forme d\'une bulle **dans** le muscle, la pointe est trop superficielle : avancer de 1–2 mm jusqu\'au contact osseux et recommencer.' },
    { titre: 'Injection fractionnée', texte: 'Injecter **20–30 mL** par bolus de 5 mL, en aspirant entre chaque, et en surveillant l\'extension de la nappe : elle doit dépasser les processus transverses sus- et sous-jacents. Le plan s\'ouvre à basse pression — une résistance franche signe une injection intramusculaire.' },
    { titre: 'Critère de fin et après le geste', texte: 'Critère de fin : **nappe hypoéchogène linéaire couvrant au moins 3 niveaux** entre l\'érecteur et les processus transverses, injection à basse pression, aucune diffusion vers l\'avant. Surveillance 30 min minimum (gros volume d\'AL). Tester le territoire au froid ou à la piqûre à 20–30 min et **noter l\'étendue métamérique réellement bloquée** : c\'est l\'information la plus utile pour la suite (elle dit si la diffusion paravertébrale a eu lieu chez ce patient). Consignes : pas de conduite le jour même, surveillance des signes de toxicité systémique.' },
  ],

  injectat: `| Objectif | Produits | Volume par côté | Commentaire |
|---|---|---|---|
| Bloc thérapeutique standard | Ropivacaïne 0,2–0,375 % (ou lévobupivacaïne 0,25 %) | **20–30 mL** | Le volume fait la longueur de la nappe. En dessous de 15 mL, la diffusion crânio-caudale devient trop courte |
| Bloc diagnostique / test de couverture | Lidocaïne 1 % ou ropivacaïne 0,2 % | 20 mL | Cartographier le territoire réellement bloqué à 30 min ; ne pas y ajouter de corticoïde |
| Avec corticoïde | AL + **dexaméthasone 4–8 mg** ou méthylprednisolone 40 mg | 20–30 mL | Bénéfice non démontré en douleur chronique (*à confirmer*). La dexaméthasone est le choix logique en interfascial : non particulaire, allongement documenté de la durée des blocs de plan |
| Syndrome myofascial / hydrodissection | Sérum physiologique ou dextrose 5 % 15–20 mL + lidocaïne 1 % | 20 mL | L\'effet mécanique de décollement du plan est ici l\'objectif, pas le bloc nerveux |
| Bilatéral | Diviser la concentration, pas le volume | 20 mL × 2 | Ropivacaïne 0,2 % 20 mL par côté = 80 mg au total : acceptable chez l\'adulte de poids normal |

**Doses maximales — le vrai enjeu de ce bloc.** Ropivacaïne **3 mg/kg**, lévobupivacaïne et bupivacaïne **2–2,5 mg/kg**, lidocaïne **4,5 mg/kg** (7 mg/kg adrénalinée). Pour un patient de 70 kg : plafond ropivacaïne ≈ 210 mg, soit **105 mL de ropivacaïne 0,2 %** ou 56 mL de 0,375 %. Un ESP bilatéral à 30 mL de ropivacaïne 0,375 % par côté = **225 mg : au-dessus du plafond**. En bilatéral, descendre à 0,2 %.

**Chariot d\'urgence et émulsion lipidique (Intralipide 20 %) disponibles et vérifiés** avant tout ESP à gros volume — c\'est un bloc de plan à forte surface d\'absorption, avec des pics plasmatiques rapides.

**Corticoïde** : si utilisé, non particulaire de préférence (dexaméthasone) ; il n\'y a aucune raison d\'utiliser un particulaire dans un plan interfascial.`,

  variantes: [
    { titre: 'ESP lombaire', texte: `Même principe, appliqué aux processus transverses lombaires (L2 à L4 selon la cible). Sonde convexe, cible à 4–7 cm, souvent **bilatérale** dans la lombalgie chronique. Avantages sur la version thoracique : pas de plèvre, fenêtre osseuse plus large, marge d\'erreur plus grande.

Indications en algologie : lombalgie chronique diffuse, douleur post-arthrodèse, syndrome myofascial des érecteurs lombaires, douleur de hanche et de fémur proximal (décrite par Tulgar et son équipe). C\'est aussi le geste d\'appoint le plus simple à faire en HDJ chez un patient anticoagulé.

Limite honnête : dans la lombalgie facettaire, l\'ESP **ne remplace pas** le bloc de branche médiale — il n\'a aucune valeur diagnostique et ne permet pas de sélectionner pour une radiofréquence.` },
    { titre: 'Cathéter dans le plan des érecteurs', texte: 'Techniquement simple (cathéter multiperforé de 18–19 G laissé 3–5 cm dans le plan) et très utilisé en péri-opératoire. **Sans intérêt en HDJ douleur** : la logistique de perfusion continue et le risque infectieux ne se justifient pas pour une prise en charge ambulatoire. À réserver aux situations d\'hospitalisation (crise douloureuse rebelle, poussée de zona hyperalgique en hospitalisation).' },
    { titre: 'Radiofréquence pulsée du plan des érecteurs', texte: `Décrite, avec des données limitées à des séries et des cas cliniques (*niveau de preuve très faible, à confirmer*). Principe : après un bloc test positif, aiguille RF 22 G 100 mm placée au contact du processus transverse, extrémité active dans le plan, paramètres usuels des protocoles de PRF (**42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**), puis injection d\'AL.

À proposer uniquement au patient qui répond franchement et de façon répétée au bloc mais dont l\'effet ne dure pas. Ne pas le présenter comme une technique validée.` },
    { titre: 'ESP haut thoracique (T2-T3) pour la ceinture scapulaire', texte: 'Cible les rameaux dorsaux hauts et, de façon inconstante, la diffusion paravertébrale cervico-thoracique. Décrit dans la douleur d\'épaule et le syndrome myofascial du trapèze supérieur. **Le bloc suprascapulaire reste très supérieur en niveau de preuve pour l\'épaule** : réserver l\'ESP haut aux douleurs à composante myofasciale paravertébrale dominante.' },
    { titre: 'Blocs de plan voisins', texte: 'Bloc **rétrolaminaire** (même aiguille, cible sur la lame au lieu du processus transverse) : diffusion plus limitée. Bloc du **plan inter-costo-transversaire** et bloc du **plan du muscle multifide** : variantes plus profondes, censées améliorer la diffusion paravertébrale, encore peu documentées en douleur chronique.' },
  ],

  pearls: [
    'Le seul contrôle de sécurité qui compte au thorax : glisser en latéral pour voir les côtes et la plèvre, puis revenir en médial. Si on n\'a pas vu la plèvre, on ne sait pas où l\'on est.',
    'Aller délibérément au contact osseux : l\'os est la butée. C\'est ce qui rend ce bloc accessible et sûr.',
    'Le critère de réussite est visuel et immédiat : le muscle se **décolle** de l\'os en une nappe linéaire. Une bulle intramusculaire = pointe trop superficielle.',
    'Injecter 1–2 mL de sérum d\'abord : on vérifie le plan sans gaspiller d\'AL et sans risque si la position est mauvaise.',
    'Cartographier le territoire bloqué à 30 min et le noter : c\'est la seule façon de savoir, chez CE patient, si la diffusion paravertébrale a eu lieu.',
    'En bilatéral, baisser la concentration et non le volume : c\'est le volume qui fait la diffusion, la concentration qui fait la toxicité.',
    'Chez le patient anticoagulé pour qui un bloc paravertébral ou une épidurale sont exclus, c\'est le geste rachidien qui reste disponible.',
  ],
  pieges: [
    'Prendre une côte pour un processus transverse : ponction en avant de la côte → **pneumothorax**. C\'est la seule complication grave du geste, et elle est entièrement évitable par le balayage latéral.',
    'Injecter dans le muscle faute d\'atteindre l\'os : bloc inefficace, patient étiqueté à tort « non répondeur ».',
    'Promettre une couverture métamérique fiable : la diffusion paravertébrale est inconstante. Annoncer un objectif de fenêtre thérapeutique.',
    'Dépasser la dose maximale d\'AL en bilatéral, surtout avec des concentrations élevées ou chez le sujet âgé et maigre.',
    'Utiliser l\'ESP comme test avant une radiofréquence facettaire : il n\'a aucune valeur diagnostique de niveau.',
    'Répéter indéfiniment un bloc dont l\'effet ne dure que la durée de l\'AL, sans plan B (réévaluation de la cible, PRF, prise en charge non interventionnelle).',
    'Négliger la surveillance post-geste : gros volume, plan très vascularisé, pics plasmatiques rapides.',
  ],
  complications: [
    '**Pneumothorax** : rare, décrit, uniquement par confusion avec la côte ou par progression au-delà du processus transverse. Conduite à tenir : arrêt, surveillance clinique, échographie pulmonaire (abolition du glissement pleural, point poumon), radiographie ; drainage si mal toléré ou volumineux.',
    '**Toxicité systémique aux anesthésiques locaux (LAST)** : le risque principal, du fait du volume et de la vascularisation du plan. Signes prodromiques (goût métallique, acouphènes, agitation, dysarthrie) → arrêt immédiat, oxygène, émulsion lipidique 20 % 1,5 mL/kg en bolus puis 0,25 mL/kg/min, appel à l\'aide.',
    'Injection intravasculaire directe (artère segmentaire) : aspiration répétée, injection fractionnée par 5 mL.',
    'Hématome du plan : sans gravité, sans compression neurologique — le plan est loin du canal.',
    'Bloc moteur des érecteurs, sensation d\'instabilité ou de faiblesse du tronc pendant quelques heures : à annoncer, éviter la conduite le jour même.',
    'Diffusion épidurale ou paravertébrale involontaire : possible avec les gros volumes → hypotension, bloc sensitif étendu, exceptionnellement bloc moteur des membres inférieurs. Surveillance hémodynamique et test de la marche avant la sortie.',
    'Effets systémiques des corticoïdes : hyperglycémie, flush, insomnie.',
  ],
  securite: [
    'Repérage complet **avant** la ponction, incluant l\'identification positive de la plèvre en latéral et son absence sous la cible.',
    'Contact osseux systématique : il borne la profondeur d\'aiguille.',
    'Dose totale d\'AL calculée en mg/kg **avant** de préparer les seringues, surtout en bilatéral ou multi-niveaux. Chariot d\'urgence et émulsion lipidique vérifiés.',
    'Aspiration avant chaque bolus de 5 mL ; jamais d\'injection en un seul temps.',
    'Surveillance 30 min minimum avec contrôle tensionnel et test de la marche.',
    'Risque hémorragique faible (site superficiel, compressible, à distance du névraxe) : c\'est l\'argument qui permet de le proposer sous antiagrégant. *La classification ASRA-ESRA 2018 individualise mal les blocs de plan du tronc — à confirmer sur le texte princeps.*',
  ],

  suivi: `- **J0** : EN avant / à 30 min, et surtout **cartographie du territoire bloqué** (froid ou piqûre) — noter les métamères couverts. C\'est ce qui distingue un ESP « myofascial » d\'un ESP à diffusion paravertébrale, et cela oriente la suite.
- **J7–J15** : EN, retentissement sur le sommeil et les activités, consommation d\'antalgiques. Un effet qui dépasse nettement la durée de l\'AL est fréquent dans la névralgie post-zostérienne et le syndrome myofascial : c\'est le signal qui justifie de répéter.
- **J30** : décision. Trois cas de figure — effet prolongé et reproductible → répéter (raisonnablement 3 à 4 fois par an si corticoïde) ; effet limité à la durée de l\'AL mais franc → discuter la PRF du plan ou reconsidérer la cible ; aucun effet → **ne pas répéter**, et rechercher une autre cible plutôt que d\'augmenter le volume.
- Toujours coupler à un programme actif (kinésithérapie, réentraînement, travail postural) : l\'ESP ouvre une fenêtre, il ne traite rien à lui seul.
- Tracer le volume, la concentration, la dose en mg/kg et le territoire bloqué : c\'est ce qui rend le geste reproductible d\'une séance à l\'autre et défendable en cas de contrôle.`,

  evidence: `- **Description princeps (Forero et coll., 2016)** : série de cas de **douleur thoracique neuropathique chronique** soulagée par un bloc interfascial au contact du processus transverse — c\'est bien de l\'algologie que ce bloc est né, pas de l\'anesthésie.
- **Douleur aiguë péri-opératoire** : le volume de preuve est **considérable et globalement favorable** (nombreux ECR et méta-analyses en chirurgie thoracique, mammaire, abdominale et rachidienne : réduction de la consommation morphinique et des scores de douleur). **Ce niveau de preuve n\'est pas transférable à la douleur chronique** — ni les critères de jugement, ni les durées de suivi, ni les populations ne sont comparables. C\'est le point sur lequel la littérature ESP est le plus souvent surinterprétée.
- **Douleur chronique** : la preuve se limite à des **séries de cas, des cas cliniques et quelques essais randomisés de petite taille** — névralgie post-zostérienne, douleur post-thoracotomie, lombalgie chronique. Niveau de preuve **faible**. Aucune donnée robuste sur la durée d\'effet au-delà de quelques semaines.
- **Mécanisme** : les travaux cadavériques et d\'imagerie (études de diffusion, IRM après injection) concordent sur une diffusion **constante dans le plan interfascial sur plusieurs niveaux** et une diffusion **paravertébrale et épidurale inconstante et partielle**. Les revues de mécanisme des blocs de plan (équipe de Chin, notamment) concluent que l\'effet clinique associe blocage des rameaux dorsaux, diffusion paravertébrale variable et absorption systémique de l\'AL. **Il n\'existe pas de consensus sur le mécanisme.**
- **PRF du plan des érecteurs** : cas cliniques et petites séries uniquement. Niveau de preuve **très faible** ; à ne proposer qu\'après réponse répétée au bloc test.
- **Le trou de la littérature** : aucun essai randomisé de bonne taille comparant l\'ESP à un comparateur actif (bloc paravertébral, bloc de branche médiale, infiltration de points gâchettes) **en douleur chronique**, et aucune donnée d\'efficacité au-delà de 3 mois. Toute affirmation de bénéfice durable serait une extrapolation.`,

  references: [
    { auteurs: 'Forero M, Adhikary SD, Lopez H, Tsui C, Chin KJ', titre: 'The erector spinae plane block: a novel analgesic technique in thoracic neuropathic pain', revue: 'Regional Anesthesia and Pain Medicine', annee: '2016', type: 'série de cas', note: 'Description princeps, en douleur chronique.', verif: false },
    { auteurs: 'Forero M, Rajarathinam M, Adhikary S, Chin KJ', titre: 'Erector spinae plane block for the management of chronic shoulder pain: a case report', revue: 'Canadian Journal of Anaesthesia', annee: '2018', type: 'cas clinique', verif: false },
    { auteurs: 'Chin KJ, El-Boghdadly K', titre: 'Mechanisms of action of the erector spinae plane (ESP) block: a narrative review', revue: 'Canadian Journal of Anaesthesia', annee: '2021', type: 'revue', note: 'Synthèse de référence sur l\'incertitude mécanistique.', verif: false },
    { auteurs: 'Ivanusic J, Konishi Y, Barrington MJ', titre: 'A cadaveric study investigating the mechanism of action of erector spinae blockade', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'anatomie', note: 'Diffusion interfasciale constante, diffusion paravertébrale inconstante.', verif: false },
    { auteurs: 'Adhikary SD, Bernard S, Lopez H, Chin KJ', titre: 'Erector spinae plane block versus retrolaminar block: a magnetic resonance imaging and anatomical study', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', type: 'anatomie', verif: false },
    { auteurs: 'Chin KJ, Lirk P, Hollmann MW, Schwarz SKW', titre: 'Mechanisms of action of fascial plane blocks: a narrative review', revue: 'Regional Anesthesia and Pain Medicine', annee: '2021', type: 'revue', verif: false },
    { auteurs: 'Tulgar S, Selvi O, Senturk O, et al.', titre: 'Clinical experiences of ultrasound-guided lumbar erector spinae plane block for hip joint and proximal femur surgeries', revue: 'Journal of Clinical Anesthesia', annee: '2018', type: 'série de cas', note: 'Référence usuelle de l\'ESP lombaire.', verif: false },
    { auteurs: 'Kot P, Rodriguez P, Granell M, et al.', titre: 'The erector spinae plane block: a narrative review', revue: 'Korean Journal of Anesthesiology', annee: '2019', type: 'revue', verif: false },
    { auteurs: 'De Cassai A, Bonvicini D, Correale C, et al.', titre: 'Erector spinae plane block: a systematic qualitative review', revue: 'Minerva Anestesiologica', annee: '2019', type: 'revue systématique', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'esp-sono', section: 'sonoanatomie', titre: 'Coupe para-sagittale thoracique à 3 cm de la ligne médiane — plan des érecteurs',
      legende: 'Trapèze, rhomboïde puis érecteur du rachis reposent sur les processus transverses, blocs osseux plats et carrés avec cône d\'ombre. La plèvre n\'est visible qu\'entre les processus transverses : si elle apparaît directement sous l\'os, la sonde est sur les côtes et il faut revenir en médial. La cible est le plan virtuel entre le fascia profond de l\'érecteur et le périoste.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Para-sagittal, 3 cm de la ligne médiane', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 106 L0 112 Z', label: 'Trapèze', at: [96, 92], opacity: 0.45 });
        S.fascia({ points: [[0, 112], [640, 106]], width: 1.4 });
        S.muscle({ path: 'M0 112 L640 106 L640 150 L0 158 Z', label: 'Rhomboïde', at: [96, 136], opacity: 0.45 });
        S.fascia({ points: [[0, 158], [640, 150]], width: 1.4 });
        S.muscle({ path: 'M0 158 L640 150 L640 244 L0 252 Z', label: 'Érecteur du rachis', at: [130, 202], opacity: 0.5 });
        S.fascia({ points: [[0, 252], [640, 244]], width: 2, opacity: 0.95 });
        S.bone({ path: 'M56 262 L152 260', label: 'PT sus-jacent', at: [104, 300], small: true });
        S.bone({ path: 'M246 262 L342 260' });
        S.bone({ path: 'M436 264 L532 262' });
        S.label({ x: 294, y: 300, text: 'Processus transverse', cls: 'lbl-bone', small: true });
        S.label({ x: 484, y: 302, text: 'PT sous-jacent', cls: 'lbl-bone', small: true });
        S.pleura({ points: [[162, 332], [238, 334]] });
        S.pleura({ points: [[352, 334], [428, 336]] });
        S.pleura({ points: [[542, 336], [618, 338]] });
        S.label({ x: 200, y: 362, text: 'Plèvre (visible entre les PT)', anchor: 'middle', cls: 'lbl-pleura', small: true });
        S.target({ x: 294, y: 252, r: 13 });
        S.label({ x: 300, y: 224, text: 'Cible : plan sous-fascial, au contact du PT', small: true });
      },
    },
    {
      id: 'esp-bloc', section: 'technique', titre: 'ESP thoracique — aiguille in-plane crânio-caudale, contact osseux',
      legende: 'L\'aiguille aborde le processus transverse par au-dessus et va délibérément au contact osseux : l\'os est la butée de sécurité du geste. Après retrait de 1 mm, l\'injectat doit décoller l\'érecteur du rachis du périoste et fuser en nappe crânio-caudale sur au moins trois niveaux. Une bulle qui reste dans le muscle signe une pointe trop superficielle.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Para-sagittal', type: 'in-plane crânio-caudal' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 106 L0 112 Z', label: 'Trapèze', at: [90, 92], opacity: 0.45 });
        S.muscle({ path: 'M0 112 L640 106 L640 150 L0 158 Z', label: 'Rhomboïde', at: [90, 136], opacity: 0.45 });
        S.muscle({ path: 'M0 158 L640 150 L640 244 L0 252 Z', label: 'Érecteur du rachis', at: [148, 214], opacity: 0.5 });
        S.fascia({ points: [[0, 252], [640, 244]], width: 2, opacity: 0.95 });
        S.bone({ path: 'M56 262 L152 260' });
        S.bone({ path: 'M246 262 L342 260' });
        S.bone({ path: 'M436 264 L532 262' });
        S.label({ x: 104, y: 300, text: 'PT', cls: 'lbl-bone', small: true });
        S.label({ x: 294, y: 300, text: 'Processus transverse', cls: 'lbl-bone', small: true });
        S.label({ x: 484, y: 302, text: 'PT', cls: 'lbl-bone', small: true });
        S.pleura({ points: [[352, 334], [428, 336]] });
        S.label({ x: 390, y: 362, text: 'Plèvre', cls: 'lbl-pleura', small: true });
        S.needle({ from: [8, 90], to: [292, 254], label: '21 G 90 mm' });
        S.spreadPath({ path: 'M60 236 L540 228 L540 254 L60 262 Z', at: [400, 200], label: '20–30 mL — nappe sur ≥ 3 niveaux' });
      },
    },
  ],

  checklist: [
    'Niveau compté (depuis C7 au thorax, depuis le sacrum au niveau lombaire) et marqué au feutre',
    'Balayage latéral fait : côtes et plèvre identifiées, puis retour en médial — l\'os visé est bien un processus transverse',
    'Dose totale d\'AL calculée en mg/kg avant préparation des seringues (bilatéral et multi-niveaux compris)',
    'Émulsion lipidique 20 % et chariot d\'urgence vérifiés et immédiatement disponibles',
    'Contact osseux obtenu et décollement musculaire visualisé avant d\'injecter le volume complet',
    'Territoire métamérique bloqué cartographié et noté à 30 min',
    'Surveillance 30 min avec test de la marche et contrôle tensionnel avant la sortie',
  ],
});
