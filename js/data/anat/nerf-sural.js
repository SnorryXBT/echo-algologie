/* Coupes anatomiques recalées — nerf sural (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : planche à quatre panneaux de Duarte et al. (Radiol Bras 2025, fig. 4), dont la légende décrit l'ensemble — la planche
   n'est pas recadrée ; la coupe est tracée sur le seul panneau D (nerf constitué, latéral à la petite veine saphène), `crop` propre.
   Le cadre de la coupe exclut l'échelle de profondeur (à gauche) et les mentions « medial / right / lateral » (en bas).
   echo-2 (fig. 7, cheville et pied, cinq panneaux) : panneau B tracé le 7 octobre 2026 sur décision de Mat (coupe axiale rétro-malléolaire,
   nerf constitué et petite veine saphène désignés par les auteurs) ; tendon d'Achille et réflecteur profond en plan non attribué. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const PEAU = [[0,42],[1000,42]];
  /* feuillet superficiel : bande épaisse continue (pics de brillance y ≈ 86–102) */
  const SSA = [[0,112],[50,105],[100,99],[200,102],[300,102],[400,96],[500,96],[600,93],[700,96],[800,90],[900,86],[1000,95]];
  /* feuillet profond : il se creuse sous la veine et le nerf (x ≈ 450–620) puis remonte */
  const DSA = [[0,182],[60,165],[100,153],[150,141],[200,135],[250,135],[300,144],[350,144],[400,150],[450,154],[500,163],[550,174],[600,168],[650,150],[700,130],[750,132],[800,132],[850,138],[900,147],[950,168],[1000,185]];
  /* lame brillante profonde, non désignée par les auteurs */
  const APO = [[0,610],[230,548],[300,515],[370,492],[450,487],[600,490],[800,498],[1000,505]];

  ECHO.anat['nerf-sural'] = [{
    fig: 'img/nerf-sural/echo-1.jpg',
    crop: [0.525, 0.515, 0.47, 0.41], panneau: 'D (nerf constitué, latéral à la petite veine saphène)',
    valide: true,
    vb: [1000, 550], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Extrapolé — contour du nerf sural : la flèche « sn » des auteurs en donne le site (immédiatement latéral à la veine, au contact du feuillet profond qu\'il traverse à ce niveau selon la légende d\'origine) ; sur un panneau de 333 px aucun fascicule n\'est résolu, l\'ovale est posé à la pointe de la flèche.',
      'Probable — feuillet superficiel de l\'aponévrose surale : bande épaisse continue (y ≈ 86–102). La pointe de la flèche « ssa » s\'arrête sur une ligne plus fine ≈ 1 mm au-dessus (y ≈ 60), dessinée comme un septum sous-cutané : la veine et le nerf étant entre la bande épaisse et le feuillet profond, c\'est la bande épaisse qui est retenue comme feuillet superficiel.',
      'Certain — orientation : mentions « medial » à gauche et « lateral » à droite incrustées par les auteurs sous le panneau (hors du cadre de la coupe, visibles sur la planche entière) ; même orientation que le schéma apparié. Petite veine saphène (ssv), feuillet profond (dsa), chefs médial et latéral du gastrocnémien (mg, lg) : flèches et sigles des auteurs.',
      'Probable — veine de ≈ 1 mm de diamètre, à ≈ 4 mm de la peau (échelle latérale de la planche) : peu remplie, ni garrot ni déclive ; elle n\'a pas ici la taille de « balise » que lui donne le schéma, et une pression de sonde un peu plus forte l\'effacerait.',
      'Probable — espace entre les deux feuillets : tissu graisseux hyperéchogène en dehors de la veine, dessiné en graisse sur toute la largeur.',
      'Supposition — limite entre les deux chefs du gastrocnémien non résolue (une seule couche musculaire, les noms sont posés là où les auteurs ont mis leurs sigles). Lame brillante profonde (y ≈ 490–550) et plan sous-jacent non désignés par les auteurs : aponévrose profonde du gastrocnémien et soléaire probables, laissés non attribués.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: SSA },
      { id: 'septum', tissu: 'fascia', ligne: [[200,63],[250,58],[300,62],[350,60],[400,66],[450,69]], ep: 5 },
      { id: 'inter', tissu: 'graisse', haut: SSA, bas: DSA },
      { id: 'gastro', tissu: 'muscle', haut: DSA, bas: APO },
      { id: 'prof', tissu: 'indetermine', haut: APO, bas: [[0,620],[1000,620]] },
      { id: 'apo', tissu: 'fascia', ligne: APO, ep: 9 },
      { id: 'ssa', tissu: 'fascia', ligne: SSA, ep: 12 },
      { id: 'dsa', tissu: 'fascia', ligne: DSA, ep: 10 },
      { id: 'veine', tissu: 'veine', contour: ovale(498, 129, 16, 15) },
      { id: 'nerf', tissu: 'nerf', contour: ovale(575, 152, 22, 11), extrapole: true },
    ],
    labels: [
      { s: 'ssa', x: 250, y: 101, dx: -70, dy: -75, text: 'Feuillet superficiel', vue: 'anat' },
      { s: 'veine', x: 498, y: 127, dx: 12, dy: -101, text: 'Petite veine saphène', vue: 'anat' },
      { s: 'nerf', x: 577, y: 150, dx: 253, dy: -124, text: 'Nerf sural', vue: 'anat' },
      { s: 'dsa', x: 300, y: 144, dx: -100, dy: 91, text: 'Feuillet profond', vue: 'anat' },
      { s: 'gastro', x: 200, y: 310, dx: -10, dy: 85, text: 'Gastrocnémien médial', vue: 'anat' },
      { s: 'gastro', x: 760, y: 310, dx: 30, dy: 85, text: 'Gastrocnémien latéral', vue: 'anat' },
      { s: 'prof', x: 600, y: 522, dx: -40, dy: -62, text: 'Plan profond non désigné' },
    ],
  }];
  /* ---------- echo-2, panneau B (fig. 7) : axial, en amont de la malléole latérale — cadre sans l'échelle ni les mentions d'orientation ---------- */
  const B_PEAU = [[0,45],[1000,45]];
  const B_SC = [[0,110],[100,100],[200,100],[300,108],[400,122],[450,128],[500,133],[550,133],[600,130],[650,140],[700,148],[800,152],[900,150],[1000,150]];
  ECHO.anat['nerf-sural'].push({
    fig: 'img/nerf-sural/echo-2.jpg',
    crop: [0.536, 0, 0.464, 0.275], panneau: 'B (axial, nerf constitué et petite veine saphène)',
    valide: false,
    vb: [1000, 557], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : tracer le panneau B. Orientation : mentions « medial » à gauche et « lateral » à droite incrustées par les auteurs sous le panneau (hors du cadre de la coupe). Le schéma apparié est en plan coronal oblique (postérieur / antérieur) : ses axes ne se superposent pas à ceux de cette coupe axiale, ce n\'est pas un miroir.',
      'Certain — petite veine saphène (flèche « ssv » des auteurs, point noir ≈ 1 mm sous la flèche) et nerf sural (flèche « sn », immédiatement en dehors et à peine plus profond que la veine) : le couple est à ≈ 3–4 mm de la peau, dans le tissu sous-cutané, en dehors du tendon d\'Achille (« at ») — c\'est la fenêtre du bloc.',
      'Extrapolé — contours de la veine et du nerf : ovales posés sur les pointes des flèches (nerf de 2–3 px, aucun fascicule résolu).',
      'Supposition — tendon d\'Achille : le sigle « at » est posé sur une plage à texture moyenne (x 90–430, y 100–260) sans bord net ; dessiné en plan non attribué, conformément à la décision de Mat. Court fibulaire (« pbm », en haut à droite) et long fléchisseur de l\'hallux (« fhlm », en bas à droite) : identités des auteurs, contours non résolus (pointillé).',
      'Supposition — bande brillante oblique de (620, 310) à (950, 520) : non désignée par les auteurs ; os (calcanéus ? talus ?) ou cloison fibreuse — plan non attribué, pas de cône d\'ombre franc. Zone sombre entre le tendon d\'Achille et le long fléchisseur de l\'hallux dessinée en graisse (graisse de Kager probable).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: B_PEAU },
      { id: 'sc', tissu: 'graisse', haut: B_PEAU, bas: B_SC },
      { id: 'kager', tissu: 'graisse', haut: B_SC, bas: [[0,557],[1000,557]] },
      { id: 'achille', tissu: 'indetermine', contour: [[95,100],[400,108],[432,150],[425,230],[380,262],[200,258],[100,250],[88,180]] },
      { id: 'pbm', tissu: 'muscle', contour: [[700,150],[1000,150],[1000,300],[850,290],[720,240]], extrapole: true },
      { id: 'fhlm', tissu: 'muscle', contour: [[560,290],[700,240],[850,290],[1000,330],[1000,557],[560,557]], extrapole: true },
      { id: 'reflecteur', tissu: 'indetermine', ligne: [[620,310],[700,350],[780,410],[870,470],[950,520]], ep: 22 },
      { id: 'veine', tissu: 'veine', contour: ovale(478, 103, 12, 11), extrapole: true },
      { id: 'nerf', tissu: 'nerf', contour: ovale(548, 106, 18, 9), extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 300, y: 78, dx: -150, dy: -45, text: 'Tissu sous-cutané' },
      { s: 'veine', x: 478, y: 103, dx: -150, dy: 87, text: 'Petite veine saphène (ssv)', vue: 'anat' },
      { s: 'nerf', x: 548, y: 106, dx: 150, dy: -50, text: 'Nerf sural (sn)', vue: 'anat' },
      { s: 'achille', x: 250, y: 180, dx: 0, dy: 150, text: 'Tendon d\'Achille (at) — contours non résolus' },
      { s: 'pbm', x: 870, y: 180, dx: 10, dy: 70, text: 'Court fibulaire (pbm)', vue: 'anat' },
      { s: 'fhlm', x: 800, y: 420, dx: 0, dy: 80, text: 'Long fléch. de l\'hallux (fhlm)', vue: 'anat' },
      { s: 'kager', x: 450, y: 400, dx: 0, dy: 80, text: 'Graisse (Kager ?)' },
      { s: 'reflecteur', x: 700, y: 350, dx: -140, dy: -50, text: 'Réflecteur non désigné (os ?)' },
    ],
  });
})();
