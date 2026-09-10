# Guide de rédaction des fiches — Écho-algologie

Ce document est le contrat de qualité de chaque fiche. La fiche de référence est
`js/data/procedures/nerf-suprascapulaire.js` : **la lire entièrement avant d'écrire**,
et s'aligner sur sa profondeur, son ton et sa structure.

## Destinataire et ton

Mémo privé d'un médecin algologue expérimenté (11 ans d'urgences, DIU d'échographie,
capacité d'algologie) qui révise un geste **avant de le réaliser**. Ton entre pairs,
français médical, zéro vulgarisation, zéro remplissage, zéro disclaimer. Concis **et**
complet : on ne raccourcit jamais au prix de la substance (posologies, repères,
critères de fin, complications). Anglicismes usuels tolérés (in-plane, pearls, PRF).

## Fichier

Un fichier par fiche : `js/data/procedures/<id>.js`, encodé UTF-8, qui appelle
`ECHO.register({...})`. L'`id` est imposé par le manifest (`js/data/registry.js`).
Ne pas modifier les fichiers partagés (`registry.js`, `app.js`, `scene.js`, `md.js`,
`icons.js`, `app.css`, `index.html`). Après écriture : `node scripts/build-index.js`.

Les textes longs sont en **mini-Markdown** (paragraphes séparés par une ligne vide,
`**gras**`, `*italique*`, listes `- `, listes numérotées `1. `, sous-titres `### `,
tableaux `| a | b |` avec ligne `|---|---|`, liens `[texte](https://…)`). Les listes
(`indications`, `pearls`…) sont des tableaux de chaînes. Utiliser des template strings
(backticks) pour les textes longs et échapper les backticks internes.

## Champs

| Champ | Obligatoire | Contenu |
|---|---|---|
| `id`, `titre`, `titreCourt`, `en` | oui | `en` = dénomination anglaise complète (sert à la recherche) |
| `region` | oui | `tete-cou` · `rachis-bassin` · `thorax` · `membre-sup` · `membre-inf` · `socle` |
| `types` | oui | tableau parmi `infiltration`, `bloc`, `interventionnel`, `socle` |
| `niveau` | oui | 1 courant · 2 intermédiaire · 3 avancé (difficulté technique / risque) |
| `grade` | oui | texte court sur la force de la preuve (ex. « Modérée (ECR de petite taille) ») |
| `maj` | oui | `'2026-09'` |
| `motsCles` | oui | synonymes, indications, abréviations — pour la recherche |
| `resume` | oui | 4–7 phrases : place du geste, ce qu'il couvre, cibles, ce qui le distingue |
| `flash` | oui | `position` (`dorsal`/`ventral`/`lateral`/`assis`/`semi-assis`/`procubitus`), `positionNote`, `sonde` (`lineaire`/`convexe`/`hockey`), `sondeNote` (fréquence, profondeur), `approche` (`in-plane`/`out-of-plane`), `approcheNote`, `aiguille`, `cible` (critère de fin), `injectat`, `duree` |
| `indications`, `contreIndications` | oui | listes ; CI absolues vs relatives ; classe de risque hémorragique ASRA-ESRA 2018 (faible / intermédiaire / élevé) |
| `alternatives` | oui | place dans la stratégie, ce qui se fait d'autre |
| `anatomie` | oui | anatomie **utile au geste** : trajet, rapports, variantes, innervation couverte, profondeurs habituelles ; sous-titre `### Ce qui compte pour le geste` |
| `installation` | oui | objet `{ patient, operateur, sonde }` — patient (position, membre, coussins), opérateur/écran/sens de ponction, réglages écho (fréquence, profondeur, focale, Doppler, preset) |
| `reperage` | oui | 4–6 étapes `{titre, texte}` de balayage, de la structure la plus facile à la cible ; inclure « si on ne trouve pas » |
| `sonoanatomie` | oui | 5–8 lignes `{structure, aspect, repere}` |
| `technique` | oui | 5–7 étapes `{titre, texte}` : préparation, anesthésie cutanée, ponction (plan, direction, angle), test/hydrolocalisation, injection fractionnée, **critère de fin**, après le geste |
| `injectat` | oui | tableau Markdown objectif / produits / volume / commentaire ; doses max des AL rappelées si volume > 10 mL ; corticoïde particulaire vs non particulaire quand pertinent (sites à risque artériel : jamais de particulaire) |
| `variantes` | oui si pertinent | `{titre, texte}` : PRF, cryoneurolyse, hydrodissection, voies alternatives, gestes associés |
| `pearls`, `pieges` | oui | 4–6 chacun, concrets et opératoires |
| `complications`, `securite` | oui | complications spécifiques avec conduite à tenir ; sécurité (Doppler, aspiration, structures à risque, dose cumulée) |
| `suivi` | oui | quoi mesurer à J0, J15–J30, à 3 mois ; quand répéter, quand escalader |
| `evidence` | oui | 4–6 puces : méta-analyses, ECR, recos, séries — avec nom du premier auteur et année, et un jugement de force de preuve honnête ; signaler explicitement les trous de la littérature |
| `ccam` | non | **uniquement** si un code a été vérifié sur une source fiable (ameli.fr) ; sinon omettre |
| `references` | oui | 6–12 entrées `{auteurs, titre, revue, annee, doi | pmid | url, type, note}` |
| `videos` | oui | 1–4 liens `{titre, source, url, note}` |
| `scenes` | oui | 2–4 schémas (voir plus bas) |
| `checklist` | non | items **spécifiques** en plus de la checklist générique |

