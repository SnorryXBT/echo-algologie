/* Fiche : nerf ulnaire au coude — tunnel cubital, hydrodissection, bloc, PRF. */
ECHO.register({
  id: 'nerf-ulnaire-coude',
  titre: 'Nerf ulnaire au coude — tunnel cubital : bloc, hydrodissection, PRF',
  titreCourt: 'Nerf ulnaire (coude)',
  en: 'Ultrasound-guided ulnar nerve block, perineural hydrodissection and pulsed radiofrequency at the elbow (cubital tunnel syndrome, retro-epicondylar groove, Osborne\'s retinaculum, flexor carpi ulnaris arcade)',
  region: 'membre-sup',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée pour l\'hydrodissection (ECR de petite taille) · Faible/négative pour le corticoïde péri-neural',
  maj: '2026-09',
  motsCles: ['tunnel cubital', 'gouttière épitrochléo-olécrânienne', 'Osborne', 'ulnaire', 'cubital tunnel', 'hydrodissection', 'D5W', 'dextrose', 'neuropathie compressive', 'CSA', 'luxation du nerf ulnaire', 'anconé épitrochléen'],
  resume: 'Deuxième neuropathie compressive du membre supérieur après le canal carpien, et la plus facile à explorer en échographie : le nerf est superficiel, mesurable, et son comportement dynamique (subluxation, luxation en flexion) n\'est visible que là. Le geste de référence en algologie n\'est pas l\'infiltration de corticoïde — dont l\'ECR de van Veen est négatif — mais l\'hydrodissection péri-neurale au dextrose 5 % (D5W), qui vise à restaurer le glissement du nerf dans la gouttière et sous l\'arcade du fléchisseur ulnaire du carpe. Le bloc à l\'anesthésique local garde une valeur diagnostique (topographie de la douleur, test avant PRF) et la radiofréquence pulsée reste une option de série. Le site est très superficiel : le vrai danger n\'est pas la profondeur mais l\'atrophie sous-cutanée du corticoïde et la lésion des branches cutanées médiales de l\'avant-bras.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, épaule en abduction-rotation externe, coude fléchi 45–90°, avant-bras en supination sur un coussin ; ou assis, main posée sur la table, coude fléchi',
    sonde: 'lineaire', sondeNote: '12–18 MHz (hockey stick utile chez le sujet mince), profondeur 2–3 cm, focale à 5–10 mm',
    approche: 'in-plane', approcheNote: 'transversale sur la gouttière, ponction du côté olécrânien vers le côté épicondylien (ou l\'inverse), à plat',
    aiguille: '25–27 G, 25–40 mm ; 22 G 50 mm si volume élevé ou aiguille RF 22 G courbe pour la PRF',
    cible: 'Halo anéchogène circonférentiel (360°) entre le nerf et le rétinaculum d\'Osborne, prolongé en proximal dans la gouttière et en distal sous l\'arcade du FCU ; le nerf doit « flotter » et se remobiliser',
    injectat: 'Hydrodissection : 5–10 mL de dextrose 5 % (D5W) ± 1–2 mL de lidocaïne 1 % · Bloc test : 2–3 mL de ropivacaïne 0,2 %',
    duree: '10 min (bloc) · 15–20 min (hydrodissection à 2 niveaux) · 25–30 min (PRF)',
  },

  indications: [
    'Syndrome du tunnel cubital léger à modéré (McGowan I–II) : paresthésies du 5e doigt et du bord ulnaire du 4e, douleur de la gouttière, gêne nocturne, sans amyotrophie du premier interosseux dorsal — après échec de 6–12 semaines de mesures conservatrices (éviction de la flexion prolongée, orthèse nocturne d\'extension, adaptation du poste).',
    'Neuropathie ulnaire post-traumatique ou post-opératoire (cal de l\'épicondyle médial, arthrose du coude, séquelle de transposition) avec fibrose péri-neurale : cible privilégiée de l\'hydrodissection.',
    'Douleur neuropathique ulnaire du membre supérieur à topographie incertaine : **bloc diagnostique** à faible volume pour distinguer une origine tronculaire d\'une origine radiculaire C8 ou d\'un syndrome du défilé.',
    'Test avant radiofréquence pulsée ou avant avis chirurgical, pour objectiver la part tronculaire de la douleur.',
    'Nerf instable (subluxation / luxation en flexion) symptomatique : l\'hydrodissection soulage la composante inflammatoire mais ne traite pas l\'instabilité — l\'écho dynamique sert surtout à orienter vers la chirurgie.',
  ],
  contreIndications: [
    'Absolues : refus, infection cutanée en regard de la gouttière, allergie vraie aux amino-amides.',
    'Relative majeure — **déficit moteur installé** : amyotrophie du premier interosseux dorsal, signe de Froment, McGowan III, ou dénervation à l\'EMG. Ces formes relèvent d\'un avis chirurgical (neurolyse in situ ou transposition antérieure) ; infiltrer fait perdre du temps.',
    'Hémostase : geste **à faible risque hémorragique** (site superficiel et compressible, ASRA-ESRA 2018) — pas d\'interruption des antiagrégants, anticoagulants au cas par cas.',
    'Corticoïde : diabète déséquilibré (site très superficiel = pic glycémique et atrophie), peau fine, patient maigre, phototype foncé (dépigmentation), chirurgie du coude programmée < 3 mois.',
    'Grossesse : préférer le sérum physiologique ou le D5W sans corticoïde.',
  ],
  alternatives: 'Traitement conservateur d\'abord (orthèse nocturne maintenant le coude à 30–45° d\'extension, éviction des appuis sur la gouttière, ergonomie) : il obtient à lui seul une amélioration dans une part importante des formes légères. Chirurgie (décompression in situ, endoscopique ou ouverte ; transposition antérieure sous-cutanée ou sous-musculaire si nerf instable) devant tout déficit moteur, toute atrophie, ou après échec du traitement conservateur bien conduit — les méta-analyses ne départagent pas nettement décompression simple et transposition, et la décompression in situ a moins de complications. En algologie, l\'hydrodissection se place **entre les deux** : elle traite la forme irritative, gagne du temps et permet de trier les patients dont la douleur est réellement tronculaire. Ne pas la présenter comme une alternative à la chirurgie dans les formes déficitaires.',

  anatomie: `Le nerf ulnaire (C8-T1, faisceau médial du plexus brachial) descend au bras en dedans de l\'artère brachiale, puis **traverse le septum intermusculaire médial** environ 8 cm au-dessus de l\'épicondyle médial — parfois sous une bande fibreuse issue du chef médial du triceps, l\'**arcade de Struthers**, décrite chez une majorité de sujets. Il gagne ensuite la face postérieure du bras et pénètre dans la **gouttière épitrochléo-olécrânienne**, entre l\'épicondyle médial (en avant) et l\'olécrâne (en arrière), plancher constitué par le **faisceau postérieur du ligament collatéral ulnaire** et la capsule articulaire.

Le toit de la gouttière est le **rétinaculum du tunnel cubital (bande d\'Osborne)**, tendu de l\'épicondyle médial à l\'olécrâne. Ce rétinaculum se tend en flexion : le tunnel se rétrécit, la pression intraneurale monte, ce qui explique la sémiologie posturale. Plus distalement, le nerf s\'engage entre les deux chefs (huméral et ulnaire) du **fléchisseur ulnaire du carpe (FCU)**, sous l\'**arcade du FCU (ligament d\'Osborne au sens strict de certains auteurs)** — deuxième site de striction, à explorer systématiquement.

L\'**artère collatérale ulnaire supérieure**, branche de la brachiale, accompagne le nerf dans la gouttière et s\'anastomose avec la récurrente ulnaire postérieure : c\'est le repère Doppler du tunnel et le vaisseau qu\'on ponctionne quand on entre trop en aveugle.

### Ce qui compte pour le geste
- **Cinq sites de striction possibles**, du proximal au distal : arcade de Struthers, septum intermusculaire médial, gouttière rétro-épicondylienne (le plus fréquent), rétinaculum d\'Osborne, arcade du FCU. Un balayage qui s\'arrête à la gouttière rate l\'arcade du FCU — d\'où l\'hydrodissection **à deux niveaux**.
- **Variantes à connaître** : muscle **anconé épitrochléen** (anconeus epitrochlearis), muscle accessoire qui remplace le rétinaculum d\'Osborne chez environ un sujet sur dix et transforme le toit souple en toit musculaire rigide — l\'échographie le voit, l\'EMG non ; kyste synovial issu de l\'articulation ; ostéophytes ; corps étranger post-traumatique.
- **Instabilité** : la subluxation (le nerf monte sur le sommet de l\'épicondyle en flexion) et la luxation (il passe en avant de l\'épicondyle) sont fréquentes, y compris chez des sujets asymptomatiques — une part notable de la population générale dans les séries échographiques. Le nerf peut donc « fuir » sous l\'aiguille : c\'est un piège technique avant d\'être une pathologie.
- **Branche cutanée médiale de l\'avant-bras** : elle n\'appartient pas au nerf ulnaire (elle naît du faisceau médial) mais elle croise le champ opératoire en sous-cutané, en avant et en aval de l\'épicondyle médial. Sa lésion par l\'aiguille donne une dysesthésie ou un névrome douloureux de la face médiale de l\'avant-bras — la complication la plus fréquente de la chirurgie du tunnel cubital, et un risque réel de l\'aiguille.
- **La branche cutanée dorsale du nerf ulnaire naît 5–8 cm au-dessus du poignet** : une atteinte au coude touche donc aussi le dos de la main (contrairement au syndrome de la loge de Guyon) — argument clinique de niveau lésionnel.
- **Profondeur** : nerf à 3–10 mm de la peau dans la gouttière chez l\'adulte de morphotype normal. Tout est superficiel, tout est fragile.`,

  installation: {
    patient: `**Décubitus dorsal**, épaule en abduction 60–90° et rotation externe, avant-bras en supination, **coude fléchi 45–90°** posé sur un coussin — cette flexion ouvre la gouttière et rend le nerf plus rond, plus lisible. Position assise possible, main à plat sur la table, coude fléchi, bras en rotation externe.

**Deux réserves** : (1) au-delà de 90° de flexion le nerf peut subluxer et sortir du champ — si le nerf est instable, faire le geste **coude à 20–30° de flexion**, position où il est le mieux calé dans la gouttière ; (2) chez le patient qui ne supporte pas la rotation externe (épaule enraidie), passer en décubitus latéral côté sain, coude au zénith.

Marquer au feutre l\'épicondyle médial et la pointe de l\'olécrâne avant désinfection : la gouttière est entre les deux, et le repère disparaît sous le gel.`,
    operateur: `Opérateur **assis du côté à traiter**, écran de l\'autre côté du membre dans l\'axe du regard. Sonde tenue en appui sur l\'avant-bras du patient, pression **minimale** : le nerf est superficiel, une compression même modérée l\'aplatit et fausse la mesure de surface de section.

Sens de ponction : **de l\'olécrâne vers l\'épicondyle** (postéro-antérieur) le plus souvent — le trajet reste loin des branches cutanées médiales de l\'avant-bras, qui sont antérieures. Le sens inverse est acceptable si la fenêtre est meilleure, à condition de repérer ces branches au préalable.`,
    sonde: `- Linéaire haute fréquence **12–18 MHz**, preset nerf ou MSK superficiel ; sonde compacte (hockey stick) confortable sur un coude osseux.
- **Profondeur 2–3 cm**, focale à 5–10 mm, gain réglé pour que le tissu conjonctif péri-neural reste gris et non blanc saturé (sinon la surface de section est surestimée).
- **Doppler couleur basse PRF** : repérer l\'artère collatérale ulnaire supérieure et rechercher une hyperémie intraneurale (signe d\'irritation active).
- Couche de gel épaisse ou stand-off : on ne comprime pas, on « pose » la sonde.
- Aiguille écho-visible utile mais non indispensable à cette profondeur ; angle d\'insonation très plat (< 20°).`,
  },

  reperage: [
    { titre: 'Poser la sonde entre les deux os', texte: 'Sonde **transversale** appuyée sur la ligne épicondyle médial – olécrâne. L\'image montre deux convexités hyperéchogènes avec cône d\'ombre (épicondyle à gauche, olécrâne à droite par convention) et, entre elles, la gouttière. Le nerf y est un ovale de 2–4 mm en **nid d\'abeilles** (fascicules hypoéchogènes dans un épinèvre hyperéchogène).' },
    { titre: 'Confirmer par l\'ascenseur (« lift-off »)', texte: 'Faire coulisser la sonde de haut en bas : le nerf reste rond et se déplace en bloc, contrairement au tendon voisin qui devient anisotrope. En cas de doute, remonter au bras : le nerf ulnaire y est accolé au bord médial du triceps, à distance de tout tendon — puis redescendre en le suivant en continu (**traçage ascendant-descendant**, la seule méthode fiable).' },
    { titre: 'Mesurer la surface de section (CSA)', texte: 'Tracer le contour **à l\'intérieur du bord hyperéchogène de l\'épinèvre**, sans compresser. Mesurer au niveau de l\'épicondyle médial (site habituel du maximum), puis 4–5 cm au-dessus (bras) et au-dessous (avant-bras). Retenir : **CSA > 10 mm² au coude** = seuil le plus couramment utilisé pour retenir la compression (certaines séries proposent 9 ou 11 mm²), et **ratio CSA max / CSA au bras > 1,5** — le ratio est plus robuste que la valeur absolue chez les sujets de gabarits extrêmes.' },
    { titre: 'Chercher le signe de l\'encoche et la cause', texte: 'Le **notching sign** est le rétrécissement brutal du nerf au point de striction, encadré de deux renflements — c\'est lui qui localise le site à hydrodisséquer. Passer en coupe longitudinale pour l\'objectiver. Rechercher au passage : **anconé épitrochléen** (masse musculaire fermant la gouttière au lieu du fin rétinaculum), **kyste synovial**, **ostéophytes**, épaississement du rétinaculum, hyperémie Doppler.' },
    { titre: 'Descendre sous l\'arcade du FCU', texte: 'Poursuivre le balayage 3–5 cm en distal : le nerf plonge entre les deux chefs du fléchisseur ulnaire du carpe. Mesurer la CSA à ce niveau. **Un tunnel cubital sur plusieurs a sa striction ici et non dans la gouttière** — si on n\'infiltre que la gouttière, on manque la cible.' },
    { titre: 'Test dynamique (flexion-extension)', texte: 'Sonde maintenue transversale sur la gouttière, faire fléchir passivement puis activement le coude jusqu\'à 120–130°. Observer : le nerf reste dans la gouttière (stable), monte sur le sommet de l\'épicondyle (**subluxation**) ou passe en avant (**luxation**). Chercher aussi le ressaut du chef médial du triceps (snapping triceps), qui donne le même claquement clinique. **Si on ne trouve pas le nerf** : sortir de la gouttière, remonter au tiers moyen du bras contre le septum intermusculaire médial, et redescendre — un nerf luxé en permanence est en avant de l\'épicondyle, là où on ne le cherche pas.' },
  ],

  sonoanatomie: [
    { structure: 'Épicondyle médial', aspect: 'Convexité hyperéchogène très nette avec cône d\'ombre franc', repere: 'Bord antérieur (gauche de l\'image par convention) de la gouttière' },
    { structure: 'Olécrâne', aspect: 'Deuxième convexité hyperéchogène, ombre postérieure', repere: 'Bord postérieur de la gouttière' },
    { structure: 'Rétinaculum d\'Osborne', aspect: 'Fine bande hyperéchogène de 0,5–1 mm tendue d\'un os à l\'autre, tendue en flexion', repere: 'Toit du tunnel, directement au-dessus du nerf' },
    { structure: 'Nerf ulnaire', aspect: 'Ovale de 2–4 mm en nid d\'abeilles ; hypoéchogène et arrondi s\'il est comprimé, avec perte du dessin fasciculaire', repere: 'Au fond de la gouttière, contre le plancher capsulo-ligamentaire' },
    { structure: 'Artère collatérale ulnaire supérieure', aspect: 'Petit vaisseau pulsatile, souvent flanqué de deux veines satellites', repere: 'Accolée au nerf, plutôt de son côté épicondylien — repère Doppler du tunnel' },
    { structure: 'Faisceau postérieur du ligament collatéral ulnaire / capsule', aspect: 'Bande fibrillaire hyperéchogène', repere: 'Plancher de la gouttière ; ne jamais y injecter (intra-articulaire)' },
    { structure: 'Chefs huméral et ulnaire du FCU', aspect: 'Deux ventres musculaires striés se rejoignant sur une arcade hyperéchogène', repere: '2–4 cm en distal ; deuxième site de striction' },
    { structure: 'Anconé épitrochléen (variante)', aspect: 'Ventre musculaire strié pontant l\'épicondyle et l\'olécrâne à la place du rétinaculum', repere: 'Toit rigide du tunnel ; contre-indique relativement l\'hydrodissection seule' },
    { structure: 'Branche cutanée médiale de l\'avant-bras', aspect: 'Structure fasciculée de 1–2 mm dans le tissu sous-cutané', repere: 'Superficielle et antérieure à l\'épicondyle — à éviter avec l\'aiguille' },
  ],

  technique: [
    { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** l\'asepsie : niveau de CSA maximale marqué au feutre, encoche localisée, test dynamique fait, Doppler passé. Désinfection large, gel stérile ou housse. Seringue de 10 mL de D5W, seringue de 2 mL de lidocaïne 1 %, aiguille 25–27 G montée sur un prolongateur (une main reste sur la sonde pendant toute l\'injection).' },
    { titre: 'Anesthésie cutanée', texte: '0,5–1 mL de lidocaïne 1 % en sous-cutané au point d\'entrée, à 1–1,5 cm du bord de la sonde, **sans infiltrer le champ de vue** (une bulle sous-cutanée dégrade l\'image du nerf pour le reste du geste). Souvent inutile avec une 27 G.' },
    { titre: 'Ponction dans le plan, du côté olécrânien', texte: 'Aiguille à plat (10–20°), suivie sur toute sa longueur. Franchir la peau, le tissu sous-cutané, puis le **rétinaculum d\'Osborne** — le franchissement se sent (ressaut) et se voit (le rétinaculum se déprime puis cède). Amener la pointe **au contact du bord superficiel du nerf**, sans le pousser contre le plancher osseux.' },
    { titre: 'Hydrolocalisation et ouverture du plan', texte: 'Injecter **0,5 mL** : le liquide doit créer une lame anéchogène qui **décolle le nerf du rétinaculum**. Si le nerf gonfle, si le liquide ne se voit pas ou si le patient décrit une décharge électrique fulgurante → **arrêt immédiat, retrait de 1–2 mm**, on est intra-neural. Si le liquide part dans le tissu sous-cutané, la pointe n\'a pas franchi le rétinaculum : avancer de 1–2 mm.' },
    { titre: 'Décollement circonférentiel (360°)', texte: 'Une fois le plan superficiel ouvert, faire **passer la pointe de l\'autre côté du nerf** en la glissant le long de sa berge (jamais à travers), et injecter la même quantité en profond : le nerf doit apparaître entouré d\'un halo anéchogène complet et **remonter, libéré, dans le liquide**. Fractionner par 1–2 mL, total 5–10 mL. Repositionner la sonde en longitudinal pour propager le liquide **en proximal dans la gouttière et en distal sous l\'arcade du FCU** — c\'est la partie du geste que l\'on bâcle le plus souvent.' },
    { titre: 'Critère de fin', texte: 'Halo circonférentiel visible sur **au moins 3–4 cm de long** en balayage, nerf mobile et non déformé, aucune augmentation de sa surface de section, aucune douleur à l\'injection. Retrait, compression douce 1 min, pansement.' },
    { titre: 'Après le geste', texte: 'Tester la sensibilité du 5e doigt et l\'écartement des doigts : un **bloc moteur transitoire** (interosseux, adducteur du pouce) est attendu si de la lidocaïne a été utilisée — prévenir le patient qu\'il ne doit ni conduire ni manipuler d\'objet chaud pendant 2–4 h. Consignes écrites : orthèse nocturne d\'extension à reprendre le soir même, éviction des appuis sur le coude, mobilisation en glissement nerveux (nerve gliding) à J1.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Hydrodissection (option de première intention)** | Dextrose 5 % (D5W) seul, ou D5W + 1–2 mL de lidocaïne 1 % | 5–10 mL, répartis gouttière + arcade du FCU | Solution non ionique : elle décolle sans bloquer la conduction, ce qui permet de tester la fonction en fin de geste. C\'est le schéma des ECR d\'hydrodissection des neuropathies compressives |
| Hydrodissection sans dextrose | Sérum physiologique 0,9 % | 5–10 mL | Alternative simple ; le rationnel « anti-nociceptif » propre au dextrose n\'est pas démontré, l\'effet mécanique de décollement l\'est |
| Bloc diagnostique | Lidocaïne 1 % ou ropivacaïne 0,2 % | 2–3 mL | Petit volume : au-delà, on bloque aussi le nerf médian par diffusion antérieure et on perd la valeur localisatrice. EN avant / 20 min après |
| Infiltration corticoïde péri-neurale (à discuter, preuves faibles) | Méthylprednisolone 40 mg (Dépo-Médrol®) ou bétaméthasone 7 mg (Diprostène® 1 mL) ou 5,7 mg (Célestène® Chronodose 1 mL) + lidocaïne 1 % | 2–4 mL | **Non particulaire ou particulaire acceptable** (pas d\'artère terminale), mais l\'ECR contrôlé disponible est négatif et le site est très superficiel : risque net d\'atrophie sous-cutanée et de dépigmentation en regard de la gouttière. Ne jamais répéter plus de 2 fois |
| Avant PRF | Lidocaïne 1 % | 1–2 mL en sous-cutané uniquement | Ne pas anesthésier le nerf avant la stimulation, sinon les seuils sensitifs sont ininterprétables |

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Les volumes de cette fiche n\'en approchent pas ; c\'est le **cumul d\'une séance multi-sites** (canal carpien controlatéral, De Quervain, doigt à ressort le même jour) qui doit être additionné.

Corticoïde et diabète : glycémie capillaire les 48 h suivantes, prévenir du pic. Sur ce site, le rapport bénéfice/risque penche franchement vers le D5W.`,

  variantes: [
    { titre: 'Hydrodissection à deux niveaux (protocole recommandé)', texte: `Ne pas se contenter de la gouttière. Après le halo rétro-épicondylien, translater la sonde 3–5 cm en distal, retrouver le nerf entre les deux chefs du FCU, et refaire un décollement circonférentiel de 3–5 mL **sous l\'arcade du FCU**. Le nerf y est plus profond, contre le brachial et le fléchisseur profond des doigts.

Un troisième niveau, proximal (septum intermusculaire médial, 6–8 cm au-dessus de l\'épicondyle), se justifie en cas de neuropathie post-traumatique ou de douleur remontant au bras.` },
    { titre: 'Bloc diagnostique sélectif', texte: 'Le bloc du nerf ulnaire à la gouttière n\'est pas le meilleur site pour un bloc *diagnostique* pur : la diffusion y est peu contrôlable. Pour une question purement topographique, le bloc **au tiers moyen de l\'avant-bras** (nerf accolé à l\'artère ulnaire, loin de tout autre nerf) est plus sélectif, avec 2–3 mL. Au coude, réserver le bloc au test avant PRF, au même site que la future électrode.' },
    { titre: 'Radiofréquence pulsée (PRF)', texte: `Indication : douleur neuropathique ulnaire persistante après échec de l\'hydrodissection et du traitement conservateur, chez un patient non opérable ou déjà opéré, avec **bloc test positif** (≥ 50 % de soulagement pendant la durée de l\'AL). Aiguille RF 22 G, extrémité active 5 mm, placée **parallèle au nerf** en vue longitudinale, ou perpendiculaire en transverse à son contact. Stimulation sensitive 50 Hz : paresthésies du territoire ulnaire à < 0,5 V ; stimulation motrice 2 Hz : contraction des interosseux à < 1 V confirme la proximité. Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 1–2 mL d\'AL.

Niveau de preuve : **séries et cas cliniques seulement** pour ce site précis ; extrapolation des données de PRF sur les nerfs périphériques. À annoncer comme tel au patient.` },
    { titre: 'Cryoneurolyse — à éviter ici', texte: 'Le nerf ulnaire au coude est un **nerf mixte à contingent moteur majeur** (tous les interosseux, l\'adducteur du pouce, les lombricaux ulnaires). Une lésion axonale, même théoriquement réversible, expose à une main déficitaire. La cryoneurolyse et la RF thermique n\'ont pas leur place sur ce tronc ; les réserver aux branches sensitives pures.' },
    { titre: 'Ponction-aspiration d\'un kyste synovial du tunnel', texte: 'Si l\'échographie montre un kyste comprimant le nerf (le plus souvent issu de l\'articulation huméro-ulnaire), l\'aspiration échoguidée à l\'aiguille 18–21 G décomprime immédiatement et confirme la cause. Récidive fréquente : c\'est un geste d\'attente avant l\'exérèse chirurgicale, pas un traitement.' },
    { titre: 'Ce qu\'il faut savoir refuser', texte: 'Nerf luxant en flexion + douleur mécanique reproductible = problème **mécanique**. Aucune injection ne le corrige. Le rôle de l\'algologue est alors d\'objectiver l\'instabilité en dynamique et d\'adresser, pas d\'ajouter une troisième infiltration.' },
  ],

  pearls: [
    'Poser la sonde, ne pas appuyer : 200 g de pression suffisent à faire passer une CSA de 12 mm² sous le seuil de 10.',
    'Toujours mesurer **trois niveaux** (bras, gouttière, arcade du FCU) : c\'est le ratio, plus que la valeur absolue, qui fait le diagnostic et qui désigne la cible.',
    'Le **notching sign** en coupe longitudinale est le meilleur guide : hydrodisséquer là où le nerf est étranglé, pas là où il est gros.',
    'Coude fléchi pour voir, coude à 20–30° pour piquer si le nerf est instable.',
    'Le critère de réussite n\'est pas le volume injecté mais le **halo à 360°** et la remobilisation du nerf ; 5 mL bien placés valent mieux que 10 mL dans le tissu sous-cutané.',
    'Chez le patient déjà opéré, le nerf est englué : commencer par un petit volume au niveau le moins fibrosé, puis progresser de proche en proche le long du trajet.',
  ],
  pieges: [
    'Injecter dans la gouttière seulement et déclarer l\'échec : la striction est souvent sous l\'arcade du FCU.',
    'Confondre le nerf avec le tendon du chef médial du triceps ou avec un anconé épitrochléen : basculer la sonde (anisotropie du tendon, striation du muscle, nid d\'abeilles du nerf).',
    'Piquer en antérieur sans avoir cherché les **branches cutanées médiales de l\'avant-bras** : dysesthésie ou névrome durable, complication d\'autant plus mal vécue qu\'elle est iatrogène et pas dans le territoire traité.',
    'Injecter un corticoïde particulaire en sous-cutané par reflux : atrophie graisseuse et dépigmentation bien visibles sur ce relief osseux.',
    'Prendre une CSA élevée pour une preuve : la CSA augmente aussi dans la polyneuropathie diabétique, l\'amylose, la lèpre, l\'acromégalie — corréler à la clinique et à l\'EMG.',
    'Oublier de prévenir du bloc moteur : un patient qui ne peut plus écarter les doigts en sortant de l\'HDJ appelle le soir même.',
  ],
  complications: [
    '**Injection intraneurale** : douleur fulgurante, résistance à l\'injection, gonflement du nerf à l\'écran → arrêter, retirer de 1–2 mm, réinjecter 0,2 mL de test. Surveillance neurologique et information écrite si le doute persiste.',
    'Aggravation transitoire des paresthésies 24–72 h après l\'hydrodissection (distension péri-neurale) : fréquente, bénigne, à annoncer d\'emblée sous peine d\'appel paniqué.',
    'Lésion des branches cutanées médiales de l\'avant-bras : dysesthésie ou névrome de la face médiale de l\'avant-bras. Traitement local (patch lidocaïne, hydrodissection du névrome) — voir le chapitre névrome cicatriciel.',
    'Ponction de l\'artère collatérale ulnaire supérieure : hématome compressible, sans conséquence si le Doppler a été passé ; comprimer 3 min.',
    'Atrophie sous-cutanée et dépigmentation après corticoïde : **fréquentes sur ce site superficiel**, souvent définitives ou lentement réversibles (12–24 mois). Argument majeur pour le D5W.',
    'Bloc moteur transitoire de la main (2–4 h) : attendu si AL, jamais à confondre avec une aggravation.',
    'Infection : exceptionnelle, asepsie standard.',
  ],
  securite: [
    'Site superficiel et compressible : **faible risque hémorragique** au sens ASRA-ESRA 2018 — pas d\'arrêt des antiagrégants, anticoagulants oraux au cas par cas, sans interruption systématique.',
    'Doppler couleur systématique avant la ponction : l\'artère collatérale ulnaire supérieure est immédiatement au contact du nerf.',
    'Aspiration avant chaque bolus, injection fractionnée par 1–2 mL, arrêt immédiat sur douleur fulgurante ou résistance anormale.',
    'Ne jamais traverser le nerf pour atteindre sa face profonde : contourner par la berge.',
    'Ne pas injecter dans le plancher de la gouttière (capsule articulaire) : le liquide part en intra-articulaire et le décollement ne se fait pas.',
    'Corticoïde : dose cumulée annuelle raisonnée si le patient est infiltré ailleurs le même trimestre ; glycémie capillaire chez le diabétique.',
  ],

  suivi: `- **J0** : EN avant / 20 min après (valeur diagnostique du bloc si AL), test de sensibilité du 5e doigt, force d\'écartement des doigts, signe de Froment. Noter la CSA mesurée et le site de l\'encoche dans le compte rendu — c\'est la référence des contrôles ultérieurs.
- **J15–J30** : EN, paresthésies nocturnes, **QuickDASH** ou score de Boston adapté, observance de l\'orthèse nocturne. C\'est à cette échéance qu\'on décide de répéter l\'hydrodissection (souvent 2 à 3 séances espacées de 3–4 semaines dans les protocoles publiés).
- **3 mois** : réévaluation clinique + **écho de contrôle avec nouvelle mesure de CSA** ; une CSA qui ne baisse pas chez un patient toujours symptomatique est un argument pour l\'avis chirurgical.
- **Escalade immédiate, sans attendre** : apparition ou aggravation d\'une amyotrophie du premier interosseux dorsal, d\'un déficit d\'écartement des doigts, d\'une griffe ulnaire → chirurgie.
- Coupler systématiquement à la kinésithérapie (glissement nerveux, ergonomie, sevrage des appuis) : les ECR positifs d\'hydrodissection associent tous un volet conservateur.`,

  evidence: `- **Hydrodissection péri-neurale au dextrose 5 %** : le rationnel et les protocoles viennent des ECR conduits sur le **canal carpien** (équipe de Y-T. Wu, Taïwan), transposés au tunnel cubital dans des essais de plus petite taille et des séries prospectives. Niveau de preuve **modéré à faible pour ce site précis** : résultats cohérents (douleur, paresthésies, surface de section) mais effectifs limités, suivi rarement au-delà de 6 mois, et **aucune comparaison directe à la chirurgie**. C\'est aujourd\'hui l\'option non chirurgicale la mieux argumentée, ce qui ne veut pas dire solidement établie.
- **Corticoïde péri-neural** : l\'essai randomisé contrôlé contre placebo de **van Veen et al. (Muscle & Nerve, milieu des années 2010)** dans le syndrome du tunnel cubital est **négatif** sur son critère principal. Conclusion pratique : ne pas proposer le corticoïde comme traitement de fond de cette neuropathie ; au mieux un usage ponctuel sur une forme franchement inflammatoire, en acceptant le risque d\'atrophie cutanée. C\'est le point où la pratique courante est le plus en décalage avec les données.
- **Échographie diagnostique** : les travaux de précision diagnostique convergent vers une sensibilité et une spécificité **de l\'ordre de 80–90 %** (chiffres à confirmer sur la méta-analyse de référence) pour un seuil de surface de section **autour de 10 mm²** au coude. L\'échographie est **complémentaire** de l\'électroneuromyographie, pas substitutive : elle apporte ce que l\'EMG ne donne pas — la **cause** (anconé épitrochléen, kyste, ostéophyte) et la **dynamique** (subluxation, luxation).
- **Instabilité du nerf** : les séries échographiques retrouvent une subluxation ou une luxation chez une **proportion notable de sujets asymptomatiques**. Preuve descriptive, cohérente entre séries : un nerf instable n\'est pas en soi un diagnostic.
- **Chirurgie** : les revues systématiques comparant décompression in situ et transposition antérieure ne montrent **pas de supériorité fonctionnelle nette** de la transposition, avec davantage de complications. Argument à donner au patient quand on l\'adresse.
- **Trous de la littérature, à assumer devant le patient** : aucune étude ne compare hydrodissection et chirurgie ; le **nombre optimal de séances n\'est pas défini** (les protocoles publiés vont de 1 à 3) ; la **radiofréquence pulsée du nerf ulnaire au coude ne repose que sur des séries et des cas cliniques**.`,

  references: [
    { auteurs: 'van Veen KEB, Wesstein M, van Kasteel V, Bartels RHMA, Visser LH', titre: 'Corticosteroid injection in patients with ulnar neuropathy at the elbow: a randomized, double-blind, placebo-controlled trial', revue: 'Muscle Nerve', annee: '2015', doi: '10.1002/mus.24551', type: 'ECR', verif: true, note: 'Essai contrôlé négatif — argument central contre le corticoïde de routine sur ce site.' },
    { auteurs: 'Wu YT, Ho TY, Chou YC, et al.', titre: 'Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial', revue: 'Mayo Clin Proc', annee: '2017', url: 'https://www.mayoclinicproceedings.org/article/S0025-6196(17)30406-8/abstract', type: 'ECR', verif: true, note: 'Essai princeps de l\'hydrodissection au D5W (canal carpien) ; source du protocole transposé au tunnel cubital.' },
    { auteurs: 'Caliandro P, La Torre G, Padua R, Giannini F, Padua L', titre: 'Treatment for ulnar neuropathy at the elbow', revue: 'Cochrane Database Syst Rev', annee: '2016', doi: '10.1002/14651858.CD006839.pub4', pmid: '27845501', type: 'revue systématique', verif: true, note: 'Version 2016 (pub4) ; une mise à jour 2025 (pub5) existe.' },
    { auteurs: 'Beekman R, et al.', titre: 'Ultrasonography in ulnar neuropathy at the elbow: a critical review', revue: 'Muscle Nerve', annee: '2011', doi: '10.1002/mus.22019', type: 'revue', verif: true, note: 'Revue critique de l\'échographie dans la neuropathie ulnaire au coude (mesure de surface de section) ; remplace la référence Beekman 2003 initialement citée, qui ne portait que sur le canal carpien.' },
    { auteurs: 'Assmus H, Antoniadis G, Bischoff C, et al.', titre: 'Cubital tunnel syndrome — a review and management guidelines', revue: 'Cent Eur Neurosurg', annee: '2011', pmid: '21547883', type: 'reco', verif: true, note: 'Recommandations germanophones de prise en charge.' },
    { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage)', annee: '2007', doi: '10.1007/978-3-540-28163-4', type: 'ouvrage', verif: true, note: 'Référence de sono-anatomie du coude (gouttière, rétinaculum, anconé épitrochléen).' },
    { auteurs: 'Özçakar L, Kara M, Chang KV, et al.', titre: 'EURO-MUSCULUS/USPRM basic scanning protocols for the elbow', revue: 'Eur J Phys Rehabil Med', annee: '2015', pmid: '26158916', type: 'protocole', verif: true, note: 'Protocole de balayage standardisé du coude.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Métadonnées reprises de la fiche nerf-suprascapulaire, vérifiées lors d\'une session antérieure.' },
  ],
  videos: [
    { titre: 'Ultrasound-Guided Hand, Wrist, and Elbow Injections', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-hand-wrist-and-elbow-injections/', note: 'Sono-anatomie et repères des infiltrations du coude (dont nerf ulnaire), texte + images.' },
  ],

  scenes: [
    {
      id: 'ulnaire-gouttiere', section: 'sonoanatomie', titre: 'Gouttière épitrochléo-olécrânienne — coupe transversale de repérage',
      legende: 'Les deux convexités osseuses (épicondyle médial et olécrâne) encadrent la gouttière ; le rétinaculum d\'Osborne en forme le toit, tendu de l\'une à l\'autre. Le nerf ulnaire est l\'ovale en nid d\'abeilles au fond, contre le plancher capsulo-ligamentaire, flanqué de l\'artère collatérale ulnaire supérieure. Noter la branche cutanée médiale de l\'avant-bras, purement sous-cutanée, sur le trajet d\'une ponction antérieure.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Épicondyle médial', right: 'Olécrâne' }).probeInfo({ plan: 'Transverse sur la gouttière', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 7, fatBelow: 26 });
        S.bone({ path: 'M-20 208 Q30 140 128 110 Q200 118 238 202', label: 'Épicondyle médial', at: [96, 300], ldy: 0, small: true });
        S.region({ path: 'M236 212 L406 212 L406 424 L236 424 Z', fill: '#04060a', opacity: 0.93 });
        S.bone({ path: 'M402 202 Q440 118 512 110 Q610 140 660 208', label: 'Olécrâne', at: [548, 300], ldy: 0, small: true });
        S.ligament({ path: 'M126 112 Q320 136 514 112 L516 124 Q320 149 124 124 Z', label: 'Rétinaculum d\'Osborne', lx: 622, ly: 92, anchor: 'end', lead: [500, 116], small: true });
        S.fascia({ points: [[236, 200], [320, 214], [404, 200]], width: 2.2, opacity: 0.85 });
        S.label({ x: 624, y: 250, text: 'Plancher : faisceau post. du LCU', cls: 'lbl-fascia', anchor: 'end', small: true, lead: [408, 204] });
        S.nerve({ x: 328, y: 172, rx: 27, ry: 15, label: 'N. ulnaire\nCSA > 10 mm² = compression', lx: 300, ly: 296, lead: [322, 190] });
        S.artery({ x: 262, y: 178, r: 8, label: 'A. collatérale ulnaire sup.', lx: 190, ly: 348, anchor: 'end', lead: [256, 184], small: true });
        S.nerve({ x: 200, y: 90, r: 5, label: 'Br. cutanée médiale de l\'avant-bras', lx: 206, ly: 74, anchor: 'middle', small: true });
      },
    },
    {
      id: 'ulnaire-hydrodissection', section: 'technique', titre: 'Hydrodissection péri-neurale — aiguille dans le plan, du côté olécrânien',
      legende: 'L\'aiguille aborde le nerf par la berge olécrânienne, franchit le rétinaculum d\'Osborne et ouvre d\'abord le plan superficiel, puis contourne le nerf par sa berge (jamais à travers) pour compléter le halo. Critère de fin : décollement circonférentiel à 360° sur 3–4 cm, nerf remobilisé et non déformé. Le même décollement est ensuite répété 3–5 cm plus bas, sous l\'arcade du fléchisseur ulnaire du carpe.',
      opts: { depth: 2 },
      build: S => {
        S.orient({ left: 'Épicondyle médial', right: 'Olécrâne' }).probeInfo({ plan: 'Transverse sur la gouttière', type: 'in-plane' });
        S.skin({ thickness: 7, fatBelow: 26 });
        S.bone({ path: 'M-20 208 Q30 140 128 110 Q200 118 238 202' });
        S.bone({ path: 'M402 202 Q440 118 512 110 Q610 140 660 208' });
        S.region({ path: 'M236 212 L406 212 L406 424 L236 424 Z', fill: '#04060a', opacity: 0.93 });
        S.ligament({ path: 'M126 112 Q320 136 514 112 L516 124 Q320 149 124 124 Z' });
        S.fascia({ points: [[236, 200], [320, 214], [404, 200]], width: 2.2, opacity: 0.85 });
        S.artery({ x: 256, y: 178, r: 8, label: 'A. collatérale ulnaire sup.', lx: 206, ly: 348, anchor: 'end', lead: [250, 184], small: true });
        S.nerve({ x: 328, y: 172, rx: 27, ry: 15, label: 'N. ulnaire', lx: 328, ly: 258, small: true, lead: [328, 190] });
        S.needle({ from: [636, 100], to: [366, 160], label: '25–27 G, à plat' });
        S.spreadPath({ path: 'M270 172 A 58 40 0 1 0 386 172 A 58 40 0 1 0 270 172 Z M298 172 A 30 18 0 1 1 358 172 A 30 18 0 1 1 298 172 Z', at: [328, 302], label: '5–10 mL D5W — halo 360°' });
      },
    },
  ],

  checklist: [
    'CSA mesurée aux trois niveaux (bras, gouttière, arcade du FCU) et site de l\'encoche noté avant l\'asepsie',
    'Test dynamique en flexion fait : nerf stable / subluxant / luxant — consigné dans le compte rendu',
    'Recherche d\'un anconé épitrochléen, d\'un kyste synovial et d\'ostéophytes',
    'Absence d\'amyotrophie du premier interosseux dorsal vérifiée (sinon : avis chirurgical, pas d\'infiltration)',
    'Branches cutanées médiales de l\'avant-bras repérées et évitées sur le trajet de ponction',
    'Patient prévenu du bloc moteur transitoire de la main (2–4 h) et de l\'aggravation possible des paresthésies 24–72 h',
    'Orthèse nocturne d\'extension et consignes d\'éviction des appuis remises par écrit',
  ],
});
