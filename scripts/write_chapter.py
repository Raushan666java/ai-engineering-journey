#!/usr/bin/env python3
"""Helper to write chapter markdown files with proper escaping."""
import os, sys

def write_file(filepath, content):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    lines = content.splitlines()
    print(f"Written: {filepath} ({len(lines)} lines)")

if __name__ == "__main__":
    filepath = sys.argv[1]
    content = sys.stdin.read()
    write_file(filepath, content)
