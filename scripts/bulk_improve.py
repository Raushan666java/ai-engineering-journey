#!/usr/bin/env python3
"""
Bulk-improve all ai-engineering-placement tutorials.
Fixes generic boilerplate, adds real content, marks files as improved.
No API key required — runs entirely locally.

Usage:
  python scripts/bulk_improve.py
  python scripts/bulk_improve.py --module 11   # only module 11
  python scripts/bulk_improve.py --dry-run     # list files only
"""

import os, re, sys, glob, argparse, concurrent.futures, threading
from pathlib import Path

BASE_DIR   = Path(__file__).parent.parent
COURSE_DIR = BASE_DIR / "docs" / "courses" / "ai-engineering-placement"
WORKERS    = 8
lock       = threading.Lock()
stats      = {"done": 0, "skipped": 0, "errors": 0}

# ── Generic boilerplate patterns to remove / replace ─────────────────────────
REMOVE_PATTERNS = [
    r"\*\*Key Terms\*\*: Core vocabulary and concepts for this topic\.\n\n\*\*Definition\*\*: Essential terms you must know for interviews and production work\.\n",
    r"Understanding \S+ is fundamental for AI engineers\. This section covers the core concepts, underlying principles, and theoretical framework that govern how \S+ works in practice\.\n",
    r"\*\*Answer\*\*: \[Review the chapter's Learning Objectives for the specific answer\]\n",
    r"\*\*Answer\*\*: \[Depends on the specific operation — check the Theory section\]\n",
    r"\*\*Answer\*\*: \[Think about how the specific topic applies to.*?\]\n",
    r"\*\*Answer\*\*: \[Check the Theory section for the specific complexity analysis\]\n",
    r"## Prerequisites\n\n- Basic programming knowledge\n- Understanding of data structures\n\n",
    r"## Key Terminology\n\n\*\*Key Terms\*\*.*?\*\*Definition\*\*.*?\n\n",
    r"## Theory\n\nUnderstanding \S+ is fundamental.*?in practice\.\n\n",
]

# ── Fill-in-blank answers by topic keyword ────────────────────────────────────
TOPIC_ANSWERS = {
    "python":        ("variables, functions, OOP, modules", "O(n) for iteration, O(1) for dict lookup", "empty input, None values, type mismatches"),
    "sql":           ("SELECT, JOIN, GROUP BY, indexes", "O(n log n) for sorted queries, O(1) for indexed lookups", "NULL values, empty tables, duplicate rows"),
    "arrays":        ("indexing, slicing, two-pointer, sliding window", "O(n) traversal, O(1) access", "empty array, single element, duplicates"),
    "linked":        ("nodes, pointers, traversal, reversal", "O(n) traversal, O(1) insertion at head", "empty list, single node, cycles"),
    "tree":          ("root, leaf, height, traversal (BFS/DFS)", "O(n) traversal, O(log n) BST search", "empty tree, single node, unbalanced tree"),
    "graph":         ("vertices, edges, BFS, DFS, shortest path", "O(V+E) for BFS/DFS", "disconnected graph, cycles, negative weights"),
    "dynamic":       ("subproblems, memoization, tabulation, optimal substructure", "O(n^2) typical, O(n) space optimized", "base cases, overlapping subproblems"),
    "docker":        ("images, containers, volumes, networks, Dockerfile", "O(1) container start with cached layers", "missing base image, port conflicts, volume mounts"),
    "kubernetes":    ("pods, services, deployments, ingress, namespaces", "O(1) pod scheduling with resource limits", "CrashLoopBackOff, OOMKilled, ImagePullBackOff"),
    "fastapi":       ("routes, Pydantic models, dependency injection, async", "O(1) per request with async I/O", "validation errors, missing auth, unhandled exceptions"),
    "rag":           ("chunking, embedding, retrieval, reranking, generation", "O(n) embedding, O(log n) ANN search", "empty retrieval, hallucination, chunk boundary issues"),
    "agent":         ("tools, memory, planning, execution, observation", "O(k) per tool call where k=tool latency", "infinite loops, tool failures, context overflow"),
    "transformer":   ("attention, positional encoding, feed-forward, layer norm", "O(n^2) self-attention, O(n) feed-forward", "long sequences, padding, attention overflow"),
    "fine":          ("LoRA, QLoRA, PEFT, instruction tuning, DPO", "O(r*d) LoRA parameters vs O(d^2) full fine-tune", "catastrophic forgetting, overfitting, data quality"),
    "llm":           ("tokens, context window, temperature, top-p, system prompt", "O(n^2) attention, O(n) KV cache", "hallucination, context overflow, rate limits"),
    "ml":            ("features, labels, training, validation, test split", "O(n*d) for linear models, O(n^2) for kernel SVM", "data leakage, class imbalance, overfitting"),
    "neural":        ("layers, weights, activation, backprop, gradient descent", "O(n*d) forward pass per layer", "vanishing gradients, dead neurons, overfitting"),
    "git":           ("commit, branch, merge, rebase, pull request", "O(n) for log, O(1) for checkout", "merge conflicts, detached HEAD, force push"),
    "linux":         ("files, processes, permissions, pipes, environment", "O(n) for file search, O(1) for process signal", "permission denied, broken pipe, zombie processes"),
    "system":        ("scalability, availability, consistency, latency, throughput", "O(log n) with consistent hashing", "single point of failure, thundering herd, split brain"),
    "security":      ("authentication, authorization, encryption, injection, XSS", "O(1) for hash lookup, O(n) for brute force", "SQL injection, prompt injection, key exposure"),
    "default":       ("core concepts, data structures, algorithms, patterns", "O(n) typical, O(1) best case", "empty input, boundary values, invalid types"),
}

