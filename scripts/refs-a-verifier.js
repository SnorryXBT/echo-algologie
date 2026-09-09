/* Liste toutes les références marquées verif:false (à confirmer par recherche).
   Usage : node scripts/refs-a-verifier.js [--json] */
const fs = require('fs'), path = require('path');
global.window = {}; const E = global.ECHO = { procedures: {}, register(p) { E.procedures[p.id] = p; } };
const dir = path.join(__dirname, '../js/data/procedures');
for (const f of fs.readdirSync(dir)) if (f.endsWith('.js')) require(path.join(dir, f));
const rows = [];
for (const p of Object.values(E.procedures)) (p.references || []).forEach((r, i) => { if (r.verif === false) rows.push({ fiche: p.id, i, auteurs: r.auteurs, titre: r.titre, revue: r.revue, annee: r.annee, doi: r.doi }); });
if (process.argv.includes('--json')) console.log(JSON.stringify(rows, null, 1));
else { rows.forEach(r => console.log(`${r.fiche} #${r.i + 1} — ${r.auteurs} — ${r.titre} — ${r.revue} ${r.annee}${r.doi ? ' — ' + r.doi : ''}`)); console.log(`\n${rows.length} référence(s) à vérifier`); }
