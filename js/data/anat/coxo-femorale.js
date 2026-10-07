/* Coupes anatomiques recalées — articulation coxo-fémorale, voie antérieure (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : repérage, Lin et al., J Med Ultrasound 2026, fig. 1c (vierge, 266 px ; corrigé = panneau d, autre appareil, non recalé au pixel).
   echo-2 : geste, Romeo et al., Br J Radiol 2026, fig. 5 (1 574 px, une seule flèche des auteurs).
   Points relevés sur la grille des anciens recadrages (qui mordaient sur un liseré blanc), ramenés au repère resserré par T1() et T2(). */
(function () {
  const T1 = pts => pts.map(p => [Math.round(p[0] * 1.015), Math.round(p[1] * 1.015)]);
  const T2 = pts => pts.map(p => [Math.round((p[0] - 8.1) * 1.0163), Math.round((p[1] - 5.3) * 1.0163)]);

  /* ---------- echo-1 : sonde convexe, les plans superficiels suivent l'arc de la sonde (flèche au centre) ---------- */
  const PEAU1 = T1([[0,-140],[125,-60],[245,0],[350,44],[450,60],[500,62],[600,44],[700,4],[850,-60],[1000,-140]]);
  const DERME1 = T1([[0,-100],[125,-25],[245,30],[350,70],[450,86],[500,88],[600,72],[700,36],[850,-25],[1000,-100]]);
  const FASC1 = T1([[0,140],[200,150],[300,148],[450,156],[600,158],[700,152],[850,150],[1000,150]]);
  const SEP1 = T1([[0,265],[130,250],[220,225],[300,208],[450,200],[600,205],[700,205],[800,195],[900,225],[1000,250]]);
  const ACET1 = T1([[0,418],[40,406],[80,386],[110,371],[150,362],[190,368],[207,390]]);
  /* capsule : arc superficiel brillant, prolongé sur le col (bande grise épaisse, x ≈ 560–660) jusqu'à son insertion */
  const CAP1_HAUT = T1([[100,345],[150,322],[200,318],[300,315],[385,310],[420,318],[450,330],[480,345],[520,372],[548,402],[600,445],[645,500],[690,548],[740,572],[800,566]]);
  const CAP1_BAS = T1([[100,362],[150,346],[200,342],[300,338],[400,336],[450,355],[500,385],[532,412],[575,450],[615,505],[655,555],[700,584],[750,588],[800,576]]);
  /* tête : arc profond brillant (bord superficiel de la bande) ; jonction tête-col non vue ; col : ligne concave du bas à droite */
  const TETE1 = T1([[196,520],[210,470],[225,440],[240,400],[255,380],[300,360],[350,357],[400,358],[450,380],[500,405],[520,430],[540,480],[560,522],[600,548],[650,572],[700,588],[750,590],[800,578],[850,565],[900,552],[1000,540]]);

  /* ---------- echo-2 ---------- */
  const FASC2 = T2([[0,100],[250,97],[400,102],[500,96],[650,92],[800,100],[1000,100]]);
  const CAP2_HAUT = T2([[0,372],[60,355],[90,345],[200,338],[300,345],[350,352],[400,372],[450,395],[500,415],[560,440],[620,462],[680,485],[720,500]]);
  const CAP2_BAS = T2([[0,440],[60,420],[90,398],[150,398],[200,405],[250,412],[275,400],[300,380],[350,392],[400,408],[450,428],[500,446],[560,470],[620,490],[690,502],[720,503]]);
  const FEMUR2 = T2([[0,440],[60,420],[110,402],[150,400],[200,408],[250,415],[300,440],[350,462],[380,485],[400,503],[450,520],[500,527],[550,523],[600,517],[650,510],[700,503],[800,510],[850,512],[900,500],[950,490],[1008,479]]);

  ECHO.anat['coxo-femorale'] = [{
    fig: 'img/coxo-femorale/echo-1.jpg',
    valide: true,
    vb: [1000, 808], orient: { left: 'Crânial (acétabulum)', right: 'Caudal (col)' },
    lecture: [
      'Probable — double arc au-dessus de la tête : l\'arc profond (y ≈ 360–420) est lu comme la corticale de la tête fémorale, l\'arc superficiel (y ≈ 315–400), qui se prolonge à gauche au-dessus du rebord acétabulaire, comme la capsule (ligament ilio-fémoral) ; la bande sombre entre les deux comme le cartilage et l\'interligne. Si c\'est l\'arc superficiel qui est la corticale, toute la coupe est à décaler de ≈ 3 mm : à confirmer.',
      'Certain — orientation et identité des plans : acétabulum et labrum à gauche, tête fémorale au centre, col en bas à droite, ilio-psoas (ILA des auteurs) au contact de la capsule, sartorius et droit fémoral en surface — d\'après le panneau d de la même figure, corrigé annoté et colorisé (autre appareil, non recalé au pixel : positions relatives seulement). Même orientation que le schéma apparié.',
      'Probable — récessus antérieur (astérisque du panneau d) : plage hypoéchogène entre la capsule et la jonction tête-col (x ≈ 520–600, y ≈ 430–530) ; pas d\'épanchement.',
      'Probable — col fémoral : ligne concave en bas à droite (x ≈ 560–900), point le plus profond vers x ≈ 720.',
      'Supposition — labrum : image de 266 px ; triangle hypoéchogène entre le rebord acétabulaire et le début de l\'arc de la tête, position déduite du corrigé.',
      'Supposition — limite entre le plan sartorius / droit fémoral et l\'ilio-psoas : cloison discontinue (y ≈ 200–250), les deux muscles superficiels ne sont pas séparables ; le vaste intermédiaire que le corrigé place à l\'extrémité droite n\'est pas individualisé. L\'artère circonflexe fémorale latérale du schéma n\'est pas visible (pas de Doppler).',
      'Extrapolé — corticale à la jonction tête-col (pointillé) et sous le rebord acétabulaire ; plans dessinés hors du secteur de la sonde convexe (coins noirs de l\'image).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU1, bas: DERME1 },
      { id: 'sc', tissu: 'graisse', haut: DERME1, bas: FASC1 },
      { id: 'superficiels', tissu: 'muscle', haut: FASC1, bas: SEP1 },
      { id: 'ilio-psoas', tissu: 'muscle', haut: SEP1, bas: ACET1.slice(0, 3).concat(CAP1_HAUT, T1([[900,552],[1000,540]])) },
      { id: 'recessus', tissu: 'liquide', fin: true, contour: T1([[520,418],[540,424],[575,450],[615,505],[655,555],[650,572],[600,548],[560,522],[540,480],[520,440]]) },
      { id: 'capsule', tissu: 'ligament', haut: CAP1_HAUT, bas: CAP1_BAS },
      { id: 'labrum', tissu: 'fibrocartilage', contour: T1([[207,390],[200,350],[225,341],[255,344],[262,370],[246,392],[226,402]]) },
      { id: 'cartilage', tissu: 'cartilage', bas: TETE1.slice(3, 11), ep: 21 },
      { id: 'femur', tissu: 'os', cortex: TETE1, vu: [[3, 10], [12, 19]] },
      { id: 'acetabulum', tissu: 'os', cortex: ACET1, vu: [2, 6] },
    ],
    labels: [
      { s: 'superficiels', x: 620, y: 185, dx: 100, dy: -80, text: 'Sartorius / droit fémoral' },
      { s: 'ilio-psoas', x: 350, y: 268, dx: -200, dy: -60, text: 'Ilio-psoas' },
      { s: 'capsule', x: 400, y: 328, dx: 250, dy: -38, text: 'Capsule / lig. ilio-fémoral' },
      { s: 'labrum', x: 232, y: 372, dx: -125, dy: -82, text: 'Labrum (supposé)' },
      { s: 'acetabulum', x: 135, y: 372, dx: -20, dy: 110, text: 'Acétabulum' },
      { s: 'cartilage', x: 335, y: 352, dx: -15, dy: 110, text: 'Cartilage' },
      { s: 'femur', x: 420, y: 372, dx: 0, dy: 180, text: 'Tête fémorale' },
      { s: 'recessus', x: 570, y: 490, dx: 240, dy: -40, text: 'Récessus antérieur (cible)' },
      { s: 'femur', x: 730, y: 600, dx: 0, dy: 95, text: 'Col fémoral' },
    ],
  }, {
    fig: 'img/coxo-femorale/echo-2.jpg',
    valide: true,
    vb: [1000, 659], orient: { left: 'Crânial (tête)', right: 'Caudal (col)' },
    lecture: [
      'Probable — orientation : les auteurs ne l\'écrivent pas. Déduite de la morphologie osseuse — convexité de la tête à gauche de la jonction tête-col que désigne leur flèche, longue concavité du col à droite — et du trajet de l\'aiguille, qui vient du côté du col. Concordante avec le schéma apparié. La légende de la fiche dit que l\'aiguille vient « de distal et de latéral » : « de latéral » n\'est pas dans la source.',
      'Certain — cible : récessus capsulaire antérieur à la jonction tête-col, désigné par la flèche et la légende des auteurs (« anterior capsular recess at the femoral head-neck junction »).',
      'Probable — aiguille : fût net du bord droit du secteur jusqu\'à x ≈ 625, y ≈ 255, puis non visible ; la pointe est placée sur le prolongement de la droite, dans le récessus, ≈ 2 mm au-dessus de la corticale (amas échogène juste au-delà de la flèche des auteurs). Trajet dans le plan, caudo-crânial, à ≈ 45° : conforme à la technique de la fiche (aiguille en aval de la sonde, capsule franchie à la jonction tête-col). Le point d\'entrée cutané est hors de l\'image.',
      'Probable — capsule : bande échogène épaisse, oblique, qui se détache de la tête vers x ≈ 290 et rejoint le col vers x ≈ 700 ; la plage hypoéchogène qu\'elle délimite avec l\'os est le récessus distendu (épanchement ou produit injecté : la source ne le dit pas).',
      'Supposition — plans musculaires : sartorius, droit fémoral et ilio-psoas ne sont ni désignés par les auteurs ni séparables avec certitude ; une seule couche est dessinée. Paquet fémoral (médial, hors du plan) et artère circonflexe fémorale latérale non visibles : pas de Doppler.',
      'Supposition — reliefs échogènes nodulaires en haut à gauche (x ≈ 105–140, y ≈ 300–340) : rebord acétabulaire ou labrum, non tranché. Corticale à droite de x ≈ 720 : la ligne fine s\'efface et une bande plus épaisse reprend plus bas ; le tracé les relie.',
      'Extrapolé — profondeur du fémur (cône d\'ombre) ; capsule au-dessus de la tête (limite superficielle sans signal propre) ; plans dessinés hors du secteur de la sonde convexe.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,8],[1000,8]], bas: [[0,30],[1000,30]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,30],[1000,30]], bas: FASC2 },
      { id: 'muscles', tissu: 'muscle', haut: FASC2, bas: CAP2_HAUT.concat(T2([[800,510],[850,512],[900,500],[950,490],[1008,479]])) },
      { id: 'recessus', tissu: 'liquide', contour: T2([[285,392],[300,380],[350,392],[400,408],[450,428],[500,446],[560,470],[620,490],[690,502],[650,510],[600,517],[550,523],[500,527],[450,520],[400,503],[380,485],[350,462],[300,440]]) },
      { id: 'capsule', tissu: 'ligament', haut: CAP2_HAUT, bas: CAP2_BAS },
      { id: 'reliefs', tissu: 'indetermine', contour: T2([[100,295],[135,298],[150,320],[140,345],[110,345],[92,320]]) },
      { id: 'aiguille', tissu: 'aiguille', ligne: T2([[820,80],[425,462]]), ep: 6 },
      { id: 'femur', tissu: 'os', cortex: FEMUR2, vu: [2, 15] },
    ],
    labels: [
      { s: 'muscles', x: 420, y: 195, dx: 0, dy: -62, text: 'Muscles antérieurs (non séparés)' },
      { s: 'reliefs', x: 122, y: 322, dx: 95, dy: -95, text: 'Rebord acétabulaire ou labrum ?' },
      { s: 'aiguille', x: 706, y: 192, dx: 130, dy: 55, text: 'Aiguille' },
      { s: 'capsule', x: 612, y: 468, dx: 190, dy: -135, text: 'Capsule / lig. ilio-fémoral' },
      { s: 'femur', x: 195, y: 412, dx: 0, dy: 150, text: 'Tête fémorale' },
      { s: 'recessus', x: 500, y: 492, dx: 60, dy: 100, text: 'Récessus antérieur (cible)' },
      { s: 'femur', x: 810, y: 516, dx: 45, dy: 70, text: 'Col fémoral' },
    ],
  }];
})();
