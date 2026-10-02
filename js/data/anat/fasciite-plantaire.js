/* Coupes anatomiques recalées — fasciopathie plantaire (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : coupe longitudinale de l'insertion, Kim et al., Ultrasonography 2022, fig. 3 (sigle « Calcaneus », double flèche, astérisque).
   echo-2 (Choi et al., fig. 2, nerf de Baxter) : non tracée — limites musculaires non désignées, rapport de la pointe à l'intervalle indécidable (voir zz-refus.js). */
(function () {
  const DERME = [[0,78],[200,80],[450,80],[600,70],[750,63],[1000,60]];
  /* corticale plantaire de la tubérosité (bord superficiel de la bande brillante), puis face antérieure ; les deux derniers points sont dans le cône d'ombre */
  const CORTEX = [[0,252],[70,254],[150,251],[200,250],[250,242],[300,244],[350,246],[400,245],[425,246],[434,266],[442,290],[452,315],[464,338],[470,362],[476,430],[482,600]];
  /* bord superficiel du fascia : biseau de l'enthèse, sommet au droit de la double flèche des auteurs, puis sous l'astérisque */
  const FS = [[70,254],[110,222],[170,204],[230,180],[280,156],[330,132],[400,122],[450,126],[500,142],[560,155],[640,157],[700,152],[760,150],[850,145],[950,138],[1000,135]];
  /* bord profond retenu en aval de l'insertion : sous la bande fibrillaire brillante */
  const FD = [[425,246],[480,244],[550,234],[650,222],[750,215],[850,213],[920,202],[1000,190]];
  /* ligne très brillante, 2 à 3 mm plus profonde : toit du ventre hypoéchogène du court fléchisseur */
  const L270 = [[434,266],[480,266],[560,266],[650,266],[700,274],[750,274],[850,274],[950,271],[1000,270]];
  const FDB_BAS = [[464,338],[500,358],[560,372],[650,378],[700,376],[800,370],[900,364],[1000,360]];
  ECHO.anat['fasciite-plantaire'] = [{
    fig: 'img/fasciite-plantaire/echo-1.jpg',
    valide: false,
    vb: [1000, 561], orient: { left: 'Postérieur (calcanéus)', right: 'Antérieur' },
    lecture: [
      'Probable — bord profond du fascia en aval de l\'insertion : tracé sous la bande fibrillaire brillante (y ≈ 215), ce qui donne un fascia fusiforme, épais à l\'insertion et plus mince en distal, conforme à la description des auteurs (« fusiform thickening »). La bande striée située dessous (y 215–270), fermée par une ligne très brillante, est laissée en plan non attribué : fibres profondes du fascia (il serait alors aussi épais en distal qu\'à l\'insertion) ou portion superficielle du court fléchisseur. L\'interface cible de la fiche — face profonde du fascia / court fléchisseur — est l\'une de ces deux lignes : à trancher par Mat.',
      'Certain — orientation et repères : calcanéus à gauche (sigle des auteurs, cône d\'ombre), fascia en grand axe vers l\'avant à droite ; épaisseur du fascia à l\'insertion donnée par la double flèche des auteurs, au bord antéro-inférieur du calcanéus (> 4 mm) ; hypoéchogénicité périfasciale désignée par l\'astérisque, superficielle au fascia. Même orientation que le schéma apparié.',
      'Certain — coupe de repérage, sans aiguille : le geste de la fiche se fait en coupe transversale, par voie médiale ; l\'aiguille arriverait ici perpendiculairement au plan de l\'image, vers la face profonde du fascia à l\'insertion, jamais dans le coussinet.',
      'Probable — court fléchisseur des orteils : ventre hypoéchogène à cloison centrale brillante, immédiatement en avant de la tubérosité ; non désigné par les auteurs. Son origine, échogène, n\'est pas séparable du relief osseux.',
      'Probable — limite peau / coussinet graisseux (y ≈ 60–80) : passage de la bande homogène superficielle aux lobules. Limite postérieure de l\'enthèse sur la tubérosité (x < 200) : biseau hypoéchogène, extrémité non résolue.',
      'Supposition — relief brillant convexe au bord antérieur de la tubérosité (x 425–465) : dessiné comme face antérieure du calcanéus ; un enthésophyte donnerait la même image.',
      'Extrapolé — corticale en arrière de x = 150 (signal faible) et face antérieure du calcanéus sous y = 340 (cône d\'ombre). Plan situé sous le court fléchisseur (carré plantaire ? ligament plantaire long ?) : non attribué.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'coussinet', tissu: 'graisse', haut: DERME, bas: CORTEX.slice(0, 1).concat(FS) },
      { id: 'oedeme', tissu: 'liquide', fin: true, contour: [[495,141],[520,130],[570,126],[620,132],[652,150],[640,157],[560,155],[500,142]] },
      { id: 'fascia', tissu: 'ligament', enthese: 0.4, haut: FS, bas: CORTEX.slice(1, 8).concat(FD) },
      { id: 'plan', tissu: 'indetermine', haut: FD, bas: L270 },
      { id: 'fdb', tissu: 'muscle', haut: L270, bas: FDB_BAS },
      { id: 'profond', tissu: 'indetermine', haut: FDB_BAS, bas: [[470,600],[1000,600]] },
      { id: 'os', tissu: 'os', cortex: CORTEX, vu: [2, 12] },
    ],
    labels: [
      { s: 'peau', x: 60, y: 64, dx: 60, dy: -36, text: 'Peau plantaire' },
      { s: 'coussinet', x: 300, y: 110, dx: 140, dy: -82, text: 'Coussinet graisseux du talon' },
      { s: 'oedeme', x: 600, y: 140, dx: 200, dy: -112, text: 'Œdème périfascial', vue: 'anat' },
      { s: 'plan', x: 880, y: 243, dx: -5, dy: -138, text: 'Plan non attribué' },
      { s: 'fascia', x: 330, y: 195, dx: -165, dy: 140, text: 'Fascia plantaire épaissi' },
      { s: 'os', x: 380, y: 290, dx: -80, dy: 160, text: 'Calcanéus', vue: 'anat' },
      { s: 'fdb', x: 780, y: 322, dx: -50, dy: 118, text: 'Court fléchisseur des orteils' },
      { s: 'profond', x: 535, y: 492, dx: 225, dy: 35, text: 'Plan profond non attribué' },
    ],
  }];
})();
