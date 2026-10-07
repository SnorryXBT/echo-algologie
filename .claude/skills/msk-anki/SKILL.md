---
name: msk-anki
description: Générer le paquet Anki d'une région (cartes de la fiche MSK et des fiches gestes de la région), le vérifier, le copier vers l'iPhone via iCloud et dire à Mat comment l'importer dans Avorio.
---
Argument : une région (ou `all` : chaque région qui a une fiche MSK). Durée : une à deux minutes par région.
1. `NODE_PATH=$(npm root -g) node scripts/msk-export.js <region>` (sans fiche MSK : ajouter `--gestes id,id,…`). Noter le nombre N de cartes affiché.
2. `scripts/anki/.venv/bin/python scripts/anki/build.py <region> --copy` (le paquet est vérifié avant toute copie ; dossier privé requis : s'il n'existe pas, `node scripts/msk-progress.js init` d'abord)
3. `scripts/anki/.venv/bin/python scripts/anki/check.py dist/anki/msk-<region>.apkg N` → code 0, aucun média manquant.
4. Lire deux JPEG de dist/msk/img/<region>/, le recto et le verso d'une même carte (`msk-<region>-<key>-recto.jpg`, `msk-<region>-<key>-verso.jpg`) : pastilles lisibles, lignes sur la structure ; sinon corriger dx/dy dans la fiche et relancer.
5. Dire à Mat : cartes par type, chemin dans iCloud Drive (Écho MSK → anki → msk-<region>.apkg), import dans Avorio (Importer → Fichiers → iCloud Drive → Écho MSK → anki). Une réimportation met les cartes à jour sans perdre la planification : GUID stables tant que les `key` des cartes ne changent pas — ne jamais les renommer.
