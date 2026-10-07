/* Coupes anatomiques recalées — patte d'oie et tendinopathie patellaire (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : tendon patellaire en grand axe, zone hypoéchogène profonde et néovaisseaux (Miyata et al., Cureus 2025, fig. 1, CC BY 4.0).
   echo-1 : remplacée le 7 octobre 2026 (Zhang et al., fig. 2, plan oblique non orienté, retirée sur décision de Mat) par Mun et al., Medicine 2017,
   fig. 2 (CC BY) — bursite anserine, aiguille sous la lame tendineuse ; coupe tracée dans le second bloc ci-dessous. */
(function () {
  const DERME = [[0,46],[250,46],[500,48],[750,48],[1000,46]];
  /* face superficielle du tendon : sous la bande de stries brillantes (y ≈ 85–110) ; sur la patella, bord profond du croissant hypoéchogène */
  const SUP = [[0,150],[60,138],[100,125],[150,112],[200,106],[250,106],[300,106],[400,108],[500,108],[600,108],[700,110],[800,112],[900,112],[1000,112]];
  /* corticale antérieure de la patella jusqu'à la pointe : bord superficiel de la bande brillante */
  const PATELLA = [[0,192],[50,188],[100,195],[150,210],[200,228],[232,255],[238,268]];
  /* face profonde du tendon : renflement fusiforme du tiers proximal (bande échogène courbe), puis ligne brillante tendon / graisse de Hoffa */
  const PROF = [[258,318],[300,346],[350,374],[395,388],[440,366],[475,312],[505,268],[550,254],[650,250],[750,245],[850,240],[950,228],[1000,222]];
  ECHO.anat['patte-d-oie-tendinopathie-patellaire'] = [{
    fig: 'img/patte-d-oie-tendinopathie-patellaire/echo-2.jpg',
    valide: true,
    vb: [1000, 752], orient: { left: 'Proximal (patella)', right: 'Distal (TTA)' },
    lecture: [
      'Probable — face profonde du tendon au tiers proximal : tracée sur la bande échogène courbe qui limite en bas la plage hypoéchogène (y jusqu\'à ≈ 390), ce qui fait du tendon un fuseau de ≈ 9 mm sous la pointe de la patella contre ≈ 5 mm plus bas. C\'est la lecture des auteurs (« deep layer of the proximal portion of the patellar tendon »). Autre lecture possible : face profonde rectiligne dans le prolongement de la ligne brillante de droite (y ≈ 265), la partie basse de la plage et du signal Doppler étant alors dans la graisse de Hoffa.',
      'Certain — orientation et repères désignés par les auteurs : patella à gauche (corticale convexe, cône d\'ombre), tendon patellaire en grand axe, plage hypoéchogène vascularisée désignée par la flèche ; concordant avec le schéma apparié.',
      'Certain — graisse de Hoffa sous le tendon (non désignée par les auteurs, par anatomie) ; la ligne brillante y ≈ 222–265 de la moitié droite est l\'interface tendon / graisse.',
      'Probable — face superficielle du tendon : sous la bande de stries brillantes y ≈ 85–110 ; sur la patella, fibres prépatellaires en continuité avec le tendon, sous un croissant hypoéchogène vascularisé (tissu sous-cutané prépatellaire, laissé sans nom propre).',
      'Probable — contour de la plage hypoéchogène : limites floues, en partie masquées par le signal Doppler, dont la tache déborde les vaisseaux (les néovaisseaux ne sont pas dessinés un à un).',
      'Extrapolé — face postérieure de la pointe de la patella et graisse de Hoffa en arrière d\'elle : dans le cône d\'ombre, dessinées par anatomie.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: SUP },
      { id: 'hoffa-ombre', tissu: 'graisse', haut: [[0,470],[70,430],[150,365],[215,305],[238,268]], bas: [[0,752],[238,752]], extrapole: true },
      { id: 'hoffa', tissu: 'graisse', haut: [[238,268]].concat(PROF), bas: [[238,752],[1000,752]] },
      { id: 'tendon', tissu: 'tendon', haut: SUP, bas: PATELLA.concat(PROF), enthese: 0.22 },
      { id: 'zone', tissu: 'tendon', contour: [[246,226],[300,216],[380,216],[450,236],[488,268],[470,312],[438,362],[395,384],[350,370],[302,342],[262,314],[243,272]] },
      { id: 'patella', tissu: 'os', contour: [[-40,192],[0,192],[50,188],[100,195],[150,210],[200,228],[232,255],[238,268],[215,305],[150,365],[70,430],[-40,490]], vu: [1, 7] },
    ],
    labels: [
      { s: 'sc', x: 620, y: 75, dx: 150, dy: -40, text: 'Peau et tissu sous-cutané' },
      { s: 'tendon', x: 700, y: 200, dx: 120, dy: 130, text: 'Tendon patellaire', vue: 'anat' },
      { s: 'tendon', x: 150, y: 160, dx: 60, dy: -100, text: 'Fibres prépatellaires' },
      { s: 'patella', x: 90, y: 300, dx: 20, dy: 70, text: 'Patella (pointe)', vue: 'anat' },
      { s: 'zone', x: 400, y: 300, dx: -60, dy: 210, text: 'Zone hypoéchogène : face profonde, tiers proximal', vue: 'anat' },
      { s: 'zone', x: 395, y: 290, dx: -90, dy: 220, text: 'Néovaisseaux (Doppler)', vue: 'echo' },
      { s: 'hoffa', x: 700, y: 400, dx: 60, dy: 180, text: 'Graisse de Hoffa' },
      { s: 'patella', x: 120, y: 520, dx: 0, dy: 110, text: 'Cône d\'ombre de la patella', vue: 'echo' },
    ],
  }];
})();

