/* Coupes anatomiques recalées — socle cryoneurolyse (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 et echo-2 : Rhame et al., Case Rep Anesthesiol 2011, fig. 4 (1 min 30) et fig. 5 (4 min) — même coupe dans l'axe
   de la cryosonde, face latérale de la jambe gauche, mi-fibula. Corrigé indirect : fig. 3 des auteurs (« in-plane view of
   the cryoprobe and fibula », non reprise dans le mémo), où la seule ligne osseuse est la corticale fibulaire, oblique,
   montant vers la droite — la même que sur fig. 4 et 5. Calipers jaunes des auteurs = diamètre de la lésion.
   Boule rendue par le tissu « glace » du moteur. */
(function () {
  const PEAU_H = [[0,-10],[1000,-10]], PEAU_B = [[0,48],[1000,48]];
  const MUSC = [[0,215],[200,212],[400,205],[500,200],[600,198],[700,198],[800,186],[900,176],[1000,170]];
  const FIB = [[0,400],[100,393],[230,373],[400,355],[550,328],[680,300],[750,290],[800,280],[850,268],[900,258],[1000,250]];
  const BAS = [[0,700],[1000,700]];

  const lecture = (fig, boule) => [
    'Probable — orientation : coupe dans l\'axe de la cryosonde, donc dans l\'axe de la jambe. La cryosonde a été introduite « environ 2 cm en amont » de la zone greffée (texte des auteurs) et entre ici par la gauche de l\'écran : proximal à gauche. Les auteurs n\'écrivent pas l\'axe sur l\'image.',
    'Certain — cryosonde : ligne hyperéchogène épaisse (14 G) venue du bord gauche. Boule de glace : ' + boule,
    'Probable — fibula : ligne hyperéchogène oblique à cône d\'ombre, à ≈ 1 cm de la peau (échelle de la sonde : 1 cm = 246 unités du tracé). Non désignée sur cette figure ; identifiée par la fig. 3 des auteurs, dont c\'est la seule ligne osseuse, de même pente et de même profondeur. ' + fig,
    'Supposition — muscle entre la cryosonde et la fibula (loge latérale : long et court fibulaires, non séparés) : plan fibrillaire plus brillant que les couches superficielles. Plans superficiels (peau greffée, cicatrice de dégantage, tissu sous-cutané) : limites non résolues, laissés « non attribués ».',
    'Extrapolé — corticale fibulaire sous la boule et son ombre (pointillé), tout ce qui est derrière la boule. Le névrome sural, cible clinique, n\'est pas visible (les auteurs ne l\'ont pas vu) : ils disent avoir placé la boule pour qu\'elle englobe le périoste, où les moignons nerveux avaient été enfouis.',
  ];
  const commun = (glace, sonde, vu) => [
    { id: 'peau', tissu: 'peau', haut: PEAU_H, bas: PEAU_B },
    { id: 'superficiel', tissu: 'indetermine', haut: PEAU_B, bas: MUSC },
    { id: 'muscle', tissu: 'muscle', haut: MUSC, bas: BAS },
    { id: 'fibula', tissu: 'os', cortex: FIB, vu },
    { id: 'glace', tissu: 'glace', contour: glace },
    { id: 'cryosonde', tissu: 'aiguille', ligne: sonde, ep: 11 },
  ];

  ECHO.anat['socle-cryoneurolyse'] = [{
    fig: 'img/socle-cryoneurolyse/echo-1.jpg',
    valide: true,
    vb: [1000, 667], orient: { left: 'Proximal (probable)', right: 'Distal' },
    lecture: lecture('Segment gauche (x ≈ 100–400) : continuation probable de la même corticale, interrompue par l\'ombre de la boule.',
      'plage anéchogène à liseré antérieur hyperéchogène, née de la pointe, 0,80 cm (calipers), suivie d\'un cône d\'ombre franc.'),
    structures: commun([[458,215],[480,198],[530,192],[590,195],[635,215],[660,250],[655,290],[625,322],[575,342],[520,340],[475,315],[455,275]],
      [[0,135],[465,194]], [[0, 3], [5, 10]]),
    labels: [
      { s: 'superficiel', x: 300, y: 90, dx: 40, dy: -45, text: 'Plans superficiels non séparés' },
      { s: 'cryosonde', x: 150, y: 150, dx: 0, dy: 110, text: 'Cryosonde' },
      { s: 'glace', x: 600, y: 195, dx: 200, dy: -85, text: 'Liseré : bord visible de la boule', vue: 'echo' },
      { s: 'glace', x: 600, y: 290, dx: 160, dy: 190, text: 'Boule de glace (tissu gelé)', vue: 'anat' },
      { s: 'muscle', x: 260, y: 290, dx: -40, dy: 190, text: 'Muscle (fibulaires ?)' },
      { s: 'fibula', x: 850, y: 268, dx: 0, dy: 120, text: 'Fibula' },
      { s: 'glace', x: 560, y: 430, dx: -120, dy: 140, text: 'Cône d\'ombre', vue: 'echo' },
    ],
  }, {
    fig: 'img/socle-cryoneurolyse/echo-2.jpg',
    valide: true,
    vb: [1000, 663], orient: { left: 'Proximal (probable)', right: 'Distal' },
    lecture: lecture('Ligne profonde gauche de la fig. 4 à peine visible ici : seule la corticale de droite est tracée en plein.',
      'à 4 min, 1,12 cm (calipers) ; contour posé sur la limite sombre supérieure, l\'arc brillant qu\'elle contient (y ≈ 128) étant lu comme son bord antérieur réverbéré (Probable). Elle atteint en profondeur le niveau de la corticale extrapolée.'),
    structures: commun([[405,215],[415,160],[450,120],[500,98],[545,92],[600,105],[645,140],[675,185],[690,235],[685,280],[655,312],[600,325],[530,322],[470,305],[425,270]],
      [[0,154],[420,171]], [5, 10]),
    labels: [
      { s: 'superficiel', x: 780, y: 100, dx: 20, dy: -55, text: 'Plans superficiels non séparés' },
      { s: 'cryosonde', x: 200, y: 160, dx: 0, dy: 110, text: 'Cryosonde' },
      { s: 'glace', x: 530, y: 128, dx: 270, dy: 90, text: 'Arc brillant : bord antérieur', vue: 'echo' },
      { s: 'glace', x: 600, y: 250, dx: 200, dy: 230, text: 'Boule de glace (tissu gelé)', vue: 'anat' },
      { s: 'muscle', x: 260, y: 300, dx: -40, dy: 180, text: 'Muscle (fibulaires ?)' },
      { s: 'fibula', x: 860, y: 266, dx: 0, dy: 120, text: 'Fibula' },
      { s: 'glace', x: 560, y: 430, dx: -120, dy: 140, text: 'Cône d\'ombre', vue: 'echo' },
    ],
  }];
})();
