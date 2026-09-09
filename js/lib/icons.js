/* Pictogrammes : positions du patient, sondes, approches. Rendus inline (SVG). */
window.ECHO = window.ECHO || {};
(function (E) {
  const wrap = (inner, vb) => `<svg class="ico" viewBox="${vb || '0 0 64 40'}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${inner}</svg>`;
  const table = `<rect x="4" y="30" width="56" height="3" rx="1.5" class="i-table"/>`;
  const head = (cx, cy) => `<circle cx="${cx}" cy="${cy}" r="4.5" class="i-body"/>`;
  E.icons = {
    positions: {
      'dorsal': wrap(`${table}${head(11, 23)}<path d="M16 25 h30 l6 -1 v4 h-36 z" class="i-body"/><path d="M40 21 l8 -6" class="i-line"/>`),
      'ventral': wrap(`${table}${head(11, 24)}<path d="M15 23 h32 l6 1 v4 h-38 z" class="i-body"/><path d="M11 20 v-3" class="i-line"/>`),
      'procubitus': wrap(`${table}${head(11, 24)}<path d="M15 22 h14 q6 -8 14 0 h6 v6 h-34 z" class="i-body"/><rect x="26" y="22" width="12" height="8" rx="2" class="i-accent"/>`),
      'lateral': wrap(`${table}${head(12, 20)}<path d="M17 19 h20 l14 6 v4 h-34 z" class="i-body"/><path d="M36 22 l8 -10" class="i-line"/>`),
      'assis': wrap(`${table}${head(30, 8)}<path d="M26 13 h8 v12 h10 v6 h-18 z" class="i-body"/><path d="M34 19 l9 3" class="i-line"/><path d="M44 25 v6" class="i-line"/>`),
      'semi-assis': wrap(`${table}${head(17, 10)}<path d="M20 14 l14 10 h20 v5 h-36 z" class="i-body"/>`),
    },
    sondes: {
      'lineaire': wrap(`<rect x="14" y="8" width="36" height="14" rx="4" class="i-body"/><rect x="18" y="22" width="28" height="4" class="i-accent"/><path d="M20 30 v6 M26 30 v6 M32 30 v6 M38 30 v6 M44 30 v6" class="i-line"/>`),
      'convexe': wrap(`<path d="M16 8 h32 v10 q-16 12 -32 0 z" class="i-body"/><path d="M18 22 q14 11 28 0" class="i-accent2"/><path d="M14 28 l-3 8 M24 30 l-1 8 M32 31 v8 M40 30 l1 8 M50 28 l3 8" class="i-line"/>`),
      'hockey': wrap(`<rect x="26" y="4" width="10" height="16" rx="3" class="i-body"/><rect x="16" y="20" width="30" height="8" rx="3" class="i-body"/><rect x="18" y="28" width="26" height="3" class="i-accent"/>`),
    },
    approches: {
      'in-plane': wrap(`<rect x="14" y="4" width="36" height="8" rx="3" class="i-body"/><rect x="12" y="14" width="40" height="22" rx="2" class="i-screen"/><path d="M4 16 L34 30" class="i-needle"/><circle cx="34" cy="30" r="2.5" class="i-accent"/>`),
      'out-of-plane': wrap(`<rect x="14" y="4" width="36" height="8" rx="3" class="i-body"/><rect x="12" y="14" width="40" height="22" rx="2" class="i-screen"/><circle cx="32" cy="27" r="3" class="i-needle-dot"/><path d="M32 27 l0 -0.1" class="i-needle"/><path d="M24 10 l8 17" class="i-needle" stroke-dasharray="2 2"/>`),
    },
  };
  E.icon = (group, key) => (E.icons[group] && E.icons[group][key]) || '';
})(window.ECHO);
