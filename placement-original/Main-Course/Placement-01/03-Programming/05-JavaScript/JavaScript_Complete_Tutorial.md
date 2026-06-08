# 🟨 JavaScript Complete Tutorial - GeeksforGeeks Based

## Table of Contents
1. [JavaScript Basics](#basics)
2. [Variables & Data Types](#variables)
3. [Operators](#operators)
4. [Control Structures](#control)
5. [Functions](#functions)
6. [Objects](#objects)
7. [Arrays](#arrays)
8. [Strings](#strings)
9. [DOM Manipulation](#dom)
10. [Events](#events)
11. [Asynchronous JavaScript](#async)
12. [ES6+ Features](#es6)
13. [Object-Oriented Programming](#oop)
14. [Error Handling](#errors)
15. [Modules](#modules)
16. [Advanced Topics](#advanced)

---

## 1. JavaScript Basics {#basics}

### Introduction
```javascript
// JavaScript is a high-level, interpreted programming language
console.log("Hello, World!");
alert("Welcome to JavaScript!");
document.write("JavaScript Tutorial");
```

### Ways to Include JavaScript
```html
<!-- Internal JavaScript -->
<script>
    console.log("Internal JS");
</script>

<!-- External JavaScript -->
<script src="script.js"></script>

<!-- Inline JavaScript -->
<button onclick="alert('Clicked!')">Click Me</button>
```

### JavaScript Engines
- **V8**: Chrome, Node.js
- **SpiderMonkey**: Firefox
- **JavaScriptCore**: Safari
- **Chakra**: Internet Explorer/Edge

---

## 2. Variables & Data Types {#variables}

### Variable Declaration
```javascript
// var - Function scoped, hoisted
var name = "John";
var age = 25;

// let - Block scoped, not hoisted
let city = "New York";
let salary = 50000;

// const - Block scoped, immutable
const PI = 3.14159;
const country = "USA";
```

### Data Types
```javascript
// Primitive Data Types
let str = "Hello World";        // String
let num = 42;                   // Number
let bigInt = 123456789012345n;  // BigInt
let bool = true;                // Boolean
let nothing = null;             // Null
let notDefined;                 // Undefined
let sym = Symbol('id');         // Symbol

// Non-Primitive Data Types
let obj = {name: "John", age: 30};  // Object
let arr = [1, 2, 3, 4, 5];          // Array
let func = function() {};           // Function
let date = new Date();              // Date
let regex = /pattern/;              // RegExp
```

### Type Checking
```javascript
console.log(typeof "Hello");     // "string"
console.log(typeof 42);          // "number"
console.log(typeof true);        // "boolean"
console.log(typeof undefined);   // "undefined"
console.log(typeof null);        // "object" (known quirk)
console.log(typeof {});          // "object"
console.log(typeof []);          // "object"
console.log(typeof function(){}); // "function"
```

### Variable Hoisting
```javascript
// var hoisting
console.log(x); // undefined (not error)
var x = 5;

// let/const hoisting (Temporal Dead Zone)
// console.log(y); // ReferenceError
let y = 10;

// Function hoisting
sayHello(); // Works!
function sayHello() {
    console.log("Hello!");
}
```

---

## 3. Operators {#operators}

### Arithmetic Operators
```javascript
let a = 10, b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.33 (Division)
console.log(a % b);  // 1  (Modulus)
console.log(a ** b); // 1000 (Exponentiation)

// Increment/Decrement
let x = 5;
console.log(++x);    // 6 (Pre-increment)
console.log(x++);    // 6 (Post-increment)
console.log(--x);    // 6 (Pre-decrement)
console.log(x--);    // 6 (Post-decrement)
```

### Assignment Operators
```javascript
let x = 10;
x += 5;  // x = x + 5 = 15
x -= 3;  // x = x - 3 = 12
x *= 2;  // x = x * 2 = 24
x /= 4;  // x = x / 4 = 6
x %= 4;  // x = x % 4 = 2
x **= 3; // x = x ** 3 = 8
```

### Comparison Operators
```javascript
let a = 5, b = "5";

console.log(a == b);   // true (loose equality)
console.log(a === b);  // false (strict equality)
console.log(a != b);   // false (loose inequality)
console.log(a !== b);  // true (strict inequality)
console.log(a > 3);    // true
console.log(a < 10);   // true
console.log(a >= 5);   // true
console.log(a <= 5);   // true
```

### Logical Operators
```javascript
let x = true, y = false;

console.log(x && y);   // false (AND)
console.log(x || y);   // true (OR)
console.log(!x);       // false (NOT)

// Short-circuit evaluation
let result = x && "Hello"; // "Hello"
let result2 = y || "Default"; // "Default"
```

### Bitwise Operators
```javascript
let a = 5;  // 101 in binary
let b = 3;  // 011 in binary

console.log(a & b);  // 1 (AND)
console.log(a | b);  // 7 (OR)
console.log(a ^ b);  // 6 (XOR)
console.log(~a);     // -6 (NOT)
console.log(a << 1); // 10 (Left shift)
console.log(a >> 1); // 2 (Right shift)
```

### Ternary Operator
```javascript
let age = 18;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Nested ternary
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
```

---

## 4. Control Structures {#control}

### Conditional Statements
```javascript
// if-else
let score = 85;
if (score >= 90) {
    console.log("A Grade");
} else if (score >= 80) {
    console.log("B Grade");
} else if (score >= 70) {
    console.log("C Grade");
} else {
    console.log("F Grade");
}

// switch
let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Tuesday":
        console.log("Tuesday blues");
        break;
    case "Friday":
        console.log("TGIF!");
        break;
    default:
        console.log("Regular day");
}
```

### Loops
```javascript
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let count = 0;
while (count < 3) {
    console.log(count);
    count++;
}

// do-while loop
let num = 0;
do {
    console.log(num);
    num++;
} while (num < 3);

// for...in loop (objects)
let person = {name: "John", age: 30, city: "NYC"};
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// for...of loop (arrays)
let fruits = ["apple", "banana", "orange"];
for (let fruit of fruits) {
    console.log(fruit);
}
```

### Loop Control
```javascript
// break and continue
for (let i = 0; i < 10; i++) {
    if (i === 3) continue; // Skip 3
    if (i === 7) break;    // Stop at 7
    console.log(i);
}

// Labeled statements
outer: for (let i = 0; i < 3; i++) {
    inner: for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) break outer;
        console.log(i, j);
    }
}
```

---

## 5. Functions {#functions}

### Function Declaration
```javascript
// Function declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function expression
const sayHello = function(name) {
    return "Hello, " + name + "!";
};

// Arrow function
const welcome = (name) => {
    return "Welcome, " + name + "!";
};

// Arrow function (short form)
const hi = name => `Hi, ${name}!`;
```

### Function Parameters
```javascript
// Default parameters
function greet(name = "Guest", age = 0) {
    return `Hello ${name}, you are ${age} years old`;
}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Destructuring parameters
function displayUser({name, age, city}) {
    console.log(`${name}, ${age}, ${city}`);
}
```

### Higher-Order Functions
```javascript
// Function as parameter
function calculate(operation, a, b) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(calculate(add, 5, 3));      // 8
console.log(calculate(multiply, 4, 6)); // 24

// Function returning function
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
console.log(double(5)); // 10
```

### Closures
```javascript
function outerFunction(x) {
    // Outer variable
    return function innerFunction(y) {
        // Inner function has access to outer variable
        return x + y;
    };
}

const addFive = outerFunction(5);
console.log(addFive(3)); // 8

// Practical closure example
function createCounter() {
    let count = 0;
    return {
        increment: () => ++count,
        decrement: () => --count,
        getCount: () => count
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.getCount());  // 2
```

### IIFE (Immediately Invoked Function Expression)
```javascript
// IIFE
(function() {
    console.log("IIFE executed!");
})();

// IIFE with parameters
(function(name) {
    console.log("Hello, " + name);
})("John");

// Arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();
```

---

## 6. Objects {#objects}

### Object Creation
```javascript
// Object literal
let person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        return "Hello, I'm " + this.name;
    };
}

let john = new Person("John", 30);

// Object.create()
let personPrototype = {
    greet: function() {
        return "Hello, I'm " + this.name;
    }
};

let alice = Object.create(personPrototype);
alice.name = "Alice";
alice.age = 25;
```

### Object Properties
```javascript
let person = {
    name: "John",
    age: 30
};

// Accessing properties
console.log(person.name);        // Dot notation
console.log(person["age"]);      // Bracket notation

// Adding properties
person.city = "NYC";
person["country"] = "USA";

// Deleting properties
delete person.age;

// Property existence
console.log("name" in person);           // true
console.log(person.hasOwnProperty("name")); // true
```

### Object Methods
```javascript
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    },
    // ES6 method shorthand
    greet() {
        return `Hello, I'm ${this.fullName()}`;
    }
};

// Method with arrow function (loses 'this' context)
let obj = {
    name: "Test",
    regularMethod: function() {
        console.log(this.name); // "Test"
    },
    arrowMethod: () => {
        console.log(this.name); // undefined
    }
};
```

### Object Destructuring
```javascript
let person = {
    name: "John",
    age: 30,
    city: "NYC",
    country: "USA"
};

// Basic destructuring
let {name, age} = person;

// Renaming variables
let {name: fullName, age: years} = person;

// Default values
let {name, age, salary = 50000} = person;

// Nested destructuring
let user = {
    id: 1,
    info: {
        name: "John",
        email: "john@example.com"
    }
};

let {info: {name, email}} = user;
```

### Object Methods (Built-in)
```javascript
let person = {name: "John", age: 30, city: "NYC"};

// Object.keys()
console.log(Object.keys(person)); // ["name", "age", "city"]

// Object.values()
console.log(Object.values(person)); // ["John", 30, "NYC"]

// Object.entries()
console.log(Object.entries(person)); // [["name", "John"], ["age", 30], ["city", "NYC"]]

// Object.assign()
let target = {a: 1};
let source = {b: 2, c: 3};
Object.assign(target, source); // {a: 1, b: 2, c: 3}

// Object.freeze()
Object.freeze(person);
person.age = 31; // Won't work

// Object.seal()
Object.seal(person); // Can modify existing properties but can't add/delete
```

---

## 7. Arrays {#arrays}

### Array Creation
```javascript
// Array literal
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, null];

// Array constructor
let arr1 = new Array(5);        // Empty array with length 5
let arr2 = new Array(1, 2, 3);  // [1, 2, 3]

// Array.from()
let str = "hello";
let chars = Array.from(str); // ["h", "e", "l", "l", "o"]

// Array.of()
let nums = Array.of(1, 2, 3); // [1, 2, 3]
```

### Array Methods - Mutating
```javascript
let fruits = ["apple", "banana"];

// push() - Add to end
fruits.push("orange");          // ["apple", "banana", "orange"]

// pop() - Remove from end
let last = fruits.pop();        // "orange"

// unshift() - Add to beginning
fruits.unshift("mango");        // ["mango", "apple", "banana"]

// shift() - Remove from beginning
let first = fruits.shift();     // "mango"

// splice() - Add/remove elements
fruits.splice(1, 0, "grape");   // Add "grape" at index 1
fruits.splice(1, 1);            // Remove 1 element at index 1

// sort()
let numbers = [3, 1, 4, 1, 5];
numbers.sort();                 // [1, 1, 3, 4, 5]
numbers.sort((a, b) => b - a);  // [5, 4, 3, 1, 1] (descending)

// reverse()
numbers.reverse();              // [1, 1, 3, 4, 5]
```

### Array Methods - Non-Mutating
```javascript
let numbers = [1, 2, 3, 4, 5];

// map() - Transform elements
let doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]

// filter() - Filter elements
let evens = numbers.filter(n => n % 2 === 0); // [2, 4]

// reduce() - Reduce to single value
let sum = numbers.reduce((acc, n) => acc + n, 0); // 15

// find() - Find first matching element
let found = numbers.find(n => n > 3); // 4

// findIndex() - Find index of first matching element
let index = numbers.findIndex(n => n > 3); // 3

// includes() - Check if element exists
let hasThree = numbers.includes(3); // true

// indexOf() - Find index of element
let indexOfThree = numbers.indexOf(3); // 2

// slice() - Extract portion
let portion = numbers.slice(1, 4); // [2, 3, 4]

// concat() - Combine arrays
let moreNumbers = [6, 7, 8];
let combined = numbers.concat(moreNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]
```

### Array Iteration
```javascript
let fruits = ["apple", "banana", "orange"];

// forEach()
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// for...of
for (let fruit of fruits) {
    console.log(fruit);
}

// for...in (not recommended for arrays)
for (let index in fruits) {
    console.log(fruits[index]);
}

// Traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### Array Destructuring
```javascript
let numbers = [1, 2, 3, 4, 5];

// Basic destructuring
let [first, second] = numbers; // first = 1, second = 2

// Skip elements
let [a, , c] = numbers; // a = 1, c = 3

// Rest operator
let [head, ...tail] = numbers; // head = 1, tail = [2, 3, 4, 5]

// Default values
let [x, y, z = 0] = [1, 2]; // x = 1, y = 2, z = 0

// Swapping variables
let a = 1, b = 2;
[a, b] = [b, a]; // a = 2, b = 1
```

---

## 8. Strings {#strings}

### String Creation
```javascript
// String literals
let str1 = "Hello World";
let str2 = 'JavaScript';
let str3 = `Template literal`;

// String constructor
let str4 = new String("Hello");

// Multi-line strings
let multiLine = `This is a
multi-line
string`;
```

### String Properties and Methods
```javascript
let str = "JavaScript Programming";

// Properties
console.log(str.length); // 21

// Case methods
console.log(str.toLowerCase());    // "javascript programming"
console.log(str.toUpperCase());    // "JAVASCRIPT PROGRAMMING"

// Search methods
console.log(str.indexOf("Script"));     // 4
console.log(str.lastIndexOf("a"));      // 18
console.log(str.includes("Program"));   // true
console.log(str.startsWith("Java"));    // true
console.log(str.endsWith("ing"));       // true

// Extraction methods
console.log(str.charAt(4));           // "S"
console.log(str.charCodeAt(4));       // 83
console.log(str.slice(4, 10));        // "Script"
console.log(str.substring(4, 10));    // "Script"
console.log(str.substr(4, 6));        // "Script"

// Modification methods (return new string)
console.log(str.replace("JavaScript", "JS"));     // "JS Programming"
console.log(str.replaceAll("a", "@"));            // "J@v@Script Progr@mming"
console.log(str.split(" "));                      // ["JavaScript", "Programming"]
console.log(str.trim());                          // Removes whitespace
console.log(str.padStart(25, "*"));               // "****JavaScript Programming"
console.log(str.padEnd(25, "*"));                 // "JavaScript Programming****"
```

### Template Literals
```javascript
let name = "John";
let age = 30;

// Template literal with expressions
let message = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-line template literal
let html = `
    <div>
        <h1>${name}</h1>
        <p>Age: ${age}</p>
    </div>
`;

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        return result + string + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

let highlighted = highlight`Hello ${name}, you are ${age} years old`;
```

### String Comparison
```javascript
let str1 = "apple";
let str2 = "banana";

console.log(str1 < str2);        // true (lexicographic comparison)
console.log(str1.localeCompare(str2)); // -1 (str1 comes before str2)

// Case-insensitive comparison
console.log(str1.toLowerCase() === str2.toLowerCase());
```

### Regular Expressions with Strings
```javascript
let text = "The quick brown fox jumps over the lazy dog";

// match()
let matches = text.match(/the/gi); // ["The", "the"]

// search()
let position = text.search(/fox/); // 16

// replace() with regex
let replaced = text.replace(/the/gi, "a"); // "a quick brown fox jumps over a lazy dog"

// split() with regex
let words = text.split(/\s+/); // Split by whitespace
```

---

## 9. DOM Manipulation {#dom}

### Selecting Elements
```javascript
// By ID
let element = document.getElementById('myId');

// By class name
let elements = document.getElementsByClassName('myClass');

// By tag name
let paragraphs = document.getElementsByTagName('p');

// Query selector (CSS selectors)
let firstElement = document.querySelector('.myClass');
let allElements = document.querySelectorAll('.myClass');

// Advanced selectors
let specificElement = document.querySelector('div.container > p:first-child');
```

### Modifying Elements
```javascript
let element = document.getElementById('myElement');

// Content modification
element.innerHTML = '<strong>New HTML content</strong>';
element.textContent = 'New text content';
element.innerText = 'New inner text';

// Attribute manipulation
element.setAttribute('class', 'newClass');
element.getAttribute('class');
element.removeAttribute('class');
element.hasAttribute('class');

// Style manipulation
element.style.color = 'red';
element.style.backgroundColor = 'yellow';
element.style.fontSize = '16px';

// Class manipulation
element.classList.add('active');
element.classList.remove('inactive');
element.classList.toggle('highlight');
element.classList.contains('active');
```

### Creating and Inserting Elements
```javascript
// Create elements
let newDiv = document.createElement('div');
let newText = document.createTextNode('Hello World');

// Set properties
newDiv.textContent = 'New div content';
newDiv.className = 'new-div';

// Insert elements
let container = document.getElementById('container');
container.appendChild(newDiv);
container.insertBefore(newDiv, container.firstChild);

// Insert adjacent HTML
element.insertAdjacentHTML('beforebegin', '<p>Before element</p>');
element.insertAdjacentHTML('afterbegin', '<p>At start of element</p>');
element.insertAdjacentHTML('beforeend', '<p>At end of element</p>');
element.insertAdjacentHTML('afterend', '<p>After element</p>');
```

### Removing Elements
```javascript
let element = document.getElementById('myElement');

// Remove element
element.remove();

// Remove child
let parent = document.getElementById('parent');
let child = document.getElementById('child');
parent.removeChild(child);

// Clear all children
parent.innerHTML = '';
```

### Traversing the DOM
```javascript
let element = document.getElementById('myElement');

// Parent navigation
let parent = element.parentNode;
let parentElement = element.parentElement;

// Child navigation
let children = element.children;
let childNodes = element.childNodes;
let firstChild = element.firstElementChild;
let lastChild = element.lastElementChild;

// Sibling navigation
let nextSibling = element.nextElementSibling;
let prevSibling = element.previousElementSibling;
```

---

## 10. Events {#events}

### Event Handling
```javascript
// Method 1: HTML attribute
// <button onclick="handleClick()">Click me</button>

// Method 2: DOM property
let button = document.getElementById('myButton');
button.onclick = function() {
    console.log('Button clicked!');
};

// Method 3: addEventListener (recommended)
button.addEventListener('click', function(event) {
    console.log('Button clicked!');
    console.log(event);
});

// Arrow function event handler
button.addEventListener('click', (event) => {
    console.log('Arrow function handler');
});

// Named function handler
function handleClick(event) {
    console.log('Named function handler');
}
button.addEventListener('click', handleClick);
```

### Event Object
```javascript
button.addEventListener('click', function(event) {
    console.log('Event type:', event.type);
    console.log('Target element:', event.target);
    console.log('Current target:', event.currentTarget);
    console.log('Mouse coordinates:', event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop event propagation
    event.stopPropagation();
});
```

### Common Events
```javascript
// Mouse events
element.addEventListener('click', handler);
element.addEventListener('dblclick', handler);
element.addEventListener('mousedown', handler);
element.addEventListener('mouseup', handler);
element.addEventListener('mouseover', handler);
element.addEventListener('mouseout', handler);
element.addEventListener('mousemove', handler);

// Keyboard events
element.addEventListener('keydown', handler);
element.addEventListener('keyup', handler);
element.addEventListener('keypress', handler);

// Form events
form.addEventListener('submit', handler);
input.addEventListener('change', handler);
input.addEventListener('input', handler);
input.addEventListener('focus', handler);
input.addEventListener('blur', handler);

// Window events
window.addEventListener('load', handler);
window.addEventListener('resize', handler);
window.addEventListener('scroll', handler);
```

### Event Delegation
```javascript
// Instead of adding event listeners to each item
let list = document.getElementById('myList');

list.addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
});

// This works for dynamically added items too
let newItem = document.createElement('li');
newItem.textContent = 'New item';
list.appendChild(newItem); // Will also respond to clicks
```

### Custom Events
```javascript
// Create custom event
let customEvent = new CustomEvent('myCustomEvent', {
    detail: {
        message: 'Hello from custom event!',
        timestamp: Date.now()
    }
});

// Listen for custom event
element.addEventListener('myCustomEvent', function(event) {
    console.log('Custom event received:', event.detail);
});

// Dispatch custom event
element.dispatchEvent(customEvent);
```

---

## 11. Asynchronous JavaScript {#async}

### Callbacks
```javascript
// Basic callback
function fetchData(callback) {
    setTimeout(() => {
        let data = {id: 1, name: 'John'};
        callback(data);
    }, 1000);
}

fetchData(function(data) {
    console.log('Data received:', data);
});

// Callback hell example
getData(function(a) {
    getMoreData(a, function(b) {
        getEvenMoreData(b, function(c) {
            // This nesting can get out of hand
            console.log(c);
        });
    });
});
```

### Promises
```javascript
// Creating a Promise
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    
    setTimeout(() => {
        if (success) {
            resolve('Operation successful!');
        } else {
            reject('Operation failed!');
        }
    }, 1000);
});

// Using Promise
myPromise
    .then(result => {
        console.log(result);
        return 'Next step';
    })
    .then(nextResult => {
        console.log(nextResult);
    })
    .catch(error => {
        console.error(error);
    })
    .finally(() => {
        console.log('Promise completed');
    });

// Promise chaining
function fetchUser(id) {
    return new Promise((resolve) => {
        setTimeout(() => resolve({id, name: 'John'}), 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(['Post 1', 'Post 2']), 1000);
    });
}

fetchUser(1)
    .then(user => {
        console.log('User:', user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log('Posts:', posts);
    });
```

### Async/Await
```javascript
// Async function
async function fetchData() {
    try {
        let response = await fetch('https://api.example.com/data');
        let data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Using async function
async function main() {
    try {
        let data = await fetchData();
        console.log('Data:', data);
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

main();

// Async/await with multiple operations
async function processData() {
    try {
        let user = await fetchUser(1);
        let posts = await fetchPosts(user.id);
        let comments = await fetchComments(posts[0].id);
        
        return {user, posts, comments};
    } catch (error) {
        console.error('Error processing data:', error);
    }
}
```

### Promise Methods
```javascript
// Promise.all() - Wait for all promises
let promise1 = fetch('/api/data1');
let promise2 = fetch('/api/data2');
let promise3 = fetch('/api/data3');

Promise.all([promise1, promise2, promise3])
    .then(responses => {
        console.log('All requests completed');
        return Promise.all(responses.map(r => r.json()));
    })
    .then(data => {
        console.log('All data:', data);
    });

// Promise.race() - First to complete
Promise.race([promise1, promise2, promise3])
    .then(firstResponse => {
        console.log('First response:', firstResponse);
    });

// Promise.allSettled() - Wait for all, regardless of outcome
Promise.allSettled([promise1, promise2, promise3])
    .then(results => {
        results.forEach((result, index) => {
            if (result.status === 'fulfilled') {
                console.log(`Promise ${index} fulfilled:`, result.value);
            } else {
                console.log(`Promise ${index} rejected:`, result.reason);
            }
        });
    });
```

### Fetch API
```javascript
// GET request
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// POST request
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        title: 'New Post',
        body: 'This is the post content',
        userId: 1
    })
})
.then(response => response.json())
.then(data => console.log('Success:', data));

// Async/await with fetch
async function fetchPost(id) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        let post = await response.json();
        return post;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}
```

---

## 12. ES6+ Features {#es6}

### Let and Const
```javascript
// Block scoping
if (true) {
    let blockScoped = 'I am block scoped';
    const alsoBlockScoped = 'Me too';
    var functionScoped = 'I am function scoped';
}

// console.log(blockScoped); // ReferenceError
// console.log(alsoBlockScoped); // ReferenceError
console.log(functionScoped); // Works

// Const with objects and arrays
const obj = {name: 'John'};
obj.name = 'Jane'; // This works (modifying property)
// obj = {}; // This doesn't work (reassigning)

const arr = [1, 2, 3];
arr.push(4); // This works (modifying array)
// arr = []; // This doesn't work (reassigning)
```

### Template Literals
```javascript
let name = 'John';
let age = 30;

// Basic template literal
let message = `Hello, my name is ${name} and I am ${age} years old.`;

// Multi-line strings
let html = `
    <div class="user">
        <h2>${name}</h2>
        <p>Age: ${age}</p>
    </div>
`;

// Expression in template literals
let calculation = `The result is ${5 + 3 * 2}`;

// Tagged template literals
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => {
        let value = values[i] ? `<mark>${values[i]}</mark>` : '';
        return result + string + value;
    }, '');
}

let highlighted = highlight`Hello ${name}, you are ${age} years old!`;
```

### Destructuring Assignment
```javascript
// Array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;
console.log(first); // 1
console.log(rest);  // [3, 4, 5]

// Object destructuring
let person = {name: 'John', age: 30, city: 'NYC'};
let {name, age, country = 'USA'} = person;

// Renaming variables
let {name: fullName, age: years} = person;

// Nested destructuring
let user = {
    id: 1,
    profile: {
        name: 'John',
        email: 'john@example.com'
    }
};
let {profile: {name, email}} = user;

// Function parameter destructuring
function displayUser({name, age, city}) {
    console.log(`${name}, ${age}, ${city}`);
}
displayUser(person);
```

### Spread and Rest Operators
```javascript
// Spread with arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// Spread with objects
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};
let merged = {...obj1, ...obj2}; // {a: 1, b: 2, c: 3, d: 4}

// Rest parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5)); // 15

// Rest in destructuring
let [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
```

### Arrow Functions
```javascript
// Traditional function
function add(a, b) {
    return a + b;
}

// Arrow function
let add = (a, b) => a + b;

// Single parameter (parentheses optional)
let square = x => x * x;

// No parameters
let greet = () => 'Hello World!';

// Multiple statements
let processData = (data) => {
    let processed = data.map(item => item * 2);
    return processed.filter(item => item > 10);
};

// Arrow functions and 'this'
let obj = {
    name: 'John',
    regularFunction: function() {
        console.log(this.name); // 'John'
    },
    arrowFunction: () => {
        console.log(this.name); // undefined (or global)
    }
};
```

### Enhanced Object Literals
```javascript
let name = 'John';
let age = 30;

// Property shorthand
let person = {name, age}; // Same as {name: name, age: age}

// Method shorthand
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

// Computed property names
let propName = 'dynamicProperty';
let obj = {
    [propName]: 'dynamic value',
    ['computed' + 'Property']: 'another value'
};
```

### Classes
```javascript
// Class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Static method
    static species() {
        return 'Homo sapiens';
    }
    
    // Getter
    get info() {
        return `${this.name} is ${this.age} years old`;
    }
    
    // Setter
    set newAge(age) {
        if (age > 0) {
            this.age = age;
        }
    }
}

// Inheritance
class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Call parent constructor
        this.grade = grade;
    }
    
    study() {
        return `${this.name} is studying`;
    }
    
    // Override parent method
    greet() {
        return `${super.greet()}, I'm a student`;
    }
}

let john = new Person('John', 30);
let alice = new Student('Alice', 20, 'A');
```

### Modules
```javascript
// math.js - Named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// Default export
export default function multiply(a, b) {
    return a * b;
}

// main.js - Importing
import multiply, {add, subtract, PI} from './math.js';
import * as MathUtils from './math.js';

console.log(add(5, 3));
console.log(multiply(4, 6));
console.log(MathUtils.PI);
```

### Symbols
```javascript
// Creating symbols
let sym1 = Symbol();
let sym2 = Symbol('description');
let sym3 = Symbol('description');

console.log(sym2 === sym3); // false (each symbol is unique)

// Using symbols as object keys
let obj = {};
let symKey = Symbol('key');
obj[symKey] = 'value';

// Well-known symbols
let arr = [1, 2, 3];
console.log(arr[Symbol.iterator]); // Array iterator function
```

### Maps and Sets
```javascript
// Map
let map = new Map();
map.set('name', 'John');
map.set('age', 30);
map.set(1, 'number key');

console.log(map.get('name')); // 'John'
console.log(map.has('age'));  // true
console.log(map.size);        // 3

// Iterating over Map
for (let [key, value] of map) {
    console.log(key, value);
}

// Set
let set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate, won't be added

console.log(set.has(1)); // true
console.log(set.size);   // 2

// Set from array (removes duplicates)
let numbers = [1, 2, 2, 3, 3, 4];
let uniqueNumbers = new Set(numbers);
let uniqueArray = [...uniqueNumbers]; // [1, 2, 3, 4]
```

---

## 13. Object-Oriented Programming {#oop}

### Constructor Functions
```javascript
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding methods to prototype
Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

Person.prototype.getAge = function() {
    return this.age;
};

// Creating instances
let john = new Person('John', 30);
let jane = new Person('Jane', 25);

console.log(john.greet()); // "Hello, I'm John"
```

### Prototypes and Inheritance
```javascript
// Prototype chain
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    return `${this.name} makes a sound`;
};

function Dog(name, breed) {
    Animal.call(this, name); // Call parent constructor
    this.breed = breed;
}

// Set up inheritance
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add Dog-specific methods
Dog.prototype.bark = function() {
    return `${this.name} barks!`;
};

// Override parent method
Dog.prototype.speak = function() {
    return `${this.name} barks loudly!`;
};

let dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak()); // "Buddy barks loudly!"
console.log(dog.bark());  // "Buddy barks!"
```

### ES6 Classes
```javascript
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    static getKingdom() {
        return 'Animalia';
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name, 'Canine');
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
    
    wagTail() {
        return `${this.name} wags tail happily!`;
    }
}

let dog = new Dog('Buddy', 'Labrador');
console.log(dog.speak());    // "Buddy barks!"
console.log(dog.wagTail());  // "Buddy wags tail happily!"
console.log(Animal.getKingdom()); // "Animalia"
```

### Encapsulation
```javascript
// Private variables using closures
function BankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit: function(amount) {
            if (amount > 0) {
                balance += amount;
                return balance;
            }
        },
        withdraw: function(amount) {
            if (amount > 0 && amount <= balance) {
                balance -= amount;
                return balance;
            }
        },
        getBalance: function() {
            return balance;
        }
    };
}

let account = BankAccount(1000);
console.log(account.getBalance()); // 1000
account.deposit(500);
console.log(account.getBalance()); // 1500

// Private fields in ES2022
class ModernBankAccount {
    #balance;
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
        }
    }
    
    getBalance() {
        return this.#balance;
    }
}
```

### Polymorphism
```javascript
class Shape {
    area() {
        throw new Error('Area method must be implemented');
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    
    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Polymorphic behavior
let shapes = [
    new Rectangle(5, 10),
    new Circle(3),
    new Rectangle(8, 6)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});
```

---

## 14. Error Handling {#errors}

### Try-Catch-Finally
```javascript
// Basic try-catch
try {
    let result = riskyOperation();
    console.log(result);
} catch (error) {
    console.error('An error occurred:', error.message);
} finally {
    console.log('This always executes');
}

// Catching specific error types
try {
    JSON.parse('invalid json');
} catch (error) {
    if (error instanceof SyntaxError) {
        console.log('JSON syntax error');
    } else {
        console.log('Other error:', error);
    }
}
```

### Custom Errors
```javascript
// Custom error class
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class NetworkError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'NetworkError';
        this.statusCode = statusCode;
    }
}

// Using custom errors
function validateAge(age) {
    if (typeof age !== 'number') {
        throw new ValidationError('Age must be a number');
    }
    if (age < 0) {
        throw new ValidationError('Age cannot be negative');
    }
    if (age > 150) {
        throw new ValidationError('Age seems unrealistic');
    }
    return age;
}

try {
    validateAge(-5);
} catch (error) {
    if (error instanceof ValidationError) {
        console.log('Validation failed:', error.message);
    }
}
```

### Error Handling with Promises
```javascript
// Promise error handling
function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new NetworkError(`HTTP ${response.status}`, response.status);
            }
            return response.json();
        })
        .catch(error => {
            if (error instanceof NetworkError) {
                console.log('Network error:', error.message);
            } else {
                console.log('Other error:', error);
            }
            throw error; // Re-throw if needed
        });
}

