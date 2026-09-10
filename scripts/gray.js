/* Planches de Gray (1918) depuis Wikimedia Commons.
   Lister :      node scripts/gray.js --info 808 809 810
   Télécharger : node scripts/gray.js <id-fiche> 810 811   → img/<id-fiche>/gray-0810.png
   Affiche pour chaque planche : taille, description Commons (à lire avant d'étiqueter). */
const fs = require('fs'), path = require('path');
const UA = 'echo-algologie/1.0 (memo prive; matabou@gmail.com)';
const args = process.argv.slice(2);
const info = args[0] === '--info';
const id = info ? null : args.shift();
const plates = args.filter(a => /^\d+$/.test(a));
if (!plates.length) { console.error('usage: node scripts/gray.js [--info | <id-fiche>] <planche...>'); process.exit(1); }
const titles = plates.map(p => `File:Gray${p}.png`).join('|');
const url = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(titles)}&prop=imageinfo&iiprop=url|size|extmetadata&format=json`;
(async () => {
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  const j = await res.json();
  for (const pg of Object.values(j.query.pages)) {
    const num = (pg.title.match(/Gray(\d+)/) || [])[1];
    if (!pg.imageinfo) { console.log(`Gray${num}: ABSENT sur Commons`); continue; }
    const ii = pg.imageinfo[0];
    const desc = (ii.extmetadata?.ImageDescription?.value || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
    console.log(`Gray${num}: ${ii.width}x${ii.height} — ${desc.slice(0, 300)}`);
    if (!info) {
      const dir = path.join(__dirname, '..', 'img', id); fs.mkdirSync(dir, { recursive: true });
      const out = path.join(dir, `gray-${num.padStart(4, '0')}.png`);
      const r = await fetch(ii.url.split('?')[0], { headers: { 'User-Agent': UA } });
      fs.writeFileSync(out, Buffer.from(await r.arrayBuffer()));
      console.log(`  → ${path.relative(process.cwd(), out)} (${fs.statSync(out).size} o) — source https://commons.wikimedia.org/wiki/File:Gray${num}.png`);
    }
  }
})();
