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

/* echo-3 (Hung, Chang, Mezian et al., Diagnostics 2020, fig. 6, CC BY) : planche à trois panneaux (A, B pièces cadavériques ;
   C échographie) — coupe tracée sur le seul panneau C, `crop` propre à la coupe. Grand axe du ligament talo-calcanéen latéral,
   crânial à gauche, caudal à droite (inscrit par les auteurs) : talus et calcanéus de part et d'autre de l'ouverture latérale du
   sinus du tarse. Panneau de 267 px de haut : les structures fines ne sont pas résolues. Entrée ajoutée à la suite de celle
   d'echo-1 (session parallèle), 7 octobre 2026. */
(function () {
  /* bord profond du tissu sous-cutané = face superficielle des ligaments (ATFL puis LTCL), puis toit des tendons fibulaires */
  const SUP = [[0,140],[60,135],[150,118],[250,100],[350,88],[450,82],[550,78],[650,84],[720,92],[760,100],[800,50],[900,38],[1000,48]];
  const ATFL_B = [[0,190],[60,183],[150,172],[250,160],[350,135],[450,112]];
  const LTCL_H = [[380,88],[450,82],[550,78],[650,84],[720,92],[760,100]];
  const LTCL_B = [[380,118],[450,118],[500,124],[530,138],[560,140],[620,138],[680,150],[720,170],[760,192]];
  const TALUS = [[0,196],[60,189],[150,177],[250,163],[300,149],[350,136],[400,124],[450,118],[500,124],[530,138],[555,160],[575,190],[590,230],[600,300],[605,341]];
  const CALC = [[690,262],[705,216],[725,198],[760,192],[800,198],[850,204],[900,208],[950,208],[1000,212]];
  (ECHO.anat['cheville-tibio-talienne-sous-talienne'] = ECHO.anat['cheville-tibio-talienne-sous-talienne'] || []).push({
    fig: 'img/cheville-tibio-talienne-sous-talienne/echo-3.jpg',
    crop: [0, 0.556, 1, 0.444], panneau: 'C (échographie)',
    valide: false,
    vb: [1000, 341], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — crânial à gauche, caudal à droite (inscrit sur l\'image par les auteurs) ; talus et calcanéus nommés par eux ; têtes de flèche = ligament talo-fibulaire antérieur, flèches = ligament talo-calcanéen latéral, PB / PL = tendons des fibulaires court et long. Plan crânio-caudal (grand axe du ligament talo-calcanéen latéral), différent de l\'axe du schéma apparié (entonnoir vu de l\'ouverture antéro-latérale vers le canal) : les deux os sont ici côte à côte et non superposés.',
      'Probable — corticale du talus (processus latéral) = bord supérieur du grand cône d\'ombre de gauche ; corticale du calcanéus = ligne irrégulière y ≈ 190–210 à droite de x ≈ 720. Entre les deux, zone échogène hétérogène x ≈ 560–720 = ouverture latérale du sinus du tarse (graisse), dont le fond (talus au-dessus, calcanéus au-dessous) n\'est pas dans le plan.',
      'Probable — ligament talo-fibulaire antérieur = bande oblique encadrée par les quatre têtes de flèche, de (x 100, y 170) à (x 450, y 100), posée sur le talus ; ligament talo-calcanéen latéral = bande brillante y ≈ 80–130 qui franchit l\'ouverture du sinus jusqu\'au calcanéus (trois flèches).',
      'Supposition — couche échogène mouchetée y ≈ 30–100 sous la peau : tissu sous-cutané (dessiné en graisse) ; elle pourrait inclure le rétinaculum des extenseurs ou le court extenseur des orteils, non désignés par les auteurs. Tissu de la gaine des fibulaires entre les tendons et le calcanéus dessiné en tissu conjonctif.',
      'Extrapolé — flancs de l\'entonnoir (bord inférieur du talus sous son ombre, versant du calcanéus vers le canal) : pointillés, hors du plan.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,28],[500,26],[1000,26]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,28],[500,26],[1000,26]], bas: SUP },
      { id: 'gaine', tissu: 'conjonctif', haut: [[760,100],[800,50],[900,38],[1000,48]], bas: [[760,192],[800,198],[850,204],[900,208],[950,208],[1000,212]] },
      { id: 'pb', tissu: 'tendon', contour: [[760,100],[770,75],[800,62],[830,70],[845,100],[835,135],[800,150],[770,135]] },
      { id: 'pl', tissu: 'tendon', contour: [[840,90],[855,55],[890,45],[925,55],[945,90],[930,125],[890,140],[855,125]] },
      { id: 'atfl', tissu: 'ligament', haut: SUP.slice(0, 6), bas: ATFL_B, enthese: -0.5 },
      { id: 'ltcl', tissu: 'ligament', haut: LTCL_H, bas: LTCL_B, enthese: -0.4 },
      { id: 'sinus', tissu: 'graisse', contour: [[530,138],[555,160],[575,190],[590,230],[600,300],[605,341],[690,341],[690,262],[705,216],[725,198],[760,192],[720,170],[680,150],[620,138],[560,140]], extrapole: true },
      { id: 'talus', tissu: 'os', cortex: TALUS, vu: [[0, 10]] },
      { id: 'calc', tissu: 'os', cortex: CALC, vu: [[2, 8]] },
    ],
    labels: [
      { s: 'atfl', x: 250, y: 130, dx: -90, dy: -105, text: 'Lig. talo-fibulaire antérieur' },
      { s: 'sc', x: 420, y: 55, dx: 0, dy: -30, text: 'Tissu sous-cutané (?)' },
      { s: 'ltcl', x: 600, y: 105, dx: 60, dy: -80, text: 'Lig. talo-calcanéen latéral' },
      { s: 'pb', x: 800, y: 108, dx: 90, dy: -85, text: 'Fibulaires court / long' },
      { s: 'talus', x: 350, y: 150, dx: -40, dy: 150, text: 'Talus (processus latéral)' },
      { s: 'sinus', x: 630, y: 175, dx: -30, dy: 125, text: 'Ouverture du sinus du tarse' },
      { s: 'calc', x: 870, y: 215, dx: -110, dy: 62, text: 'Calcanéus' },
    ],
  });
})();