// Async/await error handling
async function fetchUserData(userId) {
    try {
        let response = await fetch(`/api/users/${userId}`);
        
        if (!response.ok) {
            throw new NetworkError(`User not found`, response.status);
        }
        
        let userData = await response.json();
        return userData;
    } catch (error) {
        if (error instanceof NetworkError) {
            console.log('Failed to fetch user:', error.message);
        } else {
            console.log('Unexpected error:', error);
        }
        return null;
    }
}
```

### Global Error Handling
```javascript
// Unhandled promise rejections
window.addEventListener('unhandledrejection', event => {
    console.log('Unhandled promise rejection:', event.reason);
    event.preventDefault(); // Prevent default browser behavior
});

// Global error handler
window.addEventListener('error', event => {
    console.log('Global error:', event.error);
});

// For async errors
window.addEventListener('error', event => {
    if (event.error) {
        console.log('Script error:', event.error);
    }
});
```

---

## 15. Modules {#modules}

### ES6 Modules
```javascript
// math.js - Multiple named exports
export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export const PI = 3.14159;

// Default export
export default function multiply(a, b) {
    return a * b;
}

// Alternative export syntax
function divide(a, b) {
    return a / b;
}

const E = 2.71828;

export {divide, E};
```

```javascript
// main.js - Importing
import multiply, {add, subtract, PI} from './math.js';
import {divide, E} from './math.js';

