/* Coupes anatomiques recalées — nerfs ilio-inguinal et ilio-hypogastrique (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-2 : Matičič et al., J Ultrason 2021, fig. 4 (672 px ; L / M inscrits ; EO, IO, TA, BA, flèche = pédicule neurovasculaire). */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  /* interfaces placées sur les pics de brillance (colonnes x = 100…900) */
  const FSUP = [[0,120],[300,125],[600,130],[750,135],[900,150],[1000,165]];
  const SC_B = [[0,145],[300,145],[600,148],[750,152],[900,172],[1000,186]];
  const EO_B = [[0,262],[100,265],[300,272],[500,278],[700,288],[900,298],[1000,300]];
  const IO_B = [[0,462],[100,466],[300,472],[500,482],[600,490],[700,500],[800,505],[900,505],[1000,500]];
  const TA_B = [[0,550],[100,552],[300,558],[500,570],[600,572],[700,566],[800,548],[900,522],[1000,512]];
  const PERI = [[0,630],[100,645],[200,668],[300,688],[400,688],[500,662],[600,620],[700,612],[800,612],[900,602],[1000,588]];

  ECHO.anat['ilio-inguinal-ilio-hypogastrique'] = [{
    fig: 'img/ilio-inguinal-ilio-hypogastrique/echo-2.jpg',
    valide: false,
    vb: [1000, 929], orient: { left: 'Latéral', right: 'Médial' },
    lecture: [
      'Certain — orientation : L (latéral) à gauche, M (médial) à droite, inscrits sur l\'image ; inverse du schéma apparié (la légende de la figure le dit).',
      'Certain — les trois muscles larges (EO, IO, TA) et l\'air digestif (BA) : sigles des auteurs ; flèche = pédicule neurovasculaire dans le plan oblique interne / transverse, plan d\'injection selon la légende d\'origine.',
      'Probable — interfaces : aponévroses placées sur les pics de brillance (EO / IO y ≈ 260–300 ; IO / TA y ≈ 465–505 ; face profonde du transverse y ≈ 550–575). Le transverse s\'amincit en dedans (x > 780) : la bande sombre disparaît, dessinée effilée.',
      'Supposition — pédicule : épaississement discret du plan IO / TA sous la pointe de la flèche ; nerf et artère iliaque circonflexe profonde ne sont pas séparables, un seul contour.',
      'Supposition — au-dessus de l\'oblique externe : tissu sous-cutané et fascia superficiel (bande brillante y ≈ 100–150), non désignés ; la peau est hors champ. Sous le transverse : fascia transversalis et graisse prépéritonéale, puis péritoine au toit de la réverbération de l\'air.',
      'Extrapolé — contenu abdominal sous le péritoine (air digestif : réverbérations, aucune paroi intestinale lisible).',
    ],
    structures: [
      { id: 'sc', tissu: 'graisse', haut: [[0,-10],[1000,-10]], bas: SC_B },
      { id: 'fsup', tissu: 'fascia', ligne: FSUP, ep: 18 },
      { id: 'eo', tissu: 'muscle', haut: SC_B, bas: EO_B },
      { id: 'io', tissu: 'muscle', haut: EO_B, bas: IO_B },
      { id: 'ta', tissu: 'muscle', haut: IO_B, bas: TA_B },
      { id: 'prep', tissu: 'graisse', haut: TA_B, bas: PERI },
      { id: 'abdomen', tissu: 'indetermine', haut: PERI, bas: [[0,940],[1000,940]], extrapole: true },
      { id: 'apo-eo', tissu: 'fascia', ligne: EO_B, ep: 12 },
      { id: 'plan', tissu: 'fascia', ligne: IO_B, ep: 9 },
      { id: 'transversalis', tissu: 'fascia', ligne: TA_B, ep: 8 },
      { id: 'peritoine', tissu: 'fascia', ligne: PERI, ep: 7 },
      { id: 'pedicule', tissu: 'nerf', contour: ovale(598, 488, 26, 9, 3) },
    ],
    labels: [
      { s: 'sc', x: 450, y: 60, dx: 0, dy: 0, text: 'Tissu sous-cutané (supposé)' },
      { s: 'eo', x: 520, y: 210, dx: 0, dy: 0, text: 'Oblique externe', vue: 'anat' },
      { s: 'io', x: 330, y: 380, dx: 0, dy: 0, text: 'Oblique interne', vue: 'anat' },
      { s: 'pedicule', x: 598, y: 488, dx: 190, dy: -80, text: 'Pédicule ilio-inguinal (flèche)', vue: 'anat' },
      { s: 'ta', x: 420, y: 520, dx: 0, dy: 0, text: 'Transverse', vue: 'anat' },
      { s: 'prep', x: 150, y: 600, dx: 0, dy: 80, text: 'Graisse prépéritonéale' },
      { s: 'peritoine', x: 650, y: 615, dx: 120, dy: 90, text: 'Péritoine (probable)' },
      { s: 'abdomen', x: 450, y: 800, dx: 0, dy: 50, text: 'Air digestif', vue: 'anat' },
    ],
  }];
})();
