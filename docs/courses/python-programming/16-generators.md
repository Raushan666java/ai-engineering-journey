# Chapter 16: Generators and itertools

## Learning Objectives

By the end of this chapter, students will be able to:
- Write generator functions using `yield`
- Use generator expressions for memory-efficient iteration
- Communicate with generators using `send()`, `throw()`, and `close()`
- Delegate to subgenerators with `yield from`
- Apply the `itertools` module for efficient iteration patterns

![Generators and itertools](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/16-generators.png)

## 16.1 Generator Functions

A generator function contains `yield` and returns a generator iterator:

```python
def count_up_to(n: int):
    """Generate numbers from 1 to n."""
    i = 1
    while i <= n:
        yield i
        i += 1

counter = count_up_to(5)
print(type(counter))  # <class 'generator'>

for num in counter:
    print(num, end=" ")  # 1 2 3 4 5

print()

# Generators are single-use
print(list(counter))  # [] — exhausted
```

Key differences from regular functions:
- Calling a generator function returns a generator object — it does not execute the function.
- Execution starts when the generator's `__next__()` is called.
- `yield` suspends execution and returns a value.
- The generator raises `StopIteration` when it completes.

## 16.2 Generator Expressions

Generator expressions are like list comprehensions but lazy:

```python
# List comprehension — eager, creates full list
squares_list = [x ** 2 for x in range(10)]
print(type(squares_list))   # <class 'list'>
print(sum(squares_list))    # 285

# Generator expression — lazy, produces values on demand
squares_gen = (x ** 2 for x in range(10))
print(type(squares_gen))    # <class 'generator'>
print(sum(squares_gen))     # 285

# Memory comparison
import sys
big_list = [x for x in range(1000000)]
big_gen = (x for x in range(1000000))
print(sys.getsizeof(big_list))  # ~8 MB
print(sys.getsizeof(big_gen))   # ~200 bytes
```

Generator expressions are memory-efficient for large sequences because they produce one value at a time.

## 16.3 Lazy Evaluation

Generators enable processing of data streams larger than available memory:

```python
def read_large_file(file_path: str):
    """Read a large file line by line without loading it entirely."""
    with open(file_path) as f:
        for line in f:
            yield line.strip()

# Process lines without loading the whole file
long_lines = (line for line in read_large_file("data.txt") if len(line) > 100)
for line in long_lines:
    pass  # process each long line
```

## 16.4 send(), throw(), and close()

Generators can receive values via `send()`:

```python
def echo():
    """Echo received values."""
    while True:
        received = yield
        print(f"Received: {received}")

gen = echo()
next(gen)           # advance to the first yield
gen.send("hello")   # Received: hello
gen.send(42)        # Received: 42
gen.close()         # stop the generator
```

Combining `send()` with `yield` to create coroutines:

```python
def running_average():
    """Compute running average of sent values."""
    total = 0.0
    count = 0
    average = 0.0
    while True:
        value = yield average
        if value is not None:
            total += value
            count += 1
            average = total / count

avg = running_average()
next(avg)               # prime the generator
print(avg.send(10))     # 10.0
print(avg.send(20))     # 15.0
print(avg.send(30))     # 20.0
avg.close()
```

`throw()` raises an exception inside the generator:

```python
def gen():
    try:
        yield 1
        yield 2
        yield 3
    except ValueError:
        print("ValueError caught in generator")

g = gen()
print(next(g))    # 1
g.throw(ValueError)  # ValueError caught in generator
```

## 16.5 yield from

`yield from` delegates to a subgenerator:

```python
def chain(*iterables):
    """Chain multiple iterables into a single generator."""
    for iterable in iterables:
        yield from iterable

result = list(chain([1, 2, 3], "hello", range(3)))
print(result)  # [1, 2, 3, 'h', 'e', 'l', 'l', 'o', 0, 1, 2]
```

Without `yield from`:

```python
def chain_without(*iterables):
    for iterable in iterables:
        for item in iterable:
            yield item
```

`yield from` is more concise and correctly handles `send()` and `throw()` propagation to the subgenerator.

### 16.5.1 Flatten Nested Sequences

```python
def flatten(nested):
    """Recursively flatten nested sequences."""
    for item in nested:
        if isinstance(item, (list, tuple)):
            yield from flatten(item)
        else:
            yield item

nested = [1, [2, [3, 4], 5], 6]
print(list(flatten(nested)))  # [1, 2, 3, 4, 5, 6]
```

## 16.6 itertools Module

### 16.6.1 Infinite Iterators

```python
from itertools import count, cycle, repeat

# count(start=0, step=1)
for i in count(10, 2.5):
    if i > 20:
        break
    print(i, end=" ")  # 10 12.5 15 17.5 20
print()

# cycle(iterable)
colors = cycle(["red", "green", "blue"])
for _ in range(7):
    print(next(colors), end=" ")  # red green blue red green blue red
print()

# repeat(object, times=None)
for val in repeat("hello", 3):
    print(val, end=" ")  # hello hello hello
print()
```

