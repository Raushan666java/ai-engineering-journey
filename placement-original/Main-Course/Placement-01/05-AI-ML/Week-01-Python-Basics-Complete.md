# 📖 Week 1: Python Programming Basics - Complete Study Material

## 🎯 Learning Objectives
- Master Python syntax and programming fundamentals
- Understand data types, variables, and operators
- Learn control structures and functions
- Build foundation for AI/ML programming

---

## 📚 **LECTURE NOTES**

### **Day 1: Python Environment & Syntax**

#### **1.1 Python Installation & Setup**
```python
# Check Python version
import sys
print(f"Python version: {sys.version}")

# Virtual environment setup
# python -m venv ai_ml_env
# source ai_ml_env/bin/activate  # Linux/Mac
# ai_ml_env\Scripts\activate     # Windows
```

#### **1.2 Variables and Data Types**
```python
# Basic data types
name = "Alice"           # String
age = 25                 # Integer
height = 5.6             # Float
is_student = True        # Boolean

# Type checking
print(type(name))        # <class 'str'>
print(type(age))         # <class 'int'>

# Type conversion
age_str = str(age)       # "25"
height_int = int(height) # 5
```

#### **1.3 Operators**
```python
# Arithmetic operators
a, b = 10, 3
print(a + b)    # 13 (Addition)
print(a - b)    # 7  (Subtraction)
print(a * b)    # 30 (Multiplication)
print(a / b)    # 3.33 (Division)
print(a // b)   # 3  (Floor division)
print(a % b)    # 1  (Modulus)
print(a ** b)   # 1000 (Exponentiation)

# Comparison operators
print(a > b)    # True
print(a == b)   # False
print(a != b)   # True

# Logical operators
x, y = True, False
print(x and y)  # False
print(x or y)   # True
print(not x)    # False
```

### **Day 2: Control Structures**

#### **2.1 Conditional Statements**
```python
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

print(f"Grade: {grade}")

# Ternary operator
status = "Pass" if score >= 60 else "Fail"
```

#### **2.2 Loops**
```python
# For loop
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(f"I like {fruit}")

# Range function
for i in range(5):          # 0 to 4
    print(i)

for i in range(2, 8, 2):    # 2, 4, 6
    print(i)

# While loop
count = 0
while count < 5:
    print(f"Count: {count}")
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue    # Skip 3
    if i == 7:
        break      # Stop at 7
    print(i)
```

### **Day 3: Functions**

#### **3.1 Function Definition**
```python
# Basic function
def greet(name):
    return f"Hello, {name}!"

# Function with default parameters
def calculate_area(length, width=1):
    return length * width

# Multiple return values
def get_name_age():
    return "John", 30

name, age = get_name_age()

# Variable arguments
def sum_all(*args):
    return sum(args)

result = sum_all(1, 2, 3, 4, 5)  # 15

# Keyword arguments
def create_profile(**kwargs):
    return kwargs

profile = create_profile(name="Alice", age=25, city="NYC")
```

#### **3.2 Lambda Functions**
```python
# Lambda function
square = lambda x: x ** 2
print(square(5))  # 25

# Lambda with map
numbers = [1, 2, 3, 4, 5]
squares = list(map(lambda x: x**2, numbers))

# Lambda with filter
evens = list(filter(lambda x: x % 2 == 0, numbers))
```

### **Day 4: Data Structures**

#### **4.1 Lists**
```python
# List creation and operations
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]

# List methods
fruits.append("grape")      # Add to end
fruits.insert(1, "mango")   # Insert at index
fruits.remove("banana")     # Remove by value
popped = fruits.pop()       # Remove and return last

# List slicing
print(numbers[1:4])         # [2, 3, 4]
print(numbers[:3])          # [1, 2, 3]
print(numbers[2:])          # [3, 4, 5]
print(numbers[::-1])        # [5, 4, 3, 2, 1] (reverse)

# List comprehension
squares = [x**2 for x in range(10)]
evens = [x for x in range(20) if x % 2 == 0]
```

#### **4.2 Tuples**
```python
# Tuple creation (immutable)
coordinates = (10, 20)
rgb = (255, 128, 0)

# Tuple unpacking
x, y = coordinates
r, g, b = rgb

# Named tuples
from collections import namedtuple
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(p.x, p.y)
```

