"""Classify mojibake runs in docs/ before attempting repair.

35 chapters (mostly GATE exam prep) carry ~7k corrupted characters. Two
different things collapsed, and they need different treatment:

  class OPERATOR  'A' + two U+FFFD adjacent - triple-encoded math sign whose
                  source character is deterministically recoverable
  class LONE      a single U+FFFD - the source character is gone; in these
                  files it is almost always a superscript exponent

Repairing an exponent wrongly changes a worked answer in exam-prep material,
which is worse than leaving visible corruption. So this script reports the
distribution and leaves the decision to the caller.

Output is written as UTF-8 to a file; the Windows console cannot render the
mojibake samples.

Usage:
    python scripts/mojibake_report.py
    python scripts/mojibake_report.py --samples out.md
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

REPLACEMENT = "\ufffd"

# Triple-encoded single source char: a latin1/cp1252 double round-trip.
TRIPLE = re.compile("[\u00c3\u00e2\u20ac\ufffd]{2,}")
LONE = re.compile("\ufffd")


def classify(text: str) -> tuple[int, int]:
    """Return (triple_encoded_runs, lone_replacement_chars)."""
    consumed = set()
    triple = 0
    for m in TRIPLE.finditer(text):
        if any(i in consumed for i in range(m.start(), m.end())):
            continue
        triple += 1
        consumed.update(range(m.start(), m.end()))
    lone = sum(1 for m in LONE.finditer(text) if m.start() not in consumed)
    return triple, lone


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--samples", help="write UTF-8 sample contexts to this path")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)

    rows = []
    total_triple = 0
    total_lone = 0
    triple_files = 0
    lone_files = 0

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        if REPLACEMENT not in text and "\u00c3" not in text:
            continue
        t, lone = classify(text)
        if t:
            triple_files += 1
        if lone:
            lone_files += 1
        total_triple += t
        total_lone += lone
        if t or lone:
            rows.append((path.relative_to(DOCS).as_posix(), t, lone))

    rows.sort(key=lambda r: (-r[1], -r[2]))

    out = {
        "files_scanned": len(files),
        "files_with_damage": len(rows),
        "operator_runs_total": total_triple,
        "files_with_operator_runs": triple_files,
        "lone_replacement_total": total_lone,
        "files_with_lone_replacements": lone_files,
    }

    if args.json:
        sys.stdout.buffer.write((json.dumps(out, indent=2) + "\n").encode("utf-8"))
        return 0

    lines = []
    lines.append("=" * 74)
    lines.append("MOJIBAKE REPORT")
    lines.append("=" * 74)
    for k, v in out.items():
        lines.append(f"{k:<28}: {v}")
    lines.append("")
    lines.append("per file (operator runs / lone replacements):")
    for rel, t, lone in rows:
        lines.append(f"  {t:>5}  {lone:>5}  {rel}")

    body = "\n".join(lines)
    sys.stdout.buffer.write((body + "\n").encode("utf-8"))

    if args.samples:
        samples = []
        for rel, _t, _l in rows:
            text = (DOCS / rel).read_text(encoding="utf-8", errors="replace")
            for m in list(TRIPLE.finditer(text))[:3]:
                lo, hi = max(0, m.start() - 45), m.end() + 45
                samples.append(f"{rel}\n    ...{text[lo:hi]}...")
            if len(samples) >= 40:
                break
        pathlib.Path(args.samples).write_text("\n\n".join(samples), encoding="utf-8")
        sys.stdout.buffer.write(f"\nsamples written to {args.samples}\n".encode("utf-8"))

    return 0


if __name__ == "__main__":
    sys.exit(main())