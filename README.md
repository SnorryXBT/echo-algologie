# Écho-algologie — mémo privé

Ouvrir **`index.html`** (double-clic). Tout fonctionne hors ligne, sans serveur ; seuls
les liens « Vidéos » ouvrent des ressources externes.

- Recherche plein texte (titre, indications, mots-clés) et filtres par type de geste.
- **Mode quiz** : masque les étiquettes des schémas, survol pour révéler.
- **Rejouer** relance l'animation aiguille → diffusion d'un schéma.
- Thème clair / sombre, impression (`⎙`).
- Checklist pré-geste cochable (non persistante, volontairement).

Structure : `js/data/procedures/*.js` (une fiche par fichier) · `js/lib/scene.js`
(moteur des schémas) · `GUIDE-REDACTION.md` (règles de rédaction et API des schémas).
Après ajout d'une fiche : `node scripts/build-index.js`.

Document personnel de révision. Schémas = représentations schématiques ; vérifier
posologies et références avant tout geste.
