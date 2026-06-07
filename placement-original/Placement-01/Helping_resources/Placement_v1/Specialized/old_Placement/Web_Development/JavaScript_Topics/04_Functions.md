# Functions in JavaScript

## Function Declaration and Expression
- **Declaration:**
```js
function greet() {
  console.log('Hello!');
}
```
- **Expression:**
```js
const greet = function() {
  console.log('Hello!');
};
```

## Arrow Functions
- Introduced in ES6, concise syntax, no own `this`.
```js
const add = (a, b) => a + b;
```

## Parameters, Arguments, Default Parameters
- Parameters are variables in function definitions.
- Arguments are values passed to functions.
- Default parameters:
```js
function greet(name = 'Guest') {
  console.log('Hello, ' + name);
}
```

## Return Values
- Use `return` to send a value back from a function.

## Scope: Global, Local, Block
- **Global:** Declared outside any function, accessible everywhere.
- **Local:** Declared inside a function, accessible only there.
- **Block:** Declared with `let` or `const` inside `{}`.

## Closures
- A closure is a function that remembers its outer variables even after the outer function has finished executing.
```js
function outer() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = outer();
```

## IIFE (Immediately Invoked Function Expression)
- Runs as soon as it is defined.
```js
(function() {
  console.log('IIFE runs!');
})();
```

## Callback Functions
- A function passed as an argument to another function.
```js
function processUserInput(callback) {
  const name = prompt('Enter your name:');
  callback(name);
}
```

## Higher-Order Functions
- Functions that take other functions as arguments or return them.
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
```