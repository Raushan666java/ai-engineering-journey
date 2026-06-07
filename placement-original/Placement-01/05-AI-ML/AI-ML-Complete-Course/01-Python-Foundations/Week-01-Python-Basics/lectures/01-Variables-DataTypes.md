# Variables and Data Types

## 🎯 Learning Objectives
- Understand Python variables and naming conventions
- Master basic data types (int, float, string, boolean)
- Learn type conversion and checking
- Practice variable operations

## 📚 Content

### Variables in Python
```python
# Variable assignment
name = "Alice"
age = 25
height = 5.8
is_student = True

# Multiple assignment
x, y, z = 1, 2, 3
a = b = c = 0
```

### Data Types

#### 1. Numbers
```python
# Integer
count = 42
negative = -10

# Float
price = 19.99
scientific = 1.5e-4

# Complex
complex_num = 3 + 4j
```

#### 2. Strings
```python
# String creation
single_quote = 'Hello'
double_quote = "World"
multiline = """This is a
multiline string"""

# String operations
greeting = "Hello" + " " + "World"
repeated = "Python" * 3
```

#### 3. Boolean
```python
is_valid = True
is_empty = False

# Boolean operations
result = True and False  # False
result = True or False   # True
result = not True        # False
```

### Type Checking and Conversion
```python
# Type checking
print(type(42))        # <class 'int'>
print(type(3.14))      # <class 'float'>
print(type("hello"))   # <class 'str'>

# Type conversion
num_str = "123"
num_int = int(num_str)     # 123
num_float = float(num_str) # 123.0
str_num = str(456)         # "456"
```

## 💻 Practice Exercises

### Exercise 1: Variable Operations
```python
# Create variables for personal information
name = "Your Name"
age = 25
height = 5.8
is_student = True

# Print formatted information
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Student: {is_student}")
```

### Exercise 2: Type Conversions
```python
# Convert between types
str_number = "42"
int_number = int(str_number)
float_number = float(str_number)

print(f"String: {str_number} (type: {type(str_number)})")
print(f"Integer: {int_number} (type: {type(int_number)})")
print(f"Float: {float_number} (type: {type(float_number)})")
```

### Exercise 3: String Formatting
```python
# Different string formatting methods
name = "Python"
version = 3.9

# f-strings (recommended)
message1 = f"Welcome to {name} {version}"

# .format() method
message2 = "Welcome to {} {}".format(name, version)

# % formatting (older style)
message3 = "Welcome to %s %.1f" % (name, version)

print(message1)
print(message2)
print(message3)
```

## 🔍 Key Points
- Variables are created when first assigned
- Python is dynamically typed
- Use descriptive variable names
- Follow PEP 8 naming conventions
- Understand type conversion rules

## 📝 Assignment
Create a program that:
1. Collects user information (name, age, email)
2. Validates data types
3. Performs calculations with numeric data
4. Displays formatted output