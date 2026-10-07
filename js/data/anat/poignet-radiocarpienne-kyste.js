/* Coupes anatomiques recalées — poignet : radio-carpienne et kyste dorsal (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Patel et al., Skeletal Radiol, fig. 10b (coupe sagittale dorsale, sigles R / S, flèche pointillée = trajet prévu sur volontaire sain).
   echo-2 : Manske et al., IJSPT 2026, fig. 6A — plan non donné par la source ; lecture sagittale dorsale, radius à gauche, confirmée par Mat
   (7 octobre 2026), figure réappariée au schéma sagittal du poignet. */
(function () {
  /* --- echo-2 (Manske, sagittale dorsale, radius à gauche) --- */
  const EXT2H = [[0,58],[100,80],[200,95],[400,100],[600,98],[800,102],[1000,100]];
  const EXT2B = [[0,80],[60,114],[100,136],[200,145],[400,150],[460,150],[600,146],[800,152],[1000,150]];
  const RAD2 = [[-20,75],[0,85],[60,120],[90,140],[150,160],[250,195],[350,250],[450,320],[520,370],[530,610],[-20,610]];
  const CARPE2 = [[525,610],[530,335],[560,305],[650,300],[720,290],[780,298],[830,322],[900,336],[960,345],[1020,340],[1020,610]];
  /* fascia superficiel : ligne hyperéchogène (pics 69–81 à gauche, puis 49–76 de x 350 à 950) */
  const F = [[0,75],[100,80],[200,74],[300,72],[350,60],[450,56],[550,58],[650,58],[750,60],[850,60],[1000,60]];
  /* radius : ligne inférieure (pics 130, 120, 127, 123, 114, 114, 109), rebord distal vers x ≈ 497 */
  const RAD = [[-40,136],[0,135],[100,130],[200,132],[250,127],[300,123],[350,114],[400,113],[450,109],[480,108],[497,116],[505,140],[512,200],[518,262],[515,620],[-40,620]];
  /* scaphoïde : pôle proximal dans l'interligne, surface dorsale (pics 206–213, 181, 176), puis prolongement non tranché */
  const SCA = [[524,620],[524,300],[530,255],[560,228],[600,208],[650,184],[700,176],[735,178],[780,198],[850,228],[900,250],[1040,300],[1040,620]];
  const CAPS = [[497,116],[530,135],[575,160],[620,178],[650,184]];
  ECHO.anat['poignet-radiocarpienne-kyste'] = [{
    fig: 'img/poignet-radiocarpienne-kyste/echo-1.jpg',
    valide: true,
    vb: [1000, 549], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Probable — corticale dorsale du radius : deux lignes hyperéchogènes convergent vers le rebord distal (arc supérieur, y ≈ 78–105 de x 340 à 490 ; ligne inférieure, y ≈ 108–130, plus longue). La ligne inférieure, suivie jusqu\'au bord gauche, est retenue comme corticale ; l\'arc supérieur, ≈ 1 mm au-dessus, est laissé dans le plan dorsal non attribué (face profonde d\'un tendon ? relief du tubercule de Lister hors plan ?). Si c\'est lui la corticale, le radius est à remonter d\'autant.',
      'Certain — orientation et os : épiphyse distale du radius (R) à gauche, scaphoïde (S) à droite — sigles et légende des auteurs ; proximal à gauche, comme le schéma apparié.',
      'Certain — cible : la tête de flèche des auteurs désigne l\'interligne, entre le rebord du radius et le pôle proximal du scaphoïde. Leur flèche pointillée est un trajet prévu (volontaire sain, pas d\'aiguille en place), de distal en proximal, comme dans la fiche.',
      'Probable — scaphoïde : surface dorsale hyperéchogène (x 560–735, y ≈ 176–228), pôle proximal plongeant dans l\'interligne. Supposition — la ligne brillante plus distale (x ≈ 800–870, y ≈ 228) : même os ou os de la rangée distale, non tranché (pointillé).',
      'Supposition — plan dorsal, entre le fascia (y ≈ 56–80) et l\'os : stries longitudinales compatibles avec des tendons extenseurs posés sur la capsule, mais aucun tendon n\'est individualisable ni désigné par les auteurs — « plan non attribué ». Le trajet dessiné le traverse obliquement : l\'image ne permet pas de dire s\'il passe entre deux tendons ou à travers l\'un d\'eux, alors que la fiche demande de ne pas les traverser.',
      'Extrapolé — récessus dorsal radio-carpien (non distendu, non visible) : dessiné sous la capsule, entre le rebord du radius et le scaphoïde, là où pointe la flèche des auteurs. Face articulaire du radius, profondeur des os (cône d\'ombre), épaisseur de la peau. Le trajet de l\'aiguille est reporté sur la coupe anatomique d\'après la flèche des auteurs.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,40],[1000,40]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,40],[1000,40]], bas: F },
      { id: 'dorsal', tissu: 'indetermine', haut: F, bas: RAD.slice(1, 11).concat(CAPS.slice(1), SCA.slice(6, 12)) },
      { id: 'recessus', tissu: 'liquide', fin: true, extrapole: true, contour: CAPS.concat([[600,208],[560,228],[530,255],[524,300],[518,262],[512,200],[505,140]]) },
      { id: 'trajet', tissu: 'aiguille', extrapole: true, ligne: [[1000,5],[540,204]], ep: 5 },
      { id: 'radius', tissu: 'os', contour: RAD, vu: [1, 10] },
      { id: 'scaphoide', tissu: 'os', contour: SCA, vu: [3, 7] },
    ],
    labels: [
      { s: 'dorsal', x: 250, y: 98, dx: -40, dy: -70, text: 'Plan dorsal non attribué', vue: 'anat' },
      { s: 'sc', x: 520, y: 50, dx: 100, dy: -28, text: 'Tissu sous-cutané' },
      { s: 'radius', x: 300, y: 190, dx: -70, dy: 110, text: 'Radius (épiphyse distale)', vue: 'anat' },
      { s: 'recessus', x: 522, y: 228, dx: -72, dy: 212, text: 'Interligne radio-carpien (cible)' },
      { s: 'scaphoide', x: 690, y: 235, dx: -40, dy: 125, text: 'Scaphoïde', vue: 'anat' },
      { s: 'trajet', x: 760, y: 109, dx: 80, dy: 191, text: 'Trajet prévu de l\'aiguille', vue: 'anat' },
    ],
  }, {
    fig: 'img/poignet-radiocarpienne-kyste/echo-2.jpg',
    valide: false,
    vb: [1000, 611], orient: { left: 'Proximal (radius)', right: 'Distal (carpe)' },
    lecture: [
      'Certain — lecture donnée par Mat : coupe sagittale dorsale, radius à gauche (le plan n\'est pas donné par la source). Même orientation que le schéma apparié.',
      'Certain — kyste : poche anéchogène bien limitée (x ≈ 455–815, y ≈ 148–292), renforcement postérieur net sous elle (plage brillante y ≈ 395–445, x ≈ 540–650).',
      'Probable — radius : ligne hyperéchogène oblique (de x ≈ 0, y ≈ 85 à x ≈ 520, y ≈ 370), cône d\'ombre dessous ; c\'est la pente dorsale de l\'épiphyse, qui finit à l\'interligne sous le bord proximal du kyste.',
      'Supposition — carpe (première rangée) : bande brillante irrégulière sous le kyste (y ≈ 290–360) et au-delà (x > 820, y ≈ 330–350) ; mêlée au renforcement postérieur, la corticale exacte n\'est pas lisible sur 350 px. Os non nommé : la source ne le désigne pas.',
      'Supposition — plan fibrillaire superficiel (y ≈ 95–150) : tendons extenseurs probables (coupe dorsale), non désignés par les auteurs ; tissu gris entre ce plan et le radius : capsule et graisse, non attribuables.',
      'Extrapolé — épaisseur de la peau ; corticales sous les cônes d\'ombre.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,14],[1000,14]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,14],[1000,14]], bas: EXT2H },
      { id: 'tendons', tissu: 'tendon', haut: EXT2H, bas: EXT2B },
      { id: 'plans', tissu: 'indetermine', haut: EXT2B, bas: [[0,610],[1000,610]] },
      { id: 'kyste', tissu: 'liquide', contour: [[455,230],[470,182],[520,156],[600,148],[700,150],[770,165],[810,200],[815,250],[790,285],[700,285],[640,292],[560,290],[490,270]] },
      { id: 'radius', tissu: 'os', cortex: RAD2, vu: [0, 7] },
      { id: 'carpe', tissu: 'os', extrapole: true, cortex: CARPE2, vu: [1, 8] },
    ],
    labels: [
      { s: 'kyste', x: 640, y: 220, dx: 120, dy: -170, text: 'Kyste arthro-synovial' },
      { s: 'radius', x: 300, y: 228, dx: -120, dy: 230, text: 'Radius (pente dorsale)' },
      { s: 'carpe', x: 900, y: 340, dx: 0, dy: 170, text: 'Carpe (1re rangée)', vue: 'anat' },
      { s: 'tendons', x: 250, y: 120, dx: -80, dy: -80, text: 'Tendons extenseurs ?', vue: 'anat' },
      { s: 'plans', x: 380, y: 230, dx: 0, dy: -120, text: 'Plan non attribué', vue: 'anat' },
    ],
  }];
})();