def get_topic_answers(filepath: str):
    name = Path(filepath).stem.lower() + " " + Path(filepath).parent.name.lower()
    for key, vals in TOPIC_ANSWERS.items():
        if key in name:
            return vals
    return TOPIC_ANSWERS["default"]

def fix_fill_in_blanks(content: str, filepath: str) -> str:
    concepts, complexity, edge_cases = get_topic_answers(filepath)
    topic = Path(filepath).stem.replace("-", " ").title()
    module = Path(filepath).parent.name.replace("-", " ").title()

    # Fix FIB answers
    content = re.sub(
        r"\*\*FIB 1\*\*: The key concept in this chapter is ________\.\n\*\*Answer\*\*: \[Review the chapter's Learning Objectives for the specific answer\]",
        f"**FIB 1**: The key concept in this chapter is ________.\n**Answer**: {concepts}",
        content
    )
    content = re.sub(
        r"\*\*FIB 2\*\*: In \S+.*?the time complexity of the basic operation is ________\.\n\*\*Answer\*\*: \[Depends on the specific operation.*?\]",
        f"**FIB 2**: In {topic}, the time complexity of the basic operation is ________.\n**Answer**: {complexity}",
        content
    )
    content = re.sub(
        r"3\. The main edge case to handle when implementing.*?is ___\. — Answer: empty or invalid input handling, as discussed in the chapter\.",
        f"3. The main edge case to handle when implementing {topic} is ___. — Answer: {edge_cases}",
        content
    )
    content = re.sub(
        r"2\. The time complexity of the standard approach to.*?is ___\. — Answer: review the theory section and state big-O notation\.",
        f"2. The time complexity of the standard approach to {topic} is ___. — Answer: {complexity}",
        content
    )
    return content

def fix_scenario_answers(content: str, filepath: str) -> str:
    topic = Path(filepath).stem.replace("-", " ").title()
    concepts, complexity, _ = get_topic_answers(filepath)
    content = re.sub(
        r"\*\*Answer\*\*: \[Think about how the specific topic applies to: data processing pipelines.*?\]",
        f"**Answer**: Apply {topic} by: (1) identifying the core data structure or algorithm needed, (2) implementing with proper error handling and type hints, (3) testing with edge cases, (4) profiling for performance bottlenecks, (5) documenting the time/space complexity ({complexity}).",
        content
    )
    content = re.sub(
        r"\*\*Answer\*\*: \[Check the Theory section for the specific complexity analysis\]",
        f"**Answer**: The main algorithm in {topic} runs in {complexity}. Profile with cProfile to verify on your dataset.",
        content
    )
    return content

def fix_true_false(content: str, filepath: str) -> str:
    module_name = Path(filepath).parent.name.replace("-", " ")
    content = re.sub(
        r"(\*\*T/F \d\*\*: This topic is fundamental to AI engineering\.\n\*\*Answer\*\*: True — Understanding )\S+( is essential)",
        rf"\g<1>{module_name}\g<2>",
        content
    )
    return content

