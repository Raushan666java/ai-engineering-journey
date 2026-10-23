"""Repair the link defects that scripts/audit_links.py reports.

Four distinct bugs, four distinct repairs. Nothing here is a blanket rewrite;
each transform runs only against the exact files and references the auditor
named, so a working link cannot be disturbed by a fix aimed at another one.

  bad-absolute    `](/foo/bar)` omits the GitHub Pages project base path.
                  Pages serves only under /ai-engineering-journey/, so the
                  link resolves against the domain root and 404s.

  missing-file    `](index.md)` where the course directory actually names
                  its index `00-index.md`.

  docs-tree-asset `](visual/x.svg)` pointing into site/docs. Docusaurus serves
                  only site/static, so the file exists in the repository and
                  404s on the site. The asset is copied into static/img/visual
                  and the reference rewritten to the served path.

  dead-route      `[Text](link)` placeholder left behind by a content pass.

Usage:
    python scripts/fix_links.py --report links.json            # dry run
    python scripts/fix_links.py --report links.json --apply
"""

from __future__ import annotations

import argparse
import json
import pathlib
import shutil
import sys
from collections import defaultdict

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
DOCS = SITE / "docs"
STATIC = SITE / "static"

BASE = "/ai-engineering-journey/"


def fix_bad_absolute(ref: str) -> str | None:
    """`/learning-how-to-learn` -> `/ai-engineering-journey/learning-how-to-learn`."""
    if not ref.startswith("/") or ref.startswith(BASE):
        return None
    tail = ref[1:]
    if tail in ("", "home"):
        return BASE
    return BASE + tail


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--report", required=True, help="json written by audit_links.py")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dir", default="site/docs", dest="docs_dir",
                    help="tree the report was produced against")
    args = ap.parse_args()

    docs_root = (ROOT / args.docs_dir).resolve()

    problems = json.loads(pathlib.Path(args.report).read_text(encoding="utf-8"))

    by_file: dict[str, list[dict]] = defaultdict(list)
    for p in problems:
        by_file[p["file"]].append(p)

    copied_assets = 0
    edits = 0
    skipped = []

    for rel, items in sorted(by_file.items()):
        path = docs_root / rel
        if not path.is_file():
            skipped.append(f"{rel}: file not found")
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        original = text

        for it in items:
            kind, ref = it["type"], it["ref"]

            if kind == "bad-absolute":
                new = fix_bad_absolute(ref)
                if new is None:
                    skipped.append(f"{rel}: unhandled absolute {ref}")
                    continue
                text = text.replace(f"]({ref})", f"]({new})", 1)

            elif kind == "missing-file":
                # Only valid where the sibling index really is 00-index.md.
                sibling = path.parent / "00-index.md"
                if not sibling.is_file():
                    skipped.append(f"{rel}: no 00-index.md sibling for {ref}")
                    continue
                text = text.replace(f"]({ref})", "](00-index.md)", 1)

            elif kind == "docs-tree-asset":
                src = docs_root / it["resolved"]
                if not src.is_file():
                    skipped.append(f"{rel}: asset missing {it['resolved']}")
                    continue
                dest = STATIC / "img" / "visual" / src.name
                # Gate on --apply: a dry run must not write assets either.
                if args.apply:
                    dest.parent.mkdir(parents=True, exist_ok=True)
                    if not dest.exists() or dest.stat().st_mtime < src.stat().st_mtime:
                        shutil.copy2(src, dest)
                        copied_assets += 1
                text = text.replace(
                    f"]({ref})", f"]({BASE}img/visual/{src.name})", 1)

            elif kind == "dead-route" and ref == "link":
                # `[Text](link)` -> `Text`: keep the words, drop the dead target.
                text = text.replace("](link)", ")", 1)

            else:
                skipped.append(f"{rel}: no repair for {kind} [{ref}]")

        if text != original:
            edits += 1
            print(f"  {'APPLIED' if args.apply else 'would edit'}  {rel}")
            if args.apply:
                path.write_text(text, encoding="utf-8")

    print()
    print(f"files edited : {edits}")
    print(f"assets copied: {copied_assets} into {STATIC / 'img' / 'visual'}")
    if skipped:
        print(f"skipped      : {len(skipped)}")
        for s in skipped:
            print(f"   - {s}")
    if not args.apply:
        print("\n(dry run - nothing written)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
