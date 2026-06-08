# PHP Operators

Operators in PHP are symbols that tell the interpreter to perform specific mathematical, relational, or logical operations and produce a result.

## Arithmetic Operators

Arithmetic operators are used to perform common mathematical operations.

```php
<?php
$a = 10;
$b = 3;

// Addition
echo $a + $b;  // 13

// Subtraction
echo $a - $b;  // 7

// Multiplication
echo $a * $b;  // 30

// Division
echo $a / $b;  // 3.3333333333333

// Modulus (remainder)
echo $a % $b;  // 1

// Exponentiation (PHP 5.6+)
echo $a ** $b; // 1000 (10^3)

// Negation
echo -$a;      // -10
?>
```

## Assignment Operators

Assignment operators are used to assign values to variables.

```php
<?php
// Basic assignment
$a = 10;

// Combined assignment operators
$a += 5;    // Same as: $a = $a + 5;    Result: 15
$a -= 3;    // Same as: $a = $a - 3;    Result: 12
$a *= 2;    // Same as: $a = $a * 2;    Result: 24
$a /= 4;    // Same as: $a = $a / 4;    Result: 6
$a %= 4;    // Same as: $a = $a % 4;    Result: 2
$a **= 3;   // Same as: $a = $a ** 3;   Result: 8

// String concatenation assignment
$str = "Hello";
$str .= " World"; // Same as: $str = $str . " World";  Result: "Hello World"
?>
```

## Comparison Operators

Comparison operators are used to compare two values.

```php
<?php
$a = 10;
$b = "10";
$c = 20;

// Equal (==): Returns true if values are equal
var_dump($a == $b);  // bool(true) - values are equal, type is ignored

// Identical (===): Returns true if values and types are equal
var_dump($a === $b); // bool(false) - values are equal but types are different

// Not equal (!=, <>): Returns true if values are not equal
var_dump($a != $c);  // bool(true)
var_dump($a <> $c);  // bool(true) - alternative syntax

// Not identical (!==): Returns true if values or types are not equal
var_dump($a !== $b); // bool(true)

// Greater than (>): Returns true if left value is greater than right value
var_dump($c > $a);   // bool(true)

// Less than (<): Returns true if left value is less than right value
var_dump($a < $c);   // bool(true)

// Greater than or equal to (>=)
var_dump($a >= 10);  // bool(true)

// Less than or equal to (<=)
var_dump($a <= 10);  // bool(true)

// Spaceship operator (<=>): Returns -1, 0, or 1 (PHP 7+)
// -1 if left is less than right
// 0 if values are equal
// 1 if left is greater than right
var_dump($a <=> $c); // int(-1)
var_dump($a <=> $b); // int(0)
var_dump($c <=> $a); // int(1)
?>
```

## Logical Operators

Logical operators are used to combine conditional statements.

```php
<?php
$a = true;
$b = false;

// And (&&, and): Returns true if both operands are true
var_dump($a && $b);  // bool(false)
var_dump($a and $b); // bool(false) - alternative syntax with lower precedence

// Or (||, or): Returns true if either operand is true
var_dump($a || $b);  // bool(true)
var_dump($a or $b);  // bool(true) - alternative syntax with lower precedence

// Not (!): Returns true if the operand is false
var_dump(!$a);       // bool(false)

// Xor: Returns true if either operand is true, but not both
var_dump($a xor $b); // bool(true)

// Short-circuit evaluation
$x = null;
$result = $x !== null && $x->property > 0; // No error because of short-circuit
?>
```

## String Operators

PHP has two operators dedicated to strings.

```php
<?php
// Concatenation (.)
$greeting = "Hello" . " " . "World"; // "Hello World"

// Concatenation assignment (.=)
$greeting = "Hello";
$greeting .= " World"; // "Hello World"
?>
```

## Array Operators

Array operators are used to compare arrays and work with array values.

```php
<?php
$a = ["apple" => "red", "banana" => "yellow"];
$b = ["orange" => "orange", "grape" => "purple"];
$c = ["apple" => "green", "pear" => "green"];

// Union (+): Adds elements from right operand to left operand without overwriting
$result = $a + $b;
print_r($result);
// Array ( [apple] => red [banana] => yellow [orange] => orange [grape] => purple )

// Equality (==): Returns true if arrays have same key/value pairs
var_dump($a == $c); // bool(false) - values are different

// Identity (===): Returns true if arrays have same key/value pairs in same order and types
var_dump($a === $c); // bool(false)

// Inequality (!=, <>): Returns true if arrays are not equal
var_dump($a != $c); // bool(true)

// Non-identity (!==): Returns true if arrays are not identical
var_dump($a !== $c); // bool(true)
?>
```

## Increment/Decrement Operators

Increment and decrement operators are used to increase or decrease the value of a variable by one.

```php
<?php
$a = 5;

// Pre-increment: Increments $a by one, then returns $a
$b = ++$a; // $a = 6, $b = 6

// Post-increment: Returns $a, then increments $a by one
$a = 5;
$b = $a++; // $a = 6, $b = 5

// Pre-decrement: Decrements $a by one, then returns $a
$a = 5;
$b = --$a; // $a = 4, $b = 4

// Post-decrement: Returns $a, then decrements $a by one
$a = 5;
$b = $a--; // $a = 4, $b = 5

// Behavior with strings
$str = 'a';
echo ++$str; // 'b' - increments to next character
$str = 'z';
echo ++$str; // 'aa' - wraps around

$str = '9';
echo ++$str; // '10' - numeric strings behave as expected
?>
```

