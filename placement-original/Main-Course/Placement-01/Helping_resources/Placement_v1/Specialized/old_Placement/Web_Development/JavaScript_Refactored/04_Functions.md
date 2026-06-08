# Functions in JavaScript

## Learning Objectives
After completing this section, you will be able to:
- Create and use functions using different syntax styles
- Understand function parameters and return values
- Apply closures and higher-order functions
- Work with function scope and context
- Implement immediately invoked function expressions (IIFEs)

## Function Declaration and Expression

Functions are blocks of reusable code designed to perform specific tasks.

### Function Declaration

A function declaration defines a named function that is hoisted (available before the declaration in code).

#### Syntax:
```javascript
function functionName(parameters) {
  // function body
  return value; // optional
}
```

#### Example:
```javascript
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```

### Function Expression

A function expression defines a function as part of an expression, typically by assigning it to a variable. It is not hoisted.

#### Syntax:
```javascript
const functionName = function(parameters) {
  // function body
  return value; // optional
};
```

#### Example:
```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};

console.log(greet("Bob")); // "Hello, Bob!"
```

### Key Differences

1. **Hoisting**:
   - Function declarations are hoisted (can be called before they are defined)
   - Function expressions are not hoisted (must be defined before they are called)

2. **Usage**:
   - Function declarations are better for main functions in your code
   - Function expressions are useful for assigning functions to variables or passing as arguments

```javascript
// Function declaration hoisting
console.log(add(2, 3)); // Works! Outputs: 5
function add(a, b) {
  return a + b;
}

// Function expression - not hoisted
console.log(subtract(5, 2)); // Error: subtract is not a function
const subtract = function(a, b) {
  return a - b;
};
```

## Arrow Functions

Arrow functions provide a shorter syntax for writing functions and do not have their own `this` binding.

### Syntax:
```javascript
// Basic syntax
const functionName = (parameters) => {
  // function body
  return value;
};

// For single expressions, braces and return can be omitted
const functionName = (parameters) => expression;

// For a single parameter, parentheses can be omitted
const functionName = parameter => expression;
```

### Examples:
```javascript
// Arrow function with block body
const greet = (name) => {
  return `Hello, ${name}!`;
};

// Arrow function with expression body (implicit return)
const greet2 = (name) => `Hello, ${name}!`;

// Arrow function with single parameter (parentheses optional)
const double = num => num * 2;

// Arrow function with no parameters
const sayHello = () => "Hello!";

// Arrow function returning an object (requires parentheses)
const createPerson = (name, age) => ({ name, age });
```

### Key Features of Arrow Functions:

1. **No `this` binding**:
   - Arrow functions do not have their own `this`
   - They inherit `this` from the enclosing scope (lexical `this`)

2. **No `arguments` object**:
   - Arrow functions don't have their own `arguments` object
   - Use rest parameters instead

3. **Cannot be used as constructors**:
   - Arrow functions cannot be used with `new`

4. **No `super` or `new.target`**

5. **Cannot change `this` with call, apply, or bind**

```javascript
// Example showing lexical this
function Counter() {
  this.count = 0;
  
  // Traditional function creates its own this
  this.incrementBad = function() {
    setTimeout(function() {
      console.log(this.count++); // NaN - this refers to global object
    }, 1000);
  };
  
  // Arrow function inherits this from Counter
  this.incrementGood = function() {
    setTimeout(() => {
      console.log(this.count++); // Works correctly
    }, 1000);
  };
}

const counter = new Counter();
counter.incrementBad();  // NaN
counter.incrementGood(); // 0 (then increments)
```

## Parameters, Arguments, Default Parameters

### Parameters vs. Arguments
- **Parameters** are variables listed in the function definition
- **Arguments** are the values passed to the function when it is called

```javascript
// name and age are parameters
function introduce(name, age) {
  return `My name is ${name} and I am ${age} years old.`;
}

// "John" and 30 are arguments
introduce("John", 30);
```

### Default Parameters
Default parameters allow parameters to have default values if no argument is provided.

```javascript
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet());                  // "Hello, Guest!"
console.log(greet("Alice"));           // "Hello, Alice!"
console.log(greet("Bob", "Welcome"));  // "Welcome, Bob!"
```

