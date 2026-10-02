/* Coupes anatomiques recalées — nerf occipital III et branches médiales cervicales (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : colonne des piliers en coupe coronale (Kucukbingoz et Yılmaz, Diagnostics 2026, fig. 1).
   echo-2 : panneaux b et c de Wong et Rajarathinam (Can J Pain 2023, fig. 3) — deux coupes dans le même cadre, séparées par une marge blanche. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };

  /* ---------- echo-1 : photographie d'écran, bord supérieur oblique ---------- */
  const PEAU1_HAUT = [[0,2],[250,9],[500,16],[750,25],[1000,36]];
  const PEAU1_BAS = [[0,18],[250,25],[500,32],[750,41],[1000,52]];
  const SC1 = [[0,90],[250,93],[500,100],[750,104],[1000,106]];
  const CORTEX1 = [[0,214],[50,207],[100,206],[150,216],[190,234],[215,256],[240,266],[265,258],[300,247],[350,233],[400,225],[425,214],[445,197],[458,199],[475,215],[500,236],[530,247],[560,250],[600,247],[650,243],[690,238],[725,234],[760,240],[790,250],[815,256],[845,255],[900,252],[950,247],[1000,242]];

  /* ---------- echo-2, panneau b (x 0–472) ---------- */
  const SCB = [[0,78],[100,76],[200,72],[300,71],[350,74],[400,63],[472,60]];
  const FB = [[0,128],[40,131],[60,131],[100,134],[150,134],[200,133],[250,133],[290,130],[330,125],[370,118],[400,113],[440,106],[472,102]];
  const CORTEXB = [[0,160],[20,148],[40,136],[60,133],[80,138],[100,152],[125,172],[150,188],[175,195],[200,186],[225,175],[250,169],[275,173],[300,186],[325,195],[350,196],[375,186],[400,173],[425,166],[450,162],[472,160]];
  /* ---------- echo-2, panneau c (x 523–1000) ---------- */
  const SCC = [[523,62],[600,62],[700,60],[755,66],[800,68],[850,66],[900,70],[950,70],[1000,70]];
  const LSC_BAS = [[523,90],[600,91],[660,89],[700,84],[730,78],[755,68]];
  const SEPC = [[523,118],[600,120],[640,118],[700,112],[760,106],[800,102],[820,100]];
  const CORTEXC = [[523,250],[560,238],[600,222],[630,208],[660,192],[690,174],[720,157],[750,144],[790,126],[810,110],[820,101],[832,106],[850,126],[870,142],[895,152],[925,156],[950,146],[975,128],[1000,112]];

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
    valide: false,
    vb: [1000, 361], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Supposition — plans musculaires du panneau (c), à gauche du sommet : les auteurs ne posent que les sigles LS (élévateur de la scapula) et SC (semi-épineux de la tête) ; la limite profonde du semi-épineux y suit une cloison fine (y ≈ 100–120) et la couche comprise entre elle et l\'os n\'est pas nommée. Panneau (b) : interfaces fasciales visibles, muscles attribués d\'après la position des sigles.',
      'Certain — orientation : mentions « superior » à gauche et « inferior » à droite incrustées par les auteurs sur les deux panneaux ; concordante avec le schéma apparié.',
      'Certain — identité des reliefs : sommets = articulations (C2-C3, C3-C4), creux = taille du pilier où passe la branche médiale, nerf occipital III au sommet de C2-C3, « drop-off » de la ligne osseuse au-dessus de C2-C3 — schémas de lecture des auteurs (encarts bleus, non recalés au pixel : ils servent aux positions relatives) et texte de l\'article.',
      'Probable — tracé de la corticale : panneaux de 266 px ; la ligne osseuse est nette aux sommets et au fond des creux, faible sur les pentes.',
      'Supposition — les auteurs nomment « C3-C4 MB » la branche du second creux du panneau (b), qui correspond à la taille du pilier de C4 : libellé non repris, branche dessinée sans numéro.',
      'Extrapolé — nerf occipital III et branches médiales : non visibles, dessinés là où les auteurs les placent sur leurs schémas. Corticale au-dessus du « drop-off » (pointillé) : elle plonge hors signal. Bas des deux panneaux (bandeau de l\'échographe, encarts) : sans anatomie.',
    ],
    structures: [
      /* panneau b */
      { id: 'peau-b', tissu: 'peau', haut: [[0,0],[472,0]], bas: [[0,8],[472,8]] },
      { id: 'gr-b', tissu: 'graisse', haut: [[0,8],[472,8]], bas: SCB },
      { id: 'ls-b', tissu: 'muscle', haut: SCB, bas: FB },
      { id: 'semi-b', tissu: 'muscle', haut: FB, bas: CORTEXB },
      { id: 'mb-b1', tissu: 'nerf', contour: ovale(170, 188, 9, 5), extrapole: true },
      { id: 'mb-b2', tissu: 'nerf', contour: ovale(340, 189, 9, 5), extrapole: true },
      { id: 'os-b', tissu: 'os', cortex: CORTEXB },
      /* panneau c */
      { id: 'peau-c', tissu: 'peau', haut: [[523,0],[1000,0]], bas: [[523,8],[1000,8]] },
      { id: 'gr-c', tissu: 'graisse', haut: [[523,8],[1000,8]], bas: SCC },
      { id: 'ls-c', tissu: 'muscle', haut: SCC.slice(0, 4), bas: LSC_BAS },
      { id: 'semi-c', tissu: 'muscle', haut: LSC_BAS.concat(SCC.slice(4)), bas: SEPC.concat(CORTEXC.slice(11)) },
      { id: 'prof-c', tissu: 'muscle', haut: SEPC, bas: CORTEXC.slice(0, 11), extrapole: true },
      { id: 'ton', tissu: 'nerf', contour: ovale(820, 94, 9, 5), extrapole: true },
      { id: 'mb-c', tissu: 'nerf', contour: ovale(910, 149, 9, 5), extrapole: true },
      { id: 'os-c', tissu: 'os', cortex: CORTEXC, vu: [5, 18] },
    ],
    labels: [
      { s: 'ls-b', x: 150, y: 100, dx: -20, dy: -72, text: 'Élévateur de la scapula', vue: 'anat' },
      { s: 'gr-b', x: 300, y: 45, dx: 85, dy: -17, text: 'Tissu sous-cutané', vue: 'anat' },
      { s: 'os-b', x: 252, y: 172, dx: 58, dy: 56, text: 'Articulation C3-C4' },
      { s: 'semi-b', x: 445, y: 135, dx: -35, dy: 127, text: 'Semi-épineux de la tête', vue: 'anat' },
      { s: 'os-b', x: 58, y: 136, dx: 40, dy: 126, text: 'Articulation C2-C3', vue: 'anat' },
      { s: 'mb-b1', x: 170, y: 190, dx: 70, dy: 110, text: 'Branche médiale C3', vue: 'anat' },
      { s: 'ton', x: 820, y: 95, dx: -180, dy: -67, text: 'Nerf occipital III', vue: 'anat' },
      { s: 'semi-c', x: 900, y: 105, dx: -21, dy: -77, text: 'Semi-épineux de la tête', vue: 'anat' },
      { s: 'os-c', x: 690, y: 174, dx: -50, dy: 61, text: '« Drop-off »' },
      { s: 'os-c', x: 822, y: 108, dx: -22, dy: 127, text: 'Articulation C2-C3' },
      { s: 'mb-c', x: 910, y: 151, dx: -5, dy: 124, text: 'Branche médiale C3', vue: 'anat' },
    ],
  }];
})();
