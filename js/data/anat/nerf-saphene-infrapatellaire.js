/* Coupes anatomiques recalées — nerf saphène et branche infrapatellaire (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : nerf saphène sous le sartorius au tiers moyen de cuisse (Valera-Calero, Ultrasound Int Open 2026, fig. 9) — coupe tracée sur le
   seul panneau b (champ échographique), `crop` propre à la coupe, la planche a/b reste affichée entière dans la fiche.
   echo-2 : remplacée le 7 octobre 2026 (Spalkit et al., fig. 10D, plan du nerf illisible, retirée sur décision de Mat) par Yang et al.,
   European Radiology 2022, fig. 2 (CC BY) — névrome en continuité de la branche infrapatellaire, fémur et tibia nommés ; coupe tracée sur le
   seul panneau a dans le second bloc ci-dessous (crop propre), la planche reste affichée entière. */
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
      'Mat (7 octobre) lit la plage ovalaire en dedans du nerf comme « possiblement la grande veine saphène ». Réserve : au tiers moyen de cuisse la grande saphène chemine dans le tissu sous-cutané, en avant du sartorius ; une veine aplatie SOUS le sartorius, contre le nerf, est plutôt la veine fémorale dans le canal des adducteurs. Dessinée en veine, identité laissée ouverte.',
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
      { id: 'plage', tissu: 'veine', /* Mat (7 octobre) : « possiblement la grande veine saphène » — dessinée en veine, identité à confirmer (voir lecture) */ contour: [[335,480],[380,468],[450,468],[520,474],[546,496],[540,535],[500,560],[420,566],[356,552],[330,516]] },
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
      { s: 'plage', x: 430, y: 520, dx: -160, dy: 140, text: 'Veine (GVS selon Mat ? à confirmer)' },
      { s: 'vm', x: 820, y: 600, dx: 0, dy: 80, text: 'Vaste médial', vue: 'anat' },
    ],
  }];
})();

/* echo-2 — Yang et al., European Radiology 2022, fig. 2, panneau a (CC BY) : coupe longitudinale de la face médiale du genou, Femur et Tibia
   nommés par les auteurs (proximal à gauche par le repère osseux), névrome en continuité de la branche inférieure de l'IPBSN entre quatre têtes
   de flèche. Image pathologique post-chirurgicale, à lire comme telle. */
(function () {
  const DERME = [[0,30],[500,30],[1000,30]];
  const FEMUR = [[0,378],[40,360],[100,335],[150,318],[220,302],[300,303],[340,318],[370,350],[400,390],[425,432]];
  const TIBIA = [[440,440],[460,350],[480,300],[520,275],[570,268],[620,282],[660,310],[690,350],[700,400],[700,566]];
  ECHO.anat['nerf-saphene-infrapatellaire'].push({
    fig: 'img/nerf-saphene-infrapatellaire/echo-2.png',
    crop: [0.004, 0.004, 0.482, 0.482], panneau: 'a (coupe longitudinale)',
    valide: false,
    vb: [1000, 566], orient: { left: 'Proximal (fémur)', right: 'Distal (tibia)' },
    lecture: [
      'Certain — Femur et Tibia nommés par les auteurs : proximal à gauche (repère osseux) ; coupe longitudinale de la face médiale du genou, dans l\'axe de la branche — plan différent du schéma apparié (transversal sur le condyle, antérieur à gauche) ; l\'axe antéro-postérieur de la coupe n\'est pas donné.',
      'Certain — névrome en continuité de la branche inférieure de l\'IPBSN entre les quatre têtes de flèche des auteurs : bande hypoéchogène oblique, du coin supéro-gauche (x ≈ 560–600, y ≈ 100) vers le bas et la droite (x ≈ 750–830, y ≈ 400), ≈ 130 px d\'épaisseur ; ses bords exacts entre les têtes de flèche sont Probables.',
      'Probable — corticale du condyle fémoral médial = bande brillante épaisse y ≈ 300–360 à gauche (x ≈ 100–370), plongeant vers l\'interligne à x ≈ 400–430 ; tibia = cône d\'ombre central (x ≈ 450–700) coiffé d\'une ligne brillante y ≈ 265–300 (bord antéro-supérieur du plateau). Interligne fémoro-tibial au fond du V (x ≈ 430–450), non résolu.',
      'Supposition — structure annulaire échogène à centre sombre (x ≈ 400–590, y ≈ 180–285) au-dessus de l\'interligne : ménisque médial / capsule, ou tissu cicatriciel ; dessinée en plan non attribué.',
      'Supposition — tout le reste des parties molles (tissu sous-cutané, fascia, cicatrice) est dessiné en graisse sous-cutanée, sans limite interne : le nerf est sous-cutané.',
      'Extrapolé — profondeur des os, versant tibial de l\'interligne et bord inférieur du condyle : pointillés.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: [[0,566],[1000,566]] },
      { id: 'anneau', tissu: 'indetermine', contour: [[400,215],[450,195],[520,180],[570,200],[590,240],[560,275],[500,285],[440,275],[400,250]] },
      { id: 'nevrome', tissu: 'nerf', contour: [[560,108],[650,128],[750,158],[830,190],[890,240],[920,300],[900,380],[830,420],[760,395],[690,345],[620,290],[570,245],[540,190],[540,140]] },
      { id: 'femur', tissu: 'os', cortex: FEMUR, vu: [[1, 8]] },
      { id: 'tibia', tissu: 'os', cortex: TIBIA, vu: [[2, 7]] },
    ],
    labels: [
      { s: 'peau', x: 900, y: 14, dx: -20, dy: 55, text: 'Peau' },
      { s: 'sc', x: 150, y: 150, dx: -70, dy: -100, text: 'Tissu sous-cutané' },
      { s: 'nevrome', x: 730, y: 260, dx: 200, dy: 200, text: 'IPBSN : névrome en continuité' },
      { s: 'anneau', x: 500, y: 230, dx: -130, dy: -150, text: 'Structure annulaire (non attribuée)' },
      { s: 'femur', x: 220, y: 312, dx: 0, dy: 180, text: 'Condyle fémoral médial' },
      { s: 'tibia', x: 560, y: 275, dx: -60, dy: 230, text: 'Tibia (plateau)' },
      { x: 440, y: 420, dx: 200, dy: 125, text: 'Interligne fémoro-tibial', vue: 'anat' },
    ],
  });
})();
