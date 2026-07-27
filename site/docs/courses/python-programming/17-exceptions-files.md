---
id: 17-exceptions-files
slug: /python-programming/17-exceptions-files
title: "Chapter 17: Exceptions and File I/O"
sidebar_label: "Chapter 17: Exceptions and File I/O"
sidebar_position: 17
---
# Chapter 17: Exceptions and File I/O


> **Previous:** [Generators and itertools](./16-generators.md) | **Next:** [The Python Standard Library](./18-stdlib.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Handle exceptions using try/except/else/finally
- Raise and chain exceptions with `raise`
- Define custom exception classes
- Use assertions for debugging and invariants
- Perform file operations with open, with, and various modes
- Read and write CSV, JSON, and pickle files
- Navigate the filesystem with pathlib

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/17-exceptions-files/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/17-exceptions-files/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/17-exceptions-files/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/17-exceptions-files/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/17-exceptions-files/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/17-exceptions-files/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


![Exceptions and File I/O](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/17-exceptions-files.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|17.1 Exception Handling||Use `try/except` for expected errors; catch specific exceptions, not bare `except:`.|
|17.2 Raising Exceptions||The `else` block runs when no exception occurs; `finally` always runs.|
|17.3 Custom Exception Classes||Custom exceptions should inherit from `Exception`; chain with `raise ... from`.|
|17.4 Assertions||Assertions (`assert`) verify invariants during development; disable with `-O` flag.|
|17.5 File Operations||Use `with open(...)` for automatic resource management; `pathlib` provides modern filesystem access.|
|17.6 CSV Files||undefined|
|17.7 JSON Files||undefined|
|17.8 pickle||undefined|
|17.9 pathlib||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Exception Handling]
    S1[Raising Exceptions]
    S2[Custom Exception Classes]
    S3[Assertions]
    S4[File Operations]
    S5[CSV Files]
    S6[JSON Files]
    S7[pickle]
    S8[pathlib]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
    S7 --> S8
```
## 17.1 Exception Handling

> **One-Sentence Takeaway:** Use `try/except` for expected errors; catch specific exceptions, not bare `except:`.


### 17.1.1 Basic try/except


```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Cannot divide by zero")
```

### 17.1.2 Catching Multiple Exceptions


```python
try:
    num = int(input("Enter a number: "))
    result = 100 / num
    print(f"Result: {result}")
except ValueError:
    print("That was not a valid number")
except ZeroDivisionError:
    print("Cannot divide by zero")
```

Catch multiple exception types in one block:

```python
try:
    value = int("abc")
    result = 100 / value
except (ValueError, TypeError) as e:
    print(f"Invalid operation: {e}")
```

### 17.1.3 Accessing the Exception


```python
try:
    x = [1, 2, 3][10]
except IndexError as e:
    print(f"Error: {e}")
    print(f"Type: {type(e).__name__}")
    print(f"Args: {e.args}")
```

### 17.1.4 Bare except (Discouraged)


```python
try:
    risky_operation()
except:  # catches everything, including KeyboardInterrupt and SystemExit
    print("Something went wrong")
```

Use `except Exception` to avoid catching system-exit exceptions:

```python
try:
    risky_operation()
except Exception as e:
    print(f"Error: {e}")
```

### 17.1.5 else and finally


```python
def safe_divide(a: float, b: float) -> float:
    try:
        result = a / b
    except ZeroDivisionError:
        print("Division by zero")
        return float("inf")
    else:
        # Runs only if no exception occurred
        print(f"Division successful")
        return result
    finally:
        # Always runs → even if there's a return in try/except
        print("Cleanup complete")

print(safe_divide(10, 2))  # Division successful, Cleanup complete, 5.0
print(safe_divide(10, 0))  # Division by zero, Cleanup complete, inf
```

`finally` is executed regardless of exceptions, returns, or breaks. It is used for resource cleanup.

## 17.2 Raising Exceptions

> **One-Sentence Takeaway:** The `else` block runs when no exception occurs; `finally` always runs.


```python
def withdraw(balance: float, amount: float) -> float:
    if amount < 0:
        raise ValueError("Withdrawal amount cannot be negative")
    if amount > balance:
        raise ValueError("Insufficient funds")
    return balance - amount

try:
    withdraw(100, 150)
except ValueError as e:
    print(e)  # Insufficient funds
```

### 17.2.1 Re-raising Exceptions


```python
try:
    risky_operation()
except Exception:
    print("Logging error...")
    raise  # re-raise the same exception
```

### 17.2.2 Chaining Exceptions


```python
try:
    int("abc")
except ValueError as e:
    raise RuntimeError("Failed to parse input") from e
```

The `from` clause sets the `__cause__` attribute, creating an exception chain visible in the traceback.

### 17.2.3 Suppressing Chaining


```python
try:
    int("abc")
except ValueError as e:
    raise RuntimeError("Conversion failed") from None  # suppress original traceback
```

## 17.3 Custom Exception Classes

> **One-Sentence Takeaway:** Custom exceptions should inherit from `Exception`; chain with `raise ... from`.


```python
class InsufficientFundsError(Exception):
    """Raised when an account has insufficient funds."""
    def __init__(self, balance: float, amount: float):
        self.balance = balance
        self.amount = amount
        self.shortfall = amount - balance
        super().__init__(
            f"Insufficient funds: need ${amount:.2f}, have ${balance:.2f} "
            f"(shortfall: ${self.shortfall:.2f})"
        )

class NegativeAmountError(Exception):
    """Raised when a transaction amount is negative."""
    pass

class BankAccount:
    def __init__(self, owner: str, balance: float = 0.0):
        self.owner = owner
        self.balance = balance
    
    def withdraw(self, amount: float) -> float:
        if amount < 0:
            raise NegativeAmountError("Withdrawal amount must be positive")
        if amount > self.balance:
            raise InsufficientFundsError(self.balance, amount)
        self.balance -= amount
        return self.balance

try:
    account = BankAccount("Alice", 100)
    account.withdraw(200)
except InsufficientFundsError as e:
    print(e)
    print(f"Shortfall: ${e.shortfall:.2f}")
```

## 17.4 Assertions

> **One-Sentence Takeaway:** Assertions (`assert`) verify invariants during development; disable with `-O` flag.


Assertions verify internal invariants during development:

```python
def calculate_discount(price: float, discount: float) -> float:
    assert price > 0, "Price must be positive"
    assert 0 <= discount <= 1, "Discount must be between 0 and 1"
    return price * (1 - discount)

print(calculate_discount(100, 0.2))  # 80.0
# calculate_discount(-50, 0.2)  # AssertionError: Price must be positive
```

Assertions can be disabled with `-O` (optimize) flag: `python -O script.py`. Do not use assertions for input validation in production code → use proper error handling.

## 17.5 File Operations

> **One-Sentence Takeaway:** Use `with open(...)` for automatic resource management; `pathlib` provides modern filesystem access.


### 17.5.1 Opening and Closing Files


```python
# Manual (error-prone)
f = open("example.txt", "r")
content = f.read()
f.close()

# Using 'with' (recommended)
with open("example.txt", "r") as f:
    content = f.read()
# File is automatically closed after the block
```

### 17.5.2 File Modes


| Mode | Description |
|------|-------------|
| `r` | Read (default) |
| `w` | Write (overwrites existing) |
| `a` | Append (writes to end) |
| `x` | Exclusive creation (fails if exists) |
| `b` | Binary mode (rb, wb, ab) |
| `t` | Text mode (default) |
| `+` | Read and write (r+, w+, a+) |

```python
# Writing
with open("output.txt", "w") as f:
    f.write("Hello, world!\n")
    f.writelines(["Line 2\n", "Line 3\n"])

# Reading
with open("output.txt", "r") as f:
    content = f.read()           # entire file
    print(content)

with open("output.txt", "r") as f:
    for line in f:               # iterate line by line
        print(line.strip())

with open("output.txt", "r") as f:
    lines = f.readlines()        # list of strings
    first_line = f.readline()    # single line
```

### 17.5.3 Binary Mode


```python
with open("image.jpg", "rb") as f:
    header = f.read(16)
    print(header.hex())

with open("output.bin", "wb") as f:
    f.write(b"\x00\x01\x02\x03")
```

### 17.5.4 Seeking


```python
with open("data.txt", "w+") as f:
    f.write("0123456789")
    f.seek(0)       # go to beginning
    print(f.read()) # 0123456789
    f.seek(5)       # go to byte 5
    print(f.read()) # 56789
    f.seek(-3, 2)   # go to 3 bytes before end
    print(f.read()) # 789
```

## 17.6 CSV Files

> **One-Sentence Takeaway:** undefined


```python
import csv

# Writing CSV
with open("people.csv", "w", newline="") as f:
    writer = csv.writer(f)
    writer.writerow(["Name", "Age", "City"])
    writer.writerow(["Alice", 30, "NYC"])
    writer.writerow(["Bob", 25, "LA"])
    writer.writerows([
        ["Charlie", 35, "Chicago"],
        ["Diana", 28, "SF"],
    ])

# Reading CSV
with open("people.csv", "r") as f:
    reader = csv.reader(f)
    for row in reader:
        print(row)
# ['Name', 'Age', 'City']
# ['Alice', '30', 'NYC']
# ['Bob', '25', 'LA']
# ['Charlie', '35', 'Chicago']
# ['Diana', '28', 'SF']

# CSV with DictReader/DictWriter
with open("people.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(row["Name"], row["Age"])

with open("output.csv", "w", newline="") as f:
    fieldnames = ["Name", "Score"]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerow({"Name": "Alice", "Score": 95})
```

## 17.7 JSON Files

> **One-Sentence Takeaway:** undefined


```python
import json

data = {
    "name": "Alice",
    "age": 30,
    "pets": ["cat", "dog"],
    "address": {"city": "NYC", "zip": 10001},
}

# Write
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

# Read
with open("data.json", "r") as f:
    loaded = json.load(f)
print(loaded["name"])  # Alice
```

## 17.8 pickle

> **One-Sentence Takeaway:** undefined


pickle serialises arbitrary Python objects:

```python
import pickle

data = {"key": [1, 2, 3], "nested": {"a": 1}}

# Serialize
with open("data.pkl", "wb") as f:
    pickle.dump(data, f)

# Deserialize
with open("data.pkl", "rb") as f:
    loaded = pickle.load(f)
print(loaded)  # {'key': [1, 2, 3], 'nested': {'a': 1}}
```

Security warning: never `pickle.load()` untrusted data → it can execute arbitrary code during deserialization. Prefer JSON for cross-language or untrusted data.

## 17.9 pathlib

> **One-Sentence Takeaway:** undefined
> **Warning:** `pickle.loads()` executes arbitrary code during deserialisation — never unpickle untrusted data.




`pathlib` provides an object-oriented interface to the filesystem:

```python
from pathlib import Path

# Path creation
home = Path.home()
cwd = Path.cwd()
data_dir = Path("data")

# Path operations
p = Path("docs/chapter1.txt")
print(p.name)           # chapter1.txt
print(p.stem)           # chapter1
print(p.suffix)         # .txt
print(p.parent)         # docs
print(p.parents[0])     # docs
print(p.absolute())     # full path

# Directory operations
Path("new_dir").mkdir(exist_ok=True)
Path("nested/a/b").mkdir(parents=True, exist_ok=True)

# File operations
p = Path("test.txt")
p.write_text("Hello, pathlib!", encoding="utf-8")
content = p.read_text(encoding="utf-8")
print(content)  # Hello, pathlib!

# Binary
p.write_bytes(b"\x00\x01\x02")
data = p.read_bytes()

# File properties
print(p.exists())       # True
print(p.is_file())      # True
print(p.is_dir())       # False
print(p.stat().st_size)  # size in bytes
print(p.stat().st_mtime) # modification timestamp

# Glob patterns
base = Path(".")
for py_file in base.glob("*.py"):
    print(py_file)
for all_py in base.rglob("*.py"):  # recursive
    print(all_py)

# Deleting
p.unlink()              # delete file
Path("empty_dir").rmdir()  # delete empty directory
import shutil
shutil.rmtree("non_empty_dir")  # delete directory tree
```


## Concept Comparison Table

| Module | Purpose | Key Function/Class |
|---|---|---|
| builtins | Core exceptions | Exception, ValueError, TypeError |
| csv | CSV reading/writing | csv.reader, csv.writer |
| json | JSON encoding/decoding | json.dumps, json.loads |
| pickle | Python object serialisation | pickle.dumps, pickle.loads |
| pathlib | Modern filesystem paths | Path, PurePath |


## Quick Reference

```python
try:
    result = 10 / x
except ZeroDivisionError:
    print("Cannot divide")
except TypeError as e:
    print(f"Type error: {e}")
else:
    print(f"Result: {result}")
finally:
    print("Done")

with open("file.txt") as f:
    content = f.read()
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Web Dev|Error handlers in FastAPI|17.1|
|Data Science|Try/except in data cleaning|17.1|
|DevOps|Config file parsing with pathlib|17.9|
|Automation|CSV export with csv module|17.6|


## Chapter Quiz

**Q1.** When does the else block in try/except run?
- when exception occurs
- when no exception occurs **<-- Correct**
- always
- never

**Q2.** What should custom exceptions inherit from?
- BaseException
- Exception **<-- Correct**
- object
- Error

**Q3.** What does raise ... from do?
- creates a new exception
- chains exceptions **<-- Correct**
- re-raises the same exception
- clears exception context

**Q4.** Why is pickle unsafe for untrusted data?
- it is slow
- it executes code during deserialisation **<-- Correct**
- it corrupts files
- it raises exceptions

**Q5.** What does pathlib.Path provide?
- regular expressions
- object-oriented filesystem paths **<-- Correct**
- JSON parsing
- CSV handling


## TypeScript Parallel

TypeScript uses `try/catch/finally` with similar semantics but some differences:

```typescript
// Basic try/catch/finally
try {
  const data = JSON.parse(userInput);
  console.log(data.name);
} catch (error) {
  // TypeScript: error is `unknown` type by default
  if (error instanceof SyntaxError) {
    console.error("Invalid JSON:", error.message);
  } else {
    console.error("Unexpected error:", error);
  }
} finally {
  console.log("Parse attempt finished");
}

// Custom error classes
class ConfigError extends Error {
  constructor(
    message: string,
    public readonly configKey?: string
  ) {
    super(message);
    this.name = "ConfigError";
  }
}

class ConfigParseError extends ConfigError {
  constructor(key: string, value: string) {
    super(`Cannot parse ${key}=${value}`, key);
    this.name = "ConfigParseError";
  }
}

// Throw and catch custom errors
function parseConfig(json: string): Record<string, string> {
  try {
    return JSON.parse(json);
  } catch (e) {
    throw new ConfigParseError("root", json.slice(0, 50));
  }
}

// Resource management (like Python's `with`)
// TypeScript 5.2+ has `using` for disposable resources
class FileHandle {
  constructor(private path: string) {}
  [Symbol.dispose](): void {
    console.log(`Closing ${this.path}`);
  }
  read(): string {
    return `content of ${this.path}`;
  }
}

// Using declaration (TS 5.2+)
{
  using file = new FileHandle("data.txt");
  console.log(file.read());
}  // `file` is disposed here automatically

// fs module for file operations
import * as fs from "node:fs";
import * as path from "node:path";

const content = fs.readFileSync(
  path.join("data", "config.json"),
  "utf-8"
);
```

### Python vs TypeScript Error Handling


| Concept | Python | TypeScript |
|---------|--------|------------|
| Try/catch | `try/except` | `try/catch` |
| Finally | `finally` | `finally` |
| Custom error | Inherit `Exception` | Extend `Error` |
| Error type | Named exception class | `instanceof` check |
| Stack trace | `traceback` module | `error.stack` |
| Resource mgmt | `with` statement | `using` (TS 5.2+) |
| Assertions | `assert` statement | No built-in (use `if` + throw) |
| File I/O | `pathlib` + built-in functions | `node:fs` module |
| JSON | `json` module (built-in) | `JSON.parse`/`JSON.stringify` |

### TypeScript Error Handling Patterns

```typescript
// Python: try/except/else/finally → TypeScript: try/catch/finally
function readConfig(path: string): string {
  try {
    const data = fs.readFileSync(path, "utf-8");
    return data;
  } catch (error) {
    if (error instanceof Error && "code" in error) {
      const nodeErr = error as NodeJS.ErrnoException;
      if (nodeErr.code === "ENOENT") {
        throw new Error(`File not found: ${path}`);
      }
      if (nodeErr.code === "EACCES") {
        throw new Error(`Permission denied: ${path}`);
      }
    }
    throw error;
  } finally {
    console.log(`Attempted to read: ${path}`);  // always executes
  }
}
// Python: try/except FileNotFoundError / except PermissionError / finally

// Python: custom exception → TypeScript: custom Error class
class ValidationError extends Error {
  constructor(message: string, public readonly field: string) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateEmail(email: string): void {
  if (!email.includes("@")) {
    throw new ValidationError("Invalid email format", "email");
  }
}

// Python: assert → TypeScript: if + throw
function assert(condition: boolean, message: string): asserts condition {
  if (!condition) throw new AssertionError(message);
}

// Python: with statement → TypeScript: Disposable (TS 5.2+)
class FileHandler implements Disposable {
  constructor(private path: string) {
    console.log(`Opening ${path}`);
  }
  read(): string { return "content"; }
  [Symbol.dispose](): void {
    console.log(`Closing ${path}`);  // auto-called via `using`
  }
}
// Usage: using file = new FileHandler("data.txt");
// Equivalent Python: with FileHandler("data.txt") as file:
```

### TypeScript Utilities

```typescript
// === Error Classification Tree ===
class AppError extends Error {
  constructor(message: string, public code: string, public statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
  }
}
class NetworkError extends AppError {
  constructor(message: string) { super(message, "NETWORK_ERROR", 503); }
}
class ValidationError extends AppError {
  constructor(message: string) { super(message, "VALIDATION_ERROR", 400); }
}
class AuthError extends AppError {
  constructor(message: string) { super(message, "AUTH_ERROR", 401); }
}
class NotFoundError extends AppError {
  constructor(message: string) { super(message, "NOT_FOUND", 404); }
}
function classifyError(err: Error): string {
  if (err instanceof ValidationError) return "Validation";
  if (err instanceof AuthError) return "Authentication";
  if (err instanceof NetworkError) return "Network";
  if (err instanceof NotFoundError) return "Not Found";
  return "Unknown";
}
console.log(classifyError(new ValidationError("Invalid input"))); // Validation

// === Try-Catch Wrapper (Result pattern) ===
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };
function safeTry<T>(fn: () => T): Result<T> {
  try { return { ok: true, value: fn() }; }
  catch (err) { return { ok: false, error: err as Error }; }
}
const r1 = safeTry(() => JSON.parse('{"valid": true}'));
const r2 = safeTry(() => JSON.parse("{invalid:}"));
console.log(r1.ok ? r1.value : r1.error.message);
console.log(r2.ok ? "OK" : `Error: ${(r2 as { ok: false; error: Error }).error.message}`);

// === Async Result Pattern ===
async function safeAsync<T>(fn: () => Promise<T>): Promise<Result<T>> {
  try { return { ok: true, value: await fn() }; }
  catch (err) { return { ok: false, error: err as Error }; }
}

// === Resource Disposer (Python context manager equivalent) ===
class Resource {
  constructor(public name: string) { console.log(`Acquired ${name}`); }
  close(): void { console.log(`Released ${name}`); }
}
function using<T extends { close(): void }, R>(resource: T, fn: (r: T) => R): R {
  try { return fn(resource); }
  finally { resource.close(); }
}
const result = using(new Resource("db"), (db) => `Working with ${db.name}`);
console.log(result);

// === Custom Error Factory ===
function createErrorClass(name: string, parent = AppError) {
  return class extends parent {
    constructor(message: string, code = `${name.toUpperCase()}_ERROR`) {
      super(message, code);
      this.name = name;
    }
  };
}
const RateLimitError = createErrorClass("RateLimitError");
try { throw new RateLimitError("Too many requests"); }
catch (err) { console.log((err as Error).name); } // RateLimitError
```

### TypeScript Error Handling Patterns

```typescript
// === Python-style Exception Hierarchy ===
class PythonError extends Error { constructor(msg: string) { super(msg); this.name = "PythonError"; } }
class ValueError extends PythonError { constructor(msg: string) { super(msg); this.name = "ValueError"; } }
class TypeError extends PythonError { constructor(msg: string) { super(msg); this.name = "TypeError"; } }
class KeyError extends PythonError { constructor(msg: string) { super(msg); this.name = "KeyError"; } }
class FileNotFoundError extends PythonError { constructor(msg: string) { super(msg); this.name = "FileNotFoundError"; } }

function checkValue(v: unknown): void {
  if (v === null || v === undefined) throw new ValueError("Value cannot be null/undefined");
  if (typeof v === "string" && v.trim() === "") throw new ValueError("String cannot be empty");
}

// === Result Type (Python try/except pattern) ===
interface TryResult<T> { success: boolean; value?: T; error?: Error; }
function tryExcept<T>(fn: () => T, fallback?: T): TryResult<T> {
  try { const value = fn(); return { success: true, value }; }
  catch (error) { return { success: false, error: error as Error }; }
}

// === Context Manager Pattern ===
interface ContextManager<T> { enter(): T; exit(err?: Error): void; }
function withContext<T, R>(cm: ContextManager<T>, fn: (resource: T) => R): R {
  const resource = cm.enter();
  try { return fn(resource); } finally { cm.exit(); }
}
class FileManager implements ContextManager<string[]> {
  private lines: string[] = [];
  constructor(private path: string) {}
  enter(): string[] {
    const fs = require("fs");
    this.lines = fs.readFileSync(this.path, "utf-8").split("\n");
    return this.lines;
  }
  exit(err?: Error): void { console.log(`Closed ${this.path}`); }
}

// === Multi-catch handler ===
function handleError(err: Error): string {
  if (err instanceof FileNotFoundError) return "File not found";
  if (err instanceof ValueError) return "Invalid value";
  if (err instanceof KeyError) return "Key not found";
  if (err instanceof TypeError) return "Type mismatch";
  return `Unexpected: ${err.message}`;
}

// === Python-style file I/O ===
const fsp = require("fs").promises;
async function fileOps(): Promise<void> {
  const data = await fsp.readFile("file.txt", "utf-8");
  await fsp.writeFile("output.txt", data.toUpperCase(), "utf-8");
  await fsp.appendFile("log.txt", `[${new Date().toISOString()}] done\n`, "utf-8");
  const exists = await fsp.access("file.txt").then(() => true).catch(() => false);
}

// === Async context manager ===
async function withAsyncContext<T, R>(setup: () => Promise<T>, teardown: (r: T) => Promise<void>, fn: (r: T) => Promise<R>): Promise<R> {
  const resource = await setup();
  try { return await fn(resource); } finally { await teardown(resource); }
}
```

### TypeScript File & Error Handling Patterns

```typescript
// === Safe File Operations (Python: try/except/finally) ===
import { readFileSync, writeFileSync, unlinkSync, existsSync, mkdirSync } from "fs";
import { dirname } from "path";
class SafeFileOps {
  static read(path: string): { ok: true; data: string } | { ok: false; error: string } {
    try {
      if (!existsSync(path)) return { ok: false, error: `File not found: ${path}` };
      return { ok: true, data: readFileSync(path, "utf-8") };
    } catch (e) { return { ok: false, error: (e as Error).message }; }
  }
  static write(path: string, content: string): { ok: true } | { ok: false; error: string } {
    try {
      const dir = dirname(path);
      if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
      writeFileSync(path, content, "utf-8");
      return { ok: true };
    } catch (e) { return { ok: false, error: (e as Error).message }; }
  }
  static delete(path: string): { ok: true } | { ok: false; error: string } {
    try {
      if (!existsSync(path)) return { ok: false, error: `File not found: ${path}` };
      unlinkSync(path);
      return { ok: true };
    } catch (e) { return { ok: false, error: (e as Error).message }; }
  }
}

// === Nested Error Context (Python: raise ... from) ===
class DatabaseError extends Error {
  constructor(public override message: string, public cause?: Error) {
    super(message);
    this.name = "DatabaseError";
  }
}
class FileStorageError extends DatabaseError {
  constructor(path: string, cause: Error) { super(`Storage error at ${path}`, cause); this.name = "FileStorageError"; }
}

// === Resource Pool with Error Recovery ===
class ResourcePool<T> {
  private resources: T[] = [];
  constructor(private factory: () => T, private destroy: (r: T) => void, private maxSize: number) {}
  acquire(): T {
    if (this.resources.length > 0) return this.resources.pop()!;
    try { return this.factory(); } catch (e) { throw new DatabaseError("Failed to create resource", e as Error); }
  }
  release(resource: T): void {
    if (this.resources.length < this.maxSize) this.resources.push(resource);
    else this.destroy(resource);
  }
}

// === Compensating Transaction (Python: try/except/else pattern) ===
async function withTransaction<T>(
  begin: () => Promise<void>,
  work: () => Promise<T>,
  rollback: () => Promise<void>,
  commit: () => Promise<void>
): Promise<T> {
  await begin();
  try {
    const result = await work();
    await commit();
    return result;
  } catch (e) {
    await rollback(); // compensating action
    throw e;
  }
}

// === Error Boundary (React/Python context manager pattern) ===
class ErrorBoundary {
  private errors: { context: string; error: Error; timestamp: Date }[] = [];
  try<T>(context: string, fn: () => T): T {
    try { return fn(); } catch (e) {
      this.errors.push({ context, error: e as Error, timestamp: new Date() });
      throw e;
    }
  }
  getErrors(): typeof this.errors { return [...this.errors]; }
  clear(): void { this.errors = []; }
  hasErrors(): boolean { return this.errors.length > 0; }
}

// === File Format Detector (Python: magic bytes) ===
const MAGIC_BYTES: Record<string, Uint8Array> = {
  PNG: new Uint8Array([0x89, 0x50, 0x4E, 0x47]),
  JPEG: new Uint8Array([0xFF, 0xD8, 0xFF]),
  PDF: new Uint8Array([0x25, 0x50, 0x44, 0x46]),
  ZIP: new Uint8Array([0x50, 0x4B, 0x03, 0x04]),
};
function detectFormat(buffer: Uint8Array): string | null {
  for (const [format, magic] of Object.entries(MAGIC_BYTES)) {
    if (buffer.length >= magic.length && magic.every((b, i) => b === buffer[i])) return format;
  }
  return null;
}

// === Temporary File Manager with Auto-cleanup ===
class TempFileManager {
  private files: string[] = [];
  create(prefix = "tmp", suffix = ".txt"): string {
    const path = `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2)}${suffix}`;
    this.files.push(path);
    return path;
  }
  cleanup(): void { for (const f of this.files) { try { unlinkSync(f); } catch {} } this.files = []; }
}

const result = SafeFileOps.read("nonexistent.txt");
console.log(result); // { ok: false, error: "File not found: nonexistent.txt" }

const boundary = new ErrorBoundary();
boundary.try("parse", () => JSON.parse("valid json"));
console.log(boundary.hasErrors()); // false
```

