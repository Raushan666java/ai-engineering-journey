"""Audit every markdown link and image reference in the site's docs tree.

`site/docs` is what Docusaurus builds. Each file carries an explicit `slug:`
frontmatter field, so the published route set is exactly knowable without
running a build. That is the whole point: a link can be syntactically fine,
the site can build, and the link can still 404 because the route it names
does not exist.

Checks, per reference:
  * internal route links  -> resolve against the slug map
  * relative file links   -> resolve against the docs tree, then to a slug
  * static assets         -> resolve against site/static
  * external http(s) urls -> optional live check (--http)

Fenced code blocks are stripped before scanning, so example URLs in snippets
are not mistaken for real references.

Usage:
    python scripts/audit_links.py                 # local resolution only
    python scripts/audit_links.py --http          # also check external urls
    python scripts/audit_links.py --json out.json
"""

from __future__ import annotations

import argparse
import concurrent.futures as cf
import json
import pathlib
import posixpath
import re
import sys
from collections import defaultdict
from urllib.parse import unquote, urlsplit

ROOT = pathlib.Path(__file__).resolve().parent.parent
SITE = ROOT / "site"
DOCS = SITE / "docs"
STATIC = SITE / "static"

BASE_URL = "/ai-engineering-journey/"
HOSTED = "https://raushan666java.github.io/ai-engineering-journey/"

FENCE = re.compile(r"^\s*(```|~~~)", re.M)
FRONTMATTER = re.compile(r"\A---\s*\n(.*?)\n---\s*\n", re.S)
SLUG = re.compile(r"(?m)^slug:\s*[\"']?(.*?)[\"']?\s*$")
# Markdown link or image. The title group is optional and non-capturing.
MD_LINK = re.compile(r"!?\[[^\]]*\]\(\s*(<[^>]+>|[^)\s]+)(?:\s+\"[^\"]*\")?\s*\)")
# Only inside real markup. A bare `href=` also matches a CSS attribute
# selector written in prose (`a[href="/home"]:hover`), which produced a
# phantom dead link on the web-technologies page.
HTML_REF = re.compile(r"<[A-Za-z][^<>]*?\b(?:src|href)\s*=\s*[\"']([^\"']+)[\"']")
AUTOLINK = re.compile(r"<(https?://[^>\s]+)>")


def strip_code(text: str) -> str:
    """Blank out fenced blocks and inline spans, preserving line numbers.

    Inline spans matter as much as fences: a markdown table cell holding
    `` `int& operator[](size_t)` `` matches the link regex, because `[...]`
    followed by `(...)` is indistinguishable from a real link. Seven of the
    ten "dead routes" in the first audit run were exactly that.
    """
    out = []
    in_fence = False
    fence_marker = ""
    for line in text.split("\n"):
        m = re.match(r"^\s*(`{3,}|~{3,})", line)
        if m:
            marker = m.group(1)[0] * 3
            if not in_fence:
                in_fence, fence_marker = True, marker
                out.append("")
                continue
            if marker == fence_marker:
                in_fence = False
            out.append("")
            continue
        if in_fence:
            out.append("")
            continue
        # Inline code spans, single or double backtick delimited.
        line = re.sub(r"``.+?``|`[^`\n]+`", "  ", line)
        out.append(line)
    return "\n".join(out)


def slug_for(path: pathlib.Path) -> str | None:
    head = path.read_text(encoding="utf-8-sig", errors="replace")[:2000]
    # utf-8-sig only strips a BOM at the very start of the *file*, and this
    # slice can begin after it; drop any that survived so `\\A---` can match.
    head = head.lstrip("\ufeff")
    fm = FRONTMATTER.match(head)
    if not fm:
        return None
    m = SLUG.search(fm.group(1))
    if not m:
        return None
    return m.group(1).strip().strip("/")


