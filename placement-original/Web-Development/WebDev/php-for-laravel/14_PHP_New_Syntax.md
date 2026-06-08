# 14. PHP New Syntax in Latest Versions (4 min)

## Overview

PHP 8.0, 8.1, 8.2, and 8.3 introduced game-changing features. Laravel applications benefit from **named arguments**, **attributes**, **enums**, **readonly properties**, and more.

---

## PHP 8.0 Features

### 1. Named Arguments

```php
<?php
// Before PHP 8
createUser('Alice', 'alice@example.com', 25);

// PHP 8.0+: skip/reorder parameters
createUser(
    name: 'Alice',
    email: 'alice@example.com'
);

createUser(
    email: 'alice@example.com',
    name: 'Alice'  // Order doesn't matter
);

// Laravel example
User::create([
    'name' => 'Alice',
    'email' => 'alice@example.com',
]);
// vs
User::query()->create(
    attributes: ['name' => 'Alice', 'email' => 'alice@example.com']
);
```

### 2. Union Types

```php
<?php
function process(int|float $number): int|float {
    return $number * 2;
}

function handle(User|Admin $account): void {
    $account->save();
}

// Laravel example
public function search(string|array $filters): Collection
{
    return Product::query()
        ->when(is_string($filters), fn($q) => $q->where('name', 'like', "%$filters%"))
        ->when(is_array($filters), fn($q) => $q->where($filters))
        ->get();
}
```

### 3. Match Expression

```php
<?php
// Old: switch
switch ($status) {
    case 'pending': return 'yellow'; break;
    case 'approved': return 'green'; break;
    default: return 'gray';
}

// PHP 8.0+: match (returns value)
$color = match($status) {
    'pending' => 'yellow',
    'approved' => 'green',
    'rejected' => 'red',
    default => 'gray',
};

// Multiple conditions
$category = match($age) {
    0, 1, 2 => 'infant',
    3...12 => 'child',
    13...17 => 'teen',
    default => 'adult',
};

// Laravel example
$message = match($order->status) {
    OrderStatus::Pending => 'Your order is being processed',
    OrderStatus::Shipped => 'Your order has been shipped',
    OrderStatus::Delivered => 'Your order has been delivered',
    default => 'Unknown status',
};
```

### 4. Nullsafe Operator

```php
<?php
// Before PHP 8
$city = $user && $user->address ? $user->address->city : null;

// PHP 8.0+
$city = $user?->address?->city;

// Laravel example
$authorName = $post?->author?->name ?? 'Anonymous';
$managerEmail = $employee?->department?->manager?->email;
```

### 5. Attributes (Annotations)

```php
<?php
#[Route('/api/users', methods: ['GET', 'POST'])]
class UserController
{
    #[Cache(ttl: 3600)]
    #[Authorize('admin')]
    public function index() {}
}

// Define attribute
#[Attribute]
class Route
{
    public function __construct(
        public string $path,
        public array $methods = ['GET']
    ) {}
}

// Laravel uses attributes
#[Validator]
class StoreUserRequest extends FormRequest {}
```

### 6. Constructor Property Promotion

```php
<?php
// Before PHP 8
class User {
    private string $name;
    private string $email;

    public function __construct(string $name, string $email) {
        $this->name = $name;
        $this->email = $email;
    }
}

// PHP 8.0+
class User {
    public function __construct(
        private string $name,
        private string $email
    ) {}
}
```

---

## PHP 8.1 Features

### 1. Enums

```php
<?php
enum Status: string {
    case Pending = 'pending';
    case Approved = 'approved';
    case Rejected = 'rejected';

    public function color(): string {
        return match($this) {
            self::Pending => 'yellow',
            self::Approved => 'green',
            self::Rejected => 'red',
        };
    }
}

// Usage
$status = Status::Pending;
echo $status->value;    // 'pending'
echo $status->color();  // 'yellow'

// Laravel casting
class Order extends Model {
    protected $casts = [
        'status' => Status::class
    ];
}

$order = Order::find(1);
echo $order->status->value;  // 'pending'
```

### 2. Readonly Properties

```php
<?php
class User {
    public function __construct(
        public readonly string $id,
        public readonly string $email
    ) {}
}

$user = new User('123', 'alice@example.com');
// $user->id = '456';  // Error: Cannot modify readonly
```

