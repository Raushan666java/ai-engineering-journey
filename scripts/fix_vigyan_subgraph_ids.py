"""Replace non-ASCII Mermaid subgraph identifiers with ASCII ids.

Mermaid's lexer rejects non-ASCII subgraph ids, so `subgraph ओशो_भाव[भाव साक्षी]`
fails to parse. The ids are also used as edge endpoints elsewhere in the diagram,
so those references are rewritten too. Label text (inside [], {}, (), "" and
edge labels between pipes) is never touched.
"""
import pathlib
import re
import sys

MDFILES = sorted(pathlib.Path("docs/courses/vigyan-bhairav-tantra").glob("*.md"))
SUB = re.compile(r"^(\s*)subgraph\s+(.+?)\[(.*)\]\s*$")
IDENT = re.compile(r"[\w\u0900-\u097F]")


def protected_mask(line: str) -> list[bool]:
    """Mark characters that sit inside a label and must not be rewritten."""
    mask = [False] * len(line)
    stack = []
    i = 0
    while i < len(line):
        c = line[i]
        if c == '"':
            j = line.find('"', i + 1)
            if j == -1:
                j = len(line) - 1
            for k in range(i, j + 1):
                mask[k] = True
            i = j + 1
            continue
        if c in "[{(":
            stack.append(c)
            mask[i] = True
        elif c in "]})":
            if stack:
                stack.pop()
            mask[i] = True
        elif stack:
            mask[i] = True
        elif c == "|":
            j = line.find("|", i + 1)
            if j != -1:
                for k in range(i, j + 1):
                    mask[k] = True
                i = j + 1
                continue
            mask[i] = True
        i += 1
    return mask


def rewrite_refs(line: str, old: str, new: str) -> tuple[str, int]:
    """Replace whole-token occurrences of `old` that are outside label text."""
    mask = protected_mask(line)
    out = []
    n = 0
    i = 0
    pat = re.compile(re.escape(old))
    while i < len(line):
        if not mask[i] and line.startswith(old, i):
            before = line[i - 1] if i > 0 else " "
            after = line[i + len(old)] if i + len(old) < len(line) else " "
            if not IDENT.match(before) and not IDENT.match(after):
                out.append(new)
                i += len(old)
                n += 1
                continue
        out.append(line[i])
        i += 1
    return "".join(out), n


def mermaid_blocks(lines: list[str]):
    i = 0
    while i < len(lines):
        if re.match(r"^\s*```mermaid\s*$", lines[i]):
            j = i + 1
            while j < len(lines) and not re.match(r"^\s*```\s*$", lines[j]):
                j += 1
            yield i, j
            i = j + 1
        else:
            i += 1


def main(apply: bool) -> int:
    total_decl = total_ref = 0
    for path in MDFILES:
        lines = path.read_text(encoding="utf-8").split("\n")
        changed = False
        report = []
        for start, end in mermaid_blocks(lines):
            ids = []
            for k in range(start + 1, end):
                m = SUB.match(lines[k])
                if not m:
                    continue
                sid = m.group(2).strip()
                if all(ord(c) < 128 for c in sid):
                    continue
                ids.append((k, sid, m.group(1), m.group(3)))
            if not ids:
                continue
            block_text = "\n".join(lines[start:end])
            for n, (k, sid, indent, label) in enumerate(ids, 1):
                new = f"sg{n}"
                if re.search(rf"(?<!\w){re.escape(new)}(?!\w)", block_text):
                    new = f"group{n}"
                report.append((k, lines[k], f'{indent}subgraph {new}["{label}"]'))
                lines[k] = f'{indent}subgraph {new}["{label}"]'
                total_decl += 1
                changed = True
                for q in range(start + 1, end):
                    if q == k:
                        continue
                    newline, cnt = rewrite_refs(lines[q], sid, new)
                    if cnt:
                        report.append((q, lines[q], newline))
                        lines[q] = newline
                        total_ref += cnt
        if report:
            print(f"--- {path.name}")
            for ln, old, new in report:
                print(f"  L{ln+1}")
                print(f"    - {old.strip()[:100]}")
                print(f"    + {new.strip()[:100]}")
        if changed and apply:
            path.write_text("\n".join(lines), encoding="utf-8")
    print()
    print(f"subgraph declarations rewritten : {total_decl}")
    print(f"edge references rewritten      : {total_ref}")
    print("APPLIED" if apply else "DRY RUN (no files written)")
    return 0


if __name__ == "__main__":
    sys.exit(main("--apply" in sys.argv))
