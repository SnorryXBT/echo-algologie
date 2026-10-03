/* Coupes anatomiques recalées — branches terminales du trijumeau (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : foramen infra-orbitaire (Wang et al., Diagnostics 2026, fig. 1a). echo-2 (voie sous-zygomatique, Taha et al. 2025) :
   NON TRACÉE — aucune corticale visible sous les sigles A (coronoïde) et B (condyle), lecture soumise à Mat. */
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
  }];
})();
