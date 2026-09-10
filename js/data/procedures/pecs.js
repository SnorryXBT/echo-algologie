/* Fiche : blocs PECS I et II (plan inter-pectoral et plan pecto-serratus). */
ECHO.register({
  id: 'pecs',
  titre: 'Blocs PECS I et II — plan inter-pectoral et plan pecto-serratus',
  titreCourt: 'PECS I et II',
  en: 'Ultrasound-guided pectoral nerves blocks (PECS I and PECS II) — interpectoral plane block and pectoserratus plane block',
  region: 'thorax',
  types: ['bloc'],
  niveau: 2,
  grade: 'Forte en péri-opératoire de chirurgie mammaire (méta-analyses d\'ECR) · faible en douleur chronique constituée (séries)',
  motsCles: ['PECS', 'pectoral nerves block', 'plan inter-pectoral', 'interpectoral plane block', 'pecto-serratus', 'pectoserratus', 'Blanco', 'post-mastectomie', 'PMPS', 'paroi thoracique antérieure', 'intercosto-brachial', 'prothèse mammaire'],
  maj: '2026-09',
  resume: 'Deux blocs de fascia superposés de la paroi thoracique antérieure, décrits par Blanco en 2011 puis 2012. Le **PECS I** dépose 10 mL entre grand et petit pectoral, autour de la branche pectorale de l\'artère thoraco-acromiale : il vise les **nerfs pectoraux** latéral et médial, donc essentiellement la composante musculaire et la douleur d\'expandeur ou de prothèse rétro-pectorale. Le **PECS II** y ajoute 20 mL entre petit pectoral et dentelé antérieur, à hauteur de la 3e–4e côte : il atteint le **nerf intercosto-brachial**, les **branches cutanées latérales de T2–T6** et le **nerf thoracique long**, c\'est-à-dire le territoire du curage axillaire et de la paroi latérale. La nomenclature consensuelle ASRA-ESRA a renommé ces blocs *interpectoral plane block* et *pectoserratus plane block* : les deux dénominations coexistent, il faut savoir lire les deux. En algologie, l\'indication centrale est le syndrome douloureux post-mastectomie, en bloc test puis en fenêtre thérapeutique. C\'est un geste plus technique et plus risqué que le serratus : plèvre, vaisseaux axillaires et surtout **implant mammaire** sont sur ou près du trajet.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, bras du côté à traiter en abduction 90° et rotation externe, main sous la nuque ou sur un appui-bras ; léger proclive si dyspnée',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 4–5 cm ; convexe si IMC élevé ou reconstruction épaisse',
    approche: 'in-plane', approcheNote: 'sonde para-sagittale oblique sous le tiers latéral de la clavicule, glissée en dehors et en bas jusqu\'à la 3e–4e côte ; ponction de médial/crânial vers latéral/caudal',
    aiguille: '21–22 G, 80–100 mm écho-visible (le trajet est long et oblique)',
    cible: 'PECS I : plan entre grand et petit pectoral, autour de la branche pectorale de l\'artère thoraco-acromiale. PECS II : plan entre la face profonde du petit pectoral et le **dentelé antérieur** (au-dessus du dentelé, pas sur la côte), à hauteur de la 3e–4e côte. Critère de fin : décollement linéaire du plan, jamais une lentille intramusculaire',
    injectat: 'PECS II 20 mL puis PECS I 10 mL, ropivacaïne 0,2–0,375 % (30 mL au total)',
    duree: '15–20 min pour les deux injections',
  },

  indications: [
    'Syndrome douloureux post-mastectomie (PMPS) : c\'est l\'indication de référence, surtout après curage axillaire (territoire intercosto-brachial) ou reconstruction rétro-pectorale.',
    'Douleur chronique de la paroi thoracique antérieure : post-tumorectomie, post-radique, post-thoracotomie antérieure, douleur pariétale après pose de PAC ou de stimulateur.',
    'Douleur et contracture des pectoraux après reconstruction par prothèse ou expandeur (« animation pain », spasme du grand pectoral) : le PECS I seul est souvent suffisant et diagnostique.',
    'Névralgie intercosto-brachiale, en alternative ou en complément du bloc du plan du dentelé (PECS II).',
    'Bloc test avant escalade : identifier si la douleur relève de la paroi antérieure (PECS) ou latérale (serratus), avant d\'envisager une radiofréquence intercostale ciblée.',
    'Zona thoracique antérieur en phase aiguë et névralgie post-zostérienne antérieure (données faibles, à confirmer).',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides.',
    'Relatives : troubles de l\'hémostase — blocs superficiels et compressibles, classés à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures douleur ; pas d\'arrêt systématique des antiagrégants.',
    '**Implant ou expandeur mammaire** : contre-indication relative forte du PECS II du côté opéré. La prothèse rétro-pectorale déplace les plans et se trouve souvent sur le trajet ; une ponction de l\'enveloppe est une complication chirurgicale. Ne faire le geste que si l\'implant est identifié et évité en permanence, ou se limiter au PECS I au-dessus du muscle.',
    'Poids faible, insuffisance hépatique, grand âge : 30 mL cumulés imposent un calcul en mg/kg.',
    'Anatomie modifiée : lambeau, radiodermite majeure, adénopathies axillaires volumineuses — repérage plus difficile, plèvre parfois superficialisée.',
    'Corticoïdes : diabète déséquilibré, infection évolutive, chirurgie mammaire programmée à court terme.',
  ],
  alternatives: 'Bloc du plan du dentelé antérieur (plus simple, plus sûr, mais couverture latérale seulement — fiche dédiée) ; bloc paravertébral thoracique T2–T6 (couverture la plus complète, y compris para-sternale et postérieure, au prix d\'un risque de pneumothorax et d\'extension épidurale) ; bloc ESP ; blocs pecto-intercostal ou para-sternal pour la douleur strictement médiane. En pratique algologique : commencer par le **serratus** si la douleur est latérale et axillaire, par le **PECS** si elle est antérieure, rétro-mammaire ou liée à une prothèse. Réserver le paravertébral aux échecs des deux, en structure adaptée.',

  anatomie: `La paroi thoracique antérieure est innervée par deux systèmes distincts qu\'il faut séparer mentalement : les **nerfs pectoraux** (moteurs, pour les muscles) et les **branches des nerfs intercostaux** (sensitives, pour la peau et la glande).

Le **nerf pectoral latéral** (C5–C7, corde latérale) et le **nerf pectoral médial** (C8–T1, corde médiale) portent des noms trompeurs : ils sont nommés d\'après le cordon d\'origine, pas d\'après leur position. Le nerf pectoral latéral chemine dans le **plan inter-pectoral**, accompagné de la **branche pectorale de l\'artère thoraco-acromiale** — repère Doppler du PECS I. Le nerf pectoral médial traverse le **petit pectoral** puis innerve le grand pectoral ; il est atteint par une injection dans l\'un ou l\'autre plan.

Le **plan pecto-serratus** (entre petit pectoral et dentelé antérieur), abordé à hauteur de la 3e–4e côte sur la ligne axillaire antérieure, contient le **nerf intercosto-brachial** (branche cutanée latérale de T2), les **branches cutanées latérales** des nerfs intercostaux T3–T6 et le **nerf thoracique long**. C\'est le compartiment de la douleur du curage axillaire et de la face interne du bras.

### Ce qui compte pour le geste
- **PECS I ≠ PECS II.** Le PECS I est un bloc essentiellement **moteur et musculaire** : il soulage le spasme du grand pectoral et la douleur d\'expandeur, mais il ne couvre pas la peau du sein ni l\'aisselle. Attendre de lui une analgésie cutanée est la première cause de « bloc raté ».
- **Le PECS II est la partie utile en douleur chronique** : c\'est lui qui atteint l\'intercosto-brachial et les branches cutanées latérales. Il recouvre partiellement le territoire du bloc du plan du dentelé, en plus antérieur.
- **Ce qui n\'est jamais couvert** : les branches cutanées **antérieures** (para-sternales, issues des mêmes intercostaux mais émergeant près du sternum) et les rameaux postérieurs. Une douleur para-sternale médiane relève d\'un bloc pecto-intercostal ou para-sternal, pas du PECS.
- **Profondeurs habituelles** : plan inter-pectoral 1,5–3 cm, plan pecto-serratus 2,5–4 cm, plèvre 3,5–5 cm — plus profond et plus variable qu\'au niveau du dentelé, d\'où le niveau 2.
- **Les repères vasculaires structurent le geste** : branche pectorale de l\'artère thoraco-acromiale dans le plan inter-pectoral, **artère thoracique latérale** en dehors, vaisseaux axillaires en haut. Doppler systématique avant chaque ponction.
- **La côte donne le niveau, pas la profondeur.** Le plan pecto-serratus est situé **entre la face profonde du petit pectoral et le dentelé antérieur** — donc *au-dessus* du dentelé, qui reste interposé entre la pointe et la côte. Le repère costal (3e–4e) sert à se situer en hauteur ; c'est le **dentelé** qui est le plancher du geste, et c'est lui qui tient la pointe à distance de la plèvre. Poser la pointe « sur la côte » revient à traverser le dentelé et à faire un bloc du plan du dentelé profond, ce qui n'est pas la même couverture.`,

  installation: {
    patient: `**Décubitus dorsal**, bras du côté à traiter en **abduction à 90° et rotation externe** (main derrière la nuque ou sur un appui) : cette position étale le grand pectoral, dégage le creux axillaire et rapproche le petit pectoral de la surface. Léger proclive chez la patiente dyspnéique ou obèse.

Chez la patiente mastectomisée, palper et marquer la cicatrice, le sillon sous-mammaire résiduel et, s\'il existe, le **contour de la prothèse ou de l\'expandeur** ; noter la position du port d\'injection d\'un expandeur (aimant métallique) qui peut gêner l\'échographie. Chez la patiente non opérée, marquer la clavicule et le processus coracoïde.`,
    operateur: `Opérateur **du côté à traiter, à hauteur de l\'épaule** ; écran en face, de l\'autre côté de la table. La sonde part sous le tiers latéral de la clavicule, en position **para-sagittale oblique**, et glisse vers le bas et le dehors en comptant les côtes jusqu\'à la 3e ou 4e.

Ponction **dans le plan, de médial-crânial vers latéral-caudal**, l\'aiguille entrant par le bord supéro-médial de la sonde. Ce sens éloigne progressivement la pointe de la plèvre et amène la trajectoire tangentiellement aux plans. Faire d\'abord le temps **profond** (PECS II) puis retirer l\'aiguille dans le plan inter-pectoral pour le temps **superficiel** (PECS I) : une seule ponction cutanée, deux injections.`,
    sonde: `- Linéaire 6–13 MHz, preset nerf ou MSK, profondeur **4–5 cm** (la plèvre doit rester dans le champ).
- Focale sur le plan visé, gain réglé pour distinguer les deux fascias (inter-pectoral et pecto-serratus) qui sont proches et fins.
- **Doppler couleur systématique** : branche pectorale de l\'artère thoraco-acromiale dans le plan inter-pectoral, artère thoracique latérale en dehors, vaisseaux intercostaux sous le bord inférieur des côtes.
- Vérifier le **glissement pleural** avant et après le geste.
- En cas de prothèse : l\'enveloppe apparaît comme une ligne hyperéchogène régulière avec contenu anéchogène homogène — l\'identifier formellement et la garder à l\'écran pendant toute la ponction.`,
  },

  reperage: [
    { titre: 'Départ sous-claviculaire', texte: 'Sonde **para-sagittale sous le tiers latéral de la clavicule**. Identifier de la superficie à la profondeur : graisse, **grand pectoral**, **petit pectoral**, puis les côtes. À ce niveau on peut aussi apercevoir les vaisseaux axillaires en haut — repère à ne pas confondre avec la branche pectorale.' },
    { titre: 'Doppler dans le plan inter-pectoral', texte: 'Chercher la **branche pectorale de l\'artère thoraco-acromiale** entre grand et petit pectoral : c\'est le repère du PECS I. Elle est fine, pulsatile, souvent accompagnée d\'une veine satellite.' },
    { titre: 'Glisser vers le bas et le dehors, compter les côtes', texte: 'Translater la sonde en direction du creux axillaire en comptant les côtes jusqu\'à la **3e ou 4e côte** (ligne axillaire antérieure). À ce niveau le **petit pectoral** se termine en biseau et le **dentelé antérieur** apparaît sous lui : le plan pecto-serratus est ouvert.' },
    { titre: 'Identifier le bord latéral du petit pectoral', texte: 'C\'est le repère clé du PECS II : la pointe doit être posée **sous le bord latéro-inférieur du petit pectoral**, à la surface du dentelé antérieur, à hauteur de la 3e–4e côte — pas au contact de la côte, qui reste sous le dentelé. Si le petit pectoral n\'est plus visible, la sonde est trop latérale — on est alors dans un bloc du plan du dentelé, ce qui n\'est pas la même couverture.' },
    { titre: 'Vérifier la plèvre et l\'implant', texte: 'Noter la profondeur peau–plèvre et le glissement pleural. Chez la patiente reconstruite, identifier l\'enveloppe de la prothèse et son rapport aux muscles : une prothèse **rétro-pectorale** occupe le plan que l\'on vise et interdit le geste tel quel.' },
    { titre: 'Si on ne trouve pas les plans', texte: 'Revenir au dentelé : suivre sa surface hyperéchogène, moulée sur les côtes, et hydrodisséquer au contact de son fascia superficiel — le plan s\'ouvre. Le repère costal sert à confirmer le niveau, pas à poser la pointe. Si le petit pectoral reste invisible (sujet très mince, post-radique), renoncer au PECS II et faire un bloc du plan du dentelé, plus fiable dans ces conditions.' },
  ],

  sonoanatomie: [
    { structure: 'Grand pectoral', aspect: 'Muscle épais et strié, le plus superficiel après la graisse et la glande', repere: 'Occupe toute la largeur du champ' },
    { structure: 'Plan inter-pectoral', aspect: 'Interface hyperéchogène fine entre les deux pectoraux', repere: 'Cible du PECS I ; contient la branche pectorale de l\'artère thoraco-acromiale' },
    { structure: 'Branche pectorale de l\'a. thoraco-acromiale', aspect: 'Petit vaisseau pulsatile en Doppler, souvent accompagné d\'une veine', repere: 'Signe le plan inter-pectoral ; à éviter avec l\'aiguille' },
    { structure: 'Petit pectoral', aspect: 'Muscle lenticulaire, plus mince, se terminant en biseau vers le bas et le dehors', repere: 'Son bord latéro-inférieur est le repère du PECS II' },
    { structure: 'Plan pecto-serratus', aspect: 'Interface entre la face profonde du petit pectoral et le dentelé antérieur', repere: 'Cible du PECS II, à hauteur de la 3e–4e côte ; le dentelé reste interposé entre la pointe et la côte' },
    { structure: 'Dentelé antérieur', aspect: 'Muscle appliqué sur les côtes, moulé sur les arcs costaux', repere: 'Le muscle « qui suit l\'os »' },
    { structure: 'Côtes (3e et 4e)', aspect: 'Arcs hyperéchogènes convexes avec cône d\'ombre franc', repere: 'Donnent le **niveau**, pas la profondeur : le plancher du PECS II est le dentelé, pas la côte' },
    { structure: 'Plèvre', aspect: 'Ligne brillante animée du glissement respiratoire', repere: 'Doit rester dans le champ pendant tout le geste' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Voie veineuse recommandée (30 mL cumulés). Désinfection large du thorax antérieur et du creux axillaire, housse de sonde. Deux seringues étiquetées : 20 mL pour le temps profond, 10 mL pour le temps superficiel. Aiguille 21–22 G 80–100 mm sur prolongateur purgé.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point de ponction, au bord supéro-médial de la sonde. Utile ici : le trajet est long et traverse deux muscles.' },
    { titre: 'Temps profond — PECS II', texte: 'Ponction dans le plan, de médial-crânial vers latéral-caudal, angle 30–45°. Traverser grand puis petit pectoral et poser la pointe **sous le bord latéro-inférieur du petit pectoral**, au contact du fascia superficiel du **dentelé antérieur**, à hauteur de la 3e–4e côte. Ne pas chercher le contact osseux : le dentelé est le plancher. Aspiration, hydrolocalisation par 1–2 mL de sérum : le décollement doit être **linéaire**, entre petit pectoral et dentelé.' },
    { titre: 'Injection profonde', texte: '20 mL fractionnés par 5 mL, aspiration entre chaque, en suivant la progression de la nappe vers le creux axillaire. Contact verbal maintenu avec la patiente à chaque bolus.' },
    { titre: 'Temps superficiel — PECS I', texte: 'Retirer l\'aiguille **sans sortir de la peau** jusqu\'au plan inter-pectoral, à distance de la branche pectorale repérée au Doppler. Hydrolocalisation, puis **10 mL** fractionnés : le grand pectoral doit se décoller du petit pectoral sur plusieurs centimètres.' },
    { titre: 'Critère de fin', texte: 'Deux nappes hypoéchogènes distinctes et linéaires, l\'une entre petit pectoral et dentelé, l\'autre entre les deux pectoraux, sans lentille intramusculaire, sans disparition de l\'injectat, plèvre intacte et glissement conservé.' },
    { titre: 'Après le geste', texte: 'Contrôler le glissement pleural. Cartographier le territoire anesthésié à 20–30 min (test du froid) : c\'est ce qui donne au bloc sa valeur diagnostique et qui distinguera, en cas d\'échec, l\'erreur d\'indication de l\'échec technique. Surveillance 30 min. EN avant / 30 min / 24 h.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| PECS II (temps profond) — bloc test ou thérapeutique | Ropivacaïne 0,2–0,375 % ± dexaméthasone 4–8 mg | **20 mL** | C\'est le temps utile en douleur chronique (intercosto-brachial, branches cutanées latérales T2–T6) |
| PECS I (temps superficiel) | Ropivacaïne 0,2–0,375 % | **10 mL** | Nerfs pectoraux : spasme musculaire, douleur d\'expandeur ou de prothèse rétro-pectorale. Inutile si la douleur est purement cutanée |
| Bloc test diagnostique pur | Lidocaïne 1 % | 10 + 20 mL | Effet court, cartographie à 20–30 min ; ne pas ajouter de corticoïde à un geste purement diagnostique |
| PECS I isolé (douleur d\'implant, spasme du pectoral) | Ropivacaïne 0,2 % ± dexaméthasone | 10 mL | Un PECS I isolé est un geste court et de faible risque, souvent suffisant pour trancher |

**Doses maximales à recalculer avant de préparer les seringues** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Ordres de grandeur : 30 mL de ropivacaïne 0,375 % = **112,5 mg** ; 30 mL de ropivacaïne 0,5 % = **150 mg**, à réserver au sujet de plus de 50 kg et sans autre bloc dans la séance. Ne jamais associer un PECS complet et un bloc du plan du dentelé homolatéral sans recalculer : les deux gestes cumulés atteignent facilement 50–60 mL.

Les blocs de fascia ont une **absorption systémique élevée** : diluer plutôt que concentrer, fractionner, garder l\'émulsion lipidique 20 % accessible.

**Pas de corticoïde particulaire** : aucun intérêt démontré sur un plan de fascia, risque d\'atrophie et de dépigmentation en cas de reflux sous-cutané, chez des patientes dont la peau est souvent déjà fragilisée par la radiothérapie. Si adjuvant, dexaméthasone (hors AMM en périnerveux, à tracer).`,

  variantes: [
    { titre: 'Nomenclature : PECS ou plans anatomiques ?', texte: `La nomenclature consensuelle ASRA-ESRA sur les blocs de paroi a remplacé les éponymes par des noms anatomiques : **PECS I = *interpectoral plane block* (bloc du plan inter-pectoral)** et **PECS II = *pectoserratus plane block* (bloc du plan pecto-serratus)**, le « PECS II » complet correspondant à l\'association des deux injections. Les deux vocabulaires coexistent dans la littérature et dans les comptes rendus : écrire les deux dans le dossier évite toute ambiguïté à la relecture, notamment en cas de contrôle.` },
    { titre: 'PECS I isolé pour la douleur d\'implant', texte: 'Après reconstruction rétro-pectorale, une part de la douleur vient de la contracture du grand pectoral sur la prothèse (douleur à la contraction, à l\'antépulsion, reproduite à la palpation du muscle). Un PECS I isolé de 10 mL est alors un excellent test : s\'il abolit la douleur à la contraction, la piste est musculaire (toxine botulique, rééducation, avis plastique sur le repositionnement de l\'implant) et non neuropathique.' },
    { titre: 'Association PECS + serratus', texte: 'Pour un PMPS étendu couvrant la paroi antérieure et la paroi latérale, l\'association d\'un bloc interpectoral et d\'un bloc du plan du dentelé superficiel a été évaluée dans un essai randomisé contre placebo en prévention de la douleur persistante après mastectomie totale. En douleur chronique constituée, l\'association est possible mais la contrainte est la **dose cumulée d\'AL** — c\'est elle qui limite, pas la technique.' },
    { titre: 'Escalade après bloc test positif', texte: 'Il n\'existe pas de radiofréquence « du plan PECS » : un plan interfascial n\'est pas une cible lésionnelle. Après un PECS II franchement positif mais bref et reproductible, l\'escalade documentée passe par les **nerfs intercostaux** correspondants (RF pulsée, thermique ou refroidie selon les équipes), identifiés au préalable par des blocs intercostaux étagés sélectifs. Pour la douleur para-sternale médiane, ce sont les branches cutanées antérieures et le plan pecto-intercostal qui sont visés.' },
    { titre: 'Cathéter inter-pectoral', texte: 'Décrit en péri-opératoire de chirurgie mammaire lourde. En douleur chronique, l\'intérêt en HDJ est nul (surveillance, risque infectieux) ; à réserver à une hospitalisation pour poussée douloureuse tumorale pariétale.' },
  ],

  pearls: [
    'Décider avant de piquer ce que l\'on cherche : douleur cutanée et axillaire → le temps utile est le PECS II ; douleur à la contraction du pectoral → le PECS I suffit et tranche.',
    'Une seule ponction cutanée, deux injections : faire le temps profond d\'abord, puis retirer dans le plan inter-pectoral. L\'inverse fait perdre la fenêtre (l\'injectat superficiel dégrade l\'image du plan profond).',
    'Le bord latéro-inférieur du petit pectoral est le repère qui distingue un vrai PECS II d\'un bloc du plan du dentelé mal placé.',
    'Doppler avant chaque temps, pas seulement au départ : la branche pectorale se déplace avec la sonde.',
    'Chez la patiente reconstruite, chercher l\'implant **avant** de préparer les seringues, pas pendant la ponction.',
    'Cartographier et dessiner le territoire anesthésié à 30 min : c\'est ce qui rendra exploitable un geste intercostal ciblé plus tard.',
  ],
  pieges: [
    'Attendre du PECS I une analgésie cutanée : ce sont des nerfs moteurs, l\'échec est prévisible et n\'est pas technique.',
    'Attendre du PECS une couverture para-sternale ou dorsale : les branches cutanées antérieures et postérieures ne sont pas dans ces plans.',
    'Confondre plan inter-pectoral et plan pecto-serratus quand les deux fascias sont proches : hydrolocaliser systématiquement avant d\'injecter le volume.',
    'Descendre jusqu\'au contact osseux en croyant sécuriser le geste : on traverse alors le dentelé et l\'on quitte le plan pecto-serratus — le plancher du PECS II est le dentelé, pas la côte.',
    'Ponctionner l\'enveloppe d\'une prothèse ou d\'un expandeur : complication chirurgicale, pas anesthésique. Identifier l\'implant ou renoncer.',
    'Perdre la plèvre de vue pour « mieux voir » les plans superficiels en réduisant la profondeur.',
    'Enchaîner PECS complet + serratus homolatéral sans recalculer la dose totale d\'AL : c\'est le scénario de toxicité systémique le plus réaliste de cette fiche.',
  ],
  complications: [
    '**Pneumothorax** : risque réel du temps profond, plus élevé qu\'au niveau du dentelé (plan plus profond, plèvre plus proche du trajet). CAT : arrêt du geste, échographie pleurale immédiate (perte du glissement, point poumon), surveillance, radiographie et avis si symptomatique.',
    '**Ponction d\'implant ou d\'expandeur mammaire** : dégonflement, nécessité de reprise chirurgicale. Prévention par identification échographique formelle et abandon du temps profond si l\'implant est sur le trajet.',
    '**Toxicité systémique des AL (LAST)** : volumes cumulés élevés et absorption interfasciale importante. Prodromes (goût métallique, acouphènes, dysarthrie, agitation) → arrêt immédiat, oxygène, émulsion lipidique 20 %.',
    'Ponction vasculaire : branche pectorale de l\'artère thoraco-acromiale, artère thoracique latérale, veines satellites — hématome de la loge pectorale ou axillaire, compressible. Doppler préalable.',
    'Bloc moteur transitoire des pectoraux (antépulsion, adduction) et parfois du dentelé (scapula ailée passagère) : attendu, à annoncer, 6–12 h.',
    'Extension au plexus brachial si la ponction est trop haute et trop **latérale**, vers la région infra-claviculaire sous le processus coracoïde, où les cordons cheminent sous le petit pectoral avec les vaisseaux axillaires : bloc du membre supérieur transitoire, à prévenir par un repérage costal correct (rester à hauteur de la 3e–4e côte) et par le Doppler.',
  ],
  securite: [
    'Blocs superficiels et compressibles : **faible risque hémorragique** (ASRA-ESRA 2018, procédures douleur) — pas d\'arrêt systématique des antiagrégants ; anticoagulants au cas par cas.',
    'Doppler couleur avant chaque temps ; pointe d\'aiguille jamais perdue de vue ; plèvre à l\'écran en permanence.',
    'Dose totale d\'AL calculée en mg/kg **et écrite** avant de préparer les seringues. Voie veineuse et émulsion lipidique 20 % disponibles.',
    'Aspiration avant chaque bolus de 5 mL, injection fractionnée, contact verbal maintenu.',
    'Échographie pleurale de contrôle après le geste ; glissement noté dans le compte rendu.',
    'Chez toute patiente reconstruite : documenter dans le compte rendu que l\'implant a été identifié et évité.',
  ],

  suivi: `- **J0** : EN avant / 30 min / 24 h, **cartographie du territoire anesthésié** (croquis), test du froid, douleur à la contraction du pectoral avant et après (c\'est le critère qui sépare la composante musculaire de la composante neuropathique), tolérance.
- **J15–J30** : EN moyenne et maximale, DN4, sommeil, consommation d\'antalgiques, amplitude de l\'épaule (l\'enraidissement est le vrai facteur d\'invalidité du PMPS), reprise de la kinésithérapie. Décision : répéter (2 à 3 fois au plus, avec un bénéfice qui doit croître), passer à un bloc intercostal étagé sélectif, ou changer de registre (traitement neuropathique systémique, toxine botulique si composante musculaire pure, désensibilisation).
- **3 mois** : durée réelle de l\'effet, fonction de l\'épaule, retentissement thymique. Deux blocs dont l\'effet n\'excède pas la durée pharmacologique de l\'AL closent la stratégie « bloc de fascia » : passer à autre chose.
- Toujours couplé à la rééducation de l\'épaule et à la désensibilisation cutanée : le bloc ouvre une fenêtre, il ne traite pas.`,

  evidence: `- **Descriptions princeps (Blanco 2011 puis Blanco 2012)** : PECS I entre grand et petit pectoral, puis PECS II ajoutant l\'injection pecto-serratus. Ce sont des descriptions techniques et des séries, pas des essais d\'efficacité.
- **Nomenclature (consensus Delphi ASRA-ESRA, Reg Anesth Pain Med 2021)** : renommage en *interpectoral plane block* et *pectoserratus plane block*. Recommandation de pratique, pas de niveau d\'efficacité.
- **Douleur aiguë après chirurgie mammaire** : plusieurs méta-analyses d\'ECR (notamment Versyck 2019 et Hussain 2019) concluent à une réduction significative de la douleur post-opératoire et de la consommation d\'opioïdes par rapport au traitement standard, avec un effet globalement comparable au bloc paravertébral et un meilleur profil de sécurité. Preuve **forte** dans ce cadre.
- **Comparaison au paravertébral** : ECR (dont Kulhari 2016) et méta-analyses en faveur d\'une efficacité au moins équivalente du PECS II, avec moins de complications. Preuve **modérée**.
- **Prévention de la douleur chronique post-mastectomie** : un essai randomisé contre placebo en triple aveugle a évalué l\'association bloc interpectoral + serratus superficiel sur la douleur persistante à 6 mois. Signal favorable, mais la littérature préventive reste hétérogène (protocoles, définitions de la douleur persistante, durées de suivi). Preuve **modérée**.
- **Traitement de la douleur chronique constituée (PMPS, douleur d\'implant, névralgie intercosto-brachiale)** : c\'est le trou de la littérature — séries, cas cliniques et pratique d\'experts, **aucun essai contrôlé**. Preuve **faible**. L\'usage se justifie par la sécurité relative du geste et par sa valeur diagnostique, pas par un niveau de preuve d\'efficacité en chronique.
- **Radiofréquence dans ces plans** : aucune donnée. Ce qui existe concerne les nerfs intercostaux et, en para-sternal, le plan pecto-intercostal.`,

  references: [
    { auteurs: 'Blanco R', titre: 'The \'pecs block\': a novel technique for providing analgesia after breast surgery', revue: 'Anaesthesia', annee: '2011', type: 'description princeps', verif: false },
    { auteurs: 'Blanco R, Fajardo M, Parras Maldonado T', titre: 'Ultrasound description of Pecs II (modified Pecs I): a novel approach to breast surgery', revue: 'Rev Esp Anestesiol Reanim', annee: '2012', type: 'description princeps', verif: false },
    { auteurs: 'El-Boghdadly K, Wolmarans M, Stengel AD, et al.', titre: 'Standardizing nomenclature in regional anesthesia: an ASRA-ESRA Delphi consensus study of abdominal wall, paraspinal, and chest wall blocks', revue: 'Reg Anesth Pain Med', annee: '2021', type: 'consensus / nomenclature', verif: false },
    { auteurs: 'Versyck B, van Geffen GJ, Chin KJ', titre: 'Analgesic efficacy of the Pecs II block: a systematic review and meta-analysis', revue: 'Anaesthesia', annee: '2019', type: 'méta-analyse', verif: false },
    { auteurs: 'Hussain N, Brull R, McCartney CJL, et al.', titre: 'Pectoralis-II myofascial block and analgesia in breast cancer surgery: a systematic review and meta-analysis', revue: 'Anesthesiology', annee: '2019', type: 'méta-analyse', verif: false },
    { auteurs: 'Kulhari S, Bharti N, Bala I, Arora S, Singh G', titre: 'Efficacy of pectoral nerve block versus thoracic paravertebral block for postoperative analgesia after radical mastectomy: a randomized controlled trial', revue: 'Br J Anaesth', annee: '2016', type: 'ECR', verif: false },
    { auteurs: 'Versyck B, van Geffen GJ, Van Houwe P', titre: 'Prospective double blind randomized placebo-controlled clinical trial of the pectoral nerves (Pecs) block type II', revue: 'J Clin Anesth', annee: '2017', type: 'ECR', verif: false },
    { auteurs: 'Woodworth GE, Ivie RMJ, Nelson SM, Walker CM, Maniker RB', titre: 'Perioperative breast analgesia: a qualitative review of anatomy and regional techniques', revue: 'Reg Anesth Pain Med', annee: '2017', type: 'revue anatomique', verif: false },
    { auteurs: '—', titre: 'The combination of interpectoral plane and superficial serratus anterior plane blocks for the prevention of persistent pain after total mastectomy: a triple-blinded, randomised, placebo-controlled trial', revue: '—', pmid: '41006194', type: 'ECR', verif: true, note: 'Revue et année non affichées dans le résultat consulté.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
  ],
  videos: [
    { titre: 'Pectoralis and serratus plane nerve blocks', source: 'NYSORA', url: 'https://www.nysora.com/topics/regional-anesthesia-for-specific-surgical-procedures/thorax/pectoralis-serratus-plane-blocks/', note: 'anatomie, coupes et technique des deux blocs' },
  ],

  scenes: [
    {
      id: 'pecs-repere', section: 'sonoanatomie', titre: 'Coupe para-sagittale oblique, 3e–4e côte — les deux plans superposés',
      legende: 'De la superficie à la profondeur : grand pectoral, plan inter-pectoral (branche pectorale de l\'artère thoraco-acromiale, nerf pectoral latéral) = cible du PECS I ; petit pectoral se terminant en biseau ; plan pecto-serratus = cible du PECS II ; dentelé antérieur moulé sur les côtes, puis plèvre.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial / médial', right: 'Caudal / latéral' }).probeInfo({ plan: 'Para-sagittale oblique sous-claviculaire', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 82 L640 82 L640 138 L0 142 Z', label: 'Grand pectoral', at: [80, 112] });
        S.fascia({ points: [[0, 142], [640, 138]], width: 1.8 });
        S.muscle({ path: 'M80 158 Q270 142 460 166 L456 196 Q270 214 84 186 Z', label: 'Petit pectoral', at: [250, 182], opacity: 0.55 });
        S.muscle({ path: 'M0 214 L640 214 L640 296 Q580 300 520 298 Q460 254 400 298 Q330 306 262 298 Q200 254 138 298 Q70 302 0 296 Z', label: 'Dentelé antérieur', at: [86, 248], opacity: 0.5 });
        S.muscle({ path: 'M262 298 Q330 306 400 298 L398 332 Q330 344 264 332 Z', opacity: 0.45 });
        S.bone({ path: 'M142 300 Q200 256 258 300', label: '3e côte', at: [190, 372] });
        S.bone({ path: 'M404 300 Q460 256 518 300', label: '4e côte', at: [470, 372] });
        S.pleura({ points: [[266, 336], [330, 344], [396, 336]], label: 'Plèvre', at: [330, 362], small: true });
        S.lung({ path: 'M260 348 L402 348 L410 420 L252 420 Z', label: 'Poumon', at: [330, 400], small: true });
        S.artery({ x: 386, y: 141, r: 5.5, label: 'A. thoraco-acromiale\n(br. pectorale)', lx: 434, ly: 106, small: true, lead: [391, 134] });
        S.nerve({ x: 200, y: 145, r: 4.5, label: 'N. pectoral latéral', lx: 200, ly: 118, small: true, lead: [200, 140] });
        S.label({ x: 508, y: 154, text: 'Plan inter-pectoral (PECS I)', cls: 'lbl-target', small: true });
        S.label({ x: 300, y: 208, text: 'Plan pecto-serratus (PECS II)', cls: 'lbl-target', small: true });
        S.label({ x: 500, y: 244, text: 'Bord latéro-inférieur\ndu petit pectoral', small: true, lead: [458, 194] });
      },
    },
    {
      id: 'pecs-bloc', section: 'technique', titre: 'Une ponction, deux injections — PECS II puis PECS I',
      legende: 'Aiguille dans le plan, de médial-crânial vers latéral-caudal. ① Temps profond : pointe sous le bord latéro-inférieur du petit pectoral, à la surface du dentelé antérieur (au-dessus de la 4e côte), 20 mL. ② L\'aiguille est ensuite retirée dans le plan inter-pectoral, à distance de la branche pectorale, pour 10 mL. Le critère de fin est un décollement linéaire, jamais une lentille intramusculaire.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Crânial / médial', right: 'Caudal / latéral' }).probeInfo({ plan: 'Para-sagittale oblique', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 82 L640 82 L640 138 L0 142 Z', label: 'Grand pectoral', at: [110, 124] });
        S.fascia({ points: [[0, 142], [640, 138]], width: 1.8 });
        S.muscle({ path: 'M80 158 Q270 142 460 166 L456 196 Q270 214 84 186 Z', label: 'Petit pectoral', at: [268, 184], opacity: 0.55 });
        S.muscle({ path: 'M0 214 L640 214 L640 296 Q580 300 520 298 Q460 254 400 298 Q330 306 262 298 Q200 254 138 298 Q70 302 0 296 Z', label: 'Dentelé antérieur — plancher du geste', at: [200, 250], opacity: 0.5, small: true });
        S.muscle({ path: 'M262 298 Q330 306 400 298 L398 332 Q330 344 264 332 Z', opacity: 0.45 });
        S.bone({ path: 'M142 300 Q200 256 258 300', label: '3e côte', at: [190, 374] });
        S.bone({ path: 'M404 300 Q460 256 518 300', label: '4e côte', at: [470, 374] });
        S.pleura({ points: [[266, 336], [330, 344], [396, 336]], label: 'Plèvre — jamais hors champ', at: [332, 364], small: true });
        S.artery({ x: 386, y: 141, r: 5.5, label: 'A. thoraco-acromiale', lx: 470, ly: 120, small: true, lead: [392, 136] });
        S.target({ x: 440, y: 204, r: 15 });
        S.target({ x: 296, y: 146, r: 13 });
        S.spread({ x: 396, y: 207, rx: 112, ry: 9, delay: 1.4, dur: 1.0, label: '20 mL' });
        S.spread({ x: 268, y: 146, rx: 92, ry: 8, delay: 3.4, dur: 0.9, label: '10 mL' });
        S.needle({ from: [6, 100], to: [432, 205], delay: 0.2, dur: 1.2, label: '① 22 G 80 mm — PECS II (profond)' });
        S.needle({ from: [6, 100], to: [300, 149], delay: 2.4, dur: 1.0 });
        S.label({ x: 120, y: 320, text: '② même point de ponction :\nretrait dans le plan inter-pectoral (PECS I)', cls: 'lbl-needle', small: true, anchor: 'middle' });
      },
    },
  ],

  checklist: [
    'Objectif du geste tranché avant la ponction : PECS I (composante musculaire / implant) ou PECS II (composante cutanée et axillaire), ou les deux',
    'Prothèse ou expandeur recherché et identifié à l\'échographie avant de préparer les seringues ; abandon du temps profond si l\'implant est sur le trajet',
    'Dose totale d\'AL recalculée en mg/kg et écrite (30 mL cumulés, absorption interfasciale élevée)',
    'Émulsion lipidique 20 % et voie veineuse disponibles ; surveillance 30 min',
    'Glissement pleural vérifié avant ET après le geste, noté dans le compte rendu',
    'Territoire anesthésié cartographié à 20–30 min et douleur à la contraction du pectoral testée avant / après',
    'Compte rendu mentionnant les deux nomenclatures (PECS I / plan inter-pectoral ; PECS II / plan pecto-serratus) et le niveau costal',
  ],
});
