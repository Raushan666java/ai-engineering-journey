# Assignment 1: Python Basics

**Due Date:** End of Week 1  
**Points:** 100  
**Estimated Time:** 3-4 hours

## Instructions
Complete all problems below. Submit your solutions as Python files (.py) with clear comments explaining your approach.

## Problem 1: Personal Information System (20 points)

Create a program that:
1. Asks the user for their personal information (name, age, city, occupation)
2. Calculates their birth year based on current year and age
3. Displays a formatted summary of their information

**Requirements:**
- Use appropriate variable names
- Use f-string formatting for output
- Handle integer input for age

**Sample Output:**
```
Enter your name: Alice Johnson
Enter your age: 25
Enter your city: New York
Enter your occupation: Software Engineer

=== Personal Information Summary ===
Name: Alice Johnson
Age: 25 years old
Birth Year: 1998
City: New York
Occupation: Software Engineer
```

## Problem 2: Grade Calculator (25 points)

Create a program that:
1. Takes 5 test scores as input
2. Calculates the average
3. Determines the letter grade based on the average
4. Displays the results

**Grading Scale:**
- A: 90-100
- B: 80-89
- C: 70-79
- D: 60-69
- F: Below 60

**Requirements:**
- Use a loop to collect the 5 scores
- Use if-elif-else for grade determination
- Display average rounded to 2 decimal places

## Problem 3: Number Pattern Generator (20 points)

Create a program that generates the following patterns based on user input:

**Pattern 1 - Right Triangle:**
```
*
**
***
****
*****
```

**Pattern 2 - Number Triangle:**
```
1
12
123
1234
12345
```

**Requirements:**
- Ask user which pattern they want (1 or 2)
- Ask for the number of rows
- Use nested loops to generate patterns

## Problem 4: Simple Calculator (25 points)

Create a calculator program that:
1. Shows a menu of operations (+, -, *, /, %)
2. Takes two numbers as input
3. Performs the selected operation
4. Displays the result
5. Asks if user wants to continue

**Requirements:**
- Use a while loop for continuous operation
- Handle division by zero
- Use functions for each operation (bonus: +5 points)

**Sample Output:**
```
=== Simple Calculator ===
1. Addition (+)
2. Subtraction (-)
3. Multiplication (*)
4. Division (/)
5. Modulus (%)
6. Exit

Choose operation (1-6): 1
Enter first number: 10
Enter second number: 5
Result: 10 + 5 = 15

Continue? (y/n): y
```

## Problem 5: Number Analysis (10 points)

Create a program that:
1. Takes a list of 10 numbers from the user
2. Finds and displays:
   - Largest number
   - Smallest number
   - Sum of all numbers
   - Average
   - Count of even numbers
   - Count of odd numbers

**Requirements:**
- Use a loop to collect numbers
- Use appropriate variables to track statistics
- Display results in a formatted manner

## Bonus Challenge: Password Validator (10 extra points)

Create a password validation program that checks if a password meets these criteria:
- At least 8 characters long
- Contains at least one uppercase letter
- Contains at least one lowercase letter
- Contains at least one digit
- Contains at least one special character (!@#$%^&*)

Display which criteria are met and which are not.

## Submission Guidelines

1. **File Naming:** Use the format `lastname_firstname_assignment1.py`
2. **Comments:** Include your name, date, and assignment number at the top
3. **Code Style:** Use meaningful variable names and proper indentation
4. **Testing:** Test your programs with different inputs

## Grading Rubric

| Criteria | Excellent (A) | Good (B) | Fair (C) | Poor (D) |
|----------|---------------|----------|----------|----------|
| Correctness | All problems work perfectly | Minor issues | Some problems work | Major issues |
| Code Style | Clean, well-commented | Good style | Adequate | Poor style |
| Logic | Efficient solutions | Good logic | Basic logic | Flawed logic |
| Testing | Handles edge cases | Good testing | Basic testing | No testing |

## Help Resources

- Python documentation: https://docs.python.org/3/
- Course lecture notes
- Office hours: Tuesdays 2-4 PM
- Discussion forum for questions

**Academic Integrity:** This is an individual assignment. You may discuss concepts with classmates but must write your own code.