/* Chapitre transversal : pharmacologie des injectables en algologie interventionnelle. */
ECHO.register({
  id: 'socle-injectables',
  titre: 'Pharmacologie des injectables en algologie interventionnelle',
  titreCourt: 'Injectables',
  en: 'Pharmacology of injectates for interventional pain medicine: local anesthetics and systemic toxicity, corticosteroids (particulate vs non-particulate), hyaluronic acid, 5% dextrose, platelet-rich plasma, botulinum toxin, perineural adjuvants',
  region: 'socle',
  types: ['socle'],
  niveau: 1,
  grade: 'Forte pour les anesthésiques locaux et la prise en charge de la LAST ; modérée pour les corticoïdes ; faible à contestée pour l’acide hyaluronique, le PRP et la prolothérapie',
  maj: '2026-09',
  motsCles: ['anesthésique local', 'lidocaïne', 'ropivacaïne', 'bupivacaïne', 'lévobupivacaïne', 'LAST', 'intralipide', 'émulsion lipidique', 'corticoïde', 'bétaméthasone', 'Diprostène', 'Célestène', 'méthylprednisolone', 'Dépo-Médrol', 'triamcinolone', 'Kenacort', 'Hexatrione', 'dexaméthasone', 'particulaire', 'non particulaire', 'acide hyaluronique', 'viscosupplémentation', 'dextrose 5 %', 'D5W', 'prolothérapie', 'hydrodissection', 'PRP', 'toxine botulique', 'clonidine', 'chondrotoxicité', 'hyperglycémie'],
  resume: 'Ce chapitre rassemble ce qu’il faut savoir des produits qu’on pousse dans l’aiguille, indépendamment du site. Il traite les anesthésiques locaux (concentrations, latence, durée, doses maximales, chondrotoxicité, cardiotoxicité) et la conduite à tenir devant une toxicité systémique, les corticoïdes injectables disponibles en France (équivalences, particulaire contre non particulaire, effets systémiques, rythme et dose cumulée), l’acide hyaluronique, le dextrose 5 % pour l’hydrodissection et la prolothérapie, le PRP et son cadre réglementaire français, la toxine botulique, et les adjuvants périneuraux. Deux lignes de conduite structurent tout le chapitre : le produit le moins agressif qui fait le travail, et jamais de corticoïde particulaire là où une artère peut être cathétérisée par inadvertance. Les doses citées sont des fourchettes usuelles issues des RCP et des schémas publiés — à reconfronter au RCP en vigueur avant chaque protocole de service.',

  indications: [
    '**Anesthésique local seul** : bloc diagnostique ou pronostique (valeur prédictive avant radiofréquence ou cryoneurolyse), bloc antalgique de fenêtre thérapeutique, tests de contribution douloureuse, hydrodissection mécanique.',
    '**Anesthésique local + corticoïde** : douleur à composante inflammatoire ou compressive documentée — arthropathie inflammatoire, tendinopathie avec bursite, névralgie sur conflit, capsulite. C’est l’association standard de l’HDJ, mais elle n’est pas automatique.',
    '**Corticoïde non particulaire (dexaméthasone)** : tout site où une artère de petit calibre alimente une structure nerveuse ou où une injection intravasculaire accidentelle est possible.',
    '**Acide hyaluronique** : gonarthrose symptomatique en échec des mesures conservatrices, chez un patient chez qui on veut éviter la répétition des corticoïdes — avec un niveau de preuve faible qu’il faut annoncer.',
    '**Dextrose 5 %** : hydrodissection périneurale (syndromes canalaires, nerfs cicatriciels, adhérences), et prolothérapie à plus forte concentration pour les enthésopathies.',
    '**Toxine botulique** : syndrome myofascial réfractaire, syndrome du piriforme, dystonies douloureuses — après échec des infiltrations classiques.',
    '**Sérum physiologique** : hydrolocalisation, ouverture de plan, bras contrôle d’un bloc test, et vecteur neutre quand on ne veut ni bloc ni corticoïde.',
  ],
  contreIndications: [
    '**Absolues** : allergie vraie documentée à la molécule (exceptionnelle avec les amino-amides ; suspecter d’abord les conservateurs ou l’antiseptique), infection cutanée au point de ponction ou sepsis évolutif, arthrite septique suspectée (toute ponction articulaire fébrile est un prélèvement avant d’être une infiltration).',
    '**Corticoïdes — contre-indications relatives fortes** : diabète déséquilibré (HbA1c élevée, hyperglycémies mal contrôlées), immunodépression, prothèse articulaire ou chirurgie programmée sur le site dans les 3 mois, hypertension artérielle non contrôlée, ulcère évolutif, psychose cortico-induite antérieure, grossesse (possible mais à peser, préférer l’abstention ou l’anesthésique local seul).',
    '**Corticoïde particulaire** : proscrit dans tout site à risque de cathétérisme artériel — foraminal, transforaminal, région cervicale profonde, tête et cou, et par extension tout nerf accompagné d’une artère nourricière de petit calibre. Non négociable : les accidents ischémiques médullaires et cérébelleux publiés sont exclusivement liés aux préparations particulaires.',
    '**Hexatrione® (triamcinolone hexacétonide)** : voie **intra-articulaire stricte** selon son RCP. Toute injection péri-articulaire, péri-tendineuse ou périneurale avec ce produit est hors AMM et dangereuse.',
    '**Anesthésiques locaux** : prudence chez l’insuffisant hépatique sévère, l’insuffisant cardiaque, le sujet âgé fragile, et en cas de blocs multiples dans la même séance (le cumul des doses est la vraie contrainte). La bupivacaïne est la plus cardiotoxique du groupe.',
    '**Intra-articulaire** : préférer les concentrations basses d’anesthésique local et éviter les instillations répétées ou prolongées, en raison de la chondrotoxicité dose- et temps-dépendante.',
    '**PRP** : cadre réglementaire français restrictif (voir *Variantes*) — préparation et injection dans un acte médical unique, sans conservation ni sous-traitance ; usage esthétique interdit.',
    'Classe de risque hémorragique du geste : voir le chapitre *Sécurité, consentement, antithrombotiques* — la nature du produit ne modifie pas cette classification, seul le site la détermine.',
  ],
  alternatives: 'Avant de choisir un injectable, poser la question du non-injectable : optimisation médicamenteuse (antalgiques, anti-neuropathiques, AINS courts), kinésithérapie ciblée, TENS, éducation et reconditionnement. L’infiltration n’a de sens que si elle ouvre une fenêtre pour autre chose. Ensuite, la hiérarchie usuelle en HDJ : anesthésique local seul (diagnostic ou fenêtre courte) → anesthésique local + corticoïde (composante inflammatoire) → hydrodissection au dextrose (conflit mécanique périneural) → geste ablatif ou neuromodulateur (radiofréquence pulsée, cryoneurolyse) quand le bloc test est positif mais l’effet trop bref. L’acide hyaluronique, le PRP et la prolothérapie sont des options de seconde intention à niveau de preuve inférieur, à proposer en annonçant l’incertitude.',

  anatomie: `Le comportement d’un injectable dépend d’abord de ce qui l’entoure : c’est cette pharmacologie **locale** qui décide de l’effet, pas la dose totale.

**Anesthésiques locaux.** Ce sont des bases faibles qui bloquent le canal sodique voltage-dépendant sous forme non ionisée. Trois paramètres physico-chimiques expliquent presque tout : le **pKa** (plus il est proche du pH tissulaire, plus la latence est courte — d’où la rapidité de la lidocaïne face à la bupivacaïne), la **liposolubilité** (elle détermine la puissance) et la **liaison protéique** (elle détermine la durée). En milieu **acide** — tissu inflammatoire, abcès — la fraction non ionisée s’effondre et le bloc échoue : c’est la raison pharmacologique de l’échec d’une infiltration en zone inflammatoire aiguë, pas un défaut de technique. L’ajout de **lidocaïne** à un anesthésique de longue durée raccourcit la latence mais **réduit la durée d’action** du produit long : le mélange n’est pas gratuit.

**Corticoïdes.** L’effet local repose sur l’inhibition de la phospholipase A2 et de la cascade inflammatoire, la réduction de la perméabilité capillaire et une action directe sur les fibres C. Deux familles galéniques : les **particulaires** (esters peu solubles — méthylprednisolone acétate, triamcinolone acétonide et hexacétonide, bétaméthasone en suspension) dont les cristaux forment un dépôt de libération prolongée, et les **non particulaires** (dexaméthasone phosphate, solutions vraies) à durée d’action plus courte mais sans risque embolique. Attention au raccourci fréquent : le **phosphate de bétaméthasone** seul est bien une solution, mais les spécialités françaises (Célestène chronodose, Diprostène) associent un ester retard cristallin — elles sont donc **particulaires** et ne remplacent pas la dexaméthasone sur un site à risque artériel. La taille et l’agrégation des cristaux des préparations particulaires sont précisément ce qui provoque les infarctus médullaires et cérébelleux décrits après injection intra-artérielle accidentelle.

**Dextrose 5 %.** Solution isotonique **sans effet anesthésique** : elle sépare mécaniquement le nerf de son enveloppe adhérente sans bloquer la conduction, ce qui laisse intacte toute évaluation fonctionnelle ou toute stimulation ultérieure. C’est aussi pour cette raison qu’elle est le vecteur de choix des hydrodissections répétées.

### Ce qui compte pour le geste

- **Le volume fait la diffusion, la concentration fait le bloc.** Pour couvrir un plan fascial, augmenter le volume en baissant la concentration ; pour un bloc dense sur un nerf identifié, l’inverse. Un même milligramme n’a pas le même effet selon qu’il est dilué dans 3 ou dans 15 mL.
- **La dose maximale se raisonne en mg/kg, pas en mL.** Le piège est le cumul de plusieurs blocs dans la même séance et le passage d’une concentration à l’autre sans recalculer.
- **Le corticoïde ne doit jamais être le produit qui sert à trouver la cible.** On localise à l’anesthésique local ou au sérum, on dépose le corticoïde en fin de geste, quand la diffusion est vue.
- **Concentrations basses d’anesthésique local en intra-articulaire** : la chondrotoxicité est dose- et temps-dépendante, aggravée par l’association aux corticoïdes.
- **Toute injection dans un espace clos** (canal carpien, tunnel tarsien, gaine tendineuse) impose un volume mesuré : c’est la pression, pas le produit, qui fait la complication.`,

  technique: [
    { titre: 'Calculer avant de préparer', texte: 'Poids du patient noté, dose maximale de l’anesthésique local calculée **pour la séance entière** et non pour le geste. Repères usuels : lidocaïne 4,5 mg/kg (7 mg/kg avec adrénaline), ropivacaïne 3 mg/kg, bupivacaïne et lévobupivacaïne 2–2,5 mg/kg. Conversion mémorisée : **1 % = 10 mg/mL**. Chez le sujet âgé, dénutri, insuffisant hépatique ou cardiaque, réduire d’emblée d’un tiers.' },
    { titre: 'Étiqueter, toujours', texte: 'Une seringue non étiquetée est une erreur en attente. Nom, concentration, volume sur chaque seringue, y compris le sérum physiologique. Vérifier nom, dosage et péremption des ampoules **avant** de les aspirer, ampoule montrée et lue à voix haute quand un tiers est présent. Ne jamais préparer les produits d’un autre patient sur le même plan de travail.' },
    { titre: 'Composer le mélange dans le bon ordre', texte: 'Aspirer d’abord l’anesthésique local, puis le corticoïde, et **homogénéiser doucement** — une suspension particulaire décante en quelques minutes et l’agitation vigoureuse ne fait qu’aggraver l’agrégation des cristaux. Ne pas mélanger un corticoïde en suspension avec un antiseptique ou un anesthésique contenant des conservateurs sans nécessité. Purger l’aiguille et le prolongateur : l’air résiduel fausse le volume et crée un artefact qui masque la cible.' },
    { titre: 'Anesthésier le trajet, pas la cible', texte: '1 à 3 mL de lidocaïne 1 % au point de ponction et dans le trajet superficiel. Systématique avant toute aiguille de gros calibre, toute aiguille de radiofréquence et tout trajet long dans le plan. Ce volume compte dans la dose totale.' },
    { titre: 'Aspirer, fractionner, regarder', texte: 'Aspiration avant chaque fraction, injection par **2–3 mL** avec pause, en surveillant la diffusion à l’écran et le patient (élocution, acouphènes, goût métallique). L’absence de nappe visible est un critère d’arrêt : l’injectat part ailleurs. Une résistance anormale ou une douleur fulgurante impose l’arrêt immédiat et le retrait de 1–2 mm.' },
    { titre: 'Déposer le corticoïde en dernier', texte: 'Le corticoïde n’est injecté que lorsque la diffusion de l’anesthésique local a confirmé la position dans le bon plan. Rincer ensuite le prolongateur avec 0,5–1 mL de sérum pour ne pas laisser la dose dans la tubulure — et pour ne pas déposer de cristaux dans le trajet sous-cutané au retrait (risque d’atrophie et de dépigmentation).' },
    { titre: 'Tracer la dose réellement administrée', texte: 'Noter dans le compte rendu : molécule, concentration, volume, dose en milligrammes, site, et la dose cumulée de corticoïde depuis le début du suivi. C’est ce qui permet, six mois plus tard, de savoir si on peut répéter — et c’est ce que réclame un contrôle.' },
  ],

  injectat: `### Anesthésiques locaux — repères usuels

| Molécule | Concentrations usuelles | Latence | Durée du bloc sensitif | Dose maximale usuelle | Commentaire |
|---|---|---|---|---|---|
| Lidocaïne | 0,5–2 % | Courte (quelques minutes) | 1–2 h | 4,5 mg/kg ; 7 mg/kg adrénalinée | Anesthésie cutanée, bloc diagnostique court, test de contribution |
| Ropivacaïne | 0,2–0,75 % | Intermédiaire | 4–8 h (jusqu’à ~12 h selon le site) | 3 mg/kg | Meilleur rapport sécurité/durée en algologie ; moins cardiotoxique que la bupivacaïne ; le moins chondrotoxique aux concentrations basses |
| Bupivacaïne | 0,25–0,5 % | Longue | 6–12 h | 2–2,5 mg/kg | La plus cardiotoxique : réanimation difficile en cas de LAST. À réserver aux situations où sa durée est réellement nécessaire |
| Lévobupivacaïne | 0,25–0,5 % | Longue | 6–12 h | 2–2,5 mg/kg | Énantiomère lévogyre : profil de cardiotoxicité plus favorable que la bupivacaïne racémique, durée comparable |

**Conversion** : 1 % = 10 mg/mL. 10 mL de ropivacaïne 0,5 % = 50 mg. Les doses maximales s’entendent **par séance**, tous blocs confondus, et doivent être réduites chez le sujet âgé, dénutri, insuffisant hépatique ou cardiaque.

### Corticoïdes injectables disponibles en France

| Produit (DCI) | Spécialités françaises | Type | Équivalence anti-inflammatoire | Dose usuelle par site | Commentaire |
|---|---|---|---|---|---|
| Bétaméthasone | **Célestène® chronodose 5,70 mg/mL** (acétate + phosphate disodique) ; **Diprostène®** (dipropionate + phosphate disodique, ≈ 7 mg de bétaméthasone par mL : 5 mg sous forme dipropionate + 2 mg sous forme phosphate — *teneur à revérifier sur le RCP en vigueur*) | Particulaire (suspension) : la fraction ester retard est cristalline | 0,75 mg ≡ 5 mg de prednisolone | 1 mL = 1 ampoule, soit 5,70 mg (Célestène chronodose) ou ≈ 7 mg (Diprostène) de bétaméthasone | Les plus utilisés en France en péri-articulaire et péri-nerveux **hors site à risque artériel**. Ne pas confondre les deux dosages quand on transpose un protocole |
| Méthylprednisolone acétate | Dépo-Médrol® 40 mg/mL | Particulaire | 4 mg ≡ 5 mg de prednisolone | 20–40 mg grosse articulation ; 4–20 mg petite articulation ou site péri-tendineux | Effet de dépôt prolongé ; atrophie sous-cutanée en cas de reflux superficiel |
| Triamcinolone acétonide | Kenacort® retard 40 mg/mL et 80 mg/2 mL | Particulaire | 4 mg ≡ 5 mg de prednisolone | 20–40 mg grosse articulation ; 5–20 mg petite articulation | Flush facial et atrophie cutanée plus fréquents qu’avec les autres |
| Triamcinolone hexacétonide | Hexatrione® 2 % (20 mg/mL, ampoule de 2 mL = 40 mg) | Particulaire, **le moins soluble** | 4 mg ≡ 5 mg de prednisolone | 10–40 mg (0,5–2 mL) selon la taille de l’articulation | **Voie intra-articulaire stricte selon le RCP** — jamais péri-articulaire, péri-tendineuse ni périneurale |
| Dexaméthasone phosphate | Dexaméthasone phosphate 4 mg/mL, solution injectable | **Non particulaire** (solution vraie) | 0,75 mg ≡ 5 mg de prednisolone | 4–10 mg par site | Seul choix acceptable en site à risque artériel ; durée d’action locale plus courte. Voie périneurale **hors AMM** |

### Autres injectables

| Produit | Objectif | Volume / dose usuels | Commentaire |
|---|---|---|---|
| Sérum physiologique 0,9 % | Hydrolocalisation, ouverture de plan, bras contrôle | 0,5–3 mL | Neutre, gratuit, n’entame pas la dose d’anesthésique local |
| Dextrose 5 % | Hydrodissection périneurale | 3–10 mL selon le nerf et l’espace | Ne bloque pas la conduction : préserve tout test fonctionnel ultérieur |
| Dextrose 12,5–25 % | Prolothérapie (enthèses, ligaments) | 1–3 mL par point, séances répétées à 2–6 semaines | Concentrations et protocoles très hétérogènes selon les équipes — à confirmer sur le protocole retenu |
| Acide hyaluronique | Viscosupplémentation | Selon la spécialité : 1 injection unique ou 3 injections hebdomadaires | Genou surtout ; hanche et épaule hors indication de remboursement le plus souvent — vérifier le statut de chaque dispositif |
| PRP | Tendinopathies, arthrose | 2–5 mL selon le site | Cadre réglementaire français contraignant (voir *Variantes*) |
| Toxine botulique A | Syndrome myofascial, piriforme | 100–300 U (BoNT-A) réparties selon le muscle | **Les unités ne sont pas convertibles d’un produit à l’autre** ; hors AMM dans la plupart de ces indications |
| Dexaméthasone (adjuvant périneural) | Prolongation du bloc | 2–4 mg | Prolonge l’analgésie d’environ 4–8 h ; effet plafond autour de 4 mg ; hors AMM par voie périneurale |
| Clonidine (adjuvant périneural) | Prolongation du bloc | 0,5–1 µg/kg (usuellement 30–100 µg) | Gain d’environ 2 h seulement ; hypotension, bradycardie, sédation — rapport bénéfice/risque défavorable en HDJ |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg, bupivacaïne et lévobupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). En pratique d’algologie, on n’approche ces plafonds que lorsqu’on enchaîne plusieurs blocs dans la même séance : c’est le **cumul** qu’il faut surveiller, pas le geste isolé.

**Dose cumulée de corticoïde** : usage largement partagé — pas plus de **3 à 4 infiltrations par an sur un même site**, espacées d’au moins **3 mois**, et prudence dès qu’on additionne plusieurs sites dans une même séance (le passage systémique s’additionne, lui). Ce seuil relève du consensus professionnel, pas d’un essai : le dire tel quel.`,

  variantes: [
    { titre: 'Toxicité systémique des anesthésiques locaux (LAST) — reconnaître et traiter', texte: `La toxicité systémique est **rare mais brutale**, et sa prévention repose sur des gestes ordinaires : dose calculée en mg/kg, aspiration avant chaque fraction, injection lente et fractionnée, échoguidage, et contact verbal maintenu avec le patient pendant l’injection.

**Signes, dans l’ordre habituel**
1. **Prodromes neurologiques** : goût métallique, paresthésies péribuccales, acouphènes, vertiges, dysarthrie, agitation ou somnolence inhabituelle. Ce sont eux qu’il faut guetter — d’où l’intérêt de faire parler le patient pendant l’injection.
2. **Excitation centrale** : myoclonies, convulsions tonico-cloniques.
3. **Dépression centrale** : coma, apnée.
4. **Cardiovasculaire** : hypertension puis hypotension, bradycardie, troubles de conduction, tachycardie ou fibrillation ventriculaire, asystolie. La **bupivacaïne** est la plus redoutable à ce stade, avec des réanimations prolongées.

Le tableau peut être **atypique** : début cardiovasculaire d’emblée, ou survenue retardée de 15 à 30 minutes après la fin de l’injection — le patient doit donc rester surveillé.

**Conduite à tenir (check-list ASRA, version 2020)**
- **Arrêter l’injection**, appeler à l’aide, demander le kit d’émulsion lipidique.
- **Ventiler en oxygène 100 %**, contrôler les voies aériennes ; éviter l’hyperventilation excessive.
- **Convulsions** : benzodiazépine en première intention. Éviter le propofol chez un patient instable sur le plan hémodynamique.
- **Émulsion lipidique 20 %** dès les premiers signes sérieux : patient **< 70 kg** — bolus **1,5 mL/kg** en 2–3 min puis perfusion **0,25 mL/kg/min** ; patient **> 70 kg** — bolus **100 mL** en 2–3 min puis **250 mL** sur 15–20 min. Si l’instabilité persiste : **répéter le bolus et doubler le débit** de perfusion. Poursuivre au moins 10 à 15 minutes après la stabilisation hémodynamique. **Plafond usuel de dose totale ≈ 12 mL/kg**, rarement atteint. L’ordre bolus/perfusion et le mode de perfusion ne sont pas critiques : ne pas perdre de temps à optimiser la procédure.
- **Réanimation adaptée** : adrénaline à doses **réduites** (bolus ≤ 1 µg/kg), éviter vasopressine, inhibiteurs calciques, bêtabloquants et tout nouvel anesthésique local.
- **Envisager la CEC / ECMO** en cas de réfractarité : le pronostic reste bon si la circulation est maintenue le temps de la redistribution du toxique.
- **Surveillance prolongée** après l’événement : plusieurs heures en unité surveillée, et non un retour immédiat en salle d’attente.

**Ce qui doit être dans la salle** : émulsion lipidique 20 % avec la posologie affichée, chariot d’urgence, oxygène, moyen d’appel. Une check-list plastifiée sur le mur vaut mieux qu’un protocole dans un classeur.` },
    { titre: 'Corticoïdes : particulaire ou non particulaire', texte: `**La règle** : dans tout site où une artère de petit calibre peut être cathétérisée par la pointe de l’aiguille — foramen, région cervicale, tête et cou, voisinage d’une artère nourricière nerveuse — on utilise **exclusivement** un corticoïde **non particulaire** (dexaméthasone). Les cristaux des préparations particulaires s’agrègent et embolisent : les cas publiés d’infarctus médullaires, de paraplégie brutale et d’infarctus de la circulation postérieure après injection épidurale transforaminale sont tous survenus avec des préparations particulaires, et aucun n’a été rapporté avec un produit non particulaire.

**Efficacité comparée** : les revues systématiques et méta-analyses comparant particulaire et non particulaire en épidural transforaminal ne retrouvent **pas de différence cliniquement pertinente** sur la douleur à court terme. Autrement dit, on ne perd rien à choisir la sécurité — c’est l’argument à opposer à l’habitude.

**Où le particulaire reste légitime** : sites périphériques compressibles sans artère terminale (bourse sous-acromiale, gaine tendineuse, articulation périphérique), quand une durée d’action prolongée est réellement recherchée. Et même là, la question à se poser d’abord est : *ai-je besoin d’un corticoïde ?*

**Effets systémiques à annoncer et à surveiller**
- **Hyperglycémie** : élévation significative dès J1, retour à la valeur de base en **une à deux semaines** dans les études de cohorte, avec une élévation plus marquée et plus durable chez le diabétique. Contrôle glycémique capillaire renforcé pendant 48–72 h, et avertissement systématique du patient diabétique. Une fraction non négligeable de patients voit son HbA1c monter plus que prévu après une injection intra-articulaire.
- **Flush facial** : fréquent (rapporté jusqu’à 15 %, et davantage dans certaines séries), plus fréquent chez la femme, plus souvent avec triamcinolone et méthylprednisolone ; il dure 1 à 3 jours et il est bénin — mais un patient non prévenu appellera.
- **Poussée douloureuse post-infiltration** (*post-injection flare*) : synovite microcristalline dans les heures qui suivent, régressive en 2–3 jours. Glace, antalgiques, information préalable.
- **Freinage de l’axe corticotrope** : réel après infiltration, transitoire, avec normalisation en quelques semaines. Il justifie de ne pas multiplier les sites dans une même séance et d’espacer les gestes.
- Autres : insomnie, HTA transitoire, atrophie et dépigmentation cutanées au trajet, rupture tendineuse en cas d’injection intratendineuse (à ne jamais faire), ostéonécrose (exceptionnelle, dose-dépendante).

**Cartilage** : l’essai randomisé de McAlindon (JAMA 2017), triamcinolone intra-articulaire tous les 3 mois pendant 2 ans dans la gonarthrose, montre une **perte cartilagineuse significativement plus importante** que sous placebo, **sans bénéfice sur la douleur**. C’est l’argument le plus solide contre l’infiltration corticoïde systématiquement répétée du genou — à mettre en balance patient par patient.

**Grossesse et allaitement** : les corticoïdes ne sont pas malformatifs et le passage lacté après injection locale est négligeable ; le geste reste néanmoins à peser (bénéfice réel, alternative possible) et à décaler quand il peut l’être.` },
    { titre: 'Acide hyaluronique (viscosupplémentation)', texte: `**Indication principale** : gonarthrose symptomatique, chez un patient en échec des mesures conservatrices et chez qui on veut limiter les corticoïdes. Hanche et épaule : usage plus marginal, statut de remboursement et niveau de preuve inférieurs.

**Niveau de preuve : faible et contesté, il faut le dire au patient.** Les recommandations internationales divergent ouvertement — NICE, AAOS et ACR recommandent de **ne pas** pratiquer ces injections dans la gonarthrose, tandis qu’OARSI les retient. Une méta-analyse de grande ampleur publiée dans le *BMJ* en 2022 conclut à l’absence de bénéfice cliniquement pertinent sur la douleur, avec un signal d’effets indésirables. La position honnête est donc : option de seconde intention, effet incertain, à réserver aux patients qui l’ont déjà utilisée avec bénéfice ressenti ou chez qui les corticoïdes sont contre-indiqués — et jamais présentée comme un traitement de fond.

**En pratique** : protocole selon la spécialité (injection unique ou série de trois injections hebdomadaires), asepsie stricte, pas de mélange avec un corticoïde dans la même seringue, information sur la poussée inflammatoire post-injection possible (pseudo-septique, rare mais impressionnante).` },
    { titre: 'Dextrose 5 % : hydrodissection et prolothérapie', texte: `**Hydrodissection périneurale au dextrose 5 % (D5W).** Le principe est mécanique : séparer le nerf de l’enveloppe qui l’étrangle ou qui adhère à lui, sans le bloquer. C’est la solution de choix quand on veut conserver l’évaluation fonctionnelle du patient, quand le geste doit être répété, ou quand on refuse le corticoïde (diabétique, injections antérieures nombreuses).

Le **syndrome du canal carpien** est le modèle où la preuve est la plus solide : plusieurs essais randomisés en double aveugle montrent, après injection périneurale de D5W, une réduction significative de la douleur et du handicap, une amélioration électrophysiologique et une diminution de la surface de section du nerf médian, maintenues à **6 mois**. D’autres essais et un travail comparatif direct contre corticoïde placent le D5W au moins au niveau du corticoïde à moyen terme, avec un profil de tolérance favorable, et montrent un bénéfice de l’association D5W après corticoïde par rapport au corticoïde seul. Preuve **modérée** dans cette indication, **faible** pour les autres nerfs (ulnaire au coude, tibial postérieur, nerfs cicatriciels) où l’on extrapole.

Volumes usuels : 3 à 10 mL selon le nerf et l’espace à ouvrir, en injection circonférentielle sous contrôle échographique continu, séances répétables à 2–4 semaines.

**Prolothérapie au dextrose hypertonique** (12,5 à 25 %) sur les enthèses et les ligaments : mécanisme d’irritation contrôlée puis de cicatrisation, protocoles très hétérogènes, littérature de qualité inégale. À proposer avec réserve et à protocoliser explicitement si le centre s’y engage — les concentrations et les rythmes cités varient trop d’une équipe à l’autre pour être repris tels quels (à confirmer sur le protocole retenu).` },
    { titre: 'PRP — place clinique et cadre réglementaire français', texte: `**Cadre réglementaire — le point structurant en France.** Le plasma riche en plaquettes est un **produit issu du sang humain** : sa préparation et son utilisation relèvent du code de la santé publique (article L.1221-8). L’ANSM a rappelé que l’usage des concentrés plaquettaires autologues **à visée esthétique est interdit**. L’usage à visée **thérapeutique** est possible, mais sous conditions strictes : préparation et administration au cours d’un **acte médical unique**, sans conservation du produit et sans préparation par un tiers ou un établissement extérieur. Autrement dit : centrifugation et injection dans le même temps, sur place, par le médecin qui réalise le geste. Un centre qui veut proposer du PRP doit sécuriser ce point **avant** d’acheter la centrifugeuse — c’est le seul aspect du sujet qui n’est pas discutable.

**Place clinique** : littérature abondante mais hétérogène (méthodes de préparation, concentrations plaquettaires, présence ou non de leucocytes, nombre de séances non standardisés), ce qui interdit toute comparaison propre entre études. Le signal est le plus favorable dans les tendinopathies chroniques et, pour certains auteurs, dans la gonarthrose débutante ; il reste insuffisant pour en faire un standard. Aucun remboursement.

**Position raisonnable en HDJ douleur** : option de dernière ligne, encadrée par un protocole écrit, une information claire sur le niveau de preuve et sur le reste à charge, et une évaluation systématique des résultats — sinon on empile des gestes non évaluables.` },
    { titre: 'Toxine botulique', texte: `**Mécanisme** : blocage de la libération présynaptique d’acétylcholine (effet myorelaxant), auquel s’ajoute un effet antinociceptif propre, indépendant de la relaxation musculaire, sur la libération de neuropeptides.

**Indications en algologie interventionnelle** : syndrome myofascial réfractaire aux infiltrations de points-gâchettes classiques, **syndrome du piriforme**, dystonies douloureuses, certaines douleurs neuropathiques localisées. Dans la plupart de ces situations, l’usage est **hors AMM** en France : information et traçabilité renforcées, décision argumentée dans le dossier.

**Doses** : dans le syndrome du piriforme, les séries et essais publiés utilisent des doses de **100 à 300 U de toxine botulique de type A** dans le muscle, sous guidage (échographique, scanographique, EMG ou radioscopique). Une revue systématique récente ne réunit qu’une petite quinzaine d’études, dont trois essais randomisés et environ 150 patients au total : réduction de la douleur rapportée dans la plupart, mais hétérogénéité telle qu’aucune quantification fiable n’est possible, effets indésirables légers. Preuve **faible**, à annoncer comme telle.

**Piège majeur** : les unités **ne sont pas convertibles** entre spécialités. Ne jamais transposer une dose lue dans un article sans vérifier le produit utilisé. Dans le syndrome myofascial, la tendance actuelle est aux **doses basses**, en raison des effets indésirables dose-dépendants (faiblesse musculaire, perte de force, amincissement du muscle traité).` },
    { titre: 'Adjuvants périneuraux : ce qui vaut la peine', texte: `**Dexaméthasone périneurale** : prolonge l’analgésie d’environ **4 à 8 heures** selon les méta-analyses, réduit la consommation précoce d’opioïdes. Un effet **plafond autour de 4 mg** a été décrit, et de faibles doses périneurales (1–2 mg) font aussi bien qu’une dose intraveineuse plus élevée. Usage **hors AMM** par voie périneurale, à tracer. En algologie chronique, l’intérêt est marginal : on cherche des semaines, pas des heures — l’adjuvant a du sens pour un bloc test qu’on veut prolonger, pas pour un traitement de fond.

**Clonidine périneurale** : gain d’environ **2 heures** seulement, au prix d’hypotension, de bradycardie et de sédation. Rapport bénéfice/risque défavorable en hôpital de jour où l’on veut faire sortir le patient : à écarter en routine.

**Dexmédétomidine** : supérieure à la clonidine dans les méta-analyses comparatives, inférieure à la dexaméthasone ; mêmes réserves hémodynamiques et même statut hors AMM.

**Adrénaline** : intérêt réel comme **marqueur d’injection intravasculaire** et pour réduire la résorption systémique (elle augmente la dose maximale admissible de lidocaïne), mais à proscrire dans tout territoire à vascularisation terminale et en présence d’une artère nourricière nerveuse.

Position d’ensemble : aucun adjuvant périneural n’a d’AMM pour cet usage, et aucun ne transforme un bloc court en traitement durable. Quand la durée est le problème, la réponse est un geste (radiofréquence pulsée, cryoneurolyse, hydrodissection), pas un additif.` },
  ],

  pearls: [
    'Calculer la dose maximale en mg/kg **pour la séance**, pas pour le geste : c’est le cumul des blocs successifs qui expose à la toxicité, jamais l’infiltration isolée.',
    'Faire parler le patient pendant l’injection : goût métallique, acouphènes et paresthésies péribuccales sont les seuls signes précoces exploitables de LAST.',
    'Localiser au sérum physiologique ou à l’anesthésique local, déposer le corticoïde en dernier, quand la diffusion est vue.',
    'Site à risque artériel = dexaméthasone, sans discussion : les méta-analyses ne montrent aucune perte d’efficacité par rapport au particulaire.',
    'Le dextrose 5 % permet d’hydrodisséquer sans bloquer : indispensable quand on veut garder un test fonctionnel ou une stimulation exploitable.',
    'Prévenir systématiquement du flush facial, de la poussée douloureuse des 48 h et de l’hyperglycémie chez le diabétique : trois appels évités sur trois patients.',
    'Rincer le prolongateur au sérum avant de retirer : la dose reste sinon dans la tubulure, et les cristaux se déposent dans le trajet sous-cutané.',
  ],
  pieges: [
    'Utiliser l’Hexatrione® ailleurs qu’en intra-articulaire strict : hors AMM, et c’est la préparation la moins soluble donc la plus délétère en dehors de l’articulation.',
    'Mélanger lidocaïne et bupivacaïne « pour avoir le meilleur des deux » : on raccourcit surtout la durée du produit long.',
    'Injecter en zone inflammatoire aiguë et conclure à un échec de technique : c’est le pH acide qui empêche le bloc.',
    'Répéter les corticoïdes intra-articulaires du genou sans réévaluer : perte cartilagineuse démontrée à 2 ans sans bénéfice antalgique dans l’essai de McAlindon.',
    'Présenter l’acide hyaluronique ou le PRP comme des traitements établis : les recommandations internationales divergent ouvertement pour le premier, la littérature est ininterprétable pour le second.',
    'Transposer une dose de toxine botulique d’un article à un autre produit : les unités ne sont pas convertibles.',
    'Ne pas disposer d’émulsion lipidique 20 % dans la salle, ou l’avoir sans la posologie affichée.',
  ],
  complications: [
    '**LAST** : prodromes neurologiques puis convulsions, puis effondrement cardiovasculaire. Arrêt de l’injection, oxygène, benzodiazépine, **émulsion lipidique 20 %** (bolus 1,5 mL/kg si < 70 kg, 100 mL si > 70 kg, puis perfusion), adrénaline à doses réduites, surveillance prolongée. Peut être retardé de 15–30 min.',
    '**Réaction vagale** : fréquente, souvent confondue avec un début de LAST ; décubitus, jambes surélevées, réévaluation. Prévenir par le décubitus et l’information.',
    '**Hyperglycémie post-corticoïde** : pic à J1, retour à la base en 1 à 2 semaines, plus marqué et plus long chez le diabétique. Surveillance capillaire 48–72 h et consigne écrite.',
    '**Flush facial**, insomnie, HTA transitoire, poussée douloureuse microcristalline des 48 h : bénins, à annoncer avant le geste.',
    '**Atrophie et dépigmentation cutanées** au trajet en cas de reflux d’un corticoïde particulaire : rincer le prolongateur, éviter le dépôt superficiel.',
    '**Accident ischémique médullaire ou cérébelleux** après injection intra-artérielle de corticoïde particulaire : catastrophique, décrit uniquement avec les préparations particulaires — d’où l’interdit absolu en site à risque.',
    '**Arthrite septique et infection du site** : rare mais grave ; toute articulation chaude et fébrile après infiltration est une urgence de ponction et de mise en culture, pas une « poussée ».',
    '**Rupture tendineuse** après injection intratendineuse de corticoïde : ne jamais injecter dans le tendon, toujours autour.',
    '**Chondrolyse** : concentrations élevées d’anesthésique local en intra-articulaire, a fortiori répétées ou en association au corticoïde.',
  ],
  securite: [
    'Émulsion lipidique 20 % disponible et posologie affichée dans la salle dès qu’un anesthésique local est utilisé ; chariot d’urgence vérifié.',
    'Dose maximale calculée en mg/kg pour la séance entière, réduite d’un tiers chez le sujet âgé, dénutri, insuffisant hépatique ou cardiaque.',
    'Aspiration avant chaque fraction, injection lente par 2–3 mL, contact verbal maintenu ; l’échoguidage réduit le risque sans le supprimer.',
    'Corticoïde non particulaire obligatoire dans tout site à risque de cathétérisme artériel ; Hexatrione® en intra-articulaire strict.',
    'Dose cumulée de corticoïde tracée dans le dossier ; usage partagé de 3 à 4 gestes par an et par site, espacés d’au moins 3 mois.',
    'Glycémie capillaire renforcée 48–72 h chez le diabétique, avec consigne écrite remise ; report du geste si l’équilibre glycémique est mauvais.',
    'Seringues étiquetées, produits vérifiés à l’ampoule, jamais de préparation croisée entre deux patients.',
    'Usage hors AMM (dexaméthasone périneurale, toxine botulique dans le myofascial et le piriforme, prolothérapie) : information spécifique, justification et traçabilité dans le dossier.',
  ],

  suivi: `- **J0** : EN avant et 30 minutes après (valeur diagnostique du bloc anesthésique), tolérance immédiate, absence de signe neurologique ou cardiovasculaire avant la sortie. Noter la dose réellement administrée en milligrammes.
- **J1–J3** : fenêtre des effets indésirables attendus — poussée douloureuse microcristalline, flush, hyperglycémie, insomnie. Le patient doit savoir ce qui est normal et ce qui doit faire appeler (fièvre, douleur croissante et articulation chaude, déficit).
- **J15–J30** : effet du corticoïde à son plateau. EN, fonction, consommation d’antalgiques, qualité du sommeil. C’est là qu’on décide : répéter, changer de produit, ou passer à un geste ablatif si le bloc test a été franchement positif mais bref.
- **3 mois** : durée d’effet, décision de répétition (dose cumulée annuelle), réévaluation de l’indication elle-même. Un troisième geste identique sans bénéfice tracé aux deux premiers n’a pas de justification.
- **Registre des doses** : tenir, par patient, le cumul annuel de corticoïde tous sites confondus. C’est le seul moyen de tenir la règle des 3–4 gestes par an quand plusieurs sites sont traités.`,

  evidence: `- **Anesthésiques locaux — preuve forte** sur la pharmacologie et les doses maximales, qui relèvent des RCP et de recommandations professionnelles constantes. Le point réellement documenté et actionnable est la **prise en charge de la LAST** : la check-list ASRA (version 2020) fixe les doses d’émulsion lipidique et l’ordre des actions, et précise que le mode d’administration importe moins que la précocité.
- **Chondrotoxicité des anesthésiques locaux — preuve expérimentale convergente, forte in vitro**. Les revues systématiques montrent un effet **type-, dose- et temps-dépendant** : bupivacaïne et lidocaïne plus toxiques que mépivacaïne et ropivacaïne, ropivacaïne à ≤ 0,5 % la moins toxique, absence d’effet significatif aux concentrations les plus basses, et **aggravation par l’association aux corticoïdes**. La transposition clinique reste extrapolée : trou assumé.
- **Corticoïdes particulaires vs non particulaires — preuve suffisante pour trancher**. Pas de différence d’efficacité cliniquement pertinente dans les revues systématiques et méta-analyses en épidural transforaminal ; accidents emboliques rapportés uniquement avec les particulaires. La décision est donc entièrement du côté de la sécurité.
- **Corticoïde intra-articulaire répété — signal négatif solide** : l’essai randomisé de McAlindon (JAMA 2017) montre une perte cartilagineuse supérieure sous triamcinolone trimestrielle pendant 2 ans, sans bénéfice antalgique.
- **Effets systémiques des corticoïdes — preuve observationnelle cohérente** : hyperglycémie retournant à la base en 1 à 2 semaines dans les cohortes, plus marquée chez le diabétique ; flush facial fréquent, plus souvent chez la femme et avec la triamcinolone.
- **Acide hyaluronique — preuve faible et discordante** : recommandations internationales opposées (NICE, AAOS, ACR contre ; OARSI pour), méta-analyse du *BMJ* 2022 concluant à l’absence de bénéfice cliniquement pertinent. À présenter comme une option incertaine.
- **Dextrose 5 % périneural — preuve modérée dans le canal carpien**, avec plusieurs essais randomisés en double aveugle positifs à 6 mois sur douleur, fonction, électrophysiologie et section du nerf. Preuve **faible** pour les autres nerfs, où l’on extrapole.
- **PRP — preuve inexploitable en l’état** : hétérogénéité des préparations et des protocoles. Le point dur en France n’est d’ailleurs pas la preuve mais le **cadre réglementaire** (acte unique, sans conservation ni sous-traitance ; usage esthétique interdit).
- **Toxine botulique dans le piriforme — preuve faible** : revue systématique récente réunissant sept études dont trois essais randomisés, environ 150 patients, doses de 100 à 300 U, réduction de la douleur rapportée mais hétérogénéité interdisant toute quantification.
- **Adjuvants périneuraux — preuve modérée mais bénéfice de faible portée en douleur chronique** : dexaméthasone périneurale +4 à 8 h d’analgésie avec effet plafond vers 4 mg, clonidine +2 h avec effets hémodynamiques. Aucun n’a d’AMM par voie périneurale.`,

  references: [
    { titre: 'American Society of Regional Anesthesia and Pain Medicine local anesthetic systemic toxicity checklist: 2020 version', annee: '2020', pmid: '33148630', type: 'reco', verif: true, note: 'Doses d’émulsion lipidique 20 % et séquence de prise en charge ; revue exacte à confirmer.' },
    { auteurs: 'McAlindon TE, et al.', titre: 'Effect of intra-articular triamcinolone vs saline on knee cartilage volume and pain in patients with knee osteoarthritis: a randomized clinical trial', revue: 'JAMA', annee: '2017', type: 'ECR', verif: true, note: 'Perte cartilagineuse supérieure sous triamcinolone trimestrielle pendant 2 ans, sans bénéfice sur la douleur.' },
    { auteurs: 'Jayaram P, et al.', titre: 'Chondrotoxic effects of local anesthetics on human knee articular cartilage: a systematic review', revue: 'PM&R', annee: '2019', doi: '10.1002/pmrj.12007', type: 'revue systématique', verif: true },
    { auteurs: 'Kreuz PC, Steinwachs M, Angele P', titre: 'Single-dose local anesthetics exhibit a type-, dose-, and time-dependent chondrotoxic effect on chondrocytes and cartilage: a systematic review of the current literature', revue: 'Knee Surg Sports Traumatol Arthrosc', type: 'revue systématique', verif: false, note: 'Auteurs et revue cités de mémoire, année à confirmer — c’est la source de la hiérarchie de chondrotoxicité entre molécules.' },
    { titre: 'Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial', revue: 'Mayo Clin Proc', annee: '2017', type: 'ECR', verif: true, note: 'D5W périneural : douleur, fonction, électrophysiologie et section du nerf médian améliorées à 6 mois.' },
    { titre: 'Impact of intra-articular corticosteroid injection on glycemic control: a population-based cohort study', revue: 'Clinical Diabetes', annee: '2024', type: 'cohorte', verif: true, note: 'Retour de la glycémie à la valeur de base en 1 à 2 semaines ; élévation d’HbA1c plus marquée que prévu chez une minorité de patients.' },
    { titre: 'Local and systemic side effects of corticosteroid injections for musculoskeletal indications', revue: 'AJR Am J Roentgenol', type: 'revue', verif: false, note: 'Flush facial, effets systémiques, complications locales ; revue, année et DOI à confirmer.' },
    { titre: 'Local anesthetic peripheral nerve block adjuvants for prolongation of analgesia: a systematic qualitative review', revue: 'PLOS One', annee: '2015', type: 'revue systématique', verif: false, note: 'Revue, année et DOI à confirmer.' },
    { titre: 'Perineural adjuncts for peripheral nerve block', revue: 'BJA Education', annee: '2019', url: 'https://www.bjaed.org/article/S2058-5349(19)30079-4/fulltext', type: 'revue', verif: true, note: 'Dexaméthasone +4–8 h, clonidine +2 h, effet plafond de la dexaméthasone vers 4 mg.' },
    { titre: 'Use of botulinum neurotoxin in the treatment of piriformis syndrome: a systematic review', annee: '2022', type: 'revue systématique', verif: false, note: 'Sept études, trois ECR, ~150 patients, doses 100–300 U ; revue de publication à confirmer.' },
    { titre: 'Hexatrione® 2 % (hexacétonide de triamcinolone), suspension injectable intra-articulaire — résumé des caractéristiques du produit', revue: 'Base de données publique des médicaments (ANSM)', url: 'https://base-donnees-publique.medicaments.gouv.fr/extrait.php?specid=62232169', type: 'RCP', verif: true, note: 'Voie intra-articulaire stricte ; 10 à 40 mg selon la taille de l’articulation.' },
    { titre: 'Médecine esthétique : l’usage de concentrés plaquettaires autologues (CPA) ou plasma riche en plaquettes (PRP) à visée esthétique est interdit — point d’information', revue: 'ANSM', annee: '2018', type: 'position réglementaire', verif: false, note: 'Rappel du cadre de l’article L.1221-8 du code de la santé publique ; usage thérapeutique possible en acte unique, sans conservation ni préparation par un tiers. Référence exacte à reconfirmer.' },
    { titre: 'L’acide hyaluronique dans l’arthrose de genou ?', revue: 'CBIP — Folia Pharmacotherapeutica', url: 'https://www.cbip.be/fr/articles/4186?folia=4179', type: 'synthèse', verif: true, note: 'Synthèse des recommandations divergentes (NICE, AAOS, ACR contre ; OARSI pour) et de la méta-analyse BMJ 2022.' },
  ],
  videos: [
    { titre: 'Local anesthetic systemic toxicity (LAST)', source: 'NYSORA', url: 'https://nysora.com/anesthesia/local-anesthetic-systemic-toxicity-last/', note: 'Prévention, reconnaissance, traitement' },
    { titre: 'Checklist for treatment of local anesthetic systemic toxicity', source: 'ASRA Pain Medicine', url: 'https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2020/11/01/checklist-for-treatment-of-local-anesthetic-systemic-toxicity', note: 'À imprimer et afficher en salle' },
    { titre: 'Clinical pharmacology of local anesthetics', source: 'NYSORA', url: 'https://www.nysora.com/topics/pharmacology/clinical-pharmacology-local-anesthetics/' },
  ],

  scenes: [
    {
      id: 'inj-perineural', section: 'sonoanatomie', titre: 'Ce qu’on cherche à voir : la nappe périneurale',
      legende: 'Injectat déposé sous le fascia, autour du nerf, qu’il décolle et entoure sans le gonfler. La nappe hypoéchogène circonférentielle, le nerf resté de taille normale et une diffusion qui s’étend le long du plan sont les trois éléments du critère de fin.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe transversale', type: 'linéaire' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.fascia({ points: [[0, 77], [640, 75]], width: 1.6 });
        S.muscle({ path: 'M0 76 L640 76 L640 150 L0 158 Z', label: 'Muscle superficiel', at: [110, 118], opacity: 0.45 });
        S.fascia({ points: [[0, 158], [640, 150]], width: 2, label: 'Fascia', at: [78, 146], small: true });
        S.muscle({ path: 'M0 158 L640 150 L640 300 L0 308 Z', label: 'Muscle profond', at: [110, 276], opacity: 0.4 });
        S.artery({ x: 232, y: 208, r: 15, label: 'Artère satellite', lx: 232, ly: 262, small: true, lead: [232, 224] });
        S.nerve({ x: 348, y: 200, rx: 21, ry: 15, label: 'Nerf', lx: 476, ly: 198, anchor: 'start', small: true, lead: [424, 200] });
        S.bone({ path: 'M0 312 Q200 302 340 306 Q500 310 640 302' });
        S.spreadPath({ path: 'M276 200 A72 32 0 1 0 420 200 A72 32 0 1 0 276 200 Z M325 200 A23 17 0 1 1 371 200 A23 17 0 1 1 325 200 Z', at: [348, 248], label: 'Nappe circonférentielle' });
      },
    },
    {
      id: 'inj-intraneurale', section: 'technique', titre: 'Injection intraneurale : la reconnaître en une seconde',
      legende: 'Trois signes simultanés : douleur fulgurante, résistance anormale à l’injection, et surtout gonflement du nerf qui augmente de calibre à l’écran au lieu d’être entouré. Arrêt immédiat, retrait de 1 à 2 mm, réinjection d’un test de 0,5 mL, surveillance neurologique et traçabilité.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe transversale', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.fascia({ points: [[0, 77], [640, 75]], width: 1.6 });
        S.muscle({ path: 'M0 76 L640 76 L640 290 L0 298 Z', label: 'Muscle', at: [92, 264], opacity: 0.4 });
        S.nerve({ x: 200, y: 196, rx: 20, ry: 15, label: 'Calibre normal', lx: 200, ly: 250, small: true, lead: [200, 212] });
        S.nerve({ x: 400, y: 196, rx: 40, ry: 30, label: 'Nerf gonflé par l’injectat', lx: 400, ly: 262, small: true, lead: [400, 228] });
        S.bone({ path: 'M0 302 Q200 292 340 296 Q500 300 640 292' });
        S.needle({ from: [614, 108], to: [412, 190], label: 'Pointe intrafasciculaire' });
        S.label({ x: 400, y: 140, text: 'ARRÊT IMMÉDIAT', cls: 'lbl-target' });
      },
    },
    {
      id: 'inj-artere', section: 'technique', titre: 'Voisinage artériel : pourquoi le non-particulaire',
      legende: 'Nerf accompagné d’une artère nourricière : la pointe peut cathétériser un vaisseau de petit calibre sans reflux à l’aspiration. Corticoïde non particulaire obligatoire, aiguille abordée du côté opposé à l’artère, Doppler avant la ponction, injection fractionnée.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe transversale', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.fascia({ points: [[0, 73], [640, 71]], width: 1.6 });
        S.muscle({ path: 'M0 72 L640 72 L640 286 L0 294 Z', label: 'Muscle', at: [96, 258], opacity: 0.4 });
        S.artery({ x: 404, y: 166, r: 16, label: 'Artère nourricière', lx: 470, ly: 140, anchor: 'start', small: true, lead: [419, 161] });
        S.nerve({ x: 318, y: 202, rx: 19, ry: 14, label: 'Nerf', lx: 196, ly: 202, anchor: 'end', small: true, lead: [298, 202] });
        S.bone({ path: 'M0 298 Q200 288 340 292 Q500 296 640 288' });
        S.needle({ from: [8, 96], to: [284, 198], label: 'Abord opposé à l’artère' });
        S.spreadPath({ path: 'M266 202 A52 26 0 1 0 370 202 A52 26 0 1 0 266 202 Z M296 202 A22 16 0 1 1 340 202 A22 16 0 1 1 296 202 Z', at: [318, 262], label: 'Corticoïde non particulaire' });
      },
    },
  ],

  checklist: [
    'Poids noté et dose maximale d’anesthésique local calculée pour la séance entière, tous blocs confondus',
    'Émulsion lipidique 20 % présente dans la salle, non périmée, posologie affichée',
    'Corticoïde adapté au site : non particulaire obligatoire si risque de cathétérisme artériel ; Hexatrione® en intra-articulaire strict',
    'Dose cumulée de corticoïde de l’année vérifiée dans le dossier avant de reprogrammer un geste',
    'Patient diabétique : équilibre glycémique vérifié, consigne de surveillance capillaire 48–72 h remise',
    'Usage hors AMM (dexaméthasone périneurale, toxine botulique, prolothérapie) tracé et justifié dans le dossier',
    'Seringues étiquetées, ampoules vérifiées, prolongateur purgé',
    'Dose réellement administrée (molécule, concentration, volume, milligrammes) reportée dans le compte rendu',
  ],
});
