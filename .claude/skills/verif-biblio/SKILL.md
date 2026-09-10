---
name: verif-biblio
description: Passe de vérification bibliographique — confirmer ou supprimer les références marquées verif:false, ajouter les vidéos vues, en respectant le budget de recherche web.
---

Argument facultatif : une région (`membre-sup`, `membre-inf`, `rachis-bassin`,
`tete-cou`, `thorax`, `socle`) ; sinon suivre l'ordre de `VERIFICATION.md`.

Lire `VERIFICATION.md` et appliquer ses règles à la lettre : au plus 3 agents, budget
de recherche compté, une requête par référence (deux au plus), `verif: true` seulement
si vue, DOI/PMID seulement si vus, suppression sinon avec adaptation de `evidence`.
Vidéos : uniquement des URL vues. Après chaque fiche : build-index + check-all, commit,
push. Rapport : références confirmées / corrigées / supprimées par fiche, fiches
restantes, `node scripts/refs-a-verifier.js | tail -1`.
