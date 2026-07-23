---
slug: /01-python/python-basics
title: "Python Basics"
sidebar_label: "Python Basics"
sidebar_position: 1
---

# Python Basics — Variables, Data Types, Operators

## Learning Objectives

| Objective | Description |
|-----------|-------------|
| LO1 | Set up a Python development environment and execute code via REPL and scripts |
| LO2 | Declare variables and understand Python's dynamic typing and reference semantics |
| LO3 | Use all primitive data types: int, float, str, bool, bytes, None |
| LO4 | Apply arithmetic, comparison, logical, and assignment operators correctly |
| LO5 | Understand type conversion, type checking, and common type errors |
| LO6 | Write clean Python following PEP 8 style guidelines |

## Introduction

Python is the lingua franca of AI engineering. Mastering its syntax, data structures, and libraries is non-negotiable for building ML pipelines, APIs, and automation scripts. This module covers everything from basics to advanced concurrency.




## Prerequisites

- Basic programming knowledge
- Understanding of data structures

## Key Terminology

**Key Terms**: Core vocabulary and concepts for this topic.

**Definition**: Essential terms you must know for interviews and production work.

## Theory

Understanding python basics is fundamental for AI engineers. This section covers the core concepts, underlying principles, and theoretical framework that govern how python basics works in practice.



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 1.1 | Setting Up Python | Install, REPL, script mode, IDEs |
| 1.2 | Variables and Dynamic Typing | Assignment, type inference, naming conventions |
| 1.3 | Numeric Types | int, float, complex, arithmetic operators |
| 1.4 | Strings | str, indexing, slicing, methods, f-strings |
| 1.5 | Booleans and None | True/False, NoneType, truthiness |
| 1.6 | Type Conversion | implicit vs explicit, common pitfalls |
| 1.7 | Operators | arithmetic, comparison, logical, assignment, identity, membership |
| 1.8 | PEP 8 and Code Style | Naming, indentation, imports, line length |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Install Python] --> B[REPL Basics]
    B --> C[Variables & Types]
    C --> D[Numbers & Strings]
    D --> E[Booleans & None]
    E --> F[Operators]
    F --> G[Type Conversion]
    G --> H[PEP 8 Style]
```text

## 1.1 Setting Up Python

Python is an interpreted, dynamically-typed, high-level programming language. It emphasizes readability and productivity, making it the dominant language for AI/ML engineering.

**Installation**: Download Python 3.11+ from python.org. Verify installation:

```python
python --version

## Python 3.11.9
```text

**Two modes of execution**:

1. **REPL** (Read-Eval-Print Loop): Interactive mode for experimentation. Type `python` in terminal.
2. **Script mode**: Save code in `.py` files and run with `python filename.py`.

```python

## hello.py — Your first Python program
print("Hello, AI Engineering Journey!")
```text

**Recommended IDEs**: VS Code with Python extension, PyCharm Community Edition, or Cursor for AI-assisted development.

**Virtual environments** isolate project dependencies:

```bash
python -m venv .venv
source .venv/bin/activate  # Linux/macOS
.venv\Scripts\activate     # Windows
```text

---

## 1.2 Variables and Dynamic Typing

Python variables are **references to objects** in memory. Unlike statically-typed languages, a variable's type is inferred at runtime and can change.

```python

## Dynamic typing — type is inferred from value
name = "Alice"       # str
age = 30             # int
pi = 3.14159         # float
is_active = True     # bool
data = None          # NoneType

## Reassignment changes type
data = 42            # Was NoneType, now int
data = "now a str"   # Now str

## Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 0
```text

**Variable naming rules**:
- Letters, digits, underscores (cannot start with digit)
- Case-sensitive (`Age` ≠ `age`)
- Avoid reserved keywords: `if`, `else`, `for`, `while`, `class`, `def`, `return`, etc.
- Convention: `snake_case` for variables and functions, `UPPER_SNAKE` for constants

```python

## Constants by convention (not enforced)
MAX_RETRIES = 3
DEFAULT_TIMEOUT = 30.0
```text

**Reference semantics**: Variables hold references, not values. Assignment copies the reference, not the object.

```python
a = [1, 2, 3]
b = a              # b references same list
b.append(4)        # Modifies the list a also sees
print(a)           # [1, 2, 3, 4]

## Use copy() for a true copy
c = a.copy()
c.append(5)
print(a)           # [1, 2, 3, 4]
print(c)           # [1, 2, 3, 4, 5]
```text

---

## 1.3 Numeric Types

Python supports three numeric types:

```python

## int — arbitrary precision integers
count = 1_000_000          # Underscores for readability
binary = 0b1010            # 10 in decimal
octal = 0o77               # 63 in decimal
hex_val = 0xFF             # 255 in decimal

## float — double-precision IEEE 754
price = 19.99
scientific = 1.5e-3        # 0.0015

