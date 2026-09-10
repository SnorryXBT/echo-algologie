/* Fiche : nerf fibulaire commun au col de la fibula — bloc, hydrodissection, PRF.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références non revérifiées → verif:false. */
ECHO.register({
  id: 'nerf-fibulaire-commun',
  titre: `Nerf fibulaire commun au col de la fibula — bloc, hydrodissection et PRF`,
  titreCourt: `Nerf fibulaire commun`,
  en: `Ultrasound-guided common fibular (peroneal) nerve block and hydrodissection at the fibular neck (fibular tunnel, arcade of peroneus longus); pulsed radiofrequency; intraneural ganglion detection`,
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: `Faible — séries et avis d'experts ; l'hydrodissection est extrapolée des essais sur le canal carpien. En revanche l'apport **diagnostique** de l'échographie est solidement établi`,
  maj: '2026-09',
  motsCles: ['fibulaire commun', 'péronier commun', 'SPE', 'sciatique poplité externe', 'col de la fibula', 'tunnel fibulaire', 'arcade du long fibulaire', 'steppage', 'neuropathie compressive', 'kyste intraneural', 'ganglion', 'hydrodissection', 'névrome', 'douleur du moignon'],
  resume: `Le nerf fibulaire commun est le nerf le plus fréquemment comprimé du membre inférieur, et le plus facile à voir en échographie : superficiel, contre un repère osseux constant, il s'explore en trois minutes sur toute sa longueur. C'est aussi la fiche où **l'imagerie prime sur le geste**. Avant de penser à infiltrer, l'échographie doit répondre à une question : y a-t-il un **kyste intraneural** ? Cette formation kystique qui remonte le nerf depuis l'articulation tibio-fibulaire supérieure par la branche articulaire (théorie unifiante de Spinner) est une **indication chirurgicale**, et l'infiltrer serait une erreur. Une fois ce diagnostic écarté, on dispose de l'hydrodissection au dextrose 5 %, du bloc diagnostique et de la radiofréquence pulsée. Ce qu'on ne fait **jamais** ici : une radiofréquence thermique ou une cryoneurolyse — le nerf est **mixte**, et le prix d'une erreur est un steppage.`,

  flash: {
    position: 'lateral', positionNote: `décubitus latéral, **côté à traiter vers le haut**, genou fléchi 20–30°, coussin entre les jambes ; le décubitus dorsal avec rotation interne de hanche est une alternative acceptable`,
    sonde: 'lineaire', sondeNote: `12–18 MHz, profondeur 2–3 cm ; sonde hockey confortable sur le relief du col`,
    approche: 'in-plane', approcheNote: `transversale au col de la fibula, aiguille **antéro-postérieure ou postéro-antérieure** selon la face du nerf à décoller — on fait souvent les deux dans le même geste`,
    aiguille: `25 G 40–50 mm (22 G si hydrodissection de gros volume) ; électrode RF 22 G pointe active 5 mm pour la PRF`,
    cible: `Espace **entre le nerf et le périoste du col**, sous l'arcade du long fibulaire — critère de fin = **halo anéchogène circonférentiel** décollant le nerf sur 3–4 cm`,
    injectat: `5–10 mL de dextrose 5 % (hydrodissection) · 2–4 mL d'AL pour un bloc diagnostique · corticoïde faible dose en option`,
    duree: `8–12 min · 20–30 min avec PRF`,
  },

  indications: [
    `**Neuropathie compressive du fibulaire commun au tunnel fibulaire** : douleur latérale de jambe et dorsale de pied, paresthésies du dos du pied et du premier espace, signe de Tinel au col, avec ou sans déficit moteur — après ablation du facteur causal (jambes croisées, plâtre, position accroupie prolongée, amaigrissement rapide) et échec de 4–6 semaines de traitement conservateur.`,
    `**Douleur neuropathique post-traumatique ou post-chirurgicale** : fracture du col de la fibula, entorse grave du genou, chirurgie du genou ou de la tibio-fibulaire supérieure, ostéotomie, positionnement peropératoire.`,
    `**Névrome** d'une branche terminale, **douleur du moignon** ou **douleur de membre fantôme** après amputation transtibiale : le fibulaire commun est l'une des deux cibles à traiter (avec le tibial) — bloc test, puis PRF ou traitement du névrome (voir la fiche Névrome cicatriciel).`,
    `**Bloc test diagnostique** : distinguer une neuropathie fibulaire d'une radiculopathie L5, d'une atteinte du sciatique plus haut située ou d'une atteinte centrale. C'est un usage majeur et souvent négligé.`,
    `**Bilan d'un pied tombant** : ici l'échographie est **diagnostique** — mesurer la surface de section (CSA), chercher un **kyste intraneural**, une masse compressive, une fracture, une bride fibreuse. Le geste n'est envisagé qu'après.`,
  ],
  contreIndications: [
    `**Absolues** : infection cutanée au point de ponction ; allergie documentée.`,
    `**Absolue de principe — la plus importante de la fiche** : **pas de radiofréquence thermique ni de cryoneurolyse sur ce nerf**. Il est **mixte** : le contingent moteur commande le relèvement du pied et l'éversion. Une lésion de neurotmèse fonctionnelle donne un **steppage** définitif ou prolongé. Seules la PRF (non lésionnelle) et l'hydrodissection sont légitimes.`,
    `**Kyste intraneural identifié** : ce n'est pas une contre-indication à ponctionner par principe, c'est une **indication chirurgicale**. L'infiltration ne traite pas la cause (la connexion articulaire) et retarde la prise en charge. **Orienter.**`,
    `**Déficit moteur installé et progressif** : avis neurologique et chirurgical, EMG, imagerie — le geste antalgique ne doit pas retarder une décompression.`,
    `**Relatives** : anticoagulation curative (site superficiel, mais nerf au contact de l'artère tibiale antérieure à sa naissance et de la récurrente tibiale antérieure) ; patient à risque de chute (un bloc du fibulaire donne un pied tombant transitoire).`,
    `**Hémostase** : geste de **faible risque hémorragique** (ASRA-ESRA 2018), superficiel et compressible — pas d'arrêt des antiagrégants, anticoagulants au cas par cas.`,
  ],
  alternatives: `**Avant tout** : supprimer la cause. Une neuropathie fibulaire par appui (jambes croisées, plâtre, alitement, station accroupie professionnelle) guérit souvent seule quand la compression cesse. Attelle releveur si déficit moteur, pour prévenir la rétraction du triceps.

Ensuite : traitement de fond des douleurs neuropathiques (gabapentinoïdes, duloxétine, amitriptyline, emplâtre de lidocaïne 5 % sur le territoire allodynique). Puis, selon l'imagerie : **décompression chirurgicale** du tunnel fibulaire (indication solide en cas de compression documentée avec déficit), **exérèse chirurgicale d'un kyste intraneural** avec ligature de la branche articulaire — le geste qui prévient la récidive selon la théorie de Spinner. La neurostimulation périphérique est hors périmètre de ce mémo. L'algologue se situe donc ici en **complément** d'une décision chirurgicale, pas en concurrence d'elle : c'est la lecture correcte du rôle du geste.`,

  anatomie: `Le **nerf fibulaire commun** (ancien sciatique poplité externe) naît de la bifurcation du nerf sciatique au sommet du creux poplité. Il descend obliquement le long du **bord médial du tendon du biceps fémoral**, croise la face superficielle du **chef latéral du gastrocnémien**, puis contourne le **col de la fibula** où il devient **sous-cutané et immédiatement contre l'os** — c'est là qu'il est vulnérable à la moindre compression externe.

Il s'engage ensuite dans le **tunnel fibulaire**, sous l'**arcade fibreuse du muscle long fibulaire**, puis se divise en :
- **nerf fibulaire superficiel** (loge latérale : long et court fibulaires ; sensibilité du dos du pied),
- **nerf fibulaire profond** (loge antérieure : tibial antérieur, extenseurs ; sensibilité du **premier espace interdigital**),
- et, en amont, la **branche articulaire** pour l'articulation tibio-fibulaire supérieure, ainsi que le **nerf cutané sural latéral**.

Cette **branche articulaire** est la clé de la fiche : selon la théorie unifiante de **Spinner (2003)**, c'est par elle que le liquide synovial de l'articulation tibio-fibulaire supérieure remonte dans l'épinèvre et constitue un **kyste intraneural**, qui comprime les fascicules de l'intérieur. D'où deux conséquences pratiques : le kyste récidive si la branche articulaire n'est pas traitée, et un pied tombant avec kyste relève du chirurgien.

### Ce qui compte pour le geste
- **Le nerf est superficiel et contre l'os** : profondeur habituelle **0,5 à 1,5 cm**. Sonde haute fréquence, gel abondant ou standoff, **pression minimale** — appuyer écrase le nerf et l'espace qu'on veut décoller.
- **La technique de repérage est le « traçage »** : trouver le nerf en haut, dans le creux poplité au bord médial du biceps fémoral, où il est gros et facile, puis le **suivre en glissant vers le bas** jusqu'au col. Le chercher directement au col est plus difficile.
- **La surface de section (CSA)** en coupe transversale est le paramètre quantitatif : les valeurs normales au col rapportées dans la littérature se situent autour de **10 à 15 mm²** (fourchette à confirmer sur la série de référence de son propre appareil), et l'élément le plus fiable reste la **comparaison au côté sain** et la **variation le long du trajet** (renflement en amont du site de compression).
- Signes de souffrance : nerf **épaissi, hypoéchogène, perte du dessin fasciculaire**, aplatissement au point de compression, hypervascularisation en Doppler.
- **Le kyste intraneural** se présente comme une formation **anéchogène, tubulée, à l'intérieur même du nerf**, souvent avec un pédicule descendant vers l'articulation tibio-fibulaire supérieure. À ne pas confondre avec un kyste extraneural qui refoule le nerf.
- **Toute injection ici donne un bloc moteur.** Le patient repartira avec un pied tombant transitoire s'il reçoit un anesthésique local : cela s'anticipe (attelle, accompagnant, pas de conduite), cela ne se découvre pas.`,

  installation: {
    patient: `**Décubitus latéral, côté à traiter vers le haut**, genou fléchi à 20–30°, coussin entre les jambes pour stabiliser. C'est la position la plus confortable et celle qui présente le col de la fibula à plat.

Alternative : **décubitus dorsal** avec un coussin sous la fesse homolatérale et **rotation interne de hanche**, qui amène le col vers l'avant — utile chez le patient qui ne peut pas se tourner.

Palper et **marquer la tête de la fibula et le point de Tinel** au feutre avant la désinfection. Ne jamais laisser le membre reposer directement sur le col pendant l'installation : on comprime précisément le nerf malade.`,
    operateur: `Opérateur face à la face latérale du genou, écran en face de lui. Sonde **transversale sur le col de la fibula**, tenue légèrement, en appui sur les doigts et non sur le talon de la main.

Le sens de ponction dépend de la face du nerf à décoller. En pratique, on réalise souvent **les deux** : une première approche pour insinuer l'injectat entre le nerf et le périoste (face profonde), une seconde pour la face superficielle, sous l'arcade — c'est ce qui produit le halo circonférentiel. Prévoir deux points d'entrée dès la désinfection.`,
    sonde: `- Linéaire **12–18 MHz**, preset nerf superficiel, **profondeur 2–3 cm**, focale à 1 cm, gain élevé. Sonde **hockey** appréciable sur le relief du col.
- **Pression minimale** : couche de gel épaisse, la sonde effleure la peau. Une pression normale écrase un nerf superficiel et fait disparaître l'espace de dissection.
- **Doppler couleur basse échelle** : repérer la récurrente tibiale antérieure et les veinules du trajet, et rechercher une hypervascularisation intraneurale.
- Fonction **mesure de surface (trace)** activée pour la CSA, et **comparaison systématique au côté controlatéral** dans le même réglage.
- Aiguille écho-visible ; l'angle d'insonation est naturellement très plat, l'aiguille est facile à suivre.`,
  },

  reperage: [
    { titre: `Trouver le nerf en haut, dans le creux poplité`, texte: `Sonde **transversale** à la partie haute et latérale du creux poplité. Repérer le **tendon du biceps fémoral** (structure hyperéchogène ovalaire se dirigeant vers la tête de la fibula) : le nerf fibulaire commun est **immédiatement médial et profond** à lui, gros, fasciculé, facile. C'est le point de départ obligé.` },
    { titre: `Tracer le nerf vers le bas`, texte: `Glisser la sonde en distal en **gardant le nerf au centre de l'écran** ; il croise la face superficielle du **chef latéral du gastrocnémien**, s'aplatit, devient plus superficiel et contourne le **col de la fibula**. Le suivre pas à pas est infiniment plus fiable que de le chercher directement au col.` },
    { titre: `Identifier le tunnel fibulaire`, texte: `Au col, le nerf est pris entre le **périoste** en profondeur et l'**arcade fibreuse du long fibulaire** en superficie — une fine ligne hyperéchogène qui ponte le muscle. C'est le site de compression et la cible du geste : l'espace se situe **de part et d'autre du nerf**, sous cette arcade.` },
    { titre: `Mesurer et comparer`, texte: `Mesurer la **CSA** en coupe transversale stricte (contour interne de l'épinèvre) : au col, en amont et en aval. Comparer au **côté sain** dans le même réglage. Chercher un renflement fusiforme en amont de l'arcade, une perte du dessin fasciculaire, une hypoéchogénicité.` },
    { titre: `Chercher un kyste — l'étape qui change la prise en charge`, texte: `Balayer soigneusement le nerf et l'**articulation tibio-fibulaire supérieure**. Un **kyste intraneural** apparaît comme une formation **anéchogène, tubulée, contenue dans l'épinèvre**, déformant les fascicules de l'intérieur, souvent prolongée par un pédicule vers l'articulation. Un kyste **extraneural** refoule le nerf sans le contenir. Dans les deux cas — mais surtout dans le premier — **l'orientation chirurgicale prime**. Ne pas infiltrer et passer à autre chose.` },
    { titre: `Suivre la division`, texte: `Juste sous le col, suivre la division en **fibulaire superficiel** (vers la loge latérale) et **fibulaire profond** (vers la loge antérieure). Utile pour comprendre un tableau dissocié (déficit isolé du relèvement sans trouble sensitif latéral, par exemple) et pour cibler sélectivement une seule branche si nécessaire.` },
  ],

  sonoanatomie: [
    { structure: `Tendon du biceps fémoral`, aspect: `Structure ovalaire hyperéchogène convergeant vers la tête de la fibula`, repere: `**Le point de départ** : le nerf est médial et profond à lui` },
    { structure: `Nerf fibulaire commun (creux poplité)`, aspect: `Faisceau ovalaire de 5–8 mm, dessin fasciculaire en nid d'abeilles net`, repere: `Facile à ce niveau — le tracer ensuite vers le bas` },
    { structure: `Nerf fibulaire commun (col)`, aspect: `Aplati, plus petit, **au contact du périoste** ; pathologique : épaissi, hypoéchogène, fascicules effacés`, repere: `Profondeur 0,5–1,5 cm — la cible` },
    { structure: `Col de la fibula`, aspect: `Ligne corticale convexe hyperéchogène avec ombre franche`, repere: `Plancher du tunnel ; repère constant` },
    { structure: `Arcade fibreuse du long fibulaire`, aspect: `Fine ligne hyperéchogène pontant le muscle au-dessus du nerf`, repere: `Toit du tunnel — site de compression` },
    { structure: `Muscle long fibulaire`, aspect: `Muscle strié recouvrant le nerf en aval de l'arcade`, repere: `Traversé si abord postéro-antérieur` },
    { structure: `Division fibulaire superficiel / profond`, aspect: `Deux faisceaux, l'un vers la loge latérale, l'autre vers la loge antérieure`, repere: `Juste sous le col` },
    { structure: `Kyste intraneural`, aspect: `Formation **anéchogène tubulée à l'intérieur du nerf**, fascicules refoulés en périphérie, pédicule vers la tibio-fibulaire supérieure`, repere: `**Indication chirurgicale — ne pas infiltrer**` },
  ],

  technique: [
    { titre: `Préparation`, texte: `Checklist en fin de fiche. Le diagnostic de kyste intraneural doit avoir été **explicitement écarté** avant de préparer le matériel. Désinfection large de la face latérale du genou et du tiers supérieur de jambe, en prévoyant **deux points d'entrée** (antérieur et postérieur). Gel stérile ou housse. Seringues étiquetées, aiguille 25 G montée sur prolongateur — indispensable ici, où le moindre mouvement de la pointe compte.` },
    { titre: `Anesthésie cutanée`, texte: `0,5 mL de lidocaïne 1 % strictement intradermique aux points d'entrée. Rester très superficiel : un bouton d'anesthésie trop profond noie la cible, qui est à moins d'un centimètre.` },
    { titre: `Ponction in-plane, face profonde`, texte: `Aiguille **25 G** in-plane, très tangentielle, dirigée vers l'espace **entre le nerf et le périoste du col**. Avancer millimètre par millimètre en gardant la pointe visible en permanence. Une **paresthésie fulgurante dans le territoire** impose de reculer immédiatement de 1 mm avant toute injection : le nerf est superficiel et le contact est facile.` },
    { titre: `Hydrodissection — face profonde`, texte: `Injecter **0,5 mL** en test : le liquide doit **soulever le nerf du périoste** et former une lame anéchogène. S'il gonfle le nerf lui-même (augmentation de la CSA, fascicules écartés) : **arrêt immédiat**, retrait. Puis injecter **2–4 mL** en suivant la progression du décollement le long du col.` },
    { titre: `Hydrodissection — face superficielle`, texte: `Retirer l'aiguille, entrer par le second point d'entrée, du côté opposé, et répéter l'opération **entre le nerf et l'arcade du long fibulaire**. Le résultat recherché est un **halo anéchogène complet** : le nerf apparaît « flottant », entouré de liquide sur 360°, sur 3 à 4 cm de longueur. C'est le critère de fin.` },
    { titre: `Bloc diagnostique (variante)`, texte: `Si l'objectif est un bloc test et non une hydrodissection : **2–4 mL** d'AL péri-nerveux suffisent, en une seule approche. Prévenir que le **pied tombant est attendu** pendant la durée du bloc, et l'organiser (attelle, accompagnant, pas de conduite).` },
    { titre: `Après le geste`, texte: `Tester à 15–20 min : sensibilité du dos du pied et du premier espace, **relèvement du pied et éversion contre résistance**. Documenter le déficit s'il existe. Consignes écrites : pas de conduite, marche accompagnée avec attelle si pied tombant, **ne pas croiser les jambes ni s'accroupir**, éviter tout appui sur la face latérale du genou (y compris la nuit). Reprise du traitement de fond neuropathique.` },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Hydrodissection (indication principale)** | **Dextrose 5 % (D5W)**, éventuellement précédé de 1 mL de lidocaïne 1 % pour le confort | **5–10 mL** répartis sur les deux faces | Le D5W **ne bloque pas la conduction** : on peut retester immédiatement la force et la sensibilité, ce qui est décisif sur un **nerf moteur**. C'est l'argument qui le fait préférer au sérum physiologique et surtout à l'AL |
| **Hydrodissection au sérum physiologique** | NaCl 0,9 % | 5–10 mL | Alternative acceptable si le D5W n'est pas disponible ; pas d'effet propre attendu |
| **Bloc test diagnostique** | Lidocaïne 1–2 % (durée courte, récupération motrice rapide) | **2–4 mL** | Préférer une molécule courte : on ne veut pas d'un pied tombant de 12 h. Prévenir et organiser le retour |
| **Corticoïde en option** | Dexaméthasone 4 mg, ou méthylprednisolone 20 mg — **non particulaire de préférence** | ajouté aux volumes ci-dessus | Justifié surtout en cas de fibrose péri-nerveuse post-traumatique. Site superficiel : dose faible, risque d'atrophie cutanée |
| **Avant PRF** | Lidocaïne 1 %, 0,5 mL **après** les tests de stimulation | 0,5 mL | Injecter avant la stimulation fausse le test |

**Doses maximales d'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Sans objet aux volumes utilisés ; à recalculer si l'on associe d'autres blocs dans la séance.

**Ce qu'on n'injecte pas** : pas de corticoïde particulaire à forte dose au contact d'un nerf déjà souffrant, et **jamais rien en intraneural** — l'augmentation de la CSA à l'injection est le signal d'arrêt absolu.`,

  variantes: [
    { titre: `Radiofréquence pulsée (PRF)`, texte: `Indication : bloc test positif (≥ 50 %) mais effet trop bref, sur une douleur neuropathique **sans déficit moteur évolutif**. Électrode 22 G à pointe active 5 mm, placée **parallèle** au nerf. Stimulation **sensitive 50 Hz** : paresthésies reproduisant la douleur habituelle à < 0,5 V. Stimulation **motrice 2 Hz** : ici, une contraction des releveurs **n'est pas rédhibitoire** — la PRF n'est pas lésionnelle — mais elle confirme la proximité. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 1–2 mL d'AL.

Réserve importante : la PRF sur un nerf mixte reste une pratique de niveau de preuve **faible** (séries), et la surveillance de la fonction motrice après le geste est impérative.` },
    { titre: `Ce qu'on ne fait pas — RF thermique et cryoneurolyse`, texte: `**Le nerf fibulaire commun est mixte.** Une radiofréquence thermique (80 °C, 90 s) ou une cryoneurolyse sur le tronc produit une interruption fonctionnelle du contingent moteur : **steppage**, déficit d'éversion, risque de chute, rétraction du triceps sural, appareillage. Le rapport bénéfice/risque est inacceptable pour une douleur.

Les seules exceptions envisageables relèvent d'une autre logique : le traitement d'un **névrome terminal** d'une branche purement sensitive déjà sectionnée (moignon d'amputation, névrome cicatriciel du fibulaire superficiel), où il n'y a plus de fonction motrice à préserver en aval. Cela se décide au cas par cas, après bloc test, et se documente.` },
    { titre: `Traitement du névrome et douleur du moignon`, texte: `Après amputation transtibiale, la douleur du moignon a fréquemment pour origine un **névrome** du fibulaire commun ou de ses branches, palpable et déclenchant un Tinel. En échographie : masse hypoéchogène fusiforme en continuité avec le nerf, à l'extrémité sectionnée.

Séquence : **bloc test** en amont du névrome (1–2 mL d'AL) → si positif, **hydrodissection** répétée, ou **PRF**, ou traitement du névrome lui-même (alcoolisation, cryoneurolyse — envisageable ici puisqu'il n'y a plus de territoire moteur en aval, et la cryoneurolyse ne crée pas de nouveau névrome). Voir la fiche Névrome cicatriciel pour les modalités détaillées.` },
    { titre: `Kyste intraneural — reconnaître et orienter`, texte: `C'est la variante la plus importante de la fiche, et ce n'est pas un geste. Devant un pied tombant avec douleur latérale de jambe, chercher systématiquement une formation **anéchogène tubulée intraneurale** et son **pédicule vers l'articulation tibio-fibulaire supérieure**.

Conduite à tenir : **IRM** et **avis chirurgical**. Le traitement est l'évacuation du kyste avec **ligature ou section de la branche articulaire** — sans ce geste sur le pédicule, la récidive est la règle (**Spinner 2003**). Une ponction-aspiration percutanée isolée est une solution d'attente au mieux, et n'a pas sa place comme traitement. **Visser (2006)** a montré que l'échographie haute résolution détecte ces ganglions, ce qui fait de l'échographiste algologue un acteur du diagnostic — à condition d'y penser.` },
  ],

  pearls: [
    `**Toujours partir du haut** : trouver le nerf au bord médial du tendon du biceps fémoral, puis le tracer jusqu'au col. Le chercher directement au col fait perdre du temps.`,
    `**Pression de sonde quasi nulle** et gel abondant : on cherche un nerf à moins d'un centimètre et un espace qu'une pression normale efface.`,
    `Mesurer la **CSA** et **comparer au côté sain** dans le même réglage : c'est le seul chiffre utile.`,
    `**Chercher le kyste intraneural avant de préparer la seringue.** C'est la question qui change la prise en charge.`,
    `Préférer le **dextrose 5 %** : il permet de retester force et sensibilité immédiatement — irremplaçable sur un nerf moteur.`,
    `Prévoir **deux points d'entrée** dès la désinfection : le halo circonférentiel se fait des deux côtés.`,
    `Le meilleur traitement d'une neuropathie fibulaire par appui reste de **supprimer l'appui** : jambes croisées, plâtre, position accroupie, bord de lit.`,
  ],
  pieges: [
    `Infiltrer un **kyste intraneural** au lieu d'orienter vers la chirurgie : on perd des mois et parfois la récupération motrice.`,
    `Appuyer sur la sonde : le nerf s'aplatit, la CSA est faussement normale et l'espace de dissection disparaît.`,
    `Faire un bloc à l'anesthésique local sans avoir prévenu du **pied tombant transitoire** : patient affolé, risque de chute au lever.`,
    `Injecter malgré une augmentation de la CSA : injection intraneurale, aggravation durable.`,
    `Confondre kyste **intraneural** (dans l'épinèvre, fascicules refoulés) et kyste **extraneural** (refoule le nerf en bloc) : le pronostic et le geste diffèrent.`,
    `Faire une **RF thermique ou une cryoneurolyse** sur le tronc : steppage.`,
    `Traiter la douleur et ne pas surveiller la motricité : un déficit progressif impose une décompression, pas une nouvelle infiltration.`,
  ],
  complications: [
    `**Déficit moteur transitoire (steppage)** après bloc à l'AL : **attendu**, non évitable, dure le temps du produit. Prévention : molécule courte, petit volume, ou D5W si l'on veut préserver la fonction. Conduite à tenir : attelle releveur, marche accompagnée, pas de conduite, information écrite.`,
    `**Injection intraneurale** : douleur fulgurante, résistance, **augmentation visible de la CSA** avec écartement des fascicules. Arrêt immédiat, retrait, surveillance clinique et EMG à distance si symptômes persistants. Le risque est réel : le nerf est petit, superficiel et immobile contre l'os.`,
    `**Aggravation transitoire des paresthésies** dans les 24–72 h après hydrodissection : fréquente, attendue, à annoncer sous peine d'être vécue comme un échec.`,
    `**Atrophie cutanée et dépigmentation** si corticoïde en site très superficiel : dose faible, retrait en aspirant.`,
    `**Hématome** : le nerf est proche de la récurrente tibiale antérieure et de veinules ; bénin, compressible.`,
    `**Chute** : la vraie complication fonctionnelle du bloc. À anticiper systématiquement chez le sujet âgé.`,
    `**Retard diagnostique** d'un kyste intraneural ou d'une compression chirurgicale : la complication la plus grave de cette fiche, et elle est entièrement évitable.`,
  ],
  securite: [
    `**Écarter formellement un kyste intraneural** et une masse compressive avant tout geste. En cas de doute : IRM et avis chirurgical.`,
    `**Surveiller la motricité** : tester le relèvement du pied et l'éversion avant et après le geste, et à chaque consultation. Un déficit qui s'aggrave impose une réévaluation chirurgicale, pas une répétition du geste.`,
    `**Aucune radiofréquence thermique, aucune cryoneurolyse** sur le tronc du nerf fibulaire commun (nerf mixte).`,
    `Pression de sonde minimale, aiguille visible en permanence, arrêt immédiat sur paresthésie fulgurante ou augmentation de la CSA.`,
    `Doppler avant ponction ; aspiration avant injection.`,
    `Risque hémorragique **faible** (ASRA-ESRA 2018) : pas d'arrêt des antiagrégants, anticoagulants au cas par cas.`,
    `Consignes de prévention de la compression à remettre par écrit : ne pas croiser les jambes, pas de station accroupie prolongée, pas d'appui latéral du genou (bord de lit, table d'opération, plâtre trop serré).`,
  ],

  suivi: `- **J0** : EN avant / à 30 min ; **testing moteur** (relèvement du pied, éversion) et cartographie sensitive avant la sortie ; CSA mesurée et notée (elle sert de référence). Consignes écrites, attelle si nécessaire.
- **J15** : EN, paresthésies, allodynie, **motricité** — c'est la surveillance clé. Toute aggravation motrice fait basculer vers l'avis chirurgical.
- **J30–J45** : décision. Réponse durable → poursuivre la prévention de la compression et le traitement de fond. Réponse franche mais brève → **répéter l'hydrodissection** (série de 2 à 4 séances espacées de 2 à 4 semaines, schéma extrapolé des protocoles du canal carpien). Réponse nulle → réinterroger le diagnostic : radiculopathie L5, atteinte du sciatique plus proximale, neuropathie diffuse, kyste passé inaperçu.
- **3 mois** : **contrôle échographique de la CSA** en comparaison au côté sain, et EMG si déficit persistant. Si compression documentée avec déficit qui ne récupère pas : orientation chirurgicale — l'algologue ne doit pas être le motif du retard.
- **Toujours** : traitement de fond des douleurs neuropathiques et suppression du facteur compressif, sans lesquels le geste ne tient pas.`,

  evidence: `- **Apport diagnostique de l'échographie — c'est le point le mieux établi.** **Visser 2006 (Neurology)** a montré que l'échographie haute résolution détecte les **ganglions intraneuraux** du nerf fibulaire commun, y compris quand l'examen clinique et l'électrophysiologie n'orientent pas vers eux. **Bianchi 2008** et les travaux d'imagerie ultérieurs ont établi la sémiologie du nerf périphérique normal et pathologique, et **Van den Bergh 2013 (Insights into Imaging)** a décrit l'anatomie et la pathologie du nerf fibulaire au genou en imagerie. **Bignotti 2017 (Muscle & Nerve)** a comparé échographie et IRM dans la neuropathie fibulaire commune. Preuve **forte** pour le diagnostic.
- **Physiopathologie du kyste intraneural — Spinner 2003 (Journal of Neurosurgery)** : la « théorie unifiante » établissant que le kyste provient de l'articulation tibio-fibulaire supérieure et remonte par la **branche articulaire** — d'où l'obligation de traiter le pédicule sous peine de récidive. Preuve **forte** sur le mécanisme, et directement décisionnelle : ce diagnostic sort le patient du champ de l'infiltration.
- **Hydrodissection — preuve indirecte.** Le rationnel et la technique sont posés par **Cass 2016 (Curr Sports Med Rep)** et **Lam 2020 (Journal of Pain Research)**. L'efficacité du **dextrose 5 % péri-nerveux** est démontrée par ECR **au canal carpien** (**Wu 2017, Mayo Clinic Proceedings** : bénéfice maintenu à 6 mois contre injection contrôle). **Aucun essai randomisé n'existe pour le nerf fibulaire commun** : l'usage repose sur une extrapolation raisonnée et sur des séries. Preuve **faible / indirecte** — à annoncer au patient comme telle.
- **PRF sur le nerf fibulaire** : séries et cas cliniques uniquement. Preuve **faible**.
- **Décompression chirurgicale** : indication reconnue en cas de compression documentée avec déficit, sur la base de séries chirurgicales cohérentes ; pas d'essai randomisé contre traitement conservateur. Preuve **modérée** par cohérence, **faible** au sens méthodologique.
- **Trous assumés de la littérature** : (1) pas de valeur seuil de CSA universellement admise pour affirmer la neuropathie compressive du fibulaire au col — la comparaison au côté sain reste le meilleur critère ; (2) aucune étude ne compare hydrodissection et décompression chirurgicale ; (3) aucune donnée ne dit à quel moment il faut cesser de temporiser et opérer. Ces trois questions sont celles que pose chaque patient, et elles se tranchent au raisonnement clinique.`,

  references: [
    { auteurs: `Spinner RJ, Atkinson JL, Tiel RL`, titre: `Peroneal intraneural ganglia: the importance of the articular branch. A unifying theory`, revue: `Journal of Neurosurgery`, annee: '2003', type: 'anatomie / physiopathologie', verif: false, note: `Explique la récidive et impose de traiter la branche articulaire.` },
    { auteurs: `Visser LH`, titre: `High-resolution sonography of the common peroneal nerve: detection of intraneural ganglia`, revue: `Neurology`, annee: '2006', type: 'série', verif: false },
    { auteurs: `Van den Bergh FR, Vanhoenacker FM, De Smet E, Huysse W, Verstraete KL`, titre: `Peroneal nerve: normal anatomy and pathologic findings on routine MRI of the knee`, revue: `Insights into Imaging`, annee: '2013', type: 'revue iconographique', verif: false },
    { auteurs: `Bignotti B, Assini A, Signori A, et al.`, titre: `Ultrasound versus MRI in common fibular neuropathy`, revue: `Muscle & Nerve`, annee: '2017', type: 'comparative', verif: false },
    { auteurs: `Bianchi S`, titre: `Ultrasound of the peripheral nerves`, revue: `Joint Bone Spine`, annee: '2008', type: 'revue', verif: false },
    { auteurs: `Cass SP`, titre: `Ultrasound-guided nerve hydrodissection: what is it? A review of the literature`, revue: `Current Sports Medicine Reports`, annee: '2016', type: 'revue', verif: false },
    { auteurs: `Lam KHS, Hung CY, Chiang YP, et al.`, titre: `Ultrasound-guided nerve hydrodissection for pain management: rationale, methods, current literature, and theoretical mechanisms`, revue: `Journal of Pain Research`, annee: '2020', type: 'revue', verif: false },
    { auteurs: `Wu YT, Ho TY, Chou YC, et al.`, titre: `Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial`, revue: `Mayo Clinic Proceedings`, annee: '2017', type: 'ECR', verif: false, note: `Base de preuve du dextrose 5 % — indication différente, extrapolation assumée.` },
    { auteurs: `Narouze S, Benzon HT, Provenzano D, et al.`, titre: `Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'nfc-col', section: 'sonoanatomie', titre: `Nerf fibulaire commun au col de la fibula — coupe transversale`,
      legende: `Le nerf est pris entre le **périoste du col** en profondeur et l'**arcade fibreuse du long fibulaire** en superficie : c'est le tunnel fibulaire, et le site de compression. Profondeur 0,5–1,5 cm, donc **pression de sonde minimale**. Mesurer la CSA et comparer au côté sain ; chercher un **kyste intraneural** (anéchogène, tubulé, dans l'épinèvre) avant toute décision.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transverse, col de la fibula', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 88 L116 84 L116 208 L0 224 Z', label: 'Loge antérieure', at: [56, 148], small: true, opacity: 0.45 });
        S.muscle({ path: 'M494 90 L640 82 L640 230 L490 206 Z', label: 'Gastrocnémien', at: [560, 150], small: true, opacity: 0.45 });
        S.muscle({ path: 'M122 82 Q300 74 470 88 Q498 140 458 186 Q320 212 180 184 Q122 146 122 82 Z', label: 'Long fibulaire', at: [292, 126], opacity: 0.55 });
        S.fascia({ points: [[286, 174], [386, 181], [468, 192]], width: 2, label: 'Arcade du long fibulaire', lx: 194, ly: 240, anchor: 'end', small: true, lead: [292, 176] });
        S.nerve({ x: 386, y: 196, rx: 18, ry: 11, label: 'N. fibulaire commun', lx: 468, ly: 240, anchor: 'start', lead: [402, 202] });
        S.bone({ path: 'M250 258 Q340 232 432 254 Q492 272 522 304', label: 'Col de la fibula', at: [340, 334] });
      },
    },
    {
      id: 'nfc-hydro', section: 'technique', titre: `Hydrodissection — halo circonférentiel par deux points d'entrée`,
      legende: `Aiguille 25 G in-plane, très tangentielle. On décolle d'abord le nerf du **périoste** (face profonde), puis, par un second point d'entrée opposé, de l'**arcade** (face superficielle). Critère de fin : le nerf apparaît « flottant » dans un **halo anéchogène complet** sur 3–4 cm. Dextrose 5 % de préférence : il ne bloque pas la conduction, donc on reteste force et sensibilité tout de suite.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur', right: 'Postérieur' }).probeInfo({ plan: 'Transverse, col de la fibula', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 88 L116 84 L116 208 L0 224 Z', opacity: 0.45 });
        S.muscle({ path: 'M494 90 L640 82 L640 230 L490 206 Z', opacity: 0.45 });
        S.muscle({ path: 'M122 82 Q300 74 470 88 Q498 140 458 186 Q320 212 180 184 Q122 146 122 82 Z', label: 'Long fibulaire', at: [258, 122], opacity: 0.55 });
        S.fascia({ points: [[286, 174], [386, 181], [468, 192]], width: 2 });
        S.nerve({ x: 386, y: 196, rx: 18, ry: 11, label: 'NFC', lx: 386, ly: 152, small: true });
        S.bone({ path: 'M250 258 Q340 232 432 254 Q492 272 522 304', label: 'Fibula', at: [318, 332] });
        S.target({ x: 386, y: 196, r: 26 });
        S.needle({ from: [0, 116], to: [356, 208], label: '25 G — face profonde' });
        S.spread({ x: 386, y: 215, rx: 34, ry: 8 });
        S.needle({ from: [640, 128], to: [418, 182], label: '25 G — face superficielle' });
        S.spread({ x: 386, y: 177, rx: 34, ry: 8 });
        S.label({ x: 292, y: 266, text: 'Halo circonférentiel — 5–10 mL D5W', cls: 'lbl-spread', small: true, lead: [364, 224] });
      },
    },
  ],

  checklist: [
    `**Kyste intraneural cherché et écarté** avant tout geste (formation anéchogène tubulée dans l'épinèvre, pédicule vers la tibio-fibulaire supérieure) — sinon : IRM et avis chirurgical`,
    `CSA mesurée au col et **comparée au côté sain** dans le même réglage`,
    `Facteur compressif identifié et supprimé (jambes croisées, plâtre, station accroupie, appui de lit)`,
    `Pression de sonde minimale, gel abondant`,
    `Deux points d'entrée préparés pour le halo circonférentiel`,
    `**Testing moteur** (relèvement du pied, éversion) fait et noté **avant et après** le geste`,
    `Patient prévenu du pied tombant transitoire si anesthésique local : attelle, accompagnant, pas de conduite`,
    `**Aucune radiofréquence thermique ni cryoneurolyse** sur le tronc (nerf mixte)`,
  ],
});
