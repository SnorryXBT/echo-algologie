/* Génère une vidéo muette (MP4, boucle) du geste à partir des scènes animées d'une fiche.
   Usage : node scripts/video.js <id> [out.mp4]   (Playwright + ffmpeg ; PW_CHROME facultatif) */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs'), os = require('os'), { execFileSync } = require('child_process');
(async () => {
  const [id, out = `video/${process.argv[2]}.webm`] = process.argv.slice(2);
  if (!id) { console.error('id manquant'); process.exit(1); }
  const root = path.resolve(__dirname, '..');
  const W = 1280, H = 720;
  const page_html = `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<link rel="stylesheet" href="file://${root}/css/app.css">
<style>
 html,body{margin:0;background:#0b0f14;color:#fff;font-family:-apple-system,"Segoe UI",Inter,Roboto,sans-serif;overflow:hidden}
 #stage{width:${W}px;height:${H}px;position:relative;background:#0b0f14}
 #title{position:absolute;left:36px;top:18px;right:36px;font-size:24px;font-weight:700;letter-spacing:-.01em}
 #sub{position:absolute;left:36px;top:52px;right:36px;font-size:15px;color:#9aa4ae}
 #scene{position:absolute;left:${Math.round((W - 800) / 2)}px;top:84px;width:800px;height:525px}
 #scene svg{width:100%;height:100%}
 #cap{position:absolute;left:36px;right:36px;bottom:16px;font-size:17px;line-height:1.35;color:#e8ecf1;background:rgba(255,255,255,.06);border-left:4px solid #ffd166;padding:10px 14px;border-radius:8px;min-height:44px}
 #step{position:absolute;right:36px;top:22px;font-size:13px;color:#ffd166;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
 .us-scene{border-radius:14px}
</style>
<script src="file://${root}/js/data/registry.js"></script>
<script src="file://${root}/js/lib/md.js"></script>
<script src="file://${root}/js/lib/icons.js"></script>
<script src="file://${root}/js/lib/scene.js"></script>
<script src="file://${root}/js/data/procedures/${id}.js"></script>
</head><body><div id="stage"><div id="title"></div><div id="sub"></div><div id="step"></div><div id="scene"></div><div id="cap"></div></div>
<script>
 window.show = function(i){ const p = ECHO.procedures['${id}']; const s = p.scenes[i];
   document.getElementById('title').textContent = p.titreCourt || p.titre;
   document.getElementById('sub').textContent = s.titre || '';
   document.getElementById('step').textContent = (i+1) + ' / ' + p.scenes.length;
   document.getElementById('scene').innerHTML = ECHO.renderScene(s);
   document.getElementById('cap').textContent = (s.legende || '').replace(/\\*\\*/g,'');
   return p.scenes.length; };
 window.intro = function(){ const p = ECHO.procedures['${id}'];
   document.getElementById('title').textContent = p.titreCourt || p.titre;
   document.getElementById('sub').textContent = p.en || '';
   document.getElementById('step').textContent = '';
   const f = p.flash || {};
   document.getElementById('scene').innerHTML = '<div style="padding:40px 30px;font-size:22px;line-height:1.6;color:#e8ecf1">' +
     ['Patient : ' + (ECHO.positions[f.position]||f.position||'') + (f.positionNote ? ' — ' + f.positionNote : ''),
      'Sonde : ' + (ECHO.sondes[f.sonde]||f.sonde||'') + (f.sondeNote ? ' — ' + f.sondeNote : ''),
      'Approche : ' + (f.approche||'') + (f.approcheNote ? ' — ' + f.approcheNote : ''),
      'Aiguille : ' + (f.aiguille||''), 'Cible : ' + (f.cible||''), 'Injectat : ' + (f.injectat||'')]
     .filter(x => !/: $/.test(x)).map(x => '<div style="margin:10px 0">' + x.replace(/\\*\\*/g,'') + '</div>').join('') + '</div>';
   document.getElementById('cap').textContent = 'Fiche flash — mémo de révision privé, schémas de sono-anatomie (représentations schématiques).';
   return p.scenes.length; };
</script></body></html>`;
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'echo-video-'));
  const html = path.join(tmp, 'page.html'); fs.writeFileSync(html, page_html);
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, recordVideo: { dir: tmp, size: { width: W, height: H } } });
  const page = await ctx.newPage();
  await page.goto('file://' + html);
  const n = await page.evaluate(() => intro());
  await page.waitForTimeout(6000);
  for (let i = 0; i < n; i++) { await page.evaluate(k => show(k), i); await page.waitForTimeout(9000); }
  await ctx.close(); await browser.close();
  const webm = fs.readdirSync(tmp).find(f => f.endsWith('.webm'));
  fs.mkdirSync(path.dirname(path.resolve(root, out)), { recursive: true });
  const ff = process.env.FFMPEG || '/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux';
  /* le ffmpeg de Playwright n'a que VP8 : on livre du WebM ; MP4 H.264 possible sur le Mac avec un ffmpeg complet (brew install ffmpeg) */
  const target = path.resolve(root, out).replace(/\.mp4$/, '.webm');
  try {
    execFileSync(ff, ['-y', '-loglevel', 'error', '-i', path.join(tmp, webm), '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '22', '-movflags', '+faststart', '-an', path.resolve(root, out).replace(/\.webm$/, '.mp4')]);
    console.log('MP4 H.264 écrit');
  } catch (e) {
    execFileSync(ff, ['-y', '-loglevel', 'error', '-i', path.join(tmp, webm), '-c:v', 'libvpx', '-b:v', '1500k', '-crf', '12', '-an', target]);
    console.log('MP4 impossible ici (pas de H.264) : WebM VP8 écrit → ' + target);
  }
  console.log(`${n} scènes, ${(6 + 9 * n)} s`);
})();
