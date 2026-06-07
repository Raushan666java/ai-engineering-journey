# 02. PHP Basics

## Variables

### Declaration and Assignment

```php
<?php
// Variables start with $
$name = "Alice";
$age = 25;
$height = 5.6;
$isStudent = true;

// Dynamic typing (type can change)
$value = 10;        // integer
$value = "text";    // now string
$value = 3.14;      // now float
?>
```

### Variable Naming Rules

```php
<?php
// Valid
$name = "Valid";
$_name = "Valid";
$name123 = "Valid";
$camelCase = "Valid";
$snake_case = "Valid";

// Invalid
// $123name = "Invalid";  // Can't start with number
// $na-me = "Invalid";    // No hyphens
// $na me = "Invalid";    // No spaces
?>
```

### Variable Variables

```php
<?php
$var = "hello";
$$var = "world";  // Creates $hello = "world"
echo $hello;      // Outputs: world
?>
```

---

## Constants

### Using define()

```php
<?php
define("SITE_NAME", "My Website");
define("MAX_USERS", 100);
define("PI", 3.14159);

echo SITE_NAME;  // My Website

// Case-insensitive (not recommended)
define("GREETING", "Hello", true);
echo greeting;  // Hello
?>
```

### Using const (PHP 5.3+)

```php
<?php
const DB_HOST = "localhost";
const DB_NAME = "mydb";

echo DB_HOST;  // localhost

// Class constants
class Config {
    const VERSION = "1.0.0";
    public const API_KEY = "abc123";  // PHP 7.1+
    private const SECRET = "xyz789";  // PHP 7.1+
}

echo Config::VERSION;
?>
```

### Magic Constants

```php
<?php
echo __LINE__;      // Current line number
echo __FILE__;      // Full path of file
echo __DIR__;       // Directory of file
echo __FUNCTION__;  // Function name
echo __CLASS__;     // Class name
echo __METHOD__;    // Class method name
echo __NAMESPACE__; // Current namespace
?>
```

---

## Data Types

### Scalar Types

```php
<?php
// String
$str = "Hello World";
$str2 = 'Single quotes';

// Integer
$int = 42;
$hex = 0x1A;     // Hexadecimal
$oct = 0o17;     // Octal (PHP 8.1+)
$bin = 0b1010;   // Binary

// Float (double)
$float = 3.14;
$scientific = 1.2e3;  // 1200

// Boolean
$bool = true;
$bool2 = false;
?>
```

### Compound Types

```php
<?php
// Array
$arr = [1, 2, 3];
$assoc = ["name" => "Alice", "age" => 25];

// Object
class Person {
    public $name;
}
$person = new Person();
$person->name = "Bob";

// Callable
$callback = function() { return "Hello"; };
?>
```

### Special Types

```php
<?php
// NULL
$var = null;
$undefined;  // Also null

// Resource (e.g., file handle)
$file = fopen("test.txt", "r");
?>
```

### Type Checking

```php
<?php
$value = 42;

// Get type
echo gettype($value);  // integer
echo get_debug_type($value);  // int (PHP 8.0+)

// Check specific type
var_dump(is_int($value));     // true
var_dump(is_string($value));  // false
var_dump(is_array($value));   // false
var_dump(is_bool($value));    // false
var_dump(is_null($value));    // false
var_dump(is_numeric($value)); // true
?>
```

---

## Type Casting

```php
<?php
// Explicit casting
$str = "123";
$int = (int)$str;        // 123
$float = (float)"3.14";  // 3.14
$bool = (bool)1;         // true
$arr = (array)"test";    // ["test"]

// Using functions
$int2 = intval("456");
$float2 = floatval("2.71");
$str2 = strval(100);

// Type juggling (automatic)
$result = "10" + 5;  // 15 (string becomes int)
$concat = "Value: " . 10;  // "Value: 10"
?>
```

---

## Operators

### Arithmetic

```php
<?php
$a = 10;
$b = 3;

echo $a + $b;   // 13 (Addition)
echo $a - $b;   // 7  (Subtraction)
echo $a * $b;   // 30 (Multiplication)
echo $a / $b;   // 3.333... (Division)
echo $a % $b;   // 1  (Modulus)
echo $a ** $b;  // 1000 (Exponentiation, PHP 5.6+)
?>
```

