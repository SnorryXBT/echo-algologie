/* Coupes anatomiques recalées — poignet : radio-carpienne et kyste dorsal (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Patel et al., Skeletal Radiol, fig. 10b (coupe sagittale dorsale, sigles R / S, flèche pointillée = trajet prévu sur volontaire sain).
   echo-2 (Manske et al., IJSPT 2026, fig. 6A) : NON TRACÉE — plan de coupe non donné par la source ; l'image se lit comme une coupe longitudinale
   (pente dorsale du radius à gauche), alors que la scène appariée est transversale (radial / ulnaire). */
(function () {
  /* fascia superficiel : ligne hyperéchogène (pics 69–81 à gauche, puis 49–76 de x 350 à 950) */
  const F = [[0,75],[100,80],[200,74],[300,72],[350,60],[450,56],[550,58],[650,58],[750,60],[850,60],[1000,60]];
  /* radius : ligne inférieure (pics 130, 120, 127, 123, 114, 114, 109), rebord distal vers x ≈ 497 */
  const RAD = [[-40,136],[0,135],[100,130],[200,132],[250,127],[300,123],[350,114],[400,113],[450,109],[480,108],[497,116],[505,140],[512,200],[518,262],[515,620],[-40,620]];
  /* scaphoïde : pôle proximal dans l'interligne, surface dorsale (pics 206–213, 181, 176), puis prolongement non tranché */
  const SCA = [[524,620],[524,300],[530,255],[560,228],[600,208],[650,184],[700,176],[735,178],[780,198],[850,228],[900,250],[1040,300],[1040,620]];
  const CAPS = [[497,116],[530,135],[575,160],[620,178],[650,184]];
  ECHO.anat['poignet-radiocarpienne-kyste'] = [{
    fig: 'img/poignet-radiocarpienne-kyste/echo-1.jpg',
    valide: false,
    vb: [1000, 549], orient: { left: 'Proximal (radius)', right: 'Distal (carpe)' },
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
  }];
})();
