# Advanced PHP Features

This guide covers advanced PHP features that are available in modern PHP versions (7.x and 8.x). These features can help you write more concise, maintainable, and robust code.

## PHP 7.x Features

### Scalar Type Declarations

PHP 7.0 introduced scalar type declarations, allowing you to specify the expected data types for function parameters and return values.

```php
<?php
// Type declarations for parameters
function add(int $a, int $b) {
    return $a + $b;
}

// Return type declarations
function multiply(int $a, int $b): int {
    return $a * $b;
}

// Strict typing
declare(strict_types=1);

function divide(int $a, int $b): float {
    return $a / $b;
}

// With strict typing, this will throw a TypeError
// echo add("5", "10");

// Without strict typing, PHP would convert strings to integers
// echo add("5", "10"); // 15
?>
```

### Null Coalescing Operator

The null coalescing operator (`??`) provides a concise way to check if a value is null.

```php
<?php
// Traditional way
$username = isset($_GET['user']) ? $_GET['user'] : 'nobody';

// Using null coalescing operator
$username = $_GET['user'] ?? 'nobody';

// Chaining
$username = $_GET['user'] ?? $_POST['user'] ?? 'nobody';
?>
```

### Spaceship Operator

The spaceship operator (`<=>`) performs a three-way comparison.

```php
<?php
// Returns -1 if left is less than right
// Returns 0 if left is equal to right
// Returns 1 if left is greater than right

// Comparing integers
echo 1 <=> 1; // 0
echo 1 <=> 2; // -1
echo 2 <=> 1; // 1

// Comparing strings
echo "a" <=> "a"; // 0
echo "a" <=> "b"; // -1
echo "b" <=> "a"; // 1

// Useful for sorting
$fruits = ['orange', 'apple', 'banana'];
usort($fruits, function ($a, $b) {
    return $a <=> $b;
});
print_r($fruits); // ['apple', 'banana', 'orange']
?>
```

### Anonymous Classes

Anonymous classes allow you to create one-off objects without defining a formal class.

```php
<?php
$logger = new class {
    public function log($message) {
        echo date('Y-m-d H:i:s') . ': ' . $message . PHP_EOL;
    }
};

$logger->log('Test message');

// With constructor arguments and implementing interfaces
$handler = new class('errors.log') implements LoggerInterface {
    private $filename;
    
    public function __construct($filename) {
        $this->filename = $filename;
    }
    
    public function log($level, $message, array $context = []) {
        file_put_contents(
            $this->filename,
            date('Y-m-d H:i:s') . " [$level] $message" . PHP_EOL,
            FILE_APPEND
        );
    }
};
?>
```

### Nullable Types

PHP 7.1 introduced nullable types, allowing parameters and return values to be null.

```php
<?php
// Nullable parameter type
function process(?string $text) {
    if ($text === null) {
        return 'No text provided';
    }
    return "Processing: $text";
}

// Nullable return type
function findUser(int $id): ?array {
    $user = getUserById($id);
    return $user ?: null;
}
?>
```

### Void Return Type

PHP 7.1 introduced the void return type, indicating that a function doesn't return a value.

```php
<?php
function logMessage(string $message): void {
    file_put_contents('app.log', $message . PHP_EOL, FILE_APPEND);
    // No return statement, or just "return;" (without a value)
}
?>
```

### Multi-Catch Exception Handling

PHP 7.1 allows catching multiple exception types in a single catch block.

```php
<?php
try {
    // Code that may throw exceptions
    processData();
} catch (DatabaseException | FileException $e) {
    // Handle either exception type
    logError($e->getMessage());
} catch (Exception $e) {
    // Handle any other exception
    logError('Unknown error: ' . $e->getMessage());
}
?>
```

### Array Destructuring

PHP 7.1 enhanced array destructuring capabilities.

```php
<?php
// Basic list destructuring
$array = [1, 2, 3];
[$a, $b, $c] = $array;
echo $a; // 1
echo $b; // 2
echo $c; // 3

// Skipping elements
[, $b, ] = $array;
echo $b; // 2

// Nested arrays
$data = [1, 2, [3, 4]];
[$a, $b, [$c, $d]] = $data;
echo $c; // 3

// With keys
$data = ['id' => 1, 'name' => 'John'];
['id' => $id, 'name' => $name] = $data;
echo $id;   // 1
echo $name; // John
?>
```

