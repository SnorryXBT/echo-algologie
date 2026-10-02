/* Coupes anatomiques recalées — bloc PENG, branches articulaires de la hanche (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Sun et al., PLOS One 2026, fig. 2 (651 px, annotée : AIIS, IPE, FA, FV, flèches du trajet).
   echo-1 (Zhai et al., Front Med 2026, fig. 1 A/B) : NON tracée — planche vierge, aucun repère désigné par les auteurs ;
   l'orientation et le tendon du psoas n'y sont établis que par raisonnement : soumise à Mat. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* sonde convexe : la peau suit l'arc de la sonde (flèche au centre, x ≈ 520) */
  const PEAU = [[0,-120],[120,-40],[230,22],[350,62],[450,84],[520,90],[600,84],[700,55],[790,22],[900,-45],[1000,-120]];
  const DERME = PEAU.map(p => [p[0], p[1] + 22]);
  const FASC = [[0,175],[200,155],[300,145],[400,152],[500,152],[600,150],[700,140],[800,128],[1000,120]];
  /* corticale : plateau de l'éminence ilio-pubienne, creux (x ≈ 524), puis montée vers l'épine iliaque antéro-inférieure — pics de brillance par colonne */
  const CORTEX = [[0,300],[150,300],[240,305],[300,316],[350,329],[400,337],[450,344],[500,356],[524,360],[545,354],[571,339],[607,312],[643,279],[673,258],[714,243],[744,234],[800,240],[1000,285]];
  ECHO.anat['peng-branches-articulaires-hanche'] = [{
    fig: 'img/peng-branches-articulaires-hanche/echo-2.jpg',
    valide: false,
    vb: [1000, 724], orient: { left: 'Médial (vaisseaux)', right: 'Latéral (EIAI)' },
    lecture: [
      'Probable — tendon du psoas : les auteurs ne le désignent pas sur l\'image (leur texte : pointe « between the psoas tendon (anterior) and pubic ramus (posterior) »). Il est lu comme la bande hyperéchogène posée ≈ 3 mm au-dessus du plateau de l\'éminence ilio-pubienne (x ≈ 390–470, y ≈ 296–306), prolongée en dehors par un amas brillant (x ≈ 500–540, y ≈ 278–295) : c\'est à son bord latéral qu\'aboutit la droite tracée par les flèches. Si le tendon est seulement l\'amas latéral, logé dans le creux entre éminence et épine, le plan cible est à décaler de ≈ 1 cm en dehors : à confirmer.',
      'Certain — repères et orientation : épine iliaque antéro-inférieure (AIIS) à droite, éminence ilio-pubienne (IPE) au centre, artère et veine fémorales (FA, FV) à gauche — sigles des auteurs ; donc latéral à droite, médial à gauche, même orientation que le schéma apparié.',
      'Certain — trajet : les trois flèches marquent, selon la légende d\'origine, « the in-plane trajectory of the needle tip » ; leur texte précise « from lateral to medial ». La droite qui passe par leurs pointes vient du bord latéral de la sonde, à ≈ 45°, et atteint la corticale sur le plateau de l\'éminence (x ≈ 420), sous le tendon — à distance de l\'artère (≈ 2,5 cm en dedans) : conforme à la technique et à la limite médiale de la fiche.',
      'Extrapolé — aiguille : aucune aiguille n\'est visible, seul le trajet est indiqué ; elle est dessinée en pointillé sur la droite des flèches. Nerf fémoral : non individualisé, placé dans la plage hyperéchogène triangulaire immédiatement latérale à l\'artère, sur l\'ilio-psoas — étiqueté sur la coupe anatomique seulement.',
      'Probable — contours de l\'artère et de la veine fémorales : plages hypoéchogènes sous les sigles, au bord du secteur ; pas de Doppler. Corticale : ligne continue de x ≈ 300 à 745 ; en dedans, sous les vaisseaux, elle n\'est pas vue (pointillé).',
      'Supposition — plans superficiels : limite graisse / muscle placée au bas de la couche échogène (y ≈ 140–155) ; l\'ilio-psoas est dessiné comme une seule masse, sartorius et droit fémoral non individualisés ; sa limite médiale (x ≈ 300) est arbitraire et le plan qui porte les vaisseaux (pectiné) n\'est pas individualisé. Arc brillant au-dessus de l\'épine (x ≈ 650–715, y ≈ 210–220) : tendon direct du droit fémoral ou relief de l\'épine, non tranché.',
      'Extrapolé — profondeur de l\'os (cône d\'ombre) et plans dessinés hors du secteur de la sonde convexe.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU, bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: FASC },
      /* loge vasculaire en dedans de l'ilio-psoas (gaine fémorale, pectiné non individualisé) : tissu de fond, sans nom */
      { id: 'loge-vasculaire', tissu: 'conjonctif', haut: FASC, bas: CORTEX },
      /* ilio-psoas en petit axe (coupe oblique-transversale) ; bord médial arrondi, arbitraire */
      { id: 'ilio-psoas', tissu: 'muscle', contour: [[310,147]].concat(FASC.slice(3), CORTEX.slice(3).reverse(), [[288,285],[294,240],[302,190]]) },
      { id: 'veine', tissu: 'veine', contour: ovale(195, 243, 44, 25) },
      { id: 'artere', tissu: 'artere', contour: ovale(262, 193, 35, 31) },
      { id: 'n-femoral', tissu: 'nerf', contour: ovale(338, 192, 22, 10, 15), extrapole: true },
      { id: 'tendon', tissu: 'tendon', contour: [[388,298],[410,292],[445,292],[470,296],[500,281],[525,277],[540,285],[532,296],[505,299],[470,308],[440,310],[405,308],[390,304]] },
      { id: 'reflecteur', tissu: 'indetermine', ligne: [[649,222],[667,213],[696,209],[714,212]], ep: 10 },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[690,80],[424,333]], ep: 6, extrapole: true },
      { id: 'bassin', tissu: 'os', cortex: CORTEX, vu: [3, 15] },
    ],
    labels: [
      { s: 'n-femoral', x: 338, y: 190, dx: -98, dy: -130, text: 'N. fémoral (non vu)', vue: 'anat' },
      { s: 'artere', x: 258, y: 190, dx: -148, dy: -40, text: 'A. fémorale', vue: 'anat' },
      { s: 'veine', x: 190, y: 245, dx: -95, dy: 85, text: 'V. fémorale', vue: 'anat' },
      { s: 'ilio-psoas', x: 480, y: 215, dx: -50, dy: -103, text: 'Ilio-psoas' },
      { s: 'aiguille', x: 625, y: 142, dx: 215, dy: 8, text: 'Trajet de l\'aiguille', vue: 'anat' },
      { s: 'reflecteur', x: 700, y: 210, dx: 150, dy: 20, text: 'Réflecteur non identifié' },
      { s: 'bassin', x: 695, y: 250, dx: 105, dy: 80, text: 'Épine iliaque antéro-inférieure', vue: 'anat' },
      { s: 'bassin', x: 340, y: 327, dx: -90, dy: 103, text: 'Éminence ilio-pubienne', vue: 'anat' },
      { x: 428, y: 322, dx: 272, dy: 108, text: 'Plan cible, entre tendon et os' },
      { s: 'tendon', x: 440, y: 302, dx: 60, dy: 198, text: 'Tendon du psoas (probable)' },
    ],
  }];
})();
