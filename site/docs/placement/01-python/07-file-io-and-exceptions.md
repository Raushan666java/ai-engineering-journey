---
slug: /01-python/file-io-and-exceptions
title: "File Io And Exceptions"
sidebar_label: "File Io And Exceptions"
sidebar_position: 7
---

# File I/O & Exceptions � Reading, Writing, Error Handling

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Read/write text files using open() and context managers |
| LO2 | Handle multiple file modes: r, w, a, r+, binary modes |
| LO3 | Use try/except/else/finally for robust error handling |
| LO4 | Raise and chain custom exceptions |
| LO5 | Work with binary files, pickle, and JSON serialization |
| LO6 | Use pathlib for modern file path management |

## Introduction

Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding file io and exceptions is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how file io and exceptions works in practice.



## Examples

### Basic Example

```python

## Basic file io and exceptions example
def example():
    """Demonstrate file io and exceptions"""
    result = "Hello, file io and exceptions!"
    print(result)
    return result

example()
```

### Expected Output

```text
Hello, file io and exceptions!
```text

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | File Basics | open(), modes, read/write, close |
| 7.2 | Context Managers | with, __enter__/__exit__ |
| 7.3 | Text vs Binary | encoding, pickle, struct |
| 7.4 | Exception Handling | try/except/else/finally |
| 7.5 | Custom Exceptions | raise, chaining, assert |
| 7.6 | pathlib | Path, read_text, write_text |

## Chapter Roadmap

```mermaid
flowchart LR
    A[File Operations] --> B[open/modes]
    B --> C[with Context Manager]
    C --> D[Text vs Binary]
    A --> E[Exceptions]
    E --> F[try/except/else/finally]
    E --> G[Custom Exceptions]
    H[pathlib] --> I[Path methods]
```

## 7.1 File Basics

```python
file = open("hello.txt", "w", encoding="utf-8")
file.write("Hello, World!\n")
file.write("Second line\n")
file.close()

file = open("hello.txt", "r", encoding="utf-8")
content = file.read()
print(content)  # Hello, World!\nSecond line\n
file.close()

file = open("hello.txt", "r", encoding="utf-8")
for line in file:
    print(line.rstrip())
file.close()
```

| Mode | Description | Position |
|------|-------------|----------|
| r | Read (default) | Start |
| w | Write (truncates) | Start |
| a | Append | End |
| r+ | Read + Write | Start |
| rb | Read binary | Start |
| wb | Write binary | Start |

## 7.2 Context Managers

```python
with open("hello.txt", "r", encoding="utf-8") as f:
    content = f.read()

with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Line 1\n")
    f.write("Line 2\n")

with open("input.txt") as fin, open("output.txt", "w") as fout:
    for line in fin:
        fout.write(line.upper())

from contextlib import contextmanager

@contextmanager
def open_file(name, mode="r"):
    f = open(name, mode, encoding="utf-8")
    try:
        yield f
    finally:
        f.close()

with open_file("hello.txt") as f:
    print(f.read())

from contextlib import suppress
with suppress(FileNotFoundError):
    os.remove("temp.txt")
```

## 7.3 Text vs Binary

```python
with open("image.jpg", "rb") as f:
    raw_bytes = f.read()
    print(f"Read {len(raw_bytes)} bytes")

import pickle
data = {"name": "Alice", "scores": [95, 87]}
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)
with open("data.pkl", "rb") as f:
    loaded = pickle.load(f)

import json
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)
with open("data.json", "r", encoding="utf-8") as f:
    loaded_json = json.load(f)
```

## 7.4 Exception Handling

```python
def safe_divide(a: float, b: float) -> float:
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
        return float("inf")
    except TypeError as e:
        print(f"Type error: {e}")
        raise
    else:
        print("Division successful")
        return result
    finally:
        print("Cleanup always runs")

try:
    value = int(input("Enter a number: "))
    result = 100 / value
except (ValueError, ZeroDivisionError) as e:
    print(f"Error: {e}")
```

## 7.5 Custom Exceptions

```python
class ValidationError(Exception):
    pass

class DatabaseError(Exception):
    def __init__(self, message, query=None):
        self.message = message
        self.query = query
        super().__init__(self.message)

def validate_age(age: int):
    if age < 0:
        raise ValidationError(f"Negative age: {age}")
    return True

def process_file(path):
    try:
        with open(path) as f:
            return f.read()
    except OSError as e:
        raise RuntimeError(f"Failed: {path}") from e

assert 5 > 0, "Assertion message"  # disabled with -O flag
```

## 7.6 pathlib

