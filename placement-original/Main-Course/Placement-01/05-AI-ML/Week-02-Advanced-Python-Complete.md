# 📖 Week 2: Advanced Python for Data Science - Complete Study Material

## 🎯 Learning Objectives
- Master advanced Python concepts for data science
- Understand object-oriented programming principles
- Learn advanced data structures and algorithms
- Build efficient data processing pipelines

---

## 📚 **LECTURE NOTES**

### **Day 1: Advanced Data Structures**

#### **1.1 List Comprehensions**
```python
# Basic list comprehension
squares = [x**2 for x in range(10)]
print(squares)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# With condition
evens = [x for x in range(20) if x % 2 == 0]
print(evens)    # [0, 2, 4, 6, 8, 10, 12, 14, 16, 18]

# Nested list comprehension
matrix = [[i*j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)   # [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# String processing
words = ["hello", "world", "python", "data"]
lengths = [len(word) for word in words]
uppercase = [word.upper() for word in words if len(word) > 4]
```

#### **1.2 Dictionary Comprehensions**
```python
# Basic dictionary comprehension
squares_dict = {x: x**2 for x in range(5)}
print(squares_dict)  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}

# From two lists
keys = ['name', 'age', 'city']
values = ['Alice', 25, 'NYC']
person = {k: v for k, v in zip(keys, values)}

# Conditional dictionary comprehension
grades = {'Alice': 85, 'Bob': 92, 'Charlie': 78, 'Diana': 96}
high_performers = {name: grade for name, grade in grades.items() if grade > 80}

# Nested dictionary
students = ['Alice', 'Bob', 'Charlie']
subjects = ['Math', 'Science', 'English']
grade_book = {student: {subject: 0 for subject in subjects} for student in students}
```

#### **1.3 Generator Expressions**
```python
# Generator expression (memory efficient)
squares_gen = (x**2 for x in range(1000000))  # Doesn't create list in memory

# Generator function
def fibonacci_generator(n):
    a, b = 0, 1
    count = 0
    while count < n:
        yield a
        a, b = b, a + b
        count += 1

# Using generator
fib_gen = fibonacci_generator(10)
for num in fib_gen:
    print(num, end=' ')  # 0 1 1 2 3 5 8 13 21 34

# Generator for file processing (memory efficient)
def read_large_file(file_path):
    with open(file_path, 'r') as file:
        for line in file:
            yield line.strip()
```

#### **1.4 Collections Module**
```python
from collections import Counter, defaultdict, deque, namedtuple, OrderedDict

# Counter - count occurrences
text = "hello world"
char_count = Counter(text)
print(char_count)  # Counter({'l': 3, 'o': 2, 'h': 1, 'e': 1, ' ': 1, 'w': 1, 'r': 1, 'd': 1})

# defaultdict - default values for missing keys
dd = defaultdict(list)
dd['fruits'].append('apple')
dd['fruits'].append('banana')
print(dd)  # defaultdict(<class 'list'>, {'fruits': ['apple', 'banana']})

# deque - double-ended queue
dq = deque([1, 2, 3])
dq.appendleft(0)    # Add to left
dq.append(4)        # Add to right
print(dq)           # deque([0, 1, 2, 3, 4])

# namedtuple - tuple with named fields
Point = namedtuple('Point', ['x', 'y'])
p = Point(10, 20)
print(f"x: {p.x}, y: {p.y}")
```

### **Day 2: Object-Oriented Programming**

#### **2.1 Classes and Objects**
```python
class Student:
    # Class variable
    school_name = "Data Science Academy"
    
    def __init__(self, name, age, student_id):
        # Instance variables
        self.name = name
        self.age = age
        self.student_id = student_id
        self.grades = []
    
    def add_grade(self, subject, grade):
        self.grades.append({'subject': subject, 'grade': grade})
    
    def get_average_grade(self):
        if not self.grades:
            return 0
        total = sum(grade['grade'] for grade in self.grades)
        return total / len(self.grades)
    
    def __str__(self):
        return f"Student: {self.name} (ID: {self.student_id})"
    
    def __repr__(self):
        return f"Student('{self.name}', {self.age}, '{self.student_id}')"

# Creating objects
student1 = Student("Alice", 20, "S001")
student1.add_grade("Math", 85)
student1.add_grade("Science", 92)
print(student1.get_average_grade())  # 88.5
```

