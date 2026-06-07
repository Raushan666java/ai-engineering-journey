# Project 1: Personal Budget Tracker

**Duration:** Week 1  
**Difficulty:** Beginner  
**Skills:** Python basics, loops, conditionals, file I/O  
**Estimated Time:** 4-6 hours

## Project Overview

Create a simple personal budget tracking application that helps users manage their income and expenses. This project will reinforce Python fundamentals while building a practical tool.

## Learning Objectives

By completing this project, you will:
- Apply Python basics (variables, data types, operators)
- Use control structures (if/else, loops)
- Work with lists and dictionaries
- Handle user input and validation
- Practice problem-solving and code organization

## Project Requirements

### Core Features (Required)

1. **User Menu System**
   - Display a main menu with options
   - Handle user selection with input validation

2. **Income Tracking**
   - Add income entries with description and amount
   - View all income entries
   - Calculate total income

3. **Expense Tracking**
   - Add expense entries with category, description, and amount
   - View all expenses
   - Calculate total expenses

4. **Budget Summary**
   - Display total income, total expenses, and remaining budget
   - Show budget status (surplus/deficit)

5. **Data Persistence**
   - Save data to text files
   - Load data when program starts

### Bonus Features (Optional)

1. **Expense Categories**
   - Predefined categories (Food, Transportation, Entertainment, etc.)
   - Category-wise expense analysis

2. **Date Tracking**
   - Add dates to income/expense entries
   - Monthly/weekly summaries

3. **Budget Goals**
   - Set monthly budget limits
   - Alert when approaching limits

## Technical Specifications

### File Structure
```
project-01-budget-tracker/
├── budget_tracker.py          # Main program file
├── data/
│   ├── income.txt            # Income data storage
│   └── expenses.txt          # Expense data storage
├── README.md                 # Project documentation
└── requirements.txt          # Dependencies (if any)
```

### Data Format
- Store data in simple text files
- Use comma-separated values (CSV) format
- Example: `2024-01-15,Salary,2500.00`

## Implementation Guide

### Step 1: Project Setup
```python
# budget_tracker.py
"""
Personal Budget Tracker
A simple application to track income and expenses
"""

def main():
    """Main program function"""
    print("Welcome to Personal Budget Tracker!")
    # Your code here
    
if __name__ == "__main__":
    main()
```

### Step 2: Menu System
```python
def display_menu():
    """Display the main menu options"""
    print("\n=== Personal Budget Tracker ===")
    print("1. Add Income")
    print("2. Add Expense")
    print("3. View Income")
    print("4. View Expenses")
    print("5. Budget Summary")
    print("6. Exit")
    print("=" * 35)

def get_user_choice():
    """Get and validate user menu choice"""
    while True:
        try:
            choice = int(input("Enter your choice (1-6): "))
            if 1 <= choice <= 6:
                return choice
            else:
                print("Please enter a number between 1 and 6.")
        except ValueError:
            print("Please enter a valid number.")
```

### Step 3: Data Management
```python
def add_income():
    """Add a new income entry"""
    description = input("Enter income description: ")
    while True:
        try:
            amount = float(input("Enter amount: $"))
            if amount > 0:
                break
            else:
                print("Amount must be positive.")
        except ValueError:
            print("Please enter a valid number.")
    
    # Save to file or list
    # Your implementation here

def add_expense():
    """Add a new expense entry"""
    # Similar to add_income
    pass

def view_income():
    """Display all income entries"""
    # Your implementation here
    pass

def view_expenses():
    """Display all expense entries"""
    # Your implementation here
    pass

def budget_summary():
    """Display budget summary"""
    # Calculate totals and display summary
    pass
```

### Step 4: File Operations
```python
def save_data(filename, data):
    """Save data to file"""
    try:
        with open(filename, 'w') as file:
            for entry in data:
                file.write(f"{entry}\n")
        print(f"Data saved to {filename}")
    except Exception as e:
        print(f"Error saving data: {e}")

def load_data(filename):
    """Load data from file"""
    data = []
    try:
        with open(filename, 'r') as file:
            for line in file:
                data.append(line.strip())
        print(f"Data loaded from {filename}")
    except FileNotFoundError:
        print(f"File {filename} not found. Starting with empty data.")
    except Exception as e:
        print(f"Error loading data: {e}")
    return data
```

## Sample Output

```
Welcome to Personal Budget Tracker!

=== Personal Budget Tracker ===
1. Add Income
2. Add Expense
3. View Income
4. View Expenses
5. Budget Summary
6. Exit
===================================

Enter your choice (1-6): 1

Enter income description: Salary
Enter amount: $2500.00
Income added successfully!

Enter your choice (1-6): 2

Enter expense description: Groceries
Enter amount: $150.00
Expense added successfully!

Enter your choice (1-6): 5

=== Budget Summary ===
Total Income: $2500.00
Total Expenses: $150.00
Remaining Budget: $2350.00
Status: You're within budget! 💚
```

## Testing Checklist

- [ ] Menu displays correctly
- [ ] All menu options work
- [ ] Input validation works for invalid choices
- [ ] Income can be added with positive amounts
- [ ] Expenses can be added with positive amounts
- [ ] Data is saved to files
- [ ] Data is loaded when program starts
- [ ] Budget summary calculates correctly
- [ ] Program handles file errors gracefully

## Submission Requirements

1. **Code Files**
   - Complete `budget_tracker.py` file
   - Sample data files for testing

2. **Documentation**
   - README.md with setup instructions
   - Comments in code explaining key functions

3. **Testing**
   - Test with various inputs
   - Handle edge cases (negative amounts, invalid input)

## Grading Rubric (100 points)

| Component | Points | Criteria |
|-----------|--------|----------|
| Core Functionality | 40 | All required features work correctly |
| Code Quality | 20 | Clean, readable, well-commented code |
| User Interface | 15 | Clear menu, good user experience |
| Error Handling | 15 | Handles invalid input gracefully |
| Documentation | 10 | Clear README and code comments |

## Extension Ideas

After completing the basic project, consider these enhancements:

1. **Graphical Interface**
   - Use tkinter for a GUI version

2. **Data Analysis**
   - Generate spending reports
   - Visualize data with simple charts

3. **Advanced Features**
   - Multiple budget accounts
   - Recurring income/expenses
   - Export to CSV/Excel

4. **Web Version**
   - Create a web interface using Flask

## Resources

- [Python File I/O Documentation](https://docs.python.org/3/tutorial/inputoutput.html#reading-and-writing-files)
- [Python Exception Handling](https://docs.python.org/3/tutorial/errors.html)
- [CSV Module Documentation](https://docs.python.org/3/library/csv.html)

## Help and Support

- Office hours: Tuesdays 2-4 PM
- Discussion forum for questions
- Peer programming sessions available

**Remember:** Start early, test frequently, and don't hesitate to ask for help!