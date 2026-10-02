/* Coupes anatomiques recalées — articulation gléno-humérale, voie postérieure (format : .claude/skills/echo-anatomie/SKILL.md).
   Labrum (fibrocartilage) dessiné avec le tissu `disque`. */
(function () {
  /* --- echo-1 : repérage, Chang et al. fig. 10c (vierge ; corrigé = panneau d) --- */
  const F1 = [[0,105],[100,105],[200,96],[300,95],[400,92],[500,82],[600,78],[700,78],[800,72],[900,74],[1000,72]];
  const L1 = [[0,372],[100,374],[200,367],[300,359],[400,348],[450,337],[500,322],[550,316],[600,307],[650,300],[700,296],[800,292],[850,296],[900,300],[950,307],[1000,318]];
  const G1 = [[0,790],[60,770],[100,762],[150,722],[200,698],[250,672],[300,655],[350,637],[385,628],[400,660],[404,730],[406,810]];
  const HH1 = [[440,810],[442,690],[450,603],[500,556],[562,506],[625,469],[719,431],[812,412],[906,415],[1000,437]];
  const ARC1 = [[425,560],[437,544],[500,487],[562,450],[625,424],[719,398]];   // arc externe : capsule / face profonde de l'infra-épineux
  /* --- echo-2 : geste, Chang et al. fig. 19d (annotée) --- */
  const F2 = [[0,108],[250,108],[400,100],[600,88],[800,84],[1000,72]];
  const L2 = [[0,340],[100,343],[200,350],[300,365],[400,376],[550,387],[700,390],[850,386],[1000,380]];
  const G2 = [[0,668],[100,656],[150,660],[200,650],[250,643],[300,626],[350,619],[368,618],[382,645],[386,700],[388,760]];
  const HH2 = [[440,760],[445,665],[470,620],[510,588],[562,568],[650,570],[700,566],[800,556],[880,572],[1000,596]];
  ECHO.anat['gleno-humerale'] = [{
    fig: 'img/gleno-humerale/echo-1.jpg',
    valide: false,
    vb: [1000, 796], orient: { left: 'Médial (glène)', right: 'Latéral (tête humérale)' },
    lecture: [
      'Certain — orientation et identité des plans : deltoïde, infra-épineux (muscle en dedans, tendon sur la tête), tête humérale convexe à droite, glène en bas à gauche, labrum entre les deux — d\'après le panneau d de la même figure, corrigé annoté et colorisé par les auteurs (autre appareil, non recalé au pixel : il sert aux positions relatives, pas au tracé). Même orientation que le schéma apparié.',
      'Probable — double arc de la tête : l\'arc profond, le plus brillant, est la corticale ; la bande hypoéchogène qui le coiffe est le cartilage ; l\'arc superficiel est l\'interface capsule / face profonde de l\'infra-épineux.',
      'Probable — sur le versant médial de la tête, la bande hypoéchogène s\'épaissit vers le labrum (≈ 25 à 40 unités) : dessinée comme le récessus postérieur, cible du geste. Aucun épanchement franc.',
      'Supposition — labrum : petit triangle échogène au bord de la glène (x ≈ 385–445, y ≈ 585–645), image de 270 px ; position déduite du corrigé.',
      'Supposition — jonction myo-tendineuse de l\'infra-épineux (x ≈ 450–640) : limite arbitraire, dessinée en biseau, le tendon n\'est pas séparé du muscle par un signal propre.',
      'Extrapolé — versant articulaire de la glène et de la tête en profondeur de l\'interligne (cône d\'ombre) ; plage hyperéchogène dans le deltoïde à droite (x 800–940, y 160–280) : septum ou graisse intramusculaire, non dessinée.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,50],[1000,50]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,50],[1000,50]], bas: F1 },
      { id: 'deltoide', tissu: 'muscle', haut: F1, bas: L1 },
      { id: 'is-muscle', tissu: 'muscle', haut: L1, bas: G1.slice(0, 9).concat([[400,600],[425,585]], HH1.slice(2)) },
      { id: 'is-tendon', tissu: 'tendon', haut: L1.slice(5), bas: [[450,339],[520,350],[580,378],[640,416],[719,398],[812,387],[906,390],[1000,410]] },
      { id: 'recessus', tissu: 'liquide', fin: true, haut: ARC1, bas: [[425,598],[434,586],[484,538],[548,486],[615,447],[719,405]] },
      { id: 'labrum', tissu: 'disque', contour: [[385,628],[400,600],[425,585],[446,592],[440,620],[420,640],[402,646]] },
      { id: 'cartilage', tissu: 'cartilage', bas: HH1.slice(2), ep: 24 },
      { id: 'glene', tissu: 'os', cortex: G1, vu: [1, 8] },
      { id: 'tete', tissu: 'os', cortex: HH1, vu: [2, 9] },
    ],
    labels: [
      { s: 'deltoide', x: 250, y: 220, dx: -80, dy: -190, text: 'Deltoïde' },
      { s: 'is-tendon', x: 800, y: 340, dx: -40, dy: -310, text: 'Tendon de l\'infra-épineux' },
      { s: 'is-muscle', x: 400, y: 520, dx: -210, dy: -50, text: 'Infra-épineux (muscle)' },
      { s: 'labrum', x: 412, y: 612, dx: -112, dy: -52, text: 'Labrum' },
      { s: 'glene', x: 230, y: 685, dx: -120, dy: -45, text: 'Glène' },
      { s: 'recessus', x: 470, y: 535, dx: 70, dy: 215, text: 'Récessus postérieur (cible)' },
      { s: 'cartilage', x: 700, y: 424, dx: 200, dy: 156, text: 'Cartilage' },
      { s: 'tete', x: 750, y: 560, dx: 30, dy: 120, text: 'Tête humérale' },
    ],
  }, {
    fig: 'img/gleno-humerale/echo-2.jpg',
    valide: false,
    vb: [1000, 748], orient: { left: 'Médial (glène)', right: 'Latéral (tête humérale)' },
    lecture: [
      'Certain — orientation et repères : deltoïde (DEL), infra-épineux (IS M), tête humérale (HH), glène (G), aiguille désignée par les têtes de flèche, venant du bord latéral — sigles des auteurs. Même orientation que le schéma apparié ; trajet conforme à la fiche (dans le plan, de latéral en médial, sur la convexité de la tête).',
      'Probable — l\'astérisque marque le labrum : la légende de la fig. 19 ne le définit pas, celle de la fig. 10 (même coupe, mêmes auteurs) dit « Asterisk: Labrum ».',
      'Probable — trajet de l\'aiguille : droite passant par la pointe des deux têtes de flèche ; la large bande grise oblique qui l\'entoure est sa traînée (réverbération), la pointe n\'est pas individualisable et est placée au contact de la tête, en dehors du labrum (x ≈ 650).',
      'Probable — corticale de la tête : ligne presque horizontale (y ≈ 556–575) qui plonge en dedans vers l\'interligne à travers la plage brillante (x 450–520, y 590–650).',
      'Supposition — limite deltoïde / infra-épineux : ligne continue y ≈ 340–390 ; à droite de x ≈ 700 elle est masquée par la traînée de l\'aiguille et prolongée à l\'horizontale. Tendon de l\'infra-épineux non individualisé (non désigné par les auteurs).',
      'Extrapolé — récessus postérieur (film virtuel entre labrum et tête, cible du geste), versants articulaires en profondeur de l\'interligne.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,58],[400,52],[600,48],[1000,42]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,58],[400,52],[600,48],[1000,42]], bas: F2 },
      { id: 'deltoide', tissu: 'muscle', haut: F2, bas: L2 },
      { id: 'infra-epineux', tissu: 'muscle', haut: L2, bas: G2.slice(0, 8).concat([[400,596],[445,640]], HH2.slice(2)) },
      { id: 'recessus', tissu: 'liquide', fin: true, extrapole: true, ligne: [[438,640],[448,615],[468,598],[500,576],[540,563]], ep: 7 },
      { id: 'labrum', tissu: 'disque', contour: [[368,616],[385,592],[410,580],[434,586],[428,612],[408,630],[386,634]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,325],[650,545]], ep: 5 },
      { id: 'glene', tissu: 'os', cortex: G2, vu: [0, 7] },
      { id: 'tete', tissu: 'os', cortex: HH2, vu: [2, 8] },
    ],
    labels: [
      { s: 'sc', x: 300, y: 80, dx: 0, dy: -55, text: 'Graisse sous-cutanée' },
      { s: 'deltoide', x: 300, y: 260, dx: -140, dy: -80, text: 'Deltoïde', vue: 'anat' },
      { s: 'aiguille', x: 900, y: 388, dx: -50, dy: -188, text: 'Aiguille', vue: 'anat' },
      { s: 'aiguille', x: 760, y: 470, dx: 20, dy: -270, text: 'Traînée de l\'aiguille (artéfact)', vue: 'echo' },
      { s: 'infra-epineux', x: 250, y: 500, dx: -90, dy: -60, text: 'Infra-épineux', vue: 'anat' },
      { s: 'labrum', x: 400, y: 605, dx: -70, dy: -75, text: 'Labrum', vue: 'anat' },
      { s: 'glene', x: 220, y: 655, dx: -20, dy: 60, text: 'Glène', vue: 'anat' },
      { s: 'recessus', x: 462, y: 604, dx: 128, dy: 118, text: 'Récessus postérieur (cible)' },
      { s: 'tete', x: 750, y: 620, dx: 100, dy: 40, text: 'Tête humérale', vue: 'anat' },
    ],
  }];
})();
