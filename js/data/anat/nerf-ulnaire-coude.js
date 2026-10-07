/* Coupes anatomiques recalées — nerf ulnaire au coude (format : .claude/skills/echo-anatomie/SKILL.md).
   Les deux images ont été remplacées le 7 octobre 2026 sur demande de Mat (Wu 2026 fig. 1C : toit et plancher non résolus ;
   Hooper 2025 fig. 3 : 233 px, aplat bleu).
   echo-4 : Cho et al., Ultrasonography 2024, fig. 3 panneau A (CC BY-NC 4.0), 373 × 249 px : coupe transversale saine, ME, O,
   rétinaculum (têtes de flèche), faisceau postérieur du LCU (flèches), nerf (*) désignés par les auteurs.
   echo-5 : Bejarano & Clearfield, Cureus 2023, fig. 3 (CC BY 3.0), panneau 1 (image brute) recadré sans les colonnes d'échelle :
   321 × 254 px, image sombre ; le panneau 2 (corrigé des auteurs : A nerf, B injectat, C aiguille, « Medial epicondyle ») sert de
   source de certitude. */
(function () {
  /* ---------- echo-4 : coupe de repérage (Cho 2024, fig. 3A) ---------- */
  const FS = [[0,115],[150,107],[300,100],[450,112],[600,115],[750,115],[900,128],[1000,130]];                      // ligne brillante superficielle continue
  const ME = [[0,250],[50,245],[100,235],[150,230],[200,225],[250,224],[300,222],[330,215],[355,222],[380,240],[398,262],[408,290],[412,330],[414,400],[416,470]];
  const OLE = [[640,330],[680,280],[720,228],[760,210],[800,182],[850,160],[900,152],[950,150],[1000,145]];
  const RET = [[330,215],[370,180],[420,165],[480,163],[540,165],[600,175],[660,195],[700,212],[720,228]];            // rétinaculum : têtes de flèche à x ≈ 347, 490, 597 (y ≈ 121–142), ligne brillante juste dessous
  const LCU_H = [[405,285],[450,310],[500,333],[550,357],[595,378]], LCU_B = [[405,320],[452,350],[514,389],[560,412],[595,425]];   // flèches des auteurs : pointes à (452 ; 350) et (514 ; 389)
  ECHO.anat['nerf-ulnaire-coude'] = [{
    fig: 'img/nerf-ulnaire-coude/echo-4.jpg',
    valide: false,
    vb: [1000, 668], orient: { left: 'Épicondyle médial', right: 'Olécrâne' },
    lecture: [
      'Certain — ME = épicondyle médial (dôme à cône d\'ombre, x < 415), O = olécrâne (dôme à droite, x > 720), * = nerf ulnaire, têtes de flèche = rétinaculum du tunnel cubital, flèches = faisceau postérieur du ligament collatéral ulnaire : sigles et légende des auteurs ; orientation identique à celle du schéma apparié.',
      'Probable — corticale de l\'épicondyle : ligne brillante presque plate à y ≈ 222–250 de x = 0 à 380, puis paroi latérale raide (x ≈ 400–416) jusqu\'au fond ; celle de l\'olécrâne : ligne à y ≈ 150–230 pour x > 720, versant médial prolongé en pointillé vers le bas (non vu).',
      'Probable — rétinaculum : ligne brillante à y ≈ 160–175 sous les têtes de flèche, tendue du sommet de l\'épicondyle à l\'olécrâne, au-dessus du nerf. Entre le fascia superficiel (y ≈ 105) et la corticale de l\'épicondyle, l\'épaisseur (≈ 120 unités) paraît grande pour la seule peau de l\'épicondyle : tissu sous-cutané profond / fascia, laissé en tissu conjonctif.',
      'Probable — nerf : plage hypoéchogène à points brillants (≈ 100 × 95 unités) accolée à la paroi latérale de l\'épicondyle, centrée sur l\'astérisque ; contour arrondi posé sur la limite visible, fascicules non tracés individuellement.',
      'Probable — faisceau postérieur du LCU : bande brillante oblique qui part de la paroi de l\'épicondyle (x ≈ 405, y ≈ 285) et descend vers la droite sous le nerf, bord profond sur les pointes des flèches ; son extrémité distale se perd dans le noir vers x ≈ 600.',
      'Supposition — contenu du tunnel entre rétinaculum, nerf, LCU et olécrâne : graisse ; le versant médial de l\'olécrâne qui ferme le tunnel en bas à droite n\'a pas de corticale lisible (dessiné en pointillé).',
      'Extrapolé — profondeur des deux os (cônes d\'ombre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,28],[1000,28]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,28],[1000,28]], bas: FS },
      { id: 'profond', tissu: 'conjonctif', haut: FS, bas: [[0,668],[1000,668]] },
      { id: 'tunnel', tissu: 'graisse', contour: RET.concat([[700,250],[660,300],[620,345],[595,378],[550,357],[500,333],[450,310],[405,285],[400,262],[380,240],[355,222]]) },
      { id: 'retinaculum', tissu: 'ligament', ligne: RET, ep: 9 },
      { id: 'lcu', tissu: 'ligament', haut: LCU_H, bas: LCU_B },
      { id: 'nerf', tissu: 'nerf', contour: [[445,215],[468,204],[498,203],[524,212],[536,238],[530,268],[508,292],[478,298],[452,288],[438,262],[437,236]] },
      { id: 'epicondyle', tissu: 'os', cortex: ME },
      { id: 'olecrane', tissu: 'os', cortex: OLE, vu: [2, 8] },
    ],
    labels: [
      { s: 'nerf', x: 487, y: 250, dx: -227, dy: -170, text: 'Nerf ulnaire', vue: 'anat' },
      { s: 'retinaculum', x: 480, y: 164, dx: 100, dy: -114, text: 'Rétinaculum du tunnel cubital', vue: 'anat' },
      { s: 'lcu', x: 500, y: 355, dx: 160, dy: 110, text: 'Faisceau post. du LCU', vue: 'anat' },
      { s: 'epicondyle', x: 250, y: 240, dx: -80, dy: 200, text: 'Épicondyle médial', vue: 'anat' },
      { s: 'olecrane', x: 880, y: 165, dx: -30, dy: 190, text: 'Olécrâne', vue: 'anat' },
      { s: 'tunnel', x: 640, y: 240, dx: 210, dy: 340, text: 'Tunnel cubital (graisse)', vue: 'anat' },
      { s: 'sc', x: 700, y: 70, dx: 200, dy: -30, text: 'Sous-cutané', vue: 'anat' },
      { s: 'epicondyle', x: 200, y: 450, dx: 60, dy: 120, text: 'Cône d\'ombre', vue: 'echo' },
    ],
  }, {
    /* ---------- echo-5 : injection périneurale (Bejarano 2023, fig. 3), panneau 1 sans les colonnes d'échelle ---------- */
    fig: 'img/nerf-ulnaire-coude/echo-5.jpg',
    crop: [0.032, 0, 0.428, 1], panneau: '1 (image brute ; le 2 est le corrigé des auteurs)',
    valide: false,
    vb: [1000, 791], orient: { left: 'Épicondyle médial', right: 'Postérieur (olécrâne hors champ)' },
    lecture: [
      'Certain — nerf ulnaire (A, cerclé de jaune sur le panneau 2), injectat périneural (B, vert, de part et d\'autre du nerf), aiguille (C, bleu, ligne horizontale venant du bord droit, sous le nerf) et « Medial epicondyle » sur le dôme à cône d\'ombre : corrigé des auteurs. Coude droit, tunnel cubital (texte des auteurs).',
      'Probable — orientation : l\'épicondyle médial occupe la moitié gauche et le nerf est accolé à son versant droit ; dans le tunnel le nerf est postérieur à l\'épicondyle, donc le côté droit de l\'image est postérieur (olécrâne hors champ, aiguille venant du côté olécrânien comme dans la fiche). Les auteurs n\'inscrivent pas l\'axe : à confirmer. Le schéma apparié montre l\'olécrâne à droite : même sens, mais champ plus étroit ici.',
      'Probable — corticale de l\'épicondyle : dôme dont le sommet est à y ≈ 120 (x ≈ 340–370), versant gauche brillant jusqu\'à (170 ; 256) puis bande oblique vers (85 ; 370), versant droit jusqu\'à (640 ; 320) où pointe la flèche rouge des auteurs ; l\'image est sombre, la ligne n\'est pas captée par les pics de brillance et suit la limite du cône d\'ombre.',
      'Probable — nerf : ovale en nid d\'abeille (≈ 3,5 mm pour 1 cm ≈ 350 unités d\'après les repères « 1 » et « 2 » du panneau) centré en (730 ; 178) ; les taches Doppler bleues à son bord profond sont le flux de l\'injectat.',
      'Probable — aiguille : ligne brillante horizontale à y ≈ 290 de x ≈ 700 au bord droit, réverbérations en dessous ; pointe à l\'aplomb du bord profond du nerf. Injectat : halo anéchogène de ≈ 1 mm de part et d\'autre du nerf (crescents B des auteurs).',
      'Supposition — tissus à droite du nerf (x > 830) et sous l\'aiguille : non identifiables (chef huméral du fléchisseur ulnaire du carpe ? graisse ?), laissés en tissu conjonctif ; plancher du tunnel (LCU, olécrâne) hors champ ou non résolu.',
      'Extrapolé — profondeur de l\'épicondyle (cône d\'ombre), peau au-dessus de la ligne brillante superficielle.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,62],[1000,62]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,62],[1000,62]], bas: [[0,100],[85,100],[170,100],[260,105],[341,110],[400,112],[450,118],[500,128],[550,140],[600,118],[650,100],[700,92],[760,90],[830,92],[900,95],[1000,95]] },
      { id: 'profond', tissu: 'conjonctif', haut: [[0,100],[85,100],[170,100],[260,105],[341,110],[400,112],[450,118],[500,128],[550,140],[600,118],[650,100],[700,92],[760,90],[830,92],[900,95],[1000,95]], bas: [[0,791],[1000,791]] },
      { id: 'injectat-g', tissu: 'liquide', contour: [[655,112],[668,102],[673,130],[669,180],[671,230],[677,262],[662,262],[648,230],[640,180],[642,140]] },
      { id: 'injectat-d', tissu: 'liquide', contour: [[790,107],[806,102],[822,130],[828,180],[822,230],[808,258],[792,255],[798,220],[800,170],[795,130]] },
      { id: 'nerf', tissu: 'nerf', contour: [[700,120],[730,115],[762,124],[783,150],[788,180],[780,215],[760,240],[730,246],[700,238],[680,212],[673,180],[678,145]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[700,290],[1000,292]], ep: 5 },
      { id: 'epicondyle', tissu: 'os', cortex: [[60,420],[85,370],[120,320],[150,285],[170,256],[199,216],[227,185],[256,159],[284,142],[312,130],[341,122],[370,118],[400,121],[450,131],[500,145],[550,162],[585,200],[612,245],[632,290],[642,330],[648,380]] },
    ],
    labels: [
      { s: 'nerf', x: 730, y: 178, dx: 130, dy: -120, text: 'Nerf ulnaire', vue: 'anat' },
      { s: 'injectat-g', x: 658, y: 190, dx: -190, dy: -130, text: 'Injectat périneural', vue: 'anat' },
      { s: 'aiguille', x: 900, y: 291, dx: -40, dy: 110, text: 'Aiguille (du côté postérieur)' },
      { s: 'epicondyle', x: 360, y: 128, dx: -140, dy: 120, text: 'Épicondyle médial', vue: 'anat' },
      { s: 'epicondyle', x: 350, y: 520, dx: 60, dy: 130, text: 'Cône d\'ombre', vue: 'echo' },
      { s: 'aiguille', x: 880, y: 360, dx: -60, dy: 170, text: 'Réverbération de l\'aiguille', vue: 'echo' },
      { s: 'sc', x: 300, y: 85, dx: -120, dy: -40, text: 'Peau et sous-cutané', vue: 'anat' },
    ],
  }];
})();
