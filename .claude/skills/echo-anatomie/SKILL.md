---
name: echo-anatomie
description: Transformer une coupe échographique réelle d'une fiche en coupe anatomique recalée (tissus colorés, mêmes contours, étiquettes et flèches communes, fondu écho ↔ anatomie), avec calque de contours soumis à la validation de Mat avant d'être considérée comme fiable.
---

Argument : un `id` de fiche, une région (`membre-sup`, `membre-inf`, `tete-cou`, `rachis-bassin`, `thorax`, `socle`),
ou `--bilan` suivi du bilan de validation collé par Mat. Sans argument : fiches dont une figure `type:'echo'` n'a pas
encore d'entrée dans `js/data/anat/`, dans l'ordre du chantier.

Principe : chaque structure est tracée **une fois**, dans le repère de l'image affichée (largeur 1000, après `crop`).
Ce tracé unique produit le calque de validation, le rendu tissulaire (`js/lib/anat.js`) et le fondu sur l'écho : le
recalage est exact par construction. Le risque n'est pas le dessin, c'est **la lecture de la coupe** : ≈ un tiers des
structures est mal placé au premier jet, et une planche fausse mais belle est pire qu'aucune planche.

## Étapes (dans l'ordre, aucune n'est optionnelle)

1. **Choisir l'image.** Figure `type:'echo'` déjà créditée de la fiche. Préférer une image **sans annotations
   incrustées** (elles transparaissent dans le fondu) ; si la fiche n'en a pas, chercher un remplacement libre
   (`scripts/echo-search.js`, règles de `/illustrer` : auteurs recoupés par `authorString`, licence lue dans l'article),
   sinon accepter et le dire dans `lecture`. Jamais d'image sans licence vérifiée dans le dépôt. Si le `crop` mord sur un
   panneau voisin ou un liseré, le corriger **avant** le tracé (`anat-check` détecte un `vb` devenu incohérent).
2. **Établir l'orientation sur pièces, pas à l'œil.** Lire la légende d'origine de la figure (Europe PMC
   `fullTextXML`, balise `<fig>`), regarder l'image entière (panneaux voisins annotés par les auteurs), confronter à
   l'`orient()` de la scène appariée. Si l'image est en miroir du schéma, l'écrire dans la `legende` de la figure
   (« orientation inverse de celle du schéma » — formule reconnue par `audit-axes.js`).
3. **Repérer.** `NODE_PATH=$(npm root -g) node scripts/anat-grid.js <fiche> <n> <dossier-scratch>` → `grille.png`, quatre
   zooms, `vb`, et les pics de brillance par colonne. Lire les captures. Les interfaces (corticale, fascia, plèvre,
   paroi vasculaire) se placent sur les **pics mesurés**, pas à l'estime. Sous 400 px utiles, le script prévient :
   les structures fines (lame bursale, périnèvre) ne sont pas traçables avec certitude — le dire.
4. **Tracer** dans `js/data/anat/<fiche>.js` (format ci-dessous). Partager les polylignes entre structures voisines
   (le bord bas de l'une est le bord haut de l'autre) : pas de trou, pas de chevauchement. Ordre de peinture = ordre du
   tableau : du superficiel au profond, os en dernier.
5. **Annoncer la lecture** dans `lecture` : une ligne par point, préfixée `Certain —`, `Probable —`, `Supposition —` ou
   `Extrapolé —` (dessiné sans signal écho, par connaissance anatomique : `extrapole: true` sur la structure, ou `vu:
   [i0, i1]` sur une corticale → pointillé sur le calque). Tout doute qui changerait l'orientation ou l'identité d'une
   structure y figure **en premier**. Ne jamais trancher seul un doute de ce type : le soumettre.
6. **Contrôler par capture**, deux fois :
   `node scripts/build-index.js` puis
   `NODE_PATH=$(npm root -g) node scripts/shot.js '#/validation/<fiche>' out.png light '.anat-valid' <n>` ;
   lire la capture : chaque contour épouse-t-il l'interface visible ? chaque flèche tombe-t-elle sur sa structure, dans
   les **deux** panneaux ? pastilles hors des zones d'intérêt, sans chevauchement, flèches qui ne traversent pas une
   autre pastille. Corriger et recapturer jusqu'à ce que ce soit vrai.
