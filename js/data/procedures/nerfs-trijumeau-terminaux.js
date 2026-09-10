/* Fiche : branches terminales du trijumeau — blocs échoguidés, PRF, cryoneurolyse. */
ECHO.register({
  id: 'nerfs-trijumeau-terminaux',
  titre: 'Branches terminales du trijumeau — blocs échoguidés',
  titreCourt: 'Trijumeau — branches terminales',
  en: 'Ultrasound-guided trigeminal terminal branch blocks — supraorbital, supratrochlear, infraorbital, mental, auriculotemporal nerves; maxillary (V2) and mandibular (V3) nerve block through the mandibular notch (infrazygomatic / coronoid approach)',
  region: 'tete-cou',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Faible à modérée : anatomie et faisabilité bien documentées (cadavres, séries échoguidées), efficacité clinique reposant sur de petites séries et quelques ECR de faible effectif',
  motsCles: ['névralgie du trijumeau', 'V1', 'V2', 'V3', 'supra-orbitaire', 'supratrochléaire', 'infra-orbitaire', 'mentonnier', 'auriculo-temporal', 'nerf maxillaire', 'nerf mandibulaire', 'fosse ptérygo-palatine', 'échancrure sigmoïde', 'zona ophtalmique', 'névralgie post-zostérienne', 'migraine', 'céphalée', 'douleur faciale'],
  maj: '2026-09',
  resume: 'Les foramens de la face sont de petites cibles très superficielles, parfaitement accessibles à une sonde haute fréquence : le foramen se voit comme une **interruption de la ligne corticale**, confirmée par l\'**artère satellite au Doppler**. Trois blocs distaux couvrent l\'essentiel de la face — supra-orbitaire/supratrochléaire (V1), infra-orbitaire (V2), mentonnier (V3) — auxquels s\'ajoutent l\'auriculo-temporal en avant du tragus et, beaucoup plus profond, l\'abord du **nerf maxillaire dans la fosse ptérygo-palatine** ou du **nerf mandibulaire** par l\'**échancrure sigmoïde** (voie coronoïde infrazygomatique décrite par Nader). Ces blocs ont d\'abord une valeur **diagnostique et topographique** : ils disent quelle branche porte la douleur, ce qu\'aucune imagerie ne dit. Leur prolongation (PRF, cryoneurolyse) repose sur des séries, pas sur des essais. Règle absolue : on injecte **au voisinage** du foramen, jamais dedans.',

  flash: {
    position: 'semi-assis', positionNote: 'décubitus dorsal ou semi-assis, tête sur têtière, sans oreiller épais ; œil fermé et protégé par un pansement oculaire pour les blocs de V1',
    sonde: 'hockey', sondeNote: 'hockey stick ou linéaire compacte **12–18 MHz**, profondeur 1,5–2,5 cm pour les foramens ; sonde linéaire 6–13 MHz et profondeur 5–6 cm pour la voie coronoïde',
    approche: 'in-plane', approcheNote: 'in-plane, de latéral en médial pour les foramens de la face ; in-plane postéro-antérieure à travers l\'échancrure sigmoïde pour V2/V3',
    aiguille: '27–30 G 25 mm pour les foramens ; 22–25 G 50–80 mm pour la voie coronoïde ; aiguille RF 22 G extrémité active 5 mm, ou sonde cryo 18–20 G',
    cible: 'Tissu péri-foraminal, **au contact de l\'os, à l\'ostium du foramen mais jamais dans le canal** ; critère de fin : nappe anéchogène qui coiffe l\'orifice et refoule le nerf sans le comprimer dans son canal',
    injectat: '**0,5–2 mL** pour les foramens (1–2 mL par branche), 2–4 mL pour V2/V3 par voie coronoïde — corticoïde **non particulaire** uniquement',
    duree: '5 min par branche · 20–30 min pour la voie coronoïde',
  },

  indications: [
    '**Névralgie trigéminale essentielle** en attente ou en échec relatif du traitement médical (carbamazépine, oxcarbazépine) : bloc **d\'appoint et de cartographie**, pas de traitement de fond. Les recommandations européennes placent le traitement médical puis la chirurgie (décompression vasculaire microchirurgicale, gestes percutanés du ganglion de Gasser, radiochirurgie) — les blocs périphériques n\'y figurent pas comme traitement curatif : ne pas les vendre comme tels.',
    '**Névralgie trigéminale secondaire ou périphérique** : post-traumatique, post-chirurgicale (chirurgie orbitaire, sinusienne, maxillo-faciale, implantologie), post-radique. C\'est ici que le bloc de branche a le plus de sens : la lésion est distale et identifiable.',
    '**Névralgie post-zostérienne de V1** (zona ophtalmique) : territoire supra-orbitaire et supratrochléaire ; bloc et PRF documentés par des séries.',
    '**Neuropathie du nerf alvéolaire inférieur / mentonnier** après extraction dentaire, implant ou ostéotomie : douleur et hypoesthésie du menton et de la lèvre inférieure.',
    '**Névralgie supra-orbitaire ou supratrochléaire** post-traumatique (choc frontal, plaie du sourcil, port de casque ou de lunettes de plongée) — diagnostic souvent porté avec des années de retard.',
    '**Céphalées** : migraine chronique et céphalée cervicogénique, en association au bloc du nerf grand occipital ; névralgie du nerf auriculo-temporal (douleur pré-auriculaire, souvent confondue avec une dysfonction de l\'ATM).',
    '**Douleur faciale idiopathique persistante** : bloc **diagnostique** utile pour montrer au patient (et au dossier) que la douleur n\'a pas de territoire tronculaire net — information cliniquement décisive, même quand le bloc « échoue ».',
    '**Bloc test avant PRF ou cryoneurolyse** d\'une branche identifiée : prérequis absolu, deux blocs concordants.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection ou lésion cutanée au point de ponction (attention à une dermatose ou à un zona en phase éruptive sur le trajet), allergie vraie aux amino-amides, chirurgie orbitaire récente ou implant orbitaire sur le trajet.',
    '**Relatives** : hémostase — les blocs des foramens de la face sont **superficiels et compressibles**, donc à **faible risque hémorragique** au sens des recommandations ASRA-ESRA 2018 sur les procédures de douleur interventionnelle (pas d\'interruption systématique des antiagrégants) ; en revanche l\'**abord de la fosse ptérygo-palatine par voie coronoïde est profond, non compressible et longe l\'artère maxillaire** : il n\'est pas explicitement listé dans ces recommandations, et il faut le gérer comme une procédure de risque **au moins intermédiaire** — c\'est une position de prudence, à confirmer.',
    'Anticoagulation curative et **bloc de V1** : l\'ecchymose péri-orbitaire est quasi systématique et spectaculaire ; prévenir formellement, ou différer.',
    'Glaucome, chirurgie oculaire récente, œil unique : prudence particulière sur les blocs de V1 et de V2 (risque, rare mais décrit, de diffusion intra-orbitaire).',
    '**Corticoïdes** : **non particulaires exclusivement** (dexaméthasone). Les artères de la face sont des artères terminales anastomosées au réseau ophtalmique — un corticoïde particulaire injecté sous pression dans l\'artère supra-orbitaire ou angulaire peut emboliser vers la rétine. Cette règle ne souffre aucune exception.',
    'Injection **jamais forcée** : une résistance élevée signe une pointe intra-canalaire — retirer, ne pas pousser.',
  ],
  alternatives: 'Traitement médical de première ligne dans la névralgie essentielle (carbamazépine, oxcarbazépine ; lamotrigine, baclofène en seconde intention) ; en cas d\'échec ou d\'intolérance : décompression vasculaire microchirurgicale, thermocoagulation ou compression par ballonnet du ganglion de Gasser, radiochirurgie stéréotaxique. Ces options relèvent d\'une filière neurochirurgicale et doivent être proposées explicitement — le rôle de l\'algologue est aussi de ne pas retarder l\'adressage. En douleur neuropathique post-traumatique ou post-chirurgicale de la face : traitement topique (lidocaïne 5 % ; la capsaïcine 8 % n\'est pas applicable au visage), gabapentinoïdes, antidépresseurs, puis bloc de branche et, si réponse reproductible, PRF ou cryoneurolyse. Ne jamais proposer de **neurolyse chimique** (alcool, phénol) sur une branche faciale sensitive : le risque d\'anesthésie douloureuse et de nécrose cutanée est disproportionné en pathologie bénigne.',

  anatomie: `Le trijumeau se divise en trois branches : **V1 (ophtalmique)** par la fissure orbitaire supérieure, **V2 (maxillaire)** par le foramen rond vers la **fosse ptérygo-palatine**, **V3 (mandibulaire)** par le foramen ovale vers la **fosse infratemporale**. Chacune donne des branches terminales qui émergent à la face par un foramen repérable à l\'échographie.

| Nerf | Foramen / repère | Territoire |
|---|---|---|
| **Supra-orbitaire** (V1) | Échancrure ou foramen supra-orbitaire, sur le rebord orbitaire supérieur, à ≈ 2,5 cm de la ligne médiane, sur la verticale de la pupille | Front, paupière supérieure, cuir chevelu jusqu\'au vertex |
| **Supratrochléaire** (V1) | 1 à 1,5 cm en dedans du précédent, au-dessus de la trochlée | Front médian, racine du nez, angle interne |
| **Infra-orbitaire** (V2) | Foramen infra-orbitaire, ≈ 1 cm sous le rebord orbitaire inférieur, sur la verticale de la pupille ; orifice orienté en bas et en dedans | Paupière inférieure, aile du nez, joue, lèvre supérieure |
| **Mentonnier** (V3) | Foramen mentonnier, en regard des racines des prémolaires, ≈ 2–3 cm de la ligne médiane ; orifice orienté en haut et en arrière | Menton, lèvre inférieure, gencive antérieure |
| **Auriculo-temporal** (V3) | En avant du tragus, sur le col du condyle, **en arrière de l\'artère temporale superficielle** | Région pré-auriculaire, ATM, conduit auditif externe, tempe |

### Ce qui compte pour le geste
- **Les trois foramens principaux sont approximativement alignés** sur une verticale passant par la pupille : c\'est le repère palpatoire de départ, l\'échographie fait le reste.
- **Un foramen se reconnaît à une interruption nette de la ligne corticale**, sous laquelle apparaît un contenu hypoéchogène (nerf + artère + veine). Le **Doppler couleur** montre l\'artère satellite : c\'est ce qui distingue un vrai foramen d\'un artefact ou d\'une simple irrégularité osseuse.
- **L\'orientation des canaux commande l\'angle de ponction** : le canal infra-orbitaire est dirigé en **haut, en arrière et en dehors** (donc une aiguille qui entre « droit vers le haut » file vers l\'orbite) ; le canal mentonnier s\'ouvre en **haut et en arrière** ; l\'échancrure supra-orbitaire est ouverte vers le haut. On aborde toujours **tangentiellement**, jamais dans l\'axe du canal.
- **Auriculo-temporal** : il monte avec les vaisseaux temporaux superficiels en avant du tragus. Le nerf est **postérieur** à l\'artère. Le tronc du **nerf facial** est plus profond et plus bas (il sort du foramen stylo-mastoïdien et traverse la parotide) : rester superficiel évite une parésie faciale transitoire.
- **Voie coronoïde (échancrure sigmoïde)** : sonde sous l\'arcade zygomatique, on obtient une fenêtre acoustique entre le **processus coronoïde** (en avant) et le **col du condyle** (en arrière). À travers cette fenêtre : le **muscle ptérygoïdien latéral**, puis la **lame ptérygoïdienne latérale**, ligne osseuse hyperéchogène qui est LE repère du carrefour. La **fosse ptérygo-palatine** (et V2) est **en avant** de cette lame ; le **nerf mandibulaire** et le foramen ovale sont **en arrière et en dedans**. L\'**artère maxillaire** traverse la fosse infratemporale, souvent en plein sur la trajectoire : le Doppler n\'est pas optionnel.
- Profondeurs : foramens de la face **0,4 à 1,2 cm** ; lame ptérygoïdienne latérale **3,5 à 5 cm** ; fosse ptérygo-palatine **4 à 5,5 cm** chez l\'adulte (à moduler selon le morphotype).`,

  installation: {
    patient: `**Décubitus dorsal ou semi-assis**, tête reposant sur une têtière, **sans oreiller épais** (il faut pouvoir approcher la sonde tangentiellement). Cheveux dégagés, lunettes retirées.

Pour les blocs de **V1** : œil homolatéral fermé, **pansement oculaire protecteur** collé avant la désinfection — un antiseptique alcoolique dans l\'œil ruine la séance et la confiance. Pour la voie coronoïde : demander au patient d\'**ouvrir légèrement la bouche** (10–20 mm), ce qui abaisse le processus coronoïde et **élargit la fenêtre acoustique** de l\'échancrure ; le lui faire répéter avant la désinfection, il doit tenir la position pendant le geste.

Prévenir explicitement de l\'**ecchymose péri-orbitaire** possible après un bloc de V1 ou de V2 : elle est bénigne, elle dure 7 à 10 jours, elle est très visible, et c\'est le premier motif de reproche si elle n\'a pas été annoncée.`,
    operateur: `Opérateur **à la tête du patient** ou du côté à traiter, écran de l\'autre côté, dans l\'axe du regard. Sonde tenue en « prise crayon », **auriculaire en appui sur la face du patient** : c\'est la seule façon de stabiliser une sonde sur un plan osseux mobile et convexe.

Foramens de la face : ponction **in-plane, de latéral en médial**, à angle très plat, la pointe abordant l\'ostium tangentiellement. Voie coronoïde : ponction **in-plane à travers la fenêtre de l\'échancrure**, entrée juste en avant du col du condyle, direction antéro-médiale et caudale vers la lame ptérygoïdienne.`,
    sonde: `- **Hockey stick ou linéaire compacte 12–18 MHz** pour les foramens : profondeur **1,5–2,5 cm**, focale à 0,5–1 cm, gain bas (l\'os doit être franchement blanc et l\'interruption corticale lisible).
- **Beaucoup de gel** et **appui minimal** : le plan cible est à moins d\'1 cm, et toute compression écrase le tissu péri-foraminal.
- **Doppler couleur systématique, réglé bas débit** : artère supra-orbitaire, infra-orbitaire, mentonnière, temporale superficielle, maxillaire. L\'artère satellite **confirme** le foramen autant qu\'elle signale le danger.
- Voie coronoïde : sonde **linéaire 6–13 MHz** (ou convexe petit rayon sur morphotype épais), profondeur **5–6 cm**, focale sur la lame ptérygoïdienne, Doppler impératif sur l\'artère maxillaire.
- Aiguille de très petit calibre (27–30 G) : peu échovisible — travailler à angle plat et s\'aider de l\'**hydrolocalisation** par bolus de 0,1–0,2 mL.`,
  },

  reperage: [
    { titre: 'Repérage palpatoire préalable', texte: 'Palper et marquer la **verticale pupillaire** : échancrure supra-orbitaire (sourcil), foramen infra-orbitaire (1 cm sous le rebord orbitaire inférieur), foramen mentonnier (à mi-hauteur du corps mandibulaire, en regard des prémolaires). Ces trois points sont approximativement alignés. Le marquage sert de point de départ, pas de cible.' },
    { titre: 'Foramen supra-orbitaire', texte: 'Sonde **transversale sur le sourcil**, perpendiculaire au rebord orbitaire. Suivre la ligne corticale hyperéchogène du frontal de dedans en dehors : à ≈ 2,5 cm de la ligne médiane apparaît une **encoche en U ou une interruption** — l\'échancrure (ou le foramen). Doppler : l\'**artère supra-orbitaire** y pulse. En glissant 1–1,5 cm en dedans, on trouve le **paquet supratrochléaire**.' },
    { titre: 'Foramen infra-orbitaire', texte: 'Poser la sonde **sur le rebord orbitaire inférieur** (ligne osseuse convexe), puis **descendre de 1 cm** en gardant la ligne corticale du maxillaire : le foramen apparaît comme une **interruption corticale avec contenu hypoéchogène**, confirmée par le Doppler (artère infra-orbitaire). Une bascule (tilt) de 10–15° améliore le contraste de l\'interruption.' },
    { titre: 'Foramen mentonnier', texte: 'Sonde **transversale sur le corps de la mandibule**, à mi-hauteur, glissée d\'avant en arrière depuis la symphyse : interruption de la corticale à environ 2–3 cm de la ligne médiane, avec artère mentonnière au Doppler. Chez l\'édenté, la crête s\'est résorbée et le foramen a **migré vers le bord supérieur** : le chercher plus haut qu\'attendu.' },
    { titre: 'Nerf auriculo-temporal', texte: 'Sonde **transversale en avant du tragus**, sur le col du condyle. Doppler : l\'**artère temporale superficielle** est le repère, très facile. Le nerf est la petite structure ovalaire **immédiatement postérieure** à l\'artère, dans le plan sous-cutané, au-dessus du plan osseux.' },
    { titre: 'Voie coronoïde (V2 / V3)', texte: 'Sonde **sous l\'arcade zygomatique**, orientée dans son axe, bouche entrouverte. On voit le **masséter** en surface, puis deux ombres osseuses : **processus coronoïde en avant, col du condyle en arrière**, encadrant la **fenêtre de l\'échancrure sigmoïde**. À travers elle : **ptérygoïdien latéral**, puis la **lame ptérygoïdienne latérale** (ligne hyperéchogène oblique). La **fosse ptérygo-palatine est en avant de la lame**, **V3 en arrière et en dedans**. Doppler : **artère maxillaire**.' },
    { titre: 'Si on ne trouve pas', texte: 'Foramen invisible : ne pas confondre une **suture** ou un canal accessoire avec le foramen — c\'est le **Doppler** qui tranche (artère satellite). Variantes fréquentes : foramen supra-orbitaire double ou remplacé par une simple échancrure sans corticale complète ; foramen mentonnier accessoire. En cas d\'échec, un bloc **péri-foraminal en éventail** sur la zone marquée reste efficace : ces nerfs sont superficiels et le tissu diffuse bien. Fenêtre coronoïde fermée : faire ouvrir davantage la bouche, ou renoncer — ne jamais piquer à l\'aveugle vers la fosse ptérygo-palatine.' },
  ],

  sonoanatomie: [
    { structure: 'Ligne corticale (frontal, maxillaire, mandibule)', aspect: 'Ligne hyperéchogène continue avec cône d\'ombre net', repere: 'Le foramen est son **interruption**' },
    { structure: 'Foramen / échancrure', aspect: 'Solution de continuité de la corticale, contenu hypoéchogène', repere: 'Confirmé par le Doppler ; profondeur 0,4–1,2 cm' },
    { structure: 'Artère satellite (supra-orbitaire, infra-orbitaire, mentonnière)', aspect: 'Petit signal pulsatile en Doppler couleur réglé bas débit', repere: 'Signe le foramen **et** la structure à éviter' },
    { structure: 'Nerf terminal', aspect: 'Petite structure ovalaire de 1–2 mm, souvent non individualisée en mode B', repere: 'Cible = l\'espace péri-foraminal, pas le nerf lui-même' },
    { structure: 'Muscles peauciers (frontal, orbiculaire, élévateur de la lèvre)', aspect: 'Fines couches musculaires striées entre peau et os', repere: 'Traversés par l\'aiguille ; injecter dessous, au contact osseux' },
    { structure: 'Artère temporale superficielle (auriculo-temporal)', aspect: 'Artère superficielle très pulsatile en avant du tragus', repere: 'Le nerf est **juste en arrière** d\'elle' },
    { structure: 'Processus coronoïde / col du condyle', aspect: 'Deux arcs hyperéchogènes avec ombre, encadrant une fenêtre', repere: 'La fenêtre s\'élargit bouche entrouverte' },
    { structure: 'Lame ptérygoïdienne latérale', aspect: 'Ligne hyperéchogène oblique profonde avec ombre franche', repere: '**Repère central** : V2 en avant, V3 en arrière et en dedans' },
    { structure: 'Artère maxillaire', aspect: 'Artère de bon calibre traversant la fosse infratemporale, très visible au Doppler', repere: 'Souvent sur la trajectoire ; à cartographier avant de piquer' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist. Protection oculaire collée pour les blocs de V1. Désinfection avec un antiseptique **non alcoolique** au voisinage de l\'œil. Seringue de 2 mL (Luer-lock, pour contrôler la pression), aiguille 27–30 G 25 mm. Gel stérile en couche épaisse.' },
    { titre: 'Anesthésie cutanée', texte: 'Inutile avec une 30 G : la papule déforme un plan situé à 5 mm et masque le foramen. Un patch anesthésiant posé 45 min avant suffit chez le patient anxieux ou allodynique.' },
    { titre: 'Ponction in-plane, tangentielle', texte: 'Entrer à 5–10 mm du bord latéral de la sonde, **angle 10–20°**, pointe suivie en permanence. Traverser le plan musculaire peaucier et venir **au contact de l\'os, à 2–3 mm en dehors de l\'ostium**. **Ne jamais engager la pointe dans le canal** : c\'est ainsi qu\'on crée une neuropathie iatrogène là où l\'on venait traiter une douleur.' },
    { titre: 'Test d\'hydrolocalisation', texte: 'Aspiration. Injecter **0,1 à 0,2 mL** : une nappe anéchogène doit apparaître **au contact osseux**, coiffant l\'ostium. Si le liquide reste sous-cutané → trop superficiel. Si l\'injection est **dure**, ou si le patient décrit une décharge électrique dans le territoire → **la pointe est dans le canal : retirer immédiatement de 2 mm**, ne jamais forcer.' },
    { titre: 'Injection et critère de fin', texte: '**0,5 à 2 mL** par branche, injectés lentement, en surveillant la formation d\'une lentille péri-foraminale de 5–10 mm qui refoule doucement les tissus. Un volume plus important n\'améliore rien et diffuse vers l\'orbite ou la joue. Retrait, **compression ferme 2 à 3 minutes** — c\'est ce qui limite l\'ecchymose.' },
    { titre: 'Voie coronoïde (V2 / V3) — spécificités', texte: 'Bouche entrouverte maintenue. Aiguille 22–25 G 50–80 mm in-plane à travers la fenêtre. Progresser jusqu\'au **contact de la lame ptérygoïdienne latérale**, puis reculer de 2–3 mm et réorienter : **en avant** pour la fosse ptérygo-palatine (V2), **en arrière et en dedans** pour V3. Doppler avant chaque avancée, aspiration avant chaque bolus, **2 à 4 mL fractionnés par 1 mL**. Critère de fin : nappe anéchogène dans la fosse, en avant de la lame, sans reflux vasculaire.' },
    { titre: 'Après le geste', texte: 'Tester le territoire hypoesthésié à 10 min et **le dessiner dans le dossier**. Pour V1/V2 : vérifier l\'absence de diplopie, de baisse d\'acuité visuelle et de ptosis. Pour l\'auriculo-temporal et la voie coronoïde : vérifier la **motricité faciale** et l\'absence de trismus. EN avant / à 30 min. Consignes écrites, glace 10 min sur le point de ponction, prévenir de l\'ecchymose.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique d\'une branche | Lidocaïne 1 % ou ropivacaïne 0,2 % | **0,5–1 mL** | Petit volume **délibéré** : au-delà de 2 mL la diffusion couvre les branches voisines et le bloc ne dit plus rien du territoire |
| Bloc thérapeutique (névralgie post-traumatique, NPZ) | Ropivacaïne 0,2 % + **dexaméthasone 2–4 mg** | 1–2 mL par branche | Corticoïde **non particulaire obligatoire** — artères terminales anastomosées au réseau ophtalmique |
| Migraine / céphalée (association au bloc grand occipital) | Lidocaïne 1–2 % ou ropivacaïne 0,2 %, ± dexaméthasone | 1–2 mL par site | Schémas publiés sans corticoïde également efficaces ; le corticoïde n\'est pas indispensable |
| Nerf auriculo-temporal | Ropivacaïne 0,2 % | 1–2 mL | Cible **en arrière** de l\'artère temporale superficielle, dans le plan sous-cutané ; ne pas plonger vers la parotide (tronc du nerf facial) |
| Nerf maxillaire (V2) ou mandibulaire (V3), voie coronoïde | Ropivacaïne 0,2–0,375 %, ± dexaméthasone 4 mg | **2–4 mL** | Fractionner par 1 mL, aspiration entre chaque ; artère maxillaire à proximité immédiate |
| Avant PRF / cryoneurolyse | Sérum physiologique ou lidocaïne 1 % | 0,3–0,5 mL | Volume minimal : ne pas déplacer le nerf hors de portée de l\'électrode ou de la sonde cryo |

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne/lévobupivacaïne 2–2,5 mg/kg. Les volumes sont ici dérisoires ; **le vrai risque est la voie**, pas la dose — injection intra-artérielle rétrograde vers le réseau ophtalmique.

**Jamais de corticoïde particulaire à la face.** Bétaméthasone, méthylprednisolone et triamcinolone sont proscrites sur ces sites. Cette règle n\'est pas une précaution de style : c\'est la principale cause évitable de complication ischémique décrite après infiltration de la face.`,

  variantes: [
    { titre: 'Bloc supratrochléaire associé au supra-orbitaire', texte: 'Les deux territoires se chevauchent sur le front médian : un bloc supra-orbitaire isolé laisse souvent une bande douloureuse médiane. En pratique, on complète par **0,5–1 mL** 1 à 1,5 cm en dedans du foramen supra-orbitaire, au-dessus de la trochlée, au contact osseux. C\'est le geste standard dans la névralgie post-zostérienne de V1 et dans la névralgie frontale post-traumatique.' },
    { titre: 'Voie intra-orale du nerf infra-orbitaire', texte: 'Aiguille introduite dans le **sillon gingivo-labial supérieur**, en regard de la canine, dirigée vers le foramen palpé et repéré par la sonde posée sur la joue. Avantage : pas de point de ponction cutané, pas d\'ecchymose visible, trajet court. Inconvénients : asepsie buccale imparfaite, contrôle échographique moins confortable (l\'aiguille arrive de l\'autre côté du plan). À réserver aux patients qui refusent une ponction cutanée du visage.' },
    { titre: 'Radiofréquence pulsée d\'une branche terminale', texte: 'Après **deux blocs tests concordants**. Aiguille RF 22 G à extrémité active 5 mm placée sous échographie au contact péri-foraminal, **jamais dans le canal**. Stimulation sensitive 50 Hz : paresthésies dans le territoire à < 0,5 V. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120–360 s**. Séries publiées surtout sur le nerf supra-orbitaire dans la névralgie post-zostérienne de V1 et sur l\'infra-orbitaire. **Niveau de preuve faible** (séries prospectives, pas d\'ECR en aveugle) : à annoncer comme tel.' },
    { titre: 'Cryoneurolyse d\'une branche terminale', texte: 'Sonde cryo 18–20 G placée au contact du nerf après hydrodissection, cycles de gel 2 min / dégel 30 s × 2–3. Intérêt : durée de 2 à 6 mois, régénération axonale attendue, **risque de neurome plus faible qu\'avec une neurolyse chimique**. Données : séries et cas cliniques, aucune comparaison randomisée sur ces branches. Prévenir de l\'hypoesthésie du territoire, qui est le prix à payer et qui n\'est pas toujours bien tolérée sur le visage.' },
    { titre: 'Nerf maxillaire — voie suprazygomatique', texte: 'Alternative à la voie coronoïde pour atteindre la fosse ptérygo-palatine : point d\'entrée dans l\'angle formé par le bord supérieur de l\'arcade zygomatique et le bord postérieur de l\'apophyse orbitaire du frontal, aiguille dirigée en bas, en avant et en dedans. Bien décrite en anesthésie pédiatrique (chirurgie de fente palatine) sous échographie. La voie coronoïde a l\'avantage de **voir la lame ptérygoïdienne et l\'artère maxillaire** pendant toute la progression.' },
    { titre: 'Hydrodissection péri-foraminale', texte: 'Sérum physiologique ou dextrose 5 % (2–3 mL) pour libérer une branche adhérente dans une cicatrice ou un tissu fibreux post-chirurgical. Option à faible risque quand on veut éviter le corticoïde ; répétable. Preuve : séries, transposée d\'autres sites périphériques — **à confirmer** sur les branches faciales.' },
  ],

  pearls: [
    'Le foramen se **trouve au Doppler**, pas à l\'œil : chercher la petite artère satellite, l\'interruption corticale suit.',
    'Injecter **au contact de l\'os, à côté de l\'ostium** : la cible est un espace, pas un trou. Une aiguille dans le canal transforme un bloc en traumatisme nerveux.',
    'Le bon volume est **le plus petit possible**. Un bloc de 0,5 mL qui soulage dit quelle branche est en cause ; un bloc de 4 mL qui soulage ne dit rien.',
    'Bouche entrouverte de 10–20 mm pour la voie coronoïde : c\'est ce qui ouvre la fenêtre acoustique. Le faire répéter au patient avant la désinfection.',
    'Compression ferme 2–3 min après tout bloc de V1 ou de V2, systématiquement : c\'est la seule prévention efficace de l\'ecchymose péri-orbitaire.',
    'Chez l\'édenté, le foramen mentonnier a migré vers le **bord supérieur** de la mandibule résorbée : le chercher là où il ne « devrait » pas être.',
    'Une douleur pré-auriculaire étiquetée « ATM » qui cède à 1 mL sur le nerf auriculo-temporal change complètement la prise en charge — et le geste prend 5 minutes.',
  ],
  pieges: [
    'Confondre une **suture osseuse** ou une irrégularité corticale avec un foramen : sans artère au Doppler, ce n\'est pas un foramen.',
    'Piquer **dans l\'axe du canal** infra-orbitaire (dirigé en haut, en arrière et en dehors) : la pointe file vers le plancher de l\'orbite.',
    'Forcer sur une injection résistante : signe d\'une pointe intra-canalaire, avec compression du nerf dans un espace inextensible.',
    'Utiliser un corticoïde particulaire « comme ailleurs » : c\'est la faute la plus grave de cette fiche.',
    'Sur l\'auriculo-temporal, piquer trop profond et bloquer le tronc du **nerf facial** : parésie faciale transitoire, patient terrorisé.',
    'Ne pas annoncer l\'ecchymose péri-orbitaire : elle survient, elle est spectaculaire, et elle n\'est pardonnée que si elle a été annoncée.',
    'Voie coronoïde sans Doppler : l\'artère maxillaire traverse le champ, et l\'injection intra-artérielle y est décrite.',
    'Présenter un bloc de branche comme un traitement de la névralgie trigéminale essentielle : c\'est faux, et cela retarde l\'accès à la filière neurochirurgicale.',
  ],
  complications: [
    '**Ecchymose et hématome péri-orbitaires** : très fréquents après bloc de V1/V2, bénins, 7–10 jours. CAT : compression 3 min, glace, réassurance. Prévention = annonce + compression.',
    '**Injection intra-canalaire avec neuropathie iatrogène** : dysesthésies, hypoesthésie durable, parfois aggravation de la douleur initiale. C\'est la complication spécifique de ces blocs et elle est **entièrement évitable** : ne jamais entrer dans le foramen, ne jamais forcer.',
    '**Diffusion intra-orbitaire** (par le canal infra-orbitaire ou le foramen supra-orbitaire) : diplopie transitoire, ptosis, très rarement baisse d\'acuité visuelle. CAT : occlusion de l\'œil, avis ophtalmologique **immédiat** si baisse d\'acuité ou douleur oculaire — ne pas temporiser.',
    '**Embolie artérielle rétinienne ou cutanée** après corticoïde particulaire : rarissime mais catastrophique et irréversible. Prévention absolue = corticoïde non particulaire uniquement.',
    '**Injection intravasculaire** (artère temporale superficielle, artère maxillaire) : goût métallique, acouphènes, convulsion. Volumes faibles, mais l\'artère maxillaire justifie le fractionnement strict. CAT : arrêt, O₂, protocole d\'intoxication aux AL.',
    '**Parésie faciale transitoire** après bloc auriculo-temporal trop profond ou voie coronoïde : régressive avec l\'AL. CAT : protection oculaire (larmes artificielles, occlusion nocturne), réassurance.',
    '**Trismus** après voie coronoïde (traumatisme du ptérygoïdien latéral) : quelques jours, kinésithérapie douce.',
    '**Hypoesthésie du territoire** après PRF ou cryoneurolyse : attendue, mais mal tolérée sur le visage — à discuter explicitement avant, pas après.',
  ],
  securite: [
    '**Foramens de la face : faible risque hémorragique** (ASRA-ESRA 2018, sites superficiels et compressibles) ; pas d\'interruption systématique des antiagrégants. **Voie coronoïde / fosse ptérygo-palatine : site profond non compressible longeant l\'artère maxillaire** — non explicitement listée dans ces recommandations, à gérer par prudence comme une procédure de risque au moins intermédiaire (**à confirmer**).',
    '**Corticoïde non particulaire exclusivement.** Règle sans exception à la face.',
    '**Doppler couleur avant chaque ponction**, réglé bas débit : l\'artère satellite localise le foramen et signale le vaisseau à éviter.',
    '**Ne jamais engager la pointe dans un foramen ; ne jamais forcer une injection.** Résistance élevée ou décharge électrique = retrait immédiat.',
    'Seringue **Luer-lock de petit volume (1–2 mL)** : elle permet de sentir la pression d\'injection, ce qu\'une seringue de 10 mL ne permet pas.',
    'Protection oculaire pour tout geste sur V1/V2 ; antiseptique non alcoolique au voisinage de l\'œil.',
    'Compression 2–3 min après retrait, systématiquement.',
    'Documenter à chaque fois : branche bloquée, volume, territoire hypoesthésié dessiné, EN avant/après, incidents.',
  ],

  suivi: `- **J0** : EN avant / à 30 min ; **cartographie dessinée** du territoire hypoesthésié — c\'est la donnée qui donne sa valeur au bloc ; vérification oculomotrice et visuelle (V1/V2), motricité faciale (auriculo-temporal, voie coronoïde).
- **J1–J7** : EN quotidienne, nombre de crises et durée pour une névralgie paroxystique, retentissement alimentaire (mastication, hygiène dentaire) et sur le sommeil, consommation d\'antalgiques. Un bloc diagnostique se juge sur la **durée de l\'AL** ; un bloc thérapeutique sur 2 à 4 semaines.
- **J15–J30** : décision — répéter (série de 2 à 3 blocs espacés de 2 à 4 semaines), passer à la **PRF ou à la cryoneurolyse** si réponse franche mais brève et reproductible sur deux blocs, ou **réorienter** vers la filière neurochirurgicale si névralgie essentielle résistante.
- **3 mois** : EN, DN4, retentissement fonctionnel, traitement de fond. Réévaluer le diagnostic si deux blocs bien conduits sur la bonne branche n\'ont rien donné : une douleur sans territoire tronculaire n\'est pas une névralgie de branche.
- **Toujours en parallèle** : traitement médical de la douleur neuropathique, prise en charge dentaire ou ORL de la cause quand elle existe, et accompagnement psychologique dans la douleur faciale idiopathique persistante — les blocs seuls n\'y suffisent jamais.`,

  evidence: `- **Faisabilité et exactitude anatomique** : le repérage échographique des foramens supra-orbitaire, infra-orbitaire et mentonnier est bien établi, avec des travaux de description technique et des **contrôles cadavériques au colorant** montrant une bonne exactitude du dépôt péri-foraminal. C\'est le socle solide de cette fiche : on sait qu\'on met le produit au bon endroit.
- **Voie ptérygo-palatine échoguidée (Nader et coll., *Pain Physician* 2013)** : description de l\'abord infrazygomatique par l\'échancrure sigmoïde chez des patients souffrant de névralgie trigéminale et de douleur faciale atypique, avec résultats favorables. **Série, pas d\'essai randomisé.**
- **Bloc maxillaire suprazygomatique échoguidé** : bien documenté en **anesthésie pédiatrique** (chirurgie de fente palatine), avec des données prospectives sur la faisabilité et l\'efficacité analgésique. Transposition à la douleur chronique de l\'adulte : plausible, non démontrée.
- **Céphalées** : plusieurs travaux, dont un suivi clinique à 6 mois de blocs supra-orbitaire et infra-orbitaire chez des migraineux, rapportent une réduction de la fréquence des crises. Effectifs faibles, méthodologies hétérogènes, effet placebo non contrôlé dans la plupart. **Preuve faible.**
- **Névralgie trigéminale essentielle** : les recommandations européennes (Académie européenne de neurologie, Bendtsen et coll. 2019) et les revues de référence retiennent la carbamazépine et l\'oxcarbazépine en première ligne, puis la chirurgie ; **les blocs périphériques n\'y sont pas positionnés comme traitement**. Leur place ici est diagnostique et transitoire — c\'est une limite à énoncer au patient.
- **PRF et cryoneurolyse des branches terminales** : séries prospectives et cas cliniques, principalement sur le nerf supra-orbitaire dans la névralgie post-zostérienne de V1 et sur l\'infra-orbitaire. **Aucun essai randomisé en aveugle.** Effet rapporté de 3 à 6 mois.
- **Ce que la littérature ne dit pas** : pas de comparaison échographie vs repères palpatoires sur des critères cliniques ; pas de consensus sur le volume optimal ; pas de donnée sur le nombre de blocs d\'une série ; pas d\'étude de sécurité de puissance suffisante sur la voie ptérygo-palatine échoguidée. **Grade global faible à modéré, assumé.**`,

  references: [
    { auteurs: 'Nader A, Kendall MC, De Oliveira GS, et al.', titre: 'Ultrasound-guided trigeminal nerve block via the pterygopalatine fossa: an effective treatment for trigeminal neuralgia and atypical facial pain', revue: 'Pain Physician', annee: '2013', type: 'série prospective', verif: false, note: 'Description de la voie infrazygomatique par l\'échancrure sigmoïde.' },
    { auteurs: 'Tsui BC', titre: 'Ultrasound imaging to localize foramina for superficial trigeminal nerve block', revue: 'Can J Anaesth', annee: '2009', type: 'technique', verif: false },
    { auteurs: 'Spinner D, Kirschner JS', titre: 'Accuracy of ultrasound-guided superficial trigeminal nerve blocks using methylene blue in cadavers', revue: 'Pain Med', annee: '2012', type: 'étude cadavérique', verif: false },
    { auteurs: 'Sola C, Raux O, Savath L, et al.', titre: 'Ultrasound guidance characteristics and efficiency of suprazygomatic maxillary nerve blocks in infants: a descriptive prospective study', revue: 'Paediatr Anaesth', annee: '2012', type: 'série prospective', verif: false },
    { auteurs: 'Allam AE, Khalil AAF, Eltawab BA, Wu WT, Chang KV', titre: 'Ultrasound-guided intervention for treatment of trigeminal neuralgia: an updated review of anatomy and techniques', revue: 'Pain Res Manag', annee: '2018', type: 'revue', verif: false },
    { auteurs: 'Bendtsen L, Zakrzewska JM, Abbott J, et al.', titre: 'European Academy of Neurology guideline on trigeminal neuralgia', revue: 'Eur J Neurol', annee: '2019', type: 'reco', verif: false, note: 'Positionne carbamazépine/oxcarbazépine puis chirurgie ; les blocs périphériques n\'y sont pas un traitement de fond.' },
    { auteurs: 'Cruccu G, Di Stefano G, Truini A', titre: 'Trigeminal neuralgia', revue: 'N Engl J Med', annee: '2020', type: 'revue', verif: false },
    { auteurs: 'Ilhan Alp S, Alp R', titre: 'Supraorbital and infraorbital nerve blockade in migraine patients: results of 6-month clinical follow-up', revue: 'Eur Rev Med Pharmacol Sci', annee: '2013', type: 'série', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'trig-supraorbitaire', section: 'sonoanatomie', titre: 'Échancrure supra-orbitaire — coupe transversale sur le sourcil',
      legende: 'La corticale du frontal est une ligne blanche continue ; l\'échancrure (ou foramen) supra-orbitaire en est l\'interruption, à environ 2,5 cm de la ligne médiane, sur la verticale de la pupille. L\'artère supra-orbitaire, repérée au Doppler, confirme le site. Le paquet supratrochléaire est 1 à 1,5 cm en dedans. Tout est à moins d\'1 cm de profondeur : sonde haute fréquence, beaucoup de gel, appui minimal.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse sur le sourcil', type: 'hockey stick 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 26 });
        S.muscle({ path: 'M0 82 L640 82 L640 146 L0 152 Z', label: 'M. frontal / orbiculaire', at: [452, 114], opacity: 0.45 });
        S.fascia({ points: [[0, 152], [640, 146]], width: 1.3, opacity: 0.55 });
        S.nerve({ x: 168, y: 216, r: 8 });
        S.artery({ x: 146, y: 220, r: 5 });
        S.label({ x: 148, y: 182, text: 'Paquet supratrochléaire\n(1–1,5 cm en dedans)', anchor: 'middle', cls: 'lbl-nerve', small: true, lead: [164, 208] });
        S.bone({ path: 'M0 254 L120 252 L200 250 L336 248 L344 292 Q360 312 378 292 L386 248 L500 250 L640 254', label: 'Corticale du frontal (rebord orbitaire)', at: [160, 348], ldy: 0, small: true });
        S.nerve({ x: 366, y: 268, r: 9 });
        S.label({ x: 452, y: 290, text: 'N. supra-orbitaire', anchor: 'start', cls: 'lbl-nerve', small: true, lead: [376, 270] });
        S.artery({ x: 344, y: 270, r: 6 });
        S.label({ x: 264, y: 292, text: 'A. supra-orbitaire\n(Doppler)', anchor: 'end', cls: 'lbl-artery', small: true, lead: [337, 272] });
        S.label({ x: 410, y: 376, text: 'Échancrure = interruption corticale', anchor: 'middle', cls: 'lbl-bone', small: true });
        S.target({ x: 390, y: 244, r: 15 });
        S.label({ x: 452, y: 214, text: 'Cible : au contact de l\'os,\nà côté de l\'ostium', anchor: 'start', cls: 'lbl-target', small: true, lead: [402, 238] });
      },
    },
    {
      id: 'trig-infraorbitaire', section: 'technique', titre: 'Foramen infra-orbitaire — aiguille in-plane, tangentielle',
      legende: 'Sonde posée sur le rebord orbitaire inférieur puis descendue de 1 cm : le foramen apparaît comme une interruption corticale avec artère satellite. L\'aiguille arrive de dehors en dedans, à angle très plat, et s\'arrête au contact osseux à 2–3 mm de l\'ostium. Le canal est dirigé en haut, en arrière et en dehors : une aiguille engagée dans son axe file vers le plancher de l\'orbite. Volume 1–2 mL, jamais forcé.',
      opts: { depth: 2.5 },
      build: S => {
        S.orient({ left: 'Médial (nez)', right: 'Latéral' }).probeInfo({ plan: 'Transverse, 1 cm sous le rebord orbitaire', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 70 L640 70 L640 134 L0 140 Z', label: 'Élévateur de la lèvre / orbiculaire', at: [180, 106], opacity: 0.45 });
        S.fat({ path: 'M0 140 L640 134 L640 176 L0 184 Z' });
        S.bone({ path: 'M0 236 L120 220 L226 210 L288 206 L296 250 Q312 270 330 250 L338 206 L430 210 L540 224 L640 240', label: 'Corticale du maxillaire', at: [150, 320], ldy: 0, small: true });
        S.nerve({ x: 316, y: 226, r: 9 });
        S.artery({ x: 296, y: 228, r: 5 });
        S.label({ x: 232, y: 268, text: 'N. + A. infra-orbitaires\ndans le foramen', anchor: 'end', cls: 'lbl-nerve', small: true, lead: [300, 236] });
        S.label({ x: 396, y: 300, text: 'Canal dirigé en haut, en arrière\net en dehors → ne pas s\'y engager', anchor: 'middle', cls: 'lbl-bone', small: true });
        S.label({ x: 20, y: 384, text: 'Rebord orbitaire inférieur : 1 cm en crânial, hors coupe', anchor: 'start', cls: 'lbl-bone', small: true });
        S.target({ x: 350, y: 200, r: 15 });
        S.needle({ from: [640, 108], to: [356, 200], label: '27–30 G, angle 10–20°' });
        S.spread({ x: 324, y: 202, rx: 46, ry: 13, label: '1–2 mL' });
      },
    },
    {
      id: 'trig-coronoide', section: 'technique', titre: 'Voie coronoïde — V2 (fosse ptérygo-palatine) et V3 par l\'échancrure sigmoïde',
      legende: 'Sonde sous l\'arcade zygomatique, bouche entrouverte de 10–20 mm : le processus coronoïde et le col du condyle encadrent une fenêtre acoustique. À travers elle, le ptérygoïdien latéral puis la lame ptérygoïdienne latérale, repère central du carrefour : la fosse ptérygo-palatine (V2) est en avant, le nerf mandibulaire (V3) en arrière et en dedans. L\'artère maxillaire traverse la trajectoire — le Doppler n\'est pas optionnel.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Sous-zygomatique, axe de l\'arcade', type: 'in-plane, bouche entrouverte' });
        S.skin({ thickness: 7, fatBelow: 14 });
        S.muscle({ path: 'M0 62 L640 58 L640 156 L0 164 Z', label: 'Masséter', at: [86, 112], opacity: 0.5 });
        S.bone({ path: 'M56 178 L196 170', label: 'Processus coronoïde', at: [116, 214], ldy: 0, small: true });
        S.bone({ path: 'M452 168 L618 180', label: 'Col du condyle', at: [538, 216], ldy: 0, small: true });
        S.label({ x: 324, y: 152, text: 'Échancrure sigmoïde (fenêtre)', anchor: 'middle', cls: 'lbl-bone', small: true });
        S.muscle({ path: 'M204 186 L444 184 L440 268 L208 270 Z', label: 'M. ptérygoïdien latéral', at: [298, 198], opacity: 0.5 });
        S.artery({ x: 288, y: 232, r: 9 });
        S.label({ x: 266, y: 226, text: 'A. maxillaire', anchor: 'end', cls: 'lbl-artery', small: true, lead: [279, 231] });
        S.bone({ path: 'M240 346 L338 300', label: '' });
        S.label({ x: 352, y: 300, text: 'Lame ptérygoïdienne latérale', anchor: 'start', cls: 'lbl-bone', small: true, lead: [334, 304] });
        S.region({ path: 'M198 302 Q238 296 252 330 Q250 368 216 374 Q188 358 188 330 Q188 308 198 302 Z', fill: '#7d868e', opacity: 0.3 });
        S.label({ x: 186, y: 296, text: 'Fosse ptérygo-palatine (V2)', anchor: 'end', cls: 'lbl-region', small: true, lead: [212, 322] });
        S.nerve({ x: 382, y: 334, r: 11 });
        S.label({ x: 402, y: 360, text: 'N. mandibulaire (V3)', anchor: 'start', cls: 'lbl-nerve', small: true, lead: [390, 340] });
        S.needle({ from: [560, 66], to: [246, 326], label: '22–25 G 50–80 mm' });
        S.spread({ x: 226, y: 336, rx: 34, ry: 18, label: '2–4 mL' });
      },
    },
  ],

  checklist: [
    'Protection oculaire collée et antiseptique non alcoolique pour tout geste sur V1 / V2',
    'Verticale pupillaire palpée et marquée avant l\'échographie (repère de départ, pas de cible)',
    'Foramen confirmé par l\'artère satellite au Doppler, pas seulement par l\'aspect de la corticale',
    'Seringue Luer-lock de 1–2 mL : on doit sentir la pression d\'injection',
    'Aucune progression dans le canal ; arrêt immédiat si résistance ou décharge électrique',
    'Corticoïde non particulaire exclusivement (règle sans exception à la face)',
    'Voie coronoïde : bouche entrouverte 10–20 mm maintenue, Doppler sur l\'artère maxillaire avant chaque avancée',
    'Compression ferme 2–3 min après retrait ; ecchymose péri-orbitaire annoncée AVANT le geste',
    'Territoire hypoesthésié dessiné dans le dossier ; oculomotricité, acuité visuelle et motricité faciale vérifiées avant la sortie',
  ],
});
