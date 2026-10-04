/* Régénère l'index de gestes de la skill /cr-consultation à partir des fiches de l'atlas.
   Usage : node scripts/export-skill-index.js   (à relancer après toute révision de l'atlas)
   Sortie : ~/.claude/skills/cr-consultation/reference/atlas-gestes-ifd.md
   Seul le tableau (entre « ## Index par région » et « ## Limites ») est réécrit ; l'en-tête et
   le pied de page du fichier restent éditables à la main. Les colonnes « cible clinique »,
   « ASRA », « preuve » et « GCS » sont curées à la main dans le dictionnaire R ci-dessous
   (relecture des fiches au 2 oct. 2026) ; le comptage des références non vérifiées est calculé. */
const fs=require('fs'),path=require('path'),vm=require('vm'),os=require('os');
const dir=path.join(__dirname,'..','js/data/procedures');
const procs={};
global.window=global;
global.ECHO={register:(o)=>procs[o.id]=o,procedures:{},order:[]};
for(const f of fs.readdirSync(dir).filter(x=>x.endsWith('.js')).sort()) vm.runInThisContext(fs.readFileSync(path.join(dir,f),'utf8'),{filename:f});
// id -> [cible clinique, ASRA, preuve atlas (courte), GCS, flag]
const R={
// TÊTE ET COU
'articulation-temporo-mandibulaire':['Arthrose ATM symptomatique (douleur pré-auriculaire mécanique, crépitations, limitation d\'ouverture) ; closed lock irréductible ; après échec 4-6 sem de mesures conservatrices','F','Modérée (ECR petits, biais élevé)','ALR'],
'facettes-cervicales':['Cervicalgie postérieure axiale d\'origine facettaire présumée, sans radiculalgie ni signe neurologique, résistante au conservateur','I','Faible (peu d\'études non randomisées)','ALR'],
'ganglion-stellaire':['SDRC I/II du membre supérieur (composante sympathique plausible) ; douleurs neuropathiques MS / hémiface d\'origine sympathique','I','Modérée pour SDRC (ECR petits)','ALR (bloc sympathique)'],
'nerf-grand-occipital':['Névralgie d\'Arnold ; céphalée cervicogénique ; céphalées primaires (bloc)','F','Modérée à forte selon indication','ALR'],
'nerfs-petit-occipital-grand-auriculaire':['Névralgie occipitale latérale (petit occipital) ; névralgie du grand auriculaire','F','Faible à modérée','ALR'],
'nerfs-trijumeau-terminaux':['Névralgie trigéminale en attente ou échec relatif du traitement médical (bloc d\'appoint) ; NT secondaire / périphérique post-traumatique ou post-chirurgicale','F','Faible à modérée','ALR'],
'plexus-cervical-superficiel':['Douleur neuropathique cicatricielle cervicale (thyroïdectomie, parathyroïdectomie, endartériectomie, curage) ; névralgie du grand auriculaire','F','Forte en périopératoire, plus faible en chronique','ALR'],
'points-gachette-cervico-scapulaires':['Syndrome myofascial cervico-scapulaire documenté (bande tendue, point exquis, douleur référée) résistant à 4-6 sem de conservateur','F','Faible à modérée (court terme)','ALR si infiltration ; dry needling : hors pratique, non proposé'],
'troisieme-nerf-occipital-branches-mediales-cervicales':['Céphalée cervicogénique C2-C3 ; cervicalgie facettaire post-whiplash — débouché = RF','I','Forte pour RF après blocs comparatifs','RF-centré : non proposé par ce balayage (plateau f.2-3)'],
// THORAX
'erector-spinae-plane':['NPZ / zona thoracique ; douleur pariétale thoracique post-chirurgicale (PTPS) ; analgésie de paroi','Non listé (par analogie F)','Forte en aigu péri-opératoire ; faible en chronique','ALR'],
'intercostal':['NPZ thoracique (bloc test + antalgique répété, souvent seul geste réalisable chez le sujet âgé fragile) ; PTPS / post-VATS','F','Faible en chronique','ALR'],
'paravertebral-thoracique':['Zona thoracique aigu / NPZ ; PTPS (prévention et curatif)','I','Forte en prévention PTPS (péri-op) ; faible en chronique','ALR'],
'pecs':['Syndrome douloureux post-mastectomie (PMPS), surtout après curage ; douleur de paroi thoracique antérieure post-tumorectomie / radique','F','Forte en péri-op ; faible en chronique','ALR'],
'serratus-plane':['PMPS T2-T6 latéral ; névralgie intercosto-brachiale après curage axillaire','F','Forte en aigu ; faible en chronique','ALR'],
'sterno-costo-claviculaire':['Tietze (cartilage chondro-costal 2e-3e) ; costochondrite ; arthropathie sterno-claviculaire','F','Faible (séries, avis d\'experts)','ALR'],
// RACHIS, BASSIN, PAROI
'acnes-nevralgie-parietale-abdominale':['Douleur pariétale abdominale chronique : point exquis <2 cm au bord latéral du droit, Carnett +, bilan digestif négatif (l\'infiltration test est le geste qui tranche)','F','Modérée (infiltration dx, ECR hollandais)','ALR'],
'branches-mediales-lombaires':['Lombalgie facettaire — le bloc test conditionne une RF','I','Faisabilité bonne ; efficacité = RF','RF-centré : non proposé par ce balayage (plateau f.2-3)'],
'caudale':['Radiculalgie L5/S1 sur hernie ou conflit foraminal après échec médical ; canal lombaire étroit à claudication (gros volume)','I','Bonne pour le placement ; effet modeste (Cochrane épidurale, plateau f.1)','Épidurale'],
'epidurale-interlaminaire-echo-assistee':['Radiculalgie lombo-sacrée sur hernie / conflit foraminal après échec médical ; canal étroit à claudication','I (conséquence d\'un hématome = la plus grave)','Bonne pour l\'aide écho ; effet modeste (plateau f.1)','Épidurale'],
'ganglion-impar':['Coccygodynie chronique après échec conservateur ; douleur périnéale médiane sympathique ou mal systématisée','I','Faible (séries)','ALR (bloc sympathique)'],
'genito-femoral':['Douleur inguino-scrotale / labiale chronique post-chirurgicale (hernie, vasectomie, orchidopexie…) ; orchialgie après élimination urologique','F','Faible (séries, aucun ECR de bloc isolé)','ALR'],
'ilio-inguinal-ilio-hypogastrique':['Douleur inguinale chronique post-herniorraphie (CPIP) ; névralgie pariétale post-Pfannenstiel / césarienne / appendicectomie','F','Discordante (précision forte ; efficacité chronique faible)','ALR'],
'nerf-pudendal':['Névralgie pudendale canalaire (critères de Nantes) ; bloc diagnostique avant toute escalade','Non individualisé (traiter comme I)','Modérée sur la faisabilité écho ; efficacité faible-modérée','ALR'],
'nerfs-cluneaux':['Lombalgie basse unilatérale avec point exquis sur la crête iliaque à 6-8 cm de la ligne médiane ; fessalgie haute / pseudo-sciatique sans topographie radiculaire','F','Faible à modérée','ALR'],
'piriforme':['Fessalgie unilatérale majorée par l\'assis prolongé, point profond en regard de la grande incisure ; « sciatique » sans lombalgie ni corrélat radiculaire','F','Modérée sur la précision écho','ALR'],
'sacro-iliaque':['Douleur sacro-iliaque mécanique (fessière basse sous-L5, appui monopodal) ; spondyloarthrite avec sacro-iliite active','F','Modérée (ECR petits)','ALR'],
// MEMBRE SUPÉRIEUR
'acromio-claviculaire':['Arthrose AC symptomatique et concordante (point exquis de l\'interligne) ; ostéolyse distale de la clavicule','F','Faible à modérée','ALR'],
'calcifications-coiffe-barbotage':['Tendinopathie calcifiante symptomatique de la coiffe, calcification dense bien limitée à cône d\'ombre (Molé A/B), après échec conservateur','F','Modérée à bonne (ECR, revues)','HORS PRATIQUE de Mat : non proposé'],
'de-quervain':['Ténosynovite de De Quervain confirmée (bord radial du poignet, préhension) ; poignet de la jeune mère','F','Forte pour le corticoïde','ALR ; libération percutanée : hors pratique, non proposée'],
'doigt-a-ressort':['Doigt / pouce à ressort symptomatique (ressaut, nodule, poulie A1 épaissie) ; libération percutanée en variante','F','Forte pour le corticoïde','ALR ; libération percutanée : hors pratique, non proposée'],
'epicondylalgie-laterale':['Épicondylalgie latérale chronique >3 mois résistant à la rééducation excentrique et à l\'orthèse ; tendinose à l\'écho','F','Hétérogène (corticoïde : court terme, inférieur à moyen terme)','ALR ; fenestration : hors pratique, non proposée ; PRP : liste'],
'gleno-humerale':['Omarthrose douloureuse malgré antalgiques, AINS, kiné ; capsulite rétractile (corticoïde, hydrodilatation)','F','Modérée à forte (corticoïde court terme)','ALR'],
'long-biceps':['Ténosynovite du long biceps documentée (épanchement de gaine) ; tendinopathie symptomatique','F','Modérée sur la précision ; efficacité faible','ALR'],
'nerf-axillaire':['Épaule chronique en association au bloc suprascapulaire (capsulite, omarthrose) ; épaule hémiplégique douloureuse','I (en pratique : profond, non compressible)','Modérée en association (ECR petits)','ALR'],
'nerf-median-canal-carpien':['Canal carpien léger à modéré confirmé (clinique + ENMG / écho) ; SCC de la grossesse / post-partum (hydrodissection sans corticoïde)','F','Forte à court terme (Cochrane)','ALR ; PRP : liste'],
'nerf-suprascapulaire':['Épaule chronique après échec conservateur (omarthrose, capsulite, coiffe) ; épaule hémiplégique douloureuse (geste sans corticoïde possible)','F','Forte (méta-analyses d\'ECR)','ALR'],
'nerf-ulnaire-coude':['Tunnel cubital léger à modéré (McGowan I-II) ; neuropathie ulnaire post-traumatique / post-opératoire','F','Modérée (hydrodissection, ECR petits)','ALR'],
'poignet-radiocarpienne-kyste':['Arthrose radio-/médio-carpienne ; arthrites inflammatoires ; kyste synovial','F','Modérée sur la précision écho','ALR'],
'rhizarthrose-tmc':['Rhizarthrose en poussée (Eaton I-III) après échec d\'orthèse 4-6 sem ; synovite','F (artère radiale : Doppler)','Faible à modérée (effet modeste et bref)','ALR'],
'sous-acromiale':['Syndrome sous-acromial symptomatique après 4-6 sem de rééducation ; tendinopathie non rompue de coiffe avec bursite','F','Modérée (précision) ; corticoïde modeste','ALR'],
// MEMBRE INFÉRIEUR
'bourse-trochanterienne-gtps':['GTPS : douleur latérale de hanche mécanique (décubitus latéral, escaliers) ; tendinopathie des fessiers documentée','F','Modérée (corticoïde court terme seulement)','ALR ; fenestration : hors pratique, non proposée'],
'cheville-tibio-talienne-sous-talienne':['Arthrose tibio-talienne post-traumatique ; conflit antérieur de cheville ; arthrose sous-talienne','F','Modérée sur la précision écho','ALR'],
'coxo-femorale':['Coxarthrose symptomatique en échec antalgiques / AINS / kiné, en attente d\'arthroplastie ou non opérable ; arthrite inflammatoire de hanche','F','Modérée (corticoïde court terme) ; faible pour l\'acide hyaluronique','ALR'],
'fasciite-plantaire':['Talalgie plantaire >3 mois résistante aux étirements / orthèses ; fasciopathie à l\'écho','F','Modérée (corticoïde court terme)','ALR ; PRP : liste ; fenestration : hors pratique, non proposée'],
'genou-intra-articulaire':['Gonarthrose en poussée après échec conservateur ; épanchement à ponctionner ; kyste de Baker','F','Forte pour la précision ; corticoïde modéré et bref','ALR ; PRP : liste'],
'ischio-jambiers-proximaux':['Douleur fessière basse sur tubérosité ischiatique, assis prolongé ; tendinopathie d\'insertion / bursite ischiatique','I par prudence (non listé)','Faible (séries)','ALR'],
'nerf-cutane-lateral-cuisse':['Méralgie paresthésique confirmée (brûlures de la face antéro-latérale de cuisse, sans déficit moteur) ; bloc diagnostique vs radiculalgie','F','Faible à modérée','ALR'],
'nerf-fibulaire-commun':['Neuropathie compressive du fibulaire au col de fibula ; douleur neuropathique post-traumatique / post-chirurgicale','F','Faible (séries, avis d\'experts)','ALR'],
'nerf-obturateur':['Bloc test avant RF des branches articulaires de hanche ; douleur de hanche en échec d\'infiltration intra-articulaire (ou corticoïdes contre-indiqués)','Non listé (extrapolé, à confirmer)','Forte pour le bloc anesthésique ; faible en chronique','ALR'],
'nerf-saphene-infrapatellaire':['Névralgie du saphène / de sa branche infrapatellaire (bande face médiale du genou) ; douleur médiale résiduelle après bloc géniculé','F','Faible à modérée','ALR'],
'nerf-sural':['Névralgie du sural post-chirurgicale (tendon d\'Achille) ; douleur du site donneur de greffon','F','Modérée pour le gain de l\'écho ; efficacité faible','ALR'],
'nerfs-genicules':['Gonarthrose non opérable ou post-PTG douloureuse — débouché = RF','F','Modérée (ECR pour la RF)','RF-centré : non proposé par ce balayage (plateau f.2-3)'],
'nevrome-cicatriciel':['Douleur focale reproductible à la pression d\'un point cicatriciel, Tinel + ; douleur du moignon d\'amputation','F (I si site profond)','Faible à modérée (séries)','ALR ; cryoneurolyse : hors liste → AG'],
'nevrome-de-morton':['Métatarsalgie du 3e (ou 2e) espace avec névrome confirmé à l\'écho, après échec de 6-12 sem de conservateur','F','Modérée à court terme','ALR ; neurolyse : à qualifier'],
'patte-d-oie-tendinopathie-patellaire':['Bursite de la patte d\'oie (point exquis 4-6 cm sous l\'interligne médial) ; tendinopathie patellaire proximale résistante','F','Faible (bénéfice modeste et bref)','ALR ; ténotomie : hors pratique, non proposée'],
'peng-branches-articulaires-hanche':['Bloc test avant RF des branches articulaires de hanche (coxarthrose non opérable) ; douleur de hanche en échec d\'infiltration','Non listé (I à E par analogie, à confirmer)','Forte en aigu ; faible en chronique','ALR'],
'tendon-achille-retrocalcaneen':['Bursite rétro-calcanéenne / conflit de Haglund après échec du chaussage ; tendinopathie corporéale chronique >3-6 mois','F','Forte pour l\'exercice excentrique ; infiltration modeste','ALR ; PRP : liste ; ténotomie : hors pratique, non proposée'],
'tunnel-tarsien-nerf-tibial':['Tunnel tarsien (plante / bord médial du pied, nocturne) ; talalgie chronique par atteinte du nerf de Baxter','F','Faible (séries, avis d\'experts)','ALR'],
// SOCLE (techniques transversales proposables)
'socle-cryoneurolyse':['Douleur focale de topographie nerveuse ayant répondu à un bloc test ; névromes cicatriciels et de moignon','F si cible superficielle ; I-E si profonde','Faible à modérée selon cible','Hors liste → AG requise'],
'socle-hydrodissection':['Canal carpien léger à modéré (mieux documenté) ; autres syndromes canalaires (ulnaire au coude, fibulaire…)','F','Modérée pour le canal carpien ; extrapolée ailleurs','ALR'],
};

