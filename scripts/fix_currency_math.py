"""Escape currency dollar signs so remark-math stops treating them as delimiters.

site/docusaurus.config.ts enables remark-math and rehype-katex, so any $...$
span in Markdown is handed to KaTeX. A price written as $0.10-$0.50 therefore
opens a math span at the first $ and closes it at the second, and KaTeX renders
the money range as broken maths. The build logs these only as warnings, so they
ship.

Escaping as \\$ makes the dollar literal, which is the form remark-math expects.

The rule is deliberately narrow: only a $ immediately followed by a digit is
escaped. A $ followed by a letter or symbol is left alone, so real expressions
such as $x^2 + y$ are untouched. Lines that look like genuine maths starting
with a numeric literal are reported separately for human review rather than
being silently degraded.

Usage:
    python scripts/fix_currency_math.py            # dry run, prints samples
    python scripts/fix_currency_math.py --apply
    python scripts/fix_currency_math.py --apply --review-report path.md
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# An unescaped $ directly before a digit, not already escaped, not part of $$.
CURRENCY = re.compile(r"(?<!\\)(?<!\$)\$(?!\$)(?=\d)")

# A money amount: digits with optional thousands separators, decimals, and a
# magnitude/denominator suffix such as 5M, 20/M, 1200/yr.
MONEY = re.compile(r"\d[\d,]*(?:\.\d+)?\s*(?:[kKmMbB]|/(?:M|mo|yr|month|user|req|token))?")

# A $ followed by a letter or symbol is a real maths delimiter. If a line has
# one of those *and* a currency $, the line may contain genuine maths, so it is
# reported for review instead of being rewritten blind.
MATH_OPEN = re.compile(r"(?<!\\)(?<!\$)\$(?!\$)(?=[A-Za-z\\(\[{])")

FENCE = re.compile(r"^\s*(?:```|~~~)")


def looks_like_math(line: str) -> bool:
    """True when the line also opens what is probably a real maths span."""
    return bool(MATH_OPEN.search(line))


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--limit", type=int, default=15)
    ap.add_argument("--review-report", help="write lines needing human review here")
    args = ap.parse_args()

    files = sorted(p for p in DOCS.rglob("*.md") if "node_modules" not in p.parts)

    total = 0
    changed_files = 0
    review: list[tuple[str, int, str]] = []
    samples: list[str] = []

    for path in files:
        with open(path, "r", encoding="utf-8", errors="replace", newline="") as fh:
            text = fh.read()
        if "$" not in text:
            continue

        out_lines: list[str] = []
        file_hits = 0
        in_fence = False
        for lineno, line in enumerate(text.splitlines(keepends=True), start=1):
            if FENCE.match(line):
                in_fence = not in_fence
                out_lines.append(line)
                continue
            if in_fence:
                out_lines.append(line)
                continue

            hits = list(CURRENCY.finditer(line))
            if not hits:
                out_lines.append(line)
                continue

            if looks_like_math(line):
                review.append((str(path.relative_to(DOCS).as_posix()), lineno, line.strip()))
                out_lines.append(line)
                continue

            file_hits += len(hits)
            if len(samples) < args.limit:
                samples.append(
                    f"{path.relative_to(DOCS).as_posix()}:{lineno}\n"
                    f"    {line.strip()[:160]}"
                )
            out_lines.append(CURRENCY.sub(r"\\$", line))

        if file_hits:
            total += file_hits
            changed_files += 1
            if args.apply:
                with open(path, "w", encoding="utf-8", newline="") as fh:
                    fh.write("".join(out_lines))

    label = "APPLIED" if args.apply else "DRY RUN"
    sys.stdout.buffer.write(
        f"[{label}] escaped {total} currency '$' across {changed_files} files\n".encode()
    )
    sys.stdout.buffer.write(
        f"          {len(review)} line(s) flagged for manual review (left untouched)\n".encode()
    )

    if samples:
        sys.stdout.buffer.write(b"\nsamples:\n")
        for s in samples:
            sys.stdout.buffer.write(("  " + s + "\n").encode("utf-8", errors="replace"))

    if args.review_report and review:
        body = "\n".join(f"{p}:{n}\n    {t}" for p, n, t in review)
        pathlib.Path(args.review_report).write_text(body + "\n", encoding="utf-8")
        sys.stdout.buffer.write(f"\nreview list -> {args.review_report}\n".encode())
    return 0


if __name__ == "__main__":
    sys.exit(main())