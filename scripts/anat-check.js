/* Contrôle statique des coupes anatomiques (js/data/anat/*.js) et état de validation. node scripts/anat-check.js
   Vérifie : figure `fig` existante et de type echo dans la fiche, image présente, `vb` cohérent avec l'image après crop
   (± 2 %), identifiants de structures uniques, tissus connus, étiquettes rattachées à une structure existante et
   pointant dans le cadre, `lecture` renseignée. Code 1 s'il reste une erreur. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
global.window = global; global.ECHO = { figures: {}, anat: {} };
for (const d of ['figures', 'anat']) { const dir = path.join(root, 'js/data', d); if (fs.existsSync(dir)) for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) eval(fs.readFileSync(path.join(dir, f), 'utf8')); }
const TISSUS = ['peau', 'graisse', 'muscle', 'tendon', 'bourse', 'cartilage', 'os', 'nerf', 'artere', 'veine', 'ligament', 'fascia', 'plevre', 'poumon', 'glande', 'disque', 'liquide', 'conjonctif', 'aiguille'];
function size(file) {                    // dimensions JPEG / PNG sans dépendance
  const b = fs.readFileSync(file);
  if (b[0] === 0x89) return [b.readUInt32BE(16), b.readUInt32BE(20)];
  for (let i = 2; i < b.length;) { const m = b[i + 1], l = b.readUInt16BE(i + 2); if (m >= 0xc0 && m <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(m)) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]; i += 2 + l; }
  return null;
}
let err = 0, tot = 0, ok = 0; const bad = m => { err++; console.log('  ERREUR ' + m); };
for (const id of Object.keys(ECHO.anat).sort()) for (const a of ECHO.anat[id]) {
  tot++; if (a.valide) ok++;
  console.log(`${id}  ${a.fig}  ${a.valide ? 'validée' : 'À VALIDER'}  (${(a.structures || []).length} structures, ${(a.labels || []).length} étiquettes)`);
  const f = (ECHO.figures[id] || []).find(x => x.src === a.fig);
  if (!f || f.type !== 'echo') { bad('aucune figure type echo avec ce src dans js/data/figures/' + id + '.js'); continue; }
  const file = path.join(root, a.fig); if (!fs.existsSync(file)) { bad('image absente'); continue; }
  const s = size(file), c = f.crop || [0, 0, 1, 1];
  if (s && a.vb) { const H = 1000 * (s[1] * c[3]) / (s[0] * c[2]); if (a.vb[0] !== 1000 || Math.abs(a.vb[1] - H) / H > 0.02) bad(`vb ${JSON.stringify(a.vb)} incohérent avec l'image après crop (attendu [1000, ${Math.round(H)}]) — le crop a-t-il changé après le tracé ?`); }
  if (!a.lecture || !a.lecture.length) bad('`lecture` absente : la confiance de la lecture doit être annoncée');
  if (!a.orient || !a.orient.left || !a.orient.right) bad('`orient` absent');
  const ids = new Set();
  for (const st of a.structures || []) {
    if (ids.has(st.id)) bad('structure en double : ' + st.id); ids.add(st.id);
    if (!TISSUS.includes(st.tissu)) bad(`tissu inconnu « ${st.tissu} » (${st.id})`);
    if (!(st.cortex || st.contour || st.ligne || (st.bas && (st.haut || st.ep)))) bad('géométrie absente : ' + st.id);
  }
  for (const l of a.labels || []) {
    if (l.s && !ids.has(l.s)) bad(`étiquette « ${l.text} » rattachée à une structure inconnue : ${l.s}`);
    if (l.x < 0 || l.x > a.vb[0] || l.y < 0 || l.y > a.vb[1]) bad(`étiquette « ${l.text} » pointe hors cadre`);
  }
}
console.log(`\n${tot} coupe(s) anatomique(s), ${ok} validée(s), ${err} erreur(s)`);
process.exit(err ? 1 : 0);
