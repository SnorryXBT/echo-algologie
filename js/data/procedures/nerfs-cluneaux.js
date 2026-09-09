/* Fiche : nerfs clunéaux supérieurs et moyens — bloc, hydrodissection, PRF. */
ECHO.register({
  id: 'nerfs-cluneaux',
  titre: 'Nerfs clunéaux supérieurs et moyens — bloc et hydrodissection',
  titreCourt: 'Nerfs clunéaux',
  en: 'Ultrasound-guided superior and middle cluneal nerve block (SCN / MCN) — osteofibrous tunnel of the iliac crest, long posterior sacroiliac ligament; hydrodissection, pulsed radiofrequency, cryoablation',
  region: 'rachis-bassin',
  types: ['bloc', 'interventionnel'],
  niveau: 2,
  grade: 'Faible à modérée (séries prospectives, méta-analyse d\'études observationnelles ; aucun ECR contre placebo)',
  maj: '2026-09',
  motsCles: ['cluneal', 'clunéal', 'SCN', 'MCN', 'lombalgie', 'pseudo-lombalgie', 'pseudo-sciatique', 'douleur de crête iliaque', 'Maigne', 'syndrome de la charnière thoraco-lombaire', 'fessier', 'tunnel ostéo-fibreux', 'ligament sacro-iliaque postérieur long', 'LPSL', 'Tinel'],
  resume: 'Les nerfs clunéaux sont la cause de lombalgie que l\'on ne cherche pas : purement sensitifs, ils miment une lombalgie commune, une sacro-iliite ou une pseudo-sciatique, et ne se voient sur aucune imagerie. Le clunéal supérieur (SCN, rameaux latéraux des racines dorsales T11–L4) se piège en franchissant la crête iliaque dans un tunnel ostéo-fibreux, à 6–8 cm de la ligne médiane ; le clunéal moyen (MCN, S1–S3) se piège sous le ligament sacro-iliaque postérieur long, où il mime une douleur sacro-iliaque. Le diagnostic est clinique (point de Tinel exquis sur la crête ou sous l\'EIPS, reproduction de la plainte à la pression) et se confirme par le bloc : c\'est un test, pas seulement un traitement. Le geste est superficiel, rapide, à faible risque, et se rentabilise en HDJ comme filtre avant toute escalade (radiofréquence des branches médiales, infiltration sacro-iliaque, chirurgie du rachis). L\'escalade — PRF, cryoneurolyse, RFA, neurostimulation, décompression — n\'est légitime qu\'après un bloc test franchement positif.',

  flash: {
    position: 'ventral', positionNote: 'coussin sous l\'abdomen pour effacer la lordose ; marquer au feutre le point de Tinel et la ligne médiane avant de désinfecter',
    sonde: 'lineaire', sondeNote: '6–13 MHz (10–15 MHz si sujet mince), profondeur 3–4 cm ; convexe 2–5 MHz seulement si IMC élevé',
    approche: 'in-plane', approcheNote: 'sonde posée le long du grand axe de la crête iliaque (nerfs en coupe courte) ; ponction latéro-médiale dans le plan, le long du tunnel',
    aiguille: '25 G 40–50 mm (bloc), 22 G 50 mm si corticoïde visqueux ; aiguille RF 22 G 54 mm extrémité active 5 mm pour la PRF',
    cible: 'Espace entre le fascia (aponévrose thoraco-lombaire / glutéale) et le cortex de la crête iliaque : l\'injectat doit décoller le fascia de l\'os en une nappe anéchogène qui court le long de la crête et englobe les points nerveux',
    injectat: '3–5 mL par site : ropivacaïne 0,2 % ou lidocaïne 1 % ± corticoïde ; ou G5 % 5–10 mL en hydrodissection',
    duree: '10 min bloc · 20–25 min PRF ou hydrodissection étendue',
  },

  indications: [
    'Lombalgie chronique basse **unilatérale** avec point douloureux exquis sur la crête iliaque à 6–8 cm de la ligne médiane, reproduisant la plainte à la pression (critères de Maigne) — bloc diagnostique puis thérapeutique.',
    'Douleur fessière haute ou « pseudo-sciatique » sans topographie radiculaire, sans signe neurologique déficitaire, IRM lombaire non contributive ou discordante.',
    'Douleur de type sacro-iliaque avec Tinel sous l\'épine iliaque postéro-supérieure : évoquer le **clunéal moyen** sous le ligament sacro-iliaque postérieur long avant de conclure à une sacro-iliite (Konno 2017, Isu 2018).',
    'Lombalgie après fracture vertébrale ostéoporotique : prévalence du trouble clunéal supérieur significativement plus élevée dans ce sous-groupe (27 % vs 12 %, Kuniya 2014) — à rechercher systématiquement chez la femme âgée qui « ne récupère pas ».',
    'Douleur résiduelle après arthrodèse ou prélèvement de greffon iliaque postérieur (le nerf est dans le champ opératoire) ; douleur de cicatrice ou de ceinture / harnais.',
    'Filtre avant escalade : bloc test négatif = ne pas engager de PRF, de cryoneurolyse, de neurostimulation ni de décompression chirurgicale.',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée au point de ponction, allergie vraie aux amino-amides.',
    'Relatives : troubles de l\'hémostase — geste **superficiel et compressible**, classé à **faible risque hémorragique** dans les recommandations ASRA-ESRA 2018 sur les procédures interventionnelles douleur : pas d\'arrêt systématique des antiagrégants, anticoagulants au cas par cas.',
    'Corticoïde : diabète déséquilibré (glycémie 48–72 h), infection évolutive, et surtout **site sous-cutané mince** — l\'atrophie graisseuse et la dépigmentation sont ici un vrai risque cosmétique, visible et durable ; préférer une dose faible, un produit non particulaire, ou pas de corticoïde du tout.',
    'Doute diagnostique majeur : ne pas utiliser le bloc comme substitut à l\'examen neurologique. Un déficit moteur, un syndrome de la queue de cheval ou un drapeau rouge imposent le bilan avant tout geste.',
    'Grossesse : geste réalisable sans irradiation (avantage de l\'échoguidage), mais éviter le corticoïde.',
  ],
  alternatives: 'En amont : traitement de la charnière thoraco-lombaire elle-même (le syndrome de Maigne est une souffrance segmentaire T12-L1 dont la douleur clunéale n\'est que la projection) — manipulation, infiltration des articulaires postérieures thoraco-lombaires, rééducation. En parallèle : blocs des branches médiales lombaires et infiltration sacro-iliaque, qui sont les deux diagnostics concurrents à éliminer — un bloc clunéal positif dispense d\'une radiofréquence facettaire inutile, et c\'est là son meilleur rendement médico-économique. En aval, après bloc test positif mais soulagement bref : hydrodissection au G5 %, PRF, cryoneurolyse, radiofréquence thermique en « strip lesion » le long de la crête, neurostimulation périphérique, et en dernier ressort décompression chirurgicale du tunnel ostéo-fibreux (série systématique de 236 cas opérés).',

  anatomie: `Les **nerfs clunéaux supérieurs** naissent des rameaux latéraux des branches postérieures de T11 à L4 (le plus souvent T12-L3). Ils traversent successivement le multifide, l\'érecteur du rachis, le feuillet antérieur du fascia thoraco-lombaire, le carré des lombes, le feuillet moyen du fascia thoraco-lombaire et le grand dorsal, puis franchissent la **crête iliaque** pour gagner le tissu sous-cutané de la fesse, dont ils innervent le tiers supérieur (peau en regard du grand et du moyen fessier). On décrit classiquement trois branches — médiale, intermédiaire, latérale — mais le nombre et le trajet sont très variables d\'un sujet à l\'autre.

Le point critique est le passage de la crête : au moins une branche, le plus souvent la **branche médiale**, chemine dans un **tunnel ostéo-fibreux** délimité par le bord supérieur de la crête iliaque et le fascia thoraco-lombaire, à environ **6–7 cm de la ligne médiane** (7 cm dans les critères de Maigne et dans la série prospective de Kuniya). C\'est un canal inextensible : toute traction (flexion-extension, rotation du tronc) ou tout épaississement fibreux y crée un conflit, avec une douleur de crête, une allodynie fessière et une irradiation descendante trompeuse — la « pseudo-sciatique » ne dépasse jamais le genou et n\'a pas de systématisation radiculaire.

Les **nerfs clunéaux moyens** naissent des rameaux latéraux des branches dorsales de **S1 à S3**, sortent des foramens sacrés postérieurs et cheminent latéralement en passant **sous le ligament sacro-iliaque postérieur long (LPSL)**, tendu de l\'épine iliaque postéro-supérieure à la crête sacrée latérale. L\'étude anatomique de Konno (30 hémi-bassins, 20 donneurs) a identifié 64 branches clunéales moyennes : **10 perforaient le LPSL** et 4 d\'entre elles présentaient une **striction nette** sous le ligament. C\'est le substrat anatomique d\'une douleur qui mime exactement une souffrance sacro-iliaque.

### Ce qui compte pour le geste
- **Nerfs purement sensitifs** : aucun risque de bloc moteur, aucun risque fonctionnel. C\'est ce qui rend le bloc test si confortable à proposer.
- **Cible = un plan, pas un point.** Le nerf mesure 1–2 mm et n\'est pas toujours individualisable ; le repère fiable est **l\'interface fascia / cortex iliaque**. Injecter dans ce plan, le long de la crête, couvre les branches quelle que soit la variation anatomique.
- **Profondeur faible** : 1,5–3 cm chez le sujet mince, jusqu\'à 4–5 cm chez l\'obèse. Sonde haute fréquence, focale haute, gain bas.
- **Rien en profondeur** : sous le cortex iliaque, il n\'y a que l\'ombre osseuse. Pas de plèvre, pas de gros vaisseau, pas de péritoine — à condition de rester **sur l\'os** et de ne jamais dépasser la crête vers l\'avant ni vers le dedans (l\'espace rétro-péritonéal est au-delà du bord antérieur de la crête).
- **Latéralité et unilatéralité** : le tableau clunéal est presque toujours unilatéral. Une douleur bilatérale symétrique doit faire douter du diagnostic.
- **Deux étages, deux gestes** : SCN sur la crête, MCN sous l\'EIPS au LPSL. Chez le patient qui décrit *deux* points de Tinel, bloquer les deux dans la même séance, en notant les volumes séparément.`,

  installation: {
    patient: `**Décubitus ventral**, coussin sous l\'abdomen (efface la lordose et met le fascia en tension), bras le long du corps ou sous la tête, pieds en dehors du bord de la table. Le décubitus latéral côté douloureux vers le haut est une alternative acceptable chez le patient qui ne tolère pas le procubitus.

Avant toute désinfection : palper le point de reproduction maximale de la douleur, tracer au feutre **la ligne des épineuses**, la **crête iliaque** et le **point de Tinel**, et mesurer sa distance à la ligne médiane. Ce marquage est le vrai fil conducteur du geste : la fenêtre échographique se déplace, pas le feutre.`,
    operateur: `Opérateur du **côté à traiter**, écran de l\'autre côté de la table dans l\'axe du regard. Ponction **de latéral en médial**, dans le plan, en suivant le grand axe de la crête : le trajet reste tangentiel à l\'os, l\'aiguille ne peut pas plonger dans le bassin. Main de la sonde en appui sur la fesse pour amortir la respiration.`,
    sonde: `- Linéaire 6–13 MHz (voire 10–15 MHz chez le sujet mince), preset MSK/nerf, **profondeur 3–4 cm**, une seule focale placée sur la ligne osseuse, gain volontairement bas : le nerf est un point *hyperéchogène* sur un fond graisseux, il se perd si l\'image est trop claire.
- Balayage lent : à cette taille (1–2 mm), le nerf apparaît et disparaît en un millimètre de translation.
- Doppler couleur basse PRF : il n\'y a pas d\'artère satellite constante à ce niveau, mais repérer les branches de l\'artère iliolombaire ou glutéale superficielle dans le tissu sous-cutané évite une ponction inutile.
- Aiguille écho-visible ou hydrolocalisation : avec une 25 G à angle plat, l\'aiguille est mal visible ; 0,3–0,5 mL de sérum confirment la position de la pointe.`,
  },

  reperage: [
    { titre: 'Poser la sonde sur le point de Tinel', texte: 'Sonde **transversale, à cheval sur la crête iliaque**, centrée sur la marque au feutre (6–8 cm de la ligne médiane). Identifier d\'emblée la **ligne hyperéchogène convexe de la crête** avec son cône d\'ombre franc : c\'est la seule structure qu\'on ne peut pas confondre.' },
    { titre: 'Tourner la sonde dans le grand axe de la crête', texte: 'Faire pivoter la sonde jusqu\'à ce que la ligne osseuse devienne **longue et régulière** sur toute la largeur de l\'écran (sonde parallèle à la crête). Les nerfs, qui la croisent perpendiculairement, sont alors vus **en coupe courte** : des points de 1–2 mm, hyperéchogènes, posés sur l\'os.' },
    { titre: 'Identifier les couches', texte: 'De la superficie à la profondeur : peau, **graisse sous-cutanée** (épaisse, lobulée), **fascia** (aponévrose thoraco-lombaire / glutéale, ligne hyperéchogène nette qui vient s\'insérer sur la crête), puis le **tunnel** — une fine lame graisseuse hypoéchogène entre le fascia et l\'os — puis le **cortex iliaque**. Le nerf est dans ce tunnel, jamais au-dessus du fascia.' },
    { titre: 'Balayer médial ↔ latéral', texte: 'Translater lentement de 3 à 4 cm de part et d\'autre en cherchant les points nerveux dans le tunnel. Chercher aussi **l\'épaississement fascial** et la disparition de la lame graisseuse en regard du point douloureux : c\'est le signe indirect du piège. La compression douce par la sonde sur le point reproduit la douleur — un « Tinel échoguidé » qui vaut confirmation de la fenêtre.' },
    { titre: 'Si on ne trouve pas le nerf', texte: '**Ne pas s\'acharner à voir le nerf** : dans la majorité des cas, il n\'est pas individualisable. Le geste reste valable en ciblant **le plan** fascia/os au niveau du point de Tinel, et en étalant l\'injectat le long de la crête sur 3–4 cm : c\'est le principe de toutes les techniques publiées. Vérifier seulement qu\'on est bien sur la crête et non sur l\'aile iliaque (la ligne devient alors plate et large) ni sur l\'EIPS (la ligne s\'épaissit et le sacrum apparaît en dedans).' },
    { titre: 'Clunéal moyen : descendre au LPSL', texte: 'Repartir de l\'**EIPS** (relief osseux arrondi le plus médial de la crête), puis descendre de 1–2 cm et orienter la sonde transversalement entre l\'EIPS (latéral) et la **crête sacrée latérale** (médial) : le **LPSL** apparaît comme une bande fibrillaire hyperéchogène pontant les deux, sous le grand fessier. Les branches clunéales moyennes sont sous le ligament, parfois le perforant.' },
  ],

  sonoanatomie: [
    { structure: 'Crête iliaque', aspect: 'Ligne hyperéchogène régulière, cône d\'ombre postérieur franc', repere: 'Repère absolu ; le geste se fait « sur l\'os »' },
    { structure: 'Graisse sous-cutanée', aspect: 'Lobules hypoéchogènes séparés de fines cloisons hyperéchogènes', repere: 'Épaisseur très variable (1 à 5 cm) — conditionne le choix de la sonde' },
    { structure: 'Fascia thoraco-lombaire / aponévrose glutéale', aspect: 'Ligne hyperéchogène continue, brillante, qui vient s\'insérer sur la crête', repere: 'Le toit du tunnel ; l\'injectat doit passer *sous* elle' },
    { structure: 'Tunnel ostéo-fibreux', aspect: 'Fine lame hypoéchogène (« fat tunnel ») entre le fascia et le cortex', repere: 'La cible ; sa disparition en regard du point douloureux est un signe indirect de conflit' },
    { structure: 'Nerf clunéal supérieur', aspect: 'Point ovalaire hyperéchogène de 1–2 mm, souvent non individualisable', repere: 'Dans le tunnel, sur l\'os ; branche médiale à 6–7 cm de la ligne médiane' },
    { structure: 'Grand fessier / moyen fessier', aspect: 'Muscles striés sous la crête (versant fessier), pennés', repere: 'Sous le bord latéral de la crête ; ne pas y injecter' },
    { structure: 'Épine iliaque postéro-supérieure (EIPS)', aspect: 'Relief osseux arrondi, hyperéchogène, extrémité médiale de la crête', repere: 'Charnière entre le territoire SCN et le territoire MCN' },
    { structure: 'Ligament sacro-iliaque postérieur long (LPSL)', aspect: 'Bande fibrillaire hyperéchogène tendue de l\'EIPS à la crête sacrée latérale, sous le grand fessier', repere: 'Toit du piège clunéal moyen ; injecter au-dessus et au-dessous' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Désinfection large, gel stérile ou housse de sonde. Seringue de 5 mL, aiguille **25 G 40–50 mm** montée sur prolongateur. Repérage complet **avant** la ponction : ligne osseuse nette sur toute la largeur de l\'écran, fascia identifié, point de Tinel au centre de l\'image.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 25 G ; 0,5 mL de lidocaïne 1 % au point d\'entrée si l\'on prévoit une aiguille RF ou plusieurs passages. Point d\'entrée à 1–1,5 cm du bord **latéral** de la sonde.' },
    { titre: 'Ponction dans le plan, de latéral en médial', texte: 'Angle très plat (**10–20°**), aiguille visible sur toute sa longueur. Traverser la graisse sous-cutanée puis **franchir le fascia** — la sensation de ressaut est nette et vaut repère tactile — et poser la pointe au **contact du cortex iliaque**, puis reculer de 1 mm. Ne jamais laisser la pointe passer le bord antérieur de la crête.' },
    { titre: 'Hydrolocalisation et test', texte: 'Aspiration. Injecter **0,3–0,5 mL** : l\'injectat doit **décoller le fascia du cortex** en une lentille anéchogène qui s\'étale le long de l\'os. Si la nappe se forme dans la graisse (au-dessus du fascia), avancer d\'1–2 mm ; si elle ne s\'étale pas du tout, la pointe est probablement intrafasciale — repositionner. Une **paresthésie franche dans le territoire fessier** confirme le nerf : reculer de 1 mm avant d\'injecter.' },
    { titre: 'Injection fractionnée et étalement', texte: 'Injecter **3–5 mL** par bolus de 1 mL en retirant très progressivement l\'aiguille le long de la crête, de façon à couvrir **3–4 cm** de tunnel et à englober plusieurs branches. En hydrodissection, monter à 5–10 mL de G5 % et suivre l\'ouverture du plan en temps réel.' },
    { titre: 'Critère de fin', texte: 'Nappe hypoéchogène **sous-fasciale**, continue, de 3–4 cm de long, appliquée sur le cortex, englobant le ou les points nerveux repérés, sans image d\'injection intramusculaire ni intragraisseuse. Retirer, comprimer 1 min, pansement.' },
    { titre: 'Clunéal moyen et après le geste', texte: 'Pour le MCN : même principe, aiguille in-plane de latéral (EIPS) en médial, **3–4 mL** déposés dans le plan fascial superficiel au LPSL puis, en franchissant le ligament, sous celui-ci. Après le geste : **EN avant / à 30 min / à 1 h**, palpation du point de Tinel (il doit devenir indolore), test de la manœuvre qui déclenchait la douleur. C\'est cette évaluation horodatée, et elle seule, qui donne sa valeur diagnostique au bloc.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Bloc diagnostique | Lidocaïne 1–2 % **seule** (durée courte, lecture nette) ou ropivacaïne 0,2 % | 2–3 mL par site | Seuil de positivité utilisé dans les séries publiées : **≥ 70 % de soulagement à 1 h** (Kiral 2024). Noter EN avant / 30 min / 1 h et la disparition du Tinel |
| Bloc thérapeutique | Ropivacaïne 0,2 % ou lidocaïne 1 % + corticoïde : dexaméthasone 4–8 mg (non particulaire, **préféré ici**), ou bétaméthasone 5,7 mg (Diprostène® 1 mL), ou méthylprednisolone 20–40 mg | 3–5 mL par site | Site superficiel : le corticoïde particulaire n\'expose pas à un risque artériel mais à l\'**atrophie sous-cutanée et à la dépigmentation**. Doses basses, pas plus de 3 injections/an sur le même site |
| Hydrodissection | **G5 % 5–10 mL** ± lidocaïne 1 % 1–2 mL | 5–10 mL | Alternative sans corticoïde, répétable ; logique de libération mécanique du tunnel. Preuve limitée pour cette cible (transposition depuis d\'autres nerfs périphériques) |
| Clunéal moyen (LPSL) | Même schéma | 3–4 mL | Répartir de part et d\'autre du ligament |
| Avant PRF | Sérum physiologique ou lidocaïne 1 % | 1–2 mL | Ne pas noyer la cible : un volume trop important éloigne le nerf de l\'électrode |

**Doses maximales à garder en tête** : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Un bloc clunéal isolé en est très loin ; c\'est le **cumul** qui compte si l\'on enchaîne dans la même séance blocs clunéaux bilatéraux, branches médiales et sacro-iliaque — additionner les volumes et les tracer.

Ne pas mélanger deux corticoïdes, ne pas dépasser une dose cumulée annuelle raisonnable chez un patient déjà infiltré ailleurs (rachis, épaule), et privilégier chez le sujet mince ou à peau foncée un **corticoïde non particulaire à faible dose**, voire l\'abstention.`,

  variantes: [
    { titre: 'Hydrodissection au G5 %', texte: `Même repérage, aiguille 25 G, **5–10 mL de glucosé à 5 %** injectés lentement dans le tunnel pour ouvrir mécaniquement le plan fascia/os sur toute la longueur de la crête. Intérêt : pas de corticoïde, donc répétable, et pas d\'atrophie cutanée. Une étude d\'injection périneurale de dextrose pour la neuropathie clunéale supérieure a été publiée, et l\'efficacité du dextrose périneural est mieux établie sur d\'autres nerfs (méralgie paresthésique, canal carpien, nerf ulnaire au coude) — la transposition à la crête iliaque est **plausible mais peu étayée**. À proposer au patient qui répond au bloc test et refuse ou ne tolère pas le corticoïde.` },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Après bloc test positif dont l\'effet ne dure pas. Aiguille RF 22 G 54 mm, extrémité active 5 mm, placée **parallèle** au trajet du nerf, sous le fascia, au contact de l\'os, au niveau du point de Tinel. Stimulation sensitive 50 Hz : paresthésies dans le territoire fessier à basse tension ; pas de réponse motrice attendue (nerf purement sensitif) — l\'absence de contraction est ici normale et ne doit pas faire déplacer l\'aiguille. Paramètres usuels de PRF : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2 cycles**, puis 2–3 mL d\'AL. Les données propres au nerf clunéal sont **des séries, pas des essais** : annoncer au patient un bénéfice possible mais non garanti, de 3 à 6 mois.` },
    { titre: 'Radiofréquence thermique en « strip lesion » et cryoneurolyse', texte: `Compte tenu de la variabilité du nombre de branches, les équipes qui font de la RF thermique décrivent des lésions en bande : plusieurs aiguilles 20 G en configuration bipolaire, repositionnées de proche en proche le long de la crête pour créer une **lésion continue** (protocole rapporté : 80 °C, 90 s), afin de capturer les branches quelle que soit leur anatomie. Séries de 3 et 4 patients, avec 50–90 % de soulagement à 2–10 semaines et aucun effet indésirable rapporté : c\'est **très peu de preuve** pour un geste destructeur. La **cryoneurolyse** échoguidée du même site est décrite (webinaire Clarius / Rosenblum) et présente l\'avantage théorique de ne pas exposer au névrome de désafférentation. Une approche proximale sur le processus transverse (TPCA) a été rapportée en cas clinique unique.` },
    { titre: 'Neurostimulation périphérique et décompression chirurgicale', texte: `En cas de réponse franche mais éphémère aux blocs répétés, chez un patient invalidé : **stimulation périphérique** du nerf clunéal supérieur (série combinant repérage échographique et fluoroscopique) ou **décompression chirurgicale** du tunnel ostéo-fibreux, dont une revue systématique a colligé 236 cas opérés. Ces options relèvent d\'un adressage, pas de l\'HDJ — mais c\'est notre bloc test qui les rend défendables.` },
    { titre: 'Bloc clunéal moyen isolé (LPSL)', texte: `À faire chaque fois que le point de Tinel est **sous l\'EIPS** et non sur la crête, en particulier chez le patient étiqueté « sacro-iliaque » qui ne répond pas à l\'infiltration articulaire. Sonde transversale entre l\'EIPS et la crête sacrée latérale, aiguille in-plane latéro-médiale, 3–4 mL répartis dans le plan superficiel au LPSL puis sous le ligament. Le substrat anatomique est établi (Konno 2017 : 10 branches sur 64 perforant le LPSL, 4 avec striction), le niveau de preuve clinique reste celui de séries.` },
  ],

  pearls: [
    'Marquer le point de Tinel au feutre **avant** de désinfecter, et mesurer sa distance à la ligne médiane : 6–8 cm oriente vers le clunéal supérieur, sous l\'EIPS vers le clunéal moyen.',
    'Chercher **le plan**, pas le nerf : l\'interface fascia / cortex iliaque est reproductible, le nerf de 1,5 mm ne l\'est pas.',
    'Baisser le gain : sur un fond graisseux clair, un nerf hyperéchogène de 1–2 mm ne ressort que sur une image sombre.',
    'Retirer l\'aiguille en injectant, pour étaler l\'injectat sur 3–4 cm de crête — c\'est ce qui rattrape la variabilité du nombre de branches.',
    'Le bloc clunéal est le test qui évite une radiofréquence facettaire inutile chez le lombalgique « qui a tout eu » : à faire avant, pas après.',
    'Chez la femme âgée lombalgique après tassement vertébral, penser au clunéal en première intention : c\'est le sous-groupe où la prévalence est la plus élevée (27 % chez Kuniya).',
  ],
  pieges: [
    'Injecter **au-dessus du fascia**, dans la graisse : c\'est le geste le plus fréquent, il ne bloque rien et fait conclure à tort à un test négatif. Le ressaut fascial et l\'étalement sur l\'os sont les deux garde-fous.',
    'Prendre l\'aile iliaque pour la crête : la ligne devient plate et large, le tunnel n\'existe plus à ce niveau.',
    'Conclure « clunéal » sur un test positif obtenu avec 8–10 mL : au-delà de 4–5 mL, la diffusion atteint les branches voisines et le test perd sa spécificité. Petit volume = information.',
    'Corticoïde particulaire à forte dose en sous-cutané mince : atrophie et dépigmentation visibles, durables, et parfaitement évitables.',
    'Oublier le clunéal moyen chez un patient étiqueté sacro-iliaque : deux entités, deux points de Tinel, deux gestes.',
    'Escalader vers un geste destructeur (RFA, cryo) sans bloc test tracé : la littérature qui soutient ces gestes repose entièrement sur des patients sélectionnés par un bloc positif.',
  ],
  complications: [
    'Aucune complication grave n\'est rapportée dans les séries publiées de blocs clunéaux échoguidés — c\'est un geste superficiel sur un plan osseux.',
    'Atrophie graisseuse sous-cutanée et dépigmentation au point d\'injection (corticoïde) : prévenir le patient, dose basse, produit non particulaire.',
    'Hématome sous-cutané, ecchymose : compression 1 min, résolutif.',
    'Douleur post-injection transitoire, exacerbation 24–48 h (« flare » cortisonique) : antalgiques simples, glace.',
    'Lésion / injection intraneurale : douleur fulgurante à l\'injection → **arrêt immédiat**, retrait de 1–2 mm ; risque de dysesthésies prolongées, exceptionnel avec une 25 G et une injection fractionnée.',
    'Névrite ou névrome après geste destructeur (RFA, cryo) : à intégrer dans l\'information avant toute escalade.',
    'Hyperglycémie 24–72 h chez le diabétique.',
  ],
  securite: [
    'Geste **superficiel et compressible** → **faible risque hémorragique** (ASRA-ESRA 2018, procédures interventionnelles douleur) : pas d\'arrêt systématique des antiagrégants ni des anticoagulants ; décision au cas par cas et compression prolongée si traitement en cours.',
    'Rester **sur le cortex** : ne jamais laisser la pointe franchir le bord antérieur de la crête (au-delà, espace rétropéritonéal). L\'angle plat et la ponction latéro-médiale rendent ce franchissement mécaniquement improbable.',
    'Doppler couleur sur le trajet sous-cutané avant ponction ; aspiration avant chaque bolus ; injection fractionnée par 1 mL.',
    'Volumes faibles : pas de risque de toxicité systémique isolée. Additionner les doses en cas de blocs multiples ou bilatéraux dans la même séance.',
    'Corticoïdes : glycémie capillaire chez le diabétique le jour même et à 48 h ; espacer d\'au moins 3 mois sur un même site.',
  ],

  suivi: `- **J0** : EN avant, à 30 min et à **1 h** (la fenêtre de lecture du bloc), palpation du point de Tinel (doit être indolore), reproduction de la manœuvre déclenchante. Seuil retenu dans les séries : **≥ 70 % de soulagement** = test positif. Tracer le produit, le volume, le site et la distance à la ligne médiane.
- **J15–J30** : EN moyenne et maximale, retentissement fonctionnel (Oswestry ou EIFEL), consommation d\'antalgiques, reprise des activités. Décision :
  - test positif + soulagement durable (> 4–6 semaines) → répéter si récidive, kinésithérapie de la charnière thoraco-lombaire en parallèle ;
  - test positif + soulagement bref → hydrodissection, PRF, ou discussion d\'un geste plus définitif ;
  - test négatif → **abandonner la piste clunéale** et rouvrir le diagnostic (facettes, sacro-iliaque, hanche, charnière thoraco-lombaire).
- **3 mois** : c\'est le point de mesure des séries publiées (taux de répondeurs poolés 78 % à ≥ 3 mois, 83 % à ≥ 6 mois — mais sur des études observationnelles, sans bras contrôle).
- Ne pas répéter indéfiniment un corticoïde qui ne tient pas : trois blocs sans bénéfice durable doivent faire changer de stratégie, pas de dose.`,

  evidence: `- **Prévalence (Kuniya 2014, J Orthop Surg Res, étude prospective, n = 834)** : trouble du nerf clunéal supérieur retrouvé chez 113 patients lombalgiques, soit **environ 13,5 %**, avec une prévalence significativement plus élevée en cas de fracture vertébrale (26/96, **27 %**) qu\'en son absence (87/738, **12 %** ; p < 0,01). Critères diagnostiques : point douloureux maximal sur la crête iliaque postérieure à **70 mm** de la ligne médiane, dont la palpation reproduit la plainte. Preuve **descriptive** : la « prévalence » dépend entièrement des critères de sélection, elle n\'est pas transposable telle quelle à une population générale de lombalgiques.
- **Confirmation par le bloc (Kiral 2024, Pain Practice, prospective transversale, n = 200 lombalgies mécaniques > 3 mois)** : bloc échoguidé diagnostique chez les patients à Tinel positif sur la crête, positivité définie par **≥ 70 % de soulagement à 1 h**. C\'est la série qui donne au chiffre de prévalence sa crédibilité clinique, puisqu\'elle exige une confirmation par bloc et non une simple palpation.
- **Anatomie du clunéal moyen (Konno 2017, J Pain Res, 30 hémi-bassins)** : 64 branches identifiées, **10 perforant le LPSL**, dont **4 avec striction évidente**. Substrat anatomique solide d\'un tableau pseudo-sacro-iliaque. Preuve anatomique, pas clinique.
- **Technique (Nielsen 2019, Reg Anesth Pain Med, ECR sur volontaires)** : description d\'une technique échoguidée de bloc clunéal supérieur et cartographie de la zone d\'anesthésie cutanée ; le bloc anesthésie **de façon fiable** le territoire clunéal supérieur. Preuve **technique** (validité du bloc), pas d\'efficacité antalgique.
- **Synthèse thérapeutique (méta-analyse 2026, 26 bras de traitement, 628 patients)** : taux de répondeurs poolés **78,3 % (IC 95 % 72,9–82,9) à ≥ 3 mois** et **82,9 % (75,3–88,6) à ≥ 6 mois**, tous traitements confondus (décompression chirurgicale, infiltrations, radiofréquence, neurostimulation). Les auteurs soulignent eux-mêmes qu\'il s\'agit de **données observationnelles sur populations sélectionnées**, sans comparaison entre stratégies : ces chiffres ne sont pas un niveau de preuve d\'efficacité.
- **Gestes destructeurs** : radiofréquence du clunéal supérieur décrite dans des **séries de 3 et 4 patients** (50–90 % de soulagement à 2–10 semaines) et dans une approche « anatomie-guidée » publiée en 2022 ; cryoneurolyse documentée par des webinaires et des cas. **Preuve très faible** — à réserver aux répondeurs au bloc test, avec information explicite.
- **Trous de la littérature, à assumer** : aucun ECR contre placebo du bloc clunéal ; aucune donnée comparative bloc seul vs bloc + corticoïde ; aucune donnée de durée d\'effet à 12 mois ; le volume optimal et le nombre de sites ne sont pas standardisés ; l\'imagerie du nerf lui-même reste débattue (échanges publiés en 2026 sur la fiabilité de la visualisation échographique du nerf clunéal supérieur). Le geste se justifie par sa **valeur diagnostique**, son innocuité et son coût, plus que par un niveau de preuve d\'efficacité.`,

  references: [
    { verif: true, auteurs: 'Kuniya H, Aota Y, Kawai T, Kaneko K, Konno T, Saito T', titre: 'Prospective study of superior cluneal nerve disorder as a potential cause of low back pain and leg symptoms', revue: 'J Orthop Surg Res', annee: '2014', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4299373/', type: 'étude prospective', note: '834 patients ; prévalence 27 % en cas de fracture vertébrale vs 12 % sans.' },
    { verif: true, auteurs: 'Konno T, Aota Y, Kuniya H, Saito T, et al.', titre: 'Anatomical study of middle cluneal nerve entrapment', revue: 'J Pain Res', annee: '2017;10:1431-1435', doi: '10.2147/JPR.S135382', type: 'anatomie', note: '30 hémi-bassins ; 10/64 branches perforant le LPSL, 4 avec striction.' },
    { verif: true, auteurs: 'Kiral BS, et al.', titre: 'The frequency of superior cluneal nerve entrapment diagnosed with ultrasound-guided nerve block in patients with low back pain: a prospective, cross-sectional study', revue: 'Pain Practice', annee: '2024', doi: '10.1111/papr.13391', type: 'étude prospective', note: '200 lombalgies mécaniques chroniques ; seuil ≥ 70 % de soulagement à 1 h.' },
    { verif: true, auteurs: 'Luo Y, Zhao J', titre: 'Ultrasound-guided superior cluneal nerve block: a narrative review', revue: 'J Pain Res', annee: '2024', doi: '10.2147/JPR.S462166', type: 'revue', note: 'Synthèse des voies d\'abord et des repères échographiques (PMID 38799273).' },
    { verif: true, auteurs: 'Nielsen TD, Moriggl B, Barckman J, et al.', titre: 'Randomized trial of ultrasound-guided superior cluneal nerve block', revue: 'Reg Anesth Pain Med', annee: '2019;44(8):772-780', pmid: '31061111', type: 'ECR (volontaires)', note: 'Validation de la technique et cartographie du territoire cutané anesthésié.' },
    { verif: true, auteurs: 'Isu T, Kim K, Morimoto D, Iwamoto N', titre: 'Superior and middle cluneal nerve entrapment as a cause of low back pain', revue: 'Neurospine', annee: '2018', doi: '10.14245/ns.1836024.012', type: 'revue', note: 'Mise au point de l\'équipe japonaise de référence.' },
    { verif: true, auteurs: 'Kim K, et al.', titre: 'Low back pain due to superior cluneal nerve entrapment: a clinicopathologic study', revue: 'Muscle & Nerve', annee: '2018', doi: '10.1002/mus.26007', type: 'anatomopathologie' },
    { verif: true, auteurs: 'Abd-Elsayed A, et al.', titre: 'Superior cluneal nerve entrapment', revue: 'Pain Practice', annee: '2025', doi: '10.1111/papr.70037', type: 'revue' },
    { verif: true, auteurs: 'Iudicelli, et al.', titre: 'The role of musculoskeletal ultrasound in detecting superior cluneal nerve entrapment: biomechanical insights in chronic low back pain — a pilot study', revue: 'Diagnostics', annee: '2026;16(3):469', doi: '10.3390/diagnostics16030469', type: 'étude pilote', note: 'A suscité un échange publié sur la fiabilité de la visualisation échographique du nerf.' },
    { verif: true, auteurs: '—', titre: 'Radiofrequency ablation of the superior cluneal nerve: a novel minimally invasive approach adopting recent anatomic and neurosurgical data', revue: 'Pain and Therapy', annee: '2022', doi: '10.1007/s40122-022-00385-x', type: 'technique' },
    { verif: false, auteurs: '—', titre: 'Superior cluneal nerve radiofrequency ablation for chronic low back and buttock pain: a technical description and case series of three patients', revue: 'Orthopedic Reviews', annee: '2026', pmid: '42186663', type: 'série de cas', note: 'n = 3 ; 65–90 % de soulagement à 2–4 semaines.' },
    { verif: false, auteurs: '—', titre: 'Treatment outcomes for cluneal neuropathy: a systematic review and meta-analysis', revue: '', annee: '2026', pmid: '42182575', type: 'méta-analyse', note: '26 bras, 628 patients ; répondeurs 78,3 % à ≥ 3 mois, 82,9 % à ≥ 6 mois ; données observationnelles. Revue non revérifiée dans cette session.' },
    { verif: false, auteurs: '—', titre: 'Cluneal nerve entrapment decompression: a systematic review of 236 surgical cases', revue: '', annee: '2026', pmid: '41207967', type: 'revue systématique', note: 'Option chirurgicale en cas d\'échec des gestes percutanés. Revue non revérifiée dans cette session.' },
    { verif: true, auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco' },
  ],
  videos: [
    { titre: 'The ultrasound-guided superior cluneal nerve block', source: 'YouTube · Dr David Rosenblum', url: 'https://www.youtube.com/watch?v=hVjX8KrnSpQ', note: 'innervation, physiopathologie et bloc diagnostique pas à pas' },
    { titre: 'Ultrasound-guided middle cluneal nerve block', source: 'YouTube', url: 'https://m.youtube.com/watch?v=s2RZuO4Dkzs', note: 'repérage du LPSL entre EIPS et crête sacrée latérale' },
    { titre: 'How to perform an ultrasound-guided cluneal nerve cryoablation to treat lower back pain', source: 'Clarius (webinaire)', url: 'https://clarius.com/blog/webinar-how-to-perform-an-ultrasound-guided-cluneal-nerve-cryoablation-to-treat-lower-back-pain/', note: 'cryoneurolyse : indications et technique' },
    { titre: 'Superior cluneal nerve block: considerations for regional anesthesia and chronic pain management', source: 'ASRA (mise au point illustrée)', url: 'https://asra.com/news-publications/asra-updates/blog-landing/legacy-b-blog-posts/2022/01/10/superior-cluneal-nerve-block-considerations-for-regional-anesthesia-and-chronic-pain' },
  ],

  scenes: [
    {
      id: 'scn-crete', section: 'sonoanatomie', titre: 'Crête iliaque, sonde parallèle à la crête — nerfs clunéaux supérieurs en coupe courte',
      legende: 'Sonde posée dans le grand axe de la crête, centrée sur le point de Tinel. Les branches clunéales, qui croisent la crête perpendiculairement, sont vues en coupe courte : des points hyperéchogènes de 1–2 mm posés sur le cortex, sous le fascia. Le « tunnel ostéo-fibreux » est la fine lame graisseuse entre le fascia et l\'os — c\'est la cible.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial (EIPS)', right: 'Latéral' }).probeInfo({ plan: 'Grand axe de la crête iliaque', type: 'linéaire 6–13 MHz' });
        S.skin({ thickness: 8, fatBelow: 96 });
        S.label({ x: 92, y: 100, text: 'Graisse sous-cutanée', cls: 'lbl-fat', small: true, anchor: 'middle' });
        S.fascia({ points: [[0, 168], [180, 162], [400, 160], [640, 166]], width: 3, opacity: 0.95, label: 'Fascia thoraco-lombaire / aponévrose glutéale', at: [320, 148], small: true });
        S.region({ path: 'M0 172 L180 166 L400 164 L640 170 L640 214 L400 206 L180 208 L0 216 Z', fill: '#6b7680', opacity: 0.3, label: 'Tunnel ostéo-fibreux', at: [128, 192], small: true });
        S.bone({ path: 'M0 220 Q180 210 400 208 Q540 208 640 216', label: 'Crête iliaque', at: [520, 250], ldy: 0, small: true });
        S.nerve({ x: 214, y: 190, r: 5, label: 'Br. médiale\n(≈ 6–7 cm de la ligne médiane)', lx: 214, ly: 300, anchor: 'middle', lead: [214, 196], small: true });
        S.nerve({ x: 352, y: 187, r: 4.5, label: 'Br. intermédiaire', lx: 400, ly: 128, anchor: 'start', lead: [356, 182], small: true });
        S.nerve({ x: 476, y: 190, r: 4, label: 'Br. latérale', lx: 560, ly: 300, anchor: 'middle', lead: [482, 195], small: true });
        S.label({ x: 320, y: 372, text: 'Cône d\'ombre osseux — rien à chercher en dessous', cls: 'lbl-bone', small: true });
      },
    },
    {
      id: 'scn-bloc', section: 'technique', titre: 'Bloc clunéal supérieur — aiguille dans le plan, de latéral en médial',
      legende: 'Angle très plat, franchissement du fascia (ressaut net), pointe posée sur le cortex puis reculée d\'1 mm. L\'injectat doit décoller le fascia de l\'os et courir le long de la crête sur 3–4 cm : c\'est le critère de fin, et c\'est ce qui rattrape la variabilité du nombre de branches. Une nappe qui reste dans la graisse = bloc inefficace.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial (EIPS)', right: 'Latéral' }).probeInfo({ plan: 'Grand axe de la crête', type: 'in-plane, latéro-médial' });
        S.skin({ thickness: 8, fatBelow: 96 });
        S.fascia({ points: [[0, 168], [180, 162], [400, 160], [640, 166]], width: 3, opacity: 0.95 });
        S.region({ path: 'M0 172 L180 166 L400 164 L640 170 L640 214 L400 206 L180 208 L0 216 Z', fill: '#6b7680', opacity: 0.28 });
        S.bone({ path: 'M0 220 Q180 210 400 208 Q540 208 640 216', label: 'Crête iliaque', at: [520, 252], ldy: 0, small: true });
        S.nerve({ x: 214, y: 190, r: 5 });
        S.nerve({ x: 352, y: 187, r: 4.5 });
        S.nerve({ x: 476, y: 190, r: 4 });
        S.target({ x: 300, y: 190, r: 17 });
        S.needle({ from: [636, 108], to: [318, 194], label: '25 G 40–50 mm, angle 10–20°' });
        S.spread({ x: 300, y: 190, rx: 132, ry: 15, label: '3–5 mL sous le fascia, sur l\'os' });
        S.label({ x: 128, y: 320, text: 'Nappe sous-fasciale continue\nsur 3–4 cm = critère de fin', cls: 'lbl-target', small: true });
      },
    },
    {
      id: 'mcn-lpsl', section: 'technique', titre: 'Nerf clunéal moyen — sous le ligament sacro-iliaque postérieur long',
      legende: 'Sonde transversale sous l\'EIPS : le LPSL ponte l\'EIPS (latéral) et la crête sacrée latérale (médial), sous le grand fessier. Les branches clunéales moyennes passent sous le ligament, parfois en le perforant (Konno 2017). Aiguille in-plane de latéral en médial, injectat réparti au-dessus puis au-dessous du ligament.',
      opts: { depth: 5 },
      build: S => {
        S.orient({ left: 'Médial (sacrum)', right: 'Latéral (EIPS)' }).probeInfo({ plan: 'Transverse, 1–2 cm sous l\'EIPS', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 40 });
        S.muscle({ path: 'M0 92 L640 92 L640 176 L0 190 Z', label: 'Grand fessier', at: [110, 138], opacity: 0.5 });
        S.fascia({ points: [[0, 190], [320, 180], [640, 176]], width: 1.6, opacity: 0.7 });
        S.ligament({ path: 'M188 236 L470 214 L474 236 L192 258 Z', label: 'LPSL', at: [330, 200], small: true });
        S.bone({ path: 'M0 300 L120 296 L172 268 L188 250', label: 'Crête sacrée latérale', at: [86, 340], ldy: 0, small: true });
        S.bone({ path: 'M472 218 Q520 196 570 200 Q612 206 640 226', label: 'EIPS', at: [576, 174], ldy: 0, small: true });
        S.nerve({ x: 300, y: 258, r: 5, label: 'NCM sous le ligament', lx: 300, ly: 316, anchor: 'middle', lead: [300, 264], small: true });
        S.nerve({ x: 396, y: 226, r: 4, label: 'Branche perforante', lx: 470, ly: 300, anchor: 'middle', lead: [400, 231], small: true });
        S.needle({ from: [638, 122], to: [318, 250], label: '25 G, in-plane latéro-médial' });
        S.spread({ x: 322, y: 252, rx: 74, ry: 13, label: '3–4 mL' });
      },
    },
  ],

  checklist: [
    'Point de Tinel marqué au feutre et distance à la ligne médiane mesurée avant désinfection (6–8 cm = clunéal supérieur ; sous l\'EIPS = clunéal moyen)',
    'Volume limité à 3–5 mL par site si le geste est diagnostique (au-delà, perte de spécificité)',
    'EN notée avant, à 30 min et à 1 h, et disparition du Tinel vérifiée — c\'est ce qui fonde la décision d\'escalade',
    'Corticoïde : dose basse, non particulaire de préférence ; patient prévenu du risque d\'atrophie et de dépigmentation cutanées',
  ],
});
