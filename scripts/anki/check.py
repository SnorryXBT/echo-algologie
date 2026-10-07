#!/usr/bin/env python3
"""Vérifie un paquet .apkg : notes, médias, paquets. usage : check.py <fichier.apkg> <notes attendues> [médias attendus] — code 1 si écart."""
import json, pathlib, sqlite3, sys, tempfile, zipfile

def inspect(apkg):
    with tempfile.TemporaryDirectory() as tmp, zipfile.ZipFile(apkg) as z:
        names = z.namelist()
        col = next((n for n in ('collection.anki21', 'collection.anki2') if n in names), None)
        if not col: raise SystemExit(f'{apkg} : aucune collection dans {names}')
        z.extract(col, tmp)
        media = json.loads(z.read('media').decode('utf-8')) if 'media' in names else {}
        manquants = [v for k, v in media.items() if k not in names]
        con = sqlite3.connect(pathlib.Path(tmp) / col)
        notes = con.execute('select count(*) from notes').fetchone()[0]
        guids = [r[0] for r in con.execute('select guid from notes order by guid')]
        decks = json.loads(con.execute('select decks from col').fetchone()[0])
        con.close()
    return {'notes': notes, 'medias': len(media), 'medias_manquants': manquants, 'paquets': sorted(d['name'] for d in decks.values()), 'guids': guids}

if __name__ == '__main__':
    if len(sys.argv) < 3: raise SystemExit(__doc__)
    r, attendu = inspect(sys.argv[1]), int(sys.argv[2]); med = int(sys.argv[3]) if len(sys.argv) > 3 else None
    ok = r['notes'] == attendu and not r['medias_manquants'] and (med is None or r['medias'] == med)
    print(f"{sys.argv[1]} : {r['notes']} notes (attendu {attendu}), {r['medias']} médias{' MANQUANTS ' + str(r['medias_manquants']) if r['medias_manquants'] else ''}, paquets : {', '.join(r['paquets'])}")
    sys.exit(0 if ok else 1)
