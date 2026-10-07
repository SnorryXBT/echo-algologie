/* CLI d'état privé du volet MSK (spec §8-9). Dossier : $ECHO_MSK_HOME ou ~/Claude/Projects/Écho MSK — jamais dans le dépôt.
   node scripts/msk-progress.js init [--repo <dépôt>]
   node scripts/msk-progress.js etat set <itemId> <palier 0-4> <source> [--force]
   node scripts/msk-progress.js etat list <region>
   node scripts/msk-progress.js logbook add --json '<entrée>' | --file <entrée.json>
   node scripts/msk-progress.js plan <region>
   node scripts/msk-progress.js bilan <region> --osaus 1,2,3,4,5,4,3 [--note "…"]
   node scripts/msk-progress.js cas pick <region> | cas record <itemId> su|pas-su [--fichier <chemin>]
   node scripts/msk-progress.js audio ecoute <fichier>
   init --repo sur un dossier déjà initialisé : seul repo change dans config.json (dépôt déplacé) ; toute commande qui lit les fiches vérifie ce dépôt.
   etat set : identifiant d'une compétence de la fiche de sa région ; un palier ne redescend qu'avec --force.
   Entrée : { date: 'AAAA-MM-JJ', region, examens?, dictes_seul?, items?: [{ id? | libelle?, trouve, difficulte?, dicte_seul? }], questions?: [textes], commentaire? }
   D'abord le garde-fou, sur tout texte de l'entrée sauf la date, tel qu'il sera écrit (sur une ligne) et tel que dicté. Puis la forme : date réelle,
   region parmi ECHO.mskRegions, une seule entrée par jour et par région, examens et dictes_seul entiers de 0 à 200 (dictes_seul ≤ examens),
   id parmi les compétences de la fiche, trouve booléen obligatoire, dicte_seul seulement si trouvé, difficulte entier de 1 à 3.
   Puis les écritures : logbook.md, questions.md, et progression.json en une fois.
   Sortie JSON (init : lignes de texte ; commande inconnue : cet usage) ; erreur ou refus : une ligne sur stderr.
   Codes : 0 ok · 1 erreur · 2 refus du garde-fou données patient. Entrée invalide (1) ou refusée (2) : rien n'est écrit.
   Transferts vers l'iPhone (Anki, audio), créés par init : $ECHO_MSK_ICLOUD ou ~/Library/Mobile Documents/com~apple~CloudDocs/Écho MSK.
   Les skills de coaching passent par ces commandes et n'écrivent jamais le dossier privé elles-mêmes. */
const fs = require('fs'), os = require('os'), path = require('path');
const { verifierTextes } = require('./lib/phi-guard');
const { loadEcho } = require('./lib/load-echo');
const slug = require('./lib/slug');
const HOME = () => process.env.ECHO_MSK_HOME || path.join(os.homedir(), 'Claude/Projects/Écho MSK');
const ICLOUD = () => process.env.ECHO_MSK_ICLOUD || path.join(os.homedir(), 'Library/Mobile Documents/com~apple~CloudDocs/Écho MSK');
const today = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };   // calendrier local (Europe/Paris), pas UTC : passé minuit, c'est le lendemain
const P = f => path.join(HOME(), f);
const readJson = (f, d) => {   // absent : la valeur par défaut, sinon une erreur qui nomme le fichier ; JSON illisible : erreur qui nomme le fichier
  if (!fs.existsSync(f)) { if (d !== undefined) return d; throw new Error('fichier introuvable : ' + f); }
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { throw new Error(f + ' : ' + e.message, { cause: e }); }
};
const writeJson = (f, o) => {   // écrit à côté puis renomme (atomique sur un même volume) : une écriture interrompue ne laisse jamais un JSON tronqué
  const t = `${f}.${process.pid}.part`;
  try { fs.writeFileSync(t, JSON.stringify(o, null, 1) + '\n'); fs.renameSync(t, f); } catch (e) { fs.rmSync(t, { force: true }); throw e; }
};
const ID_RE = /^([a-z-]+)\.([cspdag])(\d{2})$/;
class GuardError extends Error { constructor(hits) { super('données patient détectées : ' + hits.map(h => `${h.motif} (« ${h.extrait} »)`).join(' ; ')); this.hits = hits; } }
const depotMsk = r => typeof r === 'string' && fs.existsSync(path.join(r, 'js/data/registry.js')) && fs.existsSync(path.join(r, 'js/data/msk'));