## complex — real and imaginary parts
z = 3 + 4j
print(z.real, z.imag)      # 3.0 4.0
```text

**Arithmetic operators**:

```python
a, b = 10, 3
print(a + b)    # 13  — addition
print(a - b)    # 7   — subtraction
print(a * b)    # 30  — multiplication
print(a / b)    # 3.333... — float division
print(a // b)   # 3   — floor division
print(a % b)    # 1   — modulo
print(a ** b)   # 1000 — exponentiation
```text

**Division behavior**: `/` always returns float. `//` returns int (floor).

```python
print(5 / 2)    # 2.5
print(5 // 2)   # 2
print(-5 // 2)  # -3 (floor, not truncate toward zero)
```text

**Floating-point precision**:

```python
print(0.1 + 0.2)          # 0.30000000000000004
print(round(0.1 + 0.2, 2))  # 0.3

## Use Decimal for exact arithmetic
from decimal import Decimal
print(Decimal('0.1') + Decimal('0.2'))  # 0.3
```text

---

## 1.4 Strings

Strings are immutable sequences of Unicode characters.

```python

## String creation
single = 'Hello'
double = "World"
multiline = """This is a
multi-line string"""
empty = ""

## Indexing — 0-based
s = "Python"
print(s[0])    # P
print(s[-1])   # n (last character)
print(s[0:3])  # Pyt (slice: start:end)
print(s[::2])  # Pto (slice: start:end:step)

## Common string methods
text = "  hello, world!  "
print(text.strip())       # "hello, world!"
print(text.upper())       # "  HELLO, WORLD!  "
print(text.lower())       # "  hello, world!  "
print(text.replace("o", "0"))  # "  hell0, w0rld!  "
print(text.split(","))    # ["  hello", " world!  "]
print(", ".join(["a", "b", "c"]))  # "a, b, c"
print(text.startswith("  hello"))   # True
print(text.find("world"))  # 9
```text

**f-strings** (Python 3.6+) — preferred string formatting:

```python
name = "Alice"
age = 30
print(f"{name} is {age} years old.")

## Alice is 30 years old.

## Expressions inside f-strings
print(f"{2 * 3 * 5 = }")  # 2 * 3 * 5 = 30

## Format specifiers
pi = 3.14159
print(f"{pi:.2f}")         # 3.14
print(f"{pi:10.2f}")       # "      3.14" (right-aligned in width 10)
print(f"{pi:<10.2f}")      # "3.14      " (left-aligned)
```text

**String immutability**: Strings cannot be modified in place.

```python
s = "hello"

## s[0] = "H"  — TypeError!

## Must create new string
s = "H" + s[1:]  # "Hello"
```text

---

## 1.5 Booleans and None

**Booleans** (`bool`): Subclass of `int`. `True` = 1, `False` = 0.

```python
is_sunny = True
is_raining = False
print(is_sunny + 2)   # 3 (True is 1)

## Truthiness — values that evaluate to False:

## False, None, 0, 0.0, "" (empty string), [] (empty list), {} (empty dict), set()
print(bool(0))        # False
print(bool(42))       # True
print(bool(""))       # False
print(bool("text"))   # True
```text

**None**: Python's null value. Singleton of `NoneType`.

```python
result = None
if result is None:
    print("No result yet")

## Use is/is not for None comparison, not ==
print(None is None)   # True
print(None == 0)      # False
```text

---

## 1.6 Type Conversion

**Implicit conversion** (automatic):

```python
print(3 + 4.0)    # 7.0 — int promoted to float
print(True + 2)   # 3   — bool promoted to int
```text

**Explicit conversion** (type casting):

```python

## To int
print(int(3.9))       # 3 (truncates)
print(int("42"))      # 42
print(int("FF", 16))  # 255 (base 16)

## To float
print(float(3))       # 3.0
print(float("3.14"))  # 3.14

## To str
print(str(42))        # "42"
print(str(3.14))      # "3.14"

## Conversion gotchas

## int("3.14")  — ValueError: invalid literal

## float("3.14") — works fine

## int("0xFF", 0) — uses base from prefix
```text

---

## 1.7 Operators

**Arithmetic operators**: `+`, `-`, `*`, `/`, `//`, `%`, `**`

**Comparison operators**: `==`, `!=`, `<`, `>`, `<=`, `>=`

```python
print(3 == 3.0)   # True (value comparison)
print(3 is 3.0)   # False (identity comparison)
print("a" < "b")  # True (lexicographic)
```text

**Logical operators**: `and`, `or`, `not`

```python
x = 5
print(x > 0 and x < 10)   # True
print(x > 0 or x < 0)     # True
print(not x > 10)         # True

## Short-circuit evaluation
def get_value():
    print("get_value called")
    return 42

## If first condition is False, second is never evaluated
result = False and get_value()  # get_value NOT called
```text

**Assignment operators**: `=`, `+=`, `-=`, `*=`, `/=`, `//=`, `%=`, `**=`

```python
x = 10
x += 5   # x = 15
x *= 2   # x = 30
```text

**Identity operators**: `is`, `is not` — check object identity (memory address), not value.

```python
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b)   # True (same value)
print(a is b)   # False (different objects)

## Small integers are cached
x = 256
y = 256
print(x is y)   # True (CPython caches -5 to 256)

x = 1000
y = 1000
print(x is y)   # May be True or False — implementation dependent!
```text

**Membership operators**: `in`, `not in`

```python
print("a" in "hello")      # False
print(3 in [1, 2, 3])      # True
print("key" in {"key": 1}) # True
```text

**Operator precedence** (highest to lowest):
1. `**` — exponentiation
2. `+x`, `-x`, `~x` — unary operators
3. `*`, `/`, `//`, `%` — multiplication/division
4. `+`, `-` — addition/subtraction
5. `<<`, `>>` — bitwise shifts
6. `&` — bitwise AND
7. `^` — bitwise XOR
8. `|` — bitwise OR
9. `==`, `!=`, `<`, `>`, `<=`, `>=`, `is`, `in` — comparisons
10. `not` — logical NOT
11. `and` — logical AND
12. `or` — logical OR

```python

## Complex expression — use parentheses for clarity
result = (2 + 3) * 4 > 15 and not False
print(result)  # True
```text

---

## 1.8 PEP 8 and Code Style

PEP 8 is Python's style guide. Key rules:

| Rule | Correct | Incorrect |
|------|---------|-----------|
| Indentation | 4 spaces | tabs or mixed |
| Line length | max 79 characters | 100+ character lines |
| Blank lines | 2 before top-level def/class, 1 between methods | inconsistent spacing |
| Imports | one per line, stdlib → third-party → local | wildcard imports |
| Variable naming | `snake_case` for functions/vars, `UPPER_CASE` for constants | camelCase |
| Spaces | `x = 1`, not `x=1` | missing spaces around operators |

```python

## Good PEP 8 style
import os
import sys

from typing import List, Optional

MAX_RETRIES = 3

def calculate_mean(values: List[float]) -> Optional[float]:
    if not values:
        return None
    return sum(values) / len(values)
```text

Use `black` for auto-formatting and `ruff` for linting:

```bash
pip install black ruff
black my_script.py
ruff check my_script.py
```text

---

## TypeScript Parallel

TypeScript uses explicit type annotations rather than Python's dynamic typing:

```typescript
// TypeScript — explicit types
let name: string = "Alice";
let age: number = 30;
let isActive: boolean = true;

// TypeScript infers types in many cases
let message = "Hello";  // inferred as string

// TypeScript uses === for strict equality, !== for strict inequality
if (3 === 3) { console.log("strict equality"); }

// Template literals (similar to f-strings)
console.log(`${name} is ${age} years old.`);
```text

---

## Visual Analogy

Think of programming in Python like using a **recipe book**:

- **Variables** = Ingredients on your counter — `flour = "2 cups"`, `oven_temp = 350`. You can reassign them anytime; the label stays the same but you can swap what's in the bowl.
- **Functions** = Recipes — a named set of steps that takes inputs (ingredients) and produces an output (dish). `def bake_cake(flour, sugar, eggs)` is a recipe card you can reuse.
- **Modules** = Cookbook chapters — a file full of related recipes. `import baking` gives you all the baking recipes in one organized package.
- **Dynamic typing** = Using whatever ingredient is available — you don't need to declare "I will only use flour here"; you just pour in whatever you have.

This helps because Python's flexibility mirrors how a cook thinks — grab what you need, follow the steps, and don't worry about rigid containers. The trade-off is that you must be careful not to put salt in the cake by mistake.

## Summary

- Python's dynamic typing means variable types are inferred at runtime and can change; this gives flexibility but requires discipline with type hints
- Numbers include `int` (arbitrary precision), `float` (IEEE 754 double), and `complex`; beware of floating-point precision issues
- Strings are immutable Unicode sequences with rich methods; f-strings are the preferred formatting approach
- `None` is Python's null singleton; always use `is` for None checks, never `==`
- Operators follow standard precedence; use parentheses to make complex expressions readable
- Type conversion can be implicit (int → float) or explicit (str → int); explicit is safer
- `is` checks object identity (memory address), not structural equality; use `==` for value comparison
- PEP 8 defines Python's style: 4-space indentation, snake_case, 79-character lines, organized imports
- Short-circuit evaluation: `and`/`or` stop evaluating once the result is determined
- Reference semantics mean assignment to mutable objects creates aliases, not copies

## Practical Takeaways

| Scenario | Do This | Avoid This |
|----------|---------|------------|
| String formatting | f-strings: `f"Hello {name}"` | `"Hello " + name` or `%` formatting |
| None check | `if x is None:` | `if x == None:` with value comparison |
| Large numbers | `1_000_000` for readability | `1000000` hard to read |
| Division with integer result | `//` operator | `int(a / b)` |
| Precision | `Decimal` for financial/monetary | `float` for exact money |
| Type checking | `isinstance(x, int)` | `type(x) == int` |
| Style | `black` + `ruff` auto-format | Manual formatting |

## Interview Q&A

<details class="tp-qa-card" data-qid="p01-s01-q1">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q1: What is the difference between `is` and `==` in Python?
  </summary>
  <div class="tp-qa-answer">
    <p><code>is</code> checks <strong>object identity</strong> — whether two variables point to the same memory location. <code>==</code> checks <strong>value equality</strong> — whether the objects have the same value.</p>
    <pre><code>a = [1, 2, 3]
b = [1, 2, 3]
c = a
print(a == b)  # True — same value
print(a is b)  # False — different objects
print(a is c)  # True — same object</code></pre>
    <p>Use <code>is</code> for: <code>None</code>, <code>True</code>, <code>False</code>, singletons. Use <code>==</code> for everything else.</p>
    <p><strong>Interview follow-up</strong>: Python caches small integers (-5 to 256), so <code>x is y</code> may be True for integers in that range, but you should never rely on this behavior.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q2">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q2: Explain Python's dynamic typing. How is it different from static typing?
  </summary>
  <div class="tp-qa-answer">
    <p>Dynamic typing means variable types are inferred at runtime and can change throughout execution:</p>
    <pre><code>x = 42        # int
x = "hello"   # now str — no error</code></pre>
    <p>In statically-typed languages (Java, TypeScript, C++), once a variable is declared with a type, it cannot hold values of a different type.</p>
    <p><strong>Advantages</strong>: Faster prototyping, cleaner syntax, duck typing.</p>
    <p><strong>Disadvantages</strong>: Type errors surface at runtime, harder to refactor large codebases, less IDE support.</p>
    <p><strong>Modern Python</strong>: Use type hints (<code>def add(x: int, y: int) -> int:</code>) and tools like <code>mypy</code> to get static analysis benefits while keeping dynamic semantics.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q3">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q3: What is the difference between `//` and `/` in Python?
  </summary>
  <div class="tp-qa-answer">
    <p><code>/</code> performs <strong>true division</strong> — always returns a float:</p>
    <pre><code>print(5 / 2)   # 2.5
print(4 / 2)   # 2.0</code></pre>
    <p><code>//</code> performs <strong>floor division</strong> — returns the floor of the quotient (rounds toward negative infinity):</p>
    <pre><code>print(5 // 2)   # 2
print(-5 // 2)  # -3 (floor, not truncate toward zero)</code></pre>
    <p>This differs from other languages (Java, C) where integer division truncates toward zero (<code>-5/2 = -2</code>).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q4">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q4: What are f-strings and why are they preferred over other string formatting methods?
  </summary>
  <div class="tp-qa-answer">
    <p>f-strings (formatted string literals, Python 3.6+) allow inline expression evaluation:</p>
    <pre><code>name = "Alice"
age = 30
print(f"{name} is {age} years old.")</code></pre>
    <p><strong>Advantages over other methods</strong>:</p>
    <ul>
      <li><strong>vs <code>%</code> formatting</strong>: More readable, less error-prone with types</li>
      <li><strong>vs <code>.format()</code></strong>: More concise, expressions inline</li>
      <li><strong>Performance</strong>: Fastest of all formatting methods (compiled at bytecode level)</li>
    </ul>
    <p>Limitations: Cannot be used with dynamic format strings or in logging (use lazy <code>%</code> there).</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q5">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q5: How does Python handle memory management and garbage collection?
  </summary>
  <div class="tp-qa-answer">
    <p>Python uses <strong>reference counting</strong> as its primary memory management strategy, supplemented by a <strong>generational garbage collector</strong> for circular references.</p>
    <p><strong>Reference counting</strong>: Each object maintains a count of references. When the count reaches zero, the object is deallocated immediately.</p>
    <pre><code>import sys
a = []
print(sys.getrefcount(a))  # 2 (a + argument)
b = a
print(sys.getrefcount(a))  # 3
del b                       # reference count drops to 2</code></pre>
    <p><strong>Garbage collector</strong>: Handles circular references that reference counting can't resolve. Objects are tracked in three generations — newer objects are collected more frequently.</p>
    <p><strong>CPython specifics</strong>: GIL (Global Interpreter Lock) prevents true parallel execution of Python bytecode. Memory is allocated from a private heap managed by the Python memory manager.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q6">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q6: What is the difference between mutable and immutable objects in Python?
  </summary>
  <div class="tp-qa-answer">
    <p><strong>Immutable objects</strong> cannot be changed after creation. Any "modification" creates a new object:</p>
    <ul>
      <li><code>int</code>, <code>float</code>, <code>bool</code>, <code>str</code>, <code>tuple</code>, <code>frozenset</code>, <code>bytes</code></li>
    </ul>
    <p><strong>Mutable objects</strong> can be modified in-place:</p>
    <ul>
      <li><code>list</code>, <code>dict</code>, <code>set</code>, custom class instances</li>
    </ul>
    <pre><code># Immutable — str
s = "hello"

## s[0] = "H"  # TypeError
s = "H" + s[1:]  # creates new string

## Mutable — list
lst = [1, 2, 3]
lst[0] = 99  # modifies in place
print(lst)   # [99, 2, 3]</code></pre>
    <p><strong>Interview insight</strong>: This is why default arguments in functions should never be mutable:</p>
    <pre><code>def bad_append(item, lst=[]):  # Default list is created ONCE
    lst.append(item)
    return lst

print(bad_append(1))  # [1]
print(bad_append(2))  # [1, 2] — same list!

def good_append(item, lst=None):
    if lst is None:
        lst = []
    lst.append(item)
    return lst</code></pre>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q7">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q7: Explain short-circuit evaluation in Python with examples.
  </summary>
  <div class="tp-qa-answer">
    <p>Short-circuit evaluation means that <code>and</code>/<code>or</code> stop evaluating expressions as soon as the result is determined:</p>
    <pre><code># and — stops at first False-like value
def expensive():
    print("expensive called")
    return True

print(False and expensive())  # False — expensive() NOT called
print(True and expensive())   # True — expensive() IS called

## or — stops at first True-like value
print(True or expensive())    # True — expensive() NOT called
print(False or expensive())   # True — expensive() IS called</code></pre>
    <p><strong>Practical uses</strong>:</p>
    <ul>
      <li>Guard conditions: <code>if user and user.is_active:</code></li>
      <li>Default values: <code>name = input_name or "default"</code></li>
      <li>Conditional execution: <code>debug and print("debug message")</code></li>
    </ul>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q8">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q8: What is the purpose of underscores in Python variable names?
  </summary>
  <div class="tp-qa-answer">
    <p>Underscores have several conventions and special meanings in Python:</p>
    <table>
      <tr><th>Pattern</th><th>Meaning</th></tr>
      <tr><td><code>_variable</code></td><td>Internal/private convention (not enforced)</td></tr>
      <tr><td><code>variable_</code></td><td>Avoids conflict with reserved keyword: <code>class_</code></td></tr>
      <tr><td><code>__variable</code></td><td>Name mangling: becomes <code>_ClassName__variable</code></td></tr>
      <tr><td><code>__variable__</code></td><td>Magic methods/dunder: <code>__init__</code>, <code>__str__</code></td></tr>
      <tr><td><code>_</code> (single)</td><td>Throwaway variable: <code>for _ in range(10):</code></td></tr>
      <tr><td><code>__</code> (double)</td><td>Name mangling for subclass-safe attributes</td></tr>
    </table>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q9">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q9: How do you handle floating-point precision issues in Python?
  </summary>
  <div class="tp-qa-answer">
    <p>Floating-point numbers are stored in binary (IEEE 754), causing representation errors for decimal fractions:</p>
    <pre><code>print(0.1 + 0.2)  # 0.30000000000000004</code></pre>
    <p><strong>Solutions</strong>:</p>
    <ol>
      <li><strong>Round for display</strong>: <code>print(round(0.1 + 0.2, 2))  # 0.3</code></li>
      <li><strong>Use tolerance for comparison</strong>:
        <pre><code>tolerance = 1e-9
if abs(a - b) < tolerance:  # instead of a == b</code></pre></li>
      <li><strong>Use <code>Decimal</code></strong> for financial calculations:
        <pre><code>from decimal import Decimal, ROUND_HALF_UP
Decimal('0.1') + Decimal('0.2')  # Decimal('0.3')</code></pre></li>
      <li><strong>Use <code>Fraction</code></strong> for exact rational arithmetic:
        <pre><code>from fractions import Fraction
Fraction(1, 10) + Fraction(2, 10)  # Fraction(3, 10)</code></pre></li>
    </ol>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

<details class="tp-qa-card" data-qid="p01-s01-q10">
  <summary class="tp-qa-question">
    <span class="tp-qa-status"></span>
    Q10: What are the key PEP 8 rules every Python developer should follow?
  </summary>
  <div class="tp-qa-answer">
    <p>PEP 8 is Python's official style guide. Key rules:</p>
    <ol>
      <li><strong>Indentation</strong>: 4 spaces per level, no tabs</li>
      <li><strong>Line length</strong>: Max 79 characters for code, 72 for docstrings</li>
      <li><strong>Blank lines</strong>: 2 blank lines before top-level definitions, 1 between methods</li>
      <li><strong>Imports</strong>: One per line, grouped: stdlib → third-party → local</li>
      <li><strong>Naming</strong>: <code>snake_case</code> for functions/vars, <code>UPPER_CASE</code> for constants, <code>PascalCase</code> for classes</li>
      <li><strong>Spaces</strong>: Around operators (<code>x = 1</code>), after commas (<code>func(a, b)</code>)</li>
      <li><strong>Docstrings</strong>: Triple quotes, descriptive, present tense</li>
      <li><strong>Comparisons to None</strong>: Use <code>is</code>/<code>is not</code>, never <code>==</code></li>
    </ol>
    <p>Use <code>black</code> for auto-formatting and <code>ruff</code> for linting to enforce PEP 8 automatically.</p>
  </div>
  <button class="tp-qa-mark-btn">✅ Mark Reviewed</button>
  <button class="tp-qa-bookmark-btn">🔖 Bookmark</button>
</details>

## Chapter Quiz

**Q1**: What is the output of `print(3 * 2 ** 3)`?

a) 18
b) 24
c) 216
d) 12

