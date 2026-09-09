/* Moteur de scènes échographiques schématiques (SVG inline, animé).
   Usage dans une fiche :  scenes: [{ id, titre, legende, build: (S) => { ... } }]
   Toutes les coordonnées sont en unités du viewBox (par défaut 640 × 420).
   Convention : le haut de l'image = la peau, sous la sonde. */
window.ECHO = window.ECHO || {};
(function (E) {
  const esc = s => String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const pts = a => a.map(p => p.join(',')).join(' ');
  let uid = 0;

  function Scene(opts) {
    this.w = (opts && opts.w) || 640;
    this.h = (opts && opts.h) || 420;
    this.depthCm = (opts && opts.depth) || 4;
    this.items = [];          // couches anatomiques (ordre = ordre d'appel)
    this.labels = [];         // étiquettes (rendues au-dessus)
    this.overlay = [];        // aiguille, diffusion (rendues en dernier)
    this.orientation = null;  // { left, right }
    this.probe = null;
    this.title = null;
    this.timeline = { needle: 1.6, spread: 1.4 };
    this.id = 'sc' + (++uid);
    this.imgTop = 42;         // hauteur réservée à la sonde
  }

  const P = Scene.prototype;

  P.size = function (w, h) { this.w = w; this.h = h; return this; };
  P.depth = function (cm) { this.depthCm = cm; return this; };
  P.orient = function (o) { this.orientation = o; return this; };   // {left:'Latéral', right:'Médial'}
  P.probeInfo = function (o) { this.probe = o; return this; };       // {type:'lineaire', plan:'transverse', marker:'left'}
  P.caption = function (t) { this.title = t; return this; };

  /* ---- couches anatomiques ---- */
  P.skin = function (o) { this.items.push({ k: 'skin', ...(o || {}) }); return this; };
  P.muscle = function (o) { this.items.push({ k: 'muscle', ...o }); return this; };
  P.fat = function (o) { this.items.push({ k: 'fat', ...o }); return this; };
  P.bone = function (o) { this.items.push({ k: 'bone', ...o }); return this; };
  P.cartilage = function (o) { this.items.push({ k: 'cartilage', ...o }); return this; };
  P.fascia = function (o) { this.items.push({ k: 'fascia', ...o }); return this; };
  P.ligament = function (o) { this.items.push({ k: 'ligament', ...o }); return this; };
  P.tendon = function (o) { this.items.push({ k: 'tendon', ...o }); return this; };
  P.nerve = function (o) { this.items.push({ k: 'nerve', ...o }); return this; };
  P.artery = function (o) { this.items.push({ k: 'artery', ...o }); return this; };
  P.vein = function (o) { this.items.push({ k: 'vein', ...o }); return this; };
  P.fluid = function (o) { this.items.push({ k: 'fluid', ...o }); return this; };
  P.pleura = function (o) { this.items.push({ k: 'pleura', ...o }); return this; };
  P.lung = function (o) { this.items.push({ k: 'lung', ...o }); return this; };
  P.bowel = function (o) { this.items.push({ k: 'bowel', ...o }); return this; };
  P.organ = function (o) { this.items.push({ k: 'organ', ...o }); return this; };
  P.region = function (o) { this.items.push({ k: 'region', ...o }); return this; };  // zone libre (path + fill)
  P.target = function (o) { this.items.push({ k: 'target', ...o }); return this; };  // cible (cercle pointillé)
  P.label = function (o) { this.labels.push(o); return this; };                      // {x,y,text,anchor,dx,dy,lead:[x,y]}
  P.arrow = function (o) { this.labels.push({ ...o, arrow: true }); return this; };  // {from:[x,y], to:[x,y], text}
  P.needle = function (o) { this.overlay.push({ k: 'needle', ...o }); return this; };  // {from:[x,y], to:[x,y], label, delay}
  P.spread = function (o) { this.overlay.push({ k: 'spread', ...o }); return this; };  // {x,y,rx,ry,delay,label}
  P.spreadPath = function (o) { this.overlay.push({ k: 'spreadPath', ...o }); return this; }; // {path, delay}

  /* ---- rendu ---- */
  function shapeAttrs(o) {
    if (o.path) return `<path d="${esc(o.path)}"`;
    if (o.points) return `<polygon points="${esc(pts(o.points))}"`;
    if (o.rect) { const r = o.rect; return `<rect x="${r[0]}" y="${r[1]}" width="${r[2]}" height="${r[3]}"`; }
    if (o.x != null && o.y != null) return `<ellipse cx="${o.x}" cy="${o.y}" rx="${o.rx || o.r || 10}" ry="${o.ry || o.r || 10}"`;
    return '<path d=""';
  }
  function lineAttrs(o) {
    if (o.path) return `<path d="${esc(o.path)}"`;
    if (o.points) return `<polyline points="${esc(pts(o.points))}"`;
    return '<path d=""';
  }
  function autoLabel(s, o, cls) {
    if (!o.label) return;
    let x = o.lx, y = o.ly;
    if (x == null) { x = o.x != null ? o.x : (o.at ? o.at[0] : null); }
    if (y == null) { y = o.y != null ? o.y : (o.at ? o.at[1] : null); }
    if (x == null) return;
    s.labels.push({ x: x, y: y, text: o.label, anchor: o.anchor || 'middle', dy: o.ldy != null ? o.ldy : 4, dx: o.ldx || 0, cls: cls, lead: o.lead, small: o.small });
  }

  P.render = function () {
    const s = this, id = s.id, W = s.w, H = s.h, top = s.imgTop;
    const out = [];
    const imgH = H - top;
    out.push(`<svg class="us-scene" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${esc(s.title || 'Schéma échographique')}">`);
    out.push(`<defs>
      <radialGradient id="${id}-bg" cx="50%" cy="0%" r="110%"><stop offset="0" stop-color="#2b3138"/><stop offset="0.55" stop-color="#151a20"/><stop offset="1" stop-color="#07090c"/></radialGradient>
      <linearGradient id="${id}-shadow" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#000" stop-opacity="0.92"/><stop offset="1" stop-color="#000" stop-opacity="0.35"/></linearGradient>
      <linearGradient id="${id}-boneg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#cfd6dd"/></linearGradient>
      <filter id="${id}-speckle" x="0" y="0" width="100%" height="100%"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0.75  0 0 0 0 0.78  0 0 0 0 0.82  0 0 0 0.55 0"/></filter>
      <filter id="${id}-glow" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      <filter id="${id}-soft" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur stdDeviation="1.2"/></filter>
      <pattern id="${id}-muscle" width="26" height="9" patternUnits="userSpaceOnUse" patternTransform="rotate(-8)"><path d="M0 4.5 h14" stroke="#cfd5da" stroke-opacity="0.32" stroke-width="1.3" stroke-linecap="round"/></pattern>
      <pattern id="${id}-tendon" width="14" height="4" patternUnits="userSpaceOnUse"><path d="M0 2 h14" stroke="#f2f4f6" stroke-opacity="0.75" stroke-width="1.4"/></pattern>
      <pattern id="${id}-nerve" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="3.5" cy="3.5" r="2.4" fill="#0d1115"/><circle cx="3.5" cy="3.5" r="2.9" fill="none" stroke="#e8edf2" stroke-opacity="0.9" stroke-width="1"/></pattern>
      <pattern id="${id}-fat" width="12" height="8" patternUnits="userSpaceOnUse"><path d="M0 4 q3 -3 6 0 t6 0" fill="none" stroke="#dfe5ea" stroke-opacity="0.35" stroke-width="1"/></pattern>
      <pattern id="${id}-cart" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="0.9" fill="#9aa5ae" fill-opacity="0.5"/></pattern>
      <pattern id="${id}-organ" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1.4" fill="#c9d0d6" fill-opacity="0.35"/></pattern>
      <clipPath id="${id}-clip"><rect x="0" y="${top}" width="${W}" height="${imgH}"/></clipPath>
      <marker id="${id}-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#ffd166"/></marker>
    </defs>`);

    /* sonde */
    const probeW = W * 0.86, probeX = (W - probeW) / 2;
    out.push(`<g class="us-probe"><rect x="${probeX}" y="6" width="${probeW}" height="22" rx="6" fill="#3a4148" stroke="#8b949e" stroke-width="1.5"/>`);
    out.push(`<rect x="${probeX + 4}" y="24" width="${probeW - 8}" height="6" rx="2" fill="#9aa4ae"/>`);
    const markerLeft = !(s.probe && s.probe.marker === 'right');
    out.push(`<circle cx="${markerLeft ? probeX + 14 : probeX + probeW - 14}" cy="17" r="5" fill="#ffd166"/>`);
    if (s.probe && s.probe.plan) out.push(`<text x="${W / 2}" y="21" text-anchor="middle" class="us-probe-text">${esc(s.probe.plan)}${s.probe.type ? ' · ' + esc(s.probe.type) : ''}</text>`);
    out.push(`</g>`);

    /* image */
    out.push(`<rect x="0" y="${top}" width="${W}" height="${imgH}" rx="10" fill="url(#${id}-bg)"/>`);
    out.push(`<rect x="0" y="${top}" width="${W}" height="${imgH}" rx="10" fill="#000" filter="url(#${id}-speckle)" opacity="0.28"/>`);
    out.push(`<g clip-path="url(#${id}-clip)">`);

    for (const o of s.items) {
      const cls = `us-${o.k}` + (o.cls ? ' ' + o.cls : '');
      switch (o.k) {
        case 'skin': {
          const y = o.y != null ? o.y : top + 6;
          out.push(`<rect x="0" y="${top}" width="${W}" height="${(o.thickness || 8)}" fill="#e9eef2" opacity="0.85"/>`);
          out.push(`<rect x="0" y="${top + (o.thickness || 8)}" width="${W}" height="${o.fatBelow || 0}" fill="url(#${id}-fat)"/>`);
          if (o.fatBelow) out.push(`<rect x="0" y="${top + (o.thickness || 8)}" width="${W}" height="${o.fatBelow}" fill="#0a0d10" opacity="0.15"/>`);
          break;
        }
        case 'fat':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#1a1f25"/>`);
          out.push(`${shapeAttrs(o)} fill="url(#${id}-fat)"/>`);
          autoLabel(s, o, 'lbl-fat'); break;
        case 'muscle':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#3b434b" fill-opacity="${o.opacity != null ? o.opacity : 0.55}" stroke="#aab3bb" stroke-opacity="0.55" stroke-width="1.2"/>`);
          out.push(`${shapeAttrs(o)} fill="url(#${id}-muscle)" opacity="0.9"/>`);
          autoLabel(s, o, 'lbl-muscle'); break;
        case 'organ':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#59636c" fill-opacity="0.6" stroke="#c3cbd2" stroke-opacity="0.6" stroke-width="1.2"/>`);
          out.push(`${shapeAttrs(o)} fill="url(#${id}-organ)"/>`);
          autoLabel(s, o, 'lbl-organ'); break;
        case 'bowel':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#c7ced4" fill-opacity="0.55" stroke="#f0f3f5" stroke-width="1.5"/>`);
          autoLabel(s, o, 'lbl-organ'); break;
        case 'region':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="${o.fill || '#5c666f'}" fill-opacity="${o.opacity != null ? o.opacity : 0.35}" stroke="${o.stroke || 'none'}" stroke-width="1"/>`);
          autoLabel(s, o, 'lbl-region'); break;
        case 'cartilage':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#101418" stroke="#9aa5ae" stroke-opacity="0.5" stroke-width="1"/>`);
          out.push(`${shapeAttrs(o)} fill="url(#${id}-cart)"/>`);
          autoLabel(s, o, 'lbl-cart'); break;
        case 'bone': {
          /* ligne cortex hyperéchogène + cône d'ombre sous la ligne */
          if (o.path || o.points) {
            const d = o.path || ('M' + o.points.map(p => p.join(' ')).join(' L '));
            if (o.shadow !== false) {
              /* ombre : on ferme le chemin vers le bas de l'image */
              const first = o.points ? o.points[0] : parseFirst(d), last = o.points ? o.points[o.points.length - 1] : parseLast(d);
              out.push(`<path d="${esc(d)} L ${last[0]} ${H + 40} L ${first[0]} ${H + 40} Z" fill="url(#${id}-shadow)"/>`);
            }
            out.push(`<path d="${esc(d)}" class="${cls}" fill="none" stroke="url(#${id}-boneg)" stroke-width="${o.width || 4}" stroke-linecap="round" stroke-linejoin="round" filter="url(#${id}-glow)"/>`);
          } else {
            out.push(`${shapeAttrs(o)} class="${cls}" fill="#0b0e11" stroke="#fff" stroke-width="3" filter="url(#${id}-glow)"/>`);
          }
          autoLabel(s, o, 'lbl-bone'); break;
        }
        case 'fascia':
          out.push(`${lineAttrs(o)} class="${cls}" fill="none" stroke="#f4f6f8" stroke-opacity="${o.opacity != null ? o.opacity : 0.9}" stroke-width="${o.width || 2}" stroke-linecap="round" filter="url(#${id}-glow)"/>`);
          autoLabel(s, o, 'lbl-fascia'); break;
        case 'ligament':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#c9d1d8" fill-opacity="0.55" stroke="#eef1f4" stroke-width="1.2"/>`);
          out.push(`${shapeAttrs(o)} fill="url(#${id}-tendon)" opacity="0.6"/>`);
          autoLabel(s, o, 'lbl-lig'); break;
        case 'tendon':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#9aa4ad" fill-opacity="0.75" stroke="#f0f3f5" stroke-width="1.2"/>`);
          out.push(`${shapeAttrs(o)} fill="url(#${id}-tendon)"/>`);
          autoLabel(s, o, 'lbl-tendon'); break;
        case 'nerve':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="url(#${id}-nerve)" stroke="#ffe08a" stroke-width="2"/>`);
          out.push(`${shapeAttrs(o)} fill="none" stroke="#fff" stroke-opacity="0.45" stroke-width="0.8"/>`);
          autoLabel(s, o, 'lbl-nerve'); break;
        case 'artery':
          out.push(`${shapeAttrs(o)} class="${cls} us-pulse" fill="#05070a" stroke="#ff5a5f" stroke-width="2.4"/>`);
          autoLabel(s, o, 'lbl-artery'); break;
        case 'vein':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#05070a" stroke="#5aa9ff" stroke-width="2.2"/>`);
          autoLabel(s, o, 'lbl-vein'); break;
        case 'fluid':
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#020304" stroke="#3a4550" stroke-width="0.8"/>`);
          autoLabel(s, o, 'lbl-fluid'); break;
        case 'pleura':
          out.push(`${lineAttrs(o)} class="${cls} us-slide" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" filter="url(#${id}-glow)"/>`);
          autoLabel(s, o, 'lbl-pleura'); break;
        case 'lung': {
          /* poumon : gris sombre granuleux + lignes A (réverbérations horizontales de la plèvre) */
          out.push(`${shapeAttrs(o)} class="${cls}" fill="#141a20"/>`);
          out.push(`${shapeAttrs(o)} fill="#000" filter="url(#${id}-speckle)" opacity="0.45"/>`);
          const bb = bbox(o);
          if (bb) {
            const cid = id + '-lc' + (++uid);
            out.push(`<clipPath id="${cid}">${shapeAttrs(o)}/></clipPath><g clip-path="url(#${cid})">`);
            for (let y = bb.y + 28; y < bb.y + bb.h; y += 28) out.push(`<line x1="${bb.x}" y1="${y}" x2="${bb.x + bb.w}" y2="${y}" stroke="#e8edf2" stroke-opacity="0.16" stroke-width="2"/>`);
            out.push(`</g>`);
          }
          autoLabel(s, o, 'lbl-lung'); break;
        }
        case 'target':
          out.push(`<circle cx="${o.x}" cy="${o.y}" r="${o.r || 12}" class="us-target" fill="none" stroke="#ffd166" stroke-width="1.6" stroke-dasharray="4 3"/>`);
          autoLabel(s, o, 'lbl-target'); break;
      }
    }

    /* overlay : aiguille + diffusion */
    let tAcc = 0.3;
    for (const o of s.overlay) {
      if (o.k === 'needle') {
        const [x1, y1] = o.from, [x2, y2] = o.to;
        const len = Math.hypot(x2 - x1, y2 - y1);
        const dur = o.dur || s.timeline.needle, delay = o.delay != null ? o.delay : tAcc;
        tAcc = delay + dur;
        out.push(`<g class="us-needle-g">`);
        out.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="us-needle-halo" stroke="#fff" stroke-opacity="0.25" stroke-width="7" stroke-linecap="round" style="stroke-dasharray:${len};stroke-dashoffset:${len};animation:us-draw ${dur}s ${delay}s ease-out forwards"/>`);
        out.push(`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" class="us-needle" stroke="#fff" stroke-width="2.6" stroke-linecap="round" style="stroke-dasharray:${len};stroke-dashoffset:${len};animation:us-draw ${dur}s ${delay}s ease-out forwards"/>`);
        /* réverbération sous l'aiguille */
        const ang = Math.atan2(y2 - y1, x2 - x1);
        for (let i = 1; i <= 2; i++) {
          const off = 7 * i;
          const ox = -Math.sin(ang) * off, oy = Math.cos(ang) * off;
          out.push(`<line x1="${x1 + ox}" y1="${y1 + oy}" x2="${x1 + ox + (x2 - x1) * 0.7}" y2="${y1 + oy + (y2 - y1) * 0.7}" stroke="#fff" stroke-opacity="${0.22 / i}" stroke-width="1.5" stroke-dasharray="6 5" style="opacity:0;animation:us-fade 0.4s ${delay + dur * 0.8}s forwards"/>`);
        }
        out.push(`<circle cx="${x2}" cy="${y2}" r="4" fill="#ffd166" class="us-tip" style="opacity:0;animation:us-fade 0.3s ${delay + dur}s forwards"/>`);
        out.push(`</g>`);
        if (o.label) {
          const lx = Math.min(W - 12, Math.max(12, x1)), ly = Math.max(top + 30, Math.min(H - 10, y1 - 8));
          s.labels.push({ x: lx, y: ly, text: o.label, anchor: x1 < W / 2 ? 'start' : 'end', dy: 0, cls: 'lbl-needle', small: true });
        }
      } else if (o.k === 'spread') {
        const delay = o.delay != null ? o.delay : tAcc, dur = o.dur || s.timeline.spread;
        tAcc = delay + dur;
        out.push(`<ellipse cx="${o.x}" cy="${o.y}" rx="${o.rx || 30}" ry="${o.ry || 16}" class="us-spread" fill="#000" fill-opacity="0.9" stroke="#e5f2ff" stroke-opacity="0.8" stroke-width="1.5" style="transform-origin:${o.x}px ${o.y}px;transform:scale(0);animation:us-bloom ${dur}s ${delay}s cubic-bezier(.2,.8,.3,1) forwards"/>`);
        if (o.label) s.labels.push({ x: o.x, y: o.y, text: o.label, anchor: 'middle', dy: 4, cls: 'lbl-spread', small: true, delay: delay + dur * 0.6 });
      } else if (o.k === 'spreadPath') {
        const delay = o.delay != null ? o.delay : tAcc, dur = o.dur || s.timeline.spread;
        tAcc = delay + dur;
        out.push(`<path d="${esc(o.path)}" class="us-spread" fill="#000" fill-opacity="0.9" stroke="#e5f2ff" stroke-opacity="0.8" stroke-width="1.5" style="opacity:0;animation:us-fade ${dur}s ${delay}s forwards"/>`);
        if (o.label && o.at) s.labels.push({ x: o.at[0], y: o.at[1], text: o.label, anchor: 'middle', dy: 4, cls: 'lbl-spread', small: true, delay: delay + dur * 0.6 });
      }
    }
    out.push(`</g>`); // clip

    /* échelle de profondeur */
    const ticks = Math.max(1, Math.round(s.depthCm));
    for (let i = 0; i <= ticks; i++) {
      const y = top + (imgH * i) / ticks;
      out.push(`<line x1="${W - 10}" y1="${y}" x2="${W - 4}" y2="${y}" stroke="#9aa4ae" stroke-width="1"/>`);
      if (i > 0 && i < ticks) out.push(`<text x="${W - 13}" y="${y + 3.5}" text-anchor="end" class="us-tick">${i}</text>`);
    }
    out.push(`<text x="${W - 4}" y="${H - 6}" text-anchor="end" class="us-tick">${s.depthCm} cm</text>`);

    /* orientation */
    if (s.orientation) {
      out.push(`<text x="8" y="${top + 16}" class="us-orient">${esc(s.orientation.left)}</text>`);
      out.push(`<text x="${W - 22}" y="${top + 16}" text-anchor="end" class="us-orient">${esc(s.orientation.right)}</text>`);
    }

    /* étiquettes */
    out.push(`<g class="us-labels">`);
    for (const l of s.labels) {
      const cls = 'us-label ' + (l.cls || '') + (l.small ? ' small' : '');
      const style = l.delay != null ? ` style="opacity:0;animation:us-fade 0.4s ${l.delay}s forwards"` : '';
      if (l.arrow) {
        out.push(`<line x1="${l.from[0]}" y1="${l.from[1]}" x2="${l.to[0]}" y2="${l.to[1]}" stroke="#ffd166" stroke-width="1.6" marker-end="url(#${id}-ah)"/>`);
        if (l.text) out.push(`<text x="${l.from[0]}" y="${l.from[1] - 6}" text-anchor="${l.anchor || 'middle'}" class="${cls}">${esc(l.text)}</text>`);
        continue;
      }
      if (l.lead) out.push(`<line x1="${l.lead[0]}" y1="${l.lead[1]}" x2="${l.x + (l.dx || 0)}" y2="${l.y + (l.dy || 0) - 4}" stroke="#ffd166" stroke-opacity="0.8" stroke-width="1"/>`);
      const lines = String(l.text).split('\n');
      out.push(`<text x="${l.x + (l.dx || 0)}" y="${l.y + (l.dy || 0)}" text-anchor="${l.anchor || 'middle'}" class="${cls}"${style}>`);
      lines.forEach((t, i) => out.push(`<tspan x="${l.x + (l.dx || 0)}" dy="${i === 0 ? 0 : 13}">${esc(t)}</tspan>`));
      out.push(`</text>`);
    }
    out.push(`</g>`);
    out.push(`</svg>`);
    return out.join('\n');
  };

  function bbox(o) {
    if (o.rect) return { x: o.rect[0], y: o.rect[1], w: o.rect[2], h: o.rect[3] };
    let pts = null;
    if (o.points) pts = o.points;
    else if (o.path) pts = [...String(o.path).matchAll(/(-?[\d.]+)[ ,]+(-?[\d.]+)/g)].map(m => [+m[1], +m[2]]);
    else if (o.x != null) return { x: o.x - (o.rx || o.r || 10), y: o.y - (o.ry || o.r || 10), w: 2 * (o.rx || o.r || 10), h: 2 * (o.ry || o.r || 10) };
    if (!pts || !pts.length) return null;
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    return { x: Math.min(...xs), y: Math.min(...ys), w: Math.max(...xs) - Math.min(...xs), h: Math.max(...ys) - Math.min(...ys) };
  }
  function parseFirst(d) { const m = d.match(/M\s*(-?[\d.]+)[ ,]+(-?[\d.]+)/i); return m ? [+m[1], +m[2]] : [0, 0]; }
  function parseLast(d) { const m = d.match(/(-?[\d.]+)[ ,]+(-?[\d.]+)\s*$/); return m ? [+m[1], +m[2]] : [0, 0]; }

  /* fabrique publique : construit et rend une scène depuis sa définition */
  E.renderScene = function (def) {
    const S = new Scene(def.opts || {});
    if (def.build) def.build(S);
    if (def.titre && !S.title) S.title = def.titre;
    return S.render();
  };
  E.Scene = Scene;
})(window.ECHO);
