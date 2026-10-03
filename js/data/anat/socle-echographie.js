/* Coupes anatomiques recalées — socle échographie (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 (kyste poplité, Walter 2023 fig. 3) : NON TRACÉE — planche de principe, plan et orientation non donnés (voir zz-refus.js).
   echo-2 : Walter et al., J Ultrason 2023, fig. 2 — planche A/B ; seul le panneau B (hors du plan, 4e MTP gauche) est tracé,
            `crop` propre à l'entrée (`anat-grid.js socle-echographie 1 <dossier> 0,0.513,1,0.487`). Sigles des auteurs sans texte :
            flèche = aiguille, *** = épanchement, croix = tête métatarsienne, double croix = phalange proximale. */
(function () {
  /* bord bas des parties molles : toit de l'épanchement puis capsule sur la base phalangienne */
  const CAPS = [[0,168],[70,163],[130,150],[175,122],[220,103],[270,94],[330,96],[400,100],[470,105],[530,114],[590,128],[650,138],[700,124],[760,108],[850,98],[1000,88]];
  const META = [[-20,232],[50,222],[100,217],[150,211],[200,204],[250,199],[300,197],[350,199],[400,202],[450,206],[490,212],[520,226],[548,246],[570,272],[585,310]];
  const PHAL = [[686,190],[700,155],[718,136],[760,121],[800,116],[850,111],[900,106],[950,101],[1020,98]];

  ECHO.anat['socle-echographie'] = [{
    fig: 'img/socle-echographie/echo-2.jpg',
    crop: [0, 0.513, 1, 0.487],
    panneau: 'B (hors du plan)',
    valide: true,
    vb: [1000, 505], orient: { left: 'Proximal', right: 'Distal' },
    lecture: [
      'Certain — orientation et plan : coupe longitudinale de la 4e articulation métatarso-phalangienne gauche, tête métatarsienne (croix des auteurs) à gauche, base de la phalange proximale (double croix) à droite, donc proximal à gauche. Face dorsale **probable** : les auteurs ne l\'écrivent pas, mais l\'épanchement distend le récessus situé au-dessus de la tête, comme dans l\'abord dorsal habituel.',
      'Certain — aiguille hors du plan (flèche des auteurs) : un point hyperéchogène au-dessus de l\'interligne, prolongé en profondeur par une courte traînée de réverbération. Rien sur l\'image fixe ne dit si ce point est la pointe ou une section du corps : c\'est la leçon de la planche.',
      'Certain — épanchement (*** des auteurs) : plage anéchogène au-dessus de la tête, contour tracé sur la limite visible ; il se prolonge vers l\'interligne, autour du point de l\'aiguille.',
      'Probable — corticale de la tête métatarsienne : sommet de la bande hyperéchogène convexe (pics mesurés y ≈ 197–232) ; corticale de la phalange : bande brillante ascendante (y ≈ 100–136). Cartilage de la tête : liseré posé sur la corticale, non résolu à cette échelle.',
      'Supposition — bande grise entre l\'épanchement et la corticale (x ≈ 0–400) : capsule et synoviale (polyarthrite rhumatoïde selon les auteurs), non séparées. Parties molles dorsales (tendon extenseur, tissu sous-cutané, peau) : non individualisées, plan laissé « non attribué ». Aucune échelle sur l\'image.',
      'Extrapolé — fond de l\'interligne et versant profond des deux os, sous les ombres.',
    ],
    structures: [
      { id: 'molles', tissu: 'indetermine', haut: [[0,-10],[1000,-10]], bas: CAPS },
      { id: 'capsule', tissu: 'conjonctif', haut: CAPS, bas: [[0,520],[1000,520]] },
      { id: 'epanchement', tissu: 'liquide', contour: [[140,160],[172,127],[215,104],[270,94],[330,97],[400,101],[470,106],[530,116],[590,132],[642,146],[662,178],[640,206],[592,214],[546,220],[505,210],[460,200],[400,190],[350,178],[300,168],[250,159],[195,163]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[589,161],[613,161]], ep: 10 },
      { id: 'cartilage', tissu: 'cartilage', bas: META.slice(2, 13), ep: 11 },
      { id: 'tete', tissu: 'os', cortex: META, vu: [0, 11] },
      { id: 'phalange', tissu: 'os', cortex: PHAL, vu: [2, 8] },
    ],
    labels: [
      { s: 'molles', x: 120, y: 60, dx: 90, dy: -32, text: 'Parties molles (non séparées)' },
      { s: 'epanchement', x: 430, y: 135, dx: 140, dy: -95, text: 'Épanchement', vue: 'anat' },
      { s: 'aiguille', x: 601, y: 161, dx: 190, dy: 120, text: 'Aiguille coupée en travers', vue: 'anat' },
      { s: 'aiguille', x: 601, y: 250, dx: 200, dy: 110, text: 'Réverbération sous le point', vue: 'echo' },
      { s: 'capsule', x: 70, y: 185, dx: 60, dy: 120, text: 'Capsule et synoviale' },
      { s: 'tete', x: 300, y: 300, dx: 0, dy: 120, text: 'Tête du 4e métatarsien', vue: 'anat' },
      { s: 'phalange', x: 880, y: 160, dx: -20, dy: -105, text: 'Phalange proximale', vue: 'anat' },
      { s: 'capsule', x: 640, y: 300, dx: -160, dy: 155, text: 'Interligne' },
    ],
  }];
})();