const REG={'tete-cou':'Tête et cou','thorax':'Thorax','rachis-bassin':'Rachis, bassin, paroi','membre-sup':'Membre supérieur','membre-inf':'Membre inférieur','socle':'Techniques transversales'};
const order=['tete-cou','thorax','rachis-bassin','membre-sup','membre-inf','socle'];
const ignorés=['socle-echographie','socle-injectables','socle-securite','socle-radiofrequence'];
const manquants=Object.keys(procs).filter(id=>!R[id]&&!ignorés.includes(id));
if(manquants.length) console.error('ATTENTION — fiches sans ligne dans R :',manquants.join(', '));
const inconnus=Object.keys(R).filter(id=>!procs[id]); if(inconnus.length) console.error('ATTENTION — ids inconnus dans R :',inconnus.join(', '));
const t=s=>String(s).replace(/\|/g,'/');
let tot=0,nv=0,md='';
for(const reg of order){
  const ids=Object.keys(procs).filter(id=>procs[id].region===reg&&R[id]).sort();
  if(!ids.length) continue;
  md+=`\n### ${REG[reg]}\n\n| Fiche atlas | Cible clinique (déclencheur) | Risque hémorragique ASRA-ESRA 2018 | Preuve (atlas) | Réfs non vérifiées | Statut GCS (lecture IFD) |\n|---|---|---|---|---|---|\n`;
  for(const id of ids){
    const [cible,rh,prv,gcs]=R[id]; const refs=procs[id].references||[]; const n=refs.filter(r=>r.verif===false).length;
    md+=`| \`${id}\` — ${t(procs[id].titreCourt||procs[id].titre)} | ${t(cible)} | ${t(rh)} | ${t(prv)} | ${n}/${refs.length} | ${t(gcs)} |\n`;
  }
}
for(const o of Object.values(procs)){ const r=o.references||[]; tot+=r.length; nv+=r.filter(x=>x.verif===false).length; }
const target=path.join(os.homedir(),'.claude/skills/cr-consultation/reference/atlas-gestes-ifd.md');
let cur=fs.readFileSync(target,'utf8');
const i=cur.indexOf('## Index par région\n'), j=cur.indexOf('\n## Limites');
if(i<0||j<0) throw new Error('repères introuvables dans '+target);
cur=cur.slice(0,i)+'## Index par région\n'+md+cur.slice(j);
const d=new Date().toISOString().slice(0,10);
cur=cur.replace(/\d+ sur \d+ \(\d+ %\)/,nv+' sur '+tot+' ('+Math.round(100*nv/tot)+' %)');
fs.writeFileSync(target,cur);
console.log('Index régénéré —',Object.keys(R).length,'gestes ;',nv,'/',tot,'références non vérifiées ('+d+')');
