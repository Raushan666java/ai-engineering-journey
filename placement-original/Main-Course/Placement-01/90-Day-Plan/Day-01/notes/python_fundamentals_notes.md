# Day 1 - Python Fundamentals - Detailed Notes
**90-Day ML Journey**

---

## 📅 Session Information
- **Date:** _______________
- **Day:** 1/90
- **Phase:** Python Fundamentals
- **Topics:** Variables, Data Types, Operators, Strings

---

## 🎯 Learning Objectives

### By the end of Day 1, you should be able to:
- ✅ Install Python and set up development environment
- ✅ Understand variables and data types
- ✅ Use arithmetic, comparison, and logical operators
- ✅ Perform string operations
- ✅ Write basic Python programs
- ✅ Use Git for version control

---

## 📚 SECTION 1: Python Installation & Setup

### What is Python?
```
Python is a high-level, interpreted programming language known for:
- Simple and readable syntax
- Versatile (web, data science, AI/ML, automation)
- Large standard library
- Active community support

Created by: Guido van Rossum (1991)
Current Version: 3.11+ (as of 2024)
```

### Installation Steps

#### Windows:
1. Download from python.org
2. Run installer
3. ✅ **IMPORTANT:** Check "Add Python to PATH"
4. Click "Install Now"
5. Verify: Open CMD → `python --version`

#### macOS:
```bash
# Install using Homebrew
brew install python3

# Verify installation
python3 --version
```

#### Linux:
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install python3 python3-pip

# Verify installation
python3 --version
```

### VS Code Setup
1. Download VS Code from code.visualstudio.com
2. Install Python extension by Microsoft
3. Create new file: `hello.py`
4. Write: `print("Hello, World!")`
5. Run: Right-click → "Run Python File in Terminal"

---

## 📚 SECTION 2: Variables & Data Types

### Variables
```
A variable is a container that stores data values.
Think of it as a labeled box that holds information.
```

#### Variable Declaration
```python
# Syntax: variable_name = value

name = "Alice"        # String variable
age = 25              # Integer variable
height = 5.9          # Float variable
is_student = True     # Boolean variable
```

#### Variable Naming Rules
```
✅ VALID:
- student_name
- age2
- _private_var
- firstName

❌ INVALID:
- 2students (starts with number)
- student-name (contains hyphen)
- for (reserved keyword)
- student name (contains space)
```

#### Best Practices
```python
# Use descriptive names
student_age = 20      # Good
sa = 20               # Bad

# Use snake_case for variables
student_first_name = "John"

# Constants in UPPERCASE
PI = 3.14159
MAX_ATTEMPTS = 3
```

### Data Types

#### 1. Integer (int)
```python
# Whole numbers (positive, negative, or zero)
age = 25
temperature = -5
count = 0
big_number = 1000000

# Check type
print(type(age))  # Output: <class 'int'>
```

#### 2. Float (float)
```python
# Decimal numbers
height = 5.9
pi = 3.14159
temperature = -2.5
small = 0.0001

# Check type
print(type(height))  # Output: <class 'float'>
```

#### 3. String (str)
```python
# Text data (enclosed in quotes)
name = "Alice"
message = 'Hello World'
multi_line = """This is
a multi-line
string"""

# Check type
print(type(name))  # Output: <class 'str'>
```

#### 4. Boolean (bool)
```python
# True or False values
is_student = True
is_working = False
has_license = True

# Check type
print(type(is_student))  # Output: <class 'bool'>
```

### Type Conversion
```python
# String to Integer
age_str = "25"
age_int = int(age_str)
print(age_int + 5)  # Output: 30

# String to Float
price_str = "99.99"
price_float = float(price_str)
print(price_float)  # Output: 99.99

# Integer to String
age = 25
age_str = str(age)
print("Age: " + age_str)  # Output: Age: 25

# Float to Integer (truncates decimal)
height = 5.9
height_int = int(height)
print(height_int)  # Output: 5
```

---

## 📚 SECTION 3: Operators

### Arithmetic Operators
```python
a = 10
b = 3

# Addition
print(a + b)   # 13

# Subtraction
print(a - b)   # 7

# Multiplication
print(a * b)   # 30

# Division (returns float)
print(a / b)   # 3.3333...

