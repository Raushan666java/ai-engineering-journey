# Asynchronous JavaScript (Callbacks, Promises, Async/Await)

## What is Asynchronous JavaScript?
- Asynchronous code allows tasks to run in the background without blocking the main thread.
- Essential for operations like network requests, timers, and file reading.

## Synchronous vs Asynchronous
- **Synchronous:** Code runs line by line; each step waits for the previous one to finish.
- **Asynchronous:** Code can start tasks and move on before they finish, handling results later.

## Callbacks
- A callback is a function passed as an argument to another function, to be executed later.
```js
function fetchData(callback) {
  setTimeout(() => {
    callback('Data loaded');
  }, 1000);
}
fetchData(function(result) {
  console.log(result);
});
```
- **Problems:** Callback hell (nested callbacks), hard to read and maintain.

## Promises
- A Promise represents a value that may be available now, later, or never.
- States: pending, fulfilled, rejected.
```js
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Done!'), 1000);
});
promise.then(result => console.log(result)).catch(error => console.error(error));
```
- Chaining: `.then()` and `.catch()` for handling results and errors.

## Async/Await
- Syntactic sugar over Promises for writing asynchronous code that looks synchronous.
```js
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
getData();
```
- Use `await` only inside `async` functions.

## Error Handling in Async Code
- Use `.catch()` with Promises.
- Use `try...catch` with async/await.

## Real-World Examples
- Fetching data from APIs
- Reading files (Node.js)
- Timers (`setTimeout`, `setInterval`)