# Week 1: Python Basics

**Duration:** June 8 - June 14, 2026 | **Hours:** 35

---

## Day 1 (Jun 8): Getting Started

### Install Python

```bash
# Download from python.org — install with "Add to PATH"
python --version
pip --version
```

### VS Code Setup

- Install Python extension
- `Ctrl+Shift+P` → "Python: Select Interpreter"
- Install Pylance for better intellisense

### Hello World

```python
print("Hello from AI Engineering Journey!")
name = input("What's your name? ")
print(f"Nice to meet you, {name}!")
```

### Variables & Types

```python
# No $ signs, no type declarations
name = "Raushan"        # str
age = 23                # int
height = 5.8            # float
is_learning = True      # bool

# Dynamic typing — can reassign
value = 42              # int
value = "now a string"  # works

# Type checking
print(type(name))       # <class 'str'>
```

### Key Difference from PHP

| PHP | Python |
|-----|--------|
| `$var` | `var` |
| `.` concat | `+` for str |
| `array()` | `[]` |
| `isset($x)` | `x is not None` |
| `count($arr)` | `len(arr)` |
| `foreach($a as $k=>$v)` | `for k, v in a.items()` |

---

## Day 2 (Jun 9): Data Structures

### Lists (like PHP indexed arrays)

```python
fruits = ["apple", "banana", "cherry"]
fruits.append("date")
fruits[0]           # "apple"
fruits[-1]          # "date" (last element)
len(fruits)         # 4
"banana" in fruits  # True
```

### List Operations

```python
numbers = [3, 1, 4, 1, 5]
numbers.sort()
numbers.reverse()
sliced = numbers[1:3]   # [1, 4]

# List comprehension (very Pythonic)
squares = [x**2 for x in range(10)]
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

evens = [x for x in range(20) if x % 2 == 0]
```

### Dictionaries (like PHP associative arrays)

```python
user = {
    "name": "Raushan",
    "age": 23,
    "skills": ["Laravel", "Python"]
}

user["city"] = "Patna"          # add/update
user.get("country", "India")    # safe get with default
del user["age"]                 # delete
"name" in user                  # True

# Loop through dict
for key, value in user.items():
    print(f"{key}: {value}")
```

### Tuples (immutable lists)

```python
point = (10, 20)
x, y = point           # tuple unpacking

# Perfect for returning multiple values
def get_user():
    return "Raushan", 23, "Patna"

name, age, city = get_user()
```

### Sets (unique values)

```python
tags = {"python", "ai", "laravel", "python"}  # {"python", "ai", "laravel"}
tags.add("docker")
tags.remove("laravel")

set_a = {1, 2, 3}
set_b = {3, 4, 5}
union = set_a | set_b           # {1, 2, 3, 4, 5}
intersection = set_a & set_b    # {3}
```

---

## Day 3 (Jun 10): Control Flow & Functions

### Conditionals

```python
age = 18

if age < 18:
    print("Minor")
elif age == 18:
    print("Just became adult")
else:
    print("Adult")

# Ternary
status = "Adult" if age >= 18 else "Minor"
```

### Loops

```python
# For loop with range
for i in range(5):       # 0, 1, 2, 3, 4
    print(i)

# For loop with list
for fruit in ["apple", "banana"]:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Enumerate (get index + value)
for i, fruit in enumerate(["apple", "banana"]):
    print(f"{i}: {fruit}")

# Zip (iterate multiple lists)
names = ["Ram", "Shyam"]
ages = [23, 25]
for name, age in zip(names, ages):
    print(f"{name} is {age}")
```

### Functions

```python
def greet(name: str, greeting: str = "Hello") -> str:
    """Simple greeting function."""
    return f"{greeting}, {name}!"

# *args (variable positional)
def sum_all(*numbers: int) -> int:
    return sum(numbers)

print(sum_all(1, 2, 3, 4))  # 10

# **kwargs (variable keyword)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Raushan", age=23)

# Lambda (anonymous function)
square = lambda x: x ** 2
print(square(5))  # 25

numbers = [1, 2, 3, 4]
doubled = list(map(lambda x: x * 2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

---

## Day 4 (Jun 11): Strings & Comprehensions

### String Methods

```python
text = "  Hello, World!  "

