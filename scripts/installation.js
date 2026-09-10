/* Figure d'installation (patient, sonde, aiguille) : node scripts/installation.js <id-fiche>
   Lit la figure type 'installation' de js/data/figures/<id>.js (champ `spec`) et écrit img/<id>/installation.svg.
   spec : { silhouette: 'epaule-posterieure',            // img/_silhouettes/<nom>.svg (viewBox 400x300)
            sonde:    { x, y, angle, w: 70, h: 14 },     // centre et orientation (degrés, 0 = horizontale)
            aiguille: { from: [x, y], to: [x, y] },      // pointe en `to`
            position: 'assis' | 'dorsal' | 'ventral' | 'lateral' | 'semi-assis' | 'procubitus',
            labels:   [{ x, y, text }],                  // texte libre, coordonnées 400x300
            note:     'Sonde longitudinale …' }         // ligne sous la figure (facultatif) */
const fs = require('fs'), path = require('path');
const id = process.argv[2]; if (!id) { console.error('usage: node scripts/installation.js <id-fiche>'); process.exit(1); }
const root = path.join(__dirname, '..');
const ECHO = { figures: {} }; new Function('ECHO', fs.readFileSync(path.join(root, 'js/data/figures', id + '.js'), 'utf8'))(ECHO);
const fig = (ECHO.figures[id] || []).find(f => f.type === 'installation' && f.spec);
if (!fig) { console.error('pas de figure installation avec spec'); process.exit(1); }
const s = fig.spec;
const sil = fs.readFileSync(path.join(root, 'img/_silhouettes', s.silhouette + '.svg'), 'utf8').replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const picto = {
  assis:      'M14,10 a4,4 0 1,0 0.1,0 M14,14 L14,26 L26,26 L26,38 M14,26 L14,38 M14,18 L22,20',
  'semi-assis':'M10,12 a4,4 0 1,0 0.1,0 M10,16 L18,28 L34,28 L42,30 M18,28 L20,36 M6,30 L44,30',
  dorsal:     'M8,24 a4,4 0 1,0 0.1,0 M12,24 L44,24 M20,24 L22,17 M34,24 L44,26 M6,30 L46,30',
  ventral:    'M8,24 a4,4 0 1,0 0.1,0 M12,24 L44,24 M20,24 L24,30 M34,24 L44,22 M6,31 L46,31',
  procubitus: 'M8,22 a4,4 0 1,0 0.1,0 M12,22 C20,20 26,16 30,16 C36,16 40,20 44,24 M22,26 L36,26 M6,31 L46,31',
  lateral:    'M10,14 a4,4 0 1,0 0.1,0 M10,18 L14,30 L24,34 L34,30 M14,30 L30,26 M6,36 L44,36',
};
const posNom = { assis: 'Assis', 'semi-assis': 'Semi-assis', dorsal: 'Décubitus dorsal', ventral: 'Décubitus ventral', procubitus: 'Procubitus', lateral: 'Décubitus latéral' };
const p = s.sonde || {}, w = p.w || 70, h = p.h || 14;
const probe = p.x != null ? `<g transform="translate(${p.x},${p.y}) rotate(${p.angle || 0})"><rect x="${-w / 2}" y="${-h / 2}" width="${w}" height="${h}" rx="3" fill="#1d4ed8" fill-opacity=".85" stroke="#1e3a8a"/><rect x="${-w / 2 + 2}" y="${h / 2 - 3}" width="${w - 4}" height="2" fill="#93c5fd" stroke="none"/><circle cx="${-w / 2 + 6}" cy="${-h / 2 - 5}" r="3" fill="#1d4ed8" stroke="none"/></g>` : '';
const a = s.aiguille;
const needle = a ? `<line x1="${a.from[0]}" y1="${a.from[1]}" x2="${a.to[0]}" y2="${a.to[1]}" stroke="#b91c1c" stroke-width="3"/><circle cx="${a.from[0]}" cy="${a.from[1]}" r="4" fill="#b91c1c" stroke="none"/>` : '';
const labels = (s.labels || []).map(l => `<text x="${l.x}" y="${l.y}" font-size="10.5" font-weight="600" fill="#1f2937" stroke="#fff" stroke-width="3" paint-order="stroke">${l.text}</text>`).join('');
const pict = s.position && picto[s.position] ? `<g transform="translate(6,232)"><rect x="0" y="0" width="52" height="48" rx="6" fill="#fff" fill-opacity=".9" stroke="#9ca3af" stroke-width="1"/><path d="${picto[s.position]}" stroke="#1f2937" stroke-width="2.2" fill="none" stroke-linecap="round"/><text x="26" y="58" text-anchor="middle" font-size="9" fill="#374151" stroke="none">${posNom[s.position]}</text></g>` : '';
const legend = `<g font-size="9.5" fill="#374151" stroke="none" transform="translate(330,262)"><rect x="0" y="0" width="14" height="8" rx="2" fill="#1d4ed8"/><text x="18" y="8">sonde</text><line x1="0" y1="22" x2="14" y2="22" stroke="#b91c1c" stroke-width="3"/><text x="18" y="26">aiguille</text></g>`;
/* note : coupée en lignes d'≈ 75 caractères, en haut de la figure */
const wrap = (t, n = 75) => t.split(' ').reduce((a, w) => { const l = a[a.length - 1]; if (l && (l + ' ' + w).length <= n) a[a.length - 1] = l + ' ' + w; else a.push(w); return a; }, []);
const note = s.note ? `<text x="200" y="13" text-anchor="middle" font-size="9.5" fill="#374151" stroke="none">${wrap(s.note).map((l, i) => `<tspan x="200" dy="${i ? 12 : 0}">${l}</tspan>`).join('')}</text>` : '';
const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300" font-family="-apple-system, Helvetica, Arial, sans-serif">
<rect width="400" height="300" fill="#f8fafc"/>
<g fill="none" stroke="#1f2937" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${sil}</g>
${probe}${needle}${labels}${pict}${legend}${note}
</svg>`;
const dir = path.join(root, 'img', id); fs.mkdirSync(dir, { recursive: true });
const out = path.join(dir, 'installation.svg'); fs.writeFileSync(out, svg);
console.log('→ ' + path.relative(process.cwd(), out));