### Object Typehint

PHP 7.2 introduced the `object` typehint for parameters and return values.

```php
<?php
function process(object $obj): object {
    // Process any object
    $obj->property = 'modified';
    return $obj;
}
?>
```

### Trailing Commas in List Syntax

PHP 7.3 allows trailing commas in list syntax and function calls.

```php
<?php
$fruits = [
    'apple',
    'banana',
    'orange', // Trailing comma is allowed
];

function test(
    $param1,
    $param2, // Trailing comma is allowed
) {
    // Function body
}
?>
```

### Arrow Functions

PHP 7.4 introduced arrow functions (short closures) for concise one-line functions.

```php
<?php
// Traditional closure
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function ($n) {
    return $n * 2;
}, $numbers);

// Arrow function
$doubled = array_map(fn($n) => $n * 2, $numbers);

// Arrow functions automatically capture variables from the parent scope
$multiplier = 3;
$tripled = array_map(fn($n) => $n * $multiplier, $numbers);
?>
```

### Typed Properties

PHP 7.4 introduced typed class properties.

```php
<?php
class User {
    public int $id;
    public string $name;
    public ?string $email = null; // Nullable with default value
    private bool $active = true;
    protected array $roles = [];
}

$user = new User();
$user->id = 1;
$user->name = "John";
// $user->id = "1"; // TypeError: Cannot assign string to property User::$id of type int
?>
```

### Null Coalescing Assignment Operator

PHP 7.4 introduced the null coalescing assignment operator (`??=`).

```php
<?php
// Traditional way
if (!isset($data['key'])) {
    $data['key'] = 'default';
}

// Using null coalescing assignment
$data['key'] ??= 'default';
?>
```

## PHP 8.x Features

### Named Arguments

PHP 8.0 introduced named arguments, allowing you to specify parameter names when calling functions.

```php
<?php
function createUser(string $name, string $email, bool $active = true, array $roles = []) {
    // Create user
}

// Traditional way
createUser('John', 'john@example.com', true, ['admin']);

// With named arguments
createUser(
    name: 'John',
    email: 'john@example.com',
    roles: ['admin']
    // active is omitted, so it uses the default value
);

// Order doesn't matter
createUser(
    roles: ['admin'],
    email: 'john@example.com',
    name: 'John'
);
?>
```

### Attributes

PHP 8.0 introduced attributes (annotations) as a native language feature.

```php
<?php
// Define an attribute
#[Attribute]
class Route {
    public function __construct(
        public string $path,
        public string $method = 'GET'
    ) {}
}

// Use the attribute
#[Route('/users', method: 'POST')]
class UserController {
    #[Route('/users/{id}', method: 'GET')]
    public function show($id) {
        // Show user
    }
}

// Reading attributes at runtime
$reflector = new ReflectionClass(UserController::class);
$attributes = $reflector->getAttributes(Route::class);

foreach ($attributes as $attribute) {
    $route = $attribute->newInstance();
    echo "Path: {$route->path}, Method: {$route->method}";
}
?>
```

### Constructor Property Promotion

PHP 8.0 introduced constructor property promotion, reducing boilerplate code.

```php
<?php
// Traditional way
class Point {
    private float $x;
    private float $y;
    
    public function __construct(float $x, float $y) {
        $this->x = $x;
        $this->y = $y;
    }
}

// With constructor property promotion
class Point {
    public function __construct(
        private float $x,
        private float $y
    ) {}
    
    public function getX(): float {
        return $this->x;
    }
    
    public function getY(): float {
        return $this->y;
    }
}
?>
```

### Union Types

PHP 8.0 introduced union types, allowing parameters and return values to be of multiple types.

```php
<?php
function process(string|int $id): string|int {
    if (is_string($id)) {
        return "ID: $id";
    }
    return $id * 2;
}

// Both are valid
echo process("abc123"); // "ID: abc123"
echo process(42);       // 84
?>
```

### Match Expression

PHP 8.0 introduced the match expression, a more powerful and safer alternative to switch.

