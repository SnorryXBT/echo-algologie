# Hébergement privé — Cloudflare Pages + Cloudflare Access

Objectif : accéder au mémo depuis n'importe quel appareil, **sans qu'il soit public**.
Cloudflare Access met une porte devant le site : seule l'adresse mail autorisée reçoit un
code à usage unique. Gratuit jusqu'à 50 utilisateurs.

Le dépôt est prêt : `wrangler.toml` (déploiement sans build depuis la racine) et
`_headers` (noindex, pas de cache). Il reste deux choses à faire **une seule fois**,
depuis le Mac, parce que la session cloud n'a ni accès à l'API Cloudflare ni jeton.

## A. Publier le site (au choix)

**A1 — depuis Claude Code sur le Mac (connecteur Cloudflare branché)**, coller :

> Dans le dépôt ~/Claude/Code/echo-algologie, crée le projet Cloudflare Pages
> « echo-algologie » relié au dépôt GitHub SnorryXBT/echo-algologie, branche de
> production `main`, sans commande de build, répertoire de sortie `/`. Puis crée une
> application Cloudflare Access « Écho-algologie » de type self-hosted sur
> `echo-algologie.pages.dev` (et `*.echo-algologie.pages.dev`), méthode d'identité
> One-time PIN, avec une politique Allow limitée à l'e-mail matabou@gmail.com, durée de
> session 1 mois. Vérifie ensuite qu'une visite anonyme renvoie la page de connexion
> Access et non le site.

**A2 — en ligne de commande** (wrangler déjà authentifié en OAuth sur le Mac) :

```bash
cd ~/Claude/Code/echo-algologie && npx wrangler pages deploy . --project-name=echo-algologie --branch=main
```

Piège connu : sans `--branch=main`, le déploiement part en *Preview*.
Inconvénient de A2 : chaque mise à jour demande de relancer la commande, alors que A1
(liaison Git) redéploie automatiquement à chaque push.

**A3 — dans le tableau de bord** : dash.cloudflare.com → Workers & Pages → Create →
Pages → Connect to Git → `echo-algologie` → branche `main`, build command vide, output
directory `/` → Save and Deploy.

## B. Verrouiller l'accès (obligatoire avant toute visite)

dash.cloudflare.com → Zero Trust → Access → Applications → **Add an application** →
Self-hosted :
- Application name : Écho-algologie
- Application domain : `echo-algologie.pages.dev` — ajouter un second domaine
  `*.echo-algologie.pages.dev` pour couvrir aussi les URL de prévisualisation
- Identity providers : One-time PIN
- Session duration : 1 month
- Policy : Name « Mat », Action **Allow**, Include → Emails → `matabou@gmail.com`

Test : ouvrir `https://echo-algologie.pages.dev` en navigation privée → page de
connexion Cloudflare Access, code reçu par mail → site. Tant que cet écran n'apparaît
pas, le site est public : ne pas partager l'URL.

## C. Mises à jour

Avec A1/A3 : chaque `git push` sur `main` redéploie en 1–2 minutes (la session de
vérification bibliographique pousse sur `main` : le site se met à jour tout seul).
Avec A2 : relancer la commande de déploiement.
