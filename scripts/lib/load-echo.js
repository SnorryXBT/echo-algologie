// scripts/lib/load-echo.js
/* Charge registry.js et les données du mémo dans un ECHO Node, sans navigateur (même principe que anat-check.js).
   const { loadEcho } = require('./lib/load-echo');
   const E = loadEcho({ procedures: true, figures: true, anat: true, msk: true, md: true }); */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '../..');
function loadEcho(opts, rootDir) {
  opts = Object.assign({ procedures: false, figures: false, anat: false, msk: false, md: false }, opts || {});
  const base = rootDir || ROOT, g = global;
  g.window = g; delete g.ECHO;
  const run = f => { (0, eval)(fs.readFileSync(f, 'utf8')); };   // eval indirect : portée globale, comme un <script>
  run(path.join(base, 'js/data/registry.js'));
  if (opts.md) run(path.join(base, 'js/lib/md.js'));
  for (const d of ['procedures', 'figures', 'anat', 'msk']) {
    if (!opts[d]) continue;
    const dir = path.join(base, 'js/data', d);
    if (!fs.existsSync(dir)) continue;
    for (const f of fs.readdirSync(dir).filter(x => x.endsWith('.js')).sort()) run(path.join(dir, f));
  }
  return g.ECHO;
}
module.exports = { loadEcho, ROOT };