// Import all as namespace
import * as MathUtils from './math.js';

// Renaming imports
import {add as sum, subtract as diff} from './math.js';

// Dynamic imports
async function loadMath() {
    const mathModule = await import('./math.js');
    console.log(mathModule.add(5, 3));
}
```

### CommonJS (Node.js)
```javascript
// math.js - CommonJS exports
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

module.exports = {
    add,
    subtract,
    PI: 3.14159
};

// Or individual exports
exports.multiply = function(a, b) {
    return a * b;
};
```

```javascript
// main.js - CommonJS imports
const {add, subtract, PI} = require('./math');
const math = require('./math');

console.log(add(5, 3));
console.log(math.PI);
```

### Module Patterns
```javascript
// Revealing Module Pattern
const Calculator = (function() {
    // Private variables and functions
    let result = 0;
    
    function log(operation, value) {
        console.log(`${operation}: ${value}`);
    }
    
    // Public API
    return {
        add: function(value) {
            result += value;
            log('Add', value);
            return this;
        },
        subtract: function(value) {
            result -= value;
            log('Subtract', value);
            return this;
        },
        getResult: function() {
            return result;
        },
        reset: function() {
            result = 0;
            return this;
        }
    };
})();

// Usage
Calculator.add(10).subtract(3).add(5);
console.log(Calculator.getResult()); // 12
```

---

## 16. Advanced Topics {#advanced}

### Closures Deep Dive
```javascript
// Closure with private variables
function createCounter(initialValue = 0) {
    let count = initialValue;
    
    return {
        increment: () => ++count,
        decrement: () => --count,
        getValue: () => count,
        reset: () => count = initialValue
    };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.getValue());  // 11

