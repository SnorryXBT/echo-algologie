/* Coupes anatomiques recalées — ganglion stellaire, bloc en C6 (format : .claude/skills/echo-anatomie/SKILL.md).
   Points relevés sur la grille de l'image entière puis ramenés au repère après crop vertical (y − 39). */
(function () {
  const T = pts => pts.map(p => [p[0], p[1] - 39]);
  const FASCIA = T([[0,170],[120,180],[250,195],[350,202],[450,207],[560,212],[650,214],[700,222],[745,250]]);
  const TOIT = FASCIA.concat(T([[760,205],[810,195],[880,210],[950,200]]));
  const CORTEX = T([[150,486],[158,430],[175,400],[200,385],[232,390],[255,410],[280,432],[320,442],[352,438],[368,405],[385,378],[420,365],[443,340],[440,283],[462,283],[490,320],[497,405],[540,415],[600,412],[660,398],[720,355],[790,305],[850,292],[950,287]]);
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  ECHO.anat['ganglion-stellaire'] = [{
    fig: 'img/ganglion-stellaire/echo-1.jpg',
    valide: false,
    vb: [1000, 447], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : carotide commune à droite de l\'image, donc médial à droite ; image en miroir du schéma apparié (déjà dit dans la légende).',
      'Certain — long du cou, racine C6, tubercules antérieur et postérieur de C6, fascia prévertébral, aiguille et nappe d\'anesthésique : contours repris du corrigé en pointillé incrusté par les auteurs.',
      'Probable — surface du corps vertébral de C6 : bande hyperéchogène sous le long du cou, prolongée en dedans sous la carotide.',
      'Supposition — plans superficiels : contraste écrasé (noir sur noir) au-dessus du fascia ; le sterno-cléido-mastoïdien est dessiné comme une couche unique, la veine jugulaire interne (collabée par la sonde ?) n\'est pas individualisable et n\'est pas dessinée.',
      'Supposition — scalènes en dehors du tubercule antérieur : plage striée non annotée par les auteurs.',
      'Extrapolé — profondeur des corticales (cône d\'ombre). La chaîne sympathique cervicale elle-même n\'est pas visible : elle chemine dans le dédoublement du fascia prévertébral, en avant du long du cou — étiquetée sur la coupe anatomique seulement.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[950,0]], bas: [[0,18],[950,18]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,18],[950,18]], bas: [[0,62],[950,62]] },
      { id: 'scm', tissu: 'muscle', haut: [[0,62],[950,62]], bas: TOIT, extrapole: true },
      { id: 'scalenes', tissu: 'muscle', contour: T([[0,178],[250,198],[440,210],[440,278],[445,340],[420,365],[385,378],[365,340],[335,322],[260,322],[235,350],[200,385],[175,400],[158,430],[0,450]]), extrapole: true },
      { id: 'lc', tissu: 'muscle', contour: T([[560,225],[640,222],[680,230],[750,275],[800,290],[780,310],[720,350],[650,395],[560,410],[520,400],[515,340],[500,300],[530,280],[555,245]]) },
      { id: 'cca', tissu: 'artere', contour: ovale(812, 240 - 39, 66, 37) },
      { id: 'racine', tissu: 'nerf', contour: ovale(296, 376 - 39, 50, 47) },
      { id: 'chaine', tissu: 'nerf', contour: ovale(612, 188, 15, 8), extrapole: true },
      { id: 'al', tissu: 'liquide', contour: T([[430,215],[520,212],[560,222],[552,250],[522,275],[470,280],[440,265]]) },
      { id: 'fascia', tissu: 'fascia', ligne: FASCIA, ep: 5 },
      { id: 'aiguille', tissu: 'aiguille', ligne: T([[0,146],[485,251]]), ep: 5 },
      { id: 'c6', tissu: 'os', cortex: CORTEX, vu: [1, 21] },
    ],
    labels: [
      { s: 'scm', x: 450, y: 82, dx: 0, dy: -52, text: 'Sterno-cléido-mastoïdien (supposé)' },
      { s: 'aiguille', x: 200, y: 150, dx: -50, dy: -105, text: 'Aiguille', vue: 'anat' },
      { s: 'al', x: 480, y: 205, dx: -150, dy: -105, text: 'Anesthésique local', vue: 'anat' },
      { s: 'chaine', x: 612, y: 186, dx: -10, dy: -86, text: 'Chaîne sympathique', vue: 'anat' },
      { s: 'fascia', x: 700, y: 181, dx: 200, dy: -121, text: 'Fascia prévertébral', vue: 'anat' },
      { s: 'cca', x: 840, y: 182, dx: 60, dy: -72, text: 'Carotide commune', vue: 'anat' },
      { s: 'scalenes', x: 120, y: 225, dx: -20, dy: 65, text: 'Scalènes (supposé)' },
      { s: 'c6', x: 195, y: 352, dx: -95, dy: 33, text: 'Tubercule postérieur', vue: 'anat' },
      { s: 'racine', x: 296, y: 345, dx: 0, dy: 82, text: 'Racine C6', vue: 'anat' },
      { s: 'c6', x: 465, y: 300, dx: 100, dy: 127, text: 'Tubercule de Chassaignac (C6)', vue: 'anat' },
      { s: 'lc', x: 650, y: 290, dx: 225, dy: 137, text: 'Long du cou', vue: 'anat' },
      { s: 'c6', x: 900, y: 252, dx: 5, dy: 40, text: 'Corps vertébral de C6' },
    ],
  }];
})();
