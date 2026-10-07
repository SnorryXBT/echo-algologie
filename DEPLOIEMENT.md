# Hébergement privé — Cloudflare Pages + Cloudflare Access

Objectif : accéder au mémo depuis n'importe quel appareil, **sans qu'il soit public**.
Cloudflare Access met une porte devant le site : seule l'adresse mail autorisée reçoit un
code à usage unique. Gratuit jusqu'à 50 utilisateurs.

## État (10 septembre 2026) — en place et vérifié

| Élément | Valeur |
|---|---|
| Projet Pages | `echo-algologie` (compte matabou@gmail.com), **direct upload**, branche de production `main`, sans build, racine `/` |
| URL | https://echo-algologie.pages.dev |
| Application Access | « Écho-algologie », self-hosted, destinations `echo-algologie.pages.dev` + `*.echo-algologie.pages.dev`, session 1 mois |
| Politique | « Acces personnel Mat » (réutilisable, partagée avec Algo-IFD) : Allow → Emails → matabou@gmail.com |
| Identité | One-time PIN (seule méthode configurée sur le compte) |
| Équipe Zero Trust | `bitter-feather-66ff.cloudflareaccess.com` |

Test du 10/09/2026 : une requête anonyme sur `/`, sur un fichier JS et sur une URL de
prévisualisation `<hash>.echo-algologie.pages.dev` renvoie un 302 vers la page de
connexion Access. Le site n'est pas public.

**Déploiement du 11/09/2026** (69 fichiers sur 312 renvoyés) : déploiement
`7c72b45c`, vérifié `Environment: Production`, `Branch: main`, `Source: 1e21ae6` —
la source affichée par `wrangler pages deployment list` permet de confirmer *quel
commit* est réellement en ligne, à faire systématiquement. Test anonyme refait et
concluant sur `/`, `/index.html`, `/js/app.js`, `/css/app.css` et sur la nouvelle URL
de prévisualisation : 302 vers `bitter-feather-66ff.cloudflareaccess.com` partout.
Rappel de la raison d'être de ce test sur l'URL de prévisualisation : chaque
déploiement en crée une nouvelle, et sans le wildcard `*.echo-algologie.pages.dev`
elle serait une porte publique sur tout le mémo.

## Mises à jour du site

Le projet est en **direct upload** : un `git push` ne redéploie **pas**. Après chaque
modification (et après `node scripts/build-index.js` + `check-all.js` → 0 problème) :

```bash
cd ~/Claude/Code/echo-algologie && T=$(mktemp -d) && git archive HEAD | tar -x -C "$T" && npx wrangler pages deploy "$T" --project-name=echo-algologie --branch=main --commit-hash=$(git rev-parse HEAD) --commit-message="$(git log -1 --format=%s)" ; rm -rf "$T"
```

Depuis le 7 octobre 2026, on déploie **l'arbre commité** (`git archive HEAD`), pas le dossier de travail :
celui-ci contient désormais `scripts/anki/.venv/` (≈ 1 000 fichiers Python), `dist/` (paquets Anki, cartes)
et `.superpowers/` (briefs et diffs de revue), que `wrangler` enverrait tels quels — il n'applique pas
`.gitignore`. Les options `--commit-hash` et `--commit-message` conservent la colonne *Source* de
`wrangler pages deployment list`, qui dit quel commit est en ligne.

Pièges connus :
- sans `--branch=main`, le déploiement part en *Preview* (couvert par Access grâce au
  wildcard, mais l'URL principale n'est pas mise à jour) ;
- wrangler ≥ 4.130 : `--force` n'est nécessaire qu'à la **création** d'un projet, pas au
  déploiement ;
- tout l'arbre commité est envoyé (docs, scripts, `.claude/`). Rien de secret n'y figure, et
  Access couvre l'ensemble, mais ne jamais y déposer de jeton ni de donnée patient ;
- `npx wrangler pages deploy .` (le dossier de travail) enverrait aussi le venv Python, `dist/` et
  `.superpowers/` : toujours passer par l'export `git archive` ci-dessus.

## Passer à l'auto-déploiement Git (optionnel)

Un projet direct upload ne peut pas être relié à Git après coup (limite Cloudflare).
Procédure si le besoin se confirme :
1. dash.cloudflare.com → Workers & Pages → autoriser la GitHub App Cloudflare Pages sur
   `SnorryXBT/echo-algologie` (consentement navigateur, impossible par API) ;
2. supprimer le projet `echo-algologie`, le recréer via *Connect to Git* → branche `main`,
   build vide, output `/` → le hostname `echo-algologie.pages.dev` est récupéré ;
3. l'application Access reste valable (elle vise le hostname, pas le projet) — refaire le
   test anonyme.

## Refaire ou vérifier Access (tableau de bord actuel)

Le tableau de bord Zero Trust est désormais intégré à dash.cloudflare.com :
`dash.cloudflare.com/<account>/one/access-controls/apps` → *Create new application* →
*Self-hosted and private* :
- Destinations → *Add public hostname* → **Switch to custom input** (pages.dev n'est pas
  une zone du compte) → `echo-algologie.pages.dev`, puis une seconde entrée
  `*.echo-algologie.pages.dev` ;
- Access policies → *Add current policies* → « Acces personnel Mat » (ou *Create new
  policy* : Allow, Include → Emails → matabou@gmail.com) ;
- Authentication : laisser *Accept all available identity providers* (= One-time PIN) ;
- Details : Name « Écho-algologie », Session Duration **1 month** → *Create*.

Test : `curl -sI https://echo-algologie.pages.dev/` doit renvoyer `302` vers
`*.cloudflareaccess.com`. Tant que ce n'est pas le cas, le site est public : ne pas
partager l'URL.

Ni le connecteur MCP Cloudflare ni le jeton OAuth de wrangler ne couvrent Zero Trust :
la configuration Access passe par le tableau de bord (fait via Claude in Chrome le
10/09/2026) ou par un API token dédié « Access: Apps and Policies — Edit ».
