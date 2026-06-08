"""
Day 1: Python Basics - Complete Code Examples
90-Day ML Journey
"""

# ============================================
# SECTION 1: HELLO WORLD & BASIC OUTPUT
# ============================================

print("Hello, World!")
print("Welcome to 90-Day ML Journey!")
print("Day 1: Python Fundamentals")

# Multiple print statements
print("This", "is", "Python", sep=" - ")
print("Line 1\nLine 2\nLine 3")  # \n for new line
print("Tab\tSeparated\tValues")  # \t for tab

# ============================================
# SECTION 2: VARIABLES & DATA TYPES
# ============================================

# Integer
age = 25
count = 100
negative = -50

print(f"Age: {age}, Type: {type(age)}")

# Float
height = 5.9
pi = 3.14159
temperature = -2.5

print(f"Height: {height}, Type: {type(height)}")

# String
name = "Python"
message = 'Machine Learning'
multi_line = """This is
a multi-line
string"""

print(f"Name: {name}, Type: {type(name)}")

# Boolean
is_student = True
is_working = False

print(f"Student: {is_student}, Type: {type(is_student)}")

# Multiple assignment
x, y, z = 10, 20, 30
print(f"x={x}, y={y}, z={z}")

# Same value to multiple variables
a = b = c = 100
print(f"a={a}, b={b}, c={c}")

# ============================================
# SECTION 3: OPERATORS
# ============================================

# Arithmetic Operators
num1 = 10
num2 = 3

print("\n=== ARITHMETIC OPERATORS ===")
print(f"{num1} + {num2} = {num1 + num2}")      # Addition
print(f"{num1} - {num2} = {num1 - num2}")      # Subtraction
print(f"{num1} * {num2} = {num1 * num2}")      # Multiplication
print(f"{num1} / {num2} = {num1 / num2}")      # Division
print(f"{num1} // {num2} = {num1 // num2}")    # Floor Division
print(f"{num1} % {num2} = {num1 % num2}")      # Modulus
print(f"{num1} ** {num2} = {num1 ** num2}")    # Exponentiation

# Comparison Operators
print("\n=== COMPARISON OPERATORS ===")
print(f"{num1} == {num2}: {num1 == num2}")     # Equal
print(f"{num1} != {num2}: {num1 != num2}")     # Not equal
print(f"{num1} > {num2}: {num1 > num2}")       # Greater than
print(f"{num1} < {num2}: {num1 < num2}")       # Less than
print(f"{num1} >= {num2}: {num1 >= num2}")     # Greater than or equal
print(f"{num1} <= {num2}: {num1 <= num2}")     # Less than or equal

# Logical Operators
print("\n=== LOGICAL OPERATORS ===")
print(f"True and True: {True and True}")
print(f"True and False: {True and False}")
print(f"True or False: {True or False}")
print(f"not True: {not True}")

# ============================================
# SECTION 4: STRING OPERATIONS
# ============================================

print("\n=== STRING OPERATIONS ===")

text = "Python Programming"

# String concatenation
greeting = "Hello" + " " + "World"
print(f"Concatenation: {greeting}")

# String repetition
print(f"Repetition: {'Python ' * 3}")

# String length
print(f"Length of '{text}': {len(text)}")

# String methods
print(f"Uppercase: {text.upper()}")
print(f"Lowercase: {text.lower()}")
print(f"Title Case: {text.title()}")
print(f"Replace: {text.replace('Python', 'Java')}")
print(f"Split: {text.split()}")

# String slicing
print(f"First 6 chars: {text[:6]}")
print(f"Last 11 chars: {text[-11:]}")
print(f"Characters 7-18: {text[7:18]}")

# String formatting
name = "Alice"
age = 25
# Method 1: f-strings (recommended)
print(f"My name is {name} and I am {age} years old")
# Method 2: format()
print("My name is {} and I am {} years old".format(name, age))
# Method 3: % operator (old style)
print("My name is %s and I am %d years old" % (name, age))

# ============================================
# SECTION 5: TYPE CONVERSION
# ============================================

print("\n=== TYPE CONVERSION ===")

# String to int
str_num = "123"
int_num = int(str_num)
print(f"String '{str_num}' to int: {int_num}")

# String to float
str_float = "3.14"
float_num = float(str_float)
print(f"String '{str_float}' to float: {float_num}")

# Int to string
number = 456
str_number = str(number)
print(f"Int {number} to string: '{str_number}'")

# Float to int (truncation)
decimal = 9.99
integer = int(decimal)
print(f"Float {decimal} to int: {integer}")

# ============================================
# SECTION 6: INPUT/OUTPUT
# ============================================

print("\n=== INPUT/OUTPUT EXAMPLES ===")

# Basic input (commented out for automated testing)
# user_name = input("Enter your name: ")
# print(f"Hello, {user_name}!")

# Simulated input for demonstration
user_name = "John"
print(f"Hello, {user_name}!")

