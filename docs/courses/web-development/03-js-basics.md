# Chapter 3 â€” JavaScript Basics

## Learning Objectives

By the end of this chapter, you will be able to:

1. Declare variables using `var`, `let`, and `const` and explain the differences in scope and hoisting.
2. Identify and use JavaScript primitive types and reference types with `typeof` and `instanceof`.
3. Apply modern operators including optional chaining, nullish coalescing, spread/rest, and strict equality.
4. Write control flow statements with loops, conditionals, and `switch`.
5. Define and invoke functions using declarations, expressions, and arrow functions.
6. Manipulate objects and arrays using destructuring, spread, and modern methods.

## Theory

![JavaScript Basics Mindmap](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/web-development/03-javascript-basics.png)

### 3.1 Variables

JavaScript provides three variable declaration keywords, each with distinct scoping rules.

```javascript
// var â€” function-scoped, hoisted, can be redeclared
var x = 10;
if (true) {
  var x = 20; // Same variable â€” leaks out of block
}
console.log(x); // 20

// let â€” block-scoped, hoisted but not initialized (TDZ)
let y = 10;
if (true) {
  let y = 20; // Different variable â€” block-scoped
}
console.log(y); // 10

// const â€” block-scoped, must be initialized, cannot be reassigned
const z = 30;
// z = 40; // TypeError: Assignment to constant variable

// const does NOT make objects immutable
const obj = { a: 1 };
obj.a = 2; // Allowed
```

**Temporal Dead Zone (TDZ):** Variables declared with `let` and `const` exist in the scope but cannot be accessed until the declaration is evaluated.

```javascript
{
  console.log(a); // ReferenceError: Cannot access 'a' before initialization
  let a = 5;
}
```

Rule: Prefer `const` by default, use `let` when reassignment is necessary, never use `var` in modern code.

### 3.2 Types

JavaScript has seven primitive types and one reference type (Object).

```javascript
// Primitives (immutable, passed by value)
typeof 42;           // 'number'
typeof 'hello';      // 'string'
typeof true;         // 'boolean'
typeof undefined;    // 'undefined'
typeof null;         // 'object' (historical bug)
typeof 123n;         // 'bigint'
typeof Symbol('id'); // 'symbol'

// Objects (mutable, passed by reference)
typeof {};           // 'object'
typeof [];           // 'object'
typeof function(){}; // 'function'
```

**Type coercion** occurs implicitly in many contexts:

```javascript
'5' - 2;   // 3 (string coerced to number)
'5' + 2;   // '52' (number coerced to string)
+ '42';    // 42 (unary plus coerces to number)
!!'text';  // true (truthy value coerced to boolean)
```

Use explicit coercion for clarity:

```javascript
Number('42');        // 42
String(42);          // '42'
Boolean(0);          // false
parseInt('42px', 10); // 42
```

### 3.3 Operators

**Equality:** Always use `===` and `!==` to avoid type coercion.

```javascript
0 == false;   // true (coercion)
0 === false;  // false
'' == 0;      // true
'' === 0;     // false
null == undefined; // true
null === undefined; // false
```

**Optional chaining (`?.`)** short-circuits if the operand is `null` or `undefined`:

```javascript
const user = { profile: { name: 'Alice' } };
console.log(user?.profile?.name);  // 'Alice'
console.log(user?.address?.city);  // undefined (no error)
console.log(user?.address?.city ?? 'Unknown'); // 'Unknown'
```

**Nullish coalescing (`??`)** returns the right operand only when the left is `null` or `undefined` (not for other falsy values):

```javascript
const count = 0;
count ?? 10;   // 0 (0 is not nullish)
undefined ?? 10; // 10
null ?? 10;     // 10
```

**Spread (`...`)** expands iterables into elements:

```javascript
const arr = [1, 2, 3];
const copy = [...arr];       // [1, 2, 3]
const merged = [...arr, 4, 5]; // [1, 2, 3, 4, 5]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 }; // { a: 1, b: 3, c: 4 }
```

**Rest (`...`)** collects remaining parameters:

```javascript
function sum(first, ...rest) {
  return rest.reduce((acc, n) => acc + n, first);
}
sum(1, 2, 3, 4); // 10
```

### 3.4 Control Flow

```javascript
// if / else if / else
const score = 85;
let grade;
if (score >= 90) {
  grade = 'A';
} else if (score >= 80) {
  grade = 'B';
} else {
  grade = 'C';
}

// switch â€” strict comparison
switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  default:
    console.log('Needs improvement');
}

// Loops
for (let i = 0; i < 5; i++) {
  console.log(i);
}

for (const item of iterable) {
  // Values of arrays, strings, Maps, Sets
}

for (const key in object) {
  // Keys/property names (includes prototype chain)
  if (Object.hasOwn(object, key)) {
    // Own property check
  }
}

let n = 0;
while (n < 3) {
  n++;
}

do {
  n--;
} while (n > 0);
```

### 3.5 Functions

**Function declaration** (hoisted):

