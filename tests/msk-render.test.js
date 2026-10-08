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
  try {
    const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
    let errs = await open(page, '#/msk');
    let r = await page.evaluate(() => ({ h1: document.querySelector('.home h1').textContent, tiles: document.querySelectorAll('.tiles .tile').length, nav: document.querySelectorAll('.nav-msk a[href^="#/msk/"]').length }));
    assert.deepStrictEqual(errs, []); assert.strictEqual(r.h1, 'Diagnostic MSK'); assert.strictEqual(r.tiles, 8); assert.strictEqual(r.nav, 8);

    errs = await open(page, '#/msk/epaule');
    r = await page.evaluate(() => ({ h1: document.querySelector('.fiche-head h1').textContent, banniere: !!document.querySelector('.msk-banniere'), secs: [...document.querySelectorAll('section.sec')].map(s => s.id), labels: document.querySelectorAll('.fig-label').length, active: !!document.querySelector('.nav-msk a.active[href="#/msk/epaule"]'), gestes: document.querySelectorAll('#vue .chips a[href^="#/fiche/"]').length, gestesFiche: ECHO.msk.epaule.gestes.length }));
    assert.deepStrictEqual(errs, []); assert.match(r.h1, /Épaule/); assert.ok(r.banniere, 'bannière non validée');
    for (const id of ['vue', 'protocole', 'sonoanatomie', 'pathologies', 'dictee', 'competences', 'references', 'videos']) assert.ok(r.secs.includes(id), 'section ' + id);
    assert.ok(r.labels >= 4, 'marqueurs rendus'); assert.ok(r.active); assert.strictEqual(r.gestes, r.gestesFiche, 'une pastille par geste de la fiche');

    errs = await open(page, '#/msk/epaule/references');
    r = await page.evaluate(() => ({ closed: document.getElementById('references').classList.contains('closed') }));
    assert.deepStrictEqual(errs, []); assert.strictEqual(r.closed, false, 'lien profond : section Références ouverte');

    const sans = await page.evaluate(() => ECHO.mskRegions.find(x => !ECHO.msk[x.id]).id);   // région sans fiche, choisie à l'exécution : le test ne dépend pas de la prochaine région rédigée
    errs = await open(page, '#/msk/' + sans);
    r = await page.evaluate(() => (document.querySelector('.empty h2') || {}).textContent || '');
    assert.deepStrictEqual(errs, []); assert.match(r, /non encore rédigée/);
  } finally { await browser.close(); }   // une assertion en échec ne doit pas laisser Chromium ouvert : node --test resterait bloqué
});
test('volet MSK : coupe sans image libre (image null + sansImage) — motif affiché à la place de la figure', async () => {
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  try {
    const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
    const errs = await open(page, '#/msk');
    const sans = await page.evaluate(() => ECHO.mskRegions.find(x => !ECHO.msk[x.id]).id);
    await page.evaluate(id => {   // fiche factice enregistrée à chaud sur une région sans fiche du dépôt (choisie à l'exécution), puis route : indépendant du contenu des fiches
      ECHO.registerMsk({ id, titre: 'Fiche factice', valide: false, protocole: [{ n: 1, titre: 'Coupe sans image libre', position: 'Décubitus', repere: 'Repère osseux',
        structures: ['Structure attendue'], image: null, sansImage: 'Europe PMC : aucune figure **CC BY** de cette coupe' }] });
      location.hash = '#/msk/' + id;
    }, sans);
    await page.waitForTimeout(400);
    const r = await page.evaluate(() => { const s = document.getElementById('protocole'); return s ? { p: [...s.querySelectorAll('p.muted')].map(p => p.textContent), figs: s.querySelectorAll('.fig').length } : null; });
    assert.deepStrictEqual(errs, []); assert.ok(r, 'section protocole rendue');
    assert.deepStrictEqual(r.p, ['Pas d\'image libre — Europe PMC : aucune figure CC BY de cette coupe'], 'motif rendu par inline (Markdown), à la place de la figure');
    assert.strictEqual(r.figs, 0, 'aucune figure');
  } finally { await browser.close(); }
});
