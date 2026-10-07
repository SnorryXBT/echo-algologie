/* Coupes anatomiques recalées — bourse sous-acromio-deltoïdienne (format : .claude/skills/echo-anatomie/SKILL.md) */
(function () {
  const FASCIA = [[0,100],[150,92],[300,88],[500,90],[700,97],[850,88],[1000,92]];
  const TOIT = [[0,395],[50,335],[100,288],[150,258],[200,236],[250,222],[300,213],[350,209],[400,206],[450,210],[500,209],[550,213],[600,220],[650,225],[700,236],[750,242],[800,258],[850,272],[900,290],[950,320],[1000,350]];
  const TENDON = [[20,412],[30,400],[60,350],[100,322],[150,295],[200,278],[250,266],[300,258],[350,254],[400,252],[450,255],[500,255],[550,258],[600,264],[650,270],[700,280],[750,290],[800,305],[850,325],[900,350],[950,385],[1000,420]];
  const CORTEX = [[0,425],[50,392],[100,356],[150,343],[200,342],[300,342],[400,339],[432,344],[452,362],[500,369],[545,382],[572,390],[600,378],[650,373],[700,380],[750,390],[800,414],[850,446],[900,490],[950,548],[1000,615]];
  /* --- echo-1 : le geste, Chang et al. fig. 17d (annotée CLA / ACR / SS T, têtes de flèche sur l'aiguille) --- */
  const F1 = [[0,150],[100,145],[200,116],[300,122],[400,120],[500,118],[600,125],[700,122],[800,115],[900,100],[1000,92]];
  const ROOF1 = [[160,312],[250,308],[350,303],[440,300],[500,262],[550,252],[600,248],[650,253],[700,248],[750,246],[800,250],[850,260],[900,262],[1000,265]];
  const FLOOR1 = [[160,322],[250,318],[350,313],[440,310],[500,302],[550,303],[600,297],[650,296],[700,298],[750,303],[800,310],[850,311],[950,305],[1000,305]];
  const HH1 = [[140,800],[200,690],[260,610],[330,540],[350,520],[450,455],[531,425],[600,420],[706,424],[744,396],[850,392],[937,398],[1000,415]];
  ECHO.anat['sous-acromiale'] = [{
    fig: 'img/sous-acromiale/echo-2.jpg',
    valide: true,
    vb: [1000, 791], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : grand tubercule à gauche, tête humérale et cartilage à droite (panneau d de la même figure, annoté GT / CAR / HH par les auteurs).',
      'Probable — la lame hypoéchogène fine (y ≈ 250) sous la bande hyperéchogène épaisse est la bourse ; la bande épaisse au-dessus est la graisse péribursale.',
      'Probable — bande hypoéchogène au-dessus de la corticale du grand tubercule rattachée au tendon (anisotropie de l\'enthèse).',
      'Supposition — limite deltoïde / graisse sous-cutanée en dedans (x > 650) : lobules et septa mêlés, image de 263 px de large.',
      'Extrapolé — corticale et cartilage au-delà de x = 900 (hors signal).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,38],[1000,38]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,38],[1000,38]], bas: FASCIA },
      { id: 'deltoide', tissu: 'muscle', haut: FASCIA, bas: TOIT },
      { id: 'bourse', tissu: 'bourse', haut: TOIT, bas: TENDON, lame: [0, 0.2] },
      { id: 'tendon', tissu: 'tendon', enthese: 0.38, haut: TENDON, bas: [[20,412]].concat(CORTEX.slice(1)) },
      { id: 'cartilage', tissu: 'cartilage', bas: CORTEX.slice(12), ep: 26 },
      { id: 'os', tissu: 'os', cortex: CORTEX, vu: [0, 18] },
    ],
    labels: [
      { s: 'deltoide', x: 250, y: 150, dx: -130, dy: -80, text: 'Deltoïde' },
      { s: 'bourse', x: 470, y: 249, dx: 0, dy: -205, text: 'Bourse sous-acromio-deltoïdienne' },
      { s: 'sc', x: 700, y: 66, dx: 150, dy: 30, text: 'Graisse sous-cutanée' },
      { s: 'bourse', x: 700, y: 256, dx: 160, dy: -80, text: 'Graisse péribursale' },
      { s: 'tendon', x: 520, y: 310, dx: -50, dy: 250, text: 'Tendon du supra-épineux' },
      { s: 'os', x: 250, y: 400, dx: -60, dy: 250, text: 'Grand tubercule' },
      { s: 'os', x: 720, y: 470, dx: -60, dy: 215, text: 'Tête humérale' },
      { s: 'cartilage', x: 772, y: 386, dx: 130, dy: 180, text: 'Cartilage' },
      { s: 'os', x: 420, y: 650, dx: -20, dy: 95, text: 'Échos sous la corticale : artéfacts', vue: 'echo' },
    ],
  }, {
    fig: 'img/sous-acromiale/echo-1.jpg',
    valide: true,
    vb: [1000, 763], orient: { left: 'Médial (clavicule)', right: 'Latéral' },
    lecture: [
      'Certain — orientation et repères : clavicule à gauche (CLA), acromion (ACR), tendon du supra-épineux (SS T), aiguille désignée par les têtes de flèche, venant du bord latéral — sigles et légende des auteurs (« lateral-to-medial injection of the subdeltoid bursa »). Même orientation que le schéma apparié ; trajet conforme à la fiche.',
      'Probable — bourse : bande comprise entre deux lignes hyperéchogènes parallèles (y ≈ 250 et y ≈ 300, x 500–850), dont la pointe de l\'aiguille atteint la ligne supérieure ; cette lecture donne un tendon de 5 à 6 mm, plausible. Lecture alternative écartée : plan bursal unique à y ≈ 250 (le tendon ferait alors 8 à 9 mm). Image de 270 px : la lame elle-même n\'est pas résolue. À confirmer par Mat.',
      'Probable — corticale humérale : deux segments hyperéchogènes, y ≈ 420–430 (x 530–706, tête) et y ≈ 392–400 (x 744–937, grand tubercule, plus superficiel).',
      'Supposition — surface de l\'acromion : aucune ligne corticale franche (gain saturé par les septa sous-cutanés) ; tracée sur la limite supérieure, oblique, du cône d\'ombre, bord inféro-latéral placé vers x ≈ 470, y ≈ 290, là où le plan bursal émerge de l\'ombre.',
      'Supposition — fascia superficiel du deltoïde (y ≈ 115–125) : choisi parmi plusieurs septa brillants parallèles ; la plage hypoéchogène au-dessus de l\'aiguille (x 710–825, y 197–224) est lue comme un faisceau du deltoïde.',
      'Extrapolé — sous l\'acromion et la clavicule (cône d\'ombre) : face profonde des deux os, bourse, supra-épineux (muscle puis tendon, jonction en biseau) et tête humérale prolongés par connaissance anatomique ; la glène n\'est pas dessinée. Les échos brillants dans l\'ombre (x 150–295, y 320–440) sont des réverbérations.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,28],[1000,28]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,28],[1000,28]], bas: F1 },
      { id: 'deltoide', tissu: 'muscle', haut: F1, bas: [[0,172],[56,150],[119,158],[150,160],[200,124],[250,132],[300,146],[350,172],[400,207],[440,250]].concat(ROOF1.slice(4)) },
      { id: 'ss-muscle', tissu: 'muscle', haut: [[0,303],[140,298],[160,322],[250,318],[340,314]], bas: [[0,800],[360,800]], extrapole: true },
      { id: 'tendon', tissu: 'tendon', haut: [[200,640],[280,450],[340,330]].concat(FLOOR1.slice(3)), bas: HH1.slice(1) },
      { id: 'bourse', tissu: 'bourse', haut: ROOF1, bas: FLOOR1, lame: [0.15, 0.85] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,193],[730,258]], ep: 5 },
      { id: 'clavicule', tissu: 'os', contour: [[-40,170],[0,166],[56,147],[119,156],[142,185],[138,270],[60,300],[-40,305]], vu: [1, 3] },
      { id: 'acromion', tissu: 'os', contour: [[152,160],[200,122],[250,130],[300,144],[350,170],[400,205],[440,248],[472,288],[440,298],[350,297],[250,302],[160,306],[150,220]], vu: [1, 7] },
      { id: 'tete', tissu: 'os', cortex: HH1, vu: [6, 11] },
    ],
    labels: [
      { s: 'sc', x: 330, y: 75, dx: -140, dy: -47, text: 'Graisse sous-cutanée' },
      { s: 'deltoide', x: 600, y: 165, dx: 0, dy: -137, text: 'Deltoïde' },
      { s: 'aiguille', x: 900, y: 215, dx: 0, dy: -187, text: 'Aiguille', vue: 'anat' },
      { s: 'clavicule', x: 60, y: 220, dx: 30, dy: 200, text: 'Clavicule', vue: 'anat' },
      { s: 'acromion', x: 300, y: 220, dx: 0, dy: 210, text: 'Acromion', vue: 'anat' },
      { s: 'acromion', x: 250, y: 335, dx: -100, dy: 135, text: 'Réverbérations (artéfacts)', vue: 'echo' },
      { s: 'bourse', x: 600, y: 275, dx: -270, dy: 285, text: 'Bourse sous-acromio-deltoïdienne' },
      { s: 'tendon', x: 650, y: 350, dx: -50, dy: 150, text: 'Tendon du supra-épineux', vue: 'anat' },
      { s: 'tete', x: 880, y: 430, dx: 0, dy: 110, text: 'Grand tubercule' },
      { s: 'tete', x: 640, y: 580, dx: 0, dy: 90, text: 'Tête humérale' },
    ],
  }];
})();
