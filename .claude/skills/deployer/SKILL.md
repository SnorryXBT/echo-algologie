---
name: deployer
description: Publier le mémo sur Cloudflare Pages derrière Cloudflare Access (accès réservé à l'e-mail de Mat), puis vérifier que le site n'est pas public.
---

Lire `DEPLOIEMENT.md`. Avec le connecteur Cloudflare (ou, à défaut, `npx wrangler pages
deploy . --project-name=echo-algologie --branch=main`) :

1. Projet Pages `echo-algologie` relié à `SnorryXBT/echo-algologie`, branche `main`,
   sans build, sortie `/`.
2. Application Access self-hosted sur `echo-algologie.pages.dev` et
   `*.echo-algologie.pages.dev`, One-time PIN, politique Allow sur `matabou@gmail.com`,
   session 1 mois. Si le connecteur ne sait pas créer Access, donner les trois écrans du
   tableau de bord (section B de `DEPLOIEMENT.md`).
3. Test obligatoire : en navigation privée, l'écran de connexion Access doit précéder le
   site. Ne jamais annoncer le déploiement comme terminé sans ce test.
