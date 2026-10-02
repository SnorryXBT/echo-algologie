/* Coupes anatomiques recalées — bloc intercostal (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : panneau A (vierge) de Gabriel et al., KJA 2020, fig. 1 ; corrigé = panneau B des auteurs (côtes, plèvre, artère intercostale cerclée),
            relevé dans le même repère par `anat-grid.js intercostal 0 <dossier> 0.505,0,0.495,0.327`. Sonde convexe : le secteur est courbe.
   echo-2 : Abu Hana et al., Cureus 2026, fig. 1 — symboles des auteurs sans texte (flèches sur les côtes, pointillé pleural, étoile, flèche du trajet). */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };

  /* ---------- echo-1 : coupe de repérage, sonde convexe ---------- */
  const PEAU_H = [[0,-30],[180,-20],[253,8],[368,50],[526,62],[684,36],[716,8],[790,-20],[1000,-30]];
  const PEAU_B = PEAU_H.map(p => [p[0], p[1] + 32]);
  const L1 = [[0,118],[200,126],[250,135],[300,148],[350,158],[400,164],[500,171],[600,170],[700,162],[800,152],[1000,142]];
  const SOMMETS = [[0,304],[205,302],[245,290],[285,286],[322,296],[365,302],[410,297],[440,283],[480,279],[520,284],[540,300],[570,306],[600,306],[625,297],[660,296],[700,312],[800,320],[1000,332]];
  const PLEVRE = [[0,380],[130,384],[205,386],[320,386],[350,387],[400,398],[425,400],[520,384],[550,384],[600,400],[622,402],[700,402],[760,406],[815,409],[1000,418]];

  /* ---------- echo-2 : le geste, sonde linéaire ---------- */
  const DERME2 = [[0,104],[1000,100]];
  const FASCIA2 = [[0,385],[100,390],[200,393],[300,400],[450,398],[600,402],[750,400],[900,403],[1000,403]];
  const SOMMETS2 = [[0,612],[150,604],[250,592],[350,588],[450,605],[600,621],[750,588],[885,552],[1000,535]];
  const PLEVRE2 = [[0,838],[200,844],[364,850],[504,856],[550,860],[600,857],[700,862],[796,868],[900,875],[1000,880]];

  ECHO.anat['intercostal'] = [{
    fig: 'img/intercostal/echo-1.jpg',
    valide: false,
    vb: [1000, 639], orient: { left: 'Crânial (probable)', right: 'Caudal' },
    lecture: [
      'Probable — orientation : les auteurs n\'écrivent pas l\'axe. Crânial à gauche est déduit de deux indices concordants de leur figure : l\'artère intercostale cerclée à droite de chaque côte (donc sous son bord inférieur), et la cryosonde des panneaux D et F qui entre par la droite pour gagner ce bord (abord caudo-crânial). Même sens que le schéma apparié.',
      'Certain — trois côtes, segments de plèvre entre les cônes d\'ombre et site de l\'artère intercostale : repris du panneau B, corrigé des auteurs, relevé dans le même repère que le panneau A.',
      'Certain — échelle : crochet « 1 cm » du panneau B = 75 unités du tracé. Surface des côtes à ≈ 3 cm de la peau ; plèvre ≈ 1,4 cm plus profonde que le sommet de la côte ; le site de l\'artère désigné par les auteurs est à 4–6 mm de la plèvre.',
      'Probable — contour des côtes : seule la calotte superficielle est un réflecteur vu ; les flancs et la face profonde suivent le dessin des auteurs (limite de la plage d\'ombre), pas une corticale visible. Image de 377 px, sonde convexe basse fréquence.',
      'Supposition — plans superficiels : les auteurs ne désignent rien au-dessus des côtes. Peau placée sur l\'arc gris du contact de sonde, limite tissu sous-cutané / muscles sur la première ligne hyperéchogène continue ; les muscles (trapèze, rhomboïde ou grand dorsal selon le niveau, érecteurs) ne sont pas séparés, le niveau costal n\'étant pas donné.',
      'Supposition — plage très brillante juste à droite de la première côte (x ≈ 340–390, y ≈ 300–350), au contact du cercle des auteurs : non désignée, laissée dans les muscles intercostaux (graisse ou fascia de l\'espace ?).',
      'Extrapolé — veine et nerf intercostaux (aucun des deux n\'est vu : placés de part et d\'autre de l\'artère cerclée, veine côté côte, nerf côté caudal) ; plèvre et poumon sous les côtes (cône d\'ombre) ; les trois plans intercostaux ne sont pas séparables ; tout ce qui déborde du secteur de la sonde (coins du cadre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU_H, bas: PEAU_B, extrapole: true },
      { id: 'sc', tissu: 'graisse', haut: PEAU_B, bas: L1 },
      { id: 'paroi', tissu: 'muscle', haut: L1, bas: SOMMETS },
      { id: 'ic', tissu: 'muscle', haut: SOMMETS, bas: PLEVRE },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE, bas: [[0,660],[1000,660]] },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE, ep: 7, extrapole: true },
      { id: 'plevre-0', tissu: 'plevre', ligne: PLEVRE.slice(1, 3), ep: 7 },
      { id: 'plevre-1', tissu: 'plevre', ligne: PLEVRE.slice(3, 7), ep: 7 },
      { id: 'plevre-2', tissu: 'plevre', ligne: PLEVRE.slice(7, 11), ep: 7 },
      { id: 'plevre-3', tissu: 'plevre', ligne: PLEVRE.slice(11, 14), ep: 7 },
      { id: 'cote-1', tissu: 'os', contour: [[207,380],[205,340],[215,305],[245,290],[285,286],[315,292],[324,330],[322,378],[265,382]], vu: [2, 5] },
      { id: 'cote-2', tissu: 'os', contour: [[420,392],[408,340],[412,300],[440,283],[480,279],[520,284],[538,310],[535,350],[522,378],[470,386]], vu: [2, 5] },
      { id: 'cote-3', tissu: 'os', contour: [[628,394],[604,350],[600,312],[625,297],[660,296],[690,312],[703,345],[699,388],[672,396]], vu: [2, 5] },
      { id: 'v-1', tissu: 'veine', contour: ovale(331, 330, 7, 7), extrapole: true },
      { id: 'a-1', tissu: 'artere', contour: ovale(339, 346, 8, 8), extrapole: true },
      { id: 'n-1', tissu: 'nerf', contour: ovale(352, 362, 8, 7), extrapole: true },
      { id: 'v-2', tissu: 'veine', contour: ovale(543, 342, 7, 7), extrapole: true },
      { id: 'a-2', tissu: 'artere', contour: ovale(546, 358, 8, 8), extrapole: true },
      { id: 'n-2', tissu: 'nerf', contour: ovale(557, 373, 8, 7), extrapole: true },
      { id: 'v-3', tissu: 'veine', contour: ovale(712, 358, 7, 7), extrapole: true },
      { id: 'a-3', tissu: 'artere', contour: ovale(727, 372, 8, 8), extrapole: true },
      { id: 'n-3', tissu: 'nerf', contour: ovale(741, 386, 8, 7), extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 330, y: 122, dx: -190, dy: -82, text: 'Tissu sous-cutané (supposé)' },
      { s: 'paroi', x: 520, y: 240, dx: 60, dy: -215, text: 'Muscles de la paroi (non séparés)' },
      { s: 'ic', x: 585, y: 335, dx: 255, dy: -190, text: 'Muscles intercostaux' },
      { s: 'cote-1', x: 262, y: 300, dx: -150, dy: -60, text: 'Côte (calotte seule vue)' },
      { s: 'a-1', x: 339, y: 346, dx: -150, dy: 124, text: 'A. intercostale (site des auteurs)' },
      { s: 'n-3', x: 739, y: 386, dx: 95, dy: 110, text: 'Veine et nerf : extrapolés', vue: 'anat' },
      { s: 'plevre-2', x: 575, y: 392, dx: 20, dy: 120, text: 'Plèvre' },
      { s: 'cote-2', x: 475, y: 450, dx: -30, dy: 150, text: 'Cône d\'ombre costal', vue: 'echo' },
      { s: 'poumon', x: 475, y: 470, dx: -30, dy: 130, text: 'Poumon', vue: 'anat' },
    ],
  }, {
    fig: 'img/intercostal/echo-2.jpg',
    valide: false,
    vb: [1000, 1244], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — écart avec la fiche, à lire avant tout : le trajet reporté est celui de la flèche des auteurs, à ≈ 65° de la peau, dirigé vers la plèvre ; la fiche demande une progression tangentielle à la plèvre. Leur texte dit en outre avoir injecté « entre l\'intercostal intime et la plèvre », plan plus profond que la cible de la fiche (entre interne et intime). La planche montre les repères, pas la trajectoire à reproduire.',
      'Certain — orientation : légende d\'origine « caudal to cranial angulation », flèche du trajet entrant par la droite : caudal à droite, crânial à gauche, comme le schéma apparié.',
      'Certain — les deux côtes (flèches jaunes des auteurs), la plèvre (leur pointillé, tracé ici sur la ligne brillante qu\'il souligne, x ≈ 500–800), la cible (leur étoile, « subcostal groove »).',
      'Probable — plans superficiels : derme, graisse sous-cutanée lobulée jusqu\'à la ligne continue y ≈ 400, puis une couche musculaire jusqu\'au plan des côtes ; les auteurs ne nomment ni le muscle ni le site de ponction sur la côte (niveau T5-T6, côté droit, d\'après leur texte).',
      'Supposition — aucune échelle sur l\'image : distances non chiffrées. La plèvre est plus profonde que la surface de la côte crâniale d\'environ une épaisseur de côte ; l\'étoile est au ras de la plèvre.',
      'Extrapolé — aiguille : mal vue selon les auteurs, dessinée en pointillé sur leur flèche. Paquet intercostal (veine, artère, nerf de crânial en caudal) : non vu, placé sous le bord inférieur de la côte crâniale, autour de l\'étoile. Flancs et face profonde des deux côtes, plèvre sous les cônes d\'ombre et en dehors du segment brillant, poumon. Les trois plans intercostaux ne sont pas séparables.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME2 },
      { id: 'sc', tissu: 'graisse', haut: DERME2, bas: FASCIA2 },
      { id: 'paroi', tissu: 'muscle', haut: FASCIA2, bas: SOMMETS2 },
      { id: 'ic', tissu: 'muscle', haut: SOMMETS2, bas: PLEVRE2 },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE2, bas: [[0,1260],[1000,1260]] },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE2, ep: 9, extrapole: true },
      { id: 'plevre-vue', tissu: 'plevre', ligne: PLEVRE2.slice(3, 8), ep: 9 },
      { id: 'cote-cran', tissu: 'os', contour: [[-40,615],[150,604],[250,592],[350,588],[450,605],[600,621],[612,640],[600,690],[580,735],[556,765],[535,785],[520,808],[514,836],[300,832],[-40,826]], vu: [1, 5] },
      { id: 'cote-caud', tissu: 'os', contour: [[872,640],[880,572],[900,548],[950,538],[1040,530],[1040,860],[905,858],[878,780]], vu: [2, 4] },
      { id: 'veine', tissu: 'veine', contour: ovale(538, 814, 10, 10), extrapole: true },
      { id: 'artere', tissu: 'artere', contour: ovale(559, 828, 10, 10), extrapole: true },
      { id: 'nerf', tissu: 'nerf', contour: ovale(582, 838, 11, 10), extrapole: true },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[924,0],[576,790]], ep: 5, extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 180, y: 250, dx: 0, dy: -195, text: 'Tissu sous-cutané' },
      { s: 'aiguille', x: 838, y: 195, dx: -270, dy: -140, text: 'Trajet (flèche des auteurs)' },
      { s: 'paroi', x: 300, y: 500, dx: -90, dy: -180, text: 'Muscle de la paroi (non désigné)' },
      { s: 'cote-cran', x: 280, y: 690, dx: -80, dy: 285, text: 'Côte crâniale' },
      { s: 'ic', x: 730, y: 720, dx: 60, dy: 355, text: 'Muscles intercostaux' },
      { s: 'cote-caud', x: 950, y: 610, dx: -60, dy: 180, text: 'Côte caudale' },
      { s: 'plevre-vue', x: 680, y: 862, dx: -40, dy: 113, text: 'Plèvre' },
      { s: 'nerf', x: 578, y: 842, dx: -178, dy: 233, text: 'Paquet intercostal V-A-N (extrapolé)', vue: 'anat' },
      { s: 'nerf', x: 559, y: 830, dx: -159, dy: 245, text: 'Cible des auteurs (étoile)', vue: 'echo' },
      { s: 'poumon', x: 200, y: 1125, dx: 0, dy: 70, text: 'Poumon' },
    ],
  }];
})();
