/* Regénère index.html avec une balise <script> par fichier de données (fiches gestes, figures, coupes anatomiques,
   fiches MSK). Usage : node scripts/build-index.js  (à relancer après ajout d'un fichier de données). */
const fs = require('fs'), path = require('path');
const DATA = ['procedures', 'figures', 'anat', 'msk'];
const listJs = dir => fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort() : [];
function buildHtml(root) {
  const files = Object.fromEntries(DATA.map(d => [d, listJs(path.join(root, 'js/data', d))]));
  const tags = DATA.flatMap(d => files[d].map(f => `  <script src="js/data/${d}/${f}"></script>`)).join('\n');
  const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Écho-algologie — mémo des gestes sous échographie</title>
  <meta name="robots" content="noindex,nofollow">
  <link rel="stylesheet" href="css/app.css">
  <script src="js/data/registry.js"></script>
  <script src="js/lib/md.js"></script>
  <script src="js/lib/icons.js"></script>
  <script src="js/lib/scene.js"></script>
  <script src="js/lib/anat.js"></script>
  <script src="js/lib/msk.js"></script>
${tags}
  <script src="js/app.js" defer></script>
</head>
<body>
<div class="app">
  <aside class="sidebar">
    <div class="brand"><div class="logo">ÉA</div><div><h1>Écho-algologie</h1><small>Mémo privé — gestes échoguidés</small></div></div>
    <div class="search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg><input id="q" type="search" placeholder="Rechercher un geste, une indication…" autocomplete="off"></div>
    <div class="filters"><button data-type="all" class="on">Tout</button><button data-type="infiltration">Infiltrations</button><button data-type="bloc">Blocs</button><button data-type="interventionnel">Interventionnel</button></div>
    <nav id="nav" class="nav"></nav>
    <div class="side-foot">Schémas = représentations schématiques animées de la sono-anatomie. Vérifier posologies et références avant tout geste.<br><a href="#/validation">Validation des coupes anatomiques</a></div>
  </aside>
  <main>
    <div class="topbar"><div class="crumbs" id="crumbs"></div><div class="spacer"></div><button id="foldBtn" title="Déplier ou replier toutes les sections de la fiche">⤢ Tout déplier</button><button id="quizBtn" title="Masquer les étiquettes des schémas (survol pour révéler)">🎓 Mode quiz</button><button id="themeBtn">☾ Sombre</button><button id="printBtn">⎙ Imprimer</button></div>
    <button id="toTop" title="Remonter en haut de la page" aria-label="Remonter en haut de la page">↑</button>
    <div class="content" id="content"></div>
  </main>
</div>
</body>
</html>
`;
  return { html, counts: Object.fromEntries(DATA.map(d => [d, files[d].length])) };
}
if (require.main === module) {
  const root = path.join(__dirname, '..');
  const { html, counts } = buildHtml(root);
  fs.writeFileSync(path.join(root, 'index.html'), html);
  console.log(`index.html régénéré — ${counts.procedures} fiche(s), ${counts.figures} fichier(s) de figures, ${counts.anat} de coupes anatomiques, ${counts.msk} fiche(s) MSK`);
}
module.exports = { buildHtml };
