/* Volet « Diagnostic MSK » : index (#/msk) et fiches de région (#/msk/<region>[/<section>]), données js/data/msk/<region>.js.
   Spécification : docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md. Les helpers de mise en page (sections, cartes,
   figures, références) sont ceux d'app.js, exposés dans ECHO.ui une fois app.js chargé (defer) : ne les lire qu'à l'appel. */
window.ECHO = window.ECHO || {};
(function (E) {
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = s => E.esc(s), md = s => E.md(s), inline = s => E.inline(s);
  const TYPES = { coupe: 'Coupe', structure: 'Structure', pathologie: 'Pathologie', dynamique: 'Manœuvre', piege: 'Piège', geste: 'Geste' };
  const regionNom = id => ((E.mskRegions || []).find(r => r.id === id) || {}).nom || id;
  const crumbs = (html, title) => { $('#crumbs').innerHTML = html; document.title = title + ' — Écho-algologie'; };
  const gesteTitre = id => { const p = (E.procedures || {})[id]; return p ? (p.titreCourt || p.titre) : id; };
  const chips = ids => `<div class="chips">${ids.map(id => `<span><a href="#/fiche/${esc(id)}">${esc(gesteTitre(id))}</a></span>`).join('')}</div>`;
  const kv = rows => `<dl class="kv">${rows.filter(r => r[1]).map(r => `<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join('')}</dl>`;

  const banniere = f => f.valide ? '' : `<div class="callout warn msk-banniere"><div class="t">Fiche non validée</div>Contenu rédigé par Claude et non encore relu par Mat : à vérifier avant de s'en prévaloir.</div>`;
  /* image réelle à marqueurs numérotés : même rendu que les figures des fiches gestes (crop, lignes, étiquettes, mode quiz) */
  function figure(img, ficheId) {
    if (!img || !img.src) return '';
    const f = Object.assign({ type: 'echo' }, img, { labels: (img.marqueurs || []).map(m => ({ x: m.x, y: m.y, dx: m.dx, dy: m.dy, text: `${m.n}. ${m.label}` })) });
    return `<div class="figs">${E.ui.figHtml(f, { id: 'msk-' + ficheId })}</div>`;
  }
  function protocoleHtml(f) {
    return (f.protocole || []).map(c => E.ui.card(`<h3>Coupe ${c.n} — ${inline(c.titre)}</h3>` + kv([
      ['Position', c.position && inline(c.position)], ['Repère', c.repere && inline(c.repere)],
      ['Structures attendues', c.structures && c.structures.length ? md(c.structures) : ''],
      ['Manœuvre dynamique', c.dynamique && md(c.dynamique)], ['Pièges', c.pieges && md(c.pieges)],
    ]) + figure(c.image, f.id))).join('');
  }
  function sonoHtml(f) {
    if (!f.sonoanatomie || !f.sonoanatomie.length) return '';
    const src = s => s.source == null ? '' : (Array.isArray(s.source) ? s.source : [s.source]).map(i => `[${i + 1}]`).join(' ');
    return E.ui.card(`<div class="tbl"><table><tr><th>Structure</th><th>Aspect normal</th><th>Mesure de référence</th><th>Réf.</th></tr>${f.sonoanatomie.map(s => `<tr><td><b>${inline(s.structure)}</b></td><td>${inline(s.aspect)}</td><td>${inline(s.mesure || '')}</td><td>${src(s)}</td></tr>`).join('')}</table></div>`);
  }
  function pathosHtml(f) {
    return (f.pathologies || []).map(p => E.ui.card(`<h3>${inline(p.nom)}${p.en ? ` <small class="en">${inline(p.en)}</small>` : ''}</h3>` +
      (p.signes && p.signes.length ? `<h4>Signes échographiques</h4>${md(p.signes)}` : '') +
      (p.pieges ? `<h4>Pièges</h4>${md(p.pieges)}` : '') +
      (p.conduite ? `<h4>Conduite</h4><div class="prose">${md(p.conduite)}</div>` : '') +
      (p.gestes && p.gestes.length ? `<h4>Gestes du mémo</h4>${chips(p.gestes)}` : (p.aucunGeste ? `<p class="muted">${inline(p.aucunGeste)}</p>` : '')) +
      figure(p.image, f.id))).join('');
  }
  const artefactsHtml = f => f.artefacts && f.artefacts.length ? E.ui.callout('Artefacts et pièges', `<ul>${f.artefacts.map(a => `<li><b>${inline(a.nom)}</b> — ${inline(a.texte)}</li>`).join('')}</ul>`, 'warn') : '';
  const competencesHtml = f => f.competences && f.competences.length ? E.ui.card(`<p class="muted">Ce qu'il faut savoir identifier (niveau 1) ou diagnostiquer et dicter (niveau 2). Les paliers acquis ne sont pas affichés ici : ils vivent dans le dossier privé, lus par <code>/msk-semaine</code>.</p><div class="tbl"><table><tr><th>Id</th><th>Type</th><th>Compétence</th><th>Niveau</th></tr>${f.competences.map(c => `<tr><td><code>${esc(c.id)}</code></td><td>${esc(TYPES[c.type] || c.type)}</td><td>${inline(c.libelle)}</td><td>${esc(c.niveau)}</td></tr>`).join('')}</table></div>`) : '';

  function renderIndex() {
    const tiles = (E.mskRegions || []).map(r => { const f = E.msk[r.id]; return f
      ? `<a class="tile" href="#/msk/${r.id}"><b>${esc(r.nom)}</b><small>${esc(f.en || '')}</small><div class="tags" style="margin-top:6px">${f.valide ? '<span class="tag grade">validée</span>' : '<span class="tag">à valider</span>'}${f.maj ? `<span class="tag">Révisé ${esc(f.maj)}</span>` : ''}</div></a>`
      : `<div class="tile" style="opacity:.55"><b>${esc(r.nom)}</b><small>au plan, non encore rédigée</small></div>`; }).join('');
    $('#content').innerHTML = `<div class="home"><h1>Diagnostic MSK</h1><p class="lead">Échographie musculo-squelettique diagnostique, articulée aux gestes du mémo : pour chaque région, le protocole d'examen en coupes numérotées (guides ESSR), la sono-anatomie normale, les pathologies à reconnaître, les artefacts, la checklist de dictée d'un examen normal et la carte de compétences. Les cartes de révision (Anki) et les épisodes audio en sont dérivés.</p><div class="tiles">${tiles}</div><div class="callout" style="margin-top:18px"><div class="t">Mode quiz</div>Le bouton « Mode quiz » masque les étiquettes des images à marqueurs ; survoler pour révéler.</div></div>`;
    crumbs('<a href="#/">Écho-algologie</a> › <b>Diagnostic MSK</b>', 'Diagnostic MSK');
  }
  function renderMsk(regionId, section) {
    if (!regionId) return renderIndex();
    const f = E.msk[regionId];
    if (!f) {
      $('#content').innerHTML = `<div class="empty"><h2>Fiche MSK « ${esc(regionNom(regionId))} » non encore rédigée</h2><p>Elle figure au plan du volet diagnostic ; son fichier <code>js/data/msk/${esc(regionId)}.js</code> n'est pas encore présent.</p><p><a href="#/msk">Retour au volet</a></p></div>`;
      crumbs(`<a href="#/">Écho-algologie</a> › <a href="#/msk">Diagnostic MSK</a> › <b>${esc(regionNom(regionId))}</b>`, regionNom(regionId));
      return;
    }
    const parts = [], nav = []; let n = 0;
    const push = (id, titre, inner) => { if (!inner) return; parts.push(E.ui.sec(id, titre, inner, String(++n).padStart(2, '0'))); nav.push([id, titre]); };
    push('vue', 'Vue d\'ensemble', (f.resume ? E.ui.card(`<div class="prose">${md(f.resume)}</div>`) : '') + (f.gestes && f.gestes.length ? E.ui.card(`<h3>Fiches gestes de la région</h3>${chips(f.gestes)}`) : ''));
    push('protocole', 'Protocole d\'examen', protocoleHtml(f));
    push('sonoanatomie', 'Sono-anatomie normale', sonoHtml(f));
    push('pathologies', 'Pathologies à reconnaître', pathosHtml(f));
    push('artefacts', 'Artefacts et pièges', artefactsHtml(f));
    push('dictee', 'Checklist de dictée', f.dictee ? E.ui.card(`<div class="prose">${md(f.dictee)}</div>`) : '');
    push('competences', 'Carte de compétences', competencesHtml(f));
    const nUnv = (f.references || []).filter(r => r.verif === false).length;
    push('references', 'Références', f.references && f.references.length ? (nUnv ? E.ui.callout('Sourçage', `${nUnv} référence${nUnv > 1 ? 's' : ''} sur ${f.references.length} marquée${nUnv > 1 ? 's' : ''} « à vérifier ».`, 'warn') : '') + E.ui.card(E.ui.refsHtml(f.references)) : '');
    push('videos', 'Vidéos et liens externes', E.ui.videosHtml(f.videos));
    const head = `<div class="fiche-head"><div class="tags"><span class="tag t-msk">Diagnostic MSK</span>${f.valide ? '<span class="tag grade">validée par Mat</span>' : '<span class="tag">à valider</span>'}${f.maj ? `<span class="tag">Révisé ${esc(f.maj)}</span>` : ''}</div><h1>${inline(f.titre)}</h1>${f.en ? `<div class="en">${inline(f.en)}</div>` : ''}${banniere(f)}${E.ui.flash(f)}</div>`;
    const subnav = `<nav class="subnav">${nav.map(x => `<a href="#/msk/${f.id}/${x[0]}">${x[1]}</a>`).join('')}</nav>`;
    $('#content').innerHTML = head + subnav + parts.join('');
    crumbs(`<a href="#/">Écho-algologie</a> › <a href="#/msk">Diagnostic MSK</a> › <b>${esc(regionNom(f.id))}</b>`, f.titre);
    E.ui.applyCrops(); E.ui.bindSections();
    if (section) { const el = document.getElementById(section); if (el) el.scrollIntoView({ block: 'start' }); }
  }
  E.renderMsk = renderMsk;
  /* recherche de la colonne de gauche : nom de région, titre, dénomination anglaise, mots-clés */
  E.mskMatches = function (q, r) {
    const f = E.msk[r.id] || {}, norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    const h = norm([r.nom, f.titre, f.en, (f.motsCles || []).join(' ')].join(' '));
    return norm(q).split(/\s+/).every(w => h.includes(w));
  };
})(window.ECHO);
