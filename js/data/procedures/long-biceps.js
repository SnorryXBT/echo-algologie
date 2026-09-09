/* Fiche : infiltration de la gaine du tendon du long biceps échoguidée. */
ECHO.register({
  id: 'long-biceps',
  titre: 'Gaine du long biceps — infiltration échoguidée',
  titreCourt: 'Long biceps',
  en: 'Ultrasound-guided long head of the biceps (LHB) tendon sheath injection in the bicipital groove — biceps tenosynovitis and anterior shoulder pain',
  region: 'membre-sup',
  types: ['infiltration'],
  niveau: 1,
  grade: 'Modérée sur la précision de l\'échoguidage ; faible sur l\'efficacité propre du corticoïde (peu d\'ECR)',
  motsCles: ['épaule', 'long biceps', 'LHB', 'ténosynovite bicipitale', 'gouttière bicipitale', 'douleur antérieure d\'épaule', 'poulie du biceps', 'Speed', 'Yergason', 'subluxation du biceps'],
  maj: '2026-09',
  resume: 'La gaine du long biceps est la cible antérieure la plus accessible de l\'épaule et l\'une des plus faciles à manquer : le tendon est rond, superficiel, très anisotrope, et l\'espace péritendineux ne mesure qu\'un ou deux millimètres. Deux particularités commandent le geste. D\'abord la **branche ascendante de l\'artère circonflexe antérieure**, qui longe le bord latéral de la gouttière : on la cherche au Doppler avant de piquer, pas après. Ensuite la **communication constante entre la gaine et l\'articulation gléno-humérale** : un épanchement de la gaine traduit le plus souvent un épanchement articulaire et non une ténosynovite propre, et le produit injecté dans la gaine diffuse dans l\'articulation — ce qui rend le geste utile en thérapeutique mais peu spécifique en diagnostic. Cible : la gaine, jamais le tendon.',

  flash: {
    position: 'assis', positionNote: 'avant-bras en supination posé sur la cuisse, coude fléchi à 90°, épaule en rotation neutre ou légère rotation externe ; décubitus dorsal possible',
    sonde: 'lineaire', sondeNote: '10–18 MHz, profondeur 3–4 cm, focale à 1,5–2 cm ; Doppler couleur basse PRF obligatoire sur la gouttière',
    approche: 'in-plane', approcheNote: 'coupe transversale de la gouttière, aiguille latéro-médiale au-dessus de la branche ascendante de l\'artère circonflexe ; hors du plan possible en coupe transversale, in-plane distal-proximal en coupe longitudinale',
    aiguille: '22–25 G, 40–50 mm',
    cible: 'Espace périt endineux (gaine) au contact du tendon — critère de fin : liseré anéchogène qui cercle le tendon sur toute sa circonférence, sans image intratendineuse',
    injectat: '2–3 mL : méthylprednisolone 20–40 mg (ou bétaméthasone 1 mL) + lidocaïne 1 % ou ropivacaïne 0,2 %',
    duree: '5–10 min',
  },

  indications: [
    'Ténosynovite du long biceps documentée : épanchement circonférentiel de la gaine, épaississement et hypervascularisation péri-tendineuse au Doppler, douleur exquise à la palpation échoguidée de la gouttière.',
    'Tendinopathie du long biceps (épaississement, hétérogénéité, fissuration partielle) avec douleur antérieure d\'épaule concordante (Speed, Yergason, palpation de la gouttière).',
    'Douleur antérieure d\'épaule dans le cadre d\'une pathologie de coiffe ou d\'un conflit antéro-supérieur, en complément d\'un geste sous-acromial insuffisant.',
    '**Bloc diagnostique** avant ténotomie ou ténodèse : anesthésique local seul dans la gaine, réévaluation à 15 min. Attention, sa spécificité est limitée par la diffusion articulaire (voir Anatomie).',
    'Arthrite inflammatoire avec ténosynovite bicipitale (PR, spondyloarthrite) : la gaine est une localisation fréquente et facile à traiter.',
    'Instabilité ou subluxation du long biceps sur lésion de poulie : le corticoïde soulage la composante inflammatoire mais **ne corrige pas l\'instabilité** — à annoncer, la solution est chirurgicale si la gêne persiste.',
  ],
  contreIndications: [
    'Absolues : infection cutanée en regard, ténosynovite septique suspectée (fièvre, épanchement trouble, hyperhémie majeure — ponctionner pour bactériologie, ne pas injecter), allergie au produit, refus.',
    'Relatives : **tendinopathie sévère avec fissuration étendue ou subluxation** — le corticoïde péri-tendineux majore le risque de rupture d\'un tendon déjà fragilisé ; discuter d\'emblée l\'option chirurgicale chez le sujet jeune et actif.',
    'Diabète déséquilibré, infiltrations répétées du site, corticothérapie systémique.',
    'Risque hémorragique : geste **superficiel et compressible**, catégorie **faible risque** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ni des anticoagulants ; le Doppler préalable reste la vraie mesure de sécurité, quel que soit le traitement.',
  ],
  alternatives: 'Rééducation et adaptation des contraintes en flexion-supination contre résistance ; AINS. Infiltration sous-acromiale ou gléno-humérale si le tableau est mixte (dans ce dernier cas la diffusion depuis la gaine rend d\'ailleurs le geste bicipital partiellement redondant). Bloc du nerf suprascapulaire si l\'on veut éviter tout corticoïde local. En cas d\'échec avec bloc test franchement positif chez un sujet actif : **ténotomie ou ténodèse arthroscopique**, qui donne des résultats reproductibles sur la douleur antérieure — l\'infiltration sert alors surtout à sélectionner les bons candidats. La ténotomie percutanée à l\'aiguille et le PRP n\'ont pas de place validée sur ce tendon.',

  anatomie: `Le tendon de la **longue portion du biceps brachial** naît du tubercule supra-glénoïdien et du labrum supérieur, traverse l\'articulation gléno-humérale en intra-articulaire mais **extra-synovial**, franchit l\'intervalle des rotateurs sous la **poulie bicipitale**, puis descend dans la **gouttière intertuberculaire** entre la petite tubérosité (en dedans) et la grande tubérosité (en dehors), recouvert par le **ligament huméral transverse** et par des expansions tendineuses du subscapulaire et du grand pectoral.

La **poulie bicipitale** — ligament coraco-huméral, ligament gléno-huméral supérieur et fibres du subscapulaire et du supra-épineux — est la structure qui maintient le tendon dans son axe à l\'entrée de la gouttière. Sa lésion est la cause des subluxations et luxations médiales du tendon, presque toujours associées à une atteinte du subscapulaire.

La **gaine synoviale** qui entoure le tendon dans la gouttière est un **prolongement direct de la synoviale gléno-humérale** : les deux compartiments communiquent en permanence.

### Ce qui compte pour le geste
- **La communication avec l\'articulation change deux choses.** (1) Un épanchement de la gaine est le plus souvent le témoin d\'un épanchement gléno-huméral et non d\'une ténosynovite isolée : ne pas conclure trop vite. (2) Le corticoïde injecté dans la gaine **diffuse dans l\'articulation** — avantage thérapeutique sur une épaule mixte, mais perte de spécificité d\'un bloc test qui anesthésie du même coup la gléno-humérale.
- La **branche ascendante de l\'artère circonflexe antérieure de l\'humérus** chemine le long du **bord latéral** de la gouttière, au contact du tendon. C\'est la seule structure vasculaire à risque du geste ; elle est petite mais constante. Doppler couleur basse PRF systématique sur la fenêtre de ponction.
- Le tendon est à **1,5–2,5 cm** de profondeur, plus si le patient est musclé. Il est **rond en coupe transversale**, hyperéchogène, fibrillaire en coupe longitudinale, et **très anisotrope** : il devient noir dès que la sonde s\'incline, simulant une ténosynovite ou une fissuration.
- L\'espace utile est le **liseré péri-tendineux** de 1–2 mm. En descendant plus bas dans la gouttière, cet espace s\'élargit un peu et le tendon s\'éloigne de l\'artère : c\'est souvent le meilleur niveau de ponction.
- Un **épanchement physiologique** minime de la gaine est fréquent, déclive dans sa partie basse. Ne parler de ténosynovite que devant un épanchement **circonférentiel** et/ou une hypervascularisation péri-tendineuse.
- Piège anatomique : le tendon peut être **absent de la gouttière** (rupture ancienne avec rétraction, ou luxation médiale sur lésion du subscapulaire). Une gouttière vide se reconnaît à un « faux tendon » fait de tissu cicatriciel — il ne faut pas infiltrer une gaine qui n\'existe plus, mais chercher le tendon en dedans, devant le subscapulaire.`,

  installation: {
    patient: `**Assis**, coude fléchi à 90°, **avant-bras en supination** posé sur la cuisse, épaule en rotation neutre ou en légère rotation externe : la supination amène la gouttière en position antérieure, directement sous la sonde. Une rotation interne la fait fuir en dehors, une rotation externe excessive la fait passer en dedans.

Le **décubitus dorsal**, bras le long du corps en supination, donne la même fenêtre avec une meilleure stabilité et supprime le risque vagal : c\'est la position à préférer chez le patient anxieux ou si l\'on prévoit une aspiration.`,
    operateur: `Opérateur **en face** du patient ou du côté à traiter, écran dans l\'axe du regard. Sonde transversale sur la face antérieure du moignon de l\'épaule, ponction de **latéral en médial** : l\'aiguille aborde la gaine par son versant superficiel et latéral, **au-dessus** du plan de l\'artère circonflexe repérée au Doppler.

Si l\'artère occupe toute la fenêtre latérale, deux solutions : descendre de 1–2 cm dans la gouttière, où le rapport est plus lâche, ou changer de sens et aborder de **médial en latéral** (le versant médial est vasculairement libre, mais l\'angle y est moins confortable). Ne pas s\'entêter sur une fenêtre où le Doppler s\'allume.`,
    sonde: `- Linéaire **10–18 MHz**, preset MSK, profondeur **3–4 cm**, focale à 1,5–2 cm.
- **Doppler couleur à basse PRF** sur la gouttière avant toute ponction : la branche ascendante de la circonflexe antérieure est un petit vaisseau, elle disparaît si la PRF est réglée trop haut ou si l\'on comprime avec la sonde.
- Gain modéré : le tendon doit rester **franchement hyperéchogène** par rapport au deltoïde.
- **Anisotropie** : c\'est le piège majeur de ce tendon. Maintenir le faisceau perpendiculaire, et devant toute plage hypoéchogène, basculer la sonde avant de conclure à une fissuration ou à un épanchement.
- Comparaison controlatérale utile pour juger d\'un épanchement limite.`,
  },

  reperage: [
    { titre: 'Trouver la gouttière en transversal', texte: 'Sonde **transversale** sur la face antérieure de l\'épaule, avant-bras en supination : chercher l\'échancrure en **U** ou en **V** du cortex huméral entre deux reliefs — la **petite tubérosité** en dedans, la **grande tubérosité** en dehors. Le tendon du long biceps est le disque hyperéchogène qui occupe le fond de l\'échancrure.' },
    { titre: 'Corriger l\'anisotropie', texte: 'Basculer la sonde de quelques degrés jusqu\'à ce que le tendon soit **le plus brillant possible**. Tant qu\'il apparaît sombre, aucune analyse n\'est valide : ni l\'épanchement, ni la fissuration, ni l\'épaisseur.' },
    { titre: 'Doppler couleur', texte: 'Activer le Doppler à **basse PRF**, sans comprimer : repérer la **branche ascendante de l\'artère circonflexe antérieure** le long du bord latéral du tendon. Sa position détermine le point d\'entrée. Une hypervascularisation péri-tendineuse diffuse, en revanche, plaide pour une ténosynovite active.' },
    { titre: 'Balayage de haut en bas', texte: 'Suivre le tendon **de la poulie jusqu\'à la jonction myotendineuse**, en descendant la sonde le long du bras. Rechercher : épanchement circonférentiel, subluxation médiale (tendon hors de la gouttière, en avant du subscapulaire), tendon absent (rupture), fissuration longitudinale. Choisir le niveau où l\'espace péri-tendineux est le plus large et l\'artère la plus éloignée.' },
    { titre: 'Vérifier en coupe longitudinale', texte: 'Tourner la sonde de 90° : le tendon devient une bande fibrillaire rectiligne. C\'est la coupe qui met le mieux en évidence les fissurations longitudinales, l\'épaississement fusiforme et l\'épanchement en amont et en aval. Elle permet aussi une **voie in-plane distale-proximale**, longue mais parfaitement lisible.' },
    { titre: 'Si l\'on ne trouve pas le tendon', texte: 'Trois causes : rotation du bras inadéquate (repasser en supination stricte), anisotropie (basculer), ou **gouttière réellement vide** — rupture ancienne ou luxation médiale. Dans ce dernier cas, glisser la sonde en dedans : le tendon luxé se trouve en avant ou dans l\'épaisseur du **subscapulaire**, dont l\'atteinte est presque constante. Il n\'y a alors plus de gaine à infiltrer, et le geste change de sens.' },
  ],

  sonoanatomie: [
    { structure: 'Deltoïde antérieur', aspect: 'Muscle superficiel strié, hypoéchogène', repere: 'Première couche ; le grand pectoral apparaît plus en dedans et plus bas' },
    { structure: 'Ligament huméral transverse', aspect: 'Fine bande hyperéchogène pontant les deux tubercules, toit de la gouttière', repere: 'Repère du plafond ; l\'aiguille passe sous lui' },
    { structure: 'Tendon du long biceps', aspect: 'Disque hyperéchogène rond de 4–6 mm en coupe transversale, fibrillaire en long, **très anisotrope**', repere: 'Au fond de la gouttière ; brillant quand le faisceau est perpendiculaire' },
    { structure: 'Gaine synoviale', aspect: 'Liseré anéchogène de 1–2 mm autour du tendon ; pathologique si circonférentiel ou épaissi', repere: 'Cible du geste ; communique avec la gléno-humérale' },
    { structure: 'Branche ascendante de l\'a. circonflexe antérieure', aspect: 'Petit vaisseau pulsatile, coloré en Doppler basse PRF', repere: '**Bord latéral** du tendon — à repérer avant de piquer' },
    { structure: 'Petite tubérosité', aspect: 'Relief cortical hyperéchogène avec ombre, en dedans', repere: 'Berge médiale de la gouttière ; insertion du subscapulaire' },
    { structure: 'Grande tubérosité', aspect: 'Relief cortical hyperéchogène avec ombre, en dehors, plus volumineux', repere: 'Berge latérale ; insertion du supra-épineux' },
    { structure: 'Tendon du subscapulaire', aspect: 'Bande fibrillaire en dedans de la petite tubérosité', repere: 'À explorer systématiquement si l\'on suspecte une luxation médiale du biceps' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avec Doppler** et choix du niveau de ponction avant la désinfection ; marquage du point d\'entrée. Asepsie, gel stérile ou housse. Seringue de 5 mL, aiguille 22–25 G de 40–50 mm, prolongateur recommandé pour garder la sonde parfaitement immobile.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 25 G. Sinon 0,5 mL de lidocaïne 1 % en bouton dermique à 1 cm du bord latéral de la sonde, sans infiltrer le trajet profond (l\'anesthésique dilue les repères).' },
    { titre: 'Ponction dans le plan, de latéral en médial', texte: 'Aiguille à **30–45°**, alignée sur le grand axe de la sonde, visualisée sur toute sa longueur. Traverser le deltoïde puis le ligament huméral transverse ; on perçoit souvent un ressaut au franchissement. La pointe doit s\'arrêter **au contact du tendon, dans l\'espace péri-tendineux**, sur son versant superficiel ou latéral — au-dessus du plan de l\'artère repérée.' },
    { titre: 'Test d\'hydrolocalisation', texte: 'Aspiration (reflux sanguin = repositionner). Injecter **0,3–0,5 mL** : le liquide doit **cercler le tendon** d\'un liseré anéchogène qui s\'étend en haut et en bas de la gaine. Si le liquide reste en amas dans le deltoïde ou au-dessus du ligament transverse, avancer. Si la **résistance est franche** et qu\'aucune diffusion n\'apparaît, la pointe est **intratendineuse** : reculer immédiatement de 1–2 mm.' },
    { titre: 'Injection fractionnée', texte: 'Injecter **2–3 mL** en 2 ou 3 fois. La diffusion se fait le long de la gaine et, très souvent, remonte vers l\'articulation : c\'est attendu et cela ne doit pas faire pousser davantage de volume.' },
    { titre: 'Critère de fin', texte: 'Liseré anéchogène **circonférentiel** autour du tendon, visible sur toute la hauteur de la fenêtre, sans image d\'infiltration intratendineuse (le tendon reste homogène et brillant) ni gonflement du deltoïde. Retrait sous contrôle visuel, compression, pansement.' },
    { titre: 'Après le geste', texte: 'Surveillance 10–15 min. Refaire le test de Speed et la palpation de la gouttière : leur amélioration à 10–15 min est l\'information diagnostique du geste — la noter, en sachant qu\'elle ne distingue pas gaine et gléno-humérale. Consignes : repos relatif 48 h, **pas de flexion-supination résistée ni de port de charge lourde 2 semaines** (le tendon est le siège du risque de rupture), rééducation reprise à J3.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration thérapeutique | Méthylprednisolone 20–40 mg (Dépo-Médrol®) **ou** bétaméthasone 1 mL (Diprostène®) + lidocaïne 1 % ou ropivacaïne 0,2 % | **2–3 mL au total** | Dose plutôt basse : la gaine est étroite et l\'excès reflue vers l\'articulation et le tissu sous-cutané. 20 mg suffisent le plus souvent |
| Bloc diagnostique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % seule | 2–3 mL | Réévaluation à 15 min (Speed, palpation). **Spécificité limitée** : la diffusion gléno-humérale anesthésie aussi l\'articulation — l\'interpréter comme un bloc « compartiment antérieur », pas comme un bloc bicipital pur |
| Ténosynovite inflammatoire | Corticoïde + AL | 2–3 mL | Ponctionner d\'abord si épanchement abondant : bactériologie et recherche de cristaux avant toute injection |
| Hydrodissection de la gaine | Sérum physiologique ou glucosé 5 %, ± AL | 3–5 mL | Option sans corticoïde chez le sujet jeune ou déjà infiltré ; niveau de preuve faible sur ce site, à assumer comme un choix par défaut |

**Choix du corticoïde.** Site non artériel terminal : un particulaire est licite. **Ne pas utiliser la triamcinolone hexacétonide (Hexatrione®)**, réservée à l\'intra-articulaire. Préférer une dose modeste et un volume faible : c\'est un tendon **à haut risque de rupture**, et l\'objectif est péri-tendineux.

**Doses maximales d\'AL** (à additionner en cas de gestes multiples dans la séance) : lidocaïne 4,5 mg/kg — 7 mg/kg adrénalinée ; ropivacaïne 3 mg/kg ; bupivacaïne 2–2,5 mg/kg.

**Rythme.** Maximum 2 à 3 infiltrations par an, espacées d\'au moins 3 mois, et **moins volontiers que sur d\'autres sites** : le rapport bénéfice / risque de la répétition est moins bon sur le long biceps que sur la bourse sous-acromiale. Une deuxième infiltration chez un sujet jeune et actif doit faire poser la question chirurgicale.`,

  variantes: [
    { titre: 'Voie longitudinale in-plane', texte: 'Sonde dans l\'axe long du tendon, aiguille dans le plan de **distal en proximal**, à plat. Trajet plus long mais entièrement visible, angle d\'insonation excellent, et l\'on voit la diffusion progresser le long de la gaine. C\'est la voie à préférer quand on veut une image de traçabilité irréprochable, ou chez l\'opérateur qui débute sur ce site.' },
    { titre: 'Voie hors du plan', texte: 'Coupe transversale, aiguille verticale à l\'aplomb du tendon, pointe vue en coupe. Rapide, mais on ne contrôle pas la profondeur : à réserver aux gaines nettement distendues, jamais quand l\'espace péri-tendineux est virtuel et que l\'artère est proche.' },
    { titre: 'Aspiration d\'un épanchement de gaine', texte: 'Aiguille 21 G au point le plus déclive. Devant un liquide trouble ou en contexte fébrile : bactériologie et recherche de cristaux, **aucun corticoïde** tant que le résultat n\'est pas connu. Un épanchement clair, abondant et isolé doit faire chercher un épanchement gléno-huméral et sa cause.' },
    { titre: 'Geste combiné antérieur', texte: 'Chez un patient qui présente à la fois une ténosynovite bicipitale et une atteinte sous-acromiale, on peut associer les deux gestes dans la même séance — mais alors le bloc n\'a plus aucune valeur localisatrice. Si le diagnostic n\'est pas fait, infiltrer un compartiment à la fois, à quinze jours d\'intervalle.' },
    { titre: 'Ce qu\'il ne faut pas faire sur ce tendon', texte: 'Pas d\'injection **intratendineuse** de corticoïde, pas de ténotomie percutanée à l\'aiguille, pas de PRF ni de PRP intratendineux : aucune de ces techniques n\'a de donnée exploitable sur le long biceps, et le tendon rompt spontanément assez souvent pour qu\'on n\'y ajoute rien.' },
  ],

  pearls: [
    'Supination stricte de l\'avant-bras : c\'est ce qui amène la gouttière sous la sonde, avant tout réglage.',
    'Doppler basse PRF **avant** la désinfection : la branche ascendante de la circonflexe antérieure décide du point d\'entrée.',
    'Descendre de 1–2 cm dans la gouttière quand la fenêtre haute est vasculaire ou trop étroite : l\'espace péri-tendineux y est plus large.',
    'Le tendon doit être **brillant** avant toute décision : tant qu\'il est sombre, c\'est de l\'anisotropie, pas une lésion.',
    'Le bon signe est le **liseré circonférentiel**, pas la simple disparition de la résistance.',
    'Une gouttière vide n\'est pas un échec de repérage : chercher le tendon en dedans, devant le subscapulaire, et changer de stratégie.',
    'Prévenir du risque de rupture et de la déformation en « Popeye » : c\'est ce dont le patient se souviendra si elle survient, et l\'information doit être tracée.',
  ],
  pieges: [
    'Conclure à une ténosynovite sur un épanchement minime et déclive : c\'est physiologique.',
    'Oublier que la gaine communique avec l\'articulation, et sur-interpréter un bloc test positif comme « la douleur vient du biceps ».',
    'Piquer sans Doppler : la circonflexe antérieure est petite, constante, et exactement sur la trajectoire latérale la plus intuitive.',
    'Injecter dans le tendon en forçant contre une résistance : voie directe vers la rupture.',
    'Utiliser un gros volume : l\'excès reflue dans l\'articulation et le tissu sous-cutané, sans bénéfice.',
    'Infiltrer une gouttière vide (tendon rompu ou luxé) : geste inutile, et diagnostic manqué du subscapulaire.',
    'Répéter les infiltrations chez un sujet jeune et actif au lieu de poser la question de la ténodèse.',
  ],
  complications: [
    '**Rupture du tendon du long biceps** (déformation en « Popeye ») : complication propre à ce site, favorisée par la tendinopathie préexistante et par l\'injection intratendineuse. Fonctionnellement souvent bien tolérée chez le sujet âgé — mais elle doit avoir été annoncée avant le geste, pas après.',
    'Ponction de la branche ascendante de l\'artère circonflexe antérieure : hématome, généralement bénin et compressible ; prévenue par le Doppler.',
    'Douleur post-injection (flare) 24–48 h : fréquente ; glace, antalgiques de palier 1.',
    'Atrophie sous-cutanée et dépigmentation au point de ponction : purger l\'aiguille avant le retrait.',
    'Hyperglycémie 24–72 h chez le diabétique — d\'autant que le produit diffuse dans l\'articulation et que la résorption est bonne.',
    'Infection (ténosynovite septique) : rare mais sévère sur une gaine synoviale ; toute aggravation fébrile après 48 h impose écho, ponction et avis chirurgical.',
    'Malaise vagal en position assise : préférer le décubitus dorsal chez les patients à risque.',
  ],
  securite: [
    'Doppler couleur basse PRF systématique sur la fenêtre de ponction : c\'est la mesure de sécurité spécifique de ce geste.',
    'Geste **superficiel et compressible**, catégorie **faible risque hémorragique** (ASRA-ESRA 2018) : pas d\'arrêt des antiagrégants ni des anticoagulants.',
    'Aspiration avant injection ; injection fractionnée ; arrêt immédiat sur résistance anormale ou douleur fulgurante.',
    'Aucune injection intratendineuse, quelle que soit l\'apparence du tendon.',
    'Volume plafonné à 3 mL ; dose de corticoïde modérée (20–40 mg d\'équivalent méthylprednisolone).',
    'Tracer le nombre d\'infiltrations sur le site et poser la question chirurgicale dès la deuxième chez le sujet jeune.',
  ],

  suivi: `- **J0** : EN avant / à 15 min, test de Speed, test de Yergason, palpation de la gouttière avant et après. Noter que le bloc anesthésie aussi la gléno-humérale (limite d\'interprétation à écrire dans le compte rendu).
- **J15–J30** : EN au repos, la nuit et en flexion-supination résistée ; retentissement fonctionnel (QuickDASH ou Constant simplifié) ; observance des consignes de décharge. Contrôle échographique utile si l\'on suspectait une fissuration : rechercher une aggravation ou une rupture.
- **3 mois** : effet du corticoïde éteint. Un bon résultat qui se maintient tient à l\'adaptation des contraintes.
- **Quand répéter** : réponse nette mais brève, sujet âgé ou peu demandeur, tendon peu altéré → 2ᵉ infiltration possible à 3 mois. Sujet jeune, actif, tendon fissuré ou instable → **ne pas répéter**, adresser pour discussion de ténodèse ou de ténotomie.
- **Quand escalader** : bloc test franchement positif + échec de l\'infiltration, ou subluxation sur lésion de poulie avec atteinte du subscapulaire → avis chirurgical. Réponse nulle → reprendre le raisonnement (coiffe, acromio-claviculaire, gléno-humérale, rachis cervical).
- **Alerte à donner au patient** : apparition brutale d\'un ressaut douloureux avec déformation du bras = rupture. C\'est rarement une urgence, mais cela doit être revu.`,

  evidence: `- **Précision de l\'échoguidage** : c\'est le point le mieux documenté. Les travaux comparant infiltration de la gaine bicipitale guidée et non guidée — dont un essai randomisé japonais souvent cité (Hashiuchi, 2011) — retrouvent une précision **très supérieure sous échographie**, l\'injection non guidée aboutissant fréquemment dans le tissu péri-tendineux ou dans le tendon lui-même. Les études de palpation montrent par ailleurs que la localisation clinique de la gouttière est peu fiable. Confiance : élevée sur le sens de l\'effet.
- **Efficacité clinique du corticoïde péri-bicipital** : littérature **pauvre**, essentiellement des séries et des travaux à faible effectif, souvent sur des populations mixtes (coiffe + biceps). Bénéfice antalgique à court terme probable, durée mal établie, aucune donnée sur l\'évolution structurale. Confiance : faible.
- **Communication gaine – articulation** : donnée anatomique classique et constante, confirmée par l\'arthrographie et par la pratique arthroscopique. C\'est la limite méthodologique de tous les blocs tests bicipitaux, rarement discutée dans les articles.
- **Lésions de poulie** : les travaux arthroscopiques (Habermeyer et coll.) ont établi le lien entre lésion de la poulie bicipitale, instabilité du long biceps et conflit antéro-supérieur, et la quasi-constance de l\'atteinte associée du subscapulaire. Le corollaire pratique est solide : une subluxation médiale du biceps impose l\'examen du subscapulaire.
- **Ténotomie / ténodèse** : les deux techniques donnent de bons résultats sur la douleur antérieure, avec une différence essentiellement cosmétique et de force en supination ; ce sont les vraies alternatives à des infiltrations répétées chez le sujet jeune. Confiance : modérée à élevée sur l\'efficacité, pas de comparaison directe de qualité avec l\'infiltration.
- **Trous assumés** : dose et volume optimaux, intérêt de l\'hydrodissection sans corticoïde, seuils échographiques d\'un épanchement pathologique de la gaine, valeur prédictive réelle du bloc test avant chirurgie.

*Fiche rédigée sans accès à la recherche en ligne : le fond technique et posologique correspond aux pratiques établies, mais les chiffres sont donnés en fourchettes et les métadonnées des références n\'ont pas pu être revérifiées dans cette session. Les entrées marquées « à vérifier » sont à confirmer avant citation.*`,

  references: [
    { auteurs: 'Hashiuchi T, Sakurai G, Morimoto M, Komei T, Takakura Y, Tanaka Y', titre: 'Accuracy of the biceps tendon sheath injection: ultrasound-guided or unguided injection? A randomized controlled trial', revue: 'J Shoulder Elbow Surg', annee: '2011', type: 'ECR', verif: false, note: 'Essai de référence sur la précision comparée guidée / non guidée.' },
    { auteurs: 'Gazzillo GP, Finnoff JT, Hall MM, Sayeed YA, Smith J', titre: 'Accuracy of palpating the long head of the biceps tendon: an ultrasonographic study', revue: 'PM R', annee: '2011', type: 'étude diagnostique', verif: false, note: 'La palpation de la gouttière est peu fiable — argument pour le guidage.' },
    { auteurs: 'Habermeyer P, Magosch P, Pritsch M, Scheibel MT, Lichtenberg S', titre: 'Anterosuperior impingement of the shoulder as a result of pulley lesions: a prospective arthroscopic study', revue: 'J Shoulder Elbow Surg', annee: '2004', type: 'étude prospective', verif: false, note: 'Lésions de poulie, instabilité du long biceps et atteinte associée du subscapulaire.' },
    { auteurs: 'Beggs I, Bianchi S, Bueno A, et al.', titre: 'Musculoskeletal ultrasound technical guidelines — shoulder', revue: 'European Society of Musculoskeletal Radiology (ESSR)', annee: '2010', type: 'reco', verif: false, note: 'Coupes standardisées, dont la coupe transversale de la gouttière bicipitale.' },
    { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage de référence)', annee: '2007', type: 'ouvrage', verif: false, note: 'Sono-anatomie de la gouttière, de la gaine et des variantes (luxation médiale).' },
    { auteurs: 'Jacobson JA', titre: 'Fundamentals of Musculoskeletal Ultrasound', revue: 'Elsevier (ouvrage de référence)', annee: '2017', type: 'ouvrage', verif: false, note: 'Description des voies d\'abord de la gaine du long biceps et des pièges d\'anisotropie.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Classe de risque hémorragique.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'lhb-sono', section: 'sonoanatomie', titre: 'Gouttière bicipitale en coupe transversale',
      legende: 'Le tendon est le disque hyperéchogène au fond du U osseux, entre petite tubérosité (en dedans) et grande tubérosité (en dehors), coiffé par le ligament huméral transverse. Le liseré anéchogène qui l\'entoure est la gaine — cible du geste. La branche ascendante de l\'artère circonflexe antérieure longe le bord latéral : c\'est elle qui détermine le point d\'entrée, et on la cherche au Doppler basse PRF avant de piquer.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse sur la gouttière', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 154 Q320 170 0 158 Z', label: 'Deltoïde antérieur', at: [120, 112], opacity: 0.5 });
        S.ligament({ path: 'M232 182 L412 182 L410 198 L234 198 Z', label: 'Lig. huméral transverse', at: [322, 168], small: true });
        S.fluid({ x: 322, y: 232, rx: 37, ry: 25 });
        S.bone({ path: 'M0 242 Q92 208 180 197 Q234 195 258 226 L268 258 Q292 274 322 274 Q352 274 376 258 L386 226 Q410 195 464 193 Q560 201 640 232' });
        S.tendon({ x: 322, y: 232, rx: 27, ry: 16, label: 'Tendon du long biceps', lx: 146, ly: 318, anchor: 'middle', lead: [296, 242] });
        S.artery({ x: 372, y: 218, r: 6, label: 'A. circonflexe ant.\n(branche ascendante)', lx: 470, ly: 268, anchor: 'start', lead: [379, 220] });
        S.label({ x: 96, y: 184, text: 'Petite tubérosité', cls: 'lbl-bone', small: true });
        S.label({ x: 546, y: 178, text: 'Grande tubérosité', cls: 'lbl-bone', small: true });
        S.label({ x: 322, y: 356, text: 'Gaine (liseré anéchogène) = cible', cls: 'lbl-fluid', small: true, lead: [330, 258] });
      },
    },
    {
      id: 'lhb-geste', section: 'technique', titre: 'Ponction dans le plan, latéro-médiale, au-dessus de l\'artère',
      legende: 'L\'aiguille franchit le deltoïde puis le ligament huméral transverse et s\'arrête au contact du tendon, dans l\'espace péri-tendineux, en restant superficielle par rapport au plan de l\'artère. Critère de fin : un liseré anéchogène qui cercle le tendon sur toute sa circonférence. Une résistance franche sans diffusion visible signe une pointe intratendineuse — reculer de 1 à 2 mm.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 154 Q320 170 0 158 Z', label: 'Deltoïde antérieur', at: [110, 112], opacity: 0.5 });
        S.ligament({ path: 'M232 182 L412 182 L410 198 L234 198 Z' });
        S.fluid({ x: 322, y: 232, rx: 37, ry: 25 });
        S.bone({ path: 'M0 242 Q92 208 180 197 Q234 195 258 226 L268 258 Q292 274 322 274 Q352 274 376 258 L386 226 Q410 195 464 193 Q560 201 640 232' });
        S.tendon({ x: 322, y: 232, rx: 27, ry: 16, label: 'Cible : la gaine,\njamais le tendon', lx: 126, ly: 314, anchor: 'middle', lead: [292, 242] });
        S.artery({ x: 384, y: 212, r: 6, label: 'A. circonflexe ant.', lx: 470, ly: 284, anchor: 'start', lead: [390, 216] });
        S.label({ x: 96, y: 184, text: 'Petite tubérosité', cls: 'lbl-bone', small: true });
        S.label({ x: 546, y: 178, text: 'Grande tubérosité', cls: 'lbl-bone', small: true });
        S.needle({ from: [636, 92], to: [354, 210], label: '22–25 G, 40–50 mm' });
        S.spreadPath({ path: 'M280 232 A 42 28 0 1 1 364 232 A 42 28 0 1 1 280 232 Z M294 232 A 28 17 0 1 0 350 232 A 28 17 0 1 0 294 232 Z', at: [322, 356], label: '2–3 mL — liseré circonférentiel' });
      },
    },
  ],

  checklist: [
    'Avant-bras en supination stricte, gouttière centrée sous la sonde',
    'Doppler couleur basse PRF fait, branche ascendante de la circonflexe antérieure localisée, point d\'entrée choisi en conséquence',
    'Anisotropie corrigée avant toute conclusion sur le tendon et sur l\'épanchement',
    'Tendon présent dans la gouttière vérifié (sinon : chercher une luxation médiale et examiner le subscapulaire)',
    'Volume ≤ 3 mL, aucune injection contre résistance',
    'Patient informé du risque de rupture du long biceps et de la déformation en « Popeye » — information tracée',
    'Consignes : pas de flexion-supination résistée ni de charge lourde pendant 2 semaines',
  ],
});
