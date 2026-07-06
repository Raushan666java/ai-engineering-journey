# Chapter 0: PHP Foundations for Laravel

---

## Learning Objectives


## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features |
| **Key Concepts** | Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features |
| **Learning Approach** | Theory, code examples, practical exercises |
| **Skills Required** | Basic programming concepts |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features |
| **Key Concepts** | Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features |
| **Learning Approach** | Theory, code examples, practical exercises |
| **Skills Required** | Basic programming concepts |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features |
| **Key Concepts** | Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features |
| **Learning Approach** | Theory, code examples, practical exercises |
| **Skills Required** | Basic programming concepts |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```

## Chapter at a Glance

| Aspect | Details |
|--------|---------|
| **Scope** | PHP fundamentals for Laravel: syntax, OOP, types, Composer, design patterns, PHP 8.x features |
| **Key Concepts** | Variables, arrays, functions, OOP, namespaces, Composer, exceptions, PHP 8.3 features |
| **Learning Approach** | Theory, code examples, practical exercises |
| **Skills Required** | Basic programming concepts |

## Chapter Roadmap

```mermaid
flowchart LR
    A[Theory & Concepts]
    B[Data Models]
    C[Agent Implementation]
    D[Integration Patterns]
    E[Best Practices]
    A --> B
    B --> C
    C --> D
    D --> E
```
By the end of this chapter, students will be able to:

- Write PHP scripts using proper syntax, variables, data types, and type declarations with strict typing enabled
- Manipulate indexed and associative arrays using built-in functions and functional constructs like `array_map`, `array_filter`, and `array_reduce`
- Define and invoke named functions, anonymous closures, arrow functions, variadic functions, and named-argument calls
- Build object-oriented PHP applications with classes, inheritance, abstract classes, interfaces, and traits
- Organize code into namespaces and configure PSR-4 autoloading with Composer
- Implement structured error handling with exceptions, custom exception classes, and try/catch/finally blocks
- Use Composer to initialize projects, require dependencies, manage autoloading, and run scripts
- Leverage PHP 8.3 features including readonly classes, enums, typed properties, and `json_validate`
- Implement common design patterns (Factory, Repository, Strategy, Singleton) in PHP for Laravel application architecture

---

## Theory
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.
> **One-Sentence Takeaway:** Theory is the foundation → master it before moving to examples and exercises.

![PHP Basics](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/laravel/php-basics.png)


### 1.1 PHP Syntax and Variables

PHP is a dynamically-typed, server-side scripting language. Every PHP file begins with `<?php` and may contain HTML output. Statements end with a semicolon.

```php
<?php

// This is a single-line comment

/*
 * This is a
 * multi-line comment
 */

echo "Hello, world!"; // Outputs: Hello, world!
print "Hello again!";  // print is similar but returns 1

// Variables are prefixed with $
$name = "Laravel";
$year = 2026;
$isAwesome = true;

// Variable variables (rarely used in practice)
$varName = "framework";
$$varName = "Laravel"; // $framework = "Laravel"
echo $framework; // Outputs: Laravel

// Constants
define("VERSION", "13.0.0");
const APP_NAME = "My Application";

echo VERSION;  // Outputs: 13.0.0
echo APP_NAME; // Outputs: My Application
```

#### 1.1.1 Data Types

PHP supports eight primitive types: four scalar (bool, int, float, string), two compound (array, object), and two special (null, resource).

```php
<?php

// Boolean
$isActive = true;
$isAdmin = false;
var_dump($isActive); // bool(true)

// Integer
$count = 42;
$hex = 0x1A;        // 26
$octal = 0o77;      // 63 (PHP 8.1+)
$binary = 0b1010;   // 10
$large = 1_000_000; // 1000000 (numeric separator)

// Float
$price = 29.99;
$scientific = 1.5e3; // 1500.0
$tiny = 1.5e-3;      // 0.0015

// String
$single = 'Single-quoted strings do not interpolate $variables';
$double = "Double-quoted strings interpolate $single";
$heredoc = <<<EOT
This is a heredoc string.
It can span multiple lines.
Variables like $name are interpolated.
EOT;

$nowdoc = <<<'EOD'
This is a nowdoc string.
Like single quotes, variables like $name are NOT interpolated.
EOD;

// Null
$nothing = null;
$undefined; // Defaults to null, but emits a warning if read before assignment

// Resource (external resource handle)
$handle = fopen('php://memory', 'r+');
var_dump($handle); // resource(5) of type (stream)
fclose($handle);
```

#### 1.1.2 Type Juggling and Casting

PHP automatically converts types when operators expect specific types.

```php
<?php

// Type juggling
$result = "10" + 5;     // 15 (string "10" cast to int)
$result2 = "10" . 5;    // "105" (int 5 cast to string, concatenation)
$result3 = "10 apples" + 5; // 15 (PHP 8.0+ emits warning, earlier PHP returned 15)
$result4 = "apples" + 5;    // 5 (PHP 8.0+ emits warning)

// Explicit casting
$intValue = (int) "42";        // 42
$floatValue = (float) "3.14"; // 3.14
$stringValue = (string) 100;   // "100"
$boolValue = (bool) 1;         // true
$arrayValue = (array) "hello"; // ["hello"]

// Common truthy/falsy values
var_dump((bool) "");       // false
var_dump((bool) "0");      // false
var_dump((bool) 0);        // false
var_dump((bool) 0.0);      // false
var_dump((bool) []);       // false
var_dump((bool) null);     // false
var_dump((bool) "hello");  // true
var_dump((bool) 42);       // true
var_dump((bool) [1, 2]);   // true
```

#### 1.1.3 Strict Types

By default, PHP coerces values to match type hints. Declaring `strict_types` at the top of a file changes this to throw `TypeError` on mismatch.

```php
<?php
// File: strict-example.php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

echo add(5, 10);    // 15
echo add(5, "10");  // TypeError: Argument #2 ($b) must be of type int, string given

function greet(string $name): string {
    return "Hello, $name!";
}

echo greet("Alice"); // Hello, Alice!
```

`declare(strict_types=1)` affects only the file where it appears. Calls from a file without strict_types into a strict file still enforce strict typing for the callee.

#### 1.1.4 Operators

```php
<?php

// Arithmetic
$a = 10;
$b = 3;
echo $a + $b;  // 13
echo $a - $b;  // 7
echo $a * $b;  // 30
echo $a / $b;  // 3.3333...
echo $a % $b;  // 1
echo $a ** $b; // 1000 (10^3)

// Assignment with operators
$x = 5;
$x += 3;  // 8
$x -= 2;  // 6
$x *= 2;  // 12
$x /= 3;  // 4

// Comparison
var_dump(5 == "5");   // true (loose equality)
var_dump(5 === "5");  // false (strict equality)
var_dump(5 != "5");   // false
var_dump(5 !== "5");  // true
var_dump(5 > 3);      // true
var_dump(5 <=> 3);    // 1 (spaceship: -1, 0, or 1)

// Null coalescing
$username = $_GET['user'] ?? 'guest';
$nested = $a['b']['c'] ?? 'default';

// Null coalescing assignment (PHP 7.4+)
$data['key'] ??= 'default';
// Equivalent to: $data['key'] = $data['key'] ?? 'default';

// Spaceship operator for sorting
$cmp = 5 <=> 3;  // 1 (greater than)
$cmp = 3 <=> 5;  // -1 (less than)
$cmp = 5 <=> 5;  // 0 (equal)

// Logical
var_dump(true && false);  // false
var_dump(true || false);  // true
var_dump(!true);          // false
var_dump(true and false); // false (lower precedence than &&)
var_dump(true or false);  // true (lower precedence than ||)

// String
$greeting = "Hello, " . "World!"; // Concatenation
echo $greeting;                    // Hello, World!

$name = "Alice";
echo "Hello, $name";    // Hello, Alice
echo "Hello, {$name}";  // Hello, Alice (explicit syntax)
echo "Hello, ${name}";  // Hello, Alice (deprecated in PHP 8.2+)
```

#### 1.1.5 Control Structures

```php
<?php

// if / elseif / else
$score = 85;

if ($score >= 90) {
    echo "A";
} elseif ($score >= 80) {
    echo "B";
} elseif ($score >= 70) {
    echo "C";
} elseif ($score >= 60) {
    echo "D";
} else {
    echo "F";
}
// Outputs: B

// Alternative syntax (common in Blade templates)
if ($score >= 90):
    echo "A";
elseif ($score >= 80):
    echo "B";
else:
    echo "Below B";
endif;

// match (PHP 8.0+)
$statusCode = 404;
$message = match ($statusCode) {
    200, 201 => 'Success',
    301, 302 => 'Redirect',
    400, 403, 404 => 'Client Error',
    500, 502, 503 => 'Server Error',
    default => 'Unknown',
};
echo $message; // Client Error

// match is an expression Ã¢â‚¬â€ it returns a value
$result = match (true) {
    $statusCode < 300 => 'Success',
    $statusCode < 400 => 'Redirect',
    $statusCode < 500 => 'Client Error',
    default => 'Server Error',
};

// switch (traditional)
switch ($statusCode) {
    case 200:
    case 201:
        echo "OK";
        break;
    case 404:
        echo "Not Found";
        break;
    default:
        echo "Other";
}
```

#### 1.1.6 Loops

```php
<?php

// while
$i = 0;
while ($i < 5) {
    echo $i . " ";
    $i++;
}
// Outputs: 0 1 2 3 4

// do-while (always executes at least once)
$j = 0;
do {
    echo $j . " ";
    $j++;
} while ($j < 0);
// Outputs: 0

// for
for ($k = 0; $k < 5; $k++) {
    echo $k . " ";
}
// Outputs: 0 1 2 3 4

// foreach
$fruits = ['apple', 'banana', 'cherry'];
foreach ($fruits as $fruit) {
    echo $fruit . " ";
}
// Outputs: apple banana cherry

// foreach with key
$user = ['name' => 'Alice', 'role' => 'admin'];
foreach ($user as $key => $value) {
    echo "$key: $value" . PHP_EOL;
}

// break and continue
for ($i = 0; $i < 10; $i++) {
    if ($i === 3) {
        continue; // Skip 3
    }
    if ($i === 7) {
        break; // Stop at 7
    }
    echo $i . " ";
}
// Outputs: 0 1 2 4 5 6
```

---

### 1.2 Arrays

Arrays in PHP are ordered maps that map keys to values. They are the single most-used data structure in PHP and Laravel development.

#### 1.2.1 Indexed and Associative Arrays

```php
<?php

// Indexed array (starts at 0)
$colors = ['red', 'green', 'blue'];
echo $colors[0]; // red

// Short syntax with explicit indices
$numbers = [1, 2, 3, 4, 5];

// Traditional syntax
$oldWay = array(10, 20, 30);

// Associative array (string keys)
$user = [
    'name' => 'Alice',
    'email' => 'alice@example.com',
    'role' => 'admin',
];
echo $user['name']; // Alice

// Mixed keys
$mixed = [
    'first' => 1,
    'second' => 2,
    10 => 'ten',
    20 => 'twenty',
];

// Appending to an array
$colors[] = 'yellow'; // $colors = ['red', 'green', 'blue', 'yellow']

// Array destructuring (PHP 7.1+)
$info = ['John', 25, 'New York'];
[$name, $age, $city] = $info;
echo $name; // John

// Associative destructuring
$profile = ['username' => 'jdoe', 'email' => 'john@example.com'];
['username' => $userName, 'email' => $userEmail] = $profile;
echo $userName; // jdoe

// Spread operator in array (PHP 7.4+)
$arr1 = [1, 2, 3];
$arr2 = [0, ...$arr1, 4, 5];
// $arr2 = [0, 1, 2, 3, 4, 5]

