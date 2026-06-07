# 08. Static, New Object, and Laravel Auto-Resolving (5 min)

## Overview

Laravel extensively uses **static methods**, **dependency injection**, and the **service container** to manage object creation. Understanding when to use `new`, static calls, or auto-resolving is crucial for writing Laravel applications.

---

## Key Concepts

### 1. Static Methods

- Called on the class itself, not on instances
- Common in Laravel facades and Eloquent models
- Useful for utility functions and factory methods

### 2. New Object (Manual Instantiation)

- Direct object creation using `new`
- You manage all dependencies manually
- Less common in Laravel (prefer DI)

### 3. Laravel Auto-Resolving (Dependency Injection)

- Service container automatically creates and injects dependencies
- Used in controllers, middleware, commands
- Most Laravel-idiomatic approach

---

## Static Methods in PHP

### Basic Static Usage

```php
<?php
class MathHelper {
    public static int $counter = 0;

    public static function add(int $a, int $b): int {
        self::$counter++;
        return $a + $b;
    }

    public static function getCounter(): int {
        return self::$counter;
    }
}

// Call without creating instance
echo MathHelper::add(5, 3);        // 8
echo MathHelper::add(10, 20);      // 30
echo MathHelper::getCounter();     // 2
```

### Static vs Instance Methods

```php
<?php
class User {
    public function __construct(
        public string $name,
        public string $email
    ) {}

    // Instance method (requires object)
    public function greet(): string {
        return "Hello, I'm {$this->name}";
    }

    // Static method (no object needed)
    public static function create(array $data): self {
        return new self($data['name'], $data['email']);
    }
}

// Instance method
$user = new User('Alice', 'alice@example.com');
echo $user->greet();  // Hello, I'm Alice

// Static factory method
$user2 = User::create(['name' => 'Bob', 'email' => 'bob@example.com']);
echo $user2->greet(); // Hello, I'm Bob
```

---

## Static in Laravel (Eloquent & Facades)

### Eloquent Static Methods

```php
<?php
use App\Models\User;

// All these look static but aren't really
$users = User::all();
$user = User::find(1);
$user = User::where('active', 1)->first();
$user = User::create(['name' => 'Alice', 'email' => 'alice@example.com']);

// How it works:
// Eloquent uses __callStatic magic method
// Forwards static calls to query builder instance
```

### Behind the Scenes

```php
<?php
namespace Illuminate\Database\Eloquent;

abstract class Model {
    // Handles static calls
    public static function __callStatic($method, $parameters) {
        return (new static)->$method(...$parameters);
    }

    // Creates query builder instance
    public function newQuery() {
        return $this->registerGlobalScopes($this->newQueryWithoutScopes());
    }
}

// When you call User::where()
// It creates new User(), then calls where() on the query builder
```

### Laravel Facades (Static Proxies)

```php
<?php
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

// These look static but proxy to container instances
Cache::put('key', 'value', 3600);
$value = Cache::get('key');

DB::table('users')->where('active', 1)->get();

Log::info('User logged in', ['user_id' => 1]);

// Facade resolves: Cache::getFacadeAccessor() returns 'cache'
// Then resolves 'cache' from service container
```

---

## Manual Object Creation (new)

### Basic new Keyword

```php
<?php
class UserService {
    public function __construct(
        private UserRepository $repository,
        private MailService $mailer
    ) {}
}

// Manual instantiation - you handle dependencies
$repository = new UserRepository();
$mailer = new MailService();
$service = new UserService($repository, $mailer);
```

### When to Use new

```php
<?php
// 1. Value objects and DTOs
$address = new Address('123 Main St', 'City', '12345');

// 2. Exceptions
throw new \Exception('Something went wrong');
throw new ValidationException('Invalid email');

// 3. Simple objects without dependencies
$collection = new Collection([1, 2, 3]);
$carbon = new Carbon('2024-01-01');

// 4. When you need multiple instances
$request1 = new HttpRequest('GET', '/users');
$request2 = new HttpRequest('POST', '/orders');
```

---

## Laravel Auto-Resolving (Dependency Injection)

### Constructor Injection (Most Common)

```php
<?php
namespace App\Http\Controllers;

use App\Services\UserService;
use App\Repositories\UserRepository;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Laravel automatically injects UserService
    public function __construct(
        private UserService $userService
    ) {}

    public function index() {
        $users = $this->userService->getAllActive();
        return view('users.index', compact('users'));
    }

    // Method injection: Request is auto-resolved
    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
        ]);

        $user = $this->userService->create($validated);
        return redirect()->route('users.show', $user);
    }
}
```

### Service Container Basics

```php
<?php
// The service container is the core of Laravel's DI

// app() helper resolves from container
$service = app(UserService::class);
$cache = app('cache');

// resolve() helper (same as app)
$service = resolve(UserService::class);

// Container make method
$service = app()->make(UserService::class);
```

### Binding to Container

```php
<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Contracts\PaymentGatewayInterface;
use App\Services\StripePaymentGateway;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Simple binding
        $this->app->bind(UserService::class, function ($app) {
            return new UserService(
                $app->make(UserRepository::class)
            );
        });

        // Singleton (same instance every time)
        $this->app->singleton(UserService::class, function ($app) {
            return new UserService(
                $app->make(UserRepository::class)
            );
        });

        // Interface to implementation
        $this->app->bind(
            PaymentGatewayInterface::class,
            StripePaymentGateway::class
        );
    }
}
```