# Floor Division (returns integer)
print(a // b)  # 3

# Modulus (remainder)
print(a % b)   # 1

# Exponentiation (power)
print(a ** b)  # 1000
```

### Comparison Operators
```python
x = 10
y = 5

# Equal to
print(x == y)   # False

# Not equal to
print(x != y)   # True

# Greater than
print(x > y)    # True

# Less than
print(x < y)    # False

# Greater than or equal to
print(x >= 10)  # True

# Less than or equal to
print(y <= 5)   # True
```

### Logical Operators
```python
# AND (both conditions must be True)
print(True and True)    # True
print(True and False)   # False

# OR (at least one condition must be True)
print(True or False)    # True
print(False or False)   # False

# NOT (reverses the condition)
print(not True)         # False
print(not False)        # True

# Practical example
age = 25
has_license = True
can_drive = (age >= 18) and has_license
print(can_drive)  # True
```

### Assignment Operators
```python
x = 5       # Simple assignment

x += 3      # x = x + 3  (x becomes 8)
x -= 2      # x = x - 2  (x becomes 6)
x *= 2      # x = x * 2  (x becomes 12)
x /= 3      # x = x / 3  (x becomes 4.0)
x //= 2     # x = x // 2 (x becomes 2.0)
x %= 2      # x = x % 2  (x becomes 0.0)
```

---

## 📚 SECTION 4: String Operations

### String Creation
```python
# Single quotes
name = 'Alice'

# Double quotes
message = "Hello World"

# Triple quotes (multi-line)
paragraph = """This is
a multi-line
string"""
```

### String Concatenation
```python
first_name = "John"
last_name = "Doe"

# Using + operator
full_name = first_name + " " + last_name
print(full_name)  # John Doe

# Using * for repetition
print("Ha" * 3)  # HaHaHa
```

### String Indexing & Slicing
```python
text = "Python"

# Indexing (0-based)
print(text[0])   # 'P'
print(text[1])   # 'y'
print(text[-1])  # 'n' (last character)
print(text[-2])  # 'o' (second from last)

# Slicing [start:end:step]
print(text[0:3])   # 'Pyt' (characters 0, 1, 2)
print(text[:3])    # 'Pyt' (same as above)
print(text[3:])    # 'hon' (from index 3 to end)
print(text[-3:])   # 'hon' (last 3 characters)
print(text[::2])   # 'Pto' (every 2nd character)
print(text[::-1])  # 'nohtyP' (reverse string)
```

### String Methods
```python
text = "Python Programming"

# Length
print(len(text))           # 18

# Uppercase
print(text.upper())        # 'PYTHON PROGRAMMING'

# Lowercase
print(text.lower())        # 'python programming'

# Title case
print(text.title())        # 'Python Programming'

# Replace
print(text.replace('Python', 'Java'))  # 'Java Programming'

# Split
words = text.split()       # ['Python', 'Programming']

# Strip (remove whitespace)
text2 = "  hello  "
print(text2.strip())       # 'hello'

# Find (returns index)
print(text.find('Pro'))    # 7

# Count
print(text.count('o'))     # 2

# Check if starts/ends with
print(text.startswith('Py'))  # True
print(text.endswith('ing'))   # True
```

### String Formatting
```python
name = "Alice"
age = 25

# Method 1: f-strings (Python 3.6+, recommended)
message = f"My name is {name} and I am {age} years old"
print(message)

# Method 2: format()
message = "My name is {} and I am {} years old".format(name, age)
print(message)

# Method 3: % operator (old style)
message = "My name is %s and I am %d years old" % (name, age)
print(message)

# Advanced f-string formatting
price = 19.99
print(f"Price: ${price:.2f}")  # Price: $19.99

number = 1234567
print(f"{number:,}")           # 1,234,567
```

---

## 📚 SECTION 5: Input & Output

### Output (print)
```python
# Basic print
print("Hello, World!")

# Multiple arguments
print("Python", "is", "awesome")  # Python is awesome

# Custom separator
print("Python", "is", "awesome", sep="-")  # Python-is-awesome

# End parameter (default is \n)
print("Hello", end=" ")
print("World")  # Output: Hello World

# Print variables
name = "Alice"
age = 25
print("Name:", name, "Age:", age)
```

### Input
```python
# Get user input (always returns string)
name = input("Enter your name: ")
print(f"Hello, {name}!")

# Convert input to integer
age = int(input("Enter your age: "))
print(f"You are {age} years old")

# Convert input to float
height = float(input("Enter your height: "))
print(f"Your height is {height} meters")
```

---

## 📚 SECTION 6: Comments & Documentation

### Single-line Comments
```python
# This is a single-line comment
x = 5  # This is also a comment
```

### Multi-line Comments
```python
"""
This is a multi-line comment.
Used for longer explanations.
Also called docstrings.
"""
```

### Function Documentation
```python
def add_numbers(a, b):
    """
    Add two numbers and return the result.
    
    Parameters:
    a (int/float): First number
    b (int/float): Second number
    
    Returns:
    int/float: Sum of a and b
    
    Example:
    >>> add_numbers(5, 3)
    8
    """
    return a + b
```

---

## 💡 Key Concepts Summary

### Variable Assignment
```
✅ Variables are created when you assign a value
✅ Python is dynamically typed (type inferred automatically)
✅ Use descriptive names for better code readability
```

### Data Types Hierarchy
```
Numbers
├── Integer (int)
└── Float (float)

Text
└── String (str)

Boolean
└── Boolean (bool)
```

### Operator Precedence (PEMDAS)
```
1. Parentheses ()
2. Exponentiation **
3. Multiplication *, Division /, Floor Division //, Modulus %
4. Addition +, Subtraction -
5. Comparison ==, !=, <, >, <=, >=
6. Logical NOT
7. Logical AND
8. Logical OR
```

---

## ✍️ Practice Exercises Notes

### Exercise 1: Temperature Converter
```python
# Key Learning: Formula implementation and type conversion
celsius = 25
fahrenheit = (celsius * 9/5) + 32
# Result: 77.0°F
```

### Exercise 2: Simple Calculator
```python
# Key Learning: Function creation and error handling
def divide(a, b):
    if b == 0:
        return "Error: Division by zero!"
    return a / b
```

### Exercise 3: Area Calculator
```python
# Key Learning: Math module and formula application
import math
area = math.pi * radius ** 2
```

---

## 🚀 Personal Observations

### What I Understood Well:
```
1. ___________________________________
2. ___________________________________
3. ___________________________________
```

### What Needs More Practice:
```
1. ___________________________________
2. ___________________________________
3. ___________________________________
```

### Questions to Explore:
```
1. ___________________________________
2. ___________________________________
3. ___________________________________
```

---

## 📌 Quick Reference

### Common Errors & Solutions
```python
# Error: NameError: name 'x' is not defined
# Solution: Define variable before using

# Error: TypeError: can only concatenate str (not "int") to str
# Solution: Convert to same type
age = 25
print("Age: " + str(age))  # Correct

# Error: IndentationError: unexpected indent
# Solution: Check proper indentation (4 spaces)

# Error: SyntaxError: invalid syntax
# Solution: Check for typos, missing colons, parentheses
```

### Useful Built-in Functions
```python
type(x)      # Get type of variable
len(x)       # Get length of string/list
int(x)       # Convert to integer
float(x)     # Convert to float
str(x)       # Convert to string
input()      # Get user input
print()      # Output to console
```

---

## 🎯 Day 1 Checklist

- [ ] Python installed successfully
- [ ] VS Code set up with Python extension
- [ ] Understood variables and data types
- [ ] Practiced all operators
- [ ] Completed string operations
- [ ] Wrote and ran first Python programs
- [ ] Solved all 5 practice problems
- [ ] Created mini project
- [ ] Set up Git and GitHub
- [ ] Updated progress tracker

---

## 📅 Tomorrow's Focus: Day 2 - Control Flow

**Topics:**
- if-else statements
- Loops (for, while)
- Range function
- Break and continue

**Preparation:**
- Review today's code
- Practice problems again if needed
- Get good rest!

---

**Notes Created:** Day 1
**Last Updated:** ___________
**Review Status:** [ ] Not Reviewed  [ ] Reviewed  [ ] Mastered

*These notes are your learning companion. Update and refer to them regularly!* 📝
