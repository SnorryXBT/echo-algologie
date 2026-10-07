/* Coupes anatomiques recalées — bloc PENG, branches articulaires de la hanche (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Sun et al., PLOS One 2026, fig. 2 (651 px, annotée : AIIS, IPE, FA, FV, flèches du trajet).
   echo-1 (Zhai et al., Front Med 2026, fig. 1 A/B) : panneau B tracé le 7 octobre 2026 sur la lecture de Mat — épine iliaque antéro-inférieure
   à gauche, vaisseau rond à droite (image en miroir du schéma), nappe d'injectat sous le tendon du psoas. */
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
    valide: true,
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
  /* ---------- echo-1, panneau B (fig. 1B, après injection) : sonde convexe, cadre limité au secteur ---------- */
  const B_TOP = [[200,15],[300,50],[400,78],[500,92],[600,96],[700,85],[800,60],[900,30]];
  const B_DERME = B_TOP.map(p => [p[0], p[1] + 22]);
  /* bord profond du tissu sous-cutané très échogène (≈ 1,4 cm au centre) */
  const B_FSUP = [[200,120],[300,128],[350,150],[400,180],[450,186],[500,204],[550,222],[600,240],[650,245],[700,232],[750,241],[800,190],[850,182],[900,180]];
  /* corticale : épine iliaque antéro-inférieure (plateau x 250–300) puis descente continue vers le sillon ; pics de brillance par colonne */
  const B_CORTEX = [[200,250],[250,254],[300,256],[350,282],[400,330],[420,332],[450,334],[500,340],[525,345],[575,381],[600,385],[625,405],[650,407],[700,405],[725,425],[750,423],[800,423],[825,451]];
  /* toit de la nappe = bord profond du muscle et du tendon décollés de l'os (bande sombre de 2 à 6 mm, x 430–820) */
  const B_NAPPE = [[420,331],[450,306],[480,322],[530,345],[580,360],[630,350],[680,335],[730,330],[780,350],[820,390],[830,452]];
  ECHO.anat['peng-branches-articulaires-hanche'].push({
    fig: 'img/peng-branches-articulaires-hanche/echo-1.jpg',
    crop: [0.545, 0.03, 0.35, 0.66], panneau: 'B (après injection : nappe sous le tendon du psoas)',
    valide: false,
    vb: [1000, 573], orient: { left: 'Latéral (EIAI)', right: 'Médial (vaisseaux)' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : épine iliaque antéro-inférieure à gauche, vaisseau rond à droite ; image en miroir du schéma apparié (médial à gauche sur le schéma) — formule ajoutée à la légende de la figure.',
      'Probable — corticale : plateau brillant de l\'épine (x 250–300, y ≈ 255) puis descente continue vers la droite jusqu\'au fond du sillon (y ≈ 405–450, x 650–825) ; l\'éminence ilio-pubienne n\'est pas atteinte dans le cadre — le relief grenu à droite (x > 825) n\'est pas résolu, laissé non attribué.',
      'Probable — nappe d\'injectat : bande hypoéchogène de 2 à 6 mm entre le bord profond du plan musculo-tendineux et la corticale, de x ≈ 430 à 820, absente sur le panneau A (critère de fin de la fiche : le psoas décollé de l\'os). Elle se pince vers x ≈ 500–530 où le tendon reste au contact de l\'os.',
      'Probable — tendon du psoas : ovale très brillant (x 690–760, y 235–285) à la face superficielle du muscle, au-dessus du fond du sillon ; strie brillante oblique plus latérale (x 395–490, y 250–330) dessinée en fibres tendineuses, sans certitude (fascia iliaque ?).',
      'Supposition — vaisseau : plage ronde anéchogène au bord médial du secteur (x 800–885, y 195–300), dessinée en artère (fémorale ?) sans Doppler : artère ou veine à trancher. Plan superficiel très échogène (y 100–240) lu comme tissu sous-cutané épais, muscle ilio-psoas en dessous (gris, y 240–350) ; limite posée sur le changement de texture.',
      'Extrapolé — peau sur l\'arc de la sonde, profondeur de l\'os, plans dessinés jusqu\'aux bords du cadre hors du secteur.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: B_TOP, bas: B_DERME },
      { id: 'sc', tissu: 'graisse', haut: B_DERME, bas: B_FSUP },
      { id: 'ilio-psoas', tissu: 'muscle', haut: B_FSUP, bas: B_CORTEX.slice(0, 6).concat(B_NAPPE.slice(1), [[900,452]]) },
      { id: 'droite', tissu: 'indetermine', contour: [[825,300],[900,300],[900,573],[830,573],[830,452]] },
      { id: 'nappe', tissu: 'liquide', haut: B_NAPPE, bas: B_CORTEX.slice(5) },
      { id: 'fibres', tissu: 'tendon', contour: [[395,248],[430,262],[470,295],[492,328],[476,336],[432,304],[392,274]] },
      { id: 'tendon', tissu: 'tendon', contour: ovale(725, 260, 42, 22, 15) },
      { id: 'vaisseau', tissu: 'artere', contour: ovale(845, 248, 40, 55) },
      { id: 'bassin', tissu: 'os', cortex: B_CORTEX },
    ],
    labels: [
      { s: 'sc', x: 400, y: 150, dx: -250, dy: -70, text: 'Tissu sous-cutané' },
      { s: 'ilio-psoas', x: 480, y: 255, dx: -360, dy: -75, text: 'Ilio-psoas' },
      { s: 'bassin', x: 280, y: 257, dx: -130, dy: 73, text: 'Épine iliaque antéro-inférieure', vue: 'anat' },
      { s: 'tendon', x: 725, y: 258, dx: 135, dy: -138, text: 'Tendon du psoas (probable)' },
      { s: 'nappe', x: 650, y: 380, dx: -350, dy: 90, text: 'Nappe d\'injectat sous le tendon (critère de fin)' },
      { s: 'vaisseau', x: 845, y: 248, dx: 115, dy: 172, text: 'Vaisseau (artère ?)', vue: 'anat' },
      { s: 'bassin', x: 640, y: 440, dx: -80, dy: 100, text: 'Fond du sillon (branche supérieure du pubis)', vue: 'anat' },
      { s: 'droite', x: 865, y: 400, dx: -105, dy: 80, text: 'Relief non résolu (éminence ?)' },
    ],
  });
})();
