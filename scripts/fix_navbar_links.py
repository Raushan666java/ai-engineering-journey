"""Normalise part-scoped navbar links in the built parts.

Why this exists: `sidebars.ts` aliases `placementSidebar` to whatever course
`BUILD_ONLY` is building, and the navbar item for it was declared as a
`docSidebar` link. A `docSidebar` link resolves to the *first document* of
that sidebar, so every part build emitted a different href for the same
navbar label. The merged site therefore shipped 1,017 of 1,409 pages whose
"Placement Course" item went to that part's own first document
(`/web-development/01-html`, `/java/01-jvm-memory`, ...).

`site/docusaurus.config.ts` now pins the route with a plain `to`, so new
builds are correct on their own. This script exists because the 59 parts are
the merge source: without it, the next `-MergeOnly` would resurrect the
wrong hrefs from any part that has not been rebuilt yet.

It rewrites the href of exactly one labelled navbar anchor, leaving the
active-state attributes (`aria-current`, `navbar__link--active`) untouched so
deployment output matches what Docusaurus renders for that `to` route.

Usage:
    python scripts/fix_navbar_links.py            # parts + merged tree
    python scripts/fix_navbar_links.py --dry-run
"""
import pathlib
import re
import sys

REPO = pathlib.Path(__file__).resolve().parent.parent
PARTS = REPO / "site" / "build-parts"
MERGED = pathlib.Path(r"C:\Users\hiii\AppData\Local\Temp\opencode\site-merged")

# navbar label -> route it must point at (before baseUrl)
FIXUPS = {
    "Placement Course": "/ai-engineering-placement",
}


def base_url() -> str:
    """Read `baseUrl` out of the Docusaurus config so the script cannot drift
    if the site is ever moved off /ai-engineering-journey/."""
    cfg = (REPO / "site" / "docusaurus.config.ts").read_text(encoding="utf-8")
    m = re.search(r"baseUrl:\s*['\"]([^'\"]+)['\"]", cfg)
    return m.group(1) if m else "/ai-engineering-journey/"


def rewrite(html: str, label: str, target: str) -> tuple[str, int]:
    """Rewrite hrefs on every anchor whose visible text is `label`.

    Only the href value is touched, so the surrounding markup
    (`aria-current`, `navbar__link--active`) stays exactly as Docusaurus
    rendered it.
    """
    pattern = re.compile(
        r'(<a\b[^>]*?href=")([^"]*)("[^>]*?>\s*' + re.escape(label) + r"\s*</a>)"
    )
    hits = {"changed": 0}

    def sub(m: re.Match) -> str:
        if m.group(2) == target:
            return m.group(0)
        hits["changed"] += 1
        return m.group(1) + target + m.group(3)

    return pattern.sub(sub, html), hits["changed"]


def main() -> int:
    dry = "--dry-run" in sys.argv
    base = base_url()
    targets = {k: base.rstrip("/") + v for k, v in FIXUPS.items()}

    roots = [PARTS]
    if MERGED.exists():
        roots.append(MERGED)

    total_files = 0
    total_fixed = 0
    for root in roots:
        fixed_here = 0
        files = 0
        for f in root.rglob("*.html"):
            text = f.read_text(encoding="utf-8", errors="replace")
            if not any(lbl in text for lbl in targets):
                continue
            files += 1
            new, n = text, 0
            for label, want in targets.items():
                new, k = rewrite(new, label, want)
                n += k
            if n and not dry:
                f.write_text(new, encoding="utf-8")
            fixed_here += n
        print(f"{root}: scanned {files} html, hrefs changed {fixed_here}")
        total_files += files
        total_fixed += fixed_here

    print(f"\n{'would change' if dry else 'changed'}: {total_fixed} "
          f"href(s) across {total_files} pages")

    # Verify: no page may still pair the label with a foreign target.
    bad = []
    for root in roots:
        for f in root.rglob("*.html"):
            t = f.read_text(encoding="utf-8", errors="replace")
            for m in re.finditer(
                r'<a\b[^>]*?href="([^"]*)"[^>]*?>\s*Placement Course\s*</a>', t
            ):
                if m.group(1) != targets["Placement Course"]:
                    bad.append((str(f), m.group(1)))
    print(f"remaining wrong targets: {len(bad)}")
    for f, href in bad[:5]:
        print("   ", href, f)
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
