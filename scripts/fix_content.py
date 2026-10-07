"""Auto-fix the mechanical defects the technical-content-writer skill prohibits.

Only applies changes that are SAFE and CORRECTNESS-relevant:
  - deprecated Pydantic v1 API  -> v2            (page would crash otherwise)
  - stale LangChain/LlamaIndex import paths      (page teaches a dead API)
  - unclosed code fences                          (page renders broken)
  - standalone filler transitions                 (delete, no meaning loss)

Deliberately does NOT auto-rewrite prose. Marketing words, weak hedges, long
sentences and unsourced metrics are REPORTED with line numbers, because a blind
rewrite produces worse writing than no rewrite. Those need judgement.

Usage:
    python scripts/fix_content.py --dry-run --only ai-engineering-placement
    python scripts/fix_content.py --apply --only ai-engineering-placement
    python scripts/fix_content.py --report --only ai-engineering-placement
"""

from __future__ import annotations

import argparse
import pathlib
import re

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# --- SAFE CODE FIXES ----------------------------------------------------
# Each entry: (pattern, replacement, why)
CODE_FIXES: list[tuple[str, str, str]] = [
    # Pydantic v2: @field_validator needs @classmethod beneath it
    (
        r"@validator\(",
        "@field_validator(",
        "Pydantic v2 renamed @validator -> @field_validator",
    ),
    (
        r"from pydantic import ([^\n]*?)\bvalidator\b",
        r"from pydantic import \1field_validator",
        "Pydantic v2 import: validator -> field_validator",
    ),
    # Pydantic v2: .dict() -> .model_dump()
    (r"\.dict\(\)", ".model_dump()", "Pydantic v2 removed .dict() -> .model_dump()"),
    # LangChain package split (langchain 0.3+)
    (
        r"from langchain\.vectorstores import",
        "from langchain_community.vectorstores import",
        "langchain.vectorstores moved to langchain_community",
    ),
    (
        r"from langchain\.document_loaders import",
        "from langchain_community.document_loaders import",
        "langchain.document_loaders moved to langchain_community",
    ),
    (
        r"from langchain\.text_splitter import",
        "from langchain_text_splitters import",
        "langchain.text_splitter moved to langchain_text_splitters",
    ),
]
# NOTE: the legacy OpenAI SDK migration
#   openai.ChatCompletion.create(prompt=...)  ->  client.chat.completions.create(messages=[...])
# is deliberately NOT auto-applied. The call signature changed as well as
# the namespace, so a regex rewrite yields code that raises TypeError.
# audit_content.py reports it for manual migration instead.

# --- SAFE PROSE FIXES (standalone filler only) --------------------------
FILLER_TRANSITIONS = [
    "Furthermore, ", "Furthermore,",
    "Moreover, ", "Moreover,",
    "Additionally, ", "Additionally,",
    "In conclusion, ", "In conclusion,",
    "It is important to note that ",
    "It should be noted that ",
    "Let's dive in! ", "Let's dive in. ",
    "Let's get started! ", "Let's get started. ",
    "Buckle up! ", "Buckle up. ",
    "In today's rapidly evolving landscape, ",
    "In today's fast-paced world, ",
    "In the ever-evolving digital landscape, ",
]

# --- REPORT ONLY (prose needing judgement) ------------------------------
REPORT_WORDS = {
    "marketing": [
        "powerful", "robust", "seamless", "seamlessly", "cutting-edge",
        "game-changing", "effortless", "blazing fast", "rock-solid",
        "bulletproof", "magical", "delightful", "state-of-the-art",
        "best-in-class", "world-class", "next-generation", "revolutionary",
        "unparalleled", "hassle-free",
    ],
    "weak": ["simply", "obviously", "easily", "effortlessly"],
}


def fix_fences(text: str) -> tuple[str, int]:
    """Close an unterminated trailing code fence."""
    fences = text.count("```")
    if fences % 2 == 0:
        return text, 0
    # only safe when the odd fence is the LAST thing in the file
    stripped = text.rstrip()
    if not stripped.endswith("```"):
        return text, 0
    return stripped + "\n```\n", 1