// Unpacking with string keys (PHP 8.1+)
$a = ['a' => 1, 'b' => 2];
$b = ['b' => 3, 'c' => 4];
$merged = [...$a, ...$b];
// $merged = ['a' => 1, 'b' => 3, 'c' => 4] (later keys overwrite)
```

#### 1.2.2 Array Functions

```php
<?php

$items = [3, 1, 4, 1, 5, 9, 2, 6];

// count
echo count($items); // 8

// in_array
var_dump(in_array(5, $items)); // true

// array_search
echo array_search(4, $items); // 2 (index)

// array_key_exists
$user = ['name' => 'Alice', 'age' => 30];
var_dump(array_key_exists('name', $user)); // true
var_dump(isset($user['name']));            // true (also checks for null)

// Sorting
sort($items);      // ascending by value, reindexes
print_r($items);
// [1, 1, 2, 3, 4, 5, 6, 9]

$items = [3, 1, 4, 1, 5, 9, 2, 6];
rsort($items);     // descending by value, reindexes

$user = ['name' => 'Alice', 'age' => 30, 'role' => 'admin'];
asort($user);      // ascending by value, preserves keys
ksort($user);      // ascending by key

// array_merge
$a = ['a' => 1, 'b' => 2];
$b = ['b' => 3, 'c' => 4];
$merged = array_merge($a, $b);
// ['a' => 1, 'b' => 3, 'c' => 4]

// array_merge_recursive (nested merges)

// array_diff and array_intersect
$arr1 = [1, 2, 3, 4, 5];
$arr2 = [3, 5, 7, 9];
$diff = array_diff($arr1, $arr2);   // [1, 2, 4] (values in arr1 not in arr2)
$common = array_intersect($arr1, $arr2); // [3, 5]

// array_unique
$dupes = [1, 1, 2, 3, 3, 4];
$unique = array_unique($dupes); // [1, 2, 3, 4]

// array_values and array_keys
$keys = array_keys($user);   // ['name', 'age', 'role']
$vals = array_values($user); // ['Alice', 30, 'admin']

// array_chunk
$chunks = array_chunk([1, 2, 3, 4, 5], 2);
// [[1, 2], [3, 4], [5]]

// array_slice
$slice = array_slice([1, 2, 3, 4, 5], 1, 3);
// [2, 3, 4]

// array_column (from array of arrays/objects)
$people = [
    ['id' => 1, 'name' => 'Alice'],
    ['id' => 2, 'name' => 'Bob'],
    ['id' => 3, 'name' => 'Charlie'],
];
$names = array_column($people, 'name');
// ['Alice', 'Bob', 'Charlie']

$withKeys = array_column($people, 'name', 'id');
// [1 => 'Alice', 2 => 'Bob', 3 => 'Charlie']

// array_combine
$keys = ['name', 'age', 'city'];
$values = ['Alice', 30, 'New York'];
$combined = array_combine($keys, $values);
// ['name' => 'Alice', 'age' => 30, 'city' => 'New York']

// array_fill
$filled = array_fill(0, 5, 'default');
// ['default', 'default', 'default', 'default', 'default']

// array_walk (modifies array in place)
$prices = [10, 20, 30];
array_walk($prices, function (&$price) {
    $price = $price * 1.1;
});
// $prices = [11, 22, 33]
```

#### 1.2.3 Functional Array Processing: map, filter, reduce

```php
<?php

$numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// array_map Ã¢â‚¬â€ transform every element
$squared = array_map(fn(int $n): int => $n * $n, $numbers);
// [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

// With multiple arrays
$add = array_map(
    fn(int $a, int $b): int => $a + $b,
    [1, 2, 3],
    [10, 20, 30]
);
// [11, 22, 33]

// array_filter Ã¢â‚¬â€ keep elements matching a predicate
$evens = array_filter($numbers, fn(int $n): bool => $n % 2 === 0);
// [2, 4, 6, 8, 10] (note: keys are preserved)

// Re-index after filter
$evens = array_values(array_filter($numbers, fn(int $n): bool => $n % 2 === 0));

// Filter without callback removes falsy values
$mixed = [0, 1, '', 'hello', null, true, false];
$clean = array_filter($mixed);
// [1, 'hello', true] (indices: 1, 3, 5)

// Filter with ARRAY_FILTER_USE_BOTH or ARRAY_FILTER_USE_KEY
$users = [
    'alice' => 'admin',
    'bob' => 'editor',
    'charlie' => 'admin',
    'dave' => 'viewer',
];
$admins = array_filter(
    $users,
    fn(string $role, string $name): bool => $role === 'admin',
    ARRAY_FILTER_USE_BOTH
);
// ['alice' => 'admin', 'charlie' => 'admin']

// array_reduce Ã¢â‚¬â€ fold/reduce to a single value
$sum = array_reduce($numbers, fn(int $carry, int $item): int => $carry + $item, 0);
// 55

$product = array_reduce($numbers, fn(int $carry, int $item): int => $carry * $item, 1);
// 3628800

// Practical example: group by a field
$orders = [
    ['id' => 1, 'status' => 'shipped', 'total' => 50],
    ['id' => 2, 'status' => 'pending', 'total' => 30],
    ['id' => 3, 'status' => 'shipped', 'total' => 75],
    ['id' => 4, 'status' => 'pending', 'total' => 20],
    ['id' => 5, 'status' => 'cancelled', 'total' => 15],
];

$grouped = array_reduce($orders, function (array $carry, array $order): array {
    $status = $order['status'];
    $carry[$status][] = $order;
    return $carry;
}, []);

print_r($grouped);
// [
//   'shipped' => [['id' => 1, ...], ['id' => 3, ...]],
//   'pending' => [['id' => 2, ...], ['id' => 4, ...]],
//   'cancelled' => [['id' => 5, ...]],
// ]

// Chaining map, filter, reduce
$result = array_reduce(
    array_filter(
        array_map(fn(int $n): int => $n * 2, $numbers),
        fn(int $n): bool => $n > 10
    ),
    fn(int $carry, int $item): int => $carry + $item,
    0
);
// numbers * 2 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// filtered (>10) = [12, 14, 16, 18, 20]
// reduced (sum) = 80
```

#### 1.2.4 Array Destructuring and Unpacking in Depth

```php
<?php

// Nested destructuring
$data = [
    'user' => ['name' => 'Alice', 'address' => ['city' => 'NYC', 'zip' => '10001']],
    'meta' => ['last_login' => '2026-01-15'],
];

['user' => ['name' => $name, 'address' => ['city' => $city]]] = $data;
echo $name; // Alice
echo $city; // NYC

// Swapping variables using array destructuring
$a = 1;
$b = 2;
[$a, $b] = [$b, $a];
echo "$a, $b"; // 2, 1

// Skipping elements
$tuple = [10, 20, 30, 40];
[, $second, , $fourth] = $tuple;
echo "$second, $fourth"; // 20, 40

// Variadic in destructuring
$first = [1, 2, 3, 4, 5];
[$head, ...$tail] = $first;
echo "$head, [" . implode(',', $tail) . "]"; // 1, [2,3,4,5]
```

---

### 1.3 Functions

Functions are first-class citizens in PHP. They can be named, anonymous, assigned to variables, passed as arguments, and returned from other functions.

#### 1.3.1 Named Functions

```php
<?php

function greet(string $name): string {
    return "Hello, $name!";
}

echo greet("Alice"); // Hello, Alice!

// Optional parameters with defaults
function createUser(string $name, string $role = 'viewer', bool $active = true): array {
    return [
        'name' => $name,
        'role' => $role,
        'active' => $active,
    ];
}

$user = createUser('Alice');
print_r($user);
// ['name' => 'Alice', 'role' => 'viewer', 'active' => true]

$admin = createUser('Bob', 'admin');
print_r($admin);
// ['name' => 'Bob', 'role' => 'admin', 'active' => true]

// Nullable types and union types (PHP 8.0+)
function findUser(int $id): ?array {
    // Returns array or null
    $users = [1 => ['name' => 'Alice'], 2 => ['name' => 'Bob']];
    return $users[$id] ?? null;
}

function formatValue(int|string $value): string {
    return "Value: $value";
}

echo formatValue(42);    // Value: 42
echo formatValue("42");  // Value: 42

// Void return type (no return value)
function logMessage(string $message): void {
    echo "[LOG] $message" . PHP_EOL;
}

// Mixed return type (any type)
function identity(mixed $value): mixed {
    return $value;
}

// Type coercion without strict types
function multiply(int $a, int $b): int {
    return $a * $b;
}
echo multiply("5", "10"); // 50 (strings coerced to ints)

// Named arguments (PHP 8.0+)
function createProfile(
    string $name,
    string $email,
    int $age = 0,
    string $city = 'Unknown',
    bool $subscribed = false
): array {
    return compact('name', 'email', 'age', 'city', 'subscribed');
}

// Skip defaults by naming arguments
$profile = createProfile(
    name: 'Alice',
    email: 'alice@example.com',
    subscribed: true,
);
// age defaults to 0, city defaults to 'Unknown'

// Named arguments can be in any order
$profile2 = createProfile(
    email: 'bob@example.com',
    name: 'Bob',
    city: 'New York',
);
```

#### 1.3.2 Strict Types and Return Type Variance

```php
<?php
declare(strict_types=1);

function calculateTotal(array $items, float $taxRate): float {
    $subtotal = array_sum($items);
    return $subtotal * (1 + $taxRate);
}

// Return type compatibility for inheritance
interface Formatter {
    public function format(string $input): string;
}

class UpperCaseFormatter implements Formatter {
    public function format(string $input): string {
        return strtoupper($input);
    }
}

// Covariant return types (PHP 7.4+)
class ParentStore {
    public function get(): object {
        return new stdClass();
    }
}

class ChildStore extends ParentStore {
    public function get(): \stdClass {
        return new \stdClass();
    }
}
```

#### 1.3.3 Anonymous Functions (Closures)

```php
<?php

$greet = function (string $name): string {
    return "Hello, $name!";
};

echo $greet("Alice"); // Hello, Alice!

// Closures can capture variables from the surrounding scope using "use"
$prefix = "User: ";
$formatUser = function (string $name) use ($prefix): string {
    return $prefix . $name;
};

echo $formatUser("Alice"); // User: Alice

// By default, "use" captures by value (copy). Use & for by-reference.
$counter = 0;
$increment = function () use (&$counter): void {
    $counter++;
};
$increment();
$increment();
echo $counter; // 2

// Closures are often used as callbacks
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function (int $n): int {
    return $n * 2;
}, $numbers);
// [2, 4, 6, 8, 10]

// Static closures (cannot bind $this)
$staticClosure = static function (string $name): string {
    return "Static: $name";
};
```

#### 1.3.4 Arrow Functions (PHP 7.4+)

Arrow functions are a concise syntax for closures. They automatically capture variables by value and are limited to a single expression.

```php
<?php

$numbers = [1, 2, 3, 4, 5];

// Arrow function automatically captures $multiplier by value
$multiplier = 3;
$multiplied = array_map(
    fn(int $n): int => $n * $multiplier,
    $numbers
);
// [3, 6, 9, 12, 15]

// Arrow functions cannot have multiple statements
// Cannot use: fn($x) => { $y = $x * 2; return $y; };
// Must be a single expression: fn($x) => $x * 2

// Nested arrow functions
$data = [[1, 2], [3, 4], [5, 6]];
$sums = array_map(
    fn(array $pair): int => array_reduce(
        $pair,
        fn(int $carry, int $n): int => $carry + $n,
        0
    ),
    $data
);
// [3, 7, 11]

// Arrow functions in array_filter
$even = array_filter($numbers, fn(int $n): bool => $n % 2 === 0);
// [2, 4]

// Arrow functions automatically have access to $this in class context
class Calculator {
    private int $factor = 10;

