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

`map()` is lazy → it returns an iterator. Wrap with `list()` to materialise:

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
# Not quite right → partial on bound method needs care. Better:
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

# itemgetter → instead of lambda x: x[0]
people = [("Alice", 30), ("Bob", 25), ("Charlie", 35)]
sorted_by_age = sorted(people, key=itemgetter(1))
print(sorted_by_age)  # [('Bob', 25), ('Alice', 30), ('Charlie', 35)]

# Multiple indices
points = [(3, 4, 5), (1, 2, 3), (6, 7, 8)]
print(itemgetter(0, 2)(points[0]))  # (3, 5)

# attrgetter → instead of lambda x: x.attribute
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

<a href="../../../assets/images/diagrams/python-programming/10-lambda/arrow-functions-vs-python-lambdas-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/arrow-functions-vs-python-lambdas-handwritten.svg" alt="Handwritten: Arrow Functions vs Python Lambdas" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/arrow-functions-vs-python-lambdas-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/arrow-functions-vs-python-lambdas-diagram.svg" alt="Diagram: Arrow Functions vs Python Lambdas" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/arrow-functions-vs-python-lambdas-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/arrow-functions-vs-python-lambdas-sticky.svg" alt="Sticky Note: Arrow Functions vs Python Lambdas" width="30%">
</a>


| Feature | Python lambda | TypeScript Arrow |
|---------|---------------|------------------|
| Syntax | `lambda x: expr` | `x => expr` |
| Multiple params | `lambda a,b: expr` | `(a,b) => expr` |
| Statements | Single expression only | Expression or block `{}` |
| `this` binding | N/A (lexical) | Lexical `this` |
| Typing | No type annotations | Full type support |
| Common use | `map`/`filter`/`reduce` | `.map()`/`.filter()`/`.reduce()` |

### Functional Programming vs Pythonic Style

<a href="../../../assets/images/diagrams/python-programming/10-lambda/functional-programming-vs-pythonic-style-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/functional-programming-vs-pythonic-style-handwritten.svg" alt="Handwritten: Functional Programming vs Pythonic Style" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/functional-programming-vs-pythonic-style-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/functional-programming-vs-pythonic-style-diagram.svg" alt="Diagram: Functional Programming vs Pythonic Style" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/functional-programming-vs-pythonic-style-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/functional-programming-vs-pythonic-style-sticky.svg" alt="Sticky Note: Functional Programming vs Pythonic Style" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/python-programming/10-lambda/advanced-partial-application-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/advanced-partial-application-handwritten.svg" alt="Handwritten: Advanced Partial Application" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/advanced-partial-application-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/advanced-partial-application-diagram.svg" alt="Diagram: Advanced Partial Application" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/advanced-partial-application-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/advanced-partial-application-sticky.svg" alt="Sticky Note: Advanced Partial Application" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/python-programming/10-lambda/performance-lambda-vs-named-function-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/performance-lambda-vs-named-function-handwritten.svg" alt="Handwritten: Performance: Lambda vs Named Function" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/performance-lambda-vs-named-function-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/performance-lambda-vs-named-function-diagram.svg" alt="Diagram: Performance: Lambda vs Named Function" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/performance-lambda-vs-named-function-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/performance-lambda-vs-named-function-sticky.svg" alt="Sticky Note: Performance: Lambda vs Named Function" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/python-programming/10-lambda/lambda-pitfalls-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/lambda-pitfalls-handwritten.svg" alt="Handwritten: Lambda Pitfalls" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/lambda-pitfalls-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/lambda-pitfalls-diagram.svg" alt="Diagram: Lambda Pitfalls" width="30%">
</a>
<a href="../../../assets/images/diagrams/python-programming/10-lambda/lambda-pitfalls-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/python-programming/10-lambda/lambda-pitfalls-sticky.svg" alt="Sticky Note: Lambda Pitfalls" width="30%">
</a>


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
```typescript
// Chapter 10: TypeScript Arrow Function Equivalents (Python lambdas)
// Python: lambda x: x * 2
const double = (x: number): number => x * 2;
console.log(double(5));  // 10

// Python: sorted(lst, key=lambda x: x[1])
const pairs: [string, number][] = [["b", 3], ["a", 1], ["c", 2]];
pairs.sort((a, b) => a[1] - b[1]);
console.log(pairs);  // [["a", 1], ["c", 2], ["b", 3]]

// Python: map(lambda x: x.upper(), items)
const words: string[] = ["hello", "world"];
const uppercased: string[] = words.map((w) => w.toUpperCase());
console.log(uppercased);  // ["HELLO", "WORLD"]

// Python: filter(lambda x: x > 0, numbers)
const nums: number[] = [-1, 0, 3, -2, 5];
const positive: number[] = nums.filter((n) => n > 0);
console.log(positive);  // [3, 5]

// Python: reduce(lambda a, b: a + b, numbers)
const sum: number = nums.reduce((acc, n) => acc + n, 0);

// Python: functools.partial → TypeScript: .bind() or closure
const multiply = (a: number, b: number): number => a * b;
const double2 = (x: number): number => multiply(2, x);
console.log(double2(5));  // 10

// Python: operator.itemgetter(1) → TypeScript: destructuring
const getSecond = <T,>(_: unknown, index: number, arr: T[]): T => arr[index];
// More idiomatic: destructure in callback
pairs.forEach(([key, val]) => console.log(key, val));

// Python: lambda limitations (single expression) — same for arrow functions
// But TypeScript arrow functions can have blocks:
const safeDivide = (a: number, b: number): number => {
  if (b === 0) throw new Error("Division by zero");
  return a / b;
};
```

