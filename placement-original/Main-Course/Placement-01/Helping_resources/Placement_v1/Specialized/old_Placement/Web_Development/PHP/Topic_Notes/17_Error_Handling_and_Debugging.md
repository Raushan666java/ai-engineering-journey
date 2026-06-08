# Error Handling and Debugging in PHP

Proper error handling and debugging are essential for developing robust PHP applications. This guide covers various techniques for handling errors, exceptions, and debugging PHP code.

## Error Types

### Error Levels

PHP defines several error levels, each representing different types of errors:

| Constant | Value | Description |
|----------|-------|-------------|
| E_ERROR | 1 | Fatal run-time errors that cannot be recovered from |
| E_WARNING | 2 | Run-time warnings that don't halt script execution |
| E_PARSE | 4 | Compile-time parse errors |
| E_NOTICE | 8 | Run-time notices indicating possible errors |
| E_CORE_ERROR | 16 | Fatal errors during PHP's initial startup |
| E_CORE_WARNING | 32 | Warnings during PHP's initial startup |
| E_COMPILE_ERROR | 64 | Fatal compile-time errors |
| E_COMPILE_WARNING | 128 | Compile-time warnings |
| E_USER_ERROR | 256 | User-generated error message |
| E_USER_WARNING | 512 | User-generated warning message |
| E_USER_NOTICE | 1024 | User-generated notice message |
| E_STRICT | 2048 | Suggestions for code improvements |
| E_RECOVERABLE_ERROR | 4096 | Catchable fatal error |
| E_DEPRECATED | 8192 | Warnings about code that will not work in future versions |
| E_USER_DEPRECATED | 16384 | User-generated deprecation warnings |
| E_ALL | 32767 | All errors and warnings |

### Common Error Scenarios

```php
<?php
// E_ERROR - Fatal error
// require 'non_existent_file.php'; // Uncomment to see fatal error

// E_WARNING - Warning
$file = fopen('non_existent_file.txt', 'r'); // Warning: failed to open stream

// E_NOTICE - Notice
$name = $undefined_variable; // Notice: Undefined variable

// E_PARSE - Parse error
// echo "Unclosed string; // Uncomment to see parse error

// E_DEPRECATED - Deprecated feature
// Using deprecated function
if (PHP_VERSION_ID >= 80000) {
    // parse_str() without second parameter is deprecated in PHP 8.0
    // parse_str("name=John&age=30"); // Uncomment to see deprecation warning
}

// E_USER_ERROR - User-triggered error
if (!isset($required_variable)) {
    trigger_error("Required variable is not set", E_USER_ERROR);
}

// E_USER_WARNING - User-triggered warning
if ($value < 0) {
    trigger_error("Negative value provided", E_USER_WARNING);
}

// E_USER_NOTICE - User-triggered notice
if ($optional_feature_used) {
    trigger_error("Optional feature will be removed in next version", E_USER_NOTICE);
}
?>
```

## Error Reporting

### Configuration

```php
<?php
// Display errors (development environment)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Hide errors (production environment)
ini_set('display_errors', 0);
ini_set('display_startup_errors', 0);
error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);

// Log errors instead of displaying them
ini_set('log_errors', 1);
ini_set('error_log', '/path/to/error.log');

// Set maximum error log size
ini_set('log_errors_max_len', 1024);

// Ignore repeated errors
ini_set('ignore_repeated_errors', 1);

// Check current error reporting level
$level = error_reporting();
echo "Current error reporting level: $level";

// Check if specific error type is included
function isErrorTypeReported($type) {
    return (error_reporting() & $type) === $type;
}

if (isErrorTypeReported(E_NOTICE)) {
    echo "Notices are being reported";
}
?>
```

### PHP.ini Settings

Common error-related settings in php.ini:

```ini
; Error reporting
error_reporting = E_ALL

; Display errors
display_errors = On
display_startup_errors = On

; Log errors
log_errors = On
error_log = /path/to/error.log

; Maximum length of logged errors
log_errors_max_len = 1024

; Ignore repeated errors
ignore_repeated_errors = Off
ignore_repeated_source = Off

; Report memory leaks
report_memleaks = On

; HTML formatting of errors
html_errors = On

; Error prepend/append string
error_prepend_string = "<div style='color: red; font-weight: bold;'>"
error_append_string = "</div>"

; Error reporting during shutdown
register_shutdown_function = On
```

## Exception Handling

### Basic Try-Catch

