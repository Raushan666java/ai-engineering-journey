# Error Handling in JavaScript

## Learning Objectives
After completing this section, you will be able to:
- Implement try-catch blocks for error handling
- Create and throw custom errors
- Apply best practices for error management
- Build robust applications that handle errors gracefully

## Introduction to Error Handling

Error handling is a critical aspect of writing robust JavaScript applications. Proper error handling helps you:

- Prevent application crashes
- Provide meaningful feedback to users
- Debug issues more effectively
- Create more maintainable code

JavaScript provides several mechanisms for handling errors, with the primary one being the try-catch statement.

## Types of Errors in JavaScript

JavaScript has several built-in error types:

### 1. Error
The base error type from which all other error types inherit.

```javascript
const error = new Error('Something went wrong');
console.log(error.message); // "Something went wrong"
console.log(error.name); // "Error"
console.log(error.stack); // Stack trace
```

### 2. SyntaxError
Occurs when there's a syntax mistake in your code.

```javascript
// This will cause a SyntaxError
// function myFunction( {
//   console.log('Hello');
// }
```

### 3. ReferenceError
Occurs when you try to reference a variable that doesn't exist.

```javascript
// This will cause a ReferenceError
// console.log(undefinedVariable);
```

### 4. TypeError
Occurs when a value is not of the expected type.

```javascript
// This will cause a TypeError
// const num = 123;
// num.toUpperCase();
```

### 5. RangeError
Occurs when a value is not in the expected range.

```javascript
// This will cause a RangeError
// const arr = new Array(-1); // Cannot create array with negative length
```

### 6. URIError
Occurs when incorrect parameters are passed to encodeURI(), decodeURI(), encodeURIComponent(), or decodeURIComponent().

```javascript
// This will cause a URIError
// decodeURIComponent('%');
```

### 7. EvalError
Historically used for errors with the eval() function, but rarely used in modern JavaScript.

## The Try-Catch Statement

The try-catch statement allows you to "try" running code and "catch" potential errors without crashing your application.

### Basic Syntax

```javascript
try {
  // Code that might throw an error
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  // Code to handle the error
  console.error('An error occurred:', error.message);
}
```

### Adding a Finally Block

The `finally` block executes regardless of whether an error occurred or not.

```javascript
try {
  console.log('Trying risky operation');
  const result = riskyOperation();
  console.log('Operation succeeded:', result);
} catch (error) {
  console.error('Operation failed:', error.message);
} finally {
  console.log('This runs no matter what');
  // Clean up resources, close connections, etc.
}
```

### Catching Specific Error Types

You can handle different types of errors differently:

```javascript
try {
  // Code that might throw different types of errors
  const data = JSON.parse(userInput);
  processData(data);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error('Invalid JSON format:', error.message);
  } else if (error instanceof TypeError) {
    console.error('Type error during processing:', error.message);
  } else {
    console.error('Unknown error:', error.message);
  }
}
```

### Nested Try-Catch Blocks

You can nest try-catch blocks for more granular error handling:

```javascript
try {
  // Outer operation
  startProcess();
  
  try {
    // Inner operation that might fail
    const result = riskyOperation();
    processResult(result);
  } catch (innerError) {
    // Handle inner operation errors
    console.error('Inner operation failed:', innerError.message);
    // Maybe use a fallback approach
    const fallbackResult = getFallbackResult();
    processResult(fallbackResult);
  }
  
  completeProcess();
} catch (outerError) {
  // Handle errors from the entire process
  console.error('Process failed:', outerError.message);
}
```

## The Throw Statement

The `throw` statement allows you to generate your own errors.

### Throwing Basic Errors

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed');
  }
  return a / b;
}

try {
  const result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.error(error.message); // "Division by zero is not allowed"
}
```

### Throwing Specific Error Types

```javascript
function validateUser(user) {
  if (!user) {
    throw new TypeError('User object is required');
  }
  
  if (!user.name) {
    throw new Error('User name is required');
  }
  
  if (user.age < 18) {
    throw new RangeError('User must be at least 18 years old');
  }
}

