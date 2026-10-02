/* Coupes anatomiques recalées — nerfs petit occipital et grand auriculaire (format : .claude/skills/echo-anatomie/SKILL.md).
   Seule l'image de ponction (echo-2, Zhao et al.) est tracée. La première (echo-1, Jiang et al.) ne l'est pas : la figure
   affichée réunit volontairement l'écho (265 px) et le calque coloré des auteurs ; la recadrer sur l'écho seule rendrait
   la légende fausse — décision laissée à Mat. */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  const rev = a => a.slice().reverse();
  /* ligne hyperéchogène au-dessus du platysma supposé */
  const PLAT_HAUT = [[0,70],[100,73],[200,69],[250,71],[350,72],[450,80],[500,84],[600,85],[700,87],[800,82],[900,85],[1000,85]];
  /* fascia superficiel (lame superficielle du fascia cervical) : toit du plan interfascial, puis face superficielle du SCM — pics 109, 119, 121, 115, 117 … */
  const F_SUP = [[0,104],[50,110],[100,118],[150,122],[200,116],[250,112],[300,110],[350,109],[400,112],[450,121],[500,126],[600,128],[700,131],[800,140],[850,152],[900,160],[1000,156]];
  /* fascia prévertébral : bande hyperéchogène continue, pics 214, 206, 210, 208 … puis sous le SCM 232, 243, 248, 260, 274 */
  const F_PREV = [[0,228],[50,225],[100,214],[150,206],[200,210],[250,208],[300,209],[350,208],[400,208],[440,216],[500,232],[550,243],[600,248],[650,260],[700,274],[750,284],[800,293],[900,305],[1000,300]];
  /* face profonde du SCM : tracé bleu des auteurs, du biseau (442,150) vers l'avant */
  const SCM_BAS = [[462,170],[500,192],[550,212],[600,232],[650,250],[700,265],[750,280],[780,290],[800,293],[900,305],[1000,300]];
  ECHO.anat['nerfs-petit-occipital-grand-auriculaire'] = [{
    fig: 'img/nerfs-petit-occipital-grand-auriculaire/echo-2.jpg',
    valide: false,
    vb: [1000, 655], orient: { left: 'Postérieur', right: 'Antérieur' },
    lecture: [
      'Probable — aiguille : les auteurs la désignent par la flèche jaune, au bord gauche ; elle se confond avec la ligne hyperéchogène du fascia superficiel (y ≈ 105–120). Trajet tracé sur ce segment rectiligne. Supposition — sa pointe, non individualisable, arrêtée avant le cercle du plexus.',
      'Supposition — nodules du plexus : le cercle vert des auteurs désigne l\'amas (Certain) ; les trois ovales dessinés à l\'intérieur sont les plages hypoéchogènes les plus nettes, sans certitude sur chaque branche — petit occipital et grand auriculaire ne sont pas distinguables sur cette image.',
      'Supposition — platysma : fine bande hypoéchogène entre deux lignes, au-dessus du SCM. La cloison hyperéchogène oblique du plan interfascial (x 60–240) est dessinée comme un septum.',
      'Supposition — plans profonds en avant du scalène (masse hyperéchogène en x 640–780, plages sombres voisines) : non attribués, laissés sans anatomie ; ni carotide ni jugulaire interne ne sont identifiables ici.',
      'Probable — sterno-cléido-mastoïdien au-delà du tracé bleu des auteurs (x > 780), et fascia prévertébral sous le muscle.',
      'Certain — orientation : postérieur à gauche, antérieur à droite. Le tracé bleu des auteurs souligne le bord latéral (postérieur) du SCM, dont le biseau pointe à gauche ; l\'image est en miroir du schéma apparié (dit dans la légende).',
      'Certain — biseau du SCM, plexus cervical superficiel et scalène moyen : désignés par les auteurs (tracé bleu, cercle vert, cercle rouge). Fascia prévertébral : bande hyperéchogène continue entre le plexus et le scalène, tracée sur les pics de brillance.',
      'Certain — cohérence avec la fiche : aiguille venue de l\'arrière, tangentielle, restée au-dessus du fascia prévertébral (plexus à ≈ 6 mm de la peau, fascia à ≈ 8 mm d\'après l\'échelle de l\'image d\'origine).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,26],[1000,26]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,26],[1000,26]], bas: PLAT_HAUT },
      { id: 'platysma', tissu: 'muscle', haut: PLAT_HAUT, bas: F_SUP },
      /* plan interfascial graisseux : sous le fascia superficiel en arrière du SCM, puis glissé sous le biseau, jusqu'au fascia prévertébral */
      { id: 'interfascial', tissu: 'graisse', contour: F_SUP.slice(0, 9).concat([[442,150]], SCM_BAS.slice(0, 8), rev(F_PREV.slice(0, 16))) },
      { id: 'septum', tissu: 'fascia', ligne: [[60,174],[100,170],[150,163],[200,153],[240,148]], ep: 5 },
      /* SCM : fibres crânio-caudales, coupées en travers */
      { id: 'scm', tissu: 'muscle', contour: [[442,150],[465,134],[500,129],[600,131],[700,134],[800,143],[850,155],[900,163],[1000,159],[1000,159],[1000,300]].concat(rev(SCM_BAS)) },
      { id: 'scalene', tissu: 'muscle', contour: [[95,234],[150,219],[250,221],[350,220],[420,225],[445,290],[440,370],[410,430],[350,470],[260,482],[180,465],[120,420],[95,350]] },
      { id: 'f-sup', tissu: 'fascia', ligne: F_SUP, ep: 5 },
      { id: 'f-prev', tissu: 'fascia', ligne: F_PREV, ep: 11 },
      { id: 'plexus-a', tissu: 'nerf', contour: ovale(283, 163, 16, 11) },
      { id: 'plexus-b', tissu: 'nerf', contour: ovale(318, 129, 20, 9) },
      { id: 'plexus-c', tissu: 'nerf', contour: ovale(366, 173, 17, 9) },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[0,104],[165,124]], ep: 5 },
    ],
    labels: [
      { s: 'aiguille', x: 80, y: 114, dx: 30, dy: -74, text: 'Aiguille' },
      { s: 'platysma', x: 560, y: 106, dx: -80, dy: -66, text: 'Platysma (supposé)' },
      { s: 'scm', x: 640, y: 190, dx: 160, dy: -150, text: 'Sterno-cléido-mastoïdien' },
      { s: 'scalene', x: 260, y: 400, dx: 0, dy: 145, text: 'Scalène moyen' },
      { s: 'f-prev', x: 62, y: 224, dx: 78, dy: 386, text: 'Fascia prévertébral' },
      { s: 'plexus-a', x: 291, y: 167, dx: 229, dy: 443, text: 'Plexus cervical superficiel' },
    ],
  }];
})();
