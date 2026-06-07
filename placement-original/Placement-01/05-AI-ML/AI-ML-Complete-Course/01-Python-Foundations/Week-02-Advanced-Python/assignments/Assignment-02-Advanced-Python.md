# Assignment 2: Advanced Python

**Due Date:** End of Week 2  
**Points:** 100  
**Estimated Time:** 4-5 hours

## Problem 1: Contact Manager (25 points)

Create a contact management system using dictionaries:

```python
contacts = {}

def add_contact(name, phone, email):
    contacts[name] = {"phone": phone, "email": email}

def search_contact(name):
    return contacts.get(name, "Contact not found")

def list_all_contacts():
    for name, info in contacts.items():
        print(f"{name}: {info['phone']}, {info['email']}")
```

**Requirements:**
- Add, search, update, and delete contacts
- Handle duplicate names
- Display formatted contact list

## Problem 2: Student Grade Analyzer (30 points)

Create a program that analyzes student grades:

```python
students = {
    "Alice": [85, 92, 78, 96, 88],
    "Bob": [79, 85, 88, 82, 90],
    "Charlie": [92, 89, 94, 87, 91]
}
```

**Requirements:**
- Calculate average grade for each student
- Find highest and lowest grades
- Determine letter grades (A: 90+, B: 80-89, C: 70-79, D: 60-69, F: <60)
- Generate class statistics

## Problem 3: Text Analysis Tool (25 points)

Create a text analyzer that:
- Counts word frequency
- Finds unique words
- Identifies most common words
- Calculates text statistics

**Sample Input:**
```
"The quick brown fox jumps over the lazy dog. The dog was very lazy."
```

**Expected Output:**
```
Total words: 12
Unique words: 10
Most common word: "the" (3 times)
```

## Problem 4: Set Operations (20 points)

Given two lists of student IDs:
```python
math_students = [101, 102, 103, 104, 105, 106]
science_students = [104, 105, 106, 107, 108, 109]
```

Find:
- Students taking both subjects
- Students taking only math
- Students taking only science
- All students taking at least one subject

## Submission Guidelines

Submit as `lastname_firstname_assignment2.py` with clear documentation and test cases.