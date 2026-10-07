/* slug('Bursite sous-acromio-deltoïdienne') → 'bursite-sous-acromio-deltoidienne' : identifiants stables de cartes et de pathologies */
module.exports = s => String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
