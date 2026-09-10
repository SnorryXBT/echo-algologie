/* Fiche : doigt à ressort — infiltration de la gaine sous A1, libération percutanée échoguidée. */
(function () {

  /* Base longitudinale : gaine des fléchisseurs à hauteur de la tête métacarpienne. */
  function baseLong(S, labels) {
    S.skin({ thickness: 7, fatBelow: 18 });
    S.tendon({ path: 'M0 160 L640 156 L640 204 L0 208 Z' });
    S.tendon({ x: 186, y: 178, rx: 50, ry: 28 });
    S.ligament({ path: 'M250 120 L420 118 L420 146 L250 148 Z' });
    S.ligament({ path: 'M474 126 L624 124 L624 140 L474 142 Z' });
    S.bone({ path: 'M-20 266 L160 262 Q252 224 314 254', label: labels ? 'Tête métacarpienne' : null, at: [148, 332], ldy: 0, small: true });
    S.bone({ path: 'M342 252 Q430 238 660 242', label: labels ? 'Base de P1' : null, at: [492, 332], ldy: 0, small: true });
    S.region({ path: 'M312 250 L344 250 L344 424 L312 424 Z', fill: '#04060a', opacity: 0.95 });
    S.fascia({ points: [[308, 246], [328, 238], [348, 246]], width: 2, opacity: 0.8 });
  }

  ECHO.register({
    id: 'doigt-a-ressort',
    titre: 'Doigt à ressort — infiltration de la gaine sous A1 et libération percutanée échoguidée',
    titreCourt: 'Doigt à ressort',
    en: 'Trigger finger (stenosing flexor tenosynovitis): ultrasound-guided corticosteroid injection into the flexor tendon sheath beneath the A1 pulley, and ultrasound-guided percutaneous needle release of the A1 pulley',
    region: 'membre-sup',
    types: ['infiltration', 'interventionnel'],
    niveau: 1,
    grade: 'Forte pour le corticoïde (revue systématique, ECR) · Modérée pour la libération percutanée échoguidée (séries prospectives larges, ECR contre chirurgie ouverte de petite taille)',
    maj: '2026-09',
    motsCles: ['doigt à ressort', 'ténosynovite sténosante', 'poulie A1', 'trigger finger', 'nodule du fléchisseur', 'libération percutanée', 'ténolyse à l\'aiguille', 'Green', 'diabète', 'pouce à ressort'],
    resume: 'Le doigt à ressort est le geste de main le plus simple à réussir et le plus facile à rater : la cible fait 1 à 2 mm d\'épaisseur, elle est bordée de part et d\'autre par les pédicules collatéraux, et le tendon qu\'il ne faut surtout pas injecter occupe tout le champ. L\'échographie donne trois choses : la certitude d\'être **dans la gaine et non dans le tendon**, la mesure de la poulie A1 (épaissie au-delà de 0,5 à 1 mm), et l\'examen dynamique qui montre le ressaut en direct. Le corticoïde a le meilleur niveau de preuve des gestes de cette fiche, avec un succès de l\'ordre de 60 à 90 % et une récidive fréquente — nettement plus chez le diabétique, qu\'il faut prévenir d\'emblée. La **libération percutanée de A1 à l\'aiguille sous échographie** est l\'évolution intéressante de la dernière décennie : faite au cabinet, sans cicatrice, avec des résultats proches de la chirurgie ouverte dans les séries — à condition de maîtriser le rapport de la poulie avec le pédicule collatéral radial du pouce.',

    flash: {
      position: 'dorsal', positionNote: 'main posée paume vers le haut sur un billot, poignet en légère extension, doigts en extension détendue ; pouce en abduction pour le pouce à ressort',
      sonde: 'lineaire', sondeNote: '15–18 MHz, hockey stick vivement conseillée ; profondeur 1,5–2 cm, focale à 5 mm',
      approche: 'in-plane', approcheNote: 'transversale sur la tête métacarpienne, aiguille par le versant latéral, à distance des pédicules ; ou longitudinale de distal en proximal',
      aiguille: '25–27 G 16–25 mm (infiltration) · **18–21 G** (libération percutanée, selon la technique)',
      cible: 'Espace entre la poulie A1 et le tendon : le liquide doit **cerner le tendon d\'un croissant anéchogène** et fuser le long de la gaine, sans jamais dilater le tendon lui-même',
      injectat: 'Corticoïde 10–20 mg + lidocaïne 1 %, **0,5–1 mL au total**',
      duree: '5 min (infiltration) · 15–20 min (libération percutanée)',
    },

    indications: [
      'Doigt ou pouce à ressort symptomatique : accrochage, ressaut, blocage en flexion, douleur en regard de la tête métacarpienne, nodule palpable et mobile avec le tendon (stades I à III de Green).',
      'Confirmation échographique : **poulie A1 épaissie (> 0,5–1 mm** selon les séries, *seuil à confirmer*), nodule ou épaississement du fléchisseur, épanchement péri-tendineux, hyperémie Doppler, et **ressaut visible en dynamique**.',
      'Première intention après échec ou insuffisance des mesures simples (repos relatif, orthèse d\'extension nocturne de la MCP, AINS topiques) — ou d\'emblée devant un ressaut installé et gênant.',
      'Récidive après une première infiltration efficace : une deuxième injection est légitime ; au-delà, envisager la libération.',
      '**Libération percutanée échoguidée de A1** : stades II–III, échec de 1 à 2 infiltrations, récidive rapide, patient diabétique (chez qui les infiltrations marchent moins bien et récidivent plus), ou patient souhaitant éviter une chirurgie ouverte et une cicatrice palmaire.',
      'Doigt à ressort **multiple** ou associé à un canal carpien, une polyarthrite, une amylose, une hypothyroïdie, un diabète : traiter le doigt, mais chercher et traiter le contexte.',
    ],
    contreIndications: [
      'Absolues : refus, infection cutanée en regard, allergie vraie aux amino-amides.',
      '**Stade IV de Green — doigt bloqué en flexion irréductible** : la rétraction est articulaire, l\'infiltration n\'y changera rien. Avis chirurgical, en sachant que la récupération de l\'extension est incomplète dans ces formes évoluées.',
      'Relatives : diabète déséquilibré (efficacité moindre, récidive plus fréquente, pic glycémique), plus de 2 infiltrations sur le même doigt, peau très fine.',
      'Hémostase : geste **à faible risque hémorragique** (superficiel, compressible, ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ; **prudence particulière pour la libération percutanée** chez l\'anticoagulé (geste sectionnant, pédicules à proximité).',
      '**Libération percutanée du pouce** : le **nerf collatéral radial du pouce croise obliquement la poulie A1**. C\'est la contre-indication relative la plus importante de la technique percutanée à cette localisation — soit on maîtrise parfaitement son repérage échographique, soit on adresse.',
      'Enfant (pouce à ressort congénital) : prise en charge spécifique, hors du cadre de cette fiche.',
    ],
    alternatives: 'Orthèse d\'extension de la MCP portée la nuit 6–10 semaines : efficace dans une part des cas, notamment sur les formes récentes, et à proposer avant ou avec l\'infiltration. **Chirurgie ouverte** (ouverture de A1 à ciel ouvert) : référence historique, taux de succès élevé et récidive faible, au prix d\'une cicatrice palmaire, d\'un arrêt d\'activité et d\'un risque — faible — de lésion nerveuse et de raideur. **Libération percutanée à l\'aiguille sous échographie** : positionnée entre les deux, faite en consultation, sans cicatrice, avec dans les séries prospectives des taux de succès proches de la chirurgie ouverte et une reprise d\'activité plus rapide ; elle demande en revanche une vraie courbe d\'apprentissage et une bonne maîtrise de l\'anatomie du pédicule. À l\'IFD, c\'est un geste d\'HDJ crédible pour les échecs d\'infiltration, à condition de le structurer (indications, consentement, traçabilité) plutôt que de l\'improviser.',

    anatomie: `La gaine des fléchisseurs est un tunnel synovial renforcé par des **poulies annulaires (A1 à A5)** et **cruciformes (C1 à C3)**, dont le rôle est d\'empêcher la corde de l\'arc du tendon en flexion. La **poulie A1** est la plus proximale : elle recouvre la **tête métacarpienne et l\'articulation métacarpo-phalangienne**, en regard du **pli palmaire distal** pour les 3e, 4e et 5e doigts, du **pli palmaire proximal** pour l\'index, et de l\'**articulation métacarpo-phalangienne du pouce** (au niveau des sésamoïdes).

Sous la poulie coulissent le **fléchisseur superficiel des doigts (FCS)**, superficiel et aplati à ce niveau, et le **fléchisseur profond (FCP)**, plus profond et plus rond. Le conflit se fait entre la poulie A1 épaissie et un **nodule** ou un épaississement fusiforme du tendon, le plus souvent **juste en amont** de la poulie : le nodule passe difficilement, se coince, et le doigt cliqute ou se bloque.

Les **pédicules vasculo-nerveux collatéraux** (nerf collatéral en position palmaire, artère collatérale juste en arrière) cheminent **de part et d\'autre** de la gaine. Ils sont latéraux, et c\'est ce qui rend l\'abord latéral sûr — **sauf au pouce**, où le **nerf collatéral radial croise obliquement la face palmaire de la poulie A1**. C\'est l\'exception anatomique majeure de cette fiche.

### Ce qui compte pour le geste
- **Épaisseur de A1** : normale de l\'ordre de 0,2–0,5 mm, **épaissie au-delà de 0,5 à 1 mm** dans la maladie (les seuils publiés varient, *fourchette à confirmer*). C\'est une mesure simple, comparable au doigt controlatéral, et qui documente le diagnostic.
- **La cible n\'est pas la poulie mais l\'espace sous la poulie** : le plan de glissement entre A1 et le tendon. Une injection dans le tendon est inutile et potentiellement délétère.
- **L\'examen dynamique fait le diagnostic** : demander une flexion-extension active en gardant la sonde en longitudinal — on voit le nodule buter sur la poulie, puis passer d\'un coup. Aucun autre examen ne montre cela.
- **A2 doit être respectée** : elle commence juste en aval de A1, sur la première phalange. Sa section entraîne une **corde de l\'arc (bowstringing)** et une perte de force définitive. C\'est la limite distale absolue de toute libération.
- **Le diabète change le pronostic** : moins bonne réponse à l\'infiltration, récidive plus fréquente, doigts multiples. À dire au patient dès la première consultation, sinon chaque récidive est vécue comme un échec du praticien.
- **Profondeurs** : poulie à 2–5 mm, tendons à 3–8 mm, corticale de la tête métacarpienne à 8–14 mm. Tout se joue dans un centimètre, sous une sonde de 18 MHz.`,

    installation: {
      patient: `**Décubitus dorsal ou assis**, main posée **paume vers le haut** sur un billot ou un champ roulé, poignet en légère extension, **doigts en extension détendue** (ne pas laisser le patient serrer : la gaine se ferme et le tendon remonte).

Pour le **pouce à ressort** : pouce en abduction-extension, main en supination, colonne du pouce dégagée.

Marquer au feutre le pli palmaire correspondant et la saillie du nodule avant désinfection. Faire faire une flexion-extension avant l\'asepsie : on doit avoir vu le ressaut à l\'écran.`,
      operateur: `Opérateur **assis face au patient**, écran dans l\'axe du regard. Sonde en appui très léger — le nodule et l\'épanchement se chassent sous la pression.

Sens de ponction : **latéral (radial ou ulnaire) en coupe transversale**, ce qui met l\'aiguille dans un plan où l\'on voit à la fois le tendon, la poulie et les deux pédicules ; ou **de distal en proximal en coupe longitudinale**, ce qui donne le trajet le plus long dans la gaine. Les deux sont valables ; le choix se fait sur la qualité de la fenêtre.

Convention d\'image : en transversal, radial à gauche ; en longitudinal, **proximal (paume) à gauche, distal (doigt) à droite**.`,
      sonde: `- Linéaire **15–18 MHz** ; la **hockey stick** est ici un vrai gain (surface courbe, doigt étroit). Une sonde de 12 MHz suffit pour l\'infiltration, pas pour la libération percutanée.
- Profondeur **1,5–2 cm**, focale à 5 mm, gain réglé pour distinguer la poulie (hypoéchogène quand elle est épaissie) de la structure fibrillaire du tendon.
- **Doppler couleur basse PRF** : hyperémie péri-tendineuse (activité) et **repérage des artères collatérales** — donc des pédicules.
- **Basculer la sonde** pour lever l\'anisotropie : c\'est ce qui sépare la poulie du tendon sous-jacent.
- **Examen dynamique systématique** en flexion-extension active, en longitudinal : c\'est le temps diagnostique.`,
    },

    reperage: [
      { titre: 'Se placer sur la tête métacarpienne', texte: 'Sonde **transversale sur la paume**, en regard du pli palmaire distal (3e–5e doigts) ou proximal (index), sur la **tête métacarpienne**. Image attendue : la convexité corticale de la tête en profondeur, les **deux tendons fléchisseurs** au-dessus (FCS aplati et superficiel, FCP plus rond et profond), et la **poulie A1** en arc hypoéchogène les coiffant.' },
      { titre: 'Mesurer la poulie A1', texte: 'Mesurer l\'épaisseur de la poulie à son sommet, perpendiculairement. Normale **0,2–0,5 mm**, pathologique **> 0,5–1 mm**. Comparer au même doigt controlatéral ou au doigt voisin : la comparaison vaut mieux qu\'un seuil absolu. Chercher l\'**hyperémie Doppler**, signe d\'activité.' },
      { titre: 'Chercher le nodule en coupe longitudinale', texte: 'Basculer la sonde dans l\'axe du doigt : le **nodule** ou l\'épaississement fusiforme du fléchisseur apparaît **juste en amont** de la poulie, avec parfois un épanchement anéchogène de part et d\'autre. C\'est lui qui bute.' },
      { titre: 'Examen dynamique — le temps diagnostique', texte: 'Sonde maintenue en longitudinal, demander une **flexion-extension active** du doigt : on voit le nodule venir buter sur le bord proximal de A1, marquer un temps d\'arrêt, puis franchir d\'un coup. **Filmer ou noter ce ressaut** : c\'est le meilleur élément du compte rendu, et le meilleur argument face à un patient qui doute.' },
      { titre: 'Repérer les pédicules collatéraux', texte: 'Doppler couleur en transversal : les **artères collatérales** signent la position des deux pédicules, de part et d\'autre de la gaine. **Au pouce**, chercher spécifiquement le **nerf collatéral radial** qui croise obliquement la poulie A1 en avant — condition sine qua non avant toute libération percutanée à ce doigt.' },
      { titre: 'Si l\'image n\'est pas claire', texte: 'Alléger l\'appui, remettre du gel, basculer la sonde. **Si la poulie paraît normale et qu\'il n\'y a pas de ressaut** : reconsidérer le diagnostic — ténosynovite des fléchisseurs (polyarthrite), arthrose métacarpo-phalangienne, kyste de la gaine, corps étranger, maladie de Dupuytren débutante. Ne pas infiltrer une gaine normale.' },
    ],

    sonoanatomie: [
      { structure: 'Poulie A1', aspect: 'Arc hypoéchogène coiffant les tendons, **épaissi > 0,5–1 mm** dans la maladie, parfois hyperémique', repere: 'En regard de la tête métacarpienne et de la MCP ; la cible est **sous** elle' },
      { structure: 'Nodule du fléchisseur', aspect: 'Épaississement fusiforme ou nodulaire, hypoéchogène, mobile avec le tendon', repere: 'Le plus souvent **juste en amont** de A1 ; c\'est lui qui bute' },
      { structure: 'Fléchisseur superficiel (FCS)', aspect: 'Tendon fibrillaire aplati, superficiel', repere: 'Directement sous la poulie' },
      { structure: 'Fléchisseur profond (FCP)', aspect: 'Tendon fibrillaire plus rond, profond', repere: 'Entre le FCS et la tête métacarpienne' },
      { structure: 'Épanchement péri-tendineux', aspect: 'Liseré anéchogène cernant les tendons dans la gaine', repere: 'Espace cible de l\'injection ; sa distension est le critère de fin' },
      { structure: 'Tête métacarpienne', aspect: 'Convexité corticale hyperéchogène avec cône d\'ombre', repere: 'Plancher ; ne pas y buter avec l\'aiguille' },
      { structure: 'Pédicules collatéraux (nerf + artère)', aspect: 'Petit faisceau nerveux et artère pulsatile en Doppler, de part et d\'autre de la gaine', repere: 'Latéraux : c\'est ce qui rend l\'abord latéral sûr' },
      { structure: 'Nerf collatéral radial du pouce', aspect: 'Faisceau de 1–2 mm croisant obliquement la face palmaire de A1', repere: '**Exception majeure** : à repérer impérativement avant toute libération percutanée du pouce' },
      { structure: 'Poulie A2', aspect: 'Bande hyperéchogène sur la première phalange, en aval de A1', repere: '**Limite distale absolue** de toute libération : sa section provoque une corde de l\'arc' },
    ],

    technique: [
      { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** l\'asepsie : A1 mesurée, nodule localisé, **ressaut vu en dynamique**, Doppler passé sur les deux pédicules (et sur le nerf collatéral radial au pouce). Désinfection large, gel stérile. Seringue de 1 mL, aiguille **25–27 G 16–25 mm**.' },
      { titre: 'Anesthésie cutanée', texte: 'Inutile pour une infiltration à la 27 G. **Indispensable avant une libération percutanée** : 0,5–1 mL de lidocaïne 1 % en sous-cutané et dans la gaine, en s\'assurant de ne pas anesthésier les collatéraux (on veut que le patient signale une paresthésie si l\'aiguille approche du nerf).' },
      { titre: 'Infiltration : ponction latérale dans le plan', texte: 'Sonde **transversale** sur la tête métacarpienne, aiguille entrant par le versant **radial ou ulnaire**, à plat, **à distance du pédicule repéré**. Amener la pointe **entre la poulie A1 et le tendon**, tangentiellement — jamais perpendiculairement au tendon. La traversée de la poulie donne un ressaut discret.' },
      { titre: 'Test : les 0,1 premiers millilitres', texte: 'Injecter **0,1 mL** et regarder. (1) Le liquide **cerne le tendon d\'un croissant anéchogène** et fuse le long de la gaine → poursuivre. (2) Le **tendon se dilate** et l\'injection résiste → **intratendineux : arrêter, reculer de 1 mm**. (3) Le liquide reste en sous-cutané → la pointe n\'a pas franchi la poulie, avancer.' },
      { titre: 'Injection et critère de fin', texte: 'Compléter à **0,5–1 mL**. Critère de fin : **croissant anéchogène complet autour du tendon**, s\'étendant le long de la gaine en amont et en aval de A1, sans dilatation tendineuse et sans résistance. Un volume plus important ne sert à rien : la gaine est virtuelle.' },
      { titre: 'Libération percutanée de A1 (geste séparé)', texte: 'Après anesthésie locale, aiguille **18–21 G** introduite **en distal**, dans l\'axe du doigt, **biseau orienté dans l\'axe longitudinal**, pointe glissée **entre la poulie et le tendon**. Sous contrôle échographique permanent, effectuer un **va-et-vient longitudinal** qui sectionne la poulie de dedans en dehors, en remontant progressivement. **Critères de fin** : disparition échographique de la bande de A1, sensation de crissement puis de vide, **et surtout disparition du ressaut à la flexion-extension active demandée sur la table**. **Limite distale absolue : le bord proximal de A2.**' },
      { titre: 'Après le geste', texte: 'Compression 1 min, pansement. **Mobilisation active immédiate** encouragée (flexion-extension douce plusieurs fois par jour) : c\'est ce qui empêche la ré-adhérence et la raideur. Consignes écrites : pas de port de charge 48 h, signaler fièvre, douleur croissante, rougeur ou perte de sensibilité de l\'hémi-pulpe. Prévenir de la **poussée douloureuse de 24–48 h**. Après libération percutanée : reprise des activités courantes en quelques jours, pansement simple, pas de point de suture.' },
    ],

    injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Infiltration de référence** | Triamcinolone acétonide 10–20 mg **ou** méthylprednisolone 10–20 mg **ou** bétaméthasone 5,7 mg (Célestène® Chronodose 1 mL) ou 7 mg (Diprostène® 1 mL), + lidocaïne 1 % 0,5 mL | **0,5–1 mL au total** | La gaine est virtuelle : au-delà de 1 mL on distend et on fuse en sous-cutané. Dose faible suffisante — l\'efficacité ne suit pas la dose |
| **Interdit à ce site** | Triamcinolone **hexacétonide** (Hexatrione®) | — | **Strictement intra-articulaire.** Dans une gaine tendineuse superficielle : atrophie et fragilisation tendineuse |
| Position du dépôt | Intra-gaine (sous A1) **ou** péri-tendineux immédiat | 0,5–1 mL | Les essais comparant dépôt intra-gaine et péri-tendineux ne montrent **pas de différence nette d\'efficacité** — ce qui compte est d\'être hors du tendon |
| Anesthésie avant libération percutanée | Lidocaïne 1 % (sans adrénaline) | 0,5–1 mL sous-cutané + intra-gaine | Ne pas anesthésier les collatéraux : on veut pouvoir interroger le patient pendant le geste |
| Diabétique | Même produit, même dose ; prévenir | 0,5–1 mL | Efficacité moindre, récidive plus fréquente, **pic glycémique de 48–72 h**. Discuter d\'emblée la libération percutanée en cas de récidive |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Sans objet isolément ; à additionner si plusieurs doigts sont traités dans la même séance.

**Rythme** : **2 infiltrations au maximum** par doigt, espacées d\'au moins 3 mois. Au-delà, le rapport bénéfice/risque bascule vers la libération (percutanée ou ouverte) — les injections répétées fragilisent le tendon et la peau sans améliorer le pronostic.

**Doigts multiples** : possible dans la même séance, en additionnant les doses de corticoïde et d\'AL, et en prévenant du pic glycémique majoré chez le diabétique.`,

    variantes: [
      { titre: 'Abord longitudinal de distal en proximal', texte: 'Sonde placée dans l\'axe du doigt, aiguille dans le plan venant du versant distal, glissée sous la poulie. Avantage : le trajet dans la gaine est long et bien visible, et la diffusion du produit se suit sur plusieurs centimètres. Inconvénient : on perd la vue des deux pédicules — les avoir repérés en transversal avant.' },
      { titre: 'Dépôt péri-tendineux plutôt qu\'intra-gaine', texte: 'Certaines équipes déposent le corticoïde **au contact immédiat** de la gaine plutôt qu\'à l\'intérieur, en faisant valoir un risque tendineux moindre. Les essais comparatifs ne montrent **pas de différence significative d\'efficacité**. Conclusion pratique : ce qui compte n\'est pas d\'être dedans à tout prix, c\'est de **ne pas être dans le tendon**.' },
      { titre: 'Libération percutanée échoguidée de A1 — la technique', texte: `Geste de consultation ou d\'HDJ, 15–20 minutes. Anesthésie locale, aiguille **18–21 G** (le calibre varie selon les protocoles publiés ; certaines équipes utilisent un couteau-crochet dédié), introduite **en distal dans l\'axe du doigt**, **biseau orienté longitudinalement**, pointe placée **entre la poulie et le tendon**. Sous contrôle échographique permanent, mouvement de **va-et-vient longitudinal** sectionnant A1 de dedans en dehors, remonté progressivement jusqu\'à disparition de la bande.

**Trois critères d\'arrêt** : disparition échographique de A1, sensation tactile de crissement puis de vide, et **abolition du ressaut à la flexion-extension active testée immédiatement**. **Limite distale : le bord proximal de A2** — la dépasser expose à la corde de l\'arc.

**Au pouce** : le **nerf collatéral radial croise la poulie**. Soit on l\'a formellement identifié et écarté du trajet, soit on ne fait pas le geste à ce doigt.

Résultats : les séries prospectives rapportent des taux de succès **élevés, proches de la chirurgie ouverte**, avec une reprise d\'activité plus rapide et pas de cicatrice. Les essais comparatifs directs restent de petite taille.` },
      { titre: 'Orthèse d\'extension de la MCP', texte: 'Orthèse maintenant la métacarpo-phalangienne en extension la nuit, 6 à 10 semaines, interphalangiennes libres. Efficace dans une part des cas, surtout sur les formes récentes et chez le patient qui refuse l\'injection. À proposer en association, pas seulement en alternative.' },
      { titre: 'Ce qu\'il faut savoir refuser', texte: 'Doigt bloqué en flexion irréductible (stade IV) : avis chirurgical. Troisième infiltration sur le même doigt : proposer la libération. Libération percutanée du pouce sans identification formelle du nerf collatéral radial : ne pas faire. Doigt à ressort chez un patient avec une maladie de Dupuytren évoluée en regard : l\'anatomie est modifiée, la voie percutanée devient hasardeuse.' },
    ],

    pearls: [
      'Voir le ressaut à l\'écran avant de piquer : le geste diagnostique tient en 10 secondes de flexion-extension active en coupe longitudinale.',
      'Mesurer A1 et **comparer au doigt controlatéral** : la comparaison est plus fiable que n\'importe quel seuil publié.',
      'Aiguille **tangentielle**, jamais perpendiculaire au tendon : c\'est ce qui évite l\'injection intratendineuse.',
      'Regarder les 0,1 premiers millilitres : ils disent tout — croissant autour du tendon, dilatation du tendon, ou fusée sous-cutanée.',
      'Doppler sur les deux pédicules avant de choisir le côté d\'entrée ; au pouce, chercher spécifiquement le collatéral radial.',
      'Mobilisation active immédiate après le geste : c\'est le meilleur traitement de la ré-adhérence et de la raideur.',
      'Annoncer le diabète comme facteur pronostique **dès la première consultation** : le patient comprend alors la récidive comme une donnée de sa maladie, pas comme un échec du geste.',
    ],
    pieges: [
      'Injecter dans le tendon : résistance et dilatation fibrillaire — arrêter immédiatement.',
      'Utiliser de l\'Hexatrione® (triamcinolone hexacétonide) : produit strictement intra-articulaire, proscrit dans une gaine.',
      'Piquer sans Doppler et léser un pédicule collatéral : hypoesthésie d\'une hémi-pulpe, mal vécue et durable.',
      'Faire une libération percutanée du pouce sans avoir repéré le nerf collatéral radial : c\'est la complication décrite de cette technique.',
      'Dépasser le bord proximal de A2 pendant la libération : corde de l\'arc et perte de force définitive.',
      'Appuyer avec la sonde : le nodule et l\'épanchement disparaissent, on conclut à tort à la normalité.',
      'Enchaîner une troisième infiltration : au-delà de deux, la libération est plus raisonnable — surtout chez le diabétique.',
      'Ne pas vérifier l\'abolition du ressaut en fin de libération : une libération incomplète se rattrape sur la table, pas en consultation trois semaines plus tard.',
    ],
    complications: [
      '**Poussée douloureuse post-injection** (24–48 h) : fréquente, cède sous froid et antalgiques de palier 1. À annoncer.',
      '**Atrophie graisseuse sous-cutanée et dépigmentation** en regard de la poulie : classiques avec les corticoïdes microcristallins en site superficiel ; la pulpe palmaire est un site visible et sensible. Souvent lentement réversible.',
      '**Rupture tendineuse** : rare, décrite surtout après **infiltrations répétées** ou injection intratendineuse — argument fort pour plafonner à deux injections.',
      '**Lésion d\'un pédicule collatéral** : hypoesthésie d\'une hémi-pulpe, dysesthésie, névrome. Risque principal de la voie percutanée, maximal **au pouce** (nerf collatéral radial croisant A1).',
      '**Libération incomplète** : persistance du ressaut — se dépiste immédiatement en faisant fléchir-étendre sur la table, et se complète dans le même temps.',
      '**Corde de l\'arc (bowstringing)** si A2 est entamée : perte de force de flexion, déficit fonctionnel définitif. Évitée par le respect strict de la limite distale.',
      'Raideur, ré-adhérence : prévenues par la mobilisation active immédiate.',
      'Infection : exceptionnelle, mais la gaine des fléchisseurs est un espace à risque de diffusion — asepsie stricte et consignes écrites (douleur croissante, fièvre, rougeur, doigt en crochet).',
      'Pic glycémique 48–72 h chez le diabétique.',
    ],
    securite: [
      'Site superficiel et compressible : **faible risque hémorragique** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ; prudence accrue pour la libération percutanée chez l\'anticoagulé.',
      '**Doppler obligatoire** sur les deux pédicules collatéraux avant de choisir le côté d\'entrée ; **au pouce, identification formelle du nerf collatéral radial** avant toute libération percutanée.',
      'Aiguille toujours tangentielle au tendon ; injection fractionnée sous contrôle visuel ; arrêt immédiat sur résistance ou dilatation tendineuse.',
      '**Hexatrione® proscrit** (intra-articulaire exclusivement).',
      'Maximum 2 infiltrations par doigt, espacées de 3 mois.',
      'Libération percutanée : anesthésie locale **sans bloquer les collatéraux**, contrôle échographique permanent, **limite distale au bord proximal de A2**, vérification de l\'abolition du ressaut avant de retirer l\'aiguille.',
      'Asepsie de gaine tendineuse : détersion-désinfection, gel stérile, gants stériles, consignes écrites sur les signes d\'infection.',
    ],

    suivi: `- **J0** : stade de Green avant / après, présence ou abolition du ressaut testée sur la table, EN. Consigner **l\'épaisseur mesurée de A1** et le fait que le ressaut a été vu en dynamique — c\'est ce qui documente l\'indication.
- **J2–J3** : la poussée douloureuse doit avoir cédé. Après libération percutanée : vérifier l\'absence de signe infectieux et la mobilisation active.
- **J15–J30** : ressaut, douleur, **QuickDASH**, reprise des activités. C\'est l\'échéance qui juge l\'infiltration : l\'effet est habituellement rapide et franc.
- **3 mois** : décision. Récidive après un effet ayant duré ≥ 3 mois → deuxième infiltration légitime. Récidive rapide, ou deuxième récidive, ou patient diabétique → **proposer la libération** (percutanée échoguidée ou ouverte).
- **6–12 mois** : c\'est l\'horizon où se joue la récidive après infiltration, qui concerne une part importante des patients — **davantage chez le diabétique**. Prévenir dès le départ évite que chaque récidive soit vécue comme un échec.
- **Après libération percutanée** : contrôle à 1 mois (ressaut, sensibilité des deux hémi-pulpes, force de flexion, absence de corde de l\'arc). **Tester spécifiquement la sensibilité pulpaire** et la consigner : c\'est la complication à ne pas manquer.
- **Escalade** : stade IV, échec de deux infiltrations, échec ou libération incomplète → chirurgie ouverte.`,

    evidence: `- **Corticoïde local** : la revue **Cochrane (Peters-Veluthamaningal et al.)** conclut à l\'efficacité de l\'infiltration de corticoïde dans le doigt à ressort de l\'adulte. Les séries convergent vers un succès de l\'ordre de **60 à 90 % après une ou deux injections**, avec une **récidive fréquente à un an**. C\'est le geste le mieux étayé de cette fiche. Preuve **forte** sur le principe, plus faible sur les modalités (produit, dose, site du dépôt).
- **Diabète** : facteur pronostique défavorable constant dans les séries — réponse moindre, récidive plus fréquente, atteintes multiples. Donnée robuste, à intégrer dès la première consultation.
- **Échoguidage contre technique aveugle** : les travaux de précision (dont ceux de **Bodor et Flossman, Journal of Ultrasound in Medicine**) montrent une **meilleure exactitude du placement** sous échographie. Le gain **clinique** par rapport à une injection à l\'aveugle faite par un opérateur expérimenté est **débattu** — le doigt à ressort étant l\'un des rares sites où le repérage anatomique est fiable. L\'argument de l\'échoguidage est ici surtout la **sécurité** (tendon, pédicules) et la **traçabilité**, plus que l\'efficacité.
- **Dépôt intra-gaine contre péri-tendineux** : les essais comparatifs ne montrent **pas de différence significative** d\'efficacité. À retenir : ne pas s\'acharner à être « dans » la gaine au prix d\'un risque tendineux.
- **Libération percutanée échoguidée de A1** : les séries prospectives publiées — notamment les travaux de l\'équipe radiologique de **Toulouse (Lapègue et al.)** sur la libération percutanée échoguidée à l\'aiguille — rapportent des taux de succès **élevés**, avec peu de complications entre des mains entraînées et une reprise d\'activité rapide. Les **essais randomisés contre chirurgie ouverte restent de petite taille**. Preuve **modérée** : cohérence des séries, faiblesse des comparaisons directes, et effet-opérateur probablement important.
- **Chirurgie** : la revue Cochrane sur la chirurgie du doigt à ressort ne permet pas de conclure formellement à la supériorité d\'une technique ; la chirurgie ouverte reste la référence de sécurité, avec un taux de récidive faible.
- **Trous de la littérature, à assumer** : pas de consensus sur le **seuil d\'épaisseur de A1** (les valeurs publiées vont d\'environ 0,5 à 0,9 mm) ; pas de donnée robuste sur le calibre optimal de l\'aiguille de libération (18 à 21 G selon les équipes) ; pas d\'essai comparant libération percutanée échoguidée et infiltration en première intention.`,

    references: [
      { auteurs: 'Peters-Veluthamaningal C, van der Windt DAWM, Winters JC, Meyboom-de Jong B', titre: 'Corticosteroid injection for trigger finger in adults', revue: 'Cochrane Database of Systematic Reviews', annee: '2009', type: 'revue systématique', verif: false, note: 'Composition des auteurs et année à confirmer.' },
      { auteurs: 'Bodor M, Flossman T', titre: 'Ultrasound-guided first annular pulley injection for trigger finger', revue: 'Journal of Ultrasound in Medicine', annee: '2009', type: 'série', verif: false, note: 'Précision du placement sous échographie ; année à confirmer.' },
      { auteurs: 'Lapègue F, André A, et al.', titre: 'US-guided percutaneous release of the trigger finger by using a 21-gauge needle (série prospective)', revue: 'Radiology', annee: '2016', type: 'série prospective', verif: false, note: 'Équipe radiologique toulousaine — **métadonnées à confirmer** (titre exact, volume, pages) lors de la passe de vérification ; l\'existence de ce travail et la technique décrite sont en revanche bien établies.' },
      { auteurs: 'Fiorini HJ, Tamaoki MJ, Lenza M, et al.', titre: 'Surgery for trigger finger', revue: 'Cochrane Database of Systematic Reviews', annee: '2018', type: 'revue systématique', verif: false, note: 'Composition des auteurs et année à confirmer.' },
      { auteurs: 'Green DP', titre: 'Green\'s Operative Hand Surgery — classification clinique du doigt à ressort (stades I–IV)', revue: 'Elsevier (ouvrage de référence)', annee: 'éditions successives', type: 'ouvrage', verif: false, note: 'Source de la classification en stades utilisée dans cette fiche.' },
      { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage)', annee: '2007', type: 'ouvrage', verif: false, note: 'Sono-anatomie des poulies digitales et des pédicules collatéraux.' },
      { auteurs: 'Özçakar L, Kara M, Chang KV, et al.', titre: 'EURO-MUSCULUS/USPRM basic scanning protocols for the wrist and hand', revue: 'European Journal of Physical and Rehabilitation Medicine', annee: '2015', type: 'protocole', verif: false, note: 'Protocole de balayage standardisé ; année à confirmer.' },
      { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Métadonnées reprises de la fiche nerf-suprascapulaire, vérifiées lors d\'une session antérieure.' },
    ],
    videos: [],

    scenes: [
      {
        id: 'dr-longitudinal', section: 'sonoanatomie', titre: 'Gaine des fléchisseurs en coupe longitudinale — poulie A1 et nodule',
        legende: 'Coupe dans l\'axe du doigt, en regard de la tête métacarpienne. La poulie A1 apparaît comme une bande hypoéchogène épaissie coiffant les tendons fléchisseurs ; le nodule ou l\'épaississement fusiforme du tendon se situe le plus souvent juste en amont d\'elle. C\'est sur cette coupe que se fait le temps diagnostique : une flexion-extension active montre le nodule buter sur le bord proximal de la poulie, puis franchir d\'un coup.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Proximal (paume)', right: 'Distal (doigt)' }).probeInfo({ plan: 'Longitudinal dans l\'axe du doigt', type: 'linéaire 15–18 MHz' });
          baseLong(S, true);
          S.label({ x: 336, y: 94, text: 'Poulie A1 épaissie (> 0,5–1 mm)', cls: 'lbl-lig', small: true, lead: [336, 120] });
          S.label({ x: 112, y: 104, text: 'Nodule du fléchisseur', cls: 'lbl-tendon', small: true, lead: [170, 152] });
          S.label({ x: 528, y: 184, text: 'Fléchisseurs (FCS + FCP)', cls: 'lbl-tendon', small: true });
          S.label({ x: 328, y: 296, text: 'Interligne MCP', cls: 'lbl-bone', small: true, lead: [328, 250] });
          S.label({ x: 612, y: 236, text: 'Poulie A2 en aval :\nlimite à ne jamais franchir', cls: 'lbl-lig', anchor: 'end', small: true, lead: [560, 142] });
        },
      },
      {
        id: 'dr-injection', section: 'technique', titre: 'Infiltration de la gaine sous A1 — abord latéral dans le plan',
        legende: 'Coupe transversale sur la tête métacarpienne. L\'aiguille entre par le versant latéral, à distance du pédicule repéré au Doppler, et vient placer sa pointe entre la poulie et le tendon — tangentiellement, jamais perpendiculairement. Critère de fin : croissant anéchogène complet autour du tendon, s\'étendant le long de la gaine, sans aucune dilatation tendineuse.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Radial', right: 'Ulnaire' }).probeInfo({ plan: 'Transverse sur la tête métacarpienne', type: 'in-plane' });
          S.skin({ thickness: 7, fatBelow: 16 });
          S.bone({ path: 'M-20 372 Q320 176 660 372', label: 'Tête métacarpienne', at: [320, 372], ldy: 0, small: true });
          S.ligament({ path: 'M200 240 Q320 76 440 240 L440 254 Q320 90 200 254 Z' });
          S.tendon({ x: 320, y: 196, rx: 62, ry: 18 });
          S.tendon({ x: 320, y: 232, rx: 54, ry: 20 });
          S.nerve({ x: 150, y: 262, r: 7 });
          S.artery({ x: 176, y: 278, r: 6 });
          S.nerve({ x: 490, y: 262, r: 7 });
          S.artery({ x: 464, y: 278, r: 6 });
          S.label({ x: 116, y: 316, text: 'Pédicule collatéral', cls: 'lbl-nerve', small: true, lead: [148, 272] });
          S.label({ x: 556, y: 316, text: 'Pédicule collatéral', cls: 'lbl-nerve', anchor: 'end', small: true, lead: [492, 272] });
          S.label({ x: 176, y: 140, text: 'Poulie A1', cls: 'lbl-lig', small: true, lead: [244, 172] });
          S.label({ x: 320, y: 196, text: 'FCS', cls: 'lbl-tendon', small: true, dy: 4 });
          S.label({ x: 320, y: 232, text: 'FCP', cls: 'lbl-tendon', small: true, dy: 4 });
          S.target({ x: 356, y: 176, r: 16 });
          S.needle({ from: [636, 104], to: [356, 176], label: '25–27 G, tangentielle', delay: 0.2, dur: 1.2 });
          S.spreadPath({ path: 'M242 214 A 78 48 0 1 0 398 214 A 78 48 0 1 0 242 214 Z M254 214 A 66 40 0 1 1 386 214 A 66 40 0 1 1 254 214 Z', at: [534, 214], label: '0,5–1 mL', delay: 1.6, dur: 1.0 });
        },
      },
      {
        id: 'dr-liberation', section: 'technique', titre: 'Libération percutanée de A1 à l\'aiguille — va-et-vient longitudinal',
        legende: 'Aiguille 18–21 G introduite en distal dans l\'axe du doigt, biseau orienté longitudinalement, pointe glissée entre la poulie et le tendon. Le va-et-vient longitudinal sectionne A1 de dedans en dehors, en remontant progressivement. Trois critères d\'arrêt : disparition échographique de la bande, sensation de crissement puis de vide, et abolition du ressaut testée immédiatement en flexion-extension active. Limite distale absolue : le bord proximal de A2.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Proximal (paume)', right: 'Distal (doigt)' }).probeInfo({ plan: 'Longitudinal dans l\'axe du doigt', type: 'in-plane' });
          baseLong(S, false);
          S.label({ x: 116, y: 112, text: 'Poulie A1', cls: 'lbl-lig', small: true, lead: [254, 130] });
          S.label({ x: 616, y: 306, text: 'A2 : limite distale absolue', cls: 'lbl-lig', anchor: 'end', small: true, lead: [566, 142] });
          S.label({ x: 148, y: 330, text: 'Tête métacarpienne', cls: 'lbl-bone', small: true });
          S.needle({ from: [636, 152], to: [262, 152], label: '18–21 G, entre poulie et tendon', delay: 0.2, dur: 1.2 });
          S.arrow({ from: [288, 106], to: [412, 106], text: 'Va-et-vient longitudinal' });
        },
      },
    ],

    checklist: [
      'Ressaut vu en dynamique à l\'échographie et consigné ; épaisseur de A1 mesurée et comparée au côté opposé',
      'Stade de Green noté ; stade IV (blocage irréductible) → avis chirurgical, pas d\'infiltration',
      'Doppler passé sur les deux pédicules collatéraux ; **au pouce, nerf collatéral radial identifié** avant toute libération percutanée',
      'Hexatrione® exclu (intra-articulaire exclusivement) ; volume plafonné à 1 mL',
      'Nombre d\'infiltrations déjà reçues sur ce doigt vérifié (maximum 2, espacées de 3 mois)',
      'Diabète recherché et facteur pronostique expliqué au patient dès la première consultation',
      'Libération percutanée : limite distale au bord proximal de A2 vérifiée ; abolition du ressaut testée sur la table avant de retirer l\'aiguille ; sensibilité des deux hémi-pulpes testée et consignée',
      'Mobilisation active immédiate expliquée ; consignes écrites sur les signes d\'infection de gaine (douleur croissante, doigt en crochet, fièvre)',
    ],
  });

})();
