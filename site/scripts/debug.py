import os

docs_root = r"C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
md_file = os.path.join(docs_root, "01-python", "02-control-flow.md")
url = "03-strings-and-formatting"

resolved = os.path.join(os.path.dirname(md_file), url)
print(f"resolved: {resolved}")
print(f"exists: {os.path.exists(resolved)}")
print(f"exists.md: {os.path.exists(resolved + '.md')}")
print(f"dirname: {os.path.dirname(md_file)}")
