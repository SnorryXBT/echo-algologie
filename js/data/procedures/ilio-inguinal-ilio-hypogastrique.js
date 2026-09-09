/* Fiche : nerfs ilio-inguinal et ilio-hypogastrique — bloc échoguidé, PRF, cryoneurolyse. */
ECHO.register({
  id: 'ilio-inguinal-ilio-hypogastrique',
  titre: 'Nerfs ilio-inguinal et ilio-hypogastrique — bloc échoguidé',
  titreCourt: 'Ilio-inguinal / ilio-hypogastrique',
  en: 'Ultrasound-guided ilioinguinal and iliohypogastric nerve block (II/IH block) for chronic post-herniorrhaphy and post-Pfannenstiel groin pain; pulsed radiofrequency, cryoneurolysis, scar neuroma injection',
  region: 'rachis-bassin',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: 'Discordante : forte pour la précision technique, faible et contradictoire pour l’efficacité en douleur chronique',
  maj: '2026-09',
  motsCles: ['inguinodynie', 'douleur post-herniorraphie', 'CPIP', 'Pfannenstiel', 'névralgie pariétale', 'aine', 'EIAS', 'TAP', 'névrome', 'cryoneurolyse', 'PRF', 'triple neurectomie'],
  resume: 'Bloc de paroi abdominale basse, techniquement simple et sûr sous échographie, qui cible les deux nerfs dans le plan entre oblique interne et transverse, en dedans de l’épine iliaque antéro-supérieure. En algologie il sert d’abord d’outil diagnostique et topographique dans les douleurs inguinales chroniques post-herniorraphie (CPIP), post-Pfannenstiel et post-césarienne, avant d’envisager PRF, cryoneurolyse ou neurectomie chirurgicale. L’échoguidage a transformé un geste à l’aveugle dont le taux d’échec atteignait 30 % en un geste précis à 95 % (Eichenberger 2006), en divisant par deux les volumes et en supprimant l’essentiel du risque de ponction péritonéale. Il faut cependant annoncer le résultat honnêtement : le seul ECR contrôlé en douleur chronique post-herniorraphie (Bischoff 2012) est négatif, et l’anesthésique diffuse aux deux nerfs et au génito-fémoral, ce qui limite la valeur localisatrice d’un bloc isolé.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal strict, abdomen découvert de l’ombilic au pubis, bras le long du corps ; coussin sous les genoux pour détendre la paroi',
    sonde: 'lineaire', sondeNote: '10–15 MHz, profondeur 3–4 cm ; convexe 3–5 MHz seulement si IMC élevé ou paroi remaniée',
    approche: 'in-plane', approcheNote: 'médio-latérale, dans l’axe de la sonde posée sur la ligne EIAS–ombilic : la crête iliaque sert de butoir et l’aiguille s’éloigne du péritoine',
    aiguille: '22–25 G, 50 mm (écho-visible) ; aiguille RF 22 G 50–100 mm à extrémité active 5–10 mm ; sonde cryo 14–18 G',
    cible: 'Plan aponévrotique entre oblique interne et transverse de l’abdomen, 2–4 cm en dedans de l’EIAS ; nappe anéchogène en lentille qui sépare les deux muscles et englobe les deux nerfs et l’artère iliaque circonflexe profonde',
    injectat: '5–10 mL ropivacaïne 0,2–0,375 % ± corticoïde ; 4–5 mL de lidocaïne 1 % si bloc test',
    duree: '8–12 min bloc · 25–30 min PRF · 20–25 min cryoneurolyse',
  },

  indications: [
    'Douleur inguinale chronique post-herniorraphie (**CPIP**, chronic post-inguinal-hernia pain) : bloc test pour rattacher la douleur à un territoire nerveux avant PRF, cryoneurolyse ou neurectomie.',
    'Névralgie pariétale post-Pfannenstiel, post-césarienne, post-appendicectomie, post-prélèvement de crête iliaque : la cicatrice transverse basse sectionne électivement les branches ilio-inguinale et ilio-hypogastrique.',
    'Névralgie ilio-inguinale idiopathique ou par piégeage aponévrotique (sportif, hyperlordose, port de charge), après élimination d’une hernie, d’une pubalgie et d’une radiculopathie L1.',
    'Névrome cicatriciel palpable de l’aine ou de la cicatrice de Pfannenstiel : infiltration ciblée du nodule sous contrôle direct.',
    'Bloc test **de tri chirurgical** : c’est l’usage le mieux admis — la réponse au bloc conditionne la décision de neurectomie (simple, double ou triple) dans la plupart des algorithmes chirurgicaux.',
    'Analgésie péri-opératoire de la cure de hernie inguinale et de la chirurgie scrotale (hors périmètre de ce mémo, mais c’est là que la preuve est la plus solide).',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée du point de ponction, allergie vraie aux amino-amides.',
    'Relatives : anatomie de paroi illisible (obésité majeure, plastie complexe, multiples plaques) — l’échec est alors technique et non pharmacologique.',
    'Hémostase : bloc de **paroi superficiel et compressible**, classé à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures douleur. Pas d’arrêt systématique des antiagrégants ; anticoagulants oraux au cas par cas. L’artère iliaque circonflexe profonde est dans le plan cible : Doppler obligatoire, sinon hématome de paroi.',
    'Grossesse : possible en soi, mais péritoine et utérus gravide remontent — préférer un abord franchement latéral et un opérateur entraîné, ou différer.',
    'Corticoïdes : diabète déséquilibré, chirurgie herniaire programmée à court terme (retard de cicatrisation, risque infectieux sur plaque), infiltrations répétées sur le même site (max 3/an).',
  ],
  alternatives: 'Le bloc II/IH ne se conçoit pas isolément. En amont : traitement du **fond neuropathique** (gabapentinoïde, IRSNA, lidocaïne topique 5 % en emplâtre sur la cicatrice — cotée dans la douleur post-chirurgicale localisée). En parallèle ou à la place : bloc du nerf **génito-fémoral** (fiche dédiée) quand la douleur est scrotale ou labiale, **TAP block** ou **bloc du carré des lombes** quand la topographie est plus large et plus haute, **bloc paravertébral T12–L1** ou PRF des racines T12–L1–L2 quand le bloc de paroi ne tient pas. En aval : **PRF**, **cryoneurolyse**, et surtout la **neurectomie chirurgicale** — c’est la seule intervention avec un niveau de preuve élevé dans le CPIP (amélioration d’environ 90 % des patients toutes techniques confondues, meilleurs résultats pour la triple neurectomie dans les méta-analyses récentes). Positionner d’emblée le bloc comme un test de sélection avant chirurgie, pas comme un traitement de fond, évite de perdre six mois.',

  anatomie: `Les nerfs **ilio-hypogastrique** (L1, souvent T12-L1) et **ilio-inguinal** (L1) naissent du plexus lombaire, contournent le rein, croisent le carré des lombes puis perforent le **transverse de l’abdomen** près de la crête iliaque et cheminent ensuite dans le **plan aponévrotique entre transverse et oblique interne** — le même plan que le TAP block, mais à sa partie la plus basse et la plus latérale.

Repère cardinal : à **environ 2 à 4 cm en dedans et légèrement en arrière de l’EIAS**, sur la ligne EIAS–ombilic, les deux nerfs sont réunis dans ce plan, presque toujours **à moins de 1,5 cm de la crête iliaque**. Dans l’étude cadavérique fondatrice (Eichenberger 2006), le diamètre médian est de 3,0 × 1,6 mm pour l’ilio-inguinal et 2,9 × 1,6 mm pour l’ilio-hypogastrique, la distance médiane de l’ilio-inguinal à l’os iliaque de **6 mm**, et la distance entre les deux nerfs de **10,4 mm**. L’**artère iliaque circonflexe profonde** chemine dans le même plan, entre les deux nerfs ou juste à leur contact : c’est le repère Doppler du site.

Plus en aval, l’ilio-inguinal perfore l’oblique interne, entre dans le **canal inguinal** et sort par l’orifice inguinal superficiel pour innerver la racine de la verge et la partie antérieure du scrotum (grande lèvre chez la femme) et une bande cutanée à la racine de la cuisse. L’ilio-hypogastrique se divise en une branche latérale (fesse) et une **branche antérieure** qui perfore l’oblique externe 2–3 cm au-dessus de l’orifice inguinal superficiel pour innerver la peau sus-pubienne.

### Ce qui compte pour le geste
- **Le plan, pas le nerf.** Chez la plupart des patients on ne voit pas deux nerfs distincts : on voit un plan aponévrotique et, dedans, un ou deux points hyperéchogènes de 2–3 mm. La cible est l’espace ; le critère de fin est le **décollement des deux muscles**.
- **La sélectivité est un mythe.** Une étude de volontaires publiée dans le *British Journal of Anaesthesia* montre que ces deux nerfs **ne peuvent pas être bloqués sélectivement** l’un de l’autre sous échographie : même avec de petits volumes, la diffusion gagne les deux. Un bloc « ilio-inguinal isolé » n’existe pas en pratique.
- **Chevauchement systématique** avec le génito-fémoral (branche génitale) sur le scrotum et la racine de la cuisse, et avec T12 sur la région sus-pubienne. La cartographie sensitive avant/après le bloc vaut mieux que la seule EN pour interpréter le test.
- **Variabilité anatomique élevée** : dans une part non négligeable des sujets, un des deux nerfs est absent à ce niveau, dédoublé, ou déjà passé dans le plan sous l’oblique externe. C’est une raison de plus pour raisonner en plan et non en nerf.
- **Après chirurgie**, l’anatomie est remaniée : plaque de renfort hyperéchogène, plans fusionnés, nerf englobé dans la fibrose ou dans le matériel. Repérer d’abord **du côté sain** pour se calibrer, puis reproduire la coupe du côté douloureux.
- **Profondeurs usuelles** : plan cible à 1,5–3 cm chez l’adulte de morphotype standard, 3–4,5 cm si surcharge pondérale. Le péritoine et les anses sont **immédiatement sous le transverse** : c’est la seule vraie menace du geste, et c’est celle que l’échographie supprime.`,

  installation: {
    patient: `**Décubitus dorsal strict**, abdomen découvert de l’ombilic au pli inguinal, sous-vêtement abaissé ou protégé par un champ. Coussin sous les genoux : la paroi se détend, le plan devient plus lisible et la ponction moins douloureuse.

**Faire montrer la douleur du bout d’un doigt avant de désinfecter** et marquer le point au feutre, ainsi que la cicatrice, l’EIAS et l’ombilic. Chez le patient opéré, cette carte au feutre est le vrai plan de vol : c’est elle qui dira si l’on complète par une injection du névrome cicatriciel.

Voie veineuse non systématique pour un bloc de paroi à faible volume ; en revanche, prévoir une surveillance de 20–30 min et prévenir de la faiblesse possible du quadriceps.`,
    operateur: `Opérateur du **côté à traiter**, écran de l’autre côté du patient, dans l’axe du regard. Sonde posée **sur la ligne EIAS–ombilic**, son extrémité latérale coiffant l’EIAS, puis translatée de 1–3 cm en dedans jusqu’à ce que la crête iliaque n’occupe plus que le tiers latéral de l’image.

Ponction **de médial en latéral, dans le plan** : l’aiguille progresse vers l’os iliaque, qui sert de butoir, et s’éloigne du péritoine à chaque millimètre. C’est l’argument de sécurité principal ; l’abord inverse (latéro-médial) pointe l’aiguille vers les anses et n’a aucun avantage.`,
    sonde: `- Linéaire 10–15 MHz, preset « nerf » ou « superficiel », **profondeur 3–4 cm** (au-delà on perd la résolution du plan), focale sur l’interface oblique interne / transverse, gain réglé pour que les deux aponévroses soient blanc franc et les muscles gris moyen.
- **Doppler couleur à basse PRF impératif** avant toute ponction : l’artère iliaque circonflexe profonde est dans le plan cible. Une ponction artérielle donne un hématome de paroi souvent volumineux et douloureux.
- Compression douce et progressive : trop appuyer écrase le plan et le rend invisible.
- Aiguille écho-visible ou hydrolocalisation par 0,3–0,5 mL de sérum : l’angle d’insonation reste plat (15–25°), le corps de l’aiguille doit être visible sur toute sa longueur.
- Chez l’opéré : baisser le gain pour distinguer la **plaque de renfort** (ligne hyperéchogène rectiligne, parfois plissée, avec renforcement postérieur) des aponévroses natives.`,
  },

  reperage: [
    { titre: 'Poser sur l’EIAS', texte: 'Sonde **transversale oblique, sur la ligne EIAS–ombilic**, une extrémité posée sur l’EIAS. On voit une ligne hyperéchogène très brillante avec cône d’ombre franc dans la partie latérale de l’image : c’est la **crête iliaque**. C’est le seul repère qui ne se discute pas ; tout le reste se construit à partir de lui.' },
    { titre: 'Compter les trois muscles', texte: 'Translater la sonde de 1–3 cm **en dedans** de l’EIAS. Apparaissent de la superficie à la profondeur : **oblique externe** (souvent réduit à son aponévrose à ce niveau, fin), **oblique interne** (le plus épais des trois, c’est le repère), **transverse de l’abdomen** (fin, hypoéchogène). Si l’on ne compte que deux muscles, on est trop latéral, sur la crête.' },
    { titre: 'Ouvrir le plan cible', texte: 'Le plan à traiter est l’interface **oblique interne / transverse**, une ligne hyperéchogène continue. La suivre du bord latéral de l’image (contre l’os) vers le dedans : les nerfs sont **dans le premier centimètre et demi à partir de la crête**.' },
    { titre: 'Doppler', texte: 'Activer le Doppler couleur : l’**artère iliaque circonflexe profonde** apparaît comme un point pulsatile dans le plan lui-même. Elle signe le site et, plus important, elle indique où **ne pas** mettre la pointe.' },
    { titre: 'Chercher les nerfs (facultatif)', texte: 'Deux petites structures ovalaires de 2–3 mm, hyperéchogènes à bord net, séparées d’environ 1 cm, l’**ilio-inguinal le plus proche de l’os**. Les voir est un confort, pas une condition. Une bascule (tilt) de 10° et un léger balayage crânio-caudal les font apparaître et disparaître : c’est le meilleur test de reconnaissance.' },
    { titre: 'Si on ne trouve pas', texte: 'Trois manœuvres, dans cet ordre : (1) revenir se caler sur l’os et repartir en dedans millimètre par millimètre ; (2) faire tousser ou contracter la paroi — les plans glissent l’un sur l’autre et se dessinent ; (3) **repérer du côté sain** puis reproduire l’inclinaison de sonde du côté douloureux. En dernier recours, injecter le plan sous contrôle visuel sans avoir individualisé les nerfs : c’est le comportement standard et il suffit — le taux de succès de la technique repose sur le plan, pas sur la visualisation nerveuse.' },
  ],

  sonoanatomie: [
    { structure: 'Crête iliaque / EIAS', aspect: 'Ligne hyperéchogène très brillante, cône d’ombre postérieur franc', repere: 'Tiers latéral de l’image ; point de départ de tout le repérage' },
    { structure: 'Oblique externe', aspect: 'Muscle fin, souvent réduit à une lame aponévrotique près de l’EIAS', repere: 'Le plus superficiel des trois' },
    { structure: 'Oblique interne', aspect: 'Muscle épais, gris moyen, fibres striées — le plus volumineux', repere: 'Couche intermédiaire, sert de repère de comptage' },
    { structure: 'Transverse de l’abdomen', aspect: 'Muscle fin, franchement hypoéchogène', repere: 'Le plus profond ; sous lui, le péritoine' },
    { structure: 'Plan oblique interne / transverse', aspect: 'Interface hyperéchogène continue, se dédouble à l’injection', repere: '**La cible** — mêmes plan que le TAP, à sa portion basse et latérale' },
    { structure: 'Nerf ilio-inguinal', aspect: 'Ovale hyperéchogène 3,0 × 1,6 mm', repere: 'Le plus latéral et le plus proche de l’os (≈ 6 mm)' },
    { structure: 'Nerf ilio-hypogastrique', aspect: 'Ovale hyperéchogène 2,9 × 1,6 mm', repere: 'Environ 1 cm en dedans de l’ilio-inguinal' },
    { structure: 'Artère iliaque circonflexe profonde', aspect: 'Point pulsatile en Doppler couleur, dans le plan cible', repere: 'Entre les deux nerfs ou à leur contact — repère et danger' },
    { structure: 'Péritoine et anses', aspect: 'Ligne fine glissante, puis anses péristaltiques à contenu hétérogène', repere: 'Immédiatement sous le transverse : à identifier avant de ponctionner' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Point douloureux et repères marqués au feutre avant désinfection. Désinfection large, gel stérile ou housse. Seringue de 10 mL étiquetée, aiguille 22–25 G 50 mm sur prolongateur. Balayage Doppler complet du trajet prévu.' },
    { titre: 'Anesthésie cutanée', texte: '0,5–1 mL de lidocaïne 1 % au point d’entrée, 1–2 cm en dedans du bord médial de la sonde. Facultative avec une 25 G, systématique avant aiguille RF ou sonde cryo (calibre ≥ 18 G).' },
    { titre: 'Ponction dans le plan, de médial en latéral', texte: 'Angle plat (15–25°), aiguille visible sur toute sa longueur. Traverser oblique externe puis oblique interne. Deux ressauts francs sont perçus (aponévroses) ; le second signe l’entrée dans le plan cible. Progresser en direction de la crête iliaque, jamais vers le bas.' },
    { titre: 'Hydrolocalisation', texte: 'Aspiration, puis **0,3–0,5 mL de sérum physiologique**. Trois réponses possibles : (a) une lentille anéchogène qui **écarte oblique interne et transverse** — la pointe est au bon endroit ; (b) une image en cocarde intramusculaire — retirer ou avancer d’1–2 mm ; (c) rien de visible — la pointe est probablement sous le transverse, **retirer immédiatement**.' },
    { titre: 'Injection fractionnée', texte: '5 à 10 mL par bolus de 2–3 mL, avec aspiration entre chaque, en suivant l’extension de la nappe. Elle doit s’étaler en direction de la crête iliaque et en dedans sur 3–4 cm. Une résistance anormale à l’injection ou une douleur fulgurante impose l’arrêt.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène en **lentille biconvexe** de 3–4 cm de long, séparant nettement oblique interne et transverse, englobant le signal Doppler et les deux points nerveux quand ils sont visibles. Pas de gonflement intramusculaire, pas de disparition brutale de l’injectat (signe d’un passage sous le transverse).' },
    { titre: 'Après le geste', texte: 'Compression 1 min, pansement. **Cartographie sensitive au rouleau froid ou au coton à 20 et 30 min**, superposée à la cartographie pré-bloc : c’est cette carte, plus que l’EN, qui donne sa valeur au bloc test. Tester le quadriceps avant le lever (bloc fémoral par diffusion dans 5–8 % des cas). Consignes : pas de conduite le jour même, appui prudent à la première verticalisation, journal de douleur sur 7 jours.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test diagnostique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | **4–5 mL** | Petit volume délibéré : au-delà de 10 mL la diffusion gagne le plan du TAP, le génito-fémoral et le nerf fémoral, et la valeur localisatrice s’effondre. Cartographie sensitive avant / à 30 min |
| Bloc thérapeutique | Ropivacaïne 0,2–0,375 % (ou lévobupivacaïne 0,25 %) + méthylprednisolone 40 mg, ou bétaméthasone 5,7 mg (Diprostène 1 mL), ou dexaméthasone 4–8 mg | 5–10 mL | Site **non artériel terminal** : corticoïde particulaire acceptable. Dexaméthasone si l’on prévoit de répéter ou chez le diabétique |
| Hydrodissection | Dextrose 5 % ± lidocaïne 0,5–1 % | 5–10 mL | Sépare le nerf du plan aponévrotique fibrosé sans charge cortisonique ; répétable à 3–4 semaines. Preuve directe **absente** dans cette indication (extrapolée du canal carpien et du grand occipital) |
| Névrome cicatriciel | Lidocaïne 1 % + corticoïde non particulaire, ou dextrose 5 % | **1–3 mL** | Contact direct du nodule, volume minimal, pas de corticoïde dans la peau (atrophie, dépigmentation sur cicatrice) |
| Avant PRF ou cryoneurolyse | Lidocaïne 1 % | 1–2 mL sur le trajet | Ne pas noyer la cible : un plan inondé déplace le nerf hors de portée de l’électrode |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg (≈ 225 mg), lévobupivacaïne / bupivacaïne 2–2,5 mg/kg (≈ 150 mg), lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Un bloc II/IH unilatéral n’en approche jamais ; le point de vigilance est le **bloc bilatéral** ou l’association à un TAP ou à un bloc génito-fémoral dans la même séance — additionner les doses. La paroi abdominale est un territoire à **absorption systémique rapide** : injection fractionnée, jamais en bolus unique.

Corticoïde : 3 injections par an au maximum sur le même site, espacées d’au moins 3 mois. Sur une cicatrice fine ou une paroi maigre, préférer une dose faible ou la dexaméthasone (moins d’atrophie sous-cutanée et de dépigmentation).`,

  variantes: [
    { titre: 'Injection d’un névrome cicatriciel', texte: `Fréquent et sous-diagnostiqué après herniorraphie et Pfannenstiel. Sonde haute fréquence (15–18 MHz) balayée perpendiculairement à la cicatrice, en partant de la zone indolore vers le point exquis. Le névrome est un **nodule fusiforme hypoéchogène, hypervascularisé ou non, en continuité avec un cordon nerveux d’amont**, souvent accolé à la plaque ou au fil ; la pression de la sonde y **reproduit la douleur** — c’est le signe diagnostique, pas l’image.

Ponction in-plane, 1–3 mL au contact direct (lidocaïne 1 % ± corticoïde non particulaire, ou dextrose 5 % si l’on veut répéter sans corticoïde). Un soulagement franc et immédiat oriente vers la cryoneurolyse du névrome ou l’exérèse chirurgicale. Ne pas laisser de corticoïde dans le derme cicatriciel.` },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Après bloc test positif (≥ 50 % de soulagement pendant la durée de l’AL, et cartographie sensitive cohérente). Aiguille RF 22 G, extrémité active 5–10 mm, placée **parallèlement au trajet des nerfs** dans le plan oblique interne / transverse. Stimulation sensitive 50 Hz : paresthésies dans le territoire inguinal à < 0,5 V. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 2–4 mL d’AL ± corticoïde.

Les données sont des séries et de petits essais : Rozen 2006 rapporte les premiers cas de PRF ilio-inguinale post-herniorraphie ; un ECR contre sham (2018) sur 70 patients avec orchialgie post-chirurgicale montre une réduction significative de l’EVA à 2, 4, 6, 8 et 12 semaines pour la PRF du nerf ilio-inguinal et de la branche génitale du génito-fémoral ; une série de *Pain Medicine* 2022 plaide pour une PRF **précoce** dans la douleur inguinale post-chirurgicale. Preuve **faible à modérée**, mais l’innocuité est bonne et le geste est répétable.` },
    { titre: 'Cryoneurolyse', texte: `Cible : la confluence des deux nerfs, en dedans de l’EIAS, dans le plan entre oblique interne et transverse. Sonde 14–18 G après anesthésie du trajet ; cycles de gel 2 min / dégel 30 s × 2–3, la boule de glace devant englober le plan. Le tissu conjonctif du nerf est préservé (axonotmésis de Sunderland II), d’où une repousse à 3–6 mois sans névrome de section — argument décisif face à une neurectomie chez un patient déjà multiopéré.

Données : séries prospectives et cohortes rétrospectives (Yoon 2013 : réduction significative des scores à 1, 3, 6 et 12 mois chez 22 patients porteurs de mononeuropathies dont l’ilio-inguinal, sans complication notable ; Nemecek : ≥ 30 % de baisse chez plus de la moitié de la cohorte à 1 mois). Aucun ECR. Preuve **faible**.` },
    { titre: 'Hydrodissection', texte: 'Chez le patient dont l’imagerie ou la clinique évoque un piégeage aponévrotique ou une fibrose péri-nerveuse plutôt qu’une lésion de section : 5–10 mL de dextrose 5 % dans le plan, en cherchant à voir le nerf **se détacher** de l’aponévrose. Répéter à 3–4 semaines, 2 à 3 fois. Intérêt réel chez le patient diabétique ou déjà saturé en corticoïdes. Aucune preuve directe dans cette localisation : à présenter comme tel.' },
    { titre: 'Ce qu’il faut faire quand le bloc de paroi échoue', texte: 'Ne pas répéter le même geste une troisième fois. Deux directions : (1) **remonter d’un étage** — bloc paravertébral ou PRF des racines T12–L1–L2 (une série ancienne de PRF des racines lombaires dans la douleur post-herniorraphie a ouvert cette voie) ; (2) **adresser au chirurgien** pour discuter la neurectomie, dont le niveau de preuve dans le CPIP est supérieur à tout ce que l’algologue peut proposer. La réponse au bloc test est précisément l’information que le chirurgien attend.' },
  ],

  pearls: [
    'Se caler sur l’os d’abord, chercher le plan ensuite : la crête iliaque est le seul repère indiscutable de cette fenêtre.',
    'Compter trois muscles. Si l’on n’en voit que deux, la sonde est trop latérale — le geste est faux avant même la ponction.',
    'Doppler systématique : l’artère iliaque circonflexe profonde est **dans** le plan cible, pas à côté.',
    'Ponction de médial en latéral : l’os est un butoir, le péritoine s’éloigne à chaque millimètre.',
    'Repérer du côté sain chez tout patient opéré : deux minutes qui font gagner un quart d’heure.',
    'Faire la cartographie sensitive avant / après, au rouleau froid. Sans elle, un bloc test ne teste rien.',
    'Volume faible pour un test, volume plus large pour un traitement : ce ne sont pas les mêmes gestes ni les mêmes conclusions.',
  ],
  pieges: [
    'Croire bloquer sélectivement l’un des deux nerfs : la diffusion les prend toujours ensemble (étude de volontaires, *Br J Anaesth*).',
    'Interpréter un bloc positif comme la preuve d’une névralgie ilio-inguinale : le chevauchement avec le génito-fémoral et T12 est constant, et l’effet placebo d’un bloc est élevé — c’est le fondement du résultat négatif de Bischoff 2012.',
    'Injecter sans avoir vu la nappe écarter les deux muscles : sans ce signe, l’injectat est intramusculaire ou intra-péritonéal.',
    'Oublier de tester le quadriceps avant le lever : bloc fémoral transitoire par diffusion le long du fascia iliaca dans 5–8 % des cas, chute au premier pas.',
    'Injecter dans une plaque de renfort ou dans un plan fibreux non compliant : forte résistance, pas de diffusion, aucun effet.',
    'Répéter des corticoïdes tous les mois sur une paroi maigre : atrophie sous-cutanée et dépigmentation sur une cicatrice déjà mal vécue.',
    'Faire une PRF sans bloc test préalable documenté : on perd à la fois la valeur prédictive et l’argument à donner au chirurgien.',
  ],
  complications: [
    '**Ponction péritonéale et perforation d’anse** : la complication historique du geste à l’aveugle, rapportée aussi en lésion hépatique et en hématome pelvien. L’échographie la supprime pratiquement — c’est le principal argument de l’échoguidage. Conduite à tenir : arrêt, surveillance clinique 6 h, avis chirurgical au moindre doute.',
    '**Bloc fémoral transitoire** (5–8 %, jusqu’à 11 % dans certaines séries) : par diffusion de l’AL le long des plans transverse–iliaque vers le nerf fémoral ; parésie du quadriceps et hypoesthésie antéro-médiale de cuisse, 6 à 8 h (jusqu’à 36 h dans un cas publié), résolutif sans séquelle. Prévenir systématiquement, faire lever accompagné, pas de conduite.',
    '**Hématome de paroi** par ponction de l’artère iliaque circonflexe profonde : compression prolongée, écho de contrôle si masse expansive ; volontiers douloureux et long à résorber.',
    'Injection intraneurale : douleur fulgurante et résistance à l’injection → arrêt immédiat et repositionnement.',
    'Toxicité systémique aux anesthésiques locaux (LAST) : risque faible en unilatéral, réel en bilatéral ou en association à un TAP — absorption rapide de la paroi abdominale. Intralipide disponible.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie ; atrophie sous-cutanée et dépigmentation en cas de reflux superficiel sur une cicatrice.',
    'Échec du bloc : le plus fréquent des « incidents ». Après plastie complexe, plans fusionnés et diffusion imprévisible — le documenter comme tel plutôt que de conclure à l’absence de composante nerveuse.',
  ],
  securite: [
    'Classe **faible risque hémorragique** (ASRA-ESRA 2018, procédures douleur) : bloc superficiel et compressible, pas d’arrêt systématique des antiagrégants ; anticoagulants au cas par cas. Réserve : l’artère iliaque circonflexe profonde est dans le plan — Doppler obligatoire même chez le patient non anticoagulé.',
    'Identifier formellement le **péritoine** avant toute ponction, et garder la pointe visible en permanence. En cas de perte de la pointe : arrêter la progression, réaligner la sonde, ne jamais avancer « au jugé ».',
    'Aspiration avant chaque bolus, injection fractionnée par 2–3 mL, arrêt sur douleur fulgurante ou résistance anormale.',
    'Additionner les doses d’AL en cas de bloc bilatéral ou de gestes multiples dans la même séance ; matériel de réanimation et émulsion lipidique accessibles.',
    'Chez la femme enceinte ou après chirurgie pelvienne lourde, l’anatomie de paroi peut être trompeuse : abaisser le seuil de renoncement.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, **cartographie sensitive comparée** (rouleau froid ou coton), test du quadriceps avant le lever, tolérance. Noter le volume et le produit exacts — ils conditionnent l’interprétation.
- **J1–J7** : journal de douleur remis au patient (EN matin/soir, antalgiques pris, gêne fonctionnelle). C’est le seul moyen de distinguer un effet AL prolongé d’un effet corticoïde débutant.
- **J15–J30** : EN, retentissement (sommeil, port de charge, activité sexuelle si douleur scrotale ou vulvaire), score DN4 pour suivre la composante neuropathique. Décision : répéter (max 3 corticoïdes par an), passer à l’hydrodissection, à la PRF ou à la cryoneurolyse, ou **adresser au chirurgien**.
- **3 mois** : évaluer l’objectif fonctionnel négocié à J0, pas seulement l’EN. Un bloc test franchement positif mais à effet court n’est pas un échec : c’est un argument de sélection pour la neurectomie.
- **Toujours coupler** au traitement de fond (gabapentinoïde ou IRSNA, emplâtre de lidocaïne 5 % sur la cicatrice, désensibilisation cicatricielle en kinésithérapie) : les blocs isolés n’ont jamais fait la preuve d’un bénéfice durable dans cette indication.`,

  evidence: `- **Précision technique : preuve forte.** L’étude cadavérique d’Eichenberger (2006, *Br J Anaesth*) — 37 blocs sur 10 cadavres — montre 33/37 pointes d’aiguille exactement au contact du nerf visé et une coloration complète du nerf dans tous ces cas, soit un **succès simulé de 95 %**, contre des taux d’échec de l’ordre de 30 % pour les techniques à l’aveugle.
- **Épargne de volume : preuve forte.** L’ECR de Willschke (2005, *Br J Anaesth*, 100 enfants) montre que l’échoguidage réduit significativement le volume d’AL (0,19 vs 0,30 mL/kg, p < 0,0001) et le recours aux antalgiques per- et post-opératoires (4 % vs 26 % ; 6 % vs 40 %). Transposable à l’adulte pour ce qui est du principe technique.
- **Efficacité en douleur chronique : preuve faible et discordante.** L’unique ECR contrôlé disponible (**Bischoff 2012, *Anesth Analg***, croisé, double aveugle, contre placebo, 12 patients à douleur post-herniorraphie sévère + 12 témoins) conclut que les blocs échoguidés à la lidocaïne au niveau de l’EIAS ne sont **pas utiles** au diagnostic ni à la prise en charge de la douleur inguinale persistante post-herniorraphie. Effectif faible, mais c’est le meilleur niveau de preuve dont on dispose et il est négatif — le dire au patient.
- **Absence de sélectivité : démontrée.** Une étude de volontaires (*Br J Anaesth*) établit que les deux nerfs ne peuvent pas être bloqués sélectivement sous échographie. Toute interprétation « nerf par nerf » d’un bloc positif est donc surinterprétée.
- **PRF : preuve faible à modérée.** Séries et petits ECR : ECR contre sham 2018 (70 patients, orchialgie post-chirurgicale) positif à 2–12 semaines ; ECR 2015 sur la névralgie inguinale après bloc test T12–L1–L2 positif ; série de *Pain Medicine* 2022 en faveur d’une PRF précoce ; cas princeps de Rozen 2006. Aucune méta-analyse.
- **Cryoneurolyse et radiofréquence continue : preuve faible.** Cohortes et séries seulement (Yoon 2013 ; Nemecek ; une étude 2025 sur les neuropathies pudendale, génito-fémorale et ilio-inguinale suggérant une durée d’effet supérieure aux corticoïdes). Zéro ECR.
- **Ce qui marche vraiment dans le CPIP : la chirurgie.** Les méta-analyses récentes de neurectomie rapportent environ **90 % d’amélioration**, la triple neurectomie atteignant 98,2 % d’amélioration globale et la double neurectomie 80,1 % de disparition complète (au prix de 15,3 % de complications). Les revues systématiques 2023–2025 proposent d’essayer blocs, PRF et neurostimulation avant la neurectomie, mais aucune ne prétend que les blocs suffisent.
- **Trou de littérature assumé** : aucune donnée contrôlée sur le bloc II/IH dans la névralgie post-Pfannenstiel ou post-césarienne, aucune sur l’hydrodissection au dextrose à ce site, aucune sur la dose ou le type optimal de corticoïde. Tout ce qui est écrit ici sur ces trois points relève de la transposition raisonnée, pas de la preuve.`,

  references: [
    { auteurs: 'Eichenberger U, Greher M, Kirchmair L, Curatolo M, Moriggl B', titre: 'Ultrasound-guided blocks of the ilioinguinal and iliohypogastric nerve: accuracy of a selective new technique confirmed by anatomical dissection', revue: 'Br J Anaesth', annee: '2006;97(2):238-43', pmid: '16698865', type: 'anatomie / technique', verif: true, note: 'Étude princeps sur cadavres : 95 % de succès simulé, mensurations des deux nerfs et de leur distance à l’os iliaque.' },
    { auteurs: 'Willschke H, Marhofer P, Bösenberg A, et al.', titre: 'Ultrasonography for ilioinguinal/iliohypogastric nerve blocks in children', revue: 'Br J Anaesth', annee: '2005;95(2):226-30', pmid: '15923270', type: 'ECR', verif: true, note: 'Réduction significative du volume d’AL et du recours aux antalgiques par rapport au « fascial click ».' },
    { auteurs: 'Bischoff JM, Koscielniak-Nielsen ZJ, Kehlet H, Werner MU', titre: 'Ultrasound-guided ilioinguinal/iliohypogastric nerve blocks for persistent inguinal postherniorrhaphy pain: a randomized, double-blind, placebo-controlled, crossover trial', revue: 'Anesth Analg', annee: '2012;114(6):1323-9', doi: '10.1213/ANE.0b013e31824d6168', type: 'ECR', verif: true, note: 'ECR négatif — le résultat le plus important de la fiche : ces blocs ne sont pas utiles au diagnostic ni à la prise en charge du CPIP.' },
    { titre: 'Ilioinguinal and iliohypogastric nerves cannot be selectively blocked by using ultrasound guidance: a volunteer study', revue: 'Br J Anaesth', type: 'étude de volontaires', verif: true, note: 'Auteurs et année non vus dans la source consultée. Démontre l’absence de sélectivité entre les deux nerfs.' },
    { titre: 'Review of ilioinguinal nerve blocks for ilioinguinal neuralgia post hernia surgery', revue: 'Curr Pain Headache Rep', annee: '2020', doi: '10.1007/s11916-020-00913-4', type: 'revue', verif: true },
    { titre: 'Understanding the role of pulsed radiofrequency in the early management of chronic postsurgical groin pain', revue: 'Pain Med', url: 'https://academic.oup.com/painmedicine/article/23/6/1186/6427641', type: 'série / revue', verif: true, note: 'Année non vue dans la source ; plaide pour une PRF précoce dans la douleur inguinale post-chirurgicale.' },
    { auteurs: 'Rozen D, Ahn J', titre: 'Pulsed radiofrequency for the treatment of ilioinguinal neuralgia after inguinal herniorrhaphy', revue: 'Mt Sinai J Med', annee: '2006', pmid: '16878278', type: 'série', verif: false, note: 'Titre, année et PMID vus ; auteurs et revue cités de mémoire.' },
    { titre: 'Recalcitrant pelvic pain: evaluating the effectiveness of radiofrequency ablation for pudendal, genitofemoral, and ilioinguinal neuropathy', annee: '2025', url: 'https://www.mdpi.com/2673-592X/5/4/28', type: 'cohorte', verif: true },
    { titre: 'Impact of different neurectomy techniques on managing chronic pain after inguinal hernia repair: a meta-analysis and systematic review', annee: '2025', pmid: '40794295', type: 'méta-analyse', verif: true, note: 'Environ 90 % d’amélioration après neurectomie ; triple neurectomie 98,2 %, double neurectomie 80,1 % de rémission complète pour 15,3 % de complications.' },
    { titre: 'Management of chronic post-herniorrhaphy pain: a systematic review', pmid: '41337757', type: 'revue systématique', verif: true, note: 'Algorithme : blocs / PRF, puis neurostimulation, puis neurectomie. Revue et année non vues.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
    { auteurs: 'Mellert C, et al.', titre: 'Femoral nerve palsy following landmark based ilioinguinal-iliohypogastric nerve block: case report and safety review', revue: 'J Med Cases', url: 'https://www.journalmc.org/index.php/JMC/article/view/2809/2141', type: 'cas clinique', verif: true, note: 'Revue de sécurité : parésie fémorale transitoire, mécanisme de diffusion.' },
    { titre: 'Ilioinguinal neuralgia — StatPearls', revue: 'NCBI Bookshelf', url: 'https://www.ncbi.nlm.nih.gov/books/NBK538256/', type: 'mise au point', verif: true, note: 'Complications spécifiques : injection intrapéritonéale, perforation d’anse, lésion hépatique, parésie fémorale, hématome pelvien.' },
  ],
  videos: [
    { titre: 'Ultrasound-guided ilioinguinal and iliohypogastric nerve blocks', source: 'YouTube', url: 'https://www.youtube.com/watch?v=WJPH6Ij3StA', note: 'anatomie, sono-anatomie et technique pas à pas' },
    { titre: 'Ilioinguinal / iliohypogastric nerve block', source: 'USRA (University of Toronto)', url: 'https://usra.ca/regional-anesthesia/specific-blocks/trunk/ilioinguinalnerve.php', note: 'images échographiques légendées et repères' },
    { titre: 'Ultrasound-guided blocks for pelvic pain', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-blocks-for-pelvic-pain/', note: 'chapitre couvrant II/IH et génito-fémoral' },
    { titre: 'Ilioinguinal and iliohypogastric block — question of the week', source: 'Society for Pediatric Anesthesia (PDF)', url: 'https://pedsanesthesia.org/wp-content/uploads/2024/12/Week-225-Ilioinguinal-and-Iliohypogastric-Block.pdf', note: 'synthèse des complications, dont la parésie fémorale' },
  ],

  scenes: [
    {
      id: 'iiih-sono', section: 'sonoanatomie', titre: 'Coupe sur la ligne EIAS–ombilic, 2–3 cm en dedans de l’EIAS — vue de repérage',
      legende: 'Trois muscles superposés : oblique externe, oblique interne (le plus épais), transverse. Les deux nerfs sont dans le plan oblique interne / transverse, à moins de 1,5 cm de la crête iliaque, l’ilio-inguinal le plus près de l’os (≈ 6 mm) et l’ilio-hypogastrique environ 1 cm en dedans. L’artère iliaque circonflexe profonde chemine dans le même plan. Sous le transverse : péritoine et anses.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial (ombilic)', right: 'Latéral (EIAS)' }).probeInfo({ plan: 'Transverse oblique', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M0 78 L520 84 L520 132 L0 138 Z', label: 'Oblique externe', at: [130, 110], opacity: 0.45 });
        S.fascia({ points: [[0, 138], [520, 132]], width: 1.5 });
        S.muscle({ path: 'M0 138 L520 132 L524 206 L0 216 Z', label: 'Oblique interne', at: [130, 178], opacity: 0.55 });
        S.fascia({ points: [[0, 216], [530, 206]], width: 2.2 });
        S.muscle({ path: 'M0 216 L530 206 L534 254 L0 262 Z', label: 'Transverse de l’abdomen', at: [150, 240], opacity: 0.4 });
        S.fascia({ points: [[0, 268], [520, 258]], width: 1.4, opacity: 0.75 });
        S.bowel({ path: 'M40 300 q60 -34 130 -4 q66 30 130 -2 q60 -30 120 4 L420 400 L40 400 Z', label: 'Anses digestives', at: [190, 350] });
        S.bone({ path: 'M528 260 Q580 214 640 168', label: 'Crête iliaque / EIAS', at: [560, 150], anchor: 'middle', small: true, ldy: 0 });
        S.nerve({ x: 470, y: 212, r: 7, label: 'N. ilio-inguinal', lx: 470, ly: 320, anchor: 'middle', lead: [470, 219], small: true });
        S.nerve({ x: 396, y: 210, r: 7, label: 'N. ilio-hypogastrique', lx: 330, ly: 348, anchor: 'middle', lead: [392, 217], small: true });
        S.artery({ x: 434, y: 214, r: 6, label: 'A. iliaque circonflexe profonde', lx: 300, ly: 132, anchor: 'middle', lead: [430, 209], small: true });
        S.label({ x: 150, y: 208, text: 'Plan cible (OI / TA)', cls: 'lbl-fascia', small: true });
        S.label({ x: 120, y: 282, text: 'Péritoine', cls: 'lbl-fascia', small: true });
      },
    },
    {
      id: 'iiih-bloc', section: 'technique', titre: 'Bloc dans le plan, de médial en latéral — la crête iliaque sert de butoir',
      legende: 'Aiguille in-plane à angle plat, progressant vers l’os : chaque millimètre éloigne la pointe du péritoine. Deux ressauts aponévrotiques ; l’hydrolocalisation de 0,3–0,5 mL doit écarter oblique interne et transverse. Critère de fin : lentille anéchogène de 3–4 cm englobant les deux nerfs et le signal Doppler.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial (ombilic)', right: 'Latéral (EIAS)' }).probeInfo({ plan: 'Transverse oblique', type: 'in-plane, médio-latéral' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.muscle({ path: 'M0 78 L520 84 L520 132 L0 138 Z', label: 'Oblique externe', at: [120, 110], opacity: 0.45 });
        S.fascia({ points: [[0, 138], [520, 132]], width: 1.5 });
        S.muscle({ path: 'M0 138 L520 132 L524 206 L0 216 Z', label: 'Oblique interne', at: [120, 176], opacity: 0.55 });
        S.fascia({ points: [[0, 216], [530, 206]], width: 2.2 });
        S.muscle({ path: 'M0 216 L530 206 L534 254 L0 262 Z', label: 'Transverse', at: [90, 240], opacity: 0.4 });
        S.fascia({ points: [[0, 268], [520, 258]], width: 1.4, opacity: 0.75 });
        S.bowel({ path: 'M40 300 q60 -34 130 -4 q66 30 130 -2 q60 -30 120 4 L420 400 L40 400 Z', label: 'Péritoine, anses', at: [190, 348] });
        S.bone({ path: 'M528 260 Q580 214 640 168' });
        S.label({ x: 596, y: 156, text: 'Crête iliaque', cls: 'lbl-bone', small: true });
        S.nerve({ x: 470, y: 212, r: 7 });
        S.nerve({ x: 396, y: 210, r: 7 });
        S.artery({ x: 434, y: 214, r: 6 });
        S.target({ x: 470, y: 212, r: 20 });
        S.needle({ from: [0, 96], to: [386, 208], label: '22–25 G 50 mm, angle 15–25°' });
        S.spread({ x: 442, y: 211, rx: 96, ry: 13, label: '5–10 mL' });
        S.label({ x: 250, y: 330, text: 'Butoir osseux : la pointe s’éloigne du péritoine', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
    {
      id: 'iiih-nevrome', section: 'technique', titre: 'Névrome cicatriciel de l’aine — infiltration ciblée',
      legende: 'Sonde 15–18 MHz perpendiculaire à la cicatrice, balayée de la zone indolore vers le point exquis. Le névrome est un nodule fusiforme hypoéchogène en continuité avec un cordon nerveux d’amont, souvent accolé à la plaque de renfort ; la pression de la sonde y reproduit la douleur. 1–3 mL au contact, pas de corticoïde dans le derme.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Perpendiculaire à la cicatrice', type: 'linéaire 15–18 MHz' });
        S.skin({ thickness: 10, fatBelow: 34 });
        S.fascia({ points: [[300, 42], [304, 52], [300, 62], [306, 86]], width: 2.4, opacity: 0.95 });
        S.label({ x: 300, y: 66, text: 'Cicatrice', cls: 'lbl-fascia', small: true, anchor: 'middle', lead: [304, 74] });
        S.muscle({ path: 'M0 92 L640 92 L640 168 L0 172 Z', label: 'Oblique externe / aponévrose', at: [140, 132], opacity: 0.42 });
        S.fascia({ points: [[0, 172], [640, 168]], width: 1.6 });
        S.muscle({ path: 'M0 172 L640 168 L640 250 L0 256 Z', label: 'Oblique interne', at: [130, 214], opacity: 0.5 });
        S.fascia({ points: [[60, 246], [250, 242], [420, 244], [590, 240]], width: 3.2, opacity: 1 });
        S.label({ x: 540, y: 268, text: 'Plaque de renfort', cls: 'lbl-fascia', small: true, anchor: 'middle', lead: [545, 244] });
        S.nerve({ rx: 40, ry: 15, x: 306, y: 146, label: 'Névrome', lx: 306, ly: 108, anchor: 'middle', small: true, lead: [306, 132] });
        S.nerve({ x: 400, y: 152, rx: 8, ry: 5, label: 'Cordon nerveux d’amont', lx: 470, ly: 196, anchor: 'middle', small: true, lead: [408, 154] });
        S.target({ x: 306, y: 146, r: 30 });
        S.needle({ from: [24, 78], to: [262, 146], label: '25 G 40 mm' });
        S.spread({ x: 306, y: 146, rx: 52, ry: 22, label: '1–3 mL' });
      },
    },
  ],

  checklist: [
    'Point douloureux montré du doigt par le patient et marqué au feutre AVANT la désinfection',
    'Cartographie sensitive pré-bloc tracée (rouleau froid) — sans elle le bloc test n’a pas de valeur',
    'Trois muscles comptés à l’écran et péritoine identifié avant la première ponction',
    'Doppler couleur sur le plan cible (artère iliaque circonflexe profonde)',
    'Patient prévenu du risque de faiblesse transitoire du quadriceps ; test du quadriceps avant le lever, pas de conduite le jour même',
    'Volume et produit exacts tracés dans le dossier (l’interprétation du test en dépend)',
  ],
});
