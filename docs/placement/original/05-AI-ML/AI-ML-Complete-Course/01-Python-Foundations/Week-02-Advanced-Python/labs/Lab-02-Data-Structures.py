"""
Lab 2: Advanced Data Structures
Week 2 - Python Foundations
Estimated Time: 2 hours
"""

print("=== Lab 2: Advanced Data Structures ===\n")

# =============================================================================
# Exercise 1: List Operations
# =============================================================================

print("Exercise 1: List Operations")

# TODO: Create a shopping list
shopping_list = ["milk", "bread", "eggs", "butter"]

# Add items
shopping_list.append("cheese")
shopping_list.insert(1, "yogurt")

# Remove items
shopping_list.remove("bread")
last_item = shopping_list.pop()

print(f"Shopping list: {shopping_list}")
print(f"Last removed item: {last_item}")

# List comprehension
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_numbers = [x for x in numbers if x % 2 == 0]
squares = [x**2 for x in numbers]

print(f"Even numbers: {even_numbers}")
print(f"Squares: {squares}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 2: Dictionary Operations
# =============================================================================

print("Exercise 2: Dictionary Operations")

# TODO: Create a student database
students = {
    "alice": {"age": 20, "major": "CS", "gpa": 3.8},
    "bob": {"age": 22, "major": "Math", "gpa": 3.6},
    "charlie": {"age": 21, "major": "Physics", "gpa": 3.9}
}

# Add new student
students["diana"] = {"age": 19, "major": "Biology", "gpa": 3.7}

# Update existing student
students["alice"]["gpa"] = 3.9

# Display all students
print("Student Database:")
for name, info in students.items():
    print(f"{name.title()}: Age {info['age']}, Major: {info['major']}, GPA: {info['gpa']}")

# Find students with GPA > 3.7
high_gpa_students = [name for name, info in students.items() if info['gpa'] > 3.7]
print(f"\nHigh GPA students: {high_gpa_students}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 3: Tuple Operations
# =============================================================================

print("Exercise 3: Tuple Operations")

# TODO: Work with coordinates
points = [(0, 0), (1, 2), (3, 4), (5, 6)]

# Calculate distances from origin
import math

distances = []
for point in points:
    x, y = point  # Tuple unpacking
    distance = math.sqrt(x**2 + y**2)
    distances.append(distance)

print("Points and distances from origin:")
for point, distance in zip(points, distances):
    print(f"Point {point}: Distance = {distance:.2f}")

# Multiple assignment with tuples
def get_name_age():
    return "Alice", 25

name, age = get_name_age()
print(f"\nName: {name}, Age: {age}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 4: Set Operations
# =============================================================================

print("Exercise 4: Set Operations")

# TODO: Work with sets
python_students = {"alice", "bob", "charlie", "diana", "eve"}
java_students = {"bob", "charlie", "frank", "grace", "henry"}

# Set operations
both_languages = python_students & java_students
only_python = python_students - java_students
only_java = java_students - python_students
all_students = python_students | java_students

print(f"Python students: {python_students}")
print(f"Java students: {java_students}")
print(f"Both languages: {both_languages}")
print(f"Only Python: {only_python}")
print(f"Only Java: {only_java}")
print(f"All students: {all_students}")

# Remove duplicates from list
numbers_with_duplicates = [1, 2, 2, 3, 3, 3, 4, 4, 5]
unique_numbers = list(set(numbers_with_duplicates))
print(f"\nOriginal: {numbers_with_duplicates}")
print(f"Unique: {unique_numbers}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 5: Mixed Data Structures
# =============================================================================

print("Exercise 5: Mixed Data Structures")

# TODO: Create a library system
library = {
    "fiction": [
        {"title": "1984", "author": "George Orwell", "available": True},
        {"title": "To Kill a Mockingbird", "author": "Harper Lee", "available": False}
    ],
    "non-fiction": [
        {"title": "Sapiens", "author": "Yuval Noah Harari", "available": True},
        {"title": "Educated", "author": "Tara Westover", "available": True}
    ]
}

# Find available books
available_books = []
for category, books in library.items():
    for book in books:
        if book["available"]:
            available_books.append((book["title"], book["author"], category))

print("Available books:")
for title, author, category in available_books:
    print(f"- {title} by {author} ({category})")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 6: Word Frequency Counter
# =============================================================================

print("Exercise 6: Word Frequency Counter")

# TODO: Analyze text
text = "the quick brown fox jumps over the lazy dog the dog was lazy"
words = text.lower().split()

# Count word frequency
word_count = {}
for word in words:
    word_count[word] = word_count.get(word, 0) + 1

# Sort by frequency
sorted_words = sorted(word_count.items(), key=lambda x: x[1], reverse=True)

print("Word frequency:")
for word, count in sorted_words:
    print(f"{word}: {count}")

# Find unique words
unique_words = set(words)
print(f"\nTotal words: {len(words)}")
print(f"Unique words: {len(unique_words)}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Challenge Exercise: Grade Book System
# =============================================================================

print("Challenge: Grade Book System")

class GradeBook:
    def __init__(self):
        self.students = {}
    
    def add_student(self, name):
        if name not in self.students:
            self.students[name] = []
            print(f"Added student: {name}")
        else:
            print(f"Student {name} already exists")
    
    def add_grade(self, name, grade):
        if name in self.students:
            self.students[name].append(grade)
            print(f"Added grade {grade} for {name}")
        else:
            print(f"Student {name} not found")
    
    def get_average(self, name):
        if name in self.students and self.students[name]:
            return sum(self.students[name]) / len(self.students[name])
        return 0
    
    def get_class_average(self):
        all_grades = []
        for grades in self.students.values():
            all_grades.extend(grades)
        return sum(all_grades) / len(all_grades) if all_grades else 0
    
    def display_report(self):
        print("\n=== Grade Report ===")
        for name, grades in self.students.items():
            avg = self.get_average(name)
            print(f"{name}: {grades} (Average: {avg:.2f})")
        print(f"Class Average: {self.get_class_average():.2f}")

# Test the grade book
gradebook = GradeBook()
gradebook.add_student("Alice")
gradebook.add_student("Bob")
gradebook.add_grade("Alice", 85)
gradebook.add_grade("Alice", 92)
gradebook.add_grade("Bob", 78)
gradebook.add_grade("Bob", 88)
gradebook.display_report()

print("\n" + "="*50 + "\n")
print("=== Lab 2 Complete! ===")
print("You've practiced:")
print("- List operations and comprehensions")
print("- Dictionary manipulation")
print("- Tuple unpacking")
print("- Set operations")
print("- Mixed data structures")
print("- Real-world applications")