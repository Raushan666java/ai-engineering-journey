---
id: 03-control-flow
slug: /python-programming/03-control-flow
title: "Chapter 3: Control Flow"
sidebar_label: "Chapter 3: Control Flow"
sidebar_position: 3
---
# Chapter 3: Control Flow


> **Previous:** [Variables, Types, and Operators](./02-variables.md) | **Next:** [Loops and Iteration](./04-loops.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Write branching logic using if, elif, and else
- Use the match-case statement for structural pattern matching
- Chain comparisons for concise range checks
- Understand short-circuit evaluation
- Apply the ternary conditional expression

![Control Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/03-control-flow.png)



## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
| 3.1 | if Statement | Branching with if/elif/else |
| 3.2 | Truthiness | Truthy/falsy values in conditions |
| 3.3 | Chained Comparisons | 1 &lt; x < 10 syntax |
| 3.4 | Short-Circuit | and/or lazy evaluation |
| 3.5 | Ternary Expression | x if cond else y |
| 3.6 | match-case | Structural pattern matching (3.10+) |
| 3.7 | Conditional Assignment | Walrus operator := |
| 3.8 | Boolean Precedence | not > and > or |


## Chapter Roadmap

```mermaid
flowchart LR
    A[if/elif/else] --> B[Truthiness]
    B --> C[Chained Comparisons]
    C --> D[Short-Circuit]
    D --> E[Ternary]
    E --> F[match-case]
    F --> G[Walrus Operator]
    G --> H[Precedence]
```

## 3.1 The if Statement

> **One-Sentence Takeaway:** if/elif/else chains replace the switch statement found in other languages.

The `if` statement executes a block when a condition is truthy:

```python
temperature = 30
if temperature > 25:
    print("It is hot today")
```


> **Remember:** Every if can stand alone -- elif and else are optional. An if with no else simply does nothing when false.
Add an `else` clause for the complementary case:

```python
temperature = 10
if temperature > 25:
    print("It is hot today")
else:
    print("It is cool today")
```

Chain multiple conditions with `elif`:

```python
temperature = 15
if temperature > 35:
    print("Extreme heat")
elif temperature > 25:
    print("Warm")
elif temperature > 15:
    print("Mild")
elif temperature > 5:
    print("Cool")
else:
    print("Cold")
```

Unlike some languages, Python has no `switch` statement (prior to 3.10). The `elif` chain serves the same purpose, and the `match-case` statement provides a more powerful alternative in Python 3.10+.


> **Pro Tip:** Mixing tabs and spaces causes IndentationError. Configure your editor to convert tabs to spaces for Python files.
Indentation is the only delimiter -- there is no `endif` or closing brace. The colon after each condition is mandatory:

```python
if x:     # colon required
    ...   # indented block

# Correct:
if x > 0:
    pass
else:
    pass
```

### TypeScript Parallel

```typescript
// TypeScript: if/else if/else with curly braces
let temperature: number = 30;
if (temperature > 35) {
    console.log("Extreme heat");
} else if (temperature > 25) {
    console.log("Warm");
} else if (temperature > 15) {
    console.log("Mild");
} else if (temperature > 5) {
    console.log("Cool");
} else {
    console.log("Cold");
}

// TypeScript switch statement (Python's if/elif/else is closer to this)
switch (temperature) {
    case 0:
        console.log("Freezing");
        break;
    case 100:
        console.log("Boiling");
        break;
    default:
        console.log("Neither");
        break;
}
```

Python uses `elif`; TypeScript uses `else if`. Python has no `switch`-statement (until 3.10's match-case); TypeScript has a C-style `switch`.

```mermaid
flowchart TD
    subgraph Python[Python if/elif/else]
        A1[if condition] -->|True| B1[if block]
        A1 -->|False| C1[elif condition]
        C1 -->|True| D1[elif block]
        C1 -->|False| E1[elif ...]
        E1 -->|None True| F1[else block]
    end

    subgraph TS[TypeScript if/else if/else + switch]
        A2[if (condition)] -->|True| B2[if body]
        A2 -->|False| C2[else if]
        C2 -->|True| D2[else if body]
        C2 -->|False| E2[else => default]
        F2[switch (value)] --> G2[case matching]
        G2 --> H2[break / default]
    end
```

## 3.2 Truthiness and Condition Evaluation

> **One-Sentence Takeaway:** Any value works as a condition -- empty collections, zero, and None are falsy; everything else is truthy.

Conditions do not need to be boolean. Any expression can serve as a condition:

```python
name = input("Enter your name: ")
if name:                 # truthy if non-empty string
    print(f"Hello, {name}")
else:
    print("No name entered")
```

Common truthiness pitfalls:

```python
# Checking if a list is empty
items = []
if items:           # Pythonic -- no len(items) > 0
    print(items[0])
else:
    print("Empty")

# None check
result = None
if result is not None:   # correct
    print(result)

if result:               # wrong if result could be 0 or False
    print(result)
```

### TypeScript Parallel

```typescript
// TypeScript: same truthiness concept
let name: string = "";  // empty string
if (name) {             // false for empty string
    console.log(`Hello, ${name}`);
} else {
    console.log("No name entered");
}

// Falsy values: false, 0, NaN, "", null, undefined
// Python falsy: False, 0, 0.0, "", [], {}, (), set(), None

// TypeScript has extra falsy values: NaN, undefined
let notANumber: number = NaN;
if (notANumber) {
    // This block NEVER runs - NaN is falsy in TypeScript
}
```

| Language | Falsy Values |
|----------|-------------|
| Python | `False`, `None`, `0`, `0.0`, `""`, `[]`, `{}`, `()`, `set()` |
| TypeScript | `false`, `null`, `undefined`, `0`, `NaN`, `""` |
| Extra in TS | `undefined`, `NaN` |
| Extra in Python | `[]`, `{}`, `()`, `set()` (all empty containers) |

## 3.3 Chained Comparisons

> **One-Sentence Takeaway:** Python's `1 < x < 10` syntax is more readable and efficient than `1 < x and x < 10`.

Python supports chained comparisons naturally:

```python
x = 5
print(1 < x < 10)         # True  (1 < x and x < 10)
print(1 < x < 5)          # False (1 < x and x < 5)
print(5 == x > 3)         # True  (5 == x and x > 3)
print(10 > x > 2)         # True
```

Chained comparisons evaluate each operand only once and short-circuit:

```python
def get_value():
    print("get_value called")
    return 5

print(1 < get_value() < 10)  # get_value called once
```

This is more readable and efficient than the equivalent `1 < x and x < 10`.

### TypeScript Parallel

```typescript
// TypeScript: chained comparison NOT supported
// Must use && explicitly
let x: number = 5;
console.log(1 < x && x < 10);   // true  (Python: 1 < x < 10)
console.log(1 < x && x < 5);    // false (Python: 1 < x < 5)

// Python evaluates the middle operand ONCE
// TypeScript evaluates x TWICE -- not identical behavior
function getValue(): number {
    console.log("getValue called");
    return 5;
}
console.log(1 < getValue() && getValue() < 10);  // getValue called TWICE!
```

Python's chained comparison is a unique feature. TypeScript (and most C-family languages) require explicit `&&` and evaluate the middle operand twice.

## 3.4 Short-Circuit Evaluation

> **One-Sentence Takeaway:** and stops at the first falsy operand; or stops at the first truthy operand.

The logical operators `and` and `or` stop evaluating as soon as the result is determined:

```python
def divide(a, b):
    return b != 0 and a / b   # returns False if b is 0, else the quotient

print(divide(10, 2))   # 5.0
print(divide(10, 0))   # False (no ZeroDivisionError)
```

`or` can provide default values:

```python
name = input("Name: ") or "Guest"
print(f"Hello, {name}")
```

If the input is empty, `""` is falsy, so `or` returns `"Guest"`.

This pattern is less common since the walrus operator and `None`-aware idioms gained popularity, but it remains concise for simple defaults.

### TypeScript Parallel

```typescript
// TypeScript: same short-circuit behavior
function divide(a: number, b: number): number | boolean {
    return b !== 0 && a / b;   // returns false if b is 0
}

console.log(divide(10, 2));    // 5
console.log(divide(10, 0));    // false (no error)

// Default value (same pattern as Python)
const input = "";  // user input (empty)
const name = input || "Guest";
console.log(`Hello, ${name}`);  // Hello, Guest

// TypeScript also has nullish coalescing:
const displayName = input ?? "Guest";
// ?? only checks null/undefined, not empty string
```

## 3.5 Ternary Conditional Expression

> **One-Sentence Takeaway:** x if cond else y is an expression, not a statement, so it can be used inside other expressions.

Python's conditional expression (ternary operator) takes the form:

```python
value_if_true if condition else value_if_false
```

```python
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)   # Adult
```

Ternary expressions are expressions, not statements -- they can be used inside other expressions:

```python
print("Even" if 5 % 2 == 0 else "Odd")   # Odd

# Nesting (discouraged for readability)
result = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
```


> **Warning:** Nested ternaries are hard to read. Limit to one level; use if-elif-else blocks for anything more complex.
Avoid deep nesting. For complex logic, use a full `if-elif-else` block.

### TypeScript Parallel

```typescript
// TypeScript: C-style ternary operator
let age: number = 20;
let status: string = age >= 18 ? "Adult" : "Minor";
console.log(status);   // Adult

// Python:    value_if_true if condition else value_if_false
// TypeScript: condition ? value_if_true : value_if_false

// Can be used in expressions:
console.log(5 % 2 === 0 ? "Even" : "Odd");   // Odd

// Nesting (also discouraged):
let score: number = 85;
let result: string = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

| Feature | Python | TypeScript |
|---------|--------|------------|
| Syntax | `x if cond else y` | `cond ? x : y` |
| Expression type | Expression (usable inline) | Expression (usable inline) |
| Readability | Reads naturally as English | Compact |

## 3.6 match-case (Structural Pattern Matching)

> **One-Sentence Takeaway:** match-case supports literals, captures, guards, sequences, mappings, and class patterns.

Introduced in Python 3.10, `match-case` provides powerful pattern matching inspired by Scala, Rust, and Haskell:

### 3.6.1 Literal Patterns


```python
def describe_status(code: int) -> str:
    match code:
        case 200:
            return "OK"
        case 404:
            return "Not Found"
        case 500:
            return "Internal Server Error"
        case _:              # wildcard (default)
            return "Unknown"

print(describe_status(404))  # Not Found
```

### 3.6.2 Capture and Guard Patterns


```python
def classify_point(point):
    match point:
        case (0, 0):
            return "Origin"
        case (0, y):
            return f"On Y axis at y={y}"
        case (x, 0):
            return f"On X axis at x={x}"
        case (x, y) if x == y:
            return f"On diagonal at ({x}, {y})"
        case (x, y):
            return f"At ({x}, {y})"
        case _:
            return "Not a 2D point"

print(classify_point((0, 5)))  # On Y axis at y=5
print(classify_point((3, 3)))  # On diagonal at (3, 3)
```

### 3.6.3 Sequence and Mapping Patterns


```python
def handle_command(command):
    match command.split():
        case ["quit"]:
            print("Exiting...")
        case ["look", direction]:
            print(f"Looking {direction}")
        case ["go", ("north" | "south" | "east" | "west") as dir]:
            print(f"Going {dir}")
        case ["take", *items]:
            print(f"Taking {items}")
        case _:
            print("Unknown command")

handle_command("go north")      # Going north
handle_command("take sword potion")  # Taking ['sword', 'potion']
```

### 3.6.4 Class Patterns


```python
from dataclasses import dataclass

@dataclass
class Person:
    name: str
    age: int

def greet(person):
    match person:
        case Person(name="Alice", age=a) if a > 30:
            print(f"Hi Alice, you're {a}")
        case Person(name=n, age=a) if a < 18:
            print(f"Hello {n}, young one")
        case Person(name=n):
            print(f"Hey {n}")
        case _:
            print("Not a person")

greet(Person("Alice", 35))   # Hi Alice, you're 35
greet(Person("Bob", 15))     # Hello Bob, young one
```

Match-case is exhaustive -- if no pattern matches and no wildcard `_` is provided, no exception is raised (the match simply does nothing). Use wildcards to avoid silent failures.

### TypeScript Parallel

```typescript
// TypeScript: switch statement is the closest equivalent
// (less powerful than Python's match-case)

function describeStatus(code: number): string {
    switch (code) {
        case 200: return "OK";
        case 404: return "Not Found";
        case 500: return "Internal Server Error";
        default:  return "Unknown";
    }
}

console.log(describeStatus(404));  // Not Found

// TypeScript does NOT have destructuring patterns in switch
// No guards in case clauses
// No sequence/mapping/class patterns
```

## 3.7 Conditional Expressions and Assignment

> **One-Sentence Takeaway:** The walrus operator := assigns and returns a value in a single expression.

The walrus operator `:=` can streamline conditional assignments:

```python
# Without walrus:
data = fetch_data()
if data is None:
    data = []

# With walrus:
if (data := fetch_data()) is None:
    data = []
```

```python
# In comprehensions
results = [y for x in range(10) if (y := x ** 2) > 20]
print(results)  # [25, 36, 49, 64, 81]
```

### TypeScript Parallel

```typescript
// TypeScript: NO walrus operator equivalent
// Must separate assignment from condition

function fetchData(): string[] | null {
    return null;
}

// TypeScript requires two statements:
let data = fetchData();
if (data === null) {
    data = [];
}

// No inline assignment in conditions
// Python: if (n := len(items)) > 0: ...
// TypeScript: const n = items.length; if (n > 0) { ... }
```

## 3.8 Boolean Operator Precedence in Conditions

> **One-Sentence Takeaway:** not has highest precedence, then and, then or -- parenthesise when mixing them.

Understanding precedence is critical for complex conditions:

```python
# Equivalent to (a and b) or c  -- and has higher precedence
if a and b or c:
    pass

# Explicit grouping
if (a and b) or c:
    pass

if a and (b or c):
    pass
```

When mixing `and` and `or`, parenthesise for clarity:

```python
valid = (age >= 18) and (has_id or is_vip)
```

### TypeScript Parallel

```typescript
// TypeScript: same precedence ordering: ! > && > ||
// Python: not > and > or
// TypeScript: ! > && > ||

let valid: boolean = (age >= 18) && (hasId || isVip);
```

## Concept Comparison Table

| Feature | Python | C/Java | JavaScript |
|---|---|---|---|
| Branching | if/elif/else | if/else if/else | if/else if/else |
| Switch | match-case (3.10+) | switch/case | switch/case |
| Ternary | x if cond else y | cond ? x : y | cond ? x : y |
| Logical | and, or, not | &&, ||, ! | &&, ||, ! |
| Chained compare | 1 &lt; x < 10 | Not supported | Not supported |


## Quick Reference

```python
# if-elif-else
if condition:
    pass
elif other:
    pass
else:
    pass

# Ternary
value = x if condition else y

# match-case (3.10+)
match value:
    case 1: print("one")
    case _: print("other")

# Chained comparison
if 0 < x < 100:
    print("in range")

# Walrus
if (n := len(items)) > 0:
    print(f"Count: {n}")
```

## Practical Takeaways

| Concept | Key Point | Common Mistake |
|---------|-----------|----------------|
| if/elif/else | elif chains replace switch | Using `else if` instead of `elif` |
| Truthiness | Empty = falsy, non-empty = truthy | Using `if result:` when `result` could be valid zero |
| Chained comparison | `1 < x < 10` is Pythonic | Writing `if x > 10 and x < 20` instead of `10 < x < 20` |
| Ternary | `x if cond else y` | Putting complex logic in ternaries |
| match-case | Use `_` for default case | Forgetting wildcard causes silent fall-through |
| Python vs TS | Python has chained comparisons, walrus; TS has switch | Expecting same syntax across languages |

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
| Data Validation | Input sanitisation with truthiness | 3.2 |
| API Dev | Status code matching with match-case | 3.6 |
| Game Dev | State machines with match-case | 3.6.2 |
| Scripting | Safe file checks with short-circuit | 3.4 |


## Chapter Quiz

**Q1.** Which of the following is falsy in Python?
- A) [0]
- B) "" **<-- Correct**
- C) "False"
- D) -1

**Q2.** What does print(3 &lt; 5 &gt; 2) output?
- A) False
- B) True **<-- Correct**
- C) SyntaxError
- D) (3 &lt; 5) &gt; 2

**Q3.** What is x after `x = "A" if False else "B"`?
- A) "A"
- B) "B" **<-- Correct**
- C) False
- D) None

**Q4.** In match-case, what does `_` represent?
- A) The default value
- B) The wildcard pattern **<-- Correct**
- C) A variable capture
- D) Syntax error

**Q5.** not True and False or True evaluates to:
- A) True **<-- Correct**
- B) False
- C) None
- D) SyntaxError


```typescript
// Chapter 3: TypeScript Control Flow Equivalents
// Python: if/elif/else
function grade(score: number): string {
  if (score >= 90) return "A";
  else if (score >= 80) return "B";
  else if (score >= 70) return "C";
  else if (score >= 60) return "D";
  else return "F";
}

// Python: ternary expression (x if cond else y)
const status: string = grade(85) === "A" ? "Excellent" : "Keep trying";
// Equivalent Python: status = "Excellent" if grade(85) == "A" else "Keep trying"

// Python: match-case (3.10+) → TypeScript: switch
function describe(value: unknown): string {
  switch (typeof value) {
    case "number":
      return `Number: ${value}`;
    case "string":
      return `String (${value.length} chars)`;
    case "boolean":
      return value ? "Boolean: true" : "Boolean: false";
    default:
      return `Unknown type: ${String(value)}`;
  }
}

// Python: chained comparisons (1 < x < 10) must be expanded
function isBetween(x: number, lo: number, hi: number): boolean {
  return x > lo && x < hi;
}

// Python: short-circuit evaluation works identically
function validate(input: string | null): boolean {
  return input !== null && input.length > 0;
}

// Python: match-case with pattern matching has no TS equivalent
// but destructuring + switch approximates some use cases
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rect"; width: number; height: number };

function area(shape: Shape): number {
  if (shape.kind === "circle") return Math.PI * shape.radius ** 2;
  if (shape.kind === "rect") return shape.width * shape.height;
  throw new Error("Unknown shape");
}
```

### More TypeScript Control Flow Patterns


```typescript
// Python: ternary with complex expressions
const score = 85;
const grade2 = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
// Equivalent Python: "A" if score >= 90 else "B" if score >= 80 else "C" else "F"

// Python: short-circuit for default values → TypeScript: ??
function getConfigValue(key: string, fallback: string): string {
  return process.env[key] ?? fallback;
}
// Python: os.environ.get(key, fallback)

// Python: match-case with OR patterns → TypeScript: fallthrough switch
function isWeekend(day: string): boolean {
  switch (day.toLowerCase()) {
    case "saturday":
    case "sunday":
      return true;
    default:
      return false;
  }
}
// Python: match day: case "saturday" | "sunday": return True

// Python: match-case with guards → TypeScript: if-else chain
interface Admin { kind: "admin"; permissions: string[]; }
interface User { kind: "user"; email: string; }
type Account = Admin | User;

function getInfo(account: Account): string {
  if (account.kind === "admin" && account.permissions.includes("manage")) {
    return "Admin with manage permissions";
  }
  if (account.kind === "user") {
    return `User: ${account.email}`;
  }
  return "Unknown";
}

// Python: while-else → TypeScript: flag-based pattern
let attempts = 0;
let connected = false;
while (attempts < 3 && !connected) {
  try {
    // try connecting
    connected = true;
  } catch {
    attempts++;
  }
}
if (!connected) {
  console.log("Failed after 3 attempts");
  // Python: else clause runs when while completes without break
}
```

### TypeScript Utilities

```typescript
// === If-Else Chain Optimizer ===
interface Branch { condition: string; cost: number; probability: number }
function optimizeChain(branches: Branch[]): { reordered: Branch[]; avgCost: number } {
  const sorted = [...branches].sort((a, b) => b.probability - a.probability);
  const avgCost = sorted.reduce((s, b, i) => s + b.cost * (i + 1) * b.probability, 0);
  return { reordered: sorted, avgCost: Math.round(avgCost * 100) / 100 };
}
const branches = [
  { condition: "score >= 90", cost: 2, probability: 0.15 },
  { condition: "score >= 80", cost: 2, probability: 0.25 },
  { condition: "score >= 70", cost: 2, probability: 0.30 },
  { condition: "else", cost: 2, probability: 0.30 },
];
console.log(optimizeChain(branches));

// === Switch/Case Builder ===
type CaseClause = { pattern: string; result: string };
function buildSwitch(expr: string, cases: CaseClause[], default_: string): string {
  const lines = cases.map((c) => `  case ${c.pattern}: return ${c.result};`);
  return `switch (${expr}) {\n${lines.join("\n")}\n  default: return ${default_};\n}`;
}
const sw = buildSwitch("status", [
  { pattern: '"ok"', result: '"Success"' },
  { pattern: '"err"', result: '"Error"' },
], '"Unknown"');
console.log(sw);

// === Ternary Converter (flatten if-else to ternary) ===
function toTernary(condition: string, thenVal: string, elseVal: string): string {
  return `${condition} ? ${thenVal} : ${elseVal}`;
}
console.log(toTernary("age >= 18", '"Adult"', '"Minor"'));

// === Guard Clause Detector ===
function needsGuard(conditions: string[], nestedBodies: number): boolean {
  return conditions.length > 1 && nestedBodies > 2;
}
console.log(needsGuard(["x == null", "y == null"], 3)); // true

// === Pattern Match Simulator (Python match-case in TS) ===
type MatchCase = { pattern: RegExp; handler: (...m: string[]) => string };
class PatternMatcher {
  private cases: MatchCase[] = [];
  add(pattern: RegExp, handler: (...m: string[]) => string): void { this.cases.push({ pattern, handler }); }
  match(input: string): string {
    for (const c of this.cases) {
      const m = input.match(c.pattern);
      if (m) return c.handler(...m.slice(1));
    }
    return "No match";
  }
}
const calc = new PatternMatcher();
calc.add(/^add (\d+) (\d+)$/, (a, b) => `${+a + +b}`);
calc.add(/^sub (\d+) (\d+)$/, (a, b) => `${+a - +b}`);
console.log(calc.match("add 5 3")); // 8
console.log(calc.match("sub 10 4")); // 6
```

### TypeScript Control Flow Patterns

```typescript
// === TypeScript guards vs Python isinstance ===
function process(input: string | number): string {
  if (typeof input === "string") return input.toUpperCase();
  if (typeof input === "number") return input.toFixed(2);
  return "unknown";
}

// === Switch (Python: match/case 3.10+) ===
type Command = "start" | "stop" | "restart" | "status";
function executeCommand(cmd: Command): string {
  switch (cmd) {
    case "start": return "Starting...";
    case "stop": return "Stopping...";
    case "restart": return "Restarting...";
    case "status": return "Checking status...";
    default: const _exhaustive: never = cmd; return _exhaustive;
  }
}
console.log(executeCommand("start"));

// === Ternary Operator (Python: conditional expression) ===
const age = 20;
const category = age >= 18 ? "Adult" : "Minor";
console.log(category); // Adult

// === Short-circuit evaluation ===
const user = { name: "Alice", preferences: { theme: "dark" } };
const theme = user.preferences?.theme ?? "light";
console.log(theme); // dark

// === Guard Clause Pattern ===
function processOrder(order: { status: string; amount: number }): string {
  if (!order) return "No order";
  if (order.status === "cancelled") return "Order cancelled";
  if (order.amount <= 0) return "Invalid amount";
  if (order.status === "pending") return "Processing payment...";
  return `Order ${order.status} for $${order.amount}`;
}

// === Pattern Matching with Discriminated Unions ===
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "triangle"; base: number; height: number };
function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle": return Math.PI * shape.radius ** 2;
    case "rectangle": return shape.width * shape.height;
    case "triangle": return (shape.base * shape.height) / 2;
  }
}
console.log(area({ kind: "circle", radius: 5 }));

