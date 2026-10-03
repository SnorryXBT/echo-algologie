/* Coupes anatomiques recalées — plexus cervical superficiel / intermédiaire (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : coupe au processus transverse de C4 (Spasari et al., Langenbeck's Arch Surg 2026, fig. 16) — contours repris des tracés des auteurs.
   echo-2 : bloc cervical intermédiaire en temps réel (Choi et al., Anesth Pain Med (Seoul) 2026, fig. 1, CC BY-NC) — médial à gauche inscrit par
   les auteurs ; SCM, IF, PF, IJV, CA, aiguille et nappe (astérisques) désignés. Remplace la figure de Thangaraj & Selvaraj (annotations
   contraires à l'anatomie, retirée le 3 octobre 2026). */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 12; i++) { const t = i / 12 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const PEAU = [[0,12],[1000,12]];
  /* contour rose des auteurs : faces superficielle et profonde du sterno-cléido-mastoïdien */
  const SCM_HAUT = [[0,143],[60,138],[100,122],[150,112],[200,100],[250,95],[300,84],[350,78],[400,74],[450,77],[500,70],[600,60],[700,55],[800,52],[850,45],[900,40],[950,42],[1000,33]];
  const SCM_BAS = [[0,213],[50,225],[100,232],[150,233],[200,220],[250,212],[300,210],[340,222],[380,235],[400,250],[430,272],[455,277],[468,288],[500,285],[550,278],[600,268],[650,252],[700,240],[750,227],[800,215],[850,210],[900,210],[950,205],[1000,200]];
  const IL = SCM_BAS.slice(12);                    // trait blanc « IL » : lame superficielle, sous la face profonde du muscle
  const PF = [[468,300],[480,333],[520,335],[600,330],[640,320],[680,305],[700,298],[740,297],[800,297],[830,295],[860,285],[900,276],[950,273],[1000,272]];   // trait blanc « PF »
  /* contour crème des auteurs (processus transverse de C4), relevé point par point ; les deux bouts sortent du cadre par le bas */
  const TP = [[340,790],[376,747],[421,726],[458,695],[477,653],[494,622],[505,597],[506,552],[499,524],[477,500],[464,487],[464,469],[477,458],[499,454],[525,461],[541,479],[564,489],[592,491],[617,483],[645,471],[662,457],[671,437],[675,418],[688,414],[699,416],[716,431],[730,451],[734,461],[723,471],[702,491],[689,505],[690,522],[699,536],[699,550],[710,564],[711,601],[738,596],[769,584],[797,580],[825,578],[848,584],[867,598],[879,626],[886,660],[888,690],[892,790]];
  ECHO.anat['plexus-cervical-superficiel'] = [{
    fig: 'img/plexus-cervical-superficiel/echo-1.jpg',
    valide: true,
    vb: [1000, 771], orient: { left: 'Antérieur / médial', right: 'Postérieur / latéral' },
    lecture: [
      'Probable — veine jugulaire interne : désignée par les auteurs (sigle IJV) en avant et en dedans de la carotide, alors qu\'elle est habituellement antéro-latérale. Compatible avec une sonde postéro-latérale et une tête tournée (la veine vient alors recouvrir la carotide), mais seule une partie de la lumière est dans le champ, sans paroi propre visible : dessinée là où les auteurs la désignent, à confirmer.',
      'Certain — orientation : mentions « Medial » à gauche et « Lateral » à droite dans la marge de la figure d\'origine (marge rognée), concordantes avec le schéma apparié. Les mentions « Cephalic / Caudal » que les auteurs portent en haut et en bas ne correspondent pas à une coupe transversale (le haut est superficiel) : non reprises.',
      'Certain — sterno-cléido-mastoïdien (contour rose), lame superficielle et fascia prévertébral (traits blancs IL et PF), processus transverse de C4 (contour crème), racine C4 (disque vert), carotide, long de la tête, élévateur de la scapula, muscles cervicaux profonds : identités données par les auteurs ; les contours du muscle, des deux fascias, de l\'os et de la racine sont les leurs.',
      'Probable — plan interfascial : bande hyperéchogène saturée comprise entre les deux traits blancs. C\'est la cible du bloc intermédiaire (flèche ICP des auteurs, venue de latéral comme dans la fiche) ; tout ce qui passe sous le trait PF devient un bloc profond.',
      'Supposition — limites du long de la tête, de l\'élévateur de la scapula et des muscles cervicaux profonds : les auteurs ne posent que des sigles ; contours tracés sur les plages hypoéchogènes, la limite élévateur / muscles profonds n\'a pas d\'interface propre.',
      'Probable — les deux reliefs du processus transverse de part et d\'autre de la racine sont le tubercule antérieur (à gauche) et le tubercule postérieur (à droite) ; les auteurs ne les nomment pas. Seuls le fond de la gouttière sous la racine et la lame en arrière renvoient un écho : le reste du contour osseux est celui des auteurs, posé sur le cône d\'ombre.',
      'Certain — niveau C4 (légende d\'origine), au-dessus du niveau cricoïdien où la fiche pose la sonde : mêmes plans fasciaux, rapports osseux différents (dit dans la légende).',
      'Extrapolé — branches du plexus cervical cheminant dans le plan interfascial : non visibles, dessinées en pointillé. La région profonde en dedans du processus transverse et l\'angle inférieur gauche (masqué par un encart photographique des auteurs) sont laissés sans structure.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: PEAU },
      { id: 'sc', tissu: 'graisse', haut: PEAU, bas: SCM_HAUT },
      { id: 'scm', tissu: 'muscle', haut: SCM_HAUT, bas: SCM_BAS },
      { id: 'profond', tissu: 'conjonctif', haut: SCM_BAS, bas: [[0,771],[1000,771]] },
      { id: 'plan', tissu: 'graisse', haut: IL, bas: PF },
      { id: 'plexus-a', tissu: 'nerf', contour: ovale(640, 293, 15, 7, -10), extrapole: true },
      { id: 'plexus-b', tissu: 'nerf', contour: ovale(745, 262, 15, 7, -12), extrapole: true },
      { id: 'plexus-c', tissu: 'nerf', contour: ovale(850, 249, 15, 7, -6), extrapole: true },
      { id: 'il', tissu: 'fascia', ligne: IL, ep: 5 },
      { id: 'pf', tissu: 'fascia', ligne: PF.slice(1), ep: 5 },
      { id: 'vji', tissu: 'veine', contour: [[-40,238],[30,238],[80,248],[108,270],[112,300],[98,325],[60,336],[-40,338]] },
      { id: 'carotide', tissu: 'artere', contour: ovale(262, 340, 138, 92) },
      { id: 'lcm', tissu: 'muscle', contour: [[408,318],[440,310],[478,338],[530,345],[545,368],[540,400],[538,445],[520,458],[499,452],[477,456],[462,470],[440,478],[418,465],[402,430],[400,385],[402,345]] },
      { id: 'lsm', tissu: 'muscle', contour: [[652,322],[690,308],[740,300],[815,300],[860,288],[900,279],[1040,275],[1040,500],[930,482],[850,460],[790,445],[750,447],[737,455],[730,447],[716,428],[699,412],[688,410],[676,412],[668,395],[655,362]] },
      { id: 'dcm', tissu: 'muscle', contour: [[740,462],[752,452],[790,450],[850,465],[930,487],[1040,505],[1040,800],[895,800],[888,690],[886,660],[879,626],[867,598],[848,584],[825,578],[797,580],[769,584],[738,596],[711,601],[710,564],[699,550],[699,536],[690,522],[689,505],[702,491],[723,471],[734,461]] },
      { id: 'racine', tissu: 'nerf', contour: ovale(593, 410, 52, 52) },
      { id: 'tp', tissu: 'os', cortex: TP },
    ],
    labels: [
      { s: 'sc', x: 140, y: 98, dx: 0, dy: -63, text: 'Tissu sous-cutané', vue: 'anat' },
      { s: 'scm', x: 200, y: 185, dx: 255, dy: -150, text: 'Sterno-cléido-mastoïdien', vue: 'anat' },
      { s: 'il', x: 940, y: 205, dx: -79, dy: -170, text: 'Lame superficielle', vue: 'anat' },
      { s: 'plan', x: 640, y: 290, dx: -60, dy: -140, text: 'Cible : plan interfascial (plexus)', vue: 'anat' },
      { s: 'pf', x: 820, y: 297, dx: 30, dy: 55, text: 'Fascia prévertébral', vue: 'anat' },
      { s: 'lsm', x: 945, y: 448, dx: -118, dy: -48, text: 'Élévateur de la scapula', vue: 'anat' },
      { s: 'dcm', x: 930, y: 545, dx: -122, dy: 95, text: 'Muscles cervicaux profonds', vue: 'anat' },
      { s: 'racine', x: 595, y: 448, dx: 5, dy: 92, text: 'Racine C4', vue: 'anat' },
      { s: 'tp', x: 560, y: 622, dx: 30, dy: 78, text: 'Processus transverse de C4', vue: 'anat' },
      { s: 'lcm', x: 465, y: 420, dx: -65, dy: 140, text: 'Long de la tête', vue: 'anat' },
      { s: 'carotide', x: 264, y: 418, dx: 6, dy: 62, text: 'Artère carotide', vue: 'anat' },
      { s: 'vji', x: 55, y: 305, dx: 118, dy: 335, text: 'Veine jugulaire interne', vue: 'anat' },
      { s: 'tp', x: 600, y: 590, dx: 0, dy: 110, text: 'Cône d\'ombre du processus transverse', vue: 'echo' },
    ],
  }, {
    fig: 'img/plexus-cervical-superficiel/echo-2.jpg',
    valide: false,
    vb: [1000, 709], orient: { left: 'Antérieur / médial', right: 'Postérieur / latéral' },
    lecture: [
      'Certain — orientation : « Medial » à gauche, « Lateral » à droite incrustés par les auteurs, carotide et jugulaire interne en dedans : même orientation que le schéma apparié.',
      'Certain — désignés par les auteurs : sterno-cléido-mastoïdien (SCM), feuillet superficiel du fascia cervical profond (IF, ligne brillante qui ferme la face profonde du SCM et monte vers son bord postérieur), fascia prévertébral (PF, ligne brillante épaisse y ≈ 360–370), jugulaire interne (IJV), carotide (CA), aiguille (ligne brillante venant du bord latéral, pointe vers x ≈ 730, y ≈ 262, sous l\'IF) et nappe d\'anesthésique local (astérisques : lentille anéchogène sous l\'IF).',
      'Probable — faces du SCM : face superficielle sur la ligne brillante y ≈ 160–175 en dedans, qui monte vers y ≈ 100 en dehors ; face profonde = IF. Le muscle s\'effile en dehors : son bord postérieur est pris vers x ≈ 850–900, où les deux lignes se rejoignent.',
      'Supposition — entre IF / nappe et PF (y ≈ 285–360, x 430–1000) : zone feuilletée échogène lue comme le tissu conjonctif et graisseux de l\'espace interfascial (où courent les branches du plexus, non individualisées, non dessinées). En dedans, cet espace est occupé par la gaine carotidienne (IJV, CA).',
      'Extrapolé — trajet médial du fascia prévertébral sous les vaisseaux (hors du champ en bas à gauche) : prolongé par continuité, sans signal. Plan profond sous le PF (scalènes, élévateur de la scapula ?) non désigné : laissé non attribué.',
      'Supposition — couche superficielle 22–160 : tissu sous-cutané et platysma non séparés (lignes brillantes multiples), dessinés en graisse.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,22],[1000,22]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,22],[1000,22]], bas: [[0,160],[200,168],[300,172],[400,150],[500,128],[600,115],[700,108],[800,100],[900,95],[1000,90]] },
      { id: 'scm', tissu: 'muscle', haut: [[0,160],[200,168],[300,172],[400,150],[500,128],[600,115],[700,108],[800,100],[900,95],[1000,90]], bas: [[0,300],[100,297],[200,291],[300,283],[380,275],[440,262],[500,245],[560,228],[620,212],[680,198],[740,188],[800,176],[860,150],[900,120],[940,100],[1000,90]] },
      { id: 'inter', tissu: 'conjonctif', haut: [[0,300],[100,297],[200,291],[300,283],[380,275],[440,262],[500,245],[560,228],[620,212],[680,198],[740,188],[800,176],[860,150],[900,120],[940,100],[1000,90]], bas: [[0,540],[120,520],[250,445],[350,410],[430,395],[500,380],[600,368],[700,362],[800,358],[900,362],[1000,366]] },
      { id: 'if', tissu: 'fascia', ligne: [[0,300],[100,297],[200,291],[300,283],[380,275],[440,262],[500,245],[560,228],[620,212],[680,198],[740,188],[800,176],[860,150]], ep: 5 },
      { id: 'pf', tissu: 'fascia', ligne: [[0,540],[120,520],[250,445],[350,410],[430,395],[500,380],[600,368],[700,362],[800,358],[900,362],[1000,366]], ep: 7 },
      { id: 'profond', tissu: 'indetermine', haut: [[0,540],[120,520],[250,445],[350,410],[430,395],[500,380],[600,368],[700,362],[800,358],[900,362],[1000,366]], bas: [[0,709],[1000,709]] },
      { id: 'ijv', tissu: 'veine', contour: [[100,330],[150,310],[220,302],[300,305],[370,318],[400,345],[380,380],[320,398],[240,402],[160,392],[110,365]] },
      { id: 'ca', tissu: 'artere', contour: [[-10,395],[40,392],[95,410],[125,445],[120,485],[80,510],[20,518],[-10,515]] },
      { id: 'la', tissu: 'liquide', contour: [[470,262],[540,236],[620,213],[700,200],[740,208],[735,238],[690,256],[620,270],[550,283],[490,285]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[1000,190],[730,262]], ep: 5 },
    ],
    labels: [
      { s: 'sc', x: 300, y: 90, dx: -140, dy: -30, text: 'Tissu sous-cutané et platysma' },
      { s: 'scm', x: 250, y: 225, dx: 60, dy: 0, text: 'Sterno-cléido-mastoïdien (SCM)', vue: 'anat' },
      { s: 'if', x: 620, y: 212, dx: -40, dy: -90, text: 'Feuillet superficiel (IF) = face profonde du SCM' },
      { s: 'scm', x: 860, y: 150, dx: 60, dy: -110, text: 'Bord postérieur du SCM', vue: 'anat' },
      { s: 'la', x: 600, y: 250, dx: -170, dy: 90, text: 'Nappe d\'AL entre IF et PF (astérisques)' },
      { s: 'aiguille', x: 870, y: 226, dx: 20, dy: 60, text: 'Aiguille : de latéral en médial, sous l\'IF' },
      { s: 'pf', x: 800, y: 358, dx: 60, dy: 80, text: 'Fascia prévertébral (PF) = limite' },
      { s: 'ijv', x: 260, y: 350, dx: 0, dy: 110, text: 'V. jugulaire interne' },
      { s: 'ca', x: 60, y: 455, dx: 110, dy: 110, text: 'Carotide' },
      { s: 'inter', x: 520, y: 330, dx: 110, dy: 200, text: 'Espace interfascial (branches non vues)', vue: 'anat' },
      { s: 'profond', x: 700, y: 560, dx: 60, dy: 70, text: 'Plan profond non attribué (scalènes ?)', vue: 'anat' },
    ],
  }];
})();
