---
name: controle
description: Contrôle complet du mémo — index régénéré, rendu de chaque fiche sans erreur, audit des champs et des références.
---

```bash
node scripts/build-index.js
NODE_PATH=$(npm root -g) node scripts/check-all.js
node scripts/audit.js
node scripts/refs-a-verifier.js | tail -1
```

Toute ligne marquée `<<<` dans check-all, tout « manque: » ou « MANQUANTE » dans l'audit
doit être corrigé avant commit. Résumer : nombre de fiches, scènes, références restantes
à vérifier.
