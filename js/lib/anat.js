/* Coupe anatomique recalée sur une image échographique réelle (données : js/data/anat/<id>.js).
   Les contours sont tracés dans le repère de l'image affichée (spec.vb, après crop) ; le même tracé
   sert au calque de validation (mode 'contours'), au rendu tissulaire et au fondu sur l'écho.
   Format des structures et méthode : .claude/skills/echo-anatomie/SKILL.md. */
(function (root) {
  let uid = 0;
  const TISSUS = {
    peau:      { nom: 'Peau', trait: '#f4c9a8' },
    graisse:   { nom: 'Graisse', trait: '#f2c94c' },
    muscle:    { nom: 'Muscle', trait: '#ef6b5b' },
    tendon:    { nom: 'Tendon', trait: '#f5f5f0' },
    bourse:    { nom: 'Bourse', trait: '#5cc8ff' },
    cartilage: { nom: 'Cartilage', trait: '#9ad7f0' },
    os:        { nom: 'Os', trait: '#f3deb0' },
    nerf:      { nom: 'Nerf', trait: '#ffe14d' },
    artere:    { nom: 'Artère', trait: '#ff4d4d' },
    veine:     { nom: 'Veine', trait: '#5a7dff' },
    ligament:  { nom: 'Ligament', trait: '#e8d9b0' },
    fascia:    { nom: 'Fascia', trait: '#ffffff' },
    plevre:    { nom: 'Plèvre', trait: '#ffd9ec' },
    poumon:    { nom: 'Poumon', trait: '#f0a8b8' },
    glande:    { nom: 'Glande', trait: '#e79a7a' },
    disque:    { nom: 'Disque', trait: '#9db7c9' },
    liquide:   { nom: 'Liquide', trait: '#39b7ff' },
    conjonctif:{ nom: 'Tissu conjonctif', trait: '#e9c7b5' },
    aiguille:  { nom: 'Aiguille', trait: '#7fe0ff' },
  };

  /* ---------- géométrie ---------- */
  const r1 = n => Math.round(n * 10) / 10;
  function smooth(pts, move) {            // Catmull-Rom → Bézier
    if (pts.length < 2) return '';
    let d = (move === false ? 'L' : 'M') + r1(pts[0][0]) + ' ' + r1(pts[0][1]);
    for (let i = 0; i < pts.length - 1; i++) {
      const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
      d += ' C' + r1(p1[0] + (p2[0] - p0[0]) / 6) + ' ' + r1(p1[1] + (p2[1] - p0[1]) / 6) + ' ' +
        r1(p2[0] - (p3[0] - p1[0]) / 6) + ' ' + r1(p2[1] - (p3[1] - p1[1]) / 6) + ' ' + r1(p2[0]) + ' ' + r1(p2[1]);
    }
    return d;
  }
  function resample(pts, m) {             // m points équidistants le long de la polyligne
    const L = [0];
    for (let i = 1; i < pts.length; i++) L.push(L[i - 1] + Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]));
    const tot = L[L.length - 1], out = [];
    for (let k = 0, i = 0; k < m; k++) {
      const s = tot * k / (m - 1);
      while (i < L.length - 2 && L[i + 1] < s) i++;
      const t = (s - L[i]) / ((L[i + 1] - L[i]) || 1);
      out.push([pts[i][0] + (pts[i + 1][0] - pts[i][0]) * t, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * t]);
    }
    return out;
  }
  function offset(pts, ep) {              // décale vers le « haut » (normale gauche d'un tracé gauche → droite)
    return pts.map((p, i) => {
      const a = pts[i - 1] || p, b = pts[i + 1] || p;
      const tx = b[0] - a[0], ty = b[1] - a[1], n = Math.hypot(tx, ty) || 1;
      return [p[0] + ty / n * ep, p[1] - tx / n * ep];
    });
  }
  function bords(s, H) {                  // → { haut, bas } ou { contour } normalisés
    if (s.cortex) return { haut: s.cortex, bas: [[s.cortex[0][0], H + 40], [s.cortex[s.cortex.length - 1][0], H + 40]], os: true };
    if (s.ligne) return { haut: offset(s.ligne, (s.ep || 4) / 2), bas: offset(s.ligne, -(s.ep || 4) / 2) };
    if (s.bas && s.ep) {              // bande d'épaisseur constante posée sur `bas` ; extrémités effilées (cartilage, périoste)
      const n = s.bas.length, k = i => Math.min(1, (Math.min(i, n - 1 - i) + 0.25) / 1.5);
      return { haut: s.bas.map((p, i) => offset(s.bas, s.ep * k(i))[i]), bas: s.bas };
    }
    if (s.haut && s.bas) return { haut: s.haut, bas: s.bas };
    return { contour: s.contour };
  }
  function pathOf(b) {
    if (b.contour) return smooth(b.contour.concat([b.contour[0]])) + 'Z';
    if (b.os) return smooth(b.haut) + ' L' + b.bas[1].join(' ') + ' L' + b.bas[0].join(' ') + 'Z';
    return smooth(b.haut) + ' ' + smooth(b.bas.slice().reverse(), false) + 'Z';
  }
  function fibres(b, pas, amp, seed, enth, guide) {   // courbes interpolées entre bord haut et bord bas (ou guide lissé, fibres alors prolongées puis rognées)
    if (!b.haut || b.os) return [];
    const m = 36, A = resample(b.haut, m), B = resample(guide || b.bas, m);
    let ep = 0; for (let i = 0; i < m; i++) ep += Math.hypot(A[i][0] - B[i][0], A[i][1] - B[i][1]); ep /= m;
    const n = Math.max(2, Math.round(ep / pas)), out = [], kmax = guide ? Math.round(n * 2.2) : n;
    let r = seed || 7; const rnd = () => (r = (r * 16807) % 2147483647) / 2147483647 - 0.5;
    for (let k = 1; k < kmax; k++) {
      const t = k / n + rnd() * 0.35 / n, pts = [];
      for (let i = 0; i < m; i++) {
        let tt = t;
        if (enth) {                       // enthèse : chaque fibre plonge vers l'os, les profondes s'insérant le plus loin du bec
          const u = i / (m - 1), u0 = enth * t; if (u < u0) continue;
          const w = Math.max(0, 1 - (u - u0) / 0.14); tt = t + (1 - t) * w * w * (3 - 2 * w);
        }
        pts.push([A[i][0] + (B[i][0] - A[i][0]) * tt, A[i][1] + (B[i][1] - A[i][1]) * tt + rnd() * amp]);
      }
      if (pts.length > 1) out.push(smooth(pts));
    }
    return out;
  }

  /* ---------- peinture des tissus ---------- */
  function defs(id, W, H) {
    const box = `filterUnits="userSpaceOnUse" x="0" y="0" width="${W}" height="${H}"`;
    const blots = (name, freq, seed, rgb, k, c) => `<filter id="${id}-${name}" ${box}><feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="2" seed="${seed}" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 ${rgb[0]}  0 0 0 0 ${rgb[1]}  0 0 0 0 ${rgb[2]}  0 0 0 ${k} ${c}" result="b"/><feComposite in="b" in2="SourceGraphic" operator="in" result="bb"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="bb"/></feMerge></filter>`;
    return `<defs>
      ${blots('spong', '0.085 0.095', 4, [0.86, 0.66, 0.58], 6, -2.95)}
      ${blots('lob', '0.045 0.06', 9, [0.98, 0.88, 0.58], 3.2, -1.35)}
      ${blots('chair', '0.012 0.09', 2, [0.45, 0.10, 0.09], 5, -2.6)}
      ${blots('alv', '0.07 0.07', 6, [0.98, 0.86, 0.88], 6, -2.7)}
      ${blots('grain', '0.22 0.22', 8, [0.80, 0.45, 0.33], 4, -1.9)}
      <pattern id="${id}-tpa" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(24)"><rect width="7" height="7" fill="#ece9e1"/><circle cx="2" cy="2" r="1.3" fill="#b9b4a8"/><circle cx="5.5" cy="5.5" r="1.3" fill="#ffffff"/></pattern>
      <pattern id="${id}-mpa" width="16" height="14" patternUnits="userSpaceOnUse" patternTransform="rotate(-12)"><rect width="16" height="14" fill="#8e2f27"/><ellipse cx="4.5" cy="3.5" rx="4" ry="3" fill="#b8493d"/><ellipse cx="12.5" cy="10.5" rx="4" ry="3" fill="#b8493d"/></pattern>
      <pattern id="${id}-fasc" width="10" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(18)"><rect width="10" height="9" fill="#d9a521"/><circle cx="3" cy="2.5" r="2.6" fill="#f7e27a"/><circle cx="8" cy="7" r="2.6" fill="#f7e27a"/></pattern>
      ${blots('soie', '0.008 0.12', 5, [0.72, 0.70, 0.66], 5, -2.6)}
      <filter id="${id}-main" ${box}><feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3"/><feDisplacementMap in="SourceGraphic" scale="5"/></filter>
      <linearGradient id="${id}-fond" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0a0a0c" stop-opacity="0"/><stop offset=".78" stop-color="#0a0a0c" stop-opacity="0"/><stop offset="1" stop-color="#0a0a0c" stop-opacity=".92"/></linearGradient>
      <radialGradient id="${id}-coin" cx="1" cy="1" r=".55"><stop offset="0" stop-color="#0a0a0c" stop-opacity=".95"/><stop offset=".55" stop-color="#0a0a0c" stop-opacity=".6"/><stop offset="1" stop-color="#0a0a0c" stop-opacity="0"/></radialGradient>
      <marker id="${id}-fl" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 Z" fill="#d97706"/></marker>
    </defs>`;
  }
  function peindre(s, b, id) {
    const d = pathOf(b), g = [];
    const lignes = (arr, c1, c2, w, o) => arr.map((p, i) => `<path d="${p}" fill="none" stroke="${i % 2 ? c1 : c2}" stroke-width="${w}" opacity="${o}" stroke-linecap="round"/>`).join('');
    switch (s.tissu) {
      case 'peau':
        g.push(`<path d="${d}" fill="#e9b798"/><path d="${smooth(b.haut)}" fill="none" stroke="#c98d6f" stroke-width="5"/>`); break;
      case 'graisse':
        g.push(`<path d="${d}" fill="#e3b341" filter="url(#${id}-lob)"/>${lignes(fibres(b, 34, 10, 11), '#fff6d8', '#fff6d8', 2, 0.75)}`); break;
      case 'muscle':
        if (b.contour) { g.push(`<path d="${d}" fill="url(#${id}-mpa)" stroke="#eee3d6" stroke-width="3"/>`); break; }   // petit axe : faisceaux vus en bout
        g.push(`<clipPath id="${id}-cp-${s.id}"><path d="${d}"/></clipPath><path d="${d}" fill="#a8392f" filter="url(#${id}-chair)"/><g clip-path="url(#${id}-cp-${s.id})">${lignes(fibres(b, 9, 1.6, 5, 0, s.guide), '#cf6a5c', '#7a221d', 1.5, 0.6)}</g><path d="${smooth(b.haut)}" fill="none" stroke="#eee3d6" stroke-width="4" opacity=".95"/>`); break;
      case 'tendon':
        if (b.contour) { g.push(`<path d="${d}" fill="url(#${id}-tpa)" stroke="#8d897f" stroke-width="2"/>`); break; }    // petit axe : fibres vues en bout
        g.push(`<path d="${d}" fill="#ece9e1" filter="url(#${id}-soie)"/>${lignes(fibres(b, 5.5, 1.2, 3, s.enthese), '#ffffff', '#a9a498', 1.3, 0.8)}<path d="${d}" fill="none" stroke="#8d897f" stroke-width="1.5"/>`); break;
      case 'bourse': {   // complexe graisse péribursale + lame bursale ; `lame: [f0, f1]` = position de la lame, en fraction de l'épaisseur depuis le bord bas
        const A = resample(b.haut, 36), B = resample(b.bas, 36), f = s.lame || [0.28, 0.72];
        const mix = t => B.map((q, i) => [q[0] + (A[i][0] - q[0]) * t, q[1] + (A[i][1] - q[1]) * t]);
        /* graisse péribursale : feuillet fibro-adipeux pâle, strié dans l'axe — volontairement distinct des lobules de la graisse sous-cutanée ;
           lame bursale bleue bordée de sa synoviale rosée */
        g.push(`<path d="${d}" fill="#f3e2b3" stroke="#c9a65e" stroke-width="1.2"/>${lignes(fibres(b, 7, 1.4, 23), '#dcbd78', '#fff6dc', 1.3, 0.85)}<path d="${pathOf({ haut: mix(f[1]), bas: mix(f[0]) })}" fill="#4f9fd0" stroke="#c9747a" stroke-width="1.8" paint-order="stroke"/>`); break;
      }
      case 'cartilage':
        g.push(`<path d="${d}" fill="#a9cfe0" stroke="#6d9db3" stroke-width="1.2"/>`); break;
      case 'os':
        if (b.contour) { g.push(`<path d="${d}" fill="#b5473e" filter="url(#${id}-spong)"/><path d="${d}" fill="none" stroke="#a88a58" stroke-width="12"/><path d="${d}" fill="none" stroke="#ead7ae" stroke-width="8.5"/>`); break; }   // petit os entier (pisiforme, sésamoïde)
        g.push(`<path d="${d}" fill="#b5473e" filter="url(#${id}-spong)"/><path d="${smooth(b.haut)}" fill="none" stroke="#a88a58" stroke-width="13" stroke-linecap="round"/><path d="${smooth(b.haut)}" fill="none" stroke="#ead7ae" stroke-width="9.5" stroke-linecap="round"/>`); break;
      case 'nerf':     // petit axe : fascicules en nid d'abeille ; grand axe (haut/bas) : fibres jaunes
        g.push(b.contour ? `<path d="${d}" fill="url(#${id}-fasc)" stroke="#a87c10" stroke-width="2.5"/>`
          : `<path d="${d}" fill="#ecc94b" stroke="#a87c10" stroke-width="2"/>${lignes(fibres(b, 5, 0.8, 13), '#fff3b0', '#b8901a', 1.2, 0.8)}`); break;
      case 'artere':   // paroi musculaire épaisse, lumière ronde
        g.push(`<path d="${d}" fill="#8f1414" stroke="#e05a4f" stroke-width="5" paint-order="stroke"/><path d="${d}" fill="#c41f1f" stroke="#5e0c0c" stroke-width="1"/>`); break;
      case 'veine':    // paroi fine
        g.push(`<path d="${d}" fill="#2c4aa8" stroke="#7d97e8" stroke-width="2.5" paint-order="stroke"/>`); break;
      case 'ligament':
        g.push(`<path d="${d}" fill="#dccfa6" filter="url(#${id}-soie)"/>${lignes(fibres(b, 5, 1, 17, s.enthese), '#f6eccb', '#9c8f66', 1.2, 0.8)}<path d="${d}" fill="none" stroke="#857a55" stroke-width="1.3"/>`); break;
      case 'fascia':
        g.push(`<path d="${d}" fill="#f1ebe0" stroke="#b9b0a0" stroke-width="0.8"/>`); break;
      case 'plevre':
        g.push(`<path d="${d}" fill="#f6d3e0" stroke="#b56f8c" stroke-width="1"/>`); break;
      case 'poumon':
        g.push(`<path d="${d}" fill="#d98a9b" filter="url(#${id}-alv)"/>`); break;
      case 'glande':
        g.push(`<path d="${d}" fill="#c9745a" filter="url(#${id}-grain)"/><path d="${d}" fill="none" stroke="#8a4632" stroke-width="1.5"/>`); break;
      case 'disque':
        g.push(`<path d="${d}" fill="#9db7c9"/>${lignes(fibres(b, 7, 1, 19), '#c9dbe6', '#6f8da1', 1.2, 0.8)}<path d="${d}" fill="none" stroke="#5f7d91" stroke-width="1.3"/>`); break;
      case 'liquide':
        g.push(`<path d="${d}" fill="#2f9fe0" opacity=".9" stroke="#1d6fa3" stroke-width="1.2"/>`); break;
      case 'aiguille':   // `ligne` du point d'entrée à la pointe, ep ≈ 5
        g.push(`<path d="${d}" fill="#dfe4ea" stroke="#4b5563" stroke-width="1.4"/><path d="${smooth(s.ligne)}" fill="none" stroke="#ffffff" stroke-width="1" opacity=".9"/>`); break;
      case 'conjonctif':
        g.push(`<path d="${d}" fill="#e3bfae" filter="url(#${id}-lob)"/>`); break;
      default:
        g.push(`<path d="${d}" fill="#777"/>`);
    }
    return `<g class="anat-s" data-s="${s.id}">${g.join('')}</g>`;
  }

  /* ---------- assemblage ---------- */
  function coucheAnat(spec, id, W, H) {
    return `<g filter="url(#${id}-main)"><rect width="${W}" height="${H}" fill="#4a1c17"/>${spec.structures.map(s => peindre(s, bords(s, H), id)).join('')}</g><rect width="${W}" height="${H}" fill="url(#${id}-fond)" pointer-events="none"/><rect width="${W}" height="${H}" fill="url(#${id}-coin)" pointer-events="none"/>`;
  }
  function coucheContours(spec, H, visible) {
    return spec.structures.map(s => {
      const b = bords(s, H), c = (TISSUS[s.tissu] || {}).trait || '#fff';
      const d = b.os ? smooth(b.haut) : pathOf(b), cls = `anat-c${visible ? ' on' : ''}`;
      /* sans signal écho (dessiné par connaissance anatomique) : pointillé. Corticale : `vu: [i0, i1]` = segment réellement vu */
      if (s.vu) return `<path class="${cls} ex" data-s="${s.id}" d="${d}" style="--c:${c}" ${b.os ? 'fill="none"' : ''}/><path class="${cls}" data-s="${s.id}" d="${smooth((s.cortex || s.contour).slice(s.vu[0], s.vu[1] + 1))}" style="--c:${c}" fill="none"/>`;
      return `<path class="${cls}${s.extrapole ? ' ex' : ''}" data-s="${s.id}" d="${d}" style="--c:${c}" ${b.os ? 'fill="none"' : ''}/>`;
    }).join('');
  }
  function etiquettes(spec, id, vue, W, large) {
    const H = spec.vb[1], fs = large ? Math.min(W / 58, H / 30) : Math.min(W / 40, H / 21);   // panneau large (calque) ou demi-largeur (paire) : ≈ 12–13 px à l'écran
    return (spec.labels || []).filter(l => !l.vue || l.vue === vue).map(l => {
      const tx = l.x + (l.dx || 0), ty = l.y + (l.dy || 0);
      return `<g class="anat-l" data-s="${l.s || ''}"><line x1="${tx}" y1="${ty}" x2="${l.x}" y2="${l.y}" marker-end="url(#${id}-fl)"/><g class="anat-pill" data-x="${tx}" data-y="${ty}"><rect rx="${fs * 0.4}"/><text x="${tx}" y="${ty}" font-size="${fs}" text-anchor="middle" dominant-baseline="central">${l.text}</text></g></g>`;
    }).join('');
  }
  function orient(spec) {                 // dans le titre du panneau : jamais masquée par une pastille
    const o = spec.orient || {};
    return o.left && o.right ? `<span class="anat-o">← ${o.left} · ${o.right} →</span>` : '';
  }
  function panneau(spec, id, vue, W, H) {
    const c = spec.crop || [0, 0, 1, 1];
    const img = `<image href="${spec.src}" x="${-c[0] / c[2] * W}" y="${-c[1] / c[3] * H}" width="${W / c[2]}" height="${H / c[3]}" preserveAspectRatio="none"/>`;
    const corps = vue === 'anat' ? coucheAnat(spec, id, W, H)
      : vue === 'contours' ? img + coucheContours(spec, H, true)
      : img + `<g class="anat-fondu" style="opacity:0">${coucheAnat(spec, id + 'f', W, H)}</g>` + coucheContours(spec, H, false);
    const extra = vue === 'anat' ? coucheContours(spec, H, false) : '';
    return `<svg class="anat-svg" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">${defs(id, W, H)}${vue === 'echo' ? defs(id + 'f', W, H) : ''}${corps}${extra}${etiquettes(spec, id, vue === 'contours' ? 'echo' : vue, W, vue === 'contours')}</svg>`;
  }
  const CSS = `.anat{display:grid;gap:10px}.anat.paire{grid-template-columns:1fr 1fr}@media(max-width:900px){.anat.paire{grid-template-columns:1fr}}
.anat-p{position:relative;margin:0}.anat-p h4{margin:0 0 4px;font:600 13px var(--sans,system-ui);color:var(--muted,#6b7280)}.anat-svg{display:block;width:100%;border-radius:10px;background:#0a0a0c}
.anat-l line{stroke:#d97706;stroke-width:2.2}.anat-pill rect{fill:rgba(255,255,255,.94);stroke:#d97706;stroke-width:1.4}.anat-pill text{font-family:system-ui,sans-serif;font-weight:600;fill:#1f2937}
.anat-l{cursor:default}.anat-o{float:right;font-weight:700;letter-spacing:.04em;text-transform:uppercase;font-size:11.5px}
.anat-c{fill:var(--c);fill-opacity:0;stroke:var(--c);stroke-opacity:0;stroke-width:3;transition:all .15s;pointer-events:all}
.anat-c.ex{stroke-dasharray:9 7}.quiz .anat-l{opacity:0;transition:opacity .25s}.quiz .anat-p:hover .anat-l{opacity:1}
.anat-c.on{stroke-opacity:.95;fill-opacity:.10;stroke-width:2.5}.anat-c.hl{stroke-opacity:1;fill-opacity:.28;stroke-width:4}
.anat-bar{grid-column:1/-1;display:flex;align-items:center;gap:10px;font:13px var(--sans,system-ui);color:var(--muted,#6b7280)}.anat-bar input{flex:1;max-width:340px}`;

  function render(el, spec, opts) {
    opts = opts || {};
    const [W, H] = spec.vb, id = 'anat' + (++uid), mode = opts.mode || 'paire';
    if (!document.getElementById('anat-css')) { const st = document.createElement('style'); st.id = 'anat-css'; st.textContent = CSS; document.head.appendChild(st); }
    el.classList.add('anat'); el.classList.toggle('paire', mode === 'paire');
    el.innerHTML = mode === 'contours'
      ? `<figure class="anat-p"><h4>Calque de validation — contours proposés ${orient(spec)}</h4>${panneau(spec, id, 'contours', W, H)}</figure>`
      : `<figure class="anat-p"><h4>Échographie ${orient(spec)}</h4>${panneau(spec, id + 'e', 'echo', W, H)}</figure><figure class="anat-p"><h4>Coupe anatomique correspondante ${orient(spec)}</h4>${panneau(spec, id + 'a', 'anat', W, H)}</figure><label class="anat-bar">Fondu de l'anatomie sur l'écho <input type="range" min="0" max="100" value="${opts.fondu || 0}"></label>`;
    /* pastilles : le rectangle épouse le texte mesuré */
    el.querySelectorAll('.anat-pill').forEach(p => {
      const t = p.querySelector('text'), r = p.querySelector('rect'), bb = t.getBBox(), px = bb.height * 0.45, py = bb.height * 0.22;
      const W0 = spec.vb[0], H0 = spec.vb[1];
      const sx = Math.max(6 - (bb.x - px), 0) + Math.min(W0 - 6 - (bb.x + bb.width + px), 0), sy = Math.max(6 - (bb.y - py), 0) + Math.min(H0 - 6 - (bb.y + bb.height + py), 0);
      if (sx || sy) { t.setAttribute('x', +t.getAttribute('x') + sx); t.setAttribute('y', +t.getAttribute('y') + sy); bb.x += sx; bb.y += sy; const ln = p.parentNode.querySelector('line'); ln.setAttribute('x1', +ln.getAttribute('x1') + sx); ln.setAttribute('y1', +ln.getAttribute('y1') + sy); }
      r.setAttribute('x', bb.x - px); r.setAttribute('y', bb.y - py); r.setAttribute('width', bb.width + 2 * px); r.setAttribute('height', bb.height + 2 * py);
    });
    const hl = (s, on) => s && el.querySelectorAll(`.anat-c[data-s="${s}"]`).forEach(n => n.classList.toggle('hl', on));
    el.querySelectorAll('[data-s]').forEach(n => { n.addEventListener('mouseenter', () => hl(n.dataset.s, true)); n.addEventListener('mouseleave', () => hl(n.dataset.s, false)); });
    const range = el.querySelector('input[type=range]'), fondu = el.querySelector('.anat-fondu');
    if (range) { const maj = () => { fondu.style.opacity = range.value / 100; }; range.addEventListener('input', maj); maj(); }
  }
  root.ANAT = { render, TISSUS };
})(window);
