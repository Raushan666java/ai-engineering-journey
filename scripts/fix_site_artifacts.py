"""Repair the two site-wide artifacts that per-course builds get wrong.

Each part build emits its own sitemap.xml and search-index.json describing only
the pages it contained. Merging the parts therefore leaves whichever part was
copied last on top: the published sitemap listed 23 pages while the site served
1,408, and search only covered a single course.

This rebuilds both from the merged tree, which is the single source of truth.

Usage:
    python scripts/fix_site_artifacts.py --parts site/build-parts --out <merged>
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from xml.sax.saxutils import escape

BASE = "https://raushan666java.github.io/ai-engineering-journey/"

# index.html of a directory route, or a real .html file, but not 404.html.
HTML = re.compile(rb'<!DOCTYPE html>|<html')


def collect_pages(root: pathlib.Path) -> list[str]:
    """Return site-absolute page paths, sorted, excluding asset 404."""
    pages: list[str] = []
    for p in sorted(root.rglob("*.html")):
        rel = p.relative_to(root).as_posix()
        if rel.endswith("404.html"):
            continue
        if rel.startswith("assets/"):
            continue
        with open(p, "rb") as fh:
            head = fh.read(2048)
        if not HTML.search(head):
            continue
        if rel == "index.html":
            url = "/"
        elif rel.endswith("/index.html"):
            url = "/" + rel[: -len("index.html")]
        else:
            url = "/" + rel
        pages.append(url)
    return sorted(set(pages))


def build_sitemap(pages: list[str]) -> str:
    out = ['<?xml version="1.0" encoding="UTF-8"?>',
           '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    for u in pages:
        out.append("  <url><loc>" + escape(BASE.rstrip("/") + u) + "</loc></url>")
    out.append("</urlset>")
    return "\n".join(out) + "\n"


def merge_search(parts_root: pathlib.Path) -> tuple[list[dict], int]:
    docs: list[dict] = []
    seen: set[str] = set()
    files = 0
    for idx in sorted(parts_root.rglob("search-index.json")):
        files += 1
        try:
            data = json.loads(idx.read_text(encoding="utf-8"))
        except (json.JSONDecodeError, OSError):
            continue
        # Shape is a list of objects each holding a "documents" array.
        chunks = data if isinstance(data, list) else [data]
        for chunk in chunks:
            if not isinstance(chunk, dict):
                continue
            for d in chunk.get("documents", []):
                url = d.get("u")
                if not url or url in seen:
                    continue
                seen.add(url)
                d["i"] = len(docs)          # renumber: ids collided across parts
                docs.append(d)
    return docs, files


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--parts", default="site/build-parts")
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    parts_root = pathlib.Path(args.parts).resolve()
    out = pathlib.Path(args.out).resolve()
    if not out.is_dir():
        sys.stderr.write(f"merged output not found: {out}\n")
        return 2

    pages = collect_pages(out)
    (out / "sitemap.xml").write_text(build_sitemap(pages), encoding="utf-8")

    docs, files = merge_search(parts_root)
    payload = [{"documents": docs}]
    (out / "search-index.json").write_text(
        json.dumps(payload, separators=(",", ":"), ensure_ascii=False), encoding="utf-8"
    )

    print(f"pages discovered : {len(pages)}")
    print(f"sitemap written  : {out / 'sitemap.xml'}")
    print(f"search indexes   : merged {files} part files -> {len(docs)} documents")
    return 0


if __name__ == "__main__":
    sys.exit(main())