    public function apply(array $values): array {
        return array_map(
            fn(int $v): int => $v * $this->factor,
            $values
        );
    }
}
```

#### 1.3.5 Variadic Functions

```php
<?php

// Variadic parameter captures all remaining arguments as an array
function sum(int ...$numbers): int {
    return array_sum($numbers);
}

echo sum(1, 2, 3, 4, 5); // 15

// Variadic with regular parameters
function createList(string $title, string ...$items): array {
    return [
        'title' => $title,
        'items' => $items,
        'count' => count($items),
    ];
}

print_r(createList('Shopping', 'Apples', 'Bread', 'Milk'));
// ['title' => 'Shopping', 'items' => ['Apples', 'Bread', 'Milk'], 'count' => 3]

// Spread operator to unpack array into variadic arguments
$args = [1, 2, 3, 4, 5];
echo sum(...$args); // 15

// Named arguments with variadic
function formatList(string $label, string ...$items): string {
    $formatted = array_map(fn(string $item): string => "- $item", $items);
    return "$label:\n" . implode("\n", $formatted);
}

echo formatList('Fruits', ...['Apple', 'Banana', 'Cherry']);

// Variadic at end of parameter list (PHP 8.0+)
function buildQuery(string $table, array $conditions, string ...$orderBy): string {
    $query = "SELECT * FROM $table";
    if (count($conditions) > 0) {
        $clauses = implode(' AND ', $conditions);
        $query .= " WHERE $clauses";
    }
    if (count($orderBy) > 0) {
        $query .= " ORDER BY " . implode(', ', $orderBy);
    }
    return $query;
}

echo buildQuery('users', ['active = 1'], 'name ASC', 'created_at DESC');
// SELECT * FROM users WHERE active = 1 ORDER BY name ASC, created_at DESC
```

#### 1.3.6 Named Arguments (PHP 8.0+)

Named arguments allow passing arguments to a function by specifying the parameter name, making code self-documenting and skipping default parameters.

```php
<?php

function renderTemplate(
    string $view,
    array $data = [],
    bool $cache = false,
    int $ttl = 3600,
    ?string $layout = null,
): string {
    $output = "Rendering: $view\n";
    if ($cache) {
        $output .= "Cached for {$ttl}s\n";
    }
    if ($layout !== null) {
        $output .= "Using layout: $layout\n";
    }
    $output .= "Data: " . json_encode($data) . "\n";
    return $output;
}

// Without named arguments (hard to read, must pass defaults)
echo renderTemplate('welcome', [], false, 3600, 'app');

// With named arguments (self-documenting, skip defaults)
echo renderTemplate(
    view: 'welcome',
    data: ['name' => 'Alice'],
    cache: true,
    ttl: 1800,
);

// Named arguments can be combined with positional
echo renderTemplate('dashboard', cache: true);
// Positional $view = 'dashboard', named $cache = true

// Named arguments work with variadic functions
function tagged(string $tag, string ...$items): string {
    return "<$tag>" . implode("</$tag><$tag>", $items) . "</$tag>";
}

echo tagged(tag: 'li', items: 'Home', 'About', 'Contact');
// <li>Home</li><li>About</li><li>Contact</li>
```

#### 1.3.7 First-Class Callable Syntax (PHP 8.1+)

```php
<?php

// Instead of wrapping in a closure, use first-class callable syntax
$numbers = [1, 2, 3, 4, 5];

// Traditional
$doubled1 = array_map(function (int $n): int {
    return $n * 2;
}, $numbers);

// With named function
function double(int $n): int {
    return $n * 2;
}
$doubled2 = array_map('double', $numbers);

// First-class callable syntax (PHP 8.1+)
$doubled3 = array_map(double(...), $numbers);

// Useful with built-in functions
$strings = ['  hello  ', '  world  '];
$trimmed = array_map(trim(...), $strings);
// ['hello', 'world']

// With methods
class Formatter {
    public function prefix(string $value): string {
        return "Item: $value";
    }
}
$formatter = new Formatter();
$prefixed = array_map($formatter->prefix(...), ['a', 'b', 'c']);
// ['Item: a', 'Item: b', 'Item: c']

// Static methods
class MathHelper {
    public static function cube(int $n): int {
        return $n ** 3;
    }
}
$cubes = array_map(MathHelper::cube(...), [1, 2, 3]);
// [1, 8, 27]
```

---

### 1.4 Object-Oriented Programming

Laravel is deeply object-oriented. Everything from requests to models to middleware is a class instance. Understanding PHP OOP is essential.

#### 1.4.1 Classes, Properties, and Methods

```php
<?php
declare(strict_types=1);

class User
{
    // Properties with type declarations (PHP 7.4+)
    public string $name;
    protected string $email;
    private int $age;
    public static int $count = 0;
    public readonly string $uuid;

    // Constructor
    public function __construct(string $name, string $email, int $age)
    {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
        $this->uuid = uniqid('user_');
        static::$count++;
    }

    // Methods
    public function getEmail(): string
    {
        return $this->email;
    }

    protected function setEmail(string $email): void
    {
        $this->email = $email;
    }

    public function isAdult(): bool
    {
        return $this->age >= 18;
    }

    // Static method
    public static function getCount(): int
    {
        return static::$count;
    }

    // Destructor
    public function __destruct()
    {
        static::$count--;
    }
}

$user = new User('Alice', 'alice@example.com', 30);
echo $user->name;        // Alice
echo $user->isAdult();   // true
echo User::getCount();   // 1
unset($user);
echo User::getCount();   // 0
```

#### 1.4.2 Constructor Property Promotion (PHP 8.0+)

PHP 8.0 introduced constructor property promotion, which combines property declaration and constructor assignment into a single syntax. Laravel uses this extensively.

```php
<?php
declare(strict_types=1);

// Without promotion (verbose)
class OldWay
{
    public string $name;
    public string $email;
    private int $age;

    public function __construct(string $name, string $email, int $age)
    {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }
}

// With promotion (concise) Ã¢â‚¬â€ used throughout Laravel
class User
{
    public function __construct(
        public string $name,
        public string $email,
        private int $age,
        public readonly string $uuid = '',
    ) {
        $this->uuid = $uuid ?: uniqid('user_');
    }

    public function getAge(): int
    {
        return $this->age;
    }
}

$user = new User(name: 'Alice', email: 'alice@example.com', age: 30);
echo $user->name;     // Alice
echo $user->getAge(); // 30
```

#### 1.4.3 Inheritance

```php
<?php
declare(strict_types=1);

class Animal
{
    public function __construct(
        protected string $name,
        protected int $age,
    ) {}

    public function speak(): string
    {
        return "$this->name makes a sound";
    }

    public function describe(): string
    {
        return "$this->name is $this->age years old";
    }
}

class Dog extends Animal
{
    private string $breed;

    public function __construct(string $name, int $age, string $breed)
    {
        parent::__construct($name, $age);
        $this->breed = $breed;
    }

    public function speak(): string
    {
        return "$this->name barks";
    }

    public function fetch(): string
    {
        return "$this->name fetches the stick";
    }

    public function getBreed(): string
    {
        return $this->breed;
    }
}

class Cat extends Animal
{
    public function speak(): string
    {
        return "$this->name meows";
    }
}

$dog = new Dog('Rex', 3, 'Labrador');
echo $dog->speak();      // Rex barks
echo $dog->describe();   // Rex is 3 years old
echo $dog->fetch();      // Rex fetches the stick

$cat = new Cat('Whiskers', 5);
echo $cat->speak();      // Whiskers meows

// Polymorphism
function makeAnimalSpeak(Animal $animal): string
{
    return $animal->speak();
}

echo makeAnimalSpeak($dog); // Rex barks
echo makeAnimalSpeak($cat); // Whiskers meows
```

#### 1.4.4 Abstract Classes

Abstract classes define a base template that cannot be instantiated directly. They can contain both abstract methods (without implementation) and concrete methods.

```php
<?php
declare(strict_types=1);

abstract class PaymentGateway
{
    public function __construct(
        protected string $apiKey,
        protected bool $sandbox = true,
    ) {}

    // Abstract methods Ã¢â‚¬â€ subclasses MUST implement these
    abstract public function charge(float $amount, array $payload): array;
    abstract public function refund(string $transactionId): array;

    // Concrete method Ã¢â‚¬â€ shared across all gateways
    public function isSandbox(): bool
    {
        return $this->sandbox;
    }

    // Template method pattern
    public function processPayment(float $amount, array $payload): array
    {
        $this->validateAmount($amount);
        $payload['environment'] = $this->sandbox ? 'sandbox' : 'production';
        $result = $this->charge($amount, $payload);
        $this->logTransaction($result);
        return $result;
    }

    protected function validateAmount(float $amount): void
    {
        if ($amount <= 0) {
            throw new \InvalidArgumentException('Amount must be positive');
        }
    }

    protected function logTransaction(array $result): void
    {
        echo "[Payment] Transaction: {$result['id']}" . PHP_EOL;
    }
}

class StripeGateway extends PaymentGateway
{
    public function charge(float $amount, array $payload): array
    {
        // Simulated Stripe API call
        return [
            'id' => 'stripe_' . uniqid(),
            'amount' => $amount,
            'currency' => $payload['currency'] ?? 'usd',
            'status' => 'succeeded',
            'gateway' => 'stripe',
        ];
    }

    public function refund(string $transactionId): array
    {
        return [
            'id' => 'refund_' . $transactionId,
            'status' => 'refunded',
        ];
    }
}

class PayPalGateway extends PaymentGateway
{
    public function charge(float $amount, array $payload): array
    {
        return [
            'id' => 'paypal_' . uniqid(),
            'amount' => $amount,
            'currency' => $payload['currency'] ?? 'usd',
            'status' => 'completed',
            'gateway' => 'paypal',
        ];
    }

    public function refund(string $transactionId): array
    {
        return [
            'id' => 'refund_' . $transactionId,
            'status' => 'completed',
        ];
    }
}

// Cannot instantiate abstract class directly:
// $gateway = new PaymentGateway('key'); // Error!

$stripe = new StripeGateway('sk_test_123');
$result = $stripe->processPayment(49.99, ['currency' => 'eur']);
echo $result['status']; // succeeded
```

#### 1.4.5 Interfaces

Interfaces define contracts without implementation. Unlike abstract classes, a class can implement multiple interfaces.

```php
<?php
declare(strict_types=1);

interface Logger
{
    public function log(string $level, string $message, array $context = []): void;
    public function emergency(string $message, array $context = []): void;
    public function error(string $message, array $context = []): void;
    public function info(string $message, array $context = []): void;
}

interface Cacheable
{
    public function cacheKey(): string;
    public function cacheTtl(): int;
}

// A class can implement multiple interfaces
class FileLogger implements Logger
{
    public function __construct(
        private string $logPath = '/var/log/app.log',
    ) {}

    public function log(string $level, string $message, array $context = []): void
    {
        $timestamp = date('Y-m-d H:i:s');
        $contextStr = !empty($context) ? ' ' . json_encode($context) : '';
        $line = "[$timestamp] [$level] $message$contextStr" . PHP_EOL;
        file_put_contents($this->logPath, $line, FILE_APPEND | LOCK_EX);
    }

    public function emergency(string $message, array $context = []): void
    {
        $this->log('EMERGENCY', $message, $context);
    }

    public function error(string $message, array $context = []): void
    {
        $this->log('ERROR', $message, $context);
    }

    public function info(string $message, array $context = []): void
    {
        $this->log('INFO', $message, $context);
    }
}

class UserModel implements Cacheable
{
    public function __construct(
        private int $id,
        public string $name,
    ) {}

    public function cacheKey(): string
    {
        return "user_{$this->id}";
    }

    public function cacheTtl(): int
    {
        return 3600; // 1 hour
    }
}

// Using the interface for type safety
function processUser(Cacheable $entity): string
{
    return "Cache key: {$entity->cacheKey()}, TTL: {$entity->cacheTtl()}";
}

