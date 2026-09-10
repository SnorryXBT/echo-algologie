---
name: videos
description: Générer la vidéo « le geste en 40 s » de chaque fiche (muette ou narrée en français via la voix système), ajouter la narration aux scènes et le lien vers une démonstration réelle.
---

Lire `CHANTIER-ILLUSTRATIONS.md` section 4. Prérequis : `brew install ffmpeg`,
Playwright + Chromium. Pour chaque fiche : ajouter `narration` aux scènes si nécessaire
(≤ 35 mots, phrase parlée), décider muet / narré, lancer
`NODE_PATH=$(npm root -g) node scripts/video.js <id> [--narration --voice=Thomas]`,
regarder le résultat, chercher une démonstration réelle (URL vue uniquement) et
l'ajouter à `videos`. Puis `node scripts/build-index.js`, check-all, commit, push.
Argument `--all` possible. Si le quota de session est atteint, reprendre dès la levée.