#### **2.2 Inheritance**
```python
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def introduce(self):
        return f"Hi, I'm {self.name} and I'm {self.age} years old."

class Student(Person):
    def __init__(self, name, age, student_id, major):
        super().__init__(name, age)  # Call parent constructor
        self.student_id = student_id
        self.major = major
        self.courses = []
    
    def enroll_course(self, course):
        self.courses.append(course)
    
    def introduce(self):  # Method overriding
        return f"{super().introduce()} I'm studying {self.major}."

class GraduateStudent(Student):
    def __init__(self, name, age, student_id, major, thesis_topic):
        super().__init__(name, age, student_id, major)
        self.thesis_topic = thesis_topic
    
    def introduce(self):
        return f"{super().introduce()} My thesis is on {self.thesis_topic}."

# Usage
grad_student = GraduateStudent("Bob", 24, "G001", "Computer Science", "Machine Learning")
print(grad_student.introduce())
```

#### **2.3 Special Methods (Magic Methods)**
```python
class Vector:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)
    
    def __sub__(self, other):
        return Vector(self.x - other.x, self.y - other.y)
    
    def __mul__(self, scalar):
        return Vector(self.x * scalar, self.y * scalar)
    
    def __str__(self):
        return f"Vector({self.x}, {self.y})"
    
    def __len__(self):
        return int((self.x**2 + self.y**2)**0.5)
    
    def __eq__(self, other):
        return self.x == other.x and self.y == other.y

# Usage
v1 = Vector(2, 3)
v2 = Vector(1, 4)
v3 = v1 + v2  # Uses __add__
print(v3)     # Vector(3, 7)
```

#### **2.4 Properties and Decorators**
```python
class Temperature:
    def __init__(self, celsius=0):
        self._celsius = celsius
    
    @property
    def celsius(self):
        return self._celsius
    
    @celsius.setter
    def celsius(self, value):
        if value < -273.15:
            raise ValueError("Temperature cannot be below absolute zero")
        self._celsius = value
    
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32
    
    @fahrenheit.setter
    def fahrenheit(self, value):
        self.celsius = (value - 32) * 5/9

# Usage
temp = Temperature(25)
print(temp.fahrenheit)  # 77.0
temp.fahrenheit = 86
print(temp.celsius)     # 30.0
```

### **Day 3: Advanced Functions and Decorators**

#### **3.1 Function Arguments**
```python
# *args and **kwargs
def flexible_function(*args, **kwargs):
    print(f"Positional arguments: {args}")
    print(f"Keyword arguments: {kwargs}")

flexible_function(1, 2, 3, name="Alice", age=25)

# Keyword-only arguments
def analyze_data(data, *, method="mean", ignore_na=True):
    if ignore_na:
        data = [x for x in data if x is not None]
    
    if method == "mean":
        return sum(data) / len(data)
    elif method == "median":
        sorted_data = sorted(data)
        n = len(sorted_data)
        return sorted_data[n//2] if n % 2 == 1 else (sorted_data[n//2-1] + sorted_data[n//2]) / 2

# Function annotations
def calculate_bmi(weight: float, height: float) -> float:
    """Calculate BMI given weight in kg and height in meters."""
    return weight / (height ** 2)
```

#### **3.2 Decorators**
```python
import time
import functools

# Simple decorator
def timer(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"{func.__name__} took {end_time - start_time:.4f} seconds")
        return result
    return wrapper

# Decorator with parameters
def retry(max_attempts=3):
    def decorator(func):
        @functools.wraps(func)
        def wrapper(*args, **kwargs):
            for attempt in range(max_attempts):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    if attempt == max_attempts - 1:
                        raise e
                    print(f"Attempt {attempt + 1} failed: {e}")
            return None
        return wrapper
    return decorator

# Class decorator
def singleton(cls):
    instances = {}
    def get_instance(*args, **kwargs):
        if cls not in instances:
            instances[cls] = cls(*args, **kwargs)
        return instances[cls]
    return get_instance

# Usage
@timer
@retry(max_attempts=3)
def risky_operation():
    import random
    if random.random() < 0.7:
        raise Exception("Random failure")
    return "Success!"

@singleton
class DatabaseConnection:
    def __init__(self):
        print("Creating database connection")
```

