/* Coupes anatomiques recalées — nerf fibulaire commun (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : col de la fibula (Alyanak et al., J Ultrason 2026, fig. 5) ; echo-2 : entrée du tunnel fibulaire (fig. 6).
   Les deux images portent les sigles des auteurs (★, FN / F, LGC, SL, SF, PL, ED, TA) : ils donnent l'identité des structures
   et, par déduction, l'orientation (la source ne l'écrit pas). Étiquettes françaises des structures désignées : `vue: 'anat'`. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };

  /* ---------- echo-1 : col de la fibula ---------- */
  const PEAU1 = [[0,30],[500,30],[1000,28]];
  /* fascia crural : complexe plurilamellaire épais sur le gastrocnémien (face superficielle, face profonde) */
  const FC_HAUT = [[0,150],[50,148],[100,157],[150,165],[200,177],[250,181],[300,177],[350,168],[400,178],[440,183],[470,166]];
  const FC_BAS = [[0,236],[100,236],[200,238],[300,242],[350,234],[400,228],[440,228],[470,222]];
  /* loge du nerf : lentille hyperéchogène sous-fasciale, prolongée en avant sur le col */
  const LOGE_HAUT = [[470,166],[500,146],[550,138],[600,135],[650,137],[700,131],[750,113],[800,86],[850,86],[900,88],[950,98],[1000,100]];
  const LOGE_BAS = [[470,222],[500,243],[540,250],[580,245],[620,232],[660,218],[700,205],[740,194],[775,200],[800,196]];
  /* corticale : versant postérieur oblique (limite du cône d'ombre) puis sommet ; sous y ≈ 540 elle devient parallèle au faisceau */
  const CORTEX1 = [[445,860],[445,600],[440,540],[455,490],[490,440],[530,400],[570,362],[610,330],[650,298],[690,268],[725,245],[760,218],[800,196],[850,183],[900,181],[950,195],[985,222],[1010,250]];

  /* ---------- echo-2 : entrée du tunnel fibulaire ---------- */
  const FA_HAUT = [[0,118],[60,100],[150,80],[250,75],[350,70],[450,70],[520,70],[560,78],[600,92],[650,100],[700,104],[800,112],[900,113],[1000,108]];
  const FA_BAS = [[0,150],[60,138],[150,128],[200,120],[240,114],[300,117],[400,114],[450,108],[500,116],[550,112],[600,122],[650,130],[700,134],[750,139],[800,148],[850,140],[900,132],[1000,142]];
  /* lame hyperéchogène au toit du nerf */
  const LAME = [[240,243],[280,236],[330,235],[375,241],[430,251],[480,248],[540,242],[600,241]];
  /* cloison arquée long fibulaire / extenseur, puis cloison extenseur / tibial antérieur */
  const CLOISON_D = [[640,432],[700,420],[750,414],[800,404],[850,392],[900,370],[950,345],[1000,322]];
  const CLOISON_E = [[625,512],[700,504],[750,497],[800,493],[850,493],[900,505],[950,526],[1000,535]];
  const CORTEX2 = [[292,1150],[292,480],[293,360],[300,318],[320,306],[350,304],[400,308],[450,311],[490,322],[520,355],[545,410],[558,480],[590,560],[620,640],[620,1150]];

  ECHO.anat['nerf-fibulaire-commun'] = [{
    fig: 'img/nerf-fibulaire-commun/echo-1.jpg',
    valide: true,
    vb: [1000, 820], orient: { left: 'Postérieur', right: 'Antérieur' },
    lecture: [
      'Probable — étendue du nerf : l\'étoile des auteurs est posée dans un ovale moucheté (x ≈ 480–635, y ≈ 180–243) cerné en profondeur par un liseré brillant ; c\'est lui qui est tracé. La lentille hyperéchogène homogène qui le coiffe et le prolonge vers le col (x ≈ 470–770) est lue comme le coussin fibro-graisseux de la loge, pas comme du nerf — si toute la lentille était le nerf, sa surface serait à peu près triplée.',
      'Certain — identité : ★ nerf fibulaire commun, FN col de la fibula, LGC et SL chef latéral du gastrocnémien et soléaire, SF graisse sous-cutanée (sigles des auteurs). L\'orientation n\'est écrite ni dans la légende ni dans le texte d\'origine : postérieur à gauche est déduit des sigles (loge postérieure à gauche de l\'os). Image en miroir du schéma apparié (déjà dit dans la légende).',
      'Certain — sur cette coupe aucun muscle ne s\'interpose entre le fascia et le nerf : le long fibulaire et son arcade, dessinés au-dessus du nerf sur le schéma apparié, n\'apparaissent que sur la coupe suivante (entrée du tunnel). Ici le toit est le fascia seul, et le nerf est séparé du versant postérieur de l\'os par un coin musculaire hypoéchogène fin.',
      'Probable — corticale : arc brillant du sommet (x ≈ 770–990), prolongé par le versant postérieur oblique, tracé à la limite du cône d\'ombre ; la bande brillante épaisse qui double ce versant en superficie (périoste et insertion aponévrotique vus en oblique ?) n\'est pas dessinée à part. Sous y ≈ 540 la corticale est parallèle au faisceau et n\'est plus vue (pointillé le long du bord de l\'ombre).',
      'Probable — fascia crural : bande épaisse à plusieurs lames posée sur le gastrocnémien (y ≈ 150–236), qui se dédouble autour de la loge du nerf et se confond en avant avec le plan fibreux qui couvre le col. La ligne fine plus superficielle (y ≈ 85–127, x ≈ 430–800) est lue comme un septum du tissu sous-cutané.',
      'Supposition — limite entre gastrocnémien latéral et soléaire non résolue : une seule couche musculaire est dessinée, les deux noms sont posés là où les auteurs ont mis leurs sigles. Le coin hypoéchogène entre le nerf et l\'os est rattaché à cette couche (fibres du soléaire probables).',
      'Extrapolé — os sous la corticale (cône d\'ombre) et face profonde du col.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU1 },
      { id: 'sc', tissu: 'graisse', haut: PEAU1, bas: FC_HAUT.concat(LOGE_HAUT.slice(1)) },
      { id: 'septum', tissu: 'fascia', ligne: [[430,127],[470,114],[500,107],[550,106],[600,101],[650,106],[700,98],[750,89],[800,84]], ep: 5 },
      { id: 'fascia', tissu: 'fascia', haut: FC_HAUT, bas: FC_BAS },
      { id: 'loge', tissu: 'conjonctif', haut: LOGE_HAUT, bas: LOGE_BAS.concat(CORTEX1.slice(13)) },
      /* dédoublement du fascia autour de la loge : feuillet superficiel (toit) et feuillet profond */
      { id: 'fascia-toit', tissu: 'fascia', ligne: LOGE_HAUT.slice(0, 8), ep: 9 },
      { id: 'fascia-prof', tissu: 'fascia', ligne: LOGE_BAS.slice(0, 9), ep: 6 },
      { id: 'nerf', tissu: 'nerf', contour: [[480,214],[492,194],[520,183],[560,180],[600,184],[628,196],[636,210],[620,226],[590,238],[550,243],[510,241],[488,231]] },
      { id: 'mollet', tissu: 'muscle', haut: FC_BAS.concat(LOGE_BAS.slice(1)), bas: [[0,860]].concat(CORTEX1.slice(0, 13)), guide: [[0,640],[400,600],[700,420],[1000,330]] },
      { id: 'fibula', tissu: 'os', cortex: CORTEX1, vu: [2, 16] },
    ],
    labels: [
      { s: 'sc', x: 130, y: 125, dx: 70, dy: -63, text: 'Graisse sous-cutanée', vue: 'anat' },
      { s: 'nerf', x: 555, y: 208, dx: 45, dy: -156, text: 'Nerf fibulaire commun', vue: 'anat' },
      { s: 'fascia', x: 330, y: 210, dx: 0, dy: 100, text: 'Fascia crural' },
      { s: 'mollet', x: 100, y: 300, dx: 70, dy: 120, text: 'Gastrocnémien latéral', vue: 'anat' },
      { s: 'mollet', x: 215, y: 610, dx: 0, dy: 80, text: 'Soléaire', vue: 'anat' },
      { s: 'loge', x: 690, y: 170, dx: -10, dy: 330, text: 'Coussin fibro-graisseux' },
      { s: 'fibula', x: 890, y: 185, dx: -10, dy: 195, text: 'Col de la fibula', vue: 'anat' },
      { s: 'fibula', x: 760, y: 640, dx: 0, dy: 60, text: 'Ombre acoustique', vue: 'echo' },
    ],
  }];
})();
