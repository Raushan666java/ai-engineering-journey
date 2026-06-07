# JavaScript Review Questions

This document contains review questions for each topic in the JavaScript syllabus. Use these questions to test your understanding and prepare for interviews.

## How to Use These Questions
1. After studying each topic, try to answer the questions without looking at notes
2. Write down your answers and compare them with the correct answers
3. Review topics where you struggled with the questions
4. Use these questions for regular review sessions

## Core JavaScript Questions

### 1. Introduction to JavaScript

1. What is JavaScript and what role does it play in web development?
2. How is JavaScript different from Java?
3. Explain the relationship between ECMAScript and JavaScript.
4. What are the key milestones in JavaScript's evolution?
5. What is a JavaScript engine? Name some popular ones.
6. How does JavaScript run in a browser versus in Node.js?
7. What were the major features introduced in ES6 (ECMAScript 2015)?
8. Why was JavaScript created initially?
9. What makes JavaScript suitable for both frontend and backend development?
10. How does the TC39 process work for adding new features to JavaScript?

### 2. JavaScript Basics

1. What are the differences between var, let, and const?
2. List and describe the primitive data types in JavaScript.
3. What is type coercion in JavaScript? Give examples.
4. What is the difference between == and === operators?
5. Explain hoisting in JavaScript.
6. What is the scope of a variable in JavaScript?
7. What is the difference between null and undefined?
8. How do you convert a string to a number in JavaScript?
9. What is NaN and how can you check for it?
10. Explain operator precedence with an example.
11. What are template literals and how do they differ from string concatenation?
12. What is the typeof operator used for? What are its limitations?

### 3. Control Structures

1. What are the different types of conditional statements in JavaScript?
2. When would you use a switch statement instead of if/else?
3. What is the difference between a for loop and a while loop?
4. Explain the do-while loop and when you would use it.
5. What does the break statement do in a loop?
6. How does the continue statement affect loop execution?
7. What is a for...of loop and how does it differ from a for...in loop?
8. How can you exit from nested loops?
9. What is short-circuit evaluation in logical operators?
10. How would you implement a loop without using loop constructs?

### 4. Functions

1. What is the difference between function declarations and function expressions?
2. How do arrow functions differ from traditional functions?
3. Explain the concept of hoisting as it relates to functions.
4. What are default parameters and how do you use them?
5. What is a pure function and why is it important in functional programming?
6. Explain the concept of closures with an example.
7. What is an IIFE and why would you use it?
8. What are higher-order functions? Give examples.
9. How does the this keyword work in different function types?
10. What is function currying?
11. What is the rest parameter and how is it different from the arguments object?
12. How can you achieve method chaining in JavaScript?

### 5. Objects and Arrays

1. What are the different ways to create an object in JavaScript?
2. How do you access properties in an object?
3. What is the difference between dot notation and bracket notation when accessing object properties?
4. How do you add, modify, and delete properties from an object?
5. Explain prototypal inheritance in JavaScript.
6. What is the difference between Object.create() and the constructor pattern?
7. How do you check if a property exists in an object?
8. What are the common array methods and what do they do?
9. How do you clone an object in JavaScript?
10. What is destructuring and how does it work for objects and arrays?
11. What is the spread operator and how is it used with objects and arrays?
12. How do you iterate over an object's properties?
13. What is the difference between a shallow copy and a deep copy?
14. How do Map and Set objects differ from regular objects and arrays?

### 6. Strings and Numbers

1. List five common string methods and explain what they do.
2. How do you check if a string contains a specific substring?
3. What is the difference between charAt() and charCodeAt()?
4. How do you convert a string to uppercase or lowercase?
5. What are template literals and what features do they provide?
6. How do you handle floating-point precision issues in JavaScript?
7. Explain the Math object and its common methods.
8. How do you generate a random number in a specific range?
9. What is the difference between parseInt() and parseFloat()?
10. How do you format numbers as currency in JavaScript?
11. What is the difference between String() and toString()?
12. How do you pad a string to a specific length?

### 7. Date and Time

1. How do you create a Date object in JavaScript?
2. What are the different ways to initialize a Date object?
3. How do you extract the year, month, day, hour, minute, and second from a Date object?
4. How do you format a date for display?
5. How do you calculate the difference between two dates?
6. What is the significance of January 1, 1970, in JavaScript dates?
7. How do you handle timezones in JavaScript?
8. What are the common pitfalls when working with dates in JavaScript?
9. How do you add or subtract time from a date?
10. How do you compare dates in JavaScript?
11. What is the difference between getDate() and getDay()?
12. How would you create a countdown timer in JavaScript?

