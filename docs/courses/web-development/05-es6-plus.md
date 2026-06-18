# Chapter 5 â€” ES6+ JavaScript

## Learning Objectives

By the end of this chapter, you will be able to:

1. Use `let` and `const` with proper understanding of block scoping and the temporal dead zone.
2. Write arrow functions with concise syntax and correct `this` binding.
3. Construct strings using template literals with embedded expressions and tagged templates.
4. Extract values using destructuring for both objects and arrays.
5. Use spread and rest operators for collection manipulation and function parameter handling.
6. Define and extend classes with private fields, static methods, and inheritance.
7. Organize code using ES modules with static and dynamic imports.
8. Compose asynchronous control flow using promises and `async`/`await`.
9. Use `Map`, `Set`, `WeakMap`, and `Symbol` for advanced data modeling.

## Theory

![ES6+ JavaScript Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/05-es6-plus.png)

### 5.1 Block-Scoped Declarations

ES6 introduced `let` and `const` to address the function-scoping pitfalls of `var`.

```javascript
// var ignores block scope
if (true) {
  var message = 'Hello';
}
console.log(message); // 'Hello' â€” leaks

// let respects block scope
if (true) {
  let greeting = 'Hello';
}
// console.log(greeting); // ReferenceError

// const requires initialization and prohibits reassignment
const PI = 3.14159;
// PI = 3; // TypeError

// const does not freeze object contents
const config = { theme: 'dark' };
config.theme = 'light'; // Allowed
// config = {}; // TypeError
```

### 5.2 Arrow Functions

Arrow functions provide concise syntax and inherit `this` from the enclosing lexical scope.

```javascript
// Single parameter, expression body
const square = (n) => n * n;

// Multiple parameters
const sum = (a, b) => a + b;

// Block body with explicit return
const process = (items) => {
  const filtered = items.filter((x) => x > 0);
  return filtered.map((x) => x * 2);
};

// No parameters
const now = () => Date.now();

// Returning an object literal (parenthesize)
const createUser = (name) => ({ name, role: 'user' });

// Lexical this â€” critical for callbacks
class Timer {
  constructor() {
    this.seconds = 0;
    setInterval(() => {
      this.seconds++; // `this` refers to Timer instance
    }, 1000);
  }
}

// Arrow functions have no `arguments` object
const logAll = (...args) => console.log(args); // Use rest instead
```

### 5.3 Template Literals

Template literals support string interpolation, multi-line strings, and tagged templates.

```javascript
const name = 'Alice';
const age = 30;

// Interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;

// Expressions inside ${}
const price = 29.99;
const formatted = `Total: $${(price * 1.08).toFixed(2)}`;

// Multi-line
const html = `
  <div class="card">
    <h2>${name}</h2>
    <p>Age: ${age}</p>
  </div>
`;

// Tagged templates â€” custom processing
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? `<strong>${values[i]}</strong>` : '';
    return `${result}${str}${value}`;
  }, '');
}

const name2 = 'Bob';
const rendered = highlight`Hello, ${name2}!`; // 'Hello, <strong>Bob</strong>!'
```

### 5.4 Destructuring

**Array destructuring:**

```javascript
const rgb = [255, 128, 64];
const [red, green, blue] = rgb;
console.log(red); // 255

// Skipping elements
const [, , third] = [10, 20, 30];

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]

// Default values
const [a = 1, b = 2] = [10]; // a=10, b=2

// Swapping
let x = 1, y = 2;
[x, y] = [y, x];
```

**Object destructuring:**

```javascript
const user = { id: 1, name: 'Alice', email: 'alice@example.com' };
const { name, email } = user;

// Renaming
const { name: fullName, email: mail } = user;

// Default values
const { role = 'user' } = user;

// Nested destructuring
const response = {
  data: { items: [{ id: 1 }, { id: 2 }], total: 2 },
};
const { data: { items, total } } = response;

// Function parameter destructuring
function renderUser({ name, email, role = 'user' }) {
  return `${name} (${email}) â€” ${role}`;
}
```

