/* Coupes anatomiques recalées — blocs PECS (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Sepolvere et al., J Clin Med 2025, fig. 5, panneau D (sigles des auteurs : PMM, pmm, SAM, IV Rib, V Rib, EIM, IIM, Pleura, TAA, N + deux flèches).
            Recadré sur le seul sonogramme (285 px) ; l'échelle de l'appareil, rognée, donne 1 cm ≈ 260 unités, profondeur zéro à y ≈ 17.
   echo-1 (Sara et al., fig. 2) : non tracée — image vierge, ni niveau ni axe donnés par les auteurs (voir zz-refus.js). */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  const PEAU_B = [[0,52],[1000,52]];
  const F_GP = [[0,100],[150,102],[250,112],[350,110],[450,100],[600,95],[800,90],[1000,95]];
  const IP_H = [[0,252],[150,256],[250,240],[400,238],[600,231],[800,238],[1000,236]];
  const IP_B = [[0,292],[150,290],[300,283],[500,276],[600,272],[700,286],[900,296],[1000,298]];
  /* interface petit pectoral / dentelé : mesurée jusqu'à x = 500 (pointe de la flèche superficielle), prolongée au-delà */
  const PS = [[0,332],[100,337],[150,347],[200,351],[250,351],[300,344],[350,337],[400,330],[450,323],[500,316],[600,330],[700,345],[800,352],[950,354],[1000,354]];
  const SAM_B = [[0,445],[100,470],[200,482],[300,485],[400,478],[440,465],[475,415],[500,400],[550,390],[600,386],[650,389],[700,398],[750,405],[790,430],[810,455],[900,470],[1000,480]];
  const PLEVRE = [[0,600],[110,612],[150,628],[200,645],[250,649],[300,652],[350,642],[400,640],[440,637],[620,617],[800,586],[850,588],[900,596],[950,603],[1000,612]];
  ECHO.anat['pecs'] = [{
    fig: 'img/pecs/echo-2.jpg',
    valide: false,
    vb: [1000, 796], orient: { left: 'Caudal / latéral', right: 'Crânial / médial' },
    lecture: [
      'Certain — deux trajets sont reportés : ce sont les deux flèches « N » des auteurs (aucune aiguille n\'est visible). La superficielle s\'arrête entre petit pectoral et dentelé : c\'est le PECS II de la fiche. La profonde va au contact du sommet de la 4e côte, sous le dentelé : variante que la fiche ne retient pas comme cible par défaut.',
      'Certain — orientation : 5e côte à gauche, 4e côte au centre (sigles des auteurs), donc caudal / latéral à gauche et crânial / médial à droite ; image en miroir du schéma apparié (déjà dit dans la légende). Aiguille médio-latérale selon la légende d\'origine.',
      'Certain — grand pectoral, petit pectoral, dentelé antérieur, 4e et 5e côtes, intercostaux externe et interne, plèvre : sigles des auteurs. Échelle de l\'appareil (rognée du cadre, profondeur 3 cm) : plan pecto-serratus à ≈ 1,2 cm de la peau, sommet de la 4e côte à ≈ 1,4 cm, plèvre à ≈ 2,3–2,4 cm. La cible de la fiche est donc ≈ 1,2 cm au-dessus de la plèvre, à l\'aplomb du versant caudal de la 4e côte.',
      'Probable — interface petit pectoral / dentelé à droite de x ≈ 500 : masquée par les deux flèches, prolongée entre les rares échos visibles. Limite profonde du dentelé entre les côtes : placée à l\'estime (y ≈ 480), les sigles EIM / IIM ne donnant que l\'ordre des plans ; intercostaux dessinés en une seule couche. Panneau de 285 px.',
      'Probable — plan inter-pectoral : bande hyperéchogène épaisse (y ≈ 235–295) entre les deux pectoraux, dessinée comme une lame fibro-graisseuse. C\'est le plan du temps superficiel (PECS I), que les auteurs ne montrent pas sur ce panneau.',
      'Extrapolé — branche pectorale de l\'artère thoraco-acromiale : placée sous le sigle TAA, lumière non résolue (pas de Doppler). 5e côte : seul son cône d\'ombre est dans le champ. Flancs et face profonde de la 4e côte, plèvre et poumon sous son ombre. Paquet intercostal : non vu, situé sous le bord inférieur de la 4e côte, c\'est-à-dire à sa gauche sur cette image.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,14],[1000,14]], bas: PEAU_B },
      { id: 'sc', tissu: 'graisse', haut: PEAU_B, bas: F_GP },
      { id: 'gp', tissu: 'muscle', haut: F_GP, bas: IP_H },
      { id: 'ip', tissu: 'conjonctif', haut: IP_H, bas: IP_B },
      { id: 'pp', tissu: 'muscle', haut: IP_B, bas: PS },
      { id: 'da', tissu: 'muscle', haut: PS, bas: SAM_B },
      { id: 'ic', tissu: 'muscle', haut: SAM_B, bas: PLEVRE },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE, bas: [[0,810],[1000,810]] },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE, ep: 8, extrapole: true },
      { id: 'plevre-g', tissu: 'plevre', ligne: PLEVRE.slice(1, 8), ep: 8 },
      { id: 'plevre-d', tissu: 'plevre', ligne: PLEVRE.slice(10, 15), ep: 8 },
      { id: 'taa', tissu: 'artere', contour: ovale(880, 268, 12, 11), extrapole: true },
      { id: 'cote-5', tissu: 'os', contour: [[-40,455],[0,450],[55,458],[95,490],[105,540],[100,585],[70,602],[-40,606]], extrapole: true },
      { id: 'cote-4', tissu: 'os', contour: [[432,560],[430,480],[450,440],[475,415],[500,400],[550,390],[600,386],[650,389],[700,398],[750,405],[790,430],[812,480],[815,555],[790,586],[620,600],[460,598]], vu: [2, 10] },
      { id: 'veine', tissu: 'veine', contour: ovale(418, 560, 12, 12), extrapole: true },
      { id: 'artere', tissu: 'artere', contour: ovale(412, 587, 12, 12), extrapole: true },
      { id: 'nerf', tissu: 'nerf', contour: ovale(405, 614, 12, 11), extrapole: true },
      { id: 'trajet-pecs2', tissu: 'aiguille', ligne: [[960,100],[497,318]], ep: 5, extrapole: true },
      { id: 'trajet-profond', tissu: 'aiguille', ligne: [[1000,175],[555,385]], ep: 5, extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 200, y: 78, dx: 0, dy: -46, text: 'Tissu sous-cutané' },
      { s: 'trajet-pecs2', x: 885, y: 136, dx: -125, dy: -78, text: 'Trajets : flèches des auteurs', vue: 'anat' },
      { s: 'gp', x: 330, y: 165, dx: -180, dy: -18, text: 'Grand pectoral', vue: 'anat' },
      { s: 'ip', x: 420, y: 262, dx: -120, dy: -50, text: 'Plan inter-pectoral (PECS I)' },
      { s: 'pp', x: 330, y: 316, dx: -195, dy: -3, text: 'Petit pectoral', vue: 'anat' },
      { s: 'taa', x: 880, y: 270, dx: -35, dy: 68, text: 'A. thoraco-acromiale', vue: 'anat' },
      { s: 'da', x: 290, y: 400, dx: -170, dy: -8, text: 'Dentelé antérieur', vue: 'anat' },
      { s: 'pp', x: 490, y: 322, dx: -260, dy: 133, text: 'Plan pecto-serratus (PECS II)' },
      { s: 'trajet-profond', x: 590, y: 380, dx: 60, dy: 125, text: 'Variante profonde (sous le dentelé)', vue: 'anat' },
      { s: 'cote-4', x: 540, y: 574, dx: 135, dy: -4, text: '4e côte', vue: 'anat' },
      { s: 'ic', x: 370, y: 560, dx: -150, dy: -12, text: 'Intercostaux', vue: 'anat' },
      { s: 'cote-5', x: 50, y: 560, dx: 25, dy: 130, text: '5e côte', vue: 'anat' },
      { s: 'plevre-g', x: 300, y: 652, dx: -40, dy: 63, text: 'Plèvre', vue: 'anat' },
      { s: 'nerf', x: 412, y: 600, dx: 208, dy: 120, text: 'Paquet intercostal V-A-N (extrapolé)', vue: 'anat' },
      { s: 'poumon', x: 300, y: 765, dx: 130, dy: -3, text: 'Poumon', vue: 'anat' },
    ],
  }];
})();
