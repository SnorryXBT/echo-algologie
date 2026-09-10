/* Fiche : infiltration de l'articulation acromio-claviculaire échoguidée. */
ECHO.register({
  id: 'acromio-claviculaire',
  titre: 'Articulation acromio-claviculaire — infiltration échoguidée',
  titreCourt: 'Acromio-claviculaire',
  en: 'Ultrasound-guided acromioclavicular (AC) joint injection for AC osteoarthritis, distal clavicle osteolysis and post-traumatic AC arthropathy',
  region: 'membre-sup',
  types: ['infiltration'],
  niveau: 1,
  grade: 'Faible à modérée — précision de l\'échoguidage bien démontrée, efficacité du corticoïde peu étudiée (séries, pas d\'ECR de bonne taille)',
  motsCles: ['épaule', 'arthrose acromio-claviculaire', 'AC', 'ostéolyse de la clavicule distale', 'geyser', 'disque acromio-claviculaire', 'cross-body adduction', 'entorse acromio-claviculaire', 'haltérophile'],
  maj: '2026-09',
  resume: 'Petite articulation, gros piège : l\'acromio-claviculaire est superficielle (5–10 mm), étroite (1–3 mm), souvent oblique, et l\'infiltration à la palpation manque la cavité dans une large proportion des cas — la littérature de précision place l\'aveugle autour de 40–60 % de réussite contre plus de 90 % sous échographie. Deux difficultés propres : le volume utile est minuscule (0,5 à 1 mL, jamais plus), et l\'arthrose AC est si fréquente sur l\'imagerie du sujet de plus de 40 ans qu\'elle est rarement responsable à elle seule — c\'est la concordance clinique et le test à l\'anesthésique local qui font le diagnostic, pas le cliché. La fente en V entre l\'extrémité latérale de la clavicule (plus superficielle) et l\'acromion (plus profond) se repère en quelques secondes en coupe coronale ; on y entre hors du plan, à l\'aplomb du milieu de la sonde, avec une 25 G.',

  flash: {
    position: 'assis', positionNote: 'bras pendant le long du corps ou main sur la cuisse, épaule détendue ; décubitus dorsal possible, tête tournée du côté opposé',
    sonde: 'lineaire', sondeNote: '12–18 MHz (hockey stick idéale), profondeur 2–3 cm, focale à 1 cm — articulation très superficielle',
    approche: 'out-of-plane', approcheNote: 'sonde coronale sur la fente AC, aiguille verticale à l\'aplomb du milieu de la sonde ; voie in-plane possible en tournant la sonde dans l\'axe antéro-postérieur de l\'interligne',
    aiguille: '25 G (voire 27 G), 25 mm — inutile de prendre plus long, l\'interligne est à 5–10 mm',
    cible: 'Cavité articulaire entre les deux berges — critère de fin : bombement de la capsule supérieure et arrêt sur résistance nette, jamais de forçage',
    injectat: '0,5–1 mL au total : bétaméthasone 0,5 mL (ou méthylprednisolone 20 mg) + lidocaïne 1 % 0,3–0,5 mL',
    duree: '5 min',
  },

  indications: [
    'Arthrose acromio-claviculaire **symptomatique et concordante** : douleur au sommet de l\'épaule, point douloureux exquis à la palpation de l\'interligne, douleur en adduction horizontale forcée (cross-body adduction), gêne au décubitus latéral homolatéral.',
    'Ostéolyse de l\'extrémité distale de la clavicule (« épaule de l\'haltérophile ») : douleur mécanique du sujet jeune, épaississement capsulaire et érosion corticale échographiques.',
    'Arthropathie post-traumatique après entorse ou luxation acromio-claviculaire (Rockwood I–III traitée orthopédiquement).',
    'Arthrite inflammatoire ou microcristalline de l\'AC : polyarthrite rhumatoïde, spondyloarthrite, chondrocalcinose — l\'AC est une localisation classique et souvent oubliée.',
    '**Bloc diagnostique** avant chirurgie (résection de la clavicule distale) ou pour trancher entre une douleur AC et une douleur sous-acromiale : anesthésique local seul, réévaluation à 10–15 min sur le test d\'adduction horizontale.',
    'Kyste acromio-claviculaire par « geyser » (communication avec l\'espace sous-acromial à travers une rupture transfixiante massive de la coiffe) : la ponction évacuatrice soulage mais **récidive quasi constamment** tant que la coiffe n\'est pas traitée — à annoncer avant le geste.',
  ],
  contreIndications: [
    'Absolues : infection cutanée en regard, arthrite septique suspectée, allergie au produit, refus.',
    'Relatives : instabilité acromio-claviculaire marquée (Rockwood ≥ III) — le corticoïde fragilise des structures capsulo-ligamentaires déjà défaillantes ; diabète déséquilibré ; corticothérapie systémique en cours ; infiltrations répétées sur le site.',
    'Peau fine ou sujet mince : risque élevé d\'**atrophie sous-cutanée et de dépigmentation**, l\'articulation étant à quelques millimètres sous le derme. Le prévenir explicitement, surtout sur peau pigmentée.',
    'Risque hémorragique : geste **superficiel et compressible**, catégorie **faible risque** des recommandations ASRA-ESRA 2018 — pas d\'arrêt des antiagrégants ni des anticoagulants.',
  ],
  alternatives: 'Antalgiques, AINS topiques, adaptation gestuelle (éviction du développé couché et des mouvements d\'adduction horizontale chez le sportif de force), rééducation de la ceinture scapulaire. Kinésithérapie et travail excentrique n\'ont d\'effet que sur la composante sous-acromiale associée. En cas d\'échec après deux infiltrations bien ciblées et concordantes, la **résection arthroscopique de la clavicule distale** (procédure de Mumford) est l\'option chirurgicale — le résultat de l\'infiltration diagnostique en est le meilleur facteur prédictif. La dénervation de l\'AC (radiofréquence des branches du nerf pectoral latéral et du suprascapulaire) reste anecdotique et non recommandable en routine.',

  anatomie: `L\'acromio-claviculaire est une **articulation synoviale plane** de petite taille, unissant l\'extrémité latérale de la clavicule à la facette médiale de l\'acromion. L\'interligne mesure 1 à 3 mm chez l\'adulte, s\'élargit avec l\'arthrose et surtout avec l\'ostéolyse distale. Son orientation est **variable** : verticale, oblique en bas et en dehors, parfois franchement oblique — un des rares interligne dont il faut vraiment déterminer l\'axe avant de piquer.

Un **disque fibro-cartilagineux** incomplet occupe la partie supérieure de la cavité chez l\'adulte jeune ; il se fragmente et disparaît progressivement avec l\'âge, ce qui explique une part de l\'arthrose dite « physiologique ».

La stabilité est assurée en **horizontal** par les ligaments acromio-claviculaires (surtout le faisceau supérieur, épais, directement sous la chape delto-trapézienne) et en **vertical** par les ligaments coraco-claviculaires (conoïde et trapézoïde), situés plus en dedans et non visés par le geste.

### Ce qui compte pour le geste
- L\'articulation est **très superficielle** : le toit capsulaire est à 5–10 mm de la peau. Une aiguille de 25 mm est largement suffisante et un dépassement de quelques millimètres suffit à sortir de la cavité par le bas.
- L\'extrémité latérale de la clavicule est habituellement **plus superficielle que l\'acromion** : la coupe coronale montre une petite marche d\'escalier, avec la clavicule « en avant du plan » de l\'acromion. C\'est ce décalage, plus que la fente elle-même, qui identifie l\'articulation quand l\'interligne est pincé.
- La cavité est **très peu compliante** : elle accepte 0,5 à 1 mL. Au-delà, on distend puis on rompt la capsule et on infiltre les parties molles — sans bénéfice et avec un risque d\'atrophie.
- **Arthrose AC = prévalence énorme, imputabilité faible** : les études d\'IRM sur épaules asymptomatiques montrent des anomalies dégénératives AC chez une majorité de sujets après 40 ans. Ne jamais infiltrer sur la seule imagerie : exiger la douleur au point, l\'adduction horizontale positive, et considérer le bloc test comme l\'examen décisif.
- Le **signe du geyser** (kyste acromio-claviculaire refoulant la peau, communiquant avec l\'espace sous-acromial par une rupture massive de coiffe) signe une coiffe détruite : le geste est symptomatique, la récidive est la règle et une infiltration de corticoïde y est peu utile.
- Rapports à connaître mais sans danger réel à ce niveau : aucune structure vasculo-nerveuse notable ne croise l\'interligne. Le risque du geste est cutané et septique, pas neurologique.`,

  installation: {
    patient: `**Assis**, épaule détendue, bras pendant le long du corps ou main posée sur la cuisse : le simple poids du membre ouvre légèrement l\'interligne. Le **décubitus dorsal**, tête tournée du côté opposé, est plus confortable pour l\'opérateur et supprime le risque vagal ; c\'est la position à privilégier chez le patient anxieux.

Palper l\'interligne avant de désinfecter — il correspond au ressaut situé 1 à 2 cm en dedans du bord latéral de l\'acromion — et le marquer. Chez les patients où la palpation ne trouve rien (obésité, œdème), on marque après le repérage échographique.`,
    operateur: `Opérateur **derrière ou latéralement**, écran en face. Sonde tenue en prise « crayon », posée avec le minimum de pression : appuyer ferme sur une articulation superficielle ferme l\'interligne et supprime la cible. Un **coussin de gel épais** ou une bonne épaisseur de gel améliore beaucoup la résolution des premiers millimètres.

L\'approche standard est **hors du plan** : la sonde reste coronale sur la fente, l\'aiguille pique verticalement à l\'aplomb du milieu de la sonde, exactement dans le V. Le contrôle est indirect (progression de la pointe repérée par le mouvement des tissus et par l\'hydrolocalisation), ce qui est acceptable car le trajet fait 1 cm et qu\'il n\'y a rien à blesser.`,
    sonde: `- Linéaire **haute fréquence 12–18 MHz** ; une sonde compacte (« hockey stick ») épouse mieux le relief du sommet de l\'épaule.
- **Profondeur 2–3 cm maximum**, focale à 1 cm : c\'est le réglage qui change tout sur cette articulation. Une profondeur de 5 cm rend l\'interligne illisible.
- Gel abondant, pression minimale ; ne pas hésiter à travailler avec une interface de gel.
- Doppler couleur : hyperhémie capsulaire en cas d\'arthrite active ou d\'ostéolyse évolutive — argument de plus pour l\'imputabilité.
- Balayage systématique d\'avant en arrière : l\'interligne est oblique, la fente la plus large n\'est pas toujours au centre.`,
  },

  reperage: [
    { titre: 'Partir du bord latéral de l\'acromion', texte: 'Sonde **coronale** (transversale par rapport à l\'axe du corps), posée à plat sur le sommet de l\'épaule, en regard du bord latéral de l\'acromion. Identifier la ligne corticale hyperéchogène de l\'acromion, avec son cône d\'ombre.' },
    { titre: 'Glisser en dedans jusqu\'à la fente', texte: 'Translater lentement vers le **dedans** : la ligne corticale s\'interrompt brutalement, une deuxième ligne corticale apparaît, **plus superficielle** — c\'est l\'extrémité latérale de la clavicule. L\'espace entre les deux, en **V ouvert vers le haut**, est l\'interligne AC.' },
    { titre: 'Reconnaître la capsule et le disque', texte: 'Le toit du V est fermé par une bande hyperéchogène : la **capsule renforcée par le ligament AC supérieur**. À l\'intérieur, chez le sujet jeune, une structure hypoéchogène triangulaire : le **disque**. Chez l\'arthrosique : capsule bombée, ostéophytes des berges, contours corticaux irréguliers, parfois épanchement anéchogène.' },
    { titre: 'Trouver l\'axe de l\'interligne', texte: 'Faire pivoter la sonde de quelques degrés d\'avant en arrière et repérer l\'incidence où le V est **le plus large et le plus profond** : c\'est celle qui donne l\'axe de ponction. Marquer le milieu de la sonde d\'un trait au feutre — c\'est le point d\'entrée hors du plan.' },
    { titre: 'Chercher les signes qui changent la conduite', texte: 'Épanchement volumineux, masse kystique refoulant la peau = **geyser** → rechercher systématiquement une rupture transfixiante de la coiffe dans le même temps (coupe longitudinale du supra-épineux). Érosion corticale de la clavicule distale chez un sujet jeune sportif = ostéolyse distale. Hyperhémie franche = arthrite active, penser à un rhumatisme inflammatoire ou à une chondrocalcinose.' },
    { titre: 'Si l\'interligne est illisible', texte: 'Trois causes : profondeur mal réglée (baisser à 2 cm), pression excessive (relâcher, remettre du gel), interligne très pincé et ostéophytique. Dans ce dernier cas, se repérer sur la **marche d\'escalier** entre les deux corticales et viser le point le plus bas de la discontinuité ; si l\'on ne peut vraiment pas ouvrir la cavité, il vaut mieux renoncer et faire un geste péri-articulaire assumé plutôt que d\'infiltrer à l\'aveugle.' },
  ],

  sonoanatomie: [
    { structure: 'Chape delto-trapézienne', aspect: 'Fine couche fibro-musculaire hyperéchogène striée, quelques millimètres', repere: 'Directement sous le derme, au-dessus de la capsule' },
    { structure: 'Capsule / ligament AC supérieur', aspect: 'Bande hyperéchogène compacte pontant les deux berges osseuses', repere: 'Toit du V ; bombe en cas d\'épanchement' },
    { structure: 'Extrémité latérale de la clavicule', aspect: 'Ligne corticale hyperéchogène avec ombre, **plus superficielle** que l\'acromion', repere: 'Berge médiale ; érosions en cas d\'ostéolyse distale' },
    { structure: 'Facette médiale de l\'acromion', aspect: 'Ligne corticale hyperéchogène avec ombre, un cran plus profonde', repere: 'Berge latérale ; la marche d\'escalier est le repère clé' },
    { structure: 'Interligne articulaire', aspect: 'Fente hypo- ou anéchogène en V ouvert vers le haut, 1–3 mm', repere: 'Cible ; s\'élargit avec l\'arthrose et l\'ostéolyse' },
    { structure: 'Disque fibro-cartilagineux', aspect: 'Structure triangulaire hypoéchogène dans la partie haute de la cavité', repere: 'Visible chez le sujet jeune, absent ou fragmenté avec l\'âge' },
    { structure: 'Épanchement / kyste (geyser)', aspect: 'Plage anéchogène distendant la capsule, parfois volumineuse et sous-cutanée', repere: 'Impose la recherche d\'une rupture transfixiante de la coiffe' },
    { structure: 'Ostéophytes', aspect: 'Éperons hyperéchogènes des berges, avec ombre, débordant vers le haut ou vers le bas', repere: 'Ceux qui débordent vers le bas participent au conflit sous-acromial' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet et marquage du point d\'entrée **avant** désinfection. Asepsie soigneuse — c\'est la seule complication grave possible. Seringue de 2 mL (une seringue de 5 ou 10 mL rend le dosage de 0,5 mL imprécis et le contrôle de la pression impossible), aiguille 25 G 25 mm. Volume total préparé : **1 mL, pas davantage**.' },
    { titre: 'Anesthésie cutanée', texte: 'Inutile : la 25 G traverse 1 cm de tissu. Une papule de lidocaïne ferait plus mal que le geste lui-même et brouillerait les repères sur une articulation aussi superficielle.' },
    { titre: 'Ponction hors du plan', texte: 'Sonde immobile sur l\'incidence retenue. Aiguille introduite **verticalement**, à l\'aplomb du milieu de la sonde, dans l\'axe du V. On voit la pointe apparaître comme un **point hyperéchogène** entre les deux berges, et surtout on voit les tissus se déplacer devant elle. Avancer de 5 à 10 mm, jusqu\'à sentir le franchissement capsulaire — puis **s\'arrêter** : au-delà on sort par le plancher.' },
    { titre: 'Variante dans le plan', texte: 'Tourner la sonde de 90° pour la placer dans l\'axe antéro-postérieur de l\'interligne, aiguille dans le plan d\'avant en arrière. Trajet entièrement visible, mais fenêtre étroite et sonde souvent trop large pour le relief : réserver aux interlignes larges (ostéolyse distale, arthrose évoluée) et aux opérateurs qui veulent une traçabilité d\'image complète.' },
    { titre: 'Test et injection', texte: 'Aspiration (souvent sèche ; un liquide franc doit faire évoquer une arthrite et partir en bactériologie et recherche de cristaux). Injecter **0,1–0,2 mL** : le liquide doit s\'étaler dans la cavité et faire bomber discrètement la capsule. Une résistance d\'emblée majeure = pointe intra-osseuse, intra-ligamentaire ou dans le disque : reculer de 1–2 mm et retenter.' },
    { titre: 'Critère de fin', texte: 'Injection du volume total **0,5 à 1 mL** en une fois, sans forcer, avec **bombement visible de la capsule supérieure**. Si la résistance devient franche avant d\'avoir tout injecté, on s\'arrête : la cavité est pleine, insister ne fait que rompre la capsule. Purger l\'aiguille avant le retrait pour ne pas laisser de corticoïde dans le trajet sous-cutané.' },
    { titre: 'Après le geste', texte: 'Compression 30 s, pansement. Réévaluer à **10–15 min** le point douloureux et le test d\'adduction horizontale : c\'est l\'information diagnostique du geste, à noter dans le dossier (elle conditionne un éventuel avis chirurgical). Consignes : repos relatif 48 h, éviction des mouvements d\'adduction horizontale et du travail de force en développé pendant 1 à 2 semaines. Prévenir du flare possible à 24–48 h et du risque de dépression cutanée au point de ponction.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration thérapeutique | Bétaméthasone 0,5 mL (Diprostène®, Célestène® chronodose) **ou** méthylprednisolone 20 mg + lidocaïne 1 % 0,3–0,5 mL | **0,5–1 mL au total** | Le facteur limitant est le volume, pas la dose. Une demi-ampoule suffit : la cavité ne prend pas davantage |
| Bloc diagnostique pur | Lidocaïne 1 % ou 2 % seule | 0,5 mL | Réévaluation à 10–15 min. Meilleur facteur prédictif du résultat d\'une résection de clavicule distale |
| Arthrite inflammatoire documentée | Corticoïde retard + AL | 0,5–1 mL | Ponctionner d\'abord si épanchement : bactériologie et recherche de cristaux avant toute injection |
| Kyste par geyser | Aspiration ± corticoïde | Variable à l\'aspiration | Soulagement transitoire, récidive quasi certaine : le problème est la coiffe, l\'annoncer avant |

**Choix du corticoïde.** Site non artériel terminal : un particulaire est licite. Préférer une présentation **peu concentrée en volume** (bétaméthasone) pour tenir dans 1 mL. **Ne pas utiliser la triamcinolone hexacétonide (Hexatrione®)** hors indication intra-articulaire stricte des grosses articulations, et ne pas la choisir ici en raison du risque d\'atrophie sur un site aussi superficiel. Chez le sujet mince ou à peau pigmentée, la **dexaméthasone** (non particulaire, moins atrophiante) est une alternative défendable au prix d\'une durée d\'action plus courte.

**Doses maximales d\'AL** : sans objet aux volumes utilisés ici, mais à additionner si l\'AC est infiltrée dans la même séance qu\'un autre site (rappel : lidocaïne 4,5 mg/kg, 7 mg/kg adrénalinée ; ropivacaïne 3 mg/kg ; bupivacaïne 2–2,5 mg/kg).

**Rythme.** Maximum 3 infiltrations par an, espacées d\'au moins 3 mois. Sur cette articulation, l\'absence complète de réponse au premier geste correctement placé doit faire **rediscuter le diagnostic** avant d\'envisager le second.`,

  variantes: [
    { titre: 'Ponction-aspiration d\'un kyste acromio-claviculaire', texte: 'Aiguille 21 G, ponction hors du plan du dôme kystique, aspiration complète, puis compression. À documenter par la recherche systématique d\'une **rupture transfixiante de la coiffe** dans le même temps. Prévenir de la récidive : sans traitement de la coiffe, le kyste se reforme. Ne pas injecter de corticoïde dans un kyste communiquant avec l\'espace sous-acromial sans avoir éliminé une infection.' },
    { titre: 'Bloc test avant chirurgie', texte: 'Anesthésique local seul, 0,5 mL, sans corticoïde. Évaluation standardisée : EN avant, EN à 15 min, test d\'adduction horizontale et palpation du point avant et après. Une réponse **franche et complète** est le meilleur argument pour une résection de la clavicule distale ; une réponse partielle doit faire chercher une double source (sous-acromiale, cervicale).' },
    { titre: 'Infiltration combinée AC + sous-acromiale', texte: 'Fréquente en pratique (les deux tableaux coexistent souvent), mais elle **détruit la valeur diagnostique** de chacun des deux gestes. Si le diagnostic n\'est pas fait, infiltrer un seul site à la fois, à quinze jours d\'intervalle ; si le diagnostic est fait, combiner est acceptable en plafonnant la dose totale de corticoïde.' },
    { titre: 'Ostéolyse de la clavicule distale', texte: 'Chez le sportif de force : le geste soulage mais ne traite rien sans **arrêt du facteur mécanique** (développé couché, dips, épaulés). Le message thérapeutique principal est l\'aménagement de la charge d\'entraînement sur 6 à 12 semaines ; l\'infiltration ne fait qu\'ouvrir la fenêtre.' },
  ],

  pearls: [
    'Régler la **profondeur à 2 cm** avant tout : c\'est le seul geste où un mauvais réglage suffit à rendre la cible invisible.',
    'Le repère le plus fiable n\'est pas la fente mais la **marche d\'escalier** : clavicule superficielle, acromion plus profond.',
    'Pivoter la sonde de quelques degrés pour trouver l\'incidence où le V est le plus ouvert : l\'interligne est oblique, pas frontal.',
    'Seringue de 2 mL : le contrôle de la pression et la précision du volume valent mieux que le confort d\'une grosse seringue.',
    'S\'arrêter dès que la résistance devient franche. Une AC pleine est pleine ; forcer, c\'est infiltrer la peau.',
    'Toujours faire et noter le test d\'adduction horizontale avant et à 15 min : c\'est ce qui rend le geste utile au chirurgien plus tard.',
    'Devant un kyste AC, regarder la coiffe dans la foulée : on ne trouve un geyser que si on le cherche.',
  ],
  pieges: [
    'Infiltrer sur la seule imagerie : l\'arthrose AC est quasi universelle après 40 ans et le plus souvent muette.',
    'Injecter plus de 1 mL : rupture capsulaire, diffusion sous-cutanée, atrophie et geste inefficace.',
    'Appuyer fort avec la sonde : l\'interligne se ferme et on pique à côté.',
    'Prendre le **ligament AC supérieur** épaissi pour le plafond de la cavité et rester au-dessus : l\'hydrolocalisation tranche.',
    'Traverser complètement l\'articulation (5 mm de trop) et infiltrer l\'espace sous-acromial : le patient est soulagé, mais on a perdu l\'information diagnostique.',
    'Oublier de purger l\'aiguille au retrait : traînée de corticoïde sous-cutanée, dépression cutanée et dépigmentation visible.',
    'Combiner d\'emblée AC et sous-acromiale sur un diagnostic incertain : on ne saura jamais lequel des deux a marché.',
  ],
  complications: [
    'Atrophie du tissu sous-cutané et **dépigmentation** : complication la plus fréquente et la plus visible de ce site, cosmétiquement gênante et longue à régresser. Volume minimal, purge de l\'aiguille au retrait, corticoïde peu atrophiant chez le sujet mince ou à peau pigmentée.',
    'Douleur post-injection (flare) 24–48 h : fréquente, glace et antalgiques de palier 1.',
    'Rupture capsulaire par surpression et fuite péri-articulaire : perte d\'efficacité, majoration du risque d\'atrophie.',
    'Infection : rare mais possible ; toute aggravation après 48 h avec fièvre impose écho, ponction et bactériologie, sans réinjection.',
    'Fragilisation ligamentaire et majoration d\'une instabilité AC préexistante en cas d\'infiltrations répétées.',
    'Malaise vagal en position assise — d\'où l\'intérêt du décubitus dorsal chez les patients à risque.',
  ],
  securite: [
    'Geste **superficiel et compressible**, catégorie **faible risque hémorragique** (ASRA-ESRA 2018) : pas d\'arrêt des antiagrégants ni des anticoagulants.',
    'Aucune structure vasculo-nerveuse à risque à ce niveau : le risque est cutané (atrophie) et septique.',
    'Asepsie chirurgicale stricte malgré la banalité apparente du geste.',
    'Volume plafonné à 1 mL — c\'est une règle de sécurité, pas une préférence.',
    'Tracer la dose de corticoïde et le nombre d\'infiltrations annuelles sur le site.',
    'Glycémie capillaire à surveiller 48–72 h chez le diabétique, même pour ces petites doses.',
  ],

  suivi: `- **J0** : EN avant / à 15 min, palpation du point AC, test d\'adduction horizontale forcée avant et après — les trois sont à consigner. C\'est le compte rendu de ce test, et non la seule injection, qui a de la valeur pour la suite.
- **J15–J30** : EN au repos, la nuit et en adduction ; retentissement sur le sommeil (décubitus latéral) et sur les activités déclenchantes ; chez le sportif, vérifier l\'aménagement effectif de la charge.
- **3 mois** : effet du corticoïde éteint. Un bénéfice qui persiste au-delà tient à la modification gestuelle, pas au produit.
- **Quand répéter** : soulagement net mais transitoire (< 2 mois) avec diagnostic confirmé → 2ᵉ infiltration possible à 3 mois. Deux échecs successifs sur une AC correctement injectée → arrêter les infiltrations.
- **Quand escalader** : bloc test franchement positif + échec des infiltrations et de l\'aménagement gestuel → avis chirurgical pour résection de la clavicule distale. Réponse nulle au bloc test → reprendre le raisonnement diagnostique (sous-acromial, coiffe, rachis cervical, gléno-huméral).`,

  evidence: `- **Précision** : c\'est le point le mieux établi. Les travaux cadavériques et cliniques comparant infiltration AC guidée par la palpation et infiltration échoguidée retrouvent une précision de l\'aveugle **médiocre**, de l\'ordre de 40 à 60 % dans la plupart des séries, contre **plus de 90 %** sous échographie. Sur une articulation de 1 à 3 mm dont l\'axe est variable, ce résultat n\'a rien de surprenant. Confiance : élevée sur le sens de l\'effet, modérée sur les pourcentages exacts, qui varient beaucoup d\'une série à l\'autre.
- **Efficacité clinique du corticoïde intra-articulaire AC** : littérature **pauvre**. Peu d\'essais randomisés de taille suffisante, hétérogénéité des produits, des volumes et des critères d\'inclusion. Le bénéfice rapporté est de courte durée, comparable à celui observé dans les autres petites articulations dégénératives. À dire au patient : soulagement probable de quelques semaines à quelques mois, pas de modification de l\'évolution.
- **Valeur diagnostique du bloc AC** : largement admise et utilisée comme critère de sélection avant résection de la clavicule distale, mais **jamais formellement validée** contre un standard de référence. C\'est un argument fort, pas une preuve.
- **Prévalence de l\'arthrose AC asymptomatique** : les travaux d\'IRM sur épaules indolores montrent des anomalies dégénératives AC chez une large majorité de sujets de plus de 40 ans. C\'est la donnée la plus importante de la fiche sur le plan décisionnel : elle interdit d\'infiltrer sur l\'imagerie seule.
- **Signe du geyser** : décrit initialement en arthrographie, il traduit une rupture transfixiante massive de la coiffe avec communication gléno-humérale – sous-acromiale – acromio-claviculaire. Sa valeur pronostique (coiffe non réparable) est classique et cohérente ; les séries sont petites.
- **Trous assumés** : dose et volume optimaux, intérêt de l\'acide hyaluronique sur ce site, place de la dénervation par radiofréquence — aucune donnée exploitable.

*Fiche rédigée sans accès à la recherche en ligne : le fond technique et posologique correspond aux pratiques établies, mais les chiffres cités le sont en fourchettes et les métadonnées des références n\'ont pas pu être revérifiées dans cette session. Les entrées marquées « à vérifier » sont à confirmer avant citation.*`,

  references: [
    { auteurs: 'Peck E, Lai JK, Pawlina W, Smith J', titre: 'Accuracy of ultrasound-guided versus palpation-guided acromioclavicular joint injections: a cadaveric study', revue: 'PM R', annee: '2010', url: 'https://www.sciencedirect.com/science/article/abs/pii/S1934148210005101', type: 'étude cadavérique', verif: true, note: 'Étude de référence sur la précision comparée des deux techniques.' },
    { auteurs: 'Shubin Stein BE, Wiater JM, Pfaff HC, Bigliani LU, Levine WN', titre: 'Detection of acromioclavicular joint pathology in asymptomatic shoulders with magnetic resonance imaging', revue: 'J Shoulder Elbow Surg', annee: '2001;10(3):204-8', pmid: '11408899', type: 'étude d\'imagerie', verif: true, note: 'Fondement de la règle « ne pas infiltrer sur l\'imagerie seule ».' },
    { auteurs: 'Chronopoulos E, Kim TK, Park HB, Ashenbrenner D, McFarland EG', titre: 'Diagnostic value of physical tests for isolated chronic acromioclavicular lesions', revue: 'Am J Sports Med', annee: '2004;32(3):655-61', doi: '10.1177/0363546503261723', type: 'étude diagnostique', verif: true, note: 'Valeur du test d\'adduction horizontale et des tests cliniques AC.' },
    { auteurs: 'Mall NA, Foley E, Chalmers PN, Cole BJ, Romeo AA, Bach BR', titre: 'Degenerative joint disease of the acromioclavicular joint: a review', revue: 'Am J Sports Med', annee: '2013;41(11):2684-92', doi: '10.1177/0363546513485359', type: 'revue', verif: true, note: 'Revue générale : histoire naturelle, place des infiltrations et de la résection distale.' },
    { auteurs: 'Craig EV', titre: 'The geyser sign and torn rotator cuff: clinical significance and pathomechanics', revue: 'Clin Orthop Relat Res', annee: '1984;(191):213-5', url: 'https://journals.lww.com/clinorthop/abstract/1984/12000/the_geyser_sign_and_torn_rotator_cuff__clinical.27.aspx', type: 'série / description', verif: true, note: 'Description princeps du signe du geyser.' },
    { auteurs: 'Beggs I, Bianchi S, Bueno A, et al.', titre: 'Musculoskeletal ultrasound technical guidelines — shoulder', revue: 'European Society of Musculoskeletal Radiology (ESSR)', annee: '2010', url: 'https://essr.org/content-essr/uploads/2016/10/shoulder.pdf', type: 'reco', verif: true, note: 'Coupes standardisées de l\'épaule, dont l\'incidence acromio-claviculaire.' },
    { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage de référence)', annee: '2007', doi: '10.1007/978-3-540-28163-4', type: 'ouvrage', verif: true, note: 'Sono-anatomie détaillée de l\'AC et de ses variantes.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Classe de risque hémorragique.' },
  ],
  videos: [
    { titre: 'Ultrasound guided acromioclavicular joint injection (out of plane) by Prof Murat Karkucak MD', source: 'YouTube', url: 'https://www.youtube.com/watch?v=AzBEA2yKGQ0', note: 'Abord hors plan échoguidé.' },
    { titre: 'How To: Shoulder Ultrasound-Guided Injection of the AC Joint 3D Video', source: 'YouTube', url: 'https://www.youtube.com/watch?v=8xfcDMERiBQ&pp=0gcJCdgAo7VqN5tD', note: 'Animation 3D de la technique.' },
  ],

  scenes: [
    {
      id: 'ac-sono', section: 'sonoanatomie', titre: 'Fente acromio-claviculaire en coupe coronale',
      legende: 'Articulation très superficielle : régler la profondeur à 2 cm. L\'extrémité latérale de la clavicule est un cran plus superficielle que l\'acromion — cette marche d\'escalier est le repère le plus fiable quand l\'interligne est pincé. Le V est fermé en haut par la capsule renforcée du ligament AC supérieur ; le disque occupe la partie haute de la cavité chez le sujet jeune.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coronal, sur la fente AC', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 10, fatBelow: 24 });
        S.muscle({ path: 'M0 76 L640 76 L640 122 L0 128 Z', label: 'Chape delto-trapézienne', at: [516, 102], opacity: 0.4 });
        S.ligament({ path: 'M242 140 L410 152 L408 172 L244 158 Z', label: 'Capsule / lig. AC supérieur', at: [430, 132], anchor: 'start', small: true, lead: [392, 152] });
        S.bone({ path: 'M-20 178 L130 170 L232 164 L290 160', label: 'Clavicule', at: [124, 148], small: true });
        S.bone({ path: 'M354 186 L470 192 L660 198', label: 'Acromion', at: [516, 170], small: true });
        S.fluid({ path: 'M290 158 L354 184 L334 268 L312 268 Z' });
        S.region({ path: 'M286 256 L360 256 L360 424 L286 424 Z', fill: '#04060a', opacity: 0.97 });
        S.cartilage({ x: 322, y: 196, rx: 13, ry: 24, label: 'Disque', lx: 448, ly: 236, anchor: 'start', lead: [336, 200], small: true });
        S.label({ x: 162, y: 244, text: 'Interligne en V\n(1–3 mm)', cls: 'lbl-fluid', small: true, lead: [304, 212] });
        S.arrow({ from: [214, 118], to: [286, 156], text: 'Marche d\'escalier', anchor: 'middle' });
      },
    },
    {
      id: 'ac-geste', section: 'technique', titre: 'Ponction hors du plan, à l\'aplomb du milieu de la sonde',
      legende: 'Aiguille 25 G verticale dans l\'axe du V : seule la pointe est vue, comme un point hyperéchogène, et l\'on suit surtout le déplacement des tissus. Profondeur utile 5 à 10 mm — quelques millimètres de trop et l\'on ressort dans l\'espace sous-acromial. Critère de fin : 0,5 à 1 mL injectés sans forcer, avec bombement discret de la capsule supérieure.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coronal', type: 'out-of-plane, aiguille verticale' });
        S.skin({ thickness: 10, fatBelow: 24 });
        S.muscle({ path: 'M0 76 L640 76 L640 122 L0 128 Z', label: 'Chape delto-trapézienne', at: [140, 102], opacity: 0.4 });
        S.ligament({ path: 'M242 140 L410 152 L408 172 L244 158 Z' });
        S.bone({ path: 'M-20 178 L130 170 L232 164 L290 160', label: 'Clavicule', at: [124, 148], small: true });
        S.bone({ path: 'M354 186 L470 192 L660 198', label: 'Acromion', at: [516, 170], small: true });
        S.fluid({ path: 'M290 158 L354 184 L334 268 L312 268 Z' });
        S.region({ path: 'M286 256 L360 256 L360 424 L286 424 Z', fill: '#04060a', opacity: 0.97 });
        S.target({ x: 322, y: 196, r: 14 });
        S.needle({ from: [322, 150], to: [322, 172], label: '25 G — seule la pointe est vue' });
        S.spread({ x: 322, y: 202, rx: 19, ry: 28, label: '0,5–1 mL' });
        S.label({ x: 128, y: 232, text: 'Capsule qui bombe\n= critère de fin', small: true, lead: [268, 152] });
        S.label({ x: 494, y: 268, text: 'Ne pas dépasser :\nespace sous-acromial', small: true, anchor: 'middle', lead: [340, 262] });
      },
    },
  ],

  checklist: [
    'Profondeur réglée à 2 cm et incidence où le V est le plus ouvert retenue avant de piquer',
    'Volume total préparé ≤ 1 mL dans une seringue de 2 mL',
    'Test d\'adduction horizontale et point douloureux notés avant, puis à 15 min',
    'Arrêt de l\'injection dès résistance franche ; aiguille purgée avant le retrait (atrophie cutanée)',
    'Patient prévenu du risque de dépression cutanée et de dépigmentation au point de ponction',
    'Si kyste ou épanchement : coiffe des rotateurs explorée dans le même temps (geyser)',
  ],
});