### TypeScript Functional Composition Patterns

```typescript
// Python: multiple lambdas composed → TypeScript: pipes
const add = (x: number) => (y: number) => x + y;
const multiply = (x: number) => (y: number) => x * y;

// Function composition: (f ∘ g)(x) = f(g(x))
function compose<T>(...fns: ((x: T) => T)[]): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}

const addThenMultiply = compose(add(2), multiply(3));
console.log(addThenMultiply(5));  // (5 * 3) + 2 = 17

// Python: partial() → TypeScript: arrow function binding
const pow = (base: number, exp: number): number => base ** exp;
const square = (x: number): number => pow(x, 2);
const cube = (x: number): number => pow(x, 3);
console.log(square(4), cube(4));  // 16, 64

// Python: operator functions → TypeScript: explicit functions
const gt = (a: number) => (b: number) => b > a;
const greaterThan5 = gt(5);
[1, 6, 3, 8].filter(greaterThan5);  // [6, 8]

// Python: reduce with lambda → TypeScript: reduce with arrow
const numbers: number[] = [1, 2, 3, 4, 5];
const product = numbers.reduce((a, b) => a * b, 1);
console.log(product);  // 120

// Python: sorted with key=lambda → TypeScript: sort with comparator
type Person = { name: string; age: number };
const people: Person[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 35 },
];
people.sort((a, b) => a.age - b.age);  // sort by age ascending
console.log(people.map((p) => p.name));  // ["Bob", "Alice", "Charlie"]

// Python: map and filter with lambda → TypeScript: chained array methods
const result = [1, 2, 3, 4, 5, 6]
  .filter((x) => x % 2 === 0)
  .map((x) => x ** 2);
console.log(result);  // [4, 16, 36]
```

### TypeScript Currying & Advanced Functional Patterns

