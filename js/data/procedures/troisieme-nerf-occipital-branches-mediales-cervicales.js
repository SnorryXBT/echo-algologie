/* Fiche : nerf occipital III (TON) et branches médiales cervicales C3–C7 — blocs échoguidés, RF. */
ECHO.register({
  id: 'troisieme-nerf-occipital-branches-mediales-cervicales',
  titre: 'Nerf occipital III et branches médiales cervicales (C3–C7)',
  titreCourt: 'TON & branches médiales cervicales',
  en: 'Ultrasound-guided third occipital nerve (TON) block and cervical medial branch blocks (C3–C7); lateral approach in lateral decubitus, articular pillar targeting; cervical medial branch radiofrequency neurotomy',
  region: 'tete-cou',
  types: ['bloc', 'interventionnel'],
  niveau: 3,
  grade: 'Forte pour la radiofréquence après blocs comparatifs (ECR de Lord 1996, fluoroscopie) · Modérée pour le repérage échographique (ECR de non-infériorité vs fluoroscopie sur la performance, cohorte de sécurité de 2 308 blocs) · Faible pour la RF **échoguidée seule**',
  maj: '2026-09',
  motsCles: ['TON', 'nerf occipital III', 'troisième nerf occipital', 'branche médiale', 'medial branch', 'facette cervicale', 'zygapophysaire', 'céphalée cervicogénique', 'whiplash', 'coup du lapin', 'C2-C3', 'pilier articulaire', 'radiofréquence', 'neurotomie', 'Eichenberger', 'Siegenthaler', 'Finlayson'],
  resume: 'C\'est le geste diagnostique de la cervicalgie facettaire et de la céphalée cervicogénique : le **nerf occipital III (TON)**, branche superficielle du ramus dorsal de C3, innerve l\'articulation C2-C3 et la région occipitale haute ; les **branches médiales C3 à C7** innervent chacune deux articulations zygapophysaires, en croisant la concavité (le « waist ») du pilier articulaire correspondant. Sous échographie, on ne cherche pas le nerf : on cherche l\'os. En décubitus latéral, sonde coronale, la colonne des piliers articulaires dessine une ligne festonnée « en dents de scie » que l\'on compte depuis C2 ; la cible est le **point le plus profond de la concavité** du pilier. La performance de l\'échographie versus fluoroscopie est établie pour le TON et pour C7 (ECR : temps plus court, moins de passages d\'aiguille, succès équivalent). En revanche, la **radiofréquence thermique échoguidée seule reste discutée** : la majorité des équipes conserve un contrôle radioscopique pour le placement de l\'électrode, et il faut le dire honnêtement.',

  flash: {
    position: 'lateral', positionNote: 'décubitus latéral strict, côté à traiter vers le haut, tête sur un coussin fin alignant l\'axe cervical (approche latérale de Finlayson) ; le procubitus est réservé aux voies postérieures',
    sonde: 'lineaire', sondeNote: '10–15 MHz, profondeur 3,5–5 cm ; convexe 2–5 MHz uniquement chez le sujet très épais (la résolution y perd ce que la pénétration y gagne)',
    approche: 'in-plane', approcheNote: 'repérage en coupe **longitudinale (coronale)** avec comptage des piliers depuis C2, puis rotation en coupe **transversale** et ponction dans le plan, de postérieur vers antérieur, jusqu\'au contact osseux du pilier',
    aiguille: '25 G 50 mm (bloc) · aiguille RF 22 G 54–100 mm, extrémité active 4–10 mm (neurotomie, avec contrôle radioscopique recommandé)',
    cible: 'Contact osseux au **point le plus profond de la concavité** (waist) du pilier articulaire ; TON : face latérale de l\'articulation C2-C3, au sommet de la première convexité sous C2',
    injectat: '**0,3 à 0,5 mL** par niveau — AL seul pour le bloc diagnostique ; corticoïde **non particulaire** uniquement si visée thérapeutique',
    duree: '15–20 min pour 2–3 niveaux · 40–60 min pour une neurotomie',
  },

  indications: [
    '**Céphalée cervicogénique** avec suspicion d\'origine C2-C3 : bloc du **nerf occipital III**, qui est à la fois le test diagnostique de référence (avec les blocs comparatifs) et le préalable obligatoire à toute neurotomie.',
    '**Cervicalgie facettaire**, notamment après **whiplash** : la prévalence de la douleur facettaire cervicale, établie par blocs contrôlés, est de l\'ordre de **50 %** dans les populations de cervicalgie chronique (taux de faux positifs des blocs simples ≈ 25 %), et les niveaux les plus souvent en cause sont C2-C3 et C5-C6.',
    '**Bloc diagnostique / pronostique avant radiofréquence** : c\'est l\'indication principale. Les recommandations exigent des **blocs comparatifs doubles** (deux anesthésiques de durées différentes, ou bloc + placebo) avec un seuil de soulagement élevé — ≥ 80 % selon les critères de prise en charge, jusqu\'à 100 % dans les recommandations de la Spine Intervention Society avant neurotomie cervicale.',
    'Cervicalgie postérieure axiale, sans radiculalgie ni signe neurologique, résistante au traitement conservateur (kinésithérapie, antalgiques, éducation) et sans autre générateur identifié.',
    'Douleur facettaire cervicale après arthrodèse (niveaux adjacents), après traumatisme, ou dans le cadre d\'une arthrose zygapophysaire symptomatique.',
    'Complément du bloc du nerf grand occipital dans une céphalée occipitale mixte : le TON couvre la zone paramédiane haute que le GON ne couvre pas.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée ou générale, allergie vraie aux amino-amides, instabilité cervicale non stabilisée, myélopathie cervicale non explorée.',
    '**Risque hémorragique — geste cervical profond, non compressible.** Les procédures de branches médiales cervicales sont classées **à risque intermédiaire** dans la stratification ASRA-ESRA 2018 (leur voisinage vasculaire et le caractère non compressible du site l\'emportent sur la superficialité apparente). Appliquer les délais d\'interruption correspondants pour les anticoagulants oraux directs et les AVK, discuter au cas par cas les antiagrégants avec le prescripteur, et documenter la balance risque thrombotique / risque hémorragique.',
    'Relatives : anticoagulation non interrompable chez un patient à haut risque thrombotique (préférer alors un geste à faible risque : bloc occipital distal, points gâchettes) ; morphotype rendant les piliers illisibles ; antécédent de chirurgie cervicale postérieure modifiant l\'anatomie (repères osseux perturbés — envisager la fluoroscopie).',
    '**Radiculalgie vraie, déficit neurologique, drapeaux rouges** : ce n\'est pas la bonne cible, et le geste retarde le diagnostic.',
    'Corticoïdes : **jamais de particulaire** à ce niveau — l\'artère vertébrale et l\'artère cervicale profonde sont dans le champ, et des infarctus médullaires et de la circulation postérieure ont été décrits après injections cervicales de corticoïdes particulaires. Dexaméthasone seule, ou AL seul.',
  ],
  alternatives: 'Infiltration intra-articulaire zygapophysaire cervicale (fiche dédiée — moins bien documentée, largement supplantée par les blocs de branches médiales) ; bloc du nerf grand occipital si la douleur est occipitale médiane (fiche dédiée) ; radiofréquence thermique des branches médiales sous **fluoroscopie**, qui reste le standard validé par ECR ; radiofréquence pulsée des branches médiales (moins destructrice, données de cohorte) ; traitement conservateur structuré (kinésithérapie active, éducation, exercices cranio-cervicaux) — obligatoire avant et après. **Le choix de fond** : sous échographie on gagne du temps, on supprime l\'irradiation et on voit les vaisseaux ; on perd la confirmation objective du niveau. Chez un opérateur entraîné, une cohorte appariée récente montre que les blocs échoguidés sélectionnent aussi bien que les blocs radioguidés les patients qui répondront à la neurotomie — c\'est l\'argument le plus fort en faveur de l\'échographie pour la **phase diagnostique**.',

  anatomie: `Chaque articulation zygapophysaire cervicale est innervée par **deux branches médiales**, celle du niveau et celle du niveau sus-jacent. Une articulation douloureuse impose donc toujours **deux blocs**.

Les **branches médiales de C3 à C7** naissent du ramus dorsal correspondant, contournent la face latérale du **pilier articulaire** (masse latérale) et croisent sa **concavité médiane** — ce rétrécissement en « taille de guêpe » (*waist*) est la cible : c\'est le seul endroit où le nerf est reproductiblement au contact de l\'os. Elles y sont plaquées contre le périoste, sous les muscles semi-épineux et l\'insertion du splénius.

Le **nerf occipital III (TON)** est la **branche superficielle médiale du ramus dorsal de C3**. Il est plus volumineux (diamètre médian de l\'ordre de 2 mm, ce qui le rend directement visible en échographie), croise la **face latérale de l\'articulation C2-C3** — soit à son niveau, soit juste au-dessus ou au-dessous — puis remonte pour innerver la peau de la région occipitale haute paramédiane. Il innerve l\'articulation C2-C3 : bloquer le TON revient donc à tester ce niveau.

Il n\'y a **pas de branche médiale de C2** au sens habituel : le ramus dorsal de C2 donne le nerf grand occipital, et l\'articulation C2-C3 est desservie par le TON.

### Ce qui compte pour le geste
- **On cible l\'os, pas le nerf.** Sauf pour le TON (visible dans la quasi-totalité des cas), les branches médiales C3-C7 ne sont pas identifiables individuellement : la cible est le **point le plus profond de la concavité** du pilier, en contact osseux.
- **Le comptage est l\'enjeu numéro un.** Trois méthodes complémentaires : (1) descendre depuis **C2** — repérable par sa lame volumineuse et par l\'articulation C2-C3, première « bosse » sous elle ; (2) remonter depuis **C7**, dont le processus transverse n\'a **pas de tubercule antérieur** (contrairement à C6) ; (3) utiliser l\'**artère vertébrale** au Doppler, qui pénètre en règle le foramen transversaire de **C6** — donc visible dans le foramen de C6 et au-dessus, et non dans celui de C7. Croiser deux méthodes systématiquement.
- **Anatomie particulière de C7** : la branche médiale de C7 est plus haute et plus dorsale sur le pilier que les autres, et le niveau est le plus difficile de la série — c\'est celui où la précision de tous les repérages (échographiques comme fluoroscopiques) est la plus basse.
- **Vaisseaux** : l\'**artère vertébrale** chemine en avant des piliers, dans les foramens transversaires ; l\'**artère cervicale profonde** (branche du tronc costo-cervical) monte dans la musculature postérieure profonde, **au contact des piliers**, et des rameaux radiculo-médullaires peuvent en naître. Le Doppler couleur avant chaque ponction n\'est pas un luxe : dans une cohorte prospective de 2 308 blocs échoguidés, des vaisseaux ont été détectés et évités dans **8,2 %** des niveaux.
- **Profondeurs habituelles** : pilier articulaire à 2,5–4 cm en décubitus latéral ; TON plus superficiel, 1,5–3 cm.
- **Variantes** : niveau du croisement du TON par rapport à l\'interligne C2-C3 (au-dessus, au niveau, en dessous), piliers peu concaves chez le sujet arthrosique (ostéophytes qui comblent la « taille »), asymétrie droite-gauche.`,

  installation: {
    patient: `**Décubitus latéral strict**, côté à traiter **vers le haut**, tête posée sur un coussin fin qui garde le rachis cervical dans l\'axe (ni inclinaison ni rotation : toute déviation déforme l\'alignement des piliers et fausse le comptage). Genoux fléchis, coussin entre les jambes, bras inférieur en avant.

C\'est la position de l\'approche latérale de Finlayson, la plus reproductible et la plus confortable pour l\'opérateur comme pour le patient — elle permet aussi de traiter plusieurs niveaux sans bouger.

Alternative : **procubitus** avec un coussin sous le thorax et le front sur un appui, pour une voie postérieure (utile si le décubitus latéral est impossible). Les repères osseux changent alors complètement : on part des épineuses et on glisse latéralement sur les lames.

Prévoir une voie veineuse si l\'on enchaîne plusieurs niveaux ou si l\'on fait une neurotomie ; sinon, patient à jeun non requis pour un simple bloc, mais surveillance et lever accompagné.`,
    operateur: `Opérateur **derrière le patient**, écran de l\'autre côté du lit dans l\'axe du regard. Deux temps distincts, à ne jamais confondre :

1. **Temps de repérage, sonde longitudinale (coronale)** posée sur la face latérale du cou, parallèle à l\'axe du rachis : on lit la ligne festonnée des piliers et **on compte**.
2. **Temps de ponction, sonde tournée de 90° (transversale)** sur le niveau choisi : on obtient la coupe courte du pilier et on ponctionne **dans le plan, de postérieur vers antérieur**, jusqu\'au contact osseux.

Marquer au feutre le niveau retenu à la fin du temps 1 : le comptage se perd dès qu\'on lâche la sonde.

Certains opérateurs restent en coupe longitudinale et ponctionnent dans le plan de crânial en caudal (approche d\'Eichenberger-Siegenthaler, à l\'origine hors plan, de l\'avant vers l\'arrière). L\'étude cadavérique comparative de Stogicza (2024) montre que ces approches n\'ont ni la même précision ni le même profil de sécurité : choisir **une** technique et la maîtriser.`,
    sonde: `- Linéaire **10–15 MHz**, preset MSK/nerf, profondeur **4 cm** en repérage puis 3–3,5 cm en ponction ; focale sur le plan des piliers.
- Gain modéré : les piliers doivent apparaître comme une ligne blanche franche avec ombre acoustique nette, la « dent de scie » se lit sur le contraste.
- **Doppler couleur systématique et à basse échelle de vitesse** sur le trajet prévu, à chaque niveau, avant chaque ponction : artère cervicale profonde et rameaux musculaires, artère vertébrale en avant.
- Aiguille **écho-visible fortement recommandée** : à 3–4 cm et en oblique, une 25 G standard se perd. Hydrolocalisation par 0,2 mL de sérum en cas de doute.
- Ne pas comprimer : la compression rapproche artificiellement les plans et fausse l\'estimation de la profondeur du contact osseux.`,
  },

  reperage: [
    { titre: '1. Coupe longitudinale sur la colonne des piliers', texte: 'Sonde **coronale** sur la face latérale du cou, parallèle au rachis, à 2–3 cm en arrière du bord postérieur du SCM. Glisser d\'avant en arrière jusqu\'à obtenir la ligne hyperéchogène **festonnée « en dents de scie »** : les **creux** correspondent au milieu (waist) des piliers articulaires, les **sommets** aux articulations zygapophysaires. Si l\'image est une ligne continue régulière, on est trop en arrière (lames) ou trop en avant (processus transverses).' },
    { titre: '2. Compter depuis C2', texte: 'Remonter en crânial : la **lame de C2**, volumineuse, marque la fin de la série ; la première articulation sous elle est **C2-C3**, et le premier creux au-dessous est le **pilier de C3**. Numéroter les creux en descendant : C3, C4, C5, C6, C7. Marquer le niveau visé au feutre.' },
    { titre: '3. Vérification par le bas — C7 et l\'artère vertébrale', texte: 'Confirmer par une seconde méthode : glisser la sonde en avant pour repérer les **processus transverses**. Celui de **C7 n\'a pas de tubercule antérieur** (celui de C6 en a un, volumineux, le tubercule de Chassaignac). Vérifier ensuite au **Doppler** que l\'artère vertébrale est vue dans le foramen transversaire de **C6** et non de C7 (variante possible : entrée en C5 ou C7). Deux méthodes concordantes = comptage validé.' },
    { titre: '4. Repérer le nerf occipital III', texte: 'Remonter jusqu\'à l\'articulation **C2-C3** : le TON est la structure ovalaire hypoéchogène de 2 mm environ, **directement visible dans la majorité des cas**, croisant la face latérale de l\'interligne — au niveau, juste au-dessus ou juste au-dessous. Le suivre en balayage crânio-caudal pour confirmer sa continuité (un vaisseau ne se prolonge pas comme un nerf).' },
    { titre: '5. Basculer en coupe transversale sur le niveau visé', texte: 'Rotation de 90° : le pilier apparaît en coupe courte, comme un **plateau osseux** entre la lame en arrière et le processus transverse en avant. Le point le plus haut du plateau — la « colline » — est la cible. Refaire un Doppler.' },
    { titre: 'Si le comptage est douteux', texte: 'Ne jamais « à peu près » compter : **recommencer** depuis C2 et depuis C7, sur les deux plans, et ne ponctionner que si les deux méthodes concordent. Si les piliers restent illisibles (obésité, arthrose majeure, chirurgie antérieure), le geste **relève de la fluoroscopie** — c\'est une décision de sécurité, pas un aveu d\'échec. Chez le patient très épais, le convexe 2–5 MHz permet parfois de retrouver la série des piliers, au prix d\'une moindre résolution.' },
  ],

  sonoanatomie: [
    { structure: 'Colonne des piliers articulaires (coupe longitudinale)', aspect: 'Ligne hyperéchogène **festonnée « en dents de scie »**, sommets = articulations, creux = milieu des piliers ; ombre acoustique franche', repere: 'Image de référence du repérage et du comptage' },
    { structure: 'Concavité (waist) du pilier', aspect: 'Point le plus profond entre deux sommets', repere: '**La cible** : contact osseux à ce point exact' },
    { structure: 'Articulation zygapophysaire', aspect: 'Sommet de la dent de scie, fine interruption de la corticale entre deux processus articulaires', repere: 'Sert au comptage et à l\'identification du niveau' },
    { structure: 'Lame de C2', aspect: 'Structure osseuse volumineuse au sommet de la série', repere: 'Point de départ du comptage crânio-caudal' },
    { structure: 'Nerf occipital III (TON)', aspect: 'Ovale hypoéchogène ≈ 2 mm, souvent directement visible, croisant la face latérale de C2-C3', repere: 'Le seul nerf de la série identifiable de façon fiable' },
    { structure: 'Processus transverse de C6', aspect: 'Tubercule antérieur volumineux (tubercule de Chassaignac) + tubercule postérieur', repere: 'Différencie C6 de C7 (qui n\'a pas de tubercule antérieur)' },
    { structure: 'Artère vertébrale', aspect: 'Vaisseau pulsatile dans le foramen transversaire, en avant des piliers ; Doppler positif', repere: 'Pénètre en règle en **C6** : sert de repère de niveau et de structure à éviter' },
    { structure: 'Artère cervicale profonde et rameaux musculaires', aspect: 'Petits vaisseaux pulsatiles dans la musculature postérieure profonde, parfois au contact du pilier', repere: 'Doppler avant chaque ponction — détectés dans ~8 % des niveaux' },
    { structure: 'Semi-épineux / splénius / élévateur de la scapula', aspect: 'Masses musculaires striées recouvrant les piliers', repere: 'Traversées par l\'aiguille' },
  ],

  technique: [
    { titre: 'Préparation et time-out', texte: 'Checklist (fin de fiche). **Time-out renforcé** : côté, niveaux, nombre de blocs, protocole diagnostique (simple ou comparatif), produit utilisé et sa durée d\'action — un bloc comparatif dont on ne sait plus quel AL a été injecté est un bloc perdu. Désinfection large, gel stérile ou housse. Seringues de 1 mL étiquetées par niveau.' },
    { titre: 'Anesthésie cutanée', texte: '0,5 mL de lidocaïne 1 % au point d\'entrée, **sans infiltrer en profondeur** : une anesthésie profonde généreuse fausse le bloc diagnostique en anesthésiant les tissus voisins et expose à des diffusions imprévues (des accidents neurologiques transitoires après infiltration cervicale ont été rapportés — *à confirmer*). Systématique avant aiguille RF.' },
    { titre: 'Ponction dans le plan, de postérieur vers antérieur', texte: 'Sonde transversale sur le niveau marqué. Aiguille écho-visible entrée au bord postérieur de la sonde, angle 20–35°, **pointe visible en permanence**. Traverser trapèze, splénius, semi-épineux. Progresser jusqu\'au **contact osseux franc** au point le plus profond de la concavité, puis reculer de 1 mm. Ne jamais avancer au-delà du plateau osseux : en avant, c\'est le foramen et l\'artère vertébrale.' },
    { titre: 'Bloc du TON', texte: 'Même principe à l\'articulation C2-C3, où le nerf est visible : amener la pointe **à côté** du nerf, contre l\'os, sans le traverser. Prévenir le patient de l\'**ataxie transitoire** qui accompagne très fréquemment le bloc et la neurotomie du TON (voir Complications) : c\'est attendu, pas une complication.' },
    { titre: 'Test, aspiration et injection', texte: 'Aspiration dans deux plans. **0,3 à 0,5 mL par niveau, pas plus** : au-delà, l\'injectat diffuse aux niveaux et aux structures voisines, et le bloc perd toute valeur diagnostique — c\'est l\'erreur qui invalide le plus de bilans. L\'injectat doit former un petit dôme anéchogène **plaqué contre l\'os**. Une diffusion large, fusiforme, intramusculaire = repositionner ou considérer le niveau comme non interprétable.' },
    { titre: 'Critère de fin et niveaux multiples', texte: 'Critère de fin : dôme sous-fascial de 5–10 mm au contact du périoste, sans reflux ni disparition brutale de l\'injectat (signe de passage vasculaire). Enchaîner les niveaux prévus **sans changer la position du patient**, en repassant le Doppler à chaque fois. Additionner les volumes : 4 niveaux à 0,5 mL = 2 mL — dérisoire, c\'est bien l\'intérêt.' },
    { titre: 'Après le geste — l\'évaluation *est* le geste', texte: 'Surveillance 20–30 min : force et sensibilité des membres supérieurs, absence de gêne respiratoire. **EN et pourcentage de soulagement notés à 20–30 min**, puis le patient tient un relevé horaire pendant 8 h (agenda remis avant le geste). C\'est cette courbe, comparée à la durée d\'action de l\'AL injecté, qui rend un bloc comparatif interprétable. Prévenir : instabilité transitoire (surtout après TON), engourdissement de la nuque, douleur au point de ponction 24–48 h, pas de conduite le jour même.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bloc diagnostique — 1er passage** | Lidocaïne 1–2 % **seule** | **0,3–0,5 mL par niveau** | Durée d\'action attendue 1–2 h. Le patient note son soulagement heure par heure |
| **Bloc comparatif — 2e passage** (≥ 2 semaines plus tard) | Bupivacaïne 0,5 % ou ropivacaïne 0,5 % **seule** | 0,3–0,5 mL par niveau | Durée attendue 4–8 h. Concordance des durées = bloc **positif de façon comparative**. C\'est ce protocole, et non un bloc unique, qui fonde la sélection avant neurotomie (faux positifs des blocs simples ≈ 25 %) |
| **Seuil de positivité** | — | — | ≥ **80 %** de soulagement selon les critères de prise en charge usuels ; la Spine Intervention Society recommande **100 %** de soulagement après blocs comparatifs avant neurotomie cervicale. Adopter un seuil, l\'écrire, s\'y tenir |
| Bloc à visée thérapeutique | AL + **dexaméthasone 1–2 mg** par niveau (non particulaire) | 0,5 mL | Effet inconstant et généralement bref. **Jamais de corticoïde particulaire** à ce niveau (infarctus médullaire et de la circulation postérieure décrits après injections cervicales de particulaire) |
| Neurotomie par radiofréquence | Lidocaïne 1–2 % avant lésion (0,3 mL), rien après en règle | — | L\'AL injecté avant la lésion ne doit pas déplacer le nerf hors de portée de l\'électrode |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), bupivacaïne 2–2,5 mg/kg, ropivacaïne 3 mg/kg. Les volumes ici sont minuscules — mais le danger n\'est pas la dose totale, c\'est **l\'injection intravasculaire directe** : 0,3 mL de bupivacaïne dans un rameau de l\'artère cervicale profonde ou dans l\'artère vertébrale suffisent à provoquer une convulsion ou un accident neurologique. Aspiration, Doppler, fractionnement, contact verbal.

**Corticoïdes particulaires strictement proscrits** à ce niveau. Triamcinolone hexacétonide (Hexatrione®) : réservée à l\'intra-articulaire, jamais ici.`,

  variantes: [
    { titre: 'Radiofréquence thermique des branches médiales — ce que dit vraiment la littérature', texte: `**L\'efficacité de la neurotomie cervicale est établie** : l\'ECR de Lord (1996, *New England Journal of Medicine*), en double aveugle contre procédure factice, a montré un soulagement durable chez des patients dont la douleur zygapophysaire cervicale post-whiplash avait été confirmée par des blocs contrôlés en double aveugle. C\'est la référence — mais elle a été réalisée **sous fluoroscopie**, avec lésions multiples.

**Le guidage échographique de la lésion, lui, n\'est pas au même niveau de preuve.** Une étude sonoanatomique cadavérique (*Clinical Radiology* 2008) a décrit une technique de neurotomie cervicale échoguidée avec vérification radioscopique du positionnement ; des séries et des cohortes comparatives suggèrent une faisabilité correcte. Mais l\'électrode de RF doit être placée **parallèlement au nerf**, sur toute la longueur du trajet osseux, et cette orientation tridimensionnelle est précisément ce que l\'échographie rend difficile à contrôler. **La position raisonnable en 2026 : repérage et blocs diagnostiques sous échographie, contrôle radioscopique pour le placement de l\'électrode de neurotomie.** Faire autrement est défendable chez un opérateur très entraîné, mais doit être assumé et tracé comme tel.

Paramètres usuels de la RF thermique (fluoroscopie) : 80 °C, 60–90 s, lésions multiples par niveau, stimulation sensitive 50 Hz (< 0,5 V) et motrice 2 Hz (absence de contraction segmentaire du membre supérieur) avant lésion.` },
    { titre: 'Blocs échoguidés comme sélection avant neurotomie', texte: 'Question pratique la plus utile : un bloc échoguidé sélectionne-t-il aussi bien qu\'un bloc radioguidé ? Une **cohorte rétrospective appariée** (*Pain Medicine* 2024, 27 patients échoguidés vs 38 fluoroguidés, 58 procédures dans chaque groupe) conclut que les deux modalités prédisent de façon **comparable** le résultat de la neurotomie — sous réserve de la compétence de l\'opérateur. C\'est l\'argument central : on peut légitimement faire les blocs diagnostiques sous échographie en HDJ, sans irradiation, et adresser ensuite pour neurotomie.' },
    { titre: 'Radiofréquence pulsée des branches médiales', texte: 'Alternative non destructrice, sans dénervation multifide, utilisable après blocs positifs chez un patient réticent à la neurotomie thermique ou lorsque celle-ci a été partiellement efficace. Paramètres usuels : 42 °C, 2 Hz, 20 ms, 45 V, 120–240 s. Données de cohortes, pas d\'ECR de qualité comparative ; effet généralement plus bref que la RF thermique. À proposer comme option, pas comme équivalent.' },
    { titre: 'Voies d\'abord alternatives (Eichenberger-Siegenthaler)', texte: 'La technique historique (Eichenberger 2006 pour le TON, Siegenthaler 2011-2012 pour les branches médiales) utilise une **sonde en plan coronal** et une aiguille **hors du plan**, dirigée d\'avant en arrière. Précision publiée : environ 77 % d\'aiguilles bien positionnées et 84 % de diffusion du contraste sur la cible, avec la **plus mauvaise précision au niveau C7**. L\'approche transversale in-plane de Finlayson permet de voir l\'aiguille sur toute sa longueur et s\'est imposée en pratique. L\'étude cadavérique de Stogicza (2024) compare les trois approches reconnues en termes de précision et de sécurité : consulter avant de changer de technique, et n\'en pratiquer qu\'une.' },
    { titre: 'Approche postérieure en procubitus', texte: 'Utile si le décubitus latéral est impossible : sonde longitudinale paramédiane sur les épineuses, puis glissement latéral sur les lames jusqu\'à la colonne des piliers ; ponction dans le plan de caudal en crânial. Repères osseux différents, comptage plus difficile — à réserver aux opérateurs qui la pratiquent régulièrement.' },
    { titre: 'Association au bloc du nerf grand occipital', texte: 'Dans la céphalée cervicogénique, la douleur est souvent mixte : bloc du TON pour la composante C2-C3, bloc du GON pour la composante occipitale médiane (fiche dédiée). Les faire **séparément et à des dates différentes** si l\'objectif est diagnostique — les faire ensemble ne renseigne sur rien.' },
  ],

  pearls: [
    'Le comptage vaut plus que la ponction : **deux méthodes concordantes** (descendre depuis C2, remonter depuis C7 sans tubercule antérieur, artère vertébrale entrant en C6) avant toute aiguille.',
    'On vise **l\'os**, pas le nerf : contact franc au point le plus profond de la concavité du pilier, puis recul de 1 mm.',
    '**0,3–0,5 mL et pas un dixième de plus.** Le volume est le premier destructeur de valeur diagnostique d\'un bloc facettaire.',
    'Le TON est le seul nerf de la série visible directement — profiter de cette chance pour valider son image mentale de la région avant de descendre sur les branches médiales.',
    'Marquer le niveau au feutre à la fin du repérage longitudinal : le comptage se perd dès que la sonde quitte la peau.',
    'Remettre l\'agenda horaire de soulagement **avant** le geste, pas après : c\'est le seul document qui rendra un bloc comparatif interprétable.',
    'Si les piliers ne sont pas lisibles, la bonne décision est la fluoroscopie, pas l\'obstination.',
  ],
  pieges: [
    'Se tromper de niveau : la faute la plus fréquente et la plus lourde de conséquences (on dénerve ensuite le mauvais étage). Le comptage unique est insuffisant.',
    'Injecter 1–2 mL « pour être sûr » : diffusion aux niveaux adjacents et aux tissus voisins, faux positif, indication de neurotomie erronée.',
    'Confondre les lames (ligne continue régulière) ou les processus transverses avec la colonne des piliers (ligne festonnée) : on est trop en arrière ou trop en avant.',
    'Chercher le nerf au lieu de l\'os sur les niveaux C3-C7 : perte de temps, la cible est osseuse.',
    'Anesthésier généreusement en profondeur : on invalide le bloc diagnostique et on s\'expose à des diffusions imprévues.',
    'Négliger le Doppler à chaque niveau : des vaisseaux sont présents dans environ 8 % des cibles, et le passage vasculaire n\'a rien d\'anecdotique.',
    'Ne pas prévenir de l\'ataxie après bloc ou neurotomie du TON : le patient croit à une complication grave.',
    'Faire une neurotomie sur un bloc unique positif : un quart de faux positifs, c\'est un quart de dénervations inutiles.',
  ],
  complications: [
    '**Ataxie transitoire et engourdissement occipital après bloc ou neurotomie du TON** : quasi constants (numbness et ataxie légère rapportés chez la grande majorité des patients après neurotomie du TON, avec dysesthésies chez environ la moitié, hypersensibilité et prurit plus rarement). Transitoires. À annoncer explicitement avant le geste, sinon ils sont vécus comme une complication.',
    '**Injection intravasculaire** (artère cervicale profonde, rameau musculaire, exceptionnellement artère vertébrale) : convulsion, accident de la circulation postérieure. Prévention : Doppler, aspiration dans deux plans, fractionnement, faible volume. Dans une cohorte prospective de 2 308 blocs échoguidés in-plane, l\'effraction vasculaire a été notée dans **0,52 %** des blocs.',
    '**Complications globales très rares en échoguidage** : la même cohorte rapporte **3 complications mineures immédiates sur 2 308 blocs (0,13 %)** — deux hématomes sous-cutanés et une réaction vagale — et aucun événement retardé à 2 semaines chez des opérateurs expérimentés.',
    '**Injection épidurale, sous-durale ou intrathécale** : possible si l\'aiguille glisse en dedans du pilier vers l\'espace interlamaire, ou par diffusion. Peut donner un bloc moteur haut, une rachianesthésie totale, une détresse respiratoire. Prévention : contact osseux avant toute injection, jamais d\'avancée à l\'aveugle.',
    '**Lésion médullaire ou radiculaire directe** : décrite pour les procédures cervicales, exceptionnelle avec un contact osseux systématique et une pointe visible.',
    '**Infarctus médullaire ou de la circulation postérieure après corticoïde particulaire** : rapporté pour les injections cervicales. Raison suffisante pour n\'utiliser que du non particulaire.',
    'Malaise vagal, douleur au point de ponction, hématome, aggravation transitoire de la cervicalgie 24–48 h.',
    'Après neurotomie : douleur de dénervation ou névrite (quelques semaines), faiblesse des multifides au niveau traité, repousse nerveuse et récidive à 6–18 mois (attendue, la neurotomie est répétable).',
  ],
  securite: [
    '**Classe de risque hémorragique : intermédiaire** (procédures de branches médiales cervicales, stratification ASRA-ESRA 2018). Site profond, non compressible, voisinage vasculaire : appliquer les délais d\'interruption des anticoagulants, discuter les antiagrégants au cas par cas avec le prescripteur, et tracer la décision.',
    '**Doppler couleur à chaque niveau, avant chaque ponction.** Un Doppler fait une fois au début du geste ne protège pas les niveaux suivants.',
    '**Contact osseux obligatoire avant toute injection**, et pointe visible en permanence. Jamais d\'avancée en avant du plateau du pilier.',
    'Aspiration dans deux plans, injection **fractionnée et lente**, contact verbal maintenu (les premiers signes de toxicité sont subjectifs).',
    'Volumes minimes (0,3–0,5 mL/niveau) : ils protègent à la fois la valeur diagnostique et le patient.',
    '**Aucun corticoïde particulaire.** Dexaméthasone seule si un corticoïde est jugé utile.',
    'Surveillance 20–30 min avec évaluation motrice et sensitive des membres supérieurs et de la respiration ; matériel de réanimation et intralipide disponibles.',
    'Si le comptage n\'est pas certain ou si les piliers sont illisibles : **arrêter et adresser en fluoroscopie**.',
  ],

  suivi: `- **J0** : EN avant, à 20–30 min, puis **relevé horaire pendant 8 h** sur un agenda remis avant le geste. Noter le produit exact et sa durée d\'action attendue, ainsi que le pourcentage maximal de soulagement.
- **Interprétation** : soulagement ≥ 80 % (ou 100 % selon le seuil retenu) pendant une durée **cohérente avec l\'AL utilisé** = bloc positif. Soulagement immédiat mais bref, ou soulagement prolongé bien au-delà de la durée de l\'AL, ou effet partiel diffus : bloc **non concluant**, ne pas l\'utiliser pour poser une indication de neurotomie.
- **2e bloc comparatif** à ≥ 2 semaines, avec un AL de durée différente, en aveugle du patient sur le produit. Concordance = indication de neurotomie discutable en réunion.
- **Après neurotomie** : évaluation à 4–6 semaines (fenêtre de névrite dépassée), 3 mois, 6 mois et 12 mois — EN, NDI, consommation d\'antalgiques, reprise d\'activité. Durée d\'effet attendue **6 à 18 mois**, geste répétable à la récidive avec un résultat en général reproductible.
- **Kinésithérapie active systématique** dans la fenêtre d\'antalgie : la neurotomie ouvre une période de rééducation, elle ne remplace pas la rééducation.
- **Ce qu\'il ne faut pas faire** : répéter indéfiniment des blocs « thérapeutiques » de branches médiales. Leur intérêt est diagnostique ; s\'ils sont positifs et que la douleur revient, la question est celle de la neurotomie, pas de la répétition.`,

  evidence: `- **Efficacité de la neurotomie (preuve forte, mais sous fluoroscopie)** : Lord 1996 (*NEJM*), ECR en double aveugle contre procédure factice chez des patients sélectionnés par blocs contrôlés en double aveugle — soulagement durable démontré. C\'est l\'un des rares gestes d\'algologie interventionnelle rachidienne à disposer d\'un ECR de ce niveau.
- **Sélection des patients (preuve forte, consensuelle)** : la prévalence de la douleur facettaire cervicale par blocs contrôlés est d\'environ **49 %** en population de cervicalgie chronique, avec un taux de **faux positifs des blocs simples d\'environ 25 %** (blocs simples : 66 % de « positifs » contre 49 % en blocs doubles). D\'où l\'exigence de **blocs comparatifs** avec seuil élevé avant toute neurotomie.
- **Repérage échographique du TON (preuve solide)** : Eichenberger 2006 (*Anesthesiology*) — nerf visualisé chez **tous** les volontaires, diamètre médian 2 mm, articulation C2-C3 correctement identifiée dans 27 cas sur 28 et aiguille correctement placée dans 23 cas sur 28 ; anesthésie obtenue dans tous les cas sauf un après AL, aucune après sérum salé (crossover randomisé en double aveugle).
- **Échographie versus fluoroscopie (preuve modérée, favorable sur la performance)** : Finlayson 2013 (*Reg Anesth Pain Med*), ECR sur le bloc du TON — temps de réalisation nettement plus court (≈ 213 s vs 397 s), moins de passages d\'aiguille (2 vs 6), **succès équivalent (95–100 %)** ; dans le groupe fluoroscopie, diffusion intra-articulaire C2-C3 dans 15 % des cas et effraction vasculaire dans 10 %, contre aucun événement en échographie. Résultats concordants pour le niveau C7 (Finlayson 2015 : ≈ 234 s vs 391 s, 2 vs 4 passages, succès 92–96 %).
- **Précision selon l\'approche (preuve modérée)** : Siegenthaler 2011-2012 — environ 77 % d\'aiguilles bien positionnées et 84 % de contraste sur la cible, **précision la plus basse en C7**. Stogicza 2024 (*Pain Physician*, étude cadavérique) compare les trois approches échoguidées reconnues (Eichenberger-Siegenthaler hors plan coronal, Finlayson transversale in-plane, et une troisième) en précision et en sécurité : les approches ne sont pas équivalentes.
- **Sécurité en pratique réelle (preuve solide)** : cohorte prospective de **500 patients / 2 308 niveaux** en blocs échoguidés in-plane ambulatoires — vaisseaux détectés et évités dans 8,2 % des blocs, effraction vasculaire 0,52 %, complications mineures immédiates 0,13 %, aucun événement retardé.
- **Validité pronostique des blocs échoguidés (preuve modérée)** : cohorte rétrospective appariée 2024 (*Pain Medicine*) — les blocs échoguidés et fluoroguidés prédisent de façon comparable le résultat de la neurotomie cervicale.
- **RF thermique échoguidée seule : preuve faible.** Étude sonoanatomique cadavérique (*Clinical Radiology* 2008) montrant la faisabilité **avec contrôle radioscopique**, séries cliniques ensuite. Il n\'existe pas d\'ECR démontrant l\'équivalence d\'une neurotomie purement échoguidée avec la neurotomie fluoroguidée. **C\'est le point où il faut être honnête** : l\'échographie a fait ses preuves pour le repérage et le bloc, pas pour la lésion.

*Trous assumés* : pas de standardisation du volume ni du seuil de positivité entre équipes ; efficacité des corticoïdes dans les blocs de branches médiales non démontrée ; place de la RF pulsée non tranchée ; niveau C7 mal servi par toutes les techniques.`,

  references: [
    { auteurs: 'Lord SM, Barnsley L, Wallis BJ, McDonald GJ, Bogduk N', titre: 'Percutaneous radio-frequency neurotomy for chronic cervical zygapophyseal-joint pain', revue: 'N Engl J Med', annee: '1996', doi: '10.1056/NEJM199612053352302', pmid: '8929263', type: 'ECR', note: 'La référence de l\'efficacité de la neurotomie cervicale — réalisée sous fluoroscopie.' },
    { auteurs: 'Eichenberger U, Greher M, Kapral S, et al.', titre: 'Sonographic visualization and ultrasound-guided block of the third occipital nerve: prospective for a new method to diagnose C2-C3 zygapophysial joint pain', revue: 'Anesthesiology', annee: '2006', doi: '10.1097/00000542-200602000-00016', type: 'étude prospective', note: 'TON visualisé chez tous les volontaires ; crossover randomisé AL vs sérum salé.' },
    { auteurs: 'Siegenthaler A, et al.', titre: 'Accuracy of ultrasound-guided nerve blocks of the cervical zygapophysial joints', revue: 'Anesthesiology', annee: '2012', doi: '10.1097/ALN.0b013e3182605e11', pmid: '22728783', type: 'étude de précision' },
    { auteurs: 'Siegenthaler A, et al.', titre: 'Ultrasound anatomy of the nerves supplying the cervical zygapophyseal joints: an exploratory study', revue: 'Reg Anesth Pain Med', annee: '2011', type: 'anatomie' },
    { auteurs: 'Finlayson RJ, Etheridge JP, Vieira L, Gupta G, Tran DQ', titre: 'A randomized comparison between ultrasound- and fluoroscopy-guided third occipital nerve block', revue: 'Reg Anesth Pain Med', annee: '2013;38(3):212-7', pmid: '23558370', type: 'ECR' },
    { auteurs: 'Finlayson RJ, Etheridge JP, Tiyaprasertkul W, et al.', titre: 'A randomized comparison between ultrasound- and fluoroscopy-guided C7 medial branch block', revue: 'Reg Anesth Pain Med', annee: '2015', pmid: '25478757', type: 'ECR' },
    { auteurs: 'Stogicza AR, et al.', titre: 'A comparison of precision and safety using three recognized ultrasound-guided approaches to cervical medial branch blocks: a cadaver study', revue: 'Pain Physician', annee: '2024', pmid: '38285047', type: 'étude cadavérique' },
    { auteurs: '—', titre: 'Prospective evaluation of the safety of ultrasound-guided cervical medial branch blocks using the in-plane technique', revue: '—', annee: '2024', pmid: '38508589', type: 'cohorte prospective', note: '500 patients, 2 308 niveaux : vaisseaux évités 8,2 %, effraction vasculaire 0,52 %, complications mineures 0,13 %.' },
    { auteurs: '—', titre: 'Can ultrasound-guided medial branch blocks be used to select patients for cervical facet joint radiofrequency neurotomy? A matched retrospective cohort validation study', revue: 'Pain Med', annee: '2024;25(11):671-4', doi: '10.1093/pm/pnae054', pmid: '38937279', type: 'cohorte appariée' },
    { auteurs: 'Manchikanti L, et al.', titre: 'Assessment of prevalence of cervical facet joint pain with diagnostic cervical medial branch blocks: analysis based on chronic pain model', revue: 'Pain Physician', annee: '2020', pmid: '33185369', type: 'étude de prévalence', note: 'Prévalence 49,3 % ; faux positifs des blocs simples 25,6 %.' },
    { auteurs: '—', titre: 'Ultrasound-guided radiofrequency neurotomy in cervical spine: sonoanatomic study of a new technique in cadavers', revue: 'Clin Radiol', annee: '2008', pmid: '18929038', type: 'étude cadavérique', note: 'Faisabilité de la neurotomie échoguidée, avec vérification radioscopique du positionnement.' },
    { auteurs: 'Hellinga J, et al.', titre: 'Cervical facet pain: degenerative alterations and whiplash-associated disorder (practice guideline)', revue: 'Pain Pract', annee: '2025', doi: '10.1111/papr.70005', type: 'recommandation' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [
    { titre: 'Ultrasound-guided third occipital nerve and cervical medial branch nerve blocks', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-third-occipital-nerve-and-cervical-medial-branch-nerve-blocks/', note: 'sono-anatomie des piliers, comptage, cibles' },
    { titre: 'Third occipital nerve & cervical medial branch block', source: 'USRA (usra.ca)', url: 'https://usra.ca/pain-medicine/specific-blocks/head-neck/occipitalnerve.php', note: 'coupes commentées et trajets d\'aiguille' },
    { titre: 'How I do it: ultrasound-guided cervical medial branch block', source: 'ASRA Pain Medicine', url: 'https://asra.com/news-publications/asra-updates/blog-landing/legacy-b-blog-posts/2019/08/06/how-i-do-it-ultrasound-guided-cervical-medial-branch-block', note: 'description pas à pas par un praticien, limites de la technique' },
  ],

  scenes: [
    {
      id: 'cmb-piliers-long', section: 'sonoanatomie', titre: 'Coupe longitudinale coronale — colonne des piliers « en dents de scie » et comptage',
      legende: 'Décubitus latéral, sonde coronale sur la face latérale du cou. Les **sommets** sont les articulations zygapophysaires, les **creux** le milieu (waist) des piliers : c\'est là que croise la branche médiale, et c\'est la cible. Comptage depuis la lame de C2 (à gauche), à confirmer par une seconde méthode (C7 sans tubercule antérieur, artère vertébrale entrant en C6). Rameaux de l\'artère cervicale profonde à chercher au Doppler avant chaque ponction.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Longitudinale coronale, face latérale du cou', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 108 L0 112 Z', label: 'Trapèze / splénius', at: [92, 92], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 112], [640, 108]], width: 1.4 });
        S.muscle({ path: 'M0 112 L640 108 L640 196 L0 208 Z', label: 'Semi-épineux du cou', at: [104, 156], opacity: 0.48, small: true });
        S.bone({ path: 'M0 224 L46 216 L96 208 Q152 262 210 212 Q268 262 326 212 Q384 262 442 212 Q500 262 558 214 L640 224' });
        S.label({ x: 52, y: 196, text: 'Lame de C2', cls: 'lbl-bone', small: true, anchor: 'middle' });
        S.label({ x: 210, y: 198, text: 'C2-C3', cls: 'lbl-bone', small: true });
        S.label({ x: 326, y: 198, text: 'C3-C4', cls: 'lbl-bone', small: true });
        S.label({ x: 442, y: 198, text: 'C4-C5', cls: 'lbl-bone', small: true });
        S.label({ x: 558, y: 200, text: 'C5-C6', cls: 'lbl-bone', small: true });
        S.nerve({ x: 268, y: 234, r: 5 });
        S.nerve({ x: 384, y: 234, r: 5 });
        S.nerve({ x: 500, y: 234, r: 5 });
        S.label({ x: 152, y: 276, text: 'Masse lat. C2', cls: 'lbl-bone', small: true });
        S.label({ x: 268, y: 276, text: 'Pilier C3', cls: 'lbl-bone', small: true });
        S.label({ x: 384, y: 276, text: 'Pilier C4', cls: 'lbl-bone', small: true });
        S.label({ x: 500, y: 276, text: 'Pilier C5', cls: 'lbl-bone', small: true });
        S.label({ x: 330, y: 312, text: 'Creux (waist) = cible des branches médiales', cls: 'lbl-target', small: true });
        S.artery({ x: 442, y: 176, r: 6, label: 'A. cervicale profonde', lx: 560, ly: 160, anchor: 'end', lead: [448, 174], small: true });
      },
    },
    {
      id: 'cmb-transverse', section: 'technique', titre: 'Branche médiale — coupe transversale du pilier, aiguille dans le plan de postérieur en antérieur',
      legende: 'Après le comptage, rotation de la sonde de 90° sur le niveau marqué. L\'aiguille progresse dans le plan jusqu\'au **contact osseux franc** au sommet du plateau du pilier, puis recule de 1 mm. **0,3–0,5 mL seulement** : un dôme plaqué contre l\'os. En avant du plateau : le foramen transversaire et l\'artère vertébrale — l\'aiguille n\'y va jamais.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Postérieur', right: 'Antérieur' }).probeInfo({ plan: 'Transversale sur le pilier articulaire', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 104 L0 110 Z', label: 'Trapèze / splénius', at: [438, 90], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 110], [640, 104]], width: 1.4 });
        S.muscle({ path: 'M0 110 L640 104 L640 180 L0 214 Z', label: 'Semi-épineux du cou', at: [110, 158], opacity: 0.48, small: true });
        S.bone({ path: 'M20 306 Q120 268 200 248 L286 232 Q368 224 428 242 L462 268 Q486 302 496 344', label: 'Pilier articulaire (plateau)', at: [200, 330], small: true, ldy: 0 });
        S.artery({ x: 232, y: 206, r: 6, label: 'A. cervicale profonde', lx: 128, ly: 194, anchor: 'end', lead: [226, 205], small: true });
        S.nerve({ x: 366, y: 218, r: 5, label: 'Branche médiale', lx: 452, ly: 186, anchor: 'start', lead: [371, 216] });
        S.artery({ x: 566, y: 296, r: 17, label: 'A. vertébrale (foramen)', lx: 566, ly: 344, small: true });
        S.nerve({ x: 508, y: 262, r: 7, label: 'Racine', lx: 540, ly: 244, anchor: 'start', lead: [514, 260], small: true });
        S.needle({ from: [0, 96], to: [358, 216], label: '25 G écho-visible — contact osseux' });
        /* dôme plaqué contre l'os, percé autour de la branche médiale pour ne pas la masquer */
        S.spreadPath({ path: 'M338 218 A30 13 0 1 1 398 218 A30 13 0 1 1 338 218 Z M358 218 A8 8 0 1 0 374 218 A8 8 0 1 0 358 218 Z', at: [286, 176], label: '0,3–0,5 mL' });
      },
    },
    {
      id: 'ton-c2c3', section: 'technique', titre: 'Nerf occipital III — face latérale de l\'articulation C2-C3',
      legende: 'Le TON est le seul nerf de la série directement visible (≈ 2 mm), croisant la face latérale de l\'interligne C2-C3 — à son niveau, juste au-dessus ou juste au-dessous. Aiguille dans le plan, de caudal en crânial, pointe amenée **à côté** du nerf contre l\'os. 0,5 mL suffisent. Prévenir de l\'ataxie transitoire, quasi constante et attendue.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Longitudinale coronale sur C2-C3', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 106 L0 112 Z', label: 'Splénius / trapèze', at: [96, 92], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 112], [640, 106]], width: 1.4 });
        S.muscle({ path: 'M0 112 L640 106 L640 194 L0 206 Z', label: 'Semi-épineux de la tête', at: [112, 130], opacity: 0.48, small: true });
        S.bone({ path: 'M0 226 L60 214 Q120 198 186 196 Q252 200 300 232 Q360 268 420 220 Q484 266 546 220 L640 230' });
        S.label({ x: 26, y: 234, text: 'Masse latérale de C2', cls: 'lbl-bone', small: true, anchor: 'start' });
        S.label({ x: 420, y: 200, text: 'C3-C4', cls: 'lbl-bone', small: true });
        S.label({ x: 358, y: 296, text: 'Pilier C3', cls: 'lbl-bone', small: true });
        S.nerve({ x: 214, y: 182, r: 6, label: 'Nerf occipital III (TON)', lx: 302, ly: 158, anchor: 'end', lead: [222, 178] });
        S.label({ x: 200, y: 254, text: 'Articulation C2-C3', cls: 'lbl-target', small: true });
        S.needle({ from: [640, 118], to: [234, 184], label: '25 G — de caudal en crânial' });
        S.spreadPath({ path: 'M182 186 A30 13 0 1 1 242 186 A30 13 0 1 1 182 186 Z M206 182 A8 8 0 1 0 222 182 A8 8 0 1 0 206 182 Z', at: [318, 212], label: '0,5 mL' });
      },
    },
  ],

  checklist: [
    'Comptage validé par **deux méthodes concordantes** (C2 en descendant, C7 sans tubercule antérieur, artère vertébrale entrant en C6) et niveau marqué au feutre',
    'Protocole diagnostique défini à l\'avance : bloc simple ou comparatif, AL utilisé et sa durée d\'action, seuil de positivité retenu (≥ 80 % ou 100 %)',
    'Agenda horaire de soulagement remis au patient **avant** le geste',
    'Doppler couleur repassé à chaque niveau, contact osseux obligatoire avant toute injection',
    'Volume strictement limité à 0,3–0,5 mL par niveau',
    'Aucun corticoïde particulaire ; dexaméthasone seule si corticoïde jugé utile',
    'Gestion de l\'anticoagulation selon la classe **intermédiaire** (branches médiales cervicales), décision tracée',
    'Patient prévenu de l\'ataxie transitoire après bloc du TON et de l\'absence de conduite le jour même',
    'Surveillance 20–30 min avec évaluation motrice et sensitive des membres supérieurs',
  ],
});
