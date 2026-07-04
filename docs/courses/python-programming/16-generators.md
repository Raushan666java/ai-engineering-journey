# Chapter 16: Generators and itertools


> **Previous:** [Decorators](./15-decorators.md) | **Next:** [Exceptions and File I/O](./17-exceptions-files.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Write generator functions using `yield`
- Use generator expressions for memory-efficient iteration
- Communicate with generators using `send()`, `throw()`, and `close()`
- Delegate to subgenerators with `yield from`
- Apply the `itertools` module for efficient iteration patterns

![Generators and itertools](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/16-generators.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|16.1 Generator Functions||Generators produce sequences lazily with `yield` — each call advances to the next yield.|
|16.2 Generator Expressions||Generator expressions (`(x for x in items)`) are lazy alternatives to list comprehensions.|
|16.3 Lazy Evaluation||Lazy evaluation saves memory by computing values on demand rather than storing them all.|
|16.4 send(), throw(), and close()||`send()` enables two-way communication; `yield from` delegates to subgenerators.|
|16.5 yield from||`itertools` provides efficient building blocks: `chain`, `cycle`, `count`, `groupby`, `product`.|
|16.6 itertools Module||undefined|
|16.7 Generator Performance||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Generator Functions]
    S1[Generator Expressions]
    S2[Lazy Evaluation]
    S3[send(), throw(), and close()]
    S4[yield from]
    S5[itertools Module]
    S6[Generator Performance]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
```
## 16.1 Generator Functions

> **One-Sentence Takeaway:** Generators produce sequences lazily with `yield` — each call advances to the next yield.
> **Remember:** Generators are single-use — once exhausted, they raise StopIteration on further calls. Create a new generator for a fresh iteration.




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
print(list(counter))  # [] → exhausted
```

Key differences from regular functions:
- Calling a generator function returns a generator object → it does not execute the function.
- Execution starts when the generator's `__next__()` is called.
- `yield` suspends execution and returns a value.
- The generator raises `StopIteration` when it completes.

## 16.2 Generator Expressions

> **One-Sentence Takeaway:** Generator expressions (`(x for x in items)`) are lazy alternatives to list comprehensions.


Generator expressions are like list comprehensions but lazy:

```python
# List comprehension → eager, creates full list
squares_list = [x ** 2 for x in range(10)]
print(type(squares_list))   # <class 'list'>
print(sum(squares_list))    # 285

# Generator expression → lazy, produces values on demand
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

> **One-Sentence Takeaway:** Lazy evaluation saves memory by computing values on demand rather than storing them all.


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

> **One-Sentence Takeaway:** `send()` enables two-way communication; `yield from` delegates to subgenerators.


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

> **One-Sentence Takeaway:** `itertools` provides efficient building blocks: `chain`, `cycle`, `count`, `groupby`, `product`.


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

> **One-Sentence Takeaway:** undefined


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

# Permutations → order matters, without replacement
print(list(permutations(items, 2)))
# [('A', 'B'), ('A', 'C'), ('B', 'A'), ('B', 'C'), ('C', 'A'), ('C', 'B')]

# Combinations → order does not matter, without replacement
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

# islice → lazy slicing
print(list(islice(range(100), 10)))  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
print(list(islice(range(100), 5, 15, 2)))  # [5, 7, 9, 11, 13]

# takewhile → take while condition is true
print(list(takewhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [1, 3]

# dropwhile → drop while condition is true, then yield all
print(list(dropwhile(lambda x: x < 5, [1, 3, 7, 2, 9])))  # [7, 2, 9]

# accumulate → running total (or other binary function)
print(list(accumulate([1, 2, 3, 4, 5])))  # [1, 3, 6, 10, 15]
import operator
print(list(accumulate([1, 2, 3, 4, 5], operator.mul)))  # [1, 2, 6, 24, 120]
```

## 16.7 Generator Performance

> **One-Sentence Takeaway:** undefined


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


## Concept Comparison Table

| Feature | Generator | List |
|---|---|---|
| Construction | def with yield | [x for x in items] |
| Evaluation | Lazy | Eager |
| Memory | O(1) per item | O(n) for all items |
| Reusable | No (single-use) | Yes |
| Use case | Large/infinite sequences | Small/known sequences |


## Quick Reference

```python
def count_up_to(n):
    i = 1
    while i <= n:
        yield i
        i += 1

squares = (x**2 for x in range(10))
from itertools import islice, chain
list(islice(range(100), 5))
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Data Science|Lazy loading large datasets|16.3|
|Web Dev|Streaming API responses|16.1|
|DevOps|Processing large log files|16.2|
|Automation|Pipeline data streaming|16.1|


## Chapter Quiz

**Q1.** What keyword makes a function a generator?
- return
- yield **<-- Correct**
- await
- async

**Q2.** What is the main advantage of generator expressions?
- faster execution
- memory efficiency **<-- Correct**
- easier syntax
- better debugging

**Q3.** What does send() do?
- stops the generator
- sends a value into the generator **<-- Correct**
- creates a new generator
- exhausts the generator

**Q4.** What does yield from do?
- creates a new generator
- delegates to a subgenerator **<-- Correct**
- stops iteration
- raises StopIteration

**Q5.** Which itertools function produces Cartesian product?
- combinations
- product **<-- Correct**
- permutations
- chain


## TypeScript Parallel

TypeScript uses generator functions with `function*` and `yield`:

```typescript
// TypeScript generator function
function* fibonacci(): Generator<number> {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Consume with next()
const fibGen = fibonacci();
console.log(fibGen.next().value);  // 0
console.log(fibGen.next().value);  // 1
console.log(fibGen.next().value);  // 1
console.log(fibGen.next().value);  // 2

// Helper to take first N values
function take<T>(n: number, gen: Generator<T>): T[] {
  const result: T[] = [];
  for (let i = 0; i < n; i++) {
    const next = gen.next();
    if (next.done) break;
    result.push(next.value);
  }
  return result;
}
console.log(take(10, fibonacci()));  // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// yield* delegation (equivalent to Python yield from)
function* range(start: number, end: number): Generator<number> {
  for (let i = start; i <= end; i++) yield i;
}

function* flattened(): Generator<number> {
  yield* range(1, 3);
  yield* range(10, 12);
  yield* range(100, 102);
}
console.log(take(10, flattened()));  // [1, 2, 3, 10, 11, 12, 100, 101, 102]

// Iterable protocol more common in TS than generators
class RangeIterable implements Iterable<number> {
  constructor(private start: number, private end: number) {}

  [Symbol.iterator](): Iterator<number> {
    let current = this.start;
    return {
      next: (): IteratorResult<number> => {
        if (current > this.end) return { done: true, value: undefined as any };
        return { done: false, value: current++ };
      }
    };
  }
}

for (const n of new RangeIterable(1, 5)) console.log(n);  // 1, 2, 3, 4, 5
```

### Python vs TypeScript Generators

| Concept | Python | TypeScript |
|---------|--------|------------|
| Syntax | `def gen(): yield x` | `function* gen(): yield x` |
| Delegation | `yield from subgen` | `yield* subgen()` |
| Send values | `gen.send(value)` | `gen.next(value)` |
| Throw | `gen.throw(Exception)` | `gen.throw(error)` |
| Expression | `(x for x in items)` | Not available |
| Common utility | `itertools.chain`, `islice` | Manual `take()` function |
| Lazy by default | `range()`, `map()`, `filter()` | `.map()`/`.filter()` on arrays (eager) |

### Practical Generator Applications

Generators shine in real-world scenarios where memory efficiency and lazy evaluation matter:

```python
# 1. Streaming log file reader (memory-safe for GB-sized files)
def follow_log(filepath: str):
    """Yield new lines as they're written to a log file."""
    with open(filepath, "r") as f:
        f.seek(0, 2)  # Go to end of file
        while True:
            line = f.readline()
            if line:
                yield line.strip()
            else:
                import time
                time.sleep(0.1)

# 2. Infinite paginated API consumer
def fetch_all_pages(api_base: str, page_size: int = 100):
    """Yield items from a paginated API, one by one."""
    page = 1
    while True:
        import requests
        response = requests.get(
            f"{api_base}?page={page}&size={page_size}"
        )
        data = response.json()
        if not data["items"]:
            break
        for item in data["items"]:
            yield item
        page += 1

# 3. Sliding window over a sequence
def sliding_window(iterable, n: int):
    """Yield sliding windows of size n over an iterable."""
    from collections import deque
    it = iter(iterable)
    window = deque((next(it) for _ in range(n)), maxlen=n)
    yield tuple(window)
    for item in it:
        window.append(item)
        yield tuple(window)

list(sliding_window([1, 2, 3, 4, 5], 3))
# [(1, 2, 3), (2, 3, 4), (3, 4, 5)]

# 4. Lazy CSV reader (parse without loading all into memory)
def read_csv_lazy(filepath: str):
    """Yield rows from a CSV file as dicts, one at a time."""
    import csv
    with open(filepath, newline="") as f:
        reader = csv.DictReader(f)
        for row in reader:
            yield row

# 5. Generator-based state machine
def state_machine():
    """Yield state transitions based on received inputs."""
    state = "idle"
    while True:
        event = yield state
        if state == "idle" and event == "start":
            state = "running"
        elif state == "running" and event == "pause":
            state = "paused"
        elif state == "running" and event == "stop":
            state = "stopped"
        elif state == "paused" and event == "resume":
            state = "running"
        elif state == "paused" and event == "stop":
            state = "stopped"
        elif state == "stopped" and event == "reset":
            state = "idle"

sm = state_machine()
next(sm)                      # Initialize
print(sm.send("start"))       # running
print(sm.send("pause"))       # paused
print(sm.send("resume"))      # running
print(sm.send("stop"))        # stopped
```

### When NOT to Use Generators

| Situation | Use Instead | Why |
|-----------|-------------|-----|
| Need random access by index | List or tuple | Generators don't support indexing |
| Multiple passes over data | List | Generators are single-use |
| Small fixed dataset | List comprehension | Overhead of generator protocol |
| Parallel processing | `concurrent.futures` | Generators are single-threaded |
```typescript
// Chapter 16: TypeScript Generator Equivalents
// Python: generator with yield → TypeScript: function* with yield
function* fibonacci(): Generator<number, void, unknown> {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fibGen = fibonacci();
console.log(fibGen.next().value);  // 0
console.log(fibGen.next().value);  // 1
console.log(fibGen.next().value);  // 1
console.log(fibGen.next().value);  // 2
console.log(fibGen.next().value);  // 3

// Python: generator expression (x*2 for x in range(5))
// TypeScript: use an iterator or array methods (no native lazy evaluation)
function* range(start: number, end: number): Generator<number> {
  for (let i = start; i < end; i++) yield i;
}
const doubled = Array.from(range(0, 5), (x) => x * 2);
console.log(doubled);  // [0, 2, 4, 6, 8]

// Python: yield from → TypeScript: yield* (delegation)
function* concat<T>(...iters: Iterable<T>[]): Generator<T> {
  for (const iter of iters) yield* iter;
}
const combined = Array.from(concat([1, 2], [3, 4]));
console.log(combined);  // [1, 2, 3, 4]

// Python: itertools.islice → TypeScript: take from generator
function* take<T>(gen: Generator<T>, count: number): Generator<T> {
  for (let i = 0; i < count; i++) {
    const next = gen.next();
    if (next.done) return;
    yield next.value;
  }
}
const first5 = Array.from(take(fibonacci(), 5));
console.log(first5);  // [0, 1, 1, 2, 3]

// Python: two-way communication with .send()
// TypeScript: generators can receive values via yield expression
function* accumulator(): Generator<number, void, number> {
  let sum = 0;
  while (true) {
    sum += yield sum;  // receives value via .next(value)
  }
}
```

### TypeScript Iterable & Iterator Protocol

```typescript
// Python: custom iterator via __iter__/__next__ → TypeScript: Symbol.iterator
class CountDown implements Iterable<number> {
  constructor(private start: number) {}
  [Symbol.iterator](): Iterator<number> {
    let count = this.start;
    return {
      next: (): IteratorResult<number> => {
        if (count < 0) return { done: true, value: undefined as any };
        return { done: false, value: count-- };
      },
    };
  }
}
for (const n of new CountDown(3)) {
  console.log(n);  // 3, 2, 1, 0
}

// Python: itertools.chain → TypeScript: spread or flat
const combined2 = [...[1, 2], ...[3, 4]];  // [1, 2, 3, 4]
// Python: list(itertools.chain([1, 2], [3, 4]))

// Python: itertools.cycle → TypeScript: generator
function* cycle<T>(items: T[]): Generator<T> {
  while (true) {
    for (const item of items) yield item;
  }
}
const colors = cycle(["red", "green", "blue"]);
console.log(colors.next().value);  // red
console.log(colors.next().value);  // green
console.log(colors.next().value);  // blue
console.log(colors.next().value);  // red (wraps around)

// Python: itertools.accumulate → TypeScript: scan
function* accumulate(iter: number[]): Generator<number> {
  let sum = 0;
  for (const n of iter) {
    sum += n;
    yield sum;
  }
}
console.log(Array.from(accumulate([1, 2, 3, 4])));  // [1, 3, 6, 10]

// Python: itertools.permutations → TypeScript: recursive generator
function* permutations<T>(items: T[]): Generator<T[]> {
  if (items.length <= 1) { yield items; return; }
  for (let i = 0; i < items.length; i++) {
    const rest = [...items.slice(0, i), ...items.slice(i + 1)];
    for (const perm of permutations(rest)) {
      yield [items[i], ...perm];
    }
  }
}
console.log(Array.from(permutations([1, 2, 3])));
// [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]
```

### TypeScript Utilities

```typescript
// === Fibonacci Generator (Python yield equivalent) ===
function* fibonacciGen(n: number): Generator<number> {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}
console.log([...fibonacciGen(10)]); // [0,1,1,2,3,5,8,13,21,34]

// === Range Generator ===
function* rangeGen(start: number, end?: number, step = 1): Generator<number> {
  if (end === undefined) { end = start; start = 0; }
  for (let i = start; i < end; i += step) yield i;
}
console.log([...rangeGen(5)]);          // [0,1,2,3,4]
console.log([...rangeGen(2, 10, 3)]);  // [2,5,8]

// === Infinite Sequence Generator ===
function* infiniteSequence(): Generator<number> {
  let i = 0;
  while (true) yield i++;
}
const seq = infiniteSequence();
console.log(seq.next().value); // 0
console.log(seq.next().value); // 1
console.log(seq.next().value); // 2

// === Async Generator (Python async generator equivalent) ===
type AsyncGen<T> = AsyncGenerator<T>;
async function* asyncRange(start: number, end: number): AsyncGen<number> {
  for (let i = start; i < end; i++) {
    await new Promise((r) => setTimeout(r, 10));
    yield i;
  }
}
async function collectAsync<T>(gen: AsyncGen<T>): Promise<T[]> {
  const result: T[] = [];
  for await (const val of gen) result.push(val);
  return result;
}
// collectAsync(asyncRange(0, 5)).then(console.log); // [0,1,2,3,4]

// === Pipeline with Generators (lazy transform) ===
function* mapGen<T, U>(gen: Generator<T>, fn: (x: T) => U): Generator<U> {
  for (const val of gen) yield fn(val);
}
function* filterGen<T>(gen: Generator<T>, pred: (x: T) => boolean): Generator<T> {
  for (const val of gen) if (pred(val)) yield val;
}
const numbers = rangeGen(0, 20);
const evens = filterGen(numbers, (x) => x % 2 === 0);
const doubled = mapGen(evens, (x) => x * 2);
console.log([...doubled]); // [0,4,8,12,16,20,24,28,32,36]

// === Take (limit generator) ===
function* take<T>(gen: Generator<T>, n: number): Generator<T> {
  let count = 0;
  for (const val of gen) { if (count++ >= n) break; yield val; }
}
const naturals = infiniteSequence();
console.log([...take(naturals, 5)]); // [0,1,2,3,4]

// === Cycle Generator ===
function* cycle<T>(arr: T[]): Generator<T> {
  while (true) { for (const val of arr) yield val; }
}
console.log([...take(cycle(["A", "B", "C"]), 7)]); // [A,B,C,A,B,C,A]
```

### TypeScript Generator & Iterator Patterns

```typescript
// === Generator Function (Python: def generator) ===
function* count(start: number, end: number, step = 1): Generator<number> {
  for (let i = start; i < end; i += step) yield i;
}
for (const n of count(0, 5)) console.log(n); // 0, 1, 2, 3, 4

// === Infinite Generator (Python: while True + yield) ===
function* fibonacciSeq(): Generator<number> {
  let a = 0, b = 1;
  while (true) { yield a; [a, b] = [b, a + b]; }
}
const fib = fibonacciSeq();
for (let i = 0; i < 10; i++) console.log(fib.next().value); // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

// === Generator with return ===
function* withReturn(): Generator<string, string> {
  yield "first";
  yield "second";
  return "done";
}
const gen = withReturn();
console.log(gen.next()); // { value: "first", done: false }
console.log(gen.next()); // { value: "second", done: false }
console.log(gen.next()); // { value: "done", done: true }

// === yield* (Python: yield from) ===
function* inner(): Generator<number> {
  yield 1; yield 2; yield 3;
}
function* outer(): Generator<number | string> {
  yield* inner(); // Python: yield from inner()
  yield "done";
}
console.log([...outer()]); // [1, 2, 3, "done"]

// === Custom Iterable Class ===
class RangeIterable implements Iterable<number> {
  constructor(private start: number, private end: number, private step = 1) {}
  *[Symbol.iterator](): Generator<number> {
    for (let i = this.start; i < this.end; i += this.step) yield i;
  }
}
console.log([...new RangeIterable(2, 10, 2)]); // [2, 4, 6, 8]

// === Lazy Sequence via Iterator Protocol ===
class LazySequence<T> {
  private items: T[];
  private operations: Array<(arr: T[]) => T[]> = [];
  constructor(items: T[]) { this.items = [...items]; }
  filter(pred: (x: T) => boolean): this {
    this.operations.push(arr => arr.filter(pred));
    return this;
  }
  map<R>(fn: (x: T) => R): LazySequence<R> {
    const ops = this.operations;
    const seq = new LazySequence<R>(this.items as any);
    seq.operations = ops as any;
    seq.operations.push(arr => arr.map(fn as any) as any);
    return seq;
  }
  toArray(): T[] {
    let result = [...this.items];
    for (const op of this.operations) result = op(result);
    return result;
  }
}
const seq = new LazySequence([1, 2, 3, 4, 5, 6]);
const result2 = seq.filter(x => x % 2 === 0).map(x => x * 10).toArray();
console.log(result2); // [20, 40, 60]

// === Infinite Generator with Take ===
function* naturalNumbers(): Generator<number> {
  let n = 1;
  while (true) yield n++;
}
function take<T>(n: number, iterable: Iterable<T>): T[] {
  const result: T[] = [];
  const iterator = iterable[Symbol.iterator]();
  for (let i = 0; i < n; i++) {
    const next = iterator.next();
    if (next.done) break;
    result.push(next.value);
  }
  return result;
}
console.log(take(5, naturalNumbers())); // [1, 2, 3, 4, 5]
```

### TypeScript Generator Pipeline Patterns

```typescript
// === Composable Generator Pipeline ===
class GeneratorPipeline<T, R> {
  constructor(private gen: () => Generator<T, R>) {}
  map<U>(fn: (x: T) => U): GeneratorPipeline<U, R> {
    const self = this.gen;
    return new GeneratorPipeline(function* () {
      const inner = self();
      let result = inner.next();
      while (!result.done) {
        yield fn(result.value);
        result = inner.next();
      }
      return result.value;
    });
  }
  filter(pred: (x: T) => boolean): GeneratorPipeline<T, R> {
    const self = this.gen;
    return new GeneratorPipeline(function* () {
      const inner = self();
      let result = inner.next();
      while (!result.done) {
        if (pred(result.value)) yield result.value;
        result = inner.next();
      }
      return result.value;
    });
  }
  take(n: number): GeneratorPipeline<T, R> {
    const self = this.gen;
    return new GeneratorPipeline(function* () {
      let count = 0;
      const inner = self();
      let result = inner.next();
      while (!result.done && count < n) {
        yield result.value;
        count++;
        result = inner.next();
      }
      return result.value;
    });
  }
  reduce<A>(fn: (acc: A, x: T) => A, initial: A): A {
    let acc = initial;
    const inner = this.gen();
    let result = inner.next();
    while (!result.done) { acc = fn(acc, result.value); result = inner.next(); }
    return acc;
  }
  toArray(): T[] {
    const arr: T[] = [];
    const inner = this.gen();
    let result = inner.next();
    while (!result.done) { arr.push(result.value); result = inner.next(); }
    return arr;
  }
}

// === Coroutine (two-way generator) ===
function* coroutine<T, R>(): Generator<T | undefined, R, T> {
  let value: T | undefined = yield;
  while (value !== undefined) {
    value = yield value;
  }
  return "done" as R;
}

// === Async Generator with Backpressure ===
async function* backpressureGenerator<T>(items: T[], batchSize: number): AsyncGenerator<T[]> {
  for (let i = 0; i < items.length; i += batchSize) {
    await new Promise(resolve => setImmediate(resolve));
    yield items.slice(i, i + batchSize);
  }
}

// === Event Emitter as Generator ===
class EventGenerator<T> {
  private handlers = new Map<string, ((data: T) => void)[]>();
  private buffer: T[] = [];
  on(event: string, handler: (data: T) => void): void {
    if (!this.handlers.has(event)) this.handlers.set(event, []);
    this.handlers.get(event)!.push(handler);
  }
  emit(event: string, data: T): void {
    this.handlers.get(event)?.forEach(h => h(data));
    this.buffer.push(data);
  }
  async *stream(event: string): AsyncGenerator<T> {
    while (true) {
      if (this.buffer.length > 0) yield this.buffer.shift()!;
      else yield await new Promise<T>(resolve => this.on(event, resolve));
    }
  }
}

// === Range Generator ===
function* range2(start: number, end: number, step = 1): Generator<number> {
  for (let i = start; i < end; i += step) yield i;
}

const piped = new GeneratorPipeline(() => range2(0, Infinity))
  .filter(x => x % 2 === 0)
  .map(x => x * 10)
  .take(5);
console.log(piped.toArray()); // [0, 20, 40, 60, 80]

const reduced = new GeneratorPipeline(() => range2(1, 11))
  .filter(x => x % 2 === 1)
  .reduce((acc, x) => acc + x, 0);
console.log(reduced); // 25 (1 + 3 + 5 + 7 + 9)
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
