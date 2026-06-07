# 01. Introduction to PHP

## What is PHP?

**PHP (Hypertext Preprocessor)** is a popular open-source server-side scripting language designed for web development. PHP code is executed on the server, generating HTML which is then sent to the client.

### Key Features

- **Server-side**: Runs on the web server, not in the browser
- **Cross-platform**: Works on Windows, Linux, macOS
- **Database integration**: MySQL, PostgreSQL, SQLite, etc.
- **Open-source**: Free and community-driven
- **Framework ecosystem**: Laravel, Symfony, CodeIgniter

---

## PHP Versions Overview

### PHP 7.x (Legacy but still used)

- PHP 7.4 (Nov 2019): Typed properties, arrow functions
- Performance improvements over PHP 5.x

### PHP 8.x (Modern)

- **PHP 8.0** (Nov 2020): JIT compiler, named arguments, attributes, union types, match expression
- **PHP 8.1** (Nov 2021): Enums, readonly properties, fibers, array_is_list()
- **PHP 8.2** (Dec 2022): Readonly classes, disjunctive normal form types
- **PHP 8.3** (Nov 2023): Typed class constants, #[Override] attribute

> **Recommendation**: Use PHP 8.1+ for new projects.

---

## Installation Options

### 1. XAMPP (Cross-platform)

- Includes Apache, MySQL, PHP, and phpMyAdmin
- Easy setup for Windows, macOS, Linux
- Download: https://www.apachefriends.org

### 2. Docker (Recommended for Laravel)

```bash
# Using official PHP image
docker run -d -p 8080:80 -v $(pwd):/var/www/html php:8.2-apache

# Or use Laravel Sail
composer create-project laravel/laravel my-app
cd my-app
./vendor/bin/sail up
```

### 3. Laravel Homestead

- Pre-configured Vagrant box with PHP, Nginx, MySQL
- Ideal for Laravel development

### 4. Native Installation

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install php8.2 php8.2-cli php8.2-fpm php8.2-mysql

# macOS (Homebrew)
brew install php@8.2
```

---

## Your First PHP Script

### hello.php

```php
<?php
// Single-line comment

/*
 Multi-line comment
 Author: Your Name
*/

echo "Hello, World!";
print "Hello again!";

// PHP can be embedded in HTML
?>
<!DOCTYPE html>
<html>
<head>
    <title>My First PHP Page</title>
</head>
<body>
    <h1><?php echo "Welcome to PHP"; ?></h1>
    <p>Current time: <?= date('Y-m-d H:i:s') ?></p>
</body>
</html>
```

### Running PHP

```bash
# Command line
php hello.php

# Built-in server
php -S localhost:8000
# Visit http://localhost:8000/hello.php
```

---

## Basic Syntax

### PHP Tags

```php
<?php
// Standard tag (always use this)
echo "Hello";
?>

<?= "Shorthand echo" ?>

<!-- Avoid these (deprecated) -->
<? echo "Short tag"; ?>
<% echo "ASP-style tag"; %>
```

### Statements and Semicolons

```php
<?php
echo "Statement 1";
echo "Statement 2";

// Last statement before ?> doesn't need semicolon
echo "Statement 3"
?>
```

### Case Sensitivity

```php
<?php
// Keywords are case-insensitive
ECHO "Hello";
Echo "World";
echo "!";

// Variables ARE case-sensitive
$name = "Alice";
$Name = "Bob";
echo $name;  // Alice
echo $Name;  // Bob
?>
```

---

## Output Functions

### echo vs print

```php
<?php
// echo: no return value, can take multiple parameters
echo "Hello", " ", "World";

// print: returns 1, single parameter only
print "Hello World";

// var_dump: for debugging
$data = [1, 2, 3];
var_dump($data);

// print_r: readable output
print_r($data);
?>
```

---

## PHP in Web Context

### How PHP Works

1. Client (browser) requests a `.php` file
2. Web server passes request to PHP interpreter
3. PHP executes code and generates HTML
4. Server sends HTML response to client
5. Browser displays the HTML

### PHP vs JavaScript

| Feature   | PHP               | JavaScript               |
| --------- | ----------------- | ------------------------ |
| Execution | Server-side       | Client-side (or Node.js) |
| Use case  | Backend logic, DB | Frontend interactivity   |
| Syntax    | C-like            | ECMAScript               |
| Variables | `$variable`       | `let variable`           |

---

## Quick Start Checklist

- [ ] Install PHP 8.1+ (or Docker)
- [ ] Verify: `php -v`
- [ ] Create `hello.php` with `<?php echo "Hello"; ?>`
- [ ] Run: `php -S localhost:8000`
- [ ] Visit: http://localhost:8000/hello.php
- [ ] Install Composer: https://getcomposer.org
- [ ] (Optional) Install Laravel: `composer create-project laravel/laravel my-app`

---

## Resources

- **Official Docs**: https://www.php.net/docs.php
- **PHP The Right Way**: https://phptherightway.com
- **Laravel Docs**: https://laravel.com/docs
- **Interactive Learning**: https://www.codecademy.com/learn/learn-php

---

**Next:** [02. PHP Basics](02_PHP_Basics.md) — Variables, data types, and operators.
