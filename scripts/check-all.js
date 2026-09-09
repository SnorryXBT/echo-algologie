/* Ouvre chaque fiche dans Chromium headless et rapporte erreurs JS, scènes rendues, sections. */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const dir = path.join(__dirname, '../js/data/procedures');
  const ids = fs.readdirSync(dir).filter(f => f.endsWith('.js')).map(f => f.replace('.js', '')).sort();
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1300, height: 900 } });
  const errs = [];
  page.on('pageerror', e => errs.push('PAGEERROR ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push('CONSOLE ' + m.text()); });
  await page.goto('file://' + path.resolve(__dirname, '../index.html'));
  let bad = 0;
  for (const id of ids) {
    errs.length = 0;
    await page.evaluate(h => { location.hash = h; }, '#/fiche/' + id);
    await page.waitForTimeout(150);
    const r = await page.evaluate(() => ({
      scenes: document.querySelectorAll('.scene-wrap svg.us-scene').length,
      sceneErr: document.querySelectorAll('.scene-wrap .callout.danger').length,
      secs: [...document.querySelectorAll('section.sec > h2')].map(h => h.textContent.replace(/^\d+/, '').trim()).length,
      h1: (document.querySelector('.fiche-head h1') || {}).textContent || '',
      labelsOut: [...document.querySelectorAll('.us-label')].filter(t => { const b = t.getBBox(); return b.x < 0 || b.x + b.width > 640 || b.y > 420; }).length,
    }));
    const flag = errs.length || r.sceneErr || !r.h1 ? ' <<<' : '';
    if (flag) bad++;
    console.log(`${id.padEnd(52)} scènes ${r.scenes} err ${r.sceneErr} sections ${String(r.secs).padStart(2)} étiquettes hors cadre ${r.labelsOut}${flag}${errs.length ? '\n   ' + errs.join('\n   ') : ''}`);
  }
  console.log(`\n${ids.length} fiches, ${bad} avec problème`);
  await browser.close();
})();
