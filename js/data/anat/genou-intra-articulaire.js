/* Coupes anatomiques recalées — genou, récessus supra-patellaire (format : .claude/skills/echo-anatomie/SKILL.md) */
(function () {
  const TQ_HAUT = [[0,150],[150,160],[300,170],[450,180],[600,195],[750,215],[850,220],[920,205],[1000,190]];
  const TQ_BAS = [[0,395],[200,385],[400,380],[550,362],[650,335],[760,292],[850,250],[905,212]];
  const RECESSUS = [[450,412],[560,430],[680,455],[790,465],[835,455]];
  const CORTEX = [[0,440],[120,455],[250,478],[380,500],[500,522],[620,548],[720,572],[820,590],[880,600],[1000,625]];
  ECHO.anat['genou-intra-articulaire'] = [{
    fig: 'img/genou-intra-articulaire/echo-1.jpg',
    valide: false,
    vb: [1000, 681], orient: { left: 'Proximal', right: 'Distal (patella)' },
    lecture: [
      'Certain — orientation et identité des plans : patella à droite, fémur en profondeur, graisse supra-patellaire (SF), récessus (astérisques), graisse pré-fémorale (étoiles), muscle articulaire du genou (AG) — légende et corrigé coloré des auteurs (moitié droite de la planche).',
      'Probable — tendon quadricipital tracé d\'un seul tenant ; ses trois lames (droit fémoral, vastes, vaste intermédiaire) sont désignées par les auteurs mais non séparables au trait sur 370 px.',
      'Probable — récessus : fente virtuelle tracée sur la ligne des astérisques, prolongée en proximal sous le tendon ; aucune lame liquidienne mesurable sur cette image (genou sec).',
      'Supposition — contour du muscle articulaire du genou (plage hypoéchogène autour du sigle AG).',
      'Extrapolé — patella : seul son cône d\'ombre est visible (base tangente au faisceau), contour dessiné en pointillé ; le coin inférieur droit de l\'image est masqué par un encart photographique des auteurs.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,25],[1000,25]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,25],[1000,25]], bas: TQ_HAUT },
      { id: 'tq', tissu: 'tendon', haut: TQ_HAUT, bas: TQ_BAS.concat([[1000,195]]) },
      { id: 'sf', tissu: 'graisse', contour: [[400,380],[550,362],[650,335],[760,292],[850,250],[832,320],[815,400],[835,455],[790,465],[680,455],[560,430],[450,412]] },
      { id: 'prefem', tissu: 'graisse', haut: TQ_BAS.slice(0, 3).concat(RECESSUS), bas: CORTEX.slice(0, 8) },
      { id: 'ag', tissu: 'muscle', haut: [[440,477],[520,460],[620,464],[720,487],[765,517]], bas: [[440,480],[520,502],[620,527],[700,546],[765,521]] },
      { id: 'recessus', tissu: 'liquide', ligne: RECESSUS, ep: 8 },
      { id: 'patella', tissu: 'os', contour: [[905,210],[860,255],[832,320],[815,400],[840,452],[1040,470],[1040,190]], extrapole: true },
      { id: 'femur', tissu: 'os', cortex: CORTEX, vu: [0, 8] },
    ],
    labels: [
      { s: 'sc', x: 500, y: 95, dx: -60, dy: -55, text: 'Graisse sous-cutanée' },
      { s: 'tq', x: 250, y: 290, dx: -50, dy: -180, text: 'Tendon quadricipital (3 lames)' },
      { s: 'recessus', x: 700, y: 458, dx: -110, dy: -338, text: 'Récessus supra-patellaire (virtuel)' },
      { s: 'sf', x: 740, y: 372, dx: 135, dy: -215, text: 'Graisse supra-patellaire' },
      { s: 'patella', x: 900, y: 320, dx: 5, dy: 95, text: 'Patella' },
      { s: 'prefem', x: 250, y: 432, dx: -100, dy: 128, text: 'Graisse pré-fémorale' },
      { s: 'femur', x: 400, y: 560, dx: 20, dy: 70, text: 'Fémur' },
      { s: 'ag', x: 600, y: 497, dx: 80, dy: 145, text: 'M. articulaire du genou' },
    ],
  }];
})();
