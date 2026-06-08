# 13. Composer: All You Need To Know (5 min)

## Overview

**Composer** is PHP's dependency manager, essential for Laravel development. It handles package installation, autoloading, and script execution.

---

## Installation

```bash
# Linux/macOS
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Verify
composer --version
```

---

## Essential Commands

```bash
# Install all dependencies
composer install

# Add package
composer require guzzlehttp/guzzle
composer require --dev phpunit/phpunit

# Remove package
composer remove vendor/package

# Update packages
composer update
composer update laravel/framework

# Regenerate autoload
composer dump-autoload

# Show packages
composer show

# Validate composer.json
composer validate

# Security audit
composer audit
```

---

## composer.json

```json
{
  "name": "vendor/project",
  "require": {
    "php": "^8.1",
    "laravel/framework": "^10.0"
  },
  "require-dev": {
    "phpunit/phpunit": "^10.0"
  },
  "autoload": {
    "psr-4": {
      "App\\\\": "app/"
    }
  },
  "scripts": {
    "test": "phpunit",
    "post-update-cmd": ["@php artisan optimize"]
  }
}
```

---

## Versioning

```json
{
  "require": {
    "vendor/package": "1.0.0", // Exact
    "vendor/package": "^1.0", // >= 1.0.0 < 2.0.0
    "vendor/package": "~1.2", // >= 1.2 < 2.0
    "vendor/package": "dev-main" // Branch
  }
}
```

---

## Laravel-Specific

```bash
# Create Laravel project
composer create-project laravel/laravel my-app

# Popular packages
composer require laravel/sanctum
composer require spatie/laravel-permission
composer require --dev laravel/telescope
```

---

## Autoloading

```json
{
  "autoload": {
    "psr-4": {
      "App\\\\": "app/"
    },
    "files": ["app/helpers.php"]
  }
}
```

After changes:

```bash
composer dump-autoload
```

---

## Creating Package

```json
{
  "name": "yourname/package",
  "type": "library",
  "require": {
    "php": "^8.1"
  },
  "autoload": {
    "psr-4": {
      "YourName\\\\Package\\\\": "src/"
    }
  }
}
```

---

## Best Practices

1. **Commit composer.lock** for reproducible builds
2. **Use `composer install`** in production (not update)
3. **Run `composer audit`** regularly for security
4. **Optimize autoloader** for production: `composer dump-autoload --optimize`
5. **Use version constraints** (^) for flexibility

---

## Key Takeaways

- **Composer** manages PHP dependencies
- **`composer.json`** defines project dependencies
- **Autoloading** eliminates manual requires
- **Laravel relies heavily** on Composer packages

---

**Next:** [14. PHP New Syntax in Latest Versions](14_PHP_New_Syntax.md)
