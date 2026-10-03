/* Coupes anatomiques recalées — ganglion stellaire, bloc en C6 (format : .claude/skills/echo-anatomie/SKILL.md).
   Points relevés sur la grille de l'image entière puis ramenés au repère après crop vertical (y − 39). */
(function () {
  const T = pts => pts.map(p => [p[0], p[1] - 39]);
  const FASCIA = T([[0,170],[120,180],[250,195],[350,202],[450,207],[560,212],[650,214],[700,222],[745,250]]);
  const TOIT = FASCIA.concat(T([[760,205],[810,195],[880,210],[950,200]]));
  const CORTEX = T([[150,486],[158,430],[175,400],[200,385],[232,390],[255,410],[280,432],[320,442],[352,438],[368,405],[385,378],[420,365],[443,340],[440,283],[462,283],[490,320],[497,405],[540,415],[600,412],[660,398],[720,355],[790,305],[850,292],[950,287]]);
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  ECHO.anat['ganglion-stellaire'] = [{
    fig: 'img/ganglion-stellaire/echo-1.jpg',
    valide: true,
    vb: [1000, 447], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : carotide commune à droite de l\'image, donc médial à droite ; image en miroir du schéma apparié (déjà dit dans la légende).',
      'Certain — long du cou, racine C6, tubercules antérieur et postérieur de C6, fascia prévertébral, aiguille et nappe d\'anesthésique : contours repris du corrigé en pointillé incrusté par les auteurs.',
      'Probable — surface du corps vertébral de C6 : bande hyperéchogène sous le long du cou, prolongée en dedans sous la carotide.',
      'Supposition — plans superficiels : contraste écrasé (noir sur noir) au-dessus du fascia ; le sterno-cléido-mastoïdien est dessiné comme une couche unique, la veine jugulaire interne (collabée par la sonde ?) n\'est pas individualisable et n\'est pas dessinée.',
      'Probable — scalène antérieur en avant de la racine C6 (inséré sur le tubercule antérieur) et scalène moyen en dehors, sur le tubercule postérieur : disposition reprise de la coupe de référence fournie par Mat (RAAPM, bloc en C6) ; sur cette image les deux masses ne sont pas séparées par un signal propre.',
      'Validé par Mat (3 octobre), avec deux corrections appliquées : l\'injectat est figuré pour l\'essentiel au niveau de la chaîne sympathique, dans le fascia prévertébral sur la face antérieure du long du cou (NYSORA : « into prevertebral fascia between the carotid artery and the tip of C6 anterior tubercle »), le dépôt latéral n\'étant que le point d\'entrée ; le scalène antérieur descend jusqu\'à la racine C6.',
      'Extrapolé — profondeur des corticales (cône d\'ombre). La chaîne sympathique cervicale elle-même n\'est pas visible : dessinée dans la nappe sous-fasciale, en avant du long du cou — étiquetée sur la coupe anatomique seulement.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[950,0]], bas: [[0,18],[950,18]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,18],[950,18]], bas: [[0,62],[950,62]] },
      { id: 'scm', tissu: 'muscle', haut: [[0,62],[950,62]], bas: TOIT, extrapole: true },
      /* scalène antérieur : en avant de la racine, inséré sur le tubercule antérieur ; scalène moyen : en dehors et en arrière, sur le tubercule postérieur —
         disposition calquée sur la coupe de référence fournie par Mat (RAAPM, bloc stellaire en C6), pas sur un signal propre de cette image */
      { id: 'scal-ant', tissu: 'muscle', contour: T([[232,197],[440,210],[442,282],[440,330],[412,358],[360,350],[310,330],[268,312],[240,262],[228,225]]) },   // descend jusqu'à la racine C6 (remarque de Mat, réf. NYSORA)
      { id: 'scal-moy', tissu: 'muscle', contour: T([[0,178],[228,197],[226,240],[238,300],[236,335],[222,360],[200,385],[175,400],[158,430],[0,450]]) },
      { id: 'lc', tissu: 'muscle', contour: T([[560,225],[640,222],[680,230],[750,275],[800,290],[780,310],[720,350],[650,395],[560,410],[520,400],[515,340],[500,300],[530,280],[555,245]]) },
      { id: 'cca', tissu: 'artere', contour: ovale(812, 240 - 39, 66, 37) },
      { id: 'racine', tissu: 'nerf', contour: ovale(296, 376 - 39, 50, 47) },
      { id: 'al', tissu: 'liquide', contour: T([[432,215],[520,212],[536,236],[520,260],[472,266],[442,254]]) },
      /* diffusion sous-fasciale en dedans, sur la face antérieure du long du cou : c'est là que passe la chaîne sympathique, et c'est elle que la nappe doit envelopper —
         lame fine entre le pointillé vert (fascia) et le pointillé jaune (long du cou) des auteurs */
      { id: 'nappe', tissu: 'liquide', haut: T([[518,211],[600,208],[650,208],[700,218],[745,248]]), bas: T([[520,242],[600,240],[650,238],[700,246],[745,274]]) },   // l'essentiel de l'injectat : dans le fascia prévertébral, sur la face antérieure du long du cou, autour de la chaîne
      { id: 'chaine', tissu: 'nerf', contour: ovale(612, 224 - 39, 13, 6), extrapole: true },
      { id: 'fascia', tissu: 'fascia', ligne: FASCIA, ep: 5 },
      { id: 'aiguille', tissu: 'aiguille', ligne: T([[0,146],[485,251]]), ep: 5 },
      { id: 'c6', tissu: 'os', cortex: CORTEX, vu: [1, 21] },
    ],
    labels: [
      { s: 'scm', x: 330, y: 82, dx: -90, dy: -52, text: 'SCM (supposé)' },
      { s: 'aiguille', x: 120, y: 125, dx: 10, dy: -80, text: 'Aiguille', vue: 'anat' },
      { s: 'nappe', x: 560, y: 186, dx: -30, dy: -140, text: 'Nappe d\'AL (fascia prévertébral)', vue: 'anat' },
      { s: 'chaine', x: 612, y: 186, dx: 40, dy: -86, text: 'Chaîne sympathique', vue: 'anat' },
      { s: 'fascia', x: 700, y: 181, dx: 200, dy: -121, text: 'Fascia prévertébral', vue: 'anat' },
      { s: 'cca', x: 840, y: 182, dx: 60, dy: -72, text: 'Carotide commune', vue: 'anat' },
      { s: 'scal-ant', x: 340, y: 205, dx: -150, dy: -55, text: 'Scalène antérieur' },
      { s: 'scal-moy', x: 110, y: 260, dx: -20, dy: 62, text: 'Scalène moyen' },
      { s: 'c6', x: 195, y: 352, dx: -95, dy: 33, text: 'Tubercule postérieur', vue: 'anat' },
      { s: 'racine', x: 296, y: 345, dx: 0, dy: 82, text: 'Racine C6', vue: 'anat' },
      { s: 'c6', x: 465, y: 300, dx: 100, dy: 127, text: 'Tubercule de Chassaignac (C6)', vue: 'anat' },
      { s: 'lc', x: 650, y: 290, dx: 225, dy: 137, text: 'Long du cou', vue: 'anat' },
      { s: 'c6', x: 900, y: 252, dx: 5, dy: 40, text: 'Corps vertébral de C6' },
    ],
  }];

  /* ---------- echo-2 : niveau C7 (Lam et al., Cureus 2026, fig. 1) — planche composite NON recadrée ; coupe tracée sur le seul sonogramme
     Doppler du panneau A (`crop` propre, 269 × 174 px). Le sonogramme colorisé voisin est la même image annotée par les auteurs :
     identités et positions en viennent (recalage entre les deux panneaux à ≈ ± 25 unités près), les interfaces nettes sont placées sur le Doppler. ---------- */
  const ell = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const SCM_BAS = [[0,112],[50,123],[100,137],[150,148],[200,149],[250,142],[300,141],[350,138],[400,130],[450,119],[500,108],[550,104],[600,100],[650,97],[700,99],[750,95],[800,100],[850,100],[920,108],[1000,120]];
  /* ligne osseuse : arc médial (face antérieure du corps de C7), gouttière où chemine l'artère vertébrale, puis relief latéral qui porte la racine C7 */
  const CORTEX7 = [[-40,620],[0,585],[60,545],[130,520],[200,512],[250,511],[300,520],[350,540],[400,572],[450,595],[500,606],[560,606],[620,598],[670,592],[705,575],[730,548],[760,528]];
  ECHO.anat['ganglion-stellaire'].push({
    fig: 'img/ganglion-stellaire/echo-2.jpg',
    crop: [0.577, 0.149, 0.358, 0.206], panneau: 'A, sonogramme Doppler (coupe transversale en C7)',
    valide: false,
    vb: [1000, 647], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Corrigé le 3 octobre à la demande de Mat (réf. NYSORA, bloc sympathique cervical) : la nappe est confinée en dedans de la pointe de l\'aiguille, dans le fascia prévertébral sur la face antérieure du long du cou, autour du ganglion ; elle ne déborde plus sur le scalène antérieur ni sur le phrénique. À revalider.',
      'Probable — extrémité de l\'aiguille : le fût brillant est suivi depuis le bord latéral jusqu\'à x ≈ 490, au bord latéral du long du cou ; c\'est là que l\'aiguille est arrêtée sur le tracé. La ligne brillante horizontale qui continue vers la carotide (y ≈ 350, avec un renforcement très brillant sous l\'artère) n\'est pas dans l\'axe du fût : elle est lue comme le plan prévertébral à la surface du long du cou, pas comme l\'aiguille. Si c\'était l\'aiguille, sa pointe serait sous la carotide.',
      'Certain — point de sécurité : en C7 l\'artère vertébrale (signal Doppler faible, x ≈ 460–560) est dans la gouttière en avant du processus transverse, entre le long du cou et la racine C7, sans tubercule antérieur pour la couvrir — sigles VA, C7 et C7TP des auteurs, et texte de l\'article (« the C7 nerve root lies between the vertebral artery medially and the posterior tubercle of C7 laterally »). Elle est à l\'aplomb de l\'extrémité de l\'aiguille, plus profonde d\'environ deux diamètres carotidiens : seuls des muscles les séparent.',
      'Certain — orientation (croix « Medial / Lateral » des auteurs : médial à gauche, comme le schéma apparié) ; carotide commune, artère thyroïdienne inférieure dans la thyroïde, sterno-cléido-mastoïdien, long du cou, scalène antérieur, œsophage : aplats du panneau colorisé voisin, reportés sur le Doppler.',
      'Certain — trajet : aiguille dans le plan, de latéral en médial, sous le sterno-cléido-mastoïdien et la gaine carotidienne, à la face superficielle du scalène antérieur, jusqu\'au plan prévertébral sur le long du cou (légende d\'origine : aiguille dans le fascia prévertébral, superficielle au long du cou, biseau vers le bas). Concordant avec le schéma apparié. Il s\'agit d\'une hydrodissection au glucosé 5 %, pas d\'un bloc anesthésique (déjà dit dans la légende).',
      'Probable — fascia prévertébral (ligne violette des auteurs : il coiffe la nappe, qui le décolle du long du cou), veine jugulaire interne collabée, nerf vague (deux repères jaunes des auteurs), nerf phrénique sur le scalène antérieur, ganglion cervico-thoracique et nappe d\'injectat : positions prises sur le corrigé des auteurs ; à 269 px aucun n\'a de contour propre sur le panneau Doppler (nerfs et fascia en pointillé). Le nerf phrénique est au contact du trajet de l\'aiguille.',
      'Supposition — deux signaux Doppler que les auteurs ne désignent pas : une traînée verticale sous la carotide (x ≈ 185–250), qui recouvre le bord médial du long du cou (débordement de couleur, ou artère thyroïdienne inférieure croisant en arrière de la carotide ?), et un point au contact de l\'extrémité de l\'aiguille (x ≈ 505 : jet d\'injectat, ou artère cervicale ascendante sur le scalène ?). Dessinés en plan non attribué.',
      'Supposition — arc osseux médial lu comme la face antérieure du corps de C7 (non désigné) ; plans situés autour de l\'artère vertébrale, en dehors de la racine et sous le scalène antérieur non attribués.',
      'Extrapolé — os sous la corticale (cône d\'ombre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,30],[1000,30]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,30],[1000,30]], bas: [[0,52],[1000,52]] },
      { id: 'scm', tissu: 'muscle', haut: [[0,52],[1000,52]], bas: SCM_BAS },
      { id: 'cellulaire', tissu: 'conjonctif', haut: SCM_BAS, bas: [[0,700],[1000,700]] },
      { id: 'thyroide', tissu: 'glande', contour: [[0,185],[60,180],[125,195],[158,225],[160,270],[125,300],[60,312],[0,305]] },
      { id: 'oesophage', tissu: 'muscle', contour: [[0,360],[60,350],[120,372],[150,420],[140,470],[100,495],[0,500]] },
      { id: 'ita', tissu: 'artere', contour: ell(105, 228, 28, 22) },
      { id: 'carotide', tissu: 'artere', contour: ell(220, 258, 54, 54) },
      { id: 'vji', tissu: 'veine', contour: [[440,151],[520,142],[620,141],[720,148],[735,156],[720,163],[620,160],[520,161],[450,163]] },
      { id: 'vague', tissu: 'nerf', contour: ell(420, 172, 17, 10), extrapole: true },
      { id: 'vague2', tissu: 'nerf', contour: ell(338, 166, 15, 9), extrapole: true },
      { id: 'scalene', tissu: 'muscle', contour: [[535,395],[575,345],[620,300],[700,278],[780,256],[850,238],[885,250],[890,315],[855,372],[780,412],[700,432],[620,434],[560,420]] },
      { id: 'lco', tissu: 'muscle', contour: [[132,512],[140,440],[165,395],[210,368],[300,355],[400,356],[438,385],[444,440],[432,500],[412,566],[350,540],[300,520],[250,511],[200,512]] },
      { id: 'prof-lat', tissu: 'indetermine', contour: [[444,440],[535,395],[560,420],[620,434],[700,432],[780,412],[855,372],[890,315],[1000,290],[1000,700],[760,700],[760,528],[730,548],[705,575],[670,592],[620,598],[560,606],[500,606],[450,595],[412,566],[432,500]] },
      { id: 'injectat', tissu: 'liquide', contour: [[300,342],[380,304],[470,270],[518,268],[528,322],[508,378],[462,398],[436,364],[380,352],[300,354]] },   // nappe confinée en dedans de la pointe, dans le fascia prévertébral sur le long du cou — pas sur le scalène antérieur ni le phrénique (réf. NYSORA, correction demandée par Mat)
      /* fascia prévertébral : non individualisable sur le Doppler, repris de la ligne violette du corrigé (au-dessus de la nappe, puis en dehors au-dessus de l'aiguille) */
      { id: 'pvf', tissu: 'fascia', ligne: [[150,400],[200,358],[300,340],[380,302],[470,268],[560,262],[700,222],[880,200]], ep: 5, extrapole: true },
      { id: 'doppler-carotide', tissu: 'indetermine', contour: [[186,335],[250,338],[254,400],[246,455],[226,482],[202,470],[188,420]] },
      { id: 'doppler-pointe', tissu: 'indetermine', contour: ell(515, 272, 14, 26) },
      { id: 'vertebrale', tissu: 'artere', contour: ell(512, 556, 50, 27) },
      { id: 'c7', tissu: 'nerf', contour: ell(668, 528, 34, 22) },
      { id: 'ctg', tissu: 'nerf', contour: ell(345, 326, 26, 12), extrapole: true },
      { id: 'phrenique', tissu: 'nerf', contour: ell(545, 290, 18, 10), extrapole: true },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,187],[490,322]], ep: 6 },
      { id: 'os', tissu: 'os', cortex: CORTEX7, vu: [2, 16] },
    ],
    labels: [
      { s: 'ita', x: 105, y: 222, dx: 50, dy: -200, text: 'A. thyroïdienne inf.' },
      { s: 'vji', x: 600, y: 150, dx: 10, dy: -128, text: 'V. jugulaire interne' },
      { s: 'aiguille', x: 930, y: 205, dx: 10, dy: -183, text: 'Aiguille' },
      { s: 'scm', x: 130, y: 112, dx: -70, dy: -17, text: 'SCM' },
      { s: 'carotide', x: 228, y: 215, dx: 72, dy: -143, text: 'Carotide commune' },
      { s: 'vague', x: 420, y: 170, dx: 100, dy: -98, text: 'N. vague' },
      { s: 'phrenique', x: 548, y: 288, dx: 242, dy: -216, text: 'N. phrénique' },
      { s: 'thyroide', x: 45, y: 275, dx: 35, dy: 60, text: 'Thyroïde' },
      { s: 'oesophage', x: 60, y: 430, dx: 20, dy: 50, text: 'Œsophage' },
      { s: 'doppler-carotide', x: 218, y: 455, dx: -83, dy: 105, text: 'Signal non attribué' },
      { s: 'ctg', x: 345, y: 330, dx: 40, dy: 95, text: 'Chaîne sympathique' },
      { s: 'lco', x: 300, y: 490, dx: 0, dy: 138, text: 'Long du cou' },
      { s: 'injectat', x: 505, y: 375, dx: 95, dy: 95, text: 'Injectat' },
      { s: 'pvf', x: 765, y: 212, dx: 85, dy: 118, text: 'Fascia prévertébral' },
      { s: 'scalene', x: 720, y: 370, dx: 100, dy: 85, text: 'Scalène antérieur' },
      { s: 'vertebrale', x: 512, y: 556, dx: 38, dy: 72, text: 'A. vertébrale exposée' },
      { s: 'c7', x: 690, y: 528, dx: 160, dy: 12, text: 'Racine C7' },
      { s: 'os', x: 705, y: 578, dx: 147, dy: 50, text: 'Proc. transverse C7' },
    ],
  });
})();
