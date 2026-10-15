"""Convert Mermaid's removed chart grammar to syntax this Mermaid version renders.

The `bar`, `lineChart` and `radar`/`radarChart` chart DSLs were dropped from
Mermaid. Twelve diagrams still used them and rendered as errors.

  lineChart, bar  -> xychart-beta   (supported, keeps the visual)
  radar, radarChart -> markdown table (no Mermaid equivalent exists)

Only blocks whose header is one of the removed chart types are touched.
Everything else is left alone.

Usage:
    python scripts/convert_mermaid_charts.py            # dry run
    python scripts/convert_mermaid_charts.py --apply
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

FENCE = re.compile(r"^\s*```(mermaid)?\s*$", re.I)
# Must include re.M at compile time. Passing re.M to search() as a second
# positional argument is `pos`, not `flags`, so `$` would only ever match the
# end of the whole document and the pattern never fired.
LEGACY = re.compile(r"^\s*(lineChart|bar|radar|radarChart)\s*$", re.I | re.M)

TITLE = re.compile(r'^\s*title\s+"?([^"\n]+)"?\s*$', re.I | re.M)
XAXIS = re.compile(r'^\s*x-axis\s+(\[[^\]]*\]|"[^"]*"|\S+)\s*$', re.I | re.M)
YAXIS = re.compile(r'^\s*y-axis\s+(.*)$', re.I | re.M)
DATASET = re.compile(r'^\s*dataset\s+"?([^"\n\[]+)"?\s*(\[[^\]]*\])\s*$', re.I | re.M)
BARPTS = re.compile(r'^\s*"([^"]+)"\s*:\s*([-\d.]+)\s*$', re.I | re.M)


def nums(text: str) -> list[str]:
    inner = text.strip().lstrip("[").rstrip("]")
    return [p.strip() for p in inner.split(",") if p.strip()]


def split_labels(text: str) -> list[str]:
    text = text.strip()
    if text.startswith("["):
        return nums(text)
    return [text.strip('"')]


def convert(body: list[str]) -> tuple[str, str] | None:
    """Return (new_body, new_fence_language) or None to leave the block alone."""
    head = LEGACY.match(body[0]) if body else None
    if not head:
        return None
    kind = head.group(1).lower()
    rest = body[1:]

    if kind in ("radar", "radarchart"):
        return convert_radar(body)
    return convert_xychart(body, rest, kind)


def convert_xychart(body: list[str], rest: list[str], kind: str) -> tuple[str, str] | None:
    title = ""
    xlabels: list[str] = []
    ylabel = ""
    ymin = "0"
    series: list[tuple[str, list[str]]] = []

    for line in rest:
        if not line.strip():
            continue
        m = TITLE.match(line)
        if m:
            title = m.group(1).strip()
            continue
        m = DATASET.match(line)
        if m:
            series.append((m.group(1).strip(), nums(m.group(2))))
            continue
        m = XAXIS.match(line)
        if m and not series:
            xlabels = split_labels(m.group(1))
            continue
        m = YAXIS.match(line)
        if m:
            # "Label 0 --> 100" or just "Label"
            ym = re.match(r'"?([^"\n]+?)"?\s+(-?[\d.]+)\s*-->\s*(-?[\d.]+)\s*$', m.group(1))
            if ym:
                ylabel, ymin = ym.group(1).strip(), ym.group(2)
            else:
                ylabel = m.group(1).strip().strip('"')
            continue
        bp = BARPTS.match(line)
        if bp:
            xlabels.append(bp.group(1))
            series.append(("bar", [bp.group(2)]))

    if not series and not xlabels:
        return None

    out = ["xychart-beta"]
    if title:
        out.append(f'    title "{title}"')
    if xlabels:
        out.append("    x-axis [" + ", ".join(xlabels) + "]")
    if ylabel:
        out.append(f'    y-axis "{ylabel}" {ymin} --> 0')
    for name, vals in series:
        if kind == "bar" or name == "bar":
            out.append("    bar [" + ", ".join(vals) + "]")
        else:
            out.append("    line [" + ", ".join(vals) + "]")
    return ("\n".join(out), "mermaid")


AXIS_LABELS = re.compile(r'^\s*axisLabels\s+(\[[^\]]*\])\s*$', re.I | re.M)
DATA_NAMES = re.compile(r'^\s*data\s+(\[[^\]]*\])\s*$', re.I | re.M)
# Greedy, so every inner array is captured rather than only the first.
VALUES = re.compile(r'values\s*\[(.*)\]', re.I | re.S)


def convert_radar(body: list[str]) -> tuple[str, str] | None:
    """Radar charts have no Mermaid equivalent; a table preserves every value.

    Two shapes exist in this corpus:
      radarChart  axisLabels [...] / data ["A","B"] / values [[..],[..]]
      radar       plain "label: value" rows
    """
    title = ""
    axes: list[str] = []
    names: list[str] = []
    matrix: list[list[str]] = []
    flat: list[tuple[str, str]] = []

    # values [[..],[..]] is routinely spread over several lines, so collapse the
    # block to one string before extracting. Line-by-line parsing never saw the
    # array contents and every radar block fell through to None.
    joined = "\n".join(body[1:])

    for line in body[1:]:
        if not line.strip():
            continue
        m = TITLE.match(line)
        if m:
            title = m.group(1).strip()
            continue
        m = AXIS_LABELS.match(line)
        if m:
            axes = nums(m.group(1))
            continue
        m = DATA_NAMES.match(line)
        if m:
            names = nums(m.group(1))
            continue
        bp = BARPTS.match(line)
        if bp:
            flat.append((bp.group(1), bp.group(2)))
            continue
        dv = re.match(r'^\s*"?([^"\n:]+?)"?\s*:\s*([-\d.]+)\s*$', line)
        if dv:
            flat.append((dv.group(1), dv.group(2)))

    vm = re.search(r'values\s*\[(.*?)\]', joined, re.I | re.S)
    if vm:
        for row in re.findall(r"\[([^\]]*)\]", vm.group(1)):
            matrix.append(nums(row))

    lines: list[str] = []
    if matrix and axes:
        lines.append(f"**{title or 'Chart'}**")
        lines.append("")
        header = "| Metric | " + " | ".join(names) + " |"
        lines.append(header)
        lines.append("|" + "---|" * (len(names) + 1))
        for i, axis in enumerate(axes):
            cells = [row[i] if i < len(row) else "" for row in matrix]
            lines.append(f"| {axis} | " + " | ".join(cells) + " |")
        return ("\n".join(lines), "text")

    if len(flat) >= 2:
        lines.append(f"**{title or 'Chart'}**")
        lines.append("")
        lines.append("| Axis | Value |")
        lines.append("|---|---|")
        for d, v in flat:
            lines.append(f"| {d} | {v} |")
        return ("\n".join(lines), "text")

    return None


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)
    changed = 0
    edited: list[pathlib.Path] = []

    for path in files:
        raw = path.read_text(encoding="utf-8", errors="replace")
        if not LEGACY.search(raw):
            continue
        lines = raw.split("\n")
        out: list[str] = []
        i = 0
        touched = 0
        while i < len(lines):
            m = FENCE.match(lines[i])
            if not (m and m.group(1)):
                out.append(lines[i])
                i += 1
                continue
            # collect the fenced block
            j = i + 1
            while j < len(lines) and not re.match(r"^\s*```\s*$", lines[j]):
                j += 1
            body = lines[i + 1: j]
            res = convert(body)
            if res:
                new_body, lang = res
                out.append(f"```{lang}")
                out.extend(new_body.split("\n"))
                out.append("```")
                touched += 1
                i = j + 1
            else:
                out.extend(lines[i: j + 1])
                i = j + 1
        if touched:
            changed += touched
            edited.append(path)
            if args.apply:
                path.write_text("\n".join(out), encoding="utf-8")

    label = "APPLIED" if args.apply else "DRY RUN"
    print(f"[{label}] converted {changed} legacy chart block(s) across {len(edited)} file(s)")
    for p in edited:
        print("  " + str(p.relative_to(ROOT)).replace("\\", "/"))
    return 0


if __name__ == "__main__":
    sys.exit(main())