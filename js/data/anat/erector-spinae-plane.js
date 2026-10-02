/* Coupes anatomiques recalées — bloc du plan de l'érecteur du rachis (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Avcı et al., BMC Anesthesiology 2026, fig. 1B — coupe para-sagittale en T4, sigles des auteurs (MT, RM, ES, TP, Pleura),
            trajet d'aiguille en pointillé ajouté par eux (aucun fût visible) ; bandeau d'écran et graduation rognés (1 cm = 222 unités).
   echo-2 : Adi et al., The Ultrasound Journal 2025, fig. 1 — panneau gauche (aiguille réelle, T8) ; le panneau droit de la même figure est la même
            image recouverte d'aplats colorés par les auteurs (trapèze, érecteur, processus transverse) : décalage horizontal constant de 362 px,
            vérifié par corrélation ; les limites des aplats ont été relevées dans le repère du panneau gauche. */
(function () {
  /* ---------- echo-1 : coupe de repérage, trajet figuré ---------- */
  const PEAU1 = [[0,74],[250,72],[500,72],[750,76],[1000,72]];
  const FS1 = [[0,106],[500,107],[1000,108]];                       /* bande très brillante y 95–120 */
  const F1A = [[0,166],[100,168],[150,175],[200,176],[300,178],[350,177],[400,180],[500,180],[600,180],[650,178],[700,189],[800,189],[900,185],[1000,180]];
  const F1B = [[0,210],[100,210],[200,213],[300,213],[400,217],[500,217],[600,217],[700,220],[750,226],[850,226],[900,232],[950,222],[1000,220]];
  /* fascia profond de l'érecteur : toit du processus transverse crânial, ligne supérieure de la fenêtre, toit du processus transverse caudal */
  const ESB1 = [[0,374],[56,372],[88,364],[104,354],[136,348],[200,350],[248,348],[296,346],[360,348],[420,352],[480,360],[540,370],[600,372],[640,386],[700,388],[728,402],[760,406],[800,396],[840,386],[900,387],[940,388],[1000,388]];
  const PLEVRE1 = [[0,623],[40,624],[160,604],[290,582],[328,580],[368,578],[408,580],[448,586],[488,585],[528,588],[568,588],[608,586],[648,586],[688,580],[728,576],[840,588],[945,594],[1000,594]];

  /* ---------- echo-2 : aiguille réelle ---------- */
  const PEAU2 = [[0,45],[1000,45]];
  const TRAP2 = [[0,158],[50,168],[100,178],[150,184],[200,172],[250,165],[350,163],[1000,163]];
  const F2 = [[0,312],[50,310],[100,306],[150,304],[200,301],[250,295],[300,286],[350,280],[400,274],[450,269],[500,266],[600,266],[650,269],[700,272],[750,274],[800,277],[850,283],[900,283],[950,289],[1000,290]];
  const ESB2 = [[0,531],[100,531],[150,528],[200,522],[244,512],[262,503],[300,490],[350,487],[400,487],[450,487],[500,496],[540,507],[580,520],[630,518],[700,510],[750,511],[800,514],[850,519],[900,520],[950,522],[1000,522]];
  const PLEVRE2 = [[0,850],[300,850],[590,852],[700,849],[800,846],[1000,846]];

  ECHO.anat['erector-spinae-plane'] = [{
    fig: 'img/erector-spinae-plane/echo-1.jpg',
    valide: false,
    vb: [1000, 852], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — écart avec la fiche, à lire d\'abord : le trajet reporté est le pointillé ajouté par les auteurs (aucun fût d\'aiguille n\'est visible sur l\'image). Il est incliné à ≈ 30–35° et s\'arrête sur le fascia profond de l\'érecteur dans la fenêtre inter-transversaire, ≈ 9 mm en caudal du bord du processus transverse crânial — sans os sous la pointe. La fiche demande 45–60° et le contact osseux du processus transverse, butée de sécurité du geste : la planche montre les repères et le plan, pas le point de contact à reproduire.',
      'Certain — orientation : crânial à gauche. Le texte des auteurs dit l\'aiguille avancée en direction crânio-caudale (citation dans la légende) et leur pointillé entre par la gauche ; même sens que le schéma apparié.',
      'Certain — trapèze (MT), grand rhomboïde (RM), érecteur du rachis (ES), deux processus transverses (TP), plèvre (Pleura) : sigles des auteurs. Niveau T4 d\'après leur texte : le rhomboïde y est attendu.',
      'Certain — échelle : graduation centimétrique de l\'écran (hors cadre après rognage) = 222 unités du tracé par centimètre. Toit des processus transverses à ≈ 1,5 cm (crânial) et ≈ 1,7 cm (caudal) de la peau ; plèvre à ≈ 2,5 cm, soit ≈ 1 cm plus profonde que le plan cible.',
      'Probable — limites des trois muscles : placées sur les lignes hyperéchogènes continues mesurées (trapèze / rhomboïde y ≈ 180, rhomboïde / érecteur y ≈ 215). Les sigles des auteurs tombent chacun dans sa couche, mais ils ne tracent pas les fascias ; trapèze et rhomboïde ne font ici que ≈ 2–3 mm chacun. Les lignes parallèles serrées de la moitié gauche (y 215–290) sont rattachées à l\'érecteur (lames aponévrotiques).',
      'Probable — forme des os : le processus transverse crânial a un toit en dôme (≈ 1 cm de large), le caudal un toit plus plat et incliné. La bande saturée du toit crânial confond fascia profond et corticale : la corticale est tracée en son milieu.',
      'Supposition — entre les deux os, sous le fascia de l\'érecteur : rien n\'est désigné par les auteurs (ligament et muscles inter-transversaires, élévateur de la côte, ligament costo-transversaire supérieur et espace paravertébral ne sont pas séparables) — plan non attribué. Deux détails non interprétés : une lame de 1–2 mm entre deux lignes brillantes juste sous la pointe (x 280–620 : plan ouvert par le sérum du test ?) et une bande brillante sans cône d\'ombre qui rejoint le bord crânial de l\'os caudal (x 560–720, y ≈ 440).',
      'Supposition — peau / tissu sous-cutané : gain saturé ; peau arrêtée sur la ligne y ≈ 75, bande très brillante y 95–120 dessinée comme le fascia superficiel au contact du trapèze.',
      'Extrapolé — flancs et profondeur des deux processus transverses (cônes d\'ombre), plèvre sous les os (pointillé) et poumon. Aux deux bords du cadre, un écho brillant à la profondeur de la plèvre (x < 40 et x > 945) est lu comme la plèvre des fenêtres voisines.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU1 },
      { id: 'sc', tissu: 'graisse', haut: PEAU1, bas: FS1 },
      { id: 'tm', tissu: 'muscle', haut: FS1, bas: F1A },
      { id: 'rm', tissu: 'muscle', haut: F1A, bas: F1B },
      { id: 'es', tissu: 'muscle', haut: F1B, bas: ESB1 },
      { id: 'itp', tissu: 'indetermine', haut: ESB1, bas: PLEVRE1 },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE1, bas: [[0,880],[1000,880]] },
      { id: 'fs', tissu: 'fascia', ligne: FS1, ep: 14 },
      { id: 'plan', tissu: 'fascia', ligne: ESB1.slice(7, 15), ep: 5 },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE1, ep: 9, extrapole: true },
      { id: 'plevre-cran', tissu: 'plevre', ligne: PLEVRE1.slice(0, 2), ep: 9 },
      { id: 'plevre-vue', tissu: 'plevre', ligne: PLEVRE1.slice(3, 15), ep: 9 },
      { id: 'plevre-caud', tissu: 'plevre', ligne: PLEVRE1.slice(16, 18), ep: 9 },
      { id: 'tp-cran', tissu: 'os', contour: [[54,520],[50,440],[58,392],[88,366],[120,356],[152,350],[200,352],[232,350],[258,356],[272,374],[276,440],[272,520],[160,530]], vu: [2, 9] },
      { id: 'tp-caud', tissu: 'os', contour: [[724,520],[720,450],[726,420],[745,408],[780,401],[820,392],[860,386],[900,387],[935,389],[948,402],[952,450],[948,520],[836,530]], vu: [2, 9] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[0,54],[467,351]], ep: 5, extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 900, y: 90, dx: -90, dy: -52, text: 'Tissu sous-cutané (supposé)' },
      { s: 'tm', x: 560, y: 145, dx: -80, dy: -107, text: 'Trapèze', vue: 'anat' },
      { s: 'rm', x: 800, y: 207, dx: 100, dy: 70, text: 'Rhomboïde', vue: 'anat' },
      { s: 'es', x: 520, y: 300, dx: 210, dy: 35, text: 'Érecteur du rachis', vue: 'anat' },
      { s: 'aiguille', x: 250, y: 213, dx: -80, dy: 77, text: 'Aiguille (trajet figuré)', vue: 'anat' },
      { s: 'plan', x: 560, y: 371, dx: -80, dy: 80, text: 'Plan cible, sous l\'érecteur' },
      { s: 'tp-cran', x: 160, y: 420, dx: 0, dy: 60, text: 'Processus transverse', vue: 'anat' },
      { s: 'tp-caud', x: 840, y: 440, dx: 0, dy: 50, text: 'Processus transverse', vue: 'anat' },
      { s: 'plevre-vue', x: 660, y: 586, dx: 140, dy: 54, text: 'Plèvre, ≈ 1 cm sous la cible', vue: 'anat' },
      { s: 'itp', x: 500, y: 530, dx: 0, dy: 178, text: 'Tissus inter-transversaires (non désignés)' },
      { s: 'tp-cran', x: 160, y: 565, dx: 0, dy: 205, text: 'Cône d\'ombre', vue: 'echo' },
      { s: 'poumon', x: 520, y: 790, dx: 200, dy: 0, text: 'Poumon', vue: 'anat' },
    ],
  }, {
    fig: 'img/erector-spinae-plane/echo-2.jpg',
    valide: false,
    vb: [1000, 909], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — orientation : crânial à gauche. Le texte des auteurs dit la sonde verticale, repère vers le haut, et l\'aiguille avancée dans le plan de crânial en caudal (citation dans la légende) ; l\'aiguille entre par la gauche de l\'image. Même sens que le schéma apparié. La légende d\'origine de la figure, elle, ne donne pas l\'axe.',
      'Certain — trapèze, érecteur du rachis, processus transverse (T8 d\'après la légende d\'origine) : aplats colorés du panneau droit de la même figure, qui est la même image (décalage horizontal constant, vérifié par corrélation). Limites reportées, puis recalées sur les lignes hyperéchogènes de l\'écho là où elles existent. Pas de rhomboïde à ce niveau : concordant avec l\'anatomie.',
      'Probable — aiguille : fût suivi par contraste le long d\'une droite (≈ 35° sur la peau) de x ≈ 150 à x ≈ 580 ; il passe ≈ 15 unités au-dessus de l\'épaule caudale de l\'os et s\'arrête juste au-delà, au ras du fascia profond de l\'érecteur — là où pointe la seconde flèche des auteurs. Image de 339 px : pointe à ± 20 unités, impossible de dire si elle est juste au-dessus ou juste au-dessous du fascia.',
      'Probable — écart avec la fiche : la pointe n\'est pas posée sur le toit du processus transverse mais à son bord caudal, sans os dessous sur cette image (les auteurs écrivent pourtant avoir injecté au contact osseux) ; angle ≈ 35° pour 45–60° dans la fiche. Aucune nappe d\'injectat n\'est visible.',
      'Supposition — plèvre : ni désignée ni franche. Seule trace possible, des échos linéaires discontinus à y ≈ 845–855 (x 590–800), dans la fenêtre en caudal de l\'os ; dessinée en pointillé à cette profondeur sur toute la largeur. Aucune échelle sur l\'image : distance pointe–plèvre non chiffrable.',
      'Supposition — tissus situés sous le fascia profond de l\'érecteur, de part et d\'autre de l\'os : non désignés (plage échogène striée en caudal de l\'os, x 550–720) — plan non attribué. Au bord droit, une interface brillante courbe (x > 900, y ≈ 530–560) avec atténuation dessous pourrait être l\'épaule du processus transverse sous-jacent : non dessinée.',
      'Supposition — peau / tissu sous-cutané : limite placée sous la bande sombre superficielle (y ≈ 45) ; la bande très échogène y 105–160, juste au-dessus du trapèze, est laissée dans le tissu sous-cutané.',
      'Extrapolé — flancs et face profonde du processus transverse (forme de l\'aplat des auteurs, dans le cône d\'ombre) ; tout ce que masque la vignette photographique (coin inférieur gauche) ; segment d\'aiguille en amont de x ≈ 150 (non vu) ; poumon.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU2 },
      { id: 'sc', tissu: 'graisse', haut: PEAU2, bas: TRAP2 },
      { id: 'trap', tissu: 'muscle', haut: TRAP2, bas: F2 },
      { id: 'es', tissu: 'muscle', haut: F2, bas: ESB2 },
      { id: 'profond', tissu: 'indetermine', haut: ESB2, bas: PLEVRE2 },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE2, bas: [[0,940],[1000,940]], extrapole: true },
      { id: 'plan', tissu: 'fascia', ligne: ESB2.slice(4, 14), ep: 5 },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE2, ep: 8, extrapole: true },
      { id: 'tp', tissu: 'os', contour: [[236,600],[238,540],[244,515],[262,503],[300,490],[350,487],[400,487],[450,487],[500,496],[530,508],[548,530],[552,600],[548,650],[525,682],[470,702],[400,708],[340,697],[285,675],[250,645]], vu: [2, 10] },
      { id: 'aiguille-amont', tissu: 'aiguille', ligne: [[0,104],[150,213]], ep: 5, extrapole: true },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[150,213],[580,524]], ep: 5 },
    ],
    labels: [
      { s: 'sc', x: 700, y: 100, dx: 60, dy: -55, text: 'Tissu sous-cutané (supposé)' },
      { s: 'trap', x: 700, y: 235, dx: 160, dy: -13, text: 'Trapèze' },
      { s: 'es', x: 640, y: 400, dx: 200, dy: -55, text: 'Érecteur du rachis' },
      { s: 'aiguille', x: 300, y: 322, dx: -180, dy: 8, text: 'Aiguille', vue: 'anat' },
      { s: 'plan', x: 330, y: 488, dx: -145, dy: -33, text: 'Plan cible, sous l\'érecteur' },
      { s: 'tp', x: 394, y: 530, dx: 0, dy: 70, text: 'Processus transverse de T8' },
      { s: 'aiguille', x: 580, y: 524, dx: 220, dy: 66, text: 'Pointe de l\'aiguille' },
      { s: 'profond', x: 680, y: 650, dx: 80, dy: 50, text: 'Tissus non désignés par les auteurs' },
      { s: 'plevre', x: 700, y: 849, dx: 60, dy: -59, text: 'Plèvre (supposée, non désignée)' },
      { s: 'tp', x: 400, y: 760, dx: 0, dy: 50, text: 'Cône d\'ombre', vue: 'echo' },
    ],
  }];
})();
