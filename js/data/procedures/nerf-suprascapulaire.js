/* Fiche : nerf suprascapulaire — bloc, radiofréquence pulsée. FICHE DE RÉFÉRENCE (gabarit de qualité). */
ECHO.register({
  id: 'nerf-suprascapulaire',
  titre: 'Nerf suprascapulaire — bloc et radiofréquence pulsée',
  titreCourt: 'Nerf suprascapulaire',
  en: 'Ultrasound-guided suprascapular nerve block (SSNB) — posterior (supraspinous fossa), spinoglenoid and anterior (supraclavicular) approaches; pulsed radiofrequency',
  region: 'membre-sup',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: 'Forte (méta-analyses d\'ECR)',
  maj: '2026-09',
  motsCles: ['épaule', 'omarthrose', 'capsulite rétractile', 'coiffe des rotateurs', 'PRF', 'SSNB', 'échancrure', 'spinoglénoïdienne'],
  resume: 'Le bloc du nerf suprascapulaire est le geste de première ligne de l\'épaule douloureuse chronique quand l\'infiltration articulaire ou sous-acromiale a échoué ou n\'est pas souhaitable (diabète, corticothérapies répétées). Il couvre environ 70 % de l\'innervation sensitive de l\'articulation gléno-humérale, de la capsule postérieure et de la bourse sous-acromiale. Trois niveaux de cible : la fosse supra-épineuse (référence), l\'échancrure spinoglénoïdienne (distal, épargne le supra-épineux) et la voie antérieure sus-claviculaire (nerf le mieux visible, réservée au diagnostic). La radiofréquence pulsée prolonge l\'effet sur la capsulite et l\'omarthrose.',

  flash: {
    position: 'assis', positionNote: 'main du côté à traiter posée sur l\'épaule opposée (ouvre la fosse) ; décubitus ventral ou latéral possible',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 4–6 cm ; convexe 2–5 MHz si morphotype épais',
    approche: 'in-plane', approcheNote: 'latéro-médiale, sonde parallèle à l\'épine de la scapula, glissée vers le haut dans la fosse supra-épineuse',
    aiguille: '22 G, 50–90 mm (écho-visible), aiguille RF 22 G 100 mm à extrémité active 5–10 mm pour la PRF',
    cible: 'Plancher de la fosse supra-épineuse, sous le fascia profond du supra-épineux, au niveau de l\'échancrure ; décollement du muscle par l\'injectat autour du nerf et de l\'artère',
    injectat: '5–10 mL ropivacaïne 0,2–0,5 % ± 40 mg de méthylprednisolone (ou équivalent)',
    duree: '10–15 min bloc · 25–35 min PRF',
  },

  indications: [
    'Épaule douloureuse chronique après échec ou insuffisance des mesures conservatrices : omarthrose, capsulite rétractile (phase douloureuse), tendinopathie ou rupture non opérable de la coiffe, arthrite inflammatoire.',
    'Épaule hémiplégique douloureuse (AVC) : méta-analyse favorable, geste sans corticoïde possible.',
    'Alternative à l\'infiltration intra-articulaire de corticoïdes chez le diabétique ou après plusieurs infiltrations (efficacité comparable dans la méta-analyse de Chang 2016).',
    'Bloc diagnostique avant radiofréquence pulsée ou avant chirurgie de dénervation.',
    'Douleur post-opératoire d\'épaule (hors périmètre de ce mémo — approche antérieure surtout).',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides (rare).',
    'Relatives : troubles de l\'hémostase / anticoagulants — bloc classé **à faible risque** (structures superficielles, compressibles) dans les recommandations ASRA-ESRA 2018 sur les procédures douleur : pas d\'interruption systématique des antiagrégants ; anticoagulants au cas par cas (chapitre Sécurité).',
    'Voie antérieure : proximité de la plèvre et du nerf phrénique — prudence si insuffisance respiratoire ou paralysie phrénique controlatérale.',
    'Corticoïdes : diabète déséquilibré, infection évolutive, prothèse articulaire ou chirurgie programmée < 3 mois (limiter le corticoïde ou faire un bloc AL seul).',
  ],
  alternatives: 'Infiltration gléno-humérale ou sous-acromiale (fiches dédiées) ; bloc combiné suprascapulaire + axillaire (espace quadrilatère) pour couvrir la capsule antéro-inférieure ; hydrodilatation capsulaire dans la capsulite ; radiofréquence pulsée après bloc test positif. Dans la méta-analyse de Chang 2016, le SSNB est supérieur au placebo et à la kinésithérapie seule sur au moins 4 semaines, et équivalent à l\'infiltration intra-articulaire — c\'est donc un choix de sécurité (pas de corticoïde intra-articulaire) plus qu\'un choix d\'efficacité.',

  anatomie: `Le nerf suprascapulaire naît du **tronc supérieur** du plexus brachial (C5-C6, parfois C4), chemine sous l\'omohyoïdien dans le creux sus-claviculaire, puis passe sous le **ligament transverse supérieur de la scapula** par l\'**échancrure suprascapulaire** (coracoïdienne). L\'artère suprascapulaire passe le plus souvent **au-dessus** du ligament (variante sous-ligamentaire dans 15–30 % des cas), ce qui explique que le Doppler repère l\'échancrure sans forcément superposer nerf et artère.

Dans la **fosse supra-épineuse**, il chemine sous le supra-épineux, contre le plancher osseux, donne les branches motrices du supra-épineux et des **branches sensitives** pour la capsule postéro-supérieure, l\'articulation acromio-claviculaire et — description toulousaine récente — la **bourse sous-acromiale** (Laumonerie 2019). Il contourne ensuite l\'épine de la scapula par l\'**échancrure spinoglénoïdienne** (sous le ligament spinoglénoïdien, avec l\'artère) pour innerver l\'infra-épineux et la capsule postérieure.

### Ce qui compte pour le geste
- **Innervation sensitive de l\'épaule = trois ponts** (Laumonerie 2020) : suprascapulaire (postéro-supérieur, majoritaire), axillaire (antéro-inférieur), pectoral latéral (antéro-supérieur, inconstant). Un bloc suprascapulaire seul laisse en place les composantes antérieure et inférieure — d\'où l\'intérêt du bloc axillaire associé dans la capsulite.
- **Niveau proximal (fosse)** : bloc complet, moteur + sensitif ; faiblesse transitoire du supra- et de l\'infra-épineux à annoncer au patient.
- **Niveau distal (spinoglénoïdien)** : ne bloque que l\'infra-épineux et les branches capsulaires postérieures ; épargne le supra-épineux (Eckmann 2017) ; cible de choix pour la PRF ou la cryoneurolyse quand on veut préserver la fonction.
- **Niveau antérieur (sus-claviculaire)** : le nerf est le mieux visible (Siegenthaler 2012, Rothe 2014), sous le ventre inférieur de l\'omohyoïdien, latéral au tronc supérieur. Diffusion possible vers le plexus et le nerf phrénique : c\'est une voie d\'anesthésie plus que d\'algologie.
- Profondeur du plancher de la fosse : 3–5 cm chez l\'adulte mince, jusqu\'à 6–7 cm ; le convexe devient alors utile.`,

  installation: {
    patient: `**Assis**, dos à l\'opérateur, avant-bras posés sur les cuisses ou, mieux, **main du côté traité sur l\'épaule opposée** : l\'antépulsion-adduction fait tourner la scapula et ouvre la fosse supra-épineuse, éloignant le trapèze. Chez le patient à risque de malaise vagal, préférer le **décubitus ventral** (bras le long du corps, coussin sous l\'épaule) ou le **décubitus latéral** côté à traiter vers le haut.

Marquer l\'épine de la scapula et l\'acromion au feutre avant de désinfecter : on garde un repère quand la fenêtre se déplace.`,
    operateur: `Opérateur **derrière le patient**, du côté à traiter, écran **en face**, de l\'autre côté du patient, dans l\'axe du regard. Main non dominante sur la sonde, en appui sur l\'épaule pour stabiliser. La ponction se fait de **latéral en médial** (l\'aiguille vient de l\'acromion vers l\'échancrure) — le trajet évite d\'aller « dans » l\'échancrure et donc vers la plèvre ; certains préfèrent médio-latéral, le principe reste de rester au-dessus du plancher osseux.`,
    sonde: `- Linéaire 6–13 MHz, preset MSK, profondeur 4–6 cm, focale au plancher de la fosse, gain modéré (le supra-épineux doit rester gris moyen, le plancher osseux blanc franc).
- Doppler couleur à basse PRF sur l\'échancrure : l\'artère suprascapulaire signe le site.
- Morphotype épais : convexe 2–5 MHz, ou linéaire à 6 MHz avec compression ferme.
- Aiguille écho-visible ou repérage par hydrolocalisation (0,5 mL de sérum) ; angle d\'insonation plat (< 30°) pour voir le corps de l\'aiguille.`,
  },

  reperage: [
    { titre: 'Épine de la scapula', texte: 'Poser la sonde **transversale, parallèle à l\'épine**, sur l\'épine elle-même : ligne hyperéchogène horizontale avec cône d\'ombre, trapèze au-dessus.' },
    { titre: 'Glisser vers le haut dans la fosse', texte: 'Translater la sonde en crânial de 1–2 cm en gardant le parallélisme : l\'épine disparaît, apparaissent de la superficie à la profondeur le **trapèze**, le fascia, le **supra-épineux** (fibres pennées, épais), puis le **plancher osseux concave** de la fosse.' },
    { titre: 'Trouver l\'échancrure', texte: 'Translater de médial en latéral le long du plancher : à l\'union tiers moyen–tiers latéral, la ligne osseuse s\'interrompt ou se creuse en **U** — c\'est l\'échancrure, fermée par le **ligament transverse** (fine ligne hyperéchogène qui ponte le U). Une bascule (tilt) de la sonde de 10–20° vers le bas est souvent nécessaire.' },
    { titre: 'Doppler', texte: 'Activer le Doppler couleur : l\'**artère suprascapulaire** pulse dans ou juste au-dessus de l\'échancrure. Le nerf est un petit point hypo/hyperéchogène de 2–3 mm, médial ou sous l\'artère, souvent difficile à individualiser — la cible est **l\'espace** sous le fascia profond du muscle, contre l\'os, au niveau du Doppler.' },
    { titre: 'Si l\'échancrure reste invisible', texte: 'Ne pas s\'acharner : le bloc de « fosse » (injection sous le supra-épineux contre le plancher, au tiers latéral) diffuse au nerf de façon fiable (Harmon 2007). Alternativement, descendre vers l\'**échancrure spinoglénoïdienne** : sonde sur l\'épine puis glissée latéralement jusqu\'au col de la glène ; l\'artère y est constamment visible sous l\'infra-épineux.' },
  ],

  sonoanatomie: [
    { structure: 'Trapèze', aspect: 'Muscle superficiel, mince, fibres obliques, hypoéchogène strié', repere: 'Immédiatement sous le pannicule' },
    { structure: 'Supra-épineux', aspect: 'Muscle épais, penné, gris moyen ; fascia profond hyperéchogène fin', repere: 'Remplit la fosse ; ne pas le confondre avec le trapèze' },
    { structure: 'Plancher de la fosse supra-épineuse', aspect: 'Ligne hyperéchogène concave avec cône d\'ombre', repere: 'La cible est juste au-dessus de cette ligne' },
    { structure: 'Échancrure suprascapulaire', aspect: 'Interruption en U de la ligne osseuse, pontée par le ligament transverse (fine ligne blanche)', repere: 'Union tiers moyen–tiers latéral, sous Doppler' },
    { structure: 'Artère suprascapulaire', aspect: 'Point pulsatile en Doppler, au-dessus ou dans l\'échancrure', repere: 'Repère principal ; à éviter avec l\'aiguille' },
    { structure: 'Nerf suprascapulaire', aspect: 'Point ovalaire de 2–3 mm en nid d\'abeilles, souvent non individualisé', repere: 'Sous le ligament, médial à l\'artère' },
    { structure: 'Échancrure spinoglénoïdienne (voie distale)', aspect: 'Dépression osseuse entre l\'épine et le col de la glène, sous l\'infra-épineux ; artère constante', repere: 'Sonde sur l\'épine, glissée en latéral' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Désinfection large de la fosse, gel stérile ou housse. Seringue de 10 mL préparée (AL ± corticoïde), aiguille 22 G 50–90 mm montée sur un prolongateur (deuxième main libre pour la sonde).' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point de ponction, à 1–2 cm du bord latéral de la sonde. Facultatif avec une 22 G, systématique avant une aiguille RF.' },
    { titre: 'Ponction dans le plan, de latéral en médial', texte: 'Entrer à plat (angle 20–30°), visualiser l\'aiguille sur toute sa longueur. Traverser trapèze puis supra-épineux en gardant la pointe **au-dessus du plancher osseux**. Avancer jusqu\'au contact du fascia profond du supra-épineux au niveau de l\'échancrure, ou au contact osseux juste latéral à celle-ci puis reculer de 1 mm.' },
    { titre: 'Test et injection', texte: 'Aspiration. Injecter 0,5–1 mL de sérum ou d\'AL : l\'injectat doit **décoller le supra-épineux du plancher** en une nappe anéchogène qui entoure l\'artère et l\'échancrure. Si la nappe se forme *dans* le muscle, avancer d\'1–2 mm. Puis 5–10 mL fractionnés, en surveillant la diffusion médiale et latérale le long du plancher.' },
    { titre: 'Critère de fin', texte: 'Nappe hypoéchogène sous-fasciale de 2–3 cm de long, englobant le signal Doppler, sans injection intramusculaire ni intravasculaire (pas de disparition de l\'injectat). Retrait de l\'aiguille, pansement.' },
    { titre: 'Après le geste', texte: 'Tester l\'abduction et la rotation externe dans les 15 min : la faiblesse transitoire (bloc moteur du supra- et de l\'infra-épineux) confirme le bloc. Consignes : pas de port de charge ni de conduite le jour même ; EN à 30 min notée (bloc diagnostique) ; réévaluation à J15–J30.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | 4–5 mL | Petit volume pour limiter la diffusion aux structures voisines ; EN avant / 30 min après |
| Bloc thérapeutique | Ropivacaïne 0,2–0,5 % (ou bupivacaïne 0,25–0,5 %) + méthylprednisolone 40 mg, ou triamcinolone 40 mg, ou bétaméthasone 5,7 mg (Diprostène 1 mL) | 8–10 mL | Schéma de Shanahan 2003 : bupivacaïne 0,5 % 10 mL + méthylprednisolone 40 mg. Corticoïde particulaire acceptable (site non artériel terminal), mais AL seul possible et efficace |
| Épaule hémiplégique | AL seul ou AL + corticoïde | 5–10 mL | Efficacité démontrée sans corticoïde dans plusieurs ECR |
| Hydrodissection / PRF | Sérum physiologique ou lidocaïne 1 % 2–4 mL avant PRF, puis AL ± corticoïde après | 2–4 mL | Le volume avant PRF ne doit pas déplacer le nerf hors de portée de l\'électrode |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg (≈ 225 mg), bupivacaïne 2–2,5 mg/kg (≈ 150 mg), lidocaïne 4,5 mg/kg (7 mg/kg avec adrénaline). Un bloc suprascapulaire n\'approche jamais ces doses ; c\'est le cumul avec d\'autres blocs de la même séance qui compte.

Éviter les corticoïdes intra-articulaires répétés dans la même séance (bloc + infiltration gléno-humérale) sans plafonner la dose cumulée ; espacer les corticoïdes de 3 mois sur un même site.`,

  variantes: [
    { titre: 'Voie distale — échancrure spinoglénoïdienne', texte: `Sonde transversale sur l\'épine, glissée en latéral jusqu\'à voir le **col de la glène** et la **capsule postérieure** sous l\'infra-épineux : l\'échancrure est la dépression entre l\'épine et le col, l\'artère y est constante (Doppler). Aiguille dans le plan, de médial en latéral ou l\'inverse, cible : espace entre le ligament spinoglénoïdien et l\'os, autour de l\'artère. 3–5 mL suffisent.

Avantages : nerf et artère toujours visibles, pas de bloc du supra-épineux, site idéal pour la **PRF** ou la **cryoneurolyse** des branches capsulaires postérieures (Eckmann 2017). Limite : ne couvre pas la capsule supérieure ni la bourse sous-acromiale (branches déjà émises en amont). L\'ECR de Bae 2021 dans la capsulite ne montre pas de différence d\'efficacité entre voie proximale (fosse) et distale à court terme.` },
    { titre: 'Voie antérieure — sus-claviculaire', texte: `Patient en décubitus dorsal, tête tournée du côté opposé. Sonde sus-claviculaire comme pour un bloc du plexus, puis translatée en latéral et en crânial : on suit le **tronc supérieur** vers son bord latéral ; le nerf suprascapulaire s\'en détache et passe **sous le ventre inférieur de l\'omohyoïdien**, contre le plancher musculaire (scalène moyen / élévateur de la scapula). Aiguille dans le plan, de latéral en médial, 3–5 mL sous l\'omohyoïdien.

C\'est la voie où le nerf est **le plus visible** (Siegenthaler 2012, Rothe 2014) et la plus sélective en cadavre (Laumonerie 2018). Mais la diffusion vers le plexus et le **nerf phrénique** est possible, la plèvre est à 2–3 cm : à réserver au bloc diagnostique chez un patient difficile, pas à la PRF ni aux corticoïdes.` },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Après bloc test positif (soulagement ≥ 50 % pendant la durée de l\'AL). Cible proximale (fosse, au niveau de l\'échancrure) ou distale (spinoglénoïdienne). Aiguille RF 22 G 100 mm, extrémité active 5–10 mm, placée **parallèle** au trajet du nerf, contre le plancher osseux. Stimulation sensitive 50 Hz : paresthésies de l\'épaule à < 0,5 V ; stimulation motrice 2 Hz : contraction du supra- ou de l\'infra-épineux à < 1 V confirme la proximité (à l\'inverse d\'une RF thermique, la contraction n\'est pas rédhibitoire). Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles** (protocoles de 240 à 600 s selon les équipes ; le PRF « haute tension » 60–90 V est en évaluation). Puis 2–4 mL AL ± corticoïde. ECR de Wu 2014 : PRF + kinésithérapie > kinésithérapie seule sur douleur et fonction à 12 semaines dans la capsulite.` },
    { titre: 'Cryoneurolyse', texte: 'Même cible distale ; sonde cryo 14–16 G, cycle gel 2 min / dégel 30 s × 2–3, avec injection préalable d\'AL. Données limitées à des séries ; à réserver aux épaules non opérables ayant répondu au bloc test (chapitre Cryoneurolyse).' },
    { titre: 'Bloc combiné suprascapulaire + axillaire', texte: 'Pour la capsulite ou l\'omarthrose antérieure : ajouter le bloc du nerf axillaire dans l\'espace quadrilatère (fiche dédiée). Un ECR de 2024 en double aveugle montre un gain sur la douleur et la fonction par rapport au SSNB seul dans l\'épaule gelée.' },
  ],

  pearls: [
    'La main sur l\'épaule opposée fait « remonter » la fosse et diminue l\'épaisseur de trapèze à traverser.',
    'Le Doppler trouve l\'échancrure plus vite que l\'œil : chercher l\'artère, pas le nerf.',
    'Aiguille de latéral en médial : le trajet reste au-dessus de l\'os et ne peut pas plonger dans l\'échancrure.',
    'Le bon signe est le **décollement du supra-épineux** ; une nappe dans le muscle = trop superficiel.',
    'Chez le patient épais, mieux vaut un convexe qui montre le plancher qu\'un linéaire qui ne le montre pas.',
    'Compter le geste comme diagnostique la première fois : EN avant / après à 30 min et à 24 h, c\'est ce qui justifie la PRF ensuite.',
  ],
  pieges: [
    'Confondre l\'épine (ligne convexe, ombre franche) et le plancher de la fosse (ligne concave) : la sonde est trop basse.',
    'Prendre le trapèze pour le supra-épineux et injecter entre les deux (bloc inefficace).',
    'Sonde trop médiale : pas d\'échancrure, nerf plus profond, injection dans le muscle.',
    'Voie antérieure : bloc phrénique ou du plexus, ne pas l\'utiliser chez l\'insuffisant respiratoire.',
    'Ne pas prévenir de la faiblesse transitoire de l\'abduction : le patient croit à une complication.',
    'PRF sans bloc test préalable : perte de la valeur prédictive, et un patient qui ne sait pas quoi attendre.',
  ],
  complications: [
    'Ponction de l\'artère suprascapulaire, hématome (rare, compressible).',
    'Injection intraneurale : douleur fulgurante → arrêt immédiat, repositionner.',
    'Pneumothorax : exceptionnel avec l\'échoguidage postérieur (le risque historique venait des aiguilles traversant l\'échancrure vers l\'avant) ; possible par voie antérieure.',
    'Bloc moteur transitoire (supra-/infra-épineux) : attendu, 2–6 h.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie ; rougeur cutanée ; atrophie sous-cutanée si reflux superficiel.',
    'Malaise vagal en position assise : voie veineuse non systématique mais patient surveillé, position allongée prête.',
  ],
  securite: [
    'Bloc superficiel, site compressible : **faible risque hémorragique** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ; anticoagulants oraux au cas par cas, pas d\'arrêt systématique.',
    'Doppler sur le trajet prévu avant la ponction ; aspiration répétée, injection fractionnée par 2–3 mL.',
    'Volumes faibles : pas de risque de toxicité systémique isolée, mais additionner les doses en cas de gestes multiples.',
    'Corticoïdes : glycémie capillaire chez le diabétique le jour même et les 48 h suivantes.',
  ],

  suivi: `- **J0** : EN avant et à 30 min (valeur diagnostique), amplitude passive en élévation et rotation externe, force en abduction (bloc moteur).
- **J15–J30** : EN, DASH ou Constant simplifié, sommeil, consommation d\'antalgiques ; décision : répéter (max 3/an avec corticoïde), passer à la PRF si réponse au bloc test ≥ 50 % mais < 4 semaines, ou changer de cible (gléno-humérale, axillaire).
- **PRF** : évaluation à 4 et 12 semaines ; durée d\'effet attendue 3–6 mois, répétable.
- Toujours coupler à la **kinésithérapie** (l\'effet du bloc sert la fenêtre de mobilisation, notamment dans la capsulite) : c\'est le schéma des ECR positifs.`,

  evidence: `- **Méta-analyse (Chang 2016, Arch Phys Med Rehabil, 12 ECR)** : SSNB supérieur au placebo et à la kinésithérapie seule sur la douleur et la fonction à ≥ 4 semaines ; **équivalent** à l\'infiltration intra-articulaire de corticoïdes. Preuve **forte** pour le bénéfice à court et moyen terme.
- **ECR fondateur (Shanahan 2003)** : 83 patients, bupivacaïne 0,5 % 10 mL + méthylprednisolone 40 mg vs placebo ; amélioration significative de la douleur et de la fonction à 12 semaines.
- **PRF (Wu 2014, ECR, capsulite)** : PRF échoguidée + kinésithérapie > kinésithérapie sur douleur, fonction et amplitude à 12 semaines. Séries et ECR plus récents cohérents ; le PRF « haute tension » reste exploratoire.
- **Proximal vs distal (Bae 2021, ECR, capsulite)** : efficacité comparable ; choisir selon l\'objectif (préserver le supra-épineux → distal).
- **Revue systématique 2025 (EJOST)** : le bénéfice au-delà de 3 mois par rapport aux soins standard est **incertain** — le bloc est un outil de fenêtre thérapeutique, pas un traitement de fond.
- Épaule hémiplégique : méta-analyse 2021 favorable (douleur et amplitude).`,

  references: [
    { auteurs: 'Chang KV, Hung CY, Wu WT, Han DS, Yang RS, Lin CP', titre: 'Comparison of the effectiveness of suprascapular nerve block with physical therapy, placebo, and intra-articular injection in management of chronic shoulder pain: a meta-analysis of randomized controlled trials', revue: 'Arch Phys Med Rehabil', annee: '2016;97(8):1366-80', doi: '10.1016/j.apmr.2015.11.009', type: 'méta-analyse' },
    { auteurs: 'Shanahan EM, Ahern M, Smith M, Wetherall M, Bresnihan B, FitzGerald O', titre: 'Suprascapular nerve block (using bupivacaine and methylprednisolone acetate) in chronic shoulder pain', revue: 'Ann Rheum Dis', annee: '2003;62(5):400-6', doi: '10.1136/ard.62.5.400', type: 'ECR' },
    { auteurs: 'Wu YT, Ho CW, Chen YL, Li TY, Lee KC, Chen LC', titre: 'Ultrasound-guided pulsed radiofrequency stimulation of the suprascapular nerve for adhesive capsulitis: a prospective, randomized, controlled trial', revue: 'Anesth Analg', annee: '2014;119(3):686-92', doi: '10.1213/ANE.0000000000000354', type: 'ECR' },
    { auteurs: 'Bae KH, Park KC, Jeong GM, Lim TK', titre: 'Proximal vs distal approach of ultrasound-guided suprascapular nerve block for patients with adhesive capsulitis of the shoulder: prospective randomized controlled trial', revue: 'Arch Phys Med Rehabil', annee: '2021;102(5):819-27', doi: '10.1016/j.apmr.2020.11.003', type: 'ECR' },
    { auteurs: 'Laumonerie P, Dalmas Y, Tibbo ME, et al.', titre: 'Sensory innervation of the human shoulder joint: the three bridges to break', revue: 'J Shoulder Elbow Surg', annee: '2020;29(12):e499-e507', doi: '10.1016/j.jse.2020.07.017', type: 'anatomie', note: 'Équipe toulousaine (Mansat, Chaynes) — la revue de référence sur les cibles de dénervation de l\'épaule.' },
    { auteurs: 'Laumonerie P, Blasco L, Tibbo ME, et al.', titre: 'Sensory innervation of the subacromial bursa by the distal suprascapular nerve: a new description of its anatomic distribution', revue: 'J Shoulder Elbow Surg', annee: '2019;28(9):1788-94', doi: '10.1016/j.jse.2019.02.016', type: 'anatomie' },
    { auteurs: 'Eckmann MS, Bickelhaupt B, Fehl J, et al.', titre: 'Cadaveric study of the articular branches of the shoulder joint', revue: 'Reg Anesth Pain Med', annee: '2017;42(5):564-70', pmid: '28786899', type: 'anatomie' },
    { auteurs: 'Siegenthaler A, Moriggl B, Mlekusch S, et al.', titre: 'Ultrasound-guided suprascapular nerve block, description of a novel supraclavicular approach', revue: 'Reg Anesth Pain Med', annee: '2012;37(3):325-8', doi: '10.1097/AAP.0b013e3182409168', type: 'technique' },
    { auteurs: 'Rothe C, Steen-Hansen C, Lund J, Jenstrup MT, Lange KH', titre: 'Ultrasound-guided block of the suprascapular nerve — a volunteer study of a new proximal approach', revue: 'Acta Anaesthesiol Scand', annee: '2014;58(10):1228-32', doi: '10.1111/aas.12392', type: 'technique' },
    { auteurs: 'Laumonerie P, Ferré F, Cavaignac E, et al.', titre: 'Ultrasound-guided proximal suprascapular nerve block: a cadaveric study', revue: 'Clin Anat', annee: '2018', doi: '10.1002/ca.23199', type: 'anatomie' },
    { auteurs: 'Harmon D, Hearty C', titre: 'Ultrasound-guided suprascapular nerve block technique', revue: 'Pain Physician', annee: '2007;10(6):743-6', url: 'https://www.painphysicianjournal.com/current/pdf?article=OTMy&journal=39', type: 'technique' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
    { auteurs: 'Systematic review', titre: 'Does a suprascapular nerve block reduce chronic shoulder pain at 3 months compared to standard non-operative care? A systematic review', revue: 'Eur J Orthop Surg Traumatol', annee: '2025', doi: '10.1007/s00590-025-04287-4', type: 'revue' },
  ],
  videos: [
    { titre: 'Suprascapular nerve block — ultrasound scanning technique', source: 'YouTube · Clarius (Dr Rosenblum)', url: 'https://www.youtube.com/watch?v=JSReXgHprDA', note: 'repérage de la fosse et de l\'échancrure' },
    { titre: 'Ultrasound pain block tip of the week: suprascapular nerve block', source: 'NYSORA', url: 'https://www.nysora.com/education-news/ultrasound-pain-block-tip-of-the-week-suprascapular-nerve-block/' },
    { titre: 'Suprascapular nerve block — StatPearls', source: 'NCBI Bookshelf (texte + figures)', url: 'https://www.ncbi.nlm.nih.gov/books/NBK580556/' },
  ],

  scenes: [
    {
      id: 'ssn-fosse', section: 'sonoanatomie', titre: 'Fosse supra-épineuse, coupe parallèle à l\'épine — vue de repérage',
      legende: 'De haut en bas : trapèze, supra-épineux, plancher osseux concave. L\'échancrure apparaît comme un U dans la ligne osseuse, pontée par le ligament transverse ; l\'artère (Doppler) est au-dessus ou dans l\'échancrure, le nerf en dessous.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, parallèle à l\'épine', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 76 L640 138 L0 150 Z', label: 'Trapèze', at: [120, 112] });
        S.fascia({ points: [[0, 150], [640, 138]], width: 1.5 });
        S.muscle({ path: 'M0 150 L640 138 L640 258 Q470 300 330 300 Q190 300 0 250 Z', label: 'Supra-épineux', at: [160, 205], opacity: 0.5 });
        S.fascia({ points: [[0, 250], [200, 292], [300, 300], [318, 300]], width: 1.6, opacity: 0.7 });
        S.fascia({ points: [[360, 300], [470, 296], [640, 258]], width: 1.6, opacity: 0.7 });
        S.bone({ path: 'M0 252 Q180 296 300 302 L318 302 L326 330 Q340 342 354 330 L362 302 Q470 298 640 260', label: 'Plancher de la fosse', at: [150, 330], ldy: 0 });
        S.ligament({ path: 'M316 300 L364 300 L362 306 L318 306 Z', label: 'Ligament transverse', at: [340, 282], small: true });
        S.artery({ x: 352, y: 292, r: 5, label: 'A. suprascapulaire', lx: 430, ly: 280, anchor: 'start', lead: [358, 292] });
        S.nerve({ x: 336, y: 318, r: 6, label: 'N. suprascapulaire', lx: 430, ly: 330, anchor: 'start', lead: [343, 318] });
        S.label({ x: 340, y: 365, text: 'Échancrure', cls: 'lbl-bone', small: true });
      },
    },
    {
      id: 'ssn-bloc', section: 'technique', titre: 'Bloc proximal — aiguille dans le plan, de latéral en médial',
      legende: 'L\'aiguille reste au-dessus du plancher osseux ; la pointe se place sous le fascia profond du supra-épineux au niveau de l\'échancrure. L\'injectat décolle le muscle du plancher et englobe artère et nerf : c\'est le critère de fin.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, parallèle à l\'épine', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 76 L640 138 L0 150 Z', label: 'Trapèze', at: [120, 112] });
        S.fascia({ points: [[0, 150], [640, 138]], width: 1.5 });
        S.muscle({ path: 'M0 150 L640 138 L640 258 Q470 300 330 300 Q190 300 0 250 Z', label: 'Supra-épineux', at: [160, 205], opacity: 0.5 });
        S.fascia({ points: [[0, 250], [200, 292], [300, 300], [318, 300]], width: 1.6, opacity: 0.7 });
        S.fascia({ points: [[360, 300], [470, 296], [640, 258]], width: 1.6, opacity: 0.7 });
        S.bone({ path: 'M0 252 Q180 296 300 302 L318 302 L326 330 Q340 342 354 330 L362 302 Q470 298 640 260' });
        S.ligament({ path: 'M316 300 L364 300 L362 306 L318 306 Z' });
        S.artery({ x: 352, y: 292, r: 5 });
        S.nerve({ x: 336, y: 318, r: 6, label: 'NSS', lx: 336, ly: 355, small: true });
        S.target({ x: 372, y: 290, r: 16 });
        S.needle({ from: [640, 96], to: [378, 288], label: '22 G 80 mm, angle plat' });
        S.spread({ x: 345, y: 292, rx: 70, ry: 14, label: '8–10 mL' });
      },
    },
    {
      id: 'ssn-spinoglenoide', section: 'technique', titre: 'Voie distale — échancrure spinoglénoïdienne',
      legende: 'Sonde sur l\'épine puis glissée en latéral : sous l\'infra-épineux, l\'échancrure est la dépression entre l\'épine et le col de la glène ; l\'artère y est constante. Cible pour PRF ou cryoneurolyse en épargnant le supra-épineux.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, sous l\'épine', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 72 L640 72 L640 120 L0 128 Z', label: 'Deltoïde postérieur', at: [140, 100], opacity: 0.45 });
        S.fascia({ points: [[0, 128], [640, 120]], width: 1.5 });
        S.muscle({ path: 'M0 128 L640 120 L640 232 Q560 258 470 262 Q380 258 330 300 Q250 300 0 240 Z', label: 'Infra-épineux', at: [150, 190], opacity: 0.5 });
        S.bone({ path: 'M0 236 Q150 262 250 262 L300 262 L320 300 Q335 320 360 306 L400 256 Q450 236 500 250 Q560 268 640 240', label: 'Épine', at: [110, 300], ldy: 0 });
        S.label({ x: 545, y: 300, text: 'Col de la glène', cls: 'lbl-bone', small: true });
        S.ligament({ path: 'M298 262 L404 256 L402 262 L302 268 Z', label: 'Lig. spinoglénoïdien', at: [352, 246], small: true });
        S.artery({ x: 348, y: 285, r: 5, label: 'A. suprascapulaire', lx: 430, ly: 320, anchor: 'start', lead: [354, 287] });
        S.nerve({ x: 330, y: 292, r: 5, label: 'NSS distal', lx: 240, ly: 330, anchor: 'end', lead: [325, 294] });
        S.needle({ from: [0, 90], to: [322, 274], label: 'Aiguille RF 22 G, parallèle au nerf' });
        S.spread({ x: 340, y: 282, rx: 40, ry: 12, label: '3–5 mL' });
      },
    },
    {
      id: 'ssn-anterieure', section: 'technique', titre: 'Voie antérieure sus-claviculaire — sous l\'omohyoïdien',
      legende: 'Le nerf se détache du bord latéral du tronc supérieur et passe sous le ventre inférieur de l\'omohyoïdien. L\'artère sous-clavière et la plèvre sont proches : voie diagnostique, petits volumes.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coronal oblique sus-claviculaire', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 92 L0 100 Z', label: 'Platysma / SCM', at: [110, 86], opacity: 0.4 });
        S.muscle({ path: 'M330 118 L640 96 L640 130 L340 150 Z', label: 'Omohyoïdien', at: [520, 118], opacity: 0.6 });
        S.muscle({ path: 'M0 100 L200 108 L250 200 L0 220 Z', label: 'Scalène antérieur', at: [90, 160], opacity: 0.45 });
        S.muscle({ path: 'M330 150 L640 130 L640 300 L360 300 Z', label: 'Scalène moyen', at: [520, 220], opacity: 0.45 });
        S.artery({ x: 215, y: 250, r: 26, label: 'A. sous-clavière', lx: 215, ly: 300, small: false });
        S.nerve({ x: 268, y: 178, r: 13, label: 'Tronc sup.', lx: 268, ly: 215, small: true });
        S.nerve({ x: 292, y: 210, r: 12, label: 'Tronc moy.', lx: 300, ly: 245, small: true });
        S.nerve({ x: 300, y: 242, r: 11 });
        S.nerve({ x: 372, y: 158, r: 6, label: 'N. suprascapulaire', lx: 470, ly: 172, anchor: 'start', lead: [379, 160] });
        S.bone({ path: 'M120 300 L400 300 L520 296', label: '1re côte', at: [420, 325], ldy: 0 });
        S.pleura({ points: [[0, 318], [110, 318]], label: 'Plèvre', at: [50, 340] });
        S.needle({ from: [640, 84], to: [386, 152], label: '22 G 50 mm' });
        S.spread({ x: 372, y: 160, rx: 26, ry: 10, label: '3–5 mL' });
      },
    },
  ],

  checklist: [
    'Prévenir de la faiblesse transitoire de l\'abduction / rotation externe (2–6 h) ; pas de conduite le jour même',
    'Noter la cible utilisée (fosse / spinoglénoïdienne / antérieure) et l\'EN à 30 min pour valoriser le bloc diagnostique',
  ],
});
