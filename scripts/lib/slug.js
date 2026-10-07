/* slug('Bursite sous-acromio-deltoïdienne') → 'bursite-sous-acromio-deltoidienne' : identifiants stables de cartes et de pathologies.
   Ligatures développées (œ → oe, æ → ae) avant la décomposition : NFD ne les décompose pas, elles seraient sinon perdues (« Œdème » → « deme »). */
module.exports = s => String(s || '').toLowerCase().replace(/œ/g, 'oe').replace(/æ/g, 'ae').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