```php
<?php
try {
    // Code that might throw an exception
    $file = new SplFileObject('non_existent_file.txt');
} catch (Exception $e) {
    // Handle the exception
    echo "An error occurred: " . $e->getMessage();
}

// Try-catch with finally block
try {
    $db = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->beginTransaction();
    
    // Database operations
    $db->exec("INSERT INTO users (name) VALUES ('John')");
    
    $db->commit();
} catch (PDOException $e) {
    // Roll back transaction on error
    if ($db->inTransaction()) {
        $db->rollBack();
    }
    echo "Database error: " . $e->getMessage();
} finally {
    // This block always executes, regardless of whether an exception was thrown
    $db = null; // Close connection
}
?>
```

### Multiple Catch Blocks

```php
<?php
try {
    $value = 10;
    if ($value > 10) {
        throw new InvalidArgumentException("Value is too large");
    } elseif ($value < 0) {
        throw new RangeException("Value cannot be negative");
    } elseif ($value == 0) {
        throw new Exception("Value cannot be zero");
    }
    
    // More code that might throw exceptions
    $result = file_get_contents('http://example.com/api');
    if ($result === false) {
        throw new RuntimeException("Failed to fetch data from API");
    }
} catch (InvalidArgumentException $e) {
    // Handle invalid argument exception
    echo "Invalid argument: " . $e->getMessage();
} catch (RangeException $e) {
    // Handle range exception
    echo "Range error: " . $e->getMessage();
} catch (RuntimeException $e) {
    // Handle runtime exception
    echo "Runtime error: " . $e->getMessage();
    // Log the error
    error_log("API Error: " . $e->getMessage());
} catch (Exception $e) {
    // Handle any other exception
    echo "General error: " . $e->getMessage();
}
?>
```

### Custom Exceptions

```php
<?php
// Define custom exception classes
class DatabaseException extends Exception {
    protected $query;
    
    public function __construct($message, $query = '', $code = 0, Exception $previous = null) {
        $this->query = $query;
        parent::__construct($message, $code, $previous);
    }
    
    public function getQuery() {
        return $this->query;
    }
}

class ValidationException extends Exception {
    protected $field;
    
    public function __construct($message, $field = '', $code = 0, Exception $previous = null) {
        $this->field = $field;
        parent::__construct($message, $code, $previous);
    }
    
    public function getField() {
        return $this->field;
    }
}

// Using custom exceptions
try {
    // Database operation
    $query = "SELECT * FROM non_existent_table";
    $result = $db->query($query);
    
    if ($result === false) {
        throw new DatabaseException("Query failed", $query);
    }
    
    // Form validation
    $email = $_POST['email'] ?? '';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        throw new ValidationException("Invalid email format", 'email');
    }
} catch (DatabaseException $e) {
    echo "Database error: " . $e->getMessage();
    echo "Query: " . $e->getQuery();
    // Log the error
    error_log("Database error: " . $e->getMessage() . " - Query: " . $e->getQuery());
} catch (ValidationException $e) {
    echo "Validation error: " . $e->getMessage();
    echo "Field: " . $e->getField();
}
?>
```

### Exception Hierarchy (PHP 7+)

```php
<?php
// PHP 7+ has a more structured exception hierarchy
try {
    // Division by zero
    $result = 10 / 0;
} catch (DivisionByZeroError $e) {
    echo "Division by zero error: " . $e->getMessage();
} catch (ArithmeticError $e) {
    echo "Arithmetic error: " . $e->getMessage();
} catch (Error $e) {
    echo "Error: " . $e->getMessage();
} catch (Exception $e) {
    echo "Exception: " . $e->getMessage();
} catch (Throwable $e) {
    // Throwable is the base interface for all errors and exceptions in PHP 7+
    echo "Throwable: " . $e->getMessage();
}

/*
Exception hierarchy in PHP 7+:
- Throwable (interface)
  - Error
    - ArithmeticError
      - DivisionByZeroError
    - AssertionError
    - ParseError
    - TypeError
    - CompileError
      - CompileWarning
  - Exception
    - LogicException
      - BadFunctionCallException
        - BadMethodCallException
      - DomainException
      - InvalidArgumentException
      - LengthException
      - OutOfRangeException
    - RuntimeException
      - OutOfBoundsException
      - OverflowException
      - RangeException
      - UnderflowException
      - UnexpectedValueException
*/
?>
```

## Custom Error Handlers

### Set Error Handler

