# 13. Advanced PHP — Modern Features & Laravel Integration

## Part 1: Callback Functions and Closures

### Basic Closures (Anonymous Functions)

```php
<?php
// Assign to variable
$greet = function($name) {
    return "Hello, $name";
};

echo $greet("Alice");  // Hello, Alice

// Pass as argument
$numbers = [1, 2, 3, 4, 5];
$squared = array_map(function($n) {
    return $n * $n;
}, $numbers);
print_r($squared);  // [1, 4, 9, 16, 25]
```

### Closures with `use` (Variable Binding)

```php
<?php
$multiplier = 10;

// Bind variable from outer scope
$multiply = function($number) use ($multiplier) {
    return $number * $multiplier;
};

echo $multiply(5);  // 50

// Bind by reference
$counter = 0;
$increment = function() use (&$counter) {
    $counter++;
};

$increment();
$increment();
echo $counter;  // 2
```

### Arrow Functions (PHP 7.4+)

```php
<?php
// Before: closure
$numbers = [1, 2, 3, 4, 5];
$doubled = array_map(function($n) {
    return $n * 2;
}, $numbers);

// PHP 7.4+: arrow function (auto-captures variables)
$multiplier = 10;
$result = array_map(fn($n) => $n * $multiplier, $numbers);

// Multi-line requires closure
$complex = array_map(function($n) use ($multiplier) {
    $temp = $n * 2;
    return $temp + $multiplier;
}, $numbers);
```

### First-Class Callables (PHP 8.1+)

```php
<?php
class Math {
    public static function add($a, $b) {
        return $a + $b;
    }
}

// Before PHP 8.1
$callable = [Math::class, 'add'];
$callable = 'strlen';

// PHP 8.1+: First-class callable syntax
$add = Math::add(...);
$strlen = strlen(...);

echo $add(5, 3);      // 8
echo $strlen("test"); // 4
```

### Closures in Laravel

```php
<?php
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Collection;

// Route closure
Route::get('/users', function() {
    return User::all();
});

// Collection methods
$users = User::all();
$active = $users->filter(fn($user) => $user->is_active);
$names = $users->map(fn($user) => $user->name);

// Query scopes
User::where(function($query) {
    $query->where('role', 'admin')
          ->orWhere('role', 'moderator');
})->get();

// Middleware
Route::middleware(function($request, $next) {
    if (!auth()->check()) {
        return redirect('/login');
    }
    return $next($request);
});
```

---

## Part 2: Control Flow Operators

### Ternary Operator

```php
<?php
// Basic ternary
$age = 20;
$status = ($age >= 18) ? 'adult' : 'minor';

// Nested (avoid if possible)
$category = ($age < 13) ? 'child'
          : (($age < 18) ? 'teen' : 'adult');

// Short ternary (Elvis operator)
$name = $user->name ?: 'Guest';  // If $user->name is falsy, use 'Guest'
```

### Null Coalescing Operator (PHP 7.0+)

```php
<?php
// Before PHP 7
$username = isset($_GET['user']) ? $_GET['user'] : 'guest';

// PHP 7.0+
$username = $_GET['user'] ?? 'guest';

// Chain multiple
$value = $config['key'] ?? $default['key'] ?? 'fallback';

// Null coalescing assignment (PHP 7.4+)
$data['timeout'] ??= 30;  // Assign 30 if not set or null
```

### Nullsafe Operator (PHP 8.0+)

```php
<?php
class User {
    public ?Address $address = null;
}

class Address {
    public ?string $city = null;
}

$user = new User();

// Before PHP 8
$city = $user->address !== null && $user->address->city !== null
      ? $user->address->city
      : 'Unknown';

// PHP 8.0+
$city = $user?->address?->city ?? 'Unknown';

// In Laravel
$userName = $post?->user?->name ?? 'Anonymous';
```

### Match Expression (PHP 8.0+)

```php
<?php
// Old: switch
switch ($status) {
    case 'pending':
        $message = 'Waiting for approval';
        break;
    case 'approved':
        $message = 'Approved';
        break;
    case 'rejected':
        $message = 'Rejected';
        break;
    default:
        $message = 'Unknown';
}

// PHP 8.0+: match (returns value, no fall-through)
$message = match($status) {
    'pending' => 'Waiting for approval',
    'approved' => 'Approved',
    'rejected' => 'Rejected',
    default => 'Unknown',
};

// Multiple conditions
$type = match($value) {
    0, null => 'empty',
    1, 2, 3 => 'small',
    default => 'large',
};

// With expressions
$result = match(true) {
    $age < 18 => 'minor',
    $age >= 18 && $age < 65 => 'adult',
    $age >= 65 => 'senior',
};
```

