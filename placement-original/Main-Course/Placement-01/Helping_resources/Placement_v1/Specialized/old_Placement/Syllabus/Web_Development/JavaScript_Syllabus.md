# 🟨 JavaScript - Complete Syllabus
*Duration: 4-5 weeks | Focus: Modern JavaScript Development*

## Week 1: JavaScript Fundamentals 🟢

### JavaScript Basics
**Variables & Data Types**
```javascript
// Variables
let name = "John";
const age = 30;
var isStudent = true; // Older syntax

// Data Types
// Primitives
let string = "Hello";
let number = 42;
let boolean = true;
let nullValue = null;
let undefinedValue;
let symbol = Symbol("unique");
let bigInt = 9007199254740991n;

// Reference Types
let array = [1, 2, 3, "four", true];
let object = { name: "John", age: 30 };
let func = function() { return "Hello"; };
let date = new Date();
let regExp = /pattern/;
let map = new Map();
let set = new Set();

// Type Checking
typeof string;  // "string"
typeof number;  // "number"
typeof boolean; // "boolean"
Array.isArray(array); // true
```

**Operators & Expressions**
```javascript
// Arithmetic Operators
let sum = 5 + 3;
let difference = 10 - 5;
let product = 4 * 2;
let quotient = 20 / 5;
let remainder = 10 % 3;
let exponent = 2 ** 3;

// Increment/Decrement
let x = 5;
x++; // x = 6
x--; // x = 5

// Assignment Operators
let y = 10;
y += 5; // y = 15
y -= 3; // y = 12
y *= 2; // y = 24
y /= 6; // y = 4

// Comparison Operators
5 == "5";  // true (loose equality)
5 === "5"; // false (strict equality)
5 != "5";  // false
5 !== "5"; // true
5 > 3;     // true
5 >= 5;    // true
3 < 5;     // true
3 <= 3;    // true

// Logical Operators
let a = true && false; // false (AND)
let b = true || false; // true (OR)
let c = !true;         // false (NOT)

// Ternary Operator
let status = age >= 18 ? "Adult" : "Minor";

// Nullish Coalescing
let username = null;
let displayName = username ?? "Guest"; // "Guest"
```

**Control Flow**
```javascript
// Conditional Statements
// if-else
let score = 85;

if (score >= 90) {
    console.log("A grade");
} else if (score >= 80) {
    console.log("B grade");
} else if (score >= 70) {
    console.log("C grade");
} else {
    console.log("Failed");
}

// switch
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of work week");
        break;
    case "Friday":
        console.log("End of work week");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Midweek");
}

// Loops
// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// for...of (arrays, strings, etc.)
let colors = ["red", "green", "blue"];
for (let color of colors) {
    console.log(color);
}

// for...in (objects)
let person = { name: "John", age: 30 };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
```

**Functions**
```javascript
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expression
const sayHello = function(name) {
    return "Hello, " + name + "!";
};

// Arrow Function
const welcome = (name) => {
    return "Welcome, " + name + "!";
};

// Simplified Arrow Function
const add = (a, b) => a + b;

// Default Parameters
function createUser(name, age = 18) {
    return { name, age };
}

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function Scope
let globalVar = "I'm global";

function scopeExample() {
    let localVar = "I'm local";
    console.log(globalVar); // Accessible
    console.log(localVar);  // Accessible
}

// console.log(localVar); // Error: localVar is not defined

// Immediately Invoked Function Expression (IIFE)
(function() {
    let privateVar = "I'm private";
    console.log("IIFE executed");
})();
```

## Week 2: JavaScript Objects & Arrays 🟡

### Objects & Arrays
**Objects**
```javascript
// Object Creation
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA"
    },
    isEmployed: true,
    hobbies: ["reading", "gaming", "coding"],
    greet: function() {
        return `Hello, my name is ${this.firstName} ${this.lastName}`;
    }
};

// Accessing Properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Adding/Modifying Properties
person.email = "john@example.com";
person.age = 31;

// Deleting Properties
delete person.isEmployed;

// Object Methods
Object.keys(person); // ["firstName", "lastName", "age", ...]
Object.values(person); // ["John", "Doe", 31, ...]
Object.entries(person); // [["firstName", "John"], ["lastName", "Doe"], ...]
Object.assign({}, person, { age: 32 }); // Clone and modify

// Destructuring
const { firstName, lastName, address: { city } } = person;
console.log(firstName, lastName, city); // John Doe Boston

// Shorthand Property Names
const name = "John";
const age = 30;
const user = { name, age }; // { name: "John", age: 30 }

// Computed Property Names
const key = "favoriteColor";
const preferences = {
    [key]: "blue"
};
```

