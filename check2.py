import os
DIR = r"C:\xampp\htdocs\ai-engineering-journey\docs\courses\c-programming"

# Check 01
path = os.path.join(DIR, "01-introduction.md")
with open(path, "r", encoding="utf-8") as f:
    c = f.read()
for s in ["Chapter at a Glance", "```mermaid"]:
    cnt = c.count(s)
    print(f"01: {s} appears {cnt} time(s)")

# Check 03 for duplicates
path = os.path.join(DIR, "03-operators.md")
with open(path, "r", encoding="utf-8") as f:
    c = f.read()
for s in ["## Concept Comparison Table", "## Quick Reference", "## Cross-Application Matrix", "## Chapter Quiz", "### Chapter at a Glance", "```mermaid"]:
    cnt = c.count(s)
    label = " (DUPLICATE!)" if cnt > 1 else ""
    print(f"03: {s} appears {cnt} time(s){label}")
