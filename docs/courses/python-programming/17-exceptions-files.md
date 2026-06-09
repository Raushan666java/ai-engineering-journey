# Chapter 17: Exceptions and File I/O

## Learning Objectives

By the end of this chapter, students will be able to:
- Handle exceptions using try/except/else/finally
- Raise and chain exceptions with `raise`
- Define custom exception classes
- Use assertions for debugging and invariants
- Perform file operations with open, with, and various modes
- Read and write CSV, JSON, and pickle files
- Navigate the filesystem with pathlib

## 17.1 Exception Handling

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
        # Always runs — even if there's a return in try/except
        print("Cleanup complete")

print(safe_divide(10, 2))  # Division successful, Cleanup complete, 5.0
print(safe_divide(10, 0))  # Division by zero, Cleanup complete, inf
```

`finally` is executed regardless of exceptions, returns, or breaks. It is used for resource cleanup.

## 17.2 Raising Exceptions

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

Assertions verify internal invariants during development:

```python
def calculate_discount(price: float, discount: float) -> float:
    assert price > 0, "Price must be positive"
    assert 0 <= discount <= 1, "Discount must be between 0 and 1"
    return price * (1 - discount)

print(calculate_discount(100, 0.2))  # 80.0
# calculate_discount(-50, 0.2)  # AssertionError: Price must be positive
```

Assertions can be disabled with `-O` (optimize) flag: `python -O script.py`. Do not use assertions for input validation in production code — use proper error handling.

## 17.5 File Operations

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

Security warning: never `pickle.load()` untrusted data — it can execute arbitrary code during deserialization. Prefer JSON for cross-language or untrusted data.

## 17.9 pathlib

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