**Arrays**
```javascript
// Array Creation
let fruits = ["apple", "banana", "orange"];
let mixed = [1, "two", true, { key: "value" }, [5, 6]];
let numbers = Array(1, 2, 3, 4, 5);

// Accessing Elements
console.log(fruits[0]); // "apple"
console.log(fruits[fruits.length - 1]); // "orange"

// Modifying Arrays
fruits.push("grape"); // Add to end
fruits.unshift("strawberry"); // Add to beginning
fruits.pop(); // Remove from end
fruits.shift(); // Remove from beginning
fruits.splice(1, 1, "kiwi"); // Remove and insert

// Array Methods
// Iteration
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});

// Transformation
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
const longFruits = fruits.filter(fruit => fruit.length > 5);
const allLong = fruits.every(fruit => fruit.length > 3);
const someLong = fruits.some(fruit => fruit.length > 5);
const orangeIndex = fruits.findIndex(fruit => fruit === "orange");
const kiwi = fruits.find(fruit => fruit === "kiwi");

// Aggregation
const nums = [1, 2, 3, 4, 5];
const sum = nums.reduce((total, num) => total + num, 0);
const max = Math.max(...nums);

// Sorting
fruits.sort(); // Alphabetical
nums.sort((a, b) => a - b); // Numerical

// Other Methods
const fruitString = fruits.join(", ");
const newArray = fruits.concat(["melon", "pear"]);
const sliced = fruits.slice(1, 3);
const reversed = [...fruits].reverse();

// Array Destructuring
const [first, second, ...rest] = fruits;
console.log(first, second, rest); // "apple" "banana" ["orange", "kiwi"]

// Spread Operator
const combined = [...fruits, ...nums];
const copy = [...fruits];
```

**JSON**
```javascript
// Converting Objects to JSON
const user = {
    name: "John",
    age: 30,
    isAdmin: false,
    courses: ["html", "css", "js"],
    spouse: null
};

const json = JSON.stringify(user);
console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"spouse":null}

// Converting JSON to Objects
const parsedUser = JSON.parse(json);
console.log(parsedUser.name); // "John"

// JSON with Dates
const event = {
    title: "Conference",
    date: new Date(2023, 0, 15), // January 15, 2023
};

const eventJson = JSON.stringify(event);
console.log(eventJson); // {"title":"Conference","date":"2023-01-15T00:00:00.000Z"}

// Custom JSON Serialization
const specialObject = {
    data: "Hidden data",
    toJSON() {
        return {
            visibleData: "Public data"
        };
    }
};

console.log(JSON.stringify(specialObject)); // {"visibleData":"Public data"}
```

## Week 3: Advanced JavaScript 🟠

### Advanced Concepts
**Scope & Closures**
```javascript
// Global Scope
var globalVar = "I'm global";
let globalLet = "I'm also global";

// Function Scope
function exampleFunction() {
    var functionVar = "I'm function-scoped";
    console.log(globalVar); // Accessible
}

// Block Scope
if (true) {
    var varInBlock = "I'm not block-scoped";
    let letInBlock = "I'm block-scoped";
    const constInBlock = "I'm also block-scoped";
}
console.log(varInBlock); // Accessible
// console.log(letInBlock); // Error: not defined

// Closures
function createCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2

// Practical Closure Example
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**this Keyword & Prototypes**
```javascript
// 'this' in Global Context
console.log(this); // Window object (in browser)

// 'this' in Function Context
function checkThis() {
    console.log(this);
}
checkThis(); // Window object (in browser, non-strict mode)

// 'this' in Object Methods
const user = {
    name: "John",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
user.greet(); // "Hello, I'm John"

// 'this' in Event Handlers
button.addEventListener("click", function() {
    console.log(this); // The button element
});

// Arrow Functions and 'this'
const user2 = {
    name: "Jane",
    hobbies: ["reading", "gaming"],
    showHobbies() {
        this.hobbies.forEach(hobby => {
            // Arrow function inherits 'this' from parent scope
            console.log(`${this.name} likes ${hobby}`);
        });
    }
};
user2.showHobbies();

// Explicit 'this' Binding
function introduce(greeting) {
    console.log(`${greeting}, I'm ${this.name}`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

introduce.call(person1, "Hi"); // "Hi, I'm Alice"
introduce.apply(person2, ["Hello"]); // "Hello, I'm Bob"
const bobIntroduce = introduce.bind(person2);
bobIntroduce("Hey"); // "Hey, I'm Bob"

// Prototypes
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, I'm John"

// Prototype Chain
console.log(john.__proto__ === Person.prototype); // true
console.log(Person.prototype.__proto__ === Object.prototype); // true
```

**ES6+ Features**
```javascript
// Classes
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a noise.`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks!`;
    }
}

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // "Rex barks!"

// Template Literals
const name = "John";
const greeting = `Hello, ${name}!
Welcome to our website.`;

// Destructuring
const [first, ...rest] = [1, 2, 3, 4];
const { firstName, lastName, ...otherInfo } = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    job: "Developer"
};

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };

// Default Parameters
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

// Rest Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Arrow Functions
const square = x => x * x;
const add = (a, b) => a + b;

// Enhanced Object Literals
const x = 1, y = 2;
const obj = {
    x,
    y,
    calculate() {
        return this.x + this.y;
    }
};

// Modules
// file: math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }

// file: app.js
import { PI, add } from './math.js';
import * as math from './math.js';

// Promises
const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve({ data: "Success!" });
            } else {
                reject(new Error("Failed to fetch data"));
            }
        }, 1000);
    });
};

fetchData()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Async/Await
async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Optional Chaining
const user = {
    details: {
        address: {
            street: "123 Main St"
        }
    }
};
const street = user?.details?.address?.street;

// Nullish Coalescing
const value = null;
const defaultValue = value ?? "Default";
```

## Week 4: DOM & Browser APIs 🟠

### DOM Manipulation
**DOM Basics**
```javascript
// Selecting Elements
const element = document.getElementById("myId");
const elements = document.getElementsByClassName("myClass");
const tags = document.getElementsByTagName("div");
const queryElement = document.querySelector(".myClass");
const queryElements = document.querySelectorAll("div.item");

// Traversing the DOM
const parent = element.parentNode;
const children = element.children;
const nextSibling = element.nextElementSibling;
const prevSibling = element.previousElementSibling;
const firstChild = element.firstElementChild;
const lastChild = element.lastElementChild;

// Manipulating Elements
// Content
element.textContent = "New text content";
element.innerHTML = "<span>HTML content</span>";
element.innerText = "Visible text";

// Attributes
element.setAttribute("id", "newId");
element.getAttribute("class");
element.removeAttribute("disabled");
element.hasAttribute("data-value");

// Classes
element.classList.add("active");
element.classList.remove("hidden");
element.classList.toggle("visible");
element.classList.contains("selected");
element.classList.replace("old", "new");

// Styles
element.style.color = "red";
element.style.backgroundColor = "#f0f0f0";
element.style.fontSize = "16px";
element.style.display = "none";

// Creating and Modifying Elements
const newDiv = document.createElement("div");
newDiv.textContent = "New Element";
newDiv.classList.add("container");

// Adding to DOM
parent.appendChild(newDiv);
parent.insertBefore(newDiv, referenceElement);
parent.replaceChild(newDiv, oldElement);
parent.removeChild(oldElement);

// Modern Methods
parent.append(newDiv, "Text node");
parent.prepend(newDiv);
element.before(newDiv);
element.after(newDiv);
element.replaceWith(newDiv);
element.remove();

// Fragment for Batch Operations
const fragment = document.createDocumentFragment();
for (let i = 0; i < 3; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}
document.querySelector("ul").appendChild(fragment);
```

**Events**
```javascript
// Event Handlers
const button = document.querySelector("button");

// Method 1: HTML attribute (not recommended)
// <button onclick="handleClick()">Click me</button>

// Method 2: DOM property
button.onclick = function() {
    console.log("Button clicked!");
};

// Method 3: addEventListener (recommended)
button.addEventListener("click", function(event) {
    console.log("Button clicked!", event);
});

// Removing Event Listeners
function handleClick(event) {
    console.log("Clicked", event);
}

button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick);

// Event Object
button.addEventListener("click", function(event) {
    console.log("Event type:", event.type);
    console.log("Target:", event.target);
    console.log("Current target:", event.currentTarget);
    console.log("Coordinates:", event.clientX, event.clientY);
    
    // Prevent default behavior
    event.preventDefault();
    
    // Stop propagation
    event.stopPropagation();
});

// Event Delegation
document.querySelector("ul").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        console.log("List item clicked:", event.target.textContent);
    }
});

// Common Events
// Mouse Events
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mousedown", handler);
element.addEventListener("mouseup", handler);
element.addEventListener("mouseover", handler);
element.addEventListener("mouseout", handler);
element.addEventListener("mousemove", handler);

// Keyboard Events
document.addEventListener("keydown", handler);
document.addEventListener("keyup", handler);
document.addEventListener("keypress", handler);

