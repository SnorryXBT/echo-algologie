/* Figures — socle cryoneurolyse : deux images réelles de la boule de glace (fiche transversale : ni planche de Gray ni figure d'installation) */
ECHO.figures['socle-cryoneurolyse'] = [
  {
    type: 'echo',
    src: 'img/socle-cryoneurolyse/echo-1.jpg',
    pair: 'cryo-boule',
    titre: 'Boule de glace réelle à 1 min 30 de congélation : liseré hyperéchogène et cône d\'ombre',
    legende: 'Cryoneurolyse d\'un névrome du nerf sural, cryosonde dans le plan. C\'est exactement la sémiologie du tableau ci-dessus : la **cryosonde** est une ligne hyperéchogène épaisse, bien plus visible qu\'une aiguille de bloc ; à sa pointe naît un **liseré hyperéchogène convexe** — seul le bord de la boule tourné vers la sonde d\'échographie est visible — et, derrière lui, un **cône d\'ombre** franc qui efface tout, nerf compris. Les calipers jaunes sont ceux des auteurs : lésion de **0,80 cm** de diamètre à 1 min 30. La ligne hyperéchogène à droite de la boule, avec son ombre, est vraisemblablement la corticale de la fibula, que les auteurs mentionnent sur la coupe précédente sans la désigner ici (**Supposition**). Différence avec le schéma en regard : l\'image est une coupe **dans l\'axe de la cryosonde**, alors que la scène montre le nerf en coupe transversale ; aucun axe médio-latéral n\'est donc à confronter.',
    credit: 'Rhame EE, Debonet AF, Simopoulos TT, Case Reports in Anesthesiology 2011, fig. 4 — CC BY 3.0',
    source: 'https://doi.org/10.1155/2011/691478',
    labels: [
      { x: 0.27, y: 0.27, text: 'Cryosonde', dx: -0.02, dy: 0.30 },
      { x: 0.56, y: 0.285, text: 'Liseré hyperéchogène : bord visible de la boule', dx: 0.10, dy: -0.19 },
      { x: 0.55, y: 0.75, text: 'Cône d\'ombre postérieur', dx: 0.24, dy: 0.10 },
    ],
  },
  {
    type: 'echo',
    src: 'img/socle-cryoneurolyse/echo-2.jpg',
    pair: 'cryo-geste',
    titre: 'La même boule à 4 minutes : elle grossit, l\'ombre s\'élargit',
    legende: 'Même patient, même coupe, mention *4 min IN* incrustée par les auteurs : la lésion mesure maintenant **1,12 cm** (contre 0,80 cm à 1 min 30). Deux enseignements pour le geste du schéma en regard. **Un** : la boule croît pendant tout le cycle et son diamètre se mesure à l\'écran — c\'est lui qu\'on confronte au diamètre du nerf et à la marge cutanée de 10 mm que fixe la fiche. **Deux** : plus elle grossit, plus l\'ombre masque la profondeur ; tout ce qui doit être repéré derrière la cible (artère, plèvre, os) doit l\'avoir été **avant** le premier cycle. La cryosonde entre ici par la gauche de l\'écran, alors que le schéma la fait entrer par la droite : **sens de ponction en miroir**. L\'axe proximal–distal de l\'écran n\'est pas écrit par les auteurs (l\'article dit seulement que la sonde est introduite en amont de la zone greffée) : rien n\'est affirmé ici. Selon eux, la lésion n\'est presque plus visible 1 min 30 après le début du dégel : l\'image de contrôle se fait pendant la congélation, pas après.',
    credit: 'Rhame EE, Debonet AF, Simopoulos TT, Case Reports in Anesthesiology 2011, fig. 5 — CC BY 3.0',
    source: 'https://doi.org/10.1155/2011/691478',
    labels: [
      { x: 0.25, y: 0.245, text: 'Cryosonde', dx: -0.04, dy: 0.30 },
      { x: 0.53, y: 0.36, text: 'Boule de glace : 1,12 cm', dx: 0.26, dy: 0.22 },
      { x: 0.52, y: 0.205, text: 'Bord antérieur hyperéchogène', dx: 0.22, dy: -0.10 },
    ],
  },
];
