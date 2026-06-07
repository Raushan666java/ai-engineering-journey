# 🔧 JavaScript Functions

## Function Declaration
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

## Function Parameters
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

## Higher-Order Functions
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

## Closures
```javascript
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y; // Inner function has access to outer variable
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

## IIFE (Immediately Invoked Function Expression)
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

## Function Methods
```javascript
const person = {
    name: 'John',
    greet: function(greeting, punctuation) {
        return `${greeting}, I'm ${this.name}${punctuation}`;
    }
};

const anotherPerson = {name: 'Jane'};

// call() - invoke with specific 'this'
console.log(person.greet.call(anotherPerson, 'Hello', '!')); 

// apply() - same as call but arguments as array
console.log(person.greet.apply(anotherPerson, ['Hi', '.'])); 

// bind() - create new function with bound 'this'
const boundGreet = person.greet.bind(anotherPerson);
console.log(boundGreet('Hey', '?'));
```

## Recursion
```javascript
// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Tree traversal
function traverse(node) {
    console.log(node.value);
    if (node.children) {
        node.children.forEach(child => traverse(child));
    }
}
```