#### **3.3 Context Managers**
```python
# Custom context manager using class
class FileManager:
    def __init__(self, filename, mode):
        self.filename = filename
        self.mode = mode
        self.file = None
    
    def __enter__(self):
        print(f"Opening file {self.filename}")
        self.file = open(self.filename, self.mode)
        return self.file
    
    def __exit__(self, exc_type, exc_value, traceback):
        print(f"Closing file {self.filename}")
        if self.file:
            self.file.close()

# Context manager using contextlib
from contextlib import contextmanager

@contextmanager
def database_transaction():
    print("Starting transaction")
    try:
        yield "database_connection"
        print("Committing transaction")
    except Exception as e:
        print(f"Rolling back transaction: {e}")
        raise
    finally:
        print("Cleaning up resources")

# Usage
with FileManager("data.txt", "w") as f:
    f.write("Hello, World!")

with database_transaction() as db:
    # Simulate database operations
    pass
```

### **Day 4: File Handling and Data Processing**

#### **4.1 Advanced File Operations**
```python
import json
import csv
import pickle
from pathlib import Path

# Working with JSON
data = {
    "students": [
        {"name": "Alice", "grades": [85, 90, 78]},
        {"name": "Bob", "grades": [92, 88, 95]}
    ]
}

# Write JSON
with open("students.json", "w") as f:
    json.dump(data, f, indent=2)

# Read JSON
with open("students.json", "r") as f:
    loaded_data = json.load(f)

# Working with CSV using DictReader/DictWriter
students_data = [
    {"name": "Alice", "age": 20, "grade": 85},
    {"name": "Bob", "age": 22, "grade": 92},
    {"name": "Charlie", "age": 21, "grade": 78}
]

# Write CSV
with open("students.csv", "w", newline="") as f:
    fieldnames = ["name", "age", "grade"]
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(students_data)

# Read CSV
with open("students.csv", "r") as f:
    reader = csv.DictReader(f)
    for row in reader:
        print(f"{row['name']}: {row['grade']}")

# Binary data with pickle
data_to_pickle = {"model": "trained_model", "accuracy": 0.95}
with open("model.pkl", "wb") as f:
    pickle.dump(data_to_pickle, f)

with open("model.pkl", "rb") as f:
    loaded_model = pickle.load(f)
```

#### **4.2 Path Operations**
```python
from pathlib import Path
import os
import shutil

# Path operations
current_dir = Path.cwd()
data_dir = current_dir / "data"
data_dir.mkdir(exist_ok=True)

# File operations
file_path = data_dir / "example.txt"
file_path.write_text("Hello, World!")
content = file_path.read_text()

# Directory operations
for file in data_dir.iterdir():
    if file.is_file():
        print(f"File: {file.name}")
    elif file.is_dir():
        print(f"Directory: {file.name}")

# Find files with specific pattern
python_files = list(current_dir.glob("*.py"))
all_python_files = list(current_dir.rglob("*.py"))  # Recursive

# File information
if file_path.exists():
    stat = file_path.stat()
    print(f"Size: {stat.st_size} bytes")
    print(f"Modified: {stat.st_mtime}")
```

### **Day 5: Regular Expressions and Text Processing**

#### **5.1 Regular Expressions**
```python
import re

# Basic patterns
text = "Contact us at support@company.com or sales@company.com"

# Find all email addresses
email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'
emails = re.findall(email_pattern, text)
print(emails)  # ['support@company.com', 'sales@company.com']

# Phone number validation
def validate_phone(phone):
    pattern = r'^\+?1?[-.\s]?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})$'
    return bool(re.match(pattern, phone))

# Text cleaning
def clean_text(text):
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text)
    # Remove special characters except letters, numbers, and basic punctuation
    text = re.sub(r'[^a-zA-Z0-9\s.,!?-]', '', text)
    return text.strip()

# Extract information
log_entry = "2024-01-15 14:30:25 ERROR: Database connection failed"
log_pattern = r'(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2}) (\w+): (.+)'
match = re.match(log_pattern, log_entry)
if match:
    date, time, level, message = match.groups()
    print(f"Date: {date}, Time: {time}, Level: {level}, Message: {message}")
```

