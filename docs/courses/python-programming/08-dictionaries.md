# Chapter 8: Dictionaries

## Learning Objectives

By the end of this chapter, students will be able to:
- Create and manipulate dictionaries using multiple construction techniques
- Use dictionary comprehensions to build dicts declaratively
- Apply specialised dict types: defaultdict, Counter, OrderedDict
- Work with dict views for efficient iteration
- Merge dictionaries using the `|` operator
- Convert between dictionaries and JSON

![Dictionaries](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/08-dictionaries.png)

## 8.1 Dictionary Basics

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

```python
d = {"a": 1, "b": 2, "c": 3}

# Access
print(d["a"])            # 1 — raises KeyError if missing
print(d.get("x", 0))     # 0 — safe access with default
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
print("a" in d)          # True — checks keys only
print(1 in d)            # False

# Length
print(len(d))            # 3
```

## 8.3 Iteration

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

`defaultdict` provides default values for missing keys:

```python
from collections import defaultdict

# List factory — group items
words = ["apple", "banana", "apricot", "blueberry", "cherry"]
by_first = defaultdict(list)
for word in words:
    by_first[word[0]].append(word)
print(dict(by_first))
# {'a': ['apple', 'apricot'], 'b': ['banana', 'blueberry'], 'c': ['cherry']}

# Int factory — counting
counter = defaultdict(int)
for c in "hello world":
    counter[c] += 1
print(dict(counter))
# {'h': 1, 'e': 1, 'l': 3, 'o': 2, ' ': 1, 'w': 1, 'r': 1, 'd': 1}

# Set factory — collecting unique values
adjacency = defaultdict(set)
edges = [(1, 2), (1, 3), (2, 3), (2, 4)]
for a, b in edges:
    adjacency[a].add(b)
    adjacency[b].add(a)
print({k: list(v) for k, v in adjacency.items()})
# {1: [2, 3], 2: [1, 3, 4], 3: [1, 2], 4: [2]}
```

## 8.6 Counter

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
print(json.dumps(d))   # {"1": "true"}  — True is a subclass of int
```

## 8.11 Memory and Performance

- Dictionaries use hash tables: O(1) average for get, set, delete, membership.
- Keys must be hashable (immutable). Lists, dicts, and sets cannot be keys.
- The hash table grows when it reaches about two-thirds capacity; resizing is amortised O(1).
- For small dicts, the overhead of the hash table may exceed the data itself.

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
