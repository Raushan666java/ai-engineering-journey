# Control Structures in PHP

Control structures allow you to control the flow of your program's execution based on different conditions.

## Conditional Statements

### if, else, elseif/else if

The `if` statement is one of the most fundamental control structures. It executes code blocks based on conditions.

```php
<?php
$age = 25;

// Basic if statement
if ($age >= 18) {
    echo "You are an adult.";
}

// if-else statement
if ($age >= 18) {
    echo "You are an adult.";
} else {
    echo "You are a minor.";
}

// if-elseif-else statement
if ($age < 13) {
    echo "You are a child.";
} elseif ($age < 18) {
    echo "You are a teenager.";
} else {
    echo "You are an adult.";
}

// Multiple conditions
if ($age >= 18 && $age <= 65) {
    echo "You are of working age.";
}

// Nested if statements
if ($age >= 18) {
    if ($age >= 65) {
        echo "You are a senior citizen.";
    } else {
        echo "You are an adult, but not a senior citizen.";
    }
}
?>
```

### Alternative Syntax

PHP provides an alternative syntax for control structures, which is especially useful in templates:

```php
<?php if ($age >= 18): ?>
    <p>You are an adult.</p>
<?php else: ?>
    <p>You are a minor.</p>
<?php endif; ?>

<?php if ($age < 13): ?>
    <p>You are a child.</p>
<?php elseif ($age < 18): ?>
    <p>You are a teenager.</p>
<?php else: ?>
    <p>You are an adult.</p>
<?php endif; ?>
```

### Ternary Operator

The ternary operator provides a shorthand way to write simple if-else statements:

```php
<?php
// Standard if-else
$status = '';
if ($age >= 18) {
    $status = 'adult';
} else {
    $status = 'minor';
}

// Ternary operator equivalent
$status = ($age >= 18) ? 'adult' : 'minor';

// Nested ternary (use with caution for readability)
$category = ($age < 13) ? 'child' : (($age < 18) ? 'teenager' : 'adult');

// Short ternary (Elvis operator)
$name = $username ?: 'Guest'; // Equivalent to: $username ? $username : 'Guest'
?>
```

### Null Coalescing Operator (PHP 7+)

The null coalescing operator (`??`) returns the first operand if it exists and is not null, otherwise it returns the second operand:

```php
<?php
// Traditional way
$username = isset($_GET['user']) ? $_GET['user'] : 'Guest';

// Null coalescing operator
$username = $_GET['user'] ?? 'Guest';

// Chained null coalescing
$username = $_GET['user'] ?? $_POST['user'] ?? 'Guest';
?>
```

### Nullsafe Operator (PHP 8+)

The nullsafe operator (`?->`) allows you to safely access properties and methods on objects that might be null:

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

### Switch Statement

The `switch` statement is used when you need to compare a variable against many different values:

```php
<?php
$dayOfWeek = date('l');

switch ($dayOfWeek) {
    case 'Monday':
        echo "Start of the work week.";
        break;
    case 'Tuesday':
    case 'Wednesday':
    case 'Thursday':
        echo "Middle of the work week.";
        break;
    case 'Friday':
        echo "End of the work week.";
        break;
    case 'Saturday':
    case 'Sunday':
        echo "Weekend!";
        break;
    default:
        echo "Invalid day.";
        break;
}
?>
```

Important notes about `switch`:
- The `break` statement is needed to exit the switch block, otherwise execution will continue to the next case.
- Multiple cases can share the same code block.
- The `default` case is executed when no other cases match.

### Match Expression (PHP 8+)

The `match` expression is similar to `switch` but with some key differences:
- It returns a value
- It uses strict comparison (`===`)
- It doesn't require `break` statements
- It can combine multiple conditions

