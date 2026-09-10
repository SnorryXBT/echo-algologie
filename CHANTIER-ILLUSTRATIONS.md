# Chantier illustrations et vidéos — brief d'exécution (session Claude Code sur le Mac)

Décisions de Mat (10 septembre 2026) : rappels anatomiques **style Gray annoté** ; figures
d'installation (patient/sonde) en vecteurs ; écho-anatomie **réelle** côte à côte avec le
schéma ; **vidéo par geste** — animée muette si elle se suffit, sinon narration française ;
pas d'audio NotebookLM. Exécution **sur le Mac** (le cloud ne peut rien télécharger).
**Règle permanente : à chaque quota de session atteint, reprendre le travail dès la levée
de la limite, sans attendre d'instruction.**

## 0. Préparation (une fois)

```bash
brew install ffmpeg            # H.264 + AAC pour les MP4 narrés
npm i -g playwright && npx playwright install chromium
```

Vérifier : `NODE_PATH=$(npm root -g) node scripts/check-all.js` → « 0 avec problème ».

## 1. Rappels anatomiques — planches de Gray annotées

Source : *Anatomy of the Human Body* (Gray, 20ᵉ éd., 1918), domaine public, fichiers
`Gray###.png` sur Wikimedia Commons (`https://commons.wikimedia.org/wiki/File:Gray810.png`,
fichier original via l'API `?action=query&titles=File:Gray810.png&prop=imageinfo&iiprop=url`).
Télécharger dans `img/<id>/gray-####.png` (garder le numéro), puis décrire la figure dans
`js/data/figures/<id>.js` (format : `js/data/figures/README.md`) avec un `crop` serré sur
la région utile et 4–8 étiquettes **en français** (nerf cible, artère satellite, os
repère, muscle traversé). Les planches sont légendées en anglais/latin : vérifier chaque
structure sur la planche avant d'étiqueter.

Candidats (numéros de mémoire, **à vérifier sur Commons** avant usage) :

| Région | Planches candidates |
|---|---|
| Plexus brachial, suprascapulaire, axillaire | 808, 809, 810 |
| Nerfs médian / ulnaire / radial, avant-bras, main | 811, 812, 816, 817, 818 |
| Épaule (gléno-humérale, AC, coiffe) | 202, 203, 326, 327, 411, 412 |
| Coude, poignet, main (articulations, tendons) | 329, 332, 334, 335, 422, 423, 425 |
| Plexus cervical, cou, SCM, scalènes | 384, 385, 386, 804, 805 |
| Sympathique cervical, ganglion stellaire | 838, 840 |
| Trijumeau et branches terminales | 778, 779, 781, 782, 784 |
| Occipitaux (GON, petit occipital, grand auriculaire) | 384, 385, 803, 804 |
| Rachis, facettes, ligaments, muscles profonds du dos | 90, 93, 111, 301, 383, 389 |
| Nerfs intercostaux, paroi thoracique | 819, 820, 411 |
| Plexus lombaire, ilio-inguinal, génito-fémoral, LFCN | 822, 823, 824, 825 |
| Plexus sacré, sciatique, pudendal, clunéaux | 828, 829, 830, 832, 833 |
| Bassin, sacro-iliaque, ligaments sacro-épineux/tubéral | 319, 320, 321, 322 |
| Hanche (capsule, ligaments, muscles) | 339, 340, 341, 342, 434, 435 |
| Genou (capsule, ligaments, patte d'oie) | 345, 346, 347, 348, 433 |
| Jambe, fibulaire commun, tibial, sural, saphène | 832, 833, 834, 835, 437, 438 |
| Cheville, pied, tunnel tarsien, Morton | 354, 356, 357, 439, 441, 443 |

Quand Gray ne couvre pas la cible (géniculés, PENG, branches médiales lombaires,
Baxter), dessiner un schéma vectoriel du trajet nerveux (SVG dans `img/<id>/`), même
style que les scènes (fond clair, traits, étiquettes françaises).

## 2. Installation — patient et sonde

Bibliothèque de silhouettes régionales à créer dans `img/_silhouettes/` (SVG, trait
noir sur fond clair, 15 vues : épaule postérieure, épaule antérieure, cou latéral, face,
dos lombaire, bassin postérieur, région inguinale, thorax latéral, cuisse antérieure,
genou antérieur/médial, jambe latérale, cheville médiale/latérale, pied, main dorsale,
poignet palmaire, coude latéral/médial). Pour chaque fiche : une figure `type: 'installation'`
= silhouette + rectangle « sonde » orienté + trait « aiguille » + pictogramme de position,
composée en SVG dans `img/<id>/installation.svg`.

## 3. Écho-anatomie réelle

Sources réutilisables : articles en libre accès **CC BY** de PMC (Korean J Pain, Korean
J Anesthesiol, Cureus, J Clin Med, Medicina, Diagnostics, Frontiers…), Radiopaedia
(CC BY-NC-SA, usage privé), Wikimedia Commons (catégorie « Ultrasound images »). Pour
chaque fiche : 1 image réelle de la coupe de repérage, téléchargée dans
`img/<id>/echo-1.jpg`, décrite en `type: 'echo'` avec `pair: '<id de la scène>'`, crédit
complet (auteurs, revue, année, licence, URL). Étiqueter en français ; si l'image porte
déjà des annotations, ne pas les dupliquer.

## 4. Vidéos

- Pour chaque fiche, ajouter aux scènes un champ `narration` (≤ 35 mots, phrase parlée,
  français) quand la `legende` est trop longue ou trop écrite pour être dite.
- Générer : `NODE_PATH=$(npm root -g) node scripts/video.js <id> --narration --voice=Thomas`
  (voix françaises disponibles : `say -v ?` ; Thomas, Amélie, Audrey). Sans `--narration`
  : muet. Décision fiche par fiche : muet si le schéma et les sous-titres suffisent, narré
  sinon. `--all` traite toutes les fiches.
- Regarder chaque vidéo produite (ou au moins 1 sur 5 par région) : durée 40–90 s,
  sous-titre lisible, pas de scène tronquée avant la fin de l'animation.
- Vidéo réelle : pour chaque fiche, 1 recherche « ultrasound guided <geste> youtube » ;
  ajouter l'URL vue dans `videos` (elle est intégrée automatiquement en fin de fiche).

## 5. Organisation

- Au plus **3 agents** en parallèle, par région, chacun avec la liste de ses fiches ; les
  téléchargements et le crédit des images relèvent de chaque agent.
- Après chaque fiche : `node scripts/build-index.js`, `check-all`, capture d'une figure
  et d'une paire écho/schéma pour contrôle visuel, commit, push sur `main`.
- Relecture finale par région (rapports anatomiques des étiquettes, crédits présents).
- Ordre : membre-sup, membre-inf, rachis-bassin, tête-cou, thorax, socle.
