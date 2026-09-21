/* Figures — socle hydrodissection : deux images réelles (fiche transversale : ni planche de Gray ni figure d'installation) */
ECHO.figures['socle-hydrodissection'] = [
  {
    type: 'echo',
    src: 'img/socle-hydrodissection/echo-1.jpg',
    pair: 'hydro-avant-apres',
    titre: 'Avant / après réel : nerf tibial rétro-malléolaire, halo anéchogène après hydrodissection',
    legende: 'Figure publiée en deux panneaux, l\'avant à gauche (A) et l\'après à droite (B), comme le schéma en regard. Annotations des auteurs : *** = nerf tibial, **triangles** = plan d\'hydrodissection, *Injection area* = zone injectée, *Tibial medial malleolus* = malléole médiale, *Right* = côté droit ; le trait blanc oblique du panneau B, non légendé, figure vraisemblablement l\'aiguille (**Supposition**). En A, le nerf est au contact des plans voisins, sans interface visible ; en B, un **croissant anéchogène** le cerne et l\'isole — le « nerf flottant » du tableau ci-dessus, critère de fin du geste. Le halo n\'est ici pas circonférentiel sur toute sa périphérie : sur une image fixe, c\'est un décollement obtenu, pas la preuve des 360°. **Incohérence de la source** : la légende d\'origine parle de coupe transversale puis de « vue longitudinale » ; l\'image, avec le nerf en section ronde près de la malléole, est une coupe transversale. Solution utilisée par les auteurs : glucose et mécobalamine — protocole propre à l\'article, non repris par la fiche.',
    credit: 'Qiu Y, Tang C, Li M, Lin Y, He S, Li Y, Deng H, Huang Y, Long Y, Wu S, Journal of Pain Research 2026, fig. 2 — CC BY-NC 4.0',
    source: 'https://doi.org/10.2147/JPR.S616165',
    crop: [0.0, 0.0, 1.0, 0.92],
    labels: [
      { x: 0.131, y: 0.19, text: 'Avant : nerf (*)', dx: 0.07, dy: 0.45 },
      { x: 0.652, y: 0.285, text: 'Après : halo anéchogène', dx: 0.06, dy: 0.42 },
    ],
  },
  {
    type: 'echo',
    src: 'img/socle-hydrodissection/echo-2.jpg',
    pair: 'hydro-approche',
    titre: 'Approche in-plane réelle au canal carpien : aiguille glissée sous le nerf médian',
    legende: 'Image **sans annotation**, recadrée sur sa partie utile. Coupe transversale du poignet : le **nerf médian** en nid d\'abeilles, et l\'aiguille dans le plan, visible sur toute sa longueur, dont la pointe vient se placer **juste sous le nerf** — selon les auteurs, elle a progressé en ouvrant les tissus à l\'injectat devant elle, d\'abord au-dessus puis au-dessous du nerf, par un seul point de ponction. C\'est la séquence du schéma en regard : injecter avant chaque avancée, décoller un versant, puis l\'autre. L\'aiguille entre ici par la gauche de l\'écran alors que le schéma la fait entrer par la droite ; les auteurs ne précisent pas si ce côté est radial ou ulnaire : rien n\'est affirmé ici, et l\'abord ulnaire de la fiche reste la référence.',
    credit: 'Jobe CM, Nazarian LN, Kindle BJ, Miller LE, Fowler JR, Journal of Ultrasound in Medicine 2026, fig. 5 — CC BY-NC 4.0',
    source: 'https://doi.org/10.1002/jum.70196',
    crop: [0.0, 0.0, 1.0, 0.8],
    labels: [
      { x: 0.52, y: 0.19, text: 'N. médian', dx: 0.32, dy: -0.07 },
      { x: 0.25, y: 0.18, text: 'Aiguille in-plane', dx: -0.06, dy: 0.32 },
      { x: 0.65, y: 0.31, text: 'Pointe, sous le nerf', dx: 0.14, dy: 0.28 },
    ],
  },
];
