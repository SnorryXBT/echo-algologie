/* Fiche : poignet — infiltration radio-carpienne, médio-carpienne, RUD ; kystes synoviaux. */
(function () {

  /* Base sono-anatomique de la coupe sagittale dorsale du poignet (radius → lunatum → capitatum). */
  function baseDorsale(S, labels) {
    S.skin({ thickness: 7, fatBelow: 14 });
    S.ligament({ path: 'M120 64 L400 60 L400 74 L120 78 Z' });
    S.tendon({ path: 'M0 84 L498 80 L520 96 L520 110 L498 122 L0 126 Z' });
    S.bone({ path: 'M0 254 L146 252 Q176 232 202 252 L242 248 Q296 246 314 258 L322 300' });
    S.fascia({ points: [[298, 246], [348, 236], [400, 242], [452, 246]], width: 2 });
    S.fluid({ path: 'M316 252 Q344 244 366 252 L360 292 L326 298 Z' });
    S.bone({ path: 'M362 296 Q400 250 452 246 Q510 250 548 290' });
    S.bone({ path: 'M578 292 Q608 258 640 254' });
    if (labels) {
      S.label({ x: 120, y: 104, text: 'Tendons extenseurs (4e compartiment)', cls: 'lbl-tendon', small: true });
      S.label({ x: 620, y: 104, text: 'Intervalle 3-4 :\nplan sans tendon', cls: 'lbl-tendon', anchor: 'end', small: true, lead: [524, 104] });
      S.label({ x: 552, y: 70, text: 'Rétinaculum des extenseurs', cls: 'lbl-lig', anchor: 'end', small: true, lead: [398, 68] });
      S.label({ x: 176, y: 206, text: 'Tubercule de Lister', cls: 'lbl-bone', small: true, lead: [176, 238] });
      S.label({ x: 440, y: 200, text: 'Capsule dorsale', cls: 'lbl-fascia', small: true, lead: [398, 240] });
      S.label({ x: 130, y: 336, text: 'Radius', cls: 'lbl-bone', small: true });
      S.label({ x: 456, y: 336, text: 'Lunatum', cls: 'lbl-bone', small: true });
      S.label({ x: 624, y: 336, text: 'Capitatum', cls: 'lbl-bone', anchor: 'end', small: true });
      S.label({ x: 264, y: 388, text: 'Récessus dorsal radio-carpien', cls: 'lbl-fluid', small: true, lead: [336, 288] });
      S.label({ x: 616, y: 388, text: 'Interligne médio-carpien', cls: 'lbl-bone', anchor: 'end', small: true, lead: [566, 296] });
    }
  }

  ECHO.register({
    id: 'poignet-radiocarpienne-kyste',
    titre: 'Poignet — infiltration radio-carpienne, médio-carpienne, radio-ulnaire distale ; ponction des kystes synoviaux',
    titreCourt: 'Poignet & kyste synovial',
    en: 'Ultrasound-guided wrist injections: dorsal radiocarpal (3-4 interval, between extensor compartments III and IV), midcarpal and distal radioulnar joint injection; extensor tenosynovitis; aspiration, fenestration and injection of dorsal and volar wrist ganglia',
    region: 'membre-sup',
    types: ['infiltration', 'interventionnel'],
    niveau: 1,
    grade: 'Modérée pour l\'infiltration articulaire échoguidée (ECR de précision et de résultat) · Faible pour la ponction des kystes (séries, récidive élevée)',
    maj: '2026-09',
    motsCles: ['radio-carpienne', 'médio-carpienne', 'radio-ulnaire distale', 'RUD', 'tubercule de Lister', 'kyste synovial', 'ganglion', 'arthrose du poignet', 'SLAC', 'ténosynovite des extenseurs', 'polyarthrite', 'fenestration'],
    resume: 'Le poignet dorsal est l\'un des sites les plus rentables de l\'échoguidage : trois articulations distinctes (radio-carpienne, médio-carpienne, radio-ulnaire distale) tiennent en deux centimètres, elles ne communiquent pas toujours, et l\'infiltration à l\'aveugle se trompe de compartiment une fois sur deux — ce qui explique une bonne part des « échecs d\'infiltration ». L\'échographie fait aussi le tri entre ce qui est articulaire, ce qui est ténosynovial et ce qui est kystique, trois situations qui se traitent différemment. Sur le kyste synovial, elle transforme un geste borgne en un geste contrôlé (aspiration à l\'aiguille de gros calibre, fenestration, injection) — sans changer la donnée la plus importante à annoncer au patient : environ une récidive sur deux. Une mise au point d\'emblée : le syndrome douloureux régional complexe du poignet n\'est **pas** une indication d\'infiltration intra-articulaire.',

    flash: {
      position: 'assis', positionNote: 'assis face à l\'opérateur, avant-bras en pronation, main posée sur un billot ou un champ roulé, poignet en flexion palmaire de 20–30° (ouvre l\'interligne dorsal)',
      sonde: 'lineaire', sondeNote: '12–18 MHz, hockey stick idéale ; profondeur 2–2,5 cm, focale à 10 mm',
      approche: 'in-plane', approcheNote: 'sonde sagittale ulnaire au tubercule de Lister (intervalle entre les 3e et 4e compartiments), aiguille de distal en proximal ; hors du plan acceptable si la fenêtre est courte',
      aiguille: '25 G 25 mm pour l\'articulation · **18 G** (ou 16 G) 40 mm pour l\'aspiration d\'un kyste — le gel ne passe pas dans un petit calibre',
      cible: 'Récessus dorsal radio-carpien, sous la capsule et au-dessus du cartilage : le liquide doit **distendre le récessus** sans résistance et sans gonfler un tendon',
      injectat: 'Radio-carpienne : corticoïde 20–40 mg + lidocaïne 1 %, total 1–2 mL · Médio-carpienne et RUD : 0,5–1 mL',
      duree: '5–10 min (infiltration) · 10–15 min (kyste : aspiration + fenestration + injection)',
    },

    indications: [
      '**Arthrose du poignet** : radio-carpienne (post-traumatique, SLAC/SNAC après lésion scapho-lunaire ou pseudarthrose du scaphoïde), médio-carpienne, radio-ulnaire distale — douleur mécanique persistante malgré orthèse et antalgiques.',
      '**Arthrites inflammatoires** : polyarthrite rhumatoïde, rhumatisme psoriasique, arthrite microcristalline (goutte, chondrocalcinose) — synovite documentée en échographie et Doppler. Le poignet est un site cible de l\'infiltration en rhumatologie.',
      '**Ténosynovites des extenseurs** (4e et 6e compartiments surtout) : injection **péri-tendineuse dans la gaine**, jamais intra-articulaire — ce sont deux gestes différents pour deux images différentes.',
      '**Radio-ulnaire distale** : arthrose ou instabilité douloureuse, douleur ulnaire du poignet en pronosupination, après avoir écarté une lésion du TFCC chirurgicale.',
      '**Kyste synovial (ganglion)** dorsal ou palmaire : gêne fonctionnelle, douleur, préoccupation esthétique — aspiration-fenestration comme alternative à la chirurgie chez un patient informé du taux de récidive.',
      '**Valeur diagnostique** : un bloc articulaire à l\'anesthésique local seul permet de rattacher une douleur de poignet mal systématisée à un compartiment précis avant décision chirurgicale (arthrodèse partielle, résection de la première rangée).',
    ],
    contreIndications: [
      'Absolues : refus, infection cutanée en regard, **arthrite septique suspectée** (dans ce cas la ponction est diagnostique et se fait pour analyse, jamais suivie d\'un corticoïde), allergie vraie aux amino-amides.',
      '**Le SDRC (algodystrophie) n\'est pas une indication** : il n\'existe aucun rationnel ni aucune donnée soutenant l\'infiltration intra-articulaire dans cette pathologie. La prise en charge est la rééducation en charge progressive, le traitement de la douleur neuropathique, éventuellement les bisphosphonates et les blocs sympathiques. Infiltrer un poignet en phase chaude expose à une aggravation nociceptive pour un bénéfice nul.',
      'Relatives : diabète déséquilibré, chirurgie du poignet programmée à court terme, plus de 3 infiltrations par an sur la même articulation, prothèse ou matériel d\'ostéosynthèse en place (asepsie renforcée).',
      'Hémostase : geste **à faible risque hémorragique** (superficiel, compressible, ASRA-ESRA 2018). Le kyste **palmaire** fait exception : il est au contact de l\'artère radiale — chez l\'anticoagulé, préférer l\'abstention ou la chirurgie.',
      'Kyste palmaire adhérent à l\'artère radiale : ne pas ponctionner à l\'aveugle ; le rapport bénéfice/risque penche vers la chirurgie ou l\'abstention.',
    ],
    alternatives: 'Orthèse de repos, antalgiques, adaptation gestuelle, traitement de fond d\'un rhumatisme inflammatoire (l\'infiltration ne remplace jamais un traitement de fond insuffisant : une synovite qui rechute à 6 semaines est un signal d\'escalade thérapeutique, pas de réinfiltration). Chirurgie selon le compartiment et la cause : dénervation du poignet, arthrodèse partielle (scapho-luno-capitienne), résection de la première rangée des os du carpe, arthroplastie de la RUD (Darrach, Sauvé-Kapandji). **Pour le kyste** : l\'abstention est une vraie option — une proportion importante des kystes du poignet régresse spontanément, et les séries de suivi long ne montrent pas d\'avantage clair de l\'intervention sur l\'abstention en termes de résultat rapporté par le patient. L\'exérèse chirurgicale a le taux de récidive le plus bas mais laisse une cicatrice et une raideur possible.',

    anatomie: `Le dos du poignet est organisé en **six compartiments extenseurs** séparés par les septa du **rétinaculum des extenseurs**. Le repère central est le **tubercule de Lister**, saillie osseuse de la face dorsale du radius : le tendon du **long extenseur du pouce (3e compartiment)** le contourne par son versant ulnaire, les **radiaux (2e compartiment)** passent en radial, l\'**extenseur commun des doigts et l\'extenseur propre de l\'index (4e compartiment)** en ulnaire.

L\'**intervalle entre les 3e et 4e compartiments** — l\'équivalent du portail arthroscopique « 3-4 » — est le corridor d\'abord de l\'articulation radio-carpienne : il donne accès au **récessus dorsal**, entre le rebord dorsal du radius et la première rangée du carpe (scaphoïde et lunatum), sans traverser de tendon.

Trois articulations distinctes, souvent **non communicantes** : la **radio-carpienne**, la **médio-carpienne** (entre les deux rangées du carpe, abordable en regard du capitatum) et la **radio-ulnaire distale (RUD)**, entre l\'incisure ulnaire du radius et la tête ulnaire, séparée de la radio-carpienne par le **TFCC**. Une communication existe quand le TFCC est perforé — ce qui est fréquent après 50 ans et modifie la diffusion de l\'injectat.

### Ce qui compte pour le geste
- **Trois compartiments, trois gestes.** Injecter la radio-carpienne quand la douleur est médio-carpienne, c\'est un échec programmé. C\'est le principal apport de l\'échographie ici : voir l\'épanchement ou la synovite **dans le bon récessus** avant de piquer.
- **Le corridor 3-4 est avasculaire et sans tendon**, mais la **branche terminale du nerf interosseux postérieur** chemine sur le plancher du 4e compartiment, contre la corticale dorsale du radius (c\'est la cible des dénervations du poignet). Rester dans le récessus articulaire, ne pas racler la corticale.
- **Structures à éviter selon la voie** : l\'**artère radiale** dans la tabatière anatomique et sur le versant palmaire-radial (kystes palmaires) ; les **branches sensitives du nerf radial superficiel**, très superficielles sur le dos du poignet, dont la lésion donne une dysesthésie ou un névrome durables ; la **branche cutanée dorsale du nerf ulnaire** sur le versant ulnaire (voie RUD).
- **Les kystes synoviaux** du poignet naissent d\'un défect capsulaire avec un **pédicule** : le kyste **dorsal**, le plus fréquent, part du **faisceau dorsal du ligament scapho-lunaire** et se fraie un chemin entre les tendons extenseurs ; le kyste **palmaire** part de la radio-carpienne ou de la scapho-trapézienne, sur le versant radial, **au contact de l\'artère radiale**. Le pédicule est ce qui fait la récidive : l\'aspiration vide la poche, elle ne ferme pas la porte.
- **Capacité articulaire faible** : 2–3 mL pour la radio-carpienne, moins pour la médio-carpienne et la RUD. Un volume plus important ne diffuse pas mieux, il fait mal et déchire la capsule.
- **Profondeurs** : tendons extenseurs à 2–5 mm, capsule dorsale à 5–10 mm, corticale du radius à 8–15 mm. Tout est accessible à une aiguille de 25 mm.`,

    installation: {
      patient: `**Assis face à l\'opérateur**, coude sur la table, avant-bras en **pronation**, main posée sur un billot ou un champ roulé placé sous le poignet de façon à obtenir **20–30° de flexion palmaire** : c\'est cette flexion qui ouvre l\'interligne dorsal et rend le récessus accessible. Doigts détendus.

Variantes de position : pronation neutre et poignet en légère **inclinaison ulnaire** pour la radio-carpienne radiale ; **pronation complète** pour la RUD (elle rapproche la tête ulnaire de la peau) ; **supination** pour un kyste palmaire.

Chez le patient anxieux, décubitus dorsal, bras en travers du thorax : le geste est bref mais spectaculaire à regarder.`,
      operateur: `Opérateur **assis face au patient**, écran en face, dans l\'axe. Sonde tenue en appui sur la main du patient, **pression légère** : le récessus dorsal se collabe sous la sonde et disparaît si on appuie — c\'est l\'erreur qui fait conclure à tort à l\'absence d\'épanchement.

Sens de ponction : de **distal vers proximal** pour la radio-carpienne (l\'aiguille glisse sous le rebord dorsal du radius, dans l\'axe du récessus) ; c\'est le sens qui donne le plus long trajet visible pour la plus courte distance à la cible.

Convention d\'image en sagittal : **proximal (radius) à gauche, distal (carpe) à droite**.`,
      sonde: `- Linéaire **12–18 MHz**, preset MSK superficiel ; **hockey stick** nettement préférable sur un poignet fin ou déformé.
- Profondeur **2–2,5 cm**, focale à 10 mm ; gain réglé pour que le liquide articulaire reste franchement noir.
- **Doppler couleur basse PRF** : distinguer une **synovite** (vascularisée) d\'un **épanchement** (avasculaire, compressible) et d\'un **kyste** (avasculaire, non compressible, à paroi nette) ; repérer l\'artère radiale avant toute voie radiale ou palmaire.
- **Test de compression** : l\'épanchement se déplace et se laisse chasser, la synovite non, le kyste non plus. C\'est un test de 2 secondes qui change le geste.
- Couche de gel généreuse : la surface est convexe et osseuse, l\'appui fausse tout.`,
    },

    reperage: [
      { titre: 'Trouver le tubercule de Lister', texte: 'Sonde **transversale** sur le dos du poignet, à 1 cm en amont de l\'interligne : le tubercule de Lister est la saillie corticale médiane, avec les **radiaux en radial** et l\'**extenseur commun des doigts en ulnaire**. Le **long extenseur du pouce** contourne le tubercule par son versant ulnaire — sa mise en évidence par l\'extension du pouce est le meilleur moyen de confirmer le repère.' },
      { titre: 'Basculer en sagittal, ulnaire au tubercule', texte: 'Tourner la sonde de 90° juste en dedans du tubercule (intervalle 3-4). De la superficie à la profondeur : peau, **rétinaculum**, **tendons extenseurs** en bande fibrillaire, **capsule dorsale**, puis la ligne osseuse du **radius** qui plonge à son rebord dorsal, l\'**interligne radio-carpien**, la convexité du **lunatum**, l\'**interligne médio-carpien** et le **capitatum**.' },
      { titre: 'Ouvrir et reconnaître le récessus', texte: 'Fléchir passivement le poignet de 20–30° : le **récessus dorsal** apparaît comme un triangle anéchogène entre le rebord dorsal du radius et le lunatum, sous la capsule. Le mesurer et le **comparer au côté opposé**. Test de compression + Doppler pour trancher épanchement / synovite.' },
      { titre: 'Passer en revue les trois articulations', texte: 'Glisser en distal : l\'**interligne médio-carpien** (lunatum-capitatum) a son propre récessus. Glisser en ulnaire, poignet en pronation complète : la **radio-ulnaire distale** apparaît entre l\'incisure ulnaire du radius et la tête ulnaire, avec son récessus dorsal juste sous le tendon de l\'extenseur ulnaire du carpe. Décider **quel compartiment** on infiltre avant de préparer la seringue.' },
      { titre: 'Caractériser un kyste', texte: 'Masse **anéchogène ou hypoéchogène, à paroi fine et nette, avec renforcement postérieur, non compressible, sans flux Doppler**, parfois cloisonnée ou multilobée. Chercher le **pédicule** : un fin canal qui plonge vers l\'articulation — dorsalement vers le **ligament scapho-lunaire**, palmairement vers la radio-carpienne ou la scapho-trapézienne. Le pédicule signe le diagnostic et explique la récidive.' },
      { titre: 'Si l\'interligne reste invisible', texte: 'Ne pas piquer. Augmenter la flexion palmaire, alléger l\'appui, faire une **traction douce** dans l\'axe. Chez l\'arthrosique très remanié (ostéophytes, SLAC), le récessus radio-carpien peut être virtuel : viser alors la **médio-carpienne** ou la **RUD** selon la clinique, ou renoncer à l\'intra-articulaire. Pour un kyste palmaire, toujours **passer le Doppler** avant de choisir la trajectoire de l\'aiguille.' },
    ],

    sonoanatomie: [
      { structure: 'Tubercule de Lister', aspect: 'Saillie corticale dorsale du radius, hyperéchogène avec ombre', repere: 'Repère central : 3e compartiment (LEP) en ulnaire, 2e (radiaux) en radial' },
      { structure: 'Rétinaculum des extenseurs', aspect: 'Fine bande hyperéchogène coiffant les tendons', repere: 'L\'aiguille le franchit ou passe en aval de lui' },
      { structure: 'Tendons extenseurs (4e compartiment)', aspect: 'Bande fibrillaire en longitudinal, ovales anisotropes en transversal ; halo hypoéchogène et Doppler positif si ténosynovite', repere: 'Toit du corridor 3-4 ; ne jamais injecter dedans en visant l\'articulation' },
      { structure: 'Capsule dorsale', aspect: 'Fine ligne hyperéchogène tendue du rebord dorsal du radius au carpe', repere: 'Plafond du récessus : la cible est juste en dessous' },
      { structure: 'Récessus dorsal radio-carpien', aspect: 'Triangle anéchogène, compressible et sans Doppler si épanchement ; échogène, non compressible et vascularisé si synovite', repere: 'Entre le rebord dorsal du radius et le lunatum, poignet fléchi' },
      { structure: 'Radius distal, lunatum, capitatum', aspect: 'Lignes corticales hyperéchogènes avec ombre ; cartilage en fine bande anéchogène', repere: 'Deux interlignes successifs : radio-carpien puis médio-carpien' },
      { structure: 'Radio-ulnaire distale', aspect: 'Interligne entre l\'incisure ulnaire du radius et la tête ulnaire, récessus dorsal sous l\'extenseur ulnaire du carpe', repere: 'Poignet en pronation complète ; explorer en pronosupination' },
      { structure: 'Kyste synovial', aspect: 'Anéchogène, paroi fine, renforcement postérieur, non compressible, **sans Doppler**, pédicule visible vers l\'articulation', repere: 'Dorsal : issu du ligament scapho-lunaire. Palmaire : au contact de l\'artère radiale' },
      { structure: 'Nerf radial superficiel (branches)', aspect: 'Fins faisceaux de 1–2 mm dans le tissu sous-cutané dorso-radial', repere: 'Très superficiel : à éviter dès la traversée cutanée' },
    ],

    technique: [
      { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** l\'asepsie : compartiment choisi, récessus visualisé, Doppler passé, trajectoire simulée. Désinfection large, gel stérile. Radio-carpienne : seringue de 2–3 mL, aiguille **25 G 25 mm**. Kyste : seringue de 10 mL vide + aiguille **18 G 40 mm** montée sur un prolongateur, plus une deuxième seringue préparée pour le corticoïde.' },
      { titre: 'Anesthésie cutanée', texte: '0,2–0,5 mL de lidocaïne 1 % en sous-cutané au point d\'entrée, strictement superficielle. Systématique avant une 18 G (l\'aiguille de gros calibre est le vrai facteur de douleur du geste) ; souvent inutile avec une 25 G.' },
      { titre: 'Radio-carpienne : ponction dans le plan, de distal en proximal', texte: 'Poignet fléchi 20–30°, sonde sagittale ulnaire au tubercule de Lister. Entrée à 1 cm du bord distal de la sonde, aiguille inclinée à **30–40°**, dirigée vers le récessus, **sous la capsule et au-dessus du cartilage du lunatum**. Franchir la capsule (ressaut net). L\'alternative hors du plan (aiguille verticale au centre de la sonde, pointe visualisée en coupe) est acceptable quand la fenêtre est courte, à condition de suivre la pointe par hydrolocalisation.' },
      { titre: 'Test et injection', texte: 'Aspiration (une aspiration ramenant du liquide trouble arrête tout : analyse bactériologique et cristaux, **aucun corticoïde**). Puis **0,2 mL d\'essai** : le liquide doit **distendre le récessus** en le rendant plus noir, sans résistance. Toute résistance = pointe dans la capsule, le cartilage ou un tendon → repositionner. Compléter à **1–2 mL** au total, fractionnés.' },
      { titre: 'Kyste : aspiration, fenestration, injection', texte: 'Aiguille **18 G dans le plan**, pointe au centre du kyste, en évitant toute structure vasculo-nerveuse repérée. **Aspirer** : le gel est très visqueux, il vient lentement, en fil ; masser le kyste avec la sonde ou le pouce libre pour le vider. Puis **fenestrer** : ressortir sans quitter la peau et repasser 5 à 10 fois dans le kyste et son **pédicule** pour rompre les cloisons et ouvrir la communication articulaire. Enfin injecter **0,5–1 mL** de corticoïde dilué dans la cavité résiduelle (l\'apport propre du corticoïde n\'est pas démontré, il reste largement pratiqué).' },
      { titre: 'Critère de fin', texte: '**Articulation** : récessus distendu, liquide anéchogène visible autour de la pointe, aucune injection intratendineuse ni sous-cutanée, injection sans résistance. **Kyste** : cavité effondrée ou quasi virtuelle à l\'écran, pédicule traversé au moins une fois.' },
      { titre: 'Après le geste', texte: 'Compression 2 min (5 min après une 18 G ou chez l\'antiagrégé), pansement. **Kyste** : bandage compressif ou orthèse 48–72 h, souvent conseillé pour limiter le remplissage précoce — bénéfice non démontré mais sans risque. Consignes écrites : repos relatif 48 h, pas de port de charge, signaler fièvre, douleur croissante ou rougeur. Prévenir de la **poussée douloureuse post-injection de 24–48 h** (surtout après un corticoïde microcristallin).' },
    ],

    injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Radio-carpienne** | Triamcinolone hexacétonide (Hexatrione®) 20 mg, **ou** triamcinolone acétonide 20–40 mg, **ou** méthylprednisolone 20–40 mg, **ou** bétaméthasone 5,7 mg (Diprostène®) + lidocaïne 1 % | **1–2 mL** au total | Capacité articulaire faible : au-delà de 2–3 mL on distend et on fait mal. L\'**hexacétonide est strictement réservé à l\'intra-articulaire** — jamais dans une gaine ni en péri-tendineux |
| **Médio-carpienne** | Idem, dose réduite | **0,5–1 mL** | Articulation étroite ; vérifier qu\'on n\'est pas dans la radio-carpienne (les deux ne communiquent pas toujours) |
| **Radio-ulnaire distale** | Idem, dose réduite | **0,5–1 mL** | Récessus minuscule ; injecter très lentement, arrêter à la première résistance |
| **Ténosynovite des extenseurs** | Corticoïde **non hexacétonide** (méthylprednisolone 20–40 mg ou bétaméthasone) + lidocaïne | **1–2 mL** dans la gaine | Cible **péri-tendineuse**, jamais intratendineuse. Ne pas confondre avec l\'intra-articulaire : ce sont deux images et deux gestes |
| **Kyste synovial** | Aspiration d\'abord ; puis corticoïde 10–20 mg + lidocaïne | **0,5–1 mL** après vidange | L\'apport du corticoïde sur la récidive n\'est pas démontré ; la fenestration du pédicule est probablement le temps utile |
| **Bloc articulaire diagnostique** | Lidocaïne 1 % ou ropivacaïne 0,2 % seule | **1 mL** | EN avant / 20 min après : sert à désigner le compartiment responsable avant décision chirurgicale |

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Sans objet ici isolément ; à additionner en cas de gestes multiples dans la même séance.

**Rythme des corticoïdes** : ne pas dépasser **3 infiltrations par an** sur une même articulation, espacées d\'au moins 3 mois. Chez le patient sous traitement de fond insuffisant, la rechute rapide est un argument d\'escalade rhumatologique, pas de réinfiltration.

**Diabète** : prévenir du pic glycémique de 48–72 h, glycémie capillaire renforcée.`,

    variantes: [
      { titre: 'Voie hors du plan (out-of-plane)', texte: 'Sonde transversale sur l\'interligne, aiguille piquée au milieu du bord de la sonde, verticale, pointe suivie par petites bascules et par hydrolocalisation (0,1 mL). Trajet plus court et plus direct, mais la pointe n\'est jamais vue en continu : à réserver aux opérateurs à l\'aise, et à ne pas utiliser près de l\'artère radiale.' },
      { titre: 'Articulation radio-ulnaire distale', texte: 'Poignet en **pronation complète**, sonde transversale sur le dos de la RUD, juste en amont de la tête ulnaire. Repérer l\'interligne entre l\'incisure ulnaire du radius et la tête ulnaire, sous le tendon de l\'**extenseur ulnaire du carpe** (à ne pas traverser). Aiguille 25 G dans le plan, de ulnaire vers radial ou l\'inverse, 0,5–1 mL. Éviter la **branche cutanée dorsale du nerf ulnaire**, superficielle sur ce versant. La pronosupination dynamique sous sonde permet en outre de dépister une instabilité de la RUD.' },
      { titre: 'Articulation médio-carpienne', texte: 'Sonde sagittale sur le dos du carpe, en regard du **capitatum** : glisser d\'un doigt en distal depuis l\'interligne radio-carpien ; le deuxième interligne rencontré (lunatum-capitatum) est le bon. Aiguille de distal en proximal, 0,5–1 mL. Indication typique : arthrose médio-carpienne d\'un SLAC de stade évolué, où la radio-carpienne est déjà pincée.' },
      { titre: 'Ténosynovite des extenseurs — le geste à ne pas confondre', texte: 'Halo hypoéchogène et Doppler positif **autour** du tendon, sans épanchement articulaire : la cible est la **gaine**, pas l\'articulation. Sonde transversale, aiguille dans le plan tangentielle au tendon, pointe entre gaine et tendon, injection qui doit **cerner le tendon d\'un croissant anéchogène** sans jamais le faire gonfler. Contextes fréquents : polyarthrite, surmenage professionnel, 6e compartiment (extenseur ulnaire du carpe) chez le sportif.' },
      { titre: 'Kyste palmaire — la voie prudente', texte: 'Le kyste palmaire du poignet est au contact de l\'**artère radiale**, parfois adhérent. **Doppler impératif**, trajectoire choisie tangentiellement et à distance du vaisseau, aiguille dans le plan sur toute sa longueur. Les séries rapportent des complications vasculaires et un taux de récidive au moins aussi élevé que pour les kystes dorsaux : chez l\'anticoagulé, chez le patient dont le kyste enserre l\'artère, ou en cas de doute, **ne pas ponctionner** — abstention ou avis chirurgical.' },
      { titre: 'Ce qu\'il faut savoir refuser', texte: 'Arthrite septique suspectée (fièvre, douleur inflammatoire majeure, syndrome inflammatoire) : ponction pour analyse, jamais de corticoïde. **SDRC** : pas d\'infiltration intra-articulaire. Kyste asymptomatique : l\'abstention est le traitement de référence — une part importante régresse seule, et l\'information sur ce point vaut mieux qu\'un geste.' },
    ],

    pearls: [
      'Fléchir le poignet de 20–30° et **ne pas appuyer** : le récessus dorsal n\'existe à l\'écran qu\'à ces deux conditions.',
      'Extension active du pouce : le long extenseur du pouce bouge et identifie instantanément le tubercule de Lister et le corridor 3-4.',
      'Décider **quel compartiment** on infiltre avant de préparer la seringue : radio-carpienne, médio-carpienne et RUD ne communiquent pas toujours.',
      'Test de compression + Doppler en 5 secondes : épanchement (compressible, avasculaire) / synovite (non compressible, vascularisée) / kyste (non compressible, avasculaire, paroi nette) — trois images, trois conduites.',
      'Pour un kyste, **18 G minimum** : le gel ne passe pas dans une 21 G, et l\'échec d\'aspiration est presque toujours un problème de calibre, pas de position.',
      'Le temps utile de la ponction d\'un kyste est probablement la **fenestration du pédicule**, pas l\'aspiration elle-même.',
      'Annoncer le chiffre de récidive **avant** le geste, pas après : environ un kyste sur deux revient.',
    ],
    pieges: [
      'Injecter dans la gaine des extenseurs en croyant être intra-articulaire : le liquide cerne le tendon au lieu de distendre le récessus — regarder où va le premier 0,2 mL.',
      'Appuyer avec la sonde et conclure « pas d\'épanchement » : le récessus se collabe sous 200 g de pression.',
      'Prendre un kyste pour une bursite ou une synovite : le Doppler et le test de compression tranchent, et le pédicule signe.',
      'Aspirer un kyste palmaire sans Doppler préalable : l\'artère radiale est immédiatement à côté.',
      'Utiliser de la triamcinolone hexacétonide (Hexatrione®) en péri-tendineux ou dans une gaine : produit **strictement intra-articulaire**, risque de rupture tendineuse et d\'atrophie.',
      'Piquer trop superficiellement en dorso-radial : lésion d\'une branche du nerf radial superficiel, dysesthésie durable disproportionnée par rapport au geste.',
      'Enchaîner les infiltrations d\'un poignet de polyarthrite qui rechute à 6 semaines : c\'est un problème de traitement de fond.',
    ],
    complications: [
      '**Arthrite septique** : exceptionnelle (de l\'ordre de quelques cas pour 10 000 gestes) mais grave. Toute douleur croissante, fièvre ou rougeur après J1 impose une réévaluation urgente et une ponction pour analyse — consigne écrite au patient.',
      '**Poussée douloureuse post-injection** (« flare » microcristallin) dans les 24–48 h : fréquente avec les corticoïdes retard, cède en 48 h sous froid et antalgiques de palier 1. À annoncer, sinon elle est vécue comme un échec.',
      'Injection intratendineuse : risque de fragilisation, voire de rupture secondaire des extenseurs (surtout après corticoïde microcristallin). Se reconnaît à la résistance et au gonflement fibrillaire.',
      '**Atrophie sous-cutanée et dépigmentation** au point de ponction : site dorsal superficiel, peau fine — complication réelle, souvent lentement réversible ; prévenir sur phototype foncé.',
      'Lésion d\'une branche du nerf radial superficiel ou du nerf ulnaire dorsal : dysesthésie, névrome.',
      'Ponction de l\'artère radiale (voie radiale ou kyste palmaire) : hématome, exceptionnellement pseudo-anévrisme ; comprimer 5 min et contrôler.',
      '**Récidive du kyste** : environ un cas sur deux dans les séries après aspiration (les chiffres publiés vont d\'environ 30 % à plus de 70 % selon la technique et le recul) — ce n\'est pas une complication mais l\'histoire naturelle du geste, à annoncer avant.',
      'Effets systémiques du corticoïde : hyperglycémie 48–72 h, flush, insomnie, perturbation transitoire du cycle menstruel.',
    ],
    securite: [
      'Site superficiel et compressible : **faible risque hémorragique** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ; anticoagulants au cas par cas. **Exception : le kyste palmaire**, au contact de l\'artère radiale.',
      '**Doppler couleur avant toute voie radiale ou palmaire** ; repérage des branches du nerf radial superficiel avant la traversée cutanée.',
      'Asepsie rigoureuse : c\'est une **articulation**, pas un espace de glissement. Détersion-désinfection, gel stérile, gants stériles, aucune repalpation après désinfection.',
      'Aspiration systématique avant injection ; liquide trouble ou purulent → analyse (cytologie, bactériologie, cristaux), **aucun corticoïde**.',
      'Injection sans résistance, fractionnée, sous contrôle visuel du récessus qui se distend. Toute résistance = repositionner.',
      'Triamcinolone hexacétonide (Hexatrione®) : **intra-articulaire exclusivement**.',
      'Maximum 3 infiltrations par an et par articulation, espacées de 3 mois ; ne pas infiltrer deux articulations du même poignet le même jour sans nécessité.',
    ],

    suivi: `- **J0** : EN avant / 20 min après (valeur diagnostique si AL), amplitudes en flexion-extension et pronosupination, force de préhension (dynamomètre si disponible — c\'est le critère le plus reproductible au poignet). Noter **le compartiment infiltré**, le produit et la dose : c\'est ce qui permettra d\'interpréter la suite.
- **J2–J3** : la poussée douloureuse post-injection doit avoir cédé ; au-delà, réévaluer (infection).
- **J15–J30** : EN, gêne fonctionnelle (**QuickDASH** ou **PRWE**, validés au poignet), reprise des activités, consommation d\'antalgiques. C\'est l\'échéance qui juge le geste.
- **3 mois** : décision — répéter (si le premier effet a duré ≥ 3 mois, maximum 3 par an), changer de compartiment (échec = mauvaise cible, souvent médio-carpienne à la place de radio-carpienne), escalader le traitement de fond si rhumatisme inflammatoire, ou adresser au chirurgien de la main.
- **Kyste** : contrôle clinique et échographique à 6 semaines et à 3–6 mois. La récidive survient le plus souvent dans les 3 à 6 premiers mois. Une deuxième aspiration est raisonnable ; à la troisième, poser la question de la chirurgie ou de l\'abstention assumée.
- **Escalade** : douleur nocturne inflammatoire persistante, érosions ou synovite Doppler qui ne cède pas → avis rhumatologique. Instabilité du carpe, SLAC évolué, lésion du TFCC symptomatique → avis chirurgical.`,

    evidence: `- **Échoguidage contre repérage anatomique** : les travaux de **Sibbitt et al.** sur les injections articulaires guidées par échographie montrent une **meilleure précision de placement**, une réduction de la douleur du geste et de meilleurs résultats cliniques à court terme que les injections guidées par la palpation, sur les articulations petites et moyennes. Preuve **modérée** : essais de taille limitée, aveuglement imparfait, mais plausibilité forte au poignet où les compartiments sont étroits et non communicants. Les séries de précision retrouvent, à l\'aveugle, un taux d\'injections hors de l\'articulation visée élevé — c\'est l\'argument le plus solide en faveur du guidage ici.
- **Recommandations d\'usage** : les recommandations européennes sur la **thérapie intra-articulaire** (EULAR) encadrent l\'asepsie, les intervalles entre injections et l\'information du patient ; elles ne rendent pas le guidage obligatoire mais reconnaissent son apport sur les sites difficiles.
- **Corticoïdes intra-articulaires du poignet** : le bénéfice est établi à **court terme** (quelques semaines à quelques mois) dans les arthrites inflammatoires et les synovites ; il est **beaucoup moins documenté dans l\'arthrose du poignet**, où les données spécifiques sont pauvres et largement extrapolées d\'autres articulations. À dire au patient.
- **Kystes synoviaux** : la **régression spontanée est fréquente** et les travaux de suivi long (notamment ceux de **Dias et al.**, chirurgie de la main britannique) ne montrent pas d\'avantage net de l\'intervention sur l\'abstention en termes de résultat rapporté par le patient à plusieurs années. L\'**aspiration** a un taux de récidive nettement supérieur à l\'exérèse chirurgicale — les chiffres publiés s\'étalent d\'environ 30 % à plus de 70 %, avec une valeur souvent citée **autour de 50 %**. La **fenestration** et l\'ajout d\'un corticoïde sont largement pratiqués mais **leur bénéfice propre n\'est pas démontré** par des essais de bonne qualité.
- **Trous de la littérature, à assumer** : pas d\'ECR de bonne qualité comparant les techniques de ponction des kystes ; pas de donnée robuste sur l\'infiltration de l\'arthrose radio-carpienne isolée ; l\'intérêt de l\'immobilisation après ponction d\'un kyste repose sur l\'usage, pas sur la preuve. Enfin, aucune donnée ne soutient l\'infiltration intra-articulaire dans le **SDRC** — l\'absence de preuve est ici doublée d\'une absence de rationnel.`,

    references: [
      { auteurs: 'Sibbitt WL Jr, Peisajovich A, Michael AA, et al.', titre: 'Does sonographic needle guidance affect the clinical outcome of intraarticular injections?', revue: 'The Journal of Rheumatology', annee: '2009', type: 'ECR', verif: false, note: 'Guidage échographique vs repérage anatomique : précision et résultat clinique.' },
      { auteurs: 'Dias JJ, Buch K', titre: 'Palmar wrist ganglion: does intervention improve outcome? A prospective study of the natural history and patient-reported treatment outcomes', revue: 'Journal of Hand Surgery (British and European Volume)', annee: '2003', type: 'cohorte', verif: false, note: 'Histoire naturelle des kystes et intérêt discuté de l\'intervention ; année et volume à confirmer.' },
      { auteurs: 'Dias JJ, Dhukaram V, Kumar P', titre: 'The natural history of untreated dorsal wrist ganglia and patient reported outcome 6 years after intervention', revue: 'Journal of Hand Surgery (European Volume)', annee: '2007', type: 'cohorte', verif: false, note: 'Suivi à 6 ans des kystes dorsaux traités et non traités.' },
      { auteurs: 'Uson J, Rodriguez-García SC, Castellanos-Moreira R, et al.', titre: 'EULAR recommendations for intra-articular therapies', revue: 'Annals of the Rheumatic Diseases (RMD Open selon la version)', annee: '2021', type: 'reco', verif: false, note: 'Revue et année à confirmer.' },
      { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage)', annee: '2007', type: 'ouvrage', verif: false, note: 'Sono-anatomie du poignet dorsal, compartiments extenseurs, kystes et pédicule.' },
      { auteurs: 'Özçakar L, Kara M, Chang KV, et al.', titre: 'EURO-MUSCULUS/USPRM basic scanning protocols for the wrist and hand', revue: 'European Journal of Physical and Rehabilitation Medicine', annee: '2015', type: 'protocole', verif: false, note: 'Protocole de balayage standardisé ; année à confirmer.' },
      { auteurs: 'Backhaus M, Burmester GR, Gerber T, et al.', titre: 'Guidelines for musculoskeletal ultrasound in rheumatology', revue: 'Annals of the Rheumatic Diseases', annee: '2001', type: 'reco', verif: false, note: 'Coupes standard et définitions (épanchement, synovite) ; année à confirmer.' },
      { auteurs: 'Gaspar MP, Kane PM, Zohn RC, et al.', titre: 'Ganglion cysts of the wrist and hand — aspiration versus excision: outcomes and recurrence', revue: 'Journal of Hand Surgery / Hand (selon la publication)', annee: 'années 2010', type: 'série', verif: false, note: 'Référence incertaine : à remplacer par la série effectivement retrouvée lors de la passe de vérification.' },
      { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Métadonnées reprises de la fiche nerf-suprascapulaire, vérifiées lors d\'une session antérieure.' },
    ],
    videos: [],

    scenes: [
      {
        id: 'poignet-sagittal', section: 'sonoanatomie', titre: 'Poignet dorsal, coupe sagittale ulnaire au tubercule de Lister — vue de repérage',
        legende: 'Coupe de référence du corridor 3-4. De la superficie à la profondeur : rétinaculum, tendons extenseurs du 4e compartiment, capsule dorsale, puis la ligne osseuse qui décrit deux interlignes successifs — radio-carpien (radius / lunatum) puis médio-carpien (lunatum / capitatum). Le récessus dorsal radio-carpien, cible de l\'infiltration, n\'apparaît qu\'avec 20–30° de flexion palmaire et une sonde posée sans appui.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Proximal (radius)', right: 'Distal (carpe)' }).probeInfo({ plan: 'Sagittal dorsal, intervalle 3-4', type: 'linéaire 12–18 MHz' });
          baseDorsale(S, true);
        },
      },
      {
        id: 'poignet-radiocarpienne', section: 'technique', titre: 'Infiltration radio-carpienne — aiguille dans le plan, de distal en proximal',
        legende: 'L\'aiguille entre au-dessus du carpe et progresse vers le récessus en passant sous les tendons extenseurs, sans jamais les traverser. Critère de fin : le récessus se distend et devient plus noir autour de la pointe, l\'injection ne rencontre aucune résistance. Une résistance signifie que la pointe est dans la capsule, le cartilage ou un tendon.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Proximal (radius)', right: 'Distal (carpe)' }).probeInfo({ plan: 'Sagittal dorsal, intervalle 3-4', type: 'in-plane' });
          baseDorsale(S, false);
          S.label({ x: 130, y: 336, text: 'Radius', cls: 'lbl-bone', small: true });
          S.label({ x: 456, y: 336, text: 'Lunatum', cls: 'lbl-bone', small: true });
          S.label({ x: 616, y: 214, text: '25 G 25 mm, 30–40°', cls: 'lbl-needle', anchor: 'end', small: true });
          S.label({ x: 620, y: 104, text: 'Intervalle 3-4 :\nl\'aiguille passe\nentre les tendons', cls: 'lbl-tendon', anchor: 'end', small: true, lead: [524, 104] });
          S.target({ x: 342, y: 272, r: 30 });
          S.needle({ from: [636, 80], to: [346, 268] });
          S.spread({ x: 344, y: 272, rx: 24, ry: 16, label: '1–2 mL' });
        },
      },
      {
        id: 'poignet-kyste', section: 'technique', titre: 'Kyste synovial dorsal — aspiration et fenestration à l\'aiguille 18 G',
        legende: 'Coupe transversale sur l\'interligne scapho-lunaire : le kyste est anéchogène, à paroi fine, non compressible et sans flux Doppler ; son pédicule plonge vers le faisceau dorsal du ligament scapho-lunaire, en écartant les tendons extenseurs. Aspirer le gel (18 G, il vient en fil), puis repasser 5 à 10 fois dans la poche et dans le pédicule — c\'est ce temps de fenestration, et non l\'aspiration, qui vise la récidive.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Radial (scaphoïde)', right: 'Ulnaire (lunatum)' }).probeInfo({ plan: 'Transverse sur l\'interligne scapho-lunaire', type: 'in-plane' });
          S.skin({ thickness: 7, fatBelow: 14 });
          S.tendon({ x: 116, y: 112, rx: 28, ry: 17 });
          S.tendon({ x: 178, y: 122, rx: 26, ry: 16 });
          S.tendon({ x: 474, y: 116, rx: 28, ry: 17 });
          S.tendon({ x: 540, y: 124, rx: 26, ry: 16 });
          S.bone({ path: 'M30 322 Q118 258 208 254 Q248 258 266 278', label: 'Scaphoïde', at: [110, 350], ldy: 0, small: true });
          S.bone({ path: 'M334 278 Q356 256 398 252 Q490 258 570 322', label: 'Lunatum', at: [470, 350], ldy: 0, small: true });
          S.ligament({ path: 'M268 256 L332 254 L334 268 L270 270 Z', label: 'Lig. scapho-lunaire (faisceau dorsal)', lx: 300, ly: 316, small: true, lead: [300, 272] });
          S.fluid({ x: 300, y: 158, rx: 82, ry: 52, label: 'Kyste synovial', lx: 300, ly: 158 });
          S.fluid({ path: 'M286 206 L316 206 L308 254 L294 254 Z', label: 'Pédicule', lx: 210, ly: 234, anchor: 'end', small: true, lead: [286, 230] });
          S.label({ x: 116, y: 84, text: 'Tendons extenseurs refoulés', cls: 'lbl-tendon', small: true });
          S.target({ x: 300, y: 158, r: 30 });
          S.needle({ from: [636, 92], to: [326, 152], label: '18 G — aspiration puis fenestration' });
        },
      },
    ],

    checklist: [
      'Compartiment cible choisi avant le geste (radio-carpienne / médio-carpienne / RUD) et récessus visualisé',
      'Test de compression + Doppler : épanchement vs synovite vs kyste tranché',
      'Doppler passé avant toute voie radiale ou palmaire (artère radiale) ; branches du nerf radial superficiel repérées',
      'Arthrite septique écartée cliniquement ; si doute, ponction pour analyse et aucun corticoïde',
      'SDRC écarté — ce n\'est pas une indication d\'infiltration intra-articulaire',
      'Nombre d\'infiltrations déjà reçues sur cette articulation vérifié (maximum 3 par an, espacées de 3 mois)',
      'Hexatrione® (triamcinolone hexacétonide) réservé à l\'intra-articulaire — jamais dans une gaine tendineuse',
      'Kyste : aiguille 18 G préparée, taux de récidive (≈ 50 %) annoncé **avant** le geste',
      'Patient prévenu de la poussée douloureuse possible à 24–48 h et des signes devant faire consulter (fièvre, douleur croissante, rougeur)',
    ],
  });

})();
