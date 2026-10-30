#!/usr/bin/env python3
"""Execute every ```python block in a course and compare it to the output the
lesson claims.

A course that prints numbers it never ran is a course that lies quietly. This
checks the two things that matter and nothing else:

  1. every example runs without raising
  2. its stdout matches the "Expected output:" fence that follows it

Comparison ignores whitespace, because prose wraps dict reprs and tables across
lines for readability. It does not ignore digits, which is the point.

    python scripts/check-course-examples.py
    python scripts/check-course-examples.py docs/courses/laravel
"""

from __future__ import annotations

import argparse
import contextlib
import io
import pathlib
import re
import sys
import traceback

PY_BLOCK = re.compile(r"```python\n(.*?)```", re.S)
EXPECTED = re.compile(r"Expected output:\s*\n+```(?:text)?\n(.*?)```", re.S)


def squash(s: str) -> str:
    return re.sub(r"\s+", "", s)


def check_file(path: pathlib.Path) -> tuple[int, int]:
    text = path.read_text(encoding="utf-8")
    matched = failed = 0

    for block in PY_BLOCK.finditer(text):
        code = block.group(1)
        expected_match = EXPECTED.search(text[block.end():])

        buffer = io.StringIO()
        try:
            with contextlib.redirect_stdout(buffer):
                exec(compile(code, str(path), "exec"), {"__name__": "__main__"})
        except Exception:
            print(f"ERROR   {path.name}: example raised")
            traceback.print_exc(limit=2)
            failed += 1
            continue

        if expected_match is None:
            print(f"note    {path.name}: example ran, no expected output claimed")
            continue

        got, want = buffer.getvalue(), expected_match.group(1)
        if squash(got) == squash(want):
            matched += 1
        else:
            failed += 1
            print(f"MISMATCH {path.name}")
            print("  got : " + got.replace("\n", " | ")[:400])
            print("  want: " + want.replace("\n", " | ")[:400])

    if matched:
        print(f"ok      {path.name}: {matched} example(s) match")
    return matched, failed


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "target",
        nargs="?",
        default="docs/courses",
        help="course directory to check (default: docs/courses)",
    )
    args = parser.parse_args()

    root = pathlib.Path(args.target)
    if not root.exists():
        print(f"no such path: {root}")
        return 2

    files = sorted(root.rglob("*.md")) if root.is_dir() else [root]
    total_ok = total_bad = 0
    for f in files:
        if "```python" not in f.read_text(encoding="utf-8"):
            continue
        ok, bad = check_file(f)
        total_ok += ok
        total_bad += bad

    print(f"\nverified={total_ok} failed={total_bad}")
    return 1 if total_bad else 0


if __name__ == "__main__":
    sys.exit(main())
