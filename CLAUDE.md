# Écho-algologie — instructions projet

Mémo **privé** de révision des gestes d'algologie sous échographie, pour Mat (algologue,
IFD). Site statique sans serveur : `index.html` s'ouvre en `file://`. Aucune donnée
patient, jamais. Pas de diffusion : hébergement uniquement derrière Cloudflare Access.

Le contexte général sur Mat et sa doctrine est dans `~/.claude/CLAUDE.md` ; ce fichier
ne traite que du projet.

## Structure

- `js/data/procedures/<id>.js` — une fiche par fichier (`ECHO.register({...})`). Les ids
  et l'ordre sont dans `js/data/registry.js` (manifest).
- `js/lib/scene.js` — moteur des schémas échographiques animés ; `js/app.js` — rendu ;
  `css/app.css` — style. Fichiers partagés : ne les modifier que pour un bug ou une
  fonctionnalité transversale, jamais pour une fiche.
- `GUIDE-REDACTION.md` — **le contrat de qualité d'une fiche** (champs, règles de
  sourçage, API des schémas, pièges du moteur). À lire avant d'écrire ou de relire.
- `VERIFICATION.md` — passe de vérification bibliographique en cours.
- `DEPLOIEMENT.md` — hébergement privé Cloudflare Pages + Access.
- `scripts/` — `build-index.js` (régénère `index.html` après ajout d'une fiche),
  `audit.js` (champs, longueurs, références), `check-all.js` (rendu en Chromium de
  chaque fiche geste et de chaque fiche MSK, erreurs JS), `shot.js` (capture d'une scène), `refs-a-verifier.js`,
  `audit-axes.js` (axes des paires écho/schéma, images référencées absentes), `anat-grid.js`
  (grille cotée + profils de brillance avant tracé), `anat-check.js` (contrôle statique et état de validation des
  coupes anatomiques), `anat-export.js` (export PNG pour l'enseignement, licences diffusables seulement).
- `js/lib/anat.js` — moteur des coupes anatomiques recalées sur les échos réelles ; données dans
  `js/data/anat/<id>.js` ; page de validation `#/validation`.
- Volet Diagnostic MSK : `js/data/msk/<region>.js` — une fiche diagnostique par région (`ECHO.registerMsk`) ;
  `js/lib/msk.js` — rendu de `#/msk` et `#/msk/<region>` ; `scripts/msk-audit.js` (contrôle statique des fiches MSK),
  `scripts/msk-export.js` (cartes, images à marqueurs et digest NotebookLM dans `dist/msk/`, non versionné),
  `scripts/anki/` (venv Python, genanki : `build.py` construit et copie le paquet, `check.py` le vérifie),
  `scripts/msk-progress.js` (état privé, hors dépôt), `scripts/lib/phi-guard.js` (garde-fou données patient).

## Règles non négociables

1. **Aucune référence inventée.** Une référence n'entre que si elle a été vue dans un
   résultat de recherche (titre, revue, année) ; DOI/PMID seulement s'ils ont été vus.
   Sinon `verif: false` (affiché « à vérifier »). Aucune URL vidéo reconstituée.
2. **Aucune posologie inventée** : fourchettes usuelles, sources, doses max des AL.
   Corticoïde non particulaire sur tout site à risque artériel. Bétaméthasone :
   Diprostène® ≈ 7 mg/mL, Célestène® chronodose 5,7 mg/mL — ne pas confondre.
3. **Schémas** : exactitude des rapports anatomiques d'abord ; contrôle visuel obligatoire
   par capture (`scripts/shot.js`) avant de considérer une scène finie.
4. **Ton** : entre pairs, français médical, concis et complet, confiance annoncée
   (Certain / Probable / Supposition), trous de littérature dits explicitement.
5. Après toute modification : `node scripts/build-index.js` puis
   `NODE_PATH=... node scripts/check-all.js` → 0 problème, puis commit et push sur `main`.

## Outils

- Contrôle de rendu : Playwright + Chromium. Sur le Mac, première fois :
  `npm i -g playwright && npx playwright install chromium`, puis
  `NODE_PATH=$(npm root -g) node scripts/check-all.js`. Playwright trouve seul son
  Chromium ; en environnement cloud, `PW_CHROME=/chemin/vers/chrome` force le binaire.
- Déploiement : voir `DEPLOIEMENT.md` (connecteur Cloudflare ou `npx wrangler pages
  deploy . --project-name=echo-algologie --branch=main`).

## Commandes projet (skills)

`/nouvelle-fiche <id>` · `/controle` · `/verif-biblio [région]` · `/deployer` ·
`/illustrer [id|région]` · `/echo-anatomie [id|région|--bilan]` · `/msk-fiche <region>` ·
`/msk-anki <region|all>` · `/msk-audio <region>`

Globales (source `.claude/skills-global/`, installées dans `~/.claude/skills/` par `node scripts/msk-skills-install.js`,
à relancer après toute modification) : `/msk-semaine [--bilan]` · `/msk-cas [region]` · `/msk-logbook`

## Début de session

Lire `PROCHAINE-SESSION.md` : état du mémo, décisions de Mat qui s'imposent, ordre de travail et modèle
conseillé par tâche. Le mettre à jour en fin de session.

## Règle de reprise (décision de Mat, 10 septembre 2026)

**À chaque quota de session atteint, reprendre systématiquement le travail dès que la
limite est levée**, là où il s'était arrêté, sans attendre d'instruction. Les commits
fréquents servent de points de reprise.

## Volet Diagnostic MSK (7 octobre 2026)

Spec : `docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md` ; plan : `docs/superpowers/plans/2026-10-07-msk-diagnostic.md`.
- Régions, dans cet ordre : épaule → genou → rachis → coude → poignet-main → hanche → cheville-pied → paroi-nerfs.
- Une fiche MSK reste `valide: false` (bandeau visible) tant que Mat ne l'a pas validée ; jamais d'auto-validation.
- Images sous `img/msk/` : CC BY, CC BY-NC ou CC0 seulement, jamais ND ni SA ; aucune figure d'ouvrage ni de NYSORA.
- Marqueurs en fractions [0, 1] de l'image recadrée, numérotés dans l'ordre du tableau (`n` = rang + 1, sans trou).
- Les `key` des cartes fixent les GUID Anki : ne jamais les renommer (une clé renommée = une carte neuve, planification à zéro),
  ni le `nom` affiché d'une région (nom et deck_id des paquets Anki en dérivent : le renommer crée d'autres paquets à la réimportation) ;
  celles du socle sont positionnelles (`socle-<geste>-echo-<rang parmi les figures écho à ≥ 2 étiquettes>`,
  `socle-<geste>-piege-<rang dans pieges>`) : insérer (ailleurs qu'en fin de liste), retirer ou réordonner ces figures ou ces pièges, ou ôter ses étiquettes
  à une figure, les renumérote et rend orphelines les notes Anki correspondantes (carte perdue ainsi en `a497e75`).
- Aucune donnée patient, nulle part. État privé dans `~/Claude/Projects/Écho MSK`, jamais dans le dépôt : écrit par
  `scripts/msk-progress.js` seul, derrière le garde-fou `scripts/lib/phi-guard.js`.
- Avant tout commit : `NODE_PATH=$(npm root -g) node --test tests/*.test.js` → tout vert ; `node scripts/msk-audit.js`
  → code 0 (code 1 s'il reste une erreur).

## Chantier en cours : illustrations et vidéos

Voir `CHANTIER-ILLUSTRATIONS.md` : planches de Gray annotées (`js/data/figures/<id>.js`,
images dans `img/<id>/`), figures d'installation, écho-anatomie réelle côte à côte. **Plus de
vidéos générées** (décision de Mat, 4 octobre 2026) : les vidéos sont des liens externes vérifiés,
exclusivement (`videos` de la fiche). La section Références est toujours repliée à l'ouverture.

## Chantier coupes anatomiques (lancé le 21 septembre 2026, production le 2 octobre)

Décision de Mat : chaque image échographique réelle du mémo reçoit sa **coupe anatomique recalée** (tissus colorés,
mêmes contours, étiquettes communes, fondu écho ↔ anatomie) — skill `/echo-anatomie`, moteur `js/lib/anat.js`.
**État au 2 octobre 2026** : tête-cou, membre supérieur, membre inférieur et thorax traités par cette session (trois
vagues de trois agents) ; rachis-bassin-paroi et socle traités par une session parallèle (« Atlas coupes anatomiques »).
Compte courant : `node scripts/anat-check.js` (coupes tracées, validées, images non tracées).
- **Rendement réel : ≈ une image sur deux est traçable.** Les autres (moins de 350 px, orientation non donnée par les
  auteurs, sigles posés ailleurs que sur la structure, mentions contraires à l'anatomie) ne sont PAS tracées : elles
  ont une ligne `R(...)` dans `js/data/anat/zz-refus.js` et une carte « non tracée » sur `#/validation`, avec la
  question précise posée à Mat. Les questions ouvertes sur une coupe tracée sont des lignes `Q(...)`.
- **Une coupe reste `valide: false` (bandeau visible) tant que Mat ne l'a pas relue** ; jamais d'auto-validation. Sa
  réponse revient par « Copier le bilan » (`/echo-anatomie --bilan`).
- **Décision de Mat sur le stellaire (22 septembre)** : une figure dont les annotations contredisent l'anatomie, ou
  dont le trajet d'aiguille impliqué est médicalement invraisemblable, est disqualifiée, pas réinterprétée.
- **Reste à faire** : (1) validation par Mat ; (2) remplacement des images non tracées selon ses décisions ;
  (3) **passe de correction des légendes** des figures `echo` — les agents en ont relevé une vingtaine qui affirment
  plus que leur source (plan, côté, sens d'aiguille) ou la contredisent (rhizarthrose 1, facettes cervicales 1, Morton 2,
  obturateur 2, paravertébral 2, serratus 2) : elles sont citées dans `zz-refus.js`, non corrigées sans l'avis de Mat ;
  (4) après un changement de `crop`, les `labels` de la figure sont décalés si la coupe est retirée.
- Export hors mémo : CC BY / images personnelles uniquement, et coupe validée (`scripts/anat-export.js`).

## Liens externes par fiche (3 octobre 2026)

Décision de Mat : chaque fiche porte, dans `videos`, (1) au moins une vidéo de démonstration réelle (YouTube en premier :
c'est elle qui est intégrée en lecteur), (2) le lien vers la page NYSORA du geste quand elle existe (`source: 'NYSORA'`,
lien seulement — **aucune image NYSORA dans le dépôt, qui est public** ; les pages servent de référence anatomique pour
redessiner). État : 63/64 fiches avec vidéo (socle-securite : rien à démontrer), 53/64 avec page NYSORA (11 gestes sans
page exacte). Chaque lien YouTube a été ouvert dans le navigateur intégré (YouTube refuse curl depuis le Mac) : 6 liens
anciens étaient morts (vidéos passées en privé, réservées aux membres, hors sujet) et ont été remplacés. Vérifier un lien :
l'ouvrir, jamais le deviner.

## État des illustrations (21 septembre 2026)

**Toutes les régions sont illustrées** : membre supérieur (14 fiches), membre inférieur (17), tête-cou (9),
rachis-bassin (12), thorax (5), et au socle `nevrome-cicatriciel`, `socle-echographie`, `socle-hydrodissection`,
`socle-cryoneurolyse`. Par fiche : 1 à 3 planches de Gray annotées en français (ou un schéma SVG original quand Gray
ne couvre pas la cible : branches médiales, ESP, ACNES, clunéaux, ganglion impar, plans PECS/dentelé), une figure
d'installation, 1 à 2 images échographiques réelles appariées aux schémas — auteurs recoupés par `authorString`, licence
lue dans la balise `<license>`. Restent **sans figure, délibérément** : `socle-radiofrequence` (aucune image libre
n'illustre la géométrie de lésion), `socle-securite` et `socle-injectables` (pas de section sono-anatomie : il faudrait
que `js/app.js` affiche des figures `echo` hors de cette section). Scènes encore sans image réelle : clunéal moyen sous
le ligament sacro-iliaque long, névrome ilio-inguinal, bloc pudendal, injection intramusculaire du piriforme.
Silhouettes ajoutées le 21 septembre : `dos-lombaire`, `sacrum-posterieur`, `abdomen-anterieur`, `bassin-posterieur`,
`dos-thoracique`, `thorax-anterieur`, `thorax-lateral`. Presque aucune image écho de ces régions n'est vierge
d'annotations (exceptions : intercostal 1, sterno-claviculaire 1, serratus 1, hydrodissection 2) — à savoir pour les
coupes anatomiques.

Quatre pièges du chantier, tous rencontrés pour de vrai :
- `scripts/echo-search.js` attribue parfois les *academic editors* de la revue (Cureus,
  MDPI) à la place des auteurs → recouper par `authorString` de l'API core Europe PMC.
  **Corrigé dans le script le 21 septembre 2026** (auteurs pris dans `contrib-group` puis remplacés par
  l'`authorString` ; alerte si l'URL et le texte de la licence divergent) — variante rencontrée : auteurs de la
  *bibliographie* ajoutés au crédit (Valera-Calero 2026, auteur unique). Recouper reste la règle.
- une étiquette placée « au raisonnement » tombe souvent sur la structure voisine : le
  contrôle par `scripts/shot.js` + lecture de la capture n'est pas optionnel — environ un
  tiers des étiquettes est faux au premier jet. L'en-tête collant masque ≈ 6 % de la
  hauteur de l'image dans la capture : une étiquette qui y atterrit est non vérifiable,
  la déplacer.
- vérifier que les fichiers image référencés existent bien (`grep -o "img/<id>/[^']*"`
  puis `ls`) : une image absente ne produit **aucune** erreur JS, seulement un 404
  silencieux, et `check-all` la laisse passer.
- les sections des fiches étant repliables depuis `1e21ae6`, `scripts/shot.js` déplie
  désormais les sections avant de capturer ; sans cela la figure est « not visible » et
  la capture échoue en timeout — donc aucun contrôle visuel possible.

## État (10 septembre 2026)

64 fiches, 166 schémas, ≈ 640 références dont ≈ 400 citées de mémoire à confirmer :
la vérification bibliographique est en cours (sessions cloud successives, ordre :
membre sup., membre inf., rachis-bassin, tête-cou, thorax, socle). Prochaines
améliorations envisagées : colonne CCAM vérifiée sur ameli, liens vidéo par fiche,
version imprimable « fiche flash » d'une page.
