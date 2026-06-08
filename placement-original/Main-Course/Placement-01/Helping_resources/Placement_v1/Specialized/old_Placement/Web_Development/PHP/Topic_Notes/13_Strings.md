# PHP Strings

Strings in PHP are sequences of characters that can be manipulated in various ways. PHP provides a rich set of functions and operators for working with strings.

## String Creation

### Single and Double Quotes

```php
<?php
// Single quotes
$name = 'John';
$message = 'Hello, $name'; // Variables are not parsed in single quotes
echo $message; // Output: Hello, $name

// Double quotes
$name = "John";
$message = "Hello, $name"; // Variables are parsed in double quotes
echo $message; // Output: Hello, John

// Escaping characters in single quotes
$text = 'It\'s a beautiful day'; // Only \ and ' need to be escaped in single quotes
echo $text; // Output: It's a beautiful day

// Escaping characters in double quotes
$path = "C:\\Program Files\\PHP"; // More characters need escaping in double quotes
echo $path; // Output: C:\Program Files\PHP

// Common escape sequences in double quotes
$text = "First line\nSecond line"; // \n for newline
$text = "Name\tAge"; // \t for tab
$text = "She said, \"Hello!\""; // \" for double quote
$text = "Cost: \$10"; // \$ for dollar sign
?>
```

### Heredoc and Nowdoc Syntax

```php
<?php
// Heredoc syntax - works like double quotes
$name = "John";
$message = <<<EOT
Hello, $name!
This is a multi-line string.
No need to escape quotes: "example" or 'example'
EOT;

echo $message;
/* Output:
Hello, John!
This is a multi-line string.
No need to escape quotes: "example" or 'example'
*/

// Nowdoc syntax - works like single quotes
$name = "John";
$message = <<<'EOT'
Hello, $name!
This is a multi-line string.
Variables are not parsed.
EOT;

echo $message;
/* Output:
Hello, $name!
This is a multi-line string.
Variables are not parsed.
*/

// Indented heredoc/nowdoc (PHP 7.3+)
$html = <<<HTML
    <div>
        <h1>Title</h1>
        <p>Paragraph</p>
    </div>
    HTML;
?>
```

## String Operations

### Concatenation

```php
<?php
// Using the concatenation operator (.)
$firstName = "John";
$lastName = "Doe";
$fullName = $firstName . " " . $lastName;
echo $fullName; // Output: John Doe

// Using the concatenation assignment operator (.=)
$text = "Hello";
$text .= ", ";
$text .= "World!";
echo $text; // Output: Hello, World!

// Concatenating different types
$message = "You have " . 5 . " notifications.";
echo $message; // Output: You have 5 notifications.

// PHP automatically converts numbers to strings when concatenating
$result = "The answer is " . 42;
echo $result; // Output: The answer is 42
?>
```

### String Length

```php
<?php
// Using strlen() - returns the number of bytes
$text = "Hello";
echo strlen($text); // Output: 5

// For multibyte strings (e.g., UTF-8)
$text = "Привет"; // Russian for "Hello"
echo strlen($text); // Output: 12 (bytes, not characters)
echo mb_strlen($text, 'UTF-8'); // Output: 6 (actual characters)
?>
```

### Accessing Characters

```php
<?php
// Accessing individual characters using array syntax
$text = "Hello";
echo $text[0]; // Output: H
echo $text[1]; // Output: e

// Accessing with negative indices (PHP 7.1+)
echo $text[-1]; // Output: o (last character)
echo $text[-2]; // Output: l (second-to-last character)

// Modifying characters
$text[0] = "J";
echo $text; // Output: Jello

// For multibyte strings
$text = "Привет";
echo mb_substr($text, 0, 1, 'UTF-8'); // Output: П
?>
```

### Comparing Strings

```php
<?php
// Case-sensitive comparison
$a = "hello";
$b = "Hello";
var_dump($a == $b);  // bool(false)
var_dump($a === $b); // bool(false)

// Case-insensitive comparison
var_dump(strtolower($a) == strtolower($b)); // bool(true)
var_dump(strcasecmp($a, $b) == 0); // bool(true)

// Natural order comparison
$a = "file10.txt";
$b = "file2.txt";
var_dump($a < $b);  // bool(false) - lexicographical comparison
var_dump(strnatcmp($a, $b) > 0); // bool(true) - natural order comparison

// Comparing portions of strings
var_dump(strncmp($a, $b, 4) == 0); // bool(true) - first 4 characters are the same

// Comparing against multiple needles
$fruit = "apple";
var_dump(in_array($fruit, ["apple", "banana", "orange"])); // bool(true)
?>
```

