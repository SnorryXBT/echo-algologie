/* Coupes anatomiques recalées — ganglion impar (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Lee et al., Korean J Pain 2023, fig. 6 (crop 0,0.525,1,0.475 : l'échographie seule ; corrigé = dessin anatomique des auteurs
            au-dessus, relié à l'image par deux flèches : jonction sacro-coccygienne et articulation Co1–Co2).
   echo-2 (Ghai et al., Saudi J Anaesth 2019, fig. 1) : NON tracée — voir zz-refus / rapport. */
(function () {
  const DERME = [[0,14],[1000,14]];
  const SACRUM = [[0,150],[60,145],[130,112],[200,106],[250,98],[285,108],[296,125]];
  const CO1 = [[332,128],[350,120],[400,112],[450,124],[500,137],[550,146],[600,152],[628,166]];
  const CO2 = [[645,174],[700,178],[750,184],[800,186],[850,193],[900,212],[930,232],[960,262],[1000,290]];
  const OS = SACRUM.concat(CO1, CO2);
  const LIG_B = OS.map(p => [p[0], p[1] - 4]);
  const LIG_H = LIG_B.map(p => [p[0], p[1] - 34]);
  const FASC = LIG_H;

  ECHO.anat['ganglion-impar'] = [{
    fig: 'img/ganglion-impar/echo-1.jpg',
    valide: false,
    vb: [1000, 642], orient: { left: 'Crânial', right: 'Caudal' },
    lecture: [
      'Certain — orientation et identité des deux interruptions : dessin anatomique des auteurs qui surmonte l\'image (sacrum à gauche, segments coccygiens à droite), relié par leurs flèches à la jonction sacro-coccygienne (x ≈ 300) et à l\'articulation Co1–Co2 (x ≈ 635). Même sens que le schéma apparié.',
      'Probable — corticales dorsales : pics de brillance (sacrum y ≈ 98–112 ; Co1 y ≈ 112–166 ; Co2 y ≈ 174–212, puis la courbure de sa face caudale) ; cônes d\'ombre francs dessous.',
      'Probable — sous la jonction sacro-coccygienne, des échos profonds traversent la fenêtre articulaire (x ≈ 290–335, y ≈ 300–380) : c\'est la voie de l\'aiguille vers l\'espace précoccygien. Le ganglion impar n\'est pas visible.',
      'Supposition — ligament sacro-coccygien dorsal : bande échogène de 3–4 mm posée sur les corticales (dessinée d\'épaisseur constante d\'après le dessin des auteurs) ; tissu sous-cutané au-dessus, non désigné. Aucune échelle sur l\'image.',
      'Extrapolé — disques sacro-coccygien et Co1–Co2 au-delà de leur bord dorsal ; épaisseur des segments osseux (cône d\'ombre) ; espace précoccygien et ganglion impar (non vus), en avant de la jonction.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: FASC },
      { id: 'scj', tissu: 'fibrocartilage', contour: [[288,118],[300,118],[332,128],[332,660],[290,660]] },
      { id: 'co12', tissu: 'fibrocartilage', contour: [[624,164],[636,166],[648,174],[648,660],[624,660]] },
      { id: 'ligament', tissu: 'ligament', haut: LIG_H, bas: LIG_B },
      { id: 'sacrum', tissu: 'os', cortex: SACRUM, vu: [1, 5] },
      { id: 'co1', tissu: 'os', cortex: CO1, vu: [1, 7] },
      { id: 'co2', tissu: 'os', cortex: CO2, vu: [0, 6] },
    ],
    labels: [
      { s: 'sc', x: 850, y: 80, dx: -20, dy: -30, text: 'Tissu sous-cutané' },
      { s: 'ligament', x: 450, y: 102, dx: 40, dy: -70, text: 'Lig. sacro-coccygien dorsal (supposé)' },
      { s: 'sacrum', x: 200, y: 108, dx: -80, dy: 180, text: 'Sacrum (S5)', vue: 'anat' },
      { s: 'scj', x: 312, y: 135, dx: 30, dy: 330, text: 'Jonction sacro-coccygienne', vue: 'anat' },
      { s: 'co1', x: 500, y: 140, dx: 20, dy: 140, text: 'Co1', vue: 'anat' },
      { s: 'co12', x: 636, y: 172, dx: 160, dy: 220, text: 'Articulation Co1–Co2', vue: 'anat' },
      { s: 'co2', x: 800, y: 190, dx: 60, dy: 80, text: 'Co2', vue: 'anat' },
      { x: 312, y: 340, dx: -170, dy: 120, text: 'Fenêtre : échos profonds', vue: 'echo' },
    ],
  }];
})();
