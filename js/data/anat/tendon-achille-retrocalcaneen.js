/* Coupes anatomiques recalées — tendon d'Achille et bourse rétro-calcanéenne (format : .claude/skills/echo-anatomie/SKILL.md).
   Deux planches composites de Cocco et al., J Ultrasound 2024 : la légende décrit chaque fois cinq panneaux, les figures ne sont donc pas
   recadrées ; chaque coupe porte son propre `crop`.
   echo-1 (fig. 16) : panneau A, mode B, portion corporéale — têtes de flèche des auteurs sur les deux faces du tendon, sigle FP.
   echo-2 (fig. 17) : panneau D, mode B, bourse rétro-calcanéenne profonde distendue — sigles b et Cal. */
(function () {
  /* ---- fig. 16 A ---- */
  const A_TS = [[0,80],[200,82],[400,74],[520,73],[600,79],[750,82],[900,88],[1000,90]];
  const A_TD = [[0,262],[50,270],[100,276],[150,283],[200,292],[250,298],[300,306],[350,310],[400,320],[450,326],[500,334],[550,340],[600,337],[650,320],[700,310],[750,304],[800,288],[850,277],[900,268],[950,257],[1000,246]];
  const A_FPB = [[0,348],[150,347],[300,350],[380,378],[450,415],[520,445],[600,475],[700,486],[850,484],[1000,476]];
  /* ---- fig. 17 D ---- */
  const D_PEAU = [[0,42],[1000,38]];
  const D_DH = [[0,60],[130,66],[250,76],[350,84],[450,80],[550,84],[650,86],[750,82],[850,84],[1000,84]];
  const D_TS = [[0,113],[150,123],[380,122],[540,126],[620,128],[690,150],[760,176],[850,192],[920,198],[1000,202]];
  /* face profonde du tendon : toit de la graisse de Kager, puis ligne brillante qui coiffe la bourse, jusqu'à l'angle du calcanéus */
  const D_TD = [[0,243],[50,257],[100,283],[150,299],[200,315],[260,330],[310,338],[340,326],[380,308],[420,300],[480,298],[540,300],[580,312],[602,328]];
  const D_CORTEX = [[556,560],[562,440],[572,385],[585,350],[600,331],[625,313],[660,303],[700,298],[750,294],[800,299],[850,300],[900,297],[950,297],[1000,301]];
  ECHO.anat['tendon-achille-retrocalcaneen'] = [{
    fig: 'img/tendon-achille-retrocalcaneen/echo-1.jpg',
    crop: [0.0015, 0.003, 0.387, 0.454], panneau: 'A (mode B)',
    valide: false,
    vb: [1000, 550], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Probable — orientation : ni la légende ni l\'image ne nomment les côtés, et aucun os n\'est dans le champ. Distal à droite est déduit de deux indices : la graisse de Kager s\'épaissit vers la droite (le triangle s\'élargit vers le calcanéus), et les mêmes auteurs placent le calcanéus à droite sur les cinq panneaux de leur figure 17. Concordant avec le schéma apparié ; à confirmer par Mat.',
      'Certain — tendon d\'Achille, portion corporéale, épaissi en fuseau et hypoéchogène : faces superficielle et profonde désignées par les deux têtes de flèche des auteurs ; graisse de Kager désignée par le sigle FP.',
      'Certain — coupe de repérage, sans aiguille : la cible de l\'injection de gros volume est l\'interface entre la face profonde du tendon et la graisse de Kager (bord inférieur du fuseau), d\'où naissent les néovaisseaux des panneaux B et C. Aucun trajet n\'est reporté : sur une coupe strictement sagittale, une aiguille venue de la peau n\'atteindrait cette interface qu\'en traversant le tendon, ce que la fiche exclut.',
      'Probable — limite profonde de la graisse de Kager : première des lignes brillantes obliques (fascia profond) ; le plan situé dessous (long fléchisseur de l\'hallux vraisemblable) n\'est pas désigné par les auteurs : non attribué.',
      'Supposition — peau et tissu sous-cutané non séparables (≈ 3 mm d\'épaisseur, panneau de 262 px) : dessinés en une seule couche. La fine ligne brillante du bord superficiel du tendon peut être le paratendon.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: A_TS },
      { id: 'tendon', tissu: 'tendon', haut: A_TS, bas: A_TD },
      { id: 'kager', tissu: 'graisse', haut: A_TD, bas: A_FPB },
      { id: 'profond', tissu: 'indetermine', haut: A_FPB, bas: [[0,590],[1000,590]] },
    ],
    labels: [
      { s: 'peau', x: 420, y: 48, dx: -230, dy: -18, text: 'Peau et tissu sous-cutané' },
      { s: 'tendon', x: 760, y: 180, dx: 40, dy: -150, text: 'Tendon d\'Achille épaissi' },
      { s: 'tendon', x: 300, y: 306, dx: -40, dy: 134, text: 'Interface tendon / Kager (cible)' },
      { s: 'kager', x: 800, y: 400, dx: 20, dy: 118, text: 'Graisse de Kager', vue: 'anat' },
      { s: 'profond', x: 560, y: 512, dx: -230, dy: 4, text: 'Plan profond non attribué' },
    ],
  }, {
    fig: 'img/tendon-achille-retrocalcaneen/echo-2.jpg',
    crop: [0.46, 0.002, 0.537, 0.455], panneau: 'D (mode B)',
    valide: false,
    vb: [1000, 526], orient: { left: 'Proximal', right: 'Distal (calcanéus)' },
    lecture: [
      'Certain — orientation et cible : calcanéus à droite (sigle Cal, cône d\'ombre), bourse rétro-calcanéenne profonde distendue (sigle b ; légende des auteurs : « effusion in the deep retrocalcaneal bursa »). Coupe sagittale, proximal à gauche.',
      'Certain — coupe de documentation, sans aiguille : la ponction de la fiche se fait sonde transversale, aiguille de latéral en médial, donc perpendiculairement à ce plan. La planche situe la cible — poche liquidienne sous la face profonde du tendon, en amont de l\'angle postéro-supérieur du calcanéus — et non le trajet. Le schéma apparié est transversal : ses axes ne se superposent pas à ceux de l\'image.',
      'Probable — tendon d\'Achille : bande fibrillaire oblique ; face profonde sur la ligne brillante qui coiffe la graisse de Kager puis la bourse, rejoignant la corticale à x ≈ 600. La bande sombre posée sur la corticale (y 255–290) est lue comme l\'enthèse (anisotropie), non comme un prolongement de la bourse.',
      'Probable — tissu échogène entre la poche et l\'angle du calcanéus (x 430–560) : coin de la graisse de Kager (une synoviale épaissie donnerait la même image), dessiné en graisse. Sur cette coupe la poche liquidienne n\'est donc pas au contact direct de la corticale.',
      'Supposition — bord superficiel du tendon près de l\'insertion (x > 650) : placé sous la masse échogène mouchetée, lue comme tissu sous-cutané épaissi (siège de la bourse superficielle, dont le panneau E montre l\'hyperhémie). Les stries brillantes intratendineuses (x 720–910, y 215–250) ne sont pas dessinées : fibres vues perpendiculairement ou calcification d\'enthèse.',
      'Supposition — plans superficiels : bande anéchogène sous la ligne de sonde lue comme du gel ; limite peau / tissu sous-cutané placée sur la première ligne brillante ; coin anéchogène proximal (x < 300, y 60–110) lu comme graisse sous-cutanée hypoéchogène.',
      'Extrapolé — face supérieure du calcanéus sous l\'angle postéro-supérieur (bord gauche du cône d\'ombre).',
    ],
    structures: [
      { id: 'gel', tissu: 'liquide', fin: true, haut: [[0,0],[1000,0]], bas: D_PEAU },
      { id: 'peau', tissu: 'peau', haut: D_PEAU, bas: D_DH },
      { id: 'sc', tissu: 'graisse', haut: D_DH, bas: D_TS },
      { id: 'tendon', tissu: 'tendon', enthese: -0.4, haut: D_TS, bas: D_TD.concat(D_CORTEX.slice(5)) },
      { id: 'kager', tissu: 'graisse', haut: D_TD.concat([[585,350],[572,385],[562,440],[556,560]]), bas: [[0,570],[556,570]] },
      { id: 'bourse', tissu: 'liquide', contour: [[318,352],[336,338],[365,328],[400,322],[430,322],[428,345],[416,370],[408,400],[400,428],[380,442],[350,440],[328,425],[316,395]] },
      { id: 'os', tissu: 'os', cortex: D_CORTEX, vu: [3, 13] },
    ],
    labels: [
      { s: 'gel', x: 330, y: 26, dx: -180, dy: -4, text: 'Gel (interposition)' },
      { s: 'peau', x: 480, y: 60, dx: 0, dy: -38, text: 'Peau' },
      { s: 'sc', x: 760, y: 130, dx: 30, dy: -108, text: 'Tissu sous-cutané' },
      { s: 'tendon', x: 240, y: 200, dx: -90, dy: -110, text: 'Tendon d\'Achille' },
      { s: 'kager', x: 150, y: 400, dx: -25, dy: 100, text: 'Graisse de Kager' },
      { s: 'bourse', x: 370, y: 400, dx: 110, dy: 100, text: 'Bourse rétro-calcanéenne profonde', vue: 'anat' },
      { s: 'os', x: 800, y: 380, dx: 50, dy: 90, text: 'Calcanéus', vue: 'anat' },
    ],
  }];
})();
