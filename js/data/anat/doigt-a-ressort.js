/* Coupes anatomiques recalées — doigt à ressort (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Kim et al., Life 2026, fig. 4 (coupe longitudinale palmaire de la métacarpo-phalangienne ; sigles FDS / FDP / Volar plate /
   Metacarpal head / Proximal phalanx, poulie A1 délimitée par une zone ombrée). Échelle de l'appareil : 1 cm = 477 unités.
   echo-2 (Tortora et al., J Ultrason 2021, fig. 6B) : NON TRACÉE — côté radial / ulnaire non établi par la source (« in-plane axial approach »),
   pointe visible de l'aiguille en dehors de l'anneau hypoéchogène, plage noire latérale non attribuable. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 16; i++) { const t = i / 16 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* surface superficielle des tendons : ligne fibrillaire hyperéchogène (pics 151, 154, 146, 149, 148, 133, 138, 138, 146 de x 50 à 450), puis plongée vers la phalange */
  const TSUP = [[0,150],[100,152],[200,148],[300,136],[400,138],[450,145],[500,150],[600,153],[650,165],[700,186],[750,200],[800,213],[850,226],[900,238],[950,246],[1000,250]];
  /* face profonde des tendons : sur la plaque palmaire puis sur la corticale de la phalange */
  const TDEEP = [[0,335],[60,330],[100,324],[200,316],[250,306],[300,296],[350,292],[400,295],[440,305],[470,318],[500,321],[550,340],[600,356],[650,368],[700,377],[750,386],[800,393],[850,395],[900,397],[950,400],[1000,402]];
  /* tête métacarpienne : arc hyperéchogène (pics 375, 368, 359–368, 372, 397 de x 50 à 250) */
  const MC = [[-40,400],[0,385],[50,374],[100,364],[130,360],[160,363],[200,374],[250,395],[280,410],[310,432],[335,462],[345,520],[-40,520]];
  /* phalange proximale : base (pics 326–335 à x 450–500) puis diaphyse (348, 365, 375, 383, 393, 399, 400, 403, 407) */
  const P1 = [[400,520],[405,400],[425,360],[445,336],[470,327],[500,327],[550,346],[600,362],[650,374],[700,383],[750,392],[800,399],[850,401],[900,403],[950,406],[1040,409],[1040,520]];
  ECHO.anat['doigt-a-ressort'] = [{
    fig: 'img/doigt-a-ressort/echo-1.jpg',
    valide: false,
    vb: [1000, 484], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Supposition — limite profonde des tendons en regard de la tête métacarpienne : deux lectures. Retenue : tendons de y ≈ 140 à ≈ 320 (≈ 4 mm à l\'échelle de l\'appareil), dont la moitié profonde, à fibres obliques et moins échogène (anisotropie), repose sur la plaque palmaire — cohérent avec l\'épaisseur mesurée sur la phalange (≈ 3,4 mm). Écartée : tendons limités à la bande fibrillaire brillante (y ≈ 140–220, moins de 2 mm), la plage grise sous-jacente étant la plaque palmaire. Les sigles FDS / FDP des auteurs ne tranchent pas ; l\'interface entre les deux tendons n\'est pas tracée.',
      'Certain — orientation : tête métacarpienne à gauche, phalange proximale à droite (sigles des auteurs) ; proximal à gauche, comme le schéma apparié.',
      'Certain — identité de la poulie A1 : zone ombrée par les auteurs (« hypoechoic bulge […] overlying the FDS and FDP », légende d\'origine). Supposition — ses limites : l\'ellipse est leur délimitation, reprise telle quelle ; le voile blanc empêche de vérifier l\'interface réelle. Telle que délimitée, elle occupe toute l\'épaisseur entre le derme et les tendons (≈ 2 mm) et siège en regard de la plaque palmaire et de la base de la phalange, en aval du sommet de la tête métacarpienne (le schéma apparié la centre sur la tête).',
      'Probable — surface superficielle des tendons : ligne fibrillaire hyperéchogène continue (y ≈ 135–154 jusqu\'à x ≈ 600), qui plonge ensuite vers la phalange ; le plan d\'injection (entre poulie et tendons) est le bord profond de la zone ombrée.',
      'Probable — corticales : arc de la tête métacarpienne (sommet y ≈ 360) et base puis diaphyse de la phalange proximale (y ≈ 327 à 407) ; bande anéchogène de ≈ 0,5 mm sur la tête : cartilage.',
      'Supposition — plaque palmaire : coin compris entre les tendons, le cartilage de la tête et la base de la phalange, là où les auteurs posent « Volar plate » ; ses limites ne sont pas résolues.',
      'Supposition — plage anéchogène au bord distal de la zone ombrée (x ≈ 640–705, y ≈ 100–155), non désignée par les auteurs : laissée en « plan non attribué » (portion distale de la poulie ? vaisseau ?).',
      'Extrapolé — gaine synoviale (espace virtuel entre poulie et tendons, cible de l\'injection) : non visible, dessinée à la surface des tendons. Récessus de l\'interligne métacarpo-phalangien sous la plaque palmaire, face articulaire de la base de la phalange et profondeur des os (cône d\'ombre). Épaisseur de la peau.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,32],[1000,32]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,32],[1000,32]], bas: TSUP },
      { id: 'poulie', tissu: 'ligament', contour: ovale(545, 94, 122, 46) },
      { id: 'plage', tissu: 'indetermine', contour: [[648,112],[672,101],[700,112],[706,140],[692,156],[660,152],[648,136]] },
      { id: 'tendons', tissu: 'tendon', haut: TSUP, bas: TDEEP },
      { id: 'gaine', tissu: 'liquide', fin: true, extrapole: true, ligne: TSUP.slice(1, 12), ep: 7 },
      { id: 'recessus', tissu: 'liquide', fin: true, extrapole: true, contour: [[252,372],[300,362],[350,366],[400,366],[425,358],[408,395],[400,440],[330,455],[310,432],[280,410]] },
      { id: 'plaque', tissu: 'fibrocartilage', contour: [[0,335],[60,330],[100,324],[200,316],[250,306],[300,296],[350,292],[400,295],[440,305],[470,318],[445,336],[425,358],[400,366],[350,366],[300,362],[252,372],[200,349],[160,338],[130,335],[100,340],[50,350],[0,361]] },
      { id: 'cartilage', tissu: 'cartilage', bas: MC.slice(1, 9), ep: 24 },
      { id: 'mc', tissu: 'os', contour: MC, vu: [1, 9] },
      { id: 'p1', tissu: 'os', contour: P1, vu: [3, 15] },
    ],
    labels: [
      { s: 'sc', x: 320, y: 70, dx: -180, dy: -30, text: 'Tissu sous-cutané' },
      { s: 'gaine', x: 470, y: 145, dx: -40, dy: -105, text: 'Gaine synoviale (cible)', vue: 'anat' },
      { s: 'poulie', x: 640, y: 85, dx: 160, dy: -45, text: 'Poulie A1 épaissie' },
      { s: 'tendons', x: 230, y: 225, dx: -90, dy: -137, text: 'Tendons fléchisseurs', vue: 'anat' },
      { s: 'plage', x: 690, y: 130, dx: 190, dy: -35, text: 'Plan non attribué', vue: 'anat' },
      { s: 'mc', x: 130, y: 400, dx: 10, dy: 55, text: 'Tête métacarpienne', vue: 'anat' },
      { s: 'cartilage', x: 205, y: 362, dx: 130, dy: 93, text: 'Cartilage' },
      { s: 'plaque', x: 350, y: 330, dx: 180, dy: 125, text: 'Plaque palmaire', vue: 'anat' },
      { s: 'p1', x: 800, y: 430, dx: 50, dy: 25, text: 'Phalange proximale', vue: 'anat' },
    ],
  }];
})();