```typescript
// Python: currying with lambda → TypeScript: curried arrow functions
const curriedAdd = (a: number) => (b: number) => (c: number) => a + b + c;
console.log(curriedAdd(1)(2)(3));  // 6
// Python equivalent: lambda a: lambda b: lambda c: a + b + c

// Python: functools.compose → TypeScript: pipe function
function pipe<T>(...fns: Array<(arg: T) => T>): (arg: T) => T {
  return (x: T) => fns.reduce((acc, fn) => fn(acc), x);
}
const trim = (s: string) => s.trim();
const lower = (s: string) => s.toLowerCase();
const truncate = (s: string) => s.slice(0, 10);
const clean = pipe(trim, lower, truncate);
console.log(clean("  HELLO WORLD  "));  // "hello worl"

// Python: filter(None, items) → TypeScript: Boolean constructor
const mixed2 = [0, 1, "", "hello", null, undefined, false, 42];
const truthy = mixed2.filter(Boolean);
console.log(truthy);  // [1, "hello", 42]

// Python: sorted with lambda and operator.attrgetter
type Task = { name: string; priority: number; due: Date };
const tasks: Task[] = [
  { name: "Fix bug", priority: 1, due: new Date("2026-01-15") },
  { name: "Add feature", priority: 2, due: new Date("2026-02-01") },
];
tasks.sort((a, b) => a.priority - b.priority || a.due.getTime() - b.due.getTime());

// Python: functools.partial for callback binding
function fetchApi(endpoint: string, params: Record<string, string>): Promise<Response> {
  const url = new URL(endpoint);
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  return fetch(url.toString());
}
const fetchUsers = (params: Record<string, string>) => fetchApi("/api/users", params);
const fetchProducts = (params: Record<string, string>) => fetchApi("/api/products", params);

// Python: map with multiple iterables → TypeScript: Function.apply or zip
function elementWise<T>(a: T[], b: T[], fn: (x: T, y: T) => T): T[] {
  return a.map((val, i) => fn(val, b[i]));
}
console.log(elementWise([1, 2, 3], [4, 5, 6], (x, y) => x + y));  // [5, 7, 9]
```

### TypeScript Utilities

```typescript
// === Function Pipeline Composer (Python pipe pattern) ===
class Pipeline<T> {
  private fns: Array<(x: T) => T> = [];
  add(fn: (x: T) => T): this { this.fns.push(fn); return this; }
  execute(initial: T): T { return this.fns.reduce((acc, fn) => fn(acc), initial); }
}
const pipe = new Pipeline<number>();
pipe.add((x) => x * 2).add((x) => x + 1).add((x) => Math.abs(x));
console.log(pipe.execute(-5)); // |(-5*2)+1| = 9

// === Compose (right-to-left) and Pipe (left-to-right) ===
function compose<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduceRight((acc, fn) => fn(acc), x);
}
function piped<T>(...fns: Array<(x: T) => T>): (x: T) => T {
  return (x: T) => fns.reduce((acc, fn) => fn(acc), x);
}
const add1 = (x: number) => x + 1;
const double = (x: number) => x * 2;
const square = (x: number) => x * x;
const comp = compose(add1, double, square); // square(double(add1(x)))
const p = piped(add1, double, square);      // square(double(add1(x)))
console.log(comp(5), p(5)); // square(double(6)) = 144, same

// === Partial Applier (functools.partial) ===
type Fn = (...args: any[]) => any;
function partial2<T extends Fn>(fn: T, ...bound: Parameters<T>): (...rest: Parameters<T>) => ReturnType<T> {
  return (...rest: Parameters<T>) => fn(...bound, ...rest);
}
const greet = (greeting: string, name: string) => `${greeting}, ${name}!`;
const sayHello = partial2(greet, "Hello");
console.log(sayHello("Alice")); // Hello, Alice!

// === Map / Filter / Reduce as Python-style ===
function pyMap<T, U>(arr: T[], fn: (x: T) => U): U[] { return arr.map(fn); }
function pyFilter<T>(arr: T[], fn: (x: T) => boolean): T[] { return arr.filter(fn); }
function pyReduce<T, U>(arr: T[], fn: (acc: U, x: T, i: number) => U, init: U): U {
  return arr.reduce(fn, init);
}
const nums = [1, 2, 3, 4, 5];
console.log(pyMap(pyFilter(nums, (x) => x % 2 === 1), (x) => x * x)); // [1, 9, 25]

// === Lambda Cache (memoize for closures) ===
function memoize<T extends (...args: any[]) => any>(fn: T): T {
  const cache = new Map<string, ReturnType<T>>();
  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    if (!cache.has(key)) cache.set(key, fn(...args));
    return cache.get(key);
  }) as T;
}
const fib = memoize((n: number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2));
console.log(fib(40)); // 102334155 (fast due to memoization)

// === Throttle / Debounce (functional utilities) ===
function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}
function throttle<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let last = 0;
  return (...args) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...args); } };
}
```

