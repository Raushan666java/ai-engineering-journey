# 10. Error Handling in PHP

## Error Types

### Error Levels
- **E_ERROR**: Fatal run-time errors that cannot be recovered from
- **E_WARNING**: Run-time warnings that don't halt execution
- **E_NOTICE**: Run-time notices for possible issues
- **E_PARSE**: Compile-time parse errors
- **E_DEPRECATED**: Notices about code that will not work in future versions
- **E_STRICT**: Suggestions for interoperability and forward compatibility
- **E_ALL**: All errors and warnings

### Common Error Scenarios
```php
// E_WARNING
file_get_contents('non_existent_file.txt'); // Warning: file_get_contents(): Failed to open stream

// E_NOTICE
echo $undefined_variable; // Notice: Undefined variable

// E_ERROR
require('non_existent_file.php'); // Fatal error: require(): Failed opening required

// E_PARSE
echo 'Unclosed string; // Parse error: syntax error, unexpected end of file
```

## Error Reporting

### Configuration
```php
// Show all errors (development)
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// Hide errors (production)
error_reporting(0);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');
```

### PHP.ini Settings
```ini
; Error reporting level
error_reporting = E_ALL

; Display errors in output
display_errors = On

; Log errors to file
log_errors = On
error_log = /path/to/error.log

; Maximum error log size
log_errors_max_len = 1024

; Ignore repeated errors
ignore_repeated_errors = Off
```

## Exception Handling

### Basic Try-Catch
```php
try {
    // Code that might throw an exception
    $file = fopen('non_existent_file.txt', 'r');
    if (!$file) {
        throw new Exception('Failed to open file');
    }
} catch (Exception $e) {
    // Handle the exception
    echo 'Caught exception: ' . $e->getMessage() . '<br>';
    echo 'File: ' . $e->getFile() . '<br>';
    echo 'Line: ' . $e->getLine() . '<br>';
}
```

### Multiple Catch Blocks
```php
try {
    // Code that might throw different exceptions
    $value = json_decode($json, true, 512, JSON_THROW_ON_ERROR);
} catch (JsonException $e) {
    // Handle JSON specific exceptions
    echo 'JSON Error: ' . $e->getMessage();
} catch (Exception $e) {
    // Handle general exceptions
    echo 'General Error: ' . $e->getMessage();
} finally {
    // Always executed, regardless of exception
    echo 'This always runs';
}
```

### Custom Exceptions
```php
// Define custom exception
class DatabaseException extends Exception
{
    protected $query;
    
    public function __construct($message, $query = '', $code = 0, Exception $previous = null)
    {
        $this->query = $query;
        parent::__construct($message, $code, $previous);
    }
    
    public function getQuery()
    {
        return $this->query;
    }
}

// Using custom exception
try {
    $result = $db->query('SELECT * FROM non_existent_table');
    if (!$result) {
        throw new DatabaseException('Query failed', 'SELECT * FROM non_existent_table');
    }
} catch (DatabaseException $e) {
    echo 'Database error: ' . $e->getMessage() . '<br>';
    echo 'Failed query: ' . $e->getQuery() . '<br>';
    // Log the error
    error_log('Database error: ' . $e->getMessage() . ' - Query: ' . $e->getQuery());
}
```

### Exception Hierarchy (PHP 7+)
```php
// Base Exception class
// ├── Error
// │   ├── ArithmeticError
// │   │   └── DivisionByZeroError
// │   ├── AssertionError
// │   ├── CompileError
// │   │   └── ParseError
// │   └── TypeError
// │       └── ArgumentCountError
// └── Exception
//     ├── ClosedGeneratorException
//     ├── DOMException
//     ├── ErrorException
//     ├── IntlException
//     ├── LogicException
//     │   ├── BadFunctionCallException
//     │   │   └── BadMethodCallException
//     │   ├── DomainException
//     │   ├── InvalidArgumentException
//     │   ├── LengthException
//     │   └── OutOfRangeException
//     ├── PharException
//     ├── ReflectionException
//     ├── RuntimeException
//     │   ├── OutOfBoundsException
//     │   ├── OverflowException
//     │   ├── PDOException
//     │   ├── RangeException
//     │   ├── UnderflowException
//     │   └── UnexpectedValueException
//     └── SoapFault
```

## Custom Error Handlers

