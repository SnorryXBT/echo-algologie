/* Fiche : nerfs géniculés — blocs diagnostiques, radiofréquence, cryoneurolyse.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références non revérifiées → verif:false. */
ECHO.register({
  id: 'nerfs-genicules',
  titre: `Nerfs géniculés — blocs diagnostiques et radiofréquence échoguidés`,
  titreCourt: `Nerfs géniculés`,
  en: `Ultrasound-guided genicular nerve block and radiofrequency ablation (superomedial, superolateral, inferomedial genicular nerves; extended Fonkoué targets); cooled radiofrequency; pulsed radiofrequency; cryoneurolysis`,
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: `Modérée — ECR de taille limitée pour la RF conventionnelle, meilleure pour la RF refroidie ; cartographie anatomique des cibles révisée depuis 2019`,
  motsCles: ['gonarthrose', 'genou', 'géniculé', 'genicular', 'radiofréquence', 'RF refroidie', 'cooled RF', 'cryoneurolyse', 'PTG', 'prothèse totale de genou', 'dénervation', 'Fonkoué', 'bloc test'],
  maj: '2026-09',
  resume: `La dénervation sensitive géniculée est la réponse de l'algologue au genou arthrosique que l'on n'opérera pas — ou au genou prothétique qui continue de faire mal. Le principe est simple : bloquer les branches articulaires qui rejoignent la capsule le long des artères géniculées, à leur passage sur le périoste, aux jonctions métaphyso-épiphysaires. La technique classique vise trois sites (supéro-médial, supéro-latéral, inféro-médial) ; le site inféro-latéral est écarté à cause du nerf fibulaire commun. Depuis 2019, les travaux anatomiques de Fonkoué et de Tran ont montré que ces trois cibles ne couvrent qu'une partie de l'innervation capsulaire antérieure et que les repères fluoroscopiques historiques sont souvent en dehors du nerf : d'où des cibles élargies et un net avantage à l'échographie, qui montre directement l'artère satellite. La séquence est toujours la même : **bloc test → radiofréquence si la réponse est franche**. Ce qui décide du résultat n'est pas le geste, c'est la sélection du patient.`,

  flash: {
    position: 'dorsal', positionNote: `genou en légère flexion (10–20°) sur un coussin, rotation neutre ; retourner le membre en rotation interne/externe pour aborder successivement les faces médiale et latérale`,
    sonde: 'lineaire', sondeNote: `8–14 MHz, profondeur 3–4 cm ; convexe rarement utile sauf obésité majeure`,
    approche: 'in-plane', approcheNote: `sonde **longitudinale** sur la jonction métaphyso-épiphysaire, aiguille dans le grand axe de la sonde, jusqu'au contact périosté au ras de l'artère géniculée`,
    aiguille: `22 G 50–80 mm pour le bloc ; électrode RF 22 G 100 mm à pointe active 10 mm (RF thermique), 17–18 G pour la RF refroidie`,
    cible: `Périoste de la jonction métaphyso-épiphysaire, **au contact immédiat de l'artère géniculée** repérée en Doppler ; critère de fin = injectat qui s'étale en nappe sur le périoste autour du vaisseau`,
    injectat: `Bloc test : 1–2 mL par site de lidocaïne 2 % ou ropivacaïne 0,5 %. Bloc thérapeutique : + corticoïde réparti sur les sites`,
    duree: `15–20 min bloc 3 sites · 45–60 min RF 3 sites`,
  },

  indications: [
    `**Gonarthrose douloureuse non opérable ou non opérée** : contre-indication opératoire, refus de chirurgie, attente longue, comorbidités. C'est l'indication principale et celle où la preuve est la meilleure.`,
    `**Douleur persistante après prothèse totale de genou**, une fois éliminés descellement, infection, instabilité et malposition (imagerie et avis chirurgical préalables **obligatoires** — la dénervation ne doit jamais masquer une complication mécanique).`,
    `**Relais de l'infiltration intra-articulaire** : patient qui répond franchement mais brièvement au corticoïde intra-articulaire, ou chez qui on veut arrêter la répétition des corticoïdes (McAlindon 2017).`,
    `**Bloc test diagnostique** : confirmer l'origine articulaire de la douleur avant de proposer une RF, et calibrer l'attente du patient.`,
    `Douleur du genou d'origine capsulaire chez le patient en attente de chirurgie, comme mesure d'attente.`,
  ],
  contreIndications: [
    `**Absolues** : infection cutanée aux points de ponction, sepsis, refus, allergie documentée.`,
    `**Absolues fonctionnelles pour la RF** : bloc test négatif (< 50 % de soulagement) — faire une RF sans réponse au bloc, c'est garantir un échec ; infection ou descellement de prothèse non éliminés ; douleur non articulaire (saphène, patte d'oie, hanche, rachis, sensibilisation centrale).`,
    `**Stimulateur cardiaque / défibrillateur implantable** : la RF est possible mais impose une concertation avec le rythmologue, un mode approprié et une surveillance — ce n'est pas un geste à improviser.`,
    `**Relatives** : diabète déséquilibré si corticoïde, anticoagulation, patient qui ne pourra pas rendre compte de sa réponse au bloc (troubles cognitifs) — le bloc test perd alors sa valeur.`,
    `**Hémostase** : procédure de **faible risque hémorragique** (ASRA-ESRA 2018) — sites superficiels et compressibles, hors névraxe ; pas d'arrêt des antiagrégants, anticoagulants au cas par cas. Le Doppler préalable compense largement le risque.`,
  ],
  alternatives: `En amont : exercice supervisé, perte de poids, infiltration intra-articulaire (fiche dédiée). En parallèle ou en complément : **bloc du nerf saphène / de sa branche infrapatellaire** si la douleur est médiale et cutanée plutôt que capsulaire (fiche dédiée) ; **infiltration de la patte d'oie** si la douleur est en regard de la bourse anserine. En aval : arthroplastie. Ce qui distingue la dénervation géniculée des autres options, c'est qu'elle traite la **douleur** sans prétendre traiter l'articulation : à annoncer clairement au patient, qui doit comprendre qu'il gardera son arthrose et devra continuer à s'entretenir musculairement.`,

  anatomie: `L'innervation sensitive de la capsule du genou est **plurifocale**, et c'est tout le problème. La description classique retient trois nerfs abordables :

- **Nerf géniculé supéro-médial (NGSM)** : branche articulaire issue du nerf du vaste médial (contingent fémoral) ; il chemine avec l'**artère géniculée supéro-médiale** et croise le fémur à la **jonction diaphyso-épiphysaire médiale**, au voisinage du tubercule de l'adducteur.
- **Nerf géniculé supéro-latéral (NGSL)** : issu du nerf du vaste latéral ; croise le fémur à la jonction diaphyso-épiphysaire latérale, avec l'**artère géniculée supéro-latérale**.
- **Nerf géniculé inféro-médial (NGIM)** : issu du nerf tibial ; croise le tibia à la **jonction métaphyso-épiphysaire médiale**, sous le ligament collatéral médial, avec l'**artère géniculée inféro-médiale**.

Le **site inféro-latéral n'est pas traité** : la branche y est intriquée avec le **nerf fibulaire commun**, dont la lésion donne un steppage. C'est une règle, pas une préférence.

**La révision anatomique de 2019 change la carte.** Les travaux de **Fonkoué (2019)** et de **Tran (2018)** ont montré deux choses : (1) les repères fluoroscopiques historiques — l'intersection de la corticale diaphysaire et de l'épicondyle sur l'incidence de face — placent souvent l'aiguille **en dehors** du trajet nerveux, plus distalement et plus postérieurement que le nerf ; (2) la capsule antérieure reçoit, en plus des trois géniculés classiques, des branches du **nerf du vaste médial**, du **nerf du vaste intermédiaire**, du **nerf du vaste latéral**, la **branche infrapatellaire du nerf saphène** et une **branche récurrente du nerf fibulaire**. D'où des protocoles à cibles élargies (jusqu'à 5–6 sites) qui restent, à ce jour, **moins bien évalués cliniquement** que le schéma à 3 sites — c'est un arbitrage à assumer.

### Ce qui compte pour le geste
- **L'artère est le nerf.** Le nerf géniculé n'est presque jamais individualisé en échographie ; on cible l'**artère satellite en Doppler**, au contact du périoste. C'est l'avantage décisif de l'échographie sur la fluoroscopie, qui ne voit ni l'un ni l'autre.
- Les cibles sont **périostées** : on avance jusqu'au contact osseux, puis on recule de 1–2 mm. Une pointe qui flotte dans le muscle donne un bloc inefficace ; une pointe plantée dans le périoste donne un geste douloureux.
- **Profondeur habituelle** : 1,5 à 3 cm sur les sites fémoraux, 1 à 2 cm sur le site tibial (superficiel, sous le LCM).
- Sur le site **inféro-médial**, le nerf saphène et sa branche infrapatellaire sont dans la zone : une diffusion excessive peut donner une hypoesthésie médiale que le patient signalera. Petits volumes.
- Sur les sites **supérieurs**, une diffusion importante peut atteindre les branches motrices des vastes : faiblesse transitoire du quadriceps, à prévenir (risque de chute).`,

  installation: {
    patient: `**Décubitus dorsal**, genou en **légère flexion (10–20°)** sur un coussin fin — la flexion détend le quadriceps et rapproche les jonctions de la surface. Pour la face médiale : rotation externe de hanche modérée, genou en abduction (position dite « en grenouille » atténuée). Pour la face latérale : rotation interne, ou opérateur qui passe de l'autre côté de la table.

Repérer et marquer au feutre l'**interligne articulaire**, l'**épicondyle médial**, l'**épicondyle latéral** et le **tubercule de l'adducteur** avant la désinfection : quand les trois sites s'enchaînent, ces marques évitent de se perdre.

Voie veineuse et monitorage pour la RF (durée, douleur du geste, sédation légère éventuelle) ; simple surveillance pour un bloc test.`,
    operateur: `Opérateur du côté abordé, écran en face, de l'autre côté de la table. La sonde est **longitudinale, dans l'axe du fémur ou du tibia**, centrée sur la jonction ; l'aiguille entre **dans le grand axe de la sonde**, par son extrémité distale ou proximale selon l'accès le plus dégagé. Ordre pratique conseillé : supéro-médial, puis inféro-médial (on reste sur la face médiale), puis supéro-latéral après avoir changé de côté ou tourné le membre — on limite ainsi les repositionnements.

Pour la RF, prévoir la place du câble et de la plaque neutre (posée sur la cuisse controlatérale ou la fesse, à distance de toute prothèse métallique).`,
    sonde: `- Linéaire 8–14 MHz, preset MSK, **profondeur 3–4 cm**, focale à 1,5–2,5 cm.
- **Doppler couleur à basse PRF (échelle vitesse basse, 5–10 cm/s)** : les artères géniculées sont de petit calibre et à flux lent ; avec un réglage cardiaque on ne voit rien. C'est le réglage le plus important de la fiche.
- Gain modéré : la corticale doit être blanche et nette, le périoste identifiable.
- Aiguille écho-visible ; l'angle d'insonation est plat sur les sites tibiaux, plus raide sur les sites fémoraux chez le patient épais.
- Pour la RF, vérifier le bon fonctionnement de la stimulation sensitive (50 Hz) et motrice (2 Hz) **avant** la ponction.`,
  },

  reperage: [
    { titre: `Site supéro-médial — trouver la jonction`, texte: `Sonde **longitudinale** sur la face médiale de la cuisse, dans l'axe du fémur, au-dessus de l'épicondyle médial. On voit la **corticale diaphysaire** comme une ligne droite hyperéchogène ; en glissant en distal, la ligne s'incurve et s'élargit : c'est la **jonction diaphyso-épiphysaire**, le point de rupture de pente. Le vaste médial est en avant, l'expansion tendineuse du grand adducteur en arrière.` },
    { titre: `Doppler : l'artère signe le site`, texte: `Activer le Doppler à basse échelle sur la jonction : l'**artère géniculée supéro-médiale** apparaît comme un petit signal pulsatile **collé au périoste**, à la rupture de pente. Le nerf lui est adjacent, rarement visible. Si l'artère n'apparaît pas, glisser de quelques millimètres en avant et en arrière et diminuer encore la PRF — ne pas ponctionner « au repère » sans avoir vu le vaisseau.` },
    { titre: `Site inféro-médial`, texte: `Descendre sous l'interligne, sonde longitudinale sur la face médiale du tibia. Repérer le **ligament collatéral médial** (bande fibrillaire superficielle) et, **en dessous de lui**, la corticale tibiale ; la jonction métaphyso-épiphysaire est la rupture de pente. L'**artère géniculée inféro-médiale** y court sur le périoste. Le site est très superficiel (1–2 cm).` },
    { titre: `Site supéro-latéral`, texte: `Face latérale de la cuisse, sonde longitudinale au-dessus de l'épicondyle latéral, vaste latéral en avant. Même séquence : rupture de pente, puis Doppler pour l'**artère géniculée supéro-latérale**. Site souvent un peu plus profond que son homologue médial.` },
    { titre: `Cibles étendues (protocole élargi)`, texte: `Si l'on suit la cartographie révisée : ajouter le **nerf du vaste médial** (canal des adducteurs, sous le sartorius, latéral à l'artère fémorale), le **nerf du vaste latéral** (le long de la face antéro-latérale du fémur) et la **branche infrapatellaire du saphène** (au bord médial du sartorius, au niveau du condyle médial). Ces cibles augmentent la couverture théorique ; leur bénéfice clinique **n'est pas démontré** par un essai comparatif — à réserver aux échecs d'un schéma classique bien conduit.` },
    { titre: `Si l'on ne trouve pas l'artère`, texte: `Trois causes, dans l'ordre : PRF Doppler trop élevée ; sonde trop en avant ou trop en arrière sur la circonférence de l'os ; niveau trop distal (on est sur l'épiphyse, pas sur la jonction). Reprendre en glissant lentement de proximal en distal en gardant le Doppler allumé — l'artère « passe » sous la sonde et se voit une fraction de seconde.` },
  ],

  sonoanatomie: [
    { structure: `Corticale diaphysaire (fémur / tibia)`, aspect: `Ligne hyperéchogène rectiligne, cône d'ombre franc`, repere: `Point de départ du balayage` },
    { structure: `Jonction métaphyso-épiphysaire`, aspect: `**Rupture de pente** de la ligne corticale, qui s'incurve et s'élargit`, repere: `Le repère osseux de la cible` },
    { structure: `Artère géniculée (supéro-médiale / supéro-latérale / inféro-médiale)`, aspect: `Petit signal Doppler pulsatile de 1–2 mm, **collé au périoste**, à basse échelle de vitesse`, repere: `La cible réelle — le nerf lui est accolé` },
    { structure: `Nerf géniculé`, aspect: `Rarement individualisé ; parfois point hyperéchogène de 1 mm au contact de l'artère`, repere: `Ne pas attendre de le voir pour agir` },
    { structure: `Vaste médial / vaste latéral`, aspect: `Muscle strié, hypoéchogène, superficiel aux sites fémoraux`, repere: `Traversé par l'aiguille` },
    { structure: `Ligament collatéral médial`, aspect: `Bande fibrillaire hyperéchogène superficielle, bi-couche`, repere: `Le site inféro-médial est **sous** lui` },
    { structure: `Nerf saphène / branche infrapatellaire`, aspect: `Petit faisceau au bord médial du sartorius, au niveau du condyle médial`, repere: `À proximité du site inféro-médial — limiter les volumes` },
    { structure: `Nerf fibulaire commun`, aspect: `Faisceau ovalaire fasciculé au col de la fibula`, repere: `Raison pour laquelle le site **inféro-latéral n'est pas traité**` },
  ],

  technique: [
    { titre: `Préparation`, texte: `Checklist en fin de fiche. Désinfection large des trois sites en une fois (face médiale, face latérale, jambe proximale) : on ne redésinfecte pas entre les sites. Champ large, gel stérile ou housse. Seringues étiquetées : une de lidocaïne 1 % pour l'anesthésie cutanée, une de 5–6 mL d'injectat pour les 3 sites. Plaque neutre posée et vérifiée si RF.` },
    { titre: `Anesthésie cutanée`, texte: `0,5–1 mL de lidocaïne 1 % par point d'entrée. Systématique en RF (électrodes de plus gros calibre, geste long) ; recommandée même pour le bloc test — un patient qui a mal au premier site ne coopère plus aux deux suivants.` },
    { titre: `Ponction in-plane jusqu'au contact périosté`, texte: `Aiguille 22 G dans l'axe de la sonde, visualisée sur toute sa longueur, dirigée vers la rupture de pente **au ras du signal Doppler**. Avancer jusqu'au **contact osseux** (le patient perçoit une pression sourde), puis **reculer de 1–2 mm**. Ne jamais transfixier l'artère : on l'aborde tangentiellement, en venant se poser à côté d'elle sur le périoste.` },
    { titre: `Test et injection`, texte: `Aspiration douce (le retour de sang impose de repositionner). Injecter **0,3–0,5 mL** en test : l'injectat doit **s'étaler en nappe fine sur le périoste**, en soulevant les tissus autour de l'artère. Un gonflement en boule sans étalement = pointe intramusculaire, trop superficielle. Puis compléter à **1–2 mL par site**, pas davantage : au-delà, la diffusion perd la spécificité du bloc test et va toucher les nerfs voisins.` },
    { titre: `Critère de fin`, texte: `Nappe hypoéchogène périostée de 1–2 cm de long entourant le signal Doppler, sur chacun des sites traités. Répéter la séquence complète sur les deux autres sites.` },
    { titre: `Évaluation du bloc test`, texte: `**EN avant, à 20 min, à 2 h et à 24 h**, notée sur une fiche remise au patient avec consigne de mobiliser le genou pendant la fenêtre d'anesthésie (marcher, monter une marche). Le seuil retenu pour proposer une RF est **≥ 50 % de soulagement** pendant la durée pharmacologique de l'AL. Certaines équipes exigent **deux blocs positifs** avec des AL de durée différente pour limiter les faux positifs : c'est plus rigoureux, plus coûteux en séances, et à arbitrer selon l'organisation de l'HDJ.` },
    { titre: `Après le geste`, texte: `Surveillance 30 min. Prévenir de la possible **faiblesse transitoire du quadriceps** (diffusion aux branches des vastes) : pas de conduite le jour même, prudence dans les escaliers, accompagnant souhaitable. Hématome au point de ponction fréquent et bénin ; glace 15 min.` },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bloc test diagnostique** | Lidocaïne 2 % (durée courte) ou ropivacaïne 0,5 % | **1–2 mL par site**, 3 sites → 3–6 mL au total | Le petit volume **est** la technique : au-delà de 2 mL par site la diffusion touche les nerfs voisins et le test perd sa valeur prédictive |
| **Bloc thérapeutique** | Ropivacaïne 0,2–0,5 % + corticoïde réparti sur les 3 sites : méthylprednisolone 40 mg au total, ou bétaméthasone 1 mL au total, ou dexaméthasone 4–8 mg | 2 mL par site | Le corticoïde prolonge inconstamment l'effet ; la dexaméthasone, non particulaire, est un choix raisonnable au contact d'artérioles |
| **Avant RF thermique** | Lidocaïne 1–2 %, 0,5–1 mL par site **après** les tests de stimulation | 0,5–1 mL | Injecter **avant** la stimulation fausse le test ; injecter avant la lésion rend le geste supportable |
| **Après RF** | Ropivacaïne 0,2 % ± corticoïde | 1–2 mL par site | Limite la douleur post-lésionnelle des 48–72 h |
| **Cibles étendues (protocole élargi)** | Idem bloc test | 1–2 mL par site supplémentaire | Vérifier la dose cumulée d'AL quand on passe à 5–6 sites |

**Doses maximales à recalculer dès qu'on dépasse 10 mL cumulés** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Un protocole à 6 sites × 2 mL de ropivacaïne 0,5 % = 60 mg : sans risque chez l'adulte, mais à additionner si d'autres gestes sont réalisés dans la même séance d'HDJ.

**Corticoïde particulaire ou non ?** Les sites géniculés sont au contact d'**artérioles**, non d'artères terminales : le risque embolique est théorique et aucun accident n'est décrit. La dexaméthasone (non particulaire) reste le choix le plus prudent, sans que cela soit une exigence formelle ici.`,

  variantes: [
    { titre: `Radiofréquence thermique échoguidée`, texte: `Indication : bloc test positif (≥ 50 %) mais effet trop bref. Électrode **22 G, 100 mm, pointe active 10 mm**. Placement identique à celui du bloc, mais l'électrode doit être **la plus parallèle possible au trajet du nerf** — donc au périoste — pour que la lésion, qui se forme **latéralement** à la pointe active et non devant elle, englobe le nerf. C'est le point technique qui sépare une RF efficace d'une RF inutile.

**Séquence** : (1) stimulation **sensitive 50 Hz** — paresthésies profondes du genou reproduisant la douleur habituelle à **< 0,5 V** ; (2) stimulation **motrice 2 Hz** — **absence** de contraction du quadriceps à **≥ 2 V** (une contraction impose de repositionner : contrairement à la RF pulsée, une lésion thermique sur une branche motrice n'est pas acceptable) ; (3) 0,5–1 mL de lidocaïne 1 % ; (4) lésion **80 °C pendant 90 secondes** ; (5) certaines équipes réalisent 2 lésions par site en reculant l'électrode de 5 mm, pour élargir la zone dénervée face à la variabilité anatomique — pratique raisonnable, non validée par un essai.

Durée d'effet attendue : **6 à 12 mois**, répétable. Prévenir que la repousse est la règle.` },
    { titre: `Radiofréquence refroidie (cooled RF)`, texte: `Électrode de plus gros calibre (17–18 G) à circulation interne de sérum, produisant une lésion **sphérique et nettement plus volumineuse** — ce qui compense l'incertitude sur la position exacte du nerf, l'argument principal en faveur de cette technologie au genou. Paramètres usuels : **60 °C, 150 secondes** (température de consigne à l'électrode, la lésion tissulaire étant plus chaude — à confirmer sur le manuel du générateur utilisé).

C'est la modalité la mieux étayée : **Davis 2018** (ECR multicentrique croisé) montre une supériorité sur l'infiltration intra-articulaire de corticoïde à 6 mois, et **Chen 2020** une supériorité sur une injection unique d'acide hyaluronique. Contrepartie : coût du consommable, non pris en charge de façon comparable en France — c'est un arbitrage économique autant que clinique pour un centre d'HDJ.` },
    { titre: `Radiofréquence pulsée (PRF)`, texte: `**42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles** (protocoles de 240 à 600 s selon les équipes). Non lésionnelle, donc sans risque de déafférentation ni de névrite post-RF, et acceptable au contact de branches motrices. Effet plus court et plus inconstant que la RF thermique. Place raisonnable : patient fragile, cible proche d'une branche motrice, ou premier essai chez un patient réticent à une lésion définitive. Preuve limitée à des séries et petits ECR (Erdem 2019).` },
    { titre: `Cryoneurolyse`, texte: `Alternative non thermique : la sonde cryogénique produit une dégénérescence wallérienne sans destruction de l'endonèvre, donc une repousse ordonnée et **pas de névrite de déafférentation** — l'argument de sécurité. Cycles de **2 min de gel / 30 s de dégel, × 2–3** par site, après anesthésie locale.

L'ECR contre sham de **Radnovich 2017** porte sur la cryoneurolyse des branches sensitives **antérieures** du genou (branche infrapatellaire du saphène, nerfs cutanés fémoraux antérieurs) et montre un bénéfice à 30–60 jours dans la gonarthrose. La transposition aux nerfs géniculés eux-mêmes repose sur des séries. Durée d'effet plus courte que la RF (3–6 mois). Voir le chapitre transversal Cryoneurolyse.` },
    { titre: `Écho ou fluoroscopie ?`, texte: `La fluoroscopie ne montre ni le nerf ni l'artère : elle vise des repères osseux dont **Fonkoué 2019** a montré qu'ils manquent fréquemment le nerf. L'échographie montre l'artère satellite, donc la cible réelle, sans irradiation et sans table radiologique — décisif pour un HDJ douleur. Ses limites : patient obèse, RF refroidie où le contrôle de la profondeur de l'électrode est plus délicat, et courbe d'apprentissage du Doppler à basse échelle. Les études comparatives de précision plaident pour l'échographie ; aucun grand essai clinique n'a comparé les deux guidages sur le résultat antalgique — c'est un trou de la littérature.` },
  ],

  pearls: [
    `Le réglage qui fait tout : **Doppler couleur à basse échelle de vitesse (5–10 cm/s)**. En preset cardiaque, les artères géniculées sont invisibles.`,
    `On ne cherche pas le nerf, on cherche **la rupture de pente de la corticale puis l'artère qui la longe**. Le nerf suit.`,
    `Contact osseux puis **recul de 1–2 mm** : c'est le geste qui garantit d'être sur le périoste et pas dedans.`,
    `1–2 mL par site, pas plus. Un bloc test généreux est un bloc test faux.`,
    `En RF, l'électrode doit être **parallèle au périoste** : la lésion se forme sur le côté de la pointe active, pas devant.`,
    `Faire écrire l'EN par le patient à 20 min, 2 h et 24 h sur une fiche : c'est cette fiche, pas le souvenir de la consultation, qui décide de la RF.`,
    `Site inféro-latéral : on ne le fait pas. Nerf fibulaire commun.`,
  ],
  pieges: [
    `Passer à la RF sans bloc test positif : le meilleur moyen de produire un échec et de perdre le patient.`,
    `Cibler l'épiphyse au lieu de la jonction : trop distal, on rate le nerf. La rupture de pente est le repère, pas l'épicondyle.`,
    `Injecter 5 mL par site « pour être sûr » : on bloque le saphène, les vastes et le voisinage — soulagement massif, valeur diagnostique nulle.`,
    `Oublier d'éliminer descellement et infection avant de dénerver un genou prothétique douloureux : faute lourde.`,
    `Ne pas prévenir de la faiblesse transitoire du quadriceps : chute dans l'escalier au retour.`,
    `Croire que les trois cibles classiques couvrent toute la capsule : elles n'en couvrent qu'une partie (Tran 2018, Fonkoué 2019) — c'est l'explication la plus probable d'un bloc test partiellement positif.`,
  ],
  complications: [
    `**Ponction d'une artère géniculée / hématome** : le plus fréquent, bénin, compressible. Prévention par Doppler et abord tangentiel ; conduite à tenir : compression 5 min, glace.`,
    `**Faiblesse transitoire du quadriceps** par diffusion aux branches motrices des vastes (sites supérieurs) : quelques heures. Prévenir, éviter la conduite, mobiliser prudemment. Risque de chute chez le sujet âgé.`,
    `**Hypoesthésie médiale du genou** par diffusion au nerf saphène ou à sa branche infrapatellaire (site inféro-médial) : gênante mais transitoire après un bloc ; **définitive possible après RF** — l'annoncer explicitement avant une RF inféro-médiale.`,
    `**Douleur post-RF** (névrite de dénervation) pendant 1 à 3 semaines : brûlure, dysesthésies. Prévenir systématiquement, prescrire d'emblée un antalgique et, si besoin, un traitement des douleurs neuropathiques. Elle cède.`,
    `**Brûlure cutanée** : au point d'entrée si l'électrode est trop superficielle ou si la plaque neutre est mal appliquée ; vérifier la plaque, ne jamais lésionner à moins de 10 mm de la peau.`,
    `**Lésion du nerf fibulaire commun** : évitable en s'interdisant le site inféro-latéral. Se manifesterait par un steppage.`,
    `**Déafférentation / douleur neuropathique de novo** : rare, décrite après RF thermique ; argument en faveur de la cryoneurolyse ou de la PRF chez les patients à risque.`,
    `Infection : exceptionnelle, mais la RF prolonge le temps de geste — asepsie rigoureuse.`,
  ],
  securite: [
    `**Doppler couleur à basse PRF avant chaque ponction**, sur chaque site : c'est à la fois le repérage et la sécurité vasculaire.`,
    `Aspiration avant chaque injection ; abord **tangentiel** de l'artère, jamais frontal.`,
    `Risque hémorragique **faible** (ASRA-ESRA 2018) : pas d'arrêt des antiagrégants, anticoagulants au cas par cas.`,
    `**Stimulation motrice obligatoire avant toute lésion thermique** : pas de lésion si contraction du quadriceps à ≥ 2 V.`,
    `Plaque neutre vérifiée, à distance de tout implant métallique ; matériel de RF contrôlé avant la ponction.`,
    `Pacemaker / DAI : concertation rythmologique préalable, surveillance rythmique pendant la RF.`,
    `Additionner les doses d'AL quand on traite 5–6 sites ou qu'on enchaîne plusieurs gestes dans la séance.`,
  ],

  suivi: `- **J0** : EN avant, à 20 min et à 2 h ; test fonctionnel simple pendant la fenêtre (marche, montée d'une marche) ; force du quadriceps avant le départ.
- **Fiche patient à 24 h** : EN horaire les 6 premières heures puis à 24 h — c'est le document qui décide de la RF. Réponse ≥ 50 % pendant la durée de l'AL = bloc positif.
- **J15–J30 après RF** : EN, KOOS ou WOMAC, périmètre de marche, antalgiques ; rechercher une névrite de dénervation et la traiter sans attendre.
- **3 et 6 mois après RF** : durée d'effet attendue **6–12 mois**. Une répétition est possible à la récidive, sur les mêmes cibles.
- **Escalade en cas d'échec** : (1) vérifier que le bloc test était bien positif ; (2) réinterroger le diagnostic — douleur du saphène/IPBSN, patte d'oie, hanche, rachis lombaire, sensibilisation centrale ; (3) envisager les **cibles étendues** (nerfs des vastes, IPBSN) ; (4) réadresser au chirurgien si la douleur est mécanique.
- **Toujours** associer un programme d'exercice : la dénervation ne renforce pas le quadriceps, et un genou indolore mais faible reste un genou instable.`,

  evidence: `- **RF conventionnelle, ECR fondateur — Choi 2011 (Pain)** : radiofréquence des nerfs géniculés sous fluoroscopie contre procédure factice dans la gonarthrose ; réduction significative de la douleur et amélioration fonctionnelle maintenues à 12 semaines, sans effet indésirable notable. Effectif limité. Preuve **modérée**, essai de référence historique.
- **RF refroidie — Davis 2018 (Reg Anesth Pain Med)** : ECR multicentrique croisé, RF refroidie contre infiltration intra-articulaire de corticoïde ; supériorité sur la douleur et la fonction à 6 mois, avec un profil de tolérance comparable. C'est le meilleur niveau de preuve du domaine. **Chen 2020 (JBJS)** confirme la supériorité de la RF refroidie sur une injection unique d'acide hyaluronique. Preuve **modérée à forte** pour la RF refroidie.
- **Bloc échoguidé — Kim 2018 (Pain Physician)** : ECR en double aveugle, bloc géniculé échoguidé avec AL seul contre AL + corticoïde dans la gonarthrose ; bénéfice des deux bras, gain du corticoïde limité dans le temps. Preuve **modérée** pour l'efficacité du bloc lui-même, **faible** pour l'apport du corticoïde.
- **Précision de l'échoguidage — Yasar 2015 (Pain Physician)** : étude cadavérique de la précision du bloc géniculé échoguidé, avec de bons taux de coloration des cibles. Preuve **forte** sur la précision technique, sans transposition clinique directe.
- **Anatomie révisée — Fonkoué 2019** : deux travaux convergents, l'un sur la distribution des nerfs sensitifs de la capsule (*Surgical and Radiologic Anatomy*), l'autre sur l'**inexactitude des repères fluoroscopiques classiques** (*Regional Anesthesia and Pain Medicine*), imposant de revisiter les cibles. **Tran 2018 (Reg Anesth Pain Med)** décrit dans le même sens l'innervation de la capsule antérieure et l'apport des nerfs des vastes. Ces travaux sont **anatomiques** : ils justifient un changement de repères, ils ne démontrent pas encore un meilleur résultat clinique. C'est le principal trou de la littérature actuelle.
- **Cryoneurolyse — Radnovich 2017 (Osteoarthritis and Cartilage)** : ECR contre sham, cryoneurolyse des branches sensitives antérieures du genou dans la gonarthrose, bénéfice à 30–60 jours. Preuve **modérée** pour cette cible précise, **faible** par extrapolation aux géniculés.
- **RF pulsée — Erdem 2019** et séries : bénéfice rapporté dans la gonarthrose sévère et après PTG, sur de petits effectifs sans comparateur robuste. Preuve **faible**.
- **Méta-analyses récentes (2020–2025)** : elles concluent globalement à un bénéfice antalgique de la dénervation géniculée à 3–6 mois dans la gonarthrose, avec une **hétérogénéité majeure** (guidage, nombre de cibles, technologie RF, critères de bloc test) qui limite les conclusions ; les auteurs appellent régulièrement à standardiser les cibles depuis les travaux de 2018–2019. Confiance : **probable** sur le sens de l'effet, **incertaine** sur son ampleur et sa durée. Les chiffres précis de ces méta-analyses n'ont pas pu être revérifiés lors de la rédaction de cette fiche.`,

  references: [
    { auteurs: `Choi WJ, Hwang SJ, Song JG, et al.`, titre: `Radiofrequency treatment relieves chronic knee osteoarthritis pain: a double-blind randomized controlled trial`, revue: `Pain`, annee: '2011', type: 'ECR', verif: false, note: `ECR fondateur de la dénervation géniculée.` },
    { auteurs: `Davis T, Loudermilk E, DePalma M, et al.`, titre: `Prospective, multicenter, randomized, crossover clinical trial comparing the safety and effectiveness of cooled radiofrequency ablation with corticosteroid injection in the management of knee pain from osteoarthritis`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018', type: 'ECR', verif: false },
    { auteurs: `Chen AF, Khalouf F, Zora K, et al.`, titre: `Cooled radiofrequency ablation compared with a single injection of hyaluronic acid for chronic knee pain: a multicenter, randomized clinical trial`, revue: `The Journal of Bone and Joint Surgery (American volume)`, annee: '2020', type: 'ECR', verif: false },
    { auteurs: `Kim DH, Choi SS, Yoon SH, et al.`, titre: `Ultrasound-guided genicular nerve block for knee osteoarthritis: a double-blind, randomized controlled trial of local anesthetic alone or in combination with corticosteroid`, revue: `Pain Physician`, annee: '2018', type: 'ECR', verif: false },
    { auteurs: `Yasar E, Kesikburun S, Kılıç C, et al.`, titre: `Accuracy of ultrasound-guided genicular nerve block: a cadaveric study`, revue: `Pain Physician`, annee: '2015', type: 'cadavérique', verif: false },
    { auteurs: `Fonkoué L, Behets C, Kouassi JK, et al.`, titre: `Distribution of sensory nerves supplying the knee joint capsule and implications for genicular blockade and radiofrequency ablation: an anatomical study`, revue: `Surgical and Radiologic Anatomy`, annee: '2019', type: 'anatomie', verif: false },
    { auteurs: `Fonkoué L, Behets CW, Steyaert A, et al.`, titre: `Accuracy of fluoroscopic-guided genicular nerve blockade: a need for revisiting anatomical landmarks`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2019', type: 'anatomie', verif: false, note: `Le travail qui a invalidé les repères fluoroscopiques historiques.` },
    { auteurs: `Tran J, Peng PWH, Lam K, et al.`, titre: `Anatomical study of the innervation of anterior knee joint capsule: implication for image-guided intervention`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018', type: 'anatomie', verif: false },
    { auteurs: `Radnovich R, Scott D, Patel AT, et al.`, titre: `Cryoneurolysis to treat the pain and symptoms of knee osteoarthritis: a multicenter, randomized, double-blind, sham-controlled trial`, revue: `Osteoarthritis and Cartilage`, annee: '2017', type: 'ECR', verif: false },
    { auteurs: `Erdem Y, Sir E`, titre: `The efficacy of ultrasound-guided pulsed radiofrequency of genicular nerves in the treatment of chronic knee pain due to severe degenerative disease or previous total knee arthroplasty`, revue: `Medical Science Monitor`, annee: '2019', type: 'série', verif: false },
    { auteurs: `Sari S, Aydın ON, Turan Y, et al.`, titre: `Which one is more effective for the clinical treatment of chronic pain in knee osteoarthritis: radiofrequency neurotomy of the genicular nerves or intra-articular injection?`, revue: `International Journal of Rheumatic Diseases`, annee: '2018', type: 'ECR', verif: false },
    { auteurs: `McAlindon TE, LaValley MP, Harvey WF, et al.`, titre: `Effect of intra-articular triamcinolone vs saline on knee cartilage volume and pain in patients with knee osteoarthritis: a randomized clinical trial`, revue: `JAMA`, annee: '2017', type: 'ECR', verif: false, note: `Justifie de chercher une alternative à la répétition des corticoïdes.` },
    { auteurs: `Narouze S, Benzon HT, Provenzano D, et al.`, titre: `Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018', type: 'reco', verif: false },
  ],
  videos: [],

  scenes: [
    {
      id: 'gen-sm', section: 'sonoanatomie', titre: `Site supéro-médial — jonction diaphyso-épiphysaire du fémur`,
      legende: `Sonde longitudinale sur la face médiale de la cuisse. La corticale diaphysaire, rectiligne, s'incurve à la **jonction** : c'est le repère. L'artère géniculée supéro-médiale y court **collée au périoste** (Doppler à basse échelle) ; le nerf lui est accolé et n'est presque jamais visible.`,
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Longitudinal, face médiale du fémur', type: 'linéaire 8–14 MHz' });
        S.skin({ thickness: 8, fatBelow: 24 });
        S.muscle({ path: 'M0 82 L640 78 L640 178 Q400 208 200 202 Q92 198 0 188 Z', label: 'Vaste médial', at: [136, 142], opacity: 0.5 });
        S.bone({ path: 'M0 268 L300 270 Q400 272 450 296 Q510 326 640 336', label: 'Diaphyse fémorale', at: [116, 306] });
        S.artery({ x: 414, y: 262, r: 8, label: 'A. géniculée sup.-médiale', lx: 478, ly: 214, lead: [418, 254] });
        S.nerve({ x: 392, y: 264, r: 5, label: 'NG supéro-médial', lx: 254, ly: 238, anchor: 'end', lead: [387, 262] });
        S.label({ x: 432, y: 358, text: 'Jonction diaphyso-épiphysaire', cls: 'lbl-bone', small: true, lead: [432, 292] });
        S.target({ x: 404, y: 262, r: 20 });
      },
    },
    {
      id: 'gen-im', section: 'technique', titre: `Site inféro-médial — aiguille in-plane, contact périosté`,
      legende: `Sonde longitudinale sur la face médiale du tibia, **sous le ligament collatéral médial**. L'aiguille chemine sous le LCM jusqu'au contact osseux, puis recule de 1–2 mm. L'injectat doit s'étaler en **nappe fine sur le périoste** autour de l'artère : 1–2 mL, pas davantage, sous peine de bloquer aussi le saphène.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Longitudinal, face médiale du tibia', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.ligament({ path: 'M56 98 L620 118 L622 150 L54 130 Z', label: 'LCM', at: [180, 124] });
        S.bone({ path: 'M0 226 Q120 214 220 226 Q300 238 400 258 L640 268', label: 'Tibia', at: [128, 304] });
        S.artery({ x: 324, y: 240, r: 7, label: 'A. géniculée inf.-médiale', lx: 476, ly: 204, lead: [330, 234] });
        S.nerve({ x: 300, y: 244, r: 5, label: 'NG inféro-médial', lx: 148, ly: 196, lead: [296, 239] });
        S.label({ x: 432, y: 330, text: 'Jonction métaphyso-épiphysaire', cls: 'lbl-bone', small: true, lead: [370, 268] });
        S.target({ x: 312, y: 244, r: 16 });
        S.needle({ from: [640, 168], to: [318, 240], label: '22 G, contact périosté puis recul 1–2 mm' });
        S.spread({ x: 240, y: 232, rx: 54, ry: 10, label: '1–2 mL' });
      },
    },
    {
      id: 'gen-rf', section: 'technique', titre: `Radiofréquence — électrode parallèle au périoste (site supéro-latéral)`,
      legende: `La lésion thermique se forme **latéralement** à la pointe active, pas devant elle : l'électrode doit donc être aussi **parallèle que possible au périoste et au trajet du nerf**. Stimulation sensitive 50 Hz (< 0,5 V, paresthésies du genou), puis motrice 2 Hz (**pas de contraction du quadriceps à ≥ 2 V**), puis anesthésie locale, puis 80 °C / 90 s.`,
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Longitudinal, face latérale du fémur', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M0 80 L640 76 L640 172 Q400 202 200 196 Q92 192 0 182 Z', label: 'Vaste latéral', at: [132, 138], opacity: 0.5 });
        S.bone({ path: 'M0 264 L290 266 Q390 268 440 292 Q500 322 640 332', label: 'Fémur', at: [110, 302] });
        S.artery({ x: 408, y: 256, r: 8, label: 'A. géniculée sup.-latérale', lx: 470, ly: 210, lead: [412, 248] });
        S.nerve({ x: 384, y: 258, r: 5, label: 'NG supéro-latéral', lx: 214, ly: 228, anchor: 'end', lead: [379, 257] });
        S.region({ x: 400, y: 254, rx: 40, ry: 15, fill: '#ff8f3f', opacity: 0.32, label: 'Lésion 80 °C / 90 s', lx: 430, ly: 342, small: true, lead: [408, 270] });
        S.target({ x: 396, y: 256, r: 18 });
        S.needle({ from: [640, 168], to: [386, 246], label: 'Électrode RF 22 G, pointe active 10 mm' });
      },
    },
  ],

  checklist: [
    `Descellement et infection de prothèse éliminés avant toute dénervation d'un genou prothétique`,
    `Doppler couleur **à basse échelle de vitesse** réglé avant le premier site`,
    `Volume limité à 1–2 mL par site pour préserver la valeur diagnostique du bloc test`,
    `Fiche d'auto-évaluation EN (20 min, 2 h, 24 h) remise au patient et expliquée`,
    `Site inféro-latéral **non traité** (nerf fibulaire commun)`,
    `RF : plaque neutre en place et vérifiée, stimulation motrice 2 Hz négative avant toute lésion, pacemaker/DAI signalé`,
    `Patient prévenu : faiblesse transitoire possible du quadriceps, névrite post-RF de 1–3 semaines, repousse nerveuse à 6–12 mois`,
  ],
});
