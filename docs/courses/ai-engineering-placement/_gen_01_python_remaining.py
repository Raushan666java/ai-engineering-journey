import os

BASE = r"C:\xampp\htdocs\ai-engineering-journey\docs\courses\ai-engineering-placement"

def write(filepath, content):
    path = os.path.join(BASE, filepath)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content.lstrip('\n'))
    with open(path, 'r', encoding='utf-8') as f:
        lines = len(f.readlines())
    print(f"  {filepath} — {lines} lines")

def gallery(subject, chapter):
    return f'''<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/{subject}/{chapter}/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/{subject}/{chapter}/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/{subject}/{chapter}/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/{subject}/{chapter}/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/ai-engineering-placement/{subject}/{chapter}/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/ai-engineering-placement/{subject}/{chapter}/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->'''

def pqa(subject, chapter, number, question, answer_text):
    return f'''<details class="tp-qa-card" data-qid="p{subject:02d}-s{chapter:02d}-q{number}">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q{number}: {question}
  </summary>
  <div class="tp-qa-answer">
    <p>{answer_text}</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>'''

def pquiz(subject, chapter, number, answer_text):
    return f'''<details class="tp-qa-card" data-qid="p{subject:02d}-s{chapter:02d}-quiz{number}"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>{answer_text}</strong></p></div></details>'''

