/* Coupes anatomiques recalées — nerf occipital III et branches médiales cervicales (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : colonne des piliers en coupe coronale (Kucukbingoz et Yılmaz, Diagnostics 2026, fig. 1).
   echo-2 : panneau c (articulation C2-C3) de la planche de Wong et Rajarathinam (Can J Pain 2023, fig. 3) — `crop` propre à la coupe,
   la planche à deux panneaux reste affichée entière dans la fiche. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };

  /* ---------- echo-1 : photographie d'écran, bord supérieur oblique ---------- */
  const PEAU1_HAUT = [[0,2],[250,9],[500,16],[750,25],[1000,36]];
  const PEAU1_BAS = [[0,18],[250,25],[500,32],[750,41],[1000,52]];
  const SC1 = [[0,90],[250,93],[500,100],[750,104],[1000,106]];
  const CORTEX1 = [[0,214],[50,207],[100,206],[150,216],[190,234],[215,256],[240,266],[265,258],[300,247],[350,233],[400,225],[425,214],[445,197],[458,199],[475,215],[500,236],[530,247],[560,250],[600,247],[650,243],[690,238],[725,234],[760,240],[790,250],[815,256],[845,255],[900,252],[950,247],[1000,242]];

  /* ---------- echo-2, panneau c seul (repère du crop de la coupe) ---------- */
  const SCC = [[0,130],[161,130],[371,126],[486,138],[581,143],[686,138],[790,147],[895,147],[1000,147]];
  const LSC_BAS = [[0,189],[161,191],[287,187],[371,176],[434,164],[486,138]];
  /* cloison fine qui passe en pont au-dessus du sommet osseux et rejoint la corticale sur son versant caudal */
  const SEPC = [[0,247],[161,252],[245,247],[371,235],[497,222],[581,214],[623,211],[665,225],[710,260],[740,288]];
  /* corticale : bord supérieur de la bande brillante de la pente crâniale, sommet au toit du cône d'ombre (y ≈ 256), fond du creux à y ≈ 333 */
  const CORTEXC = [[0,524],[78,499],[161,466],[224,436],[287,403],[350,370],[413,338],[476,310],[540,292],[590,275],[620,262],[640,256],[665,259],[700,274],[740,288],[775,305],[805,325],[840,333],[872,328],[900,306],[948,270],[1000,240]];

  ECHO.anat['troisieme-nerf-occipital-branches-mediales-cervicales'] = [{
    fig: 'img/troisieme-nerf-occipital-branches-mediales-cervicales/echo-1.jpg',
    valide: false,
    vb: [1000, 554], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Supposition — numérotation des niveaux : les lettres C3 à C6 des auteurs sont posées sous les convexités, alors que leurs étoiles (cibles, « waist of each articular pillar » dans la légende d\'origine) sont dans les creux, entre deux lettres. Selon la lecture classique (sommet = articulation, creux = taille du pilier — Wong et Rajarathinam, seconde figure de la fiche), une lettre placée sous un sommet désigne un interligne et non une vertèbre : on ne peut pas dire quelle branche médiale vise chaque étoile. Aucun niveau n\'est reporté sur la planche.',
      'Certain — orientation : crânial à gauche (C3), caudal à droite (C6), d\'après les lettres des auteurs ; concordante avec le schéma apparié.',
      'Certain — cibles : les trois creux marqués d\'une étoile par les auteurs (taille du pilier articulaire).',
      'Probable — corticale : photographie d\'écran, bande hyperéchogène épaisse et saturée ; le tracé suit son bord superficiel. Sommet net à x ≈ 445 (cône d\'ombre franc au-dessous), reliefs plus doux à x ≈ 80 et x ≈ 725.',
      'Supposition — plans superficiels : limite graisse / muscles placée au premier plan hypoéchogène strié (y ≈ 90–105) ; les muscles ne sont ni nommés par les auteurs ni séparables avec certitude — une seule couche est dessinée.',
      'Extrapolé — branches médiales : non visibles (les étoiles les recouvrent), dessinées au fond de chaque creux, au contact de l\'os. Profondeur de l\'os (cône d\'ombre) : les échos sous la corticale sont des réverbérations.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU1_HAUT, bas: PEAU1_BAS },
      { id: 'sc', tissu: 'graisse', haut: PEAU1_BAS, bas: SC1 },
      { id: 'muscles', tissu: 'muscle', haut: SC1, bas: CORTEX1 },
      { id: 'mb1', tissu: 'nerf', contour: ovale(238, 258, 11, 6), extrapole: true },
      { id: 'mb2', tissu: 'nerf', contour: ovale(558, 243, 11, 6), extrapole: true },
      { id: 'mb3', tissu: 'nerf', contour: ovale(813, 249, 11, 6), extrapole: true },
      /* points hors cadre aux deux bouts : le calque de validation referme le tracé de la corticale par une droite */
      { id: 'piliers', tissu: 'os', cortex: [[-40,640],[-40,214]].concat(CORTEX1, [[1040,242],[1040,640]]) },
    ],
    labels: [
      { s: 'sc', x: 300, y: 72, dx: -160, dy: -12, text: 'Tissu sous-cutané' },
      { s: 'muscles', x: 700, y: 150, dx: 0, dy: -88, text: 'Plans musculaires (non nommés)' },
      { s: 'piliers', x: 447, y: 203, dx: 53, dy: 144, text: 'Sommet : articulation zygapophysaire' },
      { s: 'piliers', x: 238, y: 270, dx: -48, dy: 130, text: 'Creux : taille du pilier' },
      { s: 'mb3', x: 813, y: 252, dx: -13, dy: 148, text: 'Branche médiale (cible)', vue: 'anat' },
      { s: 'piliers', x: 600, y: 400, dx: -80, dy: 80, text: 'Piliers articulaires', vue: 'anat' },
      { s: 'piliers', x: 455, y: 415, dx: 15, dy: 70, text: 'Ombre acoustique sous le sommet', vue: 'echo' },
    ],
  }, {
    fig: 'img/troisieme-nerf-occipital-branches-mediales-cervicales/echo-2.jpg',
    crop: [0.665, 0.001, 0.335, 0.120], panneau: 'c (articulation C2-C3)',
    valide: false,
    vb: [1000, 493], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Supposition — plans musculaires à gauche du sommet : les auteurs ne posent que les sigles LS (élévateur de la scapula) et SC (semi-épineux de la tête) ; la limite profonde du semi-épineux y suit une cloison fine (y ≈ 210–250) qui passe en pont au-dessus du sommet osseux ; le plan compris entre elle et l\'os (épais à gauche, réduit à une lame de ≈ 1 mm sur l\'articulation) n\'est pas nommé — dessiné en « plan non attribué ».',
      'Certain — orientation : mentions « superior » à gauche et « inferior » à droite incrustées par les auteurs (bandeau du panneau, visible sur la planche entière) ; concordante avec le schéma apparié.',
      'Certain — identité des reliefs : sommet = articulation C2-C3, nerf occipital III au sommet de l\'articulation, creux caudal = taille du pilier de C3 où passe la branche médiale C3, « drop-off » de la ligne osseuse au-dessus de C2-C3 — schéma de lecture des auteurs (encart bleu, non recalé au pixel : il sert aux positions relatives) et texte de l\'article.',
      'Probable — tracé de la corticale : panneau de 268 px ; bande brillante nette sur la pente crâniale et au fond du creux, liseré gris au toit du cône d\'ombre pour le sommet (y ≈ 256). La ligne fine située ≈ 1 mm plus haut (y ≈ 212) est lue comme une cloison, pas comme la corticale : si c\'est elle le relief osseux, le sommet est à remonter d\'autant.',
      'Extrapolé — nerf occipital III et branche médiale C3 : non visibles, dessinés là où les auteurs les placent sur leur schéma (le nerf occipital III au contact du sommet de l\'articulation, dans la lame non attribuée). Corticale au-dessus du « drop-off » (pointillé) : elle plonge hors signal.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,17],[1000,17]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,17],[1000,17]], bas: SCC },
      { id: 'ls', tissu: 'muscle', haut: SCC.slice(0, 4), bas: LSC_BAS },
      { id: 'semi', tissu: 'muscle', haut: LSC_BAS.concat(SCC.slice(4)), bas: SEPC.concat(CORTEXC.slice(15)) },
      { id: 'prof', tissu: 'indetermine', haut: SEPC, bas: CORTEXC.slice(0, 15) },
      { id: 'ton', tissu: 'nerf', contour: ovale(640, 244, 17, 9), extrapole: true },
      { id: 'mb', tissu: 'nerf', contour: ovale(838, 322, 17, 9), extrapole: true },
      { id: 'os', tissu: 'os', cortex: CORTEXC, vu: [5, 21] },
    ],
    labels: [
      { s: 'ls', x: 150, y: 160, dx: 20, dy: -115, text: 'Élévateur de la scapula', vue: 'anat' },
      { s: 'ton', x: 640, y: 242, dx: -140, dy: -197, text: 'Nerf occipital III', vue: 'anat' },
      { s: 'semi', x: 800, y: 220, dx: 35, dy: -175, text: 'Semi-épineux de la tête', vue: 'anat' },
      { s: 'prof', x: 330, y: 300, dx: -180, dy: 0, text: 'Plan non attribué', vue: 'anat' },
      { s: 'os', x: 350, y: 372, dx: -100, dy: 70, text: '« Drop-off »' },
      { s: 'os', x: 642, y: 264, dx: -42, dy: 178, text: 'Articulation C2-C3' },
      { s: 'mb', x: 838, y: 326, dx: 22, dy: 76, text: 'Branche médiale C3', vue: 'anat' },
    ],
  }];
})();