def build_maps(docs_root: pathlib.Path):
    routes: set[str] = set()
    file_to_slug: dict[str, str] = {}
    for p in docs_root.rglob("*.md"):
        s = slug_for(p)
        rel = p.relative_to(docs_root).as_posix()
        if s is None:
            # No explicit slug: Docusaurus derives the route from the file path
            # with the NN- filename prefix stripped. Derive it relative to the
            # docs root — p.parent.as_posix() is absolute on Windows and would
            # have produced a route like `C:/xampp/.../speed-drills/index`.
            rel = p.relative_to(docs_root).as_posix()
            parent = posixpath.dirname(rel)
            if parent.startswith("courses/"):
                parent = parent[len("courses/"):]
            stem = re.sub(r"^\d+-", "", p.stem)
            s = f"{parent}/{stem}" if parent else stem
        routes.add(s.strip("/"))
        file_to_slug[rel] = s.strip("/")
    # Hand-authored pages.
    routes.update({"", "courses"})
    # Static assets, addressable as base-relative paths.
    assets = {
        p.relative_to(STATIC).as_posix()
        for p in STATIC.rglob("*")
        if p.is_file()
    }
    return routes, file_to_slug, assets


def norm_target(raw: str) -> str:
    t = raw.strip()
    if t.startswith("<") and t.endswith(">"):
        t = t[1:-1]
    return t