# ===== 07 — File I/O & Exceptions =====
write("01-python-programming\\07-file-io-and-exceptions.md", f'''
# File I/O & Exceptions — Reading, Writing, and Error Handling

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Read and write text files using open() and context managers |
| LO2 | Handle multiple file modes: r, w, a, r+, binary modes |
| LO3 | Use try/except/else/finally for robust error handling |
| LO4 | Raise and chain custom exceptions |
| LO5 | Work with binary files, pickle, and JSON serialization |
| LO6 | Use pathlib for modern file path management |

{gallery("01-python-programming", "07-file-io-and-exceptions")}

## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 7.1 | File Basics | open(), modes, read/write, close |
| 7.2 | Context Managers | with statement, __enter__/__exit__ |
| 7.3 | Text vs Binary | encoding, pickle, struct |
| 7.4 | Exception Handling | try/except/else/finally, hierarchy |
| 7.5 | Custom Exceptions | raise, chaining, assert |
| 7.6 | pathlib | Path, read_text, write_text, glob |

## Chapter Roadmap

```mermaid
flowchart LR
    A[File Operations] --> B[open/modes]
    B --> C[Context Manager: with]
    C --> D[Text vs Binary]
    A --> E[Exceptions]
    E --> F[try/except/else/finally]
    E --> G[Custom Exceptions]
    H[pathlib] --> I[Path.read_text/write_text]
```

## 7.1 File Basics

The built-in open() function returns a file object.

```python
# Write to a file
file = open("hello.txt", "w", encoding="utf-8")
file.write("Hello, World!\\n")
file.write("Second line\\n")
file.close()  # always close!

# Read entire file
file = open("hello.txt", "r", encoding="utf-8")
content = file.read()
print(content)
file.close()
# Output: Hello, World!\\nSecond line\\n

# Read line by line
file = open("hello.txt", "r", encoding="utf-8")
for line in file:
    print(line.rstrip())  # strip newline
file.close()
```

**File modes**:

| Mode | Description | File Position |
|------|-------------|---------------|
| r | Read (default) | Start |
| w | Write (truncates) | Start |
| a | Append | End |
| r+ | Read + Write | Start |
| w+ | Read + Write (truncates) | Start |
| a+ | Read + Append | End |
| rb | Read binary | Start |
| wb | Write binary | Start |

## 7.2 Context Managers

The with statement ensures proper resource cleanup.

```python
# with statement — auto-closes file
with open("hello.txt", "r", encoding="utf-8") as f:
    content = f.read()
# File is closed here, even if exception occurs

# Writing with with
with open("output.txt", "w", encoding="utf-8") as f:
    f.write("Line 1\\n")
    f.write("Line 2\\n")

# Multiple files
with open("input.txt") as fin, open("output.txt", "w") as fout:
    for line in fin:
        fout.write(line.upper())

# Custom context manager
class ManagedFile:
    def __init__(self, name, mode="r"):
        self.name = name
        self.mode = mode

    def __enter__(self):
        self.file = open(self.name, self.mode, encoding="utf-8")
        return self.file

    def __exit__(self, exc_type, exc_val, exc_tb):
        if self.file:
            self.file.close()
        return False  # propagate exception if any

with ManagedFile("hello.txt") as f:
    print(f.read())
```

**contextlib utilities**:

```python
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

# Suppress specific exceptions
from contextlib import suppress
with suppress(FileNotFoundError):
    os.remove("temp.txt")  # no error if file doesn't exist
```

## 7.3 Text vs Binary Files

```python
# Binary mode — for images, audio, serialized data
with open("image.jpg", "rb") as f:
    raw_bytes = f.read()
    print(f"Read {len(raw_bytes)} bytes")

with open("output.bin", "wb") as f:
    f.write(b"\\x00\\x01\\x02\\x03")

# pickle — Python object serialization
import pickle

data = {"name": "Alice", "scores": [95, 87, 92], "active": True}
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)

with open("data.pkl", "rb") as f:
    loaded = pickle.load(f)
print(loaded)  # {"name": "Alice", "scores": [95, 87, 92], "active": True}

# JSON — human-readable serialization
import json
with open("data.json", "w", encoding="utf-8") as f:
    json.dump(data, f, indent=2)

with open("data.json", "r", encoding="utf-8") as f:
    loaded_json = json.load(f)
```

## 7.4 Exception Handling

Python uses try/except/else/finally for error handling.

```python
def safe_divide(a: float, b: float) -> float:
    try:
        result = a / b
    except ZeroDivisionError:
        print("Cannot divide by zero")
        return float("inf")
    except TypeError as e:
        print(f"Type error: {e}")
        raise  # re-raise
    else:
        print("Division successful")
        return result
    finally:
        print("Cleanup — always executes")

print(safe_divide(10, 2))  # prints messages, outputs 5.0
print(safe_divide(10, 0))  # prints "Cannot divide by zero"

# Catching multiple exceptions
try:
    value = int(input("Enter a number: "))
    result = 100 / value
except (ValueError, ZeroDivisionError) as e:
    print(f"Error: {e}")

# Exception hierarchy
# BaseException -> SystemExit, KeyboardInterrupt, GeneratorExit
#              -> Exception -> ValueError, TypeError, OSError, ...
```

## 7.5 Custom Exceptions

```python
class ValidationError(Exception):
    """Raised when data validation fails."""
    pass

class DatabaseError(Exception):
    """Base for database errors."""
    def __init__(self, message, query=None):
        self.message = message
        self.query = query
        super().__init__(self.message)

class ConnectionError(DatabaseError):
    pass

class QueryError(DatabaseError):
    pass

# Using custom exceptions
def validate_age(age: int):
    if age < 0:
        raise ValidationError(f"Age cannot be negative: {age}")
    if age > 150:
        raise ValidationError(f"Age seems unrealistic: {age}")
    return True

try:
    validate_age(-5)
except ValidationError as e:
    print(f"Validation failed: {e}")

# Exception chaining
def process_file(path):
    try:
        with open(path) as f:
            return f.read()
    except OSError as e:
        raise RuntimeError(f"Failed to process {path}") from e

# Walk the chain
try:
    process_file("nonexistent.txt")
except RuntimeError as e:
    print(f"Error: {e}")
    print(f"Caused by: {e.__cause__}")

# assert for debugging
def divide(a, b):
    assert b != 0, "Division by zero!"
    return a / b

# Disable asserts: python -O script.py
```

## 7.6 pathlib — Modern File Paths

```python
from pathlib import Path

# Create Path objects
p = Path("data") / "subdir" / "file.txt"
print(p)  # data\\subdir\\file.txt

# Path properties
p = Path("hello.txt")
print(p.exists())      # True
print(p.is_file())     # True
print(p.is_dir())      # False
print(p.name)          # "hello.txt"
print(p.stem)          # "hello" (no extension)
print(p.suffix)        # ".txt"
print(p.parent)        # Path(".")
print(p.absolute())    # full path

# Reading and writing
p = Path("example.txt")
p.write_text("Hello from pathlib!", encoding="utf-8")
content = p.read_text(encoding="utf-8")
print(content)

p.write_bytes(b"binary data")
data = p.read_bytes()

# Directory operations
d = Path(".")
for f in d.iterdir():
    print(f.name)

# Glob patterns
for py_file in Path(".").glob("**/*.py"):
    print(py_file)

# Create directories
Path("output/data").mkdir(parents=True, exist_ok=True)
```

## TypeScript Parallel

```typescript
import * as fs from "fs";
import * as fsPromises from "fs/promises";

// Synchronous
const content: string = fs.readFileSync("hello.txt", "utf-8");
fs.writeFileSync("output.txt", "Hello\\n", "utf-8");

// Async/await
async function readFile(path: string): Promise<string> {
    return await fsPromises.readFile(path, "utf-8");
}

// Try/catch (similar to Python)
try {
    const data = await readFile("data.json");
    const parsed = JSON.parse(data);
} catch (error) {
    console.error("Error reading file:", error);
} finally {
    console.log("Cleanup");
}

// path module (like pathlib)
import path from "path";
const joined = path.join("data", "subdir", "file.txt");
```

## Summary

- Always use with statements for file operations — automatic cleanup
- File modes: r (read), w (write, truncates), a (append), b (binary)
- JSON for human-readable serialization; pickle for Python-only
- try/except catches exceptions; else runs if no exception; finally always runs
- Exception chaining with raise ... from ... preserves original traceback
- Custom exceptions inherit from Exception (not BaseException)
- Assert statements are for debugging, not input validation
- pathlib provides an OOP approach to file paths
- Use suppress() from contextlib to ignore expected exceptions
- Always specify encoding="utf-8" for text files

## Practical Takeaways

| Scenario | Use | Avoid |
|----------|-----|-------|
| Read text file | with open(f) as f: f.read() | open() without close() |
| Serialize data | json.dump for readability | pickle for untrusted data |
| Exception with detail | Custom exception class | Generic Exception |
| File existence | Path.exists() | os.path.exists |
| Walk directory | Path.glob("**/*.py") | os.walk manually |
| Ignore error | contextlib.suppress() | Empty except: pass |
| Chain errors | raise from e | Losing original traceback |

## Interview Q&A

{pqa(2,7,1,"What is the difference between r+ and w+ modes?","r+ opens for read+write without truncating; w+ truncates the file first. Both allow reading and writing, but w+ destroys existing content.")}
{pqa(2,7,2,"How do context managers work in Python?","They implement __enter__() and __exit__(). The with statement calls __enter__(), stores the result, executes the block, and calls __exit__() on completion or exception. The __exit__ method handles cleanup like closing files.")}
{pqa(2,7,3,"What is the purpose of else in a try/except block?","The else block executes only if no exception occurred in the try block. It distinguishes success-path code from code that always runs (finally). Prevents accidentally catching exceptions from the success path.")}
{pqa(2,7,4,"How do you create a custom exception in Python?","Inherit from Exception (not BaseException): class MyError(Exception): pass. You can add custom fields like query or status_code. Raise with raise MyError(\\\"message\\\") and catch with except MyError as e.")}
{pqa(2,7,5,"What is exception chaining?","Use raise ... from e to chain exceptions. e.__cause__ holds the original exception. Useful when a low-level error (OSError) causes a high-level error (RuntimeError). Python automatically chains when an exception occurs inside an except block.")}
{pqa(2,7,6,"Why use pathlib over os.path?","pathlib provides OOP: Path objects with methods like .read_text(), .write_text(), .glob(), .mkdir(). Cross-platform consistent (forward slashes on all OS). More readable and composable than os.path functions.")}
{pqa(2,7,7,"What is the difference between pickle and JSON?","JSON: human-readable, cross-language, limited types (str, int, list, dict). Pickle: Python-only, binary, can serialize any Python object including functions and classes. Pickle is unsafe with untrusted data — never unpickle from untrusted sources.")}
{pqa(2,7,8,"How do you read a large file without loading it entirely?","Iterate line by line: for line in file:. Use read(size) for fixed-size chunks. Or use file.seek() to skip to specific positions. Memory-mapped files with mmap for very large files.")}
{pqa(2,7,9,"What happens if you forget to close a file?","The file remains open, consuming OS resources (file handles). In CPython, the garbage collector eventually closes it, but the timing is unpredictable. Using with statements guarantees immediate cleanup regardless of exceptions.")}
{pqa(2,7,10,"How do binary and text modes differ?","Text mode: \\\\n translated to OS line endings (\\\\r\\\\n on Windows). Requires encoding parameter. Binary mode: no translation, returns bytes, no encoding needed. Use text for .txt, .csv, .json; binary for .jpg, .mp3, .pkl.")}

## Chapter Quiz

**Q1**: What does the following code output? with open("f.txt","w") as f: f.write("hello")
a) hello
b) 5
c) None
d) True

{pquiz(2,7,1,"Answer: b) 5 — write() returns the number of characters written.")}

**Q2**: Which block runs whether or not an exception occurred?
a) try
b) except
c) else
d) finally

{pquiz(2,7,2,"Answer: d) finally")}

**Q3**: What exception does open() raise if the file doesn't exist in "r" mode?
a) FileNotFoundError
b) IOError
c) OSError
d) ValueError

{pquiz(2,7,3,"Answer: c) OSError (FileNotFoundError is a subclass of OSError)")}

**Q4**: Which method returns the file extension?
a) Path.suffix
b) Path.ext
c) Path.extension
d) Path.parts

{pquiz(2,7,4,"Answer: a) Path.suffix")}

**Q5**: What does assert do when the condition is False?
a) Returns False
b) Raises AssertionError
c) Prints warning
d) Skips the line

{pquiz(2,7,5,"Answer: b) Raises AssertionError")}

## Exercises

**Easy** — Write a program that reads a text file and counts the number of lines, words, and characters.

**Easy** — Use json.dump to save a dictionary of student scores to a JSON file, then json.load to read it back.

**Medium** — Write a custom context manager that measures and prints the execution time of a code block.

**Medium** — Create a hierarchy of exceptions for a banking app: InsufficientFundsError, AccountNotFoundError, TransferError. Demonstrate try/except/else/finally.

**Hard** — Implement a safe file updater that writes to a temp file then renames atomically, preserving the original on failure.

**Hard** — Write a recursive directory tree printer using pathlib that shows indented files and directories with sizes.

---

> **Next**: [08 — OOP in Python →](08-oop-in-python.md)
''')

print("07 written")
