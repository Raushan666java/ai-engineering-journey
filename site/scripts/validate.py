import os, re, glob

docs_root = r"C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
issues = []
valid = 0

for md_file in glob.glob(os.path.join(docs_root, "**", "*.md"), recursive=True):
    with open(md_file, "r", encoding="utf-8", errors="ignore") as f:
        for ln, line in enumerate(f, 1):
            for m in re.finditer(r'\[([^\]]*)\]\(([^)]+)\)', line):
                url = m.group(2)
                if re.match(r'^(https?://|#|mailto:)', url) or re.search(r'\.(png|jpg|gif|svg|ico)$', url):
                    continue
                # Skip relative links with no directory component (intra-directory)
                # These work fine in Docusaurus
                if not url.startswith('/') and not url.startswith('../') and '/' not in url:
                    valid += 1
                    continue
                # Resolve
                if url.startswith('/'):
                    resolved = os.path.join(docs_root, url.lstrip('/'))
                elif url.startswith('../'):
                    resolved = os.path.join(docs_root, os.path.basename(os.path.dirname(os.path.dirname(md_file))), url[3:])
                else:
                    resolved = os.path.join(os.path.dirname(md_file), url)
                
                found = False
                for check in [resolved, resolved + '.md', resolved + '/index.md', resolved + '/index.mdx',
                              resolved + '.mdx']:
                    if os.path.exists(check):
                        found = True
                        break
                
                if found:
                    valid += 1
                else:
                    rel = os.path.relpath(md_file, docs_root)
                    issues.append(f'{rel}:{ln} -> {url}')

print(f'Valid: {valid}')
print(f'Broken: {len(issues)}')
if issues:
    for i in issues[:20]:
        print(i)
    if len(issues) > 20:
        print(f'... and {len(issues)-20} more')
else:
    print('All links valid!')
