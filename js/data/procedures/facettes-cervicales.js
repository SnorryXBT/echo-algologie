/* Fiche : infiltration intra-articulaire zygapophysaire cervicale échoguidée. */
ECHO.register({
  id: 'facettes-cervicales',
  titre: 'Facettes cervicales — infiltration intra-articulaire échoguidée',
  titreCourt: 'Facettes cervicales',
  en: 'Ultrasound-guided cervical zygapophyseal (facet) joint intra-articular injection — lateral (coronal, Galiano) and posterior (parasagittal) approaches',
  region: 'tete-cou',
  types: ['infiltration'],
  niveau: 3,
  grade: 'Faible pour l\'efficacité (méta-analyse sur 3 études non randomisées, n = 64 ; un ECR négatif) · Modérée à forte pour la faisabilité et la précision du guidage échographique (92–98 % par voie latérale, ECR contre scanner)',
  maj: '2026-09',
  motsCles: ['facette cervicale', 'zygapophysaire', 'intra-articulaire', 'dents de scie', 'saw sign', 'Galiano', 'cervicalgie', 'céphalée cervicogénique', 'whiplash', 'arthrose cervicale', 'pilier articulaire', 'non particulaire'],
  resume: 'L\'infiltration intra-articulaire zygapophysaire cervicale est un geste **techniquement bien maîtrisé sous échographie et faiblement documenté sur le plan clinique** — il faut savoir les deux avant de le proposer. La précision du guidage échographique par voie latérale est établie (92–98 % d\'injections intra-articulaires selon les critères retenus, validée en cadavre par scanner puis en clinique contre guidage TDM, avec moins de temps, moins de passages d\'aiguille et aucune irradiation). En revanche, l\'efficacité antalgique ne repose que sur de petites séries non randomisées et une méta-analyse de trois études (n = 64) dans la céphalée cervicogénique ; le seul ECR contre placebo publié est négatif. En pratique d\'algologie, **le bloc des branches médiales a supplanté l\'infiltration intra-articulaire** pour le diagnostic comme pour la sélection avant radiofréquence. L\'infiltration garde une place restreinte : arthropathie inflammatoire ou post-traumatique documentée, épanchement ou hypersignal péri-facettaire en STIR, niveau unique symptomatique, patient chez qui la neurotomie n\'est pas envisageable.',

  flash: {
    position: 'lateral', positionNote: 'décubitus latéral strict, côté à traiter vers le haut, rachis cervical dans l\'axe (voie latérale, technique de référence) ; procubitus tête en légère flexion pour la voie postérieure para-sagittale',
    sonde: 'lineaire', sondeNote: '10–15 MHz, profondeur 3–4 cm ; convexe seulement chez le sujet très épais',
    approche: 'in-plane', approcheNote: 'voie latérale : sonde coronale, image « en dents de scie », aiguille dans le plan de caudal en crânial vers le sommet (interligne) · voie postérieure : sonde para-sagittale, aiguille dans le plan de caudal en crânial dans l\'espace inter-processus',
    aiguille: '25 G 50 mm écho-visible (22 G si l\'on veut un contact franc et une injection de faible volume chez un sujet épais)',
    cible: 'Espace articulaire lui-même : recul de la corticale, sensation de franchissement capsulaire, puis injectat **contenu** dans la cavité — la fin du geste est une résistance qui monte après 0,5–1 mL',
    injectat: '**0,5 à 1 mL maximum par articulation** — AL + corticoïde **non particulaire** (dexaméthasone 2–4 mg) ; au-delà de 1 mL, la capsule se rompt',
    duree: '10–15 min pour un niveau, 20 min pour deux',
  },

  indications: [
    '**Cervicalgie postérieure axiale d\'origine facettaire présumée**, sans radiculalgie ni signe neurologique, résistante à un traitement conservateur bien conduit — le plus souvent après un bloc de branches médiales positif ayant identifié le niveau.',
    '**Arthropathie zygapophysaire inflammatoire ou post-traumatique documentée en imagerie** : épanchement articulaire, hypersignal péri-facettaire en séquence STIR, arthrite microcristalline ou rhumatismale. C\'est l\'indication où l\'infiltration intra-articulaire garde le plus de sens : une série multicentrique prospective récente s\'est spécifiquement intéressée aux patients à hypersignal STIR péri-facettaire.',
    '**Céphalée cervicogénique** d\'origine C2-C3 ou C3-C4 : indication de la petite méta-analyse existante ; réduction moyenne d\'environ 3 points d\'EVA, sur trois études non randomisées seulement.',
    'Cervicalgie facettaire chez un patient **non candidat à la radiofréquence** (refus, anticoagulation non interrompable au long cours au moment de la décision, niveau unique et douleur récente).',
    'Alternative diagnostique quand le bloc de branches médiales est techniquement impossible (anatomie postérieure remaniée) — en sachant que la valeur diagnostique d\'une injection intra-articulaire est **inférieure** à celle des blocs comparatifs.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée ou générale, arthrite septique suspectée, allergie vraie aux amino-amides, instabilité cervicale non stabilisée, myélopathie non explorée.',
    '**Risque hémorragique** : geste cervical profond, non compressible, au voisinage de l\'artère vertébrale et des vaisseaux cervicaux profonds — à traiter comme les procédures de branches médiales cervicales, c\'est-à-dire **risque intermédiaire** dans la stratification ASRA-ESRA 2018. Délais d\'interruption des anticoagulants appliqués, antiagrégants discutés avec le prescripteur, décision tracée.',
    '**Corticoïde particulaire strictement proscrit** : des infarctus médullaires et de la circulation postérieure ont été décrits après injections cervicales de corticoïdes particulaires, et la capsule articulaire cervicale peut se déchirer sous pression, ce qui expose à une diffusion épidurale ou vasculaire. Dexaméthasone seule.',
    'Relatives : diabète déséquilibré, articulation ankylosée ou totalement pincée (l\'aiguille n\'entrera pas — se rabattre sur le bloc des branches médiales), chirurgie cervicale postérieure antérieure modifiant les repères, morphotype rendant la colonne des piliers illisible (envisager la fluoroscopie ou le scanner).',
    'Ne pas répéter au-delà de 3 injections par an sur la même articulation, ni renouveler une infiltration dont l\'effet a duré moins de deux semaines.',
  ],
  alternatives: '**Le bloc des branches médiales cervicales et du nerf occipital III est aujourd\'hui la référence** pour le diagnostic, la sélection avant radiofréquence et, en pratique, le traitement (fiche dédiée) : mêmes repères osseux, aiguille plus facile à placer, volumes plus faibles, validité diagnostique établie par des blocs comparatifs, et débouché thérapeutique validé par ECR (neurotomie). L\'infiltration intra-articulaire est plus difficile, plus risquée en termes de diffusion, et beaucoup moins documentée. Autres options : traitement conservateur structuré (kinésithérapie active, exercices cranio-cervicaux, éducation) obligatoire avant et après ; radiofréquence thermique des branches médiales après blocs comparatifs positifs ; bloc du nerf grand occipital si la composante est occipitale (fiche dédiée) ; injection intra-articulaire sous **scanner** pour les niveaux hauts (C1-C2 latéral atlanto-axoïdien, hors échographie) ou lorsque l\'échographie ne montre pas l\'interligne.',

  anatomie: `Les articulations zygapophysaires cervicales de C2-C3 à C7-T1 sont de vraies **articulations synoviales**, avec cartilage, capsule et ménisques intra-articulaires. Leur plan est oblique en bas et en arrière, d\'environ **45°** par rapport à l\'horizontale dans le rachis cervical moyen — d\'où le fait qu\'on les aborde de caudal en crânial.

Elles s\'empilent en une **colonne latérale continue**, la colonne des piliers articulaires (masses latérales), formée de l\'alternance des processus articulaires inférieurs du niveau sus-jacent et supérieurs du niveau sous-jacent. C\'est cette alternance qui donne l\'image échographique caractéristique.

Chaque articulation est innervée par **deux branches médiales** (celle du niveau et celle du niveau sus-jacent) ; l\'articulation **C2-C3** est innervée par le **nerf occipital III**. Une infiltration intra-articulaire ne dispense donc jamais de raisonner en termes de niveaux et de doubles blocs.

### Ce qui compte pour le geste
- **Deux images, deux approches, à ne pas confondre.**
  - **Voie latérale (coronale, décubitus latéral — technique de Galiano)** : la colonne des piliers apparaît comme une **ligne hyperéchogène ondulée « en dents de scie » (« saw sign »)** ; les **creux** sont le milieu des piliers, les **sommets** sont les **articulations**. On vise le sommet.
  - **Voie postérieure (para-sagittale, procubitus)** : on part de la ligne médiane sur les épineuses, on glisse latéralement sur les lames jusqu\'à la colonne articulaire. On voit alors une **succession de bosses hyperéchogènes** (les processus articulaires) séparées par de fines **fentes anéchogènes** — les interlignes. On vise la fente.
- **La cible est l\'espace articulaire**, contrairement aux blocs de branches médiales où la cible est la concavité osseuse. Le geste est donc techniquement plus exigeant : il faut franchir la capsule, pas seulement toucher l\'os.
- **Comptage** : identique aux blocs de branches médiales — descendre depuis la lame de **C2**, remonter depuis **C7** (pas de tubercule antérieur au processus transverse, contrairement à C6), et vérifier l\'entrée de l\'**artère vertébrale** dans le foramen de C6 au Doppler. Deux méthodes concordantes.
- **Volume de la cavité articulaire cervicale : très faible**, de l\'ordre de **0,5 à 1 mL**. Au-delà, la capsule se déchire et l\'injectat fuit — vers l\'espace épidural, le foramen ou les tissus périarticulaires. C\'est le mécanisme des complications graves rapportées, et la raison d\'être de la règle du millilitre.
- **Structures à risque** : l\'**artère vertébrale** en avant des piliers, dans les foramens transversaires ; l\'**artère cervicale profonde** et ses rameaux dans la musculature postérieure profonde ; la **racine nerveuse** en avant, dans le foramen ; l\'**espace épidural** en dedans, atteignable par une aiguille qui glisse médialement entre les lames ou par une déchirure capsulaire sous pression.
- **Profondeur habituelle** : interligne à 2–3,5 cm par voie latérale, 3–4,5 cm par voie postérieure (plus de masse musculaire à traverser).
- **Limite** : les articulations **C1-C2 (atlanto-axoïdienne latérale)** et **C0-C1** ne relèvent pas de cette technique — leur ponction se fait sous scanner ou fluoroscopie, en raison du voisinage immédiat de l\'artère vertébrale et du nerf C2.`,

  installation: {
    patient: `**Décubitus latéral strict**, côté à traiter **vers le haut** (voie latérale, la mieux validée) : tête sur un coussin fin qui aligne l\'axe cervical, sans inclinaison ni rotation ; genoux fléchis, coussin entre les jambes. Cette position permet de traiter deux niveaux sans rien déplacer et supprime l\'inconfort du procubitus prolongé.

**Procubitus** pour la voie postérieure : coussin sous le thorax, front sur un appui, **tête en légère flexion** pour ouvrir les interlignes ; coussin sous les chevilles. Position à éviter chez le patient obèse, dyspnéique ou très raide.

Voie veineuse recommandée si l\'on traite plusieurs niveaux. Prévenir que le geste dure et qu\'il ne faut pas bouger la tête après le repérage.`,
    operateur: `Opérateur **derrière le patient** en décubitus latéral (ou à la tête en procubitus), écran de l\'autre côté du lit dans l\'axe du regard.

**Voie latérale** : sonde coronale sur la face latérale du cou, aiguille dans le plan, **de caudal en crânial**, dirigée vers le sommet de la dent de scie — l\'obliquité de l\'aiguille suit celle du plan articulaire (≈ 45°).

**Voie postérieure** : sonde para-sagittale, aiguille dans le plan, **de caudal en crânial**, entrée 2–3 cm sous l\'interligne visé, trajectoire strictement parallèle au plan de balayage. Ne jamais dériver en dedans : l\'espace interlamaire et l\'espace épidural sont médians.

Marquer le niveau au feutre à la fin du repérage. Main non dominante en appui ferme : le mouvement de 2 mm qui fait sortir de l\'articulation est indétectable si la sonde n\'est pas stabilisée.`,
    sonde: `- Linéaire **10–15 MHz**, preset MSK, profondeur **3,5–4 cm** en repérage puis 3 cm ; focale sur le plan articulaire.
- Gain réglé pour que la corticale soit blanche franche et que la **fente articulaire** reste noire : c\'est le contraste qui fait le repérage, pas la luminosité.
- **Doppler couleur systématique avant chaque ponction** : rameaux de l\'artère cervicale profonde, vaisseaux musculaires ; artère vertébrale en avant à repérer une fois pour situer la limite antérieure.
- **Aiguille écho-visible fortement recommandée** : l\'obliquité importante du trajet dégrade la visibilité d\'une aiguille standard. Hydrolocalisation par 0,2 mL en cas de doute sur la pointe.
- Ne pas comprimer : la compression ferme les interlignes et fausse la profondeur.`,
  },

  reperage: [
    { titre: '1. Voie latérale — trouver la colonne des piliers', texte: 'Décubitus latéral, sonde **coronale** sur la face latérale du cou, 2–3 cm en arrière du bord postérieur du SCM. Glisser d\'avant en arrière jusqu\'à l\'image ondulée **« en dents de scie »** : creux = milieu des piliers, **sommets = articulations zygapophysaires**. Si la ligne est continue et régulière, on est sur les lames (trop en arrière) ou sur les processus transverses (trop en avant).' },
    { titre: '2. Voie postérieure — partir de la ligne médiane', texte: 'Procubitus, sonde **longitudinale médiane** sur les épineuses (série de petites bosses régulières), puis translation latérale progressive : on passe sur les **lames** (ligne continue plus profonde), puis sur la **colonne articulaire**, reconnaissable à la succession de bosses hyperéchogènes séparées par de fines **fentes anéchogènes** — les interlignes. Si l\'on va trop latéralement, les articulations disparaissent : revenir en dedans.' },
    { titre: '3. Compter les niveaux', texte: 'Comme pour les branches médiales : descendre depuis la **lame de C2** (première grande structure osseuse sous l\'occiput ; l\'articulation immédiatement sous elle est C2-C3), **et** remonter depuis **C7** (processus transverse **sans tubercule antérieur**, contrairement à C6). Vérifier au **Doppler** que l\'artère vertébrale entre dans le foramen transversaire de C6. Deux méthodes concordantes avant toute aiguille. Marquer au feutre.' },
    { titre: '4. Ouvrir l\'interligne', texte: 'Micro-inclinaisons (tilt) et micro-rotations de la sonde jusqu\'à ce que la **fente articulaire soit la plus large et la plus nette possible** : c\'est le meilleur investissement de temps du geste. Une légère flexion cervicale supplémentaire aide en procubitus. Chez l\'arthrosique, l\'interligne est parfois pincé au point d\'être inabordable.' },
    { titre: '5. Doppler et repérage du trajet', texte: 'Doppler couleur sur toute la trajectoire prévue de l\'aiguille et autour de la cible. Situer mentalement les limites : en avant le foramen et l\'artère vertébrale, en dedans l\'espace interlamaire et l\'espace épidural.' },
    { titre: 'Si l\'interligne n\'est pas visible', texte: 'Ne pas forcer. Trois options, dans cet ordre : (1) changer d\'approche (latérale ↔ postérieure), les deux images sont complémentaires ; (2) **renoncer à l\'intra-articulaire et faire un bloc des branches médiales** du niveau et du niveau sus-jacent, dont la cible est osseuse et toujours accessible — c\'est presque toujours la bonne décision ; (3) adresser pour un guidage scanner si l\'intra-articulaire est réellement indispensable (arthropathie inflammatoire à ponctionner, niveau C1-C2).' },
  ],

  sonoanatomie: [
    { structure: 'Colonne des piliers (voie latérale)', aspect: 'Ligne hyperéchogène ondulée **« en dents de scie »** avec ombre acoustique ; creux = milieu des piliers, sommets = articulations', repere: 'Image de référence de la voie latérale (« saw sign »)' },
    { structure: 'Interligne articulaire', aspect: 'Fine interruption anéchogène de la corticale entre deux processus articulaires ; s\'élargit avec le tilt de la sonde', repere: '**La cible** ; à ouvrir au maximum avant de ponctionner' },
    { structure: 'Processus articulaires (voie postérieure)', aspect: 'Bosses hyperéchogènes successives séparées par les fentes articulaires', repere: 'Après translation latérale depuis les épineuses et les lames' },
    { structure: 'Épineuses et lames', aspect: 'Épineuses : bosses médianes régulières · lames : ligne continue plus profonde, sans fente', repere: 'Étapes du repérage postérieur ; ne pas les prendre pour les articulations' },
    { structure: 'Capsule articulaire', aspect: 'Fine ligne hyperéchogène pontant les deux versants osseux, parfois soulevée par un épanchement anéchogène', repere: 'Un épanchement visible est un argument fort en faveur de l\'indication' },
    { structure: 'Lame de C2', aspect: 'Structure osseuse volumineuse au sommet de la colonne', repere: 'Départ du comptage crânio-caudal' },
    { structure: 'Processus transverse de C6', aspect: 'Tubercule antérieur volumineux (Chassaignac) ; C7 n\'en a pas', repere: 'Confirmation du comptage par le bas' },
    { structure: 'Artère vertébrale', aspect: 'Vaisseau pulsatile dans le foramen transversaire, en avant des piliers', repere: 'Limite antérieure absolue ; entre en règle en C6' },
    { structure: 'Artère cervicale profonde et rameaux musculaires', aspect: 'Petits vaisseaux pulsatiles dans la musculature postérieure profonde', repere: 'Doppler avant chaque ponction' },
  ],

  technique: [
    { titre: 'Préparation et time-out', texte: 'Checklist (fin de fiche). Time-out : côté, niveau(x), produit, dose, **volume maximal annoncé à voix haute (1 mL)**. Désinfection large, gel stérile ou housse de sonde, gants stériles. Seringue de 2 mL (une seringue de 5 mL rend l\'appréciation de la résistance imprécise), aiguille écho-visible 25 G 50 mm.' },
    { titre: 'Anesthésie cutanée', texte: '0,5 mL de lidocaïne 1 % au point d\'entrée uniquement. **Ne pas infiltrer en profondeur** : outre la perte de valeur diagnostique, une infiltration profonde généreuse expose à des diffusions imprévues (des déficits neurologiques transitoires après anesthésie locale profonde au rachis cervical ont été rapportés — *à confirmer*). La profondeur n\'est jamais anodine à ce niveau.' },
    { titre: 'Ponction dans le plan, de caudal en crânial', texte: 'Entrée 2–3 cm sous l\'interligne, aiguille suivant l\'obliquité du plan articulaire (≈ 45° par voie latérale). **Pointe visible en permanence.** Traverser trapèze, splénius, semi-épineux. Si l\'on perd la pointe : arrêter, réaligner la sonde, ne jamais avancer « au jugé ».' },
    { titre: 'Franchissement capsulaire', texte: 'Progresser jusqu\'au contact osseux du versant inférieur de l\'articulation, puis **marcher** le long de l\'os vers l\'interligne : le franchissement de la capsule donne un ressaut discret et une chute de résistance. La pointe doit apparaître **dans la fente**, pas au-dessus. En cas d\'échec après deux tentatives, ne pas s\'acharner — passer au bloc des branches médiales.' },
    { titre: 'Test, injection et critère de fin', texte: 'Aspiration dans deux plans. Injecter **0,2 mL de test** : l\'injectat doit rester **contenu** dans la cavité, avec distension visible de la capsule, sans fuite fusiforme dans les tissus mous. Puis compléter jusqu\'à **0,5–1 mL au total, pas davantage**. **Critère de fin = montée nette de la résistance** : c\'est la capsule qui prévient qu\'elle est pleine. Forcer au-delà, c\'est la déchirer et envoyer le produit vers l\'épidural ou le foramen.' },
    { titre: 'Après le geste', texte: 'Surveillance **20–30 min** : force et sensibilité des membres supérieurs et inférieurs, absence de gêne respiratoire, absence de céphalée brutale ou de trouble visuel. EN avant / à 30 min, et remise d\'un agenda de suivi. Prévenir : douleur au point de ponction et exacerbation transitoire 24–48 h (fréquentes), raideur cervicale, effet du corticoïde différé de 2 à 5 jours, pas de conduite le jour même. Consigne écrite de reconsulter en urgence devant tout déficit, fièvre ou céphalée intense.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration thérapeutique | Lidocaïne 1 % ou ropivacaïne 0,2 % **+ dexaméthasone 2–4 mg** | **0,5–1 mL au total** | Volume plafonné par la capacité réelle de l\'articulation (0,5–1 mL). **Corticoïde non particulaire exclusivement** |
| Arthropathie inflammatoire / épanchement | Ponction-évacuation si épanchement, puis dexaméthasone 4 mg ± AL | 0,5–1 mL | L\'indication la plus défendable ; envoyer le liquide en analyse si un contexte septique ou microcristallin est envisageable |
| « Bloc » intra-articulaire à visée diagnostique | Lidocaïne 1–2 % **seule** | 0,5 mL | Valeur diagnostique **inférieure** à celle des blocs comparatifs de branches médiales : diffusion capsulaire mal contrôlée, faux positifs. Ne pas fonder une indication de neurotomie sur ce seul test |
| Ce qu\'il ne faut **pas** faire | Triamcinolone (Kenacort retard®, Hexatrione®), méthylprednisolone (Dépo-Médrol®), bétaméthasone en suspension | — | Corticoïdes **particulaires** : infarctus médullaire et de la circulation postérieure décrits après injections cervicales. L\'hexacétonide (Hexatrione®) est de plus réservée aux grosses articulations périphériques |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Les volumes sont ici négligeables ; le risque est **l\'injection intravasculaire directe** ou la **diffusion épidurale par déchirure capsulaire**, pas la dose cumulée.

**Corticoïdes** : dose cumulée annuelle tracée, maximum 3 injections par an sur la même articulation, glycémie capillaire chez le diabétique pendant 48 h. Ne pas renouveler une infiltration dont l\'effet a duré moins de deux semaines : le rapport bénéfice/risque n\'y est plus.`,

  variantes: [
    { titre: 'Voie latérale (coronale, Galiano) — la technique de référence', texte: `Patient en décubitus latéral, sonde coronale sur la face latérale du cou, image « en dents de scie », aiguille dans le plan de caudal en crânial vers le sommet.

C\'est la voie la mieux étudiée. Elle a été validée en cadavre avec contrôle scanner (Galiano 2006, *Clinical Journal of Pain* : articulations de C2-C3 à C6-C7 correctement identifiées dans 36 cas sur 40, pointes vérifiées intra-articulaires au scanner), puis en clinique contre guidage scanner (Obernauer 2013, *Medical Ultrasonography*, ECR chez 40 patients : **100 %** de précision échographique, temps jusqu\'au positionnement final environ deux fois plus court, soulagement identique, sans irradiation). Les revues récentes retiennent une **précision de 92 à 98 %** selon les critères de définition d\'une diffusion intra-articulaire.` },
    { titre: 'Voie postérieure (para-sagittale)', texte: 'Patient en procubitus, sonde longitudinale para-sagittale, repérage par translation latérale depuis les épineuses. Utile quand le décubitus latéral est impossible, quand la voie latérale ne montre pas l\'interligne, ou pour les niveaux bas. Le trajet est plus long (masse musculaire), la visualisation de l\'interligne souvent moins bonne, et le **risque de dérive médiale vers l\'espace interlamaire** est le point de vigilance. Décrite dans les revues techniques, moins documentée en précision que la voie latérale.' },
    { titre: 'Périarticulaire plutôt qu\'intra-articulaire', texte: 'Quand l\'interligne est infranchissable, certains se contentent d\'une injection **périarticulaire**. Une étude sous fluoroscopie a comparé injections intra- et péri-articulaires sur le soulagement immédiat et à court terme ; l\'écart n\'est pas la question la plus importante ici : **une injection périarticulaire n\'a plus aucune valeur diagnostique**, et son intérêt thérapeutique est mal établi. Mieux vaut assumer un bloc des branches médiales, dont la cible est atteignable et le résultat interprétable.' },
    { titre: 'Niveaux non accessibles à l\'échographie', texte: 'L\'articulation **atlanto-axoïdienne latérale (C1-C2)** et l\'articulation **atlanto-occipitale (C0-C1)** ne relèvent pas de cette fiche : leur ponction se fait sous **scanner** ou fluoroscopie, en raison du voisinage immédiat de l\'artère vertébrale et du nerf C2. Ne pas tenter de les aborder sous échographie.' },
    { titre: 'Ce vers quoi il faut basculer', texte: '**Bloc des branches médiales du niveau et du niveau sus-jacent** (fiche dédiée) : cible osseuse toujours accessible, volume 0,3–0,5 mL, valeur diagnostique établie par blocs comparatifs, et débouché thérapeutique validé par ECR (neurotomie par radiofréquence, Lord 1996). Dans la stratégie d\'un HDJ douleur, c\'est le geste facettaire cervical par défaut ; l\'infiltration intra-articulaire est l\'exception, pas la règle.' },
  ],

  pearls: [
    'Passer du temps à **ouvrir l\'interligne** avec le tilt avant de ponctionner : c\'est là que se joue le succès du geste, pas dans la ponction elle-même.',
    'Deux images à connaître : « dents de scie » avec les articulations aux **sommets** en voie latérale ; bosses séparées par des **fentes** en voie postérieure.',
    'Comptage validé par deux méthodes (C2 en descendant, C7 sans tubercule antérieur, artère vertébrale entrant en C6) — la même exigence que pour les branches médiales.',
    'Seringue de 2 mL : elle rend la **résistance** perceptible. Une seringue de 5 mL fait injecter 2 mL sans s\'en rendre compte.',
    'La montée de résistance après 0,5–1 mL **est** le critère de fin. Ce n\'est pas un obstacle à vaincre.',
    'Deux tentatives infructueuses de franchissement capsulaire = basculer sur le bloc des branches médiales. Ce n\'est pas un échec, c\'est la bonne indication.',
    'Un épanchement ou un hypersignal STIR péri-facettaire est le meilleur argument pour préférer l\'intra-articulaire au bloc des branches médiales.',
  ],
  pieges: [
    'Injecter plus de 1 mL : déchirure capsulaire, diffusion épidurale ou foraminale — le mécanisme des complications neurologiques rapportées.',
    'Se tromper de niveau : la colonne des piliers se ressemble d\'un étage à l\'autre, le comptage unique est insuffisant.',
    'Prendre les lames (ligne continue) pour la colonne articulaire (bosses + fentes) en voie postérieure, ou les processus transverses en voie latérale.',
    'Dériver en dedans en voie postérieure : l\'espace interlamaire, puis l\'espace épidural, sont médians.',
    'Utiliser un corticoïde particulaire « comme au genou » : c\'est la faute qui expose à l\'accident médullaire ou vertébro-basilaire.',
    'Injecter généreusement l\'anesthésique local en profondeur au moment de l\'anesthésie cutanée.',
    'Proposer l\'infiltration intra-articulaire comme test diagnostique avant radiofréquence : ce n\'est pas ce que les recommandations valident, ce sont les blocs comparatifs de branches médiales.',
    'Répéter l\'infiltration alors que la précédente a duré moins de deux semaines.',
  ],
  complications: [
    '**Diffusion épidurale par déchirure capsulaire** ou par surpression : bloc moteur haut, déficit transitoire des membres, rarement détresse respiratoire. Prévention : volume ≤ 1 mL, arrêt à la montée de résistance.',
    '**Injection intravasculaire** (rameau de l\'artère cervicale profonde, exceptionnellement artère vertébrale) : convulsion, accident de la circulation postérieure. Prévention : Doppler avant chaque ponction, aspiration dans deux plans, injection fractionnée et lente, contact verbal.',
    '**Infarctus médullaire ou de la circulation postérieure après corticoïde particulaire** : rapporté pour les injections cervicales. Évitable à 100 % — n\'utiliser que du non particulaire.',
    '**Lésion radiculaire ou médullaire directe** : exceptionnelle si la pointe reste visible et que l\'on ne dépasse jamais le plan articulaire vers l\'avant ou vers le dedans.',
    '**Arthrite septique** : rare mais grave sur une articulation profonde. Asepsie chirurgicale, consigne écrite de reconsulter devant fièvre ou douleur croissante à J2-J5.',
    'Exacerbation douloureuse 24–48 h (fréquente, à annoncer), raideur cervicale, hématome profond.',
    'Effets systémiques du corticoïde : hyperglycémie 24–72 h, flush, insomnie.',
    'Malaise vagal, en particulier en procubitus prolongé.',
  ],
  securite: [
    '**Classe de risque hémorragique intermédiaire** : geste cervical profond, non compressible, au voisinage de l\'artère vertébrale — même gestion que pour les procédures de branches médiales cervicales (ASRA-ESRA 2018).',
    '**Volume plafonné à 1 mL** et arrêt à la montée de résistance : c\'est la mesure de sécurité la plus importante de ce geste.',
    '**Aucun corticoïde particulaire.** Dexaméthasone seule.',
    'Doppler couleur avant chaque ponction ; pointe visible en permanence ; ne jamais avancer si la pointe est perdue.',
    'Comptage validé par deux méthodes ; renoncer et adresser en imagerie en coupe si les repères ne sont pas certains.',
    'Aspiration dans deux plans, injection lente et fractionnée, contact verbal maintenu pendant toute l\'injection.',
    'Surveillance 20–30 min avec examen neurologique des quatre membres et de la respiration ; matériel de réanimation et intralipide disponibles.',
    'Asepsie chirurgicale stricte (articulation synoviale profonde) et consignes écrites de surveillance infectieuse remises au patient.',
  ],

  suivi: `- **J0** : EN avant / à 30 min (part anesthésique du geste), examen neurologique des quatre membres avant la sortie, consignes écrites remises.
- **J2–J5** : c\'est la fenêtre d\'apparition de l\'effet du corticoïde — le prévenir, sinon le patient conclut à un échec dès la disparition de l\'AL. Prévenir aussi de l\'exacerbation transitoire des premières 48 h.
- **J15 et 6 semaines** : EN, **Neck Disability Index**, amplitudes cervicales, consommation d\'antalgiques, reprise des activités et de la kinésithérapie.
- **3 mois** : durée réelle de l\'effet, décision.
- **Décision** : effet net et durable (> 3 mois) → répéter si besoin, maximum 3 par an et par articulation · effet net mais bref, répété → réorienter vers les **blocs comparatifs de branches médiales** puis la radiofréquence, qui offrent une durée d\'effet de 6 à 18 mois · effet nul → mauvaise cible ou mauvaise indication : réexaminer (discale, myofasciale, occipitale, céphalée primaire) · effet < 2 semaines → **ne pas répéter**.
- **Kinésithérapie active systématique** dans la fenêtre d\'antalgie : l\'infiltration ouvre une fenêtre de rééducation, elle n\'est pas un traitement de fond.`,

  evidence: `- **Faisabilité et précision du guidage échographique : bien établies.**
  - Galiano 2006 (*Clinical Journal of Pain*), étude sonoanatomique sur cadavres avec contrôle scanner : 40 examens sur 5 niveaux (C2-C3 à C6-C7) chez 4 sujets ; articulations correctement identifiées dans **36 cas sur 40**, pointes d\'aiguille confirmées **intra-articulaires** au scanner.
  - Obernauer 2013 (*Medical Ultrasonography*), ECR chez 40 patients, échographie versus scanner : précision échographique **100 %**, temps jusqu\'au positionnement final environ deux fois plus court (≈ 4 min 46 s vs 11 min 12 s pour un niveau), **même soulagement**, sans irradiation.
  - Revue systématique 2024 (*Journal of Clinical Medicine*, 9 études, 958 patients) : précision de **92 à 98 %** par voie latérale, avec un gain de temps et un nombre de passages d\'aiguille réduit par rapport au guidage radiologique. Une revue technique de référence a également été publiée dans *The Spine Journal* (2022) et une revue narrative des gestes facettaires échoguidés dans *Canadian Journal of Pain* (2023).
- **Efficacité clinique : faible et fragile.**
  - Méta-analyse 2022 (*Pain Physician*, Appeadu et al.) des infiltrations intra-articulaires de corticoïdes dans la **céphalée cervicogénique** : **3 études seulement, n = 64**, aucune randomisée ; réduction moyenne d\'EVA de **3,30 points** (IC 95 % 2,05–4,55). Les auteurs eux-mêmes appellent à une interprétation prudente.
  - Le seul ECR contre placebo publié dans la cervicalgie facettaire **n\'a pas montré de bénéfice**, avec des réserves méthodologiques sur la sélection des patients et la technique.
  - Une série multicentrique prospective récente (2025) s\'est concentrée sur les patients à **hypersignal STIR péri-facettaire** : phénotypage prometteur, mais série non contrôlée — **référence à confirmer**.
  - Un ECR 2026 en double aveugle comparant PRP peu concentré et corticoïde intra-articulaire ne retrouve **aucune différence** entre les deux groupes à 6 mois, les deux s\'améliorant significativement au premier mois seulement.
- **Comparaison au bloc des branches médiales : nettement en faveur de ce dernier.** La prévalence de la douleur facettaire cervicale (≈ 49 % par blocs contrôlés), la sélection avant radiofréquence et l\'efficacité de la neurotomie (ECR de Lord 1996) reposent toutes sur les **branches médiales**, pas sur l\'intra-articulaire. Aucune recommandation ne fait de l\'infiltration intra-articulaire cervicale un test diagnostique valide.
- **Sécurité : rare mais réelle.** Les complications graves des gestes facettaires cervicaux — atteinte médullaire, infarctus vertébro-basilaire, abcès épidural, méningite — sont **extraordinairement rares** mais publiées ; le rachis cervical est la seule région où l\'atteinte de l\'artère vertébrale et la paralysie phrénique sont possibles.

**Jugement honnête** : geste techniquement élégant et bien guidé, à l\'indication étroite et au niveau de preuve d\'efficacité **faible**. À réserver aux situations où l\'articulation elle-même est manifestement le siège d\'une pathologie (épanchement, inflammation, arthropathie documentée), et à ne pas utiliser comme test diagnostique de routine.`,

  references: [
    { auteurs: 'Galiano K, Obwegeser AA, Bodner G, et al.', titre: 'Ultrasound-guided facet joint injections in the middle to lower cervical spine: a CT-controlled sonoanatomic study', revue: 'Clin J Pain', annee: '2006;22(6):538-43', pmid: '16788340', type: 'étude cadavérique', note: 'Description originale de la voie latérale et de l\'image « en dents de scie ».' },
    { auteurs: 'Obernauer J, et al.', titre: 'Ultrasound-guided versus computed tomography-controlled facet joint injections in the middle and lower cervical spine: a prospective randomized clinical trial', revue: 'Med Ultrason', annee: '2013;15(1):10-15', type: 'ECR', note: 'Précision 100 %, temps divisé par deux, soulagement identique, sans irradiation.' },
    { auteurs: 'Freire V, et al.', titre: 'Ultrasound-guided cervical facet joint injections', revue: 'J Ultrasound Med', annee: '2016', doi: '10.7863/ultra.15.07062', type: 'étude technique' },
    { auteurs: '—', titre: 'Efficacy and accuracy of ultrasound guided injections in the treatment of cervical facet joint syndrome: a systematic review', revue: 'J Clin Med', annee: '2024;13(17):5290', doi: '10.3390/jcm13175290', pmid: '39274505', type: 'revue systématique', note: '9 études, 958 patients ; précision 92–98 % par voie latérale.' },
    { auteurs: 'Appeadu M, Miranda-Cantellops N, Mays B, et al.', titre: 'The effectiveness of intraarticular cervical facet steroid injections in the treatment of cervicogenic headache: systematic review and meta-analysis', revue: 'Pain Physician', annee: '2022;25(6):459-70', pmid: '36122255', type: 'méta-analyse', note: '3 études non randomisées, n = 64 ; EVA −3,30 points. Interprétation prudente recommandée par les auteurs.' },
    { auteurs: '—', titre: 'Ultrasound-guided cervical facet joint injections', revue: 'Spine J', annee: '2022', pmid: '35093557', type: 'revue technique' },
    { auteurs: '—', titre: 'Ultrasound-guided axial facet joint interventions for chronic spinal pain: a narrative review', revue: 'Can J Pain', annee: '2023', doi: '10.1080/24740527.2023.2193617', type: 'revue narrative' },
    { auteurs: '—', titre: 'Ultrasound-guided procedures in the cervical spine', revue: '—', annee: '2021', pmid: '34934598', type: 'revue', note: 'Panorama des gestes cervicaux échoguidés et de leurs limites.' },
    { auteurs: '—', titre: 'Intra-articular cervical facet joint corticosteroid injections in patients with increased peri-facet MRI STIR signal: a prospective, multi-center case series', revue: 'Interv Pain Med', annee: '2025', type: 'série prospective', verif: false, note: 'Revue, année et existence exacte à confirmer — aucun identifiant retenu.' },
    { auteurs: 'Manchikanti L, et al.', titre: 'Assessment of prevalence of cervical facet joint pain with diagnostic cervical medial branch blocks: analysis based on chronic pain model', revue: 'Pain Physician', annee: '2020', pmid: '33185369', type: 'étude de prévalence' },
    { auteurs: 'Lord SM, Barnsley L, Wallis BJ, McDonald GJ, Bogduk N', titre: 'Percutaneous radio-frequency neurotomy for chronic cervical zygapophyseal-joint pain', revue: 'N Engl J Med', annee: '1996', doi: '10.1056/NEJM199612053352302', pmid: '8929263', type: 'ECR', note: 'Ce sur quoi repose réellement la prise en charge facettaire cervicale : les branches médiales, pas l\'intra-articulaire.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [
    { titre: 'Ultrasound-guided cervical zygapophyseal (facet) intra-articular injection', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-cervical-zygapophyseal-facet-intra-articular-injection/', note: 'voie latérale, image « saw sign », trajet d\'aiguille' },
    { titre: 'Ultrasound sonoanatomy and associated interventional procedures for axial structures', source: 'ASRA Pain Medicine', url: 'https://asra.com/news-publications/asra-updates/blog-landing/legacy-b-blog-posts/2019/08/06/ultrasound-sonoanatomy-and-associated-interventional-procedures-for-axial-structures', note: 'repérage des piliers et des interlignes, limites de l\'échographie au rachis' },
  ],

  scenes: [
    {
      id: 'facette-cerv-reperage', section: 'sonoanatomie', titre: 'Voie postérieure — coupe longitudinale para-sagittale sur la colonne articulaire',
      legende: 'Procubitus, sonde para-sagittale après translation latérale depuis les épineuses puis les lames. Les **bosses hyperéchogènes** sont les processus articulaires, les **fentes anéchogènes** entre elles sont les interlignes zygapophysaires — la cible. Chaque bosse porte son cône d\'ombre ; la fente laisse passer un peu de signal. Ouvrir l\'interligne au tilt avant de ponctionner, et compter les niveaux depuis C2 avec une seconde méthode de confirmation.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Longitudinale para-sagittale', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 72 L640 72 L640 112 L0 118 Z', label: 'Trapèze', at: [80, 94], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 118], [640, 112]], width: 1.4 });
        S.muscle({ path: 'M0 118 L640 112 L640 206 L0 218 Z', label: 'Splénius / semi-épineux', at: [118, 164], opacity: 0.48, small: true });
        S.bone({ path: 'M22 250 Q86 216 148 244' });
        S.bone({ path: 'M176 246 Q240 212 302 240' });
        S.bone({ path: 'M330 242 Q394 208 456 236' });
        S.bone({ path: 'M484 240 Q548 206 610 234' });
        /* bandes sans ombre entre deux cônes osseux disjoints : les combler pour ne pas laisser de bande claire */
        S.region({ path: 'M148 242 L176 245 L176 420 L148 420 Z', fill: '#05070a', opacity: 0.94 });
        S.region({ path: 'M302 238 L330 241 L330 420 L302 420 Z', fill: '#05070a', opacity: 0.94 });
        S.region({ path: 'M456 234 L484 239 L484 420 L456 420 Z', fill: '#05070a', opacity: 0.94 });
        S.fluid({ path: 'M150 244 L174 246 L180 288 L156 286 Z', label: 'Interligne', lx: 164, ly: 332, small: true });
        S.fluid({ path: 'M304 240 L328 242 L334 284 L310 282 Z' });
        S.fluid({ path: 'M458 236 L482 240 L488 282 L464 278 Z' });
        S.label({ x: 86, y: 208, text: 'Proc. articulaires', cls: 'lbl-bone', small: true });
        S.label({ x: 162, y: 204, text: 'C3-C4', cls: 'lbl-target', small: true });
        S.label({ x: 316, y: 200, text: 'C4-C5', cls: 'lbl-target', small: true });
        S.label({ x: 470, y: 198, text: 'C5-C6', cls: 'lbl-target', small: true });
        S.artery({ x: 500, y: 190, r: 6, label: 'A. cervicale profonde', lx: 612, ly: 172, anchor: 'end', lead: [506, 188], small: true });
        S.target({ x: 320, y: 258, r: 16 });
      },
    },
    {
      id: 'facette-cerv-geste', section: 'technique', titre: 'Infiltration intra-articulaire — aiguille dans le plan, de caudal en crânial',
      legende: 'Entrée 2–3 cm sous l\'interligne, aiguille suivant l\'obliquité du plan articulaire (≈ 45°), pointe visible en permanence. Contact osseux sur le versant inférieur puis progression vers la fente : le franchissement capsulaire donne un ressaut. **0,5–1 mL maximum**, injectat contenu dans la cavité — la montée de résistance est le critère de fin, pas un obstacle. Ne jamais dériver en dedans (espace interlamaire et épidural).',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Longitudinale para-sagittale', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 72 L640 72 L640 112 L0 118 Z', label: 'Trapèze', at: [72, 94], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 118], [640, 112]], width: 1.4 });
        S.muscle({ path: 'M0 118 L640 112 L640 206 L0 218 Z', label: 'Splénius / semi-épineux', at: [110, 164], opacity: 0.48, small: true });
        S.bone({ path: 'M22 250 Q86 216 148 244' });
        S.bone({ path: 'M176 246 Q240 212 302 240' });
        S.bone({ path: 'M330 242 Q394 208 456 236' });
        S.bone({ path: 'M484 240 Q548 206 610 234' });
        /* bandes sans ombre entre deux cônes osseux disjoints : les combler pour ne pas laisser de bande claire */
        S.region({ path: 'M148 242 L176 245 L176 420 L148 420 Z', fill: '#05070a', opacity: 0.94 });
        S.region({ path: 'M302 238 L330 241 L330 420 L302 420 Z', fill: '#05070a', opacity: 0.94 });
        S.region({ path: 'M456 234 L484 239 L484 420 L456 420 Z', fill: '#05070a', opacity: 0.94 });
        S.fluid({ path: 'M304 240 L328 242 L334 284 L310 282 Z' });
        S.fluid({ path: 'M150 244 L174 246 L180 288 L156 286 Z' });
        S.fluid({ path: 'M458 236 L482 240 L488 282 L464 278 Z' });
        S.label({ x: 240, y: 202, text: 'Proc. articulaires', cls: 'lbl-bone', small: true });
        S.label({ x: 470, y: 332, text: 'Fentes = interlignes', cls: 'lbl-fluid', small: true });
        S.artery({ x: 500, y: 190, r: 6, label: 'A. cervicale profonde', lx: 610, ly: 174, anchor: 'end', lead: [506, 188], small: true });
        S.needle({ from: [530, 48], to: [322, 254], label: '25 G écho-visible, ≈ 45°' });
        S.spread({ x: 320, y: 262, rx: 20, ry: 21, label: '0,5–1 mL' });
      },
    },
  ],

  checklist: [
    'Indication réellement intra-articulaire (épanchement, hypersignal STIR, arthropathie documentée) — sinon préférer le bloc des branches médiales',
    'Comptage validé par **deux méthodes concordantes** et niveau marqué au feutre',
    'Interligne ouvert au maximum par le tilt avant la ponction',
    'Seringue de 2 mL, **volume maximal 1 mL annoncé à voix haute** au time-out',
    'Corticoïde **non particulaire** exclusivement (dexaméthasone) — aucun particulaire au rachis cervical',
    'Doppler avant chaque ponction ; pointe visible en permanence ; jamais de dérive médiale',
    'Gestion de l\'anticoagulation selon la classe **intermédiaire** (geste cervical profond non compressible), décision tracée',
    'Surveillance 20–30 min avec examen neurologique des quatre membres ; consignes écrites de reconsultation (déficit, fièvre, céphalée intense)',
    'Patient prévenu : exacerbation 24–48 h, effet du corticoïde différé de 2 à 5 jours, pas de conduite le jour même',
  ],
});
