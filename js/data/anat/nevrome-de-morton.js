/* Coupes anatomiques recalées — névrome de Morton (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : planche à trois panneaux de Reijnierse et Griffith (J Ultrason 2023, fig. 20) — coupe tracée sur le seul panneau B
   (échographie transversale du 3ᵉ espace), `crop` propre à la coupe ; la planche reste affichée entière dans la fiche.
   Le texte de l'article rattache la figure à une sonde plantaire : plante en haut, à l'inverse du schéma apparié (voie dorsale).
   echo-2 (Klontzas et al., fig. 3) : non tracée — sens proximal / distal non donné, aiguille au centre de la masse (voir zz-refus.js). */
(function () {
  const DERME = [[0,65],[200,90],[350,84],[500,68],[650,68],[750,88],[1000,80]];
  /* faces plantaires des têtes : arcs concaves vers la sonde (bord superficiel de la ligne brillante) */
  const M3 = [[140,345],[160,385],[200,415],[250,418],[300,400],[335,372],[370,358],[400,378]];
  const M4 = [[715,285],[740,305],[780,315],[820,313],[870,296],[910,278],[935,285]];
  ECHO.anat['nevrome-de-morton'] = [{
    fig: 'img/nevrome-de-morton/echo-1.jpg',
    crop: [0.002, 0.5, 0.641, 0.498], panneau: 'B (coupe transversale)',
    valide: true,
    vb: [1000, 586], orient: { left: 'Médial (M3)', right: 'Latéral (M4) — plante en haut' },
    lecture: [
      'Probable — voie plantaire, plante en haut : la légende d\'origine ne nomme pas la voie, mais le texte de l\'article rattache cette figure à une sonde plantaire (« towards the plantar placed transducer », avec renvoi à la fig. 20). L\'image concorde : têtes vues par leur face plantaire, concave, sous un coussinet épais. La coupe est donc inversée dans le sens dorso-plantaire par rapport au schéma apparié et à la voie de la fiche : l\'aiguille dorsale arriverait par le bas de l\'image, hors champ. Image de diagnostic, pas du geste — à confirmer par Mat.',
      'Certain — têtes des 3ᵉ et 4ᵉ métatarsiens (sigles 3 et 4 des auteurs) ; masse hypoéchogène du 3ᵉ espace désignée par leur flèche : névrome de Morton (légende). Médial à gauche.',
      'Probable — limite peau plantaire / coussinet graisseux sur la ligne brillante continue (y ≈ 70–90).',
      'Supposition — plages échogènes posées sur chaque tête : tendons fléchisseurs et plaque plantaire, attendus à cet endroit mais non individualisés sur 497 px ; dessinées en plan non attribué.',
      'Extrapolé — pôle profond du névrome : seuls son dôme plantaire et ses deux flancs sont vus, il se perd ensuite dans la bande sombre qui descend entre les têtes (atténuation, cônes d\'ombre). Le ligament métatarsien transverse profond et l\'étage dorsal de l\'espace ne sont pas dessinés : rien sur l\'image ne permet de les situer par rapport à la masse ; la zone est laissée en espace profond non vu.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'coussinet', tissu: 'graisse', haut: DERME, bas: [[0,630],[1000,630]] },
      { id: 'profond', tissu: 'indetermine', contour: [[400,378],[550,340],[690,300],[712,296],[716,330],[715,630],[400,630],[399,410]], extrapole: true },
      { id: 'flechisseurs3', tissu: 'indetermine', contour: [[160,385],[150,340],[180,300],[250,285],[330,300],[365,335],[335,372],[300,400],[250,418],[200,415]], extrapole: true },
      { id: 'flechisseurs4', tissu: 'indetermine', contour: [[740,305],[725,265],[750,225],[810,205],[880,215],[915,250],[910,278],[870,296],[820,313],[780,315]], extrapole: true },
      { id: 'nevrome', tissu: 'nerf', contour: [[470,240],[520,226],[580,226],[625,245],[648,280],[650,330],[630,380],[590,405],[540,410],[490,400],[455,370],[442,320],[445,275]], vu: [[0, 5], [11, 12]] },
      { id: 'm3', tissu: 'os', cortex: M3 },
      { id: 'm4', tissu: 'os', cortex: M4 },
    ],
    labels: [
      { s: 'peau', x: 330, y: 45, dx: -190, dy: -17, text: 'Peau plantaire' },
      { s: 'coussinet', x: 760, y: 150, dx: -70, dy: -120, text: 'Coussinet graisseux plantaire' },
      { s: 'nevrome', x: 510, y: 270, dx: -110, dy: -120, text: 'Névrome de Morton', vue: 'anat' },
      { s: 'flechisseurs3', x: 250, y: 330, dx: -30, dy: -95, text: 'Fléchisseurs / plaque plantaire' },
      { s: 'm3', x: 270, y: 450, dx: -120, dy: 90, text: 'Tête de M3', vue: 'anat' },
      { s: 'm4', x: 825, y: 380, dx: 75, dy: 160, text: 'Tête de M4', vue: 'anat' },
      { s: 'profond', x: 560, y: 470, dx: -15, dy: 80, text: 'Espace profond (non vu)', vue: 'anat' },
    ],
  }];
})();
