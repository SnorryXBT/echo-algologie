/* Coupes anatomiques recalées — branches médiales lombaires (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Zhao et al., Diagn Interv Radiol 2025, fig. 3 (450 px, sonde convexe ; SP, Sup. AP, TP, MF, ES, QL, PS, flèche = aiguille).
   echo-1 (Jung et al., Asian Spine J 2012, fig. 2B) : NON tracée — 351 px, ligne osseuse sans pic unique, sigles d'étage posés ≈ 1,5 cm
            sous la corticale sans désigner les interlignes : soumise à Mat. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* sonde convexe : peau en arc */
  const PEAU = [[0,-200],[150,-40],[250,15],[400,58],[513,70],[650,55],[800,10],[900,-60],[1000,-180]];
  const DERME = PEAU.map(p => [p[0], p[1] + 16]);
  const TLF = [[0,-60],[200,80],[300,112],[400,128],[513,135],[600,130],[700,115],[800,90],[1000,0]];
  /* fascia entre érecteurs et carré des lombes, jusqu'à la pointe du processus transverse */
  const ES_QL = [[0,200],[100,215],[150,218],[200,232],[260,270],[320,330]];
  const TP = [[320,330],[350,338],[400,348],[450,368],[500,388],[530,398]];
  const SAP = [[530,398],[560,360],[600,330],[650,312],[700,305],[730,290],[745,220],[760,172],[780,165],[805,200],[815,260]];

  ECHO.anat['branches-mediales-lombaires'] = [{
    fig: 'img/branches-mediales-lombaires/echo-2.jpg',
    valide: false,
    vb: [1000, 727], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : processus épineux (SP) à droite, donc médial à droite et latéral à gauche ; inverse du schéma apparié (la légende de la figure le dit).',
      'Certain — identité : sigles des auteurs (SP, Sup. AP, TP, MF, ES, QL, PS) ; flèche = aiguille (« arrows, needle », légende d\'origine), pointe à l\'angle processus articulaire supérieur / processus transverse.',
      'Probable — processus transverse : bande brillante oblique (pics y ≈ 338–390, x 320–530) ; le psoas reste visible dessous : réflecteur court, os dessiné sur 3 mm seulement.',
      'Probable — processus articulaire supérieur : réflecteur y ≈ 305–330 (x 560–700) au toit d\'un cône d\'ombre ; flanc du processus épineux et sa pointe (y ≈ 165) estimés au bord de l\'ombre médiale.',
      'Supposition — limite érecteurs / carré des lombes : ligne brillante oblique de (100, 215) à la pointe du processus transverse ; limite carré des lombes / psoas et limite érecteurs / multifide : non vues, dessinées par connaissance anatomique.',
      'Supposition — fascia thoraco-lombaire (feuillet postérieur) sur la première ligne continue sous le tissu sous-cutané (y ≈ 110–135) ; non désigné.',
      'Extrapolé — aiguille sur la flèche des auteurs (l\'aiguille elle-même n\'est pas visible) ; réflecteur profond sous le processus articulaire (x ≈ 680–790, y ≈ 540–580 : corps vertébral ?) non attribué, inclus dans l\'os ; plans hors du secteur.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: PEAU, bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: TLF },
      { id: 'dorsaux', tissu: 'muscle', haut: TLF, bas: ES_QL.concat(TP.slice(1), SAP.slice(1), [[1000,260]]) },
      { id: 'mf', tissu: 'muscle', contour: [[560,360],[600,330],[650,312],[700,305],[730,290],[745,220],[760,172],[700,168],[640,192],[590,250],[560,330]], extrapole: true },
      { id: 'ql', tissu: 'muscle', contour: ES_QL.concat([[250,420],[180,520],[120,650],[60,740],[0,740]]) },
      { id: 'ps', tissu: 'muscle', contour: [[320,330],[530,398],[545,740],[60,740],[120,650],[180,520],[250,420]] },
      { id: 'tlf', tissu: 'fascia', ligne: TLF, ep: 7 },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[318,140],[520,353]], ep: 6, extrapole: true },
      { id: 'tp', tissu: 'os', cortex: TP, profondeur: 22 },
      { id: 'vertebre', tissu: 'os', cortex: SAP, vu: [1, 5] },
    ],
    labels: [
      { s: 'sc', x: 513, y: 100, dx: 200, dy: -60, text: 'Tissu sous-cutané' },
      { s: 'tlf', x: 250, y: 98, dx: -140, dy: -40, text: 'Fascia thoraco-lombaire (supposé)' },
      { s: 'dorsaux', x: 520, y: 220, dx: 0, dy: 0, text: 'Érecteurs du rachis', vue: 'anat' },
      { s: 'mf', x: 670, y: 260, dx: 0, dy: 0, text: 'Multifide', vue: 'anat' },
      { s: 'aiguille', x: 400, y: 226, dx: -250, dy: 30, text: 'Aiguille (flèche des auteurs)', vue: 'anat' },
      { s: 'ql', x: 180, y: 330, dx: -60, dy: 0, text: 'Carré des lombes', vue: 'anat' },
      { s: 'tp', x: 430, y: 360, dx: -70, dy: 70, text: 'Processus transverse', vue: 'anat' },
      { x: 530, y: 398, dx: 200, dy: 120, text: 'Cible : angle PAS / PT', vue: 'anat' },
      { s: 'vertebre', x: 640, y: 315, dx: 210, dy: 0, text: 'Processus articulaire sup.', vue: 'anat' },
      { s: 'vertebre', x: 765, y: 168, dx: 110, dy: -90, text: 'Processus épineux', vue: 'anat' },
      { s: 'ps', x: 360, y: 530, dx: 0, dy: 60, text: 'Psoas', vue: 'anat' },
    ],
  }];
})();
