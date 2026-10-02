/* Coupes anatomiques recalées — péridurale caudale (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Ma et al., Front Med 2025, fig. 1A (petit axe du hiatus sacré, « frog's face sign » ; sacral horn ×2, sacral caudal ligament
            souligné d'un pointillé orange, sacral canal lumen, sacrum).
   echo-2 (Rajendran et al., Cureus 2026, fig. 2) : NON tracée — annotations incompatibles avec l'image (voir zz-refus / rapport). */
(function () {
  const DERME = [[0,12],[1000,12]];
  const LIG_H = [[395,152],[480,146],[560,142],[640,136],[720,132],[760,138]];
  const LIG_B = [[395,180],[425,176],[500,173],[560,170],[620,166],[680,159],[760,152]];
  const FOND = [[392,318],[450,306],[500,299],[550,293],[600,289],[650,289],[700,291],[742,302]];

  ECHO.anat['caudale'] = [{
    fig: 'img/caudale/echo-1.jpg',
    valide: false,
    vb: [1000, 477], orient: { left: 'Côté non précisé', right: 'Coupe transversale' },
    lecture: [
      'Certain — identité : sigles des auteurs (« sacral horn » ×2, « sacral caudal ligament » souligné de leur pointillé orange, « sacral canal lumen », « sacrum ») ; légende d\'origine : « short-axis views: frog\'s face sign ». La latéralité gauche / droite n\'est pas donnée ; la coupe est symétrique, elle n\'en dépend pas.',
      'Probable — cornes sacrées : sommets brillants (gauche y ≈ 172, droite y ≈ 148) coiffant deux cônes d\'ombre francs ; leur contour latéral, dans l\'ombre, est en pointillé.',
      'Probable — ligament sacro-coccygien : face profonde sur le pointillé des auteurs (y ≈ 150–180, oblique) ; sa face superficielle (y ≈ 132–152) est estimée sur la bande échogène sus-jacente.',
      'Probable — table osseuse antérieure du canal (corps de S5) : ligne brillante y ≈ 288–318 au fond de la lumière, cône d\'ombre dessous. Hauteur du canal ≈ 1,2–1,5 cm sur le dessin, aucune échelle sur l\'image.',
      'Supposition — contenu du canal dessiné en graisse épidurale (lumière hypoéchogène homogène ; ni sac dural ni racines visibles, attendus à ce niveau). Plans en dehors des cornes non désignés.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: [[0,490],[1000,490]] },
      { id: 'lat-g', tissu: 'indetermine', contour: [[0,240],[150,235],[270,235],[270,490],[0,490]] },
      { id: 'lat-d', tissu: 'indetermine', contour: [[875,235],[1000,235],[1000,490],[875,490]] },
      { id: 'canal', tissu: 'graisse', contour: LIG_B.concat([[760,152],[745,300]], FOND.slice().reverse(), [[395,318]]) },
      { id: 'ligament', tissu: 'ligament', haut: LIG_H, bas: LIG_B },
      { id: 'fond', tissu: 'os', cortex: FOND },
      { id: 'corne-g', tissu: 'os', cortex: [[262,240],[280,192],[320,174],[370,172],[400,182],[412,225]], vu: [1, 4] },
      { id: 'corne-d', tissu: 'os', cortex: [[735,225],[750,166],[790,148],[840,148],[870,166],[882,235]], vu: [1, 4] },
    ],
    labels: [
      { s: 'sc', x: 200, y: 80, dx: -60, dy: -40, text: 'Tissu sous-cutané' },
      { s: 'ligament', x: 560, y: 158, dx: 40, dy: -120, text: 'Lig. sacro-coccygien', vue: 'anat' },
      { s: 'corne-g', x: 340, y: 176, dx: -130, dy: -60, text: 'Corne sacrée', vue: 'anat' },
      { s: 'corne-d', x: 810, y: 150, dx: 80, dy: -90, text: 'Corne sacrée', vue: 'anat' },
      { s: 'canal', x: 560, y: 230, dx: 0, dy: 0, text: 'Canal sacré', vue: 'anat' },
      { s: 'fond', x: 560, y: 292, dx: 0, dy: 120, text: 'Face postérieure de S5', vue: 'anat' },
      { s: 'lat-g', x: 120, y: 300, dx: 0, dy: 110, text: 'Plan non attribué' },
    ],
  }];
})();