## String Manipulation

### Case Conversion

```php
<?php
$text = "Hello, World!";

// Convert to lowercase
echo strtolower($text); // Output: hello, world!

// Convert to uppercase
echo strtoupper($text); // Output: HELLO, WORLD!

// Capitalize first character
echo ucfirst($text); // Output: Hello, world! (if text was lowercase)

// Lowercase first character
echo lcfirst($text); // Output: hello, World!

// Capitalize first character of each word
echo ucwords("hello world"); // Output: Hello World

// For multibyte strings
echo mb_strtolower($text, 'UTF-8');
echo mb_strtoupper($text, 'UTF-8');
?>
```

### Substring Operations

```php
<?php
$text = "Hello, World!";

// Extract substring
echo substr($text, 0, 5); // Output: Hello
echo substr($text, 7); // Output: World!
echo substr($text, -6); // Output: World!
echo substr($text, -6, 5); // Output: World

// For multibyte strings
$text = "Привет, мир!";
echo mb_substr($text, 0, 6, 'UTF-8'); // Output: Привет

// Check if string contains substring
var_dump(strpos($text, "мир") !== false); // bool(true)
var_dump(str_contains($text, "мир")); // bool(true) (PHP 8.0+)

// Check if string starts with substring
var_dump(strpos($text, "Привет") === 0); // bool(true)
var_dump(str_starts_with($text, "Привет")); // bool(true) (PHP 8.0+)

// Check if string ends with substring
var_dump(substr($text, -4) === "мир!"); // bool(true)
var_dump(str_ends_with($text, "мир!")); // bool(true) (PHP 8.0+)
?>
```

### Search and Replace

```php
<?php
$text = "Hello, World!";

// Find position of substring
echo strpos($text, "World"); // Output: 7
echo strrpos($text, "o"); // Output: 8 (last occurrence)

// Case-insensitive search
echo stripos($text, "world"); // Output: 7
echo strripos($text, "O"); // Output: 8 (last occurrence)

// Replace substring
echo str_replace("World", "PHP", $text); // Output: Hello, PHP!

// Case-insensitive replace
echo str_ireplace("world", "PHP", $text); // Output: Hello, PHP!

// Replace multiple substrings
$search = ["Hello", "World"];
$replace = ["Hi", "PHP"];
echo str_replace($search, $replace, $text); // Output: Hi, PHP!

// Replace with callback function
echo preg_replace_callback('/(\w+)/', function($matches) {
    return strtoupper($matches[0]);
}, $text); // Output: HELLO, WORLD!

// Count replacements
$count = 0;
$result = str_replace("l", "L", $text, $count);
echo $result . " ($count replacements)"; // Output: HeLLo, World! (2 replacements)
?>
```

### Trimming

```php
<?php
$text = "  Hello, World!  \n";

// Remove whitespace from both ends
echo trim($text); // Output: Hello, World!

// Remove whitespace from the beginning
echo ltrim($text); // Output: Hello, World!  \n

// Remove whitespace from the end
echo rtrim($text); // Output:   Hello, World!

// Remove specific characters
echo trim($text, " \n"); // Output: Hello, World!
echo trim("###Hello, World!###", "#"); // Output: Hello, World!
?>
```

### Padding

```php
<?php
$number = "42";

// Pad on the left
echo str_pad($number, 5, "0", STR_PAD_LEFT); // Output: 00042

// Pad on the right
echo str_pad($number, 5, ".", STR_PAD_RIGHT); // Output: 42...

// Pad on both sides
echo str_pad($number, 6, "_", STR_PAD_BOTH); // Output: __42__

// Alternative for left padding with zeros
echo sprintf("%05d", $number); // Output: 00042
?>
```

### Splitting and Joining