<details class="tp-qa-card" data-qid="p01-s01-quiz1"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) 24</strong></p><p>Because <code>**</code> has higher precedence than <code>*</code>, so <code>2 ** 3 = 8</code>, then <code>3 * 8 = 24</code>.</p></div></details>

**Q2**: What does `print(type(3.0))` output?

a) `<class 'int'>`
b) `<class 'float'>`
c) `<class 'double'>`
d) `<class 'number'>`

<details class="tp-qa-card" data-qid="p01-s01-quiz2"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) `<class 'float'>`</strong></p><p>In Python, all decimal numbers are `float` type, regardless of having a fractional part.</p></div></details>

**Q3**: Which of these checks if `x` is not `None`?

a) `if x != None:`
b) `if x is not None:`
c) `if not x is None:`
d) Both b and c

<details class="tp-qa-card" data-qid="p01-s01-quiz3"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: d) Both b and c</strong></p><p>While both are valid, <code>if x is not None:</code> is the preferred idiom per PEP 8.</p></div></details>

**Q4**: What is the value of `int("FF", 16)`?

a) 255
b) 15
c) 16
d) ValueError

<details class="tp-qa-card" data-qid="p01-s01-quiz4"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: a) 255</strong></p><p>The second argument specifies the base. Hexadecimal FF = 15*16 + 15 = 255.</p></div></details>