/* echo-1 — Mun et al., Medicine 2017, fig. 2, CC BY. Seule orientation inscrite : « lateral » à droite ; sur la face antéro-médiale du tibia,
   latéral = antérieur → antérieur à droite, miroir du schéma apparié (lecture à confirmer). Corrigé des auteurs : PATT (lame tendineuse
   épaissie, flèche creuse descendante), étoile (bourse), « border of tibia » (flèches creuses ascendantes), aiguille (trois flèches pleines). */
(function () {
  const DERME = [[0,35],[200,40],[300,55],[450,62],[600,60],[800,45],[1000,40]];
  /* bord profond de la bande brillante superficielle (fascia / face superficielle de la lame tendineuse) */
  const SUP = [[0,240],[150,225],[280,205],[400,195],[500,195],[650,195],[800,205],[900,220],[1000,228]];
  /* bord du tibia : ligne brillante désignée par les auteurs (x ≈ 330–900), prolongée en arrière où elle plonge sous la lame tendineuse */
  const TIBIA = [[0,665],[100,612],[200,575],[300,520],[350,480],[400,452],[450,438],[500,428],[560,416],[650,402],[750,408],[800,418],[900,445],[1000,462]];
  const AIG = [[0,20],[200,115],[400,245],[640,320]];
  ECHO.anat['patte-d-oie-tendinopathie-patellaire'].push({
    fig: 'img/patte-d-oie-tendinopathie-patellaire/echo-1.jpg',
    valide: false,
    vb: [1000, 770], orient: { left: 'Postérieur (lecture)', right: 'Antérieur — « lateral » des auteurs' },
    lecture: [
      'Probable — orientation : les auteurs n\'inscrivent que « lateral » à droite. Sur la face antéro-médiale du tibia, le côté latéral est le côté antérieur : antérieur à droite, aiguille venant de l\'arrière — miroir du schéma apparié (antérieur à gauche, aiguille d\'avant en arrière). Le plan de coupe n\'est pas donné (transversal oblique supposé). Lecture à confirmer par Mat.',
      'Certain — corrigé des auteurs : bord du tibia (ligne brillante y ≈ 400–450, deux flèches creuses), bourse anserine distendue (étoile, plage hypoéchogène entre tendon et tibia), lame tendineuse épaissie « PATT » (flèche creuse descendante, x ≈ 210), aiguille rectiligne du coin supérieur gauche à la bourse (trois flèches pleines).',
      'Probable — lame tendineuse de la patte d\'oie = coin échogène épais en arrière de la bourse, entre la bande brillante superficielle (y ≈ 200–240) et le tibia ; son bord antéro-superficiel est longé par l\'aiguille, qui atteint la bourse à son bord antérieur sans traverser le tendon. Épaisseur apparente de la lame (≈ 350 px à x = 200) : soit tendon épaissi dans toute cette hauteur, soit tendon limité à sa moitié profonde — indécidable sur cette image.',
      'Supposition — en avant de la bourse (x > 650) et entre l\'aiguille et la bourse : tissu non attribué (fascia, graisse, extrémité antérieure de la lame) ; ligament collatéral médial non désigné et non individualisé.',
      'Extrapolé — bord du tibia en arrière de x ≈ 330 (sous la lame tendineuse, faible) et en avant de x ≈ 900 : pointillés.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'hypoderme', tissu: 'graisse', haut: DERME, bas: SUP },
      { id: 'tissu', tissu: 'indetermine', haut: SUP, bas: TIBIA },
      { id: 'tendon', tissu: 'tendon', contour: [[0,240],[150,225],[280,205],[340,196],[400,230],[470,268],[520,290],[470,285],[420,296],[380,318],[352,350],[338,400],[320,470],[300,520],[200,575],[100,612],[0,665]] },
      { id: 'bourse', tissu: 'liquide', contour: [[380,300],[450,282],[530,290],[600,308],[645,330],[650,375],[600,405],[520,418],[430,440],[370,430],[345,400],[350,345]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: AIG, ep: 6 },
      { id: 'tibia', tissu: 'os', cortex: TIBIA, vu: [[3, 12]] },
    ],
    labels: [
      { s: 'peau', x: 120, y: 18, dx: 130, dy: 60, text: 'Peau' },
      { s: 'hypoderme', x: 650, y: 120, dx: 150, dy: -40, text: 'Tissu sous-cutané' },
      { s: 'aiguille', x: 300, y: 180, dx: 200, dy: -110, text: 'Aiguille, dans le plan' },
      { s: 'aiguille', x: 636, y: 318, dx: 200, dy: -30, text: 'Pointe dans la bourse' },
      { s: 'tendon', x: 210, y: 450, dx: 0, dy: 250, text: 'Lame tendineuse de la patte d\'oie (épaissie)' },
      { s: 'bourse', x: 490, y: 360, dx: 190, dy: 200, text: 'Bourse anserine distendue' },
      { s: 'tibia', x: 620, y: 404, dx: 30, dy: 331, text: 'Tibia (bord)' },
      { s: 'tissu', x: 850, y: 320, dx: 20, dy: 300, text: 'Plan non attribué' },
    ],
  });
})();
