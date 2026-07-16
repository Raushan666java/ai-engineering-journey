# Chapter 8: Dictionaries


> **Previous:** [Tuples and Sets](./07-tuples-sets.md) | **Next:** [Functions](./09-functions.md)
## Learning Objectives

By the end of this chapter, students will be able to:
- Create and manipulate dictionaries using multiple construction techniques
- Use dictionary comprehensions to build dicts declaratively
- Apply specialised dict types: defaultdict, Counter, OrderedDict
- Work with dict views for efficient iteration
- Merge dictionaries using the `|` operator
- Convert between dictionaries and JSON

<!-- Image Gallery -->
<section class="lesson-visuals" aria-label="Visual learning resources">
  <header><span>VISUAL LEARNING</span><h2>See it. Review it. Remember it.</h2></header>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/08-dictionaries/handwritten-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/08-dictionaries/handwritten-notes.png" alt="Handwritten notes" loading="lazy">
    <span><strong>Handwritten notes</strong>Condensed notes for deliberate review.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/08-dictionaries/sticky-notes.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/08-dictionaries/sticky-notes.png" alt="Sticky-note revision" loading="lazy">
    <span><strong>Sticky-note revision</strong>Fast recall prompts for revision.</span>
  </a>
  <a class="lesson-visual-card" href="../../assets/images/lessons/python-programming/08-dictionaries/visual-explanation.png" target="_blank" rel="noopener">
    <img src="../../assets/images/lessons/python-programming/08-dictionaries/visual-explanation.png" alt="Visual concept guide" loading="lazy">
    <span><strong>Visual concept guide</strong>A connected explanation of the key ideas.</span>
  </a>
</section>
<!-- End Image Gallery -->


![Dictionaries](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/python-programming/08-dictionaries.png)


## Chapter at a Glance

| Section | Topic | Key Concept |
|---------|-------|-------------|
|8.1 Dictionary Basics||Learn multiple ways to construct dictionaries and the hashable-key constraint.|
|8.2 Basic Operations||Master get/set/delete ops: `[]`, `.get()`, `.update()`, `.pop()`, `del`.|
|8.3 Iteration||Dict views (`.keys()`, `.values()`, `.items()`) are dynamic and support set operations.|
|8.4 Dictionary Comprehensions||`defaultdict` auto-creates missing entries; `Counter` tallies hashable objects.|
|8.5 defaultdict||The `|` operator merges dicts concisely; `json.dumps`/`json.loads` bridge dicts and JSON.|
|8.6 Counter||undefined|
|8.7 OrderedDict||undefined|
|8.8 Dict Views||undefined|
|8.9 Merging Dictionaries||undefined|
|8.10 JSON Conversion||undefined|
|8.11 Memory and Performance||undefined|


## Chapter Roadmap

```mermaid
flowchart LR
    S0[Dictionary Basics]
    S1[Basic Operations]
    S2[Iteration]
    S3[Dictionary Comprehensions]
    S4[defaultdict]
    S5[Counter]
    S6[OrderedDict]
    S7[Dict Views]
    S8[Merging Dictionaries]
    S9[JSON Conversion]
    S10[Memory and Performance]
    S0 --> S1
    S1 --> S2
    S2 --> S3
    S3 --> S4
    S4 --> S5
    S5 --> S6
    S6 --> S7
    S7 --> S8
    S8 --> S9
    S9 --> S10
```
## 8.1 Dictionary Basics

> **One-Sentence Takeaway:** Learn multiple ways to construct dictionaries and the hashable-key constraint.


A dictionary maps keys to values. Keys must be hashable (immutable types). Dictionaries maintain insertion order (Python 3.7+):

```python
empty = {}
ages = {"Alice": 30, "Bob": 25, "Charlie": 35}

# dict() constructor
kwargs = dict(name="Alice", age=30)          # keyword args
pairs = dict([("a", 1), ("b", 2)])           # iterable of pairs
zipped = dict(zip(["x", "y"], [10, 20]))     # from two sequences
print(kwargs)   # {'name': 'Alice', 'age': 30}
print(zipped)   # {'x': 10, 'y': 20}
```

## 8.2 Basic Operations

> **One-Sentence Takeaway:** Master get/set/delete ops: `[]`, `.get()`, `.update()`, `.pop()`, `del`.


```python
d = {"a": 1, "b": 2, "c": 3}

# Access
print(d["a"])            # 1 â†’ raises KeyError if missing
print(d.get("x", 0))     # 0 â†’ safe access with default
print(d.get("a"))        # 1

# Modification
d["d"] = 4               # add or update
d.update({"e": 5, "f": 6})  # bulk update
print(d)

# Deletion
del d["f"]               # raises KeyError if missing
popped = d.pop("e")      # returns value, raises KeyError if missing
d.pop("x", None)         # safe pop with default
last = d.popitem()       # removes and returns (key, value) in LIFO order

# Membership
print("a" in d)          # True â†’ checks keys only
print(1 in d)            # False

# Length
print(len(d))            # 3
```