```javascript
function greet(name) {
  return `Hello, ${name}!`;
}
```

**Function expression** (not hoisted):

```javascript
const greet = function(name) {
  return `Hello, ${name}!`;
};
```

**Arrow functions** (lexical `this`, no `arguments` object, concise body):

```javascript
const greet = (name) => `Hello, ${name}!`;
const double = (n) => n * 2;
const sum = (a, b) => {
  const result = a + b;
  return result;
};

// Lexical this binding
const counter = {
  count: 0,
  increment() {
    setInterval(() => {
      this.count++; // Arrow inherits this from surrounding scope
    }, 1000);
  },
};
```

**Default parameters:**

```javascript
function createUser(name, role = 'user', isActive = true) {
  return { name, role, isActive };
}
```

### 3.6 Objects

Objects are collections of key-value pairs.

```javascript
// Object literal
const user = {
  name: 'Alice',
  age: 30,
  greet() {
    return `Hi, I'm ${this.name}`;
  },
};

// Computed property keys
const key = 'dynamicField';
const obj = {
  [key]: 'value',
};

// Property shorthand
const name = 'Bob';
const person = { name }; // { name: 'Bob' }

// Methods
Object.keys(user);   // ['name', 'age']
Object.values(user); // ['Alice', 30]
Object.entries(user); // [['name', 'Alice'], ['age', 30]]

// Property descriptors
Object.defineProperty(user, 'id', {
  value: 1,
  writable: false,
  enumerable: false,
  configurable: false,
});
```

### 3.7 Arrays

Arrays are ordered, zero-indexed collections.

```javascript
const arr = [1, 2, 3, 4, 5];

// Destructuring
const [first, second, ...rest] = arr;
// first = 1, second = 2, rest = [3, 4, 5]

// Mutating methods
arr.push(6);       // [1,2,3,4,5,6]
arr.pop();         // Removes and returns last element
arr.shift();       // Removes and returns first element
arr.unshift(0);    // Prepends element
arr.splice(2, 1);  // Removes 1 element at index 2

// Non-mutating methods (return new array)
const doubled = arr.map((n) => n * 2);
const evens = arr.filter((n) => n % 2 === 0);
const sum = arr.reduce((acc, n) => acc + n, 0);
const found = arr.find((n) => n > 3);
const hasLarge = arr.some((n) => n > 10);
const allPositive = arr.every((n) => n > 0);
const sorted = [...arr].sort((a, b) => a - b);

// Array-like to array conversion
const args = Array.from(arguments);
const fromSet = [...new Set([1, 2, 2, 3])];

// Flat and flatMap
const nested = [1, [2, [3]]];
nested.flat(2); // [1, 2, 3]

const phrases = ['hello world', 'goodbye'];
phrases.flatMap((s) => s.split(' ')); // ['hello', 'world', 'goodbye']
```

**Object destructuring:**

```javascript
const user = { id: 1, name: 'Alice', role: 'admin' };
const { name, role, ...rest } = user;
// name = 'Alice', role = 'admin', rest = { id: 1 }

// Renaming and defaults
const { name: fullName, status = 'active' } = user;

// Nested destructuring
const data = { user: { address: { city: 'Portland' } } };
const { user: { address: { city } } } = data;
```

## Summary

- `const` and `let` provide block scoping; prefer `const` unless reassignment is required.
- Primitives are immutable and passed by value; objects are mutable and passed by reference.
- Use `===` for comparisons, `?.` for safe property access, `??` for nullish defaults.
- Control flow includes `if/else`, `switch`, and `for/of` loops over iterables.
- Arrow functions provide concise syntax and lexical `this` binding.
- Object and array destructuring enables readable extraction of nested values.
- Modern array methods (`map`, `filter`, `reduce`, `flatMap`) enable declarative data transformation.

## Exercises

### Review Questions

1. What is the Temporal Dead Zone and how does it affect `let` and `const`?
2. Why is `typeof null === 'object'` considered a bug? How should you test for null?
3. What is the difference between spreading an array and spreading an object?
4. How does optional chaining (`?.`) differ from logical AND (`&&`) for property access?

### Application Problems

5. Write a function `deepClone(obj)` that creates a deep copy of a serializable object using `JSON.parse`/`JSON.stringify` and explain its limitations.
6. Implement a function `groupBy(arr, key)` that groups an array of objects by a specified key and returns an object mapping keys to arrays of matching objects.
7. Write a pipeline function `pipe(...fns)` that composes functions left-to-right: `pipe(f, g)(x)` should return `g(f(x))`.

### Challenge Problem

8. Implement a `class`-free functional event emitter with methods `on(event, handler)`, `off(event, handler)`, and `emit(event, ...args)`. The implementation must support multiple handlers per event, removal of specific handlers, and wildcard listeners that receive all events. Use a plain object as the handlers store and the rest/spread syntax for variable arguments. Ensure that removing a handler during emission does not skip other handlers. Write unit-test-style assertions that demonstrate all three methods working correctly, including the wildcard behavior.
