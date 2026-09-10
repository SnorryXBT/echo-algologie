---
name: illustrer
description: Ajouter à une fiche (ou une région) les figures anatomiques style Gray annotées, la figure d'installation patient/sonde et l'écho-anatomie réelle côte à côte avec le schéma, selon CHANTIER-ILLUSTRATIONS.md.
---

Argument : un `id` de fiche ou une région (`membre-sup`, `membre-inf`, `rachis-bassin`,
`tete-cou`, `thorax`, `socle`) ; sans argument, suivre l'ordre du chantier.

Lire `CHANTIER-ILLUSTRATIONS.md` (sections 1 à 3 et 5) et `js/data/figures/README.md`.
Pour chaque fiche : télécharger les planches de Gray utiles (numéro vérifié sur
Commons), 1 image échographique réelle réutilisable, produire la figure d'installation ;
écrire `js/data/figures/<id>.js` avec crops, étiquettes françaises, crédits et sources ;
`node scripts/build-index.js` ; capturer une figure (`scripts/shot.js '#/fiche/<id>' out.png light '.fig' 0`)
et la lire pour vérifier la position des étiquettes ; check-all ; commit ; push.
Au plus 3 agents en parallèle. Si le quota de session est atteint, reprendre dès la
levée de la limite, sans attendre d'instruction.
