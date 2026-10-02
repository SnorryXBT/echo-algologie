/* Coupes anatomiques recalées — nerfs clunéaux supérieurs (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Wu et al., Insights Imaging 2023, fig. 2E (crête iliaque postérieure, trois branches : têtes de flèche, fascia thoraco-lombaire en pointillé).
   echo-2 : même figure, panneau F (hydrodissection, abord médio-latéral dans le plan ; flèches = trajet de l'aiguille ; vignette incrustée en bas à gauche).
   Le pointillé des auteurs (fascia thoraco-lombaire) est relevé point par point : c'est le corrigé, il est reporté tel quel. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };

  /* ---------- echo-1 : panneau E ---------- */
  const DERME = [[0,18],[1000,18]];
  const TLF = [[0,240],[45,227],[100,205],[200,170],[260,143],[350,127],[400,126],[470,130],[550,138],[620,152],[650,163],[700,163],[800,170],[900,183],[1000,195]];
  const CORT = [[175,340],[200,265],[230,215],[265,180],[300,163],[350,157],[400,155],[450,155],[500,158],[550,165],[590,178],[625,198],[655,232],[690,290],[710,360]];
  /* plan de la cible entre fascia et corticale, sur le dôme de la crête */
  const PLAN = [[262,145],[350,127],[400,126],[470,130],[550,138],[620,152],[640,160],[625,198],[590,178],[550,165],[500,158],[450,155],[400,155],[350,157],[300,163],[265,180]];

  /* ---------- echo-2 : panneau F ---------- */
  const DERME2 = [[0,15],[1000,15]];
  const FSUP2 = [[0,140],[200,138],[400,145],[600,148],[800,140],[1000,138]];
  const TLF2 = [[0,330],[100,315],[180,308],[200,300],[220,280],[250,260],[300,248],[350,243],[400,246],[450,255],[500,270],[550,285],[600,300],[650,320],[700,350],[750,375],[800,388],[850,410],[900,440],[950,470],[1000,500]];
  const CORT2 = [[320,420],[340,362],[380,342],[430,333],[500,335],[560,340],[600,350],[630,400],[660,470],[680,600]];

  ECHO.anat['nerfs-cluneaux'] = [{
    fig: 'img/nerfs-cluneaux/echo-1.jpg',
    valide: false,
    vb: [1000, 582], orient: { left: 'Médial (probable)', right: 'Latéral' },
    lecture: [
      'Probable — orientation : le panneau E n\'inscrit pas l\'axe. Médial à gauche est déduit des panneaux voisins de la même planche (C et D : multifide, médial, à gauche), du pictogramme (sonde E posée le long de la crête, en dehors de C) et du panneau F, même série, où l\'aiguille entre par la gauche en abord « medial-to-lateral » (légende d\'origine).',
      'Certain — fascia thoraco-lombaire : pointillé des auteurs, relevé point par point. Les trois branches du nerf clunéal supérieur : têtes de flèche noires des auteurs (légende : « the three branches of the superior cluneal nerve … along the posterior iliac crest »).',
      'Probable — position des trois nerfs : placés sous la pointe de chaque tête de flèche, entre le fascia et la corticale ; à 352 px, aucun n\'est résolu comme un ovale distinct (lame de 1 à 3 mm), les contours sont estimés.',
      'Probable — corticale de la crête : arc brillant au toit du cône d\'ombre (PIC), y ≈ 155–180 ; les flancs, sans réflexion franche, sont en pointillé.',
      'Supposition — plan superficiel : tissu sous-cutané jusqu\'au fascia, non désigné. Plans sous le fascia de part et d\'autre de la crête (érecteurs en dedans, fessiers en dehors ?) : non désignés sur ce panneau, laissés non attribués.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: TLF },
      { id: 'profond', tissu: 'indetermine', haut: TLF, bas: [[0,600],[1000,600]] },
      { id: 'plan', tissu: 'conjonctif', contour: PLAN },
      { id: 'tlf', tissu: 'fascia', ligne: TLF, ep: 7 },
      { id: 'n1', tissu: 'nerf', contour: ovale(266, 160, 13, 8, -30) },
      { id: 'n2', tissu: 'nerf', contour: ovale(403, 139, 14, 8) },
      { id: 'n3', tissu: 'nerf', contour: ovale(624, 170, 13, 8, 25) },
      { id: 'crete', tissu: 'os', cortex: CORT, vu: [3, 11] },
    ],
    labels: [
      { s: 'sc', x: 520, y: 70, dx: 200, dy: -20, text: 'Tissu sous-cutané' },
      { s: 'tlf', x: 120, y: 198, dx: 0, dy: 130, text: 'Fascia thoraco-lombaire', vue: 'anat' },
      { s: 'n2', x: 403, y: 139, dx: -40, dy: -100, text: 'Nn. clunéaux supérieurs (3 branches)', vue: 'anat' },
      { s: 'profond', x: 850, y: 300, dx: 0, dy: 150, text: 'Plan musculaire non désigné' },
      { s: 'crete', x: 470, y: 160, dx: 0, dy: 280, text: 'Crête iliaque postérieure', vue: 'anat' },
    ],
  }, {
    fig: 'img/nerfs-cluneaux/echo-2.jpg',
    valide: false,
    vb: [1000, 586], orient: { left: 'Médial', right: 'Latéral' },
    lecture: [
      'Certain — orientation : légende d\'origine « in-plane, medial-to-lateral approach » et aiguille venant de la gauche (flèches des auteurs) : médial à gauche, comme le schéma apparié.',
      'Certain — fascia thoraco-lombaire (pointillé des auteurs, relevé point par point), nerf (tête de flèche), crête iliaque postérieure (PIC) : symboles des auteurs.',
      'Probable — nerf : sous la pointe de la tête de flèche, entre fascia et corticale ; non résolu à 350 px, contour estimé.',
      'Probable — corticale : bande brillante au toit du cône d\'ombre, y ≈ 333–350 ; flancs en pointillé. La vignette incrustée des auteurs (installation) masque le coin inférieur gauche : rien n\'y est lisible.',
      'Extrapolé — aiguille : seules les deux flèches des auteurs la situent ; elle est dessinée en pointillé sur la droite qui passe sous leurs pointes, prolongée jusqu\'au contact du nerf. La position réelle de la pointe n\'est pas lisible.',
      'Supposition — tissu sous-cutané épais avec une ligne brillante continue (fascia superficiel ?) à y ≈ 140 ; plans sous le fascia en dehors de la crête non désignés.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME2 },
      { id: 'sc', tissu: 'graisse', haut: DERME2, bas: TLF2 },
      { id: 'fsup', tissu: 'fascia', ligne: FSUP2, ep: 9 },
      { id: 'profond', tissu: 'indetermine', haut: TLF2, bas: [[0,600],[1000,600]] },
      { id: 'tlf', tissu: 'fascia', ligne: TLF2, ep: 7 },
      { id: 'nerf', tissu: 'nerf', contour: ovale(472, 302, 15, 9, 10) },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[0,88],[450,282]], ep: 5, extrapole: true },
      { id: 'crete', tissu: 'os', cortex: CORT2, vu: [1, 6] },
    ],
    labels: [
      { s: 'sc', x: 760, y: 80, dx: 110, dy: 0, text: 'Tissu sous-cutané' },
      { s: 'aiguille', x: 280, y: 209, dx: -60, dy: -150, text: 'Aiguille (flèches des auteurs)', vue: 'anat' },
      { s: 'tlf', x: 800, y: 388, dx: 30, dy: -160, text: 'Fascia thoraco-lombaire', vue: 'anat' },
      { s: 'nerf', x: 472, y: 302, dx: 80, dy: -190, text: 'N. clunéal supérieur', vue: 'anat' },
      { s: 'crete', x: 470, y: 336, dx: 40, dy: 170, text: 'Crête iliaque postérieure', vue: 'anat' },
      { s: 'profond', x: 820, y: 470, dx: 0, dy: 70, text: 'Plan non désigné' },
    ],
  }];
})();