## 8.3 Iteration

> **One-Sentence Takeaway:** Dict views (`.keys()`, `.values()`, `.items()`) are dynamic and support set operations.


```python
d = {"name": "Alice", "age": 30, "city": "NYC"}

for key in d:                         # keys (default)
    print(key, end=" ")               # name age city
print()

for key in d.keys():                  # explicit keys
    print(key, end=" ")
print()

for value in d.values():              # values
    print(value, end=" ")             # Alice 30 NYC
print()

for key, value in d.items():          # key-value pairs
    print(f"{key}={value}", end=" ")  # name=Alice age=30 city=NYC
print()
```

## 8.4 Dictionary Comprehensions

> **One-Sentence Takeaway:** `defaultdict` auto-creates missing entries; `Counter` tallies hashable objects.


```python
squares = {x: x ** 2 for x in range(10)}
print(squares)
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16, 5: 25, 6: 36, 7: 49, 8: 64, 9: 81}

# With condition
even_squares = {x: x ** 2 for x in range(10) if x % 2 == 0}
print(even_squares)   # {0: 0, 2: 4, 4: 16, 6: 36, 8: 64}

# Swapping keys and values
original = {"a": 1, "b": 2, "c": 3}
inverted = {v: k for k, v in original.items()}
print(inverted)        # {1: 'a', 2: 'b', 3: 'c'}

# Transforming values
prices = {"apple": 0.5, "banana": 0.75, "cherry": 1.5}
with_tax = {item: price * 1.2 for item, price in prices.items()}
print(with_tax)
# {'apple': 0.6, 'banana': 0.9, 'cherry': 1.8}
```

## 8.5 defaultdict

> **One-Sentence Takeaway:** The `|` operator merges dicts concisely; `json.dumps`/`json.loads` bridge dicts and JSON.


`defaultdict` provides default values for missing keys:

```python
from collections import defaultdict

# List factory â†’ group items
words = ["apple", "banana", "apricot", "blueberry", "cherry"]
by_first = defaultdict(list)
for word in words:
    by_first[word[0]].append(word)
print(dict(by_first))
# {'a': ['apple', 'apricot'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}

# Int factory â†’ counting
counter = defaultdict(int)
for c in "hello world":
    counter[c] += 1
print(dict(counter))
# {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}

# Set factory â†’ collecting unique values
adjacency = defaultdict(set)
edges = [(1, 2), (1, 3), (2, 3), (2, 4)]
for a, b in edges:
    adjacency[a].add(b)
    adjacency[b].add(a)
print({k: list(v) for k, v in adjacency.items()})
# {1: [2, 3], 2: [1, 3, 4], 3: [1, 2], 4: [2]}
```

## 8.6 Counter

> **One-Sentence Takeaway:** undefined


`Counter` counts hashable objects:

```python
from collections import Counter

# Basic counting
cnt = Counter("mississippi")
print(cnt)   # Counter({'i': 4, 's': 4, 'p': 2, 'm': 1})

# Most common
print(cnt.most_common(2))   # [('i', 4), ('s', 4)]

# Counter operations
c1 = Counter(a=3, b=1, c=2)
c2 = Counter(a=1, b=2, d=3)

print(c1 + c2)              # Counter({'a': 4, 'b': 3, 'd': 3, 'c': 2})
print(c1 - c2)              # Counter({'a': 2, 'c': 2})  (no negatives)
print(c1 & c2)              # Counter({'a': 1, 'b': 1})    intersection (min)
print(c1 | c2)              # Counter({'a': 3, 'd': 3, 'c': 2, 'b': 2})  union (max)

# Elements
print(list(c1.elements()))  # ['a', 'a', 'a', 'b', 'c', 'c']

# Access with default
print(cnt["z"])             # 0 (no KeyError)
```

## 8.7 OrderedDict

> **One-Sentence Takeaway:** undefined


`OrderedDict` maintains insertion order (redundant in Python 3.7+ for regular dicts) but provides extra methods:

```python
from collections import OrderedDict

od = OrderedDict()
od["z"] = 1
od["a"] = 2
od["m"] = 3
print(od)  # OrderedDict([('z', 1), ('a', 2), ('m', 3)])

# Move to end/beginning
od.move_to_end("z")                    # move 'z' to end
print(od)  # OrderedDict([('a', 2), ('m', 3), ('z', 1)])
od.move_to_end("z", last=False)        # move to beginning
print(od)  # OrderedDict([('z', 1), ('a', 2), ('m', 3)])

# Pop item from either end
print(od.popitem(last=True))   # ('m', 3)   LIFO
print(od.popitem(last=False))  # ('z', 1)   FIFO
```

