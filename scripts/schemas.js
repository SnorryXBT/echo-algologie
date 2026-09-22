/* Schémas explicatifs des chapitres transversaux (socle) — dessinés pour le mémo,
   sans aucune source externe : node scripts/schemas.js [nom]
   Les valeurs chiffrées reprennent le texte des fiches correspondantes. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');

const C = { bg: '#f7f5f1', panel: '#ffffff', ink: '#14181d', muted: '#5b6672', line: '#d5cfc5',
  bleu: '#0f6fff', bleuF: '#e8f0ff', rouge: '#b91c1c', rougeF: '#fdeceb', orange: '#b45309',
  orangeF: '#fff5e6', vert: '#047857', vertF: '#e7f7f0', gris: '#8a9099' };
const F = `-apple-system, 'Segoe UI', Inter, Roboto, sans-serif`;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const txt = (x, y, s, o = {}) => `<text x="${x}" y="${y}" font-family="${F}" font-size="${o.size || 15}" `
  + `fill="${o.fill || C.ink}" text-anchor="${o.anchor || 'start'}" font-weight="${o.weight || 400}"`
  + `${o.style ? ` font-style="${o.style}"` : ''}${o.spacing ? ` letter-spacing="${o.spacing}"` : ''}>${esc(s)}</text>`;
const lines = (x, y, arr, o = {}) => arr.map((s, i) => txt(x, y + i * (o.lh || 19), s, o)).join('');
const box = (x, y, w, h, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${o.r == null ? 10 : o.r}" `
  + `fill="${o.fill || C.panel}" stroke="${o.stroke || C.line}" stroke-width="${o.sw || 1.5}"${o.dash ? ` stroke-dasharray="${o.dash}"` : ''}/>`;
const head = (w, h, title, sub) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">`
  + `<rect width="${w}" height="${h}" fill="${C.bg}"/>`
  + txt(34, 44, title, { size: 22, weight: 700 })
  + (sub ? txt(34, 68, sub, { size: 14.5, fill: C.muted }) : '');
const foot = (w, h, s) => txt(34, h - 18, s, { size: 12.5, fill: C.muted, style: 'italic' }) + '</svg>';
const arrow = (id, color) => `<marker id="${id}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="${color}"/></marker>`;
const out = {};

/* ---------------------------------------------------------------- 1. particulaire */
{
  const W = 1000, H = 600, o = [];
  o.push(head(W, H, 'Particulaire ou non particulaire : ce qui se joue en aval de l\'aiguille',
    'Pourquoi tout le mémo impose la dexaméthasone dès qu\'une artère chemine dans le champ.'));
  o.push(`<defs>${arrow('ar-r', C.rouge)}${arrow('ar-v', C.vert)}
    <pattern id="hatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" stroke="${C.gris}" stroke-width="2" stroke-opacity=".55"/></pattern></defs>`);

  const panel = (x, tint, stroke, titre, sstitre) => {
    const p = [];
    p.push(box(x, 92, 452, 300, { fill: tint, stroke, sw: 2 }));
    p.push(txt(x + 20, 122, titre, { size: 17, weight: 700, fill: stroke }));
    p.push(txt(x + 20, 144, sstitre, { size: 13.5, fill: C.muted }));
    return p.join('');
  };
  /* artériole : tronc puis division en trois branches */
  const vessel = (x0, y0, flip) => {
    const d = flip
      ? `M${x0 + 215} ${y0} h-145 M${x0 + 215} ${y0} L${x0 + 145} ${y0 - 38} M${x0 + 215} ${y0} L${x0 + 145} ${y0 + 38}`
      : `M${x0} ${y0} h145 M${x0 + 145} ${y0} L${x0 + 215} ${y0 - 38} M${x0 + 145} ${y0} L${x0 + 215} ${y0 + 38}`;
    return `<path d="${d}" fill="none" stroke="#c98a8a" stroke-width="17" stroke-linecap="round" stroke-linejoin="round"/>`
      + `<path d="${d}" fill="none" stroke="#f7e3e3" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>`;
  };
  const flux = (x, y, dir, color) => `<line x1="${x}" y1="${y}" x2="${x + 46 * dir}" y2="${y}" stroke="${color}" stroke-width="2" marker-end="url(#${dir > 0 ? 'ar-r' : 'ar-v'})"/>`
    + txt(x + 56 * dir, y + 5, 'flux', { size: 12, fill: color, anchor: dir > 0 ? 'start' : 'end' });

  /* panneau gauche : particulaire */
  o.push(panel(34, C.rougeF, C.rouge, 'Particulaire — suspension de cristaux',
    'Dépôt retard : c\'est l\'ester cristallin qui fait la durée d\'action.'));
  o.push(vessel(62, 236));
  o.push(flux(70, 196, 1, C.rouge));
  const cristal = (cx, cy, r, rot) => `<g transform="translate(${cx} ${cy}) rotate(${rot})"><path d="M${-r} 0 L0 ${-r * .8} L${r} ${-r * .2} L${r * .6} ${r * .8} L${-r * .5} ${r * .7} Z" fill="#7f1d1d" fill-opacity=".9"/></g>`;
  [[96, 236, 7, 10], [126, 232, 6, 45], [158, 239, 7, 75]].forEach(c => o.push(cristal(...c)));
  [[203, 236, 8, 20], [214, 227, 7, 65], [213, 246, 7, 100], [224, 236, 8, 140], [197, 246, 6, 5], [198, 226, 6, 160]].forEach(c => o.push(cristal(...c)));
  o.push(`<line x1="212" y1="262" x2="212" y2="292" stroke="${C.rouge}" stroke-width="1.4"/>`);
  o.push(txt(212, 310, 'Agrégat au carrefour :', { size: 12.8, fill: C.rouge, anchor: 'middle', weight: 700 }));
  o.push(txt(212, 326, 'la lumière se bouche', { size: 12.8, fill: C.rouge, anchor: 'middle', weight: 700 }));
  o.push(`<rect x="300" y="178" width="164" height="116" rx="12" fill="url(#hatch)" stroke="${C.gris}" stroke-width="1.5"/>`);
  o.push(txt(382, 228, 'Territoire', { size: 13.5, anchor: 'middle', weight: 600, fill: '#42474d' }));
  o.push(txt(382, 246, 'd\'aval infarci', { size: 13.5, anchor: 'middle', weight: 600, fill: '#42474d' }));
  o.push(txt(382, 312, 'Irréversible : pas d\'antidote', { size: 12.5, anchor: 'middle', fill: C.rouge, style: 'italic' }));
  o.push(lines(54, 352, ['Dépo-Médrol® · Kenacort® retard · Hexatrione®',
    'Célestène® chronodose · Diprostène® (ester retard cristallin)'], { size: 13, lh: 19 }));
  o.push(txt(54, 386, 'Interdits sur tout site à artère satellite.', { size: 13, fill: C.rouge, weight: 700 }));

  /* panneau droit : non particulaire */
  o.push(panel(514, C.vertF, C.vert, 'Non particulaire — solution vraie',
    'Rien à agréger : aucune embole possible, durée locale plus courte.'));
  o.push(vessel(542, 236));
  o.push(flux(550, 196, 1, C.vert));
  [[575, 236], [604, 231], [633, 240], [662, 234], [700, 212], [706, 258], [730, 202], [736, 268], [690, 236]].forEach(([cx, cy]) =>
    o.push(`<circle cx="${cx}" cy="${cy}" r="2.4" fill="${C.vert}" fill-opacity=".85"/>`));
  o.push(txt(692, 310, 'Molécules dissoutes : elles passent', { size: 12.8, fill: C.vert, anchor: 'middle', weight: 700 }));
  o.push(`<rect x="780" y="178" width="164" height="116" rx="12" fill="${C.vertF}" stroke="${C.vert}" stroke-width="1.5" stroke-opacity=".55"/>`);
  o.push(txt(862, 228, 'Territoire', { size: 13.5, anchor: 'middle', weight: 600, fill: C.vert }));
  o.push(txt(862, 246, 'perfusé', { size: 13.5, anchor: 'middle', weight: 600, fill: C.vert }));
  o.push(lines(534, 352, ['Dexaméthasone phosphate 4 mg/mL — 4 à 10 mg par site.',
    'Voie périneurale hors AMM ; durée d\'action locale plus brève.'], { size: 13, lh: 19 }));
  o.push(txt(534, 386, 'Seul choix acceptable en site à risque.', { size: 13, fill: C.vert, weight: 700 }));

  /* bandeau du bas */
  o.push(box(34, 412, 932, 128, { fill: C.panel }));
  o.push(txt(54, 442, 'Le piège de nomenclature', { size: 15, weight: 700, fill: C.orange }));
  o.push(lines(54, 468, [
    'Le phosphate de bétaméthasone seul est bien une solution — mais les spécialités françaises (Célestène® chronodose,',
    'Diprostène®) lui associent un ester retard cristallin : ce sont des suspensions particulaires. Écrire « bétaméthasone »',
    'dans un protocole ne dit donc rien du risque : c\'est la spécialité qui tranche.'], { size: 13.5, lh: 21 }));
  o.push(foot(W, H, 'Schéma original — vaisseau et cristaux figurés hors échelle ; la taille des particules n\'est pas représentée.'));
  out['socle-injectables/particulaire.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- 2. doses AL */
{
  const W = 1000, H = 560, o = [];
  o.push(head(W, H, 'Anesthésiques locaux : le plafond d\'une séance, pour un adulte de 70 kg',
    'Les doses maximales s\'entendent par séance, tous blocs confondus — c\'est le cumul qui compte.'));
  const data = [
    { n: 'Lidocaïne adrénalinée', mgkg: '7 mg/kg', mg: 490, vol: '49 mL à 1 % · 24 mL à 2 %', c: C.bleu },
    { n: 'Lidocaïne', mgkg: '4,5 mg/kg', mg: 315, vol: '31 mL à 1 % · 16 mL à 2 %', c: C.bleu },
    { n: 'Ropivacaïne', mgkg: '3 mg/kg', mg: 210, vol: '105 mL à 0,2 % · 42 mL à 0,5 %', c: C.vert },
    { n: 'Bupivacaïne', mgkg: '2–2,5 mg/kg', mg: 175, vol: '70 mL à 0,25 % · 35 mL à 0,5 %', c: C.rouge },
    { n: 'Lévobupivacaïne', mgkg: '2–2,5 mg/kg', mg: 175, vol: '70 mL à 0,25 % · 35 mL à 0,5 %', c: C.orange },
  ];
  const x0 = 250, maxW = 360, maxMg = 500;
  o.push(box(34, 92, 932, 300));
  data.forEach((d, i) => {
    const y = 130 + i * 52;
    o.push(txt(232, y + 5, d.n, { size: 14.5, anchor: 'end', weight: 600 }));
    o.push(txt(232, y + 22, d.mgkg, { size: 12.5, anchor: 'end', fill: C.muted }));
    const w = Math.round(d.mg / maxMg * maxW);
    o.push(`<rect x="${x0}" y="${y - 12}" width="${w}" height="24" rx="4" fill="${d.c}" fill-opacity=".82"/>`);
    o.push(txt(x0 + w + 10, y + 5, `${d.mg} mg`, { size: 13.5, weight: 700, fill: d.c }));
    o.push(txt(x0 + w + 78, y + 5, d.vol, { size: 13, fill: C.muted }));
  });
  o.push(`<line x1="${x0}" y1="108" x2="${x0}" y2="378" stroke="${C.line}" stroke-width="1.5"/>`);
  o.push(txt(x0, 372, '0', { size: 12, fill: C.muted, anchor: 'middle' }));
  o.push(box(34, 412, 452, 106, { fill: C.orangeF, stroke: C.orange }));
  o.push(txt(54, 440, 'Conversion', { size: 14.5, weight: 700, fill: C.orange }));
  o.push(lines(54, 464, ['1 % = 10 mg/mL. 10 mL de ropivacaïne 0,5 % = 50 mg.',
    'Réduire chez le sujet âgé, dénutri, insuffisant hépatique'], { size: 13.5, lh: 20 }));
  o.push(txt(54, 503, 'ou cardiaque.', { size: 13.5 }));
  o.push(box(514, 412, 452, 106, { fill: C.bleuF, stroke: C.bleu }));
  o.push(txt(534, 440, 'En pratique d\'algologie', { size: 14.5, weight: 700, fill: C.bleu }));
  o.push(lines(534, 464, ['Un bloc isolé n\'approche jamais ces plafonds.',
    'Ils deviennent réels quand on enchaîne plusieurs blocs',
    'dans la même séance : additionner avant de piquer.'], { size: 13.5, lh: 20 }));
  o.push(foot(W, H, 'Schéma original — volumes calculés depuis le tableau de la fiche pour 70 kg ; arrondis au millilitre.'));
  out['socle-injectables/doses-al.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- 3. LAST */
{
  const W = 1000, H = 640, o = [];
  o.push(head(W, H, 'Toxicité systémique des anesthésiques locaux : la séquence, dans l\'ordre',
    'À afficher au mur de la salle de geste — on ne la relit pas au moment où elle sert.'));
  o.push(`<defs>${arrow('ar-b', C.bleu)}</defs>`);
  const step = (x, y, w, h, n, titre, ls, tint, stroke) => {
    const p = [box(x, y, w, h, { fill: tint, stroke, sw: 1.8 })];
    p.push(`<circle cx="${x + 26}" cy="${y + 28}" r="15" fill="${stroke}"/>`);
    p.push(txt(x + 26, y + 33, String(n), { size: 15, weight: 700, fill: '#fff', anchor: 'middle' }));
    p.push(txt(x + 52, y + 33, titre, { size: 15.5, weight: 700, fill: stroke }));
    p.push(lines(x + 20, y + 58, ls, { size: 13.2, lh: 19 }));
    return p.join('');
  };
  o.push(box(34, 92, 932, 74, { fill: C.orangeF, stroke: C.orange }));
  o.push(txt(54, 120, 'Reconnaître', { size: 15.5, weight: 700, fill: C.orange }));
  o.push(txt(54, 144, 'Goût métallique, paresthésies péribuccales, acouphènes, agitation, confusion → convulsions → troubles du rythme, collapsus, arrêt.', { size: 13.2 }));
  o.push(txt(54, 160, 'Le tableau peut être d\'emblée cardiaque. Toute bizarrerie neurologique pendant ou après une injection est une toxicité jusqu\'à preuve du contraire.', { size: 13.2, fill: C.muted }));

  o.push(step(34, 186, 300, 132, 1, 'Arrêter et appeler', [
    'Stopper l\'injection immédiatement.', 'Appeler à l\'aide, chariot d\'urgence.',
    'Oxygène 100 %, ventilation assistée', 'si besoin. Éviter l\'hyperventilation.'], C.bleuF, C.bleu));
  o.push(step(350, 186, 300, 132, 2, 'Émulsion lipidique 20 %', [
    '< 70 kg : bolus 1,5 mL/kg (poids idéal)', 'en 2–3 min, puis 0,25 mL/kg/min.',
    '> 70 kg : bolus 100 mL en 2–3 min,', 'puis 200–250 mL sur 15–20 min.'], C.vertF, C.vert));
  o.push(step(666, 186, 300, 132, 3, 'Si ça ne cède pas', [
    'Répéter le bolus et doubler le débit.',
    'Plafond usuel ≈ 12 mL/kg.',
    'Poursuivre au moins 10 min après', 'le retour à la stabilité.'], C.vertF, C.vert));
  o.push(step(34, 336, 300, 132, 4, 'Convulsions', [
    'Benzodiazépine injectable titrée.',
    'Éviter le propofol chez un patient',
    'instable : il aggrave la dépression',
    'myocardique.'], C.bleuF, C.bleu));
  o.push(step(350, 336, 300, 132, 5, 'Arrêt circulatoire', [
    'Réanimation prolongée : la survie est',
    'possible après une réanimation longue.',
    'Adrénaline à doses réduites, ≤ 1 µg/kg.',
    'Proscrire lidocaïne et inhibiteurs calciques.'], C.rougeF, C.rouge));
  o.push(step(666, 336, 300, 132, 6, 'Après', [
    'Surveillance prolongée en milieu',
    'équipé (récidive possible).',
    'Déclaration de pharmacovigilance,',
    'analyse de l\'événement.'], C.bleuF, C.bleu));
  [[334, 252], [650, 252], [334, 402], [650, 402]].forEach(([x, y]) =>
    o.push(`<line x1="${x}" y1="${y}" x2="${x + 14}" y2="${y}" stroke="${C.bleu}" stroke-width="2" marker-end="url(#ar-b)"/>`));

  o.push(box(34, 486, 932, 86, { fill: C.panel }));
  o.push(txt(54, 514, 'Prévention — c\'est là que tout se joue', { size: 15, weight: 700 }));
  o.push(lines(54, 538, [
    'Dose calculée avant le geste et additionnée entre les blocs · aspiration répétée · injection fractionnée par 2–3 mL ·',
    'surveillance verbale du patient pendant l\'injection · émulsion lipidique présente, non périmée, posologie affichée.'], { size: 13.2, lh: 20 }));
  o.push(foot(W, H, 'Schéma original — posologies reprises du tableau « chariot d\'urgence » de cette fiche (protocole ASRA).'));
  out['socle-securite/last.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- 4. RF thermique vs pulsée */
{
  const W = 1000, H = 500, o = [];
  o.push(head(W, H, 'Radiofréquence thermique et pulsée : la même aiguille, deux intentions',
    'Ce qui sépare une neurolyse d\'une neuromodulation tient à une courbe de température.'));
  const gx = 60, gy = 130, gw = 560, gh = 270;
  const T2y = t => gy + gh - (t - 20) / 80 * gh;      /* 20 → 100 °C */
  const t2x = s => gx + s / 100 * gw;                  /* 0 → 100 s */
  o.push(box(34, 92, 600, 356));
  o.push(`<rect x="${gx}" y="${T2y(100)}" width="${gw}" height="${T2y(45) - T2y(100)}" fill="${C.rougeF}"/>`);
  o.push(txt(gx + gw - 8, T2y(96), 'Au-dessus de 45 °C : dénaturation protéique', { size: 12, fill: C.rouge, anchor: 'end' }));
  [20, 40, 60, 80, 100].forEach(t => {
    o.push(`<line x1="${gx}" y1="${T2y(t)}" x2="${gx + gw}" y2="${T2y(t)}" stroke="${C.line}" stroke-width="1"/>`);
    o.push(txt(gx - 10, T2y(t) + 4, `${t}`, { size: 11.5, fill: C.muted, anchor: 'end' }));
  });
  o.push(txt(gx - 34, gy - 12, '°C', { size: 12, fill: C.muted }));
  [0, 25, 50, 75, 100].forEach(s => o.push(txt(t2x(s), gy + gh + 18, `${s}`, { size: 11.5, fill: C.muted, anchor: 'middle' })));
  o.push(txt(gx + gw / 2, gy + gh + 38, 'secondes', { size: 12, fill: C.muted, anchor: 'middle' }));
  /* thermique */
  o.push(`<path d="M${t2x(0)} ${T2y(37)} C ${t2x(6)} ${T2y(62)}, ${t2x(10)} ${T2y(82)}, ${t2x(14)} ${T2y(85)} L ${t2x(90)} ${T2y(85)} L ${t2x(90)} ${T2y(85)} C ${t2x(94)} ${T2y(60)}, ${t2x(97)} ${T2y(42)}, ${t2x(100)} ${T2y(37)}" fill="none" stroke="${C.rouge}" stroke-width="3"/>`);
  o.push(txt(t2x(50), T2y(85) - 12, 'Thermique : 80–90 °C, 60 à 90 s', { size: 13.5, weight: 700, fill: C.rouge, anchor: 'middle' }));
  /* pulsée : plateau 42 avec dents */
  let d = `M${t2x(0)} ${T2y(37)}`;
  for (let s = 2; s <= 98; s += 4) d += ` L${t2x(s)} ${T2y(42)} L${t2x(s + 0.6)} ${T2y(38)}`;
  o.push(`<path d="${d}" fill="none" stroke="${C.bleu}" stroke-width="2.4"/>`);
  o.push(`<line x1="${gx}" y1="${T2y(42)}" x2="${gx + gw}" y2="${T2y(42)}" stroke="${C.bleu}" stroke-width="1" stroke-dasharray="4 4"/>`);
  o.push(txt(t2x(50), T2y(42) + 26, 'Pulsée : plafonnée à 42 °C, 120 à 360 s', { size: 13.5, weight: 700, fill: C.bleu, anchor: 'middle' }));
  o.push(`<line x1="${gx}" y1="${gy + gh}" x2="${gx + gw}" y2="${gy + gh}" stroke="${C.ink}" stroke-width="1.5"/>`);
  o.push(`<line x1="${gx}" y1="${gy}" x2="${gx}" y2="${gy + gh}" stroke="${C.ink}" stroke-width="1.5"/>`);
  /* encart salves */
  o.push(box(654, 92, 312, 186, { fill: C.bleuF, stroke: C.bleu }));
  o.push(txt(674, 120, 'Ce que « pulsée » veut dire', { size: 14.5, weight: 700, fill: C.bleu }));
  const bx = 674, by = 150, bw = 272;
  o.push(`<line x1="${bx}" y1="${by + 40}" x2="${bx + bw}" y2="${by + 40}" stroke="${C.muted}" stroke-width="1.2"/>`);
  [0, 68, 136, 204].forEach(off => {
    o.push(`<rect x="${bx + off}" y="${by + 10}" width="10" height="30" fill="${C.bleu}"/>`);
  });
  o.push(txt(bx, by + 62, '20 ms de courant, 480 ms de silence', { size: 12.5 }));
  o.push(txt(bx, by + 80, '2 Hz — le tissu a le temps de refroidir.', { size: 12.5 }));
  o.push(txt(bx, by + 100, 'C\'est le champ électrique, non la chaleur,', { size: 12.5, fill: C.muted }));
  o.push(txt(bx, by + 116, 'qui module la transmission.', { size: 12.5, fill: C.muted }));
  /* conséquences */
  o.push(box(654, 286, 312, 162, { fill: C.panel }));
  o.push(txt(674, 312, 'Conséquence pratique', { size: 14.5, weight: 700 }));
  o.push(lines(674, 334, [
    'Thermique : lésion définitive, réservée aux',
    'nerfs purement sensitifs. Repousse en 6 à 12',
    'mois, parfois avec névrite de déafférentation.',
    '',
    'Pulsée : pas de lésion. Répétable, utilisable',
    'sur un nerf mixte — au prix d\'un effet plus',
    'court et d\'une preuve plus faible.'], { size: 12.8, lh: 17.5 }));
  o.push(foot(W, H, 'Schéma original — courbes de principe, non des relevés ; paramètres repris du texte de cette fiche.'));
  out['socle-radiofrequence/thermique-pulsee.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- 5. électrode */
{
  const W = 1000, H = 486, o = [];
  o.push(head(W, H, 'L\'électrode et la forme de sa lésion',
    'La lésion naît autour de la partie active, pas devant la pointe : c\'est toute la règle de placement.'));
  o.push(box(34, 92, 932, 258));
  const ax = 120, ay = 210;
  /* canule isolée + partie active */
  o.push(`<rect x="${ax}" y="${ay - 7}" width="380" height="14" rx="3" fill="#9aa4ae" stroke="#6b737b" stroke-width="1.2"/>`);
  o.push(`<rect x="${ax + 380}" y="${ay - 7}" width="150" height="14" rx="3" fill="#e5b567" stroke="#a9812f" stroke-width="1.2"/>`);
  o.push(`<path d="M${ax + 530} ${ay - 7} L${ax + 566} ${ay} L${ax + 530} ${ay + 7} Z" fill="#e5b567" stroke="#a9812f" stroke-width="1.2"/>`);
  o.push(`<rect x="${ax - 46}" y="${ay - 13}" width="46" height="26" rx="4" fill="#4b5158"/>`);
  /* lésion ellipsoïde */
  o.push(`<ellipse cx="${ax + 468}" cy="${ay}" rx="118" ry="34" fill="${C.rouge}" fill-opacity=".16" stroke="${C.rouge}" stroke-width="1.6" stroke-dasharray="5 4"/>`);
  o.push(txt(ax + 468, ay - 48, 'Lésion : un ellipsoïde autour de la partie active', { size: 13, fill: C.rouge, anchor: 'middle', weight: 600 }));
  /* cotes */
  o.push(`<line x1="${ax + 380}" y1="${ay + 40}" x2="${ax + 530}" y2="${ay + 40}" stroke="${C.ink}" stroke-width="1.2"/>`);
  o.push(`<line x1="${ax + 380}" y1="${ay + 34}" x2="${ax + 380}" y2="${ay + 46}" stroke="${C.ink}" stroke-width="1.2"/>`);
  o.push(`<line x1="${ax + 530}" y1="${ay + 34}" x2="${ax + 530}" y2="${ay + 46}" stroke="${C.ink}" stroke-width="1.2"/>`);
  o.push(txt(ax + 455, ay + 60, 'Extrémité active : 5 ou 10 mm', { size: 13, anchor: 'middle', weight: 600 }));
  o.push(txt(ax + 190, ay - 22, 'Canule isolée — aucune énergie délivrée sur cette longueur', { size: 12.5, anchor: 'middle', fill: C.muted }));
  o.push(`<line x1="${ax + 566}" y1="${ay + 14}" x2="${ax + 580}" y2="${ay + 54}" stroke="${C.muted}" stroke-width="1"/>`);
  o.push(txt(ax + 584, ay + 68, 'Thermocouple en pointe : il lit la température', { size: 12.5, fill: C.muted }));
  o.push(txt(ax + 584, ay + 84, 'du tissu le plus chaud, pas celle du nerf.', { size: 12.5, fill: C.muted }));
  o.push(txt(ax - 52, ay + 40, 'Embase', { size: 12.5, fill: C.muted }));
  /* conclusion */
  o.push(box(34, 366, 932, 84, { fill: C.orangeF, stroke: C.orange }));
  o.push(txt(54, 394, 'Ce qu\'il faut en retenir', { size: 14.5, weight: 700, fill: C.orange }));
  o.push(lines(54, 416, [
    'La lésion déborde à peine latéralement : une électrode perpendiculaire au nerf ne le touche qu\'en un point, et aucune montée',
    'en puissance ne compense. On couche la partie active le long du trajet, contact osseux quand il existe, quitte à repositionner.'], { size: 13, lh: 19 }));
  o.push(foot(W, H, 'Schéma original — proportions indicatives ; les dimensions exactes de lésion dépendent du générateur et du tissu.'));
  out['socle-radiofrequence/electrode.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- 6. classes ASRA */
{
  const W = 1000, H = 592, o = [];
  o.push(head(W, H, 'Les trois classes de risque hémorragique (ASRA-ESRA 2018)',
    'La classe se lit sur le geste, jamais sur le patient : elle décide si la question de l\'arrêt se pose.'));
  const col = (x, tint, stroke, titre, gestes, conduite, note) => {
    const p = [box(x, 92, 300, 400, { fill: tint, stroke, sw: 2 })];
    p.push(box(x + 1.5, 92, 297, 46, { fill: stroke, r: 9 }));
    p.push(`<rect x="${x + 1.5}" y="120" width="297" height="18" fill="${stroke}"/>`);
    p.push(txt(x + 150, 122, titre, { size: 16.5, weight: 700, fill: '#fff', anchor: 'middle' }));
    p.push(txt(x + 20, 168, 'Gestes', { size: 12, weight: 700, fill: stroke, spacing: '.06em' }));
    p.push(lines(x + 20, 190, gestes, { size: 12.8, lh: 18 }));
    p.push(txt(x + 20, 190 + gestes.length * 18 + 22, 'Conduite', { size: 12, weight: 700, fill: stroke, spacing: '.06em' }));
    p.push(lines(x + 20, 190 + gestes.length * 18 + 44, conduite, { size: 12.8, lh: 18 }));
    if (note) p.push(txt(x + 20, 190 + gestes.length * 18 + 44 + conduite.length * 18 + 4, note, { size: 12, fill: C.muted, style: 'italic' }));
    return p.join('');
  };
  o.push(col(34, C.vertF, C.vert, 'Faible', [
    'Blocs nerveux périphériques',
    'Infiltrations articulaires',
    'périphériques',
    'Points-gâchettes',
    'Nerf grand occipital',
    'Sacro-iliaque',
    'Blocs de paroi',
    '',
    'La quasi-totalité du mémo.'],
    ['Pas d\'interruption des', 'antiagrégants.', 'Anticoagulants poursuivis dans', 'la plupart des cas, au cas par cas.'],
    'Arrêter expose plus qu\'il ne protège.'));
  o.push(col(350, C.orangeF, C.orange, 'Intermédiaire', [
    'Épidural interlaminaire,',
    'caudal, transforaminal',
    'Blocs paravertébraux',
    'Branches médiales et',
    'radiofréquence facettaire',
    'Blocs sympathiques : stellaire,',
    'sympathique lombaire,',
    'hypogastrique, plexus cœliaque',
    'Gestes intradiscaux'],
    ['Décision partagée avec le prescripteur,', 'tracée. Interruption des anticoagulants', 'selon les délais ; aspirine souvent', 'poursuivie.'],
    'Le risque tient au site clos, pas au saignement.'));
  o.push(col(666, C.rougeF, C.rouge, 'Élevé', [
    'Stimulation médullaire',
    '(test et implantation)',
    'Cathéter et pompe',
    'intrathécaux',
    'Vertébroplastie,',
    'cyphoplastie',
    'Décompression percutanée',
    'Épiduroscopie',
    ''],
    ['Interruption des antithrombotiques', 'selon les délais, aspirine comprise.', 'Concertation avec le prescripteur', 'et le cardiologue si besoin.'],
    'Hors périmètre de ce mémo.'));
  o.push(box(34, 506, 932, 62, { fill: C.panel }));
  o.push(lines(54, 530, [
    'Un geste non listé se classe par analogie — profondeur, compressibilité du site, conséquence d\'un hématome —',
    'et le raisonnement est alors écrit dans la fiche concernée.'], { size: 13, lh: 19 }));
  o.push(foot(W, H, 'Schéma original — répartition reprise du tableau de cette fiche (Narouze et al., Reg Anesth Pain Med 2018).'));
  out['socle-securite/classes-asra.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- 7. antithrombotiques */
{
  const W = 1000, H = 640, o = [];
  o.push(head(W, H, 'Antithrombotiques : combien de jours avant le geste',
    'Délais pour un geste à risque intermédiaire ou élevé. En risque faible, on n\'arrête rien.'));
  const x0 = 300, xJ0 = 700, days = 10;
  const dx = j => xJ0 - (j / days) * (xJ0 - x0);
  o.push(box(34, 92, 932, 386));
  for (let j = 0; j <= days; j += 2) {
    o.push(`<line x1="${dx(j)}" y1="132" x2="${dx(j)}" y2="444" stroke="${C.line}" stroke-width="1"${j === 0 ? '' : ' stroke-dasharray="3 4"'}/>`);
    o.push(txt(dx(j), 124, j === 0 ? 'Geste' : `J-${j}`, { size: 11.5, fill: j === 0 ? C.ink : C.muted, anchor: 'middle', weight: j === 0 ? 700 : 400 }));
  }
  const rows = [
    { n: 'Aspirine 75–325 mg', j: 0, span: [6, 4], lab: '4 à 6 j si risque élevé — sinon poursuivie', c: C.vert },
    { n: 'AINS', j: 0, span: [4, 1], lab: '1 à 4 j si risque élevé — sinon poursuivis', c: C.vert },
    { n: 'ISRS / IRSNa', j: 0, lab: 'Poursuivis', c: C.vert },
    { n: 'Clopidogrel', j: 7, lab: '7 jours', c: C.orange },
    { n: 'Prasugrel', j: 10, span: [10, 7], lab: '7 à 10 jours', c: C.orange },
    { n: 'Ticagrelor', j: 7, span: [7, 5], lab: '5 à 7 jours', c: C.orange },
    { n: 'AVK (warfarine, fluindione)', j: 5, lab: '5 jours, puis INR du jour même', c: C.rouge },
    { n: 'Dabigatran', j: 6, span: [6, 4], lab: '4 à 6 jours selon la clairance', c: C.rouge },
    { n: 'Rivaroxaban, apixaban, edoxaban', j: 3, lab: '3 jours', c: C.rouge },
    { n: 'HBPM curative', j: 1, lab: '24 heures', c: C.bleu },
    { n: 'HBPM prophylactique', j: 0.5, lab: '12 heures', c: C.bleu },
    { n: 'HNF sous-cutanée / intraveineuse', j: 0.25, lab: '6 h (SC) · 4–6 h (IV), TCA normalisé', c: C.bleu },
  ];
  rows.forEach((r, i) => {
    const y = 156 + i * 24;
    o.push(txt(286, y + 4, r.n, { size: 12.6, anchor: 'end', weight: 600 }));
    if (r.span) o.push(`<rect x="${dx(r.span[0])}" y="${y - 6}" width="${dx(r.span[1]) - dx(r.span[0])}" height="12" rx="6" fill="${r.c}" fill-opacity=".22"/>`);
    o.push(`<line x1="${dx(r.j)}" y1="${y}" x2="${dx(0)}" y2="${y}" stroke="${r.c}" stroke-width="2.6" stroke-linecap="round"/>`);
    o.push(`<circle cx="${dx(r.j)}" cy="${y}" r="4.5" fill="${r.c}"/>`);
    o.push(txt(716, y + 4, r.lab, { size: 12.4, fill: C.muted }));
  });
  o.push(`<line x1="${dx(0)}" y1="132" x2="${dx(0)}" y2="444" stroke="${C.ink}" stroke-width="1.6"/>`);
  o.push(box(34, 498, 932, 106, { fill: C.panel }));
  o.push(lines(54, 524, [
    'AVK : ce n\'est pas le délai qui décide, mais l\'INR du jour même — ≤ 1,2 en risque élevé, ≤ 1,4 en intermédiaire.',
    'Dabigatran : 4 j si ClCr ≥ 80 · 5 j si 50–79 · 6 j si 30–49 mL/min. Rivaroxaban, apixaban, edoxaban : règle des 5 demi-vies.',
    'Reprise : 24 h après le geste en règle — 12 à 24 h pour le clopidogrel, 2 à 4 h pour l\'HNF intraveineuse.',
    'Toute interruption se décide avec le prescripteur et se trace dans le dossier.'], { size: 12.8, lh: 20 }));
  o.push(foot(W, H, 'Schéma original — délais repris du tableau de cette fiche (ASRA-ESRA 2018) ; barres pâles = fourchette annoncée.'));
  out['socle-securite/antithrombotiques.svg'] = o.join('\n');
}

/* ---------------------------------------------------------------- écriture */
const only = process.argv[2];
let n = 0;
for (const [rel, svg] of Object.entries(out)) {
  if (only && !rel.includes(only)) continue;
  const p = path.join(root, 'img', rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, svg);
  console.log('écrit  img/' + rel);
  n++;
}
console.log(n + ' schéma(s)');
