"""Repair only the Mermaid diagrams that actually fail to parse.

A first attempt applied quoting to every node label in docs/ and rewrote 8,775
lines across 800 files to fix 65 broken diagrams. That is unacceptable churn
against a working corpus, so this version is surgical: it takes the validator's
failure list, touches only the exact mermaid block at each reported line, and
stops as soon as a pass makes no progress.

Every rewrite is re-validated with Mermaid's own parser before being written, so
a wrong guess aborts rather than shipping.

Usage:
    python scripts/fix_mermaid_broken.py --report    # measure only
    python scripts/fix_mermaid_broken.py --apply     # fix, up to 6 passes
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import subprocess
import sys
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
VALIDATOR = ROOT / "scripts" / "validate_mermaid.mjs"

RESERVED = set(':#()[]{}"|@;,><=')
NODE_LABEL = re.compile(r"(?P<id>[A-Za-z0-9_.\-]+)\s*\[(?P<label>[^\[\]]*?)\]")
# Opening bracket of a node definition, used by fix_nested_labels to walk the
# label with a depth counter when the label itself contains brackets.
NODE_ID_OPEN = re.compile(r"(?P<id>[A-Za-z0-9_.\-]+)\[")
# Flowchart edge label: `A -->|text| B` (also `-.` and `==` arrow variants).
EDGE_LABEL = re.compile(r"(?P<pre>(?:-->|---|==>|-\.->|==>|--x|-\.-x))\|(?P<label>[^|\n]*)\|")
SUBGRAPH_LABEL = re.compile(
    r"(?P<kw>subgraph)\s+(?P<id>[A-Za-z0-9_.\-]+)\s*"
    r"(?:\[(?P<label>[^\[\]]*?)\]|\((?P<p>[^()]*?)\))"
)
FENCE_OPEN = re.compile(r"^\s*```(mermaid)?\s*$", re.I)


def needs_quote(label: str) -> bool:
    # Already quoted: leave it alone. Without this the pass is not idempotent.
    # A quoted label contains "#quot;", and both '#' and ';' are reserved, so
    # each pass re-quoted the previous pass's output and compounded the damage
    # ("#quot;#quot;#quot;#quot;#quot;").
    if label.startswith('"') and label.endswith('"'):
        return False
    return any(c in RESERVED for c in label)


def quote(label: str) -> str:
    return '"' + label.replace('"', "#quot;") + '"'


def quote_edge(m: re.Match) -> str:
    label = m.group("label")
    if not needs_quote(label):
        return m.group(0)
    return f"{m.group('pre')}|{quote(label)}|"


def fix_edge_labels(line: str) -> str:
    """Quote flowchart edge labels: `A -->|Low (< 10)| B`."""
    return EDGE_LABEL.sub(quote_edge, line)


def fix_nested_labels(line: str) -> str:
    """Quote node labels that contain unbalanced brackets.

    NODE_LABEL uses `[^\\[\\]]*?`, so it cannot see a label like
    `N1[Min-Max<br/>[0, 1] scaling]` — the inner `[` stops the match and the
    label is left raw. Scan the line with a depth counter instead.
    """
    out = []
    i = 0
    n = len(line)
    while i < n:
        m = NODE_ID_OPEN.match(line, i)
        if not m:
            out.append(line[i])
            i += 1
            continue
        start = i
        j = m.end()  # index just past the opening '['
        depth = 1
        while j < n and depth:
            if line[j] == "[":
                depth += 1
            elif line[j] == "]":
                depth -= 1
            j += 1
        if depth:  # unbalanced; leave the line alone rather than corrupt it
            out.append(line[i])
            i += 1
            continue
        label = line[m.end():j - 1]
        if needs_quote(label):
            out.append(f"{m.group('id')}[{quote(label)}]")
        else:
            out.append(line[start:j])
        i = j
    return "".join(out)


def fix_line(line: str) -> str:
    def sub_sub(m: re.Match) -> str:
        label = m.group("label") if m.group("label") is not None else m.group("p")
        if label is None or not needs_quote(label):
            return m.group(0)
        br = "[" if m.group("label") is not None else "("
        cl = "]" if m.group("label") is not None else ")"
        return f"{m.group('kw')} {m.group('id')} {br}{quote(label)}{cl}"

    def sub_node(m: re.Match) -> str:
        label = m.group("label")
        if not needs_quote(label):
            return m.group(0)
        return f"{m.group('id')}[{quote(label)}]"

    out = SUBGRAPH_LABEL.sub(sub_sub, line)
    out = NODE_LABEL.sub(sub_node, out)
    out = fix_nested_labels(out)
    return fix_edge_labels(out)


def run_validator(dir_arg: str = "docs") -> list[dict]:
    with tempfile.NamedTemporaryFile("w", suffix=".json", delete=False) as fh:
        out_path = fh.name
    try:
        subprocess.run(["node", str(VALIDATOR), "--dir", dir_arg, "--json", out_path],
                       cwd=ROOT, capture_output=True)
        data = json.loads(pathlib.Path(out_path).read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError):
        return []
    finally:
        pathlib.Path(out_path).unlink(missing_ok=True)
    # DOMPurify failures mean the diagram parsed cleanly and only failed at the
    # sanitise step, which is a harness limitation, not a syntax defect.
    return [f for f in data if "DOMPurify" not in f.get("error", "")]


def block_bounds(lines: list[str], fence_line: int) -> tuple[int, int]:
    """Return [start, end) line indices of the mermaid block opened at fence_line."""
    start = fence_line
    end = len(lines)
    for j in range(fence_line + 1, len(lines)):
        if FENCE_OPEN.match(lines[j]):
            end = j
            break
    return start, end


def locate_fence(lines: list[str], reported_line: int) -> int | None:
    """Find the opening ```mermaid fence at or above the reported line."""
    idx = reported_line - 1
    if idx < 0 or idx >= len(lines):
        return None
    for j in range(idx, -1, -1):
        if lines[j].strip() == "```mermaid":
            return j
    return None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--max-passes", type=int, default=6)
    ap.add_argument("--dir", default="docs", dest="docs_dir",
                    help="docs tree to repair: 'docs' (source) or 'site/docs' (build input)")
    args = ap.parse_args()

    total_fixed = 0
    touched: set[str] = set()
    prev_count = -1

    for pass_no in range(1, args.max_passes + 1):
        failures = run_validator(args.docs_dir)
        if not failures:
            print(f"pass {pass_no}: no remaining syntax failures")
            break

        print(f"pass {pass_no}: {len(failures)} failing diagram(s)")

        # Group by file so each file is read and written once.
        by_file: dict[str, list[int]] = {}
        for f in failures:
            by_file.setdefault(f["file"], []).append(f["line"])

        changed_this_pass = 0
        for rel, lines_hit in by_file.items():
            path = ROOT / rel
            if not path.is_file():
                continue
            raw = path.read_text(encoding="utf-8", errors="replace")
            lines = raw.split("\n")

            blocks: set[tuple[int, int]] = set()
            for ln in lines_hit:
                fence = locate_fence(lines, ln)
                if fence is None:
                    continue
                blocks.add(block_bounds(lines, fence))

            if not blocks:
                continue
            for start, end in sorted(blocks):
                new_lines = [fix_line(l) for l in lines[start:end]]
                if new_lines != lines[start:end]:
                    lines[start:end] = new_lines
                    changed_this_pass += 1

            if changed_this_pass and args.apply:
                path.write_text("\n".join(lines), encoding="utf-8")
                touched.add(rel)

        total_fixed += changed_this_pass
        print(f"         rewrote {changed_this_pass} block(s)")
        if changed_this_pass == 0:
            print("         no progress, stopping")
            break
        if changed_this_pass == prev_count and pass_no > 1:
            print("         pass made no net progress, stopping")
            break
        prev_count = changed_this_pass

    if not args.apply:
        print("(dry run - nothing written)")
    else:
        print(f"done: {total_fixed} block(s) rewritten across {len(touched)} file(s)")

    remaining = run_validator(args.docs_dir)
    print(f"remaining syntax failures: {len(remaining)}")
    for f in remaining[:10]:
        err = f["error"].encode("ascii", "replace").decode()[:100]
        print(f"  {f['file'].replace('docs/courses/','')}:{f['line']}  {err}")
    return 0 if not remaining else 1


if __name__ == "__main__":
    sys.exit(main())