function init(repo) {
  const home = HOME(), r = path.resolve(repo || path.join(__dirname, '..'));
  if (!depotMsk(r)) throw new Error(`--repo : ${r} ne contient pas les fiches MSK (js/data/registry.js, js/data/msk)`);
  for (const d of ['', 'cas', 'semaines', 'osaus', 'audio', 'anki']) fs.mkdirSync(path.join(home, d), { recursive: true });
  if (!fs.existsSync(P('config.json'))) writeJson(P('config.json'), { repo: r, transfert_anki: path.join(ICLOUD(), 'anki'), transfert_audio: path.join(ICLOUD(), 'audio'), regions_actives: ['epaule'] });
  else if (repo) { const c = readJson(P('config.json')); if (c.repo !== r) writeJson(P('config.json'), Object.assign(c, { repo: r })); }   // --repo explicite sur un dossier initialisé : seul repo change
  const cfg = readJson(P('config.json'));
  for (const d of [cfg.transfert_anki, cfg.transfert_audio]) fs.mkdirSync(d, { recursive: true });
  if (!fs.existsSync(P('progression.json'))) writeJson(P('progression.json'), { items: {}, audio: {} });
  if (!fs.existsSync(P('logbook.md'))) fs.writeFileSync(P('logbook.md'), '# Logbook — pratique délibérée, écho MSK\n\nUne entrée par journée d\'HDJ, structurée, sans aucune donnée patient (garde-fou : scripts/lib/phi-guard.js du dépôt).\n');
  if (!fs.existsSync(P('questions.md'))) fs.writeFileSync(P('questions.md'), '# Questions ouvertes\n\n');
  return home;
}
const config = () => {
  const c = readJson(P('config.json'), null);
  if (!c) throw new Error(`dossier privé non initialisé (${HOME()}) : node scripts/msk-progress.js init`);
  if (!depotMsk(c.repo)) throw new Error(`config.json : repo = ${c.repo} ne contient pas les fiches MSK — relancer : node scripts/msk-progress.js init --repo <dépôt>`);
  return c;
};
const progression = () => readJson(P('progression.json'), { items: {}, audio: {} });
const fiche = region => {   // région absente de ECHO.mskRegions : erreur, quelle que soit la commande (rien n'est lu ni écrit pour une région inventée)
  const E = loadEcho({ msk: true }, config().repo), regions = E.mskRegions || [], r = regions.find(x => x.id === region);
  if (!r) throw new Error(`région inconnue : ${region} (régions : ${regions.map(x => x.id).join(', ')})`);
  return { f: E.msk[region], nom: r.nom };
};
const competence = (f, id) => ((f || {}).competences || []).some(c => c.id === id);
const relever = (pr, itemId, palier, source, force) => {   // en mémoire ; un palier ne redescend jamais sans force
  const it = pr.items[itemId] || { etat: 0, maj: null, historique: [] };
  if (palier < it.etat && !force) return { itemId, etat: it.etat, inchange: true };
  it.etat = palier; it.maj = today(); it.historique.push([it.maj, palier, source || 'manuel']); pr.items[itemId] = it;
  return { itemId, etat: palier, inchange: false };
};