**Q5**: What does `print(5 // -2)` output?

a) -2
b) -3
c) -2.5
d) 2

<details class="tp-qa-card" data-qid="p01-s01-quiz5"><summary>Show Answer</summary><div class="tp-qa-answer"><p><strong>Answer: b) -3</strong></p><p>Floor division rounds toward negative infinity, not toward zero. <code>-5/2 = -2.5</code>, floor is <code>-3</code>.</p></div></details>

## Exercises

**Easy** — Write a program that converts Celsius to Fahrenheit and prints both values formatted to 1 decimal place.

**Easy** — Given a string, extract and print the first, last, and middle characters using slicing.

**Medium** — Write a function that takes a list of numbers and returns a tuple of (min, max, mean, median). Handle empty lists gracefully.

**Medium** — Use short-circuit evaluation to safely access a nested dictionary: `data = {"user": {"profile": {"name": "Alice"}}}`. Extract `name` without causing KeyError if any key is missing.

**Hard** — Benchmark `10 + 20` vs `Decimal('10') + Decimal('20')` for 100,000 iterations. Report the time difference and explain why one is faster.

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

## Placement Section

### Top 10 Interview Questions

#### Google Style
1. Explain the time and space trade-offs of 01-python-programming. When would you choose one approach over another?
2. Design a system that efficiently handles 01-python-programming at scale (millions of requests/second).