## Règles de fond (non négociables)

1. **Dernières données de la science.** Pour chaque fiche, faire au moins 6–10
   recherches web ciblées (technique, anatomie, ECR / méta-analyse, recommandation,
   complications, vidéos) et intégrer ce qui est récent (2020–2026) quand ça existe.
2. **Aucune référence inventée.** Une référence n'est citée que si son titre, sa revue
   et son année apparaissent dans un résultat de recherche. Le DOI n'est renseigné que
   s'il a été vu (résultat de recherche, URL doi.org, URL éditeur avec le DOI) ; sinon
   `pmid` (depuis l'URL PubMed) ou `url`. En cas de doute sur les pages ou le volume,
   ne mettre que l'année.
3. **Aucune posologie inventée.** Les doses citées doivent être celles des schémas
   publiés ou des RCP ; donner des fourchettes usuelles, pas de valeur unique
   présentée comme la vérité. Rappeler les doses maximales d'AL quand le volume est
   significatif (ropivacaïne 3 mg/kg, bupivacaïne 2–2,5 mg/kg, lidocaïne 4,5 mg/kg —
   7 mg/kg adrénalinée).
4. **Sécurité by design.** Pour tout site proche d'une artère terminale (rachis,
   foramen, tête et cou, nerfs des membres avec artère satellite) : corticoïde non
   particulaire ou justification explicite. Classe de risque hémorragique ASRA-ESRA
   2018 dans `contreIndications` ou `securite`.
