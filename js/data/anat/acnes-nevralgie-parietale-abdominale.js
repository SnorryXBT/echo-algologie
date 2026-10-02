/* Coupes anatomiques recalées — ACNES / névralgie pariétale abdominale (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Xu et al., Quant Imaging Med Surg 2023, fig. 1B (389 px ; Medial / Lateral inscrits ; RA, Semilunar-line, EO, IO, TA, Enterocoelia).
   echo-2 : Rojas et al., Cureus 2023, fig. 1B (sujet anatomique ; 371 × ≈ 140 px d'image utile ; RAM, nappe d'AL en pointillé, « Lateral ») ;
            corrigé = panneau A (avant injection) : gaine postérieure (PRS) désignée. Les deux panneaux ne sont pas strictement superposables. */
(function () {
  /* ---------- echo-1 : ligne semi-lunaire ---------- */
  const DERME = [[0,25],[1000,25]];
  const SC_B = [[0,205],[200,208],[300,200],[400,195],[500,195],[600,190],[700,180],[850,170],[1000,160]];
  const RA_H = [[0,300],[150,311],[300,315]];
  const EO_B = [[550,340],[650,328],[750,314],[850,303],[950,300],[1000,300]];
  const IO_B = [[550,445],[650,460],[750,466],[850,480],[950,484],[1000,485]];
  const TA_B = [[550,500],[600,540],[700,580],[850,600],[1000,610]];
  const POST = [[0,445],[150,437],[330,440],[450,448],[550,450]];

  /* ---------- echo-2 : gaine des droits après injection ---------- */
  const DERME2 = [[0,40],[1000,40]];
  const DERME2B = [[0,52],[1000,52]];
  const ANT = [[0,150],[300,150],[500,150],[700,148],[1000,148]];
  const UP = [[0,265],[200,262],[360,272],[600,280],[700,270],[800,265],[1000,262]];
  const LOW = [[360,282],[500,310],[600,335],[640,342],[700,345],[800,336],[900,322],[1000,296]];
  const PRS = [[0,300],[200,295],[360,285]].concat(LOW.slice(1));

  ECHO.anat['acnes-nevralgie-parietale-abdominale'] = [{
    fig: 'img/acnes-nevralgie-parietale-abdominale/echo-1.jpg',
    valide: false,
    vb: [1000, 722], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — orientation : « Medial » à gauche, « Lateral » à droite, inscrits sur l\'image ; même sens que le schéma apparié.',
      'Certain — identité : sigles des auteurs (RA, Semilunar-line, EO, IO, TA, Enterocoelia).',
      'Probable — interfaces latérales placées sur les pics de brillance : oblique externe / oblique interne y ≈ 300–340, oblique interne / transverse y ≈ 445–485 ; elles convergent en dedans vers la bande aponévrotique épaisse de la ligne semi-lunaire (x ≈ 330–550).',
      'Supposition — droit de l\'abdomen : tracé entre la ligne y ≈ 300–315 et la ligne y ≈ 437–445 (sous le sigle RA). La bande y ≈ 205–300 au-dessus est laissée non attribuée (gaine antérieure épaisse ou partie superficielle du muscle : non tranché). Face profonde du transverse non vue (y ≈ 500–610 estimé).',
      'Supposition — tissu sous-cutané jusqu\'à la ligne brillante y ≈ 160–208 ; peau au bord supérieur. 389 px : épaisseur des aponévroses non mesurable.',
      'Extrapolé — cavité péritonéale (« Enterocoelia ») sous le plan postérieur, contenu non identifiable. Point de perforation du rameau cutané antérieur (en dedans de la ligne semi-lunaire, à travers le droit) : non visible.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: SC_B },
      { id: 'plan', tissu: 'indetermine', haut: SC_B.slice(0, 6), bas: RA_H.concat([[450,310],[550,340],[600,334]]) },
      { id: 'ra', tissu: 'muscle', contour: RA_H.concat([[330,330],[330,430]], POST.slice(0, 2).reverse(), [[0,445]]) },
      { id: 'semilunaire', tissu: 'fascia', contour: [[300,315],[450,310],[550,340],[550,500],[450,448],[330,440],[330,330]] },
      { id: 'eo', tissu: 'muscle', haut: SC_B.slice(5), bas: [[600,334],[650,328],[750,314],[850,303],[1000,300]] },
      { id: 'io', tissu: 'muscle', haut: EO_B, bas: IO_B },
      { id: 'ta', tissu: 'muscle', haut: IO_B, bas: TA_B },
      { id: 'cavite', tissu: 'indetermine', haut: POST.concat([[550,500]], TA_B.slice(1)), bas: [[0,735],[1000,735]], extrapole: true },
      { id: 'post', tissu: 'fascia', ligne: POST, ep: 7 },
    ],
    labels: [
      { s: 'sc', x: 600, y: 110, dx: 0, dy: -60, text: 'Tissu sous-cutané' },
      { s: 'plan', x: 150, y: 255, dx: 40, dy: -120, text: 'Plan non attribué (gaine ant. ?)' },
      { s: 'ra', x: 150, y: 380, dx: 0, dy: 0, text: 'Droit de l\'abdomen', vue: 'anat' },
      { s: 'semilunaire', x: 440, y: 380, dx: 0, dy: 0, text: 'Ligne semi-lunaire', vue: 'anat' },
      { s: 'eo', x: 800, y: 250, dx: 0, dy: 0, text: 'Oblique externe', vue: 'anat' },
      { s: 'io', x: 780, y: 400, dx: 0, dy: 0, text: 'Oblique interne', vue: 'anat' },
      { s: 'ta', x: 780, y: 530, dx: 0, dy: 0, text: 'Transverse', vue: 'anat' },
      { s: 'cavite', x: 300, y: 620, dx: 0, dy: 0, text: 'Cavité péritonéale', vue: 'anat' },
    ],
  }, {
    fig: 'img/acnes-nevralgie-parietale-abdominale/echo-2.jpg',
    valide: false,
    vb: [1000, 536], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : « Lateral » inscrit à gauche ; aiguille « in-plane in a lateral to medial trajectory » (légende d\'origine) ; inverse du schéma apparié (la légende de la figure le dit).',
      'Certain — droit de l\'abdomen (RAM) et nappe d\'anesthésique local (pointillé jaune des auteurs, relevé) entre le muscle et la gaine postérieure ; gaine postérieure désignée sur le panneau A (avant injection), à la même profondeur.',
      'Probable — aiguille : ligne brillante oblique visible de (390, 213) à (610, 285), qui perce la face profonde du muscle (légende : « can be seen piercing the posterior border of RAM ») ; son trajet sous-cutané, non visible, est prolongé en pointillé.',
      'Probable — gaine postérieure : bord inférieur de la nappe (pointillé inférieur des auteurs), refoulée en profondeur par l\'injection ; en dehors de la nappe (x < 360), bande brillante y ≈ 285–300.',
      'Supposition — limite tissu sous-cutané / gaine antérieure à y ≈ 150 (lignes brillantes non désignées) ; sujet anatomique, image de ≈ 140 px de haut : plans fins non traçables avec certitude.',
      'Extrapolé — sous la gaine postérieure : graisse prépéritonéale et cavité péritonéale, non identifiables ; bas du cadre hors image (noir).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: DERME2, bas: DERME2B },
      { id: 'sc', tissu: 'graisse', haut: DERME2B, bas: ANT },
      { id: 'ram', tissu: 'muscle', haut: ANT, bas: UP },
      { id: 'lateral', tissu: 'indetermine', contour: [[0,265],[200,262],[360,272],[360,285],[200,295],[0,300]] },
      { id: 'al', tissu: 'liquide', contour: UP.slice(2).concat(LOW.slice().reverse()) },
      { id: 'profond', tissu: 'indetermine', haut: PRS, bas: [[0,415],[1000,415]], extrapole: true },
      { id: 'ant', tissu: 'fascia', ligne: ANT, ep: 6 },
      { id: 'prs', tissu: 'fascia', ligne: PRS, ep: 7 },
      { id: 'aiguille-sc', tissu: 'aiguille', ligne: [[0,88],[390,213]], ep: 5, extrapole: true },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[390,213],[610,285]], ep: 5 },
    ],
    labels: [
      { s: 'sc', x: 700, y: 100, dx: 0, dy: 0, text: 'Tissu sous-cutané' },
      { s: 'ram', x: 170, y: 215, dx: 0, dy: 0, text: 'Droit de l\'abdomen', vue: 'anat' },
      { s: 'aiguille', x: 500, y: 248, dx: -140, dy: -120, text: 'Aiguille', vue: 'anat' },
      { s: 'al', x: 800, y: 300, dx: 50, dy: -90, text: 'Anesthésique local', vue: 'anat' },
      { s: 'prs', x: 640, y: 346, dx: 40, dy: 45, text: 'Gaine postérieure', vue: 'anat' },
      { s: 'profond', x: 100, y: 345, dx: 0, dy: 0, text: 'Plans profonds' },
    ],
  }];
})();
