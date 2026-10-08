/* Dérivation des cartes Anki : d'une fiche MSK (cardsFromMsk) et des fiches gestes d'une région (cardsFromGestes).
   Pur : aucune E/S. Carte : { type, key, front, back, source, tags, image } ; image = null ou
   { src, crop, marqueurs, mode: 'front-back' | 'back' | 'plain' } — le rendu JPEG est fait par scripts/msk-export.js.
   Les `key` fixent les GUID Anki : ne jamais les renommer sans accepter de perdre la planification des cartes.
   cardsFromGestes(ids, E, region) : `region` (facultatif) donne l'étiquette `msk::<region>` ; sans elle, `msk::socle`. Elle n'entre jamais dans une `key`.
   Tout texte entre dans une carte par `inline` (échappé, Markdown du site), `source` compris : crédit puis licence, comme les crédits du site.
   Verso et recto d'une carte « structure » suivent les numéros des marqueurs, pas l'ordre du tableau. `image.marqueurs` et `image.crop` sont des copies : une carte ne partage aucun tableau avec la fiche. */
const slug = require('./slug');
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const SITE = 'https://echo-algologie.pages.dev/#/';
const cp = a => Array.isArray(a) ? a.slice() : a;   // copie d'un tableau de la fiche ou de la figure (crop, marqueurs)
const helpers = E => ({
  inline: E && E.inline ? E.inline : esc,
  md: E && E.md ? E.md : (x => Array.isArray(x) ? `<ul>${x.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : `<p>${esc(x)}</p>`),
  gesteTitre: id => { const p = ((E || {}).procedures || {})[id]; return p ? (p.titreCourt || p.titre) : id; },
});
function cardsFromMsk(f, E) {
  const { inline, md, gesteTitre } = helpers(E), titre = inline(f.titre), tags = t => [`msk::${f.id}`, `type::${t}`], credit = i => inline([i.credit, i.licence].filter(Boolean).join(' — ')), cards = [];
  (f.protocole || []).forEach(c => {
    const img = c.image || {}, mq = img.marqueurs || [], liste = mq.slice().sort((a, b) => a.n - b.n);
    if (img.src && mq.length >= 2) cards.push({ type: 'structure', key: `coupe-${c.n}-structures`, tags: tags('structure'), image: { src: img.src, crop: cp(img.crop), marqueurs: liste, mode: 'front-back' },
      front: `<b>${titre}</b> — coupe ${c.n}, ${inline(c.titre)}.<br>Nommer les structures ${liste[0].n} à ${liste[liste.length - 1].n}.`, back: `<ol>${liste.map(m => `<li value="${m.n}">${inline(m.label)}</li>`).join('')}</ol>`, source: credit(img) });
    cards.push({ type: 'coupe', key: `coupe-${c.n}`, tags: tags('coupe'), image: img.src ? { src: img.src, crop: cp(img.crop), marqueurs: mq.slice(), mode: 'back' } : null,
      front: `<b>${titre}</b> — coupe ${c.n} : <i>${inline(c.titre)}</i>.<br>Position, repère osseux, structures attendues ?`,
      back: `<p><b>Position</b> : ${inline(c.position || '')}</p><p><b>Repère</b> : ${inline(c.repere || '')}</p>${md(c.structures || [])}${c.dynamique ? `<p><b>Manœuvre</b> : ${inline(c.dynamique)}</p>` : ''}`, source: credit(img) });
  });
  (f.pathologies || []).forEach(p => {
    const k = slug(p.nom), img = p.image && p.image.src ? p.image : null;
    cards.push({ type: 'pathologie', key: `patho-${k}`, tags: tags('pathologie'), image: img ? { src: img.src, crop: cp(img.crop), marqueurs: [], mode: 'plain' } : null,
      front: `<i>${inline(p.vignette || '')}</i><br>${img ? 'Image obtenue en consultation : diagnostic et signe clé ?' : `<b>${titre}</b> : quelle pathologie, quel signe clé ?`}`,
      back: `<p><b>${inline(p.nom)}</b>${p.en ? ` (${inline(p.en)})` : ''}</p>${md((p.signes || []).slice(0, 3))}<p><b>Conduite</b> : ${inline(p.conduite || '')}</p>`, source: img ? credit(img) : '' });
    if ((p.gestes || []).length) cards.push({ type: 'geste', key: `geste-${k}`, tags: tags('geste'), image: null,
      front: `<b>${titre}</b> : ${inline(p.nom)} confirmée à l'écho.<br>Quel geste du mémo, quelle fiche ?`,
      back: `<ul>${p.gestes.map(id => `<li>${esc(gesteTitre(id))} — <a href="${SITE}fiche/${encodeURIComponent(id)}">fiche</a></li>`).join('')}</ul>`, source: '' });
  });
  (f.artefacts || []).forEach(a => cards.push({ type: 'piege', key: `piege-${slug(a.nom)}`, tags: tags('piege'), image: null,
    front: `<b>${titre}</b> — ${a.question ? inline(a.question) : `${inline(a.nom)} : de quoi s'agit-il et comment s'en prémunir ?`}`,
    back: `<p>${inline(a.reponse || a.texte)}</p>`, source: '' }));
  return cards;
}
function cardsFromGestes(ids, E, region) {
  const { inline } = helpers(E), cards = [];
  for (const id of ids) {
    const p = (E.procedures || {})[id]; if (!p) continue;
    const t = inline(p.titreCourt || p.titre), tags = ty => [`msk::${region || 'socle'}`, `geste::${id}`, `type::${ty}`];
    ((E.figures || {})[id] || []).filter(f => f.type === 'echo' && (f.labels || []).length >= 2).forEach((f, i) => {
      const mq = f.labels.map((l, k) => ({ n: k + 1, x: l.x, y: l.y, dx: l.dx, dy: l.dy, label: l.text }));
      cards.push({ type: 'structure', key: `socle-${id}-echo-${i + 1}`, tags: tags('structure'), image: { src: f.src, crop: cp(f.crop), marqueurs: mq, mode: 'front-back' },
        front: `<b>${t}</b> — ${inline(f.titre || 'coupe de repérage')}.<br>Nommer les structures 1 à ${mq.length}.`,
        back: `<ol>${mq.map(m => `<li>${inline(m.label)}</li>`).join('')}</ol>${f.legende ? `<p>${inline(f.legende)}</p>` : ''}`, source: inline(f.credit || '') });
    });
    (p.sonoanatomie || []).forEach(s => cards.push({ type: 'structure', key: `socle-${id}-sono-${slug(s.structure)}`, tags: tags('structure'), image: null,
      front: `<b>${t}</b> — aspect échographique et repère : <i>${inline(s.structure)}</i> ?`, back: `<p>${inline(s.aspect)}</p>${s.repere ? `<p><b>Repère</b> : ${inline(s.repere)}</p>` : ''}`, source: '' }));
    (p.pieges || []).forEach((txt, i) => {
      const m = /^(.{15,}?)\s:\s(.{10,})$/s.exec(String(txt));   // « énoncé : parade » → recto / verso ; sans deux-points, pas de carte
      if (m) cards.push({ type: 'piege', key: `socle-${id}-piege-${i + 1}`, tags: tags('piege'), image: null, front: `<b>${t}</b> — piège : ${inline(m[1])}…<br>Quelle conséquence, quelle parade ?`, back: `<p>${inline(m[2])}</p>`, source: '' });
    });
  }
  return cards;
}
module.exports = { cardsFromMsk, cardsFromGestes };
