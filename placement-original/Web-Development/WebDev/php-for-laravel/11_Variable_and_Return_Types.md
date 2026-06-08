# 11. Variable Types and Return Types (4 min)

## Overview

PHP 7+ introduced **type declarations** for parameters and return values. Laravel extensively uses type hints for dependency injection, request validation, and API responses. Understanding types is crucial for writing maintainable Laravel applications.

---

## Key Concepts

### 1. Scalar Type Hints (PHP 7.0+)

- `int`, `float`, `string`, `bool`
- Enforces parameter and return types

### 2. Nullable Types (PHP 7.1+)

- `?Type` allows null or the specified type

### 3. Union Types (PHP 8.0+)

- `Type1|Type2` allows multiple types

### 4. Mixed Type (PHP 8.0+)

- Accepts any type explicitly

### 5. Return Type Declarations

- `: Type` after function signature
- Special: `void`, `never`

---

## Strict Types Mode

### Enabling Strict Types

```php
<?php
declare(strict_types=1);  // Must be the first statement

function add(int $a, int $b): int {
    return $a + $b;
}

// Strict mode: TypeError if types don't match
echo add(5, 10);     // OK: 15
// echo add("5", 10); // TypeError in strict mode
// echo add(5.5, 10); // TypeError in strict mode
```

### Without Strict Types (Type Coercion)

```php
<?php
// No declare(strict_types=1)

function add(int $a, int $b): int {
    return $a + $b;
}

// PHP will coerce types
echo add("5", 10);    // 15 (string "5" coerced to int)
echo add(5.9, 10.1);  // 15 (floats truncated to ints)
```

---

## Scalar Type Hints

### Basic Types

```php
<?php
declare(strict_types=1);

function greet(string $name): string {
    return "Hello, $name";
}

function calculateAge(int $birthYear): int {
    return date('Y') - $birthYear;
}

function calculatePrice(float $base, float $tax): float {
    return $base * (1 + $tax);
}

function isActive(bool $status): string {
    return $status ? 'Active' : 'Inactive';
}

echo greet("Alice");              // Hello, Alice
echo calculateAge(1990);          // 34 (assuming 2024)
echo calculatePrice(100.0, 0.1);  // 110.0
echo isActive(true);              // Active
```

### Array and Object Types

```php
<?php
function processData(array $data): array {
    return array_map('strtoupper', $data);
}

function getUser(int $id): User {
    return User::findOrFail($id);
}

function storeUser(User $user): void {
    $user->save();
}
```

---

## Nullable Types (PHP 7.1+)

### Syntax

```php
<?php
declare(strict_types=1);

// Accepts string or null
function greet(?string $name): ?string {
    if ($name === null) {
        return null;
    }
    return "Hello, $name";
}

echo greet("Alice");  // Hello, Alice
echo greet(null);     // (null)

// Nullable parameter with default
function welcome(?string $name = null): string {
    return $name ? "Welcome, $name" : "Welcome, Guest";
}
```

### Laravel Examples

```php
<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Nullable type for optional parameter
    public function show(?int $id = null): User
    {
        if ($id === null) {
            return auth()->user();
        }
        return User::findOrFail($id);
    }

    // Nullable return (might not find)
    public function find(string $email): ?User
    {
        return User::where('email', $email)->first();
    }
}
```

---

## Union Types (PHP 8.0+)

### Multiple Types

```php
<?php
declare(strict_types=1);

// Accepts int OR float
function double(int|float $number): int|float {
    return $number * 2;
}

echo double(5);      // 10
echo double(5.5);    // 11.0

// Multiple types including null
function process(string|int|null $value): string {
    if ($value === null) {
        return 'null';
    }
    return (string) $value;
}

// Union with object types
function store(User|Admin $account): void {
    $account->save();
}
```

### Laravel Examples

```php
<?php
// Accept multiple input types
public function search(string|array $query): Collection
{
    if (is_string($query)) {
        return Product::where('name', 'like', "%$query%")->get();
    }

    // Array of filters
    return Product::where($query)->get();
}

// Return different response types
public function response(Request $request): JsonResponse|RedirectResponse
{
    if ($request->wantsJson()) {
        return response()->json($data);
    }
    return redirect()->back();
}
```

---

## Mixed Type (PHP 8.0+)

### Accepting Any Type

```php
<?php
declare(strict_types=1);

// Explicitly accepts any type
function debug(mixed $value): void {
    var_dump($value);
}

debug(123);
debug("string");
debug([1, 2, 3]);
debug(new User());

// Use when type is truly unknown
function cache(string $key, mixed $value, int $ttl = 3600): void {
    Cache::put($key, $value, $ttl);
}
```

---

## Return Type Declarations

### Void (No Return Value)

```php
<?php
declare(strict_types=1);

// Function returns nothing
function logMessage(string $message): void {
    file_put_contents('log.txt', $message . PHP_EOL, FILE_APPEND);
    // No return statement, or just: return;
}

// Laravel examples
public function update(Request $request, User $user): void
{
    $user->update($request->validated());
    // No explicit return
}
```

### Never (PHP 8.1+)

```php
<?php
declare(strict_types=1);

// Function never returns (throws or exits)
function fail(string $message): never {
    throw new Exception($message);
}

function redirect(string $url): never {
    header("Location: $url");
    exit;
}

// Laravel example
public function abort(int $code, string $message): never
{
    abort($code, $message);
}
```

