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
const e = o => Object.assign({ date: '2026-09-29', region: 'epaule', items: [{ id: 'epaule.a01', trouve: true }] }, o);   // a01 trouvé : un refus tardif aurait déjà relevé son palier
const jour = n => new Date(Date.parse(P.today()) + n * 864e5).toISOString().slice(0, 10);   // aujourd'hui + n jours (calendrier local) : bornes de la période des dates de séance
const osaus = () => fs.readdirSync(path.join(H, 'osaus')).sort().map(f => f + '\n' + fs.readFileSync(path.join(H, 'osaus', f), 'utf8'));   // bilans OSAUS : un refus ne doit rien y écrire
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
  assert.throws(() => P.logbookAdd({ date: '2026-09-29', region: 'epaule', items: [{ id: 'epaule.s01', trouve: true }], commentaire: 'Mme Dupont très algique' }), P.GuardError);
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
  let c = cli('logbook', 'add', '--json', JSON.stringify({ date: '2026-09-29', region: 'epaule', items: [{ libelle: 'Mme Dupont' }] }));
  assert.strictEqual(c.status, 2, 'code 2 : refus du garde-fou'); assert.match(c.stderr, /^REFUS — données patient détectées : civilité suivie d'un nom/);
  c = cli('logbook', 'add', '--json', JSON.stringify(e({ region: 'nez' })));
  assert.strictEqual(c.status, 1, 'code 1 : erreur'); assert.match(c.stderr, /^ERREUR — région inconnue : nez/);
  assert.deepStrictEqual(prives(), etatAvant, 'aucun refus n\'a écrit quoi que ce soit');
  // ordre des écritures de l'entrée légitime : logbook.md, puis questions.md, puis progression.json en une seule écriture (fichier temporaire renommé)
  const ordre = [], ap = fs.appendFileSync, rn = fs.renameSync;
  fs.appendFileSync = (f, ...x) => { ordre.push(path.basename(f)); return ap(f, ...x); }; fs.renameSync = (s, d) => { ordre.push(path.basename(d)); return rn(s, d); };
  const r = P.logbookAdd({ date: '2026-09-29', region: 'epaule', examens: 3, dictes_seul: 1, items: [{ id: 'epaule.s01', trouve: true, difficulte: 2 }, { id: 'epaule.c01', trouve: true, dicte_seul: true }, { libelle: 'infra-épineux en grand axe', trouve: false, difficulte: 3 }], questions: ['Comment dégager l\'infra-épineux ?'] });
  fs.appendFileSync = ap; fs.renameSync = rn;
  assert.deepStrictEqual(ordre, ['logbook.md', 'questions.md', 'progression.json']);
  assert.strictEqual(r.questions, 1);
  assert.deepStrictEqual(r.maj.map(m => [m.itemId, m.etat, m.inchange]), [['epaule.s01', 3, false], ['epaule.c01', 4, false]]);
  const log = fs.readFileSync(path.join(H, 'logbook.md'), 'utf8');
  assert.match(log, /## 2026-09-29 — Épaule/); assert.match(log, /dictés sans aide : 1/); assert.match(log, /\(hors carte\) infra-épineux/);
  const s01 = P.etatList('epaule').items.find(i => i.id === 'epaule.s01').libelle; assert.ok(log.includes(`\n- epaule.s01 ${s01} : trouvé, difficulté 2\n`), 'ligne d\'item : identifiant et libellé de la compétence');
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.s01').etat, 3);
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.c01').etat, 4);
  assert.match(fs.readFileSync(path.join(H, 'questions.md'), 'utf8'), /- \[ \] 2026-09-29 \(epaule\) : Comment dégager/);
  P.logbookAdd({ date: '2026-09-30', region: 'epaule', items: [{ id: 'epaule.s01', trouve: false }] });
  assert.strictEqual(P.etatList('epaule').items.find(i => i.id === 'epaule.s01').etat, 3, 'un « non trouvé » n\'abaisse pas le palier');
  assert.throws(() => P.logbookAdd({ region: 'epaule', items: [] }), /date/);
  // région sans fiche (genou : sa question ne compte pas pour l'épaule) ; un texte multiligne est écrit sur une ligne, sans fausse entrée dans questions.md
  P.logbookAdd({ date: '2026-10-01', region: 'genou', commentaire: 'note\nsur deux lignes', questions: ['Récessus supra-patellaire :\n- [ ] quelle profondeur ?'] });
  assert.match(fs.readFileSync(path.join(H, 'logbook.md'), 'utf8'), /\n## 2026-10-01 — Genou\n- Note : note sur deux lignes\n/);
  assert.match(fs.readFileSync(path.join(H, 'questions.md'), 'utf8'), /\n- \[ \] 2026-10-01 \(genou\) : Récessus supra-patellaire : - \[ \] quelle profondeur \?\n$/);
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
test('forme : entiers bornés, date réelle et dans la période, trouve obligatoire, dicté seul seulement si trouvé', () => {
  const avant = prives();
  const cas = [
    [{ examens: 185037512345678 }, /^examens : entier de 0 à 200/],   // un numéro en nombre échappe au garde-fou, qui ne lit que les textes
    [{ examens: 201 }, /^examens : entier de 0 à 200/], [{ examens: 3, dictes_seul: 2.5 }, /^dictes_seul : entier de 0 à 200/],
    [{ items: [{ id: 'epaule.a01', trouve: true, difficulte: 19560312 }] }, /^difficulte : entier de 1 à 3/], [{ items: [{ id: 'epaule.a01', trouve: true, difficulte: 0 }] }, /^difficulte : entier de 1 à 3/],
    [{ date: '2026-13-45' }, /date/], [{ date: '2026-02-30' }, /date/],
    [{ date: '1956-03-12' }, /^date hors période : 1956-03-12 \(attendue du 2026-01-01 au \d{4}-\d{2}-\d{2}\)$/],   // une date de naissance n'est pas une date de séance
    [{ date: '2025-12-31' }, /^date hors période : 2025-12-31 /], [{ date: jour(3) }, new RegExp(`^date hors période : ${jour(3)} \\(attendue du 2026-01-01 au ${jour(2)}\\)$`)],
    [{ items: [{ id: 'epaule.a01' }] }, /^trouve : booléen obligatoire/], [{ items: [{ id: 'epaule.a01', trouve: false, dicte_seul: true }] }, /^dicte_seul : seulement pour une structure trouvée/],
  ];
  const rates = cas.filter(([o, re]) => { try { P.logbookAdd(e(o)); return true; } catch (err) { return !re.test(err.message); } }).map(([o]) => JSON.stringify(o));
  assert.deepStrictEqual(rates, [], 'entrées acceptées ou refusées pour une autre raison');
  assert.deepStrictEqual(prives(), avant, 'aucun refus n\'a écrit quoi que ce soit');
});
test('date de séance : du 2026-01-01 à aujourd\'hui + 2 jours, bornes comprises', () => {
  for (const date of ['2026-01-01', jour(2)]) P.logbookAdd({ date, region: 'hanche' });
  const log = fs.readFileSync(path.join(H, 'logbook.md'), 'utf8');
  for (const date of ['2026-01-01', jour(2)]) assert.ok(log.includes(`\n## ${date} — Hanche\n`), date);
});
test('une seule entrée par jour et par région (le critère de passage additionne les blocs)', () => {
  const avant = prives();
  assert.throws(() => P.logbookAdd({ date: '2026-09-29', region: 'epaule', items: [{ id: 'epaule.a01', trouve: true }] }), { message: 'une entrée existe déjà pour 2026-09-29 — Épaule ; corriger le logbook à la main ou utiliser une autre date' });
  assert.deepStrictEqual(prives(), avant, 'rien écrit');
  P.logbookAdd({ date: '2026-09-29', region: 'genou' });   // même jour, autre région : accepté
  assert.match(fs.readFileSync(path.join(H, 'logbook.md'), 'utf8'), /\n## 2026-09-29 — Genou\n$/);
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
    [['logbook', 'add', '--json', '{"date":"2026-09-29",'], /^ERREUR — --json : JSON invalide — /], [['logbook', 'add', '--json'], /^ERREUR — --json : JSON manquant/],
    [['logbook', 'add', '--file'], /^ERREUR — --file : chemin manquant/], [['logbook', 'add', '--file', path.join(H, 'absent.json')], /^ERREUR — --file : fichier introuvable : /],
    [['logbook', 'add', '--file', f], /^ERREUR — --file : JSON invalide — /], [['logbook', 'add'], /^ERREUR — logbook add : --json '<entrée>' ou --file <entrée\.json>/],
    [['init', '--repo'], /^ERREUR — --repo : chemin manquant/],
    [['etat', 'list', 'nez'], /^ERREUR — région inconnue : nez \(régions : epaule, genou, rachis, coude, poignet-main, hanche, cheville-pied, paroi-nerfs\)\n$/],
  ]) { const c = cli(...args); if (c.status !== 1 || !re.test(c.stderr)) rates.push(`${args.join(' ')} → ${c.status} ${c.stderr.trim()}`); }
  fs.rmSync(f);
  assert.deepStrictEqual(rates, []);
  assert.deepStrictEqual(prives(), avant);
});

// ---- tâche 9c : tests du brief (dates de séance ramenées dans la période : 2026-10-13 → 2026-09-29, 2026-10-15 → 2026-10-01) ----
test('plan : mode fiche sur l\'épaule, cibles et cas triés par palier, audio et anki détectés', () => {
  fs.writeFileSync(path.join(H, 'audio/epaule-socle-deep-dive.mp3'), ''); fs.writeFileSync(path.join(H, 'audio/genou-x.mp3'), '');
  const cfg = JSON.parse(fs.readFileSync(path.join(H, 'config.json'), 'utf8')); fs.writeFileSync(path.join(cfg.transfert_anki, 'msk-epaule.apkg'), '');
  const p = P.plan('epaule');
  assert.strictEqual(p.mode, 'fiche'); assert.ok(p.cibles.length <= 3); assert.ok(p.cas.length >= 1 && p.cas.length <= 2);
  assert.ok(p.cibles.every(c => ['coupe', 'structure', 'dynamique'].includes(c.type) && c.etat <= 2));
  assert.ok(!p.cibles.some(c => c.id === 'epaule.c01'), 'c01 est au palier 4 : pas une cible');
  assert.deepStrictEqual(p.audios.map(a => a.fichier), ['epaule-socle-deep-dive.mp3']); assert.ok(p.anki && p.anki.fichier.endsWith('msk-epaule.apkg'));
  assert.strictEqual(p.questions.length, 1); assert.strictEqual(p.critere.atteint, false); assert.strictEqual(p.critere.dictes_sans_aide, 1);
  assert.strictEqual(P.plan('genou').mode, 'socle');
});
test('bilan OSAUS : fichier mensuel, critère de passage', () => {
  assert.throws(() => P.bilan('epaule', [1, 2, 3], ''), /sept notes/);
  const b = P.bilan('epaule', [4, 4, 3, 4, 5, 4, 3], 'premier bilan');
  const f = path.join(H, 'osaus', b.fichier); assert.ok(fs.existsSync(f));
  assert.deepStrictEqual(JSON.parse(fs.readFileSync(f, 'utf8')).epaule.items, [4, 4, 3, 4, 5, 4, 3]);
  assert.strictEqual(b.critere.atteint, false, '10 examens dictés requis'); assert.deepStrictEqual(b.critere.osaus.items.slice(3, 6), [4, 5, 4]);
});
test('cas : pick (question d\'abord, puis item), record', () => {
  let c = P.casPick('epaule'); assert.strictEqual(c.source, 'question'); assert.match(c.texte, /infra-épineux/);
  fs.writeFileSync(path.join(H, 'questions.md'), '# Questions ouvertes\n\n- [x] 2026-09-29 (epaule) : traitée\n');
  c = P.casPick('epaule'); assert.strictEqual(c.source, 'item'); assert.ok(['pathologie', 'piege'].includes(c.item.type));
  if (c.item.type === 'pathologie') { assert.ok(c.pathologie && c.pathologie.nom); }
  const r = P.casRecord(c.item.id, 'su', 'cas/2026-10-01-test.md'); assert.strictEqual(r.etat, 2);
  assert.strictEqual(P.casRecord(c.item.id, 'pas-su').etat, 2, 'pas-su ne change pas le palier');
  assert.throws(() => P.casRecord(c.item.id, 'bof'), /su ou pas-su/);
});
test('audio ecoute', () => { assert.strictEqual(P.audioEcoute('epaule-socle-deep-dive.mp3').ecoute.length, 10); assert.ok(P.plan('epaule').audios[0].ecoute); });

// ---- tâche 9c : ajustements du contrôleur et durcissements (état : c01 au palier 4, s01 au 3, p01 au 2 après « su », a01 au 0) ----
test('textes libres hors logbook (source d\'etat set, fichier de cas, note de bilan, nom d\'épisode) : garde-fou d\'abord, refus (code 2), rien n\'est écrit', () => {
  const avant = [prives(), osaus()];
  const passes = [
    () => P.etatSet('epaule.p01', 3, 'Mme Dupont 06 12 34 56 78'), () => P.casRecord('epaule.p01', 'su', 'cas/Mme Dupont.md'),
    () => P.casRecord('epaule.p01', 'pas-su', 'cas/1956-03-12-epaule.p01.md'),   // seule une date de séance (période du logbook), en tête du nom du fichier de cas, échappe au garde-fou
    () => P.bilan('epaule', [4, 4, 3, 4, 5, 4, 3], 'revu avec\nMme Dupont'), () => P.audioEcoute('Mme Dupont.mp3'),
  ].filter(f => { try { f(); return true; } catch (err) { return !(err instanceof P.GuardError); } }).map(String);
  assert.deepStrictEqual(passes, [], 'appels non refusés par le garde-fou');
  const c = cli('etat', 'set', 'epaule.p01', '3', 'Mme Dupont 06 12 34 56 78');
  assert.strictEqual(c.status, 2, c.stderr); assert.strictEqual(c.stderr, 'REFUS — données patient détectées : civilité suivie d\'un nom (« Mme Dupont ») ; courriel ou téléphone (« 06 12 34 56 78 »)\n');
  assert.deepStrictEqual([prives(), osaus()], avant, 'aucun refus n\'a écrit quoi que ce soit');
});
test('validation avant toute écriture : cas record, cas pick, audio ecoute, bilan ; options du CLI nommées', () => {
  const avant = [prives(), osaus()], rates = [], q = path.join(H, 'questions.md'), q0 = fs.readFileSync(q, 'utf8');
  fs.appendFileSync(q, '- [ ] 2026-09-29 (nez) : question ajoutée à la main pour une région inventée\n');   // cas pick vérifie la région avant de lire les questions
  for (const [f, re] of [
    [() => P.casRecord('epaule.p99', 'pas-su'), /^identifiant absent de la fiche epaule : epaule\.p99$/],   // « pas su » sur un identifiant hors fiche : pas d'entrée fantôme
    [() => P.casRecord('nez.p01', 'pas-su'), /^région inconnue : nez/], [() => P.casRecord('epaule.p01', 'peut-être'), /^verdict : su ou pas-su$/],
    [() => P.casRecord('epaule.p01', 'su', 42), /^fichier : chemin attendu$/], [() => P.casPick('nez'), /^région inconnue : nez/],
    [() => P.audioEcoute(), /^audio ecoute : nom de l'épisode manquant \(épisodes : epaule-socle-deep-dive\.mp3, genou-x\.mp3\)$/],
    [() => P.audioEcoute('epaule-deep-dive.mp3'), /^épisode introuvable dans .+ : epaule-deep-dive\.mp3 \(épisodes : /], [() => P.audioEcoute('../config.json'), /^épisode introuvable dans /],
    [() => P.bilan('nez', [4, 4, 3, 4, 5, 4, 3], ''), /^région inconnue : nez/], [() => P.bilan('epaule', [4, 4, 3, 4, 5, 4, 3], 7), /^note : texte attendu$/],
  ]) { try { f(); rates.push(String(f) + ' accepté'); } catch (err) { if (!re.test(err.message)) rates.push(String(f) + ' : ' + err.message); } }
  fs.writeFileSync(q, q0);
  for (const [args, re] of [
    [['bilan', 'epaule', '--osaus'], /^ERREUR — OSAUS : sept notes entières de 1 à 5/], [['bilan', 'epaule', '--osaus', '4,4,3,4,5,4,3', '--note'], /^ERREUR — --note : texte manquant\n$/],
    [['cas', 'record', 'epaule.p01', 'su', '--fichier'], /^ERREUR — --fichier : chemin manquant\n$/], [['audio', 'ecoute'], /^ERREUR — audio ecoute : nom de l'épisode manquant/],
    [['plan', 'nez'], /^ERREUR — région inconnue : nez/],
  ]) { const c = cli(...args); if (c.status !== 1 || !re.test(c.stderr)) rates.push(`${args.join(' ')} → ${c.status} ${c.stderr.trim()}`); }
  assert.deepStrictEqual(rates, []);
  assert.deepStrictEqual([prives(), osaus()], avant, 'rien écrit');
});
test('critère de passage : 10 examens dictés sans aide (ligne Examens des blocs de la région) et OSAUS ≥ 4 aux items 4, 5, 6 du dernier bilan', () => {
  const crit = () => P.plan('epaule').critere;
  assert.strictEqual(crit().dictes_sans_aide, 1);
  P.logbookAdd({ date: '2026-09-28', region: 'genou', examens: 5, dictes_seul: 5 });   // autre région : ne compte pas
  P.logbookAdd({ date: '2026-09-27', region: 'epaule', commentaire: 'objectif : dictés sans aide : 50' });   // texte libre : ne compte pas
  P.logbookAdd({ date: '2026-09-28', region: 'epaule', examens: 9, dictes_seul: 8 });
  assert.deepStrictEqual([crit().dictes_sans_aide, crit().atteint], [9, false]);
  P.logbookAdd({ date: '2026-09-26', region: 'epaule', examens: 2, dictes_seul: 1 });
  let c = crit(); assert.deepStrictEqual([c.dictes_sans_aide, c.atteint, c.osaus.items], [10, true, [4, 4, 3, 4, 5, 4, 3]], '10 dictés, et 4, 5, 4 aux items 4 à 6');
  const b = P.bilan('epaule', [5, 5, 5, 5, 5, 3, 5], 'documentation\nà reprendre');   // documentation (item 6) sous 4 ; le bilan du mois est remplacé
  assert.deepStrictEqual([b.critere.dictes_sans_aide, b.critere.atteint, b.paliers.reduce((a, n) => a + n)], [10, false, 5]);
  const o = JSON.parse(fs.readFileSync(path.join(H, 'osaus', b.fichier), 'utf8')).epaule;
  assert.deepStrictEqual([o.items, o.note, o.date], [[5, 5, 5, 5, 5, 3, 5], 'documentation à reprendre', P.today()]);
  assert.match(o.grille, /^OSAUS \(Tolsgaard et coll\., 2013\) : indication, appareil, image, examen systématique, interprétation, documentation, décision/);
  for (const f of ['brouillon.json', '2026-09.json']) fs.writeFileSync(path.join(H, 'osaus', f), JSON.stringify({ epaule: { items: [5, 5, 5, 5, 5, 5, 5] } }));   // hors AAAA-MM.json, et mois antérieur : le dernier bilan l'emporte
  c = crit(); assert.deepStrictEqual([c.osaus.fichier, c.atteint], [b.fichier, false]);
  assert.strictEqual(P.plan('genou').critere.osaus, null);
});
test('tri déterministe des cibles et des cas : palier le plus bas d\'abord, puis ordre de la fiche ; mode socle complet', () => {
  const p = P.plan('epaule');
  assert.deepStrictEqual([p.cibles, p.cas.map(c => [c.id, c.etat])], [[], [['epaule.a01', 0], ['epaule.p01', 2]]], 'squelette : c01 (4) et s01 (3) au-dessus du palier 2 ; a01 (0) avant p01 (2)');
  assert.strictEqual(p.anki.modifie, P.today(), 'date locale du paquet');
  const c = P.casPick('epaule'); assert.deepStrictEqual([c.source, c.item.id, c.etat, c.image, c.pathologie], ['item', 'epaule.a01', 0, null, null]);
  P.etatSet('epaule.c01', 2, 'test', true); P.etatSet('epaule.s01', 1, 'test', true);
  assert.deepStrictEqual(P.plan('epaule').cibles.map(c => [c.id, c.etat]), [['epaule.s01', 1], ['epaule.c01', 2]]);
  P.etatSet('epaule.c01', 1, 'test', true);
  assert.deepStrictEqual(P.plan('epaule').cibles.map(c => c.id), ['epaule.c01', 'epaule.s01'], 'à palier égal, ordre de la fiche');
  const g = P.plan('genou');
  assert.deepStrictEqual([g.mode, g.cibles, g.cas, g.paliers, g.audios.map(a => a.fichier), g.questions], ['socle', [], [], [0, 0, 0, 0, 0], ['genou-x.mp3'], []]);
  assert.deepStrictEqual(g.critere, { dictes_sans_aide: 5, osaus: null, atteint: false });
});
