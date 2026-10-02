/* Coupes anatomiques recalées — péridurale interlaminaire écho-assistée (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Ökmen & Yıldız, J Med Ultrasound 2024, fig. 2b (para-sagittale oblique, 301 px). echo-2 : même figure, panneau a (transverse, 287 px).
   Piège de lecture des auteurs : leurs flèches partent de la structure et pointent vers le libellé (tête côté texte) ; c'est
   l'origine de chaque flèche qui désigne la structure. Basse résolution : seuls les complexes désignés sont « Certain ». */
(function () {
  /* ---------- echo-1 : para-sagittale oblique, crânial à gauche ---------- */
  const PEAU = [[0,-150],[200,10],[300,45],[500,73],[700,50],[760,10],[1000,-150]];
  const DERME = PEAU.map(p => [p[0], p[1] + 14]);
  const TLF = [[0,-30],[200,95],[300,125],[500,152],[700,130],[800,90],[1000,-20]];
  const L4 = [[260,400],[300,380],[360,372],[420,385],[450,425]];
  const L5 = [[575,418],[610,398],[660,392],[700,410],[712,450]];
  const PC1 = [[453,447],[500,440],[553,433]];
  const PC2 = [[707,488],[760,470],[807,455]];
  const AC = [[0,658],[150,650],[327,640],[400,633],[467,655],[600,665],[1000,680]];
  const MUSC_B = [[0,420]].concat(L4, [[453,440]], [[553,428]], L5.slice(0, 4), [[712,450],[807,450],[1000,440]]);
  const SAC_H = [[0,480],[200,470],[300,460],[453,452],[553,440],[600,470],[707,494],[807,462],[1000,475]];

  /* ---------- echo-2 : transverse interlaminaire, gauche du patient à gauche ---------- */
  const PEAU2 = [[0,-200],[230,60],[350,120],[500,145],[650,120],[740,60],[1000,-200]];
  const DERME2 = PEAU2.map(p => [p[0], p[1] + 15]);
  const TLF2 = [[0,-50],[230,150],[350,195],[500,210],[650,195],[740,150],[1000,-30]];
  const PLAN2 = [[0,560],[200,560],[380,575],[600,585],[800,580],[1000,570]];
  const PC = [[400,598],[460,592],[540,600]];
  const AC2 = [[250,720],[336,702],[380,694],[420,693],[470,700],[560,712],[700,725]];

  ECHO.anat['epidurale-interlaminaire-echo-assistee'] = [{
    fig: 'img/epidurale-interlaminaire-echo-assistee/echo-1.jpg',
    valide: false,
    vb: [1000, 1000], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Probable — lames L4 et L5 : les sigles des auteurs sont posés dans deux cônes d\'ombre ; la corticale n\'est pas résolue à 301 px. Elle est dessinée au toit de chaque ombre (y ≈ 372–425) ; l\'aspect en « tête de cheval » n\'est pas lisible.',
      'Certain — orientation : « Cranial » à gauche, « Caudal » à droite, inscrits sur l\'image ; même sens que le schéma apparié.',
      'Certain — complexe postérieur (ligament jaune + dure-mère postérieure) dans deux fenêtres (sous L4–L5 : x ≈ 453–553 ; caudale à L5 : x ≈ 707–807), complexe antérieur, espace intrathécal : désignés par l\'origine des flèches des auteurs (leurs têtes de flèche sont du côté du texte).',
      'Probable — la seconde fenêtre (x ≈ 707–807) est caudale à la lame L5 : fenêtre L5–S1, que les auteurs ne nomment pas.',
      'Supposition — plans superficiels : tissu sous-cutané, fascia thoraco-lombaire sur l\'arc brillant y ≈ 125–155, muscles paravertébraux (érecteurs / multifide non séparés).',
      'Extrapolé — sac dural et complexe antérieur sous les lames (cône d\'ombre) ; corps vertébraux et disques sous le complexe antérieur ; graisse épidurale postérieure (trop fine pour être vue).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU, bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: TLF },
      { id: 'muscles', tissu: 'muscle', haut: TLF, bas: MUSC_B },
      { id: 'epidural', tissu: 'graisse', haut: MUSC_B, bas: SAC_H, extrapole: true },
      { id: 'sac', tissu: 'liquide', haut: SAC_H, bas: AC },
      { id: 'tlf', tissu: 'fascia', ligne: TLF, ep: 7 },
      { id: 'pc1', tissu: 'ligament', ligne: PC1, ep: 12 },
      { id: 'pc2', tissu: 'ligament', ligne: PC2, ep: 12 },
      { id: 'ac', tissu: 'ligament', ligne: AC.slice(2, 5), ep: 10 },
      { id: 'l4', tissu: 'os', cortex: L4, profondeur: 45, vu: [1, 3] },
      { id: 'l5', tissu: 'os', cortex: L5, profondeur: 45, vu: [1, 3] },
      { id: 'corps', tissu: 'os', cortex: AC, vu: [2, 4] },
    ],
    labels: [
      { s: 'sc', x: 500, y: 120, dx: 260, dy: -40, text: 'Tissu sous-cutané' },
      { s: 'muscles', x: 500, y: 280, dx: 0, dy: -60, text: 'Muscles paravertébraux (non désignés)' },
      { s: 'l4', x: 340, y: 380, dx: -150, dy: -70, text: 'Lame L4', vue: 'anat' },
      { s: 'l5', x: 650, y: 393, dx: 160, dy: -80, text: 'Lame L5', vue: 'anat' },
      { s: 'pc1', x: 500, y: 440, dx: 0, dy: 110, text: 'Complexe postérieur L4–L5', vue: 'anat' },
      { s: 'pc2', x: 760, y: 470, dx: 80, dy: 100, text: 'Complexe postérieur L5–S1', vue: 'anat' },
      { s: 'sac', x: 300, y: 560, dx: -120, dy: 0, text: 'Sac dural (LCS)', vue: 'anat' },
      { s: 'ac', x: 400, y: 635, dx: -170, dy: 120, text: 'Complexe antérieur', vue: 'anat' },
      { s: 'corps', x: 600, y: 800, dx: 0, dy: 60, text: 'Corps vertébral / disque (extrapolé)', vue: 'anat' },
    ],
  }, {
    fig: 'img/epidurale-interlaminaire-echo-assistee/echo-2.jpg',
    valide: false,
    vb: [1000, 1049], orient: { left: 'Gauche', right: 'Droite' },
    lecture: [
      'Certain — orientation : « Left » à gauche, « Right » à droite, inscrits sur l\'image ; coupe transverse (ligament interépineux médian, processus transverses symétriques), malgré la légende d\'origine qui l\'intitule « paramedian sagittal oblique ».',
      'Certain — érecteurs du rachis (ESM), ligament interépineux (IL, trait blanc des auteurs), processus transverses (TP), complexe postérieur, espace intrathécal, complexe antérieur : sigles des auteurs ; pour les trois derniers, c\'est l\'origine des flèches qui désigne la structure.',
      'Probable — complexe postérieur : ligne brillante médiane y ≈ 590–603 ; complexe antérieur : ligne plus pâle y ≈ 690–700 ; la hauteur du sac est mesurée entre les deux. 287 px : épaisseurs non mesurables.',
      'Probable — processus transverses : réflecteurs y ≈ 490–520 (gauche) et 500–552 (droit, oblique) ; os court (ombre partielle).',
      'Supposition — processus articulaires et lames entre le ligament et les processus transverses : non désignés et non lisibles ; la limite profonde des érecteurs (y ≈ 560–585) est estimée. Plans sous les processus transverses non identifiés.',
      'Extrapolé — corps vertébral sous le complexe antérieur ; graisse épidurale postérieure.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU2, bas: DERME2 },
      { id: 'sc', tissu: 'graisse', haut: DERME2, bas: TLF2 },
      { id: 'esm', tissu: 'muscle', haut: TLF2, bas: PLAN2 },
      { id: 'profond-g', tissu: 'indetermine', contour: [[0,560],[200,560],[380,575],[400,604],[360,640],[340,700],[250,720],[250,1060],[0,1060]] },
      { id: 'profond-d', tissu: 'indetermine', contour: [[600,585],[800,580],[1000,570],[1000,1060],[700,1060],[700,725],[560,712],[560,705],[575,640],[540,606],[560,604]] },
      { id: 'epidural', tissu: 'graisse', contour: [[380,575],[600,585],[560,604],[400,604]], extrapole: true },
      { id: 'sac', tissu: 'liquide', contour: [[400,606],[460,600],[540,606],[575,640],[560,705],[470,700],[420,693],[380,694],[340,700],[360,640]] },
      { id: 'il', tissu: 'ligament', ligne: [[486,215],[486,575]], ep: 18 },
      { id: 'tlf', tissu: 'fascia', ligne: TLF2, ep: 7 },
      { id: 'pc', tissu: 'ligament', ligne: PC, ep: 12 },
      { id: 'ac', tissu: 'ligament', ligne: AC2.slice(1, 5), ep: 9 },
      { id: 'tp-g', tissu: 'os', cortex: [[0,500],[42,494],[100,500],[161,517]], profondeur: 30 },
      { id: 'tp-d', tissu: 'os', cortex: [[664,552],[750,530],[820,512],[881,500],[1000,495]], profondeur: 30 },
      { id: 'corps', tissu: 'os', cortex: AC2, vu: [1, 4] },
    ],
    labels: [
      { s: 'sc', x: 500, y: 170, dx: 250, dy: -100, text: 'Tissu sous-cutané' },
      { s: 'esm', x: 300, y: 350, dx: 0, dy: 0, text: 'Érecteurs du rachis', vue: 'anat' },
      { s: 'il', x: 486, y: 330, dx: 230, dy: -10, text: 'Lig. interépineux (axe)', vue: 'anat' },
      { s: 'tp-g', x: 90, y: 498, dx: 30, dy: -110, text: 'Processus transverse', vue: 'anat' },
      { s: 'pc', x: 470, y: 594, dx: -300, dy: 40, text: 'Complexe postérieur', vue: 'anat' },
      { s: 'sac', x: 460, y: 650, dx: 300, dy: 80, text: 'Sac dural (LCS)', vue: 'anat' },
      { s: 'ac', x: 390, y: 694, dx: -200, dy: 130, text: 'Complexe antérieur', vue: 'anat' },
      { s: 'profond-d', x: 900, y: 650, dx: 0, dy: 200, text: 'Plans non identifiés' },
    ],
  }];
})();
