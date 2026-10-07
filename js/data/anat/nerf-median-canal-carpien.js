/* Coupes anatomiques recalées — nerf médian au canal carpien (format : .claude/skills/echo-anatomie/SKILL.md) */
(function () {
  const SC = [[0,125],[250,130],[500,125],[750,110],[1000,120]];
  const RET = [[262,197],[300,178],[350,165],[400,160],[450,162],[500,174],[560,195],[620,213],[700,233],[790,248]];
  const PLANCHER = [[0,215],[60,208],[110,222],[150,250],[200,232]].concat(RET, [[815,215],[840,192],[870,183],[910,188],[950,210],[1000,235]]);
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* ---------- echo-3, panneau B (hydrodissection, Suhaimi et al.) : moitié proximale seule, `crop` propre à la coupe ---------- */
  const arc = (cx, cy, rx, ry, rot, t0, t1, n) => { const o = [], a = rot * Math.PI / 180; for (let i = 0; i <= n; i++) { const t = (t0 + (t1 - t0) * i / n) * Math.PI / 180, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const TCL_HAUT = [[0,60],[300,80],[600,105],[915,140]], TCL_BAS = [[0,125],[300,145],[600,175],[905,200]];
  const TENDONS_HAUT = [[0,462],[100,462],[150,445],[255,430],[330,440],[385,400],[450,376],[700,345],[900,316],[1000,303]];
  ECHO.anat['nerf-median-canal-carpien'] = [{
    fig: 'img/nerf-median-canal-carpien/echo-1.jpg',
    valide: true,
    vb: [1000, 611], orient: { left: 'Radial', right: 'Ulnaire' },
    lecture: [
      'Certain — orientation et identité des repères : scaphoïde à gauche (radial), pisiforme à droite (ulnaire), artère ulnaire anéchogène en surface du rétinaculum, nerf médian sous le rétinaculum, long fléchisseur du pouce en dessous — d\'après le panneau 2B, corrigé annoté par les auteurs (non recalé au pixel sur 2A : il sert aux positions relatives, pas au tracé).',
      'Probable — nerf médian : ovale aplati en nid d\'abeilles entre le rétinaculum et le liseré clair sous-jacent.',
      'Supposition — individualisation des tendons fléchisseurs : image de 293 px ; deux tendons superficiels et deux profonds sont tracés là où un ovale distinct est visible, les autres ne sont pas séparables.',
      'Supposition — nerf ulnaire non individualisable à cette résolution : placé en dedans de l\'artère d\'après le corrigé des auteurs (pointillé).',
      'Probable — croissant noir au-dessus du pisiforme = fléchisseur ulnaire du carpe rendu hypoéchogène par anisotropie ; plage sombre au-dessus du scaphoïde = fléchisseur radial du carpe, même mécanisme.',
      'Extrapolé — faces profondes du scaphoïde, du pisiforme et du lunatum (cône d\'ombre) ; la colonne noire entre scaphoïde et canal est une ombre de bord, laissée sans anatomie. Gaines synoviales (bourse ulnaire commune, bourse radiale du long fléchisseur du pouce) et loge de Guyon : d\'après la coupe anatomique de référence fournie par Mat, non visibles ici.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,20],[1000,20]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,20],[1000,20]], bas: SC },
      { id: 'loge', tissu: 'conjonctif', haut: SC, bas: PLANCHER },
      { id: 'canal', tissu: 'conjonctif', contour: [[262,200],[300,180],[400,163],[500,176],[600,208],[700,234],[765,252],[772,330],[745,430],[660,520],[560,502],[450,476],[350,483],[290,495],[268,420],[262,300]] },
      /* gaines synoviales (bourse ulnaire commune aux 8 fléchisseurs des doigts, bourse radiale du long fléchisseur du pouce) et loge de Guyon :
         non visibles à cette résolution, dessinées d'après la coupe anatomique de référence fournie par Mat (niveau distal, transposé) */
      { id: 'gaine-commune', tissu: 'liquide', contour: [[392,240],[470,222],[560,238],[665,240],[725,300],[730,380],[690,428],[600,430],[510,412],[445,395],[410,330]], fin: true, extrapole: true },
      { id: 'gaine-fpl', tissu: 'liquide', contour: ovale(335, 300, 64, 60), fin: true, extrapole: true },
      { id: 'guyon', tissu: 'conjonctif', contour: [[585,112],[625,102],[690,118],[725,150],[720,188],[680,196],[625,190],[590,160]], extrapole: true },
      { id: 'fcr', tissu: 'tendon', contour: [[25,170],[50,145],[100,135],[150,145],[172,172],[150,198],[95,205],[45,198]] },
      { id: 'fcu', tissu: 'tendon', contour: [[805,210],[822,160],[870,135],[930,130],[985,150],[990,192],[950,197],[910,178],[870,174],[838,186],[815,228]] },
      { id: 'a-ulnaire', tissu: 'artere', contour: ovale(625, 140, 27, 25) },
      { id: 'n-ulnaire', tissu: 'nerf', contour: ovale(692, 168, 24, 15, 15), extrapole: true },
      { id: 'retinaculum', tissu: 'ligament', ligne: RET, ep: 11 },
      { id: 'median', tissu: 'nerf', contour: [[285,215],[310,193],[370,181],[440,181],[485,196],[497,216],[470,235],[400,243],[330,242],[295,232]] },
      { id: 'fpl', tissu: 'tendon', contour: ovale(335, 300, 56, 52) },
      { id: 'fds', tissu: 'tendon', contour: ovale(460, 268, 60, 34, -8) },
      { id: 'fds2', tissu: 'tendon', contour: ovale(610, 278, 45, 27, 8) },
      { id: 'fdp', tissu: 'tendon', contour: ovale(512, 358, 56, 40, 10) },
      { id: 'fdp2', tissu: 'tendon', contour: ovale(655, 365, 62, 50, 5), extrapole: true },
      { id: 'scaphoide', tissu: 'os', contour: [[-40,225],[0,214],[60,207],[110,221],[150,258],[172,310],[188,350],[170,430],[90,480],[-40,470]], vu: [1, 6] },
      { id: 'pisiforme', tissu: 'os', contour: [[800,240],[828,197],[870,183],[910,188],[950,208],[985,250],[975,320],[900,360],[830,335],[798,285]], vu: [0, 4] },
      { id: 'lunatum', tissu: 'os', cortex: [[240,611],[262,530],[290,493],[350,481],[400,478],[450,474],[500,482],[545,502],[585,545],[610,611]], vu: [2, 6] },
    ],
    labels: [
      { s: 'fcr', x: 95, y: 170, dx: 60, dy: -128, text: 'Fléchisseur radial du carpe' },
      { s: 'a-ulnaire', x: 625, y: 140, dx: -60, dy: -100, text: 'Artère ulnaire' },
      { s: 'fcu', x: 900, y: 152, dx: -60, dy: -112, text: 'Fléchisseur ulnaire du carpe' },
      { s: 'retinaculum', x: 410, y: 160, dx: -120, dy: -75, text: 'Rétinaculum des fléchisseurs' },
      { s: 'n-ulnaire', x: 692, y: 168, dx: 160, dy: -83, text: 'Nerf ulnaire', vue: 'echo' },
      { s: 'guyon', x: 692, y: 168, dx: 160, dy: -83, text: 'Loge de Guyon (n. et a. ulnaires)', vue: 'anat' },
      { s: 'scaphoide', x: 80, y: 250, dx: 5, dy: 140, text: 'Scaphoïde' },
      { s: 'median', x: 320, y: 218, dx: -190, dy: 237, text: 'Nerf médian' },
      { s: 'fpl', x: 335, y: 318, dx: 105, dy: 227, text: 'Long fléchisseur du pouce', vue: 'echo' },
      { s: 'gaine-fpl', x: 335, y: 318, dx: 105, dy: 227, text: 'Long fléch. du pouce (gaine radiale)', vue: 'anat' },
      { s: 'gaine-commune', x: 600, y: 425, dx: -390, dy: 178, text: 'Gaine synoviale commune (8 tendons)', vue: 'anat' },
      { s: 'fds', x: 480, y: 268, dx: 395, dy: 177, text: 'Fléch. superficiels' },
      { s: 'fdp', x: 530, y: 362, dx: 345, dy: 138, text: 'Fléch. profonds' },
      { s: 'pisiforme', x: 885, y: 250, dx: 25, dy: 135, text: 'Pisiforme' },
      { s: 'lunatum', x: 520, y: 497, dx: 240, dy: 88, text: 'Lunatum' },
    ],
  }, {
    fig: 'img/nerf-median-canal-carpien/echo-3.jpg',
    crop: [0, 0.527, 0.56, 0.30], panneau: 'B, moitié proximale (nerf, rétinaculum, pointe de l\'aiguille)',
    valide: true,
    vb: [1000, 550], orient: { left: 'Proximal', right: 'Distal (thénar)' },
    lecture: [
      'Supposition — plan de coupe : oblique, propre à la technique des auteurs (plan de la première articulation carpo-métacarpienne conservé pendant la translation médiale de la sonde) ; ce n\'est ni la coupe transversale du schéma apparié (radial / ulnaire) ni un grand axe strict. Les axes de l\'image et du schéma ne sont pas comparables, et l\'abord (distal → proximal, depuis la base du pouce) n\'est pas l\'abord ulnaire transversal décrit dans la fiche.',
      'Certain — rétinaculum des fléchisseurs (aplat vert) et nerf médian (aplat jaune) : désignés par les auteurs. Leurs aplats sont des formes géométriques approximatives (rectangle, ellipse) qui masquent les vraies limites : le tracé reprend leurs contours, pas une interface mesurée.',
      'Certain — orientation et aiguille : mention « Thenar muscle » à droite (hors du cadre de la coupe, visible sur le panneau entier) et légende d\'origine « oblique distal-to-proximal trajectory » ; l\'aiguille, dans le plan, vient de la droite, passe sous le rétinaculum et sa pointe est au bord distal et profond du nerf (x ≈ 375, y ≈ 372).',
      'Probable — injectat : plages anéchogènes continues entre le rétinaculum et le nerf, en aval du nerf sous le rétinaculum (x ≈ 480–900) et sous le nerf (x ≈ 0–380) ; la légende d\'origine décrit une diffusion « beneath the TCL and around the median nerve » sans la désigner sur l\'image. Lu comme le halo péri-neural, plan profond et plan superficiel ouverts.',
      'Probable — tendons fléchisseurs : bande échogène fibrillaire sous l\'aiguille ; les auteurs ne les désignent que sur leur figure 1. Limite profonde non visible (remplie jusqu\'au bas du cadre).',
      'Supposition — réflecteur très brillant en bas à gauche (y ≈ 500–530) : corticale d\'un os du carpe ou tendon perpendiculaire au faisceau, non identifié. Tissu à droite de l\'extrémité de l\'aplat vert : non désigné, non identifié.',
      'Extrapolé — peau et tissu sous-cutané palmaires : limite placée à l\'estime entre la ligne de sonde et l\'aplat vert (champ proche écrasé).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,8],[1000,8]], bas: [[0,45],[1000,45]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,45],[1000,45]], bas: TCL_HAUT.concat([[1000,150]]), extrapole: true },
      { id: 'injectat', tissu: 'liquide', haut: TCL_BAS.concat([[925,235]]), bas: TENDONS_HAUT.slice(0, 9).concat([[925,300]]) },
      { id: 'cote-thenar', tissu: 'indetermine', haut: [[915,140],[1000,150]], bas: [[925,300],[1000,303]] },
      { id: 'tcl', tissu: 'ligament', haut: TCL_HAUT, bas: TCL_BAS },
      { id: 'median', tissu: 'nerf', haut: arc(245, 270, 230, 88, 7, 180, 360, 10), bas: arc(245, 270, 230, 88, 7, 180, 0, 10) },
      { id: 'tendons', tissu: 'tendon', haut: TENDONS_HAUT, bas: [[0,560],[1000,560]] },
      { id: 'reflecteur', tissu: 'indetermine', ligne: [[55,518],[150,513],[250,513],[288,524]], ep: 24 },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,289],[375,372]], ep: 7 },
    ],
    labels: [
      { s: 'median', x: 150, y: 235, dx: 0, dy: -200, text: 'Nerf médian' },
      { s: 'tcl', x: 600, y: 138, dx: 40, dy: -103, text: 'Rétinaculum des fléchisseurs' },
      { s: 'injectat', x: 560, y: 285, dx: 130, dy: -40, text: 'Injectat (halo)' },
      { s: 'aiguille', x: 850, y: 310, dx: 70, dy: -62, text: 'Aiguille' },
      { s: 'injectat', x: 200, y: 400, dx: -60, dy: 0, text: 'Injectat', vue: 'anat' },
      { s: 'tendons', x: 680, y: 420, dx: 50, dy: 75, text: 'Tendons fléchisseurs (probable)' },
      { s: 'reflecteur', x: 130, y: 512, dx: 150, dy: -42, text: 'Réflecteur non identifié' },
    ],
  }];
})();