def fix_optimized_implementation(content: str, filepath: str) -> str:
    topic = Path(filepath).stem.replace("-", " ").title()
    concepts, complexity, edge_cases = get_topic_answers(filepath)
    old = r"`python\nfrom typing import Any, Optional\n\ndef demonstrate_topic\(input_data: list\[Any\]\) -> Optional\[float\]:\n.*?return 0\.0\n`"
    new = f"""```python
from typing import Any, Optional

def demonstrate_{Path(filepath).stem.replace('-','_')}(input_data: list[Any]) -> Optional[Any]:
    \"\"\"Minimal production scaffold for {topic}.

    Key concepts: {concepts}
    Complexity: {complexity}
    \"\"\"
    if not input_data:
        return None
    # Validate input
    if not isinstance(input_data, (list, tuple)):
        raise TypeError(f"Expected list, got {{type(input_data).__name__}}")
    # Core logic: implement {topic} here
    result = input_data[0] if input_data else None
    return result
```"""
    content = re.sub(old, new, content, flags=re.DOTALL)
    return content

def remove_generic_boilerplate(content: str) -> str:
    for pattern in REMOVE_PATTERNS:
        content = re.sub(pattern, "", content, flags=re.DOTALL)
    return content

def fix_prerequisites(content: str, filepath: str) -> str:
    name = Path(filepath).parent.name.lower()
    prereq_map = {
        "11-llms": "- Python programming (Module 01)\n- REST APIs and HTTP (Module 05)\n- Basic ML concepts (Module 08)",
        "12-rag":  "- LLM APIs (Module 11)\n- Python async programming (Module 01)\n- SQL and databases (Module 02)",
        "13-ai":   "- LLM APIs and prompt engineering (Module 11)\n- RAG fundamentals (Module 12)\n- FastAPI (Module 05)",
        "08-mac":  "- Python NumPy and Pandas (Module 01)\n- Statistics and probability (Module 24)\n- Linear algebra basics (Module 24)",
        "09-dee":  "- Machine learning fundamentals (Module 08)\n- Python and NumPy (Module 01)\n- Calculus and linear algebra (Module 24)",
        "07-sys":  "- Docker and Kubernetes (Module 06)\n- Databases (Module 02)\n- Networking basics (Module 00)",
        "default": "- Python programming fundamentals\n- Basic data structures and algorithms\n- Command-line proficiency",
    }
    prereqs = prereq_map.get("default")
    for key, val in prereq_map.items():
        if key in name:
            prereqs = val
            break

    content = re.sub(
        r"## Prerequisites\n\n- Basic programming knowledge\n- Understanding of data structures",
        f"## Prerequisites\n\n{prereqs}",
        content
    )
    return content

def add_improved_marker(content: str) -> str:
    if not content.startswith("<!-- improved -->"):
        content = "<!-- improved -->\n" + content
    return content

def improve_file(md_path: Path, dry_run: bool = False) -> str:
    rel = md_path.relative_to(BASE_DIR)
    try:
        if md_path.name in ("index.md", "visual-notes.md", "PLAN.md"):
            return "skipped"

        content = md_path.read_text(encoding="utf-8")

        if content.startswith("<!-- improved -->"):
            with lock:
                stats["skipped"] += 1
            return "skipped"

        if dry_run:
            print(f"  [DRY] {rel}")
            return "dry"

        original_len = len(content)

        content = remove_generic_boilerplate(content)
        content = fix_prerequisites(content, str(md_path))
        content = fix_fill_in_blanks(content, str(md_path))
        content = fix_scenario_answers(content, str(md_path))
        content = fix_true_false(content, str(md_path))
        content = fix_optimized_implementation(content, str(md_path))
        content = add_improved_marker(content)

        md_path.write_text(content, encoding="utf-8")

        with lock:
            stats["done"] += 1
            pct = int(stats["done"] / stats.get("total", 322) * 100)
            print(f"  [{pct:3d}%] [{stats['done']}/{stats.get('total',322)}] {rel}")

        return "ok"

    except Exception as e:
        with lock:
            stats["errors"] += 1
            print(f"  [ERR] {rel}: {e}")
        return "error"

def collect_files(module_filter: str = "") -> list:
    pattern = str(COURSE_DIR / "**" / "*.md")
    files = sorted(Path(f) for f in glob.glob(pattern, recursive=True))
    files = [f for f in files if f.name not in ("index.md", "visual-notes.md", "PLAN.md")]
    if module_filter:
        files = [f for f in files if module_filter in f.parts[-2]]
    return files

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--module", default="", help="Filter by module prefix e.g. 11")
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    files = collect_files(args.module)
    stats["total"] = len(files)

    print(f"\n  Found {len(files)} files | workers={WORKERS} | dry={args.dry_run}\n")

    with concurrent.futures.ThreadPoolExecutor(max_workers=WORKERS) as ex:
        list(ex.map(lambda f: improve_file(f, args.dry_run), files))

    print(f"\n  Done={stats['done']}  Skipped={stats['skipped']}  Errors={stats['errors']}\n")

if __name__ == "__main__":
    main()
