/* Coupes anatomiques recalées — nerfs géniculés (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : planche à quatre panneaux de Spalkit et al. (J Ultrason 2026, fig. 6) — coupe tracée sur le seul panneau D (Doppler couleur),
   `crop` propre à la coupe, la planche reste affichée entière dans la fiche. Le panneau C est la même image sans Doppler.
   echo-2 (fig. 8, nerf inféro-médial) : panneau C tracé le 7 octobre 2026 sur la lecture de Mat — proximal à gauche. */
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
  /* ---------- echo-2, panneau C (fig. 8) : LCM, interstice et métaphyse tibiale médiale ; cadre sans la barre Doppler ---------- */
  const C_MCL_HAUT = [[0,180],[200,195],[400,205],[550,223],[750,250],[850,257],[1000,265]];
  const C_MCL_BAS = [[0,298],[150,312],[310,330],[515,345],[650,340],[850,316],[1000,302]];
  const C_CORTEX = [[0,391],[100,405],[250,452],[350,480],[450,501],[550,515],[650,532],[750,549],[850,572],[950,570],[1000,572]];
  ECHO.anat['nerfs-genicules'].push({
    fig: 'img/nerfs-genicules/echo-2.jpg',
    crop: [0.045, 0.61, 0.455, 0.39], panneau: 'C (mode B, nerf géniculé inféro-médial)',
    valide: false,
    vb: [1000, 770], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : proximal à gauche. Même orientation que le schéma apparié (proximal à gauche) : pas de miroir.',
      'Certain — ligament collatéral médial (« MCL », jalonné par les trois flèches des auteurs, dont les pointes touchent sa face profonde), métaphyse tibiale médiale (mention des auteurs, bande brillante oblique avec ombre en dessous) et site du nerf géniculé inféro-médial (pointe de la grande tête de flèche, dans l\'interstice entre ligament et corticale).',
      'Probable — bords du ligament : face superficielle sur la ligne échogène y ≈ 180–265, face profonde sur la ligne des pointes de flèche (y ≈ 300–345) ; il s\'amincit vers la droite (distal).',
      'Probable — corticale : bord superficiel de la bande brillante, de y ≈ 390 (gauche) à ≈ 570 (droite) ; l\'interstice ligament / os s\'élargit vers la droite, et c\'est là que la tête de flèche pose le nerf.',
      'Supposition — contenu de l\'interstice (graisse, périoste, artère géniculée inféro-médiale non visible en mode B) : dessiné en tissu conjonctif ; le panneau D (Doppler) n\'est pas le même cadre que C, son signal n\'est pas reporté. Limite peau / tissu sous-cutané posée à l\'estime (y ≈ 40).',
      'Extrapolé — contour du nerf (site donné par la tête de flèche, aucun fascicule résolu sur 291 px) et profondeur de l\'os.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,40],[1000,40]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,40],[1000,40]], bas: C_MCL_HAUT },
      { id: 'mcl', tissu: 'ligament', haut: C_MCL_HAUT, bas: C_MCL_BAS },
      { id: 'interstice', tissu: 'conjonctif', haut: C_MCL_BAS, bas: C_CORTEX },
      { id: 'nerf', tissu: 'nerf', contour: ovale(790, 455, 20, 12), extrapole: true },
      { id: 'tibia', tissu: 'os', cortex: C_CORTEX },
    ],
    labels: [
      { s: 'sc', x: 650, y: 120, dx: 0, dy: -52, text: 'Tissu sous-cutané' },
      { s: 'mcl', x: 400, y: 265, dx: 0, dy: -132, text: 'Ligament collatéral médial (flèches des auteurs)' },
      { s: 'interstice', x: 600, y: 425, dx: -350, dy: 155, text: 'Interstice ligament / os (cible)' },
      { s: 'nerf', x: 790, y: 455, dx: -30, dy: 245, text: 'N. géniculé inféro-médial (tête de flèche)', vue: 'anat' },
      { s: 'tibia', x: 500, y: 530, dx: 160, dy: 70, text: 'Métaphyse tibiale médiale' },
    ],
  });
})();
