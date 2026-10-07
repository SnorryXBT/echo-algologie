/* Coupes anatomiques recalées — nerf tibial au tunnel tarsien (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Benimeli-Fenollar et al. (J Foot Ankle Res 2026, fig. 2), coupe courte 4 cm au-dessus de la malléole médiale, `crop` de la figure
   limité à l'image (interface de l'appareil exclue). Tracée le 7 octobre 2026 sur la lecture de Mat : les deux ovales noirs au-dessus des
   pointes de flèches sont l'artère et la veine tibiales postérieures ; le nerf est désigné par les deux flèches des auteurs.
   echo-2 (Garg et al., fig. 1) : non tracée, en cours de remplacement. */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const PEAU = [[0,55],[1000,55]];
  /* ligne brillante continue y ≈ 245–258 sur toute la largeur : fascia crural probable */
  const F1 = [[0,250],[100,246],[200,250],[300,246],[400,258],[500,246],[600,245],[700,250],[800,242],[900,258],[1000,262]];
  /* seconde ligne brillante (y ≈ 300–345), qui rejoint la corticale à gauche : septum intermusculaire transverse ? */
  const F2 = [[0,296],[100,300],[150,318],[200,335],[300,338],[400,340],[450,330],[500,312],[600,316],[700,318],[800,328],[900,340],[1000,345]];
  /* corticale tibiale (mention des auteurs) : bloc brillant x 40–280, ombre en dessous */
  const TIBIA = [[40,335],[100,331],[150,340],[200,352],[250,380],[280,420]];
  ECHO.anat['tunnel-tarsien-nerf-tibial'] = [{
    fig: 'img/tunnel-tarsien-nerf-tibial/echo-1.jpg',
    valide: false,
    vb: [1000, 991], orient: { left: 'Antérieur (tibia)', right: 'Postérieur' },
    lecture: [
      'Certain — lecture donnée par Mat (7 octobre) : les deux ovales noirs au-dessus des pointes de flèches sont l\'artère et la veine tibiales postérieures ; le nerf tibial est la structure désignée par les deux flèches des auteurs (bande grenue sous les vaisseaux, y ≈ 400–450). Corticale tibiale : mention des auteurs.',
      'Probable — orientation : le tibia est en avant du paquet tibial postérieur, donc antérieur à gauche ; même orientation que le schéma apparié (malléole à gauche). Les auteurs ne nomment pas les côtés.',
      'Probable — contours des vaisseaux : ovale gauche (x 560–620, y 350–405) plus rond, dessiné en artère ; ovale droit (x 640–700, y 350–395) en veine — sans Doppler, l\'attribution artère / veine reste à trancher. Nerf : bande aplatie de ≈ 5 × 2 mm (échelle : 1 cm ≈ 285 unités) sous les vaisseaux, lecture « nerf profond à l\'artère » — l\'une des configurations décrites par les auteurs (29 %).',
      'Supposition — plans : ligne brillante continue y ≈ 250 lue comme fascia crural ; seconde ligne y ≈ 300–345 qui rejoint la corticale, lue comme septum intermusculaire transverse ; les compartiments qu\'elles délimitent (fléchisseurs des orteils, long fléchisseur de l\'hallux, soléaire ?) ne sont pas désignés — plans non attribués. Rétinaculum des fléchisseurs hors du champ (coupe 4 cm en amont de la malléole).',
      'Extrapolé — profondeur du tibia (bloc dessiné sur ≈ 2,5 cm, l\'ombre ne va pas plus bas) ; peau et tissu sous-cutané (limite y ≈ 55 à l\'estime).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: F1 },
      { id: 'sup', tissu: 'indetermine', haut: F1, bas: F2 },
      { id: 'prof', tissu: 'indetermine', haut: F2, bas: [[0,991],[1000,991]] },
      { id: 'f1', tissu: 'fascia', ligne: F1, ep: 6 },
      { id: 'f2', tissu: 'fascia', ligne: F2, ep: 6 },
      { id: 'artere', tissu: 'artere', contour: ovale(592, 377, 28, 27) },
      { id: 'veine', tissu: 'veine', contour: ovale(668, 372, 27, 22) },
      { id: 'nerf', tissu: 'nerf', contour: [[560,405],[600,398],[650,398],[700,408],[705,432],[670,448],[620,450],[575,440],[555,422]] },
      { id: 'tibia', tissu: 'os', cortex: TIBIA, profondeur: 250 },
    ],
    labels: [
      { s: 'sc', x: 500, y: 150, dx: 0, dy: -60, text: 'Tissu sous-cutané' },
      { s: 'f1', x: 300, y: 247, dx: -100, dy: -77, text: 'Fascia crural (supposé)' },
      { s: 'sup', x: 700, y: 285, dx: 120, dy: -85, text: 'Compartiment superficiel — non attribué' },
      { s: 'f2', x: 900, y: 340, dx: 0, dy: 240, text: 'Septum profond (supposé)' },
      { s: 'tibia', x: 120, y: 340, dx: 0, dy: 140, text: 'Tibia (corticale)' },
      { s: 'artere', x: 592, y: 377, dx: -300, dy: 183, text: 'A. tibiale postérieure (probable)', vue: 'anat' },
      { s: 'veine', x: 668, y: 372, dx: 210, dy: 108, text: 'V. tibiale postérieure (probable)', vue: 'anat' },
      { s: 'nerf', x: 630, y: 425, dx: 100, dy: 290, text: 'N. tibial (flèches des auteurs)', vue: 'anat' },
      { s: 'prof', x: 450, y: 800, dx: 0, dy: 80, text: 'Compartiment profond — non attribué' },
    ],
  }];
})();