## 8.8 Dict Views

> **One-Sentence Takeaway:** undefined


Methods `.keys()`, `.values()`, `.items()` return dynamic views that reflect dict changes:

```python
d = {"a": 1, "b": 2}
keys = d.keys()
values = d.values()

print(list(keys))     # ['a', 'b']
d["c"] = 3
print(list(keys))     # ['a', 'b', 'c']  (view updated automatically)

# Set-like operations on keys
other = {"b": 20, "c": 30, "d": 40}
print(d.keys() & other.keys())    # {'b', 'c'}   intersection
print(d.keys() - other.keys())    # {'a'}         difference
print(d.keys() | other.keys())    # {'a', 'b', 'c', 'd'}  union
```

## 8.9 Merging Dictionaries

> **One-Sentence Takeaway:** undefined


Python 3.9+ provides the `|` operator for merging:

```python
d1 = {"a": 1, "b": 2}
d2 = {"b": 3, "c": 4}

merged = d1 | d2          # right side wins conflicts
print(merged)             # {'a': 1, 'b': 3, 'c': 4}

d1 |= d2                  # in-place merge (modifies d1)
print(d1)                 # {'a': 1, 'b': 3, 'c': 4}

# Older approaches (still useful for compatibility)
copy_merge = {**d1, **d2}
print(copy_merge)

merge_with_update = d1.copy()
merge_with_update.update(d2)
```

## 8.10 JSON Conversion

> **One-Sentence Takeaway:** undefined


```python
import json

data = {
    "name": "Alice",
    "age": 30,
    "pets": ["cat", "dog"],
    "address": {"city": "NYC", "zip": 10001},
    "is_student": False
}

# Python dict -> JSON string
json_str = json.dumps(data, indent=2)
print(json_str)
# {
#   "name": "Alice",
#   "age": 30,
#   ...
# }

# JSON string -> Python dict
parsed = json.loads(json_str)
print(parsed["name"])       # Alice

# File I/O
with open("data.json", "w") as f:
    json.dump(data, f, indent=2)

with open("data.json", "r") as f:
    loaded = json.load(f)
```

JSON keys must be strings. Python dict keys are automatically converted:

```python
d = {1: "one", True: "true"}
print(json.dumps(d))   # {"1": "true"}  â†’ True is a subclass of int
```

## 8.11 Memory and Performance

> **One-Sentence Takeaway:** undefined


- Dictionaries use hash tables: O(1) average for get, set, delete, membership.
- Keys must be hashable (immutable). Lists, dicts, and sets cannot be keys.
- The hash table grows when it reaches about two-thirds capacity; resizing is amortised O(1).
- For small dicts, the overhead of the hash table may exceed the data itself.


## Concept Comparison Table

| Aspect | dict | defaultdict | Counter |
|---|---|---|---|
| Default missing key | KeyError | Factory function | 0 |
| Use case | General mapping | Grouping / auto-init | Counting hashable objects |
| Ordering | Insertion order (3.7+) | Insertion order | Insertion order |
| Extra features | Views, | merge | Always has a default | most_common, arithmetic |


## Quick Reference

```python
d = {"a": 1, "b": 2}
d.get("x", 0)      # 0
d.keys() & {"b":3}.keys()  # {"b"}
from collections import defaultdict, Counter
Counter("mississippi").most_common(2)
```

## Cross-Application Matrix

| Area | Application | Relevant Section |
|------|-------------|------------------|
|Web Dev|JSON API response parsing|8.10|
|Data Science|Word frequency with Counter|8.6|
|DevOps|Config file as nested dict|8.1|
|Automation|Grouping log entries by date|8.5|


## Chapter Quiz

**Q1.** What type can be used as a dict key?
- lists
- dicts
- tuples **<-- Correct**
- sets

**Q2.** Which method safely accesses a key with a default?
- d[key]
- d.get(key) **<-- Correct**
- d.fetch(key)
- d.pop(key)

**Q3.** What does Counter.most_common(2) return?
- 2 most common values
- 2 most common keys
- 2 most common (key,count) pairs **<-- Correct**
- first 2 items

**Q4.** What is the time complexity of dict lookup?
- O(1) average **<-- Correct**
- O(n)
- O(log n)
- O(n^2)

**Q5.** Which operator merges two dicts in Python 3.9+?
- +
- | **<-- Correct**
- &
- merge()


