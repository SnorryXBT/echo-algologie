/* Coupes anatomiques recalées — socle hydrodissection (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-1 : Qiu et al., J Pain Res 2026, fig. 2 — planche avant (A) / après (B) ; seul le panneau B est tracé, `crop` propre
            à l'entrée (`anat-grid.js socle-hydrodissection 0 <dossier> 0.555,0,0.37,0.88`). Sigles des auteurs : * = nerf tibial,
            triangles = plan d'hydrodissection, « Injection area », « Tibial medial malleolus », « Right ».
   echo-2 (canal carpien, Jobe 2026 fig. 5) : NON TRACÉE — côté radial / ulnaire non établi (voir zz-refus.js). */
(function () {
  const ovale = (cx, cy, rx, ry, rot) => { const o = [], a = (rot || 0) * Math.PI / 180; for (let i = 0; i < 14; i++) { const t = i / 14 * 2 * Math.PI, x = rx * Math.cos(t), y = ry * Math.sin(t); o.push([Math.round(cx + x * Math.cos(a) - y * Math.sin(a)), Math.round(cy + x * Math.sin(a) + y * Math.cos(a))]); } return o; };
  const DERME = [[0,24],[1000,24]];
  /* rétinaculum : ligne brillante continue mesurée à y ≈ 68–72 de x = 50 à 700, rejoint la corticale au sommet de la malléole */
  const RET = [[0,70],[100,72],[200,70],[300,70],[400,70],[500,69],[600,70],[680,68],[730,64],[760,60]];
  const MALL = [[585,300],[600,262],[625,218],[650,178],[678,132],[705,100],[732,76],[760,60],[790,70],[830,96],[875,124],[930,150],[1020,168]];

  ECHO.anat['socle-hydrodissection'] = [{
    fig: 'img/socle-hydrodissection/echo-1.jpg',
    crop: [0.555, 0, 0.37, 0.88],
    panneau: 'B (après hydrodissection)',
    valide: false,
    vb: [1000, 789], orient: { left: 'Postérieur', right: 'Antérieur (malléole)' },
    lecture: [
      'Certain — orientation : coupe transversale rétro-malléolaire de la cheville droite (« Right », « Tibial medial malleolus » incrustés par les auteurs) ; la malléole médiale est à droite, donc antérieur à droite et postérieur à gauche. La légende d\'origine dit à la fois « transverse » et « longitudinal view » : le nerf en section ronde tranche pour la coupe transversale.',
      'Certain — malléole médiale (sigle des auteurs) : corticale convexe à cône d\'ombre franc, sommet à y ≈ 60 ; versant postérieur net (pics mesurés), versant antérieur plus terne, tracé en pointillé.',
      'Certain — halo d\'injectat (triangles et « Injection area » des auteurs) : croissant anéchogène ouvert vers l\'avant, qui coiffe le nerf par l\'arrière, le haut et le bas. Le décollement n\'est pas circonférentiel.',
      'Probable — nerf tibial (* des auteurs) : contour posé sur le bord interne du croissant ; son versant antérieur, sans liquide, n\'est pas délimité. Diamètre ≈ 5 mm à l\'échelle de 4 cm de la sonde.',
      'Probable — rétinaculum des fléchisseurs : ligne hyperéchogène continue juste sous le tissu sous-cutané, qui rejoint la corticale au sommet de la malléole ; les auteurs ne la nomment pas.',
      'Supposition — ovale anéchogène en avant du nerf (x ≈ 375) : vaisseau tibial postérieur (veine ?), sans Doppler. Trait blanc oblique : aiguille d\'après sa forme, non légendée par les auteurs ; reportée en pointillé.',
      'Supposition — tout le contenu du tunnel hors nerf (tendons du tibial postérieur et du long fléchisseur des orteils contre la malléole, long fléchisseur de l\'hallux en profondeur) n\'est pas individualisable sur cette image retraitée : laissé « non attribué » plutôt que nommé au hasard.',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,-10],[1000,-10]], bas: DERME },
      { id: 'sc', tissu: 'graisse', haut: DERME, bas: RET.concat([[790,56],[860,48],[1000,40]]) },
      { id: 'tunnel', tissu: 'indetermine', haut: RET.concat([[790,56],[860,48],[1000,40]]), bas: [[0,800],[1000,800]] },
      { id: 'ret', tissu: 'fascia', ligne: RET, ep: 9 },
      { id: 'vaisseau', tissu: 'veine', contour: ovale(378, 177, 24, 17, -10) },
      { id: 'halo', tissu: 'liquide', contour: [[322,108],[290,116],[250,135],[222,160],[207,195],[214,230],[238,258],[275,274],[316,277],[312,262],[279,256],[254,238],[244,205],[250,174],[272,151],[300,135],[326,122]] },
      { id: 'nerf', tissu: 'nerf', contour: ovale(292, 198, 45, 54) },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[114,36],[256,172]], extrapole: true },
      { id: 'malleole', tissu: 'os', cortex: MALL, vu: [0, 8] },
    ],
    labels: [
      { s: 'sc', x: 900, y: 40, dx: -40, dy: -18, text: 'Tissu sous-cutané' },
      { s: 'ret', x: 500, y: 70, dx: -20, dy: -48, text: 'Rétinaculum des fléchisseurs' },
      { s: 'vaisseau', x: 372, y: 182, dx: 150, dy: 300, text: 'Vaisseau ? (sans Doppler)' },
      { s: 'tunnel', x: 300, y: 560, dx: 0, dy: 90, text: 'Contenu du tunnel non résolu' },
      { s: 'malleole', x: 700, y: 104, dx: 130, dy: 420, text: 'Malléole médiale', vue: 'anat' },
      { s: 'malleole', x: 800, y: 420, dx: 0, dy: 200, text: 'Cône d\'ombre osseux', vue: 'echo' },
      { s: 'nerf', x: 300, y: 205, dx: -170, dy: 330, text: 'N. tibial', vue: 'anat' },
      { s: 'halo', x: 222, y: 200, dx: -110, dy: -60, text: 'Injectat (halo)', vue: 'anat' },
      { s: 'aiguille', x: 200, y: 122, dx: -60, dy: -85, text: 'Aiguille (supposée)', vue: 'anat' },
    ],
  }];
})();
