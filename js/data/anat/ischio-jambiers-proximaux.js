/* Coupes anatomiques recalées — ischio-jambiers proximaux (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : coupe longitudinale du tendon conjoint (Lin et al., J Med Ultrasound 2026, fig. 10c). Le panneau d de la planche, annoté et
   colorisé par les auteurs, vient d'un autre appareil : il donne l'identité et l'ordre des plans, pas le tracé.
   echo-2 (fig. 9c, coupe transversale, 270 px) : tracée le 7 octobre 2026 sur la lecture de Mat — le sciatique est la structure marquée SN sur le
   panneau d (lentille plate sous le grand fessier, en dehors du tendon du semi-membraneux) ; le panneau d vient d'un autre appareil et ne sert
   qu'aux positions relatives. */
(function () {
  const FASCIA_SUP = [[0,70],[100,90],[200,100],[300,104],[400,112],[500,117],[600,128],[700,122],[800,108],[900,80],[1000,55]];
  const GMAX_BAS = [[0,283],[100,277],[200,285],[300,292],[400,290],[450,277],[500,273],[550,280],[600,290],[700,296],[800,293],[900,290],[1000,285]];
  /* corticale : bord superficiel de la bande brillante ; elle plonge à x ≈ 430–465 (bord distal de la tubérosité) */
  const CORTEX = [[0,436],[50,428],[100,420],[150,424],[200,402],[250,390],[300,400],[350,408],[400,425],[430,462],[452,510],[465,555]];
  /* face profonde du tendon en aval de l'os : ligne échogène y ≈ 395–420 */
  const TENDON_PROF = [[450,420],[500,415],[600,405],[700,400],[800,400],[900,398],[1000,395]];
  ECHO.anat['ischio-jambiers-proximaux'] = [{
    fig: 'img/ischio-jambiers-proximaux/echo-1.jpg',
    valide: true,
    vb: [1000, 729], orient: { left: 'Proximal (ischion)', right: 'Distal' },
    lecture: [
      'Probable — face superficielle du tendon conjoint, c\'est-à-dire le plan d\'injection : placée sur l\'interface échogène continue y ≈ 275–295. À gauche, au-dessus de la tubérosité, cette interface s\'épaissit en une bande brillante (y ≈ 250–300) lue comme le fascia profond du grand fessier vu à 90° ; si ce sont les fibres superficielles du tendon, sa face superficielle est ≈ 3 mm plus haut à cet endroit.',
      'Supposition — face profonde du tendon en aval de la tubérosité : tracée sur la ligne échogène y ≈ 395–420, ce qui lui donne la même épaisseur que sur l\'os ; aucune interface nette avec le plan sous-jacent sur 258 px.',
      'Certain — orientation : la tubérosité ischiatique (corticale convexe, cône d\'ombre) est à gauche, donc proximal à gauche ; coupe « long-axis view of the conjoint tendon » (légende d\'origine). Le schéma apparié montre la voie transversale : plan différent, les deux axes ne se comparent pas (ce n\'est pas un miroir).',
      'Certain — ordre des plans : grand fessier, tendon conjoint inséré sur la tubérosité, semi-membraneux sous le tendon au pied de l\'os, grand adducteur en profondeur — panneau d de la planche, annoté par les auteurs (autre appareil, non recalé : il donne l\'identité, pas le tracé).',
      'Supposition — limite tissu sous-cutané / grand fessier : placée sur la bande échogène continue y ≈ 100–130 ; les travées graisseuses et les cloisons du muscle ont le même aspect strié au-dessus et au-dessous. La peau est hors cadre.',
      'Supposition — nodule échogène au pied de la corticale (x ≈ 450–600, y ≈ 540–630) : relief osseux plus distal ou origine du semi-membraneux, non désigné par les auteurs — dessiné en plan non attribué.',
      'Extrapolé — tendon du semi-membraneux : lentille placée là où le corrigé d la situe (sous le tendon conjoint, au bord distal de la tubérosité) ; sa limite avec le grand adducteur n\'est pas visible ici. Profondeur de l\'os (cône d\'ombre). Le nerf sciatique est hors du plan de coupe, en dehors.',
    ],
    structures: [
      { id: 'sc', tissu: 'graisse', haut: [[0,0],[1000,0]], bas: FASCIA_SUP },
      { id: 'gmax', tissu: 'muscle', haut: FASCIA_SUP, bas: GMAX_BAS },
      { id: 'cjt', tissu: 'tendon', haut: GMAX_BAS, bas: CORTEX.slice(0, 9).concat(TENDON_PROF), enthese: 0.4 },
      { id: 'adm', tissu: 'muscle', haut: [[400,425]].concat(TENDON_PROF), bas: [[400,729],[1000,729]] },
      { id: 'smt', tissu: 'tendon', haut: [[440,440],[520,422],[620,410],[720,404],[790,402]], bas: [[440,446],[470,500],[540,492],[620,472],[710,440],[790,404]], extrapole: true },
      { id: 'nodule', tissu: 'indetermine', contour: [[455,566],[485,540],[545,540],[602,574],[590,608],[525,630],[470,630],[450,602]] },
      { id: 'ischion', tissu: 'os', cortex: CORTEX },
    ],
    labels: [
      { s: 'sc', x: 330, y: 60, dx: -180, dy: -28, text: 'Tissu sous-cutané' },
      { s: 'gmax', x: 700, y: 200, dx: 120, dy: -60, text: 'Grand fessier' },
      { s: 'cjt', x: 300, y: 292, dx: -30, dy: -92, text: 'Plan d\'injection : face superficielle du tendon', vue: 'anat' },
      { s: 'cjt', x: 770, y: 345, dx: 90, dy: 118, text: 'Tendon conjoint' },
      { s: 'cjt', x: 290, y: 396, dx: -150, dy: 100, text: 'Enthèse' },
      { s: 'ischion', x: 220, y: 540, dx: 10, dy: 90, text: 'Tubérosité ischiatique' },
      { s: 'smt', x: 570, y: 452, dx: 200, dy: 96, text: 'Semi-membraneux', vue: 'anat' },
      { s: 'nodule', x: 525, y: 590, dx: -5, dy: 100, text: 'Plan non attribué' },
      { s: 'adm', x: 850, y: 600, dx: 0, dy: 70, text: 'Grand adducteur' },
    ],
  }];
  /* ---------- echo-2, panneau c (fig. 9c) : coupe transversale, sonde convexe ---------- */
  const C_TOP = [[0,175],[100,100],[200,48],[300,18],[400,3],[500,0],[600,3],[700,18],[800,48],[900,100],[1000,175]];
  const C_DERME = C_TOP.map(p => [p[0], p[1] + 22]);
  const C_FSUP = [[0,235],[100,232],[200,255],[300,248],[380,230],[420,172],[500,170],[550,156],[650,140],[700,170],[750,195],[800,200],[900,195],[1000,195]];
  /* bord profond du grand fessier : descend sur le nerf, puis remonte en pente raide vers le sommet de la tubérosité (comme sur le panneau d) */
  const C_SN_HAUT = [[170,382],[200,386],[250,404],[300,417],[340,420]];
  const C_SN_BAS = [[170,415],[200,443],[250,469],[300,464],[340,468]];
  const C_MONTEE = [[340,420],[400,364],[450,340],[500,313],[550,278],[600,292],[650,330],[690,380],[700,386]];
  const C_GMAX = [[0,335],[100,352]].concat(C_SN_HAUT, C_MONTEE);
  const C_SMT_HAUT = [[340,422],[400,431],[450,432],[500,446],[550,453],[600,470],[640,480]];
  const C_SMT_BAS = [[340,470],[400,497],[450,497],[500,508],[550,512],[600,520],[640,520]];
  const C_GT = [[0,655],[100,680],[200,715],[300,745],[340,770],[360,800]];
  const C_ISC = [[690,402],[700,386],[750,316],[800,275],[850,245],[900,216],[950,195],[1000,182]];
  const C_LIGNE = [[300,745],[330,700],[360,640],[400,595],[500,595],[600,600],[690,600]];
  ECHO.anat['ischio-jambiers-proximaux'].push({
    fig: 'img/ischio-jambiers-proximaux/echo-2.jpg',
    valide: false,
    vb: [1000, 796], orient: { left: 'Latéral (grand trochanter)', right: 'Médial (ischion)' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : le nerf sciatique est la structure marquée SN sur le panneau d des auteurs, c\'est-à-dire la lentille plate posée sous le grand fessier, en dehors du tendon du semi-membraneux et au-dessus du carré fémoral — et non l\'amas en nid d\'abeilles au pied de la corticale, qui correspond au tendon conjoint (CJT) du même corrigé.',
      'Certain — orientation : tubérosité ischiatique (corticale convexe, ombre) à droite, grand trochanter en bas à gauche, donc médial à droite ; image en miroir du schéma apparié (déjà dit dans la légende).',
      'Probable — contour du nerf : lentille de ≈ 170 × 50 (x 170–340) entre deux lignes échogènes (y ≈ 385–420 en haut, 440–470 en bas) ; la ligne profonde est son bord sur le carré fémoral, comme sur le panneau d. Son extrémité médiale passe sous l\'angle du plateau tendineux voisin ; aucun fascicule n\'est résolu à 270 px.',
      'Probable — tendon du semi-membraneux : bande fibrillaire très brillante qui descend de x ≈ 340 à 640 (y 420–520), en dedans du nerf ; tendon conjoint : région grenue entre le bord profond du grand fessier (qui remonte vers l\'ischion) et ce tendon, jusqu\'au pied de la corticale — identités reprises du panneau d (autre appareil, non recalé).',
      'Supposition — limites du carré fémoral (sous le nerf et le tendon) et de l\'obturateur externe (sous la ligne brillante y ≈ 595, x 400–720) : aucune n\'est désignée sur le panneau c. Fascia superficiel du grand fessier posé sur les lignes y ≈ 160–255 ; peau et tissu sous-cutané suivent l\'arc de la sonde convexe.',
      'Extrapolé — profondeur des deux os (ombres) ; corticale de la tubérosité suivie de son pied (x ≈ 690) à son sommet, le reste est hors champ.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: C_TOP, bas: C_DERME },
      { id: 'sc', tissu: 'graisse', haut: C_DERME, bas: C_FSUP },
      { id: 'gmax', tissu: 'muscle', haut: C_FSUP, bas: C_GMAX },
      { id: 'qf', tissu: 'muscle', haut: [[0,335],[100,352]].concat(C_SN_BAS, C_SMT_BAS, [[690,520]]), bas: C_GT.slice(0, 4).concat(C_LIGNE) },
      { id: 'oe', tissu: 'muscle', haut: C_LIGNE, bas: [[300,800],[690,800]] },
      { id: 'cjt', tissu: 'tendon', haut: C_MONTEE, bas: C_SMT_HAUT.concat([[690,400]]), enthese: -0.25 },
      { id: 'smt', tissu: 'tendon', haut: C_SMT_HAUT, bas: C_SMT_BAS },
      { id: 'sn', tissu: 'nerf', contour: C_SN_HAUT.concat(C_SN_BAS.slice().reverse()) },
      { id: 'gt', tissu: 'os', cortex: C_GT, vu: [0, 4] },
      { id: 'isc', tissu: 'os', cortex: C_ISC },
    ],
    labels: [
      { s: 'sc', x: 600, y: 90, dx: 190, dy: -40, text: 'Tissu sous-cutané' },
      { s: 'gmax', x: 300, y: 300, dx: -40, dy: -200, text: 'Grand fessier' },
      { s: 'sn', x: 255, y: 430, dx: -120, dy: 130, text: 'N. sciatique (SN du corrigé)' },
      { s: 'cjt', x: 520, y: 385, dx: -20, dy: -265, text: 'Tendon conjoint', vue: 'anat' },
      { s: 'smt', x: 490, y: 478, dx: 300, dy: 90, text: 'Tendon du semi-membraneux (probable)' },
      { s: 'isc', x: 830, y: 262, dx: 20, dy: -120, text: 'Tubérosité ischiatique' },
      { s: 'qf', x: 250, y: 560, dx: 80, dy: 70, text: 'Carré fémoral (supposé)' },
      { s: 'oe', x: 560, y: 690, dx: 0, dy: 70, text: 'Obturateur externe (supposé)' },
      { s: 'gt', x: 150, y: 700, dx: -10, dy: 70, text: 'Grand trochanter', vue: 'anat' },
    ],
  });
})();