## TypeScript Parallel

TypeScript uses `Map<K, V>` for general dictionary semantics and `Record<K, V>` (plain objects) for string-keyed mappings:

```typescript
// TypeScript Map (ordered, any key type)
const scores: Map<string, number> = new Map([
  ["Alice", 95],
  ["Bob", 87],
  ["Charlie", 92]
]);
scores.set("Diana", 88);
console.log(scores.get("Alice"));  // 95
console.log(scores.has("Eve"));    // false

// Iteration equivalent to dict.items()
for (const [name, score] of scores) {
  console.log(`${name}: ${score}`);
}

// TypeScript Record (string keys via plain object)
type Inventory = Record<string, number>;
const stock: Inventory = {
  apples: 5,
  bananas: 3
};
stock["cherries"] = 10;

// Default value pattern (Python dict.get equivalent)
function getScore(map: Map<string, number>, key: string): number {
  return map.get(key) ?? 0;  // nullish coalescing
}

// Map iteration methods
scores.keys();     // like dict.keys()
scores.values();   // like dict.values()
scores.entries();  // like dict.items()

// Object.keys/values/entries for Record types
const names = Object.keys(stock);     // ["apples", "bananas", "cherries"]
const counts = Object.values(stock);  // [5, 3, 10]
```

### Key Differences


| Feature | Python dict | TypeScript Map | TypeScript Record |
|---------|-------------|----------------|-------------------|
| Key types | Any immutable | Any type | string (or number) |
| Ordered | Yes (3.7+) | Yes | Insertion (own props) |
| Literal | `{k: v}` | `new Map()` | `{k: v}` |
| Length | `len(d)` | `map.size` | `Object.keys(r).length` |
| Missing key | `d.get(k)` or raise | `.get(k)` or `undefined` | `r.k ?? default` |
| Delete | `del d[k]` | `.delete(k)` | `delete r.k` |
| Clear | `d.clear()` | `.clear()` | reassign or loop delete |

### Dict Performance and Internals


```mermaid
flowchart LR
    A[Key] --> B[hash function]
    B --> C[hash value]
    C --> D[table index]
    D --> E{Slot occupied?}
    E -->|No| F[Store key-value]
    E -->|Yes, key match| G[Overwrite value]
    E -->|Yes, key mismatch| H[Open addressing]
    H --> D
```

Python dictionaries use a hash table with open addressing. Keys are hashed, and the hash determines the slot. On collision, Python probes the next available slot. Load factor (ratio of filled slots) triggers resizing at ~2/3 capacity to maintain O(1) average lookup.

```python
# Memory usage comparison
import sys

d = dict(zip(range(1000), range(1000)))
print(f"Dict size: {sys.getsizeof(d)} bytes")  # ~41KB for 1000 items

# Key distribution matters
# Strings, tuples of strings, and integers are most efficient
# Custom objects need good __hash__ implementation
```

### Real-World Dict Patterns


```python
# Caching / memoization
cache: dict[str, int] = {}

def expensive_compute(n: int) -> int:
    key = str(n)
    if key not in cache:
        cache[key] = sum(i * i for i in range(n))
    return cache[key]

# Configuration with nested dicts
config = {
    "database": {
        "host": "localhost",
        "port": 5432,
        "credentials": {
            "user": "admin",
            "password": "${DB_PASSWORD}"  # placeholder pattern
        }
    },
    "logging": {
        "level": "INFO",
        "file": "/var/log/app.log"
    }
}

# Graph represented as adjacency dict
graph: dict[str, list[str]] = {
    "A": ["B", "C"],
    "B": ["A", "D", "E"],
    "C": ["A", "F"],
    "D": ["B"],
    "E": ["B", "F"],
    "F": ["C", "E"]
}

# BFS traversal
from collections import deque
def bfs(graph: dict, start: str) -> list[str]:
    visited = set()
    queue = deque([start])
    result = []
    while queue:
        node = queue.popleft()
        if node not in visited:
            visited.add(node)
            result.append(node)
            queue.extend(neighbor for neighbor in graph[node]
                        if neighbor not in visited)
    return result

print(bfs(graph, "A"))  # ['A', 'B', 'C', 'D', 'E', 'F']
```

### Dict vs Other Data Structures


| Need | Data Structure | Example |
|------|---------------|---------|
| Key-value mapping | `dict` | `{"name": "Alice", "age": 30}` |
| Ordered key-value | `OrderedDict` | Maintains explicit order (rarely needed since 3.7+) |
| Default values | `defaultdict` | `dd["missing"]` returns a default |
| Counting | `Counter` | `Counter("abracadabra")` |
| Multiple keys same value | `dict` of lists | `defaultdict(list)` |
| Bi-directional map | Two dicts or `bidict` | Lookup by key or value |
| LRU cache | `functools.lru_cache` | Cache with max size |

