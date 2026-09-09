/* Fiche : ganglion impar (ganglion de Walther) — bloc échoguidé trans-sacro-coccygien et para-coccygien.
   Rédigée en mode dégradé (budget de recherche web épuisé) : références marquées verif:false à confirmer. */
ECHO.register({
  id: 'ganglion-impar',
  titre: 'Ganglion impar (ganglion de Walther) — bloc échoguidé',
  titreCourt: 'Ganglion impar',
  en: 'Ultrasound-guided ganglion impar (ganglion of Walther) block — trans-sacrococcygeal and para-coccygeal approaches; sacrococcygeal joint and coccygeal apex injection; neurolysis and radiofrequency',
  region: 'rachis-bassin',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Faible (séries prospectives et petits essais, essentiellement dans la coccygodynie ; pas d\'ECR de bonne taille)',
  motsCles: ['ganglion impar', 'ganglion de Walther', 'ganglion sacro-coccygien', 'coccygodynie', 'coccygodynie chronique', 'douleur périnéale', 'proctalgie', 'douleur ano-rectale', 'vulvodynie', 'douleur pelvi-périnéale cancéreuse', 'sympathique', 'trans-sacro-coccygien', 'neurolyse'],
  maj: '2026-09',
  resume: 'Le ganglion impar est le terminus de la chaîne sympathique : un ganglion unique, médian, rétro-péritonéal, plaqué contre la face antérieure de la jonction sacro-coccygienne. Il relaie la composante sympathique et une part de la nociception du périnée, du rectum distal, de l\'anus, de l\'urètre distal et du tiers inférieur du vagin. Son bloc est le geste de référence des douleurs périnéales médianes mal systématisées, de la coccygodynie rebelle et des douleurs pelvi-périnéales cancéreuses, où il ouvre la voie à une neurolyse. La voie trans-sacro-coccygienne, qui traverse le disque S5-Co1, a remplacé les abords historiques par le ligament ano-coccygien. L\'échographie voit parfaitement l\'os, l\'articulation et le trajet de l\'aiguille jusqu\'au cortex — mais **elle ne voit pas au-delà** : la diffusion antérieure, que la fluoroscopie affiche en « virgule » rétro-péritonéale, reste invisible. C\'est la limite honnête de ce geste échoguidé, et elle conditionne le choix de la modalité selon l\'objectif.',

  flash: {
    position: 'ventral', positionNote: 'décubitus ventral, coussin sous le pubis pour effacer la lordose et ouvrir la jonction sacro-coccygienne ; fesses non écartées, champ large',
    sonde: 'lineaire', sondeNote: 'linéaire 6–13 MHz, longitudinale sur la ligne médiane, profondeur 4–6 cm ; convexe seulement si sujet très corpulent',
    approche: 'in-plane', approcheNote: 'sonde longitudinale médiane ; aiguille dans le plan à travers le disque S5-Co1, ou hors du plan avec sonde transversale ; voie para-coccygienne en alternative',
    aiguille: '22–25 G, 40–50 mm (aiguille à ponction lombaire courte) ; 22 G 90–100 mm pour la voie para-coccygienne ; aiguille RF 22 G extrémité active 5–10 mm',
    cible: 'Face **antérieure** du disque sacro-coccygien, en situation rétro-rectale, sur la ligne médiane ; critère de fin : franchissement du cortex antérieur (perte de résistance) sans effraction rectale, injection sans résistance',
    injectat: '2–4 mL : AL ± corticoïde. Neurolyse (alcool ou phénol) ou RF thermique : cancer uniquement, sous contrôle fluoroscopique',
    duree: '10–15 min · 25 min pour une neurolyse ou une RF',
  },

  indications: [
    '**Coccygodynie chronique** après échec des mesures conservatrices (coussin évidé, AINS, kinésithérapie, manipulation interne) — l\'indication la plus fréquente et la mieux documentée, même si la documentation reste modeste.',
    'Douleur **périnéale médiane** sympathique ou mal systématisée : douleur ano-rectale chronique, proctalgie fugace ou chronique, douleur post-hémorroïdectomie, douleur du moignon périnéal après amputation abdomino-périnéale (« anus fantôme »).',
    'Vulvodynie, douleur scrotale ou urétrale distale à composante brûlante, après avoir éliminé les causes locales et évalué la composante pudendale.',
    'Douleur **pelvi-périnéale cancéreuse** (rectum, anus, col, vessie, prostate en envahissement local) : bloc test à l\'AL puis **neurolyse** chimique ou radiofréquence, avec un rapport bénéfice/risque très favorable en situation palliative.',
    'Composante sympathique d\'une douleur neuropathique périnéale, en complément d\'un bloc pudendal quand celui-ci n\'a soulagé que partiellement (les deux cibles sont complémentaires, pas concurrentes).',
    'Infiltration de **l\'articulation sacro-coccygienne** ou de la **pointe du coccyx** dans la coccygodynie post-traumatique ou d\'instabilité : geste voisin, souvent réalisé dans la même séance et à distinguer explicitement du bloc du ganglion.',
  ],
  contreIndications: [
    'Absolues : refus, **infection locale** (abcès péri-anal, sinus pilonidal infecté, dermite du sillon interfessier), sepsis, coagulopathie non contrôlée, allergie vraie aux amino-amides.',
    'Relatives : troubles de l\'hémostase — geste médian profond, **non compressible**, à proximité immédiate du rectum : ne pas le classer par analogie avec un geste superficiel ; risque **intermédiaire** dans le cadre ASRA-ESRA 2018.',
    '**Rectum non préparé ou fécalome** : le rectum est immédiatement en avant de la cible ; un rectum distendu majore le risque de perforation et rend le geste plus incertain.',
    'Anomalie anatomique de la charnière : sacralisation, coccyx fortement luxé ou fusionné, antécédent de coccygectomie, matériel — la voie trans-articulaire peut être impraticable, la voie para-coccygienne devient alors le plan B.',
    'Neurolyse chimique en dehors du cadre cancéreux ou palliatif : rapport bénéfice/risque non favorable en douleur bénigne — s\'en tenir au bloc, voire à la radiofréquence pulsée.',
    'Grossesse : le geste évite l\'irradiation sous échographie, mais l\'indication doit être exceptionnelle.',
  ],
  alternatives: 'Dans la coccygodynie, l\'ordre est important : mesures posturales et coussin évidé, AINS, kinésithérapie et manipulation intra-rectale, puis **infiltration de l\'articulation sacro-coccygienne ou de la pointe du coccyx**, puis bloc du ganglion impar, puis radiofréquence ; la **coccygectomie** reste un dernier recours à réserver aux échecs documentés. Dans la douleur périnéale, les cibles concurrentes ou complémentaires sont le **nerf pudendal** (douleur latéralisée, aggravée en position assise, territoire pudendal — fiche dédiée), le plexus hypogastrique supérieur (douleur pelvienne viscérale plus haute), les nerfs clunéaux moyens et le plancher pelvien myofascial. Un bloc impar négatif chez un patient qui a une douleur assise latéralisée doit faire reconsidérer une névralgie pudendale, et inversement.',

  anatomie: `Le **ganglion impar**, ou **ganglion de Walther**, est le ganglion terminal impair issu de la fusion des deux chaînes sympathiques lombo-sacrées. Il est **médian**, **rétro-péritonéal**, appliqué contre la **face antérieure du sacrum ou du coccyx**. Sa position exacte est **variable** : le plus souvent en regard de la **jonction sacro-coccygienne**, mais on le décrit du niveau de la partie basse du sacrum jusqu\'à la première articulation inter-coccygienne. Cette variabilité explique qu\'on vise un **plan** — la face antérieure de la charnière — plutôt qu\'un point.

Il assure l\'innervation sympathique et une part de la nociception du **périnée**, du **rectum distal et de l\'anus**, de l\'**urètre distal**, du tiers inférieur du **vagin** et de la **vulve / du scrotum**, ainsi que de la région coccygienne.

Immédiatement **en avant** du ganglion : le **rectum**, dont il n\'est séparé que par le fascia pré-sacré et un espace rétro-rectal graisseux de quelques millimètres. C\'est le rapport qui commande toute la sécurité du geste. En arrière : le **disque sacro-coccygien**, le ligament sacro-coccygien postérieur et les plans musculo-aponévrotiques.

### Ce qui compte pour le geste
- **La cible est antérieure au plan osseux** : l\'aiguille doit franchir le disque S5-Co1 et s\'arrêter **juste** au-delà du cortex antérieur. Trop court, on injecte dans le disque ; trop loin, on est dans le rectum.
- **L\'échographie voit l\'os et l\'aiguille jusqu\'au cortex, pas au-delà** : le cône d\'ombre masque la cible et la diffusion. Le repérage échographique est donc excellent pour **l\'accès** (identifier la bonne articulation, mesurer la profondeur, guider l\'aiguille dans le plan) et **muet** sur le **contrôle** de la diffusion antérieure. La fluoroscopie, elle, montre le contraste en « **virgule** » rétro-péritonéale préverticale. Ce partage des rôles doit être assumé : l\'écho pour l\'accès et pour éviter l\'irradiation, la fluoroscopie quand un contrôle de diffusion est indispensable — notamment **avant toute neurolyse**.
- **La jonction sacro-coccygienne n\'est pas toujours mobile ni perméable** : chez le sujet âgé elle est souvent fusionnée. Repérer, par balayage, l\'espace inter-osseux le plus ouvert (sacro-coccygien ou premier inter-coccygien) et l\'utiliser comme fenêtre.
- **Profondeur faible** : la face antérieure du disque est à 2–4 cm de la peau chez l\'adulte de corpulence moyenne. Une aiguille de 40–50 mm suffit par voie trans-articulaire ; la voie para-coccygienne, plus tangentielle, exige 90–100 mm.
- **Ligne médiane stricte** : toute déviation latérale rapproche des racines coccygiennes et sort du plan de la cible.`,

  installation: {
    patient: `**Décubitus ventral**, **coussin sous le pubis** : c\'est ce qui bascule le bassin, efface la lordose et **ouvre** la jonction sacro-coccygienne. Bras le long du corps ou sous la tête, pieds en rotation interne (détend le plancher pelvien).

Vérifier l\'absence de fécalome et, idéalement, faire vider le rectum avant le geste. Repérer et marquer au feutre la **pointe du coccyx**, le **sillon interfessier** et la **ligne médiane**. Champ large, protection du sillon interfessier ; asepsie soignée — c\'est une zone à haut niveau de colonisation.

Expliquer avant le geste : sensation de pression profonde, éventuelle sensation de « besoin » ano-rectal pendant l\'injection (banale), et l\'anesthésie périnéale transitoire attendue.`,
    operateur: `Opérateur au pied ou au côté de la table, écran en face. Sonde tenue **longitudinalement sur la ligne médiane**, l\'extrémité crâniale de l\'image correspondant au sacrum. Ponction dans le plan, l\'aiguille entrant par l\'extrémité **caudale** de la sonde et progressant vers la fenêtre articulaire ; on peut aussi tourner la sonde en transversal et ponctionner hors du plan, en repérant la profondeur au préalable.`,
    sonde: `- **Linéaire 6–13 MHz**, preset MSK, profondeur 4–6 cm, focale sur le plan osseux, gain modéré. Le convexe n\'est utile que chez le sujet très corpulent, et il dégrade la lisibilité de la fine fenêtre articulaire.
- Doppler couleur : peu contributif ici (pas de gros vaisseau sur le trajet), mais utile pour écarter une structure vasculaire aberrante avant une ponction para-coccygienne.
- Aiguille écho-visible ou hydrolocalisation : le trajet est court mais l\'angle est souvent défavorable.
- Prévoir l\'accès à un **amplificateur de brillance** si une neurolyse ou une radiofréquence est envisagée : le contrôle de diffusion par contraste n\'est pas remplaçable par l\'échographie.`,
  },

  reperage: [
    { titre: 'Trouver la pointe du coccyx', texte: 'Sonde **longitudinale, ligne médiane**, posée sur la pointe du coccyx palpée : ligne osseuse hyperéchogène superficielle avec ombre. C\'est le repère de départ le plus facile, et il fixe l\'orientation caudale de l\'image.' },
    { titre: 'Remonter vers le sacrum', texte: 'Translater la sonde en crânial en gardant la ligne médiane : on voit défiler les **segments coccygiens** séparés par de courtes interruptions (articulations inter-coccygiennes), puis la ligne osseuse plus large et plus régulière du **sacrum**. Le **hiatus sacré** et les cornes sacrées sont un repère supplémentaire de médianité (voir la fiche Caudale).' },
    { titre: 'Identifier l\'articulation sacro-coccygienne', texte: 'C\'est la **première interruption** de la ligne osseuse au-dessous du sacrum : un espace hypoéchogène de 2–4 mm entre le bord inférieur de S5 et la base de Co1. Optimiser la fenêtre par de petites bascules (tilt) crânio-caudales : on cherche l\'incidence qui **ouvre** le plus l\'espace.' },
    { titre: 'Mesurer avant de ponctionner', texte: 'Mesurer à l\'écran la **profondeur peau → cortex antérieur** en regard de l\'articulation : c\'est cette valeur qui dira, aiguille en main, quand on est arrivé. C\'est la parade la plus efficace au principal risque du geste, puisqu\'on ne verra pas la pointe au-delà du cortex.' },
    { titre: 'Si l\'articulation est fusionnée ou impraticable', texte: 'Deux solutions, dans cet ordre : chercher la **première articulation inter-coccygienne** (Co1-Co2), souvent plus ouverte, qui est une cible acceptable puisque la position du ganglion est elle-même variable ; ou passer à la **voie para-coccygienne**, qui contourne l\'os et ne dépend pas de la perméabilité articulaire.' },
    { titre: 'Repérer le rectum — et accepter de ne pas le voir', texte: 'En avant du coccyx, le rectum est masqué par le cône d\'ombre osseux ; on peut parfois l\'entrevoir **à travers la fenêtre articulaire** sous forme d\'une structure à contenu mixte, animée. Ne pas compter dessus : la sécurité repose sur la **mesure de profondeur**, l\'arrêt dès la perte de résistance et l\'absence de progression aveugle.' },
  ],

  sonoanatomie: [
    { structure: 'Pointe du coccyx', aspect: 'Ligne osseuse superficielle, hyperéchogène, ombre franche', repere: 'Repère de départ, extrémité caudale de l\'image' },
    { structure: 'Segments coccygiens (Co1-Co4)', aspect: 'Courtes lignes osseuses séparées par des interruptions hypoéchogènes (articulations inter-coccygiennes)', repere: 'Co1-Co2 est la fenêtre de secours si la sacro-coccygienne est fusionnée' },
    { structure: 'Articulation (disque) sacro-coccygienne', aspect: 'Interruption hypoéchogène de 2–4 mm entre S5 et Co1', repere: '**La fenêtre du geste** ; l\'ouvrir au maximum par une bascule de sonde' },
    { structure: 'Sacrum (S4-S5) et hiatus sacré', aspect: 'Ligne osseuse large et régulière ; hiatus en « V » entre les cornes sacrées', repere: 'Confirme la médianité et le niveau' },
    { structure: 'Ligament sacro-coccygien postérieur', aspect: 'Fine bande hyperéchogène pontant l\'articulation en arrière', repere: 'Premier plan résistant franchi par l\'aiguille' },
    { structure: 'Cortex antérieur du disque', aspect: 'Limite profonde de la ligne osseuse, au-delà de laquelle commence le cône d\'ombre', repere: 'Repère du **critère de fin** : la cible est immédiatement au-delà' },
    { structure: 'Espace rétro-rectal / ganglion impar', aspect: '**Non visible** en échographie (masqué par l\'ombre osseuse)', repere: 'Position déduite, jamais vue : d\'où la mesure de profondeur préalable' },
    { structure: 'Rectum', aspect: 'Structure à contenu mixte, parfois entrevue à travers la fenêtre articulaire ; le plus souvent masquée', repere: 'Immédiatement en avant de la cible — la structure à ne pas franchir' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Vérifier l\'absence d\'infection locale et de fécalome. **Asepsie chirurgicale** : détersion large du sillon interfessier, champ adhésif, gants stériles, housse de sonde. Aiguille **22–25 G 40–50 mm**, seringue de 5 mL, prolongateur.' },
    { titre: 'Anesthésie cutanée', texte: '1–2 mL de lidocaïne 1 % au point d\'entrée, à 1 cm en caudal du bord de la sonde, sur la **ligne médiane stricte**. Anesthésier aussi le plan ligamentaire : le franchissement du ligament sacro-coccygien est le temps douloureux.' },
    { titre: 'Ponction dans le plan, à travers le disque S5-Co1', texte: 'Aiguille dirigée vers la fenêtre articulaire repérée, dans le plan de la sonde, ligne médiane stricte. Franchir le **ligament sacro-coccygien postérieur** (première résistance), puis le **disque** (résistance ferme, élastique), en surveillant la profondeur affichée. Ne jamais donner de coup d\'aiguille : la progression est millimétrique.' },
    { titre: 'Critère d\'arrêt — la perte de résistance', texte: 'Le franchissement du **cortex antérieur** se traduit par une **perte de résistance** nette, à la profondeur mesurée au repérage. **C\'est là qu\'on s\'arrête**, sans avancer d\'un millimètre de plus. Retirer le mandrin : absence de reflux de sang, de LCS, de gaz ou de matières (une aspiration ramenant du gaz ou des matières signe la ponction rectale : retrait, antibioprophylaxie, surveillance, geste reporté).' },
    { titre: 'Test et injection', texte: 'Aspiration. Injecter **0,5 mL** : l\'injection doit se faire **sans résistance**. Une résistance persistante signe une pointe encore intra-discale — reculer et réorienter plutôt que forcer. Puis **2–4 mL** fractionnés, en surveillant le confort du patient (une douleur transfixiante ou une sensation de plénitude rectale intense doivent faire arrêter).' },
    { titre: 'Critère de fin et limite assumée', texte: 'Perte de résistance obtenue à la profondeur attendue, absence de reflux, injection sans résistance, absence de douleur anormale. **La diffusion antérieure elle-même n\'est pas visible en échographie** : il n\'y a pas d\'équivalent échographique de l\'image en « virgule » de la fluoroscopie. Si un contrôle de diffusion est requis — neurolyse, radiofréquence, contexte médico-légal — faire le geste sous amplificateur de brillance, ou en repérage échographique complété d\'un cliché de contrôle.' },
    { titre: 'Après le geste', texte: 'Surveillance 30 min : EN avant / après, sensibilité périnéale, absence de saignement, **reprise mictionnelle** avant la sortie, absence de douleur abdominale ou de fièvre. Consignes écrites : reconsulter en urgence en cas de fièvre, de douleur pelvienne croissante, de rectorragie ou d\'écoulement. Pas de bain ni de piscine 48 h.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique / thérapeutique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % | 2–4 mL | Petit volume : la cible est un espace virtuel, un gros volume ne fait que remonter le long du fascia pré-sacré. EN avant / 30 min / 24 h |
| Bloc thérapeutique + corticoïde | AL + dexaméthasone 4–8 mg (**non particulaire, préféré**), bétaméthasone 5,7 mg ou méthylprednisolone 40 mg | 3–4 mL | L\'apport du corticoïde n\'est pas démontré dans cette indication (*à confirmer*) ; il est d\'usage courant. Ne pas répéter à moins de 6–8 semaines |
| Infiltration articulaire sacro-coccygienne (coccygodynie) | AL + corticoïde | **1–2 mL** | Volume articulaire très faible : au-delà, on injecte en péri-articulaire. Geste distinct du bloc du ganglion, à tracer comme tel |
| Infiltration de la pointe du coccyx | AL + corticoïde, en péri-osté | 1–2 mL | Coccygodynie post-traumatique avec point exquis apical |
| **Neurolyse** (cancer uniquement) | Alcool 50–100 % ou phénol 6–10 %, après bloc test positif | 2–4 mL | **Sous contrôle fluoroscopique avec contraste** : sans visualisation de la diffusion, le risque d\'atteinte rectale ou de diffusion incontrôlée n\'est pas acceptable. Injecter un AL avant l\'agent neurolytique |
| Radiofréquence | RF thermique (protocoles usuels 80 °C, 90 s) ou RF pulsée (42 °C, 120 s × 2) | 1–2 mL d\'AL après | La RF **thermique** ne se conçoit que sur repérage fluoroscopique documenté ; la RF pulsée est l\'option de la douleur bénigne |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Les volumes de ce geste sont dérisoires face à ces seuils ; le calcul ne devient utile que si l\'on associe dans la même séance un bloc pudendal bilatéral ou plusieurs infiltrations.

**Ne jamais injecter d\'agent neurolytique sans contrôle de diffusion**, et jamais dans une douleur bénigne.`,

  variantes: [
    { titre: 'Voie para-coccygienne', texte: `Alternative quand la charnière est fusionnée, luxée, ou après coccygectomie partielle. Point d\'entrée **latéral au coccyx**, à 1,5–2 cm de la ligne médiane au niveau de la pointe ou du corps du coccyx ; aiguille 22 G de 90–100 mm dirigée en dedans, en avant et en crânial, **glissant sur la face antérieure du coccyx** jusqu\'à la ligne médiane, en regard de la jonction sacro-coccygienne.

Avantages : indépendante de la perméabilité articulaire, trajet plus long donc plus contrôlable, pas de traversée discale. Inconvénients : l\'aiguille chemine **dans le cône d\'ombre osseux**, donc mal ou pas visible en échographie sur sa partie distale — la voie est en réalité **échoguidée pour l\'entrée et guidée par le contact osseux pour la suite**, ce qui doit être dit. Garder impérativement le **contact osseux permanent** : c\'est lui qui protège du rectum. En cas de perte du contact osseux, retirer et repartir.` },
    { titre: 'Voies historiques et voie trans-anococcygienne', texte: `La description princeps (Plancarte, 1990) passait par le **ligament ano-coccygien**, aiguille courbée à la main, doigt intrarectal pour protéger la paroi antérieure — technique efficace mais inconfortable et exposant à la ponction rectale. La modification de Wemm-Saberski a simplifié le trajet. Ces voies n\'ont plus d\'intérêt face à l\'abord trans-sacro-coccygien, sauf anatomie interdisant tout autre accès. La **voie transpérinéale échoguidée** expose directement au risque d\'**injection intrarectale** : à éviter en pratique algologique courante.` },
    { titre: 'Infiltration de l\'articulation sacro-coccygienne et de la pointe du coccyx', texte: `Dans la coccygodynie, distinguer trois générateurs possibles : l\'**articulation sacro-coccygienne** elle-même (douleur à la mobilisation, instabilité dynamique), la **pointe du coccyx** (point exquis apical, souvent post-traumatique) et le **ganglion impar** (douleur plus diffuse, brûlante, périnéale). L\'échographie permet les trois dans la même installation : injection **intra-articulaire** de 1–2 mL sous contrôle direct (l\'aiguille reste visible, c\'est la cible la plus simple du chapitre), infiltration péri-ostée apicale, puis bloc du ganglion si les deux premiers échouent. Tracer séparément les trois gestes : ce sont trois tests diagnostiques distincts, et les confondre rend le compte rendu ininterprétable.` },
    { titre: 'Neurolyse et radiofréquence', texte: `Réservées à deux situations distinctes. En **cancérologie** : neurolyse à l\'alcool ou au phénol après bloc test positif, **sous fluoroscopie avec contraste** — la durée d\'effet attendue est de plusieurs semaines à quelques mois, ce qui est cohérent avec l\'espérance de vie visée, et le rapport bénéfice/risque est favorable. En **douleur bénigne** : pas de neurolyse chimique ; la **radiofréquence pulsée** (42 °C, 2 Hz, 20 ms, 120 s × 2 cycles) est l\'option raisonnable après blocs répétés efficaces mais brefs ; la RF **thermique** est décrite dans la coccygodynie mais son niveau de preuve est faible et elle expose à une névrite post-lésionnelle — *données à confirmer*.` },
    { titre: 'Combinaison avec le bloc pudendal', texte: `Chez le patient à douleur périnéale complexe, les deux cibles sont complémentaires : le pudendal couvre la composante somatique latéralisée et la douleur assise, l\'impar la composante médiane, viscérale et sympathique. Les faire **séparément et à distance** quand l\'objectif est diagnostique (sinon on ne saura pas lequel a répondu), et éventuellement dans la même séance quand l\'objectif est purement antalgique — en additionnant alors les doses d\'AL.` },
  ],

  pearls: [
    'Le coussin sous le pubis n\'est pas un confort : c\'est lui qui ouvre la jonction sacro-coccygienne et rend le geste faisable.',
    '**Mesurer la profondeur peau → cortex antérieur avant de ponctionner** : puisque la pointe deviendra invisible, cette mesure est le vrai garde-fou.',
    'Chercher la fenêtre articulaire la plus ouverte par de petites bascules de sonde : quelques degrés changent tout.',
    'Si la sacro-coccygienne est fusionnée, la première inter-coccygienne est une cible acceptable — la position du ganglion est de toute façon variable.',
    'Perte de résistance = arrêt. Le geste rate par excès de progression, jamais par prudence.',
    'Tracer séparément infiltration articulaire, infiltration apicale et bloc du ganglion : trois tests, trois réponses, trois décisions.',
  ],
  pieges: [
    'Injecter **dans le disque** (résistance à l\'injection, pas de perte de résistance) et conclure à un échec du bloc : c\'est un échec technique.',
    'Avancer « pour être sûr » après la perte de résistance : c\'est le mécanisme de la perforation rectale.',
    'Dévier de la ligne médiane : on s\'éloigne du ganglion et on se rapproche des racines coccygiennes.',
    'Croire voir la diffusion antérieure en échographie : elle est masquée par l\'ombre osseuse. Ce qu\'on voit, c\'est l\'aiguille jusqu\'au cortex — pas au-delà.',
    'Faire une **neurolyse** sur repérage échographique seul : sans contrôle de diffusion, ce n\'est pas défendable.',
    'Négliger l\'asepsie dans le sillon interfessier ou opérer sur un fécalome : les deux mécanismes principaux des complications infectieuses de ce geste.',
  ],
  complications: [
    '**Perforation rectale** : la complication redoutée. Prévention : mesure de profondeur préalable, arrêt à la perte de résistance, rectum vide, ligne médiane stricte. Si elle survient (reflux de gaz ou de matières, odeur) : retrait, **pas d\'injection**, antibioprophylaxie, surveillance clinique et biologique, avis chirurgical, geste reporté et tracé.',
    '**Infection** : abcès rétro-rectal ou pré-sacré, ostéomyélite, fistule — rares mais graves, favorisés par la contamination du sillon interfessier ou par une effraction rectale méconnue. Toute fièvre ou douleur croissante dans les jours suivants impose une imagerie.',
    'Douleur périostée ou discale post-geste, exacerbation transitoire 24–72 h : fréquente, banale, à annoncer.',
    '**Névrite** ou dysesthésies périnéales, surtout après neurolyse ou radiofréquence thermique : atteinte possible des racines coccygiennes.',
    'Bloc moteur ou sensitif inattendu du périnée / des membres inférieurs par diffusion excessive ou injection intrathécale via une extension durale basse (exceptionnelle) : surveiller la motricité et la miction avant la sortie.',
    'Saignement, hématome pré-sacré : rare, mais site non compressible.',
    'Troubles transitoires de la continence ou de la miction, dysfonction sexuelle : rapportés surtout après neurolyse ; à mentionner explicitement dans l\'information avant tout geste destructeur.',
  ],
  securite: [
    'Geste médian, profond, **non compressible**, au contact du rectum : risque hémorragique **intermédiaire** (cadre ASRA-ESRA 2018) et risque infectieux réel — asepsie chirurgicale, pas de geste sur peau douteuse ni sur rectum plein.',
    '**Mesure échographique de la profondeur peau → cortex antérieur avant la ponction**, et arrêt à la perte de résistance : la sécurité repose sur ces deux points, puisque la pointe n\'est plus visible au-delà du cortex.',
    'Ligne médiane stricte ; en voie para-coccygienne, **contact osseux permanent**.',
    'Aspiration systématique (sang, LCS, gaz, matières) avant toute injection ; injection sans résistance obligatoire.',
    '**Aucune neurolyse ni radiofréquence thermique sans contrôle fluoroscopique de la diffusion**, et aucune neurolyse en douleur bénigne.',
    'Surveillance 30 min minimum, reprise mictionnelle vérifiée, consignes écrites de reconsultation en urgence (fièvre, douleur croissante, rectorragie).',
  ],

  suivi: `- **J0** : EN avant / à 30 min, sensibilité périnéale, absence de saignement, reprise mictionnelle. Coter séparément la **douleur assise** et la **douleur à la défécation**, qui sont les deux plaintes les plus spécifiques ici.
- **J1–J7** : surveillance des signes infectieux (fièvre, douleur croissante, écoulement) — le seul risque grave de ce geste se déclare dans cette fenêtre.
- **J15–J30** : EN, durée de station assise tolérée, retentissement sur la défécation et le sommeil. Décision :
  - réponse franche et durable → espacer, réévaluer à 3 mois ;
  - réponse franche mais brève, douleur bénigne → discuter la **radiofréquence pulsée**, ou reprendre les mesures conservatrices avec une fenêtre antalgique ;
  - réponse franche mais brève, **contexte cancéreux** → **neurolyse sous fluoroscopie** ;
  - réponse nulle malgré un geste techniquement réussi → **changer de cible** (articulation sacro-coccygienne, pointe du coccyx, nerf pudendal, plancher pelvien) plutôt que répéter.
- **3 mois** : bilan global, réévaluation de la stratégie ; ne pas empiler plus de 2 à 3 blocs sans bénéfice objectivé.
- Dans la coccygodynie, coupler systématiquement au traitement postural (coussin évidé) et à la kinésithérapie : le bloc seul ne règle pas une instabilité mécanique.`,

  evidence: `- **Description princeps** : le blocage du ganglion de Walther a été décrit par **Plancarte et al. en 1990** par voie ano-coccygienne, dans les douleurs périnéales cancéreuses. C\'est une description de technique et une série, pas un essai.
- **Voie trans-sacro-coccygienne** : la simplification de l\'abord par traversée du disque S5-Co1 (série prospective observationnelle de **Toshniwal et al., 2007**, dans les douleurs périnéales chroniques) a fait de cette voie le standard. Preuve **observationnelle**.
- **Échoguidage** : la faisabilité du repérage échographique a été rapportée en **2010 (Lin et al., rapport technique)** et, en cancérologie périnéale, l\'échographie a été proposée pour reproduire la technique originale de neurolyse (**Gupta et al., 2008**). Ces travaux établissent la **faisabilité de l\'accès**, non la validité du contrôle de diffusion — qui reste fluoroscopique.
- **Coccygodynie** : plusieurs séries prospectives et études pilotes rapportent une amélioration significative de la douleur après bloc trans-sacro-coccygien, avec des effectifs modestes et un recul de quelques mois. Les infiltrations guidées de l\'articulation sacro-coccygienne et de la pointe du coccyx sont également documentées par des séries. **Preuve faible**, cohérente mais non contrôlée.
- **Comparaison échographie vs fluoroscopie** : pas d\'essai comparatif de bonne taille dans cette indication à notre connaissance. L\'argument en faveur de l\'échographie est l\'absence d\'irradiation d\'une région gonadique chez des patients souvent jeunes et multi-infiltrés ; l\'argument en faveur de la fluoroscopie est le **contrôle de la diffusion**. Les deux sont recevables et l\'arbitrage se fait sur l\'objectif du geste, pas sur une supériorité démontrée.
- **Trous de la littérature, à assumer** : aucun ECR contre placebo ; pas de standardisation du volume, du produit, ni du niveau exact de ponction ; apport du corticoïde non démontré ; place respective des trois cibles de la coccygodynie (articulation, apex, ganglion) jamais comparée directement ; durée d\'effet mal quantifiée. Le geste se justifie par sa simplicité, son innocuité relative quand il est bien conduit, et par l\'absence d\'alternative dans la douleur périnéale médiane rebelle — pas par un niveau de preuve d\'efficacité.

*Mode dégradé : les références de cette fiche marquées « à vérifier » n\'ont pas pu être reconfirmées par une recherche bibliographique lors de sa rédaction (budget épuisé). Vérifier auteurs, revue, année et pagination avant toute citation externe.*`,

  references: [
    { verif: false, auteurs: 'Plancarte R, Amescua C, Patt RB, Allende S', titre: 'Presacral blockade of the ganglion of Walther (ganglion impar)', revue: 'Anesthesiology', annee: '1990', type: 'description princeps', note: 'Communication / résumé ; référence exacte à confirmer.' },
    { verif: false, auteurs: 'Wemm K, Saberski L', titre: 'Modified approach to block the ganglion impar (ganglion of Walther)', revue: 'Regional Anesthesia', annee: '1995', type: 'technique', note: 'À confirmer.' },
    { verif: false, auteurs: 'Toshniwal GR, Dureja GP, Prashanth SM', titre: 'Transsacrococcygeal approach to ganglion impar block for management of chronic perineal pain: a prospective observational study', revue: 'Pain Physician', annee: '2007', type: 'série prospective', note: 'Voie devenue standard ; à confirmer.' },
    { verif: false, auteurs: 'Lin CS, Cheng JK, Hsu YW, et al.', titre: 'Ultrasound-guided ganglion impar block: a technical report', revue: 'Pain Medicine', annee: '2010', type: 'rapport technique', note: 'Faisabilité de l\'échoguidage ; à confirmer.' },
    { verif: false, auteurs: 'Gupta D, Jain R, Mishra S, Kumar S, Thulkar S, Bhatnagar S', titre: 'Ultrasonography reinvents the originally described technique for ganglion impar neurolysis in perianal cancer pain', revue: 'Anesthesia & Analgesia', annee: '2008', type: 'série de cas', note: 'À confirmer.' },
    { verif: false, auteurs: 'Gunduz OH, Sencan S, Kenis-Coskun O', titre: 'Pain relief due to transsacrococcygeal ganglion impar block in chronic coccygodynia: a pilot study', revue: 'Pain Medicine', annee: '2015', type: 'étude pilote', note: 'À confirmer.' },
    { verif: false, auteurs: 'Sencan S, et al.', titre: 'Ganglion impar block improves neuropathic pain in coccygodynia: a prospective observational study', revue: '', annee: '', type: 'série prospective', note: 'Revue et année à confirmer.' },
    { verif: false, auteurs: 'Mitra R, Cheung L, Perry P', titre: 'Efficacy of fluoroscopically guided steroid injections in the management of coccydynia', revue: 'Pain Physician', annee: '2007', type: 'série', note: 'Infiltration articulaire sacro-coccygienne ; à confirmer.' },
    { verif: false, auteurs: 'Foye PM', titre: 'Coccydynia: tailbone pain', revue: 'Physical Medicine and Rehabilitation Clinics of North America', annee: '2017', type: 'revue', note: 'Cadre clinique de la coccygodynie ; à confirmer.' },
    { verif: true, auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [],

  scenes: [
    {
      id: 'impar-sono', section: 'sonoanatomie', titre: 'Coupe longitudinale médiane sacro-coccygienne — la fenêtre articulaire',
      legende: 'Sonde longitudinale sur la ligne médiane. La ligne osseuse du sacrum s\'interrompt à l\'articulation sacro-coccygienne : c\'est la fenêtre du geste. Le ganglion impar est en avant du disque, en situation rétro-rectale — invisible en échographie, comme le rectum, masqués par le cône d\'ombre osseux. D\'où la règle : mesurer la profondeur peau → cortex antérieur avant de ponctionner.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Crânial (sacrum)', right: 'Caudal (pointe du coccyx)' }).probeInfo({ plan: 'Longitudinal, ligne médiane', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 40 });
        S.muscle({ path: 'M0 96 L640 96 L640 128 L0 134 Z', label: 'Plans musculo-aponévrotiques', at: [150, 116], opacity: 0.4, small: true });
        S.ligament({ path: 'M196 140 L300 142 L300 150 L196 148 Z', label: 'Lig. sacro-coccygien post.', at: [250, 122], small: true });
        S.bone({ path: 'M0 152 L226 150', label: 'Sacrum (S4-S5)', at: [96, 186], ldy: 0, small: true });
        S.bone({ path: 'M266 158 L378 161' });
        S.bone({ path: 'M404 168 L502 173' });
        S.bone({ path: 'M528 182 L616 191' });
        S.label({ x: 322, y: 194, text: 'Co1', cls: 'lbl-bone', small: true });
        S.label({ x: 452, y: 204, text: 'Co2', cls: 'lbl-bone', small: true });
        S.label({ x: 572, y: 216, text: 'Co3 / pointe', cls: 'lbl-bone', small: true });
        S.label({ x: 246, y: 128, text: 'Articulation\nsacro-coccygienne', cls: 'lbl-target', small: true, lead: [246, 152] });
        S.nerve({ x: 248, y: 206, rx: 12, ry: 9, label: 'Ganglion impar (déduit,\nnon visible)', lx: 130, ly: 244, anchor: 'middle', lead: [238, 208], small: true });
        S.region({ path: 'M120 268 L560 262 L560 344 L120 350 Z', fill: '#8b959e', opacity: 0.22, label: 'Rectum — masqué par le cône d\'ombre', at: [340, 308], small: true });
        S.label({ x: 470, y: 384, text: 'Mesurer ici la profondeur peau → cortex antérieur', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
    {
      id: 'impar-tsc', section: 'technique', titre: 'Voie trans-sacro-coccygienne — à travers le disque S5-Co1',
      legende: 'Aiguille 22–25 G, ligne médiane stricte, dirigée vers la fenêtre articulaire ouverte au maximum par la bascule de sonde. Franchir le ligament sacro-coccygien puis le disque, et **s\'arrêter à la perte de résistance**, à la profondeur mesurée au repérage. L\'injectat va sur la face antérieure du disque, en rétro-rectal : sa diffusion n\'est pas visible en échographie — c\'est la limite de la méthode, et la raison pour laquelle toute neurolyse se fait sous fluoroscopie.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Crânial (sacrum)', right: 'Caudal' }).probeInfo({ plan: 'Longitudinal médian', type: 'in-plane, 22–25 G' });
        S.skin({ thickness: 8, fatBelow: 40 });
        S.muscle({ path: 'M0 96 L640 96 L640 128 L0 134 Z', opacity: 0.4 });
        S.ligament({ path: 'M196 140 L300 142 L300 150 L196 148 Z', label: 'Lig. sacro-coccygien', at: [180, 122], anchor: 'end', small: true });
        S.bone({ path: 'M0 152 L226 150', label: 'Sacrum', at: [86, 186], ldy: 0, small: true });
        S.bone({ path: 'M266 158 L378 161', label: 'Co1', at: [322, 196], ldy: 0, small: true });
        S.bone({ path: 'M404 168 L502 173' });
        S.bone({ path: 'M528 182 L616 191' });
        S.target({ x: 248, y: 206, r: 18 });
        S.needle({ from: [268, 56], to: [248, 202], label: 'Perte de résistance = arrêt' });
        S.spread({ x: 248, y: 210, rx: 46, ry: 18, label: '2–4 mL' });
        S.region({ path: 'M120 268 L560 262 L560 344 L120 350 Z', fill: '#8b959e', opacity: 0.22, label: 'Rectum — immédiatement en avant', at: [366, 306], small: true });
        S.label({ x: 470, y: 386, text: 'Diffusion antérieure NON visible en écho\n(pas d\'équivalent de la « virgule » fluoroscopique)', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
    {
      id: 'impar-para', section: 'technique', titre: 'Voie para-coccygienne et infiltration de l\'articulation sacro-coccygienne',
      legende: 'Deux gestes à distinguer. **Voie para-coccygienne** (aiguille 22 G 90–100 mm) : entrée latérale au coccyx, progression en dedans et en avant au **contact osseux permanent** jusqu\'à la ligne médiane, en regard de la jonction — utile si l\'articulation est fusionnée, mais la partie distale de l\'aiguille chemine dans le cône d\'ombre et n\'est pas visible. **Infiltration articulaire sacro-coccygienne** (1–2 mL) : cible superficielle, aiguille visible de bout en bout, à tracer comme un test diagnostique distinct.',
      opts: { depth: 6 },
      build: S => {
        S.orient({ left: 'Crânial (sacrum)', right: 'Caudal' }).probeInfo({ plan: 'Longitudinal médian / para-médian', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 40 });
        S.muscle({ path: 'M0 96 L640 96 L640 128 L0 134 Z', opacity: 0.4 });
        S.bone({ path: 'M0 152 L226 150', label: 'Sacrum', at: [80, 184], ldy: 0, small: true });
        S.bone({ path: 'M266 158 L378 161', label: 'Co1', at: [322, 194], ldy: 0, small: true });
        S.bone({ path: 'M404 168 L502 173' });
        S.bone({ path: 'M528 182 L616 191', label: 'Pointe du coccyx', at: [576, 224], ldy: 0, small: true });
        S.needle({ from: [190, 58], to: [242, 148], label: 'Infiltration articulaire (1–2 mL)' });
        S.spread({ x: 244, y: 152, rx: 24, ry: 10 });
        S.needle({ from: [634, 268], to: [276, 216], label: 'Voie para-coccygienne — contact osseux permanent' });
        S.spread({ x: 268, y: 214, rx: 46, ry: 16, label: '2–4 mL' });
        S.region({ path: 'M120 288 L560 282 L560 352 L120 358 Z', fill: '#8b959e', opacity: 0.2, label: 'Rectum', at: [400, 322], small: true });
        S.label({ x: 430, y: 388, text: 'Perte du contact osseux = retrait immédiat', cls: 'lbl-target', small: true, anchor: 'middle' });
      },
    },
  ],

  checklist: [
    'Absence d\'infection locale (sillon interfessier, sinus pilonidal) et de fécalome vérifiée avant le geste',
    'Coussin sous le pubis en place ; ligne médiane et pointe du coccyx marquées',
    '**Profondeur peau → cortex antérieur mesurée à l\'écran avant la ponction** et annoncée à voix haute',
    'Asepsie chirurgicale (zone à haut niveau de colonisation) : détersion large, champ, housse de sonde',
    'Arrêt à la perte de résistance ; aspiration cherchant sang, LCS, gaz et matières avant toute injection',
    'Aucune neurolyse ni radiofréquence thermique sans contrôle fluoroscopique de la diffusion, ni en douleur bénigne',
    'Reprise mictionnelle vérifiée avant la sortie ; consignes écrites de reconsultation en urgence (fièvre, douleur croissante, rectorragie)',
    'Gestes tracés séparément : infiltration articulaire / infiltration apicale / bloc du ganglion',
  ],
});