// Closure in loops (common gotcha)
// Wrong way
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 3, 3, 3
}

// Right way with closure
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); // Prints 0, 1, 2
}

// Or using IIFE
for (var i = 0; i < 3; i++) {
    (function(index) {
        setTimeout(() => console.log(index), 100);
    })(i);
}
```

### Prototypal Inheritance
```javascript
// Object.create() for inheritance
const animal = {
    speak: function() {
        return `${this.name} makes a sound`;
    }
};

const dog = Object.create(animal);
dog.name = 'Buddy';
dog.bark = function() {
    return `${this.name} barks!`;
};

console.log(dog.speak()); // "Buddy makes a sound"

// Prototype chain
console.log(dog.__proto__ === animal); // true
console.log(animal.isPrototypeOf(dog)); // true
```

### Function Methods (call, apply, bind)
```javascript
const person = {
    name: 'John',
    greet: function(greeting, punctuation) {
        return `${greeting}, I'm ${this.name}${punctuation}`;
    }
};

const anotherPerson = {name: 'Jane'};

// call() - invoke with specific 'this' and arguments
console.log(person.greet.call(anotherPerson, 'Hello', '!')); 
// "Hello, I'm Jane!"

// apply() - same as call but arguments as array
console.log(person.greet.apply(anotherPerson, ['Hi', '.'])); 
// "Hi, I'm Jane."