```php
<?php
$text = "apple,banana,orange";

// Split string into array
$fruits = explode(",", $text);
print_r($fruits); // Array ( [0] => apple [1] => banana [2] => orange )

// Limit the number of elements
$parts = explode(",", $text, 2);
print_r($parts); // Array ( [0] => apple [1] => banana,orange )

// Join array elements into string
$fruits = ["apple", "banana", "orange"];
echo implode(", ", $fruits); // Output: apple, banana, orange

// Split string by regular expression
$text = "apple\nbanana\norange";
$fruits = preg_split("/\n/", $text);
print_r($fruits); // Array ( [0] => apple [1] => banana [2] => orange )

// Split string into array of characters
$chars = str_split("Hello");
print_r($chars); // Array ( [0] => H [1] => e [2] => l [3] => l [4] => o )

// For multibyte strings
$chars = preg_split('//u', "Привет", -1, PREG_SPLIT_NO_EMPTY);
print_r($chars); // Array of individual characters
?>
```

## Regular Expressions

### Pattern Matching

```php
<?php
// Check if string matches pattern
$text = "The year is 2023";
$hasYear = preg_match('/\d{4}/', $text);
var_dump($hasYear); // bool(true)

// Extract matched parts
$matches = [];
preg_match('/(\d{4})/', $text, $matches);
echo $matches[0]; // Output: 2023

// Find all matches
$text = "Years: 2020, 2021, 2022, 2023";
$matches = [];
preg_match_all('/\d{4}/', $text, $matches);
print_r($matches[0]); // Array ( [0] => 2020 [1] => 2021 [2] => 2022 [3] => 2023 )

// Named capture groups
$text = "Name: John, Age: 30";
preg_match('/Name: (?<name>\w+), Age: (?<age>\d+)/', $text, $matches);
echo $matches['name']; // Output: John
echo $matches['age']; // Output: 30

// Case-insensitive matching
$text = "Hello, World!";
$hasHello = preg_match('/hello/i', $text);
var_dump($hasHello); // bool(true)
?>
```

### Pattern Replacement

```php
<?php
$text = "Hello, World!";

// Basic replacement
echo preg_replace('/World/', 'PHP', $text); // Output: Hello, PHP!

// Case-insensitive replacement
echo preg_replace('/world/i', 'PHP', $text); // Output: Hello, PHP!

// Using backreferences
$text = "John Smith";
echo preg_replace('/(\w+) (\w+)/', '$2, $1', $text); // Output: Smith, John

// Using callback function
$text = "The price is $10";
echo preg_replace_callback('/\$(\d+)/', function($matches) {
    return '$' . ($matches[1] * 1.1); // 10% increase
}, $text); // Output: The price is $11

// Replace with limit
$text = "apple apple apple";
echo preg_replace('/apple/', 'orange', $text, 2); // Output: orange orange apple

// Named backreferences
$text = "John Smith";
echo preg_replace('/(?<first>\w+) (?<last>\w+)/', '${last}, ${first}', $text); // Output: Smith, John
?>
```

## String Formatting

### printf and sprintf

```php
<?php
// Basic formatting
$name = "John";
$age = 30;
printf("Name: %s, Age: %d", $name, $age); // Output: Name: John, Age: 30

// Return formatted string instead of printing
$formatted = sprintf("Name: %s, Age: %d", $name, $age);
echo $formatted; // Output: Name: John, Age: 30

// Format specifiers
printf("Integer: %d\n", 42); // Integer
printf("Float: %f\n", 3.14159); // Float
printf("String: %s\n", "Hello"); // String
printf("Binary: %b\n", 42); // Binary
printf("Hexadecimal: %x\n", 42); // Hexadecimal
printf("Character: %c\n", 65); // Character (ASCII)

// Width and padding
printf("'%5d'\n", 42); // Right-aligned with width 5
printf("'%-5d'\n", 42); // Left-aligned with width 5
printf("'%05d'\n", 42); // Zero-padded with width 5

// Precision for floats
printf("%.2f\n", 3.14159); // 2 decimal places
printf("%8.2f\n", 3.14159); // Width 8, 2 decimal places

// Argument swapping
printf("%2$s, %1$s", "World", "Hello"); // Output: Hello, World

// Named placeholders (PHP 8.0+)
printf("%(name)s is %(age)d years old", name: "John", age: 30);
?>
```

### number_format