---

## Part 3: Type System

### Variable Type Hints

```php
<?php
declare(strict_types=1);

function add(int $a, int $b): int {
    return $a + $b;
}

// Nullable types (PHP 7.1+)
function greet(?string $name): ?string {
    return $name ? "Hello, $name" : null;
}

// Union types (PHP 8.0+)
function process(int|float $number): int|float {
    return $number * 2;
}

// Mixed type (PHP 8.0+)
function handle(mixed $value): void {
    // Accepts any type
}
```

### Return Types

```php
<?php
// Scalar return types
function getName(): string { return "Alice"; }
function getAge(): int { return 25; }
function getHeight(): float { return 5.6; }
function isActive(): bool { return true; }

// Array return type
function getUsers(): array {
    return ["Alice", "Bob"];
}

// Object return type
function getUser(): User {
    return new User();
}

// Void (no return value)
function log(string $message): void {
    echo $message;
    // return; // OK (or no return)
    // return null; // Error in strict mode
}

// Never (never returns - throws or exits)
function fail(): never {
    throw new Exception('Failed');
}
```

### Property Types (PHP 7.4+)

```php
<?php
class User {
    // Typed properties (PHP 7.4+)
    public string $name;
    public int $age;
    private ?string $email = null;

    // Readonly properties (PHP 8.1+)
    public function __construct(
        public readonly string $id,
        public readonly string $username
    ) {}
}

$user = new User('123', 'alice');
// $user->id = '456';  // Error: Cannot modify readonly property
```

### PHP 8.2+ Features

```php
<?php
// Readonly classes (all properties readonly)
readonly class Config {
    public function __construct(
        public string $apiKey,
        public string $apiSecret,
    ) {}
}

// Disjunctive Normal Form (DNF) types
function process((A&B)|C $value): void {
    // $value must be (A AND B) OR C
}

// Constants in traits
trait MyTrait {
    public const CONSTANT = 'value';
}
```

---

## Part 4: Error Handling

### Try-Catch Basics

```php
<?php
try {
    $result = 10 / 0;  // Division by zero
} catch (DivisionByZeroError $e) {
    echo "Error: " . $e->getMessage();
} finally {
    echo "Cleanup";
}
```

### Multiple Catch Blocks

```php
<?php
try {
    // Risky operation
    $user = User::findOrFail($id);
    $payment = $user->processPayment();
} catch (ModelNotFoundException $e) {
    return response()->json(['error' => 'User not found'], 404);
} catch (PaymentException $e) {
    return response()->json(['error' => 'Payment failed'], 402);
} catch (Exception $e) {
    // Catch all other exceptions
    Log::error($e->getMessage());
    return response()->json(['error' => 'Server error'], 500);
} finally {
    // Always executes
    DB::commit();
}
```

### Non-Capturing Catch (PHP 8.0+)

```php
<?php
// Before PHP 8
try {
    $data = fetchData();
} catch (Exception $e) {
    // Don't use $e
    $data = [];
}

// PHP 8.0+: omit variable
try {
    $data = fetchData();
} catch (Exception) {
    $data = [];
}
```

### Custom Exceptions

```php
<?php
namespace App\Exceptions;

use Exception;

class PaymentException extends Exception
{
    public function __construct(
        string $message = "Payment failed",
        int $code = 0,
        ?Throwable $previous = null
    ) {
        parent::__construct($message, $code, $previous);
    }

    public function report(): void {
        // Log to external service
    }

    public function render($request) {
        return response()->json([
            'error' => $this->getMessage()
        ], 402);
    }
}

// Usage
if (!$payment->process()) {
    throw new PaymentException('Insufficient funds');
}
```

### Error vs Exception

```php
<?php
// Error (PHP 7+): serious issues
try {
    require 'missing_file.php';
} catch (Error $e) {
    echo "Error: " . $e->getMessage();
}

// Catch both Error and Exception
try {
    // Code
} catch (Throwable $e) {
    // Catches Error, Exception, and all subclasses
}
```

---

## Part 5: Composer — All You Need to Know

### What is Composer?

Composer is PHP's dependency manager. It manages packages (libraries) for your project.