def classify(url, file_rel, routes, file_to_slug, assets, docs_root: pathlib.Path):
    """Return (kind, resolved) for a reference."""
    url = norm_target(url)
    if not url or url.startswith(("mailto:", "tel:", "data:", "javascript:")):
        return "skip", None
    if url.startswith("#"):
        return "skip", None

    parts = urlsplit(url)
    if parts.scheme in ("http", "https"):
        if url.startswith(HOSTED):
            return "internal", url[len(HOSTED):].strip("/")
        return "external", url
    if parts.netloc:
        return "external", url

    # Site-absolute. Under the base path a reference may name either a route
    # or a file served from site/static, so asset lookup has to come first —
    # `img/visual/x.svg` is never in the route set.
    if url.startswith(BASE_URL):
        tail = url[len(BASE_URL):].strip("/")
        if tail in assets:
            return "asset", tail
        return "internal", tail
    if url.startswith("/"):
        # Absolute but not under the base URL: GitHub Pages serves only the
        # project path, so this resolves to the domain root and 404s.
        return "bad-absolute", url

    # Relative.
    path = parts.path
    if not path:
        return "skip", None
    path = unquote(path)
    # normpath collapses `..` and `.`; PurePosixPath does not, and leaving
    # `../` in the string makes every parent-relative link look unresolvable.
    target = posixpath.normpath(posixpath.join(posixpath.dirname(file_rel), path))
    if target.startswith("../"):
        return "relative-outside", target

    if target.startswith("img/") or target.startswith("static/"):
        return "asset", target.split("static/", 1)[-1]

    if target.endswith((".md", ".mdx")):
        slug = file_to_slug.get(target)
        if slug is None:
            # Try with the courses/ prefix, and as a directory index.
            slug = file_to_slug.get(target) or file_to_slug.get(f"courses/{target}")
        if slug is None:
            return "missing-file", target
        return "internal", slug

    # Any other relative file (svg, png, pdf) sitting in the docs tree.
    # Docusaurus only serves what lives in site/static, so a file under
    # site/docs is published as a document at best and is otherwise
    # unreachable at the path the markdown names.
    if (docs_root / target).is_file():
        return "docs-tree-asset", target

    # Extensionless relative link: `./02-architecture-routing`. Docusaurus
    # resolves these against routes, and the `courses/` docs prefix is not
    # part of the slug, so resolve via the file map first.
    as_doc = target + ".md"
    slug = file_to_slug.get(as_doc) or file_to_slug.get(f"courses/{as_doc}")
    if slug is not None:
        return "internal", slug
    stripped = target[len("courses/"):] if target.startswith("courses/") else target
    return "internal", stripped.strip("/")


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--http", action="store_true", help="also check external urls")
    ap.add_argument("--json", dest="json_out")
    ap.add_argument("--concurrency", type=int, default=16)
    ap.add_argument("--dir", default="site/docs", dest="docs_dir",
                    help="docs tree to audit: 'site/docs' (build input) or 'docs' (source)")
    args = ap.parse_args()

    docs_root = (ROOT / args.docs_dir).resolve()
    routes, file_to_slug, assets = build_maps(docs_root)

    problems: list[dict] = []
    externals: dict[str, list[str]] = defaultdict(list)
    total = 0

    for p in sorted(docs_root.rglob("*.md")):
        rel = p.relative_to(docs_root).as_posix()
        text = strip_code(p.read_text(encoding="utf-8", errors="replace"))
        refs = [m.group(1) for m in MD_LINK.finditer(text)]
        refs += [m.group(1) for m in HTML_REF.finditer(text)]
        refs += [m.group(1) for m in AUTOLINK.finditer(text)]
        for raw in refs:
            url = norm_target(raw)
            if not url:
                continue
            total += 1
            kind, resolved = classify(url, rel, routes, file_to_slug, assets, docs_root)
            if kind == "skip":
                continue
            if kind == "external":
                externals[resolved].append(rel)
            elif kind == "internal":
                if resolved not in routes:
                    problems.append({"type": "dead-route", "file": rel, "ref": url,
                                     "resolved": resolved})
            elif kind == "asset":
                if resolved not in assets:
                    problems.append({"type": "dead-asset", "file": rel, "ref": url,
                                     "resolved": resolved})
            else:
                problems.append({"type": kind, "file": rel, "ref": url,
                                 "resolved": resolved})

    by_type: dict[str, int] = defaultdict(int)
    for pr in problems:
        by_type[pr["type"]] += 1

    print("=" * 70)
    print(f"LINK AUDIT - {args.docs_dir} ({len(file_to_slug)} docs, {len(routes)} routes)")
    print("=" * 70)
    print(f"references scanned : {total}")
    print(f"external urls      : {len(externals)} unique")
    print(f"broken (local)     : {len(problems)}")
    for t, n in sorted(by_type.items(), key=lambda kv: -kv[1]):
        print(f"   {n:5}  {t}")

    sample: dict[str, list[str]] = defaultdict(list)
    for pr in problems:
        if len(sample[pr["type"]]) < 12:
            sample[pr["type"]].append(f"  {pr['file']}  ->  {pr['ref'][:90]}")
    for t, lines in sample.items():
        print(f"\n--- {t} ---")
        print("\n".join(lines))

    if args.http and externals:
        print("\nchecking external urls ...")
        broken_ext = check_external(externals, args.concurrency)
        print(f"external broken     : {len(broken_ext)}")
        for url, (status, files) in sorted(broken_ext.items())[:40]:
            print(f"   {status}  {url[:95]}  [{files[0]}]")
        for url, (status, files) in broken_ext.items():
            problems.append({"type": f"external-{status}", "file": files[0],
                             "ref": url, "resolved": url})

    if args.json_out:
        pathlib.Path(args.json_out).write_text(
            json.dumps(problems, indent=2, ensure_ascii=False), encoding="utf-8")
        print(f"\nwrote {len(problems)} problems to {args.json_out}")
    return 1 if problems else 0


def check_external(urls: dict[str, list[str]], concurrency: int):
    import urllib.request
    import urllib.error

    bad = {}
    ua = {"User-Agent": "Mozilla/5.0 (compatible; link-audit/1.0)"}

    def probe(url: str):
        for method in ("HEAD", "GET"):
            req = urllib.request.Request(url, headers=ua, method=method)
            try:
                with urllib.request.urlopen(req, timeout=20) as r:
                    return url, (r.status, urls[url])
            except urllib.error.HTTPError as e:
                if e.code in (403, 405, 429) and method == "HEAD":
                    continue  # many CDNs reject HEAD; retry as GET
                return url, (e.code, urls[url])
            except Exception as e:  # noqa: BLE001 - report, don't crash the sweep
                return url, (type(e).__name__, urls[url])
        return url, ("unreachable", urls[url])

    with cf.ThreadPoolExecutor(max_workers=concurrency) as ex:
        for url, info in ex.map(probe, list(urls)):
            status = info[0]
            if status != 200:
                bad[url] = info
    return bad


if __name__ == "__main__":
    sys.exit(main())
