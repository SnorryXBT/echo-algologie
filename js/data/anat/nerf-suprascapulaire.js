/* Coupe anatomique recalée — nerf suprascapulaire (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Gahier et al., Front Neurol 2025, fig. 1 panneau D (CC BY 4.0), recadré sur l'image échographique seule (350 × 294 px :
   basse résolution, interfaces fines non traçables avec certitude). Tracée le 7 octobre 2026 en remplacement de Costa 2026 fig. 2
   (orientation et nerf non donnés par les auteurs), sur demande de Mat. */
(function () {
  const F0 = [[0,104],[100,112],[200,112],[300,118],[400,128],[500,128],[600,126],[700,110],[790,100]];                 // fascia superficiel du trapèze (ligne brillante continue)
  const F1 = [[0,211],[100,211],[200,212],[300,211],[400,214],[500,205],[600,215],[700,232],[790,252]];                 // fascia trapèze / supra-épineux
  /* plancher osseux : pente médiale, échancrure (lèvre médiale x ≈ 330, fond ≈ 655, lèvre latérale x ≈ 700), pente latérale — pics de brillance par colonne */
  const SCAP = [[0,525],[50,540],[100,560],[150,576],[200,598],[250,608],[300,612],[330,606],[345,625],[370,650],[420,658],[470,654],[520,648],[570,641],[610,632],[645,614],[675,596],[700,582],[750,566],[800,554],[850,549],[900,545],[950,541],[1000,538]];
  const LIG = [[322,606],[358,599],[400,597],[458,595],[510,591],[558,588],[610,585],[660,582]];                        // ligament transverse supérieur (flèches des auteurs à x ≈ 358, 458, 558)
  ECHO.anat['nerf-suprascapulaire'] = [{
    fig: 'img/nerf-suprascapulaire/echo-2.jpg',
    valide: false,
    vb: [1000, 840], orient: { left: 'Médial', right: 'Latéral (acromion)' },
    lecture: [
      'Certain — orientation : « Acromion » inscrit par les auteurs en haut à droite, sur la ligne brillante superficielle dont l\'ombre occupe le quart inférieur droit : latéral à droite, médial à gauche, même orientation que le schéma apparié. Trapèze, supra-épineux, ligament transverse supérieur (trois flèches) et nerf suprascapulaire (deux astérisques) : étiquettes et légende des auteurs.',
      'Probable — plancher osseux : pente médiale brillante qui descend de (0 ; 525) à la lèvre médiale (330 ; 606), fond de l\'échancrure à y ≈ 655 entre x ≈ 370 et 570, lèvre latérale vers x ≈ 700 d\'où la ligne remonte en latéral jusqu\'à l\'ombre de l\'acromion. L\'échancrure ainsi lue est large (≈ 1,9 cm) et peu profonde (≈ 3 mm) : soit une échancrure réellement évasée, soit la concavité de la fosse vue en coupe oblique, le vrai sillon n\'étant pas résolu — à relire.',
      'Probable — ligament transverse : ligne brillante tendue d\'une lèvre à l\'autre au-dessus du fond (y ≈ 590–605), désignée par les flèches ; sa continuité latérale avec la corticale (x > 660) n\'est pas séparable.',
      'Probable — nerf : ovale posé sous le ligament, centré sur les astérisques des auteurs (x ≈ 528–559, y ≈ 636) ; aucun fascicule résolu à 350 px, taille (≈ 3 × 2 mm) posée par connaissance anatomique. L\'artère suprascapulaire n\'est ni désignée ni visible (pas de Doppler) : non dessinée.',
      'Probable — plans musculaires : fascia superficiel à y ≈ 105–130 (graisse sous-cutanée au-dessus), fascia trapèze / supra-épineux à y ≈ 211 (il descend vers l\'acromion en latéral) ; « Trapezius » et « Supra-spinatus » des auteurs sont posés dans ces deux couches. Le trapèze est mince ici (≈ 0,5 cm pour 1 cm ≈ 180 unités d\'après l\'échelle du panneau).',
      'Supposition — bande brillante oblique entre x ≈ 700 et 800 qui descend du fascia superficiel vers le bord médial de l\'acromion : insertion acromiale du trapèze ou fascia ; laissée dans le trapèze, non tracée.',
      'Extrapolé — corticale de l\'acromion (ligne brillante à y ≈ 240–260, x > 790, dessinée sur ce qui est visible) et plancher de la fosse sous son ombre (x > 800).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,42],[1000,42]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,42],[1000,42]], bas: F0.concat([[900,110],[1000,112]]) },
      { id: 'trapeze', tissu: 'muscle', haut: F0, bas: F1 },
      { id: 'sc-lat', tissu: 'graisse', haut: [[790,100],[900,110],[1000,112]], bas: [[790,252],[850,254],[900,248],[950,243],[1000,240]] },
      { id: 'supra', tissu: 'muscle', haut: F1, bas: SCAP.slice(0, 7).concat(LIG, [[700,582],[750,566],[790,554]]) },
      { id: 'lig', tissu: 'ligament', ligne: LIG, ep: 8 },
      { id: 'echancrure', tissu: 'graisse', haut: LIG.concat([[700,582]]), bas: SCAP.slice(7, 18) },
      { id: 'nerf', tissu: 'nerf', contour: [[505,604],[525,596],[548,596],[568,604],[578,618],[572,634],[555,642],[530,642],[510,634],[503,619]] },
      { id: 'scapula', tissu: 'os', cortex: SCAP, vu: [0, 20] },
      { id: 'acromion', tissu: 'os', cortex: [[790,262],[850,254],[900,248],[950,243],[1000,240]] },
    ],
    labels: [
      { s: 'trapeze', x: 450, y: 165, dx: 120, dy: -95, text: 'Trapèze', vue: 'anat' },
      { s: 'supra', x: 420, y: 400, dx: 150, dy: -40, text: 'Supra-épineux', vue: 'anat' },
      { s: 'lig', x: 458, y: 595, dx: -260, dy: -120, text: 'Lig. transverse supérieur', vue: 'anat' },
      { s: 'nerf', x: 543, y: 620, dx: 80, dy: 120, text: 'N. suprascapulaire', vue: 'anat' },
      { s: 'echancrure', x: 420, y: 640, dx: -230, dy: 90, text: 'Échancrure', vue: 'anat' },
      { s: 'scapula', x: 150, y: 578, dx: -40, dy: -140, text: 'Plancher de la fosse' },
      { s: 'acromion', x: 900, y: 250, dx: -60, dy: 110, text: 'Acromion', vue: 'anat' },
      { s: 'acromion', x: 900, y: 450, dx: -120, dy: 180, text: 'Ombre de l\'acromion', vue: 'echo' },
      { s: 'sc', x: 700, y: 75, dx: 80, dy: 60, text: 'Graisse sous-cutanée', vue: 'anat' },
    ],
  }];
})();