### Rest Parameters
Rest parameters allow a function to accept an indefinite number of arguments as an array.

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2));       // 3
console.log(sum(1, 2, 3, 4)); // 10
```

### Parameter Destructuring
You can destructure objects and arrays directly in function parameters.

```javascript
// Object destructuring in parameters
function displayPerson({ name, age, job = "Unknown" }) {
  console.log(`${name} is ${age} years old and works as a ${job}`);
}

displayPerson({ name: "Alice", age: 28, job: "Developer" });
displayPerson({ name: "Bob", age: 32 }); // job defaults to "Unknown"

// Array destructuring in parameters
function displayCoordinates([x, y, z = 0]) {
  console.log(`X: ${x}, Y: ${y}, Z: ${z}`);
}

displayCoordinates([10, 20]);      // "X: 10, Y: 20, Z: 0"
displayCoordinates([5, 15, 25]);   // "X: 5, Y: 15, Z: 25"
```

## Return Values

Functions can return values using the `return` statement. If no return statement is specified, the function returns `undefined`.

```javascript
// Function with return value
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // 8

// Function without return statement
function greet(name) {
  console.log(`Hello, ${name}!`);
  // No return statement
}
const result = greet("Alice"); // Logs: "Hello, Alice!"
console.log(result); // undefined

// Early return
function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Old enough";
}
```

### Returning Multiple Values
JavaScript functions can only return a single value, but you can return multiple values using arrays or objects:

```javascript
// Return multiple values using an array
function getCoordinates() {
  return [10, 20, 30];
}
const [x, y, z] = getCoordinates();

// Return multiple values using an object
function getUserInfo() {
  return {
    name: "Alice",
    age: 28,
    isAdmin: false
  };
}
const { name, age, isAdmin } = getUserInfo();
```

## Scope: Global, Local, Block

Scope determines the accessibility of variables and functions in your code.

### Global Scope
Variables declared outside any function or block have global scope and can be accessed from anywhere.

```javascript
// Global variable
const globalVar = "I am global";

function testScope() {
  console.log(globalVar); // Accessible
}

testScope();
console.log(globalVar); // Accessible
```

### Local (Function) Scope
Variables declared inside a function have local scope and can only be accessed within that function.

```javascript
function testScope() {
  // Local variable
  const localVar = "I am local";
  console.log(localVar); // Accessible
}

testScope();
console.log(localVar); // Error: localVar is not defined
```

### Block Scope
Variables declared with `let` or `const` inside a block (enclosed by `{}`) have block scope.

```javascript
if (true) {
  // Block-scoped variable
  let blockVar = "I am block-scoped";
  const anotherBlockVar = "Me too";
  var notBlockScoped = "I am function-scoped";
  
  console.log(blockVar);        // Accessible
  console.log(anotherBlockVar); // Accessible
}

console.log(blockVar);        // Error: blockVar is not defined
console.log(anotherBlockVar); // Error: anotherBlockVar is not defined
console.log(notBlockScoped);  // Accessible (var is not block-scoped)
```

### Lexical Scope
Inner functions have access to variables in their outer (enclosing) functions.

```javascript
function outer() {
  const outerVar = "I am from outer";
  
  function inner() {
    const innerVar = "I am from inner";
    console.log(outerVar); // Can access outerVar
  }
  
  inner();
  console.log(innerVar); // Error: innerVar is not defined
}
```

## Closures

A closure is a function that remembers its outer variables and can access them even after the outer function has finished executing.

### Basic Closure Example:
```javascript
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
console.log(counter()); // 3

// Each counter is independent
const counter2 = createCounter();
console.log(counter2()); // 1
```

### Practical Uses of Closures:

1. **Data Privacy**:
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
    withdraw: function(amount) {
      if (amount > balance) {
        return "Insufficient funds";
      }
      balance -= amount;
      return balance;
    },
    getBalance: function() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);  // 150
account.withdraw(30); // 120
account.getBalance(); // 120
// balance variable is private and cannot be accessed directly
```

