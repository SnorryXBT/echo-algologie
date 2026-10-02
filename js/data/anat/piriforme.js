/* Coupes anatomiques recalées — piriforme (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Matičič et al., J Ultrason 2021, fig. 3 (672 px ; L / M inscrits ; GM, PIR, flèche = nerf sciatique, OI = « os ischium » selon la légende).
   echo-1 (Lin et al., J Med Ultrasound 2026, fig. 8d) : NON tracée — panneau déjà colorisé par les auteurs (aplats opaques), 267 px ;
            le panneau c vierge vient d'un autre appareil et ne lui est pas superposable : refus soumis à Mat. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* bord profond du grand fessier (moitié latérale), puis bord superficiel du piriforme qui remonte vers le sacrum (moitié médiale) */
  const GM_B = [[0,462],[100,480],[200,450],[300,448],[400,470],[480,476]];
  const PIR_H = [[480,476],[560,420],[650,368],[750,312],[850,262],[1000,200]];
  const PIR_B = [[480,476],[560,515],[630,528],[700,522],[760,510],[850,498],[1000,480]];
  const CORT = [[230,640],[255,590],[300,565],[350,565],[400,572],[450,575],[500,578],[540,600],[558,680],[565,820]];

  ECHO.anat['piriforme'] = [{
    fig: 'img/piriforme/echo-2.jpg',
    valide: false,
    vb: [1000, 805], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Probable — « OI » : la légende d\'origine dit « os ischium » ; la plage désignée est un dôme hypoéchogène au grain encore visible, coiffé d\'une bande brillante épaisse, sans corticale nette ni ombre franche. Il est tracé en os, corticale au bas de la bande brillante (y ≈ 565–580). Le même sigle désigne usuellement l\'obturateur interne : si c\'était un muscle, le plan profond du nerf changerait. À confirmer.',
      'Certain — orientation : L (latéral) à gauche, M (médial) à droite, inscrits sur l\'image ; inverse du schéma apparié (la légende de la figure le dit).',
      'Certain — identité des muscles : GM et PIR, sigles des auteurs ; nerf sciatique désigné par la flèche, à la face profonde du piriforme.',
      'Probable — nerf sciatique : plage hyperéchogène fusiforme sous la pointe de la flèche (x ≈ 600–720, y ≈ 530–590), sur l\'épaulement du dôme ; contour estimé.',
      'Supposition — limite grand fessier / piriforme : aucune ligne continue ; tracée sur les stries obliques brillantes qui séparent les arcs du grand fessier (concaves, suivant la sonde convexe) des fibres rectilignes du piriforme, effilé en dehors vers x ≈ 480.',
      'Supposition — plan en dehors du nerf, entre grand fessier et os (x < 480) : non désigné (jumeaux, tendon de l\'obturateur interne ?), laissé non attribué. Plans profonds en dedans (grande incisure ischiatique) non identifiés.',
      'Extrapolé — peau et tissu sous-cutané hors champ (l\'image commence dans le grand fessier) ; flancs de l\'os sous le dôme.',
    ],
    structures: [
      { id: 'gm', tissu: 'muscle', haut: [[0,-10],[1000,-10]], bas: GM_B.concat(PIR_H.slice(1)) },
      { id: 'pir', tissu: 'muscle', haut: PIR_H, bas: PIR_B },
      { id: 'lateral', tissu: 'indetermine', haut: GM_B, bas: [[0,820],[230,820],[230,640],[255,590],[300,565],[350,565],[400,572],[450,575],[480,577]] },
      { id: 'medial', tissu: 'indetermine', haut: PIR_B, bas: [[480,820],[1000,820]], extrapole: true },
      { id: 'nerf', tissu: 'nerf', contour: ovale(660, 558, 62, 27, -8) },
      { id: 'ischium', tissu: 'os', cortex: CORT, vu: [1, 7] },
    ],
    labels: [
      { s: 'gm', x: 300, y: 250, dx: -80, dy: -170, text: 'Grand fessier', vue: 'anat' },
      { s: 'pir', x: 780, y: 420, dx: 50, dy: -170, text: 'Piriforme', vue: 'anat' },
      { s: 'nerf', x: 680, y: 552, dx: 170, dy: -95, text: 'N. sciatique', vue: 'anat' },
      { s: 'ischium', x: 420, y: 680, dx: -40, dy: 70, text: 'Ischium (« OI » des auteurs)', vue: 'anat' },
      { s: 'lateral', x: 120, y: 560, dx: 0, dy: 120, text: 'Plan non attribué' },
      { s: 'medial', x: 880, y: 640, dx: 0, dy: 110, text: 'Plans profonds non identifiés' },
    ],
  }];
})();