try {
  validateUser({ name: 'John', age: 16 });
} catch (error) {
  console.error(error.name + ':', error.message); // "RangeError: User must be at least 18 years old"
}
```

## Custom Error Objects

You can create your own error types by extending the built-in Error class:

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

class DatabaseError extends Error {
  constructor(message, code) {
    super(message);
    this.name = 'DatabaseError';
    this.code = code;
  }
}

// Using custom errors
function saveUser(user) {
  if (!user.name) {
    throw new ValidationError('User name is required');
  }
  
  try {
    // Simulate database operation
    const success = connectToDatabase();
    if (!success) {
      throw new DatabaseError('Failed to connect to database', 'DB_CONN_ERROR');
    }
    // Save user...
  } catch (error) {
    throw new DatabaseError('Failed to save user', 'DB_SAVE_ERROR');
  }
}

try {
  saveUser({ age: 25 });
} catch (error) {
  if (error instanceof ValidationError) {
    console.error('Validation failed:', error.message);
  } else if (error instanceof DatabaseError) {
    console.error(`Database error (${error.code}):`, error.message);
  } else {
    console.error('Unknown error:', error.message);
  }
}
```

## Error Object Properties

The Error object has several useful properties:

```javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.log(error.name); // "Error"
  console.log(error.message); // "Something went wrong"
  console.log(error.stack); // Stack trace showing where the error occurred
}
```

## Async Error Handling

### Promises and Error Handling

Promises use `.catch()` for error handling:

```javascript
fetchData()
  .then(data => {
    console.log('Data received:', data);
  })
  .catch(error => {
    console.error('Failed to fetch data:', error.message);
  })
  .finally(() => {
    console.log('Fetch operation complete');
  });
```

### Async/Await Error Handling

With async/await, you can use try-catch blocks:

```javascript
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error.message);
    // You might want to return a default value or re-throw the error
    return { error: true, message: error.message };
  }
}
```

## Best Practices for Error Handling

### 1. Be Specific About What You're Catching

Don't catch errors too broadly unless you have a good reason:

```javascript
// Bad practice - catching all errors the same way
try {
  // Multiple operations that could fail for different reasons
} catch (error) {
  console.error('Something went wrong');
}

// Better practice - handle specific errors differently
try {
  // Operations that could fail
} catch (error) {
  if (error instanceof TypeError) {
    // Handle type errors
  } else if (error instanceof NetworkError) {
    // Handle network errors
  } else {
    // Handle other errors
    console.error('Unexpected error:', error.message);
  }
}
```

### 2. Don't Swallow Errors

Always do something meaningful with caught errors:

```javascript
// Bad practice - "swallowing" the error
try {
  riskyOperation();
} catch (error) {
  // Empty catch block or just console.log
}

// Better practice
try {
  riskyOperation();
} catch (error) {
  // Log the error
  console.error('Operation failed:', error.message);
  
  // Take appropriate action
  notifyUser('Something went wrong');
  
  // Consider re-throwing if you can't handle it here
  throw error;
}
```

### 3. Clean Up Resources in Finally Blocks

Use `finally` to ensure resources are properly released:

```javascript
let connection = null;

try {
  connection = openDatabaseConnection();
  const data = connection.query('SELECT * FROM users');
  processData(data);
} catch (error) {
  console.error('Database operation failed:', error.message);
} finally {
  // This ensures the connection is closed even if an error occurs
  if (connection) {
    connection.close();
  }
}
```

### 4. Create Meaningful Error Messages

Make your error messages descriptive and actionable:

```javascript
// Bad error message
if (!user) {
  throw new Error('Invalid');
}

// Better error message
if (!user) {
  throw new Error('User object is required for the registration process');
}
```

### 5. Use Custom Error Types for Better Error Handling

Custom error types make it easier to handle specific error cases:

```javascript
class NetworkError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.name = 'NetworkError';
    this.statusCode = statusCode;
  }
}

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Usage
try {
  const response = await fetch('/api/data');
  
  if (!response.ok) {
    throw new NetworkError('Failed to fetch data', response.status);
  }
  
  const data = await response.json();
  
  if (!data.name) {
    throw new ValidationError('Name is required', 'name');
  }
  
  // Process data...
} catch (error) {
  if (error instanceof NetworkError) {
    console.error(`Network error (${error.statusCode}):`, error.message);
    // Retry or show network error UI
  } else if (error instanceof ValidationError) {
    console.error(`Validation error (${error.field}):`, error.message);
    // Show field-specific validation error
  } else {
    console.error('Unexpected error:', error.message);
    // Show generic error message
  }
}
```

