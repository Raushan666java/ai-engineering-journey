#!/usr/bin/env python3
"""
Bulk-improve all ai-engineering-placement tutorials using Anthropic Claude.
Supports: Direct Anthropic API  OR  Amazon Bedrock (free tier eligible).

Usage:
  # Direct Anthropic API:
  set ANTHROPIC_API_KEY=sk-ant-...
  python scripts/improve_tutorials.py

  # Amazon Bedrock (free / no Anthropic key needed):
  set USE_BEDROCK=1
  set AWS_ACCESS_KEY_ID=...
  set AWS_SECRET_ACCESS_KEY=...
  set AWS_DEFAULT_REGION=us-east-1
  python scripts/improve_tutorials.py

Options (env vars):
  WORKERS=5          parallel workers (default 5)
  DRY_RUN=1          print filenames only, no API calls
  MODULE_FILTER=11   only process modules matching this prefix
  SKIP_EXISTING=1    skip files already improved (checks for <!-- improved --> tag)
"""

import os, sys, time, json, glob, threading, concurrent.futures
from pathlib import Path
from datetime import datetime

# ── Config ────────────────────────────────────────────────────────────────────
BASE_DIR   = Path(__file__).parent.parent
COURSE_DIR = BASE_DIR / "docs" / "courses" / "ai-engineering-placement"
LOG_FILE   = BASE_DIR / "scripts" / "improve_tutorials.log"
WORKERS    = int(os.environ.get("WORKERS", 5))
DRY_RUN    = os.environ.get("DRY_RUN", "0").strip() in ("1", "true", "yes")
USE_BEDROCK= os.environ.get("USE_BEDROCK", "0") == "1"
MODULE_FILTER = os.environ.get("MODULE_FILTER", "")
SKIP_EXISTING = os.environ.get("SKIP_EXISTING", "0") == "1"

# Bedrock model ID for Claude
BEDROCK_MODEL = "anthropic.claude-3-5-sonnet-20241022-v2:0"
ANTHROPIC_MODEL = "claude-3-5-sonnet-20241022"

# ── Improvement prompt ────────────────────────────────────────────────────────
SYSTEM_PROMPT = """You are a world-class AI engineering educator writing premium placement tutorials.
Your job: rewrite/improve the given markdown tutorial chapter to be:
1. CLEAR — every sentence under 50 words, no fluff
2. PREMIUM — deep technical accuracy, production-grade code examples
3. COMPLETE — Learning Objectives, Theory, Python+TypeScript examples, Mermaid diagrams, 
   Interview Q&A (10 Qs), Chapter Quiz (5 MCQs with answers), Exercises (Easy/Medium/Hard),
   Summary table, Common Mistakes, Practical Takeaways
4. PLACEMENT-READY — FAANG-style interview questions with model answers
5. CODE QUALITY — all code must be runnable, typed, with error handling

Rules:
- Keep the same filename/topic — do NOT change the subject
- Preserve existing good content, only improve weak sections
- Add <!-- improved --> as the very first line
- Return ONLY the improved markdown, no commentary
"""

def make_user_prompt(content: str, filepath: str) -> str:
    topic = Path(filepath).stem.replace("-", " ").title()
    return f"""Improve this tutorial chapter: **{topic}**
File: {filepath}

Current content:
---
{content[:12000]}
---

Return the fully improved markdown chapter."""

# ── Anthropic direct client ───────────────────────────────────────────────────
def call_anthropic(content: str, filepath: str) -> str:
    import anthropic
    client = anthropic.Anthropic(api_key=os.environ["ANTHROPIC_API_KEY"])
    msg = client.messages.create(
        model=ANTHROPIC_MODEL,
        max_tokens=8192,
        system=SYSTEM_PROMPT,
        messages=[{"role": "user", "content": make_user_prompt(content, filepath)}]
    )
    return msg.content[0].text

# ── Amazon Bedrock client ─────────────────────────────────────────────────────
def call_bedrock(content: str, filepath: str) -> str:
    import boto3, json
    client = boto3.client("bedrock-runtime", region_name=os.environ.get("AWS_DEFAULT_REGION", "us-east-1"))
    body = json.dumps({
        "anthropic_version": "bedrock-2023-05-31",
        "max_tokens": 8192,
        "system": SYSTEM_PROMPT,
        "messages": [{"role": "user", "content": make_user_prompt(content, filepath)}]
    })
    response = client.invoke_model(modelId=BEDROCK_MODEL, body=body)
    result = json.loads(response["body"].read())
    return result["content"][0]["text"]

