/* Fiche : nerf médian au canal carpien — infiltration, hydrodissection, PRP. */
(function () {

  /* Base sono-anatomique commune aux trois scènes.
     ulnar: 'pisiforme' (coupe d'entrée, niveau de mesure de la CSA)
            'hamulus'   (coupe un peu plus distale, niveau de la ponction) */
  function baseCarpe(S, ulnar, labels) {
    S.skin({ thickness: 7, fatBelow: 16 });
    S.bone({ path: 'M0 296 Q46 244 98 234 Q152 246 176 296', label: labels ? 'Scaphoïde' : null, at: [88, 258], ldy: 0, small: true });
    if (ulnar === 'pisiforme') {
      S.bone({ path: 'M470 292 Q506 206 546 204 Q596 224 616 292', label: labels ? 'Pisiforme' : null, at: [548, 320], ldy: 0, small: true });
      S.ligament({ path: 'M104 232 Q322 152 538 204 L540 214 Q322 164 106 242 Z' });
    } else {
      S.bone({ path: 'M446 218 Q506 214 522 262 L526 320' });
      S.ligament({ path: 'M104 232 Q286 156 460 210 L462 220 Q286 168 106 242 Z' });
    }
    S.tendon({ x: 300, y: 104, rx: 22, ry: 10 });
    S.tendon({ x: 170, y: 284, rx: 30, ry: 20 });
    S.tendon({ x: 254, y: 286, rx: 30, ry: 20 });
    S.tendon({ x: 338, y: 284, rx: 30, ry: 20 });
    S.tendon({ x: 418, y: 288, rx: 28, ry: 19 });
    S.tendon({ x: 128, y: 322, rx: 24, ry: 18 });
    S.tendon({ x: 214, y: 344, rx: 30, ry: 20 });
    S.tendon({ x: 300, y: 346, rx: 30, ry: 20 });
    S.tendon({ x: 386, y: 344, rx: 30, ry: 20 });
    S.bone({ path: 'M40 382 Q320 404 600 378' });
    S.artery({ x: 452, y: 154, r: 9 });
    S.nerve({ x: 502, y: 152, r: 8 });
  }

  ECHO.register({
    id: 'nerf-median-canal-carpien',
    titre: 'Nerf médian au canal carpien — infiltration, hydrodissection, PRP',
    titreCourt: 'Canal carpien',
    en: 'Ultrasound-guided median nerve injection for carpal tunnel syndrome: ulnar in-plane corticosteroid injection, perineural hydrodissection with 5 % dextrose (D5W), platelet-rich plasma',
    region: 'membre-sup',
    types: ['bloc', 'interventionnel'],
    niveau: 1,
    grade: 'Forte à court terme pour le corticoïde (Cochrane, ECR contre placebo) · Modérée pour l\'hydrodissection au D5W · Faible pour le PRP',
    maj: '2026-09',
    motsCles: ['syndrome du canal carpien', 'SCC', 'nerf médian', 'CSA', 'ratio poignet/avant-bras', 'hydrodissection', 'D5W', 'dextrose', 'PRP', 'rétinaculum des fléchisseurs', 'loge de Guyon', 'nerf médian bifide', 'artère médiane persistante'],
    resume: 'Le geste échoguidé le plus fréquent du membre supérieur, et celui où l\'échographie change trois choses à la fois : elle fait le diagnostic (surface de section à l\'entrée du canal, ratio poignet/avant-bras), elle détecte ce qui contre-indique ou modifie le geste (nerf médian bifide, artère médiane persistante, ténosynovite, lombrical intracanalaire, dépôt amyloïde), et elle sécurise l\'aiguille dans un canal où le nerf, neuf tendons, l\'artère ulnaire et le nerf ulnaire tiennent en moins de deux centimètres. Deux stratégies coexistent : l\'infiltration de corticoïde, dont le bénéfice à court terme est bien établi mais s\'épuise en quelques mois, et l\'hydrodissection au dextrose 5 %, qui vise le glissement du nerf plutôt que l\'inflammation et dont les essais de Wu montrent un effet plus prolongé. Aucune des deux ne remplace la chirurgie dans les formes déficitaires.',

    flash: {
      position: 'dorsal', positionNote: 'assis ou décubitus dorsal, avant-bras en supination sur une table ou un coussin, poignet en légère extension (rouleau sous le poignet), doigts en semi-flexion détendus',
      sonde: 'lineaire', sondeNote: '12–18 MHz (hockey stick idéale), profondeur 2–2,5 cm, focale à 8–12 mm',
      approche: 'in-plane', approcheNote: 'ulno-radiale, transversale : entrée du côté ulnaire, en passant en profondeur du paquet ulnaire de la loge de Guyon et en superficie du crochet de l\'hamatum',
      aiguille: '25–27 G, 25–40 mm (une 22 G 50 mm est acceptable pour un volume d\'hydrodissection élevé)',
      cible: 'Plan de glissement entre le nerf médian et les tendons fléchisseurs, puis entre le nerf et le rétinaculum : halo anéchogène circonférentiel, nerf soulevé et remobilisé, aucune déformation du nerf',
      injectat: 'Corticoïde : méthylprednisolone 40 mg ou triamcinolone 40 mg + 1–2 mL de lidocaïne 1 % · Hydrodissection : 5 mL de dextrose 5 % (D5W)',
      duree: '5–10 min (infiltration) · 10–15 min (hydrodissection)',
    },

    indications: [
      'Syndrome du canal carpien **léger à modéré** confirmé (clinique + électroneuromyographie et/ou échographie) : paresthésies nocturnes du territoire médian, réveil, signe de Phalen ou de Tinel, sans amyotrophie thénarienne ni déficit moteur — après échec de l\'orthèse nocturne de repos en position neutre portée 4–6 semaines.',
      'SCC de la **grossesse** ou du post-partum : l\'infiltration (ou l\'hydrodissection sans corticoïde) permet de passer le cap sans chirurgie, la résolution spontanée étant la règle après l\'accouchement.',
      'SCC en **attente de chirurgie** : soulagement transitoire assumé comme tel, sans retarder l\'intervention.',
      'SCC **secondaire à une ténosynovite** (polyarthrite, hémodialyse, hypothyroïdie, diabète, amylose) : l\'échographie montre l\'épaississement synovial et l\'infiltration traite la cause locale.',
      'Valeur **diagnostique** : un soulagement franc et immédiat après infiltration est un des meilleurs facteurs prédictifs du succès de la chirurgie — l\'argument est utile chez le patient hésitant ou au tableau atypique.',
      'SCC **récidivant après chirurgie**, sur fibrose péri-neurale documentée : indication d\'hydrodissection plutôt que de corticoïde.',
    ],
    contreIndications: [
      'Absolues : refus, infection cutanée du poignet, allergie vraie aux amino-amides.',
      'Relative majeure — **amyotrophie thénarienne, déficit d\'opposition du pouce, dénervation à l\'EMG, forme sévère** : ces patients relèvent de la neurolyse chirurgicale. Infiltrer y fait perdre des mois de récupération axonale.',
      '**Artère médiane persistante thrombosée** ou **nerf médian bifide** enserrant une artère : modifient le trajet et la cible ; l\'injection reste possible mais la ponction doit être planifiée au Doppler, jamais dans l\'axe du vaisseau.',
      'Hémostase : geste **à faible risque hémorragique** (site superficiel et compressible, ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants, anticoagulants au cas par cas.',
      'Corticoïde : diabète déséquilibré (pic glycémique de 48–72 h, à annoncer), infection évolutive, chirurgie du canal programmée à court terme, plus de 2 à 3 infiltrations sur le même poignet.',
      'Grossesse : préférer le sérum physiologique ou le D5W ; si corticoïde, dose unique.',
    ],
    alternatives: 'Orthèse nocturne en position neutre (efficace, à proposer systématiquement en première ligne et à maintenir après le geste), adaptation gestuelle, traitement de la cause générale. Corticothérapie orale courte : efficace mais moins que l\'injection locale et avec les effets systémiques. **Chirurgie** (neurolyse à ciel ouvert ou endoscopique) : supérieure aux injections **au-delà de 6–12 mois**, indispensable dans les formes sévères ou déficitaires. Positionner honnêtement l\'infiltration devant le patient : elle achète 3 à 6 mois en moyenne, elle ne guérit pas une compression mécanique constituée. L\'hydrodissection, elle, revendique un mécanisme différent (restauration du glissement du nerf dans le canal) et un effet plus durable dans les essais disponibles — la comparaison directe à la chirurgie n\'existe pas.',

    anatomie: `Le canal carpien est un **tunnel ostéo-fibreux inextensible**. Son plancher et ses parois sont la gouttière carpienne : **tubercule du scaphoïde et crête du trapèze** en radial, **pisiforme et crochet de l\'hamatum** en ulnaire. Son toit est le **rétinaculum des fléchisseurs** (ligament annulaire antérieur du carpe), tendu entre ces deux piliers, épais de 1 à 2 mm.

Le canal contient **dix structures** : les 4 tendons du fléchisseur superficiel des doigts, les 4 du fléchisseur profond, le tendon du long fléchisseur du pouce, et le **nerf médian** — le plus **superficiel et le plus radial**, plaqué contre la face profonde du rétinaculum. C\'est cette position qui rend l\'échoguidage à la fois nécessaire et suffisant.

Deux structures sont **hors du canal mais dans le champ de ponction** : l\'**artère ulnaire** et le **nerf ulnaire**, dans la **loge de Guyon**, superficiels au rétinaculum, du côté ulnaire (l\'artère est radiale au nerf). Toute approche ulnaire doit passer **en profondeur** de ce paquet.

### Ce qui compte pour le geste
- **Deux niveaux à distinguer** : l\'**entrée du canal** (niveau du pisiforme) est le plan de **mesure** de la surface de section ; la ponction se fait volontiers un peu plus **distalement**, au niveau du **crochet de l\'hamatum**, où l\'aiguille trouve un corridor entre le paquet ulnaire (au-dessus) et le crochet (en dessous). Confondre les deux plans fait piquer là où il n\'y a pas de place.
- **Branche cutanée palmaire du nerf médian** : elle naît 4–6 cm au-dessus du pli de flexion du poignet et chemine **au-dessus** du rétinaculum, en radial. Elle est épargnée dans le syndrome du canal carpien (d\'où une sensibilité conservée de l\'éminence thénar) et c\'est elle qu\'on lèse avec une approche trop superficielle et trop radiale : dysesthésie palmaire durable.
- **Branche thénarienne (motrice)** : récurrente, naissant à la sortie du canal. Variantes de Lanz : extra-ligamentaire le plus souvent, mais **sous-ligamentaire ou trans-ligamentaire** dans une part non négligeable des cas — d\'où la prudence à l\'aiguille dans le tiers distal.
- **Variantes fréquentes, à chercher au Doppler avant toute ponction** : **nerf médian bifide** (deux faisceaux séparés — la surface de section doit alors être la **somme** des deux) et **artère médiane persistante**, qui accompagne souvent le nerf bifide. Une artère médiane thrombosée est une cause classique de SCC aigu.
- **Muscles lombricaux intracanalaires** : ils remontent dans le canal en flexion des doigts et peuvent le combler — raison pour laquelle on examine et on injecte **doigts détendus, en semi-flexion**, pas poing fermé.
- **Profondeur** : nerf à 3–8 mm de la peau, plancher du canal à 15–20 mm. Tout se joue dans un centimètre.`,

    installation: {
      patient: `**Assis face à l\'opérateur** ou en décubitus dorsal, avant-bras en **supination** posé à plat sur la table ou sur un coussin, coude fléchi. Placer un **rouleau ou un champ roulé sous le poignet** pour obtenir 20–30° d\'extension : cela tend le rétinaculum, aplatit le relief et rend le canal plus lisible. Doigts **détendus en semi-flexion** — poing fermé, les lombricaux montent dans le canal et brouillent l\'image.

Chez le patient vagal ou anxieux, décubitus dorsal complet : le geste est court mais la vue de l\'aiguille au poignet est mal supportée.

Marquer le pli de flexion du poignet et le pisiforme avant désinfection.`,
      operateur: `Opérateur **assis face au patient**, main du patient orientée de façon que l\'opérateur pique **du côté ulnaire vers le côté radial** avec sa main dominante, écran dans l\'axe du regard, derrière la main du patient.

Convention d\'image : marqueur de sonde vers le **radial** — donc **radial à gauche, ulnaire à droite** de l\'écran. L\'aiguille entre alors par le bord **droit** de l\'image. Fixer cette convention une fois pour toutes : c\'est elle qui rend la lecture automatique.`,
      sonde: `- Linéaire **12–18 MHz**, preset nerf superficiel ; une sonde compacte (hockey stick) est nettement plus maniable sur un poignet fin.
- **Profondeur 2–2,5 cm**, focale à 8–12 mm, gain réglé pour distinguer l\'épinèvre (hyperéchogène) des fascicules (hypoéchogènes) — un gain trop élevé fait surestimer la surface de section.
- **Doppler couleur basse PRF, systématique** : artère médiane persistante, artère ulnaire, hyperémie intraneurale.
- Pression **minimale** : couche de gel épaisse ; le nerf médian s\'aplatit sous la sonde et la mesure devient fausse.
- Aiguille de petit calibre, angle d\'insonation très plat (< 20°) : à cette profondeur la visibilité est excellente.`,
    },

    reperage: [
      { titre: 'Coupe transversale à l\'entrée du canal', texte: 'Sonde **transversale sur le pli de flexion du poignet**, marqueur en radial. Repérer les deux piliers : le **tubercule du scaphoïde** (radial) et le **pisiforme** (ulnaire, très superficiel et arrondi). Entre eux, le **rétinaculum** en fine bande hyperéchogène arciforme. Le **nerf médian** est l\'ovale en nid d\'abeilles immédiatement sous le rétinaculum, en position **radiale**, au-dessus des tendons.' },
      { titre: 'Différencier nerf et tendons', texte: 'Faire **fléchir et étendre les doigts** : les tendons coulissent et changent d\'aspect, le nerf reste immobile ou se déplace en bloc, sans anisotropie. C\'est le test le plus rapide et le plus fiable. En cas de doute persistant, remonter à l\'avant-bras où le nerf médian est isolé entre le fléchisseur superficiel et le fléchisseur profond, puis redescendre en le suivant.' },
      { titre: 'Mesurer la surface de section (CSA)', texte: 'Contourner le nerf **à l\'intérieur du liseré hyperéchogène de l\'épinèvre**, sans compression, **à l\'entrée du canal (niveau du pisiforme)** — c\'est là que la mesure est validée. Seuils usuels : **CSA ≥ 10 mm²** retenue par la plupart des équipes (les seuils publiés vont de 9 à 13 mm² selon les séries et les appareils, *à confirmer sur la méta-analyse de référence*). Mesurer aussi **12 cm plus haut à l\'avant-bras** : un **ratio poignet/avant-bras > 1,4** est plus robuste que la valeur absolue, notamment chez les sujets de gabarit extrême et dans les polyneuropathies.' },
      { titre: 'Chercher les signes associés et la cause', texte: '**Signe de l\'encoche** (rétrécissement brutal du nerf sous le rétinaculum, à voir en coupe longitudinale), **aplatissement** du nerf dans le canal, **bombement volaire du rétinaculum**, **hyperémie intraneurale** au Doppler. Puis la cause : ténosynovite des fléchisseurs (halo hypoéchogène péri-tendineux), kyste, lipome, dépôt amyloïde (tendons épaissis et hyperéchogènes chez le dialysé ou l\'amylose à transthyrétine), lombrical intracanalaire.' },
      { titre: 'Doppler avant toute ponction', texte: 'Rechercher **systématiquement** l\'**artère médiane persistante** (dans ou contre le nerf, souvent avec un **nerf médian bifide**) et repérer l\'**artère ulnaire** dans la loge de Guyon. Une artère médiane non vue avant la ponction est un accident qui n\'arrive qu\'une fois.' },
      { titre: 'Choisir le plan de ponction', texte: 'Glisser la sonde **1–1,5 cm en distal** de l\'entrée : le pisiforme est remplacé par le **crochet de l\'hamatum**, et un corridor apparaît entre le **paquet ulnaire** (superficiel) et le **crochet** (profond). C\'est le plan de la ponction. **Si on ne trouve pas le nerf** : ne pas piquer ; remonter au tiers moyen de l\'avant-bras, identifier le médian entre FDS et FDP, et le suivre en continu jusqu\'au canal.' },
    ],

    sonoanatomie: [
      { structure: 'Rétinaculum des fléchisseurs', aspect: 'Fine bande hyperéchogène arciforme de 1–2 mm tendue d\'un pilier à l\'autre ; bombement volaire dans le SCC', repere: 'Toit du canal, directement au-dessus du nerf médian' },
      { structure: 'Nerf médian', aspect: 'Ovale en nid d\'abeilles ; aplati et hypoéchogène dans le canal, renflé juste en amont (encoche)', repere: 'Le plus superficiel et le plus radial du contenu du canal' },
      { structure: 'Tendons fléchisseurs (4 FDS + 4 FDP + LFP)', aspect: 'Ovales fibrillaires très échogènes, **anisotropes** (s\'éteignent au basculement de la sonde), mobiles à la flexion des doigts', repere: 'Sous le nerf médian ; le test dynamique les distingue en 3 secondes' },
      { structure: 'Tubercule du scaphoïde / crête du trapèze', aspect: 'Convexité hyperéchogène avec cône d\'ombre', repere: 'Pilier radial du canal' },
      { structure: 'Pisiforme puis crochet de l\'hamatum', aspect: 'Pisiforme : ovale osseux superficiel à l\'entrée. Hamulus : crochet hyperéchogène 1–1,5 cm plus distal', repere: 'Pilier ulnaire ; le passage de l\'un à l\'autre marque le changement de plan' },
      { structure: 'Artère et nerf ulnaires (loge de Guyon)', aspect: 'Artère pulsatile en Doppler, nerf en petit nid d\'abeilles à sa droite (position ulnaire)', repere: '**Superficiels au rétinaculum** — l\'aiguille doit passer en dessous d\'eux' },
      { structure: 'Tendon du long palmaire', aspect: 'Petit ovale fibrillaire superficiel, médian ; absent chez 10–15 % des sujets', repere: 'Repère de surface : le nerf médian est juste en profondeur et en radial' },
      { structure: 'Artère médiane persistante (variante)', aspect: 'Petit vaisseau pulsatile accolé ou inclus dans le nerf, souvent avec nerf bifide', repere: 'À chercher au Doppler avant toute ponction' },
    ],

    technique: [
      { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** l\'asepsie : CSA mesurée et notée, Doppler passé, variante recherchée, plan de ponction choisi au niveau du crochet de l\'hamatum. Désinfection large, gel stérile. Seringue de 3–5 mL, aiguille 25–27 G montée sur un prolongateur.' },
      { titre: 'Anesthésie cutanée', texte: '0,3–0,5 mL de lidocaïne 1 % au point d\'entrée ulnaire, strictement en sous-cutané. Souvent superflu avec une 27 G ; ne jamais infiltrer dans l\'axe du canal (l\'image se dégrade pour le reste du geste).' },
      { titre: 'Ponction dans le plan, du côté ulnaire vers le radial', texte: 'Entrée à 1–1,5 cm du bord ulnaire de la sonde, aiguille **à plat (10–20°)**, biseau vers le haut, suivie sur toute sa longueur. Trajet imposé : **en profondeur du paquet ulnaire de la loge de Guyon**, **en superficie du crochet de l\'hamatum**, puis franchissement du rétinaculum (ressaut perceptible). Amener la pointe **entre le nerf médian et les tendons fléchisseurs**, sans jamais traverser le nerf.' },
      { titre: 'Hydrolocalisation', texte: 'Injecter **0,3–0,5 mL** : le liquide doit **soulever le nerf médian** de son lit tendineux en une lame anéchogène. Trois signaux d\'arrêt immédiat : douleur fulgurante ou paresthésie électrique du territoire médian, résistance à l\'injection, gonflement du nerf à l\'écran → retirer de 1–2 mm et retester.' },
      { titre: 'Injection fractionnée et halo circonférentiel', texte: 'Corticoïde : **1–2 mL** suffisent, déposés sous le nerf ; inutile de chercher le halo complet. Hydrodissection : après le plan profond, **glisser la pointe le long de la berge ulnaire du nerf** jusqu\'à sa face superficielle et injecter le même volume entre le nerf et le rétinaculum — total **5 mL** de D5W, fractionnés par 1 mL. Balayer en proximal et en distal pour propager le décollement sur toute la longueur du canal.' },
      { titre: 'Critère de fin', texte: '**Corticoïde** : lame anéchogène sous le nerf, nerf soulevé, aucune injection intratendineuse ni intraneurale. **Hydrodissection** : halo anéchogène **circonférentiel** sur 2–3 cm de long, nerf mobile, surface de section inchangée ou diminuée. Dans les deux cas : aucune douleur pendant l\'injection.' },
      { titre: 'Après le geste', texte: 'Compression douce 1 min, pansement. Tester l\'opposition du pouce et la sensibilité pulpaire : un **bloc médian transitoire** (2–4 h) est attendu si de la lidocaïne a été utilisée — prévenir qu\'il ne faut ni conduire ni manipuler d\'objets chauds ou coupants. Consignes écrites : **reprise de l\'orthèse nocturne le soir même** (elle fait partie du traitement, pas de l\'échec), pas de port de charge lourde 48 h, reprise des exercices de glissement nerveux à J2.' },
    ],

    injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Infiltration corticoïde (référence)** | Méthylprednisolone 40 mg (Dépo-Médrol®) **ou** triamcinolone 40 mg (Kenacort retard®) **ou** bétaméthasone 5,7 mg (Diprostène® 1 mL), + lidocaïne 1 % 1 mL | **2–3 mL** au total | Site non artériel terminal : corticoïde particulaire acceptable. L\'ECR d\'Atroshi a comparé **80 mg et 40 mg** de méthylprednisolone au placebo : bénéfice net des deux doses, **sans supériorité franche de 80 mg** — rester à 40 mg |
| Hydrodissection **D5W** | Dextrose 5 % pur (poche de G5 %), ± 0,5–1 mL de lidocaïne 1 % pour l\'anesthésie cutanée seulement | **5 mL** (protocoles publiés 5 mL, parfois 10 mL) | Solution non ionique, sans effet bloquant : le décollement est mécanique. C\'est le schéma des essais de Wu (D5W vs triamcinolone, D5W vs sérum) |
| Hydrodissection **sérum physiologique** | NaCl 0,9 % | 5–10 mL | Comparateur des essais ; l\'effet mécanique existe, le supplément propre au dextrose est le point discuté |
| **PRP** | Plasma riche en plaquettes autologue (préparation en circuit fermé) | 1–3 mL | Hors nomenclature, non remboursé, préparation à cadrer réglementairement. Preuves de faible niveau — à ne pas proposer en routine |
| Ténosynovite associée (PR, dialyse) | Corticoïde + AL, dépôt **péri-tendineux** et non péri-neural | 2–3 mL | Traiter la cause du conflit plutôt que le nerf |

**Doses maximales d\'AL à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Les volumes de cette fiche n\'en approchent pas — c\'est le **cumul** d\'une séance bilatérale ou multi-sites qui doit être additionné.

**Corticoïde et répétition** : ne pas dépasser 2 à 3 infiltrations sur un même poignet, espacées d\'au moins 3 mois. Un patient qui redemande une troisième infiltration dans l\'année est un patient à adresser au chirurgien, pas à réinfiltrer.

**Diabète** : prévenir du pic glycémique de 48–72 h, glycémie capillaire renforcée. C\'est l\'argument le plus fort pour préférer le D5W chez le diabétique — le volume de dextrose injecté est négligeable sur le plan glycémique.`,

    variantes: [
      { titre: 'Approche ulnaire dans le plan (voie de référence)', texte: `Décrite ci-dessus. Avantages : trajet entièrement visible, éloignement maximal du nerf médian au moment de la traversée cutanée, contrôle du franchissement du rétinaculum. Contrainte : il faut avoir identifié et évité le paquet ulnaire de la loge de Guyon, et choisir le plan du crochet de l\'hamatum plutôt que celui du pisiforme.` },
      { titre: 'Approche radiale dans le plan', texte: 'Entrée par le bord radial, entre le tendon du fléchisseur radial du carpe et l\'artère radiale, pointe amenée entre le rétinaculum et le nerf. Utile quand une **artère médiane persistante** occupe le versant ulnaire du nerf, ou quand le paquet ulnaire est mal individualisable. Risque propre : la **branche cutanée palmaire du nerf médian**, superficielle et radiale — rester profond dès la traversée cutanée.' },
      { titre: 'Approche longitudinale proximo-distale', texte: 'Sonde **longitudinale** sur l\'axe du nerf en amont du canal, aiguille dans le plan, de proximal en distal, pointe glissée entre le nerf et les tendons puis poussée sous le rétinaculum. Le liquide progresse dans le canal sur toute sa longueur. Voie élégante pour l\'hydrodissection ; elle demande une bonne stabilité de main car l\'axe du nerf n\'est pas rectiligne.' },
      { titre: 'Hydrodissection au dextrose 5 % — protocole', texte: `Cible : restaurer le glissement du nerf, pas traiter une inflammation. 5 mL de D5W, décollement **en deux temps** (plan profond nerf/tendons, puis plan superficiel nerf/rétinaculum) jusqu\'au halo à 360°, propagé en proximal et en distal par balayage de la sonde. Protocoles publiés : **une à trois séances**, espacées de 2 à 6 semaines selon les équipes (*le nombre optimal n\'est pas établi*).

Intérêt majeur en pratique HDJ : pas de corticoïde, donc geste répétable, utilisable chez le diabétique, la femme enceinte et le patient déjà infiltré ailleurs.` },
      { titre: 'PRP — ce qu\'on peut en dire honnêtement', texte: 'Les méta-analyses disponibles concluent à un bénéfice sur la douleur et la fonction par rapport au placebo ou au sérum, avec des **effectifs faibles, des protocoles hétérogènes et un risque de biais élevé** ; la supériorité sur le corticoïde n\'est pas établie. S\'y ajoutent le coût, l\'absence de prise en charge et un cadre réglementaire à sécuriser. À ne pas proposer en première intention ; réserver, le cas échéant, aux échecs documentés chez un patient informé du niveau de preuve.' },
      { titre: 'Ce qu\'il faut savoir refuser', texte: 'Amyotrophie thénarienne, déficit d\'opposition, EMG sévère, SCC aigu par artère médiane thrombosée ou par hématome : **aucune injection**. L\'apport de l\'algologue est alors de faire le diagnostic échographique précis et d\'adresser vite. Une infiltration de plus dans ces situations est une perte de chance.' },
    ],

    pearls: [
      'Poser la sonde sans appuyer et mesurer à l\'entrée du canal : c\'est la seule mesure comparable d\'un examen à l\'autre.',
      'Le **ratio poignet/avant-bras** sauve le diagnostic chez le sujet très mince, le sujet obèse et le polyneuropathe, là où la valeur absolue de la CSA se trompe.',
      'Flexion-extension des doigts : trois secondes pour séparer nerf et tendons, aucun autre test n\'est aussi rapide.',
      'Mesurer à l\'entrée, piquer 1–1,5 cm plus bas : le corridor entre paquet ulnaire et crochet de l\'hamatum n\'existe qu\'au plan distal.',
      'Un nerf **bifide** impose de sommer les deux surfaces de section — sinon on conclut à tort à la normalité.',
      'L\'orthèse nocturne se poursuit après le geste : les ECR positifs associent tous injection et orthèse, jamais l\'injection seule.',
      'Chez le diabétique et la femme enceinte, le D5W règle en même temps la question de l\'efficacité et celle de la sécurité.',
    ],
    pieges: [
      'Ne pas passer le Doppler : l\'artère médiane persistante est fréquente et se ponctionne très bien à l\'aveugle.',
      'Piquer au plan du pisiforme : le paquet ulnaire et l\'os ne laissent pas de corridor, l\'aiguille finit trop superficielle ou dans le rétinaculum.',
      'Injecter dans un tendon (résistance nette, aspect fibrillaire qui se dilate) : arrêter, se repositionner ; le risque de rupture secondaire est faible mais réel avec un corticoïde.',
      'Prendre un nerf aplati pour un nerf normal : dans les formes évoluées la CSA peut se « normaliser » — se fier au signe de l\'encoche en coupe longitudinale et à la clinique.',
      'Faire le geste poing fermé : les lombricaux montent dans le canal, l\'anatomie change sous l\'aiguille.',
      'Enchaîner les infiltrations chez un patient qui rechute à 6 semaines : c\'est un critère d\'adressage chirurgical, pas de répétition.',
      'Approche radiale trop superficielle : lésion de la branche cutanée palmaire, dysesthésie palmaire durable et mal comprise par le patient.',
    ],
    complications: [
      '**Injection intraneurale** : douleur fulgurante, résistance, nerf qui gonfle → arrêt immédiat, retrait de 1–2 mm. Complication redoutée mais quasi éliminée par l\'échoguidage et l\'injection fractionnée ; surveillance et traçabilité si le doute persiste.',
      '**Injection intratendineuse** : à éviter formellement avec un corticoïde (risque de fragilisation) ; se reconnaît à la résistance et à l\'aspect du tendon qui se dilate.',
      'Ponction de l\'artère ulnaire ou d\'une artère médiane persistante : hématome compressible ; comprimer 3 min. Prévenue par le Doppler.',
      'Lésion de la branche cutanée palmaire (approche radiale superficielle) : dysesthésie ou névrome de la paume.',
      '**Atrophie sous-cutanée et dépigmentation** au point de ponction : classiques avec les corticoïdes particulaires en site superficiel, souvent définitives ou lentement réversibles. À annoncer, surtout sur phototype foncé.',
      'Aggravation transitoire des paresthésies 24–72 h (distension du canal) : fréquente après hydrodissection, bénigne, à annoncer d\'emblée.',
      'Bloc médian transitoire (2–4 h) si AL : attendu, jamais à confondre avec une complication.',
      'Pic glycémique 48–72 h chez le diabétique ; flush, insomnie, bouffées vasomotrices après corticoïde.',
      'Infection : exceptionnelle sous asepsie standard.',
    ],
    securite: [
      'Site superficiel et compressible : **faible risque hémorragique** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ; anticoagulants au cas par cas, sans interruption systématique.',
      '**Doppler couleur obligatoire avant la ponction** : artère médiane persistante, artère ulnaire de la loge de Guyon.',
      'Trajet imposé : profond au paquet ulnaire, superficiel au crochet de l\'hamatum. Ne jamais « piquer vers le nerf » — on pique vers le plan de glissement, à côté du nerf.',
      'Aspiration avant chaque bolus, injection fractionnée par 0,5–1 mL, arrêt sur douleur fulgurante ou résistance.',
      'Ne jamais traverser le nerf médian pour atteindre sa face opposée : contourner par la berge.',
      'Corticoïde : maximum 2–3 injections par poignet, espacées de 3 mois ; au-delà, adresser.',
      'Bilatéralité : ne pas infiltrer les deux poignets le même jour (le patient doit garder une main utilisable, et la dose de corticoïde double).',
    ],

    suivi: `- **J0** : EN avant / 20 min après, test de sensibilité pulpaire, opposition du pouce. Noter la **CSA mesurée**, le ratio poignet/avant-bras, le produit et la dose — ce sont les références des contrôles ultérieurs.
- **J15–J30** : EN, réveils nocturnes (le critère le plus sensible au changement dans le SCC), **questionnaire de Boston** (BCTQ : échelle de symptômes et échelle fonctionnelle — la référence validée en français), observance de l\'orthèse. Réponse franche à 1 mois = bon pronostic, y compris chirurgical.
- **3 mois** : réévaluation clinique ; en cas de rechute, décider entre une deuxième infiltration (si le premier effet a duré ≥ 3 mois), une série d\'hydrodissections, ou l\'adressage chirurgical.
- **6 mois** : c\'est l\'horizon au-delà duquel la chirurgie prend l\'avantage dans les essais. Un patient encore symptomatique à 6 mois malgré deux gestes doit voir un chirurgien.
- **Escalade immédiate, sans attendre** : apparition d\'une amyotrophie thénarienne, d\'un déficit d\'opposition, ou d\'un déficit sensitif permanent → chirurgie.
- Écho de contrôle à 3 mois utile en recherche et dans les formes atypiques (la CSA diminue chez les répondeurs), non indispensable en routine.`,

    evidence: `- **Corticoïde local** : la revue **Cochrane (Marshall et al.)** conclut à un bénéfice **significatif à court terme** (environ 1 mois) de l\'injection locale de corticoïde contre placebo, sans démonstration d\'un bénéfice au-delà. L\'ECR contre placebo d\'**Atroshi et al. (Annals of Internal Medicine, 2013)** confirme le bénéfice clinique à 10 semaines et montre une **réduction du recours à la chirurgie à 1 an**, sans supériorité nette de 80 mg sur 40 mg de méthylprednisolone. Niveau de preuve **fort pour le court terme, nul pour le long terme** — c\'est exactement ce qu\'il faut dire au patient.
- **Échoguidage contre technique aveugle** : plusieurs ECR de petite taille montrent une **meilleure précision et de meilleurs résultats cliniques** avec le guidage échographique, avec moins d\'effets indésirables locaux. Preuve **modérée** (effectifs limités, aveuglement imparfait), mais cohérente et de plausibilité forte compte tenu de l\'anatomie.
- **Hydrodissection au dextrose 5 %** : les essais randomisés en double aveugle de l\'équipe de **Y-T. Wu** — D5W péri-neural contre sérum (Mayo Clinic Proceedings, 2017) puis **D5W contre triamcinolone** (Annals of Neurology, 2018) — montrent un effet sur la douleur, les symptômes et la surface de section, avec une **durée d\'action supérieure au corticoïde au-delà du troisième mois**. Des méta-analyses plus récentes vont dans le même sens. Preuve **modérée** : effectifs de quelques dizaines à quelques centaines, équipes peu nombreuses, hétérogénéité des protocoles.
- **PRP** : méta-analyses favorables contre placebo sur la douleur et la fonction, mais **faible niveau de preuve** (petits effectifs, protocoles de préparation hétérogènes, risque de biais). Pas de supériorité établie sur le corticoïde.
- **Diagnostic échographique** : la recommandation fondée sur les preuves de l\'**AANEM (Cartwright et al., Muscle & Nerve, 2012)** retient l\'échographie neuromusculaire comme **utile en complément** de l\'électrodiagnostic. Les travaux de **Klauser et al. (Radiology, 2009)** ont établi l\'intérêt du **delta de surface de section poignet/avant-bras**, plus performant que la mesure isolée.
- **Injection contre chirurgie** : les essais comparatifs et les recommandations (dont la recommandation de pratique clinique de l\'**AAOS**) donnent l\'avantage à la **chirurgie au-delà de 6–12 mois**, l\'injection gardant sa place en traitement d\'attente, dans les formes légères et pendant la grossesse.
- **Trous de la littérature, à assumer** : le **nombre optimal d\'hydrodissections** n\'est pas établi ; la comparaison directe **hydrodissection contre chirurgie** n\'existe pas ; les seuils de surface de section varient d\'une série à l\'autre (9 à 13 mm²) et dépendent de l\'appareil et de l\'opérateur — le ratio est plus reproductible que la valeur absolue.`,

    references: [
      { auteurs: 'Marshall S, Tardif G, Ashworth N', titre: 'Local corticosteroid injection for carpal tunnel syndrome', revue: 'Cochrane Database of Systematic Reviews', annee: '2007', type: 'revue systématique', verif: false, note: 'Bénéfice à court terme contre placebo ; année de la dernière version à confirmer.' },
      { auteurs: 'Atroshi I, Flondell M, Hofer M, Ranstam J', titre: 'Methylprednisolone injections for the carpal tunnel syndrome: a randomized, placebo-controlled trial', revue: 'Annals of Internal Medicine', annee: '2013', type: 'ECR', verif: false, note: '80 mg vs 40 mg vs placebo ; réduction du recours à la chirurgie à 1 an.' },
      { auteurs: 'Wu YT, Ho TY, Chou YC, et al.', titre: 'Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial', revue: 'Mayo Clinic Proceedings', annee: '2017', type: 'ECR', verif: false, note: 'Essai princeps de l\'hydrodissection au D5W.' },
      { auteurs: 'Wu YT, Ke MJ, Ho TY, Li TY, Shen YP, Chen LC', titre: 'Randomized double-blinded clinical trial of 5 % dextrose versus triamcinolone injection for carpal tunnel syndrome patients', revue: 'Annals of Neurology', annee: '2018', type: 'ECR', verif: false, note: 'D5W vs corticoïde : effet plus durable au-delà du 3e mois.' },
      { auteurs: 'Cartwright MS, Hobson-Webb LD, Boon AJ, et al.', titre: 'Evidence-based guideline: neuromuscular ultrasound for the diagnosis of carpal tunnel syndrome', revue: 'Muscle & Nerve', annee: '2012', type: 'reco', verif: false, note: 'Recommandation de l\'AANEM ; échographie en complément de l\'électrodiagnostic.' },
      { auteurs: 'Klauser AS, Halpern EJ, De Zordo T, et al.', titre: 'Carpal tunnel syndrome assessment with US: value of additional cross-sectional area measurements of the median nerve in patients versus healthy volunteers', revue: 'Radiology', annee: '2009', type: 'diagnostic', verif: false, note: 'Origine du delta / ratio poignet-avant-bras.' },
      { auteurs: 'Padua L, Coraci D, Erra C, et al.', titre: 'Carpal tunnel syndrome: clinical features, diagnosis, and management', revue: 'The Lancet Neurology', annee: '2016', type: 'revue', verif: false, note: 'Revue générale de référence.' },
      { auteurs: 'American Academy of Orthopaedic Surgeons', titre: 'Management of carpal tunnel syndrome — evidence-based clinical practice guideline', revue: 'AAOS', annee: '2016', type: 'reco', verif: false, note: 'Année de la version à confirmer.' },
      { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage)', annee: '2007', type: 'ouvrage', verif: false, note: 'Sono-anatomie du poignet, variantes (nerf bifide, artère médiane persistante).' },
      { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Métadonnées reprises de la fiche nerf-suprascapulaire, vérifiées lors d\'une session antérieure.' },
    ],
    videos: [],

    scenes: [
      {
        id: 'cc-entree', section: 'sonoanatomie', titre: 'Entrée du canal carpien (niveau du pisiforme) — plan de mesure de la surface de section',
        legende: 'C\'est ici que la surface de section du nerf médian se mesure, jamais ailleurs. Le nerf est la structure la plus superficielle et la plus radiale du canal, plaquée sous le rétinaculum, au-dessus des neuf tendons fléchisseurs. L\'artère et le nerf ulnaires sont dans la loge de Guyon, superficiels au rétinaculum : toute aiguille venant du côté ulnaire doit passer en dessous d\'eux.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Radial', right: 'Ulnaire' }).probeInfo({ plan: 'Transverse, pli du poignet', type: 'linéaire 12–18 MHz' });
          baseCarpe(S, 'pisiforme', true);
          S.label({ x: 340, y: 84, text: 'T. long palmaire', cls: 'lbl-tendon', small: true, lead: [312, 98] });
          S.label({ x: 628, y: 182, text: 'Rétinaculum des fléchisseurs', cls: 'lbl-lig', anchor: 'end', small: true, lead: [452, 188] });
          S.label({ x: 420, y: 118, text: 'A. ulnaire', cls: 'lbl-artery', anchor: 'end', small: true, lead: [446, 146] });
          S.label({ x: 634, y: 118, text: 'N. ulnaire (loge de Guyon)', cls: 'lbl-nerve', anchor: 'end', small: true, lead: [508, 145] });
          S.nerve({ x: 215, y: 224, rx: 30, ry: 15, label: 'N. médian\nCSA ≥ 10 mm² · ratio > 1,4', lx: 132, ly: 142, lead: [190, 212] });
          S.label({ x: 250, y: 410, text: 'Tendons fléchisseurs : 4 FDS + 4 FDP + LFP', cls: 'lbl-tendon', small: true });
          S.label({ x: 622, y: 366, text: 'Os du carpe (plancher)', cls: 'lbl-bone', anchor: 'end', small: true });
        },
      },
      {
        id: 'cc-abord-ulnaire', section: 'technique', titre: 'Abord ulnaire dans le plan — coupe distale, au crochet de l\'hamatum',
        legende: 'La ponction ne se fait pas au plan de la mesure : 1 à 1,5 cm plus bas, le pisiforme est remplacé par le crochet de l\'hamatum et un corridor s\'ouvre entre le paquet ulnaire (au-dessus) et le crochet (en dessous). L\'aiguille franchit le rétinaculum et vient placer sa pointe entre le nerf médian et les tendons fléchisseurs, sans jamais traverser le nerf.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Radial', right: 'Ulnaire' }).probeInfo({ plan: 'Transverse, crochet de l\'hamatum', type: 'in-plane' });
          baseCarpe(S, 'hamulus', false);
          S.label({ x: 596, y: 300, text: 'Crochet de l\'hamatum', cls: 'lbl-bone', anchor: 'end', small: true, lead: [528, 268] });
          S.label({ x: 470, y: 112, text: 'Paquet ulnaire (Guyon) :\npasser en dessous', cls: 'lbl-artery', anchor: 'end', small: true, lead: [468, 142] });
          S.nerve({ x: 215, y: 226, rx: 30, ry: 15, label: 'N. médian', lx: 132, ly: 162, lead: [192, 214], small: true });
          S.target({ x: 268, y: 240, r: 16 });
          S.needle({ from: [636, 168], to: [262, 236], label: '25–27 G, à plat' });
          S.spread({ x: 236, y: 254, rx: 62, ry: 14, label: '1–2 mL sous le nerf' });
        },
      },
      {
        id: 'cc-hydrodissection', section: 'technique', titre: 'Hydrodissection — halo circonférentiel autour du nerf médian',
        legende: 'Deuxième temps : après le plan profond (nerf / tendons), la pointe contourne le nerf par sa berge ulnaire pour ouvrir le plan superficiel (nerf / rétinaculum). Critère de fin : halo anéchogène complet à 360° sur 2–3 cm de long, nerf soulevé et remobilisé, surface de section inchangée ou diminuée — jamais augmentée.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Radial', right: 'Ulnaire' }).probeInfo({ plan: 'Transverse, crochet de l\'hamatum', type: 'in-plane' });
          baseCarpe(S, 'hamulus', false);
          S.nerve({ x: 215, y: 226, rx: 30, ry: 15 });
          S.label({ x: 108, y: 160, text: 'N. médian', cls: 'lbl-nerve', small: true, lead: [176, 208] });
          S.needle({ from: [636, 200], to: [268, 214], label: '2e temps : berge ulnaire' });
          S.spreadPath({ path: 'M153 226 A 62 42 0 1 0 277 226 A 62 42 0 1 0 153 226 Z M181 226 A 34 20 0 1 1 249 226 A 34 20 0 1 1 181 226 Z', at: [300, 150], label: '5 mL D5W — halo 360°' });
        },
      },
    ],

    checklist: [
      'Surface de section mesurée à l\'entrée du canal + mesure de référence à l\'avant-bras (ratio) — notées dans le compte rendu',
      'Doppler passé : artère médiane persistante, nerf médian bifide, artère ulnaire de la loge de Guyon',
      'Absence d\'amyotrophie thénarienne et d\'déficit d\'opposition vérifiée (sinon : avis chirurgical, pas d\'infiltration)',
      'Plan de ponction choisi au crochet de l\'hamatum, corridor paquet ulnaire / hamulus identifié',
      'Doigts détendus en semi-flexion (pas de poing fermé) pendant tout le geste',
      'Nombre d\'infiltrations déjà reçues sur ce poignet vérifié (maximum 2–3, espacées de 3 mois)',
      'Un seul poignet infiltré par séance',
      'Patient prévenu : bloc médian transitoire 2–4 h, aggravation possible des paresthésies 24–72 h, pic glycémique si corticoïde',
      'Orthèse nocturne en position neutre poursuivie après le geste — remise par écrit',
    ],
  });

})();
