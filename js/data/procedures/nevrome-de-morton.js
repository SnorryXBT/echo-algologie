/* Fiche : névrome de Morton — infiltration, neurolyse à l'alcool, RF, cryoneurolyse.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références citées de
   mémoire, marquées verif:false, sans DOI/PMID/URL reconstitués. */
ECHO.register({
  id: 'nevrome-de-morton',
  titre: 'Névrome de Morton — infiltration échoguidée, neurolyse et alternatives percutanées',
  titreCourt: 'Névrome de Morton',
  en: 'Morton neuroma (interdigital / intermetatarsal neuroma): ultrasound-guided corticosteroid injection, alcohol (chemical) neurolysis, radiofrequency ablation, cryoneurolysis',
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: 'Modérée pour le corticoïde échoguidé à court terme (au moins un ECR en aveugle patient) ; faible pour l\'alcool, la radiofréquence et la cryoneurolyse (séries, résultats à long terme décevants pour l\'alcool)',
  motsCles: ['Morton', 'névrome interdigital', 'métatarsalgie', 'espace intermétatarsien', 'signe de Mulder', 'neurolyse alcool', 'radiofréquence', 'cryoneurolyse', 'bursite intermétatarsienne', 'troisième espace'],
  maj: '2026-09',
  resume: 'Le névrome de Morton n\'est pas un névrome mais une **fibrose péri-neurale** du nerf digital plantaire commun, presque toujours dans le 3ᵉ espace intermétatarsien, favorisée par le conflit avec le ligament intermétatarsien transverse profond et le chaussage étroit. L\'échographie fait le diagnostic (masse hypoéchogène ovalaire plantaire, signe de Mulder dynamique) et distingue le névrome de la bursite intermétatarsienne, qui lui est souvent associée et qui change la cible. L\'infiltration échoguidée de corticoïde est le geste de première ligne après échec des mesures de chaussage et des orthèses : efficace à court terme, avec un effet qui s\'émousse. En cas de récidive, les options percutanées — neurolyse à l\'alcool, radiofréquence, cryoneurolyse — précèdent la chirurgie mais reposent sur une littérature nettement plus faible, et la neurolyse à l\'alcool déçoit à long terme.',

  flash: {
    position: 'dorsal', positionNote: 'décubitus dorsal, genou fléchi, pied à plat sur la table (voie dorsale) ; procubitus ou pied surélevé si voie plantaire',
    sonde: 'lineaire', sondeNote: '12–18 MHz, profondeur 2–3 cm ; sonde compacte « hockey stick » idéale sur l\'avant-pied',
    approche: 'in-plane', approcheNote: 'voie dorsale, sonde coronale sur les têtes métatarsiennes, aiguille dans l\'espace intermétatarsien ; out-of-plane acceptable, pointe repérée par hydrolocalisation',
    aiguille: '25–27 G, 25–40 mm',
    cible: 'Espace intermétatarsien, **autour** du névrome et non dedans : diffusion péri-lésionnelle plantaire au ligament intermétatarsien transverse profond',
    injectat: 'Corticoïde 20–40 mg équivalent méthylprednisolone (ou bétaméthasone 3,5–7 mg) + 1–2 mL d\'AL',
    duree: '5–10 min',
  },

  indications: [
    '**Métatarsalgie du 3ᵉ (ou 2ᵉ) espace** avec névrome confirmé en échographie, après échec de 6–12 semaines de mesures conservatrices : chaussage large à talon bas, orthèse à appui rétro-capital, éviction des chaussures étroites.',
    'Douleur à type de brûlure ou de décharge irradiant vers les orteils adjacents, avec **signe de Mulder** clinique et échographique positif.',
    '**Bursite intermétatarsienne** associée ou isolée : cible différente (la bourse, plus dorsale), diagnostic échographique — c\'est une cause fréquente de « névrome » qui n\'en est pas un.',
    '**Bloc diagnostique** à l\'AL seul quand plusieurs espaces sont douloureux ou quand la clinique et l\'imagerie discordent : infiltrer un seul espace et coter la douleur à 30 min.',
    'Récidive après infiltration efficace mais transitoire : indication de discuter la neurolyse à l\'alcool, la radiofréquence ou la cryoneurolyse avant l\'exérèse chirurgicale.',
    'Patient récusé pour la chirurgie ou la refusant, chez qui on cherche une option percutanée.',
  ],
  contreIndications: [
    '**Absolues** : refus, infection cutanée ou mycose interdigitale macérée au point de ponction, allergie vraie documentée.',
    '**Relatives** : diabète déséquilibré ; **neuropathie diabétique ou artériopathie** de l\'avant-pied — la perte de sensibilité protectrice rend l\'atrophie du coussinet graisseux plantaire particulièrement délétère ; chirurgie de l\'avant-pied programmée à moins de 3 mois.',
    '**Infiltrations répétées** : au-delà de 2 à 3 corticoïdes dans le même espace, le rapport bénéfice/risque bascule (atrophie graisseuse plantaire, rupture de plaque plantaire, luxation métatarso-phalangienne). Ne pas enchaîner.',
    '**Risque hémorragique** : geste superficiel et compressible, classe **faible** (ASRA-ESRA 2018) — pas d\'arrêt systématique des antiagrégants ni des anticoagulants.',
    'Neurolyse à l\'alcool : prudence si le patient a déjà un déficit sensitif de l\'espace, et information explicite sur le caractère définitif de l\'hypoesthésie interdigitale induite.',
  ],
  alternatives: 'La première ligne n\'est pas l\'infiltration mais le **chaussage** (largeur d\'avant-pied, talon < 3 cm) et l\'**orthèse plantaire à appui rétro-capital** qui écarte les têtes métatarsiennes : c\'est le seul traitement causal non chirurgical, et sa mauvaise observance explique une grande part des échecs attribués aux gestes. Ensuite : infiltration de corticoïde échoguidée. En cas de récidive : neurolyse à l\'alcool, radiofréquence thermique ou pulsée, cryoneurolyse — toutes moins bien étayées. Enfin la **chirurgie** : neurectomie (voie dorsale le plus souvent) ou simple section du ligament intermétatarsien transverse profond, avec de bons résultats rapportés mais au prix d\'une hypoesthésie interdigitale définitive et d\'un risque de névrome d\'amputation. Les revues systématiques récentes ne permettent pas de hiérarchiser clairement les traitements non chirurgicaux entre eux, ni de conclure à la supériorité de la chirurgie sur les gestes percutanés : la décision reste partagée avec le patient.',

  anatomie: `Le **nerf digital plantaire commun** naît du nerf plantaire médial (espaces 1 à 3) ou latéral (espace 4), chemine dans l\'espace intermétatarsien, passe **en plantaire du ligament intermétatarsien transverse profond**, puis se divise en deux nerfs digitaux propres pour les faces adjacentes des orteils. Le 3ᵉ espace reçoit classiquement une **anastomose entre nerfs plantaires médial et latéral**, ce qui y augmente le calibre du nerf et contribue à expliquer la nette prédominance du névrome à ce niveau (une explication classique, dont la part réelle est discutée — à confirmer).

Le « névrome » est en réalité une **fibrose péri-neurale et une dégénérescence du nerf**, sans prolifération tumorale : le terme est trompeur mais consacré. Il siège au niveau ou juste en distal du bord distal du ligament transverse, là où le nerf est comprimé entre le ligament au-dessus et le sol au-dessous à chaque appui, d\'autant plus que l\'avant-pied est comprimé latéralement par le chaussage.

La **bourse intermétatarsienne** est une structure normale, située **dorsalement au ligament transverse**, entre les têtes métatarsiennes. Elle peut devenir pathologique (bursite) et donner une symptomatologie très proche. Une petite lame liquidienne y est fréquente chez l\'asymptomatique : seule une bourse distendue (> 3 mm environ, à confirmer selon les séries) est retenue comme pathologique.

Le **coussinet graisseux plantaire** et les **plaques plantaires** des articulations métatarso-phalangiennes sont les deux structures que le corticoïde peut abîmer. La plaque plantaire est une structure fibro-cartilagineuse qui stabilise l\'orteil : sa rupture entraîne une déviation puis une luxation dorsale de la MTP.

### Ce qui compte pour le geste
- **La cible est péri-lésionnelle, pas intra-lésionnelle** : on entoure le névrome, on ne l\'injecte pas.
- **Le névrome est plantaire au ligament transverse ; la bourse est dorsale.** Se tromper d\'étage, c\'est traiter la mauvaise structure — d\'où l\'intérêt de l\'échographie avant, et pas seulement pendant.
- La distinction est aussi **dimensionnelle** : un diamètre transverse **> 5 mm** est le seuil habituellement retenu pour un névrome symptomatique ; en dessous, la corrélation avec les symptômes est mauvaise et des névromes sont trouvés chez des asymptomatiques.
- La voie **dorsale** est la voie de référence : elle épargne la peau plantaire, épaisse, très sensible et à cicatrisation lente. La voie **plantaire** raccourcit la distance à la cible mais expose à une injection douloureuse et à un point de ponction en zone d\'appui.
- Le corticoïde diffuse volontiers vers les **plaques plantaires** adjacentes : c\'est ce qui fonde la limitation stricte du nombre d\'injections.`,

  installation: {
    patient: `**Décubitus dorsal**, genou fléchi à 60–90°, **pied à plat sur la table**, avant-pied accessible par le dos — position de référence pour la voie dorsale. Un billot sous le genou stabilise.

Pour la **voie plantaire** ou pour un repérage plantaire : patient en procubitus, pied dépassant du bord de la table et cheville en flexion plantaire, ou décubitus dorsal avec le pied surélevé sur un coussin.

Repérer et marquer les espaces intermétatarsiens en pinçant l\'avant-pied : le **signe de Mulder** (compression transversale de l\'avant-pied entre pouce et index, qui reproduit la douleur avec parfois un ressaut palpable) désigne l\'espace à traiter. Le confirmer en échographie avant de désinfecter.`,
    operateur: `Opérateur **assis au bout de la table**, face à la plante ou au dos du pied selon la voie, écran **au-delà du patient, dans l\'axe du regard**. Sonde compacte tenue en appui sur le dos du pied, main stabilisée : l\'avant-pied est mobile et la cible mesure quelques millimètres.

Voie dorsale : ponction **dorsale, dans l\'espace intermétatarsien**, aiguille progressant vers le plan plantaire. L\'autre main écarte légèrement les têtes métatarsiennes (traction transversale douce) pour ouvrir l\'espace.`,
    sonde: `- Linéaire **12–18 MHz**, preset MSK superficiel, **profondeur 2–3 cm**, focale à 1 cm, gain modéré.
- Sonde **« hockey stick »** nettement supérieure sur l\'avant-pied : l\'empreinte courte épouse la convexité dorsale et permet de rester entre deux têtes.
- **Doppler couleur** : le névrome est **avasculaire ou pauvrement vascularisé** — un signal franc doit faire évoquer autre chose (bursite très inflammatoire, tumeur des parties molles, synovite MTP).
- **Manœuvre de Mulder échographique** : sonde plaquée en dorsal (ou en plantaire) et compression transversale de l\'avant-pied de l\'autre main : la masse hypoéchogène se luxe vers la face plantaire avec un ressaut visible à l\'écran, souvent audible et douloureux. C\'est le test diagnostique le plus spécifique du geste — le faire avant de ponctionner.
- Ne pas comprimer avec la sonde : la pression chasse la masse hors du champ et écrase la bourse.`,
  },

  reperage: [
    { titre: 'Coupe coronale dorsale sur les têtes métatarsiennes', texte: 'Sonde **transversale (coronale)** sur le dos de l\'avant-pied, juste en arrière des têtes métatarsiennes : on voit s\'aligner les convexités corticales hyperéchogènes des têtes, chacune avec son cône d\'ombre, séparées par les espaces intermétatarsiens. Compter les espaces à partir du 1ᵉʳ rayon pour ne pas se tromper de niveau.' },
    { titre: 'Descendre dans l\'espace intermétatarsien', texte: 'Centrer l\'espace suspect (3ᵉ le plus souvent) entre deux têtes et descendre en profondeur : au-dessus, la **bourse intermétatarsienne** (petite lame anéchogène compressible) ; puis le **ligament intermétatarsien transverse profond** (fine bande hyperéchogène tendue entre les plaques plantaires) ; en dessous, en plantaire, la zone où siège le névrome.' },
    { titre: 'Identifier le névrome', texte: 'Masse **ovalaire, hypoéchogène, à contours nets**, en continuité avec le nerf digital en amont et en aval, siégeant en **plantaire du ligament transverse**. Mesurer le **diamètre transverse** : le seuil habituellement retenu est **> 5 mm**. Doppler : classiquement pauvre ou nul.' },
    { titre: 'Manœuvre de Mulder échographique', texte: 'Comprimer transversalement l\'avant-pied de la main libre tout en gardant la sonde en place : la masse se **luxe en plantaire avec un ressaut** visible à l\'écran, reproduisant la douleur. C\'est ce qui distingue un névrome symptomatique d\'une image fortuite.' },
    { titre: 'Vue longitudinale de confirmation', texte: 'Tourner la sonde de 90° dans l\'axe de l\'espace : le névrome apparaît comme un **renflement fusiforme** en continuité avec le nerf digital, ce qui exclut un kyste, un lipome ou une bursite pure. Chercher aussi une **synovite MTP** adjacente ou une lésion de plaque plantaire, diagnostics différentiels fréquents.' },
    { titre: 'Si on ne trouve pas', texte: 'Masse non vue : passer en **voie plantaire** (sonde sur la face plantaire, avec beaucoup de gel ou un coussin d\'interposition) — la fenêtre y est souvent meilleure car on n\'est pas gêné par les ombres des têtes. Répéter la manœuvre de Mulder. Si l\'espace reste normal, remettre en cause le diagnostic : bursite isolée, synovite MTP, fracture de fatigue métatarsienne, maladie de Freiberg, syndrome du tunnel tarsien distal.' },
  ],

  sonoanatomie: [
    { structure: 'Têtes métatarsiennes', aspect: 'Convexités corticales très hyperéchogènes avec cône d\'ombre postérieur', repere: 'Bornent l\'espace ; compter les rayons depuis le 1ᵉʳ pour identifier l\'espace' },
    { structure: 'Espace intermétatarsien', aspect: 'Couloir hypoéchogène entre deux têtes, contenant graisse, bourse, ligament et nerf', repere: 'Le 3ᵉ espace est le siège habituel du névrome' },
    { structure: 'Bourse intermétatarsienne', aspect: 'Lame anéchogène **compressible**, dorsale au ligament transverse ; pathologique si distendue', repere: 'Cible différente du névrome — ne pas confondre les deux étages' },
    { structure: 'Ligament intermétatarsien transverse profond', aspect: 'Fine bande hyperéchogène tendue entre les plaques plantaires adjacentes', repere: 'Le névrome est **plantaire** à ce ligament, la bourse **dorsale**' },
    { structure: 'Névrome de Morton', aspect: 'Masse ovalaire hypoéchogène à contours nets, > 5 mm de diamètre transverse, en continuité avec le nerf digital, avasculaire au Doppler', repere: 'Se luxe en plantaire avec ressaut à la compression transversale (Mulder)' },
    { structure: 'Nerf digital plantaire commun', aspect: 'Petit faisceau hypoéchogène de 1–2 mm, difficile à suivre en amont du renflement', repere: 'Sa continuité avec la masse fait le diagnostic en coupe longitudinale' },
    { structure: 'Plaque plantaire MTP', aspect: 'Structure fibro-cartilagineuse hypoéchogène à la face plantaire de la MTP', repere: 'Structure à ne pas infiltrer : risque de rupture et de luxation dorsale de l\'orteil' },
    { structure: 'Coussinet graisseux plantaire', aspect: 'Couche graisseuse lobulée sous la peau plantaire, épaisse', repere: 'Son atrophie après corticoïdes répétés est une complication invalidante et définitive' },
  ],

  technique: [
    { titre: 'Préparation et confirmation', texte: 'Checklist (fin de fiche). **Refaire le Mulder échographique juste avant de désinfecter** et noter l\'espace traité. Désinfection du dos de l\'avant-pied (vérifier l\'absence de mycose interdigitale), gel stérile ou housse, gants stériles. Seringue de 2–3 mL, aiguille **25–27 G**.' },
    { titre: 'Anesthésie cutanée', texte: 'Facultative avec une 27 G : un bouton de lidocaïne 1 % (0,2–0,3 mL) en dorsal suffit si le patient est anxieux. Rester très superficiel : un bouton trop volumineux noie la fenêtre de quelques millimètres.' },
    { titre: 'Ponction dorsale dans l\'espace intermétatarsien', texte: 'Sonde **coronale** sur les têtes, espace centré. Écarter légèrement les têtes de la main libre. Entrer en **dorsal dans l\'espace**, aiguille progressant vers le plan plantaire, **in-plane** en gardant la pointe visible en permanence, ou **out-of-plane** avec repérage de la pointe par hydrolocalisation (0,1–0,2 mL). Franchir le plan du ligament transverse et amener la pointe **au contact du névrome, sans y pénétrer**.' },
    { titre: 'Test et injection péri-lésionnelle', texte: 'Aspiration. Injecter **0,2–0,3 mL** en test : l\'injectat doit **entourer la masse** et la souligner, en une nappe anéchogène péri-lésionnelle. Une résistance franche ou une douleur électrique en éclair signe une position **intra-neurale** : retirer de 1–2 mm et réinjecter. Puis 1–2 mL fractionnés. Ne jamais forcer.' },
    { titre: 'Critère de fin', texte: 'Névrome **cerné par une nappe anéchogène** sur au moins la moitié de sa circonférence, sans injection intra-lésionnelle, sans nappe dans le coussinet graisseux plantaire ni au contact d\'une plaque plantaire. Volume total 1,5–3 mL selon la voie.' },
    { titre: 'Si c\'est la bourse la cible', texte: 'Bursite intermétatarsienne isolée ou prédominante : la pointe s\'arrête **en dorsal du ligament transverse**, dans la bourse distendue, dont on peut d\'abord évacuer le contenu. Volume plus faible (0,5–1,5 mL). Le repère de fin est le remplissage de la bourse, pas la diffusion péri-nerveuse.' },
    { titre: 'Après le geste', texte: 'Compression brève, pansement. Consignes : chaussage large immédiat (le patient doit **venir avec** une chaussure adaptée), décharge relative 48 h, glace. Prévenir de la **poussée douloureuse des 24–48 h**. Rappeler que l\'orthèse à appui rétro-capital doit être portée : l\'infiltration sans correction du chaussage récidive. EN avant / 30 min si visée diagnostique.' },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Infiltration péri-névromateuse (1ʳᵉ ligne) | Méthylprednisolone 20–40 mg **ou** bétaméthasone 3,5–7 mg (Diprostène® 0,5–1 mL) + lidocaïne 1 % ou ropivacaïne 0,2 % | 1,5–3 mL au total | Schéma le plus proche des données publiées : corticoïde de type méthylprednisolone 20–40 mg + AL. **Maximum 2–3 injections dans le même espace, espacées d\'au moins 3 mois** |
| Bloc diagnostique | Lidocaïne 1–2 % ou ropivacaïne 0,2 % seule | 1–2 mL | Un seul espace par séance ; EN avant / 30 min après. Indispensable quand plusieurs espaces sont douloureux |
| Bursite intermétatarsienne | Corticoïde + AL, volume réduit | 0,5–1,5 mL | Cible **dorsale** au ligament transverse ; évacuation préalable possible |
| Neurolyse à l\'alcool | Éthanol **20–30 %** dilué dans un AL (préparation extemporanée, à formaliser avec la pharmacie de l\'établissement) | 0,5–1 mL par séance | Séries : 3 à 7 séances espacées de 2–4 semaines. Injecter **strictement au contact du névrome**, jamais en sous-cutané. Résultats à long terme décevants (cf. Preuve) |
| Radiofréquence thermique | Aiguille RF de petit calibre, extrémité active courte ; paramètres selon la console (protocoles hétérogènes, à confirmer) | AL 1–2 mL après | Précédée d\'un bloc test positif. Produit une hypoesthésie interdigitale |
| Radiofréquence pulsée (PRF) | 42 °C, 2 Hz, 20 ms, ~45 V, 120 s × 2–3 cycles (paramètres usuels, à adapter à la console) | AL ± corticoïde 1–2 mL | Option non lésionnelle, à préférer si l\'on veut éviter le déficit sensitif. Preuve faible |
| Cryoneurolyse | Sonde cryo fine, cycles gel/dégel selon le matériel | AL préalable | Données limitées à des séries ; à réserver aux échecs, dans un centre équipé |

**Capsaïcine** : des travaux exploratoires ont évalué l\'injection de capsaïcine dans le névrome de Morton. **Hors pratique courante et hors AMM en France pour cette indication** : à considérer comme une piste de recherche, pas comme une option à proposer en HDJ.

**Doses maximales d\'AL** (jamais approchées ici, à additionner en cas de gestes multiples) : ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée).

**Corticoïde particulaire** : acceptable ici (pas d\'artère terminale à risque d\'embolie), mais c\'est justement la nature particulaire qui est en cause dans l\'atrophie graisseuse et la dépigmentation. Sur un pied fin, une peau fragile ou en cas de deuxième injection, préférer un corticoïde moins particulaire et un volume réduit. **Ne jamais utiliser la triamcinolone hexacétonide (Hexatrione®)**, réservée à l\'intra-articulaire.`,

  variantes: [
    { titre: 'Voie plantaire', texte: `Sonde en plantaire, aiguille introduite par la face plantaire dans l\'axe de l\'espace, ou sonde dorsale et aiguille plantaire. **Avantage** : trajet court, cible immédiatement accessible, meilleure fenêtre échographique (pas d\'ombre des têtes). **Inconvénients** : peau plantaire épaisse et très sensible (injection douloureuse), point de ponction en **zone d\'appui** (cicatrisation lente, risque infectieux plus élevé), et surtout **trajet passant par le coussinet graisseux** que l\'on cherche à préserver. À réserver aux échecs de la voie dorsale, ou au repérage seul.` },
    { titre: 'Neurolyse chimique à l\'alcool', texte: `Éthanol dilué à **20–30 %** dans un anesthésique local, 0,5–1 mL au contact du névrome sous contrôle échographique strict, en 3 à 7 séances espacées de 2 à 4 semaines. Les séries initiales (Dockery 1999 avec de l\'alcool à 4 %, puis Hughes 2007 sous échographie) rapportaient des taux de succès élevés à court terme. Le suivi à **5 ans de Gurdezi 2013 est nettement moins favorable**, avec une proportion importante de patients réopérés ou insatisfaits : la neurolyse à l\'alcool est donc à présenter comme une option de temporisation, pas comme un équivalent de la chirurgie. Informer explicitement du caractère **définitif de l\'hypoesthésie interdigitale** et du risque de douleur post-injection. Ne jamais laisser refluer d\'alcool en sous-cutané (nécrose graisseuse, ulcération).` },
    { titre: 'Radiofréquence thermique et pulsée', texte: `**RF thermique** : lésion du nerf digital sous repérage échographique, après bloc test positif ; les séries (Chuter 2013 et suivantes) rapportent des résultats favorables à un an chez une majorité de patients, mais il s\'agit de séries non contrôlées et les protocoles diffèrent. Elle produit une hypoesthésie interdigitale, à annoncer. **PRF** : option non lésionnelle (42 °C), séduisante pour préserver la sensibilité, mais la littérature est encore plus mince. Dans les deux cas : bloc test à l\'AL préalable indispensable, et positionnement de l\'électrode **parallèle** au nerf.` },
    { titre: 'Cryoneurolyse', texte: `Application d\'une sonde cryogénique au contact du nerf digital, cycles gel/dégel selon le matériel. Intérêt théorique : lésion axonale avec préservation du tissu conjonctif, donc régénération possible et moindre risque de névrome d\'amputation qu\'après section. Données limitées à des **séries de faible effectif** ; à réserver aux centres équipés et aux échecs des autres options (chapitre *Cryoneurolyse*).` },
    { titre: 'Ce qu\'il faut faire avant tout geste : le chaussage et l\'orthèse', texte: `Ce n\'est pas une variante technique mais la variable qui décide du résultat. Un avant-pied comprimé toute la journée reproduit le conflit à chaque pas : sans **chaussure large à talon bas** et sans **orthèse à appui rétro-capital** écartant les têtes métatarsiennes, l\'effet de toute infiltration s\'épuise en quelques semaines. Vérifier l\'observance avant d\'incriminer le geste et avant d\'escalader vers l\'alcool, la RF ou la chirurgie.` },
  ],

  pearls: [
    'Refaire le **Mulder échographique juste avant de piquer** : il confirme l\'espace, réveille la douleur reconnue par le patient et légitime le geste.',
    'La règle des deux étages : **bourse au-dessus du ligament transverse, névrome en dessous**. Décider de l\'étage avant d\'avancer l\'aiguille.',
    'Injecter **autour** du névrome, jamais dedans : une douleur électrique ou une résistance = pointe intra-neurale, on recule.',
    'Écarter les têtes métatarsiennes de la main libre pendant la ponction : l\'espace s\'ouvre de 2–3 mm, ce qui change tout sur une cible de cette taille.',
    'Un Doppler franc dans la masse doit faire douter du diagnostic : le névrome est classiquement avasculaire.',
    'Compter les espaces depuis le 1ᵉʳ rayon avant de désinfecter : se tromper d\'espace est l\'erreur la plus banale et la plus évitable.',
    'Faire venir le patient **avec une chaussure large** : il repartira avec, et c\'est la moitié du traitement.',
  ],
  pieges: [
    'Traiter une **bursite intermétatarsienne** en croyant traiter un névrome (ou l\'inverse) : mêmes symptômes, étages différents.',
    'Retenir un névrome sur la seule image : sous 5 mm et sans Mulder positif, la corrélation avec les symptômes est mauvaise — des névromes existent chez des asymptomatiques.',
    'Enchaîner les infiltrations de corticoïde dans le même espace : atrophie du coussinet graisseux, dépigmentation, **rupture de plaque plantaire et luxation dorsale de la MTP** — complications définitives et invalidantes.',
    'Laisser refluer le corticoïde (ou pire, l\'alcool) en sous-cutané ou en plantaire : nécrose graisseuse, dépigmentation, ulcération en zone d\'appui.',
    'Présenter la neurolyse à l\'alcool comme définitive : les résultats à 5 ans sont décevants, et l\'hypoesthésie, elle, est définitive.',
    'Infiltrer sans avoir corrigé le chaussage : récidive quasi assurée, et le patient conclut à l\'échec du geste.',
    'Négliger les diagnostics différentiels devant un espace échographiquement normal : synovite MTP, lésion de plaque plantaire, fracture de fatigue, Freiberg.',
  ],
  complications: [
    '**Poussée douloureuse post-infiltration** (24–48 h) : la plus fréquente ; glace, antalgiques, prévenir systématiquement.',
    '**Atrophie du coussinet graisseux plantaire** : complication redoutée, favorisée par les corticoïdes particulaires répétés et la voie plantaire. Elle est **définitive** et transforme une métatarsalgie en douleur d\'appui permanente. C\'est la raison principale de limiter le nombre d\'injections.',
    '**Dépigmentation et atrophie cutanée** au point de ponction, surtout sur peau pigmentée : prévenir, purger l\'aiguille au retrait.',
    '**Rupture de la plaque plantaire et luxation dorsale de la métatarso-phalangienne** après corticoïdes répétés dans l\'espace : complication chirurgicale, définitive.',
    '**Lésion nerveuse par injection intra-neurale** : douleur en éclair pendant l\'injection, dysesthésies séquellaires — arrêt immédiat et repositionnement au moindre doute.',
    '**Hypoesthésie interdigitale définitive** après neurolyse à l\'alcool ou RF thermique : ce n\'est pas une complication mais un effet attendu — il doit être annoncé et tracé dans le consentement.',
    '**Nécrose graisseuse ou ulcération** après reflux d\'alcool en sous-cutané : évitable par le contrôle échographique permanent de la diffusion.',
    '**Infection** : rare, mais l\'avant-pied est une zone à risque (macération interdigitale, mycoses) — inspecter la peau avant de désinfecter.',
    '**Hyperglycémie** 24–72 h chez le diabétique.',
  ],
  securite: [
    'Classe de risque hémorragique **faible** (ASRA-ESRA 2018) : geste superficiel et compressible, pas d\'arrêt systématique des antiagrégants ni des anticoagulants.',
    'Inspecter les espaces interdigitaux avant la désinfection : une mycose macérée contre-indique le geste ce jour-là.',
    'Doppler avant ponction : pas de danger vasculaire majeur dans l\'espace, mais un signal franc dans la masse doit faire reconsidérer le diagnostic.',
    'Volume total contrôlé (1,5–3 mL) : un volume excessif diffuse vers les plaques plantaires et le coussinet graisseux.',
    'Limiter strictement le nombre de corticoïdes : **2 à 3 maximum par espace, espacés d\'au moins 3 mois**, et pas de nouvelle injection si l\'effet de la précédente a duré moins de 6 semaines.',
    'Alcool : contrôle échographique permanent de la diffusion, injection lente, arrêt immédiat en cas de nappe sous-cutanée. Protocole de dilution écrit et validé avec la pharmacie.',
    'Prudence majorée chez le diabétique neuropathe et l\'artéritique : perte de sensibilité protectrice et cicatrisation compromise en zone d\'appui.',
  ],

  suivi: `- **J0** : EN avant et à 30 min (valeur diagnostique de l\'AL), espace traité tracé, chaussage vérifié.
- **J2–J3** : fin de la poussée douloureuse post-infiltration ; on ne juge pas l\'effet du corticoïde avant.
- **J15–J30** : EN, périmètre de marche, tolérance du chaussage, observance de l\'orthèse. **Contrôle échographique** utile en cas de récidive rapide : rechercher une bursite non traitée, une synovite MTP, une lésion de plaque plantaire.
- **3 mois** : durabilité. Une réponse < 6 semaines qui se répète signe soit une cible incomplète (bourse + névrome), soit un facteur mécanique non corrigé, soit un mauvais diagnostic.
- **Quand répéter** : réponse ≥ 50 % pendant au moins 8 semaines, **maximum 2 à 3 corticoïdes par espace**, jamais avant 3 mois. Au-delà, ne pas réinjecter : changer de stratégie.
- **Quand escalader** : après 2 corticoïdes efficaces mais transitoires, discuter neurolyse à l\'alcool, RF ou cryoneurolyse — en expliquant la faiblesse des preuves et le déficit sensitif induit — ou adresser au chirurgien. Après une infiltration **inefficace malgré un bloc AL positif**, réexaminer le diagnostic avant d\'escalader.
- Toujours réévaluer le **chaussage et l\'orthèse** à chaque consultation : c\'est le facteur qui fait la différence entre une rémission durable et un carrousel d\'infiltrations.`,

  evidence: `*Fiche rédigée sans accès à la recherche bibliographique (budget de session épuisé) : les références sont citées de mémoire et marquées « à vérifier ». Les jugements de force de preuve sont qualitatifs et à reconfirmer.*

- **Corticoïde vs anesthésique local (Thomson 2013, JBJS Am)** : ECR en aveugle patient, corticoïde + AL vs AL seul dans le névrome de Morton, avec un bénéfice en faveur du corticoïde sur la douleur à moyen terme. C\'est **l\'essai le plus solide de la fiche** et il fonde l\'infiltration de corticoïde en première ligne interventionnelle. Preuve **modérée** — effectif limité, effet qui s\'atténue avec le temps.
- **Traitements non chirurgicaux, vue d\'ensemble (Matthews 2019, revue systématique et méta-analyse)** : les interventions non chirurgicales ont un effet globalement favorable mais la **qualité méthodologique est faible et l\'hétérogénéité forte** ; aucune option ne se détache clairement. À retenir : on ne peut pas hiérarchiser sérieusement corticoïde, alcool et RF entre eux sur les données disponibles.
- **Imagerie (Bignotti 2015, revue systématique et méta-analyse)** : échographie et IRM ont des performances diagnostiques comparables pour le névrome de Morton. L\'échographie, moins coûteuse et dynamique (Mulder), est donc l\'examen de première intention — et c\'est un argument fort pour le geste échoguidé en consultation.
- **Neurolyse à l\'alcool** : les séries initiales (Dockery 1999 ; Hughes 2007 sous échographie, série importante) rapportent des taux de succès élevés à court et moyen terme. Mais le **suivi à 5 ans de Gurdezi 2013** est nettement moins favorable, avec beaucoup de patients finalement opérés ou insatisfaits. Preuve **faible**, et **résultats à long terme décevants** : c\'est le point le plus important à retenir, et à dire au patient.
- **Radiofréquence (Chuter 2013 et séries ultérieures)** : résultats favorables rapportés chez une majorité de patients, mais **séries non contrôlées**, protocoles hétérogènes, pas d\'ECR de bonne qualité à ma connaissance. Preuve **faible**.
- **Cryoneurolyse** : quelques séries de faible effectif, résultats encourageants mais **preuve très faible**. Option de recours.
- **Capsaïcine** : travaux **exploratoires** ; aucune place en pratique courante, hors AMM dans cette indication en France.
- **Comparaison avec la chirurgie** : les revues systématiques (dont Valisena 2018) rapportent de bons résultats de la neurectomie, mais les comparaisons directes avec les traitements percutanés sont rares et de faible qualité. **Aucun essai ne permet d\'affirmer qu\'un geste percutané équivaut à la chirurgie**, ni l\'inverse. La décision se prend sur les préférences du patient, l\'acceptation de l\'hypoesthésie définitive et la réponse aux gestes antérieurs.
- **Trou principal de la littérature** : aucune stratégie séquentielle (quel geste après l\'échec de quel geste) n\'est validée. Ce que propose cette fiche est un ordre raisonné, pas un algorithme démontré.`,

  references: [
    { auteurs: 'Thomson CE, Beggs I, Martin DJ, et al.', titre: 'Methylprednisolone injections for the treatment of Morton neuroma: a patient-blinded randomized trial', revue: 'Journal of Bone and Joint Surgery (Am)', annee: '2013', type: 'ECR', verif: false, note: 'Essai de référence pour le corticoïde échoguidé dans cette indication.' },
    { auteurs: 'Matthews BG, Hurn SE, Harding MP, Henry RA, Ware RS', titre: 'The effectiveness of non-surgical interventions for common plantar digital compressive neuropathy (Morton\'s neuroma): a systematic review and meta-analysis', revue: 'Journal of Foot and Ankle Research', annee: '2019', type: 'revue systématique', verif: false },
    { auteurs: 'Bignotti B, Signori A, Sormani MP, Molfetta L, Martinoli C, Tagliafico A', titre: 'Ultrasound versus magnetic resonance imaging for Morton neuroma: systematic review and meta-analysis', revue: 'European Radiology', annee: '2015', type: 'revue systématique', verif: false },
    { auteurs: 'Hughes RJ, Ali K, Jones H, Kendall S, Connell DA', titre: 'Treatment of Morton\'s neuroma with alcohol injection under sonographic guidance: follow-up of 101 cases', revue: 'American Journal of Roentgenology', annee: '2007', type: 'série', verif: false },
    { auteurs: 'Gurdezi S, White T, Ramesh P', titre: 'Alcohol injection for Morton\'s neuroma: a five-year follow-up', revue: 'Foot & Ankle International', annee: '2013', type: 'série (suivi long)', verif: false, note: 'Résultats à long terme décevants — à opposer aux séries à court terme.' },
    { auteurs: 'Dockery GL', titre: 'The treatment of intermetatarsal neuromas with 4% alcohol sclerosing injections', revue: 'Journal of Foot and Ankle Surgery', annee: '1999', type: 'série', verif: false },
    { auteurs: 'Chuter GS, Chua YP, Connell DA, Blackney MC', titre: 'Ultrasound-guided radiofrequency ablation in the management of interdigital (Morton\'s) neuroma', revue: 'Skeletal Radiology', annee: '2013', type: 'série', verif: false },
    { auteurs: 'Valisena S, Petri GJ, Ferrero A', titre: 'Treatment of Morton\'s neuroma: a systematic review', revue: 'Foot and Ankle Surgery', annee: '2018', type: 'revue systématique', verif: false },
    { auteurs: 'Mulder JD', titre: 'The causative mechanism in Morton\'s metatarsalgia', revue: 'Journal of Bone and Joint Surgery (Br)', annee: '1951', type: 'historique', verif: false, note: 'Description originale du signe qui porte son nom.' },
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Référence reprise telle quelle de la fiche nerf-suprascapulaire.js, dont le DOI avait été vérifié lors de sa rédaction.' },
  ],
  videos: [],

  scenes: [
    {
      id: 'morton-sono', section: 'sonoanatomie', titre: 'Espace intermétatarsien, coupe coronale dorsale — les deux étages',
      legende: 'Entre deux têtes métatarsiennes et leurs cônes d\'ombre : la bourse intermétatarsienne est DORSALE au ligament transverse profond, le névrome est PLANTAIRE. Le névrome est une masse ovalaire hypoéchogène de plus de 5 mm, avasculaire, qui se luxe en plantaire avec ressaut à la compression transversale (signe de Mulder).',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial (M2)', right: 'Latéral (M4)' }).probeInfo({ plan: 'Coronal, dos de l\'avant-pied', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.tendon({ x: 110, y: 92, rx: 22, ry: 9 });
        S.tendon({ x: 320, y: 90, rx: 22, ry: 9 });
        S.tendon({ x: 530, y: 92, rx: 22, ry: 9 });
        S.bone({ path: 'M22 216 Q110 168 198 214', label: 'M2', at: [110, 152] });
        S.bone({ path: 'M234 214 Q320 166 408 214', label: 'M3', at: [320, 150] });
        S.bone({ path: 'M444 216 Q530 168 618 216', label: 'M4', at: [530, 152] });
        S.fluid({ x: 426, y: 202, rx: 22, ry: 12 });
        S.ligament({ path: 'M300 236 L556 236 L556 244 L300 244 Z' });
        S.nerve({ x: 426, y: 292, rx: 26, ry: 30 });
        S.label({ x: 592, y: 202, text: 'Bourse', cls: 'lbl-fluid', small: true, anchor: 'end', lead: [450, 202] });
        S.label({ x: 168, y: 250, text: 'Lig. transverse profond', cls: 'lbl-lig', small: true, lead: [302, 240] });
        S.label({ x: 176, y: 316, text: 'Névrome\n(> 5 mm, avasculaire)', cls: 'lbl-nerve', small: true, lead: [398, 294] });
        S.label({ x: 556, y: 316, text: 'Étage plantaire', cls: 'lbl-fat', small: true, anchor: 'end' });
        S.label({ x: 556, y: 344, text: '↓ coussinet graisseux', cls: 'lbl-fat', small: true, anchor: 'end' });
      },
    },
    {
      id: 'morton-injection', section: 'technique', titre: 'Voie dorsale — aiguille dans l\'espace, diffusion péri-lésionnelle',
      legende: 'L\'aiguille descend dans l\'espace intermétatarsien en rasant la tête, franchit le plan du ligament transverse et s\'arrête AU CONTACT du névrome. On injecte autour, jamais dedans : une douleur en éclair ou une résistance franche signe une position intra-neurale. Critère de fin : nappe anéchogène cernant la masse sur au moins la moitié de sa circonférence.',
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Médial (M3)', right: 'Latéral (M4)' }).probeInfo({ plan: 'Coronal, dos de l\'avant-pied', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.bone({ path: 'M234 214 Q320 166 408 214', label: 'M3', at: [318, 150] });
        S.bone({ path: 'M444 216 Q530 168 618 216', label: 'M4', at: [532, 152] });
        S.fluid({ x: 414, y: 196, rx: 18, ry: 10 });
        S.ligament({ path: 'M310 236 L546 236 L546 244 L310 244 Z' });
        S.nerve({ x: 426, y: 292, rx: 26, ry: 30 });
        S.label({ x: 150, y: 250, text: 'Lig. transverse', cls: 'lbl-lig', small: true, lead: [312, 240] });
        S.label({ x: 152, y: 300, text: 'Névrome', cls: 'lbl-nerve', small: true, lead: [398, 292] });
        S.label({ x: 592, y: 200, text: 'Bourse', cls: 'lbl-fluid', small: true, anchor: 'end', lead: [432, 196] });
        S.target({ x: 426, y: 262, r: 15 });
        S.needle({ from: [470, 68], to: [428, 256], label: '25–27 G, voie dorsale' });
        S.spread({ x: 426, y: 288, rx: 48, ry: 36, label: '1,5–3 mL' });
      },
    },
  ],

  checklist: [
    'Espace compté depuis le 1ᵉʳ rayon et tracé dans le dossier (erreur d\'espace = échec garanti)',
    'Mulder échographique refait juste avant la désinfection, douleur reconnue par le patient',
    'Étage décidé : bourse (dorsale au ligament) ou névrome (plantaire) — ou les deux',
    'Espaces interdigitaux inspectés : pas de mycose macérée ni de plaie',
    'Nombre de corticoïdes déjà reçus dans cet espace vérifié — maximum 2 à 3, espacés de 3 mois',
    'Patient venu avec une chaussure large ; orthèse à appui rétro-capital prescrite ou vérifiée',
    'Si alcool ou RF : bloc test préalable positif, hypoesthésie interdigitale définitive expliquée et tracée',
  ],
});
