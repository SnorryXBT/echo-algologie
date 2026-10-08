/* Garde-fou données patient : détecte tout ce qui pourrait désigner une personne dans un texte dicté (logbook, questions).
   Volontairement strict : un faux positif coûte une reformulation, un faux négatif met un identifiant dans un fichier.
   Normalisation : minuscules sans accent pour les règles de vocabulaire ; texte brut pour les règles de majuscules (noms propres).
   Avant toute règle, le texte est « lissé » : espaces insécables → espace, apostrophes typographiques → ', traits d'union typographiques
   (U+2010 à U+2012, dont l'insécable U+2011) → -, indicateur ordinal « º » (U+00BA) → degré « ° », toute suite de blancs → un seul caractère (espace, ou
   retour à la ligne si la suite en contient un) : aucune règle ne parcourt une longue suite de blancs, donc aucune dérive quadratique.
   Deux lectures du texte lissé : retours à la ligne gardés (ils marquent un début de phrase : « vue\nVient de Libourne »), puis repliés en une
   espace (un numéro ou un nom coupé par un retour à la ligne : « 06\n12 34 56 78 » ; c'est aussi le texte que msk-progress écrit, sur une ligne).
   Début de phrase : la majuscule n'y signale plus un nom propre (« Patient Dupont », « Le monsieur de Libourne », « Habite à Bergerac ») ;
   les règles de majuscules passent donc aussi sur le texte dont la première lettre de chaque phrase est abaissée.
   Sigles : après « patient », un nom en capitales est refusé (« patient DUPONT ») sauf sigle de la liste SIGLES (« patient BPCO ») : à compléter au besoin.
   Limites connues, que la skill /msk-logbook doit porter : nom écrit sans majuscule ou texte tout en capitales (aucun signal de nom propre) ;
   prénom seul, « prénom + nom » sans civilité ; désignation par une institution (« la dame de l'EHPAD », « le patient des Urgences ») ;
   profession sans verbe (« maçon ») ; adresse postale.
   Refus assumés (coût : une reformulation) : « Douleur depuis 3 ans » (âge ou durée en chiffres : décision de Mat reportée, voir PROCHAINE-SESSION.md, section G ; d'ici là, « depuis N ans » s'écrit en lettres) ; « Dr/Pr + nom », même pour
   un auteur de vidéo ; « patient B. » en fin de phrase (initiale avec point) ; « M. de Dupuytren » (M. = maladie) ; « mode M Doppler » ; « un patient de Parkinson »
   (maladie prise pour un lieu) ; « Il vient du Doppler » (sujet pronom) ; « ch. 3 du guide » ; sigles à points (« I.R.M. ») ; plages « 10-12-15 MHz » ;
   « le muscle travaille pour… » ; « il travaille à temps partiel » ; « patient » suivi d'un sigle absent de SIGLES.
   Acceptés exprès, épinglés dans les tests : « Rameau né en C5 », « né le long du nerf », « douleur née le lendemain », « Cette coupe vient de Nysora »,
   « Une patiente de Rhumatologie adressée », « CSA du nerf médian +33 % », « travaillé à main levée / au Doppler / à 15 MHz / à deux mains »,
   « la patiente de la 2e séance », « le 3 septembre » (date sans année : décision de Mat). */
