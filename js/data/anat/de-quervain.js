/* Coupes anatomiques recalées — ténosynovite de De Quervain (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Kitridis et al., J Pers Med 2024, fig. 1B (coupe transversale sur la styloïde radiale, sigles APL / EPB et flèche sur le septum).
   echo-2 (Tortora et al., J Ultrason 2021, fig. 5B) : NON TRACÉE — orientation palmaire / dorsale non établie par la légende d'origine
   (« in-plane lateral-to-medial approach »), tendons non séparables, rapport de la pointe de l'aiguille au rétinaculum illisible. */
(function () {
  /* arc hyperéchogène continu qui coiffe les deux tendons : pics mesurés (x 250 → 950 : 191, 174, 160, 152, 160, 152, 148, 146, 137, 123, 134, 154, 175, 197, 215) */
  const ARC = [[160,262],[200,228],[250,191],[300,174],[350,160],[400,152],[450,157],[500,152],[550,148],[600,146],[650,137],[700,125],[750,133],[800,153],[850,175],[900,197],[950,215],[1000,222]];
  const SC_BAS = [[0,270],[100,280]].concat(ARC);
  /* corticale : bord superficiel de la bande brillante (pics 542–553 de x 250 à 450, puis 505, 482, 468, 456, 442, 432) */
  const CORTEX = [[0,590],[100,562],[200,538],[250,532],[300,535],[350,532],[400,535],[450,530],[500,522],[550,505],[600,482],[650,468],[700,456],[750,442],[800,432],[850,430],[900,435],[1000,450]];
  ECHO.anat['de-quervain'] = [{
    fig: 'img/de-quervain/echo-1.jpg',
    valide: false,
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
  }];
})();