```php
<?php
// Traditional switch
$result = '';
switch ($status) {
    case 'success':
        $result = 'Operation completed';
        break;
    case 'error':
        $result = 'An error occurred';
        break;
    case 'pending':
        $result = 'Operation pending';
        break;
    default:
        $result = 'Unknown status';
        break;
}

// Match expression
$result = match ($status) {
    'success' => 'Operation completed',
    'error' => 'An error occurred',
    'pending' => 'Operation pending',
    default => 'Unknown status',
};

// Match is an expression, so it returns a value
$message = 'Status: ' . match ($status) {
    'success' => 'Good',
    'error' => 'Bad',
    default => 'Unknown',
};

// Match does strict comparison (===)
$result = match ($value) {
    1 => 'Integer 1',
    '1' => 'String 1',
    true => 'Boolean true',
    default => 'Something else',
};

// Match can combine conditions
$result = match ($value) {
    1, 2, 3 => 'Small number',
    4, 5, 6 => 'Medium number',
    default => 'Large number',
};

// Match can use expressions
$result = match (true) {
    $value < 0 => 'Negative',
    $value === 0 => 'Zero',
    $value > 0 => 'Positive',
};
?>
```

### Nullsafe Operator

PHP 8.0 introduced the nullsafe operator (`?->`) for safe method and property access.

```php
<?php
// Traditional way
$country = null;
if ($session !== null) {
    $user = $session->user;
    if ($user !== null) {
        $address = $user->getAddress();
        if ($address !== null) {
            $country = $address->country;
        }
    }
}

// Using nullsafe operator
$country = $session?->user?->getAddress()?->country;
?>
```

### Enumerations (PHP 8.1)

PHP 8.1 introduced enumerations (enums) for defining a set of possible values.

```php
<?php
// Basic enum
enum Status {
    case Draft;
    case Published;
    case Archived;
}

function updateStatus(Status $status) {
    // Process status
}

// Using the enum
$status = Status::Published;
updateStatus($status);

// Backed enum with values
enum HttpStatus: int {
    case OK = 200;
    case NotFound = 404;
    case ServerError = 500;
    
    public function message(): string {
        return match($this) {
            self::OK => 'OK',
            self::NotFound => 'Not Found',
            self::ServerError => 'Internal Server Error',
        };
    }
}

$status = HttpStatus::NotFound;
echo $status->value; // 404
echo $status->message(); // Not Found

// Check if enum case
$isNotFound = $status === HttpStatus::NotFound; // true

// Get all cases
$cases = HttpStatus::cases();
foreach ($cases as $case) {
    echo $case->name . ': ' . $case->value . PHP_EOL;
}

// Try to get enum from value
$status = HttpStatus::from(404); // NotFound
$status = HttpStatus::tryFrom(418) ?? HttpStatus::NotFound; // NotFound (fallback)
?>
```

### Readonly Properties (PHP 8.1)

PHP 8.1 introduced readonly properties that can only be set once.

```php
<?php
class Point {
    public readonly float $x;
    public readonly float $y;
    
    public function __construct(float $x, float $y) {
        $this->x = $x;
        $this->y = $y;
    }
}

$point = new Point(1.0, 2.0);
echo $point->x; // 1

// This would cause an error
// $point->x = 5.0; // Error: Cannot modify readonly property
?>
```

### First-class Callable Syntax (PHP 8.1)

PHP 8.1 introduced first-class callable syntax for creating closures from callables.

```php
<?php
// Traditional way
$strlen = function ($string) {
    return strlen($string);
};

// First-class callable syntax
$strlen = strlen(...);

// Usage
$lengths = array_map($strlen, ['apple', 'banana', 'cherry']);
print_r($lengths); // [5, 6, 6]

// With methods
$formatter = new NumberFormatter('en_US', NumberFormatter::CURRENCY);
$format = $formatter->format(...);
$prices = array_map($format, [1.99, 2.49, 9.99]);
?>
```

### Intersection Types (PHP 8.1)

PHP 8.1 introduced intersection types, requiring values to satisfy multiple type constraints.

```php
<?php
interface Serializable {
    public function serialize(): string;
}

interface JsonSerializable {
    public function jsonSerialize(): mixed;
}

function process(Serializable&JsonSerializable $data) {
    // $data must implement both interfaces
    return [
        'serialized' => $data->serialize(),
        'json' => json_encode($data->jsonSerialize())
    ];
}
?>
```