### Auto-Resolution Example

```php
<?php
// Without binding, Laravel auto-resolves if possible
class UserService {
    public function __construct(
        private UserRepository $repository,  // Auto-resolved
        private MailService $mailer          // Auto-resolved
    ) {}
}

class UserRepository {
    public function __construct(
        private ConnectionInterface $db  // Must be bound (interface)
    ) {}
}

// In controller:
public function __construct(UserService $service) {
    // Laravel resolves UserService
    // UserService needs UserRepository
    // UserRepository needs ConnectionInterface (bound in provider)
    // All resolved automatically!
}
```

---

## Advanced: Method Injection

```php
<?php
class UserController extends Controller
{
    // Each method can inject different dependencies
    public function index(UserService $service) {
        return $service->getAllActive();
    }

    public function store(
        Request $request,
        UserService $service,
        LoggerInterface $logger
    ) {
        $logger->info('Creating user');
        $user = $service->create($request->validated());
        return response()->json($user, 201);
    }
}
```

---

## Comparison Table

| Approach           | When to Use                                    | Example                             |
| ------------------ | ---------------------------------------------- | ----------------------------------- |
| **Static**         | Facades, Eloquent queries, utility functions   | `User::find(1)`                     |
| **new**            | Value objects, exceptions, simple classes      | `new Address(...)`                  |
| **Constructor DI** | Services, repositories, main dependencies      | `__construct(UserService $s)`       |
| **Method DI**      | Per-method dependencies like Request           | `store(Request $r, UserService $s)` |
| **app()**          | Manual resolution, testing, dynamic resolution | `app(UserService::class)`           |

---

## Real-World Examples

### Example 1: Payment Processing

```php
<?php
namespace App\Services;

use App\Contracts\PaymentGatewayInterface;
use App\Models\Order;
use Illuminate\Support\Facades\Log;

class OrderService
{
    // DI: Gateway is injected
    public function __construct(
        private PaymentGatewayInterface $gateway
    ) {}

    public function processOrder(Order $order): bool
    {
        // Static facade
        Log::info('Processing order', ['order_id' => $order->id]);

        try {
            // Use injected gateway
            $result = $this->gateway->charge($order->total);

            // Static Eloquent
            $order->status = 'paid';
            $order->save();

            return true;
        } catch (\Exception $e) {
            // new for exceptions
            throw new PaymentException(
                "Payment failed: {$e->getMessage()}"
            );
        }
    }
}
```

### Example 2: Testing with DI

```php
<?php
namespace Tests\Unit;

use App\Services\UserService;
use App\Repositories\UserRepository;
use Tests\TestCase;
use Mockery;

class UserServiceTest extends TestCase
{
    public function test_creates_user()
    {
        // Mock repository
        $repo = Mockery::mock(UserRepository::class);
        $repo->shouldReceive('create')
             ->once()
             ->andReturn(new User(['id' => 1, 'name' => 'Test']));

        // Manual instantiation with mock (DI makes this possible)
        $service = new UserService($repo);

        $user = $service->create(['name' => 'Test']);

        $this->assertEquals(1, $user->id);
    }
}
```

---

## Common Patterns

### Pattern 1: Factory with Static

```php
<?php
class User extends Model
{
    // Static factory method
    public static function createFromSocialAuth(array $data): self
    {
        return self::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'provider' => $data['provider'],
            'provider_id' => $data['id'],
        ]);
    }
}

// Usage
$user = User::createFromSocialAuth($githubData);
```

### Pattern 2: Facade + DI

```php
<?php
use Illuminate\Support\Facades\Cache;

class PostService
{
    public function __construct(
        private PostRepository $repository  // DI
    ) {}

    public function getFeatured(): Collection
    {
        // Facade for caching
        return Cache::remember('featured_posts', 3600, function () {
            // DI repository
            return $this->repository->getFeatured();
        });
    }
}
```

---

## Best Practices

1. **Prefer DI over new** for services and repositories
2. **Use facades** for Laravel services (Cache, Log, DB)
3. **Use static sparingly** for true utility functions
4. **Always type-hint** in constructors for auto-resolution
5. **Bind interfaces** in service providers, not implementations
6. **Test with mocks** made possible by DI

---

## Practice Exercises

### Exercise 1: Convert new to DI

```php
// Before (bad)
class OrderController {
    public function store(Request $request) {
        $service = new OrderService();
        $order = $service->create($request->all());
        return response()->json($order);
    }
}

// TODO: Refactor to use DI
```

### Exercise 2: Create a Service with DI

```php
// Create NotificationService that injects:
// - MailService
// - SmsService
// And has methods to send notifications
```

### Exercise 3: Bind Interface

```php
// Create PaymentGatewayInterface
// Implement StripeGateway
// Bind in AppServiceProvider
// Inject in OrderService
```

---

## Key Takeaways

- **Static methods** are common in Laravel (Eloquent, facades) but often proxy to instances
- **new** is fine for value objects and exceptions, avoid for services
- **Dependency Injection** is Laravel's preferred pattern for service/repository management
- **Service container** handles auto-resolution and makes testing easier
- **Type-hint everything** in constructors for automatic resolution

---

**Next:** [09. Callback Functions and Closures](09_Callbacks_and_Closures.md)
