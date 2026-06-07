# 16. Popular String Functions: Open-Source Examples (4 min)

## Overview

PHP's **string functions** and Laravel's **Str** helper provide powerful text manipulation. Essential for validation, formatting, slugs, and data processing.

---

## Core String Functions

### 1. strlen — Length

```php
<?php
$text = "Hello World";
echo strlen($text);  // 11

// Multibyte-safe (UTF-8)
$text = "Привет";
echo mb_strlen($text);  // 6 (not 12)

// Laravel Str helper
use Illuminate\\Support\\Str;
echo Str::length($text);  // Multibyte-safe
```

### 2. substr — Extract Substring

```php
<?php
$text = "Hello World";
echo substr($text, 0, 5);   // "Hello"
echo substr($text, 6);      // "World"
echo substr($text, -5);     // "World"

// Multibyte-safe
echo mb_substr("Привет мир", 0, 6);  // "Привет"

// Laravel
echo Str::substr($text, 0, 5);
```

### 3. str_replace — Replace

```php
<?php
$text = "Hello World";
$new = str_replace("World", "PHP", $text);
// "Hello PHP"

// Multiple replacements
$new = str_replace(
    ['Hello', 'World'],
    ['Hi', 'PHP'],
    $text
);
// "Hi PHP"

// Laravel
$new = Str::replace("World", "PHP", $text);
```

### 4. strtolower / strtoupper

```php
<?php
$text = "Hello World";
echo strtolower($text);  // "hello world"
echo strtoupper($text);  // "HELLO WORLD"
echo ucfirst($text);     // "Hello world"
echo ucwords($text);     // "Hello World"

// Laravel
echo Str::lower($text);
echo Str::upper($text);
echo Str::ucfirst($text);
echo Str::title($text);  // Title Case
```

### 5. trim / ltrim / rtrim

```php
<?php
$text = "  Hello  ";
echo trim($text);    // "Hello"
echo ltrim($text);   // "Hello  "
echo rtrim($text);   // "  Hello"

// Custom characters
echo trim("**Hello**", "*");  // "Hello"

// Laravel
echo Str::trim($text);
```

### 6. explode / implode

```php
<?php
// String to array
$text = "apple,banana,cherry";
$fruits = explode(",", $text);
// ['apple', 'banana', 'cherry']

// Array to string
$text = implode(", ", $fruits);
// "apple, banana, cherry"

// Laravel Collection
$fruits = Str::of($text)->explode(',');
```

### 7. strpos / str_contains

```php
<?php
$text = "Hello World";

// Find position
$pos = strpos($text, "World");  // 6
$pos = strpos($text, "PHP");    // false

// PHP 8.0+: str_contains
if (str_contains($text, "World")) {
    echo "Found!";
}

// Laravel
if (Str::contains($text, "World")) {
    echo "Found!";
}

// Multiple needles
if (Str::contains($text, ['World', 'Hello'])) {
    echo "Found at least one!";
}
```

### 8. str_starts_with / str_ends_with (PHP 8.0+)

```php
<?php
$text = "Hello World";

// PHP 8.0+
if (str_starts_with($text, "Hello")) {
    echo "Starts with Hello!";
}

if (str_ends_with($text, "World")) {
    echo "Ends with World!";
}

// Laravel (works on older PHP too)
if (Str::startsWith($text, "Hello")) {}
if (Str::endsWith($text, "World")) {}
```

### 9. preg_match / preg_replace — Regex

```php
<?php
// Match pattern
$email = "test@example.com";
if (preg_match('/^[\\w.-]+@[\\w.-]+\\.[a-z]{2,}$/i', $email)) {
    echo "Valid email";
}

// Extract matches
preg_match('/\\d+/', "Order #12345", $matches);
echo $matches[0];  // "12345"

// Replace with regex
$text = "User-123-Name";
$clean = preg_replace('/[^a-z0-9]/i', '_', $text);
// "User_123_Name"

// Laravel validation uses regex
$request->validate([
    'username' => 'required|regex:/^[a-z0-9_]+$/i',
]);
```

---

## Laravel Str Helper

### Slug Generation

```php
<?php
use Illuminate\\Support\\Str;

$slug = Str::slug("Hello World PHP");
// "hello-world-php"

$slug = Str::slug("Привет мир");
// "privet-mir" (transliterated)

// In models
class Post extends Model {
    protected static function boot() {
        parent::boot();
        static::creating(function ($post) {
            $post->slug = Str::slug($post->title);
        });
    }
}
```

### Random Strings

```php
<?php
use Illuminate\\Support\\Str;

$random = Str::random(16);
// "8hF3gKl2MnP9qRsT"

$uuid = Str::uuid();
// "550e8400-e29b-41d4-a716-446655440000"

// Token generation
$token = Str::random(60);
$user->api_token = hash('sha256', $token);
```

### String Manipulation

```php
<?php
use Illuminate\\Support\\Str;

// Limit
$excerpt = Str::limit($longText, 100);
// "This is a long text that will be truncated..."

// Words limit
$excerpt = Str::words($longText, 20);

// Snake case
echo Str::snake("helloWorld");  // "hello_world"

// Kebab case
echo Str::kebab("HelloWorld");  // "hello-world"

// Camel case
echo Str::camel("hello_world");  // "helloWorld"

// Studly case (PascalCase)
echo Str::studly("hello_world");  // "HelloWorld"
```

