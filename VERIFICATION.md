# Passe de vérification bibliographique — brief pour une session neuve

## Pourquoi

À la création (9–10 septembre 2026), le budget de recherche web de la session s'est
épuisé au bout de quelques minutes : 10 fiches ont été sourcées en direct, les 54 autres
en « mode dégradé ». Résultat : ≈ 400 références sur ≈ 640 sont citées de mémoire et
marquées `verif: false` (badge « à vérifier » dans l'interface), et la plupart des fiches
ont `videos: []`.

## Objectif de la passe

Pour chaque référence `verif:false` : confirmer par une recherche web qu'elle existe
(premier auteur, titre, revue, année) ; corriger les métadonnées ; ajouter le DOI ou le
PMID **uniquement s'il a été vu** ; passer `verif: true`. Si elle n'existe pas ou reste
introuvable après deux requêtes : la **supprimer** et adapter le texte de `evidence` qui
s'y appuyait. Au passage, ajouter 1–3 liens vidéo par fiche (YouTube, NYSORA, USRA,
ASRA, Clarius) **vus dans un résultat de recherche**, jamais reconstitués.

## Règles d'exécution (leçons de la création)

- **Budget** : 200 recherches web par session, partagé entre tous les agents. Ne jamais
  lancer plus de **3 agents** en parallèle ; chaque agent compte ses requêtes et s'arrête à
  60. Prévoir donc **2 à 3 sessions** pour couvrir les ≈ 400 références (1 requête par
  référence, parfois 2).
- **Ordre de traitement** (fréquence attendue des gestes en HDJ douleur) :
  1. membre-sup (épaule, coude, canal carpien), membre-inf (genou, hanche, géniculés) ;
  2. rachis-bassin-paroi (branches médiales, sacro-iliaque, caudale, pudendal, piriforme) ;
  3. tête-cou (GON, stellaire, branches médiales cervicales) ;
  4. thorax, socle.
- Lister les entrées : `node scripts/refs-a-verifier.js` (ou `--json`). Les fiches sont
  dans `js/data/procedures/<id>.js`, champ `references`.
- Ne pas modifier le contenu clinique hors `references`, `videos`, `evidence`, `grade`.
- Après chaque fiche : `node scripts/build-index.js` puis
  `NODE_PATH=$(npm root -g) node scripts/check-all.js` (0 erreur), commit.
- Rapport final : références confirmées / corrigées / supprimées par fiche, vidéos ajoutées.

## Commande de lancement suggérée

« Lis VERIFICATION.md et GUIDE-REDACTION.md. Traite les fiches de la région <X> dans
l'ordre indiqué, avec au plus 3 agents, en respectant le budget de recherche. »
