/* Coupes anatomiques recalées — facettes cervicales (format : .claude/skills/echo-anatomie/SKILL.md).
   Les deux figures écho sont deux recadrages de la même planche (Wong & Rajarathinam, Can J Pain 2023, fig. 3, CC BY 4.0) :
   echo-1 : panneaux (b) + (c), voie latérale coronale ; seule la coupe du panneau (b) est tracée (`crop` propre à l'entrée,
            `anat-grid.js facettes-cervicales 0 <dossier> 0.2975,0,0.3325,0.1448`).
   echo-2 : panneau (i), voie postérieure para-sagittale, IAP / SAP et trajet caudo-crânial dessinés par les auteurs.
   Les deux panneaux font ≈ 250 px : les limites musculaires sont des suppositions, l'ordre des plans vient des sigles des auteurs. */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };

  /* ---------- echo-1 : panneau (b), coronale latérale, crânial à gauche ---------- */
  const B_PEAU = [[0,16],[1000,16]];
  const B_SC = [[0,122],[150,125],[300,128],[450,118],[600,112],[750,115],[900,128],[1000,130]];            // bas du tissu sous-cutané : ligne brillante continue
  const B_F = [[0,292],[150,296],[300,302],[450,300],[520,298],[600,290],[700,270],[800,245],[900,218],[1000,192]];   // fascia oblique entre LS et SC (vu de x ≈ 260 à 1000)
  /* ligne osseuse « en dents de scie » : sommet C2–C3 à gauche, creux de C3, sommet C3–C4, creux de C4, remontée vers C4–C5 */
  const B_OS = [[0,330],[40,320],[70,300],[100,282],[130,278],[160,290],[200,320],[250,360],[300,392],[340,408],[380,414],[420,408],[460,388],[500,368],[540,358],[580,352],[620,356],[660,378],[700,402],[740,420],[780,426],[820,418],[860,398],[900,372],[940,352],[1000,342]];

  /* ---------- echo-2 : panneau (i), para-sagittale postérieure, crânial à gauche ---------- */
  const I_PEAU = [[0,18],[1000,18]];
  const I_SC = [[0,48],[400,48],[700,50],[1000,52]];
  const I_L1 = [[0,74],[200,74],[400,76],[500,78],[700,82],[800,88],[900,93],[1000,94]];                   // fascia sous le trapèze : ligne la plus brillante, continue
  const I_L2 = [[0,112],[100,118],[200,135],[300,143],[400,148],[500,152],[600,156],[700,158],[800,160],[900,162],[1000,165]];
  const I_L3 = [[0,158],[100,170],[200,182],[300,190],[400,196],[500,205],[600,210],[700,215],[800,222],[900,230],[1000,236]];   // bande brillante épaisse (aponévrose)
  const I_L4 = [[0,250],[130,266],[300,288],[450,318],[540,340],[650,336],[800,320],[900,310],[1000,302]];
  const IAP1 = [[-40,440],[30,424],[80,410],[150,401],[200,396],[250,398],[285,407],[310,420],[318,432]];                  // processus articulaire inférieur (vertèbre sus-jacente)
  const SAP2 = [[292,447],[350,441],[400,434],[450,427],[500,422],[550,417],[600,410],[618,414],[628,430]];                 // processus articulaire supérieur (vertèbre sous-jacente) → son propre IAP
  const SAP3 = [[608,470],[650,462],[700,453],[800,437],[900,418],[1000,402],[1040,398]];
  const I_BAS = [].concat(IAP1.slice(0, 8), [[318,428],[330,446],[292,447]], SAP2.slice(1, 8), [[626,430],[612,468],[608,470]], SAP3.slice(1));   // bord bas du multifide = toit des trois segments osseux + les deux fentes

  ECHO.anat['facettes-cervicales'] = [{
    fig: 'img/facettes-cervicales/echo-1.jpg',
    valide: false,
    crop: [0.2975, 0, 0.3325, 0.1448],
    panneau: 'b (voie latérale)',
    vb: [1000, 601], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — orientation : mentions « superior » (gauche) et « inferior » (droite) incrustées par les auteurs ; sonde coronale sur la face latérale du cou (légende d\'origine). Même sens crânio-caudal que le schéma apparié, mais **autre plan** : le schéma est la coupe postérieure para-sagittale.',
      'Certain — identité des reliefs : le croquis incrusté des auteurs nomme les sommets C2-C3 et C3-C4 (articulations) et place les branches médiales (points roses) au fond des creux (piliers).',
      'Probable — ligne osseuse : creux de C3 (x ≈ 340–420, y ≈ 410), sommet C3–C4 (x ≈ 560–620, y ≈ 352), creux de C4 (x ≈ 740–800, y ≈ 425) et remontée caudale sont lus sur les pics de brillance ; le sommet C2–C3 est l\'arche brillante en haut à gauche (x ≈ 70–160, y ≈ 280). La pente entre C2–C3 et le creux de C3 (x 170–300) n\'est pas vue : pointillé.',
      'Supposition — plans musculaires : les auteurs ne donnent que les sigles LS (élévateur de la scapula) au-dessus et SC (semi-épineux de la tête) au-dessous du fascia oblique brillant qui monte vers la droite ; les contours sont posés sur ce fascia et sur la ligne brillante continue du bas du tissu sous-cutané (y ≈ 120). Rien n\'est désigné dans la zone superficielle feuilletée (0–120) : tissu sous-cutané par défaut. Image de 266 px : limites à ± 1 mm.',
      'Extrapolé — branches médiales C3 et C4 : dessinées au fond des creux d\'après le croquis des auteurs, non visibles sur l\'écho (points de 1 mm, hors résolution).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: B_PEAU },
      { id: 'sc', tissu: 'graisse', haut: B_PEAU, bas: B_SC },
      { id: 'ls', tissu: 'muscle', haut: B_SC, bas: B_F },
      { id: 'fascia', tissu: 'fascia', ligne: B_F.slice(2), ep: 7 },
      { id: 'sc-m', tissu: 'muscle', haut: B_F, bas: B_OS },
      { id: 'mb3', tissu: 'nerf', contour: ovale(380, 402, 12, 9), extrapole: true },
      { id: 'mb4', tissu: 'nerf', contour: ovale(780, 414, 12, 9), extrapole: true },
      { id: 'os', tissu: 'os', cortex: B_OS, vu: [[1, 5], [8, 25]] },
    ],
    labels: [
      { s: 'sc', x: 420, y: 70, dx: -120, dy: -2, text: 'Tissu sous-cutané' },
      { s: 'ls', x: 560, y: 205, dx: 90, dy: -115, text: 'Élévateur de la scapula (LS)', vue: 'anat' },
      { s: 'fascia', x: 900, y: 218, dx: -40, dy: -90, text: 'Fascia oblique LS / SC' },
      { s: 'sc-m', x: 820, y: 330, dx: -60, dy: -80, text: 'Semi-épineux de la tête (SC)', vue: 'anat' },
      { s: 'os', x: 115, y: 280, dx: 95, dy: -70, text: 'Sommet = interligne C2–C3' },
      { s: 'os', x: 590, y: 352, dx: -60, dy: 90, text: 'Sommet = interligne C3–C4' },
      { s: 'mb3', x: 380, y: 402, dx: -120, dy: 120, text: 'Creux = taille du pilier de C3, branche médiale', vue: 'anat' },
      { s: 'mb4', x: 780, y: 414, dx: 40, dy: 110, text: 'Creux = pilier de C4, branche médiale', vue: 'anat' },
      { s: 'os', x: 250, y: 360, dx: -170, dy: 70, text: 'Pente non vue (pointillé)', vue: 'echo' },
    ],
  }, {
    fig: 'img/facettes-cervicales/echo-2.jpg',
    valide: false,
    vb: [1000, 601], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — orientation : « superior » à gauche, « inferior » à droite incrustés par les auteurs ; sonde sagittale sur la nuque (légende d\'origine) : même orientation que le schéma apparié.',
      'Certain — identité des segments osseux : le croquis incrusté des auteurs nomme IAP (processus articulaire inférieur, segment crânial et superficiel) et SAP (processus articulaire supérieur, segment caudal et plus profond) ; la fente entre les deux est l\'interligne, visé par leur flèche. Le niveau vertébral n\'est pas donné.',
      'Certain — la flèche bleue est le **trajet dessiné par les auteurs** (texte : « advanced in-plane from an inferior-to-superior trajectory »), pas une aiguille réelle : reportée en pointillé.',
      'Probable — corticales : IAP de x ≈ 30 à 310 (toit brillant y ≈ 396–424), SAP de x ≈ 290 à 620 (y ≈ 447 → 410) avec le ressaut sous l\'IAP, troisième segment de x ≈ 610 à 1000 (y ≈ 470 → 402) après un second ressaut ; placées sur les pics de brillance. Les deux fentes articulaires sont dessinées obliques (de superficiel-caudal vers profond-crânial), comme l\'obliquité des facettes cervicales : leur largeur (≈ 1 mm) est sous la résolution de l\'image.',
      'Certain — ordre des plans musculaires, du haut vers le bas : trapèze (T), splénius (Sp), semi-épineux de la tête (SCa), semi-épineux du cou (SCe), multifide (M) — sigles des auteurs à droite de l\'image.',
      'Supposition — limites de ces plans : seule la ligne brillante continue sous le trapèze (y ≈ 74 → 94) est certaine ; les autres contours suivent les lignes visibles les plus proches de chaque sigle (y ≈ 150, bande épaisse y ≈ 160–235, ligne y ≈ 265–340). Image de 248 px : chaque limite peut se tromper d\'un plan.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: I_PEAU },
      { id: 'sc', tissu: 'graisse', haut: I_PEAU, bas: I_SC },
      { id: 'trap', tissu: 'muscle', haut: I_SC, bas: I_L1 },
      { id: 'f1', tissu: 'fascia', ligne: I_L1, ep: 5 },
      { id: 'spl', tissu: 'muscle', haut: I_L1, bas: I_L2 },
      { id: 'sca', tissu: 'muscle', haut: I_L2, bas: I_L3 },
      { id: 'f3', tissu: 'fascia', ligne: I_L3, ep: 7 },
      { id: 'sce', tissu: 'muscle', haut: I_L3, bas: I_L4 },
      { id: 'mult', tissu: 'muscle', haut: I_L4, bas: I_BAS },
      { id: 'iap', tissu: 'os', cortex: IAP1 },
      { id: 'sap', tissu: 'os', cortex: SAP2 },
      { id: 'os3', tissu: 'os', cortex: SAP3 },
      { id: 'fente', tissu: 'liquide', fin: true, contour: [[316,418],[338,426],[300,462],[278,454]] },
      { id: 'fente2', tissu: 'liquide', fin: true, contour: [[614,412],[636,418],[618,476],[596,470]] },
      { id: 'trajet', tissu: 'aiguille', ligne: [[855,72],[338,426]], ep: 5, extrapole: true },
    ],
    labels: [
      { s: 'trap', x: 300, y: 61, dx: -120, dy: 45, text: 'Trapèze (T)', vue: 'anat' },
      { s: 'spl', x: 150, y: 96, dx: 60, dy: 70, text: 'Splénius (Sp)', vue: 'anat' },
      { s: 'sca', x: 560, y: 180, dx: -140, dy: 65, text: 'Semi-épineux de la tête (SCa)', vue: 'anat' },
      { s: 'sce', x: 760, y: 270, dx: 90, dy: -60, text: 'Semi-épineux du cou (SCe)', vue: 'anat' },
      { s: 'mult', x: 740, y: 390, dx: 120, dy: 60, text: 'Multifide (M)', vue: 'anat' },
      { s: 'iap', x: 160, y: 401, dx: -50, dy: 164, text: 'Proc. articulaire inférieur (IAP)' },
      { s: 'sap', x: 480, y: 424, dx: 150, dy: 136, text: 'Proc. articulaire supérieur (SAP)' },
      { s: 'fente', x: 322, y: 430, dx: -22, dy: 90, text: 'Interligne = cible' },
      { s: 'fente2', x: 618, y: 440, dx: 202, dy: 80, text: 'Interligne sous-jacent' },
      { s: 'trajet', x: 700, y: 178, dx: 80, dy: -90, text: 'Trajet caudo-crânial (flèche des auteurs)' },
    ],
  }];
})();