def split_code(text: str) -> list[tuple[bool, str]]:
    """Split into (is_code_block, chunk) so code fixes never touch prose.

    Prose frequently NAMES a deprecated API in order to explain it
    (e.g. "`.dict()` is replaced by `model_dump()`"). Rewriting those would
    corrupt the documentation, so code rewrites stay inside fenced blocks.
    """
    parts: list[tuple[bool, str]] = []
    in_fence = False
    buf: list[str] = []
    for line in text.splitlines(keepends=True):
        if line.lstrip().startswith("```"):
            if in_fence:
                parts.append((True, "".join(buf)))
                buf = []
                parts.append((False, line))
                in_fence = False
            else:
                parts.append((False, "".join(buf)))
                buf = []
                parts.append((True, line))
                in_fence = True
            continue
        buf.append(line)
    parts.append((in_fence, "".join(buf)))
    return parts


def fix_code(text: str) -> tuple[str, list[str]]:
    """Apply API fixes inside fenced code blocks only."""
    applied: list[str] = []
    out: list[str] = []
    for is_code, chunk in split_code(text):
        if not is_code or chunk.lstrip().startswith("```"):
            out.append(chunk)
            continue
        new = chunk
        notes_here: list[str] = []
        for pattern, repl, why in CODE_FIXES:
            new, n = re.subn(pattern, repl, new)
            if n:
                notes_here.append(f"{why} x{n}")
        applied.extend(notes_here)
        out.append(new)
    return "".join(out), applied


def fix_filler(text: str) -> tuple[str, int]:
    total = 0
    for phrase in FILLER_TRANSITIONS:
        new, n = text.replace(phrase, ""), text.count(phrase)
        if n:
            text = new
            total += n
    # capitalise if the deletion left a sentence starting lower-case
    text = re.sub(r"^([a-z])", r"\1", text, count=0, flags=re.MULTILINE)
    return text, total


def report_line_numbers(text: str) -> dict[str, list[tuple[int, str]]]:
    out: dict[str, list[tuple[int, str]]] = {}
    lines = text.split("\n")
    for category, words in REPORT_WORDS.items():
        hits = []
        for i, line in enumerate(lines, 1):
            if line.lstrip().startswith("```"):
                continue
            low = line.lower()
            for w in words:
                if w in low:
                    hits.append((i, w))
                    break
        if hits:
            out[category] = hits
    return out


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--only", default="", help="subdir of docs/courses, or '' for all")
    ap.add_argument("--apply", action="store_true")
    ap.add_argument("--dry-run", action="store_true")
    ap.add_argument("--report", action="store_true")
    args = ap.parse_args()

    root = DOCS / "courses" / args.only if args.only else DOCS
    files = sorted(root.rglob("*.md"))

    changed_files = 0
    totals: dict[str, int] = {"code": 0, "filler": 0, "fence": 0}
    code_detail: list[str] = []
    report_hits: dict[str, int] = {"marketing": 0, "weak": 0}

    for path in files:
        original = path.read_text(encoding="utf-8", errors="replace")
        text = original

        text, code_notes = fix_code(text)
        totals["code"] += sum(
            int(part.rsplit("x", 1)[1]) for part in code_notes
        ) if code_notes else 0
        code_detail.extend(f"{path.name}: {n}" for n in code_notes)

        text, filler_n = fix_filler(text)
        totals["filler"] += filler_n

        text, fence_n = fix_fences(text)
        totals["fence"] += fence_n

        if args.report:
            rep = report_line_numbers(original)
            for cat, hits in rep.items():
                report_hits[cat] += len(hits)

        if text != original and args.apply:
            path.write_text(text, encoding="utf-8")
            changed_files += 1

    mode = "APPLIED" if args.apply else "DRY RUN (no files written)"
    print("=" * 66)
    print(f"FIX PASS [{mode}] - {len(files)} files")
    print("=" * 66)
    print(f"  deprecated/stale API fixes : {totals['code']} replacements")
    print(f"  filler transitions removed : {totals['filler']}")
    print(f"  unclosed fences closed     : {totals['fence']}")
    print(f"  files modified             : {changed_files if args.apply else 0}")

    if code_detail:
        print("-" * 66)
        print("API FIXES APPLIED (correctness bugs)")
        print("-" * 66)
        for line in code_detail[:40]:
            print(f"  {line}")
        if len(code_detail) > 40:
            print(f"  ... and {len(code_detail) - 40} more")

    if args.report:
        print("-" * 66)
        print("REPORT-ONLY (need judgement, not auto-fixed)")
        print("-" * 66)
        for cat, n in report_hits.items():
            print(f"  {cat:12s} {n:5d} occurrences across the tree")

    if args.apply:
        print("\nCommit with:")
        print("  git add docs/ && git commit -m 'fix: mechanical content defects' && git push")


if __name__ == "__main__":
    main()
