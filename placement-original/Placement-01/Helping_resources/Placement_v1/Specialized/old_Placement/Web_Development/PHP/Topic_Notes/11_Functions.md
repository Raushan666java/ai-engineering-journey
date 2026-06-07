# PHP Functions

Functions are blocks of code that can be reused throughout a program. They help organize code, improve readability, and reduce redundancy.

## Function Declaration and Calling

### Basic Function Declaration

```php
<?php
// Function declaration
function greet() {
    echo "Hello, World!";
}

// Function call
greet(); // Outputs: Hello, World!
?>
```

### Functions with Parameters

```php
<?php
// Function with parameters
function greet($name) {
    echo "Hello, $name!";
}

// Function call with argument
greet("John"); // Outputs: Hello, John!

// Multiple parameters
function add($a, $b) {
    return $a + $b;
}

$result = add(5, 3); // $result = 8
?>
```

### Return Values

```php
<?php
// Function with return value
function multiply($a, $b) {
    return $a * $b;
}

$result = multiply(4, 5); // $result = 20

// Multiple return points
function checkNumber($num) {
    if ($num > 0) {
        return "Positive";
    } elseif ($num < 0) {
        return "Negative";
    } else {
        return "Zero";
    }
}

// Early return pattern
function findUser($id) {
    if (empty($id)) {
        return null; // Early return for invalid input
    }
    
    // Continue with normal processing
    $user = fetchUserFromDatabase($id);
    return $user;
}
?>
```

## Function Parameters

### Default Parameter Values

```php
<?php
// Parameters with default values
function greet($name = "Guest") {
    echo "Hello, $name!";
}

greet(); // Outputs: Hello, Guest!
greet("John"); // Outputs: Hello, John!

// Default values must be constant expressions
function connect($server, $port = 3306, $timeout = 30) {
    // Connection logic
}

// Only trailing parameters can have defaults
connect("localhost"); // Uses default port and timeout
connect("localhost", 8080); // Uses default timeout
connect("localhost", 8080, 60); // Uses all specified values
?>
```

### Type Declarations

```php
<?php
// Type declarations for parameters (PHP 7.0+)
function add(int $a, int $b) {
    return $a + $b;
}

// Strict typing (PHP 7.0+)
declare(strict_types=1); // Must be the first statement in the file

function divide(int $a, int $b): float {
    return $a / $b;
}

// Without strict_types, PHP will try to convert values
add("5", "10"); // Works without strict_types, fails with strict_types

// Union types (PHP 8.0+)
function process(string|int $data): string {
    if (is_int($data)) {
        return "Number: $data";
    }
    return "Text: $data";
}

// Nullable types (PHP 7.1+)
function findUser(?int $id): ?array {
    if ($id === null) {
        return null;
    }
    // Find user logic
    return ['id' => $id, 'name' => 'User ' . $id];
}
?>
```

### Variable-Length Parameter Lists

```php
<?php
// Using func_get_args() (older method)
function sum() {
    $total = 0;
    foreach (func_get_args() as $num) {
        $total += $num;
    }
    return $total;
}

echo sum(1, 2, 3, 4); // 10

// Using variadic parameters with ... (PHP 5.6+)
function betterSum(...$numbers) {
    return array_sum($numbers);
}

echo betterSum(1, 2, 3, 4); // 10

// Combining regular and variadic parameters
function userLog($action, $userId, ...$details) {
    echo "User $userId performed $action with details: ";
    print_r($details);
}

userLog("login", 123, "IP: 192.168.1.1", "Browser: Chrome");
?>
```

### Named Arguments (PHP 8.0+)

```php
<?php
function createUser(string $name, string $email, bool $active = true, array $roles = []) {
    // Create user logic
    return [
        'name' => $name,
        'email' => $email,
        'active' => $active,
        'roles' => $roles
    ];
}

// Traditional way (positional arguments)
$user1 = createUser("John", "john@example.com", true, ["admin"]);

// With named arguments
$user2 = createUser(
    name: "Jane",
    email: "jane@example.com",
    roles: ["editor"]
    // active parameter uses default value
);

// Order doesn't matter with named arguments
$user3 = createUser(
    roles: ["viewer"],
    email: "bob@example.com",
    name: "Bob"
);

// Mix positional and named arguments (positional must come first)
$user4 = createUser("Alice", email: "alice@example.com");
?>
```

## Return Values and Type Declarations

