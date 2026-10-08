# Conduite à tenir — prochaine session (écrit le 4 octobre 2026)

Ce fichier dit où en est le mémo et dans quel ordre avancer. À lire en début de session, après
`CLAUDE.md`. Le mettre à jour en fin de session.

## Où on en est (8 octobre 2026)

- 64 fiches, toutes illustrées ; 119 images écho réelles appariées aux schémas.
- Coupes anatomiques : 87 tracées, 31 validées par Mat, 17 images non tracées en attente de décision. Compte
  exact : `node scripts/anat-check.js`.
- Régions relues par Mat : socle, tête-cou (bilan du 3 octobre), membre inférieur (bilan du 7 octobre : 10 validations,
  7 coupes tracées sur sa lecture, 6 images remplacées ou ajoutées), membre supérieur (bilan du 7 octobre : 14
  validations, 2 corrections, 3 coupes tracées sur sa lecture, 4 images remplacées — suprascapulaire, ulnaire ×2,
  rhizarthrose 2). Restent à relire : thorax, rachis-bassin, plus les coupes nouvelles ou corrigées de tête-cou et des
  deux membres (toutes `valide: false`). Sans réponse : long biceps 2 (remplacer par une injection in vivo ?).
- Liens externes : 63/64 fiches avec vidéo YouTube vérifiée, 53/64 avec page NYSORA.
- 213 références encore `verif: false`.
- Volet Diagnostic MSK (plan du 7 octobre) : pilote épaule clos le 8 octobre, sauf l'audio. Fiche complète `#/msk/epaule`
  déployée, non validée (12 coupes dont 9 illustrées, 12 pathologies), 32 questions en attente de Mat
  (`docs/msk/questions-epaule.md`) ; paquet `msk-epaule.apkg` de 152 cartes dans iCloud Drive → Écho MSK → anki ; audio
  bloqué par l'authentification NotebookLM (`nlm login`, à faire par Mat) ; première semaine écrite dans le dossier privé
  (`semaines/2026-W41.md`). Détail, coût et suite : voir G.

## Décisions de Mat qui s'imposent à toute session

1. Une coupe ne passe `valide: true` que sur sa coche. Jamais d'auto-validation.
2. Une figure dont les annotations contredisent l'anatomie, ou dont le trajet d'aiguille impliqué est
   invraisemblable, est écartée, pas réinterprétée (cas du stellaire, 22 septembre).
3. NYSORA : lien dans `videos`, jamais d'image dans le dépôt (le dépôt GitHub est public). Les pages
   servent de référence anatomique pour redessiner.
4. Vidéos : liens externes vérifiés exclusivement ; plus de vidéos générées (4 octobre).
5. Références : section toujours repliée à l'ouverture (4 octobre).
6. Pas de ligne d'attribution dans les messages de commit.
7. `git stash` interdit quand plusieurs sessions ou agents travaillent (fichiers non indexés des
   autres) : `git fetch origin && git rebase --autostash origin/main`.

## Ordre de travail

### A. Traiter chaque bilan que Mat colle (`/echo-anatomie --bilan`) — Fable 5.1, à la main

Pour chaque ligne du bilan :
- `OK` → `valide: true` dans `js/data/anat/<fiche>.js` (entrée repérée par `fig` et `panneau`).
- `OK — remarque` → appliquer la remarque (recapturer la planche, la lire), puis `valide: true`,
  et le dire à Mat.
- `À CORRIGER — texte` → corriger, recapturer, laisser `valide: false`, résumer ce qui a changé.
- `À CORRIGER — lien NYSORA seul` → lire la page NYSORA (WebFetch), comparer à la coupe, corriger ce
  qui diverge (position de la nappe, d'un muscle, d'une cible) ; si rien ne diverge clairement,
  poser la question précise à Mat plutôt que de deviner.
- `NON TRACÉE — décision : remplacer` → voir B.
- `NON TRACÉE — décision : laisser / illustration` → retirer la ligne `R(...)` de
  `js/data/anat/zz-refus.js`.
