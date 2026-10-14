"""Repository integrity audit for the docs/ tree.

Checks four classes of defect that the structural quality score cannot see:

1. Broken internal links   - markdown links to a .md/.png/.svg that does not exist
2. Broken images           - <img src> and ![](...) pointing at missing files
3. Nav coverage            - pages under docs/ that no nav entry reaches
4. Site drift              - docs/ pages absent from site/docs/ (the live Docusaurus tree)

The score in quality-report.md counts sections per file. Every defect below is
invisible to it: a chapter with every required heading still 404s if its image
path is wrong.

Usage:
    python scripts/integrity_audit.py                 # report
    python scripts/integrity_audit.py --limit 20      # cap per-section output
    python scripts/integrity_audit.py --json          # machine-readable
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys
from collections import defaultdict
from urllib.parse import unquote, urlsplit

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
SITE_DOCS = ROOT / "site" / "docs"

# Inline links and images: [text](target) but not ![image](target) handled separately.
MD_LINK = re.compile(r"(?<!!)\[(?P<text>[^\]]*)\]\((?P<target>[^)\s]+)(?:\s+\"[^\"]*\")?\)")
MD_IMAGE = re.compile(r"!\[(?P<alt>[^\]]*)\]\((?P<target>[^)\s]+)(?:\s+\"[^\"]*\")?\)")
HTML_IMG = re.compile(r"<img\b[^>]*?\bsrc=[\"'](?P<target>[^\"']+)[\"']", re.I)
HTML_A = re.compile(r"<a\b[^>]*?\bhref=[\"'](?P<target>[^\"']+)[\"']", re.I)

ASSET_SUFFIXES = {".md", ".png", ".jpg", ".jpeg", ".svg", ".gif", ".webp", ".pdf", ".csv", ".json"}

# Lines that legitimately reference a path as an example rather than as a link.
FENCE = re.compile(r"^\s*(?:```|~~~)")


def is_external(target: str) -> bool:
    parts = urlsplit(target)
    return bool(parts.scheme) or target.startswith("//")


def is_anchor_only(target: str) -> bool:
    return target.startswith("#")


def strip_fragment(target: str) -> str:
    return unquote(target.split("#", 1)[0].split("?", 1)[0])


def iter_md_files(base: pathlib.Path):
    if not base.exists():
        return
    for path in base.rglob("*.md"):
        if any(part in {".git", "node_modules"} for part in path.parts):
            continue
        yield path


def resolve(base_file: pathlib.Path, target: str, docs_root: pathlib.Path) -> pathlib.Path | None:
    """Resolve a repo-relative or doc-relative link to a path on disk."""
    target = strip_fragment(target)
    if not target:
        return None
    candidate = pathlib.PurePosixPath(target)
    if candidate.is_absolute():
        return pathlib.Path(target)
    # Docusaurus/MkDocs docs links are written relative to the docs root as well
    # as relative to the containing file. Try containing file first.
    options = [
        (base_file.parent / candidate),
        (docs_root / candidate),
    ]
    # A directory link such as ./01-python-basics.md/ should try the file.
    for option in options:
        if option.is_file():
            return option
        if option.is_dir():
            for index in ("index.md", "README.md"):
                if (option / index).is_file():
                    return option / index
    return None


def scan_file(path: pathlib.Path, docs_root: pathlib.Path) -> dict[str, list[dict]]:
    out: dict[str, list[dict]] = defaultdict(list)
    try:
        raw = path.read_text(encoding="utf-8", errors="replace")
    except OSError as exc:
        out["unreadable"].append({"line": 0, "target": str(exc)})
        return out

    rel = path.relative_to(ROOT).as_posix()
    in_fence = False
    for lineno, line in enumerate(raw.splitlines(), start=1):
        if FENCE.match(line):
            in_fence = not in_fence
            continue
        if in_fence:
            # Code fences still legitimately contain markdown-looking strings,
            # but a broken link check should not fire on them.
            continue
        for kind, pattern in (
            ("broken_link", MD_LINK),
            ("broken_image", MD_IMAGE),
            ("broken_image", HTML_IMG),
            ("broken_link", HTML_A),
        ):
            for match in pattern.finditer(line):
                target = match.group("target")
                if is_external(target) or is_anchor_only(target):
                    continue
                if suffix_of(target) not in ASSET_SUFFIXES:
                    continue
                if resolve(path, target, docs_root) is None:
                    out[kind].append({"line": lineno, "target": target, "file": rel})
    return out


def suffix_of(target: str) -> str:
    target = strip_fragment(target)
    return pathlib.PurePosixPath(target).suffix.lower()


# Directories that are deliberately outside the published site. `docs/ai-engineering-
# scratch` is a vendored upstream project with its own nav and templates; flagging
# its 1,300 files as orphans buries the real defects.
VENDORED_PREFIXES = ("ai-engineering-from-scratch/",)
TEMPLATE_NAMES = {"TEMPLATE.md", "CHANGELOG.md", "CODE_OF_CONDUCT.md", "FORKING.md"}


def is_intentionally_unpublished(rel: str) -> bool:
    if rel.startswith(VENDORED_PREFIXES):
        return True
    if rel.rsplit("/", 1)[-1] in TEMPLATE_NAMES:
        return True
    return False


def nav_targets() -> set[str]:
    """Paths referenced by mkdocs.yml nav, normalised to docs-relative POSIX."""
    mkdocs = ROOT / "mkdocs.yml"
    found: set[str] = set()
    if not mkdocs.is_file():
        return found
    text = mkdocs.read_text(encoding="utf-8", errors="replace")
    for match in re.finditer(r"(?<![\w/])((?:courses|references|lessons|assets)/[\w\-./]*\.md|[a-z\-]+\.md)", text):
        found.add(match.group(1).lstrip("./"))
    return found


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--limit", type=int, default=15, help="max rows printed per section")
    ap.add_argument("--json", action="store_true")
    args = ap.parse_args()

    files = sorted(iter_md_files(DOCS))
    report: dict[str, list[dict]] = defaultdict(list)

    for path in files:
        for kind, rows in scan_file(path, DOCS).items():
            report[kind].extend(rows)

    # Nav coverage: a page is orphaned when nothing in mkdocs.yml names it.
    nav = nav_targets()
    if nav:
        for path in files:
            rel = path.relative_to(DOCS).as_posix()
            if path.name in {"index.md"}:
                continue
            if is_intentionally_unpublished(rel):
                continue
            if rel in nav or f"./{rel}" in nav:
                continue
            # A page named by another page's link is reachable by navigation.
            report["off_nav"].append({"file": rel})

    # Site drift: docs/ content that the live Docusaurus tree does not carry.
    if SITE_DOCS.exists():
        site_files = {p.relative_to(SITE_DOCS).as_posix() for p in iter_md_files(SITE_DOCS)}
        docs_courses = {p.relative_to(DOCS).as_posix() for p in iter_md_files(DOCS / "courses")}
        for rel in sorted(docs_courses - site_files):
            if is_intentionally_unpublished(rel):
                continue
            report["site_drift"].append({"file": rel})

    if args.json:
        print(json.dumps({k: v for k, v in report.items()}, indent=2))
        return 0

    print("=" * 74)
    print(f"INTEGRITY AUDIT - {len(files)} markdown files under docs/")
    print("=" * 74)

    total = 0
    for kind, label in (
        ("broken_link", "Broken internal links"),
        ("broken_image", "Broken images"),
        ("off_nav", "Pages not referenced by mkdocs.yml nav"),
        ("site_drift", "docs/ pages missing from site/docs/ (live tree)"),
        ("unreadable", "Unreadable files"),
    ):
        rows = report.get(kind, [])
        total += len(rows)
        print(f"\n{label}: {len(rows)}")
        for row in rows[: args.limit]:
            if kind == "off_nav" or kind == "site_drift":
                print(f"  {row['file']}")
            else:
                print(f"  {row.get('file','?')}:{row.get('line','?')} -> {row.get('target')}")
        if len(rows) > args.limit:
            print(f"  ... {len(rows) - args.limit} more")

    print("\n" + "=" * 74)
    print(f"TOTAL DEFECTS: {total}")
    print("=" * 74)
    return 0 if total == 0 else 1


if __name__ == "__main__":
    sys.exit(main())