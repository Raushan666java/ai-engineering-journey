# Composer Package Management in PHP

Composer is a dependency manager for PHP that allows you to declare the libraries your project depends on and manages them for you. It has become an essential tool in modern PHP development.

## Introduction to Composer

### What is Composer?

Composer is a tool for dependency management in PHP. It allows you to declare the libraries your project depends on and it will manage (install/update) them for you.

### Key Features

- Dependency management at the project level
- Autoload generation
- Version constraints
- Package repositories
- Extensible architecture
- Dependency resolution

## Installation

### Installing on Linux/macOS

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
chmod +x /usr/local/bin/composer
```

### Installing on Windows

1. Download and run the [Composer-Setup.exe](https://getcomposer.org/Composer-Setup.exe)
2. Follow the installation wizard

### Verifying Installation

```bash
composer --version
```

## Basic Usage

### Creating a New Project

```bash
# Create a new project based on a package
composer create-project laravel/laravel my-project

# Create a new project with a specific version
composer create-project laravel/laravel my-project "8.*"
```

### Initializing a Project

```bash
# Create a new composer.json file
composer init
```

This will guide you through creating a `composer.json` file with prompts for:
- Package name
- Description
- Author
- Minimum Stability
- Package Type
- License
- Dependencies

### Installing Dependencies

```bash
# Install dependencies from composer.json
composer install

# Install dependencies without dev dependencies
composer install --no-dev

# Install with optimized autoloader
composer install --optimize-autoloader
```

### Adding Dependencies

```bash
# Add a package
composer require monolog/monolog

# Add a package with a specific version
composer require monolog/monolog:2.0.*

# Add a development dependency
composer require --dev phpunit/phpunit
```

### Updating Dependencies

```bash
# Update all packages
composer update

# Update specific packages
composer update monolog/monolog symfony/console