### 8. Error Handling

1. What is the purpose of try-catch blocks in JavaScript?
2. How do you create and throw custom errors?
3. What is the finally block and when would you use it?
4. What types of built-in error objects exist in JavaScript?
5. How do you access the error message and stack trace?
6. What is the difference between throw and return in error handling?
7. How do you handle errors in asynchronous code?
8. What is error propagation?
9. How can you implement a global error handler in a web application?
10. What are best practices for error handling in production code?

### 9. DOM Manipulation

1. What is the DOM and how does it relate to JavaScript?
2. What are the different ways to select elements in the DOM?
3. How do you create and append new elements to the DOM?
4. What is the difference between innerHTML, textContent, and innerText?
5. How do you modify attributes and styles of DOM elements?
6. What is the difference between HTMLCollection and NodeList?
7. How do you traverse the DOM (navigate between nodes)?
8. What is the difference between appendChild() and insertBefore()?
9. How do you remove elements from the DOM?
10. What is DOM reflow and repaint? How can you optimize performance?
11. What is the difference between getAttribute() and dataset?
12. How do you create and work with document fragments?

### 10. Events

1. What is event bubbling and event capturing?
2. How do you attach event listeners to DOM elements?
3. What is event delegation and why is it useful?
4. How do you remove event listeners?
5. What information does the event object contain?
6. How do you prevent the default behavior of an event?
7. How do you stop event propagation?
8. What are custom events and how do you create them?
9. What is the difference between onclick and addEventListener?
10. What are the different mouse and keyboard events?
11. How do you handle touch events for mobile devices?
12. What is debouncing and throttling in the context of event handling?

### 11. ES6+ Features

1. What are the major features introduced in ES6 (ECMAScript 2015)?
2. How do let and const differ from var?
3. What are arrow functions and how do they handle this?
4. What are template literals and what problems do they solve?
5. How does destructuring work for objects and arrays?
6. What are default parameters and how do you use them?
7. Explain the rest and spread operators.
8. What are classes in ES6 and how do they work?
9. How do ES6 modules work?
10. What are Promises and how do they help with asynchronous code?
11. What is the Map object and how is it different from a regular object?
12. What is the Set object and when would you use it?
13. What are symbols and what are they used for?
14. What is the optional chaining operator (?.) and when would you use it?
15. What is the nullish coalescing operator (??) and how does it differ from the logical OR operator (||)?

### 12. Asynchronous JavaScript

1. What is the difference between synchronous and asynchronous code?
2. What are callbacks and what problems can they cause?
3. What are Promises and how do they work?
4. What are the states of a Promise?
5. How do you chain Promises?
6. What is Promise.all() and when would you use it?
7. What is Promise.race() and when would you use it?
8. What is async/await and how does it simplify asynchronous code?
9. How do you handle errors with Promises?
10. How do you handle errors with async/await?
11. What is the event loop in JavaScript?
12. What are microtasks and macrotasks in the context of the event loop?
13. How would you implement a timeout for a Promise?
14. What is the difference between setTimeout, setImmediate, and process.nextTick?

### 13. Error Handling and Debugging

1. What tools can you use to debug JavaScript code?
2. How do you set breakpoints in JavaScript?
3. What is the purpose of the debugger statement?
4. How do you inspect variables during debugging?
5. What are the common types of errors in JavaScript?
6. How do you debug asynchronous code?
7. What is a stack trace and how do you interpret it?
8. How do you use the browser's developer tools for debugging?
9. What are source maps and why are they useful?
10. What are some best practices for debugging JavaScript applications?
11. How do you log errors in a production environment?
12. What is the difference between console.log, console.error, and console.warn?

### 14. Best Practices and Coding Standards

1. Why are coding standards important in JavaScript development?
2. What are some common JavaScript style guides?
3. What is linting and why is it important?
4. What tools can you use to enforce coding standards?
5. What are some naming conventions for variables, functions, and classes?
6. How should you organize your JavaScript code?
7. What are some best practices for commenting code?
8. How do you write maintainable JavaScript code?
9. What are some performance best practices in JavaScript?
10. How do you handle browser compatibility issues?
11. What are some security best practices in JavaScript?
12. How do you approach refactoring JavaScript code?

### 15. Design Patterns

