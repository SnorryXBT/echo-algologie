/* Fiche « Diagnostic MSK » — Épaule. SQUELETTE du pilote : schéma complet, contenu minimal, à remplacer par /msk-fiche epaule.
   Spécification : docs/superpowers/specs/2026-10-07-msk-diagnostic-design.md §5. Marqueurs en fractions de l'image recadrée. */
ECHO.registerMsk({
  id: 'epaule',
  titre: 'Épaule — examen échographique diagnostique',
  en: 'Diagnostic ultrasound of the shoulder',
  maj: '2026-10',
  valide: false,
  motsCles: ['épaule', 'coiffe des rotateurs', 'supra-épineux', 'bourse sous-acromiale', 'long biceps', 'espace quadrilatère', 'ESSR'],
  resume: `Squelette de la fiche pilote. La version complète suivra le guide technique ESSR de l'épaule : protocole en coupes numérotées (long biceps, sous-scapulaire, supra-épineux, infra-épineux et petit rond, articulation acromio-claviculaire, récessus postérieur), sono-anatomie normale avec mesures sourcées, pathologies du niveau 1 EFSUMB filtrées sur la douleur chronique, artefacts, checklist de dictée et carte de compétences.`,
  gestes: ['sous-acromiale', 'long-biceps', 'gleno-humerale', 'acromio-claviculaire', 'nerf-suprascapulaire', 'nerf-axillaire', 'calcifications-coiffe-barbotage'],
  flash: { position: 'assis', positionNote: 'main sur la cuisse homolatérale ; position de Crass modifiée pour dégager le supra-épineux', sonde: 'lineaire', sondeNote: '6–15 MHz, profondeur 3–4 cm', duree: '10–15 min pour le protocole complet' },
  protocole: [
    { n: 1, titre: 'Coupe postérieure, espace quadrilatère (squelette)', position: 'Assis, bras le long du corps ; sonde sagittale sous l\'angle postéro-latéral de l\'acromion', repere: 'Col chirurgical de l\'humérus : ligne osseuse convexe du fond', structures: ['Deltoïde postérieur', 'Petit rond', 'Nerf axillaire et artère circonflexe postérieure', 'Col chirurgical'], dynamique: 'Rotation externe contrariée : le petit rond se contracte en surface du paquet axillaire', pieges: 'Trop haut et trop médial, on voit la glène : redescendre de 2–3 cm',
      image: { src: 'img/nerf-axillaire/echo-1.jpg', crop: [0.09, 0.385, 0.34, 0.25], credit: 'Abril-Serván MJ, García-Sanz F, Cases-Sebastia A et al., Healthcare 2026, fig. 3C', licence: 'CC BY 4.0', source: 'https://doi.org/10.3390/healthcare14111471', legende: 'Sonde sagittale postérieure : deltoïde en surface, paquet axillaire plaqué contre le col chirurgical.',
        marqueurs: [
          { n: 1, x: 0.30, y: 0.22, dx: 0.00, dy: -0.10, label: 'Deltoïde' },
          { n: 2, x: 0.53, y: 0.60, dx: 0.00, dy: -0.32, label: 'Nerf axillaire' },
          { n: 3, x: 0.60, y: 0.59, dx: 0.22, dy: -0.09, label: 'Artère circonflexe postérieure' },
          { n: 4, x: 0.47, y: 0.635, dx: 0.02, dy: 0.235, label: 'Col chirurgical de l\'humérus' },
        ] } },
  ],
  sonoanatomie: [
    { structure: 'Bourse sous-acromio-deltoïdienne', aspect: 'Lame hypo- ou anéchogène entre deux liserés graisseux hyperéchogènes, compressible', mesure: 'épaisseur < 2 mm', source: [0] },
    { structure: 'Tendon du supra-épineux', aspect: 'Bande fibrillaire hyperéchogène convexe, très anisotrope', mesure: '', source: [0] },
  ],
  pathologies: [
    { nom: 'Bursite sous-acromio-deltoïdienne', en: 'Subacromial-subdeltoid bursitis', signes: ['Lame anéchogène > 2 mm, déclive, déplaçable à la pression', 'Épaississement synovial, hyperhémie au Doppler si active'], pieges: 'Le cartilage de la tête humérale, fine bande anéchogène régulière, n\'est pas un épanchement.', conduite: 'Confirmer la douleur à l\'abduction dynamique, puis infiltration bursale échoguidée si le traitement conservateur a échoué.', gestes: ['sous-acromiale'], vignette: 'Douleur latérale d\'épaule à l\'abduction, nocturne, depuis trois mois.' },
  ],
  artefacts: [
    { nom: 'Anisotropie', texte: 'Un tendon vu obliquement devient hypoéchogène et imite une rupture ou un épanchement : basculer la sonde avant de conclure.', question: 'Le supra-épineux paraît hypoéchogène sur la coupe en grand axe : rupture ?', reponse: 'Non sans avoir basculé la sonde : l\'anisotropie efface les fibres vues obliquement. Si l\'hypoéchogénicité persiste perpendiculaire aux fibres, chercher les autres signes de rupture.' },
  ],
  dictee: `Examen échographique de l'épaule droite (sonde linéaire haute fréquence, protocole ESSR).
- Bourse sous-acromio-deltoïdienne fine (< 2 mm), non distendue, sans hyperhémie.
- Tendon du supra-épineux d'échostructure fibrillaire conservée, sans rupture ni calcification.
- Conclusion : examen normal.`,
  competences: [
    { id: 'epaule.c01', type: 'coupe', libelle: 'Obtenir la coupe postérieure de l\'espace quadrilatère et y nommer le paquet axillaire', niveau: 1, sources: [0] },
    { id: 'epaule.s01', type: 'structure', libelle: 'Identifier la bourse sous-acromio-deltoïdienne entre ses deux liserés graisseux', niveau: 1, sources: [0] },
    { id: 'epaule.p01', type: 'pathologie', libelle: 'Reconnaître une bursite sous-acromio-deltoïdienne et la distinguer du cartilage', niveau: 2, sources: [0], patho: 'bursite-sous-acromio-deltoidienne' },
    { id: 'epaule.a01', type: 'piege', libelle: 'Lever une anisotropie du supra-épineux avant de conclure à une rupture', niveau: 1, sources: [0] },
    { id: 'epaule.g01', type: 'geste', libelle: 'Bursite confirmée → fiche sous-acromiale', niveau: 2, sources: [0] },
  ],
  references: [
    { auteurs: 'ESSR, sous-comité échographie', titre: 'Musculoskeletal ultrasound technical guidelines — shoulder', revue: 'European Society of Musculoskeletal Radiology', annee: '2010', url: 'https://essr.org/content-essr/uploads/2016/10/shoulder.pdf', type: 'guide technique', verif: false, note: 'URL vue sur essr.org ; auteurs et titre exacts à confirmer en ouvrant le PDF' },
  ],
  videos: [
    { titre: 'Subacromial Bursa Injection - Ultrasound Scanning Technique', source: 'YouTube', url: 'https://www.youtube.com/watch?v=_rQx6mXq698', note: 'Clarius : balayage de la bourse, 3 min 17 (lien vérifié dans la fiche sous-acromiale)' },
  ],
});
