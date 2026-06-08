"""
Lab 1: Python Basics - Hands-on Practice
Week 1 - Python Foundations
Estimated Time: 2 hours

Instructions:
1. Complete each exercise in order
2. Test your code after each exercise
3. Ask for help if you get stuck
4. Save your work frequently
"""

# =============================================================================
# Exercise 1: Variables and Data Types
# =============================================================================

print("=== Exercise 1: Variables and Data Types ===")

# TODO: Create variables for the following:
# - Your name (string)
# - Your age (integer)
# - Your height in feet (float)
# - Whether you like programming (boolean)

# Your code here:
name = "Student Name"  # Replace with your name
age = 20  # Replace with your age
height = 5.8  # Replace with your height
likes_programming = True  # Replace with your preference

# Print all variables
print(f"Name: {name}")
print(f"Age: {age}")
print(f"Height: {height} feet")
print(f"Likes Programming: {likes_programming}")

# Check data types
print(f"Type of name: {type(name)}")
print(f"Type of age: {type(age)}")
print(f"Type of height: {type(height)}")
print(f"Type of likes_programming: {type(likes_programming)}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 2: Basic Operations
# =============================================================================

print("=== Exercise 2: Basic Operations ===")

# TODO: Create two numbers and perform all arithmetic operations
num1 = 15
num2 = 4

# Your code here:
addition = num1 + num2
subtraction = num1 - num2
multiplication = num1 * num2
division = num1 / num2
floor_division = num1 // num2
modulus = num1 % num2
exponentiation = num1 ** num2

print(f"{num1} + {num2} = {addition}")
print(f"{num1} - {num2} = {subtraction}")
print(f"{num1} * {num2} = {multiplication}")
print(f"{num1} / {num2} = {division}")
print(f"{num1} // {num2} = {floor_division}")
print(f"{num1} % {num2} = {modulus}")
print(f"{num1} ** {num2} = {exponentiation}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 3: String Operations
# =============================================================================

print("=== Exercise 3: String Operations ===")

# TODO: Work with strings
first_name = "John"
last_name = "Doe"

# Your code here:
full_name = first_name + " " + last_name
print(f"Full name: {full_name}")
print(f"Length of full name: {len(full_name)}")
print(f"Uppercase: {full_name.upper()}")
print(f"Lowercase: {full_name.lower()}")
print(f"First name starts with 'J': {first_name.startswith('J')}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 4: User Input and Conditionals
# =============================================================================

print("=== Exercise 4: User Input and Conditionals ===")

# TODO: Get user input and make decisions
# Uncomment the following lines to test with user input:

# user_age = int(input("Enter your age: "))
# 
# if user_age >= 18:
#     print("You are an adult")
#     if user_age >= 65:
#         print("You are a senior citizen")
# else:
#     print("You are a minor")
#     years_to_adult = 18 - user_age
#     print(f"You will be an adult in {years_to_adult} years")

# For testing without input, use this:
test_age = 25
if test_age >= 18:
    print(f"Age {test_age}: You are an adult")
    if test_age >= 65:
        print("You are a senior citizen")
else:
    print(f"Age {test_age}: You are a minor")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 5: Loops Practice
# =============================================================================

print("=== Exercise 5: Loops Practice ===")

# TODO: Practice with for loops
print("Counting from 1 to 10:")
for i in range(1, 11):
    print(i, end=" ")
print()

print("\nEven numbers from 2 to 20:")
for i in range(2, 21, 2):
    print(i, end=" ")
print()

# TODO: Practice with while loops
print("\nCountdown from 5:")
count = 5
while count > 0:
    print(count)
    count -= 1
print("Blast off!")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 6: Lists and Loops
# =============================================================================

print("=== Exercise 6: Lists and Loops ===")

# TODO: Work with lists
fruits = ["apple", "banana", "orange", "grape", "kiwi"]

print("Fruits in the list:")
for fruit in fruits:
    print(f"- {fruit}")

print(f"\nTotal fruits: {len(fruits)}")
print(f"First fruit: {fruits[0]}")
print(f"Last fruit: {fruits[-1]}")

# TODO: Find fruits with more than 5 letters
print("\nFruits with more than 5 letters:")
for fruit in fruits:
    if len(fruit) > 5:
        print(f"- {fruit}")

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 7: Simple Calculator
# =============================================================================

print("=== Exercise 7: Simple Calculator ===")

def simple_calculator():
    """A simple calculator function"""
    # TODO: Implement a basic calculator
    
    # For testing without input:
    a, b = 10, 3
    operation = "+"
    
    if operation == "+":
        result = a + b
    elif operation == "-":
        result = a - b
    elif operation == "*":
        result = a * b
    elif operation == "/":
        if b != 0:
            result = a / b
        else:
            result = "Error: Division by zero"
    else:
        result = "Error: Invalid operation"
    
    print(f"{a} {operation} {b} = {result}")

simple_calculator()

print("\n" + "="*50 + "\n")

# =============================================================================
# Exercise 8: Pattern Generation
# =============================================================================

print("=== Exercise 8: Pattern Generation ===")

# TODO: Generate a number triangle
rows = 5
print(f"Number triangle with {rows} rows:")

for i in range(1, rows + 1):
    for j in range(1, i + 1):
        print(j, end="")
    print()

print("\nStar triangle:")
for i in range(1, rows + 1):
    print("*" * i)

print("\n" + "="*50 + "\n")

# =============================================================================
# Challenge Exercise: Number Guessing Game
# =============================================================================

print("=== Challenge: Number Guessing Game ===")

import random

def number_guessing_game():
    """A simple number guessing game"""
    secret_number = random.randint(1, 10)
    max_attempts = 3
    attempts = 0
    
    print("I'm thinking of a number between 1 and 10!")
    print(f"You have {max_attempts} attempts to guess it.")
    
    # For demonstration, we'll simulate guesses
    guesses = [5, 7, secret_number]  # Simulated guesses
    
    for guess in guesses:
        attempts += 1
        print(f"\nAttempt {attempts}: Guessing {guess}")
        
        if guess == secret_number:
            print(f"Congratulations! You guessed it in {attempts} attempts!")
            break
        elif guess < secret_number:
            print("Too low!")
        else:
            print("Too high!")
        
        if attempts >= max_attempts:
            print(f"\nGame over! The number was {secret_number}")
            break

number_guessing_game()

print("\n" + "="*50 + "\n")

# =============================================================================
# Lab Summary
# =============================================================================

print("=== Lab 1 Complete! ===")
print("Great job completing the Python basics lab!")
print("You've practiced:")
print("- Variables and data types")
print("- Basic operations")
print("- String manipulation")
print("- Conditionals and loops")
print("- Lists and functions")
print("- Problem-solving with code")

print("\nNext steps:")
print("1. Complete Assignment 1")
print("2. Review lecture notes")
print("3. Practice more coding problems")
print("4. Prepare for Week 2: Advanced Python")