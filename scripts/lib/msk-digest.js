/* Texte Markdown d'une région pour NotebookLM : fiche MSK (si présente) puis extraits des fiches gestes. Sans balises ni gras.
   Seules les vraies balises (`<b>`, `</ul>`, `<a href…>`) sont retirées : un « < 2 mm » ou un « > 5 mm » reste intact, même avec les deux dans une même chaîne.
   Pathologie : terme anglais, signes, pièges, conduite (le digest nourrit l'audio : les pièges y ont leur place, comme au site) ; artefact : texte, puis la
   question et la réponse de sa carte, matière toute prête pour l'épisode « rappel oral ». */
const strip = s => String(s == null ? '' : s).replace(/\*\*/g, '').replace(/<\/?[a-z][^>]*>/gi, '');
const list = arr => (arr || []).map(x => `- ${strip(typeof x === 'string' ? x : [x.titre, x.texte].filter(Boolean).join(' : '))}`).join('\n');
const sansPoint = s => s.replace(/\s*\.$/, '');   // un signe finit souvent par un point : retiré avant de joindre par « ; », remis une fois en fin de liste
function digest(f, gestes, E, nom) {
  const out = [`# Écho MSK — ${nom}`, ''];
  if (f) {
    out.push(`## Fiche diagnostique : ${strip(f.titre)}`, '', strip(f.resume), '', '### Protocole d\'examen');
    (f.protocole || []).forEach(c => out.push(`${c.n}. ${strip(c.titre)} — position : ${strip(c.position)} ; repère : ${strip(c.repere)} ; structures : ${(c.structures || []).map(strip).join(', ')}${c.dynamique ? ` ; manœuvre : ${strip(c.dynamique)}` : ''}${c.pieges ? ` ; pièges : ${strip(c.pieges)}` : ''}`));
    out.push('', '### Sono-anatomie normale'); (f.sonoanatomie || []).forEach(s => out.push(`- ${strip(s.structure)} : ${strip(s.aspect)}${s.mesure ? ` (${strip(s.mesure)})` : ''}`));
    out.push('', '### Pathologies');
    for (const p of f.pathologies || []) {
      out.push(`- ${strip(p.nom)}${p.en ? ` (${strip(p.en)})` : ''}`);
      if ((p.signes || []).length) out.push(`  - Signes : ${p.signes.map(s => sansPoint(strip(s))).join(' ; ')}.`);
      if (p.pieges) out.push(`  - Pièges : ${strip(p.pieges)}`);
      if (p.conduite) out.push(`  - Conduite : ${strip(p.conduite)}`);
    }
    out.push('', '### Artefacts et pièges');
    for (const a of f.artefacts || []) {
      out.push(`- ${strip(a.nom)} : ${strip(a.texte)}`);
      if (a.question && a.reponse) out.push(`  - Question : ${strip(a.question)}`, `  - Réponse : ${strip(a.reponse)}`);
    }
    out.push('', '### Dictée d\'un examen normal', strip(f.dictee), '');
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
