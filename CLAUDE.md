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
  Chromium, erreurs JS), `shot.js` (capture d'une scène), `refs-a-verifier.js`.

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
`/illustrer [id|région]` · `/videos [id|--all]`

## Règle de reprise (décision de Mat, 10 septembre 2026)

**À chaque quota de session atteint, reprendre systématiquement le travail dès que la
limite est levée**, là où il s'était arrêté, sans attendre d'instruction. Les commits
fréquents servent de points de reprise.

## Chantier en cours : illustrations et vidéos

Voir `CHANTIER-ILLUSTRATIONS.md` : planches de Gray annotées (`js/data/figures/<id>.js`,
images dans `img/<id>/`), figures d'installation, écho-anatomie réelle côte à côte,
vidéo par fiche (`scripts/video.js`, fichiers dans `video/`). Exécution sur le Mac.

## État des illustrations (11 septembre 2026)

**Membre supérieur (14 fiches) et membre inférieur (17 fiches) complets** : par fiche,
1 à 3 planches de Gray annotées en français, une figure d'installation, et 1 à 2 images
échographiques réelles appariées aux schémas — crédit, DOI et licence vérifiés article
par article. Restent à illustrer : rachis-bassin, tête-cou, thorax, socle. Silhouettes
ajoutées : `genou-medial`, `cheville-posterieure`, `pied-dorsal`, `talon-plantaire`.

Trois pièges du chantier, tous rencontrés pour de vrai :
- `scripts/echo-search.js` attribue parfois les *academic editors* de la revue (Cureus,
  MDPI) à la place des auteurs → recouper par `authorString` de l'API core Europe PMC.
  **Correctif de fond encore à faire dans le script.**
- une étiquette placée « au raisonnement » tombe souvent sur la structure voisine : le
  contrôle par `scripts/shot.js` + lecture de la capture n'est pas optionnel. L'en-tête
  collant masque ≈ 6 % de la hauteur de l'image dans la capture : une étiquette qui y
  atterrit est non vérifiable, la déplacer.
- vérifier que les fichiers image référencés existent bien (`grep -o "img/<id>/[^']*"`
  puis `ls`) : une image absente ne produit **aucune** erreur JS, seulement un 404
  silencieux, et `check-all` la laisse passer.

## État (10 septembre 2026)

64 fiches, 166 schémas, ≈ 640 références dont ≈ 400 citées de mémoire à confirmer :
la vérification bibliographique est en cours (sessions cloud successives, ordre :
membre sup., membre inf., rachis-bassin, tête-cou, thorax, socle). Prochaines
améliorations envisagées : colonne CCAM vérifiée sur ameli, liens vidéo par fiche,
version imprimable « fiche flash » d'une page.