# ── Core improve function ─────────────────────────────────────────────────────
lock = threading.Lock()
stats = {"done": 0, "skipped": 0, "errors": 0, "total": 0}

def improve_file(md_path: Path) -> dict:
    rel = md_path.relative_to(BASE_DIR)
    result = {"file": str(rel), "status": "ok", "error": None}

    try:
        content = md_path.read_text(encoding="utf-8")

        # Skip already improved
        if SKIP_EXISTING and content.startswith("<!-- improved -->"):
            with lock:
                stats["skipped"] += 1
            result["status"] = "skipped"
            return result

        # Skip index/visual files
        if md_path.name in ("index.md", "visual-notes.md", "PLAN.md"):
            result["status"] = "skipped"
            return result

        if DRY_RUN:
            print(f"  [DRY] {rel}")
            result["status"] = "dry"
            return result

        # Call AI
        if USE_BEDROCK:
            improved = call_bedrock(content, str(rel))
        else:
            improved = call_anthropic(content, str(rel))

        # Ensure marker
        if not improved.startswith("<!-- improved -->"):
            improved = "<!-- improved -->\n" + improved

        md_path.write_text(improved, encoding="utf-8")

        with lock:
            stats["done"] += 1
            print(f"  ✅ [{stats['done']}/{stats['total']}] {rel}")

        result["status"] = "ok"

    except Exception as e:
        with lock:
            stats["errors"] += 1
            print(f"  ❌ {rel}: {e}")
        result["status"] = "error"
        result["error"] = str(e)

    return result

# ── Collect all .md files ─────────────────────────────────────────────────────
def collect_files() -> list[Path]:
    pattern = str(COURSE_DIR / "**" / "*.md")
    files = sorted(Path(f) for f in glob.glob(pattern, recursive=True))
    # Exclude index/visual/plan
    files = [f for f in files if f.name not in ("index.md", "visual-notes.md", "PLAN.md")]
    # Module filter
    if MODULE_FILTER:
        files = [f for f in files if MODULE_FILTER in f.parts[-2]]
    return files

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    print("=" * 60)
    print("  AI Engineering Placement — Bulk Tutorial Improver")
    print(f"  Mode   : {'Amazon Bedrock' if USE_BEDROCK else 'Anthropic API'}")
    print(f"  Workers: {WORKERS}  |  Dry run: {DRY_RUN}")
    print("=" * 60)

    # Validate credentials
    if DRY_RUN:
        print("  [DRY RUN MODE — no API calls]\n")
    elif USE_BEDROCK:
        if not os.environ.get("AWS_ACCESS_KEY_ID"):
            print("ERROR: Set AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_DEFAULT_REGION")
            sys.exit(1)
        try:
            import boto3
        except ImportError:
            print("ERROR: pip install boto3")
            sys.exit(1)
    else:
        if not os.environ.get("ANTHROPIC_API_KEY"):
            print("ERROR: Set ANTHROPIC_API_KEY=sk-ant-...")
            sys.exit(1)
        try:
            import anthropic
        except ImportError:
            print("ERROR: pip install anthropic")
            sys.exit(1)

    files = collect_files()
    stats["total"] = len(files)
    print(f"\n  Found {len(files)} tutorial files to process\n")

    if not files:
        print("No files found. Check COURSE_DIR path.")
        return

    results = []
    start = time.time()

    with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as executor:
        futures = {executor.submit(improve_file, f): f for f in files}
        for future in concurrent.futures.as_completed(futures):
            results.append(future.result())

    elapsed = time.time() - start

    # Save log
    log_data = {
        "timestamp": datetime.now().isoformat(),
        "mode": "bedrock" if USE_BEDROCK else "anthropic",
        "stats": stats,
        "elapsed_seconds": round(elapsed, 1),
        "results": results
    }
    LOG_FILE.write_text(json.dumps(log_data, indent=2), encoding="utf-8")

    print("\n" + "=" * 60)
    print(f"  ✅ Done: {stats['done']}  ⏭ Skipped: {stats['skipped']}  ❌ Errors: {stats['errors']}")
    print(f"  ⏱  Time: {elapsed:.1f}s  |  Log: scripts/improve_tutorials.log")
    print("=" * 60)

if __name__ == "__main__":
    main()
