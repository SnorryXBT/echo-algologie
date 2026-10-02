/* Coupes anatomiques recalées — bloc paravertébral thoracique (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Balan et al., Medicina 2021, fig. 1A — coupe parasagittale annotée par les auteurs (TM, RM, ESM, EIM, IIM, TP, PLEURA, CRANIAL / CAUDAL) ;
            cadre noir rogné ; le médaillon photographique (coin supérieur droit) reste dans l'image, les plans sont prolongés dessous.
   echo-2 : Tang et al., Frontiers in Medicine 2025, fig. 1B — pièce cadavérique, abord transversal in-plane (TP 6, flèches jaunes = aiguille,
            triangles blancs = plèvre, Medial / Lateral). */
(function () {
  /* ---------- echo-1 : coupe parasagittale de repérage ---------- */
  const PEAU_B = [[0,75],[220,82],[300,93],[530,95],[660,88],[1000,85]];
  const SC_B = [[0,160],[300,152],[660,143],[1000,138]];
  const F1 = [[0,292],[100,287],[250,277],[400,268],[500,260],[650,262],[1000,262]];
  const F2 = [[0,512],[53,509],[150,500],[265,491],[350,476],[450,472],[500,470],[600,456],[700,447],[850,456],[1000,458]];
  const ESM_B = [[0,650],[95,640],[104,600],[130,580],[150,572],[250,570],[350,572],[400,580],[460,570],[600,548],[700,532],[775,522],[850,506],[950,504],[1000,504]];
  const EI_B = [[378,662],[450,664],[520,666],[625,660],[700,656],[778,650]];
  const TOIT = [[368,712],[430,714],[483,717],[515,738],[550,748],[600,746],[700,745],[778,738]];   /* bord supérieur du coin des auteurs, puis ligne hyperéchogène sous l'intercostal interne */
  const PLEVRE = [[0,812],[100,810],[355,802],[400,788],[450,779],[500,776],[600,776],[700,774],[750,762],[800,760],[1000,758]];

  /* ---------- echo-2 : abord transversal, pièce cadavérique ---------- */
  const PEAU2_B = [[0,45],[1000,42]];
  const SC2_B = [[0,128],[200,124],[368,118],[684,88],[790,78],[1000,70]];
  const FASCIA2 = [[0,247],[200,242],[421,236],[684,240],[842,262],[1000,268]];
  const TP6 = [[-40,420],[0,418],[50,413],[100,401],[135,408],[160,438],[180,490],[192,560],[196,640]];
  const TOIT2 = [[196,575],[300,572],[400,566],[500,572],[553,575],[600,567],[700,555],[790,546],[842,531],[1000,505]];
  const PLEVRE2 = [[196,716],[237,706],[250,701],[300,700],[350,686],[400,671],[450,654],[500,639],[550,628],[600,619],[650,613],[700,600],[750,590],[800,577],[850,575],[900,570],[1000,560]];

  ECHO.anat['paravertebral-thoracique'] = [{
    fig: 'img/paravertebral-thoracique/echo-1.jpg',
    valide: false,
    vb: [1000, 1040], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Probable — identité des deux os : étiquetés « TP » (processus transverse) par les auteurs, repris tels quels. Réserve à trancher : les mêmes auteurs placent des muscles intercostaux (EIM, IIM) entre eux, le sommet de gauche est en dôme et les érecteurs sont très minces — aspect que donne aussi une coupe plus latérale, passant par les côtes. Si ce sont des côtes, le coin désigné est l\'espace intercostal postérieur, pas l\'espace paravertébral proprement dit.',
      'Certain — orientation : mentions CRANIAL / CAUDAL incrustées ; même sens que le schéma apparié.',
      'Certain — trapèze, rhomboïde, érecteurs du rachis, intercostal externe, intercostal interne, plèvre : sigles des auteurs ; limites tracées sur les fascias hyperéchogènes mesurés.',
      'Probable — espace paravertébral : c\'est le coin en pointillé orange des auteurs, non défini dans leur légende (elle situe la cible « anteriorly to SCTL/IIMb »). Dessiné comme la lame comprise entre la ligne hyperéchogène qui borde en profondeur l\'intercostal interne (y ≈ 750) et la plèvre ; contre le processus transverse crânial, son toit est placé sur le bord supérieur du coin des auteurs (leur bord inférieur, oblique, est schématique : la plèvre est plus bas). Le ligament costo-transversaire supérieur n\'est pas étiqueté sur ce panneau.',
      'Supposition — limite profonde des érecteurs entre les deux os : droite joignant leurs sommets (aucune ligne continue). Peau / tissu sous-cutané : gain saturé, limite placée sur le liseré sombre y ≈ 85.',
      'Extrapolé — sous le médaillon photographique des auteurs (coin supérieur droit) : peau, tissu sous-cutané, trapèze et rhomboïde prolongés. Sous les deux corticales (cônes d\'ombre) : le bloc osseux dessiné réunit le processus transverse et ce qui lui est accolé en avant, sans les distinguer ; plèvre et poumon prolongés dessous. Bande à gauche de l\'os crânial : non attribuée. Aucune échelle sur l\'image : distances non chiffrées.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU_B },
      { id: 'sc', tissu: 'graisse', haut: PEAU_B, bas: SC_B },
      { id: 'tm', tissu: 'muscle', haut: SC_B, bas: F1 },
      { id: 'rm', tissu: 'muscle', haut: F1, bas: F2 },
      { id: 'esm', tissu: 'muscle', haut: F2, bas: ESM_B },
      { id: 'gauche', tissu: 'indetermine', contour: [[0,650],[95,640],[100,660],[106,780],[100,808],[0,810]] },
      { id: 'eim', tissu: 'muscle', haut: [[384,578],[400,580],[460,570],[600,548],[700,532],[778,521]], bas: EI_B },
      { id: 'iim', tissu: 'muscle', haut: EI_B, bas: TOIT },
      { id: 'epv', tissu: 'graisse', haut: TOIT, bas: PLEVRE.slice(2, 9).concat([[778,760]]) },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE, bas: [[0,1060],[1000,1060]] },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE, ep: 9, extrapole: true },
      { id: 'plevre-vue', tissu: 'plevre', ligne: PLEVRE.slice(2, 10), ep: 9 },
      { id: 'tp-cran', tissu: 'os', contour: [[100,655],[102,610],[125,585],[150,572],[250,570],[350,572],[388,588],[390,640],[372,712],[358,772],[325,794],[150,796],[108,780]], vu: [2, 6] },
      { id: 'tp-caud', tissu: 'os', contour: [[770,585],[775,535],[800,516],[850,506],[950,504],[1040,504],[1040,752],[800,750],[772,700]], vu: [2, 4] },
    ],
    labels: [
      { s: 'sc', x: 420, y: 122, dx: -180, dy: -87, text: 'Tissu sous-cutané (supposé)' },
      { s: 'tm', x: 330, y: 215, dx: -170, dy: 0, text: 'Trapèze', vue: 'anat' },
      { s: 'rm', x: 330, y: 385, dx: -170, dy: 0, text: 'Rhomboïde', vue: 'anat' },
      { s: 'esm', x: 560, y: 505, dx: 110, dy: -125, text: 'Érecteurs du rachis', vue: 'anat' },
      { s: 'eim', x: 500, y: 615, dx: 150, dy: -8, text: 'Intercostal externe', vue: 'anat' },
      { s: 'iim', x: 500, y: 705, dx: 150, dy: -8, text: 'Intercostal interne', vue: 'anat' },
      { s: 'tp-cran', x: 250, y: 600, dx: -30, dy: 85, text: 'Processus transverse', vue: 'anat' },
      { s: 'tp-caud', x: 900, y: 540, dx: -30, dy: 110, text: 'Processus transverse', vue: 'anat' },
      { s: 'epv', x: 410, y: 760, dx: -120, dy: 140, text: 'Espace paravertébral (coin des auteurs)' },
      { s: 'plevre-vue', x: 640, y: 776, dx: 110, dy: 100, text: 'Plèvre', vue: 'anat' },
      { s: 'poumon', x: 620, y: 960, dx: 130, dy: 20, text: 'Poumon', vue: 'anat' },
    ],
  }, {
    fig: 'img/paravertebral-thoracique/echo-2.jpg',
    valide: false,
    vb: [1000, 872], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — incohérence de la source, sans effet sur la lecture : la légende d\'origine décrit A comme la coupe transversale et B comme la sagittale, à l\'inverse des mentions incrustées. Le panneau B est lu comme la coupe transversale : mentions « Medial / Lateral » des auteurs, un seul processus transverse en dedans, plèvre qui remonte en dehors, et leur texte (abord transversal in-plane, aiguille « from lateral to medial »).',
      'Certain — orientation : médial à gauche, latéral à droite ; image en miroir du schéma apparié (déjà dit dans la légende). Aiguille de latéral en médial, à angle aigu avec la plèvre : conforme à la fiche.',
      'Certain — processus transverse de T6 (sigle), plèvre (triangles blancs), aiguille (cinq flèches jaunes) : désignés par les auteurs. Pièce cadavérique.',
      'Probable — pointe de l\'aiguille : placée sur le dernier écho brillant sous la flèche la plus médiale. Le fût n\'est un réflecteur franc qu\'en haut à droite (x > 850) ; ailleurs le tracé, rectiligne, passe à distance constante de la pointe des cinq flèches (elles s\'arrêtent toutes un peu avant le fût).',
      'Probable — espace cible : coin compris entre la plèvre et une ligne hyperéchogène fine qui lui est parallèle (x ≈ 400–840), plus épais en dedans. C\'est « the triangular area delineated by the parietal pleura, internal intercostal membrane and intercostal muscles » du texte des auteurs, qui ne désignent pas la membrane sur l\'image.',
      'Supposition — toit de l\'espace en dedans de x ≈ 400, jusqu\'au processus transverse : aucune ligne visible, prolongé à l\'estime. Plans superficiels (344 px, cadavre) : limite sous-cutané / muscle et fascia intermusculaire placés sur les deux lignes continues ; muscles non nommés par les auteurs.',
      'Extrapolé — profondeur du processus transverse et tout ce que masque son cône d\'ombre ; poumon. Aucune échelle : distance pointe–plèvre non chiffrée.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU2_B },
      { id: 'sc', tissu: 'graisse', haut: PEAU2_B, bas: SC2_B },
      { id: 'm-sup', tissu: 'muscle', haut: SC2_B, bas: FASCIA2 },
      { id: 'm-prof', tissu: 'muscle', haut: FASCIA2, bas: TP6.slice(1, 8).concat(TOIT2) },
      { id: 'epv', tissu: 'graisse', haut: TOIT2, bas: PLEVRE2 },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE2, bas: [[196,890],[1000,890]] },
      { id: 'toit', tissu: 'fascia', ligne: TOIT2, ep: 5, extrapole: true },
      { id: 'toit-vu', tissu: 'fascia', ligne: TOIT2.slice(2, 9), ep: 5 },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE2, ep: 8, extrapole: true },
      { id: 'plevre-vue', tissu: 'plevre', ligne: PLEVRE2.slice(1, 16), ep: 8 },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,179],[318,626]], ep: 6 },
      { id: 'tp', tissu: 'os', cortex: TP6, vu: [1, 4] },
    ],
    labels: [
      { s: 'sc', x: 300, y: 85, dx: -60, dy: -55, text: 'Tissu sous-cutané (supposé)' },
      { s: 'm-prof', x: 480, y: 330, dx: -110, dy: -150, text: 'Muscles de la paroi (non désignés)' },
      { s: 'aiguille', x: 905, y: 241, dx: -25, dy: -106, text: 'Aiguille', vue: 'anat' },
      { s: 'tp', x: 80, y: 440, dx: 75, dy: 80, text: 'Processus transverse de T6', vue: 'anat' },
      { s: 'epv', x: 290, y: 650, dx: 0, dy: 95, text: 'Espace paravertébral (cible)' },
      { s: 'plevre-vue', x: 500, y: 641, dx: 55, dy: 159, text: 'Plèvre', vue: 'anat' },
      { s: 'toit-vu', x: 720, y: 553, dx: 80, dy: 192, text: 'Toit de l\'espace (probable)' },
      { s: 'poumon', x: 780, y: 640, dx: 110, dy: 15, text: 'Poumon', vue: 'anat' },
    ],
  }];
})();
