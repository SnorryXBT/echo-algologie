#!/usr/bin/env python3
"""Construit dist/anki/msk-<region>.apkg depuis dist/msk/<region>.cards.json (genanki).
usage : scripts/anki/.venv/bin/python scripts/anki/build.py <region> [--out dist/anki] [--copy]
--copy : copie aussi le paquet dans <dossier privé>/anki/ et dans transfert_anki de config.json (iCloud → iPhone)."""
import argparse, hashlib, json, os, pathlib, shutil, warnings
import genanki

ROOT = pathlib.Path(__file__).resolve().parents[2]
MODEL_ID = 1696100001
SUBDECKS = {'structure': 'Structures', 'coupe': 'Coupes du protocole', 'pathologie': 'Pathologies', 'piege': 'Pièges et artefacts', 'geste': 'Gestes'}
CSS = ('.card{font-family:-apple-system,system-ui,sans-serif;font-size:19px;line-height:1.45;color:#14181d;background:#fff;text-align:left;padding:8px}'
       'img{max-width:100%;border-radius:10px}.src{color:#5b6672;font-size:13px;margin-top:10px}ol,ul{padding-left:22px}')
MODEL = genanki.Model(MODEL_ID, 'Écho MSK — carte', fields=[{'name': 'Recto'}, {'name': 'Verso'}, {'name': 'Source'}],
                      templates=[{'name': 'Carte', 'qfmt': '{{Recto}}', 'afmt': '{{FrontSide}}<hr id=answer>{{Verso}}<div class="src">{{Source}}</div>'}], css=CSS)

def deck_id(name): return int(hashlib.sha1(name.encode('utf-8')).hexdigest()[:8], 16)

def build(cards_json, out_dir, root=ROOT):
    # cached-property 2.0.1 (dépendance de genanki, dernière version) émet ce DeprecationWarning sous Python 3.14 ; filtré ici seulement
    with warnings.catch_warnings():
        warnings.filterwarnings('ignore', message=r"'asyncio\.iscoroutinefunction' is deprecated", category=DeprecationWarning)
        return _build(cards_json, out_dir, root)

def _build(cards_json, out_dir, root):
    data = json.loads(pathlib.Path(cards_json).read_text(encoding='utf-8'))
    region, nom, decks, media = data['region'], data['nom'], {}, []
    for c in data['cards']:
        name = f"Écho MSK::{nom}::{SUBDECKS.get(c['type'], c['type'])}"
        deck = decks.setdefault(name, genanki.Deck(deck_id(name), name))
        deck.add_note(genanki.Note(model=MODEL, fields=[c['front_html'], c['back_html'], c.get('source', '')], tags=c.get('tags', []),
                                   guid=genanki.guid_for('msk', region, c['type'], c['key'])))
        media += [str(pathlib.Path(root) / m) for m in c.get('media', [])]
    out = pathlib.Path(out_dir); out.mkdir(parents=True, exist_ok=True)
    pkg = genanki.Package(list(decks.values())); pkg.media_files = sorted(set(media))
    apkg = out / f'msk-{region}.apkg'; pkg.write_to_file(str(apkg))
    return apkg, sum(len(d.notes) for d in decks.values())

def copier(apkg):
    home = pathlib.Path(os.environ.get('ECHO_MSK_HOME') or os.path.expanduser('~/Claude/Projects/Écho MSK'))
    cfg = json.loads((home / 'config.json').read_text(encoding='utf-8'))
    cibles = [home / 'anki', pathlib.Path(cfg['transfert_anki'])]
    for d in cibles: d.mkdir(parents=True, exist_ok=True); shutil.copy2(apkg, d / apkg.name)
    return cibles

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('region'); ap.add_argument('--out', default='dist/anki'); ap.add_argument('--copy', action='store_true')
    a = ap.parse_args()
    apkg, n = build(ROOT / 'dist/msk' / f'{a.region}.cards.json', ROOT / a.out)
    print(f'{apkg.relative_to(ROOT)} : {n} notes')
    if a.copy:
        for d in copier(apkg): print(f'copié → {d / apkg.name}')