#### **4.3 Dictionaries**
```python
# Dictionary creation
student = {
    "name": "Alice",
    "age": 20,
    "grades": [85, 90, 78]
}

# Dictionary operations
student["email"] = "alice@email.com"  # Add key
age = student.get("age", 0)           # Safe get
del student["age"]                    # Delete key

# Dictionary methods
keys = student.keys()
values = student.values()
items = student.items()

# Dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}
```

#### **4.4 Sets**
```python
# Set creation (unique elements)
numbers = {1, 2, 3, 4, 5}
fruits = set(["apple", "banana", "apple"])  # Removes duplicates

# Set operations
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2           # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2    # {3, 4}
difference = set1 - set2      # {1, 2}
```

### **Day 5: File I/O & Error Handling**

#### **5.1 File Operations**
```python
# Writing to file
with open("data.txt", "w") as file:
    file.write("Hello, World!\n")
    file.write("Python is awesome!")

# Reading from file
with open("data.txt", "r") as file:
    content = file.read()
    print(content)

# Reading lines
with open("data.txt", "r") as file:
    lines = file.readlines()
    for line in lines:
        print(line.strip())

# Working with CSV
import csv

# Write CSV
data = [["Name", "Age"], ["Alice", 25], ["Bob", 30]]
with open("people.csv", "w", newline="") as file:
    writer = csv.writer(file)
    writer.writerows(data)

# Read CSV
with open("people.csv", "r") as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```

#### **5.2 Error Handling**
```python
# Try-except block
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("Invalid input! Please enter a number.")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always executes")

# Custom exceptions
class CustomError(Exception):
    pass

def validate_age(age):
    if age < 0:
        raise CustomError("Age cannot be negative")
    return age
```

---

## 💻 **PRACTICE QUESTIONS**

### **Basic Level (1-10)**

1. **Variable Assignment**
```python
# Create variables for your name, age, and favorite color
# Print them in a formatted string
```

2. **Type Conversion**
```python
# Convert the string "123" to integer and float
# Convert the number 45.67 to string and integer
```

3. **Arithmetic Operations**
```python
# Calculate the area of a rectangle (length=10, width=5)
# Calculate compound interest: A = P(1 + r/n)^(nt)
# P=1000, r=0.05, n=12, t=2
```

4. **Conditional Logic**
```python
# Write a program to check if a number is positive, negative, or zero
# Create a simple calculator for +, -, *, /
```

5. **Loop Practice**
```python
# Print multiplication table for a given number
# Find the sum of first 100 natural numbers
# Print all even numbers from 1 to 50
```

6. **Function Creation**
```python
# Write a function to check if a number is prime
# Create a function to find factorial of a number
# Write a function to reverse a string
```

7. **List Operations**
```python
# Create a list of 10 random numbers and find max, min, sum
# Remove duplicates from a list
# Merge two sorted lists
```

8. **Dictionary Practice**
```python
# Create a phone book dictionary and add/search contacts
# Count frequency of characters in a string using dictionary
```

9. **String Manipulation**
```python
# Check if a string is palindrome
# Count vowels and consonants in a string
# Replace all spaces with underscores
```

10. **File Operations**
```python
# Read a text file and count number of words
# Write student data to CSV file
```

### **Intermediate Level (11-20)**

11. **List Comprehensions**
```python
# Create list of squares of even numbers from 1-20
# Filter words longer than 5 characters from a sentence
```

12. **Lambda Functions**
```python
# Sort list of tuples by second element using lambda
# Use map() to convert temperatures from Celsius to Fahrenheit
```

13. **Error Handling**
```python
# Create a robust division function with error handling
# Handle file not found exception when reading files
```

14. **Advanced Functions**
```python
# Create a decorator to measure function execution time
# Write a recursive function for Fibonacci sequence
```

15. **Data Processing**
```python
# Parse and analyze log file data
# Calculate statistics (mean, median, mode) for a dataset
```

16. **Object-Oriented Programming**
```python
# Create a Student class with methods for grades
# Implement inheritance with Person -> Student -> GraduateStudent
```

17. **Regular Expressions**
```python
# Validate email addresses using regex
# Extract phone numbers from text
```

18. **JSON Processing**
```python
# Read JSON data and convert to Python objects
# Create nested JSON structure for student records
```

