// scripts/msk-skills-install.js
/* Copie les skills de coaching (source versionnée : .claude/skills-global/) vers ~/.claude/skills/ (ou $MSK_SKILLS_TARGET).
   Idempotent : écrase la copie précédente. À relancer après toute modification d'une skill globale. node scripts/msk-skills-install.js */
const fs = require('fs'), os = require('os'), path = require('path');
const SRC = path.join(__dirname, '../.claude/skills-global');
function installer(target) {
  target = target || process.env.MSK_SKILLS_TARGET || path.join(os.homedir(), '.claude/skills');
  const done = [];
  for (const name of fs.readdirSync(SRC).filter(n => fs.statSync(path.join(SRC, n)).isDirectory()).sort()) {
    const dst = path.join(target, name);
    fs.rmSync(dst, { recursive: true, force: true }); fs.cpSync(path.join(SRC, name), dst, { recursive: true }); done.push(dst);
  }
  return done;
}
if (require.main === module) installer().forEach(d => console.log('installée : ' + d));
module.exports = { installer };
