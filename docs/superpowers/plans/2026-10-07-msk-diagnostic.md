# Volet « Diagnostic MSK » — plan d'implémentation

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Livrer le socle et le pilote « épaule » du volet diagnostic MSK : fiches de région dans le mémo, paquets Anki générés, audio NotebookLM, trois skills de coaching avec état privé, grille OSAUS.

**Architecture:** Le contenu vit dans le dépôt (`js/data/msk/<region>.js`, rendu par `js/lib/msk.js` via les helpers d'`app.js` exposés dans `ECHO.ui`). Les scripts Node dérivent les cartes (`scripts/lib/msk-cards.js`), rendent les images à marqueurs (Playwright) et exportent `dist/msk/<region>.cards.json`, que `scripts/anki/build.py` (genanki) transforme en `.apkg`. L'état personnel vit hors dépôt dans `~/Claude/Projects/Écho MSK/`, manipulé exclusivement par le CLI `scripts/msk-progress.js` (garde-fou données patient inclus) que les skills de coaching appellent.

**Tech Stack:** HTML/CSS/JS vanilla (file://), Node 22 (`node:test`), Playwright (global, `NODE_PATH=$(npm root -g)`), Python 3.14 + genanki 0.13 (venv `scripts/anki/.venv`), NotebookLM MCP, Avorio (iPhone/Mac).

**Spec:** `docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md`

## Global Constraints

- Site statique sans dépendance d'exécution nouvelle ; tout fonctionne en `file://`.
- Régions, dans cet ordre : `epaule`, `genou`, `rachis`, `coude`, `poignet-main`, `hanche`, `cheville-pied`, `paroi-nerfs`.
- Identifiants de compétence `<region>.<lettre><nn>` ; lettres : `c` coupe, `s` structure, `p` pathologie, `d` dynamique, `a` piège ou artefact, `g` geste.
- Paliers d'état : 0 non vu · 1 vu en théorie · 2 reconnu sur image · 3 trouvé sur patient · 4 dicté en autonomie ; un palier ne redescend jamais.
- Fiche MSK : `valide: false` par défaut ; passe à `true` sur la seule décision de Mat, dans la conversation.
- Images sous `img/msk/` : licence CC BY, CC BY-NC ou CC0 uniquement, jamais ND ni SA ; aucune figure d'ouvrage ni de NYSORA. Les images déjà présentes ailleurs dans `img/` restent sous les règles du mémo.
- **Écart documenté à la spec §5 :** les `marqueurs` sont en fractions [0, 1] de l'image recadrée, comme les `labels` des figures existantes (et non en repère de largeur 1000), pour réutiliser `figHtml` tel quel.
- Aucune donnée patient dans le dépôt ni dans le dossier privé ; `scripts/lib/phi-guard.js` refuse tout identifiant avant écriture.
- Dossier privé : `~/Claude/Projects/Écho MSK/` ; surcharge par la variable `ECHO_MSK_HOME` (tests). Transfert iPhone : iCloud Drive `~/Library/Mobile Documents/com~apple~CloudDocs/Écho MSK/{anki,audio}`.
- Après toute modification du site : `node scripts/build-index.js` puis `NODE_PATH=$(npm root -g) node scripts/check-all.js` → 0 problème ; `NODE_PATH=$(npm root -g) node --test tests/*.test.js` → tout vert (Playwright est global : sans NODE_PATH les tests de rendu échouent) ; `node scripts/audit.js` → `64/64 fiches`, 0 MANQUANTE.
- Commits en français, sans ligne d'attribution ; jamais `git stash` ; avant push : `git fetch origin && git rebase --autostash origin/main`.
- Agents de production : trois au plus par vague ; sourcer avant de rédiger ; coût en quota noté dans `PROCHAINE-SESSION.md`.

## Review Focus

1. Noms de médias Anki en collision entre régions (même `coupe-1-front.png` dans deux paquets) → chaque média est préfixé `msk-<region>-` ; test dans la tâche 7.
2. Réimport d'un paquet régénéré : GUID de notes et identifiants de paquets identiques d'une génération à l'autre, sinon la planification repart de zéro → test « deux builds, mêmes GUID » dans la tâche 8.
3. Garde-fou données patient contourné par la casse ou l'absence d'accent (« MME DUPONT », « nee le 3 mai ») → tests en majuscules et sans accent dans la tâche 9a.
4. Régression de palier par le logbook (« non trouvé » après un palier 3) → test « jamais d'abaissement » dans la tâche 9b.
5. Route d'une région sans fiche (`#/msk/genou`) et lien profond vers une section repliée (`#/msk/epaule/dictee`) : page sans erreur JS, section ouverte → tests Playwright dans la tâche 3.

---

## Structure des fichiers

| Fichier | Rôle |
|---|---|
| `js/data/registry.js` (modif.) | régions MSK, `ECHO.msk`, `ECHO.registerMsk`, `ECHO.mskTypes` |
| `js/data/msk/<region>.js` | une fiche diagnostique par région |
| `js/lib/msk.js` | rendu de `#/msk` et `#/msk/<region>[/<section>]` |
| `js/app.js` (modif.) | `ECHO.ui`, routes MSK, bloc de navigation, `SEC_OPEN`, lien profond |
| `css/app.css` (modif.) | pastille `.dot.msk`, table des compétences |
| `scripts/build-index.js` (modif.) | balises `js/lib/msk.js` et `js/data/msk/*.js` ; fonction `buildHtml` exportée |
| `scripts/check-all.js` (modif.) | contrôle des routes MSK |
| `scripts/lib/load-echo.js` | chargement Node du registre et des données |
| `scripts/lib/msk-audit-rules.js`, `scripts/msk-audit.js` | contrôle statique des fiches MSK |
| `scripts/lib/msk-cards.js` | dérivation pure des cartes (fiche MSK et fiches gestes) |
| `scripts/lib/render-markers.js` | rendu PNG des images à marqueurs |
| `scripts/msk-export.js` | export `dist/msk/<region>.cards.json`, `.json`, `-digest.md`, images |
| `scripts/anki/build.py`, `check.py`, `test_build.py` | paquets `.apkg` et vérification |
| `scripts/lib/phi-guard.js` | détection d'identifiants patient |
| `scripts/msk-progress.js` | CLI d'état privé : init, etat, logbook, plan, bilan, cas, audio |
| `scripts/msk-skills-install.js` | copie des skills globales vers `~/.claude/skills/` |
| `.claude/skills/msk-fiche/`, `msk-anki/`, `msk-audio/` | skills de production (projet) |
| `.claude/skills-global/msk-semaine/`, `msk-cas/`, `msk-logbook/` | skills de coaching (source, installées globalement) |
| `tests/*.test.js`, `tests/fixtures/` | tests Node |

---

### Task 1 : registre MSK et chargeur Node

**Files:**
- Modify: `js/data/registry.js:43-47` (après `E.register`)
- Create: `scripts/lib/load-echo.js`
- Test: `tests/load-echo.test.js`

**Interfaces:**
- Produces: `ECHO.mskRegions` (tableau `{ id, nom }` dans l'ordre du plan), `ECHO.msk` (fiches par id), `ECHO.mskTypes` (`{ coupe:'c', structure:'s', pathologie:'p', dynamique:'d', piege:'a', geste:'g' }`), `ECHO.registerMsk(fiche)` ; `loadEcho(opts, rootDir) → ECHO` avec `opts = { procedures, figures, anat, msk, md }` (booléens).

- [ ] **Step 1 : écrire le test**

```js
// tests/load-echo.test.js
const test = require('node:test');
const assert = require('node:assert');
const { loadEcho } = require('../scripts/lib/load-echo');

test('registre MSK : 8 régions dans l\'ordre du plan, registerMsk vérifie la région', () => {
  const E = loadEcho({});
  assert.deepStrictEqual(E.mskRegions.map(r => r.id), ['epaule', 'genou', 'rachis', 'coude', 'poignet-main', 'hanche', 'cheville-pied', 'paroi-nerfs']);
  assert.deepStrictEqual(E.mskTypes, { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' });
  assert.throws(() => E.registerMsk({ id: 'nez' }), /Région MSK inconnue/);
  assert.throws(() => E.registerMsk({}), /sans id/);
  E.registerMsk({ id: 'genou', titre: 'Genou' });
  assert.strictEqual(E.msk.genou.titre, 'Genou');
});

test('loadEcho charge fiches, figures et md à la demande', () => {
  const E = loadEcho({ procedures: true, figures: true, md: true });
  assert.ok(E.procedures['sous-acromiale'], 'fiche sous-acromiale chargée');
  assert.ok(E.figures['sous-acromiale'].length > 0, 'figures chargées');
  assert.strictEqual(E.inline('**a**'), '<strong>a</strong>');
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `cd ~/Claude/Code/echo-algologie && node --test tests/load-echo.test.js`
Expected: FAIL, `Cannot find module '../scripts/lib/load-echo'`

- [ ] **Step 3 : ajouter le registre MSK**

Dans `js/data/registry.js`, juste après la fonction `E.register` (ligne 47) et avant le commentaire du manifest :

```js
  /* ---------- Volet « Diagnostic MSK » (docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md) ----------
     Une fiche par région dans js/data/msk/<region>.js, enregistrée par ECHO.registerMsk({...}). */
  E.msk = E.msk || {};
  E.mskRegions = [
    { id: 'epaule',        nom: 'Épaule' },
    { id: 'genou',         nom: 'Genou' },
    { id: 'rachis',        nom: 'Rachis' },
    { id: 'coude',         nom: 'Coude' },
    { id: 'poignet-main',  nom: 'Poignet et main' },
    { id: 'hanche',        nom: 'Hanche' },
    { id: 'cheville-pied', nom: 'Cheville et pied' },
    { id: 'paroi-nerfs',   nom: 'Paroi et nerfs périphériques' },
  ];
  /* lettre de l'identifiant de compétence <region>.<lettre><nn> */
  E.mskTypes = { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' };
  E.registerMsk = function (f) {
    if (!f || !f.id) throw new Error('Fiche MSK sans id');
    if (!E.mskRegions.some(r => r.id === f.id)) throw new Error('Région MSK inconnue : ' + f.id);
    E.msk[f.id] = f;
  };
```

- [ ] **Step 4 : écrire le chargeur Node**

```js
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
```

- [ ] **Step 5 : lancer le test, il doit passer**

Run: `node --test tests/load-echo.test.js`
Expected: PASS (2 tests)

- [ ] **Step 6 : vérifier le site et commiter**

Run: `node scripts/build-index.js && NODE_PATH=$(npm root -g) node scripts/check-all.js | tail -1`
Expected: `64 fiches, 0 avec problème`

```bash
git add js/data/registry.js scripts/lib/load-echo.js tests/load-echo.test.js
git commit -m "MSK : registre des régions diagnostiques et chargeur Node des données"
```

---

### Task 2 : build-index inclut le volet MSK

**Files:**
- Modify: `scripts/build-index.js` (réécriture en fonction exportée)
- Test: `tests/build-index.test.js`

**Interfaces:**
- Produces: `buildHtml(root) → { html, counts: { procedures, figures, anat, msk } }` ; `index.html` charge `js/lib/msk.js` après `js/lib/anat.js` et `js/data/msk/*.js` après les coupes anatomiques.

- [ ] **Step 1 : écrire le test**

```js
// tests/build-index.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { buildHtml } = require('../scripts/build-index');

test('buildHtml : balises dans l\'ordre registry, libs, données, app.js ; msk.js et js/data/msk présents', () => {
  const root = fs.mkdtempSync(path.join(os.tmpdir(), 'bi-'));
  for (const d of ['procedures', 'figures', 'anat', 'msk']) fs.mkdirSync(path.join(root, 'js/data', d), { recursive: true });
  fs.writeFileSync(path.join(root, 'js/data/procedures/zz.js'), '');
  fs.writeFileSync(path.join(root, 'js/data/msk/epaule.js'), '');
  const { html, counts } = buildHtml(root);
  assert.deepStrictEqual(counts, { procedures: 1, figures: 0, anat: 0, msk: 1 });
  const pos = s => html.indexOf(s);
  assert.ok(pos('js/data/registry.js') < pos('js/lib/anat.js'), 'registry avant les libs');
  assert.ok(pos('js/lib/anat.js') < pos('js/lib/msk.js'), 'msk.js après anat.js');
  assert.ok(pos('js/lib/msk.js') < pos('js/data/procedures/zz.js'), 'libs avant les données');
  assert.ok(pos('js/data/procedures/zz.js') < pos('js/data/msk/epaule.js'), 'fiches MSK après les fiches gestes');
  assert.ok(pos('js/data/msk/epaule.js') < pos('js/app.js'), 'app.js en dernier');
  assert.ok(html.includes('<a href="#/validation">Validation des coupes anatomiques</a>'), 'pied de colonne inchangé');
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/build-index.test.js`
Expected: FAIL, `buildHtml is not a function`

- [ ] **Step 3 : réécrire build-index.js**

Remplacer tout le fichier par :

```js
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
```

- [ ] **Step 4 : lancer le test, il doit passer**

Run: `node --test tests/build-index.test.js`
Expected: PASS

- [ ] **Step 5 : créer un `js/lib/msk.js` provisoire pour que la page charge sans 404 bruyant**

```js
// js/lib/msk.js (provisoire, remplacé à la tâche 3)
window.ECHO = window.ECHO || {};
(function (E) { E.renderMsk = function () {}; })(window.ECHO);
```

- [ ] **Step 6 : régénérer, contrôler, commiter**

Run: `node scripts/build-index.js && git diff --stat index.html && NODE_PATH=$(npm root -g) node scripts/check-all.js | tail -1`
Expected: `index.html` ne change que d'une ligne (`js/lib/msk.js`) ; `64 fiches, 0 avec problème`

```bash
git add scripts/build-index.js js/lib/msk.js index.html tests/build-index.test.js
git commit -m "build-index : fonction exportée, balises du volet MSK (lib et données)"
```

---

### Task 3 : rendu des fiches MSK, routes, navigation, squelette « épaule »

**Files:**
- Create: `js/lib/msk.js` (remplace le provisoire), `js/data/msk/epaule.js` (squelette du pilote)
- Modify: `js/app.js` (`SEC_OPEN` l. 52, `renderNav` l. 31-46, `bindSections` l. 245, `currentId` l. 295, `route` l. 296-308, exposition `E.ui` après `applyQuiz` l. 316), `css/app.css` (fin de fichier)
- Test: `tests/msk-render.test.js`

**Interfaces:**
- Consumes: `ECHO.mskRegions`, `ECHO.msk` (tâche 1).
- Produces: `ECHO.ui = { sec, card, callout, steps, flash, refsHtml, videosHtml, figHtml, applyCrops, bindSections }` ; `ECHO.renderMsk(regionId?, section?)` ; `ECHO.mskMatches(q, region)` ; routes `#/msk`, `#/msk/<region>`, `#/msk/<region>/<section>` ; sections d'une fiche MSK : `vue`, `protocole`, `sonoanatomie`, `pathologies`, `artefacts`, `dictee`, `competences`, `references`, `videos`. Schéma de fiche : voir le squelette (step 5), qui fait foi avec la spec §5.

- [ ] **Step 1 : écrire le test Playwright**

```js
// tests/msk-render.test.js  — lancer avec NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { chromium } = require('playwright');
const INDEX = 'file://' + path.resolve(__dirname, '../index.html');

async function open(page, hash) {
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  await page.goto(INDEX + hash); await page.waitForTimeout(400);
  return errs;
}
test('volet MSK : index, fiche épaule, région sans fiche, lien profond, navigation', async () => {
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
  let errs = await open(page, '#/msk');
  let r = await page.evaluate(() => ({ h1: document.querySelector('.home h1').textContent, tiles: document.querySelectorAll('.tiles .tile').length, nav: document.querySelectorAll('.nav-msk a[href^="#/msk/"]').length }));
  assert.deepStrictEqual(errs, []); assert.strictEqual(r.h1, 'Diagnostic MSK'); assert.strictEqual(r.tiles, 8); assert.strictEqual(r.nav, 8);

  errs = await open(page, '#/msk/epaule');
  r = await page.evaluate(() => ({ h1: document.querySelector('.fiche-head h1').textContent, banniere: !!document.querySelector('.msk-banniere'), secs: [...document.querySelectorAll('section.sec')].map(s => s.id), labels: document.querySelectorAll('.fig-label').length, active: !!document.querySelector('.nav-msk a.active[href="#/msk/epaule"]'), gestes: document.querySelectorAll('#vue .chips a[href^="#/fiche/"]').length }));
  assert.deepStrictEqual(errs, []); assert.match(r.h1, /Épaule/); assert.ok(r.banniere, 'bannière non validée');
  for (const id of ['vue', 'protocole', 'sonoanatomie', 'pathologies', 'dictee', 'competences', 'references', 'videos']) assert.ok(r.secs.includes(id), 'section ' + id);
  assert.ok(r.labels >= 4, 'marqueurs rendus'); assert.ok(r.active); assert.strictEqual(r.gestes, 7);

  errs = await open(page, '#/msk/epaule/references');
  r = await page.evaluate(() => ({ closed: document.getElementById('references').classList.contains('closed') }));
  assert.deepStrictEqual(errs, []); assert.strictEqual(r.closed, false, 'lien profond : section Références ouverte');

  errs = await open(page, '#/msk/genou');
  r = await page.evaluate(() => (document.querySelector('.empty h2') || {}).textContent || '');
  assert.deepStrictEqual(errs, []); assert.match(r, /non encore rédigée/);
  await browser.close();
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `NODE_PATH=$(npm root -g) node --test tests/msk-render.test.js`
Expected: FAIL (`.home h1` absent sur `#/msk` : le provisoire ne rend rien)

- [ ] **Step 3 : modifier `js/app.js` (six retouches, dans l'ordre du fichier)**

(a) `SEC_OPEN` (l. 52) :
```js
  const SEC_OPEN = ['vue', 'installation', 'reperage', 'sonoanatomie', 'technique', 'injectat', 'securite', 'checklist', 'protocole', 'pathologies', 'dictee'];
```
(b) dans `renderNav()`, juste après `const nav = $('#nav'); let html = '';` :
```js
    /* volet Diagnostic MSK en tête de colonne ; masqué quand un filtre de type de geste est actif */
    const curMsk = currentMsk();
    const mskList = state.type ? [] : (E.mskRegions || []).filter(r => !state.q || E.mskMatches(state.q, r));
    if (mskList.length) {
      html += `<div class="nav-region nav-msk"><h2><a href="#/msk" style="color:inherit">Diagnostic MSK</a><span class="count">${mskList.filter(r => E.msk[r.id]).length}/${mskList.length}</span></h2>`;
      mskList.forEach(r => { const f = E.msk[r.id]; html += `<a href="#/msk/${r.id}" class="${curMsk === r.id ? 'active' : ''} ${f ? '' : 'missing'}"><span class="dot msk"></span><span>${esc(r.nom)}</span>${f && !f.valide ? '<span class="lvl" title="non validée par Mat">à valider</span>' : ''}</a>`; });
      html += '</div>';
    }
```
(c) dans `bindSections()`, la ligne du lien profond devient :
```js
    const deep = (location.hash.match(/^#\/(?:fiche|msk)\/[^/]+\/([^/]+)/) || [])[1];
```
(d) à côté de `currentId()` :
```js
  function currentMsk() { const m = location.hash.match(/^#\/msk\/([^/]+)/); return m ? m[1] : null; }
```
(e) dans `route()`, insérer avant la branche `#/validation` :
```js
    else if ((m = h.match(/^#\/msk(?:\/([^/]+))?(?:\/([^/]+))?/))) { E.renderMsk(m[1], m[2]); if (!m[2]) window.scrollTo(0, 0); }
```
(f) après `function applyQuiz() {...}` :
```js
  /* helpers de mise en page partagés avec js/lib/msk.js (volet diagnostic) */
  E.ui = { sec, card, callout, steps, flash, refsHtml, videosHtml, figHtml, applyCrops, bindSections };
```

- [ ] **Step 4 : écrire `js/lib/msk.js`**

```js
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
```

Ajouter en fin de `css/app.css` :
```css
/* ---- volet Diagnostic MSK ---- */
.dot.msk { background: #7c3aed; }
.tag.t-msk { background: #ede9fe; color: #5b21b6; } :root[data-theme="dark"] .tag.t-msk { background: #2e1065; color: #c4b5fd; }
.muted { color: var(--muted); font-size: 13.5px; }
.card h4 { font-size: 13.5px; margin: 10px 0 4px; }
.msk-banniere { margin-top: 12px; }
```

- [ ] **Step 5 : écrire le squelette `js/data/msk/epaule.js`** (il documente le schéma ; `/msk-fiche epaule` le remplace à la tâche 13)

```js
/* Fiche « Diagnostic MSK » — Épaule. SQUELETTE du pilote : schéma complet, contenu minimal, à remplacer par /msk-fiche epaule.
   Spécification : docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md §5. Marqueurs en fractions de l'image recadrée. */
ECHO.registerMsk({
  id: 'epaule',
  titre: 'Épaule — examen échographique diagnostique',
  en: 'Diagnostic ultrasound of the shoulder',
  maj: '2026-10',
  valide: false,
  motsCles: ['épaule', 'coiffe des rotateurs', 'supra-épineux', 'bourse sous-acromiale', 'long biceps', 'espace quadrilatère', 'ESSR'],
  resume: `Squelette de la fiche pilote. La version complète suivra le guide technique ESSR de l'épaule : protocole en coupes numérotées (long biceps, sous-scapulaire, supra-épineux, infra-épineux et petit rond, articulation acromio-claviculaire, récessus postérieur), sono-anatomie normale avec mesures sourcées, pathologies du niveau 1 EFSUMB filtrées sur la douleur chronique, artefacts, checklist de dictée et carte de compétences.`,
  gestes: ['sous-acromiale', 'long-biceps', 'gleno-humerale', 'acromio-claviculaire', 'nerf-suprascapulaire', 'nerf-axillaire', 'calcifications-coiffe-barbotage'],
  flash: { position: 'assis', positionNote: 'main sur la cuisse homolatérale ; position de Crass modifiée pour dégager le supra-épineux', sonde: 'lineaire', sondeNote: '6–15 MHz, profondeur 3–4 cm', duree: '10–15 min pour le protocole complet' },
  protocole: [
    { n: 1, titre: 'Coupe postérieure, espace quadrilatère (squelette)', position: 'Assis, bras le long du corps ; sonde sagittale sous l\'angle postéro-latéral de l\'acromion', repere: 'Col chirurgical de l\'humérus : ligne osseuse convexe du fond', structures: ['Deltoïde postérieur', 'Petit rond', 'Nerf axillaire et artère circonflexe postérieure', 'Col chirurgical'], dynamique: 'Rotation externe contrariée : le petit rond se contracte en surface du paquet axillaire', pieges: 'Trop haut et trop médial, on voit la glène : redescendre de 2–3 cm',
      image: { src: 'img/nerf-axillaire/echo-1.jpg', crop: [0.09, 0.385, 0.34, 0.25], credit: 'Abril-Serván MJ, García-Sanz F, Cases-Sebastia A et al., Healthcare 2026, fig. 3C', licence: 'CC BY 4.0', source: 'https://doi.org/10.3390/healthcare14111471', legende: 'Sonde sagittale postérieure : deltoïde en surface, paquet axillaire plaqué contre le col chirurgical.',
        marqueurs: [
          { n: 1, x: 0.30, y: 0.22, dx: 0.00, dy: -0.10, label: 'Deltoïde' },
          { n: 2, x: 0.59, y: 0.58, dx: -0.06, dy: -0.30, label: 'Nerf axillaire' },
          { n: 3, x: 0.66, y: 0.55, dx: 0.16, dy: -0.18, label: 'Artère circonflexe postérieure' },
          { n: 4, x: 0.47, y: 0.71, dx: 0.02, dy: 0.16, label: 'Col chirurgical de l\'humérus' },
        ] } },
  ],
  sonoanatomie: [
    { structure: 'Bourse sous-acromio-deltoïdienne', aspect: 'Lame hypo- ou anéchogène entre deux liserés graisseux hyperéchogènes, compressible', mesure: 'épaisseur < 2 mm', source: [0] },
    { structure: 'Tendon du supra-épineux', aspect: 'Bande fibrillaire hyperéchogène convexe, très anisotrope', mesure: '', source: [0] },
  ],
  pathologies: [
    { nom: 'Bursite sous-acromio-deltoïdienne', en: 'Subacromial-subdeltoid bursitis', signes: ['Lame anéchogène > 2 mm, déclive, déplaçable à la pression', 'Épaississement synovial, hyperhémie au Doppler si active'], pieges: 'Le cartilage de la tête humérale, fine bande anéchogène régulière, n\'est pas un épanchement.', conduite: 'Confirmer la douleur à l\'abduction dynamique, puis infiltration bursale échoguidée si le traitement conservateur a échoué.', gestes: ['sous-acromiale'], vignette: 'Douleur latérale d\'épaule à l\'abduction, nocturne, depuis trois mois.' },
  ],
  artefacts: [
    { nom: 'Anisotropie', texte: 'Un tendon vu obliquement devient hypoéchogène et imite une rupture ou un épanchement : basculer la sonde avant de conclure.', question: 'Le supra-épineux paraît hypoéchogène sur la coupe en grand axe : rupture ?', reponse: 'Non sans avoir basculé la sonde : l\'anisotropie efface les fibres vues obliquement. Si l\'hypoéchogénicité persiste perpendiculaire aux fibres, chercher les autres signes de rupture.' },
  ],
  dictee: `Examen échographique de l'épaule droite (sonde linéaire haute fréquence, protocole ESSR).
- Bourse sous-acromio-deltoïdienne fine (< 2 mm), non distendue, sans hyperhémie.
- Tendon du supra-épineux d'échostructure fibrillaire conservée, sans rupture ni calcification.
- Conclusion : examen normal.`,
  competences: [
    { id: 'epaule.c01', type: 'coupe', libelle: 'Obtenir la coupe postérieure de l\'espace quadrilatère et y nommer le paquet axillaire', niveau: 1, sources: [0] },
    { id: 'epaule.s01', type: 'structure', libelle: 'Identifier la bourse sous-acromio-deltoïdienne entre ses deux liserés graisseux', niveau: 1, sources: [0] },
    { id: 'epaule.p01', type: 'pathologie', libelle: 'Reconnaître une bursite sous-acromio-deltoïdienne et la distinguer du cartilage', niveau: 2, sources: [0], patho: 'bursite-sous-acromio-deltoidienne' },
    { id: 'epaule.a01', type: 'piege', libelle: 'Lever une anisotropie du supra-épineux avant de conclure à une rupture', niveau: 1, sources: [0] },
    { id: 'epaule.g01', type: 'geste', libelle: 'Bursite confirmée → fiche sous-acromiale', niveau: 2, sources: [0] },
  ],
  references: [
    { auteurs: 'ESSR, sous-comité échographie', titre: 'Musculoskeletal ultrasound technical guidelines — shoulder', revue: 'European Society of Musculoskeletal Radiology', annee: '2010', url: 'https://essr.org/content-essr/uploads/2016/10/shoulder.pdf', type: 'guide technique', verif: false, note: 'URL vue sur essr.org ; auteurs et titre exacts à confirmer en ouvrant le PDF' },
  ],
  videos: [
    { titre: 'Subacromial Bursa Injection - Ultrasound Scanning Technique', source: 'YouTube', url: 'https://www.youtube.com/watch?v=_rQx6mXq698', note: 'Clarius : balayage de la bourse, 3 min 17 (lien vérifié dans la fiche sous-acromiale)' },
  ],
});
```

- [ ] **Step 6 : régénérer, lancer les tests, contrôler visuellement**

Run: `node scripts/build-index.js && NODE_PATH=$(npm root -g) node --test tests/msk-render.test.js`
Expected: PASS

Run: `NODE_PATH=$(npm root -g) node scripts/shot.js '#/msk/epaule/protocole' /tmp/msk-epaule.png light '.fig' 0 && echo ok`
Lire `/tmp/msk-epaule.png` : les quatre pastilles tombent sur le deltoïde, le nerf, l'artère, le col ; sinon corriger `dx`/`dy`.

Run: `NODE_PATH=$(npm root -g) node scripts/check-all.js | tail -1`
Expected: `64 fiches, 0 avec problème`

- [ ] **Step 7 : commit**

```bash
git add js/lib/msk.js js/app.js css/app.css js/data/msk/epaule.js index.html tests/msk-render.test.js
git commit -m "Volet Diagnostic MSK : rendu des fiches de région, routes #/msk, navigation, squelette épaule"
```

---

### Task 4 : check-all contrôle les routes MSK

**Files:**
- Modify: `scripts/check-all.js:356-374`

- [ ] **Step 1 : insérer la boucle MSK** après la boucle des fiches (avant `console.log(\`\n${ids.length} fiches...`) et remplacer le bilan final :

```js
  const mskDir = path.join(__dirname, '../js/data/msk');
  const msk = fs.existsSync(mskDir) ? fs.readdirSync(mskDir).filter(f => f.endsWith('.js')).map(f => f.replace('.js', '')).sort() : [];
  for (const id of msk) {
    errs.length = 0;
    await page.evaluate(h => { location.hash = h; }, '#/msk/' + id);
    await page.waitForTimeout(150);
    const r = await page.evaluate(() => ({ h1: (document.querySelector('.fiche-head h1') || {}).textContent || '', secs: document.querySelectorAll('section.sec').length, figs: document.querySelectorAll('.fig').length, labels: document.querySelectorAll('.fig-label').length, valide: !document.querySelector('.msk-banniere') }));
    const flag = errs.length || !r.h1 ? ' <<<' : '';
    if (flag) bad++;
    console.log(`MSK ${id.padEnd(48)} sections ${String(r.secs).padStart(2)} figures ${r.figs} marqueurs ${r.labels}${r.valide ? '' : ' (non validée)'}${flag}${errs.length ? '\n   ' + errs.join('\n   ') : ''}`);
  }
  console.log(`\n${ids.length} fiches + ${msk.length} fiche(s) MSK, ${bad} avec problème`);
```

- [ ] **Step 2 : lancer et commiter**

Run: `NODE_PATH=$(npm root -g) node scripts/check-all.js | tail -3`
Expected: une ligne `MSK epaule ... sections  9 figures 1 marqueurs 4 (non validée)` puis `64 fiches + 1 fiche(s) MSK, 0 avec problème`

```bash
git add scripts/check-all.js
git commit -m "check-all : contrôle des routes du volet MSK"
```

---

### Task 5 : audit statique des fiches MSK

**Files:**
- Create: `scripts/lib/slug.js`, `scripts/lib/msk-audit-rules.js`, `scripts/msk-audit.js`
- Test: `tests/msk-audit.test.js`

**Interfaces:**
- Consumes: `loadEcho` (tâche 1), schéma de fiche (tâche 3).
- Produces: `slug(texte) → 'kebab-sans-accent'` ; `auditMsk(fiche, { root, procedures, types }) → string[]` (vide = conforme) ; CLI `node scripts/msk-audit.js [region]`, code de sortie 1 s'il reste une erreur.

- [ ] **Step 1 : écrire le test**

```js
// tests/msk-audit.test.js
const test = require('node:test');
const assert = require('node:assert');
const path = require('path');
const { auditMsk, slug } = require('../scripts/lib/msk-audit-rules');
const { loadEcho, ROOT } = require('../scripts/lib/load-echo');

const fiche = () => ({
  id: 'genou', titre: 'Genou', en: 'Knee', maj: '2026-10', valide: false, motsCles: ['genou'],
  flash: { sonde: 'lineaire' },
  protocole: [{ n: 1, titre: 'Tendon quadricipital', position: 'Dorsal, genou fléchi 30°', repere: 'Patella', structures: ['Tendon quadricipital'],
    image: { src: 'img/nerf-axillaire/echo-1.jpg', credit: 'Abril-Serván et al. 2026', licence: 'CC BY 4.0', marqueurs: [{ n: 1, x: 0.3, y: 0.2, label: 'Deltoïde' }, { n: 2, x: 0.6, y: 0.6, label: 'Nerf' }] } }],
  sonoanatomie: [{ structure: 'Tendon quadricipital', aspect: 'fibrillaire', mesure: 'épaisseur 5–7 mm', source: [0] }],
  pathologies: [{ nom: 'Tendinopathie quadricipitale', signes: ['épaississement'], conduite: 'rééducation', gestes: ['genou-intra-articulaire'] }],
  artefacts: [{ nom: 'Anisotropie', texte: 'basculer la sonde' }],
  dictee: 'Tendon quadricipital de 5–7 mm, fibrillaire.',
  competences: [{ id: 'genou.c01', type: 'coupe', libelle: 'Coupe 1', niveau: 1, sources: [0] }, { id: 'genou.p01', type: 'pathologie', libelle: 'Tendinopathie', niveau: 2, sources: [0], patho: 'tendinopathie-quadricipitale' }],
  references: [{ titre: 'ESSR knee', annee: '2010', url: 'https://essr.org/content-essr/uploads/2016/10/knee.pdf', verif: true }],
  videos: [{ titre: 'v', url: 'https://www.youtube.com/watch?v=x' }],
});
const ctx = { root: ROOT, procedures: { 'genou-intra-articulaire': {} }, types: { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' } };
const errsOf = mut => { const f = fiche(); mut(f); return auditMsk(f, ctx); };

test('slug', () => assert.strictEqual(slug('Bursite sous-acromio-deltoïdienne !'), 'bursite-sous-acromio-deltoidienne'));
test('fiche conforme : aucune erreur', () => assert.deepStrictEqual(auditMsk(fiche(), ctx), []));
test('chaque règle produit son erreur', () => {
  const cas = [
    [f => { f.competences[0].id = 'genou.s01'; }, /lettre « s » ne correspond pas au type coupe/],
    [f => { f.competences[1].id = 'genou.c01'; f.competences[1].type = 'coupe'; }, /en double/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/x.jpg'; f.protocole[0].image.licence = 'CC BY-SA 4.0'; }, /jamais ND ni SA/],
    [f => { f.protocole[0].image.src = 'img/msk/genou/absente.jpg'; }, /image absente sur le disque/],
    [f => { f.protocole[0].image.marqueurs[0].x = 1.4; }, /hors de l'image/],
    [f => { f.protocole[0].image.marqueurs[1].n = 1; }, /marqueur 1 en double/],
    [f => { f.dictee = 'Bourse de 3 mm.'; }, /mesure « 3 mm » sans source/],
    [f => { f.pathologies[0].gestes = []; }, /ni geste du mémo ni phrase aucunGeste/],
    [f => { f.pathologies[0].gestes = ['inconnu']; }, /geste inconnu/],
    [f => { f.protocole[0].n = 2; }, /numéro attendu 1/],
    [f => { f.references[0].verif = 'oui'; }, /verif \(true\/false\)/],
    [f => { f.sonoanatomie[0].source = [4]; }, /hors des références/],
    [f => { f.competences[1].patho = 'rien'; }, /ne désigne aucune pathologie/],
    [f => { delete f.valide; }, /valide/],
  ];
  for (const [mut, re] of cas) { const e = errsOf(mut); assert.ok(e.some(m => re.test(m)), `attendu ${re} dans ${JSON.stringify(e)}`); }
});
test('le squelette épaule du dépôt passe l\'audit', () => {
  const E = loadEcho({ procedures: true, msk: true });
  assert.deepStrictEqual(auditMsk(E.msk.epaule, { root: ROOT, procedures: E.procedures, types: E.mskTypes }), []);
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/msk-audit.test.js`
Expected: FAIL, module `msk-audit-rules` introuvable

- [ ] **Step 3 : écrire `scripts/lib/slug.js`**

```js
/* slug('Bursite sous-acromio-deltoïdienne') → 'bursite-sous-acromio-deltoidienne' : identifiants stables de cartes et de pathologies */
module.exports = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
```

- [ ] **Step 4 : écrire `scripts/lib/msk-audit-rules.js`**

```js
/* Règles de contrôle statique d'une fiche MSK (spec §11). auditMsk(f, ctx) → messages d'erreur (vide = conforme).
   ctx = { root: dossier du dépôt (existence des images), procedures: ECHO.procedures, types: ECHO.mskTypes } */
const fs = require('fs'), path = require('path');
const slug = require('./slug');
const LICENCES_MSK = /^(CC BY(-NC)?( \d(\.\d)?)?|CC0( 1\.0)?|domaine public|image personnelle|schéma original)/i;
const isStr = s => typeof s === 'string' && s.trim().length > 0;
function auditMsk(f, ctx) {
  const E = [], err = m => E.push(m);
  ctx = ctx || {};
  const types = ctx.types || { coupe: 'c', structure: 's', pathologie: 'p', dynamique: 'd', piege: 'a', geste: 'g' };
  if (!f || !isStr(f.id)) return ['fiche sans id'];
  for (const k of ['titre', 'en', 'maj', 'dictee']) if (!isStr(f[k])) err(`champ texte manquant : ${k}`);
  if (typeof f.valide !== 'boolean') err('`valide` doit être un booléen (false tant que Mat n\'a pas validé)');
  if (!Array.isArray(f.motsCles) || !f.motsCles.length) err('motsCles vide');
  if (!f.flash || !isStr(f.flash.sonde)) err('flash.sonde manquant');
  for (const k of ['protocole', 'sonoanatomie', 'pathologies', 'competences', 'references', 'videos']) if (!Array.isArray(f[k]) || !f[k].length) err(`${k} vide`);
  const refs = f.references || [];
  const srcOk = (s, where) => (s == null ? [] : Array.isArray(s) ? s : [s]).forEach(k => { if (!Number.isInteger(k) || k < 0 || k >= refs.length) err(`${where} : source [${k}] hors des références`); });
  const checkImage = (img, where) => {
    if (!img) return;
    if (!isStr(img.src)) { err(`${where} : image sans src`); return; }
    if (ctx.root && !fs.existsSync(path.join(ctx.root, img.src))) err(`${where} : image absente sur le disque (${img.src})`);
    if (!isStr(img.credit)) err(`${where} : image sans credit`);
    if (/^img\/msk\//.test(img.src)) {
      if (!isStr(img.licence)) err(`${where} : image sans licence`);
      else if (!LICENCES_MSK.test(img.licence) || /\b(ND|SA)\b/.test(img.licence)) err(`${where} : licence non admise sous img/msk/ (« ${img.licence} ») — CC BY, CC BY-NC ou CC0 seulement, jamais ND ni SA`);
    }
    if (img.crop != null && (!Array.isArray(img.crop) || img.crop.length !== 4 || img.crop.some(v => typeof v !== 'number' || v < 0 || v > 1))) err(`${where} : crop invalide`);
    const ns = new Set();
    (img.marqueurs || []).forEach(m => {
      if (!Number.isInteger(m.n) || m.n < 1) err(`${where} : marqueur sans numéro`);
      if (ns.has(m.n)) err(`${where} : marqueur ${m.n} en double`);
      ns.add(m.n);
      if (!(m.x >= 0 && m.x <= 1 && m.y >= 0 && m.y <= 1)) err(`${where} : marqueur ${m.n} hors de l'image (x, y en fractions de 0 à 1)`);
      if (!isStr(m.label)) err(`${where} : marqueur ${m.n} sans label`);
    });
  };
  (f.protocole || []).forEach((c, i) => {
    const where = `protocole coupe ${c.n || i + 1}`;
    if (c.n !== i + 1) err(`${where} : numéro attendu ${i + 1}`);
    if (!isStr(c.titre)) err(`${where} : titre manquant`);
    if (!isStr(c.position) || !isStr(c.repere)) err(`${where} : position et repère obligatoires`);
    if (!Array.isArray(c.structures) || !c.structures.length) err(`${where} : structures attendues vides`);
    checkImage(c.image, where);
  });
  (f.sonoanatomie || []).forEach((s, i) => {
    const where = `sonoanatomie « ${s.structure || i + 1} »`;
    if (!isStr(s.structure) || !isStr(s.aspect)) err(`${where} : structure et aspect obligatoires`);
    if (isStr(s.mesure) && s.source == null) err(`${where} : mesure sans source`);
    srcOk(s.source, where);
  });
  (f.pathologies || []).forEach((p, i) => {
    const where = `pathologie ${i + 1}${p.nom ? ' (' + p.nom + ')' : ''}`;
    if (!isStr(p.nom)) err(`${where} : nom manquant`);
    if (!Array.isArray(p.signes) || !p.signes.length) err(`${where} : signes vides`);
    if (!isStr(p.conduite)) err(`${where} : conduite manquante`);
    const gestes = p.gestes || [];
    if (!gestes.length && !isStr(p.aucunGeste)) err(`${where} : ni geste du mémo ni phrase aucunGeste`);
    if (ctx.procedures) gestes.forEach(id => { if (!ctx.procedures[id]) err(`${where} : geste inconnu « ${id} »`); });
    checkImage(p.image, where);
  });
  (f.artefacts || []).forEach((a, i) => { if (!isStr(a.nom) || !isStr(a.texte)) err(`artefact ${i + 1} : nom et texte obligatoires`); });
  const ids = new Set(), re = new RegExp(`^${f.id}\\.([a-z])(\\d{2})$`);
  (f.competences || []).forEach((c, i) => {
    const where = `compétence ${c.id || i + 1}`;
    const m = re.exec(c.id || '');
    if (!m) { err(`${where} : identifiant attendu ${f.id}.<lettre><nn>`); return; }
    if (ids.has(c.id)) err(`${where} : identifiant en double`);
    ids.add(c.id);
    if (!types[c.type]) err(`${where} : type inconnu « ${c.type} »`);
    else if (types[c.type] !== m[1]) err(`${where} : la lettre « ${m[1]} » ne correspond pas au type ${c.type} (attendu « ${types[c.type]} »)`);
    if (![1, 2].includes(c.niveau)) err(`${where} : niveau 1 ou 2`);
    if (!isStr(c.libelle)) err(`${where} : libellé manquant`);
    srcOk(c.sources, where);
    if (c.type === 'pathologie' && isStr(c.patho) && !(f.pathologies || []).some(p => slug(p.nom) === c.patho)) err(`${where} : patho « ${c.patho} » ne désigne aucune pathologie`);
  });
  refs.forEach((r, i) => {
    if (!isStr(r.titre) || !isStr(r.annee)) err(`référence ${i + 1} : titre et année obligatoires`);
    if (typeof r.verif !== 'boolean') err(`référence ${i + 1} : verif (true/false) obligatoire`);
    else if (r.verif && !(isStr(r.doi) || isStr(r.pmid) || isStr(r.url))) err(`référence ${i + 1} : vérifiée mais sans doi, pmid ni url`);
  });
  (f.videos || []).forEach((v, i) => { if (!isStr(v.titre) || !/^https?:\/\//.test(v.url || '')) err(`vidéo ${i + 1} : titre et url http(s) obligatoires`); });
  /* dictée : toute mesure chiffrée doit figurer dans une mesure de la sono-anatomie */
  const mesures = (f.sonoanatomie || []).map(s => s.mesure || '').join(' | ');
  for (const m of String(f.dictee || '').matchAll(/\d+(?:[.,]\d+)?(?:\s?[–-]\s?\d+(?:[.,]\d+)?)?\s?(?:mm|cm|°|MHz|ms)(?![A-Za-z])/g)) if (!mesures.includes(m[0])) err(`dictée : mesure « ${m[0]} » sans source dans sonoanatomie.mesure`);
  return E;
}
module.exports = { auditMsk, slug, LICENCES_MSK };
```

- [ ] **Step 5 : écrire `scripts/msk-audit.js`**

```js
/* Contrôle statique des fiches MSK. node scripts/msk-audit.js [region]  — code 1 s'il reste une erreur.
   Règles : scripts/lib/msk-audit-rules.js (spec §11). */
const { loadEcho, ROOT } = require('./lib/load-echo');
const { auditMsk } = require('./lib/msk-audit-rules');
const E = loadEcho({ procedures: true, msk: true });
const ids = process.argv[2] ? [process.argv[2]] : Object.keys(E.msk).sort();
let tot = 0;
for (const id of ids) {
  const f = E.msk[id];
  if (!f) { console.log(`${id} : aucune fiche MSK`); tot++; continue; }
  const errs = auditMsk(f, { root: ROOT, procedures: E.procedures, types: E.mskTypes });
  const n = k => (f[k] || []).length, marqueurs = (f.protocole || []).reduce((a, c) => a + ((c.image || {}).marqueurs || []).length, 0);
  console.log(`${id.padEnd(16)} ${n('protocole')} coupes · ${marqueurs} marqueurs · ${n('sonoanatomie')} structures · ${n('pathologies')} pathologies · ${n('artefacts')} artefacts · ${n('competences')} compétences · ${n('references')} réf. (${(f.references || []).filter(r => r.verif === false).length} à vérifier) · ${f.valide ? 'validée' : 'NON VALIDÉE'}${errs.length ? '\n  ERREUR ' + errs.join('\n  ERREUR ') : ''}`);
  tot += errs.length;
}
console.log(`\n${ids.length} fiche(s) MSK, ${tot} erreur(s)`);
process.exit(tot ? 1 : 0);
```

- [ ] **Step 6 : lancer les tests et l'audit, commiter**

Run: `node --test tests/msk-audit.test.js && node scripts/msk-audit.js`
Expected: PASS (4 tests) ; `epaule  1 coupes · 4 marqueurs · … · NON VALIDÉE` puis `1 fiche(s) MSK, 0 erreur(s)`

```bash
git add scripts/lib/slug.js scripts/lib/msk-audit-rules.js scripts/msk-audit.js tests/msk-audit.test.js
git commit -m "msk-audit : contrôle statique des fiches MSK (schéma, images, licences, compétences, références, dictée)"
```

---

### Task 6 : dérivation des cartes et digest texte (fonctions pures)

**Files:**
- Create: `scripts/lib/msk-cards.js`, `scripts/lib/msk-digest.js`
- Test: `tests/msk-cards.test.js`

**Interfaces:**
- Consumes: `loadEcho`, `slug`, schéma de fiche.
- Produces: `cardsFromMsk(fiche, ECHO) → carte[]`, `cardsFromGestes(ids, ECHO) → carte[]`, `digest(fiche|null, gesteIds, ECHO, nomRegion) → markdown`. Carte : `{ type: 'structure'|'coupe'|'pathologie'|'piege'|'geste', key, front, back, source, tags, image: null | { src, crop, marqueurs, mode: 'front-back'|'back'|'plain' } }`. Les clés sont stables (`coupe-<n>`, `coupe-<n>-structures`, `patho-<slug>`, `geste-<slug>`, `piege-<slug>`, `socle-<geste>-echo-<i>`, `socle-<geste>-sono-<slug>`, `socle-<geste>-piege-<i>`) : ce sont elles qui fixent les GUID Anki.

- [ ] **Step 1 : écrire le test**

```js
// tests/msk-cards.test.js
const test = require('node:test');
const assert = require('node:assert');
const { loadEcho } = require('../scripts/lib/load-echo');
const { cardsFromMsk, cardsFromGestes } = require('../scripts/lib/msk-cards');
const { digest } = require('../scripts/lib/msk-digest');

test('cardsFromMsk sur le squelette épaule : cinq types, clés uniques et stables', () => {
  const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
  const cards = cardsFromMsk(E.msk.epaule, E);
  const types = cards.map(c => c.type).sort();
  assert.deepStrictEqual(types, ['coupe', 'geste', 'pathologie', 'piege', 'structure']);
  assert.deepStrictEqual(cards.map(c => c.key).sort(), ['coupe-1', 'coupe-1-structures', 'geste-bursite-sous-acromio-deltoidienne', 'patho-bursite-sous-acromio-deltoidienne', 'piege-anisotropie']);
  const s = cards.find(c => c.type === 'structure');
  assert.strictEqual(s.image.mode, 'front-back'); assert.strictEqual(s.image.marqueurs.length, 4); assert.match(s.back, /Nerf axillaire/);
  assert.strictEqual(cards.find(c => c.type === 'coupe').image.mode, 'back');
  assert.match(cards.find(c => c.type === 'geste').back, /echo-algologie\.pages\.dev\/#\/fiche\/sous-acromiale/);
  assert.match(cards.find(c => c.type === 'piege').front, /rupture \?/);
  assert.deepStrictEqual(cardsFromMsk(E.msk.epaule, E), cards, 'déterministe');
  assert.ok(cards.every(c => c.tags.includes('msk::epaule')));
});

test('cardsFromGestes : images étiquetées, sono-anatomie, pièges « énoncé : parade »', () => {
  const E = loadEcho({ procedures: true, figures: true, md: true });
  const cards = cardsFromGestes(['sous-acromiale'], E);
  const keys = cards.map(c => c.key);
  assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  assert.ok(keys.includes('socle-sous-acromiale-echo-1'), 'echo-2 (5 étiquettes) devient la carte image n° 1');
  assert.strictEqual(cards.filter(c => c.key.startsWith('socle-sous-acromiale-sono-')).length, 8);
  const piege = cards.find(c => c.key === 'socle-sous-acromiale-piege-1');
  assert.match(piege.front, /anisotropie/); assert.match(piege.back, /basculer la sonde/);
  assert.ok(cards.every(c => c.tags.includes('geste::sous-acromiale')));
});

test('digest : fiche puis gestes, sans balises ni astérisques', () => {
  const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
  const md = digest(E.msk.epaule, ['sous-acromiale'], E, 'Épaule');
  assert.match(md, /^# Écho MSK — Épaule/); assert.match(md, /## Fiche diagnostique/); assert.match(md, /## Geste : Bourse sous-acromio/);
  assert.ok(!md.includes('**anisotropie**'), 'gras retiré'); assert.match(md, /### Dictée/);
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/msk-cards.test.js`
Expected: FAIL, module `msk-cards` introuvable

- [ ] **Step 3 : écrire `scripts/lib/msk-cards.js`**

```js
/* Dérivation des cartes Anki : d'une fiche MSK (cardsFromMsk) et des fiches gestes d'une région (cardsFromGestes).
   Pur : aucune E/S. Carte : { type, key, front, back, source, tags, image } ; image = null ou
   { src, crop, marqueurs, mode: 'front-back' | 'back' | 'plain' } — le rendu PNG est fait par scripts/msk-export.js.
   Les `key` fixent les GUID Anki : ne jamais les renommer sans accepter de perdre la planification des cartes. */
const slug = require('./slug');
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const SITE = 'https://echo-algologie.pages.dev/#/';
const helpers = E => ({
  inline: E && E.inline ? E.inline : esc,
  md: E && E.md ? E.md : (x => Array.isArray(x) ? `<ul>${x.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : `<p>${esc(x)}</p>`),
  gesteTitre: id => { const p = ((E || {}).procedures || {})[id]; return p ? (p.titreCourt || p.titre) : id; },
});
function cardsFromMsk(f, E) {
  const { inline, md, gesteTitre } = helpers(E), titre = inline(f.titre), tags = t => [`msk::${f.id}`, `type::${t}`], cards = [];
  (f.protocole || []).forEach(c => {
    const img = c.image || {}, mq = img.marqueurs || [];
    if (img.src && mq.length >= 2) cards.push({ type: 'structure', key: `coupe-${c.n}-structures`, tags: tags('structure'), image: { src: img.src, crop: img.crop, marqueurs: mq, mode: 'front-back' },
      front: `<b>${titre}</b> — coupe ${c.n}, ${inline(c.titre)}.<br>Nommer les structures 1 à ${mq.length}.`, back: `<ol>${mq.map(m => `<li>${esc(m.label)}</li>`).join('')}</ol>`, source: esc(img.credit || '') });
    cards.push({ type: 'coupe', key: `coupe-${c.n}`, tags: tags('coupe'), image: img.src ? { src: img.src, crop: img.crop, marqueurs: mq, mode: 'back' } : null,
      front: `<b>${titre}</b> — coupe ${c.n} : <i>${inline(c.titre)}</i>.<br>Position, repère osseux, structures attendues ?`,
      back: `<p><b>Position</b> : ${inline(c.position || '')}</p><p><b>Repère</b> : ${inline(c.repere || '')}</p>${md(c.structures || [])}${c.dynamique ? `<p><b>Manœuvre</b> : ${inline(c.dynamique)}</p>` : ''}`, source: esc(img.credit || '') });
  });
  (f.pathologies || []).forEach(p => {
    const k = slug(p.nom), img = p.image && p.image.src ? p.image : null;
    cards.push({ type: 'pathologie', key: `patho-${k}`, tags: tags('pathologie'), image: img ? { src: img.src, crop: img.crop, marqueurs: [], mode: 'plain' } : null,
      front: `<i>${inline(p.vignette || '')}</i><br>${img ? 'Image obtenue en consultation : diagnostic et signe clé ?' : `<b>${titre}</b> : quelle pathologie, quel signe clé ?`}`,
      back: `<p><b>${inline(p.nom)}</b>${p.en ? ` (${inline(p.en)})` : ''}</p>${md((p.signes || []).slice(0, 3))}<p><b>Conduite</b> : ${inline(p.conduite || '')}</p>`, source: esc(img ? img.credit || '' : '') });
    if ((p.gestes || []).length) cards.push({ type: 'geste', key: `geste-${k}`, tags: tags('geste'), image: null,
      front: `<b>${titre}</b> : ${inline(p.nom)} confirmée à l'écho.<br>Quel geste du mémo, quelle fiche ?`,
      back: `<ul>${p.gestes.map(id => `<li>${esc(gesteTitre(id))} — <a href="${SITE}fiche/${id}">fiche</a></li>`).join('')}</ul>`, source: '' });
  });
  (f.artefacts || []).forEach(a => cards.push({ type: 'piege', key: `piege-${slug(a.nom)}`, tags: tags('piege'), image: null,
    front: `<b>${titre}</b> — ${a.question ? inline(a.question) : `${inline(a.nom)} : de quoi s'agit-il et comment s'en prémunir ?`}`,
    back: `<p>${inline(a.reponse || a.texte)}</p>`, source: '' }));
  return cards;
}
function cardsFromGestes(ids, E) {
  const { inline } = helpers(E), cards = [];
  for (const id of ids) {
    const p = (E.procedures || {})[id]; if (!p) continue;
    const t = inline(p.titreCourt || p.titre), tags = ty => ['msk::socle', `geste::${id}`, `type::${ty}`];
    ((E.figures || {})[id] || []).filter(f => f.type === 'echo' && (f.labels || []).length >= 2).forEach((f, i) => {
      const mq = f.labels.map((l, k) => ({ n: k + 1, x: l.x, y: l.y, dx: l.dx, dy: l.dy, label: l.text }));
      cards.push({ type: 'structure', key: `socle-${id}-echo-${i + 1}`, tags: tags('structure'), image: { src: f.src, crop: f.crop, marqueurs: mq, mode: 'front-back' },
        front: `<b>${t}</b> — ${inline(f.titre || 'coupe de repérage')}.<br>Nommer les structures 1 à ${mq.length}.`,
        back: `<ol>${mq.map(m => `<li>${inline(m.label)}</li>`).join('')}</ol>${f.legende ? `<p>${inline(f.legende)}</p>` : ''}`, source: esc(f.credit || '') });
    });
    (p.sonoanatomie || []).forEach(s => cards.push({ type: 'structure', key: `socle-${id}-sono-${slug(s.structure)}`, tags: tags('structure'), image: null,
      front: `<b>${t}</b> — aspect échographique et repère : <i>${inline(s.structure)}</i> ?`, back: `<p>${inline(s.aspect)}</p>${s.repere ? `<p><b>Repère</b> : ${inline(s.repere)}</p>` : ''}`, source: '' }));
    (p.pieges || []).forEach((txt, i) => {
      const m = /^(.{15,}?)\s:\s(.{10,})$/s.exec(String(txt));   // « énoncé : parade » → recto / verso ; sans deux-points, pas de carte
      if (m) cards.push({ type: 'piege', key: `socle-${id}-piege-${i + 1}`, tags: tags('piege'), image: null, front: `<b>${t}</b> — piège : ${inline(m[1])}…<br>Que faire ?`, back: `<p>${inline(m[2])}</p>`, source: '' });
    });
  }
  return cards;
}
module.exports = { cardsFromMsk, cardsFromGestes };
```

- [ ] **Step 4 : écrire `scripts/lib/msk-digest.js`**

```js
/* Texte Markdown d'une région pour NotebookLM : fiche MSK (si présente) puis extraits des fiches gestes. Sans balises ni gras. */
const strip = s => String(s == null ? '' : s).replace(/\*\*/g, '').replace(/<[^>]+>/g, '');
const list = arr => (arr || []).map(x => `- ${strip(typeof x === 'string' ? x : [x.titre, x.texte].filter(Boolean).join(' : '))}`).join('\n');
function digest(f, gestes, E, nom) {
  const out = [`# Écho MSK — ${nom}`, ''];
  if (f) {
    out.push(`## Fiche diagnostique : ${strip(f.titre)}`, '', strip(f.resume), '', '### Protocole d\'examen');
    (f.protocole || []).forEach(c => out.push(`${c.n}. ${strip(c.titre)} — position : ${strip(c.position)} ; repère : ${strip(c.repere)} ; structures : ${(c.structures || []).map(strip).join(', ')}${c.dynamique ? ` ; manœuvre : ${strip(c.dynamique)}` : ''}${c.pieges ? ` ; pièges : ${strip(c.pieges)}` : ''}`));
    out.push('', '### Sono-anatomie normale'); (f.sonoanatomie || []).forEach(s => out.push(`- ${strip(s.structure)} : ${strip(s.aspect)}${s.mesure ? ` (${strip(s.mesure)})` : ''}`));
    out.push('', '### Pathologies'); (f.pathologies || []).forEach(p => out.push(`- ${strip(p.nom)} : ${(p.signes || []).map(strip).join(' ; ')}. Conduite : ${strip(p.conduite)}`));
    out.push('', '### Artefacts et pièges', list((f.artefacts || []).map(a => `${a.nom} : ${a.texte}`)), '', '### Dictée d\'un examen normal', strip(f.dictee), '');
  }
  for (const id of gestes || []) {
    const p = (E.procedures || {})[id]; if (!p) continue;
    out.push(`## Geste : ${strip(p.titre)}`, '', strip(p.resume), '', '### Repérage', list(p.reperage), '', '### Sono-anatomie');
    (p.sonoanatomie || []).forEach(s => out.push(`- ${strip(s.structure)} : ${strip(s.aspect)}${s.repere ? ` — ${strip(s.repere)}` : ''}`));
    out.push('', '### Pearls', list(p.pearls), '', '### Pièges', list(p.pieges), '');
  }
  return out.join('\n');
}
module.exports = { digest };
```

- [ ] **Step 5 : lancer le test, commiter**

Run: `node --test tests/msk-cards.test.js`
Expected: PASS (3 tests)

```bash
git add scripts/lib/msk-cards.js scripts/lib/msk-digest.js tests/msk-cards.test.js
git commit -m "MSK : dérivation des cartes Anki (fiche et fiches gestes) et digest texte pour NotebookLM"
```

---

### Task 7 : rendu des images à marqueurs et export d'une région

**Files:**
- Create: `scripts/lib/render-markers.js`, `scripts/msk-export.js`
- Modify: `.gitignore` (ajouter `dist/`)
- Test: `tests/render-markers.test.js`, `tests/msk-export.test.js`

**Interfaces:**
- Consumes: cartes de la tâche 6.
- Produces: `renderMarkers(page, { src, crop, marqueurs, mode }, outPng, tmpHtml)` ; CLI `node scripts/msk-export.js <region> [--gestes a,b] [--out dist/msk]` → `dist/msk/<region>.cards.json` (`{ region, nom, genere, cards: [{ type, key, front_html, back_html, source, tags, media: [chemins relatifs au dépôt] }] }`), `dist/msk/<region>.json`, `dist/msk/<region>-digest.md`, `dist/msk/img/<region>/msk-<region>-<key>-{recto,verso,image}.jpg` (JPEG qualité 85, décision d'exécution : 15 PNG pesaient 16 Mo). Les noms de médias commencent par `msk-<region>-` (Review Focus 1).

- [ ] **Step 1 : écrire les tests**

```js
// tests/render-markers.test.js  — NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { chromium } = require('playwright');
const { renderMarkers } = require('../scripts/lib/render-markers');
const ROOT = path.resolve(__dirname, '..');
const pngSize = f => { const b = fs.readFileSync(f); return [b.readUInt32BE(16), b.readUInt32BE(20)]; };

test('renderMarkers : recto, verso et image nue à 900 px de large, hauteur selon le crop', async () => {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'rm-'));
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 1 });
  const spec = { src: path.join(ROOT, 'img/nerf-axillaire/echo-1.jpg'), crop: [0.09, 0.385, 0.34, 0.25], marqueurs: [{ n: 1, x: 0.3, y: 0.22, dy: -0.1, label: 'Deltoïde' }, { n: 2, x: 0.59, y: 0.58, dx: -0.06, dy: -0.3, label: 'Nerf axillaire' }] };
  for (const mode of ['front', 'back', 'plain']) {
    const out = path.join(tmp, mode + '.png');
    await renderMarkers(page, Object.assign({ mode }, spec), out, path.join(tmp, 'r.html'));
    const [w, h] = pngSize(out);
    assert.strictEqual(w, 900, mode + ' : largeur'); assert.ok(h > 300 && h < 900, mode + ' : hauteur ' + h);
  }
  await browser.close();
});
```

```js
// tests/msk-export.test.js  — NODE_PATH=$(npm root -g)
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { execFileSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');

test('msk-export epaule : cartes du squelette + socle des 7 gestes, médias préfixés, digest', () => {
  const out = fs.mkdtempSync(path.join(os.tmpdir(), 'mx-'));
  const log = execFileSync('node', ['scripts/msk-export.js', 'epaule', '--out', out], { cwd: ROOT, env: process.env, encoding: 'utf8' });
  assert.match(log, /epaule : \d+ cartes/);
  const data = JSON.parse(fs.readFileSync(path.join(out, 'epaule.cards.json'), 'utf8'));
  assert.strictEqual(data.region, 'epaule'); assert.strictEqual(data.nom, 'Épaule');
  assert.ok(data.cards.length >= 40, 'au moins 40 cartes avec les 7 fiches gestes : ' + data.cards.length);
  const keys = data.cards.map(c => c.key); assert.strictEqual(new Set(keys).size, keys.length, 'clés uniques');
  for (const c of data.cards) for (const m of c.media) { assert.ok(path.basename(m).startsWith('msk-epaule-'), m); assert.ok(fs.existsSync(path.join(ROOT, m)), 'média présent : ' + m); }
  const s = data.cards.find(c => c.key === 'coupe-1-structures');
  assert.match(s.front_html, /<img src="msk-epaule-coupe-1-structures-recto\.png">/); assert.match(s.back_html, /verso\.png/);
  assert.ok(fs.existsSync(path.join(out, 'epaule.json')) && fs.existsSync(path.join(out, 'epaule-digest.md')));
  assert.ok(!fs.existsSync(path.join(out, '_render.html')), 'page temporaire nettoyée');
});
```

- [ ] **Step 2 : lancer les tests, ils doivent échouer**

Run: `NODE_PATH=$(npm root -g) node --test tests/render-markers.test.js tests/msk-export.test.js`
Expected: FAIL (modules absents)

- [ ] **Step 3 : écrire `scripts/lib/render-markers.js`**

```js
/* Rendu PNG d'une image à marqueurs numérotés (Playwright) : 'front' = numéros seuls, 'back' = numéros et libellés, 'plain' = image nue.
   renderMarkers(page, { src: chemin absolu, crop: [x0, y0, w, h] en fractions, marqueurs: [{ n, x, y, dx, dy, label }], mode }, outPng, tmpHtml)
   La page est écrite dans tmpHtml et ouverte en file:// : une page about:blank ne peut pas charger d'image locale. */
const fs = require('fs'), path = require('path');
const CSS = `body{margin:0;background:#000}.wrap{position:relative;width:900px;overflow:hidden;background:#000}.clip{position:absolute;inset:0;overflow:hidden}.clip img{position:absolute;display:block;max-width:none}
svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}line{stroke:#d97706;stroke-width:1.6px;vector-effect:non-scaling-stroke}circle{fill:#d97706;stroke:#fff;stroke-width:.3}
.lbl{position:absolute;transform:translate(-50%,-50%);background:rgba(255,255,255,.94);color:#1f2937;border:1.5px solid #d97706;border-radius:7px;padding:2px 8px;font:600 15px -apple-system,system-ui,sans-serif;white-space:nowrap}
.lbl.num{border-radius:999px;min-width:30px;text-align:center;padding:2px 6px;font-size:16px}`;
async function renderMarkers(page, spec, out, tmpHtml) {
  const crop = spec.crop || [0, 0, 1, 1], mode = spec.mode || 'front';
  fs.mkdirSync(path.dirname(tmpHtml), { recursive: true }); fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(tmpHtml, `<!doctype html><meta charset="utf-8"><style>${CSS}</style><div class="wrap" id="w"><div class="clip"><img id="i" src="file://${spec.src}"></div><svg id="s" viewBox="0 0 100 100" preserveAspectRatio="none"></svg></div>`);
  await page.goto('file://' + tmpHtml);
  await page.waitForFunction(() => { const i = document.getElementById('i'); return i.complete && i.naturalWidth > 0; }, null, { timeout: 15000 });
  await page.evaluate(({ crop, marqueurs, mode }) => {
    const w = document.getElementById('w'), img = document.getElementById('i'), svg = document.getElementById('s');
    const W = 900, H = Math.round(W * (img.naturalHeight * crop[3]) / (img.naturalWidth * crop[2]));
    w.style.height = H + 'px';
    img.style.width = (100 / crop[2]) + '%'; img.style.height = (100 / crop[3]) + '%';
    img.style.left = (-crop[0] / crop[2] * 100) + '%'; img.style.top = (-crop[1] / crop[3] * 100) + '%';
    if (mode === 'plain') return;
    svg.innerHTML = marqueurs.map(m => { const tx = m.x + (m.dx || 0), ty = m.y + (m.dy || 0); return `<line x1="${tx * 100}" y1="${ty * 100}" x2="${m.x * 100}" y2="${m.y * 100}"/><circle cx="${m.x * 100}" cy="${m.y * 100}" r="0.9"/>`; }).join('');
    for (const m of marqueurs) { const d = document.createElement('div'); d.className = 'lbl' + (mode === 'front' ? ' num' : ''); d.style.left = ((m.x + (m.dx || 0)) * 100) + '%'; d.style.top = ((m.y + (m.dy || 0)) * 100) + '%'; d.textContent = mode === 'front' ? String(m.n) : `${m.n}. ${m.label}`; w.appendChild(d); }
  }, { crop, marqueurs: spec.marqueurs || [], mode });
  await page.locator('#w').screenshot({ path: out });
  return out;
}
module.exports = { renderMarkers };
```

- [ ] **Step 4 : écrire `scripts/msk-export.js`**

```js
/* Export d'une région pour Anki et NotebookLM.
   node scripts/msk-export.js <region> [--gestes id,id,…] [--out dist/msk]
   Cartes = fiche MSK (si présente, avec ses `gestes`) + fiches gestes de --gestes quand la fiche n'existe pas encore.
   Sorties dans --out : <region>.cards.json (cartes + médias rendus), <region>.json (fiche brute), <region>-digest.md (NotebookLM),
   img/<region>/msk-<region>-<key>-{recto,verso,image}.png. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const { loadEcho, ROOT } = require('./lib/load-echo');
const { cardsFromMsk, cardsFromGestes } = require('./lib/msk-cards');
const { digest } = require('./lib/msk-digest');
const { renderMarkers } = require('./lib/render-markers');
const args = process.argv.slice(2), region = args.find((a, i) => !a.startsWith('--') && (i === 0 || !args[i - 1].startsWith('--')));
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
if (!region) { console.error('usage : node scripts/msk-export.js <region> [--gestes id,id] [--out dist/msk]'); process.exit(1); }
const E = loadEcho({ procedures: true, figures: true, msk: true, md: true });
const nom = ((E.mskRegions || []).find(r => r.id === region) || {}).nom;
if (!nom) { console.error('région inconnue : ' + region); process.exit(1); }
const f = E.msk[region], gestes = (f && f.gestes) || (opt('--gestes', '') ? opt('--gestes').split(',') : []);
if (!f && !gestes.length) { console.error('ni fiche MSK ni --gestes : rien à exporter'); process.exit(1); }
const out = path.resolve(ROOT, opt('--out', 'dist/msk')), imgDir = path.join(out, 'img', region);
fs.mkdirSync(imgDir, { recursive: true });
const cards = (f ? cardsFromMsk(f, E) : []).concat(cardsFromGestes(gestes, E));
(async () => {
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const page = await browser.newPage({ viewport: { width: 1000, height: 1000 }, deviceScaleFactor: 2 });
  const tmp = path.join(out, '_render.html');
  for (const c of cards) {
    c.media = []; c.front_html = c.front; c.back_html = c.back;
    if (!c.image) { delete c.image; continue; }
    const base = `msk-${region}-${c.key}`, spec = { src: path.join(ROOT, c.image.src), crop: c.image.crop, marqueurs: c.image.marqueurs };
    const add = async (mode, suffix) => { const file = `${base}-${suffix}.png`; await renderMarkers(page, Object.assign({}, spec, { mode }), path.join(imgDir, file), tmp); c.media.push(path.relative(ROOT, path.join(imgDir, file))); return `<img src="${file}">`; };
    if (c.image.mode === 'front-back') { c.front_html = (await add('front', 'recto')) + '<br>' + c.front; c.back_html = (await add('back', 'verso')) + '<br>' + c.back; }
    else if (c.image.mode === 'back') c.back_html = c.back + '<br>' + (await add('back', 'verso'));
    else c.front_html = (await add('plain', 'image')) + '<br>' + c.front;
    delete c.image;
  }
  await browser.close();
  if (fs.existsSync(tmp)) fs.unlinkSync(tmp);
  fs.writeFileSync(path.join(out, `${region}.cards.json`), JSON.stringify({ region, nom, genere: new Date().toISOString().slice(0, 10), cards }, null, 1));
  if (f) fs.writeFileSync(path.join(out, `${region}.json`), JSON.stringify(f, null, 1));
  fs.writeFileSync(path.join(out, `${region}-digest.md`), digest(f, gestes, E, nom));
  const par = {}; cards.forEach(c => { par[c.type] = (par[c.type] || 0) + 1; });
  console.log(`${region} : ${cards.length} cartes (${Object.entries(par).map(([k, v]) => `${k} ${v}`).join(', ')}), ${cards.reduce((a, c) => a + c.media.length, 0)} images → ${path.relative(ROOT, out) || '.'}/`);
})();
```

Dans `.gitignore`, ajouter la ligne `dist/`.

- [ ] **Step 5 : lancer les tests, regarder deux images, commiter**

Run: `NODE_PATH=$(npm root -g) node --test tests/render-markers.test.js tests/msk-export.test.js`
Expected: PASS (2 tests)

Run: `NODE_PATH=$(npm root -g) node scripts/msk-export.js epaule && ls dist/msk/img/epaule | head`
Lire `dist/msk/img/epaule/msk-epaule-coupe-1-structures-recto.png` et `…-verso.png` : pastilles lisibles, lignes vers la structure, image bien recadrée.

```bash
git add scripts/lib/render-markers.js scripts/msk-export.js .gitignore tests/render-markers.test.js tests/msk-export.test.js
git commit -m "msk-export : images à marqueurs (recto, verso), cartes JSON, digest NotebookLM"
```

---

### Task 8 : paquets Anki (genanki) et vérification

**Files:**
- Create: `scripts/anki/requirements.txt`, `scripts/anki/build.py`, `scripts/anki/check.py`, `scripts/anki/test_build.py`
- Modify: `.gitignore` (ajouter `scripts/anki/.venv/`), `.claude/settings.json` (permissions)

**Interfaces:**
- Consumes: `dist/msk/<region>.cards.json` (tâche 7) ; `config.json` du dossier privé (tâche 9b) pour `--copy`.
- Produces: `build(cards_json, out_dir, root) → (chemin_apkg, nb_notes)` ; `inspect(apkg) → { notes, medias, medias_manquants, paquets, guids }` ; CLI `build.py <region> [--out dist/anki] [--copy]`, `check.py <apkg> <notes attendues> [médias attendus]` (code 1 si écart). Paquets `Écho MSK::<Région>::<Structures|Coupes du protocole|Pathologies|Pièges et artefacts|Gestes>` ; GUID = `guid_for('msk', region, type, key)` ; identifiants de paquet = 8 premiers hexas du SHA-1 du nom (Review Focus 2).

- [ ] **Step 1 : environnement Python et permissions**

```bash
cd ~/Claude/Code/echo-algologie
printf 'genanki==0.13.1\n' > scripts/anki/requirements.txt
python3 -m venv scripts/anki/.venv && scripts/anki/.venv/bin/pip install -q -r scripts/anki/requirements.txt
printf 'scripts/anki/.venv/\n' >> .gitignore
```
Dans `.claude/settings.json`, ajouter à `permissions.allow` : `"Bash(scripts/anki/.venv/bin/*)"`, `"Bash(python3 -m venv *)"`, `"Bash(node --test *)"`, `"Bash(NODE_PATH=* node --test *)"`.

- [ ] **Step 2 : écrire le test**

```python
# scripts/anki/test_build.py  — scripts/anki/.venv/bin/python -m unittest scripts/anki/test_build.py
import json, pathlib, shutil, struct, tempfile, unittest, zlib
from build import build
from check import inspect

def png1x1():
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', 1, 1, 8, 2, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(b'\x00\xff\x00\x00')) + chunk(b'IEND', b'')

class BuildTest(unittest.TestCase):
    def setUp(self):
        self.root = pathlib.Path(tempfile.mkdtemp())
        (self.root / 'dist/msk/img/genou').mkdir(parents=True)
        (self.root / 'dist/msk/img/genou/msk-genou-coupe-1-structures-recto.png').write_bytes(png1x1())
        cards = {'region': 'genou', 'nom': 'Genou', 'cards': [
            {'type': 'structure', 'key': 'coupe-1-structures', 'front_html': '<img src="msk-genou-coupe-1-structures-recto.png"><br>Nommer', 'back_html': '<ol><li>Tendon</li></ol>', 'source': 'x', 'tags': ['msk::genou', 'type::structure'], 'media': ['dist/msk/img/genou/msk-genou-coupe-1-structures-recto.png']},
            {'type': 'piege', 'key': 'piege-anisotropie', 'front_html': 'Q ?', 'back_html': 'R', 'source': '', 'tags': ['msk::genou', 'type::piege'], 'media': []},
        ]}
        self.cards = self.root / 'dist/msk/genou.cards.json'
        self.cards.write_text(json.dumps(cards), encoding='utf-8')
    def tearDown(self): shutil.rmtree(self.root)
    def test_build_then_inspect(self):
        apkg, n = build(self.cards, self.root / 'dist/anki', self.root)
        self.assertEqual(n, 2)
        r = inspect(apkg)
        self.assertEqual(r['notes'], 2); self.assertEqual(r['medias'], 1); self.assertEqual(r['medias_manquants'], [])
        self.assertIn('Écho MSK::Genou::Structures', r['paquets']); self.assertIn('Écho MSK::Genou::Pièges et artefacts', r['paquets'])
    def test_guids_stables(self):
        a, _ = build(self.cards, self.root / 'a', self.root); b, _ = build(self.cards, self.root / 'b', self.root)
        self.assertEqual(inspect(a)['guids'], inspect(b)['guids'])
        self.assertEqual(len(set(inspect(a)['guids'])), 2)

if __name__ == '__main__': unittest.main()
```

- [ ] **Step 3 : lancer le test, il doit échouer**

Run: `cd scripts/anki && .venv/bin/python -m unittest test_build.py; cd ../..`
Expected: FAIL, `No module named 'build'`

- [ ] **Step 4 : écrire `scripts/anki/build.py`**

```python
#!/usr/bin/env python3
"""Construit dist/anki/msk-<region>.apkg depuis dist/msk/<region>.cards.json (genanki).
usage : scripts/anki/.venv/bin/python scripts/anki/build.py <region> [--out dist/anki] [--copy]
--copy : copie aussi le paquet dans <dossier privé>/anki/ et dans transfert_anki de config.json (iCloud → iPhone)."""
import argparse, hashlib, json, os, pathlib, shutil
import genanki

ROOT = pathlib.Path(__file__).resolve().parents[2]
MODEL_ID = 1696100001
SUBDECKS = {'structure': 'Structures', 'coupe': 'Coupes du protocole', 'pathologie': 'Pathologies', 'piege': 'Pièges et artefacts', 'geste': 'Gestes'}
CSS = ('.card{font-family:-apple-system,system-ui,sans-serif;font-size:19px;line-height:1.45;color:#14181d;background:#fff;text-align:left;padding:8px}'
       'img{max-width:100%;border-radius:10px}.src{color:#5b6672;font-size:13px;margin-top:10px}ol,ul{padding-left:22px}')
MODEL = genanki.Model(MODEL_ID, 'Écho MSK — carte', fields=[{'name': 'Recto'}, {'name': 'Verso'}, {'name': 'Source'}],
                      templates=[{'name': 'Carte', 'qfmt': '{{Recto}}', 'afmt': '{{FrontSide}}<hr id=answer>{{Verso}}<div class="src">{{Source}}</div>'}], css=CSS)

def deck_id(name): return int(hashlib.sha1(name.encode('utf-8')).hexdigest()[:8], 16)

def build(cards_json, out_dir, root=ROOT):
    data = json.loads(pathlib.Path(cards_json).read_text(encoding='utf-8'))
    region, nom, decks, media = data['region'], data['nom'], {}, []
    for c in data['cards']:
        name = f"Écho MSK::{nom}::{SUBDECKS.get(c['type'], c['type'])}"
        deck = decks.setdefault(name, genanki.Deck(deck_id(name), name))
        deck.add_note(genanki.Note(model=MODEL, fields=[c['front_html'], c['back_html'], c.get('source', '')], tags=c.get('tags', []),
                                   guid=genanki.guid_for('msk', region, c['type'], c['key'])))
        media += [str(pathlib.Path(root) / m) for m in c.get('media', [])]
    out = pathlib.Path(out_dir); out.mkdir(parents=True, exist_ok=True)
    pkg = genanki.Package(list(decks.values())); pkg.media_files = sorted(set(media))
    apkg = out / f'msk-{region}.apkg'; pkg.write_to_file(str(apkg))
    return apkg, sum(len(d.notes) for d in decks.values())

def copier(apkg):
    home = pathlib.Path(os.environ.get('ECHO_MSK_HOME') or os.path.expanduser('~/Claude/Projects/Écho MSK'))
    cfg = json.loads((home / 'config.json').read_text(encoding='utf-8'))
    cibles = [home / 'anki', pathlib.Path(cfg['transfert_anki'])]
    for d in cibles: d.mkdir(parents=True, exist_ok=True); shutil.copy2(apkg, d / apkg.name)
    return cibles

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('region'); ap.add_argument('--out', default='dist/anki'); ap.add_argument('--copy', action='store_true')
    a = ap.parse_args()
    apkg, n = build(ROOT / 'dist/msk' / f'{a.region}.cards.json', ROOT / a.out)
    print(f'{apkg.relative_to(ROOT)} : {n} notes')
    if a.copy:
        for d in copier(apkg): print(f'copié → {d / apkg.name}')
```

- [ ] **Step 5 : écrire `scripts/anki/check.py`**

```python
#!/usr/bin/env python3
"""Vérifie un paquet .apkg : notes, médias, paquets. usage : check.py <fichier.apkg> <notes attendues> [médias attendus] — code 1 si écart."""
import json, pathlib, sqlite3, sys, tempfile, zipfile

def inspect(apkg):
    with zipfile.ZipFile(apkg) as z:
        names = z.namelist()
        col = next((n for n in ('collection.anki21', 'collection.anki2') if n in names), None)
        if not col: raise SystemExit(f'{apkg} : aucune collection dans {names}')
        tmp = pathlib.Path(tempfile.mkdtemp()); z.extract(col, tmp)
        media = json.loads(z.read('media').decode('utf-8')) if 'media' in names else {}
        manquants = [v for k, v in media.items() if k not in names]
    con = sqlite3.connect(tmp / col)
    notes = con.execute('select count(*) from notes').fetchone()[0]
    guids = [r[0] for r in con.execute('select guid from notes order by guid')]
    decks = json.loads(con.execute('select decks from col').fetchone()[0])
    con.close()
    return {'notes': notes, 'medias': len(media), 'medias_manquants': manquants, 'paquets': sorted(d['name'] for d in decks.values()), 'guids': guids}

if __name__ == '__main__':
    if len(sys.argv) < 3: raise SystemExit(__doc__)
    r, attendu = inspect(sys.argv[1]), int(sys.argv[2]); med = int(sys.argv[3]) if len(sys.argv) > 3 else None
    ok = r['notes'] == attendu and not r['medias_manquants'] and (med is None or r['medias'] == med)
    print(f"{sys.argv[1]} : {r['notes']} notes (attendu {attendu}), {r['medias']} médias{' MANQUANTS ' + str(r['medias_manquants']) if r['medias_manquants'] else ''}, paquets : {', '.join(r['paquets'])}")
    sys.exit(0 if ok else 1)
```

- [ ] **Step 6 : lancer le test, puis la chaîne réelle sur l'épaule, commiter**

Run: `cd scripts/anki && .venv/bin/python -m unittest test_build.py; cd ../..`
Expected: `Ran 2 tests … OK`

Run: `NODE_PATH=$(npm root -g) node scripts/msk-export.js epaule | tee /tmp/export.txt && N=$(grep -o '[0-9]* cartes' /tmp/export.txt | grep -o '[0-9]*') && scripts/anki/.venv/bin/python scripts/anki/build.py epaule && scripts/anki/.venv/bin/python scripts/anki/check.py dist/anki/msk-epaule.apkg $N`
Expected: `dist/anki/msk-epaule.apkg : N notes` puis la ligne de check sans `MANQUANTS`, code 0

```bash
git add scripts/anki/requirements.txt scripts/anki/build.py scripts/anki/check.py scripts/anki/test_build.py .gitignore .claude/settings.json
git commit -m "Anki : construction des paquets par région (genanki), vérification et copie vers l'iPhone"
```

---

### Task 9a : garde-fou données patient

**Files:**
- Create: `scripts/lib/phi-guard.js`
- Test: `tests/phi-guard.test.js`

**Interfaces:**
- Produces: `detecter(texte) → [{ motif, extrait }]` (vide = rien de suspect) ; `verifierTextes(strings) → même chose sur un tableau`. Utilisé par `msk-progress.js logbook add` avant toute écriture.

- [ ] **Step 1 : écrire le test** (phrases pièges, dont majuscules et sans accent — Review Focus 3 ; phrases légitimes)

```js
// tests/phi-guard.test.js
const test = require('node:test');
const assert = require('node:assert');
const { detecter, verifierTextes } = require('../scripts/lib/phi-guard');

test('phrases pièges refusées', () => {
  const pieges = [
    'Mme Dupont, épaule droite', 'MME DUPONT epaule', 'M. Martin : bourse épaissie', 'le patient Lefèvre', 'J.-P. L., 54 ans', 'née le 3 mai 1970',
    'nee le 03/05/1970', 'patiente de 72 ans', 'la dame de la chambre 4', 'le monsieur de Libourne', 'chambre 12, genou gauche', 'dossier IPP 123456',
    'vu le 07/10/2026 au box 3', 'tél 06 12 34 56 78', 'habite à Bergerac', 'travaille chez Renault', 'NIR 1 84 04 31 555 123 45', 'mail x@y.fr',
  ];
  for (const p of pieges) assert.ok(detecter(p).length > 0, 'devrait être refusé : ' + p);
});
test('phrases légitimes acceptées', () => {
  const ok = [
    '3 épaules aujourd\'hui : supra-épineux vu 3/3, sous-scapulaire en rotation externe 1/3 (difficulté 3), bourse 2/3.',
    'Question : comment dégager l\'infra-épineux quand le patient ne peut pas mettre la main dans le dos ?',
    'Genou : récessus supra-patellaire trouvé 2 fois sur 2, dicté seul une fois.',
    'Anisotropie du long biceps prise pour une fissure, corrigée en basculant la sonde.',
    'Coupe 4 impossible ce matin : patient trop douloureux pour la rotation externe.',
    'Les 2 premiers patients du matin, puis un sujet âgé pour la hanche.',
  ];
  for (const p of ok) assert.deepStrictEqual(detecter(p), [], 'devrait passer : ' + p);
});
test('verifierTextes agrège', () => assert.strictEqual(verifierTextes(['rien', 'Mme Dupont']).length, 1));
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/phi-guard.test.js`
Expected: FAIL, module absent

- [ ] **Step 3 : écrire `scripts/lib/phi-guard.js`**

```js
/* Garde-fou données patient : détecte tout ce qui pourrait désigner une personne dans un texte dicté (logbook, questions).
   Volontairement strict : un faux positif coûte une reformulation, un faux négatif met un identifiant dans un fichier.
   Normalisation : minuscules sans accent pour les règles de vocabulaire ; texte brut pour les règles de majuscules (noms propres). */
const norm = s => String(s || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
const REGLES_BRUT = [   // sur le texte d'origine (la majuscule est le signal)
  [/\b(?:M\.|Mme|Mlle|Mr|Mrs|Madame|Mademoiselle|Monsieur|Dr|Pr)\s+[A-ZÀ-Ý][\wÀ-ÿ'-]+/u, 'civilité suivie d\'un nom'],
  [/\b(?:patient|patiente|homme|femme|dame|monsieur|sujet)\s+[A-ZÀ-Ý][a-zà-ÿ'-]{2,}/u, 'nom propre après patient'],
  [/\b(?:la dame|le monsieur|la patiente|le patient|la femme|l'homme|le sujet)\s+(?:de|du|des|d')\s*(?:la\s+chambre|[A-ZÀ-Ý][a-zà-ÿ'-]+)/u, 'personne désignée par un lieu ou une chambre'],
  [/(?:^|[\s(])[A-ZÀ-Ý]\.(?:\s?-?\s?[A-ZÀ-Ý]\.)+(?:\s[A-ZÀ-Ý]\.)?/u, 'initiales'],
  [/\b(?:habite|domicili[ée]e?|vit|réside)\s+(?:à|au|aux|en|dans)\s+[A-ZÀ-Ý]/u, 'lieu de résidence'],
];
const REGLES_NORM = [   // sur le texte normalisé (minuscules, sans accent)
  [/\bmme\s+[a-z]{2,}/, 'civilité suivie d\'un nom'],
  [/\bn[e]{1,2}\s+le\b|\bdate de naissance\b|\bddn\b/, 'date de naissance'],
  [/\b\d{1,2}[\/.-]\d{1,2}[\/.-]\d{2,4}\b/, 'date complète'],
  [/\b(?:chambre|lit|box)\s*(?:n°|no|numero)?\s*\d+/, 'numéro de chambre, de lit ou de box'],
  [/\b(?:ipp|nir|n°\s*de\s*dossier|numero de dossier|n° patient|no patient)\b/, 'identifiant de dossier'],
  [/\b\d(?:[ .]?\d{2}){2}[ .]?\d{2,3}[ .]?\d{3}[ .]?\d{2,3}\b|\b\d{13,15}\b/, 'numéro long (sécurité sociale, dossier)'],
  [/\b\d{1,3}\s*ans\b/, 'âge'],
  [/@|\b0[1-9](?:[ .-]?\d{2}){4}\b/, 'courriel ou téléphone'],
  [/\b(?:profession|travaille\s+(?:a|au|chez|comme|pour))\b/, 'profession ou employeur'],
];
function detecter(texte) {
  const hits = [], brut = String(texte || ''), n = norm(brut);
  for (const [re, motif] of REGLES_BRUT) { const m = re.exec(brut); if (m) hits.push({ motif, extrait: m[0].trim() }); }
  for (const [re, motif] of REGLES_NORM) { const m = re.exec(n); if (m && !hits.some(h => h.motif === motif)) hits.push({ motif, extrait: m[0].trim() }); }
  return hits;
}
const verifierTextes = arr => (arr || []).flatMap(t => detecter(t));
module.exports = { detecter, verifierTextes };
```

- [ ] **Step 4 : lancer le test, ajuster les règles jusqu'au vert, commiter**

Run: `node --test tests/phi-guard.test.js`
Expected: PASS (3 tests). Si une phrase piège passe ou une phrase légitime est refusée, resserrer la règle fautive, jamais retirer la phrase du test.

```bash
git add scripts/lib/phi-guard.js tests/phi-guard.test.js
git commit -m "Garde-fou données patient : détection d'identifiants avant toute écriture du logbook"
```

---

### Task 9b : CLI d'état privé — init, états, logbook

**Files:**
- Create: `scripts/msk-progress.js`
- Test: `tests/msk-progress.test.js`

**Interfaces:**
- Consumes: `loadEcho`, `phi-guard`, fiche MSK de la région (compétences).
- Produces (module et CLI) : `init(repo?) → home`, `etatSet(itemId, palier, source, force?) → { itemId, etat, inchange }`, `etatList(region) → { region, nom, fiche, items: [{ id, type, libelle, niveau, etat, maj }], paliers: [n0..n4] }`, `logbookAdd(entree) → { lignes, maj, questions }` (lève `GuardError` si un identifiant patient est détecté, sans rien écrire). Entrée de logbook : `{ date: 'AAAA-MM-JJ', region, examens?, dictes_seul?, items: [{ id?, libelle?, trouve, difficulte?, dicte_seul? }], questions?: [], commentaire? }`. Dossier : `$ECHO_MSK_HOME` ou `~/Claude/Projects/Écho MSK` ; iCloud : `$ECHO_MSK_ICLOUD` ou `~/Library/Mobile Documents/com~apple~CloudDocs/Écho MSK`. Codes de sortie CLI : 0 ok, 1 erreur, 2 refus du garde-fou.

- [ ] **Step 1 : écrire le test** (la partie 9c l'étendra)

```js
// tests/msk-progress.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
process.env.ECHO_MSK_HOME = fs.mkdtempSync(path.join(os.tmpdir(), 'msk-home-'));
process.env.ECHO_MSK_ICLOUD = fs.mkdtempSync(path.join(os.tmpdir(), 'msk-icloud-'));
const P = require('../scripts/msk-progress');
const ROOT = path.resolve(__dirname, '..');
const H = process.env.ECHO_MSK_HOME;

test('init : arborescence, config, fichiers vides ; idempotent', () => {
  P.init(ROOT); P.init(ROOT);
  for (const f of ['config.json', 'progression.json', 'logbook.md', 'questions.md', 'cas', 'semaines', 'osaus', 'audio', 'anki']) assert.ok(fs.existsSync(path.join(H, f)), f);
  const cfg = JSON.parse(fs.readFileSync(path.join(H, 'config.json'), 'utf8'));
  assert.strictEqual(cfg.repo, ROOT); assert.ok(fs.existsSync(cfg.transfert_anki)); assert.deepStrictEqual(cfg.regions_actives, ['epaule']);
});
test('etat set / list : paliers, jamais d\'abaissement sans --force', () => {
  assert.deepStrictEqual(P.etatSet('epaule.c01', 1, 'fiche'), { itemId: 'epaule.c01', etat: 1, inchange: false });
  assert.deepStrictEqual(P.etatSet('epaule.c01', 3, 'logbook').etat, 3);
  assert.deepStrictEqual(P.etatSet('epaule.c01', 2, 'cas'), { itemId: 'epaule.c01', etat: 3, inchange: true });
  assert.strictEqual(P.etatSet('epaule.c01', 1, 'correction', true).etat, 1);
  assert.throws(() => P.etatSet('epaule.x01', 1), /identifiant invalide/); assert.throws(() => P.etatSet('epaule.c01', 5), /palier/);
  const l = P.etatList('epaule');
  assert.strictEqual(l.nom, 'Épaule'); assert.ok(l.fiche); assert.strictEqual(l.items.find(i => i.id === 'epaule.c01').etat, 1); assert.strictEqual(l.paliers.reduce((a, b) => a + b), l.items.length);
});
test('logbook add : refus sans écriture, puis entrée légitime, états et questions', () => {
  const avant = fs.readFileSync(path.join(H, 'logbook.md'), 'utf8');
  assert.throws(() => P.logbookAdd({ date: '2026-10-13', region: 'epaule', items: [{ id: 'epaule.s01', trouve: true }], commentaire: 'Mme Dupont très algique' }), P.GuardError);
  assert.strictEqual(fs.readFileSync(path.join(H, 'logbook.md'), 'utf8'), avant, 'rien écrit après un refus');
  const r = P.logbookAdd({ date: '2026-10-13', region: 'epaule', examens: 3, dictes_seul: 1, items: [{ id: 'epaule.s01', trouve: true, difficulte: 2 }, { id: 'epaule.c01', trouve: true, dicte_seul: true }, { libelle: 'infra-épineux en grand axe', trouve: false, difficulte: 3 }], questions: ['Comment dégager l\'infra-épineux ?'] });
  assert.strictEqual(r.questions, 1);
  const log = fs.readFileSync(path.join(H, 'logbook.md'), 'utf8');
  assert.match(log, /## 2026-10-13 — Épaule/); assert.match(log, /dictés sans aide : 1/); assert.match(log, /\(hors carte\) infra-épineux/);
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.s01').etat, 3);
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.c01').etat, 4);
  assert.match(fs.readFileSync(path.join(H, 'questions.md'), 'utf8'), /- \[ \] 2026-10-13 \(epaule\) : Comment dégager/);
  P.logbookAdd({ date: '2026-10-14', region: 'epaule', items: [{ id: 'epaule.s01', trouve: false }] });
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.s01').etat, 3, 'un « non trouvé » n\'abaisse pas le palier');
  assert.throws(() => P.logbookAdd({ region: 'epaule', items: [] }), /date/);
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/msk-progress.test.js`
Expected: FAIL, module absent

- [ ] **Step 3 : écrire `scripts/msk-progress.js`** (partie 1 ; la tâche 9c ajoute plan, bilan, cas, audio avant la ligne `module.exports`)

```js
/* CLI d'état privé du volet MSK (spec §8-9). Dossier : $ECHO_MSK_HOME ou ~/Claude/Projects/Écho MSK — jamais dans le dépôt.
   node scripts/msk-progress.js init [--repo <dépôt>]
   node scripts/msk-progress.js etat set <itemId> <palier 0-4> <source> [--force]
   node scripts/msk-progress.js etat list <region>
   node scripts/msk-progress.js logbook add --json '<entrée>' | --file <entrée.json>
   node scripts/msk-progress.js plan <region>
   node scripts/msk-progress.js bilan <region> --osaus 1,2,3,4,5,4,3 [--note "…"]
   node scripts/msk-progress.js cas pick <region> | cas record <itemId> su|pas-su [--fichier <chemin>]
   node scripts/msk-progress.js audio ecoute <fichier>
   Sortie JSON. Codes : 0 ok · 1 erreur · 2 refus du garde-fou données patient (rien n'est écrit).
   Les skills de coaching passent par ces commandes et n'écrivent jamais le dossier privé elles-mêmes. */
const fs = require('fs'), os = require('os'), path = require('path');
const { verifierTextes } = require('./lib/phi-guard');
const { loadEcho } = require('./lib/load-echo');
const slug = require('./lib/slug');
const HOME = () => process.env.ECHO_MSK_HOME || path.join(os.homedir(), 'Claude/Projects/Écho MSK');
const ICLOUD = () => process.env.ECHO_MSK_ICLOUD || path.join(os.homedir(), 'Library/Mobile Documents/com~apple~CloudDocs/Écho MSK');
const today = () => new Date().toISOString().slice(0, 10);
const P = f => path.join(HOME(), f);
const readJson = (f, d) => fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : d;
const writeJson = (f, o) => fs.writeFileSync(f, JSON.stringify(o, null, 1) + '\n');
const ID_RE = /^([a-z-]+)\.([cspdag])(\d{2})$/;
class GuardError extends Error { constructor(hits) { super('données patient détectées : ' + hits.map(h => `${h.motif} (« ${h.extrait} »)`).join(' ; ')); this.hits = hits; } }

function init(repo) {
  const home = HOME();
  for (const d of ['', 'cas', 'semaines', 'osaus', 'audio', 'anki']) fs.mkdirSync(path.join(home, d), { recursive: true });
  if (!fs.existsSync(P('config.json'))) writeJson(P('config.json'), { repo: path.resolve(repo || path.join(__dirname, '..')), transfert_anki: path.join(ICLOUD(), 'anki'), transfert_audio: path.join(ICLOUD(), 'audio'), regions_actives: ['epaule'] });
  const cfg = readJson(P('config.json'));
  for (const d of [cfg.transfert_anki, cfg.transfert_audio]) fs.mkdirSync(d, { recursive: true });
  if (!fs.existsSync(P('progression.json'))) writeJson(P('progression.json'), { items: {}, audio: {} });
  if (!fs.existsSync(P('logbook.md'))) fs.writeFileSync(P('logbook.md'), '# Logbook — pratique délibérée, écho MSK\n\nUne entrée par journée d\'HDJ, structurée, sans aucune donnée patient (garde-fou : scripts/lib/phi-guard.js du dépôt).\n');
  if (!fs.existsSync(P('questions.md'))) fs.writeFileSync(P('questions.md'), '# Questions ouvertes\n\n');
  return home;
}
const config = () => { const c = readJson(P('config.json'), null); if (!c) throw new Error(`dossier privé non initialisé (${HOME()}) : node scripts/msk-progress.js init`); return c; };
const progression = () => readJson(P('progression.json'), { items: {}, audio: {} });
const fiche = region => { const E = loadEcho({ msk: true }, config().repo); return { f: E.msk[region], nom: ((E.mskRegions || []).find(r => r.id === region) || {}).nom || region }; };

function etatSet(itemId, palier, source, force) {
  if (!ID_RE.test(itemId || '')) throw new Error('identifiant invalide : ' + itemId);
  palier = Number(palier); if (!Number.isInteger(palier) || palier < 0 || palier > 4) throw new Error('palier : entier de 0 à 4');
  const pr = progression(), it = pr.items[itemId] || { etat: 0, maj: null, historique: [] };
  if (palier < it.etat && !force) return { itemId, etat: it.etat, inchange: true };
  it.etat = palier; it.maj = today(); it.historique.push([today(), palier, source || 'manuel']);
  pr.items[itemId] = it; writeJson(P('progression.json'), pr);
  return { itemId, etat: palier, inchange: false };
}
function etatList(region) {
  const { f, nom } = fiche(region), pr = progression();
  const items = (f ? f.competences : []).map(c => { const s = pr.items[c.id] || { etat: 0, maj: null }; return { id: c.id, type: c.type, libelle: c.libelle, niveau: c.niveau, etat: s.etat, maj: s.maj }; });
  const paliers = [0, 0, 0, 0, 0]; items.forEach(i => paliers[i.etat]++);
  return { region, nom, fiche: !!f, items, paliers };
}
function logbookAdd(entry) {
  if (!entry || !entry.region || !/^\d{4}-\d{2}-\d{2}$/.test(entry.date || '')) throw new Error('entrée : date (AAAA-MM-JJ) et region obligatoires');
  const hits = verifierTextes([entry.commentaire, ...(entry.questions || []), ...(entry.items || []).map(i => i.libelle)].filter(Boolean));
  if (hits.length) throw new GuardError(hits);
  const { f, nom } = fiche(entry.region), lib = id => (((f || {}).competences || []).find(c => c.id === id) || {}).libelle || '';
  for (const it of entry.items || []) if (it.id && !ID_RE.test(it.id)) throw new Error('identifiant invalide : ' + it.id);
  const lignes = [`## ${entry.date} — ${nom}`], maj = [];
  if (entry.examens != null) lignes.push(`- Examens : ${entry.examens}${entry.dictes_seul != null ? ` ; dictés sans aide : ${entry.dictes_seul}` : ''}`);
  for (const it of entry.items || []) {
    const diff = it.difficulte != null ? `, difficulté ${it.difficulte}` : '';
    if (it.id) { lignes.push(`- ${it.id} ${lib(it.id)} : ${it.trouve ? 'trouvé' : 'non trouvé'}${it.dicte_seul ? ', dicté seul' : ''}${diff}`); if (it.trouve) maj.push(etatSet(it.id, it.dicte_seul ? 4 : 3, 'logbook')); }
    else lignes.push(`- (hors carte) ${it.libelle || '?'} : ${it.trouve ? 'trouvé' : 'non trouvé'}${diff}`);
  }
  if (entry.commentaire) lignes.push(`- Note : ${entry.commentaire}`);
  if ((entry.questions || []).length) { lignes.push(`- Questions : ${entry.questions.join(' · ')}`); fs.appendFileSync(P('questions.md'), entry.questions.map(q => `- [ ] ${entry.date} (${entry.region}) : ${q}\n`).join('')); }
  fs.appendFileSync(P('logbook.md'), '\n' + lignes.join('\n') + '\n');
  return { lignes: lignes.length - 1, maj, questions: (entry.questions || []).length };
}

/* ---- tâche 9c : plan, bilan, cas, audio (insérer ici) ---- */

const USAGE = fs.readFileSync(__filename, 'utf8').split('*/')[0].split('\n').slice(1).map(l => l.trim()).join('\n');
if (require.main === module) {
  const a = process.argv.slice(2), opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
  const out = o => console.log(typeof o === 'string' ? o : JSON.stringify(o, null, 1));
  const cmd = a[0] + (['etat', 'cas', 'audio', 'logbook'].includes(a[0]) && a[1] ? ' ' + a[1] : '');
  try {
    switch (cmd) {
      case 'init': out(`dossier privé prêt : ${init(opt('--repo'))}`); break;
      case 'etat set': out(etatSet(a[2], a[3], a[4], a.includes('--force'))); break;
      case 'etat list': out(etatList(a[2])); break;
      case 'logbook add': out(logbookAdd(opt('--file') ? readJson(opt('--file')) : JSON.parse(opt('--json', '{}')))); break;
      case 'plan': out(plan(a[1])); break;
      case 'bilan': out(bilan(a[1], opt('--osaus', '').split(',').map(Number), opt('--note', ''))); break;
      case 'cas pick': out(casPick(a[2])); break;
      case 'cas record': out(casRecord(a[2], a[3], opt('--fichier'))); break;
      case 'audio ecoute': out(audioEcoute(a[2])); break;
      default: console.log(USAGE); process.exit(1);
    }
  } catch (e) { console.error((e instanceof GuardError ? 'REFUS — ' : 'ERREUR — ') + e.message); process.exit(e instanceof GuardError ? 2 : 1); }
}
module.exports = { init, etatSet, etatList, logbookAdd, GuardError, HOME, P, progression, config, fiche, readJson, writeJson, today, slug };
```

(Le `switch` référence `plan`, `bilan`, `casPick`, `casRecord`, `audioEcoute` définis à la tâche 9c ; d'ici là, les lancer depuis la ligne de commande donne `ReferenceError` et c'est attendu.)

- [ ] **Step 4 : lancer le test, commiter**

Run: `node --test tests/msk-progress.test.js`
Expected: PASS (3 tests)

```bash
git add scripts/msk-progress.js tests/msk-progress.test.js
git commit -m "msk-progress : dossier privé (init), paliers de compétence, logbook avec garde-fou données patient"
```

---

### Task 9c : CLI d'état privé — plan de semaine, bilan OSAUS, cas, audio

**Files:**
- Modify: `scripts/msk-progress.js` (bloc « tâche 9c » et `module.exports`)
- Test: `tests/msk-progress.test.js` (ajout)

**Interfaces:**
- Produces: `plan(region) → { mode: 'socle'|'fiche', region, nom, cibles: [≤3 compétences coupe/structure/dynamique au palier ≤ 2], cas: [≤2 compétences pathologie/piege au palier ≤ 2], audios: [{ fichier, ecoute }], anki: { fichier, modifie }|null, questions: [], paliers, critere: { dictes_sans_aide, osaus, atteint } }` ; `bilan(region, items[7], note) → { fichier, critere, paliers }` (écrit `osaus/AAAA-MM.json`) ; `casPick(region) → { source: 'question', texte } | { source: 'item', item, etat, image, vignette, pathologie }` ; `casRecord(itemId, 'su'|'pas-su', fichier?)` ; `audioEcoute(fichier)`.

- [ ] **Step 1 : étendre le test**

```js
// à ajouter à la fin de tests/msk-progress.test.js
test('plan : mode fiche sur l\'épaule, cibles et cas triés par palier, audio et anki détectés', () => {
  fs.writeFileSync(path.join(H, 'audio/epaule-socle-deep-dive.mp3'), ''); fs.writeFileSync(path.join(H, 'audio/genou-x.mp3'), '');
  const cfg = JSON.parse(fs.readFileSync(path.join(H, 'config.json'), 'utf8')); fs.writeFileSync(path.join(cfg.transfert_anki, 'msk-epaule.apkg'), '');
  const p = P.plan('epaule');
  assert.strictEqual(p.mode, 'fiche'); assert.ok(p.cibles.length <= 3); assert.ok(p.cas.length >= 1 && p.cas.length <= 2);
  assert.ok(p.cibles.every(c => ['coupe', 'structure', 'dynamique'].includes(c.type) && c.etat <= 2));
  assert.ok(!p.cibles.some(c => c.id === 'epaule.c01'), 'c01 est au palier 4 : pas une cible');
  assert.deepStrictEqual(p.audios.map(a => a.fichier), ['epaule-socle-deep-dive.mp3']); assert.ok(p.anki && p.anki.fichier.endsWith('msk-epaule.apkg'));
  assert.strictEqual(p.questions.length, 1); assert.strictEqual(p.critere.atteint, false); assert.strictEqual(p.critere.dictes_sans_aide, 1);
  assert.strictEqual(P.plan('genou').mode, 'socle');
});
test('bilan OSAUS : fichier mensuel, critère de passage', () => {
  assert.throws(() => P.bilan('epaule', [1, 2, 3], ''), /sept notes/);
  const b = P.bilan('epaule', [4, 4, 3, 4, 5, 4, 3], 'premier bilan');
  const f = path.join(H, 'osaus', b.fichier); assert.ok(fs.existsSync(f));
  assert.deepStrictEqual(JSON.parse(fs.readFileSync(f, 'utf8')).epaule.items, [4, 4, 3, 4, 5, 4, 3]);
  assert.strictEqual(b.critere.atteint, false, '10 examens dictés requis'); assert.deepStrictEqual(b.critere.osaus.items.slice(3, 6), [4, 5, 4]);
});
test('cas : pick (question d\'abord, puis item), record', () => {
  let c = P.casPick('epaule'); assert.strictEqual(c.source, 'question'); assert.match(c.texte, /infra-épineux/);
  fs.writeFileSync(path.join(H, 'questions.md'), '# Questions ouvertes\n\n- [x] 2026-10-13 (epaule) : traitée\n');
  c = P.casPick('epaule'); assert.strictEqual(c.source, 'item'); assert.ok(['pathologie', 'piege'].includes(c.item.type));
  if (c.item.type === 'pathologie') { assert.ok(c.pathologie && c.pathologie.nom); }
  const r = P.casRecord(c.item.id, 'su', 'cas/2026-10-15-test.md'); assert.strictEqual(r.etat, 2);
  assert.strictEqual(P.casRecord(c.item.id, 'pas-su').etat, 2, 'pas-su ne change pas le palier');
  assert.throws(() => P.casRecord(c.item.id, 'bof'), /su ou pas-su/);
});
test('audio ecoute', () => { assert.strictEqual(P.audioEcoute('epaule-socle-deep-dive.mp3').ecoute.length, 10); assert.ok(P.plan('epaule').audios[0].ecoute); });
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/msk-progress.test.js`
Expected: FAIL, `disponible à la tâche 9c` (stubs de la tâche 9b)

- [ ] **Step 3 : insérer le bloc dans `scripts/msk-progress.js`** à la place du commentaire `/* ---- tâche 9c … ---- */` **et des lignes de stubs** (`plan`, `bilan`, `casPick`, `casRecord`, `audioEcoute` lèvent « disponible à la tâche 9c » depuis la tâche 9b : les supprimer, sinon « Identifier 'plan' has already been declared »), puis compléter `module.exports` avec `plan, bilan, casPick, casRecord, audioEcoute` (ils y figurent peut-être déjà comme stubs)

```js
const questionsOuvertes = () => fs.existsSync(P('questions.md')) ? fs.readFileSync(P('questions.md'), 'utf8').split('\n').filter(l => l.startsWith('- [ ] ')).map(l => l.slice(6)) : [];
/* critère de passage à la région suivante (spec §1) : 10 examens dictés sans aide, OSAUS ≥ 4 aux items 4, 5 et 6 du dernier bilan */
function critere(region, nom) {
  const log = fs.existsSync(P('logbook.md')) ? fs.readFileSync(P('logbook.md'), 'utf8') : '';
  const dictes = log.split(/\n(?=## )/).filter(b => b.split('\n')[0].endsWith(` — ${nom}`)).reduce((n, b) => n + Number((b.match(/dictés sans aide : (\d+)/) || [0, 0])[1]), 0);
  const files = fs.existsSync(P('osaus')) ? fs.readdirSync(P('osaus')).filter(x => x.endsWith('.json')).sort().reverse() : [];
  let osaus = null; for (const x of files) { const o = readJson(P(path.join('osaus', x)), {}); if (o[region]) { osaus = Object.assign({ fichier: x }, o[region]); break; } }
  return { dictes_sans_aide: dictes, osaus, atteint: dictes >= 10 && !!osaus && [3, 4, 5].every(i => osaus.items[i] >= 4) };
}
function plan(region) {
  const cfg = config(), { f, nom } = fiche(region), pr = progression();
  const audios = fs.readdirSync(P('audio')).filter(x => x.startsWith(region + '-') && /\.(mp3|m4a|wav)$/i.test(x)).sort().map(x => ({ fichier: x, ecoute: pr.audio[x] || null }));
  const apkg = path.join(cfg.transfert_anki, `msk-${region}.apkg`), anki = fs.existsSync(apkg) ? { fichier: apkg, modifie: fs.statSync(apkg).mtime.toISOString().slice(0, 10) } : null;
  const questions = questionsOuvertes().filter(q => q.includes(`(${region})`));
  if (!f) return { mode: 'socle', region, nom, cibles: [], cas: [], audios, anki, questions, note: `pas encore de fiche MSK pour ${nom} : plan socle — audio, cartes des fiches gestes, et trois cibles à choisir dans les sections Sono-anatomie de ces fiches` };
  const etat = id => (pr.items[id] || { etat: 0 }).etat;
  const tri = types => f.competences.map((c, i) => ({ c, i })).filter(x => types.includes(x.c.type)).sort((a, b) => etat(a.c.id) - etat(b.c.id) || a.i - b.i).map(x => Object.assign({ etat: etat(x.c.id) }, x.c));
  return { mode: 'fiche', region, nom, cibles: tri(['coupe', 'structure', 'dynamique']).filter(c => c.etat <= 2).slice(0, 3), cas: tri(['pathologie', 'piege']).filter(c => c.etat <= 2).slice(0, 2), audios, anki, questions, paliers: etatList(region).paliers, critere: critere(region, nom) };
}
function bilan(region, items, note) {
  if (!Array.isArray(items) || items.length !== 7 || items.some(n => !Number.isInteger(n) || n < 1 || n > 5)) throw new Error('OSAUS : sept notes entières de 1 à 5 (indication, appareil, image, examen systématique, interprétation, documentation, décision)');
  const { nom } = fiche(region), fichier = today().slice(0, 7) + '.json', f = P(path.join('osaus', fichier)), o = readJson(f, {});
  o[region] = { items, note: note || '', date: today(), grille: 'OSAUS (Tolsgaard et coll., 2013) : indication, appareil, image, examen systématique, interprétation, documentation, décision — libellés à reprendre de la publication au premier bilan' }; writeJson(f, o);
  return { fichier, critere: critere(region, nom), paliers: etatList(region).paliers };
}
function casPick(region) {
  const q = questionsOuvertes().filter(x => x.includes(`(${region})`)); if (q.length) return { source: 'question', texte: q[0] };
  const cfg = config(), { f } = fiche(region); if (!f) throw new Error(`pas de fiche MSK pour ${region}`);
  const pr = progression(), etat = id => (pr.items[id] || { etat: 0 }).etat;
  const c = f.competences.map((c, i) => ({ c, i })).filter(x => ['pathologie', 'piege'].includes(x.c.type)).sort((a, b) => etat(a.c.id) - etat(b.c.id) || a.i - b.i)[0];
  if (!c) throw new Error('aucune compétence pathologie ou piège dans la fiche');
  const p = c.c.type === 'pathologie' ? (f.pathologies || []).find(x => slug(x.nom) === c.c.patho) || null : null;
  const img = p && p.image && p.image.src ? path.join(cfg.repo, p.image.src) : null;
  return { source: 'item', item: c.c, etat: etat(c.c.id), image: img, vignette: p ? p.vignette || '' : '', pathologie: p ? { nom: p.nom, en: p.en, signes: p.signes, conduite: p.conduite, gestes: p.gestes || [] } : null };
}
function casRecord(itemId, verdict, fichier) {
  if (!['su', 'pas-su'].includes(verdict)) throw new Error('verdict : su ou pas-su');
  if (verdict === 'su') return Object.assign(etatSet(itemId, 2, 'cas:su'), { fichier: fichier || null });
  if (!ID_RE.test(itemId || '')) throw new Error('identifiant invalide : ' + itemId);
  const pr = progression(), it = pr.items[itemId] || { etat: 0, maj: null, historique: [] };
  it.historique.push([today(), it.etat, 'cas:pas-su']); pr.items[itemId] = it; writeJson(P('progression.json'), pr);
  return { itemId, etat: it.etat, inchange: true, fichier: fichier || null };
}
function audioEcoute(fichier) { const pr = progression(); pr.audio[fichier] = today(); writeJson(P('progression.json'), pr); return { fichier, ecoute: pr.audio[fichier] }; }
```

- [ ] **Step 4 : lancer les tests, essayer le CLI, commiter**

Run: `node --test tests/msk-progress.test.js`
Expected: PASS (7 tests)

Run: `ECHO_MSK_HOME=/tmp/msk-demo ECHO_MSK_ICLOUD=/tmp/msk-demo-icloud node scripts/msk-progress.js init && ECHO_MSK_HOME=/tmp/msk-demo node scripts/msk-progress.js plan epaule | head -20 && ECHO_MSK_HOME=/tmp/msk-demo node scripts/msk-progress.js logbook add --json '{"date":"2026-10-13","region":"epaule","items":[{"libelle":"Mme Dupont"}]}'; echo "code $?"`
Expected: plan en mode `fiche` ; la dernière commande affiche `REFUS — données patient détectées …` et `code 2`

```bash
git add scripts/msk-progress.js tests/msk-progress.test.js
git commit -m "msk-progress : plan de semaine, bilan OSAUS et critère de passage, cas raisonnés, audio écouté"
```

---

### Task 10 : skills de production et de coaching, installeur

**Files:**
- Create: `.claude/skills/msk-fiche/SKILL.md`, `.claude/skills/msk-anki/SKILL.md`, `.claude/skills/msk-audio/SKILL.md`, `.claude/skills-global/msk-semaine/SKILL.md`, `.claude/skills-global/msk-cas/SKILL.md`, `.claude/skills-global/msk-logbook/SKILL.md`, `scripts/msk-skills-install.js`
- Test: `tests/msk-skills.test.js`

**Interfaces:**
- Consumes: CLI `msk-progress.js`, `msk-export.js`, `build.py`, `check.py`, outils MCP NotebookLM (`notebook_list`, `notebook_create`, `source_add`, `studio_create`, `studio_status`, `download_artifact`).
- Produces: six skills ; `installer(target?) → [chemins]` copie `.claude/skills-global/*` vers `~/.claude/skills/` (ou `$MSK_SKILLS_TARGET`), idempotent.

- [ ] **Step 1 : écrire le test**

```js
// tests/msk-skills.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const ROOT = path.resolve(__dirname, '..');
const { installer } = require('../scripts/msk-skills-install');

test('six skills avec frontmatter name/description cohérent', () => {
  const dirs = [['.claude/skills', ['msk-fiche', 'msk-anki', 'msk-audio']], ['.claude/skills-global', ['msk-semaine', 'msk-cas', 'msk-logbook']]];
  for (const [base, names] of dirs) for (const n of names) {
    const txt = fs.readFileSync(path.join(ROOT, base, n, 'SKILL.md'), 'utf8');
    const m = /^---\nname: ([a-z-]+)\ndescription: (.+)\n---\n/.exec(txt);
    assert.ok(m, 'frontmatter : ' + n); assert.strictEqual(m[1], n); assert.ok(m[2].length > 60 && m[2].length < 500, 'description : ' + n);
    assert.ok(txt.includes('msk-progress.js') || txt.includes('msk-export.js') || txt.includes('msk-audit.js') || txt.includes('studio_create'), 'la skill nomme son outil : ' + n);
  }
});
test('installeur : copie idempotente des trois skills globales', () => {
  const target = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-'));
  const a = installer(target), b = installer(target);
  assert.deepStrictEqual(a.map(p => path.basename(p)).sort(), ['msk-cas', 'msk-logbook', 'msk-semaine']); assert.deepStrictEqual(a, b);
  for (const d of a) assert.ok(fs.existsSync(path.join(d, 'SKILL.md')));
});
```

- [ ] **Step 2 : lancer le test, il doit échouer**

Run: `node --test tests/msk-skills.test.js`
Expected: FAIL, module `msk-skills-install` absent

- [ ] **Step 3 : écrire l'installeur**

```js
// scripts/msk-skills-install.js
/* Copie les skills de coaching (source versionnée : .claude/skills-global/) vers ~/.claude/skills/ (ou $MSK_SKILLS_TARGET).
   Idempotent : écrase la copie précédente. À relancer après toute modification d'une skill globale. node scripts/msk-skills-install.js */
const fs = require('fs'), os = require('os'), path = require('path');
const SRC = path.join(__dirname, '../.claude/skills-global');
function installer(target) {
  target = target || process.env.MSK_SKILLS_TARGET || path.join(os.homedir(), '.claude/skills');
  const done = [];
  for (const name of fs.readdirSync(SRC).filter(n => fs.statSync(path.join(SRC, n)).isDirectory()).sort()) {
    const dst = path.join(target, name);
    fs.rmSync(dst, { recursive: true, force: true }); fs.cpSync(path.join(SRC, name), dst, { recursive: true }); done.push(dst);
  }
  return done;
}
if (require.main === module) installer().forEach(d => console.log('installée : ' + d));
module.exports = { installer };
```

- [ ] **Step 4 : écrire les trois skills de production** (projet)

`.claude/skills/msk-fiche/SKILL.md` :
```markdown
---
name: msk-fiche
description: Produire ou refondre la fiche « Diagnostic MSK » d'une région (js/data/msk/<region>.js) — protocole ESSR en coupes, images libres à marqueurs, sono-anatomie sourcée, pathologies reliées aux gestes, checklist de dictée, carte de compétences — puis audit, captures, commit en valide:false.
---
Argument : une région parmi epaule, genou, rachis, coude, poignet-main, hanche, cheville-pied, paroi-nerfs.

Guides techniques ESSR (2010) : epaule → https://essr.org/content-essr/uploads/2016/10/shoulder.pdf · coude → …/elbow.pdf · poignet-main → …/wrist.pdf · hanche → …/hip.pdf · genou → …/knee.pdf · cheville-pied → …/ankle.pdf. Rachis et paroi-nerfs : pas de guide ESSR, sono-anatomie publiée en accès ouvert, à dire dans `resume`. Périmètre convenu du rachis : repérage (épineuses, lames, facettes, sacrum, plan ESP), sacro-iliaque, facettes, muscles paravertébraux, bursite interépineuse ; le reste du diagnostic rachidien relève de l'IRM et la fiche l'écrit.

Étapes, aucune n'est optionnelle :
1. Lire la spec (docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md §4-5, §11-12), GUIDE-REDACTION.md (ton, sourçage), la fiche étalon js/data/msk/epaule.js, et la fiche actuelle de la région si elle existe. Relever les fiches gestes de la région dans js/data/registry.js → champ `gestes`.
2. Sourcer avant d'écrire, en une passe, dans docs/msk/sources-<region>.md :
   - le PDF ESSR (WebFetch) : coupes du protocole dans l'ordre, position, repère, structures → ossature de `protocole` ;
   - pathologies attendues au niveau 1 EFSUMB et au cours EULAR de base, filtrées douleur chronique (dégénératif, tendineux, bursal, nerveux, articulaire) : 6 à 12 par région, chacune avec une ou deux références vues (titre, revue, année ; DOI seulement s'il a été vu) ;
   - images : `node scripts/echo-search.js "<region> ultrasound <structure>" 8` par coupe puis par pathologie ; retenir CC BY, CC BY-NC ou CC0 (jamais ND ni SA), ≥ 350 px utiles, annotations des auteurs cohérentes avec l'anatomie ; `--get` vers img/msk/<region>/ puis renommer `coupe-<n>.jpg` ou `patho-<slug>.jpg` ; auteurs recoupés par `authorString`, licence lue dans la balise `<license>` ;
   - vidéos : les liens `videos` des fiches gestes de la région, plus une ou deux vidéos de protocole normal, chacune ouverte dans le navigateur, jamais devinée.
   Rien n'entre dans la fiche qui ne figure dans sources-<region>.md.
3. Rédiger par trois agents au plus, sur des parties disjointes, chacun lisant la fiche étalon et sources-<region>.md : (a) flash, protocole, images et marqueurs (fractions de l'image recadrée, dx/dy pour écarter l'étiquette de la structure) ; (b) pathologies (nom, en, vignette d'HDJ fictive, signes, pieges, conduite, gestes ou aucunGeste, image) et artefacts (nom, texte, question, reponse) ; (c) sonoanatomie (mesures sourcées), dictee (compte rendu type d'un examen normal, chiffres repris de sonoanatomie.mesure), competences (10 à 15, ids <region>.<lettre><nn>, `patho` sur les items pathologie), references (verif), videos. Assembler dans js/data/msk/<region>.js avec `valide: false`.
4. Contrôler : `node scripts/build-index.js` ; `node scripts/msk-audit.js <region>` → 0 erreur ; capture de chaque image à marqueurs : `NODE_PATH=$(npm root -g) node scripts/shot.js '#/msk/<region>/protocole' /tmp/c.png light '.fig' <n>` puis lire le PNG (un tiers des étiquettes est faux au premier jet) ; `NODE_PATH=$(npm root -g) node scripts/check-all.js` → 0 problème ; `NODE_PATH=$(npm root -g) node --test tests/*.test.js` → vert.
5. Commit en français, `git fetch origin && git rebase --autostash origin/main`, push. Enchaîner `/msk-anki <region>` puis `/msk-audio <region>`.
6. Rapport : coupes, pathologies, cartes attendues, références (dont verif:false), questions précises pour Mat, coût en quota observé à noter dans PROCHAINE-SESSION.md. Jamais `valide: true` sans sa décision explicite dans la conversation.
```

`.claude/skills/msk-anki/SKILL.md` :
```markdown
---
name: msk-anki
description: Générer le paquet Anki d'une région (cartes de la fiche MSK et des fiches gestes de la région), le vérifier, le copier vers l'iPhone via iCloud et dire à Mat comment l'importer dans Avorio.
---
Argument : une région (ou `all` : chaque région qui a une fiche MSK). Durée : une à deux minutes par région.
1. `NODE_PATH=$(npm root -g) node scripts/msk-export.js <region>` (sans fiche MSK : ajouter `--gestes id,id,…`). Noter le nombre N de cartes affiché.
2. `scripts/anki/.venv/bin/python scripts/anki/build.py <region> --copy`
3. `scripts/anki/.venv/bin/python scripts/anki/check.py dist/anki/msk-<region>.apkg N` → code 0, aucun média manquant.
4. Lire deux JPEG de dist/msk/img/<region>/ (un recto, un verso) : pastilles lisibles, lignes sur la structure ; sinon corriger dx/dy dans la fiche et relancer.
5. Dire à Mat : cartes par type, chemin dans iCloud Drive (Écho MSK → anki → msk-<region>.apkg), import dans Avorio (Importer → Fichiers → iCloud Drive → Écho MSK → anki). Une réimportation met les cartes à jour sans perdre la planification : GUID stables tant que les `key` des cartes ne changent pas — ne jamais les renommer.
```

`.claude/skills/msk-audio/SKILL.md` :
```markdown
---
name: msk-audio
description: Créer ou mettre à jour le carnet NotebookLM d'une région et produire ses deux épisodes audio en français (deep dive, rappel oral), puis les déposer dans le dossier privé et sur iCloud pour l'iPhone ; une seule attente, jamais de polling.
---
Argument : une région. Prérequis : `NODE_PATH=$(npm root -g) node scripts/msk-export.js <region>` récent (dist/msk/<region>-digest.md à jour). Outils : MCP NotebookLM (`notebook_list`, `notebook_create`, `source_add`, `studio_create`, `studio_status`, `download_artifact`).
1. Carnet : `notebook_list` ; sans carnet « Écho MSK — <Nom> », `notebook_create` avec ce titre. Noter son id.
2. Sources (`source_add`, `wait: true`, sans doublon avec les sources déjà listées) : (a) `text` = contenu de dist/msk/<region>-digest.md, titre « Fiche <Nom> (mémo) » ; (b) `url` = PDF ESSR de la région s'il existe (tableau de /msk-fiche) ; (c) `url` = deux à quatre articles en accès ouvert pris dans `references` avec verif:true (https://doi.org/<doi>) ; (d) `url` = les URL YouTube de `videos` de la fiche et des fiches gestes de la région.
3. Épisode 1 — `studio_create` : artifact_type `audio`, audio_format `deep_dive`, audio_length `default`, language `fr`, title « <Nom> — deep dive », custom_prompt : « Public : médecin algologue expérimenté qui apprend l'échographie diagnostique de la région <nom>. Suivre l'ordre du protocole d'examen de la fiche, coupe par coupe : position, repère, structures attendues, manœuvre dynamique, pièges ; puis les pathologies avec leurs signes clés et la conduite ; terminer par la dictée d'un examen normal. Terminologie française, terme anglais cité une fois. Pas de vulgarisation, pas de digression, pas de conseil de prudence générique. » `confirm: true` — autorisé par la validation du plan par Mat le 7 octobre 2026.
4. Épisode 2 — même appel, title « <Nom> — rappel oral », custom_prompt : « Format de révision orale pour un médecin expérimenté : poser une question courte (une pathologie, un signe, une coupe ou un piège de la région <nom>), marquer une pause de trois secondes, puis donner la réponse en deux phrases. Vingt questions, de la plus fréquente à la plus rare. Pas de vulgarisation. » Si l'épisode obtenu ignore les pauses, le remplacer par un deep dive avec focus_prompt « pathologies et pièges de la région <nom> ».
5. Une seule attente : faire autre chose, puis `studio_status` au plus cinq minutes après. Prêt → `download_artifact` (`audio`) vers « ~/Claude/Projects/Écho MSK/audio/<region>-deep-dive.mp3 » et « …/<region>-rappel.mp3 », puis copie dans `transfert_audio` de config.json. Pas prêt → rendre la main et annoncer que le téléchargement se fera à la session suivante (ne pas relancer la génération).
6. Dire à Mat où écouter (iPhone : Fichiers → iCloud Drive → Écho MSK → audio) et rappeler que la fiche validée reste la référence, pas l'audio.
```

- [ ] **Step 5 : écrire les trois skills de coaching** (source versionnée, installée globalement)

`.claude/skills-global/msk-semaine/SKILL.md` :
```markdown
---
name: msk-semaine
description: Plan de la semaine d'apprentissage écho MSK (lundi, 2 min) — audio du trajet, deux sessions du soir, trois cibles à chercher sur les patients, questions en attente ; avec --bilan, grille OSAUS mensuelle et critère de passage. Lit et écrit l'état uniquement via scripts/msk-progress.js.
---
Durée annoncée : 2 min, sans recherche web. Dossier privé : ~/Claude/Projects/Écho MSK (config.json → `repo`, `regions_actives`).
1. Pour chaque région active : `node <repo>/scripts/msk-progress.js plan <region>` (JSON).
2. Écrire `~/Claude/Projects/Écho MSK/semaines/<AAAA>-W<nn>.md` (semaine ISO du lundi) et l'afficher, une page :
   - **Trajet** : épisodes de `audios` non marqués écoutés (chemin iCloud Drive → Écho MSK → audio) ; aucun → le dire et proposer `/msk-audio <region>`.
   - **Soirs, 2 × 15 min** : les items de `cas` (libellé, palier) → `/msk-cas <region>`.
   - **Sur site, trois cibles** : les items de `cibles` reformulés en consigne concrète (« sur chaque épaule : chercher le sous-scapulaire en rotation externe, noter trouvé ou non, difficulté 1 à 3 »). En mode `socle` : trois structures prises dans les sections Sono-anatomie des fiches gestes de la région.
   - **Questions en attente**, **Anki** (date du paquet ; rappeler l'import s'il est plus récent que le plan précédent), **Paliers** (distribution 0 à 4).
3. `--bilan` (mensuel) : demander à Mat les sept notes OSAUS de 1 à 5 par région active — indication de l'examen, connaissance de l'appareil, optimisation de l'image, examen systématique, interprétation, documentation, décision médicale — puis `node <repo>/scripts/msk-progress.js bilan <region> --osaus n,n,n,n,n,n,n --note "…"`. Afficher `critere` : atteint → proposer d'ajouter la région suivante (ordre de ECHO.mskRegions) à `regions_actives` de config.json ; sinon dire ce qui manque (examens dictés sans aide sur 10, items OSAUS sous 4).
4. Garde-fous : aucune donnée patient dans le plan ; jamais de modification manuelle de progression.json ; un palier ne redescend pas ; si `plan` échoue faute de dossier privé, lancer `node <repo>/scripts/msk-progress.js init` et le dire.
```

`.claude/skills-global/msk-cas/SKILL.md` :
```markdown
---
name: msk-cas
description: Cas raisonné du soir (15 min) en écho MSK — une vignette d'HDJ fictive et une image, tutorat socratique selon la skill learn, fin nette « su / pas su », palier mis à jour via scripts/msk-progress.js.
---
Argument : une région (sinon la première de `regions_actives` dans ~/Claude/Projects/Écho MSK/config.json). Durée annoncée : 15 min, six tours au plus, pas de recherche web pendant le tutorat.
1. `node <repo>/scripts/msk-progress.js cas pick <region>`.
2. `source: question` → traiter la question comme un cas : la replacer dans une situation d'HDJ, faire raisonner, conclure par une réponse sourcée (fiche MSK, ou une recherche PubMed si un PMID est accessible en une fois) ; cocher la ligne dans questions.md (`- [ ]` → `- [x]`).
   `source: item` → construire une vignette d'HDJ fictive à partir de `vignette` et de la fiche (jamais un patient réel), montrer `image` si elle existe (SendUserFile en rendu si l'outil est disponible, sinon lien cliquable vers le fichier), poser une seule question : « que voyez-vous », « quel signe cherchez-vous », « quelle coupe ensuite ».
3. Tutorat selon la skill `learn` : diagnostiquer avant d'enseigner ; un pas par tour, une question et un seul appui (indice qui rétrécit, exemple parallèle, reformulation de ce qui est juste) ; jamais la réponse dans l'indice ; s'il tourne en rond, donner le premier pas et reconstruire avec lui ; s'arrêter dès qu'il explique correctement.
4. Fin nette : « Su » ou « Pas su », ce qui a manqué en une phrase, renvoi à `#/msk/<region>/pathologies` et au geste s'il y en a un. Écrire `~/Claude/Projects/Écho MSK/cas/<AAAA-MM-JJ>-<item.id>.md` (vignette, résumé des tours, verdict) puis `node <repo>/scripts/msk-progress.js cas record <item.id> su|pas-su --fichier cas/<fichier>`.
5. Garde-fous : aucune donnée patient dans le fichier de cas ; pas deux fois la même vignette ; ton entre pairs, pas de félicitations creuses.
```

`.claude/skills-global/msk-logbook/SKILL.md` :
```markdown
---
name: msk-logbook
description: Logbook de pratique délibérée après une journée d'HDJ (3 min) — Mat dicte ce qu'il a échographié, la skill structure, refuse tout identifiant patient, met à jour les paliers via scripts/msk-progress.js et met les questions en file, avec une réponse courte sourcée quand c'est possible.
---
Durée annoncée : 3 min. Dossier privé : ~/Claude/Projects/Écho MSK (config.json → `repo`, `regions_actives`).
1. Prendre la dictée du jour dans le message de Mat, ou la lui demander : région, nombre d'examens, combien dictés sans aide, structures trouvées ou non avec difficulté 1 à 3, questions.
2. Structurer : `{ "date", "region", "examens", "dictes_seul", "items": [{ "id" | "libelle", "trouve", "difficulte", "dicte_seul" }], "questions": [], "commentaire" }`. Rattacher chaque structure à un identifiant de compétence quand `node <repo>/scripts/msk-progress.js etat list <region>` en donne un équivalent évident ; sinon `libelle` seul.
3. Avant toute écriture, relire la dictée : nom, initiales, âge avec date, chambre, numéro, lieu de vie, profession, ou toute formule désignant une personne → ne rien écrire, citer le passage, demander une reformulation. Le CLI refait ce contrôle (code 2 = refus) : respecter le refus, ne jamais le contourner ni retoucher le fichier à la main.
4. `node <repo>/scripts/msk-progress.js logbook add --json '<json>'`. Afficher ce qui a été écrit : paliers mis à jour, questions mises en file.
5. Pour chaque question qui appelle une réponse courte et sourçable : trois phrases avec PMID (une recherche PubMed) ou renvoi à la section de la fiche ; sinon annoncer qu'elle deviendra le prochain `/msk-cas`.
6. Garde-fous : aucune donnée patient ni verbatim de patient ; un palier ne redescend jamais ; aucune modification manuelle du dossier privé.
```

- [ ] **Step 6 : lancer le test, installer, commiter**

Run: `node --test tests/msk-skills.test.js && node scripts/msk-skills-install.js`
Expected: PASS (2 tests) ; trois lignes `installée : ~/.claude/skills/msk-…`

```bash
git add .claude/skills/msk-fiche .claude/skills/msk-anki .claude/skills/msk-audio .claude/skills-global scripts/msk-skills-install.js tests/msk-skills.test.js
git commit -m "Skills MSK : production (fiche, anki, audio) et coaching (semaine, cas, logbook) avec installeur global"
```

---

### Task 11 : socle J0 — dossier privé, premier paquet « épaule », documentation, déploiement

**Files:**
- Modify: `CLAUDE.md` (structure, commandes, règles), `PROCHAINE-SESSION.md` (état, ordre de travail), `README.md`
- Hors dépôt : `~/Claude/Projects/Écho MSK/` (créé par `init`), `~/Library/Mobile Documents/com~apple~CloudDocs/Écho MSK/{anki,audio}`

- [ ] **Step 1 : initialiser le dossier privé et les skills globales**

Run: `node scripts/msk-progress.js init && ls ~/Claude/Projects/Écho\ MSK && node scripts/msk-skills-install.js`
Expected: `dossier privé prêt : /Users/…/Claude/Projects/Écho MSK` ; `anki audio cas config.json logbook.md osaus progression.json questions.md semaines` ; trois skills installées

- [ ] **Step 2 : premier paquet « épaule » (squelette + sept fiches gestes)**

Run: `NODE_PATH=$(npm root -g) node scripts/msk-export.js epaule | tee /tmp/export.txt && N=$(grep -o '[0-9]* cartes' /tmp/export.txt | grep -o '[0-9]*') && scripts/anki/.venv/bin/python scripts/anki/build.py epaule --copy && scripts/anki/.venv/bin/python scripts/anki/check.py dist/anki/msk-epaule.apkg $N && ls -la ~/Library/Mobile\ Documents/com~apple~CloudDocs/Écho\ MSK/anki/`
Expected: `msk-epaule.apkg : N notes`, deux lignes `copié →`, check en code 0, le fichier visible dans iCloud Drive.

Lire `dist/msk/img/epaule/msk-epaule-socle-sous-acromiale-echo-1-recto.jpg` et `…-verso.jpg` : pastilles et lignes correctes.

- [ ] **Step 3 : documentation du dépôt**

Dans `CLAUDE.md` : (a) sous « Structure », ajouter `js/data/msk/<region>.js` (fiches diagnostiques, `ECHO.registerMsk`), `js/lib/msk.js`, `scripts/msk-audit.js`, `scripts/msk-export.js`, `scripts/anki/` (venv Python, genanki), `scripts/msk-progress.js` (état privé, hors dépôt), `scripts/lib/phi-guard.js` ; (b) sous « Commandes projet », ajouter `/msk-fiche <region>` · `/msk-anki <region|all>` · `/msk-audio <region>` et, globales, `/msk-semaine [--bilan]` · `/msk-cas [region]` · `/msk-logbook` ; (c) une section « Volet Diagnostic MSK (7 octobre 2026) » de dix lignes : spec et plan (chemins), régions dans l'ordre, règles (valide:false, licences sous img/msk/, marqueurs en fractions, aucune donnée patient, dossier privé `~/Claude/Projects/Écho MSK`, tests `NODE_PATH=$(npm root -g) node --test tests/*.test.js` avant tout commit).
Dans `PROCHAINE-SESSION.md` : état du volet (socle livré, pilote épaule à produire), ordre de travail « F. Volet MSK » avec les tâches 12 à 14 de ce plan et le modèle conseillé (Fable 5.1 pour la fiche, Opus 5 pour anki/audio).
Dans `README.md` : une ligne « Volet Diagnostic MSK : `#/msk` — fiches de région, cartes Anki et audio dérivés ».

- [ ] **Step 4 : tests, contrôle, déploiement, commit**

Run: `NODE_PATH=$(npm root -g) node --test tests/*.test.js && node scripts/build-index.js && NODE_PATH=$(npm root -g) node scripts/check-all.js | tail -1`
Expected: tous les tests passent ; `64 fiches + 1 fiche(s) MSK, 0 avec problème`

Run: `git fetch origin && git rebase --autostash origin/main && git add -A && git commit -m "Volet MSK : socle (dossier privé, premier paquet épaule, documentation)" && git push origin main`
Puis déployer : `npx wrangler pages deploy . --project-name=echo-algologie --branch=main` et vérifier `Environment: Production` avec `npx wrangler pages deployment list --project-name=echo-algologie | head -3` ; ouvrir https://echo-algologie.pages.dev/#/msk/epaule dans le navigateur intégré (après le code Access) : la fiche squelette s'affiche avec sa bannière.

- [ ] **Step 5 : message à Mat (checklist, rien à relire)**

Lui envoyer : (1) installer Avorio sur l'iPhone et sur le Mac (App Store, gratuit) ; (2) sur l'iPhone, Fichiers → iCloud Drive → Écho MSK → anki → `msk-epaule.apkg` → ouvrir avec Avorio ; (3) activer PubMed et YouTube Transcriber depuis la carte de plugins affichée le 7 octobre ; (4) le lien `#/msk/epaule` du site ; (5) ce qui arrive ensuite : l'audio (tâche 12) puis la fiche complète (tâche 13). Demander un retour d'un mot sur l'import Avorio (images visibles, planification active).

---

### Task 12 : audio J0 — carnet NotebookLM « Épaule » et deux épisodes

**Files:**
- Hors dépôt : `~/Claude/Projects/Écho MSK/audio/epaule-deep-dive.mp3`, `epaule-rappel.mp3` ; copies dans iCloud `Écho MSK/audio/`

- [ ] **Step 1 : exécuter `/msk-audio epaule`** avec le digest du socle (`dist/msk/epaule-digest.md` produit à la tâche 11). Sources : le digest (texte), https://essr.org/content-essr/uploads/2016/10/shoulder.pdf, et les quatorze URL YouTube des sept fiches gestes d'épaule (champ `videos`, source YouTube). Épisodes et prompts : ceux de la skill. `confirm: true` sur `studio_create` (validation du plan par Mat le 7 octobre 2026).

- [ ] **Step 2 : une attente unique**, en faisant autre chose (relecture de la documentation de la tâche 11), puis `studio_status` ; télécharger ; copier dans iCloud.

Run: `ls -la ~/Claude/Projects/Écho\ MSK/audio/ ~/Library/Mobile\ Documents/com~apple~CloudDocs/Écho\ MSK/audio/`
Expected: deux fichiers de plusieurs Mo dans chaque dossier

- [ ] **Step 3 : écouter trente secondes de chaque épisode** (lecture du fichier en local, ou demander à Mat) : langue française, ton entre pairs, protocole suivi. Si le rappel oral ignore les pauses, appliquer le repli de la skill. Noter dans `PROCHAINE-SESSION.md` la durée réelle de génération et le verdict sur le format « rappel ».

---

### Task 13 : pilote — fiche « épaule » complète (production)

**Files:**
- Create/Replace: `js/data/msk/epaule.js` (fiche complète, `valide: false`), `img/msk/epaule/*.jpg`, `docs/msk/sources-epaule.md`

- [ ] **Step 1 : exécuter `/msk-fiche epaule`** en suivant la skill, sans raccourci : sourçage d'abord (`docs/msk/sources-epaule.md` commité avant toute rédaction), puis trois agents au plus sur les trois lots, puis contrôles. Annoncer à Mat la durée attendue (une session de production, puis une de corrections) et vérifier le quota hebdomadaire avant de lancer les agents.

Critères d'acceptation, tous vérifiés :
- `node scripts/msk-audit.js epaule` → 0 erreur ; `NODE_PATH=$(npm root -g) node scripts/check-all.js` → 0 problème ; `NODE_PATH=$(npm root -g) node --test tests/*.test.js` → vert ;
- protocole : toutes les coupes du guide ESSR de l'épaule, numérotées dans son ordre, chacune avec image à marqueurs (≥ 3 marqueurs) sauf absence motivée d'image libre, écrite dans `legende` ;
- 6 à 12 pathologies, chacune reliée à un geste du mémo ou portant `aucunGeste` ; 12 à 15 compétences couvrant les six types ; `dictee` complète (toutes les structures du protocole) ;
- `NODE_PATH=$(npm root -g) node scripts/msk-export.js epaule` → au moins 40 cartes issues de la fiche seule (hors socle), vérifié en comptant les cartes dont la `key` ne commence pas par `socle-` ;
- toutes les images sous `img/msk/epaule/` en CC BY, CC BY-NC ou CC0, crédits recoupés ;
- rapport remis à Mat avec la liste des questions ouvertes et le coût en quota mesuré.

- [ ] **Step 2 : validation par Mat** — lui envoyer le lien `https://echo-algologie.pages.dev/#/msk/epaule` (après `/deployer`), les questions ouvertes, et attendre. Ses corrections : les appliquer, recapturer, recommiter. Sa décision « validé » dans la conversation → `valide: true`, commit « Épaule : fiche MSK validée par Mat », push, redéploiement. Rien d'autre ne met `valide` à `true`.

---

### Task 14 : clôture du pilote — paquet et audio de la fiche, premières skills, documentation

- [ ] **Step 1 : `/msk-anki epaule`** (régénération avec la fiche complète ; les cartes socle gardent leurs GUID, les nouvelles s'ajoutent). Vérifier le check et l'import sur l'iPhone avec Mat (retour d'un mot).

- [ ] **Step 2 : `/msk-audio epaule`** avec le digest de la fiche complète (les deux épisodes remplacent ceux du socle, mêmes noms de fichiers).

- [ ] **Step 3 : première semaine réelle** — `/msk-semaine` (doit produire `semaines/<AAAA>-W<nn>.md` en mode `fiche`, trois cibles, deux cas) ; `/msk-cas epaule` joué une fois avec Mat ; `/msk-logbook` essayé deux fois avec lui : une dictée piège (contenant un nom) → refus sans écriture, puis la dictée reformulée → entrée écrite, paliers mis à jour. Corriger les skills si un pas est confus ; relancer `node scripts/msk-skills-install.js` après toute modification.

- [ ] **Step 4 : mesure et documentation**

Dans `PROCHAINE-SESSION.md` : coût mesuré du pilote (quota par lot, durée de génération audio), rendement des images libres (combien de coupes ont une image CC), décisions de Mat, ordre des régions restantes (genou, rachis, coude, poignet-main, hanche, cheville-pied, paroi-nerfs : une tous les dix jours environ, par `/msk-fiche` puis `/msk-anki` et `/msk-audio`).
Dans la spec `docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md` : noter les deux écarts d'implémentation — §5 marqueurs en fractions ; §6 les cartes issues des fiches gestes restent dans le paquet de la région (sous-paquets `Structures` et `Pièges et artefacts`, clés `socle-…`) au lieu d'être remplacées.
Hors dépôt, `~/.claude/profil/projets/echo-algologie.md` : paragraphe « Volet Diagnostic MSK » (spec, plan, dossier privé, skills, Avorio, état du pilote), puis `git -C ~/.claude add -A && git -C ~/.claude commit -m "contexte: echo-algologie, volet MSK" && git -C ~/.claude push`.

Run: `NODE_PATH=$(npm root -g) node --test tests/*.test.js && node scripts/build-index.js && NODE_PATH=$(npm root -g) node scripts/check-all.js | tail -1 && git fetch origin && git rebase --autostash origin/main && git add -A && git commit -m "Pilote MSK épaule : clôture (paquet, audio, documentation, écarts de spec)" && git push origin main`
Expected: tests verts, `0 avec problème`, push accepté.