```python
# LRU cache using dict (manual implementation)
class LRUCache:
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.cache: dict = {}
        self.order: list = []

    def get(self, key):
        if key in self.cache:
            self.order.remove(key)
            self.order.append(key)
            return self.cache[key]
        return -1

    def put(self, key, value):
        if key in self.cache:
            self.order.remove(key)
        elif len(self.cache) >= self.capacity:
            oldest = self.order.pop(0)
            del self.cache[oldest]
        self.cache[key] = value
        self.order.append(key)
```
```typescript
// Chapter 8: TypeScript Dictionary/Map Equivalents
// Python: dict literal â†’ TypeScript: object or Map
const user: Record<string, string | number> = {
  name: "Alice",
  email: "alice@example.com",
  age: 30,
};
// Equivalent Python: user = {"name": "Alice", "email": "alice@example.com", "age": 30}

// Python: d[key] â†’ TypeScript: bracket or dot notation
console.log(user["name"]);  // "Alice"
console.log(user.name);     // "Alice" (if key is a valid identifier)

// Python: d.get(key, default) â†’ TypeScript: ?? operator
const city: string = (user.city as string) ?? "Unknown";
// Equivalent Python: user.get("city", "Unknown")

// Python: key in d â†’ TypeScript: "key" in obj
console.log("name" in user);  // true

// Python: d.keys() / d.values() / d.items() â†’ TypeScript: Object.keys/values/entries
console.log(Object.keys(user));    // ["name", "email", "age"]
console.log(Object.values(user));  // ["Alice", "alice@example.com", 30]
console.log(Object.entries(user)); // [["name","Alice"],["email","alice@example.com"],["age",30]]

// Python: dict comprehension â†’ TypeScript: Object.fromEntries + map
const keys: string[] = ["a", "b", "c"];
const dict: Record<string, number> = Object.fromEntries(
  keys.map((k, i) => [k, i])
);
console.log(dict);  // {a: 0, b: 1, c: 2}

// Python: defaultdict(list) â†’ TypeScript: manual or Map with default
const groups: Map<string, number[]> = new Map();
const addToGroup = (key: string, value: number): void => {
  if (!groups.has(key)) groups.set(key, []);
  groups.get(key)!.push(value);
};
addToGroup("even", 2);
addToGroup("odd", 1);

// Python: Counter â†’ TypeScript: manual reduce
const items: string[] = ["a", "b", "a", "c", "a", "b"];
const counter: Record<string, number> = items.reduce((acc, item) => {
  acc[item] = (acc[item] ?? 0) + 1;
  return acc;
}, {} as Record<string, number>);
console.log(counter);  // {a: 3, b: 2, c: 1}
```

### TypeScript Map & Advanced Dictionary Patterns

```typescript
// Python: dict merge (|) â†’ TypeScript: spread
const defaults: Record<string, number> = { timeout: 30, retries: 3 };
const overrides: Record<string, number> = { timeout: 60 };
const config = { ...defaults, ...overrides };
console.log(config);  // { timeout: 60, retries: 3 }
// Python: {**defaults, **overrides} or defaults | overrides

// Python: defaultdict(int) â†’ TypeScript: Map with default
function defaultDict<K, V>(factory: () => V): Map<K, V> {
  const map = new Map<K, V>();
  return new Proxy(map as any, {
    get(target: any, prop: string) {
      if (prop === "get") {
        return (key: K) => {
          if (!target.has(key)) target.set(key, factory());
          return target.get(key);
        };
      }
      return target[prop];
    },
  }) as Map<K, V>;
}

// Python: Counter.most_common() â†’ TypeScript
function mostCommon<T>(items: T[], n: number): [T, number][] {
  const counts = new Map<T, number>();
  for (const item of items) {
    counts.set(item, (counts.get(item) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n);
}
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
console.log(mostCommon(fruits, 2));  // [["apple", 3], ["banana", 2]]

// Python: dict comprehension with condition
const squares2: Record<number, number> = {};
for (let i = 1; i <= 5; i++) {
  if (i % 2 === 0) squares2[i] = i * i;
}
console.log(squares2);  // {2: 4, 4: 16}

// Python: deep_merge â†’ TypeScript: recursive merge
function deepMerge<T extends Record<string, any>>(a: T, b: Partial<T>): T {
  const result = { ...a };
  for (const key of Object.keys(b)) {
    if (b[key] && typeof b[key] === "object" && !Array.isArray(b[key])) {
      result[key] = deepMerge(result[key] ?? {}, b[key]);
    } else {
      result[key] = b[key] ?? result[key];
    }
  }
  return result;
}
```