$user = new UserModel(42, 'Alice');
echo processUser($user); // Cache key: user_42, TTL: 3600

// Interface inheritance
interface AdvancedLogger extends Logger
{
    public function withContext(array $context): AdvancedLogger;
    public function flush(): void;
}
```

#### 1.4.6 Traits

Traits are horizontal reuse mechanisms. They let you share methods across unrelated classes. Traits cannot be instantiated alone.

```php
<?php
declare(strict_types=1);

trait Timestampable
{
    protected string $createdAt;
    protected string $updatedAt;

    public function initializeTimestamps(): void
    {
        $this->createdAt = date('c');
        $this->updatedAt = date('c');
    }

    public function touch(): void
    {
        $this->updatedAt = date('c');
    }

    public function getCreatedAt(): string
    {
        return $this->createdAt;
    }

    public function getUpdatedAt(): string
    {
        return $this->updatedAt;
    }
}

trait SoftDeletes
{
    protected ?string $deletedAt = null;

    public function delete(): void
    {
        $this->deletedAt = date('c');
    }

    public function restore(): void
    {
        $this->deletedAt = null;
    }

    public function isDeleted(): bool
    {
        return $this->deletedAt !== null;
    }
}

class Post
{
    use Timestampable, SoftDeletes;

    public function __construct(
        public string $title,
        public string $content,
    ) {
        $this->initializeTimestamps();
    }
}

class Comment
{
    use Timestampable;

    public function __construct(
        public string $body,
        public int $postId,
    ) {
        $this->initializeTimestamps();
    }
}

$post = new Post('My First Post', 'Hello, world!');
echo $post->getCreatedAt(); // 2026-01-15T10:00:00+00:00
$post->touch();
$post->delete();
var_dump($post->isDeleted()); // true

// Trait method precedence:
// 1. Current class method overrides trait method
// 2. Trait method overrides inherited method

trait CanGreet
{
    public function greet(): string
    {
        return "Hello from trait!";
    }
}

class BaseClass
{
    public function greet(): string
    {
        return "Hello from base!";
    }
}

class MyClass extends BaseClass
{
    use CanGreet;
}

$obj = new MyClass();
echo $obj->greet(); // Hello from trait! (trait overrides base)

// Conflict resolution with insteadof and as
trait A
{
    public function foo(): string { return 'A::foo'; }
    public function common(): string { return 'A::common'; }
}

trait B
{
    public function bar(): string { return 'B::bar'; }
    public function common(): string { return 'B::common'; }
}

class Resolver
{
    use A, B {
        A::common insteadof B; // Use A's version of common
        B::bar as protected;    // Change visibility of bar
        B::common as aliasForB; // Alias B's common under a different name
    }
}

$r = new Resolver();
echo $r->common();    // A::common
echo $r->aliasForB(); // B::common
```

#### 1.4.7 Magic Methods

PHP provides magic methods that are invoked automatically in specific situations.

```php
<?php
declare(strict_types=1);

class MagicExample
{
    private array $data = [];

    // __get is called when reading inaccessible/invisible properties
    public function __get(string $name): mixed
    {
        return $this->data[$name] ?? null;
    }

    // __set is called when writing to inaccessible/invisible properties
    public function __set(string $name, mixed $value): void
    {
        $this->data[$name] = $value;
    }

    // __call is called when invoking inaccessible/invisible methods
    public function __call(string $name, array $arguments): mixed
    {
        if ($name === 'compute') {
            return array_sum($arguments);
        }
        throw new \BadMethodCallException("Method $name does not exist");
    }

    // __callStatic for static method calls
    public static function __callStatic(string $name, array $arguments): mixed
    {
        return "Static call: $name with " . implode(', ', $arguments);
    }

    // __toString when the object is cast to string
    public function __toString(): string
    {
        return json_encode($this->data);
    }

    // __invoke when the object is called as a function
    public function __invoke(mixed ...$args): string
    {
        return "Invoked with: " . implode(', ', $args);
    }

    // __debugInfo for var_dump output
    public function __debugInfo(): array
    {
        return [
            'data_keys' => array_keys($this->data),
            'data_count' => count($this->data),
        ];
    }
}

$obj = new MagicExample();
$obj->name = 'Alice';       // Calls __set
echo $obj->name;            // Calls __get, outputs: Alice
echo $obj->compute(1, 2, 3);  // Calls __call, outputs: 6
echo MagicExample::staticMethod('a', 'b'); // Calls __callStatic
echo $obj;                  // Calls __toString
echo $obj('x', 'y');        // Calls __invoke
// Output: Invoked with: x, y
```

---

### 1.5 Namespaces and Autoloading

Namespaces solve the problem of name collisions and enable PSR-4 autoloading, which Laravel relies on heavily.

#### 1.5.1 Defining Namespaces

```php
<?php
// File: src/Models/User.php
namespace App\Models;

class User
{
    public function __construct(
        public string $name,
        public string $email,
    ) {}
}
```

```php
<?php
// File: src/Services/MailService.php
namespace App\Services;

class MailService
{
    public function send(string $to, string $subject, string $body): bool
    {
        echo "Sending email to $to: $subject" . PHP_EOL;
        return true;
    }
}
```

#### 1.5.2 Importing with `use`

```php
<?php
// File: src/Controllers/UserController.php
namespace App\Controllers;

// Import classes from other namespaces
use App\Models\User;
use App\Services\MailService;

class UserController
{
    public function __construct(
        private MailService $mail,
    ) {}

    public function register(array $data): User
    {
        $user = new User($data['name'], $data['email']);
        $this->mail->send(
            $user->email,
            'Welcome!',
            "Hello {$user->name}, welcome aboard."
        );
        return $user;
    }
}
```

#### 1.5.3 Aliasing

```php
<?php

use App\Models\User as UserModel;
use App\Services\MailService as Mailer;

$user = new UserModel('Alice', 'alice@example.com');
$mailer = new Mailer();
$mailer->send($user->email, 'Test', 'Body');

// Grouped imports (PHP 7.0+)
use App\Models\{User, Post, Comment};
use App\Services\{MailService, CacheService, LoggerService};

// Import a global class (prepend with backslash in namespace context)
// In a namespaced file:
use function array_map;
use const PHP_INT_MAX;
```

#### 1.5.4 Global Namespace

```php
<?php
namespace App\Utils;

// Call a global class by prepending backslash
$now = new \DateTimeImmutable();
echo $now->format('Y-m-d');

// Call global functions
$length = \strlen('hello');

// The `use` keyword can import from global
use DateTimeImmutable;
$now2 = new DateTimeImmutable();
```

#### 1.5.5 PSR-4 Autoloading

PSR-4 maps namespace prefixes to directory structures. A class `App\Models\User` with prefix `App\` mapped to `src/` lives at `src/Models/User.php`.

The `composer.json` configuration:

```json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/",
            "Database\\Factories\\": "database/factories/",
            "Database\\Seeders\\": "database/seeders/"
        }
    }
}
```

After adding autoload entries, run:

```bash
composer dump-autoload
```

Laravel's `composer.json` maps `App\` to `app/`. When you create a class at `app/Models/User.php` with `namespace App\Models;`, Composer autoloads it automatically.

---

### 1.6 Error Handling

PHP provides a comprehensive error handling system. Laravel wraps this into a clean exception-handling layer, but understanding the raw PHP mechanisms is essential.

#### 1.6.1 Basic Try/Catch

```php
<?php
declare(strict_types=1);

function divide(float $a, float $b): float
{
    if ($b === 0.0) {
        throw new \DivisionByZeroError('Cannot divide by zero');
    }
    return $a / $b;
}

try {
    $result = divide(10, 0);
    echo $result;
} catch (\DivisionByZeroError $e) {
    echo "Caught division error: " . $e->getMessage();
} catch (\Throwable $e) {
    echo "Caught generic error: " . $e->getMessage();
}
// Outputs: Caught division error: Cannot divide by zero
```

#### 1.6.2 Multiple Catch Blocks and Finally

```php
<?php
declare(strict_types=1);

function processFile(string $path): string
{
    if (!file_exists($path)) {
        throw new \RuntimeException("File not found: $path");
    }

    $content = file_get_contents($path);
    if ($content === false) {
        throw new \RuntimeException("Failed to read file: $path");
    }

    $decoded = json_decode($content, true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new \UnexpectedValueException(
            'Invalid JSON: ' . json_last_error_msg()
        );
    }

    return $content;
}

try {
    $data = processFile('/tmp/config.json');
    echo $data;
} catch (\RuntimeException $e) {
    echo "Runtime error: " . $e->getMessage();
} catch (\UnexpectedValueException $e) {
    echo "Value error: " . $e->getMessage();
} finally {
    echo " (cleanup completed)";
}
// The finally block always executes, whether an exception was thrown or not
```

#### 1.6.3 Custom Exception Classes

```php
<?php
declare(strict_types=1);

namespace App\Exceptions;

class PaymentException extends \RuntimeException
{
    public function __construct(
        string $message = 'Payment processing failed',
        int $code = 0,
        ?\Throwable $previous = null,
        private ?string $transactionId = null,
        private ?array $errors = [],
    ) {
        parent::__construct($message, $code, $previous);
    }

    public function getTransactionId(): ?string
    {
        return $this->transactionId;
    }

    public function getErrors(): array
    {
        return $this->errors;
    }

    public function isRetryable(): bool
    {
        return in_array($this->code, [408, 429, 500, 502, 503], true);
    }
}

class InsufficientFundsException extends PaymentException
{
    public function __construct(
        float $balance,
        float $required,
        ?string $transactionId = null,
    ) {
        $message = sprintf(
            'Insufficient funds: $%.2f required, $%.2f available',
            $required,
            $balance
        );
        parent::__construct($message, 402, null, $transactionId);
    }
}

class GatewayTimeoutException extends PaymentException
{
    public function __construct(
        string $gateway,
        ?string $transactionId = null,
    ) {
        $message = "Gateway $gateway timed out";
        parent::__construct($message, 504, null, $transactionId);
    }
}

// Usage
function processPayment(float $amount, float $balance): void
{
    if ($balance < $amount) {
        throw new InsufficientFundsException($balance, $amount, 'txn_123');
    }
    // Process payment...
}

try {
    processPayment(100.00, 25.00);
} catch (InsufficientFundsException $e) {
    echo $e->getMessage(); // Insufficient funds: $100.00 required, $25.00 available
    echo "Retryable: " . ($e->isRetryable() ? 'yes' : 'no'); // no
} catch (PaymentException $e) {
    echo "Payment error: " . $e->getMessage();
}
```

#### 1.6.4 Error Reporting

```php
<?php

// Error levels
// E_ERROR, E_WARNING, E_PARSE, E_NOTICE, E_STRICT (PHP 5.4+)
// E_DEPRECATED, E_USER_ERROR, E_USER_WARNING, E_USER_NOTICE
// E_ALL includes all errors

// Report all errors except notices
error_reporting(E_ALL & ~E_NOTICE & ~E_USER_NOTICE & ~E_DEPRECATED);

// In development, show all errors
error_reporting(E_ALL);

// Control whether errors are displayed
ini_set('display_errors', '1');
ini_set('display_startup_errors', '1');

// In production, log errors instead of displaying them
// ini_set('display_errors', '0');
ini_set('log_errors', '1');
ini_set('error_log', '/var/log/php_errors.log');

// Convert warnings to exceptions using set_error_handler
set_error_handler(function (
    int $severity,
    string $message,
    string $file,
    int $line,
): bool {
    if (!(error_reporting() & $severity)) {
        // Error level is not included in error_reporting
        return false;
    }
    throw new \ErrorException($message, 0, $severity, $file, $line);
});