1. What are design patterns and why are they important?
2. Explain the Singleton pattern with an example.
3. What is the Module pattern and how does it help with encapsulation?
4. What is the Factory pattern and when would you use it?
5. Explain the Observer pattern and provide a real-world example.
6. What is the Prototype pattern in JavaScript?
7. What is the Command pattern and when would you use it?
8. What is the MVC pattern and how can it be implemented in JavaScript?
9. What is the Decorator pattern?
10. What is the Strategy pattern?
11. How do you choose the appropriate design pattern for a specific problem?
12. What are anti-patterns and how do you avoid them?

## Advanced JavaScript Questions

### 16. OOP and Advanced Concepts

1. How does JavaScript implement object-oriented programming?
2. What are the four pillars of OOP and how are they implemented in JavaScript?
3. How do ES6 classes work under the hood?
4. What are private fields in JavaScript classes and how do you use them?
5. How do you implement inheritance using ES6 classes?
6. What is the super keyword used for in classes?
7. How do you implement multiple inheritance in JavaScript?
8. What are mixins and how do you use them?
9. What is polymorphism and how can you implement it in JavaScript?
10. What are static methods and properties?
11. How do getters and setters work in JavaScript?
12. What is the difference between classical inheritance and prototypal inheritance?

### 17. Browser APIs and Storage

1. What are the different ways to store data on the client-side?
2. What is the difference between localStorage and sessionStorage?
3. How do cookies work and what are their limitations?
4. What is IndexedDB and when would you use it?
5. How do you work with the Fetch API?
6. What is the Geolocation API and how do you use it?
7. How do you work with the History API?
8. What are Web Workers and when would you use them?
9. What is the Canvas API used for?
10. How do you implement drag and drop functionality?
11. What security considerations should you keep in mind when using browser APIs?
12. How do you handle browser compatibility issues with newer APIs?

### 18. Frameworks, Libraries, and Ecosystem

1. What are the benefits of using a JavaScript framework?
2. Compare and contrast React, Angular, and Vue.js.
3. What is the virtual DOM and why is it important?
4. What is state management and what are some popular state management libraries?
5. What is a bundler and why would you use one?
6. What is transpilation and why is it necessary?
7. What is TypeScript and what benefits does it provide?
8. What are Progressive Web Apps (PWAs)?
9. What are Single Page Applications (SPAs) and how do they work?
10. What are the advantages and disadvantages of server-side rendering vs. client-side rendering?
11. How do you choose the right tools and libraries for a project?
12. What are some trends in the JavaScript ecosystem that developers should be aware of?

## Interview-Style Questions

### Basic Level

1. What is the output of `console.log(typeof null)`?
2. What will `console.log(1 + "2")` output?
3. How do you check if a variable is an array?
4. What is the difference between null and undefined?
5. What will be the output of `console.log(0.1 + 0.2 === 0.3)`? Explain why.
6. What is hoisting in JavaScript?
7. What is the output of `console.log(5 < 6 < 7)` and `console.log(7 > 6 > 5)`? Explain why.
8. What is the difference between let, const, and var?
9. What is the output of `console.log([1, 2, 3] === [1, 2, 3])`? Explain why.
10. How do you empty an array in JavaScript?

### Intermediate Level

1. What is a closure and give an example of its use?
2. Explain the concept of prototypal inheritance in JavaScript.
3. What is the event loop in JavaScript?
4. What is the difference between call, apply, and bind?
5. How does the this keyword work in JavaScript?
6. What are Promises and how do they work?
7. What is the difference between shallow and deep copying objects?
8. Explain the concept of memoization and provide an example.
9. What is the difference between synchronous and asynchronous code?
10. How would you implement private variables in JavaScript?

### Advanced Level

1. Explain how async/await works under the hood.
2. What are WeakMap and WeakSet and when would you use them?
3. How would you implement throttling and debouncing functions?
4. Explain the concept of tree shaking in modern JavaScript.
5. How does JavaScript's garbage collection work?
6. What are JavaScript proxies and when would you use them?
7. How would you implement a polyfill for a new JavaScript feature?
8. Explain the concept of functional programming in JavaScript.
9. How would you optimize a JavaScript application for performance?
10. What are JavaScript generators and how do they work?

## Coding Challenges

1. Write a function to flatten a nested array.
2. Implement a debounce function.
3. Create a function that deep clones an object.
4. Write a function to check if a string is a palindrome.
5. Implement a basic Promise from scratch.
6. Create a function that implements the bind method.
7. Write a function to find the most frequent item in an array.
8. Implement a simple event emitter class.
9. Create a memoization function for optimizing recursive calculations.
10. Write a function to detect a cycle in a linked list.

## Answer Key

For detailed answers to these questions, refer to the JavaScript documentation and resources listed in the JavaScript Master Syllabus.