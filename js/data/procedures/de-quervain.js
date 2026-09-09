/* Fiche : ténosynovite de De Quervain — infiltration échoguidée du 1er compartiment. */
(function () {

  /* Base : coupe transversale sur la styloïde radiale, 1er compartiment des extenseurs. */
  function baseDQ(S, labels) {
    S.skin({ thickness: 7, fatBelow: 16 });
    S.artery({ x: 74, y: 168, r: 10, label: labels ? 'A. radiale' : null, lx: 74, ly: 236, lead: [74, 182], small: true });
    S.nerve({ x: 250, y: 58, r: 4 });
    S.nerve({ x: 332, y: 57, r: 4 });
    S.bone({ path: 'M60 300 Q180 262 320 256 Q460 262 580 300', label: labels ? 'Styloïde radiale' : null, at: [320, 344], ldy: 0, small: true });
    S.region({ path: 'M152 224 Q320 182 488 224 Q400 250 320 254 Q240 250 152 224 Z', fill: '#0d1116', opacity: 0.9 });
    S.ligament({ path: 'M150 210 Q320 168 490 210 L490 224 Q320 182 150 224 Z' });
    S.tendon({ x: 238, y: 234, rx: 26, ry: 18 });
    S.tendon({ x: 288, y: 232, rx: 22, ry: 17 });
    S.tendon({ x: 388, y: 234, rx: 26, ry: 18 });
    S.ligament({ path: 'M330 206 L344 206 L346 256 L332 256 Z' });
  }

  ECHO.register({
    id: 'de-quervain',
    titre: 'Ténosynovite de De Quervain — infiltration échoguidée du 1er compartiment',
    titreCourt: 'De Quervain',
    en: 'Ultrasound-guided corticosteroid injection for de Quervain\'s tenosynovitis (first extensor compartment, abductor pollicis longus and extensor pollicis brevis, intracompartmental septum)',
    region: 'membre-sup',
    types: ['infiltration'],
    niveau: 1,
    grade: 'Forte pour le corticoïde (revue systématique, séries convergentes) · Modérée pour la supériorité de l\'échoguidage (ECR de petite taille, rationnel anatomique fort)',
    maj: '2026-09',
    motsCles: ['De Quervain', 'ténosynovite', '1er compartiment', 'long abducteur du pouce', 'court extenseur du pouce', 'LAP', 'CEP', 'septum', 'styloïde radiale', 'Finkelstein', 'Eichhoff', 'poignet de la jeune mère'],
    resume: 'La ténosynovite sténosante du 1er compartiment des extenseurs est le geste où l\'échoguidage a l\'argument anatomique le plus net : un **septum intra-compartimental** sépare le long abducteur du pouce du court extenseur du pouce chez une part importante des patients — de l\'ordre de 40 % dans les séries échographiques et cadavériques, et davantage encore chez les patients symptomatiques. Une infiltration à l\'aveugle remplit alors le sous-compartiment du long abducteur, laisse sec celui du court extenseur, et échoue — ce qui explique la majorité des « De Quervain résistants ». Sous échographie on voit le septum, on voit le liquide entourer chaque tendon, et on repique de l\'autre côté quand il le faut. La contrepartie à annoncer systématiquement : l\'atrophie sous-cutanée et la dépigmentation sont ici plus fréquentes qu\'ailleurs, la peau étant fine sur un relief osseux.',

    flash: {
      position: 'assis', positionNote: 'assis face à l\'opérateur, avant-bras en demi-pronation (pouce vers le haut), poignet posé sur un billot en légère inclinaison ulnaire, pouce détendu',
      sonde: 'lineaire', sondeNote: '15–18 MHz, hockey stick fortement conseillée ; profondeur 1,5–2 cm, focale à 5–8 mm',
      approche: 'in-plane', approcheNote: 'sonde transversale sur la styloïde radiale, aiguille de distal en proximal (ou de dorsal en palmaire), à plat',
      aiguille: '25–27 G, 25 mm',
      cible: 'Intérieur de la gaine, entre le tendon et le rétinaculum : le liquide doit **cerner d\'un croissant anéchogène le LAP et le CEP** — les deux, séparément si le septum est présent',
      injectat: 'Corticoïde 20–40 mg (méthylprednisolone ou triamcinolone) ou bétaméthasone 5,7 mg + lidocaïne 1 %, total 1–2 mL',
      duree: '5–10 min',
    },

    indications: [
      'Ténosynovite de De Quervain confirmée : douleur du bord radial du poignet irradiant vers le pouce ou l\'avant-bras, réveillée par la préhension et l\'inclinaison ulnaire, test d\'Eichhoff/Finkelstein positif, et **confirmation échographique** (épaississement du toit du 1er compartiment, halo péri-tendineux, hyperémie Doppler).',
      'Forme du **post-partum** ou du « poignet de la jeune mère » (portage répété du nourrisson) : contexte très fréquent, souvent résolutif, où l\'infiltration permet de passer le cap ; compatible avec l\'allaitement (passage systémique négligeable, à confirmer au cas par cas).',
      'Échec ou insuffisance de 4–6 semaines de traitement conservateur : orthèse d\'immobilisation du poignet et de la colonne du pouce (P1 incluse, IP libre), éviction du geste déclenchant, AINS topiques.',
      'Forme récidivante après une première infiltration efficace ayant tenu ≥ 3 mois : deuxième injection raisonnable, en vérifiant cette fois la diffusion dans les **deux** sous-compartiments.',
      'Doute diagnostique avec une rhizarthrose ou un syndrome de l\'intersection : l\'échographie tranche, et un bloc à l\'AL seul confirme la cible avant décision chirurgicale.',
    ],
    contreIndications: [
      'Absolues : refus, infection cutanée en regard, allergie vraie aux amino-amides.',
      'Relatives : diabète déséquilibré (site très superficiel — pic glycémique et atrophie), **peau fine, sujet maigre, phototype foncé** (risque cosmétique majoré), chirurgie programmée, plus de 2 infiltrations sur le même compartiment.',
      'Hémostase : geste **à faible risque hémorragique** (superficiel, compressible, ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants, anticoagulants au cas par cas.',
      '**Pièges diagnostiques à écarter avant d\'infiltrer** : rhizarthrose trapézo-métacarpienne (douleur plus distale, à la base du pouce, grinding test positif), **syndrome de l\'intersection** (douleur 4–8 cm en amont de la styloïde, crépitation), **syndrome de Wartenberg** (compression du nerf radial superficiel : dysesthésies et non douleur mécanique), fracture ou pseudarthrose du scaphoïde, arthrose scapho-trapézo-trapézoïdienne. Infiltrer un De Quervain qui n\'en est pas est l\'échec le plus banal de ce geste.',
    ],
    alternatives: 'Orthèse d\'immobilisation poignet + colonne du pouce portée 3–6 semaines (efficace seule dans une part des cas, surtout en post-partum), éviction du geste causal, AINS topiques, kinésithérapie de reprogrammation gestuelle. L\'infiltration de corticoïde reste le traitement de référence non chirurgical : les données regroupées lui donnent le meilleur taux de succès des options conservatrices, nettement supérieur à l\'orthèse seule. **Chirurgie** (ouverture du 1er compartiment, avec ouverture obligatoire du sous-compartiment du court extenseur) : après échec de 1 à 2 infiltrations bien conduites et bien placées — la nuance est importante, car un échec d\'infiltration mal placée n\'est pas un échec du traitement médical. Complication propre de la chirurgie : lésion des branches sensitives du nerf radial superficiel, et subluxation des tendons.',

    anatomie: `Le **1er compartiment des extenseurs** est un tunnel ostéo-fibreux court, creusé sur le versant dorso-radial de la **styloïde radiale**, dont le toit est un épaississement du rétinaculum des extenseurs (normalement fin, **0,2–0,5 mm**). Il contient deux tendons : le **long abducteur du pouce (LAP)**, en position **palmaire et radiale**, et le **court extenseur du pouce (CEP)**, en position **dorsale et ulnaire**.

Deux variantes anatomiques dominent la pratique :
- **Le septum intra-compartimental** : une cloison fibreuse verticale, souvent doublée d\'une crête osseuse sur la styloïde, sépare les deux tendons en deux sous-compartiments étanches. Sa prévalence est de l\'ordre de **40 %** dans les séries (les chiffres publiés vont d\'environ 20 % à plus de 60 % selon les méthodes, *fourchette à confirmer*), et elle est **plus élevée chez les patients symptomatiques** que dans la population générale.
- **Le LAP est presque toujours multifasciculé** (2 à 4 languettes), le CEP presque toujours unique et plus fin. Un CEP absent existe. Compter les tendons est le premier temps de l\'examen : si on n\'en voit qu\'un gros paquet, on est probablement du côté du LAP seul.

### Ce qui compte pour le geste
- **Le tendon coupable est le plus souvent le CEP**, celui qui est enfermé dans le sous-compartiment le plus étroit. C\'est aussi celui qu\'une injection à l\'aveugle rate.
- **Les branches sensitives du nerf radial superficiel croisent directement au-dessus du 1er compartiment**, dans le tissu sous-cutané, à 1–3 mm de la peau. Elles sont visibles en échographie haute fréquence. Leur lésion donne une dysesthésie ou un névrome du dos du pouce, et l\'atrophie graisseuse post-corticoïde les rend palpables et douloureuses.
- **L\'artère radiale** est plus palmaire au niveau de la styloïde, puis dorsale et distale dans la tabatière anatomique : elle n\'est pas sur le trajet d\'une ponction bien conduite, mais elle doit être repérée au Doppler, en particulier si l\'on aborde de palmaire.
- **Le tendon est fragile et la gaine est virtuelle** : le corticoïde doit se répartir en **croissant autour** du tendon, jamais **dans** son épaisseur. Un tendon qui se dilate à l\'injection est un tendon qu\'on est en train d\'injecter.
- **Profondeurs** : tendons à 3–8 mm, corticale de la styloïde à 8–12 mm. Une aiguille de 25 mm suffit largement, et une sonde de 18 MHz change complètement la lisibilité.`,

    installation: {
      patient: `**Assis face à l\'opérateur**, coude sur la table, avant-bras en **demi-pronation, pouce vers le haut**, bord ulnaire du poignet posé sur un billot ou un champ roulé. Poignet en **légère inclinaison ulnaire**, pouce détendu (ne pas reproduire la manœuvre de Finkelstein pendant le geste : elle tend les tendons et ferme la gaine).

Repérer et marquer la styloïde radiale avant désinfection. Demander au patient de mobiliser le pouce : les deux tendons coulissent, ce qui les identifie immédiatement.

Décubitus dorsal, bras en travers du thorax, chez le patient anxieux ou vagal.`,
      operateur: `Opérateur **assis face au patient**, écran dans l\'axe du regard. Sonde tenue en appui sur l\'avant-bras du patient, **pression très légère** : ce site est saillant et osseux, un appui appuyé chasse le halo péri-tendineux et fait disparaître le signe qu\'on est venu chercher.

Sens de ponction : **de distal vers proximal**, l\'aiguille suivant l\'axe du compartiment — c\'est le sens qui donne le trajet le plus long dans la gaine et la meilleure diffusion. L\'abord **dorso-palmaire** (perpendiculaire à l\'axe des tendons) est une alternative quand le septum impose de traiter séparément le CEP.

Convention d\'image en transversal : **palmaire à gauche, dorsal à droite** — le LAP est alors à gauche, le CEP à droite.`,
      sonde: `- Linéaire **15–18 MHz** ; la **hockey stick** est ici un vrai avantage (relief convexe, patient souvent mince).
- Profondeur **1,5–2 cm**, focale à 5–8 mm, gain réglé pour que le halo péri-tendineux reste franchement noir et la structure fibrillaire du tendon lisible.
- **Doppler couleur basse PRF** : hyperémie péri-tendineuse (signe d\'activité, argument pour infiltrer) et repérage de l\'artère radiale.
- **Basculer la sonde** pour jouer sur l\'anisotropie : c\'est ce qui sépare les languettes du LAP les unes des autres et du CEP.
- Balayage dynamique en flexion-extension du pouce : les tendons coulissent, le septum ne bouge pas.`,
    },

    reperage: [
      { titre: 'Poser la sonde en travers de la styloïde', texte: 'Sonde **transversale** sur le bord radial du poignet, en regard de la styloïde radiale. Image attendue : la convexité corticale de la styloïde en profondeur, et **deux à quatre ovales fibrillaires** rassemblés au-dessus, coiffés d\'une fine bande hyperéchogène — le toit du 1er compartiment.' },
      { titre: 'Identifier LAP et CEP', texte: 'Le **LAP** est **palmaire et radial**, souvent en **plusieurs languettes** et globalement plus volumineux ; le **CEP** est **dorsal et ulnaire**, unique et plus fin. Confirmation dynamique : l\'abduction du pouce mobilise le LAP, l\'extension de la métacarpo-phalangienne mobilise le CEP. Remonter puis redescendre en balayage pour ne pas confondre avec les radiaux (2e compartiment), plus dorsaux.' },
      { titre: 'Mesurer le toit et chercher les signes d\'activité', texte: 'Épaisseur du **toit du compartiment** : normale 0,2–0,5 mm, **> 1 mm** dans la maladie (*seuil à confirmer selon les séries*). Chercher le **halo hypoéchogène péri-tendineux** (ténosynovite), l\'**épaississement des tendons**, l\'**hyperémie Doppler**. L\'absence de tout signe doit faire reconsidérer le diagnostic avant d\'infiltrer.' },
      { titre: 'Chercher le septum — le temps décisif', texte: 'Rechercher une **fine ligne hyperéchogène verticale** entre LAP et CEP, allant du toit à la corticale, souvent associée à une **crête osseuse** sur la styloïde qui la trahit même quand la cloison elle-même est peu visible. Balayer sur toute la longueur du compartiment : le septum peut être partiel. **Sa présence change le geste : deux injections, pas une.**' },
      { titre: 'Repérer les branches du nerf radial superficiel', texte: 'Juste sous la peau, au-dessus du compartiment : de fins faisceaux de 1–2 mm. Les localiser et **choisir le point d\'entrée à distance**. C\'est un temps de 10 secondes qui évite la complication la plus mal vécue de ce geste.' },
      { titre: 'Si l\'image n\'est pas claire', texte: 'Alléger l\'appui, remettre du gel, basculer la sonde pour lever l\'anisotropie. **Si on ne trouve pas de ténosynovite** : élargir le balayage en proximal (syndrome de l\'intersection, 4–8 cm au-dessus de la styloïde, où le 1er compartiment croise le 2e), en distal (trapézo-métacarpienne, scapho-trapézienne) et en superficie (nerf radial superficiel). Ne pas infiltrer une gaine normale.' },
    ],

    sonoanatomie: [
      { structure: 'Toit du 1er compartiment (rétinaculum)', aspect: 'Fine bande hyperéchogène ; **épaissie > 1 mm** et parfois hypoéchogène dans la maladie', repere: 'Coiffe les deux tendons ; c\'est la structure que l\'aiguille franchit' },
      { structure: 'Long abducteur du pouce (LAP)', aspect: '2 à 4 languettes fibrillaires, anisotropes, en position palmaire-radiale', repere: 'Le plus volumineux, mobilisé par l\'abduction du pouce' },
      { structure: 'Court extenseur du pouce (CEP)', aspect: 'Tendon unique, plus fin, dorsal et ulnaire', repere: 'Mobilisé par l\'extension de la MCP ; **le plus souvent le coupable**' },
      { structure: 'Septum intra-compartimental', aspect: 'Fine ligne hyperéchogène verticale entre les deux tendons, du toit à la corticale ; crête osseuse associée sur la styloïde', repere: 'Présent dans environ 40 % des cas ; impose deux injections séparées' },
      { structure: 'Halo péri-tendineux', aspect: 'Croissant hypoéchogène ou anéchogène autour du ou des tendons, avec hyperémie Doppler si actif', repere: 'Signe de la ténosynovite et espace où l\'injectat doit se répartir' },
      { structure: 'Styloïde radiale', aspect: 'Convexité corticale hyperéchogène avec cône d\'ombre', repere: 'Plancher du compartiment ; ne pas racler avec l\'aiguille' },
      { structure: 'Branches du nerf radial superficiel', aspect: 'Fins faisceaux de 1–2 mm, très superficiels dans le tissu sous-cutané', repere: 'Croisent le compartiment : à éviter dès la traversée cutanée' },
      { structure: 'Artère radiale', aspect: 'Vaisseau pulsatile en Doppler', repere: 'Plus palmaire au niveau de la styloïde, dorsale et distale dans la tabatière' },
    ],

    technique: [
      { titre: 'Préparation', texte: 'Checklist (fin de fiche). Repérage complet **avant** l\'asepsie : LAP et CEP comptés, **septum recherché**, épaisseur du toit mesurée, Doppler passé, branches nerveuses superficielles localisées et point d\'entrée choisi. Désinfection large, gel stérile. Seringue de 2 mL, aiguille **25–27 G 25 mm**.' },
      { titre: 'Anesthésie cutanée', texte: 'Habituellement inutile avec une 27 G. Si elle est faite : 0,2 mL de lidocaïne 1 % strictement en sous-cutané, à distance du champ de vue — une bulle sous-cutanée au-dessus d\'un compartiment de 5 mm ruine l\'image.' },
      { titre: 'Ponction dans le plan, de distal en proximal', texte: 'Aiguille **à plat (10–20°)**, biseau vers le tendon, suivie sur toute sa longueur. Franchir le toit du compartiment : ressaut net et léger « pop ». Amener la pointe **entre le toit et le tendon**, tangentiellement — jamais perpendiculaire au tendon, jamais au contact de la corticale.' },
      { titre: 'Test : les 0,2 premiers millilitres', texte: 'Injecter **0,2 mL** et regarder. Trois lectures possibles : (1) le liquide **cerne le tendon d\'un croissant anéchogène** → la pointe est dans la gaine, poursuivre ; (2) le tendon **se dilate**, l\'injection résiste → intratendineux, **arrêter et repositionner** ; (3) le liquide fuse en sous-cutané ou en nappe superficielle → la pointe n\'a pas franchi le toit, avancer de 1 mm.' },
      { titre: 'Injecter les deux sous-compartiments', texte: 'Compléter à **0,5–1 mL** autour du premier tendon, puis **vérifier que le liquide entoure aussi l\'autre tendon**. S\'il s\'arrête net sur une ligne verticale, le **septum est présent** : retirer la pointe jusqu\'au plan sous-cutané, la redirigier de l\'autre côté du septum (ou repiquer par l\'autre versant) et injecter à nouveau **0,5–1 mL**. **C\'est ce temps-là qui fait la différence entre 60 % et 90 % de succès.**' },
      { titre: 'Critère de fin', texte: 'Croissant anéchogène **complet autour du LAP et du CEP**, sur 1,5–2 cm de long en balayage, sans dilatation tendineuse, sans fusée sous-cutanée, sans résistance à l\'injection.' },
      { titre: 'Après le geste', texte: 'Compression douce 1 min, pansement. Consignes écrites : **orthèse du poignet et de la colonne du pouce 7–10 jours** (elle prolonge l\'effet du geste), éviction du geste déclenchant 2 semaines, reprise progressive. Prévenir de la **poussée douloureuse de 24–48 h** et — systématiquement, avant le geste — du risque d\'**atrophie sous-cutanée et de dépigmentation**, particulièrement fréquent à ce site.' },
    ],

    injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Infiltration de référence** | Méthylprednisolone 20–40 mg (Dépo-Médrol®) **ou** triamcinolone acétonide 20–40 mg (Kenacort retard®) **ou** bétaméthasone 5,7 mg (Diprostène® 1 mL), + lidocaïne 1 % 0,5–1 mL | **1–2 mL au total**, répartis entre les deux sous-compartiments | La gaine est virtuelle : au-delà de 2 mL on distend et on fuse en sous-cutané. Si septum : **0,5–1 mL de chaque côté** |
| Septum présent (≈ 40 %) | Idem, en deux temps | 0,5–1 mL par sous-compartiment | Le sous-compartiment du CEP est le plus étroit et le plus souvent responsable : ne jamais le sauter |
| Peau fine, phototype foncé, sujet maigre | Préférer un corticoïde **non particulaire** (dexaméthasone) ou réduire la dose | 0,5–1 mL | L\'atrophie et la dépigmentation sont liées au dépôt de cristaux en site superficiel. Compromis à discuter avec le patient |
| Bloc diagnostique | Lidocaïne 1 % seule | 0,5–1 mL | EN avant / 15 min après : utile pour trancher entre De Quervain, rhizarthrose et syndrome de l\'intersection |

**Interdit formel : la triamcinolone hexacétonide (Hexatrione®)**, réservée à l\'usage **strictement intra-articulaire**. Dans une gaine tendineuse superficielle, elle expose à l\'atrophie et à la fragilisation tendineuse.

**Doses maximales d\'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée). Sans objet isolément ; à additionner en cas de gestes multiples dans la séance.

**Rythme** : ne pas dépasser **2 infiltrations** sur le même compartiment, espacées d\'au moins 3 mois. Un échec après une infiltration dont on a **vérifié à l\'écran** qu\'elle a rempli les deux sous-compartiments est un argument chirurgical ; un échec après une infiltration mal placée n\'en est pas un.

**Post-partum et allaitement** : le passage systémique d\'un corticoïde retard en injection locale unique est négligeable ; la décision se prend au cas par cas, en informant la patiente.

**Diabète** : prévenir du pic glycémique de 48–72 h.`,

    variantes: [
      { titre: 'Abord dorso-palmaire (perpendiculaire à l\'axe des tendons)', texte: 'Sonde transversale, aiguille dans le plan venant du versant **dorsal**, pointe amenée d\'abord dans le sous-compartiment du CEP puis, après retrait partiel et redirection, dans celui du LAP. Voie économique en ponctions quand le septum est complet, mais qui expose davantage aux branches du nerf radial superficiel : les repérer impérativement.' },
      { titre: 'Abord longitudinal', texte: 'Sonde placée dans l\'axe des tendons, aiguille dans le plan de distal en proximal : on voit le liquide progresser **le long** de la gaine sur plusieurs centimètres. Excellent contrôle de la position intra-gaine et de l\'absence d\'injection intratendineuse, mais on perd la vue du septum — à combiner avec un contrôle transversal en fin de geste.' },
      { titre: 'Ne pas confondre avec le syndrome de l\'intersection', texte: 'Douleur et crépitation **4 à 8 cm en amont** de la styloïde, là où les tendons du 1er compartiment croisent ceux du 2e (radiaux). L\'échographie montre l\'œdème et le halo **au croisement**, pas dans le 1er compartiment. Le geste est le même dans son principe (infiltration péri-tendineuse échoguidée du 2e compartiment au niveau du croisement) mais la cible est ailleurs. Infiltrer la styloïde dans cette situation est un échec garanti.' },
      { titre: 'Ne pas confondre avec le syndrome de Wartenberg', texte: 'Compression du **nerf radial superficiel** entre brachio-radial et long extenseur radial du carpe : dysesthésies et brûlures du dos du pouce, Tinel positif sur le trajet nerveux, **pas** de douleur mécanique de la gaine. Le traitement est l\'hydrodissection du nerf, pas l\'infiltration du compartiment. Les deux peuvent coexister.' },
      { titre: 'Contrôle échographique après échec', texte: 'Devant un échec, refaire une échographie avant de conclure : soit le septum n\'avait pas été franchi (le halo n\'entoure qu\'un tendon), soit le diagnostic était autre. Une deuxième infiltration **correctement répartie** rattrape une part importante des « échecs » — c\'est l\'argument le plus concret en faveur de l\'échoguidage dans ce site.' },
    ],

    pearls: [
      'Compter les tendons avant de piquer : si on n\'en voit qu\'un, on n\'est pas au bon endroit ou on ne voit qu\'un sous-compartiment.',
      'La **crête osseuse** sur la styloïde trahit le septum même quand la cloison est invisible : la chercher systématiquement.',
      'Regarder les 0,2 premiers millilitres : ils disent à eux seuls si l\'on est dans la gaine, dans le tendon ou dans le tissu sous-cutané.',
      'Le critère de succès n\'est pas « j\'ai injecté 1 mL » mais « le liquide entoure **les deux** tendons ».',
      'Repérer les branches du nerf radial superficiel avant de choisir le point d\'entrée : 10 secondes contre une dysesthésie de plusieurs mois.',
      'Annoncer l\'atrophie et la dépigmentation **avant** le geste : sur ce site, elles sont fréquentes et bien visibles.',
      'Orthèse 7–10 jours après l\'infiltration : elle fait partie du traitement et prolonge l\'effet.',
    ],
    pieges: [
      'Ignorer le septum et n\'injecter qu\'un sous-compartiment : c\'est le mécanisme central de l\'échec des infiltrations à l\'aveugle.',
      'Infiltrer une rhizarthrose, un syndrome de l\'intersection ou un Wartenberg pris pour un De Quervain : refaire l\'examen avant de refaire un geste.',
      'Injecter dans le tendon : résistance et dilatation fibrillaire — arrêter immédiatement.',
      'Utiliser un corticoïde microcristallin à forte dose chez un sujet maigre à peau fine : atrophie et dépigmentation visibles à distance.',
      'Appuyer avec la sonde et conclure « pas de ténosynovite » : le halo se chasse sous la pression.',
      'Tendre les tendons pendant l\'injection (manœuvre de Finkelstein maintenue) : la gaine se ferme, l\'injectat ne diffuse pas.',
      'Enchaîner une troisième infiltration : au-delà de deux gestes bien placés, la question est chirurgicale.',
    ],
    complications: [
      '**Atrophie sous-cutanée et dépigmentation** : la complication caractéristique de ce site — peau fine sur un relief osseux, corticoïde microcristallin superficiel. Souvent définitive ou très lentement réversible (12–24 mois). **À annoncer avant le geste, systématiquement**, et à consigner dans le dossier.',
      'Lésion d\'une branche du **nerf radial superficiel** : dysesthésie, brûlure ou névrome du dos du pouce, parfois durable et mal vécu.',
      '**Poussée douloureuse post-injection** (24–48 h) : fréquente, cède sous froid et antalgiques de palier 1. À annoncer sous peine d\'être vécue comme un échec.',
      'Injection intratendineuse : fragilisation, exceptionnellement rupture secondaire du LAP ou du CEP. Prévenue par la surveillance des 0,2 premiers millilitres.',
      '**Subluxation tendineuse** après infiltrations répétées ou après chirurgie : ressaut douloureux du bord radial.',
      'Ponction de l\'artère radiale : rare avec un abord dorsal bien conduit ; hématome compressible.',
      'Infection : exceptionnelle sous asepsie standard.',
      'Effets systémiques du corticoïde : hyperglycémie 48–72 h, flush, insomnie.',
    ],
    securite: [
      'Site superficiel et compressible : **faible risque hémorragique** (ASRA-ESRA 2018) — pas d\'arrêt des antiagrégants ; anticoagulants au cas par cas.',
      '**Repérage obligatoire des branches du nerf radial superficiel** avant de choisir le point d\'entrée, et **Doppler** sur l\'artère radiale.',
      'Aiguille toujours **tangentielle** au tendon, jamais perpendiculaire, jamais poussée jusqu\'à la corticale.',
      'Injection fractionnée sous contrôle visuel permanent : arrêt immédiat sur résistance ou dilatation tendineuse.',
      '**Hexatrione® (triamcinolone hexacétonide) formellement exclu** de ce site : intra-articulaire exclusivement.',
      'Maximum 2 infiltrations par compartiment, espacées de 3 mois ; documenter à l\'écran que les deux sous-compartiments ont été remplis, sinon un « échec » n\'a pas de valeur décisionnelle.',
      'Dose de corticoïde réduite chez le sujet maigre, la peau fine et le phototype foncé.',
    ],

    suivi: `- **J0** : EN avant / 15 min après (valeur diagnostique si AL), test d\'Eichhoff-Finkelstein, force de préhension. **Consigner dans le compte rendu : présence ou absence de septum, et diffusion vérifiée autour des deux tendons** — c\'est cette phrase qui donnera sa valeur à un éventuel échec.
- **J2–J3** : la poussée douloureuse doit avoir cédé.
- **J15–J30** : EN, test d\'Eichhoff, reprise des activités, observance de l\'orthèse. C\'est l\'échéance qui juge le geste — l\'effet d\'une infiltration bien placée est habituellement franc et rapide.
- **3 mois** : si récidive après un effet net ayant duré ≥ 3 mois, deuxième infiltration raisonnable. Si échec d\'emblée malgré une diffusion vérifiée dans les deux sous-compartiments : **reprendre le diagnostic**, puis avis chirurgical.
- **Post-partum** : réévaluer à 3 mois en tenant compte de l\'évolution spontanément favorable fréquente quand le portage diminue — ne pas multiplier les gestes dans cette population.
- **Escalade** : deux infiltrations bien placées inefficaces, ou ténosynovite chronique avec sténose serrée → chirurgie (ouverture du 1er compartiment **avec ouverture du sous-compartiment du CEP**, sans quoi la chirurgie échoue pour la même raison que l\'infiltration).`,

    evidence: `- **Corticoïde local** : les données regroupées (revue systématique et évaluation quantitative de la littérature, notamment le travail de **Richie et Briner**) donnent à l\'infiltration de corticoïde le **meilleur taux de succès des traitements non chirurgicaux**, très supérieur à l\'orthèse seule ou à l\'abstention. La revue **Cochrane** (Peters-Veluthamaningal et al.) conclut également en faveur du corticoïde, sur un nombre limité d\'essais. Preuve **forte pour le principe**, plus faible sur les modalités (dose, produit, nombre d\'injections).
- **Échoguidage contre technique aveugle** : les travaux disponibles (dont ceux de **McDermott et al.** et de **Kume et al.**) montrent des taux de succès **de l\'ordre de 80–90 %** sous échographie, contre des résultats nettement inférieurs à l\'aveugle **en présence d\'un septum**. Preuve **modérée** — essais de petite taille, méthodologies hétérogènes — mais le **rationnel anatomique est fort et vérifiable en temps réel** : on voit le liquide s\'arrêter au septum.
- **Le septum** : les séries échographiques et cadavériques (notamment **Choi et al., Radiology**) retrouvent une sous-compartimentation dans une part importante des poignets, **plus fréquente chez les patients symptomatiques** que chez les témoins. Chiffres variables selon les méthodes : retenir « de l\'ordre de 40 %, avec une fourchette large », plutôt qu\'une valeur unique.
- **Complications cosmétiques** : l\'atrophie sous-cutanée et la dépigmentation sont **rapportées de façon constante** dans les séries de ce site, avec des fréquences non négligeables. C\'est une donnée robuste et sous-annoncée en pratique.
- **Trous de la littérature, à assumer** : pas d\'essai de bonne qualité comparant les corticoïdes entre eux ni les doses ; pas de donnée solide sur l\'intérêt propre de l\'orthèse **après** l\'infiltration (l\'usage est bien établi, la preuve l\'est moins) ; pas de comparaison directe infiltration échoguidée contre chirurgie.`,

    references: [
      { auteurs: 'Richie CA 3rd, Briner WW Jr', titre: 'Corticosteroid injection for treatment of de Quervain\'s tenosynovitis: a pooled quantitative literature evaluation', revue: 'The Journal of the American Board of Family Practice', annee: '2003', type: 'revue quantitative', verif: false, note: 'Référence classique du taux de succès de l\'infiltration ; année à confirmer.' },
      { auteurs: 'Peters-Veluthamaningal C, van der Windt DAWM, Winters JC, Meyboom-de Jong B', titre: 'Corticosteroid injection for de Quervain\'s tenosynovitis', revue: 'Cochrane Database of Systematic Reviews', annee: '2009', type: 'revue systématique', verif: false, note: 'Composition des auteurs et année à confirmer.' },
      { auteurs: 'McDermott JD, Ilyas AM, Nazarian LN, Leinberry CF', titre: 'Ultrasound-guided injections for de Quervain\'s tenosynovitis', revue: 'Clinical Orthopaedics and Related Research', annee: '2012', type: 'série prospective', verif: false, note: 'Résultats de l\'infiltration échoguidée ; revue et année à confirmer.' },
      { auteurs: 'Kume K, Amano K, Yamada S, et al.', titre: 'In de Quervain\'s with a separate EPB compartment, ultrasound-guided steroid injection is more effective than a clinical injection technique', revue: 'Journal of Hand Surgery (European Volume)', annee: '2012', type: 'étude comparative', verif: false, note: 'Argument central en faveur du guidage en présence d\'un septum ; année à confirmer.' },
      { auteurs: 'Choi SJ, Ahn JH, Lee YJ, et al.', titre: 'de Quervain disease: US identification of anatomic variations in the first extensor compartment with an emphasis on subcompartmentalization', revue: 'Radiology', annee: '2011', type: 'diagnostic', verif: false, note: 'Prévalence de la sous-compartimentation ; année à confirmer.' },
      { auteurs: 'Bianchi S, Martinoli C', titre: 'Ultrasound of the Musculoskeletal System', revue: 'Springer (ouvrage)', annee: '2007', type: 'ouvrage', verif: false, note: 'Sono-anatomie du 1er compartiment, septum, variantes du LAP.' },
      { auteurs: 'Özçakar L, Kara M, Chang KV, et al.', titre: 'EURO-MUSCULUS/USPRM basic scanning protocols for the wrist and hand', revue: 'European Journal of Physical and Rehabilitation Medicine', annee: '2015', type: 'protocole', verif: false, note: 'Protocole de balayage standardisé ; année à confirmer.' },
      { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Regional Anesthesia and Pain Medicine', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', note: 'Métadonnées reprises de la fiche nerf-suprascapulaire, vérifiées lors d\'une session antérieure.' },
    ],
    videos: [],

    scenes: [
      {
        id: 'dq-compartiment', section: 'sonoanatomie', titre: 'Premier compartiment des extenseurs, coupe transversale sur la styloïde radiale',
        legende: 'Le long abducteur du pouce (palmaire, souvent en plusieurs languettes) et le court extenseur du pouce (dorsal, unique et plus fin) sous un toit rétinaculaire épaissi, entourés du halo péri-tendineux de la ténosynovite. Entre eux, le septum intra-compartimental : une fine cloison verticale allant du toit à la corticale, présente dans environ 40 % des cas, souvent trahie par une crête osseuse sur la styloïde. Les branches sensitives du nerf radial superficiel croisent juste sous la peau.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Palmaire', right: 'Dorsal' }).probeInfo({ plan: 'Transverse sur la styloïde radiale', type: 'linéaire 15–18 MHz' });
          baseDQ(S, true);
          S.label({ x: 150, y: 86, text: 'Br. sensitives du n. radial superficiel', cls: 'lbl-nerve', small: true, lead: [252, 66] });
          S.label({ x: 470, y: 122, text: 'Septum intra-compartimental (≈ 40 %)', cls: 'lbl-lig', anchor: 'end', small: true, lead: [338, 208] });
          S.label({ x: 618, y: 176, text: 'Toit épaissi (> 1 mm)', cls: 'lbl-lig', anchor: 'end', small: true, lead: [452, 212] });
          S.label({ x: 190, y: 300, text: 'LAP (long abducteur)', cls: 'lbl-tendon', small: true, lead: [246, 254] });
          S.label({ x: 470, y: 300, text: 'CEP (court extenseur)', cls: 'lbl-tendon', small: true, lead: [396, 254] });
        },
      },
      {
        id: 'dq-injection', section: 'technique', titre: 'Injection des deux sous-compartiments — de part et d\'autre du septum',
        legende: 'Premier temps : aiguille dans le plan par le versant dorsal, pointe entre le toit et le court extenseur, injection jusqu\'à obtenir un croissant anéchogène complet. Si le liquide s\'arrête net sur une ligne verticale, le septum est présent : retirer la pointe jusqu\'au plan sous-cutané et repiquer de l\'autre côté pour traiter le sous-compartiment du long abducteur. Un tendon qui se dilate à l\'injection signifie que l\'on est en train de l\'injecter : arrêter.',
        opts: { depth: 2 },
        build: S => {
          S.orient({ left: 'Palmaire', right: 'Dorsal' }).probeInfo({ plan: 'Transverse sur la styloïde radiale', type: 'in-plane' });
          baseDQ(S, false);
          S.label({ x: 476, y: 128, text: 'Septum : deux injections,\npas une', cls: 'lbl-lig', anchor: 'end', small: true, lead: [338, 208] });
          S.needle({ from: [632, 110], to: [410, 222], label: '1er temps — CEP', delay: 0.2, dur: 1.0 });
          S.spread({ x: 388, y: 232, rx: 38, ry: 22, label: '0,5–1 mL', delay: 1.2, dur: 0.8 });
          S.needle({ from: [8, 110], to: [272, 220], label: '2e temps — LAP', delay: 2.0, dur: 1.0 });
          S.spread({ x: 262, y: 232, rx: 56, ry: 24, label: '0,5–1 mL', delay: 3.0, dur: 0.8 });
          S.label({ x: 320, y: 344, text: 'Styloïde radiale', cls: 'lbl-bone', small: true });
        },
      },
    ],

    checklist: [
      'Diagnostic confirmé à l\'échographie (toit épaissi, halo péri-tendineux, hyperémie) — pas d\'infiltration sur une gaine normale',
      'Diagnostics différentiels écartés : rhizarthrose, syndrome de l\'intersection, syndrome de Wartenberg, scaphoïde',
      'LAP et CEP identifiés et comptés ; **septum recherché** (cloison et/ou crête osseuse)',
      'Branches du nerf radial superficiel repérées et point d\'entrée choisi à distance ; Doppler passé sur l\'artère radiale',
      'Hexatrione® exclu (intra-articulaire exclusivement) ; dose réduite si peau fine, sujet maigre ou phototype foncé',
      'Patient prévenu **avant le geste** du risque d\'atrophie sous-cutanée et de dépigmentation, et de la poussée douloureuse à 24–48 h',
      'Diffusion vérifiée **autour des deux tendons** et consignée dans le compte rendu',
      'Orthèse poignet + colonne du pouce prescrite pour 7–10 jours ; éviction du geste déclenchant expliquée',
    ],
  });

})();
