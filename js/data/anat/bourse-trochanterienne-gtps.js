/* Coupes anatomiques recalées — bourse trochantérienne / GTPS (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 (Lin et al., JMU 2026, fig. 6c) : non tracée, gardée comme illustration (décision de Mat, 7 octobre 2026).
   echo-2 (Corvino et al., Diagnostics 2026, fig. 7, CC BY) : coupe axiale annotée par les auteurs — cercle jaune = tendon du
   petit fessier (face antérieure), astérisque = tendon du moyen fessier, rouge = bourse trochantérienne, bleu = bourse du
   moyen fessier, GMx = grand fessier. Antérieur à droite : miroir du schéma `gt-transverse`. */
(function () {
  const DERME = [[0,46],[250,48],[500,47],[750,46],[1000,45]];
  const FL_H = [[0,224],[100,228],[200,234],[300,236],[400,230],[500,224],[600,221],[700,226],[800,232],[900,228],[1000,226]];
  const FL_B = [[0,262],[100,266],[200,270],[300,266],[400,262],[500,258],[600,256],[700,262],[800,268],[900,266],[1000,262]];
  /* face superficielle de la bandelette : ligne brillante y ≈ 390 à droite, descendant en oblique vers la gauche (aponévrose glutéale) */
  const APO = [[0,505],[50,495],[100,470],[150,445],[200,422],[250,405],[300,398],[350,391],[400,386],[450,385],[500,385],[550,385],[600,386],[650,390],[700,392],[750,392],[800,399],[850,403],[900,396],[950,390],[1000,388]];
  /* face profonde : à droite = ligne rouge des auteurs (bourse trochantérienne) */
  const RED = [[300,466],[350,458],[400,452],[450,447],[500,441],[550,436],[600,430],[650,424],[700,421],[750,418],[790,418]];
  const ITB_B = [[0,533],[50,523],[100,498],[150,473],[200,450],[250,434],[280,448]].concat(RED, [[850,424],[900,427],[950,428],[1000,428]]);
  const BURSE_H = [[296,470]].concat(RED);
  const BURSE_B = [[296,470],[310,484],[350,474],[400,468],[450,462],[500,456],[550,451],[600,445],[650,439],[700,435],[750,431],[790,418]];
  /* ligne bleue des auteurs = face profonde du tendon du moyen fessier */
  const BLUE = [[305,567],[350,541],[400,527],[450,515],[500,506],[550,498],[600,492],[650,487],[700,483],[720,484]];
  const CORTEX = [[60,750],[150,690],[230,630],[280,590],[305,567],[350,547],[400,533],[450,522],[500,516],[550,510],[600,505],[650,500],[700,498],[750,495],[800,497],[850,503],[900,518],[950,548],[1000,585]];
  const GMIN_H = [[790,496],[850,481],[900,478],[950,478],[1000,482]];
  ECHO.anat['bourse-trochanterienne-gtps'] = [{
    fig: 'img/bourse-trochanterienne-gtps/echo-2.jpg',
    valide: false,
    vb: [1000, 755], orient: { left: 'Postérieur', right: 'Antérieur' },
    lecture: [
      'Certain — antérieur à droite, déduit du corrigé des auteurs : le cercle jaune (tendon du petit fessier, « attaches on the anterior aspect of the trochanter ») est au bord droit, le grand fessier (GMx) à gauche. Coupe en miroir du schéma apparié (antérieur à gauche).',
      'Certain — tendon du moyen fessier = bande entre les deux lignes des auteurs (astérisque) ; bourse trochantérienne (rouge) à sa face superficielle, bourse du moyen fessier (bleue) à sa face profonde — toutes deux virtuelles, dessinées par les auteurs sur une hanche normale. Le crochet postérieur de la ligne rouge (recessus de la bourse autour du bord postérieur du tendon) n\'est pas reproduit : la bourse est dessinée comme un plan.',
      'Probable — corticale du grand trochanter : plateau brillant sous la ligne bleue (facette latérale, y ≈ 495–565), pente descendante à droite à partir de x ≈ 850 (facette antérieure, estompée par l\'anisotropie).',
      'Probable — fascia lata = bande brillante double y ≈ 225–260 ; couche striée 260–390 = fibres superficielles du grand fessier (légende : « covers the trochanter with its muscular fibers ») ; bande brillante à y ≈ 390, qui descend en oblique vers la gauche = bandelette ilio-tibiale / aponévrose glutéale, dont la face profonde porte la bourse rouge (« undersurface of the gluteus maximus and the fasciae latae »).',
      'Supposition — tendon du petit fessier : seul le cercle jaune des auteurs est certain ; ses limites (coin sur la facette antérieure, sous l\'extrémité antérieure du moyen fessier) sont dessinées par connaissance anatomique.',
      'Supposition — plage hypoéchogène « GMx » des auteurs, à gauche sous l\'aponévrose oblique = partie profonde du grand fessier, en arrière du trochanter ; cloisons brillantes obliques de l\'hypoderme dessinées en fascia.',
      'Extrapolé — facette postérieure (corticale non vue sous le grand fessier) et pente antérieure au-delà de x ≈ 900 : pointillés.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'hypoderme', tissu: 'graisse', haut: DERME, bas: FL_H },
      { id: 'cloison_g', tissu: 'fascia', ligne: [[0,135],[100,143],[150,157],[200,167],[250,176],[300,190],[345,214]], ep: 4 },
      { id: 'cloison_d', tissu: 'fascia', ligne: [[480,150],[600,150],[700,153],[770,172]], ep: 4 },
      { id: 'fascia_lata', tissu: 'fascia', haut: FL_H, bas: FL_B },
      { id: 'gmx_sup', tissu: 'muscle', haut: FL_B, bas: APO },
      { id: 'itb', tissu: 'ligament', haut: APO, bas: ITB_B },
      { id: 'gmx_prof', tissu: 'muscle', contour: [[0,533],[50,523],[100,498],[150,473],[200,450],[250,434],[280,448],[296,470],[296,540],[305,567],[280,590],[230,630],[150,690],[60,750],[0,755]] },
      { id: 'bourse_troch', tissu: 'bourse', haut: BURSE_H, bas: BURSE_B, lame: [0.3, 0.7] },
      { id: 'gmed', tissu: 'tendon', haut: BURSE_B.slice(0, -1).concat([[790,420],[850,424],[900,427],[950,428],[1000,428]]), bas: [[296,470],[296,540]].concat(BLUE, [[750,493],[790,496],[850,481],[900,478],[950,478],[1000,482]]), enthese: 0.55 },
      { id: 'bourse_gmed', tissu: 'bourse', haut: BLUE, bas: [[305,567],[350,547],[400,533],[450,522],[500,516],[550,510],[600,505],[650,500],[700,498],[720,497]], lame: [0.25, 0.75] },
      { id: 'gmin', tissu: 'tendon', haut: GMIN_H, bas: [[790,496],[850,503],[900,518],[950,548],[1000,585]], enthese: 0.9 },
      { id: 'gt', tissu: 'os', cortex: CORTEX, vu: [[4, 16]] },
    ],
    labels: [
      { s: 'peau', x: 60, y: 22, dx: 40, dy: 72, text: 'Peau' },
      { s: 'hypoderme', x: 330, y: 140, dx: -30, dy: -46, text: 'Hypoderme' },
      { s: 'cloison_g', x: 250, y: 176, dx: -100, dy: 22, text: 'Cloison de l\'hypoderme' },
      { s: 'fascia_lata', x: 520, y: 242, dx: 0, dy: -150, text: 'Fascia lata' },
      { s: 'gmx_sup', x: 720, y: 325, dx: 70, dy: -233, text: 'Grand fessier (superficiel)' },
      { s: 'bourse_troch', x: 560, y: 440, dx: 260, dy: -255, text: 'Bourse trochantérienne (virtuelle)' },
      { s: 'itb', x: 200, y: 436, dx: -70, dy: 270, text: 'Bandelette ilio-tibiale' },
      { s: 'gmx_prof', x: 120, y: 560, dx: 60, dy: 50, text: 'Grand fessier (profond)' },
      { s: 'gmed', x: 520, y: 490, dx: -30, dy: 215, text: 'Tendon du moyen fessier' },
      { s: 'bourse_gmed', x: 470, y: 513, dx: 90, dy: 107, text: 'Bourse du moyen fessier' },
      { s: 'gt', x: 700, y: 560, dx: 80, dy: 145, text: 'Grand trochanter' },
      { s: 'gmin', x: 950, y: 505, dx: -100, dy: 135, text: 'Tendon du petit fessier' },
    ],
  }];
})();
