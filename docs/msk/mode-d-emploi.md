# Volet Diagnostic MSK — mode d'emploi pour Mat (8 octobre 2026)

Tout ce qui suit est en place. Rien n'exige de coder. Les libellés d'écran d'Avorio n'ont pas été vérifiés de visu
(le site avorio.ai confirme : gratuit, sans compte, import `.apkg` avec médias et planification, FSRS, Mac + iPhone) :
confiance Probable sur les noms de boutons, Certain sur les chemins de fichiers.

## 1. Les cartes sur l'iPhone (Avorio)

1. App Store → « Avorio » (éditeur Cognifer Labs ; gratuit) → installer sur l'iPhone. Facultatif : version Mac sur
   avorio.ai (« Download for Mac ») ; la synchronisation chiffrée entre les deux appareils est optionnelle.
2. Vérifier que le paquet est arrivé dans iCloud : sur l'iPhone, **Fichiers → iCloud Drive → Écho MSK → anki →
   `msk-epaule.apkg`** (2,5 Mo). Si une icône de nuage apparaît sur le fichier, le toucher une fois pour le télécharger.
3. Importer : toucher `msk-epaule.apkg` dans Fichiers → s'il s'ouvre dans Avorio, confirmer l'import ; sinon, bouton
   **Partager** → Avorio ; ou, depuis Avorio, l'option **Importer** (écran des paquets) → Fichiers → iCloud Drive →
   Écho MSK → anki → `msk-epaule.apkg`.
4. Résultat attendu : un paquet « Écho MSK » → « Épaule » avec cinq sous-paquets : Structures (70), Coupes du
   protocole (12), Pathologies (12), Pièges et artefacts (46), Gestes (12) — 152 cartes, 47 images. Ouvrir une carte
   « Structures » : une image avec des pastilles numérotées au recto, les noms au verso.
5. Si tu avais importé le premier paquet (106 cartes) : une seule carte est orpheline, « coupe-1-structures » (recto :
   la coupe postérieure de l'espace quadrilatère). La supprimer à la main dans Avorio. Toute réimportation future met les
   cartes à jour sans toucher à ta planification (même clé = même carte).
6. Réviser : chaque jour, 10 à 15 min ; « Good » quand tu as retrouvé sans aide, « Again » sinon ; FSRS fixe les
   intervalles (cible 90 % de rétention). Rappel : la fiche n'est pas encore validée par toi ; les cartes viennent de
   sources ouvertes et de la littérature citée dans la fiche, pas de ta relecture.

## 2. Le site

https://echo-algologie.pages.dev/#/msk/epaule — Cloudflare Access envoie un code à usage unique à matabou@gmail.com
(session d'un mois). Bouton « Mode quiz » : masque les étiquettes des images, survoler pour révéler. Page vide → recharger.

## 3. Valider la fiche épaule

Les 32 questions sont dans `docs/msk/questions-epaule.md` (fichier déjà envoyé). Répondre par numéro dans une
conversation Claude Code ouverte dans le dossier `echo-algologie` (« 4 : clavicule à gauche », « 23 : retirer »).
Chaque réponse est reportée dans la fiche, contrôlée, recommitée, redéployée ; ton « validé » passe la fiche en
`valide: true` et retire le bandeau. Rien d'autre ne le fait.

## 4. L'audio du trajet

1. Une fois : `nlm login` dans un terminal (ou terminer la connexion Google dans la fenêtre Chrome ouverte, compte
   mathieu.aboubadra@gmail.com).
2. Puis, dans Claude Code (dossier `echo-algologie`) : `/msk-audio epaule`. Deux épisodes en français : « Épaule — deep
   dive » (protocole coupe par coupe, pathologies, dictée) et « Épaule — rappel oral » (vingt questions, pause, réponse).
   Une seule attente de quelques minutes.
3. Écouter : **Fichiers → iCloud Drive → Écho MSK → audio** (lecture directe dans Fichiers, écran verrouillé possible).
   Le lundi suivant, `/msk-semaine` te demande lesquels tu as écoutés.

## 5. Coaching (skills disponibles depuis n'importe quel dossier)

- **Lundi, 2 min — `/msk-semaine`** : plan de la semaine (audio du trajet, deux soirs, trois cibles à chercher sur tes
  patients, questions en attente). La première semaine, 2026-W41, est déjà écrite. Chaque mois : `/msk-semaine --bilan`
  → grille OSAUS (sept items, 1 à 5) et critère de passage à la région suivante.
- **Un soir, 15 min — `/msk-cas epaule`** : une vignette d'HDJ fictive et une image, tutorat par questions, fin nette
  « su / pas su », palier de compétence mis à jour.
- **Après une journée d'HDJ, 3 min — `/msk-logbook`** : tu dictes ce que tu as échographié (coupes vues, dictées sans
  aide, difficultés, questions). Jamais de nom, d'initiales, d'âge en chiffres, de date de naissance, de chambre ni de
  ville : la dictée est refusée et rien n'est écrit ; reformuler (« quinquagénaire », « vu ce matin »). Paliers mis à
  jour, questions mises en file avec une réponse courte sourcée quand c'est possible.

Les paliers : 0 non vu · 1 vu en théorie · 2 reconnu sur image · 3 trouvé sur patient · 4 dicté en autonomie. L'état
vit dans `~/Claude/Projects/Écho MSK/` (hors dépôt, jamais publié).

## 6. Régions suivantes

Ordre convenu : genou → rachis (repérage, sacro-iliaque, facettes, paravertébraux, bursite interépineuse) → coude →
poignet-main → hanche → cheville-pied → paroi-nerfs. Pour chacune : `/msk-fiche <region>` puis `/msk-anki <region>`
puis `/msk-audio <region>` — après une estimation chiffrée (durée, points de forfait et de Fable, agents) soumise à Mat
avant lancement (règle du 8 octobre 2026). Dettes à régler avant le genou : voir `PROCHAINE-SESSION.md`, section G.

## 7. Plugins

Activer **PubMed** et **YouTube Transcriber** depuis la carte de plugins affichée le 7 octobre.
