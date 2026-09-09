/* Fiche : syndrome du tunnel tarsien — nerf tibial rétro-malléolaire, nerf de Baxter.
   Rédigée en MODE DÉGRADÉ (budget de recherche web épuisé) : références non revérifiées → verif:false. */
ECHO.register({
  id: 'tunnel-tarsien-nerf-tibial',
  titre: `Tunnel tarsien — nerf tibial rétro-malléolaire et nerf de Baxter`,
  titreCourt: `Tunnel tarsien`,
  en: `Ultrasound-guided tibial nerve block and hydrodissection at the tarsal tunnel (retromalleolar, beneath the flexor retinaculum); medial and inferior calcaneal (Baxter's) nerve; pulsed radiofrequency`,
  region: 'membre-inf',
  types: ['bloc', 'interventionnel'],
  niveau: 1,
  grade: `Faible — séries et avis d'experts pour le geste ; le syndrome lui-même reste mal défini (Doneddu 2017). En revanche la valeur **diagnostique** de l'échographie, pour trouver une lésion occupant l'espace, est établie`,
  maj: '2026-09',
  motsCles: ['tunnel tarsien', 'tarsal tunnel', 'nerf tibial', 'rétinaculum des fléchisseurs', 'ligament lacinié', 'talalgie', 'nerf de Baxter', 'nerf calcanéen inférieur', 'plantaire médial', 'plantaire latéral', 'kyste', 'varices', 'coalition tarsienne', 'hydrodissection'],
  resume: `Le syndrome du tunnel tarsien est le « canal carpien du pied » — avec une différence de taille : il est beaucoup plus rare, beaucoup moins bien défini, et il est **secondaire dans la majorité des cas où le diagnostic est solide**. C'est ce qui fait de l'échographie l'outil central : elle ne sert pas d'abord à guider une aiguille, elle sert à chercher **la cause** — kyste, varices, muscle surnuméraire, ténosynovite, fibrose post-traumatique. Un tunnel tarsien sans lésion visible est un diagnostic fragile, et la littérature le dit sans détour. L'anatomie du contenu se retient en une formule : **Tom, Dick and a Very Nervous Harry** — tibial postérieur, fléchisseur commun des orteils, artère, veines, nerf, long fléchisseur de l'hallux. Une fois la cause identifiée (ou écartée), on dispose du bloc test, de l'hydrodissection au dextrose 5 % et de la PRF. Et comme au col de la fibula : **nerf mixte, donc pas de lésion thermique ni de cryoneurolyse sur le tronc**.`,

  flash: {
    position: 'dorsal', positionNote: `décubitus dorsal, hanche en **rotation externe**, genou fléchi, bord médial de la cheville vers le haut ; ou **décubitus latéral** côté sain en bas. Pied dans le vide ou sur un coussin, cheville en légère éversion`,
    sonde: 'lineaire', sondeNote: `12–18 MHz, profondeur 2–3 cm ; sonde hockey très utile dans la concavité rétro-malléolaire`,
    approche: 'in-plane', approcheNote: `transversale rétro-malléolaire, aiguille **postéro-antérieure** — on aborde le nerf par l'arrière, donc en s'éloignant de l'artère tibiale postérieure qui lui est antérieure`,
    aiguille: `25 G 40 mm (22 G si hydrodissection de gros volume) ; électrode RF 22 G pointe active 5 mm pour la PRF`,
    cible: `Espace péri-nerveux sous le **rétinaculum des fléchisseurs**, entre le nerf tibial et le paquet vasculaire — critère de fin = **halo anéchogène** décollant le nerf sur 3–4 cm`,
    injectat: `2–4 mL d'AL + corticoïde **non particulaire** faible dose · ou 5–10 mL de dextrose 5 % en hydrodissection`,
    duree: `8–12 min · 20–30 min avec PRF`,
  },

  indications: [
    `**Syndrome du tunnel tarsien** : douleur et paresthésies de la plante et du bord médial du pied, souvent nocturnes ou majorées par la station debout et la marche, avec signe de **Tinel** rétro-malléolaire et **test de dorsiflexion-éversion** positif (Kinoshita 2001) — après échec du traitement conservateur (orthèse plantaire corrigeant le valgus de l'arrière-pied, chaussage, décharge relative).`,
    `**Talalgie chronique par atteinte du nerf de Baxter** (première branche du nerf plantaire latéral, ou nerf calcanéen inférieur) : douleur plantaire médiale ne cédant pas au traitement de la fasciite, douleur latéralisée sous le calcanéum, parfois amyotrophie de l'abducteur du cinquième orteil. Diagnostic très souvent manqué.`,
    `**Névralgie du nerf calcanéen médial** : douleur du talon en bande médiale, allodynie, souvent post-chirurgicale (voie d'abord médiale) ou post-traumatique.`,
    `**Douleur neuropathique post-traumatique ou post-chirurgicale** de la cheville et du pied : fracture du pilon ou du calcanéum, arthrodèse, fibrose cicatricielle du tunnel.`,
    `**Bloc test diagnostique** : distinguer une atteinte tronculaire du tibial d'une radiculopathie S1, d'une polyneuropathie diabétique ou d'une fasciite plantaire. C'est l'usage le plus rentable du geste.`,
    `**Bilan étiologique par l'échographie elle-même** — l'indication première : chercher un **kyste synovial**, des **varices**, un **muscle surnuméraire** (soléaire accessoire, fléchisseur accessoire), une **ténosynovite** du tibial postérieur, une lésion tumorale, une fibrose.`,
  ],
  contreIndications: [
    `**Absolues** : infection cutanée au point de ponction ; allergie documentée.`,
    `**Absolue de principe** : **pas de radiofréquence thermique ni de cryoneurolyse sur le tronc du nerf tibial**. Il est **mixte** et innerve toute la plante : une lésion produit une **anesthésie plantaire** (risque de mal perforant, surtout chez le diabétique) et un déficit des intrinsèques. Seules la PRF et l'hydrodissection sont légitimes sur le tronc. Une cryoneurolyse ne se discute que sur une **branche terminale purement sensitive** (calcanéen médial, névrome), après bloc test.`,
    `**Lésion occupant l'espace identifiée** (kyste volumineux, tumeur, muscle surnuméraire symptomatique) : ce n'est pas un terrain d'infiltration mais une **indication d'orientation chirurgicale**. Infiltrer retarde la décompression.`,
    `**Déficit sensitivo-moteur installé ou progressif** : EMG, IRM, avis chirurgical. Le geste antalgique ne doit pas retarder la libération du rétinaculum.`,
    `**Relatives** : **diabète** — très fréquent ici, et à double titre : il fausse le diagnostic (polyneuropathie), il majore le risque infectieux et le pic glycémique, et l'anesthésie plantaire transitoire y est plus dangereuse. Artériopathie des membres inférieurs (l'artère tibiale postérieure peut être la principale artère de vascularisation du pied).`,
    `**Hémostase** : geste de **faible risque hémorragique** (ASRA-ESRA 2018), superficiel et compressible — pas d'arrêt des antiagrégants, anticoagulants au cas par cas. Réserve propre au site : l'**artère tibiale postérieure** est au contact immédiat, d'où le Doppler et l'abord postérieur systématiques.`,
  ],
  alternatives: `**Avant le geste** : orthèse plantaire corrigeant le **valgus de l'arrière-pied** (facteur mécanique majeur et souvent seul traitement nécessaire), révision du chaussage, décharge relative, rééducation, traitement de fond des douleurs neuropathiques. Contrôle glycémique chez le diabétique.

**Selon l'étiologie** : exérèse chirurgicale d'un kyste ou d'un muscle surnuméraire, sclérothérapie ou chirurgie de varices, traitement d'une ténosynovite du tibial postérieur, **libération chirurgicale du rétinaculum des fléchisseurs** — dont les résultats sont bons quand une **cause compressive est identifiée**, et médiocres dans les formes idiopathiques : c'est le message constant des séries chirurgicales, et il doit gouverner l'orientation.

Devant une talalgie, ne pas oublier les diagnostics concurrents : **fasciite plantaire** (fiche dédiée), fracture de contrainte du calcanéum, atrophie du coussinet adipeux, spondyloarthrite. Le nerf de Baxter est souvent le diagnostic qu'on pose après avoir échoué sur la fasciite — autant y penser d'emblée.`,

  anatomie: `Le **tunnel tarsien** est un canal ostéo-fibreux situé en arrière et en dessous de la malléole médiale. Son **plancher** est ostéo-articulaire (malléole médiale, talus, calcanéum) ; son **toit** est le **rétinaculum des fléchisseurs** (ligament lacinié), qui s'étend de la malléole médiale au calcanéum.

Son contenu se retient dans l'ordre **antéro-postérieur** par la formule **« Tom, Dick and a Very Nervous Harry »** :
- **T**ibial postérieur (tendon) — le plus antérieur, contre la malléole,
- **D**igitorum longus (fléchisseur commun des orteils),
- **A**rtère tibiale postérieure,
- **V**eines satellites (souvent deux, parfois variqueuses),
- **N**erf tibial,
- **H**allucis longus (long fléchisseur de l'hallux) — le plus postérieur et le plus profond.

Le **nerf tibial** se divise en **nerf plantaire médial** et **nerf plantaire latéral**. Le niveau de cette bifurcation est **variable** : dans le tunnel, en aval, mais aussi **en amont** dans une proportion non négligeable des cas — ce qui explique qu'on voie parfois deux faisceaux d'emblée. Il donne aussi le ou les **nerfs calcanéens médiaux**, qui perforent le rétinaculum pour innerver la peau du talon.

Le **nerf de Baxter** (première branche du nerf plantaire latéral, ou **nerf calcanéen inférieur**) naît en aval, chemine **verticalement entre l'abducteur de l'hallux et le carré plantaire**, puis tourne **horizontalement** sous le calcanéum vers l'abducteur du cinquième orteil. Ses deux sites de conflit sont ce coude et le passage sous le fascia de l'abducteur de l'hallux.

### Ce qui compte pour le geste
- **L'artère est le repère et le danger.** Le nerf tibial est **postérieur à l'artère tibiale postérieure**. On l'aborde donc **par l'arrière**, ce qui met l'aiguille en éloignement du vaisseau à chaque millimètre.
- **La bifurcation est variable** : toujours balayer de proximal en distal pour savoir à quel niveau on travaille, sous peine de bloquer une seule branche et de conclure à tort à un échec.
- **Les varices sont un piège majeur** : des veines dilatées ressemblent à des structures nerveuses. Elles se **vident à la compression** et se remplissent au **Valsalva** ou en position debout — d'où l'intérêt d'examiner aussi en charge quand le doute persiste.
- **Chercher le contenant autant que le contenu** : muscle **soléaire accessoire** ou **fléchisseur accessoire** dans le tunnel, kyste issu de l'articulation sous-talienne, ténosynovite du tibial postérieur (dont l'infiltration au corticoïde expose à la **rupture tendineuse** — précaution majeure).
- La **coalition tarsienne** est une cause reconnue de tunnel tarsien par déformation en valgus : l'échographie **ne la voit pas**. Elle s'évoque sur la clinique (arrière-pied raide, valgus fixé, antécédents) et se confirme en **TDM**. Ne pas conclure à une absence de cause sur la seule échographie.
- Profondeurs : nerf tibial **0,8–2 cm** ; nerf de Baxter **1,5–2,5 cm**, beaucoup plus difficile à individualiser.`,

  installation: {
    patient: `**Décubitus dorsal**, hanche en **rotation externe**, genou fléchi, coussin sous le genou : le bord médial de la cheville regarde le plafond. C'est la position la plus simple et la plus reproductible.

Alternative : **décubitus latéral, côté sain en bas**, jambe à traiter posée sur un coussin.

Pied en **légère éversion** (le test de dorsiflexion-éversion met le nerf en tension et peut reproduire la douleur : le faire avant de désinfecter). Palper et **marquer le point de Tinel** au feutre — il oriente le niveau de la sonde.`,
    operateur: `Opérateur face au bord médial de la cheville, écran en face. Sonde **transversale rétro-malléolaire**, tenue légèrement, en appui sur les doigts. La concavité rétro-malléolaire impose une **couche de gel épaisse** ou une sonde hockey : un mauvais contact au bord de la sonde fait perdre la moitié de l'image.

Ponction **in-plane, de postérieur en antérieur** — c'est-à-dire depuis le bord postérieur de la sonde, côté tendon d'Achille, vers le nerf. Ce sens n'est pas une préférence : il met l'aiguille **en éloignement de l'artère tibiale postérieure** pendant toute sa progression.`,
    sonde: `- Linéaire **12–18 MHz**, preset nerf superficiel, **profondeur 2–3 cm**, focale à 1–1,5 cm, gain élevé.
- **Doppler couleur basse échelle, systématique et prolongé** : localiser l'artère tibiale postérieure, ses branches, et surtout dépister des **varices** dans le tunnel.
- **Test de compression** de la sonde à chaque structure ronde suspecte : une veine se vide, un nerf non. C'est le geste diagnostique le plus rentable de la fiche.
- Pression minimale une fois le repérage fait, sous peine d'effacer l'espace péri-nerveux qu'on veut décoller.
- Fonction **mesure de surface (CSA)** activée ; comparer au côté sain dans le même réglage.`,
  },

  reperage: [
    { titre: `Poser la sonde en rétro-malléolaire`, texte: `Sonde **transversale** juste en arrière et en dessous de la malléole médiale, perpendiculaire à l'axe de la jambe. Identifier d'emblée la **malléole médiale** (repère osseux antérieur) et la ligne corticale profonde du talus.` },
    { titre: `Dérouler « Tom, Dick and a Very Nervous Harry »`, texte: `D'avant en arrière : **tendon du tibial postérieur** (le plus gros, contre la malléole), **fléchisseur commun des orteils**, **artère tibiale postérieure** (pulsatile, Doppler), **veines satellites** (compressibles), **nerf tibial** (fasciculé, en nid d'abeilles), **long fléchisseur de l'hallux** (le plus postérieur et profond). Confirmer les tendons en **mobilisant les orteils** : ils coulissent, le nerf non.` },
    { titre: `Identifier le rétinaculum`, texte: `Repérer le **rétinaculum des fléchisseurs**, fine bande hyperéchogène qui coiffe l'ensemble du contenu, de la malléole au calcanéum. La cible du geste est **sous** lui.` },
    { titre: `Suivre la division`, texte: `Glisser en distal : le nerf tibial se divise en **plantaire médial** (vers l'avant) et **plantaire latéral** (vers l'arrière et le bas). Repérer le niveau de la bifurcation — il est variable, et il conditionne la hauteur d'injection si l'on veut couvrir les deux branches.` },
    { titre: `Chercher la cause — l'étape décisive`, texte: `Balayer méthodiquement : **kyste** synovial (anéchogène, souvent issu de la sous-talienne ou d'une gaine tendineuse), **varices** (à tester en compression et au Valsalva, éventuellement en charge), **muscle surnuméraire** (soléaire accessoire, fléchisseur accessoire long — une masse musculaire là où il ne devrait y en avoir aucune), **ténosynovite du tibial postérieur** (épanchement dans la gaine, épaississement), **fibrose** post-traumatique, lésion tumorale. Mesurer la **CSA** du nerf et la comparer au côté sain. Un tunnel tarsien sans cause identifiée reste un diagnostic fragile.` },
    { titre: `Chercher le nerf de Baxter (si talalgie)`, texte: `Descendre vers la plante : identifier l'**abducteur de l'hallux** (superficiel et médial) et le **carré plantaire** en profondeur. Le nerf de Baxter chemine **verticalement entre les deux**, puis tourne horizontalement sous le calcanéum. Il est **fin et difficile** : on repère souvent mieux l'**interface graisseuse inter-musculaire** que le nerf lui-même, et c'est ce plan que l'on infiltre. Rechercher une **amyotrophie de l'abducteur du cinquième orteil** — signe indirect classique, décrit en IRM (Chundru 2008), parfois visible en échographie par comparaison au côté sain.` },
  ],

  sonoanatomie: [
    { structure: `Malléole médiale / talus`, aspect: `Lignes corticales hyperéchogènes avec ombre franche`, repere: `Plancher du tunnel ; la malléole est le repère antérieur` },
    { structure: `Tendon du tibial postérieur`, aspect: `Tendon ovalaire fibrillaire, le plus volumineux ; coulisse à la mobilisation`, repere: `Le plus **antérieur**, contre la malléole. Sa ténosynovite est une cause — et son infiltration expose à la rupture` },
    { structure: `Fléchisseur commun des orteils`, aspect: `Tendon plus petit, coulisse à la flexion des orteils`, repere: `Entre le tibial postérieur et l'artère` },
    { structure: `Artère tibiale postérieure`, aspect: `Ronde, pulsatile, non compressible, Doppler franc`, repere: `**Antérieure au nerf** — d'où l'abord postérieur` },
    { structure: `Veines satellites`, aspect: `Anéchogènes, **compressibles**, se remplissent au Valsalva`, repere: `Piège classique ; des varices peuvent être la cause du syndrome` },
    { structure: `Nerf tibial`, aspect: `Faisceau ovalaire fasciculé en nid d'abeilles ; pathologique : épaissi, hypoéchogène, fascicules effacés`, repere: `**Postérieur à l'artère**, sous le rétinaculum — la cible` },
    { structure: `Long fléchisseur de l'hallux`, aspect: `Tendon postérieur et profond, coulisse à la flexion de l'hallux`, repere: `Limite postérieure du contenu` },
    { structure: `Rétinaculum des fléchisseurs`, aspect: `Fine bande hyperéchogène coiffant l'ensemble`, repere: `Toit du tunnel — la cible est en dessous` },
    { structure: `Nerf de Baxter`, aspect: `Fin faisceau vertical, souvent non individualisé ; on repère le plan graisseux`, repere: `Entre **abducteur de l'hallux** et **carré plantaire**` },
  ],

  technique: [
    { titre: `Préparation`, texte: `Checklist en fin de fiche. Le bilan étiologique échographique doit être **fait et conclu** avant de préparer le matériel : une lésion occupant l'espace change la prise en charge. Désinfection large du bord médial de la cheville et du talon. Gel stérile ou housse ; couche épaisse dans la concavité rétro-malléolaire. Aiguille 25 G sur prolongateur.` },
    { titre: `Anesthésie cutanée`, texte: `0,5 mL de lidocaïne 1 % strictement intradermique au point d'entrée postérieur. La peau est fine et sensible ici ; rester très superficiel pour ne pas noyer la cible.` },
    { titre: `Ponction in-plane, de postérieur en antérieur`, texte: `Aiguille **25 G** entrée par le bord **postérieur** de la sonde, très tangentielle, progressant vers le nerf tibial **sans jamais dépasser sa face antérieure** — au-delà se trouve l'artère. Garder la pointe visible en permanence. Une **paresthésie plantaire fulgurante** impose un retrait immédiat de 1 mm avant toute injection.` },
    { titre: `Test et injection péri-nerveuse`, texte: `Aspiration. Injecter **0,5 mL** en test : le liquide doit **décoller le nerf** du plan voisin en une lame anéchogène. Si le **nerf gonfle** (CSA qui augmente, fascicules écartés) : **arrêt immédiat et retrait**. Puis injecter **2–4 mL** fractionnés, en cherchant à contourner le nerf. Pour une **hydrodissection**, poursuivre jusqu'à **5–10 mL** de dextrose 5 % et repositionner l'aiguille de l'autre côté du nerf pour obtenir un **halo circonférentiel**.` },
    { titre: `Nerf de Baxter (variante)`, texte: `Sonde transversale sur la plante médiale, aiguille in-plane de médial en latéral, pointe amenée dans le **plan graisseux entre l'abducteur de l'hallux et le carré plantaire**. Injecter **2–3 mL** : le décollement de ce plan est le critère de fin, le nerf n'ayant pas besoin d'être individualisé. La plante est douloureuse à ponctionner : prévenir, et anesthésier la peau.` },
    { titre: `Critère de fin`, texte: `Halo ou lame anéchogène entourant le nerf sur 3–4 cm sous le rétinaculum, sans augmentation de la CSA, sans injection contre résistance. Pour Baxter : ouverture nette du plan inter-musculaire.` },
    { titre: `Après le geste`, texte: `Tester à 15–20 min : sensibilité plantaire, force de flexion des orteils. **Prévenir de l'anesthésie plantaire transitoire** : elle est attendue avec un AL, et elle rend la marche incertaine. Consignes : chaussage fermé, marche accompagnée, **pas de conduite**, pas de station debout prolongée, **surveillance cutanée du pied** — impérative chez le diabétique, chez qui une plante insensible peut se blesser sans qu'il le sente. Reprise des orthèses plantaires.` },
  ],

  injectat: `| Objectif | Produits | Volume | Commentaire |
|---|---|---|---|
| **Bloc test diagnostique** | Lidocaïne 1–2 % (durée courte) | **2–3 mL** | Molécule courte volontairement : on ne veut pas d'une plante anesthésiée pendant 12 h. Sépare l'atteinte tronculaire de la radiculopathie S1 et de la fasciite |
| **Bloc thérapeutique** | Lidocaïne 1 % ou ropivacaïne 0,2 % + **dexaméthasone 4 mg** (non particulaire) | **2–4 mL** | Corticoïde **non particulaire** : le tunnel est un espace clos au contact immédiat de l'artère tibiale postérieure. Éviter les fortes doses de particulaire |
| **Hydrodissection** | **Dextrose 5 % (D5W)**, précédé de 1 mL de lidocaïne 1 % pour le confort | **5–10 mL** | Le D5W **ne bloque pas la conduction** : on reteste immédiatement la sensibilité plantaire et la force — décisif sur un nerf mixte, et plus encore chez le diabétique. Série de 2 à 4 séances espacées de 2–4 semaines |
| **Nerf de Baxter / calcanéen médial** | AL + dexaméthasone 4 mg, ou D5W | **2–3 mL** | Plan graisseux inter-musculaire ; le nerf n'a pas besoin d'être vu |
| **Ténosynovite du tibial postérieur** | AL ± corticoïde faible dose, **strictement intra-gaine** | 1–2 mL | **Précaution majeure** : le corticoïde intratendineux ou répété expose à la **rupture du tendon tibial postérieur**, dont la conséquence est un pied plat acquis. Geste rare, à peser |
| **Avant PRF** | Lidocaïne 1 %, 0,5 mL **après** les tests de stimulation | 0,5 mL | Injecter avant la stimulation fausse le test |

**Doses maximales d'AL** : lidocaïne 4,5 mg/kg (7 mg/kg adrénalinée), ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg. Sans objet aux volumes utilisés ici ; à recalculer si l'on associe d'autres blocs dans la séance d'HDJ.

**Chez le diabétique** — cas fréquent dans cette indication : glycémie capillaire le jour du geste et les 48 h suivantes si corticoïde, et consignes renforcées de surveillance cutanée plantaire pendant la durée du bloc.`,

  variantes: [
    { titre: `Hydrodissection au dextrose 5 %`, texte: `L'option la plus adaptée au tronc du nerf tibial, pour trois raisons : elle traite le mécanisme supposé (adhérences péri-nerveuses dans un canal étroit), elle **ne bloque pas la conduction** — donc pas d'anesthésie plantaire ni de risque de blessure inaperçue — et elle est répétable sans dose cumulée de corticoïde.

Technique : aiguille 22–25 G, pointe **au contact du nerf**, injection de D5W de part et d'autre jusqu'au **halo circonférentiel** sur 3–4 cm sous le rétinaculum. Séries de 2 à 4 séances espacées de 2 à 4 semaines, schéma extrapolé des protocoles validés au **canal carpien** (Wu 2017). Aucun essai randomisé au tunnel tarsien : à présenter comme une extrapolation raisonnée. Voir le chapitre transversal Hydrodissection.` },
    { titre: `Radiofréquence pulsée (PRF)`, texte: `Après bloc test positif (≥ 50 %) mais effet trop bref, en l'absence de déficit évolutif. Électrode 22 G à pointe active 5 mm, **parallèle** au nerf, abord postérieur. Stimulation **sensitive 50 Hz** : paresthésies plantaires reproduisant la douleur à < 0,5 V. Stimulation **motrice 2 Hz** : la contraction des fléchisseurs des orteils confirme la proximité et **n'est pas rédhibitoire** (la PRF n'est pas lésionnelle). Paramètres usuels : **42 °C, 2 Hz, 20 ms, 45 V, 120 s × 2–3 cycles**. Puis 1–2 mL d'AL. Preuve limitée à des séries.` },
    { titre: `Ce qu'on ne fait pas — RF thermique et cryoneurolyse du tronc`, texte: `Le nerf tibial est **mixte** et porte toute la sensibilité plantaire. Une lésion thermique ou cryogénique du tronc produirait une **anesthésie plantaire** — c'est-à-dire, chez un patient souvent diabétique, un pied à haut risque de **mal perforant** — et un déficit des muscles intrinsèques. Interdit.

Ce qui reste possible : une cryoneurolyse ou une alcoolisation ciblée sur une **branche terminale purement sensitive** (nerf calcanéen médial, névrome cicatriciel post-chirurgical), après bloc test sélectif positif et information explicite sur la zone d'anesthésie qui en résultera.` },
    { titre: `Nerf de Baxter et talalgie chronique`, texte: `À évoquer systématiquement devant une **talalgie plantaire résistante** au traitement d'une fasciite : douleur plus médiale ou plus latérale que le point d'insertion du fascia, douleur à la palpation profonde entre abducteur de l'hallux et carré plantaire, absence de douleur au premier pas caractéristique de la fasciite.

**Presley 2013 (J Ultrasound Med)** a validé la visualisation échographique de ce nerf et la précision de son injection sur modèle cadavérique — la technique est donc établie, même si le nerf est rarement individualisé en pratique clinique. **Chundru 2008** a décrit l'association entre atrophie de l'abducteur du cinquième orteil et pathologie du talon, signe indirect utile. Le traitement chirurgical de référence reste la libération décrite par **Baxter et Pfeffer (1992)**. En algologie : bloc test, puis infiltration du plan inter-musculaire ou hydrodissection.` },
    { titre: `Traiter la cause plutôt que le nerf`, texte: `À retenir comme principe d'orientation : les séries chirurgicales concordent pour dire que la libération du tunnel tarsien donne de **bons résultats quand une cause compressive est identifiée** (kyste, muscle surnuméraire, varices, fibrose) et des **résultats médiocres dans les formes idiopathiques**. Le corollaire pour l'algologue est direct : le temps passé à chercher la cause en échographie vaut mieux que le temps passé à répéter des infiltrations. Et un valgus d'arrière-pied non corrigé par une orthèse fera échouer n'importe quel geste.` },
  ],

  pearls: [
    `**Tom, Dick and a Very Nervous Harry** — d'avant en arrière : tibial postérieur, fléchisseur des orteils, artère, veines, nerf, long fléchisseur de l'hallux.`,
    `**Mobiliser les orteils** pour trancher tendon / nerf : le tendon coulisse, le nerf reste immobile.`,
    `**Comprimer avec la sonde** devant toute structure ronde anéchogène : une veine se vide, un nerf non. C'est le test le plus rentable de la fiche.`,
    `Aborder le nerf **par l'arrière** : l'aiguille s'éloigne de l'artère tibiale postérieure à chaque millimètre.`,
    `**Chercher la cause avant de préparer la seringue** : kyste, varices, muscle surnuméraire, ténosynovite. C'est l'apport principal de l'échographie ici.`,
    `Balayer en distal pour situer la **bifurcation** : elle est variable, et injecter en dessous ne bloque qu'une branche.`,
    `Devant une talalgie qui résiste au traitement de la fasciite, **penser au nerf de Baxter**.`,
    `Préférer le **dextrose 5 %** : pas d'anesthésie plantaire, donc pas de plante insensible chez un diabétique qui rentre à pied.`,
  ],
  pieges: [
    `Poser le diagnostic de tunnel tarsien **sans cause identifiée** et enchaîner les infiltrations : c'est le scénario d'échec le plus fréquent.`,
    `Confondre des **varices** avec des structures nerveuses — ou passer à côté de varices qui sont précisément la cause.`,
    `Aborder le nerf par l'avant : on traverse l'artère tibiale postérieure.`,
    `Infiltrer un **corticoïde dans le tendon du tibial postérieur** en croyant traiter sa gaine : risque de rupture et de pied plat acquis.`,
    `Injecter malgré une augmentation de la CSA : injection intraneurale.`,
    `Laisser repartir un patient **diabétique** avec une plante anesthésiée sans consigne de surveillance cutanée.`,
    `Conclure à l'absence de cause sur la seule échographie : elle **ne voit pas la coalition tarsienne**, qui se confirme en TDM.`,
    `Faire une RF thermique ou une cryoneurolyse sur le tronc du tibial.`,
  ],
  complications: [
    `**Anesthésie plantaire transitoire** après AL : attendue, mais c'est la complication fonctionnelle réelle du geste — marche incertaine, **risque de chute**, et **risque de blessure inaperçue chez le diabétique**. Prévention : molécule courte, petits volumes, ou D5W. Conduite à tenir : marche accompagnée, chaussage fermé, pas de conduite, inspection du pied le soir même.`,
    `**Ponction de l'artère tibiale postérieure** : hématome dans un espace peu extensible. Prévention : Doppler et abord postérieur. Conduite à tenir : retrait, compression prolongée (10 min), surveillance — un hématome sous le rétinaculum peut lui-même comprimer le nerf.`,
    `**Injection intraneurale** : douleur fulgurante, résistance, **augmentation de la CSA**. Arrêt immédiat, retrait, surveillance clinique et EMG à distance si symptômes persistants.`,
    `**Rupture du tendon tibial postérieur** après corticoïde intratendineux ou répété : conséquence lourde (pied plat acquis progressif). C'est la raison de la prudence sur la ténosynovite.`,
    `**Hyperglycémie** de 24–72 h chez le diabétique après corticoïde : contrôle capillaire et adaptation du traitement.`,
    `**Aggravation transitoire des paresthésies** dans les 24–72 h après hydrodissection : fréquente et attendue.`,
    `**Infection** : exceptionnelle, mais le pied est un site à risque, davantage chez le diabétique et l'artéritique. Asepsie stricte, surveillance du point de ponction.`,
    `**Retard diagnostique** d'une cause chirurgicale : la complication la plus dommageable, et la plus évitable.`,
  ],
  securite: [
    `**Doppler couleur systématique et prolongé** : artère tibiale postérieure et dépistage des varices.`,
    `Abord **postéro-antérieur** exclusivement ; ne jamais dépasser la face antérieure du nerf.`,
    `**Test de compression** sur toute structure ronde avant de la prendre pour un nerf.`,
    `Arrêt immédiat sur paresthésie fulgurante, résistance à l'injection ou augmentation de la CSA.`,
    `Corticoïde **non particulaire** (dexaméthasone) dans ce canal clos ; pas de corticoïde intratendineux.`,
    `**Aucune radiofréquence thermique ni cryoneurolyse sur le tronc du nerf tibial** (nerf mixte, sensibilité plantaire).`,
    `**Patient diabétique** : glycémie capillaire, consignes écrites de surveillance cutanée plantaire, préférer le D5W à l'AL quand c'est possible.`,
    `Risque hémorragique **faible** (ASRA-ESRA 2018) ; réserve liée au contact artériel immédiat, d'où le Doppler et l'abord postérieur.`,
    `Rechercher une artériopathie avant d'utiliser un vasoconstricteur ou de comprimer longuement : l'artère tibiale postérieure peut être la principale artère du pied.`,
  ],

  suivi: `- **J0** : EN avant / à 30 min ; **cartographie sensitive plantaire** et force de flexion des orteils avant la sortie ; CSA notée. Consignes écrites, surveillance cutanée du pied.
- **J15** : EN, paresthésies nocturnes, périmètre de marche, allodynie, et **motricité**. Vérifier le port effectif de l'orthèse plantaire — c'est souvent là que se joue le résultat.
- **J30–J45** : décision. Réponse durable → poursuivre orthèse et traitement de fond. Réponse franche mais brève → **hydrodissection en série** (2 à 4 séances à 2–4 semaines) ou **PRF**. Réponse nulle → réinterroger le diagnostic : radiculopathie S1, polyneuropathie (notamment diabétique), fasciite plantaire, fracture de contrainte, **nerf de Baxter** si la douleur est talonnière.
- **3 mois** : contrôle échographique de la CSA comparée au côté sain ; EMG si déficit persistant ; **TDM** si suspicion de coalition tarsienne ; IRM si doute sur une lésion occupant l'espace. Si une cause compressive est confirmée et que la douleur persiste : **orientation chirurgicale** — c'est dans ce cas de figure que la libération donne ses meilleurs résultats.
- **À tracer** : produit, dose, volume, niveau d'injection par rapport à la bifurcation, cause identifiée ou non — cette dernière ligne est celle qui gouvernera toutes les décisions suivantes.`,

  evidence: `- **Le syndrome lui-même est mal défini** : **Doneddu 2017 (Neurological Sciences)** intitule sa mise au point « *still more opinions than evidence* », et c'est le résumé le plus honnête de la situation — critères diagnostiques hétérogènes, électrophysiologie peu sensible, formes idiopathiques dont la réalité est discutée. **Ahmad 2012 (Foot and Ankle Surgery)** et **McSweeney 2015 (The Foot)** aboutissent à la même conclusion dans leurs revues. Confiance : **certaine** sur le constat d'incertitude.
- **Diagnostic clinique — Kinoshita 2001 (JBJS Am)** : description et validation du **test de dorsiflexion-éversion**, qui reste le signe clinique le plus utile. Preuve **modérée**.
- **Apport de l'échographie — c'est le point solide.** **Nagaoka et Matsuzaki 2005 (J Ultrasound Med)** ont montré l'intérêt de l'échographie dans le syndrome du tunnel tarsien, et **Fantino 2014 (Journal of Ultrasound)** a rapporté une série de 81 cas de syndrome du tunnel tarsien postéro-médial explorés en échographie, illustrant la fréquence des causes identifiables (kystes, varices, muscles surnuméraires, ténosynovites). Preuve **modérée à forte** pour la valeur étiologique de l'examen — et c'est ce qui justifie de le faire systématiquement avant tout geste.
- **Nerf de Baxter** : l'entité chirurgicale est établie depuis **Baxter et Pfeffer 1992 (Clin Orthop Relat Res)**, qui décrivent la libération de la première branche du nerf plantaire latéral dans la talalgie chronique. **Presley 2013 (J Ultrasound Med)** a validé la **visualisation échographique et la précision de l'injection** de ce nerf sur modèle cadavérique. **Chundru 2008 (Skeletal Radiology)** a décrit l'association entre atrophie de l'abducteur du cinquième orteil et pathologie du talon en IRM, signe indirect utile. Preuve **modérée** pour la technique, **faible** pour le résultat clinique de l'infiltration.
- **Infiltration et hydrodissection du tunnel tarsien** : la littérature se limite à des **séries** et des descriptions techniques. Aucun essai randomisé contrôlé ne compare infiltration échoguidée, hydrodissection, orthèse ou chirurgie. La preuve du **dextrose 5 % péri-nerveux** vient d'ailleurs — ECR au **canal carpien** (**Wu 2017, Mayo Clinic Proceedings**) — et son transfert au tunnel tarsien est une **extrapolation assumée**. Preuve **faible / indirecte**.
- **Chirurgie** : les séries concordent pour un bon résultat lorsqu'une **cause compressive est identifiée** et un résultat médiocre dans les formes idiopathiques. Preuve **modérée par cohérence**, sans essai randomisé.
- **Trous assumés** : (1) pas de valeur seuil de CSA du nerf tibial faisant consensus au tunnel tarsien ; (2) aucune donnée sur l'efficacité comparée de l'orthèse plantaire et de l'infiltration, alors que c'est la première décision à prendre ; (3) rien sur le nombre optimal de séances d'hydrodissection. Les chiffres et protocoles cités ici sont des usages, pas des recommandations validées.`,

  references: [
    { auteurs: `Doneddu PE, Coraci D, Loreti C, Piccinini G, Padua L`, titre: `Tarsal tunnel syndrome: still more opinions than evidence. Status of the art`, revue: `Neurological Sciences`, annee: '2017', type: 'revue', verif: false, note: `La mise au point la plus honnête sur la fragilité du cadre nosologique.` },
    { auteurs: `Kinoshita M, Okuda R, Morikawa J, Jotoku T, Abe M`, titre: `The dorsiflexion-eversion test for diagnosis of tarsal tunnel syndrome`, revue: `The Journal of Bone and Joint Surgery (American volume)`, annee: '2001', type: 'diagnostique', verif: false },
    { auteurs: `Nagaoka M, Matsuzaki H`, titre: `Ultrasonography in tarsal tunnel syndrome`, revue: `Journal of Ultrasound in Medicine`, annee: '2005', type: 'série', verif: false },
    { auteurs: `Fantino O`, titre: `Role of ultrasound in posteromedial tarsal tunnel syndrome: 81 cases`, revue: `Journal of Ultrasound`, annee: '2014', type: 'série', verif: false },
    { auteurs: `Ahmad M, Tsang K, Mackenney PJ, Adedapo AO`, titre: `Tarsal tunnel syndrome: a literature review`, revue: `Foot and Ankle Surgery`, annee: '2012', type: 'revue', verif: false },
    { auteurs: `McSweeney SC, Cichero M`, titre: `Tarsal tunnel syndrome — a narrative literature review`, revue: `The Foot`, annee: '2015', type: 'revue', verif: false },
    { auteurs: `Baxter DE, Pfeffer GB`, titre: `Treatment of chronic heel pain by surgical release of the first branch of the lateral plantar nerve`, revue: `Clinical Orthopaedics and Related Research`, annee: '1992', type: 'série chirurgicale', verif: false },
    { auteurs: `Presley JC, Maida E, Pawlina W, Murthy N, Ryssman DB, Smith J`, titre: `Sonographic visualization of the first branch of the lateral plantar nerve (Baxter nerve): technique and validation using perineural injections in a cadaveric model`, revue: `Journal of Ultrasound in Medicine`, annee: '2013', type: 'cadavérique', verif: false },
    { auteurs: `Chundru U, Liebeskind A, Seidelmann F, et al.`, titre: `Plantar fasciitis and calcaneal spur formation are associated with abductor digiti minimi atrophy on MRI of the foot`, revue: `Skeletal Radiology`, annee: '2008', type: 'série', verif: false },
    { auteurs: `Wu YT, Ho TY, Chou YC, et al.`, titre: `Six-month efficacy of perineural dextrose for carpal tunnel syndrome: a prospective, randomized, double-blind, controlled trial`, revue: `Mayo Clinic Proceedings`, annee: '2017', type: 'ECR', verif: false, note: `Base de preuve du dextrose 5 % — indication différente, extrapolation assumée.` },
    { auteurs: `Cass SP`, titre: `Ultrasound-guided nerve hydrodissection: what is it? A review of the literature`, revue: `Current Sports Medicine Reports`, annee: '2016', type: 'revue', verif: false },
    { auteurs: `Narouze S, Benzon HT, Provenzano D, et al.`, titre: `Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP`, revue: `Regional Anesthesia and Pain Medicine`, annee: '2018', type: 'reco', verif: false },
  ],
  videos: [],

  scenes: [
    {
      id: 'tt-sono', section: 'sonoanatomie', titre: `Tunnel tarsien — coupe transversale rétro-malléolaire`,
      legende: `D'avant en arrière : **T**ibial postérieur, **D**igitorum longus, **A**rtère tibiale postérieure, **V**eines, **N**erf tibial, **H**allucis longus. Le nerf est **postérieur à l'artère** : c'est pour cela qu'on l'aborde par l'arrière. Mobiliser les orteils pour distinguer les tendons du nerf, et comprimer avec la sonde pour démasquer des varices.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur (malléole)', right: 'Postérieur (Achille)' }).probeInfo({ plan: 'Transverse rétro-malléolaire', type: 'linéaire 12–18 MHz' });
        S.skin({ thickness: 8, fatBelow: 16 });
        S.fascia({ points: [[54, 76], [220, 84], [380, 96], [520, 120]], width: 2, label: 'Rétinaculum des fléchisseurs', lx: 566, ly: 78, anchor: 'end', small: true, lead: [498, 112] });
        S.tendon({ x: 120, y: 116, rx: 26, ry: 15, label: 'T. tibial post.', lx: 74, ly: 172, small: true, lead: [110, 130] });
        S.tendon({ x: 212, y: 132, rx: 22, ry: 14, label: 'FDL', at: [212, 132], small: true });
        S.artery({ x: 296, y: 146, r: 12, label: 'A. tibiale postérieure', lx: 300, ly: 102, lead: [298, 133] });
        S.vein({ x: 266, y: 166, rx: 11, ry: 8 });
        S.vein({ x: 326, y: 164, rx: 11, ry: 8, label: 'Veines', lx: 202, ly: 178, anchor: 'end', small: true, lead: [256, 168] });
        S.nerve({ x: 312, y: 192, rx: 17, ry: 12, label: 'N. tibial', lx: 194, ly: 216, anchor: 'end', lead: [296, 194] });
        S.tendon({ x: 434, y: 190, rx: 28, ry: 18, label: 'FHL', at: [434, 190], small: true });
        S.bone({ path: 'M26 232 Q170 258 320 274 Q440 286 570 280', label: 'Malléole médiale — talus', at: [280, 322] });
      },
    },
    {
      id: 'tt-bloc', section: 'technique', titre: `Bloc / hydrodissection du nerf tibial — abord postéro-antérieur`,
      legende: `Aiguille 25 G in-plane entrée par le bord **postérieur** de la sonde : à chaque millimètre elle s'éloigne de l'artère tibiale postérieure, qui est en avant du nerf. Ne jamais dépasser la face antérieure du nerf. Critère de fin : **halo anéchogène** sous le rétinaculum, sans augmentation de la CSA. Dextrose 5 % de préférence — pas d'anesthésie plantaire, donc pas de plante insensible au retour.`,
      opts: { depth: 3 },
      build: S => {
        S.orient({ left: 'Antérieur (malléole)', right: 'Postérieur (Achille)' }).probeInfo({ plan: 'Transverse rétro-malléolaire', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 16 });
        S.fascia({ points: [[54, 76], [220, 84], [380, 96], [520, 120]], width: 2, label: 'Rétinaculum', lx: 548, ly: 80, anchor: 'end', small: true, lead: [500, 112] });
        S.tendon({ x: 120, y: 116, rx: 26, ry: 15, label: 'TP', at: [120, 116], small: true });
        S.tendon({ x: 212, y: 132, rx: 22, ry: 14, label: 'FDL', at: [212, 132], small: true });
        S.artery({ x: 296, y: 146, r: 12, label: 'A. tib. post.', lx: 244, ly: 100, lead: [290, 135] });
        S.vein({ x: 266, y: 166, rx: 11, ry: 8 });
        S.vein({ x: 326, y: 164, rx: 11, ry: 8 });
        S.nerve({ x: 312, y: 192, rx: 17, ry: 12, label: 'N. tibial', lx: 190, ly: 214, anchor: 'end', lead: [296, 194] });
        S.tendon({ x: 434, y: 190, rx: 28, ry: 18, label: 'FHL', at: [434, 190], small: true });
        S.bone({ path: 'M26 232 Q170 258 320 274 Q440 286 570 280', label: 'Talus', at: [232, 318] });
        S.target({ x: 312, y: 192, r: 26 });
        S.needle({ from: [640, 140], to: [348, 200], label: '25 G, postéro-antérieure' });
        S.spread({ x: 312, y: 208, rx: 42, ry: 10 });
        S.spread({ x: 312, y: 176, rx: 40, ry: 9 });
        S.label({ x: 428, y: 252, text: 'Halo péri-nerveux — 2–4 mL AL ou 5–10 mL D5W', cls: 'lbl-spread', small: true, lead: [340, 220] });
      },
    },
  ],

  checklist: [
    `**Bilan étiologique échographique fait avant le geste** : kyste, varices (compression + Valsalva), muscle surnuméraire, ténosynovite, fibrose`,
    `Niveau de la **bifurcation** en plantaires médial et latéral repéré`,
    `CSA du nerf tibial mesurée et comparée au côté sain`,
    `Doppler couleur systématique ; abord **postéro-antérieur** exclusif`,
    `Corticoïde **non particulaire** ; aucun corticoïde intratendineux (tendon tibial postérieur)`,
    `**Aucune radiofréquence thermique ni cryoneurolyse** sur le tronc du nerf tibial`,
    `**Diabétique** : glycémie capillaire, et consignes écrites de surveillance cutanée plantaire pendant la durée du bloc`,
    `Patient prévenu de l'anesthésie plantaire transitoire : marche accompagnée, chaussage fermé, pas de conduite`,
    `Orthèse plantaire corrigeant le valgus d'arrière-pied prescrite ou vérifiée`,
  ],
});
