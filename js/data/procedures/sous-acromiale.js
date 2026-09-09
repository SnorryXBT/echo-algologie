/* Fiche : infiltration de la bourse sous-acromio-deltoïdienne échoguidée. */
ECHO.register({
  id: 'sous-acromiale',
  titre: 'Bourse sous-acromio-deltoïdienne — infiltration échoguidée',
  titreCourt: 'Bourse sous-acromiale',
  en: 'Ultrasound-guided subacromial–subdeltoid (SASD) bursa injection for subacromial pain syndrome and rotator cuff tendinopathy',
  region: 'membre-sup',
  types: ['infiltration'],
  niveau: 1,
  grade: 'Modérée — précision de l\'échoguidage démontrée ; effet du corticoïde réel mais de courte durée (méta-analyses)',
  maj: '2026-09',
  motsCles: ['épaule', 'conflit sous-acromial', 'subacromial pain syndrome', 'tendinopathie de la coiffe', 'bursite', 'SASD', 'supra-épineux', 'Crass', 'Middleton', 'acide hyaluronique', 'capsulite'],
  resume: 'Le geste le plus courant de l\'épaule douloureuse et le plus facile à rater en aveugle : la bourse sous-acromio-deltoïdienne est un espace virtuel de moins de 2 mm. Sous échographie elle se reconnaît à sa fine lame hypoéchogène bordée de deux liserés graisseux hyperéchogènes, entre le deltoïde et le tendon supra-épineux ; l\'aiguille y entre dans le plan, de latéral en médial, et le critère de fin est visuel : distension de la bourse en fuseau qui décolle le deltoïde du tendon. Le corticoïde soulage à court terme (quelques semaines) le syndrome douloureux sous-acromial ; il ne modifie pas l\'histoire naturelle et ne dispense pas de la rééducation. Règle absolue : jamais de corticoïde intratendineux.',

  flash: {
    position: 'assis', positionNote: 'main du côté traité posée sur la cuisse homolatérale (coude fléchi, rotation neutre) ; position de Crass modifiée (main sur la fesse, coude en arrière) pour dégager le supra-épineux de sous l\'acromion',
    sonde: 'lineaire', sondeNote: '6–15 MHz, profondeur 3–4 cm, focale sur l\'interface deltoïde–tendon (1,5–2,5 cm)',
    approche: 'in-plane', approcheNote: 'latéro-médiale, sonde dans l\'axe long du supra-épineux (coronal oblique) ; entrée par le bord latéral de la sonde, sous l\'auvent acromial',
    aiguille: '22–25 G, 40–50 mm ; 21 G si l\'on veut d\'abord aspirer un épanchement bursal',
    cible: 'Lame bursale entre le liseré graisseux péri-bursal superficiel et le tendon — critère de fin : distension anéchogène en **fuseau** qui décolle le deltoïde du supra-épineux sur plusieurs centimètres',
    injectat: 'Méthylprednisolone 40 mg (ou bétaméthasone 1 mL) + 3–5 mL de lidocaïne 1 % ou de ropivacaïne 0,2 %',
    duree: '5–10 min',
  },

  indications: [
    'Syndrome douloureux sous-acromial (« conflit ») symptomatique après 4–6 semaines de rééducation bien conduite : douleur nocturne, arc douloureux, tests de conflit positifs.',
    'Tendinopathie non rompue de la coiffe des rotateurs, avec ou sans bursite réactionnelle échographiquement visible (épaississement bursal > 2 mm, épanchement).',
    'Bursite sous-acromio-deltoïdienne isolée, y compris dans les rhumatismes inflammatoires (PR, spondyloarthrite) et la pseudo-polyarthrite rhizomélique où elle est quasi constante.',
    'Rupture transfixiante non opérable ou en attente de chirurgie : geste antalgique, sans ambition de cicatrisation.',
    'Capsulite rétractile **en association** : l\'infiltration gléno-humérale ou le bloc suprascapulaire restent la cible principale, la voie sous-acromiale ne traite que la composante bursale surajoutée (bursite fréquente en phase 1).',
    'Tendinopathie calcifiante en phase hyperalgique : geste d\'attente ou complément du barbotage (fiche dédiée).',
    'Diagnostique : un test à l\'anesthésique local seul qui lève l\'arc douloureux oriente vers une origine sous-acromiale plutôt que cervicale ou capsulaire.',
  ],
  contreIndications: [
    'Absolues : infection cutanée ou des parties molles au point de ponction, arthrite septique ou bursite septique suspectée, allergie vraie au produit injecté, refus.',
    'Relatives corticoïde : diabète déséquilibré (prévenir de l\'hyperglycémie 24–72 h et faire contrôler la glycémie capillaire), chirurgie de coiffe programmée à court terme, plus de 3 infiltrations sur le même site dans l\'année, corticothérapie systémique en cours.',
    'Risque hémorragique : geste **superficiel et compressible**, classé à **faible risque** dans les recommandations ASRA-ESRA 2018 sur les procédures interventionnelles douleur — pas d\'arrêt systématique des antiagrégants ni des anticoagulants ; discuter au cas par cas si INR très supra-thérapeutique ou thrombopénie profonde.',
    'Prudence sur épaule à rupture massive et ascension de la tête humérale : l\'espace sous-acromial est laminé, le repérage est plus difficile et la valeur ajoutée moindre.',
  ],
  alternatives: 'Rééducation excentrique et travail des recentrages actifs : c\'est le traitement de fond, l\'infiltration ne fait qu\'ouvrir une fenêtre de mobilisation moins douloureuse. Acide hyaluronique intra-bursal quand le corticoïde est contre-indiqué ou déjà répété (littérature moins solide, hors AMM sur ce site en France). Bloc du nerf suprascapulaire (fiche dédiée) si l\'on veut éviter tout corticoïde local ou si la douleur est diffuse et nocturne. Infiltration gléno-humérale si la limitation passive domine (capsulite). Barbotage si calcification symptomatique. Chirurgie (acromioplastie) : le bénéfice sur la douleur par rapport à une intervention factice est faible dans les ECR récents — ce n\'est pas la suite logique d\'une infiltration qui échoue.',

  anatomie: `La bourse sous-acromio-deltoïdienne (SASD) est une **bourse unique** dans la grande majorité des cas : sa portion sous-acromiale se prolonge sans discontinuité en portion sous-deltoïdienne, et déborde latéralement au-delà de la grande tubérosité. C\'est ce débordement latéral qui rend le geste facile : on n\'a pas besoin d\'aller « sous l\'acromion » pour être dans la bourse.

Elle est **virtuelle** à l\'état normal : deux feuillets accolés, séparés par un film synovial. En échographie, elle se traduit par une **lame hypoéchogène de moins de 2 mm**, encadrée de deux liserés hyperéchogènes correspondant à la **graisse péri-bursale**. C\'est ce sandwich clair–sombre–clair, et non la lame elle-même, qui signe la bourse.

Sous elle, le **tendon du supra-épineux** (puis, plus en arrière, l\'infra-épineux) glisse sur la tête humérale et s\'insère sur la facette supérieure de la grande tubérosité ; en avant, le tendon du subscapulaire et l\'intervalle des rotateurs. Au-dessus, le **deltoïde**, et en dedans l\'**auvent acromio-coracoïdien** (acromion, ligament coraco-acromial).

### Ce qui compte pour le geste
- La bourse n\'est **pas** dans l\'articulation : sauf rupture transfixiante, il n\'y a pas de communication avec la gléno-humérale. Un geste sous-acromial n\'infiltre pas l\'articulation, et inversement — d\'où l\'intérêt diagnostique de cibler l\'un ou l\'autre.
- Elle est **superficielle** : 1,5 à 2,5 cm sous la peau chez la plupart des patients, davantage chez le sujet obèse ou très musclé. Une aiguille de 40–50 mm suffit presque toujours.
- Le **liseré graisseux péri-bursal** est le vrai repère. Si l\'on ne voit pas deux liserés, on n\'est pas certain d\'être sur la bourse : glisser latéralement, là où elle déborde la tubérosité et où elle est souvent la plus épaisse.
- La bourse déborde **latéralement et en avant** ; c\'est là que se collecte un épanchement chez le patient assis. Un épanchement de plus de 2 mm en coupe transversale au-dessus de la grande tubérosité est considéré comme pathologique.
- Le **tendon** ne doit jamais recevoir le corticoïde : sa structure fibrillaire dense oppose une résistance nette à l\'injection — la résistance est un signal d\'alerte, pas un obstacle à forcer.
- Axe de ponction tangentiel et plèvre lointaine : aucun risque pleural, contrairement aux gestes de la fosse supra-épineuse.`,

  installation: {
    patient: `**Assis** sur le bord du lit ou sur un tabouret à dossier, dos droit, opérateur derrière ou latéralement. Deux positions du bras :

- **Neutre** : main posée à plat sur la cuisse homolatérale, coude fléchi à 90°, épaule en rotation neutre. C\'est la position d\'exploration de première intention et elle suffit pour la bourse.
- **Crass modifiée (position de Middleton)** : main du patient posée dans le creux lombaire ou sur la fesse homolatérale, coude fléchi et tiré vers l\'arrière. L\'extension-rotation interne fait sortir le supra-épineux de sous l\'auvent acromial et déroule le tendon sur la tête humérale : c\'est la position d\'analyse du tendon et celle qui expose le mieux la bourse dans son débordement antéro-latéral. Position de Crass « pure » (main sur l\'omoplate opposée, dos de la main sur le rachis) souvent mal tolérée sur une épaule douloureuse ou raide.

Patient anxieux ou sujet au malaise vagal : **décubitus latéral**, côté à traiter vers le haut.`,
    operateur: `Écran **en face de l\'opérateur**, dans l\'axe du regard, au-delà de l\'épaule du patient. Main non dominante tenant la sonde, appuyée sur le moignon de l\'épaule pour stabiliser malgré les mouvements respiratoires. La ponction se fait de **latéral en médial**, l\'aiguille entrant à 1 cm du bord latéral de la sonde ; le trajet reste alors parallèle au tendon et tangentiel à la bourse — l\'inverse (médio-latéral, sous l\'acromion) impose un angle plus vertical, une aiguille moins visible et un risque plus élevé de traverser le tendon.

Marquer le bord latéral de l\'acromion avant la désinfection : repère de secours si la fenêtre se déplace.`,
    sonde: `- Linéaire 6–15 MHz, preset MSK, **profondeur 3–4 cm**, focale sur l\'interface deltoïde–tendon (1,5–2,5 cm).
- Gain réglé pour que le tendon apparaisse **gris clair fibrillaire** et la lame bursale nettement plus sombre : un gain trop élevé efface la bourse.
- Attention à l\'**anisotropie** : le tendon de la coiffe s\'assombrit dès que le faisceau n\'est plus perpendiculaire aux fibres et simule une lésion ou un épanchement. Basculer la sonde (« toggle ») pour distinguer un vrai épanchement (persiste, se déplace à la pression) d\'un artefact (disparaît quand le faisceau redevient perpendiculaire).
- Doppler couleur : non indispensable ici, mais utile pour objectiver une hypervascularisation bursale ou péri-tendineuse (bursite active) et pour documenter le geste.
- Compression douce : une pression excessive chasse l\'épanchement bursal et fait disparaître la cible.`,
  },

  reperage: [
    { titre: 'Grande tubérosité en coupe transversale', texte: 'Sonde **transversale** sur la face antéro-externe de l\'épaule, bras en position neutre : repérer la **gouttière bicipitale** (échancrure en V du cortex, tendon du long biceps en son fond) — c\'est le repère fixe qui oriente tout le reste. En dehors, le cortex de la **grande tubérosité** ; en dedans, la petite tubérosité et le subscapulaire.' },
    { titre: 'Basculer dans l\'axe long du supra-épineux', texte: 'Depuis la gouttière, tourner la sonde d\'environ 90° pour se placer dans l\'**axe long du supra-épineux** (plan coronal oblique, dirigé vers l\'oreille controlatérale). Passer le bras en **Crass modifiée** : le tendon apparaît en « bec de perroquet », convexe, s\'insérant sur la facette supérieure de la grande tubérosité, avec l\'acromion et son cône d\'ombre à l\'extrémité médiale de l\'image.' },
    { titre: 'Identifier le sandwich bursal', texte: 'Entre le **deltoïde** (strié, gris moyen) et la surface du tendon, chercher le triplet : liseré hyperéchogène (graisse péri-bursale superficielle) — **lame hypoéchogène fine** (bourse) — liseré hyperéchogène (graisse péri-bursale profonde). Épaisseur normale < 2 mm. C\'est la cible.' },
    { titre: 'Balayage latéral et antérieur', texte: 'Translater la sonde vers le **dehors et l\'avant**, au-delà de la grande tubérosité : la bourse y déborde, s\'y épaissit souvent et c\'est le point d\'abord le plus sûr, hors de l\'ombre acromiale. Chercher un épanchement déclive, la zone la plus épaisse devient le point d\'entrée.' },
    { titre: 'Manœuvre dynamique', texte: 'Abduction active lente, sonde en coronal sur le bord latéral de l\'acromion : normalement tendon et bourse coulissent sans accrochage. Un **bourrelet bursal qui se plisse et bute** sous l\'auvent objective le conflit et localise la zone à infiltrer.' },
    { titre: 'Si l\'on ne trouve pas la bourse', texte: 'Ne pas piquer « à l\'estime ». Trois manœuvres : (1) diminuer la pression de la sonde, (2) augmenter la fréquence et remonter la focale — la bourse est plus superficielle qu\'on ne croit, (3) passer en coupe **transversale** sur la grande tubérosité, où la bourse forme un croissant plus lisible. En dernier recours, l\'hydrolocalisation (0,5 mL de sérum) tranche : le liquide s\'étale en nappe dans la bourse, il forme une boule qui reste sur place dans le deltoïde.' },
  ],

  sonoanatomie: [
    { structure: 'Deltoïde', aspect: 'Muscle superficiel strié, hypoéchogène, cloisons hyperéchogènes obliques', repere: 'Première couche sous le pannicule adipeux' },
    { structure: 'Graisse péri-bursale', aspect: 'Deux fins liserés hyperéchogènes parallèles encadrant la bourse', repere: 'Le vrai repère : sans le sandwich, pas de certitude bursale' },
    { structure: 'Bourse sous-acromio-deltoïdienne', aspect: 'Lame hypo- ou anéchogène < 2 mm, compressible, mobile à la pression', repere: 'Entre les deux liserés graisseux, au-dessus du tendon' },
    { structure: 'Tendon du supra-épineux', aspect: 'Bande fibrillaire hyperéchogène convexe en « bec de perroquet », très anisotrope', repere: 'Sous la bourse, de l\'acromion à la grande tubérosité' },
    { structure: 'Cartilage de la tête humérale', aspect: 'Fine bande anéchogène régulière moulant le cortex', repere: 'À ne pas prendre pour un épanchement ; disparaît sur la tubérosité' },
    { structure: 'Grande tubérosité', aspect: 'Ligne corticale hyperéchogène avec cône d\'ombre, angulée', repere: 'Zone d\'insertion ; irrégularités et enthésophytes fréquents' },
    { structure: 'Acromion', aspect: 'Cortex hyperéchogène superficiel avec ombre acoustique franche', repere: 'Bord médial de l\'image ; masque le tendon sous-jacent' },
    { structure: 'Épanchement bursal pathologique', aspect: 'Lame anéchogène > 2 mm, déclive, déplaçable ; épaississement synovial hyperhémique au Doppler si bursite active', repere: 'Recherché en dehors et en avant de la tubérosité, patient assis' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** la désinfection, marquage du point d\'entrée. Détersion-désinfection large, gel stérile ou housse de sonde, gants stériles. Seringue de 5–10 mL montée sur aiguille 22–25 G de 40–50 mm ; l\'usage d\'un prolongateur libère la main pour la sonde et évite les mouvements parasites de l\'aiguille au moment de pousser le piston.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 25 G. Avec une 21–22 G ou chez un patient anxieux : 0,5–1 mL de lidocaïne 1 % en bouton dermique, à 1 cm du bord latéral de la sonde. Ne pas infiltrer massivement le trajet : l\'anesthésique disperse les repères et floute l\'image.' },
    { titre: 'Ponction dans le plan, de latéral en médial', texte: 'Aiguille introduite au ras de la peau, **angle 15–30°**, biseau vers le haut, alignée sur le grand axe de la sonde. Suivre le corps de l\'aiguille en permanence — si on perd l\'aiguille, on arrête d\'avancer et on repositionne la sonde, jamais l\'inverse. Traverser le deltoïde jusqu\'à sentir le ressaut souple du fascia bursal ; la pointe doit se trouver **entre le liseré graisseux superficiel et la surface du tendon**.' },
    { titre: 'Test d\'hydrolocalisation', texte: 'Aspirer (pas de reflux sanguin), puis injecter **0,3–0,5 mL** en observant. Résultat attendu : une nappe anéchogène qui se propage instantanément le long de la bourse, en fuseau, décollant le deltoïde du tendon sur 2–3 cm. Si le liquide forme une **boule qui reste sur place** = intra-deltoïdien, avancer de 2–3 mm. Si la **résistance est forte** et que rien ne se voit = intratendineux, retirer immédiatement de 2–3 mm.' },
    { titre: 'Injection fractionnée', texte: 'Injecter le reste en 2–3 fois, sans forcer, en surveillant la propagation. Le volume total usuel est de **4–6 mL** ; augmenter jusqu\'à 8–10 mL n\'est utile que si l\'on cherche une distension antalgique. Le patient doit ressentir une tension, non une douleur brutale.' },
    { titre: 'Critère de fin', texte: 'Distension bursale **en fuseau** visible sur toute la largeur de l\'écran, deltoïde nettement décollé du tendon, aucune image d\'injection intratendineuse (le tendon reste homogène, sans plage anéchogène intra-fibrillaire) et aucun gonflement du deltoïde. Retirer l\'aiguille sous contrôle visuel, comprimer 30 s, pansement.' },
    { titre: 'Après le geste', texte: 'Surveillance 10–15 min. Tester l\'arc douloureux : sa disparition en 5–10 min (effet de l\'AL) confirme la cible — la noter. Consignes écrites : repos relatif 48 h **sans immobilisation**, pas de charge lourde ni de travail bras au-dessus de la tête 1 à 2 semaines, rééducation reprise à J2–J3. Prévenir du flare possible à 24–48 h et de l\'hyperglycémie chez le diabétique.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration standard | Méthylprednisolone acétate 40 mg (Dépo-Médrol®) **ou** bétaméthasone 1 mL (Diprostène®, Célestène® chronodose) + lidocaïne 1 % ou ropivacaïne 0,2 % | 4–6 mL au total | Schéma le plus répandu. Le mélange AL + corticoïde donne l\'analgésie immédiate qui sert de test diagnostique et facilite la reprise de la rééducation |
| Test purement diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 % seule | 5–8 mL | Aucun corticoïde : on juge sur la levée de l\'arc douloureux à 10 min. Utile avant chirurgie ou en cas de doute cervical / capsulaire |
| Corticoïde contre-indiqué ou déjà répété | Acide hyaluronique intra-bursal | 2 mL selon la présentation | Données de moindre niveau que le corticoïde, pas d\'AMM sur ce site en France ; option de recours, à assumer comme telle |
| Distension antalgique associée | Corticoïde + AL + sérum physiologique | 8–10 mL | Uniquement si l\'on cherche un effet de volume ; sans supériorité démontrée sur le volume standard |

**Choix du corticoïde.** Site non artériel terminal : un corticoïde **particulaire** (méthylprednisolone acétate, bétaméthasone) est licite et reste le standard péri-tendineux. Éviter la **triamcinolone hexacétonide (Hexatrione®)**, réservée à l\'intra-articulaire. La dexaméthasone (non particulaire) est une option chez le diabétique ou en cas d\'atrophie cutanée antérieure, au prix d\'une durée d\'action plus courte.

**Doses maximales d\'AL** pour mémoire, jamais approchées ici mais à additionner si plusieurs gestes dans la même séance : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg.

**Rythme.** Ne pas dépasser 3 infiltrations de corticoïde par an sur le même site, espacées d\'au moins 3 mois, et ne pas répéter un geste qui n\'a rien donné : une deuxième infiltration après un échec complet de la première n\'a pas de rationnel. Différer une infiltration chez un patient dont la réparation de coiffe est programmée à brève échéance.`,

  variantes: [
    { titre: 'Voie postérieure', texte: 'Sonde transversale sous le bord postéro-latéral de l\'acromion, aiguille dans le plan de latéral en médial, sous le deltoïde postérieur et au-dessus de l\'infra-épineux. Utile quand la face antéro-latérale est inflammatoire ou déjà ponctionnée, et chez le patient qui ne supporte pas la rotation interne.' },
    { titre: 'Coupe transversale plutôt que longitudinale', texte: 'Sonde transversale sur la grande tubérosité, aiguille dans le plan de latéral en médial : la bourse forme un croissant qui coiffe le tendon et est parfois plus lisible qu\'en coupe longitudinale, notamment chez le patient épais. Même critère de fin.' },
    { titre: 'Aspiration bursale', texte: 'Devant un épanchement abondant, aspirer avant d\'injecter avec une 21 G soulage et permet l\'analyse (cytologie, cristaux, bactériologie) si un doute septique ou microcristallin existe. Devant toute suspicion de bursite septique : ponction pour documentation bactériologique, **pas de corticoïde**.' },
    { titre: 'Geste combiné', texte: 'Sur une épaule mixte (bursite + capsulite débutante), on peut associer dans la même séance une infiltration sous-acromiale et un bloc du nerf suprascapulaire (fiche dédiée) ou une infiltration gléno-humérale, en plafonnant la **dose totale de corticoïde** sur la séance. Tracer les deux sites et les deux doses : c\'est ce qui rend l\'évaluation ultérieure interprétable et le dossier défendable.' },
    { titre: 'Barbotage associé', texte: 'Dans la tendinopathie calcifiante, la ponction-lavage de la calcification est complétée en fin de geste par une infiltration sous-acromiale de corticoïde, précisément pour prévenir la bursite réactionnelle post-lavage (fiche `calcifications-coiffe-barbotage`).' },
  ],

  pearls: [
    'Chercher le **sandwich** graisse–bourse–graisse, pas la bourse seule : c\'est lui qui donne la certitude d\'être au bon endroit.',
    'Aborder la bourse **là où elle déborde la tubérosité**, en dehors et en avant : hors ombre acromiale, plus épaisse, angle d\'aiguille plus plat.',
    'Le test d\'hydrolocalisation à 0,3 mL coûte 5 secondes et évite la totalité des injections ratées : nappe en fuseau = bourse ; boule immobile = muscle ; résistance = tendon.',
    'Diminuer la pression de la sonde avant de ponctionner : trop appuyer chasse l\'épanchement et supprime la cible.',
    'Faire le test de l\'arc douloureux à 10 min et le noter : c\'est la seule information diagnostique que le geste produit, et elle est perdue si on ne la recueille pas.',
    'Un patient prévenu du flare de 24–48 h ne rappelle pas en urgence à J1 en croyant à une infection.',
  ],
  pieges: [
    'Prendre l\'**anisotropie** du tendon pour un épanchement bursal ou une lésion : basculer la sonde avant de conclure.',
    'Injecter dans le deltoïde faute de repère bursal : indolore, invisible, sans effet — et le patient repart avec un geste « qui n\'a rien fait ».',
    'Forcer contre une résistance : c\'est le tendon. Le corticoïde intratendineux est la faute à ne jamais commettre (nécrose, fragilisation, rupture secondaire).',
    'Piquer en médio-latéral sous l\'acromion : angle vertical, aiguille peu visible, traversée du tendon plus probable.',
    'Répéter une troisième et une quatrième infiltration sur une épaule qui ne répond pas : il faut changer de cible ou de stratégie, pas de dose.',
    'Oublier de reprogrammer la rééducation : l\'infiltration seule ne change pas l\'évolution à moyen terme.',
  ],
  complications: [
    'Douleur post-injection (flare) dans les 24–48 h : fréquente, banale, glace et antalgiques de palier 1 ; prévenir systématiquement.',
    '**Rupture tendineuse secondaire** : risque théorique du corticoïde répété et surtout de l\'injection intratendineuse. Argument fort pour l\'échoguidage et pour limiter le nombre d\'infiltrations.',
    'Atrophie du tissu sous-cutané et dépigmentation au point de ponction : liées au reflux du corticoïde le long du trajet ; purger l\'aiguille au sérum avant le retrait.',
    'Hyperglycémie chez le diabétique, 24 à 72 h : prévenir, faire contrôler la glycémie capillaire, adapter si insulinothérapie.',
    'Infection (bursite ou arthrite septique) : rare mais grave. Fièvre, douleur croissante après 48 h, épanchement d\'aggravation → écho en urgence, ponction pour bactériologie, avis chirurgical. Ne jamais réinjecter de corticoïde sur un doute septique.',
    'Effets systémiques transitoires du corticoïde : flush, insomnie, palpitations, déséquilibre tensionnel ; troubles du cycle menstruel.',
    'Malaise vagal en position assise : décubitus immédiat, jambes surélevées ; prévenir en installant d\'emblée en décubitus latéral les patients à risque.',
  ],
  securite: [
    'Geste **superficiel, compressible, à faible risque hémorragique** (catégorie basse des recommandations ASRA-ESRA 2018) : pas d\'interruption systématique des antiagrégants ni des anticoagulants oraux.',
    'Aspiration avant injection ; injection fractionnée ; arrêt immédiat en cas de douleur fulgurante ou de résistance anormale.',
    'Asepsie chirurgicale : la seule complication vraiment redoutable de ce geste banal est septique.',
    'Ne jamais injecter de corticoïde dans un tendon ni dans une calcification en dehors du protocole de barbotage.',
    'Dose cumulée de corticoïde à tracer sur la séance et sur l\'année, tous sites confondus.',
    'Chez le diabétique : information écrite, autosurveillance glycémique renforcée 72 h.',
  ],

  suivi: `- **J0** : EN avant / à 10 min (effet AL, valeur diagnostique — le noter), arc douloureux, force en abduction, amplitudes actives et passives. Remise des consignes écrites.
- **J15–J30** : EN au repos, la nuit et à l\'effort ; score fonctionnel (Constant simplifié, DASH ou QuickDASH, SPADI) ; observance et progression de la rééducation. C\'est la fenêtre où l\'effet du corticoïde est maximal : si rien n\'a bougé, le diagnostic sous-acromial est à remettre en cause (capsulite, cervicalgie projetée, rupture massive, calcification, origine acromio-claviculaire).
- **3 mois** : effet du corticoïde attendu **éteint**. Le résultat à 3 mois reflète surtout la rééducation. Réévaluer l\'imagerie si la douleur récidive rapidement.
- **Quand répéter** : réponse franche mais fugace (< 6 semaines) et rééducation en cours → une deuxième infiltration est raisonnable, pas avant 3 mois. Réponse nulle → ne pas répéter, changer de cible.
- **Quand escalader** : échec de deux gestes bien ciblés, ou rupture transfixiante symptomatique chez un patient jeune → avis chirurgical. Douleur nocturne persistante sans conflit démontré → bloc suprascapulaire, reprise du bilan (rachis cervical, épaule inflammatoire, calcification).`,

  evidence: `- **Précision de l\'échoguidage** : les travaux comparant infiltration sous-acromiale guidée et infiltration en aveugle, sur cadavre puis chez le patient, montrent de façon constante une **précision supérieure sous échographie** ; l\'injection en aveugle atteint une structure autre que la bourse dans une proportion importante des cas (le tissu sous-deltoïdien, le muscle ou le tendon). Le corollaire clinique — un meilleur résultat fonctionnel sous échoguidage — est retrouvé dans plusieurs essais mais reste **discuté** : certaines séries ne montrent pas de différence sur la douleur à 6 semaines, l\'effet du corticoïde diffusant partiellement depuis les tissus voisins. Confiance : élevée sur la précision, modérée sur le bénéfice clinique différentiel.
- **Corticoïde vs placebo** : les revues systématiques de l\'infiltration sous-acromiale concluent à un bénéfice **réel mais modeste et transitoire** sur la douleur et la fonction, maximal entre 2 et 8 semaines, non maintenu à 6 mois et un an. C\'est le message à transmettre au patient : on ouvre une fenêtre, on ne guérit pas le tendon.
- **Corticoïde vs rééducation** : les essais comparant infiltration et programme d\'exercices montrent un avantage précoce à l\'infiltration qui s\'efface à moyen terme, avec convergence des courbes vers 3–6 mois, voire un avantage tardif à l\'exercice. Aucune donnée ne soutient l\'infiltration seule sans rééducation.
- **Acide hyaluronique intra-bursal** : littérature de moindre volume et de qualité méthodologique inégale ; résultats globalement favorables mais insuffisants pour en faire un premier choix. Confiance : faible.
- **Trous de la littérature** à assumer : nombre optimal d\'infiltrations, intervalle optimal, dose et type de corticoïde, volume optimal — tout cela relève de l\'habitude et non de la preuve. De même, la valeur diagnostique du test à l\'AL sous-acromial n\'a pas été formellement validée contre un standard.

*Cette fiche a été rédigée sans accès à la recherche en ligne : le fond technique et posologique correspond aux pratiques établies, mais les données chiffrées précises et les métadonnées des références ci-dessous n\'ont pas pu être revérifiées dans cette session. Les entrées marquées « à vérifier » sont à confirmer avant citation.*`,

  references: [
    { auteurs: 'Naredo E, Cabero F, Beneyto P, et al.', titre: 'A randomized comparative study of short term response to blind injection versus sonographic-guided injection of local corticosteroids in patients with painful shoulder', revue: 'J Rheumatol', annee: '2004', type: 'ECR', verif: false, note: 'Essai de référence sur l\'apport de l\'échoguidage dans l\'épaule douloureuse.' },
    { auteurs: 'Mohamadi A, Chan JJ, Claessen FMAP, Ring D, Chen NC', titre: 'Corticosteroid injections give small and transient pain relief in rotator cuff tendinosis: a meta-analysis', revue: 'Clin Orthop Relat Res', annee: '2017', type: 'méta-analyse', verif: false, note: 'Le titre résume la conclusion : effet réel, petit et bref.' },
    { auteurs: 'Buchbinder R, Green S, Youd JM', titre: 'Corticosteroid injections for shoulder pain', revue: 'Cochrane Database of Systematic Reviews', annee: '2003', type: 'revue systématique', verif: false, note: 'Revue Cochrane historique ; bénéfice modeste et de courte durée.' },
    { auteurs: 'Coombes BK, Bisset L, Vicenzino B', titre: 'Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review and meta-analysis of randomised controlled trials', revue: 'Lancet', annee: '2010', type: 'méta-analyse', verif: false, note: 'Transposable à la coiffe : bénéfice à court terme, rechutes au-delà.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Référence commune à toutes les fiches pour la classe de risque hémorragique.' },
    { auteurs: 'Beggs I, Bianchi S, Bueno A, et al.', titre: 'Musculoskeletal ultrasound technical guidelines — shoulder', revue: 'European Society of Musculoskeletal Radiology (ESSR)', annee: '2010', type: 'reco', verif: false, note: 'Protocole de coupes standardisées de l\'épaule (position de Crass / Crass modifiée).' },
    { auteurs: 'Peck E, Lai JK, Pawlina W, Smith J', titre: 'Accuracy of ultrasound-guided versus palpation-guided acromioclavicular joint injections: a cadaveric study', revue: 'PM R', annee: '2010', type: 'étude cadavérique', verif: false, note: 'Cité ici pour le principe méthodologique (précision guidée vs palpation) ; voir la fiche acromio-claviculaire.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'sad-sono', section: 'sonoanatomie', titre: 'Axe long du supra-épineux — repérage de la bourse',
      legende: 'Coupe coronale oblique en position de Crass modifiée. Le repère n\'est pas la bourse elle-même mais le sandwich graisse hyperéchogène – lame hypoéchogène – graisse hyperéchogène, entre le deltoïde et le tendon. L\'acromion et son cône d\'ombre bornent l\'image en dedans ; le tendon s\'insère en dehors sur la grande tubérosité.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coronal oblique (axe long)', type: 'linéaire 6–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 150 Q320 168 0 152 Z', label: 'Deltoïde', at: [455, 108], opacity: 0.5 });
        S.bone({ path: 'M0 150 L70 154 L128 166', label: 'Acromion', at: [54, 136], small: true });
        S.fascia({ points: [[134, 174], [350, 184], [575, 194]], width: 1.8 });
        S.fluid({ path: 'M136 177 L575 197 L575 205 L136 185 Z', label: 'Bourse SAD\n(< 2 mm)', lx: 288, ly: 132, anchor: 'middle', lead: [292, 182], small: true });
        S.fascia({ points: [[136, 186], [350, 196], [575, 206]], width: 1.8 });
        S.tendon({ path: 'M132 187 L572 206 L574 242 L558 288 L516 246 Q448 222 330 226 Q212 234 128 262 Z', label: 'Tendon supra-épineux', at: [300, 208] });
        S.bone({ path: 'M124 280 Q214 252 332 244 Q450 240 520 258 L560 292 L640 340' });
        S.cartilage({ path: 'M150 266 Q244 240 332 226 Q450 222 518 242 L516 252 Q450 232 334 236 Q248 248 156 276 Z', label: 'Cartilage', lx: 168, ly: 340, anchor: 'middle', lead: [216, 250], small: true });
        S.label({ x: 372, y: 340, text: 'Tête humérale', cls: 'lbl-bone', small: true });
        S.label({ x: 556, y: 382, text: 'Grande tubérosité', cls: 'lbl-bone', small: true });
      },
    },
    {
      id: 'sad-geste', section: 'technique', titre: 'Ponction dans le plan, de latéral en médial',
      legende: 'L\'aiguille entre à plat par le bord latéral de la sonde, traverse le deltoïde et s\'arrête entre le liseré graisseux superficiel et la surface du tendon. Le critère de fin est visuel : distension anéchogène en fuseau qui décolle le deltoïde du supra-épineux. Une boule immobile signe le deltoïde, une résistance franche signe le tendon — dans les deux cas on repositionne.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coronal oblique', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.muscle({ path: 'M0 68 L640 68 L640 150 Q320 168 0 152 Z', label: 'Deltoïde', at: [130, 112], opacity: 0.5 });
        S.bone({ path: 'M0 150 L70 154 L128 166', label: 'Acromion', at: [54, 136], small: true });
        S.fascia({ points: [[134, 174], [350, 184], [575, 194]], width: 1.8 });
        S.fluid({ path: 'M136 177 L575 197 L575 205 L136 185 Z' });
        S.fascia({ points: [[136, 186], [350, 196], [575, 206]], width: 1.8 });
        S.tendon({ path: 'M132 187 L572 206 L574 242 L558 288 L516 246 Q448 222 330 226 Q212 234 128 262 Z', label: 'Jamais intratendineux', at: [252, 212] });
        S.bone({ path: 'M124 280 Q214 252 332 244 Q450 240 520 258 L560 292 L640 340' });
        S.cartilage({ path: 'M150 266 Q244 240 332 226 Q450 222 518 242 L516 252 Q450 232 334 236 Q248 248 156 276 Z' });
        S.label({ x: 372, y: 340, text: 'Tête humérale', cls: 'lbl-bone', small: true });
        S.target({ x: 398, y: 191, r: 15 });
        S.needle({ from: [636, 74], to: [404, 190], label: '22–25 G, 40–50 mm — angle 15–30°' });
        S.spreadPath({ path: 'M150 182 Q360 172 564 202 Q360 216 150 192 Z', at: [288, 146], label: '4–6 mL — distension en fuseau' });
      },
    },
  ],

  checklist: [
    'Repérage du sandwich graisse–bourse–graisse fait et point d\'entrée marqué avant désinfection',
    'Test d\'hydrolocalisation 0,3–0,5 mL réalisé et interprété avant d\'injecter la dose',
    'Aucune injection contre résistance (tendon) ni en boule immobile (deltoïde)',
    'EN et arc douloureux notés à 10 min (valeur diagnostique du test à l\'AL)',
    'Dose de corticoïde et site tracés ; nombre d\'infiltrations sur l\'année vérifié (≤ 3, espacées ≥ 3 mois)',
    'Consignes remises : flare possible 24–48 h, pas d\'immobilisation, reprise de la rééducation à J2–J3',
  ],
});
