/* CLI d'état privé du volet MSK (spec §8-9). Dossier : $ECHO_MSK_HOME ou ~/Claude/Projects/Écho MSK — jamais dans le dépôt.
   node scripts/msk-progress.js init [--repo <dépôt>]
   node scripts/msk-progress.js etat set <itemId> <palier 0-4> <source> [--force]
   node scripts/msk-progress.js etat list <region>
   node scripts/msk-progress.js logbook add --json '<entrée>' | --file <entrée.json>
   node scripts/msk-progress.js plan <region>
   node scripts/msk-progress.js bilan <region> --osaus 1,2,3,4,5,4,3 [--note "…"]
   node scripts/msk-progress.js cas pick <region> | cas record <itemId> su|pas-su [--fichier <chemin>]
   node scripts/msk-progress.js audio ecoute <fichier>
   node scripts/msk-progress.js bilan <region> --grille
   node scripts/msk-progress.js ecrire cas|semaines <nom.md> --texte '<markdown>' | --file <chemin>
   node scripts/msk-progress.js question fermer <texte exact | numéro>
   node scripts/msk-progress.js region activer <region>
   init --repo sur un dossier déjà initialisé : seul repo change dans config.json (dépôt déplacé) ; toute commande qui lit les fiches vérifie ce dépôt.
   etat set : identifiant d'une compétence de la fiche de sa région ; un palier ne redescend qu'avec --force.
   Entrée : { date: 'AAAA-MM-JJ', region, examens?, dictes_seul?, items?: [{ id? | libelle?, trouve, difficulte?, dicte_seul? }], questions?: [textes], commentaire? }
   D'abord le garde-fou, sur tout texte de l'entrée sauf la date, tel qu'il sera écrit (sur une ligne) et tel que dicté. Puis la forme : date réelle, du 2026-01-01
   à aujourd'hui + 2 jours, region parmi ECHO.mskRegions, une seule entrée par jour et par région, examens et dictes_seul entiers de 0 à 200 (dictes_seul ≤ examens),
   id parmi les compétences de la fiche, trouve booléen obligatoire, dicte_seul seulement si trouvé, difficulte entier de 1 à 3.
   Puis les écritures : logbook.md, questions.md, et progression.json en une fois.
   plan : cibles (coupe, structure, dynamique ; trois au plus) et cas (pathologie, piège ; deux au plus) au palier ≤ 2, le plus bas d'abord puis dans l'ordre de la fiche ;
   région sans fiche MSK : mode socle. Critère de passage (spec §1) : 10 examens dictés sans aide (lignes « Examens » du logbook) et OSAUS ≥ 4 aux items 4, 5 et 6 du dernier bilan.
   Questions ouvertes d'une région : lignes « - [ ] AAAA-MM-JJ (<region>) : … » de questions.md (format de logbook add), région lue à cette place seulement.
   bilan : sept notes OSAUS de 1 à 5 dans osaus/AAAA-MM.json, avec la grille sourcée (Tolsgaard et coll., PLoS ONE 2013 ; constante OSAUS exportée) ;
   un bilan par région et par mois : le dernier remplace le précédent, rendu dans remplace (date, notes ; null s'il n'y en avait pas).
   cas pick : la plus ancienne question ouverte de la région, sinon la pathologie ou le piège au palier le plus bas. cas record : su → palier 2 au moins
   (jamais d'abaissement), pas-su → palier inchangé ; chaque cas est noté dans l'historique. audio ecoute : un épisode présent dans audio/ du dossier privé.
   Textes libres des autres commandes (source d'etat set, --note, --fichier, nom d'épisode) : même garde-fou, avant toute écriture ; seule y échappe la date de
   séance en tête du nom du fichier de cas, suivie de « - » et d'une lettre, de l'extension ou de rien (cas/AAAA-MM-JJ-<item>.md).
   bilan --grille : la grille OSAUS (sept items, référence, limite de l'auto-évaluation), sans rien écrire ; --osaus ou --note avec --grille : erreur.
   ecrire : plan de semaine (semaines/<AAAA>-W<nn>.md, remplacé et dit : remplace) ou fichier de cas (cas/<AAAA-MM-JJ>-<item>.md, jamais remplacé) ; nom seul, sans « / » ni « .. ».
   Garde-fou d'abord, sur le nom et sur le texte : dans le texte, seule y échappe une date AAAA-MM-JJ isolée du 2026-01-01 à aujourd'hui + 7 jours (dates du volet,
   semaine planifiée comprise) ; dans le nom, la date de séance en tête du nom du fichier de cas.
   question fermer : « - [ ] » → « - [x] » sur la question ouverte désignée par son texte (tel que rendu par cas pick ou plan) ou son numéro parmi les ouvertes (ordre du fichier).
   region activer : ajoute une région à regions_actives de config.json, sur décision de Mat ; seul ce champ change, indentation du fichier conservée ;
   regions_actives absente ou qui n'est pas une liste de régions : refus, rien n'est modifié.
   plan, audios : { fichier, ecoute, regenere } ; une marque d'écoute antérieure au jour de dépôt du fichier (épisode régénéré) est ignorée : ecoute null, regenere true.
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
const jourLocal = d => new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);   // calendrier local (Europe/Paris), pas UTC : passé minuit, c'est le lendemain
const today = () => jourLocal(new Date());
const P = f => path.join(HOME(), f);
const readJson = (f, d) => {   // absent : la valeur par défaut, sinon une erreur qui nomme le fichier ; JSON illisible : erreur qui nomme le fichier
  if (!fs.existsSync(f)) { if (d !== undefined) return d; throw new Error('fichier introuvable : ' + f); }
  try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { throw new Error(f + ' : ' + e.message, { cause: e }); }
};
const ecrireTexte = (f, s) => {   // écrit à côté puis renomme (atomique sur un même volume) : une écriture interrompue ne laisse jamais un fichier tronqué
  const t = `${f}.${process.pid}.part`;
  try { fs.writeFileSync(t, s); fs.renameSync(t, f); } catch (e) { fs.rmSync(t, { force: true }); throw e; }
};
const writeJson = (f, o) => ecrireTexte(f, JSON.stringify(o, null, 1) + '\n');
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
const idDeFiche = itemId => {   // identifiant <region>.<lettre><nn> d'une compétence de la fiche de sa région : jamais d'entrée fantôme dans progression.json
  const m = ID_RE.exec(itemId || ''); if (!m) throw new Error('identifiant invalide : ' + itemId);
  if (!competence(fiche(m[1]).f, itemId)) throw new Error(`identifiant absent de la fiche ${m[1]} : ${itemId}`);
};
const relever = (pr, itemId, palier, source, force) => {   // en mémoire ; un palier ne redescend jamais sans force
  const it = pr.items[itemId] || { etat: 0, maj: null, historique: [] };
  if (palier < it.etat && !force) return { itemId, etat: it.etat, inchange: true };
  it.etat = palier; it.maj = today(); it.historique.push([it.maj, palier, source || 'manuel']); pr.items[itemId] = it;
  return { itemId, etat: palier, inchange: false };
};

function etatSet(itemId, palier, source, force) {
  garde([source]);   // la source est écrite dans progression.json : garde-fou d'abord (refus, code 2), comme le logbook
  if (source != null && typeof source !== 'string') throw new Error('source : texte attendu');
  idDeFiche(itemId);
  palier = Number(palier); if (!Number.isInteger(palier) || palier < 0 || palier > 4) throw new Error('palier : entier de 0 à 4');
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
const garde = t => {   // garde-fou données patient avant toute écriture, sur des textes libres tels que dictés et tels qu'écrits (sur une ligne) : refus = GuardError (code 2)
  const dictee = t.filter(x => typeof x === 'string'), ecrit = dictee.map(uneLigne);
  const hits = verifierTextes(ecrit.concat(dictee.filter((x, i) => x !== ecrit[i]))).filter((h, i, l) => l.findIndex(y => y.motif === h.motif && y.extrait === h.extrait) === i);
  if (hits.length) throw new GuardError(hits);
};
const entier = (v, champ, min, max) => { if (v != null && !(Number.isInteger(v) && v >= min && v <= max)) throw new Error(`${champ} : entier de ${min} à ${max} attendu`); };
const AAAAMMJJ = /^\d{4}-\d{2}-\d{2}$/;
const dateReelle = d => typeof d === 'string' && AAAAMMJJ.test(d) && !isNaN(new Date(d)) && new Date(d).toISOString().startsWith(d);   // « 2026-02-30 » deviendrait le 2 mars
const DEBUT = '2026-01-01', finPeriode = (j = 2) => new Date(Date.parse(today()) + j * 864e5).toISOString().slice(0, 10);   // période d'une date de séance : du début du volet MSK à aujourd'hui + 2 jours (+ 7 pour les dates des textes d'ecrire : semaine planifiée)
const datePlausible = d => dateReelle(d) && d >= DEBUT && d <= finPeriode();   // 1956-03-12 est une date de naissance, pas une séance
function logbookAdd(entry) {
  if (!entry || typeof entry !== 'object' || Array.isArray(entry)) throw new Error('entrée : objet { date, region, … } attendu');
  // 1. Le garde-fou d'abord, sur tout texte de l'entrée quel que soit le champ (un identifiant dans un champ mal formé est un refus, code 2) : tel qu'il sera
  //    écrit, sur une ligne, et tel que dicté (un retour à la ligne y marque un début de phrase). Seule une date de forme AAAA-MM-JJ y échappe (toute date ISO serait refusée).
  const { date, ...reste } = entry; garde(textes(typeof date === 'string' && AAAAMMJJ.test(date) ? reste : entry));
  // 2. La forme, avant toute écriture.
  if (!dateReelle(entry.date) || !entry.region) throw new Error('entrée : date (AAAA-MM-JJ, date réelle) et region obligatoires');
  if (!datePlausible(entry.date)) throw new Error(`date hors période : ${entry.date} (attendue du ${DEBUT} au ${finPeriode()})`);
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

/* ---- tâche 9c : plan de semaine, bilan OSAUS, cas raisonnés, audio écouté ---- */
const AUDIO = /\.(mp3|m4a|wav)$/i;
const episodes = () => fs.existsSync(P('audio')) ? fs.readdirSync(P('audio')).filter(x => AUDIO.test(x)).sort() : [];   // épisodes du dossier privé (audio/), triés
const questionsOuvertes = region => {   // « - [ ] AAAA-MM-JJ (<region>) : … » (format de logbook add) : l'étiquette lue à sa place, jamais dans le texte d'une question ; région déjà vérifiée par fiche()
  const sienne = new RegExp('^\\d{4}-\\d{2}-\\d{2} \\(' + region + '\\) : ');
  return fs.existsSync(P('questions.md')) ? fs.readFileSync(P('questions.md'), 'utf8').split('\n').filter(l => l.startsWith('- [ ] ')).map(l => l.slice(6)).filter(q => sienne.test(q)) : [];
};
const parPalier = (f, pr, types) => {   // compétences des types demandés, palier le plus bas d'abord puis ordre de la fiche (tri déterministe), chacune avec son palier
  const etat = id => (pr.items[id] || { etat: 0 }).etat;
  return (f.competences || []).map((c, i) => ({ c, i })).filter(x => types.includes(x.c.type)).sort((a, b) => etat(a.c.id) - etat(b.c.id) || a.i - b.i).map(x => Object.assign({ etat: etat(x.c.id) }, x.c));
};
/* critère de passage à la région suivante (spec §1) : 10 examens dictés sans aide, OSAUS ≥ 4 aux items 4, 5 et 6 (examen systématique, interprétation,
   documentation) du dernier bilan. Dictés : la ligne « - Examens : n ; dictés sans aide : k » des blocs « ## AAAA-MM-JJ — <nom> » de la région, et elle seule
   (un texte libre qui cite « dictés sans aide : 50 » ne compte pas). Dernier bilan : le plus récent des osaus/AAAA-MM.json qui note la région. */
