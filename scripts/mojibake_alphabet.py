"""Enumerate complete mojibake sequences, anchored on U+FFFD.

The earlier attempt used a hand-picked suspect set that omitted codepoints such
as U+2020 DAGGER and U+00BA MASCULINE ORDINAL, which are themselves products of
the cp1252 round-trip. That split real sequences in half and made them
unmappable.

Every damaged sequence contains at least one U+FFFD, because the decode lost
bytes. So: find U+FFFD, then expand left and right across the codepoints that
cp1252 round-tripping can produce, stopping at anything a real author would
type.

Legitimate content is explicitly protected: superscripts, subscripts, math
operators and arrows are real characters and are never absorbed into a run.

Usage:
    python scripts/mojibake_alphabet.py --out alphabet.md
"""

from __future__ import annotations

import argparse
import pathlib
import sys
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# Codepoints cp1252 produces when UTF-8 bytes are misread. Latin-1 supplement
# plus the printable cp1252 specials that live above U+2000.
_MOJI_A = set(range(0x80, 0x100))          # Latin-1 supplement
_MOJI_B = {0x152, 0x153, 0x160, 0x161, 0x17D, 0x17E, 0x192}
_MOJI_C = {
    0x0192, 0x02C6, 0x02DC,
    0x2013, 0x2014, 0x2018, 0x2019, 0x201A, 0x201C, 0x201E,
    0x2020, 0x2021, 0x2022, 0x2026, 0x2030, 0x2039, 0x203A,
    0x20AC, 0x2122, 0x0161, 0x0178, 0x017D, 0x017E, 0x0192,
}
_MOJI = _MOJI_A | _MOJI_B | _MOJI_C | {0xFFFD}

# Real content that must never be absorbed into a damaged run.
_PROTECTED = (
    set(range(0x2070, 0x20A0))   # superscripts, subscripts
    | set(range(0x207F, 0x2090))
    | set(range(0x2190, 0x2BFF)) # arrows, math operators, shapes
    | set(range(0x0370, 0x03FF)) # Greek
)


def is_moji(c: str) -> bool:
    o = ord(c)
    return o in _MOJI and o not in _PROTECTED


def runs(text: str):
    """Yield maximal damaged runs, each guaranteed to contain a U+FFFD."""
    n = len(text)
    i = 0
    while i < n:
        if "\ufffd" in text[i]:
            lo = i
            while lo > 0 and is_moji(text[lo - 1]):
                lo -= 1
            hi = i
            while hi < n and is_moji(text[hi]):
                hi += 1
            if hi > lo:
                yield lo, text[lo:hi]
                i = hi
                continue
        i += 1


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True)
    ap.add_argument("--context", type=int, default=55)
    ap.add_argument("--examples", type=int, default=4)
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)
    counter: Counter[str] = Counter()
    samples: dict[str, list[str]] = {}

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        if "\ufffd" not in text:
            continue
        rel = path.relative_to(DOCS).as_posix()
        for start, run in runs(text):
            counter[run] += 1
            bucket = samples.setdefault(run, [])
            if len(bucket) < args.examples:
                lo = max(0, start - args.context)
                hi = min(len(text), start + len(run) + args.context)
                bucket.append(f"{rel}\n      ...{text[lo:hi]}...")

    lines = ["=" * 78, "MOJIBAKE ALPHABET (complete, U+FFFD-anchored)", "=" * 78]
    lines.append(f"distinct sequences: {len(counter)}")
    lines.append(f"total occurrences  : {sum(counter.values())}")
    lines.append("")
    for run, count in counter.most_common():
        cps = " ".join(f"U+{ord(c):04X}" for c in run)
        lines.append("-" * 78)
        lines.append(f"  count     : {count}")
        lines.append(f"  codepoints: {cps}")
        for ex in samples.get(run, []):
            lines.append("  " + ex.replace("\n", "\n  "))

    pathlib.Path(args.out).write_text("\n".join(lines) + "\n", encoding="utf-8")
    sys.stdout.buffer.write(
        f"distinct={len(counter)} occurrences={sum(counter.values())} -> {args.out}\n".encode()
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())