```php
<?php
// Custom error handler function
function customErrorHandler($errno, $errstr, $errfile, $errline) {
    $errorTypes = [
        E_ERROR => 'Error',
        E_WARNING => 'Warning',
        E_PARSE => 'Parse Error',
        E_NOTICE => 'Notice',
        E_CORE_ERROR => 'Core Error',
        E_CORE_WARNING => 'Core Warning',
        E_COMPILE_ERROR => 'Compile Error',
        E_COMPILE_WARNING => 'Compile Warning',
        E_USER_ERROR => 'User Error',
        E_USER_WARNING => 'User Warning',
        E_USER_NOTICE => 'User Notice',
        E_STRICT => 'Strict Standards',
        E_RECOVERABLE_ERROR => 'Recoverable Error',
        E_DEPRECATED => 'Deprecated',
        E_USER_DEPRECATED => 'User Deprecated'
    ];
    
    $errorType = $errorTypes[$errno] ?? 'Unknown Error';
    
    // Format the error message
    $message = "$errorType: $errstr in $errfile on line $errline";
    
    // Log the error
    error_log($message);
    
    // Display error based on environment
    if (defined('ENVIRONMENT') && ENVIRONMENT === 'development') {
        echo "<div style='color: red; border: 1px solid red; padding: 10px;'>";
        echo "<strong>$errorType:</strong> $errstr<br>";
        echo "File: $errfile<br>";
        echo "Line: $errline";
        echo "</div>";
    } else {
        // In production, show a user-friendly message
        if ($errno === E_USER_ERROR) {
            echo "An application error has occurred. Please try again later.";
        }
    }
    
    // Don't execute PHP's internal error handler
    return true;
}

// Set the custom error handler
set_error_handler('customErrorHandler');

// Test the error handler
echo $undefined_variable; // This will trigger a notice
trigger_error("This is a user error", E_USER_ERROR);

// Restore the previous error handler
restore_error_handler();
?>
```

### Set Exception Handler

```php
<?php
// Custom exception handler function
function customExceptionHandler($exception) {
    // Log the exception
    error_log("Uncaught exception: " . $exception->getMessage());
    
    // Get exception details
    $message = $exception->getMessage();
    $file = $exception->getFile();
    $line = $exception->getLine();
    $trace = $exception->getTraceAsString();
    
    // Display error based on environment
    if (defined('ENVIRONMENT') && ENVIRONMENT === 'development') {
        echo "<div style='color: red; border: 1px solid red; padding: 10px;'>";
        echo "<h2>Uncaught Exception</h2>";
        echo "<p><strong>Message:</strong> $message</p>";
        echo "<p><strong>File:</strong> $file</p>";
        echo "<p><strong>Line:</strong> $line</p>";
        echo "<p><strong>Stack Trace:</strong></p>";
        echo "<pre>$trace</pre>";
        echo "</div>";
    } else {
        // In production, show a user-friendly message
        echo "An application error has occurred. Please try again later.";
        
        // Optionally, send an email to the administrator
        $to = 'admin@example.com';
        $subject = 'Uncaught Exception';
        $body = "Message: $message\nFile: $file\nLine: $line\nTrace:\n$trace";
        mail($to, $subject, $body);
    }
    
    // Exit with error code
    exit(1);
}

// Set the custom exception handler
set_exception_handler('customExceptionHandler');

// Test the exception handler
throw new Exception("This is a test exception");

// Restore the previous exception handler
restore_exception_handler();
?>
```

### Error to Exception Conversion

```php
<?php
// Convert errors to exceptions
function errorToException($errno, $errstr, $errfile, $errline) {
    // Don't throw exceptions for errors that are not included in error_reporting
    if (!(error_reporting() & $errno)) {
        return false;
    }
    
    // Map error levels to exception classes
    switch ($errno) {
        case E_ERROR:
        case E_USER_ERROR:
            throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
            break;
            
        case E_WARNING:
        case E_USER_WARNING:
            throw new WarningException($errstr, 0, $errno, $errfile, $errline);
            break;
            
        case E_NOTICE:
        case E_USER_NOTICE:
            throw new NoticeException($errstr, 0, $errno, $errfile, $errline);
            break;
            
        default:
            throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
            break;
    }
    
    // Don't execute PHP's internal error handler
    return true;
}

// Custom exception classes
class WarningException extends ErrorException {}
class NoticeException extends ErrorException {}

// Set the error handler
set_error_handler('errorToException');

// Now you can catch errors as exceptions
try {
    // This would normally trigger a warning
    $file = fopen('non_existent_file.txt', 'r');
} catch (WarningException $e) {
    echo "Warning caught: " . $e->getMessage();
} catch (ErrorException $e) {
    echo "Error caught: " . $e->getMessage();
}

// Restore the previous error handler
restore_error_handler();
?>
```

