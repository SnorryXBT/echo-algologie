# Volet « Diagnostic MSK » — spécification de conception

Date : 2026-10-07. Statut : validé en conversation, en attente de relecture écrite.

## 1. Objet

Apprendre l'échographie musculo-squelettique **diagnostique**, articulée aux 64 fiches de
gestes du mémo, avec un dispositif d'entraînement mesurable. Le logiciel ne remplace pas la
sonde : il fournit le curriculum, le rappel espacé, les cas raisonnés, l'audio pour les
trajets, et un carnet de pratique délibérée qui fait de chaque journée d'HDJ une séance.

**Critère de réussite, par région :** faire l'examen selon le protocole de référence et le
dicter sans aide sur 10 patients consécutifs, et s'auto-noter ≥ 4/5 aux items OSAUS « examen
systématique », « interprétation » et « documentation ». Seuils ajustables après le pilote.

**Hors périmètre (v1) :** clips personnels de l'utilisateur, synchronisation serveur de la
progression, évaluation observée par un tiers, cartes d'occlusion d'image natives Anki.

## 2. Décisions prises

| Sujet | Décision |
|---|---|
| Approche | Greffe sur `echo-algologie` + cartes Anki générées + coaching par skills |
| Ordre des régions | épaule → genou → rachis → coude → poignet-main → hanche → cheville-pied → paroi et nerfs périphériques |
| Pilote | épaule, validée avant la production des autres régions |
| Rachis | sono-anatomie de repérage (épineuses, lames, facettes, sacrum, plan ESP), sacro-iliaque, facettes, muscles paravertébraux, bursite interépineuse, renvoi aux gestes ; le reste du diagnostic rachidien relève de l'IRM et la fiche le dit |
| Client de cartes | Avorio sur iPhone et Mac (gratuit, FSRS-5, import `.apkg` avec médias, hors ligne) ; repli : Anki sur Mac + AnkiWeb dans Safari |
| Audio | NotebookLM, deux épisodes en français par région |
| Plugins installés | PubMed (NLM, publié par Anthropic) ; YouTube Transcriber à l'essai, skill auditée après installation |
| Plugins écartés | Ágora Learning, Tutor, learning-tutor, learning-framework, Loopky, save-to-spotify, Obsidian Notes, research-superpowers |
| Référentiels | guides techniques ESSR par articulation (épaule, coude, poignet, hanche, genou, cheville ; édition 2010), niveaux EFSUMB, objectifs des cours EULAR, OSAUS pour la mesure |

## 3. Architecture

Deux emplacements, une frontière nette.

**Dans le dépôt (public)** : le contenu et les outils de production.

```
js/data/msk/<region>.js        une fiche diagnostique par région (ECHO.registerMsk)
img/msk/<region>/              images réelles CC BY ou CC0, schémas SVG maison
js/lib/msk.js                  rendu des fiches MSK (sections, marqueurs, mode quiz)
scripts/msk-audit.js           contrôle statique des fiches MSK
scripts/msk-export.js          export JSON + rendu PNG des images à marqueurs → dist/msk/
scripts/anki/build.py          génération des paquets .apkg (genanki) → dist/anki/
.claude/skills/msk-fiche/      production d'une fiche
.claude/skills/msk-anki/       génération des paquets
.claude/skills/msk-audio/      carnets et épisodes NotebookLM
```

`dist/` et `scripts/anki/.venv/` sont ignorés par git.

**Hors dépôt (privé)** : tout ce qui décrit la progression de l'utilisateur.

```
~/Claude/Projects/Écho MSK/
  config.json          chemin du dépôt, dossier de transfert iPhone, régions actives
  progression.json     état de chaque item de compétence
  logbook.md           journal de pratique (structuré, sans donnée patient)
  questions.md         questions ouvertes issues du logbook
  cas/                 un fichier par cas raisonné joué
  semaines/            un plan par semaine ISO
  osaus/               une grille par mois
  audio/               épisodes mp3 par région
  anki/                paquets .apkg prêts à importer
```

Les skills de coaching sont globales (`~/.claude/skills/msk-semaine`, `msk-cas`,
`msk-logbook`) : elles lisent `config.json` pour trouver le dépôt et fonctionnent depuis
n'importe quel dossier de travail.

## 4. Curriculum et carte de compétences

Huit unités, identifiants : `epaule`, `genou`, `rachis`, `coude`, `poignet-main`, `hanche`,
`cheville-pied`, `paroi-nerfs`.

Chaque fiche porte une liste `competences` de 10 à 15 items, dérivés des référentiels :

