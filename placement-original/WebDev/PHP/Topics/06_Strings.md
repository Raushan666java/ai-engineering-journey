# 06. Strings

## Concatenation and interpolation

```php
<?php
$name = 'Alice';
$greet = 'Hello ' . $name; // concatenation
$greet2 = "Hello $name"; // interpolation
?>
```

## Useful functions

```php
<?php
echo strlen('abc'); // 3
echo substr('abcdef', 1, 3); // 'bcd'
echo str_replace('world','PHP','Hello world'); // Hello PHP
?>
```

## Multibyte (UTF-8) safe functions

```php
<?php
mb_strlen('हेलो', 'UTF-8');
mb_substr('Здравствуйте', 0, 5, 'UTF-8');
?>
```

## Regular expressions

```php
<?php
if (preg_match('/^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i', $email)) {
    echo 'Valid email';
}
?>
```

## Heredoc and Nowdoc

```php
<?php
$text = <<<EOT
Multi-line
string with $variables
EOT;

$raw = <<<'EOT'
No parsing: $variables are literal
EOT;
?>
```

---

**Practice:** Normalize whitespace and strip HTML tags from a user-provided string before saving.