### 5.5 Spread and Rest

**Spread** expands iterables:

```javascript
// Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
const copy = [...arr1]; // Shallow copy
const max = Math.max(...arr1); // Pass as arguments

// Objects (ES2018)
const defaults = { theme: 'light', lang: 'en' };
const overrides = { theme: 'dark' };
const config = { ...defaults, ...overrides }; // { theme: 'dark', lang: 'en' }
```

**Rest** collects remaining values:

```javascript
function logAll(first, ...rest) {
  console.log(`First: ${first}`);
  console.log(`Rest: ${rest.join(', ')}`);
}

// Destructuring with rest
const [winner, ...runnersUp] = ['Alice', 'Bob', 'Charlie'];
// winner = 'Alice', runnersUp = ['Bob', 'Charlie']
```

### 5.6 Classes

ES6 classes are syntactic sugar over prototype-based inheritance:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }

  // Static method
  static classify() {
    return 'Animalia';
  }
}

class Dog extends Animal {
  #breed; // Private field (ES2022)

  constructor(name, breed) {
    super(name);
    this.#breed = breed;
  }

  // Override
  speak() {
    return `${this.name} barks.`;
  }

  // Private method
  #wagTail() {
    return 'Tail wagging';
  }

  get breed() {
    return this.#breed;
  }

  set breed(value) {
    if (typeof value !== 'string') throw new Error('Breed must be a string');
    this.#breed = value;
  }

  static create(name) {
    return new Dog(name, 'Unknown');
  }
}

const dog = new Dog('Rex', 'German Shepherd');
console.log(dog.speak()); // 'Rex barks.'
console.log(dog.breed);   // 'German Shepherd'
// console.log(dog.#breed); // SyntaxError â€” private
```

### 5.7 Modules

ES modules provide static, tree-shakeable module definitions.

**Named exports:**

```javascript
// utils/math.js
export const PI = 3.14159;
export function square(x) {
  return x * x;
}
export class Calculator {
  add(a, b) { return a + b; }
}
```

**Default export:**

```javascript
// utils/logger.js
export default class Logger {
  log(message) { console.log(`[LOG] ${message}`); }
}
```

**Importing:**

```javascript
// Named imports
import { PI, square, Calculator } from './utils/math.js';

// Default import
import Logger from './utils/logger.js';

// Mixed
import Logger, { PI, square } from './utils/math.js';

// Namespace import
import * as MathUtils from './utils/math.js';

// Rename imports
import { square as sq } from './utils/math.js';
```

**Dynamic imports** (returns a promise):

```javascript
const module = await import('./heavy-component.js');
module.render();

// Code splitting in practice
button.addEventListener('click', async () => {
  const { showDialog } = await import('./dialog.js');
  showDialog('Welcome!');
});
```

### 5.8 Promises

Promises represent eventual completion or failure of an asynchronous operation.

```javascript
// Creating a promise
function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) {
        resolve({ id, name: 'Alice' });
      } else {
        reject(new Error('Invalid user ID'));
      }
    }, 1000);
  });
}

// Consuming
fetchUser(1)
  .then((user) => console.log(user))
  .catch((error) => console.error(error))
  .finally(() => console.log('Done'));
```

**Promise combinators:**

```javascript
const p1 = fetch('/api/users');
const p2 = fetch('/api/roles');

// All â€” wait for all to settle, reject if any reject
const [users, roles] = await Promise.all([p1, p2]);

// allSettled â€” wait for all, never reject
const results = await Promise.allSettled([p1, p2]);
const fulfilled = results.filter((r) => r.status === 'fulfilled').map((r) => r.value);
const rejected = results.filter((r) => r.status === 'rejected').map((r) => r.reason);

// race â€” first settled (reject or resolve)
const fastest = await Promise.race([p1, p2]);

