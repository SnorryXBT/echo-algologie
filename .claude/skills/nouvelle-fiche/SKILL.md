---
name: nouvelle-fiche
description: Rédiger ou refondre une fiche de geste échoguidé selon le gabarit du projet (GUIDE-REDACTION.md), avec sourçage web vérifié, schémas animés et contrôle visuel.
---

Argument : l'`id` de la fiche (kebab-case, présent ou à ajouter dans `js/data/registry.js`).

1. Lire `GUIDE-REDACTION.md` en entier et `js/data/procedures/nerf-suprascapulaire.js`
   (fiche étalon). Si la fiche existe déjà, la lire aussi.
2. Sourcer avant d'écrire : 8–12 recherches web ciblées (technique, anatomie, ECR /
   méta-analyse, recommandations, complications, vidéos). Ne citer que ce qui a été vu.
3. Écrire `js/data/procedures/<id>.js` : tous les champs du guide, 2–4 scènes.
4. `node scripts/build-index.js`, puis capturer chaque scène avec `scripts/shot.js`,
   regarder le PNG, corriger, recapturer. Terminer par `scripts/check-all.js` (0 problème)
   et `node scripts/audit.js`.
5. Commit en français, push sur `main`. Rapport : mots, scènes, références (dont
   `verif:false`), points « à confirmer ».
