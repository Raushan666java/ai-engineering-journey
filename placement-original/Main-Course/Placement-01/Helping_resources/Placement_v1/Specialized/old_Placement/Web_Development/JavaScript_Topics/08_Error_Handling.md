# Error Handling in JavaScript

## What is Error Handling?
- Error handling is the process of responding to and managing errors that occur during code execution.
- Helps prevent program crashes and provides meaningful feedback to users.

## Types of Errors
- **Syntax Errors:** Mistakes in code structure (e.g., missing brackets).
- **Runtime Errors:** Occur during execution (e.g., undefined variable).
- **Logical Errors:** Code runs but produces incorrect results.

## try, catch, finally
- Used to handle exceptions (runtime errors) gracefully.
```js
try {
  // Code that may throw an error
  let result = riskyFunction();
} catch (error) {
  // Code to handle the error
  console.error('Error:', error.message);
} finally {
  // Code that always runs
  console.log('Cleanup or final steps');
}
```
- `try`: Code to attempt.
- `catch`: Handles errors thrown in try.
- `finally`: Always runs, error or not (optional).

## throw Statement
- Used to create custom errors.
```js
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero!');
  }
  return a / b;
}
```

## Custom Error Objects
- Create your own error types by extending the Error class.
```js
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}
throw new ValidationError('Invalid input!');
```

## Error Object Properties
- `name`: Type of error (e.g., ReferenceError, TypeError)
- `message`: Error message
- `stack`: Stack trace (where the error occurred)

## Best Practices for Error Handling
- Always handle predictable errors (e.g., user input, network requests).
- Use specific error messages for debugging.
- Avoid exposing sensitive information in error messages.
- Log errors for monitoring and debugging.
- Use `finally` for cleanup (closing files, releasing resources).