#!/usr/bin/env python3
"""Construit dist/anki/msk-<region>.apkg depuis dist/msk/<region>.cards.json (genanki).
usage : scripts/anki/.venv/bin/python scripts/anki/build.py <region> [--out dist/anki] [--copy]
--copy : copie aussi le paquet dans <dossier privé>/anki/ et dans transfert_anki de config.json (iCloud → iPhone), après vérification (check.inspect) :
         refus, raison affichée et code 1, si un média manque, si un GUID est en double, si une image n'est pas dans le manifeste ou si le nombre de notes diffère ;
         de même, sans rien créer ni copier, si le dossier privé n'est pas initialisé ou si config.json n'a pas de transfert_anki."""
import argparse, hashlib, json, os, pathlib, shutil, warnings
import genanki
from check import inspect, problemes

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
    apkg = out / f'msk-{region}.apkg'; part = apkg.with_suffix('.apkg.part')
    try: pkg.write_to_file(str(part)); os.replace(part, apkg)   # écriture atomique : un échec ne laisse ni paquet partiel ni ancien paquet écrasé
    finally: part.unlink(missing_ok=True)
    return apkg, sum(len(d.notes) for d in decks.values())

def copier(apkg, attendu=None):
    raisons = problemes(inspect(apkg), attendu)   # jamais de paquet non vérifié vers l'iPhone : rien n'est créé ni copié en cas de refus
    if raisons: raise SystemExit(f'copie annulée, paquet invalide : {" ; ".join(raisons)}')
    home = pathlib.Path(os.environ.get('ECHO_MSK_HOME') or os.path.expanduser('~/Claude/Projects/Écho MSK'))
    if not (home / 'config.json').is_file(): raise SystemExit(f'dossier privé non initialisé ({home}) : node scripts/msk-progress.js init')
    transfert = json.loads((home / 'config.json').read_text(encoding='utf-8')).get('transfert_anki')
    if not isinstance(transfert, str) or not transfert.strip(): raise SystemExit(f'{home / "config.json"} : transfert_anki absent (dossier iCloud de transfert vers l\'iPhone) — rien n\'est copié')
    cibles = [home / 'anki', pathlib.Path(transfert)]
    for d in cibles: d.mkdir(parents=True, exist_ok=True); shutil.copy2(apkg, d / apkg.name)
    return cibles

def chemin_affiche(p):
    try: return str(p.relative_to(ROOT))
    except ValueError: return str(p)   # --out hors du dépôt : chemin tel quel

if __name__ == '__main__':
    ap = argparse.ArgumentParser(); ap.add_argument('region'); ap.add_argument('--out', default='dist/anki'); ap.add_argument('--copy', action='store_true')
    a = ap.parse_args()
    apkg, n = build(ROOT / 'dist/msk' / f'{a.region}.cards.json', ROOT / a.out)
    print(f'{chemin_affiche(apkg)} : {n} notes')
    if a.copy:
        for d in copier(apkg, n): print(f'copié → {d / apkg.name}')
