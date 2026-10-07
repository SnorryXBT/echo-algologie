/* Coupes anatomiques recalées — nerf cutané latéral de la cuisse (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : panneau c de Lin et al. (J Med Ultrasound 2026, fig. 4c), 270 px, image vierge ; le panneau d, colorisé par les auteurs, vient d'un
   autre cliché et ne sert qu'aux positions relatives (SAR en haut à gauche, TFL à droite, REC en profondeur, LFCN dans le dédoublement du fascia).
   Tracée le 7 octobre 2026 sur la lecture de Mat : le grand ovale sombre en bas à gauche est le droit fémoral ; le nerf est le petit ovale pris
   dans le dédoublement de la bande brillante superficielle (x ≈ 430, y ≈ 148). */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const PEAU = [[0,30],[1000,30]];
  /* fascia lata : bande brillante continue, épaissie à droite ; dédoublée en x ≈ 380–470 autour du nerf */
  const FL_HAUT = [[0,120],[100,122],[200,118],[300,140],[350,135],[400,137],[450,140],[500,138],[600,145],[700,145],[800,156],[900,163],[1000,170]];
  const FL_BAS = [[0,137],[100,133],[200,140],[300,159],[350,170],[400,166],[450,159],[500,162],[600,166],[700,166],[800,170],[850,181],[900,188],[1000,205]];
  /* lignes échogènes obliques sous le fascia, à droite : feuillets non désignés par les auteurs */
  const L1 = [[520,172],[600,190],[650,205],[700,194],[750,189],[800,192],[850,202],[900,215],[950,220],[1000,228]];
  const L2 = [[540,240],[600,250],[650,262],[700,262],[750,272],[800,272],[850,263],[900,253],[950,256],[1000,262]];
  const TFL_TOP = [[478,230],[520,262],[600,276],[650,320],[700,312],[750,312],[800,312],[850,302],[900,330],[950,372],[1000,390]];
  /* droit fémoral : grand ovale hypoéchogène, bord brillant en haut à gauche */
  const REC = [[110,440],[140,395],[180,365],[230,348],[300,342],[370,345],[420,370],[460,410],[490,470],[500,540],[495,620],[470,700],[430,770],[400,800],[120,800],[95,700],[90,600],[95,520]];
  ECHO.anat['nerf-cutane-lateral-cuisse'] = [{
    fig: 'img/nerf-cutane-lateral-cuisse/echo-1.jpg',
    valide: false,
    vb: [1000, 800], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : le grand ovale sombre en bas à gauche est le droit fémoral ; le nerf est le petit ovale pris dans le dédoublement de la bande brillante superficielle (fascia lata), x ≈ 380–470, y ≈ 140–155.',
      'Probable — orientation : médial à gauche (sartorius et droit fémoral), latéral à droite (tenseur du fascia lata), d\'après la disposition du panneau d des auteurs ; même orientation que le schéma apparié (sartorius en dedans, TFL en dehors).',
      'Probable — sartorius : plan musculaire entre le fascia lata et le bord brillant supérieur du droit fémoral (ligne y ≈ 305 → 350, x 0–400), en dedans du nerf ; tenseur du fascia lata : masse musculaire à droite, sous les feuillets obliques, en dehors du droit fémoral. Identités reprises du panneau d (autre cliché, non recalé).',
      'Supposition — zone feuilletée entre le fascia lata et le tenseur (x > 480, y 165–320) : deux ou trois lignes échogènes parallèles, non désignées ; dessinée en graisse interfasciale (le sillon graisseux du nerf), limite supérieure du tenseur posée sur la ligne la plus profonde (y ≈ 300–320). Le nerf réel ne mesure que 16 × 4 px : son contour est un ovale posé dans le dédoublement, aucun fascicule résolu.',
      'Supposition — bande à gauche du droit fémoral (x < 110, y > 320) : texture différente, non attribuée (vaste intermédiaire ? ilio-psoas ?). Peau et tissu sous-cutané : première ligne brillante y ≈ 25 puis septa.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: FL_HAUT },
      { id: 'sar', tissu: 'muscle', contour: [[0,137],[100,133],[200,140],[300,159],[400,166],[470,164],[478,230],[455,300],[420,358],[370,345],[300,342],[230,348],[170,335],[100,322],[0,305]] },
      { id: 'inter', tissu: 'graisse', haut: FL_BAS.slice(6), bas: TFL_TOP },
      { id: 'tfl', tissu: 'muscle', contour: TFL_TOP.concat([[1000,800],[400,800],[430,770],[470,700],[495,620],[500,540],[490,470],[460,410],[420,370],[420,358],[455,300]]) },
      { id: 'gauche', tissu: 'indetermine', contour: [[0,305],[100,322],[170,335],[160,372],[130,410],[110,440],[95,520],[90,600],[95,700],[120,800],[0,800]] },
      { id: 'rec', tissu: 'muscle', contour: REC },
      { id: 'l1', tissu: 'fascia', ligne: L1, ep: 5 },
      { id: 'l2', tissu: 'fascia', ligne: L2, ep: 5 },
      { id: 'fl', tissu: 'fascia', haut: FL_HAUT, bas: FL_BAS },
      { id: 'nerf', tissu: 'nerf', contour: ovale(428, 148, 44, 9) },
    ],
    labels: [
      { s: 'sc', x: 700, y: 75, dx: 150, dy: -45, text: 'Tissu sous-cutané' },
      { s: 'fl', x: 200, y: 129, dx: -40, dy: -70, text: 'Fascia lata' },
      { s: 'nerf', x: 428, y: 148, dx: 130, dy: -88, text: 'N. cutané latéral de la cuisse (dans le dédoublement)' },
      { s: 'sar', x: 200, y: 240, dx: -40, dy: 0, text: 'Sartorius (probable)' },
      { s: 'inter', x: 720, y: 240, dx: 100, dy: -40, text: 'Sillon graisseux interfascial (supposé)' },
      { s: 'rec', x: 300, y: 560, dx: 0, dy: 90, text: 'Droit fémoral' },
      { s: 'tfl', x: 760, y: 520, dx: 40, dy: 120, text: 'Tenseur du fascia lata (probable)' },
      { s: 'gauche', x: 50, y: 600, dx: 90, dy: 140, text: 'Plan non attribué' },
    ],
  }];
})();
