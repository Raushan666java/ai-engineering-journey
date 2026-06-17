# Chapter 2: Variables, Types, and Operators

## Learning Objectives

By the end of this chapter, students will be able to:
- Declare variables and understand dynamic typing
- Use all built-in atomic types correctly
- Convert between types explicitly
- Apply arithmetic, comparison, logical, assignment, bitwise, identity, and membership operators
- Predict operator precedence and associativity

![Python Data Types](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/02-variables.png)

## 2.1 Variables and Dynamic Typing

A variable is a name that references an object in memory. Python variables are dynamically typed: the same name can refer to objects of different types over its lifetime.

```python
x = 42          # x is an int
print(type(x))  # <class 'int'>

x = "hello"     # x now references a str
print(type(x))  # <class 'str'>
```

Assignment creates a reference, not a copy. Variables hold pointers to objects:

```python
a = [1, 2, 3]
b = a           # b references the same list
b.append(4)
print(a)        # [1, 2, 3, 4]
```

Variable names must begin with a letter or underscore, contain only alphanumeric characters and underscores, and are case-sensitive.

```python
valid = 1
_valid = 2
_ = 3          # conventional "throwaway" name
camelCase = 4  # unconventional in Python (PEP 8 prefers snake_case)
snake_case = 5 # preferred
```

## 2.2 Basic Types

### 2.2.1 int

Integers have arbitrary precision:

```python
a = 42
b = 1_000_000       # underscores improve readability
c = 0xFF            # hexadecimal (255)
d = 0b1010          # binary (10)
e = 0o77            # octal (63)
f = 10 ** 100       # googol — huge integer
print(f)            # 100000000000000000000000000000000...
```

### 2.2.2 float

Floating-point numbers are double-precision (64-bit IEEE 754):

```python
g = 3.14159
h = 1.5e-10         # scientific notation
i = float("inf")    # infinity
j = float("nan")    # Not a Number
print(0.1 + 0.2)    # 0.30000000000000004 (floating-point error)
```

Use `math.isclose()` for safe floating-point comparison:

```python
import math
print(math.isclose(0.1 + 0.2, 0.3))  # True
```

### 2.2.3 str

Strings are immutable sequences of Unicode code points:

```python
name = "Alice"
greeting = 'Hello'          # single or double quotes
multi = """Line one
Line two"""
```

### 2.2.4 bool

Booleans are a subclass of int. `True == 1` and `False == 0`:

```python
is_valid = True
print(is_valid + 2)  # 3
```

Falsy values: `False`, `None`, `0`, `0.0`, `""`, `[]`, `{}`, `()`, `set()`. Everything else is truthy.

### 2.2.5 NoneType

`None` represents the absence of a value. It is Python's null:

```python
result = None
if result is None:
    print("No result yet")
```

### 2.2.6 complex

Complex numbers with real and imaginary parts:

```python
c = 3 + 4j
print(c.real, c.imag)  # 3.0 4.0
print(abs(c))          # 5.0 (magnitude)
```

## 2.3 Type Conversion

Explicit conversion uses the type name as a function:

```python
print(int(3.99))       # 3 (truncation)
print(float("3.14"))   # 3.14
print(str(42))         # "42"
print(bool(0))         # False
print(bool(""))        # False
print(bool("hello"))   # True
print(complex(1, 2))   # (1+2j)
```

Implicit conversion happens in mixed-type operations:

```python
result = 3 + 4.5       # 7.5 (int promoted to float)
```

Converting a string like `"hello"` to `int` raises `ValueError`:

```python
int("hello")  # ValueError: invalid literal for int() with base 10: 'hello'
```

## 2.4 Operators

### 2.4.1 Arithmetic Operators

```python
a, b = 10, 3
print(a + b)     # 13  addition
print(a - b)     # 7   subtraction
print(a * b)     # 30  multiplication
print(a / b)     # 3.333...  true division
print(a // b)    # 3   floor division
print(a % b)     # 1   modulus
print(a ** b)    # 1000  exponentiation
```

Floor division rounds toward negative infinity:

```python
print(-10 // 3)  # -4 (not -3)
print(10 // -3)  # -4
```

### 2.4.2 Comparison Operators

```python
print(5 == 5)    # True   equal
print(5 != 4)    # True   not equal
print(5 > 3)     # True   greater than
print(5 < 3)     # False  less than
print(5 >= 5)    # True   greater or equal
print(5 <= 4)    # False  less or equal
```

Comparisons can be chained:

```python
x = 5
print(3 < x < 7)   # True  equivalent to (3 < x) and (x < 7)
print(3 < x > 10)  # False equivalent to (3 < x) and (x > 10)
```

### 2.4.3 Logical Operators

