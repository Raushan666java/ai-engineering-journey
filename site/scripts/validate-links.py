import os, re, glob

docs_root = r"C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
issues = []
valid_count = 0

for md_file in glob.glob(os.path.join(docs_root, "**", "*.md"), recursive=True):
    parent_dir = os.path.basename(os.path.dirname(md_file))
    
    with open(md_file, "r", encoding="utf-8", errors="ignore") as f:
        for line_num, line in enumerate(f, 1):
            for m in re.finditer(r'\[([^\]]*)\]\(([^)]+)\)', line):
                url = m.group(2)
                # Skip external, anchors, images
                if re.match(r'^https?://', url) or url.startswith('#') or url.startswith('mailto:') or re.search(r'\.(png|jpg|gif|svg|ico)$', url):
                    continue
                
                # Resolve path
                if url.startswith('/'):
                    resolved = os.path.join(docs_root, url.lstrip('/'))
                elif url.startswith('../'):
                    resolved = os.path.join(docs_root, os.path.basename(os.path.dirname(os.path.dirname(md_file))), url[3:])
                else:
                    resolved = os.path.join(os.path.dirname(md_file), url)
                
                # Check existence
                exists = False
                for ext in ['', '.md', '/index.md', '/index.mdx']:
                    check = resolved + ext if ext else resolved
                    if os.path.exists(check):
                        exists = True
                        break
                # Also check without .md extension if it was included
                if not exists and resolved.endswith('.md'):
                    base = resolved[:-3]
                    for ext in ['', '/index.md', '/index.mdx']:
                        if os.path.exists(base + ext):
                            exists = True
                            break
                
                if exists:
                    valid_count += 1
                else:
                    rel = os.path.relpath(md_file, docs_root)
                    issues.append(f"{rel}:{line_num} -> {url}")

print(f"Valid links: {valid_count}")
print(f"Broken links: {len(issues)}")
if issues:
    print("\n--- Broken Links ---")
    for i in issues[:30]:
        print(i)
    if len(issues) > 30:
        print(f"... and {len(issues) - 30} more")