function etatSet(itemId, palier, source, force) {
  const m = ID_RE.exec(itemId || ''); if (!m) throw new Error('identifiant invalide : ' + itemId);
  palier = Number(palier); if (!Number.isInteger(palier) || palier < 0 || palier > 4) throw new Error('palier : entier de 0 à 4');
  if (!competence(fiche(m[1]).f, itemId)) throw new Error(`identifiant absent de la fiche ${m[1]} : ${itemId}`);
  const pr = progression(), r = relever(pr, itemId, palier, source, force);
  if (!r.inchange) writeJson(P('progression.json'), pr);
  return r;
}
function etatList(region) {
  const { f, nom } = fiche(region), pr = progression();
  const items = (f ? f.competences : []).map(c => { const s = pr.items[c.id] || { etat: 0, maj: null }; return { id: c.id, type: c.type, libelle: c.libelle, niveau: c.niveau, etat: s.etat, maj: s.maj }; });
  const paliers = [0, 0, 0, 0, 0]; items.forEach(i => paliers[i.etat]++);
  return { region, nom, fiche: !!f, items, paliers };
}
const textes = v => typeof v === 'string' ? [v] : v && typeof v === 'object' ? Object.values(v).flatMap(textes) : [];   // toutes les chaînes d'une valeur JSON, à toute profondeur
const uneLigne = s => s.replace(/\s+/g, ' ').trim();   // un retour à la ligne dans un texte fabriquerait une fausse ligne de logbook.md ou de questions.md
const entier = (v, champ, min, max) => { if (v != null && !(Number.isInteger(v) && v >= min && v <= max)) throw new Error(`${champ} : entier de ${min} à ${max} attendu`); };
const AAAAMMJJ = /^\d{4}-\d{2}-\d{2}$/;
const dateReelle = d => typeof d === 'string' && AAAAMMJJ.test(d) && !isNaN(new Date(d)) && new Date(d).toISOString().startsWith(d);   // « 2026-02-30 » deviendrait le 2 mars
function logbookAdd(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw new Error('entrée : objet { date, region, … } attendu');
  // 1. Le garde-fou d'abord, sur tout texte de l'entrée quel que soit le champ (un identifiant dans un champ mal formé est un refus, code 2) : tel qu'il sera
  //    écrit, sur une ligne, et tel que dicté (un retour à la ligne y marque un début de phrase). Seule une date de forme AAAA-MM-JJ y échappe (toute date ISO serait refusée).
  const { date, ...reste } = entry, dictee = textes(typeof date === 'string' && AAAAMMJJ.test(date) ? reste : entry), ecrit = dictee.map(uneLigne);
  const hits = verifierTextes(ecrit.concat(dictee.filter((t, i) => t !== ecrit[i]))).filter((h, i, l) => l.findIndex(x => x.motif === h.motif && x.extrait === h.extrait) === i);
  if (hits.length) throw new GuardError(hits);
  // 2. La forme, avant toute écriture.
  if (!dateReelle(entry.date) || !entry.region) throw new Error('entrée : date (AAAA-MM-JJ, date réelle) et region obligatoires');
  const { f, nom } = fiche(entry.region), lib = id => (((f || {}).competences || []).find(c => c.id === id) || {}).libelle || '';
  if ([entry.items, entry.questions].some(x => x != null && !Array.isArray(x))) throw new Error('items et questions doivent être des tableaux');
  entier(entry.examens, 'examens', 0, 200); entier(entry.dictes_seul, 'dictes_seul', 0, 200);
  if (entry.dictes_seul != null && (entry.examens == null || entry.dictes_seul > entry.examens)) throw new Error('dictes_seul : au plus examens, qui doit être renseigné');
  if ((entry.questions || []).some(q => typeof q !== 'string')) throw new Error('questions : textes attendus');
  if (entry.commentaire != null && typeof entry.commentaire !== 'string') throw new Error('commentaire : texte attendu');
  for (const it of entry.items || []) {
    if (!it || typeof it !== 'object' || Array.isArray(it)) throw new Error('items : objets { id | libelle, trouve, difficulte, dicte_seul } attendus');
    if (it.id && !ID_RE.test(it.id)) throw new Error('identifiant invalide : ' + it.id);
    if (it.id && !competence(f, it.id)) throw new Error(`identifiant absent de la fiche ${entry.region} : ${it.id}`);
    if (it.libelle != null && typeof it.libelle !== 'string') throw new Error('libelle : texte attendu');
    if (typeof it.trouve !== 'boolean') throw new Error('trouve : booléen obligatoire (true ou false)');   // « false » en texte relèverait le palier
    if (it.dicte_seul != null && typeof it.dicte_seul !== 'boolean') throw new Error('dicte_seul : booléen attendu (true ou false)');
    if (it.dicte_seul && !it.trouve) throw new Error('dicte_seul : seulement pour une structure trouvée');
    entier(it.difficulte, 'difficulte', 1, 3);
  }
  const titre = `## ${entry.date} — ${nom}`;   // un bloc par jour et par région : le critère de passage (tâche 9c) additionne les blocs
  if (fs.existsSync(P('logbook.md')) && fs.readFileSync(P('logbook.md'), 'utf8').split('\n').some(l => l.trimEnd() === titre)) throw new Error(`une entrée existe déjà pour ${entry.date} — ${nom} ; corriger le logbook à la main ou utiliser une autre date`);
  // 3. Paliers calculés en mémoire, puis les écritures : logbook.md, questions.md, et progression.json en une seule fois.
  const pr = progression(), lignes = [titre], maj = [], questions = (entry.questions || []).map(uneLigne).filter(Boolean);
  if (entry.examens != null) lignes.push(`- Examens : ${entry.examens}${entry.dictes_seul != null ? ` ; dictés sans aide : ${entry.dictes_seul}` : ''}`);
  for (const it of entry.items || []) {
    const diff = it.difficulte != null ? `, difficulté ${it.difficulte}` : '';
    if (it.id) { lignes.push(`- ${it.id} ${lib(it.id)} : ${it.trouve ? 'trouvé' : 'non trouvé'}${it.dicte_seul ? ', dicté seul' : ''}${diff}`); if (it.trouve) maj.push(relever(pr, it.id, it.dicte_seul ? 4 : 3, 'logbook')); }
    else lignes.push(`- (hors carte) ${it.libelle ? uneLigne(it.libelle) : '?'} : ${it.trouve ? 'trouvé' : 'non trouvé'}${diff}`);
  }
  if (entry.commentaire) lignes.push(`- Note : ${uneLigne(entry.commentaire)}`);
  if (questions.length) lignes.push(`- Questions : ${questions.join(' · ')}`);
  fs.appendFileSync(P('logbook.md'), '\n' + lignes.join('\n') + '\n');
  if (questions.length) fs.appendFileSync(P('questions.md'), questions.map(q => `- [ ] ${entry.date} (${entry.region}) : ${q}\n`).join(''));
  if (maj.some(m => !m.inchange)) writeJson(P('progression.json'), pr);
  return { lignes: lignes.length - 1, maj, questions: questions.length };
}

