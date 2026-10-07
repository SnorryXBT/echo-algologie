/* Coupes anatomiques recalées — ténosynovite de De Quervain (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Kitridis et al., J Pers Med 2024, fig. 1B (coupe transversale sur la styloïde radiale, sigles APL / EPB et flèche sur le septum).
   echo-2 : Tortora et al., J Ultrason 2021, fig. 5B — orientation donnée par Mat (7 octobre 2026) : l'aiguille vient du versant
   palmaire (prise en main du panneau A), donc palmaire à droite. */
(function () {
  /* arc hyperéchogène continu qui coiffe les deux tendons : pics mesurés (x 250 → 950 : 191, 174, 160, 152, 160, 152, 148, 146, 137, 123, 134, 154, 175, 197, 215) */
  const ARC = [[160,262],[200,228],[250,191],[300,174],[350,160],[400,152],[450,157],[500,152],[550,148],[600,146],[650,137],[700,125],[750,133],[800,153],[850,175],[900,197],[950,215],[1000,222]];
  const SC_BAS = [[0,270],[100,280]].concat(ARC);
  /* corticale : bord superficiel de la bande brillante (pics 542–553 de x 250 à 450, puis 505, 482, 468, 456, 442, 432) */
  const CORTEX = [[0,590],[100,562],[200,538],[250,532],[300,535],[350,532],[400,535],[450,530],[500,522],[550,505],[600,482],[650,468],[700,456],[750,442],[800,432],[850,430],[900,435],[1000,450]];
  /* --- echo-2 (palmaire à droite) --- */
  const SCB2 = [[0,62],[200,66],[300,66],[420,62],[600,56],[800,40],[1000,26]];
  const CORT2 = [[0,500],[120,486],[230,472],[350,458],[450,450],[550,447],[650,455],[750,470],[850,495],[1000,530]];
  ECHO.anat['de-quervain'] = [{
    fig: 'img/de-quervain/echo-1.jpg',
    valide: true,
    vb: [1000, 687], orient: { left: 'Palmaire', right: 'Dorsal' },
    lecture: [
      'Supposition — toit du compartiment : image de 351 px. L\'arc hyperéchogène continu qui coiffe les deux tendons (y ≈ 125–230) est dessiné comme rétinaculum ; le liseré hypoéchogène situé juste dessous (2 à 3 px) peut être sa portion épaissie aussi bien que la gaine synoviale : non séparables à cette résolution, il est rattaché à la gaine.',
      'Certain — identité des deux tendons et du septum : sigles APL (long abducteur) et EPB (court extenseur) et flèche des auteurs sur la « structure hypoéchogène de type septum » qui les sépare (légende d\'origine). Le contour du septum (bande sombre verticale, x ≈ 585–665) est Probable : son tiers profond se confond avec l\'épanchement.',
      'Certain — orientation : le long abducteur est palmaire au court extenseur dans le premier compartiment ; long abducteur à gauche = palmaire à gauche, comme le schéma apparié. La légende d\'origine ne nomme pas les côtés.',
      'Probable — croissant anéchogène franc sous le long abducteur (y ≈ 440–495) : épanchement de la gaine ; halo hypoéchogène autour des deux tendons : gaine synoviale épaissie. Les auteurs ne les désignent pas.',
      'Probable — styloïde radiale : bande hyperéchogène épaisse sous le compartiment (y ≈ 535 à gauche, remontant à ≈ 430 sous le court extenseur) ; cône d\'ombre net seulement entre x ≈ 350 et 500, ailleurs des échos gris persistent sous la bande.',
      'Supposition — de part et d\'autre du compartiment (x < 150 et x > 880) : plages grises sans structure reconnaissable, laissées en « plan non attribué » ; à gauche, leur limite avec le tissu sous-cutané est arbitraire (aucune interface visible). Ni l\'artère radiale (versant palmaire) ni les branches du nerf radial superficiel (sous-cutanées) ne sont visibles : elles ne sont pas dessinées.',
      'Extrapolé — corticale en dehors de x 200–800 (hors signal) et profondeur de l\'os. Épaisseur de la peau (non résolue, bord supérieur de l\'image).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,28],[1000,28]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,28],[1000,28]], bas: SC_BAS },
      { id: 'plans', tissu: 'indetermine', haut: SC_BAS, bas: CORTEX },
      /* compartiment ostéo-fibreux : sous l'arc, parois latérales sur le bord externe du halo, plancher sur la corticale */
      { id: 'gaine', tissu: 'liquide', fin: true, contour: ARC.slice(0, 15).concat([[878,250],[888,320],[880,380],[865,430]], CORTEX.slice(2, 16).reverse(), [[185,480],[160,420],[150,345],[152,295]]) },
      { id: 'epanchement', tissu: 'liquide', contour: [[200,440],[240,405],[285,437],[340,447],[400,440],[460,422],[520,397],[565,362],[588,330],[606,355],[620,400],[570,428],[520,450],[460,470],[400,486],[330,496],[250,478]] },
      { id: 'septum', tissu: 'ligament', contour: [[590,160],[632,156],[640,250],[652,300],[668,355],[670,420],[624,428],[606,350],[592,300],[584,250]] },
      { id: 'apl', tissu: 'tendon', contour: [[218,330],[232,275],[275,238],[330,220],[400,214],[470,220],[530,240],[568,275],[580,318],[565,360],[520,395],[460,420],[400,438],[340,445],[285,435],[240,400]] },
      { id: 'epb', tissu: 'tendon', contour: [[655,300],[668,255],[700,232],[745,225],[790,235],[822,265],[835,310],[825,355],[795,385],[750,397],[705,388],[670,355]] },
      { id: 'retinaculum', tissu: 'ligament', ligne: ARC, ep: 13 },
      { id: 'radius', tissu: 'os', cortex: CORTEX, vu: [2, 14] },
    ],
    labels: [
      { s: 'sc', x: 300, y: 75, dx: -170, dy: -27, text: 'Tissu sous-cutané' },
      { s: 'retinaculum', x: 520, y: 150, dx: -50, dy: -102, text: 'Rétinaculum (toit)' },
      { s: 'plans', x: 945, y: 300, dx: -85, dy: -252, text: 'Plan non attribué', vue: 'anat' },
      { s: 'gaine', x: 165, y: 330, dx: 20, dy: -230, text: 'Gaine synoviale épaissie' },
      { s: 'apl', x: 290, y: 400, dx: -125, dy: 200, text: 'Long abducteur (LAP)', vue: 'anat' },
      { s: 'epb', x: 770, y: 350, dx: 65, dy: 250, text: 'Court extenseur (CEP)', vue: 'anat' },
      { s: 'epanchement', x: 400, y: 480, dx: 80, dy: 120, text: 'Épanchement' },
      { s: 'radius', x: 330, y: 545, dx: 70, dy: 110, text: 'Styloïde radiale' },
      { s: 'septum', x: 645, y: 410, dx: -25, dy: 245, text: 'Septum', vue: 'anat' },
    ],
  }, {
    fig: 'img/de-quervain/echo-2.jpg',
    valide: false,
    vb: [1000, 595], orient: { left: 'Dorsal', right: 'Palmaire' },
    lecture: [
      'Certain — lecture donnée par Mat : l\'aiguille entre par le versant palmaire (prise en main du panneau A) et chemine vers le dorsal ; palmaire à droite. Cohérent avec les sigles des auteurs : long abducteur (palmaire) en bas à droite, court extenseur (dorsal) en haut à gauche. Orientation inverse de celle du schéma apparié, où l\'aiguille vient du versant dorsal.',
      'Certain — aiguille 25 G dans le plan (flèche des auteurs), trait hyperéchogène du bord droit jusqu\'à la pointe (x ≈ 512, y ≈ 86), au-dessus du sommet de la masse tendineuse.',
      'Probable — masse tendineuse ovale (x ≈ 365–712, y ≈ 140–425), bordée d\'un liseré brillant : les deux tendons ne sont pas séparables ; les sigles Ext pb et Abd pl sont posés en diagonale sur la même masse. Un seul contour, deux étiquettes aux places des sigles.',
      'Probable — rétinaculum épaissi : arc hypoéchogène qui coiffe et encadre la masse, épais de part et d\'autre (x ≈ 230–370 à gauche, 700–790 à droite), là où les auteurs posent leurs astérisques.',
      'Supposition — rapport de la pointe au rétinaculum : sur cette image de 672 px, la pointe se projette au niveau du toit, sans qu\'on puisse dire si elle est dessous ou dans son épaisseur ; elle est dessinée au contact du toit.',
      'Supposition — styloïde radiale : bande brillante sous la masse (y ≈ 445–470, x ≈ 450–750) ; ailleurs la corticale est extrapolée. Plages grises à gauche (x < 230) et à droite (x > 790) : « plan non attribué ».',
      'Extrapolé — épaisseur de la peau, profondeur de l\'os.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,10],[1000,10]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,10],[1000,10]], bas: SCB2 },
      { id: 'plans', tissu: 'indetermine', haut: SCB2, bas: CORT2 },
      { id: 'toit', tissu: 'ligament', contour: [[235,445],[228,330],[232,220],[250,140],[290,92],[360,76],[440,82],[520,90],[620,100],[700,115],[760,150],[785,190],[795,260],[790,340],[770,430],[700,445],[600,447],[500,445],[400,448],[300,455]] },
      { id: 'tendons', tissu: 'tendon', contour: [[365,300],[372,230],[400,180],[450,152],[520,140],[600,148],[665,180],[705,240],[712,300],[695,360],[650,405],[580,425],[500,420],[430,395],[385,350]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,10],[850,44],[700,66],[600,77],[512,86]], ep: 5 },
      { id: 'radius', tissu: 'os', cortex: CORT2, vu: [4, 7] },
    ],
    labels: [
      { s: 'sc', x: 120, y: 38, dx: 0, dy: 140, text: 'Tissu sous-cutané' },
      { s: 'aiguille', x: 900, y: 32, dx: -10, dy: 120, text: 'Aiguille 25 G' },
      { s: 'toit', x: 300, y: 300, dx: -160, dy: 150, text: 'Rétinaculum épaissi' },
      { s: 'tendons', x: 460, y: 210, dx: -120, dy: -120, text: 'Court extenseur (CEP)', vue: 'anat' },
      { s: 'tendons', x: 600, y: 340, dx: -180, dy: 160, text: 'Long abducteur (LAP)', vue: 'anat' },
      { s: 'radius', x: 600, y: 452, dx: 60, dy: 100, text: 'Styloïde radiale', vue: 'anat' },
      { s: 'plans', x: 880, y: 400, dx: -20, dy: 120, text: 'Plan non attribué', vue: 'anat' },
    ],
  }];
})();