| Type | Source | Exemple |
|---|---|---|
| `coupe` | une coupe du protocole ESSR de l'articulation | « Coupe 3 : long biceps en transversal dans la gouttière » |
| `structure` | structures normales attendues sur la coupe | « Identifier le sous-scapulaire en rotation externe » |
| `pathologie` | lésions du niveau 1 EFSUMB et du cours EULAR de base, filtrées sur la douleur chronique | « Reconnaître une rupture transfixiante du supra-épineux » |
| `dynamique` | manœuvres du protocole ESSR | « Conflit sous-acromial en abduction dynamique » |
| `piege` | artefacts et pièges d'interprétation | « Anisotropie du supra-épineux prise pour une rupture » |
| `geste` | renvoi vers les fiches gestes du mémo | « Bursite sous-acromiale confirmée → fiche sous-acromiale » |

Item : `{ id: 'epaule.c03', type, libelle, niveau: 1 | 2, sources: [indices dans references] }`.
Identifiant : `<region>.<lettre><nn>`, lettre selon le type : `c` coupe, `s` structure,
`p` pathologie, `d` dynamique, `a` piège ou artefact, `g` geste.
`niveau` 1 = identifier ou reconnaître ; 2 = diagnostiquer et dicter.

**États**, stockés uniquement dans `progression.json`, cinq paliers :
0 non vu · 1 vu en théorie (fiche lue, carte vue) · 2 reconnu sur image (carte ou cas réussi) ·
3 trouvé sur patient (logbook) · 4 dicté en autonomie (logbook, déclaré par l'utilisateur).

Pour le rachis, où l'ESSR n'a pas de guide, les coupes viennent des descriptions de
sono-anatomie rachidienne publiées en accès ouvert et des fiches gestes du mémo ; la fiche
annonce ce choix de sources.

## 5. Fiche diagnostique

Fichier `js/data/msk/<region>.js`, appel `ECHO.registerMsk({...})` (fonction ajoutée à
`registry.js`, qui tient aussi `E.mskOrder`). Champs :

| Champ | Contenu |
|---|---|
| `id`, `titre`, `en`, `maj`, `motsCles` | comme les fiches gestes |
| `valide` | `false` tant que l'utilisateur n'a pas validé la fiche dans la conversation ; bandeau visible ; passe à `true` sur sa seule décision |
| `flash` | `sonde`, `sondeNote` (fréquence, profondeur, preset), `installation`, `duree` |
| `protocole` | coupes numérotées `{ n, titre, position, repere, structures: [], image, schema?, dynamique?, pieges? }` |
| `sonoanatomie` | `{ structure, aspect, mesure?, source }` ; toute mesure chiffrée a une source |
| `pathologies` | `{ nom, en, signes: [], pieges, image?, conduite, gestes: [ids de fiches] }` |
| `artefacts` | `{ nom, texte }` |
| `dictee` | Markdown : compte rendu type d'un examen normal, structure par structure, phrases prêtes à dicter |
| `competences` | voir §4 |
| `references` | même schéma que les fiches gestes, `verif` obligatoire |
| `videos` | liens vérifiés dans le navigateur, jamais devinés |

Image : `{ src, credit, licence, legende, marqueurs?: [{ n, x, y, label }] }`, coordonnées
dans un repère de largeur 1000 comme `js/data/anat/`. Les marqueurs servent au mode quiz du
site et aux cartes « structure ».

**Routes** : `#/msk` (index des régions) et `#/msk/<region>[/<section>]` ; `js/app.js` les
reconnaît et délègue le rendu à `js/lib/msk.js`. Navigation : bloc « Diagnostic MSK » en tête
de la colonne de gauche. Recherche plein texte : les fiches MSK
entrent dans l'index. Le mode quiz existant masque les étiquettes des marqueurs, survol pour
révéler.

**Règles de rédaction** : celles de `GUIDE-REDACTION.md` (sourçage, confiance annoncée, ton),
plus : chaque pathologie renvoie à au moins un geste du mémo ou dit explicitement qu'aucun
geste du mémo ne s'applique ; `dictee` ne contient aucune valeur chiffrée sans source dans
`sonoanatomie`.

**Production** (`/msk-fiche <region>`) : sourçage d'abord (PDF ESSR de la région, 5 à 10
articles en accès ouvert via Europe PMC avec `scripts/echo-search.js`, vidéos ouvertes dans le
navigateur), puis rédaction par au plus trois agents sur des parties disjointes (protocole et
images ; pathologies ; dictée, compétences, références), puis `build-index`, `check-all`,
`msk-audit`, capture de contrôle de chaque image à marqueurs, commit avec `valide: false`.
Le coût en quota est mesuré et noté dans `PROCHAINE-SESSION.md` après le pilote.

