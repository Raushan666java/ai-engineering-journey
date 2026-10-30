#!/usr/bin/env python3
"""Mirror docs/courses/digital-marketing into site/docs with Docusaurus front matter.

The deploy builds from `site/`, not from `docs/`. Every course in the repo is
stored twice: the mkdocs tree under `docs/`, and a Docusaurus mirror under
`site/docs/` whose only difference is a YAML front matter block. That split is
why a course can exist in the repo and still 404 on the live site.

This mirrors the body byte for byte and derives the front matter from the
filename and the H1, which is the same convention every other course uses:

    id               file stem, or `index` for the overview
    slug             /digital-marketing[/<stem>]
    title            the H1 text
    sidebar_label    the H1 text
    sidebar_position 0 for the overview, else the numeric filename prefix

Usage:
    python scripts/sync-digital-marketing-site.py
    python scripts/sync-digital-marketing-site.py --check   # exit 1 if drift
"""

from __future__ import annotations

import argparse
import pathlib
import re
import sys

COURSE = "digital-marketing"
SRC = pathlib.Path("docs/courses") / COURSE
DST = pathlib.Path("site/docs/courses") / COURSE

H1 = re.compile(r"^#\s+(.+?)\s*$", re.M)
STEM_NUM = re.compile(r"^(\d+)-")


def front_matter(path: pathlib.Path, body: str) -> str:
    h1 = H1.search(body)
    if not h1:
        raise SystemExit(f"{path}: no H1, cannot derive a title")
    title = h1.group(1).strip().replace('"', '\\"')

    stem = path.stem
    if stem == "index":
        doc_id, slug, position = "index", f"/{COURSE}", 0
    else:
        doc_id, slug = stem, f"/{COURSE}/{stem}"
        m = STEM_NUM.match(stem)
        position = int(m.group(1)) if m else 99

    return (
        "---\n"
        f"id: {doc_id}\n"
        f"slug: {slug}\n"
        f'title: "{title}"\n'
        f'sidebar_label: "{title}"\n'
        f"sidebar_position: {position}\n"
        "---\n\n"
    )


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--check",
        action="store_true",
        help="report drift instead of writing; exit 1 if the mirror is stale",
    )
    args = parser.parse_args()

    if not SRC.is_dir():
        print(f"no such course directory: {SRC}")
        return 2

    sources = sorted(SRC.glob("*.md"))
    if len(sources) != len({p.name for p in sources}):
        print("duplicate filenames in source; refusing to mirror")
        return 2

    written = unchanged = stale = 0
    DST.mkdir(parents=True, exist_ok=True)

    for path in sources:
        body = path.read_text(encoding="utf-8")
        # Idempotent: strip an existing front matter block before re-deriving it,
        # so running this twice does not stack blocks.
        if body.startswith("---\n"):
            end = body.find("\n---\n", 4)
            if end != -1:
                body = body[end + 5 :].lstrip("\n")

        rendered = front_matter(path, body) + body
        target = DST / path.name

        if target.exists() and target.read_text(encoding="utf-8") == rendered:
            unchanged += 1
            continue

        if args.check:
            stale += 1
            print(f"stale: {target} (source {path})")
            continue

        target.write_text(rendered, encoding="utf-8", newline="\n")
        written += 1
        print(f"wrote: {target}")

    # A file in the mirror with no source is a page that will keep publishing
    # after the source is deleted, so report it rather than leave it behind.
    orphans = [p for p in DST.glob("*.md") if not (SRC / p.name).exists()]
    for orphan in orphans:
        print(f"orphan in mirror (no source): {orphan}")

    if args.check:
        print(f"\nsources={len(sources)} unchanged={unchanged} stale={stale} orphans={len(orphans)}")
        return 1 if stale or orphans else 0

    print(f"\nsources={len(sources)} written={written} unchanged={unchanged} orphans={len(orphans)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
