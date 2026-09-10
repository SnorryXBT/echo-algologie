# Figures — un fichier par fiche : `js/data/figures/<id>.js`

```js
ECHO.figures['nerf-suprascapulaire'] = [
  {
    type: 'anatomie',            // 'anatomie' (rappel, planche annotée) · 'installation' (patient/sonde) · 'echo' (image réelle)
    src: 'img/nerf-suprascapulaire/gray-0810.png',   // fichier local (relatif à index.html)
    titre: 'Nerf suprascapulaire dans la fosse supra-épineuse',
    legende: 'Trajet sous le ligament transverse, puis contournement de l\'épine par l\'échancrure spinoglénoïdienne.',
    credit: 'Gray\'s Anatomy (1918), planche 810 — domaine public, Wikimedia Commons',
    source: 'https://commons.wikimedia.org/wiki/File:Gray810.png',
    crop: [0.10, 0.05, 0.80, 0.70],   // facultatif : [x, y, largeur, hauteur] en fractions de l'image
    labels: [                          // coordonnées en fractions de l'image AFFICHÉE (après crop)
      { x: 0.42, y: 0.31, text: 'N. suprascapulaire', dx: 0.18, dy: -0.10 },  // dx/dy : décalage du texte, ligne de rappel automatique
      { x: 0.55, y: 0.40, text: 'Lig. transverse', dx: 0.16, dy: 0.08 },
    ],
    pair: 'ssn-fosse',   // pour type 'echo' : id de la scène schématique à afficher en regard
  },
];
```

Règles : images libres seulement (Gray 1918 domaine public ; articles CC BY de PMC ; Radiopaedia CC BY-NC-SA
pour usage privé ; Servier Medical Art CC BY 4.0) ; `credit` et `source` obligatoires ; étiquettes en
français ; 1 à 3 figures « anatomie », 1 « installation », 0 à 2 « echo » par fiche.

## Outils (chantier illustrations)

- `node scripts/gray.js --info 810 203` — taille et description Commons d'une planche ; `node scripts/gray.js <id> 810 203`
  télécharge dans `img/<id>/gray-0810.png`. Les planches Commons font ≈ 500 px de large : crop modéré (≥ 50 % de l'image)
  sinon flou.
- `node scripts/echo-search.js "suprascapular nerve block ultrasound" 10` — articles Europe PMC en libre accès sous licence
  CC (préférer CC BY ; BY-NC / BY-NC-ND acceptables pour ce mémo privé, à mentionner tel quel dans `credit`), avec leurs
  figures échographiques et légendes. `node scripts/echo-search.js --get PMC13380194 gr2 <id> 1` → `img/<id>/echo-1.jpg`,
  et imprime les lignes `credit` / `source` à recopier. Toujours lire l'image (Read) avant d'étiqueter : ne pas dupliquer
  les annotations déjà présentes, décrire dans `legende` les abréviations en langue étrangère.
- Figure d'installation : entrée `type: 'installation'` avec `src: 'img/<id>/installation.svg'` et un champ `spec`
  (voir en-tête de `scripts/installation.js`), puis `node scripts/installation.js <id>`. Silhouettes disponibles dans
  `img/_silhouettes/` (viewBox 400×300, trait `#1f2937` 2 px, fond transparent) ; en créer une si la région manque,
  même style, nom en kebab-case (`epaule-anterieure`, `coude-lateral`, `poignet-palmaire`…).
- Contrôle : `node scripts/build-index.js` puis `NODE_PATH=$(npm root -g) node scripts/shot.js '#/fiche/<id>' out.png light '.fig' <n>`
  pour la n-ième figure de la fiche (ordre : anatomie, installation, echo) ; lire chaque capture et corriger les
  étiquettes (x, y = point désigné ; dx, dy = décalage du texte) jusqu'à ce que chaque point soit sur la bonne structure.