#### **5.2 Text Processing Utilities**
```python
import string
from collections import Counter

class TextAnalyzer:
    def __init__(self, text):
        self.text = text
        self.words = self._extract_words()
    
    def _extract_words(self):
        # Remove punctuation and convert to lowercase
        translator = str.maketrans('', '', string.punctuation)
        clean_text = self.text.translate(translator).lower()
        return clean_text.split()
    
    def word_count(self):
        return len(self.words)
    
    def unique_words(self):
        return len(set(self.words))
    
    def most_common_words(self, n=10):
        return Counter(self.words).most_common(n)
    
    def average_word_length(self):
        if not self.words:
            return 0
        return sum(len(word) for word in self.words) / len(self.words)
    
    def reading_level(self):
        # Simple reading level calculation
        sentences = self.text.count('.') + self.text.count('!') + self.text.count('?')
        if sentences == 0:
            return 0
        
        avg_words_per_sentence = len(self.words) / sentences
        avg_word_length = self.average_word_length()
        
        # Simplified reading level formula
        return (avg_words_per_sentence * 0.39) + (avg_word_length * 11.8) - 15.59

# Usage
text = """
Python is a high-level programming language. It is widely used for data science,
web development, and artificial intelligence. Python's syntax is clean and readable,
making it an excellent choice for beginners and experts alike.
"""

analyzer = TextAnalyzer(text)
print(f"Word count: {analyzer.word_count()}")
print(f"Unique words: {analyzer.unique_words()}")
print(f"Most common words: {analyzer.most_common_words(5)}")
print(f"Reading level: {analyzer.reading_level():.2f}")
```

---

## 💻 **PRACTICE QUESTIONS**

### **Basic Level (1-15)**

1. **List Comprehensions**
```python
# Create a list of squares of even numbers from 1 to 20
# Create a list of words that start with vowels from a given sentence
# Generate a multiplication table using nested list comprehension
```

2. **Dictionary Comprehensions**
```python
# Create a dictionary mapping numbers to their cubes for 1-10
# From a list of words, create a dictionary with word lengths
# Invert a dictionary (swap keys and values)
```

3. **Generator Functions**
```python
# Create a generator that yields prime numbers
# Write a generator for reading large files line by line
# Generate Fibonacci sequence using generators
```

4. **Class Design**
```python
# Design a BankAccount class with deposit, withdraw, and balance methods
# Create a Book class with title, author, and availability status
# Implement a simple Calculator class with basic operations
```

5. **Inheritance Practice**
```python
# Create Animal -> Dog -> Puppy inheritance hierarchy
# Design Shape -> Rectangle -> Square class structure
# Implement Vehicle -> Car -> ElectricCar inheritance
```

### **Intermediate Level (16-25)**

16. **Decorator Implementation**
```python
# Create a decorator to log function calls
# Write a decorator to cache function results
# Implement a decorator to validate function arguments
```

17. **Context Manager**
```python
# Create a context manager for database connections
# Implement a timer context manager
# Write a context manager for temporary file operations
```

18. **Advanced File Processing**
```python
# Parse and analyze CSV data with error handling
# Process JSON configuration files
# Implement a log file analyzer
```

19. **Regular Expressions**
```python
# Extract all URLs from a text
# Validate and format phone numbers
# Parse structured data from text files
```

20. **Data Processing Pipeline**
```python
# Build a data cleaning pipeline for messy datasets
# Implement a text processing system
# Create a file organization system
```

---

## 📝 **ASSIGNMENTS**

### **Assignment 1: Advanced Data Structures (Due: Day 3)**

**Problem 1: Data Analysis with Comprehensions**
```python
"""
Given a dataset of student records, use comprehensions to:
1. Filter students with GPA > 3.5
2. Create a mapping of student names to their highest grade
3. Generate a nested structure of students by major and year
4. Calculate statistics using generator expressions
"""

students = [
    {"name": "Alice", "major": "CS", "year": 2, "grades": [85, 90, 78, 92]},
    {"name": "Bob", "major": "Math", "year": 3, "grades": [88, 85, 90, 87]},
    # Add more student records...
]

def analyze_students(students):
    # Your implementation here
    pass
```

