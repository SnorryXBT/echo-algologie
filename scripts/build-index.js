/* Regénère index.html avec une balise <script> par fiche présente dans js/data/procedures.
   Usage : node scripts/build-index.js  (à relancer après ajout d'une fiche). */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const dir = path.join(root, 'js/data/procedures');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.js')).sort();
const tags = files.map(f => `  <script src="js/data/procedures/${f}"></script>`).join('\n');
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
    <div class="side-foot">Schémas = représentations schématiques animées de la sono-anatomie. Vérifier posologies et références avant tout geste.</div>
  </aside>
  <main>
    <div class="topbar"><div class="crumbs" id="crumbs"></div><div class="spacer"></div><button id="quizBtn" title="Masquer les étiquettes des schémas (survol pour révéler)">🎓 Mode quiz</button><button id="themeBtn">☾ Sombre</button><button id="printBtn">⎙ Imprimer</button></div>
    <div class="content" id="content"></div>
  </main>
</div>
</body>
</html>
`;
fs.writeFileSync(path.join(root, 'index.html'), html);
console.log(`index.html régénéré — ${files.length} fiche(s) : ${files.map(f => f.replace('.js', '')).join(', ')}`);
