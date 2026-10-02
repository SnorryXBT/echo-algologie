/* Coupes anatomiques recalées — ischio-jambiers proximaux (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : coupe longitudinale du tendon conjoint (Lin et al., J Med Ultrasound 2026, fig. 10c). Le panneau d de la planche, annoté et
   colorisé par les auteurs, vient d'un autre appareil : il donne l'identité et l'ordre des plans, pas le tracé.
   echo-2 (fig. 9c, coupe transversale) : non tracée — le nerf sciatique n'y est pas identifiable avec certitude à 270 px. */
(function () {
  const FASCIA_SUP = [[0,70],[100,90],[200,100],[300,104],[400,112],[500,117],[600,128],[700,122],[800,108],[900,80],[1000,55]];
  const GMAX_BAS = [[0,283],[100,277],[200,285],[300,292],[400,290],[450,277],[500,273],[550,280],[600,290],[700,296],[800,293],[900,290],[1000,285]];
  /* corticale : bord superficiel de la bande brillante ; elle plonge à x ≈ 430–465 (bord distal de la tubérosité) */
  const CORTEX = [[0,436],[50,428],[100,420],[150,424],[200,402],[250,390],[300,400],[350,408],[400,425],[430,462],[452,510],[465,555]];
  /* face profonde du tendon en aval de l'os : ligne échogène y ≈ 395–420 */
  const TENDON_PROF = [[450,420],[500,415],[600,405],[700,400],[800,400],[900,398],[1000,395]];
  ECHO.anat['ischio-jambiers-proximaux'] = [{
    fig: 'img/ischio-jambiers-proximaux/echo-1.jpg',
    valide: false,
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
})();
