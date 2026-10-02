/* Coupes anatomiques recalées — névrome cicatriciel (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Fablet et al., Skeletal Radiol 2026, fig. 1A — `crop` propre à l'entrée, resserré sur l'image échographique
            (celui de la figure garde le liseré blanc et les coins arrondis) : `anat-grid.js nevrome-cicatriciel 0 <dossier>
            0.005,0.092,0.585,0.806`. Sigles des auteurs : Neuroma, DPIN (flèches ouvertes), * = tendons de la 4e loge, Radius.
   echo-2 (moignon transfémoral, Malfitano 2025) : NON TRACÉE — axe proximal / distal non donné (voir zz-refus.js). */
(function () {
  const TEND_H = [[0,100],[200,95],[380,100],[500,100],[600,85],[700,70],[800,62],[900,58],[1000,55]];
  const TEND_B = [[0,200],[100,203],[200,208],[300,214],[380,225],[450,232],[550,235],[650,238],[750,240],[850,238],[1000,235]];
  const NERF_H = [[385,258],[450,250],[550,247],[650,250],[750,257],[850,268],[1000,276]];
  const NERF_B = [[385,296],[450,292],[550,290],[650,290],[750,295],[850,300],[1000,300]];
  const RAD = [[722,352],[740,340],[770,330],[800,323],[850,318],[900,315],[950,312],[1020,309]];
  const LUN = [[345,397],[370,386],[420,383],[470,388],[520,405],[560,435],[590,465],[612,505]];
  const CAP = [[-20,404],[50,405],[120,410],[200,425],[260,441],[310,462],[336,505]];

  ECHO.anat['nevrome-cicatriciel'] = [{
    fig: 'img/nevrome-cicatriciel/echo-1.jpg',
    crop: [0.005, 0.092, 0.585, 0.806],
    panneau: 'A',
    valide: false,
    vb: [1000, 500], orient: { left: 'Distal', right: 'Proximal' },
    lecture: [
      'Certain — orientation : légende d\'origine « left, distal; right, proximal », coupe longitudinale de la face dorsale du poignet. Le schéma apparié met le proximal à gauche : la figure du mémo le dit déjà.',
      'Certain — sigles des auteurs : tendons extenseurs de la 4e loge (*), nerf interosseux postérieur distal (flèches ouvertes, bande fibrillaire à bords brillants posée sous les tendons), névrome terminal (trois flèches), radius.',
      'Probable — contour du névrome : renflement hypoéchogène fusiforme où se termine la bande du nerf (x ≈ 170–405) ; sa limite distale se perd dans une plage hypoéchogène non désignée (x < 170), laissée au tissu conjonctif profond.',
      'Probable — os du carpe : légende des auteurs « over the first row of the carpus ». La corticale qui fait suite au radius après l\'interligne radio-carpien (x ≈ 345–610) est lue comme le lunatum ; la corticale plus distale (x < 340) comme le capitatum (Supposition), d\'après l\'ordre radius – lunatum – capitatum de la coupe sagittale de leur fig. 2B (autre patient).',
      'Supposition — ovale anéchogène sous-cutané (x ≈ 290, à 1–2 mm de la surface) avec renforcement postérieur : veine superficielle dorsale, sans Doppler. Bande oblique entre le nerf et le lunatum : capsule dorsale, non désignée.',
      'Extrapolé — fond de l\'interligne radio-carpien et versant profond des os, sous les ombres. Peau hors champ (recadrage d\'origine). Aucune échelle sur l\'image.',
    ],
    structures: [
      { id: 'sc', tissu: 'graisse', haut: [[0,-10],[1000,-10]], bas: TEND_H },
      { id: 'veine', tissu: 'veine', contour: [[222,40],[240,15],[290,4],[340,12],[362,38],[350,68],[300,80],[248,72]] },
      { id: 'tendons', tissu: 'tendon', haut: TEND_H, bas: TEND_B },
      { id: 'profond', tissu: 'conjonctif', haut: TEND_B, bas: [[0,520],[1000,520]] },
      { id: 'nerf', tissu: 'nerf', haut: NERF_H, bas: NERF_B },
      { id: 'nevrome', tissu: 'nerf', contour: [[172,245],[222,222],[300,218],[368,234],[405,262],[396,292],[340,306],[260,306],[196,286]] },
      { id: 'capitatum', tissu: 'os', cortex: CAP, vu: [0, 5] },
      { id: 'lunatum', tissu: 'os', cortex: LUN, vu: [0, 6] },
      { id: 'radius', tissu: 'os', cortex: RAD, vu: [0, 7] },
    ],
    labels: [
      { s: 'veine', x: 300, y: 42, dx: 200, dy: -12, text: 'Veine superficielle ?' },
      { s: 'tendons', x: 500, y: 165, dx: 120, dy: -15, text: 'Tendons extenseurs (4e loge)', vue: 'anat' },
      { s: 'nevrome', x: 290, y: 262, dx: -150, dy: 60, text: 'Névrome terminal', vue: 'anat' },
      { s: 'nerf', x: 700, y: 268, dx: 180, dy: -55, text: 'NIP distal', vue: 'anat' },
      { s: 'radius', x: 850, y: 330, dx: 20, dy: 90, text: 'Radius', vue: 'anat' },
      { s: 'lunatum', x: 430, y: 390, dx: -30, dy: 80, text: 'Lunatum (probable)' },
      { s: 'capitatum', x: 100, y: 410, dx: 30, dy: 60, text: 'Capitatum ?' },
      { s: 'profond', x: 480, y: 345, dx: 240, dy: 130, text: 'Capsule dorsale (supposée)' },
    ],
  }];
})();