### TypeScript Functional Programming in Depth

```typescript
// === Pure Function Utilities ===
const identity = <T>(x: T): T => x;
const constant = <T>(x: T) => () => x;
const apply = <T, R>(fn: (x: T) => R) => (x: T): R => fn(x);

// === Point-free Style ===
type UnaryFn<T, R> = (x: T) => R;
const compose2 = <T, R>(...fns: UnaryFn<any, any>[]): UnaryFn<T, R> =>
  (x: T) => fns.reduceRight((acc, fn) => fn(acc), x) as R;
const pipe3 = <T, R>(...fns: UnaryFn<any, any>[]): UnaryFn<T, R> =>
  (x: T) => fns.reduce((acc, fn) => fn(acc), x) as R;

// === Either Monad ===
class Either<E, A> {
  private constructor(private left?: E, private right?: A) {}
  static left<E, A>(value: E): Either<E, A> { return new Either<E, A>(value, undefined); }
  static right<E, A>(value: A): Either<E, A> { return new Either<E, A>(undefined, value); }
  isLeft(): boolean { return this.left !== undefined; }
  isRight(): boolean { return this.right !== undefined; }
  map<B>(fn: (a: A) => B): Either<E, B> {
    return this.isRight() ? Either.right(fn(this.right!)) : Either.left(this.left!);
  }
  flatMap<B>(fn: (a: A) => Either<E, B>): Either<E, B> {
    return this.isRight() ? fn(this.right!) : Either.left(this.left!);
  }
  fold<B>(leftFn: (e: E) => B, rightFn: (a: A) => B): B {
    return this.isRight() ? rightFn(this.right!) : leftFn(this.left!);
  }
}
function safeDivide(a: number, b: number): Either<string, number> {
  return b === 0 ? Either.left("Division by zero") : Either.right(a / b);
}
const divResult = safeDivide(10, 2).map(x => x * 3).fold(
  err => `Error: ${err}`,
  val => `Result: ${val}`
);
console.log(divResult); // "Result: 15"

// === Task/Future Monad ===
class Task<A> {
  constructor(private run: () => Promise<A>) {}
  static of<A>(value: A): Task<A> { return new Task(() => Promise.resolve(value)); }
  map<B>(fn: (a: A) => B): Task<B> { return new Task(() => this.run().then(fn)); }
  chain<B>(fn: (a: A) => Task<B>): Task<B> { return new Task(() => this.run().then(a => fn(a).run())); }
  async execute(): Promise<A> { return this.run(); }
}
const task = Task.of(5).map(x => x * 2).chain(x => Task.of(x + 1));
task.execute().then(console.log); // 11

// === Transducer Pattern ===
type Reducer<A, B> = (acc: A, val: B) => A;
type Transducer<A, B, C> = (next: Reducer<A, C>) => Reducer<A, B>;
function mapping<A, B, C>(fn: (x: B) => C): Transducer<A, B, C> {
  return (next: Reducer<A, C>) => (acc: A, val: B) => next(acc, fn(val));
}
function filtering<A, B>(pred: (x: B) => boolean): Transducer<A, B, B> {
  return (next: Reducer<A, B>) => (acc: A, val: B) => pred(val) ? next(acc, val) : acc;
}
function transduce<A, B, C>(xf: Transducer<A, B, C>, reducer: Reducer<A, C>, initial: A, input: B[]): A {
  const tr = xf(reducer);
  return input.reduce(tr, initial);
}
const isEven2 = (x: number) => x % 2 === 0;
const double3 = (x: number) => x * 2;
const sum3 = (acc: number, val: number) => acc + val;
const result2 = transduce(mapping(double3), sum3, 0, [1, 2, 3, 4, 5, 6]);
console.log(result2); // 42 (2+4+6+8+10+12)

// === Applicative Functor ===
class ApplicativeBox<T> {
  constructor(private value: T) {}
  static of<T>(v: T): ApplicativeBox<T> { return new ApplicativeBox(v); }
  map<R>(fn: (x: T) => R): ApplicativeBox<R> { return new ApplicativeBox(fn(this.value)); }
  ap<R>(fn: ApplicativeBox<(x: T) => R>): ApplicativeBox<R> { return new ApplicativeBox(fn.value(this.value)); }
}
const addNums = (a: number) => (b: number) => a + b;
const apResult = ApplicativeBox.of(3).map(addNums).ap(ApplicativeBox.of(4));
```

