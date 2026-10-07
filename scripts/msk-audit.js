/* Contrôle statique des fiches MSK. node scripts/msk-audit.js [region]  — code 1 s'il reste une erreur.
   Règles : scripts/lib/msk-audit-rules.js (spec §11). */
const { loadEcho, ROOT } = require('./lib/load-echo');
const { auditMsk } = require('./lib/msk-audit-rules');
const E = loadEcho({ procedures: true, msk: true });
const ids = process.argv[2] ? [process.argv[2]] : Object.keys(E.msk).sort();
let tot = 0;
for (const id of ids) {
  const f = E.msk[id];
  if (!f) { console.log(`${id} : aucune fiche MSK`); tot++; continue; }
  const errs = auditMsk(f, { root: ROOT, procedures: E.procedures, types: E.mskTypes });
  const n = k => (f[k] || []).length, marqueurs = (f.protocole || []).reduce((a, c) => a + ((c.image || {}).marqueurs || []).length, 0);
  console.log(`${id.padEnd(16)} ${n('protocole')} coupes · ${marqueurs} marqueurs · ${n('sonoanatomie')} structures · ${n('pathologies')} pathologies · ${n('artefacts')} artefacts · ${n('competences')} compétences · ${n('references')} réf. (${(f.references || []).filter(r => r.verif === false).length} à vérifier) · ${f.valide ? 'validée' : 'NON VALIDÉE'}${errs.length ? '\n  ERREUR ' + errs.join('\n  ERREUR ') : ''}`);
  tot += errs.length;
}
console.log(`\n${ids.length} fiche(s) MSK, ${tot} erreur(s)`);
process.exit(tot ? 1 : 0);
