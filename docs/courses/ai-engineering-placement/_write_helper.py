import sys, os

def write_file(filepath, content):
    os.makedirs(os.path.dirname(filepath), exist_ok=True)
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = len(f.readlines())
    print(f"Written: {filepath} ({lines} lines)")

if __name__ == '__main__':
    filepath = sys.argv[1]
    content = sys.stdin.read()
    write_file(filepath, content)