```php
<?php
// Basic return type declaration (PHP 7.0+)
function multiply(float $a, float $b): float {
    return $a * $b;
}

// Void return type (PHP 7.1+)
function logMessage(string $message): void {
    file_put_contents('app.log', $message . PHP_EOL, FILE_APPEND);
    // No return value expected
}

// Never return type (PHP 8.1+)
function redirect(string $url): never {
    header("Location: $url");
    exit;
}

function throwError(string $message): never {
    throw new Exception($message);
}

// Union return types (PHP 8.0+)
function fetchValue(string $key): string|int|null {
    $data = [
        'name' => 'John',
        'age' => 30,
        'status' => null
    ];
    
    return $data[$key] ?? null;
}

// Intersection types (PHP 8.1+)
interface Renderable {
    public function render(): string;
}

interface Cacheable {
    public function getCacheKey(): string;
}

function processComponent(Renderable&Cacheable $component): string {
    // Process component that implements both interfaces
    return $component->render();
}
?>
```

## Variable Scope in Functions

```php
<?php
// Global scope
$globalVar = "I'm global";

function testScope() {
    // Local scope
    $localVar = "I'm local";
    
    echo $localVar; // Works
    // echo $globalVar; // Undefined variable
}

// Accessing global variables
function accessGlobal() {
    global $globalVar; // Import global variable
    echo $globalVar; // Works
    
    // Alternative using $GLOBALS superglobal
    echo $GLOBALS['globalVar']; // Works
}

// Static variables
function counter() {
    static $count = 0; // Initialized only once
    $count++;
    return $count;
}

echo counter(); // 1
echo counter(); // 2
echo counter(); // 3

// Variable variables
$varName = "message";
$$varName = "Hello"; // Creates $message = "Hello"

function varVarDemo($name) {
    global $$name; // Access the variable whose name is in $name
    echo $$name;
}

varVarDemo("varName"); // Outputs: message
?>
```

## Anonymous Functions and Closures

```php
<?php
// Anonymous function assigned to a variable
$greet = function($name) {
    return "Hello, $name!";
};

echo $greet("John"); // Hello, John!

// Anonymous functions as arguments
$numbers = [1, 2, 3, 4, 5];
$squared = array_map(function($n) {
    return $n * $n;
}, $numbers);
// $squared = [1, 4, 9, 16, 25]

// Closures - anonymous functions that can inherit variables from the parent scope
$message = "Hello";
$greet = function($name) use ($message) {
    return "$message, $name!";
};

echo $greet("John"); // Hello, John!

// Modifying external variables with 'use' and reference
$total = 0;
$addToTotal = function($value) use (&$total) {
    $total += $value;
};

$addToTotal(5);
$addToTotal(10);
echo $total; // 15

// Returning closures from functions
function createMultiplier($factor) {
    return function($number) use ($factor) {
        return $number * $factor;
    };
}

$double = createMultiplier(2);
$triple = createMultiplier(3);

echo $double(5); // 10
echo $triple(5); // 15
?>
```

## Arrow Functions (PHP 7.4+)

```php
<?php
// Traditional anonymous function
$traditional = function($x) {
    return $x * 2;
};

// Arrow function equivalent
$arrow = fn($x) => $x * 2;

// Using arrow functions with array functions
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(fn($n) => $n * 2, $numbers);
// $doubled = [2, 4, 6, 8, 10]

// Arrow functions automatically capture variables from the parent scope
$factor = 3;
$multiplied = array_map(fn($n) => $n * $factor, $numbers);
// $multiplied = [3, 6, 9, 12, 15]

// Nested arrow functions
$operation = fn($x) => fn($y) => $x * $y;
$double = $operation(2);
echo $double(5); // 10

// Arrow functions with return types
$sum = fn(int $a, int $b): int => $a + $b;
?>
```

## Callable Type and Callbacks

```php
<?php
// Callable type hint
function processData(callable $processor, $data) {
    return $processor($data);
}

// Different ways to pass callables
// 1. Anonymous function
$result1 = processData(function($x) { return $x * 2; }, 5);

// 2. Arrow function (PHP 7.4+)
$result2 = processData(fn($x) => $x * 2, 5);

// 3. Named function
function double($x) {
    return $x * 2;
}
$result3 = processData('double', 5);

// 4. Static class method
class Math {
    public static function triple($x) {
        return $x * 3;
    }
}
$result4 = processData(['Math', 'triple'], 5);

// 5. Object method
class Calculator {
    public function multiply($x) {
        return $x * 4;
    }
}
$calc = new Calculator();
$result5 = processData([$calc, 'multiply'], 5);

// 6. Invokable object
class Multiplier {
    private $factor;
    
    public function __construct($factor) {
        $this->factor = $factor;
    }
    
    public function __invoke($x) {
        return $x * $this->factor;
    }
}
$multiplier = new Multiplier(5);
$result6 = processData($multiplier, 5);

// 7. First-class callable syntax (PHP 8.1+)
$result7 = processData(strlen(...), "hello"); // 5
?>
```

## Recursive Functions

