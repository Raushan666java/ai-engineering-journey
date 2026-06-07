# Week 1 - Lecture 1: Introduction to Python

## Learning Objectives
- Understand Python's history and philosophy
- Set up Python development environment
- Learn Python syntax basics
- Understand variables and data types

## 1. What is Python?
Python is a high-level, interpreted programming language created by Guido van Rossum in 1991.

### Key Features:
- **Simple and readable syntax**
- **Interpreted language** - no compilation needed
- **Cross-platform** - runs on Windows, Mac, Linux
- **Large standard library**
- **Strong community support**

## 2. Python Philosophy - The Zen of Python
```python
import this
```

Key principles:
- Beautiful is better than ugly
- Simple is better than complex
- Readability counts

## 3. Variables and Data Types

### Variables
```python
# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True
```

### Basic Data Types
1. **Integers (int)**
```python
x = 10
y = -5
```

2. **Floating Point (float)**
```python
pi = 3.14159
temperature = -2.5
```

3. **Strings (str)**
```python
greeting = "Hello, World!"
name = 'Python'
multiline = """This is a
multiline string"""
```

4. **Booleans (bool)**
```python
is_valid = True
is_complete = False
```

## 4. Basic Operations

### Arithmetic Operations
```python
# Basic math
a = 10
b = 3

addition = a + b        # 13
subtraction = a - b     # 7
multiplication = a * b  # 30
division = a / b        # 3.333...
floor_division = a // b # 3
modulus = a % b         # 1
exponentiation = a ** b # 1000
```

### String Operations
```python
first_name = "John"
last_name = "Doe"

# Concatenation
full_name = first_name + " " + last_name

# String formatting
message = f"Hello, {full_name}!"
```

## 5. Input and Output

### Output with print()
```python
print("Hello, World!")
print("Name:", name)
print(f"Age: {age}")
```

### Input from user
```python
user_name = input("Enter your name: ")
user_age = int(input("Enter your age: "))
```

## 6. Comments
```python
# This is a single-line comment

"""
This is a
multi-line comment
"""

x = 5  # Inline comment
```

## Practice Exercises
1. Create variables for your personal information
2. Perform basic arithmetic operations
3. Create a simple calculator
4. Practice string formatting

## Next Lecture
- Control structures (if/else statements)
- Loops (for and while)
- Functions basics