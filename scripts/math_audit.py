"""Audit math blocks for input KaTeX cannot render.

Docusaurus renders $...$ and $$...$$ through KaTeX. KaTeX is LaTeX: an en dash,
em dash, percent sign or stray replacement character inside a math span is not a
glyph it knows, so the expression renders wrong or the block fails outright.
The build only logs these as warnings, so they ship silently.

This finds every offender with its file and the offending codepoint, grouped by
cause, so the fix is mechanical rather than editorial.

Usage:
    python scripts/math_audit.py --limit 20
    python scripts/math_audit.py --json
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from collections import Counter, defaultdict

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# $$...$$ display math, then $...$ inline. Display is matched first so the inner
# dollar signs are not treated as separate inline spans.
MATH = re.compile(r"\$\$(.+?)\$\$|\$(?!\s)([^$\n]+?)(?<!\s)\$", re.S)

# Characters KaTeX rejects or mis-renders in math mode.
OFFENDERS = {
    "\u2013": "en dash",
    "\u2014": "em dash",
    "\u2018": "left single quote",
    "\u2019": "right single quote",
    "\u201c": "left double quote",
    "\u201d": "right double quote",
    "\ufffd": "replacement char (mojibake)",
    "\u00d7": "multiplication sign",
    "\u00f7": "division sign",
    "\u2026": "ellipsis",
    "\u2192": "rightwards arrow",
}

FENCE = re.compile(r"^\s*(?:```|~~~)")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=20)
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--out", help="write UTF-8 examples here")
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)
    counts: Counter[str] = Counter()
    sites: dict[str, list[str]] = defaultdict(list)
    files_hit: set[str] = set()
    total_spans = 0

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        rel = path.relative_to(DOCS).as_posix()

        # Skip fenced code: a $ or % inside a shell snippet is not math.
        keep: list[str] = []
        in_fence = False
        for line in text.splitlines():
            if FENCE.match(line):
                in_fence = not in_fence
                keep.append("")
                continue
            keep.append("" if in_fence else line)

        for lineno, line in enumerate("\n".join(keep).splitlines(), start=1):
            for m in MATH.finditer(line):
                body = m.group(1) if m.group(1) is not None else m.group(2)
                if body is None:
                    continue
                total_spans += 1
                for ch in body:
                    if ch in OFFENDERS:
                        counts[ch] += 1
                        files_hit.add(rel)
                        if len(sites[ch]) < args.limit:
                            snippet = line.strip()
                            sites[ch].append(
                                f"{rel}:{lineno}  U+{ord(ch):04X} {OFFENDERS[ch]}"
                                f"\n      {snippet[:150]}"
                            )

    out = {f"{OFFENDERS[ch]} U+{ord(ch):04X}": v for ch, v in counts.most_common()}

    if args.json:
        print(json.dumps({"spans": total_spans, "offenders": out,
                          "files_with_offenders": len(files_hit)}, indent=2))
        return 0

    print("=" * 74)
    print(f"MATH AUDIT - {total_spans} math spans across {len(files)} files")
    print("=" * 74)
    print(f"files containing at least one offender: {len(files_hit)}")
    if not counts:
        print("\nNo KaTeX-hostile characters found in math mode.")
        return 0

    print("\nbreakdown by character:")
    for ch, n in counts.most_common():
        print(f"  U+{ord(ch):04X}  {OFFENDERS[ch]:<26} {n:>5}")

    # Examples contain the offending characters themselves, which the Windows
    # console cannot encode. They go to a UTF-8 file; stdout stays ASCII.
    detail = ["", "EXAMPLES"]
    for ch, n in counts.most_common():
        detail.append("")
        detail.append(f"-- {OFFENDERS[ch]} U+{ord(ch):04X} ({n}) --")
        detail.extend(sites[ch])
    if args.out:
        pathlib.Path(args.out).write_text("\n".join(detail) + "\n", encoding="utf-8")
        print(f"\nexamples written to {args.out}")
    print("=" * 74)
    return 0


if __name__ == "__main__":
    sys.exit(main())