**Problem 2: Custom Collections**
```python
"""
Implement a custom data structure that combines features of:
- Dictionary (key-value storage)
- List (ordered access)
- Set (unique values)

Requirements:
- Support both key-based and index-based access
- Maintain insertion order
- Prevent duplicate values
- Implement iterator protocol
"""

class OrderedUniqueDict:
    def __init__(self):
        # Your implementation here
        pass
```

### **Assignment 2: Object-Oriented Design (Due: Day 5)**

**Problem: Library Management System**
```python
"""
Design a comprehensive library management system with:

Classes:
- Book (title, author, ISBN, copies)
- Member (name, ID, borrowed books)
- Library (books, members, transactions)
- Transaction (book, member, date, type)

Features:
- Add/remove books and members
- Borrow/return books with due dates
- Search functionality
- Fine calculation for overdue books
- Generate reports
"""

from datetime import datetime, timedelta
from abc import ABC, abstractmethod

class LibraryItem(ABC):
    @abstractmethod
    def get_info(self):
        pass

class Book(LibraryItem):
    def __init__(self, title, author, isbn, copies=1):
        # Your implementation here
        pass

class Library:
    def __init__(self):
        # Your implementation here
        pass
    
    def add_book(self, book):
        # Your implementation here
        pass
    
    def borrow_book(self, member_id, isbn):
        # Your implementation here
        pass
```

### **Assignment 3: Data Processing Project (Due: End of Week)**

**Problem: Log File Analyzer**
```python
"""
Build a comprehensive log file analyzer that:

1. Parses different log formats (Apache, Nginx, custom)
2. Extracts key information (IP, timestamp, status, etc.)
3. Generates statistics and reports
4. Identifies patterns and anomalies
5. Exports results in multiple formats

Features:
- Support for multiple log formats
- Real-time processing capability
- Statistical analysis
- Visualization data preparation
- Configuration file support
"""

class LogAnalyzer:
    def __init__(self, config_file=None):
        # Your implementation here
        pass
    
    def parse_log_line(self, line, format_type="apache"):
        # Your implementation here
        pass
    
    def analyze_file(self, file_path):
        # Your implementation here
        pass
    
    def generate_report(self, output_format="json"):
        # Your implementation here
        pass
```

---

## 🏆 **ASSESSMENTS**

### **Quiz 1: Advanced Data Structures (Day 2)**

**Multiple Choice Questions (30 points)**

1. What is the main advantage of generators over lists?
   - a) Faster execution
   - b) Memory efficiency
   - c) Better syntax
   - d) Type safety

2. Which method is called when using `len()` on a custom object?
   - a) `__length__()`
   - b) `__size__()`
   - c) `__len__()`
   - d) `__count__()`

3. What does `*args` allow in function definitions?
   - a) Variable number of keyword arguments
   - b) Variable number of positional arguments
   - c) Default argument values
   - d) Type annotations

**Programming Questions (70 points)**

4. **Generator Implementation (25 points)**
```python
# Implement a generator that yields all permutations of a string
def string_permutations(s):
    # Your code here
    pass

# Test: list(string_permutations("abc")) should return all permutations
```

5. **Custom Iterator (25 points)**
```python
# Create a custom iterator class for Fibonacci sequence
class FibonacciIterator:
    def __init__(self, max_count):
        # Your code here
        pass
    
    def __iter__(self):
        # Your code here
        pass
    
    def __next__(self):
        # Your code here
        pass
```

6. **Advanced Comprehension (20 points)**
```python
# Given a nested list structure, flatten it using comprehension
nested_list = [[1, 2], [3, [4, 5]], [6, 7, [8, [9, 10]]]]
# Write a function to flatten this to [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### **Quiz 2: Object-Oriented Programming (Day 4)**

**Practical Coding Test (100 points)**

1. **Class Design and Inheritance (40 points)**
```python
"""
Design a shape hierarchy with:
- Base Shape class with area() and perimeter() methods
- Rectangle, Circle, Triangle subclasses
- Implement proper inheritance and method overriding
- Add class methods and static methods where appropriate
"""

from abc import ABC, abstractmethod
import math

class Shape(ABC):
    # Your implementation here
    pass
