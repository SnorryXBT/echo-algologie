# Conduite à tenir — prochaine session (écrit le 4 octobre 2026)

Ce fichier dit où en est le mémo et dans quel ordre avancer. À lire en début de session, après
`CLAUDE.md`. Le mettre à jour en fin de session.

## Où on en est (7 octobre 2026, soir)

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
- Volet Diagnostic MSK (plan du 7 octobre) : socle livré — fiche squelette `#/msk/epaule` (non validée), paquet
  `msk-epaule.apkg` (106 cartes : squelette + sept fiches gestes d'épaule, 13 images) déposé dans iCloud Drive → Écho MSK
  → anki, dossier privé `~/Claude/Projects/Écho MSK` initialisé, six skills. Pilote épaule à produire : voir G.

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

Socle livré le 7 octobre (tâches 1 à 11 du plan `docs/superpowers/plans/2026-10-07-msk-diagnostic.md`, spec
`docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md`) ; pilote épaule à produire, dans cet ordre :
1. **Tâche 12, audio J0 — Opus 5** : `/msk-audio epaule` sur `dist/msk/epaule-digest.md` (le régénérer d'abord :
   `NODE_PATH=$(npm root -g) node scripts/msk-export.js epaule`), le guide ESSR de l'épaule et les vidéos YouTube des
   sept fiches gestes. Livrables : `~/Claude/Projects/Écho MSK/audio/epaule-deep-dive.mp3` et `epaule-rappel.mp3`, copiés
   dans iCloud `Écho MSK/audio/`. Noter ici la durée réelle de génération et le verdict sur le format « rappel ».
2. **Tâche 13, fiche épaule complète — Fable 5.1** : `/msk-fiche epaule` sans raccourci, sourçage d'abord
   (`docs/msk/sources-epaule.md` commité avant toute rédaction), trois agents au plus, quota vérifié avant. Livrables :
   `js/data/msk/epaule.js` (`valide: false`) et `img/msk/epaule/*.jpg` (CC BY, CC BY-NC, CC0). Critères du plan, dont
   `node scripts/msk-audit.js epaule` sans erreur, check-all à 0 problème, tests verts, au moins 40 cartes hors `socle-`.
   Puis lien `#/msk/epaule` et questions ouvertes à Mat : sa décision seule met `valide: true`.
3. **Tâche 14, clôture du pilote — Opus 5** : `/msk-anki epaule` (les cartes `socle-` gardent leur GUID) et
   `/msk-audio epaule` sur la fiche complète ; première semaine réelle avec Mat (`/msk-semaine`, `/msk-cas epaule`,
   `/msk-logbook`, dont une dictée piège refusée) ; coût mesuré du pilote noté ici. Écarts à reporter dans la spec :
   §1 critère compté en examens dictés sans aide cumulés, non « consécutifs » ; §5 marqueurs en fractions ; §6 cartes
   des fiches gestes gardées dans le paquet, étiquette `niveau::` abandonnée ; §8 `/msk-cas` ne tire que pathologies et
   pièges (les coupes sont des cibles sur patient). Mat tranche le refus de « depuis 3 ans » par le garde-fou (en-tête
   de `scripts/lib/phi-guard.js`). Ensuite, une région tous les dix jours environ.

À faire confirmer par Mat : les étiquettes de l'écho 1 du nerf axillaire (Abril-Serván 2026, fig. 3C) ont été déplacées
le 7 octobre pour suivre la légende des auteurs (nerf sous la flèche, artère circonflexe postérieure sous la tête de
flèche, col chirurgical sur la corticale) ; les mêmes positions servent à la coupe 1 de la fiche squelette et aux cartes
qui en dérivent. Le paquet Anki reste personnel : trois de ses cinq images sources (Chang 2026, J Med Ultrasound) sont en
CC BY-NC-SA ou BY-NC-ND (balise de licence ambiguë) — ne pas le partager, même aux associés.

## Quota

Au 3 octobre au soir : Fable 70 % de la semaine (réinitialisation le 7 octobre à 4 h), tous modèles
53 %. Une vague de 3 agents de coupes ≈ 6 points Fable ; une vague de remplacement d'images ≈ 1,5
point par image. Annoncer le coût avant toute vague ; Mat garde une marge pour ses consultations.

## Déploiement

`/deployer` est libre : tout ce que `index.html` référence est commité (vérifier :
`for f in $(grep -o 'src="[^"]*"' index.html | sed 's/src="//;s/"//'); do git ls-files --error-unmatch $f >/dev/null 2>&1 || echo "NON SUIVI $f"; done`).