#### Amazon Style
1. Tell me about a time you had to optimize a system related to 01-python-programming. What was your approach and what was the result?
2. How would you explain 01-python-programming to a non-technical stakeholder?

#### Microsoft Style
1. How does 01-python-programming integrate with enterprise systems and cloud architectures?
2. What are the security implications of 01-python-programming?

#### NVIDIA Style
1. How would you optimize 01-python-programming for GPU-accelerated computing?
2. What parallel processing patterns apply to 01-python-programming?

#### AI Startup Style
1. How would you implement 01-python-programming in a cost-effective, scalable way for a startup?
2. What's the fastest way to prototype a solution using 01-python-programming?

### Resume Tips
- **Technical Skills**: List 01-python-programming under relevant technical skills
- **Project Description**: "Implemented 01-python-programming to [specific outcome], reducing [metric] by [X]%"
- **Keywords**: Include 01-python-programming in your skills section for ATS optimization

### Interview Day Checklist
- [ ] Review core concepts of 01-python-programming
- [ ] Practice 3-5 problems related to 01-python-programming
- [ ] Prepare 2 real-world examples of using 01-python-programming
- [ ] Know the time/space complexity of common 01-python-programming operations
- [ ] Have questions ready about how the company uses 01-python-programming> **Next**: [02 — Control Flow →](02-control

### True/False

**T/F 1**: Python is a statically typed language.
**Answer**: False — Python is dynamically typed. Variable types are determined at runtime.

**T/F 2**: Python uses 0-based indexing.
**Answer**: True — Python lists, strings, and tuples use 0-based indexing.

**T/F 3**: The `len()` function returns the number of elements in a list.
**Answer**: True — len([1,2,3]) returns 3.

**T/F 4**: Python variables must be declared before use.
**Answer**: False — Python doesn't require explicit variable declaration.

**T/F 5**: `None` is a keyword in Python.
**Answer**: True — None represents the absence of a value.

### Fill in the Blank

**FIB 1**: In Python, the ________ function converts a string to an integer.
**Answer**: int()

**FIB 2**: The ________ keyword is used to define a function in Python.
**Answer**: def

**FIB 3**: Python's ________ data type is immutable.
**Answer**: tuple (and str, frozenset)

**FIB 4**: The ________ operator is used for exponentiation in Python.
**Answer**: ** (double asterisk)

**FIB 5**: `print(type(5))` outputs ________.
**Answer**: <class 'int'>

### Scenario Questions

**Scenario 1**: You need to process a large CSV file (10GB) but your machine only has 16GB RAM. How would you handle this in Python?

**Answer**: Use a generator to read line by line: `with open('file.csv') as f: for line in f: process(line)`. This avoids loading the entire file into memory. Alternatively, use pandas `chunksize` parameter: `pd.read_csv('file.csv', chunksize=1000)`.

**Scenario 2**: You have a list of dictionaries and need to sort by a specific key. How would you do this?

**Answer**: Use `sorted(data, key=lambda x: x['key'])` or `data.sort(key=lambda x: x['key'])`. For descending order, add `reverse=True`. This uses Python's stable sort and is O(n log n).

### Output Questions

**Output 1**: What is the output of `print(2 ** 3 ** 2)`?
**Answer**: 512 — Python evaluates right to left for exponentiation: 3²=9, then 2⁹=512.

**Output 2**: What is `print('hello' * 3)`?
**Answer**: hellohellohello — String repetition operator.

-flow.md)


