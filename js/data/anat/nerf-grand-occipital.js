/* Coupes anatomiques recalées — nerf grand occipital (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : coupe transversale oblique à C2 (Dadali et al., Medicina 2026, fig. 2, CC BY 4.0) — médial à gauche inscrit par les auteurs,
            SSCM / OCIM / lame de C2 désignés, étoile = GON, pointillé = trajet latéro-médial de la canule.
   echo-2 (Monteiro et al., Cureus 2026) : non tracée, gardée comme illustration (décision de Mat, 3 octobre 2026). */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  const PEAU = [[0,85],[300,82],[600,80],[1000,78]];                                                              // bande sombre superficielle (gel + derme)
  const SC = [[0,185],[200,188],[400,190],[600,192],[800,188],[1000,180]];                                         // bas de la bande échogène sous-cutanée (double ligne brillante)
  const U = [[0,250],[200,255],[400,250],[600,245],[800,245],[1000,262]];                                          // face superficielle du semi-épineux
  const T = [[0,440],[150,436],[300,414],[400,392],[500,378],[600,386],[700,404],[800,418],[900,428],[1000,434]];   // toit de la bande graisseuse interfasciale (face profonde du SSCM)
  const B = [[0,470],[150,466],[300,444],[400,422],[500,410],[600,418],[700,436],[800,450],[900,458],[1000,464]];   // plancher de la bande (face dorsale de l'OCI)
  const F = [[0,500],[150,520],[300,565],[450,585],[600,590],[750,585],[900,560],[1000,540]];                        // plancher de l'OCI = lame de C2 (désignée, non résolue)
  ECHO.anat['nerf-grand-occipital'] = [{
    fig: 'img/nerf-grand-occipital/echo-1.jpg',
    valide: false,
    vb: [1000, 693], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — orientation : « Medial » à gauche, « Lateral » à droite incrustés par les auteurs ; même orientation que le schéma apparié. L\'épineuse de C2 est hors champ en dedans.',
      'Certain — identité des deux muscles (sigles SSCM et OCIM des auteurs) et du plan cible : l\'étoile est posée dans la bande échogène épaisse (y ≈ 380–460) qui sépare le semi-épineux de la tête de l\'oblique inférieur — bande lue comme le plan graisseux interfascial, dessinée en graisse entre deux fascias.',
      'Certain — le pointillé est le trajet prévu de la canule (texte : « in-plane lateral-to-medial approach »), pas une aiguille vue : reporté en pointillé.',
      'Extrapolé — nerf grand occipital : non individualisé sur l\'image (la cible des auteurs est l\'étoile) ; dessiné au point de l\'étoile, dans la bande graisseuse.',
      'Extrapolé — lame de C2 : désignée par les auteurs en bas à droite, mais aucune corticale franche ni cône d\'ombre net : tracée en pointillé au plancher de la zone grise de l\'OCI (y ≈ 585 au centre). À confirmer.',
      'Supposition — plans superficiels, non désignés : bande sombre 0–85 (gel et derme ?) en « peau », bande échogène feuilletée 85–185 en tissu sous-cutané, puis un plan mince (185–250) laissé non attribué — trapèze et/ou splénius, que les auteurs ne nomment pas.',
      'Probable — limites du semi-épineux (fuseau sombre moucheté, y ≈ 250–400 au centre) et de l\'oblique inférieur (zone grise sous la bande, s\'amincissant en dedans vers l\'épineuse hors champ).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: SC },
      { id: 'plan', tissu: 'indetermine', haut: SC, bas: U },
      { id: 'sscm', tissu: 'muscle', haut: U, bas: T },
      { id: 'f1', tissu: 'fascia', ligne: T, ep: 5 },
      { id: 'inter', tissu: 'graisse', haut: T, bas: B },
      { id: 'f2', tissu: 'fascia', ligne: B, ep: 5 },
      { id: 'ocim', tissu: 'muscle', haut: B, bas: F },
      { id: 'gon', tissu: 'nerf', contour: ovale(672, 432, 16, 10), extrapole: true },
      { id: 'lame', tissu: 'os', cortex: F, extrapole: true },
      { id: 'trajet', tissu: 'aiguille', ligne: [[1000,186],[738,410]], ep: 5, extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 300, y: 135, dx: -120, dy: -10, text: 'Tissu sous-cutané' },
      { s: 'plan', x: 560, y: 218, dx: -200, dy: 0, text: 'Plan non attribué (trapèze / splénius ?)', vue: 'anat' },
      { s: 'sscm', x: 300, y: 330, dx: -130, dy: 40, text: 'Semi-épineux de la tête (SSCM)', vue: 'anat' },
      { s: 'inter', x: 500, y: 394, dx: 60, dy: -110, text: 'Plan graisseux interfascial = cible' },
      { s: 'gon', x: 672, y: 432, dx: 130, dy: 60, text: 'N. grand occipital (étoile des auteurs)', vue: 'anat' },
      { s: 'ocim', x: 450, y: 520, dx: -120, dy: 20, text: 'Oblique inférieur de la tête (OCIM)', vue: 'anat' },
      { s: 'lame', x: 600, y: 590, dx: 160, dy: 50, text: 'Lame de C2 (non résolue)', vue: 'anat' },
      { s: 'ocim', x: 120, y: 500, dx: 40, dy: 110, text: 'Vers l\'épineuse de C2 (hors champ)', vue: 'anat' },
      { s: 'trajet', x: 870, y: 297, dx: -60, dy: -120, text: 'Trajet latéro-médial (pointillé des auteurs)' },
    ],
  }];
})();