# Numeric input (commented out)
# user_age = int(input("Enter your age: "))
# print(f"You are {user_age} years old")

# Simulated numeric input
user_age = 25
print(f"You are {user_age} years old")

# ============================================
# SECTION 7: PRACTICAL EXAMPLES
# ============================================

print("\n=== PRACTICAL EXAMPLES ===")

# Example 1: Temperature Converter
def celsius_to_fahrenheit(celsius):
    """Convert Celsius to Fahrenheit"""
    return (celsius * 9/5) + 32

celsius = 25
fahrenheit = celsius_to_fahrenheit(celsius)
print(f"{celsius}°C = {fahrenheit}°F")

# Example 2: Area Calculator
def calculate_circle_area(radius):
    """Calculate area of a circle"""
    import math
    return math.pi * radius ** 2

radius = 5
area = calculate_circle_area(radius)
print(f"Area of circle with radius {radius}: {area:.2f}")

# Example 3: Simple Interest
def calculate_simple_interest(principal, rate, time):
    """Calculate simple interest"""
    return (principal * rate * time) / 100

principal = 10000
rate = 5
time = 2
interest = calculate_simple_interest(principal, rate, time)
print(f"Simple Interest: ${interest}")

# Example 4: Number Swap
a, b = 10, 20
print(f"Before swap: a={a}, b={b}")
a, b = b, a  # Pythonic way
print(f"After swap: a={a}, b={b}")

# Example 5: Even/Odd Check
def is_even(number):
    """Check if number is even"""
    return number % 2 == 0

number = 10
if is_even(number):
    print(f"{number} is even")
else:
    print(f"{number} is odd")

# ============================================
# SECTION 8: COMMENTS & DOCUMENTATION
# ============================================

# Single-line comment

"""
Multi-line comment
or docstring for documentation
"""

def add_numbers(a, b):
    """
    Add two numbers and return the result.
    
    Args:
        a (int/float): First number
        b (int/float): Second number
    
    Returns:
        int/float: Sum of a and b
    
    Example:
        >>> add_numbers(5, 3)
        8
    """
    return a + b

result = add_numbers(5, 3)
print(f"5 + 3 = {result}")

# ============================================
# SECTION 9: COMMON PATTERNS
# ============================================

print("\n=== COMMON PATTERNS ===")

# Pattern 1: Check if string is empty
text = "Hello"
if text:
    print("String is not empty")

# Pattern 2: Default value
name = None
display_name = name or "Guest"
print(f"Welcome, {display_name}!")

# Pattern 3: Check multiple conditions
age = 25
if 18 <= age < 60:
    print("Adult age")

# Pattern 4: String contains
sentence = "Python is awesome"
if "Python" in sentence:
    print("Found Python in sentence")

# Pattern 5: Type checking
value = 42
if isinstance(value, int):
    print("Value is an integer")

# ============================================
# SECTION 10: BEST PRACTICES
# ============================================

print("\n=== BEST PRACTICES ===")

# Use descriptive variable names
student_age = 20  # Good
sa = 20  # Bad

# Use constants for fixed values
PI = 3.14159
MAX_RETRIES = 3

# Use meaningful function names
def calculate_total_price(price, quantity):
    return price * quantity

# Add docstrings
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}!"

# Use proper spacing
x = 5 + 10  # Good
x=5+10      # Bad (harder to read)

# ============================================
# PRACTICE EXERCISES - DO THESE!
# ============================================

print("\n=== PRACTICE EXERCISES ===")

# Exercise 1: Calculate BMI
height_m = 1.75  # meters
weight_kg = 70   # kg
bmi = weight_kg / (height_m ** 2)
print(f"BMI: {bmi:.2f}")

# Exercise 2: Calculate age in days
age_years = 25
age_days = age_years * 365
print(f"{age_years} years = approximately {age_days} days")

# Exercise 3: Time conversion
hours = 2
minutes = 30
total_minutes = hours * 60 + minutes
print(f"{hours}h {minutes}m = {total_minutes} minutes")

# Exercise 4: Percentage calculator
marks_obtained = 450
total_marks = 500
percentage = (marks_obtained / total_marks) * 100
print(f"Percentage: {percentage}%")

# Exercise 5: Currency converter
usd = 100
exchange_rate = 82.50  # 1 USD = 82.50 INR
inr = usd * exchange_rate
print(f"${usd} = ₹{inr}")

# ============================================
# DAY 1 SUMMARY
# ============================================

print("\n" + "=" * 50)
print("DAY 1 COMPLETE!")
print("=" * 50)
print("\nTopics Covered:")
print("✓ Variables and Data Types")
print("✓ Operators (Arithmetic, Comparison, Logical)")
print("✓ String Operations")
print("✓ Type Conversion")
print("✓ Input/Output")
print("✓ Basic Functions")
print("✓ Comments and Documentation")
print("✓ Best Practices")
print("\nProblems Solved: 10+")
print("Next: Day 2 - Control Flow (if-else, loops)")
print("=" * 50)