```python
from pathlib import Path

p = Path("data") / "subdir" / "file.txt"
print(p.suffix)     # .txt
print(p.stem)       # file
print(p.name)       # file.txt
print(p.parent)     # Path("data/subdir")

p2 = Path("example.txt")
p2.write_text("Hello from pathlib!", encoding="utf-8")
content = p2.read_text(encoding="utf-8")

for f in Path(".").glob("**/*.py"):
    print(f.name)

Path("output/data").mkdir(parents=True, exist_ok=True)
```

## TypeScript Parallel

```typescript
import * as fs from "fs/promises";

async function readFile(path: string): Promise<string> {
    try {
        return await fs.readFile(path, "utf-8");
    } catch (error) {
        console.error("Error:", error);
        throw error;
    } finally {
        console.log("Cleanup");
    }
}
```

## Summary

- Always use with statements for file operations (automatic cleanup)
- File modes: r (read), w (truncate-write), a (append), b (binary)
- JSON for human-readable serialization; pickle for Python objects
- try/except/else/finally: except handles errors, else runs on success, finally always runs
- Exception chaining with raise ... from e preserves original traceback
- Custom exceptions inherit from Exception (not BaseException)
- pathlib provides OOP file paths (read_text, write_text, glob)
- Always specify encoding="utf-8" for text files
- Use suppress() to ignore expected exceptions
- assert statements for debugging (disabled with -O)

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Read text file | with open(f) as f: f.read() | open() without close |
| Serialize | json.dump for readability | pickle for untrusted data |
| Custom exception | Class inheriting Exception | Generic raise Exception |
| File existence | Path.exists() | os.path.exists |
| Walk directory | Path.glob("**/*.py") | Manual os.walk |
| Ignore error | contextlib.suppress() | Empty except: pass |
| Chain errors | raise from e | Losing original traceback |

## Interview Q&A

<details class="tp-qa-card" data-qid="p02-s07-q1">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q1: r+ vs w+ modes?</summary>
  <div class="tp-qa-answer"><p>r+: read+write without truncating. w+: truncates file first. Both allow reading and writing.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q2">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q2: How do context managers work?</summary>
  <div class="tp-qa-answer"><p>__enter__() runs at entry, returns resource. __exit__() runs at exit (even on exception). with statement ensures cleanup.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q3">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q3: Purpose of else in try/except?</summary>
  <div class="tp-qa-answer"><p>Executes only if no exception occurred. Separates success-path code from code that always runs (finally). Prevents accidentally catching exceptions from the success path.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q4">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q4: Create a custom exception?</summary>
  <div class="tp-qa-answer"><p>Inherit from Exception: class MyError(Exception): pass. Add custom fields. Raise with raise MyError("msg"). Catch with except MyError as e.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q5">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q5: What is exception chaining?</summary>
  <div class="tp-qa-answer"><p>raise ... from e chains exceptions. e.__cause__ holds the original. Useful when low-level error causes high-level error.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q6">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q6: Why pathlib over os.path?</summary>
  <div class="tp-qa-answer"><p>OOP: Path objects with methods (read_text, write_text, glob). Cross-platform, composable, more readable than os.path.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q7">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q7: pickle vs JSON?</summary>
  <div class="tp-qa-answer"><p>JSON: human-readable, cross-language, limited types. Pickle: Python-only, binary, any object. Pickle unsafe with untrusted data.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q8">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q8: Read large file without loading entirely?</summary>
  <div class="tp-qa-answer"><p>Iterate line by line: for line in file. Use read(size) for chunks. file.seek() to skip positions. mmap for very large files.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q9">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q9: What happens if forget to close file?</summary>
  <div class="tp-qa-answer"><p>File handle stays open, consuming OS resources. GC eventually closes it but timing unpredictable. Using with guarantees immediate cleanup.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>
<details class="tp-qa-card" data-qid="p02-s07-q10">
  <summary class="tp-qa-question"><span class="tp-qa-status"></span>Q10: Binary vs text modes?</summary>
  <div class="tp-qa-answer"><p>Text: \n translated to OS line endings, needs encoding. Binary: no translation, returns bytes. Text for .txt/.csv, binary for .jpg/.mp3.</p></div><button class="tp-qa-mark-btn">? Mark Reviewed</button><button class="tp-qa-bookmark-btn">?? Bookmark</button>
</details>

## Chapter Quiz

**Q1**: Which block runs whether or not exception occurred? a) try b) except c) else d) finally

<details class="tp-qa-card" data-qid="p02-s07-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) finally</strong></p></div></details>

**Q2**: What exception for file not found in r mode? a) FileNotFoundError b) IOError c) OSError d) ValueError

