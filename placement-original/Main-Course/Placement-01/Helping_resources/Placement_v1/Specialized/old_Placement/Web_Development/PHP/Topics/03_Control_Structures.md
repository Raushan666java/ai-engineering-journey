# 3. Control Structures

## Conditional Statements

### if, else, elseif/else if
```php
if ($condition) {
    // code to execute if condition is true
} elseif ($another_condition) {
    // code to execute if another_condition is true
} else {
    // code to execute if all conditions are false
}
```

### Alternative Syntax (useful in templates)
```php
if ($condition):
    // code
elseif ($another_condition):
    // code
else:
    // code
endif;
```

### Ternary Operator
```php
$result = ($condition) ? 'true value' : 'false value';
```

### Null Coalescing Operator (PHP 7+)
```php
$username = $_GET['user'] ?? 'nobody'; // Returns 'nobody' if $_GET['user'] doesn't exist
```

### Nullsafe Operator (PHP 8+)
```php
$country = $session?->user?->getAddress()?->country; // No error if any is null
```

### Switch Statement
```php
switch ($variable) {
    case 'value1':
        // code
        break;
    case 'value2':
    case 'value3': // Multiple cases
        // code
        break;
    default:
        // default code
}
```

### Match Expression (PHP 8+)
```php
$result = match ($variable) {
    'value1' => 'return this if value1',
    'value2', 'value3' => 'return this if value2 or value3',
    default => 'return this if no match'
};
```

## Loops

### for Loop
```php
for ($i = 0; $i < 10; $i++) {
    // code to execute
}
```

### while Loop
```php
while ($condition) {
    // code to execute
    // must modify condition to avoid infinite loop
}
```

### do-while Loop
```php
do {
    // code to execute at least once
} while ($condition);
```

### foreach Loop (for arrays and objects)
```php
// For indexed/associative arrays
foreach ($array as $value) {
    // use $value
}

// With key and value
foreach ($array as $key => $value) {
    // use $key and $value
}
```

### Alternative Syntax for Loops
```php
for ($i = 0; $i < 10; $i++):
    // code
endfor;

while ($condition):
    // code
endwhile;

foreach ($array as $value):
    // code
endforeach;
```

## Control Flow

### break
- Exits the current loop or switch statement
- Optional numeric argument specifies how many nested structures to break out of
```php
break; // Exit current loop
break 2; // Exit current loop and one level up
```

### continue
- Skips the rest of the current loop iteration
- Optional numeric argument specifies how many levels to skip
```php
continue; // Skip to next iteration
continue 2; // Skip to next iteration of outer loop
```

### return
- Exits a function and returns a value
```php
return $value;
```

### goto (rarely used)
- Jumps to a label within the same file/function
```php
goto label;
// ...
label:
// code
```

### include, require
- Control flow between files
```php
include 'file.php'; // Warning on failure
require 'file.php'; // Fatal error on failure
include_once 'file.php'; // Include only if not already included
require_once 'file.php'; // Require only if not already included
```

## Best Learning Methods
- Write small programs using different control structures
- Practice nested conditions and loops
- Compare performance of different loop types
- Debug and trace code execution
- Refactor complex conditions to improve readability
- Reference: https://www.php.net/manual/en/language.control-structures.php