### 6. Consider the User Experience

Think about how errors affect your users:

```javascript
async function submitForm() {
  try {
    showLoadingIndicator();
    const response = await submitData(formData);
    showSuccessMessage('Form submitted successfully!');
    return response;
  } catch (error) {
    if (error instanceof NetworkError) {
      showErrorMessage('Network error. Please check your connection and try again.');
    } else if (error instanceof ValidationError) {
      showFieldError(error.field, error.message);
    } else {
      showErrorMessage('An unexpected error occurred. Please try again later.');
    }
    // Log the full error for debugging
    logErrorToServer(error);
  } finally {
    hideLoadingIndicator();
  }
}
```

### 7. Centralized Error Handling

For larger applications, consider implementing centralized error handling:

```javascript
// Global error handler
class ErrorHandler {
  static handle(error, context = {}) {
    // Log the error
    this.logError(error, context);
    
    // Notify the user if appropriate
    this.notifyUser(error);
    
    // Report to monitoring service
    this.reportToMonitoring(error, context);
  }
  
  static logError(error, context) {
    console.error('Error:', error.message, 'Context:', context);
  }
  
  static notifyUser(error) {
    if (error instanceof UserFacingError) {
      showErrorMessage(error.userMessage);
    } else {
      showErrorMessage('An unexpected error occurred');
    }
  }
  
  static reportToMonitoring(error, context) {
    // Send to error monitoring service
    ErrorMonitoringService.report(error, context);
  }
}

// Usage
try {
  riskyOperation();
} catch (error) {
  ErrorHandler.handle(error, { operation: 'riskyOperation', userId: currentUser.id });
}
```

## Practical Application: Adding Error Handling to a Form Validation System