<details class="tp-qa-card" data-qid="p02-s07-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: c) OSError (FileNotFoundError is a subclass)</strong></p></div></details>

**Q3**: Path method for file extension? a) .suffix b) .ext c) .extension d) .parts

<details class="tp-qa-card" data-qid="p02-s07-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) .suffix</strong></p></div></details>

**Q4**: What does assert do on False? a) returns False b) raises AssertionError c) prints warning d) skips

<details class="tp-qa-card" data-qid="p02-s07-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) raises AssertionError</strong></p></div></details>

**Q5**: Which is true about binary mode? a) needs encoding b) returns bytes c) translates \n d) default mode

<details class="tp-qa-card" data-qid="p02-s07-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) binary mode returns bytes</strong></p></div></details>

## Exercises

**Easy** � Read a text file, count lines/words/characters.
**Easy** � Save dict to JSON, read it back.
**Medium** � Context manager that measures execution time.
**Medium** � Exception hierarchy for a banking app (InsufficientFunds, AccountNotFound, TransferError).
**Hard** � Safe file updater writing to temp then atomic rename.
**Hard** � Recursive directory tree printer using pathlib.

## 7.7 Working with Temporary Files

```python
import tempfile
import os

## Temporary file (auto-deleted on close)
with tempfile.TemporaryFile(mode="w+t", encoding="utf-8") as tf:
    tf.write("Temporary data\n")
    tf.seek(0)
    print(tf.read())  # Temporary data

## Named temporary file
with tempfile.NamedTemporaryFile(delete=False, suffix=".txt") as ntf:
    ntf.write(b"Named temp file")
    temp_path = ntf.name

print(f"Temp file at: {temp_path}")
os.unlink(temp_path)  # manually delete

## Temporary directory
with tempfile.TemporaryDirectory() as tmpdir:
    file_path = os.path.join(tmpdir, "test.txt")
    with open(file_path, "w") as f:
        f.write("Hello from temp dir")
    print(os.listdir(tmpdir))  # ['test.txt']

## Directory auto-deleted after context
```

## 7.8 Advanced Exception Patterns

```python

## try-except-else-finally complete example
def process_config(path: str) -> dict:
    try:
        file = open(path, "r", encoding="utf-8")
    except FileNotFoundError:
        print(f"Config not found: {path}")
        return {}
    except PermissionError:
        print(f"Permission denied: {path}")
        return {}
    else:
        with file:
            import json
            try:
                return json.load(file)
            except json.JSONDecodeError as e:
                print(f"Invalid JSON: {e}")
                return {}
    finally:
        print("Config loading attempt complete")

## Exception groups (Python 3.11+)
try:
    raise ExceptionGroup("Multiple errors", [
        ValueError("Invalid value"),
        TypeError("Invalid type"),
    ])
except* ValueError as e:
    print(f"Value errors: {e.exceptions}")
except* TypeError as e:
    print(f"Type errors: {e.exceptions}")

## Context managers for resource management
class ManagedDatabase:
    def __init__(self, connection_string: str):
        self.conn = connection_string

    def __enter__(self):
        print(f"Connecting to {self.conn}")
        self.connection = {"connected": True}
        return self.connection

    def __exit__(self, exc_type, exc_val, exc_tb):
        print("Closing connection")
        self.connection["connected"] = False
        if exc_type is not None:
            print(f"Exception occurred: {exc_val}")
        return False  # don't suppress exceptions

with ManagedDatabase("db://localhost") as db:
    print(db)
```

## 7.9 File Locking and Concurrency

```python
import fcntl  # Unix only; Windows uses msvcrt
import os

## Advisory file locking
def write_with_lock(filepath: str, data: str):
    with open(filepath, "a", encoding="utf-8") as f:
        try:
            fcntl.flock(f, fcntl.LOCK_EX | fcntl.LOCK_NB)
            f.write(data + "\n")
        except BlockingIOError:
            print("File is locked by another process")
        finally:
            fcntl.flock(f, fcntl.LOCK_UN)

## Atomic file write (write to temp, then rename)
import tempfile
def atomic_write(filepath: str, data: str):
    dirpath = os.path.dirname(filepath) or "."
    with tempfile.NamedTemporaryFile(
        mode="w", dir=dirpath, delete=False, encoding="utf-8"
    ) as tf:
        tf.write(data)
        temp_path = tf.name
    os.replace(temp_path, filepath)  # atomic on POSIX

## Concurrent logging with Queue
import threading
from queue import Queue

class AsyncLogger:
    def __init__(self, filepath: str):
        self.queue: Queue[str] = Queue()
        self.thread = threading.Thread(target=self._writer, daemon=True)
        self.filepath = filepath
        self.thread.start()

    def _writer(self):
        with open(self.filepath, "a", encoding="utf-8") as f:
            while True:
                msg = self.queue.get()
                if msg is None:
                    break
                f.write(msg + "\n")
                f.flush()

    def log(self, msg: str):
        self.queue.put(msg)

    def stop(self):
        self.queue.put(None)
        self.thread.join()
```

