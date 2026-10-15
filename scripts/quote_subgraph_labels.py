"""Quote unquoted Mermaid subgraph labels containing reserved characters.

`subgraph M1[Module 1: Foundations]` parses without raising, so the validator
reports it as valid, but Mermaid then treats the colon as a statement boundary
and the diagram renders wrong. 32 such labels existed, most of them the six
Module blocks on the placement roadmap.

Only unquoted labels are touched, and only inside ```mermaid fences.

Usage:
    python scripts/quote_subgraph_labels.py            # dry run
    python scripts/quote_subgraph_labels.py --apply
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

FENCE = re.compile(r"^\s*```(mermaid)?\s*$", re.I)
# subgraph NAME[Label] or subgraph NAME(Label), label not already quoted
SUB = re.compile(
    r"(?P<head>subgraph\s+[A-Za-z0-9_.\-]+\s*)(?P<open>[\[\(])(?P<label>[^:@;#\"\[\]]*[:@][^\]\)]*)(?P<close>[\]\)])"
)


def quote(label: str) -> str:
    return '"' + label.replace('"', "#quot;") + '"'


def fix_line(line: str) -> str:
    def sub(m: re.Match) -> str:
        label = m.group("label")
        if label.startswith('"'):
            return m.group(0)
        return f"{m.group('head')}{m.group('open')}{quote(label)}{m.group('close')}"
    return SUB.sub(sub, line)


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)
    changed: dict[pathlib.Path, str] = {}
    edits = 0

    for path in files:
        raw = path.read_text(encoding="utf-8", errors="replace")
        if "subgraph" not in raw:
            continue
        lines = raw.split("\n")
        in_block = False
        touched = 0
        for i, line in enumerate(lines):
            m = FENCE.match(line)
            if m:
                in_block = bool(m.group(1))
                continue
            if in_block and "subgraph" in line:
                new = fix_line(line)
                if new != line:
                    lines[i] = new
                    touched += 1
        if touched:
            changed[path] = "\n".join(lines)
            edits += touched

    label = "APPLIED" if args.apply else "DRY RUN"
    print(f"[{label}] quoted {edits} subgraph label(s) across {len(changed)} file(s)")
    if args.apply:
        for path, text in changed.items():
            path.write_text(text, encoding="utf-8")
    for path in list(changed)[:8]:
        print("  " + str(path.relative_to(ROOT)).replace("\\", "/"))
    return 0


if __name__ == "__main__":
    sys.exit(main())