### Installation

```bash
# Linux/macOS
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer

# Verify
composer --version
```

### composer.json

```json
{
  "name": "vendor/project-name",
  "description": "My awesome project",
  "type": "project",
  "require": {
    "php": "^8.1",
    "laravel/framework": "^10.0",
    "guzzlehttp/guzzle": "^7.5"
  },
  "require-dev": {
    "phpunit/phpunit": "^10.0",
    "laravel/pint": "^1.0"
  },
  "autoload": {
    "psr-4": {
      "App\\": "app/",
      "Database\\": "database/"
    }
  },
  "scripts": {
    "test": "phpunit",
    "format": "pint"
  }
}
```

### Common Commands

```bash
# Initialize new project
composer init

# Install dependencies
composer install

# Add package
composer require guzzlehttp/guzzle
composer require --dev phpunit/phpunit

# Update packages
composer update
composer update vendor/package

# Remove package
composer remove vendor/package

# Autoload optimization
composer dump-autoload
composer dump-autoload --optimize  # For production

# Show installed packages
composer show
composer show --tree

# Run scripts
composer test
composer format

# Validate composer.json
composer validate

# Security audit
composer audit
```

### Version Constraints

```json
{
  "require": {
    "vendor/package": "1.0.0", // Exact version
    "vendor/package": "^1.0", // >= 1.0.0, < 2.0.0
    "vendor/package": "~1.2", // >= 1.2, < 2.0
    "vendor/package": "1.*", // >= 1.0, < 2.0
    "vendor/package": ">=1.0 <2.0", // Range
    "vendor/package": "dev-main" // Development branch
  }
}
```

### Autoloading

```php
<?php
// composer.json
{
    "autoload": {
        "psr-4": {
            "App\\": "src/"
        },
        "files": [
            "src/helpers.php"
        ],
        "classmap": [
            "database/seeds",
            "database/factories"
        ]
    }
}

// After changes, run:
// composer dump-autoload

// In your PHP file
require __DIR__ . '/vendor/autoload.php';

use App\Services\UserService;

$service = new UserService();
```

### Creating Your Own Package

```json
{
  "name": "yourname/package-name",
  "description": "Package description",
  "type": "library",
  "license": "MIT",
  "authors": [
    {
      "name": "Your Name",
      "email": "you@example.com"
    }
  ],
  "require": {
    "php": "^8.1"
  },
  "autoload": {
    "psr-4": {
      "YourName\\PackageName\\": "src/"
    }
  }
}
```

### Laravel-Specific

```bash
# Create new Laravel project
composer create-project laravel/laravel my-app

# Add Laravel package
composer require laravel/sanctum
composer require spatie/laravel-permission

# Development packages
composer require --dev barryvdh/laravel-debugbar
composer require --dev laravel/telescope
```

---

## Part 6: PHP 8+ New Syntax

### Named Arguments (PHP 8.0)

```php
<?php
function createUser(string $name, string $email, int $age = 18) {
    // ...
}

// Before PHP 8
createUser("Alice", "alice@example.com", 25);

// PHP 8+: skip optional parameters
createUser(name: "Alice", email: "alice@example.com");
createUser(email: "alice@example.com", name: "Alice");  // Order doesn't matter
```

### Attributes (PHP 8.0)

```php
<?php
#[Route('/api/users', methods: ['GET'])]
class UserController {
    #[Cache(ttl: 3600)]
    public function index() {
        // ...
    }
}

// Define attribute
#[Attribute]
class Route {
    public function __construct(
        public string $path,
        public array $methods = ['GET']
    ) {}
}
```

### Enums (PHP 8.1)

```php
<?php
enum Status: string {
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';

    public function label(): string {
        return match($this) {
            self::Pending => 'Waiting',
            self::Approved => 'Approved',
            self::Rejected => 'Rejected',
        };
    }
}

// Usage
$status = Status::Pending;
echo $status->value;   // 'pending'
echo $status->label(); // 'Waiting'

// In Laravel
class Order extends Model {
    protected $casts = [
        'status' => Status::class
    ];
}
```

---

## Practice Exercises

1. Create a service class with dependency injection
2. Implement error handling with custom exceptions
3. Use closures for array filtering and transformation
4. Build a Composer package
5. Refactor old code to use PHP 8+ features (match, nullsafe, attributes)

---

**Next:** [14. PHP and Web Development](14_PHP_and_Web_Development.md)
