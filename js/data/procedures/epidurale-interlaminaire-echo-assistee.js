/* Fiche : infiltration épidurale interlaminaire lombaire écho-assistée. */
ECHO.register({
  id: 'epidurale-interlaminaire-echo-assistee',
  titre: 'Épidurale interlaminaire lombaire écho-assistée',
  titreCourt: 'Épidurale interlaminaire',
  en: 'Ultrasound-assisted lumbar interlaminar epidural steroid injection — pre-procedural neuraxial ultrasound (paramedian sagittal oblique and transverse interlaminar views) for level, midline, depth and angle, followed by loss-of-resistance puncture; real-time paramedian in-plane epidural access',
  region: 'rachis-bassin',
  types: ['infiltration'],
  niveau: 3,
  grade: 'Bonne pour l\'apport du repérage échographique préalable sur le succès et le nombre de tentatives de ponction (méta-analyses en anesthésie neuraxiale) · **inexistante** pour un gain d\'efficacité clinique de l\'infiltration elle-même · la radioscopie reste la référence en algologie',
  maj: '2026-09',
  motsCles: ['épidurale', 'interlaminaire', 'écho-assistance', 'dents de scie', 'complexe postérieur', 'ligament jaune', 'perte de résistance', 'para-sagittal oblique', 'radiculalgie', 'canal lombaire étroit', 'hématome épidural'],
  resume: 'Disons-le d\'emblée : **l\'échographie ne guide pas une épidurale interlaminaire, elle l\'assiste**. Elle repère le niveau, la ligne médiane, la fenêtre interlaminaire, la profondeur du complexe ligamentaire postérieur et l\'angle d\'attaque — après quoi la ponction se fait par **perte de résistance**, à l\'aveugle. Le bénéfice démontré porte donc sur la **ponction** (moins de tentatives, moins de redirections, meilleur taux de succès chez les patients aux repères palpatoires difficiles : obésité, arthrose sévère, scoliose, rachis opéré), pas sur l\'efficacité de l\'infiltration. En algologie, la **radioscopie reste la référence** : elle seule confirme la position par un épidurogramme et détecte un passage vasculaire. La variante en temps réel — abord para-médian in-plane par la fenêtre para-sagittale oblique — existe et fonctionne, mais elle est techniquement exigeante et ne dispense d\'aucun des contrôles. La radiofréquence n\'est pas concernée par ce geste : il n\'y a pas de cible nerveuse individualisable.',

  flash: {
    position: 'assis', positionNote: 'assis penché en avant sur une table, dos rond (ouvre les espaces interlaminaires) ; décubitus latéral genoux-poitrine si malaise vagal probable ; procubitus si la ponction est faite sous arceau',
    sonde: 'convexe', sondeNote: '2–5 MHz **obligatoirement** (le complexe postérieur est à 4–7 cm), profondeur 8–10 cm, preset neuraxial si disponible',
    approche: 'in-plane', approcheNote: 'écho-**assistance** : repérage et marquage, puis ponction médiane ou para-médiane par perte de résistance. Variante en temps réel : in-plane para-médian par la fenêtre para-sagittale oblique',
    aiguille: 'Aiguille de Tuohy 18–20 G, 80–90 mm (150 mm chez l\'obèse) ; seringue à basse résistance remplie de sérum physiologique',
    cible: 'Espace épidural postérieur au niveau visé. **Critère de fin : perte de résistance franche au sérum, absence de reflux de LCS et de sang, puis injection sans résistance** — la profondeur mesurée en écho sert de garde-fou, pas de critère',
    injectat: '5–10 mL : dexaméthasone 8–10 mg (**non particulaire**) + sérum physiologique ± AL très dilué',
    duree: '10 min de repérage + 10–15 min de ponction',
  },

  indications: [
    '**Radiculalgie lombo-sacrée** sur hernie discale ou conflit foraminal, après échec du traitement médical bien conduit — l\'indication de loin la plus fréquente.',
    '**Canal lombaire étroit** avec claudication radiculaire : l\'abord interlaminaire permet de cibler le niveau le plus sténosé, ce que la voie caudale ne fait pas.',
    'Douleur radiculaire **pluri-radiculaire ou bilatérale** : l\'épidurale interlaminaire couvre les deux côtés, contrairement à la transforaminale.',
    'Situation où l\'échoguidage préalable apporte réellement quelque chose : **IMC élevé, arthrose interapophysaire sévère, scoliose, chirurgie antérieure du rachis, échec de ponction palpatoire** — c\'est là et seulement là que l\'écho-assistance change le geste.',
    'Plateau technique sans arceau, ou volonté d\'éviter l\'irradiation chez un sujet jeune — en assumant explicitement la perte du contrôle par épidurogramme.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction, sepsis, hypertension intracrânienne, allergie vraie aux amino-amides, **troubles majeurs de l\'hémostase non corrigés**.',
    '**Risque hémorragique — le point sur lequel il ne faut pas se tromper.** Dans la stratification ASRA-ESRA 2018, les infiltrations épidurales interlaminaires (cervicales comme lombaires) relèvent de la catégorie **intermédiaire**, la catégorie **élevée** étant réservée aux gestes de stimulation médullaire, aux cathéters et pompes intrathécaux, à la vertébroplastie et à l\'adhésiolyse épidurale. Mais la **conséquence** d\'un saignement est ici la plus grave de toute la région : l\'**hématome épidural compressif**, urgence chirurgicale. De nombreuses équipes appliquent donc une prudence de niveau « élevé » : interruption des anticoagulants selon les délais recommandés, décision partagée avec le prescripteur, antiagrégants discutés au cas par cas. **En cas de doute, la voie caudale est l\'alternative** — même espace épidural, risque hématique sans conséquence compressive.',
    '**Relatives** : arthrodèse instrumentée au niveau visé (fenêtre interlaminaire absente), scoliose sévère, spondylolisthésis évolué, patient incapable de tenir la position.',
    'Corticoïde : diabète déséquilibré, infection évolutive, insuffisance cardiaque décompensée.',
    '**Écho-assistance chez le patient très obèse** : la fenêtre est souvent inexploitable au-delà d\'un IMC de 40 — ce qui, paradoxalement, est le patient chez qui elle serait la plus utile. Ne pas transformer un repérage impossible en tentative de ponction hasardeuse : passer sous arceau.',
  ],
  alternatives: 'La **radioscopie est la référence en algologie** et devrait rester le choix par défaut pour toute épidurale interlaminaire : elle confirme la position par un épidurogramme, détecte le passage vasculaire et documente le niveau. L\'**épidurale transforaminale** est plus sélective sur une radiculalgie mono-radiculaire documentée, mais expose au risque artériel médullaire et impose le corticoïde non particulaire. L\'**épidurale caudale** est l\'alternative la plus sûre chez le patient à risque hémorragique, déjà opéré, ou dont les repères interlaminaires sont inexploitables (fiche dédiée) : même espace, abord bas, pas de risque de brèche haute ni d\'hématome compressif. La place raisonnable de l\'échographie est donc, dans la grande majorité des cas, **en amont de la radioscopie** — repérer, marquer, mesurer, puis ponctionner sous arceau avec beaucoup moins de clichés.',

  anatomie: `De la peau à l\'espace épidural, l\'aiguille traverse : peau, tissu sous-cutané, fascia thoraco-lombaire, muscles paravertébraux (en abord para-médian) ou ligament supra-épineux puis interépineux (en abord médian), enfin le **ligament jaune**, dont le franchissement donne la perte de résistance. Immédiatement au-delà : l\'**espace épidural postérieur** (graisse, plexus veineux), puis la **dure-mère** et le sac thécal contenant la queue de cheval — le tout dans **3 à 6 mm**.

Le **cul-de-sac dural se termine en S2** et le **cône médullaire en L1-L2** (parfois L3) : c\'est pourquoi la ponction se fait au-dessous de L2-L3, et de préférence en L4-L5 ou L5-S1, où l\'espace épidural postérieur est le plus épais et la queue de cheval la plus mobile.

En échographie, deux « complexes » structurent l\'image :
- le **complexe postérieur** = ligament jaune + dure-mère postérieure, souvent inséparables, apparaissant comme une bande hyperéchogène ;
- le **complexe antérieur** = dure-mère antérieure + ligament longitudinal postérieur + face postérieure du corps vertébral.
Entre les deux, le **sac dural**, anéchogène.

### Ce qui compte pour le geste
- **Deux vues, deux informations.** La coupe **para-sagittale oblique** (sonde à 1–2 cm de la ligne médiane, inclinée vers la médiane) donne les **lames en « dents de scie »** et, dans les fenêtres interlaminaires, les deux complexes : c\'est la vue qui donne le **niveau** et la **profondeur**. La coupe **transverse interlaminaire** donne la **ligne médiane** et l\'**angle** d\'attaque. Aucune des deux ne suffit seule.
- **La fenêtre para-médiane est la meilleure fenêtre acoustique** du rachis lombaire : l\'abord médian bute sur les épineuses, dont l\'ombre masque tout. C\'est un résultat ancien et constant de la littérature d\'échographie neuraxiale.
- **La profondeur mesurée sous-estime légèrement la profondeur réelle** de ponction, la sonde comprimant les tissus. La corriger mentalement de quelques millimètres, et ne jamais s\'en servir comme critère de position : elle sert de **garde-fou** (« je ne devrais pas être à plus de 6 cm ici »), pas de confirmation.
- **Profondeur usuelle du complexe postérieur** : 4 à 6 cm chez l\'adulte de corpulence normale, jusqu\'à 8–10 cm chez l\'obèse — au-delà, la fenêtre échographique se dégrade au moment même où l\'on en aurait le plus besoin.
- **Pas de cible nerveuse individualisable** : ce geste n\'a pas d\'équivalent en radiofréquence. Chercher une « RF épidurale » n\'a pas de sens ici.`,

  installation: {
    patient: `**Assis**, penché en avant sur une table roulante ou un dossier de chaise, pieds sur un tabouret, **dos rond** : la cyphose lombaire ouvre les espaces interlaminaires et interépineux, et c\'est la position qui rend le repérage le plus lisible. Alternative : **décubitus latéral**, genoux ramenés sur la poitrine — moins bonne ouverture, mais préférable chez le patient à risque de malaise vagal. **Procubitus** si la ponction sera faite sous arceau.

Faire prendre la position **avant** le repérage et la conserver ensuite : tout changement de position invalide les marques cutanées, la profondeur et l\'angle mesurés. C\'est l\'erreur la plus fréquente de l\'écho-assistance.

Marquer au feutre : la ligne médiane, les niveaux, le point de ponction et la direction. Photographier ou noter la profondeur mesurée.`,
    operateur: `Repérage debout derrière le patient, écran en face. La sonde travaille en deux temps : d\'abord **para-sagittale oblique** (1–2 cm de la ligne médiane, inclinée de 10–20° vers la médiane), puis **transverse** centrée sur l\'espace interlaminaire choisi.

Pour la ponction, deux protocoles :
- **Écho-assistance (recommandée)** : sonde reposée, ponction médiane ou para-médiane à travers les marques, par perte de résistance au sérum, à la profondeur et l\'angle mesurés.
- **Temps réel para-médian in-plane** : sonde maintenue en para-sagittal oblique par un aide ou par la main non dominante, aiguille de Tuohy engagée en caudal du bord inférieur de la sonde et progressée dans le plan vers la fenêtre interlaminaire. Technique exigeante, à réserver aux opérateurs entraînés, et qui **ne remplace pas la perte de résistance** — elle la complète.`,
    sonde: `- **Convexe 2–5 MHz obligatoirement** : le complexe postérieur est à 4–7 cm, un linéaire ne l\'atteint pas. Preset neuraxial ou abdominal, profondeur 8–10 cm, une seule focale sur le complexe postérieur.
- Gain remonté et compression douce mais constante : le complexe postérieur est une bande hyperéchogène fine, facilement effacée par un gain trop bas.
- Doppler couleur inutile ici (les structures cibles sont avasculaires) ; il ne détecte pas le plexus veineux épidural.
- Aiguille de Tuohy peu écho-visible : en temps réel, s\'attendre à suivre le **mouvement tissulaire** plutôt que l\'aiguille elle-même.`,
  },

  reperage: [
    { titre: 'Compter les niveaux depuis le sacrum', texte: 'Sonde **para-sagittale, 1–2 cm de la ligne médiane**, posée sur le sacrum : ligne osseuse **continue et plate**. Remonter : la première interruption est l\'espace **L5-S1**, puis L4-L5, etc. Marquer chaque espace au feutre en regard du milieu de la sonde. C\'est le comptage de référence du rachis lombaire.' },
    { titre: 'Obtenir la vue para-sagittale oblique', texte: 'Au niveau choisi, incliner la sonde de **10 à 20° vers la ligne médiane**. Les **lames** apparaissent comme des lignes hyperéchogènes obliques successives — l\'aspect en **« dents de scie »** — et, dans les fenêtres entre elles, deux bandes hyperéchogènes parallèles : le **complexe postérieur** (superficiel) et le **complexe antérieur** (profond), séparés par le sac dural anéchogène.' },
    { titre: 'Mesurer la profondeur', texte: 'Caliper de la peau au **complexe postérieur** : c\'est la profondeur attendue de perte de résistance (4–6 cm en général, jusqu\'à 8–10 cm chez l\'obèse). Compression douce et constante pendant la mesure ; noter la valeur. **Elle sert de garde-fou, pas de critère de position.**' },
    { titre: 'Passer en coupe transverse interlaminaire', texte: 'Rotation de 90° au niveau marqué, sonde centrée : on cherche l\'image où les deux complexes sont les plus nets, encadrés latéralement par les processus articulaires. Le **milieu de la sonde donne la ligne médiane** : la marquer. L\'inclinaison de la sonde nécessaire pour obtenir la meilleure image donne l\'**angle céphalique** de ponction (en général 10–25°).' },
    { titre: 'Croiser les deux marques', texte: 'Le point de ponction est l\'intersection de la marque médiane (coupe transverse) et de la marque de niveau (coupe para-sagittale). Vérifier la cohérence des deux repérages avant de désinfecter : une divergence de plus de 1 cm signe une erreur de comptage ou un déplacement du patient.' },
    { titre: 'Si les complexes ne sont pas visibles', texte: 'Causes par ordre de fréquence : profondeur mal réglée, gain trop bas, obliquité insuffisante, sonde trop latérale (on ne voit que les processus articulaires), ou morphotype. **Si après optimisation les complexes restent invisibles, l\'écho-assistance n\'apporte rien** : ne pas ponctionner « avec une profondeur approximative ». Deux options honnêtes — passer sous arceau, ou basculer sur une voie caudale échoguidée, dont la fenêtre reste exploitable chez presque tous les patients.' },
  ],

  sonoanatomie: [
    { structure: 'Lames (vue para-sagittale oblique)', aspect: 'Lignes hyperéchogènes obliques successives avec cône d\'ombre — aspect en « dents de scie »', repere: 'Chaque fenêtre entre deux lames est un espace interlaminaire' },
    { structure: 'Complexe ligamentaire postérieur', aspect: 'Bande hyperéchogène fine (ligament jaune + dure-mère postérieure, souvent inséparables) au fond de la fenêtre', repere: '**La structure à mesurer** : 4–6 cm chez l\'adulte normal, 8–10 cm chez l\'obèse' },
    { structure: 'Sac dural', aspect: 'Bande anéchogène entre les deux complexes, parfois traversée d\'échos mobiles (queue de cheval)', repere: 'Ce qu\'il ne faut pas ponctionner' },
    { structure: 'Complexe antérieur', aspect: 'Deuxième bande hyperéchogène profonde (dure-mère antérieure + LLP + corps vertébral)', repere: 'Limite profonde de l\'image ; sa visualisation valide la qualité de la fenêtre' },
    { structure: 'Processus articulaires (vue para-sagittale)', aspect: 'Ligne ondulée **continue**, sans fenêtre, plus latérale', repere: 'Si on la voit, la sonde est trop latérale — se rapprocher de la médiane' },
    { structure: 'Processus épineux (vue transverse médiane)', aspect: 'Relief médian superficiel avec ombre franche masquant tout le reste', repere: 'Explique pourquoi la fenêtre para-médiane est supérieure à la fenêtre médiane' },
    { structure: 'Sacrum (vue para-sagittale)', aspect: 'Ligne continue, plate, sans interruption', repere: 'Point zéro du comptage : la première fenêtre au-dessus est L5-S1' },
  ],

  technique: [
    { titre: 'Repérage complet et marquage', texte: 'Réaliser l\'intégralité du repérage (niveau, ligne médiane, profondeur, angle) **avant** toute désinfection, patient dans la position définitive. Marquer au feutre. Noter la profondeur mesurée sur la feuille de geste. **Ne plus faire bouger le patient.**' },
    { titre: 'Préparation et asepsie', texte: 'Checklist (fin de fiche). Asepsie **chirurgicale** : casaque, gants stériles, masque, champ troué, désinfection large en deux temps. Seringue à basse résistance remplie de sérum physiologique. Aiguille de Tuohy 18–20 G, biseau orienté en crânial. Voie veineuse posée, monitorage tensionnel, chariot d\'urgence vérifié.' },
    { titre: 'Anesthésie locale et progression', texte: '3–5 mL de lidocaïne 1 % de la peau jusqu\'au plan profond, sur le trajet prévu. Puis Tuohy engagée à l\'angle mesuré, progressée jusqu\'au ligament interépineux (abord médian) ou jusqu\'à la lame (abord para-médian) : sensation de prise ferme. En abord para-médian, le contact osseux sur la lame est un repère utile — « marcher » ensuite sur la lame vers le haut jusqu\'à sentir le ligament jaune.' },
    { titre: 'Perte de résistance — le vrai critère', texte: 'Progression **millimètre par millimètre**, mandrin liquide, pression continue ou intermittente sur le piston. La perte de résistance au franchissement du ligament jaune est **le critère de position** : l\'échographie n\'en donne aucun. Si la profondeur atteinte dépasse nettement la profondeur mesurée sans perte de résistance, **s\'arrêter et refaire le repérage** plutôt que d\'avancer.' },
    { titre: 'Vérifications avant injection', texte: 'Retirer le mandrin liquide et **attendre 10 secondes** : absence de reflux spontané de LCS ou de sang. Aspiration douce dans deux plans (une aspiration forte collabe les veines et rassure à tort). Puis **dose test** de 2–3 mL : absence de bloc moteur immédiat, absence de signes neurologiques centraux, absence de tachycardie.' },
    { titre: 'Injection et critère de fin', texte: 'Injecter **5 à 10 mL** lentement, fractionnés, sans résistance. Une résistance à l\'injection ou une douleur radiculaire intense signent une position incorrecte : arrêter. Critère de fin : injection complète, indolore, sans résistance, sans déficit. Retrait de l\'aiguille avec le mandrin en place.' },
    { titre: 'Après le geste', texte: 'Surveillance **au moins 30 minutes**, allongé : tension artérielle, **test de la marche et évaluation de la force des membres inférieurs** avant la sortie, vérification de la miction. Consignes écrites impératives — consulter en urgence en cas de **déficit moteur, de troubles sphinctériens, de douleur rachidienne croissante, de fièvre ou de céphalées posturales**. Ces signes sont ceux de l\'hématome et de l\'abcès épiduraux : le patient doit savoir qu\'ils imposent une IRM en urgence.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Radiculalgie mono ou bi-radiculaire | **Dexaméthasone 8–10 mg** + sérum physiologique | **5–8 mL** | Le corticoïde **non particulaire** est la règle pour toute injection épidurale (recommandations multisociétés post-alerte FDA 2014) |
| Canal lombaire étroit | Dexaméthasone 8–10 mg + sérum physiologique | **8–10 mL** | Volume plus élevé pour couvrir plusieurs niveaux ; injecter lentement, la distension est douloureuse |
| Avec anesthésique local | Ajouter lidocaïne 0,5 % ou ropivacaïne 0,1 % | Compris dans les 5–10 mL | **Facultatif et discutable** : un AL épidural, même dilué, peut masquer un déficit moteur débutant et retarde la sortie. L\'omettre est défendable, surtout en ambulatoire |
| Dose test | Le mélange lui-même | 2–3 mL | Attendre 1–2 minutes : pas de bloc moteur, pas de signes centraux, pas de tachycardie |

**Corticoïde non particulaire — non négociable.** Les recommandations multisociétés publiées après l\'alerte de la FDA de 2014 sur les injections épidurales de corticoïdes (groupe de travail piloté par Rathmell, 2015) posent le principe du corticoïde **non particulaire** pour la voie épidurale. En France, cela signifie la **dexaméthasone**. Ne jamais utiliser de bétaméthasone, de méthylprednisolone, de triamcinolone acétonide et *a fortiori* d\'hexacétonide dans l\'espace épidural.

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Les volumes en jeu ici sont faibles ; le risque tient à l\'**injection intravasculaire** (plexus veineux épidural), pas à la dose cumulée. Émulsion lipidique 20 % disponible et vérifiée.

**Rythme** : espacer d\'au moins 4 à 6 semaines, maximum 3 à 4 injections par an. Trois épidurales sans effet ne justifient pas une quatrième : elles justifient de reconsidérer le diagnostic ou l\'indication chirurgicale.`,

  variantes: [
    { titre: 'Abord para-médian in-plane en temps réel', texte: `Décrit et évalué par l\'équipe de Karmakar : sonde maintenue en **para-sagittale oblique**, aiguille de Tuohy engagée en caudal du bord inférieur de la sonde et progressée **dans le plan** vers la fenêtre interlaminaire, en visant le complexe postérieur.

Ce qui fonctionne : on voit la trajectoire, on corrige en continu, et on visualise l\'élargissement de l\'espace épidural à l\'injection de sérum. Ce qui limite : l\'aiguille de Tuohy est peu écho-visible à cette profondeur et à cet angle, on suit surtout le **mouvement tissulaire** ; l\'ergonomie à une main est difficile ; la stérilité impose une housse et un aide. **La perte de résistance reste obligatoire** — le temps réel ne la remplace pas.

À réserver aux opérateurs entraînés, et plutôt comme technique de sauvetage après échec de l\'abord classique que comme routine.` },
    { titre: 'Écho-assistance puis ponction sous arceau — la stratégie recommandée', texte: 'C\'est le meilleur usage de l\'échographie sur ce geste, et il est sous-utilisé. Repérage échographique complet (niveau, médiane, profondeur, angle, marquage cutané) fait **avant** l\'installation sous arceau, puis ponction radioguidée avec **épidurogramme de contrôle**. Bénéfices : moins de clichés, moins de tâtonnement, temps de scopie et dose délivrée nettement réduits, tout en gardant la seule confirmation valable de la position et la détection du passage vasculaire. Chez l\'obèse et le rachis opéré, c\'est cette combinaison qui rend le geste faisable en un temps raisonnable.' },
    { titre: 'Repérage échographique du niveau seul', texte: 'Usage minimal mais réel : chez un patient dont les repères palpatoires sont introuvables, trente secondes de sonde para-sagittale suffisent à compter les niveaux depuis le sacrum et à marquer L4-L5. Cela évite l\'erreur de niveau — la plus banale et la plus facilement évitable des erreurs de ce geste — sans rien exiger de plus qu\'un convexe et un feutre.' },
    { titre: 'Ce qui n\'existe pas ici : la radiofréquence', texte: 'L\'espace épidural n\'offre aucune cible nerveuse individualisable et discrète. Il n\'y a donc **pas de radiofréquence épidurale interlaminaire**. La dénervation d\'une douleur d\'origine rachidienne passe par les branches médiales (facettes) ou les branches latérales sacrées (sacro-iliaque), pas par l\'espace épidural.' },
  ],

  pearls: [
    'Faire tout le repérage dans la position définitive de ponction : un patient qui bouge entre le repérage et le geste rend les marques, la profondeur et l\'angle caducs.',
    'La fenêtre para-médiane est la seule bonne fenêtre acoustique du rachis lombaire ; l\'abord médian ne montre que l\'ombre des épineuses.',
    'Compter les niveaux depuis le sacrum, jamais depuis une palpation de la ligne bi-crêtes : l\'erreur de niveau est la plus fréquente et la plus évitable.',
    'La profondeur mesurée est un **garde-fou**, pas un critère : si on la dépasse nettement sans perte de résistance, on s\'arrête et on refait le repérage.',
    'Chez l\'obèse, le repérage échographique du niveau seul (30 secondes) apporte déjà beaucoup, même si les complexes ne sont pas visibles.',
    'Envisager systématiquement la voie caudale comme alternative chez le patient à risque hémorragique ou au rachis opéré : même espace épidural, sans risque d\'hématome compressif.',
    'Le meilleur usage de l\'échographie ici est de préparer la radioscopie, pas de la remplacer.',
  ],
  pieges: [
    'Croire que l\'échographie « guide » l\'épidurale : elle ne voit ni l\'aiguille de façon fiable, ni la diffusion, ni le passage vasculaire. La perte de résistance reste le critère.',
    'Ponctionner à la profondeur mesurée « puisque c\'est là que devrait être l\'espace », sans perte de résistance franche : c\'est le mécanisme direct de la brèche dure-mérienne.',
    'Utiliser une sonde linéaire : le complexe postérieur est à 4–7 cm, elle ne le montrera pas.',
    'Utiliser un corticoïde particulaire dans l\'espace épidural.',
    'Injecter un anesthésique local concentré : le bloc moteur qui en résulte masque un déficit débutant et rend la surveillance ininterprétable.',
    'Sous-estimer le risque hémorragique parce que le classement ASRA-ESRA est « intermédiaire » : c\'est la conséquence, et non la probabilité, qui doit dicter la prudence ici.',
    'Laisser sortir le patient sans consignes écrites sur les signes d\'hématome et d\'abcès épiduraux.',
    'S\'obstiner en écho-assistance quand les complexes ne sont pas visibles : ce n\'est plus de l\'assistance, c\'est une ponction à l\'aveugle avec une fausse impression de sécurité.',
  ],
  complications: [
    '**Hématome épidural compressif** : la complication redoutée. Rare, mais c\'est une **urgence neurochirurgicale** — douleur rachidienne intense et croissante, puis déficit moteur et troubles sphinctériens dans les heures suivant le geste. Conduite à tenir : IRM en urgence et avis neurochirurgical immédiat, le pronostic dépendant du délai de décompression.',
    '**Brèche dure-mérienne** : moins de 1 % en mains entraînées, jusqu\'à quelques pour cent chez l\'opérateur peu expérimenté ou en anatomie difficile — reflux de LCS. Céphalées posturales retardées de 24–48 h → repos, hydratation, caféine, antalgiques ; blood patch si elles persistent au-delà de 48–72 h ou si elles sont invalidantes.',
    '**Rachianesthésie totale** en cas d\'injection intrathécale non reconnue d\'un volume important d\'AL : bloc moteur ascendant, hypotension, détresse respiratoire — urgence vitale. Prévention : dose test et injection fractionnée.',
    '**Abcès épidural et méningite** : exceptionnels mais gravissimes. Fièvre, douleur rachidienne, syndrome méningé, déficit → IRM en urgence. Justifient l\'asepsie chirurgicale complète, casaque et masque compris.',
    'Injection intravasculaire dans le plexus veineux épidural : signes de toxicité systémique → arrêt, oxygène, émulsion lipidique 20 % 1,5 mL/kg puis 0,25 mL/kg/min.',
    'Bloc moteur transitoire, rétention urinaire, hypotension : liés à l\'AL ; vérifier la marche et la miction avant la sortie.',
    'Douleur radiculaire fulgurante pendant la progression (contact d\'une racine) : arrêt immédiat, retrait, repositionnement — jamais d\'injection sur une paresthésie.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie, rétention hydrosodée.',
  ],
  securite: [
    '**Asepsie chirurgicale complète** : masque, casaque, gants stériles, champ troué, désinfection en deux temps. C\'est un geste péri-médullaire, pas une infiltration articulaire.',
    '**Corticoïde non particulaire** (dexaméthasone) — recommandations multisociétés post-alerte FDA 2014.',
    'Perte de résistance comme unique critère de position ; profondeur échographique comme garde-fou. Si l\'un contredit l\'autre, on refait le repérage.',
    'Dose test de 2–3 mL et injection fractionnée ; jamais d\'injection sur une paresthésie ou contre une résistance.',
    'Gestion de l\'hémostase discutée avec le prescripteur : classement **intermédiaire** dans ASRA-ESRA 2018, mais conséquence potentiellement catastrophique — appliquer une prudence renforcée, et préférer la voie caudale en cas de doute.',
    'Voie veineuse, monitorage tensionnel, chariot d\'urgence et émulsion lipidique vérifiés avant le geste.',
    'Surveillance 30 min minimum avec test de la marche, évaluation de la force et vérification de la miction ; **consignes écrites de signes d\'alerte remises et expliquées**.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, test de la marche, force des membres inférieurs, miction. Consignes écrites remises et expliquées (déficit moteur, troubles sphinctériens, douleur rachidienne croissante, fièvre, céphalées posturales → consultation en urgence).
- **J2–J3** : appel de contrôle recommandé après une première épidurale — c\'est la fenêtre où se révèlent la brèche dure-mérienne (céphalées) et, plus rarement, l\'infection.
- **J7–J15** : EN, périmètre de marche, retentissement fonctionnel, consommation d\'antalgiques. Le délai d\'action de la dexaméthasone est de 2 à 7 jours : ne rien conclure avant J7.
- **J30–J45** : décision. Réponse franche → surveiller, utiliser la fenêtre pour la rééducation ; réponse partielle → une deuxième injection est légitime, espacée de 4 à 6 semaines ; **aucune réponse → ne pas répéter une troisième fois à l\'identique**, mais reconsidérer la cible (transforaminale ciblée, facettaire), le diagnostic, ou l\'indication chirurgicale.
- **À 3 mois** : l\'effet attendu est une fenêtre de quelques semaines à quelques mois. Le résultat à un an dépend de ce qui est fait pendant cette fenêtre, pas du nombre d\'infiltrations.
- Tracer systématiquement : niveau, modalité de guidage (**écho-assistance seule vs écho + radioscopie — le distinguer explicitement**), profondeur mesurée et profondeur réelle de perte de résistance, produits et volumes, nombre de tentatives, incidents.`,

  evidence: `- **Apport du repérage échographique préalable sur la ponction** : c\'est le point le mieux établi. Les méta-analyses d\'échographie neuraxiale (anesthésie rachidienne et péridurale, notamment les travaux de synthèse de Perlas et coll. et la revue systématique publiée dans le *BMJ* par Shaikh et coll. en 2013) montrent une **réduction du nombre de tentatives et de redirections d\'aiguille, un meilleur taux de succès à la première tentative et moins de ponctions traumatiques**. Preuve **bonne**, mais elle porte sur la **ponction**, en population obstétricale et chirurgicale — pas sur l\'efficacité d\'une infiltration de corticoïde en douleur chronique.
- **Bénéfice concentré sur les patients difficiles** : les travaux de l\'équipe de Chin en anatomie de surface difficile (obésité, chirurgie rachidienne antérieure, repères impalpables) montrent le gain le plus net dans ce sous-groupe. Chez le sujet mince aux repères francs, l\'apport est marginal.
- **Fenêtre para-médiane** : les travaux fondateurs de Grau et de son équipe au début des années 2000 ont établi que la fenêtre **para-médiane** est acoustiquement supérieure à la fenêtre médiane pour l\'imagerie de l\'espace épidural lombaire. Résultat constant depuis.
- **Abord para-médian in-plane en temps réel** : décrit et évalué par l\'équipe de Karmakar (2009), faisable, avec visualisation de l\'élargissement de l\'espace épidural à l\'injection. Séries de petite taille, opérateurs experts. Preuve **faible**, non généralisable.
- **Efficacité clinique de l\'infiltration épidurale interlaminaire** (indépendamment du guidage) : preuve **modérée** dans la radiculalgie lombo-sacrée à court et moyen terme, **plus discutée** dans le canal lombaire étroit et au-delà de 3 mois. Le débat sur le bénéfice réel des corticoïdes épiduraux reste ouvert et fortement polarisé.
- **Sécurité** : l\'alerte de la FDA de 2014 et les recommandations multisociétés qui l\'ont suivie (groupe piloté par Rathmell, *Anesthesiology*, 2015) ont fixé le principe du corticoïde **non particulaire** et une série de garde-fous procéduraux. C\'est la référence actuelle.
- **Les trous de la littérature** : (1) **aucun essai** n\'a comparé l\'épidurale interlaminaire **écho-assistée** à l\'épidurale sous radioscopie sur des critères cliniques en douleur chronique — l\'essentiel des données vient de l\'anesthésie neuraxiale ; (2) aucune donnée sur la sécurité comparée (taux de brèche, d\'hématome) entre les deux modalités ; (3) pas de démonstration que l\'écho-assistance réduise le taux de placement extra-épidural, faute d\'un critère de vérification autre que la radioscopie. **Conclusion honnête : l\'échographie améliore la ponction, elle ne remplace pas le contrôle radiologique.**`,

  references: [
    { auteurs: 'Grau T, Leipold RW, Conradi R, Martin E, Motsch J', titre: 'Ultrasound imaging facilitates localization of the epidural space during combined spinal and epidural anesthesia', revue: 'Regional Anesthesia and Pain Medicine', annee: '2001', type: 'étude clinique', verif: false },
    { auteurs: 'Grau T, Leipold RW, Horter J, Conradi R, Martin E, Motsch J', titre: 'Paramedian access to the epidural space: the optimum window for ultrasound imaging', revue: 'Journal of Clinical Anesthesia', annee: '2001', type: 'étude clinique', note: 'Établit la supériorité de la fenêtre para-médiane.', verif: false },
    { auteurs: 'Karmakar MK, Li X, Ho AM, Kwok WH, Chui PT', titre: 'Real-time ultrasound-guided paramedian epidural access: evaluation of a novel in-plane technique', revue: 'British Journal of Anaesthesia', annee: '2009', type: 'étude clinique', note: 'Description de l\'abord para-médian in-plane en temps réel.', verif: false },
    { auteurs: 'Chin KJ, Perlas A, Chan V, Brown-Shreves D, Koshkin A, Vaishnav V', titre: 'Ultrasound imaging facilitates spinal anesthesia in adults with difficult surface anatomic landmarks', revue: 'Anesthesiology', annee: '2011', type: 'ECR', note: 'Le sous-groupe où le bénéfice est le plus net.', verif: false },
    { auteurs: 'Perlas A, Chaparro LE, Chin KJ', titre: 'Lumbar neuraxial ultrasound for spinal anesthesia: a systematic review and meta-analysis', revue: 'Regional Anesthesia and Pain Medicine', annee: '2016', type: 'méta-analyse', verif: false },
    { auteurs: 'Shaikh F, Brzezinski J, Alexander S, et al.', titre: 'Ultrasound imaging for lumbar punctures and epidural catheterisations: systematic review and meta-analysis', revue: 'BMJ', annee: '2013', type: 'méta-analyse', note: 'Réduction des échecs et des ponctions traumatiques.', verif: false },
    { auteurs: 'Chin KJ, Karmakar MK, Peng P', titre: 'Ultrasonography of the adult thoracic and lumbar spine for central neuraxial blockade', revue: 'Anesthesiology', annee: '2011', type: 'revue', note: 'Référence descriptive de la sono-anatomie neuraxiale (complexes postérieur et antérieur).', verif: false },
    { auteurs: 'Rathmell JP, Benzon HT, Dreyfuss P, et al.', titre: 'Safeguards to prevent neurologic complications after epidural steroid injections: consensus opinions from a multidisciplinary working group and national organizations', revue: 'Anesthesiology', annee: '2015', type: 'reco', note: 'Fondement de la règle du corticoïde non particulaire.', verif: false },
    { auteurs: 'U.S. Food and Drug Administration', titre: 'Drug safety communication: FDA requires label changes to warn of rare but serious neurologic problems after epidural corticosteroid injections for pain', revue: 'FDA Drug Safety Communication', annee: '2014', type: 'alerte de sécurité', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'epi-psos', section: 'sonoanatomie', titre: 'Coupe para-sagittale oblique — lames en « dents de scie » et complexes ligamentaires',
      legende: 'Sonde à 1–2 cm de la ligne médiane, inclinée de 10–20° vers la médiane. Les lames se succèdent en dents de scie ; dans chaque fenêtre interlaminaire apparaissent le complexe postérieur (ligament jaune + dure-mère postérieure), le sac dural anéchogène et le complexe antérieur. La mesure de la peau au complexe postérieur donne la profondeur attendue de perte de résistance — un garde-fou, jamais un critère de position.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Para-sagittal oblique, 1–2 cm de la médiane', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 76 L640 250 L0 258 Z', label: 'Érecteurs du rachis', at: [108, 148], opacity: 0.48 });
        S.bone({ path: 'M40 268 L150 238' });
        S.bone({ path: 'M240 270 L350 240' });
        S.bone({ path: 'M440 272 L550 242' });
        S.label({ x: 300, y: 216, text: 'Lames — aspect en « dents de scie »', small: true });
        S.region({ path: 'M154 308 L236 314 L236 372 L154 366 Z', fill: '#03060a', opacity: 0.92 });
        S.region({ path: 'M354 310 L436 316 L436 374 L354 368 Z', fill: '#03060a', opacity: 0.92 });
        S.fascia({ points: [[154, 302], [236, 308]], width: 3.5 });
        S.fascia({ points: [[354, 304], [436, 310]], width: 3.5 });
        S.fascia({ points: [[152, 374], [238, 380]], width: 3.5 });
        S.fascia({ points: [[352, 376], [436, 382]], width: 3.5 });
        S.label({ x: 596, y: 318, text: 'Complexe postérieur (lig. jaune + dure-mère)', anchor: 'end', cls: 'lbl-fascia', small: true, lead: [438, 308] });
        S.label({ x: 195, y: 344, text: 'Sac dural', cls: 'lbl-fluid', small: true });
        S.label({ x: 596, y: 400, text: 'Complexe antérieur (LLP + corps vertébral)', anchor: 'end', cls: 'lbl-fascia', small: true, lead: [436, 382] });
        S.target({ x: 195, y: 304, r: 13 });
        S.label({ x: 18, y: 300, text: 'Peau → complexe postérieur\n4–6 cm (8–10 cm si obèse)', anchor: 'start', small: true });
      },
    },
    {
      id: 'epi-transverse', section: 'technique', titre: 'Coupe transverse interlaminaire — ligne médiane, profondeur et angle de la trajectoire',
      legende: 'Sonde transversale centrée sur l\'espace interlaminaire : les deux complexes sont encadrés latéralement par les processus articulaires. Le milieu de la sonde donne la ligne médiane, son inclinaison donne l\'angle céphalique. Ces trois données — niveau, médiane, profondeur et angle — sont tout ce que l\'échographie apporte : la ponction elle-même se fait ensuite par perte de résistance.',
      opts: { depth: 8 },
      build: S => {
        S.orient({ left: 'Gauche', right: 'Droite' }).probeInfo({ plan: 'Transverse interlaminaire', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 76 L640 76 L640 266 L0 266 Z', label: 'Érecteurs du rachis', at: [96, 148], opacity: 0.48 });
        S.bone({ path: 'M56 292 Q116 256 176 292', label: 'Proc. articulaire', at: [116, 312], small: true });
        S.bone({ path: 'M464 292 Q524 256 584 292', label: 'Proc. articulaire', at: [524, 312], small: true });
        S.region({ path: 'M212 326 L428 326 L428 372 L212 372 Z', fill: '#03060a', opacity: 0.92 });
        S.fascia({ points: [[200, 284], [320, 288], [440, 292]], width: 4 });
        S.fascia({ points: [[200, 376], [320, 380], [440, 384]], width: 4 });
        S.label({ x: 604, y: 336, text: 'Complexe postérieur', anchor: 'end', cls: 'lbl-fascia', small: true, lead: [438, 290] });
        S.label({ x: 320, y: 356, text: 'Sac dural', cls: 'lbl-fluid', small: true });
        S.label({ x: 604, y: 404, text: 'Complexe antérieur', anchor: 'end', cls: 'lbl-fascia', small: true, lead: [438, 382] });
        S.label({ x: 16, y: 232, text: 'Profondeur mesurée : 4–7 cm\nAngle relevé : 10–25° céphalique', anchor: 'start', small: true });
        S.target({ x: 320, y: 288, r: 14 });
        S.needle({ from: [320, 50], to: [320, 282], label: 'Trajectoire planifiée (pas de guidage temps réel)' });
        S.spread({ x: 320, y: 310, rx: 84, ry: 7, label: '5–10 mL' });
      },
    },
  ],

  checklist: [
    'Repérage complet (niveau, ligne médiane, profondeur, angle) fait dans la position définitive de ponction — le patient ne bouge plus ensuite',
    'Niveau compté depuis le sacrum, jamais par palpation seule',
    'Profondeur mesurée notée par écrit et comparée à la profondeur réelle de perte de résistance',
    'Anticoagulants et antiagrégants : décision partagée avec le prescripteur, prudence renforcée malgré le classement intermédiaire ; voie caudale envisagée comme alternative',
    'Asepsie chirurgicale complète : masque, casaque, gants stériles, champ troué',
    'Corticoïde **non particulaire** (dexaméthasone) vérifié sur l\'étiquette avant préparation',
    'Voie veineuse, monitorage tensionnel, chariot d\'urgence et émulsion lipidique 20 % vérifiés',
    'Dose test de 2–3 mL avant injection complète ; arrêt immédiat sur paresthésie ou résistance',
    'Surveillance 30 min : tension, force des membres inférieurs, marche, miction',
    'Consignes écrites de signes d\'alerte (déficit moteur, troubles sphinctériens, fièvre, douleur rachidienne croissante, céphalées posturales) remises et expliquées',
  ],
});
