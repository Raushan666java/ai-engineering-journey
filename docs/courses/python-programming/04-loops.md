# Chapter 4: Loops and Iteration

## Learning Objectives

By the end of this chapter, students will be able to:
- Construct `for` loops over ranges and iterables
- Write `while` loops with proper termination conditions
- Control loop flow with `break`, `continue`, and `else` clauses
- Use `enumerate`, `zip`, `reversed`, and `sorted` for idiomatic iteration
- Choose the appropriate loop construct for a given problem

![Loops and Iteration](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/python-programming/04-loops.png)

## 4.1 The for Loop

The `for` loop iterates over any iterable (sequences, iterators, generators):

```python
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)
```

Output:
```
apple
banana
cherry
```

### 4.1.1 range()

The `range()` function generates arithmetic progressions:

```python
for i in range(5):           # 0, 1, 2, 3, 4
    print(i, end=" ")        # 0 1 2 3 4

print()

for i in range(2, 7):        # 2, 3, 4, 5, 6
    print(i, end=" ")        # 2 3 4 5 6

print()

for i in range(0, 10, 2):    # 0, 2, 4, 6, 8
    print(i, end=" ")        # 0 2 4 6 8

print()

for i in range(10, 0, -1):   # 10, 9, ..., 1
    print(i, end=" ")        # 10 9 8 7 6 5 4 3 2 1
```

`range()` is lazy — it produces values on demand, not as a list. Cast to `list()` to see all values.

### 4.1.2 Iterating Over Sequences

```python
word = "hello"
for char in word:
    print(char.upper(), end=" ")  # H E L L O

print()

numbers = [10, 20, 30]
for value in numbers:
    print(value * 2, end=" ")     # 20 40 60
```

Modifying a list while iterating over it is dangerous:

```python
# BAD — skips elements
numbers = [1, 2, 3, 4, 5]
for n in numbers:
    if n % 2 == 0:
        numbers.remove(n)
print(numbers)  # [1, 3, 5]  (works here by luck, fails in general)

# CORRECT — iterate over a copy
numbers = [1, 2, 3, 4, 5]
for n in numbers[:]:
    if n % 2 == 0:
        numbers.remove(n)
print(numbers)  # [1, 3, 5]
```

## 4.2 The while Loop

The `while` loop repeats as long as a condition is truthy:

```python
count = 0
while count < 5:
    print(count, end=" ")
    count += 1
# 0 1 2 3 4
```

Ensure the condition eventually becomes falsy, or use `break`:

```python
# Infinite loop — ensure termination
total = 0
while True:
    n = int(input("Enter a number (0 to quit): "))
    if n == 0:
        break
    total += n
print(f"Total: {total}")
```

### 4.2.1 When to Use while vs for

- Use `for` when the number of iterations is known or you are iterating over a collection.
- Use `while` when the loop depends on a condition that changes inside the body.

```python
# while is natural for convergence algorithms
x = 1.0
while abs(x ** 2 - 2) > 1e-10:
    x = (x + 2 / x) / 2   # Newton's method for sqrt(2)
print(f"sqrt(2) ≈ {x}")
```

## 4.3 break and continue

`break` terminates the loop immediately:

```python
for i in range(100):
    if i * i > 50:
        break
    print(i, i * i)
# Prints up to i=7 (7*7=49)
```

`continue` skips the rest of the current iteration and moves to the next:

```python
for i in range(10):
    if i % 2 == 0:
        continue
    print(i, end=" ")   # 1 3 5 7 9
```

`break` and `continue` apply only to the innermost loop:

```python
for i in range(3):
    for j in range(3):
        if j == 1:
            break       # breaks inner loop only
        print(f"({i},{j})", end=" ")
    print()
# (0,0) (0,1)? — actually break after j=1, so prints (0,0) then inner loop ends
# Output: (0,0) (1,0) (2,0) — wait j=0, then j=1 -> break
# Let's trace: i=0: j=0 -> prints, j=1 -> break. i=1: j=0 prints, j=1 break.
# (0,0) (1,0) (2,0)
```

## 4.4 The else Clause on Loops

The `else` clause executes when the loop terminates normally (without `break`):

```python
# Prime number check
n = 17
for i in range(2, int(n ** 0.5) + 1):
    if n % i == 0:
        print(f"{n} is divisible by {i}")
        break
else:
    print(f"{n} is prime")
```

The `else` clause also works with `while` loops:

```python
x = 256
while x > 1:
    if x % 2 != 0:
        print(f"{x} is not a power of two")
        break
    x //= 2
else:
    print("Input is a power of two")
```

## 4.5 enumerate()

`enumerate()` yields pairs of (index, value) from an iterable:

```python
colors = ["red", "green", "blue"]
for i, color in enumerate(colors):
    print(f"{i}: {color}")
# 0: red
# 1: green
# 2: blue
```

Specify a custom start index:

```python
for i, color in enumerate(colors, start=1):
    print(f"{i}. {color}")
# 1. red
# 2. green
# 3. blue
```

## 4.6 zip()

`zip()` aggregates multiple iterables element-wise:

```python
names = ["Alice", "Bob", "Charlie"]
scores = [85, 92, 78]
grades = ["A", "A", "B"]

for name, score, grade in zip(names, scores, grades):
    print(f"{name}: {score} ({grade})")
# Alice: 85 (A)
# Bob: 92 (A)
# Charlie: 78 (B)
```

`zip()` stops at the shortest iterable:

```python
a = [1, 2, 3, 4]
b = [10, 20, 30]
print(list(zip(a, b)))          # [(1, 10), (2, 20), (3, 30)]
```

Use `itertools.zip_longest()` for unequal lengths:

```python
from itertools import zip_longest
print(list(zip_longest(a, b, fillvalue=0)))
# [(1, 10), (2, 20), (3, 30), (4, 0)]
```

Unzipping uses the star operator:

```python
pairs = [(1, 10), (2, 20), (3, 30)]
first, second = zip(*pairs)
print(list(first))   # [1, 2, 3]
print(list(second))  # [10, 20, 30]
```

## 4.7 reversed()

`reversed()` returns a reverse iterator over a sequence:

```python
for c in reversed("hello"):
    print(c, end="")   # olleh
print()

for n in reversed([1, 2, 3]):
    print(n, end=" ")  # 3 2 1
```

## 4.8 sorted()

`sorted()` returns a new sorted list from an iterable:

```python
nums = [3, 1, 4, 1, 5, 9, 2]
for n in sorted(nums):
    print(n, end=" ")      # 1 1 2 3 4 5 9
print()

for n in sorted(nums, reverse=True):
    print(n, end=" ")      # 9 5 4 3 2 1 1
print()

# Custom key
words = ["banana", "apple", "cherry", "date"]
for w in sorted(words, key=len):
    print(w, end=" ")      # date apple banana cherry
```

`sorted()` returns a new list; the original iterable is unchanged.

## 4.9 Nested Loops

```python
for i in range(3):
    for j in range(3):
        print(f"({i},{j})", end=" ")
    print()
# (0,0) (0,1) (0,2)
# (1,0) (1,1) (1,2)
# (2,0) (2,1) (2,2)
```

Nested loops multiply iterations — O(n*m) complexity. For matrix operations:

```python
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
transpose = [[row[i] for row in matrix] for i in range(3)]
print(transpose)  # [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
```

## 4.10 Loop Idioms

### Looping Over a Copy

```python
# Safe removal during iteration
items = [1, 2, 3, 4, 5]
for item in items[:]:  # iterate over a shallow copy
    if item % 2 == 0:
        items.remove(item)
```

### Looping Over Slices

```python
data = [10, 20, 30, 40, 50]
for chunk in [data[i:i+2] for i in range(0, len(data), 2)]:
    print(chunk)
# [10, 20]
# [30, 40]
# [50]
```

### Tracking Index Without enumerate

```python
i = 0
for fruit in fruits:
    print(i, fruit)
    i += 1
```

Prefer `enumerate()`.

## Summary

- `for` loops iterate over iterables; `while` loops run until a condition is falsy.
- `break` exits; `continue` skips to next iteration.
- `else` on loops runs only if no `break` occurred.
- `enumerate()` yields index-value pairs; `zip()` merges iterables.
- `reversed()` and `sorted()` return iterators and sorted lists respectively.
- Avoid modifying a collection while iterating over it.

## Exercises

### Review Questions

1. What is the difference between `for` and `while` loops?
2. When does a loop's `else` clause execute?
3. What does `zip(['a', 'b', 'c'], [1, 2])` return?
4. Why is modifying a list during iteration problematic?
5. How does `enumerate` differ from manually incrementing a counter?

### Application Problems

1. Write a program that prints the multiplication table (1-12) using nested loops, formatted in aligned columns.
2. Implement the Collatz conjecture: for a given starting integer n, repeatedly compute n/2 if even, 3n+1 if odd, counting how many steps to reach 1. Use a while loop and print each step.
3. Given two lists of student names and scores, use `zip` and `enumerate` to print a ranked leaderboard sorted by score descending.

### Challenge Problem

Implement a simple text-based inventory management system. Start with an inventory of items (dict mapping names to quantities). Repeatedly prompt the user for commands: "add X N", "remove X N", "list", or "quit". Use a while loop with break. Handle invalid items, insufficient quantity, and non-numeric counts gracefully. Use membership operators (`in`) to validate items before modification.
