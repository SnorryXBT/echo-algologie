/* Fiche : ACNES — syndrome de piégeage du nerf cutané antérieur abdominal. */
ECHO.register({
  id: 'acnes-nevralgie-parietale-abdominale',
  titre: 'ACNES — piégeage du nerf cutané antérieur abdominal',
  titreCourt: 'ACNES (paroi abdominale)',
  en: 'Anterior cutaneous nerve entrapment syndrome (ACNES) — ultrasound-guided rectus sheath / abdominal cutaneous nerve infiltration, pulsed radiofrequency, chemical neurolysis, anterior neurectomy',
  region: 'rachis-bassin',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée pour l’infiltration diagnostique et la neurectomie (ECR hollandais) ; faible pour la PRF et pour la voie échoguidée elle-même',
  maj: '2026-09',
  motsCles: ['ACNES', 'douleur pariétale abdominale', 'signe de Carnett', 'bord latéral du droit', 'gaine des droits', 'rectus sheath block', 'douleur abdominale chronique', 'neurectomie antérieure', 'TAP', 'ligne semi-lunaire'],
  resume: 'Le piégeage de la branche cutanée antérieure d’un nerf intercostal (T7–T12) à son passage dans l’anneau fibreux de la gaine antérieure du droit, au bord latéral du muscle. C’est la cause de douleur abdominale chronique la plus fréquemment prise pour une douleur viscérale, avec à la clé des explorations digestives répétées et parfois une laparoscopie blanche. Le diagnostic est clinique : douleur d’un point de moins de 2 cm au bord latéral du droit, **signe de Carnett positif**, troubles sensitifs métamériques en regard — et il se confirme par une infiltration test, seul geste dont la valeur diagnostique ait été validée par un essai randomisé. Techniquement, c’est un des gestes les plus simples de ce mémo : sonde haute fréquence sur un point que le patient désigne du doigt, aiguille dans le plan, 5 à 10 mL. La difficulté n’est pas dans le geste, elle est dans le fait d’y penser.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, abdomen relâché, coussin sous les genoux ; point douloureux marqué au feutre AVANT la désinfection',
    sonde: 'lineaire', sondeNote: '10–18 MHz, profondeur 3–4 cm ; convexe 3–5 MHz seulement si paroi très épaisse',
    approche: 'in-plane', approcheNote: 'latéro-médiale, sonde transversale centrée sur le point exquis, au bord latéral du droit',
    aiguille: '22–25 G, 50 mm écho-visible ; aiguille RF 22 G 50–100 mm à extrémité active 5–10 mm pour la PRF',
    cible: 'Plan entre la face postérieure du muscle droit et la **gaine postérieure**, au niveau métamérique du point douloureux ; décollement du muscle en lentille. Variante : anneau fibreux de la **gaine antérieure**, au point exquis exact',
    injectat: '5–10 mL lidocaïne 1 % ou ropivacaïne 0,2 % ± corticoïde',
    duree: '8–10 min',
  },

  indications: [
    'Douleur abdominale chronique **pariétale** avec point exquis de moins de 2 cm au bord latéral du droit, **signe de Carnett positif**, après élimination raisonnable d’une cause viscérale.',
    'Douleur abdominale chronique inexpliquée avec bilan digestif négatif : l’infiltration test est le geste qui tranche, et il doit venir **avant** la répétition des explorations, pas après.',
    'Douleur pariétale post-opératoire sur cicatrice de laparotomie, de trocart ou de Pfannenstiel, quand le point exquis siège au bord latéral du droit.',
    'ACNES de la grossesse et du post-partum (distension pariétale) : forme classique, souvent régressive, mais l’infiltration soulage vite.',
    'Douleur pariétale du sujet jeune, souvent féminin, longtemps étiquetée « fonctionnelle » — c’est le profil le plus fréquemment décrit dans les séries.',
    'Bloc test avant PRF, neurolyse chimique ou neurectomie antérieure chirurgicale.',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée du point de ponction, allergie vraie aux amino-amides.',
    'Relatives : cause viscérale non éliminée — l’infiltration ne remplace pas le raisonnement diagnostique, elle le complète. Un signe de Carnett négatif doit faire reconsidérer l’hypothèse pariétale.',
    'Hémostase : bloc **superficiel et compressible**, classé à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures douleur. Pas d’arrêt systématique des antiagrégants ; anticoagulants au cas par cas. Réserve importante : les **vaisseaux épigastriques** cheminent à la face postérieure du droit et un hématome de la gaine des droits est une complication classique — Doppler obligatoire.',
    'Grossesse : geste réalisable, mais adapter la profondeur et l’angle (utérus refoulant le péritoine vers l’avant) et privilégier l’anesthésique local seul.',
    'Corticoïdes : diabète déséquilibré ; paroi maigre (atrophie sous-cutanée et dépigmentation visibles sur un abdomen) ; ne pas dépasser 3 injections par an sur le même site.',
  ],
  alternatives: 'Le **TAP block** au même niveau métamérique attrape le nerf plus en amont, dans le plan entre oblique interne et transverse : utile quand la douleur est plus large, plurimétamérique, ou quand la gaine des droits est illisible — mais moins spécifique et sans valeur diagnostique équivalente. Le **bloc paravertébral thoracique** ou l’**ESP block** au niveau correspondant remontent encore d’un cran, à réserver aux échecs. En traitement de fond : gabapentinoïde ou IRSNA, emplâtre de lidocaïne 5 % sur le point douloureux (souvent très efficace dans cette indication localisée), désensibilisation. En cas d’échec des infiltrations répétées : **neurolyse chimique** (phénol ou alcool, protocole hollandais), **PRF**, et surtout **neurectomie antérieure chirurgicale** — c’est la seule option dont l’efficacité a été démontrée contre chirurgie factice dans un essai randomisé. Ne pas laisser un patient enchaîner huit infiltrations en deux ans faute d’avoir posé la question chirurgicale.',

  anatomie: `Les nerfs intercostaux **T7 à T12** cheminent dans le plan entre oblique interne et transverse (le plan du TAP), puis pénètrent la **gaine du droit** par sa face postéro-latérale. Chaque nerf donne alors sa **branche cutanée antérieure** qui traverse le corps du muscle droit, fait un **virage à angle presque droit vers l’avant**, et perfore la **gaine antérieure** dans un **canal fibreux** situé au **bord latéral du muscle**, avant de se distribuer à la peau de l’hémi-abdomen correspondant.

C’est exactement à cet endroit — le virage à 90° dans un anneau fibreux inextensible — que se produit le piégeage : traction, hernie de graisse pré-péritonéale dans le canal, ou simple conflit mécanique. D’où la topographie invariable de la douleur : **une ligne verticale de points exquis le long du bord latéral du droit**, jamais au milieu du muscle ni sur la ligne blanche.

La branche est accompagnée dans le canal fibreux d’une **artériole et d’une veinule** ; plus profondément, à la face postérieure du muscle droit, cheminent les **vaisseaux épigastriques** (supérieurs en haut, inférieurs en bas) — les vaisseaux à repérer avant toute ponction.

### Ce qui compte pour le geste
- **Le patient désigne la cible.** Il montre son point du bout d’un doigt, presque toujours au bord latéral du droit ; ce point est la cible, pas une approximation anatomique. Le marquer au feutre avant la désinfection.
- **Signe de Carnett** : la palpation du point exquis est **aussi ou plus douloureuse** quand le patient contracte ses abdominaux (tête relevée ou jambes tendues levées). Douleur pariétale = Carnett positif ; douleur viscérale = douleur atténuée par la contraction, qui protège le contenu. C’est le test clinique de référence, décrit en 1926 et jamais détrôné.
- **Signes associés** : zone de moins de 2 cm², **pinch test** douloureux (pincer la peau entre pouce et index est plus douloureux du côté atteint), et **troubles sensitifs métamériques** en regard (hypoesthésie, hyperalgésie, ou perception altérée du froid). Leur présence renforce beaucoup la probabilité diagnostique.
- **La gaine postérieure disparaît sous la ligne arquée** (arcuate line, quelques centimètres sous l’ombilic) : en dessous, le muscle droit repose directement sur le fascia transversalis et le péritoine. Conséquence directe sur le geste : **en sous-ombilical bas, la marge de sécurité est plus courte**, et l’injection se fait plutôt en avant du muscle.
- **Diagnostics différentiels de paroi** à éliminer à l’écho pendant le même examen : hernie de Spiegel (précisément au bord latéral du droit, sur la ligne semi-lunaire), hernie épigastrique ou ombilicale, hématome de la gaine des droits, endométriose cicatricielle (nodule hypoéchogène dans la cicatrice, douleur cataméniale), point gâchette myofascial.
- **Profondeurs usuelles** : gaine antérieure à 0,5–2 cm selon le pannicule, face postérieure du droit à 1,5–4 cm. À confirmer sur chaque patient.`,

  installation: {
    patient: `**Décubitus dorsal**, abdomen entièrement découvert, coussin sous les genoux pour relâcher la paroi.

**Faire montrer le point du bout d’un doigt et le marquer au feutre avant de désinfecter.** Marquer aussi le rebord costal, l’ombilic, l’épine iliaque et les cicatrices. S’il y a plusieurs points exquis étagés — c’est fréquent, deux à trois niveaux —, les marquer tous et décider lequel on traite en premier (le plus intense).

**Refaire le signe de Carnett et le pinch test au lit avant le geste**, et les noter. La comparaison avant/après est ce qui donne sa valeur au test.

Prévoir une surveillance de 20–30 min et une réévaluation de la douleur à la palpation, pas seulement de la douleur spontanée.`,
    operateur: `Opérateur du côté à traiter, écran en face. Sonde **transversale, centrée sur la marque au feutre**, perpendiculaire à l’axe du corps : la coupe montre le muscle droit à gauche de l’écran (côté médial) et les trois muscles larges à droite (côté latéral), séparés par la **ligne semi-lunaire**.

Ponction **de latéral en médial, dans le plan** : la pointe progresse depuis le tissu sous-cutané vers l’intérieur de la gaine, en s’éloignant de la ligne semi-lunaire et en gardant le péritoine à distance. L’abord inverse pointe vers le dehors et n’a aucun intérêt.`,
    sonde: `- Linéaire 10–18 MHz, preset superficiel, **profondeur 3–4 cm**, focale sur la face postérieure du droit, gain réglé pour que les deux feuillets de la gaine soient blanc franc.
- **Doppler couleur obligatoire** : vaisseaux épigastriques à la face postérieure du muscle, artériole satellite dans le canal fibreux au bord latéral. Un hématome de la gaine des droits est la complication à ne pas provoquer.
- Manœuvre utile : demander de **relever la tête** — le droit se contracte, s’épaissit et se sépare nettement des muscles larges ; la ligne semi-lunaire devient évidente.
- Balayer **de la ligne blanche vers le dehors** pour repérer la transition muscle droit / aponévroses, puis revenir sur le point marqué.
- Compression douce : trop appuyer efface le plan postérieur.`,
  },

  reperage: [
    { titre: 'Se poser sur le point marqué', texte: 'Sonde transversale exactement sur la marque au feutre. Vérifier immédiatement que la **pression de la sonde reproduit la douleur** du patient : si non, le point est mal marqué, on recommence avant de désinfecter.' },
    { titre: 'Identifier le muscle droit et ses deux feuillets', texte: 'Le **muscle droit** apparaît comme une masse ovalaire striée, encadrée par deux lignes hyperéchogènes : la **gaine antérieure** (superficielle) et la **gaine postérieure** (profonde). Faire relever la tête au patient pour les faire ressortir.' },
    { titre: 'Trouver la ligne semi-lunaire', texte: 'Glisser en dehors : le muscle droit s’effile et les aponévroses des trois muscles larges convergent en un éperon hyperéchogène — la **ligne semi-lunaire**. Le point de perforation du nerf est **juste en dedans** de cette ligne. Vérifier au passage l’absence de hernie de Spiegel, qui siège exactement là.' },
    { titre: 'Doppler', texte: 'Activer le Doppler : repérer les **vaisseaux épigastriques** à la face postérieure du droit (l’artère et ses deux veines satellites) et, quand elle est visible, la petite **artériole du canal fibreux** au bord latéral. Ce sont les structures à éviter, et l’artériole est un repère indirect du canal.' },
    { titre: 'Repérer le péritoine', texte: 'Sous la gaine postérieure : ligne fine glissante, puis anses péristaltiques. **En sous-ombilical bas, la gaine postérieure a disparu** (ligne arquée) : le droit repose sur le fascia transversalis, la marge est plus courte, en tenir compte avant de choisir la profondeur de la pointe.' },
    { titre: 'Si on ne trouve pas le nerf', texte: 'On ne le trouve pratiquement jamais : la branche cutanée antérieure mesure moins d’un millimètre et n’est pas identifiable en routine. **Ce n’est pas une condition du geste.** La cible est le compartiment (gaine des droits) au niveau du point exquis. Si les plans eux-mêmes sont illisibles (paroi épaisse, cicatrice), baisser la fréquence, faire contracter la paroi, ou se rabattre sur un TAP block au même niveau.' },
  ],

  sonoanatomie: [
    { structure: 'Gaine antérieure du droit', aspect: 'Ligne hyperéchogène fine, continue, superficielle', repere: 'Percée par la branche cutanée antérieure au bord latéral du muscle — le siège du piégeage' },
    { structure: 'Muscle droit de l’abdomen', aspect: 'Masse ovalaire striée, gris moyen, s’épaissit à la contraction', repere: 'S’étend de la ligne blanche à la ligne semi-lunaire' },
    { structure: 'Gaine postérieure du droit', aspect: 'Ligne hyperéchogène profonde, **absente sous la ligne arquée**', repere: 'Cible du plan d’injection classique' },
    { structure: 'Ligne semi-lunaire', aspect: 'Convergence en éperon hyperéchogène des aponévroses des trois muscles larges', repere: 'Bord latéral du droit ; siège de la hernie de Spiegel' },
    { structure: 'Vaisseaux épigastriques', aspect: 'Artère pulsatile et deux veines, en Doppler, à la face postérieure du droit', repere: 'Structure à éviter — hématome de la gaine des droits' },
    { structure: 'Branche cutanée antérieure', aspect: 'Non visible en routine (< 1 mm) ; parfois une artériole satellite en Doppler', repere: 'Traverse le muscle puis vire à 90° pour percer la gaine antérieure' },
    { structure: 'Nerf intercostal dans le plan TAP', aspect: 'Point hyperéchogène de 2–3 mm entre oblique interne et transverse', repere: 'Cible de repli si la gaine des droits est illisible' },
    { structure: 'Péritoine et anses', aspect: 'Ligne fine glissante puis anses péristaltiques', repere: 'Immédiatement sous la gaine postérieure — plus proche encore sous la ligne arquée' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Point(s) exquis marqué(s) au feutre, Carnett et pinch test notés. Désinfection large, gel stérile ou housse. Seringue de 10 mL étiquetée, aiguille 22–25 G 50 mm sur prolongateur. Doppler complet du trajet prévu.' },
    { titre: 'Anesthésie cutanée', texte: '0,5 mL de lidocaïne 1 % au point d’entrée, 1–2 cm en dehors du bord latéral de la sonde. Facultative en 25 G, systématique avant aiguille RF ou neurolyse.' },
    { titre: 'Ponction dans le plan, de latéral en médial', texte: 'Angle plat (20–30°), aiguille visible sur toute sa longueur. Traverser le tissu sous-cutané, la gaine antérieure (ressaut), puis le corps du muscle droit jusqu’à sentir le **second ressaut** au contact de la gaine postérieure. La pointe s’arrête **entre le muscle et la gaine postérieure**, sans la franchir.' },
    { titre: 'Hydrolocalisation', texte: 'Aspiration, puis **0,5 mL de sérum**. Le muscle doit se **décoller de la gaine postérieure** en une lentille anéchogène qui s’étale latéralement et médialement. Si la nappe reste dans le muscle, avancer d’1–2 mm ; si elle disparaît sans image, la pointe est passée sous la gaine — retirer immédiatement.' },
    { titre: 'Injection fractionnée', texte: '5 à 10 mL par bolus de 2–3 mL, aspiration entre chaque, en suivant l’extension de la nappe qui doit remonter jusqu’au **bord latéral du muscle**, sous le point marqué. En sous-ombilical bas (sous la ligne arquée), déposer plutôt **en avant du muscle, sous la gaine antérieure**, au contact du canal fibreux.' },
    { titre: 'Critère de fin', texte: 'Nappe anéchogène de 3–5 cm de long dans la gaine, atteignant le bord latéral du droit sous le point exquis, sans injection intramusculaire isolée ni passage péritonéal.' },
    { titre: 'Après le geste et interprétation du test', texte: '**Refaire immédiatement le signe de Carnett et le pinch test.** Le critère validé est une **réduction d’au moins 50 % de la douleur à la palpation du point à 15–20 min**. C’est le résultat qui confirme le diagnostic — pas la seule EN spontanée, souvent basse au repos. Noter le produit, le volume et le niveau. Journal de douleur à 7 jours, réévaluation à J15–J30.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration test diagnostique | Lidocaïne 1 % (ou 2 %) | **5–10 mL** | C’est le protocole validé contre placebo : le critère est ≥ 50 % de réduction de la douleur **à la palpation** à 15–20 min. Faire un seul niveau à la fois, sinon on ne sait plus ce qu’on a testé |
| Infiltration thérapeutique | Lidocaïne 1 % ou ropivacaïne 0,2 % + méthylprednisolone 20–40 mg, ou bétaméthasone 5,7 mg, ou dexaméthasone 4–8 mg | 5–10 mL | Site **non artériel terminal** : particulaire acceptable. Sur une paroi maigre, préférer une dose faible ou la dexaméthasone (atrophie et dépigmentation visibles sur l’abdomen) |
| Série d’infiltrations | Même schéma, répété à 2–4 semaines | 5–10 mL | Une part notable des patients répond à une **série de 2 à 3** infiltrations plutôt qu’à une seule. Au-delà de 3–4 sans effet durable, changer de stratégie plutôt que de continuer |
| Neurolyse chimique | Phénol 5–6 % ou alcool absolu, après bloc test positif | 1–3 mL | Protocole décrit par l’équipe hollandaise. Petit volume, contact strict, jamais à l’aveugle. Risque de névrite de désafférentation à annoncer |
| Hydrodissection | Dextrose 5 % ± lidocaïne 0,5 % | 5–10 mL | Ouvrir le canal fibreux sans corticoïde ; répétable. Aucune preuve directe dans l’ACNES — à présenter comme tel |
| Avant PRF | Lidocaïne 1 % | 1–2 mL sur le trajet | Ne pas noyer la cible |

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne / lévobupivacaïne 2–2,5 mg/kg. À 10 mL de lidocaïne 1 % on est à 100 mg — sans danger en soi, mais le piège est le patient **plurimétamérique ou bilatéral** chez qui on serait tenté d’infiltrer quatre points dans la même séance. Traiter **un niveau par séance** : c’est à la fois plus sûr et plus informatif.

La paroi abdominale a une absorption systémique rapide : injection fractionnée, jamais en bolus unique.`,

  variantes: [
    { titre: 'Cibler l’anneau fibreux plutôt que la gaine postérieure', texte: `Deux cibles coexistent dans la littérature et il faut savoir laquelle on utilise.

**(a) Plan postérieur** (entre face postérieure du droit et gaine postérieure) : c’est le plan du *rectus sheath block* classique, plus large, plus facile à voir, il baigne le nerf **avant** son virage. C’est la cible la plus reproductible et celle que retiennent la plupart des descriptions échoguidées.

**(b) Canal fibreux de la gaine antérieure**, au bord latéral du droit, exactement sous le point exquis : c’est le siège réel du piégeage, et c’est la cible du protocole hollandais originel (infiltration du point gâchette). Volume plus faible, effet plus sélectif, mais fenêtre plus étroite.

En pratique : commencer par (a), qui est plus sûr et suffit le plus souvent ; réserver (b) aux réponses partielles ou aux patients sous la ligne arquée, où le plan postérieur n’existe plus. La supériorité de l’une sur l’autre **n’a pas été testée** — à confirmer.` },
    { titre: 'TAP block au même niveau métamérique', texte: 'Quand la gaine des droits est illisible, quand la douleur est plurimétamérique, ou après plusieurs infiltrations locales inefficaces : bloc du plan entre oblique interne et transverse, au niveau costo-iliaque correspondant, 15–20 mL. On attrape le nerf en amont de son entrée dans la gaine. Moins spécifique, sans valeur diagnostique équivalente, mais utile en couverture large.' },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Après infiltration test positive. Aiguille RF 22 G, extrémité active 5–10 mm, positionnée dans la gaine au contact du bord latéral du droit, sous le point exquis, parallèlement au trajet supposé du nerf. Stimulation sensitive 50 Hz : paresthésies dans le territoire du point à < 0,5 V. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 2–4 mL d’AL ± corticoïde.

Données : séries et cas cliniques seulement, effectifs faibles, pas de comparateur. Preuve **faible**. L’argument en sa faveur est la répétabilité et l’absence de lésion définitive — pas la démonstration d’efficacité.` },
    { titre: 'Neurolyse chimique et cryoneurolyse', texte: 'La **neurolyse au phénol ou à l’alcool** (1–3 mL après bloc test positif) fait partie de l’algorithme décrit par l’équipe hollandaise, en intermédiaire entre les infiltrations et la chirurgie. La **cryoneurolyse** est théoriquement séduisante ici (piégeage d’un nerf purement sensitif, superficiel, repousse en 3–6 mois sans névrome de section) mais les données publiées sont anecdotiques. Dans les deux cas : bloc test positif obligatoire, information sur le risque de névrite de désafférentation, et traçabilité.' },
    { titre: 'Neurectomie antérieure chirurgicale', texte: `Ce n’est pas une variante technique mais la suite logique, et c’est la seule option évaluée contre chirurgie factice. La neurectomie antérieure consiste à réséquer la branche à sa sortie de la gaine ; l’essai randomisé en double aveugle contre chirurgie factice publié par l’équipe de Roumen et Scheltinga en 2013 est positif, et les séries de suivi long terme rapportent un maintien du bénéfice chez une majorité de patients, avec des récidives et des reprises possibles.

Message opérationnel : **poser la question chirurgicale après 2 à 3 infiltrations bien conduites**, pas après quinze. Le chirurgien attend de l’algologue un point exquis reproductible et une réponse documentée à l’infiltration test.` },
  ],

  pearls: [
    'Y penser. C’est l’essentiel de la fiche : la plupart de ces patients ont eu un scanner, une endoscopie et parfois une laparoscopie avant qu’on leur palpe le bord latéral du droit.',
    'Le signe de Carnett fait le tri paroi / viscère en dix secondes, au lit du malade, sans machine.',
    'Faire montrer le point du bout d’un doigt, le marquer au feutre, puis vérifier que **la pression de la sonde reproduit la douleur** avant de désinfecter.',
    'Faire relever la tête au patient : le droit se contracte et les deux feuillets de la gaine deviennent évidents.',
    'Le critère du test est la douleur **à la palpation** après le bloc, pas l’EN spontanée au repos — c’est là que se joue l’interprétation.',
    'Un niveau par séance. Deux points infiltrés le même jour, c’est un test ininterprétable.',
    'Chercher la hernie de Spiegel dans le même examen : elle siège exactement au bord latéral du droit et donne le même point exquis.',
  ],
  pieges: [
    'Injecter dans le corps du muscle droit : aucun effet, et le patient conclut que « ça ne marche pas ».',
    'Oublier que la **gaine postérieure disparaît sous la ligne arquée** : en sous-ombilical bas, viser en arrière du muscle expose davantage le péritoine.',
    'Ponctionner sans Doppler : les vaisseaux épigastriques sont exactement dans le plan visé, et l’hématome de la gaine des droits est douloureux et durable.',
    'Prendre un point gâchette myofascial du droit pour un ACNES : le point gâchette est **dans** le muscle et non au bord latéral, et le Carnett est moins discriminant.',
    'Manquer une endométriose cicatricielle chez une femme jeune avec douleur cataméniale : nodule hypoéchogène dans la cicatrice, à chercher spécifiquement.',
    'Enchaîner les infiltrations pendant deux ans sans jamais poser la question chirurgicale.',
    'Conclure « douleur fonctionnelle » sur une infiltration test négative faite au mauvais niveau ou dans le muscle.',
  ],
  complications: [
    '**Hématome de la gaine des droits** par ponction des vaisseaux épigastriques : douleur, masse pariétale, parfois volumineux chez l’anticoagulé. Compression, écho de contrôle, surveillance de l’hémoglobine si masse expansive. Prévention par Doppler.',
    '**Ponction péritonéale et lésion d’anse** : exceptionnelle sous échographie, réelle à l’aveugle. Marge plus courte sous la ligne arquée. Conduite à tenir : arrêt, surveillance clinique 6 h, avis chirurgical au moindre doute.',
    'Injection intramusculaire simple : pas dangereuse, mais responsable d’un faux négatif du test — la refaire correctement plutôt que de conclure.',
    'Atrophie sous-cutanée et dépigmentation après corticoïde sur une paroi maigre : visible, mal vécue, évitable en réduisant la dose ou en utilisant la dexaméthasone.',
    'Névrite de désafférentation après neurolyse chimique ou PRF : douleur de brûlure d’installation retardée. À annoncer avant tout geste neurolytique.',
    'Aggravation transitoire pendant 24–72 h après infiltration (irritation locale) : fréquente et bénigne, mais à annoncer sous peine d’appel inquiet à J1.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush, insomnie.',
  ],
  securite: [
    'Classe **faible risque hémorragique** (ASRA-ESRA 2018, procédures douleur) : geste superficiel et compressible. Réserve : vaisseaux épigastriques dans le plan cible — Doppler avant toute ponction, même chez le patient non anticoagulé.',
    'Identifier formellement le **péritoine** avant de ponctionner, et savoir si l’on est au-dessus ou au-dessous de la **ligne arquée** : la marge de sécurité n’est pas la même.',
    'Pointe visible en permanence ; en cas de perte de la pointe, arrêter et réaligner la sonde plutôt que d’avancer.',
    'Aspiration avant chaque bolus, injection fractionnée par 2–3 mL.',
    'Un seul niveau par séance ; additionner les doses d’AL si un TAP ou un autre bloc est réalisé le même jour.',
    'Tout geste neurolytique (phénol, alcool, PRF, cryo) exige un bloc test préalable positif et documenté, et une information écrite sur la névrite de désafférentation.',
  ],

  suivi: `- **J0** : EN spontanée avant / après, mais surtout **douleur à la palpation du point et signe de Carnett avant / à 15–20 min**. Le seuil validé est ≥ 50 % de réduction. Noter le niveau infiltré, le produit et le volume.
- **J1–J7** : journal de douleur remis au patient. Prévenir de l’aggravation transitoire possible pendant 24–72 h.
- **J15–J30** : EN, douleur à la palpation, retentissement (sommeil, activité, arrêt de travail), consommation d’antalgiques. Décision : **deuxième infiltration** (une série de 2–3 est un schéma raisonnable), passage à la PRF ou à la neurolyse, ou **adressage chirurgical** pour neurectomie antérieure.
- **3 mois** : si le patient en est à 3–4 infiltrations sans bénéfice durable, arrêter cette voie. Poursuivre au-delà est le principal défaut de prise en charge observé dans cette pathologie.
- **Toujours coupler** au traitement de fond : gabapentinoïde ou IRSNA si composante neuropathique (DN4), **emplâtre de lidocaïne 5 %** sur le point — particulièrement adapté à une douleur superficielle et strictement localisée —, et prise en charge du retentissement anxieux, souvent majeur chez des patients qui ont accumulé des années d’explorations négatives.`,

  evidence: `- **Valeur diagnostique de l’infiltration test : preuve modérée, et c’est le point fort du dossier.** Un essai randomisé de l’équipe hollandaise (Boelens et coll., 2013) comparant l’infiltration du point gâchette à la lidocaïne contre placebo établit la supériorité de la lidocaïne pour poser le diagnostic d’ACNES. C’est le seul geste de cette fiche à disposer d’une validation contrôlée de sa valeur diagnostique.
- **Neurectomie antérieure : preuve modérée à forte pour un geste chirurgical.** Un essai randomisé en double aveugle contre **chirurgie factice** (Boelens et coll., 2013) montre un bénéfice significatif de la neurectomie antérieure dans l’ACNES. Le suivi à long terme (van Assen et coll., 2015) rapporte un maintien du bénéfice chez une majorité de patients, avec des récidives possibles. C’est le meilleur niveau de preuve de toute la fiche — et il concerne la chirurgie, pas les blocs.
- **Efficacité thérapeutique des infiltrations répétées : preuve faible.** Séries prospectives et rétrospectives, principalement hollandaises et britanniques (Kanakarajan et coll., 2011, série de cas échoguidés). Une part substantielle des patients est soulagée par une série de 2–3 infiltrations, mais sans comparateur et sans donnée robuste sur la durée.
- **Voie échoguidée contre voie anatomique : non tranchée.** Le protocole diagnostique validé était réalisé **au repère clinique**, pas sous échographie. L’échoguidage apporte la sécurité (vaisseaux épigastriques, péritoine), la certitude du plan et l’élimination des diagnostics différentiels de paroi dans le même temps — mais sa supériorité en efficacité n’a pas été démontrée. Confiance : *probable*, pas *certain*.
- **PRF, neurolyse chimique, cryoneurolyse : preuve faible à très faible.** Séries et cas. La neurolyse chimique figure dans les algorithmes hollandais ; la cryoneurolyse à ce site est quasi anecdotique.
- **Épidémiologie : sous-diagnostic largement documenté**, avec des chiffres qui varient trop d’une série à l’autre pour être cités ici comme des données solides. Ce qui est constant dans toutes les publications, c’est le retard diagnostique et le nombre d’explorations inutiles.
- **Trous de littérature assumés** : aucune comparaison entre cible antérieure et cible postérieure, aucun schéma optimal (nombre d’infiltrations, intervalle, dose de corticoïde), aucune donnée solide sur l’hydrodissection, très peu de données pédiatriques et de grossesse.`,

  references: [
    { auteurs: 'Boelens OB, Scheltinga MR, Houterman S, Roumen RM', titre: 'Randomized clinical trial of trigger point infiltration with lidocaine to diagnose anterior cutaneous nerve entrapment syndrome', revue: 'Br J Surg', annee: '2013', type: 'ECR', verif: false, note: 'Valide l’infiltration test comme outil diagnostique.' },
    { auteurs: 'Boelens OB, van Assen T, Houterman S, Scheltinga MR, Roumen RM', titre: 'A double-blind, randomized, controlled trial on surgery for chronic abdominal pain due to anterior cutaneous nerve entrapment syndrome', revue: 'Ann Surg', annee: '2013', type: 'ECR', verif: false, note: 'Neurectomie antérieure contre chirurgie factice — le meilleur niveau de preuve du dossier.' },
    { auteurs: 'van Assen T, Boelens OB, van Eerten PV, Perquin C, Scheltinga MR, Roumen RM', titre: 'Long-term success rates after an anterior neurectomy in patients with an abdominal cutaneous nerve entrapment syndrome', revue: 'Surgery', annee: '2015', type: 'cohorte', verif: false },
    { auteurs: 'Scheltinga MR, Roumen RM', titre: 'Anterior cutaneous nerve entrapment syndrome (ACNES)', revue: 'Hernia', annee: '2018', type: 'revue', verif: false, note: 'Mise au point de l’équipe qui a construit le corpus.' },
    { auteurs: 'Kanakarajan S, High K, Nagaraja R', titre: 'Chronic abdominal wall pain and ultrasound-guided abdominal cutaneous nerve infiltration: a case series', revue: 'Pain Med', annee: '2011', type: 'série', verif: false, note: 'Série princeps de l’infiltration échoguidée.' },
    { auteurs: 'Applegate WV', titre: 'Abdominal cutaneous nerve entrapment syndrome (ACNES): a commonly overlooked cause of abdominal pain', revue: 'Perm J', annee: '2002', type: 'mise au point', verif: false },
    { auteurs: 'Carnett JB', titre: 'Intercostal neuralgia as a cause of abdominal pain and tenderness', revue: 'Surg Gynecol Obstet', annee: '1926', type: 'historique', verif: false, note: 'Description originale du signe qui porte son nom.' },
    { auteurs: 'Chrona E, Kostopanagiotou G, Damigos D, Batistaki C', titre: 'Anterior cutaneous nerve entrapment syndrome: management challenges', revue: 'J Pain Res', annee: '2017', type: 'revue', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [],

  scenes: [
    {
      id: 'acnes-sono', section: 'sonoanatomie', titre: 'Coupe transversale sur le bord latéral du droit — vue de repérage',
      legende: 'Le muscle droit encadré par ses deux feuillets. En dehors, les aponévroses des trois muscles larges convergent en ligne semi-lunaire. La branche cutanée antérieure traverse le muscle puis vire à 90° pour percer la gaine antérieure au bord latéral, dans un anneau fibreux inextensible : c’est là que se produit le piégeage et c’est là que le patient montre son point. Les vaisseaux épigastriques cheminent à la face postérieure du droit.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial (ligne blanche)', right: 'Latéral' }).probeInfo({ plan: 'Transverse', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 24 });
        S.fascia({ points: [[0, 78], [280, 80], [408, 88]], width: 2.6 });
        S.muscle({ path: 'M0 80 L280 82 L410 90 L414 198 L280 206 L0 204 Z', label: 'Muscle droit de l’abdomen', at: [150, 148], opacity: 0.55 });
        S.fascia({ points: [[0, 204], [280, 206], [414, 198]], width: 2.4 });
        S.ligament({ path: 'M408 88 L462 104 L470 176 L414 198 Z', label: 'Ligne semi-lunaire', at: [470, 246], small: true, anchor: 'middle', lead: [442, 150] });
        S.muscle({ path: 'M462 100 L640 92 L640 132 L466 138 Z', label: 'Oblique externe', at: [566, 116], opacity: 0.42, small: true });
        S.muscle({ path: 'M466 138 L640 132 L640 172 L470 178 Z', label: 'Oblique interne', at: [566, 156], opacity: 0.5, small: true });
        S.muscle({ path: 'M470 178 L640 172 L640 210 L472 214 Z', label: 'Transverse', at: [566, 194], opacity: 0.4, small: true });
        S.artery({ x: 322, y: 194, r: 6 });
        S.vein({ x: 344, y: 196, rx: 8, ry: 6, label: 'Vaisseaux épigastriques', lx: 300, ly: 268, anchor: 'middle', small: true, lead: [332, 202] });
        S.nerve({ x: 392, y: 86, r: 7, label: 'Perforation de la gaine antérieure —\nsiège du piégeage', lx: 250, ly: 116, anchor: 'middle', small: true, lead: [385, 88] });
        S.nerve({ x: 524, y: 176, r: 6, label: 'N. intercostal (plan TAP)', lx: 560, ly: 300, anchor: 'middle', small: true, lead: [528, 182] });
        S.fascia({ points: [[0, 226], [300, 228], [640, 222]], width: 1.5, opacity: 0.8 });
        S.label({ x: 60, y: 246, text: 'Péritoine', cls: 'lbl-fascia', small: true, anchor: 'start' });
        S.bowel({ path: 'M30 300 q60 -36 130 -6 q66 30 130 -2 q56 -28 110 2 L400 400 L30 400 Z', label: 'Anses digestives', at: [180, 350] });
        S.label({ x: 30, y: 66, text: 'Gaine antérieure', cls: 'lbl-fascia', small: true, anchor: 'start' });
        S.label({ x: 30, y: 222, text: 'Gaine postérieure', cls: 'lbl-fascia', small: true, anchor: 'start' });
      },
    },
    {
      id: 'acnes-bloc', section: 'technique', titre: 'Infiltration de la gaine des droits au point exquis',
      legende: 'Aiguille in-plane de latéral en médial : deux ressauts (gaine antérieure, puis contact de la gaine postérieure). La pointe s’arrête ENTRE le muscle et la gaine postérieure ; l’hydrolocalisation doit décoller le muscle en lentille. 5–10 mL, en s’assurant que la nappe remonte jusqu’au bord latéral, sous la marque au feutre. Sous la ligne arquée (sous-ombilical bas), la gaine postérieure n’existe plus : déposer alors en avant du muscle, au contact du canal fibreux.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial (ligne blanche)', right: 'Latéral' }).probeInfo({ plan: 'Transverse sur le point exquis', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 24 });
        S.fascia({ points: [[0, 78], [280, 80], [408, 88]], width: 2.6 });
        S.muscle({ path: 'M0 80 L280 82 L410 90 L414 198 L280 206 L0 204 Z', label: 'Muscle droit', at: [120, 140], opacity: 0.55 });
        S.fascia({ points: [[0, 204], [280, 206], [414, 198]], width: 2.4 });
        S.ligament({ path: 'M408 88 L462 104 L470 176 L414 198 Z' });
        S.muscle({ path: 'M462 100 L640 92 L640 132 L466 138 Z', opacity: 0.42 });
        S.muscle({ path: 'M466 138 L640 132 L640 172 L470 178 Z', opacity: 0.5 });
        S.muscle({ path: 'M470 178 L640 172 L640 210 L472 214 Z', opacity: 0.4 });
        S.artery({ x: 322, y: 194, r: 6 });
        S.vein({ x: 344, y: 196, rx: 8, ry: 6 });
        S.nerve({ x: 392, y: 86, r: 7 });
        S.target({ x: 392, y: 86, r: 20 });
        S.label({ x: 300, y: 62, text: 'Variante : canal fibreux, au point exquis (1–3 mL)', cls: 'lbl-target', small: true, anchor: 'middle' });
        S.fascia({ points: [[0, 226], [300, 228], [640, 222]], width: 1.5, opacity: 0.8 });
        S.bowel({ path: 'M30 300 q60 -36 130 -6 q66 30 130 -2 q56 -28 110 2 L400 400 L30 400 Z', label: 'Péritoine, anses', at: [180, 350] });
        S.needle({ from: [640, 118], to: [338, 192], label: '22–25 G 50 mm' });
        S.spread({ x: 258, y: 197, rx: 116, ry: 13, label: '5–10 mL' });
        S.label({ x: 210, y: 250, text: 'Plan cible : muscle décollé de la gaine postérieure', cls: 'lbl-spread', small: true, anchor: 'middle' });
      },
    },
  ],

  checklist: [
    'Signe de Carnett et pinch test réalisés et NOTÉS avant le geste (comparaison avant/après)',
    'Point exquis montré du doigt, marqué au feutre avant désinfection, et douleur reproduite par la pression de la sonde',
    'Diagnostics différentiels de paroi recherchés à l’écho dans le même temps : hernie de Spiegel, hernie épigastrique, hématome de la gaine, endométriose cicatricielle',
    'Position par rapport à la ligne arquée déterminée (la gaine postérieure disparaît en dessous)',
    'Doppler sur les vaisseaux épigastriques avant la ponction',
    'UN SEUL niveau infiltré par séance — sinon le test est ininterprétable',
    'Réévaluation à 15–20 min de la douleur À LA PALPATION du point (critère : ≥ 50 % de réduction), et non de la seule EN au repos',
    'Patient prévenu d’une possible aggravation transitoire de 24 à 72 h',
  ],
});
