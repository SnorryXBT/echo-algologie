/* CLI d'état privé du volet MSK (spec §8-9). Dossier : $ECHO_MSK_HOME ou ~/Claude/Projects/Écho MSK — jamais dans le dépôt.
   node scripts/msk-progress.js init [--repo <dépôt>]
   node scripts/msk-progress.js etat set <itemId> <palier 0-4> <source> [--force]
   node scripts/msk-progress.js etat list <region>
   node scripts/msk-progress.js logbook add --json '<entrée>' | --file <entrée.json>
   node scripts/msk-progress.js plan <region>
   node scripts/msk-progress.js bilan <region> --osaus 1,2,3,4,5,4,3 [--note "…"]
   node scripts/msk-progress.js cas pick <region> | cas record <itemId> su|pas-su [--fichier <chemin>]
   node scripts/msk-progress.js audio ecoute <fichier>
   Entrée : { date: 'AAAA-MM-JJ', region, examens?, dictes_seul?, items?: [{ id? | libelle?, trouve?, difficulte?, dicte_seul? }], questions?: [textes], commentaire? }
   region parmi ECHO.mskRegions, id parmi les compétences de sa fiche, nombres finis (dictes_seul ≤ examens), trouve et dicte_seul booléens ;
   tout texte de l'entrée, sauf la date, passe au garde-fou ; chaque texte est écrit sur une seule ligne.
   Sortie JSON (init : une ligne de texte ; commande inconnue : cet usage) ; erreur ou refus : une ligne sur stderr.
   Codes : 0 ok · 1 erreur · 2 refus du garde-fou données patient. Entrée invalide (1) ou refusée (2) : rien n'est écrit.
   Transferts vers l'iPhone (Anki, audio), créés par init : $ECHO_MSK_ICLOUD ou ~/Library/Mobile Documents/com~apple~CloudDocs/Écho MSK.
   Les skills de coaching passent par ces commandes et n'écrivent jamais le dossier privé elles-mêmes. */
const fs = require('fs'), os = require('os'), path = require('path');
const { verifierTextes } = require('./lib/phi-guard');
const { loadEcho } = require('./lib/load-echo');
const slug = require('./lib/slug');
const HOME = () => process.env.ECHO_MSK_HOME || path.join(os.homedir(), 'Claude/Projects/Écho MSK');
const ICLOUD = () => process.env.ECHO_MSK_ICLOUD || path.join(os.homedir(), 'Library/Mobile Documents/com~apple~CloudDocs/Écho MSK');
const today = () => new Date().toISOString().slice(0, 10);
const P = f => path.join(HOME(), f);
const readJson = (f, d) => {   // absent : la valeur par défaut, sinon une erreur qui nomme le fichier (--file) ; JSON illisible : erreur qui nomme le fichier
  if (!fs.existsSync(f)) { if (d !== undefined) return d; throw new Error('fichier introuvable : ' + f); }
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { throw new Error(f + ' : ' + e.message, { cause: e }); }
};
const writeJson = (f, o) => {   // écrit à côté puis renomme (atomique sur un même volume) : une écriture interrompue ne laisse jamais un JSON tronqué
  const t = `${f}.${process.pid}.part`;
  try { fs.writeFileSync(t, JSON.stringify(o, null, 1) + '\n'); fs.renameSync(t, f); } catch (e) { fs.rmSync(t, { force: true }); throw e; }
};
const ID_RE = /^([a-z-]+)\.([cspdag])(\d{2})$/;
class GuardError extends Error { constructor(hits) { super('données patient détectées : ' + hits.map(h => `${h.motif} (« ${h.extrait} »)`).join(' ; ')); this.hits = hits; } }

