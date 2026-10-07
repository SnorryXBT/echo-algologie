/* Coupes anatomiques recalées — nerf axillaire, espace quadrilatère (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Abril-Serván et al., Healthcare 2026, fig. 3C (271 px) ; corrigé = dessin B des mêmes auteurs, non recalé au pixel.
   echo-2 (Spasari et al., fig. 12) : NON tracée — mentions « Caudal / Cephalic » des auteurs incompatibles avec leurs propres
   sigles musculaires (petit rond du côté caudal du nerf), structures recouvertes d'aplats opaques : soumise à Mat. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* fascia superficiel du deltoïde : ligne la plus brillante de l'image (pics y ≈ 96–111) */
  const F = [[0,95],[100,96],[200,103],[300,111],[400,108],[500,108],[600,104],[700,104],[800,100],[900,95],[1000,90]];
  /* face profonde du deltoïde : fascia oblique qui descend de la gauche vers le paquet, puis toit du paquet (ligne fine y ≈ 548), puis bord superficiel de la bande échogène péri-osseuse */
  const TOIT = [[0,455],[100,478],[200,500],[300,522],[380,542],[450,548],[560,547],[640,548],[700,556],[800,560],[900,560],[1000,558]];
  /* corticale du col chirurgical : pics de brillance par colonne (x tous les 50) */
  const CORTEX = [[0,645],[100,642],[200,638],[300,627],[350,620],[400,612],[500,611],[550,609],[650,605],[700,598],[800,594],[900,590],[1000,586]];
  ECHO.anat['nerf-axillaire'] = [{
    fig: 'img/nerf-axillaire/echo-1.jpg',
    valide: true,
    vb: [1000, 959], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Probable — orientation : les auteurs n\'écrivent ni « crânial » ni « caudal ». Leur dessin B (corrigé, non recalé au pixel) nomme « Teres minor » le coin musculaire de gauche et place un mince triceps à droite ; leur texte situe le nerf « au bord supérieur de l\'espace quadrilatère, entre petit rond et chef long du triceps ». Le petit rond étant la limite supérieure de l\'espace, crânial est à gauche — concordant avec le schéma apparié. C\'est le seul appui de l\'orientation : à confirmer.',
      'Certain — nerf axillaire (flèche pleine des auteurs) et artère circonflexe humérale postérieure (tête de flèche pleine) : l\'artère est l\'ovale anéchogène, le nerf la plage échogène immédiatement crâniale, sous la pointe de la flèche ; le paquet est plaqué sur le col chirurgical, sous la face profonde du deltoïde.',
      'Supposition — contour du nerf : image de 271 px, la flèche incrustée en recouvre une partie ; ovale posé sous sa pointe, fascicules non résolus.',
      'Probable — petit rond : coin hypoéchogène strié compris entre le fascia oblique qui descend vers le paquet et l\'os ; identité donnée par le dessin B.',
      'Probable — corticale du col chirurgical : ligne la plus brillante à droite (y ≈ 590–610) ; à gauche, sous le petit rond, la bande est plus épaisse et moins nette (y ≈ 620–700) et c\'est son bord superficiel qui est retenu.',
      'Supposition — plage échogène qui entoure le paquet et se prolonge à droite sur l\'os (y ≈ 558–598) : dessinée comme la graisse de l\'espace. Le dessin B y place une veine à droite de l\'artère et un mince triceps à l\'extrémité droite : ni l\'une ni l\'autre ne sont individualisables sur l\'écho, non dessinés. Le schéma de la fiche met le grand rond du côté caudal et dit le chef long du triceps hors du plan de coupe : discordance avec les auteurs, à trancher.',
      'Supposition — tête de flèche évidée, à gauche : non définie par la légende de la figure 3 (dans la figure 2 des mêmes auteurs, « open arrow » désigne le plancher osseux) ; non interprétée.',
      'Extrapolé — profondeur de l\'humérus : les échos gris sous la corticale (y ≈ 620–760) sont des réverbérations.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,45],[1000,45]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,45],[1000,45]], bas: F },
      { id: 'deltoide', tissu: 'muscle', haut: F, bas: TOIT },
      { id: 'graisse-espace', tissu: 'conjonctif', haut: [[330,530]].concat(TOIT.slice(4)), bas: [[330,622],[350,620]].concat(CORTEX.slice(5)) },
      { id: 'petit-rond', tissu: 'muscle', haut: TOIT.slice(0, 5).concat([[402,553],[412,568]]), bas: [[0,645],[100,642],[200,638],[300,627],[350,616],[390,596],[412,568]] },
      { id: 'fascia', tissu: 'fascia', ligne: F, ep: 10 },
      { id: 'nerf', tissu: 'nerf', contour: ovale(520, 578, 42, 17) },
      { id: 'artere', tissu: 'artere', contour: ovale(605, 575, 33, 22) },
      { id: 'humerus', tissu: 'os', cortex: CORTEX },
    ],
    labels: [
      { s: 'fascia', x: 760, y: 104, dx: 0, dy: 70, text: 'Fascia du deltoïde' },
      { s: 'deltoide', x: 300, y: 300, dx: 0, dy: -70, text: 'Deltoïde' },
      { s: 'nerf', x: 512, y: 574, dx: -200, dy: -170, text: 'Nerf axillaire', vue: 'anat' },
      { s: 'artere', x: 615, y: 568, dx: 175, dy: -130, text: 'A. circonflexe humérale post.', vue: 'anat' },
      { s: 'petit-rond', x: 170, y: 580, dx: 0, dy: 180, text: 'Petit rond' },
      { s: 'graisse-espace', x: 840, y: 578, dx: -30, dy: 150, text: 'Graisse de l\'espace', vue: 'anat' },
      { s: 'humerus', x: 480, y: 625, dx: 20, dy: 215, text: 'Col chirurgical de l\'humérus' },
    ],
  }];
})();