- `NON TRACÉE — décision : lecture (ex. « tibia à gauche »)` → tracer la coupe avec cette lecture
  (ligne « Certain — lecture donnée par Mat »), retirer le `R(...)`.
- Carte dont la coupe est retirée sur décision de Mat → supprimer l'entrée (ou le fichier si elle
  est seule) ; l'historique git garde tout.
Puis : `node scripts/build-index.js`, `node scripts/anat-check.js`, check-all, audit-axes, commit,
push. Rendre compte à Mat en citant ce qui a été validé, corrigé, retiré.

### B. Remplacer les images que Mat a demandé de remplacer — Fable 5.1, agents

Modèle de brief : celui du 3 octobre pour tête-cou (5 fiches, 1 agent). Par lot de 5 à 6 images,
jusqu'à 3 agents, chacun sur des fiches disjointes. Critères, dans l'ordre : annotations des auteurs
cohérentes avec l'anatomie et orientation établie par eux ; geste conforme à la technique de la
fiche ; ≥ 350 px utiles ; CC BY de préférence ; auteurs recoupés par l'`authorString` d'Europe
PMC, licence lue dans la balise `<license>`. Pas de candidate qui satisfait les deux premiers
critères → on garde l'ancienne et on le dit. Chaque remplacement : figure réécrite, ancienne
image `git rm`, coupe tracée (`valide: false`), ligne `R(...)` retirée, `Q(...)` ajoutées.
Coût mesuré : ≈ 1,5 point de quota Fable hebdomadaire par image.

### C. Passe sur les légendes des figures écho — Fable 5.1, 1 session

