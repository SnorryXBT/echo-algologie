/* Coupes anatomiques recalées — tendon du long biceps, gouttière bicipitale (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 (intervalle des rotateurs, pièce cadavérique, Naňka et al. fig. 1B) n'est PAS tracée : le tendon n'y est pas désigné par les auteurs
   et deux lectures restent possibles — soumis à Mat. */
(function () {
  const ovale = (cx, cy, rx, ry) => { const o = []; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI; o.push([Math.round(cx + rx * Math.cos(t)), Math.round(cy + ry * Math.sin(t))]); } return o; };
  const FASCIA = [[0,100],[100,100],[200,84],[300,79],[400,78],[500,68],[600,66],[700,66],[800,60],[950,66],[1000,66]];
  const TOIT = [[0,283],[100,274],[200,264],[270,262],[300,264],[400,272],[500,281],[600,279],[700,284],[730,292],[760,300],[850,318],[950,322],[1000,330]];   // face profonde du deltoïde
  const OS = [[0,285],[100,277],[200,268],[270,286],[330,318],[400,343],[440,378],[460,393],[500,400],[562,395],[600,372],[630,338],[660,314],[700,302],[750,308],[775,319],[812,362],[875,437],[900,531],[940,640],[1000,770]];
  const LHT_BAS = [[200,268],[270,288],[330,300],[400,296],[500,303],[600,300],[680,299],[730,300]];
  ECHO.anat['long-biceps'] = [{
    fig: 'img/long-biceps/echo-1.jpg',
    valide: true,
    vb: [1000, 787], orient: { left: 'Latéral (grand tubercule)', right: 'Médial (petit tubercule)' },
    lecture: [
      'Certain — orientation et identité des repères : grand tubercule à gauche, petit tubercule à droite, tendon du long biceps au fond de la gouttière sous le ligament huméral transverse, deltoïde en surface, tendon du subscapulaire à droite du petit tubercule — d\'après le panneau d de la même figure, corrigé annoté et colorisé par les auteurs (GT / LT / BIL / THL / SUB T ; autre appareil, non recalé au pixel). Image en miroir du schéma apparié.',
      'Probable — tendon : plage échogène ovalaire qui occupe la gouttière (x ≈ 430–615, y ≈ 302–395), posée sur le fond cortical concave (y ≈ 397).',
      'Probable — ligament huméral transverse : bande hyperéchogène continue (y ≈ 270–300) qui ponte les deux tubercules ; elle se confond en dehors avec la corticale du grand tubercule.',
      'Supposition — limite profonde du subscapulaire : plusieurs lignes obliques parallèles à droite du petit tubercule ; la plus brillante est prise pour la corticale.',
      'Supposition — contenu de la gouttière autour du tendon (tissu conjonctivo-graisseux) : non résolu, dessiné pour combler l\'espace entre tendon, ligament et parois.',
      'Extrapolé — gaine synoviale (liseré non résolu sur une image de 267 px) et branche ascendante de l\'artère circonflexe antérieure, au bord latéral du tendon (aucun Doppler sur cette image) : dessinées par connaissance anatomique, étiquetées sur la coupe anatomique seulement. La colonne grise sous la gouttière est une réverbération.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,22],[1000,22]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,22],[1000,22]], bas: FASCIA },
      { id: 'deltoide', tissu: 'muscle', haut: FASCIA, bas: TOIT },
      { id: 'subscapulaire', tissu: 'tendon', haut: TOIT.slice(10), bas: [[760,304]].concat(OS.slice(15)) },
      { id: 'gouttiere', tissu: 'conjonctif', haut: LHT_BAS, bas: OS.slice(2, 14) },
      { id: 'gaine', tissu: 'liquide', fin: true, extrapole: true, contour: [[415,318],[470,302],[535,298],[600,303],[628,330],[618,372],[575,397],[505,402],[448,392],[420,360]] },
      { id: 'artere', tissu: 'artere', extrapole: true, contour: ovale(396, 322, 9, 9) },
      { id: 'biceps', tissu: 'tendon', contour: [[432,332],[470,310],[530,304],[590,310],[614,336],[604,368],[565,389],[505,394],[456,384],[434,360]] },
      { id: 'lht', tissu: 'ligament', haut: TOIT.slice(2, 10), bas: LHT_BAS },
      { id: 'humerus', tissu: 'os', cortex: OS, vu: [0, 18] },
    ],
    labels: [
      { s: 'deltoide', x: 350, y: 170, dx: -50, dy: -140, text: 'Deltoïde' },
      { s: 'lht', x: 500, y: 292, dx: 120, dy: -262, text: 'Lig. huméral transverse' },
      { s: 'gaine', x: 623, y: 338, dx: 217, dy: -148, text: 'Gaine synoviale (cible)', vue: 'anat' },
      { s: 'humerus', x: 150, y: 330, dx: 0, dy: 70, text: 'Grand tubercule' },
      { s: 'artere', x: 396, y: 326, dx: -166, dy: 144, text: 'A. circonflexe ant. (br. asc.)', vue: 'anat' },
      { s: 'biceps', x: 520, y: 350, dx: 0, dy: 210, text: 'Tendon du long biceps' },
      { s: 'humerus', x: 715, y: 345, dx: 5, dy: 95, text: 'Petit tubercule' },
      { s: 'subscapulaire', x: 900, y: 400, dx: -50, dy: 160, text: 'Tendon du subscapulaire' },
    ],
  }];
})();
