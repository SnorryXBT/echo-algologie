/* Coupes anatomiques recalées — nerf pudendal (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Drakonaki et al., J Ultrason 2022, fig. 4A (épine ischiatique) ; corrigé = sigles des auteurs (GM, STL, SSL, IS, IPA, ovale du nerf)
            et panneau D (même coupe sans trajet), IRM du panneau C pour les rapports.
   echo-2 : même article, fig. 5A (petite incisure ischiatique, entrée du canal d'Alcock) ; « medial » inscrit sur l'image ; sonde 14L5, profondeur 9 cm. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };

  /* ---------- echo-1 : épine ischiatique ---------- */
  const DERME = [[0,48],[1000,48]];
  const FASC = [[0,310],[150,302],[300,295],[500,292],[700,292],[850,290],[1000,288]];
  const STL_H = [[0,712],[100,700],[200,678],[300,655],[400,640],[500,632],[600,632],[700,630],[800,628],[900,625],[1000,622]];
  const STL_B = [[0,738],[100,728],[200,708],[300,696],[400,680],[500,665],[600,660],[700,660],[800,655],[900,652],[1000,650]];
  const SSL_H = [[0,836],[150,856],[300,878],[450,898],[560,912],[640,930],[685,960]];
  const SSL_B = [[0,880],[150,898],[300,918],[450,938],[560,952],[640,968],[685,978]];
  const CORT = [[672,978],[700,968],[750,962],[800,958],[850,956],[900,946],[1000,932]];

  /* ---------- echo-2 : petite incisure ischiatique ---------- */
  const DERME2 = [[0,30],[1000,30]];
  const FASC2 = [[0,88],[100,84],[200,72],[300,65],[400,60],[600,60],[800,55],[1000,50]];
  const STL2_H = [[0,335],[100,334],[200,326],[300,302],[400,290],[500,290],[600,298],[700,300],[800,298],[880,300]];
  const STL2_B = [[0,360],[100,358],[200,350],[300,325],[400,318],[500,345],[600,362],[700,358],[800,340],[880,320]];
  const OI_H = [[0,600],[100,588],[200,565],[280,535],[330,524],[380,502],[420,474],[445,452]];
  const CORT2 = [[445,452],[480,420],[520,397],[560,390],[600,392],[650,398],[700,421],[750,432],[800,445],[850,470],[900,520],[1000,600]];

  ECHO.anat['nerf-pudendal'] = [{
    fig: 'img/nerf-pudendal/echo-1.jpg',
    valide: false,
    vb: [1000, 1448], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — orientation : légende d\'origine, trajet d\'aiguille « from medial to lateral » ; le pointillé entre par la gauche, donc médial à gauche, comme le schéma apparié. Concordant avec l\'IRM du panneau C (ligament sacro-épineux en dedans de l\'épine, artère en dehors du nerf).',
      'Certain — identité des structures : sigles des auteurs (GM, STL, SSL, IS, IPA) et ovale pointillé du nerf, tracés sur les plages qu\'ils désignent.',
      'Probable — ligament sacro-tubéral : bande hyperéchogène continue sous la flèche STL (pics y ≈ 630–700), qui s\'efface en dedans (x < 100). Ligament sacro-épineux : bande oblique qui rejoint la pointe de l\'épine ; son épaisseur est estimée.',
      'Probable — épine ischiatique : réflecteur à cône d\'ombre x ≈ 670–850 (pics y ≈ 958–978) ; sa continuation latérale, plus pâle, est dessinée en pointillé.',
      'Probable — artère pudendale interne : petite plage hypoéchogène sous la pointe de la flèche IPA, en dehors du nerf (contour estimé, pas de Doppler).',
      'Supposition — limite tissu sous-cutané / grand fessier : ligne continue y ≈ 290–310 ; les auteurs ne la désignent pas.',
      'Extrapolé — trajet de l\'aiguille (pointillé des auteurs) ; plans profonds sous le ligament sacro-épineux (muscle coccygien, fosse ischio-anale), non identifiables.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: FASC },
      { id: 'gm', tissu: 'muscle', haut: FASC, bas: STL_H },
      { id: 'stl', tissu: 'ligament', haut: STL_H, bas: STL_B },
      { id: 'espace', tissu: 'graisse', haut: STL_B, bas: SSL_H.concat(CORT) },
      { id: 'profond', tissu: 'indetermine', haut: SSL_B.concat([[1000,975]]), bas: [[0,1460],[1000,1460]], extrapole: true },
      { id: 'ssl', tissu: 'ligament', haut: SSL_H, bas: SSL_B },
      { id: 'artere', tissu: 'artere', contour: ovale(744, 828, 17, 15) },
      { id: 'nerf', tissu: 'nerf', contour: ovale(623, 833, 46, 26) },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[0,43],[578,805]], ep: 6, extrapole: true },
      { id: 'epine', tissu: 'os', cortex: CORT, vu: [0, 4] },
    ],
    labels: [
      { s: 'sc', x: 520, y: 200, dx: 0, dy: -140, text: 'Tissu sous-cutané (supposé)' },
      { s: 'gm', x: 760, y: 470, dx: 0, dy: -110, text: 'Grand fessier', vue: 'anat' },
      { s: 'aiguille', x: 250, y: 377, dx: -130, dy: 120, text: 'Trajet de l\'aiguille (auteurs)', vue: 'anat' },
      { s: 'stl', x: 860, y: 640, dx: -60, dy: -110, text: 'Lig. sacro-tubéral', vue: 'anat' },
      { s: 'espace', x: 380, y: 780, dx: -230, dy: 0, text: 'Espace interligamentaire (graisse)' },
      { s: 'artere', x: 746, y: 830, dx: 140, dy: -80, text: 'A. pudendale interne', vue: 'anat' },
      { s: 'nerf', x: 623, y: 845, dx: -120, dy: 250, text: 'N. pudendal', vue: 'anat' },
      { s: 'ssl', x: 420, y: 912, dx: -280, dy: 140, text: 'Lig. sacro-épineux', vue: 'anat' },
      { s: 'epine', x: 780, y: 962, dx: 60, dy: 150, text: 'Épine ischiatique', vue: 'anat' },
      { s: 'profond', x: 300, y: 1200, dx: 0, dy: 100, text: 'Plans profonds non identifiés' },
    ],
  }, {
    fig: 'img/nerf-pudendal/echo-2.jpg',
    valide: false,
    vb: [1000, 1023], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — orientation : « medial » inscrit à gauche sur l\'image ; trajet « from lateral to medial » (légende d\'origine), le pointillé entre par la droite. Même sens que le schéma apparié.',
      'Certain — identité : sigles des auteurs STL (ligament sacro-tubéral), OI (obturateur interne), LSN (petite incisure ischiatique), ovale pointillé = nerf pudendal à l\'entrée du canal d\'Alcock.',
      'Probable — ligament sacro-tubéral : bande hyperéchogène sous la flèche STL, bombée sur l\'os (pics y ≈ 295–360), prolongée en dedans par la ligne oblique continue y ≈ 310–345.',
      'Probable — corticale de l\'ischium à la petite incisure : bord inférieur de l\'arc brillant, au toit du dôme d\'ombre (pics y ≈ 390–430) ; ses deux pentes sont dessinées en pointillé.',
      'Probable — face médiale de l\'obturateur interne : bande oblique brillante sur laquelle repose le nerf (pics de (50, 556) à (400, 432)) ; l\'épaisseur et la limite profonde du muscle ne sont pas vues (atténuation).',
      'Supposition — plan entre ligament et os, en dehors du nerf : non désigné (tendon de l\'obturateur interne qui contourne l\'incisure ?) ; tissu lobulé au-dessus du nerf lu comme graisse de la fosse ischio-anale.',
      'Supposition — limite tissu sous-cutané / grand fessier : ligne continue y ≈ 50–90, non désignée (profondeur affichée 9 cm : le grand fessier occupe ≈ 2,5 cm).',
      'Extrapolé — trajet de l\'aiguille (pointillé des auteurs) ; tout ce qui est sous y ≈ 750 à gauche et dans le cône d\'ombre osseux.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME2 },
      { id: 'sc', tissu: 'graisse', haut: DERME2, bas: FASC2 },
      { id: 'gm', tissu: 'muscle', haut: FASC2, bas: STL2_H.concat([[1000,300]]) },
      { id: 'stl', tissu: 'ligament', haut: STL2_H, bas: STL2_B },
      { id: 'lateral', tissu: 'muscle', haut: [[880,300],[1000,300]], bas: [[880,500],[1000,600]], extrapole: true },
      { id: 'fosse', tissu: 'graisse', haut: STL2_B.slice(0, 5), bas: OI_H },
      { id: 'plan', tissu: 'indetermine', haut: [[400,318],[500,345],[600,362],[700,358],[800,340],[880,320]], bas: [[445,452],[480,420],[520,397],[560,390],[600,392],[650,398],[700,421],[750,432],[800,445],[850,470],[880,500]] },
      { id: 'oi', tissu: 'muscle', haut: OI_H, bas: [[0,1040],[445,1040]] },
      { id: 'nerf', tissu: 'nerf', contour: ovale(323, 494, 44, 22, -12) },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,42],[368,458]], ep: 5, extrapole: true },
      { id: 'ischium', tissu: 'os', cortex: CORT2, vu: [1, 9] },
    ],
    labels: [
      { s: 'gm', x: 250, y: 200, dx: -110, dy: -120, text: 'Grand fessier (non désigné)' },
      { s: 'stl', x: 150, y: 345, dx: -40, dy: -90, text: 'Lig. sacro-tubéral', vue: 'anat' },
      { s: 'aiguille', x: 820, y: 160, dx: 40, dy: -110, text: 'Trajet de l\'aiguille (auteurs)', vue: 'anat' },
      { s: 'fosse', x: 180, y: 460, dx: -60, dy: -30, text: 'Graisse ischio-anale (supposée)' },
      { s: 'nerf', x: 323, y: 494, dx: 140, dy: 160, text: 'N. pudendal', vue: 'anat' },
      { s: 'oi', x: 200, y: 680, dx: 0, dy: 120, text: 'Obturateur interne', vue: 'anat' },
      { s: 'plan', x: 640, y: 375, dx: 180, dy: -90, text: 'Plan non attribué' },
      { s: 'ischium', x: 700, y: 421, dx: 120, dy: 260, text: 'Ischium (petite incisure)', vue: 'anat' },
    ],
  }];
})();