```php
<?php
$dayOfWeek = date('l');

$message = match ($dayOfWeek) {
    'Monday' => "Start of the work week.",
    'Tuesday', 'Wednesday', 'Thursday' => "Middle of the work week.",
    'Friday' => "End of the work week.",
    'Saturday', 'Sunday' => "Weekend!",
    default => "Invalid day.",
};

echo $message;

// Match with expressions
$age = 25;
$category = match (true) {
    $age < 13 => 'child',
    $age < 18 => 'teenager',
    $age < 65 => 'adult',
    default => 'senior',
};
?>
```

## Loops

### for Loop

The `for` loop is used when you know in advance how many times you want to execute a block of code:

```php
<?php
// Basic for loop
for ($i = 0; $i < 5; $i++) {
    echo "Iteration: $i <br>";
}

// Multiple expressions
for ($i = 0, $j = 10; $i < 10; $i++, $j--) {
    echo "i = $i, j = $j <br>";
}

// Nested for loops
for ($i = 1; $i <= 5; $i++) {
    for ($j = 1; $j <= $i; $j++) {
        echo "*";
    }
    echo "<br>";
}
?>
```

### while Loop

The `while` loop executes a block of code as long as the specified condition is true:

```php
<?php
// Basic while loop
$i = 0;
while ($i < 5) {
    echo "Iteration: $i <br>";
    $i++;
}

// Reading file line by line
$file = fopen("data.txt", "r");
while (!feof($file)) {
    $line = fgets($file);
    echo $line . "<br>";
}
fclose($file);
?>
```

### do-while Loop

The `do-while` loop is similar to the `while` loop, but it always executes the block of code at least once:

```php
<?php
// Basic do-while loop
$i = 0;
do {
    echo "Iteration: $i <br>";
    $i++;
} while ($i < 5);

// Even if condition is initially false, code runs once
$i = 10;
do {
    echo "This will be printed once even though i = 10.";
} while ($i < 5);
?>
```

### foreach Loop

The `foreach` loop is specifically designed for iterating over arrays and objects:

```php
<?php
// Indexed array
$colors = ["red", "green", "blue"];
foreach ($colors as $color) {
    echo "Color: $color <br>";
}

// Associative array with key and value
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];
foreach ($person as $key => $value) {
    echo "$key: $value <br>";
}

// Modifying values during iteration
$numbers = [1, 2, 3, 4, 5];
foreach ($numbers as &$number) {
    $number *= 2;
}
unset($number); // Unset the reference after the loop

// Iterating over objects
$user = new stdClass();
$user->name = "John";
$user->email = "john@example.com";
foreach ($user as $property => $value) {
    echo "$property: $value <br>";
}
?>
```

### Alternative Syntax for Loops

Like conditional statements, loops also have an alternative syntax:

```php
<?php
// for loop
for ($i = 0; $i < 5; $i++):
    echo "Iteration: $i <br>";
endfor;

// while loop
$i = 0;
while ($i < 5):
    echo "Iteration: $i <br>";
    $i++;
endwhile;

// foreach loop
$colors = ["red", "green", "blue"];
foreach ($colors as $color):
    echo "Color: $color <br>";
endforeach;
?>
```

## Control Flow

### break

The `break` statement ends the execution of the current loop or switch structure:

```php
<?php
// Break in a for loop
for ($i = 0; $i < 10; $i++) {
    if ($i == 5) {
        break; // Exit the loop when i equals 5
    }
    echo "Iteration: $i <br>";
}

// Break in nested loops
for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        if ($j == 2) {
            break; // Breaks only the inner loop
        }
        echo "i = $i, j = $j <br>";
    }
}

// Break with numeric argument
for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        if ($j == 2) {
            break 2; // Breaks both loops
        }
        echo "i = $i, j = $j <br>";
    }
}
?>
```

### continue

The `continue` statement skips the rest of the current loop iteration and continues with the next iteration:

```php
<?php
// Skip even numbers
for ($i = 0; $i < 10; $i++) {
    if ($i % 2 == 0) {
        continue; // Skip the rest of the loop body for even numbers
    }
    echo "Odd number: $i <br>";
}

// continue with numeric argument
for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        if ($j == 2) {
            continue 2; // Skip to the next iteration of the outer loop
        }
        echo "i = $i, j = $j <br>";
    }
}
?>
```

