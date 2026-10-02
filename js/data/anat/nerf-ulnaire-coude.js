/* Coupes anatomiques recalées — nerf ulnaire au coude (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-3 : Wu, Chang, Özçakar, Diagnostics 2026, fig. 1C (395 px, annotée). Points relevés sur la grille de l'ancien recadrage
   (qui mordait sur les liserés blancs du bas et de la droite), ramenés au repère du recadrage resserré par T().
   echo-2 (Hooper et al., Cureus 2025, fig. 3, panneau droit) : NON tracée — photographie d'écran de 233 px, saturée, aplat bleu
   opaque sur l'injectat ; ni la corticale de l'épicondyle ni celle de l'olécrâne ne sont lisibles : soumise à Mat. */
(function () {
  const T = pts => pts.map(p => [Math.round(p[0] * 1.026), Math.round(p[1] * 1.026 - 8)]);
  const FS = T([[0,101],[200,106],[400,106],[600,104],[800,112],[975,108]]);
  /* humérus : longue pente gauche, fond de vallée (x ≈ 416), puis relief en toit sous le sigle H — pics de brillance par colonne */
  const HUM = T([[0,262],[50,274],[100,289],[150,312],[200,330],[250,342],[300,356],[350,370],[400,390],[416,394],[450,380],[480,330],[510,282],[540,254],[590,244],[614,237],[640,248],[680,285],[720,330],[752,365]]);
  const ULNA = T([[758,365],[765,320],[795,294],[850,290],[875,262],[900,225],[930,203],[960,190],[975,182]]);
  /* lame anéchogène en arche qui coiffe le relief H */
  const ARCHE_HAUT = T([[440,262],[500,226],[550,200],[590,185],[615,182],[660,188],[705,196],[730,215],[748,262],[790,318]]);
  const ARCHE_BAS = T([[462,300],[500,268],[550,243],[590,214],[615,203],[650,212],[685,250],[720,292],[755,335]]);
  ECHO.anat['nerf-ulnaire-coude'] = [{
    fig: 'img/nerf-ulnaire-coude/echo-3.jpg',
    valide: false,
    vb: [1000, 608], orient: { left: 'Humérus (ant.)', right: 'Olécrâne (post.)' },
    lecture: [
      'Supposition — toit et plancher du tunnel : les auteurs posent les sigles OS (ligament d\'Osborne) et UCLp (faisceau postérieur du ligament collatéral ulnaire) sans en tracer les limites, et l\'image (395 px) ne les résout pas. Dessinés là où un signal porte le sigle : le plancher comme le tissu échogène homogène qui comble la vallée osseuse, le toit comme la bande hyperéchogène qui part du bord du nerf et rejoint l\'ulna en passant au-dessus du relief H. Son passage au-dessus du nerf n\'est pas visible : le nerf n\'apparaît pas « sous un toit » sur cette coupe.',
      'Supposition — le nerf n\'est pas entre les deux reliefs osseux comme sur le schéma apparié : il est à gauche, au-dessus de la longue pente osseuse, et la vallée, le relief H et l\'interligne le séparent de l\'ulna. Les auteurs écrivent seulement « H : humerus » : rien ne dit si la pente gauche est la face postérieure de l\'épicondyle médial et le relief H la berge médiale de la trochlée (lecture la plus cohérente, coupe un peu distale), ou l\'inverse. La légende de la fiche affirme « H = épicondyle médial » : ce n\'est pas dans la source.',
      'Certain — nerf ulnaire (UN), humérus (H), ulna (U), branche postérieure du nerf cutané médial de l\'avant-bras (tête de flèche, dans la graisse sous-cutanée, hors du tunnel) : sigles et légende des auteurs.',
      'Probable — orientation : humérus à gauche, ulna à droite, donc antérieur à gauche et postérieur à droite ; concordant avec le schéma apparié. Les mentions « Anterolateral / Posteromedial » incrustées sont celles du panneau B (mi-bras) : leur composante médio-latérale ne s\'applique pas à l\'axe épicondyle médial → olécrâne (l\'olécrâne est latéral à l\'épicondyle médial) ; seul le repère osseux est retenu.',
      'Probable — contour du nerf : plage hypoéchogène bilobée (x ≈ 100–255, y ≈ 150–240 avant recadrage), en partie masquée par le sigle UN ; fascicules non résolus.',
      'Supposition — lame anéchogène en arche (≈ 1,5 mm) qui coiffe le relief H et plonge dans l\'interligne : cartilage articulaire de la trochlée, récessus articulaire ou fibres ligamentaires en anisotropie — non tranché, dessinée en plan non identifié. Un liseré noir plus fin double aussi la pente gauche (non dessiné).',
      'Supposition — bande hypoéchogène en haut à gauche, au-dessus du nerf (veine ? chef musculaire ?) : non identifiée. Corticale de l\'ulna : son segment horizontal (x ≈ 770–850) pourrait être un tissu échogène de l\'interligne et non de l\'os.',
      'Extrapolé — profondeur de l\'humérus et de l\'ulna (cône d\'ombre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,42],[1000,42]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,42],[1000,42]], bas: FS },
      { id: 'profond', tissu: 'conjonctif', haut: FS, bas: HUM.concat(ULNA) },
      { id: 'bande', tissu: 'indetermine', contour: T([[0,112],[60,112],[110,122],[135,140],[120,150],[60,140],[0,135]]) },
      { id: 'lcu', tissu: 'ligament', contour: T([[40,260],[150,253],[200,255],[300,244],[350,234],[400,236],[440,262],[462,300],[474,335],[450,378],[416,392],[350,368],[250,340],[150,310],[60,275]]) },
      { id: 'arche', tissu: 'indetermine', haut: ARCHE_HAUT, bas: ARCHE_BAS },
      { id: 'osborne', tissu: 'ligament', ligne: T([[262,192],[330,197],[400,190],[500,180],[600,168],[700,180],[780,186],[850,168],[950,152],[975,150]]), ep: 14 },
      { id: 'nerf', tissu: 'nerf', contour: T([[98,210],[108,185],[135,165],[180,152],[215,150],[245,160],[255,180],[245,198],[222,215],[215,232],[195,241],[160,241],[125,232],[105,222]]) },
      { id: 'nabcm', tissu: 'nerf', contour: T([[850,97],[856,91],[866,90],[876,94],[878,100],[870,105],[858,104]]) },
      { id: 'humerus', tissu: 'os', cortex: HUM },
      { id: 'ulna', tissu: 'os', cortex: ULNA },
    ],
    labels: [
      { s: 'nerf', x: 180, y: 195, dx: -30, dy: -155, text: 'Nerf ulnaire', vue: 'anat' },
      { s: 'osborne', x: 560, y: 166, dx: -140, dy: -126, text: 'Rétinaculum d\'Osborne', vue: 'anat' },
      { s: 'nabcm', x: 885, y: 92, dx: -95, dy: -52, text: 'N. cutané médial (br. post.)', vue: 'anat' },
      { s: 'lcu', x: 330, y: 300, dx: -130, dy: 140, text: 'Faisceau post. du LCU', vue: 'anat' },
      { s: 'humerus', x: 505, y: 300, dx: -35, dy: 140, text: 'Humérus', vue: 'anat' },
      { s: 'ulna', x: 950, y: 205, dx: -60, dy: 235, text: 'Ulna (olécrâne)', vue: 'anat' },
      { s: 'arche', x: 754, y: 250, dx: -114, dy: 250, text: 'Lame anéchogène (cartilage ?)' },
    ],
  }];
})();
