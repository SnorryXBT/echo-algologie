# scripts/anki/test_build.py  — cd scripts/anki && .venv/bin/python -m unittest test_build.py
import json, os, pathlib, shutil, struct, subprocess, sys, tempfile, unittest, zipfile, zlib
from unittest import mock
from build import build
from check import inspect
import build as B, check as C   # accès aux autres fonctions des deux modules (copier, chemin_affiche, ROOT, problemes)

HERE = pathlib.Path(__file__).resolve().parent

def png1x1():
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', 1, 1, 8, 2, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(b'\x00\xff\x00\x00')) + chunk(b'IEND', b'')

class BuildTest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):   # genanki 0.13.1 ne supprime pas son fichier SQLite temporaire : il atterrit ici et non dans $TMPDIR
        cls.tmp = tempfile.mkdtemp(); cls.tmp_avant, tempfile.tempdir = tempfile.tempdir, cls.tmp
    @classmethod
    def tearDownClass(cls): tempfile.tempdir = cls.tmp_avant; shutil.rmtree(cls.tmp)
    def setUp(self):
        self.root = pathlib.Path(tempfile.mkdtemp())
        (self.root / 'dist/msk/img/genou').mkdir(parents=True)
        (self.root / 'dist/msk/img/genou/msk-genou-coupe-1-structures-recto.png').write_bytes(png1x1())
        cards = {'region': 'genou', 'nom': 'Genou', 'cards': [
            {'type': 'structure', 'key': 'coupe-1-structures', 'front_html': '<img src="msk-genou-coupe-1-structures-recto.png"><br>Nommer', 'back_html': '<ol><li>Tendon</li></ol>', 'source': 'x', 'tags': ['msk::genou', 'type::structure'], 'media': ['dist/msk/img/genou/msk-genou-coupe-1-structures-recto.png']},
            {'type': 'piege', 'key': 'piege-anisotropie', 'front_html': 'Q ?', 'back_html': 'R', 'source': '', 'tags': ['msk::genou', 'type::piege'], 'media': []},
        ]}
        self.cards = self.root / 'dist/msk/genou.cards.json'
        self.cards.write_text(json.dumps(cards), encoding='utf-8')
    def tearDown(self): shutil.rmtree(self.root)
    def test_build_then_inspect(self):
        apkg, n = build(self.cards, self.root / 'dist/anki', self.root)
        self.assertEqual(n, 2)
        r = inspect(apkg)
        self.assertEqual(r['notes'], 2); self.assertEqual(r['medias'], 1); self.assertEqual(r['medias_manquants'], [])
        self.assertIn('Écho MSK::Genou::Structures', r['paquets']); self.assertIn('Écho MSK::Genou::Pièges et artefacts', r['paquets'])
    def test_guids_stables(self):
        a, _ = build(self.cards, self.root / 'a', self.root); b, _ = build(self.cards, self.root / 'b', self.root)
        self.assertEqual(inspect(a)['guids'], inspect(b)['guids'])
        self.assertEqual(len(set(inspect(a)['guids'])), 2)

    # --- tour de correction 1 : contrôles du paquet, écriture atomique, copie vérifiée avant l'iPhone ---
    def variante(self, modif):
        data = json.loads(self.cards.read_text(encoding='utf-8')); modif(data)
        p = self.root / 'dist/msk/variante.cards.json'; p.write_text(json.dumps(data), encoding='utf-8'); return p
    def construire(self, modif, out='variante'):
        return build(self.variante(modif), self.root / out, self.root)[0]
    def cli_check(self, apkg, *args):
        r = subprocess.run([sys.executable, str(HERE / 'check.py'), str(apkg), *map(str, args)], capture_output=True, encoding='utf-8',
                           env={**os.environ, 'PYTHONIOENCODING': 'utf-8'})
        return r.returncode, r.stdout
    def home(self):
        h = self.root / 'home'; h.mkdir(exist_ok=True)
        (h / 'config.json').write_text(json.dumps({'transfert_anki': str(self.root / 'icloud/anki')}), encoding='utf-8'); return h
    def refuse_la_copie(self, apkg, attendu=None):
        with mock.patch.dict(os.environ, {'ECHO_MSK_HOME': str(self.home())}), self.assertRaises(SystemExit) as e: B.copier(apkg, attendu)
        raison = str(e.exception.code); self.assertIn('copie annulée', raison)
        self.assertFalse((self.root / 'home/anki').exists()); self.assertFalse((self.root / 'icloud').exists())   # rien de créé, rien de copié
        return raison

    def test_paquet_sain_sans_alerte(self):
        apkg, n = build(self.cards, self.root / 'ok', self.root); r = inspect(apkg)
        self.assertEqual([r['guids_dupliques'], r['images_hors_manifeste'], r['medias_manquants']], [[], [], []])
        self.assertEqual(self.cli_check(apkg, n, 1)[0], 0)
    def test_cli_check_code_de_sortie_sur_les_nombres(self):
        apkg, n = build(self.cards, self.root / 'ok', self.root)
        self.assertEqual(self.cli_check(apkg, n + 1)[0], 1); self.assertEqual(self.cli_check(apkg, n, 2)[0], 1)
    def test_problemes(self):
        sain = {'notes': 2, 'medias': 1, 'medias_manquants': [], 'guids_dupliques': [], 'images_hors_manifeste': []}
        self.assertEqual([C.problemes(sain), C.problemes(sain, 2, 1)], [[], []])
        self.assertEqual([len(C.problemes(sain, 3)), len(C.problemes(sain, 2, 4))], [1, 1])
        for cle in ('medias_manquants', 'guids_dupliques', 'images_hors_manifeste'): self.assertEqual(len(C.problemes({**sain, cle: ['x']})), 1, cle)

    def test_guid_en_double_signale_sans_empecher_le_build(self):
        apkg = self.construire(lambda d: d['cards'].append(dict(d['cards'][1], front_html='Autre question ?')))   # même type et même key
        self.assertTrue(apkg.is_file())
        r = inspect(apkg); self.assertEqual(r['notes'], 3); self.assertEqual(len(r['guids_dupliques']), 1)
        self.assertEqual(r['guids'].count(r['guids_dupliques'][0]), 2)
        code, sortie = self.cli_check(apkg, 3); self.assertEqual(code, 1); self.assertIn('GUID EN DOUBLE', sortie)
    def test_image_hors_manifeste_signalee(self):
        def modif(d): d['cards'][1]['front_html'] = '<img src="absent.jpg"><br>Q ?'     # aucun média déclaré pour cette carte
        apkg = self.construire(modif); r = inspect(apkg)
        self.assertEqual(r['images_hors_manifeste'], ['absent.jpg']); self.assertEqual(r['medias_manquants'], [])
        code, sortie = self.cli_check(apkg, 2); self.assertEqual(code, 1)
        self.assertIn('IMAGES HORS MANIFESTE', sortie); self.assertIn('absent.jpg', sortie)
    def test_images_hors_manifeste_formes_html(self):
        def modif(d):
            d['cards'][0]['back_html'] += """ <IMG SRC='b.jpg'> <img class="x" src=c.jpg alt=""> <img data-src="faux.jpg" src="a.jpg"> <img src="a.jpg">"""
            d['cards'][1]['source'] = '<img  src = "d.jpg">'
        # triées, sans doublon, ni data-src, ni l'image du manifeste
        self.assertEqual(inspect(self.construire(modif))['images_hors_manifeste'], ['a.jpg', 'b.jpg', 'c.jpg', 'd.jpg'])

    def test_echec_du_build_ne_laisse_ni_part_ni_paquet_modifie(self):
        def casse(d): d['cards'][0]['media'] = ['dist/msk/img/genou/absent.jpg']
        out = self.root / 'atomique'; p = self.variante(casse)
        with self.assertRaises(FileNotFoundError): build(p, out, self.root)
        self.assertEqual(os.listdir(out), [])                                   # ni msk-genou.apkg ni .part
        bon, _ = build(self.cards, out, self.root); avant = bon.read_bytes()
        self.assertEqual(os.listdir(out), ['msk-genou.apkg'])                   # pas de .part après un succès
        with self.assertRaises(FileNotFoundError): build(p, out, self.root)
        self.assertEqual(bon.read_bytes(), avant); self.assertEqual(os.listdir(out), ['msk-genou.apkg'])

    def test_copie_d_un_paquet_sain(self):
        apkg, n = build(self.cards, self.root / 'ok', self.root)
        with mock.patch.dict(os.environ, {'ECHO_MSK_HOME': str(self.home())}): cibles = B.copier(apkg, n)
        self.assertEqual(cibles, [self.root / 'home/anki', self.root / 'icloud/anki'])
        for d in cibles: self.assertEqual((d / apkg.name).read_bytes(), apkg.read_bytes())
    def test_copie_refusee_guid_en_double(self):
        apkg = self.construire(lambda d: d['cards'].append(dict(d['cards'][1])))
        self.assertIn('GUID en double', self.refuse_la_copie(apkg))
    def test_copie_refusee_image_hors_manifeste(self):
        def modif(d): d['cards'][1]['front_html'] = '<img src="absent.jpg">'
        self.assertIn('absent.jpg', self.refuse_la_copie(self.construire(modif)))
    def test_copie_refusee_media_manquant(self):
        bon, _ = build(self.cards, self.root / 'ok', self.root); tronque = self.root / 'tronque.apkg'
        with zipfile.ZipFile(bon) as src, zipfile.ZipFile(tronque, 'w') as dst:
            for nom in src.namelist():
                if nom != '0': dst.writestr(nom, src.read(nom))                  # le média 0 est dans le manifeste mais plus dans le zip
        self.assertIn('MANQUANTS', self.refuse_la_copie(tronque))
    def test_copie_refusee_nombre_de_notes_inattendu(self):
        apkg, n = build(self.cards, self.root / 'ok', self.root)
        self.assertIn('attendu', self.refuse_la_copie(apkg, n + 1))

    def test_chemin_affiche_hors_du_depot(self):
        self.assertEqual(B.chemin_affiche(B.ROOT / 'dist/anki/msk-x.apkg'), 'dist/anki/msk-x.apkg')
        self.assertEqual(B.chemin_affiche(self.root / 'msk-x.apkg'), str(self.root / 'msk-x.apkg'))   # hors du dépôt : tel quel, sans exception

if __name__ == '__main__': unittest.main()