```php
<?php
// Factorial calculation using recursion
function factorial($n) {
    if ($n <= 1) {
        return 1; // Base case
    }
    return $n * factorial($n - 1); // Recursive case
}

echo factorial(5); // 120 (5 * 4 * 3 * 2 * 1)

// Fibonacci sequence using recursion
function fibonacci($n) {
    if ($n <= 1) {
        return $n;
    }
    return fibonacci($n - 1) + fibonacci($n - 2);
}

echo fibonacci(10); // 55

// Directory traversal using recursion
function listFiles($dir) {
    $files = [];
    
    $items = scandir($dir);
    foreach ($items as $item) {
        if ($item === '.' || $item === '..') {
            continue;
        }
        
        $path = $dir . DIRECTORY_SEPARATOR . $item;
        
        if (is_dir($path)) {
            // Recursive case for directories
            $files = array_merge($files, listFiles($path));
        } else {
            // Base case for files
            $files[] = $path;
        }
    }
    
    return $files;
}

// Note: Recursive functions can cause stack overflow for deep recursion
// Consider iterative alternatives for performance-critical code
?>
```

## Built-in Functions Overview

PHP has a rich library of built-in functions. Here are some common categories:

### String Functions

```php
<?php
$str = "Hello, World!";

echo strlen($str);                // 13 - String length
echo strtolower($str);            // hello, world!
echo strtoupper($str);            // HELLO, WORLD!
echo str_replace("World", "PHP", $str); // Hello, PHP!
echo substr($str, 0, 5);          // Hello
echo strpos($str, "World");       // 7 - Position of "World"
?>
```

### Array Functions

```php
<?php
$fruits = ["apple", "banana", "orange"];

echo count($fruits);              // 3 - Count elements
print_r(array_reverse($fruits));  // Reverse array
sort($fruits);                    // Sort array
print_r(array_merge($fruits, ["grape", "kiwi"])); // Merge arrays
echo implode(", ", $fruits);      // Convert array to string
print_r(explode(", ", "apple, banana, orange")); // String to array
?>
```

### Mathematical Functions

```php
<?php
echo abs(-5);                     // 5 - Absolute value
echo round(3.7);                  // 4 - Round
echo floor(3.7);                  // 3 - Round down
echo ceil(3.2);                   // 4 - Round up
echo max(2, 5, 1, 8, 3);          // 8 - Maximum value
echo min(2, 5, 1, 8, 3);          // 1 - Minimum value
echo rand(1, 10);                 // Random number between 1 and 10
echo sqrt(16);                    // 4 - Square root
?>
```

### Date and Time Functions

```php
<?php
echo time();                      // Current Unix timestamp
echo date("Y-m-d H:i:s");         // Formatted date and time
echo strtotime("next Monday");     // Timestamp for next Monday
echo date("Y-m-d", strtotime("+1 week")); // Date one week from now
?>
```

### File System Functions

```php
<?php
file_put_contents("test.txt", "Hello, World!");
echo file_get_contents("test.txt");
echo file_exists("test.txt");     // Check if file exists
echo is_file("test.txt");         // Check if path is a file
echo is_dir("folder");            // Check if path is a directory
?>
```

### Variable and Type Functions

```php
<?php
echo gettype(5);                  // "integer"
echo is_int(5);                   // true
echo is_string("hello");          // true
echo is_array([1, 2, 3]);         // true
echo isset($variable);            // Check if variable is set
echo empty($variable);            // Check if variable is empty
var_dump($variable);              // Detailed information about a variable
?>
```

## Best Practices

1. **Use descriptive function names**: Names should clearly indicate what the function does.
2. **Keep functions small and focused**: Each function should do one thing well.
3. **Use type declarations**: Add parameter and return type declarations for better code quality.
4. **Document your functions**: Use PHPDoc comments to describe parameters, return values, and behavior.
5. **Limit the number of parameters**: Functions with many parameters are hard to use and maintain.
6. **Return early**: Use early returns to handle edge cases and reduce nesting.
7. **Avoid global variables**: Pass data as parameters instead of using globals.
8. **Use default parameters wisely**: Make functions more flexible without adding complexity.
9. **Consider using named arguments**: For functions with many parameters (PHP 8.0+).
10. **Prefer pure functions**: Functions that don't have side effects are easier to test and reason about.

## PHPDoc Comments

```php
<?php
/**
 * Calculate the sum of two numbers
 *
 * @param int|float $a First number
 * @param int|float $b Second number
 * @return int|float The sum of the two numbers
 */
function add($a, $b) {
    return $a + $b;
}

/**
 * Find a user by their ID
 *
 * @param int $id The user ID
 * @return array|null The user data or null if not found
 * @throws InvalidArgumentException If ID is not positive
 */
function findUser($id) {
    if ($id <= 0) {
        throw new InvalidArgumentException("User ID must be positive");
    }
    
    // Find user logic
    return ['id' => $id, 'name' => 'User ' . $id];
}
?>
```