# Week 1 Python Basics - Assignment 1

## Due Date: End of Week 1
## Total Points: 100

---

## Problem 1: Basic Calculator (15 points)

Create a calculator program that:
- Takes two numbers as input
- Performs all arithmetic operations (+, -, *, /, //, %, **)
- Displays results in a formatted manner

**Sample Output:**
```
Enter first number: 10
Enter second number: 3
Addition: 10 + 3 = 13
Subtraction: 10 - 3 = 7
Multiplication: 10 * 3 = 30
Division: 10 / 3 = 3.33
Floor Division: 10 // 3 = 3
Modulus: 10 % 3 = 1
Power: 10 ** 3 = 1000
```

---

## Problem 2: Grade Calculator (20 points)

Write a program that:
- Inputs marks for 5 subjects
- Calculates total, percentage, and grade
- Grade criteria:
  - 90+ : A
  - 80-89: B
  - 70-79: C
  - 60-69: D
  - Below 60: F

**Expected Output:**
```
Enter marks for Subject 1: 85
Enter marks for Subject 2: 90
...
Total: 425
Percentage: 85.0%
Grade: B
```

---

## Problem 3: List Manipulator (25 points)

Create a program with the following functions:

```python
def add_element(lst, element):
    """Add element to list"""
    pass

def remove_element(lst, element):
    """Remove first occurrence of element"""
    pass

def search_element(lst, element):
    """Return index of element or -1"""
    pass

def reverse_list(lst):
    """Reverse the list"""
    pass

def get_max_min(lst):
    """Return tuple (max, min)"""
    pass
```

Test your functions with:
```python
numbers = [45, 12, 78, 23, 56, 89, 34]
```

---

## Problem 4: Student Database (25 points)

Build a student management system using dictionaries:

```python
students = {}

def add_student(roll_no, name, age, marks):
    """Add new student"""
    pass

def display_student(roll_no):
    """Display student details"""
    pass

def update_marks(roll_no, new_marks):
    """Update student marks"""
    pass

def delete_student(roll_no):
    """Remove student from database"""
    pass

def display_all():
    """Display all students"""
    pass

def get_top_student():
    """Return student with highest marks"""
    pass
```

**Test Cases:**
```python
add_student(101, "Alice", 20, 85)
add_student(102, "Bob", 21, 92)
add_student(103, "Charlie", 20, 78)
display_all()
get_top_student()
```

---

## Problem 5: Pattern Printing (15 points)

Write functions to print the following patterns:

### Pattern 1: Right Triangle
```
*
**
***
****
*****
```

### Pattern 2: Number Pyramid
```
    1
   121
  12321
 1234321
123454321
```

### Pattern 3: Diamond
```
    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *
```

Function signatures:
```python
def print_triangle(n):
    pass

def print_number_pyramid(n):
    pass

def print_diamond(n):
    pass
```

---

## Bonus Challenge (10 extra points)

### Prime Number Checker & Generator

Create two functions:

```python
def is_prime(n):
    """
    Check if number is prime
    Return: True/False
    """
    pass

def generate_primes(start, end):
    """
    Generate all prime numbers in range [start, end]
    Return: list of primes
    """
    pass

# Test
print(is_prime(17))  # True
print(is_prime(20))  # False
print(generate_primes(1, 50))  # [2, 3, 5, 7, 11, ...]
```

---

## Submission Guidelines

1. Create a Python file named `week1_assignment_YourName.py`
2. Include all solutions in a single file
3. Add comments explaining your logic
4. Test each function thoroughly
5. Submit via [submission portal/email]

---

## Grading Rubric

| Criteria | Points |
|----------|--------|
| Code runs without errors | 20% |
| Correct logic & output | 40% |
| Code readability & comments | 20% |
| Edge case handling | 10% |
| Efficiency | 10% |

---

## Tips

- Test with multiple inputs
- Handle edge cases (empty lists, zero division, negative numbers)
- Use meaningful variable names
- Add docstrings to functions
- Follow PEP 8 style guidelines

**Good luck! 🚀**
