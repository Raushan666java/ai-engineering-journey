# 16. JavaScript Interview Questions and Answers

## Basic Questions

### 1. What is JavaScript?
- JavaScript is a high-level, interpreted programming language used to make web pages interactive.

### 2. What are the data types in JavaScript?
- Primitive: string, number, boolean, null, undefined, symbol, bigint
- Non-primitive: object, array, function

### 3. What is the difference between `let`, `const`, and `var`?
- `var`: function-scoped, can be redeclared/updated
- `let`: block-scoped, can be updated but not redeclared
- `const`: block-scoped, cannot be updated or redeclared

### 4. What is hoisting?
- Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

### 5. What is the difference between `==` and `===`?
- `==` compares values after type coercion; `===` compares both value and type (strict equality).

## Intermediate Questions

### 6. What is a closure?
- A closure is a function that remembers its outer scope even after the outer function has finished executing.

### 7. What is the event loop?
- The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the browser and executing callbacks when ready.

### 8. Explain `this` keyword in JavaScript.
- `this` refers to the object from which a function was called. Its value depends on how the function is invoked.

### 9. What are Promises?
- Promises are objects representing the eventual completion or failure of an asynchronous operation.

### 10. What is the difference between `null` and `undefined`?
- `null` is an assigned value representing no value; `undefined` means a variable has been declared but not assigned a value.

## Advanced Questions

### 11. What is prototypal inheritance?
- Objects inherit properties and methods from other objects via the prototype chain.

### 12. What are arrow functions and how are they different from regular functions?
- Arrow functions have a shorter syntax and do not have their own `this`, `arguments`, or `super`.

### 13. What is debouncing and throttling?
- Debouncing: Ensures a function is called only after a certain time has elapsed since the last call.
- Throttling: Ensures a function is called at most once in a specified time interval.

### 14. What is the difference between `call`, `apply`, and `bind`?
- `call`: Invokes a function with a given `this` value and arguments.
- `apply`: Same as `call`, but arguments are provided as an array.
- `bind`: Returns a new function with a bound `this` value.

### 15. What is a higher-order function?
- A function that takes another function as an argument or returns a function.

## Coding Questions

### 16. Reverse a string in JavaScript.
```js
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

### 17. Find the largest number in an array.
```js
function findMax(arr) {
  return Math.max(...arr);
}
```

### 18. Remove duplicates from an array.
```js
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
```

### 19. Explain how to handle errors in async/await.
```js
async function fetchData() {
  try {
    const response = await fetch('url');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
```

### 20. What is memoization?
- Memoization is an optimization technique to cache the results of expensive function calls.

## Best Learning Methods for Interview Preparation
- **Practice:** Solve coding problems on LeetCode, HackerRank, CodeSignal, etc.
- **Mock Interviews:** Practice with peers or use online platforms.
- **Flashcards:** Memorize key concepts and patterns.
- **Teach Back:** Explain answers and code to others.
- **Review:** Analyze and improve your solutions after each attempt.

---

Congratulations! You have completed the detailed JavaScript notes series.