### Set Error Handler
```php
// Custom error handler function
function customErrorHandler($errno, $errstr, $errfile, $errline)
{
    $errorType = match($errno) {
        E_ERROR, E_USER_ERROR => 'Fatal Error',
        E_WARNING, E_USER_WARNING => 'Warning',
        E_NOTICE, E_USER_NOTICE => 'Notice',
        E_DEPRECATED, E_USER_DEPRECATED => 'Deprecated',
        default => 'Unknown Error'
    };
    
    // Log the error
    error_log("[$errorType] $errstr in $errfile on line $errline");
    
    // Display error for non-fatal errors
    if ($errno != E_ERROR && $errno != E_USER_ERROR) {
        echo "<div style='color:red'>$errorType: $errstr</div>";
        return true; // Don't execute PHP's internal error handler
    }
    
    // For fatal errors, show error page and exit
    include 'error_page.php';
    exit(1);
}

// Set the custom error handler
set_error_handler('customErrorHandler');
```

### Set Exception Handler
```php
// Custom exception handler for uncaught exceptions
function customExceptionHandler($exception)
{
    // Log the exception
    error_log('Uncaught Exception: ' . $exception->getMessage() . 
              ' in ' . $exception->getFile() . 
              ' on line ' . $exception->getLine());
    
    // Display user-friendly error page
    http_response_code(500);
    include 'exception_page.php';
    exit(1);
}

// Set the custom exception handler
set_exception_handler('customExceptionHandler');
```

### Error to Exception Conversion
```php
// Convert errors to ErrorException
set_error_handler(function($errno, $errstr, $errfile, $errline) {
    // Don't throw on suppressed errors (@)
    if (!(error_reporting() & $errno)) {
        return false;
    }
    
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});

// Now you can catch errors as exceptions
try {
    // This would normally trigger a warning
    $content = file_get_contents('non_existent_file.txt');
} catch (ErrorException $e) {
    echo 'Caught error: ' . $e->getMessage();
}
```

## Shutdown Function

```php
// Register shutdown function to catch fatal errors
register_shutdown_function(function() {
    $error = error_get_last();
    
    // Check if error is fatal
    if ($error && ($error['type'] === E_ERROR || $error['type'] === E_PARSE || $error['type'] === E_COMPILE_ERROR)) {
        // Log the fatal error
        error_log("FATAL ERROR: {$error['message']} in {$error['file']} on line {$error['line']}");
        
        // Display error page
        http_response_code(500);
        include 'fatal_error_page.php';
    }
});
```

## Logging

### Basic Error Logging
```php
// Log to default error log
error_log('Something went wrong');

// Log to specific file
error_log('Database connection failed', 3, '/path/to/my-errors.log');

// Log with email
error_log('Critical error occurred', 1, 'admin@example.com');
```

### Advanced Logging with Monolog
```php
// Install with: composer require monolog/monolog
use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\FirePHPHandler;

// Create logger
$logger = new Logger('app');
$logger->pushHandler(new StreamHandler(__DIR__.'/logs/app.log', Logger::DEBUG));
$logger->pushHandler(new FirePHPHandler());

// Add records to the log
$logger->debug('Debug message');
$logger->info('User logged in', ['user' => 'john']);
$logger->warning('Low disk space', ['free' => '1GB']);
$logger->error('Failed to connect to database');
$logger->critical('System down');
```

## Debugging Techniques

### Basic Debugging
```php
// Print variable content
var_dump($variable);

// Print readable format
print_r($variable);

// Get variable information as string
$info = var_export($variable, true);

// Debug backtrace
debug_print_backtrace();
$trace = debug_backtrace();
```

### Using Xdebug
```php
// Install Xdebug extension and configure in php.ini

// Dump variable with more information
var_dump($variable); // Enhanced by Xdebug

// Stack trace
xdebug_print_function_stack();

// Start code coverage
xdebug_start_code_coverage();
// ... code execution ...
$coverage = xdebug_get_code_coverage();
xdebug_stop_code_coverage();
```

### Error Reporting in Development vs Production
```php
// Check environment
$environment = getenv('APP_ENV') ?: 'production';

if ($environment === 'development') {
    // Development: Show all errors
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
} else {
    // Production: Hide errors, log them instead
    error_reporting(E_ALL);
    ini_set('display_errors', 0);
    ini_set('log_errors', 1);
    ini_set('error_log', __DIR__ . '/logs/php-errors.log');
}
```

## Best Learning Methods
- Create a custom error handling system for a project
- Practice with different types of exceptions and error scenarios
- Implement logging for a PHP application
- Set up different error handling for development and production
- Use Xdebug for advanced debugging
- Create custom exception classes for specific error types
- Reference: https://www.php.net/manual/en/language.errors.php
