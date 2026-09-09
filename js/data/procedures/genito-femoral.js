/* Fiche : nerf génito-fémoral — bloc échoguidé de la branche génitale et de la branche fémorale. */
ECHO.register({
  id: 'genito-femoral',
  titre: 'Nerf génito-fémoral — bloc de la branche génitale et de la branche fémorale',
  titreCourt: 'Génito-fémoral',
  en: 'Ultrasound-guided genitofemoral nerve block — genital branch (inguinal canal, with the spermatic cord / round ligament) and femoral branch (femoral triangle, lateral to the femoral artery)',
  region: 'rachis-bassin',
  types: ['bloc'],
  niveau: 2,
  grade: 'Faible (séries et cas cliniques ; aucun ECR de bloc isolé)',
  maj: '2026-09',
  motsCles: ['névralgie génito-fémorale', 'orchialgie', 'douleur scrotale chronique', 'douleur testiculaire', 'branche génitale', 'crémaster', 'réflexe crémastérien', 'canal inguinal', 'cordon spermatique', 'ligament rond', 'post-herniorraphie', 'vulvodynie latérale'],
  resume: 'Bloc du nerf le plus souvent oublié de l’aine, et le seul qui explique une douleur strictement scrotale ou labiale accompagnée d’une abolition du réflexe crémastérien. La branche génitale se bloque dans le canal inguinal, au contact du cordon spermatique (ligament rond chez la femme), au voisinage de l’artère spermatique externe : c’est l’abord décrit par Peng et Tumber en 2008, la seule cible réellement accessible en échographie de routine. La branche fémorale se bloque séparément, dans le triangle fémoral, latéralement à l’artère fémorale et sous le fascia lata. C’est un bloc de niveau 2 : la cible est petite, mobile, entourée de vaisseaux, et le cordon contient l’artère testiculaire — vascularisation terminale du testicule, ce qui interdit tout corticoïde particulaire. Son intérêt est d’abord diagnostique : c’est lui qui permet de distinguer une névralgie génito-fémorale d’une névralgie ilio-inguinale, distinction que la clinique seule ne tranche pas.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, jambe du côté à traiter en légère abduction-rotation externe ; verge et scrotum écartés du champ, protégés par un champ adhésif',
    sonde: 'lineaire', sondeNote: '10–18 MHz, profondeur 2,5–4 cm ; sonde compacte (« hockey stick ») utile dans l’aine étroite ou remaniée',
    approche: 'in-plane', approcheNote: 'latéro-médiale sur le canal inguinal (branche génitale) ; latéro-médiale également pour la branche fémorale, en restant latéral à l’artère fémorale',
    aiguille: '25 G 40–50 mm (branche génitale) ; 22–25 G 50 mm (branche fémorale) ; aiguille RF 22 G 50–100 mm, extrémité active 5 mm',
    cible: 'Face **postéro-latérale** du cordon spermatique / ligament rond, au contact de l’artère spermatique externe ; nappe anéchogène qui coiffe le cordon sans le distendre. Branche fémorale : sous le fascia lata, latéralement à l’artère fémorale, en dehors de la gaine du nerf fémoral',
    injectat: '2–4 mL par branche (max 5 mL) — corticoïde **non particulaire** exclusivement',
    duree: '10–15 min pour une branche · 20 min pour les deux',
  },

  indications: [
    'Douleur inguino-scrotale ou inguino-labiale chronique après cure de hernie, vasectomie, orchidopexie, varicocélectomie, prélèvement de veine saphène ou césarienne — quand la topographie descend sur le scrotum ou la grande lèvre.',
    '**Orchialgie chronique** (douleur testiculaire de plus de 3 mois) après élimination d’une cause urologique : c’est l’indication où le bloc apporte le plus, en test avant PRF.',
    'Névralgie génito-fémorale par piégeage (fibrose du canal inguinal, plaque de renfort, hématome ancien) ou idiopathique.',
    'Bloc test **différentiel** avec l’ilio-inguinal : réponse à l’un et pas à l’autre, à quelques jours d’intervalle. C’est l’usage le plus solide du geste.',
    'Douleur de la partie proximale et latérale du triangle fémoral (branche fémorale) : plus rare, souvent post-chirurgicale (abord fémoral, curage, prélèvement vasculaire).',
    'Sélection avant neurectomie : la neurectomie « triple » chirurgicale comprend le rameau génital — le bloc participe à en poser l’indication.',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée ou mycose du pli inguinal, allergie vraie aux amino-amides.',
    'Relatives : anatomie du canal illisible (obésité, plastie complexe, plaque volumineuse) ; hernie inguinale non opérée volumineuse dans le canal ; antécédent de torsion ou de chirurgie testiculaire compliquée.',
    '**Jamais de corticoïde particulaire** : l’artère testiculaire, terminale pour le testicule, chemine dans le cordon. Bétaméthasone ou méthylprednisolone en suspension proscrites ici ; dexaméthasone (non particulaire) ou anesthésique local seul.',
    'Hémostase : bloc **superficiel et compressible**, classé à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures douleur. Pas d’arrêt systématique des antiagrégants ; anticoagulants au cas par cas. Un hématome du cordon reste très douloureux : Doppler et petit calibre.',
    'Branche fémorale : prudence chez le patient dont l’autonomie dépend du quadriceps — la diffusion médiale peut atteindre le nerf fémoral.',
  ],
  alternatives: 'Bloc **ilio-inguinal / ilio-hypogastrique** (fiche dédiée) : à faire en premier si la douleur reste au-dessus du pli inguinal ; les deux blocs se complètent plus qu’ils ne s’opposent, et la stratégie usuelle est de les tester successivement, séparément, à quelques jours d’intervalle. **Bloc du cordon spermatique** (spermatic cord block) : plus simple, plus proximal dans son effet clinique, il bloque tout le contenu du cordon — utile en test global d’orchialgie mais sans valeur localisatrice. En amont : traitement neuropathique de fond, et pour l’orchialgie, avis urologique impératif (varicocèle, épididymite chronique, kyste, tumeur). En aval : **PRF** de la branche génitale, **cryoneurolyse**, neurectomie du rameau génital, et pour les orchialgies rebelles, denervation microchirurgicale du cordon spermatique — geste urologique dont les résultats publiés sont meilleurs que ceux des blocs répétés.',

  anatomie: `Le nerf génito-fémoral naît de **L1-L2**, traverse le corps du **psoas** et apparaît à sa face antérieure vers L3-L4, où il chemine sous le fascia iliaca, en arrière de l’uretère. Il se divise en deux branches à une hauteur très variable, le plus souvent au-dessus du ligament inguinal.

La **branche génitale** franchit l’**anneau inguinal profond**, entre dans le canal inguinal et y chemine **au contact du cordon spermatique** (du **ligament rond** chez la femme), à sa face **postéro-latérale**, accompagnée de l’**artère spermatique externe** (crémastérique, branche de l’épigastrique inférieure). Elle est motrice pour le **crémaster** et sensitive pour la peau du scrotum antérieur (ou de la grande lèvre) et une petite bande de la racine de la cuisse.

La **branche fémorale** passe **sous le ligament inguinal**, dans le compartiment latéral de la gaine fémorale, **latéralement à l’artère fémorale**, perfore le fascia lata quelques centimètres sous l’arcade et innerve la peau de la partie proximale et latérale du triangle fémoral.

### Ce qui compte pour le geste
- **Le réflexe crémastérien est le meilleur critère de succès** : son abolition du côté bloqué signe l’atteinte de la branche génitale (composante motrice). Le tester avant et après, c’est ce qui différencie ce bloc d’un bloc de paroi diffus.
- **La cible n’est pas le nerf, c’est la face postéro-latérale du cordon.** La branche génitale est rarement individualisée (moins de 2 mm) ; le repère est l’**artère spermatique externe** en Doppler, plaquée contre le cordon.
- **Chez la femme**, le ligament rond est bien plus fin que le cordon et le canal plus court : la fenêtre est plus étroite, la sonde compacte aide, et le repérage part de l’anneau inguinal superficiel, juste au-dessus et en dehors du tubercule pubien.
- **Contenu du cordon à identifier avant de ponctionner** : canal déférent (tube à paroi épaisse, hyperéchogène, non compressible, non Doppler-positif), plexus pampiniforme (lacis veineux compressible, Doppler à basse vitesse), artère testiculaire (pulsatile). Le nerf est **en dehors** de ces éléments, à la périphérie postéro-latérale.
- **Variabilité anatomique majeure.** Le niveau de division, la présence même d’une branche génitale distincte et les territoires de chevauchement avec l’ilio-inguinal varient considérablement d’un sujet à l’autre — c’est la raison anatomique pour laquelle la distinction clinique entre les deux névralgies n’est pas fiable et pour laquelle on teste.
- **Profondeurs usuelles** : cordon à 1,5–3 cm chez l’homme de morphotype standard ; branche fémorale à 2–3,5 cm sous le fascia lata. À confirmer sur chaque patient, la surcharge pondérale abdominale déplaçant beaucoup ces valeurs.`,

  installation: {
    patient: `**Décubitus dorsal**, jambe du côté à traiter en légère **abduction-rotation externe** : le pli inguinal s’ouvre et le canal se met à plat. Verge et scrotum écartés du champ et protégés par un champ adhésif transparent ; annoncer explicitement ce temps d’installation, qui est le plus mal vécu du geste.

Marquer au feutre avant désinfection : **tubercule pubien**, EIAS, ligament inguinal (ligne qui les joint), cicatrice, et la zone douloureuse montrée du doigt par le patient. Chez la femme, marquer l’orifice inguinal superficiel repéré à l’écho, non palpable.

**Tester et noter le réflexe crémastérien des deux côtés avant le bloc.** Sans cette mesure de base, on perd le seul critère objectif de réussite.`,
    operateur: `Opérateur du côté à traiter, écran en face. Sonde **transversale sur le canal inguinal**, obliquée dans l’axe du ligament inguinal, à mi-distance entre le tubercule pubien et le milieu du ligament.

Ponction **de latéral en médial, dans le plan** : on aborde le cordon par son versant latéral, on reste au-dessus du plan des vaisseaux épigastriques inférieurs, et on ne pointe jamais vers la profondeur médiale (vaisseaux fémoraux, péritoine). Pour la **branche fémorale**, même sens, en restant **latéral à l’artère fémorale** et superficiel par rapport à elle.`,
    sonde: `- Linéaire 10–18 MHz, preset superficiel ou « small parts », **profondeur 2,5–4 cm**, focale sur le cordon, gain modéré.
- **Doppler couleur systématique et prolongé** : identifier successivement l’artère testiculaire, le plexus pampiniforme, l’artère spermatique externe (le repère du nerf) et, plus latéralement et profondément, les **vaisseaux épigastriques inférieurs** — les quatre structures à ne pas ponctionner.
- Sonde compacte (« hockey stick ») chez la femme, chez le sujet mince ou dans une aine cicatricielle.
- Compression douce : le plexus pampiniforme s’efface à la moindre pression et l’on perd le repère.
- Aiguille de petit calibre (25 G) écho-visible, angle d’insonation plat ; hydrolocalisation par 0,2–0,3 mL de sérum.`,
  },

  reperage: [
    { titre: 'Partir du tubercule pubien', texte: 'Sonde transversale juste au-dessus du pubis : ligne osseuse hyperéchogène avec cône d’ombre. Le **tubercule pubien** est le repère fixe et palpable ; l’orifice inguinal superficiel est immédiatement au-dessus et en dehors de lui.' },
    { titre: 'Trouver le cordon', texte: 'Glisser en dehors et en haut, dans l’axe du ligament inguinal : apparaît une structure ovalaire de 1,5–2,5 cm, à contenu hétérogène, sous l’**aponévrose de l’oblique externe** — le **cordon spermatique**. Chez la femme, le **ligament rond** est une structure fusiforme de 3–6 mm, beaucoup plus discrète : il faut souvent le chercher en balayant plusieurs fois la région.' },
    { titre: 'Reconnaître le contenu', texte: 'Zoomer et identifier : **canal déférent** (tube à paroi épaisse, non compressible, sans flux), **plexus pampiniforme** (lacis anéchogène compressible, flux veineux lent), **artère testiculaire** (pulsatile, au centre). La manœuvre de Valsalva dilate le plexus et confirme la nature veineuse.' },
    { titre: 'Doppler sur le versant postéro-latéral', texte: 'Chercher l’**artère spermatique externe** : petit signal pulsatile plaqué contre la face postéro-latérale du cordon, souvent hors du paquet central. C’est **le** repère de la branche génitale.' },
    { titre: 'Chercher le nerf (facultatif)', texte: 'Structure ovalaire de 1–2 mm, hyperéchogène, accolée au versant postéro-latéral, contre l’artère spermatique externe. Souvent non individualisable : ce n’est pas une condition du geste, la cible est le compartiment.' },
    { titre: 'Si on ne trouve pas', texte: 'Chez l’homme : **tracter doucement le testicule** — le cordon se met en tension et devient identifiable. Chez la femme : partir de l’orifice inguinal superficiel et suivre le ligament rond en balayant vers le haut et le dehors ; l’**anneau inguinal profond**, latéral aux vaisseaux épigastriques inférieurs, est une cible alternative acceptable. Dans une aine très remaniée, repérer d’abord **du côté sain**. En dernier recours, renoncer et proposer un bloc du cordon spermatique, moins sélectif mais fiable.' },
  ],

  sonoanatomie: [
    { structure: 'Tubercule pubien', aspect: 'Ligne osseuse très brillante, cône d’ombre franc', repere: 'Repère fixe de départ, palpable' },
    { structure: 'Aponévrose de l’oblique externe', aspect: 'Bande hyperéchogène fine et rectiligne', repere: 'Toit du canal inguinal, immédiatement au-dessus du cordon' },
    { structure: 'Cordon spermatique / ligament rond', aspect: 'Ovale de 1,5–2,5 cm à contenu hétérogène (homme) ; structure fusiforme de 3–6 mm (femme)', repere: 'Entre tubercule pubien et milieu du ligament inguinal' },
    { structure: 'Canal déférent', aspect: 'Tube à paroi épaisse hyperéchogène, lumière fine, non compressible, sans Doppler', repere: 'Dans le cordon ; à ne pas confondre avec un vaisseau' },
    { structure: 'Plexus pampiniforme', aspect: 'Lacis de petites structures anéchogènes, compressibles, flux veineux lent, dilatées au Valsalva', repere: 'Majorité du volume du cordon' },
    { structure: 'Artère testiculaire', aspect: 'Petit vaisseau pulsatile central', repere: '**Vascularisation terminale du testicule** — interdit tout corticoïde particulaire' },
    { structure: 'Artère spermatique externe (crémastérique)', aspect: 'Signal Doppler pulsatile plaqué en postéro-latéral du cordon', repere: 'Le repère de la branche génitale' },
    { structure: 'Branche génitale du génito-fémoral', aspect: 'Ovale hyperéchogène de 1–2 mm, souvent non individualisé', repere: 'Face postéro-latérale du cordon, contre l’artère spermatique externe' },
    { structure: 'Vaisseaux épigastriques inférieurs', aspect: 'Artère et deux veines, en Doppler, plus profonds et plus latéraux', repere: 'Bordent l’anneau inguinal profond en dedans — limite de progression de l’aiguille' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Réflexe crémastérien testé et noté des deux côtés. Repères et zone douloureuse au feutre. Désinfection large, protection du scrotum, gel stérile ou housse. Seringue de 5 mL étiquetée, aiguille 25 G 40–50 mm sur prolongateur.' },
    { titre: 'Anesthésie cutanée', texte: '0,3–0,5 mL de lidocaïne 1 % au point d’entrée, à 1 cm du bord latéral de la sonde. Facultative avec une 25 G ; systématique avant aiguille RF.' },
    { titre: 'Ponction dans le plan, de latéral en médial', texte: 'Angle plat (15–25°), aiguille visible en totalité. Traverser l’aponévrose de l’oblique externe (ressaut net) et **s’arrêter au contact de la face postéro-latérale du cordon** — on ne pénètre pas dans le cordon. Repère de sécurité : garder en permanence l’artère spermatique externe à l’écran et rester en dehors d’elle.' },
    { titre: 'Hydrolocalisation', texte: 'Aspiration, puis **0,2–0,3 mL de sérum**. La nappe doit apparaître **entre l’aponévrose et le cordon**, sur son versant postéro-latéral, et **repousser légèrement le cordon** sans le distendre. Si le cordon lui-même se gonfle, la pointe est intra-funiculaire : retirer de 2 mm.' },
    { titre: 'Injection fractionnée', texte: '2 à 4 mL par bolus de 1 mL, aspiration entre chaque, en suivant la nappe qui doit **coiffer le cordon en croissant** sur son versant postéro-latéral. Ne pas dépasser 5 mL : au-delà, la diffusion gagne le plan de l’ilio-inguinal et le test perd toute valeur discriminante.' },
    { titre: 'Critère de fin', texte: 'Croissant anéchogène postéro-latéral englobant le signal de l’artère spermatique externe, cordon non distendu, aucun signe d’injection intravasculaire. **Puis, à 15–20 min : abolition du réflexe crémastérien homolatéral** — c’est le vrai critère de réussite du bloc.' },
    { titre: 'Après le geste', texte: 'Compression 1 min, pansement. À 20 et 30 min : EN, **cartographie sensitive comparée** (scrotum antérieur / grande lèvre, racine de la cuisse), réflexe crémastérien. Prévenir d’une possible anesthésie transitoire d’un hémiscrotum et d’une remontée testiculaire abolie. Journal de douleur à 7 jours. Pas de conduite le jour même si la branche fémorale a été bloquée.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc test de la branche génitale | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | **2–3 mL** | Volume délibérément petit : au-delà de 5 mL on bloque aussi l’ilio-inguinal et le test ne discrimine plus rien. Réflexe crémastérien et cartographie sensitive avant / à 30 min |
| Bloc thérapeutique branche génitale | Ropivacaïne 0,2 % + **dexaméthasone 4 mg** | 3–4 mL | **Corticoïde non particulaire obligatoire** : artère testiculaire terminale dans le cordon. Aucune suspension (bétaméthasone, méthylprednisolone, triamcinolone) à ce site |
| Branche fémorale | Ropivacaïne 0,2 % ± dexaméthasone 4 mg | 3–5 mL | Sous le fascia lata, latéralement à l’artère fémorale. Volume plus élevé = risque de bloc fémoral moteur |
| Hydrodissection | Dextrose 5 % ± lidocaïne 0,5 % | 3–5 mL | Piégeage cicatriciel du canal ; évite la charge cortisonique. Aucune preuve directe à ce site — à présenter comme tel |
| Avant PRF | Lidocaïne 1 % | 0,5–1 mL sur le trajet cutané seulement | Ne pas noyer la cible : le cordon se déplace et l’électrode perd le contact |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg (≈ 225 mg), lévobupivacaïne / bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Les volumes de ce bloc sont dérisoires en regard ; le point de vigilance est le **cumul** avec un bloc ilio-inguinal ou un TAP dans la même séance.

**Ne jamais ajouter d’adrénaline** dans le cordon : vasoconstriction sur une vascularisation testiculaire terminale.

Corticoïde : au maximum 3 injections par an sur le même site, espacées d’au moins 3 mois. La dexaméthasone périneurale est un usage **hors AMM** en France, largement pratiqué, à tracer comme tel dans le dossier.`,

  variantes: [
    { titre: 'Branche fémorale — triangle fémoral', texte: `Sonde transversale sous le ligament inguinal, sur l’artère fémorale commune. Repérer artère fémorale, veine en dedans, nerf fémoral en dehors dans sa gouttière entre psoas et iliaque, sous le fascia iliaca. La **branche fémorale du génito-fémoral** est plus **superficielle et plus latérale** : elle chemine dans le compartiment latéral de la gaine fémorale puis perfore le fascia lata, à 1–3 cm en dehors de l’artère.

Aiguille in-plane de latéral en médial, cible : plan **sous le fascia lata**, latéralement à l’artère, **au-dessus du fascia iliaca** — ne pas franchir ce dernier, sous peine de bloc fémoral moteur. 3–5 mL. Prévenir de la possibilité d’une faiblesse du quadriceps et faire lever accompagné.

Indication rare et souvent post-chirurgicale ; en pratique on la bloque quand la cartographie douloureuse descend sur le triangle fémoral proximal sans atteindre le scrotum.` },
    { titre: 'Abord de l’anneau inguinal profond', texte: 'Alternative quand le canal est illisible : repérer les **vaisseaux épigastriques inférieurs** au bord médial de l’anneau inguinal profond, puis déposer 2–3 mL immédiatement en dehors d’eux, là où la branche génitale entre dans le canal. Moins précis, mais reproductible chez la femme où le ligament rond est difficile à suivre. À confirmer par la cartographie post-bloc.' },
    { titre: 'Abord proximal sur le psoas', texte: 'Le tronc du nerf, à la face antérieure du psoas (L3-L4), est théoriquement accessible ; en pratique il est profond, rarement identifiable en échographie et l’abord décrit dans la littérature est **scanoguidé** (approche transpsoas de Parris et coll.). À réserver aux plateaux techniques disposant du scanner ; ce n’est pas un geste d’échographie de routine.' },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Après bloc test positif documenté (soulagement ≥ 50 % pendant la durée de l’AL + abolition du réflexe crémastérien). Aiguille RF 22 G, extrémité active 5 mm, placée parallèlement au cordon sur son versant postéro-latéral. Stimulation sensitive 50 Hz : paresthésies scrotales à < 0,5 V ; stimulation motrice 2 Hz : **contraction crémastérienne** (remontée du testicule) — signe caractéristique de la bonne cible. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**.

C’est dans l’**orchialgie chronique post-chirurgicale** que les données sont les moins mauvaises : un essai contrôlé contre sham (70 patients) rapporte une réduction significative de l’EVA à 2, 4, 6, 8 et 12 semaines après PRF du nerf ilio-inguinal et de la branche génitale du génito-fémoral. Preuve **faible à modérée**, une seule étude, à confirmer.` },
    { titre: 'Cryoneurolyse', texte: 'Même cible postéro-latérale, sonde 14–18 G, cycles gel 2 min / dégel 30 s × 2–3, sous anesthésie du trajet. Décrite en série pour la douleur inguinale chronique (cryoablation échoguidée du génito-fémoral). Le risque spécifique ici est thermique sur le cordon : maintenir la boule de glace **en dehors** du contenu funiculaire et surveiller la peau. Preuve **très faible** (cas et petites séries).' },
    { titre: 'Ce qu’il faut faire quand le bloc échoue', texte: 'Ne pas répéter trois fois. Réinterroger le diagnostic : bloc ilio-inguinal séparé, avis urologique (varicocèle, épididymite chronique, kyste de l’épididyme), IRM ou neurographie par IRM quand elle est disponible, recherche d’une composante centrale ou d’une douleur pelvi-périnéale plus large (pudendal). Pour l’orchialgie rebelle, la **dénervation microchirurgicale du cordon spermatique** a de meilleurs résultats publiés que les blocs répétés : orienter plutôt que s’acharner.' },
  ],

  pearls: [
    'Tester et noter le **réflexe crémastérien des deux côtés avant** le bloc : c’est le seul critère objectif de succès dont on dispose.',
    'Tracter doucement le testicule met le cordon en tension et le fait apparaître à l’écran.',
    'Le repère n’est pas le nerf, c’est l’**artère spermatique externe** en Doppler, plaquée en postéro-latéral.',
    'Rester **contre** le cordon, jamais dedans : la nappe doit le repousser, pas le gonfler.',
    'Petit volume, petite aiguille : 2–3 mL en 25 G. Un « bon gros bloc » ici ne prouve rien.',
    'Chez la femme, partir de l’orifice inguinal superficiel et accepter d’y passer une minute de plus : le ligament rond ne saute pas aux yeux.',
    'Dexaméthasone et rien d’autre comme corticoïde : l’artère testiculaire est terminale.',
  ],
  pieges: [
    'Prendre le canal déférent pour un vaisseau, ou l’inverse : le déférent a une paroi épaisse, ne se comprime pas et ne prend pas le Doppler.',
    'Injecter 8–10 mL « pour être sûr » : on bloque alors l’ilio-inguinal et le test perd toute valeur discriminante — c’est l’erreur qui ruine le geste.',
    'Utiliser un corticoïde particulaire dans le cordon : risque d’embolisation sur une artère testiculaire terminale. Interdit.',
    'Conclure à une névralgie génito-fémorale sur la seule clinique : le chevauchement territorial avec l’ilio-inguinal est constant et la distinction n’est pas fiable sans blocs séparés.',
    'Oublier l’avis urologique dans une orchialgie : le bloc ne remplace pas l’élimination d’une cause locale.',
    'Comprimer trop fort : le plexus pampiniforme s’efface, on perd le repère et on croit être face à un cordon « vide ».',
    'Branche fémorale : franchir le fascia iliaca et bloquer le nerf fémoral — chute au premier lever.',
  ],
  complications: [
    'Ponction vasculaire (artère spermatique externe, plexus pampiniforme, vaisseaux épigastriques inférieurs) : **hématome du cordon**, très douloureux et long à résorber. Compression prolongée, écho de contrôle, antalgiques ; prévention par Doppler et calibre 25 G.',
    'Ponction du canal déférent ou injection intra-funiculaire : douleur vive, tuméfaction du cordon. Arrêt immédiat, surveillance ; réputée sans séquelle mais à éviter.',
    'Risque ischémique testiculaire : théorique avec un corticoïde particulaire ou de l’adrénaline sur une vascularisation terminale — d’où l’interdit formel. Aucune donnée chiffrée disponible.',
    'Anesthésie transitoire de l’hémiscrotum et abolition du réflexe crémastérien : **attendues**, à annoncer, 4 à 8 h selon l’AL.',
    'Bloc fémoral moteur par diffusion (surtout abord de la branche fémorale) : parésie du quadriceps, chute au lever. Tester avant la verticalisation, lever accompagné, pas de conduite.',
    'Injection intravasculaire et toxicité systémique (LAST) : rare aux volumes utilisés, réelle si association à d’autres blocs de paroi. Injection fractionnée, aspiration, intralipide disponible.',
    'Effets systémiques des corticoïdes : hyperglycémie 24–72 h, flush ; atrophie sous-cutanée en cas de reflux superficiel.',
    'Échec technique chez la femme ou dans une aine multiopérée : le plus fréquent des incidents. Le documenter comme échec **technique** et non comme absence de composante nerveuse.',
  ],
  securite: [
    'Classe **faible risque hémorragique** (ASRA-ESRA 2018, procédures douleur) : bloc superficiel et compressible. Réserve : quatre structures vasculaires dans la fenêtre — Doppler prolongé obligatoire avant la ponction.',
    '**Corticoïde non particulaire exclusivement** et **pas d’adrénaline** : artère testiculaire terminale.',
    'Ne jamais progresser en profondeur médiale : vaisseaux fémoraux et péritoine. La pointe doit rester visible en permanence, sinon arrêter et réaligner la sonde.',
    'Aspiration avant chaque millilitre, injection fractionnée, arrêt sur douleur fulgurante ou résistance.',
    'Plafonner à 5 mL par branche : au-delà, on perd la sélectivité diagnostique et on gagne du risque.',
    'Traçabilité : produit, volume, réflexe crémastérien avant / après, cartographie sensitive. Sans ces éléments, le bloc n’est pas exploitable pour la décision suivante.',
  ],

  suivi: `- **J0** : EN avant / à 30 min, **réflexe crémastérien** avant / après, cartographie sensitive comparée (scrotum antérieur ou grande lèvre, racine de la cuisse), test du quadriceps avant le lever si la branche fémorale a été bloquée.
- **J1–J7** : journal de douleur (EN matin/soir, antalgiques, retentissement sur l’activité sexuelle et le port de charge, ce que les patients n’évoquent pas spontanément).
- **J15–J30** : EN, DN4, retentissement. Décision : bloc **ilio-inguinal séparé** si le résultat est ambigu, répétition (max 3 corticoïdes par an), PRF si réponse ≥ 50 % mais brève, ou réorientation urologique / chirurgicale.
- **3 mois** : bilan sur l’objectif fonctionnel fixé à J0. Un test positif mais bref n’est pas un échec : c’est l’argument qui justifie la PRF ou la neurectomie du rameau génital.
- **Toujours coupler** au traitement de fond (gabapentinoïde ou IRSNA, emplâtre de lidocaïne 5 % sur la zone cicatricielle, prise en charge du versant anxieux et sexuel de l’orchialgie chronique, souvent lourd et rarement abordé).`,

  evidence: `- **Description technique : solide, ancienne, non contestée.** L’abord échoguidé de la branche génitale dans le canal inguinal a été décrit par **Peng et Tumber (2008)** dans une mise au point sur les gestes échoguidés de la douleur pelvienne chronique. C’est la référence technique de tous les travaux ultérieurs, mais c’est une description, pas une étude d’efficacité.
- **Efficacité du bloc isolé : aucune preuve contrôlée.** À la différence de l’ilio-inguinal, qui a au moins un ECR (négatif), le bloc génito-fémoral n’a **aucun essai randomisé** de bloc isolé dans la douleur chronique. Tout repose sur des séries, des cas cliniques et l’usage.
- **PRF : preuve faible à modérée, une seule étude contrôlée.** Un essai contre sham (70 patients, orchialgie post-chirurgicale de plus de 3 mois) rapporte une baisse significative de l’EVA à 2, 4, 6, 8 et 12 semaines après PRF de l’ilio-inguinal **et** de la branche génitale. Le geste combiné empêche d’attribuer l’effet à l’une ou l’autre cible.
- **Cryoneurolyse et radiofréquence : preuve très faible.** Cas et petites séries (cryoablation échoguidée du génito-fémoral pour douleur inguinale chronique ; travaux récents sur la radiofréquence des neuropathies pudendale, génito-fémorale et ilio-inguinale). Aucun ECR.
- **Valeur diagnostique : c’est là que l’usage est le mieux fondé**, mais par raisonnement plus que par preuve. La variabilité anatomique et le chevauchement territorial avec l’ilio-inguinal sont documentés (travaux anatomiques sur la variabilité de l’ilio-inguinal et du génito-fémoral) ; l’imagerie par neurographie IRM commence à décrire ces névralgies. La supériorité d’un bloc sélectif sur un bloc de paroi pour orienter la chirurgie n’a jamais été testée.
- **Confiance annoncée** : *probable* pour la technique et les repères ; *supposition raisonnée* pour les volumes optimaux, la place exacte dans l’algorithme et l’intérêt de l’hydrodissection à ce site — aucune de ces trois questions n’a été étudiée.
- **Trou de littérature assumé** : rien de contrôlé chez la femme (ligament rond), rien sur le nombre de blocs à faire avant de conclure, rien sur la comparaison bloc sélectif contre bloc du cordon spermatique.`,

  references: [
    { auteurs: 'Peng PW, Tumber PS', titre: 'Ultrasound-guided interventional procedures for patients with chronic pelvic pain — a description of techniques and review of literature', revue: 'Pain Physician', annee: '2008', type: 'technique', verif: false, note: 'Description princeps de l’abord échoguidé de la branche génitale dans le canal inguinal.' },
    { auteurs: 'Campos NA, Chiles JH, Plunkett AR', titre: 'Ultrasound-guided cryoablation of genitofemoral nerve for chronic inguinal pain', revue: 'Pain Physician', annee: '2009', type: 'cas clinique', verif: false },
    { auteurs: 'Terkawi AS, Romdhane K', titre: 'Ultrasound-guided pulsed radiofrequency ablation of the genital branch of the genitofemoral nerve for treatment of intractable orchialgia', revue: 'Saudi J Anaesth', annee: '2014', type: 'cas clinique', verif: false },
    { auteurs: 'Cesmebasi A, Yadav A, Gielecki J, Tubbs RS, Loukas M', titre: 'Genitofemoral neuralgia: a review', revue: 'Clin Anat', annee: '2015', type: 'revue anatomique', verif: false },
    { auteurs: 'Rab M, Ebmer J, Dellon AL', titre: 'Anatomic variability of the ilioinguinal and genitofemoral nerve: implications for the treatment of groin pain', revue: 'Plast Reconstr Surg', annee: '2001', type: 'anatomie', verif: false, note: 'Base anatomique du chevauchement territorial entre les deux nerfs.' },
    { auteurs: 'Parris D, Fischbein N, Mackey S, Carroll I', titre: 'A novel CT-guided transpsoas approach to diagnostic genitofemoral nerve block and ablation', revue: 'Pain Med', annee: '2010', type: 'technique', verif: false, note: 'Abord proximal scanoguidé — hors échographie.' },
    { titre: 'Role of MR neurography in groin and genital pain: ilioinguinal, iliohypogastric, and genitofemoral neuralgia', revue: 'AJR Am J Roentgenol', doi: '10.2214/AJR.18.20316', type: 'imagerie', verif: true, note: 'Année non vue dans la source consultée.' },
    { titre: 'Ilioinguinal, iliohypogastric, and genitofemoral nerve blocks', revue: 'chapitre d’ouvrage', url: 'https://link.springer.com/chapter/10.1007/978-3-319-05131-4_54', type: 'chapitre', verif: true },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [
    { titre: 'Ultrasound-guided blocks for pelvic pain', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-blocks-for-pelvic-pain/', note: 'chapitre couvrant le génito-fémoral et l’ilio-inguinal' },
  ],

  scenes: [
    {
      id: 'gf-canal', section: 'sonoanatomie', titre: 'Canal inguinal en coupe transversale — repérage du cordon et de la branche génitale',
      legende: 'Sous l’aponévrose de l’oblique externe, le cordon spermatique et son contenu : canal déférent (paroi épaisse, non compressible), plexus pampiniforme, artère testiculaire. La branche génitale est plaquée sur la face postéro-latérale du cordon, contre l’artère spermatique externe — c’est ce petit signal Doppler qui sert de repère, pas le nerf lui-même. Plus profond et plus latéral : les vaisseaux épigastriques inférieurs, limite de progression.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial (pubis)', right: 'Latéral' }).probeInfo({ plan: 'Transverse oblique sur le canal', type: 'linéaire 10–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.fascia({ points: [[0, 86], [640, 80]], width: 2.6 });
        S.label({ x: 96, y: 74, text: 'Aponévrose de l’oblique externe', cls: 'lbl-fascia', small: true, anchor: 'start' });
        S.muscle({ path: 'M330 88 L640 82 L640 128 L352 140 Z', label: 'Oblique interne', at: [520, 110], opacity: 0.45, small: true });
        S.region({ path: 'M200 168 a125 62 0 1 0 250 0 a125 62 0 1 0 -250 0', fill: '#6d7780', opacity: 0.34, label: 'Cordon spermatique', at: [325, 108], small: true });
        S.tendon({ x: 268, y: 152, rx: 12, ry: 11, label: 'Canal déférent', lx: 170, ly: 128, anchor: 'end', small: true, lead: [258, 148] });
        S.vein({ x: 348, y: 142, rx: 12, ry: 9 });
        S.vein({ x: 378, y: 166, rx: 10, ry: 8 });
        S.vein({ x: 336, y: 186, rx: 11, ry: 8, label: 'Plexus pampiniforme', lx: 300, ly: 226, anchor: 'middle', small: true, lead: [334, 194] });
        S.artery({ x: 300, y: 176, r: 7, label: 'A. testiculaire', lx: 150, ly: 190, anchor: 'end', small: true, lead: [293, 176] });
        S.nerve({ x: 418, y: 200, r: 7, label: 'Branche génitale', lx: 470, ly: 252, anchor: 'start', small: true, lead: [424, 205] });
        S.artery({ x: 440, y: 210, r: 5, label: 'A. spermatique externe', lx: 470, ly: 276, anchor: 'start', small: true, lead: [445, 214] });
        S.fascia({ points: [[0, 244], [200, 240], [460, 244], [640, 238]], width: 1.6, opacity: 0.75 });
        S.artery({ x: 560, y: 268, r: 7, label: 'Vx épigastriques inf.', lx: 560, ly: 306, anchor: 'middle', small: true, lead: [560, 276] });
        S.bone({ path: 'M0 330 Q90 300 190 328', label: 'Tubercule pubien', at: [96, 356], small: true, ldy: 0 });
      },
    },
    {
      id: 'gf-bloc', section: 'technique', titre: 'Bloc de la branche génitale — aiguille in-plane, de latéral en médial',
      legende: 'Aiguille 25 G à angle plat, arrêtée AU CONTACT de la face postéro-latérale du cordon : on ne pénètre pas dedans. Critère de fin : croissant anéchogène de 2–4 mL qui coiffe le cordon en postéro-latéral et englobe l’artère spermatique externe, cordon non distendu — puis, à 15–20 min, abolition du réflexe crémastérien homolatéral.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial (pubis)', right: 'Latéral' }).probeInfo({ plan: 'Transverse oblique', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 28 });
        S.fascia({ points: [[0, 86], [640, 80]], width: 2.6 });
        S.muscle({ path: 'M330 88 L640 82 L640 128 L352 140 Z', opacity: 0.4 });
        S.region({ path: 'M200 168 a125 62 0 1 0 250 0 a125 62 0 1 0 -250 0', fill: '#6d7780', opacity: 0.34, label: 'Cordon spermatique', at: [312, 112], small: true });
        S.tendon({ x: 268, y: 152, rx: 12, ry: 11 });
        S.vein({ x: 348, y: 142, rx: 12, ry: 9 });
        S.vein({ x: 378, y: 166, rx: 10, ry: 8 });
        S.vein({ x: 336, y: 186, rx: 11, ry: 8 });
        S.artery({ x: 300, y: 176, r: 7, label: 'A. testiculaire — jamais de particulaire', lx: 152, ly: 200, anchor: 'end', small: true, lead: [293, 178] });
        S.nerve({ x: 418, y: 200, r: 7 });
        S.artery({ x: 440, y: 210, r: 5 });
        S.fascia({ points: [[0, 244], [200, 240], [460, 244], [640, 238]], width: 1.6, opacity: 0.75 });
        S.artery({ x: 560, y: 268, r: 7 });
        S.bone({ path: 'M0 330 Q90 300 190 328' });
        S.target({ x: 424, y: 203, r: 24 });
        S.needle({ from: [640, 106], to: [462, 194], label: '25 G 40 mm' });
        S.spread({ x: 412, y: 208, rx: 56, ry: 24, label: '2–4 mL' });
        S.label({ x: 300, y: 372, text: 'Rester CONTRE le cordon, jamais dedans', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
  ],

  checklist: [
    'Réflexe crémastérien testé et noté DES DEUX CÔTÉS avant le bloc (seul critère objectif de succès)',
    'Avis urologique obtenu si orchialgie (varicocèle, épididymite, kyste, tumeur éliminés)',
    'Corticoïde NON PARTICULAIRE vérifié sur l’étiquette (dexaméthasone) ; aucune adrénaline',
    'Doppler : artère testiculaire, plexus pampiniforme, artère spermatique externe et vaisseaux épigastriques inférieurs identifiés avant la ponction',
    'Volume plafonné à 5 mL par branche pour préserver la valeur diagnostique du test',
    'Cartographie sensitive pré-bloc tracée (scrotum antérieur ou grande lèvre, racine de la cuisse)',
    'Si branche fémorale : quadriceps testé avant la verticalisation, lever accompagné, pas de conduite',
  ],
});