// === Nullish Coalescing (Python: or) ===
const score = 0;
const displayScore = score ?? 100; // 0 (nullish coalescing)
const displayScore2 = score || 100; // 100 (logical or)

// === Early Return vs Python elif ===
function classify(n: number): string {
  if (n < 0) return "negative";
  if (n === 0) return "zero";
  if (n > 0 && n < 10) return "small positive";
  return "large positive";
}

// === For Loop Control Flow ===
const matrix = [[1, 2], [3, 4], [5, 6]];
outer: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 3) break outer;
  }
}

// === While loop with sentinel ===
function findFirst(arr: number[], predicate: (n: number) => boolean): number | undefined {
  let i = 0;
  while (i < arr.length && !predicate(arr[i])) i++;
  return i < arr.length ? arr[i] : undefined;
}
console.log(findFirst([1, 3, 5, 7, 8, 9], (n) => n % 2 === 0)); // 8
```

### TypeScript Advanced Flow Control

```typescript
// === Guard Function (Python: guard clause) ===
type GuardResult<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };
function guard<T>(value: T, predicate: (v: T) => boolean, message: string): GuardResult<T> {
  return predicate(value) ? { ok: true, value } : { ok: false, error: new Error(message) };
}

// === Exhaustive Check (Python: assert_never) ===
function assertNever(value: never): never { throw new Error(`Unexpected value: ${value}`); }
function exhaustiveCheck(x: never): never { throw new Error(`Unknown variant: ${x}`); }

