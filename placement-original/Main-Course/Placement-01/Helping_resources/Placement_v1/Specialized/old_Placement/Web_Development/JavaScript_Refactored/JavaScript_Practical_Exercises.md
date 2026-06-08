# JavaScript Practical Exercises

This document contains practical exercises for each topic in the JavaScript syllabus. Complete these exercises to reinforce your understanding of JavaScript concepts.

## How to Use These Exercises
1. Complete the exercises after studying each topic
2. Try to solve them without looking at solutions first
3. Test your code in a browser or Node.js environment
4. Review the solutions after attempting the exercises

## Core JavaScript Exercises

### 1. Introduction to JavaScript

#### Exercise 1.1: Environment Setup
**Objective**: Set up a basic development environment and run JavaScript code.
**Tasks**:
1. Create an HTML file with embedded JavaScript
2. Display a personalized greeting in an alert box
3. Log information about your browser to the console
4. Use the browser's developer tools to inspect variables

#### Exercise 1.2: JavaScript Timeline
**Objective**: Research and document JavaScript's evolution.
**Tasks**:
1. Create a visual timeline of JavaScript's major versions
2. For each version, list 2-3 key features that were introduced
3. Identify which features are supported in different browsers

### 2. JavaScript Basics

#### Exercise 2.1: Variable Declaration and Data Types
**Objective**: Practice working with variables and different data types.
**Tasks**:
1. Declare variables using var, let, and const
2. Create variables for each primitive data type
3. Demonstrate type coercion with different operators
4. Convert between different data types explicitly

```javascript
// Example starter code
let name = "JavaScript Learner";
const birthYear = 1995;
let isStudent = true;

// Add your code here
```

#### Exercise 2.2: Operator Challenge
**Objective**: Use various operators to solve problems.
**Tasks**:
1. Calculate the area and perimeter of a rectangle
2. Determine if a number is even or odd
3. Combine string and numerical operations
4. Use logical operators to check multiple conditions

### 3. Control Structures

#### Exercise 3.1: FizzBuzz
**Objective**: Implement the classic FizzBuzz problem.
**Tasks**:
1. Write a program that prints numbers from 1 to 100
2. For multiples of 3, print "Fizz" instead of the number
3. For multiples of 5, print "Buzz" instead of the number
4. For multiples of both 3 and 5, print "FizzBuzz"

#### Exercise 3.2: Grade Calculator
**Objective**: Use conditional statements to assign letter grades.
**Tasks**:
1. Create a function that takes a numerical score (0-100)
2. Return the corresponding letter grade:
   - A: 90-100
   - B: 80-89
   - C: 70-79
   - D: 60-69
   - F: 0-59
3. Handle invalid inputs (negative numbers, values over 100)
4. Implement the same logic using if/else and switch statements

### 4. Functions

#### Exercise 4.1: Function Types
**Objective**: Practice different ways of creating and using functions.
**Tasks**:
1. Create a function declaration that calculates the area of a circle
2. Create a function expression that calculates the volume of a cylinder
3. Create an arrow function that calculates the area of a triangle
4. Create a function with default parameters

#### Exercise 4.2: Closure Counter
**Objective**: Implement a counter using closures.
**Tasks**:
1. Create a function that returns a counter function
2. The counter should increment each time it's called
3. Create multiple counters and demonstrate they maintain separate counts
4. Add functionality to reset the counter

### 5. Objects and Arrays

#### Exercise 5.1: Contact Manager
**Objective**: Create a simple contact management system using objects.
**Tasks**:
1. Create an array of contact objects with properties for name, email, and phone
2. Implement functions to add, find, update, and delete contacts
3. Add a method to each contact object to format the contact information
4. Use array methods to filter contacts by various criteria

#### Exercise 5.2: Data Transformation
**Objective**: Practice array methods for data transformation.
**Tasks**:
1. Given an array of product objects with name, price, and category properties:
   - Filter products by category
   - Calculate the total price of all products
   - Find the most expensive product
   - Create a new array with formatted product descriptions
2. Use array methods like map, filter, reduce, and find

### 6. Strings and Numbers

#### Exercise 6.1: Text Analyzer
**Objective**: Create a utility for analyzing text.
**Tasks**:
1. Create a function that counts words in a string
2. Create a function that counts character frequency
3. Create a function that capitalizes the first letter of each word
4. Create a function that truncates text with an ellipsis if it exceeds a certain length

