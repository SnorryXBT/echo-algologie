/* Texte Markdown d'une région pour NotebookLM : fiche MSK (si présente) puis extraits des fiches gestes. Sans balises ni gras.
   Seules les vraies balises (`<b>`, `</ul>`, `<a href…>`) sont retirées : un « < 2 mm » ou un « > 5 mm » reste intact, même avec les deux dans une même chaîne. */
const strip = s => String(s == null ? '' : s).replace(/\*\*/g, '').replace(/<\/?[a-z][^>]*>/gi, '');
const list = arr => (arr || []).map(x => `- ${strip(typeof x === 'string' ? x : [x.titre, x.texte].filter(Boolean).join(' : '))}`).join('\n');
function digest(f, gestes, E, nom) {
  const out = [`# Écho MSK — ${nom}`, ''];
  if (f) {
    out.push(`## Fiche diagnostique : ${strip(f.titre)}`, '', strip(f.resume), '', '### Protocole d\'examen');
    (f.protocole || []).forEach(c => out.push(`${c.n}. ${strip(c.titre)} — position : ${strip(c.position)} ; repère : ${strip(c.repere)} ; structures : ${(c.structures || []).map(strip).join(', ')}${c.dynamique ? ` ; manœuvre : ${strip(c.dynamique)}` : ''}${c.pieges ? ` ; pièges : ${strip(c.pieges)}` : ''}`));
    out.push('', '### Sono-anatomie normale'); (f.sonoanatomie || []).forEach(s => out.push(`- ${strip(s.structure)} : ${strip(s.aspect)}${s.mesure ? ` (${strip(s.mesure)})` : ''}`));
    out.push('', '### Pathologies'); (f.pathologies || []).forEach(p => out.push(`- ${strip(p.nom)} : ${(p.signes || []).map(strip).join(' ; ')}. Conduite : ${strip(p.conduite)}`));
    out.push('', '### Artefacts et pièges', list((f.artefacts || []).map(a => `${a.nom} : ${a.texte}`)), '', '### Dictée d\'un examen normal', strip(f.dictee), '');
  }
  for (const id of gestes || []) {
    const p = (E.procedures || {})[id]; if (!p) continue;
    out.push(`## Geste : ${strip(p.titre)}`, '', strip(p.resume), '', '### Repérage', list(p.reperage), '', '### Sono-anatomie');
    (p.sonoanatomie || []).forEach(s => out.push(`- ${strip(s.structure)} : ${strip(s.aspect)}${s.repere ? ` — ${strip(s.repere)}` : ''}`));
    out.push('', '### Pearls', list(p.pearls), '', '### Pièges', list(p.pieges), '');
  }
  return out.join('\n');
}
module.exports = { digest };