// Form Events
form.addEventListener("submit", handler);
input.addEventListener("input", handler);
input.addEventListener("change", handler);
input.addEventListener("focus", handler);
input.addEventListener("blur", handler);

// Document/Window Events
window.addEventListener("load", handler);
window.addEventListener("DOMContentLoaded", handler);
window.addEventListener("resize", handler);
window.addEventListener("scroll", handler);
```

### Browser APIs
**Fetch API**
```javascript
// Basic Fetch
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('Fetch error:', error));

// Fetch with Options
fetch('https://api.example.com/posts', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer token123'
    },
    body: JSON.stringify({
        title: 'New Post',
        content: 'This is a new post'
    })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

// Async/Await with Fetch
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
    }
}

// Aborting Fetch Requests
const controller = new AbortController();
const signal = controller.signal;

fetch('https://api.example.com/data', { signal })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error('Fetch error:', error);
        }
    });

// Abort after 5 seconds
setTimeout(() => controller.abort(), 5000);
```

**Local Storage & Session Storage**
```javascript
// Local Storage (persists after browser close)
// Store data
localStorage.setItem('username', 'john_doe');
localStorage.setItem('preferences', JSON.stringify({
    theme: 'dark',
    fontSize: 16
}));

// Retrieve data
const username = localStorage.getItem('username');
const preferences = JSON.parse(localStorage.getItem('preferences'));

// Remove data
localStorage.removeItem('username');

// Clear all data
localStorage.clear();

// Session Storage (cleared after browser close)
// Store data
sessionStorage.setItem('token', 'abc123');

// Retrieve data
const token = sessionStorage.getItem('token');

// Remove data
sessionStorage.removeItem('token');

// Clear all data
sessionStorage.clear();

// Storage Event (triggered when storage changes in other tabs)
window.addEventListener('storage', function(event) {
    console.log('Storage changed:', event.key, event.oldValue, event.newValue);
});
```

## Week 5: Modern JavaScript Development 🔴

### Asynchronous JavaScript
**Promises & Async/Await**
```javascript
// Creating Promises
const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    setTimeout(() => {
        const success = true;
        if (success) {
            resolve('Operation successful');
        } else {
            reject(new Error('Operation failed'));
        }
    }, 1000);
});

// Consuming Promises
promise
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
        console.log('Promise settled (fulfilled or rejected)');
    });

// Promise Methods
// Promise.all - waits for all promises to resolve
Promise.all([
    fetch('/api/users'),
    fetch('/api/posts'),
    fetch('/api/comments')
])
.then(responses => Promise.all(responses.map(res => res.json())))
.then(([users, posts, comments]) => {
    console.log(users, posts, comments);
})
.catch(error => console.error('One or more requests failed:', error));

// Promise.race - resolves/rejects when the first promise resolves/rejects
Promise.race([
    fetch('/api/data'),
    new Promise((_, reject) => setTimeout(() => reject(new Error('Timeout')), 5000))
])
.then(response => response.json())
.catch(error => console.error('Race failed:', error));

// Promise.allSettled - waits for all promises to settle
Promise.allSettled([
    Promise.resolve('Success'),
    Promise.reject('Failure'),
    Promise.resolve('Another success')
])
.then(results => {
    results.forEach(result => {
        if (result.status === 'fulfilled') {
            console.log('Fulfilled:', result.value);
        } else {
            console.log('Rejected:', result.reason);
        }
    });
});

