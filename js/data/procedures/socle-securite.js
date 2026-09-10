/* Chapitre transversal : sécurité, consentement, antithrombotiques, situations particulières. */
ECHO.register({
  id: 'socle-securite',
  titre: 'Sécurité, consentement, antithrombotiques et situations particulières',
  titreCourt: 'Sécurité & consentement',
  en: 'Safety framework for ultrasound-guided pain procedures: informed consent and documentation, time-out checklist, asepsis, antiplatelet and anticoagulant management (ASRA-ESRA 2018 bleeding-risk stratification), management of complications, post-procedure monitoring, discharge instructions and procedure report',
  region: 'socle',
  types: ['socle'],
  niveau: 1,
  grade: 'Recommandations professionnelles (ASRA-ESRA 2018, ASRA 2015 et 2020, HAS, SF2H) ; peu d’essais randomisés — le niveau de preuve est celui d’un consensus d’experts appuyé sur des séries',
  maj: '2026-09',
  motsCles: ['consentement éclairé', 'traçabilité', 'time-out', 'check-list', 'HAS', 'antiagrégant', 'anticoagulant', 'ASRA', 'ESRA', 'Narouze', 'aspirine', 'clopidogrel', 'ticagrelor', 'prasugrel', 'AVK', 'HBPM', 'AOD', 'rivaroxaban', 'apixaban', 'dabigatran', 'edoxaban', 'AINS', 'ISRS', 'risque hémorragique', 'malaise vagal', 'LAST', 'pneumothorax', 'hématome', 'infection', 'lésion nerveuse', 'flush', 'sortie', 'compte rendu', 'hygiène des sondes'],
  resume: 'Ce chapitre décrit le cadre qui rend un geste défendable : information et consentement tracés au sens du droit français, check-list et time-out avant incision, asepsie, gestion des antiagrégants et des anticoagulants selon la stratification du risque hémorragique des recommandations ASRA-ESRA 2018, contre-indications générales, conduite à tenir devant les complications qui surviennent réellement en hôpital de jour (malaise vagal, toxicité systémique des anesthésiques locaux, injection intravasculaire, ponction pleurale, hématome, infection, lésion nerveuse, flush stéroïdien), surveillance post-geste, consignes de sortie et contenu du compte rendu. Message central pour une activité d’algologie échoguidée périphérique : la quasi-totalité des gestes de ce mémo relève des procédures à **faible risque hémorragique**, pour lesquelles l’arrêt systématique des antithrombotiques n’est pas recommandé et fait courir un risque thrombotique supérieur au bénéfice.',

  indications: [
    'Tout geste interventionnel réalisé en HDJ douleur, quel que soit le site : ce chapitre est le dénominateur commun des fiches de gestes.',
    'Préparation d’un protocole de service : contenu de la consultation pré-geste, du document d’information, de la check-list, de la fiche de sortie et du compte rendu type.',
    'Décision de maintenir ou d’interrompre un antithrombotique avant un geste, en concertation avec le prescripteur.',
    'Conduite à tenir immédiate devant une complication per- ou post-procédurale.',
    'Réponse à un contrôle : ce qui doit figurer dans le dossier pour que le geste soit justifiable a posteriori.',
  ],
  contreIndications: [
    '**Absolues, tous gestes confondus** : refus du patient ou consentement non recueilli ; infection cutanée au point de ponction ; sepsis non contrôlé ; arthrite septique suspectée sur le site visé (la ponction est alors un prélèvement diagnostique, pas une infiltration) ; allergie vraie documentée au produit prévu ; impossibilité de visualiser la cible ou le trajet.',
    '**Relatives — à peser, jamais à ignorer** : trouble de l’hémostase non exploré ou coagulopathie (thrombopénie profonde, insuffisance hépatique sévère) ; immunodépression (chimiothérapie, biothérapie, corticothérapie au long cours, VIH non contrôlé) ; diabète déséquilibré si le geste comporte un corticoïde ; grossesse (l’échoguidage n’irradie pas, mais l’indication doit être forte et le corticoïde discuté) ; patient non coopérant ou incapable de rester immobile ; barrière de communication empêchant un consentement réellement éclairé.',
    '**Antithrombotiques** : ce n’est pas une contre-indication en soi mais une décision de stratification (voir *Variantes*). Pour un geste **à faible risque hémorragique** — l’immense majorité des gestes échoguidés périphériques — les recommandations ASRA-ESRA 2018 ne demandent **pas** d’interrompre les antiagrégants ni, dans la plupart des cas, les anticoagulants. L’arrêt réflexe est une erreur : il expose à un événement thrombotique pour prévenir un hématome compressible.',
    '**Reporter plutôt que forcer** : fièvre inexpliquée le jour du geste, plaie ou dermatose sur la fenêtre, glycémie très déséquilibrée, patient à jeun depuis trop longtemps et vagal, absence d’accompagnant quand une sédation est prévue.',
  ],
  alternatives: 'Le premier arbitrage de sécurité est de renoncer : un geste dont l’indication n’est pas solide, dont la cible n’est pas visible, ou dont le rapport bénéfice/risque n’est pas favorable chez ce patient précis, doit être remplacé par une alternative — optimisation médicamenteuse, kinésithérapie, prise en charge pluridisciplinaire, ou report après correction du facteur limitant (équilibre glycémique, infection intercurrente, avis du cardiologue sur un antiagrégant). Quand le risque hémorragique du site est élevé et l’antithrombotique intouchable, la bonne réponse est souvent une **cible différente, plus superficielle et compressible**, pas un arrêt de traitement.',

  anatomie: `L’anatomie utile ici est celle du **risque**, et elle se résume à quatre questions posées avant chaque geste.

**1. Le site est-il compressible ?** C’est le déterminant principal du risque hémorragique. Un site superficiel, appuyé sur un plan osseux ou musculaire ferme, où une compression manuelle de quelques minutes contrôle un saignement, est un site à faible risque : c’est le cas de la quasi-totalité des cibles de ce mémo (nerfs des membres, plans de paroi, articulations périphériques, bourses). À l’inverse, les espaces **non compressibles et clos** — canal rachidien, espace épidural, région rétropéritonéale, creux poplité profond, région cervicale profonde — transforment un saignement banal en compression neurologique.

**2. Y a-t-il une artère, et de quel type ?** Une artère de gros calibre superficielle est un obstacle visible et évitable ; une **artère nourricière de petit calibre** accompagnant un nerf est un piège, car elle peut être cathétérisée sans reflux à l’aspiration. C’est là que la règle du corticoïde non particulaire s’applique. Une **artère terminale** (segmentaire médullaire, vertébrale, ophtalmique) fait basculer le geste dans une autre catégorie de risque.

**3. Quelle séreuse est en dessous ?** La **plèvre** est à quelques millimètres dans tout geste de paroi thoracique, du creux sus-claviculaire, de la région scapulaire et de la charnière thoraco-lombaire. Elle se reconnaît à sa ligne hyperéchogène animée du glissement respiratoire. Le **péritoine** joue le même rôle pour les blocs de paroi abdominale. Aucun de ces gestes ne se fait sans avoir identifié la séreuse au préalable.

**4. L’espace est-il clos ?** Canal carpien, tunnel tarsien, gaine tendineuse, espace sous-acromial : un volume excessif y crée une hyperpression qui fait la complication, indépendamment du produit injecté.

### Ce qui compte pour le geste

- La **classe de risque hémorragique** dépend du **site**, jamais du produit ni du calibre d’aiguille.
- La **profondeur de la cible** détermine à la fois la faisabilité du contrôle visuel et la possibilité de comprimer en cas d’incident.
- Le trajet, et pas seulement la cible, doit être cartographié : la complication naît presque toujours de ce que l’aiguille traverse, pas de l’endroit où elle s’arrête.
- Le patient qui saigne dans un espace compressible fait un bleu ; le même patient dans un espace clos fait une urgence.`,

  technique: [
    { titre: 'Consultation pré-geste : informer et documenter', texte: 'Aucun acte ne peut être pratiqué sans le **consentement libre et éclairé** de la personne, retirable à tout moment (article L.1111-2 du code de la santé publique). L’information est **orale**, délivrée au cours d’un entretien dédié, et porte sur : l’état du patient et l’évolution prévisible, la nature et l’utilité du geste, ses bénéfices attendus, ses risques **fréquents ou graves normalement prévisibles**, les **alternatives** dont l’abstention, et les conséquences d’un refus. En cas de litige, **c’est au professionnel d’apporter la preuve** que l’information a été délivrée — preuve libre, mais qui suppose une trace. Un **délai de réflexion** entre l’information et le geste est la règle pour un acte programmé : information à la consultation, geste à une date ultérieure.' },
    { titre: 'Traçabilité du consentement', texte: 'Le trépied qui tient un contrôle : (1) un **entretien oral** confidentiel, (2) la remise d’un **document d’information écrit** propre au geste (il complète l’oral, ne le remplace jamais), (3) une **mention datée et circonstanciée dans le dossier** — nature du geste expliqué, risques nommés, alternatives présentées, questions posées, accord recueilli. Pour un geste invasif programmé, un formulaire signé ajoute une trace, sans valeur exonératoire propre : c’est la mention dans le dossier qui vaut. Conserver aussi la trace du document remis et de la date.' },
    { titre: 'Le jour du geste : vérifications d’amont', texte: 'Avant l’installation : identité, indication toujours valide, dernière évaluation de la douleur, antécédents et allergies (anesthésiques locaux, corticoïdes, iode, latex), grossesse, diabète et équilibre glycémique, immunodépression, infection intercurrente, **traitements antithrombotiques** avec la dernière prise, et bilan biologique s’il a été demandé. Vérifier que le consentement est tracé et que le patient a bien compris ce qui va être fait.' },
    { titre: 'Time-out — la pause avant la ponction', texte: 'Juste avant la première ponction, à voix haute, avec le personnel présent : **identité du patient**, **geste prévu**, **côté et niveau** confirmés avec le patient lui-même, **allergies**, **antithrombotiques et décision retenue**, produits préparés et étiquetés vérifiés (nom, dose, péremption), matériel prêt, **disponibilité du chariot d’urgence et de l’émulsion lipidique 20 %**. La check-list de la HAS pour les blocs opératoires est le modèle : elle se personnalise pour un plateau interventionnel hors bloc, et son bénéfice tient précisément au fait qu’elle est **lue à voix haute**, pas cochée après coup.' },
    { titre: 'Asepsie', texte: 'Détersion-désinfection en deux temps sur peau propre (cinq temps si peau souillée) avec un antiseptique alcoolique à large spectre, **séchage complet** avant ponction, champ, gants stériles, **housse de sonde stérile et gel stérile unidose**. Masque recommandé pour tout geste prolongé ou proche d’un espace clos. Ce niveau d’asepsie ne se négocie pas : les infections après geste interventionnel sont rares (de l’ordre de quelques cas pour dix mille dans les séries publiées sur les gestes rachidiens) mais graves, avec un délai moyen d’apparition d’environ deux semaines et un germe dominant, *Staphylococcus aureus*. Les facteurs de risque connus sont le diabète, l’immunodépression, l’âge et la répétition des gestes. Aucune antibioprophylaxie n’est justifiée en routine.' },
    { titre: 'Pendant le geste', texte: 'Contact verbal maintenu avec le patient — c’est le monitorage le plus sensible d’une toxicité débutante. Doppler sur le trajet, aspiration avant chaque fraction, injection lente par 2–3 mL, visualisation continue de la pointe. Arrêt immédiat devant une douleur fulgurante, une résistance anormale, un gonflement nerveux, une absence de diffusion visible ou tout signe neurologique inhabituel.' },
    { titre: 'Après le geste : surveillance, sortie, compte rendu', texte: 'Compression du point de ponction, pansement, **surveillance en salle de repos** (voir *Variantes*) avec évaluation de la douleur et recherche d’un déficit avant la sortie. Remise des **consignes écrites**. Rédaction du compte rendu dans la foulée, avec les images, pendant que le détail est frais : un compte rendu écrit trois jours après est un compte rendu approximatif.' },
  ],

  injectat: `Ce chapitre n’a pas d’injectat propre. Ce qui doit être **disponible dans la salle**, en revanche, ne dépend pas du geste réalisé.

| Produit / matériel | Pour quoi | Repère de posologie | Commentaire |
|---|---|---|---|
| Émulsion lipidique 20 % | Toxicité systémique des anesthésiques locaux | < 70 kg : bolus **1,5 mL/kg** (poids idéal) en 2–3 min puis perfusion **0,25 mL/kg/min** ; > 70 kg : bolus **100 mL** en 2–3 min puis **200–250 mL** sur 15–20 min. Si l’instabilité persiste : **répéter le bolus** et doubler le débit. Plafond usuel **≈ 12 mL/kg** | Prévoir au moins 500 mL par adulte, posologie **affichée au mur**, péremption vérifiée |
| Oxygène + moyen de ventilation | Toute complication neurologique ou cardiovasculaire | O₂ 100 % | Premier geste de la check-list LAST |
| Benzodiazépine injectable | Convulsions | Titration | Éviter le propofol chez un patient instable |
| Adrénaline | Arrêt circulatoire, choc anaphylactique | En cas de LAST : bolus **réduits**, ≤ 1 µg/kg | Doses habituelles de réanimation dans l’anaphylaxie |
| Atropine, remplissage vasculaire | Malaise vagal sévère, bradycardie | Selon le tableau | La plupart des vagaux cèdent au décubitus et aux jambes surélevées |
| Antihistaminique, corticoïde IV | Réaction allergique | Selon le tableau | Rare avec les amino-amides : suspecter d’abord conservateurs et antiseptiques |
| Kit de compression, glace | Hématome superficiel | Compression 5–10 min | Sites compressibles : c’est le traitement |
| Moyen d’appel et procédure de transfert | Toute urgence | — | À afficher : qui on appelle, comment, vers où |

**Ce qui n’est pas nécessaire** : antibioprophylaxie systématique, bilan d’hémostase systématique chez un patient sans point d’appel, arrêt réflexe des antithrombotiques pour un geste à faible risque hémorragique.`,

  variantes: [
    { titre: 'Antiagrégants et anticoagulants — la stratification ASRA-ESRA 2018', texte: `La référence est **Narouze S, Benzon HT, Provenzano D, et al., *Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition)*, Reg Anesth Pain Med 2018 (doi 10.1097/AAP.0000000000000700)**. Sa logique tient en une phrase : **c’est le geste, pas le patient, qui définit la classe de risque**, et la décision d’interrompre se prend en balançant ce risque hémorragique contre le risque thrombotique propre au patient, **avec le prescripteur** et non à sa place.

**Trois classes de risque hémorragique**

| Classe | Exemples (à reconfronter au texte source) | Conduite usuelle |
|---|---|---|
| **Faible** | Blocs nerveux périphériques, infiltrations articulaires périphériques, points-gâchettes, bloc du nerf grand occipital, sacro-iliaque, blocs de paroi, la quasi-totalité des gestes échoguidés périphériques | **Pas d’interruption** des antiagrégants ; anticoagulants poursuivis dans la plupart des cas, au cas par cas |
| **Intermédiaire** | Gestes épiduraux interlaminaires, **caudaux** et transforaminaux, blocs **paravertébraux**, branches médiales et radiofréquence facettaire, blocs sympathiques (stellaire, sympathique lombaire, hypogastrique, plexus cœliaque), gestes intradiscaux | Décision partagée ; interruption des anticoagulants selon les délais ci-dessous ; aspirine souvent poursuivie |
| **Élevé** | Stimulation médullaire (test et implantation), cathéter et pompe intrathécaux, vertébroplastie et cyphoplastie, décompression percutanée, épiduroscopie | Interruption des antithrombotiques selon les délais, y compris de l’aspirine |

**Délais d’interruption — aide-mémoire, à reconfronter au texte original avant tout protocole de service**

| Molécule | Geste à faible risque | Geste à risque intermédiaire ou élevé | Reprise |
|---|---|---|---|
| Aspirine (75–325 mg) | **Pas d’arrêt** | Poursuivie le plus souvent en risque intermédiaire ; **4 à 6 jours** pour le risque élevé | 24 h |
| Clopidogrel | **Pas d’arrêt** | **7 jours** | 12–24 h |
| Prasugrel | **Pas d’arrêt** | 7–10 jours | 24 h |
| Ticagrelor | **Pas d’arrêt** | 5–7 jours | 24 h |
| AINS | **Pas d’arrêt** | Poursuivis en risque intermédiaire ; arrêt selon la demi-vie pour le risque élevé (1 jour pour l’ibuprofène, 4 jours pour le piroxicam et les demi-vies longues) | 24 h |
| ISRS / IRSNa | **Pas d’arrêt** | Poursuivis ; effet antiagrégant faible, à prendre en compte en cas d’association | — |
| AVK (warfarine, fluindione) | Poursuivi, INR dans la zone thérapeutique | Arrêt **5 jours** et INR contrôlé le jour du geste : **≤ 1,2 pour le risque élevé**, normalisé (≤ 1,4) pour l’intermédiaire | 24 h |
| HBPM dose prophylactique | Poursuivie | **12 h** | 12–24 h |
| HBPM dose curative | Décision partagée | **24 h** | 24 h |
| HNF sous-cutanée / intraveineuse | Poursuivie | 6 h (SC) / 4–6 h (IV), TCA normalisé | 2–4 h (IV) |
| Dabigatran | Poursuivi | **4 à 5 jours** selon la clairance de la créatinine (4 j si ClCr ≥ 80 mL/min, 5 j si 50–79, jusqu’à 6 j si 30–49) | 24 h |
| Rivaroxaban, apixaban, edoxaban | Poursuivis | **3 jours** (règle des 5 demi-vies) | 24 h |

**Points qui font la différence en pratique**
- **Ne pas arrêter par réflexe.** Pour un bloc suprascapulaire, une infiltration de genou ou un bloc de paroi, l’arrêt d’un antiagrégant chez un coronarien stenté est un risque net et gratuit.
- **Ne jamais décider seul** d’interrompre un anticoagulant : l’indication (fibrillation atriale à haut score, valve mécanique, maladie thrombo-embolique récente, stent récent) appartient au prescripteur. Tracer l’avis obtenu.
- **Un relais par HBPM** peut être discuté en cas de risque thrombotique élevé — décision du cardiologue ou du médecin traitant, pas de l’algologue.
- **Pas de bilan d’hémostase systématique** chez un patient sans point d’appel clinique ni traitement modifiant l’hémostase.
- **Mise à jour à connaître** : les recommandations ASRA sur l’**anesthésie locorégionale** ont été révisées en janvier 2025 (cinquième édition, Kopp et al.), avec notamment des seuils de concentration plasmatique pour les AOD. Elles concernent l’anesthésie locorégionale et la neuraxiale, **pas** les procédures interventionnelles de la douleur, qui restent régies par le texte de 2018 — ne pas mélanger les deux référentiels.` },
    { titre: 'Complications : conduite à tenir immédiate', texte: `**Malaise vagal.** La complication la plus fréquente en pratique interventionnelle : incidence de l’ordre de **1 à 8 %** selon les séries, plus élevée pour les gestes cervicaux que lombaires. Facteurs de risque : sujet jeune, sexe masculin, antécédent de réaction vagale. Prévention : décubitus, information, éviter le jeûne prolongé, ne pas laisser le patient assis pour un geste qui peut se faire couché. Traitement : décubitus dorsal, jambes surélevées, remplissage si besoin, atropine si bradycardie persistante. Chez un patient ayant déjà réagi, une sédation légère prévient efficacement la récidive — à mettre en balance avec les contraintes de sortie en HDJ.

**Toxicité systémique des anesthésiques locaux (LAST).** Arrêt de l’injection, appel à l’aide, oxygène 100 %, benzodiazépine si convulsions, **émulsion lipidique 20 %** selon la check-list ASRA 2020 — bolus 1,5 mL/kg puis 0,25 mL/kg/min, bolus répétable si l’instabilité persiste, plafond usuel ≈ 12 mL/kg (posologies détaillées dans la section *Injectat*) —, adrénaline à doses réduites (bolus ≤ 1 µg/kg), éviter vasopressine, inhibiteurs calciques, bêtabloquants et tout nouvel anesthésique local. Envisager l’assistance circulatoire en cas de réfractarité. Surveillance prolongée : le tableau peut débuter **15 à 30 minutes** après la fin de l’injection. Détail complet dans le chapitre *Pharmacologie des injectables*.

**Injection intravasculaire.** Signes : absence de nappe visible à l’écran alors qu’on injecte, apparition de signes systémiques, goût métallique. Conduite : arrêt immédiat, repositionnement, réaspiration, surveillance. La prévention tient à trois gestes — Doppler préalable sur le trajet, aspiration avant chaque fraction, injection fractionnée et lente. L’aspiration négative ne prouve rien avec un vaisseau de petit calibre.

**Ponction pleurale et pneumothorax.** Geste de paroi thoracique, sus-claviculaire, scapulaire ou thoraco-lombaire : identifier la ligne pleurale et son glissement avant de piquer, trajectoire tangentielle, butée osseuse quand elle existe (côte). En cas de suspicion — douleur pleurale brutale, toux, dyspnée : arrêt, surveillance, recherche échographique de l’abolition du glissement pleural et du *lung point*, radiographie, avis. Un pneumothorax peut se révéler à distance : le patient doit avoir la consigne de consulter en cas de dyspnée ou de douleur thoracique dans les heures suivantes.

**Hématome.** Sur un site compressible : compression manuelle 5 à 10 minutes, glace, surveillance, information. Sur un site profond ou clos : surveillance neurologique rapprochée, imagerie au moindre déficit, avis chirurgical. C’est cette distinction, et elle seule, qui justifie la stratification du risque hémorragique.

**Infection.** Rare mais grave. Tout tableau de douleur croissante, de fièvre ou d’articulation chaude dans les jours ou semaines suivant un geste doit faire évoquer une infection **avant** d’évoquer une poussée — délai moyen d’apparition d’environ deux semaines dans les séries, germe dominant *Staphylococcus aureus*. Ponction et mise en culture avant toute antibiothérapie ; ne pas re-infiltrer.

**Lésion nerveuse.** Le risque persiste malgré l’échoguidage : les avis de pratique de l’ASRA sur les complications neurologiques rappellent que l’injection intraneurale est plus fréquente qu’on ne le pensait, sans se traduire systématiquement par une lésion. Signes d’alerte : douleur fulgurante à la progression ou à l’injection, résistance anormale, gonflement du nerf. Conduite : arrêt immédiat, retrait de 1–2 mm, examen neurologique documenté avant la sortie, information du patient, réévaluation à 48 h puis à J15, avis neurologique et électromyogramme si le déficit persiste au-delà de quelques jours. **Tracer l’événement le jour même** : un déficit découvert plus tard sans trace initiale est indéfendable.

**Flush stéroïdien et poussée douloureuse.** Bénins, fréquents, régressifs en 1 à 3 jours ; ils justifient une information préalable et non un appel en urgence. Voir le chapitre *Pharmacologie des injectables*.` },
    { titre: 'Surveillance post-geste et consignes de sortie', texte: `**Durée de surveillance.** Il n’existe pas de durée réglementaire pour un geste antalgique périphérique ; l’usage raisonnable en HDJ est de **20 à 30 minutes** après un geste simple sans sédation, davantage après un bloc à volume significatif, après un geste proche de la plèvre, en cas de réaction vagale, ou chez un patient fragile. La surveillance est active : douleur, tolérance, examen neurologique du territoire concerné, point de ponction.

**Critères de sortie**, à cocher explicitement : conscience et hémodynamique normales, douleur contrôlée, absence de déficit non attendu ou déficit attendu compris et accepté (bloc moteur transitoire), point de ponction sec, patient capable de se lever et de marcher, consignes remises et comprises, accompagnant présent si nécessaire. Les recommandations françaises sur l’anesthésie locorégionale périnerveuse admettent une sortie **avant la levée complète du bloc**, à condition que l’information et la protection du membre anesthésié soient assurées : c’est le point à sécuriser, car c’est là que se produisent les brûlures et les traumatismes passés inaperçus.

**Consignes écrites remises au patient**, en clair :
- ce qui est **normal** : douleur au point de ponction 24–48 h, poussée douloureuse transitoire, flush, bloc moteur ou sensitif transitoire avec sa durée attendue, hyperglycémie chez le diabétique ;
- ce qui **doit faire appeler** : fièvre, rougeur ou écoulement au point de ponction, douleur croissante au-delà de 48 h, déficit moteur ou sensitif persistant, dyspnée ou douleur thoracique (geste thoracique), céphalée inhabituelle ;
- les **précautions** : protection du membre bloqué, pas de conduite tant que persiste un bloc moteur ou une sédation, pas de charge lourde le jour même, reprise du traitement antithrombotique interrompu avec la date précise ;
- **qui appeler et comment**, jour et nuit, avec le numéro et la conduite en cas d’absence de réponse ;
- la **date de réévaluation** et ce qu’on lui demandera de noter d’ici là (échelle numérique, sommeil, consommation d’antalgiques).` },
    { titre: 'Le compte rendu : structure minimale', texte: `Un compte rendu de geste interventionnel doit permettre à un tiers de reconstituer ce qui a été fait, et à soi-même de décider du geste suivant. Structure minimale :

1. **Identité, date, opérateur**, lieu de réalisation.
2. **Indication** : diagnostic, ancienneté, traitements antérieurs et leurs résultats, échelle de douleur avant le geste.
3. **Information et consentement** : mention datée de l’entretien, document remis, accord recueilli.
4. **Vérifications** : allergies, antithrombotiques et décision retenue (avec l’avis du prescripteur si interruption), glycémie chez le diabétique, absence d’infection.
5. **Technique** : position du patient, sonde et fréquence, approche (dans le plan / hors du plan), calibre et longueur d’aiguille, cible atteinte, repères échographiques utilisés, contrôle Doppler.
6. **Produits** : molécule, concentration, volume, **dose en milligrammes**, pour chaque produit — y compris l’anesthésie cutanée. Mention explicite du caractère particulaire ou non du corticoïde quand le site l’exige, et du caractère hors AMM le cas échéant.
7. **Critère de fin** : diffusion observée, description de la nappe.
8. **Images** : au moins une image de repérage annotée et une image de fin avec la pointe et la diffusion, archivées dans le dossier.
9. **Suites immédiates** : durée de surveillance, échelle de douleur à 30 minutes, examen neurologique, incidents éventuels.
10. **Consignes remises** et **date de réévaluation**.

C’est aussi ce qui rend le geste descriptible et défendable en cas de contrôle : un acte sans image, sans dose et sans critère de fin est un acte qu’on ne peut ni justifier ni reproduire.` },
    { titre: 'Hygiène des sondes et radioprotection', texte: `**Hygiène des sondes.** Pour un geste percutané : **housse stérile + gel stérile unidose**, puis **désinfection de niveau intermédiaire** de la sonde après l’acte — le niveau retenu par les préconisations nationales françaises de mars 2019 (efficacité bactéricide, fongicide, virucide et mycobactéricide, hors spores) : lingettes désinfectantes validées ou procédé automatisé. Une housse intacte en fin d’examen conditionne le niveau de traitement, elle ne le dispense pas. Traçabilité du retraitement et procédure écrite affichée dans la salle : c’est un point de contrôle attendu. Vérifier la compatibilité des produits avec la sonde selon le fabricant ; une sonde fissurée n’est plus désinfectable et doit être retirée du service.

**Radioprotection : sans objet.** L’échographie n’émet aucun rayonnement ionisant. Aucune obligation de dosimétrie, de tablier plombé, de zonage, de formation à la radioprotection ni de justification au titre de la directive Euratom pour une activité purement échoguidée. C’est un avantage structurel de ce mode de guidage — repérages longs, gestes répétés, femme enceinte — et il faut le dire tel quel plutôt que d’appliquer par mimétisme des contraintes de salle de radiologie interventionnelle. La question ne se repose que le jour où le centre ajoute un amplificateur de brillance : à ce moment-là, tout le corpus de radioprotection s’applique et doit être construit **avant** l’installation de l’appareil.` },
  ],

  pearls: [
    'La classe de risque hémorragique dépend du **site**, pas du produit ni du calibre d’aiguille : presque tout ce mémo est à faible risque, donc sans interruption des antithrombotiques.',
    'Ne jamais décider seul d’arrêter un anticoagulant : demander l’avis du prescripteur et le tracer. Le risque thrombotique n’est pas le vôtre à prendre.',
    'Le time-out se dit à voix haute : c’est l’énonciation, pas la case cochée, qui rattrape les erreurs de côté et de produit.',
    'Faire parler le patient pendant l’injection : c’est le monitorage le plus sensible d’une toxicité débutante.',
    'Un examen neurologique documenté avant la sortie transforme un litige potentiel en dossier défendable.',
    'Consignes de sortie écrites, avec ce qui est normal, ce qui doit faire appeler et qui appeler : la moitié des appels post-geste disparaissent.',
    'Rédiger le compte rendu dans la foulée du geste, avec les images : trois jours plus tard, il ne contient plus les détails qui comptent.',
  ],
  pieges: [
    'Arrêter les antiagrégants « par précaution » avant un bloc superficiel : on crée un risque thrombotique réel pour prévenir un hématome compressible.',
    'Confondre les référentiels : les recommandations ASRA de 2025 concernent l’anesthésie locorégionale et la neuraxiale ; les procédures interventionnelles de la douleur relèvent du texte ASRA-ESRA de 2018.',
    'Faire signer un formulaire sans entretien ni délai de réflexion : la signature ne remplace ni l’information orale ni la mention datée dans le dossier.',
    'Prendre un tableau infectieux post-geste pour une poussée douloureuse : le délai moyen est d’environ deux semaines et le retard diagnostique fait le pronostic.',
    'Laisser sortir un patient avec un bloc moteur sans consigne de protection du membre : brûlures et traumatismes passent inaperçus jusqu’à la levée.',
    'Un bilan d’hémostase systématique chez un patient sans point d’appel : coûteux, inutile, et faussement rassurant.',
    'Réaliser un geste de paroi thoracique sans avoir identifié la plèvre et son glissement avant la ponction.',
  ],
  complications: [
    '**Malaise vagal** (1 à 8 % selon les séries, davantage en cervical) : décubitus, jambes surélevées, remplissage, atropine si bradycardie persistante ; sédation légère envisageable en cas de récidive documentée.',
    '**Toxicité systémique des anesthésiques locaux** : arrêt, O₂ 100 %, benzodiazépine, émulsion lipidique 20 %, adrénaline à doses réduites, surveillance prolongée — début possible 15 à 30 min après la fin de l’injection.',
    '**Injection intravasculaire** : absence de nappe visible à l’injection, signes systémiques ; arrêt, repositionnement, surveillance. L’aspiration négative ne prouve rien sur un petit vaisseau.',
    '**Pneumothorax** : gestes thoraciques, sus-claviculaires, scapulaires, thoraco-lombaires ; abolition du glissement pleural, radiographie, surveillance, consigne de reconsultation en cas de dyspnée retardée.',
    '**Hématome** : compression et surveillance sur site compressible ; surveillance neurologique et imagerie sans délai sur site profond ou clos.',
    '**Infection** : délai moyen d’environ deux semaines, *Staphylococcus aureus* dominant, facteurs de risque diabète, immunodépression, âge, gestes répétés. Prélever avant d’antibiotiquer, ne pas ré-infiltrer.',
    '**Lésion nerveuse** : douleur fulgurante, résistance à l’injection, gonflement du nerf ; arrêt, retrait, examen neurologique documenté, réévaluation à 48 h et J15, EMG si le déficit persiste.',
    '**Flush stéroïdien, poussée douloureuse, hyperglycémie** : bénins et fréquents, à annoncer avant le geste pour éviter l’appel en urgence.',
    '**Réaction allergique** : rare avec les amino-amides ; suspecter conservateurs, antiseptiques, latex. Chariot d’urgence et adrénaline disponibles.',
  ],
  securite: [
    'Consentement éclairé recueilli après entretien oral, document remis, délai de réflexion respecté, mention datée dans le dossier — la preuve incombe au professionnel.',
    'Time-out lu à voix haute avant la première ponction : identité, geste, côté et niveau confirmés avec le patient, allergies, antithrombotiques, produits étiquetés vérifiés.',
    'Stratification du risque hémorragique selon ASRA-ESRA 2018 ; pas d’interruption des antithrombotiques pour les gestes à faible risque ; toute interruption décidée avec le prescripteur et tracée.',
    'Émulsion lipidique 20 % présente et non périmée, posologie affichée, chariot d’urgence vérifié, procédure de transfert connue.',
    'Asepsie : détersion-désinfection en deux temps, séchage, gants stériles, housse stérile et gel stérile unidose ; désinfection de niveau intermédiaire de la sonde après l’acte, tracée.',
    'Plèvre ou péritoine identifiés avant tout geste de paroi ; Doppler sur le trajet complet avant chaque ponction.',
    'Surveillance post-geste avec examen neurologique et critères de sortie explicites ; consignes écrites remises et comprises.',
    'Radioprotection sans objet en échoguidage pur — mais tout le corpus s’applique dès l’ajout d’un amplificateur de brillance.',
  ],

  suivi: `- **Avant la sortie (J0)** : échelle numérique avant / 30 min après, examen neurologique du territoire, point de ponction, critères de sortie cochés, consignes remises et comprises, date de réévaluation fixée.
- **48 h** : fenêtre des effets indésirables attendus (poussée douloureuse, flush, hyperglycémie). Un appel systématique à J1 ou J2 après les premiers gestes d’un centre en démarrage est un excellent investissement : il détecte les complications précoces et il calibre les consignes.
- **J15–J30** : effet du geste à son plateau. Décision de répétition, de changement de cible ou d’escalade.
- **Suivi de l’activité, à l’échelle du centre** : tenir un registre simple des événements indésirables (vagaux, ponctions vasculaires, gestes abandonnés, infections, déficits) et le relire tous les trimestres. C’est ce qui permet de corriger une pratique avant qu’un incident ne devienne un dossier — et c’est ce qu’une visite de certification demandera.
- **Revue des documents** : document d’information, check-list, fiche de sortie et compte rendu type sont des documents vivants, à réviser annuellement et à chaque évolution des recommandations.`,

  evidence: `- **Consentement et information : cadre juridique, pas niveau de preuve.** L’article L.1111-2 du code de la santé publique impose l’information orale sur les risques fréquents ou graves normalement prévisibles et les alternatives, et met la **charge de la preuve sur le professionnel**. Les recommandations de bonnes pratiques de la HAS sur la délivrance de l’information complètent ce socle. Rien à discuter, tout à tracer.
- **Check-list et time-out : preuve robuste au bloc opératoire, extrapolée hors bloc.** Le bénéfice des check-lists sur la morbi-mortalité est établi en chirurgie ; leur adoption dans les espaces interventionnels non chirurgicaux reste irrégulière alors que les facteurs de risque y sont spécifiques (équipe moins soudée, éloignement des renforts, environnement inhabituel). La HAS met à disposition une check-list générique personnalisable — c’est le point de départ raisonnable pour un plateau d’HDJ.
- **Antithrombotiques : recommandations d’experts, pas d’essais.** Le texte ASRA-ESRA 2018 (Narouze et al.) est explicitement fondé sur une revue de la littérature et un consensus, non sur des essais randomisés — ses auteurs le disent. Sa valeur tient à la **stratification par geste**, qui a mis fin à l’application aveugle des règles de l’anesthésie neuraxiale aux gestes périphériques. Sa mise à jour pour l’anesthésie locorégionale (cinquième édition, Kopp et al., 2025) ne s’applique pas aux procédures interventionnelles de la douleur : ne pas confondre les deux.
- **Réactions vagales : données observationnelles convergentes** — incidence de 1 à 8 %, plus élevée en cervical qu’en lombaire, facteurs de risque identifiés (jeune âge, sexe masculin, antécédent), et efficacité rapportée de la sédation en prévention de la récidive dans des séries. Preuve **faible à modérée**, suffisante pour organiser la prévention.
- **Infections : séries et registres.** Incidence très faible sur les gestes rachidiens (de l’ordre de 0,01 % dans une série nationale), abcès épidural comme forme dominante, *Staphylococcus aureus* comme germe principal, délai moyen d’environ deux semaines, facteurs de risque classiques. Aucune donnée robuste ne soutient une antibioprophylaxie de routine.
- **Complications neurologiques : avis de pratique.** Le deuxième avis de pratique de l’ASRA (Neal, Barrington et al., 2015) reste la synthèse de référence : les lésions neurologiques associées à l’anesthésie régionale et aux gestes de la douleur sont **extrêmement rares**, l’injection intraneurale est plus fréquente qu’on ne le pensait sans se traduire systématiquement par une lésion, et l’échoguidage réduit certains risques sans les abolir.
- **Toxicité systémique des anesthésiques locaux** : la check-list ASRA 2020 est le document opérationnel de référence ; les doses d’émulsion lipidique y sont fixées et la précocité prime sur l’optimisation de la voie d’administration.
- **Trou de la littérature à signaler** : il n’existe pas, à notre connaissance, de recommandation française spécifique consacrée à la sécurité des gestes d’**algologie interventionnelle échoguidée en hôpital de jour**. On assemble donc un cadre à partir du droit commun (HAS, code de la santé publique), de l’hygiène (préconisations nationales 2019), de l’anesthésie locorégionale (SFAR) et des textes ASRA-ESRA. Ce chapitre est cet assemblage, et il doit être relu à chaque mise à jour de l’un de ces textes.`,

  references: [
    { auteurs: 'Narouze S, Benzon HT, Provenzano D, et al.', titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition): guidelines from the ASRA, ESRA, AAPM, INS, NANS and WIP', revue: 'Reg Anesth Pain Med', annee: '2018', doi: '10.1097/AAP.0000000000000700', type: 'reco', verif: true, note: 'Le texte de référence : stratification faible / intermédiaire / élevé par geste et délais d’interruption.' },
    { auteurs: 'Kopp SL, Vandermeulen E, McBane RD, Perlas A, Leffert L, Horlocker T', titre: 'Regional anesthesia in the patient receiving antithrombotic or thrombolytic therapy: American Society of Regional Anesthesia and Pain Medicine evidence-based guidelines (fifth edition)', revue: 'Reg Anesth Pain Med', annee: '2025', pmid: '39880411', type: 'reco', verif: true, note: 'Concerne l’ALR et la neuraxiale, **pas** les procédures interventionnelles de la douleur — ne pas confondre les référentiels.' },
    { auteurs: 'Neal JM, Barrington MJ, et al.', titre: 'The second ASRA practice advisory on neurologic complications associated with regional anesthesia and pain medicine: executive summary 2015', revue: 'Reg Anesth Pain Med', annee: '2015', url: 'https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2015/12/08/the-second-asra-practice-advisory-on-neurologic-complications-associated-with-regional-anesthesia-and-pain-medicine', type: 'reco', verif: true },
    { titre: 'American Society of Regional Anesthesia and Pain Medicine local anesthetic systemic toxicity checklist: 2020 version', annee: '2020', pmid: '33148630', type: 'reco', verif: true, note: 'Séquence de prise en charge et posologies de l’émulsion lipidique 20 %.' },
    { titre: 'Article L1111-2 du code de la santé publique — droit à l’information de la personne sur son état de santé', revue: 'Légifrance', url: 'https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000041721051', type: 'texte réglementaire', verif: true, note: 'Contenu de l’information, alternatives, et charge de la preuve incombant au professionnel.' },
    { titre: 'La check-list générique « sécurité du patient au bloc opératoire »', revue: 'Haute Autorité de Santé', url: 'https://www.has-sante.fr/jcms/p_3419374/fr/la-check-list-generique-securite-du-patient-au-bloc-operatoire', type: 'reco', verif: true, note: 'Document personnalisable, base d’une check-list de plateau interventionnel hors bloc.' },
    { titre: 'Recommandations formalisées d’experts — anesthésie loco-régionale périnerveuse (ALR-PN)', revue: 'SFAR', annee: '2019', url: 'https://sfar.org/wp-content/uploads/2019/10/rfe-anesthesie-loco-regionale-perinerveuse.pdf', type: 'reco', verif: true, note: 'Surveillance, sédation associée, conditions de sortie avant levée complète du bloc.' },
    { titre: 'Prévention du risque infectieux associé aux actes d’échographie — préconisations du groupe de travail national, mars 2019', revue: 'SF2H / Mission nationale', annee: '2019', url: 'https://www.sf2h.net/k-stock/data/uploads/2019/04/Preconisations_Mission_Nationale_Sonde-Endocavitaire_Vallidees_Mars_2019.pdf', type: 'reco', verif: true, note: 'Désinfection de niveau intermédiaire après chaque acte à risque, protection de sonde, gel stérile unidose.' },
    { titre: 'FactFinders for patient safety: preventing potential procedure-related complications — vasovagal reactions and spinal cord stimulator lead migration', revue: 'Interventional Pain Medicine', annee: '2023', type: 'synthèse', verif: false, note: 'Source de l’incidence des réactions vagales (1 à 8 %) ; revue, année et pagination à confirmer.' },
    { titre: 'Diagnosis and management of infections related to spinal pain interventions', revue: 'Anesth Pain Med (Seoul)', type: 'revue', verif: false, note: 'Incidence, abcès épidural, S. aureus, délai d’apparition ; année et référence exacte à confirmer.' },
  ],
  videos: [
    { titre: 'Regional anesthesia in anticoagulated patients', source: 'NYSORA', url: 'https://www.nysora.com/topics/sub-specialties/regional-anesthesia-in-anticoagulated-patients/', note: 'Synthèse des délais d’interruption' },
    { titre: 'Interventional spine and pain procedures in patients on antiplatelet and anticoagulant medications (second edition)', source: 'ASRA Pain Medicine', url: 'https://asra.com/news-publications/asra-updates/blog-landing/guidelines/2022/12/14/interventional-spine-and-pain-procedures-in-patients-on-antiplatelet-and-anticoagulant-medications-(second-edition)', note: 'Page de la recommandation de 2018' },
    { titre: 'Les check-lists pour la sécurité du patient', source: 'Haute Autorité de Santé', url: 'https://www.has-sante.fr/jcms/c_1518984/fr/les-check-lists-pour-la-securite-du-patient' },
  ],

  scenes: [
    {
      id: 'sec-doppler', section: 'sonoanatomie', titre: 'Cartographier le trajet, pas seulement la cible',
      legende: 'Deux fenêtres possibles pour la même cible. La première traverse une artère repérée au Doppler : elle est abandonnée avant la ponction, pas corrigée pendant. La seconde aborde la cible du côté opposé au vaisseau. Le Doppler se passe sur le trajet complet, à PRF basse, avant d’ouvrir le champ.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe transversale', type: 'linéaire, Doppler puissance' });
        S.skin({ thickness: 8, fatBelow: 22 });
        S.fascia({ points: [[0, 77], [640, 75]], width: 1.6 });
        S.muscle({ path: 'M0 76 L640 76 L640 296 L0 304 Z', label: 'Muscle', at: [84, 268], opacity: 0.4 });
        S.artery({ x: 300, y: 186, r: 17, label: 'Artère sur le trajet', lx: 300, ly: 138, small: true, lead: [300, 170] });
        S.vein({ x: 236, y: 196, rx: 20, ry: 13, label: 'Veine', lx: 176, ly: 234, anchor: 'end', small: true, lead: [228, 208] });
        S.nerve({ x: 424, y: 228, rx: 19, ry: 14, label: 'Cible', lx: 540, ly: 200, anchor: 'start', small: true, lead: [444, 222] });
        S.bone({ path: 'M0 308 Q200 298 340 302 Q500 306 640 298' });
        S.needle({ from: [20, 84], to: [402, 232], label: 'Trajet abandonné' });
        S.needle({ from: [628, 100], to: [446, 224], label: 'Fenêtre retenue', delay: 2.0 });
        S.spreadPath({ path: 'M370 230 A54 27 0 1 0 478 230 A54 27 0 1 0 370 230 Z M400 228 A24 18 0 1 1 448 228 A24 18 0 1 1 400 228 Z', at: [424, 290], label: 'Diffusion autour de la cible', delay: 3.4 });
      },
    },
    {
      id: 'sec-plevre', section: 'technique', titre: 'Paroi thoracique : la plèvre se repère avant de piquer',
      legende: 'Les côtes encadrent l’espace intercostal et projettent leur ombre ; entre elles, la ligne pleurale est animée du glissement respiratoire. L’aiguille reste tangentielle dans le plan musculaire, butée osseuse en appui quand elle existe, et ne descend jamais vers la fenêtre intercostale. En cas de doute post-geste : recherche de l’abolition du glissement pleural.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe sagittale, perpendiculaire aux côtes', type: 'linéaire' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.fascia({ points: [[0, 73], [640, 71]], width: 1.6 });
        S.muscle({ path: 'M0 72 L640 72 L640 172 L0 180 Z', label: 'Plans musculaires de la paroi', at: [180, 124], opacity: 0.42 });
        S.fascia({ points: [[0, 180], [640, 172]], width: 2 });
        S.bone({ path: 'M28 208 Q106 182 184 206', label: 'Côte', at: [106, 168], small: true });
        S.bone({ path: 'M456 206 Q534 182 612 208', label: 'Côte', at: [534, 168], small: true });
        S.lung({ path: 'M196 262 L444 262 L444 420 L196 420 Z', label: 'Poumon', at: [320, 340] });
        S.pleura({ points: [[198, 257], [320, 255], [442, 257]], label: 'Ligne pleurale (glissement)', at: [320, 292], small: true });
        S.target({ x: 320, y: 178, r: 22 });
        S.needle({ from: [10, 96], to: [296, 176], label: 'Trajet tangentiel dans le plan' });
        S.spread({ x: 322, y: 178, rx: 66, ry: 12, label: 'Diffusion dans le plan' });
      },
    },
    {
      id: 'sec-intravasculaire', section: 'technique', titre: 'Injection intravasculaire : le signe est l’absence de signe',
      legende: 'Quand la pointe est dans un vaisseau, on injecte et rien n’apparaît dans les tissus : pas de nappe, pas de décollement. C’est un critère d’arrêt immédiat, indépendant de l’aspiration — négative dans un vaisseau de petit calibre. Injection fractionnée par 2–3 mL et contact verbal maintenu pendant toute la séquence.',
      opts: { depth: 4 },
      build: S => {
        S.orient({ left: 'Médial', right: 'Latéral' }).probeInfo({ plan: 'Coupe transversale', type: 'in-plane' });
        S.skin({ thickness: 8, fatBelow: 20 });
        S.fascia({ points: [[0, 73], [640, 71]], width: 1.6 });
        S.muscle({ path: 'M0 72 L640 72 L640 288 L0 296 Z', label: 'Muscle', at: [92, 262], opacity: 0.4 });
        S.artery({ x: 210, y: 190, r: 15, label: 'Artère', lx: 210, ly: 244, small: true, lead: [210, 206] });
        S.vein({ x: 350, y: 198, rx: 36, ry: 21, label: 'Veine', lx: 350, ly: 148, small: true, lead: [350, 178] });
        S.bone({ path: 'M0 300 Q200 290 340 294 Q500 298 640 290' });
        S.needle({ from: [630, 106], to: [372, 196], label: 'Pointe intravasculaire' });
        S.label({ x: 350, y: 268, text: 'Aucune nappe ne se forme\ndans les tissus → arrêt immédiat', cls: 'lbl-target', small: true });
      },
    },
  ],

  checklist: [
    'Consentement tracé : entretien oral daté, document remis, délai de réflexion respecté',
    'Time-out lu à voix haute : identité, geste, côté et niveau confirmés avec le patient, allergies, produits étiquetés',
    'Classe de risque hémorragique du geste identifiée (ASRA-ESRA 2018) et décision antithrombotique tracée, avec l’avis du prescripteur en cas d’interruption',
    'Émulsion lipidique 20 % présente, non périmée, posologie affichée ; chariot d’urgence vérifié ; procédure de transfert connue',
    'Plèvre ou péritoine identifiés avant tout geste de paroi ; Doppler passé sur le trajet complet',
    'Examen neurologique du territoire documenté avant la sortie',
    'Critères de sortie cochés et consignes écrites remises (ce qui est normal, ce qui doit faire appeler, qui appeler, reprise du traitement antithrombotique)',
    'Compte rendu rédigé le jour même avec images, doses en milligrammes et critère de fin',
  ],
});
