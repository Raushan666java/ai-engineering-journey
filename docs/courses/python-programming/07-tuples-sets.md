# Chapter 7: Tuples and Sets

## Learning Objectives

By the end of this chapter, students will be able to:
- Create and use tuples for immutable sequences
- Unpack tuples into variables with the star operator
- Use `namedtuple` for lightweight data objects
- Perform set operations including union, intersection, difference, and symmetric difference
- Choose between sets, frozensets, and other collections based on requirements
- Write set comprehensions

## 7.1 Tuples

A tuple is an ordered, immutable sequence of objects. Tuples are created with parentheses or just commas:

```python
empty = ()
single = (42,)          # trailing comma required for single-element tuple
coordinates = (3, 4)
without_parens = 3, 4   # tuple packing
print(type(without_parens))  # <class 'tuple'>
```

### 7.1.1 Tuple Operations

Tuples support indexing, slicing, concatenation, and repetition:

```python
t = (0, 1, 2, 3, 4, 5)
print(t[0])      # 0
print(t[-1])     # 5
print(t[2:4])    # (2, 3)
print(t[::-1])   # (5, 4, 3, 2, 1, 0)
print(t + (6,))  # (0, 1, 2, 3, 4, 5, 6)
print(t * 2)     # (0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5)
print(3 in t)    # True
print(len(t))    # 6
```

Tuples are immutable — attempting to modify one raises `TypeError`:

```python
t[0] = 10  # TypeError: 'tuple' object does not support item assignment
```

### 7.1.2 Why Use Tuples?

Tuples are used where immutability matters:
- Dictionary keys (lists cannot be keys)
- Return values from functions
- Representing fixed collections like coordinates, RGB values, database records

```python
def min_max(lst):
    return min(lst), max(lst)  # returns a tuple

result = min_max([3, 1, 4, 1, 5, 9])
print(result)   # (1, 9)
print(type(result))  # <class 'tuple'>
```

## 7.2 Tuple Unpacking

Unpacking assigns tuple elements to variables in one statement:

```python
point = (10, 20)
x, y = point
print(x, y)     # 10 20

# Swapping values
a, b = 1, 2
a, b = b, a
print(a, b)     # 2 1

# Extended unpacking with *
first, *middle, last = [1, 2, 3, 4, 5]
print(first)    # 1
print(middle)   # [2, 3, 4]
print(last)     # 5
```

The star operator collects remaining elements. Only one starred expression is allowed:

```python
head, *tail = range(5)
print(head)  # 0
print(tail)  # [1, 2, 3, 4]

*_, last = [10, 20, 30, 40, 50]
print(last)  # 50
```

## 7.3 namedtuple

`namedtuple` creates tuple subclasses with named fields:

```python
from collections import namedtuple

Point = namedtuple("Point", ["x", "y"])
p = Point(3, 4)
print(p.x, p.y)   # 3 4
print(p[0], p[1])  # 3 4 (still works as tuple)
x, y = p           # unpacking works
print(p)           # Point(x=3, y=4)
```

Named fields improve code readability compared to bare tuples:

```python
# Without namedtuple — magic numbers
employees[0][1]  # what is index 1?

# With namedtuple — self-documenting
Employee = namedtuple("Employee", ["name", "age", "department", "salary"])
emp = Employee("Alice", 30, "Engineering", 95000)
print(emp.department)  # Engineering
```

`namedtuple` provides useful methods:

```python
print(p._asdict())   # {'x': 3, 'y': 4}
p2 = p._replace(x=5)  # returns new namedtuple
print(p2)            # Point(x=5, y=4)
print(p._fields)     # ('x', 'y')

# Create from dict
data = {"x": 7, "y": 8}
p3 = Point(**data)
print(p3)            # Point(x=7, y=8)
```

Modern alternatives include `@dataclass` (Chapter 12) and Pydantic (Chapter 19), but `namedtuple` remains useful for its tuple compatibility and lightweight nature.

## 7.4 Sets

A set is an unordered collection of unique, hashable elements:

```python
empty = set()      # not {} (that's an empty dict)
numbers = {1, 2, 3, 4, 5}
mixed = {1, "hello", (1, 2)}  # tuples are hashable
# Sets do NOT contain mutable elements like lists
# {[1, 2]}  # TypeError: unhashable type: 'list'
```

### 7.4.1 Creating Sets

```python
from_list = set([1, 2, 3, 2, 1])   # {1, 2, 3}  — duplicates removed
from_string = set("hello")          # {'h', 'e', 'l', 'o'} — unordered
from_generator = set(x ** 2 for x in range(5))
print(from_generator)  # {0, 1, 4, 9, 16}
```

### 7.4.2 Set Methods

```python
s = {1, 2, 3, 4, 5}
s.add(6)             # {1, 2, 3, 4, 5, 6}
s.discard(3)         # {1, 2, 4, 5, 6}  — no error if missing
s.remove(2)          # {1, 4, 5, 6}     — KeyError if missing
popped = s.pop()     # removes and returns an arbitrary element
s.clear()            # set()

print(len({1, 2, 3}))           # 3
print(2 in {1, 2, 3})           # True (O(1) on average)
```