2. **Function Factories**:
```javascript
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

3. **Maintaining State in Callbacks**:
```javascript
function handleClick(message) {
  return function() {
    console.log(message);
  };
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");

btn1.addEventListener("click", handleClick("Button 1 clicked"));
btn2.addEventListener("click", handleClick("Button 2 clicked"));
```

## IIFE (Immediately Invoked Function Expression)

An IIFE is a function that runs as soon as it is defined. It's often used to create a private scope.

### Syntax:
```javascript
(function() {
  // code here
})();

// With parameters
(function(parameter) {
  // code here
})(argument);

// Arrow function IIFE
(() => {
  // code here
})();
```

### Examples:
```javascript
// Basic IIFE
(function() {
  const message = "Hello from IIFE!";
  console.log(message);
})();
// message is not accessible here

// IIFE with parameters
(function(name) {
  console.log(`Hello, ${name}!`);
})("Alice");

// IIFE with return value
const result = (function() {
  return "Result from IIFE";
})();
console.log(result); // "Result from IIFE"
```

### Use Cases for IIFEs:

1. **Avoiding Global Scope Pollution**:
```javascript
// Without IIFE - pollutes global scope
var counter = 0;
function increment() {
  counter++;
}

// With IIFE - keeps variables private
const counter = (function() {
  let count = 0;
  
  return {
    increment: function() {
      count++;
      return count;
    },
    reset: function() {
      count = 0;
      return count;
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
counter.reset();     // 0
```

2. **Creating Private Variables and Methods**:
```javascript
const calculator = (function() {
  // Private function
  function square(x) {
    return x * x;
  }
  
  // Public interface
  return {
    add: function(a, b) {
      return a + b;
    },
    squareSum: function(a, b) {
      return square(a + b);
    }
  };
})();

calculator.add(2, 3);      // 5
calculator.squareSum(2, 3); // 25
calculator.square(4);       // Error: square is not a function
```

## Callback Functions

A callback function is a function passed as an argument to another function, to be executed later.

### Basic Example:
```javascript
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!
```

### Anonymous Callback Functions:
```javascript
greet("Bob", function() {
  console.log("Nice to meet you!");
});

// With arrow function
greet("Charlie", () => {
  console.log("Have a great day!");
});
```

### Common Use Cases for Callbacks:

1. **Event Handling**:
```javascript
document.getElementById("myButton").addEventListener("click", function() {
  console.log("Button clicked!");
});
```

2. **Asynchronous Operations**:
```javascript
function fetchData(url, callback) {
  // Simulating async operation
  setTimeout(() => {
    const data = { id: 1, name: "Product" };
    callback(data);
  }, 1000);
}

fetchData("api/products", function(data) {
  console.log("Data received:", data);
});
```

3. **Array Methods**:
```javascript
const numbers = [1, 2, 3, 4, 5];

// forEach with callback
numbers.forEach(function(number) {
  console.log(number * 2);
});

// map with callback
const doubled = numbers.map(number => number * 2);
```

### Callback Hell and Solutions:
Nested callbacks can lead to "callback hell" - code that's difficult to read and maintain:

```javascript
// Callback hell example
fetchUser(userId, function(user) {
  fetchPosts(user.id, function(posts) {
    fetchComments(posts[0].id, function(comments) {
      displayComments(comments);
    });
  });
});

// Solutions:
// 1. Named functions
function handleComments(comments) {
  displayComments(comments);
}

function handlePosts(posts) {
  fetchComments(posts[0].id, handleComments);
}

function handleUser(user) {
  fetchPosts(user.id, handlePosts);
}

fetchUser(userId, handleUser);

// 2. Promises (covered in a later section)
// 3. Async/await (covered in a later section)
```

## Higher-Order Functions

Higher-order functions are functions that take other functions as arguments or return functions.

### Functions that Accept Functions:
```javascript
function operate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(operate(5, 3, add));      // 8
console.log(operate(5, 3, multiply)); // 15
```

### Functions that Return Functions:
```javascript
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name}!`;
  };
}

const sayHello = createGreeter("Hello");
const sayHi = createGreeter("Hi");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHi("Bob"));      // "Hi, Bob!"
```

### Common Higher-Order Functions in JavaScript:

1. **Array.prototype.map()**:
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
```

2. **Array.prototype.filter()**:
```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]
```

3. **Array.prototype.reduce()**:
```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

4. **Array.prototype.forEach()**:
```javascript
const fruits = ["apple", "banana", "orange"];
fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
```

5. **Array.prototype.sort()**:
```javascript
const numbers = [5, 2, 8, 1, 4];
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 4, 5, 8]
```

## Practical Applications

### Creating Utility Functions for Common Tasks

```javascript
// Utility function to format currency
function formatCurrency(amount, currency = "USD", locale = "en-US") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency
  }).format(amount);
}

// Utility function to validate email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Usage
console.log(formatCurrency(1234.56)); // "$1,234.56"
console.log(formatCurrency(1234.56, "EUR", "de-DE")); // "1.234,56 €"
console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid-email")); // false
```

### Implementing a Calculator with Different Operations

```javascript
function calculator() {
  // Private methods
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero");
    }
    return a / b;
  }
  
  // Public interface
  return {
    add,
    subtract,
    multiply,
    divide,
    calculate: function(a, b, operation) {
      switch (operation) {
        case "+": return add(a, b);
        case "-": return subtract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: throw new Error("Unknown operation");
      }
    }
  };
}

const calc = calculator();
console.log(calc.add(5, 3));        // 8
console.log(calc.calculate(10, 2, "/")); // 5
```

### Building a Function that Generates Other Functions

```javascript
// Function factory for validation functions
function createValidator(validationRule, errorMessage) {
  return function(value) {
    if (validationRule(value)) {
      return { valid: true, value };
    } else {
      return { valid: false, error: errorMessage };
    }
  };
}

// Create specific validators
const validateEmail = createValidator(
  value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  "Invalid email format"
);

const validatePassword = createValidator(
  value => value.length >= 8 && /[A-Z]/.test(value) && /[0-9]/.test(value),
  "Password must be at least 8 characters with at least one uppercase letter and one number"
);

const validateUsername = createValidator(
  value => /^[a-zA-Z0-9_]{3,20}$/.test(value),
  "Username must be 3-20 characters and contain only letters, numbers, and underscores"
);

// Usage
console.log(validateEmail("user@example.com")); // { valid: true, value: "user@example.com" }
console.log(validateEmail("invalid-email"));    // { valid: false, error: "Invalid email format" }
console.log(validatePassword("Passw0rd"));      // { valid: true, value: "Passw0rd" }
console.log(validatePassword("password"));      // { valid: false, error: "Password must be..." }
```

## Review Questions

1. **What is the difference between function declarations and expressions?**
   - How does hoisting affect function declarations versus expressions?
   - When would you choose one over the other?
   - How do they differ in terms of naming and usage?

2. **How do arrow functions differ from traditional functions?**
   - What is the behavior of `this` in arrow functions?
   - When should you avoid using arrow functions?
   - How do arrow functions handle the arguments object?

3. **Explain how closures work and provide a practical example.**
   - What is a closure and how is it formed?
   - Why are closures useful in JavaScript?
   - How do closures help with data privacy?
   - What potential issues can arise with closures (e.g., memory leaks)?

## Exercises

1. **Function Types Practice**
   - Create a function using function declaration that calculates the area of a circle
   - Create the same function using function expression
   - Create the same function using arrow function syntax
   - Compare the behavior of each implementation

2. **Closure Counter**
   - Create a function that returns a counter function
   - The counter should increment each time it's called
   - Add functionality to reset the counter
   - Create multiple independent counters and verify they maintain separate counts

3. **Function Composition**
   - Create several simple functions (e.g., double, square, addOne)
   - Create a compose function that takes multiple functions and returns a new function that applies them in sequence
   - Test your compose function with different combinations of functions

4. **Callback Implementation**
   - Create a function that takes an array and a callback function
   - The function should apply the callback to each element and return a new array
   - Implement your own versions of map, filter, and reduce using this pattern

## Additional Resources

- [MDN: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [JavaScript.info: Functions](https://javascript.info/function-basics)
- [JavaScript.info: Function expressions](https://javascript.info/function-expressions)
- [JavaScript.info: Arrow functions](https://javascript.info/arrow-functions)
- [JavaScript.info: Closures](https://javascript.info/closure)

## Next Steps
After mastering functions, you'll be ready to move on to objects and arrays in JavaScript, which will allow you to work with more complex data structures.