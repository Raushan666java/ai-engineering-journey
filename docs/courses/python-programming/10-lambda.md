# Chapter 10: Lambda and Functional Programming


> **Previous:** [Functions](./09-functions.md) | **Next:** [Modules and Packages](./11-modules.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Write lambda functions for concise inline operations
- Use `map`, `filter`, and `reduce` for functional data processing
- Create partial functions with `functools.partial`
- Apply the `operator` module for common operations
- Compose functions and build functional pipelines

![Lambda and Functional Programming](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/10-lambda.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|10.1 Lambda Functions||Lambdas are anonymous single-expression functions — use them where `def` is overkill.|
|10.2 map()||`map()` and `filter()` are lazy; list comprehensions often read better.|
|10.3 filter()||`reduce()` cumulatively applies a binary function — explicit loops are often clearer.|
|10.4 reduce()||`partial()` fixes arguments; `operator` module replaces common lambdas for speed.|
|10.5 functools.partial||Function composition chains transformations; Python supports both left-to-right (pipe) and right-to-left (compose).|
|10.6 The operator Module||undefined|
|10.7 Function Composition||undefined|
|10.8 When to Use Functional Constructs||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Lambda Functions]
    S1[map()]
    S2[filter()]
    S3[reduce()]
    S4[functools.partial]
    S5[The operator Module]
    S6[Function Composition]
    S7[When to Use Functional Constructs]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
```
## 10.1 Lambda Functions

> **One-Sentence Takeaway:** Lambdas are anonymous single-expression functions — use them where `def` is overkill.


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

> **One-Sentence Takeaway:** `map()` and `filter()` are lazy; list comprehensions often read better.
> **Remember:** List comprehensions are often more readable than map/filter — use the functional form only when it improves clarity.




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

`map()` is lazy â€” it returns an iterator. Wrap with `list()` to materialise:

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

> **One-Sentence Takeaway:** `reduce()` cumulatively applies a binary function — explicit loops are often clearer.


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

> **One-Sentence Takeaway:** `partial()` fixes arguments; `operator` module replaces common lambdas for speed.


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

1. `a=1, b=2` â†’ `3`
2. `a=3, b=3` â†’ `6`
3. `a=6, b=4` â†’ `10`

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

> **One-Sentence Takeaway:** Function composition chains transformations; Python supports both left-to-right (pipe) and right-to-left (compose).


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
# Not quite right â€” partial on bound method needs care. Better:
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

> **One-Sentence Takeaway:** undefined


The `operator` module provides function equivalents of built-in operators:

```python
from operator import add, mul, itemgetter, attrgetter, methodcaller

# Instead of lambda a, b: a + b
print(add(3, 4))    # 7
print(mul(5, 6))    # 30

# itemgetter â€” instead of lambda x: x[0]
people = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
sorted_by_age = sorted(people, key=itemgetter(1))
print(sorted_by_age)  # [('Bob', 25), ('Alice', 30), ('Charlie', 35)]

# Multiple indices
points = [(3, 4, 5), (1, 2, 3), (6, 7, 8)]
print(itemgetter(0, 2)(points[0]))  # (3, 5)

# attrgetter â€” instead of lambda x: x.attribute
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

> **One-Sentence Takeaway:** undefined


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

> **One-Sentence Takeaway:** undefined


| Construct | Use Case | Preferable Alternative |
|-----------|----------|----------------------|
| `lambda` | Simple one-expression function | `def` for multi-line |
| `map()` | Transform iterable | List comprehension |
| `filter()` | Select from iterable | List comprehension with `if` |
| `reduce()` | Cumulative operation | Explicit loop or `sum()` |
| `partial` | Fix function arguments | Lambda with default args |
| `operator` functions | Avoid inline lambdas in `sorted`, etc. | Lambda or itemgetter |

Python is a multi-paradigm language. Use functional constructs when they improve readability; use imperative style when it does.


## Concept Comparison Table

| Approach | Functional | Imperative |
|---|---|---|
| Style | map/filter/reduce | for loop + if |
| State | Immutable, no side effects | Mutable variables |
| Readability | Concise for simple ops | Clear for complex logic |
| Performance | Comparable (lazy) | Comparable |


## Quick Reference

```python
square = lambda x: x ** 2
list(map(str.upper, ["a","b"]))
list(filter(None, [0, 1, None, 2]))
from functools import reduce
reduce(lambda a,b: a+b, [1,2,3,4])
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Data Science|map() for feature transforms|10.2|
|Web Dev|filter() for request validation|10.3|
|DevOps|reduce() for log aggregation|10.4|
|Automation|partial() for config presets|10.5|


## Chapter Quiz

**Q1.** What is the main limitation of lambda?
- no return value
- single expression only **<-- Correct**
- no parameters
- slow execution

**Q2.** Are map() and filter() eager or lazy?
- eager
- lazy **<-- Correct**
- depends on Python version
- both

**Q3.** What does reduce() do?
- filters elements
- maps a function
- cumulatively applies binary function **<-- Correct**
- sorts elements

**Q4.** What does functools.partial do?
- splits a function
- fixes some function arguments **<-- Correct**
- creates lambdas
- decorates functions

**Q5.** Which operator import is equivalent to lambda a,b: a+b?
- operator.mul
- operator.add **<-- Correct**
- operator.concat
- operator.sum


## TypeScript Parallel

TypeScript uses arrow functions `(args) => expr` as the direct equivalent of Python lambdas:

```typescript
// TypeScript arrow functions (equivalent to Python lambdas)
const square = (x: number): number => x * x;
const add = (a: number, b: number): number => a + b;

// map equivalent (Python: map(lambda x: x*2, nums))
const nums: number[] = [1, 2, 3, 4, 5];
const doubled = nums.map(x => x * 2);  // [2, 4, 6, 8, 10]

// filter equivalent (Python: filter(lambda x: x > 2, nums))
const big = nums.filter(x => x > 2);   // [3, 4, 5]

// reduce equivalent (Python: reduce(lambda a, b: a + b, nums))
const sum = nums.reduce((acc, x) => acc + x, 0);  // 15

// partial application via bind and closures
function multiply(a: number, b: number): number {
  return a * b;
}
const doubleTS = multiply.bind(null, 2);
console.log(doubleTS(5));  // 10

// Curried closure (like partial)
const multiplyBy = (a: number) => (b: number) => a * b;
const triple = multiplyBy(3);
console.log(triple(7));  // 21

// Method reference equivalent
type Op = (a: number, b: number) => number;
const ops: Record<string, Op> = {
  add: (a, b) => a + b,
  mul: (a, b) => a * b
};
console.log(ops["add"](3, 4));  // 7
```

### Arrow Functions vs Python Lambdas

| Feature | Python lambda | TypeScript Arrow |
|---------|---------------|------------------|
| Syntax | `lambda x: expr` | `x => expr` |
| Multiple params | `lambda a,b: expr` | `(a,b) => expr` |
| Statements | Single expression only | Expression or block `{}` |
| `this` binding | N/A (lexical) | Lexical `this` |
| Typing | No type annotations | Full type support |
| Common use | `map`/`filter`/`reduce` | `.map()`/`.filter()`/`.reduce()` |

### Functional Programming vs Pythonic Style

Python is not a purely functional language, so idiomatic Python often prefers alternatives:

```python
# Lambda style vs Pythonic style

# 1. Sorting with complex keys
data = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]

