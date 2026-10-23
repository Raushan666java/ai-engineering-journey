"""Check every internal link on the site homepage.

Renders the page in headless Edge, pulls out `<a href>`, and requests each
one. A link that 404s is reported with the link text and the page it came
from, so it can be traced back to source markup.
"""
import concurrent.futures
import pathlib
import re
import subprocess
import sys
import urllib.error
import urllib.request

EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
BASE = "https://raushan666java.github.io"
PATH = "/ai-engineering-journey/"
OUT = pathlib.Path(r"C:\Users\hiii\AppData\Local\Temp\opencode\shots\home.dom.html")

HEADERS = {"User-Agent": "Mozilla/5.0 (link-audit)"}


def dump() -> str:
    OUT.parent.mkdir(parents=True, exist_ok=True)
    with open(OUT, "wb") as fh:
        subprocess.run(
            [EDGE, "--headless=new", "--disable-gpu", "--virtual-time-budget=30000",
             "--dump-dom", BASE + PATH],
            stdout=fh, stderr=subprocess.DEVNULL, timeout=180,
        )
    return OUT.read_text(encoding="utf-8", errors="replace")


def status(url: str) -> tuple[str, int]:
    for method in ("HEAD", "GET"):
        req = urllib.request.Request(url, method=method, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=30) as r:
                return url, r.status
        except urllib.error.HTTPError as e:
            if e.code == 405 and method == "HEAD":
                continue  # HEAD not allowed, retry as GET
            return url, e.code
        except Exception as exc:  # noqa: BLE001
            return url, -1
    return url, -1


def main() -> int:
    html = dump()
    anchors = re.findall(r'<a\b[^>]*href="([^"]+)"[^>]*>(.*?)</a>', html, re.S)
    seen: dict[str, str] = {}
    for href, text in anchors:
        label = re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", text)).strip()
        if href.startswith("#") or href.startswith("mailto:") or href.startswith("https://github.com"):
            continue
        if href.startswith(BASE):
            url = href
        elif href.startswith("/"):
            url = BASE + href
        elif href.startswith("http"):
            continue
        else:
            url = BASE + PATH + href
        seen.setdefault(url, label)

    print(f"internal links on homepage: {len(seen)}")
    results = []
    with concurrent.futures.ThreadPoolExecutor(max_workers=8) as pool:
        results = list(pool.map(status, seen))

    broken = [(u, c, seen[u]) for u, c in results if c != 200]
    print(f"broken: {len(broken)}")
    for url, code, label in sorted(broken):
        print(f"  {code!s:>4}  {label[:52]:54} {url}")
    return 1 if broken else 0


if __name__ == "__main__":
    sys.exit(main())
