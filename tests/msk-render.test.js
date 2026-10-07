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
  } finally { await browser.close(); }   // une assertion en échec ne doit pas laisser Chromium ouvert : node --test resterait bloqué
});
