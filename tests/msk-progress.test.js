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
const prives = () => ['logbook.md', 'questions.md', 'progression.json', 'config.json'].map(f => fs.readFileSync(path.join(H, f), 'utf8'));   // un refus ne doit rien y écrire
const e = o => Object.assign({ date: '2026-10-13', region: 'epaule', items: [{ id: 'epaule.a01', trouve: true }] }, o);   // a01 trouvé : un refus tardif aurait déjà relevé son palier
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
  // entrée mal formée, ou identifiant hors des champs prévus : refus avant toute écriture
  const etatAvant = prives();
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
  assert.deepStrictEqual(prives(), etatAvant, 'aucun refus n\'a écrit quoi que ce soit');
  // ordre des écritures de l'entrée légitime : logbook.md, puis questions.md, puis progression.json en une seule écriture (fichier temporaire renommé)
  const ordre = [], ap = fs.appendFileSync, rn = fs.renameSync;
  fs.appendFileSync = (f, ...x) => { ordre.push(path.basename(f)); return ap(f, ...x); }; fs.renameSync = (s, d) => { ordre.push(path.basename(d)); return rn(s, d); };
  const r = P.logbookAdd({ date: '2026-10-13', region: 'epaule', examens: 3, dictes_seul: 1, items: [{ id: 'epaule.s01', trouve: true, difficulte: 2 }, { id: 'epaule.c01', trouve: true, dicte_seul: true }, { libelle: 'infra-épineux en grand axe', trouve: false, difficulte: 3 }], questions: ['Comment dégager l\'infra-épineux ?'] });
  fs.appendFileSync = ap; fs.renameSync = rn;
  assert.deepStrictEqual(ordre, ['logbook.md', 'questions.md', 'progression.json']);
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
test('garde-fou d\'abord, sur le texte tel qu\'il sera écrit et tel que dicté : refus (code 2), rien n\'est écrit', () => {
  const avant = prives();
  const cas = [
    { questions: ['Rappeler au 06\n12 34 56 78'] }, { commentaire: 'secu 1 85 03 75\n123 456 78' },   // coupés par un retour à la ligne, écrits sur une ligne : un numéro
    { commentaire: 'Coupe 3 vue\nVient de Libourne, épaule droite' },   // le retour à la ligne marque un début de phrase : la lecture d'origine compte aussi
    { region: 'Mme Dupont' }, { examens: 'Mme Dupont', items: 'le patient Dupont' },   // avant la forme : un identifiant dans un champ mal formé est un refus, pas une erreur
  ];
  const passes = cas.filter(o => { try { P.logbookAdd(e(o)); return true; } catch (err) { return !(err instanceof P.GuardError); } });
  assert.deepStrictEqual(passes, [], 'entrées non refusées par le garde-fou');
  assert.throws(() => P.logbookAdd(e({ items: [{ id: 'epaule.a01', trouve: true }, { id: 'epaule.c01', trouve: 'oui' }] })), /trouve/, 'item valide trouvé, puis item invalide');
  const c = cli('logbook', 'add', '--json', JSON.stringify(e({ questions: ['Rappeler au 06\n12 34 56 78'] })));
  assert.strictEqual(c.status, 2, c.stderr); assert.match(c.stderr, /^REFUS — données patient détectées : courriel ou téléphone \(« 06 12 34 56 78 »\)/);
  assert.deepStrictEqual(prives(), avant, 'aucun refus n\'a écrit quoi que ce soit');
});
test('forme : entiers bornés, date réelle, trouve obligatoire, dicté seul seulement si trouvé', () => {
  const avant = prives();
  const cas = [
    [{ examens: 185037512345678 }, /^examens : entier de 0 à 200/],   // un numéro en nombre échappe au garde-fou, qui ne lit que les textes
    [{ examens: 201 }, /^examens : entier de 0 à 200/], [{ examens: 3, dictes_seul: 2.5 }, /^dictes_seul : entier de 0 à 200/],
    [{ items: [{ id: 'epaule.a01', trouve: true, difficulte: 19560312 }] }, /^difficulte : entier de 1 à 3/], [{ items: [{ id: 'epaule.a01', trouve: true, difficulte: 0 }] }, /^difficulte : entier de 1 à 3/],
    [{ date: '2026-13-45' }, /date/], [{ date: '2026-02-30' }, /date/],
    [{ items: [{ id: 'epaule.a01' }] }, /^trouve : booléen obligatoire/], [{ items: [{ id: 'epaule.a01', trouve: false, dicte_seul: true }] }, /^dicte_seul : seulement pour une structure trouvée/],
  ];
  const rates = cas.filter(([o, re]) => { try { P.logbookAdd(e(o)); return true; } catch (err) { return !re.test(err.message); } }).map(([o]) => JSON.stringify(o));
  assert.deepStrictEqual(rates, [], 'entrées acceptées ou refusées pour une autre raison');
  assert.deepStrictEqual(prives(), avant, 'aucun refus n\'a écrit quoi que ce soit');
});
test('une seule entrée par jour et par région (le critère de passage additionne les blocs)', () => {
  const avant = prives();
  assert.throws(() => P.logbookAdd({ date: '2026-10-13', region: 'epaule', items: [{ id: 'epaule.a01', trouve: true }] }), { message: 'une entrée existe déjà pour 2026-10-13 — Épaule ; corriger le logbook à la main ou utiliser une autre date' });
  assert.deepStrictEqual(prives(), avant, 'rien écrit');
  P.logbookAdd({ date: '2026-10-13', region: 'genou' });   // même jour, autre région : accepté
  assert.match(fs.readFileSync(path.join(H, 'logbook.md'), 'utf8'), /\n## 2026-10-13 — Genou\n$/);
});
test('etat set : seulement un identifiant de la fiche de sa région', () => {
  const avant = prives(), rates = [];
  for (const [id, re] of [['epaule.c99', /^identifiant absent de la fiche epaule : epaule\.c99$/], ['genou.c01', /^identifiant absent de la fiche genou : genou\.c01$/], ['nez.c01', /^région inconnue : nez/]]) {
    try { P.etatSet(id, 1, 'test'); rates.push(id + ' accepté'); } catch (err) { if (!re.test(err.message)) rates.push(id + ' : ' + err.message); }
  }
  assert.deepStrictEqual(rates, []);
  const c = cli('etat', 'set', 'epaule.c99', '1', 'test'); assert.strictEqual(c.status, 1); assert.match(c.stderr, /^ERREUR — identifiant absent de la fiche epaule : epaule\.c99/);
  assert.deepStrictEqual(prives(), avant, 'aucune entrée fantôme');
});
test('dépôt configuré : vérifié à chaque commande, réparable par init --repo (seul repo change)', (t) => {
  const cfgF = path.join(H, 'config.json'), cfg0 = fs.readFileSync(cfgF, 'utf8');
  const vide = fs.mkdtempSync(path.join(os.tmpdir(), 'msk-repo-')), autre = fs.mkdtempSync(path.join(os.tmpdir(), 'msk-repo-'));
  t.after(() => { for (const d of [vide, autre]) fs.rmSync(d, { recursive: true, force: true }); fs.writeFileSync(cfgF, cfg0); });
  fs.writeFileSync(cfgF, JSON.stringify(Object.assign(JSON.parse(cfg0), { repo: vide })));   // dépôt déplacé après init
  assert.throws(() => P.etatList('epaule'), { message: `config.json : repo = ${vide} ne contient pas les fiches MSK — relancer : node scripts/msk-progress.js init --repo <dépôt>` });
  fs.mkdirSync(path.join(autre, 'js/data/msk'), { recursive: true }); fs.writeFileSync(path.join(autre, 'js/data/registry.js'), '');
  const reste = () => ['logbook.md', 'questions.md', 'progression.json'].map(f => fs.readFileSync(path.join(H, f), 'utf8')), avant = reste();
  P.init(autre);
  const cfg = JSON.parse(fs.readFileSync(cfgF, 'utf8'));
  assert.strictEqual(cfg.repo, autre); assert.deepStrictEqual(Object.assign(cfg, { repo: ROOT }), JSON.parse(cfg0), 'seul repo change'); assert.deepStrictEqual(reste(), avant, 'autres fichiers intacts');
  assert.throws(() => P.init(vide), /--repo : .* ne contient pas les fiches MSK/); assert.strictEqual(JSON.parse(fs.readFileSync(cfgF, 'utf8')).repo, autre, 'un dépôt sans fiches n\'est pas enregistré');
  const c = cli('init', '--repo', ROOT);
  assert.strictEqual(c.status, 0, c.stderr); assert.strictEqual(c.stdout, `repo mis à jour : ${ROOT}\ndossier privé prêt : ${H}\n`);
  assert.strictEqual(fs.readFileSync(cfgF, 'utf8'), cfg0); assert.deepStrictEqual(reste(), avant);
  assert.strictEqual(cli('init').stdout, `dossier privé prêt : ${H}\n`, 'sans --repo, rien n\'est annoncé ni changé');
});
test('date du calendrier local, pas UTC', () => {
  const tz = process.env.TZ;
  try {
    for (const z of ['Pacific/Kiritimati', 'Pacific/Pago_Pago', 'Europe/Paris']) {   // UTC+14 et UTC-11 : à toute heure, l'une des deux n'a pas la date UTC
      process.env.TZ = z;
      const avant = new Date().toLocaleDateString('sv-SE'), d = P.today(), apres = new Date().toLocaleDateString('sv-SE');
      assert.ok(d === avant || d === apres, `${z} : ${d} au lieu de ${avant}`);
    }
  } finally { if (tz === undefined) delete process.env.TZ; else process.env.TZ = tz; }
});
test('CLI : chaque erreur d\'entrée nomme son option ; une région inconnue liste les régions', () => {
  const avant = prives(), f = path.join(H, 'entree-invalide.json');
  fs.writeFileSync(f, '{"date":');
  const rates = [];
  for (const [args, re] of [
    [['logbook', 'add', '--json', '{"date":"2026-10-13",'], /^ERREUR — --json : JSON invalide — /], [['logbook', 'add', '--json'], /^ERREUR — --json : JSON manquant/],
    [['logbook', 'add', '--file'], /^ERREUR — --file : chemin manquant/], [['logbook', 'add', '--file', path.join(H, 'absent.json')], /^ERREUR — --file : fichier introuvable : /],
    [['logbook', 'add', '--file', f], /^ERREUR — --file : JSON invalide — /], [['logbook', 'add'], /^ERREUR — logbook add : --json '<entrée>' ou --file <entrée\.json>/],
    [['init', '--repo'], /^ERREUR — --repo : chemin manquant/],
    [['etat', 'list', 'nez'], /^ERREUR — région inconnue : nez \(régions : epaule, genou, rachis, coude, poignet-main, hanche, cheville-pied, paroi-nerfs\)\n$/],
  ]) { const c = cli(...args); if (c.status !== 1 || !re.test(c.stderr)) rates.push(`${args.join(' ')} → ${c.status} ${c.stderr.trim()}`); }
  fs.rmSync(f);
  assert.deepStrictEqual(rates, []);
  assert.deepStrictEqual(prives(), avant);
});
