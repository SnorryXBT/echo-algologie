/* Mini-Markdown : paragraphes, listes, gras, italique, code, liens, titres ###, tableaux simples. */
window.ECHO = window.ECHO || {};
(function (E) {
  const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  function inline(t) {
    t = esc(t);
    t = t.replace(/`([^`]+)`/g, '<code>$1</code>');
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/(^|[^*])\*([^*\n]+)\*(?!\*)/g, '$1<em>$2</em>');
    t = t.replace(/\[([^\]]+)\]\((https?:[^)\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    t = t.replace(/→/g, '<span class="arr">→</span>');
    return t;
  }
  E.md = function (src) {
    if (src == null) return '';
    if (Array.isArray(src)) return '<ul>' + src.map(x => '<li>' + inline(x) + '</li>').join('') + '</ul>';
    const lines = String(src).replace(/\r/g, '').split('\n');
    const out = []; let para = [], list = null, table = null;
    const flushP = () => { if (para.length) { out.push('<p>' + inline(para.join(' ')) + '</p>'); para = []; } };
    const flushL = () => { if (list) { out.push(`<${list.t}>` + list.items.map(i => '<li>' + inline(i) + '</li>').join('') + `</${list.t}>`); list = null; } };
    const flushT = () => {
      if (!table) return;
      const rows = table.filter(r => !/^\s*\|?\s*:?-{2,}/.test(r));
      const cells = r => r.replace(/^\s*\|/, '').replace(/\|\s*$/, '').split('|').map(c => inline(c.trim()));
      let h = '<div class="tbl"><table>';
      rows.forEach((r, i) => { const cs = cells(r); h += '<tr>' + cs.map(c => (i === 0 ? '<th>' : '<td>') + c + (i === 0 ? '</th>' : '</td>')).join('') + '</tr>'; });
      out.push(h + '</table></div>'); table = null;
    };
    for (let raw of lines) {
      const l = raw.replace(/\s+$/, '');
      const ls = l.replace(/^\s+/, '');
      if (!ls) { flushP(); flushL(); flushT(); continue; }
      if (/^\|/.test(ls)) { flushP(); flushL(); (table = table || []).push(ls); continue; }
      flushT();
      const h = ls.match(/^(#{1,4})\s+(.*)$/);
      if (h) { flushP(); flushL(); const n = Math.min(6, h[1].length + 2); out.push(`<h${n}>${inline(h[2])}</h${n}>`); continue; }
      const ul = ls.match(/^[-•]\s+(.*)$/), ol = ls.match(/^\d+[.)]\s+(.*)$/);
      if (ul || ol) {
        flushP();
        const t = ul ? 'ul' : 'ol';
        if (!list || list.t !== t) { flushL(); list = { t, items: [] }; }
        list.items.push((ul || ol)[1]); continue;
      }
      if (list && /^\s{2,}/.test(l)) { list.items[list.items.length - 1] += ' ' + ls; continue; }
      flushL(); para.push(ls);
    }
    flushP(); flushL(); flushT();
    return out.join('\n');
  };
  E.inline = inline;
  E.esc = esc;
})(window.ECHO);
