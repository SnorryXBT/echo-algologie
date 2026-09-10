/* Génère la vidéo « le geste en 40 s » d'une fiche à partir de ses scènes animées.
   Usage : node scripts/video.js <id> [--narration] [--voice=Thomas] [--all]
   - Sans narration : vidéo muette (WebM VP8 partout ; MP4 H.264 si un ffmpeg complet est dans le PATH).
   - Avec --narration (macOS) : voix système `say` en français, texte = scene.narration || scene.legende.
   Variables : PW_CHROME (binaire Chromium en cloud), FFMPEG (chemin ffmpeg), FFPROBE. */
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs'), os = require('os'), { execFileSync, spawnSync } = require('child_process');

const args = process.argv.slice(2);
const opt = { narration: args.includes('--narration'), all: args.includes('--all'), voice: (args.find(a => a.startsWith('--voice=')) || '--voice=Thomas').split('=')[1] };
const ids = args.filter(a => !a.startsWith('--'));
const root = path.resolve(__dirname, '..');
const W = 1280, H = 720;
const has = cmd => spawnSync('which', [cmd]).status === 0;
const FF = process.env.FFMPEG || (has('ffmpeg') ? 'ffmpeg' : '/opt/pw-browsers/ffmpeg-1011/ffmpeg-linux');
const FFPROBE = process.env.FFPROBE || (has('ffprobe') ? 'ffprobe' : null);
const encoders = (() => { try { return execFileSync(FF, ['-hide_banner', '-encoders'], { stdio: ['ignore', 'pipe', 'ignore'] }).toString(); } catch (e) { return ''; } })();
const h264 = /libx264/.test(encoders), aac = /\baac\b/.test(encoders);
const strip = t => String(t || '').replace(/\*\*/g, '').replace(/\s+/g, ' ').trim();

function loadFiche(id) {
  global.window = global; global.ECHO = { procedures: {}, figures: {}, register(p) { ECHO.procedures[p.id] = p; }, positions: {}, sondes: {} };
  require(path.join(root, 'js/data/registry.js'));
  require(path.join(root, 'js/data/procedures', id + '.js'));
  return ECHO.procedures[id];
}

function segments(p) {
  const f = p.flash || {};
  const intro = [`${p.titreCourt || p.titre}.`,
    f.position ? `Patient ${strip((ECHO.positions[f.position] || f.position).toLowerCase())}${f.positionNote ? ', ' + strip(f.positionNote) : ''}.` : '',
    f.sonde ? `Sonde ${strip((ECHO.sondes[f.sonde] || f.sonde).toLowerCase())}${f.sondeNote ? ', ' + strip(f.sondeNote) : ''}.` : '',
    f.approche ? `Approche ${f.approche === 'in-plane' ? 'dans le plan' : f.approche === 'out-of-plane' ? 'hors du plan' : strip(f.approche)}${f.approcheNote ? ', ' + strip(f.approcheNote) : ''}.` : '',
    f.aiguille ? `Aiguille ${strip(f.aiguille)}.` : '', f.cible ? `Cible : ${strip(f.cible)}.` : '', f.injectat ? `Injectat : ${strip(f.injectat)}.` : ''].filter(Boolean).join(' ');
  return [{ kind: 'intro', text: intro }].concat((p.scenes || []).map((s, i) => ({ kind: 'scene', i, text: strip(s.narration || s.legende || s.titre) })));
}