# Update packages in a specific namespace
composer update symfony/*
```

### Removing Dependencies

```bash
# Remove a package
composer remove monolog/monolog

# Remove a development dependency
composer remove --dev phpunit/phpunit
```

## Composer.json File

### Basic Structure

```json
{
    "name": "vendor/package",
    "description": "Package description",
    "type": "library",
    "license": "MIT",
    "authors": [
        {
            "name": "John Doe",
            "email": "john@example.com"
        }
    ],
    "require": {
        "php": ">=7.4",
        "monolog/monolog": "^2.0"
    },
    "require-dev": {
        "phpunit/phpunit": "^9.0"
    },
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "App\\Tests\\": "tests/"
        }
    }
}
```

### Version Constraints

```json
{
    "require": {
        "monolog/monolog": "1.0.*",         // Any version in 1.0.x
        "symfony/console": "^4.0",          // 4.0 or higher, but less than 5.0
        "twig/twig": "~2.0",                // 2.0 or higher, but less than 3.0
        "vendor/package": ">=1.0",          // 1.0 or higher
        "vendor/package": ">=1.0 <2.0",     // Between 1.0 and 2.0 (exclusive)
        "vendor/package": "1.0.0 - 2.1.0",  // Between 1.0.0 and 2.1.0 (inclusive)
        "vendor/package": "dev-master",     // Dev version from master branch
        "vendor/package": "@dev"            // Any dev version
    }
}
```

### Scripts

```json
{
    "scripts": {
        "post-install-cmd": [
            "php -r \"file_exists('.env') || copy('.env.example', '.env');\""
        ],
        "post-create-project-cmd": [
            "php artisan key:generate"
        ],
        "post-autoload-dump": [
            "Illuminate\\Foundation\\ComposerScripts::postAutoloadDump",
            "@php artisan package:discover"
        ],
        "test": "phpunit",
        "cs-fix": "php-cs-fixer fix"
    }
}
```

## Autoloading

### PSR-4 Autoloading

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

### PSR-0 Autoloading (Legacy)

```json
{
    "autoload": {
        "psr-0": {
            "Monolog\\": "src/",
            "Vendor\\Namespace\\": "src/"
        }
    }
}
```

### Classmap Autoloading

```json
{
    "autoload": {
        "classmap": [
            "database/seeds",
            "database/factories"
        ]
    }
}
```

### Files Autoloading

```json
{
    "autoload": {
        "files": [
            "src/helpers.php"
        ]
    }
}
```

### Generating Autoloader

```bash
# Regenerate autoloader
composer dump-autoload

# Optimize autoloader for production
composer dump-autoload --optimize

# Generate classmap autoloader
composer dump-autoload --classmap-authoritative
```

## Composer Commands

### Common Commands

```bash
# Show installed packages
composer show

# Show detailed information about a package
composer show monolog/monolog

# Check for outdated packages
composer outdated

# Validate composer.json
composer validate

# Clear composer cache
composer clear-cache

# Create project from package
composer create-project laravel/laravel my-project

# Show information about your system
composer diagnose
```

### Managing Repositories

```bash
# Add a repository
composer config repositories.foo vcs https://github.com/foo/bar

# Remove a repository
composer config --unset repositories.foo
```

### Global Packages

```bash
# Install a package globally
composer global require laravel/installer

# Update global packages
composer global update

# List global packages
composer global show
```

## Composer.lock File

The `composer.lock` file is automatically generated when you run `composer install` or `composer update`. It locks the exact versions of packages that were installed.

### Purpose

- Ensures consistent installations across different environments
- Prevents unexpected updates
- Records exact versions, commit references, and other metadata

### Best Practices

- Commit `composer.lock` to version control for applications
- Don't commit `composer.lock` for libraries/packages
- Use `composer install` to ensure exact versions from lock file
- Use `composer update` when you want to update dependencies

## Private Repositories

### Using Private GitHub Repositories

```json
{
    "repositories": [
        {
            "type": "vcs",
            "url": "https://github.com/company/private-repo"
        }
    ],
    "require": {
        "company/private-repo": "dev-master"
    }
}
```

### Authentication

```bash
# Configure authentication for private repositories
composer config github-oauth.github.com <your-github-token>

# Store credentials in auth.json
composer config http-basic.example.org username password
```

## Creating Packages

### Basic Package Structure

```
my-package/
├── composer.json
├── LICENSE
├── README.md
├── src/
│   └── MyClass.php
└── tests/
    └── MyClassTest.php
```

### Package Composer.json

```json
{
    "name": "vendor/package",
    "description": "Package description",
    "type": "library",
    "license": "MIT",
    "authors": [
        {
            "name": "John Doe",
            "email": "john@example.com"
        }
    ],
    "minimum-stability": "stable",
    "require": {
        "php": ">=7.4"
    },
    "require-dev": {
        "phpunit/phpunit": "^9.0"
    },
    "autoload": {
        "psr-4": {
            "Vendor\\Package\\": "src/"
        }
    },
    "autoload-dev": {
        "psr-4": {
            "Vendor\\Package\\Tests\\": "tests/"
        }
    }
}
```

### Publishing to Packagist

1. Push your package to GitHub or another VCS
2. Register on [Packagist](https://packagist.org/)
3. Submit your package URL

## Advanced Composer Features

### Composer Plugins

```bash
# Install a plugin
composer require bamarni/composer-bin-plugin

# Use a plugin
composer bin phpstan require phpstan/phpstan
```

### Multi-Repository Setup

```json
{
    "repositories": [
        {
            "type": "composer",
            "url": "https://packages.company.com"
        },
        {
            "type": "vcs",
            "url": "https://github.com/company/private-repo"
        },
        {
            "type": "path",
            "url": "../local-package"
        }
    ]
}
```

### Platform Requirements

```json
{
    "require": {
        "php": ">=7.4",
        "ext-json": "*",
        "ext-mbstring": "*",
        "lib-libxml": ">=2.7.0"
    },
    "config": {
        "platform": {
            "php": "7.4.0"
        }
    }
}
```

### Prefer Dist vs Prefer Source

```bash
# Prefer distribution packages (faster, no VCS files)
composer install --prefer-dist

# Prefer source packages (includes VCS files, good for development)
composer install --prefer-source
```

## Composer Best Practices

1. **Always commit composer.lock** for applications (not for libraries)
2. **Use semantic versioning** for your packages
3. **Specify PHP version requirements** in composer.json
4. **Use version constraints wisely** (prefer ^ over ~ for most cases)
5. **Optimize autoloader in production** with `--optimize-autoloader`
6. **Use scripts** for common tasks
7. **Keep dependencies minimal** - only require what you need
8. **Update dependencies regularly** to get security fixes
9. **Use private repositories** for proprietary code
10. **Set up Composer auth** in CI/CD environments

## Common Issues and Solutions

### Memory Limit Issues

```bash
# Increase memory limit
COMPOSER_MEMORY_LIMIT=-1 composer update
```

### Network Issues

```bash
# Increase timeout
composer config --global process-timeout 2000
```

### Dependency Conflicts

```bash
# Show why a package is installed or not
composer why monolog/monolog
composer why-not monolog/monolog 2.0.0
```

### Debugging

```bash
# Run commands with verbose output
composer install -v
composer update -vvv
```

## References

- [Composer Documentation](https://getcomposer.org/doc/)
- [Packagist](https://packagist.org/)
- [Semantic Versioning](https://semver.org/)
- [PSR-4 Autoloading Standard](https://www.php-fig.org/psr/psr-4/)