```php
<?php
// Format number with thousands separator
echo number_format(1234567); // Output: 1,234,567

// Specify decimal places
echo number_format(1234.567, 2); // Output: 1,234.57

// Custom decimal and thousands separators
echo number_format(1234.567, 2, ',', ' '); // Output: 1 234,57

// Format currency
function formatCurrency($amount, $symbol = '$') {
    return $symbol . number_format($amount, 2);
}

echo formatCurrency(1234.567); // Output: $1,234.57
?>
```

## Multibyte String Functions

```php
<?php
// Make sure the mbstring extension is enabled
if (!extension_loaded('mbstring')) {
    die('mbstring extension is not loaded');
}

$text = "Привет, мир!"; // Russian for "Hello, world!"

// String length
echo strlen($text); // Output: 19 (bytes)
echo mb_strlen($text, 'UTF-8'); // Output: 12 (characters)

// Substring
echo substr($text, 0, 6); // Incorrect result
echo mb_substr($text, 0, 6, 'UTF-8'); // Output: Привет

// Case conversion
echo mb_strtoupper($text, 'UTF-8'); // Output: ПРИВЕТ, МИР!
echo mb_strtolower($text, 'UTF-8'); // Output: привет, мир!

// Position of substring
echo mb_strpos($text, 'мир', 0, 'UTF-8'); // Output: 8

// Convert encoding
$latin = mb_convert_encoding($text, 'ISO-8859-1', 'UTF-8');
$utf8 = mb_convert_encoding($latin, 'UTF-8', 'ISO-8859-1');

// Detect encoding
$encoding = mb_detect_encoding($text, ['UTF-8', 'ISO-8859-1', 'ASCII']);
echo $encoding; // Output: UTF-8

// Internal encoding
mb_internal_encoding('UTF-8'); // Set default encoding for mb_* functions
echo mb_internal_encoding(); // Get current internal encoding
?>
```

## Common String Functions

```php
<?php
// String reversal
echo strrev("Hello"); // Output: olleH

// Repeat a string
echo str_repeat("*", 5); // Output: *****

// Count occurrences of substring
echo substr_count("Hello, Hello, Hello", "Hello"); // Output: 3

// Replace portion of a string
echo substr_replace("Hello, World", "PHP", 7, 5); // Output: Hello, PHP

// Calculate string hash
echo md5("password"); // Output: 5f4dcc3b5aa765d61d8327deb882cf99
echo sha1("password"); // Output: 5baa61e4c9b93f3f0682250b6cf8331b7ee68fd8

// HTML entities
echo htmlentities("<script>alert('XSS')</script>");
// Output: &lt;script&gt;alert('XSS')&lt;/script&gt;

// Strip HTML and PHP tags
echo strip_tags("<p>Hello <script>alert('XSS')</script></p>");
// Output: Hello

// Add slashes for quotes
echo addslashes("It's \"quoted\""); // Output: It\'s \"quoted\"

// Remove slashes
echo stripslashes("It\'s \"quoted\""); // Output: It's "quoted"

// URL encoding/decoding
echo urlencode("Hello World!"); // Output: Hello+World%21
echo urldecode("Hello+World%21"); // Output: Hello World!

// Base64 encoding/decoding
echo base64_encode("Hello, World!"); // Output: SGVsbG8sIFdvcmxkIQ==
echo base64_decode("SGVsbG8sIFdvcmxkIQ=="); // Output: Hello, World!

// Generate a random string
function generateRandomString($length = 10) {
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    }
    return $randomString;
}

echo generateRandomString(); // Output: Random 10-character string
?>
```

## Best Practices

1. **Use single quotes for simple strings**: They're slightly faster as PHP doesn't need to parse them for variables.
2. **Use double quotes or heredoc for complex strings**: When you need variable interpolation or escape sequences.
3. **Be careful with character encodings**: Use mb_* functions for multibyte strings (UTF-8).
4. **Validate and sanitize user input**: Never trust user-provided strings.
5. **Use appropriate comparison functions**: Use `===` for exact matches, `strcasecmp()` for case-insensitive comparisons.
6. **Prefer built-in functions over manual implementations**: They're usually faster and more reliable.
7. **Be mindful of performance**: String operations can be expensive, especially with large strings.
8. **Use regular expressions judiciously**: They're powerful but can be hard to read and maintain.
9. **Consider security implications**: Be careful with functions like `eval()` that execute string content.
10. **Document string format expectations**: Especially for functions that parse or generate formatted strings.