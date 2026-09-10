/* Application : navigation, recherche, rendu des fiches. Fonctionne en file:// sans serveur. */
(function (E) {
  const $ = (s, r) => (r || document).querySelector(s);
  const esc = E.esc, md = E.md, inline = E.inline;
  const state = { q: '', type: null, quiz: false, theme: null };
  try { state.theme = localStorage.getItem('echo-theme'); state.quiz = localStorage.getItem('echo-quiz') === '1'; } catch (e) {}

  /* ---------- helpers ---------- */
  const byRegion = () => {
    const map = {}; E.regions.forEach(r => (map[r.id] = []));
    const seen = new Set();
    E.manifest.forEach(id => { const p = E.procedures[id]; if (p) { (map[p.region] = map[p.region] || []).push(p); seen.add(id); } else { const r = guessRegion(id); (map[r] = map[r] || []).push({ id, titre: id, missing: true, region: r, types: [] }); } });
    E.order.forEach(id => { if (!seen.has(id)) { const p = E.procedures[id]; (map[p.region] = map[p.region] || []).push(p); } });
    return map;
  };
  function guessRegion(id) {
    const i = E.manifest.indexOf(id), bounds = [['socle', 0], ['tete-cou', E.manifest.indexOf('nerf-grand-occipital')], ['rachis-bassin', E.manifest.indexOf('branches-mediales-lombaires')], ['thorax', E.manifest.indexOf('intercostal')], ['membre-sup', E.manifest.indexOf('nerf-suprascapulaire')], ['membre-inf', E.manifest.indexOf('coxo-femorale')]];
    let r = 'socle'; bounds.forEach(b => { if (i >= b[1]) r = b[0]; }); return r;
  }
  const haystack = p => [p.titre, p.en, p.resume, (p.indications || []).join(' '), (p.motsCles || []).join(' '), (p.aliases || []).join(' ')].join(' ').toLowerCase();
  const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  const matches = p => {
    if (p.missing) return !state.q && !state.type;
    if (state.type && !(p.types || []).includes(state.type)) return false;
    if (!state.q) return true;
    const h = norm(haystack(p));
    return norm(state.q).split(/\s+/).every(w => h.includes(w));
  };

  /* ---------- sidebar ---------- */
  function renderNav() {
    const map = byRegion(), cur = currentId();
    const nav = $('#nav'); let html = '';
    E.regions.forEach(r => {
      const list = (map[r.id] || []).filter(matches);
      if (!list.length) return;
      html += `<div class="nav-region"><h2><a href="#/region/${r.id}" style="color:inherit">${esc(r.nom)}</a><span class="count">${list.length}</span></h2>`;
      list.forEach(p => {
        const t = (p.types || [])[0] || 'socle';
        html += `<a href="#/fiche/${p.id}" class="${cur === p.id ? 'active' : ''} ${p.missing ? 'missing' : ''}"><span class="dot ${t}"></span><span>${esc(p.titreCourt || p.titre)}</span>${p.niveau ? `<span class="lvl">N${p.niveau}</span>` : ''}</a>`;
      });
      html += '</div>';
    });
    nav.innerHTML = html || '<div class="empty">Aucune fiche ne correspond.</div>';
    document.querySelectorAll('.filters button').forEach(b => b.classList.toggle('on', b.dataset.type === (state.type || 'all')));
  }

  /* ---------- rendu d'une fiche ---------- */
  const secs = [];
  const sec = (id, titre, inner, n) => inner ? `<section class="sec" id="${id}"><h2><span class="n">${n}</span>${titre}</h2>${inner}</section>` : '';
  const card = (inner, cls) => `<div class="card ${cls || ''}">${inner}</div>`;
  const callout = (t, inner, cls) => inner ? `<div class="callout ${cls || ''}"><div class="t">${t}</div>${inner}</div>` : '';
  const steps = arr => arr && arr.length ? `<ol class="steps">${arr.map(s => `<li>${s.titre ? `<b>${inline(s.titre)}</b>` : ''}${md(s.texte || s)}</li>`).join('')}</ol>` : '';

  function flash(p) {
    const f = p.flash || {};
    const cells = [];
    if (f.position) cells.push([E.icon('positions', f.position), 'Patient', `${esc(E.positions[f.position] || f.position)}${f.positionNote ? ' — ' + inline(f.positionNote) : ''}`]);
    if (f.sonde) cells.push([E.icon('sondes', f.sonde), 'Sonde', `${esc(E.sondes[f.sonde] || f.sonde)}${f.sondeNote ? ' — ' + inline(f.sondeNote) : ''}`]);
    if (f.approche) cells.push([E.icon('approches', f.approche), 'Approche', `${f.approche === 'in-plane' ? 'Dans le plan (in-plane)' : f.approche === 'out-of-plane' ? 'Hors du plan (out-of-plane)' : esc(f.approche)}${f.approcheNote ? ' — ' + inline(f.approcheNote) : ''}`]);
    if (f.aiguille) cells.push(['', 'Aiguille', inline(f.aiguille)]);
    if (f.cible) cells.push(['', 'Cible / critère de fin', inline(f.cible)]);
    if (f.injectat) cells.push(['', 'Injectat type', inline(f.injectat)]);
    if (f.duree) cells.push(['', 'Durée', inline(f.duree)]);
    if (f.autre) cells.push(['', f.autre[0], inline(f.autre[1])]);
    if (!cells.length) return '';
    return `<div class="flash">${cells.map(c => `<div class="cell">${c[0]}<div><div class="k">${c[1]}</div><div class="v">${c[2]}</div></div></div>`).join('')}</div>`;
  }

  function scenesHtml(p, where) {
    const list = (p.scenes || []).filter(s => (s.section || 'technique') === where);
    if (!list.length) return '';
    return `<div class="scene-grid">${list.map((s, i) => `<div class="scene-wrap" data-scene="${i}"><div class="scene-title"><span>${esc(s.titre || 'Schéma')}</span><span class="sp"></span><button class="replay" title="Rejouer l'animation">↻ Rejouer</button></div><div class="scene-body">${safeScene(s)}</div>${s.legende ? `<div class="legende">${inline(s.legende)}</div>` : ''}</div>`).join('')}</div>`;
  }
  function safeScene(s) { try { return E.renderScene(s); } catch (e) { console.error(e); return `<div class="callout danger">Erreur de rendu du schéma : ${esc(e.message)}</div>`; } }

  function refsHtml(refs) {
    if (!refs || !refs.length) return '';
    return `<ol class="refs">${refs.map(r => {
      const doi = r.doi ? `<a href="https://doi.org/${esc(r.doi)}" target="_blank" rel="noopener">doi:${esc(r.doi)}</a>` : '';
      const url = !r.doi && r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">lien</a>` : (r.pmid ? ` · <a href="https://pubmed.ncbi.nlm.nih.gov/${esc(r.pmid)}/" target="_blank" rel="noopener">PMID ${esc(r.pmid)}</a>` : '');
      const flag = r.verif === false ? `<span class="type unverified" title="Référence citée de mémoire, non confirmée par une recherche : vérifier avant de s'en prévaloir">à vérifier</span>` : '';
      return `<li class="${r.verif === false ? 'unverified' : ''}">${esc(r.auteurs || '')}${r.auteurs ? '. ' : ''}<b>${esc(r.titre || '')}</b>. <i>${esc(r.revue || '')}</i>${r.annee ? ' ' + esc(r.annee) : ''}. ${doi}${url}${r.type ? `<span class="type">${esc(r.type)}</span>` : ''}${flag}${r.note ? `<span class="note">${inline(r.note)}</span>` : ''}</li>`;
    }).join('')}</ol>`;
  }
  function videosHtml(v) {
    if (!v || !v.length) return '';
    return `<div class="videos">${v.map(x => `<a href="${esc(x.url)}" target="_blank" rel="noopener"><b>${esc(x.titre)}</b><small>${esc(x.source || '')}${x.note ? ' — ' + esc(x.note) : ''}</small></a>`).join('')}</div>`;
  }
  const defaultCheck = [
    'Indication revue, échec ou insuffisance du traitement conservateur documentés',
    'Consentement éclairé : bénéfices, risques, alternatives ; traçabilité dans le dossier',
    'Côté et niveau confirmés avec le patient (time-out)',
    'Allergies (AL, corticoïdes, iode, latex), grossesse, diabète (glycémie sous corticoïdes), infection locale ou générale',
    'Anticoagulants / antiagrégants : gestion selon ASRA 2018 (procédures douleur) — voir chapitre Sécurité',
    'Matériel : aiguille adaptée, seringues étiquetées, produits vérifiés (nom, dose, péremption), chariot d\'urgence et intralipide disponibles pour les gros volumes d\'AL',
    'Asepsie : détersion-désinfection, gel stérile ou housse de sonde, gants stériles',
    'Repérage préalable complet avant la ponction (Doppler couleur sur le trajet)',
    'Test d\'aspiration avant injection, injection fractionnée, arrêt si douleur fulgurante ou résistance',
    'Surveillance post-geste, consignes remises, évaluation à distance (EN/EVA, fonction) tracée',
  ];
  function checklistHtml(p) {
    const items = defaultCheck.concat(p.checklist || []);
    return `<ul class="check">${items.map((t, i) => `<li><input type="checkbox" id="ck${i}"><label for="ck${i}">${inline(t)}</label></li>`).join('')}</ul>`;
  }


  /* ---------- figures (planches annotées, images réelles) ---------- */
  function figHtml(f, p) {
    const crop = f.crop || [0, 0, 1, 1];
    const labels = (f.labels || []).map((l, i) => `<div class="fig-label" data-i="${i}" style="left:${(l.x + (l.dx || 0)) * 100}%;top:${(l.y + (l.dy || 0)) * 100}%">${inline(l.text)}</div>`).join('');
    const lines = (f.labels || []).map(l => `<line x1="${(l.x + (l.dx || 0)) * 100}" y1="${(l.y + (l.dy || 0)) * 100}" x2="${l.x * 100}" y2="${l.y * 100}"/><circle cx="${l.x * 100}" cy="${l.y * 100}" r="0.9"/>`).join('');
    const img = `<div class="fig-img" data-crop="${crop.join(',')}"><div class="fig-clip"><img src="${esc(f.src)}" alt="${esc(f.titre || '')}" loading="lazy" onerror="this.closest('figure').classList.add('missing')"></div><svg class="fig-lines" viewBox="0 0 100 100" preserveAspectRatio="none">${lines}</svg>${labels}</div>`;
    let pair = '';
    if (f.type === 'echo' && f.pair) { const sc = (p.scenes || []).find(x => x.id === f.pair); if (sc) pair = `<div class="fig-pair">${safeScene(sc)}</div>`; }
    return `<figure class="fig fig-${esc(f.type || 'anatomie')}${pair ? ' has-pair' : ''}">${pair ? '<div class="fig-side">' : ''}${img}${pair}${pair ? '</div>' : ''}<figcaption>${f.titre ? `<b>${inline(f.titre)}</b> ` : ''}${inline(f.legende || '')}${f.credit ? `<span class="credit">${inline(f.credit)}${f.source ? ` · <a href="${esc(f.source)}" target="_blank" rel="noopener">source</a>` : ''}</span>` : ''}</figcaption></figure>`;
  }
  function figuresHtml(p, types) {
    const list = (E.figures[p.id] || []).filter(f => types.includes(f.type || 'anatomie'));
    return list.length ? `<div class="figs">${list.map(f => figHtml(f, p)).join('')}</div>` : '';
  }
  function applyCrops() {
    document.querySelectorAll('.fig-img').forEach(el => {
      const c = (el.dataset.crop || '0,0,1,1').split(',').map(Number), img = el.querySelector('img');
      const fit = () => {
        if (!img.naturalWidth) return;
        const w = img.naturalWidth * c[2], h = img.naturalHeight * c[3];
        el.style.aspectRatio = `${w} / ${h}`;
        img.style.width = `${100 / c[2]}%`; img.style.height = `${100 / c[3]}%`;
        img.style.left = `${-c[0] / c[2] * 100}%`; img.style.top = `${-c[1] / c[3] * 100}%`;
      };
      if (img.complete) fit(); else img.addEventListener('load', fit);
    });
  }
  function demoHtml(p) {
    const yt = (p.videos || []).map(v => (v.url || '').match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]{6,})/)).find(Boolean);
    const exts = (E.videosLocales || {})[p.id] || [];
    const local = exts.length ? `<video class="demo" controls loop playsinline preload="metadata">${exts.includes('mp4') ? `<source src="video/${esc(p.id)}.mp4" type="video/mp4">` : ''}${exts.includes('webm') ? `<source src="video/${esc(p.id)}.webm" type="video/webm">` : ''}</video>` : `<div class="demo-missing">Vidéo non encore générée pour cette fiche (<code>node scripts/video.js ${esc(p.id)}</code>).</div>`;
    return `<div class="demo-wrap card"><h3>Le geste en 40 secondes (schémas animés${exts.length ? '' : ''})</h3>${local}</div>` +
      (yt ? `<div class="card" style="margin-top:12px"><h3>Démonstration réelle (YouTube, en ligne)</h3><div class="yt"><iframe src="https://www.youtube-nocookie.com/embed/${esc(yt[1])}" title="Démonstration" loading="lazy" allowfullscreen referrerpolicy="no-referrer"></iframe></div></div>` : '');
  }

  function renderFiche(p) {
    const parts = []; let n = 0;
    const N = () => String(++n).padStart(2, '0');
    const nav = [];
    const push = (id, titre, inner) => { const h = sec(id, titre, inner, N()); if (h) { parts.push(h); nav.push([id, titre]); } else n--; };

    const overview = card(
      (p.indications ? `<h3>Indications</h3>${md(p.indications)}` : '') +
      (p.contreIndications ? `<h3>Contre-indications et précautions</h3>${md(p.contreIndications)}` : '') +
      (p.alternatives ? `<h3>Alternatives / place dans la stratégie</h3>${md(p.alternatives)}` : '')
    );
    push('vue', 'Vue d\'ensemble', overview);
    push('anatomie', 'Anatomie utile', (p.anatomie ? card(`<div class="prose">${md(p.anatomie)}</div>`) : '') + figuresHtml(p, ['anatomie']));
    if (p.installation) {
      const i = p.installation;
      push('installation', 'Installation', `<div class="grid2">${card(`<h3>Patient</h3><div class="prose">${md(i.patient)}</div>`)}${card(`<h3>Opérateur, écran, sonde</h3><div class="prose">${md(i.operateur)}${i.sonde ? `<h3>Réglages échographiques</h3>${md(i.sonde)}` : ''}</div>`)}</div>` + figuresHtml(p, ['installation']));
    }
    push('reperage', 'Repérage échographique', (p.reperage ? card(steps(p.reperage)) : '') + scenesHtml(p, 'reperage'));
    if (p.sonoanatomie && p.sonoanatomie.length) {
      const t = `<div class="tbl"><table><tr><th>Structure</th><th>Aspect échographique</th><th>Repère</th></tr>${p.sonoanatomie.map(s => `<tr><td><b>${inline(s.structure)}</b></td><td>${inline(s.aspect)}</td><td>${inline(s.repere || '')}</td></tr>`).join('')}</table></div>`;
      push('sonoanatomie', 'Sono-anatomie', card(t) + figuresHtml(p, ['echo']) + scenesHtml(p, 'sonoanatomie'));
    } else if ((p.scenes || []).some(s => s.section === 'sonoanatomie')) push('sonoanatomie', 'Sono-anatomie', scenesHtml(p, 'sonoanatomie'));
    push('technique', 'Technique du geste', (p.technique ? card(steps(p.technique)) : '') + scenesHtml(p, 'technique'));
    push('injectat', 'Injectat', p.injectat ? card(`<div class="prose">${md(p.injectat)}</div>`) : '');
    push('variantes', 'Variantes et gestes associés', p.variantes && p.variantes.length ? p.variantes.map(v => card(`<h3>${inline(v.titre)}</h3><div class="prose">${md(v.texte)}</div>`)).join('') : '');
    push('pieges', 'Pearls & pièges', (p.pearls || p.pieges) ? `<div class="grid2">${p.pearls ? callout('Pearls', md(p.pearls), 'ok') : ''}${p.pieges ? callout('Pièges', md(p.pieges), 'warn') : ''}</div>` : '');
    push('securite', 'Complications et sécurité', (p.complications || p.securite) ? `${p.complications ? callout('Complications', md(p.complications), 'danger') : ''}${p.securite ? callout('Sécurité spécifique', md(p.securite)) : ''}` : '');
    push('suivi', 'Suivi et évaluation', p.suivi ? card(`<div class="prose">${md(p.suivi)}</div>`) : '');
    push('preuve', 'Niveau de preuve', p.evidence ? card(`<div class="prose">${md(p.evidence)}</div>`) : '');
    push('cotation', 'Cotation', p.ccam ? callout('CCAM — à vérifier sur ameli.fr avant facturation', md(p.ccam), '') : '');
    const nUnv = (p.references || []).filter(r => r.verif === false).length;
    push('references', 'Références', p.references && p.references.length ? (nUnv ? callout('Sourçage', `${nUnv} référence${nUnv > 1 ? 's' : ''} sur ${p.references.length} ${nUnv > 1 ? 'sont citées' : 'est citée'} de mémoire (marquées « à vérifier ») : existence probable, mais revue, année ou DOI non confirmés par une recherche. À confirmer avant citation.`, 'warn') : '') + card(refsHtml(p.references)) : '');
    push('demo', 'Vidéo de démonstration', demoHtml(p));
    push('videos', 'Vidéos (liens externes)', videosHtml(p.videos));
    push('checklist', 'Checklist avant le geste', card(checklistHtml(p)));

    const types = (p.types || []).map(t => `<span class="tag t-${t}">${esc((E.types[t] || {}).court || t)}</span>`).join('');
    const head = `<div class="fiche-head"><div class="tags">${types}${p.niveau ? `<span class="tag">Niveau ${p.niveau} · ${esc(E.niveaux[p.niveau] || '')}</span>` : ''}${p.grade ? `<span class="tag grade">Preuve : ${esc(p.grade)}</span>` : ''}${p.maj ? `<span class="tag">Révisé ${esc(p.maj)}</span>` : ''}</div><h1>${inline(p.titre)}</h1>${p.en ? `<div class="en">${inline(p.en)}</div>` : ''}${p.resume ? `<div class="resume">${inline(p.resume)}</div>` : ''}${flash(p)}</div>`;
    const subnav = `<nav class="subnav">${nav.map(x => `<a href="#/fiche/${p.id}/${x[0]}">${x[1]}</a>`).join('')}</nav>`;
    $('#content').innerHTML = head + subnav + parts.join('');
    $('#crumbs').innerHTML = `<a href="#/">Écho-algologie</a> › <a href="#/region/${p.region}">${esc((E.regions.find(r => r.id === p.region) || {}).nom || p.region)}</a> › <b>${esc(p.titreCourt || p.titre)}</b>`;
    document.title = `${p.titreCourt || p.titre} — Écho-algologie`;
    bindScenes(); applyCrops();
  }

  function bindScenes() {
    document.querySelectorAll('.scene-wrap .replay').forEach(b => b.addEventListener('click', () => {
      const body = b.closest('.scene-wrap').querySelector('.scene-body');
      const html = body.innerHTML; body.innerHTML = ''; void body.offsetWidth; body.innerHTML = html;
    }));
    document.querySelectorAll('.check input').forEach(c => c.addEventListener('change', () => c.closest('li').classList.toggle('done', c.checked)));
  }

  function renderHome(regionId) {
    const map = byRegion();
    const regions = regionId ? E.regions.filter(r => r.id === regionId) : E.regions;
    const total = Object.keys(E.procedures).length, planned = E.manifest.length;
    const missing = E.manifest.filter(id => !E.procedures[id]);
    let html = `<div class="home">`;
    if (!regionId) {
      html += `<h1>Écho-algologie</h1><p class="lead">Mémo privé de révision des gestes d'algologie sous échographie : infiltrations articulaires et péri-tendineuses, blocs nerveux, gestes interventionnels (radiofréquence pulsée, cryoneurolyse, hydrodissection, barbotage). Hors radioscopie et neuromodulation. Chaque fiche suit le même plan : installation, repérage, sono-anatomie schématisée et animée, technique pas à pas, injectat, sécurité, preuve, références.</p>
      <div class="stat"><div><b>${total}</b>fiches rédigées</div><div><b>${planned}</b>fiches au plan</div><div><b>${Object.values(E.procedures).reduce((a, p) => a + (p.scenes || []).length, 0)}</b>schémas animés</div><div><b>${Object.values(E.procedures).reduce((a, p) => a + (p.references || []).length, 0)}</b>références</div><div><b>${Object.values(E.procedures).reduce((a, p) => a + (p.references || []).filter(r => r.verif === false).length, 0)}</b>références à vérifier</div></div>
      <div class="callout warn" style="margin-top:18px"><div class="t">Usage</div>Document personnel de révision, non destiné à la diffusion. Les schémas sont des représentations schématiques de la sono-anatomie (pas des images réelles) ; les posologies et les références sont à confronter aux RCP et aux textes cités avant tout geste. Les liens vidéo pointent vers des ressources externes.</div>`;
    } else {
      const r = regions[0]; html += `<h1>${esc(r.nom)}</h1>`;
    }
    regions.forEach(r => {
      const list = (map[r.id] || []).filter(p => !p.missing);
      if (!list.length && !regionId) return;
      html += `<h2 style="margin-top:26px;font-family:var(--serif);font-weight:600">${esc(r.nom)} <small style="color:var(--muted);font-size:13px;font-family:var(--sans)">${list.length} fiche${list.length > 1 ? 's' : ''}</small></h2><div class="tiles">`;
      list.forEach(p => { html += `<a class="tile" href="#/fiche/${p.id}"><b>${esc(p.titreCourt || p.titre)}</b><small>${esc(p.en || '')}</small><div class="tags" style="margin-top:6px">${(p.types || []).map(t => `<span class="tag t-${t}">${esc((E.types[t] || {}).court || t)}</span>`).join('')}${p.niveau ? `<span class="tag">N${p.niveau}</span>` : ''}</div></a>`; });
      html += `</div>`;
    });
    if (!regionId && missing.length) html += `<p class="missing-list" style="margin-top:24px">Au plan, non encore rédigées : ${missing.map(esc).join(' · ')}</p>`;
    html += `</div>`;
    $('#content').innerHTML = html;
    $('#crumbs').innerHTML = regionId ? `<a href="#/">Écho-algologie</a> › <b>${esc((regions[0] || {}).nom || '')}</b>` : `<b>Écho-algologie</b>`;
    document.title = 'Écho-algologie — mémo des gestes sous échographie';
  }

  /* ---------- routage ---------- */
  function currentId() { const m = location.hash.match(/^#\/fiche\/([^/]+)/); return m ? m[1] : null; }
  function route() {
    const h = location.hash || '#/';
    let m;
    if ((m = h.match(/^#\/fiche\/([^/]+)(?:\/([^/]+))?/))) {
      const p = E.procedures[m[1]];
      if (p) { renderFiche(p); if (m[2]) { const el = document.getElementById(m[2]); if (el) el.scrollIntoView({ block: 'start' }); } else window.scrollTo(0, 0); }
      else { $('#content').innerHTML = `<div class="empty"><h2>Fiche « ${esc(m[1])} » non encore rédigée</h2><p>Elle figure au plan mais son fichier n'est pas encore présent.</p></div>`; }
    } else if ((m = h.match(/^#\/region\/([^/]+)/))) { renderHome(m[1]); window.scrollTo(0, 0); }
    else { renderHome(); }
    renderNav();
  }

  function applyTheme() {
    const t = state.theme;
    if (t) document.documentElement.setAttribute('data-theme', t); else document.documentElement.removeAttribute('data-theme');
    const dark = t === 'dark' || (!t && matchMedia('(prefers-color-scheme: dark)').matches);
    if (!t) document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    $('#themeBtn').textContent = dark ? '☀︎ Clair' : '☾ Sombre';
  }
  function applyQuiz() { document.body.classList.toggle('quiz', state.quiz); $('#quizBtn').classList.toggle('on', state.quiz); }

  window.addEventListener('hashchange', route);
  document.addEventListener('DOMContentLoaded', () => {
    $('#q').addEventListener('input', e => { state.q = e.target.value.trim(); renderNav(); });
    document.querySelectorAll('.filters button').forEach(b => b.addEventListener('click', () => { state.type = b.dataset.type === 'all' ? null : b.dataset.type; renderNav(); }));
    $('#themeBtn').addEventListener('click', () => { const dark = document.documentElement.getAttribute('data-theme') === 'dark'; state.theme = dark ? 'light' : 'dark'; try { localStorage.setItem('echo-theme', state.theme); } catch (e) {} applyTheme(); });
    $('#quizBtn').addEventListener('click', () => { state.quiz = !state.quiz; try { localStorage.setItem('echo-quiz', state.quiz ? '1' : '0'); } catch (e) {} applyQuiz(); });
    $('#printBtn').addEventListener('click', () => window.print());
    applyTheme(); applyQuiz(); route();
  });
})(window.ECHO);
