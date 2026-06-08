# 11. ES6+ Features in JavaScript

## What is ES6+?
- ES6 (ECMAScript 2015) and later versions introduced major improvements to JavaScript.
- Modern JavaScript (ES6+) is more concise, readable, and powerful.

## let and const
- `let`: Block-scoped variable, can be reassigned.
- `const`: Block-scoped constant, cannot be reassigned.
```js
let count = 5;
const PI = 3.14;
```

## Arrow Functions
- Shorter syntax for writing functions.
```js
const add = (a, b) => a + b;
```
- No own `this` binding (inherits from parent scope).

## Template Literals
- Use backticks (`` ` ``) for multi-line strings and interpolation.
```js
const name = 'Alice';
console.log(`Hello, ${name}!`);
```

## Destructuring Assignment
- Extract values from arrays or objects into variables.
```js
const [a, b] = [1, 2];
const {x, y} = {x: 10, y: 20};
```

## Default Parameters
- Set default values for function parameters.
```js
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
```

## Rest and Spread Operators
- Rest: Collects arguments into an array: `function sum(...args) {}`
- Spread: Expands arrays/objects: `const arr2 = [...arr1, 4]`

## Enhanced Object Literals
- Shorthand for properties and methods.
```js
const age = 25;
const person = { name, age, greet() { console.log('Hi'); } };
```

## Classes
- Syntactic sugar for constructor functions and prototypes.
```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' makes a noise.');
  }
}
```

## Modules
- Split code into reusable files using `export` and `import`.
```js
// math.js
export function add(a, b) { return a + b; }
// main.js
import { add } from './math.js';
```

## Promises and Async/Await
- Handle asynchronous operations more easily.
```js
// Promise
fetch('url').then(response => response.json()).then(data => console.log(data));
// Async/Await
async function getData() {
  const response = await fetch('url');
  const data = await response.json();
  console.log(data);
}
```

## Other Useful Features
- `for...of` loop for iterables
- `Map` and `Set` collections
- `Symbol` type
- Optional chaining: `obj?.prop`
- Nullish coalescing: `value ?? defaultValue`

## Best Practices for ES6+ Features
- Prefer `let` and `const` over `var`.
- Use arrow functions for concise callbacks.
- Modularize code for maintainability.
- Use destructuring and spread/rest for cleaner code.
- Embrace async/await for asynchronous code.

## Best Learning Methods for ES6+ Features
- **Practice:** Refactor old code to use ES6+ features.
- **Mini-Projects:** Build small apps using modern syntax.
- **Flashcards:** Memorize new syntax and features.
- **Compare:** Write the same logic in ES5 and ES6+ to see improvements.
- **Teach Back:** Explain ES6+ features to others.

---

Type "next" to get detailed notes for the next topic: Asynchronous JavaScript (Callbacks, Promises, Async/Await).
