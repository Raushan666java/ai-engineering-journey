"""Tiny interactive SQL shell for practice.db.

Run:
    python sql/shell.py

Commands:
    .tables          list tables
    .schema          show table definitions
    .quit            exit

Any other line is SQL. End with ; to execute (multi-line is fine).
"""

from __future__ import annotations

import sqlite3
import sys
from pathlib import Path

DB_PATH = Path(__file__).with_name("practice.db")


def print_rows(cursor: sqlite3.Cursor) -> None:
    if cursor.description is None:
        print("OK")
        return

    headers = [d[0] for d in cursor.description]
    rows = cursor.fetchall()
    if not rows:
        print("(no rows)")
        return

    widths = [len(h) for h in headers]
    for row in rows:
        for i, value in enumerate(row):
            widths[i] = max(widths[i], len(str(value)))

    line = "  ".join(h.ljust(widths[i]) for i, h in enumerate(headers))
    print(line)
    print("  ".join("-" * w for w in widths))
    for row in rows:
        print("  ".join(str(v).ljust(widths[i]) for i, v in enumerate(row)))
    print(f"\n({len(rows)} row{'s' if len(rows) != 1 else ''})")


def main() -> None:
    if not DB_PATH.exists():
        sys.exit("practice.db not found. Run: python sql/seed.py")

    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    print(f"SQLite shell - {DB_PATH}")
    print("Type SQL ending with ;  |  .tables  |  .schema  |  .quit\n")

    buffer: list[str] = []
    while True:
        prompt = "sql> " if not buffer else " ... "
        try:
            line = input(prompt)
        except (EOFError, KeyboardInterrupt):
            print()
            break

        stripped = line.strip()
        if not buffer:
            if stripped in {".quit", ".exit"}:
                break
            if stripped == ".tables":
                rows = conn.execute(
                    "SELECT name FROM sqlite_master WHERE type='table' ORDER BY name"
                ).fetchall()
                print("  ".join(r[0] for r in rows))
                continue
            if stripped == ".schema":
                rows = conn.execute(
                    "SELECT sql FROM sqlite_master WHERE type='table' AND sql IS NOT NULL"
                ).fetchall()
                print("\n\n".join(r[0] for r in rows))
                continue
            if not stripped:
                continue

        buffer.append(line)
        if not stripped.endswith(";"):
            continue

        query = "\n".join(buffer)
        buffer.clear()
        try:
            print_rows(conn.execute(query))
        except sqlite3.Error as exc:
            print(f"ERROR: {exc}")
        print()

    conn.close()


if __name__ == "__main__":
    main()