5. **Annoncer sa confiance.** Là où la littérature est mince (séries, cas cliniques,
   avis d'experts), l'écrire dans `evidence` et dans `grade`.
6. **Vidéos** : uniquement des URL vues dans un résultat de recherche (YouTube, NYSORA,
   USRA, ASRA, Clarius, StatPearls…). Ne jamais construire une URL de mémoire.
7. **Ancrage** : le lecteur exerce en HDJ douleur (hôpital de jour), en France. Produits
   disponibles en France (ropivacaïne, lidocaïne, bupivacaïne, lévobupivacaïne ;
   bétaméthasone Diprostène®/Célestène®, méthylprednisolone Dépo-Médrol®, triamcinolone
   Kenacort retard® / Hexatrione®, dexaméthasone ; acide hyaluronique ; dextrose 5 %
   pour l'hydrodissection ; toxine botulique). Bien noter que la triamcinolone
   hexacétonide (Hexatrione®) est réservée à l'intra-articulaire.

## Schémas (`scenes`) — le cœur pédagogique

Chaque fiche a **2 à 4 scènes** : au moins une vue de repérage (`section: 'sonoanatomie'`)
et une vue du geste avec aiguille animée et diffusion (`section: 'technique'`). Une
scène = objet `{ id, section, titre, legende, opts: { depth, w, h }, build: S => {...} }`.

Repère : viewBox 640 × 420 ; la **sonde occupe y = 0–42** ; l'image échographique va de
**y = 42 (peau) à y = 420**. `opts.depth` (cm) sert uniquement à l'échelle affichée à
droite. Convention : gauche/droite de l'image annoncées par `S.orient({left, right})`.

API (chaque appel ajoute une couche, dans l'ordre d'appel ; les étiquettes se placent
via `label` + `at:[x,y]` ou `lx/ly`, `anchor`, `lead:[x,y]` pour une ligne de rappel,
`small:true` pour une petite police) :

```
S.orient({left:'Médial', right:'Latéral'}).probeInfo({plan:'Transverse', type:'linéaire 6–13 MHz'})
S.skin({thickness:8, fatBelow:24})                 // peau + graisse sous-cutanée
S.fat({path|points|rect, label})                   // lobule graisseux
S.muscle({path|points, label, at, opacity})        // muscle (pattern strié)
S.fascia({points:[[x,y],...]|path, width, opacity})// ligne hyperéchogène
S.bone({path|points, label, at, shadow:true})      // cortex + cône d'ombre automatique sous la ligne
S.bone({x,y,rx,ry})                                // os en coupe (ellipse)
S.cartilage({path|x,y,r...}) S.ligament({...}) S.tendon({...}) S.organ({...}) S.bowel({...}) S.lung({...})
S.pleura({points})                                 // ligne pleurale animée (glissement)
S.nerve({x,y,r|rx,ry|path, label, lx, ly, anchor, lead})
S.artery({x,y,r, label}) S.vein({x,y,rx,ry, label}) S.fluid({path|x,y..., label})
S.region({path, fill, opacity, label})             // zone libre (ex. espace graisseux)
S.target({x,y,r})                                  // cible clignotante
S.label({x,y,text,anchor,cls,small,lead}) S.arrow({from,to,text})
S.needle({from:[x,y], to:[x,y], label})            // animée ; plusieurs aiguilles possibles (s'enchaînent)
S.spread({x,y,rx,ry,label}) / S.spreadPath({path, at:[x,y], label})   // diffusion animée après l'aiguille
```

Exigences des schémas :
- **Exactitude anatomique des rapports** (ce qui est superficiel/profond, médial/latéral,
  l'artère par rapport au nerf, l'os et son ombre, la plèvre, le péritoine…). C'est le
  point que le lecteur vérifiera.
- Étiqueter toutes les structures utiles ; pas de chevauchement d'étiquettes ; garder
  les étiquettes à > 12 px des bords ; l'aiguille entre par un bord latéral (in-plane)
  ou est figurée par un point (out-of-plane : `S.needle` très court + `S.target`).
- La diffusion (`spread`) est placée là où l'injectat doit aller, avec le volume en
  étiquette.
- Pour un geste hors du plan, dessiner la pointe (aiguille très courte verticale) et la
  diffusion.

**Contrôle visuel obligatoire** : après `node scripts/build-index.js`, capturer chaque
scène et la regarder (outil Read sur le PNG), corriger, recapturer :

```
NODE_PATH=/opt/node22/lib/node_modules node scripts/shot.js '#/fiche/<id>' /tmp/claude-0/-home-user/895ae325-8569-5f29-ac91-37f679763805/scratchpad/shots/<id>-0.png light '.scene-wrap' 0
```

(index `0`, `1`, `2`… = ordre des scènes dans la page : d'abord celles de la section
sono-anatomie, puis celles de la technique). La commande signale aussi les erreurs JS de
la page : il ne doit y en avoir **aucune**. Faire aussi une capture pleine page
(`sans sélecteur`) pour vérifier que toutes les sections s'affichent.

## Longueur

1 200 à 2 500 mots par fiche (hors références). Les chapitres « socle » peuvent être
plus longs. Une fiche qui tient en 600 mots est incomplète.

## Mode dégradé — quand la recherche web n'est pas disponible

Le budget de recherche d'une session est fini (200 appels, partagés entre agents) et le
proxy bloque tout autre canal. Dans ce cas on rédige quand même, intégralement, avec ce
protocole d'honnêteté :

1. Contenu technique, anatomique et posologique : au niveau du gabarit, en fourchettes
   usuelles ; écrire « à confirmer » dans le texte quand on comble un trou.
2. Références : uniquement des travaux dont l'existence est certaine (premier auteur,
   titre, revue, année). Pas de volume ni de pages. `doi` seulement si certain, sinon
   l'omettre ; jamais de `pmid` ni d'`url` reconstitués. Marquer chaque référence non
   confirmée par une recherche de la session avec `verif: false` (rendue « à vérifier »).
3. Vidéos : aucune URL construite de mémoire ; `videos: []` si aucune n'a été vue.
4. `evidence` : rester qualitatif là où les chiffres ne sont pas certains.
5. Une passe de vérification (`node scripts/refs-a-verifier.js`) est faite dans une
   session ultérieure avec un budget neuf.

## Pièges du moteur de scènes (retours des rédacteurs et relecteurs)

- `S.spread` est une nappe **opaque** rendue au-dessus de l'anatomie : la décaler de la
  structure clé, ou dessiner une **couronne** avec `S.spreadPath` (ellipse externe puis
  ellipse interne en sens inverse) pour laisser le nerf visible au centre.
- Les animations s'enchaînent (aiguille 1,6 s, nappe 1,4 s) : au-delà de deux aiguilles,
  fixer `delay`/`dur` explicites pour finir avant ~6 s.
- L'ombre de `S.bone` se ferme entre le premier et le dernier point du chemin, vers le bas :
  un os superficiel noie tout ce qui est dessous (`shadow:false` si besoin), deux os
  disjoints laissent une bande claire (faire jointer les extrémités ou combler par un
  `region` sombre), et l'ordre d'appel compte (dessiner après l'os ce qui doit rester
  visible sur son ombre).
- `S.bone({x,y,rx,ry})` (ellipse) ne produit pas d'ombre.
- Les étiquettes n'ont aucun évitement de collision : tout le placement est manuel.
