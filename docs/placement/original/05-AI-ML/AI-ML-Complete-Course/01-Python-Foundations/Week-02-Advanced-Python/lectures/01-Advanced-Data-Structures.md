# Week 2 - Lecture 1: Advanced Data Structures

## Learning Objectives
- Master Python's built-in data structures
- Understand when to use each data structure
- Learn data structure methods and operations

## 1. Lists - Mutable Sequences

### Creating Lists
```python
numbers = [1, 2, 3, 4, 5]
mixed_list = [1, "hello", 3.14, True]
nested_list = [[1, 2], [3, 4]]
```

### List Methods
```python
fruits = ["apple", "banana"]
fruits.append("orange")        # Add to end
fruits.insert(1, "grape")     # Insert at index
fruits.remove("banana")        # Remove by value
fruits.sort()                 # Sort in place
```

## 2. Dictionaries - Key-Value Pairs

### Creating Dictionaries
```python
student = {
    "name": "Alice",
    "age": 20,
    "major": "Computer Science"
}
```

### Dictionary Operations
```python
student["age"] = 21              # Update value
student["gpa"] = 3.8            # Add new key-value pair
print(student.get("grade", "N/A"))  # Safe access
```

## 3. Tuples - Immutable Sequences

### Creating Tuples
```python
coordinates = (10, 20)
person = ("Alice", 25, "Engineer")

# Tuple unpacking
x, y = coordinates
name, age, job = person
```

## 4. Sets - Unique Elements

### Set Operations
```python
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

union = set1 | set2           # {1, 2, 3, 4, 5, 6}
intersection = set1 & set2    # {3, 4}
difference = set1 - set2      # {1, 2}
```

## Practice Examples

### Student Grade System
```python
grades = {
    "Alice": [85, 92, 78, 96],
    "Bob": [79, 85, 88, 82]
}

for student, scores in grades.items():
    average = sum(scores) / len(scores)
    print(f"{student}: {average:.2f}")
```