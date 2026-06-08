# 🟨 JavaScript Complete Course

## 1. JavaScript Basics

### Variables & Data Types
```javascript
// Variable Declaration
let name = "John";        // String
const age = 25;           // Number
var isActive = true;      // Boolean
let data = null;          // Null
let value;                // Undefined

// Arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Objects
let person = {
    name: "Alice",
    age: 30,
    city: "New York"
};
```

### Operators
```javascript
// Arithmetic
let a = 10, b = 3;
console.log(a + b);  // 13
console.log(a % b);  // 1

// Comparison
console.log(a === b); // false
console.log(a !== b); // true

// Logical
console.log(true && false);  // false
console.log(true || false);  // true
```

## 2. Functions

### Function Declaration
```javascript
// Regular Function
function greet(name) {
    return "Hello " + name;
}

// Arrow Function
const add = (a, b) => a + b;

// Function Expression
const multiply = function(x, y) {
    return x * y;
};
```

### Scope & Closures
```javascript
// Closure Example
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
}
const addFive = outerFunction(5);
console.log(addFive(3)); // 8
```

## 3. Objects & Arrays

### Array Methods
```javascript
let numbers = [1, 2, 3, 4, 5];

// Map
let doubled = numbers.map(n => n * 2);

// Filter
let evens = numbers.filter(n => n % 2 === 0);

// Reduce
let sum = numbers.reduce((acc, n) => acc + n, 0);

// Find
let found = numbers.find(n => n > 3);
```

## 4. DOM Manipulation

### Selecting Elements
```javascript
// By ID
let element = document.getElementById('myId');

// Query Selector
let first = document.querySelector('.myClass');
let all = document.querySelectorAll('.myClass');
```

### Event Handling
```javascript
// Click Event
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Form Submission
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Form submitted');
});
```

## 5. Asynchronous JavaScript

### Promises
```javascript
// Creating Promise
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Success!');
    }, 1000);
});

// Using Promise
promise
    .then(result => console.log(result))
    .catch(error => console.log(error));
```

### Async/Await
```javascript
// Async Function
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.log('Error:', error);
    }
}
```

## 6. ES6+ Features

### Template Literals
```javascript
let name = "John";
let age = 25;
let message = `Hello ${name}, you are ${age} years old`;
```

### Destructuring
```javascript
// Array Destructuring
let [first, second, ...rest] = [1, 2, 3, 4, 5];

// Object Destructuring
let {name, age, city = "Unknown"} = person;
```

### Classes
```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
}
```

## Practice Exercises

### Easy Level
1. **Sum of Array**: Calculate sum of all numbers
2. **Palindrome Check**: Check if string is palindrome
3. **Factorial**: Calculate factorial of number
4. **FizzBuzz**: Print numbers 1-100 with rules
5. **Reverse String**: Reverse a given string

### Medium Level
1. **Fibonacci Sequence**: Generate first n numbers
2. **Prime Numbers**: Find all primes up to n
3. **Anagram Check**: Check if two strings are anagrams
4. **Binary Search**: Implement search algorithm
5. **Debounce Function**: Create debounce utility

### Hard Level
1. **Deep Clone**: Create deep copy of object
2. **Throttle Function**: Implement throttling
3. **Promise.all**: Create custom Promise.all
4. **Event Emitter**: Build event emitter class
5. **Virtual DOM**: Simple DOM implementation

## Interview Questions

### Conceptual
1. What is hoisting in JavaScript?
2. Explain closures with example
3. Difference between == and ===
4. What is event bubbling?
5. Explain prototype chain

### Coding
1. Implement bind() method
2. Create custom map() function
3. Flatten nested array
4. Remove duplicates from array
5. Implement curry function

## Practice Projects
1. **Todo List** - CRUD operations
2. **Calculator** - Basic arithmetic
3. **Weather App** - API integration
4. **Quiz App** - Interactive questions
5. **Shopping Cart** - E-commerce logic