## Summary

- `try/except/else/finally` handles exceptions; `finally` always executes.
- Raise with `raise`; chain with `raise ... from`.
- Custom exceptions inherit from `Exception`.
- Assertions verify invariants; disable with `-O`.
- Use `with` for automatic resource management.
- CSV with `csv` module; JSON with `json`; pickle for arbitrary Python objects.
- `pathlib` provides modern, object-oriented filesystem access.

## Exercises

### Review Questions

1. When does `else` execute in a try/except block?
2. Why is `except Exception` preferred over `except:`?
3. What does `raise ... from None` do?
4. What is the difference between `r+` and `w+` file modes?
5. Why is pickle unsafe for untrusted data?

### Application Problems

1. Write a program that reads a CSV file of student scores, computes averages, and writes a new CSV with summary statistics. Handle `FileNotFoundError`, `PermissionError`, and malformed rows.
2. Implement a recursive directory listing tool using `pathlib` that prints a tree structure like the Unix `tree` command. Indent subdirectories and files. Skip hidden files.
3. Write a custom `ConfigError(Exception)` hierarchy: `ConfigError` → `ConfigParseError`, `ConfigValidationError`, `ConfigMissingError`. Write a config parser that raises these appropriately when parsing a simple INI-style file.

### Challenge Problem

Build a simple file-based key-value store. Support `set(key, value)`, `get(key)`, `delete(key)`, and `list_keys()`. Store data as JSON. Use `pathlib` for file paths and handle concurrent access by implementing a file-locking mechanism using `portalocker` or a PID file. Ensure data integrity by writing to a temp file and renaming atomically. Handle all relevant exceptions.
