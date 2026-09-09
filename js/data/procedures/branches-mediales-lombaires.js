/* Fiche : branches médiales lombaires — bloc diagnostique, infiltration facettaire, RF échoguidée. */
ECHO.register({
  id: 'branches-mediales-lombaires',
  titre: 'Branches médiales lombaires — bloc, infiltration facettaire et radiofréquence',
  titreCourt: 'Branches médiales lombaires',
  en: 'Ultrasound-guided lumbar medial branch block (L1–L5 dorsal rami), L5 dorsal ramus block, lumbar facet (zygapophysial) joint intra-articular injection and ultrasound-assisted medial branch radiofrequency neurotomy',
  region: 'rachis-bassin',
  types: ['bloc', 'interventionnel'],
  niveau: 3,
  grade: 'Faisabilité bonne chez le sujet non obèse (95 % de placements corrects sous contrôle fluoroscopique) mais ~11 % d\'erreurs de position en méta-analyse ; efficacité extrapolée de la fluoroscopie',
  maj: '2026-09',
  motsCles: ['facette', 'zygapophysaire', 'lombalgie', 'ramus medialis', 'bloc test', 'thermolésion', 'RF', 'rhizolyse', 'L5 dorsal ramus', 'MBB', 'syndrome facettaire'],
  resume: 'Le bloc des branches médiales des rameaux dorsaux lombaires est d\'abord un **geste diagnostique** : il conditionne l\'accès à la thermolésion par radiofréquence, seule technique dont l\'efficacité prolongée soit défendable dans la lombalgie facettaire. La cible est purement osseuse — la gouttière formée par la jonction du bord supérieur du processus transverse et de la face latérale du processus articulaire supérieur —, ce qui rend l\'échoguidage possible : Greher a validé la sono-anatomie en 2004, Shim l\'a confirmée cliniquement en 2006 avec 95 % de placements corrects. Deux limites structurelles restent : l\'obésité (62 % de succès seulement chez l\'IMC > 30) et l\'impossibilité de détecter une diffusion intravasculaire sans produit de contraste. Pour L5, ce n\'est pas la branche médiale mais le **rameau dorsal** lui-même que l\'on bloque, dans la gouttière entre l\'aile du sacrum et le processus articulaire supérieur de S1. L\'infiltration intra-articulaire facettaire échoguidée est un geste différent, plus facile mais moins bien étayé.',

  flash: {
    position: 'procubitus', positionNote: 'coussin ferme sous l\'abdomen pour effacer la lordose et ouvrir les espaces inter-transversaires ; bras au-dessus de la tête',
    sonde: 'convexe', sondeNote: '2–5 MHz, profondeur 7–10 cm, focale sur la cible ; linéaire 6–13 MHz réservée au sujet mince (IMC < 25), où la cible est à 4–6 cm',
    approche: 'in-plane', approcheNote: 'coupe transversale, ponction latéro-médiale ; approche hors du plan en coupe para-sagittale possible mais aveugle sur la profondeur',
    aiguille: '22 G 80–100 mm (aiguille spinale ou aiguille écho-visible) ; canule RF 18–20 G, 100–145 mm, extrémité active 10 mm pour la thermolésion',
    cible: 'Contact osseux dans la gouttière, à la jonction du bord supéro-médial du processus transverse et de la face latérale du processus articulaire supérieur — puis retrait de 1 mm. Pour L5 : gouttière aile du sacrum / PAS de S1',
    injectat: '0,3–0,5 mL par branche : lidocaïne 2 % ou bupivacaïne 0,5 % — **sans corticoïde** pour un bloc diagnostique',
    duree: '15–25 min pour 3 niveaux unilatéraux · 30–45 min pour une RF',
  },

  indications: [
    'Lombalgie chronique d\'allure facettaire (> 3 mois, échec du traitement conservateur) : douleur axiale et para-axiale, aggravée par l\'extension et la rotation, sans radiculalgie ni signe neurologique déficitaire ; l\'imagerie n\'est pas un critère de sélection (l\'arthrose facettaire radiologique est trop fréquente pour discriminer).',
    '**Bloc diagnostique** avant thermolésion par radiofréquence : c\'est l\'indication principale et le seul usage solidement justifié. Le taux de faux positifs d\'un bloc unique est de 27 à 63 % selon les séries.',
    'Alternative à la fluoroscopie quand l\'irradiation doit être évitée : sujet jeune, femme en âge de procréer, gestes répétés, plateau technique sans arceau (l\'échographie est aussi le seul recours en HDJ non équipée).',
    'Repérage préalable écho-assisté avant un geste sous arceau : marquage cutané des niveaux et mesure de la profondeur, pour raccourcir la scopie.',
    'Infiltration intra-articulaire facettaire : indication distincte (arthrose facettaire symptomatique, kyste synovial, contexte inflammatoire) — geste thérapeutique, pas diagnostique.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée au point de ponction ou sepsis, allergie vraie aux amino-amides.',
    '**Relatives — obésité** : au-delà d\'un IMC de 30, l\'échoguidage seul ne permet pas de garantir la position (62 % de placements corrects chez Rauch 2009). Chez ces patients, faire le geste sous arceau ou en écho-assistance + contrôle radioscopique.',
    '**Relatives — L5** et rachis instrumenté : le rameau dorsal de L5 est masqué par la crête iliaque chez beaucoup de patients ; le matériel d\'arthrodèse rend la fenêtre inexploitable.',
    '**Hémostase** : ASRA-ESRA 2018 classe les procédures facettaires (bloc de branche médiale, radiofréquence) parmi les procédures à **risque intermédiaire** — pas d\'arrêt systématique des antiagrégants, gestion au cas par cas des anticoagulants oraux, décision partagée avec le prescripteur. *Confiance : probable — dans les sources consultées, seule la catégorisation « intermédiaire » des procédures facettaires cervicales est explicitement retrouvée ; vérifier la table du texte princeps avant d\'appliquer.*',
    'Grossesse : contre-indication relative au geste, mais indication de choix de l\'échoguidage si le geste est jugé indispensable (pas de rayons).',
  ],
  alternatives: 'La **fluoroscopie reste la référence** pour le bloc de branche médiale et la seule modalité validée pour la thermolésion : elle permet le contrôle du contraste (donc la détection d\'une diffusion intravasculaire, que l\'échographie ne voit pas) et le placement parallèle de la canule RF. L\'échographie se justifie quand on veut éviter les rayons, quand l\'arceau n\'est pas disponible, ou en écho-assistance pour raccourcir la scopie. Autres options selon le phénotype douloureux : infiltration intra-articulaire facettaire, bloc du plan des érecteurs du rachis (fiche dédiée) pour une lombalgie chronique diffuse, infiltration épidurale si composante radiculaire, prise en charge non interventionnelle (réentraînement, TCC). Chez le sujet obèse, le geste échoguidé n\'est pas une alternative à l\'arceau : c\'est un moins bon geste.',

  anatomie: `Chaque nerf spinal lombaire donne un **rameau dorsal** court qui se divise en une branche latérale (musculo-cutanée), une branche intermédiaire et une **branche médiale**. La branche médiale de L1 à L4 contourne la base du processus articulaire supérieur (PAS) de la vertèbre **sous-jacente** : elle chemine dans la **gouttière** formée par la jonction du bord supéro-médial du processus transverse et de la face latérale du PAS, puis passe sous le **ligament mamillo-accessoire**, qui la maintient dans un véritable tunnel ostéo-fibreux entre le processus mamillaire (sur le PAS) et le processus accessoire (à la racine du processus transverse). C\'est cette contrainte anatomique qui rend la cible reproductible : le nerf est toujours au contact de l\'os, au même endroit.

Chaque articulation zygapophysaire reçoit une **double innervation** : la branche médiale du niveau correspondant et celle du niveau sus-jacent. Un bloc articulaire complet exige donc **deux branches par articulation** — pour une facette L4-L5, les branches médiales de L3 et de L4.

**L5 est une exception** : ce n\'est pas la branche médiale mais le **rameau dorsal de L5** lui-même que l\'on bloque, dans la gouttière entre l\'**aile du sacrum** et le processus articulaire supérieur de **S1**. Pour dénerver l\'articulation L5-S1, il faut donc la branche médiale de L4 et le rameau dorsal de L5.

### Ce qui compte pour le geste
- **La cible est osseuse, pas nerveuse.** On ne voit jamais la branche médiale en échographie : on vise un point de contact osseux. Toute la précision du geste tient au repérage du niveau et à l\'identification de la gouttière.
- **Profondeur** : 4–6 cm chez le sujet mince, 7–10 cm au-delà d\'un IMC de 30 — au-delà, la résolution du convexe ne permet plus de distinguer la gouttière du bord du processus transverse.
- **Le processus articulaire est plus superficiel que le processus transverse** en coupe axiale : c\'est ce décalage de profondeur qui dessine la gouttière-cible entre les deux.
- **Le comptage des niveaux est le point faible du geste.** Il se fait en coupe para-sagittale, depuis le sacrum — ligne osseuse continue et régulière — en remontant : le premier processus transverse au-dessus est celui de L5. Une anomalie transitionnelle (sacralisation de L5, lombalisation de S1) fausse tout le comptage et impose une confrontation à l\'imagerie du patient.
- **Le volume est un paramètre diagnostique**, pas un paramètre de confort : au-delà de 0,25–0,5 mL, l\'injectat diffuse aux branches distales des rameaux voisins et fait chuter la spécificité du bloc.`,

  installation: {
    patient: `**Procubitus**, coussin ferme sous l\'abdomen (crêtes iliaques) : la délordose ouvre les espaces inter-transversaires et rapproche les cibles de la surface. Bras au-dessus de la tête ou le long du corps, tête tournée, oreiller fin. Chez le lombalgique qui ne tient pas à plat ventre, le **décubitus latéral** côté à traiter vers le haut est possible mais dégrade le repérage (rotation du rachis) : mieux vaut fractionner la séance.

Marquer au feutre la ligne des épineuses et la ligne bi-crêtes **avant** de désinfecter, puis marquer chaque niveau repéré en para-sagittal : ces marques survivent au déplacement de la sonde et à la désinfection.`,
    operateur: `Opérateur du côté à traiter, écran de l\'autre côté du patient dans l\'axe du regard. Sonde tenue en appui ferme (la compression réduit de 1–2 cm l\'épaisseur du plan graisseux et musculaire — c\'est la seule façon d\'atteindre la cible avec une aiguille de 90 mm chez le patient épais). La ponction se fait **de latéral en médial** en coupe transversale : le trajet aborde la gouttière tangentiellement, reste au-dessus du plan osseux et s\'éloigne du canal et du foramen. La coupe para-sagittale ne sert qu\'au comptage, pas à la ponction.`,
    sonde: `- **Convexe 2–5 MHz** par défaut, preset MSK ou « nerf », profondeur 7–10 cm, une seule focale posée sur la cible, gain remonté (les lignes osseuses profondes doivent rester blanc franc, le muscle gris moyen).
- **Linéaire 6–13 MHz** uniquement chez le sujet mince : meilleure définition de la gouttière, mais le champ latéral est souvent trop étroit pour visualiser à la fois le processus articulaire et le processus transverse.
- Doppler couleur à basse PRF avant la ponction : il ne remplace pas le contraste (Shim rapporte 2 diffusions intravasculaires sur 101 blocs, invisibles en échographie) mais évite l\'artère lombaire segmentaire quand elle est visible.
- Aiguille écho-visible fortement recommandée : l\'angle d\'insonation est défavorable (45–60°) et une aiguille lisse disparaît dès qu\'elle plonge.`,
  },

  reperage: [
    { titre: 'Repérer le sacrum en para-sagittal', texte: 'Sonde **longitudinale, para-médiane, à 2–3 cm de la ligne des épineuses**, posée sur le sacrum : ligne osseuse **continue, plate et régulière**, sans interruption. C\'est le point de départ obligatoire du comptage.' },
    { titre: 'Compter les processus transverses', texte: 'Translater la sonde en crânial en gardant le parallélisme : après le sacrum apparaissent des bosses hyperéchogènes régulièrement espacées, séparées de fenêtres sombres — aspect en **« trident »** ou en peigne. Le premier processus transverse au-dessus du sacrum est celui de **L5**. Compter jusqu\'au niveau visé et marquer chaque niveau au feutre en regard du milieu de la sonde.' },
    { titre: 'Vérifier par la vue des processus articulaires', texte: 'Rapprocher la sonde de la ligne médiane (1,5–2 cm) : les processus articulaires forment une ligne ondulée **continue**, sans fenêtre — c\'est la « bosse de chameau ». Elle sert de contrôle croisé du comptage : une fenêtre inter-transversaire large avec une ligne articulaire continue en dedans confirme qu\'on est bien sur le rachis lombaire et non sur le sacrum.' },
    { titre: 'Basculer en coupe transversale', texte: 'Rotation de 90° au niveau marqué, sonde centrée sur la ligne médiane. Apparaissent de médial en latéral trois reliefs osseux : le **processus épineux** (le plus superficiel, médian), la **lame**, puis le **processus articulaire** et enfin le **processus transverse**, plus profond. Basculer/translater de quelques millimètres en crânio-caudal jusqu\'à obtenir simultanément le processus articulaire et le processus transverse du même côté.' },
    { titre: 'Identifier la gouttière', texte: 'La cible est le **creux entre la face latérale du processus articulaire supérieur et le bord supérieur du processus transverse** : un angle rentrant net dans la ligne osseuse. Mesurer la profondeur peau-cible avec le caliper avant de ponctionner — c\'est la donnée qui dit si l\'aiguille de 90 mm suffira.' },
    { titre: 'Si la gouttière n\'apparaît pas', texte: 'Trois causes : sonde trop crâniale ou trop caudale (on est sur la partie moyenne du processus transverse, ligne convexe sans angle) — corriger de 3–5 mm ; compression insuffisante ; morphotype. Chez l\'IMC > 30, **ne pas insister** : convertir en geste sous arceau ou en écho-assistance (marquage + profondeur, ponction contrôlée en scopie). Pour **L5**, glisser en caudal jusqu\'à voir l\'aile du sacrum et le PAS de S1, et viser la gouttière entre les deux ; si la crête iliaque interdit l\'accès, le geste n\'est pas faisable en échographie.' },
  ],

  sonoanatomie: [
    { structure: 'Processus épineux (coupe transversale)', aspect: 'Relief hyperéchogène médian, le plus superficiel, cône d\'ombre franc', repere: 'Repère de la ligne médiane ; profondeur 2,5–4 cm' },
    { structure: 'Lame', aspect: 'Ligne hyperéchogène oblique, plus profonde, prolongeant l\'épineuse vers le dehors', repere: 'Sépare l\'épineuse du processus articulaire' },
    { structure: 'Processus articulaire supérieur', aspect: 'Bosse hyperéchogène arrondie, plus superficielle que le processus transverse', repere: 'Sa face latérale forme le versant médial de la gouttière-cible' },
    { structure: 'Processus transverse', aspect: 'Ligne hyperéchogène plus profonde et plus latérale, ombre postérieure large', repere: 'Son bord supéro-médial forme le versant latéral de la gouttière' },
    { structure: 'Gouttière (cible)', aspect: 'Angle rentrant entre les deux reliefs précédents ; le nerf n\'est jamais visible', repere: 'Point de contact osseux du geste ; profondeur 4–6 cm (mince), 7–10 cm (obèse)' },
    { structure: 'Processus transverses en para-sagittal', aspect: 'Bosses hyperéchogènes régulières séparées de fenêtres sombres (« trident ») ; psoas visible entre elles', repere: 'Vue du comptage des niveaux' },
    { structure: 'Sacrum en para-sagittal', aspect: 'Ligne hyperéchogène continue, plate, sans interruption', repere: 'Point zéro du comptage : le 1er PT au-dessus = L5' },
    { structure: 'Aile du sacrum / PAS de S1', aspect: 'Gouttière entre une ligne plate latérale (aile) et un relief médial (PAS de S1)', repere: 'Cible du rameau dorsal de L5' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Niveaux marqués et confirmés avec le patient (time-out : côté + niveaux). Désinfection large de toute la région lombo-sacrée, housse de sonde stérile et gel stérile. Seringues de 2 mL étiquetées (une par branche est superflue : une seringue de 2 mL couvre 4 branches). Prévoir le **bloc de deux branches par articulation douloureuse**.' },
    { titre: 'Anesthésie cutanée', texte: '0,5–1 mL de lidocaïne 1 % au point d\'entrée, 2–4 cm en dehors du bord latéral de la sonde selon la profondeur. Systématique avant une canule RF ; utile aussi pour le bloc, le trajet musculaire profond étant douloureux.' },
    { titre: 'Ponction in-plane, de latéral en médial', texte: 'Aiguille 22 G 90 mm engagée à 45–60° dans le grand axe de la sonde, visualisée en continu. Traverser les érecteurs du rachis en gardant le trajet **au-dessus du plan osseux**, et progresser vers l\'angle de la gouttière. Si l\'aiguille disparaît, ne pas avancer : réaligner par de petits mouvements de bascule de la sonde, ou hydrolocaliser (0,2 mL de sérum).' },
    { titre: 'Contact osseux et repositionnement', texte: 'Rechercher le **contact osseux dans la gouttière** — c\'est le critère de position, pas l\'image de la pointe. Un contact sur la convexité du processus transverse (trop latéral) ou sur la face postérieure du processus articulaire (trop médial) doit être corrigé de 2–3 mm. Une fois le contact obtenu, **retirer de 1 mm** pour sortir du périoste.' },
    { titre: 'Test et injection', texte: 'Aspiration dans deux plans. Injecter **0,3–0,5 mL par branche**, lentement : on doit voir une petite nappe anéchogène rester au contact de l\'os. Une nappe qui fuse largement dans le muscle = pointe trop superficielle, bloc non spécifique. Une douleur fulgurante ou une résistance franche = arrêt et repositionnement. Répéter niveau par niveau.' },
    { titre: 'Critère de fin et après le geste', texte: 'Critère de fin : contact osseux obtenu à chaque niveau + nappe périostée de 0,5–1 cm, sans diffusion étendue. Surveillance 20–30 min. **Le patient repart avec un carnet de douleur horaire sur 8 h** : c\'est cette évaluation, et non l\'EN à 30 min, qui détermine le passage à la RF. Prévenir d\'une faiblesse paravertébrale transitoire et de l\'absence de bloc moteur des membres inférieurs (si un déficit apparaît, il signe une diffusion épidurale ou foraminale).' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique (1er bloc) | Lidocaïne 2 % **seule** | **0,3–0,5 mL par branche** | Durée courte : le patient doit distinguer le soulagement du bloc de son évolution spontanée. Pas de corticoïde : il fausse l\'interprétation |
| Bloc diagnostique de confirmation (2e bloc) | Bupivacaïne 0,5 % ou ropivacaïne 0,5 % | 0,3–0,5 mL par branche | Bloc **comparatif** : la durée du soulagement doit être plus longue qu\'avec la lidocaïne. C\'est le schéma qui minimise les faux positifs |
| Infiltration intra-articulaire facettaire | AL 0,5–1 mL + corticoïde : bétaméthasone 3,5–5,7 mg, méthylprednisolone 20–40 mg, ou dexaméthasone 4 mg | **1–1,5 mL au maximum par articulation** (capacité articulaire 1–2 mL) | Geste thérapeutique. Au-delà, rupture capsulaire et diffusion épidurale. Corticoïde particulaire acceptable en intra-articulaire ; ne jamais injecter de particulaire en péri-radiculaire ou en foraminal |
| Après thermolésion RF | Ropivacaïne 0,2 % ± corticoïde 1 mL au total par site | 0,5–1 mL par lésion | Pour la douleur post-lésionnelle des premiers jours |

**Ce que le volume change.** Au-delà de **0,25–0,5 mL**, l\'injectat diffuse aux branches distales des rameaux dorsaux adjacents (dispersion dorsale moyenne de 2,9 cm à 0,5 mL dans les travaux cadavériques) : le bloc perd sa spécificité et le taux de faux positifs monte. La Spine Intervention Society retient 0,25 à 0,5 mL de lidocaïne 2 % ou de bupivacaïne 0,5 % par branche. **Aucune justification à injecter 1 mL « pour être sûr » : c\'est l\'inverse qui se produit.**

**Doses maximales d\'AL** (utiles seulement si on multiplie les niveaux et les côtés) : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), bupivacaïne 2–2,5 mg/kg, ropivacaïne 3 mg/kg. Six branches à 0,5 mL de lidocaïne 2 % = 60 mg : très loin du plafond.

**Corticoïde dans le bloc de branche médiale : non.** Il n\'améliore pas la valeur prédictive du bloc, expose aux effets systémiques et brouille la lecture. Le corticoïde a sa place en intra-articulaire, pas sur la branche.`,

  variantes: [
    { titre: 'Infiltration intra-articulaire facettaire échoguidée', texte: `Même installation, coupe **transversale** centrée sur l\'interligne : le récessus articulaire postérieur apparaît comme une fine interruption hypoéchogène entre les deux reliefs articulaires (facettes supérieure et inférieure). Aiguille 22 G in-plane, de latéral en médial, angle plus raide (60–70°), cible : la fente articulaire ou son récessus caudal. Volume **1–1,5 mL au maximum**, AL + corticoïde.

Galiano a validé la faisabilité sur cadavre en 2005 (50 examens, corrélation des distances écho/TDM r = 0,86), puis en 2007 dans un essai randomisé écho vs TDM chez 40 patients : la voie échographique était jugée réalisable chez 18 des 20 patients du groupe écho, avec un placement correct chaque fois que la cible était identifiable et une **durée de procédure significativement réduite** par rapport au contrôle TDM. La méta-analyse d\'Ashmore (2022) retient néanmoins **13 % de différence de risque de mauvais positionnement** pour l\'intra-articulaire échoguidée contrôlée par TDM.

En pratique : geste plus facile que le bloc de branche (cible plus grosse, plus superficielle), mais intérêt thérapeutique moins bien étayé, et **inutile comme test de sélection avant RF** — dans les études comparatives, le bloc de branche médiale reste le test de référence.` },
    { titre: 'Bloc du rameau dorsal de L5', texte: `Niveau à part. La cible est la **gouttière entre l\'aile du sacrum et le processus articulaire supérieur de S1**, atteinte en glissant la sonde en caudal depuis le processus transverse de L5. Greher a décrit et évalué en 2015 une approche échoguidée du rameau dorsal de L5 sur cadavres non présélectionnés avec contrôle fluoroscopique — c\'est-à-dire en incluant délibérément les morphotypes défavorables, ce qui en fait l\'étude la plus honnête sur ce niveau.

**Limite majeure** : chez beaucoup de patients, la **crête iliaque** masque la fenêtre et l\'angle de ponction devient impraticable. C\'est le niveau où l\'échographie échoue le plus souvent, alors qu\'il est presque toujours nécessaire (l\'articulation L5-S1 est la plus fréquemment symptomatique). Si L5 n\'est pas accessible, faire l\'ensemble du geste sous arceau plutôt que de dénerver incomplètement.` },
    { titre: 'Radiofréquence thermique écho-assistée', texte: `**Faisabilité réelle, validation faible.** La difficulté n\'est pas le placement de la pointe mais l\'**orientation de la canule** : pour lésionner efficacement, l\'extrémité active de 10 mm doit être posée **parallèlement au trajet du nerf** le long du col du processus articulaire, ce qui impose une angulation caudo-crâniale marquée — difficile à obtenir et à contrôler avec une seule coupe échographique. L\'échographie voit un contact osseux ; elle ne voit pas si la canule est parallèle ou perpendiculaire au nerf.

Protocole usuel une fois la canule en place : stimulation sensitive 50 Hz (paresthésie paravertébrale concordante < 0,5 V), stimulation motrice 2 Hz (**absence de contraction des membres inférieurs** à 2 V — la contraction des multifides est attendue et rassurante), injection de 0,5 mL de lidocaïne, puis lésion à **80 °C pendant 90 s**, une lésion par branche, deux branches par articulation.

**Position raisonnable** : utiliser l\'échographie pour le repérage des niveaux, la mesure de la profondeur et le marquage cutané, puis contrôler l\'orientation de la canule en incidence oblique sous arceau. C\'est le meilleur compromis entre irradiation et efficacité de la lésion — et cela reste l\'usage le mieux défendable de l\'échographie sur ce geste.` },
    { titre: 'Écho-assistance : le mode d\'emploi réaliste', texte: 'Repérage échographique complet (comptage, marquage des niveaux au feutre, mesure de la profondeur peau-cible), puis ponction sous arceau. Gain : moins de clichés, moins de tâtonnement, temps de scopie réduit, et un opérateur qui garde la main sur l\'échographie sans sacrifier le contrôle du contraste. C\'est la stratégie à privilégier chez l\'obèse et pour toute RF.' },
  ],

  pearls: [
    'Le comptage se vérifie deux fois, par deux vues différentes (processus transverses en para-sagittal, puis ligne articulaire continue plus médiale). Un comptage faux annule tout le geste — et fera conclure à tort à un test négatif.',
    'Marquer les niveaux au feutre avant la désinfection : la sonde bouge, les repères osseux non.',
    'Comprimer fermement avec la sonde : on gagne 1 à 2 cm de profondeur, ce qui fait la différence entre une aiguille de 90 mm qui atteint la cible et une qui n\'y arrive pas.',
    'Le critère de position est le **contact osseux dans l\'angle**, pas l\'image de la pointe : chercher la sensation, la confirmer par l\'image.',
    'Deux branches par articulation, toujours : L3 + L4 pour la facette L4-L5, L4 + rameau dorsal de L5 pour L5-S1.',
    'Petit volume = bon bloc. 0,3–0,5 mL par branche, pas plus.',
    'Confronter systématiquement le comptage au scanner ou à l\'IRM du patient : une anomalie transitionnelle lombo-sacrée est fréquente et fausse tout.',
  ],
  pieges: [
    'Faire le geste chez un patient obèse « quand même » : 62 % de placements corrects seulement, donc un test dont on ne peut rien conclure, ni positif ni négatif.',
    'Croire que le Doppler protège d\'une injection intravasculaire : Shim rapporte 2 diffusions intravasculaires sur 101 blocs, invisibles en échographie. C\'est la limite structurelle de la technique — elle impose de fractionner et d\'aspirer, pas de se rassurer.',
    'Ajouter un corticoïde à un bloc diagnostique : on perd l\'information et on gagne des effets indésirables.',
    'Injecter 1 mL par branche : le bloc devient non spécifique et le faux positif quasi certain.',
    'Confondre le bord postérieur du processus articulaire (facile, superficiel) avec la gouttière : l\'injectat se répand alors sur la capsule, sans bloquer la branche.',
    'Oublier L5 et conclure à un échec du bloc alors que c\'est l\'articulation L5-S1 qui est en cause.',
    'Interpréter le bloc sur l\'EN à 30 min seule : c\'est le carnet horaire sur la durée attendue de l\'AL qui fait le diagnostic.',
  ],
  complications: [
    'Ponction vasculaire et diffusion intravasculaire (≈ 2 % dans la série de Shim) : non détectable en échographie. Aspiration dans deux plans, injection fractionnée, petit volume — et surveillance des signes neurologiques centraux si l\'injection est répétée.',
    'Diffusion épidurale ou foraminale par excès de volume ou pointe trop médiale : bloc moteur ou sensitif du membre inférieur, transitoire. Ne pas laisser sortir le patient tant qu\'il n\'a pas récupéré une marche normale.',
    'Douleur post-ponction des érecteurs du rachis pendant 24–72 h : fréquente, banale, à annoncer.',
    'Hématome paravertébral : rare, sans conséquence en dehors des troubles majeurs de l\'hémostase.',
    'Infection : exceptionnelle ; asepsie chirurgicale exigée, a fortiori en intra-articulaire.',
    'Neurolyse partielle ou névrite post-RF (douleur de désafférentation cutanée pendant quelques semaines) : à annoncer avant toute thermolésion.',
  ],
  securite: [
    'Classe de risque hémorragique **intermédiaire** (ASRA-ESRA 2018) : pas d\'arrêt systématique des antiagrégants ; anticoagulants oraux discutés au cas par cas avec le prescripteur, en tenant compte du risque thrombotique.',
    '**L\'échographie ne voit pas la diffusion intravasculaire.** C\'est le point de sécurité qui doit rester conscient à chaque injection : aspiration, fractionnement, volume minimal — et contrôle par contraste sous arceau dès que le contexte l\'exige (RF, patient anticoagulé, geste multi-niveaux).',
    'Ne jamais utiliser de corticoïde **particulaire** en dehors de l\'intra-articulaire strict, et jamais en cas de doute sur la position de la pointe (risque d\'embolisation par une artère radiculo-médullaire en cas de trajet foraminal accidentel).',
    'Le contact osseux permanent est la protection anatomique du geste : toute progression de l\'aiguille sans contrôle de l\'os expose au foramen, au canal et à la cavité péritonéale (si l\'aiguille passe en avant du processus transverse).',
    'Surveillance 20–30 min avec test de la marche avant la sortie.',
  ],

  suivi: `- **J0** : EN avant, puis **carnet horaire sur 8 h** remis au patient (EN à H0, H1, H2, H4, H6, H8) — c\'est le document qui décide de la suite. Manœuvres d\'extension-rotation refaites à 30 min pour objectiver la levée de la douleur mécanique.
- **Interprétation** : bloc considéré positif si le soulagement atteint le seuil retenu pendant la durée attendue de l\'AL. Deux seuils coexistent — les recommandations multidisciplinaires de Cohen (2020) admettent un **bloc unique avec ≥ 50 %** de soulagement comme critère de sélection ; la Spine Intervention Society et plusieurs payeurs exigent **deux blocs comparatifs avec ≥ 80 %**. Plus le critère est strict, plus le taux de succès de la RF est élevé : arbitrer entre rendement thérapeutique et charge de gestes.
- **J15–J30** : EN, Oswestry, consommation d\'antalgiques ; décision : deuxième bloc de confirmation, passage à la RF, ou réorientation si le bloc est négatif (ne pas répéter indéfiniment un bloc diagnostique négatif).
- **Après RF** : évaluation à 6 semaines puis à 3 et 6 mois. Durée d\'effet attendue 6–12 mois, répétable. Réintroduire systématiquement le réentraînement à l\'effort dans la fenêtre d\'antalgie — c\'est ce qui fait la différence sur le résultat à un an.
- Tracer dans le dossier : niveaux traités, volume par branche, guidance utilisée, seuil de positivité retenu. C\'est cette traçabilité qui rend le parcours défendable devant un contrôle.`,

  evidence: `- **Faisabilité (Greher 2004, Anesthesiology)** : étude sono-anatomique en trois volets — définition d\'une vue transversale (« cross-axis ») et d\'une vue longitudinale, mesure des distances chez le volontaire (15 MHz), puis guidage de trois aiguilles vers la cible à L3-L5 sur cadavre frais (2–6 MHz) avec contrôle TDM. **45 aiguilles sur 50 exactement au point cible**, les autres à moins de 5 mm, taux de succès simulé par contraste de **94 %**. C\'est l\'étude fondatrice, mais c\'est de la faisabilité, pas de l\'efficacité.
- **Confirmation clinique (Shim 2006, Reg Anesth Pain Med)** : 101 blocs échoguidés chez 20 patients, contrôlés par fluoroscopie. **Tous** les niveaux corrects, **96/101 pointes correctement positionnées (95 %)**, mais **2 diffusions intravasculaires** détectées uniquement par le contraste. Conclusion des auteurs : la technique est fiable, mais elle **ne peut pas s\'affranchir complètement du contrôle fluoroscopique** faute de pouvoir détecter le passage intravasculaire.
- **Obésité (Rauch 2009, Reg Anesth Pain Med)** : chez l\'IMC > 30, **52 placements corrects sur 84 (62 %)**. Les auteurs concluent que l\'échographie ne peut pas être la seule modalité de guidage chez ces patients. C\'est la limite la plus dure de la fiche.
- **Méta-analyse (Ashmore 2022, Pain Reports)** : sur 7 études, **différence de risque de 11 %** de mauvais positionnement pour le bloc de branche médiale échoguidé contrôlé par fluoroscopie ; sur 3 études, **13 %** pour l\'infiltration intra-articulaire contrôlée par TDM. Preuve **modérée** en faveur d\'une faisabilité correcte mais avec un risque d\'erreur non négligeable, attribué aux limites techniques de l\'échographie et au morphotype.
- **Intra-articulaire (Galiano 2005 puis 2007)** : faisabilité cadavérique (corrélation écho/TDM r = 0,86) puis essai randomisé écho vs TDM chez 40 patients, montrant un placement correct dès lors que la cible est identifiable et une **réduction significative de la durée de procédure**. Effectifs faibles, critère de jugement technique et non clinique.
- **Écho vs fluoroscopie sur le résultat clinique (essai multicentrique randomisé de non-infériorité, BMC Anesthesiology 2023)** : 50 patients, blocs à L3-L4, L4-L5 et L5-S1, évaluation par EVA, Oswestry et DASI à 1 semaine et 1 mois. Petit effectif — un signal de non-infériorité, pas une démonstration.
- **Le trou de la littérature** : il n\'existe **aucun essai randomisé** comparant la thermolésion échoguidée à la thermolésion sous arceau sur des critères cliniques. Toute la validation de la RF facettaire (sélection par blocs, paramètres de lésion, résultats à 6–12 mois) repose sur la fluoroscopie. Écrire l\'inverse serait une extrapolation.
- **Le second trou** : la valeur prédictive du bloc **échoguidé** avant RF n\'a pas été mesurée séparément. Compte tenu des 11 % d\'erreurs de position, un bloc échoguidé négatif chez un patient obèse ne permet pas d\'exclure une origine facettaire.`,

  references: [
    { auteurs: 'Greher M, Scharbert G, Kamolz LP, Beck H, Gustorff B, Kirchmair L, Kapral S', titre: 'Ultrasound-guided lumbar facet nerve block: a sonoanatomic study of a new methodologic approach', revue: 'Anesthesiology', annee: '2004', doi: '10.1097/00000542-200405000-00028', type: 'faisabilité', note: 'Étude fondatrice : vues transversale et longitudinale, distances sono-anatomiques, validation cadavérique par TDM.' },
    { auteurs: 'Greher M, Kirchmair L, Enna B, et al.', titre: 'Ultrasound-guided lumbar facet nerve block: accuracy of a new technique confirmed by computed tomography', revue: 'Anesthesiology', annee: '2004', pmid: '15505456', type: 'faisabilité', verif: false, note: '45 aiguilles sur 50 au point cible, les autres à moins de 5 mm ; succès simulé par contraste 94 %.' },
    { auteurs: 'Shim JK, Moon JC, Yoon KB, Kim WO, Yoon DM', titre: 'Ultrasound-guided lumbar medial-branch block: a clinical study with fluoroscopy control', revue: 'Reg Anesth Pain Med', annee: '2006', pmid: '16952818', type: 'étude clinique', note: '101 blocs chez 20 patients ; 95 % de pointes correctes ; 2 diffusions intravasculaires vues seulement au contraste.' },
    { auteurs: 'Rauch S, Kasuya Y, Turan A, Neamtu A, Vinayakan A, Sessler DI', titre: 'Ultrasound-guided lumbar medial branch block in obese patients: a fluoroscopically confirmed clinical feasibility study', revue: 'Reg Anesth Pain Med', annee: '2009;34:340-342', type: 'étude clinique', note: '62 % de placements corrects chez l\'IMC > 30 : l\'échographie ne peut pas être la seule modalité de guidage.' },
    { auteurs: 'Ashmore ZM, Bies MM, Meiling JB, Moman RN, Hassett LC, Hunt CL, et al.', titre: 'Ultrasound-guided lumbar medial branch blocks and intra-articular facet joint injections: a systematic review and meta-analysis', revue: 'Pain Reports', annee: '2022', doi: '10.1097/PR9.0000000000001008', type: 'méta-analyse', note: '11 % de différence de risque de mauvais positionnement (bloc de branche) ; 13 % (intra-articulaire).' },
    { auteurs: 'Galiano K, Obwegeser AA, Bodner G, et al.', titre: 'Ultrasound guidance for facet joint injections in the lumbar spine: a computed tomography-controlled feasibility study', revue: 'Anesth Analg', annee: '2005', doi: '10.1213/01.ane.0000158609.64417.93', type: 'faisabilité' },
    { auteurs: 'Galiano K, Obwegeser AA, Walch C, et al.', titre: 'Ultrasound-guided versus computed tomography-controlled facet joint injections in the lumbar spine: a prospective randomized clinical trial', revue: 'Reg Anesth Pain Med', annee: '2007', pmid: '17720116', type: 'ECR' },
    { auteurs: 'Greher M, Moriggl B, Peng PWH, et al.', titre: 'Ultrasound-guided approach for L5 dorsal ramus block and fluoroscopic evaluation in unpreselected cadavers', revue: 'Reg Anesth Pain Med', annee: '2015;40:713-717', type: 'faisabilité', note: 'Cadavres non présélectionnés : la seule étude qui ne masque pas les morphotypes défavorables sur le niveau L5.' },
    { auteurs: 'Cohen SP, Bhaskar A, Bhatia A, et al.', titre: 'Consensus practice guidelines on interventions for lumbar facet joint pain from a multispecialty, international working group', revue: 'Reg Anesth Pain Med', annee: '2020', url: 'https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2020/04/01/consensus-practice-guidelines-on-interventions-for-lumbar-facet-joint-pain-from-a-multispecialty-international-working-group', type: 'reco', note: 'Admet le bloc unique avec ≥ 50 % de soulagement comme critère de sélection avant RF.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
    { auteurs: 'Cohen SP, Doshi TL, Constantinescu OC, et al.', titre: 'Medial branch blocks or intra-articular injections as a prognostic tool before lumbar facet radiofrequency denervation: a multicenter, case-control study', revue: 'Reg Anesth Pain Med', annee: '2015', pmid: '26066382', type: 'étude comparative', verif: false, note: 'Compare la valeur prédictive du bloc de branche et de l\'infiltration intra-articulaire avant thermolésion.' },
    { auteurs: 'Cohen SP, Strassels SA, Kurihara C, et al.', titre: 'Randomized study assessing the accuracy of cervical facet joint nerve (medial branch) blocks using different injectate volumes', revue: 'Anesthesiology', annee: '2010;112(1):144-52', url: 'https://pubs.asahq.org/anesthesiology/article/112/1/144/10185/Randomized-Study-Assessing-the-Accuracy-of', type: 'ECR', note: 'Le volume comme déterminant de la spécificité du bloc.' },
    { auteurs: '', titre: 'Comparison of the effectiveness of ultrasound-guided versus fluoroscopy-guided medial lumbar bundle branch block on pain related to lumbar facet joints: a multicenter randomized controlled non-inferiority study', revue: 'BMC Anesthesiology', annee: '2023', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10007783/', type: 'ECR', note: '50 patients, 3 niveaux, EVA/ODI/DASI à 1 semaine et 1 mois. Effectif faible.' },
    { auteurs: '', titre: 'Ultrasound-guided lumbar spine medial branch blocks for the treatment of low back pain', revue: 'Am J Phys Med Rehabil', annee: '2020', doi: '10.1097/PHM.0000000000001591', type: 'technique' },
  ],
  videos: [
    { titre: 'Ultrasound-guided lumbar facet nerve block and intra-articular injection', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-lumbar-facet-nerve-block-and-intra-articular-injection/', note: 'sono-anatomie et repères, texte + images' },
    { titre: 'Ultrasound-guided lumbar medial branch and intra-articular facet injections', source: 'ASRA', url: 'https://asra.com/news-publications/asra-updates/blog-landing/legacy-b-blog-posts/2019/08/06/ultrasound-guided-lumbar-medial-branch-and-intra-articular-facet-injections' },
    { titre: 'Ultrasound guided facet joint and medial branch infiltration', source: 'YouTube', url: 'https://www.youtube.com/watch?v=1C-XbeS0pnQ' },
    { titre: 'Pain medicine — lumbar medial branch, facet joint and nerve root blocks (Eichenberger)', source: 'YouTube · ISURA', url: 'https://www.youtube.com/watch?v=oiV-O0y8zB0' },
  ],

  scenes: [
    {
      id: 'mbl-parasag', section: 'reperage', titre: 'Coupe para-sagittale — comptage des niveaux depuis le sacrum',
      legende: 'Sonde longitudinale à 2–3 cm de la ligne médiane. Le sacrum est une ligne osseuse continue et plate ; au-dessus, les processus transverses forment des bosses régulières séparées de fenêtres sombres (aspect en « trident »), le psoas apparaissant entre elles. Le premier processus transverse au-dessus du sacrum est celui de L5. C\'est la seule vue qui donne le niveau — la vue transversale ne le donne pas.',
      opts: { depth: 7 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Para-sagittal, 2–3 cm de la ligne médiane', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 30 });
        S.muscle({ path: 'M0 80 L640 80 L640 300 L0 300 Z', label: 'Érecteurs du rachis', at: [110, 152], opacity: 0.5 });
        S.muscle({ path: 'M0 300 L450 300 L450 412 L0 412 Z', label: 'Psoas (fenêtre inter-transversaire)', at: [186, 380], opacity: 0.4, small: true });
        S.bone({ path: 'M46 300 Q92 254 138 300', label: 'PT L3', at: [92, 330], small: true });
        S.bone({ path: 'M180 302 Q226 256 272 302', label: 'PT L4', at: [226, 332], small: true });
        S.bone({ path: 'M314 306 Q360 260 406 306', label: 'PT L5', at: [360, 336], small: true });
        S.bone({ path: 'M462 296 Q550 288 636 292', label: 'Aile du sacrum', at: [548, 326], small: true });
        S.label({ x: 420, y: 186, text: 'Sacrum = ligne continue\n→ PT juste au-dessus = L5', anchor: 'start', small: true, lead: [520, 290] });
        S.label({ x: 226, y: 118, text: 'Aspect en « trident »', small: true });
      },
    },
    {
      id: 'mbl-transverse', section: 'sonoanatomie', titre: 'Coupe transversale — les trois reliefs et la gouttière-cible',
      legende: 'De médial en latéral : processus épineux (le plus superficiel), lame, processus articulaire supérieur, puis processus transverse, plus profond. La cible est l\'angle rentrant entre la face latérale du processus articulaire et le bord supérieur du processus transverse. Le nerf n\'est jamais visible : on vise un contact osseux.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial (ligne médiane)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, sur le processus transverse', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 34 });
        S.muscle({ path: 'M0 84 L200 84 L200 412 L0 412 Z', label: 'Multifide', at: [96, 142], opacity: 0.45 });
        S.muscle({ path: 'M200 84 L430 84 L430 412 L200 412 Z', label: 'Longissimus', at: [312, 142], opacity: 0.45 });
        S.muscle({ path: 'M430 84 L640 84 L640 412 L430 412 Z', label: 'Ilio-costal', at: [534, 142], opacity: 0.45 });
        S.bone({ path: 'M16 306 Q62 228 108 306', label: 'Processus épineux', at: [64, 336], small: true });
        S.bone({ path: 'M120 338 Q178 310 232 314 Q288 280 340 302 L364 334 L390 338 Q476 322 566 344' });
        S.label({ x: 168, y: 382, text: 'Lame', cls: 'lbl-bone', small: true });
        S.label({ x: 296, y: 366, text: 'Proc. articulaire sup.', cls: 'lbl-bone', small: true });
        S.label({ x: 498, y: 392, text: 'Processus transverse', cls: 'lbl-bone', small: true });
        S.target({ x: 377, y: 332, r: 15 });
        S.label({ x: 424, y: 282, text: 'Gouttière = cible', anchor: 'start', cls: 'lbl-target', small: true, lead: [386, 322] });
      },
    },
    {
      id: 'mbl-bloc', section: 'technique', titre: 'Bloc de branche médiale — aiguille in-plane, de latéral en médial',
      legende: 'L\'aiguille aborde la gouttière tangentiellement, de latéral en médial, en restant au-dessus du plan osseux : ce trajet s\'éloigne du foramen et du canal. Le critère de position est le contact osseux dans l\'angle, suivi d\'un retrait de 1 mm. Volume : 0,3–0,5 mL par branche, jamais plus — au-delà, le bloc perd sa spécificité.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse', type: 'in-plane latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 34 });
        S.muscle({ path: 'M0 84 L640 84 L640 412 L0 412 Z', label: 'Érecteurs du rachis', at: [130, 196], opacity: 0.45 });
        S.bone({ path: 'M16 306 Q62 228 108 306', label: 'Proc. épineux', at: [62, 340], small: true });
        S.bone({ path: 'M120 338 Q178 310 232 314 Q288 280 340 302 L364 334 L390 338 Q476 322 566 344' });
        S.label({ x: 290, y: 368, text: 'Proc. articulaire sup.', cls: 'lbl-bone', small: true });
        S.label({ x: 500, y: 394, text: 'Processus transverse', cls: 'lbl-bone', small: true });
        S.target({ x: 377, y: 332, r: 15 });
        S.label({ x: 108, y: 256, text: 'Contact osseux,\npuis retrait de 1 mm', anchor: 'start', small: true });
        S.needle({ from: [632, 122], to: [382, 330], label: '22 G 90 mm' });
        S.spread({ x: 374, y: 330, rx: 26, ry: 11, label: '0,5 mL' });
      },
    },
  ],

  checklist: [
    'Comptage des niveaux vérifié par deux vues et confronté à l\'imagerie du patient (anomalie transitionnelle lombo-sacrée ?)',
    'Niveaux et côté marqués au feutre avant désinfection, confirmés au time-out',
    'IMC noté : au-delà de 30, prévoir d\'emblée le contrôle radioscopique plutôt que de convertir en cours de geste',
    'Deux branches par articulation prévues (dont le rameau dorsal de L5 pour l\'étage L5-S1)',
    'Bloc diagnostique : AL seul, 0,3–0,5 mL par branche, pas de corticoïde',
    'Carnet horaire de douleur sur 8 h remis et expliqué au patient — c\'est le résultat du test',
    'Test de la marche normal avant la sortie (exclure une diffusion épidurale ou foraminale)',
  ],
});