// === Control Flow via Monadic Error Handling ===
class Try<T> {
  private constructor(private value: T | null, private error: Error | null) {}
  static attempt<T>(fn: () => T): Try<T> {
    try { return new Try(fn(), null); } catch (e) { return new Try(null, e as Error); }
  }
  map<R>(fn: (v: T) => R): Try<R> {
    return this.error ? new Try<R>(null, this.error) : Try.attempt(() => fn(this.value!));
  }
  recover(fn: (e: Error) => T): T { return this.error ? fn(this.error) : this.value!; }
  getOr(defaultValue: T): T { return this.error ? defaultValue : this.value!; }
  get(): T { if (this.error) throw this.error; return this.value!; }
}

// === Lazy Evaluation ===
class Lazy<T> {
  private computed = false;
  private result!: T;
  constructor(private factory: () => T) {}
  force(): T {
    if (!this.computed) { this.result = this.factory(); this.computed = true; }
    return this.result;
  }
  map<R>(fn: (v: T) => R): Lazy<R> { return new Lazy(() => fn(this.force())); }
}

// === Promise-based Control Flow ===
async function retryAsync<T>(fn: () => Promise<T>, retries = 3, delay = 1000): Promise<T> {
  for (let i = 0; i < retries; i++) { try { return await fn(); } catch (e) { if (i === retries - 1) throw e; await new Promise(r => setTimeout(r, delay)); } }
  throw new Error("Unreachable");
}

