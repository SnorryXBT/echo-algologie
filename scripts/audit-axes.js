/* Cohérence des paires écho/schéma et existence des images. node scripts/audit-axes.js
   Pour chaque figure `type:'echo'`, compare l'axe que la légende attribue à l'image réelle
   (« caudal à gauche ») à l'orient() de la scène appariée. Quatre cas :
     OK             axes concordants
     MIROIR DIT     divergence réelle, mais explicitement dite dans la légende — normal
     CONTRADICTION  divergence non dite : la même aiguille se lit dans deux sens opposés
     (sans claim)   la légende ne dit rien de l'orientation : accord non vérifié
   Signale aussi les `pair:` orphelins et les fichiers image référencés mais absents
   (une image absente ne produit aucune erreur JS, seulement un 404 que check-all laisse passer).
   Sort en code 1 s'il reste une contradiction, un pair orphelin ou une image absente. */
const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const FIG = path.join(root, 'js/data/figures'), PROC = path.join(root, 'js/data/procedures');
const norm = s => s.toLowerCase().replace(/\([^)]*\)/g, '').replace(/[’']/g, '').trim();
const MIROIR = /orientation inverse|en miroir|inverse (?:de |du )?(?:celle du )?schéma/i;

/* orient({ left, right }) de chaque scène d'une fiche ; null si la scène n'en déclare pas */
function orients(fiche) {
  const p = path.join(PROC, fiche + '.js');
  if (!fs.existsSync(p)) return null;
  const src = fs.readFileSync(p, 'utf8'), out = {};
  for (const m of src.matchAll(/id:\s*'([a-z0-9-]+)',\s*section:/g)) {
    const rest = src.slice(m.index + 1);
    const next = rest.search(/id:\s*'[a-z0-9-]+',\s*section:/);
    const bloc = next === -1 ? rest : rest.slice(0, next);
    const o = bloc.match(/S\.orient\(\{\s*left:\s*'([^']*)'\s*,\s*right:\s*'([^']*)'/);
    out[m[1]] = o ? { l: o[1], r: o[2] } : null;
  }
  return out;
}

let pairs = 0, ok = 0, miroirs = 0, muets = 0, sansOrient = 0, contradictions = 0, orphelins = 0, absentes = 0;

for (const f of fs.readdirSync(FIG).filter(x => x.endsWith('.js'))) {
  const fiche = f.replace(/\.js$/, '');
  const src = fs.readFileSync(path.join(FIG, f), 'utf8');
  const or = orients(fiche);

  for (const m of src.matchAll(/src:\s*'(img\/[^']+)'/g)) {
    if (!fs.existsSync(path.join(root, m[1]))) { console.log(`IMAGE ABSENTE  ${fiche} → ${m[1]}`); absentes++; }
  }

  for (const blk of src.split(/\n  \{/).slice(1)) {
    if (!/type:\s*'echo'/.test(blk)) continue;
    pairs++;
    const pair = (blk.match(/pair:\s*'([^']+)'/) || [])[1];
    const leg = (blk.match(/legende:\s*'([\s\S]*?)',\n\s+(?:credit|source|titre|pair|labels)/) || [])[1] || '';
    if (!pair) { console.log(`PAIR ABSENT    ${fiche} : figure écho sans scène appariée`); orphelins++; continue; }
    const o = or && or[pair];
    if (o === undefined) { console.log(`PAIR ORPHELIN  ${fiche} → '${pair}' : scène introuvable`); orphelins++; continue; }
    if (!o) { console.log(`SANS ORIENT    ${fiche} → ${pair} : la scène ne déclare pas d'orient()`); sansOrient++; continue; }

    /* emphase markdown retirée : « *Caudal* à gauche » doit être détecté comme « Caudal à gauche » */
    const plain = leg.replace(/[*_`]/g, '');
    const claims = [...plain.matchAll(/([A-Za-zÀ-ÿ'’-]{4,})\s+à\s+(gauche|droite)/g)];
    if (!claims.length) { muets++; continue; }
    let conflit = null;
    for (const c of claims) {
      const mot = norm(c[1]), L = norm(o.l), R = norm(o.r);
      if (c[2] === 'gauche' && R.includes(mot) && !L.includes(mot)) conflit = `« ${c[1]} à gauche » alors que la scène met ${o.r} à droite`;
      if (c[2] === 'droite' && L.includes(mot) && !R.includes(mot)) conflit = `« ${c[1]} à droite » alors que la scène met ${o.l} à gauche`;
    }
    if (!conflit) { ok++; continue; }
    if (MIROIR.test(plain)) { console.log(`MIROIR DIT     ${fiche} → ${pair} : ${conflit}`); miroirs++; }
    else { console.log(`CONTRADICTION  ${fiche} → ${pair} : ${conflit}`); contradictions++; }
  }
}

console.log(`\n${pairs} paires écho/schéma — ${ok} axes concordants, ${miroirs} miroir(s) déclaré(s), ` +
  `${muets} sans indication d'axe, ${sansOrient} scène(s) sans orient(), ` +
  `${contradictions} contradiction(s), ${orphelins} pair orphelin(s), ${absentes} image(s) absente(s)`);
if (contradictions || orphelins || absentes) { console.log('À corriger avant commit.'); process.exit(1); }
