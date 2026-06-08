# 4. Functions

## Function Basics

### Defining Functions
```php
function functionName($parameter1, $parameter2) {
    // function body
    return $result;
}
```

### Calling Functions
```php
$result = functionName($arg1, $arg2);
```

### Default Parameter Values
```php
function greet($name = 'Guest') {
    return "Hello, $name!";
}
echo greet(); // "Hello, Guest!"
echo greet('John'); // "Hello, John!"
```

### Return Values
```php
function add($a, $b) {
    return $a + $b; // Returns a value
}

function display($message) {
    echo $message; // No return value (returns null implicitly)
}
```

## Function Parameters

### Required Parameters
```php
function multiply($a, $b) {
    return $a * $b;
}
// multiply(); // Error: missing required parameters
```

### Optional Parameters
```php
function power($base, $exponent = 2) {
    return $base ** $exponent;
}
echo power(4); // 16 (4^2)
echo power(2, 3); // 8 (2^3)
```

### Variable-length Parameter Lists
```php
// PHP 5.6+
function sum(...$numbers) {
    return array_sum($numbers);
}
echo sum(1, 2, 3, 4); // 10

// Pre-PHP 5.6
function oldSum() {
    return array_sum(func_get_args());
}
```

### Named Arguments (PHP 8+)
```php
function formatName($first, $last, $title = '') {
    return $title ? "$title $first $last" : "$first $last";
}

echo formatName(last: 'Doe', first: 'John', title: 'Mr.'); // "Mr. John Doe"
```

## Type Declarations

### Parameter Type Declarations
```php
function add(int $a, int $b) {
    return $a + $b;
}
```

### Return Type Declarations
```php
function multiply(int $a, int $b): int {
    return $a * $b;
}
```

### Union Types (PHP 8+)
```php
function process(string|int $input): string|int {
    return $input;
}
```

### Nullable Types
```php
function findUser(int $id): ?array {
    // Return array or null
}
```

### Void Return Type
```php
function logMessage(string $message): void {
    echo "[LOG] $message";
    // No return value expected
}
```

### Mixed Type (PHP 8+)
```php
function getData(mixed $input): mixed {
    return $input;
}
```

## Variable Scope

### Local Scope
```php
function test() {
    $local = "I'm local";
    echo $local; // Accessible
}
// echo $local; // Error: not accessible outside function
```

### Global Variables
```php
$global = "I'm global";

function accessGlobal() {
    global $global; // Declare global variable
    echo $global; // Now accessible
    
    // Alternative using $GLOBALS superglobal
    echo $GLOBALS['global'];
}
```

### Static Variables
```php
function counter() {
    static $count = 0; // Initialized only once
    return ++$count;
}

echo counter(); // 1
echo counter(); // 2
echo counter(); // 3
```

## Anonymous Functions & Closures

### Anonymous Functions
```php
$greet = function($name) {
    return "Hello, $name!";
};

echo $greet('World'); // "Hello, World!"
```

### Closures (with 'use' keyword)
```php
$message = "Hello";

$greet = function($name) use ($message) {
    return "$message, $name!";
};

echo $greet('World'); // "Hello, World!"
```

### Arrow Functions (PHP 7.4+)
```php
$numbers = [1, 2, 3, 4];
$doubled = array_map(fn($n) => $n * 2, $numbers);
// $doubled = [2, 4, 6, 8]
```

## Callable Types

### Function References
```php
$func = 'strtoupper';
echo $func('hello'); // "HELLO"
```

### Method Calls
```php
class Greeting {
    public function sayHello($name) {
        return "Hello, $name!";
    }
}

$obj = new Greeting();
$method = [$obj, 'sayHello'];
echo $method('World'); // "Hello, World!"
```

### First-class Callable Syntax (PHP 8.1+)
```php
$strlen = strlen(...); // Create callable
echo $strlen('hello'); // 5
```

## Recursive Functions
```php
function factorial($n) {
    if ($n <= 1) return 1;
    return $n * factorial($n - 1);
}

echo factorial(5); // 120
```

## Common Built-in Functions

### Variable Functions
- `isset()` - Checks if variable is set and not null
- `empty()` - Checks if variable is empty
- `is_null()`, `is_array()`, `is_string()`, etc. - Type checking
- `var_dump()` - Outputs variable information
- `print_r()` - Prints human-readable information

### String Functions
- `strlen()` - String length
- `str_replace()` - Replace text
- `strpos()` - Find position in string
- `substr()` - Extract part of string

### Array Functions
- `count()` - Count elements
- `array_push()` - Add to array
- `array_map()` - Apply function to elements
- `array_filter()` - Filter elements

### Math Functions
- `rand()` - Random number
- `round()`, `ceil()`, `floor()` - Rounding
- `min()`, `max()` - Minimum/maximum

## Best Learning Methods
- Practice writing custom functions for specific tasks
- Refactor repetitive code into reusable functions
- Experiment with different parameter types and return values
- Study PHP's built-in functions for common operations
- Practice using anonymous functions with array functions
- Reference: https://www.php.net/manual/en/language.functions.php
