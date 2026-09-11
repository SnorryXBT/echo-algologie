---
name: controle
description: Contrôle complet du mémo — index régénéré, rendu de chaque fiche sans erreur, audit des champs et des références.
---

```bash
node scripts/build-index.js
NODE_PATH=$(npm root -g) node scripts/check-all.js
node scripts/audit.js
node scripts/audit-axes.js
node scripts/refs-a-verifier.js | tail -1
```

Toute ligne marquée `<<<` dans check-all, tout « manque: » ou « MANQUANTE » dans l'audit,
toute ligne `CONTRADICTION`, `PAIR ORPHELIN`, `PAIR ABSENT` ou `IMAGE ABSENTE` dans
`audit-axes` doit être corrigée avant commit.

Les lignes `MIROIR DIT` sont normales : l'image réelle et le schéma n'ont pas le même axe,
mais la légende le dit explicitement. En revanche une `CONTRADICTION` signifie que la même
aiguille se lit dans deux sens opposés d'une figure à l'autre — c'est le défaut qui a fait
enseigner un côté de ponction inversé sur le bloc axillaire.

Résumer : nombre de fiches, scènes, paires écho/schéma, références restantes à vérifier.