## Difficulty Level

**Level**: Beginner
**Estimated Study Time**: 30-45 minutes
**Prerequisites**: Complete understanding of previous modules recommended

## Tips & Tricks

**Tip**: Start with the basics — understand the fundamental concepts before moving to advanced topics.

**Tip**: Practice actively — don't just read, implement the code examples yourself.

**Tip**: Connect to prior knowledge — relate new concepts to what you learned in previous modules.

**Pro Tip**: Focus on understanding, not memorizing — understand why things work, not just how.

**Pro Tip**: Review regularly — revisit key concepts after a few days to reinforce learning.

## Memory Tricks

- **Acronym Method**: Create acronyms for lists of concepts
- **Visualization**: Draw diagrams to visualize abstract concepts
- **Teach someone else**: Explaining concepts to others reinforces your understanding
- **Connect to real-world**: Relate technical concepts to everyday experiences
- **Chunking**: Break complex topics into smaller, manageable pieces

## Further Reading

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers and blog posts from leading AI labs

## Related Topics

- How this connects to Python Programming fundamentals
- Prerequisites for advanced topics in this module
- Real-world applications in AI engineering systems
- Interview questions that test deep understanding

## FAQs

**Q: How long does it take to master python basics?
**A**: With consistent practice, 2-4 weeks for basic proficiency, 2-3 months for advanced mastery.

