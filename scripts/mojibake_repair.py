"""Repair mojibake in docs/ using only mappings that are provable from context.

Every damaged sequence is matched as a *complete* run, never a fragment. Bare
U+FFFD is deliberately never mapped: in this corpus it stands for an em-dash in
some files and for a lost superscript digit in others, so no single mapping is
correct.

A mapping is only applied when every sampled occurrence of that sequence is
consistent with the same intended character. Anything ambiguous is reported and
left alone, because a wrong guess silently corrupts a worked exam answer.

Usage:
    python scripts/mojibake_repair.py --verify
    python scripts/mojibake_repair.py --apply
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys
from collections import Counter, defaultdict

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parent))
from mojibake_alphabet import runs  # noqa: E402

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# Reviewed mappings. Each is a complete damaged sequence -> one intended char.
# Verified by context in the source chapters; see VERIFY below.
MAPPING = {
    # "5 questions X 1 mark each", "221 = 13 X 17", "LCM(a,b) X HCF(a,b) = a X b"
    "\u00c3\u00e2\u20ac\u00e2\u20ac\ufffd": "\u00d7",
    # "# Compiler Design Y GATE CS Preparation", "### Q1 [1 Mark] Y Numerical Ability"
    "\u00e2\u20ac\u00e2\u20ac\u00c2\ufffd": "\u2014",
    # "**Easy** Y Create custom exception classes"
    "\u00e2\u20ac": "\u2014",
    # "5 questions Y 1 mark each" - em dash variant
    "\u00e2\u20ac\u00e2\u20ac\ufffd": "\u2014",
}


def collect() -> tuple[Counter, dict, dict]:
    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)
    counts: Counter = Counter()
    contexts: dict[str, list[str]] = defaultdict(list)
    owners: dict[str, set[str]] = defaultdict(set)

    for path in files:
        text = path.read_text(encoding="utf-8", errors="replace")
        if "\ufffd" not in text:
            continue
        rel = path.relative_to(DOCS).as_posix()
        for start, run in runs(text):
            counts[run] += 1
            owners[run].add(rel)
            if len(contexts[run]) < 6:
                lo = max(0, start - 40)
                hi = min(len(text), start + len(run) + 40)
                contexts[run].append(f"{rel}\n    ...{text[lo:hi]}...")
    return counts, contexts, owners


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--verify", action="store_true")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--report", default=None, help="write full report as UTF-8 here")
    args = ap.parse_args()

    counts, contexts, _owners = collect()

    mapped_total = 0
    unmapped_total = 0
    lines = ["=" * 78, "MOJIBAKE REPAIR - verification", "=" * 78]

    for run, n in counts.most_common():
        cps = " ".join(f"U+{ord(c):04X}" for c in run)
        target = MAPPING.get(run)
        if target:
            mapped_total += n
            lines.append("")
            lines.append(f"[MAPPED] {run!r} -> {target!r}   count={n}")
            lines.append(f"          codepoints: {cps}")
            for ctx in contexts[run]:
                lines.append("    " + ctx.replace("\n", "\n    "))
        else:
            unmapped_total += n
            if n >= 20:
                lines.append("")
                lines.append(f"[UNMAPPED] count={n}  codepoints: {cps}")
                for ctx in contexts[run][:2]:
                    lines.append("    " + ctx.replace("\n", "\n    "))

    lines.append("")
    lines.append("=" * 78)
    lines.append(f"mapped occurrences   : {mapped_total}")
    lines.append(f"unmapped occurrences : {unmapped_total}")
    lines.append(f"distinct sequences   : {len(counts)} mapped / "
                 f"{sum(1 for r in counts if r in MAPPING)} of {len(counts)}")

    body = "\n".join(lines) + "\n"
    if args.report:
        pathlib.Path(args.report).write_text(body, encoding="utf-8")
        sys.stdout.buffer.write(f"report -> {args.report}\n".encode())
    else:
        sys.stdout.buffer.write(body.encode("utf-8", errors="replace"))

    if not args.apply:
        sys.stdout.buffer.write(
            b"\nVERIFY ONLY - nothing written. Re-run with --apply to repair.\n"
        )
        return 0

    # Apply only exact, complete run matches. Longest first so a shorter
    # sequence cannot eat the prefix of a longer one.
    ordered = sorted(MAPPING, key=len, reverse=True)
    pattern = re.compile("|".join(re.escape(s) for s in ordered))

    changed_files = 0
    replacements = 0
    all_files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)
    for path in all_files:
        # Byte-faithful I/O. Path.read_text/read_text(newline=...) is unusable
        # here: read_text has no newline parameter before Python 3.13, and the
        # default universal-newline mode silently rewrites line endings.
        # Several GATE chapters are committed with CRLF while .gitattributes
        # mandates eol=lf, so a rewritten file shows as a whole-file diff.
        with open(path, "r", encoding="utf-8", errors="replace", newline="") as fh:
            text = fh.read()
        if "\ufffd" not in text:
            continue

        def sub(m: re.Match) -> str:
            nonlocal replacements
            replacements += 1
            return MAPPING[m.group(0)]

        new = pattern.sub(sub, text)
        if new != text:
            with open(path, "w", encoding="utf-8", newline="") as fh:
                fh.write(new)
            changed_files += 1

    sys.stdout.buffer.write(
        f"\nAPPLIED: {replacements} replacements across {changed_files} files\n".encode()
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())