## Shutdown Function

```php
<?php
// Register shutdown function
function shutdownHandler() {
    $error = error_get_last();
    
    if ($error !== null && ($error['type'] === E_ERROR || $error['type'] === E_PARSE || $error['type'] === E_COMPILE_ERROR)) {
        // Fatal error occurred
        $message = $error['message'];
        $file = $error['file'];
        $line = $error['line'];
        
        // Log the error
        error_log("Fatal error: $message in $file on line $line");
        
        // Display error based on environment
        if (defined('ENVIRONMENT') && ENVIRONMENT === 'development') {
            echo "<div style='color: red; border: 1px solid red; padding: 10px;'>";
            echo "<h2>Fatal Error</h2>";
            echo "<p><strong>Message:</strong> $message</p>";
            echo "<p><strong>File:</strong> $file</p>";
            echo "<p><strong>Line:</strong> $line</p>";
            echo "</div>";
        } else {
            // In production, show a user-friendly message
            echo "An application error has occurred. Please try again later.";
        }
    }
}

// Register the shutdown function
register_shutdown_function('shutdownHandler');

// Test with a fatal error
// Uncomment the line below to test
// require 'non_existent_file.php';
?>
```

## Logging

### Basic Error Logging

```php
<?php
// Log message to the default error log
error_log("This is a test error message");

// Log message to a specific file
error_log("This is a test error message", 3, "/path/to/error.log");

// Send an error message by email
error_log("This is a test error message", 1, "admin@example.com");

// Log with different levels
function logError($message) {
    error_log("[ERROR] $message");
}

function logWarning($message) {
    error_log("[WARNING] $message");
}

function logInfo($message) {
    error_log("[INFO] $message");
}

// Usage
logError("Database connection failed");
logWarning("Deprecated function used");
logInfo("User logged in");

// Log with context
function logWithContext($level, $message, array $context = []) {
    // Replace placeholders in the message
    $replacements = [];
    foreach ($context as $key => $value) {
        if (is_string($value) || is_numeric($value)) {
            $replacements['{' . $key . '}'] = $value;
        }
    }
    
    $message = strtr($message, $replacements);
    
    // Add timestamp
    $timestamp = date('Y-m-d H:i:s');
    
    // Log the message
    error_log("[$timestamp] [$level] $message");
}

// Usage
logWithContext('ERROR', 'User {user} failed to log in', ['user' => 'john@example.com']);
?>
```

### Advanced Logging with Monolog

```php
<?php
// Using Monolog library (requires installation via Composer)
// composer require monolog/monolog

require 'vendor/autoload.php';

use Monolog\Logger;
use Monolog\Handler\StreamHandler;
use Monolog\Handler\RotatingFileHandler;
use Monolog\Formatter\LineFormatter;
use Monolog\Processor\IntrospectionProcessor;
use Monolog\Processor\WebProcessor;

// Create a logger
$logger = new Logger('app');

// Add handlers
// Simple stream handler
$logger->pushHandler(new StreamHandler('app.log', Logger::DEBUG));

// Rotating file handler (creates a new log file each day)
$logger->pushHandler(new RotatingFileHandler('logs/app.log', 7, Logger::INFO));

// Custom formatted handler
$formatter = new LineFormatter(
    "[%datetime%] %channel%.%level_name%: %message% %context% %extra%\n",
    "Y-m-d H:i:s"
);

$streamHandler = new StreamHandler('php://stderr', Logger::WARNING);
$streamHandler->setFormatter($formatter);
$logger->pushHandler($streamHandler);

// Add processors
$logger->pushProcessor(new IntrospectionProcessor()); // Adds file/line/class/method information
$logger->pushProcessor(new WebProcessor()); // Adds request information

// Log messages
$logger->debug('Debug message');
$logger->info('User logged in', ['user_id' => 123]);
$logger->warning('Deprecated function used', ['function' => 'old_function']);
$logger->error('Database connection failed', ['exception' => new Exception('Connection refused')]);
$logger->critical('Application error', ['error_code' => 500]);
$logger->alert('Payment failed', ['amount' => 99.99, 'currency' => 'USD']);
$logger->emergency('System is down');
?>
```