### 16.6.2 Combinatoric Iterators

```python
from itertools import permutations, combinations, combinations_with_replacement, product

items = ["A", "B", "C"]

# Permutations — order matters, without replacement
print(list(permutations(items, 2)))
# [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]

# Combinations — order does not matter, without replacement
print(list(combinations(items, 2)))
# [('A', 'B'), ('A', 'C'), ('B', 'C')]

# Combinations with replacement
print(list(combinations_with_replacement(items, 2)))
# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'B'), ('B', 'C'), ('C', 'C')]

# Cartesian product
print(list(product(items, repeat=2)))
# [('A', 'A'), ('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'B'), ('B', 'C'), ('C', 'A'), ('C', 'B'), ('C', 'C')]
```

### 16.6.3 groupby

`groupby` groups consecutive elements by a key function:

```python
from itertools import groupby

data = [("fruit", "apple"), ("fruit", "banana"), ("veg", "carrot"), ("fruit", "cherry")]
# groupby requires sorted input
sorted_data = sorted(data, key=lambda x: x[0])

for key, group in groupby(sorted_data, key=lambda x: x[0]):
    items = [item[1] for item in group]
    print(f"{key}: {items}")
# fruit: ['apple', 'banana', 'cherry']
# veg: ['carrot']
```

### 16.6.4 chain, zip, and More

```python
from itertools import chain, zip_longest, islice, takewhile, dropwhile, accumulate

# chain
print(list(chain([1, 2], [3, 4], [5])))  # [1, 2, 3, 4, 5]

# zip_longest (pads shorter iterables)
a, b = [1, 2, 3], [10, 20]
print(list(zip_longest(a, b, fillvalue=0)))  # [(1, 10), (2, 20), (3, 0)]

# islice — lazy slicing
print(list(islice(range(100), 10)))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list(islice(range(100), 5, 15, 2)))  # [5, 7, 9, 11, 13]

# takewhile — take while condition is true
print(list(takewhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [1, 3]

# dropwhile — drop while condition is true, then yield all
print(list(dropwhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [7, 2, 9]

# accumulate — running total (or other binary function)
print(list(accumulate([1, 2, 3, 4, 5])))  # [1, 3, 6, 10, 15]
import operator
print(list(accumulate([1, 2, 3, 4, 5], operator.mul)))  # [1, 2, 6, 24, 120]
```

## 16.7 Generator Performance

Generators are memory-efficient but not always faster:

```python
import time, sys

def squares_list(n: int) -> list:
    return [x ** 2 for x in range(n)]

def squares_gen(n: int):
    return (x ** 2 for x in range(n))

n = 10_000_000
# Memory
print(sys.getsizeof(squares_list(1000)))   # ~9 KB
print(sys.getsizeof(squares_gen(1000)))    # ~200 B

# Time (summing)
start = time.time()
total1 = sum(squares_list(n))
t1 = time.time() - start

start = time.time()
total2 = sum(squares_gen(n))
t2 = time.time() - start

print(f"List: {t1:.3f}s, Gen: {t2:.3f}s")  # Generator often slightly slower
```

## Summary

- Generators use `yield` to produce sequences lazily.
- Generator expressions are lazy alternatives to list comprehensions.
- `send()` enables two-way communication; `throw()` injects exceptions.
- `yield from` delegates to subgenerators.
- `itertools` provides efficient building blocks: `chain`, `cycle`, `count`, `groupby`, `permutations`, `combinations`, `product`, `islice`, `accumulate`.

## Exercises

### Review Questions

1. How does a generator differ from a regular function in terms of execution?
2. What is the primary advantage of a generator expression over a list comprehension?
3. How does `send()` differ from `next()`?
4. What does `yield from` do?
5. What is the difference between `itertools.permutations` and `itertools.combinations`?

### Application Problems

1. Write a generator `fibonacci()` that yields Fibonacci numbers indefinitely. Use it with `itertools.islice` to get the first 20 numbers. Then find the first Fibonacci number greater than 10,000.
2. Use `itertools.groupby` to group a list of words by their first letter. Sort the list first. Print each letter group.
3. Implement `chunked(iterable, n)` that yields chunks of size n from an iterable. Use `yield from` and `itertools.islice`.

### Challenge Problem

Build a generator-based data pipeline for processing sensor readings. Start with a generator `read_sensors()` that yields random (timestamp, value) pairs. Pipe through generators: `filter_outliers` (removes values more than 3 standard deviations from rolling mean), `smooth` (moving average over window of 5), `scale` (normalize to 0-1 range), and `aggregate` (yields average of every 10 readings). Use `yield from` where appropriate. Test the pipeline with 100 sensor readings.