```javascript
class FormValidator {
  constructor(formId) {
    this.form = document.getElementById(formId);
    this.errorContainer = document.createElement('div');
    this.errorContainer.className = 'error-container';
    this.form.prepend(this.errorContainer);
    
    this.setupEventListeners();
  }
  
  setupEventListeners() {
    this.form.addEventListener('submit', (event) => {
      try {
        this.clearErrors();
        if (this.validateForm()) {
          // Form is valid, allow submission
          console.log('Form submitted successfully');
        } else {
          // Prevent form submission
          event.preventDefault();
        }
      } catch (error) {
        // Prevent form submission on error
        event.preventDefault();
        
        if (error instanceof ValidationError) {
          this.showFieldError(error.field, error.message);
        } else {
          this.showFormError('An unexpected error occurred. Please try again.');
          console.error('Form validation error:', error);
        }
      }
    });
  }
  
  validateForm() {
    let isValid = true;
    
    // Get form fields
    const name = this.getFieldValue('name');
    const email = this.getFieldValue('email');
    const password = this.getFieldValue('password');
    const confirmPassword = this.getFieldValue('confirm-password');
    
    // Validate name
    try {
      this.validateName(name);
    } catch (error) {
      this.showFieldError('name', error.message);
      isValid = false;
    }
    
    // Validate email
    try {
      this.validateEmail(email);
    } catch (error) {
      this.showFieldError('email', error.message);
      isValid = false;
    }
    
    // Validate password
    try {
      this.validatePassword(password, confirmPassword);
    } catch (error) {
      this.showFieldError(error.field || 'password', error.message);
      isValid = false;
    }
    
    return isValid;
  }
  
  getFieldValue(fieldName) {
    const field = this.form.elements[fieldName];
    if (!field) {
      throw new Error(`Field "${fieldName}" not found in the form`);
    }
    return field.value.trim();
  }
  
  validateName(name) {
    if (!name) {
      throw new ValidationError('Name is required', 'name');
    }
    
    if (name.length < 2) {
      throw new ValidationError('Name must be at least 2 characters long', 'name');
    }
    
    if (!/^[a-zA-Z\s]+$/.test(name)) {
      throw new ValidationError('Name can only contain letters and spaces', 'name');
    }
  }
  
  validateEmail(email) {
    if (!email) {
      throw new ValidationError('Email is required', 'email');
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      throw new ValidationError('Please enter a valid email address', 'email');
    }
  }
  
  validatePassword(password, confirmPassword) {
    if (!password) {
      throw new ValidationError('Password is required', 'password');
    }
    
    if (password.length < 8) {
      throw new ValidationError('Password must be at least 8 characters long', 'password');
    }
    
    if (!/[A-Z]/.test(password)) {
      throw new ValidationError('Password must contain at least one uppercase letter', 'password');
    }
    
    if (!/[a-z]/.test(password)) {
      throw new ValidationError('Password must contain at least one lowercase letter', 'password');
    }
    
    if (!/[0-9]/.test(password)) {
      throw new ValidationError('Password must contain at least one number', 'password');
    }
    
    if (password !== confirmPassword) {
      throw new ValidationError('Passwords do not match', 'confirm-password');
    }
  }
  
  showFieldError(fieldName, message) {
    const field = this.form.elements[fieldName];
    if (field) {
      // Add error class to the field
      field.classList.add('error');
      
      // Create error message element
      const errorElement = document.createElement('div');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      
      // Insert error message after the field
      field.parentNode.insertBefore(errorElement, field.nextSibling);
    }
  }
  
  showFormError(message) {
    this.errorContainer.textContent = message;
    this.errorContainer.style.display = 'block';
  }
  
  clearErrors() {
    // Clear form-level error
    this.errorContainer.textContent = '';
    this.errorContainer.style.display = 'none';
    
    // Clear field-level errors
    const errorMessages = this.form.querySelectorAll('.error-message');
    errorMessages.forEach(element => element.remove());
    
    // Remove error class from fields
    const errorFields = this.form.querySelectorAll('.error');
    errorFields.forEach(field => field.classList.remove('error'));
  }
}

// Custom error class for validation errors
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

// Initialize the form validator
document.addEventListener('DOMContentLoaded', () => {
  try {
    const validator = new FormValidator('registration-form');
  } catch (error) {
    console.error('Failed to initialize form validator:', error);
    alert('There was a problem loading the form. Please refresh the page and try again.');
  }
});
```

## Creating a Robust API Request Function

```javascript
class ApiError extends Error {
  constructor(message, statusCode, responseData = null) {
    super(message);
    this.name = 'ApiError';
    this.statusCode = statusCode;
    this.responseData = responseData;
    this.timestamp = new Date();
  }
}

class NetworkError extends Error {
  constructor(message, request) {
    super(message);
    this.name = 'NetworkError';
    this.request = request;
    this.timestamp = new Date();
  }
}

class TimeoutError extends Error {
  constructor(message, timeout) {
    super(message);
    this.name = 'TimeoutError';
    this.timeout = timeout;
    this.timestamp = new Date();
  }
}

async function apiRequest(url, options = {}) {
  // Default options
  const defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    timeout: 10000, // 10 seconds
    retries: 3,
    retryDelay: 1000 // 1 second
  };
  
  // Merge options
  const requestOptions = { ...defaultOptions, ...options };
  const { timeout, retries, retryDelay, ...fetchOptions } = requestOptions;
  
  // Add authorization header if token exists
  if (localStorage.getItem('authToken')) {
    fetchOptions.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
  }
  
  let lastError = null;
  
  // Retry logic
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController();
      fetchOptions.signal = controller.signal;
      
      // Set timeout
      const timeoutId = setTimeout(() => {
        controller.abort();
      }, timeout);
      
      try {
        // Make the request
        const response = await fetch(url, fetchOptions);
        
        // Clear timeout
        clearTimeout(timeoutId);
        
        // Handle HTTP error status codes
        if (!response.ok) {
          let errorData = null;
          
          // Try to parse error response
          try {
            errorData = await response.json();
          } catch (e) {
            // Ignore parsing errors
          }
          
          throw new ApiError(
            errorData?.message || `API request failed with status ${response.status}`,
            response.status,
            errorData
          );
        }
        
        // Parse and return successful response
        if (response.status === 204) {
          // No content
          return null;
        }
        
        // Check content type to determine how to parse the response
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          return await response.json();
        } else {
          return await response.text();
        }
      } catch (error) {
        // Clear timeout if it hasn't fired yet
        clearTimeout(timeoutId);
        
        // Handle abort error (timeout)
        if (error.name === 'AbortError') {
          throw new TimeoutError(`Request timed out after ${timeout}ms`, timeout);
        }
        
        // Re-throw other errors
        throw error;
      }
    } catch (error) {
      lastError = error;
      
      // Don't retry on certain errors
      if (
        error instanceof ApiError && 
        [400, 401, 403, 404].includes(error.statusCode)
      ) {
        break;
      }
      
      // Last attempt, don't wait
      if (attempt === retries) {
        break;
      }
      
      // Wait before retrying
      await new Promise(resolve => setTimeout(resolve, retryDelay));
      
      // Increase delay for next retry (exponential backoff)
      requestOptions.retryDelay *= 2;
    }
  }
  
  // If we got here, all retries failed
  if (lastError instanceof ApiError) {
    // Handle specific API errors
    if (lastError.statusCode === 401) {
      // Unauthorized - clear auth token and redirect to login
      localStorage.removeItem('authToken');
      window.location.href = '/login';
    }
  }
  
  // Re-throw the last error
  throw lastError;
}

// Usage example
async function getUserData(userId) {
  try {
    const data = await apiRequest(`/api/users/${userId}`);
    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      console.error(`API Error (${error.statusCode}):`, error.message);
    } else if (error instanceof TimeoutError) {
      console.error(`Timeout Error:`, error.message);
    } else if (error instanceof NetworkError) {
      console.error(`Network Error:`, error.message);
    } else {
      console.error('Unexpected error:', error);
    }
    
    // Return null or a default value
    return null;
  }
}
```