### TypeScript Dictionary Performance & Edge Cases

```typescript
// Python: dict.get with sentinel â†’ TypeScript: Map.get with undefined
const phoneBook = new Map<string, string>([
  ["Alice", "555-0100"],
  ["Bob", "555-0101"],
]);
console.log(phoneBook.get("Charlie") ?? "Not found");  // "Not found"

// Python: dict.setdefault â†’ TypeScript: Map custom get-or-set
function getOrSet<K, V>(map: Map<K, V>, key: K, factory: () => V): V {
  if (!map.has(key)) map.set(key, factory());
  return map.get(key)!;
}

// Python: OrderedDict (insertion order preserved in Python 3.7+)
// TypeScript Map also preserves insertion order
const ordered = new Map<string, number>();
ordered.set("first", 1);
ordered.set("second", 2);
ordered.set("third", 3);
for (const [k, v] of ordered) {
  console.log(k, v);  // first 1, second 2, third 3
}

// Python: dict.fromkeys â†’ TypeScript: Object.fromEntries
const keys2 = ["x", "y", "z"];
const fromKeys = Object.fromEntries(keys2.map((k) => [k, 0]));
console.log(fromKeys);  // {x: 0, y: 0, z: 0}

// Python: nested dict get â†’ TypeScript: optional chaining
interface DeepConfig {
  database?: { connection?: { host?: string; port?: number } };
}
const cfg: DeepConfig = {};
const host = cfg.database?.connection?.host ?? "localhost";
// Python: cfg.get("database", {}).get("connection", {}).get("host", "localhost")

// Python: dict popitem â†’ TypeScript: Map iteration + delete
function popFirst<K, V>(map: Map<K, V>): [K, V] | undefined {
  const entry = map.entries().next().value;
  if (entry) map.delete(entry[0]);
  return entry;
}

// Python: dict comprehensions with condition
const evens: Record<number, boolean> = {};
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) evens[i] = true;
}
```

### TypeScript Utilities

```typescript
// === Map vs Object Performance Test ===
function benchMapVsObj(ops = 100000): Record<string, number> {
  const obj: Record<number, number> = {};
  const map = new Map<number, number>();
  const start1 = performance.now();
  for (let i = 0; i < ops; i++) obj[i] = i * 2;
  const objSet = performance.now() - start1;
  const start2 = performance.now();
  for (let i = 0; i < ops; i++) map.set(i, i * 2);
  const mapSet = performance.now() - start2;
  const start3 = performance.now();
  for (let i = 0; i < ops; i++) { const _ = obj[i]; }
  const objGet = performance.now() - start3;
  const start4 = performance.now();
  for (let i = 0; i < ops; i++) { const _ = map.get(i); }
  const mapGet = performance.now() - start4;
  return { objSetMs: Math.round(objSet), mapSetMs: Math.round(mapSet), objGetMs: Math.round(objGet), mapGetMs: Math.round(mapGet) };
}
console.log(benchMapVsObj());

// === Deep Merge (Python dict merge equivalent) ===
function deepMerge<T extends Record<string, unknown>>(target: T, ...sources: Partial<T>[]): T {
  const result = { ...target };
  for (const src of sources) {
    for (const key of Object.keys(src) as (keyof T)[]) {
      const val = src[key];
      if (val !== null && typeof val === "object" && !Array.isArray(val)) {
        result[key] = deepMerge(result[key] as Record<string, unknown> ?? {}, val as Record<string, unknown>) as T[keyof T];
      } else if (val !== undefined) {
        result[key] = val;
      }
    }
  }
  return result;
}
const merged = deepMerge({ a: 1, b: { c: 2 } }, { b: { d: 3 }, e: 4 });
console.log(merged); // { a: 1, b: { c: 2, d: 3 }, e: 4 }

// === Key Transformation Pipeline ===
function transformKeys<T>(obj: Record<string, T>, fn: (k: string) => string): Record<string, T> {
  return Object.fromEntries(Object.entries(obj).map(([k, v]) => [fn(k), v]));
}
function camelToSnake(k: string): string { return k.replace(/([A-Z])/g, "_$1").toLowerCase(); }
function snakeToCamel(k: string): string { return k.replace(/_([a-z])/g, (_, c) => c.toUpperCase()); }
const camelObj = { firstName: "Alice", lastName: "Smith" };
console.log(transformKeys(camelObj, camelToSnake));  // { first_name: "Alice", last_name: "Smith" }

// === Safe Get with Path (Python dict get equiv) ===
function getIn<T>(obj: unknown, path: string[], fallback?: T): T | undefined {
  let current: unknown = obj;
  for (const key of path) {
    if (current === null || current === undefined || typeof current !== "object") return fallback;
    current = (current as Record<string, unknown>)[key];
  }
  return (current as T) ?? fallback;
}
const data = { user: { address: { city: "Paris" } } };
console.log(getIn(data, ["user", "address", "city"]));  // Paris
console.log(getIn(data, ["user", "phone"]));             // undefined

// === Default Dict (Python defaultdict equivalent) ===
class DefaultDict<K, V> {
  private dict = new Map<K, V>();
  constructor(private factory: () => V) {}
  get(key: K): V { if (!this.dict.has(key)) this.dict.set(key, this.factory()); return this.dict.get(key)!; }
  set(key: K, value: V): void { this.dict.set(key, value); }
  entries(): [K, V][] { return [...this.dict.entries()]; }
}
const dd = new DefaultDict<string, number[]>(() => []);
dd.get("a").push(1, 2, 3);
dd.get("b").push(4);
console.log(dd.entries()); // [["a", [1,2,3]], ["b", [4]]]
```