### 3. First-Class Callables

```php
<?php
// Before PHP 8.1
$callable = [User::class, 'find'];
$strlen = 'strlen';

// PHP 8.1+
$find = User::find(...);
$strlen = strlen(...);

$user = $find(1);
echo $strlen('hello');  // 5
```

### 4. Array Unpacking with String Keys

```php
<?php
$array1 = ['a' => 1, 'b' => 2];
$array2 = ['c' => 3, 'd' => 4];

// PHP 8.1+
$merged = [...$array1, ...$array2];
// ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4]
```

---

## PHP 8.2 Features

### 1. Readonly Classes

```php
<?php
// All properties readonly
readonly class Config {
    public function __construct(
        public string $apiKey,
        public string $apiSecret,
        public int $timeout
    ) {}
}

$config = new Config('key', 'secret', 30);
// $config->apiKey = 'new';  // Error
```

### 2. Disjunctive Normal Form (DNF) Types

```php
<?php
// (A and B) or C
function process((User&Admin)|Guest $account): void {
    // $account is either (User AND Admin) OR Guest
}
```

### 3. True Type

```php
<?php
function validate(): true {
    // Must return true, not just any truthy value
    return true;
}
```

---

## PHP 8.3 Features

### 1. Typed Class Constants

```php
<?php
class Status {
    public const string PENDING = 'pending';
    public const string APPROVED = 'approved';
    private const int MAX_RETRIES = 3;
}
```

### 2. Override Attribute

```php
<?php
class User extends Model {
    #[Override]
    public function save(array $options = []): bool {
        // Compile error if parent doesn't have save()
        return parent::save($options);
    }
}
```

### 3. Anonymous Readonly Classes

```php
<?php
$config = new readonly class {
    public function __construct(
        public string $key,
        public string $value
    ) {}
};
```

---

## Laravel-Specific Modern Patterns

### Enum in Routes

```php
<?php
enum OrderStatus: string {
    case Pending = 'pending';
    case Completed = 'completed';
}

Route::get('/orders/{status}', function (OrderStatus $status) {
    return Order::where('status', $status->value)->get();
});
```

### Attributes for Middleware

```php
<?php
use Illuminate\Routing\Middleware\ThrottleRequests;

#[ThrottleRequests(60, 1)]
class ApiController extends Controller {}
```

---

## Comparison Table

| Feature         | Version | Example                 |
| --------------- | ------- | ----------------------- | ------ |
| Named arguments | 8.0     | `fn(name: 'Alice')`     |
| Union types     | 8.0     | `int\\                  | float` |
| Match           | 8.0     | `match($x) {...}`       |
| Nullsafe        | 8.0     | `$user?->name`          |
| Attributes      | 8.0     | `#[Route(...)]`         |
| Enums           | 8.1     | `enum Status {...}`     |
| Readonly        | 8.1     | `readonly string $id`   |
| Readonly class  | 8.2     | `readonly class Config` |
| True type       | 8.2     | `function f(): true`    |
| Typed constants | 8.3     | `const string X = 'a'`  |

---

## Best Practices

1. **Use enums** for fixed sets of values (status, role, type)
2. **Apply readonly** to immutable data (config, DTOs)
3. **Leverage match** for cleaner conditionals
4. **Type everything** — constants, properties, parameters
5. **Use nullsafe** to avoid verbose null checks

---

## Practice Exercises

### Exercise 1: Refactor to Enums

```php
// Refactor this to use enums:
class Order {
    const STATUS_PENDING = 'pending';
    const STATUS_COMPLETED = 'completed';
    public string $status = self::STATUS_PENDING;
}
```

### Exercise 2: Use Match

```php
// Refactor to match expression:
function getStatusColor($status) {
    switch($status) {
        case 'pending': return 'yellow'; break;
        case 'approved': return 'green'; break;
        default: return 'gray';
    }
}
```

### Exercise 3: Readonly DTO

```php
// Create a readonly UserDTO class with:
// - id, name, email
// - Constructor property promotion
```

---

## Key Takeaways

- **PHP 8+** brings modern syntax to Laravel
- **Enums** replace magic strings for fixed values
- **Readonly** ensures immutability
- **Match** is cleaner than switch
- **Nullsafe** simplifies null checks

---

**Next:** [15. Popular Array Functions](15_Array_Functions.md)
