"""Render sample pages in headless Edge and check each Mermaid diagram really
rendered as SVG (no error fallback).

A Docusaurus page that fails to parse a Mermaid block shows an
`errorBoundaryFallback` element with the parser message instead of an <svg>.
Counting those, and counting rendered mermaid containers, is a far stronger
signal than an HTTP status code.
"""
import json
import pathlib
import re
import subprocess
import sys

EDGE = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
BASE = "https://raushan666java.github.io/ai-engineering-journey"
ROOT = pathlib.Path(r"C:\xampp\htdocs\ai-engineering-journey\site\docs")
OUT = pathlib.Path(r"C:\Users\hiii\AppData\Local\Temp\opencode\shots")
OUT.mkdir(parents=True, exist_ok=True)


def slug_for(path: str) -> str:
    t = pathlib.Path(path).read_text(encoding="utf-8", errors="replace")
    m = re.search(r"^slug:\s*(\S+)", t, re.M)
    if m:
        return m.group(1)
    rel = pathlib.Path(path).relative_to(ROOT).with_suffix("")
    parts = list(rel.parts)
    if parts[-1] == "index":
        parts = parts[:-1]
    return "/" + "/".join(parts)


def dump(url: str, name: str) -> str:
    p = OUT / f"sweep-{name}.dom.html"
    with open(p, "wb") as fh:
        subprocess.run(
            [EDGE, "--headless=new", "--disable-gpu", "--virtual-time-budget=30000",
             "--dump-dom", url],
            stdout=fh, stderr=subprocess.DEVNULL, timeout=180,
        )
    return p.read_text(encoding="utf-8", errors="replace")


def main() -> int:
    arg = sys.argv[1]
    if pathlib.Path(arg).is_file():
        payload = json.loads(pathlib.Path(arg).read_text(encoding="utf-8"))
    else:
        payload = json.loads(arg)
    rows = []
    for label, rel in payload:
        url = BASE + slug_for(rel)
        try:
            t = dump(url, label)
        except Exception as exc:  # noqa: BLE001
            rows.append((label, url, "ERROR", str(exc)[:50], 0, 0))
            continue
        errs = len(re.findall(r"errorBoundaryFallback", t))
        # mermaid svg containers carry the docusaurus-mermaid class
        svgs = len(re.findall(r"<svg[^>]*id=\"mermaid", t))
        svgs += len(re.findall(r"aria-roledescription=\"(?:flowchart|sequence|class|state|er|mindmap|pie|timeline|gantt|xychart|quadrant|block)", t))
        rows.append((label, url, "ok", "", errs, svgs))
    print(f"{'type':16} {'errors':>6} {'svg':>5}  page")
    bad = 0
    for label, url, status, note, errs, svgs in rows:
        flag = "FAIL" if (status != "ok" or errs) else "OK  "
        if flag == "FAIL":
            bad += 1
        print(f"{flag} {label:16} {errs:>6} {svgs:>5}  {url}{(' ' + note) if note else ''}")
    print(f"\npages checked: {len(rows)}  failing: {bad}")
    return 1 if bad else 0


if __name__ == "__main__":
    sys.exit(main())
