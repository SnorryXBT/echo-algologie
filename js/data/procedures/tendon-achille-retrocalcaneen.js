/* Fiche : tendinopathie d'Achille et bursite rétro-calcanéenne — gestes échoguidés.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références citées de
   mémoire, marquées verif:false, sans DOI/PMID/URL reconstitués. */
ECHO.register({
  id: 'tendon-achille-retrocalcaneen',
  titre: 'Tendon d\'Achille et bourse rétro-calcanéenne — infiltration, injection de gros volume et sclérose',
  titreCourt: 'Achille et rétro-calcanéen',
  en: 'Achilles tendinopathy (midportion and insertional) and retrocalcaneal bursitis / Haglund syndrome: ultrasound-guided bursal injection, high-volume image-guided injection (paratendon hydrodissection), polidocanol sclerosing injection of neovessels, needle tenotomy and platelet-rich plasma',
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 2,
  grade: 'Forte pour l\'exercice excentrique en traitement de fond (ECR anciens et constants) ; modérée pour l\'injection de gros volume (ECR de petite taille, dont Boesen 2017) ; faible pour le PRP (ECR de référence négatif — de Vos 2010) ; faible à modérée pour la sclérose au polidocanol (ECR de petite taille) ; **preuve de nocivité** pour le corticoïde intratendineux',
  motsCles: ['tendinopathie achilléenne', 'tendinose', 'bursite rétro-calcanéenne', 'Haglund', 'high volume injection', 'polidocanol', 'Alfredson', 'excentrique', 'néovaisseaux', 'paratendon', 'PRP', 'ténotomie'],
  maj: '2026-09',
  resume: 'Deux entités voisines et deux logiques opposées. La **bourse rétro-calcanéenne** est une vraie cavité synoviale qui répond au corticoïde échoguidé — geste simple, à condition de rester strictement extratendineux. La **tendinopathie achilléenne** est une tendinose dégénérative, non inflammatoire : le corticoïde n\'y a pas sa place et l\'injection intratendineuse est une **contre-indication absolue** en raison du risque de rupture. Le traitement de fond reste l\'exercice excentrique, éventuellement complété par les ondes de choc. Les gestes échoguidés utiles visent le **péritendon et ses néovaisseaux**, non le tendon : injection de gros volume qui décolle le paratendon, sclérose au polidocanol. Le PRP, très demandé, a été évalué par un ECR négatif de référence. La forme d\'insertion, souvent associée au conflit de Haglund, répond moins bien à tout et relève plus volontiers de la chirurgie.',

  flash: {
    position: 'ventral', positionNote: 'procubitus, pieds dépassant du bord de la table, chevilles libres en flexion plantaire spontanée ; dorsiflexion pour tendre le tendon lors du repérage',
    sonde: 'lineaire', sondeNote: '10–15 MHz, profondeur 3–4 cm ; Doppler puissance basse PRF indispensable (néovaisseaux)',
    approche: 'in-plane', approcheNote: 'bourse : sonde **transversale**, aiguille de latéral en médial, sous le tendon ; gros volume : sonde **longitudinale**, aiguille de distal en proximal le long de la face profonde du tendon',
    aiguille: '21–25 G, 40–50 mm (21 G et robinet à trois voies pour le gros volume)',
    cible: 'Bourse rétro-calcanéenne (entre face profonde du tendon et calcanéus) **ou** interface tendon / paratendon. **Jamais dans le tendon.**',
    injectat: 'Bursite : corticoïde 20–40 mg équivalent méthylprednisolone + AL 1–2 mL. Gros volume : ~10 mL d\'AL + 30–40 mL de sérum physiologique',
    duree: '10 min (bursite) · 20–25 min (gros volume)',
  },

  indications: [
    '**Bursite rétro-calcanéenne** symptomatique, isolée ou associée à un conflit de **Haglund**, après échec du chaussage adapté (talonnette, contrefort souple) et de la rééducation.',
    '**Tendinopathie corporéale (mid-portion)** chronique de plus de 3–6 mois, **avec néovascularisation au Doppler**, résistante à un programme excentrique bien conduit : indication d\'injection de gros volume ou de sclérose au polidocanol.',
    '**Tendinopathie d\'insertion** rebelle : indication plus limitée et résultats moins bons ; cibler la bourse et le péritendon, jamais l\'enthèse elle-même.',
    '**Paraténonite** (péritendinite) avec épaississement et liquide péritendineux : bonne cible pour l\'hydrodissection du paratendon.',
    '**Bloc / test diagnostique** quand la part respective de la bourse, du tendon et du conflit osseux n\'est pas tranchée : injection d\'AL seul dans la bourse et cotation à 30 min.',
    'Confirmation échographique préalable indispensable : **épaississement > 6 mm** du tendon en coupe sagittale, hypoéchogénicité, désorganisation fibrillaire, néovaisseaux, bourse distendue.',
  ],
  contreIndications: [
    '**Absolue — injection intratendineuse de corticoïde** : quelle que soit l\'indication. Le risque de rupture est le motif principal de la judiciarisation de ce geste. Aucun bénéfice démontré ne le justifie.',
    '**Absolues** : refus, infection cutanée au point de ponction, **rupture partielle étendue ou complète du tendon**, allergie vraie documentée.',
    '**Relatives fortes** : tendon très aminci ou très remanié, athlète en période de compétition, antécédent de corticoïde péritendineux récent, fluoroquinolones récentes ou en cours (risque tendineux propre), corticothérapie générale au long cours.',
    '**Relatives** : diabète déséquilibré, chirurgie du tendon programmée à moins de 3 mois.',
    '**Risque hémorragique** : geste superficiel et compressible, classe **faible** (ASRA-ESRA 2018) — pas d\'arrêt systématique des antiagrégants ni des anticoagulants ; prudence sur le volume en cas d\'anticoagulation efficace (injection de gros volume).',
  ],
  alternatives: 'Le traitement de fond n\'est pas interventionnel : **exercice excentrique** du triceps sural (protocole d\'Alfredson : 3 × 15 répétitions, deux fois par jour, genou tendu puis fléchi, sur 12 semaines), adaptation de la charge d\'entraînement, chaussage et talonnette dans les formes d\'insertion. Les **ondes de choc** apportent un bénéfice additionnel à l\'excentrique dans plusieurs ECR et constituent la deuxième ligne naturelle, sans risque tendineux. Ensuite seulement viennent les gestes échoguidés péritendineux : injection de gros volume, sclérose au polidocanol, ténotomie percutanée à l\'aiguille ± PRP. La **chirurgie** (débridement, résection de l\'angle postéro-supérieur du calcanéus dans le Haglund, réinsertion) reste l\'issue des formes d\'insertion rebelles. À l\'IFD, la valeur ajoutée est de proposer une alternative interventionnelle **sans corticoïde intratendineux** à des patients à qui l\'on a souvent proposé exactement l\'inverse.',

  anatomie: `Le **tendon calcanéen (d\'Achille)** naît de la jonction du gastrocnémien et du soléaire et s\'insère sur la moitié inférieure de la face postérieure du calcanéus. Il n\'a **pas de gaine synoviale** : il est entouré d\'un **paratendon** (péritendon), tissu conjonctif lâche richement vascularisé, dont le décollement est la cible des injections de gros volume.

Sa **zone critique**, hypovasculaire, se situe **2 à 6 cm au-dessus de l\'insertion** : c\'est le siège de la tendinopathie corporéale (mid-portion) et des ruptures. La forme **d\'insertion** siège sur les derniers centimètres et s\'accompagne volontiers de calcifications enthésopathiques.

Deux bourses au voisinage :
- la **bourse rétro-calcanéenne** (pré-achilléenne), **profonde**, entre la face antérieure du tendon et l\'angle postéro-supérieur du calcanéus. C\'est la bourse qui compte : une petite lame liquidienne y est normale, elle devient pathologique quand elle est distendue (au-delà de 2–3 mm environ dans le plan antéro-postérieur, seuil à confirmer selon les séries) ;
- la **bourse rétro-achilléenne** (sous-cutanée, superficielle), entre le tendon et la peau, siège de la « bosse du coureur » par conflit avec le contrefort de la chaussure.

La **graisse de Kager** comble l\'espace triangulaire en avant du tendon, au-dessus du calcanéus ; son coin postéro-inférieur s\'insinue dans la bourse rétro-calcanéenne et bouge à la flexion-extension, ce qui aide à identifier la bourse.

La **déformation de Haglund** est une hypertrophie de l\'angle postéro-supérieur du calcanéus qui pince la bourse rétro-calcanéenne contre le tendon en dorsiflexion. La triade « Haglund + bursite rétro-calcanéenne + tendinopathie d\'insertion » constitue le *syndrome de Haglund*.

Le **nerf sural** et la **petite veine saphène** cheminent en **postéro-latéral**, superficiels, à environ 1–2 cm en dehors du bord latéral du tendon au niveau de la cheville, se rapprochant du tendon en remontant : ils sont sur le trajet de toute ponction venant du dehors (fiche *Nerf sural*).

### Ce qui compte pour le geste
- **La distinction bourse / tendon commande tout** : la bourse est une cavité qui tolère le corticoïde ; le tendon ne le tolère pas. Le seul plan sûr est **entre la face profonde du tendon et l\'os**.
- La **néovascularisation** au Doppler, sur la face profonde du tendon corporéal, est à la fois un marqueur de tendinopathie symptomatique et la cible des traitements sclérosants et des injections de gros volume.
- Le tendon est **très anisotrope** : garder la sonde perpendiculaire avant d\'affirmer une hypoéchogénicité ou une fissure.
- Toute ponction venant du **bord latéral** doit avoir repéré le **nerf sural** et la **petite veine saphène**.
- L\'épaisseur antéro-postérieure du tendon se mesure en **coupe sagittale** ; le seuil usuel de tendinopathie corporéale est **> 6 mm**.`,

  installation: {
    patient: `**Procubitus**, pieds dépassant du bord de la table, chevilles libres : la flexion plantaire spontanée détend le tendon et ouvre la bourse rétro-calcanéenne ; la **dorsiflexion** le tend et l\'aplatit, ce qui aide à mesurer et à repérer les fissures. Alterner les deux pendant le repérage.

Un coussin sous les jambes améliore le confort et stabilise. Marquer au feutre le bord latéral du tendon et la pointe de l\'angle postéro-supérieur du calcanéus.`,
    operateur: `Opérateur **assis au bout de la table**, face aux talons, écran **au-delà, dans l\'axe du regard**.

Deux géométries distinctes :
- **Bourse rétro-calcanéenne** : sonde **transversale** au-dessus de l\'insertion, aiguille **in-plane de latéral en médial**, passant **sous** le tendon, dans la bourse. C\'est la seule géométrie qui permet de voir toute l\'aiguille et de garantir qu\'elle ne traverse pas le tendon.
- **Injection de gros volume / hydrodissection du paratendon** : sonde **longitudinale** sur la portion corporéale, aiguille **in-plane de distal en proximal**, glissée le long de la **face profonde** du tendon, à l\'interface tendon-paratendon.`,
    sonde: `- Linéaire **10–15 MHz**, preset MSK, **profondeur 3–4 cm**, focale sur le tendon, gain modéré.
- **Perpendicularité stricte** : l\'anisotropie du tendon crée de fausses images hypoéchogènes, notamment à l\'insertion où les fibres changent d\'orientation.
- **Doppler puissance, basse PRF, boîte étroite, sans compression** : c\'est l\'examen clé. Les néovaisseaux naissent de la face profonde du tendon et le pénètrent. Une compression même légère les fait disparaître — poser la sonde avec beaucoup de gel et un appui minimal.
- Repérer **avant tout geste latéral** le nerf sural et la petite veine saphène (la veine se dilate en déclive ou sous garrot, ce qui aide à trouver le nerf accolé).
- Mesure : épaisseur antéro-postérieure maximale en **coupe sagittale**, et comparaison au tendon controlatéral.`,
  },

  reperage: [
    { titre: 'Coupe longitudinale du corps du tendon', texte: 'Sonde **sagittale** sur la face postérieure du tendon, du myotendineux à l\'insertion. Aspect normal : bande fibrillaire hyperéchogène régulière, d\'épaisseur constante, entourée du fin liseré du **paratendon**. Mesurer l\'épaisseur antéro-postérieure maximale : **> 6 mm** = tendinopathie corporéale.' },
    { titre: 'Qualifier la lésion', texte: 'Chercher : **épaississement fusiforme**, **hypoéchogénicité** (après avoir écarté l\'anisotropie par bascule de sonde), désorganisation fibrillaire, **fissures** (plages anéchogènes linéaires) et **calcifications** (surtout à l\'insertion). Une fissure étendue ou une rupture partielle change la stratégie et contre-indique les gestes agressifs.' },
    { titre: 'Doppler — chercher les néovaisseaux', texte: 'Doppler puissance, basse PRF, **appui minimal** : les néovaisseaux entrent par la **face profonde** du tendon corporéal. Leur présence signe une tendinopathie active et désigne la cible des injections de gros volume et de la sclérose. Leur absence oriente plutôt vers la poursuite de l\'excentrique.' },
    { titre: 'Coupe transversale à l\'insertion — la bourse', texte: 'Sonde **transversale** juste au-dessus de l\'insertion : le tendon apparaît en coupe comme une bande ovalaire aplatie ; en profondeur, la **bourse rétro-calcanéenne** est une lame anéchogène entre la face profonde du tendon et la corticale calcanéenne. Distendue et compressible : bursite. Vérifier en coupe sagittale.' },
    { titre: 'Chercher le Haglund', texte: 'Coupe sagittale sur l\'insertion : l\'**angle postéro-supérieur du calcanéus** apparaît comme une saillie corticale qui vient au contact du tendon. La mobilisation en dorsiflexion montre le pincement de la bourse entre l\'os et le tendon — c\'est le mécanisme du conflit.' },
    { titre: 'Repérer le nerf sural — et si on ne trouve pas', texte: 'Avant toute ponction latérale : sonde transversale en arrière de la malléole latérale, chercher la **petite veine saphène** (déclive ou garrot pour la dilater) et le **nerf sural** accolé, puis remonter pour suivre leur trajet. Si la bourse n\'est pas visible : mettre la cheville en flexion plantaire, réduire la pression, remettre du gel. Si le tendon paraît normal malgré une clinique franche : penser à une paraténonite isolée (liquide péritendineux, épaississement du paratendon), à une bursite rétro-achilléenne superficielle, ou à une origine osseuse (fracture de fatigue du calcanéus).' },
  ],

  sonoanatomie: [
    { structure: 'Tendon calcanéen (Achille)', aspect: 'Bande fibrillaire hyperéchogène très anisotrope, épaisseur antéro-postérieure régulière', repere: 'Seuil usuel de tendinopathie corporéale : > 6 mm en coupe sagittale' },
    { structure: 'Tendinopathie corporéale', aspect: 'Épaississement fusiforme, hypoéchogénicité, désorganisation fibrillaire, parfois fissures anéchogènes', repere: 'Siège 2–6 cm au-dessus de l\'insertion (zone hypovasculaire)' },
    { structure: 'Néovaisseaux', aspect: 'Signal Doppler puissance pénétrant le tendon depuis sa face profonde, disparaissant à la moindre compression', repere: 'Cible de la sclérose et de l\'injection de gros volume' },
    { structure: 'Paratendon', aspect: 'Fin liseré hyperéchogène entourant le tendon ; épaissi et entouré de liquide dans la paraténonite', repere: 'L\'interface tendon / paratendon est le plan de l\'hydrodissection' },
    { structure: 'Bourse rétro-calcanéenne', aspect: 'Lame anéchogène compressible entre face profonde du tendon et angle postéro-supérieur du calcanéus', repere: 'Pathologique si distendue ; **c\'est la seule cible qui tolère le corticoïde**' },
    { structure: 'Bourse rétro-achilléenne (superficielle)', aspect: 'Petite collection anéchogène entre peau et face postérieure du tendon', repere: 'Conflit avec le contrefort de la chaussure — cible différente, plus superficielle' },
    { structure: 'Angle postéro-supérieur du calcanéus (Haglund)', aspect: 'Saillie corticale hyperéchogène avec ombre, venant au contact du tendon en dorsiflexion', repere: 'Mécanisme du conflit ; sa résection est chirurgicale' },
    { structure: 'Graisse de Kager', aspect: 'Triangle graisseux hyperéchogène en avant du tendon, mobile à la flexion-extension', repere: 'Son coin postéro-inférieur borde la bourse rétro-calcanéenne' },
    { structure: 'Nerf sural et petite veine saphène', aspect: 'Petit faisceau de 2–3 mm accolé à une veine compressible, en postéro-latéral et superficiel', repere: 'Sur le trajet de toute ponction latérale — à repérer avant' },
  ],

  technique: [
    { titre: 'Préparation et décision de cible', texte: 'Checklist (fin de fiche). **Décider explicitement de la cible avant de piquer** : bourse, ou interface tendon-paratendon. Si la cible est le tendon lui-même, c\'est qu\'on s\'est trompé de geste. Désinfection large, gel stérile ou housse, gants stériles. Bursite : seringue de 3 mL, aiguille 25 G 40 mm. Gros volume : aiguille 21 G, robinet à trois voies, seringues préremplies (AL et sérum).' },
    { titre: 'Anesthésie cutanée', texte: 'Bouton de lidocaïne 1 % (0,5–1 mL) au point d\'entrée latéral, **après avoir vérifié en Doppler et en mode B l\'absence du nerf sural et de la petite veine saphène sur le trajet**. Pour le gros volume, anesthésier plus généreusement le trajet sous-cutané : le geste est long et la distension est douloureuse.' },
    { titre: 'Bursite rétro-calcanéenne — ponction in-plane de latéral en médial', texte: 'Sonde **transversale** juste au-dessus de l\'insertion, bourse centrée. Entrer par le **bord latéral** de la sonde, aiguille à plat, strictement **dans le plan**, pointe visible en permanence. Passer **sous le tendon**, dans l\'espace entre sa face profonde et la corticale calcanéenne. **Ne jamais traverser le tendon.** Si le trajet oblige à le traverser, changer d\'angle ou de niveau — jamais forcer.' },
    { titre: 'Test et injection dans la bourse', texte: 'Aspiration (une bourse très distendue peut être évacuée d\'abord). Injecter **0,2–0,3 mL** en test : l\'injectat doit **remplir la bourse** et en dessiner les contours, sans entrer dans le tendon ni fuser dans la graisse de Kager. Résistance franche = mauvaise position. Puis 1–2 mL fractionnés. Critère de fin : bourse distendue et anéchogène, tendon intact à l\'écran.' },
    { titre: 'Injection de gros volume (hydrodissection du paratendon)', texte: 'Sonde **longitudinale** sur la portion corporéale, zone de néovascularisation centrée. Aiguille 21 G **in-plane de distal en proximal**, amenée à l\'**interface entre la face profonde du tendon et le paratendon**. Injecter d\'abord 1–2 mL d\'AL pour confirmer le plan : l\'injectat doit **décoller le tendon du plan profond** sur plusieurs centimètres, en une nappe anéchogène linéaire. Puis injecter le volume total (**~10 mL d\'AL + 30–40 mL de sérum physiologique**) par le robinet à trois voies, **sans jamais déplacer la pointe hors du plan**, en surveillant la progression de la nappe. Si l\'injectat entre dans le tendon : arrêt immédiat, repositionnement.' },
    { titre: 'Critères de fin', texte: '**Bursite** : bourse remplie, tendon indemne. **Gros volume** : décollement du tendon sur toute la zone symptomatique, disparition ou effondrement du signal Doppler des néovaisseaux en fin d\'injection — c\'est le meilleur marqueur d\'efficacité immédiate. Retrait, compression, pansement compressif léger.' },
    { titre: 'Après le geste', texte: 'Consignes strictes : **pas de course, de saut ni de charge excentrique intense pendant 7 à 14 jours** après un geste péritendineux, et **au moins 2 à 4 semaines** après un corticoïde bursal (fenêtre de fragilité). Reprise progressive de l\'**excentrique** ensuite — le geste n\'a de valeur que s\'il ouvre une fenêtre pour la rééducation. Prévenir de la tension et de la gêne des 24–72 h après un gros volume (le volume injecté met plusieurs jours à se résorber). Glycémie chez le diabétique.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bursite rétro-calcanéenne | Méthylprednisolone 20–40 mg **ou** bétaméthasone 3,5–7 mg (Diprostène® 0,5–1 mL) + lidocaïne 1 % ou ropivacaïne 0,2 % | 1–2 mL | **Strictement intra-bursal.** Maximum 2 injections, espacées d\'au moins 3 mois. Consignes de décharge impératives |
| Bloc / test diagnostique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % seule | 1–2 mL | Départage la part de la bourse et celle du tendon dans un syndrome de Haglund |
| Injection de gros volume (mid-portion) | **~10 mL d\'AL** (lidocaïne 1 % ou ropivacaïne 0,2 %) **+ 30–40 mL de sérum physiologique** ; ± corticoïde selon les protocoles publiés | 40–50 mL au total | Schéma de type Chan / Boesen. **Vérifier la dose maximale d\'AL** : 10 mL de lidocaïne 1 % = 100 mg, très en deçà des 4,5 mg/kg — mais recalculer si le patient est de faible poids ou si d\'autres sites sont traités. L\'ajout de corticoïde est **discuté** : Boesen 2017 en utilisait dans le bras gros volume, ce qui empêche d\'attribuer l\'effet au seul volume |
| Sclérose des néovaisseaux | **Polidocanol** (protocoles d\'Alfredson), faibles volumes au contact des néovaisseaux de la face profonde | 0,5–2 mL par séance, 1 à 3 séances espacées de 4–6 semaines | Technique de niche, nécessitant un Doppler de bonne qualité. Concentration et protocole à formaliser avec la pharmacie — préparation non standardisée en France |
| Ténotomie percutanée à l\'aiguille | AL seul puis 10–20 passages dans la zone dégénérative | 2–4 mL d\'AL | Sur tendinopathie corporéale dégénérative. Prévenir d\'une recrudescence de 1–2 semaines |
| PRP | Selon protocole du centre | 3–5 mL | **ECR de référence négatif (de Vos 2010, JAMA)** dans la tendinopathie corporéale. À ne pas proposer en routine sur cette localisation ; le dire au patient qui le demande |
| Hydrodissection simple du paratendon | Sérum physiologique ou dextrose 5 % ± AL | 5–15 mL | Option de faible volume dans les paraténonites, ou quand le gros volume n\'est pas praticable |

**Doses maximales d\'AL** — à recalculer réellement pour l\'injection de gros volume : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Utiliser un AL **dilué** et compléter au sérum plutôt que d\'augmenter la concentration.

**Corticoïde** : jamais dans le tendon, jamais à l\'enthèse. Dans la bourse uniquement, en volume minimal, et pas plus de deux fois. Ne **jamais** utiliser la triamcinolone hexacétonide (Hexatrione®), réservée à l\'intra-articulaire.`,

  variantes: [
    { titre: 'Injection de gros volume (high-volume image-guided injection)', texte: `Principe : distendre mécaniquement l\'interface entre le tendon et le paratendon pour **rompre les néovaisseaux et les néo-nerfs** qui pénètrent le tendon par sa face profonde, et lyser les adhérences péritendineuses. Technique décrite par **Chan 2008** puis évaluée dans l\'ECR en double aveugle de **Boesen 2017**, où le gros volume (associé à un corticoïde) faisait mieux que le PRP et que le placebo sur la douleur et la fonction dans la tendinopathie corporéale, en complément de l\'excentrique.

Limite méthodologique importante à connaître : dans cet essai, le bras gros volume **contenait du corticoïde**, ce qui interdit d\'attribuer l\'effet au volume seul. Les protocoles ultérieurs sans corticoïde donnent des résultats plus mitigés (à confirmer). En pratique : geste réservé aux tendinopathies corporéales avec néovascularisation franche, après échec d\'un excentrique bien conduit, et toujours suivi de la reprise de l\'excentrique.` },
    { titre: 'Sclérose au polidocanol (Alfredson)', texte: `Injection de petits volumes de polidocanol **au contact des néovaisseaux**, sur la face profonde du tendon, sous repérage Doppler. Rationnel : les néovaisseaux sont accompagnés de terminaisons nerveuses sympathiques et sensitives, sources présumées de la douleur ; les scléroser supprime la douleur sans toucher au tendon. L\'ECR en double aveugle d\'**Alfredson et Ohberg (2005)**, de petite taille, montre une réduction de la douleur. Preuve **faible à modérée** : effectifs réduits, technique opérateur-dépendante, produit non standardisé pour cet usage en France. Nécessite un Doppler de bonne qualité et une main très stable. 1 à 3 séances espacées de 4 à 6 semaines.` },
    { titre: 'Ténotomie percutanée à l\'aiguille et PRP', texte: `**Ténotomie / fenestration** : 10 à 20 passages de l\'aiguille dans la zone hypoéchogène dégénérative, sous contrôle échographique, pour relancer une réponse cicatricielle. Peut se faire seule ; preuve faible mais risque limité.

**PRP** : très demandé par les patients et les sportifs. L\'ECR de **de Vos 2010 (JAMA)**, en double aveugle contre placebo dans la tendinopathie corporéale, est **négatif** — c\'est un essai de bonne qualité et il doit être opposé aux demandes. La revue **Cochrane (Kearney 2015)** conclut à des données insuffisantes pour recommander une thérapie injectable quelle qu\'elle soit dans la tendinopathie achilléenne. Position raisonnable : ne pas proposer le PRP en première intention sur cette localisation, et l\'annoncer clairement plutôt que de le vendre.` },
    { titre: 'Forme d\'insertion et syndrome de Haglund', texte: `La tendinopathie **d\'insertion** répond moins bien que la forme corporéale à tous les traitements, y compris à l\'excentrique classique (les protocoles adaptés limitent la dorsiflexion pour éviter le conflit). Les gestes utiles y sont : infiltration de la **bourse rétro-calcanéenne** (pas de l\'enthèse), adaptation du chaussage (contrefort souple, talonnette qui réduit la dorsiflexion), ondes de choc. En cas d\'échec, la **chirurgie** — résection de l\'angle postéro-supérieur du calcanéus et débridement, avec réinsertion si nécessaire — a une place plus précoce que dans la forme corporéale. Ne pas s\'obstiner en infiltrations répétées sur une enthèse calcifiée avec conflit osseux : c\'est un problème de forme, pas d\'inflammation.` },
    { titre: 'Ce qu\'il faut faire avant tout geste : l\'excentrique', texte: `Protocole d\'**Alfredson** : 3 séries de 15 répétitions de flexion plantaire excentrique, deux fois par jour, genou tendu puis genou fléchi, pendant **12 semaines**, en acceptant une douleur modérée pendant l\'exercice. C\'est le traitement le mieux étayé de la tendinopathie corporéale, et le comparateur de tous les essais d\'injection. **Les ondes de choc** apportent un bénéfice additionnel (Rompe 2009). Vérifier l\'observance réelle du programme avant de conclure à un échec et de proposer un geste : un « échec de l\'excentrique » est le plus souvent un excentrique jamais fait correctement.` },
  ],

  pearls: [
    'Décider de la cible **avant** de piquer : bourse ou paratendon. Si la réponse est « le tendon », c\'est le mauvais geste.',
    'La géométrie sûre pour la bourse est la **sonde transversale, aiguille de latéral en médial sous le tendon** : on voit toute l\'aiguille et on ne peut pas traverser le tendon sans s\'en apercevoir.',
    'Doppler **sans appuyer** : quelques grammes de pression suffisent à faire disparaître les néovaisseaux, donc l\'indication.',
    'L\'effondrement du signal Doppler en fin d\'injection de gros volume est le meilleur signe d\'efficacité immédiate.',
    'Basculer la sonde avant d\'appeler « fissure » une zone sombre : l\'insertion achilléenne est un piège d\'anisotropie classique.',
    'Repérer nerf sural et petite veine saphène avant toute ponction latérale — la veine se dilate en déclive et sert de balise.',
    'Recalculer réellement la dose d\'AL pour un gros volume : c\'est le seul geste de cette fiche où la question se pose.',
    'Aucun geste ne remplace 12 semaines d\'excentrique ; le geste sert à rendre l\'excentrique possible.',
  ],
  pieges: [
    '**Injecter du corticoïde dans le tendon** : contre-indication absolue, risque de rupture, et faute difficilement défendable.',
    'Infiltrer l\'enthèse dans une tendinopathie d\'insertion en croyant traiter une bourse : bien identifier la cavité bursale avant.',
    'Traverser le tendon pour atteindre la bourse « parce que c\'est plus court ».',
    'Faire un Doppler en appuyant : on conclut à tort à l\'absence de néovaisseaux et on récuse un patient qui relevait du geste.',
    'Proposer du PRP en première intention sur un Achille : l\'ECR de référence est négatif.',
    'Injecter un gros volume sans avoir vérifié la dose maximale d\'AL chez un patient de faible poids.',
    'Ne pas donner de consigne de décharge après le geste : c\'est dans les 2 à 4 semaines suivantes que le tendon est le plus vulnérable.',
    'Conclure à un échec de l\'excentrique sans avoir vérifié que le patient l\'a réellement fait, deux fois par jour, pendant 12 semaines.',
    'Oublier les fluoroquinolones récentes dans l\'interrogatoire d\'une tendinopathie achilléenne.',
  ],
  complications: [
    '**Rupture du tendon** : la complication redoutée. Favorisée par le corticoïde (surtout intratendineux, mais aussi péritendineux répété), par une reprise précoce de l\'impact et par un tendon déjà fissuré. Douleur brutale avec sensation de coup, perte de la flexion plantaire active, signe de Thompson positif → immobilisation, avis chirurgical urgent, **aucune nouvelle infiltration**.',
    '**Poussée douloureuse et sensation de tension** après injection de gros volume : constante et attendue pendant 24–72 h, le temps que le volume se résorbe. À annoncer, sinon le patient consulte en urgence.',
    '**Lésion du nerf sural** par ponction latérale : dysesthésies du bord latéral du pied et du 5ᵉ orteil, parfois durables — repérage préalable impératif.',
    '**Atrophie sous-cutanée et dépigmentation** au point de ponction : la peau rétro-achilléenne est fine et très visible.',
    '**Infection** : rare mais grave sur un tendon ; asepsie stricte, d\'autant que le geste peut être long (gros volume).',
    '**Hyperglycémie** 24–72 h chez le diabétique.',
    '**Toxicité systémique des AL** : le seul geste de cette fiche où le volume impose de recalculer la dose ; signes prodromiques (goût métallique, paresthésies péribuccales, acouphènes) à connaître, intralipide disponible.',
    '**Aggravation transitoire** après ténotomie ou sclérose : 1 à 2 semaines, attendue.',
  ],
  securite: [
    '**Règle absolue : aucune injection intratendineuse de corticoïde**, quelle que soit la demande du patient ou du prescripteur.',
    'Contrôle échographique permanent de la pointe : à la moindre entrée dans le tendon, arrêt et repositionnement.',
    'Repérage du **nerf sural** et de la **petite veine saphène** avant toute ponction latérale (mode B + Doppler, veine dilatée en déclive).',
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018) : pas d\'arrêt systématique des antiagrégants ni des anticoagulants ; prudence sur le volume et compression prolongée si anticoagulation efficace.',
    'Injection de gros volume : **dose maximale d\'AL recalculée pour le patient**, AL dilué, complément au sérum physiologique, chariot d\'urgence et **intralipide disponibles**.',
    'Rechercher une prise récente de **fluoroquinolones** et une corticothérapie générale : elles majorent le risque tendineux et doivent faire différer ou récuser.',
    'Consignes de décharge écrites systématiques : pas d\'impact 7 à 14 jours après un geste péritendineux, 2 à 4 semaines après un corticoïde bursal.',
    'Rechercher une rupture partielle avant tout geste : elle contre-indique le corticoïde et la ténotomie.',
  ],

  suivi: `- **J0** : EN avant et à 30 min si visée diagnostique ; épaisseur du tendon, présence et intensité des néovaisseaux, état de la bourse — tout consigné avec la cible retenue.
- **J2–J3** : passage de la tension post-injection (gros volume) ou de la poussée douloureuse (corticoïde). On ne juge rien avant.
- **J7–J14** : reprise progressive de l\'**excentrique**, qui est l\'objectif du geste. Vérifier que le patient a bien compris qu\'il n\'a pas été « réparé ».
- **6 semaines** : EN, VISA-A si le centre l\'utilise (score fonctionnel validé de la tendinopathie achilléenne — version française à vérifier), reprise de la course, observance réelle de l\'excentrique. **Contrôle Doppler** : la reprise des néovaisseaux annonce souvent la récidive clinique.
- **3 mois** : durabilité. C\'est le terme d\'évaluation des essais sur le gros volume.
- **Quand répéter** : le gros volume peut être répété une fois à 6–12 semaines si la réponse a été franche mais incomplète. Le corticoïde bursal : **2 fois maximum**, à 3 mois d\'intervalle, jamais plus.
- **Quand escalader** : forme corporéale rebelle après excentrique + ondes de choc + un geste péritendineux bien conduit ⇒ discuter ténotomie, sclérose, ou avis chirurgical. Forme d\'insertion avec Haglund et calcifications rebelle ⇒ **avis chirurgical plus précoce**, ne pas empiler les infiltrations.
- **Toute douleur brutale avec perte de force** en post-geste ⇒ suspicion de rupture : examen clinique (Thompson), échographie, avis chirurgical.`,

  evidence: `*Fiche rédigée sans accès à la recherche bibliographique (budget de session épuisé) : les références sont citées de mémoire et marquées « à vérifier ». Les jugements de force de preuve sont qualitatifs et à reconfirmer.*

- **Exercice excentrique (Alfredson 1998 et abondante littérature ultérieure)** : traitement de fond le mieux étayé de la tendinopathie corporéale. Preuve **forte**. C\'est le comparateur obligé de tout geste, et le co-traitement de tous les essais positifs.
- **Ondes de choc (Rompe 2009, ECR)** : l\'association excentrique + ondes de choc fait mieux que l\'excentrique seul dans la tendinopathie corporéale. Preuve **modérée**, profil de sécurité excellent — c\'est la deuxième ligne logique, avant tout geste injectable.
- **Corticoïde dans les tendinopathies (Coombes 2010, Lancet, revue systématique et méta-analyse)** : bénéfice à court terme mais **résultats moins bons à moyen et long terme** que l\'abstention ou les autres traitements, toutes tendinopathies confondues. Message central : le corticoïde n\'a pas sa place **dans** le tendon, et son usage péritendineux répété est délétère. Preuve **modérée à forte**, et c\'est une preuve de **nocivité**, pas seulement d\'inefficacité.
- **Injection de gros volume (Chan 2008, série ; Boesen 2017, ECR en double aveugle)** : Boesen retrouve une supériorité du gros volume sur le PRP et sur le placebo, en complément de l\'excentrique, sur la douleur et la fonction dans la tendinopathie corporéale. Preuve **modérée**, mais **limite majeure** : le bras gros volume comportait un corticoïde, si bien que l\'effet propre du volume reste incertain. À présenter honnêtement au patient.
- **PRP (de Vos 2010, JAMA, ECR en double aveugle contre placebo)** : **négatif** dans la tendinopathie corporéale, avec un suivi d\'un an. Essai de bonne qualité. Preuve **forte de l\'absence de bénéfice** dans cette indication et à ce protocole — l\'argument à opposer aux demandes.
- **Thérapies injectables, vue d\'ensemble (Kearney 2015, Cochrane)** : données **insuffisantes** pour recommander une injection quelle qu\'elle soit dans la tendinopathie achilléenne. Constat d\'ensemble à garder en tête : ce chapitre est un chapitre de preuves faibles, où la première décision utile est souvent de **ne pas injecter**.
- **Sclérose au polidocanol (Alfredson et Ohberg 2005, ECR de petite taille)** : réduction de la douleur chez des patients sélectionnés sur la présence de néovaisseaux. Preuve **faible à modérée** : effectifs réduits, technique opérateur-dépendante, produit non standardisé pour cet usage en France.
- **Forme d\'insertion (revues systématiques, dont Wiegerinck 2013)** : résultats **moins bons** que dans la forme corporéale pour tous les traitements conservateurs ; place plus précoce de la chirurgie dans les formes avec Haglund et calcifications. Preuve **faible**, littérature hétérogène.
- **Bursite rétro-calcanéenne isolée** : l\'infiltration échoguidée de corticoïde est largement pratiquée et logique (vraie cavité synoviale), mais repose essentiellement sur des **séries et l\'expérience**, pas sur des ECR. Preuve **faible** — à annoncer comme telle.
- **Trou principal de la littérature** : très peu de données comparant directement gros volume, sclérose, ondes de choc et chirurgie ; et aucune stratégie séquentielle validée.`,

  references: [
    { auteurs: 'Alfredson H, Pietilä T, Jonsson P, Lorentzon R', titre: 'Heavy-load eccentric calf muscle training for the treatment of chronic Achilles tendinosis', revue: 'American Journal of Sports Medicine', annee: '1998', type: 'ECR / série contrôlée', verif: false, note: 'Protocole excentrique de référence.' },
    { auteurs: 'de Vos RJ, Weir A, van Schie HTM, et al.', titre: 'Platelet-rich plasma injection for chronic Achilles tendinopathy: a randomized controlled trial', revue: 'JAMA', annee: '2010', type: 'ECR', verif: false, note: 'ECR négatif de référence — à opposer aux demandes de PRP.' },
    { auteurs: 'Boesen AP, Hansen R, Boesen MI, Malliaras P, Langberg H', titre: 'Effect of high-volume injection, platelet-rich plasma, and sham treatment in chronic midportion Achilles tendinopathy: a randomized double-blinded prospective study', revue: 'American Journal of Sports Medicine', annee: '2017', type: 'ECR', verif: false, note: 'Le bras gros volume contenait un corticoïde : effet propre du volume non isolé.' },
    { auteurs: 'Chan O, O\'Dowd D, Padhiar N, et al.', titre: 'High volume image guided injections in chronic Achilles tendinopathy', revue: 'Disability and Rehabilitation', annee: '2008', type: 'série', verif: false },
    { auteurs: 'Alfredson H, Ohberg L', titre: 'Sclerosing injections to areas of neo-vascularisation reduce pain in chronic Achilles tendinopathy: a double-blind randomised controlled trial', revue: 'Knee Surgery, Sports Traumatology, Arthroscopy', annee: '2005', type: 'ECR', verif: false },
    { auteurs: 'Coombes BK, Bisset L, Vicenzino B', titre: 'Efficacy and safety of corticosteroid injections and other injections for management of tendinopathy: a systematic review and meta-analysis of randomised controlled trials', revue: 'The Lancet', annee: '2010', type: 'revue systématique', verif: false, note: 'Preuve de nocivité à moyen terme du corticoïde dans les tendinopathies.' },
    { auteurs: 'Kearney RS, Parsons N, Metcalfe D, Costa ML', titre: 'Injection therapies for Achilles tendinopathy', revue: 'Cochrane Database of Systematic Reviews', annee: '2015', type: 'revue systématique', verif: false },
    { auteurs: 'Rompe JD, Furia J, Maffulli N', titre: 'Eccentric loading versus eccentric loading plus shock-wave treatment for midportion Achilles tendinopathy: a randomized controlled trial', revue: 'American Journal of Sports Medicine', annee: '2009', type: 'ECR', verif: false },
    { auteurs: 'Wiegerinck JI, Kerkhoffs GM, van Sterkenburg MN, Sierevelt IN, van Dijk CN', titre: 'Treatment for insertional Achilles tendinopathy: a systematic review', revue: 'Knee Surgery, Sports Traumatology, Arthroscopy', annee: '2013', type: 'revue systématique', verif: false },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence reprise telle quelle de la fiche nerf-suprascapulaire.js, dont le DOI avait été vérifié lors de sa rédaction.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'achille-sagittal', section: 'sonoanatomie', titre: 'Coupe sagittale de l\'insertion — tendon, bourse et angle de Haglund',
      legende: 'Le tendon vient s\'insérer sur la face postérieure du calcanéus. La bourse rétro-calcanéenne occupe l\'angle entre la face profonde du tendon et la saillie postéro-supérieure du calcanéus : c\'est la seule cible qui tolère le corticoïde. La graisse de Kager comble l\'espace en avant du tendon. Épaississement corporéal au-delà de 6 mm.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Proximal (corps du tendon)', right: 'Distal (insertion)' }).probeInfo({ plan: 'Sagittal, face postérieure', type: 'linéaire 10–15 MHz' });
        S.skin({ thickness: 8, fatBelow: 16 });
        S.tendon({ path: 'M0 76 L286 88 L432 122 L504 246 L480 262 L412 146 L278 110 L0 100 Z' });
        S.fat({ path: 'M96 128 L392 168 L436 208 L300 262 L128 250 Z' });
        S.fluid({ x: 424, y: 168, rx: 36, ry: 13 });
        S.bone({ path: 'M638 312 L544 304 Q470 296 452 212 Q448 186 468 178' });
        S.label({ x: 150, y: 74, text: 'Tendon d\'Achille — épaisseur > 6 mm', cls: 'lbl-tendon', small: true });
        S.label({ x: 236, y: 314, text: 'Graisse de Kager', cls: 'lbl-fat', small: true, lead: [268, 232] });
        S.label({ x: 246, y: 172, text: 'Bourse rétro-calcanéenne', cls: 'lbl-fluid', small: true, lead: [390, 168] });
        S.label({ x: 574, y: 234, text: 'Angle postéro-\nsupérieur (Haglund)', cls: 'lbl-bone', small: true, anchor: 'end', lead: [462, 200] });
        S.label({ x: 592, y: 348, text: 'Calcanéus', cls: 'lbl-bone', small: true, anchor: 'end' });
      },
    },
    {
      id: 'achille-bourse', section: 'technique', titre: 'Bourse rétro-calcanéenne — coupe transversale, aiguille in-plane de latéral en médial',
      legende: 'La seule géométrie sûre : sonde transversale, aiguille venant du bord latéral et passant SOUS le tendon, dans la bourse, entre la face profonde du tendon et la corticale calcanéenne. Le nerf sural et la petite veine saphène sont superficiels et postéro-latéraux : les repérer avant de choisir le point d\'entrée. Aucune injection intratendineuse, jamais.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Latéral', right: 'Médial' }).probeInfo({ plan: 'Transverse, au-dessus de l\'insertion', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 16 });
        S.tendon({ x: 320, y: 110, rx: 150, ry: 26 });
        S.vein({ x: 92, y: 80, rx: 9, ry: 7 });
        S.nerve({ x: 120, y: 84, r: 7 });
        S.fluid({ x: 320, y: 158, rx: 100, ry: 15 });
        S.bone({ path: 'M108 212 Q320 188 542 210', label: 'Calcanéus', at: [330, 248], ldy: 0 });
        S.label({ x: 320, y: 112, text: 'Tendon d\'Achille — jamais dedans', cls: 'lbl-tendon', small: true });
        S.label({ x: 176, y: 60, text: 'N. sural + petite v. saphène', cls: 'lbl-nerve', small: true, anchor: 'start', lead: [128, 78] });
        S.label({ x: 470, y: 316, text: 'Bourse rétro-calcanéenne', cls: 'lbl-fluid', small: true, lead: [392, 160] });
        S.target({ x: 300, y: 158, r: 15 });
        S.needle({ from: [2, 120], to: [250, 156], label: '25 G, latéral → médial, sous le tendon' });
        S.spread({ x: 312, y: 160, rx: 78, ry: 12, label: '1–2 mL intra-bursal' });
      },
    },
    {
      id: 'achille-gros-volume', section: 'technique', titre: 'Injection de gros volume — décollement du paratendon sur la face profonde',
      legende: 'Sonde longitudinale sur la portion corporéale, aiguille 21 G in-plane de distal en proximal, pointe maintenue à l\'interface entre la face profonde du tendon et le paratendon. Le volume décolle le tendon du plan profond et rompt les néovaisseaux qui le pénètrent : l\'effondrement du signal Doppler en fin d\'injection est le meilleur marqueur d\'efficacité immédiate.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Proximal', right: 'Distal' }).probeInfo({ plan: 'Sagittal, portion corporéale', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 14 });
        S.tendon({ path: 'M0 78 L640 90 L640 128 L0 116 Z' });
        S.fascia({ points: [[0, 132], [640, 144]], width: 1.8 });
        S.fat({ path: 'M0 152 L640 164 L640 268 L0 254 Z' });
        S.artery({ x: 232, y: 128, r: 5 });
        S.artery({ x: 300, y: 130, r: 4 });
        S.label({ x: 120, y: 100, text: 'Tendon épaissi et hypoéchogène', cls: 'lbl-tendon', small: true });
        S.label({ x: 236, y: 194, text: 'Néovaisseaux (Doppler)', cls: 'lbl-artery', small: true, lead: [250, 134] });
        S.label({ x: 430, y: 196, text: 'Paratendon', cls: 'lbl-fascia', small: true, lead: [430, 144] });
        S.label({ x: 540, y: 238, text: 'Graisse de Kager', cls: 'lbl-fat', small: true });
        S.target({ x: 340, y: 140, r: 14 });
        S.needle({ from: [638, 182], to: [346, 142], label: '21 G, distal → proximal' });
        S.spread({ x: 320, y: 146, rx: 210, ry: 15, label: '10 mL AL + 30–40 mL sérum' });
      },
    },
  ],

  checklist: [
    'Cible écrite avant le geste : bourse rétro-calcanéenne OU interface tendon-paratendon — jamais le tendon',
    'Recherche d\'une fissure ou d\'une rupture partielle faite et tracée',
    'Doppler fait sans appui, néovascularisation documentée (présence, siège, intensité)',
    'Nerf sural et petite veine saphène repérés avant toute ponction latérale',
    'Prise récente de fluoroquinolones et corticothérapie générale recherchées',
    'Injection de gros volume : dose maximale d\'AL recalculée pour le poids, intralipide disponible',
    'Consignes de décharge écrites : pas d\'impact 7–14 jours (péritendineux) ou 2–4 semaines (corticoïde bursal)',
    'Programme excentrique prescrit ou vérifié, avec date de reprise fixée',
  ],
});