async function timeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  const timer = new Promise<never>((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms));
  return Promise.race([promise, timer]);
}

// === Coroutine Runner (Python: async/await basic impl) ===
type Coroutine<T> = Generator<Promise<unknown>, T, unknown>;
function runCoroutine<T>(gen: Coroutine<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    const step = (lastValue?: unknown) => {
      try {
        const { value, done } = gen.next(lastValue);
        if (done) resolve(value as T);
        else if (value instanceof Promise) value.then(step, reject);
        else step(value);
      } catch (e) { reject(e); }
    };
    step();
  });
}

// === Async Pool (Python: asyncio.Semaphore) ===
class AsyncPool {
  private pending = 0;
  private queue: (() => void)[] = [];
  constructor(private limit: number) {}
  async run<T>(fn: () => Promise<T>): Promise<T> {
    if (this.pending >= this.limit) await new Promise<void>(resolve => this.queue.push(resolve));
    this.pending++;
    try { return await fn(); } finally { this.pending--; this.queue.shift()?.(); }
  }
}

const tryResult = Try.attempt(() => JSON.parse('{"valid": true}')).map((v: any) => v.valid);
console.log(tryResult.getOr(false)); // true

const pool = new AsyncPool(2);
const results2 = await Promise.all([1, 2, 3].map(i => pool.run(async () => {
  await new Promise(r => setTimeout(r, 100));
  return i * 10;
})));
console.log(results2); // [10, 20, 30]
```

## Summary

- `if`/`elif`/`else` provides branching; `match-case` (3.10+) adds structural pattern matching.
- Chained comparisons like `1 < x < 10` are idiomatic.
- `and`/`or` short-circuit; ternary `x if cond else y` is an expression.
- Match-case supports literals, captures, guards, sequences, mappings, and class patterns.
- The walrus operator can simplify conditions.
- TypeScript uses C-style ternary `cond ? x : y` and does not have chained comparisons or the walrus operator.

## Exercises

### Review Questions

1. How does Python delimit blocks in control flow statements?
2. What is the difference between `elif` and a separate `if` inside an `else` block?
3. Why does `print(True and "hello" or "world")` produce `"hello"`?
4. What is the wildcard pattern in match-case and why is it useful?
5. How are chained comparisons more efficient than their expanded form?
6. How does Python's ternary syntax differ from TypeScript's?
7. Why does TypeScript not have chained comparisons?

### Application Problems

1. Write a program that reads a student's numeric score (0-100) and prints a letter grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60) with a descriptive message.
2. Use match-case to implement a simple calculator that accepts "add 5 3", "sub 10 4", "mul 6 7", "div 15 3" strings and prints the result. Handle unknown operations and division by zero.
3. Write a program that reads three side lengths and classifies the triangle as equilateral, isosceles, scalene, or invalid (violates triangle inequality). Use chained comparisons.
4. Rewrite problem 1 in TypeScript. Use nested ternary operators for the grade logic. Compare readability with the Python version -- which do you prefer?
5. Write a function that validates a password: must be 8+ characters, contain at least one digit and one uppercase letter. Use short-circuit evaluation to only check the next condition if the previous one passes.

### Challenge Problem

Build a simple state machine for a traffic light. The states are GREEN, YELLOW, RED. Transitions: GREEN -> YELLOW (after 30 seconds), YELLOW -> RED (after 5 seconds), RED -> GREEN (after 25 seconds). Use match-case to implement the transition logic. Accept the current state and elapsed time as input, and output the next state. Include validation for invalid states or negative time.

### TypeScript Challenge

Write a TypeScript version of the match-case based calculator from Application Problem 2. TypeScript's switch statement cannot destructure strings, so use string splitting and if-else chains instead. Compare the implementation effort and readability of both solutions.