// Now this triggers an ErrorException instead of a warning
try {
    $result = 1 / 0; // DivisionByZeroError on modern PHP
} catch (\DivisionByZeroError $e) {
    echo "Caught: " . $e->getMessage();
}

// Triggering user errors
trigger_error('Something went wrong', E_USER_WARNING);
```

#### 1.6.5 Try/Catch with Multiple Exception Types (PHP 8.0+)

```php
<?php
declare(strict_types=1);

class ValidationException extends \RuntimeException {}
class NotFoundException extends \RuntimeException {}
class UnauthorizedException extends \RuntimeException {}

function execute(string $action): string
{
    return match ($action) {
        'validate' => throw new ValidationException('Invalid input'),
        'find' => throw new NotFoundException('Resource not found'),
        'auth' => throw new UnauthorizedException('Access denied'),
        default => "Action: $action",
    };
}

// Catching multiple exception types
try {
    $result = execute('find');
    echo $result;
} catch (ValidationException | NotFoundException | UnauthorizedException $e) {
    $class = (new \ReflectionClass($e))->getShortName();
    echo "[$class] " . $e->getMessage();
}
// Outputs: [NotFoundException] Resource not found

// The Throwable interface catches everything
try {
    execute('unknown');
} catch (\Throwable $e) {
    echo get_class($e) . ': ' . $e->getMessage();
}
```

---

### 1.7 Composer

Composer is PHP's dependency manager, essential for Laravel development.

#### 1.7.1 Initializing a Project

```bash
# Create a new project and initialize composer
mkdir my-project
cd my-project

# Initialize with interactive prompts
composer init

# Non-interactive initialization
composer init --name="my/project" --description="My awesome project" --type="project" --no-interaction
```

The `composer init` command generates a `composer.json` file:

```json
{
    "name": "my/project",
    "description": "My awesome project",
    "type": "project",
    "require": {},
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    },
    "scripts": {
        "test": "phpunit",
        "check": [
            "@test",
            "phpstan analyse"
        ]
    }
}
```

#### 1.7.2 Requiring Packages

```bash
# Require a production dependency
composer require laravel/framework

# Require a specific version
composer require monolog/monolog:3.7.0

# Require with version constraint
composer require guzzlehttp/guzzle:^7.0

# Require a dev dependency
composer require --dev phpunit/phpunit:^11.0
composer require --dev laravel/sail

# Remove a package
composer remove phpunit/phpunit --dev

# Update a specific package
composer update monolog/monolog

# Update all packages
composer update

# Install from lock file
composer install
```

#### 1.7.3 PSR-4 Autoloading

```bash
# After modifying autoload section in composer.json:
composer dump-autoload
# or
composer dump-autoload -o  # Optimized (classmap for faster loading)
```

Example directory structure with PSR-4:

```
project/
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ composer.json
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ src/
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Models/
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ User.php          # namespace App\Models;
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ Product.php       # namespace App\Models;
Ã¢â€â€š   Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ Services/
Ã¢â€â€š   Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ InvoiceService.php # namespace App\Services;
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ Exceptions/
Ã¢â€â€š       Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ AppException.php  # namespace App\Exceptions;
Ã¢â€Å“Ã¢â€â‚¬Ã¢â€â‚¬ tests/
Ã¢â€â€š   Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ Unit/
Ã¢â€â€š       Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ UserTest.php      # namespace App\Tests\Unit;
Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ public/
    Ã¢â€â€Ã¢â€â‚¬Ã¢â€â‚¬ index.php
```

#### 1.7.4 Composer Scripts

```json
{
    "scripts": {
        "test": "phpunit",
        "test:coverage": "phpunit --coverage-html coverage/",
        "lint": "phpcs --standard=PSR12 src/",
        "stan": "phpstan analyse --level=max src/",
        "fix": "phpcbf --standard=PSR12 src/",
        "all": [
            "@lint",
            "@stan",
            "@test"
        ],
        "pre-update-cmd": [
            "echo 'Running before update...'"
        ],
        "post-update-cmd": [
            "echo 'Running after update...'"
        ],
        "post-install-cmd": [
            "php artisan optimize",
            "php artisan storage:link"
        ]
    }
}
```

Run scripts:

```bash
composer test
composer run-script all
composer run lint
```

#### 1.7.5 Version Constraints

| Constraint | Meaning |
|---|---|
| `^1.2.3` | >=1.2.3, &lt;2.0.0 (compatible with minor versions) |
| `~1.2.3` | >=1.2.3, &lt;1.3.0 (compatible with patch versions) |
| `1.2.*` | >=1.2.0, &lt;1.3.0 |
| `>=1.2` | 1.2.0 or higher |
| `1.2.3` | Exactly 1.2.3 |
| `*` | Any version |

```json
{
    "require": {
        "php": "^8.3",
        "laravel/framework": "^13.0",
        "spatie/laravel-permission": "^6.0",
        "laravel/sanctum": "^4.0",
        "guzzlehttp/guzzle": "^7.8"
    },
    "require-dev": {
        "phpunit/phpunit": "^11.0",
        "laravel/sail": "^1.0",
        "nunomaduro/collision": "^8.0",
        "larastan/larastan": "^2.0"
    }
}
```

#### 1.7.6 Composer Lock File and Best Practices

```bash
# The composer.lock file must be committed to version control
# It ensures everyone on the team uses the exact same versions

# When deploying, only run:
composer install --no-dev --optimize-autoloader

# Classmap optimization for production
composer dump-autoload -o

# Check for security vulnerabilities
composer audit

# Show installed packages
composer show

# Show packages that can be updated
composer outdated
```

---

### 1.8 PHP 8.3 Features

PHP 8.3, released November 2023, is the minimum PHP version for Laravel 13. These features appear throughout Laravel's codebase.

#### 1.8.1 Readonly Classes (PHP 8.2+)

```php
<?php
declare(strict_types=1);

// Marking a class as readonly makes all properties implicitly readonly
readonly class Configuration
{
    // All properties are automatically readonly
    public function __construct(
        public string $appName,
        public string $env,
        public bool $debug,
        public string $url,
    ) {}
}

$config = new Configuration(
    appName: 'My App',
    env: 'production',
    debug: false,
    url: 'https://example.com',
);

echo $config->appName; // My App

// This would cause an error:
// $config->appName = 'New Name';
// Error: Cannot modify readonly property Configuration::$appName

// Readonly properties can only be declared in promoted constructor parameters
// or in the property declaration of a readonly class

// Readonly classes support inheritance
readonly class ExtendedConfig extends Configuration
{
    public function __construct(
        string $appName,
        string $env,
        bool $debug,
        string $url,
        public string $version,
    ) {
        parent::__construct($appName, $env, $debug, $url);
    }
}
```

#### 1.8.2 Enums (PHP 8.1+)

Enums are a first-class type in PHP, heavily used in Laravel for status fields, notification channels, and more.

```php
<?php
declare(strict_types=1);

// Pure enum (no backed value)
enum UserRole
{
    case Admin;
    case Editor;
    case Viewer;
}

// Backed enum (with scalar value)
enum OrderStatus: string
{
    case Pending = 'pending';
    case Processing = 'processing';
    case Shipped = 'shipped';
    case Delivered = 'delivered';
    case Cancelled = 'cancelled';
}

// Int-backed enum
enum HttpCode: int
{
    case OK = 200;
    case Created = 201;
    case BadRequest = 400;
    case Unauthorized = 401;
    case NotFound = 404;
    case ServerError = 500;
}

// Enum methods
enum PaymentMethod: string
{
    case CreditCard = 'cc';
    case PayPal = 'pp';
    case BankTransfer = 'bt';

    public function label(): string
    {
        return match ($this) {
            self::CreditCard => 'Credit Card',
            self::PayPal => 'PayPal',
            self::BankTransfer => 'Bank Transfer',
        };
    }

    public function requiresGateway(): bool
    {
        return match ($this) {
            self::BankTransfer => false,
            default => true,
        };
    }

    public static function fromCurrency(string $currency): self
    {
        return match ($currency) {
            'USD', 'EUR', 'GBP' => self::CreditCard,
            'BTC' => self::BankTransfer,
            default => self::PayPal,
        };
    }
}

// Usage
$status = OrderStatus::Pending;
echo $status->name;    // Pending
echo $status->value;   // pending

// Match on enum
function getStatusColor(OrderStatus $status): string
{
    return match ($status) {
        OrderStatus::Pending => 'yellow',
        OrderStatus::Processing => 'blue',
        OrderStatus::Shipped => 'purple',
        OrderStatus::Delivered => 'green',
        OrderStatus::Cancelled => 'red',
    };
}

echo getStatusColor(OrderStatus::Delivered); // green

// Enum with backed values
$fromDb = OrderStatus::from('shipped'); // OrderStatus::Shipped
$tryFrom = OrderStatus::tryFrom('unknown'); // null (no exception)

// Enum in switch
$method = PaymentMethod::PayPal;
switch ($method) {
    case PaymentMethod::CreditCard:
        echo "Processing credit card";
        break;
    case PaymentMethod::PayPal:
        echo "Redirecting to PayPal";
        break;
    case PaymentMethod::BankTransfer:
        echo "Generating bank transfer details";
        break;
}
// Outputs: Redirecting to PayPal

echo PaymentMethod::PayPal->label(); // PayPal
echo PaymentMethod::fromCurrency('EUR')->label(); // Credit Card

// Enum implements interfaces
enum StringableStatus: string implements \JsonSerializable
{
    case Active = 'active';
    case Inactive = 'inactive';

    public function jsonSerialize(): string
    {
        return $this->value;
    }
}

echo json_encode(StringableStatus::Active); // "active"

// Enum in arrays
$allowedStatuses = [OrderStatus::Pending, OrderStatus::Processing, OrderStatus::Shipped];
var_dump(in_array(OrderStatus::Pending, $allowedStatuses)); // true

// Enum for Laravel model casting
// In a Laravel model:
// protected $casts = [
//     'role' => UserRole::class,
//     'status' => OrderStatus::class,
// ];
```

#### 1.8.3 Typed Properties (PHP 7.4+) and Readonly Properties (PHP 8.1+)

```php
<?php
declare(strict_types=1);

class Product
{
    // Typed properties
    public string $name;
    public float $price;
    public ?string $description = null;
    public array $tags = [];
    private int $stock;

    // Readonly property (set once, cannot change)
    public readonly string $sku;

    // Union type
    private int|float $discount = 0;

    // Mixed type
    private mixed $metadata = [];

    public function __construct(string $name, float $price)
    {
        $this->name = $name;
        $this->price = $price;
        $this->sku = strtoupper(uniqid('SKU_'));
        $this->stock = 0;
    }

    public function setStock(int $stock): void
    {
        $this->stock = $stock;
    }

    public function getStock(): int
    {
        return $this->stock;
    }

    // Nullable type
    public function setDescription(?string $description): void
    {
        $this->description = $description;
    }
}

$product = new Product('Widget', 19.99);
$product->setStock(50);
// $product->sku = 'new_sku'; // Error: readonly property

echo $product->sku; // SKU_6612a3b4c5d6e

// Typed properties must be initialized before access
// Uninitialized typed property access throws TypeError

// Property hook proposal (PHP 8.4+) Ã¢â‚¬â€ future feature
```

#### 1.8.4 `json_validate` (PHP 8.3+)

PHP 8.3 introduced `json_validate()` to check if a string is valid JSON without decoding it.

```php
<?php
declare(strict_types=1);

// Before PHP 8.3 (wasteful Ã¢â‚¬â€ decodes twice)
function isValidJsonOld(string $data): bool
{
    json_decode($data);
    return json_last_error() === JSON_ERROR_NONE;
}

// With PHP 8.3 (efficient Ã¢â‚¬â€ validates without decoding)
function isValidJson(string $data): bool
{
    return json_validate($data);
}

$valid = '{"name":"Alice","age":30}';
$invalid = '{"name": Alice}';

