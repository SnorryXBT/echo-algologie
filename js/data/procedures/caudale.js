/* Fiche : infiltration épidurale caudale échoguidée (hiatus sacré). */
ECHO.register({
  id: 'caudale',
  titre: 'Infiltration épidurale caudale échoguidée (hiatus sacré)',
  titreCourt: 'Épidurale caudale',
  en: 'Ultrasound-guided caudal epidural injection through the sacral hiatus — transverse "frog eyes" view of the sacral cornua, longitudinal in-plane approach beneath the sacrococcygeal ligament, colour Doppler confirmation of unidirectional flow',
  region: 'rachis-bassin',
  types: ['infiltration', 'bloc'],
  niveau: 2,
  grade: 'Bonne pour la précision du placement (l\'échoguidage égale la fluoroscopie sur le taux de succès de ponction) · modérée pour l\'efficacité clinique de l\'épidurale caudale elle-même · **nulle pour la détection de l\'injection intravasculaire**, que seule la fluoroscopie avec contraste permet',
  maj: '2026-09',
  motsCles: ['hiatus sacré', 'yeux de grenouille', 'cornes sacrées', 'ligament sacro-coccygien', 'radiculalgie', 'canal lombaire étroit', 'FBSS', 'coccygodynie', 'épidurale', 'Doppler'],
  resume: 'L\'épidurale caudale est la voie d\'accès la plus sûre à l\'espace épidural lombo-sacré : elle aborde le canal **par en bas, à distance du sac dural**, ce qui écarte le risque de brèche et rend l\'hématome épidural compressif quasi théorique. Son défaut historique — 25 à 38 % d\'échecs de ponction en repérage palpatoire seul — est précisément ce que l\'échographie corrige : les cornes sacrées en coupe transversale (« yeux de grenouille ») et le ligament sacro-coccygien en coupe longitudinale donnent un repérage direct, et les études comparatives montrent un taux de succès de ponction **équivalent à la fluoroscopie**. Ce que l\'échographie ne fait pas, et ne fera jamais : détecter une injection intravasculaire, dont l\'incidence approche 10 %. C\'est ce qui impose le corticoïde **non particulaire**, l\'aspiration et l\'injection fractionnée. La cible est large — la douleur radiculaire lombo-sacrée, le canal lombaire étroit, la douleur post-chirurgicale du rachis, la coccygodynie — mais l\'effet est celui d\'une fenêtre thérapeutique de quelques semaines à quelques mois.',

  flash: {
    position: 'procubitus', positionNote: 'coussin sous l\'abdomen, jambes en légère abduction et rotation interne des pieds ; pli inter-fessier écarté et protégé par un champ adhésif',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 3–5 cm (structure superficielle) ; convexe 2–5 MHz seulement si IMC élevé',
    approche: 'in-plane', approcheNote: 'repérage transversal (« yeux de grenouille ») puis rotation de 90° : ponction **in-plane en coupe longitudinale**, de caudal en crânial, sous le ligament sacro-coccygien',
    aiguille: '22 G 50–90 mm (aiguille spinale ou IM à biseau court) ; cathéter caudal possible mais hors HDJ',
    cible: 'Franchissement du ligament sacro-coccygien avec ressaut, puis progression de **1 à 2 cm seulement** dans le canal. **Critère de fin : flux unidirectionnel crânial au Doppler couleur pendant l\'injection, sans nappe sous-cutanée**',
    injectat: '10–20 mL : AL dilué (lidocaïne 0,5 % ou ropivacaïne 0,1–0,2 %) + corticoïde **non particulaire** (dexaméthasone 8–10 mg)',
    duree: '10–15 min',
  },

  indications: [
    '**Radiculalgie lombo-sacrée** (L5, S1) sur hernie discale ou conflit foraminal, après échec du traitement médical bien conduit — indication principale, surtout quand l\'atteinte est basse et bilatérale.',
    '**Canal lombaire étroit** avec claudication radiculaire : la voie caudale permet un gros volume et une diffusion large, adaptée à une atteinte pluri-étagée.',
    '**Douleur rachidienne post-chirurgicale** (« failed back surgery syndrome ») : la voie caudale contourne les remaniements cicatriciels et le matériel qui rendent l\'abord interlaminaire difficile ou dangereux — c\'est une de ses meilleures indications.',
    '**Coccygodynie** et douleur pelvi-périnéale basse : le dépôt bas atteint les racines sacrées basses et coccygiennes.',
    '**Patient sous anticoagulant ou à haut risque hémorragique** chez qui une épidurale interlaminaire ou une transforaminale seraient contre-indiquées : le sac dural n\'est pas abordé et l\'espace est bas — c\'est l\'argument de sécurité qui fait souvent choisir cette voie.',
    'Anatomie lombaire défavorable : arthrose sévère, arthrodèse instrumentée, obésité rendant les repères interlaminaires inexploitables.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée ou pilonidale en regard du hiatus (fréquente à cet endroit — l\'inspecter systématiquement), sepsis, allergie vraie aux amino-amides, hypertension intracrânienne.',
    '**Anatomiques** : **absence ou ossification du hiatus sacré** (variante rencontrée chez quelques pour cent des sujets) — le geste est alors impossible et l\'échographie le dit en 30 secondes, ce qui est en soi un service rendu ; agénésie sacrée, kyste de Tarlov volumineux.',
    '**Sac dural bas inséré** : le cul-de-sac dural se termine normalement en **S2**, mais peut descendre plus bas. C\'est le seul mécanisme de brèche dure-mérienne par cette voie : il impose de limiter la progression de l\'aiguille à **1–2 cm** au-delà du ligament.',
    '**Hémostase** : ASRA-ESRA 2018 classe l\'épidurale caudale parmi les procédures à **risque intermédiaire** — pas d\'arrêt systématique des antiagrégants, gestion des anticoagulants au cas par cas et en concertation avec le prescripteur (*classement conforme à la logique de la stratification, à confirmer sur la table du texte princeps*). C\'est en pratique la voie épidurale la plus tolérante sur ce plan.',
    'Corticoïde : diabète déséquilibré, insuffisance cardiaque décompensée (rétention hydrosodée avec les fortes doses), infection évolutive.',
  ],
  alternatives: 'L\'**épidurale transforaminale** est plus sélective et plus efficace sur une radiculalgie mono-radiculaire documentée, mais expose au risque artériel médullaire et impose la fluoroscopie et un corticoïde non particulaire. L\'**épidurale interlaminaire** cible mieux les niveaux hauts, au prix d\'un risque de brèche et d\'hématome épidural (fiche dédiée). La **voie caudale** est le choix quand on veut du volume, plusieurs niveaux, un accès bas, ou une marge de sécurité chez un patient à risque hémorragique ou déjà opéré. La **fluoroscopie** reste la référence quand la certitude de position et la détection du passage vasculaire comptent : l\'écho-guidage confirme la ponction, pas la diffusion.',

  anatomie: `Le **hiatus sacré** est le défaut de fusion des lames de S5 (parfois S4), fermé en arrière par le **ligament sacro-coccygien** — prolongement du ligament jaune — et bordé latéralement par les deux **cornes sacrées**, saillies osseuses palpables et immédiatement sous-cutanées. Le hiatus donne accès au **canal sacré**, prolongement direct de l\'espace épidural lombaire, contenant les racines sacrées et coccygiennes, un riche **plexus veineux épidural** et de la graisse épidurale.

Le **cul-de-sac dural se termine au niveau de S2** chez l\'adulte, soit environ au niveau de la ligne joignant les deux épines iliaques postéro-supérieures — plusieurs centimètres au-dessus du hiatus. C\'est cette distance qui fait toute la sécurité de la voie caudale.

**Variabilité anatomique** : le hiatus peut être étroit, très oblique, partiellement ou totalement **ossifié** (quelques pour cent des sujets), et sa profondeur antéro-postérieure peut descendre sous 2 mm, rendant la ponction impossible. Le sac dural peut se terminer plus bas que S2 chez une minorité de patients.

### Ce qui compte pour le geste
- **Deux vues, deux rôles** : la coupe **transversale** identifie le hiatus (les deux cornes sacrées en « yeux de grenouille », le ligament tendu entre elles, la table osseuse en dessous) ; la coupe **longitudinale** guide l\'aiguille dans son axe, sous le ligament. On ne ponctionne pas en transversal.
- **La progression doit être courte.** Une fois le ligament franchi, **1 à 2 cm suffisent**. Chaque centimètre supplémentaire rapproche du sac dural et du plexus veineux sans aucun bénéfice de diffusion — le volume fait la diffusion, pas la profondeur de l\'aiguille.
- **Le plexus veineux épidural sacré est dense**, plus qu\'ailleurs : d\'où une incidence d\'injection intravasculaire de l\'ordre de **10 %**, sans reflux de sang à l\'aspiration dans une bonne part des cas. C\'est le vrai risque du geste.
- **Structure superficielle** : le ligament est à 1–2 cm de la peau chez le sujet mince. C\'est un geste de sonde **linéaire haute fréquence**, contrairement au reste du rachis.
- **Le volume du canal sacré** est de l\'ordre de 12 à 30 mL chez l\'adulte : les volumes de 10–20 mL utilisés remontent typiquement jusqu\'à L5-S1, voire L4-L5 avec les volumes élevés.`,

  installation: {
    patient: `**Procubitus**, coussin ferme sous les crêtes iliaques, jambes légèrement écartées et **pieds en rotation interne** (détend le grand fessier et ouvre le pli inter-fessier). Écarter les fesses avec un champ adhésif large : c\'est ce qui rend le champ opératoire propre et stable, et c\'est souvent le point le plus négligé de l\'installation.

Inspecter la peau du pli inter-fessier et de la région sacro-coccygienne **avant** de désinfecter : macération, sinus pilonidal, intertrigo mycosique et lésions de grattage sont fréquents à cet endroit et contre-indiquent le geste.

Prévenir le patient de la nature du site et de la position : c\'est un geste bien toléré mais gênant, et l\'expliquer en amont évite les mouvements pendant la ponction.`,
    operateur: `Opérateur au pied de la table ou du côté à traiter, écran en face. Le repérage se fait en **transversal**, la ponction en **longitudinal**. Marqueur de sonde dirigé en crânial pour la vue longitudinale : le crânial est alors à gauche de l\'image, l\'aiguille entre par la droite (caudale) et progresse vers la gauche. La ponction est **in-plane, de caudal en crânial**, avec un angle initial de 40–50° abaissé à 15–20° dès que le ligament est franchi — c\'est ce redressement qui évite de heurter la table osseuse antérieure du canal.`,
    sonde: `- **Linéaire 6–13 MHz**, preset MSK ou « superficiel », profondeur **3–4 cm** seulement, focale sur le ligament. Une profondeur excessive est l\'erreur de réglage la plus fréquente ici : elle écrase l\'image d\'une structure qui est à 1,5 cm de la peau.
- **Convexe 2–5 MHz** uniquement chez le patient à IMC élevé.
- **Doppler couleur, PRF basse, boîte centrée sur le canal sacré** : à activer **pendant** l\'injection. C\'est l\'élément de contrôle central du geste.
- Aiguille de 22 G suffisante ; l\'angle d\'insonation est favorable (aiguille presque parallèle à la sonde), l\'aiguille reste visible sur toute sa longueur.`,
  },

  reperage: [
    { titre: 'Palper le coccyx et remonter', texte: 'Repérer le coccyx à la palpation, remonter de 3–5 cm dans le pli inter-fessier : les **cornes sacrées** sont deux petites saillies osseuses palpables, distantes de 1 à 2 cm. Marquer. Chez le sujet obèse, la palpation est prise en défaut : passer directement à l\'échographie.' },
    { titre: 'Coupe transversale : les « yeux de grenouille »', texte: 'Sonde **transversale** sur la ligne médiane, au niveau des cornes : image caractéristique de deux reliefs hyperéchogènes symétriques avec leur cône d\'ombre (les cornes), reliés par une **bande hyperéchogène** (le ligament sacro-coccygien), au-dessus d\'une deuxième ligne hyperéchogène (la table osseuse antérieure du canal). Entre les deux lignes : l\'espace **hypoéchogène** du hiatus.' },
    { titre: 'Mesurer avant de ponctionner', texte: 'Mesurer au caliper la **distance antéro-postérieure du canal** entre le ligament et la table osseuse antérieure. Si elle est inférieure à 2 mm, la ponction sera très difficile voire impossible : le dire au patient et prévoir une alternative plutôt que de multiplier les tentatives.' },
    { titre: 'Rotation de 90° : coupe longitudinale', texte: 'Rotation de la sonde de 90°, centrée sur la ligne médiane : le **ligament sacro-coccygien** apparaît comme une bande hyperéchogène oblique tendue du sacrum au coccyx ; en dessous, le **canal sacré** hypoéchogène, borné en profondeur par la table osseuse antérieure. C\'est la vue de ponction.' },
    { titre: 'Si les cornes sont introuvables', texte: 'Deux causes : sonde trop crâniale (on est sur la crête sacrée médiane, un seul relief au lieu de deux) ou trop caudale (coccyx, cornes coccygiennes plus petites et plus rapprochées). Balayer en crânio-caudal par pas de 5 mm. Si le hiatus apparaît **ossifié ou absent** — ligament continu avec l\'os, absence d\'espace hypoéchogène —, **arrêter** : c\'est une variante anatomique, pas un problème de technique, et l\'échographie vient de rendre le service d\'éviter une tentative vaine et douloureuse.' },
  ],

  sonoanatomie: [
    { structure: 'Cornes sacrées (coupe transversale)', aspect: 'Deux reliefs hyperéchogènes symétriques avec cône d\'ombre — « yeux de grenouille »', repere: 'Signature du hiatus ; 1–2 cm d\'écartement, 0,5–1,5 cm de profondeur' },
    { structure: 'Ligament sacro-coccygien', aspect: 'Bande hyperéchogène fibrillaire tendue entre les cornes (transversal) ou du sacrum au coccyx (longitudinal)', repere: 'Structure à franchir ; le ressaut au franchissement est un repère tactile fiable' },
    { structure: 'Table osseuse antérieure du canal', aspect: 'Deuxième ligne hyperéchogène, sous le ligament, avec ombre franche', repere: 'Limite profonde à ne pas heurter ; sa distance au ligament conditionne la faisabilité' },
    { structure: 'Canal sacré / espace épidural', aspect: 'Espace hypoéchogène entre les deux lignes, contenant graisse et plexus veineux', repere: 'Cible ; l\'injectat s\'y traduit par un élargissement et un flux Doppler' },
    { structure: 'Coccyx (coupe longitudinale)', aspect: 'Ligne osseuse plus caudale et plus superficielle, prolongeant le sacrum', repere: 'Repère caudal du point d\'entrée' },
    { structure: 'Crête sacrée médiane', aspect: 'Relief médian unique, plus crânial', repere: 'Si on la voit, la sonde est trop haute' },
    { structure: 'Cul-de-sac dural', aspect: 'Non visible à ce niveau', repere: 'Se termine en S2, plusieurs centimètres au-dessus du hiatus — d\'où la limite de progression de 1–2 cm' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Inspection cutanée du pli inter-fessier. Champ adhésif écartant les fesses, désinfection large, housse de sonde stérile et gel stérile. Seringues de 20 mL préparées et étiquetées, aiguille 22 G 50–90 mm sur prolongateur (la deuxième main tient la sonde). Voie veineuse non systématique mais patient surveillé.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point d\'entrée, 1 cm en dessous du bord caudal de la sonde, en infiltrant jusqu\'au ligament. Le franchissement du ligament est le temps douloureux du geste.' },
    { titre: 'Ponction in-plane, de caudal en crânial', texte: 'Aiguille engagée à **40–50°**, visualisée sur toute sa longueur, dirigée vers le ligament sacro-coccygien. Le franchissement donne un **ressaut** net et une perte de résistance. **Redresser aussitôt l\'aiguille à 15–20°** pour l\'aligner sur l\'axe du canal, puis avancer de **1 à 2 cm seulement**. Ne jamais progresser au-delà : le bénéfice est nul, le risque augmente.' },
    { titre: 'Aspiration et test', texte: 'Aspiration dans deux plans : recherche de sang (plexus veineux) et de LCS. **Une aspiration négative n\'exclut pas une position intravasculaire** — les veines épidurales sont fines et se collabent. Injecter ensuite 1–2 mL en observant : aucune nappe ne doit apparaître dans le tissu sous-cutané en arrière du ligament.' },
    { titre: 'Injection sous Doppler couleur — le critère de fin', texte: 'Activer le **Doppler couleur** avec la boîte sur le canal sacré et injecter lentement. Le signe recherché est un **flux unidirectionnel dirigé en crânial**, confiné dans le canal, persistant pendant toute l\'injection. Un signal Doppler **sous-cutané** signe une position en arrière du ligament ; une **absence de flux** signe une aiguille butée sur l\'os ou hors canal. Injecter **10 à 20 mL fractionnés par bolus de 5 mL**, avec aspiration entre chaque, en interrogeant le patient (goût métallique, acouphènes, malaise).' },
    { titre: 'Après le geste', texte: 'Retrait, compression brève, pansement. Surveillance **30 minutes minimum** : pression artérielle, signes neurologiques centraux, **test de la marche systématique** (un bloc moteur signe une diffusion intrathécale ou un volume d\'AL trop concentré). EN avant / à 30 min notée. Consignes écrites : pas de conduite le jour même, consultation en urgence en cas de céphalées posturales, de fièvre, de douleur rachidienne croissante ou de déficit moteur.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Radiculalgie L5-S1 | Lidocaïne 0,5 % ou ropivacaïne 0,1–0,2 % + **dexaméthasone 8–10 mg** | **10–15 mL** | Volume suffisant pour remonter à L5-S1. AL dilué : on cherche la diffusion, pas le bloc |
| Canal lombaire étroit, atteinte pluri-étagée | Même mélange, complété par du sérum physiologique | **15–20 mL** | Les volumes élevés remontent jusqu\'à L4-L5. Injecter lentement : la distension du canal est douloureuse |
| Douleur post-chirurgicale du rachis | AL dilué + dexaméthasone 8–10 mg ± sérum physiologique | 15–20 mL | La composante de volume (adhésiolyse hydraulique) participe à l\'effet |
| Coccygodynie, douleur pelvi-périnéale basse | AL 0,5 % + dexaméthasone 8 mg | **5–10 mL** | Petit volume : on veut rester bas, sur les racines sacrées et coccygiennes |
| Bloc diagnostique | AL seul, sans corticoïde | 10 mL | Rarement utile ici : la voie caudale est peu sélective, sa valeur diagnostique est faible |

**Corticoïde : non particulaire, et cela ne se discute pas.** À la suite de l\'alerte de sécurité de la FDA de 2014 sur les injections épidurales de corticoïdes et des recommandations multisociétés publiées dans la foulée (groupe de travail piloté par Rathmell, 2015), le principe retenu pour toute injection épidurale est d\'utiliser un corticoïde **non particulaire** — la **dexaméthasone** en pratique française. Le risque redouté (embolisation artérielle médullaire) est principalement documenté pour la voie transforaminale, mais le plexus veineux caudal, l\'incidence d\'injection intravasculaire d\'environ 10 % et l\'impossibilité de la détecter en échographie ne laissent aucune raison de prendre ce risque par la voie caudale.

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Avec 20 mL de lidocaïne 0,5 % = 100 mg, on reste très en dessous du plafond chez l\'adulte — **mais l\'injection intravasculaire ne dépend pas de la dose totale** : elle dépend de la vitesse et du fractionnement. Émulsion lipidique 20 % disponible et vérifiée.

**Rythme** : espacer les infiltrations de corticoïdes d\'au moins 4 à 6 semaines, maximum 3 à 4 par an. Trois épidurales sans effet = changement de stratégie, pas une quatrième.`,

  variantes: [
    { titre: 'Repérage échographique puis ponction sous arceau (écho-assistance)', texte: 'Le meilleur compromis quand la certitude de position compte : l\'échographie identifie le hiatus, mesure la profondeur du canal et guide la ponction ; l\'injection d\'une petite quantité de contraste sous arceau confirme l\'**épidurogramme** et écarte le passage vasculaire. C\'est la stratégie à retenir chez le patient déjà opéré, quand l\'anatomie est remaniée, ou quand un doute persiste sur la position.' },
    { titre: 'Épidurale caudale de gros volume (adhésiolyse hydraulique)', texte: 'Utilisation de volumes de 20 à 30 mL (AL dilué + sérum physiologique + corticoïde) pour rompre mécaniquement les adhérences épidurales dans les douleurs post-chirurgicales. À injecter **très lentement** : la distension du canal provoque une douleur radiculaire reproduisant la douleur habituelle, ce qui a une valeur sémiologique mais impose de fractionner et de s\'arrêter si elle est intolérable. À distinguer de l\'adhésiolyse épidurale par cathéter (technique de Racz), qui n\'est pas un geste échoguidé et sort du périmètre de cette fiche.' },
    { titre: 'Bloc du nerf coccygien et du ganglion impar', texte: 'Dans la coccygodynie rebelle, l\'épidurale caudale de petit volume peut être complétée ou remplacée par un bloc du **ganglion impar** (voie trans-sacro-coccygienne, fiche dédiée). Le repérage échographique du disque sacro-coccygien se fait dans la même position et avec les mêmes repères.' },
    { titre: 'Cathéter caudal', texte: 'Décrit pour l\'analgésie continue et l\'adhésiolyse. **Sans objet en HDJ douleur** : logistique de perfusion, risque infectieux d\'un cathéter en région péri-anale, surveillance hospitalière. À laisser aux structures d\'hospitalisation.' },
  ],

  pearls: [
    'Régler la profondeur à 3–4 cm : le hiatus est à 1,5 cm de la peau, c\'est un geste de sonde linéaire haute fréquence, pas de convexe.',
    'Mesurer la distance ligament–table osseuse antérieure avant de ponctionner : en dessous de 2 mm, annoncer la difficulté au patient et prévoir une alternative.',
    'Redresser l\'aiguille dès le franchissement du ligament : c\'est le geste qui évite de buter sur la table antérieure et de forcer.',
    '1 à 2 cm de progression, pas plus. C\'est le volume qui fait la diffusion crâniale, pas la profondeur de l\'aiguille.',
    'Le Doppler couleur pendant l\'injection est le vrai critère de fin : flux crânial confiné dans le canal, aucun signal sous-cutané.',
    'Un hiatus ossifié se voit en 30 secondes : l\'échographie évite alors une série de tentatives infructueuses et douloureuses. C\'est un service rendu, pas un échec.',
    'Inspecter la peau du pli inter-fessier avant de désinfecter : les lésions cutanées y sont fréquentes et contre-indiquent le geste.',
  ],
  pieges: [
    'Croire que l\'aspiration négative écarte une position intravasculaire : les veines épidurales se collabent. Seule l\'injection fractionnée protège.',
    'Utiliser un corticoïde particulaire « puisque c\'est une caudale » : la voie est plus sûre, le produit doit rester non particulaire.',
    'Ponctionner en coupe transversale : l\'aiguille est hors du plan et la profondeur est incontrôlée. Le repérage est transversal, la ponction longitudinale.',
    'Avancer l\'aiguille de 4–5 cm dans le canal « pour mieux remonter » : on gagne un risque de brèche et de ponction veineuse, sans rien gagner en diffusion.',
    'Injecter en arrière du ligament : nappe sous-cutanée visible, aucune diffusion épidurale, patient étiqueté « non répondeur ».',
    'Ignorer une variante de sac dural bas inséré : c\'est le seul mécanisme de brèche par cette voie, et il est évité par la règle des 1–2 cm.',
    'Laisser sortir le patient sans test de la marche après 15–20 mL d\'AL, même dilué.',
  ],
  complications: [
    '**Injection intravasculaire** (incidence de l\'ordre de 10 % à l\'aveugle, non détectable en échographie) : signes prodromiques de toxicité systémique — goût métallique, acouphènes, agitation, dysarthrie → arrêt immédiat, oxygène, émulsion lipidique 20 % 1,5 mL/kg en bolus puis 0,25 mL/kg/min, appel à l\'aide.',
    '**Ponction dure-mérienne et injection intrathécale** : possible seulement si le sac dural est bas inséré et si l\'aiguille est trop enfoncée. Rachianesthésie totale si le volume est important — bloc moteur ascendant, hypotension, détresse respiratoire : c\'est une urgence vitale. Prévention : règle des 1–2 cm, aspiration, injection fractionnée.',
    'Céphalées post-brèche : posturales, retardées de 24–48 h ; repos, hydratation, caféine, avis pour blood patch si elles persistent au-delà de 72 h.',
    '**Hématome épidural compressif** : quasi théorique par cette voie (espace bas, sac dural non abordé) — c\'est l\'argument de sécurité principal de la caudale.',
    '**Infection** : abcès épidural ou méningite, exceptionnels mais graves, et le site péri-anal est le plus exposé de tout le rachis. Asepsie chirurgicale stricte, contre-indication absolue en cas de lésion cutanée locale. Toute fièvre avec douleur rachidienne dans les jours suivants impose une IRM en urgence.',
    'Ponction du plexus veineux avec hématome local, douleur et ecchymose du pli inter-fessier : bénin.',
    'Rétention urinaire transitoire (bloc des racines sacrées) : rare avec les AL dilués ; vérifier la miction avant la sortie chez le patient à risque.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie, rétention hydrosodée.',
  ],
  securite: [
    '**L\'échographie ne détecte pas l\'injection intravasculaire.** Cette phrase doit rester présente à l\'esprit à chaque geste : elle commande le corticoïde non particulaire, l\'aspiration dans deux plans, l\'injection fractionnée par bolus de 5 mL et l\'interrogatoire du patient entre les bolus.',
    'Progression limitée à 1–2 cm au-delà du ligament : la seule protection contre la brèche dure-mérienne.',
    'Doppler couleur pendant l\'injection : flux crânial confiné dans le canal ; tout signal sous-cutané fait repositionner.',
    'Corticoïde **non particulaire** (dexaméthasone) — recommandations multisociétés post-alerte FDA 2014.',
    'Émulsion lipidique 20 % et chariot d\'urgence vérifiés avant le geste ; surveillance 30 min avec test de la marche et contrôle tensionnel.',
    'Risque hémorragique **intermédiaire** (ASRA-ESRA 2018) : pas d\'arrêt systématique des antiagrégants, anticoagulants au cas par cas — mais c\'est la voie épidurale la plus permissive de ce point de vue.',
    'Asepsie chirurgicale et inspection cutanée préalable : le site péri-anal est le plus à risque infectieux du rachis.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, test de la marche, vérification de la miction. Consignes écrites remises (signes d\'alerte : céphalées posturales, fièvre, déficit moteur, douleur rachidienne croissante).
- **J7–J15** : EN, périmètre de marche (particulièrement pertinent dans le canal lombaire étroit), consommation d\'antalgiques, sommeil. Le délai d\'action de la dexaméthasone est de 2 à 7 jours : ne pas conclure à J1.
- **J30–J45** : décision. Réponse franche et durable → surveiller et espacer ; réponse partielle → une deuxième infiltration est légitime (espacer de 4 à 6 semaines) ; **aucune réponse → ne pas répéter une troisième fois à l\'identique** : reconsidérer la cible (transforaminale ciblée sur la racine, bloc facettaire, autre diagnostic) ou l\'indication chirurgicale.
- **À 3 mois** : bilan de l\'épisode. L\'effet attendu d\'une épidurale caudale est une **fenêtre de quelques semaines à quelques mois**, à utiliser pour reprendre l\'activité et la rééducation — c\'est ce qui conditionne le résultat à un an, pas le nombre d\'infiltrations.
- Tracer : volume total, produits, guidage, aspect du flux Doppler, tolérance, EN avant/après, et l\'existence éventuelle d\'un hiatus difficile ou ossifié (information précieuse pour la fois suivante).`,

  evidence: `- **Repérage échographique du hiatus (Klocke et coll., 2003 ; Chen et coll., 2004)** : les deux travaux fondateurs décrivent les vues transversale (« yeux de grenouille ») et longitudinale et établissent la faisabilité de l\'infiltration caudale échoguidée. Chen et son équipe ont ensuite proposé l\'échographie comme **outil de dépistage** de l\'anatomie hiatale avant de tenter le geste — c\'est probablement l\'apport le plus solide de l\'échographie ici : elle dit à l\'avance si le geste est faisable.
- **Précision du placement** : les séries et les comparaisons publiées retrouvent un **taux de succès de ponction élevé, comparable à celui de la fluoroscopie** (essais randomisés de petite taille, dont celui de Park et coll., 2013, dans la radiculalgie lombaire basse), avec des résultats cliniques équivalents et une durée de procédure souvent moindre. Preuve **modérée**, sur de petits effectifs.
- **Doppler couleur** : la vérification du flux pendant l\'injection a été proposée comme substitut à l\'épidurogramme (travaux coréens des années 2000, notamment autour de Yoon). Elle confirme que l\'injectat entre dans le canal ; elle **ne dit rien du passage vasculaire**. C\'est un contrôle de position, pas un contrôle de sécurité.
- **Échec du repérage palpatoire seul** : c\'est le point sur lequel la littérature est la plus constante — de l\'ordre de **25 à 38 % d\'échecs** de placement en repérage anatomique, même chez des opérateurs expérimentés. C\'est l\'argument principal en faveur du guidage, quel qu\'il soit.
- **Injection intravasculaire** : incidence rapportée de l\'ordre de **10 %** en repérage aveugle, avec une aspiration souvent faussement négative. Aucune modalité échographique ne la détecte. Ce chiffre est la justification directe du corticoïde non particulaire et du fractionnement.
- **Efficacité clinique de l\'épidurale caudale** (indépendamment du guidage) : preuve **modérée** dans la radiculalgie lombo-sacrée et le canal lombaire étroit, avec un effet à court et moyen terme (semaines à quelques mois) et un bénéfice moins net au-delà de 6 mois ; les essais de Manchikanti et de son équipe, publiés dans *Pain Physician*, constituent le corpus le plus fourni, avec les réserves méthodologiques et le conflit d\'interprétation bien connus sur ce sujet.
- **Sécurité des corticoïdes épiduraux** : l\'alerte de la FDA de 2014 et les recommandations multisociétés qui ont suivi (groupe de travail piloté par Rathmell, publié dans *Anesthesiology* en 2015) ont établi le principe du **corticoïde non particulaire** pour les injections épidurales. C\'est aujourd\'hui la position de référence.
- **Les trous de la littérature** : pas d\'essai de grande taille comparant écho et fluoroscopie sur des **critères cliniques à 6 mois** ; pas de données sur la valeur du Doppler pour prévenir les complications ; et un débat non tranché sur le bénéfice réel des corticoïdes épiduraux au-delà de 3 mois dans la radiculalgie.`,

  references: [
    { auteurs: 'Chen CPC, Tang SFT, Hsu TC, et al.', titre: 'Ultrasound guidance in caudal epidural needle placement', revue: 'Anesthesiology', annee: '2004', type: 'faisabilité', note: 'Description des vues transversale et longitudinale.', verif: false },
    { auteurs: 'Klocke R, Jenkinson T, Glew D', titre: 'Sonographically guided caudal epidural steroid injections', revue: 'Journal of Ultrasound in Medicine', annee: '2003', type: 'faisabilité', verif: false },
    { auteurs: 'Chen CPC, Wong AMK, Hsu CC, et al.', titre: 'Ultrasound as a screening tool for proceeding with caudal epidural injections', revue: 'Archives of Physical Medicine and Rehabilitation', annee: '2010', type: 'étude clinique', note: 'L\'échographie comme outil de dépistage de la faisabilité anatomique.', verif: false },
    { auteurs: 'Yoon JS, Sim KH, Kim SJ, Kim WS, Koh SB, Kim BJ', titre: 'The feasibility of color Doppler ultrasonography for caudal epidural steroid injection', revue: 'Pain', annee: '2005', type: 'étude clinique', note: 'Contrôle du flux unidirectionnel au Doppler couleur.', verif: false },
    { auteurs: 'Park Y, Lee JH, Park KD, Ahn JK, Park J, Jee H', titre: 'Ultrasound-guided vs. fluoroscopy-guided caudal epidural steroid injection for the treatment of unilateral lower lumbar radicular pain', revue: 'American Journal of Physical Medicine and Rehabilitation', annee: '2013', type: 'ECR', verif: false },
    { auteurs: 'Rathmell JP, Benzon HT, Dreyfuss P, et al.', titre: 'Safeguards to prevent neurologic complications after epidural steroid injections: consensus opinions from a multidisciplinary working group and national organizations', revue: 'Anesthesiology', annee: '2015', type: 'reco', note: 'Fondement de la règle du corticoïde non particulaire.', verif: false },
    { auteurs: 'U.S. Food and Drug Administration', titre: 'Drug safety communication: FDA requires label changes to warn of rare but serious neurologic problems after epidural corticosteroid injections for pain', revue: 'FDA Drug Safety Communication', annee: '2014', type: 'alerte de sécurité', verif: false },
    { auteurs: 'Manchikanti L, Cash KA, McManus CD, Pampati V, Benyamin RM', titre: 'Preliminary results of a randomized, equivalence trial of fluoroscopic caudal epidural injections in managing chronic low back pain', revue: 'Pain Physician', annee: '2008', type: 'ECR', verif: false },
    { auteurs: 'Senoglu N, Senoglu M, Oksuz H, et al.', titre: 'Landmarks of the sacral hiatus for caudal epidural block: an anatomical study', revue: 'British Journal of Anaesthesia', annee: '2005', type: 'anatomie', note: 'Variabilité du hiatus et fréquence des variantes défavorables.', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'cau-transverse', section: 'sonoanatomie', titre: 'Coupe transversale du hiatus sacré — les « yeux de grenouille »',
      legende: 'Les deux cornes sacrées apparaissent comme deux reliefs hyperéchogènes symétriques avec leur cône d\'ombre, reliés par la bande hyperéchogène du ligament sacro-coccygien ; en dessous, la table osseuse antérieure du canal. L\'espace hypoéchogène entre les deux lignes est le hiatus. Mesurer sa hauteur avant de ponctionner : en dessous de 2 mm, le geste sera très difficile.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Gauche', right: 'Droite' }).probeInfo({ plan: 'Transverse sur les cornes sacrées', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.bone({ path: 'M196 158 Q240 118 284 158' });
        S.bone({ path: 'M356 158 Q400 118 444 158' });
        S.label({ x: 178, y: 112, text: 'Corne sacrée', anchor: 'end', cls: 'lbl-bone', small: true, lead: [238, 126] });
        S.label({ x: 462, y: 112, text: 'Corne sacrée', anchor: 'start', cls: 'lbl-bone', small: true, lead: [402, 126] });
        S.ligament({ path: 'M204 164 L438 164 L438 182 L204 182 Z' });
        S.label({ x: 320, y: 150, text: 'Ligament sacro-coccygien', cls: 'lbl-lig', small: true });
        S.region({ path: 'M208 184 L434 184 L446 236 L192 234 Z', fill: '#04070a', opacity: 0.92 });
        S.label({ x: 320, y: 212, text: 'Hiatus sacré = espace épidural', cls: 'lbl-fluid', small: true });
        S.bone({ path: 'M170 240 L472 244', label: 'Table osseuse antérieure du canal', at: [320, 288], small: true });
      },
    },
    {
      id: 'cau-long', section: 'technique', titre: 'Coupe longitudinale — ponction in-plane sous le ligament sacro-coccygien',
      legende: 'Après rotation de 90°, l\'aiguille est engagée à 40–50° et franchit le ligament avec un ressaut net, puis est immédiatement redressée à 15–20° et avancée de 1 à 2 cm seulement. Le critère de fin est le flux unidirectionnel crânial au Doppler couleur pendant l\'injection, confiné dans le canal et sans nappe sous-cutanée.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial (sacrum)', right: 'Caudal (coccyx)' }).probeInfo({ plan: 'Longitudinal médian', type: 'in-plane caudo-crânial' });
        S.skin({ thickness: 8, fatBelow: 24 });
        S.bone({ path: 'M0 148 L228 158', shadow: false, label: 'Sacrum (table postérieure)', at: [104, 132], small: true });
        S.ligament({ path: 'M232 158 L462 172 L462 188 L232 174 Z' });
        S.label({ x: 344, y: 142, text: 'Ligament sacro-coccygien', cls: 'lbl-lig', small: true });
        S.bone({ path: 'M472 180 L622 194', label: 'Coccyx', at: [556, 224], small: true });
        S.region({ path: 'M0 162 L232 174 L462 190 L618 204 L618 262 L0 250 Z', fill: '#04070a', opacity: 0.92 });
        S.bone({ path: 'M0 254 L640 270' });
        S.label({ x: 150, y: 292, text: 'Table osseuse antérieure', cls: 'lbl-bone', small: true });
        S.target({ x: 400, y: 172, r: 13 });
        S.needle({ from: [630, 118], to: [292, 192], label: '22 G 50–90 mm' });
        S.spread({ x: 176, y: 214, rx: 120, ry: 22, label: '10–20 mL' });
      },
    },
    {
      id: 'cau-securite', section: 'technique', titre: 'Limite de progression — le cul-de-sac dural se termine en S2',
      legende: 'Le sac dural s\'arrête plusieurs centimètres au-dessus du hiatus, à hauteur de la ligne des épines iliaques postéro-supérieures — c\'est ce qui fait la sécurité de la voie caudale. La seule façon de la perdre est d\'enfoncer l\'aiguille : 1 à 2 cm au-delà du ligament suffisent, la diffusion crâniale étant assurée par le volume et non par la profondeur de l\'aiguille.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial (S2)', right: 'Caudal (hiatus)' }).probeInfo({ plan: 'Longitudinal médian, champ élargi', type: 'schéma de sécurité' });
        S.skin({ thickness: 8, fatBelow: 24 });
        S.bone({ path: 'M0 148 L228 158', shadow: false });
        S.ligament({ path: 'M232 158 L462 172 L462 188 L232 174 Z' });
        S.bone({ path: 'M472 180 L622 194' });
        S.region({ path: 'M0 162 L232 174 L462 190 L618 204 L618 262 L0 250 Z', fill: '#04070a', opacity: 0.92 });
        S.bone({ path: 'M0 254 L640 270' });
        S.region({ path: 'M0 178 L122 198 L122 232 L0 236 Z', fill: '#0d2440', opacity: 0.85 });
        S.label({ x: 56, y: 114, text: 'Cul-de-sac dural\n(fin en S2)', anchor: 'start', small: true, lead: [92, 196] });
        S.needle({ from: [630, 118], to: [346, 186], label: '22 G' });
        S.label({ x: 356, y: 152, text: '1 à 2 cm au-delà du ligament — pas plus', small: true });
        S.spread({ x: 258, y: 216, rx: 84, ry: 20, label: 'Flux crânial au Doppler' });
      },
    },
  ],

  checklist: [
    'Peau du pli inter-fessier inspectée (sinus pilonidal, intertrigo, lésions de grattage) avant désinfection',
    'Hiatus identifié en coupe transversale et hauteur du canal mesurée (< 2 mm : prévenir et prévoir une alternative)',
    'Corticoïde **non particulaire** (dexaméthasone) vérifié sur l\'étiquette avant préparation',
    'Progression de l\'aiguille limitée à 1–2 cm au-delà du ligament',
    'Doppler couleur activé pendant l\'injection : flux crânial confiné, aucun signal sous-cutané',
    'Injection fractionnée par bolus de 5 mL avec aspiration et interrogatoire du patient entre chaque',
    'Émulsion lipidique 20 % vérifiée et immédiatement disponible',
    'Surveillance 30 min : tension, test de la marche, miction ; consignes écrites de signes d\'alerte remises',
  ],
});