### Self and Static

```php
<?php
class Builder
{
    // Returns instance of same class
    public function where(string $column, $value): self {
        // ...
        return $this;
    }

    // Returns instance of called class (late static binding)
    public static function create(array $data): static {
        return new static($data);
    }
}
```

---

## Constructor Property Promotion (PHP 8.0+)

### Before PHP 8.0

```php
<?php
class User {
    private string $name;
    private string $email;
    private int $age;

    public function __construct(string $name, string $email, int $age) {
        $this->name = $name;
        $this->email = $email;
        $this->age = $age;
    }
}
```

### PHP 8.0+ (Shorter)

```php
<?php
class User {
    public function __construct(
        private string $name,
        private string $email,
        private int $age
    ) {}

    public function getName(): string {
        return $this->name;
    }
}

$user = new User('Alice', 'alice@example.com', 25);
```

### Laravel Model Example

```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    // Property types (PHP 7.4+)
    protected string $title;
    protected ?string $content = null;
    protected int $user_id;

    // Casts with types
    protected $casts = [
        'published_at' => 'datetime',
        'is_featured' => 'boolean',
    ];
}
```

---

## Real-World Laravel Examples

### Example 1: Service Class

```php
<?php
declare(strict_types=1);

namespace App\Services;

use App\Models\User;
use App\Models\Order;
use Illuminate\Support\Collection;

class OrderService
{
    public function __construct(
        private OrderRepository $repository
    ) {}

    // Type-hinted parameters and return
    public function createOrder(User $user, array $items): Order
    {
        return $this->repository->create([
            'user_id' => $user->id,
            'items' => $items,
            'total' => $this->calculateTotal($items),
        ]);
    }

    // Private helper with strict types
    private function calculateTotal(array $items): float
    {
        return collect($items)->sum(fn($item) => $item['price'] * $item['qty']);
    }

    // Nullable return
    public function findByNumber(string $orderNumber): ?Order
    {
        return $this->repository->findByNumber($orderNumber);
    }

    // Collection return type
    public function getRecentOrders(int $limit = 10): Collection
    {
        return $this->repository->recent($limit);
    }
}
```

### Example 2: Form Request

```php
<?php
declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreUserRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'unique:users'],
            'age' => ['required', 'integer', 'min:18'],
        ];
    }

    // Custom typed methods
    public function getName(): string
    {
        return $this->validated()['name'];
    }

    public function getAge(): int
    {
        return (int) $this->validated()['age'];
    }
}
```

### Example 3: API Controller

```php
<?php
declare(strict_types=1);

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class UserController extends Controller
{
    // Collection return
    public function index(): AnonymousResourceCollection
    {
        return UserResource::collection(User::paginate());
    }

    // Single resource
    public function show(int $id): UserResource
    {
        return new UserResource(User::findOrFail($id));
    }

    // JSON response
    public function store(StoreUserRequest $request): JsonResponse
    {
        $user = User::create($request->validated());

        return response()->json([
            'data' => new UserResource($user),
            'message' => 'User created successfully'
        ], 201);
    }

    // No content response
    public function destroy(int $id): JsonResponse
    {
        User::findOrFail($id)->delete();

        return response()->json(null, 204);
    }
}
```

---

## Type Juggling vs Strict Types

```php
<?php
// Without strict_types
function add(int $a, int $b): int {
    return $a + $b;
}

echo add("5", "10");  // 15 (strings coerced to ints)

// With strict_types
declare(strict_types=1);

function strictAdd(int $a, int $b): int {
    return $a + $b;
}

// strictAdd("5", "10");  // TypeError
echo strictAdd(5, 10);     // 15
```

---

## Best Practices

1. **Use `declare(strict_types=1)`** in all new files
2. **Type-hint everything** — parameters, returns, properties
3. **Use nullable types** (`?Type`) instead of type|null in PHP 7.x
4. **Prefer union types** over mixed when possible
5. **Document complex types** with PHPDoc when type system isn't enough
6. **Use constructor promotion** (PHP 8.0+) to reduce boilerplate

---

## Practice Exercises

### Exercise 1: Add Type Hints

```php
// Add strict types and type hints to this function
function calculateDiscount($price, $percentage) {
    return $price * (1 - $percentage / 100);
}
```

### Exercise 2: Refactor Service

```php
// Add types to this service class
class ProductService {
    public function __construct($repository) {}

    public function findById($id) {
        return $this->repository->find($id);
    }

    public function create($data) {
        return $this->repository->create($data);
    }
}
```

### Exercise 3: Union Types

```php
// Use union types for this function that accepts
// either a User model or user ID (int)
function getUserOrders($user) {
    // ...
}
```

---

## Key Takeaways

- **Type hints** improve code quality and catch errors early
- **Strict types mode** prevents automatic type coercion
- **Nullable types** (`?Type`) handle optional values
- **Union types** (`Type1|Type2`) allow multiple types (PHP 8+)
- **Constructor promotion** reduces boilerplate (PHP 8+)
- **Laravel extensively uses types** for DI and validation

---

**Next:** [12. Try-Catching Exceptions and PHP Errors](12_Try_Catch_Exceptions.md)