### TypeScript Advanced Dictionary Patterns

```typescript
// === Python dict methods mapped to TypeScript ===
const pyDict = { name: "Alice", age: 30, city: "Paris" };

// Python: d.keys() â†’ Object.keys()
console.log(Object.keys(pyDict));     // ["name", "age", "city"]
// Python: d.values() â†’ Object.values()
console.log(Object.values(pyDict));   // ["Alice", 30, "Paris"]
// Python: d.items() â†’ Object.entries()
console.log(Object.entries(pyDict));  // [["name","Alice"],["age",30],["city","Paris"]]

// Python: d.get(k, default) â†’ ?? or ||
const score = { alice: 95, bob: 87 };
console.log(score.alice ?? 0);        // 95
console.log(score.charlie ?? 0);      // 0

// Python: d.update() â†’ Object.assign()
const defaults = { theme: "light", lang: "en" };
const userPrefs = { theme: "dark" };
const merged = Object.assign({}, defaults, userPrefs);
console.log(merged);                  // { theme: "dark", lang: "en" }

// Python: dict comprehension â†’ Object.fromEntries()
const nums = [1, 2, 3, 4, 5];
const squares = Object.fromEntries(nums.map(n => [n, n * n]));
console.log(squares);                 // {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}

// Python: dict.pop(k) â†’ delete + rest
const { age: _, ...rest } = pyDict;
console.log(rest);                    // { name: "Alice", city: "Paris" }

// Python: dict.setdefault â†’ custom helper
function setDefault<K, V>(map: Map<K, V>, key: K, factory: () => V): V {
  if (!map.has(key)) map.set(key, factory());
  return map.get(key)!;
}
const groups = new Map<string, number[]>();
setDefault(groups, "evens", () => []).push(2, 4, 6);
console.log([...groups.entries()]);   // [["evens", [2,4,6]]]

// Python: collections.Counter
function counter2<T>(items: T[]): Map<T, number> {
  const c = new Map<T, number>();
  for (const item of items) c.set(item, (c.get(item) ?? 0) + 1);
  return c;
}
console.log([...counter2(["a","b","a","c","b","a"])]);

// Python: dict merge | operator
const a = { x: 1, y: 2 };
const b = { y: 3, z: 4 };
console.log({ ...a, ...b });          // { x: 1, y: 3, z: 4 }

// Python: defaultdict(list)
class DefaultDict2<K, V> {
  private map = new Map<K, V>();
  constructor(private factory: () => V) {}
  get(key: K): V {
    if (!this.map.has(key)) this.map.set(key, this.factory());
    return this.map.get(key)!;
  }
  entries(): [K, V][] { return [...this.map.entries()]; }
}
const dd = new DefaultDict2<string, number[]>(() => []);
dd.get("a").push(1); dd.get("a").push(2); dd.get("b").push(3);
console.log(dd.entries());
```

### TypeScript Advanced Map Operations

