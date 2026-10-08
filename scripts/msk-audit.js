/* Contrôle statique des fiches MSK. node scripts/msk-audit.js [region]  — code 1 s'il reste une erreur.
   Règles : scripts/lib/msk-audit-rules.js (spec §11). */
const { loadEcho, ROOT } = require('./lib/load-echo');
const { auditMsk } = require('./lib/msk-audit-rules');
const E = loadEcho({ procedures: true, msk: true });
const arr = x => Array.isArray(x) ? x : [];   // ligne de résumé : une liste mal formée compte 0, l'audit la signale (jamais d'exception qui masquerait ses messages)
const ids = process.argv[2] ? [process.argv[2]] : Object.keys(E.msk).sort();
let tot = 0;
for (const id of ids) {
  const f = E.msk[id];
  if (!f) { console.log(`${id} : aucune fiche MSK`); tot++; continue; }
  const errs = auditMsk(f, { root: ROOT, procedures: E.procedures, types: E.mskTypes });
  const n = k => arr(f[k]).length, marqueurs = arr(f.protocole).reduce((a, c) => a + arr(((c || {}).image || {}).marqueurs).length, 0);
  console.log(`${id.padEnd(16)} ${n('protocole')} coupes · ${marqueurs} marqueurs · ${n('sonoanatomie')} structures · ${n('pathologies')} pathologies · ${n('artefacts')} artefacts · ${n('competences')} compétences · ${n('references')} réf. (${arr(f.references).filter(r => (r || {}).verif === false).length} à vérifier) · ${f.valide ? 'validée' : 'NON VALIDÉE'}${errs.length ? '\n  ERREUR ' + errs.join('\n  ERREUR ') : ''}`);
  tot += errs.length;
}
console.log(`\n${ids.length} fiche(s) MSK, ${tot} erreur(s)`);
process.exit(tot ? 1 : 0);
