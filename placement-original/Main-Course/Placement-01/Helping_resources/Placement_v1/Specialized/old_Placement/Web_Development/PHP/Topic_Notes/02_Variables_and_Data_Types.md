# Variables and Data Types in PHP

## Variables in PHP

Variables in PHP are represented by a dollar sign (`$`) followed by the variable name. Variable names are case-sensitive.

### Variable Declaration

```php
<?php
$name = "John";
$age = 25;
$isStudent = true;
$price = 19.99;
?>
```

### Variable Naming Rules

- Must start with a letter or underscore
- Can only contain alphanumeric characters and underscores (A-z, 0-9, and _)
- Cannot contain spaces
- Case-sensitive (`$name` and `$Name` are different variables)

```php
// Valid variable names
$name
$_name
$name1
$firstName

// Invalid variable names
$1name     // Cannot start with a number
$name-first // Cannot contain hyphens
$name first // Cannot contain spaces
```

### Variable Assignment

```php
<?php
// Direct assignment
$name = "John";

// Assign one variable to another
$firstName = "John";
$name = $firstName;

// Assign by reference
$name = "John";
$userName = &$name; // $userName is a reference to $name
$userName = "Jane"; // Changes both $userName and $name to "Jane"

// Multiple assignment
$a = $b = $c = 10; // All variables get value 10
?>
```

## PHP's Dynamic Typing

PHP is a loosely typed language, which means you don't need to declare variable types. The type is determined by the value assigned.

```php
<?php
$var = "Hello"; // $var is a string
$var = 25;      // Now $var is an integer
$var = true;    // Now $var is a boolean
?>
```

## Basic Data Types

PHP supports eight primitive data types:

### 1. Integers

Whole numbers without a decimal point.

```php
<?php
$int1 = 42;      // Decimal (base 10)
$int2 = -123;    // Negative number
$int3 = 0x1A;    // Hexadecimal (value: 26)
$int4 = 0b1010;  // Binary (value: 10)
$int5 = 0123;    // Octal (value: 83)

// Integer size depends on platform (usually 32-bit or 64-bit)
echo PHP_INT_MAX; // Maximum integer value
echo PHP_INT_MIN; // Minimum integer value
?>
```

### 2. Floats (Doubles)

Numbers with a decimal point or in exponential form.

```php
<?php
$float1 = 3.14;
$float2 = 1.2e3;     // 1200
$float3 = 7E-10;     // 0.0000000007

// Floating point precision issues
$a = 0.1;
$b = 0.2;
echo $a + $b; // Might output 0.30000000000000004
// Use number_format() or round() for display
echo number_format($a + $b, 2); // 0.30
?>
```

### 3. Strings

Sequence of characters.

```php
<?php
// Single quotes - literal string
$string1 = 'Hello World';

// Double quotes - interprets variables and escape sequences
$name = "John";
$string2 = "Hello $name"; // "Hello John"
$string3 = "Line 1\nLine 2"; // Contains a newline

// Heredoc - for multi-line strings with variable interpolation
$string4 = <<<EOD
This is a multi-line string
with variable interpolation: $name
EOD;

// Nowdoc - for multi-line strings without variable interpolation
$string5 = <<<'EOD'
This is a multi-line string
without variable interpolation: $name
EOD;

// String access by index
$str = "Hello";
echo $str[0]; // "H"
echo $str[-1]; // "o" (negative index counts from the end)
?>
```

### 4. Booleans

Represents truth values - `true` or `false`.

```php
<?php
$isActive = true;
$isDeleted = false;

// Values interpreted as false:
$a = false;      // boolean false
$a = 0;          // integer 0
$a = 0.0;        // float 0.0
$a = "";         // empty string
$a = "0";        // string "0"
$a = [];         // empty array
$a = null;       // null

// All other values are interpreted as true
?>
```

### 5. Arrays

Ordered maps that associate values to keys.

```php
<?php
// Indexed array
$fruits = ["apple", "banana", "cherry"];
echo $fruits[0]; // "apple"

// Associative array
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];
echo $person["name"]; // "John"

// Multidimensional array
$contacts = [
    ["name" => "John", "phone" => "1234567890"],
    ["name" => "Jane", "phone" => "0987654321"]
];
echo $contacts[1]["name"]; // "Jane"

// Creating arrays with array() function
$numbers = array(1, 2, 3, 4, 5);
$user = array("name" => "John", "age" => 30);

// Adding elements to an array
$fruits[] = "orange"; // Adds to the end
$person["email"] = "john@example.com"; // Adds new key-value pair
?>
```

### 6. Objects

Instances of classes.

```php
<?php
// Define a class
class Person {
    public $name;
    public $age;
    
    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }
    
    public function greet() {
        return "Hello, my name is " . $this->name;
    }
}

// Create an object
$person = new Person("John", 30);
echo $person->name; // "John"
echo $person->greet(); // "Hello, my name is John"

// Convert array to object
$data = ["name" => "Jane", "age" => 25];
$obj = (object) $data;
echo $obj->name; // "Jane"
?>
```

### 7. NULL

Represents a variable with no value.

```php
<?php
$var = null;

// Testing for null
if (is_null($var)) {
    echo "Variable is null";
}

if ($var === null) {
    echo "Variable is null";
}

// Nullish coalescing operator (PHP 7+)
$username = $_GET['user'] ?? 'Guest';
?>
```

### 8. Resources

Special variables that hold references to external resources (like database connections).

```php
<?php
// Database connection resource
$conn = mysqli_connect("localhost", "username", "password", "database");

// File resource
$file = fopen("example.txt", "r");

// Check if variable is a resource
if (is_resource($file)) {
    echo "Variable is a resource";
}

// Get resource type
echo get_resource_type($file); // "file"

// Always close resources when done
fclose($file);
mysqli_close($conn);
?>
```