## 7.10 Real-World File Processing

```python
import csv
import json
from pathlib import Path
from typing import Iterator

## CSV processing pipeline
def read_csv(path: Path) -> Iterator[dict]:
    with path.open("r", newline="", encoding="utf-8") as f:
        reader = csv.DictReader(f)
        yield from reader

def filter_by_column(rows: Iterator[dict], column: str, value: str):
    for row in rows:
        if row.get(column) == value:
            yield row

def write_jsonl(rows: Iterator[dict], path: Path):
    with path.open("w", encoding="utf-8") as f:
        for row in rows:
            f.write(json.dumps(row) + "\n")

## Pipeline usage
input_path = Path("data/sales.csv")
output_path = Path("data/processed.jsonl")
rows = read_csv(input_path)
filtered = filter_by_column(rows, "status", "completed")
write_jsonl(filtered, output_path)

## Config file handling with fallback
import configparser

config = configparser.ConfigParser()
config.read([
    "config.default.ini",
    "config.local.ini",
    Path.home() / ".myapp/config.ini"
])

## Log file rotation
import logging
from logging.handlers import RotatingFileHandler

handler = RotatingFileHandler(
    "app.log", maxBytes=1024 * 1024, backupCount=3
)
logging.basicConfig(
    level=logging.INFO,
    handlers=[handler],
    format="%(asctime)s - %(levelname)s - %(message)s"
)

logging.info("Application started")
logging.error("An error occurred")
```

## 7.11 Common Pitfalls

```python

## Pitfall 1: Not closing files manually (use with!)
f = open("file.txt", "r", encoding="utf-8")
data = f.read()

## f.close() forgotten -- resource leak!

## Solution: with open("file.txt") as f: data = f.read()

## Pitfall 2: Ignoring encoding
with open("file.txt", "r") as f:  # BAD: platform-dependent encoding
    data = f.read()

## Always specify: encoding="utf-8"

## Pitfall 3: Bare except clauses
try:
    result = risky_operation()
except:  # BAD: catches KeyboardInterrupt, SystemExit too
    print("Error occurred")

## Use: except Exception as e:

## Pitfall 4: Suppressing exceptions silently
try:
    func()
except Exception:
    pass  # BAD: errors are hidden

## At least log: except Exception as e: logging.error(e)

## Pitfall 5: Not handling file modes correctly
with open("file.txt", "w") as f:  # TRUNCATES existing content!
    f.write("new content")

## Use "a" for append, "r+" for read/write

## Pitfall 6: Pickle with untrusted data
import pickle
data = pickle.loads(untrusted_bytes)  # BAD: arbitrary code execution

## Use JSON or other safe formats for untrusted data

## Pitfall 7: Line ending issues between platforms
with open("file.txt", "w") as f:  # Windows: \r\n, Unix: \n
    f.write("line1\n")  # might get \r\n on Windows

## Use newline="" parameter for binary compatibility
```

## 7.12 Structured Serialization Formats

```python
import yaml  # pip install pyyaml

## YAML configuration
config_yaml = """
server:
  host: localhost
  port: 8080
database:
  url: postgresql://localhost/db
  pool_size: 10
"""
config = yaml.safe_load(config_yaml)
print(config["server"]["host"])  # localhost

## MessagePack (binary JSON alternative)
import msgpack  # pip install msgpack

data = {"compact": True, "values": [1, 2, 3]}
packed = msgpack.packb(data)
print(f"Size: {len(packed)} bytes")  # smaller than JSON
unpacked = msgpack.unpackb(packed)
print(unpacked == data)  # True

## Protocol Buffers (via protobuf library)

## message.proto:

## message Person {

##   string name = 1;

##   int32 age = 2;

## }
```

---


## Common Mistakes

1. Not understanding the fundamental concepts before applying them
2. Skipping edge cases in implementation
3. Not analyzing time/space complexity
4. Forgetting to handle null/empty inputs
5. Not practicing enough problems to build pattern recognition

## Revision Notes

- - Core principle: Understand the fundamental concepts thoroughly
- - Implementation pattern: Practice with real code examples
- - Complexity: Know the time and space complexity
- - Application: Know when to use this in production systems
- - Interview: Frequently asked in technical interviews
- - Edge cases: Consider common failure scenarios
- - Related concepts: Connect to broader system design