### Assignment

```php
<?php
$x = 10;
$x += 5;   // $x = $x + 5  (15)
$x -= 3;   // $x = $x - 3  (12)
$x *= 2;   // $x = $x * 2  (24)
$x /= 4;   // $x = $x / 4  (6)
$x %= 4;   // $x = $x % 4  (2)
$x **= 3;  // $x = $x ** 3 (8)

$str = "Hello";
$str .= " World";  // "Hello World"
?>
```

### Comparison

```php
<?php
$a = 5;
$b = "5";

var_dump($a == $b);   // true (equal value)
var_dump($a === $b);  // false (equal value AND type)
var_dump($a != $b);   // false
var_dump($a !== $b);  // true (not identical)
var_dump($a < 10);    // true
var_dump($a > 10);    // false
var_dump($a <= 5);    // true
var_dump($a >= 5);    // true

// Spaceship operator (PHP 7.0+)
echo 5 <=> 3;   // 1  (5 > 3)
echo 3 <=> 5;   // -1 (3 < 5)
echo 5 <=> 5;   // 0  (5 == 5)
?>
```

### Logical

```php
<?php
$x = true;
$y = false;

var_dump($x && $y);  // false (AND)
var_dump($x || $y);  // true  (OR)
var_dump(!$x);       // false (NOT)
var_dump($x and $y); // false (lower precedence AND)
var_dump($x or $y);  // true  (lower precedence OR)
var_dump($x xor $y); // true  (XOR)
?>
```

### String

```php
<?php
$first = "Hello";
$last = "World";

// Concatenation
$full = $first . " " . $last;  // "Hello World"
$full .= "!";                  // "Hello World!"
?>
```

### Increment/Decrement

```php
<?php
$x = 5;

echo ++$x;  // 6 (pre-increment, returns 6)
echo $x++;  // 6 (post-increment, returns 6, $x becomes 7)
echo --$x;  // 6 (pre-decrement)
echo $x--;  // 6 (post-decrement, $x becomes 5)
?>
```

### Null Coalescing (PHP 7.0+)

```php
<?php
// Before PHP 7
$name = isset($_GET['name']) ? $_GET['name'] : 'Guest';

// PHP 7.0+
$name = $_GET['name'] ?? 'Guest';

// PHP 7.4+ (null coalescing assignment)
$config['timeout'] ??= 30;  // Set if not already set
?>
```

### Nullsafe Operator (PHP 8.0+)

```php
<?php
class User {
    public ?Profile $profile = null;
}

class Profile {
    public string $bio = "Hello";
}

$user = new User();

// Before PHP 8
$bio = $user->profile !== null ? $user->profile->bio : null;

// PHP 8.0+
$bio = $user?->profile?->bio;  // null (no error)
?>
```

---

## Comments

```php
<?php
// Single-line comment

# Shell-style comment (also single-line)

/*
   Multi-line comment
   Can span multiple lines
*/

/**
 * PHPDoc comment (for documentation)
 * @param string $name The user's name
 * @return void
 */
function greet($name) {
    echo "Hello, $name";
}
?>
```

---

## Variable Scope

```php
<?php
// Global scope
$globalVar = "Global";

function test() {
    // Local scope
    $localVar = "Local";

    // Access global variable
    global $globalVar;
    echo $globalVar;  // Global

    // Alternative: use $GLOBALS
    echo $GLOBALS['globalVar'];  // Global
}

test();
// echo $localVar;  // Error: undefined variable
?>
```

---

## Strict Types (PHP 7.0+)

```php
<?php
declare(strict_types=1);  // Must be first line

function add(int $a, int $b): int {
    return $a + $b;
}

echo add(5, 10);     // 15
// echo add("5", 10);  // TypeError in strict mode
?>
```

---

## Practice Exercises

1. Create variables of each data type and print their types
2. Perform arithmetic operations and display results
3. Use comparison and logical operators
4. Implement null coalescing and nullsafe operators
5. Create constants and use them in calculations

---

**Next:** [03. Control Structures](03_Control_Structures.md)