## 6. Cartes Anki

**Chaîne** : `node scripts/msk-export.js <region>` écrit `dist/msk/<region>.json` et rend en
PNG, via Playwright, chaque image à marqueurs en deux versions (numéros seuls ; numéros et
étiquettes). Puis `scripts/anki/.venv/bin/python scripts/anki/build.py <region>` produit
`dist/anki/msk-<region>.apkg` et le copie dans le dossier de transfert de `config.json`.

**Identifiants stables** : identifiant de modèle et de paquet constants par région ; GUID de
note dérivé de `('msk', region, type, item_id)`. Une réimportation met les notes à jour sans
réinitialiser la planification.

**Mode socle** (`msk-export.js --gestes <ids>`) : avant qu'une fiche MSK existe, le paquet
d'une région est tiré des fiches gestes déjà illustrées : les figures `echo` de
`js/data/figures/<id>.js` et les structures nommées de `js/data/anat/<id>.js` donnent des
cartes `structure` ; les champs `sonoanatomie` et `pieges` des fiches donnent des cartes
`piege`. Mêmes GUID que plus tard, donc la fiche MSK remplace ces cartes sans doublon.

**Cinq types de notes**, un paquet par région, sous-paquets par type, étiquettes
`msk::<region>`, `type::<type>`, `niveau::<1|2>` :

| Type | Recto | Verso |
|---|---|---|
| `structure` | image à numéros, « nommer 1 à n » | image étiquetée, liste |
| `coupe` | « Région, coupe n : position, repère ? » | position, repère, structures attendues, image |
| `pathologie` | image pathologique ou vignette, contexte en une ligne | diagnostic, signe clé, conduite, geste lié |
| `piege` | question d'artefact ou de piège | réponse et parade |
| `geste` | « indication confirmée à l'écho : quel geste, quelle fiche ? » | geste, lien vers la fiche |

Volume cible : 40 à 60 cartes par région. Charge visée à régime : 10 à 15 min par jour, à
mesurer sur le pilote. Le mode quiz du site reste disponible pour le drill ponctuel sur Mac.

## 7. Audio

Skill `/msk-audio <region>`. Un carnet NotebookLM « Écho MSK — <région> », sources :
le texte de la fiche exporté depuis `dist/msk/<region>.json`, le PDF ESSR de la région, deux à
quatre articles en accès ouvert pris dans `references` avec `verif: true`, les vidéos de
`videos` (NotebookLM ingère les URL YouTube).

Deux épisodes, `language: 'fr'`, public annoncé dans le prompt : algologue expérimenté,
sans vulgarisation, terminologie française avec le terme anglais une fois.
1. Deep dive de 15 à 20 min qui suit l'ordre du protocole.
2. Rappel oral : questions suivies d'une pause puis de la réponse, centré sur les pathologies
   et les pièges. Si le format pause n'est pas respecté, un second deep dive ciblé sur les
   pathologies le remplace.

Génération asynchrone : la skill lance, attend une seule fois au plus cinq minutes, puis
télécharge dans `audio/<region>-deep-dive.mp3` et `audio/<region>-rappel.mp3` ; sinon elle
rend la main et le téléchargement se fait à la session suivante. Règle d'usage : l'audio
sert à l'exposition ; la fiche validée reste la référence.

## 8. Skills de coaching

Toutes lisent et écrivent le dossier privé, ne font aucune recherche web sauf mention, et
annoncent leur durée.

**`/msk-semaine [--bilan]`** (lundi, 2 min). Lit `progression.json`, `logbook.md`,
`questions.md`, `semaines/`. Produit `semaines/<année>-W<nn>.md` et l'affiche :
- audio à écouter sur le trajet (épisodes de la région active non encore marqués écoutés) ;
- deux sessions du soir : les cas à jouer (items `pathologie` ou `piege` au palier ≤ 2) ;
- **trois cibles concrètes à chercher sur les patients de la semaine** : items `coupe`,
  `structure` ou `dynamique` au palier ≤ 2 de la région active, formulés comme une consigne ;
- questions en attente et rappel du paquet Anki à importer si un nouveau est prêt.
Avec `--bilan` (mensuel) : grille OSAUS de la ou des régions actives à remplir dans la
conversation, écrite dans `osaus/<année>-<mois>.json` ; synthèse des paliers gagnés sur le
mois ; proposition d'ouvrir la région suivante quand la région active atteint le critère du §1.

