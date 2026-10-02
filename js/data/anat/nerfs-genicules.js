/* Coupes anatomiques recalées — nerfs géniculés (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : planche à quatre panneaux de Spalkit et al. (J Ultrason 2026, fig. 6) — coupe tracée sur le seul panneau D (Doppler couleur),
   `crop` propre à la coupe, la planche reste affichée entière dans la fiche. Le panneau C est la même image sans Doppler.
   echo-2 (fig. 8, nerf inféro-médial) : non tracée — rien n'établit quel côté de l'image est proximal. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const DERME = [[0,88],[1000,88]];
  const FASCIA = [[0,160],[100,155],[200,152],[280,172],[400,186],[520,198],[700,197],[850,192],[1000,188]];
  /* corticale : bord superficiel de la bande brillante ; rectiligne à gauche (diaphyse), elle se relève à partir de x ≈ 600 */
  const CORTEX = [[0,698],[100,694],[200,688],[300,680],[400,672],[450,674],[500,678],[550,674],[600,668],[650,655],[700,642],[750,624],[800,604],[850,576],[900,545],[950,514],[1000,486]];
  /* ligne échogène qui part du site du nerf et monte vers la droite, ≈ 2 mm au-dessus de la corticale */
  const LIGNE = [[585,660],[605,628],[620,608],[700,568],[800,518],[900,464],[1000,414]];
  const PERI = [[452,662],[470,636],[520,620],[575,622],[598,640],[590,660],[550,672],[515,684],[470,684]];
  ECHO.anat['nerfs-genicules'] = [{
    fig: 'img/nerfs-genicules/echo-1.jpg',
    crop: [0.503, 0.569, 0.484, 0.431], panneau: 'D (Doppler couleur)',
    valide: false,
    vb: [1000, 958], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Probable — orientation : ni la légende d\'origine ni l\'image ne nomment les côtés. Proximal à gauche est déduit de l\'os : corticale rectiligne et profonde à gauche (diaphyse), qui se relève vers la droite (évasement métaphysaire vers l\'épicondyle médial), sous un vaste médial qui s\'amincit dans le même sens. Concordant avec le schéma apparié.',
      'Certain — vaste médial, fémur, site du nerf géniculé supéro-médial (pointe de la tête de flèche) et artère géniculée supéro-médiale (signal Doppler) : désignés par les auteurs sur ce panneau.',
      'Probable — corticale : bord superficiel de la bande brillante ; rupture de pente à x ≈ 600–700. L\'artère est posée sur l\'os juste en amont de la rupture, le nerf ≈ 3 mm plus distal : c\'est le point de contact périosté « au ras du signal Doppler » de la fiche.',
      'Supposition — plan hypoéchogène en coin, entre la corticale et la ligne échogène qui part du site du nerf et monte vers la droite : non désigné par les auteurs (tendon du grand adducteur, capsule, graisse pré-fémorale ?) — dessiné en plan non attribué.',
      'Supposition — tissu échogène autour de l\'artère dessiné en graisse périvasculaire ; limite tissu sous-cutané / vaste médial placée sur la première ligne échogène continue (y ≈ 150–200), que les auteurs ne désignent pas.',
      'Extrapolé — contour du nerf : la tête de flèche en donne le site, aucun fascicule n\'est résolu sur 310 px. Profondeur de l\'os (cône d\'ombre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: FASCIA },
      { id: 'vm', tissu: 'muscle', haut: FASCIA, bas: CORTEX.slice(0, 5).concat([[452,662],[470,636],[520,620],[575,622]], LIGNE.slice(1)) },
      { id: 'plan', tissu: 'indetermine', haut: LIGNE, bas: [[585,668]].concat(CORTEX.slice(9)) },
      { id: 'peri', tissu: 'graisse', contour: PERI },
      { id: 'artere', tissu: 'artere', contour: ovale(493, 659, 16, 14) },
      { id: 'nerf', tissu: 'nerf', contour: ovale(628, 618, 14, 9, -35), extrapole: true },
      { id: 'femur', tissu: 'os', cortex: CORTEX },
    ],
    labels: [
      { s: 'sc', x: 650, y: 130, dx: 150, dy: -72, text: 'Tissu sous-cutané' },
      { s: 'vm', x: 330, y: 430, dx: -90, dy: -130, text: 'Vaste médial', vue: 'anat' },
      { s: 'nerf', x: 628, y: 616, dx: 150, dy: -290, text: 'N. géniculé supéro-médial', vue: 'anat' },
      { s: 'artere', x: 490, y: 662, dx: -235, dy: -100, text: 'A. géniculée supéro-médiale', vue: 'anat' },
      { s: 'peri', x: 540, y: 632, dx: -100, dy: -160, text: 'Tissu périvasculaire' },
      { s: 'plan', x: 850, y: 545, dx: 0, dy: 215, text: 'Plan non attribué' },
      { s: 'femur', x: 650, y: 660, dx: -60, dy: 190, text: 'Rupture de pente de la corticale' },
      { s: 'femur', x: 200, y: 790, dx: 0, dy: 110, text: 'Fémur (diaphyse)', vue: 'anat' },
    ],
  }];
})();