**Q: Do I need to memorize all the details?
**A**: Focus on understanding the core principles. Details can be looked up, but understanding cannot.

**Q: What's the best way to practice?
**A**: Implement the code examples, then modify them to solve different problems. Build small projects.

**Q: How often should I review this material?
**A**: Review after 1 day, 3 days, 1 week, and 1 month for long-term retention.

## Important Notes

> **Note**: Understanding the fundamentals is more important than memorizing syntax.

> **Note**: Don't skip the exercises — they reinforce critical concepts.

> **Note**: This topic frequently appears in technical interviews at top companies.

> **Note**: In real systems, these concepts are used daily by AI engineers.

## Historical Context

The Evolution of this technology reflects decades of research and practical engineering experience.

Understanding the evolution of python basics helps appreciate why current approaches exist. These concepts have been developed over decades of computer science research and practical engineering experience.

## Coding Standards

- Follow consistent naming conventions (camelCase for variables, PascalCase for types)
- Add clear comments explaining complex logic
- Keep functions focused on a single responsibility
- Write self-documenting code with meaningful names
- Handle errors gracefully and provide informative messages

## Security Considerations

- **Input Validation**: Always validate and sanitize inputs
- **Error Handling**: Don't expose internal details in error messages
- **Resource Limits**: Set appropriate limits to prevent denial of service
- **Authentication**: Ensure proper authentication and authorization
- **Data Protection**: Handle sensitive data according to security best practices

