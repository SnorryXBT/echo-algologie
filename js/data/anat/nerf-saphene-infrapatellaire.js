/* Coupes anatomiques recalées — nerf saphène et branche infrapatellaire (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : nerf saphène sous le sartorius au tiers moyen de cuisse (Valera-Calero, Ultrasound Int Open 2026, fig. 9) — coupe tracée sur le
   seul panneau b (champ échographique), `crop` propre à la coupe, la planche a/b reste affichée entière dans la fiche.
   echo-2 (branche infrapatellaire, Spalkit et al., fig. 10D) : non tracée — le plan où chemine le nerf n'est pas lisible. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const DERME = [[0,32],[1000,32]];
  /* fascia lata : la plus épaisse et la plus continue des lignes brillantes, pics mesurés y ≈ 230–258 */
  const LATA = [[0,258],[100,258],[200,252],[300,251],[400,248],[450,242],[500,236],[600,238],[700,238],[800,238],[900,234],[1000,230]];
  /* fascia profond du sartorius : ligne brillante sur laquelle les auteurs ont posé le haut de leur cercle */
  const TOIT = [[340,447],[400,454],[470,460],[540,462],[590,457],[640,460],[700,444],[780,434],[850,442]];
  ECHO.anat['nerf-saphene-infrapatellaire'] = [{
    fig: 'img/nerf-saphene-infrapatellaire/echo-1.jpg',
    crop: [0.5152, 0.0501, 0.3835, 0.5465], panneau: 'b (champ échographique)',
    valide: false,
    vb: [1000, 756], orient: { left: 'Postéro-médial', right: 'Antéro-latéral' },
    lecture: [
      'Supposition — plage hypoéchogène ovalaire (≈ 10 × 4 mm) juste en dedans du nerf, sous le fascia profond du sartorius, là où la fiche situe l\'artère fémorale : non désignée par les auteurs, pas de Doppler, forme aplatie peu compatible avec une artère non comprimée. Vaisseaux fémoraux (veine écrasée par la sonde ?) ou faisceau du long adducteur : indécidable — dessinée en plan non attribué. Le repère central du geste n\'est donc pas identifié sur cette image.',
      'Certain — orientation : long adducteur à gauche, vaste médial et droit fémoral à droite (sigles des auteurs) ; image en miroir du schéma apparié (dit dans la légende).',
      'Certain — identité du sartorius, du long adducteur, du vaste médial, du droit fémoral et du nerf saphène (cerclé) : sigles des auteurs. Niveau : tiers moyen de cuisse (légende d\'origine), plus haut que le tiers inférieur visé par la fiche.',
      'Probable — sartorius : lentille entre le fascia lata (ligne brillante continue y ≈ 230–258) et son fascia profond (y ≈ 430–460), toit du canal ; le nerf est la plage hyperéchogène à l\'intérieur du cercle des auteurs, posée sous ce fascia.',
      'Supposition — limites des muscles en profondeur et sur les côtés (sartorius / long adducteur, sartorius / droit fémoral, droit fémoral / vaste médial, vaste médial / long adducteur sous le nerf) et contour du tissu conjonctif du canal : contraste faible sur 303 px, tracés sur les changements d\'échogénicité, à relire. Le fémur est hors champ.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: LATA },
      { id: 'al', tissu: 'muscle', contour: [[-40,262],[110,262],[160,272],[185,305],[230,350],[290,410],[330,450],[322,515],[340,565],[410,588],[520,592],[612,574],[640,605],[660,680],[668,760],[672,900],[-40,900]] },
      { id: 'vm', tissu: 'muscle', contour: [[645,462],[700,448],[780,438],[850,446],[885,452],[940,476],[1040,486],[1040,900],[672,900],[668,760],[660,680],[640,605],[642,548]] },
      { id: 'rf', tissu: 'muscle', contour: [[872,242],[1040,234],[1040,484],[940,472],[885,448],[876,420],[872,330]] },
      { id: 'sartorius', tissu: 'muscle', contour: [[165,268],[300,254],[450,246],[600,242],[750,242],[862,241],[868,330],[872,420],[850,440],[780,432],[700,442],[640,458],[590,455],[540,460],[470,458],[400,452],[340,445],[290,410],[230,350],[185,305]] },
      { id: 'canal', tissu: 'conjonctif', contour: [[330,452],[400,456],[470,462],[540,464],[590,459],[642,462],[642,548],[612,572],[520,592],[410,588],[340,565],[322,515]] },
      { id: 'plage', tissu: 'indetermine', contour: [[335,480],[380,468],[450,468],[520,474],[546,496],[540,535],[500,560],[420,566],[356,552],[330,516]] },
      { id: 'saphene', tissu: 'nerf', contour: ovale(588, 497, 37, 36) },
      { id: 'toit', tissu: 'fascia', ligne: TOIT, ep: 5 },
      { id: 'lata', tissu: 'fascia', ligne: LATA, ep: 6 },
    ],
    labels: [
      { s: 'sc', x: 250, y: 120, dx: -70, dy: -50, text: 'Tissu sous-cutané' },
      { s: 'lata', x: 760, y: 238, dx: 90, dy: -85, text: 'Fascia lata' },
      { s: 'sartorius', x: 400, y: 385, dx: -80, dy: -60, text: 'Sartorius', vue: 'anat' },
      { s: 'toit', x: 720, y: 441, dx: -80, dy: -69, text: 'Fascia profond du sartorius' },
      { s: 'rf', x: 950, y: 400, dx: -40, dy: -100, text: 'Droit fémoral', vue: 'anat' },
      { s: 'al', x: 110, y: 520, dx: 40, dy: -100, text: 'Long adducteur', vue: 'anat' },
      { s: 'saphene', x: 588, y: 500, dx: 6, dy: 155, text: 'Nerf saphène', vue: 'anat' },
      { s: 'plage', x: 430, y: 520, dx: -160, dy: 140, text: 'Plan non attribué (vaisseaux ?)' },
      { s: 'vm', x: 820, y: 600, dx: 0, dy: 80, text: 'Vaste médial', vue: 'anat' },
    ],
  }];
})();
