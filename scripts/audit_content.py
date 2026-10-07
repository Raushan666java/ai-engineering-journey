"""Audit all course markdown against the technical-content-writer skill rules.

Read-only. Reports exact counts + worst offenders so fixes can be prioritised.

Usage:
    python scripts/audit_content.py                 # whole tree, summary
    python scripts/audit_content.py --top 40        # worst 40 files
    python scripts/audit_content.py --module 19     # one module
    python scripts/audit_content.py --json out.json # machine-readable
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
from collections import defaultdict

ROOT = pathlib.Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"

# --- Gate 5: banned marketing / filler words ---------------------------
SLOP = {
    "marketing": [
        "powerful", "robust", "seamless", "cutting-edge", "cutting edge",
        "game-changing", "game changing", "effortless", "blazing fast",
        "rock-solid", "bulletproof", "magical", "delightful", "unlock the power",
        "state-of-the-art", "best-in-class", "world-class", "next-generation",
        "revolutionary", "unparalleled", "hassle-free", "seamlessly",
    ],
    "filler": [
        "in today's rapidly evolving", "in today's fast-paced",
        "in the ever-evolving", "let's dive in", "buckle up",
        "furthermore", "moreover", "additionally", "it is important to note that",
        "as we saw earlier", "as mentioned earlier", "get ready", "are you ready",
    ],
    "weak": [
        "simply", "just", "obviously", "easily", "simply put",
    ],
}

# --- Gate 1: unverified claims that must be checked --------------------
CODE_FENCE = re.compile(r"```")

# Pydantic v2 migration errors (the skill's stack-specific gate)
DEPRECATED_API = {
    r"\.dict\(\)": "Pydantic v2 removed .dict(); use .model_dump()",
    r"@validator\b": "Pydantic v2 renamed @validator to @field_validator",
    r"from pydantic import[^#\n]*\bvalidator\b": "Import field_validator, not validator",
}

# Version-drift risks: fast-moving libs where tutorials copy stale APIs
STALE_PATTERNS = {
    r"langchain\.(vectorstores|chain|agents|document_loaders)\b":
        "LangChain moved to langchain_community / langchain_core / langchain_* packages",
    r"from langchain import": "Check current LangChain import paths (langchain_community)",
    r"openai\.ChatCompletion": "Legacy OpenAI API; current is client.chat.completions",
    r"AgentExecutor": "Current LangGraph pattern is StateGraph, not AgentExecutor",
    r"llm_index|VectorstoreIndex": "LlamaIndex is now llama_index package",
}

# --- Gate 3/5: structural problems ------------------------------------
# A heading with NO body: heading line, then only blank lines/comments/details
# before the next heading or EOF. No DOTALL - the capture must stay on one line.
EMPTY_SECTION = re.compile(
    r"^##[ \t]+([^\n]+?)[ \t]*\n"          # the heading itself
    r"(?:[ \t]*\n|[ \t]*<!--[^\n]*-->[ \t]*\n)*"  # blank lines / html comments only
    r"(?=##[ \t]|\Z)",
    re.MULTILINE,
)
TITLE_CASE_H2 = re.compile(r"^##\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)\s*$")
H2 = re.compile(r"^##\s+(.+)$", re.MULTILINE)


def strip_code_blocks(text: str) -> str:
    """Remove fenced code so prose rules don't fire on code."""
    return re.sub(r"```.*?```", "", text, flags=re.DOTALL)


def audit_file(path: pathlib.Path) -> dict:
    raw = path.read_text(encoding="utf-8", errors="replace")
    prose = strip_code_blocks(raw)

    findings: dict[str, list] = defaultdict(list)

    # slop counts
    for category, words in SLOP.items():
        for w in words:
            n = len(re.findall(re.escape(w), prose, re.IGNORECASE))
            if n:
                findings[category].append((w, n))

    # unclosed fence: the DEFECT is an odd marker count, so report parity + the
    # raw count separately (a file with 118 fences is fine, one with 59 is not).
    fences = len(CODE_FENCE.findall(raw))
    if fences % 2 != 0:
        findings["unclosed_fence"].append(
            (f"{fences} fence markers (odd => one unclosed block)", 1)
        )

    # deprecated / stale APIs inside code blocks
    for pattern, note in DEPRECATED_API.items():
        hits = re.findall(pattern, raw)
        if hits:
            findings["deprecated_api"].append((note, len(hits)))
    for pattern, note in STALE_PATTERNS.items():
        hits = re.findall(pattern, raw)
        if hits:
            findings["stale_api"].append((note, len(hits)))

    # empty ## sections
    empties = [m.group(1).strip() for m in EMPTY_SECTION.finditer(raw)]
    if empties:
        findings["empty_section"].append(("sections with no body", len(empties)))

    # Title Case headings (must be sentence case)
    tc = TITLE_CASE_H2.findall(prose)
    if tc:
        findings["title_case_h2"].append(("headings not sentence case", len(tc)))

    # long sentences (target <25 words, hard fail >35)
    long_sentences = 0
    for para in prose.split("\n\n"):
        for sent in re.split(r"(?<=[.!?])\s+", para):
            words = len(sent.split())
            if words > 35:
                long_sentences += 1
    if long_sentences:
        findings["long_sentence"].append(("sentences >35 words", long_sentences))

    # unverifiable-metric risk: percentages near claim verbs
    metrics = re.findall(r"\b\d{1,3}\s?%", prose)
    if metrics:
        findings["metric_claim"].append(("%-signs needing a source", len(metrics)))

    total = sum(v for lst in findings.values() for _, v in lst)
    return {
        "path": str(path.relative_to(ROOT)),
        "module": path.parts[-3] if len(path.parts) >= 3 else "?",
        "lines": raw.count("\n") + 1,
        "total": total,
        "findings": {k: v for k, v in findings.items()},
    }


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--top", type=int, default=25)
    ap.add_argument("--module", type=str, default="")
    ap.add_argument("--json", type=str, default="")
    ap.add_argument("--only", type=str, default="", help="ai-engineering-placement")
    args = ap.parse_args()

    root = DOCS / "courses" / args.only if args.only else DOCS
    files = sorted(root.rglob("*.md"))

    if args.module:
        files = [f for f in files if args.module in f.parts]

    results = [audit_file(f) for f in files]
    total = len(results)
    flagged = [r for r in results if r["total"] > 0]

    # aggregate by category
    agg: dict[str, int] = defaultdict(int)
    for r in flagged:
        for cat, items in r["findings"].items():
            for _, n in items:
                agg[cat] += n

    print("=" * 68)
    print(f"CONTENT AUDIT - {total} files scanned, {len(flagged)} need fixes")
    print("=" * 68)
    for cat, n in sorted(agg.items(), key=lambda x: -x[1]):
        print(f"  {cat:16s} {n:6d}")

    print("-" * 68)
    print(f"WORST {args.top} FILES")
    print("-" * 68)
    for r in sorted(flagged, key=lambda x: -x["total"])[: args.top]:
        cats = ", ".join(f"{k}={sum(n for _, n in v)}" for k, v in r["findings"].items())
        print(f"  {r['total']:4d}  {r['lines']:5d}L  {r['path'][:58]}")
        print(f"        {cats}")

    if args.json:
        pathlib.Path(args.json).write_text(
            json.dumps(results, indent=2), encoding="utf-8"
        )
        print(f"\nwrote {args.json}")


if __name__ == "__main__":
    main()
