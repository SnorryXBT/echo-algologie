// tests/msk-skills.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { spawnSync } = require('child_process');
const ROOT = path.resolve(__dirname, '..');
const { installer } = require('../scripts/msk-skills-install');
const SKILLS = [['.claude/skills', ['msk-fiche', 'msk-anki', 'msk-audio']], ['.claude/skills-global', ['msk-semaine', 'msk-cas', 'msk-logbook']]];

test('six skills avec frontmatter name/description cohérent', () => {
  const dirs = [['.claude/skills', ['msk-fiche', 'msk-anki', 'msk-audio']], ['.claude/skills-global', ['msk-semaine', 'msk-cas', 'msk-logbook']]];
  for (const [base, names] of dirs) for (const n of names) {
    const txt = fs.readFileSync(path.join(ROOT, base, n, 'SKILL.md'), 'utf8');
    const m = /^---\nname: ([a-z-]+)\ndescription: (.+)\n---\n/.exec(txt);
    assert.ok(m, 'frontmatter : ' + n); assert.strictEqual(m[1], n); assert.ok(m[2].length > 60 && m[2].length < 500, 'description : ' + n);
    assert.ok(txt.includes('msk-progress.js') || txt.includes('msk-export.js') || txt.includes('msk-audit.js') || txt.includes('studio_create'), 'la skill nomme son outil : ' + n);
  }
});
test('installeur : copie idempotente des trois skills globales', (t) => {
  const target = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-'));
  t.after(() => fs.rmSync(target, { recursive: true, force: true }));   // cible factice, jamais ~/.claude/skills
  const a = installer(target), b = installer(target);
  assert.deepStrictEqual(a.map(p => path.basename(p)).sort(), ['msk-cas', 'msk-logbook', 'msk-semaine']); assert.deepStrictEqual(a, b);
  for (const d of a) assert.ok(fs.existsSync(path.join(d, 'SKILL.md')));
});
/* Ce que les skills font lancer existe vraiment : script présent dans le dépôt, option écrite dans sa source, commande de msk-progress.js reconnue
   (le CLI n'affiche pas son usage). Lancée sur un dossier privé et un iCloud factices, jamais les vrais. */
test('skills : chaque script cité existe, chaque option figure dans sa source, chaque commande msk-progress.js est reconnue par le CLI', (t) => {
  const home = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-home-')), icloud = fs.mkdtempSync(path.join(os.tmpdir(), 'skills-icloud-'));
  t.after(() => { for (const d of [home, icloud]) fs.rmSync(d, { recursive: true, force: true }); });
  const env = Object.assign({}, process.env, { ECHO_MSK_HOME: home, ECHO_MSK_ICLOUD: icloud });
  const rates = [], vus = new Set();
  let commandes = 0;
  for (const [base, names] of SKILLS) for (const n of names) {
    const txt = fs.readFileSync(path.join(ROOT, base, n, 'SKILL.md'), 'utf8');
    for (const [, span] of txt.matchAll(/`([^`\n]+)`/g)) for (const m of span.matchAll(/(?:^|[\s/])(scripts\/[\w./-]+?\.(?:js|py))(?![\w])(.*)$/g)) {
      const [, script, reste] = m, f = path.join(ROOT, script);
      if (!fs.existsSync(f)) { rates.push(`${n} : script absent ${script}`); continue; }
      const src = fs.readFileSync(f, 'utf8');
      for (const [o] of reste.matchAll(/--[a-z]+/g)) if (!src.includes(`'${o}'`) && !src.includes(`"${o}"`)) rates.push(`${n} : ${script} ne connaît pas ${o}`);
      if (!script.endsWith('msk-progress.js')) continue;
      const mots = []; for (const w of reste.trim().split(/\s+/)) { if (!/^[a-z]+$/.test(w) || mots.length === 2) break; mots.push(w); }
      if (!mots.length || vus.has(mots.join(' '))) continue;
      vus.add(mots.join(' ')); commandes++;
      const c = spawnSync(process.execPath, [f, ...mots], { env, encoding: 'utf8' });
      if (c.stdout.startsWith('node scripts/msk-progress.js init')) rates.push(`${n} : commande inconnue du CLI : ${mots.join(' ')}`);
    }
  }
  assert.deepStrictEqual(rates, []);
  assert.ok(commandes >= 10, `commandes msk-progress.js vérifiées : ${[...vus].join(', ')}`);
});
