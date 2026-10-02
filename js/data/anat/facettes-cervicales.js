/* Coupes anatomiques recalées — facettes cervicales (format : .claude/skills/echo-anatomie/SKILL.md).
   Seule la coupe axiale (echo-2) est tracée. La coupe longitudinale (echo-1) ne l'est pas : les astérisques des auteurs,
   dits « à la taille du pilier », sont posés sur les sommets de la ligne ondulée (interlignes C3/4, C4/5, C5/6 d'après
   leurs propres sigles) et la légende du mémo lit bosses et creux à l'inverse de l'image — à trancher par Mat avant tout tracé. */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  /* lame superficielle : bord profond de la bande feuilletée hyperéchogène */
  const F_SUP = [[0,100],[100,98],[200,93],[300,93],[400,100],[500,120],[600,143],[700,158],[760,165],[820,142],[880,108],[935,102]];
  /* fascia intermusculaire : ligne hyperéchogène nette, pics mesurés (209, 211, 208, 202, 196, 193, 187 …) */
  const F_PROF = [[0,207],[50,209],[100,211],[150,208],[200,202],[250,196],[300,193],[350,187],[400,194],[450,203],[500,209],[550,217],[600,226]];
  /* corticale, d'arrière (gauche) en avant : lame, pente postérieure, coiffe du pilier, barre pilier–tubercule, tubercule postérieur, gouttière de la racine */
  const CORTEX = [[40,768],[95,695],[150,640],[190,575],[212,480],[222,400],[236,330],[255,282],[290,262],[330,258],[370,262],[385,280],[398,310],[412,338],[450,348],[500,345],[518,312],[532,280],[550,268],[568,276],[580,302],[590,345],[600,385],[640,412],[700,425],[770,425],[935,425]];
  const rev = a => a.slice().reverse();
  ECHO.anat['facettes-cervicales'] = [{
    fig: 'img/facettes-cervicales/echo-2.jpg',
    valide: false,
    vb: [1000, 768], orient: { left: 'Postérieur', right: 'Antérieur' },
    lecture: [
      'Supposition — muscles : deux plans séparés par un fascia net (y ≈ 200), non individualisés sur cette image ; aucun nom propre n\'est attribué (superficiel : élévateur de la scapula, splénius ? profond : semi-épineux, multifide ?). Les auteurs situent la branche médiale « entre multifide et longissimus », sans les désigner sur la figure.',
      'Supposition — lame vertébrale : réflecteur oblique profond en bas à gauche (≈ 3 cm), relié à la coiffe du pilier par une pente tracée sur le bord du cône d\'ombre ; les échos situés à gauche de ce réflecteur sont laissés au plan musculaire profond.',
      'Probable — racine : plage grise à stries brillantes désignée NR par les auteurs, limites floues, contour tracé large. Les échos linéaires à sa droite (tubercule antérieur ? fascicules ?) ne sont pas attribués.',
      'Probable — tubercule postérieur : coiffe grisâtre au-dessus du sigle PT ; la corticale entre pilier et tubercule suit la bande brillante mesurée à y ≈ 345.',
      'Certain — orientation : postérieur à gauche, antérieur à droite, peau latérale du cou en haut. Elle découle des sigles des auteurs (pilier articulaire AP, puis tubercule postérieur PT, puis racine NR se suivent d\'arrière en avant) et de leur installation (décubitus latéral, sonde axiale sur la face latérale du cou).',
      'Certain — aiguille dans le plan, d\'arrière en avant, pointe au contact de la corticale du pilier articulaire, en arrière du tubercule postérieur : ligne hyperéchogène continue jusqu\'à la coiffe osseuse. C\'est le geste de branche médiale des auteurs (radiofréquence pulsée), pas l\'injection intra-articulaire de la fiche — déjà dit dans la légende.',
      'Extrapolé — branche médiale, non résolue : dessinée au contact de la corticale, à la pointe de l\'aiguille. Corticale sous la racine et en avant d\'elle (cône d\'ombre). Artère vertébrale, non vue : placée en dedans et en avant de la racine, position schématique — étiquetées sur la coupe anatomique seulement.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[935,0]], bas: [[0,18],[935,18]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,18],[935,18]], bas: F_SUP },
      /* plan superficiel : entre la lame superficielle et le fascia intermusculaire ; en avant du tubercule postérieur il descend jusqu'à la gouttière (la racine est peinte par-dessus) */
      { id: 'm-sup', tissu: 'muscle', contour: F_SUP.concat([[935,102],[935,110],[935,418],[935,425],[935,425],[770,425],[700,425],[640,412],[600,385],[590,345],[583,300],[596,228]], rev(F_PROF.slice(0, 12))) },
      /* plan profond, en arrière du pilier et sur sa coiffe */
      { id: 'm-prof', tissu: 'muscle', contour: F_PROF.slice(0, 8).concat([[388,196],[392,262],[370,258],[330,254],[290,258],[255,278],[236,328],[222,400],[212,480],[190,575],[150,640],[95,695],[40,768],[0,768]]) },
      /* insertions sur le tubercule postérieur, entre pilier et tubercule */
      { id: 'm-tub', tissu: 'muscle', contour: [[392,198],[450,206],[500,212],[550,220],[596,230],[583,300],[568,276],[550,266],[532,278],[518,310],[500,341],[450,344],[412,334],[398,308],[392,262]] },
      { id: 'f-sup', tissu: 'fascia', ligne: F_SUP, ep: 6 },
      { id: 'f-prof', tissu: 'fascia', ligne: F_PROF, ep: 7 },
      { id: 'racine', tissu: 'nerf', contour: [[590,330],[600,285],[630,257],[680,250],[730,275],[790,295],[815,325],[805,370],[760,400],[690,410],[630,395],[598,365]] },
      { id: 'vertebre', tissu: 'os', cortex: CORTEX, vu: [6, 19] },
      { id: 'a-vert', tissu: 'artere', contour: ovale(748, 485, 34, 34), extrapole: true },
      { id: 'bm', tissu: 'nerf', contour: ovale(322, 250, 15, 7), extrapole: true },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[5,50],[298,258]], ep: 5 },
    ],
    labels: [
      { s: 'aiguille', x: 120, y: 131, dx: 20, dy: -101, text: 'Aiguille' },
      { s: 'bm', x: 324, y: 246, dx: 146, dy: -216, text: 'Branche médiale (non vue)', vue: 'anat' },
      { s: 'm-sup', x: 440, y: 152, dx: 350, dy: 48, text: 'Muscles superficiels' },
      { s: 'racine', x: 720, y: 345, dx: 150, dy: 95, text: 'Racine', vue: 'anat' },
      { s: 'vertebre', x: 330, y: 300, dx: 0, dy: 220, text: 'Pilier articulaire', vue: 'anat' },
      { s: 'vertebre', x: 320, y: 400, dx: 10, dy: 120, text: 'Cône d\'ombre du pilier', vue: 'echo' },
      { s: 'vertebre', x: 550, y: 288, dx: 10, dy: 312, text: 'Tubercule postérieur', vue: 'anat' },
      { s: 'vertebre', x: 168, y: 640, dx: 192, dy: 20, text: 'Lame (supposée)', vue: 'anat' },
      { s: 'a-vert', x: 752, y: 515, dx: 38, dy: 175, text: 'Artère vertébrale (non vue)', vue: 'anat' },
      { s: 'm-prof', x: 90, y: 330, dx: 60, dy: 410, text: 'Muscles profonds' },
    ],
  }];
})();
