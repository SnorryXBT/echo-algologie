/* Coupes anatomiques recalées — épicondylalgie latérale (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Terzi et al., Clin Shoulder Elb 2026, fig. 1 (coupe coronale, sigles Lateral Epicondyle / Radial Head, têtes de flèche sur le tendon ;
            échelle de l'appareil : 1,7 cm de profondeur, soit ≈ 34 unités par millimètre après recadrage).
   echo-1 : Raeissadat et al., Future Sci OA 2026, fig. 2 (même coupe, sigles LE / CET / RCL / J / R, aiguille 23 G dans le plan, de distal en proximal —
            texte de l'article ; photographie d'écran, 1 cm ≈ 252 unités). */
(function () {
  /* ---------- echo-2 (Terzi) ---------- */
  /* surface du tendon : bord supérieur de la bande saturée désignée par les têtes de flèche, puis fascia qui plonge en aval de la tête radiale (pics 87–97, 102, 117, 131) */
  const FASC2 = [[35,98],[60,84],[100,72],[150,71],[180,72],[200,66],[250,60],[300,56],[400,54],[500,53],[600,58],[650,60],[700,68],[750,76],[800,84],[850,97],[900,112],[950,126],[1000,138]];
  /* humérus : épicondyle (pics 71–86, 73, 77, 97, 115), pente peu visible, puis plaque du capitulum (191, 206, 210, 202–208) */
  const HUM2 = [[35,100],[60,86],[100,74],[150,73],[200,76],[250,95],[300,114],[330,135],[350,160],[375,180],[400,190],[450,205],[500,210],[545,202],[580,214],[610,250],[620,540],[35,540]];
  /* tête radiale : arc (pics 215, 199–206, 202–217, 222) */
  const RAD2 = [[650,540],[652,262],[665,222],[700,206],[750,196],[800,203],[850,220],[872,236],[885,270],[890,540]];
  const RCL2_HAUT = [[310,120],[350,138],[400,148],[450,158],[500,163],[550,163],[600,165],[650,168],[700,165],[750,160],[790,186]];
  const RCL2_BAS = [[310,120],[330,135],[350,160],[375,178],[400,177],[450,192],[500,197],[545,189],[610,200],[640,205],[665,208],[700,192],[750,181],[790,186]];

  /* ---------- echo-1 (Raeissadat) ---------- */
  const FASC1 = [[0,104],[100,104],[225,108],[300,106],[400,100],[480,97],[540,96],[600,95],[1000,95]];
  /* épicondyle : pics 177–185, 185–194, 192–206, 194–223, 233, 242–257, 254–261, 257, 266–278, 290 */
  const LE1 = [[-40,172],[0,175],[50,180],[100,190],[150,200],[200,215],[250,233],[300,248],[350,258],[400,260],[450,272],[500,290],[515,300],[525,330],[530,620],[-40,620]];
  /* radius : tête (pics 292–314), puis ligne discontinue qui plonge (col), plage brillante distale (465–482) */
  const R1 = [[545,620],[548,330],[560,300],[600,293],[650,296],[672,312],[700,348],[730,372],[770,398],[820,438],[870,462],[950,470],[1040,480],[1040,620]];

  ECHO.anat['epicondylalgie-laterale'] = [{
    fig: 'img/epicondylalgie-laterale/echo-2.jpg',
    valide: true,
    vb: [1000, 503], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Probable — capitulum : plaque hyperéchogène comprise entre la pente de l\'épicondyle et l\'interligne (x 400–545, y ≈ 190–210), non désignée par les auteurs ; elle est légèrement concave vers la sonde, ce qui est inhabituel pour un condyle — à confirmer.',
      'Certain — orientation : épicondyle latéral à gauche, tête radiale à droite (sigles des auteurs) ; proximal à gauche, comme le schéma apparié.',
      'Certain — tendon extenseur commun : les trois têtes de flèche des auteurs sont posées sur sa surface, bande hyperéchogène saturée (y ≈ 53–90). Probable — sa limite superficielle (bord supérieur de cette bande). Sa limite profonde n\'est pas visible : capsule et ligament collatéral radial ne s\'en distinguent pas.',
      'Probable — épicondyle : corticale franche de x 100 à 320, puis pente vers le capitulum à peine visible (pointillé). Tête radiale : arc dont le sommet est à y ≈ 196 ; liseré anéchogène sur la tête radiale et sur le capitulum : cartilage. Interligne huméro-radial : bande sombre verticale entre x ≈ 600 et 660.',
      'Supposition — peau d\'environ 1 mm et tissu sous-cutané presque absent en regard de l\'épicondyle (échelle de l\'appareil) ; il ne s\'épaissit qu\'en aval de la tête radiale, là où le fascia plonge.',
      'Supposition — en aval et en profondeur de la tête radiale (x > 870) : plage grise sans structure reconnaissable, laissée en « plan non attribué » ; sa limite avec le tendon est arbitraire.',
      'Extrapolé — ligament collatéral radial : non individualisable sur cette image, dessiné dans le tiers profond du plan tendineux, de la pente de l\'épicondyle à la tête radiale, parce que la fiche en fait la limite de sécurité de la fenestration. Profondeur des os (cône d\'ombre). À gauche de x = 35 et au-dessus de y = 15 : hors image, aucune anatomie.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[35,15],[1000,15]], bas: [[35,46],[1000,46]] },
      { id: 'sc', tissu: 'graisse', haut: [[35,46],[1000,46]], bas: FASC2 },
      { id: 'plan', tissu: 'indetermine', contour: [[872,236],[900,250],[950,290],[1000,330],[1000,503],[890,503],[885,270]] },
      { id: 'tendon', tissu: 'tendon', enthese: 0.14, haut: FASC2.slice(4), bas: [[180,74],[200,76],[250,95],[300,114]].concat(RCL2_HAUT, [[820,196],[850,206],[872,236],[900,250],[950,290],[1000,330]]) },
      { id: 'lcr', tissu: 'ligament', extrapole: true, haut: RCL2_HAUT, bas: RCL2_BAS },
      { id: 'interligne', tissu: 'liquide', fin: true, contour: [[580,214],[610,200],[640,205],[665,222],[652,262],[650,330],[620,330],[610,250]] },
      { id: 'cart-cap', tissu: 'cartilage', bas: HUM2.slice(10, 14), ep: 13 },
      { id: 'cart-rad', tissu: 'cartilage', bas: RAD2.slice(2, 8), ep: 15 },
      { id: 'humerus', tissu: 'os', contour: HUM2, vu: [[2, 7], [10, 13]] },
      { id: 'radius', tissu: 'os', contour: RAD2, vu: [2, 7] },
    ],
    labels: [
      { s: 'tendon', x: 430, y: 120, dx: -240, dy: 350, text: 'Tendon extenseur commun' },
      { s: 'lcr', x: 715, y: 176, dx: 120, dy: -146, text: 'Lig. collatéral radial', vue: 'anat' },
      { s: 'humerus', x: 150, y: 150, dx: 0, dy: 150, text: 'Épicondyle latéral', vue: 'anat' },
      { s: 'humerus', x: 460, y: 214, dx: -30, dy: 176, text: 'Capitulum' },
      { s: 'interligne', x: 630, y: 255, dx: -10, dy: 215, text: 'Interligne huméro-radial' },
      { s: 'radius', x: 770, y: 240, dx: 10, dy: 100, text: 'Tête radiale', vue: 'anat' },
      { s: 'plan', x: 950, y: 400, dx: -80, dy: 70, text: 'Plan non attribué', vue: 'anat' },
    ],
  }, {
    fig: 'img/epicondylalgie-laterale/echo-1.jpg',
    valide: false,
    vb: [1000, 561], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Certain — lecture donnée par Mat : la pointe de l\'aiguille est dans le tendon, entourée d\'un petit injectat hypoéchogène. La « lentille » hypoéchogène lue au premier tracé le long de l\'aiguille n\'existe pas : effacée. Contour de l\'injectat : Probable (plage sombre autour de la pointe, x ≈ 180–270, y ≈ 115–165).',
      'Certain — orientation et repères : épicondyle latéral (LE) à gauche, interligne (J) puis tête radiale (R) à droite, tendon extenseur commun (CET) et ligament collatéral radial (RCL) — sigles des auteurs ; proximal à gauche, comme le schéma apparié.',
      'Certain — aiguille : trait hyperéchogène oblique venant du bord distal ; la figure n\'a pas de légende descriptive, mais le texte de l\'article la donne pour l\'abord du geste (23 G, dans le plan, de distal en proximal, vers l\'origine du tendon). Trajet de même sens que celui de la fiche. Les auteurs font un dépôt en un seul passage à l\'interface tendon-os, sans fenestration : sur cette image la pointe n\'a pas encore atteint cette cible.',
      'Probable — tendon : zone fibrillaire convergeant vers la corticale de l\'épicondyle (x < 500) ; sa partie distale (second sigle CET, x ≈ 700) est hypoéchogène, sans fibres visibles (anisotropie ou jonction myotendineuse). Limite superficielle (fascia, y ≈ 95–108) : Supposition, photographie d\'écran très contrastée de 417 px.',
      'Probable — corticale de l\'épicondyle (bande continue, y ≈ 175 à 290) et sommet de la tête radiale (x 550–660, y ≈ 293–312) ; la ligne discontinue qui plonge en aval (y ≈ 350 à 470) est lue comme le col puis la diaphyse du radius.',
      'Supposition — entre le plan des extenseurs et le col du radius (x > 650) : bande limitée par une ligne hyperéchogène (y ≈ 240–275), non désignée par les auteurs — laissée en « plan non attribué » (supinateur ?).',
      'Extrapolé — ligament collatéral radial : limites non résolues, dessiné là où les auteurs posent le sigle RCL, entre le tendon et l\'os jusqu\'à la tête radiale. Profondeur des os (cône d\'ombre) ; épaisseur de la peau.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,40],[1000,40]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,40],[1000,40]], bas: FASC1 },
      { id: 'tendon', tissu: 'tendon', enthese: 0.3, haut: FASC1, bas: LE1.slice(1, 8).concat([[330,242],[400,222],[470,215],[540,215],[600,222],[650,238],[750,243],[800,254],[900,262],[1000,275]]) },
      { id: 'supin', tissu: 'indetermine', contour: [[650,238],[750,243],[800,254],[900,262],[1000,275],[1000,478],[950,470],[870,462],[820,438],[770,398],[730,372],[700,348],[672,312],[668,300]] },
      { id: 'lcr', tissu: 'ligament', extrapole: true, contour: [[330,242],[400,222],[470,215],[540,215],[600,222],[650,238],[668,300],[650,296],[600,293],[560,300],[540,278],[505,285],[500,290],[450,272],[400,260],[350,258]] },
      { id: 'interligne', tissu: 'liquide', fin: true, contour: [[505,285],[540,278],[560,300],[548,330],[525,330],[515,300]] },
      { id: 'injectat', tissu: 'liquide', contour: [[180,135],[192,122],[215,116],[245,120],[268,132],[272,148],[255,160],[225,163],[198,156],[184,146]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,19],[215,137]], ep: 5 },
      { id: 'epicondyle', tissu: 'os', contour: LE1, vu: [1, 12] },
      { id: 'radius', tissu: 'os', contour: R1, vu: [[2, 5], [7, 11]] },
    ],
    labels: [
      { s: 'sc', x: 150, y: 72, dx: 0, dy: -44, text: 'Tissu sous-cutané' },
      { s: 'injectat', x: 240, y: 152, dx: 160, dy: -118, text: 'Injectat' },
      { s: 'aiguille', x: 880, y: 37, dx: 20, dy: 118, text: 'Aiguille 23 G' },
      { s: 'epicondyle', x: 150, y: 260, dx: -20, dy: 100, text: 'Épicondyle latéral', vue: 'anat' },
      { s: 'tendon', x: 330, y: 200, dx: -100, dy: 280, text: 'Tendon extenseur commun', vue: 'anat' },
      { s: 'lcr', x: 470, y: 240, dx: -50, dy: 180, text: 'Lig. collatéral radial', vue: 'anat' },
      { s: 'interligne', x: 538, y: 308, dx: 82, dy: 222, text: 'Interligne huméro-radial', vue: 'anat' },
      { s: 'radius', x: 620, y: 302, dx: 95, dy: 108, text: 'Tête radiale', vue: 'anat' },
      { s: 'radius', x: 840, y: 450, dx: 45, dy: 75, text: 'Col du radius' },
    ],
  }];
})();
