/* Registre central — chaque fiche s'enregistre via ECHO.register({...}) */
window.ECHO = window.ECHO || {};
(function (E) {
  E.procedures = E.procedures || {};
  E.order = E.order || [];
  E.figures = E.figures || {};   // figures par fiche (js/data/figures/<id>.js)

  E.regions = [
    { id: 'socle',          nom: 'Socle & techniques transversales', court: 'Socle' },
    { id: 'tete-cou',       nom: 'Tête et cou',                      court: 'Tête-cou' },
    { id: 'rachis-bassin',  nom: 'Rachis, bassin et paroi',          court: 'Rachis-bassin' },
    { id: 'thorax',         nom: 'Thorax',                            court: 'Thorax' },
    { id: 'membre-sup',     nom: 'Membre supérieur',                  court: 'Membre sup.' },
    { id: 'membre-inf',     nom: 'Membre inférieur',                  court: 'Membre inf.' },
  ];

  E.types = {
    infiltration:    { nom: 'Infiltration articulaire / péri-tendineuse', court: 'Infiltration' },
    bloc:            { nom: 'Bloc nerveux',                              court: 'Bloc' },
    interventionnel: { nom: 'Geste interventionnel',                     court: 'Interventionnel' },
    socle:           { nom: 'Chapitre transversal',                      court: 'Socle' },
  };

  E.niveaux = { 1: 'Courant', 2: 'Intermédiaire', 3: 'Avancé' };

  E.positions = {
    'dorsal':     'Décubitus dorsal',
    'ventral':    'Décubitus ventral',
    'lateral':    'Décubitus latéral',
    'assis':      'Assis',
    'semi-assis': 'Semi-assis',
    'procubitus': 'Procubitus, coussin sous l\'abdomen',
  };

  E.sondes = {
    'lineaire': 'Linéaire haute fréquence',
    'convexe':  'Convexe basse fréquence',
    'hockey':   'Linéaire compacte (« hockey stick »)',
  };

  E.register = function (p) {
    if (!p || !p.id) throw new Error('Fiche sans id');
    E.procedures[p.id] = p;
    if (E.order.indexOf(p.id) === -1) E.order.push(p.id);
  };

  /* Ordre éditorial des fiches (le manifest). Une fiche absente d'ici est
     tout de même affichée, en fin de région. */
  E.manifest = [
    // Socle
    'socle-echographie', 'socle-injectables', 'socle-securite',
    'socle-radiofrequence', 'socle-cryoneurolyse', 'socle-hydrodissection', 'nevrome-cicatriciel',
    // Tête et cou
    'nerf-grand-occipital', 'nerfs-petit-occipital-grand-auriculaire',
    'troisieme-nerf-occipital-branches-mediales-cervicales', 'facettes-cervicales',
    'ganglion-stellaire', 'plexus-cervical-superficiel', 'nerfs-trijumeau-terminaux',
    'articulation-temporo-mandibulaire', 'points-gachette-cervico-scapulaires',
    // Rachis, bassin, paroi
    'branches-mediales-lombaires', 'erector-spinae-plane', 'sacro-iliaque', 'caudale',
    'epidurale-interlaminaire-echo-assistee', 'nerfs-cluneaux', 'piriforme', 'nerf-pudendal',
    'ganglion-impar', 'ilio-inguinal-ilio-hypogastrique', 'genito-femoral',
    'acnes-nevralgie-parietale-abdominale',
    // Thorax
    'intercostal', 'paravertebral-thoracique', 'serratus-plane', 'pecs',
    'sterno-costo-claviculaire',
    // Membre supérieur
    'nerf-suprascapulaire', 'nerf-axillaire', 'gleno-humerale', 'sous-acromiale',
    'acromio-claviculaire', 'long-biceps', 'calcifications-coiffe-barbotage',
    'epicondylalgie-laterale', 'nerf-ulnaire-coude', 'nerf-median-canal-carpien',
    'poignet-radiocarpienne-kyste', 'de-quervain', 'rhizarthrose-tmc', 'doigt-a-ressort',
    // Membre inférieur
    'coxo-femorale', 'bourse-trochanterienne-gtps', 'ischio-jambiers-proximaux',
    'nerf-cutane-lateral-cuisse', 'nerf-obturateur', 'peng-branches-articulaires-hanche',
    'genou-intra-articulaire', 'nerfs-genicules', 'nerf-saphene-infrapatellaire',
    'patte-d-oie-tendinopathie-patellaire', 'nerf-fibulaire-commun', 'tunnel-tarsien-nerf-tibial',
    'cheville-tibio-talienne-sous-talienne', 'nevrome-de-morton', 'fasciite-plantaire',
    'tendon-achille-retrocalcaneen', 'nerf-sural',
  ];
})(window.ECHO);