**`/msk-cas [region]`** (soir, 15 min). Choisit un item `pathologie`, `piege` ou `coupe` au
palier le plus bas, en priorité issu de `questions.md`. Construit une vignette d'HDJ
fictive, affiche l'image correspondante du dépôt, pose une question. Tutorat selon la skill
`learn` : diagnostic avant enseignement, un pas par tour, indices qui rétrécissent sans donner
la réponse, six tours au plus. Fin nette : « su / pas su », état mis à jour (palier 2 si
reconnu), fichier `cas/<date>-<item>.md`.

**`/msk-logbook`** (après l'HDJ, 3 min). L'utilisateur dicte ce qu'il a échographié. La
skill extrait des entrées `{ date, region, items: [{ id | libelle, trouve: bool,
difficulte: 1..3, dicte_seul: bool }], questions: [] }`, les ajoute à `logbook.md`, met à
jour les paliers (3 si trouvé sur patient, 4 si dicté seul), pousse les questions dans
`questions.md`. Quand une question appelle une réponse courte et sourçable, la skill la
donne avec PMID.

**Garde-fou données patient** : avant toute écriture, la skill vérifie l'absence de nom,
initiales, âge associé à une date, date de naissance, numéro, lieu de résidence ou toute
formule désignant une personne. En cas de détection elle n'écrit rien, cite le passage et
demande une reformulation. Les phrases pièges sont testées (voir §11).

## 9. État privé : schémas

`config.json` :
```json
{ "repo": "/Users/<user>/Claude/Code/echo-algologie",
  "transfert_anki": "/Users/<user>/Library/Mobile Documents/com~apple~CloudDocs/Écho MSK/anki",
  "regions_actives": ["epaule"] }
```

`progression.json` :
```json
{ "items": { "epaule.c03": { "etat": 2, "maj": "2026-10-14",
                             "historique": [["2026-10-09", 1, "fiche"], ["2026-10-14", 2, "cas"]] } } }
```

`logbook.md` : un bloc par journée, champs structurés en liste, texte libre limité aux
questions. `osaus/<année>-<mois>.json` : `{ "<region>": { "items": [1..5 × 7], "note": "" } }`.

Items OSAUS (Tolsgaard et coll., 2013) : indication de l'examen · connaissance appliquée de
l'appareil · optimisation de l'image · examen systématique · interprétation des images ·
documentation de l'examen · décision médicale. Les libellés sont repris mot pour mot de la
publication au moment de créer la grille, avec la référence dans le fichier.

## 10. Mesure

- Mensuel : grille OSAUS par région active, auto-évaluation.
- Continu : distribution des paliers par région et par type, lue par `/msk-semaine`.
- Critère de passage à la région suivante : §1.
- Limite dite dans la grille : une auto-évaluation n'est pas une évaluation observée ; une
  notation trimestrielle par un confrère sur la même grille reste à organiser par
  l'utilisateur.

## 11. Contrôle qualité et tests

- `node scripts/build-index.js` puis `NODE_PATH=$(npm root -g) node scripts/check-all.js`
  étendu aux routes `#/msk/<region>` : zéro erreur JS.
- `node scripts/msk-audit.js` : champs obligatoires, identifiants de compétence uniques et
  conformes à `<region>.<lettre><nn>`, chaque image référencée existe avec `credit` et
  `licence` parmi CC BY, CC BY-NC, CC0 (jamais ND : les marqueurs font une œuvre dérivée ;
  jamais SA : le dépôt n'est pas sous licence partage à l'identique), chaque identifiant de `gestes` existe dans le
  registre, chaque référence porte `verif`, aucune mesure dans `dictee` sans source.
- Capture de chaque image à marqueurs (`scripts/shot.js`) avant de considérer la fiche finie.
- Paquet Anki : ouverture SQLite du `.apkg` produit, nombre de notes égal au nombre attendu,
  médias présents ; import réel dans Avorio vérifié au pilote.
- Skills de coaching : jeu de fixtures `tests/fixtures/echo-msk/` (dossier privé factice) ;
  chaque skill est exécutée dessus et ses fichiers de sortie comparés aux attendus.
- Garde-fou données patient : liste de phrases pièges (nom, initiales, âge et date, lieu,
  « la dame de la chambre 4 ») qui doivent toutes être refusées, et phrases légitimes qui
  doivent passer.

## 12. Garde-fous

- Dépôt public : images CC BY, CC BY-NC ou CC0 et SVG maison uniquement, licence lue dans
  l'article source comme pour les fiches gestes ; aucune figure d'ouvrage ni de NYSORA ; les
  ouvrages restent des références par page.
- Aucune donnée patient nulle part : le dossier privé est hors git et son schéma n'a pas de
  champ libre descriptif ; le garde-fou du §8 s'applique.
- Budget : au plus trois agents par vague, sourçage avant rédaction, coût annoncé par vague,
  sessions courtes, reprise sur commits fréquents.
- Clinique : une fiche non validée affiche un bandeau ; le mémo reste une aide à
  l'apprentissage, la vérification avant tout geste s'applique.

## 13. Outillage

À installer : PubMed (répertoire Anthropic) · YouTube Transcriber (répertoire Anthropic,
skill lue après installation, retirée si elle fait plus que transcrire) · Avorio sur iPhone et
Mac · `python3 -m venv scripts/anki/.venv && scripts/anki/.venv/bin/pip install genanki`.
Déjà en place : NotebookLM (`nlm` 0.5.26), skill `learn`, firecrawl, skills scientifiques,
Playwright.

Permissions à ajouter dans `.claude/settings.json` : `Bash(scripts/anki/.venv/bin/*)`,
`Bash(python3 -m venv *)`.

## 14. Livraison

| Phase | Contenu | Sortie attendue |
|---|---|---|
| Socle, cette semaine | `registry.js` + `msk.js` minimal, skills squelettes, dossier privé, Avorio, PubMed ; premier paquet « épaule » en mode socle depuis `sous-acromiale`, `long-biceps`, `gleno-humerale`, `acromio-claviculaire`, `nerf-suprascapulaire`, `nerf-axillaire`, `calcifications-coiffe-barbotage` ; premier épisode audio « épaule » | un paquet importé sur l'iPhone, un mp3 pour le trajet |
| Pilote, S1 à S2 | fiche `epaule` complète, 40 à 60 cartes, trois skills de coaching, grille OSAUS | validation par l'utilisateur, coût mesuré |
| Production, S3 à S10 | une région tous les dix jours environ : genou, rachis, coude, poignet-main, hanche, cheville-pied, paroi-nerfs ; fiche + paquet + audio à chaque fois | huit régions validées |
| Mensuel | `/msk-semaine --bilan` | grille OSAUS, recalibrage |

Le plan d'implémentation couvre les phases Socle et Pilote. La phase Production est une
répétition de `/msk-fiche`, `/msk-anki` et `/msk-audio` par région, sans nouveau code.

## 15. Évolutions possibles, non engagées

Clips personnels anonymisés dans le dossier privé pour `/msk-cas` · synchronisation de
`progression.json` entre appareils · cartes d'occlusion d'image natives · évaluation OSAUS par
un confrère · export de planches d'enseignement depuis les fiches MSK.

## 16. Écarts d'implémentation (7–8 octobre 2026)

Ce que le code livré fait autrement que le texte ci-dessus, relevé à la clôture du pilote épaule le 2026-10-08 ; le reste
de la spécification s'applique tel quel. Une ligne par écart : section, date, commit.

- §1 — 2026-10-07 (`812397d`) : critère de passage compté en examens dictés sans aide cumulés (lignes « Examens » du logbook), et non sur « 10 patients consécutifs ».
- §5 — 2026-10-07 (`84a8c43`) : marqueurs en fractions [0, 1] de l'image recadrée, et non dans un repère de largeur 1000, pour réutiliser `figHtml` (rendu et mode quiz des figures des fiches gestes).
- §5 — 2026-10-07 (`3b39ae5`) : coupe sans image libre = `image: null` + `sansImage: '<motif>'` (audit : exactement l'un des deux ; ligne grise au rendu ; carte de coupe textuelle, sans carte « structure »).
- §6 — 2026-10-07 (`bbb80b6`) : les cartes issues des fiches gestes restent dans le paquet de la région (sous-paquets Structures et Pièges et artefacts, clés `socle-…`) au lieu d'être remplacées par celles de la fiche MSK ; pas d'étiquette `niveau::`.
- §3, §6 — 2026-10-07 (`7d0c762`) : médias en JPEG qualité 85, et non en PNG : 15 PNG à 1800 px pesaient 16 Mo pour le seul squelette de l'épaule, 2,85 Mo en JPEG.
- §6 — 2026-10-07 (`ef3a698`) : l'export écrit dans un répertoire de travail sous `dist/msk/`, mis en place seulement s'il réussit ; un échec laisse intactes les sorties précédentes.
- §8 — 2026-10-07 (`812397d`) : `cas pick` ne tire que pathologies et pièges, après les questions ouvertes ; les coupes sont des cibles sur patient, dans le plan de semaine.
