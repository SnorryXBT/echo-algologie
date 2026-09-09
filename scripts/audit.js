/* Audit des fiches : champs obligatoires, longueur, scènes, références. node scripts/audit.js */
const fs = require('fs'), path = require('path');
global.window = {}; const E = global.ECHO = { procedures: {}, register(p) { E.procedures[p.id] = p; } };
const reg = fs.readFileSync(path.join(__dirname, '../js/data/registry.js'), 'utf8');
const manifest = [...reg.matchAll(/'([a-z0-9-]+)'/g)].map(m => m[1]).filter(x => !['socle','tete-cou','rachis-bassin','thorax','membre-sup','membre-inf','infiltration','bloc','interventionnel','dorsal','ventral','lateral','assis','semi-assis','procubitus','lineaire','convexe','hockey'].includes(x));
const dir = path.join(__dirname, '../js/data/procedures');
const errors = [];
for (const f of fs.readdirSync(dir)) if (f.endsWith('.js')) { try { require(path.join(dir, f)); } catch (e) { errors.push(`${f}: ${e.message}`); } }
const words = v => { if (!v) return 0; if (Array.isArray(v)) return v.reduce((a, x) => a + words(typeof x === 'string' ? x : Object.values(x).join(' ')), 0); if (typeof v === 'object') return Object.values(v).reduce((a, x) => a + words(x), 0); return String(v).split(/\s+/).filter(Boolean).length; };
const req = ['titre','en','region','types','niveau','resume','indications','contreIndications','anatomie','technique','injectat','pearls','pieges','complications','suivi','evidence','references','scenes'];
const rows = []; let tot = { mots: 0, refs: 0, unv: 0, scenes: 0 };
for (const id of manifest) {
  const p = E.procedures[id];
  if (!p) { rows.push(`MANQUANTE  ${id}`); continue; }
  const missing = req.filter(k => p[k] == null || (Array.isArray(p[k]) && !p[k].length));
  const textFields = ['resume','indications','contreIndications','alternatives','anatomie','installation','reperage','sonoanatomie','technique','injectat','variantes','pearls','pieges','complications','securite','suivi','evidence'];
  const n = textFields.reduce((a, k) => a + words(p[k]), 0);
  const refs = (p.references || []).length, unv = (p.references || []).filter(r => r.verif === false).length, sc = (p.scenes || []).length;
  tot.mots += n; tot.refs += refs; tot.unv += unv; tot.scenes += sc;
  const warn = [];
  if (n < 1100 && p.region !== 'socle') warn.push('court');
  if (sc < 2) warn.push('scènes<2');
  if (refs < 6) warn.push('refs<6');
  if (!(p.videos)) warn.push('videos absent');
  if (missing.length) warn.push('manque: ' + missing.join(','));
  rows.push(`${id.padEnd(52)} ${String(n).padStart(5)} mots  ${String(sc)} sc  ${String(refs).padStart(2)} refs (${unv} à vérif.)  ${warn.join(' · ')}`);
}
console.log(rows.join('\n'));
console.log(`\n${Object.keys(E.procedures).length}/${manifest.length} fiches · ${tot.mots} mots · ${tot.scenes} scènes · ${tot.refs} références dont ${tot.unv} à vérifier`);
if (errors.length) { console.log('\nERREURS DE CHARGEMENT :\n' + errors.join('\n')); process.exit(1); }
