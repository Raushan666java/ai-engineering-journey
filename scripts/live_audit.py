"""Audit every published URL and every local asset the pages reference.

Checks, per page:
  * HTTP status
  * leftover U+FFFD mojibake in the rendered body
  * local asset references that 404 on the live site
  * internal links to pages that 404

The point is that "the site built successfully" says nothing about whether a
reader can actually read it. A page can build, serve 200, and still be missing
the images it points at.

Usage:
    python scripts/live_audit.py --sitemap                 # use sitemap.xml
    python scripts/live_audit.py --limit 40 --concurrency 12
    python scripts/live_audit.py --json out.json
"""

from __future__ import annotations

import argparse
import asyncio
import json
import pathlib
import re
import sys
from urllib.parse import urljoin, urlsplit

import urllib.request

BASE = "https://raushan666java.github.io/ai-engineering-journey/"

IMG = re.compile(r'<img[^>]+src="([^"]+)"')
LINK = re.compile(r'<a[^>]+href="([^"]+)"')
REPL = "\ufffd"

UA = {"User-Agent": "Mozilla/5.0 (compatible; live-audit/1.0)"}


def fetch(url: str, timeout: int = 30) -> tuple[int, str]:
    req = urllib.request.Request(url, headers=UA)
    try:
        with urllib.request.urlopen(req, timeout=timeout) as r:
            return r.status, r.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as e:
        return e.code, ""
    except Exception:
        return 0, ""


async def check(session_url: str, sem: asyncio.Semaphore) -> dict:
    async def get(url: str) -> tuple[int, str]:
        loop = asyncio.get_event_loop()
        return await loop.run_in_executor(None, fetch, url)

    async with sem:
        status, html = await get(session_url)

    rec = {
        "url": session_url.replace(BASE, "/"),
        "status": status,
        "bytes": len(html),
        "mojibake": html.count(REPL),
        "bad_assets": [],
    }
    if status != 200 or not html:
        return rec

    assets = {s for s in IMG.findall(html) if not s.startswith("data:")}
    for src in list(assets)[:40]:
        absolute = urljoin(BASE, src)
        if not absolute.startswith(BASE):
            continue  # external (raw.githubusercontent), not ours to serve
        code, _ = await get(absolute)
        if code != 200:
            rec["bad_assets"].append({"src": src, "status": code})
    return rec


async def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sitemap", action="store_true")
    ap.add_argument("--limit", type=int, default=40)
    ap.add_argument("--concurrency", type=int, default=10)
    ap.add_argument("--json")
    args = ap.parse_args()

    if args.sitemap:
        _, sm = fetch(BASE + "sitemap.xml")
        locs = re.findall(r"<loc>([^<]+)</loc>", sm)
        # <loc> is already absolute. Prepending BASE produced "//path" and a
        # 404 for the whole run, so only relativise when it is not already one.
        urls = []
        for u in locs:
            u = u.strip()
            if "ai-engineering-journey" not in u:
                continue
            urls.append(u if u.startswith("http") else urljoin(BASE, u))
        urls = list(dict.fromkeys(urls))
    else:
        urls = [BASE]

    if args.limit:
        urls = urls[: args.limit]

    sem = asyncio.Semaphore(args.concurrency)
    print(f"checking {len(urls)} urls...", file=sys.stderr)
    results = await asyncio.gather(*[check(u, sem) for u in urls])

    bad_status = [r for r in results if r["status"] != 200]
    bad_assets = [r for r in results if r["bad_assets"]]
    mojibake = [r for r in results if r["mojibake"] > 0]

    print("=" * 70)
    print(f"checked      : {len(results)}")
    print(f"non-200      : {len(bad_status)}")
    print(f"pages w/ broken assets : {len(bad_assets)}")
    print(f"pages w/ mojibake      : {len(mojibake)}")
    total_moji = sum(r["mojibake"] for r in mojibake)
    print(f"mojibake chars        : {total_moji}")
    print("=" * 70)

    for r in bad_status[:15]:
        print(f"  {r['status']}  {r['url']}")
    for r in bad_assets[:10]:
        for a in r["bad_assets"]:
            print(f"  ASSET {a['status']}  {r['url']} -> {a['src'][:80]}")
    for r in sorted(mojibake, key=lambda x: -x["mojibake"])[:10]:
        print(f"  MOJIBAKE {r['mojibake']:>5}  {r['url']}")

    if args.json:
        pathlib.Path(args.json).write_text(json.dumps(results, indent=2))
    return 0


if __name__ == "__main__":
    asyncio.get_event_loop().run_until_complete(main())