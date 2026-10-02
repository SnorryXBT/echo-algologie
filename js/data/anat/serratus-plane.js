/* Coupes anatomiques recalées — bloc du plan du dentelé antérieur (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Yoon et al., Pain Practice 2026, fig. 3, panneau B, moitié gauche (vierge) ; corrigé = calque coloré des auteurs sur la moitié droite
            de la même image, relevé dans le même repère par `anat-grid.js serratus-plane 0 <dossier> 0.5,0.478,0.5,0.522`.
            Points relevés avant le resserrage du cadre (liserés gauche et bas), ramenés au repère définitif par T().
   echo-2 (Wei et al., fig. 2B) : non tracée — axe crânio-caudal non donné par les auteurs (voir zz-refus.js). */
(function () {
  const T = pts => pts.map(p => [Math.round(1.008 * p[0] - 8), Math.round(1.008 * p[1] - 1.5)]);
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([cx + x * Math.cos(a) - y * Math.sin(a), cy + x * Math.sin(a) + y * Math.cos(a)]); } return o; };
  const PEAU_B = T([[-10,48],[1010,48]]);
  /* face superficielle du dentelé ; à droite de x ≈ 650 elle passe sous le grand dorsal */
  const SA_H = T([[-10,168],[100,166],[200,165],[300,185],[400,228],[450,250],[500,265],[580,262],[650,257],[700,300],[800,350],[900,385],[1010,428]]);
  /* face profonde du dentelé : sur la 5e côte, puis en pont sur l'espace, puis sur la 6e côte */
  const SA_B = T([[-10,256],[100,258],[200,262],[230,268],[300,292],[400,322],[490,347],[600,405],[640,450],[700,468],[800,510],[900,572],[1010,645]]);
  const LD_H = T([[650,192],[800,188],[1010,192]]);
  const PLEVRE = T([[-10,470],[190,470],[250,485],[300,515],[350,545],[400,560],[450,570],[500,576],[600,598],[680,618],[800,640],[1010,680]]);
  ECHO.anat['serratus-plane'] = [{
    fig: 'img/serratus-plane/echo-1.jpg',
    valide: false,
    vb: [1000, 767], orient: { left: 'Antéro-crânial', right: 'Postéro-caudal' },
    lecture: [
      'Certain — cas pathologique : cicatrice de drain thoracique, nerfs épaissis et englués dans la fibrose (légende d\'origine). Coupe oblique, plus proche de l\'axe des côtes que la coupe perpendiculaire de la fiche : les côtes sont vues en section allongée. La planche vaut pour l\'ordre des plans, pas pour l\'aspect normal — les deux nerfs sont habituellement invisibles.',
      'Certain — orientation : croix incrustée par les auteurs (antéro-crânial à gauche, postéro-caudal à droite) ; crânial à gauche comme le schéma apparié.',
      'Certain — grand dorsal, dentelé antérieur, nerf thoracique long, rameau cutané latéral du 5e nerf intercostal, muscles intercostaux, 5e et 6e côtes, plèvre, tissu cicatriciel : calque coloré des auteurs sur la moitié droite de la même image, relevé dans le même repère. Leurs aplats sont approximatifs ; les limites sont recalées sur l\'interface mesurée quand il y en a une.',
      'Probable — 5e côte : corticale superficielle = bande brillante y ≈ 265 (x 0–230), sur laquelle les auteurs posent le rameau cutané ; bord postéro-caudal = ligne oblique jusqu\'à (345, 415). 6e côte : arc brillant x 640–900. Plèvre : courbe brillante x 190–600, sous le sigle « Pleura » des auteurs.',
      'Supposition — face superficielle du dentelé sous la cicatrice (x ≈ 450–650) et contour exact de la cicatrice : plage grise mal limitée, tracée d\'après l\'aplat des auteurs. Limite peau / tissu sous-cutané. En avant du bord du grand dorsal, le dentelé est dessiné directement sous le tissu sous-cutané.',
      'Extrapolé — paquet intercostal profond (veine, artère, nerf) : non vu, situé sous le bord inférieur de la 5e côte ; seul son rameau cutané latéral est désigné par les auteurs. Faces profondes des deux côtes, plèvre et poumon sous leurs ombres. Coin inférieur droit masqué par le pictogramme de sonde, coin inférieur gauche par la croix d\'orientation. Aucune échelle : distances non chiffrées.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU_B },
      { id: 'sc', tissu: 'graisse', haut: PEAU_B, bas: SA_H.slice(0, 9).concat(T([[645,232],[642,212]]), LD_H) },
      { id: 'sa', tissu: 'muscle', haut: SA_H, bas: SA_B },
      { id: 'ld', tissu: 'muscle', haut: T([[642,212]]).concat(LD_H), bas: T([[645,232],[650,257],[700,300],[800,350],[900,385],[1010,428]]) },
      { id: 'ic', tissu: 'muscle', haut: SA_B.slice(2, 9).concat(T([[660,460]])), bas: PLEVRE.slice(1, 9).concat(T([[660,612]])) },
      { id: 'poumon', tissu: 'poumon', haut: PLEVRE, bas: [[0,790],[1000,790]] },
      { id: 'plevre', tissu: 'plevre', ligne: PLEVRE, ep: 8, extrapole: true },
      { id: 'plevre-vue', tissu: 'plevre', ligne: PLEVRE.slice(1, 9), ep: 8 },
      { id: 'cicatrice', tissu: 'conjonctif', contour: T([[440,20],[490,20],[495,98],[600,106],[780,120],[775,140],[700,152],[640,165],[645,215],[600,250],[520,268],[470,262],[440,235],[385,215],[380,190],[400,168],[300,166],[200,160],[130,140],[200,118],[430,100]]) },
      { id: 'ltn', tissu: 'nerf', contour: T(ovale(428, 205, 42, 10)) },
      { id: 'cote-5', tissu: 'os', contour: T([[-40,262],[0,262],[100,264],[200,268],[240,285],[290,345],[330,395],[352,420],[330,455],[200,462],[-40,465]]), vu: [1, 7] },
      { id: 'cote-6', tissu: 'os', contour: T([[638,452],[700,468],[750,488],[800,510],[850,538],[900,572],[1040,650],[1040,790],[900,720],[750,650],[650,605],[640,520]]), vu: [0, 5] },
      { id: 'lcin', tissu: 'nerf', haut: T([[95,256],[200,254],[300,284],[400,314],[490,340]]), bas: T([[95,268],[200,266],[300,298],[400,328],[490,352]]) },
      { id: 'veine', tissu: 'veine', contour: T(ovale(362, 432, 9, 9)), extrapole: true },
      { id: 'artere', tissu: 'artere', contour: T(ovale(356, 451, 9, 9)), extrapole: true },
      { id: 'nerf-ic', tissu: 'nerf', contour: T(ovale(346, 469, 9, 8)), extrapole: true },
    ],
    labels: [
      { s: 'sc', x: 110, y: 100, dx: 40, dy: -75, text: 'Tissu sous-cutané' },
      { s: 'cicatrice', x: 590, y: 130, dx: 110, dy: -90, text: 'Tissu cicatriciel (drain)' },
      { s: 'ltn', x: 423, y: 205, dx: -65, dy: -125, text: 'N. thoracique long' },
      { s: 'sa', x: 290, y: 238, dx: -150, dy: -26, text: 'Dentelé antérieur' },
      { s: 'ld', x: 790, y: 300, dx: 70, dy: -45, text: 'Grand dorsal' },
      { s: 'cote-5', x: 150, y: 385, dx: -75, dy: 35, text: '5e côte' },
      { s: 'lcin', x: 385, y: 320, dx: -200, dy: 12, text: 'Rameau cutané latéral (T5)' },
      { s: 'ic', x: 420, y: 395, dx: 60, dy: 35, text: 'Intercostaux' },
      { s: 'plevre-vue', x: 445, y: 568, dx: 75, dy: -43, text: 'Plèvre' },
      { s: 'cote-6', x: 755, y: 492, dx: 45, dy: 128, text: '6e côte' },
      { s: 'nerf-ic', x: 346, y: 458, dx: -160, dy: 102, text: 'Paquet V-A-N (extrapolé)', vue: 'anat' },
      { s: 'poumon', x: 330, y: 625, dx: -160, dy: 30, text: 'Poumon', vue: 'anat' },
    ],
  }];
})();