## Debugging Techniques

### Basic Debugging

```php
<?php
// Simple variable dump
$user = [
    'id' => 1,
    'name' => 'John Doe',
    'email' => 'john@example.com',
    'roles' => ['admin', 'editor']
];

// Print readable information about a variable
print_r($user);

// Print detailed information about a variable
var_dump($user);

// Print variable information in a more readable format
var_export($user);

// Debug with custom function
function debug($var, $exit = false) {
    echo '<pre>';
    if (is_bool($var) || is_null($var)) {
        var_dump($var);
    } else {
        print_r($var);
    }
    echo '</pre>';
    
    if ($exit) {
        exit;
    }
}

debug($user);

// Debug with backtrace
function debugWithTrace($var) {
    echo '<pre>';
    print_r($var);
    echo "\n\nBacktrace:\n";
    debug_print_backtrace();
    echo '</pre>';
}

debugWithTrace($user);

// Debug to console
function debugToConsole($data) {
    $output = json_encode($data);
    echo "<script>console.log($output);</script>";
}

debugToConsole($user);
?>
```

### Using Xdebug

Xdebug is a powerful PHP extension that provides debugging and profiling capabilities.

#### Installation

```bash
# For Ubuntu/Debian
sudo apt-get install php-xdebug

# For macOS with Homebrew
brew install php@8.1-xdebug

# For Windows with XAMPP
# Download the appropriate DLL from xdebug.org and add to php.ini
```

#### Configuration in php.ini

```ini
[xdebug]
zend_extension=xdebug.so
xdebug.mode=debug
xdebug.start_with_request=yes
xdebug.client_port=9003
xdebug.client_host=127.0.0.1
xdebug.idekey=VSCODE
xdebug.log=/path/to/xdebug.log
```

#### Using Xdebug with VS Code

1. Install the PHP Debug extension in VS Code
2. Create a launch.json file:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "pathMappings": {
                "/var/www/html": "${workspaceFolder}"
            }
        }
    ]
}
```

3. Set breakpoints in your code
4. Start debugging in VS Code
5. Load your PHP page in the browser

#### Xdebug Functions

```php
<?php
// Trigger a breakpoint
xdebug_break();

// Get stack trace
$trace = xdebug_get_function_stack();
print_r($trace);

// Start code coverage
xdebug_start_code_coverage();

// Execute code to be covered
function test() {
    echo "Testing code coverage";
}
test();

// Get code coverage data
$coverage = xdebug_get_code_coverage();
print_r($coverage);

// Stop code coverage
xdebug_stop_code_coverage();

// Dump variables with formatting
xdebug_var_dump($user);
?>
```

### Error Reporting in Development vs Production

```php
<?php
// Define environment
define('ENVIRONMENT', 'development'); // Options: development, testing, production

// Set error reporting based on environment
switch (ENVIRONMENT) {
    case 'development':
        error_reporting(E_ALL);
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        break;
        
    case 'testing':
        error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        break;
        
    case 'production':
        error_reporting(E_ALL & ~E_DEPRECATED & ~E_STRICT);
        ini_set('display_errors', 0);
        ini_set('display_startup_errors', 0);
        ini_set('log_errors', 1);
        ini_set('error_log', '/path/to/production-errors.log');
        break;
        
    default:
        header('HTTP/1.1 503 Service Unavailable.', true, 503);
        echo 'The application environment is not set correctly.';
        exit(1);
}

// Create a debug function that only works in development
function debug($var) {
    if (ENVIRONMENT === 'development') {
        echo '<pre>';
        print_r($var);
        echo '</pre>';
    }
}

// Usage
debug($user); // Only displays in development environment
?>
```

## Best Practices

1. **Use appropriate error reporting**: Set different error reporting levels for development and production.
2. **Log errors in production**: Always log errors in production instead of displaying them to users.
3. **Implement custom error handlers**: Create custom error and exception handlers for better error management.
4. **Use try-catch blocks**: Wrap code that might throw exceptions in try-catch blocks.
5. **Create custom exception classes**: Define specific exception classes for different types of errors.
6. **Validate input data**: Validate all input data to prevent errors.
7. **Use meaningful error messages**: Write clear and helpful error messages.
8. **Implement proper logging**: Use a logging library like Monolog for advanced logging.
9. **Set up monitoring**: Implement monitoring to be alerted of critical errors.
10. **Review error logs regularly**: Regularly check error logs to identify and fix issues.