async function render(id) {
  const p = loadFiche(id);
  const segs = segments(p);
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'echo-video-'));
  /* narration : synthèse et durées */
  let audio = [];
  if (opt.narration) {
    if (!has('say')) { console.error('`say` indisponible (macOS uniquement) : vidéo muette.'); opt.narration = false; }
    else if (!FFPROBE) { console.error('ffprobe indisponible (brew install ffmpeg) : vidéo muette.'); opt.narration = false; }
  }
  segs.forEach((s, k) => {
    let dur = s.kind === 'intro' ? 7 : 9;
    if (opt.narration) {
      const aiff = path.join(tmp, `seg${k}.aiff`);
      execFileSync('say', ['-v', opt.voice, '-r', '170', '-o', aiff, s.text]);
      const d = parseFloat(execFileSync(FFPROBE, ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', aiff]).toString());
      dur = Math.max(s.kind === 'intro' ? 5 : 7, d + 1.2);
      audio.push({ file: aiff, dur: d });
    }
    s.dur = dur;
  });
  /* page de rendu */
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><link rel="stylesheet" href="file://${root}/css/app.css">
<style>html,body{margin:0;background:#0b0f14;color:#fff;font-family:-apple-system,"Segoe UI",Inter,Roboto,sans-serif;overflow:hidden}
#stage{width:${W}px;height:${H}px;position:relative;background:#0b0f14}
#title{position:absolute;left:36px;top:18px;right:36px;font-size:24px;font-weight:700}
#sub{position:absolute;left:36px;top:52px;right:36px;font-size:15px;color:#9aa4ae}
#step{position:absolute;right:36px;top:22px;font-size:13px;color:#ffd166;font-weight:700;letter-spacing:.08em}
#scene{position:absolute;left:${Math.round((W - 800) / 2)}px;top:84px;width:800px;height:525px}#scene svg{width:100%;height:100%}
#cap{position:absolute;left:36px;right:36px;bottom:16px;font-size:17px;line-height:1.35;color:#e8ecf1;background:rgba(255,255,255,.06);border-left:4px solid #ffd166;padding:10px 14px;border-radius:8px;min-height:44px}
.us-scene{border-radius:14px}</style>
<script src="file://${root}/js/data/registry.js"></script><script src="file://${root}/js/lib/md.js"></script><script src="file://${root}/js/lib/icons.js"></script><script src="file://${root}/js/lib/scene.js"></script><script src="file://${root}/js/data/procedures/${id}.js"></script>
</head><body><div id="stage"><div id="title"></div><div id="sub"></div><div id="step"></div><div id="scene"></div><div id="cap"></div></div>
<script>
const P = ECHO.procedures['${id}'];
window.showScene = function(i, cap){ const s = P.scenes[i];
  document.getElementById('title').textContent = P.titreCourt || P.titre; document.getElementById('sub').textContent = s.titre || '';
  document.getElementById('step').textContent = (i+1) + ' / ' + P.scenes.length;
  document.getElementById('scene').innerHTML = ECHO.renderScene(s); document.getElementById('cap').textContent = cap; };
window.showIntro = function(cap){ const f = P.flash || {};
  document.getElementById('title').textContent = P.titreCourt || P.titre; document.getElementById('sub').textContent = P.en || ''; document.getElementById('step').textContent = '';
  const rows = [['Patient', (ECHO.positions[f.position]||f.position||'') + (f.positionNote ? ' — ' + f.positionNote : '')], ['Sonde', (ECHO.sondes[f.sonde]||f.sonde||'') + (f.sondeNote ? ' — ' + f.sondeNote : '')], ['Approche', (f.approche||'') + (f.approcheNote ? ' — ' + f.approcheNote : '')], ['Aiguille', f.aiguille||''], ['Cible', f.cible||''], ['Injectat', f.injectat||'']].filter(r => r[1]);
  document.getElementById('scene').innerHTML = '<div style="padding:24px 10px;font-size:20px;line-height:1.5;color:#e8ecf1">' + rows.map(r => '<div style="margin:8px 0"><span style="color:#ffd166;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:.08em;display:inline-block;width:110px">' + r[0] + '</span>' + r[1].replace(/\\*\\*/g,'') + '</div>').join('') + '</div>';
  document.getElementById('cap').textContent = cap; };
</script></body></html>`;
  const page_html = path.join(tmp, 'page.html'); fs.writeFileSync(page_html, html);
  const browser = await chromium.launch({ ...(process.env.PW_CHROME ? { executablePath: process.env.PW_CHROME } : {}) });
  const ctx = await browser.newContext({ viewport: { width: W, height: H }, recordVideo: { dir: tmp, size: { width: W, height: H } } });
  const page = await ctx.newPage();
  await page.goto('file://' + page_html);
  const t0 = Date.now(); const starts = [];
  for (const s of segs) {
    starts.push(Date.now() - t0);
    if (s.kind === 'intro') await page.evaluate(c => showIntro(c), 'Fiche flash — mémo de révision privé ; schémas de sono-anatomie (représentations schématiques).');
    else await page.evaluate(([i, c]) => showScene(i, c), [s.i, s.text]);
    await page.waitForTimeout(Math.round(s.dur * 1000));
  }
  await ctx.close(); await browser.close();
  const webm = path.join(tmp, fs.readdirSync(tmp).find(f => f.endsWith('.webm')));
  fs.mkdirSync(path.join(root, 'video'), { recursive: true });
  const outBase = path.join(root, 'video', id);
  let inputs = ['-i', webm], filter = [], maps = ['-map', '0:v'];
  if (opt.narration && audio.length) {
    audio.forEach((a, k) => { inputs.push('-i', a.file); filter.push(`[${k + 1}:a]adelay=${starts[k]}|${starts[k]}[a${k}]`); });
    filter.push(`${audio.map((_, k) => `[a${k}]`).join('')}amix=inputs=${audio.length}:normalize=0[aout]`);
    maps.push('-map', '[aout]');
  }
  const common = [...inputs, ...(filter.length ? ['-filter_complex', filter.join(';')] : []), ...maps, '-shortest'];
  if (h264) {
    execFileSync(FF, ['-y', '-loglevel', 'error', ...common, '-c:v', 'libx264', '-pix_fmt', 'yuv420p', '-crf', '22', '-movflags', '+faststart', ...(opt.narration && aac ? ['-c:a', 'aac', '-b:a', '96k'] : ['-an']), outBase + '.mp4']);
    if (fs.existsSync(outBase + '.webm')) fs.unlinkSync(outBase + '.webm');
    console.log(`${id} → video/${id}.mp4 (${segs.length} segments, ${Math.round(segs.reduce((a, s) => a + s.dur, 0))} s${opt.narration ? ', narré' : ', muet'})`);
  } else {
    execFileSync(FF, ['-y', '-loglevel', 'error', ...common, '-c:v', 'libvpx', '-b:v', '1500k', '-an', outBase + '.webm']);
    console.log(`${id} → video/${id}.webm (VP8 muet — pas de H.264 dans ce ffmpeg ; sur le Mac : brew install ffmpeg)`);
  }
  fs.rmSync(tmp, { recursive: true, force: true });
}

(async () => {
  let list = ids;
  if (opt.all) list = fs.readdirSync(path.join(root, 'js/data/procedures')).filter(f => f.endsWith('.js')).map(f => f.replace('.js', ''));
  if (!list.length) { console.error('Usage : node scripts/video.js <id> [--narration] [--voice=Thomas] | --all'); process.exit(1); }
  for (const id of list) { try { await render(id); } catch (e) { console.error(`${id} : ${e.message}`); } }
})();