```typescript
// === Bi-directional Map (Python: bidict) ===
class BiMap<K, V> {
  private keyToVal = new Map<K, V>();
  private valToKey = new Map<V, K>();
  set(key: K, value: V): void {
    this.keyToVal.set(key, value);
    this.valToKey.set(value, key);
  }
  get(key: K): V | undefined { return this.keyToVal.get(key); }
  getKey(value: V): K | undefined { return this.valToKey.get(value); }
  delete(key: K): void {
    const val = this.keyToVal.get(key);
    if (val !== undefined) { this.keyToVal.delete(key); this.valToKey.delete(val); }
  }
  get size(): number { return this.keyToVal.size; }
}

// === LRU Cache (Python: OrderedDict + lru_cache) ===
class LRUCache2<K, V> {
  private cache = new Map<K, V>();
  constructor(private maxSize: number) {}
  get(key: K): V | undefined {
    if (!this.cache.has(key)) return undefined;
    const val = this.cache.get(key)!;
    this.cache.delete(key);
    this.cache.set(key, val);
    return val;
  }
  set(key: K, value: V): void {
    if (this.cache.has(key)) this.cache.delete(key);
    if (this.cache.size >= this.maxSize) {
      const oldest = this.cache.keys().next().value;
      if (oldest !== undefined) this.cache.delete(oldest);
    }
    this.cache.set(key, value);
  }
  entries(): [K, V][] { return [...this.cache.entries()]; }
}

// === MultiMap (Python: dict of lists) ===
class MultiMap<K, V> {
  private map = new Map<K, V[]>();
  add(key: K, value: V): void {
    if (!this.map.has(key)) this.map.set(key, []);
    this.map.get(key)!.push(value);
  }
  get(key: K): V[] { return [...(this.map.get(key) ?? [])]; }
  has(key: K): boolean { return this.map.has(key); }
  keys(): K[] { return [...this.map.keys()]; }
}

// === Deep Get/Set for Nested Dicts ===
function deepGet<T>(obj: Record<string, any>, path: string, defaultValue?: T): T | undefined {
  const keys = path.split(".");
  let current: any = obj;
  for (const key of keys) {
    if (current === null || current === undefined || typeof current !== "object") return defaultValue;
    current = current[key];
  }
  return (current === undefined ? defaultValue : current) as T;
}
function deepSet(obj: Record<string, any>, path: string, value: unknown): void {
  const keys = path.split(".");
  let current = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (!(keys[i] in current)) current[keys[i]] = {};
    current = current[keys[i]];
  }
  current[keys[keys.length - 1]] = value;
}

// === Immutable Dict Update ===
function updateDict<K extends string | number | symbol, V>(obj: Record<K, V>, updates: Partial<Record<K, V>>): Record<K, V> {
  return { ...obj, ...updates };
}
function omitKeys<K extends string | number | symbol, V>(obj: Record<K, V>, ...keys: K[]): Partial<Record<K, V>> {
  const result = { ...obj };
  for (const key of keys) delete result[key];
  return result;
}
function pickKeys<K extends string | number | symbol, V>(obj: Record<K, V>, ...keys: K[]): Partial<Record<K, V>> {
  const result: Partial<Record<K, V>> = {};
  for (const key of keys) if (key in obj) result[key] = obj[key];
  return result;
}

const bimap = new BiMap<number, string>();
bimap.set(1, "one"); bimap.set(2, "two");
console.log(bimap.getKey("one")); // 1
console.log(bimap.get(2)); // "two"

const lru2 = new LRUCache2<string, number>(3);
lru2.set("a", 1); lru2.set("b", 2); lru2.set("c", 3); lru2.get("a"); lru2.set("d", 4);
console.log(lru2.entries()); // [["c", 3], ["a", 1], ["d", 4]]
```

## Summary

- Dictionaries map hashable keys to values; insertion order is preserved (3.7+).
- Safe access with `.get()`; bulk update with `.update()`.
- Dict comprehensions provide declarative construction.
- `defaultdict` handles missing keys; `Counter` counts hashable objects.
- Views are dynamic and support set-like operations.
- `|` operator merges dicts (3.9+).
- `json.dumps()`/`json.loads()` convert between dicts and JSON.

## Exercises

### Review Questions

1. Why must dictionary keys be hashable?
2. How does `d.get(k)` differ from `d[k]`?
3. What is the time complexity of membership testing in a dict?
4. How do `defaultdict` and `Counter` differ?
5. What does the `|` operator do when applied to two dicts?

### Application Problems

1. Write a program that reads a text file, counts word frequencies, and prints the 10 most common words. Use `Counter` and `most_common`.
2. Use a `defaultdict` to invert a dictionary: `{"a": 1, "b": 2, "c": 1}` becomes `{1: ['a', 'c'], 2: ['b']}`.
3. Write a function `deep_merge(d1, d2)` that recursively merges two dictionaries. For nested dict values, recurse; for non-dict values, prefer the second dict's value.

### Challenge Problem

Build a simple in-memory key-value store with transaction support. Implement `begin()`, `commit()`, and `rollback()` methods. During a transaction, all writes go to a staging dict. `commit()` flattens staging into the main store and `rollback()` discards it. Support nested transactions (stack of staging dicts). Use `copy.deepcopy` to snapshot values for rollback safety.
