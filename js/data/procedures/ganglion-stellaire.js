/* Fiche : ganglion stellaire / chaîne sympathique cervicale — bloc échoguidé, PRF. */
ECHO.register({
  id: 'ganglion-stellaire',
  titre: 'Ganglion stellaire — bloc sympathique cervical échoguidé',
  titreCourt: 'Ganglion stellaire',
  en: 'Ultrasound-guided stellate ganglion block (SGB) / cervical sympathetic trunk block — anterolateral paracarotid approach at C6 and C7',
  region: 'tete-cou',
  types: ['bloc', 'interventionnel'],
  niveau: 3,
  grade: 'Modérée pour le SDRC (ECR de petite taille, méta-analyse hétérogène) · faible pour les indications non douloureuses',
  maj: '2026-09',
  motsCles: ['SDRC', 'CRPS', 'algodystrophie', 'sympathique', 'Horner', 'chaîne sympathique cervicale', 'C6', 'C7', 'tubercule de Chassaignac', 'long du cou', 'zona', 'névralgie post-zostérienne', 'Raynaud', 'bouffées de chaleur', 'ESPT', 'PTSD', 'SGB'],
  resume: 'Le « bloc du ganglion stellaire » est en réalité, dans sa forme échoguidée moderne, un bloc du **tronc sympathique cervical** déposé sous le fascia prévertébral, sur le muscle long du cou, au niveau de C6 ou C7 : l\'injectat diffuse ensuite en caudal jusqu\'au ganglion cervico-thoracique en C7-T1. C\'est le geste sympathique de référence du membre supérieur et de l\'hémiface. L\'échographie a changé sa sécurité (visualisation de l\'œsophage, de la thyroïde, des artères thyroïdienne inférieure, cervicale ascendante et vertébrale) et son volume (4–5 mL au lieu de 8–10 mL à l\'aveugle), mais pas son statut : geste de niveau 3, à faire dans un environnement où l\'on sait gérer une convulsion immédiate et une détresse respiratoire. Le critère de réussite n\'est pas le syndrome de Claude Bernard-Horner seul mais l\'élévation thermique cutanée homolatérale ≥ 1,5 °C par rapport au côté opposé.',

  flash: {
    position: 'dorsal', positionNote: 'nuque en légère extension (coussin fin sous les épaules), tête tournée de 15–30° du côté opposé ; ne pas hyperextension­ner (rapproche la carotide de la cible)',
    sonde: 'lineaire', sondeNote: '8–15 MHz, profondeur 3–4 cm, focale 2–3 cm, Doppler couleur à basse PRF obligatoire avant toute ponction',
    approche: 'in-plane', approcheNote: 'latéro-médiale, rétro-carotidienne (« paracarotidien latéral ») ; voie out-of-plane paracarotidienne antérieure possible mais aiguille moins contrôlée',
    aiguille: '25 G 40–50 mm (ou 22–25 G 50 mm échovisible) sur prolongateur ; aiguille RF 22 G 50–54 mm à extrémité active 5 mm pour la PRF',
    cible: 'Sous le fascia prévertébral, au contact de la face antérieure du **muscle long du cou**, en dedans de l\'artère carotide et en avant du processus transverse ; critère de fin : nappe anéchogène qui décolle le fascia prévertébral et s\'étend en caudal, sans diffusion dans la gaine carotidienne',
    injectat: '4–5 mL : ropivacaïne 0,2 % (parfois 0,375 %) ou lidocaïne 1 % — **jamais de corticoïde particulaire**',
    duree: '10–15 min bloc · 30–40 min PRF · 30 min de surveillance minimum après le geste',
  },

  indications: [
    '**SDRC de type I ou II du membre supérieur** (algodystrophie, causalgie), surtout dans la phase où la composante sympathiquement entretenue est plausible : allodynie, troubles vasomoteurs et sudoraux, œdème. C\'est l\'indication la mieux étayée.',
    '**Douleurs neuropathiques du membre supérieur et de l\'hémiface d\'origine sympathique** : douleur du moignon, syndrome post-thrombotique, séquelles de traumatisme du plexus.',
    '**Zona aigu et névralgie post-zostérienne** des territoires V1 et cervico-brachiaux : intérêt surtout en phase aiguë ou subaiguë (< 3 mois), plus discutable au stade de NPZ constituée.',
    '**Ischémie vasomotrice** : syndrome de Raynaud, acrosyndromes, artériopathie distale non revascularisable, engelures sévères — bloc test avant de discuter une sympatholyse durable.',
    '**Bouffées vasomotrices** de la ménopause ou induites par l\'hormonothérapie (ECR positif chez la femme périménopausée).',
    '**ESPT / trouble anxieux post-traumatique** : hors AMM en France, littérature en cours de consolidation (2 ECR et 1 étude cas-témoin dans la méta-analyse 2025) — à considérer comme exploratoire, pas comme une offre de soins.',
    '**Orages rythmiques ventriculaires réfractaires** : indication de réanimation/rythmologie, hors périmètre de l\'HDJ douleur, mais à connaître car le geste est le même.',
    'Bloc **diagnostique** avant PRF du tronc sympathique cervical ou avant discussion d\'une sympathectomie.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée ou cervicale profonde, bloc controlatéral récent (< 48 h) ou paralysie récurrentielle / phrénique controlatérale connue, pneumonectomie controlatérale, insuffisance respiratoire sévère, glaucome aigu non contrôlé, troubles de conduction majeurs non appareillés (BAV de haut degré) pour un bloc **gauche**, infarctus du myocarde récent.',
    '**Relatives** : anticoagulation curative, antiagrégation double, coagulopathie — **procédure de risque hémorragique intermédiaire** dans les recommandations ASRA-ESRA 2018 sur les procédures interventionnelles de la douleur ; la discussion d\'un arrêt de l\'aspirine et des AINS y est explicitement envisagée pour le bloc stellaire lorsque la configuration anatomique majore le risque et les conséquences d\'un saignement (hématome rétropharyngé compressif). Le site n\'est pas compressible : ne pas raisonner comme pour un bloc superficiel.',
    'Anatomie défavorable repérée au balayage préalable : trajet aberrant de l\'artère vertébrale en avant du processus transverse à C6, artère thyroïdienne inférieure ou cervicale ascendante croisant la trajectoire, œsophage latéralisé sur le trajet — **rescanner et changer de niveau ou de côté plutôt que forcer**.',
    'Dysphagie, dysphonie ou trouble de la déglutition préexistants : le bloc récurrentiel iatrogène sera mal toléré.',
    'Corticoïdes : non recommandés sur ce site (aucun bénéfice démontré, risque artériel terminal). Si on en met malgré tout, **exclusivement non particulaire** (dexaméthasone).',
  ],
  alternatives: 'Blocs sympathiques de rang équivalent : bloc paravertébral thoracique haut T2-T3 (sympathectomie du membre supérieur plus complète, sans Horner, plèvre à proximité) ; bloc plexique ou perfusion de lidocaïne IV si l\'objectif est antalgique et non sympatholytique. Dans le SDRC, le bloc sympathique n\'est **pas** un traitement de fond : les recommandations récentes le placent en adjuvant d\'un programme de rééducation active (imagerie motrice graduée, désensibilisation, thérapie miroir) et d\'un traitement médicamenteux (gabapentinoïde, bisphosphonate IV en phase précoce). Un bloc qui soulage sans être exploité par la rééducation dans les jours qui suivent est un bloc perdu — c\'est le principal argument pour le programmer un jour d\'HDJ où le kiné voit le patient dans la foulée. PRF du tronc sympathique cervical si réponse au bloc test franche mais brève ; sympathectomie thoracoscopique en dernier recours.',

  anatomie: `Le **tronc sympathique cervical** chemine dans l\'espace prévertébral, **en arrière du fascia prévertébral** (fascia alaire), plaqué sur la face antérieure du **muscle long du cou** (*longus colli*), lui-même appliqué sur les corps vertébraux et les processus transverses de C3 à T3. Le **ganglion cervico-thoracique (stellaire)** naît de la fusion du ganglion cervical inférieur et du premier ganglion thoracique : il est situé **en regard du col de la 1re côte, à hauteur de C7-T1**, en arrière de l\'artère vertébrale à son origine et en dehors du dôme pleural. Il fusionne avec T1 dans environ 80 % des cas.

Conséquence pratique majeure : **on ne pique jamais le ganglion**. On dépose l\'anesthésique local plus haut, en C6 ou C7, sous le fascia prévertébral, et on laisse la diffusion caudale faire le travail. C\'est ce que l\'échographie a démontré et permis (Narouze 2007, 2014) : elle identifie le bon plan fascial, ce que la fluoroscopie ne fait pas.

### Ce qui compte pour le geste
- **C6 = tubercule de Chassaignac** : le tubercule antérieur de C6 est saillant, c\'est le repère osseux historique. À ce niveau, l\'**artère vertébrale est déjà entrée dans le foramen transversaire** dans la grande majorité des cas — elle est donc protégée par le tubercule. C\'est ce qui fait de C6 le niveau le plus sûr.
- **C7 = pas (ou peu) de tubercule antérieur**, et l\'**artère vertébrale y est antérieure au processus transverse**, non protégée, avant d\'entrer dans le foramen de C6. Le niveau C7 est plus proche du ganglion (donc plus efficace sur le membre supérieur) mais **franchement plus dangereux** : artère vertébrale exposée, dôme pleural à proximité.
- **Cartographie du bloc** : C6 donne un bloc sympathique de la tête et du cou plus constant, C7 un bloc du membre supérieur plus constant. En pratique on pique le plus souvent en C6 en comptant sur la diffusion caudale, et on ne descend en C7 que si l\'objectif est strictement brachial et que l\'anatomie s\'y prête.
- **Variantes vasculaires à chercher au Doppler avant chaque ponction** : artère vertébrale à trajet aberrant en avant du tubercule antérieur (décrite, source de convulsions immédiates), **artère thyroïdienne inférieure** (croise horizontalement en arrière de la gaine carotidienne, souvent pile sur la trajectoire médiale), **artère cervicale ascendante** (branche du tronc thyro-cervical, montant sur le long du cou — c\'est elle qu\'on transfixie le plus souvent sans la voir).
- **Œsophage** : latéralisé à gauche de la trachée dans environ **50 % des cas à C6 et 74 % à C7** (Bhatia 2012, 100 patients) — d\'où la ponction œsophagienne des voies antérieures aveugles à gauche, et la préférence historique pour le côté droit.
- **Racines C6 et C7** : dans la gouttière entre tubercules antérieur et postérieur, en dehors de la cible ; une aiguille qui « part en dehors » fait un bloc plexique, pas un bloc sympathique.
- **Nerf laryngé récurrent** : en dedans, dans l\'angle trachéo-œsophagien ; **nerf phrénique** : sur la face antérieure du scalène antérieur, en dehors — les deux sont à quelques millimètres de la trajectoire, et leur bloc partiel est fréquent, pas exceptionnel.
- Profondeurs habituelles : peau → fascia prévertébral 2–3 cm chez l\'adulte de morphotype moyen ; cible à 2,5–3,5 cm.`,

  installation: {
    patient: `**Décubitus dorsal**, un coussin fin (2–3 cm) sous les épaules pour dégager le cou, tête tournée de **15 à 30° seulement** du côté opposé. Une rotation excessive ramène la carotide en avant du long du cou et ferme la fenêtre latérale.

Voie veineuse périphérique posée, scope (SpO₂, PA, ECG), oxygène et matériel d\'intubation disponibles, **émulsion lipidique à 20 % accessible** (protocole d\'intoxication aux AL affiché). Prévenir le patient qu\'il ne doit **ni parler ni déglutir** pendant la ponction, et qu\'un enrouement, une paupière tombante et une sensation de « nez bouché » du même côté sont **attendus** et régressent en quelques heures. Prendre la **température cutanée bilatérale** (pulpe de l\'index ou face dorsale de la main, thermomètre infrarouge) avant le geste : c\'est le comparateur.`,
    operateur: `Opérateur **à la tête du patient** ou du côté à traiter, écran en face, dans l\'axe. Sonde tenue en appui sur la clavicule/le cou, main droite libre pour l\'aiguille. Ponction **de latéral en médial**, dans le plan : l\'aiguille passe en arrière de la gaine carotidienne (voie « rétro-carotidienne » ou paracarotidienne latérale). Cette direction éloigne la pointe du foramen et de la racine, et permet de voir l\'aiguille sur toute sa longueur.

Certains opérateurs préfèrent la voie **paracarotidienne antérieure hors du plan** : on comprime la gaine carotidienne latéralement avec la sonde et on pique de dehors en dedans sur un trajet court. Elle raccourcit la distance mais on ne voit que la pointe : à réserver à ceux qui la pratiquent régulièrement.`,
    sonde: `- Linéaire 8–15 MHz, preset « nerf » ou « small parts », **profondeur 3–4 cm**, focale sur le long du cou, gain permettant de distinguer le fascia prévertébral (fine ligne blanche) du muscle sous-jacent.
- **Doppler couleur systématique** sur toute la trajectoire prévue, à basse PRF (les artères thyroïdienne inférieure et cervicale ascendante sont de petit calibre et à flux lent) ; refaire un Doppler après chaque repositionnement de sonde.
- Balayage préalable **complet de C4 à T1** avant de désinfecter : compter les tubercules, identifier le niveau, repérer l\'œsophage en faisant déglutir le patient une fois (il bouge et se remplit d\'air), vérifier la position de l\'artère vertébrale à C6 et à C7.
- Housse stérile ou gel stérile, aiguille sur prolongateur pour que l\'injection soit faite par l\'aide sans mobiliser la pointe.`,
  },

  reperage: [
    { titre: 'Coupe transversale sous-cricoïdienne', texte: 'Sonde transversale à hauteur du cartilage cricoïde (≈ C6), bord médial sur la trachée. On voit de dedans en dehors : **trachée** (arc cartilagineux hypoéchogène, air en arrière avec réverbération), **lobe thyroïdien** (parenchyme homogène granité), **artère carotide commune** (ronde, pulsatile, non compressible), **veine jugulaire interne** (ovalaire, compressible, latérale et superficielle), **SCM** en surface.' },
    { titre: 'Aller au plan profond', texte: 'Descendre en profondeur derrière la carotide : on trouve le **muscle long du cou**, masse musculaire ovoïde plaquée sur l\'os, coiffée d\'une fine ligne hyperéchogène — le **fascia prévertébral**. C\'est le plan cible : la chaîne sympathique est **entre les deux**, sur la face antérieure du muscle, sous le fascia.' },
    { titre: 'Identifier le niveau', texte: 'Le **tubercule antérieur saillant** signe C6 (tubercule de Chassaignac) : la ligne osseuse dessine deux bosses (tubercules antérieur et postérieur) encadrant la racine C6. En glissant d\'un espace vers le bas, le tubercule antérieur disparaît ou devient rudimentaire : c\'est **C7**, et l\'artère vertébrale y apparaît **en avant** du processus transverse. Compter les niveaux en remontant depuis C7 est plus fiable que de partir du cricoïde.' },
    { titre: 'Doppler et cartographie du danger', texte: 'Doppler couleur sur toute la trajectoire : **artère vertébrale** (foramen à C6, antérieure à C7), **artère thyroïdienne inférieure** (croise en arrière de la carotide), **artère cervicale ascendante** (petite, sur le long du cou, la plus souvent transfixiée). Chercher aussi l\'**œsophage** en dedans (structure en cocarde, plus souvent visible à gauche) : le faire déglutir une fois lève le doute.' },
    { titre: 'Choisir le point d\'entrée', texte: 'Point d\'entrée au **bord latéral de la sonde**, en arrière du SCM et de la gaine carotidienne. Simuler mentalement la trajectoire : elle doit passer **en arrière des vaisseaux**, au-dessus du long du cou, et s\'arrêter dès le franchissement du fascia prévertébral. Si la trajectoire croise un vaisseau au Doppler, décaler la sonde d\'un demi-espace ou changer de niveau.' },
    { titre: 'Si on ne trouve pas', texte: 'Fenêtre fermée (cou court, obésité, goitre) : basculer sur une coupe plus haute (C5-C6) où le long du cou est plus épais et la carotide plus médiale, et compter davantage sur la diffusion caudale — c\'est précisément la logique du bloc sous-fascial. Ne jamais compenser une mauvaise image par une ponction « au repère osseux » : c\'est le retour à l\'aveugle, avec l\'aiguille dans un cou et une aiguille qui n\'est pas vue.' },
  ],

  sonoanatomie: [
    { structure: 'Muscle sterno-cléido-mastoïdien', aspect: 'Muscle superficiel large, strié, aplati par la sonde', repere: 'Premier plan musculaire ; le point d\'entrée est à son bord postéro-latéral' },
    { structure: 'Artère carotide commune', aspect: 'Ronde, anéchogène, pulsatile, non compressible ; paroi à triple couche', repere: 'Repère central : la cible est **en dedans et en arrière** d\'elle' },
    { structure: 'Veine jugulaire interne', aspect: 'Ovalaire, anéchogène, s\'écrase à la pression, latérale/superficielle à la carotide', repere: 'À ne pas comprimer complètement : on perd le repère de la gaine' },
    { structure: 'Lobe thyroïdien', aspect: 'Parenchyme homogène, granité, discrètement hyperéchogène', repere: 'En dedans ; sa face postérieure borde le trajet médial' },
    { structure: 'Muscle long du cou', aspect: 'Masse musculaire ovoïde hypoéchogène plaquée sur l\'os, en arrière de la carotide', repere: '**La cible** : face antérieure du muscle, sous le fascia' },
    { structure: 'Fascia prévertébral', aspect: 'Fine ligne hyperéchogène coiffant le long du cou', repere: 'Le décollement de cette ligne par l\'injectat = critère de réussite' },
    { structure: 'Tubercule antérieur C6 (Chassaignac)', aspect: 'Saillie hyperéchogène avec cône d\'ombre franc', repere: 'Identifie le niveau C6 ; disparaît en C7' },
    { structure: 'Artère vertébrale', aspect: 'Artère de 3–4 mm, flux Doppler franc', repere: 'Masquée dans le foramen à C6, **visible et exposée en avant du transverse à C7**' },
    { structure: 'Œsophage', aspect: 'Structure en cocarde, paroi stratifiée, contenu aérique mobile à la déglutition', repere: 'En dedans, plus souvent à gauche (50 % à C6, 74 % à C7)' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist complète. VVP, scope, oxygène, intralipide vérifié. Balayage de repérage **avant** désinfection. Désinfection large, housse de sonde ou gel stérile. Seringue de 5 mL préparée et étiquetée, aiguille 25 G 40–50 mm montée sur un prolongateur purgé, tenue par l\'aide.' },
    { titre: 'Anesthésie cutanée', texte: '0,5–1 mL de lidocaïne 1 % en sous-cutané au point d\'entrée, à 1 cm du bord latéral de la sonde. Utile surtout avant une aiguille RF ; avec une 25 G on peut s\'en passer et éviter un boursouflement qui dégrade l\'image.' },
    { titre: 'Ponction in-plane, de latéral en médial', texte: 'Entrer à plat (20–30°), **visualiser l\'aiguille sur toute sa longueur en permanence** — si on perd le corps de l\'aiguille, on s\'arrête et on réaligne, on n\'avance jamais « au jugé ». La pointe passe en arrière de la gaine carotidienne, au-dessus du long du cou. Demander au patient de ne pas déglutir ni parler pendant la progression.' },
    { titre: 'Franchir le fascia prévertébral', texte: 'On sent (et on voit) un ressaut discret au franchissement du fascia. La pointe doit être **au contact de la face antérieure du long du cou, sous le fascia**, à mi-distance entre la carotide et le tubercule — **pas dans le muscle** (l\'injectat y resterait bloqué et ne diffuserait pas en caudal), **pas au-dessus du fascia** (diffusion dans la gaine carotidienne, bloc du récurrent, bloc inefficace).' },
    { titre: 'Test d\'hydrolocalisation et aspiration', texte: 'Aspiration douce dans les 4 quadrants. Injecter **0,5 mL** : la nappe anéchogène doit **décoller le fascia du muscle** et s\'étaler en dedans et en caudal. Si l\'injectat gonfle le muscle en le déformant → trop profond, reculer de 1–2 mm. Si l\'image se floute autour de la carotide → trop superficiel. Une douleur fulgurante ou une paresthésie du membre = pointe sur une racine, retirer.' },
    { titre: 'Injection fractionnée, critère de fin', texte: 'Injecter **4 à 5 mL fractionnés par 1 mL**, avec aspiration entre chaque bolus et **contact verbal maintenu** (une convulsion sur injection vertébrale survient dans les secondes, sur moins de 0,5 mL). Critère de fin : nappe sous-fasciale s\'étendant sur 2–3 cm en direction caudale, sans nappe dans la gaine carotidienne. Retrait de l\'aiguille, compression douce 3–5 min (site non compressible : on cherche à limiter, pas à obturer).' },
    { titre: 'Après le geste', texte: '**Surveillance 30 minutes minimum**, patient semi-assis, à jeun jusqu\'à l\'épreuve de déglutition. Documenter : apparition d\'un **Horner** (ptosis, myosis, énophtalmie, anhidrose, obstruction nasale homolatérale), **température cutanée** aux deux mains à 10 et 20 min, EN avant/après. Rechercher activement une dysphonie, une gêne à la déglutition, une dyspnée. Pas de conduite le jour même. Ne jamais faire de bloc bilatéral dans la même séance.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique / test avant PRF | Lidocaïne 1 % (10 mg/mL) | 4–5 mL | Installation rapide, durée courte : idéal pour objectiver le bloc (Horner + Δ température) et récupérer vite |
| Bloc thérapeutique (SDRC, zona, Raynaud) | Ropivacaïne 0,2 % (2 mg/mL) ; 0,375 % si l\'on veut une durée plus longue | 4–5 mL | Ropivacaïne = moindre cardiotoxicité que la bupivacaïne, argument dirimant sur un site où l\'injection intra-artérielle vertébrale est la complication redoutée |
| Série thérapeutique | Même schéma, 1 séance par semaine × 3–6 selon la réponse | 4–5 mL | Poursuivre seulement si gain fonctionnel objectivé ; arrêter après 2 blocs sans effet |
| Adjuvant discuté | Dexaméthasone 2–4 mg (**non particulaire**) | — | Aucun bénéfice démontré sur ce site ; **jamais de corticoïde particulaire** (bétaméthasone, méthylprednisolone, triamcinolone) : artères terminales encéphaliques à proximité immédiate |

**Volumes.** Le passage à l\'échoguidage a fait chuter le volume : 8–10 mL par voie antérieure aveugle, **4–5 mL** sous échographie en dépôt sous-fascial (Kapral 1995 : 5 mL de bupivacaïne 0,25 % échoguidée vs 8 mL à l\'aveugle, installation plus rapide en moins de 10 min). Un ECR à trois bras (*J Clin Med* 2019, 102 patients, 4 vs 6 vs 8 mL de lidocaïne 1 %) a spécifiquement testé cette question ; je n\'ai pas pu vérifier le détail de ses critères de jugement dans les sources consultées — retenir la tendance, pas un chiffre d\'autorité. **Plus de volume = plus de bloc récurrentiel et phrénique, pas plus de sympatholyse.**

**Doses maximales** : ropivacaïne 3 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), bupivacaïne 2–2,5 mg/kg. Un bloc stellaire n\'en approche jamais : le risque ici n\'est pas la dose cumulée, c\'est la **voie d\'administration** (< 0,5 mL en intra-vertébral suffit à convulser).`,

  variantes: [
    { titre: 'Voie C7 — plus efficace sur le membre supérieur, plus dangereuse', texte: `Sonde un espace plus bas : le tubercule antérieur a disparu, l\'**artère vertébrale est visible en avant du processus transverse** (Doppler impératif), le dôme pleural est à 2–3 cm en caudal et en dehors. La cible reste la même : sous le fascia prévertébral, sur le long du cou, en dedans de la carotide.

Intérêt : bloc sympathique du membre supérieur plus constant qu\'en C6 (le C6 bloque mieux la tête et le cou). Prix à payer : artère vertébrale non protégée, risque de pneumothorax, hématome plus profond et moins accessible. **Ne descendre en C7 que si l\'objectif est strictement brachial, que l\'anatomie est parfaitement lisible, et que le bloc en C6 a échoué à produire un Δ température satisfaisant.**` },
    { titre: 'Voie paracarotidienne antérieure hors du plan', texte: 'Sonde transversale, compression latérale de la gaine carotidienne par la sonde, ponction courte de dehors en dedans juste en avant de la carotide déplacée, avec progression par hydrolocalisation. Trajet court, moins de tissu traversé, mais **on ne voit que la pointe** : réservée aux opérateurs qui la pratiquent en routine. C\'est la voie décrite dans plusieurs séries coréennes (approche paracarotidienne latérale out-of-plane, comparaison C6 vs C7).' },
    { titre: 'Radiofréquence pulsée du tronc sympathique cervical', texte: `Après **bloc test positif** (soulagement ≥ 50 % pendant la durée de l\'AL, avec Horner et Δ T ≥ 1,5 °C). Aiguille RF 22 G 50–54 mm, extrémité active 5 mm, placée sous le fascia prévertébral sur le long du cou, in-plane. Stimulation sensitive 50 Hz puis motrice 2 Hz **obligatoire** : toute contraction du membre supérieur ou du diaphragme signe une pointe trop latérale (racine, phrénique) → repositionner. Paramètres usuels de PRF (42 °C, 2 Hz, 20 ms, 45 V, 120–360 s) ; **les protocoles publiés sur cette cible varient beaucoup et aucun n\'est standardisé** — série rétrospective échoguidée dans le SDRC (Pain Physician / observationnelle, > 50 % de soulagement complet) et étude comparative SGB vs PRF sous scanner dans la névralgie post-zostérienne de la face et du membre supérieur (Front Neurosci 2019, 84 patients, avantage à la PRF à 1 mois). Niveau de preuve **faible** : séries et petits essais, jamais de double aveugle.` },
    { titre: 'Ce qu\'il ne faut pas faire', texte: 'Pas de **neurolyse chimique** (alcool, phénol) du stellaire en douleur chronique bénigne : Horner définitif, névrite, risque de lésion vasculaire. Pas de **bloc bilatéral** dans la même séance (bloc récurrentiel bilatéral = obstruction des voies aériennes ; bloc phrénique bilatéral = détresse). Pas de bloc « d\'entretien » indéfini sans critère de réponse écrit.' },
  ],

  pearls: [
    'Le repère n\'est pas l\'os, c\'est le **plan fascial** : « do not follow the bone, follow the fascia ». Une pointe au contact du tubercule est trop latérale et trop profonde.',
    'Prendre la **température cutanée bilatérale avant** le geste. Sans valeur de départ, on n\'a aucun critère objectif de réussite, et le Horner seul est un mauvais juge.',
    'Faire **déglutir une fois** au balayage : l\'œsophage bouge et se remplit d\'air — c\'est le moyen le plus rapide de le démasquer, surtout à gauche.',
    'Compter les niveaux **en remontant depuis C7** (artère vertébrale antérieure, tubercule antérieur absent) plutôt qu\'en partant du cricoïde : plus fiable, notamment sur les cous courts.',
    'Injecter **par 1 mL en gardant le patient en conversation** : la convulsion sur injection vertébrale survient dans les secondes, la seule parade est de la voir tôt et d\'arrêter.',
    'Programmer le bloc **le matin d\'une journée d\'HDJ où le kinésithérapeute prend le patient dans la foulée** : dans le SDRC, la fenêtre analgésique n\'a de valeur que si elle est exploitée en mobilisation active.',
  ],
  pieges: [
    'Injecter **au-dessus** du fascia prévertébral : l\'injectat file dans la gaine carotidienne → dysphonie et échec sympathique. C\'est l\'erreur la plus fréquente.',
    'Injecter **dans** le long du cou : nappe bloquée, pas de diffusion caudale, pas de bloc du membre supérieur malgré un Horner (le Horner peut apparaître pour une diffusion céphalique minime).',
    'Tourner excessivement la tête : la carotide bascule en avant du long du cou et ferme la fenêtre latérale.',
    'Prendre l\'apparition d\'un Horner pour une réussite du bloc : le Horner signe la diffusion **céphalique**, la sympatholyse du membre supérieur se juge sur la **température**.',
    'Négliger le Doppler parce que « l\'image est belle » : l\'artère cervicale ascendante et l\'artère thyroïdienne inférieure sont invisibles en mode B et sont pile sur le trajet.',
    'Laisser repartir le patient à 15 min : l\'hématome rétropharyngé compressif et la détresse respiratoire peuvent se déclarer de façon retardée, y compris avec une aspiration négative et une hémostase normale.',
  ],
  complications: [
    '**Convulsion immédiate par injection intra-artérielle vertébrale ou carotidienne** : survient en quelques secondes, pour moins de 0,5 mL. CAT : arrêt de l\'injection, O₂, protection des voies aériennes, benzodiazépine IV, émulsion lipidique 20 % selon protocole d\'intoxication aux AL, appel de renfort. C\'est **la** complication qui impose un plateau technique et une VVP.',
    '**Hématome rétropharyngé** : rare mais potentiellement fatal par obstruction des voies aériennes ; décrit chez des patients sans trouble de l\'hémostase et avec test d\'aspiration négatif. Signes d\'alerte : dysphagie croissante, sensation de corps étranger, voix étouffée, dyspnée — dans les heures qui suivent. CAT : surveillance hospitalière, imagerie, avis ORL/anesthésie en urgence, ne jamais renvoyer un patient qui déglutit mal.',
    '**Bloc du nerf laryngé récurrent** : dysphonie, sensation de boule dans la gorge, toux à la déglutition. Fréquent, régressif avec l\'AL. CAT : rassurer, patient à jeun jusqu\'à récupération d\'une déglutition normale, **jamais de bloc controlatéral tant qu\'il persiste**.',
    '**Bloc phrénique** : hémi-diaphragme paralysé, dyspnée chez l\'insuffisant respiratoire. Régressif. CAT : position demi-assise, O₂, surveillance ; contre-indique un bloc controlatéral.',
    '**Pneumothorax** : surtout en C7 et par voie basse ; y penser devant une douleur thoracique ou une dyspnée retardée.',
    '**Injection intrathécale / péridurale cervicale** (aiguille trop médiale et profonde, manchon dural d\'une racine) : bloc rachidien haut, apnée, hypotension. Exceptionnel sous échoguidage in-plane.',
    '**Ponction œsophagienne** : médiastinite retardée ; c\'est la complication qui a motivé le passage à l\'échographie (Narouze 2007).',
    '**Effets attendus et non complications** : Horner homolatéral, obstruction nasale, injection conjonctivale, chaleur du membre, sensation de gorge serrée — les annoncer avant, faute de quoi ils seront vécus comme un accident.',
  ],
  securite: [
    '**Risque hémorragique intermédiaire (ASRA-ESRA 2018)** : site non compressible, conséquences potentiellement graves d\'un saignement. L\'arrêt de l\'aspirine et des AINS est à discuter au cas par cas ; anticoagulants curatifs : fenêtre selon la molécule et la clairance, en concertation avec le prescripteur. Ne pas transposer la règle « bloc superficiel, on ne touche à rien ».',
    '**Doppler couleur systématique sur la trajectoire complète, à basse PRF**, refait après chaque repositionnement — artère vertébrale (variante antérieure à C6), thyroïdienne inférieure, cervicale ascendante.',
    '**Aspiration entre chaque bolus de 1 mL** et contact verbal continu. Une aspiration négative n\'exclut rien (paroi artérielle collabée) : c\'est le fractionnement qui protège.',
    '**Aiguille de petit calibre (25 G)** : moins de dégâts en cas de ponction vasculaire ou œsophagienne ; le prix est une visibilité moindre, à compenser par un angle plat et une aiguille échovisible.',
    '**Jamais bilatéral dans la même séance**, jamais en ambulatoire sans surveillance de 30 min, jamais sans VVP ni intralipide disponible.',
    '**Corticoïde particulaire proscrit** sur ce site.',
    'Tracer dans le dossier : niveau piqué (C6/C7), côté, volume, Δ température, présence ou non d\'un Horner, incidents. C\'est la trace qui rend le bloc suivant interprétable — et qui tient un contrôle.',
  ],

  suivi: `- **J0 immédiat (0–30 min)** : Horner (oui/non), **température cutanée bilatérale à 10 et 20 min** — succès sympathique si Δ (côté bloqué − côté opposé) **≥ 1,5 °C** ; EN avant / à 30 min ; déglutition, voix, respiration avant la sortie.
- **J1–J7** : EN quotidienne, allodynie, œdème, coloration et sudation du membre, amplitudes actives. Dans le SDRC, noter surtout ce que le patient a **pu faire** pendant la fenêtre analgésique.
- **J15–J30** : décision — répéter (série hebdomadaire de 3 à 6 blocs) si gain fonctionnel réel ; **arrêter après 2 blocs sans effet** ; discuter la PRF du tronc sympathique si réponse franche mais brève.
- **3 mois** : EN, score fonctionnel du membre supérieur (QuickDASH), consommation d\'antalgiques, reprise d\'activité. Un SDRC qui n\'évolue pas à 3 mois malgré blocs et rééducation relève d\'une réévaluation diagnostique, pas d\'un 7e bloc.
- **Toujours coupler à la rééducation** : le bloc n\'est qu\'une fenêtre. C\'est le point où la littérature est la plus constante et où la pratique dérape le plus souvent.`,

  evidence: `- **SDRC du membre supérieur — méta-analyse (Indian J Anaesth 2023, 8 études dont 4 ECR)** : réduction significative des scores de douleur jusqu\'à 2 semaines puis de 4 à 28 semaines, amélioration des scores d\'incapacité et des amplitudes ; **hétérogénéité marquée**, effectifs faibles. Preuve **modérée à faible** : le geste marche, mais la taille d\'effet et sa durée restent mal définies.
- **Sécurité de l\'échoguidage** : Kapral 1995 (première description échoguidée, 12 patients : 5 mL échoguidés vs 8 mL à l\'aveugle, installation < 10 min) puis Narouze 2007 (prévention d\'une ponction œsophagienne) et Narouze 2014 (revue sécurité/efficacité). L\'échographie **n\'a jamais été comparée à la fluoroscopie dans un ECR de puissance suffisante sur les complications graves** — l\'argument est anatomique et de bon sens, pas statistique. Trou de la littérature à assumer.
- **Anatomie appliquée (Bhatia 2012, Can J Anaesth, 100 patients)** : sono-anatomie comparée C6/C7, œsophage latéralisé à gauche dans 48 % des cas à C6 et 72 % à C7. C\'est la meilleure justification chiffrée du repérage échographique préalable.
- **Névralgie post-zostérienne / zona (Front Neurosci 2019, 84 patients, sous scanner)** : SGB vs PRF du stellaire dans la NPZ de la face et du membre supérieur — baisse de l\'EVA dans les deux groupes, avantage à la PRF à 1 mois. Étude non aveugle, guidage scanner : transposable avec prudence.
- **PRF échoguidée du tronc sympathique cervical dans le SDRC** : série rétrospective observationnelle (2017), > 50 % des patients en soulagement complet. Niveau **faible** (pas de groupe contrôle).
- **Bouffées vasomotrices (ECR 2023, 40 femmes périménopausées, 6 SGB vs sérum salé)** : baisse significative du score de bouffées, du score de Kupperman et de la qualité du sommeil sur 12 semaines. Petit effectif, monocentrique.
- **ESPT (méta-analyse, Autonomic Neuroscience 2025)** : 394 références criblées, seulement **2 ECR + 1 étude cas-témoin** retenus ; signal favorable sur les symptômes dépressifs, conclusions explicitement limitées par le nombre d\'études. Une analyse secondaire d\'ECR (Transl Psychiatry 2024) suggère une réponse différentielle selon les clusters symptomatiques. **À traiter comme exploratoire** : ce n\'est pas une indication à ouvrir en HDJ douleur en France.
- **Ce que la littérature ne dit pas** : pas de consensus sur le nombre de blocs d\'une série, pas de comparaison directe C6 vs C7 sur des critères cliniques durs, pas de donnée robuste au-delà de 6 mois, et une définition du succès (Horner vs Δ température vs imagerie de perfusion) qui varie d\'une étude à l\'autre — ce qui explique une bonne part de l\'hétérogénéité des méta-analyses.`,

  references: [
    { auteurs: 'Kapral S, Krafft P, Gosch M, Fleischmann D, Weinstabl C', titre: 'Ultrasound imaging for stellate ganglion block: direct visualization of puncture site and local anesthetic spread', revue: 'Reg Anesth', annee: '1995', type: 'technique', note: 'Première description échoguidée ; 5 mL échoguidés vs 8 mL à l\'aveugle.' , verif: true },
    { auteurs: 'Narouze S, Vydyanathan A, Patel N', titre: 'Ultrasound-guided stellate ganglion block successfully prevented esophageal puncture', revue: 'Pain Physician', annee: '2007;10(6):747-52', pmid: '17987096', type: 'cas clinique' , verif: true },
    { auteurs: 'Narouze S', titre: 'Ultrasound-guided stellate ganglion block: safety and efficacy', revue: 'Curr Pain Headache Rep', annee: '2014;18(6):424', doi: '10.1007/s11916-014-0424-5', type: 'revue', note: 'Le plan cible : en avant-dehors du long du cou, sous le fascia prévertébral, au-dessus du fascia propre du muscle.' , verif: true },
    { auteurs: 'Bhatia A, Flamer D, Peng PW', titre: 'Evaluation of sonoanatomy relevant to performing stellate ganglion blocks using anterior and lateral simulated approaches: an observational study', revue: 'Can J Anaesth', annee: '2012', type: 'anatomie', note: '100 patients ; œsophage latéral à la trachée dans 50 % des cas à C6 et 74 % à C7.' , verif: true },
    { titre: 'Do not follow the bone, follow the nerve — ultrasound-guided stellate ganglion block: a reconfirmation', revue: 'Reg Anesth Pain Med (correspondance)', annee: '2019', pmid: '31656628', type: 'technique' , verif: true },
    { titre: 'Efficacy of stellate ganglion interventions for complex regional pain syndrome in the upper limb — a systematic review and meta-analysis', revue: 'Indian J Anaesth', annee: '2023;67(8)', pmid: '37693027', type: 'méta-analyse' , verif: true },
    { titre: 'CT-guided stellate ganglion pulsed radiofrequency stimulation for facial and upper limb postherpetic neuralgia', revue: 'Front Neurosci', annee: '2019;13:170', doi: '10.3389/fnins.2019.00170', type: 'étude comparative' , verif: true },
    { titre: 'Ultrasound-guided pulsed radiofrequency treatment of the cervical sympathetic chain for complex regional pain syndrome: a retrospective observational study', annee: '2017', pmid: '28072749', type: 'série rétrospective', note: 'Auteurs et revue non confirmés dans la recherche — vérifier sur PubMed avant citation.' , verif: true },
    { titre: 'Tonic–clonic seizure during the ultrasound-guided stellate ganglion block because of an injection into an unrecognized variant vertebral artery: a case report', annee: '2019', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6890314/', type: 'cas clinique', note: 'Le cas de référence pour la convulsion immédiate sur variante vasculaire.' , verif: true },
    { titre: 'Atypical course of vertebral artery identified by ultrasound prescan before performing a stellate ganglion block', annee: '2022', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC9272721/', type: 'cas clinique', note: 'Justifie le balayage Doppler préalable systématique.' , verif: true },
    { titre: 'Effects of stellate ganglion block on perimenopausal hot flashes: a randomized controlled trial', annee: '2023', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10715304/', type: 'ECR', note: '40 femmes, 6 blocs vs sérum salé, suivi 12 semaines.' , verif: true },
    { titre: 'Stellate ganglion blockade for the treatment of post-traumatic stress disorder: a systematic review and meta-analysis', revue: 'Auton Neurosci', annee: '2025', pmid: '41151498', type: 'méta-analyse', note: '394 références criblées, 2 ECR + 1 cas-témoin retenus.' , verif: true },
    { titre: 'Effects of stellate ganglion block through different approaches under guidance of ultrasound', revue: 'Front Surg', annee: '2021;8:797793', doi: '10.3389/fsurg.2021.797793', type: 'étude comparative' , verif: true },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Bloc stellaire = risque hémorragique intermédiaire.' , verif: true },
    { titre: 'Stellate ganglion blocks — StatPearls', revue: 'NCBI Bookshelf', annee: '2024', url: 'https://www.ncbi.nlm.nih.gov/books/NBK507798/', type: 'revue' , verif: true },
  ],
  videos: [
    { titre: 'Ultrasound-Guided Cervical Sympathetic Block', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-cervical-sympathetic-block/', note: 'sono-anatomie C6, plan sous-fascial, iconographie de référence' },
    { titre: 'Cervical Sympathetic Trunk Block', source: 'USRA (usra.ca)', url: 'https://usra.ca/pain-medicine/specific-blocks/head-neck/cervicaltrunk.php', note: 'balayage et trajectoire in-plane' },
    { titre: 'How I Do It: Stellate Ganglion Blocks', source: 'ASRA News', url: 'https://asra.com/news-publications/asra-newsletter/newsletter-item/asra-news/2020/08/01/how-i-do-it-stellate-ganglion-blocks', note: 'pas-à-pas commenté, pièges' },
    { titre: 'Stellate Ganglion Blocks — StatPearls (texte et figures)', source: 'NCBI Bookshelf', url: 'https://www.ncbi.nlm.nih.gov/books/NBK507798/' },
  ],

  scenes: [
    {
      id: 'stel-c6-repere', section: 'sonoanatomie', titre: 'Coupe transversale en C6 — repérage',
      legende: 'De dedans en dehors : trachée, lobe thyroïdien, œsophage (plus souvent à gauche), carotide commune et jugulaire interne, SCM en surface. En profondeur : le muscle long du cou coiffé du fascia prévertébral, plaqué sur le processus transverse de C6 dont le tubercule antérieur saillant (Chassaignac) masque l\'artère vertébrale déjà entrée dans le foramen. La chaîne sympathique est entre le fascia et le muscle.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, sous-cricoïdien', type: 'linéaire 8–15 MHz' });
        S.skin({ thickness: 7, fatBelow: 16 });
        S.muscle({ path: 'M170 66 L640 66 L640 132 L200 148 Z', label: 'SCM', at: [510, 105], opacity: 0.45 });
        S.fascia({ points: [[200, 148], [640, 132]], width: 1.3, opacity: 0.6 });
        S.organ({ path: 'M0 96 L150 108 L176 190 L120 238 L0 232 Z', label: 'Lobe thyroïdien', at: [72, 168], opacity: 0.6 });
        S.region({ path: 'M0 236 L96 240 L86 300 L0 302 Z', fill: '#7d868e', opacity: 0.3, label: 'Trachée', at: [42, 272], small: true });
        S.organ({ x: 150, y: 268, rx: 34, ry: 26, label: 'Œsophage', lx: 150, ly: 330, small: true, lead: [150, 292] });
        S.artery({ x: 262, y: 196, r: 30, label: 'Carotide commune', lx: 262, ly: 152, small: true });
        S.vein({ x: 350, y: 176, rx: 44, ry: 24, label: 'VJI', lx: 396, ly: 176, small: true });
        S.muscle({ path: 'M176 258 Q210 234 300 232 Q400 232 452 262 L452 316 L180 316 Z', label: 'Long du cou', at: [300, 292], opacity: 0.55 });
        S.fascia({ points: [[172, 262], [230, 236], [310, 231], [400, 240], [456, 264]], width: 2.2, opacity: 1 });
        S.label({ x: 500, y: 240, text: 'Fascia prévertébral', anchor: 'start', cls: 'lbl-fascia', small: true, lead: [430, 246] });
        S.bone({ path: 'M186 340 Q260 328 330 326 L392 322 Q412 300 428 306 Q440 318 436 336 L466 352 Q496 336 522 318 Q548 306 566 318', label: 'Processus transverse C6', at: [250, 372], ldy: 0, small: true });
        S.label({ x: 446, y: 288, text: 'Tubercule ant. (Chassaignac)', anchor: 'start', cls: 'lbl-bone', small: true, lead: [430, 304] });
        S.nerve({ x: 470, y: 340, r: 11, label: 'Racine C6', lx: 542, ly: 358, anchor: 'start', small: true, lead: [480, 342] });
        S.label({ x: 396, y: 398, text: 'A. vertébrale : dans le foramen à C6 (masquée par l\'ombre)', anchor: 'middle', cls: 'lbl-artery', small: true });
        S.nerve({ x: 296, y: 246, rx: 12, ry: 7 });
        S.label({ x: 302, y: 220, text: 'Chaîne sympathique', anchor: 'start', cls: 'lbl-nerve', small: true, lead: [298, 240] });
      },
    },
    {
      id: 'stel-c6-geste', section: 'technique', titre: 'Bloc en C6 — aiguille in-plane, latéro-médiale, rétro-carotidienne',
      legende: 'L\'aiguille passe en arrière de la gaine carotidienne et s\'arrête dès le franchissement du fascia prévertébral, au contact de la face antérieure du long du cou. L\'injectat décolle le fascia et s\'étale en dedans et en caudal vers C7-T1 : c\'est le critère de fin. Une nappe qui reste dans le muscle ou qui monte vers la carotide est un échec.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse en C6', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 7, fatBelow: 16 });
        S.muscle({ path: 'M170 66 L640 66 L640 132 L200 148 Z', label: 'SCM', at: [560, 100], opacity: 0.45 });
        S.fascia({ points: [[200, 148], [640, 132]], width: 1.3, opacity: 0.6 });
        S.organ({ path: 'M0 96 L150 108 L176 190 L120 238 L0 232 Z', label: 'Thyroïde', at: [66, 166], opacity: 0.6 });
        S.organ({ x: 150, y: 268, rx: 34, ry: 26, label: 'Œsophage', lx: 118, ly: 334, small: true, lead: [142, 292] });
        S.artery({ x: 262, y: 196, r: 30, label: 'Carotide', lx: 262, ly: 150, small: true });
        S.vein({ x: 350, y: 176, rx: 44, ry: 24 });
        S.muscle({ path: 'M176 258 Q210 234 300 232 Q400 232 452 262 L452 316 L180 316 Z', label: 'Long du cou', at: [296, 296], opacity: 0.55 });
        S.muscle({ path: 'M470 218 L640 202 L640 300 L500 300 Z', label: 'Scalène ant.', at: [566, 258], opacity: 0.4, small: true });
        S.fascia({ points: [[172, 262], [230, 236], [310, 231], [400, 240], [456, 264]], width: 2.2, opacity: 1 });
        S.bone({ path: 'M186 340 Q260 328 330 326 L392 322 Q412 300 428 306 Q440 318 436 336 L466 352 Q496 336 522 318 Q548 306 566 318' });
        S.target({ x: 330, y: 244, r: 17 });
        S.needle({ from: [640, 152], to: [340, 244], label: '25 G 40–50 mm' });
        S.spread({ x: 300, y: 250, rx: 82, ry: 15, label: '4–5 mL' });
      },
    },
    {
      id: 'stel-c7', section: 'technique', titre: 'Niveau C7 — l\'artère vertébrale n\'est plus protégée',
      legende: 'Un espace plus bas, le tubercule antérieur a disparu : l\'artère vertébrale chemine en avant du processus transverse avant d\'entrer dans le foramen de C6. Le bloc y est plus efficace sur le membre supérieur, mais le Doppler devient la condition de la ponction, et le dôme pleural est proche. Ne descendre en C7 que sur objectif brachial et anatomie parfaitement lisible.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse en C7', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 7, fatBelow: 16 });
        S.muscle({ path: 'M170 66 L640 66 L640 130 L200 146 Z', label: 'SCM', at: [560, 100], opacity: 0.45 });
        S.organ({ path: 'M0 100 L146 112 L170 192 L112 238 L0 232 Z', label: 'Thyroïde', at: [64, 168], opacity: 0.6 });
        S.organ({ x: 148, y: 272, rx: 32, ry: 24, label: 'Œsophage (74 % à gauche)', lx: 120, ly: 336, small: true, lead: [140, 296] });
        S.artery({ x: 258, y: 200, r: 30, label: 'Carotide', lx: 258, ly: 154, small: true });
        S.vein({ x: 346, y: 180, rx: 42, ry: 23 });
        S.muscle({ path: 'M180 266 Q220 246 300 244 Q380 244 434 272 L434 322 L184 322 Z', label: 'Long du cou', at: [300, 302], opacity: 0.55 });
        S.muscle({ path: 'M456 226 L640 210 L640 306 L490 306 Z', label: 'Scalène ant.', at: [560, 262], opacity: 0.4, small: true });
        S.fascia({ points: [[176, 270], [240, 248], [312, 243], [392, 252], [438, 274]], width: 2.2, opacity: 1 });
        S.bone({ path: 'M190 350 Q270 338 350 334 L432 330 Q480 330 512 316 Q548 302 574 314', label: 'Processus transverse C7\n(pas de tubercule antérieur)', at: [226, 374], ldy: 0, small: true });
        S.artery({ x: 452, y: 306, r: 12, label: 'A. vertébrale — exposée', lx: 430, ly: 356, anchor: 'end', small: true, lead: [444, 316] });
        S.target({ x: 320, y: 256, r: 16 });
        S.needle({ from: [640, 160], to: [330, 256], label: '25 G, Doppler impératif' });
        S.spread({ x: 292, y: 262, rx: 76, ry: 14, label: '4–5 mL' });
      },
    },
  ],

  checklist: [
    'VVP posée, scope, oxygène, matériel d\'intubation et émulsion lipidique 20 % vérifiés et à portée',
    'Température cutanée bilatérale mesurée AVANT le geste (comparateur du succès)',
    'Balayage C4–T1 fait avant désinfection : niveau identifié, œsophage repéré (test de déglutition), artère vertébrale localisée',
    'Doppler couleur sur la trajectoire complète, refait après tout repositionnement de sonde',
    'Patient prévenu : Horner, enrouement, nez bouché, chaleur du membre = attendus ; ne pas parler ni déglutir pendant la ponction',
    'Injection fractionnée par 1 mL avec contact verbal maintenu',
    'Aucun bloc bilatéral dans la même séance ; pas de bloc controlatéral tant que persiste une dysphonie ou un bloc phrénique',
    'Surveillance 30 min : voix, déglutition, respiration, Horner, Δ température ; consignes écrites, pas de conduite',
  ],
});