function init(repo) {
  const home = HOME();
  for (const d of ['', 'cas', 'semaines', 'osaus', 'audio', 'anki']) fs.mkdirSync(path.join(home, d), { recursive: true });
  if (!fs.existsSync(P('config.json'))) writeJson(P('config.json'), { repo: path.resolve(repo || path.join(__dirname, '..')), transfert_anki: path.join(ICLOUD(), 'anki'), transfert_audio: path.join(ICLOUD(), 'audio'), regions_actives: ['epaule'] });
  const cfg = readJson(P('config.json'));
  for (const d of [cfg.transfert_anki, cfg.transfert_audio]) fs.mkdirSync(d, { recursive: true });
  if (!fs.existsSync(P('progression.json'))) writeJson(P('progression.json'), { items: {}, audio: {} });
  if (!fs.existsSync(P('logbook.md'))) fs.writeFileSync(P('logbook.md'), '# Logbook — pratique délibérée, écho MSK\n\nUne entrée par journée d\'HDJ, structurée, sans aucune donnée patient (garde-fou : scripts/lib/phi-guard.js du dépôt).\n');
  if (!fs.existsSync(P('questions.md'))) fs.writeFileSync(P('questions.md'), '# Questions ouvertes\n\n');
  return home;
}
const config = () => { const c = readJson(P('config.json'), null); if (!c) throw new Error(`dossier privé non initialisé (${HOME()}) : node scripts/msk-progress.js init`); return c; };
const progression = () => readJson(P('progression.json'), { items: {}, audio: {} });
const fiche = region => {   // région absente de ECHO.mskRegions : erreur, quelle que soit la commande (rien n'est lu ni écrit pour une région inventée)
  const E = loadEcho({ msk: true }, config().repo), r = (E.mskRegions || []).find(x => x.id === region);
  if (!r) throw new Error('région inconnue : ' + region);
  return { f: E.msk[region], nom: r.nom };
};

