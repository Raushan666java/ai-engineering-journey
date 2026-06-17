# Chapter 10: Lambda and Functional Programming

## Learning Objectives

By the end of this chapter, students will be able to:
- Write lambda functions for concise inline operations
- Use `map`, `filter`, and `reduce` for functional data processing
- Create partial functions with `functools.partial`
- Apply the `operator` module for common operations
- Compose functions and build functional pipelines

![Lambda and Functional Programming](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/10-lambda.png)

## 10.1 Lambda Functions

A lambda is an anonymous function defined with the `lambda` keyword:

```python
lambda arguments: expression
```

It can only contain a single expression (no statements):

```python
square = lambda x: x ** 2
print(square(5))            # 25

add = lambda a, b: a + b
print(add(3, 4))            # 7

multiline = lambda x, y, z: (x + y) * z
print(multiline(2, 3, 4))   # 20
```

Lambdas are most useful where a function is needed temporarily:

```python
pairs = [(1, "banana"), (3, "apple"), (2, "cherry")]
pairs.sort(key=lambda pair: pair[1])  # sort by the string element
print(pairs)  # [(3, 'apple'), (1, 'banana'), (2, 'cherry')]
```

Equivalent named function:

```python
def sort_key(pair):
    return pair[1]

pairs.sort(key=sort_key)
```

Use a lambda when the function logic is simple and only needed once. Use `def` for anything complex or reused.

## 10.2 map()

`map()` applies a function to every element of an iterable:

```python
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x ** 2, numbers))
print(squared)  # [1, 4, 9, 16, 25]

# Multiple iterables
a = [1, 2, 3]
b = [10, 20, 30]
summed = list(map(lambda x, y: x + y, a, b))
print(summed)  # [11, 22, 33]
```

`map()` is lazy — it returns an iterator. Wrap with `list()` to materialise:

```python
result = map(str, [1, 2, 3])
print(result)         # <map object at 0x...>
print(list(result))   # ['1', '2', '3']
```

List comprehensions are often more readable than `map()`:

```python
# These are equivalent:
squares1 = list(map(lambda x: x ** 2, range(10)))
squares2 = [x ** 2 for x in range(10)]

print(squares1 == squares2)  # True
```

## 10.3 filter()

`filter()` keeps elements for which the function returns truthy:

```python
numbers = [1, 2, 3, 4, 5, 6]
evens = list(filter(lambda x: x % 2 == 0, numbers))
print(evens)  # [2, 4, 6]

# Filter out None values
values = [0, None, 1, "", "hello", [], [1], False]
truthy = list(filter(None, values))  # passing None as function keeps truthy
print(truthy)  # [1, 'hello', [1]]
```

Again, a comprehension is often clearer:

```python
evens2 = [x for x in numbers if x % 2 == 0]
print(evens == evens2)  # True
```

## 10.4 reduce()

`reduce()` applies a binary function cumulatively, reducing the iterable to a single value:

```python
from functools import reduce

numbers = [1, 2, 3, 4, 5]
total = reduce(lambda a, b: a + b, numbers)
print(total)  # 15

# With initial value
total_with_init = reduce(lambda a, b: a + b, numbers, 100)
print(total_with_init)  # 115

# Factorial
factorial = reduce(lambda a, b: a * b, range(1, 6))
print(factorial)  # 120
```

Tracing `reduce(lambda a, b: a + b, [1, 2, 3, 4])`:

1. `a=1, b=2` → `3`
2. `a=3, b=3` → `6`
3. `a=6, b=4` → `10`

With `functools.reduce`, the function must take two arguments. `reduce` is powerful but less readable than explicit loops for many cases:

```python
# reduce
max_val = reduce(lambda a, b: a if a > b else b, [3, 1, 4, 1, 5, 9])
print(max_val)  # 9

# equivalent loop
max_val = float("-inf")
for x in [3, 1, 4, 1, 5, 9]:
    if x > max_val:
        max_val = x
print(max_val)  # 9
```

## 10.5 functools.partial

`partial` fixes some arguments of a function, creating a new callable:

```python
from functools import partial

def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

print(square(5))  # 25
print(cube(3))    # 27

# Real-world: decimal with fixed precision
from decimal import Decimal, ROUND_HALF_UP
round_decimal = partial(Decimal.quantize, exp=Decimal("0.01"), rounding=ROUND_HALF_UP)
# Not quite right — partial on bound method needs care. Better:
def round_to_2dp(value):
    return Decimal(value).quantize(Decimal("0.01"), rounding=ROUND_HALF_UP)

# Fixed argument for configuration
def connect(host, port, timeout, retries):
    print(f"Connecting to {host}:{port} (timeout={timeout}, retries={retries})")

connect_local = partial(connect, host="localhost", timeout=5, retries=3)
connect_local(port=8080)   # Connecting to localhost:8080 (timeout=5, retries=3)
connect_local(port=5432)   # Connecting to localhost:5432 (timeout=5, retries=3)
```

