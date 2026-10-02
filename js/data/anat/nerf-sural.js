/* Coupes anatomiques recalées — nerf sural (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : planche à quatre panneaux de Duarte et al. (Radiol Bras 2025, fig. 4), dont la légende décrit l'ensemble — la planche
   n'est pas recadrée ; la coupe est tracée sur le seul panneau D (nerf constitué, latéral à la petite veine saphène), `crop` propre.
   Le cadre de la coupe exclut l'échelle de profondeur (à gauche) et les mentions « medial / right / lateral » (en bas).
   echo-2 (fig. 7, cheville et pied, cinq panneaux) : non tracée — voir js/data/anat/zz-refus.js. */
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
    valide: false,
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
})();
