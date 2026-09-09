/* Fiche : nerf cutané latéral de la cuisse — méralgie paresthésique. Bloc, hydrodissection, PRF, cryoneurolyse. */
ECHO.register({
  id: 'nerf-cutane-lateral-cuisse',
  titre: 'Nerf cutané latéral de la cuisse — méralgie paresthésique',
  titreCourt: 'N. cutané latéral cuisse',
  en: 'Lateral femoral cutaneous nerve (LFCN) block — meralgia paresthetica; ultrasound-guided hydrodissection, pulsed radiofrequency, cryoneurolysis',
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: 'Faible à modérée (séries, petits ECR ; pas de méta-analyse robuste ni de comparaison directe avec la chirurgie)',
  maj: '2026-09',
  motsCles: ['méralgie paresthésique', 'LFCN', 'nerf fémoro-cutané', 'EIAS', 'ligament inguinal', 'sartorius', 'tenseur du fascia lata', 'hydrodissection', 'dextrose 5 %', 'PRF', 'cryoneurolyse', 'Bernhardt-Roth'],
  resume: 'La méralgie paresthésique est le modèle du syndrome canalaire purement sensitif : brûlures, dysesthésies et hypoesthésie de la face antéro-latérale de la cuisse, sans aucun déficit moteur — ce qui en fait une cible idéale pour les techniques ablatives, puisqu’il n’y a rien de moteur à perdre. Le diagnostic est clinique ; le bloc échoguidé sert d’abord à le confirmer, puis à traiter. La difficulté est anatomique : le nerf est fin (1 à 3 mm), et son passage à hauteur de l’épine iliaque antéro-supérieure est le siège de variantes majeures — au-dessus, à travers ou sous le ligament inguinal, parfois jusqu’à plusieurs centimètres en dedans de l’EIAS. La stratégie qui marche est de ne pas le chercher là où il est variable, mais un peu plus bas, dans le tunnel graisseux constant entre sartorius et tenseur du fascia lata.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal strict, membre en rotation neutre ; ne pas mettre de coussin qui fléchisse la hanche (le fascia lata se détend et l’interstice se referme)',
    sonde: 'lineaire', sondeNote: 'haute fréquence 12–18 MHz, profondeur 2–3 cm ; sonde « hockey stick » très utile chez le sujet mince',
    approche: 'in-plane', approcheNote: 'coupe transverse 1–2 cm sous l’EIAS ; ponction latéro-médiale ou médio-latérale selon la fenêtre',
    aiguille: '25 G 40–50 mm (22 G si hydrodissection de volume) ; aiguille RF 22 G 50–54 mm à extrémité active 5 mm pour la PRF ; sonde cryo 14–16 G',
    cible: 'Espace graisseux péri-neural sous le fascia lata, entre sartorius et tenseur du fascia lata : le nerf doit apparaître **entouré d’injectat sur 360°**',
    injectat: '3–5 mL (2–3 mL suffisent pour un bloc diagnostique) : AL ± corticoïde, ou dextrose 5 % pour l’hydrodissection',
    duree: '10 min bloc · 25–30 min PRF',
  },

  indications: [
    '**Méralgie paresthésique** confirmée cliniquement (brûlures, dysesthésies, hypoesthésie de la face antéro-latérale de la cuisse, sans déficit moteur ni atteinte réflexe), après échec des mesures étiologiques.',
    '**Bloc diagnostique** : confirmer l’origine tronculaire quand le tableau peut relever d’une radiculalgie L2-L3, d’une coxarthrose ou d’une pathologie du psoas. Une abolition franche des symptômes pendant la durée de l’AL est l’argument décisif.',
    'Méralgie **post-opératoire ou post-traumatique** : prélèvement de crête iliaque, arthroplastie de hanche par voie antérieure, chirurgie du rachis en décubitus ventral, ceinture de sécurité, port de charge sur harnais.',
    'Méralgie **de la grossesse** ou de l’obésité : le bloc soulage en attendant la correction du facteur causal (accouchement, perte de poids), qui reste le traitement de fond.',
    '**Bloc test avant PRF ou cryoneurolyse** chez un patient dont la réponse à l’AL est franche mais brève.',
    'Douleur neuropathique réfractaire malgré un traitement médicamenteux adapté (gabapentinoïde, tricyclique, topique lidocaïne).',
  ],
  contreIndications: [
    '**Absolues** : infection cutanée locale, refus, allergie au produit.',
    '**Relatives** : troubles majeurs de l’hémostase (site superficiel et compressible, donc rarement bloquant), diabète déséquilibré si corticoïde.',
    '**Le corticoïde particulaire est déconseillé** à ce site : nerf très superficiel, risque d’atrophie graisseuse et de dépigmentation visibles ; préférer un corticoïde soluble à dose basse, ou s’en passer (dextrose 5 %, AL seul).',
    '**Risque hémorragique faible** (ASRA-ESRA 2018) : bloc superficiel sur site compressible — pas d’arrêt des antiagrégants ; anticoagulants au cas par cas.',
    '**Ne pas traiter avant d’avoir éliminé une cause compressive** : masse abdomino-pelvienne, hématome du psoas, grossesse méconnue, tumeur rétropéritonéale. Une méralgie d’installation rapide chez un patient sans facteur mécanique évident impose une imagerie avant tout geste.',
    'RF thermique : à éviter en première intention (risque de dysesthésies de déafférentation) — cf. Variantes.',
  ],
  alternatives: 'Le premier traitement est **étiologique** : desserrer ce qui comprime (ceinture, vêtements serrés, corset, harnais professionnel), perdre du poids, corriger une posture ou une position opératoire. Une proportion notable des méralgies régresse spontanément une fois le facteur causal supprimé — l’annoncer évite des gestes inutiles. Traitement médicamenteux de la douleur neuropathique : gabapentinoïde, amitriptyline, emplâtre de lidocaïne 5 % (particulièrement adapté ici, la zone étant superficielle et bien délimitée). Puis, par ordre d’escalade : bloc AL ± corticoïde, **hydrodissection** répétée, **PRF**, **cryoneurolyse**, et enfin la chirurgie — neurolyse-décompression ou neurectomie. La neurectomie donne les taux de succès les plus élevés dans les séries mais laisse une anesthésie définitive du territoire, que le patient doit accepter explicitement ; la décompression préserve la sensibilité au prix d’un taux de récidive plus élevé. Aucun essai comparatif direct entre gestes percutanés et chirurgie n’est disponible.',

  anatomie: `Le nerf cutané latéral de la cuisse naît du plexus lombaire (**L2-L3**, parfois L1-L3), émerge du bord latéral du psoas, croise le muscle iliaque en oblique **sous le fascia iliaca**, puis franchit la région inguinale au voisinage de l’**épine iliaque antéro-supérieure (EIAS)** avant de se diviser en une branche antérieure et une branche postérieure destinées à la peau de la face antéro-latérale de la cuisse, jusqu’au genou.

Il est **purement sensitif** : aucun déficit moteur n’est attendu ni possible par atteinte isolée de ce nerf. C’est le point qui autorise les techniques ablatives.

**Les variantes du passage inguinal sont la règle, pas l’exception.** Les études cadavériques décrivent le nerf passant sous le ligament inguinal, à travers ses fibres, au-dessus de lui, ou même par-dessus la crête iliaque en arrière de l’EIAS ; sa position par rapport à l’EIAS varie de quelques millimètres à plusieurs centimètres en dedans, et il peut traverser le sartorius. La description classique « 1 à 2 cm en dedans et en dessous de l’EIAS » n’est vraie que dans une fraction des cas — c’est ce qui explique les échecs des blocs faits sur repères palpatoires.

Une fois la région inguinale franchie, le nerf devient **constant** : il chemine dans un **espace graisseux triangulaire** entre le **sartorius** (en dedans) et le **tenseur du fascia lata** (en dehors), immédiatement **sous le fascia lata**. Plus bas encore (5–10 cm sous l’EIAS), il devient franchement sous-cutané, au bord antérieur du sartorius.

### Ce qui compte pour le geste
- **Ne pas chercher le nerf là où il est variable.** La cible fiable est l’interstice graisseux sartorius / tenseur du fascia lata, 1 à 3 cm sous l’EIAS : c’est là que la sono-anatomie est reproductible.
- **Aspect échographique** : structure ovale ou fusiforme hypoéchogène de **1 à 3 mm** (jusqu’à 4–5 mm si le nerf est épaissi en amont d’une compression), avec parfois un fin liseré hyperéchogène. Il faut une sonde haute fréquence et une image agrandie ; à 8 MHz on ne le voit pas.
- **Deux méthodes de repérage**, l’une descendante depuis l’EIAS, l’autre **ascendante** depuis la cuisse moyenne où le nerf est plus gros et plus superficiel, puis suivi en remontant. La méthode ascendante est la plus fiable chez le sujet difficile.
- **Doppler** : une branche de l’artère circonflexe iliaque superficielle croise fréquemment la zone — la distinguer du nerf, et l’éviter.
- **Profondeur** : 0,5 à 2 cm, rarement plus. C’est un des blocs les plus superficiels du membre inférieur, d’où le risque cosmétique des corticoïdes particulaires.
- **Diffusion médiale = bloc fémoral.** Un volume excessif ou une injection trop médiale et trop profonde peut atteindre le nerf fémoral et faire dérober le quadriceps. Volume modeste et cible latérale.`,

  installation: {
    patient: `**Décubitus dorsal strict**, membre inférieur en rotation neutre, hanche en extension. Ne pas glisser de coussin sous le genou : la flexion de hanche détend le fascia lata et referme l’interstice graisseux que l’on cherche.

Repérer et **marquer l’EIAS** au feutre — c’est le seul repère osseux du geste. Marquer également le trajet approximatif du sartorius. Désinfection large, du pli inguinal au tiers moyen de la cuisse.

Chez la femme enceinte, installer en décubitus latéral gauche partiel avec un coin sous la hanche droite, en gardant la cuisse à traiter accessible.`,
    operateur: `Opérateur du **côté à traiter**, écran en face. Sonde tenue en prise haute, appui du bord cubital sur la cuisse : le nerf mesure 1 à 3 mm, la moindre dérive de la sonde le fait disparaître.

Ponction **in-plane**, de latéral en médial le plus souvent (on part du tenseur du fascia lata vers l’interstice), ce qui éloigne la trajectoire du nerf fémoral. L’abord médio-latéral est possible si la fenêtre est meilleure, à condition de rester superficiel.

Prévoir une aiguille fine (25 G) : elle suffit largement à ce niveau et diminue l’inconfort d’un geste réalisé sur une peau très sensible chez ces patients.`,
    sonde: `- **Linéaire haute fréquence 12–18 MHz**, ou « hockey stick » ; preset nerf superficiel, profondeur **2–3 cm**, focale à 1 cm, gain modéré.
- Agrandir l’image (zoom) : à taille normale, un nerf de 2 mm passe inaperçu.
- **Doppler couleur à basse PRF** systématique : la branche de l’artère circonflexe iliaque superficielle traverse la zone et ressemble, en coupe, à une petite structure ronde hypoéchogène.
- Beaucoup de gel, peu de pression : une compression ferme aplatit l’interstice graisseux et fait disparaître le nerf.
- Comparer au côté sain en cas de doute : un nerf épaissi d’un côté par rapport à l’autre est un argument diagnostique.`,
  },

  reperage: [
    { titre: 'Poser la sonde sur l’EIAS', texte: 'Sonde **transversale** à cheval sur l’EIAS : repérer la corticale hyperéchogène et son ombre. C’est le point zéro. Le nerf n’est pas fiable ici — on ne fait que se situer.' },
    { titre: 'Descendre de 1 à 3 cm', texte: 'Translater la sonde vers le bas et légèrement en dedans, en restant transversale. Apparaissent, sous le **fascia lata** (fine ligne hyperéchogène continue), deux ventres musculaires : le **sartorius** en dedans (triangulaire, s’insérant sur l’EIAS) et le **tenseur du fascia lata** en dehors. Entre les deux, un **coin graisseux hyperéchogène** : c’est le tunnel du nerf.' },
    { titre: 'Identifier le nerf dans le tunnel', texte: 'Dans ce coin graisseux, chercher une structure **ovale ou fusiforme, hypoéchogène, de 1 à 3 mm**, immédiatement sous le fascia lata. Zoomer. Basculer légèrement la sonde pour faire varier l’anisotropie : le nerf « s’allume » puis s’éteint, ce qui aide à le distinguer d’un septum graisseux.' },
    { titre: 'Méthode ascendante — quand la première échoue', texte: 'Si le nerf reste introuvable, changer de stratégie : placer la sonde **5 à 10 cm sous l’EIAS**, au bord antérieur du sartorius, où le nerf est plus volumineux et franchement sous-cutané. Une fois identifié, le **suivre en remontant** pas à pas (*traceback*) jusqu’au niveau souhaité. C’est la méthode la plus fiable chez le patient obèse ou après chirurgie.' },
    { titre: 'Doppler et différentiel', texte: 'Activer le Doppler : éliminer une branche de l’**artère circonflexe iliaque superficielle**. Un vaisseau se comprime et pulse, le nerf non. Vérifier aussi qu’on ne prend pas un septum fibro-graisseux pour le nerf — le septum ne change pas d’aspect à la bascule de la sonde.' },
    { titre: 'Rechercher le site de conflit', texte: 'Remonter jusqu’au ligament inguinal en suivant le nerf : un **changement brutal de calibre** (nerf épaissi en amont, aplati au passage) signe le site de compression, et c’est là qu’une hydrodissection a le plus de sens. Noter le type de passage observé (sous, à travers, au-dessus du ligament) : c’est une information utile si une chirurgie est envisagée.' },
  ],

  sonoanatomie: [
    { structure: 'Fascia lata', aspect: 'Fine ligne hyperéchogène continue, superficielle', repere: 'Toit du tunnel ; le nerf est juste en dessous' },
    { structure: 'Sartorius', aspect: 'Ventre musculaire triangulaire, strié, en dedans', repere: 'S’insère sur l’EIAS ; borne médiale du tunnel' },
    { structure: 'Tenseur du fascia lata', aspect: 'Ventre musculaire strié, en dehors', repere: 'Borne latérale du tunnel' },
    { structure: 'Tunnel graisseux inter-musculaire', aspect: 'Coin hyperéchogène entre les deux muscles', repere: 'Contient le nerf — la cible de l’injection' },
    { structure: 'Nerf cutané latéral de la cuisse', aspect: 'Ovale hypoéchogène de **1–3 mm**, parfois liseré hyperéchogène ; épaissi (4–5 mm) en amont d’un conflit', repere: 'Sous le fascia lata, dans le coin graisseux' },
    { structure: 'EIAS', aspect: 'Corticale hyperéchogène avec ombre franche', repere: 'Point zéro du repérage, 1–3 cm au-dessus de la cible' },
    { structure: 'A. circonflexe iliaque superficielle (branche)', aspect: 'Petit vaisseau pulsatile, Doppler positif, compressible', repere: 'Le principal faux ami du nerf' },
    { structure: 'Droit fémoral / ilion', aspect: 'Plan musculaire profond puis corticale iliaque', repere: 'Limite profonde ; le nerf fémoral est bien plus en dedans' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Aiguille **25 G 40–50 mm** montée sur seringue de 5 mL avec prolongateur court. Housse de sonde ou champage adapté ; gel stérile. Image zoomée sur le tunnel graisseux avant de piquer, nerf au centre de l’écran.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 25 G ; systématique avant une aiguille RF ou une sonde de cryoneurolyse. 0,5–1 mL de lidocaïne 1 % au point d’entrée, en évitant d’inonder le champ (l’anesthésique cutané masque le nerf).' },
    { titre: 'Ponction in-plane latéro-médiale', texte: 'Entrée à 1–2 cm du bord latéral de la sonde, angle très plat (15–25°), progression **sous le fascia lata** en direction du coin graisseux. Visualiser l’aiguille sur toute sa longueur. Ne pas viser le nerf : viser **l’espace immédiatement à son contact**.' },
    { titre: 'Hydrolocalisation', texte: 'Injecter 0,3–0,5 mL de sérum physiologique ou de dextrose 5 % : il doit apparaître une petite nappe anéchogène qui **écarte les plans** autour du nerf. Si le liquide part dans le muscle, la pointe est trop profonde ; s’il part en superficie, elle n’a pas franchi le fascia lata.' },
    { titre: 'Injection circonférentielle fractionnée', texte: 'Aspiration, puis injection par fractions de 0,5–1 mL, en repositionnant la pointe une fois de part et d’autre du nerf. **Critère de fin : le nerf apparaît entouré d’injectat sur 360°**, « flottant » dans une logette anéchogène. Volume total 3–5 mL — 2–3 mL suffisent pour un bloc diagnostique.' },
    { titre: 'Ne pas déborder en dedans', texte: 'Surveiller la diffusion : elle doit rester dans le compartiment graisseux. Une nappe qui fuse en dedans et en profondeur, vers le fascia iliaca, annonce un **bloc fémoral** et une faiblesse du quadriceps. Arrêter l’injection dans ce cas.' },
    { titre: 'Après le geste', texte: 'Cartographier la zone d’hypoesthésie obtenue et **noter l’EN avant / à 20 min** : c’est la valeur diagnostique du bloc. Faire marcher le patient avant la sortie (dépistage d’un bloc fémoral). Consignes : hypoesthésie de la cuisse pendant quelques heures, prudence à la chaleur (pas de bouillotte sur une zone anesthésiée), reprise normale des activités.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 %, seule | **2–3 mL** | Volume délibérément faible : au-delà, la diffusion médiale atteint le nerf fémoral et fait perdre toute spécificité au test. Cartographier la zone d’hypoesthésie obtenue |
| Bloc thérapeutique | Ropivacaïne 0,2 % ou lidocaïne 1 % + **dexaméthasone 4 mg** ou bétaméthasone 5,7 mg | 3–5 mL | **Corticoïde non particulaire de préférence** : nerf très superficiel, risque d’atrophie graisseuse et de dépigmentation avec les particulaires. Ne pas répéter plus de 2–3 fois |
| Hydrodissection | **Dextrose 5 % (D5W)** seul, ou D5W + 1 mL de lidocaïne 1 % | 5–10 mL | Technique de choix pour la libération mécanique du nerf au site de conflit. Le D5W n’est ni neurotoxique ni bloquant moteur, ce qui permet des séances **répétées** (3 à 5 séances espacées de 2–4 semaines) et évite tout risque de chute |
| Avant PRF | Lidocaïne 1 % | 0,5–1 mL | Volume minimal : un volume important déplace le nerf hors de portée de l’électrode |
| Après PRF ou cryoneurolyse | Ropivacaïne 0,2 % ± dexaméthasone 4 mg | 2–3 mL | Confort post-geste |

**Doses maximales d’anesthésique local** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Les volumes de ce bloc en sont très éloignés ; le facteur limitant est la **diffusion locale**, pas la dose systémique.

**Choix de l’AL** : préférer une concentration faible (ropivacaïne 0,2 %) plutôt qu’une concentration forte — l’objectif est de bloquer un nerf sensitif de 2 mm, pas d’obtenir un bloc dense.

**Point pratique** : chez un patient qui doit conduire ou repartir seul, l’hydrodissection au **dextrose 5 % seul** est l’option la plus sûre — aucun bloc, donc aucun risque de dérobement.`,

  variantes: [
    { titre: 'Hydrodissection au dextrose 5 %', texte: `Technique de première intention chez beaucoup d’équipes, avant tout geste ablatif. Aiguille 22–25 G, 5 à 10 mL de **dextrose 5 %** injectés sous pression douce pour libérer le nerf de ses adhérences au fascia lata et au ligament inguinal, avec repositionnement de la pointe pour obtenir une libération circonférentielle sur plusieurs centimètres, en remontant vers le site de conflit.

Avantages décisifs : pas de corticoïde (donc pas de risque cutané ni d’hyperglycémie), pas de bloc moteur, **répétable** (3 à 5 séances espacées de 2 à 4 semaines). Le rationnel repose sur la libération mécanique et sur un effet propre du dextrose sur la douleur neuropathique, dont le mécanisme n’est pas établi. Niveau de preuve : séries et petits essais — *à confirmer*.` },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Indication : bloc test positif (soulagement ≥ 50 %) mais de durée insuffisante. Aiguille RF **22 G 50–54 mm, extrémité active 5 mm**, placée **parallèlement** au trajet du nerf dans le tunnel graisseux, aiguille et nerf visualisés ensemble.

Stimulation sensitive à **50 Hz** : paresthésies reproduisant le territoire douloureux à **moins de 0,5 V**. Stimulation motrice à 2 Hz : **aucune réponse motrice attendue** (nerf purement sensitif) — une contraction signifie qu’on est ailleurs, le plus souvent trop en dedans, près du fémoral. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 2–3 mL d’AL ± dexaméthasone.

Durée d’effet attendue de 3 à 6 mois dans les séries publiées, répétable. Preuve : séries prospectives et rétrospectives, quelques essais de petite taille ; pas de méta-analyse robuste.` },
    { titre: 'Cryoneurolyse', texte: `Cible idéale : nerf **purement sensitif**, superficiel, facilement repérable. Sonde cryo 14–16 G introduite in-plane au contact du nerf après anesthésie locale, cycles de **gel 2 min / dégel 30 s, répétés 2 à 3 fois**. La lésion respecte l’épinèvre et le périnèvre (dégénérescence wallérienne pure), ce qui autorise une repousse axonale et limite le risque de névrome, contrairement à une section.

Durée d’effet de plusieurs mois, répétable. À réserver aux patients ayant répondu au bloc test, en les informant que l’hypoesthésie du territoire sera plus marquée et plus durable qu’après un simple bloc. Voir le chapitre socle Cryoneurolyse.` },
    { titre: 'Radiofréquence thermique — pourquoi la réserver', texte: `Techniquement possible, le nerf étant purement sensitif, et rapportée dans des séries. Mais la lésion thermique d’un nerf sensitif pur expose aux **dysesthésies de déafférentation** et à un territoire d’anesthésie parfois mal vécu. La plupart des équipes préfèrent aujourd’hui la PRF ou la cryoneurolyse en première intention ablative, et réservent la RF thermique aux échecs, après information explicite. *Position à confirmer sur des recommandations formelles — il n’en existe pas de dédiée à ma connaissance.*` },
    { titre: 'Chirurgie : décompression ou neurectomie', texte: `Après échec documenté des gestes percutanés répétés. Deux options : la **neurolyse-décompression** (libération du nerf au ligament inguinal, sensibilité préservée, mais taux de récidive plus élevé) et la **neurectomie** (section, taux de succès plus élevé dans les séries, mais anesthésie définitive du territoire antéro-latéral de la cuisse et risque de névrome).

Le choix appartient au patient, informé de ce compromis. Aucun essai comparatif direct entre gestes percutanés et chirurgie n’est disponible : le séquencement percutané d’abord repose sur le bon sens (le moins invasif d’abord), pas sur des données.` },
  ],

  pearls: [
    'Ne pas chercher le nerf à l’EIAS, où il est le plus variable : le chercher 1 à 3 cm plus bas, dans le tunnel constant sartorius / tenseur du fascia lata.',
    'Si on ne le trouve pas, descendre à mi-cuisse où il est gros et sous-cutané, et remonter en le suivant.',
    'Zoomer et faire varier l’anisotropie par de petites bascules : le nerf « clignote », un septum graisseux non.',
    'Peu de pression sur la sonde et beaucoup de gel : la compression écrase l’interstice et fait disparaître la cible.',
    'Volume faible pour un bloc diagnostique (2–3 mL) : c’est ce qui fait la valeur du test.',
    'Chez un patient venu seul et devant conduire : hydrodissection au dextrose 5 % seul, aucun risque de dérobement.',
    'Un nerf visiblement épaissi en amont du ligament inguinal désigne le site de conflit — c’est là qu’il faut hydrodisséquer.',
  ],
  pieges: [
    'Confondre le nerf avec une branche de l’artère circonflexe iliaque superficielle : le Doppler tranche en deux secondes.',
    'Injecter au-dessus du fascia lata : nappe sous-cutanée, bloc inefficace.',
    'Injecter un volume important en dedans et en profondeur : bloc fémoral, quadriceps qui dérobe, patient qui chute.',
    'Utiliser une sonde de 8 MHz ou une image non zoomée : un nerf de 2 mm reste invisible.',
    'Employer un corticoïde particulaire à forte dose : atrophie graisseuse et dépigmentation sur une zone visible.',
    'Traiter une méralgie d’installation rapide sans avoir éliminé une cause compressive abdomino-pelvienne.',
    'Faire un geste ablatif sans bloc test préalable : on perd la valeur prédictive et le patient ne sait pas ce qu’il doit attendre.',
  ],
  complications: [
    '**Bloc du nerf fémoral par diffusion médiale** : faiblesse du quadriceps, risque de **chute**. Prévention : volume modeste, cible latérale, surveillance de la diffusion. Conduite à tenir : garder le patient jusqu’à récupération complète, test de marche avant sortie, conduite interdite le jour même.',
    '**Injection intraneurale** : douleur fulgurante ou paresthésie à l’injection → arrêt immédiat, retrait de 1 mm, repositionnement. Sur un nerf de 2 mm, seule la visualisation continue de la pointe protège.',
    '**Hématome superficiel** : ponction de la branche circonflexe iliaque superficielle ; compressible, sans gravité.',
    '**Atrophie graisseuse et dépigmentation cutanées** : liées au corticoïde particulaire à ce site très superficiel. Préférer un corticoïde soluble ou s’en passer.',
    '**Dysesthésies de déafférentation** : surtout après RF thermique ; possibles, plus rarement, après cryoneurolyse. Informer avant.',
    '**Extension de la zone d’hypoesthésie** après geste ablatif : attendue, à faire accepter explicitement avant le geste — le patient échange une brûlure contre une zone endormie.',
    '**Échec du bloc** : le plus souvent une variante anatomique non identifiée ou une erreur de diagnostic (radiculalgie L2-L3). Un bloc bien réalisé et négatif est une information, pas un échec technique.',
  ],
  securite: [
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018) : bloc superficiel, site compressible — pas d’arrêt des antiagrégants ; anticoagulants au cas par cas.',
    'Doppler couleur systématique avant la ponction.',
    'Volume limité et cible latérale pour éviter la diffusion vers le nerf fémoral ; surveiller la nappe pendant l’injection.',
    'Test de marche avant la sortie chez tout patient ayant reçu un AL ; conduite interdite le jour même en cas de bloc.',
    'Corticoïde non particulaire à dose basse, ou pas de corticoïde du tout (dextrose 5 %).',
    'Consigne de protection thermique de la zone anesthésiée (pas de bouillotte, pas de coussin chauffant).',
    'PRF : vérifier l’**absence** de réponse motrice à 2 Hz — une contraction signe une position erronée, trop médiale.',
  ],

  suivi: `- **J0** : EN avant / à 20 min, **cartographie de la zone d’hypoesthésie** obtenue (dessinée au dossier ou photographiée) — c’est la preuve que le bon nerf a été bloqué. Test de marche avant sortie.
- **J15–J30** : EN, DN4 ou questionnaire de douleur neuropathique si un registre PROM est en place, qualité du sommeil, tolérance des vêtements et de la position assise, consommation de gabapentinoïde.
- **3 mois** : décision. Réponse prolongée → surveillance simple et poursuite de la correction du facteur causal. Réponse franche mais brève (< 4 semaines) → **hydrodissection répétée**, puis **PRF** ou **cryoneurolyse**. Réponse nulle malgré un bloc techniquement réussi et une hypoesthésie obtenue → **reprendre le diagnostic** : radiculalgie L2-L3, pathologie de hanche, douleur centralisée.
- **Toujours** : réévaluer le facteur causal à chaque consultation (poids, ceinture, vêtements, poste de travail). Un geste réussi sur un facteur causal maintenu récidive.
- **Après geste ablatif** : évaluation à 4 et 12 semaines, puis à 6 mois ; durée d’effet attendue de 3 à 6 mois, répétable.`,

  evidence: `- **Niveau de preuve global : faible.** La méralgie paresthésique est une pathologie fréquente mais peu étudiée en essais contrôlés ; la littérature est faite de séries, de cohortes rétrospectives et de quelques essais de petite taille. Aucune méta-analyse robuste ne permet de hiérarchiser bloc, hydrodissection, PRF, cryoneurolyse et chirurgie.
- **Bloc échoguidé vs repères anatomiques** : le guidage améliore nettement le taux de succès du bloc, ce qui est cohérent avec l’ampleur des variantes anatomiques du passage inguinal. C’est le point le mieux établi de la fiche. **Tagliafico (2011)** a décrit et évalué la technique échoguidée sur une série consécutive.
- **Variabilité anatomique** : plusieurs études cadavériques concordantes décrivent des types de passage multiples par rapport au ligament inguinal et à l’EIAS, avec une position pouvant s’écarter de plusieurs centimètres du repère classique. C’est la donnée anatomique la plus solide et la plus opérationnelle du sujet.
- **PRF** : séries prospectives et rétrospectives rapportant des durées d’effet de 3 à 6 mois après bloc test positif. Aucun ECR contre sham à ma connaissance. Preuve **faible**.
- **Hydrodissection au dextrose 5 %** : rationnel mécanique convaincant, données cliniques limitées à des séries et à de petits essais, principalement issus d’équipes de médecine physique. Preuve **faible**, mais rapport bénéfice-risque excellent (pas de corticoïde, pas de bloc moteur, répétable).
- **Cryoneurolyse** : séries, pas d’essai contrôlé à cette localisation. Preuve **faible**, rationnel fort (nerf purement sensitif, superficiel).
- **Chirurgie** : les séries rapportent des taux de succès élevés, supérieurs pour la neurectomie par rapport à la décompression, au prix d’une anesthésie définitive. **Aucune comparaison directe avec les gestes percutanés n’existe** — la séquence percutané-puis-chirurgie relève du bon sens, pas de la démonstration. *Trou de la littérature explicitement assumé.*
- **Histoire naturelle** : une part notable des méralgies régresse spontanément après suppression du facteur causal ; ce fait, souvent oublié, doit tempérer l’attribution de tout succès au geste réalisé. *Proportion exacte à confirmer.*`,

  references: [
    { auteurs: 'Tagliafico A, Serafini G, Lacelli F, Perrone N, Valsania V, Martinoli C', titre: 'Ultrasound-guided treatment of meralgia paresthetica (lateral femoral cutaneous neuropathy): technical description and results of treatment in 20 consecutive patients', revue: 'Journal of Ultrasound in Medicine', annee: '2011', type: 'série prospective', verif: false },
    { auteurs: 'Aszmann OC, Dellon ES, Dellon AL', titre: 'Anatomical course of the lateral femoral cutaneous nerve and its susceptibility to compression and injury', revue: 'Plastic and Reconstructive Surgery', annee: '1997', type: 'anatomie', verif: false, note: 'Étude cadavérique de référence sur les variantes de passage au ligament inguinal.' },
    { auteurs: 'Ng I, Vaghadia H, Choi PT, Helmy N', titre: 'Ultrasound imaging accurately identifies the lateral femoral cutaneous nerve', revue: 'Anesthesia and Analgesia', annee: '2008', type: 'étude technique', verif: false },
    { auteurs: 'Hurdle MF, Weingarten TN, Crisostomo RA, Psimos C, Smith J', titre: 'Ultrasound-guided blockade of the lateral femoral cutaneous nerve: technical description and review of 10 cases', revue: 'Archives of Physical Medicine and Rehabilitation', annee: '2007', type: 'série', verif: false },
    { auteurs: 'Fowler IM, Tucker AA, Mendez RJ', titre: 'Treatment of meralgia paresthetica with ultrasound-guided pulsed radiofrequency ablation of the lateral femoral cutaneous nerve', revue: 'Pain Practice', annee: '2012', type: 'cas / série', verif: false },
    { auteurs: 'Khalil N, Nicotra A, Rakowicz W', titre: 'Treatment for meralgia paraesthetica', revue: 'Cochrane Database of Systematic Reviews', annee: '2012', type: 'revue systématique', verif: false, note: 'Revue concluant à l’insuffisance des données pour hiérarchiser les traitements ; existence probable, date à confirmer.' },
    { auteurs: 'Lam KHS, Hung CY, Chiang YP, et al.', titre: 'Ultrasound-guided nerve hydrodissection for pain management: rationale, methods, current literature, and theoretical mechanisms', revue: 'Journal of Pain Research', annee: '2020', type: 'revue', verif: false, note: 'Base méthodologique de l’hydrodissection au dextrose 5 %.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'recommandation', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'lfcn-tunnel', section: 'sonoanatomie', titre: 'Coupe transverse 1–3 cm sous l’EIAS — le tunnel graisseux',
      legende: 'La cible fiable : sous le fascia lata, entre le sartorius (en dedans) et le tenseur du fascia lata (en dehors), un coin graisseux hyperéchogène contient le nerf, ovale hypoéchogène de 1 à 3 mm. Une branche de l’artère circonflexe iliaque superficielle croise la zone en superficie : c’est le principal faux ami.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, 1–3 cm sous l’EIAS', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 46 });
        S.artery({ x: 196, y: 84, r: 5, label: 'A. circonflexe iliaque superf.', lx: 214, ly: 78, anchor: 'start', small: true, lead: [202, 84] });
        S.fascia({ points: [[0, 110], [320, 106], [640, 110]], width: 2.2, label: 'Fascia lata', at: [72, 132], small: true });
        S.muscle({ path: 'M30 116 L296 112 L250 248 L56 236 Z', label: 'Sartorius', at: [152, 186], opacity: 0.5 });
        S.fat({ path: 'M296 112 L392 110 L424 242 L250 250 Z', label: 'Tunnel graisseux', at: [340, 226], small: true });
        S.muscle({ path: 'M392 110 L618 116 L600 240 L424 242 Z', label: 'Tenseur du fascia lata', at: [512, 186], opacity: 0.5 });
        S.nerve({ x: 342, y: 156, rx: 9, ry: 6, label: 'N. cutané latéral de la cuisse', lx: 464, ly: 150, anchor: 'start', small: true, lead: [352, 156] });
        S.muscle({ path: 'M0 258 L640 250 L640 306 L0 314 Z', label: 'Droit fémoral', at: [104, 286], opacity: 0.4, small: true });
        S.bone({ path: 'M0 326 Q320 306 640 320', label: 'Ilion (sous l’EIAS)', at: [330, 366] });
      },
    },
    {
      id: 'lfcn-hydro', section: 'technique', titre: 'Hydrodissection circonférentielle — le nerf doit « flotter »',
      legende: 'Aiguille 25 G in-plane, de latéral en médial, à angle très plat, passée sous le fascia lata jusqu’au contact du coin graisseux. Critère de fin : le nerf entouré d’injectat sur 360°, isolé dans une logette anéchogène. Ne pas laisser la nappe fuser en dedans et en profondeur, où elle atteindrait le nerf fémoral.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, 1–3 cm sous l’EIAS', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 46 });
        S.fascia({ points: [[0, 110], [320, 106], [640, 110]], width: 2.2, label: 'Fascia lata', at: [72, 132], small: true });
        S.muscle({ path: 'M30 116 L296 112 L250 248 L56 236 Z', label: 'Sartorius', at: [140, 196], opacity: 0.5 });
        S.fat({ path: 'M296 112 L392 110 L424 242 L250 250 Z' });
        S.muscle({ path: 'M392 110 L618 116 L600 240 L424 242 Z', label: 'Tenseur du fascia lata', at: [520, 200], opacity: 0.5 });
        S.nerve({ x: 342, y: 156, rx: 9, ry: 6, label: 'NCLC', lx: 342, ly: 116, small: true });
        S.muscle({ path: 'M0 258 L640 250 L640 306 L0 314 Z', opacity: 0.4 });
        S.bone({ path: 'M0 326 Q320 306 640 320', label: 'Ilion', at: [140, 362] });
        S.needle({ from: [636, 124], to: [378, 162], label: '25 G, angle plat' });
        S.spreadPath({ path: 'M290 158 A 52 30 0 1 0 394 158 A 52 30 0 1 0 290 158 Z M329 156 A 15 10 0 1 1 359 156 A 15 10 0 1 1 329 156 Z', at: [342, 212], label: '3–5 mL — nerf entouré sur 360°' });
      },
    },
  ],

  checklist: [
    'Cause compressive abdomino-pelvienne éliminée devant toute méralgie d’installation rapide',
    'Facteur causal mécanique recherché et corrigé (ceinture, vêtements, harnais, poids, position opératoire)',
    'Sonde haute fréquence, image zoomée sur le tunnel graisseux ; Doppler fait avant la ponction',
    'Volume limité à 2–3 mL si l’objectif est diagnostique',
    'Corticoïde non particulaire à dose basse, ou dextrose 5 % seul',
    'Zone d’hypoesthésie cartographiée au dossier après le geste (preuve que le bon nerf a été bloqué)',
    'Test de marche avant la sortie ; conduite interdite le jour même si un AL a été utilisé',
    'Consigne de protection thermique de la zone anesthésiée remise',
  ],
});
