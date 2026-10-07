# scripts/anki/test_build.py  — cd scripts/anki && .venv/bin/python -m unittest test_build.py
import json, pathlib, shutil, struct, tempfile, unittest, zlib
from build import build
from check import inspect

def png1x1():
    def chunk(t, d): return struct.pack('>I', len(d)) + t + d + struct.pack('>I', zlib.crc32(t + d) & 0xffffffff)
    return b'\x89PNG\r\n\x1a\n' + chunk(b'IHDR', struct.pack('>IIBBBBB', 1, 1, 8, 2, 0, 0, 0)) + chunk(b'IDAT', zlib.compress(b'\x00\xff\x00\x00')) + chunk(b'IEND', b'')

class BuildTest(unittest.TestCase):
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

if __name__ == '__main__': unittest.main()
