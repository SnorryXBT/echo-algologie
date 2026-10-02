/* Coupes anatomiques recalées — calcifications de la coiffe, barbotage (format : .claude/skills/echo-anatomie/SKILL.md).
   Pas de tissu « calcification » dans la palette : le dépôt est dessiné en `fascia` (plage crayeuse homogène, sans fibres). */
(function () {
  const dy = (pts, d) => pts.map(p => [p[0], p[1] + d]);
  /* --- echo-1 : calcification compacte, Chang et al. fig. 12c (l'image utile commence à x ≈ 105) --- */
  const F1 = [[105,64],[200,60],[350,59],[500,57],[650,65],[800,70],[1000,70]];
  const TOIT1 = [[105,330],[150,300],[187,272],[219,247],[300,190],[350,170],[400,155],[450,148],[500,144],[550,150],[600,160],[650,170],[700,188],[750,204],[800,220],[875,246],[940,275],[1000,300]];
  const TEND1 = dy(TOIT1, 17);
  const GT1 = [[105,350],[130,334],[175,318],[206,272],[262,252],[350,252],[437,258],[480,275],[560,302]];
  const HH1 = [[560,302],[640,322],[681,337],[750,369],[831,437],[900,505],[960,575]];
  /* --- echo-2 : barbotage, Romeo et al. fig. 1B --- */
  const F2 = [[0,92],[100,84],[200,86],[300,96],[400,108],[450,98],[500,90],[550,74],[600,70],[650,58],[750,52],[850,56],[950,62],[1000,62]];
  const ACR2 = [[0,150],[100,149],[150,156],[175,168],[195,190]];
  const TOIT2 = [[0,292],[60,283],[140,253],[185,217],[215,186],[300,184],[380,182],[437,175],[500,165],[600,150],[687,152],[750,163],[800,175],[875,196],[950,218],[1000,232]];
  const TEND2 = dy(TOIT2, 15);
  const HH2 = [[0,440],[100,400],[195,365],[300,332],[400,318],[500,322],[600,330],[700,318],[814,294],[900,290],[979,296],[1000,300]];
  ECHO.anat['calcifications-coiffe-barbotage'] = [{
    fig: 'img/calcifications-coiffe-barbotage/echo-1.jpg',
    valide: false,
    vb: [1000, 589], orient: { left: 'Latéral (grand tubercule)', right: 'Médial' },
    lecture: [
      'Certain — orientation et identité des plans : deltoïde (DEL), grand tubercule à gauche (GT), tendon du supra-épineux (SS T), foyer calcique entre les deux flèches noires — sigles et légende des auteurs (« compact calcific focus with posterior acoustic shadowing »). Image en miroir du schéma apparié.',
      'Certain — arc hyperéchogène du dépôt (y ≈ 235–245) et cône d\'ombre sous-jacent, qui interrompt la corticale entre x ≈ 500 et 680.',
      'Probable — la ligne hyperéchogène convexe sous le deltoïde est le complexe graisse péribursale / bourse ; la lame bursale elle-même n\'est pas résolue (image de 270 px).',
      'Probable — la corticale qui plonge à droite du dépôt (x 680–830) est la tête humérale, en dedans de l\'empreinte du tendon.',
      'Supposition — plage hyperéchogène arrondie dans le tendon, juste en dehors des flèches (x ≈ 440–490, y ≈ 180–205) : second foyer calcique ou anisotropie ; non désignée par les auteurs, non dessinée.',
      'Extrapolé — face profonde du dépôt et corticale sous le cône d\'ombre ; corticale au-delà de x = 830 (encart photographique des auteurs dans le coin inférieur droit) ; bande noire à gauche de x ≈ 105 : hors champ.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[105,0],[1000,0]], bas: [[105,28],[1000,28]] },
      { id: 'sc', tissu: 'graisse', haut: [[105,28],[1000,28]], bas: F1 },
      { id: 'deltoide', tissu: 'muscle', haut: F1, bas: TOIT1 },
      { id: 'bourse', tissu: 'bourse', haut: TOIT1, bas: TEND1 },
      { id: 'tendon', tissu: 'tendon', enthese: 0.3, haut: TEND1.slice(1), bas: [[150,319]].concat(GT1.slice(2), HH1.slice(1)) },
      { id: 'calcification', tissu: 'calcification', contour: [[496,264],[519,245],[550,236],[600,237],[650,244],[680,255],[695,275],[680,293],[620,299],[550,293],[500,281]] },
      { id: 'gt', tissu: 'os', cortex: GT1, vu: [2, 7] },
      { id: 'tete', tissu: 'os', cortex: HH1, vu: [1, 4] },
    ],
    labels: [
      { s: 'sc', x: 400, y: 44, dx: -150, dy: 74, text: 'Graisse sous-cutanée' },
      { s: 'bourse', x: 420, y: 160, dx: 100, dy: -138, text: 'Bourse et graisse péribursale' },
      { s: 'deltoide', x: 720, y: 115, dx: 150, dy: -15, text: 'Deltoïde', vue: 'anat' },
      { s: 'tendon', x: 420, y: 215, dx: -30, dy: 333, text: 'Tendon du supra-épineux', vue: 'anat' },
      { s: 'calcification', x: 600, y: 262, dx: 10, dy: 198, text: 'Calcification', vue: 'anat' },
      { s: 'calcification', x: 610, y: 300, dx: 0, dy: 160, text: 'Cône d\'ombre', vue: 'echo' },
      { s: 'gt', x: 300, y: 300, dx: -95, dy: 150, text: 'Grand tubercule', vue: 'anat' },
      { s: 'tete', x: 760, y: 420, dx: -90, dy: 128, text: 'Tête humérale' },
    ],
  }, {
    fig: 'img/calcifications-coiffe-barbotage/echo-2.jpg',
    valide: false,
    vb: [1000, 697], orient: { left: 'Médial (acromion)', right: 'Latéral' },
    lecture: [
      'Probable — orientation : la légende d\'origine ne la donne pas. Elle est déduite de la corticale superficielle à cône d\'ombre franc, à gauche, lue comme l\'acromion sous lequel s\'engage le tendon ; l\'aiguille vient alors du bord latéral, comme dans la fiche. À confirmer par Mat.',
      'Certain — aiguille (trait hyperéchogène oblique venant de la droite) et dépôt calcique (flèche des auteurs, « toothpaste-like », pointe de l\'aiguille dans le dépôt selon la légende). Limites du dépôt floues, sans cône d\'ombre : contour approximatif.',
      'Probable — second trait parallèle, plus profond et moins brillant : réverbération de l\'aiguille (la légende ne mentionne qu\'une aiguille 20 G) ; à ne pas prendre pour la seconde aiguille du schéma apparié (lavage à deux aiguilles).',
      'Probable — ligne convexe hyperéchogène sous le deltoïde = complexe bourse / graisse péribursale ; tendon du supra-épineux en dessous.',
      'Supposition — limite graisse sous-cutanée / deltoïde à gauche et au centre : lobules et septa mêlés.',
      'Extrapolé — sous l\'acromion (cône d\'ombre) : face profonde de l\'acromion, bourse, tendon et tête humérale prolongés par connaissance anatomique. Corticale de la tête humérale et du grand tubercule : aucune ligne corticale continue n\'est identifiable sur cette image (pointillé, placée sous les derniers échos tendineux ; le trait bref à droite, y ≈ 290, pourrait être le grand tubercule). L\'épaisseur du tendon est donc incertaine.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,18],[1000,18]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,18],[1000,18]], bas: F2 },
      { id: 'deltoide', tissu: 'muscle', haut: F2, bas: ACR2.concat(TOIT2.slice(4)) },
      { id: 'bourse', tissu: 'bourse', haut: TOIT2, bas: TEND2 },
      { id: 'tendon', tissu: 'tendon', haut: TEND2, bas: HH2 },
      { id: 'calcification', tissu: 'calcification', contour: [[495,262],[530,240],[580,232],[640,236],[680,250],[690,270],[660,290],[620,305],[575,312],[530,300],[500,285]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,157],[580,307]], ep: 5 },
      { id: 'acromion', tissu: 'os', contour: [[-40,150]].concat(ACR2.slice(1), [[183,213],[140,248],[60,278],[-40,290]]), vu: [0, 4] },
      { id: 'tete', tissu: 'os', cortex: HH2, extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 370, y: 68, dx: -200, dy: -38, text: 'Graisse sous-cutanée' },
      { s: 'deltoide', x: 560, y: 120, dx: 0, dy: -90, text: 'Deltoïde' },
      { s: 'aiguille', x: 900, y: 192, dx: -30, dy: -162, text: 'Aiguille 20 G' },
      { s: 'acromion', x: 90, y: 150, dx: 5, dy: 250, text: 'Acromion' },
      { s: 'bourse', x: 300, y: 191, dx: -30, dy: 409, text: 'Bourse sous-acromio-deltoïdienne' },
      { s: 'tendon', x: 430, y: 262, dx: 50, dy: 258, text: 'Tendon du supra-épineux' },
      { s: 'calcification', x: 530, y: 275, dx: 70, dy: 155, text: 'Dépôt calcique', vue: 'anat' },
      { s: 'aiguille', x: 640, y: 316, dx: 160, dy: 114, text: 'Réverbération de l\'aiguille', vue: 'echo' },
      { s: 'tete', x: 700, y: 360, dx: 100, dy: 225, text: 'Tête humérale (non vue)', vue: 'anat' },
    ],
  }];
})();