## 10.6 The operator Module

The `operator` module provides function equivalents of built-in operators:

```python
from operator import add, mul, itemgetter, attrgetter, methodcaller

# Instead of lambda a, b: a + b
print(add(3, 4))    # 7
print(mul(5, 6))    # 30

# itemgetter — instead of lambda x: x[0]
people = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
sorted_by_age = sorted(people, key=itemgetter(1))
print(sorted_by_age)  # [('Bob', 25), ('Alice', 30), ('Charlie', 35)]

# Multiple indices
points = [(3, 4, 5), (1, 2, 3), (6, 7, 8)]
print(itemgetter(0, 2)(points[0]))  # (3, 5)

# attrgetter — instead of lambda x: x.attribute
from collections import namedtuple
Person = namedtuple("Person", "name age")
people2 = [Person("Alice", 30), Person("Bob", 25), Person("Charlie", 35)]
names = list(map(attrgetter("name"), people2))
print(names)  # ['Alice', 'Bob', 'Charlie']

# methodcaller
s = "hello world"
upper = methodcaller("upper")
print(upper(s))  # HELLO WORLD
split = methodcaller("split", " ")
print(split(s))  # ['hello', 'world']
```

## 10.7 Function Composition

Function composition chains functions: `compose(f, g)(x) = f(g(x))`:

```python
def compose(*funcs):
    """Compose functions right-to-left."""
    def composed(arg):
        result = arg
        for func in reversed(funcs):
            result = func(result)
        return result
    return composed

def add_one(x): return x + 1
def double(x): return x * 2
def square(x): return x ** 2

pipeline = compose(square, double, add_one)
print(pipeline(3))  # square(double(add_one(3))) = square(double(4)) = square(8) = 64
```

A left-to-right pipeline (like Unix pipes):

```python
def pipe(arg, *funcs):
    """Apply functions left-to-right."""
    result = arg
    for func in funcs:
        result = func(result)
    return result

print(pipe(3, add_one, double, square))  # ((3+1)*2)^2 = 64
```

This pattern becomes powerful when combined with `partial`:

```python
from functools import partial, reduce

def process_data(data):
    pipeline = [
        partial(map, str.upper),
        partial(filter, lambda s: len(s) > 2),
        partial(map, lambda s: f"[{s}]"),
        list,
    ]
    return reduce(lambda d, f: f(d), pipeline, data)

result = process_data(["a", "hello", "bc", "world"])
print(result)  # ['[HELLO]', '[WORLD]']
```

## 10.8 When to Use Functional Constructs

| Construct | Use Case | Preferable Alternative |
|-----------|----------|----------------------|
| `lambda` | Simple one-expression function | `def` for multi-line |
| `map()` | Transform iterable | List comprehension |
| `filter()` | Select from iterable | List comprehension with `if` |
| `reduce()` | Cumulative operation | Explicit loop or `sum()` |
| `partial` | Fix function arguments | Lambda with default args |
| `operator` functions | Avoid inline lambdas in `sorted`, etc. | Lambda or itemgetter |

Python is a multi-paradigm language. Use functional constructs when they improve readability; use imperative style when it does.

## Summary

- Lambdas are anonymous, single-expression functions.
- `map()` and `filter()` are lazy; list comprehensions often replace both.
- `reduce()` accumulates values cumulatively.
- `partial()` fixes function arguments.
- `operator` module provides function forms of built-in operations.
- Function composition chains transformations.

## Exercises

### Review Questions

1. What are the limitations of `lambda` compared to `def`?
2. How does `map()` differ from a list comprehension?
3. What does `reduce(lambda a, b: a if a > b else b, numbers)` compute?
4. When would you use `operator.itemgetter` instead of a lambda?
5. What is the difference between `compose(f, g)(x)` and `pipe(x, f, g)`?

### Application Problems

1. Use `map` and `filter` to: given a list of strings, convert to uppercase and keep only those that start with a vowel. Then write the same with list comprehensions.
2. Use `reduce` to compute the product of all numbers in a list. Then implement `flatten` using `reduce`: `reduce(operator.add, [[1, 2], [3, 4], [5, 6]], [])`.
3. Create a `multiply_by(n)` function using `partial`. Then use it with `map` to multiply every element of `[1, 2, 3, 4, 5]` by 3, 5, and 10 in three separate calls.

### Challenge Problem

Implement a simple query pipeline for a list of dictionaries representing employee records. Use `partial`, `map`, `filter`, and `reduce` to build composable query operations: `select(fields)`, `where(predicate)`, `order_by(key, reverse)`, and `aggregate(func)`. The pipeline should process data lazily where possible and support chaining: `query(data) | select(["name", "salary"]) | where(lambda r: r["salary"] > 50000) | order_by("salary")`.
