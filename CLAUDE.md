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

`/nouvelle-fiche <id>` · `/controle` · `/verif-biblio [région]` · `/deployer`

## État (10 septembre 2026)

64 fiches, 166 schémas, ≈ 640 références dont ≈ 400 citées de mémoire à confirmer :
la vérification bibliographique est en cours (sessions cloud successives, ordre :
membre sup., membre inf., rachis-bassin, tête-cou, thorax, socle). Prochaines
améliorations envisagées : colonne CCAM vérifiée sur ameli, liens vidéo par fiche,
version imprimable « fiche flash » d'une page.