text.strip()              # "Hello, World!"
text.lower()              # "hello, world!"
text.upper()              # "HELLO, WORLD!"
text.replace("World", "Raushan")
text.split(",")           # ["  Hello", " World!  "]
", ".join(["a", "b", "c"])  # "a, b, c"
text.startswith("Hello")  # True
text.find("World")        # 8
```

### f-strings (Python's best feature)

```python
name = "Raushan"
age = 23
print(f"My name is {name} and I'm {age} years old")

# Expressions inside
print(f"Next year I'll be {age + 1}")

# Formatting
price = 49.9999
print(f"Price: ${price:.2f}")  # "Price: $50.00"

# Padding
print(f"|{name:10}|")  # "|Raushan   |"
```

### List Comprehensions

```python
# Basic
squares = [x**2 for x in range(10)]

# With condition
evens = [x for x in range(20) if x % 2 == 0]

# Nested
matrix = [[i+j for j in range(3)] for i in range(3)]

# Dict comprehension
square_dict = {x: x**2 for x in range(5)}
# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# Set comprehension
unique_lens = {len(word) for word in ["hi", "hello", "hey"]}
```

---

## Day 5 (Jun 12): File Handling & Errors

### File I/O

```python
# Reading files
with open("data.txt", "r") as file:
    content = file.read()              # entire file
    lines = file.readlines()           # list of lines
    for line in file:                  # line by line
        print(line.strip())

# Writing files
with open("output.txt", "w") as file:
    file.write("Hello, World!\n")
    file.writelines(["line1\n", "line2\n"])

# Append mode
with open("log.txt", "a") as file:
    file.write("New log entry\n")
```

### Error Handling

```python
try:
    result = 10 / 0
except ZeroDivisionError:
    print("Can't divide by zero!")
except Exception as e:
    print(f"Something went wrong: {e}")
else:
    print("No error occurred")
finally:
    print("This always runs")

# Raising exceptions
def validate_age(age: int):
    if age < 0:
        raise ValueError("Age can't be negative")
    return True
```

### pip & Virtual Environments

```bash
# Creating a venv
python -m venv .venv

# Activate (Windows)
.venv\Scripts\activate

# Install packages
pip install requests beautifulsoup4

# Freeze requirements
pip freeze > requirements.txt

# Install from requirements
pip install -r requirements.txt
```

---

## Day 6 (Jun 13): Mini Project

### CSV Processor

Build a script that reads a CSV file, processes data, and outputs results.

```python
import csv
from pathlib import Path
from typing import Dict, List

def read_csv(filepath: str) -> List[Dict]:
    """Read CSV file and return list of dicts."""
    data = []
    with open(filepath, "r") as f:
        reader = csv.DictReader(f)
        for row in reader:
            data.append(row)
    return data

def filter_by_column(data: List[Dict], column: str, value: str) -> List[Dict]:
    """Filter rows where column matches value."""
    return [row for row in data if row.get(column) == value]

def summary(data: List[Dict]) -> Dict:
    """Generate summary statistics."""
    return {
        "total_rows": len(data),
        "columns": list(data[0].keys()) if data else [],
        "sample": data[:3] if data else []
    }

def main():
    """Main function."""
    filepath = "sample.csv"
    
    try:
        data = read_csv(filepath)
        print(f"Loaded {len(data)} rows")
        
        # Example: filter
        filtered = filter_by_column(data, "status", "active")
        print(f"Active records: {len(filtered)}")
        
        # Summary
        stats = summary(data)
        print(f"Columns: {', '.join(stats['columns'])}")
        
    except FileNotFoundError:
        print(f"Error: {filepath} not found")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    main()
```

### Practice Exercises

1. Write a function that finds the most common word in a text file
2. Merge two CSV files on a common column
3. Generate a report from CSV data in markdown format

---

## Day 7 (Jun 14): REST — Review & Practice

### Week 1 Review

- [ ] I understand Python variables and types
- [ ] I can use lists, dicts, tuples, sets
- [ ] I can write functions with type hints
- [ ] I understand list comprehensions
- [ ] I can read/write files
- [ ] I know how to use pip and venv
- [ ] My CSV processor works

### Extra Practice

Try these on your own:

1. **Word Counter:** Read a file, count word frequency, show top 10
2. **To-Do CLI:** Add/list/complete tasks stored in JSON
3. **Weather CLI:** Fetch weather from an API and display it

### Resources

| Topic | Link |
|-------|------|
| Interactive Python | [learnpython.org](https://learnpython.org) |
| Python Docs | [docs.python.org/3/tutorial](https://docs.python.org/3/tutorial/) |
| w3schools Python | [w3schools.com/python](https://www.w3schools.com/python) |