19. **Algorithm Implementation**
```python
# Implement binary search algorithm
# Create a simple sorting algorithm (bubble sort)
```

20. **Mini Project**
```python
# Build a simple contact management system
# Features: add, delete, search, display contacts
```

---

## 📝 **ASSIGNMENTS**

### **Assignment 1: Basic Python Programming (Due: Day 3)**

**Problem 1: Personal Information System**
```python
"""
Create a program that:
1. Asks user for name, age, email, phone
2. Validates the input (age should be positive, email should contain @)
3. Stores information in a dictionary
4. Displays formatted output
5. Saves data to a text file
"""

# Your solution here
def collect_user_info():
    # Implementation required
    pass
```

**Problem 2: Number Analysis Tool**
```python
"""
Write a program that:
1. Takes a list of numbers from user
2. Calculates: sum, average, max, min, median
3. Finds even/odd count
4. Displays results in formatted table
"""

def analyze_numbers(numbers):
    # Implementation required
    pass
```

### **Assignment 2: Control Structures & Functions (Due: Day 5)**

**Problem 1: Grade Calculator**
```python
"""
Create a grade management system:
1. Function to calculate letter grade from percentage
2. Function to calculate GPA from multiple grades
3. Function to determine honor roll status
4. Main program to process multiple students
"""

def calculate_letter_grade(percentage):
    # Implementation required
    pass

def calculate_gpa(grades):
    # Implementation required
    pass
```

**Problem 2: Pattern Generator**
```python
"""
Create functions to generate patterns:
1. Right triangle of stars
2. Pyramid of numbers
3. Diamond pattern
4. Pascal's triangle (first n rows)
"""

def print_star_triangle(n):
    # Implementation required
    pass
```

### **Assignment 3: Data Structures Project (Due: End of Week)**

**Problem: Library Management System**
```python
"""
Build a simple library management system with:

Classes needed:
- Book (title, author, isbn, available)
- Library (collection of books)

Functions needed:
- add_book()
- remove_book()
- search_book()
- borrow_book()
- return_book()
- display_available_books()
- save_to_file()
- load_from_file()
"""

class Book:
    def __init__(self, title, author, isbn):
        # Implementation required
        pass

class Library:
    def __init__(self):
        # Implementation required
        pass
    
    def add_book(self, book):
        # Implementation required
        pass
```

---

## 🏆 **ASSESSMENTS**

### **Quiz 1: Python Basics (Day 2)**

**Multiple Choice Questions (20 points)**

1. What is the output of `print(type(5.0))`?
   - a) `<class 'int'>`
   - b) `<class 'float'>`
   - c) `<class 'str'>`
   - d) `<class 'number'>`

2. Which operator is used for floor division in Python?
   - a) `/`
   - b) `//`
   - c) `%`
   - d) `**`

3. What will `len("Hello World")` return?
   - a) 10
   - b) 11
   - c) 12
   - d) Error

4. Which of the following is NOT a valid variable name?
   - a) `my_var`
   - b) `_private`
   - c) `2nd_var`
   - d) `myVar2`

5. What is the output of `print(bool([]))`?
   - a) `True`
   - b) `False`
   - c) `None`
   - d) Error

**Short Answer Questions (30 points)**

6. Explain the difference between `=` and `==` operators.

7. Write a one-liner to create a list of squares from 1 to 10.

8. What is the difference between `input()` and `raw_input()` in Python?

**Programming Questions (50 points)**

9. Write a function that takes a string and returns it reversed without using built-in reverse methods.

10. Create a program that finds the second largest number in a list without sorting.

### **Quiz 2: Data Structures & Functions (Day 4)**

**Programming Challenges (100 points)**

1. **List Manipulation (25 points)**
```python
# Given a list of integers, write functions to:
# a) Remove all duplicates
# b) Find the most frequent element
# c) Rotate the list by k positions

def remove_duplicates(lst):
    # Your code here
    pass

def most_frequent(lst):
    # Your code here
    pass

def rotate_list(lst, k):
    # Your code here
    pass
```

2. **Dictionary Operations (25 points)**
```python
# Create a function that merges two dictionaries
# If keys overlap, sum the values

def merge_dictionaries(dict1, dict2):
    # Your code here
    pass

# Test case:
# dict1 = {'a': 1, 'b': 2, 'c': 3}
# dict2 = {'b': 3, 'c': 4, 'd': 5}
# Result should be {'a': 1, 'b': 5, 'c': 7, 'd': 5}
```

