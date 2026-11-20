import os, re, glob

docs_root = r"C:\xampp\htdocs\ai-engineering-journey\site\docs\placement"
total_fixed = 0

for md_file in glob.glob(os.path.join(docs_root, "**", "*.md"), recursive=True):
    parent_dir = os.path.basename(os.path.dirname(md_file))
    
    with open(md_file, "r", encoding="utf-8", errors="ignore") as f:
        content = f.read()
    
    original = content
    
    # Fix [text](XX-filename.md) -> [text](parentDir/XX-filename)
    def fix_link(m):
        chapter = m.group(1).replace('.md', '')
        return '](' + parent_dir + '/' + chapter + ')'
    
    content = re.sub(r'\]\((\d+-[a-z][^)]*\.md)\)', fix_link, content)
    
    # Fix standalone (XX-filename.md) in navigation lines
    def fix_standalone(m):
        chapter = m.group(1).replace('.md', '')
        return '(' + parent_dir + '/' + chapter + ')'
    
    # Only fix lines that look like navigation (start with - or > or **)
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if re.search(r'\(\d+-[a-z][^)]*\.md\)', line) and '](' not in line:
            line = re.sub(r'\((\d+-[a-z][^)]*\.md)\)', fix_standalone, line)
        new_lines.append(line)
    content = '\n'.join(new_lines)
    
    if content != original:
        with open(md_file, "w", encoding="utf-8", newline="") as f:
            f.write(content)
        total_fixed += 1

print(f"Fixed relative links in {total_fixed} files")