var_dump(isValidJson($valid));   // true
var_dump(isValidJson($invalid)); // false

// Practical use: validate before decoding
$response = '{"status":"ok","data":[]}';

if (!json_validate($response)) {
    throw new \InvalidArgumentException('Invalid JSON response');
}

$data = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
echo $data['status']; // ok

// Depth parameter (default 512)
$deepJson = '{"a":{"b":{"c":{"d":"value"}}}}';
var_dump(json_validate($deepJson, 3));  // false (too deep)
var_dump(json_validate($deepJson, 10)); // true
```

#### 1.8.5 Dynamic Class Constant Fetch (PHP 8.3+)

PHP 8.3 allows fetching class constants using a dynamic name with the `ClassName::{$name}` syntax.

```php
<?php
declare(strict_types=1);

class ErrorMessages
{
    public const NOT_FOUND = 'Resource not found';
    public const UNAUTHORIZED = 'Unauthorized access';
    public const VALIDATION_FAILED = 'Validation failed';
    public const SERVER_ERROR = 'Internal server error';
}

// Before PHP 8.3 (required constant() function)
$errorKey = 'NOT_FOUND';
$message = constant(ErrorMessages::class . '::' . $errorKey);
echo $message; // Resource not found

// PHP 8.3+ dynamic constant fetch
$errorKey = 'VALIDATION_FAILED';
$message = ErrorMessages::{$errorKey};
echo $message; // Validation failed

// Practical use in mapping
function getErrorMessage(string $key): string
{
    return ErrorMessages::{$key} ?? 'Unknown error';
}

echo getErrorMessage('UNAUTHORIZED'); // Unauthorized access

// Works with enums too
enum Status: string
{
    case Active = 'active';
    case Inactive = 'inactive';
    case Archived = 'archived';
}

$statusName = 'Active';
echo Status::{$statusName}->value; // active
```

#### 1.8.6 Additional PHP 8.x Features Used in Laravel

```php
<?php
declare(strict_types=1);

// 1. Nullsafe operator (PHP 8.0+)
class Address
{
    public function __construct(
        public ?string $city = null,
        public ?string $zipCode = null,
    ) {}
}

class Customer
{
    public function __construct(
        public string $name,
        public ?Address $address = null,
    ) {}
}

$customer = new Customer('Alice', new Address(city: 'New York'));
$city = $customer->address?->city ?? 'Unknown';
echo $city; // New York

$customer2 = new Customer('Bob');
$city2 = $customer2->address?->city ?? 'Unknown';
echo $city2; // Unknown

// 2. Match expression (PHP 8.0+)
$httpCode = 404;
$category = match (true) {
    $httpCode < 200 => 'Informational',
    $httpCode < 300 => 'Success',
    $httpCode < 400 => 'Redirect',
    $httpCode < 500 => 'Client Error',
    default => 'Server Error',
};
echo $category; // Client Error

// 3. Attributes (PHP 8.0+)
#[Attribute]
class Route
{
    public function __construct(
        public string $method,
        public string $path,
    ) {}
}

#[Attribute]
class Middleware
{
    public function __construct(
        public string $name,
    ) {}
}

#[Route('GET', '/users')]
#[Middleware('auth')]
class UserController
{
    #[Route('GET', '/users/{id}')]
    public function show(int $id): string
    {
        return "Showing user $id";
    }
}

// Reading attributes at runtime
$reflection = new ReflectionClass(UserController::class);
$routeAttr = $reflection->getAttributes(Route::class)[0] ?? null;
if ($routeAttr !== null) {
    $route = $routeAttr->newInstance();
    echo "{$route->method} {$route->path}"; // GET /users
}

// 4. New in initializers (PHP 8.1+)
class Cache
{
    public function __construct(
        private int $ttl = 3600,
    ) {}

    public function get(string $key): string
    {
        return "cached:$key";
    }
}

class Service
{
    // Can use new in default parameter value
    public function __construct(
        private Cache $cache = new Cache(),
    ) {}
}

// 5. Fibers (PHP 8.1+) Ã¢â‚¬â€ used in Laravel's async features
$fiber = new Fiber(function (): void {
    $value = Fiber::suspend('suspended');
    echo "Resumed with: $value";
});

$result = $fiber->start();
echo $result; // suspended
$fiber->resume('hello'); // Resumed with: hello
```

---

### 1.9 Design Patterns for Laravel Developers

Design patterns provide proven solutions to common architectural problems. These four patterns are fundamental to Laravel application design.

#### 1.9.1 Factory Pattern

The Factory pattern creates objects without specifying the exact class. Laravel's database factories are a prime example.

```php
<?php
declare(strict_types=1);

// Interfaces for the products
interface PaymentProvider
{
    public function charge(float $amount, array $options): array;
    public function refund(string $transactionId): array;
}

// Concrete implementations
class StripeProvider implements PaymentProvider
{
    public function __construct(
        private string $apiKey,
        private string $webhookSecret,
    ) {}

    public function charge(float $amount, array $options): array
    {
        return [
            'id' => 'ch_' . uniqid(),
            'amount' => $amount,
            'currency' => $options['currency'] ?? 'usd',
            'status' => 'succeeded',
            'provider' => 'stripe',
        ];
    }

    public function refund(string $transactionId): array
    {
        return [
            'id' => 'refund_' . $transactionId,
            'status' => 'succeeded',
        ];
    }
}

class PayPalProvider implements PaymentProvider
{
    public function __construct(
        private string $clientId,
        private string $clientSecret,
    ) {}

    public function charge(float $amount, array $options): array
    {
        return [
            'id' => 'PAY-' . uniqid(),
            'amount' => $amount,
            'currency' => $options['currency'] ?? 'usd',
            'status' => 'completed',
            'provider' => 'paypal',
        ];
    }

    public function refund(string $transactionId): array
    {
        return [
            'id' => 'RF-' . $transactionId,
            'status' => 'completed',
        ];
    }
}

// The Factory
class PaymentFactory
{
    public function make(string $provider, array $config): PaymentProvider
    {
        return match ($provider) {
            'stripe' => new StripeProvider(
                apiKey: $config['api_key'],
                webhookSecret: $config['webhook_secret'],
            ),
            'paypal' => new PayPalProvider(
                clientId: $config['client_id'],
                clientSecret: $config['client_secret'],
            ),
            default => throw new \InvalidArgumentException(
                "Unknown payment provider: $provider"
            ),
        };
    }

    // Static version
    public static function create(string $provider, array $config): PaymentProvider
    {
        return (new self())->make($provider, $config);
    }
}

// Usage
$factory = new PaymentFactory();
$stripe = $factory->make('stripe', [
    'api_key' => 'sk_test_123',
    'webhook_secret' => 'whsec_456',
]);

$result = $stripe->charge(50.00, ['currency' => 'eur']);
echo $result['status']; // succeeded

// Static usage
$paypal = PaymentFactory::create('paypal', [
    'client_id' => 'abc',
    'client_secret' => 'def',
]);

// In Laravel, this would be registered as a service provider:
// class PaymentServiceProvider extends ServiceProvider
// {
//     public function register(): void
//     {
//         $this->app->bind(PaymentFactory::class, function ($app) {
//             return new PaymentFactory();
//         });
//     }
// }
```

#### 1.9.2 Repository Pattern

The Repository pattern abstracts data access, making it easy to switch data sources and test business logic in isolation.

```php
<?php
declare(strict_types=1);

namespace App\Repositories;

// Entity
class User
{
    public function __construct(
        public ?int $id,
        public string $name,
        public string $email,
        public bool $active = true,
        public ?string $createdAt = null,
    ) {
        $this->createdAt ??= date('c');
    }
}

// Repository interface
interface UserRepositoryInterface
{
    public function find(int $id): ?User;
    public function findByEmail(string $email): ?User;
    public function all(): array;
    public function save(User $user): User;
    public function delete(User $user): bool;
    public function findActive(): array;
}

// In-memory implementation (useful for testing)
class InMemoryUserRepository implements UserRepositoryInterface
{
    /** @var array<int, User> */
    private array $users = [];
    private int $nextId = 1;

    public function find(int $id): ?User
    {
        return $this->users[$id] ?? null;
    }

    public function findByEmail(string $email): ?User
    {
        foreach ($this->users as $user) {
            if ($user->email === $email) {
                return $user;
            }
        }
        return null;
    }

    public function all(): array
    {
        return array_values($this->users);
    }

    public function save(User $user): User
    {
        if ($user->id === null) {
            $user->id = $this->nextId++;
            $this->users[$user->id] = $user;
        } else {
            $this->users[$user->id] = $user;
        }
        return $user;
    }

    public function delete(User $user): bool
    {
        if ($user->id !== null && isset($this->users[$user->id])) {
            unset($this->users[$user->id]);
            return true;
        }
        return false;
    }

    public function findActive(): array
    {
        return array_values(
            array_filter($this->users, fn(User $u): bool => $u->active)
        );
    }
}

// Database implementation (production)
class DatabaseUserRepository implements UserRepositoryInterface
{
    public function __construct(
        private \PDO $pdo,
    ) {}

    public function find(int $id): ?User
    {
        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE id = ?');
        $stmt->execute([$id]);
        $data = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $data ? $this->hydrate($data) : null;
    }

    public function findByEmail(string $email): ?User
    {
        $stmt = $this->pdo->prepare('SELECT * FROM users WHERE email = ?');
        $stmt->execute([$email]);
        $data = $stmt->fetch(\PDO::FETCH_ASSOC);
        return $data ? $this->hydrate($data) : null;
    }

    public function all(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM users');
        return array_map(fn(array $row): User => $this->hydrate($row), $stmt->fetchAll(\PDO::FETCH_ASSOC));
    }

    public function save(User $user): User
    {
        if ($user->id === null) {
            $stmt = $this->pdo->prepare(
                'INSERT INTO users (name, email, active, created_at) VALUES (?, ?, ?, ?)'
            );
            $stmt->execute([$user->name, $user->email, $user->active ? 1 : 0, $user->createdAt]);
            $user->id = (int) $this->pdo->lastInsertId();
        } else {
            $stmt = $this->pdo->prepare(
                'UPDATE users SET name = ?, email = ?, active = ? WHERE id = ?'
            );
            $stmt->execute([$user->name, $user->email, $user->active ? 1 : 0, $user->id]);
        }
        return $user;
    }

    public function delete(User $user): bool
    {
        $stmt = $this->pdo->prepare('DELETE FROM users WHERE id = ?');
        return $stmt->execute([$user->id]);
    }

    public function findActive(): array
    {
        $stmt = $this->pdo->query('SELECT * FROM users WHERE active = 1');
        return array_map(
            fn(array $row): User => $this->hydrate($row),
            $stmt->fetchAll(\PDO::FETCH_ASSOC)
        );
    }

    private function hydrate(array $data): User
    {
        return new User(
            id: (int) $data['id'],
            name: $data['name'],
            email: $data['email'],
            active: (bool) $data['active'],
            createdAt: $data['created_at'],
        );
    }
}

// Service using the repository
class UserService
{
    public function __construct(
        private UserRepositoryInterface $users,
    ) {}

    public function register(string $name, string $email): User
    {
        $existing = $this->users->findByEmail($email);
        if ($existing !== null) {
            throw new \RuntimeException('Email already registered');
        }
        return $this->users->save(new User(null, $name, $email));
    }

    public function deactivate(int $id): void
    {
        $user = $this->users->find($id);
        if ($user === null) {
            throw new \RuntimeException('User not found');
        }
        $user->active = false;
        $this->users->save($user);
    }

    public function getActiveUsers(): array
    {
        return $this->users->findActive();
    }
}

// Usage with in-memory repository
$repo = new InMemoryUserRepository();
$service = new UserService($repo);

