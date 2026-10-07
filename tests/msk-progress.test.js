// tests/msk-progress.test.js
const test = require('node:test');
const assert = require('node:assert');
const fs = require('fs'), os = require('os'), path = require('path');
const { spawnSync } = require('child_process');
process.env.ECHO_MSK_HOME = fs.mkdtempSync(path.join(os.tmpdir(), 'msk-home-'));
process.env.ECHO_MSK_ICLOUD = fs.mkdtempSync(path.join(os.tmpdir(), 'msk-icloud-'));
const P = require('../scripts/msk-progress');
const ROOT = path.resolve(__dirname, '..');
const H = process.env.ECHO_MSK_HOME;
const cli = (...args) => spawnSync(process.execPath, [path.join(ROOT, 'scripts/msk-progress.js'), ...args], { env: process.env, encoding: 'utf8' });   // même dossier factice que le module
test.after(() => { for (const d of [H, process.env.ECHO_MSK_ICLOUD]) fs.rmSync(d, { recursive: true, force: true }); });   // dossiers factices (jamais le vrai dossier privé), supprimés après le dernier test du fichier

test('init : arborescence, config, fichiers vides ; idempotent', () => {
  P.init(ROOT); P.init(ROOT);
  for (const f of ['config.json', 'progression.json', 'logbook.md', 'questions.md', 'cas', 'semaines', 'osaus', 'audio', 'anki']) assert.ok(fs.existsSync(path.join(H, f)), f);
  const cfg = JSON.parse(fs.readFileSync(path.join(H, 'config.json'), 'utf8'));
  assert.strictEqual(cfg.repo, ROOT); assert.ok(fs.existsSync(cfg.transfert_anki)); assert.deepStrictEqual(cfg.regions_actives, ['epaule']);
  for (const d of [cfg.transfert_anki, cfg.transfert_audio]) assert.ok(d.startsWith(process.env.ECHO_MSK_ICLOUD + path.sep), 'transfert dans l\'iCloud factice : ' + d);
});
test('etat set / list : paliers, jamais d\'abaissement sans --force', () => {
  assert.deepStrictEqual(P.etatSet('epaule.c01', 1, 'fiche'), { itemId: 'epaule.c01', etat: 1, inchange: false });
  assert.deepStrictEqual(P.etatSet('epaule.c01', 3, 'logbook').etat, 3);
  assert.deepStrictEqual(P.etatSet('epaule.c01', 2, 'cas'), { itemId: 'epaule.c01', etat: 3, inchange: true });
  assert.strictEqual(P.etatSet('epaule.c01', 1, 'correction', true).etat, 1);
  assert.throws(() => P.etatSet('epaule.x01', 1), /identifiant invalide/); assert.throws(() => P.etatSet('epaule.c01', 5), /palier/);
  const c = cli('etat', 'set', 'epaule.c01', '1', '--force');   // source omise : --force n'est pas pris pour la source
  assert.strictEqual(c.status, 0, c.stderr); assert.deepStrictEqual(JSON.parse(c.stdout), { itemId: 'epaule.c01', etat: 1, inchange: false });
  assert.strictEqual(P.progression().items['epaule.c01'].historique.at(-1)[2], 'manuel');
  const l = P.etatList('epaule');
  assert.strictEqual(l.nom, 'Épaule'); assert.ok(l.fiche); assert.strictEqual(l.items.find(i => i.id === 'epaule.c01').etat, 1); assert.strictEqual(l.paliers.reduce((a, b) => a + b), l.items.length);
  assert.throws(() => P.etatList('nez'), /région inconnue : nez/);
  const g = P.etatList('genou'); assert.strictEqual(g.fiche, false); assert.deepStrictEqual(g.items, []);
});
test('logbook add : refus sans écriture, puis entrée légitime, états et questions', () => {
  const avant = fs.readFileSync(path.join(H, 'logbook.md'), 'utf8');
  assert.throws(() => P.logbookAdd({ date: '2026-10-13', region: 'epaule', items: [{ id: 'epaule.s01', trouve: true }], commentaire: 'Mme Dupont très algique' }), P.GuardError);
  assert.strictEqual(fs.readFileSync(path.join(H, 'logbook.md'), 'utf8'), avant, 'rien écrit après un refus');
  // entrée mal formée, ou identifiant hors des champs prévus : refus avant toute écriture (a01 trouvé : un refus tardif aurait déjà relevé son palier)
  const fichiers = () => ['logbook.md', 'questions.md', 'progression.json'].map(f => fs.readFileSync(path.join(H, f), 'utf8')), etatAvant = fichiers();
  const e = o => Object.assign({ date: '2026-10-13', region: 'epaule', items: [{ id: 'epaule.a01', trouve: true }] }, o);
  assert.throws(() => P.logbookAdd(e({ region: 'Mme Dupont' })), /région inconnue/);
  assert.throws(() => P.logbookAdd(e({ questions: 'texte' })), /items et questions doivent être des tableaux/, 'une chaîne n\'est pas éclatée en caractères');
  assert.throws(() => P.logbookAdd(e({ items: { id: 'epaule.a01', trouve: true } })), /items et questions doivent être des tableaux/);
  assert.throws(() => P.logbookAdd(e({ examens: '3' })), /examens/);
  assert.throws(() => P.logbookAdd(e({ dictes_seul: NaN })), /dictes_seul/);
  assert.throws(() => P.logbookAdd(e({ dictes_seul: 1 })), /dictes_seul/, 'dictés sans aide sans nombre d\'examens : perdu pour le critère de passage');
  assert.throws(() => P.logbookAdd(e({ examens: 1, dictes_seul: 2 })), /au plus examens/);
  assert.throws(() => P.logbookAdd(e({ items: [{ id: 'epaule.a01', trouve: true, difficulte: '2' }] })), /difficulte/);
  assert.throws(() => P.logbookAdd(e({ items: [{ id: 'epaule.a01', trouve: 'false' }] })), /trouve/, '« false » en texte relèverait le palier');
  assert.throws(() => P.logbookAdd(e({ items: ['epaule.a01'] })), /objets/);
  assert.throws(() => P.logbookAdd(e({ questions: [42] })), /questions : textes attendus/);
  assert.throws(() => P.logbookAdd(e({ items: [{ id: 'epaule.s99', trouve: true }] })), /absent de la fiche epaule : epaule\.s99/);
  assert.throws(() => P.logbookAdd(e({ items: [{ id: 'epaule.a01', trouve: true, remarque: 'revu avec Mme Dupont' }] })), P.GuardError, 'garde-fou sur tout texte de l\'entrée');
  assert.throws(() => P.logbookAdd(e({ examens: 2, contexte: { lieu: 'habite à Bergerac' } })), P.GuardError);
  let c = cli('logbook', 'add', '--json', JSON.stringify({ date: '2026-10-13', region: 'epaule', items: [{ libelle: 'Mme Dupont' }] }));
  assert.strictEqual(c.status, 2, 'code 2 : refus du garde-fou'); assert.match(c.stderr, /^REFUS — données patient détectées : civilité suivie d'un nom/);
  c = cli('logbook', 'add', '--json', JSON.stringify(e({ region: 'nez' })));
  assert.strictEqual(c.status, 1, 'code 1 : erreur'); assert.match(c.stderr, /^ERREUR — région inconnue : nez/);
  assert.deepStrictEqual(fichiers(), etatAvant, 'aucun refus n\'a écrit quoi que ce soit');
  const r = P.logbookAdd({ date: '2026-10-13', region: 'epaule', examens: 3, dictes_seul: 1, items: [{ id: 'epaule.s01', trouve: true, difficulte: 2 }, { id: 'epaule.c01', trouve: true, dicte_seul: true }, { libelle: 'infra-épineux en grand axe', trouve: false, difficulte: 3 }], questions: ['Comment dégager l\'infra-épineux ?'] });
  assert.strictEqual(r.questions, 1);
  assert.deepStrictEqual(r.maj.map(m => [m.itemId, m.etat, m.inchange]), [['epaule.s01', 3, false], ['epaule.c01', 4, false]]);
  const log = fs.readFileSync(path.join(H, 'logbook.md'), 'utf8');
  assert.match(log, /## 2026-10-13 — Épaule/); assert.match(log, /dictés sans aide : 1/); assert.match(log, /\(hors carte\) infra-épineux/);
  const s01 = P.etatList('epaule').items.find(i => i.id === 'epaule.s01').libelle; assert.ok(log.includes(`\n- epaule.s01 ${s01} : trouvé, difficulté 2\n`), 'ligne d\'item : identifiant et libellé de la compétence');
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.s01').etat, 3);
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.c01').etat, 4);
  assert.match(fs.readFileSync(path.join(H, 'questions.md'), 'utf8'), /- \[ \] 2026-10-13 \(epaule\) : Comment dégager/);
  P.logbookAdd({ date: '2026-10-14', region: 'epaule', items: [{ id: 'epaule.s01', trouve: false }] });
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.s01').etat, 3, 'un « non trouvé » n\'abaisse pas le palier');
  assert.throws(() => P.logbookAdd({ region: 'epaule', items: [] }), /date/);
  // région sans fiche (genou : sa question ne compte pas pour l'épaule) ; un texte multiligne est écrit sur une ligne, sans fausse entrée dans questions.md
  P.logbookAdd({ date: '2026-10-15', region: 'genou', commentaire: 'note\nsur deux lignes', questions: ['Récessus supra-patellaire :\n- [ ] quelle profondeur ?'] });
  assert.match(fs.readFileSync(path.join(H, 'logbook.md'), 'utf8'), /\n## 2026-10-15 — Genou\n- Note : note sur deux lignes\n/);
  assert.match(fs.readFileSync(path.join(H, 'questions.md'), 'utf8'), /\n- \[ \] 2026-10-15 \(genou\) : Récessus supra-patellaire : - \[ \] quelle profondeur \?\n$/);
  assert.deepStrictEqual(fs.readdirSync(H).filter(x => x.endsWith('.part')), [], 'écritures JSON par fichier temporaire renommé : aucun reste');
});
