/* Coupes anatomiques recalées — branches terminales du trijumeau (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : foramen infra-orbitaire (Wang et al., Diagnostics 2026, fig. 1a).
   echo-2 : voie sous-zygomatique pour V3 (Yildiz & Akkaya, Cureus 2024, fig. 2) — la figure affiche le panneau C (annoté) ; la coupe est
            tracée sur le panneau B, même image vierge (`crop` propre à l'entrée : `anat-grid.js nerfs-trijumeau-terminaux 1 <dossier> 0.58,0,0.42,0.499`),
            les positions de CoP, CP et LPP étant reportées des pointillés des auteurs sur le panneau C. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const PEAU = [[0,45],[1000,45]];
  const OOC_HAUT = [[0,250],[150,250],[300,248],[380,245],[440,235],[490,215],[530,185],[580,165],[650,150],[700,132],[800,125],[900,125],[1000,120]];
  const OOC_BAS = [[0,300],[150,300],[300,295],[380,290],[440,275],[490,250],[530,215],[580,192],[650,188],[700,188],[800,188],[900,185],[1000,180]];
  const LLS_HAUT = [[0,300],[150,300],[300,295],[380,290],[440,277],[490,262],[530,250],[600,250],[700,250],[800,250],[900,255],[1000,255]];
  /* corticale du maxillaire : segment latéral, encoche du foramen (lèvre latérale, fond, lèvre médiale), puis paroi médiale ascendante
     passant par la pointe des quatre têtes de flèche noires des auteurs */
  const CORTEX = [[0,535],[100,530],[200,528],[280,522],[325,513],[345,530],[370,548],[400,552],[435,546],[455,524],[475,503],[510,498],[550,512],[600,520],[628,517],[697,443],[750,392],[800,350],[860,318],[912,300],[1000,285]];
  ECHO.anat['nerfs-trijumeau-terminaux'] = [{
    fig: 'img/nerfs-trijumeau-terminaux/echo-1.jpg',
    valide: true,
    vb: [1000, 994], orient: { left: 'Latéral', right: 'Médial (nez)' },
    lecture: [
      'Supposition — limites des deux muscles : image de 361 px, speckle grossier. Les auteurs donnent l\'ordre (orbiculaire de l\'œil en surface, élévateur de la lèvre supérieure en profondeur, sigles OOC et LLS), pas les contours. L\'orbiculaire est tracé sur la bande hypoéchogène oblique (nette en dedans, y ≈ 125–190 ; masquée par le sigle OOC au milieu ; devinée en dehors) ; l\'élévateur est dessiné comme la couche posée sur l\'os, sans limite latérale identifiable — la plage ovale hypoéchogène en dehors (x ≈ 30–190, y ≈ 340–440) n\'est pas nommée.',
      'Certain — orientation : mention « Lateral ↔ Medial » incrustée par les auteurs ; image en miroir du schéma apparié (dit dans la légende).',
      'Certain — foramen infra-orbitaire (tête de flèche blanche) avec le spot Doppler de l\'artère infra-orbitaire ; paroi osseuse médiale (pointes des quatre têtes de flèche noires) ; maxillaire — désignés par les auteurs (légende d\'origine).',
      'Probable — corticale latérale au foramen : interface à y ≈ 530, pic de brillance constant de x = 50 à x = 200, puis extinction ; le foramen est tracé comme une encoche dont le fond est le liseré brillant à y ≈ 548 sous le spot Doppler.',
      'Supposition — bande hyperéchogène entre les deux muscles en dedans (y ≈ 190–250) lue comme la graisse sous-orbiculaire.',
      'Extrapolé — nerf infra-orbitaire : non individualisable ; dessiné contre l\'artère, dans la plage hypoéchogène qui prolonge le spot Doppler en dedans. Profondeur de l\'os (cône d\'ombre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: OOC_HAUT },
      { id: 'ooc', tissu: 'muscle', haut: OOC_HAUT, bas: OOC_BAS },
      { id: 'soof', tissu: 'graisse', haut: OOC_BAS.slice(4), bas: LLS_HAUT.slice(4) },
      { id: 'lls', tissu: 'muscle', haut: LLS_HAUT, bas: CORTEX },
      { id: 'artere', tissu: 'artere', contour: ovale(390, 490, 24, 20) },
      { id: 'nerf', tissu: 'nerf', contour: ovale(441, 492, 21, 14, -8), extrapole: true },
      /* corticale vue sur toute sa longueur : pas de `vu`. Points hors cadre aux deux bouts : le calque de validation referme le tracé
         par une droite, qui barrerait sinon le muscle en diagonale */
      { id: 'maxillaire', tissu: 'os', cortex: [[-40,1100],[-40,535]].concat(CORTEX, [[1040,285],[1040,1100]]) },
    ],
    labels: [
      { s: 'sc', x: 170, y: 165, dx: 0, dy: -103, text: 'Graisse sous-cutanée' },
      { s: 'ooc', x: 640, y: 168, dx: -120, dy: -106, text: 'Orbiculaire de l\'œil', vue: 'anat' },
      { s: 'soof', x: 830, y: 220, dx: 0, dy: -158, text: 'Graisse sous-orbiculaire' },
      { s: 'nerf', x: 441, y: 488, dx: -141, dy: -98, text: 'Nerf infra-orbitaire', vue: 'anat' },
      { s: 'maxillaire', x: 805, y: 348, dx: 45, dy: 122, text: 'Paroi osseuse médiale', vue: 'anat' },
      { s: 'lls', x: 600, y: 400, dx: 160, dy: 210, text: 'Élévateur de la lèvre supérieure', vue: 'anat' },
      { s: 'artere', x: 390, y: 492, dx: -175, dy: 138, text: 'Artère infra-orbitaire (Doppler)' },
      { s: 'maxillaire', x: 385, y: 553, dx: 95, dy: 147, text: 'Foramen infra-orbitaire', vue: 'anat' },
      { s: 'maxillaire', x: 800, y: 760, dx: -30, dy: 140, text: 'Maxillaire', vue: 'anat' },
      { s: 'maxillaire', x: 850, y: 650, dx: -50, dy: 110, text: 'Cône d\'ombre du maxillaire', vue: 'echo' },
    ],
  }, {
    fig: 'img/nerfs-trijumeau-terminaux/echo-2.jpg',
    valide: false,
    crop: [0.58, 0, 0.42, 0.499],
    panneau: 'B (image vierge ; corrigé = panneau C)',
    vb: [1000, 829], orient: { left: 'Antérieur', right: 'Postérieur' },
    lecture: [
      'Certain — orientation : coronoïde (CoP) à gauche, condyle (CP) à droite, nommés par les auteurs sur le panneau C : antérieur à gauche, même sens que le schéma apparié.',
      'Certain — les trois réflecteurs osseux : coronoïde (plage très brillante x ≈ 130–330, y ≈ 255–300, ombre dessous), condyle (plage brillante x ≈ 690–830, y ≈ 215–250) et lame ptérygoïdienne latérale (ligne brillante oblique x ≈ 230–700, y ≈ 740 → 650) — positions reportées des pointillés des auteurs (panneau C) et retrouvées sur les pics de brillance du panneau B. Coronoïde et condyle sont dessinés comme des réflecteurs courts (plaques vues en coupe), la lame comme un os plein.',
      'Certain — la flèche verticale des auteurs est une direction d\'aiguille (perpendiculaire, entre coronoïde et condyle jusqu\'à la lame), pas une aiguille vue : reportée en pointillé. Le schéma apparié propose un abord oblique dans le plan : les deux ne sont pas superposables.',
      'Supposition — plans mous, non désignés par les auteurs : bande brillante superficielle 20–95 en tissu sous-cutané ; masséter de ≈ 95 à la ligne brillante y ≈ 215–250 ; entre cette ligne et le sommet des os / du ptérygoïdien, un plan laissé non attribué (tendon du temporal vers le coronoïde, graisse) ; ptérygoïdien latéral = zone grise mouchetée de la fenêtre, de y ≈ 300 à la lame.',
      'Extrapolé — nerf mandibulaire : en arrière et en dedans de la lame, hors du champ utile ; dessiné à titre indicatif sous l\'extrémité postérieure de la lame. Artère maxillaire : non visible (pas de Doppler), non dessinée.',
      'Image de 315 px : les limites des plans mous sont à ± 1,5 mm ; seules les corticales et l\'orientation sont fiables.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,20],[1000,20]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,20],[1000,20]], bas: [[0,95],[300,98],[600,95],[1000,90]] },
      { id: 'mass', tissu: 'muscle', haut: [[0,95],[300,98],[600,95],[1000,90]], bas: [[0,255],[100,262],[200,250],[300,245],[400,235],[500,225],[600,222],[700,215],[800,215],[900,235],[1000,250]] },
      { id: 'plan', tissu: 'indetermine', haut: [[0,255],[100,262],[200,250],[300,245],[400,235],[500,225],[600,222],[700,215],[800,215],[900,235],[1000,250]], bas: [[0,300],[100,300],[130,268],[200,255],[260,258],[330,272],[380,300],[450,302],[550,292],[640,270],[690,222],[760,215],[830,230],[880,260],[1000,290]] },
      { id: 'lpm', tissu: 'muscle', haut: [[0,300],[100,300],[130,268],[200,255],[260,258],[330,272],[380,300],[450,302],[550,292],[640,270],[690,222],[760,215],[830,230],[880,260],[1000,290]], bas: [[0,790],[200,750],[300,736],[430,702],[560,662],[640,648],[700,655],[1000,700]] },
      { id: 'v3', tissu: 'nerf', contour: (function () { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(760 + 22 * Math.cos(t)), Math.round(690 + 16 * Math.sin(t))]); } return o; })(), extrapole: true },
      { id: 'cop', tissu: 'os', cortex: [[100,300],[130,268],[200,255],[260,258],[330,272],[380,300]], profondeur: 110 },
      { id: 'cp', tissu: 'os', cortex: [[640,262],[690,222],[760,215],[830,230],[880,260]], profondeur: 110 },
      { id: 'lpp', tissu: 'os', cortex: [[200,750],[300,736],[430,702],[560,662],[640,648],[700,655]] },
      { id: 'trajet', tissu: 'aiguille', ligne: [[515,243],[515,635]], ep: 5, extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 300, y: 60, dx: -140, dy: 0, text: 'Tissu sous-cutané' },
      { s: 'mass', x: 820, y: 150, dx: 80, dy: -28, text: 'Masséter', vue: 'anat' },
      { s: 'plan', x: 500, y: 265, dx: -40, dy: -100, text: 'Plan non attribué (tendon du temporal ?)', vue: 'anat' },
      { s: 'cop', x: 230, y: 258, dx: -40, dy: -120, text: 'Processus coronoïde (CoP)' },
      { s: 'cp', x: 760, y: 216, dx: 60, dy: 110, text: 'Processus condylien (CP)' },
      { s: 'lpm', x: 420, y: 480, dx: -150, dy: 60, text: 'Ptérygoïdien latéral', vue: 'anat' },
      { s: 'lpm', x: 560, y: 420, dx: 220, dy: 20, text: 'Fenêtre entre coronoïde et condyle', vue: 'echo' },
      { s: 'lpp', x: 470, y: 690, dx: -170, dy: 80, text: 'Lame ptérygoïdienne latérale (LPP)' },
      { s: 'v3', x: 760, y: 690, dx: 60, dy: 70, text: 'V3 : en arrière de la lame, non visible', vue: 'anat' },
      { s: 'trajet', x: 515, y: 560, dx: 200, dy: 80, text: 'Direction d\'aiguille des auteurs (perpendiculaire)' },
      { s: 'cop', x: 150, y: 450, dx: 30, dy: 80, text: 'Ombre du coronoïde', vue: 'echo' },
    ],
  }];
})();
