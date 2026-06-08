# 6. Strings in PHP

## String Creation

### Single and Double Quotes
```php
// Single quotes - literal string
$name = 'John';
$str1 = 'Hello $name'; // Output: Hello $name

// Double quotes - interpolated string
$str2 = "Hello $name"; // Output: Hello John
$str3 = "Hello {$name}"; // Output: Hello John (complex syntax)
```

### Escape Sequences
```php
// In double quotes
$str = "Line 1\nLine 2\tTabbed\"Quoted\"";

// In single quotes, only \ and ' can be escaped
$str = 'It\'s a single quote and \\ is a backslash';
```

### Heredoc Syntax
```php
$name = 'John';
$email = 'john@example.com';

$message = <<<EOT
Dear $name,

Thank you for your registration.
Your email address is: $email

Regards,
The Team
EOT;
```

### Nowdoc Syntax (PHP 5.3+)
```php
$name = 'John';

$message = <<<'EOT'
Dear $name,

This will not interpolate variables.
$name remains as is.

Regards,
The Team
EOT;
```

## String Operations

### Concatenation
```php
$firstName = 'John';
$lastName = 'Doe';

// Using . operator
$fullName = $firstName . ' ' . $lastName; // John Doe

// Using .= operator
$greeting = 'Hello';
$greeting .= ', ' . $firstName; // Hello, John
```

### String Length
```php
$str = 'Hello, World!';
$length = strlen($str); // 13

// For multibyte strings (UTF-8)
$text = 'こんにちは'; // Japanese "Hello"
$length = mb_strlen($text, 'UTF-8'); // 5
```

### Accessing Characters
```php
$str = 'Hello';

// String as array
$firstChar = $str[0]; // H
$thirdChar = $str[2]; // l

// Using curly braces (deprecated in PHP 8.2+)
$secondChar = $str{1}; // e

// Using substr
$firstChar = substr($str, 0, 1); // H
```

### Comparing Strings
```php
// Case-sensitive comparison
$result = strcmp('hello', 'Hello'); // Returns > 0

// Case-insensitive comparison
$result = strcasecmp('hello', 'Hello'); // Returns 0 (equal)

// Natural order comparison
$result = strnatcmp('img2.png', 'img10.png'); // Returns < 0
```

## String Manipulation

### Case Conversion
```php
$str = 'Hello, World!';

$upper = strtoupper($str); // HELLO, WORLD!
$lower = strtolower($str); // hello, world!
$firstUpper = ucfirst('hello'); // Hello
$wordsUpper = ucwords('hello world'); // Hello World
```

### Substring Operations
```php
$str = 'Hello, World!';

// Extract substring
$sub = substr($str, 0, 5); // Hello
$end = substr($str, -6); // World!

// Find position
$pos = strpos($str, 'World'); // 7
$pos = stripos($str, 'world'); // 7 (case-insensitive)

// Check if string contains substring
$contains = str_contains($str, 'World'); // true (PHP 8+)
$startsWith = str_starts_with($str, 'Hello'); // true (PHP 8+)
$endsWith = str_ends_with($str, '!'); // true (PHP 8+)

// For PHP < 8
$contains = strpos($str, 'World') !== false;
$startsWith = strpos($str, 'Hello') === 0;
$endsWith = substr($str, -1) === '!';
```

### Search and Replace
```php
$str = 'Hello, World!';

// Simple replacement
$new = str_replace('World', 'PHP', $str); // Hello, PHP!

// Case-insensitive replacement
$new = str_ireplace('world', 'PHP', $str); // Hello, PHP!

// Multiple replacements
$new = str_replace(
    ['Hello', 'World'],
    ['Hi', 'PHP'],
    $str
); // Hi, PHP!

// With count
$count = 0;
$new = str_replace('l', '*', $str, $count); // He**o, World!
// $count = 2

// Regular expression replacement
$new = preg_replace('/[aeiou]/i', '*', $str); // H*ll*, W*rld!
```