$alice = $service->register('Alice', 'alice@example.com');
$bob = $service->register('Bob', 'bob@example.com');
$service->deactivate($alice->id);

echo count($service->getActiveUsers()); // 1 (only Bob)
```

#### 1.9.3 Strategy Pattern

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable.

```php
<?php
declare(strict_types=1);

// Strategy interface
interface ShippingStrategy
{
    public function calculateCost(float $weight, string $destination): float;
    public function getEstimatedDays(): int;
    public function getName(): string;
}

// Concrete strategies
class StandardShipping implements ShippingStrategy
{
    public function calculateCost(float $weight, string $destination): float
    {
        return 5.99 + ($weight * 0.50);
    }

    public function getEstimatedDays(): int
    {
        return 5;
    }

    public function getName(): string
    {
        return 'Standard Shipping';
    }
}

class ExpressShipping implements ShippingStrategy
{
    public function calculateCost(float $weight, string $destination): float
    {
        return 14.99 + ($weight * 1.20);
    }

    public function getEstimatedDays(): int
    {
        return 2;
    }

    public function getName(): string
    {
        return 'Express Shipping';
    }
}

class OvernightShipping implements ShippingStrategy
{
    public function calculateCost(float $weight, string $destination): float
    {
        return 29.99 + ($weight * 2.50);
    }

    public function getEstimatedDays(): int
    {
        return 1;
    }

    public function getName(): string
    {
        return 'Overnight Shipping';
    }
}

class InternationalShipping implements ShippingStrategy
{
    private const ZONE_RATES = [
        'NA' => ['base' => 15.00, 'per_kg' => 3.00, 'days' => 7],
        'EU' => ['base' => 20.00, 'per_kg' => 4.00, 'days' => 5],
        'AS' => ['base' => 25.00, 'per_kg' => 5.00, 'days' => 10],
        'SA' => ['base' => 30.00, 'per_kg' => 6.00, 'days' => 12],
        'AF' => ['base' => 35.00, 'per_kg' => 7.00, 'days' => 14],
        'OC' => ['base' => 40.00, 'per_kg' => 8.00, 'days' => 14],
    ];

    private const COUNTRY_TO_ZONE = [
        'US' => 'NA', 'CA' => 'NA', 'MX' => 'NA',
        'GB' => 'EU', 'DE' => 'EU', 'FR' => 'EU', 'IT' => 'EU', 'ES' => 'EU',
        'JP' => 'AS', 'CN' => 'AS', 'IN' => 'AS', 'KR' => 'AS',
        'BR' => 'SA', 'AR' => 'SA',
        'NG' => 'AF', 'ZA' => 'AF', 'KE' => 'AF',
        'AU' => 'OC', 'NZ' => 'OC',
    ];

    private function getZone(string $destination): string
    {
        return self::COUNTRY_TO_ZONE[$destination] ?? 'AS';
    }

    public function calculateCost(float $weight, string $destination): float
    {
        $zone = $this->getZone($destination);
        $rates = self::ZONE_RATES[$zone];
        return $rates['base'] + ($weight * $rates['per_kg']);
    }

    public function getEstimatedDays(): int
    {
        return 14;
    }

    public function getName(): string
    {
        return 'International Shipping';
    }
}

// Context class
class ShippingCalculator
{
    private ShippingStrategy $strategy;

    public function __construct(?ShippingStrategy $strategy = null)
    {
        $this->strategy = $strategy ?? new StandardShipping();
    }

    public function setStrategy(ShippingStrategy $strategy): void
    {
        $this->strategy = $strategy;
    }

    public function calculate(float $weight, string $destination): array
    {
        return [
            'method' => $this->strategy->getName(),
            'cost' => $this->strategy->calculateCost($weight, $destination),
            'estimated_days' => $this->strategy->getEstimatedDays(),
            'weight' => $weight,
            'destination' => $destination,
        ];
    }
}

// Strategy resolver
class ShippingStrategyResolver
{
    /** @var array<string, ShippingStrategy> */
    private array $strategies;

    public function __construct()
    {
        $this->strategies = [
            'standard' => new StandardShipping(),
            'express' => new ExpressShipping(),
            'overnight' => new OvernightShipping(),
            'international' => new InternationalShipping(),
        ];
    }

    public function resolve(string $method): ShippingStrategy
    {
        return $this->strategies[$method]
            ?? throw new \InvalidArgumentException("Unknown shipping method: $method");
    }
}

// Usage
$calculator = new ShippingCalculator();
$resolver = new ShippingStrategyResolver();

// Standard shipping
$result = $calculator->calculate(2.5, 'US');
echo "{$result['method']}: \${$result['cost']}, {$result['estimated_days']} days";
// Standard Shipping: $7.24, 5 days

// Switch to express
$calculator->setStrategy($resolver->resolve('express'));
$result = $calculator->calculate(2.5, 'US');
echo "{$result['method']}: \${$result['cost']}, {$result['estimated_days']} days";
// Express Shipping: $17.99, 2 days

// International
$international = new InternationalShipping();
$calculator->setStrategy($international);
$result = $calculator->calculate(2.5, 'JP');
echo "{$result['method']}: \${$result['cost']}, {$result['estimated_days']} days";
// International Shipping: $37.50, 14 days
```

#### 1.9.4 Singleton Pattern

The Singleton pattern ensures a class has only one instance. Laravel's service container manages singletons natively, but understanding the raw pattern is valuable.

```php
<?php
declare(strict_types=1);

class Logger
{
    private static ?Logger $instance = null;
    private array $logs = [];
    private string $logFile;

    // Private constructor prevents direct instantiation
    private function __construct(string $logFile = 'app.log')
    {
        $this->logFile = $logFile;
    }

    // Prevent cloning
    private function __clone(): void {}

    // Prevent unserialization
    public function __wakeup(): void
    {
        throw new \RuntimeException('Cannot unserialize singleton');
    }

    // Static method to get the single instance
    public static function getInstance(string $logFile = 'app.log'): self
    {
        if (self::$instance === null) {
            self::$instance = new self($logFile);
        }
        return self::$instance;
    }

    public function log(string $level, string $message): void
    {
        $entry = sprintf(
            '[%s] [%s] %s',
            date('Y-m-d H:i:s'),
            strtoupper($level),
            $message
        );
        $this->logs[] = $entry;
        file_put_contents($this->logFile, $entry . PHP_EOL, FILE_APPEND | LOCK_EX);
    }

    public function getLogs(): array
    {
        return $this->logs;
    }

    public function clear(): void
    {
        $this->logs = [];
    }
}

// Usage
$logger1 = Logger::getInstance();
$logger2 = Logger::getInstance();

var_dump($logger1 === $logger2); // true (same instance)

$logger1->log('info', 'Application started');
$logger1->log('error', 'Database connection failed');
$logger1->log('info', 'Application stopped');

print_r($logger1->getLogs());
// [
//   '[2026-01-15 10:00:00] [INFO] Application started',
//   '[2026-01-15 10:00:00] [ERROR] Database connection failed',
//   '[2026-01-15 10:00:00] [INFO] Application stopped',
// ]

// Laravel's container manages singletons for you:
// $this->app->singleton(Logger::class, function ($app) {
//     return Logger::getInstance();
// });
// // Then use dependency injection:
// public function __construct(private Logger $logger) {}

// Improved singleton with configurable instance
class ConfigAwareSingleton
{
    private static array $instances = [];

    private function __construct(
        private readonly string $name,
    ) {}

    public static function getInstance(string $name): self
    {
        if (!isset(self::$instances[$name])) {
            self::$instances[$name] = new self($name);
        }
        return self::$instances[$name];
    }

    public function getName(): string
    {
        return $this->name;
    }
}

$db1 = ConfigAwareSingleton::getInstance('database');
$db2 = ConfigAwareSingleton::getInstance('database');
$cache1 = ConfigAwareSingleton::getInstance('cache');

