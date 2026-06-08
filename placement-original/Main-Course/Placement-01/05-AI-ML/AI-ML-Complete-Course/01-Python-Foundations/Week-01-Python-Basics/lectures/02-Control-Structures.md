# Week 1 - Lecture 2: Control Structures

## Learning Objectives
- Master if/else statements
- Understand comparison and logical operators
- Learn loop structures (for and while)
- Practice with nested structures

## 1. Comparison Operators
```python
x = 10
y = 5

# Comparison operators
print(x > y)   # True
print(x < y)   # False
print(x == y)  # False
print(x != y)  # True
print(x >= y)  # True
print(x <= y)  # False
```

## 2. Logical Operators
```python
a = True
b = False

# Logical operators
print(a and b)  # False
print(a or b)   # True
print(not a)    # False
```

## 3. If/Else Statements

### Basic if statement
```python
age = 18

if age >= 18:
    print("You are an adult")
```

### If-else statement
```python
temperature = 25

if temperature > 30:
    print("It's hot!")
else:
    print("It's not too hot")
```

### If-elif-else statement
```python
score = 85

if score >= 90:
    grade = "A"
elif score >= 80:
    grade = "B"
elif score >= 70:
    grade = "C"
elif score >= 60:
    grade = "D"
else:
    grade = "F"

print(f"Your grade is: {grade}")
```

## 4. For Loops

### Basic for loop
```python
# Loop through a range
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4
```

### Loop through a list
```python
fruits = ["apple", "banana", "orange"]
for fruit in fruits:
    print(fruit)
```

### Loop with range variations
```python
# range(start, stop, step)
for i in range(1, 10, 2):
    print(i)  # Prints 1, 3, 5, 7, 9
```

## 5. While Loops

### Basic while loop
```python
count = 0
while count < 5:
    print(count)
    count += 1
```

### While loop with condition
```python
user_input = ""
while user_input != "quit":
    user_input = input("Enter 'quit' to exit: ")
    print(f"You entered: {user_input}")
```

## 6. Loop Control Statements

### Break statement
```python
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4
```

### Continue statement
```python
for i in range(10):
    if i % 2 == 0:
        continue
    print(i)  # Prints 1, 3, 5, 7, 9
```

## 7. Nested Structures

### Nested loops
```python
for i in range(3):
    for j in range(3):
        print(f"({i}, {j})")
```

### Nested if statements
```python
age = 20
has_license = True

if age >= 18:
    if has_license:
        print("You can drive!")
    else:
        print("You need a license to drive")
else:
    print("You're too young to drive")
```

## Practice Examples

### Example 1: Number guessing game
```python
import random

secret_number = random.randint(1, 100)
guess = 0

while guess != secret_number:
    guess = int(input("Guess a number (1-100): "))
    
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    else:
        print("Congratulations! You guessed it!")
```

### Example 2: Multiplication table
```python
number = int(input("Enter a number: "))

for i in range(1, 11):
    result = number * i
    print(f"{number} x {i} = {result}")
```

## Exercises
1. Create a program that checks if a number is even or odd
2. Write a program to find the largest of three numbers
3. Create a simple menu system using loops
4. Build a basic calculator with multiple operations