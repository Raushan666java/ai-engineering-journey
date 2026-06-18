# Chapter 3: Control Flow

## Learning Objectives

By the end of this chapter, students will be able to:
- Write branching logic using if, elif, and else
- Use the match-case statement for structural pattern matching
- Chain comparisons for concise range checks
- Understand short-circuit evaluation
- Apply the ternary conditional expression

![Control Flow](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/03-control-flow.png)

## 3.1 The if Statement

The `if` statement executes a block when a condition is truthy:

```python
temperature = 30
if temperature > 25:
    print("It is hot today")
```

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

Indentation is the only delimiter â€” there is no `endif` or closing brace. The colon after each condition is mandatory:

```python
if x:     # colon required
    ...   # indented block

# Correct:
if x > 0:
    pass
else:
    pass
```

## 3.2 Truthiness and Condition Evaluation

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
if items:           # Pythonic â€” no len(items) > 0
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

## 3.3 Chained Comparisons

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

## 3.4 Short-Circuit Evaluation

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

## 3.5 Ternary Conditional Expression

Python's conditional expression (ternary operator) takes the form:

```python
value_if_true if condition else value_if_false
```

```python
age = 20
status = "Adult" if age >= 18 else "Minor"
print(status)   # Adult
```

Ternary expressions are expressions, not statements â€” they can be used inside other expressions:

```python
print("Even" if 5 % 2 == 0 else "Odd")   # Odd

# Nesting (discouraged for readability)
result = "A" if score >= 90 else "B" if score >= 80 else "C" if score >= 70 else "F"
```

Avoid deep nesting. For complex logic, use a full `if-elif-else` block.

## 3.6 match-case (Structural Pattern Matching)

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

Match-case is exhaustive â€” if no pattern matches and no wildcard `_` is provided, no exception is raised (the match simply does nothing). Use wildcards to avoid silent failures.

## 3.7 Conditional Expressions and Assignment

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

## 3.8 Boolean Operator Precedence in Conditions

Understanding precedence is critical for complex conditions:

```python
# Equivalent to (a and b) or c  â€” and has higher precedence
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

## Summary

- `if`/`elif`/`else` provides branching; `match-case` (3.10+) adds structural pattern matching.
- Chained comparisons like `1 < x < 10` are idiomatic.
- `and`/`or` short-circuit; ternary `x if cond else y` is an expression.
- Match-case supports literals, captures, guards, sequences, mappings, and class patterns.
- The walrus operator can simplify conditions.

## Exercises

### Review Questions

1. How does Python delimit blocks in control flow statements?
2. What is the difference between `elif` and a separate `if` inside an `else` block?
3. Why does `print(True and "hello" or "world")` produce `"hello"`?
4. What is the wildcard pattern in match-case and why is it useful?
5. How are chained comparisons more efficient than their expanded form?

### Application Problems

1. Write a program that reads a student's numeric score (0-100) and prints a letter grade (A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60) with a descriptive message.
2. Use match-case to implement a simple calculator that accepts "add 5 3", "sub 10 4", "mul 6 7", "div 15 3" strings and prints the result. Handle unknown operations and division by zero.
3. Write a program that reads three side lengths and classifies the triangle as equilateral, isosceles, scalene, or invalid (violates triangle inequality). Use chained comparisons.

### Challenge Problem

Build a simple state machine for a traffic light. The states are GREEN, YELLOW, RED. Transitions: GREEN -> YELLOW (after 30 seconds), YELLOW -> RED (after 5 seconds), RED -> GREEN (after 25 seconds). Use match-case to implement the transition logic. Accept the current state and elapsed time as input, and output the next state. Include validation for invalid states or negative time.