## ML Intuition

For AI engineering, understanding python basics at an intuitive level is crucial. Think of it as building mental models that help you reason about system behavior, debug issues, and make architectural decisions.

## Analogies

Think of python basics like learning a new language — start with basic vocabulary (fundamentals), then learn grammar (rules), and finally practice conversation (application). The more you practice, the more natural it becomes.

## Capstone Project Link

**Project**: Apply python basics concepts in a mini-project
**Goal**: Build a small application that demonstrates understanding of core principles
**Duration**: 2-4 hours
**Outcome**: Working implementation with documentation

## Flashcards

**Card 1**: What is the core concept of python basics?
**Answer**: The fundamental principle that enables efficient and scalable systems.

**Card 2**: When would you apply python basics in real systems?
**Answer**: When building production AI systems that require reliability, scalability, and maintainability.

**Card 3**: What are the common pitfalls to avoid?
**Answer**: Over-engineering, ignoring edge cases, and not considering production requirements.

## Study Plan

**Day 1**: Read theory and review examples (12 minutes)
**Day 2**: Complete exercises and practice (12 minutes)
**Day 3**: Review flashcards and take quiz (6 minutes)

## Research References

- Academic papers and conference proceedings (NeurIPS, ICML, ICLR)
- Industry whitepapers from leading AI companies
- Technical blogs from Google, Meta, OpenAI, Anthropic
- Open-source implementations and documentation

## Fine-Tuning Notes

When applying this topic to production, consider:
- Fine-tuning with LoRA or Adapters for domain adaptation
- Adapting general principles to your specific use cases
- Performance optimization for target hardware
- Cost considerations for deployment


## Open-Source Tools

- **LangChain**: Framework for building LLM-powered applications
- **LlamaIndex**: Data framework for connecting LLMs with external data
- **Hugging Face Transformers**: State-of-the-art ML models and datasets
- **Weights & Biases**: Experiment tracking and model evaluation
- **MLflow**: Open-source platform for ML lifecycle management
- **Prometheus + Grafana**: Monitoring and observability stack

## Debugging Guide

**Common Issues**:
- Check input validation and data types
- Verify API keys and authentication
- Monitor resource usage (CPU, memory, GPU)
- Review error logs for stack traces

**Debugging Steps**:
1. Reproduce the issue with minimal input
2. Add logging at key points
3. Check external dependencies
4. Verify configuration settings
5. Test with known-good inputs

## Mock Interview Section

**Quick Fire Questions**:
1. What is the core concept of Python Programming?
2. When would you use this in production?
3. What are the trade-offs?
4. How does this scale?
5. What are common pitfalls?

**Follow-up Questions**:
- How would you optimize this for 10x scale?
- What monitoring would you add?
- How would you test this in production?

## Optimized Implementation

For production systems, consider:
- **Caching**: Cache frequent computations and API responses
- **Batching**: Process multiple items together for efficiency
- **Async/Await**: Use non-blocking I/O for concurrent operations
- **Connection Pooling**: Reuse database and API connections
- **Lazy Loading**: Load resources only when needed

## References

- Official documentation and language specifications
- "Designing Data-Intensive Applications" by Martin Kleppmann
- "System Design Interview" by Alex Xu
- "AI Engineering" by Chip Huyen
- Research papers from NeurIPS, ICML, ICLR
- Industry blogs from Google, Meta, OpenAI, Anthropic

## Evaluation Metrics

**Model Evaluation**:
- Accuracy, Precision, Recall, F1-Score
- BLEU, ROUGE for text generation
- Latency, Throughput, Cost per inference

**System Evaluation**:
- End-to-end latency (p50, p95, p99)
- Error rate and availability
- Resource utilization (CPU, memory, GPU)

## Real-World Examples

**Industry Applications**:
- Google: Search ranking, translation, autocomplete
- Amazon: Product recommendations, Alexa, fraud detection
- Netflix: Content recommendations, personalization
- Tesla: Autonomous driving, computer vision
- OpenAI: ChatGPT, DALL-E, Codex

## Next Topic

After mastering Python Programming, continue to the next module in the curriculum to build upon these foundations and deepen your AI engineering expertise.