## Implementing a Logging System for Errors

```javascript
class Logger {
  constructor(options = {}) {
    this.options = {
      level: 'info', // debug, info, warn, error
      enableConsole: true,
      enableStorage: true,
      storageKey: 'application_logs',
      maxLogEntries: 100,
      ...options
    };
    
    this.levels = {
      debug: 0,
      info: 1,
      warn: 2,
      error: 3
    };
  }
  
  debug(message, data = {}) {
    this._log('debug', message, data);
  }
  
  info(message, data = {}) {
    this._log('info', message, data);
  }
  
  warn(message, data = {}) {
    this._log('warn', message, data);
  }
  
  error(message, error = null, data = {}) {
    // Extract error details if provided
    const errorData = error ? {
      name: error.name,
      message: error.message,
      stack: error.stack,
      ...this._extractCustomErrorProperties(error)
    } : {};
    
    this._log('error', message, { ...data, error: errorData });
  }
  
  _extractCustomErrorProperties(error) {
    // Extract non-standard properties from custom errors
    const standardProps = ['name', 'message', 'stack'];
    const customProps = {};
    
    Object.getOwnPropertyNames(error).forEach(prop => {
      if (!standardProps.includes(prop)) {
        customProps[prop] = error[prop];
      }
    });
    
    return customProps;
  }
  
  _log(level, message, data = {}) {
    // Check if we should log this level
    if (this.levels[level] < this.levels[this.options.level]) {
      return;
    }
    
    const logEntry = {
      timestamp: new Date().toISOString(),
      level,
      message,
      data
    };
    
    // Console logging
    if (this.options.enableConsole) {
      this._consoleLog(level, logEntry);
    }
    
    // Storage logging
    if (this.options.enableStorage) {
      this._storageLog(logEntry);
    }
    
    // Here you could add more logging destinations:
    // - Send to server
    // - Write to file (in Node.js)
    // - Send to third-party logging service
  }
  
  _consoleLog(level, logEntry) {
    const { timestamp, message, data } = logEntry;
    
    switch (level) {
      case 'debug':
        console.debug(`[${timestamp}] DEBUG:`, message, data);
        break;
      case 'info':
        console.info(`[${timestamp}] INFO:`, message, data);
        break;
      case 'warn':
        console.warn(`[${timestamp}] WARN:`, message, data);
        break;
      case 'error':
        console.error(`[${timestamp}] ERROR:`, message, data);
        break;
    }
  }
  
  _storageLog(logEntry) {
    try {
      // Get existing logs
      let logs = [];
      const storedLogs = localStorage.getItem(this.options.storageKey);
      
      if (storedLogs) {
        logs = JSON.parse(storedLogs);
      }
      
      // Add new log entry
      logs.push(logEntry);
      
      // Limit the number of log entries
      if (logs.length > this.options.maxLogEntries) {
        logs = logs.slice(-this.options.maxLogEntries);
      }
      
      // Save back to storage
      localStorage.setItem(this.options.storageKey, JSON.stringify(logs));
    } catch (error) {
      // If storage fails, just log to console
      console.error('Failed to store log:', error);
    }
  }
  
  // Get all stored logs
  getLogs() {
    try {
      const storedLogs = localStorage.getItem(this.options.storageKey);
      return storedLogs ? JSON.parse(storedLogs) : [];
    } catch (error) {
      console.error('Failed to retrieve logs:', error);
      return [];
    }
  }
  
  // Clear all stored logs
  clearLogs() {
    try {
      localStorage.removeItem(this.options.storageKey);
    } catch (error) {
      console.error('Failed to clear logs:', error);
    }
  }
  
  // Filter logs by level
  getLogsByLevel(level) {
    const logs = this.getLogs();
    return logs.filter(log => log.level === level);
  }
  
  // Get logs within a time range
  getLogsByTimeRange(startTime, endTime) {
    const logs = this.getLogs();
    return logs.filter(log => {
      const logTime = new Date(log.timestamp).getTime();
      return logTime >= startTime.getTime() && logTime <= endTime.getTime();
    });
  }
}

// Create a global logger instance
const logger = new Logger({
  level: process.env.NODE_ENV === 'development' ? 'debug' : 'info'
});

// Usage examples
try {
  const result = riskyOperation();
  logger.info('Operation completed successfully', { result });
} catch (error) {
  logger.error('Operation failed', error, { 
    operationName: 'riskyOperation',
    userId: currentUser.id
  });
}

// In another part of the application
function handleApiResponse(response) {
  if (response.status === 'error') {
    logger.warn('API returned error status', { 
      errorCode: response.errorCode,
      endpoint: response.endpoint
    });
  }
}
```