### Never Return Type (PHP 8.1)

PHP 8.1 introduced the `never` return type for functions that never return normally.

```php
<?php
function redirect(string $url): never {
    header("Location: $url");
    exit;
}

function throwError(string $message): never {
    throw new Exception($message);
}
?>
```

### Readonly Classes (PHP 8.2)

PHP 8.2 introduced readonly classes where all properties are readonly.

```php
<?php
readonly class User {
    public string $name;
    public string $email;
    
    public function __construct(string $name, string $email) {
        $this->name = $name;
        $this->email = $email;
    }
}

$user = new User("John", "john@example.com");

// This would cause an error
// $user->name = "Jane"; // Error: Cannot modify readonly property
?>
```

### DNF Types (PHP 8.2)

PHP 8.2 introduced Disjunctive Normal Form (DNF) types, allowing combinations of union and intersection types.

```php
<?php
interface Renderable {
    public function render(): string;
}

interface Cacheable {
    public function getCacheKey(): string;
}

interface Serializable {
    public function serialize(): string;
}

// A parameter that must be either:
// 1. Both Renderable and Cacheable, OR
// 2. Serializable
function process(
    (Renderable&Cacheable)|Serializable $item
) {
    // Implementation
}
?>
```

### Typed Class Constants (PHP 8.3)

PHP 8.3 introduced typed class constants.

```php
<?php
class MathConstants {
    public const float PI = 3.14159;
    public const int MAX_VALUE = 100;
    public const string UNIT = 'meter';
    public const array FACTORS = [1, 2, 3];
}

// This would cause an error
// MathConstants::PI = 3; // Error: Cannot modify a constant
// MathConstants::MAX_VALUE = 'string'; // Error: Cannot assign string to int constant
?>
```

### Dynamic Class Constant Fetch (PHP 8.3)

PHP 8.3 allows dynamic class constant access.

```php
<?php
class Config {
    public const DB_HOST = 'localhost';
    public const DB_USER = 'root';
    public const DB_PASS = 'password';
}

$constantName = 'DB_HOST';
echo Config::{$constantName}; // 'localhost'
?>
```

## Advanced Techniques

### Generators

Generators provide an easy way to implement iterators without the overhead of creating an array in memory.

```php
<?php
function range($start, $end, $step = 1) {
    for ($i = $start; $i <= $end; $i += $step) {
        yield $i;
    }
}

foreach (range(1, 1000000) as $number) {
    // Process number without storing the entire range in memory
    echo $number . PHP_EOL;
    if ($number > 10) break;
}

// Yielding key-value pairs
function getEntries() {
    yield 'key1' => 'value1';
    yield 'key2' => 'value2';
    yield 'key3' => 'value3';
}

foreach (getEntries() as $key => $value) {
    echo "$key: $value" . PHP_EOL;
}

// Yielding from another generator or traversable
function allEntries() {
    yield from getEntries();
    yield 'key4' => 'value4';
    yield 'key5' => 'value5';
}
?>
```

### Reflection API

The Reflection API allows you to inspect classes, interfaces, functions, methods, and extensions at runtime.

```php
<?php
// Inspect a class
$reflector = new ReflectionClass('User');

// Get class properties
$properties = $reflector->getProperties();
foreach ($properties as $property) {
    echo $property->getName() . ' (' . $property->getType() . ')' . PHP_EOL;
}

// Get class methods
$methods = $reflector->getMethods();
foreach ($methods as $method) {
    echo $method->getName() . '()' . PHP_EOL;
}

// Check if method exists and is public
if ($reflector->hasMethod('getEmail') && $reflector->getMethod('getEmail')->isPublic()) {
    echo "getEmail() is a public method" . PHP_EOL;
}

// Create a new instance
$user = $reflector->newInstance('John', 'john@example.com');

// Call a method
$method = $reflector->getMethod('getEmail');
echo $method->invoke($user) . PHP_EOL;

// Access a private property
$property = $reflector->getProperty('email');
$property->setAccessible(true);
echo $property->getValue($user) . PHP_EOL;
?>
```

