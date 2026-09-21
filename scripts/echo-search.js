/* Écho-anatomie réelle réutilisable (Europe PMC, licences CC).
   Chercher :    node scripts/echo-search.js "suprascapular nerve block ultrasound" [n]
                 → articles CC BY/CC en libre accès, avec leurs figures échographiques (légendes)
   Télécharger : node scripts/echo-search.js --get PMC13239302 <graphic-href> <id-fiche> [num]
                 → img/<id-fiche>/echo-<num>.jpg  + affiche licence et citation à recopier dans credit/source */
const fs = require('fs'), path = require('path');
const UA = 'echo-algologie/1.0 (memo prive; matabou@gmail.com)';
const H = { headers: { 'User-Agent': UA } };
const EP = 'https://www.ebi.ac.uk/europepmc/webservices/rest';
const strip = s => (s || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
async function xml(pmc) { const r = await fetch(`${EP}/${pmc}/fullTextXML`, H); return r.ok ? await r.text() : ''; }
function meta(x) {
  const lic = strip((x.match(/<license[\s\S]*?<\/license>/) || [''])[0]).slice(0, 160);
  const licUrl = (x.match(/<license[^>]*xlink:href="([^"]+)"/) || [])[1] || (x.match(/creativecommons\.org\/licenses\/[a-z-]+\/[\d.]+/) || [''])[0];
  const journal = strip((x.match(/<journal-title>([\s\S]*?)<\/journal-title>/) || [])[1]);
  const year = (x.match(/<pub-date[^>]*>[\s\S]*?<year>(\d{4})<\/year>/) || [])[1];
  const title = strip((x.match(/<article-title>([\s\S]*?)<\/article-title>/) || [])[1]);
  /* Auteurs : uniquement les <contrib contrib-type="author"> — jamais tout le XML, qui ramène les éditeurs académiques (Cureus : Muacevic, Adler ;
     MDPI) et même les auteurs de la bibliographie (cas Valera-Calero 2026). `--get` les remplace de toute façon par l'authorString d'Europe PMC. */
  const auth = [...x.matchAll(/<contrib\b[^>]*contrib-type="author"[^>]*>([\s\S]*?)<\/contrib>/g)].map(c => c[1].match(/<surname>([^<]+)<\/surname>\s*<given-names[^>]*>([^<]+)<\/given-names>/)).filter(Boolean).map(m => `${m[1]} ${m[2].replace(/[^A-ZÀ-Ý]/g, '')}`);
  const doi = (x.match(/<article-id pub-id-type="doi">([^<]+)</) || [])[1];
  const figs = [...x.matchAll(/<fig[^>]*>([\s\S]*?)<\/fig>/g)].map(m => ({
    label: strip((m[1].match(/<label>([\s\S]*?)<\/label>/) || [])[1]),
    caption: strip((m[1].match(/<caption>([\s\S]*?)<\/caption>/) || [])[1]),
    href: (m[1].match(/<graphic[^>]*xlink:href="([^"]+)"/) || [])[1],
  })).filter(f => f.href);
  return { lic, licUrl, journal, year, title, auth, doi, figs };
}
(async () => {
  const a = process.argv.slice(2);
  if (a[0] === '--get') {
    const [pmc, href, id, num = '1'] = a.slice(1);
    const m = meta(await xml(pmc));
    const dir = path.join(__dirname, '..', 'img', id); fs.mkdirSync(dir, { recursive: true });
    const out = path.join(dir, `echo-${num}.jpg`);
    let ok = false;
    /* la page PMC référence les images sur cdn.ncbi.nlm.nih.gov/pmc/blobs/... */
    const html = require('child_process').execSync(`curl -s -m 30 -A 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36' -H 'Accept: text/html,application/xhtml+xml' -H 'Accept-Language: fr-FR,fr;q=0.9' https://pmc.ncbi.nlm.nih.gov/articles/${pmc}/`, { maxBuffer: 1 << 26 }).toString();
    const base = href.replace(/\.(jpe?g|png|tif)$/i, '');
    const cdn = [...html.matchAll(/src="(https:\/\/cdn\.ncbi\.nlm\.nih\.gov\/pmc\/blobs\/[^"]+)"/g)].map(m => m[1]).find(u => u.includes('/' + base + '.'));
    for (const u of [cdn, `https://europepmc.org/articles/${pmc}/bin/${base}.jpg`].filter(Boolean)) {
      const r = await fetch(u, H); if (!r.ok || !(r.headers.get('content-type') || '').startsWith('image')) continue;
      fs.writeFileSync(out, Buffer.from(await r.arrayBuffer())); ok = true; console.log(`→ ${path.relative(process.cwd(), out)} depuis ${u}`); break;
    }
    if (!ok) {   /* PMC répond parfois par une page reCAPTCHA : repli sur l'archive des figures d'origine d'Europe PMC */
      try {
        const os = require('os'), cp = require('child_process'), tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'epmc-'));
        const r = await fetch(`${EP}/${pmc}/supplementaryFiles?includeInlineImage=true`, H);
        if (r.ok) {
          fs.writeFileSync(path.join(tmp, 'f.zip'), Buffer.from(await r.arrayBuffer()));
          cp.execSync(`unzip -o -j -q f.zip -d x`, { cwd: tmp });
          const hit = fs.readdirSync(path.join(tmp, 'x')).find(n => n.replace(/\.\w+$/, '') === base && /\.(jpe?g|png)$/i.test(n));
          if (hit) { fs.copyFileSync(path.join(tmp, 'x', hit), /\.png$/i.test(hit) ? out.replace(/\.jpg$/, '.png') : out); ok = true; console.log(`→ ${path.relative(process.cwd(), out)} depuis l'archive Europe PMC (${hit})`); }
        }
        fs.rmSync(tmp, { recursive: true, force: true });
      } catch (e) { console.error('repli Europe PMC : ' + e.message); }
    }
    if (!ok) { console.error('image introuvable'); process.exit(1); }
    const f = m.figs.find(f => f.href.replace(/\.\w+$/, '') === base);
    /* source d'autorité pour les auteurs : authorString de l'API core */
    try { const c = await (await fetch(`${EP}/search?query=PMCID:${pmc}&format=json&resultType=lite`, H)).json(); const as = ((c.resultList || {}).result || [])[0]; if (as && as.authorString) m.auth = as.authorString.replace(/\.$/, '').split(', '); } catch (e) { console.error('authorString indisponible : auteurs tirés du XML (contrib-group), à recouper'); }
    const lu = (m.licUrl.match(/licenses\/([a-z-]+)/) || [])[1], lt = /No ?Deriv/i.test(m.lic) ? 'nd' : /Share ?Alike/i.test(m.lic) ? 'sa' : '';
    if (lu && lt && !lu.includes(lt)) console.error(`ATTENTION licence ambiguë à la source : l'URL dit ${lu.toUpperCase()}, le texte dit -${lt.toUpperCase()} — l'écrire tel quel dans credit, et retenir la plus restrictive.`);
    console.log(`credit: '${m.auth.slice(0, 3).join(', ')}${m.auth.length > 3 ? ' et al.' : ''}, ${m.journal} ${m.year}, ${f ? f.label : ''} — ${m.lic.match(/CC BY[\w -]*|Creative Commons[\w -]*/) ? (m.licUrl || m.lic) : 'LICENCE À VÉRIFIER : ' + m.lic}'`);
    console.log(`source: 'https://doi.org/${m.doi}'  (PMC : https://europepmc.org/article/PMC/${pmc.replace('PMC', '')})`);
    console.log(`légende originale : ${f ? f.caption : '?'}`);
    return;
  }
  const q = a[0], n = +(a[1] || 8);
  const url = `${EP}/search?query=${encodeURIComponent(`(${q}) AND OPEN_ACCESS:y AND (LICENSE:cc-by OR LICENSE:cc)`)}&format=json&pageSize=${n}&resultType=lite`;
  const j = await (await fetch(url, H)).json();
  console.log(`${j.hitCount} résultats CC en libre accès`);
  for (const r of (j.resultList || {}).result || []) {
    if (!r.pmcid) continue;
    const m = meta(await xml(r.pmcid));
    const us = m.figs.filter(f => /ultraso|sonogra|echo|probe|transducer|needle/i.test(f.caption));
    if (!us.length) continue;
    console.log(`\n${r.pmcid} · ${m.journal} ${m.year} · ${m.title.slice(0, 100)}\n  licence : ${m.licUrl || m.lic.slice(0, 80)}`);
    for (const f of us) console.log(`  [${f.href}] ${f.label} — ${f.caption.slice(0, 220)}`);
  }
})();