## Type Juggling and Type Casting

PHP automatically converts types as needed (type juggling), but you can also explicitly convert types (type casting).

### Type Juggling

```php
<?php
$sum = "10" + 20; // $sum is integer 30
$concat = "10" . 20; // $concat is string "1020"

// Comparison with type juggling
echo 10 == "10"; // true (values are equal)
echo 10 === "10"; // false (values and types are different)
?>
```

### Type Casting

```php
<?php
// Casting to integer
$int1 = (int) "42";
$int2 = (integer) "42.7"; // 42
$int3 = intval("42.7"); // 42

// Casting to float
$float1 = (float) "3.14";
$float2 = (double) "3.14";
$float3 = floatval("3.14");

// Casting to string
$str1 = (string) 42;
$str2 = strval(42);

// Casting to boolean
$bool1 = (bool) 1;
$bool2 = (boolean) "false"; // true (non-empty string)
$bool3 = boolval(0); // false

// Casting to array
$arr = (array) "Hello"; // ["Hello"]

// Casting to object
$obj = (object) ["name" => "John"];

// Casting to null
$null = (unset) $var; // Deprecated in PHP 7.2+
?>
```

## Variable Scope

### Global Scope

Variables declared outside a function have global scope.

```php
<?php
$globalVar = "I'm global";

function test() {
    // $globalVar is not accessible here
    echo $globalVar; // Undefined variable
}

function testWithGlobal() {
    global $globalVar; // Access global variable
    echo $globalVar; // "I'm global"
}

function testWithGlobals() {
    echo $GLOBALS['globalVar']; // "I'm global"
}
?>
```

### Local Scope

Variables declared within a function have local scope.

```php
<?php
function test() {
    $localVar = "I'm local";
    echo $localVar; // "I'm local"
}

test();
echo $localVar; // Undefined variable
?>
```

### Static Variables

Static variables retain their value between function calls.

```php
<?php
function counter() {
    static $count = 0; // Initialized only once
    $count++;
    return $count;
}

echo counter(); // 1
echo counter(); // 2
echo counter(); // 3
?>
```

## Superglobal Variables

PHP provides several predefined variables that are always available in all scopes.

```php
<?php
// $_GET - HTTP GET variables
echo $_GET['id']; // From URL ?id=123

// $_POST - HTTP POST variables
echo $_POST['username']; // From form submission

// $_REQUEST - Combined GET, POST, and COOKIE
echo $_REQUEST['param'];

// $_SERVER - Server and execution environment information
echo $_SERVER['REQUEST_METHOD']; // GET, POST, etc.
echo $_SERVER['HTTP_USER_AGENT']; // Browser info
echo $_SERVER['REMOTE_ADDR']; // Client IP

// $_SESSION - Session variables (requires session_start())
session_start();
$_SESSION['user_id'] = 123;

// $_COOKIE - HTTP Cookies
echo $_COOKIE['user_preference'];

// $_FILES - HTTP File Upload variables
echo $_FILES['upload']['name']; // Uploaded file name

// $_ENV - Environment variables
echo $_ENV['PATH'];

// $GLOBALS - References all variables in global scope
echo $GLOBALS['globalVar'];
?>
```

## Variable Information Functions

```php
<?php
// Check if variable is set and not null
if (isset($var)) {
    echo "Variable is set";
}

// Check if variable is empty
if (empty($var)) {
    echo "Variable is empty";
}

// Get variable type
echo gettype($var); // "string", "integer", etc.

// Check specific type
is_int($var);
is_float($var);
is_string($var);
is_bool($var);
is_array($var);
is_object($var);
is_null($var);
is_resource($var);
is_scalar($var); // integer, float, string or boolean
is_numeric($var); // string or number containing a number

// Get variable information
var_dump($var); // Outputs type and value
print_r($var); // Human-readable output (useful for arrays)
?>
```

## Constants

Constants are identifiers for simple values that cannot be changed during script execution.

```php
<?php
// Define a constant
define("GREETING", "Hello world!");
echo GREETING; // "Hello world!"

// Case-insensitive constant (not recommended)
define("MESSAGE", "Hi there!", true);
echo message; // "Hi there!"

// Using const keyword (PHP 5.3+)
const PI = 3.14159;
echo PI; // 3.14159

// Array constants (PHP 7+)
define("ANIMALS", ["dog", "cat", "bird"]);
echo ANIMALS[0]; // "dog"

// Class constants
class MyClass {
    const VERSION = '1.0';
    
    public function getVersion() {
        return self::VERSION;
    }
}
echo MyClass::VERSION; // "1.0"

// Check if constant exists
if (defined("GREETING")) {
    echo "Constant is defined";
}
?>
```

### Magic Constants

PHP provides several predefined constants that change depending on where they are used.

```php
<?php
echo __LINE__; // Current line number
echo __FILE__; // Full path and filename
echo __DIR__; // Directory of the file
echo __FUNCTION__; // Function name
echo __CLASS__; // Class name
echo __TRAIT__; // Trait name
echo __METHOD__; // Class method name
echo __NAMESPACE__; // Current namespace
?>
```

## Best Practices

1. **Use meaningful variable names** that describe their purpose
2. **Initialize variables** before using them
3. **Use camelCase or snake_case** consistently for variable naming
4. **Use constants** for values that don't change
5. **Be explicit with type casting** when needed
6. **Avoid global variables** when possible
7. **Clean up resources** (close files, database connections)
8. **Use strict comparison** (`===` and `!==`) to avoid type juggling issues
9. **Validate and sanitize** all external data (GET, POST, etc.)
10. **Use type declarations** in functions (PHP 7+) to make code more robust