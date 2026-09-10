/* Fiche : tendinopathie proximale des ischio-jambiers / bursite ischiatique — injection péri-tendineuse échoguidée, ténotomie. */
ECHO.register({
  id: 'ischio-jambiers-proximaux',
  titre: 'Ischio-jambiers proximaux — tendinopathie d’insertion et bursite ischiatique',
  titreCourt: 'Ischio-jambiers proximaux',
  en: 'Proximal hamstring tendinopathy and ischiogluteal bursitis — ultrasound-guided peritendinous injection, needle tenotomy, PRP',
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 2,
  grade: 'Faible (séries rétrospectives, pas de méta-analyse ; rééducation en charge = seule option bien étayée)',
  motsCles: ['tubérosité ischiatique', 'tendon conjoint', 'biceps fémoral', 'semi-tendineux', 'semi-membraneux', 'bursite ischiatique', 'douleur fessière basse', 'sciatique', 'PRP', 'ténotomie', 'ischiogluteal'],
  maj: '2026-09',
  resume: 'La tendinopathie proximale des ischio-jambiers est une douleur fessière basse, exactement centrée sur la tubérosité ischiatique, aggravée par la position assise prolongée et par la course en accélération — un tableau régulièrement pris pour une sciatique tronquée ou un syndrome du piriforme. Le geste est simple sur le papier et redoutable en pratique pour une seule raison : le **nerf sciatique passe à un ou deux centimètres en dehors du tendon conjoint**, et une injection mal conduite se solde par un bloc sciatique complet, voire par une lésion neurologique. C’est ce qui classe la fiche en niveau 2. La littérature est mince : le socle du traitement reste la rééducation en charge progressive, l’infiltration n’étant qu’une fenêtre, et le corticoïde devant être manié avec réserve sur un tendon porteur.',

  flash: {
    position: 'ventral', positionNote: 'décubitus ventral, coussin sous les hanches pour effacer la lordose ; jambes en extension, pieds hors du plan du lit',
    sonde: 'lineaire', sondeNote: '6–13 MHz, profondeur 5–7 cm ; convexe 2–5 MHz fréquemment nécessaire (la tubérosité est à 4–8 cm sous la graisse fessière)',
    approche: 'in-plane', approcheNote: 'coupe transverse pour localiser le sciatique, puis injection en coupe **longitudinale** de distal en proximal (le sciatique n’est alors pas dans le plan), ou en transverse de médial en latéral sans jamais dépasser le bord latéral du tendon',
    aiguille: '21–22 G, 70–90 mm ; 100 mm si morphotype épais',
    cible: 'Espace péri-tendineux / bourse ischiatique, entre le grand fessier et la face superficielle du tendon conjoint, **à distance du bord latéral du tendon**',
    injectat: '3–5 mL : AL ± corticoïde, ou PRP 3–5 mL',
    duree: '10–15 min',
  },

  indications: [
    'Douleur fessière basse chronique centrée sur la **tubérosité ischiatique**, aggravée par la position assise prolongée et l’étirement en flexion de hanche genou tendu, après échec d’au moins 3 mois de rééducation en charge progressive.',
    '**Tendinopathie d’insertion du tendon conjoint** (chef long du biceps fémoral + semi-tendineux) documentée : épaississement, hypoéchogénicité, calcifications, irrégularité corticale, fissuration partielle.',
    '**Bursite ischiatique (ischio-glutéale)** avec épanchement objectivé — c’est l’indication la plus rentable pour le corticoïde, et la plus rare.',
    'Bloc diagnostique quand le tableau peut relever d’une radiculalgie S1, d’un syndrome du piriforme, d’une souffrance sacro-iliaque ou d’une douleur pudendale : la réponse immédiate à l’AL péri-tendineux tranche.',
    'Douleur résiduelle après désinsertion ancienne partiellement cicatrisée, chez un patient non chirurgical.',
    'Sportif d’endurance ou coureur en plateau de rééducation : ténotomie percutanée ou PRP pour relancer une cicatrisation, en complément — jamais à la place — du programme de charge.',
  ],
  contreIndications: [
    '**Absolues** : infection cutanée locale, refus, allergie au produit, suspicion de désinsertion tendineuse complète (avulsion) — qui relève d’un avis chirurgical, pas d’une infiltration.',
    '**Relatives fortes** : sportif de compétition en période de charge (le corticoïde fragilise transitoirement un tendon soumis à des contraintes explosives) ; tendinopathie sans épanchement de bourse chez un sujet jeune actif — privilégier PRP ou ténotomie.',
    '**Relatives** : diabète déséquilibré, anticoagulation à dose curative (site profond, mal compressible), infiltrations antérieures répétées sur le même site.',
    '**Risque hémorragique** : injection profonde en région fessière, site **peu compressible** — bien que non listé explicitement dans les recommandations ASRA-ESRA 2018, le classer par prudence en risque **intermédiaire** et discuter la fenêtre thérapeutique chez le patient anticoagulé. *Classification exacte à confirmer.*',
    'Ne jamais infiltrer sans avoir localisé le nerf sciatique sur la coupe transverse : c’est une contre-indication technique absolue.',
  ],
  alternatives: 'Le socle est la **rééducation en charge progressive** : isométrique en phase douloureuse (ischio-jambiers en position de faible flexion de hanche), puis excentrique et enfin travail en allongement à flexion de hanche croissante — c’est la seule stratégie qui ait un rationnel solide et un suivi à long terme. Correction des facteurs d’entretien : position assise (coussin évidé, éviter les sièges durs et bas), volume et intensité de course, travail des fessiers. Les **ondes de choc** ont un ECR favorable chez des athlètes professionnels et constituent une alternative sérieuse au geste injectable. La **ténotomie percutanée** et le **PRP** s’adressent aux tendinopathies dégénératives en plateau. La chirurgie (débridement, réinsertion) est réservée aux avulsions et aux échecs prolongés bien documentés. L’infiltration de corticoïde a la place la plus étroite de toutes ces options : elle sert à casser une douleur qui empêche de rééduquer, pas à traiter le tendon.',

  anatomie: `La **tubérosité ischiatique** reçoit deux insertions distinctes :
- le **tendon conjoint** du chef long du biceps fémoral et du semi-tendineux, sur la facette **inféro-médiale** ;
- le **semi-membraneux**, isolément, sur une facette **supéro-latérale**, en avant et en dehors du précédent.

La **bourse ischio-glutéale** est interposée entre la tubérosité, le tendon et le grand fessier ; elle se distend en cas de compression chronique (position assise) ou de tendinopathie.

Le **nerf sciatique** descend dans l’espace ischio-trochantérien, appliqué sur le carré fémoral puis sur le grand adducteur, **latéralement au tendon conjoint**. La distance qui les sépare est de l’ordre de **1 à 2 cm** à hauteur de la tubérosité, et elle se réduit encore en flexion de hanche. Le **nerf cutané postérieur de la cuisse** chemine plus superficiellement et plus médialement, sous le grand fessier.

### Ce qui compte pour le geste
- **La seule question qui compte avant de piquer : où est le sciatique ?** Il se repère en coupe transverse, en glissant en dehors depuis la tubérosité : ovale de 8–15 mm en nid d’abeilles, entre tubérosité ischiatique et grand trochanter. On le localise, on le montre au patient sur l’écran s’il le souhaite, et on ne le perd plus de vue.
- **Deux stratégies de sécurité**, à choisir avant de commencer : (1) injection en **coupe longitudinale**, aiguille de distal en proximal dans l’axe du tendon — le sciatique n’est pas dans le plan de coupe, c’est la voie la plus sûre ; (2) injection en **coupe transverse**, aiguille de médial en latéral, la pointe s’arrêtant impérativement avant le bord latéral du tendon. L’abord latéro-médial en transverse est à proscrire : il traverse le trajet du nerf.
- **Le tendon conjoint est un tendon porteur.** Une injection intratendineuse de corticoïde expose à la rupture, sur une insertion qui supporte l’ensemble de la chaîne postérieure. Rester strictement péri-tendineux ou intra-bursal.
- **Profondeur** : tubérosité à 4–6 cm chez un sujet mince, jusqu’à 8 cm chez le patient obèse ou à morphotype gynoïde — c’est le geste du membre inférieur où l’on passe le plus souvent au convexe.
- La **flexion de hanche rapproche le nerf du tendon** : maintenir le patient en extension pendant tout le geste.`,

  installation: {
    patient: `**Décubitus ventral**, coussin sous les hanches (efface la lordose et détend la chaîne postérieure), bras le long du corps ou sous la tête, pieds dans le vide au-delà du bord du lit ou sur un billot. **Hanches en extension** : toute flexion rapproche le sciatique du tendon.

Palper et marquer la tubérosité ischiatique et le pli fessier. Faire préciser au patient le point exact de la douleur : la concordance entre le point palpé, le point désigné et l’anomalie échographique est un argument diagnostique fort dans une région où les projections sont nombreuses.

Désinfection large. La proximité du sillon inter-fessier impose une détersion soignée et un champage qui écarte la zone périnéale.`,
    operateur: `Opérateur du **côté à traiter**, écran en face. Deux temps distincts :
1. **Temps de repérage en transverse** : localiser tubérosité, tendon conjoint, semi-membraneux et **nerf sciatique**. Mesurer mentalement la distance tendon–nerf.
2. **Temps d’injection** : soit rotation de la sonde à 90° pour une injection longitudinale de distal en proximal (voie recommandée), soit maintien de la coupe transverse avec ponction de **médial en latéral**.

Ne jamais inverser : pas d’injection avant d’avoir vu le nerf.`,
    sonde: `- Linéaire 6–13 MHz si la tubérosité est à moins de 5 cm ; **convexe 2–5 MHz** au-delà, ce qui est fréquent.
- Profondeur 5–7 cm, focale à l’insertion tendineuse, gain permettant de distinguer le tendon (fibrillaire clair) du grand fessier (strié plus sombre).
- **Anisotropie** majeure sur ce tendon oblique : basculer la sonde de 10–15° avant de conclure à une hypoéchogénicité pathologique.
- Doppler couleur : néovascularisation péri-insertionnelle, et surtout repérage des branches de l’artère glutéale inférieure et des vaisseaux circonflexes, présents dans la zone.
- Aiguille écho-visible recommandée : à 6 cm de profondeur et à angle marqué, une aiguille standard est mal visible — or ici, perdre la pointe n’est pas une option.`,
  },

  reperage: [
    { titre: 'Trouver la tubérosité ischiatique', texte: 'Sonde **transversale** dans le pli fessier, patient en décubitus ventral, à l’aplomb du relief palpé. La tubérosité apparaît comme une ligne osseuse convexe très hyperéchogène avec ombre franche, sous une épaisse couche de graisse et le grand fessier.' },
    { titre: 'Identifier le tendon conjoint', texte: 'Juste au-dessus de la corticale, en position **inféro-médiale**, le tendon conjoint apparaît en coupe transverse comme une structure ovalaire fibrillaire hyperéchogène, coiffant la tubérosité. Plus en dehors et en avant, le **semi-membraneux** est plus petit et plus profond.' },
    { titre: 'Localiser le nerf sciatique — étape non négociable', texte: 'Glisser la sonde **en dehors**, vers l’espace entre tubérosité ischiatique et grand trochanter : le **nerf sciatique** apparaît comme un ovale aplati de 8–15 mm, en nid d’abeilles, appliqué sur le carré fémoral puis sur le grand adducteur. Noter sa distance au bord latéral du tendon (typiquement 1–2 cm) et la profondeur à laquelle il se trouve.' },
    { titre: 'Passer en longitudinal', texte: 'Rotation de 90° : le tendon conjoint apparaît fibrillaire, s’insérant en bec sur la tubérosité. C’est la coupe d’injection recommandée. Chercher l’**épaississement**, les zones hypoéchogènes, les **calcifications**, l’irrégularité corticale et une éventuelle **lame liquidienne** de bourse entre tendon et grand fessier.' },
    { titre: 'Doppler et bilan lésionnel', texte: 'Doppler couleur sur l’enthèse (néovascularisation = tendinopathie active) et sur le trajet de ponction. Évaluer l’intégrité des fibres : une interruption complète avec rétraction fait sortir le patient du champ de cette fiche.' },
    { titre: 'Si la tubérosité reste illisible', texte: 'Presque toujours un problème de fréquence : passer au convexe, augmenter la profondeur, appuyer fermement. Sinon, se recaler sur le **grand trochanter** (repère osseux latéral facile) et glisser en dedans jusqu’à retrouver la tubérosité, en gardant le sciatique à l’écran pendant tout le trajet.' },
  ],

  sonoanatomie: [
    { structure: 'Graisse sous-cutanée fessière', aspect: 'Couche épaisse, hypoéchogène, cloisonnée', repere: 'Explique la profondeur de la cible (4–8 cm)' },
    { structure: 'Grand fessier', aspect: 'Muscle épais, strié, recouvrant l’ensemble', repere: 'Toit de l’espace péri-tendineux' },
    { structure: 'Tendon conjoint (biceps long + semi-tendineux)', aspect: 'Ovale fibrillaire hyperéchogène en transverse, en bec en longitudinal', repere: 'Facette **inféro-médiale** de la tubérosité' },
    { structure: 'Tendon du semi-membraneux', aspect: 'Plus petit, plus profond et plus latéral', repere: 'Facette supéro-latérale' },
    { structure: 'Tubérosité ischiatique', aspect: 'Corticale convexe hyperéchogène, ombre franche', repere: 'Plancher ; irrégulière si enthésopathie' },
    { structure: 'Bourse ischio-glutéale', aspect: 'Virtuelle ; lame anéchogène entre tendon et grand fessier si distendue', repere: 'Cible privilégiée du corticoïde quand elle existe' },
    { structure: 'Nerf sciatique', aspect: 'Ovale aplati de 8–15 mm, aspect en nid d’abeilles', repere: '**1–2 cm en dehors** du tendon conjoint, sur le carré fémoral' },
    { structure: 'Nerf cutané postérieur de la cuisse', aspect: 'Petite structure fasciculée de 2–4 mm, superficielle', repere: 'Sous le grand fessier, plus médial — explique certaines dysesthésies post-geste' },
  ],

  technique: [
    { titre: 'Préparation et repérage préalable', texte: 'Checklist (fin de fiche). **Le nerf sciatique est localisé et sa distance au tendon notée avant que l’aiguille ne soit ouverte.** Seringue de 5 mL sur aiguille 21–22 G 70–90 mm, prolongateur souple. Housse de sonde stérile.' },
    { titre: 'Anesthésie cutanée et du trajet', texte: '2–3 mL de lidocaïne 1 % au point d’entrée puis le long du trajet superficiel sous contrôle échographique. Le trajet est long : une anesthésie insuffisante fait bouger le patient au moment où la pointe est la plus proche du nerf.' },
    { titre: 'Voie recommandée — longitudinale, de distal en proximal', texte: 'Sonde en **coupe longitudinale** sur le tendon conjoint. Aiguille in-plane, entrée 2–3 cm en aval, angle 30–40°, progression **dans l’axe du tendon** jusqu’à la face superficielle de l’enthèse. Dans ce plan, le sciatique est hors coupe : la sécurité vient de l’orientation, pas de la surveillance visuelle du nerf.' },
    { titre: 'Voie alternative — transverse, de médial en latéral', texte: 'Si la fenêtre longitudinale est mauvaise : sonde **transversale**, aiguille in-plane de **médial vers latéral**, pointe amenée sur la face superficielle du tendon. **Règle absolue : ne jamais dépasser le bord latéral du tendon**, où commence le no man’s land qui mène au sciatique. L’abord latéro-médial est proscrit.' },
    { titre: 'Test et injection fractionnée', texte: 'Aspiration. Injection test de 0,5 mL : le liquide doit **décoller le grand fessier de la surface tendineuse** en une nappe qui glisse, sans résistance et sans image intratendineuse. Puis 3–5 mL par fractions de 1 mL. **Toute paresthésie du membre inférieur pendant l’injection impose l’arrêt immédiat** et le retrait.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène péri-tendineuse de 2–3 cm, ou remplissage de la bourse quand elle est distendue ; absence de diffusion latérale vers l’espace ischio-trochantérien (une diffusion visible en direction du sciatique annonce un bloc moteur). Retrait sous contrôle, pansement.' },
    { titre: 'Après le geste — surveillance neurologique obligatoire', texte: '**Tester avant la sortie** : releveurs du pied, flexion plantaire, sensibilité de la face dorsale du pied et de la plante. Garder le patient 30–45 min. Un déficit, même partiel, impose de le garder jusqu’à récupération complète et de **contre-indiquer la conduite**. Prévoir un accompagnant pour tout patient venu seul. Prévenir d’une recrudescence de 24–48 h et interdire l’assise prolongée et la course pendant 5 à 7 jours.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 %, seule | 3–4 mL | Volume **volontairement petit** : au-delà, la diffusion latérale bloque le sciatique et fait perdre toute valeur diagnostique. EN avant / à 20 min |
| Bursite ischiatique documentée | Méthylprednisolone 40 mg (Dépo-Médrol®) ou bétaméthasone : Diprostène® 1 mL (≈ 7 mg) ou Célestène® chronodose 1 mL (5,7 mg) + lidocaïne 1 % | 3–5 mL | La meilleure indication du corticoïde ici : cible liquidienne identifiée, tendon épargné |
| Tendinopathie sans bursite | Dexaméthasone 4–8 mg + AL, ou AL seul | 3–5 mL | Corticoïde **soluble, non particulaire, à dose basse** : le tendon conjoint est un tendon porteur, la fragilisation n’est pas un risque théorique. Beaucoup d’équipes s’abstiennent purement et simplement du corticoïde dans cette indication |
| PRP | Plasma riche en plaquettes, préparation standardisée | 3–5 mL | Injections péri-tendineuse et intratendineuse dans la zone dégénérative. Données limitées à des séries et à quelques essais de petite taille ; hors nomenclature. Latence de 4–6 semaines à annoncer |
| Ténotomie percutanée à l’aiguille | Lidocaïne 1 % 4–5 mL puis 20–40 passages d’une aiguille 21 G | — | Sur tendinopathie dégénérative en plateau, sans corticoïde associé. Recrudescence de 5–10 jours à annoncer |

**Doses maximales d’anesthésique local** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Les volumes sont faibles ; le point d’attention n’est pas la dose totale mais la **diffusion locale**.

**Choix de l’anesthésique local** : préférer la **lidocaïne** à la ropivacaïne ou à la bupivacaïne quand un bloc sciatique accidentel est possible — sa durée d’action de 1 à 2 h transforme un incident en simple contretemps, là où une bupivacaïne 0,5 % immobilise le patient 8 à 12 h.

**Corticoïdes — règle de répétition** : au maximum 2 infiltrations sur ce site, espacées d’au moins 3 mois, et jamais chez un sportif en charge. Au-delà, changer de stratégie.`,

  variantes: [
    { titre: 'Ténotomie percutanée à l’aiguille', texte: `Sous anesthésie locale généreuse (lidocaïne 1 %, 4–5 mL en péri-tendineux et dans la zone à traiter), aiguille 21 G in-plane en coupe longitudinale, 20 à 40 passages en éventail dans la zone hypoéchogène et sur les irrégularités corticales, jusqu’à ramollissement de la résistance perçue. Aucun corticoïde dans le même temps.

Objectif : convertir une tendinopathie dégénérative chronique en réponse cicatricielle aiguë. Recrudescence douloureuse de 5 à 10 jours à annoncer explicitement, reprise du programme de charge à J10. Niveau de preuve : séries, extrapolation depuis l’épicondylalgie et la coiffe — *à confirmer*.` },
    { titre: 'PRP', texte: `3–5 mL en péri-tendineux et en intratendineux, sous AL cutané seul. Les données publiées sont des séries et des essais de petite taille aux résultats contradictoires ; aucune méta-analyse ne permet de trancher à cette localisation. À proposer, hors nomenclature, au patient jeune et actif en plateau de rééducation, en annonçant honnêtement le niveau de preuve et la latence de 4 à 6 semaines.` },
    { titre: 'Ondes de choc', texte: `Alternative non invasive documentée par un ECR mené chez des athlètes professionnels, avec un bénéfice net sur la douleur et le retour au sport par rapport au traitement conservateur. 3 à 4 séances hebdomadaires. À proposer d’emblée au patient qui refuse une injection ou chez qui le corticoïde est inopportun (sportif en charge).` },
    { titre: 'Bloc du nerf sciatique — le distinguer, ne pas le confondre', texte: `Si la douleur est en réalité une **irritation du sciatique dans l’espace ischio-trochantérien** (deep gluteal syndrome, conflit ischio-fémoral), la cible change complètement : ce n’est plus l’enthèse mais l’espace péri-neural, où l’on réalise une **hydrodissection** (sérum physiologique ou dextrose 5 %, 10–15 mL) plutôt qu’une infiltration tendineuse. La distinction se fait sur le siège de la douleur, l’irradiation, le signe de Lasègue et la réponse au bloc — cf. fiche piriforme.` },
    { titre: 'Bursite ischiatique isolée', texte: `Devant une bourse franchement distendue, aspirer avant d’injecter : le geste soulage immédiatement, permet l’analyse du liquide et évite la dilution. Aiguille 20–21 G, robinet trois voies. C’est la situation où le corticoïde a le meilleur rapport bénéfice-risque, la cible n’étant pas le tendon.` },
  ],

  pearls: [
    'Localiser le sciatique **avant** d’ouvrir l’aiguille, et noter sa distance au bord latéral du tendon : c’est le seul chiffre qui compte pour la sécurité du geste.',
    'Injecter en coupe longitudinale, de distal en proximal : le nerf n’est pas dans le plan, la sécurité vient de l’orientation.',
    'En transverse, aborder de médial en latéral et s’arrêter au bord latéral du tendon — jamais l’inverse.',
    'Garder les hanches en extension pendant tout le geste : la flexion rapproche le nerf du tendon.',
    'Choisir la lidocaïne plutôt qu’un AL de longue durée : un bloc sciatique accidentel dure alors 1–2 h et non une nuit.',
    'Tester les releveurs avant la sortie, systématiquement, et le tracer au dossier.',
  ],
  pieges: [
    'Injecter sans avoir vu le nerf : la faute qui définit ce geste.',
    'Un volume trop important pour un bloc diagnostique : la diffusion latérale bloque le sciatique et rend le test ininterprétable.',
    'Prendre une tendinopathie proximale pour une sciatalgie S1 (ou l’inverse) : la douleur exquise à la palpation de la tubérosité et l’aggravation en position assise sont les meilleurs discriminants.',
    'Injecter du corticoïde dans le tendon conjoint d’un sportif en charge : c’est le scénario des ruptures rapportées.',
    'Utiliser une aiguille de 50 mm : elle n’atteint pas la cible chez la plupart des patients et pousse à des angles dangereux.',
    'Laisser repartir seul un patient qui a une hypoesthésie plantaire, même minime.',
  ],
  complications: [
    '**Bloc sciatique inadvertant** : la complication attendue de ce geste. Déficit moteur et sensitif de durée équivalente à l’AL utilisé. Conduite à tenir : garder le patient jusqu’à récupération complète, contre-indiquer la conduite, protection du pied (attelle anti-équin si la sortie est nécessaire), accompagnant obligatoire, information écrite. Prévenir le patient **avant** le geste.',
    '**Injection intraneurale** : douleur fulgurante ou paresthésie à l’injection → **arrêt immédiat**, retrait, surveillance neurologique rapprochée et avis spécialisé si le déficit dépasse la durée de l’AL. Complication rare mais potentiellement définitive.',
    '**Rupture tendineuse secondaire** après corticoïde intratendineux ou infiltrations répétées : décrite, favorisée par la reprise sportive précoce.',
    '**Recrudescence douloureuse** 24–48 h (flare), prolongée à 5–10 jours après ténotomie ou PRP.',
    '**Hématome profond fessier** : site peu compressible ; prudence chez l’anticoagulé.',
    '**Infection** : rare, mais la proximité du sillon inter-fessier justifie une asepsie et un champage rigoureux.',
    '**Dysesthésies du territoire cutané postérieur de la cuisse** par diffusion au nerf cutané postérieur : transitoires, à ne pas confondre avec une atteinte sciatique.',
  ],
  securite: [
    'Repérage du **nerf sciatique** en coupe transverse obligatoire avant toute ponction ; distance tendon–nerf notée au dossier.',
    'Choix du plan d’injection **décidé avant** de piquer : longitudinal distal→proximal (recommandé) ou transverse médial→latéral. Jamais latéro-médial.',
    'Hanche maintenue en extension ; toute flexion rapproche le nerf.',
    'Anesthésique local de courte durée (lidocaïne) privilégié dès qu’un bloc accidentel est envisageable.',
    'Aspiration avant chaque fraction ; arrêt immédiat sur paresthésie ou résistance.',
    'Test moteur et sensitif du pied avant la sortie, tracé au dossier ; surveillance 30–45 min.',
    'Site profond peu compressible : classer le risque hémorragique en **intermédiaire** par prudence et discuter la fenêtre chez l’anticoagulé (*classification ASRA-ESRA exacte à confirmer pour ce site*).',
  ],

  suivi: `- **J0** : EN avant / à 20 min, test moteur et sensitif du membre inférieur avant la sortie, tolérance de l’assise. La réponse immédiate à l’AL est l’élément diagnostique.
- **J2–J10** : fenêtre du flare (24–48 h) ; recrudescence attendue et prolongée après ténotomie ou PRP.
- **J15–J30** : EN, **durée d’assise tolérée sans douleur** (le critère le plus parlant chez ces patients, à noter en minutes), distance de course sans douleur chez le sportif, observance du programme de charge.
- **3 mois** : décision. Bénéfice avec reprise effective de la rééducation → poursuivre le seul programme. Bénéfice bref → PRP, ténotomie ou ondes de choc plutôt qu’une seconde infiltration de corticoïde. Aucun bénéfice malgré un bloc AL initialement positif → reconsidérer une lésion structurale (IRM) et l’avis chirurgical. Bloc AL initialement négatif → reprendre le diagnostic (rachis, sacro-iliaque, espace glutéal profond, pudendal).
- **Constante** : sans programme de charge progressive, le geste ne sert à rien. Le rendez-vous de rééducation doit être pris avant la sortie.`,

  evidence: `- **Infiltration de corticoïde échoguidée (Zissen, 2010)** : série rétrospective d’injections péri-tendineuses guidées pour tendinopathie proximale des ischio-jambiers, avec un soulagement partiel chez environ la moitié des patients au-delà d’un mois. C’est la référence la plus citée du domaine — et ce n’est **qu’une série rétrospective**, sans groupe contrôle. Preuve **faible**.
- **Ondes de choc (Cacchio, 2011, American Journal of Sports Medicine)** : ECR chez des athlètes professionnels, bénéfice net des ondes de choc sur la douleur et le retour au sport par rapport au traitement conservateur. C’est, paradoxalement, l’intervention la mieux étayée de cette localisation.
- **PRP** : essais de petite taille et séries, résultats contradictoires, pas de méta-analyse permettant de conclure à cette localisation. Preuve **insuffisante** — à proposer en informant honnêtement.
- **Ténotomie percutanée** : aucune donnée comparative propre à l’enthèse ischiatique ; la pratique est **extrapolée** de l’épicondylalgie latérale et de la coiffe. Le dire au patient.
- **Rééducation en charge progressive** : rationnel physiopathologique solide et données convergentes issues des tendinopathies d’insertion en général, mais peu d’essais spécifiques de grande taille sur les ischio-jambiers proximaux. Cela reste le socle par défaut.
- **Sécurité** : la proximité du sciatique est documentée par les études anatomiques et d’imagerie ; le bloc sciatique inadvertant après injection péri-tendineuse est rapporté sous forme de cas. Aucune série ne quantifie proprement sa fréquence — *trou de la littérature assumé*.
- **Conclusion honnête** : c’est l’une des fiches où l’écart est le plus grand entre la fréquence du geste en pratique et la solidité des données qui le soutiennent. La prudence technique y compte plus que la promesse d’efficacité. *Références à confirmer lors de la passe de vérification bibliographique.*`,

  references: [
    { auteurs: 'Zissen MH, Wallace G, Stevens KJ, Fredericson M, Beaulieu CF', titre: 'High hamstring tendinopathy: MRI and ultrasound imaging and therapeutic efficacy of percutaneous corticosteroid injection', revue: 'American Journal of Roentgenology', annee: '2010', doi: '10.2214/AJR.09.3674', type: 'série rétrospective', verif: true },
    { auteurs: 'Cacchio A, Rompe JD, Furia JP, Susi P, Santilli V, De Paulis F', titre: 'Shockwave therapy for the treatment of chronic proximal hamstring tendinopathy in professional athletes', revue: 'American Journal of Sports Medicine', annee: '2011', doi: '10.1177/0363546510379324', type: 'ECR', verif: true },
    { auteurs: 'Fredericson M, Moore W, Guillet M, Beaulieu C', titre: 'High hamstring tendinopathy in runners: meeting the challenges of diagnosis, treatment, and rehabilitation', revue: 'The Physician and Sportsmedicine', annee: '2005', doi: '10.1080/23263660.2005.11675757', type: 'revue', verif: true },
    { auteurs: 'Wetzel RJ, Patel RM, Terry MA', titre: 'Platelet-rich plasma as an effective treatment for proximal hamstring injuries', revue: 'Orthopedics', annee: '2013', doi: '10.3928/01477447-20121217-20', type: 'série', verif: true },
    { auteurs: 'Miller SL, Gill J, Webb GR', titre: 'The proximal origin of the hamstrings and surrounding anatomy encountered during repair', revue: 'Journal of Bone and Joint Surgery (American volume)', annee: '2007', url: 'https://www.jbjs.org/reader.php?rsuite_id=1034666', type: 'anatomie', verif: true, note: 'Rapports du tendon conjoint et du nerf sciatique à la tubérosité ischiatique.' },
    { auteurs: 'Goom TSH, Malliaras P, Reiman MP, Purdam CR', titre: 'Proximal hamstring tendinopathy: clinical aspects of assessment and management', revue: 'Journal of Orthopaedic and Sports Physical Therapy', annee: '2016', doi: '10.2519/jospt.2016.5986', type: 'revue', verif: true, note: 'Base du programme de charge progressive proposé au patient.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'recommandation', verif: true },
  ],
  videos: [
    { titre: '3D How To: Ultrasound Guided Injection of the Proximal Hamstring', source: 'YouTube (SonoSite)', url: 'https://www.youtube.com/watch?v=33KIHnD9si0', note: 'Animation 3D et échographie : infiltration échoguidée de l\'insertion proximale des ischio-jambiers.' },
  ],

  scenes: [
    {
      id: 'ij-transverse', section: 'sonoanatomie', titre: 'Coupe transverse sur la tubérosité ischiatique — où est le sciatique',
      legende: 'La coupe de sécurité, à faire avant toute ponction. Le tendon conjoint coiffe la facette inféro-médiale de la tubérosité ; le semi-membraneux est plus latéral. Le nerf sciatique est à 1–2 cm en dehors, appliqué sur le carré fémoral, entre tubérosité et grand trochanter. Cette distance se réduit si la hanche est fléchie.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, pli fessier', type: 'convexe 2–5 MHz' });
        S.skin({ thickness: 8, fatBelow: 50 });
        S.muscle({ path: 'M0 100 L640 96 L640 218 Q400 238 200 226 L0 214 Z', label: 'Grand fessier', at: [110, 162], opacity: 0.5 });
        S.tendon({ path: 'M100 268 Q195 232 292 258 L296 278 Q195 254 104 288 Z', label: 'Tendon conjoint', lx: 118, ly: 212, anchor: 'start', small: true, lead: [186, 248] });
        S.tendon({ x: 338, y: 280, rx: 24, ry: 11, label: 'T. semi-membraneux', lx: 318, ly: 336, anchor: 'start', small: true, lead: [340, 290] });
        S.bone({ path: 'M40 322 Q170 252 300 278 L362 300', label: 'Tubérosité ischiatique', at: [152, 372] });
        S.muscle({ path: 'M366 294 L640 266 L640 400 L374 400 Z', label: 'Carré fémoral / gd adducteur', at: [500, 356], opacity: 0.45, small: true });
        S.nerve({ x: 472, y: 266, rx: 28, ry: 14, label: 'N. sciatique', lx: 472, ly: 218 });
        S.bone({ path: 'M578 258 Q610 246 640 252' });
        S.label({ x: 580, y: 300, text: 'Gd trochanter', cls: 'lbl-bone', small: true });
        S.label({ x: 408, y: 240, text: '≈ 1–2 cm', cls: 'lbl-target', small: true });
      },
    },
    {
      id: 'ij-geste', section: 'technique', titre: 'Voie transverse médio-latérale — la pointe s’arrête au bord latéral du tendon',
      legende: 'Variante à utiliser quand la fenêtre longitudinale est mauvaise. L’aiguille vient de médial, longe la face superficielle du tendon conjoint et s’arrête impérativement avant son bord latéral. La nappe doit décoller le grand fessier du tendon, sans diffusion latérale vers le nerf. L’abord latéro-médial, qui traverse le trajet du sciatique, est proscrit.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, pli fessier', type: 'in-plane, médio-latéral' });
        S.skin({ thickness: 8, fatBelow: 50 });
        S.muscle({ path: 'M0 100 L640 96 L640 218 Q400 238 200 226 L0 214 Z', label: 'Grand fessier', at: [96, 162], opacity: 0.5 });
        S.tendon({ path: 'M100 268 Q195 232 292 258 L296 278 Q195 254 104 288 Z', label: 'Tendon conjoint', lx: 96, ly: 300, anchor: 'start', small: true, lead: [170, 274] });
        S.tendon({ x: 338, y: 280, rx: 24, ry: 11 });
        S.bone({ path: 'M40 322 Q170 252 300 278 L362 300', label: 'Tubérosité ischiatique', at: [152, 372] });
        S.muscle({ path: 'M366 294 L640 266 L640 400 L374 400 Z', opacity: 0.45 });
        S.nerve({ x: 472, y: 266, rx: 28, ry: 14, label: 'N. sciatique', lx: 546, ly: 300, anchor: 'start', small: true, lead: [498, 272] });
        S.target({ x: 244, y: 244, r: 13 });
        S.needle({ from: [6, 118], to: [240, 244], label: '21–22 G 90 mm' });
        S.spread({ x: 214, y: 240, rx: 76, ry: 9, label: '3–5 mL' });
        S.label({ x: 320, y: 190, text: 'Ne pas dépasser le\nbord latéral du tendon', cls: 'lbl-target', small: true, anchor: 'start', lead: [300, 258] });
      },
    },
  ],

  checklist: [
    'Nerf sciatique localisé en coupe transverse et distance au bord latéral du tendon notée AVANT toute ponction',
    'Plan d’injection choisi avant de piquer (longitudinal distal→proximal, ou transverse médial→latéral)',
    'Hanche en extension, coussin sous les hanches, pas de flexion pendant le geste',
    'Anesthésique local de courte durée (lidocaïne) privilégié si un bloc sciatique accidentel est possible',
    'Patient prévenu du risque de bloc sciatique transitoire ; accompagnant vérifié, conduite interdite le jour même',
    'Test moteur et sensitif du pied réalisé et tracé avant la sortie ; surveillance 30–45 min',
    'Rendez-vous de rééducation en charge progressive pris avant la sortie',
  ],
});