### return

The `return` statement ends the execution of a function and returns a value:

```php
<?php
function isEven($number) {
    if ($number % 2 == 0) {
        return true;
    }
    return false;
}

// Early return pattern
function getUserRole($userId) {
    if (!$userId) {
        return 'guest';
    }
    
    $user = findUser($userId);
    if (!$user) {
        return 'unknown';
    }
    
    return $user->role;
}
?>
```

### goto (rarely used)

The `goto` operator can be used to jump to another section in the program:

```php
<?php
// Simple goto example
goto a;
echo "This will be skipped";

a:
echo "This is where the goto jumps to";

// Using goto to break out of nested loops
for ($i = 0; $i < 5; $i++) {
    for ($j = 0; $j < 5; $j++) {
        if ($i == 2 && $j == 3) {
            goto end_loops;
        }
        echo "i = $i, j = $j <br>";
    }
}
end_loops:
echo "Loops ended";
?>
```

Note: `goto` is generally discouraged as it can make code harder to read and maintain.

### include, require, include_once, require_once

These statements are used to include and evaluate files:

```php
<?php
// include - continues execution even if file is not found (warning)
include 'header.php';

// require - stops execution if file is not found (fatal error)
require 'config.php';

// include_once - includes the file only if it hasn't been included before
include_once 'functions.php';

// require_once - requires the file only if it hasn't been included before
require_once 'database.php';

// Dynamic includes
$theme = 'dark';
include "themes/$theme.php";
?>
```

## Best Practices

1. **Use meaningful conditions** that are easy to understand
2. **Avoid deeply nested conditions** - consider refactoring with early returns or separate functions
3. **Be careful with loop variables** - always initialize them properly
4. **Use foreach** when iterating over arrays and objects
5. **Always include break statements** in switch cases unless fall-through is intentional
6. **Prefer match over switch** in PHP 8+ for simple comparisons
7. **Use alternative syntax** in template files for better readability
8. **Be cautious with continue/break** in complex loops
9. **Avoid goto** - use structured programming constructs instead
10. **Use require_once** for files that define functions or classes to prevent redefinition errors

## Common Patterns

### Guard Clauses

```php
<?php
// Without guard clauses
function processUser($user) {
    if ($user) {
        if ($user->isActive()) {
            if ($user->hasPermission('admin')) {
                // Process admin user
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return false;
    }
}

// With guard clauses
function processUser($user) {
    if (!$user) {
        return false;
    }
    
    if (!$user->isActive()) {
        return false;
    }
    
    if (!$user->hasPermission('admin')) {
        return false;
    }
    
    // Process admin user
    return true;
}
?>
```

### State Machine

```php
<?php
function processOrder($order) {
    switch ($order->status) {
        case 'new':
            validateOrder($order);
            $order->status = 'validated';
            break;
            
        case 'validated':
            processPayment($order);
            $order->status = 'paid';
            break;
            
        case 'paid':
            shipOrder($order);
            $order->status = 'shipped';
            break;
            
        case 'shipped':
            completeOrder($order);
            $order->status = 'completed';
            break;
            
        case 'completed':
            // Order already completed
            break;
            
        default:
            throw new Exception("Invalid order status: {$order->status}");
    }
    
    $order->save();
}
?>
```

### Null Object Pattern

```php
<?php
// Without Null Object
function displayUser($userId) {
    $user = findUser($userId);
    
    if ($user === null) {
        echo "Guest";
        echo "No profile available";
        echo "No permissions";
    } else {
        echo $user->name;
        echo $user->profile;
        echo $user->permissions;
    }
}

// With Null Object
class NullUser {
    public $name = "Guest";
    public $profile = "No profile available";
    public $permissions = "No permissions";
}

function displayUser($userId) {
    $user = findUser($userId) ?? new NullUser();
    
    echo $user->name;
    echo $user->profile;
    echo $user->permissions;
}
?>
```