// any â€” first fulfilled, reject only if all reject (ES2021)
const firstSuccess = await Promise.any([p1, p2]);
```

### 5.9 Async / Await

`async`/`await` provides synchronous-style syntax for promise-based code.

```javascript
async function loadDashboard() {
  try {
    const user = await fetchUser(1);
    const posts = await fetch(`/api/users/${user.id}/posts`);
    const data = await posts.json();
    // Sequential â€” each waits for the previous
  } catch (error) {
    console.error('Failed to load dashboard:', error);
  }
}

// Parallel execution with await
async function loadParallel() {
  const [user, config] = await Promise.all([
    fetchUser(1),
    fetch('/api/config').then((r) => r.json()),
  ]);
  return { user, config };
}

// Top-level await (modules only)
const data = await fetch('/api/initial').then((r) => r.json());
```

### 5.10 Symbol, Map, Set, WeakMap

**Symbol** creates unique identifiers:

```javascript
const sym1 = Symbol('id');
const sym2 = Symbol('id');
console.log(sym1 === sym2); // false

const obj = {
  [sym1]: 'secret value',
  name: 'Alice',
};
Object.getOwnPropertySymbols(obj); // [Symbol(id)]
```

**Map** â€” key-value collections with any type as key:

```javascript
const userRoles = new Map();
userRoles.set('alice', 'admin');
userRoles.set('bob', 'user');
console.log(userRoles.get('alice')); // 'admin'
console.log(userRoles.has('charlie')); // false
console.log(userRoles.size); // 2

// Iteration
for (const [user, role] of userRoles) {
  console.log(`${user}: ${role}`);
}
```

**Set** â€” unique values:

```javascript
const tags = new Set(['react', 'javascript', 'react', 'css']);
console.log(tags.size); // 3
tags.add('html');
tags.delete('css');
console.log(tags.has('react')); // true

// Convert to array
const unique = [...tags];
```

**WeakMap** â€” keys must be objects, held weakly (no memory leak):

```javascript
const cache = new WeakMap();

function process(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const result = expensiveComputation(obj);
  cache.set(obj, result);
  return result;
}
```

## Summary

- `let` and `const` replace `var` with block scoping; `const` prevents reassignment.
- Arrow functions provide lexical `this` and concise syntax but lack `arguments`.
- Template literals support interpolation, multi-line strings, and tagged templates.
- Destructuring enables concise extraction from arrays and objects.
- Spread expands iterables; rest collects remaining values.
- ES6 classes support `super`, static methods, getters/setters, and private fields (`#`).
- ES modules use `export`/`import` with static analysis and dynamic `import()`.
- Promises and `async`/`await` provide composable asynchronous control flow.
- `Map`, `Set`, `WeakMap`, and `Symbol` extend the language's data modeling capabilities.

## Exercises

### Review Questions

1. Why can arrow functions not be used as constructors?
2. What is the difference between `Promise.all` and `Promise.allSettled`?
3. How does `WeakMap` differ from `Map` and in what scenarios is it preferable?
4. What does the `static` keyword mean in a class context?

### Application Problems

5. Rewrite the following code using `async`/`await` instead of promise chains: `fetch('/api/user').then(r => r.json()).then(u => fetch('/api/posts/' + u.id)).then(r => r.json()).then(posts => console.log(posts)).catch(console.error)`.
6. Create a `Cache` class that uses a `Map` internally with the following API: `get(key)`, `set(key, value, ttlSeconds)`, `delete(key)`, `clear()`. Items should auto-expire after their TTL.
7. Implement a deep merge function using spread and rest that recursively merges two objects into a new object, with later properties taking precedence.

### Challenge Problem

8. Implement an `EventBus` class (typed publish-subscribe system) using `Map` and `Symbol` that supports:
   - `on(event, handler)` â€” subscribe with optional symbol-based wildcard patterns
   - `off(event, handler)` â€” unsubscribe specific handler
   - `emit(event, payload)` â€” publish to all matching subscribers synchronously
   - `once(event, handler)` â€” auto-unsubscribe after first emission
   - Priority ordering: handlers with higher priority execute first
   - Middleware: `use(middlewareFn)` to intercept all events
   - Context: subscribers should not be able to affect each other through shared mutable state in the payload
   Demonstrate with test assertions.
