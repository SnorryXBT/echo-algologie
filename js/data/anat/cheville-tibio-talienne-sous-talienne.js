/* Coupes anatomiques recalées — cheville : tibio-talienne, sous-talienne, sinus du tarse (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : planche à deux panneaux de Soualili et al. (Cureus 2025, fig. 5) — coupe tracée sur le seul panneau A (sagittal antérieur,
   épanchement du récessus antérieur et bride intra-articulaire), `crop` propre à la coupe ; la planche reste affichée entière dans la fiche.
   Orientation donnée par Mat (7 octobre 2026) : tibia à gauche, dôme talien à droite. Les lignes de brillance sont faibles au centre
   (image de 375 px) : les interfaces ont été relevées sur des profils de colonne à bas seuil, pas à l'œil seul.
   echo-2 (Kim et al., fig. 15, sinus du tarse) : non tracée — voir js/data/anat/zz-refus.js. */
(function () {
  const PEAU = [[0,45],[1000,45]];
  /* première ligne brillante continue sous le tissu sous-cutané (fascia / rétinaculum ?), non désignée par les auteurs */
  const FASCIA = [[0,150],[150,152],[350,150],[450,150],[550,158],[650,142],[750,145],[850,128],[950,118],[1000,115]];
  /* bord profond du complexe échogène superficiel = toit du récessus (capsule) ; il s'épaissit en regard de l'interligne (x ≈ 375–450) */
  const TOIT = [[0,500],[50,506],[100,508],[150,502],[200,508],[250,527],[300,522],[350,530],[375,606],[400,590],[425,588],[450,572],[475,552],[500,523],[550,515],[600,486],[650,467],[700,451],[750,440],[800,428],[850,420],[900,418],[950,402],[1000,395]];
  /* lèvre antérieure du tibia : pente douce puis chute vers l'interligne ; son extrémité profonde (x > 325) est dans l'ombre */
  const TIBIA = [[0,498],[50,528],[100,558],[150,588],[200,614],[250,634],[275,648],[300,668],[315,700],[325,725],[350,770]];
  /* dôme talien : bande faible au centre (x 450–750, intensité ≈ 40–60 / 255), franche à droite (x > 800) */
  const TALUS = [[350,770],[385,718],[400,694],[425,664],[450,638],[500,610],[550,576],[600,546],[650,524],[700,506],[750,490],[800,468],[850,456],[900,450],[950,444],[1000,442]];
  ECHO.anat['cheville-tibio-talienne-sous-talienne'] = [{
    fig: 'img/cheville-tibio-talienne-sous-talienne/echo-1.jpg',
    crop: [0, 0, 0.5, 1], panneau: 'A (sagittal antérieur)',
    valide: false,
    vb: [1000, 971], orient: { left: 'Proximal (tibia)', right: 'Distal (talus)' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : tibia à gauche, dôme talien à droite. Coupe sagittale antérieure (légende d\'origine) ; même orientation que le schéma apparié (proximal à gauche).',
      'Certain — épanchement du récessus antérieur (astérisque des auteurs, poche anéchogène x ≈ 100–300) et bride intra-articulaire (flèche des auteurs, dont la pointe touche l\'extrémité libre de la bande échogène horizontale y ≈ 550–600).',
      'Probable — corticale tibiale : bord profond de la bande brillante de gauche (y ≈ 500 → 590 de x = 0 à 150), prolongé par la lame oblique fine qui descend jusqu\'à x ≈ 325, y ≈ 725 (lèvre antérieure plongeant vers l\'interligne) ; le reste est dans l\'ombre (pointillé). Lecture alternative non exclue : si la bande épaisse horizontale est elle-même la corticale, la bride serait la lame oblique profonde — question posée à Mat.',
      'Probable — dôme talien : bande oblique convexe qui remonte de l\'interligne (x ≈ 385, y ≈ 720) vers la droite jusqu\'à y ≈ 442 ; faible au centre (profils de colonne à 40–60 / 255), franche à droite. Interligne tibio-talien au fond du V (x ≈ 325–385), non résolu.',
      'Probable — toit du récessus : bord profond du complexe échogène superficiel (ligne brillante y ≈ 500–530 à gauche), lu comme la capsule ; il s\'épaissit en regard de l\'interligne (x ≈ 375–450).',
      'Supposition — plage hypoéchogène (non anéchogène) entre la capsule et le dôme à droite de x ≈ 480 : récessus sur le col et le dôme, lu comme synoviale épaissie ou capsule (conflit antérieur post-traumatique), dessiné en tissu conjonctif ; la limite avec l\'épanchement (x ≈ 480) est arbitraire.',
      'Supposition — plans superficiels : peau et tissu sous-cutané jusqu\'à la première ligne brillante continue (y ≈ 150) ; en dessous, tendons extenseurs, rétinaculum et gaines ne sont pas attribuables (bandes brillantes y ≈ 290–305 et 345–360 = tendons en anisotropie probable) : plan unique non attribué, conformément à la décision de Mat.',
      'Extrapolé — cartilage du dôme (bande fine au-dessus de la corticale, non séparable de l\'épanchement), extrémité profonde de la lèvre tibiale et versant talien de l\'interligne (ombre), profondeur des os.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: FASCIA },
      { id: 'ext', tissu: 'indetermine', haut: FASCIA, bas: TOIT },
      { id: 'recessus', tissu: 'liquide', haut: TOIT.slice(0, 14), bas: TIBIA.concat(TALUS.slice(0, 6)) },
      { id: 'synoviale', tissu: 'conjonctif', haut: TOIT.slice(13), bas: TALUS.slice(5) },
      { id: 'bride', tissu: 'ligament', contour: [[135,546],[200,552],[250,556],[295,556],[310,574],[298,592],[250,586],[200,592],[150,600],[128,576]] },
      { id: 'cartilage', tissu: 'cartilage', bas: TALUS.slice(1), ep: 14, extrapole: true },
      { id: 'capsule', tissu: 'fascia', ligne: TOIT, ep: 6 },
      { id: 'tibia', tissu: 'os', cortex: TIBIA, vu: [0, 9] },
      { id: 'talus', tissu: 'os', cortex: TALUS, vu: [1, 15] },
    ],
    labels: [
      { s: 'sc', x: 700, y: 100, dx: 160, dy: -62, text: 'Peau et tissu sous-cutané' },
      { s: 'ext', x: 300, y: 300, dx: -110, dy: -90, text: 'Plans extenseurs — non attribués' },
      { s: 'capsule', x: 820, y: 424, dx: 20, dy: -70, text: 'Capsule (probable)' },
      { s: 'recessus', x: 170, y: 528, dx: -40, dy: 232, text: 'Récessus antérieur (épanchement)' },
      { s: 'bride', x: 250, y: 572, dx: 80, dy: 278, text: 'Bride intra-articulaire' },
      { s: 'tibia', x: 60, y: 535, dx: 30, dy: 395, text: 'Tibia (lèvre antérieure)' },
      { x: 360, y: 740, dx: 200, dy: 190, text: 'Interligne tibio-talien' },
      { s: 'cartilage', x: 600, y: 538, dx: 40, dy: 282, text: 'Cartilage', vue: 'anat' },
      { s: 'talus', x: 850, y: 560, dx: 0, dy: 370, text: 'Dôme talien', vue: 'anat' },
      { s: 'synoviale', x: 650, y: 492, dx: -100, dy: -72, text: 'Synoviale épaissie (probable)' },
    ],
  }];
})();