// bind() - create new function with bound 'this'
const boundGreet = person.greet.bind(anotherPerson);
console.log(boundGreet('Hey', '?')); // "Hey, I'm Jane?"

// Partial application with bind
const sayHello = person.greet.bind(anotherPerson, 'Hello');
console.log(sayHello('!')); // "Hello, I'm Jane!"
```

### Generators
```javascript
// Generator function
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
    return 'Done';
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 'Done', done: true}

// Infinite generator
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

const fib = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fib.next().value);
}

// Generator with parameters
function* parameterizedGenerator() {
    let value = yield 'First';
    yield `Received: ${value}`;
}

const paramGen = parameterizedGenerator();
console.log(paramGen.next());        // {value: 'First', done: false}
console.log(paramGen.next('Hello')); // {value: 'Received: Hello', done: false}
```

### Iterators
```javascript
// Custom iterator
const range = {
    start: 1,
    end: 5,
    
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        
        return {
            next() {
                if (current <= end) {
                    return {value: current++, done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

for (let num of range) {
    console.log(num); // 1, 2, 3, 4, 5
}

// Converting to array
const rangeArray = [...range]; // [1, 2, 3, 4, 5]
```

### Proxy and Reflect
```javascript
// Proxy for property access
const user = {
    name: 'John',
    age: 30
};

const userProxy = new Proxy(user, {
    get(target, property) {
        console.log(`Getting ${property}`);
        return target[property];
    },
    
    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        if (property === 'age' && value < 0) {
            throw new Error('Age cannot be negative');
        }
        target[property] = value;
        return true;
    }
});

console.log(userProxy.name); // Logs: "Getting name", then "John"
userProxy.age = 31;          // Logs: "Setting age to 31"

// Reflect API
const obj = {x: 1, y: 2};
console.log(Reflect.has(obj, 'x'));           // true
console.log(Reflect.get(obj, 'x'));           // 1
Reflect.set(obj, 'z', 3);
console.log(Reflect.ownKeys(obj));            // ['x', 'y', 'z']
```

### WeakMap and WeakSet
```javascript
// WeakMap - keys must be objects, garbage collected
const weakMap = new WeakMap();
let obj1 = {name: 'John'};
let obj2 = {name: 'Jane'};

weakMap.set(obj1, 'data for John');
weakMap.set(obj2, 'data for Jane');

console.log(weakMap.get(obj1)); // 'data for John'

// When obj1 is no longer referenced, it can be garbage collected
obj1 = null;

// WeakSet - similar to WeakMap but for sets
const weakSet = new WeakSet();
let element1 = {id: 1};
let element2 = {id: 2};

weakSet.add(element1);
weakSet.add(element2);

console.log(weakSet.has(element1)); // true
```

### Memory Management
```javascript
// Avoiding memory leaks

// 1. Remove event listeners
function setupEventListener() {
    const button = document.getElementById('myButton');
    const handler = () => console.log('Clicked');
    
    button.addEventListener('click', handler);
    
    // Clean up
    return () => {
        button.removeEventListener('click', handler);
    };
}

// 2. Clear timers
const timerId = setTimeout(() => {
    console.log('Timer executed');
}, 1000);

// Clear when no longer needed
clearTimeout(timerId);

// 3. Avoid circular references
function createCircularReference() {
    const obj1 = {};
    const obj2 = {};
    
    obj1.ref = obj2;
    obj2.ref = obj1; // Circular reference
    
    // Break the cycle when done
    obj1.ref = null;
    obj2.ref = null;
}
```

---

## Practice Exercises

### Beginner Level
1. Create a calculator with basic operations
2. Build a todo list with add/remove functionality
3. Implement a simple quiz application
4. Create a digital clock
5. Build a random quote generator

### Intermediate Level
1. Create a weather app using API
2. Build a shopping cart with local storage
3. Implement a simple game (tic-tac-toe)
4. Create a photo gallery with filters
5. Build a form validator

### Advanced Level
1. Create a single-page application (SPA)
2. Build a real-time chat application
3. Implement a data visualization dashboard
4. Create a progressive web app (PWA)
5. Build a mini framework/library

---

## Resources for Further Learning

### Documentation
- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [ECMAScript Specifications](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)

### Practice Platforms
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/)
- [Codewars](https://www.codewars.com/)
- [freeCodeCamp](https://www.freecodecamp.org/)

### Books
- "Eloquent JavaScript" by Marijn Haverbeke
- "You Don't Know JS" series by Kyle Simpson
- "JavaScript: The Good Parts" by Douglas Crockford

This comprehensive tutorial covers all major JavaScript concepts from basics to advanced topics. Practice regularly and build projects to reinforce your learning!