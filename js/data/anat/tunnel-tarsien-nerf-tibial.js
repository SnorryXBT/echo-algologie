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

/* echo-2 — Foreman et al., JETEM 2025, figure « Ultrasound-guided posterior tibial nerve block » (CC BY), remplace Garg fig. 1 le 7 octobre 2026.
   Coupe transversale rétro-malléolaire annotée par les auteurs (PTN, PTA & PTV, tibialis posterior, flexor digitorum longus, flexor hallucis
   longus, medial malleolus) ; antérieur à droite (malléole), miroir du schéma. Pas d'aiguille. Sigles des auteurs en jaune : les étiquettes
   françaises sont posées à côté, pas dessus. */
(function () {
  const DERME = [[0,30],[500,30],[1000,28]];
  const RET_H = [[0,120],[200,130],[400,150],[550,135],[700,110],[800,90],[1000,70]];
  const RET_B = [[0,230],[200,238],[400,245],[550,225],[700,170],[800,118],[1000,100]];
  const MALL = [[470,660],[550,600],[650,510],[750,420],[850,330],[950,260],[1000,232]];
  ECHO.anat['tunnel-tarsien-nerf-tibial'].push({
    fig: 'img/tunnel-tarsien-nerf-tibial/echo-2.jpg',
    valide: false,
    vb: [1000, 1010], orient: { left: 'Postérieur', right: 'Antérieur (malléole)' },
    lecture: [
      'Certain — antérieur à droite : la malléole médiale (cône d\'ombre nommé par les auteurs) est en bas à droite ; miroir du schéma apparié (antérieur à gauche). Coupe transversale rétro-malléolaire (titre de la figure : bloc du nerf tibial postérieur).',
      'Certain — nerf tibial (PTN) = masse en nid d\'abeilles x ≈ 200–420, y ≈ 300–530 ; artère et veines tibiales postérieures (PTA & PTV) = les deux lumières noires juste en avant du nerf ; tendons tibial postérieur et long fléchisseur des orteils = ovales hypoéchogènes (anisotropie) en avant du paquet, contre la malléole ; long fléchisseur de l\'hallux en arrière et en profondeur du nerf.',
      'Supposition — laquelle des deux lumières est l\'artère : la supérieure (x ≈ 410–500, y ≈ 285–370), plus ronde, est dessinée en artère et l\'inférieure (y ≈ 395–490) en veine ; les auteurs ne les distinguent pas (« PTA & PTV ») et aucun Doppler n\'est donné.',
      'Probable — rétinaculum des fléchisseurs / fascia profond = bande brillante feuilletée y ≈ 120–240 à gauche, qui s\'amincit et remonte vers la malléole à droite (y ≈ 90–120 à x ≈ 800) ; dessiné en fascia épais.',
      'Probable — corticale de la malléole médiale = bord supérieur du grand cône d\'ombre, ligne oblique de (470, 660) à (1000, 232).',
      'Supposition — limites des tendons et du long fléchisseur de l\'hallux : seuls leurs centres sont nommés ; contours posés sur les plages hypoéchogènes voisines. Région postérieure (x < 190) et tissu entre rétinaculum et paquet : plans non attribués / tissu conjonctif.',
      'Extrapolé — profondeur de la malléole (ombre).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: RET_H },
      { id: 'ret', tissu: 'fascia', haut: RET_H, bas: RET_B },
      { id: 'fond', tissu: 'conjonctif', haut: RET_B, bas: [[0,1010],[1000,1010]] },
      { id: 'post', tissu: 'indetermine', contour: [[0,238],[190,240],[195,400],[180,540],[60,560],[0,600]] },
      { id: 'tp', tissu: 'tendon', contour: [[790,140],[830,110],[890,105],[940,130],[950,175],[920,215],[860,230],[800,200]] },
      { id: 'fdl', tissu: 'tendon', contour: [[560,210],[620,185],[700,180],[770,200],[800,250],[770,300],[700,320],[620,310],[570,270]] },
      { id: 'fhl', tissu: 'muscle', contour: [[60,560],[200,548],[350,555],[480,560],[520,640],[450,700],[300,720],[150,720],[60,680]] },
      { id: 'nerf', tissu: 'nerf', contour: [[210,320],[280,300],[360,305],[410,340],[420,420],[400,490],[340,530],[260,535],[200,500],[185,420]] },
      { id: 'artere', tissu: 'artere', contour: [[420,290],[460,282],[495,300],[500,340],[475,368],[440,370],[412,345],[408,310]] },
      { id: 'veine', tissu: 'veine', contour: [[415,400],[460,392],[505,410],[515,450],[495,485],[450,492],[415,470],[405,435]] },
      { id: 'malleole', tissu: 'os', cortex: MALL, vu: [[0, 6]] },
    ],
    labels: [
      { s: 'peau', x: 200, y: 14, dx: -120, dy: 40, text: 'Peau' },
      { s: 'ret', x: 300, y: 180, dx: 150, dy: -100, text: 'Rétinaculum des fléchisseurs (probable)' },
      { s: 'tp', x: 870, y: 170, dx: -20, dy: -120, text: 'T. tibial postérieur' },
      { s: 'fdl', x: 680, y: 250, dx: 220, dy: 220, text: 'T. long fléch. des orteils' },
      { s: 'artere', x: 455, y: 325, dx: 230, dy: 80, text: 'A. tibiale postérieure (?)' },
      { s: 'veine', x: 460, y: 445, dx: 230, dy: 120, text: 'V. tibiale postérieure (?)' },
      { s: 'nerf', x: 300, y: 350, dx: -130, dy: -90, text: 'N. tibial' },
      { s: 'fhl', x: 300, y: 620, dx: 0, dy: 180, text: 'Long fléchisseur de l\'hallux' },
      { s: 'malleole', x: 800, y: 500, dx: 80, dy: 300, text: 'Malléole médiale' },
      { s: 'post', x: 100, y: 450, dx: 60, dy: 440, text: 'Plan postérieur non attribué' },
    ],
  });
})();
