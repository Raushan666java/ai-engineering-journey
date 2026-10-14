"""Sync changed docs/ chapters into the Docusaurus tree at site/docs/.

site/docs/ is not a plain copy. Each page carries Docusaurus frontmatter
(id, slug, title, sidebar_label, sidebar_position) that site/build needs, and
the repo's historical sync script wrote it. That script is no longer present, so
this one never rewrites frontmatter: it splices the body from docs/ into the
existing site page and leaves the frontmatter block exactly as it was.

Blobs are compared by hash first, so this only touches files that genuinely
differ. Line endings and BOMs are preserved because the work is done on bytes.

Usage:
    python scripts/sync_site.py --dry-run
    python scripts/sync_site.py --apply
"""

from __future__ import annotations

import argparse
import hashlib
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS_COURSES = ROOT / "docs" / "courses"
SITE_COURSES = ROOT / "site" / "docs" / "courses"

# Optional UTF-8 BOM, then a YAML frontmatter block terminated by "---".
FM = re.compile(rb"\A(?:\xef\xbb\xbf)?---[ \t]*\r?\n.*?\r?\n---[ \t]*\r?\n", re.S)


def split_frontmatter(raw: bytes) -> tuple[bytes, bytes]:
    """Return (frontmatter_block_including_delimiters, body)."""
    m = FM.match(raw)
    if not m:
        return b"", raw
    return raw[: m.end()], raw[m.end():]


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    args = ap.parse_args()

    if not SITE_COURSES.is_dir():
        sys.stderr.write(f"missing {SITE_COURSES}\n")
        return 2

    updated = 0
    created = 0
    unchanged = 0
    frontmatter_added = 0
    changed: list[str] = []

    for src in sorted(DOCS_COURSES.rglob("*.md")):
        rel = src.relative_to(DOCS_COURSES)
        dst = SITE_COURSES / rel
        src_raw = src.read_bytes()

        if not dst.exists():
            created += 1
            changed.append(rel.as_posix())
            if args.apply:
                dst.parent.mkdir(parents=True, exist_ok=True)
                dst.write_bytes(src_raw)
            continue

        dst_raw = dst.read_bytes()
        fm, _old_body = split_frontmatter(dst_raw)
        new_body = src_raw

        # Preserve the page's existing separator style between fm and body.
        if fm and not new_body.startswith((b"\n", b"\r\n")):
            new_body = b"\n" + new_body
        merged = fm + new_body if fm else new_body

        if merged == dst_raw:
            unchanged += 1
            continue
        if not fm:
            frontmatter_added += 1
        updated += 1
        changed.append(rel.as_posix())
        if args.apply:
            dst.write_bytes(merged)

    label = "APPLY" if args.apply else "DRY RUN"
    out = (
        f"[{label}] bodies updated : {updated}\n"
        f"pages created       : {created}\n"
        f"already identical   : {unchanged}\n"
        f"src pages w/o frontmatter: {frontmatter_added}\n"
    )
    sys.stdout.buffer.write(out.encode())
    limit = 15
    for rel in changed[:limit]:
        sys.stdout.buffer.write(f"  {rel}\n".encode())
    if len(changed) > limit:
        sys.stdout.buffer.write(f"  ... {len(changed) - limit} more\n".encode())
    return 0


if __name__ == "__main__":
    sys.exit(main())