### Closures and Binding

Closures can be bound to different objects and scopes.

```php
<?php
class User {
    private $name;
    private $email;
    
    public function __construct($name, $email) {
        $this->name = $name;
        $this->email = $email;
    }
}

$user = new User('John', 'john@example.com');

// Create a closure that accesses private properties
$getName = function() {
    return $this->name;
};

// Bind the closure to the user object
$boundClosure = $getName->bindTo($user, User::class);
echo $boundClosure(); // John

// Alternative using Closure::bind
$getEmail = Closure::bind(function() {
    return $this->email;
}, $user, User::class);
echo $getEmail(); // john@example.com

// Binding to a different scope
class A {
    private $value = 'A';
}

class B {
    private $value = 'B';
}

$getValue = function() {
    return $this->value;
};

$a = new A();
$b = new B();

$boundToA = $getValue->bindTo($a, A::class);
$boundToB = $getValue->bindTo($b, B::class);

echo $boundToA(); // A
echo $boundToB(); // B
?>
```

### Traits with Composition

Traits can be used to implement composition over inheritance.

```php
<?php
trait Loggable {
    protected $logger;
    
    public function setLogger($logger) {
        $this->logger = $logger;
        return $this;
    }
    
    public function log($message) {
        if ($this->logger) {
            $this->logger->log($message);
        }
    }
}

trait Cacheable {
    protected $cache;
    
    public function setCache($cache) {
        $this->cache = $cache;
        return $this;
    }
    
    public function cache($key, $value, $ttl = 3600) {
        if ($this->cache) {
            $this->cache->set($key, $value, $ttl);
        }
    }
    
    public function getFromCache($key) {
        if ($this->cache) {
            return $this->cache->get($key);
        }
        return null;
    }
}

class UserService {
    use Loggable, Cacheable;
    
    public function getUser($id) {
        $cacheKey = "user:$id";
        $user = $this->getFromCache($cacheKey);
        
        if (!$user) {
            $this->log("Cache miss for user $id");
            $user = $this->fetchUserFromDatabase($id);
            $this->cache($cacheKey, $user);
        }
        
        return $user;
    }
    
    private function fetchUserFromDatabase($id) {
        // Database logic here
        return ['id' => $id, 'name' => 'User ' . $id];
    }
}

// Usage
$userService = new UserService();
$userService->setLogger($logger)->setCache($cache);
$user = $userService->getUser(123);
?>
```

### Fibers (PHP 8.1)

Fibers provide a way to create cooperative multitasking in PHP.

```php
<?php
// Create a new fiber
$fiber = new Fiber(function(): void {
    $value = Fiber::suspend('fiber suspended');
    echo "Value passed to resume: $value\n";
    echo "Fiber completed\n";
});

// Start the fiber
$value = $fiber->start();
echo "Fiber suspended with value: $value\n";

// Resume the fiber
$fiber->resume('fiber resumed');
?>
```

## Best Practices

1. **Use Type Declarations**: Add scalar and return type declarations to make your code more robust
2. **Leverage Modern Syntax**: Use null coalescing, arrow functions, and match expressions for cleaner code
3. **Embrace Attributes**: Use attributes for metadata instead of docblocks when appropriate
4. **Use Constructor Property Promotion**: Reduce boilerplate in simple classes
5. **Consider Enums**: Use enums instead of constants for related values
6. **Make Immutable Objects**: Use readonly properties for immutable data
7. **Use Union Types**: Be explicit about multiple possible types
8. **Leverage Generators**: Use generators for memory-efficient iteration
9. **Use Named Arguments**: Improve readability for functions with many parameters
10. **Stay Updated**: Keep up with new PHP features and adopt them when they improve your code

## References

- [PHP Documentation](https://www.php.net/docs.php)
- [PHP 7.4 New Features](https://www.php.net/releases/7_4_0.php)
- [PHP 8.0 New Features](https://www.php.net/releases/8_0_0.php)
- [PHP 8.1 New Features](https://www.php.net/releases/8_1_0.php)
- [PHP 8.2 New Features](https://www.php.net/releases/8_2_0.php)
- [PHP 8.3 New Features](https://www.php.net/releases/8_3_0.php)