/* Coupe anatomique recalée — rhizarthrose, trapézo-métacarpienne (format : .claude/skills/echo-anatomie/SKILL.md).
   echo-3 : Hamoudi et al., Cureus 2023, fig. 3 panneau A (CC BY), 750 × 363 px : injection échoguidée sur pièce anatomique avec
   un échographe de poche (Vscan Air), trapèze et premier métacarpien désignés, aiguille jalonnée d'astérisques rouges. Tracée le
   7 octobre 2026 en remplacement de Patel 2023 fig. 13c (image presque noire), sur demande de Mat. echo-1 (Patel fig. 12b) n'est
   pas tracée : Mat l'a gardée en illustration (bilan du 7 octobre, légende corrigée). */
(function () {
  const TRAP = [[40,305],[100,306],[150,306],[200,318],[250,335],[300,328],[350,330],[400,322],[450,314],[500,308],[550,322],[585,345],[605,372],[620,395]];
  const M1 = [[628,395],[640,360],[650,318],[662,296],[700,288],[760,284],[820,286],[880,292],[940,296],[1000,292]];
  const TEND_H = [[380,275],[450,255],[520,240],[600,232],[700,226],[800,222],[900,228],[1000,230]];
  const TEND_B = [[380,322],[450,314],[500,308],[550,322],[585,340],[640,328],[662,296],[700,288],[760,284],[820,286],[880,292],[940,296],[1000,292]];
  ECHO.anat['rhizarthrose-tmc'] = [{
    fig: 'img/rhizarthrose-tmc/echo-3.jpg',
    valide: false,
    vb: [1000, 484], orient: { left: 'Proximal (trapèze)', right: 'Distal (M1)' },
    lecture: [
      'Certain — TRAPEZIUM (gauche) et 1st METACARPAL (droite) : étiquettes des auteurs ; aiguille jalonnée par cinq astérisques rouges, de (121 ; 142) à (603 ; 342), entrant par le bord gauche de l\'image (côté trapèze, proximal) et descendant vers l\'interligne. Même orientation que le schéma apparié ; sens de ponction inverse de celui de la fiche (entrée distale).',
      'Probable — corticale dorsale du trapèze : ligne brillante bosselée à y ≈ 305–335 de x ≈ 150 à 550, puis versant distal qui plonge vers l\'interligne (x ≈ 585–620, y 345–395) ; corticale du premier métacarpien : ligne brillante à y ≈ 285–300 de x ≈ 660 au bord droit, versant proximal remontant de l\'interligne (x ≈ 630–660). Interligne : encoche sombre en V entre les deux (x ≈ 605–650), au fond de laquelle est le dernier astérisque — « pointe dans l\'articulation » selon les auteurs (dont le panneau B montre le colorant intra-articulaire).',
      'Probable — bande fibrillaire posée sur les deux corticales (y ≈ 225–300, x > 380) : tendons du premier compartiment (long abducteur / court extenseur du pouce) ou capsule dorsale, non désignés par les auteurs — dessinée en tendon.',
      'Supposition — plan hétérogène entre la graisse sous-cutanée (bande sombre, y ≈ 25–105) et la bande tendineuse (y ≈ 105–275) : tissu sous-cutané profond, jonction musculo-tendineuse en coupe oblique ? laissé non attribué (gris hachuré) ; sur ce plan, à gauche, l\'aiguille est bien visible, au-delà de x ≈ 450 elle se confond avec la corticale qu\'elle longe.',
      'Supposition — corticale à gauche de x ≈ 150 (ligne brillante à y ≈ 305) : trapèze encore, ou scaphoïde / STT ? dessinée en pointillé. Le contenu du V articulaire (liquide, cartilage, capsule) n\'est pas tranché : gris hachuré.',
      'Extrapolé — profondeur des deux os (pièce anatomique, ombre acoustique grise et non noire sur cet appareil de poche).',
    ],
    structures: [
      { id: 'peau', tissu: 'peau', haut: [[0,0],[1000,0]], bas: [[0,25],[1000,25]] },
      { id: 'sc', tissu: 'graisse', haut: [[0,25],[1000,25]], bas: [[0,105],[1000,105]] },
      { id: 'plan', tissu: 'indetermine', haut: [[0,105],[1000,105]], bas: [[0,300],[60,303],[100,306],[150,306],[200,318],[250,335],[300,328],[340,330],[380,275],[450,255],[520,240],[600,232],[700,226],[800,222],[900,228],[1000,230]] },
      { id: 'tendon', tissu: 'tendon', haut: TEND_H, bas: TEND_B, enthese: -0.3 },
      { id: 'interligne', tissu: 'indetermine', contour: [[585,340],[640,328],[650,318],[640,360],[628,395],[620,395],[605,372]] },
      { id: 'aiguille', tissu: 'aiguille', ligne: [[20,105],[603,343]], ep: 5 },
      { id: 'trapeze', tissu: 'os', cortex: TRAP, vu: [2, 13] },
      { id: 'm1', tissu: 'os', cortex: M1 },
    ],
    labels: [
      { s: 'trapeze', x: 350, y: 335, dx: -60, dy: 95, text: 'Trapèze', vue: 'anat' },
      { s: 'm1', x: 820, y: 290, dx: 60, dy: 110, text: 'Base du 1er métacarpien', vue: 'anat' },
      { s: 'interligne', x: 625, y: 365, dx: 15, dy: 90, text: 'Interligne TMC (pointe)' },
      { s: 'aiguille', x: 253, y: 197, dx: -103, dy: -37, text: 'Aiguille (abord proximal)' },
      { s: 'tendon', x: 800, y: 255, dx: 40, dy: -170, text: 'Tendon (1er compartiment ?)', vue: 'anat' },
      { s: 'sc', x: 500, y: 60, dx: -70, dy: 0, text: 'Graisse sous-cutanée', vue: 'anat' },
      { s: 'plan', x: 150, y: 250, dx: -40, dy: 150, text: 'Plan non attribué', vue: 'anat' },
    ],
  }];
})();