function critere(region, nom) {
  const log = fs.existsSync(P('logbook.md')) ? fs.readFileSync(P('logbook.md'), 'utf8') : '';
  const dictes = log.split(/\n(?=## )/).filter(b => (/^## \d{4}-\d{2}-\d{2} — (.+)$/.exec(b.split('\n')[0].trimEnd()) || [])[1] === nom)
    .reduce((n, b) => n + Number((/^- Examens : \d+ ; dictés sans aide : (\d+)$/m.exec(b) || [0, 0])[1]), 0);
  const files = fs.existsSync(P('osaus')) ? fs.readdirSync(P('osaus')).filter(x => /^\d{4}-\d{2}\.json$/.test(x)).sort().reverse() : [];
  let osaus = null; for (const x of files) { const o = readJson(P(path.join('osaus', x)), {}) || {}; if (o[region]) { osaus = Object.assign({ fichier: x }, o[region]); break; } }
  return { dictes_sans_aide: dictes, osaus, atteint: dictes >= 10 && !!osaus && Array.isArray(osaus.items) && [3, 4, 5].every(i => osaus.items[i] >= 4) };
}
function plan(region) {
  const cfg = config(), { f, nom } = fiche(region), pr = progression();
  const audios = episodes().filter(x => x.startsWith(region + '-')).map(x => {   // marque d'écoute antérieure au jour de dépôt du fichier : épisode régénéré depuis, à réécouter (la marque reste dans progression.json)
    const e = (pr.audio || {})[x] || null, regenere = !!e && e < jourLocal(fs.statSync(P(path.join('audio', x))).mtime);
    return { fichier: x, ecoute: regenere ? null : e, regenere };
  });
  const apkg = path.join(cfg.transfert_anki, `msk-${region}.apkg`), anki = fs.existsSync(apkg) ? { fichier: apkg, modifie: jourLocal(fs.statSync(apkg).mtime) } : null;
  const questions = questionsOuvertes(region), paliers = etatList(region).paliers;
  if (!f) return { mode: 'socle', region, nom, cibles: [], cas: [], audios, anki, questions, paliers, critere: critere(region, nom), note: `pas encore de fiche MSK pour ${nom} : plan socle — audio, cartes des fiches gestes, et trois cibles à choisir dans les sections Sono-anatomie de ces fiches` };
  return { mode: 'fiche', region, nom, cibles: parPalier(f, pr, ['coupe', 'structure', 'dynamique']).filter(c => c.etat <= 2).slice(0, 3), cas: parPalier(f, pr, ['pathologie', 'piege']).filter(c => c.etat <= 2).slice(0, 2), audios, anki, questions, paliers, critere: critere(region, nom) };
}
/* Grille OSAUS : libellés de la publication mot pour mot, glose française, limite de l'auto-évaluation (spec §10) ; écrite avec chaque bilan, affichée par bilan --grille. */
const OSAUS = Object.freeze({
  nom: 'OSAUS',
  reference: 'Tolsgaard MG, Todsen T, Sorensen JL, Ringsted C, Lorentzen T, Ottesen B, Tabor A. International Multispecialty Consensus on How to Evaluate Ultrasound Competence: A Delphi Consensus Survey. PLoS ONE 2013. doi:10.1371/journal.pone.0057687',
  items: Object.freeze([
    { n: 1, en: 'Indication for the examination', fr: 'Indication de l\'examen' }, { n: 2, en: 'Applied knowledge of ultrasound equipment', fr: 'Connaissance appliquée de l\'appareil' },
    { n: 3, en: 'Image optimization', fr: 'Optimisation de l\'image' }, { n: 4, en: 'Systematic examination', fr: 'Examen systématique' },
    { n: 5, en: 'Interpretation of images', fr: 'Interprétation des images' }, { n: 6, en: 'Documentation of examination', fr: 'Documentation de l\'examen' },
    { n: 7, en: 'Medical decision making', fr: 'Décision médicale' },
  ].map(Object.freeze)),
  echelle: '1 à 5 par item',
  limite: 'Auto-évaluation : ce n\'est pas une évaluation observée ; une notation trimestrielle par un confrère sur la même grille reste à organiser',
});
function bilan(region, items, note) {
  garde([note]);   // la note est écrite dans osaus/AAAA-MM.json : garde-fou d'abord (spec §12)
  if (!Array.isArray(items) || items.length !== 7 || items.some(n => !Number.isInteger(n) || n < 1 || n > 5)) throw new Error('OSAUS : sept notes entières de 1 à 5 (indication, appareil, image, examen systématique, interprétation, documentation, décision)');
  if (note != null && typeof note !== 'string') throw new Error('note : texte attendu');
  const { nom } = fiche(region), jour = today(), fichier = jour.slice(0, 7) + '.json', f = P(path.join('osaus', fichier)), o = readJson(f, {}) || {}, ancien = o[region];
  o[region] = { items, note: uneLigne(note || ''), date: jour, grille: OSAUS };
  fs.mkdirSync(P('osaus'), { recursive: true }); writeJson(f, o);
  return { fichier, remplace: ancien ? { date: ancien.date || null, items: ancien.items || null } : null, critere: critere(region, nom), paliers: etatList(region).paliers };   // bilan du mois écrasé : dit, jamais en silence
}
function grille(region) { fiche(region); return OSAUS; }   // bilan <region> --grille : la grille à remplir, sans rien écrire ; région vérifiée comme partout
function casPick(region) {
  const cfg = config(), { f, nom } = fiche(region);   // région vérifiée d'abord, même si une question l'attend : rien n'est lu pour une région inventée
  const q = questionsOuvertes(region); if (q.length) return { source: 'question', texte: q[0] };
  if (!f) throw new Error(`aucun cas pour ${nom} : pas encore de fiche MSK ni de question ouverte`);
  const c = parPalier(f, progression(), ['pathologie', 'piege'])[0];
  if (!c) throw new Error('aucune compétence pathologie ou piège dans la fiche');
  const { etat, ...item } = c, p = item.type === 'pathologie' ? (f.pathologies || []).find(x => slug(x.nom) === item.patho) || null : null;
  const img = p && p.image && p.image.src ? path.join(cfg.repo, p.image.src) : null;
  return { source: 'item', item, etat, image: img, vignette: p ? p.vignette || '' : '', pathologie: p ? { nom: p.nom, en: p.en, signes: p.signes, conduite: p.conduite, gestes: p.gestes || [] } : null };
}
const sansDateDeSeance = f => f.replace(/(^|\/)(\d{4}-\d{2}-\d{2})(?=(?:$|\.|-(?!\d))[^/]*$)/, (m, sep, d) => datePlausible(d) ? sep : m);   // cas/<AAAA-MM-JJ>-<item>.md (spec §8) : la date de séance seule en tête du nom (suivie de « - » et d'une lettre, de l'extension ou de rien) n'est pas une donnée patient ; collée à d'autres chiffres (« 2026-10-01-03-1956 », « 2026-10-06 12 34 56 78 ») elle reste au garde-fou, comme toute autre date
function casRecord(itemId, verdict, fichier) {
  garde([typeof fichier === 'string' ? sansDateDeSeance(fichier) : fichier]);   // le chemin du fichier de cas est un texte libre : garde-fou d'abord
  if (!['su', 'pas-su'].includes(verdict)) throw new Error('verdict : su ou pas-su');
  if (fichier != null && typeof fichier !== 'string') throw new Error('fichier : chemin attendu');
  idDeFiche(itemId);   // compétence de la fiche de sa région seulement : pas d'entrée fantôme
  const pr = progression(), source = 'cas:' + verdict;
  const r = verdict === 'su' ? relever(pr, itemId, 2, source) : { itemId, etat: (pr.items[itemId] || { etat: 0 }).etat, inchange: true };   // su : palier 2 au moins, jamais d'abaissement ; pas su : palier inchangé
  if (r.inchange) { const it = pr.items[itemId] || (pr.items[itemId] = { etat: 0, maj: null, historique: [] }); it.historique.push([today(), it.etat, source]); }   // chaque cas est noté, même quand le palier ne bouge pas
  writeJson(P('progression.json'), pr);
  return Object.assign(r, { fichier: fichier || null });
}
function audioEcoute(fichier) {
  garde([fichier]);   // le nom de l'épisode est écrit dans progression.json : garde-fou d'abord
  config(); const liste = episodes(), dispo = `(épisodes : ${liste.join(', ') || 'aucun'})`;
  if (typeof fichier !== 'string' || !fichier) throw new Error(`audio ecoute : nom de l'épisode manquant ${dispo}`);
  if (!liste.includes(fichier)) throw new Error(`épisode introuvable dans ${P('audio')} : ${fichier} ${dispo}`);   // un nom mal tapé ne s'enregistre pas en silence
  const pr = progression(); pr.audio = pr.audio || {}; pr.audio[fichier] = today(); writeJson(P('progression.json'), pr);
  return { fichier, ecoute: pr.audio[fichier] };
}

/* ---- tâche 10 : écritures des skills de coaching par le CLI (plan de semaine, fichier de cas, question fermée, région activée) ---- */
/* Dates du volet dans le texte d'ecrire : une date AAAA-MM-JJ isolée (ni lettre ni chiffre collés, ni chiffre relié par « - », « . » ou « / ») du 2026-01-01 à
   aujourd'hui + 7 jours n'est pas une donnée patient (séance, paquet Anki, semaine planifiée). Pour le seul garde-fou, ses tirets deviennent « · » : la règle
   « date complète » ne la voit plus ; son contexte reste lu (« née le 2026-10-07 », « la dame du 2026-10-07 » restent refusés), comme un numéro écrit à côté
   (« 2026-10-10 au 06 12 34 56 78 » reste refusé). Ses chiffres restent lus eux aussi : un jour de 01 à 09 suivi de huit chiffres forme un numéro de téléphone,
   refusé ; « 2026-10-10 12 34 56 78 » passe, comme « 12 34 56 78 » seul. Toute autre date (« 1956-03-12 », « 7 octobre 2026 », « 2026-10-07-1956 ») reste au
   garde-fou. Cas rejoués à horloge simulée par les tests (le 10, le 31, le 1er d'un mois, au changement d'année). */
const DATE_ISOLEE = /(?<![\p{L}\p{N}_]|\p{N}[./-])(\d{4})-(\d{2})-(\d{2})(?![\p{L}\p{N}_]|[./-]\p{N})/gu;
const datesDuVolet = t => t.replace(DATE_ISOLEE, (m, a, mo, j) => { const d = `${a}-${mo}-${j}`; return dateReelle(d) && d >= DEBUT && d <= finPeriode(7) ? `${a}·${mo}·${j}` : m; });
const NOMS = {   // nom de fichier par sous-dossier (spec §8) ; cas : la date de séance en tête, puis l'item (minuscules, chiffres, « . », « - »)
  semaines: { re: /^\d{4}-W(?:0[1-9]|[1-4]\d|5[0-3])\.md$/, attendu: '<AAAA>-W<nn>.md attendu (semaine ISO)' },
  cas: { re: /^(\d{4}-\d{2}-\d{2})-[a-z0-9][a-z0-9.-]*\.md$/, attendu: '<AAAA-MM-JJ>-<item>.md attendu (date de séance, puis minuscules, chiffres, « . » ou « - »)' },
};
function ecrire(sous, nom, texte) {   // plan de semaine remplacé (et dit) ; fichier de cas jamais remplacé
  garde([typeof nom === 'string' ? sansDateDeSeance(nom) : nom, typeof texte === 'string' ? datesDuVolet(texte) : texte]);   // garde-fou d'abord, sur le nom et sur le texte : refus (code 2), rien n'est écrit
  if (!Object.hasOwn(NOMS, sous)) throw new Error(`sous-dossier : cas ou semaines attendu (reçu : ${sous})`);
  if (typeof nom !== 'string' || !nom || /[/\\]/.test(nom) || nom.includes('..')) throw new Error(`nom : un nom de fichier seul, sans « / » ni « .. » (reçu : ${nom})`);
  const m = NOMS[sous].re.exec(nom);
  if (!m || (sous === 'cas' && !datePlausible(m[1]))) throw new Error(`nom : ${NOMS[sous].attendu}, reçu : ${nom}`);
  if (typeof texte !== 'string' || !texte.trim()) throw new Error('texte : contenu Markdown non vide attendu');
  config();
  const f = P(path.join(sous, nom)), remplace = fs.existsSync(f);
  if (remplace && sous === 'cas') throw new Error(`cas/${nom} existe déjà : un fichier de cas n'est jamais remplacé — reprendre avec un suffixe (${nom.replace(/\.md$/, '-2.md')})`);
  fs.mkdirSync(P(sous), { recursive: true }); ecrireTexte(f, texte.endsWith('\n') ? texte : texte + '\n');
  return { fichier: `${sous}/${nom}`, remplace };
}
function questionFermer(q) {   // texte exact (avec ou sans sa case, espaces repliés) ou numéro parmi les ouvertes, dans l'ordre du fichier ; aucune autre ligne ne change
  config();
  const f = P('questions.md'), lignes = fs.existsSync(f) ? fs.readFileSync(f, 'utf8').split('\n') : [];
  const ouvertes = lignes.flatMap((l, i) => l.startsWith('- [ ] ') ? [{ i, texte: uneLigne(l.slice(6)) }] : []);
  const dispo = `(ouvertes : ${ouvertes.map((o, k) => `${k + 1}. ${o.texte}`).join(' · ') || 'aucune'})`;
  const t = typeof q === 'string' ? uneLigne(q).replace(/^- \[ \] /, '') : '';
  if (!t) throw new Error(`question fermer : texte exact ou numéro de la question manquant ${dispo}`);
  const o = /^\d+$/.test(t) ? ouvertes[Number(t) - 1] : ouvertes.find(x => x.texte === t);
  if (!o) throw new Error(`aucune question ouverte ne correspond : ${t} ${dispo}`);
  lignes[o.i] = '- [x] ' + lignes[o.i].slice(6); ecrireTexte(f, lignes.join('\n'));
  return { question: o.texte, ouvertes: ouvertes.length - 1 };
}
function regionActiver(region) {   // ajoute une région à regions_actives de config.json (proposée par /msk-semaine --bilan, décidée par Mat) ; seul ce champ change, sans doublon
  fiche(region); const c = config(), actives = c.regions_actives;
  if (!Array.isArray(actives) || actives.some(r => typeof r !== 'string')) throw new Error(`config.json : regions_actives doit être une liste de régions (reçu : ${actives === undefined ? 'absent' : JSON.stringify(actives)}) — rien n'est modifié`);
  if (actives.includes(region)) return { regions_actives: actives, ajoutee: false };
  const m = /^\{\r?\n([ \t]+)\S/.exec(fs.readFileSync(P('config.json'), 'utf8')), indent = m ? m[1] : 1;   // indentation du fichier conservée ; à défaut, 1 espace (celle d'init, par writeJson)
  c.regions_actives = actives.concat(region); ecrireTexte(P('config.json'), JSON.stringify(c, null, indent) + '\n');
  return { regions_actives: c.regions_actives, ajoutee: true };
}

const USAGE = fs.readFileSync(__filename, 'utf8').split('*/')[0].split('\n').slice(1).map(l => l.trim()).join('\n');
if (require.main === module) {
  const a = process.argv.slice(2), opt = (k, d) => { const i = a.indexOf(k); return i >= 0 ? a[i + 1] : d; };
  const out = o => console.log(typeof o === 'string' ? o : JSON.stringify(o, null, 1));
  const cmd = a[0] + (['etat', 'cas', 'audio', 'logbook', 'question', 'region'].includes(a[0]) && a[1] ? ' ' + a[1] : '');
  const valeur = (k, quoi) => { const v = opt(k); if (v == null || v.startsWith('--')) throw new Error(`${k} : ${quoi} manquant`); return v; };   // option donnée sans sa valeur
  const entree = () => {   // logbook add : --file <entrée.json> ou --json '<entrée>' ; chaque erreur nomme son option
    const k = a.includes('--file') ? '--file' : a.includes('--json') ? '--json' : null;
    if (!k) throw new Error("logbook add : --json '<entrée>' ou --file <entrée.json>");
    let t = valeur(k, k === '--file' ? 'chemin' : 'JSON');
    if (k === '--file') { try { t = fs.readFileSync(t, 'utf8'); } catch (e) { throw new Error(`--file : ${e.code === 'ENOENT' ? 'fichier introuvable : ' + t : e.message}`); } }
    try { return JSON.parse(t); } catch (e) { throw new Error(`${k} : JSON invalide — ${e.message}`); }
  };
  const texte = () => {   // ecrire : --texte '<markdown>' ou --file <chemin> (fichier temporaire, hors du dossier privé) ; jamais les deux
    const t = a.includes('--texte'), f = a.includes('--file');
    if (t && f) throw new Error('ecrire : --texte ou --file, pas les deux');
    if (!t && !f) throw new Error("ecrire : --texte '<markdown>' ou --file <chemin>");
    if (t) return valeur('--texte', 'texte');
    const c = valeur('--file', 'chemin');
    try { return fs.readFileSync(c, 'utf8'); } catch (e) { throw new Error(`--file : ${e.code === 'ENOENT' ? 'fichier introuvable : ' + c : e.message}`); }
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
      case 'bilan':
        if (a.includes('--grille')) { if (a.includes('--osaus') || a.includes('--note')) throw new Error('bilan --grille : affichage seul, sans --osaus ni --note'); out(grille(a[1])); break; }
        out(bilan(a[1], (opt('--osaus') || '').split(',').map(Number), a.includes('--note') ? valeur('--note', 'texte') : undefined)); break;   // --osaus absent ou vide : le message des sept notes
      case 'cas pick': out(casPick(a[2])); break;
      case 'cas record': out(casRecord(a[2], a[3], a.includes('--fichier') ? valeur('--fichier', 'chemin') : undefined)); break;
      case 'audio ecoute': out(audioEcoute(a[2])); break;
      case 'ecrire': out(ecrire(a[1], a[2], texte())); break;
      case 'question fermer': out(questionFermer(a.slice(2).join(' '))); break;   // texte en un argument entre guillemets, ou en plusieurs mots
      case 'region activer': out(regionActiver(a[2])); break;
      default: console.log(USAGE); process.exit(1);
    }
  } catch (e) { console.error((e instanceof GuardError ? 'REFUS — ' : 'ERREUR — ') + e.message); process.exit(e instanceof GuardError ? 2 : 1); }
}
module.exports = { init, etatSet, etatList, logbookAdd, GuardError, HOME, P, progression, config, fiche, readJson, writeJson, today, slug, plan, bilan, casPick, casRecord, audioEcoute, OSAUS, grille, ecrire, questionFermer, regionActiver };