## Bitwise Operators

Bitwise operators manipulate individual bits within integers.

```php
<?php
$a = 5;  // Binary: 0101
$b = 3;  // Binary: 0011

// And (&): Sets each bit to 1 if both bits are 1
echo $a & $b; // 1 (Binary: 0001)

// Or (|): Sets each bit to 1 if either bit is 1
echo $a | $b; // 7 (Binary: 0111)

// Xor (^): Sets each bit to 1 if only one of the bits is 1
echo $a ^ $b; // 6 (Binary: 0110)

// Not (~): Inverts all the bits
echo ~$a; // -6 (Binary: ...1010)

// Shift left (<<): Shifts left by the number of bits specified
echo $a << 1; // 10 (Binary: 1010)

// Shift right (>>): Shifts right by the number of bits specified
echo $a >> 1; // 2 (Binary: 0010)
?>
```

## Error Control Operator

The error control operator suppresses error messages that may be generated by an expression.

```php
<?php
// Without error control operator
// $file = file_get_contents('non_existent_file.txt'); // Generates a warning

// With error control operator
$file = @file_get_contents('non_existent_file.txt'); // No warning displayed

// Note: Using @ is generally discouraged as it can hide important errors
?>
```

## Execution Operator

The execution operator (backticks) executes the contents as a shell command and returns the output.

```php
<?php
// Same as shell_exec() function
$output = `ls -la`;
echo $output;

// Security warning: Never use with user-supplied data without proper validation
?>
```

## Ternary Operator

The ternary operator is a shorthand for the if-else statement.

```php
<?php
// Syntax: condition ? value_if_true : value_if_false

$age = 20;
$status = ($age >= 18) ? 'adult' : 'minor';
echo $status; // "adult"

// Shorthand ternary (PHP 5.3+)
// Syntax: condition ?: value_if_false
// Returns the first operand if it evaluates to true, otherwise returns the second operand
$username = $_GET['user'] ?: 'Guest';

// Nested ternary (use with caution for readability)
$result = ($a > $b) ? 'a is greater' : (($a < $b) ? 'a is less' : 'a equals b');
?>
```

## Null Coalescing Operator

The null coalescing operator (PHP 7+) returns the first operand if it exists and is not null, otherwise it returns the second operand.

```php
<?php
// Without null coalescing
$username = isset($_GET['user']) ? $_GET['user'] : 'Guest';

// With null coalescing
$username = $_GET['user'] ?? 'Guest';

// Chaining
$username = $_GET['user'] ?? $_POST['user'] ?? $_COOKIE['user'] ?? 'Guest';

// Null coalescing assignment operator (PHP 7.4+)
$data['key'] ??= 'default'; // Assigns 'default' to $data['key'] if it doesn't exist or is null
?>
```

## Nullsafe Operator

The nullsafe operator (PHP 8+) allows you to safely access properties and methods on objects that might be null.

```php
<?php
// Traditional way
$country = null;
if ($user !== null) {
    $address = $user->getAddress();
    if ($address !== null) {
        $country = $address->country;
    }
}

// With nullsafe operator
$country = $user?->getAddress()?->country;

// Can be combined with null coalescing
$country = $user?->getAddress()?->country ?? 'Unknown';
?>
```

## Operator Precedence

Operators have different precedence levels which determine the order of operations.

```php
<?php
// Multiplication has higher precedence than addition
echo 5 + 3 * 2; // 11, not 16

// Parentheses can be used to change the order
echo (5 + 3) * 2; // 16

// Assignment has lower precedence than most operators
$a = 5;
$b = $a + 10; // $a is still 5, $b is 15

// Logical operators precedence: ! has highest, then &&, then ||
$result = true || false && false; // true (evaluates as: true || (false && false))
$result = (true || false) && false; // false
?>
```

## Type Operators

PHP has special operators for working with types.

```php
<?php
// instanceof: Checks if an object is an instance of a class
class MyClass {}
$obj = new MyClass();
var_dump($obj instanceof MyClass); // bool(true)

// Type casting operators
$str = "123";
$num = (int)$str; // Cast to integer
$bool = (bool)$str; // Cast to boolean
$float = (float)$str; // Cast to float
$arr = (array)$str; // Cast to array
$obj = (object)$str; // Cast to object
?>
```

## Best Practices

1. **Use parentheses for clarity**: Even when not strictly necessary, parentheses can make your code more readable.
2. **Be careful with type juggling**: PHP's loose typing can lead to unexpected results with comparison operators.
3. **Prefer strict comparison (`===`, `!==`)**: To avoid type juggling issues.
4. **Avoid the error control operator (`@`)**: It can hide important errors and make debugging difficult.
5. **Use the null coalescing operator instead of ternary with isset()**: It's more concise and readable.
6. **Be cautious with complex nested ternary expressions**: They can be hard to read and maintain.
7. **Remember operator precedence**: When in doubt, use parentheses to make the order of operations explicit.
8. **Avoid using the execution operator with user input**: It can lead to security vulnerabilities.