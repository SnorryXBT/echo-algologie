/* Figures — socle échographie : deux images réelles sur la visibilité de l'aiguille (fiche transversale : ni planche de Gray ni figure d'installation) */
ECHO.figures['socle-echographie'] = [
  {
    type: 'echo',
    src: 'img/socle-echographie/echo-1.jpg',
    pair: 'echo-angle',
    titre: 'Aiguille réelle insonée à environ 90° : corps, pointe et réverbérations',
    legende: 'Ponction d\'un kyste poplité dans le plan. Annotations des auteurs : **têtes de flèche** = aiguille, *** = kyste de Baker. L\'aiguille est quasi parallèle à la surface de la sonde, donc **perpendiculaire au faisceau** : tout son corps et sa pointe se détachent en une ligne hyperéchogène nette, doublée en profondeur par les **réverbérations parallèles** qui la signent — les auteurs les décrivent « au bord profond de l\'aiguille ». C\'est la situation de gauche du schéma en regard, poussée à son optimum ; dès que l\'angle se redresse, le faisceau est réfléchi hors de la sonde et l\'aiguille s\'éteint. La leçon de la fiche se lit ici : on gagne la visibilité par le **point d\'entrée** (loin de la sonde, trajet plat), pas en poussant. Aucun axe anatomique n\'est à confronter : l\'image illustre un principe physique, pas une coupe de référence.',
    credit: 'Walter WR, Burke CJ, Adler RS, Journal of Ultrasonography 2023, fig. 3 — CC BY-NC-ND 4.0',
    source: 'https://doi.org/10.15557/jou.2023.0039',
    labels: [
      { x: 0.20, y: 0.385, text: 'Aiguille ≈ 90° du faisceau', dx: 0.04, dy: 0.30 },
      { x: 0.47, y: 0.435, text: 'Réverbérations parallèles', dx: 0.10, dy: 0.34 },
      { x: 0.595, y: 0.39, text: 'Pointe', dx: 0.16, dy: 0.14 },
    ],
  },
  {
    type: 'echo',
    src: 'img/socle-echographie/echo-2.jpg',
    pair: 'echo-hors-plan',
    titre: 'Dans le plan (A) et hors du plan (B) : une ligne, ou un point',
    legende: 'Deux gestes réels, figure reprise entière. **Panneau A**, dans le plan, articulation radio-carpienne dorsale : l\'aiguille 25 G (têtes de flèche) est visible **sur toute sa longueur** jusqu\'à l\'interligne (flèche) ; croix = lunatum, double croix = radius distal. **Panneau B**, hors du plan, 4e articulation métatarso-phalangienne : l\'aiguille (flèche) n\'est plus qu\'un **point hyperéchogène**, suivi d\'une courte traînée de réverbération ; *** = épanchement, croix = tête métatarsienne, double croix = phalange proximale. Ce point peut être la pointe **ou n\'importe quelle section du corps** de l\'aiguille — rien sur l\'image fixe ne permet de trancher, et c\'est tout le propos du schéma en regard : en hors-plan, la pointe se localise par l\'hydrolocalisation (0,5 mL de sérum) ou par le balayage, pas par le point brillant. Cible superficielle, sans structure à risque en arrière : c\'est le domaine de validité que fixe la fiche.',
    credit: 'Walter WR, Burke CJ, Adler RS, Journal of Ultrasonography 2023, fig. 2 — CC BY-NC-ND 4.0',
    source: 'https://doi.org/10.15557/jou.2023.0039',
    labels: [
      { x: 0.27, y: 0.168, text: 'Dans le plan : aiguille entière', dx: -0.02, dy: 0.22 },
      { x: 0.60, y: 0.667, text: 'Hors du plan : un point brillant', dx: -0.30, dy: 0.20 },
    ],
  },
];
