/* Coupes anatomiques recalées — nerf médian au canal carpien (format : .claude/skills/echo-anatomie/SKILL.md) */
(function () {
  const SC = [[0,125],[250,130],[500,125],[750,110],[1000,120]];
  const RET = [[262,197],[300,178],[350,165],[400,160],[450,162],[500,174],[560,195],[620,213],[700,233],[790,248]];
  const PLANCHER = [[0,215],[60,208],[110,222],[150,250],[200,232]].concat(RET, [[815,215],[840,192],[870,183],[910,188],[950,210],[1000,235]]);
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  ECHO.anat['nerf-median-canal-carpien'] = [{
    fig: 'img/nerf-median-canal-carpien/echo-1.jpg',
    valide: false,
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
  }];
})();