Une vingtaine de légendes affirment plus que leur source (plan, côté, sens d'aiguille) ou la
contredisent. Elles sont citées dans les cartes de `js/data/anat/zz-refus.js` (chercher « légende
actuelle »). Pour chacune : relire la légende d'origine (Europe PMC `fullTextXML`, balise `<fig>`)
et l'image, réécrire la légende du mémo pour qu'elle ne dise que ce que la source et l'image
montrent, en citant les auteurs entre guillemets quand l'axe vient de leur texte. Soumettre à Mat
les cas où la correction change le sens médical (rhizarthrose 1 : sens de l'aiguille ; Morton 2 :
pointe intralésionnelle ; intercostal 2 : plan d'injection plus profond que la fiche).

### D. Vérification bibliographique — Opus 5 suffit, plusieurs sessions

`/verif-biblio [région]` : 213 références `verif: false`. Une recherche par référence (Europe PMC
d'abord : `…/rest/search?query=TITLE:"…"`), confirmer avec DOI ou PMID vus, ou supprimer. Ordre :
membre sup., membre inf., rachis-bassin, tête-cou, thorax, socle. Limité par le budget de
recherches, pas par le quota.

### E. Quand Mat aura validé — Opus 5

- Export des planches d'enseignement : `node scripts/anat-export.js <fiche> <rang écho> sortie.png`
  n'accepte que CC BY (ou image personnelle) **et** `valide: true`. Faire un lot par région dans un
  dossier hors dépôt et le lui remettre.
- Colonne CCAM vérifiée sur ameli ; fiche flash imprimable d'une page. Notés depuis septembre.

### F. En attente d'une décision de Mat

- Passer le dépôt GitHub en privé (`gh repo edit SnorryXBT/echo-algologie --visibility private`) :
  il contient des images CC BY-NC-ND et BY-NC-SA, licites en privé seulement. Recommandé, réversible,
  sans effet sur le déploiement Cloudflare (envoi direct).
- Ses propres coupes d'HDJ (sans bandeau d'identité) : seule source qui lève à la fois la question
  des droits et celle de la résolution ; cadre à fixer avec ses associés.
- 3e nerf occipital : « à corriger » avec le seul lien NYSORA ; demander ce qui diverge (niveaux,
  position des nerfs, sens de l'aiguille).

### G. Volet Diagnostic MSK — Fable 5.1 pour la fiche, Opus 5 pour anki/audio

Plan `docs/superpowers/plans/2026-10-07-msk-diagnostic.md`, spec `docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md`
(écarts d'implémentation en fin de spec). Socle livré le 7 octobre (tâches 1 à 11) ; pilote épaule clos le 8 octobre
(tâches 13 et 14), sauf l'audio.

**État du pilote (8 octobre)**
- Fiche `js/data/msk/epaule.js` complète, déployée, `valide: false` : 12 coupes (10 points ESSR + 2 hors protocole),
  12 pathologies, 6 artefacts, 15 compétences. 32 questions pour Mat dans `docs/msk/questions-epaule.md` (réponse par
  numéro dans la conversation) ; `valide: true` sur sa seule parole.
- Paquet `msk-epaule.apkg` : 152 cartes (coupe 12, structure 70, pathologie 12, geste 12, piège 46), 47 images, vérifié
  (`check.py` code 0), copié dans le dossier privé et dans iCloud Drive → Écho MSK → anki. Import dans Avorio : Importer →
  Fichiers → iCloud Drive → Écho MSK → anki. Une réimportation met à jour en place (clés stables) et ajoute les 47 cartes
  neuves ; `coupe-1` est désormais le positionnement (texte seul), la bursite et l'anisotropie du squelette ont pris le
  contenu de la fiche. Si le paquet du socle (106 cartes) avait été importé, une carte reste orpheline, à supprimer à la
  main : « coupe 1, Coupe postérieure, espace quadrilatère (squelette) », sous-paquet Structures (remplacée par la coupe 11 ;
  question 21).
- Digest NotebookLM (`dist/msk/epaule-digest.md`, régénéré par l'export) : depuis le 8 octobre, pièges et terme anglais de
  chaque pathologie, question et réponse de chaque artefact ; le prompt du deep dive de `/msk-audio` cite les pièges.
- Audio (tâche 12 et étape 2 de la tâche 14) : non produit, NotebookLM demande une nouvelle connexion (`nlm login`, compte
  Google de Mat). Ensuite `/msk-audio epaule`, et noter ici la durée réelle de génération et le verdict sur le format « rappel ».
- Première semaine écrite par `/msk-semaine` : `~/Claude/Projects/Écho MSK/semaines/2026-W41.md` (mode fiche ; cibles
  c01 à c03 ; cas p01 et p02 ; paquet à importer). `/msk-cas` et `/msk-logbook`, qui attendent la dictée de Mat, ont été
  joués à blanc sur un dossier jetable : dictée piège (« Mme Dupont… ») refusée, code 2, rien d'écrit ; dictée reformulée
  écrite (palier c01 → 4, question en file puis fermée) ; cas p01 « su » (palier 0 → 2). Skills globales corrigées
  (semaine ISO calculée, compétence à plusieurs coupes, vignette de la fiche à reformuler, image recadrée) et réinstallées.

**Ce que Mat lance d'abord** (Claude Code, n'importe quel dossier)
1. `/msk-semaine` — le lundi, 2 min (W41 écrite ; prochaine le 2026-10-12) : plan de la semaine. Ne lui demande que les
   épisodes audio écoutés, quand il y en a ; avec `--bilan` (mensuel), ses sept notes OSAUS de 1 à 5 par région active.
2. `/msk-cas epaule` — le soir, 15 min : vignette d'HDJ fictive et image, une question (« que voyez-vous ? »), six tours
   au plus ; lui demande ses réponses, conclut « su » ou « pas su ».
3. `/msk-logbook` — après une journée d'HDJ, 3 min : lui demande sa dictée (région, nombre d'examens, combien dictés sans
   aide, structures trouvées ou non avec difficulté 1 à 3, questions) ; refuse tout nom, initiale, âge avec date, chambre,
   numéro, lieu ou profession, et demande alors une reformulation.

**Coût mesuré du pilote (tâche 13)** : quota hebdomadaire Fable 36 % → 48 %, tous modèles 25 % → 33 % ; ≈ 2,9 M tokens
en ≈ 5 h : sourçage ≈ 475 k Fable (≈ 1 h) ; rédaction A 316 k Fable, B 389 k Opus, C 367 k Opus ; assemblage 358 k Fable
(≈ 45 min) ; relecture 312 k Fable ; ronde de correction 372 k Opus ; re-relecture 298 k Sonnet. Génération audio : non
mesurée (bloquée).

**Rendement des images libres** : 9 coupes sur 12 illustrées (sans image : 1 positionnement, 4 structures antéro-médiales
et ligament coraco-acromial, 6 supra-épineux en position 2), 10 pathologies sur 12 ; 5 fichiers conservés sans référence
en attente de Mat (coupe-4, coupe-4b, coupe-5b, coupe-9, patho-calcification-supra-epineux).

**Règle de quota de Mat (7 octobre)** : plafond du chantier = 75 % de l'usage hebdomadaire Fable et 60 % du forfait tous
modèles ; usage vérifié avant chaque dispatch d'agent et chaque relecture ; seuil atteint → finir proprement la tâche en
cours (commit), ne rien lancer de plus, rendre la main avec l'état ; modèles moins coûteux (Opus, Sonnet) par défaut,
Fable seulement quand la tâche l'exige (jugement anatomique ou visuel, revue finale).

**Suite** : une région tous les dix jours environ, dans l'ordre genou, rachis, coude, poignet-main, hanche, cheville-pied,
paroi-nerfs ; pour chacune `/msk-fiche <region>` (sourçage commité avant rédaction, trois agents au plus, quota vérifié
avant), puis `/msk-anki <region>` et `/msk-audio <region>`. L'épaule est validée par Mat avant la production des autres
régions (spec §2) : ses réponses fixent les conventions reprises ensuite (pastilles osseuses, seuils, coupes hors protocole).

**En attente d'une décision de Mat**
- Les 32 questions de `docs/msk/questions-epaule.md`.
- Coupe 2, pastille 4 « Petit tubercule » : posée sur les parties molles qui couvrent le tubercule (y 0,37), ≈ 0,03 au-dessus
  de la corticale (pic de luminance à y 0,40) : à descendre si Mat adopte la convention corticale (question 25).
- `js/data/procedures/nerf-suprascapulaire.js` se contredit : l. 66, nerf « médial ou sous l'artère » ; l. 76
  (sono-anatomie), « médial à l'artère ». La coupe 12 de l'épaule reprend la première formule (question 28).
- Refus de « depuis 3 ans » par le garde-fou (âge ou durée en chiffres ; en-tête de `scripts/lib/phi-guard.js`).
- Étiquettes de l'écho 1 du nerf axillaire (Abril-Serván 2026, fig. 3C), déplacées le 7 octobre pour suivre la légende des
  auteurs (nerf sous la flèche, artère circonflexe postérieure sous la tête de flèche, col chirurgical sur la corticale) :
  elles servent à la coupe 11 de la fiche épaule et aux cartes qui en dérivent.

Le paquet Anki reste personnel : trois des cinq images des cartes socle (fiches gestes sous-acromiale, long-biceps,
gleno-humerale ; Chang 2026, J Med Ultrasound) sont en CC BY-NC-SA ou BY-NC-ND (balise de licence ambiguë) — ne pas le
partager, même aux associés.

## Quota

Au 3 octobre au soir : Fable 70 % de la semaine (réinitialisation le 7 octobre à 4 h), tous modèles
53 %. Une vague de 3 agents de coupes ≈ 6 points Fable ; une vague de remplacement d'images ≈ 1,5
point par image. Annoncer le coût avant toute vague ; Mat garde une marge pour ses consultations.

## Déploiement

`/deployer` est libre : tout ce que `index.html` référence est commité (vérifier :
`for f in $(grep -o 'src="[^"]*"' index.html | sed 's/src="//;s/"//'); do git ls-files --error-unmatch $f >/dev/null 2>&1 || echo "NON SUIVI $f"; done`).