```

2. **Decorator and Property Usage (30 points)**
```python
"""
Create a Temperature class with:
- Private temperature storage in Celsius
- Properties for Celsius, Fahrenheit, and Kelvin
- Validation to prevent temperatures below absolute zero
- Decorator to log temperature changes
"""

class Temperature:
    # Your implementation here
    pass
```

3. **Context Manager Implementation (30 points)**
```python
"""
Implement a context manager for file operations that:
- Automatically handles file opening/closing
- Logs all operations
- Handles exceptions gracefully
- Supports both text and binary modes
"""

class FileHandler:
    # Your implementation here
    pass
```

### **Mid-Week Practical Assessment (Day 3)**

**Time Limit: 3 hours**

**Problem 1: Data Processing System (50 points)**
```python
"""
Build a data processing system that:
1. Reads data from multiple sources (CSV, JSON, XML)
2. Applies transformations using configurable rules
3. Validates data integrity
4. Exports processed data in various formats
5. Generates processing reports

Requirements:
- Use appropriate design patterns
- Implement error handling
- Support plugin architecture for new data sources
- Include comprehensive logging
"""
```

**Problem 2: Text Analysis Engine (50 points)**
```python
"""
Create a text analysis engine with:
1. Multiple analysis algorithms (sentiment, readability, etc.)
2. Configurable preprocessing pipeline
3. Batch processing capability
4. Results caching system
5. API for external integration

Features:
- Extensible architecture
- Performance optimization
- Memory-efficient processing
- Comprehensive test coverage
"""
```

### **End-of-Week Project Assessment**

**Final Project: Data Processing Pipeline (100 points)**

**Requirements:**

1. **Architecture Design (25 points)**
   - Modular, extensible design
   - Proper separation of concerns
   - Design patterns implementation
   - Documentation and UML diagrams

2. **Core Functionality (40 points)**
   - Data ingestion from multiple sources
   - Configurable processing pipeline
   - Error handling and recovery
   - Performance optimization

3. **Advanced Features (25 points)**
   - Plugin system for extensibility
   - Caching and memoization
   - Parallel processing support
   - Configuration management

4. **Code Quality (10 points)**
   - Clean, readable code
   - Proper documentation
   - Unit tests
   - Version control usage

**Evaluation Criteria:**
- **Excellent (90-100%)**: All requirements met, exceptional design, innovative features
- **Good (80-89%)**: Most requirements met, solid implementation, good practices
- **Satisfactory (70-79%)**: Basic requirements met, functional code, minor issues
- **Needs Improvement (<70%)**: Missing features, poor design, significant issues

---

## 📚 **ADDITIONAL RESOURCES**

### **Advanced Python Topics**
- Metaclasses and descriptors
- Async/await programming
- Memory management and optimization
- Python internals and bytecode

### **Design Patterns in Python**
- Singleton, Factory, Observer patterns
- Strategy and Command patterns
- Decorator and Adapter patterns
- MVC and MVP architectures

### **Performance Optimization**
- Profiling with cProfile
- Memory optimization techniques
- Cython for speed improvements
- Concurrent and parallel programming

### **Testing and Quality**
- Unit testing with unittest/pytest
- Test-driven development (TDD)
- Code coverage analysis
- Static analysis tools (pylint, mypy)

---

## ✅ **WEEK 2 COMPLETION CHECKLIST**

### **Knowledge Checkpoints**
- [ ] Master list/dict comprehensions and generators
- [ ] Understand OOP principles and implementation
- [ ] Can create and use decorators effectively
- [ ] Comfortable with advanced file operations
- [ ] Can use regular expressions for text processing
- [ ] Understand context managers and their uses
- [ ] Completed all practice questions (80%+ accuracy)
- [ ] Submitted all assignments on time
- [ ] Passed all quizzes (75%+ score)
- [ ] Completed final project successfully

### **Skills Acquired**
- [ ] Advanced Python programming techniques
- [ ] Object-oriented design principles
- [ ] Code organization and modularity
- [ ] Performance optimization awareness
- [ ] Testing and debugging skills
- [ ] Documentation and code quality practices

**Next Week Preview**: NumPy for numerical computing, array operations, and mathematical foundations for machine learning.