var_dump($db1 === $db2);     // true
var_dump($db1 === $cache1);  // false (different named singletons)
```

---

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key PHP concepts for Laravel development.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Variables & Types | Store and manipulate data | Dynamic typing with type declarations |
| Arrays | Ordered data collections | Indexed + associative + array functions |
| OOP | Code organization and reuse | Classes, inheritance, interfaces, traits |
| Namespaces | Code organization and collision prevention | PSR-4 autoloading |
| Composer | Dependency management | require, autoload, scripts |

---


> **Pro Tip:** Use strict types (declare(strict_types=1)) in all new PHP files. It prevents subtle type coercion bugs.

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for PHP fundamentals.

| Topic | Key Point |
|-------|-----------|
| PHP Syntax | <?php, echo, semicolons, variables start with $ |
| Data Types | int, float, string, bool, array, object, null |
| OOP Keywords | class, extends, implements, abstract, final, trait |
| PHP 8.3 | readonly, enums, json_validate, override attribute |
| Composer | composer init, require, install, update, dump-autoload |

---


> **Remember:** PSR-4 autoloading requires namespace-to-directory matching. A single mismatch causes cryptic class-not-found errors.

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Type System | Code reliability | Strict vs dynamic typing |
| OOP | Application architecture | Inheritance vs composition |
| Namespaces | Code organization | Structure vs verbosity |
| Composer | Dependency management | Reuse vs dependency conflicts |
| Error Handling | Application stability | Exceptions vs return codes |

---


> **Warning:** Never use extract() on user input. It can overwrite existing variables and create security vulnerabilities.

## Chapter Quiz
> **One-Sentence Takeaway:** Test your PHP fundamentals knowledge.

**Q1:** How do you declare a variable in PHP?
- A) var name
- B) $name
- C) let name
- D) const name

<details><summary>Answer&lt;/summary&gt;B) $name&lt;/details&gt;

**Q2:** What does Composer's require command do?
- A) Updates all packages
- B) Adds a package as a dependency
- C) Removes a package
- D) Lists all packages

<details><summary>Answer&lt;/summary&gt;B) Adds a package as a dependency&lt;/details&gt;

**Q3:** Which keyword is used to implement an interface?
- A) extends
- B) implements
- C) inherits
- D) uses

<details><summary>Answer&lt;/summary&gt;B) implements&lt;/details&gt;

**Q4:** What is the purpose of namespaces in PHP?
- A) Speed optimization
- B) Organize code and prevent class name collisions
- C) Database connection
- D) User authentication

<details><summary>Answer&lt;/summary&gt;B) Organize code and prevent class name collisions&lt;/details&gt;

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key PHP concepts for Laravel development.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Variables & Types | Store and manipulate data | Dynamic typing with type declarations |
| Arrays | Ordered data collections | Indexed + associative + array functions |
| OOP | Code organization and reuse | Classes, inheritance, interfaces, traits |
| Namespaces | Code organization and collision prevention | PSR-4 autoloading |
| Composer | Dependency management | require, autoload, scripts |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for PHP fundamentals.

| Topic | Key Point |
|-------|-----------|
| PHP Syntax | <?php, echo, semicolons, variables start with $ |
| Data Types | int, float, string, bool, array, object, null |
| OOP Keywords | class, extends, implements, abstract, final, trait |
| PHP 8.3 | readonly, enums, json_validate, override attribute |
| Composer | composer init, require, install, update, dump-autoload |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Type System | Code reliability | Strict vs dynamic typing |
| OOP | Application architecture | Inheritance vs composition |
| Namespaces | Code organization | Structure vs verbosity |
| Composer | Dependency management | Reuse vs dependency conflicts |
| Error Handling | Application stability | Exceptions vs return codes |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your PHP fundamentals knowledge.

**Q1:** How do you declare a variable in PHP?
- A) var name
- B) $name
- C) let name
- D) const name

<details><summary>Answer&lt;/summary&gt;B) $name&lt;/details&gt;

**Q2:** What does Composer's require command do?
- A) Updates all packages
- B) Adds a package as a dependency
- C) Removes a package
- D) Lists all packages

<details><summary>Answer&lt;/summary&gt;B) Adds a package as a dependency&lt;/details&gt;

**Q3:** Which keyword is used to implement an interface?
- A) extends
- B) implements
- C) inherits
- D) uses

<details><summary>Answer&lt;/summary&gt;B) implements&lt;/details&gt;

**Q4:** What is the purpose of namespaces in PHP?
- A) Speed optimization
- B) Organize code and prevent class name collisions
- C) Database connection
- D) User authentication

<details><summary>Answer&lt;/summary&gt;B) Organize code and prevent class name collisions&lt;/details&gt;

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key PHP concepts for Laravel development.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Variables & Types | Store and manipulate data | Dynamic typing with type declarations |
| Arrays | Ordered data collections | Indexed + associative + array functions |
| OOP | Code organization and reuse | Classes, inheritance, interfaces, traits |
| Namespaces | Code organization and collision prevention | PSR-4 autoloading |
| Composer | Dependency management | require, autoload, scripts |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for PHP fundamentals.

| Topic | Key Point |
|-------|-----------|
| PHP Syntax | <?php, echo, semicolons, variables start with $ |
| Data Types | int, float, string, bool, array, object, null |
| OOP Keywords | class, extends, implements, abstract, final, trait |
| PHP 8.3 | readonly, enums, json_validate, override attribute |
| Composer | composer init, require, install, update, dump-autoload |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Type System | Code reliability | Strict vs dynamic typing |
| OOP | Application architecture | Inheritance vs composition |
| Namespaces | Code organization | Structure vs verbosity |
| Composer | Dependency management | Reuse vs dependency conflicts |
| Error Handling | Application stability | Exceptions vs return codes |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your PHP fundamentals knowledge.

**Q1:** How do you declare a variable in PHP?
- A) var name
- B) $name
- C) let name
- D) const name

<details><summary>Answer&lt;/summary&gt;B) $name&lt;/details&gt;

**Q2:** What does Composer's require command do?
- A) Updates all packages
- B) Adds a package as a dependency
- C) Removes a package
- D) Lists all packages

<details><summary>Answer&lt;/summary&gt;B) Adds a package as a dependency&lt;/details&gt;

**Q3:** Which keyword is used to implement an interface?
- A) extends
- B) implements
- C) inherits
- D) uses

<details><summary>Answer&lt;/summary&gt;B) implements&lt;/details&gt;

**Q4:** What is the purpose of namespaces in PHP?
- A) Speed optimization
- B) Organize code and prevent class name collisions
- C) Database connection
- D) User authentication

<details><summary>Answer&lt;/summary&gt;B) Organize code and prevent class name collisions&lt;/details&gt;

---

## Concept Comparison
> **One-Sentence Takeaway:** Compare key PHP concepts for Laravel development.

| Concept | Purpose | Key Feature |
|---------|---------|-------------|
| Variables & Types | Store and manipulate data | Dynamic typing with type declarations |
| Arrays | Ordered data collections | Indexed + associative + array functions |
| OOP | Code organization and reuse | Classes, inheritance, interfaces, traits |
| Namespaces | Code organization and collision prevention | PSR-4 autoloading |
| Composer | Dependency management | require, autoload, scripts |

---

## Quick Reference
> **One-Sentence Takeaway:** Quick reference for PHP fundamentals.

| Topic | Key Point |
|-------|-----------|
| PHP Syntax | <?php, echo, semicolons, variables start with $ |
| Data Types | int, float, string, bool, array, object, null |
| OOP Keywords | class, extends, implements, abstract, final, trait |
| PHP 8.3 | readonly, enums, json_validate, override attribute |
| Composer | composer init, require, install, update, dump-autoload |

---

## Cross-Application Matrix

| Concept | Application Context | Trade-Off |
|---------|--------------------|-----------|
| Type System | Code reliability | Strict vs dynamic typing |
| OOP | Application architecture | Inheritance vs composition |
| Namespaces | Code organization | Structure vs verbosity |
| Composer | Dependency management | Reuse vs dependency conflicts |
| Error Handling | Application stability | Exceptions vs return codes |

---

## Chapter Quiz
> **One-Sentence Takeaway:** Test your PHP fundamentals knowledge.

**Q1:** How do you declare a variable in PHP?
- A) var name
- B) $name
- C) let name
- D) const name

<details><summary>Answer&lt;/summary&gt;B) $name&lt;/details&gt;

**Q2:** What does Composer's require command do?
- A) Updates all packages
- B) Adds a package as a dependency
- C) Removes a package
- D) Lists all packages

<details><summary>Answer&lt;/summary&gt;B) Adds a package as a dependency&lt;/details&gt;

**Q3:** Which keyword is used to implement an interface?
- A) extends
- B) implements
- C) inherits
- D) uses

<details><summary>Answer&lt;/summary&gt;B) implements&lt;/details&gt;

**Q4:** What is the purpose of namespaces in PHP?
- A) Speed optimization
- B) Organize code and prevent class name collisions
- C) Database connection
- D) User authentication

<details><summary>Answer&lt;/summary&gt;B) Organize code and prevent class name collisions&lt;/details&gt;

## Summary

- PHP uses `$`-prefixed variables, supports 8 primitive types, and performs implicit type juggling; `declare(strict_types=1)` disables coercion for function calls within that file.
- Arrays are ordered maps supporting both integer and string keys; functional helpers like `array_map`, `array_filter`, and `array_reduce` enable declarative data processing without explicit loops.
- Functions support optional parameters, variadic arguments with `...`, arrow functions with implicit by-value capture, and named arguments that skip defaults in any order.
- OOP in PHP includes constructor property promotion (PHP 8.0+), abstract classes, interfaces (with multiple implementation), and traits for horizontal method reuse with conflict resolution via `insteadof` and `as`.
- Namespaces map to PSR-4 directory structures using Composer autoloading; `use` statements import classes, functions, and constants with optional aliasing.
- Exception handling uses `try`/`catch`/`finally` blocks, custom exception classes extending `\RuntimeException` or `\Exception`, and `set_error_handler` to convert PHP errors to `ErrorException`.
- Composer manages dependencies and autoloading via `composer.json`; the `composer.lock` file ensures deterministic installs; `composer dump-autoload -o` optimizes class loading for production.
- PHP 8.3 features include `json_validate` for efficient JSON validation, dynamic class constant fetch with `ClassName::{$name}`, readonly classes (PHP 8.2+), backed and pure enums, and typed properties.
- Design patterns like Factory (object creation delegation), Repository (data access abstraction), Strategy (interchangeable algorithms), and Singleton (single instance control) are foundational to Laravel's architecture and should be used where appropriate, not as dogma.

---

## Exercises

### Review Questions

1. What is the difference between `==` and `===` in PHP? Provide an example where they produce different results.

2. How does `declare(strict_types=1)` change PHP's behavior? Why does it only affect the file where it appears?

3. What does `array_reduce` do? Explain its signature and provide a use case where it is more appropriate than a foreach loop.

4. Explain the difference between an abstract class and an interface. When would you choose one over the other?

5. How do traits resolve method name conflicts? What keywords handle conflict resolution?

6. What is PSR-4 autoloading and how does Composer implement it? What is the relationship between namespace `App\Models\User` and the file path where the class is stored?

7. Describe the difference between `Exception` and `\Throwable`. Why might you catch `\Throwable` instead of `\Exception`?

8. What is the difference between `composer install` and `composer update`? When should each be used?

9. How does `json_validate()` in PHP 8.3 improve upon `json_decode()` followed by `json_last_error()`?

10. What is the Strategy pattern? Name a real-world Laravel scenario where the Strategy pattern would be appropriate.

### Application Problems

1. **Strict Type Calculator**: Write a class `Calculator` with methods `add`, `subtract`, `multiply`, and `divide`. Each method must use strict type declarations (int parameters, return types). The `divide` method must throw a custom `DivisionByZeroException` when the divisor is zero. Include both an interface `CalculatorInterface` and an implementation.

2. **Functional Array Processing**: Given an array of associative arrays representing products Ã¢â‚¬â€ each with `name`, `price`, `category`, and `in_stock` (boolean) Ã¢â‚¬â€ write PHP code that:
   - Filters to only in-stock items
   - Applies a 10% discount to the price
   - Groups the resulting items by category
   - Returns the average price per category
   - Use only `array_filter`, `array_map`, `array_reduce`, and `array_map` Ã¢â‚¬â€ no foreach loops.

3. **Namespace and Autoloading Setup**: Create the complete file structure for a PHP project with:
   - Namespace `App\Domain\Models` containing a `Customer` class with constructor property promotion for `name`, `email`, and `loyaltyPoints`
   - Namespace `App\Domain\Repositories` containing a `CustomerRepository` interface and `InMemoryCustomerRepository` implementation
   - A `composer.json` with proper PSR-4 autoloading
   - Write the `composer.json` and all PHP files with complete implementations.

4. **Enum-backed State Machine**: Implement an order workflow using a PHP backed enum `OrderState` with states: `Pending`, `Confirmed`, `Processing`, `Shipped`, `Delivered`, `Cancelled`, `Returned`. Each state must define which transitions are valid. Include a `canTransitionTo(OrderState $target): bool` method and a `transition(OrderState $target): OrderState` method that throws an `InvalidTransitionException` on invalid transitions.

5. **Custom Exception Hierarchy**: Design and implement a validation exception hierarchy for a user registration system:
   - Base `ValidationException` extending `\InvalidArgumentException`
   - `EmailAlreadyExistsException` with the conflicting email stored
   - `WeakPasswordException` listing which password rules were violated
   - A `ValidationResult` class that collects multiple exceptions and throws them as a single `ValidationException`
   - Demonstrate usage with a complete try/catch example.

### Challenge Problems

1. **Typed Collection Class**: Implement a generic `Collection` class in PHP that:
   - Stores elements of a single type (enforced at runtime via `assert` or type checks)
   - Supports `map(callable): Collection`, `filter(callable): Collection`, `reduce(callable, mixed): mixed`
   - Supports `first(): mixed`, `last(): mixed`, `count(): int`, `toArray(): array`
   - Implements `ArrayAccess`, `IteratorAggregate`, and `Countable`
   - Has static factory methods `fromArray(array $items): Collection` and `range(int $from, int $to): Collection`
   - Provide a complete implementation with documentation and a demonstration script that exercises every method.

2. **Repository Pattern with Multiple Storage Backends**: Build a complete `ProductRepository` system with:
   - A `Product` readonly class with `id`, `name`, `price`, `sku`, and `createdAt`
   - `ProductRepositoryInterface` with `find(int $id): ?Product`, `findBySku(string $sku): ?Product`, `all(): array`, `save(Product): Product`, `delete(int $id): bool`, `search(string $query): array`
   - Three implementations: `InMemoryProductRepository` (testing), `JsonFileProductRepository` (persists to a JSON file), `CachedProductRepository` (decorator wrapping another repository with an in-memory cache)
   - A `ProductService` that uses the repository with a `batchImport(array $products): array` method returning count of successful and failed imports
   - Tests demonstrating switching between all three repository implementations without changing service code.

3. **Strategy + Factory + Repository Integration**: Build a complete notification system:
   - `NotificationChannel` interface with `send(string $recipient, string $subject, string $body): NotificationResult`
   - `EmailChannel`, `SMSChannel`, `PushNotificationChannel` implementations (simulated)
   - `NotificationFactory` that creates the appropriate channel based on configuration
   - `NotificationRepository` interface with implementations for storing notification history
   - `NotificationService` that sends notifications, stores results, and implements retry logic (up to 3 retries with exponential backoff)
   - Use the Strategy pattern for selecting the channel, Factory for creating channels, Repository for storage
   - Include complete error handling with custom exceptions for delivery failures, rate limiting, and invalid recipients