const lisse = s => String(s == null ? '' : s).normalize('NFC').replace(/[^\S\n]+/g, ' ').replace(/ ?\n\s*/g, '\n').replace(/[\u{2018}\u{2019}\u{2bc}]/gu, "'").replace(/[\u{2010}-\u{2012}]/gu, '-').replace(/\u{ba}/gu, '°');
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const debutBas = s => s.replace(/(^ ?|\n ?|[^\p{L}\p{N}'\s] ?)(\p{Lu})(?=[\p{Ll}'])/gu, (_, sep, c) => sep + c.toLowerCase());   // abaisse la majuscule qui suit un début de texte (blanc initial compris), un retour à la ligne ou une ponctuation
const MOIS = 'janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre';
const JOURS = 'lundi|mardi|mercredi|jeudi|vendredi|samedi|dimanche';
const NB = '(?:un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingts?|trente|quarante|cinquante|soixante|septante|huitante|octante|nonante|cent)';
const DIZ = String.raw`(?:quatre[\s-]+)?(?:vingts?|trente|quarante|cinquante|soixante|septante|huitante|octante|nonante|cent)`;   // un âge d'adulte commence à la dizaine (dès « dix-sept » : voir la règle) ; « deux ans » est une durée
const SIGLES = 'BPCO|AVK|AOD|AAP|AINS|HTA|SEP|SPA|PMR|PPR|SDRC|CRPS|AOMI|SAOS|DT1|DT2|DID|DNID|AVC|AIT|IDM|OAP|SCA|TVP|ACFA|IRC|IRCT|VIH|VHC|VHB|PTH|PTG|LCA|TDAH|ALD|CMU|AME|ASA|GIR|IMC|NYHA|ECOG|HBP|RGO|MICI|TSA|TOC|TCC|IRM|TDM|HDJ|CHU|EHPAD|SSR|SAMU|SMUR|UHCD|USLD|HAD|EVA|COVID|PCA|VNI|BMI|OMS|ORL|SDF|AIS|CPAP|PPC|TCA';
const SERVICE = String.raw`(?:Urgences|R[ée]animation|M[ée]decine|Orthop[ée]die|Anesth[ée]sie)(?![\p{L}])|\p{Lu}[\p{L}'-]*(?:ologie|urgie|iatrie)(?![\p{L}])`;   // un service n'est pas un lieu d'habitation : « une patiente de Rhumatologie »
const PERSONNE = String.raw`(?:(?:(?:la|le|un|une|ce|cet|cette|mon|ma)\s+|l')?(?:dame|monsieur|patiente?|femme|homme|personne)|(?:le|un|ce|mon)\s+sujet)`;   // « sujet » exige son déterminant : « au sujet de Neer » n'est pas une personne
const MAJ = String.raw`(?!(?:${SIGLES})(?![\p{L}\p{N}]))\p{Lu}{3,}(?![\p{L}\p{N}])`;   // nom en capitales (trois lettres ou plus) qui n'est pas un sigle
const LIEU = String.raw`(?:de|du|des|d')\s*\p{Lu}[\p{Ll}'-]{2,}`;   // nom de lieu : majuscule et au moins deux minuscules (« de L1-L2 », « des ECR » n'en sont pas)
const REGLES_BRUT = [   // sur le texte d'origine (la majuscule est le signal)
  [/(?<![\p{L}\p{N}_])(?:M|Mme|Mlle|Melle|Mr|Mrs|Madame|Mademoiselle|Monsieur|Dr|Pr|MME|MLLE|MELLE|MR|MRS|MADAME|MADEMOISELLE|MONSIEUR|DR|PR)\.?\s+(?:(?:de|du|des|d'|del|della|di|da|van|von|ben|el|al)\s*)?\p{Lu}[\p{L}\p{N}_'-]*/u, 'civilité suivie d\'un nom'],   // une initiale suffit (« Mme D. »), point et particule facultatifs (« Dr. Martin », « M. de Villiers »)
  [new RegExp(String.raw`(?<![\p{L}\p{N}_])(?:patient|patiente|homme|femme|dame|monsieur|sujet)\s+(?:\p{Lu}[\p{Ll}'-]+|\p{Lu}\.|${MAJ}|\p{Lu}{2}[\s-]+${MAJ})`, 'u'), 'nom propre après patient'],   // nom (« Da Silva »), nom en capitales (« DUPONT »), initiale anonymisante (« la patiente B. »)
  [new RegExp(String.raw`(?<![\p{L}\p{N}_])${PERSONNE}\s+(?:de|du|des|d')\s*(?:la\s+(?:\d{1,3}(?:e|[èe]me|[èe]re)\s+)?chambre|(?!${SERVICE})\p{Lu}[\p{Ll}'-]+)`, 'u'), 'personne désignée par un lieu ou une chambre'],
  [new RegExp(String.raw`(?<![\p{L}\p{N}_])${PERSONNE}\s+(?:de\s+la|du)\s+\d{1,4}(?:bis|ter)?(?![\p{L}\p{N}])(?!\s*(?:h|mm|cm|ans?)\b)`, 'u'), 'personne désignée par un lieu ou une chambre'],   // chambre elliptique : « la dame de la 12 », « le patient du 8 » (« la 2e séance » n'en est pas une)
  [/(?:^|[\s(])\p{Lu}\.(?:\s?-?\s?\p{Lu}\.)+(?:\s\p{Lu}\.)?/u, 'initiales'],
  [new RegExp(String.raw`(?<![\p{L}\p{N}_])(?:habit(?:e|ent|ant)(?:\s+seule?s?)?(?:\s+(?:[àa]|au|aux|en|dans))?|(?:domicili[ée]e?|vit|viv(?:ant|ent)|r[ée]sid(?:e|ent|ant)|demeur(?:e|ent|ant))(?:\s+seule?s?)?\s+(?:[àa]|au|aux|en|dans))\s+(?:(?:le|la|les|l')\s*)?\p{Lu}[\p{L}\p{N}_'-]*`, 'u'), 'lieu de résidence'],   // « habite Bergerac » (préposition facultative après « habite »), « vit seule à Pineuilh », « à » sans accent accepté
  [/(?<![\p{L}\p{N}_])née?s?\s+(?:[àa]|au|aux|en|dans)\s+(?:(?:le|la|les|l')\s*)?\p{Lu}[\p{Ll}'-]{2,}/u, 'lieu de naissance'],   // « né à Marmande » ; « Rameau né en C5 » n'est pas un lieu
  [/(?<![\p{L}\p{N}_])[Nn]ée?s?\s+le(?![\p{L}])(?!\s+(?:long|plus|lendemain|surlendemain|jour|soir|matin)\b)/u, 'date de naissance'],   // accentué, « né le » n'est jamais la négation ; exceptions d'anatomie et de chronologie (« né le long du », « née le lendemain »)
  [new RegExp(String.raw`(?<![\p{L}\p{N}_])originaire\s+${LIEU}`, 'u'), 'lieu d\'origine'],
  [new RegExp(String.raw`(?:(?<![\p{L}\p{N}_])(?:patiente?|dame|monsieur|femme|homme|personne|sujet|il|elle|ils|elles)(?![\p{L}\p{N}_])[^.;:!?]{0,15}?\s|(?:^|[,;:(.\n])\s*)(?:vien(?:t|nent)|ven(?:u|ue|ait|ant))\s+${LIEU}`, 'u'), 'lieu d\'origine'],   // sujet personne ou sans sujet : « Cette coupe vient de Nysora » passe
];
const REGLES_NORM = [   // sur le texte normalisé (minuscules, sans accent)
  [/\b(?:mme|mlle|melle|madame|mademoiselle)\.?\s+[a-z]/, 'civilité suivie d\'un nom'],
  [/\bdate de naissance\b|\bddn\b/, 'date de naissance'],
  [new RegExp(String.raw`\bnee?\s+(?:le|en)\b\s*(?::\s*)?(?:\d|premier\b|(?:${JOURS})\b|(?:${NB}[\s-]+(?:et[\s-]+)?){0,3}(?:${MOIS})\b)`), 'date de naissance'],   // sans accent, « ne le » seul est la négation : une date doit suivre (chiffre, jour, mois)
  [/\b\d{1,2}([\/.-])\d{1,2}\1\d{2,4}\b/, 'date complète'],   // même séparateur partout : « 2.5-10 mm » n'est pas une date
  [new RegExp(String.raw`\b\d{1,2}(?:er)?\s+(?:${MOIS})\s+\d{2,4}\b`), 'date complète'],   // « 12 mars 2019 » ; sans année (« le 3 septembre »), non refusé : décision de Mat
  [/\b(?:19|20)\d{2}-\d{2}-\d{2}\b/, 'date complète'],
  [/\b(?:chambre|ch\.?|lit|box)\s*(?:(?:n°|no|numero)\s*)?\d+/, 'numéro de chambre, de lit ou de box'],   // un seul \s* avant le chiffre : deux \s* de suite rendent la recherche quadratique sur une longue suite d'espaces
  [/\b(?:ipp|nir|n°\s*de\s*dossier|numero de dossier|n° patient|no patient|dossier\s*(?:(?:n°|no|numero)\s*)?\d+)\b/, 'identifiant de dossier'],
  [/\b\d(?:[ .]?\d{2}){2}[ .]?\d{2,3}[ .]?\d{3}[ .]?\d{2,3}\b|\b\d{13,15}\b/, 'numéro long (sécurité sociale, dossier)'],
  [/\b\d{1,3}\s*ans\b/, 'âge'],
  [new RegExp(String.raw`\b(?:${DIZ}(?:[\s-]+(?:et[\s-]+)?${NB}){0,3}|dix[\s-]+(?:sept|huit|neuf))\s+ans\b`), 'âge'],   // en lettres : « soixante-douze ans », « dix-neuf ans »
  [/\bagee?s?\s+de\s+\d{1,3}\b(?!\s*(?:jours?|j|semaines?|sem|mois|heures?|h|min(?:utes?)?)\b)/, 'âge'],   // « âgée de 72 » sans « ans » ; « lésion âgée de 3 semaines » n'est pas un âge
  [/@|\barobase\b|\+\s?33\s?(?:\(0\)\s?)?[1-9](?:[ .-]?\d{2}){4}|\b0[1-9](?:[ .-]?\d{2}){4}\b/, 'courriel ou téléphone'],   // « +33 6 12 34 56 78 » ; « +33 % » n'est pas un téléphone
  [/\b(?:profession\b|travaill(?:e|es|ent|ait|aient|ant)\s+(?:a|au|chez|comme|pour)\b(?!\s+(?:main\b|deux\s+mains|\d|doppler|plat\b|l'(?:aveugle|etirement|allongement|effort))))/, 'profession ou employeur'],   // « travaillé à main levée », « au Doppler », « à 15 MHz », « à deux mains » : technique, pas employeur
];
function detecter(texte) {
  const hits = [], lignes = lisse(texte);
  const noter = (motif, m) => { if (m && !hits.some(h => h.motif === motif)) hits.push({ motif, extrait: m[0].trim() }); };
  for (const brut of lignes.includes('\n') ? [lignes, lignes.replace(/\n/g, ' ')] : [lignes]) {   // les deux lectures de l'en-tête ; dans l'une et l'autre, aucune suite de blancs
    const bas = debutBas(brut), n = norm(brut);
    for (const [re, motif] of REGLES_BRUT) noter(motif, re.exec(brut) || re.exec(bas));
    for (const [re, motif] of REGLES_NORM) noter(motif, re.exec(n));
  }
  return hits;
}
const verifierTextes = arr => (arr || []).flatMap(t => detecter(t));
module.exports = { detecter, verifierTextes };
