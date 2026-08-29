# -*- coding: utf-8 -*-
"""Whitespace-tolerant sentence rewrite for Move 1 Task C link insertion.

The guide markdown is hard-wrapped in places, so needles are matched with
runs of whitespace collapsed. Idempotent: an edit already present is skipped,
so the scripts can be re-run safely.
"""
import io
import re


def _pat(text):
    return re.compile(r'\s+'.join(re.escape(w) for w in text.split()))


def apply(path, pairs):
    s = io.open(path, encoding='utf-8').read()
    for old, new in pairs:
        if _pat(new).search(s):
            continue  # already applied
        pat = _pat(old)
        hits = pat.findall(s)
        if len(hits) != 1:
            raise SystemExit('%s: needle matched %d times: %r'
                             % (path, len(hits), old[:60]))
        s = pat.sub(lambda m: new, s, count=1)
    io.open(path, 'w', encoding='utf-8', newline='').write(s)