3. **String Processing (25 points)**
```python
# Write a function to find all anagrams in a list of words

def find_anagrams(words):
    # Your code here
    pass

# Test case:
# words = ["eat", "tea", "tan", "ate", "nat", "bat"]
# Should return [["eat","tea","ate"], ["tan","nat"], ["bat"]]
```

4. **Algorithm Implementation (25 points)**
```python
# Implement a function to find the longest common subsequence
# between two strings

def longest_common_subsequence(str1, str2):
    # Your code here
    pass
```

### **Mid-Week Assessment: Practical Coding Test (Day 3)**

**Time Limit: 2 hours**

**Problem 1: Data Analysis Tool (40 points)**
```python
"""
Create a program that reads a CSV file containing student data:
Name, Math, Science, English, History

Requirements:
1. Calculate average grade for each student
2. Find subject-wise class averages
3. Identify top 3 students overall
4. Generate a report and save to file
5. Handle missing data gracefully
"""
```

**Problem 2: Text Processing Application (35 points)**
```python
"""
Build a text analyzer that:
1. Reads text from file
2. Counts words, sentences, paragraphs
3. Finds most common words (excluding stop words)
4. Calculates reading difficulty score
5. Generates summary statistics
"""
```

**Problem 3: Mini Game Development (25 points)**
```python
"""
Create a number guessing game with:
1. Random number generation (1-100)
2. User input validation
3. Hint system (higher/lower)
4. Score tracking (attempts)
5. Play again functionality
6. High score persistence
"""
```

### **End-of-Week Project Assessment**

**Final Project: Personal Finance Tracker (100 points)**

**Requirements:**
1. **Data Management (25 points)**
   - Store income and expense transactions
   - Categories for transactions
   - Date tracking
   - Data persistence (file storage)

2. **Core Functionality (35 points)**
   - Add/edit/delete transactions
   - Calculate monthly/yearly summaries
   - Budget tracking and alerts
   - Search and filter transactions

3. **Reporting (25 points)**
   - Generate monthly reports
   - Category-wise spending analysis
   - Savings calculation
   - Export data to CSV

4. **Code Quality (15 points)**
   - Proper function organization
   - Error handling
   - Code documentation
   - User-friendly interface

**Evaluation Rubric:**
- **Excellent (90-100%)**: All features working, excellent code quality, creative additions
- **Good (80-89%)**: Most features working, good code structure, minor issues
- **Satisfactory (70-79%)**: Basic features working, acceptable code quality
- **Needs Improvement (<70%)**: Missing features, poor code quality, major issues

---

## 📚 **ADDITIONAL RESOURCES**

### **Recommended Reading**
- Python.org Official Tutorial
- "Automate the Boring Stuff with Python" - Al Sweigart
- "Python Crash Course" - Eric Matthes

### **Practice Platforms**
- HackerRank Python Domain
- LeetCode Easy Problems
- Codewars Python Kata
- Python.org Practice Problems

### **Video Resources**
- Python for Everybody (Coursera)
- Corey Schafer Python Tutorials
- Real Python Video Courses

### **Cheat Sheets**
- Python Syntax Quick Reference
- Data Structures Summary
- Built-in Functions Guide
- Common Algorithms in Python

---

## ✅ **WEEK 1 COMPLETION CHECKLIST**

### **Knowledge Checkpoints**
- [ ] Can create and run Python programs
- [ ] Understands all basic data types
- [ ] Can use control structures effectively
- [ ] Can write and call functions
- [ ] Comfortable with lists, dictionaries, tuples
- [ ] Can handle files and exceptions
- [ ] Completed all practice questions
- [ ] Submitted all assignments on time
- [ ] Passed all quizzes (70%+ score)
- [ ] Completed final project successfully

### **Skills Acquired**
- [ ] Python environment setup
- [ ] Basic programming logic
- [ ] Problem-solving approach
- [ ] Code debugging skills
- [ ] Documentation writing
- [ ] Version control basics (Git)

**Next Week Preview**: Advanced Python concepts, object-oriented programming, and data science libraries introduction.