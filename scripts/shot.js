/* Capture de contrôle (Playwright) : node scripts/shot.js <hash> <out.png> [light|dark] [selector] [nth]
   Sans sélecteur : page entière. Avec : capture de l'élément (ex. '.scene-wrap' 0). */
const { chromium } = require('playwright');
const path = require('path');
(async () => {
  const [hash = '#/', out = 'shot.png', theme = 'light', selector, nth = '0'] = process.argv.slice(2);
  const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' });
  const page = await browser.newPage({ viewport: { width: 1400, height: 1000 }, colorScheme: theme === 'dark' ? 'dark' : 'light' });
  const errors = [];
  page.on('pageerror', e => errors.push('PAGEERROR ' + e.message));
  page.on('console', m => { if (m.type() === 'error') errors.push('CONSOLE ' + m.text()); });
  await page.goto('file://' + path.resolve(__dirname, '../index.html') + hash);
  await page.waitForTimeout(selector ? 4500 : 2500);
  if (selector) await page.locator(selector).nth(+nth).screenshot({ path: out });
  else await page.screenshot({ path: out, fullPage: !selector });
  console.log(errors.length ? errors.join('\n') : 'no errors');
  await browser.close();
})();