function etatSet(itemId, palier, source, force) {
  if (!ID_RE.test(itemId || '')) throw new Error('identifiant invalide : ' + itemId);
  palier = Number(palier); if (!Number.isInteger(palier) || palier < 0 || palier > 4) throw new Error('palier : entier de 0 à 4');
  const pr = progression(), it = pr.items[itemId] || { etat: 0, maj: null, historique: [] };
  if (palier < it.etat && !force) return { itemId, etat: it.etat, inchange: true };
  it.etat = palier; it.maj = today(); it.historique.push([today(), palier, source || 'manuel']);
  pr.items[itemId] = it; writeJson(P('progression.json'), pr);
  return { itemId, etat: palier, inchange: false };
}
function etatList(region) {
  const { f, nom } = fiche(region), pr = progression();
  const items = (f ? f.competences : []).map(c => { const s = pr.items[c.id] || { etat: 0, maj: null }; return { id: c.id, type: c.type, libelle: c.libelle, niveau: c.niveau, etat: s.etat, maj: s.maj }; });
  const paliers = [0, 0, 0, 0, 0]; items.forEach(i => paliers[i.etat]++);
  return { region, nom, fiche: !!f, items, paliers };
}
const textes = v => typeof v === 'string' ? [v] : v && typeof v === 'object' ? Object.values(v).flatMap(textes) : [];   // toutes les chaînes d'une valeur JSON, à toute profondeur
const nombre = (v, champ) => { if (v != null && !(typeof v === 'number' && Number.isFinite(v))) throw new Error(champ + ' : nombre fini attendu'); };
const uneLigne = s => s.replace(/\s+/g, ' ').trim();   // un retour à la ligne dans un texte fabriquerait une fausse ligne de logbook.md ou de questions.md
function logbookAdd(entry) {
  if (!entry || !entry.region || typeof entry.date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(entry.date)) throw new Error('entrée : date (AAAA-MM-JJ) et region obligatoires');
  // 1. Forme de l'entrée, avant le garde-fou et avant toute écriture. La région d'abord : ce n'est pas un texte libre (region: 'Mme Dupont' → région inconnue).
  const { f, nom } = fiche(entry.region), lib = id => (((f || {}).competences || []).find(c => c.id === id) || {}).libelle || '';
  if ([entry.items, entry.questions].some(x => x != null && !Array.isArray(x))) throw new Error('items et questions doivent être des tableaux');
  nombre(entry.examens, 'examens'); nombre(entry.dictes_seul, 'dictes_seul');
  if (entry.dictes_seul != null && (entry.examens == null || entry.dictes_seul > entry.examens)) throw new Error('dictes_seul : au plus examens, qui doit être renseigné');
  if ((entry.questions || []).some(q => typeof q !== 'string')) throw new Error('questions : textes attendus');
  if (entry.commentaire != null && typeof entry.commentaire !== 'string') throw new Error('commentaire : texte attendu');
  for (const it of entry.items || []) {
    if (!it || typeof it !== 'object' || Array.isArray(it)) throw new Error('items : objets { id | libelle, trouve, difficulte, dicte_seul } attendus');
    if (it.id && !ID_RE.test(it.id)) throw new Error('identifiant invalide : ' + it.id);
    if (it.id && !((f || {}).competences || []).some(c => c.id === it.id)) throw new Error(`identifiant absent de la fiche ${entry.region} : ${it.id}`);
    if (it.libelle != null && typeof it.libelle !== 'string') throw new Error('libelle : texte attendu');
    for (const k of ['trouve', 'dicte_seul']) if (it[k] != null && typeof it[k] !== 'boolean') throw new Error(k + ' : booléen attendu (true ou false)');   // « false » en texte relèverait le palier
    nombre(it.difficulte, 'difficulte');
  }
  // 2. Garde-fou sur tout texte de l'entrée, quel que soit le champ et à toute profondeur, sauf la date de séance (validée ci-dessus ; le garde-fou refuse toute date ISO).
  const { date, ...reste } = entry, hits = verifierTextes(textes(reste));
  if (hits.length) throw new GuardError(hits);
  // 3. Écritures.
  const lignes = [`## ${entry.date} — ${nom}`], maj = [], questions = (entry.questions || []).map(uneLigne).filter(Boolean);
  if (entry.examens != null) lignes.push(`- Examens : ${entry.examens}${entry.dictes_seul != null ? ` ; dictés sans aide : ${entry.dictes_seul}` : ''}`);
  for (const it of entry.items || []) {
    const diff = it.difficulte != null ? `, difficulté ${it.difficulte}` : '';
    if (it.id) { lignes.push(`- ${it.id} ${lib(it.id)} : ${it.trouve ? 'trouvé' : 'non trouvé'}${it.dicte_seul ? ', dicté seul' : ''}${diff}`); if (it.trouve) maj.push(etatSet(it.id, it.dicte_seul ? 4 : 3, 'logbook')); }
    else lignes.push(`- (hors carte) ${it.libelle ? uneLigne(it.libelle) : '?'} : ${it.trouve ? 'trouvé' : 'non trouvé'}${diff}`);
  }
  if (entry.commentaire) lignes.push(`- Note : ${uneLigne(entry.commentaire)}`);
  if (questions.length) { lignes.push(`- Questions : ${questions.join(' · ')}`); fs.appendFileSync(P('questions.md'), questions.map(q => `- [ ] ${entry.date} (${entry.region}) : ${q}\n`).join('')); }
  fs.appendFileSync(P('logbook.md'), '\n' + lignes.join('\n') + '\n');
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
  try {
    switch (cmd) {
      case 'init': out(`dossier privé prêt : ${init(opt('--repo'))}`); break;
      case 'etat set': { const p = a.filter(x => x !== '--force'); out(etatSet(p[2], p[3], p[4], a.includes('--force'))); break; }   // --force n'est jamais pris pour la source
      case 'etat list': out(etatList(a[2])); break;
      case 'logbook add': out(logbookAdd(opt('--file') ? readJson(opt('--file')) : JSON.parse(opt('--json', '{}')))); break;
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