## Review Questions

1. **When should you use try-catch blocks in your code?**
   - What types of operations typically require error handling?
   - When is it appropriate to use try-catch versus other error handling approaches?
   - How do you decide what code should go in the try block?
   - What are the performance implications of using try-catch blocks?

2. **How would you create and use custom error types?**
   - What are the benefits of creating custom error types?
   - How do you extend the built-in Error class?
   - What additional properties might you add to custom errors?
   - How do you properly catch and handle custom errors?

3. **What are best practices for error handling in production code?**
   - How should errors be logged in a production environment?
   - What information should be included in error messages?
   - How do you balance informative error messages with security concerns?
   - What strategies can you use for graceful degradation when errors occur?

## Exercises

1. **Error Handling in a Calculator**
   - Create a calculator function that handles various error cases
   - Implement custom error types for different calculation errors
   - Add appropriate try-catch blocks to handle errors gracefully
   - Provide meaningful error messages to the user

2. **Form Validation with Error Handling**
   - Build a form validation system with comprehensive error handling
   - Create custom validation error types for different field validations
   - Implement a centralized error display mechanism
   - Add field-specific error messages and highlighting

3. **API Client with Robust Error Handling**
   - Create an API client that handles various error scenarios
   - Implement retry logic for transient errors
   - Add timeout handling and cancellation support
   - Create a logging system for API errors

## Additional Resources

- [MDN: Error Handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [MDN: Error Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [JavaScript.info: Error Handling](https://javascript.info/error-handling)
- [Airbnb JavaScript Style Guide: Error Handling](https://github.com/airbnb/javascript#errors)
- [Error Handling Patterns in JavaScript](https://www.toptal.com/javascript/javascript-error-handling-guide)

## Next Steps
After mastering error handling, you'll be ready to move on to DOM manipulation in JavaScript, which will allow you to interact with web page elements dynamically.