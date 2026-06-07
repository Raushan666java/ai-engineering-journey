# Week 1: Python Basics - Complete Lecture Notes

## Module 1.1: Introduction to Python & Setup

### What is Python?
- High-level, interpreted programming language
- Created by Guido van Rossum (1991)
- Known for readability and simplicity
- Versatile: Web, Data Science, AI/ML, Automation

### Why Python for AI/ML?
- Rich ecosystem (NumPy, Pandas, Scikit-learn, TensorFlow)
- Easy to learn and prototype
- Extensive community support
- Cross-platform compatibility

### Installation & Setup
```bash
# Check Python version
python --version

# Install pip (package manager)
python -m pip install --upgrade pip

# Create virtual environment
python -m venv ml_env

# Activate (Windows)
ml_env\Scripts\activate

# Activate (Linux/Mac)
source ml_env/bin/activate
```

---

## Module 1.2: Python Basics

### Variables and Data Types

```python
# Variables (no declaration needed)
name = "Alice"           # String
age = 25                 # Integer
height = 5.6            # Float
is_student = True       # Boolean

# Multiple assignment
x, y, z = 10, 20, 30

# Type checking
print(type(name))       # <class 'str'>
print(type(age))        # <class 'int'>

# Type conversion
num_str = "100"
num_int = int(num_str)  # Convert to integer
num_float = float(num_str)  # Convert to float
```

### Operators

```python
# Arithmetic operators
a, b = 10, 3
print(a + b)    # 13 (Addition)
print(a - b)    # 7  (Subtraction)
print(a * b)    # 30 (Multiplication)
print(a / b)    # 3.333... (Division)
print(a // b)   # 3  (Floor division)
print(a % b)    # 1  (Modulus)
print(a ** b)   # 1000 (Power)

# Comparison operators
print(a > b)    # True
print(a == b)   # False
print(a != b)   # True

# Logical operators
print(True and False)  # False
print(True or False)   # True
print(not True)        # False
```

### Input/Output

```python
# Output
print("Hello, World!")
print("Name:", name, "Age:", age)
print(f"Name: {name}, Age: {age}")  # f-strings

# Input
user_name = input("Enter your name: ")
user_age = int(input("Enter your age: "))
```

---

## Module 1.3: Control Flow

### If-Else Statements

```python
# Simple if
if age >= 18:
    print("Adult")

# If-else
if age >= 18:
    print("Adult")
else:
    print("Minor")

# If-elif-else
score = 85
if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

# Ternary operator
status = "Pass" if score >= 50 else "Fail"
```

### Loops

```python
# For loop
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# Loop with step
for i in range(0, 10, 2):
    print(i)  # 0, 2, 4, 6, 8

# Iterate over list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Enumerate
for index, fruit in enumerate(fruits):
    print(f"{index}: {fruit}")

# While loop
count = 0
while count < 5:
    print(count)
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip 3
    if i == 7:
        break     # Stop at 7
    print(i)
```

---

## Module 1.4: Data Structures

### Lists

```python
# Create list
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", 3.14, True]

# Indexing
print(numbers[0])    # 1
print(numbers[-1])   # 5

# Slicing
print(numbers[1:4])  # [2, 3, 4]
print(numbers[:3])   # [1, 2, 3]
print(numbers[2:])   # [3, 4, 5]

# Methods
numbers.append(6)           # Add at end
numbers.insert(0, 0)        # Insert at position
numbers.remove(3)           # Remove first 3
popped = numbers.pop()      # Remove and return last
numbers.extend([7, 8, 9])   # Add multiple

# List operations
length = len(numbers)
maximum = max(numbers)
minimum = min(numbers)
total = sum(numbers)

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
```

### Tuples

```python
# Create tuple (immutable)
coordinates = (10, 20)
person = ("Alice", 25, "NYC")

# Access elements
x, y = coordinates
name, age, city = person

# Tuple operations
print(len(person))
print(person.count("Alice"))
print(person.index(25))
```

### Dictionaries

```python
# Create dictionary
student = {
    "name": "Bob",
    "age": 20,
    "grade": "A"
}

# Access values
print(student["name"])
print(student.get("age"))

# Modify
student["age"] = 21
student["city"] = "NYC"

# Methods
keys = student.keys()
values = student.values()
items = student.items()

# Iterate
for key, value in student.items():
    print(f"{key}: {value}")

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}
```

### Sets

```python
# Create set (unique elements)
numbers = {1, 2, 3, 4, 5}
unique = set([1, 1, 2, 2, 3])  # {1, 2, 3}

# Operations
numbers.add(6)
numbers.remove(3)
numbers.discard(10)  # No error if not exists

# Set operations
a = {1, 2, 3, 4}
b = {3, 4, 5, 6}

union = a | b         # {1, 2, 3, 4, 5, 6}
intersection = a & b  # {3, 4}
difference = a - b    # {1, 2}
```

---

## Module 1.5: Functions

### Basic Functions

```python
# Define function
def greet(name):
    return f"Hello, {name}!"

# Call function
message = greet("Alice")
print(message)

# Multiple parameters
def add(a, b):
    return a + b

result = add(5, 3)  # 8

# Default parameters
def power(base, exponent=2):
    return base ** exponent

print(power(3))      # 9 (default exponent=2)
print(power(3, 3))   # 27

# Multiple return values
def min_max(numbers):
    return min(numbers), max(numbers)

minimum, maximum = min_max([1, 5, 3, 9, 2])
```

### Advanced Function Concepts

```python
# *args (variable arguments)
def sum_all(*args):
    return sum(args)

print(sum_all(1, 2, 3, 4, 5))  # 15

# **kwargs (keyword arguments)
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

print_info(name="Alice", age=25, city="NYC")

# Lambda functions
square = lambda x: x ** 2
add = lambda a, b: a + b

# Map, Filter, Reduce
numbers = [1, 2, 3, 4, 5]
squared = list(map(lambda x: x**2, numbers))
evens = list(filter(lambda x: x % 2 == 0, numbers))

from functools import reduce
product = reduce(lambda a, b: a * b, numbers)
```

---

## Module 1.6: File Handling

```python
# Write to file
with open("data.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Python is awesome!")

# Read from file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Read line by line
with open("data.txt", "r") as file:
    for line in file:
        print(line.strip())

# Append to file
with open("data.txt", "a") as file:
    file.write("\nNew line")

# CSV handling
import csv

# Write CSV
data = [
    ["Name", "Age", "City"],
    ["Alice", 25, "NYC"],
    ["Bob", 30, "LA"]
]

with open("data.csv", "w", newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Read CSV
with open("data.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```

---

## Practice Exercises

1. **Calculator**: Build a calculator with all arithmetic operations
2. **Grade System**: Input marks, calculate grade and percentage
3. **List Operations**: Implement search, sort, reverse operations
4. **Dictionary Manager**: Create student database with CRUD operations
5. **File Processor**: Read file, count words, lines, characters

---

## Key Takeaways

✅ Python syntax and basic operations  
✅ Data types: int, float, str, bool  
✅ Control flow: if-else, loops  
✅ Data structures: list, tuple, dict, set  
✅ Functions and lambda expressions  
✅ File handling basics  

**Next**: Advanced Python concepts! 🚀