7. **Laisser `valide: false`.** `node scripts/anat-check.js` (0 erreur), `check-all` (0 problème), `audit-axes.js`,
   commit, push. La fiche affiche le bandeau « Coupe anatomique non validée » tant que Mat n'a pas relu.
8. **Validation par Mat** : page `#/validation[/<région|fiche>]` — calque, lecture annoncée, rendu, case « contours
   exacts » et champ de correction, bouton « Copier le bilan ». À réception du bilan (`--bilan`) : appliquer chaque
   correction, recapturer, et passer en `valide: true` **uniquement** les coupes marquées OK par Mat. Jamais
   d'auto-validation.

## Format — `js/data/anat/<fiche>.js`

```js
ECHO.anat['<fiche>'] = [{
  fig: 'img/<fiche>/echo-1.jpg',        // = `src` de la figure type echo (le crop et le crédit viennent d'elle)
  valide: false,                         // true seulement après relecture de Mat
  vb: [1000, H],                         // donné par anat-grid.js
  orient: { left: 'Latéral', right: 'Médial' },
  lecture: ['Certain — …', 'Probable — …', 'Supposition — …', 'Extrapolé — …'],
  structures: [                          // superficiel → profond
    { id, tissu, haut: [[x,y]…], bas: [[x,y]…] },       // couche entre deux bords (tracés de gauche à droite)
    { id, tissu, bas: […], ep: 26 },                     // bande d'épaisseur constante posée sur `bas` (cartilage), extrémités effilées
    { id, tissu, ligne: […], ep: 4 },                    // structure linéaire (fascia, plèvre, périoste)
    { id, tissu, contour: [[x,y]…] },                    // forme fermée (nerf ou vaisseau en petit axe, kyste)
    { id, tissu: 'os', cortex: […], vu: [i0, i1] },      // corticale : l'os est rempli jusqu'au bas du cadre
  ],
  labels: [{ s: '<id structure>', x, y, dx, dy, text, vue }],   // x,y = point désigné ; dx,dy = décalage de la pastille ; vue: 'echo' | 'anat' (facultatif)
}];
```

Tissus : `peau graisse muscle tendon ligament fascia bourse cartilage os nerf artere veine plevre poumon glande disque
liquide conjonctif aiguille`. Options : `enthese: 0.38` (tendon, ligament : fraction du bord bas, depuis le début du tracé, sur
laquelle les fibres s'insèrent) ; `guide: […]` (muscle : bord bas lissé pour orienter les fibres quand le vrai bord fait
une épingle) ; `lame: [f0, f1]` (bourse : position de la lame liquidienne dans le complexe graisseux, en fraction de
l'épaisseur depuis le bas). Un tissu manquant s'ajoute dans `js/lib/anat.js` (`TISSUS` + `peindre`) et dans
`scripts/anat-check.js` — fonctionnalité transversale, à tester sur une fiche existante.

Étiquettes : les mêmes points dans les deux panneaux (c'est le but pédagogique). `vue: 'echo'` pour ce qui n'existe
qu'à l'écran (cône d'ombre, anisotropie, artéfacts de réverbération), `vue: 'anat'` pour ce que l'écho ne montre pas.
Signaler les pièges d'interprétation : ce sont eux qui forment l'étudiant.

## Règles

- Dessin **original** : ne jamais décalquer ni reproduire une planche d'un atlas ou d'une application commerciale
  (NYSORA, etc.), même fournie par Mat à titre d'exemple.
- Licences : dans le mémo privé toute image CC est utilisable (l'adaptation non partagée est permise, y compris ND).
  Hors du mémo : `node scripts/anat-export.js <fiche> <n> sortie.png` n'exporte que CC BY / BY-SA / CC0 / domaine
  public / image personnelle **et** `valide: true` ; sinon refus, ou `--prive` avec filigrane. Ne pas contourner.
- Images personnelles de Mat : bandeau d'identité rogné avant toute entrée dans le dépôt ; aucune donnée patient, jamais.
- Au plus 3 agents en parallèle, par région ; chacun rend ses captures de contrôle lues, pas seulement « 0 erreur ».
- Quota de session atteint : reprendre dès la levée, sans attendre d'instruction.
