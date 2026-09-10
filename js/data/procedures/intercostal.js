/* Fiche : bloc intercostal échoguidé — douleur thoracique chronique, PRF, cryoneurolyse. */
ECHO.register({
  id: 'intercostal',
  titre: 'Bloc intercostal échoguidé',
  titreCourt: 'Intercostal',
  en: 'Ultrasound-guided intercostal nerve block at the rib angle / posterior axillary line; intercostal pulsed radiofrequency, thermal radiofrequency and cryoneurolysis for chronic thoracic pain',
  region: 'thorax',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Faible en douleur chronique (séries, un ECR défavorable à la PRF intercostale) ; solide en analgésie aiguë',
  maj: '2026-09',
  motsCles: ['névralgie intercostale', 'névralgie post-zostérienne', 'douleur post-thoracotomie', 'fractures de côtes', 'côte glissante', 'slipping rib', 'cryoanalgésie', 'PRF', 'pneumothorax', 'LAST', 'angle costal'],
  resume: 'Le bloc le plus ancien de la paroi thoracique, redevenu défendable grâce à l’échographie qui montre la plèvre en temps réel. On aborde le nerf à l’angle de la côte ou sur la ligne axillaire postérieure, sonde sagittale, en visant le plan entre intercostal interne et intercostal intime, sous le bord inférieur de la côte. Le paquet vasculo-nerveux n’est pas toujours visible : la cible est un plan, jamais un nerf. Trois particularités commandent la pratique : la plèvre est à quelques millimètres, l’absorption systémique des anesthésiques locaux y est la plus élevée de tous les blocs périphériques, et le recouvrement métamérique impose de bloquer un ou deux niveaux au-dessus et au-dessous du territoire douloureux. En douleur chronique, le bloc vaut surtout comme test : la littérature interventionnelle est mince et le seul essai comparatif disponible place la radiofréquence pulsée du ganglion spinal au-dessus de la PRF intercostale.',

  flash: {
    position: 'ventral', positionNote: 'décubitus ventral (coussin sous le thorax) ou latéral côté à traiter vers le haut, bras tiré vers l’avant pour dégager la scapula ; assis penché en avant si la position couchée est impossible',
    sonde: 'lineaire', sondeNote: '8–15 MHz, profondeur 3–5 cm ; convexe 3–5 MHz si paroi épaisse — mais la plèvre doit rester parfaitement visible',
    approche: 'in-plane', approcheNote: 'sonde **sagittale**, perpendiculaire aux côtes ; aiguille dans le plan, caudo-crâniale (ou crânio-caudale selon l’accès), tangentielle à la plèvre',
    aiguille: '22–25 G, 40–50 mm écho-visible ; aiguille RF 22 G 50–100 mm à extrémité active 5–10 mm ; sonde cryo 14–18 G',
    cible: 'Plan entre **intercostal interne et intercostal intime**, immédiatement sous le bord inférieur de la côte ; nappe anéchogène qui décolle les deux muscles et **éloigne la plèvre** sans la traverser',
    injectat: '3–5 mL par niveau, 3 à 5 niveaux au maximum — additionner les doses',
    duree: '10 min pour un niveau · 20–25 min pour trois · 25–35 min PRF ou cryoneurolyse',
  },

  indications: [
    '**Névralgie post-zostérienne** thoracique : bloc test et bloc antalgique répété, souvent le seul geste réalisable chez un sujet âgé et fragile.',
    '**Douleur chronique post-thoracotomie** (PTPS) et post-vidéothoracoscopie : composante pariétale et cicatricielle, souvent mixte neuropathique.',
    'Séquelles de **fractures de côtes** : cal vicieux, pseudarthrose costale, névralgie post-traumatique persistante.',
    '**Syndrome de la côte glissante** (slipping rib) : douleur du rebord costal antérieur, reproduite par la manœuvre du crochet ; le bloc des nerfs intercostaux 8 à 10 sert de test avant chirurgie.',
    'Névralgie intercostale post-chirurgicale (drain thoracique, thoracotomie de prélèvement, pose de pacemaker) ou post-radique.',
    'Douleur pariétale d’origine tumorale (métastase costale, envahissement pariétal) : bloc antalgique, puis neurolyse ou cryoneurolyse en situation palliative.',
    'Bloc test avant PRF, radiofréquence thermique, cryoneurolyse ou neurolyse chimique.',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée du point de ponction, allergie vraie aux amino-amides.',
    '**Insuffisance respiratoire sévère, emphysème bulleux, poumon unique, pneumonectomie controlatérale** : un pneumothorax même minime y serait catastrophique. Contre-indication relative forte — si le geste est indispensable, le faire en milieu où un drainage est immédiatement possible.',
    'Hémostase : bloc nerveux périphérique, classé à **faible risque hémorragique** dans la stratification ASRA-ESRA 2018 — pas d’arrêt systématique des antiagrégants. Nuance clinique à ne pas perdre : le site n’est **pas compressible** et l’artère intercostale chemine dans la gouttière, si bien qu’un hématome extra-pleural est possible. Sous anticoagulation curative non interrompue, peser l’indication au cas par cas et préférer l’ESP block.',
    'Blocs multiples chez un patient de faible poids : le facteur limitant est la **dose totale d’anesthésique local**, pas la technique.',
    'Corticoïdes : diabète déséquilibré, infection évolutive ; ne pas dépasser 3 injections par an sur le même site.',
  ],
  alternatives: 'Le bloc intercostal n’est pas toujours le meilleur choix, et souvent pas le premier. **ESP block** (erector spinae plane, fiche dédiée) : plus simple, plus sûr, loin de la plèvre, couvre plusieurs métamères en une injection — c’est aujourd’hui l’alternative de première intention pour une douleur pariétale thoracique plurimétamérique. **Bloc paravertébral thoracique** (fiche dédiée) : couverture métamérique plus complète, incluant la composante viscérale et sympathique, au prix d’un risque supérieur. **Serratus plane block** pour les douleurs latérales et post-mastectomie. **PRF du ganglion spinal (DRG)** au niveau correspondant : dans le seul essai comparatif disponible en douleur thoracique post-chirurgicale chronique, elle fait mieux que la PRF intercostale et que le traitement médicamenteux. En traitement de fond : antalgiques des douleurs neuropathiques, emplâtre de lidocaïne 5 % (très adapté à la névralgie post-zostérienne localisée), capsaïcine 8 % en patch. Le bloc intercostal garde sa place quand la douleur est **strictement mono- ou bimétamérique** et bien localisée, et comme test avant un geste lésionnel.',

  anatomie: `Le nerf intercostal est la branche antérieure du nerf spinal thoracique. Après sa sortie du foramen, il chemine dans l’**espace paravertébral**, donne la branche cutanée postérieure, puis entre dans l’**espace intercostal** où il progresse dans la **gouttière costale**, sous le bord inférieur de la côte, accompagné en haut de la veine et de l’artère intercostales : de haut en bas, **veine – artère – nerf (V-A-N)**.

De la superficie à la profondeur, l’espace intercostal contient trois plans musculaires : **intercostal externe**, **intercostal interne**, et **intercostal intime** (innermost). Le paquet vasculo-nerveux chemine **entre l’intercostal interne et l’intercostal intime** — c’est donc là qu’il faut déposer l’injectat, et non dans l’intercostal externe où l’on est trop superficiel.

À l’**angle de la côte** (6–8 cm de la ligne médiane), la gouttière costale est bien creusée et le nerf y est le plus constamment protégé par le bord inférieur de la côte : c’est le site historique et le meilleur compromis. Plus en avant, sur la **ligne axillaire postérieure**, la gouttière s’efface progressivement et le nerf devient plus exposé, mais l’accès est plus commode chez un patient qui ne peut pas se mettre en décubitus ventral.

### Ce qui compte pour le geste
- **Le paquet vasculo-nerveux n’est pas toujours visible.** Il est masqué par l’ombre de la côte et mesure quelques millimètres. La cible utile est le **plan**, repéré par l’angle rentrant sous le bord inférieur de la côte. Chercher le nerf fait perdre du temps et pousse à approfondir : c’est ainsi qu’on fait un pneumothorax.
- **La plèvre est le repère de sécurité, pas un obstacle.** Ligne hyperéchogène brillante et **glissante** avec la respiration, à 5–10 mm sous l’intercostal intime. Elle doit être visible **en permanence** pendant la ponction. Un injectat correctement placé la **repousse** légèrement — c’est un bon signe.
- **Recouvrement métamérique constant.** Chaque territoire cutané reçoit des fibres de plusieurs nerfs adjacents et le nerf donne une branche collatérale qui court sur le bord supérieur de la côte sous-jacente. Un bloc mono-étagé laisse presque toujours une bande douloureuse : bloquer **un à deux niveaux au-dessus et au-dessous**.
- **Absorption systémique maximale.** L’espace intercostal est le territoire qui donne les **concentrations plasmatiques d’anesthésique local les plus élevées** de tous les blocs périphériques, à dose égale. C’est la contrainte dominante quand on bloque plusieurs niveaux, et l’argument pour l’adrénaline diluée dans cette indication.
- **Diffusion médiale possible.** Une injection trop proche de l’angle costal, sous pression, peut remonter dans l’espace paravertébral et, exceptionnellement, atteindre l’espace épidural. Argument supplémentaire pour un abord un peu latéral et une injection lente.
- **Compter les côtes** : partir de la **12e** (la plus basse ; les 11e et 12e sont flottantes, la 12e est la première rencontrée en balayant de bas en haut) ou de la pointe de la scapula (en regard de la 7e côte / de T7 environ, repère grossier à vérifier sur chaque patient), puis remonter ou descendre en marquant chaque espace au feutre.
- **Profondeurs usuelles** : plèvre à 1,5–3 cm chez l’adulte mince, jusqu’à 4–5 cm si surcharge pondérale. Le plan cible est 5–10 mm au-dessus d’elle.`,

  installation: {
    patient: `**Décubitus ventral** avec un coussin sous le thorax : c’est la position de référence pour l’angle costal ; les scapulas se relâchent, les repères sont symétriques et on peut traiter plusieurs niveaux d’affilée.

**Décubitus latéral**, côté à traiter vers le haut, bras tiré vers l’avant pour éloigner la scapula : bon compromis chez le patient dyspnéique ou opéré. **Assis penché en avant**, bras croisés sur un support, quand la position couchée est impossible — mais attention au malaise vagal.

Repérer et **marquer chaque espace intercostal au feutre** avant de désinfecter, en comptant depuis la 12e côte. Marquer aussi la zone douloureuse et la cicatrice. Compter les côtes sur un patient déjà badigeonné est le meilleur moyen de se tromper de niveau.

Voie veineuse recommandée dès que l’on prévoit plusieurs niveaux (dose cumulée d’AL). Surveillance 30 min minimum, plus longue si le patient est respiratoirement limite.`,
    operateur: `Opérateur du côté à traiter, écran en face. Sonde **sagittale, perpendiculaire à l’axe des côtes**, à 6–8 cm de la ligne médiane (angle costal) : la coupe montre deux côtes en section, séparées par l’espace intercostal, avec la plèvre au fond.

Ponction **dans le plan**, du côté qui donne l’angle le plus **tangentiel à la plèvre** : le plus souvent **caudo-crâniale**, l’aiguille venant du bas de l’image et se logeant sous le bord inférieur de la côte supérieure. Le principe est de faire progresser la pointe **parallèlement** à la plèvre, jamais vers elle.`,
    sonde: `- Linéaire 8–15 MHz, preset MSK ou nerf, **profondeur 3–5 cm**, focale sur la plèvre, gain réglé pour que la ligne pleurale soit franchement brillante et le glissement pleural visible.
- **Vérifier le glissement pleural avant ET après** chaque niveau bloqué : c’est le dépistage immédiat d’un pneumothorax (mode M et signe du « bord de mer » si doute).
- **Doppler couleur** sur l’espace : l’artère intercostale est parfois visible dans la gouttière ; l’absence de signal ne prouve rien, mais un signal impose de décaler la pointe.
- Convexe 3–5 MHz si la paroi est épaisse — à condition que la plèvre reste nette. Si l’on ne voit pas la plèvre, on ne fait pas le geste.
- Aiguille écho-visible obligatoire : l’angle d’insonation est plat et la marge d’erreur est de quelques millimètres.`,
  },

  reperage: [
    { titre: 'Compter les côtes', texte: 'Sonde sagittale paravertébrale, balayage de bas en haut pour identifier la **12e côte** (la plus basse, flottante, sans continuité antérieure), puis remonter espace par espace en marquant au feutre. Vérification croisée par la pointe de la scapula (7e côte / T7 environ). Se tromper de niveau est l’erreur la plus fréquente et la plus silencieuse.' },
    { titre: 'Obtenir la coupe à deux côtes', texte: 'Sonde sagittale à 6–8 cm de la ligne médiane : deux **arcs hyperéchogènes convexes avec cône d’ombre** (les côtes en section), séparés par l’espace intercostal. Cette image « en deux bosses » est la coupe de travail.' },
    { titre: 'Identifier la plèvre et son glissement', texte: 'Au fond de l’espace, une **ligne hyperéchogène brillante qui glisse** avec la respiration, avec en dessous les artefacts du poumon (queues de comète, lignes A). **Aucune ponction tant que cette ligne n’est pas identifiée et son glissement vérifié.**' },
    { titre: 'Distinguer les trois plans musculaires', texte: 'Entre les deux côtes, de la superficie à la profondeur : **intercostal externe**, **intercostal interne**, puis la fine lame de l’**intercostal intime** juste au-dessus de la plèvre. Le plan cible est l’interface interne / intime. Chez le sujet mince, les trois plans sont nets ; chez l’obèse, on se contente de l’interface la plus profonde repérable au-dessus de la plèvre.' },
    { titre: 'Chercher le paquet vasculo-nerveux (facultatif)', texte: 'Dans la gouttière, sous le bord inférieur de la côte supérieure : trois petites structures superposées (veine, artère, nerf). **Souvent invisibles.** Le Doppler peut montrer l’artère. Ne pas s’acharner : la cible reste le plan.' },
    { titre: 'Si les repères sont mauvais', texte: 'Trois manœuvres : (1) déplacer la sonde de 1–2 cm en dehors, vers la ligne axillaire postérieure, où l’espace est plus large et la paroi plus mince ; (2) faire respirer amplement pour dynamiser la ligne pleurale ; (3) si la plèvre reste invisible, **renoncer et faire un ESP block** au même niveau — geste plus sûr et plus simple, sans perte majeure d’efficacité pour une douleur pariétale.' },
  ],

  sonoanatomie: [
    { structure: 'Côtes (coupe transversale)', aspect: 'Deux arcs hyperéchogènes convexes, cône d’ombre franc en dessous', repere: 'Bornes de l’espace ; la cible est sous le bord inférieur de la côte supérieure' },
    { structure: 'Muscles superficiels (grand dorsal, rhomboïde, trapèze)', aspect: 'Couches striées, gris moyen, épaisseur variable selon le niveau', repere: 'À traverser sans intérêt propre' },
    { structure: 'Intercostal externe', aspect: 'Muscle strié oblique, plan le plus superficiel de l’espace', repere: 'Trop superficiel : y injecter, c’est manquer le bloc' },
    { structure: 'Intercostal interne', aspect: 'Plan intermédiaire, fibres obliques inverses', repere: 'Le plan cible est sa face profonde' },
    { structure: 'Intercostal intime (innermost)', aspect: 'Lame fine, inconstamment individualisable, juste au-dessus de la plèvre', repere: '**Cible : entre interne et intime**' },
    { structure: 'Paquet vasculo-nerveux (V-A-N)', aspect: 'Trois petites structures superposées dans la gouttière ; souvent non visibles', repere: 'Sous le bord inférieur de la côte ; artère parfois en Doppler' },
    { structure: 'Plèvre', aspect: 'Ligne hyperéchogène brillante, **glissante** avec la respiration', repere: 'Repère de sécurité — visible en permanence, vérifiée avant et après' },
    { structure: 'Poumon', aspect: 'Artefacts (lignes A, queues de comète) sous la ligne pleurale', repere: 'Confirme que l’on est au-delà de la plèvre' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Niveaux comptés et marqués au feutre AVANT désinfection. Glissement pleural vérifié et noté à chaque niveau. Désinfection large, gel stérile ou housse. Seringues étiquetées, **dose totale d’AL calculée à l’avance en fonction du poids**, aiguille 22–25 G 40–50 mm sur prolongateur. Émulsion lipidique et chariot d’urgence accessibles.' },
    { titre: 'Anesthésie cutanée', texte: '0,5 mL de lidocaïne 1 % par point d’entrée. Systématique dès qu’on prévoit plusieurs niveaux ou une aiguille RF / cryo.' },
    { titre: 'Ponction dans le plan, tangentielle à la plèvre', texte: 'Entrer du côté caudal (ou crânial selon l’accès), à angle plat, aiguille visible sur toute sa longueur. Progresser **parallèlement à la ligne pleurale**, jamais en direction de celle-ci. Traverser l’intercostal externe puis l’interne. Amener la pointe dans **l’angle rentrant sous le bord inférieur de la côte supérieure**.' },
    { titre: 'Hydrolocalisation', texte: 'Aspiration, puis **0,3–0,5 mL de sérum**. Le bon signe est une nappe anéchogène qui **décolle l’intercostal interne de l’intime et repousse doucement la plèvre en profondeur**. Si l’injectat reste dans le corps musculaire, avancer d’1 mm ; s’il ne se voit pas du tout, retirer — on n’avance jamais « pour voir ».' },
    { titre: 'Injection fractionnée', texte: '**3 à 5 mL par niveau**, en bolus de 1–2 mL, avec aspiration entre chaque et surveillance continue de la plèvre. Répéter au niveau sus- et sous-jacent (le recouvrement métamérique l’impose), sans jamais dépasser la dose totale calculée. Interroger le patient entre les niveaux : goût métallique, acouphènes, paresthésies péribuccales = arrêt immédiat.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène sous-costale de 1,5–2 cm, séparant intercostal interne et intime, avec **éloignement visible de la plèvre**, glissement pleural conservé. Retrait de l’aiguille en gardant la pointe visible.' },
    { titre: 'Après le geste', texte: '**Contrôle échographique du glissement pleural bilatéral** en fin de séance — c’est le geste de sécurité qui clôt la procédure. Surveillance 30 min (60 min si plusieurs niveaux ou patient respiratoirement limite). Cartographie sensitive à 20–30 min et EN avant / après. Consignes écrites : reconsulter en urgence en cas de dyspnée, de douleur thoracique brutale ou de malaise dans les 24 h. Radiographie thoracique non systématique, mais au moindre symptôme.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 % | **3 mL par niveau**, 3 niveaux (le niveau douloureux ± 1) | Cartographie sensitive avant / à 30 min. Un test mono-étagé est presque toujours faussement négatif à cause du recouvrement métamérique |
| Bloc thérapeutique | Ropivacaïne 0,2–0,375 % (ou lévobupivacaïne 0,25 %) ± méthylprednisolone 20–40 mg ou dexaméthasone 4–8 mg répartis sur les niveaux | 3–5 mL par niveau, **3 à 5 niveaux au maximum** | Répartir **une seule dose de corticoïde** sur l’ensemble des niveaux, pas une dose par niveau. Sur le corticoïde, voir la note ci-dessous |
| Blocs multiples | Ajouter **adrénaline 1/200 000** | idem | Réduit le pic plasmatique et prolonge le bloc — indication classique et justifiée dans un territoire à absorption maximale. À éviter chez le coronarien instable |
| Zona aigu / névralgie zostérienne à la phase aiguë | Ropivacaïne 0,2 % ± corticoïde | 3–4 mL par niveau, 3 niveaux | Séries seulement ; l’objectif est la fenêtre antalgique, pas la prévention démontrée de la névralgie post-zostérienne |
| Avant PRF / cryoneurolyse | Lidocaïne 1 % | 1–2 mL sur le trajet cutané | Ne pas noyer la cible |
| Neurolyse (situation palliative) | Phénol 6 % ou alcool absolu, après bloc test positif | 1–2 mL par niveau | Réservé à l’oncologie ; risque de névrite de désafférentation et de lésion pleurale — geste d’équipe entraînée |

**Doses maximales — c’est ici le point critique de la fiche** : ropivacaïne 3 mg/kg (≈ 225 mg chez 75 kg), lévobupivacaïne / bupivacaïne 2–2,5 mg/kg (≈ 150 mg), lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). L’espace intercostal donnant les **concentrations plasmatiques les plus élevées de tous les blocs périphériques**, calculer la dose **avant** de commencer et l’écrire. Exemple opérationnel : 5 niveaux × 4 mL de ropivacaïne 0,375 % = 20 mL = 75 mg — confortable ; les mêmes 20 mL en bupivacaïne 0,5 % = 100 mg, ce qui n’est plus confortable chez un sujet de 50 kg.

**Corticoïde particulaire ou non ?** À l’angle costal, on est à 6–8 cm de la ligne médiane, loin de l’origine des artères médullaires segmentaires : il n’y a pas d’artère terminale sur le trajet et un particulaire n’expose pas au risque médullaire des gestes foraminaux. Deux réserves cependant, à prendre comme un raisonnement de prudence et non comme une recommandation publiée : (1) la fiche décrit elle-même une possible **diffusion médiale vers l’espace paravertébral** en cas d’injection médiale et sous pression, et (2) aucun bénéfice du particulaire n’est démontré sur cette cible. En pratique : dexaméthasone (non particulaire) si l’abord est proche de l’angle costal ou si l’injection est poussée ; méthylprednisolone acceptable sur un abord franchement latéral (ligne axillaire postérieure).

**Injection fractionnée obligatoire**, aspiration avant chaque bolus, patient interrogé entre les niveaux. **Émulsion lipidique disponible dans la salle** : c’est le bloc de ce mémo où le risque de toxicité systémique est le plus concret.`,

  variantes: [
    { titre: 'Abord sur la ligne axillaire postérieure', texte: 'Quand le décubitus ventral est impossible (dyspnée, obésité, douleur au décubitus) : patient en décubitus latéral, sonde sagittale sur la ligne axillaire postérieure. La paroi est plus mince, l’espace plus large et l’accès plus confortable. Limite : la gouttière costale s’est effacée, le nerf est moins protégé par la côte et s’est déjà divisé chez certains sujets — la couverture est un peu moins fiable et le risque pleural n’est pas moindre. Compenser en bloquant un niveau supplémentaire.' },
    { titre: 'Ponction hors du plan', texte: 'Possible et parfois plus commode chez le patient très mince (l’aiguille est courte et l’espace superficiel) : sonde transversale sur la côte, aiguille perpendiculaire, avancée par petits pas jusqu’au contact osseux du bord inférieur, puis reculée et redirigée de 2–3 mm sous la côte. **La pointe n’est alors visible que par le déplacement tissulaire et l’hydrolocalisation** — technique à réserver aux opérateurs entraînés, car la plèvre est à quelques millimètres et l’on ne voit pas l’aiguille. En cas de doute, revenir dans le plan.' },
    { titre: 'Radiofréquence pulsée (PRF) intercostale', texte: `Après bloc test positif. Aiguille RF 22 G, extrémité active 5–10 mm, placée dans la gouttière costale parallèlement au nerf. Stimulation sensitive 50 Hz : paresthésies dans le métamère à < 0,5 V ; stimulation motrice 2 Hz : contraction intercostale. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**, sur chaque niveau concerné.

**À dire honnêtement au patient** : dans le seul essai comparatif disponible en douleur thoracique chronique post-chirurgicale (Cohen et coll., 2006), la PRF du **ganglion spinal** fait mieux que la PRF **intercostale** et que le traitement médicamenteux. La PRF intercostale reste une option quand l’abord du ganglion spinal n’est pas disponible ou pas souhaitable, pas un premier choix.` },
    { titre: 'Radiofréquence thermique conventionnelle', texte: 'Lésion continue à 80 °C, 90 s, sur un nerf **mixte** : le risque de névrite de désafférentation et de déficit sensitif définitif est réel, et c’est ce qui a longtemps fait renoncer les équipes. Décrite dans des séries (notamment en médecine du travail après traumatismes fermés) avec des durées d’effet de plusieurs mois. À réserver aux échecs documentés, après information écrite, et jamais sur plus de deux ou trois niveaux.' },
    { titre: 'Cryoneurolyse intercostale', texte: `Sonde 14–18 G placée sous le bord inférieur de la côte, cycles de gel 2 min / dégel 30 s × 2–3, sous échoguidage strict (la boule de glace doit rester au-dessus de la plèvre). L’intérêt théorique est fort : nerf sensitif accessible, axonotmésis avec conservation de l’endonèvre, repousse en 3–6 mois **sans névrome de section**, répétable.

Les données sont anciennes et contrastées. La cryoanalgésie intercostale **peropératoire** au cours des thoracotomies a été largement pratiquée puis abandonnée par plusieurs équipes, certaines séries ayant rapporté **davantage** de douleur neuropathique chronique. La cryoneurolyse **percutanée échoguidée** pour douleur thoracique chronique repose sur de petites séries (dont des travaux de suivi long terme en douleur thoracique chronique) : preuve **faible**. À proposer comme une option, pas comme une solution.` },
    { titre: 'Quand passer à autre chose', texte: 'Si deux séries de blocs bien conduits (niveaux corrects, couverture métamérique correcte, documentation correcte) n’apportent rien de durable : remonter d’un cran — **ESP block** ou **bloc paravertébral** pour la couverture, **PRF du ganglion spinal** au niveau correspondant pour le geste lésionnel — et rediscuter le traitement de fond neuropathique, souvent sous-dosé chez ces patients. S’acharner sur l’intercostal, c’est répéter un geste à risque pleural sans gain démontré.' },
  ],

  pearls: [
    'Compter et marquer les côtes au feutre avant la désinfection. Se tromper de niveau ne se voit pas, ne se corrige pas, et fait conclure à tort à un échec.',
    'La plèvre est le repère de travail : la voir, vérifier son glissement, puis avancer **parallèlement** à elle. Jamais vers elle.',
    'Le bon signe d’injection est l’**éloignement de la plèvre** par la nappe : c’est à la fois le critère d’efficacité et un critère de sécurité.',
    'Toujours bloquer un à deux niveaux au-dessus et au-dessous : le recouvrement métamérique rend un bloc mono-étagé faussement négatif.',
    'Calculer et **écrire** la dose totale d’AL avant de commencer, en mg et pas en mL.',
    'Adrénaline 1/200 000 dès que l’on fait plus de deux niveaux : c’est l’indication classique et elle est justifiée ici.',
    'Contrôler le glissement pleural bilatéral en fin de séance : dix secondes qui closent proprement la procédure.',
    'Si la plèvre n’est pas visible, ne pas faire le geste — faire un ESP block.',
  ],
  pieges: [
    'Injecter dans l’intercostal externe : bloc inefficace, patient déçu, conclusion diagnostique fausse.',
    'Chercher le paquet vasculo-nerveux à tout prix : on approfondit, on perd la pointe, on ponctionne la plèvre. La cible est le plan.',
    'Faire un bloc mono-étagé et conclure « la douleur n’est pas pariétale ».',
    'Raisonner en millilitres et pas en milligrammes quand on fait cinq niveaux : c’est le mécanisme le plus fréquent de LAST dans ce bloc.',
    'Oublier que l’absorption intercostale est la plus rapide de tous les blocs périphériques — un bloc bien fait peut donner un pic plasmatique élevé sans aucune injection intravasculaire.',
    'Injecter trop médialement et sous pression : diffusion paravertébrale, voire épidurale, avec hypotension et bloc bilatéral inattendu.',
    'Faire une radiofréquence thermique sur un nerf mixte sans information écrite sur le déficit sensitif et la névrite de désafférentation.',
    'Négliger la vérification du glissement pleural en fin de geste, puis renvoyer le patient chez lui sans consigne écrite.',
  ],
  complications: [
    '**Pneumothorax** : la complication signature. Rare sous échographie, jamais nulle. Signes : disparition du glissement pleural (mode M : « code-barres » au lieu du « bord de mer »), dyspnée, douleur pleurale, toux. Conduite : arrêt, échographie pleurale bilatérale immédiate, radiographie thoracique, oxygène ; exsufflation ou drainage selon la tolérance et le volume. Un pneumothorax minime asymptomatique se surveille. **Information et consigne écrite systématiques** : reconsulter en urgence si dyspnée ou douleur brutale dans les 24 h.',
    '**Toxicité systémique aux anesthésiques locaux (LAST)** : le risque le plus concret de ce bloc, du fait de l’absorption intercostale et des niveaux multiples. Prodromes : goût métallique, acouphènes, paresthésies péribuccales, agitation ; puis convulsions et troubles du rythme. Conduite : arrêt immédiat, oxygène, contrôle des convulsions, **émulsion lipidique 20 % selon le protocole en vigueur (ASRA)**, appel à l’aide. Le matériel doit être dans la salle, pas dans le couloir.',
    'Ponction de l’**artère intercostale** : hématome, saignement dans un espace non compressible ; rarement grave mais douloureux. Doppler et progression tangentielle.',
    'Diffusion paravertébrale ou épidurale par injection médiale sous pression : hypotension, bloc bilatéral, rétention d’urine. Surveillance hémodynamique si plusieurs niveaux.',
    'Névralgie de désafférentation après radiofréquence thermique ou neurolyse chimique : douleur de brûlure retardée, parfois pire que la douleur initiale. À annoncer par écrit avant tout geste lésionnel.',
    'Déficit sensitif définitif dans le métamère après geste lésionnel : à accepter explicitement par le patient.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie.',
    'Infection : exceptionnelle ; asepsie chirurgicale d’autant plus stricte que l’on multiplie les points de ponction.',
  ],
  securite: [
    '**Plèvre visible et glissement vérifié avant chaque ponction, et glissement bilatéral revérifié en fin de séance.** Si la plèvre n’est pas visible, le geste ne se fait pas.',
    'Progression **tangentielle** à la plèvre, pointe visible en permanence. En cas de perte de la pointe : arrêt, réalignement de la sonde, jamais de progression à l’aveugle.',
    'Dose totale d’AL calculée en mg/kg **avant** le geste et notée ; adrénaline 1/200 000 au-delà de deux niveaux ; injection fractionnée avec aspiration ; interrogatoire du patient entre chaque niveau.',
    '**Émulsion lipidique 20 % et chariot d’urgence dans la salle**, protocole LAST affiché.',
    '**Faible risque hémorragique** (ASRA-ESRA 2018, catégorie des blocs nerveux périphériques) : pas d’arrêt systématique des antiagrégants. Mais le site n’est pas compressible et l’artère intercostale est sur le trajet — sous anticoagulation curative non interrompue, discuter l’indication et préférer l’ESP block.',
    'Consigne écrite remise au patient : dyspnée, douleur thoracique brutale ou malaise dans les 24 h = consultation en urgence, avec mention du geste réalisé.',
    'Contre-indication de bon sens chez le patient à réserve respiratoire nulle : préférer l’ESP block.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, **cartographie sensitive comparée** des métamères bloqués (au rouleau froid), **glissement pleural bilatéral vérifié en fin de séance**, surveillance 30–60 min, consigne écrite remise.
- **J1–J7** : journal de douleur. Prévenir de la reprise douloureuse à la levée du bloc, qui n’est pas un échec.
- **J15–J30** : EN, DN4, retentissement respiratoire (toux, inspiration profonde, kinésithérapie respiratoire possible ou non), sommeil, antalgiques. Décision : répéter (max 3 corticoïdes/an), passer à la PRF du ganglion spinal, à la cryoneurolyse, ou changer de technique (ESP, paravertébral).
- **3 mois** : dans la névralgie post-zostérienne et la douleur post-thoracotomie, juger sur la fonction (kinésithérapie respiratoire, reprise d’activité, sommeil) autant que sur l’EN.
- **Toujours coupler** au traitement de fond : gabapentinoïde ou IRSNA à dose efficace, **emplâtre de lidocaïne 5 %** ou **patch de capsaïcine 8 %** dans la névralgie post-zostérienne, kinésithérapie respiratoire et travail de la cicatrice après thoracotomie. Le bloc ouvre une fenêtre ; c’est ce qu’on met dedans qui décide du résultat à 3 mois.`,

  evidence: `- **Analgésie aiguë : preuve solide, mais hors périmètre.** Le bloc intercostal est validé de longue date en analgésie post-opératoire et dans les fractures de côtes récentes. Ce n’est pas cela qui est en question ici.
- **Douleur chronique : preuve faible, essentiellement des séries.** Aucune méta-analyse, aucun ECR de bonne taille du bloc intercostal en névralgie post-zostérienne chronique, en douleur post-thoracotomie ou en syndrome de la côte glissante. L’usage repose sur la cohérence physiopathologique et sur la valeur diagnostique du bloc.
- **PRF intercostale : un essai comparatif, défavorable.** Cohen et coll. (2006) ont comparé, en douleur thoracique chronique post-chirurgicale, la PRF du **ganglion spinal**, la PRF **intercostale** et le traitement médicamenteux : la PRF du ganglion spinal est supérieure aux deux autres. C’est l’information la plus utile de ce chapitre, et elle doit modifier la hiérarchie des propositions.
- **Radiofréquence thermique : séries seulement.** Durées d’effet de plusieurs mois rapportées (notamment après traumatismes fermés), au prix d’un risque de déficit sensitif et de névrite de désafférentation propre aux lésions de nerf mixte. Preuve **faible**.
- **Cryoneurolyse : données anciennes et contradictoires.** La cryoanalgésie intercostale peropératoire en chirurgie thoracique a été abandonnée par plusieurs équipes après des séries suggérant **davantage** de douleur neuropathique chronique. La cryoneurolyse percutanée échoguidée en douleur chronique repose sur de petites séries. Preuve **faible**, avec un signal de sécurité à ne pas taire au patient.
- **Sécurité : la contribution la mieux établie de l’échographie.** Le bloc intercostal réalisé au repère anatomique a fait l’objet de très grandes séries historiques (Moore et Bridenbaugh, plus de 4 000 patients) qui ont quantifié le risque de pneumothorax et fondé la prudence classique. L’échoguidage, en rendant la plèvre visible en temps réel, réduit ce risque — c’est un raisonnement mécanique solide plutôt qu’une démonstration randomisée : confiance *probable*, pas *certaine*.
- **Absorption systémique maximale** dans l’espace intercostal : donnée pharmacocinétique ancienne et constante, qui commande le calcul de dose et l’usage de l’adrénaline.
- **Trous de littérature assumés** : pas d’essai comparant le bloc intercostal à l’ESP block en douleur chronique, pas de schéma optimal (nombre de niveaux, intervalle, place du corticoïde), pas de donnée robuste sur le syndrome de la côte glissante en dehors de séries chirurgicales.`,

  references: [
    { auteurs: 'Cohen SP, Sireci A, Wu CL, Larkin TM, Williams KA, Hurley RW', titre: 'Pulsed radiofrequency of the dorsal root ganglia is superior to pharmacotherapy or pulsed radiofrequency of the intercostal nerves in the treatment of chronic postsurgical thoracic pain', revue: 'Pain Physician', annee: '2006', type: 'essai comparatif', verif: false, note: 'La référence qui hiérarchise : ganglion spinal > intercostal.' },
    { auteurs: 'Moore DC, Bridenbaugh LD', titre: 'Intercostal nerve block in 4333 patients: indications, technique, and complications', revue: 'Anesth Analg', annee: '1962', type: 'série historique', verif: false, note: 'Grande série fondatrice sur le risque de pneumothorax du bloc au repère anatomique.' },
    { auteurs: 'Byas-Smith MG, Gulati A', titre: 'Ultrasound-guided intercostal nerve cryoablation', revue: 'Anesth Analg', annee: '2006', type: 'technique', verif: false },
    { auteurs: 'Green CR, de Rosayro AM, Tait AR', titre: 'The role of cryoanalgesia for chronic thoracic pain: results of a long-term follow up', revue: 'J Natl Med Assoc', annee: '2002', type: 'série', verif: false },
    { auteurs: 'Engel AJ', titre: 'Utility of intercostal nerve conventional thermal radiofrequency ablations in the injured worker after blunt trauma', revue: 'Pain Physician', annee: '2012', type: 'série', verif: false },
    { auteurs: 'Neal JM, Barrington MJ, Fettiplace MR, et al.', titre: 'The third American Society of Regional Anesthesia and Pain Medicine practice advisory on local anesthetic systemic toxicity: executive summary 2017', revue: 'Reg Anesth Pain Med', annee: '2018', type: 'reco', verif: false, note: 'Protocole LAST et émulsion lipidique.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'ic-sono', section: 'sonoanatomie', titre: 'Coupe sagittale à l’angle costal — les deux côtes, l’espace et la plèvre',
      legende: 'Image de travail « en deux bosses » : deux côtes en section avec leur cône d’ombre, l’espace intercostal entre elles, et au fond la ligne pleurale brillante et glissante. Les trois plans musculaires se succèdent : externe, interne, intime. Le paquet vasculo-nerveux (veine, artère, nerf de haut en bas) se loge dans la gouttière sous le bord inférieur de la côte supérieure — souvent invisible. La cible est le plan entre intercostal interne et intime.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Sagittal, perpendiculaire aux côtes', type: 'linéaire 8–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 72 L640 72 L640 124 L0 130 Z', label: 'Muscles superficiels', at: [96, 100], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 130], [640, 124]], width: 1.5 });
        S.muscle({ path: 'M206 198 Q318 184 434 198 L434 230 Q318 224 206 230 Z', label: 'Intercostal externe', at: [320, 214], opacity: 0.5, small: true });
        S.muscle({ path: 'M206 230 Q318 224 434 230 L434 258 Q318 253 206 258 Z', label: 'Intercostal interne', at: [326, 246], opacity: 0.55, small: true });
        S.muscle({ path: 'M206 258 Q318 253 434 258 L434 272 Q318 268 206 272 Z', label: 'Intime', at: [330, 268], opacity: 0.4, small: true });
        S.bone({ path: 'M20 208 Q115 148 210 206', label: 'Côte', at: [110, 240], small: true, ldy: 0 });
        S.bone({ path: 'M430 206 Q525 148 620 208', label: 'Côte', at: [525, 240], small: true, ldy: 0 });
        S.vein({ x: 224, y: 224, rx: 6, ry: 5 });
        S.artery({ x: 226, y: 238, r: 5 });
        S.nerve({ x: 228, y: 252, r: 6 });
        S.label({ x: 104, y: 300, text: 'Paquet V-A-N\n(souvent non visible)', cls: 'lbl-nerve', small: true, anchor: 'middle', lead: [220, 244] });
        S.pleura({ points: [[186, 288], [318, 283], [452, 288]] });
        S.label({ x: 512, y: 312, text: 'Plèvre (glissement)', cls: 'lbl-pleura', small: true, anchor: 'middle', lead: [448, 289] });
        S.lung({ path: 'M188 294 L450 294 L458 420 L180 420 Z', label: 'Poumon\n(lignes A)', at: [318, 344], small: true });
        S.target({ x: 268, y: 258, r: 16 });
      },
    },
    {
      id: 'ic-bloc', section: 'technique', titre: 'Bloc intercostal — aiguille dans le plan, tangentielle à la plèvre',
      legende: 'Aiguille caudo-crâniale à angle plat, avançant PARALLÈLEMENT à la ligne pleurale et jamais vers elle, jusqu’à l’angle rentrant sous le bord inférieur de la côte supérieure. Critère de fin : nappe de 3–5 mL qui sépare intercostal interne et intime ET repousse doucement la plèvre en profondeur, glissement pleural conservé. Répéter un à deux niveaux au-dessus et au-dessous.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Crânial', right: 'Caudal' }).probeInfo({ plan: 'Sagittal', type: 'in-plane, caudo-crânial' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 72 L640 72 L640 124 L0 130 Z', label: 'Muscles superficiels', at: [90, 100], opacity: 0.42, small: true });
        S.fascia({ points: [[0, 130], [640, 124]], width: 1.5 });
        S.muscle({ path: 'M206 198 Q318 184 434 198 L434 230 Q318 224 206 230 Z', opacity: 0.5 });
        S.muscle({ path: 'M206 230 Q318 224 434 230 L434 258 Q318 253 206 258 Z', opacity: 0.55 });
        S.muscle({ path: 'M206 258 Q318 253 434 258 L434 272 Q318 268 206 272 Z', opacity: 0.4 });
        S.bone({ path: 'M20 208 Q115 148 210 206', label: 'Côte', at: [110, 240], small: true, ldy: 0 });
        S.bone({ path: 'M430 206 Q525 148 620 208', label: 'Côte', at: [525, 240], small: true, ldy: 0 });
        S.vein({ x: 224, y: 224, rx: 6, ry: 5 });
        S.artery({ x: 226, y: 238, r: 5 });
        S.nerve({ x: 228, y: 252, r: 6 });
        S.pleura({ points: [[186, 288], [318, 283], [452, 288]] });
        S.lung({ path: 'M188 294 L450 294 L458 420 L180 420 Z', label: 'Poumon', at: [318, 340], small: true });
        S.target({ x: 252, y: 258, r: 16 });
        S.needle({ from: [638, 104], to: [272, 252], label: '22–25 G 40–50 mm, angle plat' });
        S.spread({ x: 300, y: 260, rx: 56, ry: 12, label: '3–5 mL' });
        S.label({ x: 320, y: 380, text: 'Progresser parallèlement à la plèvre — jamais vers elle', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
  ],

  checklist: [
    'Niveaux comptés depuis la 12e côte et MARQUÉS AU FEUTRE avant la désinfection',
    'Plèvre identifiée et glissement pleural vérifié À CHAQUE niveau avant la ponction — pas de plèvre visible, pas de geste',
    'Dose totale d’anesthésique local calculée en mg/kg et écrite AVANT de commencer (absorption intercostale maximale)',
    'Adrénaline 1/200 000 envisagée si plus de deux niveaux',
    'Émulsion lipidique 20 % et protocole LAST dans la salle, pas dans le couloir',
    'Couverture d’un à deux niveaux au-dessus et au-dessous du territoire douloureux',
    'Patient interrogé entre chaque niveau (goût métallique, acouphènes, paresthésies péribuccales)',
    'Glissement pleural BILATÉRAL revérifié en fin de séance',
    'Consigne écrite remise : dyspnée, douleur thoracique brutale ou malaise dans les 24 h = urgence',
  ],
});
