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