# Lambda approach
sorted_by_age = sorted(data, key=lambda x: x[1])

# operator approach (preferred for simple attribute access)
from operator import itemgetter
sorted_by_age = sorted(data, key=itemgetter(1))

# 2. Conditional logic
nums = [1, 2, 3, 4, 5, 6]

# Lambda approach
result = list(map(lambda x: x * 2 if x % 2 == 0 else x * 3, nums))

# Comprehension approach (more readable)
result = [x * 2 if x % 2 == 0 else x * 3 for x in nums]

# 3. Multiple aggregations
records = [{"sales": 100}, {"sales": 200}, {"sales": 150}]

# Functional approach
from functools import reduce
total = reduce(lambda acc, r: acc + r["sales"], records, 0)

# Comprehension approach (more pythonic)
total = sum(r["sales"] for r in records)

# 4. Data transformation pipeline
# Lambda pipeline
pipeline = lambda data: list(
    map(lambda x: x.upper(),
        filter(lambda x: len(x) > 3, data))
)

# Comprehension pipeline
pipeline = [x.upper() for x in data if len(x) > 3]
```

### Advanced Partial Application

```python
# Partial with keyword arguments
from functools import partial

def log_message(level: str, source: str, message: str) -> str:
    return f"[{level.upper()}] [{source}] {message}"

info_logger = partial(log_message, "info", "app")
error_logger = partial(log_message, "error", "app")

print(info_logger("Server started"))      # [INFO] [app] Server started
print(error_logger("Connection failed"))  # [ERROR] [app] Connection failed

# Partial as callback factory
def make_request(url: str, method: str = "GET", timeout: int = 30):
    return f"{method} {url} (timeout={timeout}s)"

get_api = partial(make_request, method="GET", timeout=10)
post_api = partial(make_request, method="POST", timeout=30)
print(get_api("https://api.example.com/users"))
# GET https://api.example.com/users (timeout=10s)
```

### Performance: Lambda vs Named Function

```python
import timeit

# Lambda
lambda_time = timeit.timeit(
    'list(map(lambda x: x * 2, range(1000)))',
    number=10000
)

# List comprehension
comp_time = timeit.timeit(
    '[x * 2 for x in range(1000)]',
    number=10000
)

# Named function
def double(x):
    return x * 2

named_time = timeit.timeit(
    'list(map(double, range(1000)))',
    globals={'double': double},
    number=10000
)

print(f"Lambda:   {lambda_time:.3f}s")
print(f"Comprehension: {comp_time:.3f}s")
print(f"Named:    {named_time:.3f}s")
```

List comprehensions are typically faster than `map` with lambdas because they avoid function call overhead. `map` with a built-in function (`map(str.upper, items)`) can be faster than the equivalent comprehension. Always profile when performance matters.

### Lambda Pitfalls

```python
# Pitfall 1: Late binding in closures
funcs = [lambda: i for i in range(5)]
print([f() for f in funcs])  # [4, 4, 4, 4] not [0, 1, 2, 3, 4]

# Fix: capture value at creation time
funcs = [lambda i=i: i for i in range(5)]
print([f() for f in funcs])  # [0, 1, 2, 3, 4]

# Pitfall 2: Overusing lambda when def is clearer
# Hard to read:
process = lambda items: list(
    filter(lambda x: x > 0,
        map(lambda x: x.strip().lower(), items))
)

# Better as named function:
def process(items):
    result = []
    for item in items:
        cleaned = item.strip().lower()
        if cleaned:
            result.append(cleaned)
    return result
```

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
