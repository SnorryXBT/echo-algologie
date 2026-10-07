/* Coupes anatomiques recalées — articulation acromio-claviculaire (format : .claude/skills/echo-anatomie/SKILL.md) */
(function () {
  const FASCIA = [[0,198],[100,196],[190,200],[230,175],[262,152],[300,130],[350,115],[400,112],[450,118],[500,130],[550,140],[600,148],[700,146],[800,134],[900,145],[1000,150]];
  const CAPS_OUT = FASCIA.slice(2, 12).concat([[650,180],[700,208],[740,236],[790,275],[825,320],[840,362]]);
  const CAPS_IN = [[205,238],[240,205],[294,176],[375,153],[475,153],[562,175],[625,203],[675,235],[710,272],[750,310],[785,345],[800,360]];
  const ACR = [[0,402],[40,396],[120,381],[206,365],[306,346],[375,352],[400,388],[415,430],[419,500]];
  const CLA = [[439,500],[439,345],[442,288],[475,266],[512,272],[562,296],[600,321],[700,350],[800,360],[840,362],[1000,372]];
  ECHO.anat['acromio-claviculaire'] = [{
    fig: 'img/acromio-claviculaire/echo-1.jpg',
    valide: true,
    vb: [1000, 767], orient: { left: 'Latéral (acromion)', right: 'Médial (clavicule)' },
    lecture: [
      'Certain — orientation et repères osseux : acromion à gauche (ACR), clavicule à droite (CLA), aiguille désignée par les têtes de flèche, venant du bord latéral — sigles et légende des auteurs (« lateral to medial coronal approach »). Image en miroir du schéma apparié.',
      'Certain — l\'abord montré (dans le plan, coronal, de latéral en médial) n\'est pas celui de la fiche (hors du plan, aiguille verticale ; variante dans le plan antéro-postérieure) : l\'image illustre la coupe et la cible, pas le trajet décrit dans « Technique ».',
      'Probable — le dôme hyperéchogène qui ponte les deux berges est la capsule distendue, renforcée par le ligament AC supérieur : même aspect que la fig. 12a des mêmes auteurs (« distended acromioclavicular capsule »). Son contenu hypoéchogène non anéchogène (épanchement, synoviale épaissie ou injectat) est dessiné comme une cavité liquidienne.',
      'Probable — marche d\'escalier : la corticale claviculaire (y ≈ 270) est plus superficielle que celle de l\'acromion (y ≈ 350) ; la pointe de l\'aiguille se perd au contact du bord latéral de la clavicule, au sommet de l\'interligne.',
      'Supposition — couches hypoéchogènes sous le fascia, de part et d\'autre du dôme : insertion du deltoïde en dehors, du trapèze en dedans (chape delto-trapézienne) ; image de 270 px, texture musculaire non résolue.',
      'Extrapolé — attache latérale de la capsule sur l\'acromion, profondeur de l\'interligne, face supérieure de la clavicule en dedans de x = 600 (hors signal) ; le disque articulaire n\'est pas visible et n\'est pas dessiné.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,40],[1000,40]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,40],[1000,40]], bas: FASCIA },
      { id: 'deltoide', tissu: 'muscle', haut: FASCIA.slice(0, 3).concat([[205,215]]), bas: ACR.slice(0, 4).concat([[245,358]]) },
      { id: 'trapeze', tissu: 'muscle', haut: FASCIA.slice(11), bas: CAPS_OUT.slice(9).concat([[1000,372]]) },
      { id: 'cavite', tissu: 'liquide', haut: CAPS_IN, bas: [[205,238],[215,300],[240,360]].concat(ACR.slice(4, 8), [[429,485]], CLA.slice(1, 9)) },
      { id: 'capsule', tissu: 'ligament', haut: CAPS_OUT, bas: CAPS_IN },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[0,234],[100,249],[206,268],[300,279],[420,292]], ep: 5 },
      { id: 'acromion', tissu: 'os', cortex: ACR, vu: [1, 7] },
      { id: 'clavicule', tissu: 'os', cortex: CLA, vu: [2, 6] },
    ],
    labels: [
      { s: 'aiguille', x: 150, y: 257, dx: -55, dy: -222, text: 'Aiguille', vue: 'anat' },
      { s: 'capsule', x: 430, y: 128, dx: 0, dy: -93, text: 'Capsule et lig. AC supérieur' },
      { s: 'sc', x: 800, y: 92, dx: 20, dy: -57, text: 'Graisse sous-cutanée' },
      { s: 'trapeze', x: 900, y: 230, dx: -30, dy: 210, text: 'Trapèze (supposé)' },
      { s: 'cavite', x: 640, y: 240, dx: 80, dy: 360, text: 'Cavité articulaire distendue' },
      { s: 'clavicule', x: 500, y: 268, dx: 20, dy: 252, text: 'Clavicule', vue: 'anat' },
      { s: 'acromion', x: 340, y: 348, dx: -40, dy: 152, text: 'Acromion', vue: 'anat' },
      { s: 'cavite', x: 429, y: 410, dx: 1, dy: 290, text: 'Interligne' },
      { s: 'deltoide', x: 50, y: 310, dx: 75, dy: 310, text: 'Deltoïde (supposé)' },
    ],
  }];
})();
