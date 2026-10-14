"""Enumerate every distinct mojibake sequence in docs/ so the repair alphabet
can be validated before anything is rewritten.

A triple-encoded character expands to several visible codepoints, so the damaged
text is not a single U+FFFD. This finds maximal runs of "suspicious" codepoints
and prints them with context, so each run can be mapped to exactly one intended
character by hand rather than guessed at by a regex.

Nothing is modified by this script.

Usage:
    python scripts/mojibake_alphabet.py
    python scripts/mojibake_alphabet.py --out alphabet.md
"""

from __future__ import annotations

import argparse
import pathlib
import sys
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# Codepoints that only ever appear as mojibake artefacts in this corpus.
SUSPECT = set("\u00c2\u00c3\u00e2\u20ac\u00b5\u00b7\ufffd\u00bf\u00a9\u00ae")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", help="write the report as UTF-8 to this path")
    ap.add_argument("--context", type=int, default=46)
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)

    runs: Counter[str] = Counter()
    examples: dict[str, list[str]] = {}

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        if not any(c in text for c in SUSPECT):
            continue
        rel = path.relative_to(DOCS).as_posix()

        i = 0
        n = len(text)
        while i < n:
            if text[i] in SUSPECT:
                j = i
                while j < n and text[j] in SUSPECT:
                    j += 1
                run = text[i:j]
                # Trim a lone U+FFFD that is really a stray, not a mojibake run.
                if len(run) > 1:
                    runs[run] += 1
                    bucket = examples.setdefault(run, [])
                    if len(bucket) < 3:
                        lo = max(0, i - args.context)
                        hi = min(n, j + args.context)
                        bucket.append(f"{rel}\n    ...{text[lo:hi]}...")
                i = j
            else:
                i += 1

    lines = ["=" * 74, "MOJIBAKE ALPHABET - every distinct damaged sequence", "=" * 74]
    lines.append(f"distinct sequences: {len(runs)}")
    lines.append(f"total occurrences  : {sum(runs.values())}")
    lines.append("")
    for run, count in runs.most_common():
        codepoints = " ".join(f"U+{ord(c):04X}" for c in run)
        lines.append("-" * 74)
        lines.append(f"sequence : {run!r}")
        lines.append(f"codepoints: {codepoints}")
        lines.append(f"count    : {count}")
        for ex in examples.get(run, []):
            lines.append("  " + ex.replace("\n", "\n  "))

    body = "\n".join(lines) + "\n"

    if args.out:
        pathlib.Path(args.out).write_text(body, encoding="utf-8")
        sys.stdout.buffer.write(f"wrote {args.out}\n".encode("utf-8"))
    else:
        sys.stdout.buffer.write(body.encode("utf-8", errors="replace"))
    return 0


if __name__ == "__main__":
    sys.exit(main())