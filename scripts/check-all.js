/* Ouvre dans Chromium headless chaque fiche geste (#/fiche/<id> : erreurs JS, scènes rendues, sections) puis chaque fiche MSK
   (#/msk/<region> : erreurs JS, sections, figures, marqueurs, validation). */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const dir = path.join(__dirname, '../js/data/procedures');
  const ids = fs.readdirSync(dir).filter(f => f.endsWith('.js')).map(f => f.replace('.js', '')).sort();
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
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
      anat: document.querySelectorAll('.anat-host svg.anat-svg').length / 2,
      anatErr: document.querySelectorAll('.anat-host .callout.danger').length + document.querySelectorAll('.anat-host:empty').length,
      secs: [...document.querySelectorAll('section.sec > h2')].map(h => h.textContent.replace(/^\d+/, '').trim()).length,
      h1: (document.querySelector('.fiche-head h1') || {}).textContent || '',
      labelsOut: [...document.querySelectorAll('.us-label')].filter(t => { const b = t.getBBox(); return b.x < 0 || b.x + b.width > 640 || b.y > 420; }).length,
    }));
    const flag = errs.length || r.sceneErr || r.anatErr || !r.h1 ? ' <<<' : '';
    if (flag) bad++;
    console.log(`${id.padEnd(52)} scènes ${r.scenes} err ${r.sceneErr} sections ${String(r.secs).padStart(2)} étiquettes hors cadre ${r.labelsOut}${r.anat ? ` coupes anat. ${r.anat}${r.anatErr ? ' ERR ' + r.anatErr : ''}` : ''}${flag}${errs.length ? '\n   ' + errs.join('\n   ') : ''}`);
  }
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
  await browser.close();
})();