// Async/Await
async function fetchUserData(userId) {
    try {
        const response = await fetch(`/api/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found');
        }
        const userData = await response.json();
        
        // Sequential requests
        const postsResponse = await fetch(`/api/users/${userId}/posts`);
        const posts = await postsResponse.json();
        
        return {
            user: userData,
            posts: posts
        };
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error; // Re-throw to allow caller to handle
    }
}

// Parallel requests with async/await
async function fetchDashboardData(userId) {
    try {
        // Start both requests in parallel
        const userPromise = fetch(`/api/users/${userId}`).then(res => res.json());
        const postsPromise = fetch(`/api/users/${userId}/posts`).then(res => res.json());
        
        // Wait for both to complete
        const [user, posts] = await Promise.all([userPromise, postsPromise]);
        
        return { user, posts };
    } catch (error) {
        console.error('Error fetching dashboard data:', error);
        throw error;
    }
}
```

**Error Handling**
```javascript
// Try/Catch
try {
    // Code that might throw an error
    const data = JSON.parse('{"name": "John"}');
    console.log(data);
} catch (error) {
    console.error('Error parsing JSON:', error);
} finally {
    console.log('This runs regardless of success or failure');
}

// Error Types
try {
    // Different error types
    throw new Error('Generic error');
    throw new SyntaxError('Invalid syntax');
    throw new TypeError('Type mismatch');
    throw new ReferenceError('Variable not defined');
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error('Syntax error:', error.message);
    } else if (error instanceof TypeError) {
        console.error('Type error:', error.message);
    } else {
        console.error('Generic error:', error.message);
    }
}

// Custom Errors
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

function validateUser(user) {
    if (!user.name) {
        throw new ValidationError('Name is required');
    }
    if (!user.email) {
        throw new ValidationError('Email is required');
    }
}

try {
    validateUser({ name: 'John' });
} catch (error) {
    if (error instanceof ValidationError) {
        console.error('Validation failed:', error.message);
    } else {
        console.error('Unknown error:', error);
    }
}

// Async Error Handling
async function fetchData() {
    try {
        const response = await fetch('/api/data');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Fetch error:', error);
        // Rethrow or return a default value
        throw error; // or return { error: true };
    }
}

// Promise Error Handling
fetchData()
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error in fetchData:', error);
        // Handle error or provide fallback
        return { error: true, fallback: true };
    })
    .finally(() => {
        console.log('Fetch operation complete');
    });
```

### Modern JavaScript Tools
**Modules**
```javascript
// Named Exports (math.js)
export const PI = 3.14159;
export function add(a, b) {
    return a + b;
}
export function subtract(a, b) {
    return a - b;
}

// Default Export (user.js)
export default class User {
    constructor(name) {
        this.name = name;
    }
    
    sayHello() {
        return `Hello, I'm ${this.name}`;
    }
}

// Mixed Exports (utils.js)
export function formatDate(date) {
    return date.toLocaleDateString();
}

export const API_URL = 'https://api.example.com';

export default function request(url) {
    return fetch(url).then(res => res.json());
}

// Importing
// Named imports
import { PI, add } from './math.js';
console.log(PI); // 3.14159
console.log(add(2, 3)); // 5

// Default import
import User from './user.js';
const user = new User('John');
console.log(user.sayHello()); // "Hello, I'm John"

// Mixed imports
import request, { formatDate, API_URL } from './utils.js';
console.log(API_URL); // "https://api.example.com"
console.log(formatDate(new Date())); // "5/12/2023" (locale dependent)

// Namespace import
import * as math from './math.js';
console.log(math.PI); // 3.14159
console.log(math.add(2, 3)); // 5

// Dynamic import
async function loadModule() {
    try {
        const module = await import('./dynamic-module.js');
        module.default(); // Call default export
    } catch (error) {
        console.error('Error loading module:', error);
    }
}
```

**ES Modules vs CommonJS**
```javascript
// CommonJS (Node.js)
// Exporting in CommonJS
const PI = 3.14159;
function add(a, b) {
    return a + b;
}

module.exports = {
    PI,
    add
};

// Or for default export:
module.exports = function() {
    console.log('Default export');
};

// Importing in CommonJS
const math = require('./math');
console.log(math.PI); // 3.14159

// Destructuring in CommonJS
const { PI, add } = require('./math');
console.log(add(2, 3)); // 5

// ES Modules in Node.js
// package.json: { "type": "module" }
// Or use .mjs extension

// Importing CommonJS in ES Modules
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const legacyModule = require('./legacy-module');
```

## Interview Preparation

### Common JavaScript Interview Questions
1. Explain the difference between `let`, `const`, and `var`.
2. What is hoisting in JavaScript?
3. Explain closures and provide an example.
4. What is the difference between `==` and `===`?
5. How does `this` keyword work in JavaScript?
6. Explain event delegation and its benefits.
7. What are Promises and how do they work?
8. What is the difference between synchronous and asynchronous code?
9. Explain the event loop in JavaScript.
10. What are arrow functions and how do they differ from regular functions?

### JavaScript Best Practices
- Use `const` by default, `let` when needed, avoid `var`
- Prefer modern ES6+ features
- Use strict equality (`===`) over loose equality (`==`)
- Handle errors properly with try/catch
- Use async/await for asynchronous code
- Avoid global variables
- Use descriptive variable and function names
- Write modular, reusable code
- Use linting tools (ESLint) and follow style guides
- Write unit tests for your code

## Resources
- **Documentation**: [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Books**: "Eloquent JavaScript", "You Don't Know JS"
- **Practice**: [JavaScript30](https://javascript30.com/), [LeetCode](https://leetcode.com/)
- **Tools**: [ESLint](https://eslint.org/), [Prettier](https://prettier.io/)
- **Learning**: [freeCodeCamp](https://www.freecodecamp.org/), [JavaScript.info](https://javascript.info/)