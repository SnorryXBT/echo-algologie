/* Garde-fou données patient : détecte tout ce qui pourrait désigner une personne dans un texte dicté (logbook, questions).
   Volontairement strict : un faux positif coûte une reformulation, un faux négatif met un identifiant dans un fichier.
   Normalisation : minuscules sans accent pour les règles de vocabulaire ; texte brut pour les règles de majuscules (noms propres).
   Avant toute règle, le texte est « lissé » : espaces insécables → espace, apostrophes typographiques → ', tirets insécables → -, indicateur ordinal « º » (U+00BA) → degré « ° ».
   Début de phrase : la majuscule n'y signale plus un nom propre (« Patient Dupont », « Le monsieur de Libourne », « Habite à Bergerac ») ;
   les règles de majuscules passent donc aussi sur le texte dont la première lettre de chaque phrase est abaissée.
   Limites connues : un nom écrit sans majuscule, ou un texte tout en capitales, n'a plus de signal de nom propre ; un prénom seul, une profession
   sans verbe (« maçon ») et une adresse postale ne sont pas détectés. Le garde-fou complète la relecture de la skill, il ne la remplace pas. */
const lisse = s => String(s == null ? '' : s).normalize('NFC').replace(/[^\S\n]+/g, ' ').replace(/[\u{2018}\u{2019}\u{2bc}]/gu, "'").replace(/[\u{2010}-\u{2012}]/gu, '-').replace(/\u{ba}/gu, '°');
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const debutBas = s => s.replace(/(^|\n ?|[^\p{L}\p{N}'\s] ?)(\p{Lu})(?=[\p{Ll}'])/gu, (_, sep, c) => sep + c.toLowerCase());   // abaisse la majuscule qui suit un début de texte, un retour à la ligne ou une ponctuation
const NB = '(?:un|une|deux|trois|quatre|cinq|six|sept|huit|neuf|dix|onze|douze|treize|quatorze|quinze|seize|vingts?|trente|quarante|cinquante|soixante|septante|huitante|octante|nonante|cent)';
const DIZ = '(?:quatre[\\s-]+)?(?:vingts?|trente|quarante|cinquante|soixante|septante|huitante|octante|nonante|cent)';   // un âge d'adulte commence à la dizaine : « deux ans » est une durée
const REGLES_BRUT = [   // sur le texte d'origine (la majuscule est le signal)
  [/\b(?:M\.|Mme|Mlle|Melle|Mr|Mrs|Madame|Mademoiselle|Monsieur|Dr|Pr)\.?\s+[A-ZÀ-Ý][\wÀ-ÿ'-]*/u, 'civilité suivie d\'un nom'],   // une initiale suffit (« Mme D. »), point facultatif (« Dr. Martin »)
  [/\b(?:patient|patiente|homme|femme|dame|monsieur|sujet)\s+[A-ZÀ-Ý][a-zà-ÿ'-]+/u, 'nom propre après patient'],   // deux lettres suffisent : « patient Da Silva », « patiente Le Gall »
  [/\b(?:(?:la|le|un|une|ce|cet|cette|mon|ma)\s+|l')?(?:dame|monsieur|patiente?|femme|homme|personne)\s+(?:de|du|des|d')\s*(?:la\s+chambre|[A-ZÀ-Ý][a-zà-ÿ'-]+)/u, 'personne désignée par un lieu ou une chambre'],
  [/\b(?:le|un|ce|mon)\s+sujet\s+(?:de|du|des|d')\s*(?:la\s+chambre|[A-ZÀ-Ý][a-zà-ÿ'-]+)/u, 'personne désignée par un lieu ou une chambre'],   // « sujet » exige son déterminant : « au sujet de Neer » n'est pas une personne
  [/(?:^|[\s(])[A-ZÀ-Ý]\.(?:\s?-?\s?[A-ZÀ-Ý]\.)+(?:\s[A-ZÀ-Ý]\.)?/u, 'initiales'],
  [/(?<![\p{L}\p{N}_])(?:habit(?:e|ent|ant)|domicili[ée]e?|vit|viv(?:ant|ent)|r[ée]sid(?:e|ent|ant)|demeur(?:e|ent|ant)|née?s?)\s+(?:[àa]|au|aux|en|dans)\s+(?:(?:le|la|les|l')\s*)?[A-ZÀ-Ý][\wÀ-ÿ'-]*/u, 'lieu de résidence ou de naissance'],   // « à » sans accent accepté
  [/(?<![\p{L}\p{N}_])(?:originaire|vien(?:t|nent)|ven(?:u|ue|ait|ant))\s+(?:de|du|des|d')\s*[A-ZÀ-Ý][a-zà-ÿ'-]{2,}/u, 'lieu d\'origine'],   // nom de lieu seulement : « né de L1-L2 », « viennent des ECR » n'en sont pas
];
const REGLES_NORM = [   // sur le texte normalisé (minuscules, sans accent)
  [/\b(?:mme|mlle|melle|madame|mademoiselle)\.?\s+[a-z]/, 'civilité suivie d\'un nom'],
  [/\bdate de naissance\b|\bddn\b/, 'date de naissance'],
  [/\bnee?\s+(?:le|en)\s+(?:\d|premier\b|1er\b|[a-z]+\s+(?:janvier|fevrier|mars|avril|mai|juin|juillet|aout|septembre|octobre|novembre|decembre)\b)/, 'date de naissance'],   // « ne le » seul est la négation : une date doit suivre
  [/\b\d{1,2}([\/.-])\d{1,2}\1\d{2,4}\b/, 'date complète'],   // même séparateur partout : « 2.5-10 mm » n'est pas une date
  [/\b(?:chambre|lit|box)\s*(?:(?:n°|no|numero)\s*)?\d+/, 'numéro de chambre, de lit ou de box'],   // un seul \s* avant le chiffre : deux \s* de suite rendent la recherche quadratique sur une longue suite d'espaces
  [/\b(?:ipp|nir|n°\s*de\s*dossier|numero de dossier|n° patient|no patient|dossier\s*(?:(?:n°|no|numero)\s*)?\d+)\b/, 'identifiant de dossier'],
  [/\b\d(?:[ .]?\d{2}){2}[ .]?\d{2,3}[ .]?\d{3}[ .]?\d{2,3}\b|\b\d{13,15}\b/, 'numéro long (sécurité sociale, dossier)'],
  [/\b\d{1,3}\s*ans\b/, 'âge'],
  [new RegExp('\\b' + DIZ + '(?:[\\s-]+(?:et[\\s-]+)?' + NB + '){0,3}\\s+ans\\b'), 'âge'],   // en lettres : « soixante-douze ans »
  [/@|\barobase\b|\+\s?33\b|\b0[1-9](?:[ .-]?\d{2}){4}\b/, 'courriel ou téléphone'],
  [/\b(?:profession|travaill(?:e|es|ent|ait|aient|ant)\s+(?:a|au|chez|comme|pour))\b/, 'profession ou employeur'],
];
function detecter(texte) {
  const hits = [], brut = lisse(texte), bas = debutBas(brut), n = norm(brut);
  const noter = (motif, m) => { if (m && !hits.some(h => h.motif === motif)) hits.push({ motif, extrait: m[0].trim() }); };
  for (const [re, motif] of REGLES_BRUT) noter(motif, re.exec(brut) || re.exec(bas));
  for (const [re, motif] of REGLES_NORM) noter(motif, re.exec(n));
  return hits;
}
const verifierTextes = arr => (arr || []).flatMap(t => detecter(t));
module.exports = { detecter, verifierTextes };
