import os, glob

docs_root = r"C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
files = glob.glob(os.path.join(docs_root, "**", "*.md"), recursive=True)
print(f"Total files: {len(files)}")
# Check first 5
for f in files[:5]:
    print(f"  {f}")
    print(f"    exists: {os.path.exists(f)}")
# Check a specific file
target = os.path.join(docs_root, "01-python", "03-strings-and-formatting.md")
print(f"\nTarget: {target}")
print(f"  exists: {os.path.exists(target)}")
# Check if parent_dir extraction works
parent_dir = os.path.basename(os.path.dirname(target))
print(f"  parent_dir: {parent_dir}")
