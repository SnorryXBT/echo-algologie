/* Fiche : nerf sural — bloc, hydrodissection, PRF, cryoneurolyse.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références citées de
   mémoire, marquées verif:false, sans DOI/PMID/URL reconstitués. */
ECHO.register({
  id: 'nerf-sural',
  titre: 'Nerf sural — bloc échoguidé, hydrodissection et neuromodulation percutanée',
  titreCourt: 'Nerf sural',
  en: 'Ultrasound-guided sural nerve block: mid-calf and retromalleolar approaches; hydrodissection, pulsed radiofrequency and cryoneurolysis for sural neuralgia and neuroma',
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée pour le gain de succès apporté par l\'échoguidage sur le bloc lui-même (ECR de petite taille en anesthésie) ; **faible** pour l\'indication algologique (névralgie, névrome) — séries, cas cliniques et avis d\'experts',
  motsCles: ['nerf sural', 'névralgie du sural', 'névrome', 'petite veine saphène', 'bord latéral du pied', 'prélèvement de greffe nerveuse', 'chirurgie du tendon d\'Achille', 'hydrodissection', 'PRF', 'cryoneurolyse', 'bloc de cheville'],
  maj: '2026-09',
  resume: 'Nerf purement sensitif, superficiel et de petit calibre, le nerf sural est une cible facile mais souvent manquée : il mesure 1 à 2 mm et se confond avec la graisse sous-cutanée. Sa règle d\'or est qu\'il **voyage avec la petite veine saphène** — c\'est la veine qu\'on cherche, pas le nerf, et un garrot ou la simple déclive la transforme en balise. Les indications algologiques sont dominées par la **névralgie iatrogène** : réparation percutanée du tendon d\'Achille, chirurgie de cheville ou de fibula par voie latérale, et surtout **prélèvement du nerf sural comme greffon**, où la douleur du site donneur est une plainte classique. Le bloc a d\'abord une valeur diagnostique : il confirme la topographie avant toute escalade. L\'hydrodissection, la radiofréquence pulsée et la cryoneurolyse viennent ensuite, sur une littérature mince qu\'il faut annoncer comme telle.',

  flash: {
    position: 'ventral', positionNote: 'procubitus, pied dépassant du bord de la table (voie mi-mollet) ; ou décubitus latéral côté à traiter vers le haut, ou décubitus dorsal jambe fléchie et pied en rotation interne (voie rétro-malléolaire)',
    sonde: 'lineaire', sondeNote: '12–18 MHz, profondeur 2–3 cm, focale à 0,5–1,5 cm ; sonde compacte utile en rétro-malléolaire',
    approche: 'in-plane', approcheNote: 'aiguille dans le plan, de latéral en médial ou l\'inverse selon la fenêtre ; **jamais à travers la petite veine saphène**',
    aiguille: '25–27 G, 25–40 mm',
    cible: 'Espace sous-cutané immédiatement au contact du nerf, accolé à la petite veine saphène : nappe anéchogène qui **entoure** le nerf sans le déplacer brutalement',
    injectat: '2–5 mL — AL seul (bloc diagnostique) ou AL + corticoïde non particulaire ; 5–10 mL de sérum ou dextrose 5 % pour l\'hydrodissection',
    duree: '5–10 min (bloc) · 20–25 min (PRF ou cryoneurolyse)',
  },

  indications: [
    '**Névralgie du nerf sural post-chirurgicale** : réparation percutanée ou à ciel ouvert du tendon d\'Achille (le nerf est classiquement lésé par les points percutanés), chirurgie de cheville ou de fibula par voie latérale, arthroscopie postérieure, ostéosynthèse du 5ᵉ métatarsien.',
    '**Douleur du site donneur après prélèvement du nerf sural** comme greffon nerveux : anesthésie douloureuse du bord latéral du pied, névrome d\'amputation sur le moignon proximal — indication fréquente et souvent négligée.',
    '**Névrome post-traumatique ou cicatriciel** sur le trajet du nerf (entorse grave, plaie, cicatrice adhérente) : douleur exquise à la percussion, signe de Tinel positif au point précis.',
    '**Douleur neuropathique du bord latéral du pied et du 5ᵉ orteil** dans le territoire sensitif, après élimination d\'une origine radiculaire S1 et d\'une neuropathie tronculaire proximale.',
    '**Bloc diagnostique** avant toute escalade (PRF, cryoneurolyse, chirurgie) : c\'est l\'indication principale en algologie — un bloc franchement positif change la stratégie, un bloc négatif l\'arrête.',
    '**Piégeage** du nerf dans une cicatrice ou un tissu fibreux : indication d\'hydrodissection.',
    'Complément d\'un bloc de cheville (analgésie du bord latéral du pied) — usage anesthésique, hors périmètre principal de ce mémo.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction, allergie vraie documentée aux amino-amides.',
    '**Relatives** : troubles majeurs de l\'hémostase — le nerf est accolé à une veine, la ponction veineuse est le principal incident ; site superficiel et compressible, donc classe de **risque hémorragique faible** (ASRA-ESRA 2018) : pas d\'arrêt systématique des antiagrégants ni des anticoagulants.',
    '**Neurolyse chimique (alcool, phénol) : à éviter sur ce nerf.** Nerf purement sensitif et superficiel, mais le risque de **douleur de désafférentation** et de névrome secondaire est réel, et le territoire est une zone d\'appui du bord latéral du pied. Réserver les techniques lésionnelles aux échecs documentés, après information explicite.',
    '**Anesthésie douloureuse préexistante** (notamment après prélèvement de greffon) : une lésion supplémentaire du nerf risque d\'aggraver plutôt que de soulager — privilégier les techniques non lésionnelles (hydrodissection, PRF).',
    'Corticoïdes : diabète déséquilibré ; préférer un **non particulaire** en péri-nerveux.',
  ],
  alternatives: 'Traitement médical de la douleur neuropathique en première ligne (antiépileptiques, antidépresseurs, topiques — lidocaïne 5 % en emplâtre, capsaïcine 8 % en patch, particulièrement adaptés à un territoire cutané aussi bien délimité) et rééducation de désensibilisation. Le bloc échoguidé vient ensuite, d\'abord comme **outil diagnostique**. En cas de réponse franche mais transitoire : hydrodissection (si piégeage cicatriciel), radiofréquence pulsée, cryoneurolyse. La **chirurgie** (neurolyse, résection-enfouissement du névrome dans le muscle ou l\'os) reste une option de recours, avec des résultats inconstants et un risque de récidive du névrome. Chez le patient déjà porteur d\'une anesthésie douloureuse, ne pas courir après une nouvelle lésion nerveuse : la stratégie utile est plutôt médicale et fonctionnelle. La neuromodulation (stimulation périphérique) sort du périmètre de ce mémo.',

  anatomie: `Le **nerf sural** est un nerf **purement sensitif**, formé par la réunion de deux contingents :
- le **nerf cutané sural médial**, branche du **nerf tibial**, qui descend dans le sillon entre les deux chefs du gastrocnémien ;
- la **branche communicante fibulaire** (issue du nerf cutané sural latéral, branche du **nerf fibulaire commun**).

Leur jonction se fait le plus souvent **au tiers moyen ou au tiers inférieur de la jambe**, mais le **niveau est très variable** : jonction haute, jonction basse au voisinage de la cheville, ou absence de branche communicante — le nerf sural étant alors la simple continuation du nerf cutané sural médial. Cette variabilité, largement documentée dans les études anatomiques, a une conséquence pratique directe : **un bloc réalisé trop haut peut ne bloquer qu\'un des deux contingents** et donner un résultat faussement négatif.

Le nerf perfore le **fascia crural** au tiers moyen de la jambe pour devenir sous-cutané, puis descend **avec la petite veine saphène** en arrière et en dehors, contourne la **malléole latérale par sa face postérieure**, donne les **branches calcanéennes latérales**, et se poursuit sur le bord latéral du pied sous le nom de **nerf cutané dorsal latéral**, jusqu\'au bord latéral du 5ᵉ orteil.

**Territoire sensitif** : face postéro-latérale du tiers inférieur de la jambe, région rétro- et sous-malléolaire latérale, **bord latéral du pied** et **5ᵉ orteil**. Un territoire petit, superficiel et bien délimité — ce qui en fait une excellente cible de bloc diagnostique.

### Ce qui compte pour le geste
- **On cherche la veine, pas le nerf.** Le nerf mesure 1 à 2 mm et se confond avec la graisse ; la **petite veine saphène** est la balise constante. Un **garrot** peu serré à la cuisse ou au mollet, ou simplement la position déclive du membre, la dilate et la rend évidente.
- Le nerf est **superficiel** : 0,5 à 1,5 cm sous la peau. C\'est un geste de haute fréquence, de faible profondeur et de petite aiguille — la difficulté est de ne pas passer au travers.
- **Le niveau de ponction compte** : bloquer **au-dessous de la jonction** des deux contingents (tiers inférieur de jambe ou rétro-malléolaire) garantit de couvrir tout le territoire. Un bloc à mi-mollet peut être incomplet si la jonction est basse.
- Ne **jamais traverser la petite veine saphène** : hématome sous-cutané, image dégradée, et douleur inutile.
- Chez l\'opéré, le nerf est souvent **fixé dans une cicatrice** : l\'hydrodissection est alors autant diagnostique que thérapeutique, et le nerf peut être déplacé de sa position anatomique attendue.`,

  installation: {
    patient: `**Procubitus**, pied dépassant du bord de la table, pour la voie **mi-mollet / tiers inférieur de jambe** : c\'est la position la plus confortable pour l\'opérateur et la plus stable.

Pour la voie **rétro-malléolaire** : **décubitus latéral**, côté à traiter vers le haut, jambe légèrement fléchie — ou décubitus dorsal, genou fléchi et pied en rotation interne, ce qui présente la face postéro-latérale de la cheville.

**Manœuvre de dilatation veineuse** : garrot veineux peu serré à la cuisse ou au mollet, ou membre en déclive une minute avant le repérage. La petite veine saphène se dilate et devient la balise du nerf. Relâcher le garrot avant l\'injection (une veine trop turgescente gêne la ponction et saigne davantage).

Repérer et marquer le **point de Tinel** (percussion reproduisant la douleur ou la décharge) : chez le patient opéré, c\'est lui qui désigne le niveau du névrome, pas l\'anatomie théorique.`,
    operateur: `Opérateur **assis au bout de la table** (procubitus) ou face à la face latérale de la cheville (décubitus latéral), écran **au-delà du patient dans l\'axe du regard**.

Sonde tenue en appui franc sur la jambe mais **avec une pression minimale** : quelques grammes de trop écrasent la petite veine saphène et font disparaître le repère. C\'est le piège n° 1 de ce bloc.

Ponction **in-plane**, dans le grand axe de la sonde, de latéral en médial ou l\'inverse selon la fenêtre — l\'objectif est un trajet qui aborde le nerf **par le côté opposé à la veine**.`,
    sonde: `- Linéaire **12–18 MHz**, preset MSK superficiel ou « nerf », **profondeur 2–3 cm**, focale à 0,5–1,5 cm, gain plutôt élevé (structures très superficielles, faible contraste).
- **Coussin de gel épais** ou interposition généreuse : structures à moins de 1 cm, souvent dans la zone morte de la sonde. Ne pas hésiter à décoller la sonde de la peau par une couche de gel.
- **Doppler couleur ou puissance à basse PRF** : identifie la petite veine saphène et l\'artère satellite éventuelle. Attention, une veine collabée par la pression ne prend pas le Doppler — relâcher avant de conclure.
- **Test de compressibilité** : la veine s\'écrase, le nerf non. C\'est le critère le plus simple pour les distinguer quand les deux structures se ressemblent.
- Chez l\'opéré, régler le gain pour distinguer la cicatrice (hyperéchogène désorganisée) du nerf (fasciculaire).`,
  },

  reperage: [
    { titre: 'Trouver la petite veine saphène à mi-mollet', texte: 'Sonde **transversale** sur la face postérieure du mollet, à mi-hauteur. Repérer le **sillon entre les deux chefs du gastrocnémien** et, juste sous le fascia crural, la **petite veine saphène** : structure ronde, anéchogène, **compressible**, qui se dilate sous garrot ou en déclive. C\'est le point de départ obligatoire.' },
    { titre: 'Identifier le nerf accolé à la veine', texte: 'À côté de la veine (le plus souvent en dehors et légèrement en profondeur, mais la position varie), chercher un **petit faisceau ovalaire de 1–2 mm**, hyperéchogène et finement fasciculé, **non compressible**. Alterner compression et relâchement : ce qui s\'écrase est la veine, ce qui reste est le nerf.' },
    { titre: 'Suivre le nerf vers le bas (ascenseur)', texte: 'Descendre la sonde en gardant la veine centrée, par petits déplacements : le nerf suit fidèlement. On le voit devenir franchement sous-cutané, puis contourner la **face postérieure de la malléole latérale**. C\'est la manœuvre la plus fiable — suivre une structure connue, plutôt que la chercher là où elle devrait être.' },
    { titre: 'Chercher la jonction des deux contingents', texte: 'En remontant, on peut parfois voir la **branche communicante fibulaire** rejoindre le nerf cutané sural médial. Le niveau de jonction est très variable : si on veut être certain de couvrir tout le territoire, **bloquer en dessous**, au tiers inférieur de la jambe ou en rétro-malléolaire.' },
    { titre: 'Chez l\'opéré : chercher le névrome et la cicatrice', texte: 'Placer la sonde sur le **point de Tinel** marqué en clinique. Un **névrome** apparaît comme un renflement hypoéchogène fusiforme, en continuité avec le nerf en amont (névrome en continuité) ou terminant un moignon (névrome d\'amputation après prélèvement de greffon). La **pression de la sonde sur le névrome reproduit la douleur** : c\'est le signe le plus utile, et il vaut mieux qu\'une image.' },
    { titre: 'Si on ne trouve pas', texte: 'Relâcher complètement la pression et remettre du gel : la cause n° 1 d\'échec est une veine écrasée. Remettre le garrot ou passer le membre en déclive. Si le nerf reste invisible, **ne pas s\'acharner à le voir** : le bloc sous-fascial / sous-cutané péri-veineux au contact de la petite veine saphène, à faible volume, est fiable. Chez l\'opéré, le nerf peut être déplacé par la fibrose : partir du nerf en zone saine, en amont ou en aval de la cicatrice, et le suivre jusqu\'à la zone remaniée.' },
  ],

  sonoanatomie: [
    { structure: 'Petite veine saphène', aspect: 'Structure ronde anéchogène, **compressible**, se dilatant sous garrot ou en déclive ; Doppler positif si non comprimée', repere: 'La balise du geste — on la cherche en premier, le nerf est à côté' },
    { structure: 'Nerf sural', aspect: 'Petit faisceau ovalaire de 1–2 mm, hyperéchogène, finement fasciculé, **non compressible**', repere: 'Accolé à la veine, le plus souvent en dehors et un peu plus profond' },
    { structure: 'Fascia crural', aspect: 'Fine ligne hyperéchogène continue', repere: 'Le nerf le perfore au tiers moyen de la jambe pour devenir sous-cutané' },
    { structure: 'Sillon inter-gastrocnémien', aspect: 'Interstice hypoéchogène entre les deux chefs du gastrocnémien, avec le raphé hyperéchogène', repere: 'Repère de la voie mi-mollet : la veine et le nerf y cheminent' },
    { structure: 'Gastrocnémiens (chefs médial et latéral)', aspect: 'Muscles striés symétriques de part et d\'autre du raphé', repere: 'Encadrent le pédicule ; leur séparation guide la sonde' },
    { structure: 'Malléole latérale', aspect: 'Corticale hyperéchogène convexe avec cône d\'ombre', repere: 'Le nerf en contourne la face postérieure — repère de la voie distale' },
    { structure: 'Tendons fibulaires', aspect: 'Structures fibrillaires ovalaires, anisotropes, en arrière et en dessous de la malléole latérale', repere: 'Ne pas les confondre avec le nerf ; ils sont plus gros et plus antérieurs' },
    { structure: 'Névrome (chez l\'opéré)', aspect: 'Renflement hypoéchogène fusiforme, en continuité avec le nerf ou terminant un moignon', repere: 'La pression de la sonde y reproduit la douleur (Tinel échographique)' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Marquer le **point de Tinel** avant la désinfection. Garrot veineux peu serré ou déclive pour dilater la veine. Désinfection, gel stérile ou housse, gants stériles. Seringue de 5 mL, aiguille **25–27 G, 25–40 mm**. Pour la PRF ou la cryoneurolyse, matériel dédié et bloc test préalable positif.' },
    { titre: 'Anesthésie cutanée', texte: 'Le plus souvent inutile avec une 27 G sur un trajet aussi court. Si nécessaire, un très petit bouton de lidocaïne 1 % (0,2 mL) **à distance de la cible** : un bouton mal placé fait disparaître un nerf de 1 mm.' },
    { titre: 'Ponction in-plane, en abordant le nerf du côté opposé à la veine', texte: 'Sonde **transversale**, veine et nerf centrés. Entrer par le bord de la sonde **du côté opposé à la veine**, aiguille strictement **dans le plan**, très à plat (angle 10–20° : la cible est à moins de 1,5 cm). Progresser en surveillant la pointe en permanence, jusqu\'au contact du tissu péri-nerveux. **Ne jamais traverser la petite veine saphène.**' },
    { titre: 'Hydrolocalisation et test', texte: 'Aspiration. Injecter **0,2–0,3 mL** : l\'injectat doit apparaître **au contact du nerf** et commencer à le cerner. Deux signaux d\'alarme : une **douleur en éclair** dans le territoire (bord latéral du pied, 5ᵉ orteil) ou une **résistance franche** ⇒ pointe **intraneurale**, retrait immédiat de 1–2 mm avant toute nouvelle injection. Un nerf qui « gonfle » à l\'écran est un nerf injecté de l\'intérieur.' },
    { titre: 'Injection fractionnée et critère de fin', texte: 'Injecter **2 à 5 mL** fractionnés par 0,5–1 mL. **Critère de fin : le nerf est entouré d\'une couronne anéchogène** (signe du beignet) sur au moins la moitié de sa circonférence, sans distension du nerf lui-même. Au-delà de 5 mL, on ne gagne rien et on diffuse vers les structures voisines, ce qui ruine la valeur diagnostique du bloc.' },
    { titre: 'Voie rétro-malléolaire', texte: 'Même principe, sonde **transversale en arrière de la malléole latérale**, entre le tendon d\'Achille et la malléole. Le nerf y est très superficiel et toujours accolé à la veine. Volume plus faible (**2–3 mL**). C\'est la voie de choix quand on veut être certain de couvrir tout le territoire (en aval de la jonction des deux contingents) et la voie à privilégier avant une chirurgie du bord latéral du pied.' },
    { titre: 'Après le geste', texte: 'Compression douce (la veine est juste à côté), pansement. **Tester le territoire à 15–30 min** : hypoesthésie du bord latéral du pied et du 5ᵉ orteil = bloc techniquement réussi. **Coter l\'EN avant et à 30 min**, et remettre au patient une fiche d\'auto-évaluation sur 24 h : c\'est cette information qui décidera de l\'escalade, pas l\'impression du jour. Prévenir de l\'hypoesthésie transitoire (attention à la marche et aux appuis) et de la reprise de la douleur à la levée du bloc.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bloc diagnostique** (indication principale) | Lidocaïne 1–2 % **ou** ropivacaïne 0,2 % seule | **2–3 mL** | Petit volume **impératif** : au-delà, la diffusion aux structures voisines (branches calcanéennes, nerf fibulaire superficiel) fausse l\'interprétation. EN avant / 30 min / 24 h |
| Bloc thérapeutique | Ropivacaïne 0,2 % (ou lévobupivacaïne 0,25 %) + **corticoïde non particulaire** : dexaméthasone 4 mg | 3–5 mL | Le corticoïde non particulaire est préféré en péri-nerveux. Répétable, mais l\'effet prolongé est inconstant sur un nerf sensitif |
| Hydrodissection (piégeage cicatriciel) | **Dextrose 5 %** (préféré : moins de risque de conduction neurotoxique, effet propre discuté) ou sérum physiologique, ± lidocaïne 1 % | **5–10 mL** | Décollement circonférentiel du nerf de sa gangue fibreuse. Souvent répété 2–3 fois à 2–4 semaines d\'intervalle (chapitre *Hydrodissection*) |
| Radiofréquence pulsée (PRF) | AL 1–2 mL avant, puis paramètres usuels : **42 °C, 2 Hz, 20 ms, ~45 V, 120 s × 2–3 cycles** (à adapter à la console) | 1–2 mL après | Après bloc test positif. Électrode **parallèle** au nerf. Le volume injecté avant ne doit pas déplacer le nerf hors de portée de l\'électrode |
| Cryoneurolyse | AL préalable, puis cycles gel/dégel selon le matériel (typiquement 2 min gel / 30 s dégel × 2–3) | 2–3 mL d\'AL | Lésion axonale avec préservation du tissu conjonctif : régénération possible, risque de névrome moindre qu\'après section (chapitre *Cryoneurolyse*) |
| Neurolyse chimique (alcool, phénol) | — | — | **Non recommandée sur ce nerf** : risque de douleur de désafférentation et de névrome secondaire dans une zone d\'appui. À réserver à des situations d\'exception documentées |

**Doses maximales d\'AL** — très loin d\'être atteintes ici, mais à additionner si d\'autres blocs sont réalisés dans la même séance (bloc de cheville complet, gestes multiples) : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée).

**Corticoïde** : en péri-nerveux, préférer un **non particulaire** (dexaméthasone). Pas d\'artère terminale à ce niveau, mais le bénéfice du particulaire est nul et le risque d\'atrophie sous-cutanée est réel sur un site aussi superficiel — l\'atrophie et la dépigmentation y sont immédiatement visibles.`,

  variantes: [
    { titre: 'Voie mi-mollet (formation du nerf)', texte: `Sonde transversale au tiers moyen de la jambe, dans le sillon entre les deux chefs du gastrocnémien, veine centrée. Intérêt : le nerf y est constant et facile à suivre, et c\'est le niveau où l\'on peut parfois visualiser la **branche communicante fibulaire**. Limite : si la jonction des deux contingents est **basse**, un bloc à ce niveau ne couvre que le nerf cutané sural médial et laisse une partie du territoire non anesthésiée — d\'où un bloc faussement négatif. **En cas de doute diagnostique, bloquer plus bas.**` },
    { titre: 'Voie rétro-malléolaire (voie de certitude)', texte: `Sonde transversale entre le tendon d\'Achille et la malléole latérale. Le nerf est très superficiel, toujours accolé à la petite veine saphène, et **en aval de la jonction** des deux contingents : le bloc couvre alors tout le territoire. Volume 2–3 mL. C\'est la voie à privilégier pour un **bloc diagnostique** et avant une chirurgie du bord latéral du pied. Attention à la proximité du tendon d\'Achille (fiche dédiée) : ne pas le traverser.` },
    { titre: 'Hydrodissection du nerf piégé', texte: `Indication : nerf fixé dans une cicatrice (chirurgie d\'Achille, voie latérale de cheville, prélèvement de greffon), avec Tinel positif au niveau de la cicatrice et bloc test franchement positif. Technique : progression au contact du nerf, puis injection de **5–10 mL de dextrose 5 %** en cherchant un **décollement circonférentiel** — le nerf doit se détacher visiblement de sa gangue et « flotter » dans la nappe anéchogène. Passer d\'un côté puis de l\'autre du nerf pour obtenir un décollement complet. Souvent répété 2 à 3 fois à 2–4 semaines d\'intervalle. Preuve **faible** (séries, mécanismes plausibles), mais innocuité excellente et rationnel solide dans les piégeages cicatriciels.` },
    { titre: 'Radiofréquence pulsée et cryoneurolyse', texte: `**PRF** : option non lésionnelle, à privilégier chez un patient déjà porteur d\'un déficit sensitif ou d\'une anesthésie douloureuse, où toute lésion supplémentaire risque d\'aggraver. Aiguille RF placée **parallèlement** au nerf, stimulation sensitive à 50 Hz reproduisant les paresthésies dans le territoire à faible tension pour confirmer la position. Paramètres usuels 42 °C, 2 Hz, 20 ms, ~45 V, 120 s × 2–3 cycles.

**Cryoneurolyse** : lésion axonale préservant l\'endonèvre et le périnèvre, donc régénération attendue en quelques mois et risque de névrome inférieur à celui d\'une section. Séduisante sur un nerf **purement sensitif et superficiel** comme le sural. Données limitées à des **séries**. Dans les deux cas : **bloc test préalable positif obligatoire**, et information sur le caractère temporaire de l\'effet.` },
    { titre: 'Névrome d\'amputation après prélèvement de greffon', texte: `Situation particulière et fréquente, souvent mal prise en charge : le patient a une **anesthésie douloureuse** du bord latéral du pied plus un **névrome du moignon proximal**. Le bloc test porte alors sur le moignon, repéré au point de Tinel. **Ne pas proposer d\'emblée une technique lésionnelle** : sur un nerf déjà sectionné, une nouvelle lésion aggrave souvent la désafférentation. Séquence raisonnable : traitement médical de la douleur neuropathique et topiques (le territoire s\'y prête bien), bloc diagnostique, puis hydrodissection ou PRF ; la chirurgie (résection-enfouissement) en dernier recours et en concertation. Voir aussi le chapitre *Névrome cicatriciel*.` },
  ],

  pearls: [
    '**On cherche la veine, pas le nerf.** Garrot peu serré ou déclive : la petite veine saphène devient une balise évidente.',
    'La pression de la sonde est l\'ennemie n° 1 : quelques grammes de trop écrasent la veine et font disparaître le repère. Beaucoup de gel, appui minimal.',
    'Compression / relâchement : ce qui s\'écrase est la veine, ce qui résiste est le nerf. Le test le plus simple et le plus fiable.',
    'La manœuvre de l\'ascenseur (suivre la veine de haut en bas) trouve le nerf bien plus vite que de le chercher à un niveau donné.',
    'Bloquer **en dessous** de la jonction des deux contingents (tiers inférieur ou rétro-malléolaire) : c\'est la seule façon d\'éviter un bloc faussement négatif.',
    'Aborder le nerf **par le côté opposé à la veine** : trajet plus court, pas de ponction veineuse.',
    'Petit volume pour un bloc diagnostique (2–3 mL) : au-delà, on bloque les voisins et l\'information est perdue.',
    'Chez l\'opéré, la sonde posée sur le point de Tinel vaut mieux que l\'anatomie théorique : le nerf est là où ça fait mal.',
  ],
  pieges: [
    'Écraser la petite veine saphène avec la sonde puis conclure qu\'on ne trouve rien.',
    'Traverser la veine avec l\'aiguille : hématome, image dégradée, geste à recommencer.',
    'Confondre le nerf avec un tendon fibulaire (plus gros, plus antérieur, très anisotrope) ou avec une cloison graisseuse.',
    'Bloquer trop haut et conclure à tort à un bloc négatif alors que la jonction des contingents était basse.',
    'Injecter un gros volume « pour être sûr » : on perd toute la valeur diagnostique du bloc.',
    'Injecter en intraneural : douleur en éclair dans le territoire ou nerf qui gonfle à l\'écran ⇒ arrêt immédiat.',
    'Utiliser un corticoïde particulaire sur un site aussi superficiel : atrophie et dépigmentation immédiatement visibles.',
    'Proposer une neurolyse chimique ou une lésion supplémentaire chez un patient en anesthésie douloureuse post-prélèvement : c\'est le scénario de l\'aggravation.',
    'Oublier d\'éliminer une radiculopathie S1 avant d\'attribuer une douleur du bord latéral du pied au nerf sural.',
  ],
  complications: [
    '**Ponction de la petite veine saphène** et hématome sous-cutané : l\'incident le plus fréquent, bénin mais gênant (compression 3–5 min, geste reporté si l\'image est trop dégradée).',
    '**Injection intraneurale** : douleur fulgurante dans le territoire, nerf distendu à l\'écran ⇒ arrêt immédiat et repositionnement. Peut laisser des dysesthésies durables sur un nerf de ce calibre.',
    '**Aggravation de la douleur neuropathique** après geste lésionnel (PRF thermique mal réglée, cryoneurolyse, a fortiori neurolyse chimique), en particulier en cas de désafférentation préexistante.',
    '**Névrome secondaire** après lésion : risque théoriquement moindre après cryoneurolyse qu\'après section, mais non nul.',
    '**Hypoesthésie du bord latéral du pied** : attendue et transitoire après un bloc ; prévenir du risque de heurt et d\'appui mal perçu dans les heures suivantes.',
    '**Atrophie sous-cutanée et dépigmentation** au point de ponction si reflux de corticoïde particulaire — très visible sur un site aussi superficiel.',
    '**Infection** : rare (geste court et superficiel), asepsie standard.',
    '**Toxicité systémique des AL** : inexistante aux volumes de cette fiche ; ne devient une question qu\'en cas de blocs multiples dans la même séance.',
  ],
  securite: [
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018) : site superficiel et compressible — pas d\'arrêt systématique des antiagrégants ni des anticoagulants ; compression un peu prolongée si anticoagulation efficace.',
    'Repérage de la petite veine saphène **avant** la ponction, en mode B et en Doppler après relâchement de la pression ; trajet d\'aiguille choisi du côté opposé à la veine.',
    'Aspiration avant chaque fraction ; injection fractionnée par 0,5–1 mL ; arrêt immédiat en cas de douleur en éclair ou de résistance.',
    'Volume plafonné : **2–3 mL en diagnostique**, 5 mL au maximum en thérapeutique — la précision prime sur le volume.',
    'Corticoïde **non particulaire** en péri-nerveux ; jamais de triamcinolone hexacétonide.',
    'Techniques lésionnelles (PRF thermique, cryoneurolyse, neurolyse chimique) : **bloc test positif obligatoire**, information écrite sur le déficit sensitif et sur le risque d\'aggravation, traçabilité.',
    'Chez le patient en anesthésie douloureuse ou déjà opéré du nerf : privilégier les techniques **non lésionnelles** (hydrodissection, PRF) — la règle de prudence de cette fiche.',
    'Prévenir du déficit sensitif transitoire et des précautions de marche à la sortie.',
  ],

  suivi: `- **J0** : **EN avant et à 30 min** — c\'est le critère central, le bloc étant d\'abord diagnostique. Tester l\'hypoesthésie du **bord latéral du pied et du 5ᵉ orteil** (bloc techniquement réussi) et la distinguer du soulagement de la douleur (bloc cliniquement positif) : les deux informations sont différentes et doivent être notées séparément.
- **Auto-évaluation sur 24 h** remise au patient (EN horaire simplifiée) : la durée de l\'effet, souvent supérieure à celle de l\'AL, est l\'argument qui justifie une escalade.
- **J15–J30** : EN, retentissement fonctionnel (chaussage, marche, appui du bord latéral), consommation d\'antalgiques et de traitements de la douleur neuropathique. Décider : répéter, hydrodisséquer, escalader ou renoncer.
- **3 mois** après PRF ou cryoneurolyse : durée d\'effet attendue de quelques mois, répétable. Après hydrodissection : évaluer à 4–6 semaines, répéter 2 à 3 fois si l\'effet est partiel mais réel.
- **Quand répéter** : réponse ≥ 50 % reproductible. Hydrodissection : 2–3 séances espacées de 2–4 semaines.
- **Quand escalader** : bloc test franchement positif mais effet bref et répété ⇒ PRF ou cryoneurolyse. Piégeage cicatriciel documenté ⇒ hydrodissection en premier.
- **Quand s\'arrêter** : **bloc test négatif** ⇒ ne pas escalader, refaire le diagnostic (radiculopathie S1, neuropathie tronculaire proximale, douleur nociceptive de l\'arrière-pied, syndrome douloureux régional complexe). C\'est l\'apport principal du geste : savoir renoncer sur une donnée objective.`,

  evidence: `*Fiche rédigée sans accès à la recherche bibliographique (budget de session épuisé) : les références sont citées de mémoire et marquées « à vérifier ». Les jugements de force de preuve sont qualitatifs et à reconfirmer.*

- **Apport de l\'échoguidage sur le bloc lui-même** : l\'étude de **Redborg 2009 (Reg Anesth Pain Med)** montre que l\'échographie **améliore le taux de succès du bloc du nerf sural à la cheville** par rapport au repérage anatomique. Preuve **modérée** (essai de petite taille, réalisé en contexte anesthésique et sur volontaires/patients chirurgicaux), mais c\'est la donnée la plus directe dont on dispose, et elle est cohérente avec le calibre du nerf. Le travail rétrospectif de **Chin 2011** va dans le même sens pour les blocs de cheville en général.
- **Anatomie et variabilité** : les études cadavériques (**Riedl et Frey 2013** ; **Mahakkanukrauh 2002**) documentent une **variabilité majeure du niveau de jonction** entre nerf cutané sural médial et branche communicante fibulaire, et l\'existence de formes sans branche communicante. Preuve **solide** sur le plan anatomique, avec une conséquence pratique directe : **bloquer bas** quand on veut une information diagnostique fiable.
- **Indication algologique (névralgie, névrome)** : la littérature se limite à des **séries, des cas cliniques et des avis d\'experts**. Il n\'existe pas, à ma connaissance, d\'ECR de bloc du nerf sural dans la douleur chronique. Preuve **faible** — à annoncer au patient, et à compenser par une **discipline diagnostique** (bloc test, cotation avant/après, auto-évaluation à 24 h).
- **Hydrodissection** : la revue de **Lam 2020 (J Pain Res)** synthétise le rationnel, les techniques et les mécanismes théoriques de l\'hydrodissection nerveuse, en soulignant que les données cliniques restent **limitées et hétérogènes** (essentiellement au canal carpien). Pour le nerf sural spécifiquement : **aucune donnée robuste**, rationnel plausible dans les piégeages cicatriciels, innocuité excellente. Preuve **faible**.
- **Radiofréquence pulsée** : la revue de **Chua 2011** décrit les mécanismes et les indications potentielles de la PRF, sans données spécifiques au nerf sural. Preuve **faible** par extrapolation depuis d\'autres nerfs périphériques sensitifs.
- **Cryoneurolyse** : rationnel bien établi (lésion axonale avec préservation des gaines, donc régénération et risque de névrome moindre — cf. **Trescot 2003**), particulièrement adapté à un nerf **purement sensitif et superficiel**. Données cliniques limitées à des séries. Preuve **faible**.
- **Neurolyse chimique** : pas de données soutenant son usage sur le nerf sural, et un risque théorique de **désafférentation** dans une zone d\'appui. Position de cette fiche : **à éviter**, ce qui est un avis argumenté, pas une recommandation sourcée.
- **Trou principal de la littérature** : tout le versant algologique. Rien ne permet de hiérarchiser hydrodissection, PRF et cryoneurolyse sur ce nerf, ni de prédire qui répondra. La séquence proposée ici (médical et topiques → bloc diagnostique → hydrodissection ou PRF → cryoneurolyse → chirurgie) est un **ordre raisonné fondé sur le rapport bénéfice/risque et sur le principe de préserver un nerf déjà lésé**, pas un algorithme démontré.`,

  references: [
    { auteurs: 'Redborg KE, Sites BD, Chinn CD, et al.', titre: 'Ultrasound improves the success rate of a sural nerve block at the ankle', revue: 'Regional Anesthesia and Pain Medicine', annee: '2009', type: 'essai contrôlé', verif: false, note: 'Donnée la plus directe sur l\'apport de l\'échoguidage pour ce bloc.' },
    { auteurs: 'Chin KJ, Wong NW, Macfarlane AJ, Chan VW', titre: 'Ultrasound-guided versus anatomic landmark-guided ankle blocks: a 6-year retrospective review', revue: 'Regional Anesthesia and Pain Medicine', annee: '2011', type: 'rétrospectif', verif: false },
    { auteurs: 'Riedl O, Frey M', titre: 'Anatomy of the sural nerve: cadaver study and literature review', revue: 'Plastic and Reconstructive Surgery', annee: '2013', type: 'anatomie', verif: false, note: 'Variabilité du niveau de jonction des deux contingents.' },
    { auteurs: 'Mahakkanukrauh P, Chomsung R', titre: 'Anatomical variations of the sural nerve', revue: 'Clinical Anatomy', annee: '2002', type: 'anatomie', verif: false },
    { auteurs: 'Coert JH, Dellon AL', titre: 'Clinical implications of the surgical anatomy of the sural nerve', revue: 'Plastic and Reconstructive Surgery', annee: '1994', type: 'anatomie', verif: false },
    { auteurs: 'Lam KHS, Hung CY, Chiang YP, et al.', titre: 'Ultrasound-guided nerve hydrodissection for pain management: rationale, methods, current literature, and theoretical mechanisms', revue: 'Journal of Pain Research', annee: '2020', type: 'revue', verif: false },
    { auteurs: 'Chua NH, Vissers KC, Sluijter ME', titre: 'Pulsed radiofrequency treatment in interventional pain management: mechanisms and potential indications — a review', revue: 'Acta Neurochirurgica', annee: '2011', type: 'revue', verif: false },
    { auteurs: 'Trescot AM', titre: 'Cryoanalgesia in interventional pain management', revue: 'Pain Physician', annee: '2003', type: 'revue', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence reprise telle quelle de la fiche nerf-suprascapulaire.js, dont le DOI avait été vérifié lors de sa rédaction.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'sural-mollet', section: 'sonoanatomie', titre: 'Mi-mollet — le nerf voyage avec la petite veine saphène',
      legende: 'Dans le sillon entre les deux chefs du gastrocnémien, juste sous le fascia crural : la petite veine saphène, ronde, anéchogène et compressible, est la balise. Le nerf est le petit faisceau de 1 à 2 mm accolé à elle, non compressible. Un garrot peu serré ou la déclive dilate la veine ; une pression de sonde excessive l\'écrase et fait disparaître le repère.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, face postérieure du mollet', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.fascia({ points: [[0, 116], [640, 116]], width: 1.8 });
        S.muscle({ path: 'M0 124 L296 132 L292 262 L0 256 Z', label: 'Gastrocnémien médial', at: [142, 200], opacity: 0.5 });
        S.muscle({ path: 'M332 132 L640 124 L640 256 L336 262 Z', label: 'Gastrocnémien latéral', at: [488, 200], opacity: 0.5 });
        S.vein({ x: 306, y: 92, rx: 14, ry: 11 });
        S.nerve({ x: 342, y: 100, r: 7 });
        S.fascia({ points: [[0, 272], [640, 272]], width: 1.6, opacity: 0.7 });
        S.muscle({ path: 'M0 278 L640 278 L640 372 L0 372 Z', label: 'Soléaire', at: [320, 328], opacity: 0.45 });
        S.label({ x: 150, y: 156, text: 'Petite veine saphène', cls: 'lbl-vein', small: true, lead: [294, 96] });
        S.label({ x: 496, y: 156, text: 'N. cutané sural médial', cls: 'lbl-nerve', small: true, lead: [350, 102] });
        S.label({ x: 566, y: 108, text: 'Fascia crural', cls: 'lbl-fascia', small: true, anchor: 'end' });
      },
    },
    {
      id: 'sural-retromalleolaire', section: 'technique', titre: 'Voie rétro-malléolaire — aiguille in-plane, abord du côté opposé à la veine',
      legende: 'Voie de certitude : en aval de la jonction des deux contingents, elle couvre tout le territoire. Le nerf est très superficiel, entre le tendon d\'Achille et la malléole latérale, toujours accolé à la petite veine saphène. L\'aiguille aborde le nerf par le côté opposé à la veine. Critère de fin : couronne anéchogène cernant le nerf, sans le distendre.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Postérieur (Achille)', right: 'Antérieur (malléole)' }).probeInfo({ plan: 'Transverse, rétro-malléolaire latéral', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.tendon({ x: 70, y: 130, rx: 84, ry: 30 });
        S.bone({ path: 'M424 186 Q520 154 626 162', label: 'Malléole latérale', at: [552, 302], ldy: 0, anchor: 'end' });
        S.tendon({ x: 452, y: 136, rx: 21, ry: 14 });
        S.tendon({ x: 496, y: 122, rx: 19, ry: 12 });
        S.vein({ x: 268, y: 88, rx: 17, ry: 13 });
        S.nerve({ x: 306, y: 104, r: 7 });
        S.label({ x: 96, y: 82, text: 'Tendon d\'Achille', cls: 'lbl-tendon', small: true });
        S.label({ x: 158, y: 186, text: 'Petite v. saphène\n(dilatée au garrot)', cls: 'lbl-vein', small: true, lead: [256, 98] });
        S.label({ x: 214, y: 258, text: 'N. sural (1–2 mm)', cls: 'lbl-nerve', small: true, lead: [298, 112] });
        S.label({ x: 570, y: 250, text: 'Tendons fibulaires', cls: 'lbl-tendon', small: true, anchor: 'end', lead: [500, 134] });
        S.target({ x: 306, y: 104, r: 14 });
        S.needle({ from: [636, 74], to: [330, 110], label: '25–27 G, in-plane' });
        S.spread({ x: 352, y: 124, rx: 36, ry: 20, label: '2–3 mL' });
      },
    },
  ],

  checklist: [
    'Point de Tinel marqué avant désinfection chez l\'opéré — le nerf est là où ça fait mal, pas où l\'atlas le place',
    'Garrot peu serré ou déclive pour dilater la petite veine saphène, relâché avant l\'injection',
    'Test de compressibilité fait : la veine s\'écrase, le nerf non',
    'Niveau de ponction choisi EN DESSOUS de la jonction des deux contingents si le bloc est diagnostique',
    'Trajet d\'aiguille du côté opposé à la veine',
    'Volume plafonné à 2–3 mL en diagnostique — ne pas bloquer les nerfs voisins',
    'EN avant / 30 min notée + fiche d\'auto-évaluation sur 24 h remise au patient',
    'Hypoesthésie du bord latéral du pied testée et notée séparément du soulagement de la douleur',
    'Si technique lésionnelle envisagée : bloc test positif tracé, et récusée si anesthésie douloureuse préexistante',
  ],
});
