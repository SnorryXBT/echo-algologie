/* Fiche : infiltrations échoguidées des articulations sterno-claviculaire, manubrio-sternale, sterno-costales et chondro-costales. */
ECHO.register({
  id: 'sterno-costo-claviculaire',
  titre: 'Articulations sterno-claviculaire, sterno-costales et chondro-costales — infiltrations échoguidées',
  titreCourt: 'Sterno-costo-claviculaire',
  en: 'Ultrasound-guided injection of the sternoclavicular, manubriosternal, sternocostal and costochondral joints (Tietze syndrome, costochondritis, sternoclavicular arthritis, SAPHO)',
  region: 'thorax',
  types: ['infiltration'],
  niveau: 1,
  grade: 'Faible (séries, cas cliniques et avis d\'experts ; aucun ECR d\'infiltration échoguidée)',
  maj: '2026-09',
  motsCles: ['Tietze', 'costochondrite', 'sterno-claviculaire', 'manubrio-sternale', 'chondro-costale', 'sterno-costale', 'SAPHO', 'douleur thoracique antérieure', 'paroi thoracique', 'angle de Louis', 'arthrite sterno-claviculaire'],
  resume: 'La paroi thoracique antérieure est une source de douleur chronique constamment sous-diagnostiquée : jusqu\'à un tiers des douleurs thoraciques non coronariennes sont pariétales. Ces articulations sont **superficielles, palpables et parfaitement accessibles à la sonde haute fréquence** — l\'échographie transforme un geste historiquement aveugle et hasardeux en geste précis. Quatre entités dominent : le **syndrome de Tietze** (tuméfaction inflammatoire d\'un seul cartilage, typiquement 2e ou 3e, sujet jeune), la **costochondrite** (douleur multiple sans tuméfaction, la plus fréquente), l\'**arthrose ou l\'arthrite sterno-claviculaire** (dégénérative, inflammatoire ou septique), et le **SAPHO**, dont l\'atteinte de la paroi thoracique antérieure est quasi signature. Le geste est simple ; le danger ne l\'est pas : la **plèvre et le médiastin sont immédiatement en arrière des cartilages**, les **vaisseaux sous-claviers et brachio-céphaliques immédiatement en arrière de la sterno-claviculaire**. La règle qui structure toute cette fiche est une règle de direction d\'aiguille : **tangentielle, jamais perpendiculaire**.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal strict, bras le long du corps, petit coussin interscapulaire pour ouvrir la paroi antérieure ; tête légèrement tournée du côté opposé pour la sterno-claviculaire',
    sonde: 'lineaire', sondeNote: 'linéaire haute fréquence 12–18 MHz, profondeur 2–4 cm ; sonde « hockey stick » très utile dans le creux sus-sternal et chez le sujet maigre',
    approche: 'in-plane', approcheNote: 'in-plane, latéro-médial et **tangentiel**, aiguille parallèle au plan de la paroi ; out-of-plane acceptable pour les petites articulations chondro-costales, mais uniquement en dépôt péri-chondral superficiel',
    aiguille: '25 G, 25 mm (jusqu\'à 22 G 40 mm chez le sujet épais) ; aiguille montée sur seringue de 2 mL pour garder la sensation de résistance',
    cible: 'Sterno-claviculaire et manubrio-sternale : **intra-articulaire**, dans la fente entre les deux surfaces, en avant du disque. Chondro-costale et sterno-costale : **péri-chondral**, au contact du périchondre épaissi, sans jamais traverser le cartilage. Critère de fin : injection facile, halo anéchogène le long de l\'interligne ou du périchondre',
    injectat: '0,5–1 mL au total : corticoïde (bétaméthasone 1–2 mg ou méthylprednisolone 10–20 mg) + lidocaïne 1 %',
    duree: '5–10 min',
  },

  indications: [
    '**Syndrome de Tietze** : tuméfaction douloureuse d\'un seul cartilage chondro-costal (2e ou 3e dans la grande majorité des cas), confirmée à l\'échographie par un épaississement hypoéchogène péri-chondral, après échec des AINS et du repos relatif.',
    '**Costochondrite** : douleur reproduite à la palpation de plusieurs jonctions chondro-costales, sans tuméfaction. Traitement d\'abord conservateur ; infiltration réservée aux formes persistantes et bien localisées, en général sur une ou deux jonctions.',
    '**Arthrose ou arthrite sterno-claviculaire** : douleur mécanique ou inflammatoire, tuméfaction, limitation de l\'élévation du bras ; échographie montrant pincement, ostéophytes, épanchement ou hypertrophie synoviale.',
    '**Arthrite de la manubrio-sternale** (angle de Louis) : quasi spécifique des spondyloarthrites et du SAPHO ; infiltration symptomatique en complément du traitement de fond.',
    '**SAPHO** : atteinte de la paroi thoracique antérieure (hyperostose sterno-costo-claviculaire) — l\'infiltration est **symptomatique et adjuvante**, jamais le traitement de la maladie, qui relève du rhumatologue (AINS, bisphosphonates, anti-TNF).',
    '**Geste diagnostique** : confirmer l\'origine pariétale d\'une douleur thoracique après élimination formelle des causes cardiaques, pleuro-pulmonaires et digestives. Un test à l\'anesthésique local seul est ici particulièrement informatif.',
  ],
  contreIndications: [
    '**Absolues** : suspicion d\'arthrite septique sterno-claviculaire (fièvre, tuméfaction inflammatoire majeure, terrain toxicomane IV, diabète, immunodépression, hémodialyse) — l\'infiltration est alors une faute : c\'est une ponction à visée bactériologique et un avis chirurgical qui s\'imposent. Infection cutanée en regard, allergie vraie.',
    'Absolues : douleur thoracique dont l\'origine coronarienne, pleuro-pulmonaire, aortique ou digestive n\'a pas été formellement écartée. La paroi est un diagnostic d\'élimination raisonné, pas un diagnostic de facilité.',
    'Relatives : troubles de l\'hémostase — gestes superficiels et compressibles, **faible risque hémorragique** (ASRA-ESRA 2018) ; pas d\'arrêt systématique des antiagrégants. Prudence particulière pour la sterno-claviculaire, dont les rapports vasculaires postérieurs ne sont pas compressibles.',
    'Relatives : diabète déséquilibré, corticothérapie récente sur le même site (< 3 mois), infection évolutive, peau très fine ou déjà atrophique (l\'atrophie cortisonique est ici visible et définitive).',
    'Prudence chez le sujet très maigre : la plèvre peut se trouver à moins de 15 mm de la peau au niveau des 2e–4e cartilages.',
  ],
  alternatives: 'Traitement conservateur d\'abord : AINS per os ou topiques, repos relatif, arrêt des gestes déclenchants (musculation en poussée, toux), réassurance argumentée (une douleur pariétale n\'est pas une douleur cardiaque — le dire explicitement fait partie du traitement). Emplâtre de lidocaïne 5 % sur le point douloureux. Kinésithérapie et travail postural dorsal. En cas d\'échec des infiltrations : bloc des **branches cutanées antérieures** des nerfs intercostaux correspondants, bloc **pecto-intercostal** ou **para-sternal** (fiches thorax), radiofréquence pulsée des branches concernées après bloc test positif, TENS. Dans le SAPHO et les spondyloarthrites, l\'escalade est **systémique**, pas locale.',

  anatomie: `L\'**articulation sterno-claviculaire** est la seule articulation vraie entre le membre supérieur et le squelette axial. C\'est une articulation en selle, très incongruente, dont la stabilité repose sur un **disque articulaire fibro-cartilagineux** complet et sur les ligaments sterno-claviculaires antérieur et postérieur, costo-claviculaire et interclaviculaire. Elle est **très superficielle** : la ligne articulaire est habituellement à 5–15 mm de la peau.

Ce qui est **immédiatement en arrière** d\'elle décide de la technique : le **tronc veineux brachio-céphalique** (à droite) et la **veine brachio-céphalique gauche** qui croise la ligne médiane, l\'**artère sous-clavière** et le **tronc artériel brachio-céphalique**, la trachée, l\'œsophage et le **dôme pleural**. Une aiguille dirigée d\'avant en arrière sur quelques millimètres de trop ne rencontre pas du tissu inerte : elle rencontre le médiastin.

L\'**articulation manubrio-sternale** (angle de Louis, en regard du 2e cartilage costal) est une symphyse qui peut se synovialiser et s\'enflammer — c\'est une localisation quasi spécifique des spondyloarthrites et du SAPHO.

Les **articulations sterno-costales** (jonction du cartilage costal et du sternum) et **chondro-costales** (jonction du cartilage et de la côte osseuse) sont des articulations minuscules ou de simples continuités cartilagineuses. Le cartilage costal est **hypoéchogène, homogène et transsonore** : contrairement à l\'os, il laisse passer les ultrasons — la plèvre est donc parfaitement visible derrière lui, à 15–30 mm de la peau selon le morphotype.

L\'innervation sensitive de toute cette région vient des **branches cutanées antérieures des nerfs intercostaux** T1–T6, qui émergent en para-sternal : c\'est le relais anatomique vers lequel on escalade quand les infiltrations articulaires échouent.

### Ce qui compte pour le geste
- **Le cartilage transmet, l\'os arrête.** La transition cartilage / os osseux est visible d\'un coup d\'œil : ombre acoustique franche du côté osseux, fenêtre transsonore du côté cartilagineux. C\'est ce qui permet de voir la plèvre derrière le cartilage — et c\'est aussi ce qui rappelle que rien ne la protège.
- **Direction d\'aiguille = sécurité.** Tangentielle à la paroi, dans l\'axe de l\'articulation ou du cartilage, jamais perpendiculaire. Une aiguille tangentielle qui dérape sort de la peau ; une aiguille perpendiculaire qui dérape entre dans la plèvre ou le médiastin.
- **Volumes minuscules.** La capacité de la sterno-claviculaire est de l\'ordre de quelques dixièmes de millilitre : au-delà de 0,5–1 mL on distend la capsule, on fait mal et on refoule l\'injectat en sous-cutané.
- **Peau fine = atrophie visible.** L\'atrophie et la dépigmentation cortisoniques sur le sternum ou la clavicule sont inesthétiques, durables et parfaitement reprochables. Petites doses, dépôt profond, pas de reflux le long du trajet.
- **Le Tietze est une image, pas seulement une clinique** : l\'échographie objective l\'épaississement hypoéchogène péri-chondral et l\'hypervascularisation Doppler, et permet de suivre leur régression.`,

  installation: {
    patient: `**Décubitus dorsal strict**, bras le long du corps, épaules relâchées. Un **petit coussin interscapulaire** ouvre la paroi antérieure et rend la sterno-claviculaire et le manubrium plus saillants — c\'est le détail qui change la fenêtre chez le sujet enroulé.

Pour la sterno-claviculaire, tourner légèrement la tête du côté opposé et abaisser l\'épaule ; ne pas mettre le bras en abduction (cela subluxe l\'articulation et ferme l\'interligne).

Repérer et marquer au feutre **le point douloureux exact désigné par le patient** avant toute désinfection, puis confirmer à la sonde que ce point correspond bien à une structure articulaire ou chondrale : la concordance entre le doigt du patient, la palpation et l\'image est la condition de tout le reste.`,
    operateur: `Opérateur **du côté à traiter, à hauteur du thorax** ; écran en face, au-delà de la tête du patient. Sonde tenue en prise courte, **talon appuyé sur le sternum ou la clavicule** : la paroi bouge à chaque respiration, l\'appui est ce qui stabilise l\'image.

Ponction **in-plane, de latéral vers médial**, l\'aiguille arrivant presque parallèle à la peau. Pour la sterno-claviculaire, entrer par le bord **latéral** de la sonde, du côté claviculaire, et progresser vers l\'interligne : ce sens fait buter la pointe sur l\'os si l\'on va trop loin, au lieu de l\'amener vers le médiastin. Ne **jamais** ponctionner de médial en latéral ni d\'avant en arrière au-dessus du creux sus-sternal.`,
    sonde: `- Linéaire **12–18 MHz**, preset superficiel / MSK, profondeur **2–4 cm** (garder la plèvre ou les vaisseaux dans le champ, même quand la cible est à 1 cm).
- Sonde **hockey stick** dès que la zone est creuse ou étroite : creux sus-sternal, sujet maigre, articulation chondro-costale haute.
- **Doppler couleur systématique** avant toute ponction sterno-claviculaire (vaisseaux postérieurs) et devant toute tuméfaction chondrale (hypervascularisation inflammatoire du Tietze, qui est aussi un critère de suivi).
- Comparaison **au côté sain** : c\'est le seul moyen fiable de qualifier un épaississement ou un pincement sur ces articulations dont la normale est très variable.
- Vérifier le glissement pleural avant et après tout geste chondro-costal.`,
  },

  reperage: [
    { titre: 'Partir du repère palpable', texte: 'Poser la sonde **transversalement sur l\'extrémité médiale de la clavicule**, ou **longitudinalement dans l\'axe de la côte douloureuse** selon la cible. Le repère de départ est toujours le point douloureux désigné par le patient, confirmé par la palpation sous la sonde (le signe le plus utile de la fiche : la pression de la sonde reproduit exactement la douleur).' },
    { titre: 'Sterno-claviculaire — identifier les deux versants', texte: 'En coupe transversale, on voit deux lignes hyperéchogènes convexes avec ombre : l\'**extrémité médiale de la clavicule** (latérale) et le **manubrium sternal** (médial), séparées par la **fente articulaire**, seule fenêtre acoustique du secteur. Le **disque** apparaît comme une structure fibrillaire modérément échogène dans l\'interligne, et le **ligament sterno-claviculaire antérieur** comme une bande qui ponte l\'articulation.' },
    { titre: 'Chercher les signes lésionnels', texte: 'Épanchement (fente élargie, anéchogène), hypertrophie synoviale (comblement hypoéchogène avec signal Doppler), ostéophytes et irrégularités corticales, subluxation antérieure de la clavicule en dynamique (élévation du bras). Comparer systématiquement au côté opposé.' },
    { titre: 'Chondro-costal et sterno-costal — suivre la côte', texte: 'Sonde **longitudinale dans l\'axe de la côte**, partant de la côte osseuse (ligne hyperéchogène avec **ombre franche**) et glissant vers le sternum : la transition vers le **cartilage** est nette — le cartilage est hypoéchogène, homogène, et laisse voir la **plèvre** derrière lui. Les deux jonctions (chondro-costale en dehors, sterno-costale en dedans) encadrent le cartilage.' },
    { titre: 'Reconnaître le Tietze', texte: 'Épaississement **hypoéchogène fusiforme du périchondre et des parties molles** en regard d\'un seul cartilage, le plus souvent le 2e ou le 3e, avec hypervascularisation Doppler et douleur exquise à la pression de la sonde. La comparaison au cartilage controlatéral est indispensable — c\'est elle qui fait le diagnostic échographique.' },
    { titre: 'Si l\'on ne trouve pas l\'interligne', texte: 'Sterno-claviculaire ankylosée ou hyperostosique (SAPHO) : l\'interligne peut être virtuel. Ne pas forcer — un dépôt **péri-articulaire** au contact de la capsule antérieure est acceptable et souvent efficace, et c\'est de toute façon ce que réalise en pratique une bonne partie des injections « intra-articulaires ». Le noter dans le compte rendu.' },
  ],

  sonoanatomie: [
    { structure: 'Extrémité médiale de la clavicule', aspect: 'Ligne hyperéchogène convexe avec cône d\'ombre franc', repere: 'Versant latéral de l\'articulation sterno-claviculaire' },
    { structure: 'Manubrium sternal', aspect: 'Ligne hyperéchogène, ombre franche', repere: 'Versant médial ; l\'angle de Louis est la marche palpable en regard du 2e cartilage' },
    { structure: 'Fente sterno-claviculaire', aspect: 'Interruption hypo/anéchogène entre les deux corticales, 2–5 mm', repere: 'Cible intra-articulaire ; seule fenêtre acoustique de la région' },
    { structure: 'Disque articulaire', aspect: 'Structure fibrillaire modérément échogène dans l\'interligne', repere: 'Le viser en avant, jamais le traverser' },
    { structure: 'Ligament sterno-claviculaire antérieur', aspect: 'Bande hyperéchogène fibrillaire pontant l\'articulation', repere: 'Toit de la cible ; sa traversée donne un ressaut net' },
    { structure: 'Cartilage costal', aspect: 'Bande **hypoéchogène homogène et transsonore**, sans ombre', repere: 'S\'oppose à l\'os voisin qui, lui, donne une ombre franche' },
    { structure: 'Jonction chondro-costale', aspect: 'Transition nette entre la ligne osseuse ombrée et le cartilage transsonore', repere: 'Siège du Tietze et de la costochondrite' },
    { structure: 'Épaississement péri-chondral (Tietze)', aspect: 'Manchon hypoéchogène fusiforme, hypervascularisé au Doppler', repere: 'Comparer au côté sain ; sert de critère de suivi' },
    { structure: 'Plèvre / vaisseaux médiastinaux', aspect: 'Ligne brillante glissante derrière le cartilage ; structures vasculaires anéchogènes derrière la sterno-claviculaire', repere: 'À 15–30 mm de la peau : la raison de la ponction tangentielle' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Désinfection large, gel stérile ou housse. Seringue de 2 mL (pas plus : une petite seringue conserve la sensation de résistance et empêche d\'injecter trop), aiguille 25 G 25 mm. Prévenir la patiente ou le patient que le geste est bref mais que la mise en tension capsulaire est douloureuse 2 à 3 secondes.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 25 G ; si elle est faite, quelques dixièmes de mL de lidocaïne 1 % **strictement intradermiques** — un bouton sous-cutané volumineux dégrade immédiatement l\'image d\'une cible à 1 cm.' },
    { titre: 'Ponction tangentielle in-plane', texte: 'Aiguille introduite au bord **latéral** de la sonde, **presque parallèle à la peau** (10–20°). Visualiser la pointe en permanence. **Sterno-claviculaire** : progresser de latéral en médial le long de la corticale claviculaire jusqu\'à franchir le ligament antérieur et entrer dans la fente ; la butée osseuse est le garde-fou. **Chondro-costal** : glisser la pointe le long du périchondre jusqu\'au sommet de l\'épaississement, **sans traverser le cartilage** (qui est de toute façon un obstacle ferme et douloureux).' },
    { titre: 'Test avant injection', texte: 'Aspiration (obligatoire pour la sterno-claviculaire : vaisseaux postérieurs). Puis injecter **0,1–0,2 mL** en regardant l\'écran : l\'injectat doit s\'étaler **le long de l\'interligne ou du périchondre**. Une résistance forte, une douleur intense ou un aspect de « bulle » sous-cutanée signent un mauvais placement — repositionner. En cas de doute sur la position intra-articulaire d\'une sterno-claviculaire, un dépôt péri-capsulaire assumé vaut mieux qu\'une progression aveugle vers l\'arrière.' },
    { titre: 'Injection lente et fractionnée', texte: 'Compléter jusqu\'à **0,5–1 mL au total**, lentement. S\'arrêter dès que la résistance augmente franchement : sur ces articulations, la contenance est le facteur limitant, pas le protocole. En cas d\'épanchement sterno-claviculaire, aspirer d\'abord (envoi en bactériologie et cristaux au moindre doute) avant d\'injecter.' },
    { titre: 'Critère de fin', texte: 'Halo anéchogène linéaire suivant l\'interligne ou moulant le périchondre, injection redevenue facile en fin de geste, pas de collection sous-cutanée, glissement pleural conservé pour les cibles chondro-costales.' },
    { titre: 'Après le geste', texte: 'Compression douce 1 min, pansement. Vérifier le glissement pleural. **Test anesthésique à 15–20 min** : reproduire la manœuvre douloureuse (palpation, inspiration profonde, mouvement du bras) — l\'abolition de la douleur confirme la cible et vaut argument diagnostique. Surveillance 15–20 min. Consignes : repos relatif 48 h, pas de musculation ni de port de charge une semaine, poussée douloureuse post-injection possible 24–48 h (cristaux de corticoïde), glace.' },
  ],

  injectat: `| Objectif | Produits | Volume total | Commentaire |
|---|---|---|---|
| Test diagnostique pur | Lidocaïne 1 % seule | 0,3–0,5 mL | Très informatif sur ces cibles : la douleur est reproductible à la palpation, donc son abolition est vérifiable immédiatement. À faire avant toute décision d\'escalade |
| Sterno-claviculaire (arthrose, arthrite non septique) | Bétaméthasone 1–2 mg (Diprostène® 0,2–0,3 mL) **ou** méthylprednisolone 10–20 mg + lidocaïne 1 % | **0,5 mL** | Capacité articulaire minime : au-delà, on distend et on refoule en sous-cutané |
| Manubrio-sternale | Idem, doses basses | 0,3–0,5 mL | Symphyse peu compliante ; injection très lente |
| Chondro-costale / sterno-costale (Tietze, costochondrite) | Corticoïde à dose basse + lidocaïne 1 % | **0,5–1 mL**, dépôt **péri-chondral** | Ne pas injecter dans le cartilage ; en cas de doute, rester péri-chondral et fractionner sur deux points |
| Formes très inflammatoires (SAPHO, spondyloarthrite) | Corticoïde + AL, en complément du traitement de fond | 0,5–1 mL | Geste **adjuvant** : l\'escalade est systémique (rhumatologue), pas locale |

**Triamcinolone hexacétonide (Hexatrione®)** : strictement réservée à l\'**intra-articulaire**. Sur des articulations aussi petites et aussi superficielles, son rapport bénéfice/risque est défavorable — le risque d\'atrophie et de dépigmentation cutanées est ici maximal. Je ne l\'utilise pas sur cette région ; préférer une dose basse de bétaméthasone ou de méthylprednisolone.

**Corticoïde particulaire ou non ?** Aucune artère terminale n\'est en jeu, un particulaire est donc acceptable sur le plan neurologique. Le vrai argument est **cutané** : peau fine, articulation à quelques millimètres, dépigmentation et atrophie visibles et durables. Dose minimale efficace, dépôt profond, purge du trajet à l\'aiguille au retrait.

**Doses maximales d\'AL** : sans objet aux volumes utilisés ici (< 1 mL). Elles redeviennent pertinentes si l\'on associe dans la même séance un bloc pariétal (pecto-intercostal, para-sternal, intercostal) — ropivacaïne 3 mg/kg, lidocaïne 4,5 mg/kg.

**Rythme** : pas plus de 2 à 3 infiltrations par site et par an, espacées d\'au moins 3 mois. Une troisième infiltration sans bénéfice croissant est un signal d\'arrêt, pas un signal de répétition.`,

  variantes: [
    { titre: 'Ponction diagnostique d\'une sterno-claviculaire suspecte', texte: `Devant une tuméfaction inflammatoire sterno-claviculaire, surtout chez un toxicomane IV, un diabétique, un dialysé ou un immunodéprimé, l\'**arthrite septique** doit être évoquée en premier : c\'est une localisation classique, souvent révélée tardivement, avec un risque d\'abcès médiastinal. Le geste devient alors une **ponction à visée bactériologique sous échographie, sans corticoïde**, avec envoi immédiat en bactériologie (dont mycobactéries), imagerie en coupes et avis chirurgical. Infiltrer une arthrite septique est la faute grave de cette fiche.` },
    { titre: 'Repérage dynamique de l\'instabilité sterno-claviculaire', texte: 'Chez le sujet jeune, hyperlaxe ou après traumatisme, une subluxation antérieure de l\'extrémité médiale de la clavicule est visible **en dynamique** (élévation et rétropulsion du bras sous la sonde). Une instabilité n\'est pas une indication d\'infiltration : le corticoïde fragilise la capsule et peut aggraver le problème. Orientation vers la rééducation scapulaire et l\'avis chirurgical.' },
    { titre: 'Escalade vers les branches cutanées antérieures', texte: 'Quand deux infiltrations bien placées n\'ont donné qu\'un soulagement bref, la cible suivante n\'est plus l\'articulation mais le **nerf** : bloc des branches cutanées antérieures des nerfs intercostaux correspondants (T2–T6), plan **pecto-intercostal** ou **para-sternal**, sous échographie, avec les mêmes précautions pleurales. Si ce bloc test est franchement positif et reproductible, une radiofréquence pulsée de ces branches est envisageable (données limitées à des cas et à de petites séries — à confirmer).' },
    { titre: 'Traitements locaux non injectables', texte: 'Emplâtre de lidocaïne 5 % sur le point douloureux, AINS topique, TENS, cryothérapie locale. Peu coûteux, sans risque, et utiles en entretien entre deux infiltrations — à proposer systématiquement plutôt qu\'à réserver à l\'échec.' },
    { titre: 'Le versant non technique du traitement', texte: 'Une part majeure de la souffrance de ces patients tient à la **peur cardiaque** : beaucoup ont consulté aux urgences, ont eu un bilan négatif et sont repartis sans explication. Nommer la structure responsable, montrer l\'image, reproduire la douleur sous la sonde et le dire — « la douleur vient de cette articulation, la voici » — a un effet thérapeutique propre et documenté dans les recommandations de prise en charge de la douleur pariétale. Le faire fait partie du geste.' },
  ],

  pearls: [
    'La sonde est aussi un doigt : la douleur reproduite exactement sous la sonde, en un point que le patient reconnaît, vaut plus que toute image.',
    'Comparer systématiquement au côté sain avant de conclure à un épaississement ou à un pincement : la normale de ces articulations est très variable.',
    'Aiguille tangentielle, entrée latérale, butée osseuse : trois règles qui suffisent à rendre le geste sûr.',
    'Seringue de 2 mL maximum : elle empêche mécaniquement d\'injecter trop et conserve la sensation de résistance.',
    'Cartilage = fenêtre acoustique. Voir la plèvre derrière le cartilage n\'est pas rassurant, c\'est un avertissement.',
    'Faire le test anesthésique à 15–20 min avant de laisser partir le patient : c\'est la seule façon de savoir si l\'on a traité la bonne structure.',
  ],
  pieges: [
    'Infiltrer une arthrite septique sterno-claviculaire prise pour une poussée inflammatoire : terrain à risque, fièvre, tuméfaction majeure → ponction bactériologique, pas corticoïde.',
    'Ponctionner d\'avant en arrière au-dessus du creux sus-sternal : le médiastin est à quelques millimètres et il n\'est pas compressible.',
    'Injecter plus de 1 mL « pour être sûr » : on distend la capsule, on refoule en sous-cutané et on prépare une atrophie cutanée.',
    'Prendre une douleur para-sternale diffuse et multiple pour une cible infiltrable : la costochondrite multiple relève d\'abord du traitement médical et de la réassurance, pas de cinq injections.',
    'Oublier le contexte : une atteinte manubrio-sternale ou sterno-costo-claviculaire bilatérale doit faire chercher un SAPHO ou une spondyloarthrite et déclencher un avis rhumatologique, pas une troisième infiltration.',
    'Négliger le bilan d\'élimination cardiaque et pleuro-pulmonaire parce que « la palpation reproduit la douleur » : une douleur pariétale reproductible n\'exclut pas une pathologie thoracique associée.',
  ],
  complications: [
    '**Pneumothorax** : possible pour toute cible chondro-costale ou sterno-costale, le cartilage ne protégeant pas la plèvre. CAT : arrêt, échographie pleurale (perte du glissement, point poumon), surveillance, radiographie et avis si symptomatique.',
    '**Ponction vasculaire ou médiastinale** (sterno-claviculaire) : veine ou tronc brachio-céphalique, artère sous-clavière — site non compressible. Prévention exclusive : abord latéral tangentiel, Doppler préalable, aspiration.',
    '**Atrophie et dépigmentation cutanées** : complication la plus fréquente en pratique, du fait de la finesse de la peau. Dose minimale, dépôt profond, éviter le reflux le long du trajet, prévenir le patient.',
    'Arthrite septique iatrogène : exceptionnelle sous asepsie correcte, mais gravissime sur la sterno-claviculaire (risque d\'extension médiastinale). Toute douleur croissante avec fièvre après le geste = avis en urgence.',
    'Poussée douloureuse post-injection (cristaux de corticoïde) : 24–48 h, glace et antalgiques de palier 1 ; à annoncer systématiquement, sinon elle est vécue comme un échec.',
    'Effets systémiques du corticoïde : hyperglycémie 24–72 h chez le diabétique, flush, insomnie — même à faible dose.',
    'Fragilisation capsulaire et aggravation d\'une instabilité sterno-claviculaire en cas d\'injections répétées.',
  ],
  securite: [
    'Gestes superficiels et compressibles : **faible risque hémorragique** (ASRA-ESRA 2018) ; pas d\'arrêt systématique des antiagrégants. Réserve pour la sterno-claviculaire, dont les rapports postérieurs ne sont pas compressibles.',
    '**Doppler couleur avant toute ponction sterno-claviculaire** et devant toute tuméfaction chondrale.',
    'Aiguille strictement in-plane, tangentielle, pointe visible en permanence ; profondeur d\'écran réglée pour garder plèvre ou vaisseaux dans le champ.',
    'Glissement pleural vérifié avant et après tout geste chondro-costal ou sterno-costal, et noté dans le compte rendu.',
    'Devant toute suspicion d\'arthrite septique : ponction bactériologique, jamais de corticoïde.',
    'Dose cumulée de corticoïde tracée : 2 à 3 infiltrations par site et par an au maximum, espacées d\'au moins 3 mois.',
  ],

  suivi: `- **J0** : EN avant / à 20 min (test anesthésique, en reproduisant la manœuvre douloureuse : palpation, inspiration profonde, mouvement du bras), tolérance, glissement pleural. Noter précisément la structure infiltrée et le côté.
- **J15–J30** : EN moyenne et maximale, douleur à la palpation du point index, retentissement sur le sommeil et sur l\'activité (port de charge, sport, toux), **contrôle échographique** de l\'épaississement péri-chondral dans un Tietze (sa régression est un critère objectif utile). Décision : ne rien refaire si l\'amélioration est nette, répéter une fois à 3 mois si l\'amélioration est partielle, réévaluer le diagnostic si elle est nulle.
- **3 mois** : deux infiltrations bien placées sans bénéfice durable ferment la stratégie locale. Deux directions alors : rechercher une cause générale (SAPHO, spondyloarthrite, néoplasie pariétale, fracture de fatigue) par un avis rhumatologique et une imagerie en coupes ; ou passer au registre nerveux (bloc des branches cutanées antérieures, pecto-intercostal, para-sternal).
- Réassurance et information tracées dans le dossier : elles font partie du traitement et elles évitent la récidive des passages aux urgences.`,

  evidence: `- **Niveau de preuve global : faible.** Il n\'existe, à ma connaissance, **aucun essai contrôlé randomisé d\'infiltration échoguidée** des articulations sterno-claviculaire, manubrio-sternale, sterno-costales ou chondro-costales. Toute la pratique repose sur des séries, des cas cliniques, des descriptions techniques et l\'avis d\'experts. C\'est à dire au patient.
- **Syndrome de Tietze** : la littérature de référence est ancienne et essentiellement descriptive (revues critiques des années 1990). Une petite série a évalué l\'infiltration locale de corticoïde sous contrôle échographique avec suivi de l\'épaississement (Kamel et Kotob) — c\'est le travail le plus souvent cité, mais son effectif est faible.
- **Costochondrite** : les revues de pratique clinique recommandent en première intention AINS, repos relatif et réassurance, l\'infiltration n\'intervenant qu\'en cas d\'échec et sur une cible bien localisée. Preuve **faible**, accord professionnel.
- **Infiltration sterno-claviculaire échoguidée** : validée sur le plan de la **précision** (descriptions techniques et travaux de validation en cadavre ou sous contrôle d\'imagerie), pas sur le plan de l\'efficacité clinique comparée. Le gain de l\'échoguidage sur le geste à l\'aveugle est donc un gain de sécurité et de précision, argumenté, plutôt qu\'un gain d\'efficacité démontré.
- **Arthrite septique sterno-claviculaire** : bien documentée par des revues de cas nombreuses, avec un profil de terrain net (toxicomanie IV, diabète, immunodépression) et un risque d\'extension médiastinale. C\'est la donnée la plus solide de la fiche, et elle est négative : elle dit quand ne pas infiltrer.
- **SAPHO** : entité bien décrite, dont l\'atteinte de la paroi thoracique antérieure est caractéristique. Le traitement est systémique ; aucune donnée ne soutient l\'infiltration locale comme traitement de fond. Preuve **faible** pour l\'usage symptomatique adjuvant.
- **Escalade nerveuse (blocs pariétaux, radiofréquence des branches cutanées antérieures)** : données limitées à des cas et à de petites séries. À proposer comme une option raisonnée, pas comme un standard.`,

  references: [
    { auteurs: 'Aeschlimann A, Kahn MF', titre: 'Tietze\'s syndrome: a critical review', revue: 'Clin Exp Rheumatol', annee: '1990', type: 'revue', verif: false },
    { auteurs: 'Kamel M, Kotob H', titre: 'Ultrasonographic assessment of local steroid injection in Tietze\'s syndrome', revue: 'Br J Rheumatol', annee: '1997', type: 'série', verif: false },
    { auteurs: 'Proulx AM, Zryd TW', titre: 'Costochondritis: diagnosis and treatment', revue: 'Am Fam Physician', annee: '2009', type: 'revue de pratique', verif: false },
    { auteurs: 'Fam AG, Smythe HA', titre: 'Musculoskeletal chest wall pain', revue: 'CMAJ', annee: '1985', type: 'revue', verif: false },
    { auteurs: 'Pourcho AM, Sellon JL, Smith J', titre: 'Sonographically guided sternoclavicular joint injection: description of technique and validation', revue: 'J Ultrasound Med', annee: '2015', type: 'technique / validation', verif: false },
    { auteurs: 'Robinson CM, Jenkins PJ, Markham PE, Beggs I', titre: 'Disorders of the sternoclavicular joint', revue: 'J Bone Joint Surg Br', annee: '2008', type: 'revue', verif: false },
    { auteurs: 'Ross JJ, Shamsuddin H', titre: 'Sternoclavicular septic arthritis: review of 180 cases', revue: 'Medicine (Baltimore)', annee: '2004', type: 'revue de cas', verif: false },
    { auteurs: 'Nguyen MT, Borchers A, Selmi C, Naguwa SM, Cheema G, Gershwin ME', titre: 'The SAPHO syndrome', revue: 'Semin Arthritis Rheum', annee: '2012', type: 'revue', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence déjà vérifiée dans le projet (fiche nerf suprascapulaire).' },
  ],
  videos: [],

  scenes: [
    {
      id: 'scc-sterno-clav', section: 'sonoanatomie', titre: 'Articulation sterno-claviculaire — coupe transversale',
      legende: 'Deux corticales convexes avec leur ombre — clavicule en dehors, manubrium en dedans — séparées par la fente articulaire, seule fenêtre acoustique du secteur. Le ligament sterno-claviculaire antérieur ponte l\'articulation ; le disque occupe l\'interligne. Les gros vaisseaux médiastinaux sont à environ 1 cm en arrière : c\'est ce qui interdit toute ponction dirigée d\'avant en arrière.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Latéral (clavicule)', right: 'Médial (manubrium)' }).probeInfo({ plan: 'Transversale sur l\'extrémité médiale de la clavicule', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 6, fatBelow: 16 });
        S.muscle({ path: 'M0 66 L640 66 L640 128 L0 134 Z', label: 'Plan sous-cutané (platysma, SCM)', at: [148, 100], opacity: 0.4, small: true });
        S.bone({ path: 'M20 200 Q150 152 268 190', label: 'Clavicule (extrémité médiale)', at: [122, 152] });
        S.bone({ path: 'M332 190 Q480 158 640 184', label: 'Manubrium sternal', at: [512, 148] });
        S.ligament({ path: 'M230 158 L370 154 L368 176 L232 180 Z', label: 'Lig. sterno-claviculaire ant.', at: [352, 132], small: true });
        S.cartilage({ path: 'M282 186 L320 184 L324 238 L278 240 Z', label: 'Disque articulaire', at: [300, 262], ldy: 0, small: true, lead: [300, 240] });
        S.vein({ x: 300, y: 306, rx: 40, ry: 20, label: 'V. brachio-céphalique et vaisseaux sous-claviers', lx: 300, ly: 352, small: true, lead: [300, 328] });
        S.label({ x: 300, y: 376, text: '≈ 1 cm en arrière de l\'interligne — non compressibles', cls: 'lbl-target', small: true });
        S.label({ x: 118, y: 250, text: 'Fente articulaire', cls: 'lbl-target', small: true, lead: [274, 200] });
      },
    },
    {
      id: 'scc-chondro', section: 'technique', titre: 'Jonction chondro-costale (Tietze) — infiltration péri-chondrale tangentielle',
      legende: 'Coupe longitudinale dans l\'axe de la côte : l\'os donne une ombre franche, le cartilage est transsonore et laisse voir la plèvre derrière lui. Le manchon hypoéchogène péri-chondral signe le Tietze. L\'aiguille progresse presque parallèle à la peau, le long du périchondre — jamais perpendiculaire au cartilage. Dépôt de 0,5–1 mL au contact du périchondre épaissi.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Latéral (côte osseuse)', right: 'Médial (sternum)' }).probeInfo({ plan: 'Longitudinale, dans l\'axe de la côte', type: 'in-plane' });
        S.skin({ thickness: 6, fatBelow: 16 });
        S.muscle({ path: 'M0 62 L640 62 L640 94 L0 98 Z', label: 'Grand pectoral', at: [90, 84], opacity: 0.45, small: true });
        S.region({ path: 'M206 96 Q326 70 446 96 L448 120 L204 120 Z', fill: '#5d6a76', opacity: 0.6, label: 'Tuméfaction péri-chondrale', at: [488, 84], small: true, lead: [430, 94] });
        S.cartilage({ path: 'M182 118 L470 116 L472 164 L184 166 Z', label: 'Cartilage costal', at: [326, 146] });
        S.bone({ path: 'M0 124 L180 120', label: 'Côte osseuse', at: [84, 156] });
        S.bone({ path: 'M472 118 L640 122', label: 'Sternum', at: [568, 156] });
        S.pleura({ points: [[186, 268], [326, 278], [464, 268]], label: 'Plèvre — visible à travers le cartilage', at: [326, 302], small: true });
        S.lung({ path: 'M206 288 L446 288 L452 420 L200 420 Z', label: 'Poumon', at: [326, 350], small: true });
        S.target({ x: 304, y: 110, r: 13 });
        S.needle({ from: [8, 78], to: [298, 110], label: '25 G — tangentielle, jamais perpendiculaire' });
        S.spread({ x: 318, y: 110, rx: 74, ry: 6, label: '0,5–1 mL' });
      },
    },
  ],

  checklist: [
    'Origine cardiaque, pleuro-pulmonaire, aortique et digestive formellement écartée avant de conclure à une douleur pariétale',
    'Arthrite septique éliminée devant toute tuméfaction sterno-claviculaire inflammatoire (fièvre, toxicomanie IV, diabète, immunodépression) — sinon ponction bactériologique et non infiltration',
    'Point douloureux marqué au feutre et concordance doigt du patient / palpation sous sonde / image vérifiée',
    'Comparaison au côté sain faite avant de conclure à un épaississement ou un pincement',
    'Doppler couleur avant toute ponction sterno-claviculaire ; profondeur d\'écran gardant plèvre ou vaisseaux dans le champ',
    'Seringue de 2 mL maximum ; volume total ≤ 1 mL',
    'Glissement pleural vérifié avant et après tout geste chondro-costal, noté dans le compte rendu',
    'Test anesthésique à 15–20 min réalisé et tracé (manœuvre douloureuse reproduite)',
    'Patient informé de la poussée douloureuse possible à 24–48 h et du risque d\'atrophie cutanée',
  ],
});
