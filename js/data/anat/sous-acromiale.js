/* Coupes anatomiques recalées — bourse sous-acromio-deltoïdienne (format : .claude/skills/echo-anatomie/SKILL.md) */
(function () {
  const FASCIA = [[0,100],[150,92],[300,88],[500,90],[700,97],[850,88],[1000,92]];
  const TOIT = [[0,395],[50,335],[100,288],[150,258],[200,236],[250,222],[300,213],[350,209],[400,206],[450,210],[500,209],[550,213],[600,220],[650,225],[700,236],[750,242],[800,258],[850,272],[900,290],[950,320],[1000,350]];
  const TENDON = [[20,412],[30,400],[60,350],[100,322],[150,295],[200,278],[250,266],[300,258],[350,254],[400,252],[450,255],[500,255],[550,258],[600,264],[650,270],[700,280],[750,290],[800,305],[850,325],[900,350],[950,385],[1000,420]];
  const CORTEX = [[0,425],[50,392],[100,356],[150,343],[200,342],[300,342],[400,339],[432,344],[452,362],[500,369],[545,382],[572,390],[600,378],[650,373],[700,380],[750,390],[800,414],[850,446],[900,490],[950,548],[1000,615]];
  ECHO.anat['sous-acromiale'] = [{
    fig: 'img/sous-acromiale/echo-2.jpg',
    valide: false,
    vb: [1000, 791], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : grand tubercule à gauche, tête humérale et cartilage à droite (panneau d de la même figure, annoté GT / CAR / HH par les auteurs).',
      'Probable — la lame hypoéchogène fine (y ≈ 250) sous la bande hyperéchogène épaisse est la bourse ; la bande épaisse au-dessus est la graisse péribursale.',
      'Probable — bande hypoéchogène au-dessus de la corticale du grand tubercule rattachée au tendon (anisotropie de l\'enthèse).',
      'Supposition — limite deltoïde / graisse sous-cutanée en dedans (x > 650) : lobules et septa mêlés, image de 263 px de large.',
      'Extrapolé — corticale et cartilage au-delà de x = 900 (hors signal).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,38],[1000,38]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,38],[1000,38]], bas: FASCIA },
      { id: 'deltoide', tissu: 'muscle', haut: FASCIA, bas: TOIT },
      { id: 'bourse', tissu: 'bourse', haut: TOIT, bas: TENDON, lame: [0, 0.2] },
      { id: 'tendon', tissu: 'tendon', enthese: 0.38, haut: TENDON, bas: [[20,412]].concat(CORTEX.slice(1)) },
      { id: 'cartilage', tissu: 'cartilage', bas: CORTEX.slice(12), ep: 26 },
      { id: 'os', tissu: 'os', cortex: CORTEX, vu: [0, 18] },
    ],
    labels: [
      { s: 'deltoide', x: 250, y: 150, dx: -130, dy: -80, text: 'Deltoïde' },
      { s: 'bourse', x: 470, y: 249, dx: 0, dy: -205, text: 'Bourse sous-acromio-deltoïdienne' },
      { s: 'sc', x: 700, y: 66, dx: 150, dy: 30, text: 'Graisse sous-cutanée' },
      { s: 'bourse', x: 700, y: 256, dx: 160, dy: -80, text: 'Graisse péribursale' },
      { s: 'tendon', x: 520, y: 310, dx: -50, dy: 250, text: 'Tendon du supra-épineux' },
      { s: 'os', x: 250, y: 400, dx: -60, dy: 250, text: 'Grand tubercule' },
      { s: 'os', x: 720, y: 470, dx: -60, dy: 215, text: 'Tête humérale' },
      { s: 'cartilage', x: 772, y: 386, dx: 130, dy: 180, text: 'Cartilage' },
      { s: 'os', x: 420, y: 650, dx: -20, dy: 95, text: 'Échos sous la corticale : artéfacts', vue: 'echo' },
    ],
  }];
})();