/* ---- tâche 9c : plan, bilan, cas, audio (insérer ici) ---- */
/* Bouchons jusqu'à la tâche 9c, qui remplace ces deux lignes par ses fonctions : le switch du CLI et module.exports les nomment déjà. */
const tache9c = () => { throw new Error('disponible à la tâche 9c'); };
const plan = tache9c, bilan = tache9c, casPick = tache9c, casRecord = tache9c, audioEcoute = tache9c;

const USAGE = fs.readFileSync(__filename, 'utf8').split('*/')[0].split('\n').slice(1).map(l => l.trim()).join('\n');
if (require.main === module) {
  const a = process.argv.slice(2), opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
  const out = o => console.log(typeof o === 'string' ? o : JSON.stringify(o, null, 1));
  const cmd = a[0] + (['etat', 'cas', 'audio', 'logbook'].includes(a[0]) && a[1] ? ' ' + a[1] : '');
  const valeur = (k, quoi) => { const v = opt(k); if (v == null || v.startsWith('--')) throw new Error(`${k} : ${quoi} manquant`); return v; };   // option donnée sans sa valeur
  const entree = () => {   // logbook add : --file <entrée.json> ou --json '<entrée>' ; chaque erreur nomme son option
    const k = a.includes('--file') ? '--file' : a.includes('--json') ? '--json' : null;
    if (!k) throw new Error("logbook add : --json '<entrée>' ou --file <entrée.json>");
    let t = valeur(k, k === '--file' ? 'chemin' : 'JSON');
    if (k === '--file') { try { t = fs.readFileSync(t, 'utf8'); } catch (e) { throw new Error(`--file : ${e.code === 'ENOENT' ? 'fichier introuvable : ' + t : e.message}`); } }
    try { return JSON.parse(t); } catch (e) { throw new Error(`${k} : JSON invalide — ${e.message}`); }
  };
  try {
    switch (cmd) {
      case 'init': {   // annonce un changement de dépôt (init --repo), jamais rien d'autre de config.json
        const repo = a.includes('--repo') ? valeur('--repo', 'chemin') : undefined, avant = readJson(P('config.json'), null), home = init(repo), apres = readJson(P('config.json'));
        if (avant && avant.repo !== apres.repo) out(`repo mis à jour : ${apres.repo}`);
        out(`dossier privé prêt : ${home}`); break;
      }
      case 'etat set': { const p = a.filter(x => x !== '--force'); out(etatSet(p[2], p[3], p[4], a.includes('--force'))); break; }   // --force n'est jamais pris pour la source
      case 'etat list': out(etatList(a[2])); break;
      case 'logbook add': out(logbookAdd(entree())); break;
      case 'plan': out(plan(a[1])); break;
      case 'bilan': out(bilan(a[1], opt('--osaus', '').split(',').map(Number), opt('--note', ''))); break;
      case 'cas pick': out(casPick(a[2])); break;
      case 'cas record': out(casRecord(a[2], a[3], opt('--fichier'))); break;
      case 'audio ecoute': out(audioEcoute(a[2])); break;
      default: console.log(USAGE); process.exit(1);
    }
  } catch (e) { console.error((e instanceof GuardError ? 'REFUS — ' : 'ERREUR — ') + e.message); process.exit(e instanceof GuardError ? 2 : 1); }
}
module.exports = { init, etatSet, etatList, logbookAdd, GuardError, HOME, P, progression, config, fiche, readJson, writeJson, today, slug, plan, bilan, casPick, casRecord, audioEcoute };