#### Exercise 6.2: Number Formatter
**Objective**: Format numbers for display.
**Tasks**:
1. Create a function that formats a number as currency
2. Create a function that formats a number with commas as thousands separators
3. Create a function that rounds a number to a specified number of decimal places
4. Create a function that converts a number to its word representation (e.g., 42 → "forty-two")

### 7. Date and Time

#### Exercise 7.1: Date Formatter
**Objective**: Work with dates and formatting.
**Tasks**:
1. Create a function that formats a date in different styles (short, medium, long)
2. Create a function that calculates the difference between two dates in days
3. Create a function that determines if a year is a leap year
4. Create a function that returns the day of the week for a given date

#### Exercise 7.2: Appointment Scheduler
**Objective**: Build a simple appointment scheduling system.
**Tasks**:
1. Create functions to add, remove, and list appointments
2. Each appointment should have a title, date, start time, and duration
3. Implement a function to check for scheduling conflicts
4. Add functionality to find the next available time slot

### 8. Error Handling

#### Exercise 8.1: Form Validator
**Objective**: Create a form validation system with error handling.
**Tasks**:
1. Create functions to validate:
   - Email addresses
   - Phone numbers
   - Passwords (with specific requirements)
   - Credit card numbers
2. Use try-catch blocks to handle validation errors
3. Create custom error types for different validation failures
4. Implement a function that validates a complete form and returns all errors

#### Exercise 8.2: Robust API Client
**Objective**: Create a function for making API requests with error handling.
**Tasks**:
1. Create a function that makes a fetch request to an API
2. Handle different types of errors (network errors, API errors, etc.)
3. Implement retry logic for failed requests
4. Add timeout functionality

### 9. DOM Manipulation

#### Exercise 9.1: Dynamic List
**Objective**: Create a dynamic list with add/remove functionality.
**Tasks**:
1. Create an HTML page with a form to add items to a list
2. Implement JavaScript to add new items when the form is submitted
3. Add a delete button to each list item
4. Add functionality to edit existing items

#### Exercise 9.2: Tab Interface
**Objective**: Create a tabbed interface component.
**Tasks**:
1. Create HTML with multiple content sections
2. Implement JavaScript to show/hide sections based on tab clicks
3. Style the active tab differently
4. Add animation when switching between tabs

### 10. Events

#### Exercise 10.1: Interactive Form
**Objective**: Create a form with interactive validation.
**Tasks**:
1. Create a registration form with multiple fields
2. Add real-time validation as the user types
3. Display validation messages next to each field
4. Enable/disable the submit button based on form validity

#### Exercise 10.2: Drag and Drop
**Objective**: Implement a simple drag and drop interface.
**Tasks**:
1. Create elements that can be dragged
2. Create drop zones where elements can be placed
3. Implement the necessary event handlers for drag and drop
4. Add visual feedback during the drag operation

### 11. ES6+ Features

#### Exercise 11.1: Modern Refactoring
**Objective**: Refactor legacy code using modern JavaScript features.
**Tasks**:
1. Refactor functions to use arrow syntax where appropriate
2. Replace var with let and const
3. Use template literals instead of string concatenation
4. Implement destructuring for objects and arrays
5. Use default parameters and rest/spread operators

#### Exercise 11.2: Module System
**Objective**: Create a modular application using ES modules.
**Tasks**:
1. Create multiple JavaScript files with different functionality
2. Use export and import to share functionality between files
3. Create a main file that uses the imported modules
4. Implement both named exports and default exports

### 12. Asynchronous JavaScript

#### Exercise 12.1: Promise Chain
**Objective**: Work with promises and promise chaining.
**Tasks**:
1. Create a series of functions that return promises
2. Chain the promises together to execute in sequence
3. Handle errors appropriately
4. Implement a final "cleanup" step that always executes

#### Exercise 12.2: Async/Await
**Objective**: Refactor promise-based code to use async/await.
**Tasks**:
1. Take the solution from Exercise 12.1 and refactor it to use async/await
2. Implement proper error handling with try/catch
3. Create a function that executes multiple async operations in parallel
4. Create a function that executes async operations in sequence

### 13. Error Handling and Debugging

#### Exercise 13.1: Bug Hunt
**Objective**: Find and fix bugs in existing code.
**Tasks**:
1. Debug a function with logical errors
2. Fix a function with syntax errors
3. Resolve issues with asynchronous code
4. Implement proper error handling for a function

#### Exercise 13.2: Logging System
**Objective**: Create a simple logging system for debugging.
**Tasks**:
1. Create a logger object with different log levels (info, warn, error)
2. Implement formatting for log messages
3. Add timestamps to log messages
4. Add the ability to filter logs by level