### TypeScript Advanced Functional Patterns

```typescript
// === Function Composition Pipeline ===
type Fn<T, R> = (x: T) => R;
const compose = <T, R>(...fns: Fn<any, any>[]): Fn<T, R> =>
  (x: T) => fns.reduceRight((acc, fn) => fn(acc), x) as R;
const pipe2 = <T, R>(...fns: Fn<any, any>[]): Fn<T, R> =>
  (x: T) => fns.reduce((acc, fn) => fn(acc), x) as R;

const double2 = (x: number) => x * 2;
const increment = (x: number) => x + 1;
const toString = (x: number) => String(x);
const processNumber = compose(String, double2, increment);
console.log(processNumber(5)); // "12"

// === Currying ===
const curry2 = <A, B, R>(fn: (a: A, b: B) => R) => (a: A) => (b: B) => fn(a, b);
const add2 = curry2((a: number, b: number) => a + b);
const add5 = add2(5);
console.log(add5(3)); // 8

// === Functor Pattern ===
interface Functor<T> { map<R>(fn: (x: T) => R): Functor<R> }
class Box<T> implements Functor<T> {
  constructor(private value: T) {}
  map<R>(fn: (x: T) => R): Box<R> { return new Box(fn(this.value)); }
  fold<R>(fn: (x: T) => R): R { return fn(this.value); }
}
const result = new Box(5).map(x => x * 2).map(x => x + 1).fold(x => `Value: ${x}`);
console.log(result); // "Value: 11"

// === Monad Pattern ===
class Maybe<T> {
  private constructor(private value: T | null) {}
  static just<T>(v: T): Maybe<T> { return new Maybe(v); }
  static nothing<T>(): Maybe<T> { return new Maybe<T>(null); }
  map<R>(fn: (x: T) => R): Maybe<R> {
    return this.value === null ? Maybe.nothing() : Maybe.just(fn(this.value));
  }
  flatMap<R>(fn: (x: T) => Maybe<R>): Maybe<R> {
    return this.value === null ? Maybe.nothing() : fn(this.value);
  }
  getOrElse(defaultVal: T): T { return this.value ?? defaultVal; }
}
const safeDiv = (a: number, b: number): Maybe<number> =>
  b === 0 ? Maybe.nothing() : Maybe.just(a / b);
console.log(safeDiv(10, 2).map(x => x * 3).getOrElse(0)); // 15

// === Partial Application ===
const partial2 = <T extends unknown[], R>(fn: (...args: T) => R, ...args: Partial<T>) =>
  (...rest: T) => fn(...args, ...rest) as R;

// === Throttle / Debounce ===
function debounce<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), ms); };
}
function throttle<T extends (...args: any[]) => void>(fn: T, ms: number): (...args: Parameters<T>) => void {
  let last = 0;
  return (...args) => { const now = Date.now(); if (now - last >= ms) { last = now; fn(...args); } };
}
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