### Trimming
```php
$str = "  Hello, World!  \n";

$trimmed = trim($str); // "Hello, World!"
$leftTrimmed = ltrim($str); // "Hello, World!  \n"
$rightTrimmed = rtrim($str); // "  Hello, World!"

// Custom characters
$str = "xxxHello, World!yyy";
$trimmed = trim($str, 'xy'); // "Hello, World!"
```

### Padding
```php
$str = 'Hello';

// Right padding
$padded = str_pad($str, 10); // "Hello     "
$padded = str_pad($str, 10, '-'); // "Hello-----"
$padded = str_pad($str, 10, '-', STR_PAD_LEFT); // "-----Hello"
$padded = str_pad($str, 10, '-', STR_PAD_BOTH); // "--Hello---"
```

### Splitting and Joining
```php
// Split string into array
$str = 'apple,orange,banana';
$fruits = explode(',', $str); // ['apple', 'orange', 'banana']

// Split with limit
$parts = explode(',', $str, 2); // ['apple', 'orange,banana']

// Join array into string
$fruits = ['apple', 'orange', 'banana'];
$str = implode(',', $fruits); // 'apple,orange,banana'
// Alternative syntax
$str = join(',', $fruits); // 'apple,orange,banana'

// Split by regular expression
$str = 'apple 123 orange 456 banana';
$parts = preg_split('/\d+/', $str); // ['apple ', ' orange ', ' banana']
```

## Regular Expressions

### Pattern Matching
```php
$str = 'The quick brown fox jumps over the lazy dog';

// Check if pattern matches
$isMatch = preg_match('/fox/', $str); // 1 (true)

// Get first match
$matches = [];
preg_match('/quick (\w+)/', $str, $matches);
// $matches = ['quick brown', 'brown']

// Get all matches
$matches = [];
preg_match_all('/the/i', $str, $matches);
// $matches = [['The', 'the']]
```

### Pattern Replacement
```php
$str = 'The quick brown fox';

// Simple replacement
$new = preg_replace('/brown/', 'red', $str); // The quick red fox

// With backreferences
$new = preg_replace('/(\w+) fox/', '$1 cat', $str); // The quick brown cat

// With callback function
$new = preg_replace_callback('/\b(\w)\w+\b/', function($matches) {
    return $matches[1] . '.'; // First letter + period
}, $str); // T. q. b. f.
```

## String Formatting

### printf and sprintf
```php
$name = 'John';
$age = 30;

// Direct output
printf('Name: %s, Age: %d', $name, $age); // Name: John, Age: 30

// Return as string
$formatted = sprintf('Name: %s, Age: %d', $name, $age);

// Format specifiers
$price = 9.99;
$formatted = sprintf('Price: $%.2f', $price); // Price: $9.99
$hex = sprintf('Hex: 0x%X', 255); // Hex: 0xFF
$padded = sprintf('ID: %05d', 42); // ID: 00042
```

### number_format
```php
$number = 1234567.89;

// Default formatting
$formatted = number_format($number); // 1,234,568

// With decimals
$formatted = number_format($number, 2); // 1,234,567.89

// Custom separators
$formatted = number_format($number, 2, ',', ' '); // 1 234 567,89
```

## Multibyte String Functions

### Working with UTF-8
```php
// Enable multibyte string functions
mb_internal_encoding('UTF-8');

$str = 'こんにちは世界'; // Hello world in Japanese

// String length
$length = mb_strlen($str); // 7

// Substring
$sub = mb_substr($str, 0, 5); // こんにちは

// Convert case
$upper = mb_strtoupper('français', 'UTF-8'); // FRANÇAIS

// Find position
$pos = mb_strpos($str, '世界'); // 5
```

## Best Learning Methods
- Practice with string functions and interpolation
- Work with real-world text processing examples
- Build a text manipulation tool (e.g., URL slugifier)
- Experiment with regular expressions for pattern matching
- Process data from forms using string functions
- Handle multilingual content with multibyte functions
- Reference: https://www.php.net/manual/en/language.types.string.php
