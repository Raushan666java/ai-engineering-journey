"""Sample content and detect the generator artifact that matters most:
a chapter title spliced into many sentences.

Run: python scripts/quality_sample.py [--n 14]
"""

from __future__ import annotations

import argparse
import pathlib
import random
import re
from collections import Counter

ROOT = pathlib.Path(__file__).resolve().parent.parent
FENCE = chr(96) * 3
EMPTY_SECTION = re.compile(r"^##[ \t]+[^\n]+\n(?:[ \t]*\n)*(?=##[ \t]|\Z)", re.M)
PHRASE = re.compile(r"\b[A-Z][a-z]{4,}(?:\s+[A-Z][a-z]{4,}){1,5}\b")

# words that legitimately repeat in real technical prose
WHITELIST = {
    "Machine Learning", "Deep Learning", "Large Language", "Vector Database",
    "Retrieval Augmented", "Error Handling", "Model Training", "Data Pipeline",
}


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--n", type=int, default=14)
    ap.add_argument("--seed", type=int, default=11)
    args = ap.parse_args()

    random.seed(args.seed)
    root = ROOT / "docs" / "courses" / "ai-engineering-placement"
    files = [
        f for f in sorted(root.rglob("*.md"))
        if "index.md" not in f.name and "visual-notes" not in f.name
    ]
    sample = random.sample(files, min(args.n, len(files)))

    print("=" * 78)
    print(f"QUALITY SAMPLE - {len(sample)} random chapters")
    print("=" * 78)

    spliced_total = 0
    for f in sample:
        raw = f.read_text(encoding="utf-8", errors="replace")
        counts = Counter(
            p for p in PHRASE.findall(raw)
            if p not in WHITELIST and len(p.split()) >= 3
        )
        empties = len(EMPTY_SECTION.findall(raw))
        fences = raw.count(FENCE)
        fence_state = "ODD!" if fences % 2 else "ok"

        if counts:
            phrase, n = counts.most_common(1)[0]
        else:
            phrase, n = "(none)", 0

        flag = "SPLICED" if n >= 8 else "ok"
        if n >= 8:
            spliced_total += 1

        print(f"\n[{flag}] {f.parent.name}/{f.name}")
        print(f"   lines={raw.count(chr(10)):5d}  empty_sections={empties:3d}  fence={fence_state}")
        print(f"   top repeated phrase: {n}x  {phrase[:72]}")

    print("\n" + "=" * 78)
    print(f"chapters with a spliced title (>=8 repeats): {spliced_total}/{len(sample)}")
    print("=" * 78)


if __name__ == "__main__":
    main()
