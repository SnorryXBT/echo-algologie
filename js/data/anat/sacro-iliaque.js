/* Coupes anatomiques recalées — sacro-iliaque (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Kokar et al., Turk J Phys Med Rehabil 2022, fig. 2a ; corrigé = panneau (b) des auteurs (contours osseux ILIUM, TST 2,
            berge médiale de PSF 2, trajet de la canule), relevé par `g.js` avec crop 0.494,0,0.49,0.83 puis décalé de −39 unités en x
            (décalage mesuré sur les trois sigles communs aux deux panneaux, même échelle verticale).
   echo-1 (Isik et al., J Clin Med 2026, fig. 1) : NON tracée — voir zz-refus / rapport. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* sonde convexe : la peau suit l'arc de la sonde */
  const PEAU = [[0,-150],[150,-60],[250,25],[350,68],[450,92],[520,100],[600,92],[700,60],[770,20],[900,-80],[1000,-160]];
  const DERME = PEAU.map(p => [p[0], p[1] + 20]);
  const FASC = [[0,90],[150,150],[250,175],[350,190],[450,198],[550,200],[650,195],[750,190],[850,170],[1000,140]];
  const ILIUM = [[60,262],[120,282],[160,298],[200,318],[250,330],[300,352],[341,352],[366,350]];
  const TST = [[418,345],[450,352],[475,370],[500,388],[528,392]];
  const MED = [[598,416],[628,414],[650,421],[700,426],[800,430],[1000,435]];
  const OS_H = [[0,250]].concat(ILIUM, [[392,350]], TST, [[561,405]], MED);

  ECHO.anat['sacro-iliaque'] = [{
    fig: 'img/sacro-iliaque/echo-2.jpg',
    valide: false,
    vb: [1000, 824], orient: { left: 'Latéral (ilium)', right: 'Médial' },
    lecture: [
      'Certain — repères osseux : relevés sur le panneau (b) des auteurs (« Bony landmarks are highlighted in the schematic drawing ») : ilium, deuxième tubercule transverse du sacrum (TST 2, la cible), deuxième foramen sacré postérieur (PSF 2, interruption de la ligne osseuse), berge médiale du foramen. Ils tombent sur les réflecteurs du panneau (a) à 10–20 unités près ; les corticales sont placées sur les pics de brillance du panneau (a), pas sur le dessin.',
      'Certain — orientation : ilium à gauche, donc latéral à gauche ; canule venant de la droite (côté médial), « in-plane approach » (légende d\'origine). Inverse du schéma apparié (la légende de la figure le dit).',
      'Probable — trajet de la canule : droite passant par les têtes de flèche des auteurs, jusqu\'au contact de TST 2 ; la canule elle-même est mal vue (pointillé).',
      'Probable — interligne sacro-iliaque postérieur : intervalle entre le bord de l\'ilium et TST 2 (x ≈ 365–420) ; les auteurs ne le désignent pas.',
      'Supposition — plans superficiels : tissu sous-cutané puis masse musculaire non désignée (multifide, origine du grand fessier selon la hauteur) ; limite placée sur la bande grise la plus continue (y ≈ 150–200). 347 px utiles : les fascias ne sont pas traçables avec certitude.',
      'Extrapolé — branche dorsale S2 dans le foramen (non vue) ; tout ce qui est sous les corticales (cône d\'ombre) et hors du secteur de la sonde convexe.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU, bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: FASC },
      { id: 'muscle', tissu: 'muscle', haut: FASC, bas: OS_H },
      { id: 'profond', tissu: 'indetermine', haut: OS_H, bas: [[0,840],[1000,840]], extrapole: true },
      { id: 'ramus', tissu: 'nerf', contour: ovale(562, 440, 16, 12), extrapole: true },
      { id: 'canule', tissu: 'aiguille', ligne: [[830,190],[452,350]], ep: 6, extrapole: true },
      { id: 'ilium', tissu: 'os', cortex: ILIUM, vu: [1, 7] },
      { id: 'tst', tissu: 'os', cortex: TST },
      { id: 'sacrum', tissu: 'os', cortex: MED, vu: [0, 4] },
    ],
    labels: [
      { s: 'sc', x: 450, y: 150, dx: -250, dy: -90, text: 'Tissu sous-cutané' },
      { s: 'muscle', x: 600, y: 300, dx: 200, dy: -230, text: 'Muscles (non désignés)' },
      { s: 'canule', x: 690, y: 249, dx: 120, dy: 90, text: 'Canule (flèches des auteurs)', vue: 'anat' },
      { s: 'ilium', x: 230, y: 321, dx: -100, dy: 160, text: 'Ilium', vue: 'anat' },
      { x: 392, y: 352, dx: -60, dy: 260, text: 'Interligne sacro-iliaque (probable)' },
      { s: 'tst', x: 480, y: 376, dx: 30, dy: 330, text: 'Tubercule transverse S2 (cible)', vue: 'anat' },
      { s: 'ramus', x: 562, y: 440, dx: 250, dy: 120, text: 'Foramen S2, rameau dorsal (extrapolé)', vue: 'anat' },
    ],
  }];
})();
