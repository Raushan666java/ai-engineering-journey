# 🚀 JavaScript ES6+ Features

## Let and Const
```javascript
// Block scoping
if (true) {
    let blockScoped = 'I am block scoped';
    const alsoBlockScoped = 'Me too';
    var functionScoped = 'I am function scoped';
}

// Const with objects and arrays
const obj = {name: 'John'};
obj.name = 'Jane'; // This works (modifying property)
// obj = {}; // This doesn't work (reassigning)

const arr = [1, 2, 3];
arr.push(4); // This works (modifying array)
// arr = []; // This doesn't work (reassigning)
```

## Template Literals
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

## Destructuring Assignment
```javascript
// Array destructuring
let numbers = [1, 2, 3, 4, 5];
let [first, second, ...rest] = numbers;

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
```

## Spread and Rest Operators
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

// Rest in destructuring
let [head, ...tail] = [1, 2, 3, 4, 5];
```

## Arrow Functions
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
        console.log(this.name); // undefined
    }
};
```

## Classes
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
        super(name, age);
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
```

## Modules
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

## Symbols
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

## Maps and Sets
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

## Default Parameters
```javascript
// Default function parameters
function greet(name = 'Guest', greeting = 'Hello') {
    return `${greeting}, ${name}!`;
}

console.log(greet()); // "Hello, Guest!"
console.log(greet('John')); // "Hello, John!"
console.log(greet('Jane', 'Hi')); // "Hi, Jane!"

// Default with destructuring
function createUser({name = 'Anonymous', age = 0, city = 'Unknown'} = {}) {
    return {name, age, city};
}
```

## Enhanced Object Literals
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