### 7.4.3 Set Operations

```python
a = {1, 2, 3, 4, 5}
b = {4, 5, 6, 7, 8}

print(a | b)   # Union:        {1, 2, 3, 4, 5, 6, 7, 8}
print(a & b)   # Intersection: {4, 5}
print(a - b)   # Difference:   {1, 2, 3}
print(b - a)   # Difference:   {8, 6, 7}
print(a ^ b)   # Symmetric diff: {1, 2, 3, 6, 7, 8}

# In-place operations
c = a.copy()
c |= b         # c = a | b
print(c)

# Comparison
print({1, 2} <= {1, 2, 3})    # subset: True
print({1, 2, 3} >= {1, 2})    # superset: True
print({1, 2} < {1, 2, 3})     # proper subset: True
print({1, 2} < {1, 2})        # False (not proper)
print({1, 2}.isdisjoint({3}))  # True (no common elements)
```

### 7.4.4 Set Comprehensions

```python
squares = {x ** 2 for x in range(10)}
print(squares)  # {0, 1, 4, 64, 9, 16, 81, 49, 36, 25} (order not preserved)

even_squares = {x ** 2 for x in range(20) if x % 2 == 0}
print(even_squares)  # {0, 4, 16, 36, 64, 100, 144, 196, 256, 324}
```

## 7.5 frozenset

A `frozenset` is an immutable, hashable set:

```python
fs = frozenset([1, 2, 3, 3, 2])
print(fs)         # frozenset({1, 2, 3})

# frozenset supports all set operations except mutation
print(fs | frozenset([3, 4]))  # frozenset({1, 2, 3, 4})

# frozenset can be a dictionary key or set element
d = {frozenset({1, 2}): "value"}
sets = {frozenset({1, 2}), frozenset({3, 4})}
```

`frozenset` is useful when you need an immutable set for use as a dictionary key or within another set.

## 7.6 Choosing Between Data Structures

| Property | List | Tuple | Set | frozenset |
|----------|------|-------|-----|-----------|
| Ordered | Yes | Yes | No | No |
| Mutable | Yes | No | Yes | No |
| Duplicates | Yes | Yes | No | No |
| Hashable | No | Yes | No | Yes |
| Indexing | Yes | Yes | No | No |
| Search | O(n) | O(n) | O(1) avg | O(1) avg |

## 7.7 Practical Patterns

### 7.7.1 Removing Duplicates

```python
items = [3, 1, 2, 1, 3, 4, 2]
unique_items = list(set(items))
print(unique_items)  # [1, 2, 3, 4] (but order lost)

# Preserve order (Python 3.7+)
unique_ordered = list(dict.fromkeys(items))
print(unique_ordered)  # [3, 1, 2, 4]
```

### 7.7.2 Finding Common Elements

```python
def common_elements(lst1, lst2):
    return list(set(lst1) & set(lst2))

print(common_elements([1, 2, 3, 4], [3, 4, 5, 6]))  # [3, 4]
```

### 7.7.3 Return Multiple Values from Function

```python
def analyze(nums):
    return (min(nums), max(nums), sum(nums) / len(nums))

lo, hi, avg = analyze([1, 2, 3, 4, 5])
print(f"min={lo}, max={hi}, avg={avg}")  # min=1, max=5, avg=3.0
```

## Summary

- Tuples are immutable sequences; sorted by stability and hashability.
- Tuple unpacking with `*` provides flexible destructuring.
- `namedtuple` creates lightweight, readable data containers.
- Sets provide O(1) membership testing and powerful set algebra.
- Use `frozenset` when an immutable, hashable set is needed.
- Set comprehension syntax mirrors list comprehension.

## Exercises

### Review Questions

1. Why does `(42)` not create a tuple? How do you fix it?
2. What is the time complexity of membership testing (`in`) for a list vs a set?
3. What is a practical use case for `frozenset`?
4. How does `namedtuple` differ from regular tuples?
5. What is the difference between `s.discard(x)` and `s.remove(x)`?

### Application Problems

1. Write a function `unique_elements_preserving_order(seq)` that returns a list of unique elements in the order they first appear. Use a set for tracking seen elements.
2. Given two lists of email addresses, find the intersection (people in both lists), the symmetric difference (people in exactly one list), and list each clearly.
3. Create a `namedtuple` called `Student` with fields `name`, `id`, and `grades` (a list). Create a list of students. Compute the average grade for each student and print a report sorted by average descending.

### Challenge Problem

Implement a simple spell checker. Load a dictionary of English words into a set. Accept a sentence and flag any word not in the dictionary. For each misspelled word, suggest corrections by generating candidate words that differ by one edit (insertion, deletion, substitution). Use set operations to find which candidates are in the dictionary. Test with sample sentences containing deliberate misspellings.
