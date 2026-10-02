/* Coupes anatomiques recalées — nerf grand occipital, approche proximale C2 (format : .claude/skills/echo-anatomie/SKILL.md).
   Seule la coupe de repérage (echo-1, panneau B de Zhang et al.) est tracée. La seconde image (echo-2, deux panneaux A/B
   photographiés à l'écran, sans orientation ni repère osseux) ne l'est pas : orientation indécidable sur pièces. */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  const rev = a => a.slice().reverse();
  /* sonde convexe : la surface cutanée est un arc concave vers le haut ; tous les plans suivent cette courbure */
  const ARC = [[165,2],[200,28],[250,58],[300,82],[350,99],[400,112],[450,119],[500,123],[550,121],[600,114],[650,104],[700,87],[750,66],[800,38],[848,2]];
  const PEAU_BAS = [[140,32],[200,66],[250,95],[300,118],[350,135],[400,148],[450,155],[500,159],[550,157],[600,150],[650,140],[700,123],[750,102],[800,74],[870,32]];
  const LAME_HAUT = [[106,138],[150,146],[200,150],[250,165],[300,173],[350,195],[400,208],[450,220],[500,224],[550,222],[600,216],[650,200],[700,193],[750,180],[800,160],[850,135]];
  const LAME_BAS = [[150,205],[200,204],[250,207],[300,216],[350,242],[400,270],[450,280],[500,284],[550,280],[600,277],[650,270],[700,258],[750,238],[800,217],[850,195]];
  /* fascia profond (segment c des auteurs) : pics mesurés 277, 294, 306, 308, 315, 316, 311, 305, 299 */
  const FASCIA = [[150,258],[200,277],[225,281],[250,294],[285,304],[350,309],[400,315],[450,316],[500,311],[550,305],[600,303],[650,305],[700,300],[750,290],[800,275],[850,255]];
  /* limite profonde de l'OCI : extrémité basse du segment b (x = 285, y = 445) puis bande brillante mesurée à y ≈ 425–440 */
  const OCI_BAS = [[150,415],[210,437],[285,447],[350,443],[420,440],[500,437],[560,430],[620,412],[700,388],[780,362],[850,340]];
  ECHO.anat['nerf-grand-occipital'] = [{
    fig: 'img/nerf-grand-occipital/echo-1.jpg',
    valide: false,
    vb: [1000, 798], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Probable — orientation : médial à gauche, comme le schéma apparié. Les auteurs ne l\'écrivent pas et aucun repère osseux latéralisant (épineuse de C2, processus transverse de C1) n\'est dans le champ. Elle est déduite de leur méthode — épaisseurs a, b, c mesurées « à 1,5 cm en dehors de l\'épineuse de C2 », or ces segments sont dans le tiers gauche de l\'image — et de l\'épaississement du semi-épineux vers la gauche. À confirmer par Mat avant toute validation.',
      'Supposition — plans situés au-dessus du semi-épineux : la fiche attend trapèze puis splénius ; à 5 MHz (sonde convexe) ils ne sont pas séparables. Un plan superficiel sombre et une lame hyperéchogène épaisse (fascia ? splénius ?) sont dessinés sans nom.',
      'Supposition — tissu compris entre la limite profonde de l\'oblique inférieur (extrémité du segment b des auteurs) et le plan osseux : non identifié, laissé sans anatomie.',
      'Probable — plan osseux : réflecteur linéaire à ≈ 4 cm suivi d\'un cône d\'ombre (lame de C2 ou arc postérieur de C1 : les auteurs ne le désignent pas).',
      'Certain — semi-épineux de la tête, fascia profond et oblique inférieur : désignés par les segments de mesure a, c et b des auteurs et par leur légende ; limites tracées sur les pics de brillance. Leurs extrémités (x < 200 et x > 650) sont Probables.',
      'Certain — nerf grand occipital : position donnée par l\'étoile des auteurs, dans le fascia qui sépare le semi-épineux de l\'oblique inférieur, à ≈ 1,6 cm de la peau. Extrapolé — son contour, masqué par l\'étoile.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: ARC, bas: PEAU_BAS },
      { id: 'sup', tissu: 'conjonctif', haut: PEAU_BAS, bas: LAME_HAUT },
      { id: 'lame', tissu: 'fascia', haut: LAME_HAUT.slice(1), bas: LAME_BAS },
      /* semi-épineux : fibres crânio-caudales, coupées en travers par ce plan axial oblique */
      { id: 'ssc', tissu: 'muscle', contour: LAME_BAS.concat(rev(FASCIA)) },
      /* oblique inférieur : vu dans son grand axe (épineuse de C2 → processus transverse de C1) */
      { id: 'oci', tissu: 'muscle', haut: FASCIA, bas: OCI_BAS },
      { id: 'fascia', tissu: 'fascia', ligne: FASCIA, ep: 8 },
      { id: 'gon', tissu: 'nerf', contour: ovale(480, 310, 22, 10), extrapole: true },
      { id: 'os', tissu: 'os', cortex: [[180,632],[230,618],[300,606],[350,601],[400,603],[450,601],[500,601],[560,606]], vu: [1, 6] },
    ],
    labels: [
      { s: 'gon', x: 482, y: 300, dx: 168, dy: -275, text: 'Nerf grand occipital' },
      { s: 'sup', x: 400, y: 182, dx: 70, dy: -110, text: 'Plans superficiels' },
      { s: 'ssc', x: 290, y: 262, dx: -120, dy: 428, text: 'Semi-épineux de la tête' },
      { s: 'lame', x: 700, y: 226, dx: 160, dy: 464, text: 'Lame hyperéchogène' },
      { s: 'os', x: 420, y: 620, dx: -90, dy: 130, text: 'Plan osseux probable' },
      { s: 'oci', x: 560, y: 380, dx: 120, dy: 370, text: 'Oblique inférieur de la tête' },
    ],
  }];
})();