### 14. Best Practices and Coding Standards

#### Exercise 14.1: Code Review
**Objective**: Review and improve code quality.
**Tasks**:
1. Review a provided code snippet
2. Identify issues and potential improvements
3. Refactor the code following best practices
4. Document your changes and reasoning

#### Exercise 14.2: Style Guide Implementation
**Objective**: Create and implement a coding style guide.
**Tasks**:
1. Create a simple style guide for JavaScript code
2. Set up ESLint with custom rules based on your style guide
3. Refactor a provided file to follow your style guide
4. Document common patterns and anti-patterns

### 15. Design Patterns

#### Exercise 15.1: Singleton Implementation
**Objective**: Implement the Singleton pattern.
**Tasks**:
1. Create a configuration manager as a singleton
2. Ensure only one instance can be created
3. Add methods to get and set configuration values
4. Make the configuration persist between page reloads using localStorage

#### Exercise 15.2: Observer Pattern
**Objective**: Implement the Observer pattern.
**Tasks**:
1. Create a simple event system with subscribe and publish methods
2. Implement multiple subscribers that react to events
3. Add the ability to unsubscribe from events
4. Create a real-world example (e.g., a notification system)

## Advanced JavaScript Exercises

### 16. OOP and Advanced Concepts

#### Exercise 16.1: Class Hierarchy
**Objective**: Create a class hierarchy for a specific domain.
**Tasks**:
1. Design and implement a base class
2. Create multiple subclasses that inherit from the base class
3. Override methods in the subclasses
4. Implement polymorphism through a common interface

#### Exercise 16.2: Private Members
**Objective**: Implement encapsulation with private fields and methods.
**Tasks**:
1. Create a class with private fields using modern JavaScript syntax
2. Implement getters and setters for controlled access
3. Create private methods that are only used internally
4. Demonstrate why encapsulation is beneficial

### 17. Browser APIs and Storage

#### Exercise 17.1: Local Data Manager
**Objective**: Create a utility for managing client-side data.
**Tasks**:
1. Implement functions to save, retrieve, and delete data using:
   - localStorage
   - sessionStorage
   - Cookies
   - IndexedDB
2. Create a unified API that abstracts the storage mechanism
3. Add expiration functionality for stored data
4. Implement data encryption for sensitive information

#### Exercise 17.2: Geolocation Weather App
**Objective**: Use browser APIs to create a location-based application.
**Tasks**:
1. Use the Geolocation API to get the user's location
2. Make an API request to a weather service using the location data
3. Display the current weather and forecast
4. Implement error handling for when geolocation is unavailable

### 18. Frameworks, Libraries, and Ecosystem

#### Exercise 18.1: Framework Comparison
**Objective**: Compare different JavaScript frameworks.
**Tasks**:
1. Implement the same simple application (e.g., a to-do list) in:
   - Vanilla JavaScript
   - React
   - Vue or another framework of your choice
2. Compare the implementations in terms of:
   - Code complexity
   - Performance
   - Development experience
3. Document your findings

#### Exercise 18.2: Build System Setup
**Objective**: Set up a modern JavaScript build system.
**Tasks**:
1. Create a project with a build system (e.g., Webpack, Vite)
2. Configure the build system for development and production
3. Add support for:
   - Transpiling modern JavaScript (Babel)
   - CSS preprocessing
   - Asset optimization
4. Implement a component-based architecture

## Project Ideas

After completing the exercises, consider building these larger projects to apply your skills:

1. **Task Management Application**
   - Create, edit, delete tasks
   - Organize tasks into projects
   - Set due dates and priorities
   - Filter and search tasks
   - Store data in localStorage or a backend API

2. **E-commerce Product Page**
   - Display product information
   - Image gallery with zoom functionality
   - Add to cart functionality
   - Product variations (size, color, etc.)
   - Reviews and ratings system

3. **Interactive Data Visualization**
   - Fetch data from an API
   - Create charts and graphs
   - Implement filtering and sorting
   - Add animations and interactivity
   - Responsive design for different screen sizes

4. **Social Media Dashboard**
   - Authentication system
   - News feed with infinite scroll
   - Create and interact with posts
   - Real-time notifications
   - User profiles and settings

5. **Browser-based Game**
   - Game loop and state management
   - User input handling
   - Graphics and animation
   - Sound effects and music
   - Score tracking and leaderboard