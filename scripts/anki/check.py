#!/usr/bin/env python3
"""Vérifie un paquet .apkg : notes, médias, GUID, images. usage : check.py <fichier.apkg> <notes attendues> [médias attendus]
Code 1 si écart : nombre de notes ou de médias, média déclaré absent du zip, GUID en double, <img src> dont le nom n'est pas dans le manifeste des médias."""
import collections, json, pathlib, re, sqlite3, sys, tempfile, zipfile

IMG = re.compile(r'''<img(?=\s)[^>]*?\ssrc\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'>]+))''', re.I)

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
        lignes = con.execute('select guid, flds from notes order by guid').fetchall()
        decks = json.loads(con.execute('select decks from col').fetchone()[0])
        con.close()
    guids = [g for g, _ in lignes]
    doubles = sorted(g for g, n in collections.Counter(guids).items() if n > 1)
    refs = {a or b or c for _, flds in lignes for champ in flds.split('\x1f') for a, b, c in IMG.findall(champ)}
    return {'notes': notes, 'medias': len(media), 'medias_manquants': manquants, 'paquets': sorted(d['name'] for d in decks.values()), 'guids': guids,
            'guids_dupliques': doubles, 'images_hors_manifeste': sorted(refs - set(media.values()))}

def problemes(r, attendu=None, medias=None):
    """Raisons de refuser un paquet inspecté (résultat d'inspect) ; liste vide = conforme. Source unique du code de sortie de la CLI et de la copie de build.py."""
    p = []
    if attendu is not None and r['notes'] != attendu: p.append(f"{r['notes']} notes (attendu {attendu})")
    if medias is not None and r['medias'] != medias: p.append(f"{r['medias']} médias (attendu {medias})")
    for libelle, cle in (('médias MANQUANTS', 'medias_manquants'), ('GUID en double', 'guids_dupliques'), ('images hors manifeste', 'images_hors_manifeste')):
        if r[cle]: p.append(f'{libelle} {r[cle]}')
    return p

if __name__ == '__main__':
    if len(sys.argv) < 3: raise SystemExit(__doc__)
    r, attendu = inspect(sys.argv[1]), int(sys.argv[2]); med = int(sys.argv[3]) if len(sys.argv) > 3 else None
    alertes = ''.join(f' {nom} {r[cle]}' for nom, cle in (('MANQUANTS', 'medias_manquants'), ('GUID EN DOUBLE', 'guids_dupliques'), ('IMAGES HORS MANIFESTE', 'images_hors_manifeste')) if r[cle])
    print(f"{sys.argv[1]} : {r['notes']} notes (attendu {attendu}), {r['medias']} médias{alertes}, paquets : {', '.join(r['paquets'])}")
    sys.exit(1 if problemes(r, attendu, med) else 0)
