# Chapter 14: Magic Methods

## Learning Objectives

By the end of this chapter, students will be able to:
- Implement common magic methods for string representation, equality, hashing, and ordering
- Make objects subscriptable with `__getitem__` and `__setitem__`
- Create callable objects with `__call__`
- Write context managers using `__enter__` and `__exit__`
- Build iterable objects with `__iter__` and `__next__`
- Use `__len__` and other container methods

## 14.1 Introduction

Magic methods (dunder methods) are special methods with double underscores that allow objects to define Python language behaviours. They are not meant to be called directly — Python calls them implicitly.

```python
class Point:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y
    
    def __repr__(self) -> str:
        return f"Point({self.x}, {self.y})"
    
    def __str__(self) -> str:
        return f"({self.x}, {self.y})"

p = Point(3, 4)
print(repr(p))   # Point(3, 4)  — calls __repr__
print(str(p))    # (3, 4)       — calls __str__
print(p)         # (3, 4)       — calls __str__
```

## 14.2 __str__ and __repr__

`__repr__` is for developers (unambiguous, used in debugging). `__str__` is for users (readable, used by `print()`):

```python
class Fraction:
    def __init__(self, num: int, den: int):
        self.num = num
        self.den = den
    
    def __repr__(self) -> str:
        return f"Fraction({self.num}, {self.den})"
    
    def __str__(self) -> str:
        return f"{self.num}/{self.den}"

f = Fraction(3, 4)
print([f, Fraction(1, 2)])  # [Fraction(3, 4), Fraction(1, 2)]  (uses __repr__)
print(f)                     # 3/4  (uses __str__)
```

If `__str__` is not defined, Python falls back to `__repr__`.

## 14.3 __eq__ and __hash__

`__eq__` defines equality. `__hash__` makes an object usable as a dict key or set member:

```python
class Person:
    def __init__(self, name: str, ssn: str):
        self.name = name
        self.ssn = ssn
    
    def __repr__(self) -> str:
        return f"Person({self.name}, ...)"
    
    def __eq__(self, other) -> bool:
        if not isinstance(other, Person):
            return NotImplemented
        return self.ssn == other.ssn
    
    def __hash__(self) -> int:
        return hash(self.ssn)

p1 = Person("Alice", "123-45-6789")
p2 = Person("Alice", "123-45-6789")
p3 = Person("Bob", "987-65-4321")

print(p1 == p2)       # True (same SSN)
print(p1 is p2)       # False (different objects)
print(p1 == p3)       # False

# Can be used in sets and dicts
people = {p1, p2, p3}
print(len(people))    # 2 (p1 and p2 are equal)

registry = {p1: "active"}
print(registry[p2])   # "active" (same hash, same equality)
```

