# Week 1 Study Guide: Python Basics

## Overview
This study guide covers all essential concepts from Week 1. Use it to review before assignments, labs, and assessments.

## Learning Objectives Checklist
By the end of Week 1, you should be able to:
- [ ] Explain what Python is and its key features
- [ ] Set up a Python development environment
- [ ] Create and use variables of different data types
- [ ] Perform basic arithmetic and string operations
- [ ] Write conditional statements (if/else)
- [ ] Create and use loops (for and while)
- [ ] Handle user input and output
- [ ] Debug simple Python programs

## Key Concepts Summary

### 1. Python Fundamentals
- **Interpreted Language**: No compilation needed
- **Dynamic Typing**: Variables don't need type declarations
- **Indentation**: Uses whitespace to define code blocks
- **Case Sensitive**: `Variable` and `variable` are different

### 2. Data Types
| Type | Example | Description |
|------|---------|-------------|
| int | `42` | Whole numbers |
| float | `3.14` | Decimal numbers |
| str | `"Hello"` | Text strings |
| bool | `True/False` | Boolean values |

### 3. Operators
**Arithmetic Operators:**
- `+` Addition
- `-` Subtraction
- `*` Multiplication
- `/` Division
- `//` Floor division
- `%` Modulus
- `**` Exponentiation

**Comparison Operators:**
- `==` Equal to
- `!=` Not equal to
- `>` Greater than
- `<` Less than
- `>=` Greater than or equal
- `<=` Less than or equal

**Logical Operators:**
- `and` Logical AND
- `or` Logical OR
- `not` Logical NOT

### 4. Control Structures

**If Statement Syntax:**
```python
if condition:
    # code block
elif another_condition:
    # code block
else:
    # code block
```

**For Loop Syntax:**
```python
for variable in sequence:
    # code block
```

**While Loop Syntax:**
```python
while condition:
    # code block
```

### 5. Common Functions
- `print()` - Output to console
- `input()` - Get user input
- `len()` - Get length of string/list
- `type()` - Get data type
- `int()`, `float()`, `str()` - Type conversion
- `range()` - Generate number sequences

## Code Examples

### Variables and Data Types
```python
# Variable assignment
name = "Alice"
age = 25
height = 5.6
is_student = True

# Type checking
print(type(name))    # <class 'str'>
print(type(age))     # <class 'int'>
```

### String Operations
```python
first_name = "John"
last_name = "Doe"

# Concatenation
full_name = first_name + " " + last_name

# String methods
print(full_name.upper())      # JOHN DOE
print(full_name.lower())      # john doe
print(len(full_name))         # 8
```

### Conditional Logic
```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
else:
    grade = "F"

print(f"Grade: {grade}")
```

### Loops
```python
# For loop with range
for i in range(5):
    print(i)  # 0, 1, 2, 3, 4

# For loop with list
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)

# While loop
count = 0
while count < 5:
    print(count)
    count += 1
```

## Common Mistakes and Solutions

### 1. Indentation Errors
**Wrong:**
```python
if x > 5:
print("Greater than 5")  # IndentationError
```

**Correct:**
```python
if x > 5:
    print("Greater than 5")  # Proper indentation
```

### 2. Variable Name Errors
**Wrong:**
```python
2variable = 10  # SyntaxError: can't start with number
my-variable = 5  # SyntaxError: can't use hyphens
```

**Correct:**
```python
variable2 = 10
my_variable = 5
```

### 3. Type Errors
**Wrong:**
```python
age = input("Enter age: ")  # Returns string
if age > 18:  # TypeError: can't compare string to int
```

**Correct:**
```python
age = int(input("Enter age: "))  # Convert to int
if age > 18:
    print("Adult")
```

### 4. Infinite Loops
**Wrong:**
```python
count = 0
while count < 5:
    print(count)  # Forgot to increment count
```

**Correct:**
```python
count = 0
while count < 5:
    print(count)
    count += 1  # Don't forget to update condition variable
```

## Practice Problems

### Easy Level
1. Write a program to calculate the area of a rectangle
2. Create a program that converts Celsius to Fahrenheit
3. Write a program to check if a number is positive, negative, or zero

### Medium Level
1. Create a program to find the factorial of a number
2. Write a program to check if a number is prime
3. Create a multiplication table generator

### Hard Level
1. Build a simple text-based adventure game
2. Create a program to generate Fibonacci sequence
3. Write a program to reverse a string without using built-in functions

## Study Tips

### Before Class
- [ ] Read lecture materials
- [ ] Watch recommended videos
- [ ] Try code examples yourself

### During Class
- [ ] Take notes on key concepts
- [ ] Ask questions when confused
- [ ] Participate in coding exercises

### After Class
- [ ] Review lecture notes
- [ ] Complete lab exercises
- [ ] Work on assignments early
- [ ] Practice with additional problems

### For Exams
- [ ] Review all code examples
- [ ] Practice writing code by hand
- [ ] Understand error messages
- [ ] Time yourself on practice problems

## Quick Reference

### Python Keywords
```
and, as, assert, break, class, continue, def, del, elif, else,
except, False, finally, for, from, global, if, import, in,
is, lambda, None, nonlocal, not, or, pass, raise, return,
True, try, while, with, yield
```

### Escape Characters
- `\n` - New line
- `\t` - Tab
- `\"` - Double quote
- `\'` - Single quote
- `\\` - Backslash

### String Formatting
```python
name = "Alice"
age = 25

# f-string (recommended)
message = f"Hello, {name}! You are {age} years old."

# .format() method
message = "Hello, {}! You are {} years old.".format(name, age)

# % formatting (older style)
message = "Hello, %s! You are %d years old." % (name, age)
```

## Additional Resources

### Online Practice
- [Python.org Tutorial](https://docs.python.org/3/tutorial/)
- [Codecademy Python Course](https://www.codecademy.com/learn/learn-python-3)
- [HackerRank Python Domain](https://www.hackerrank.com/domains/python)

### Books
- "Python Crash Course" by Eric Matthes
- "Automate the Boring Stuff with Python" by Al Sweigart
- "Learning Python" by Mark Lutz

### Tools
- **IDLE** - Built-in Python IDE
- **PyCharm** - Professional IDE
- **VS Code** - Lightweight editor with Python extension
- **Jupyter Notebook** - Interactive coding environment

## Assessment Preparation

### What to Expect
- Variable declaration and manipulation
- Basic arithmetic operations
- String operations and formatting
- Conditional statements
- Loop construction
- Input/output operations
- Error identification and debugging

### Study Schedule (Week 1)
- **Day 1-2**: Variables, data types, operators
- **Day 3-4**: Control structures (if/else)
- **Day 5-6**: Loops (for/while)
- **Day 7**: Review and practice problems

Remember: Programming is learned by doing. Practice coding every day, even if it's just for 30 minutes!