```python
a, b = True, False
print(a and b)   # False
print(a or b)    # True
print(not a)     # False
```

`and` and `or` short-circuit — they stop evaluating as soon as the result is determined:

```python
def expensive():
    print("called")
    return True

print(False and expensive())   # False (expensive() not called)
print(True or expensive())     # True  (expensive() not called)
```

`and` returns the first falsy operand or the last operand. `or` returns the first truthy operand or the last operand:

```python
print(0 and 42)   # 0
print(3 and 42)   # 42
print(0 or 42)    # 42
print(3 or 42)    # 3
```

### 2.4.4 Assignment Operators

```python
x = 10
x += 5    # x = x + 5
x -= 3    # x = x - 3
x *= 2    # x = x * 2
x /= 4    # x = x / 4
x //= 2   # x = x // 2
x %= 3    # x = x % 3
x **= 2   # x = x ** 2
x &= 7    # x = x & 7
x |= 3    # x = x | 3
x ^= 5    # x = x ^ 5
x <<= 1   # x = x << 1
x >>= 2   # x = x >> 2
```

The walrus operator `:=` (PEP 572, Python 3.8+) assigns and returns a value:

```python
if (n := len("hello")) > 4:
    print(f"Length {n} exceeds 4")
```

### 2.4.5 Bitwise Operators

```python
a, b = 0b1100, 0b1010       # 12, 10
print(bin(a & b))   # 0b1000 bitwise AND
print(bin(a | b))   # 0b1110 bitwise OR
print(bin(a ^ b))   # 0b0110 bitwise XOR
print(bin(~a))      # -0b1101 bitwise NOT (two's complement)
print(bin(a << 2))  # 0b110000 left shift
print(bin(a >> 2))  # 0b11 right shift
```

Bitwise operators are commonly used for flags and low-level protocols.

### 2.4.6 Identity Operators

`is` checks object identity (same memory address). `is not` is the negation:

```python
a = [1, 2, 3]
b = [1, 2, 3]
c = a

print(a == b)    # True  (same value)
print(a is b)    # False (different objects)
print(a is c)    # True  (same object)
```

Use `is None` to check for `None`. Never use `== None`.

```python
x = None
print(x is None)     # True
print(x is not None)  # False
```

### 2.4.7 Membership Operators

`in` and `not in` test whether a value is in a container:

```python
print(3 in [1, 2, 3])       # True
print("e" in "hello")       # True
print("x" not in "hello")   # True
print(4 in {1, 2, 3})       # False
print("key" in {"key": 1})  # True (checks keys)
```

## 2.5 Operator Precedence

From highest to lowest precedence:

| Level | Operators |
|-------|-----------|
| 1 (highest) | `**` |
| 2 | `+x`, `-x`, `~x` (unary) |
| 3 | `*`, `/`, `//`, `%` |
| 4 | `+`, `-` |
| 5 | `<<`, `>>` |
| 6 | `&` |
| 7 | `^` |
| 8 | `|` |
| 9 | `==`, `!=`, `<`, `<=`, `>`, `>=`, `is`, `in` |
| 10 | `not` |
| 11 | `and` |
| 12 (lowest) | `or` |

When in doubt, use parentheses:

```python
result = (2 + 3) * 4   # 20, not 2 + 12 = 14
```

## Summary

- Python is dynamically typed; variables are references to objects.
- Core types: `int`, `float`, `str`, `bool`, `NoneType`, `complex`.
- Explicit conversion uses type constructors; implicit conversion promotes int to float.
- Operators span arithmetic, comparison, logical, assignment, bitwise, identity, and membership.
- `and`/`or` short-circuit; `is` checks identity; `in` checks membership.
- Chained comparisons are a unique Python feature.
- The walrus operator `:=` assigns within expressions.

## Exercises

### Review Questions

1. What is the difference between `==` and `is`?
2. Why does `0.1 + 0.2` not equal `0.3` exactly?
3. What values are considered falsy in Python?
4. Explain short-circuit evaluation with an example.
5. What operator precedence rule causes `2 ** 3 ** 2` to compute 512 rather than 64?

### Application Problems

1. Write a program that takes an integer input, then prints whether it is even or odd, positive or negative, and its absolute value.
2. Implement a BMI calculator: weight (kg) / height (m)^2. Use appropriate types and print a health category message.
3. Given `a = 0b1010` and `b = 0b1100`, write a program that prints the AND, OR, XOR, and left-shift results in binary.

### Challenge Problem

Implement a simple simulated-annealing flag decoder: define a set of bit flags (READ=1, WRITE=2, EXECUTE=4, DELETE=8). Accept an integer permission mask and print which flags are set. Then accept a flag name and toggle it in the mask using bitwise XOR. Use the walrus operator in at least one expression.