**Rule**: if you define `__eq__`, define `__hash__`. If `__eq__` is defined but `__hash__` is not, the object becomes unhashable (can't be used in sets or as dict keys). If a class defines `__eq__` but not `__hash__`, `__hash__` is set to `None`.

## 14.4 __lt__, __le__, __gt__, __ge__

Define ordering for sorting and comparison:

```python
class Product:
    def __init__(self, name: str, price: float):
        self.name = name
        self.price = price
    
    def __repr__(self) -> str:
        return f"Product({self.name}, ${self.price:.2f})"
    
    def __lt__(self, other) -> bool:
        if not isinstance(other, Product):
            return NotImplemented
        return self.price < other.price
    
    def __le__(self, other) -> bool:
        if not isinstance(other, Product):
            return NotImplemented
        return self.price <= other.price

products = [
    Product("Chair", 150),
    Product("Desk", 500),
    Product("Lamp", 80),
]
products.sort()
print(products)
# [Product(Lamp, $80.00), Product(Chair, $150.00), Product(Desk, $500.00)]
```

Using `@total_ordering` from `functools` reduces boilerplate — define `__eq__` and one comparison method, and the rest are generated:

```python
from functools import total_ordering

@total_ordering
class Student:
    def __init__(self, name: str, grade: float):
        self.name = name
        self.grade = grade
    
    def __eq__(self, other) -> bool:
        return self.grade == other.grade
    
    def __lt__(self, other) -> bool:
        return self.grade < other.grade
    
    def __repr__(self) -> str:
        return f"Student({self.name}, {self.grade})"

s1, s2, s3 = Student("Alice", 85), Student("Bob", 92), Student("Charlie", 78)
print(s1 > s3)   # True (generated from __lt__)
print(s2 >= s1)  # True
```

## 14.5 __getitem__, __setitem__, __delitem__

Make objects subscriptable:

```python
class SimpleDict:
    def __init__(self):
        self._data = {}
    
    def __getitem__(self, key):
        return self._data[key]
    
    def __setitem__(self, key, value):
        self._data[key] = value
    
    def __delitem__(self, key):
        del self._data[key]
    
    def __contains__(self, key):
        return key in self._data
    
    def __len__(self):
        return len(self._data)

d = SimpleDict()
d["name"] = "Alice"    # __setitem__
print(d["name"])       # __getitem__  → Alice
print("name" in d)     # __contains__ → True
print(len(d))           # __len__     → 1
del d["name"]           # __delitem__
```

## 14.6 __call__

Make objects callable like functions:

```python
class Adder:
    def __init__(self, n: int):
        self.n = n
    
    def __call__(self, x: int) -> int:
        return self.n + x

add5 = Adder(5)
print(add5(10))    # 15
print(add5(3))     # 8

# Practical: decorator factory
class CountCalls:
    def __init__(self):
        self.count = 0
    
    def __call__(self):
        self.count += 1
        return self.count

counter = CountCalls()
print(counter())   # 1
print(counter())   # 2
print(counter())   # 3
```

## 14.7 __enter__ and __exit__ (Context Managers)

Context managers handle setup and teardown automatically with the `with` statement:

```python
class ManagedFile:
    def __init__(self, filename: str, mode: str = "r"):
        self.filename = filename
        self.mode = mode
    
    def __enter__(self):
        self.file = open(self.filename, self.mode)
        return self.file  # bound to 'as' variable
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        self.file.close()
        # Return False to propagate exceptions, True to suppress
        return False

# Usage
with ManagedFile("test.txt", "w") as f:
    f.write("Hello, world!")

# The file is closed automatically after the block
```

Using `contextlib.contextmanager` for simpler cases:

```python
from contextlib import contextmanager

@contextmanager
def managed_file(filename: str, mode: str = "r"):
    f = open(filename, mode)
    try:
        yield f
    finally:
        f.close()

with managed_file("test.txt") as f:
    print(f.read())
```

## 14.8 __iter__ and __next__

Make objects iterable:

```python
class Range:
    def __init__(self, start: int, end: int, step: int = 1):
        self.start = start
        self.end = end
        self.step = step
    
    def __iter__(self):
        self.current = self.start
        return self
    
    def __next__(self):
        if self.current >= self.end:
            raise StopIteration
        value = self.current
        self.current += self.step
        return value

for i in Range(0, 5):
    print(i, end=" ")  # 0 1 2 3 4

print()

# Two-iterator protocol (iterable but not its own iterator)
class Squares:
    def __init__(self, n: int):
        self.n = n
    
    def __iter__(self):
        return (i ** 2 for i in range(self.n))

s = Squares(5)
print(list(s))   # [0, 1, 4, 9, 16]
print(list(s))   # [0, 1, 4, 9, 16]  (fresh iterator each time)
```

## 14.9 __len__ and __bool__

```python
class Team:
    def __init__(self, members: list[str]):
        self.members = members
    
    def __len__(self) -> int:
        return len(self.members)
    
    def __bool__(self) -> bool:
        return len(self.members) > 0

team = Team(["Alice", "Bob", "Charlie"])
print(len(team))        # 3
if team:
    print("Team exists")

empty = Team([])
print(bool(empty))      # False
```

If `__bool__` is not defined, Python falls back to `__len__` (truthy if length > 0).

## 14.10 __add__, __sub__, __mul__, and Arithmetic

```python
class Vector:
    def __init__(self, x: float, y: float):
        self.x = x
        self.y = y
    
    def __repr__(self) -> str:
        return f"Vector({self.x}, {self.y})"
    
    def __add__(self, other: "Vector") -> "Vector":
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other: "Vector") -> "Vector":
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar: float) -> "Vector":
        return Vector(self.x * scalar, self.y * scalar)
    
    def __rmul__(self, scalar: float) -> "Vector":
        return self * scalar  # commutativity
    
    def __abs__(self) -> float:
        import math
        return math.sqrt(self.x ** 2 + self.y ** 2)

v1 = Vector(3, 4)
v2 = Vector(1, 2)
print(v1 + v2)    # Vector(4, 6)
print(v1 - v2)    # Vector(2, 2)
print(v1 * 2)     # Vector(6, 8)
print(2 * v1)     # Vector(6, 8)  (reverse multiplication)
print(abs(v1))    # 5.0
```

**Reflected operators** (`__radd__`, `__rsub__`, etc.) are called when the left operand does not support the operation.

## Summary

Magic methods hook into Python's built-in behaviours:

| Category | Methods |
|----------|---------|
| Representation | `__repr__`, `__str__`, `__format__` |
| Comparison | `__eq__`, `__hash__`, `__lt__`, `__le__`, `__gt__`, `__ge__` |
| Container | `__getitem__`, `__setitem__`, `__delitem__`, `__contains__`, `__len__`, `__bool__` |
| Callable | `__call__` |
| Context manager | `__enter__`, `__exit__` |
| Iterator | `__iter__`, `__next__` |
| Arithmetic | `__add__`, `__sub__`, `__mul__`, etc. |

## Exercises

### Review Questions

1. Why should `__hash__` be defined when `__eq__` is overridden?
2. What is the difference between `__str__` and `__repr__`?
3. How does `__enter__` communicate its return value to the `as` variable?
4. What must `__exit__` return to suppress an exception?
5. What is `@total_ordering` and what does it generate?

### Application Problems

1. Implement a `Matrix2D` class with `__add__`, `__sub__`, `__mul__` (scalar and matrix multiplication), `__repr__`, and `__eq__`. Support `__getitem__` with tuple keys: `m[(row, col)]`.
2. Create a `Timer` context manager using `__enter__` and `__exit__` that measures elapsed time. Print the duration when the block exits. Then reimplement it with `@contextmanager`.
3. Implement a `FixedArray` class with `__len__`, `__getitem__`, `__setitem__`, and `__iter__`. It should have a fixed capacity set at construction time. Raise `IndexError` for out-of-bounds access.

### Challenge Problem

Build a simple SQL query builder using magic methods. Create a `Query` class that supports `__and__` (WHERE clause conjunction), `__or__`, `__eq__` (field comparison), and `__call__` (execution). Define a `Field` descriptor class with `__eq__`, `__lt__`, `__gt__` that produces `Comparison` objects. Chain them: `Query().select("name", "age").where((Field("age") >= 18) & (Field("name").contains("Al")))`. Generate a SQL string.
