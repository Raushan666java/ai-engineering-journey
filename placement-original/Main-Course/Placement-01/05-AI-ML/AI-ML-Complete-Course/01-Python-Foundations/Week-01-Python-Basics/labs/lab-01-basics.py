#!/usr/bin/env python3
"""
Lab 1: Python Basics
Practice with variables, data types, and basic operations
"""

def main():
    print("🐍 Python Basics Lab")
    print("=" * 40)
    
    # Exercise 1: Variables and Data Types
    print("\n1. Variables and Data Types")
    name = "AI Student"
    age = 25
    gpa = 3.85
    is_enrolled = True
    
    print(f"Name: {name} (type: {type(name).__name__})")
    print(f"Age: {age} (type: {type(age).__name__})")
    print(f"GPA: {gpa} (type: {type(gpa).__name__})")
    print(f"Enrolled: {is_enrolled} (type: {type(is_enrolled).__name__})")
    
    # Exercise 2: Type Conversions
    print("\n2. Type Conversions")
    str_num = "123"
    int_num = int(str_num)
    float_num = float(str_num)
    
    print(f"String '123' -> int: {int_num}")
    print(f"String '123' -> float: {float_num}")
    print(f"Integer 456 -> string: '{str(456)}'")
    
    # Exercise 3: String Operations
    print("\n3. String Operations")
    first_name = "John"
    last_name = "Doe"
    full_name = first_name + " " + last_name
    
    print(f"First name: {first_name}")
    print(f"Last name: {last_name}")
    print(f"Full name: {full_name}")
    print(f"Full name length: {len(full_name)}")
    print(f"Uppercase: {full_name.upper()}")
    print(f"Lowercase: {full_name.lower()}")
    
    # Exercise 4: Numeric Operations
    print("\n4. Numeric Operations")
    a, b = 10, 3
    
    print(f"a = {a}, b = {b}")
    print(f"Addition: {a} + {b} = {a + b}")
    print(f"Subtraction: {a} - {b} = {a - b}")
    print(f"Multiplication: {a} * {b} = {a * b}")
    print(f"Division: {a} / {b} = {a / b}")
    print(f"Floor Division: {a} // {b} = {a // b}")
    print(f"Modulus: {a} % {b} = {a % b}")
    print(f"Exponentiation: {a} ** {b} = {a ** b}")
    
    # Exercise 5: Boolean Operations
    print("\n5. Boolean Operations")
    x, y = True, False
    
    print(f"x = {x}, y = {y}")
    print(f"x and y = {x and y}")
    print(f"x or y = {x or y}")
    print(f"not x = {not x}")
    print(f"not y = {not y}")
    
    # Exercise 6: User Input (commented for automated testing)
    print("\n6. User Input Example")
    print("# Uncomment the following lines to test user input:")
    print("# user_name = input('Enter your name: ')")
    print("# user_age = int(input('Enter your age: '))")
    print("# print(f'Hello {user_name}, you are {user_age} years old!')")

def practice_exercises():
    """Additional practice exercises"""
    print("\n" + "=" * 40)
    print("🏋️ Practice Exercises")
    print("=" * 40)
    
    # Exercise A: Temperature Converter
    print("\nExercise A: Temperature Converter")
    celsius = 25
    fahrenheit = (celsius * 9/5) + 32
    print(f"{celsius}°C = {fahrenheit}°F")
    
    # Exercise B: Circle Calculations
    print("\nExercise B: Circle Calculations")
    import math
    radius = 5
    area = math.pi * radius ** 2
    circumference = 2 * math.pi * radius
    print(f"Radius: {radius}")
    print(f"Area: {area:.2f}")
    print(f"Circumference: {circumference:.2f}")
    
    # Exercise C: String Manipulation
    print("\nExercise C: String Manipulation")
    sentence = "Python is awesome for AI and ML"
    words = sentence.split()
    print(f"Original: {sentence}")
    print(f"Word count: {len(words)}")
    print(f"First word: {words[0]}")
    print(f"Last word: {words[-1]}")
    print(f"Reversed: {sentence[::-1]}")

if __name__ == "__main__":
    main()
    practice_exercises()
    print("\n✅ Lab completed successfully!")