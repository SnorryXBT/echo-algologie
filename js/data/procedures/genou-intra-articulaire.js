/* Fiche : genou — infiltration intra-articulaire échoguidée, ponction, kyste de Baker.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références non revérifiées → verif:false. */
ECHO.register({
  id: 'genou-intra-articulaire',
  titre: `Genou — infiltration intra-articulaire échoguidée et kyste de Baker`,
  titreCourt: `Genou intra-articulaire`,
  en: `Ultrasound-guided intra-articular knee injection and aspiration — lateral suprapatellar and parapatellar approaches; popliteal (Baker) cyst aspiration and injection`,
  region: 'membre-inf',
  types: ['infiltration', 'interventionnel'],
  niveau: 1,
  grade: `Forte pour la précision de l'échoguidage · modérée et brève pour le corticoïde · incertaine pour l'acide hyaluronique et le PRP`,
  maj: '2026-09',
  motsCles: ['gonarthrose', 'genou', 'épanchement', 'récessus supra-patellaire', 'cul-de-sac quadricipital', 'chondrocalcinose', 'viscosupplémentation', 'acide hyaluronique', 'PRP', 'kyste poplité', 'Baker', 'arthrocentèse', 'triamcinolone'],
  resume: `L'infiltration intra-articulaire du genou est le geste le plus courant de l'HDJ douleur, et celui où l'échoguidage change le plus de choses : il porte la précision de 70–80 % à près de 100 %, il permet de ponctionner un épanchement avant d'injecter, et il évite d'infiltrer une bourse ou la graisse de Hoffa en croyant être dans l'articulation. La voie de référence est la voie supra-patellaire latérale, dans le récessus quadricipital, genou en flexion de 20–30° ; la voie para-patellaire latérale sert de secours sur genou raide. La difficulté n'est pas technique, elle est décisionnelle : quel injectat, à quelle fréquence, et quand s'arrêter. Le corticoïde soulage 4 à 8 semaines et pas au-delà ; répété, il expose à une perte de volume cartilagineux (McAlindon 2017). L'acide hyaluronique et le PRP sont l'objet de recommandations discordantes. La ponction-infiltration échoguidée d'un kyste de Baker est traitée ici, avec son seul vrai piège : l'artère poplitée et le nerf tibial, latéraux au kyste.`,

  flash: {
    position: 'dorsal', positionNote: `genou en flexion de 20–30° sur un coussin poplité (met le récessus supra-patellaire sous tension et ouvre l'espace) ; quadriceps relâché`,
    sonde: 'lineaire', sondeNote: `8–14 MHz, profondeur 3–5 cm ; convexe 3–5 MHz si IMC élevé ou genou très œdématié`,
    approche: 'in-plane', approcheNote: `latéro-médiale, sonde transversale 2–4 cm au-dessus du bord supérieur de la patella, sur le récessus supra-patellaire`,
    aiguille: `21–22 G, 40–50 mm pour l'injection ; 18–20 G, 50 mm si ponction d'un épanchement épais ou hémarthrose`,
    cible: `Récessus supra-patellaire, entre graisse supra-patellaire et graisse préfémorale ; critère de fin = décollement anéchogène du récessus, injectat qui flue sans résistance`,
    injectat: `4–8 mL : corticoïde (triamcinolone hexacétonide 20–40 mg ou acétonide 40 mg, ou méthylprednisolone 40–80 mg) + lidocaïne 1 % ; ou acide hyaluronique 2 mL ; ou PRP 3–6 mL`,
    duree: `5–10 min · 10–15 min avec ponction évacuatrice`,
  },

  indications: [
    `**Gonarthrose douloureuse** en poussée, après échec des mesures conservatrices (exercice, perte de poids, antalgiques) : corticoïde pour la poussée inflammatoire avec épanchement, acide hyaluronique ou PRP en dehors de la poussée (voir Injectat pour l'état de la preuve).`,
    `**Épanchement à ponctionner** : gonflement mécanique gênant, doute diagnostique (analyse cytologique, cristaux, culture), hémarthrose post-traumatique.`,
    `**Arthrite microcristalline** : chondrocalcinose (dépôts de pyrophosphate de calcium, souvent visibles en écho dans le fibrocartilage méniscal et le cartilage hyalin), goutte — ponction diagnostique puis infiltration.`,
    `**Arthrite inflammatoire** mono-articulaire (PR, spondyloarthrite) en complément du traitement de fond.`,
    `**Genou douloureux post-arthroplastie** sans descellement ni infection, comme test avant blocs des nerfs géniculés.`,
    `**Kyste poplité (Baker) symptomatique** : ponction-évacuation ± corticoïde, toujours associée au traitement de l'articulation en amont (le kyste communique avec elle).`,
    `**Bloc test** : disparition franche de la douleur après infiltration intra-articulaire = argument pour une origine articulaire, et donc pour proposer ensuite une dénervation géniculée.`,
  ],
  contreIndications: [
    `**Absolues** : infection cutanée au point de ponction, cellulite, arthrite septique suspectée (la ponction reste indiquée à visée diagnostique, mais **sans corticoïde**), bactériémie, allergie documentée au produit.`,
    `**Relatives** : diabète déséquilibré (pic glycémique de 24–72 h après corticoïde), prothèse de genou en place (asepsie chirurgicale renforcée, corticoïde discuté au cas par cas), chirurgie du genou programmée dans les 3 mois — l'infiltration de corticoïde dans les semaines précédant une arthroplastie est associée à un surrisque infectieux dans plusieurs séries (à confirmer sur la littérature récente).`,
    `**Hémostase** : geste de **faible risque hémorragique** dans la classification ASRA-ESRA 2018 des procédures douleur (site superficiel, compressible, hors névraxe) — pas d'arrêt des antiagrégants, anticoagulants oraux au cas par cas et sans interruption systématique.`,
    `Corticoïde : ne pas dépasser 3 à 4 infiltrations par an sur le même genou, et espacer d'au moins 3 mois — limite fondée sur la tolérance cartilagineuse plus que sur un essai dédié.`,
  ],
  alternatives: `Avant l'infiltration : exercice thérapeutique supervisé et perte de poids, qui restent les seules interventions à effet durable démontré dans la gonarthrose (OARSI 2019, ACR 2020). En cas d'échec de l'infiltration intra-articulaire ou de contre-indication au corticoïde : **blocs des nerfs géniculés puis radiofréquence** (fiche dédiée) — le vrai relais de l'algologue quand l'articulation ne répond plus ; **nerf saphène / branche infrapatellaire** si la douleur est médiale et non arthrosique ; **lavage articulaire** (indication devenue marginale) ; chirurgie prothétique. À l'IFD, l'infiltration intra-articulaire vaut surtout comme geste diagnostique et comme fenêtre thérapeutique permettant la rééducation, pas comme traitement de fond.`,

  anatomie: `Le **récessus supra-patellaire** (cul-de-sac quadricipital) est une extension proximale de la cavité synoviale, située entre le **tendon quadricipital** et la **corticale fémorale**, et séparée en deux par un plan graisseux : la **graisse supra-patellaire** (quadricipitale) au-dessus, la **graisse préfémorale** en dessous. C'est un espace virtuel quand le genou est sec et une poche large quand il y a un épanchement : il communique librement avec le reste de l'articulation, ce qui fait de lui la porte d'entrée la plus sûre et la plus reproductible.

Le muscle **vaste latéral** borde le tendon quadricipital en dehors, le **vaste médial** en dedans. Latéralement, sous le rétinaculum patellaire latéral, on trouve le **récessus latéral**, autre point d'entrée possible.

En arrière, le **creux poplité** contient, de la superficie à la profondeur : le **nerf tibial**, la **veine poplitée**, puis l'**artère poplitée** au contact de la capsule postérieure. Le **kyste de Baker** naît le plus souvent d'une hernie synoviale passant par un collet situé **entre le tendon du semi-membraneux (médial) et le chef médial du gastrocnémien (latéral)** ; il est donc postéro-médial, et le paquet vasculo-nerveux lui est **latéral**.

### Ce qui compte pour le geste
- La **flexion de 20–30°** est le geste préparatoire décisif : elle tend le quadriceps, refoule le liquide dans le récessus et transforme un espace virtuel en cible visible. Genou en extension complète, on ne voit rien.
- Le récessus se juge **entre les deux graisses** : si l'aiguille est dans la graisse, l'injectat ne flue pas et fait une image en « nid d'abeille » ; s'il est dans le récessus, il décolle une lame franchement anéchogène.
- **Cartilage trochléen** : bande anéchogène régulière de 1,5–2,5 mm sur la corticale, mieux vue en coupe transversale genou fléchi. Ne pas la prendre pour du liquide (elle est adhérente à l'os et ne se déplace pas à la compression).
- **Épanchement vs synovite** : le liquide est anéchogène, compressible, déplaçable et **sans signal Doppler** ; la synovite est hypoéchogène, non compressible, souvent hypervascularisée. On ponctionne le premier, on n'aspire rien du second.
- Un **kyste de Baker** est identifié par son **collet** entre semi-membraneux et gastrocnémien médial : sans collet visible, ce n'est pas un kyste de Baker, et un anévrisme poplité ou une adénopathie doivent être éliminés au Doppler avant toute ponction.`,

  installation: {
    patient: `**Décubitus dorsal**, genou fléchi à **20–30°** sur un coussin ou un billot poplité, quadriceps relâché (le patient ne doit pas verrouiller son genou : lui demander de « laisser tomber la jambe »). Membre en rotation neutre, patella au zénith.

Pour le **kyste de Baker** : **décubitus ventral**, cheville sur un coussin, genou en extension complète ou légère flexion — le kyste est ainsi sous tension et le paquet vasculo-nerveux détendu.

Marquer au feutre le bord supérieur et le bord latéral de la patella avant la désinfection.`,
    operateur: `Opérateur du **côté latéral** du genou à traiter, écran en face de lui, de l'autre côté de la table, dans l'axe du regard. Sonde tenue en main non dominante, hypothénar en appui sur la cuisse. Ponction **de latéral en médial**, dans le plan : le trajet est court, entièrement visible, et s'éloigne du nerf saphène et du paquet fémoral, tous deux médiaux.

Pour le kyste poplité : opérateur du côté médial, ponction **de médial en latéral**. Le point d'entrée et tout le trajet restent alors dans la moitié médiale et superficielle du creux poplité, à distance du paquet vasculo-nerveux qui est latéral et profond ; la pointe s'arrête dans le kyste et ne franchit jamais son bord latéral. L'abord latéro-médial, qui ferait entrer l'aiguille au voisinage immédiat de l'artère poplitée, est proscrit.`,
    sonde: `- Linéaire 8–14 MHz, preset MSK, **profondeur 3–5 cm**, focale au niveau du récessus (1,5–3 cm).
- **Doppler couleur** systématique avant toute ponction du creux poplité, et utile en avant pour repérer une synovite hypervascularisée (qui n'est pas ponctionnable).
- Gain réglé pour que le liquide soit franchement noir : un gain trop élevé fait « disparaître » un petit épanchement.
- Compression douce alternée pour distinguer liquide (se déplace, se vide) et synovite (ne bouge pas) ; c'est un test dynamique, pas une image fixe.
- Aiguille écho-visible ou angle d'insonation < 30° ; le trajet étant très superficiel, l'aiguille est facile à garder dans le plan.`,
  },

  reperage: [
    { titre: `Repérer la patella en coupe sagittale`, texte: `Sonde **sagittale sur la patella** : ligne osseuse convexe très hyperéchogène avec ombre. Glisser en proximal : le **tendon quadricipital** apparaît, fibrillaire, s'insérant sur le pôle supérieur.` },
    { titre: `Ouvrir le récessus supra-patellaire`, texte: `Continuer 2–4 cm en proximal : entre le tendon quadricipital et la corticale fémorale apparaissent les deux plans graisseux (**supra-patellaire** au-dessus, **préfémorale** en dessous) et, entre eux, le **récessus**. Fléchir le genou à 20–30° si ce n'est pas déjà fait : un épanchement même minime remonte et remplit la poche.` },
    { titre: `Basculer en coupe transversale`, texte: `Tourner la sonde de 90° au même niveau : le tendon quadricipital devient une bande transversale ; le récessus est la lame située juste en dessous, s'étendant en dehors sous le **vaste latéral**. C'est la coupe de ponction.` },
    { titre: `Quantifier et qualifier l'épanchement`, texte: `Mesurer l'épaisseur maximale de la lame liquidienne en coupe sagittale, genou fléchi. Comprimer : le liquide se déplace, la synovite non. Doppler : un signal intra-synovial signe une synovite active — cela oriente vers le corticoïde et **contre** la viscosupplémentation immédiate.` },
    { titre: `Balayage complémentaire`, texte: `Avant d'injecter, balayer le cartilage trochléen genou fléchi à 90° (dépistage d'un liseré de chondrocalcinose, d'un double contour goutteux), les ménisques et le creux poplité (kyste). Ce balayage de 2 min change parfois l'injectat prévu.` },
    { titre: `Si le récessus reste virtuel`, texte: `Genou sec, sujet mince : la poche peut être invisible. Deux solutions — (1) demander une contraction douce du quadriceps puis un relâchement, qui fait « respirer » le récessus ; (2) passer par la **voie para-patellaire latérale** : sonde transversale sur le bord latéral de la patella, aiguille dirigée sous le rétinaculum latéral vers l'espace fémoro-patellaire. Dans tous les cas, hydrolocaliser 0,5 mL : si le liquide se répand en lame, on est dans l'articulation.` },
  ],

  sonoanatomie: [
    { structure: `Tendon quadricipital`, aspect: `Bande fibrillaire hyperéchogène épaisse (5–8 mm), multilaminaire`, repere: `Superficiel, du bord supérieur de la patella vers le haut` },
    { structure: `Graisse supra-patellaire`, aspect: `Triangle hypoéchogène finement échogène, non compressible`, repere: `Juste sous le tendon quadricipital` },
    { structure: `Récessus supra-patellaire`, aspect: `Lame anéchogène **compressible et déplaçable**, sans Doppler`, repere: `Entre les deux graisses — la cible` },
    { structure: `Graisse préfémorale`, aspect: `Coussinet hypoéchogène adhérent à la métaphyse fémorale`, repere: `Limite profonde du récessus` },
    { structure: `Corticale fémorale`, aspect: `Ligne hyperéchogène franche avec cône d'ombre`, repere: `Ne jamais dépasser` },
    { structure: `Cartilage trochléen`, aspect: `Bande anéchogène homogène de 1,5–2,5 mm, à bords nets, **non déplaçable**`, repere: `Sur la corticale, genou fléchi ; à ne pas confondre avec du liquide` },
    { structure: `Synovite`, aspect: `Épaississement hypoéchogène non compressible, souvent hypervascularisé en Doppler`, repere: `Ne s'aspire pas ; oriente vers le corticoïde` },
    { structure: `Kyste de Baker (creux poplité)`, aspect: `Poche anéchogène à contenu parfois hétérogène, avec **collet** en « virgule »`, repere: `Collet entre semi-membraneux (médial) et gastrocnémien médial (latéral)` },
  ],

  technique: [
    { titre: `Préparation`, texte: `Checklist en fin de fiche. Désinfection large en deux temps de la face antéro-latérale de la cuisse et du genou. Gel stérile ou housse de sonde ; gants stériles. Seringues **étiquetées** : une pour l'anesthésie cutanée, une pour l'injectat, une seringue de 20–60 mL montée sur prolongateur si ponction évacuatrice. Le prolongateur est ce qui permet de ponctionner et d'injecter sans bouger l'aiguille d'un millimètre.` },
    { titre: `Anesthésie cutanée`, texte: `1–2 mL de lidocaïne 1 % en sous-cutané au point d'entrée latéral, 1–2 cm en dehors du bord de la sonde. Facultative avec une 22 G, recommandée avec une 18–20 G ou si l'on prévoit une aspiration prolongée.` },
    { titre: `Ponction in-plane, de latéral en médial`, texte: `Sonde transversale sur le récessus. Entrer à plat (angle 15–25°) au bord latéral de la sonde, visualiser l'aiguille **sur toute sa longueur**, franchir le vaste latéral / rétinaculum et amener la pointe **sous la graisse supra-patellaire, au-dessus de la graisse préfémorale**. Ne jamais avancer une aiguille qu'on ne voit pas : reculer, réaligner la sonde, recommencer.` },
    { titre: `Ponction évacuatrice si épanchement`, texte: `Aiguille 18–20 G, aspiration douce ; comprimer manuellement le récessus latéral et les compartiments médiaux avec la main libre pour drainer complètement (ce « traire » manuel double souvent le volume recueilli). Envoyer en cytologie / cristaux / bactériologie au moindre doute. **Ne jamais injecter de corticoïde avant d'avoir regardé l'aspect du liquide** : un liquide trouble ou purulent arrête le geste.` },
    { titre: `Hydrolocalisation et injection`, texte: `Sans bouger l'aiguille, changer de seringue sur le prolongateur. Injecter **0,5 mL** en test : l'injectat doit fluer **sans résistance** et décoller une lame anéchogène qui s'étend le long du récessus. Une résistance, une image en nid d'abeille ou un gonflement localisé = pointe intra-graisseuse ou intra-musculaire : reculer ou avancer de 1–2 mm. Puis injecter le reste en une fois, en surveillant la diffusion.` },
    { titre: `Critère de fin`, texte: `Distension anéchogène franche du récessus, diffusion visible en médial et en latéral, absence de collection sous-cutanée ou intra-graisseuse. Retrait, compression brève, pansement sec.` },
    { titre: `Après le geste`, texte: `Mobilisation passive douce du genou en flexion-extension × 10 pour répartir l'injectat (utile surtout pour l'acide hyaluronique). Repos relatif 24–48 h, pas de sport ni de marche prolongée 48 h. Prévenir de la **poussée douloureuse post-injection** (12–48 h, notamment avec les corticoïdes microcristallins et le PRP) et donner une conduite à tenir écrite : glace, antalgique de palier 1, et consultation si fièvre, douleur croissante au-delà de 72 h ou rougeur — c'est le tableau d'arthrite septique.` },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| Poussée douloureuse avec épanchement / synovite | **Triamcinolone hexacétonide** (Hexatrione® — **strictement intra-articulaire**, la forme la plus retard) 20–40 mg, ou **triamcinolone acétonide** (Kenacort retard®) 40 mg, ou **méthylprednisolone** (Dépo-Médrol®) 40–80 mg, ou **bétaméthasone** (Diprostène®) 1 mL — associés à 2–4 mL de lidocaïne 1 % | 4–8 mL | Effet attendu **4 à 8 semaines**, pas au-delà (Cochrane, Jüni 2015). Max 3–4 / an, espacées ≥ 3 mois. Le grand volume articulaire du genou autorise un corticoïde **particulaire** : pas d'artère terminale ici |
| Gonarthrose sans épanchement, hors poussée | **Acide hyaluronique** : 1 injection de haut poids moléculaire (2 mL) ou schéma de 3 injections hebdomadaires (2 mL) | 2 mL | Recommandations **discordantes** : l'ESCEO (Bruyère 2019) le positionne en traitement de fond, l'ACR 2020 recommande **contre**, l'OARSI 2019 le juge incertain. **Non remboursé en France** depuis fin 2017 (dispositif médical) — l'annoncer avant le geste (montant à confirmer selon la référence) |
| Gonarthrose, patient jeune, arthrose peu évoluée | **PRP** 3–6 mL, 1 à 3 injections espacées de 1 à 3 semaines | 3–6 mL | Méta-analyses favorables vs placebo sur la douleur à 6–12 mois, mais essais hétérogènes et essais rigoureux négatifs (RESTORE, Bennell 2021). Hors nomenclature, coût à la charge du patient. Ne pas mélanger avec un AL (effet délétère sur les plaquettes, à confirmer) |
| Ponction diagnostique / évacuatrice | Aucun produit ; aiguille 18–20 G | — | Cytologie, recherche de cristaux en lumière polarisée, bactériologie |
| Kyste de Baker | Vidange puis **bétaméthasone 1 mL** ou méthylprednisolone 40 mg dilué | 1–2 mL après vidange | Toujours traiter l'articulation en amont : un kyste réapparaît si la synovite persiste |

**Anesthésiques locaux et cartilage.** La chondrotoxicité in vitro et in vivo des AL est démontrée et dose-dépendante, la **bupivacaïne** étant la plus toxique, la **ropivacaïne** la moins (Chu 2010). Conséquences pratiques : pas de bupivacaïne intra-articulaire, pas de perfusion continue intra-articulaire, et un volume limité de lidocaïne 1 % (2–4 mL) comme simple diluant. Chez un patient jeune au cartilage conservé, on peut se passer d'AL.

**Doses maximales à garder en tête** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Un geste isolé au genou n'en approche jamais ; c'est le cumul d'une séance multi-sites d'HDJ qui compte.`,

  variantes: [
    { titre: `Voie para-patellaire latérale (genou sec ou raide)`, texte: `Sonde transversale sur le **bord latéral de la patella**, à mi-hauteur. On identifie le bord osseux patellaire, le rétinaculum latéral et le condyle fémoral latéral. Aiguille in-plane de latéral en médial, dirigée sous le rétinaculum, vers l'espace fémoro-patellaire latéral. Utile quand le récessus supra-patellaire est virtuel, sur genou en flexum, ou après arthroplastie. Contrôle par hydrolocalisation impératif : l'espace est étroit et la pointe se retrouve facilement dans le rétinaculum.` },
    { titre: `Ponction d'un épanchement abondant`, texte: `Aiguille **18 G** (20 G au minimum) montée sur prolongateur et robinet trois voies : on aspire, on ferme, on change de seringue, on aspire à nouveau, sans jamais mobiliser la pointe. Compression manuelle des culs-de-sac médial et latéral pendant l'aspiration. Une hémarthrose franche impose de chercher la cause (fracture ostéochondrale, rupture ligamentaire, coagulopathie) avant tout corticoïde ; un liquide lactescent ou trouble impose la bactériologie et l'abstention.` },
    { titre: `Kyste poplité de Baker — ponction-infiltration échoguidée`, texte: `Patient en **décubitus ventral**. Sonde **transversale** dans le creux poplité, côté médial. Identifier successivement : le tendon du **semi-membraneux** (médial), le chef médial du **gastrocnémien** (latéral), et entre les deux le **collet** en virgule qui signe le kyste. **Doppler couleur obligatoire** : l'artère poplitée, la veine et le nerf tibial sont **latéraux** — un anévrisme poplité ou une thrombose veineuse se présentent comme une masse anéchogène et ne se ponctionnent pas.

Aiguille 18–21 G in-plane, **de médial en latéral**, entrant dans le corps du kyste par sa portion la plus superficielle et la plus médiale. Le trajet reste ainsi entièrement médial et superficiel ; la pointe est visible en permanence et **ne dépasse jamais le bord latéral du kyste**, seule règle qui protège de l'artère poplitée. Vidange complète (contenu souvent gélatineux : privilégier une 18 G, parfois fragmenter le contenu par mouvements doux de la pointe), puis injection de 1–2 mL de corticoïde. Compression et bandage 24 h.

Le taux de récidive est élevé si la pathologie intra-articulaire sous-jacente (arthrose, lésion méniscale, synovite) n'est pas traitée : le geste articulaire dans le même temps est la règle. Les données publiées sont des **séries prospectives**, pas des essais randomisés (Di Sante 2010) — annoncer une efficacité probable mais non démontrée.` },
    { titre: `Ce qui n'a pas sa place ici`, texte: `Pas de radiofréquence ni de cryoneurolyse **intra-articulaire**. Quand l'articulation ne répond plus, on change de cible et on passe aux **nerfs géniculés** (fiche dédiée) : c'est une dénervation sensitive péri-articulaire, pas un geste intra-articulaire. De même, l'hydrodissection n'a pas d'objet dans une cavité articulaire.` },
  ],

  pearls: [
    `La flexion à 20–30° sur billot est plus utile que n'importe quel réglage de la machine : elle crée la cible.`,
    `Toujours monter l'aiguille sur un **prolongateur** : on ponctionne, on aspire, on change de seringue et on injecte sans jamais bouger la pointe.`,
    `Regarder le liquide avant d'injecter le corticoïde. Un liquide trouble arrête tout et fait basculer vers la bactériologie.`,
    `Le test des 0,5 mL tranche : ça flue et ça décolle en lame → on est dedans ; ça résiste et ça fait du « nid d'abeille » → on est dans la graisse.`,
    `Balayer 2 minutes avant d'injecter (cartilage, ménisques, creux poplité) : c'est ce qui fait découvrir une chondrocalcinose ou un kyste que personne n'avait vu.`,
    `Devant un kyste poplité, chercher le **collet** : pas de collet, pas de diagnostic — et le Doppler avant l'aiguille, systématiquement.`,
  ],
  pieges: [
    `Injecter genou en extension complète : le récessus est virtuel, la pointe finit dans la graisse supra-patellaire et le geste est perdu.`,
    `Prendre le **cartilage trochléen** pour un épanchement : il est adhérent à l'os, régulier, non compressible et ne se déplace pas.`,
    `Aspirer une synovite : rien ne vient, on insiste, on traumatise. Le Doppler et le test de compression évitent l'erreur.`,
    `Ponctionner un « kyste » du creux poplité sans Doppler : anévrisme poplité et adénopathie sont les deux pièges classiques.`,
    `Enchaîner les infiltrations de corticoïde parce que « ça marche à chaque fois » : l'effet dure 4–8 semaines et la répétition coûte du cartilage (McAlindon 2017).`,
    `Ne pas prévenir de la poussée douloureuse des 12–48 h : le patient interprète une réaction attendue comme une infection, ou l'inverse.`,
  ],
  complications: [
    `**Arthrite septique** : 1 cas pour ~3 000 à 50 000 injections selon les séries (ordre de grandeur, à confirmer). Tableau à 24–72 h : douleur croissante, fièvre, épanchement chaud. Consigne écrite systématique au patient. Traitement : ponction, bactériologie, avis chirurgical — jamais d'antibiotique à l'aveugle avant prélèvement.`,
    `**Poussée douloureuse post-injection** (12–48 h), fréquente avec les corticoïdes microcristallins et le PRP : glace, palier 1, réassurance.`,
    `**Flush facial** et bouffées vasomotrices (24–48 h), **hyperglycémie** de 24 à 72 h chez le diabétique (contrôle capillaire et adaptation du traitement), insomnie, poussée hypertensive.`,
    `**Atrophie cutanée et dépigmentation** sur le trajet si reflux sous-cutané de corticoïde : retirer l'aiguille en aspirant, ou rincer le trajet avec 0,5 mL de sérum.`,
    `**Dégradation cartilagineuse** avec les corticoïdes répétés : perte de volume cartilagineux significative à 2 ans dans l'essai de McAlindon 2017 (triamcinolone trimestrielle vs sérum), sans bénéfice antalgique. C'est l'argument qui doit limiter la répétition.`,
    `**Progression accélérée de l'arthrose / ostéonécrose / fracture sous-chondrale** : signal rapporté sur séries d'imagerie (Kompel 2019), non démontré causalement mais suffisant pour ne pas banaliser le geste chez le sujet jeune.`,
    `**Kyste de Baker** : hématome, ponction vasculaire, lésion du nerf tibial — évitables par l'abord médial, la pointe gardée en permanence à l'écran et en dedans du bord latéral du kyste, et le Doppler préalable. Récidive fréquente.`,
  ],
  securite: [
    `Asepsie chirurgicale : le seul risque véritablement grave du geste est infectieux. Détersion-désinfection en deux temps, gel stérile ou housse, gants stériles, pas de repalpation après désinfection.`,
    `**Prothèse de genou en place** : bénéfice/risque à discuter, asepsie renforcée, et information explicite du patient sur le risque d'infection de prothèse.`,
    `Risque hémorragique **faible** (ASRA-ESRA 2018) : pas d'arrêt des antiagrégants ; anticoagulants au cas par cas. Une hémarthrose sous AVK/AOD reste possible : privilégier une aiguille fine et une compression prolongée.`,
    `**Doppler couleur obligatoire avant toute ponction du creux poplité.** L'artère poplitée est à quelques millimètres, et la ponction se fait toujours en s'éloignant d'elle.`,
    `Corticoïdes : glycémie capillaire le jour du geste et les 48 h suivantes chez le diabétique ; tracer la dose cumulée annuelle par site dans le dossier.`,
    `Ne jamais injecter contre résistance : c'est le signe d'une pointe intra-tissulaire, jamais d'une articulation « pleine ».`,
  ],

  suivi: `- **J0** : EN avant / 20–30 min après (valeur diagnostique de l'anesthésique : un soulagement franc plaide pour une origine intra-articulaire et légitime une dénervation géniculée ultérieure), volume aspiré et aspect du liquide notés, résultats de laboratoire tracés.
- **J15–J30** : EN, KOOS ou WOMAC (ou une version courte praticable en HDJ), périmètre de marche, consommation d'antalgiques, reprise de la rééducation. C'est l'évaluation qui décide de la suite.
- **3 mois** : décision. Réponse > 8 semaines → on peut répéter (max 3–4/an, ≥ 3 mois d'écart). Réponse franche mais < 4 semaines et répétée → basculer vers les **nerfs géniculés** plutôt que de multiplier les corticoïdes. Réponse nulle → réinterroger le diagnostic (douleur d'origine non articulaire : saphène/IPBSN, patte d'oie, douleur projetée de hanche ou du rachis, sensibilisation centrale).
- **Toujours** coupler à un programme d'exercice supervisé : l'infiltration ouvre une fenêtre, la rééducation la remplit. Une infiltration sans rééducation derrière est une occasion perdue.
- Tracer systématiquement : produit, dose, volume, voie, aspect du liquide, dose cumulée annuelle — c'est aussi ce qui tient un contrôle.`,

  evidence: `- **Précision de l'échoguidage** : convergence forte des travaux de précision — l'injection à l'aveugle du genou est correcte dans environ 70–80 % des cas, l'échoguidage dépasse 95 %. Sibbitt 2009 (essai comparatif) rapporte en outre moins de douleur procédurale, une meilleure réponse antalgique et un rendement d'aspiration supérieur ; la revue de Berkoff 2012 conclut dans le même sens, avec un argument médico-économique (moins d'injections inefficaces répétées). Preuve **forte** sur la précision, **modérée** sur le bénéfice clinique.
- **Corticoïde intra-articulaire** : revue Cochrane (Jüni 2015) — bénéfice réel mais **de faible ampleur et de courte durée**, l'effet ne se distingue plus du placebo au-delà de 4 à 8 semaines. Preuve **forte** pour le court terme, **forte contre** un effet durable.
- **Corticoïde répété et cartilage** : ECR de **McAlindon 2017 (JAMA)** — triamcinolone intra-articulaire trimestrielle pendant 2 ans vs sérum physiologique : **perte de volume cartilagineux significativement supérieure** sous corticoïde, **sans bénéfice antalgique** à 2 ans. C'est la donnée qui doit gouverner la fréquence de répétition.
- **Acide hyaluronique** : recommandations **discordantes**, ce qui est en soi l'information utile — ESCEO (Bruyère 2019) favorable en traitement de fond, **ACR 2020 recommande contre**, OARSI 2019 « incertain » selon le phénotype. En France, déremboursement des dispositifs d'AH intra-articulaires depuis fin 2017. Preuve **faible à incertaine** ; à proposer comme option informée et payante, pas comme standard.
- **PRP** : méta-analyses globalement favorables vs placebo et vs AH sur la douleur à 6–12 mois (Dai 2017 et méta-analyses ultérieures), mais hétérogénéité majeure des préparations (leucocyte-rich vs poor, nombre d'injections) et essais méthodologiquement solides négatifs — l'essai **RESTORE (Bennell 2021, JAMA)** ne montre **aucune supériorité** sur la douleur ni sur le volume cartilagineux à 12 mois. Preuve **incertaine** ; ne pas le vendre comme un traitement de fond.
- **Anesthésiques locaux** : chondrotoxicité dose- et molécule-dépendante démontrée expérimentalement (Chu 2010) — argument suffisant pour bannir la bupivacaïne intra-articulaire et limiter le volume d'AL.
- **Kyste de Baker** : uniquement des **séries prospectives** (Di Sante 2010 et suivantes), pas d'ECR de la ponction-infiltration échoguidée. Preuve **faible**, geste pourtant utile et sûr sous échographie.
- **Trou de la littérature à assumer** : aucun essai n'a comparé de front les stratégies qui nous intéressent en HDJ douleur — infiltration intra-articulaire répétée *vs* bloc/radiofréquence des nerfs géniculés, sur le patient non opérable. Le choix se fait sur le raisonnement, pas sur la preuve.`,

  references: [
    { auteurs: `McAlindon TE, LaValley MP, Harvey WF, et al.`, titre: `Effect of intra-articular triamcinolone vs saline on knee cartilage volume and pain in patients with knee osteoarthritis: a randomized clinical trial`, revue: `JAMA`, annee: '2017', url: 'https://jamanetwork.com/journals/jama/fullarticle/2626573', type: 'ECR', verif: true, note: `L'essai clé sur la répétition des corticoïdes : perte cartilagineuse, pas de gain antalgique à 2 ans.` },
    { auteurs: `Jüni P, Hari R, Rutjes AWS, et al.`, titre: `Intra-articular corticosteroid for knee osteoarthritis`, revue: `Cochrane Database of Systematic Reviews`, annee: '2015', doi: '10.1002/14651858.CD005328.pub3', type: 'revue systématique', verif: true },
    { auteurs: `Sibbitt WL Jr, Peisajovich A, Michael AA, et al.`, titre: `Does sonographic needle guidance affect the clinical outcome of intraarticular injections?`, revue: `The Journal of Rheumatology`, annee: '2009', pmid: '19648304', type: 'ECR', verif: true },
    { auteurs: `Berkoff DJ, Miller LE, Block JE`, titre: `Clinical utility of ultrasound guidance for intra-articular knee injections: a review`, revue: `Clinical Interventions in Aging`, annee: '2012', doi: '10.2147/CIA.S29265', type: 'revue', verif: true },
    { auteurs: `Bannuru RR, Osani MC, Vaysbrot EE, et al.`, titre: `OARSI guidelines for the non-surgical management of knee, hip, and polyarticular osteoarthritis`, revue: `Osteoarthritis and Cartilage`, annee: '2019', pmid: '31278997', type: 'reco', verif: true },
    { auteurs: `Kolasinski SL, Neogi T, Hochberg MC, et al.`, titre: `2019 American College of Rheumatology/Arthritis Foundation guideline for the management of osteoarthritis of the hand, hip, and knee`, revue: `Arthritis & Rheumatology`, annee: '2020', doi: '10.1002/art.41142', type: 'reco', verif: true, note: `Recommande **contre** l'acide hyaluronique intra-articulaire au genou.` },
    { auteurs: `Bruyère O, Honvo G, Veronese N, et al.`, titre: `An updated algorithm recommendation for the management of knee osteoarthritis from the European Society for Clinical and Economic Aspects of Osteoporosis, Osteoarthritis and Musculoskeletal Diseases (ESCEO)`, revue: `Seminars in Arthritis and Rheumatism`, annee: '2019', doi: '10.1016/j.semarthrit.2019.04.008', type: 'reco', verif: true },
    { auteurs: `Bennell KL, Paterson KL, Metcalf BR, et al.`, titre: `Effect of intra-articular platelet-rich plasma vs placebo injection on pain and medial tibial cartilage volume in patients with knee osteoarthritis: the RESTORE randomized clinical trial`, revue: `JAMA`, annee: '2021', pmid: '34812863', type: 'ECR', verif: true },
    { auteurs: `Dai WL, Zhou AG, Zhang H, Zhang J`, titre: `Efficacy of platelet-rich plasma in the treatment of knee osteoarthritis: a meta-analysis of randomized controlled trials`, revue: `Arthroscopy`, annee: '2017', doi: '10.1016/j.arthro.2016.09.024', type: 'méta-analyse', verif: true },
    { auteurs: `Chu CR, Coyle CH, Chu CT, et al.`, titre: `In vivo effects of single intra-articular injection of 0.5% bupivacaine on articular cartilage`, revue: `The Journal of Bone and Joint Surgery (American volume)`, annee: '2010', type: 'expérimental', verif: true },
    { auteurs: `Kompel AJ, Roemer FW, Murakami AM, et al.`, titre: `Intra-articular corticosteroid injections in the hip and knee: perhaps not as safe as we thought?`, revue: `Radiology`, annee: '2019', doi: '10.1148/radiol.2019190341', type: 'série', verif: true },
    { auteurs: `Di Sante L, Paoloni M, Ioppolo F, Dimaggio M, Di Renzo S, Santilli V`, titre: `Ultrasound-guided aspiration and corticosteroid injection of Baker's cysts in knee osteoarthritis: a prospective observational study`, revue: `American Journal of Physical Medicine & Rehabilitation`, annee: '2010', doi: '10.1097/PHM.0b013e3181fc7da2', type: 'série prospective', verif: true },
    { auteurs: `Narouze S, Benzon HT, Provenzano D, et al.`, titre: `Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018;43(3):225-62', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true },
  ],
  videos: [
    { titre: 'Ultrasound-Guided Knee Injections', source: 'NYSORA', url: 'https://nysora.com/pain-management/ultrasound-guided-knee-injections/', note: 'Page technique NYSORA : abords échoguidés du genou.' },
    { titre: 'Suprapatellar Injection of the Knee - Ultrasound Scanning Technique', source: 'YouTube', url: 'https://www.youtube.com/watch?v=fWLgKRjf69c', note: 'Injection intra-articulaire échoguidée par le récessus supra-patellaire.' },
  ],

  scenes: [
    {
      id: 'genou-sag', section: 'sonoanatomie', titre: `Récessus supra-patellaire, coupe sagittale — vue de repérage`,
      legende: `Genou fléchi à 20–30°. De la superficie à la profondeur : tendon quadricipital, graisse supra-patellaire, **récessus** (lame anéchogène, compressible), graisse préfémorale, corticale fémorale. Le récessus est la cible : c'est le seul espace qui se laisse décoller par l'injectat.`,
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Proximal (cuisse)', right: 'Distal (patella)' }).probeInfo({ plan: 'Sagittal sus-patellaire', type: 'linéaire 8–14 MHz' });
        S.skin({ thickness: 8, fatBelow: 18 });
        S.tendon({ points: [[0, 72], [300, 86], [420, 124], [418, 154], [296, 116], [0, 100]], label: 'Tendon quadricipital', at: [148, 96] });
        S.bone({ path: 'M418 140 Q500 134 556 160 Q600 180 640 196', label: 'Patella', at: [566, 132] });
        S.fat({ path: 'M286 122 Q350 132 412 150 L410 180 Q344 166 288 152 Z', label: 'Graisse supra-patellaire', at: [348, 200], small: true, lead: [346, 168] });
        S.fluid({ path: 'M110 190 Q250 172 396 186 L400 226 Q250 244 108 228 Z', label: 'Récessus supra-patellaire', at: [232, 210] });
        S.fat({ path: 'M100 240 Q250 256 404 240 L406 284 Q250 300 98 284 Z', label: 'Graisse préfémorale', at: [230, 268], small: true });
        S.bone({ path: 'M0 296 Q160 304 320 308 Q420 310 470 320', label: 'Corticale fémorale', at: [140, 340] });
      },
    },
    {
      id: 'genou-tsv', section: 'technique', titre: `Voie supra-patellaire latérale — aiguille in-plane, de latéral en médial`,
      legende: `Coupe transversale sur le récessus, genou fléchi. L'aiguille traverse le vaste latéral et se place **entre les deux graisses**, dans le récessus. Le critère de fin est le décollement anéchogène qui s'étend en médial et en latéral, sans résistance à l'injection.`,
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse sus-patellaire', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.muscle({ path: 'M0 74 L104 84 L106 138 L0 148 Z', label: 'V. médial', at: [48, 112], small: true, opacity: 0.45 });
        S.tendon({ path: 'M106 78 Q320 68 528 78 L532 116 Q320 106 104 118 Z', label: 'Tendon quadricipital', at: [316, 96] });
        S.muscle({ path: 'M530 76 L640 70 L640 132 L534 128 Z', label: 'V. latéral', at: [592, 122], small: true, opacity: 0.45 });
        S.fluid({ path: 'M120 152 Q320 134 516 152 L520 200 Q320 220 116 200 Z', label: 'Récessus', at: [156, 178], small: true });
        S.fat({ path: 'M170 206 Q320 226 470 206 L474 250 Q320 268 166 250 Z', label: 'Graisse préfémorale', at: [318, 236], small: true });
        S.cartilage({ path: 'M64 282 Q190 300 320 304 Q452 300 578 280 L580 292 Q452 312 320 316 Q190 312 60 294 Z', label: 'Cartilage trochléen', lx: 150, ly: 264, anchor: 'end', small: true, lead: [172, 294] });
        S.bone({ path: 'M58 298 Q190 318 320 322 Q452 318 582 296', label: 'Fémur (trochlée)', at: [318, 364] });
        S.target({ x: 402, y: 176, r: 15 });
        S.needle({ from: [640, 92], to: [408, 172], label: '21 G 50 mm, latéro-médiale' });
        S.spread({ x: 300, y: 178, rx: 98, ry: 20, label: '4–8 mL' });
      },
    },
    {
      id: 'genou-baker', section: 'technique', titre: `Kyste poplité de Baker — ponction-infiltration, de médial en latéral`,
      legende: `Décubitus ventral, coupe transversale du creux poplité. Le **collet** passe entre le tendon du semi-membraneux (médial) et le chef médial du gastrocnémien. Le paquet vasculo-nerveux (nerf tibial superficiel, puis veine, puis artère poplitée) est **latéral et profond** : le point d'entrée médial et le trajet superficiel l'évitent, à condition que la pointe reste en dedans du bord latéral du kyste. Doppler obligatoire avant l'aiguille.`,
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Transverse, creux poplité', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.muscle({ path: 'M150 176 Q270 158 366 176 L370 300 Q256 322 148 300 Z', label: 'Gastrocnémien médial', at: [258, 254], opacity: 0.5 });
        S.tendon({ x: 48, y: 196, rx: 28, ry: 16, label: 'Semi-memb.', lx: 48, ly: 238, small: true });
        S.fluid({ path: 'M34 88 Q160 66 286 90 Q318 100 302 132 Q236 148 150 146 Q80 142 36 122 Z', label: 'Kyste poplité', lx: 190, ly: 86 });
        S.fluid({ path: 'M98 140 L152 186 L134 202 L80 154 Z', label: 'Collet', lx: 206, ly: 208, anchor: 'start', small: true, lead: [146, 194] });
        S.nerve({ x: 500, y: 150, r: 14, label: 'N. tibial', lx: 556, ly: 132, anchor: 'start', lead: [513, 146] });
        S.vein({ x: 470, y: 202, rx: 24, ry: 15, label: 'V. poplitée', lx: 590, ly: 206, anchor: 'end', lead: [494, 202] });
        S.artery({ x: 494, y: 250, r: 17, label: 'A. poplitée', lx: 494, ly: 292 });
        S.bone({ path: 'M130 326 Q300 334 430 316 Q530 300 640 306', label: 'Condyles fémoraux', at: [300, 366] });
        S.target({ x: 252, y: 126, r: 15 });
        S.needle({ from: [0, 116], to: [246, 126], label: '18–21 G' });
        S.spread({ x: 196, y: 124, rx: 58, ry: 16, label: '1–2 mL après vidange' });
      },
    },
  ],

  checklist: [
    `Genou fléchi 20–30° sur billot avant de chercher le récessus`,
    `Aspect du liquide inspecté **avant** toute injection de corticoïde ; bactériologie au moindre doute`,
    `Doppler couleur systématique avant toute ponction du creux poplité (anévrisme poplité, TVP)`,
    `Dose cumulée annuelle de corticoïde sur ce genou vérifiée dans le dossier (max 3–4/an, ≥ 3 mois d'écart)`,
    `Consignes écrites remises : poussée attendue 12–48 h ; consulter si fièvre ou douleur croissante au-delà de 72 h`,
  ],
});