### Pluralization

```php
<?php
use Illuminate\\Support\\Str;

echo Str::plural('user');     // "users"
echo Str::plural('person');   // "people"
echo Str::singular('users');  // "user"

// Conditional
echo Str::plural('item', $count);
// "items" if $count != 1, else "item"
```

### String Fluent API

```php
<?php
use Illuminate\\Support\\Str;

$result = Str::of('  hello world  ')
    ->trim()
    ->upper()
    ->replace('WORLD', 'PHP')
    ->append('!')
    ->toString();
// "HELLO PHP!"

// Chain multiple operations
$slug = Str::of($title)
    ->lower()
    ->slug()
    ->limit(50, '')
    ->toString();
```

---

## Real-World Examples

### Example 1: Generate Unique Slugs

```php
<?php
use Illuminate\\Support\\Str;

class Post extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::creating(function ($post) {
            $slug = Str::slug($post->title);
            $count = 1;

            while (static::where('slug', $slug)->exists()) {
                $slug = Str::slug($post->title) . '-' . $count++;
            }

            $post->slug = $slug;
        });
    }
}
```

### Example 2: Format Phone Numbers

```php
<?php
function formatPhone(string $phone): string
{
    // Remove non-digits
    $phone = preg_replace('/[^0-9]/', '', $phone);

    // Format: (123) 456-7890
    if (strlen($phone) === 10) {
        return sprintf(
            "(%s) %s-%s",
            substr($phone, 0, 3),
            substr($phone, 3, 3),
            substr($phone, 6)
        );
    }

    return $phone;
}

echo formatPhone("1234567890");  // "(123) 456-7890"
```

### Example 3: Parse CSV

```php
<?php
$csv = "Name,Email,Age\\nAlice,alice@example.com,25\\nBob,bob@example.com,30";

$lines = explode("\\n", $csv);
$headers = str_getcsv(array_shift($lines));

$users = array_map(function($line) use ($headers) {
    return array_combine($headers, str_getcsv($line));
}, $lines);

// [
//   ['Name' => 'Alice', 'Email' => 'alice@example.com', 'Age' => '25'],
//   ['Name' => 'Bob', 'Email' => 'bob@example.com', 'Age' => '30']
// ]
```

### Example 4: Sanitize Input

```php
<?php
use Illuminate\\Support\\Str;

function sanitizeInput(string $input): string
{
    // Remove HTML tags
    $input = strip_tags($input);

    // Trim whitespace
    $input = trim($input);

    // Remove extra whitespace
    $input = preg_replace('/\\s+/', ' ', $input);

    return $input;
}

// Laravel validation also sanitizes
$request->validate([
    'name' => 'required|string|max:255',
]);
```

---

## String Validation in Laravel

```php
<?php
$request->validate([
    'email' => 'required|email',
    'url' => 'required|url',
    'slug' => 'required|alpha_dash',  // Letters, numbers, dashes, underscores
    'username' => 'required|regex:/^[a-z0-9_]+$/i',
    'phone' => 'required|regex:/^\\+?[1-9]\\d{1,14}$/',  // E.164 format
]);
```

---

## Performance Tips

```php
<?php
// Bad: concatenation in loop
$result = '';
foreach ($items as $item) {
    $result .= $item;
}

// Better: implode
$result = implode('', $items);

// Bad: multiple str_replace
$text = str_replace('a', '', $text);
$text = str_replace('b', '', $text);
$text = str_replace('c', '', $text);

// Better: single call
$text = str_replace(['a', 'b', 'c'], '', $text);
```

---

## Comparison Table

| Task        | Native PHP          | Laravel Str         |
| ----------- | ------------------- | ------------------- |
| Length      | `strlen()`          | `Str::length()`     |
| Replace     | `str_replace()`     | `Str::replace()`    |
| Lowercase   | `strtolower()`      | `Str::lower()`      |
| Contains    | `str_contains()`    | `Str::contains()`   |
| Starts with | `str_starts_with()` | `Str::startsWith()` |
| Slug        | Manual              | `Str::slug()`       |
| Random      | Manual              | `Str::random()`     |
| Plural      | Manual              | `Str::plural()`     |

---

## Best Practices

1. **Use multibyte functions** (`mb_*`) for UTF-8 text
2. **Leverage Laravel Str** for common tasks (slug, random, etc.)
3. **Validate input** before processing
4. **Use regex sparingly** — native functions are faster
5. **Sanitize user input** to prevent XSS

---

## Practice Exercises

### Exercise 1: Title Case

```php
// Convert "hello world" to "Hello World"
// Convert "the quick BROWN fox" to "The Quick Brown Fox"
```

### Exercise 2: Extract Domain

```php
// From "https://www.example.com/path?query=1"
// Extract "example.com"
```

### Exercise 3: Generate Excerpt

```php
// Create a function that:
// - Limits text to 100 characters
// - Ends at last complete word
// - Appends "..." if truncated
```

---

## Key Takeaways

- **String functions** are essential for text processing
- **Laravel Str** helper provides convenient methods
- **Slugs** are critical for SEO-friendly URLs
- **Regex** is powerful but use native functions when possible
- **Always sanitize** user input for security

---

**🎉 Course Complete!**

You've mastered PHP for Laravel — OOP patterns, modern syntax, and essential functions. Ready to build production Laravel apps!
