/* Coupes anatomiques recalées — ganglion stellaire, bloc en C6 (format : .claude/skills/echo-anatomie/SKILL.md).
   Image : Lin et al., PLOS One 2025, fig. 2B (après injection). Les mentions med/lat des auteurs sont inversées :
   l'anatomie (thyroïde médiale, jugulaire latérale) impose latéral à gauche, médial à droite. */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 14; i++) { const t = i / 14 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  const SCM_BAS = [[0,245],[100,250],[200,252],[300,240],[400,205],[450,168],[500,152],[600,150],[700,148],[800,140],[900,122],[1000,102]];
  const FASCIA = [[200,382],[300,392],[400,396],[500,400],[600,403],[660,405],[715,398],[760,383],[820,390],[855,425],[900,455],[1000,470]];
  const TUB = [[0,400],[100,396],[200,393],[300,395],[400,400],[500,406],[600,418],[650,438],[685,470],[700,520],[705,640]];
  ECHO.anat['ganglion-stellaire'] = [{
    fig: 'img/ganglion-stellaire/echo-1.jpg',
    valide: false,
    vb: [1000, 640], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : la thyroïde (médiale) est à droite, la jugulaire interne (latérale à la carotide) à gauche ; les mentions med/lat incrustées par les auteurs sont donc inversées. Latéral à gauche, image en miroir du schéma apparié (dit dans la légende).',
      'Certain — SCM, jugulaire interne, carotide commune, thyroïde, tubercule antérieur de C6 (T), long du cou (LCo) et nappe d\'anesthésique (flèches) : désignés par les auteurs ; les auteurs décrivent l\'injection « sous le fascia prévertébral, en surface du long du cou », ce qui est la cible de la fiche et de la coupe de référence fournie par Mat.',
      'Probable — fascia prévertébral : ligne brillante continue sous la carotide, soulevée par la nappe en dedans du tubercule.',
      'Supposition — masse latérale sous le SCM, en dehors de la jugulaire : scalène antérieur, par analogie avec la coupe de référence (aucun signal propre à 339 px).',
      'Extrapolé — chaîne sympathique, non visible : dessinée dans la nappe, en avant du long du cou. Corps vertébral sous le long du cou (ligne brillante en bas à droite) ; tissu sous le tubercule : réverbérations, rempli comme de l\'os. Aiguille non identifiable sur ce panneau (retirée ?) : non dessinée.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,24],[1000,24]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,24],[1000,24]], bas: [[0,88],[300,92],[600,90],[800,78],[1000,60]] },
      { id: 'scm', tissu: 'muscle', haut: [[0,88],[300,92],[600,90],[800,78],[1000,60]], bas: SCM_BAS },
      { id: 'loge', tissu: 'conjonctif', haut: SCM_BAS, bas: [[0,400],[200,382]].concat(FASCIA.slice(1, 5), [[600,403],[660,405]]).concat([[700,395],[760,383],[820,390],[855,425],[900,455],[1000,470]]) },
      { id: 'thy', tissu: 'glande', contour: [[655,205],[760,188],[860,205],[950,258],[965,360],[905,418],[800,402],[700,392],[662,338]] },
      { id: 'scal-ant', tissu: 'muscle', contour: [[0,255],[120,258],[190,290],[200,340],[190,382],[100,394],[0,398]], extrapole: true },
      { id: 'ijv', tissu: 'veine', contour: ovale(310, 336, 108, 42) },
      { id: 'cca', tissu: 'artere', contour: ovale(565, 253, 92, 82) },
      { id: 'fascia', tissu: 'fascia', ligne: FASCIA, ep: 5 },
      { id: 'nappe', tissu: 'liquide', contour: [[712,402],[760,386],[822,392],[852,430],[842,490],[790,506],[735,500],[706,460]] },
      { id: 'chaine', tissu: 'nerf', contour: ovale(776, 452, 12, 7), extrapole: true },
      { id: 'lc', tissu: 'muscle', contour: [[650,508],[705,480],[760,508],[842,496],[905,520],[935,580],[890,640],[705,640],[645,600]] },
      { id: 'corps', tissu: 'os', contour: [[705,640],[730,600],[800,610],[900,604],[1000,588],[1000,640]], extrapole: true },
      { id: 'tub', tissu: 'os', cortex: TUB, vu: [0, 9] },
    ],
    labels: [
      { s: 'scm', x: 250, y: 135, dx: -60, dy: -90, text: 'Sterno-cléido-mastoïdien', vue: 'anat' },
      { s: 'cca', x: 565, y: 253, dx: 55, dy: -208, text: 'Carotide commune', vue: 'anat' },
      { s: 'thy', x: 830, y: 300, dx: 70, dy: -255, text: 'Thyroïde', vue: 'anat' },
      { s: 'scal-ant', x: 95, y: 330, dx: 65, dy: -210, text: 'Scalène antérieur (supposé)' },
      { s: 'nappe', x: 778, y: 440, dx: -18, dy: -320, text: 'Nappe sous-fasciale sur le long du cou (cible)' },
      { s: 'ijv', x: 310, y: 336, dx: -185, dy: 264, text: 'V. jugulaire interne', vue: 'anat' },
      { s: 'fascia', x: 520, y: 400, dx: -120, dy: 200, text: 'Fascia prévertébral' },
      { s: 'tub', x: 400, y: 430, dx: 230, dy: 170, text: 'Tubercule ant. C6', vue: 'anat' },
      { s: 'chaine', x: 776, y: 452, dx: 124, dy: 88, text: 'Chaîne sympathique', vue: 'anat' },
      { s: 'lc', x: 800, y: 560, dx: 100, dy: 40, text: 'Long du cou', vue: 'anat' },
    ],
  }];
})();
