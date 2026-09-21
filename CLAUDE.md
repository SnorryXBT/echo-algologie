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
  `audit.js` (champs, longueurs, références), `check-all.js` (rendu de chaque fiche en
  Chromium, erreurs JS), `shot.js` (capture d'une scène), `refs-a-verifier.js`,
  `audit-axes.js` (axes des paires écho/schéma, images référencées absentes), `anat-grid.js`
  (grille cotée + profils de brillance avant tracé), `anat-check.js` (contrôle statique et état de validation des
  coupes anatomiques), `anat-export.js` (export PNG pour l'enseignement, licences diffusables seulement).
- `js/lib/anat.js` — moteur des coupes anatomiques recalées sur les échos réelles ; données dans
  `js/data/anat/<id>.js` ; page de validation `#/validation`.

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
`/illustrer [id|région]` · `/videos [id|--all]` · `/echo-anatomie [id|région|--bilan]`

## Règle de reprise (décision de Mat, 10 septembre 2026)

**À chaque quota de session atteint, reprendre systématiquement le travail dès que la
limite est levée**, là où il s'était arrêté, sans attendre d'instruction. Les commits
fréquents servent de points de reprise.

## Chantier en cours : illustrations et vidéos

Voir `CHANTIER-ILLUSTRATIONS.md` : planches de Gray annotées (`js/data/figures/<id>.js`,
images dans `img/<id>/`), figures d'installation, écho-anatomie réelle côte à côte,
vidéo par fiche (`scripts/video.js`, fichiers dans `video/`). Exécution sur le Mac.

## Chantier coupes anatomiques (lancé le 21 septembre 2026)

Décision de Mat : chaque image échographique réelle du mémo reçoit sa **coupe anatomique recalée** (tissus colorés,
mêmes contours, étiquettes communes, fondu écho ↔ anatomie) — skill `/echo-anatomie`. Socle livré : moteur, palette
de 18 tissus, page de validation, export, contrôles. Ordre convenu : (1) socle — fait ; (2) pilote de 5 coupes
hétérogènes pour éprouver la palette — fait le 21 septembre : sous-acromiale, canal carpien, genou (image remplacée),
ganglion stellaire tracés, tous `valide: false` ; LFCN **non tracé**, lecture indécidable sur l'image actuelle, soumis à
Mat (leçons consignées dans la skill) ; (3) production région par région avec lot de validation par région ; (4) rachis-bassin, thorax,
socle : `/illustrer` d'abord. **Une coupe reste `valide: false` (bandeau visible) tant que Mat ne l'a pas relue** ;
jamais d'auto-validation. 41 des 75 images portent des annotations incrustées : préférer une image vierge quand elle
existe. Export hors mémo : CC BY / images personnelles uniquement (37 des 75 images sont CC BY).

## État des illustrations (20 septembre 2026)

**Membre supérieur (14 fiches), membre inférieur (17 fiches) et tête-cou (9 fiches)
complets** : par fiche, 1 à 3 planches de Gray annotées en français, une figure
d'installation, et 1 à 2 images échographiques réelles appariées aux schémas — crédit,
DOI et licence vérifiés article par article. Restent à illustrer : rachis-bassin,
thorax, socle. Silhouettes ajoutées : `genou-medial`, `cheville-posterieure`,
`pied-dorsal`, `talon-plantaire`, puis `cou-lateral`, `nuque`, `face-anterieure`,
`face-laterale`.

Quatre pièges du chantier, tous rencontrés pour de vrai :
- `scripts/echo-search.js` attribue parfois les *academic editors* de la revue (Cureus,
  MDPI) à la place des auteurs → recouper par `authorString` de l'API core Europe PMC.
  **Correctif de fond encore à faire dans le script** (le piège s'est redéclenché cinq
  fois sur la seule région tête-cou).
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
