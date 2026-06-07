# Service Container in Laravel

The service container is a powerful tool for managing class dependencies and performing dependency injection. It's one of the most fundamental aspects of the Laravel framework.

## Introduction to the Service Container

The Laravel service container is a tool for managing class dependencies and performing dependency injection. Dependency injection is a fancy phrase that essentially means: class dependencies are "injected" into the class via the constructor or, in some cases, setter methods.

```php
<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use App\Services\PaymentGateway;

class UserController extends Controller
{
    protected $users;
    protected $payment;

    public function __construct(UserRepository $users, PaymentGateway $payment)
    {
        $this->users = $users;
        $this->payment = $payment;
    }
}
```

In this example, the controller needs the `UserRepository` and `PaymentGateway` services. Instead of creating these dependencies manually, they are "injected" by the container.

## Binding

### Basic Binding

You can register bindings in service providers, typically in the `register` method:

```php
// In a service provider
public function register()
{
    $this->app->bind('HelpSpot\API', function ($app) {
        return new \HelpSpot\API($app->make('HttpClient'));
    });
}
```

### Binding Interfaces to Implementations

```php
$this->app->bind(
    \App\Contracts\PaymentGateway::class,
    \App\Services\StripePaymentGateway::class
);
```

### Binding Singletons

```php
// Register a singleton
$this->app->singleton('HelpSpot\API', function ($app) {
    return new \HelpSpot\API($app->make('HttpClient'));
});

// Register an existing instance as a singleton
$api = new \HelpSpot\API(new HttpClient);
$this->app->instance('HelpSpot\API', $api);
```

### Binding Primitives

```php
$this->app->when(PhotoController::class)
          ->needs('$storageKey')
          ->give('photo_storage_key');
```

### Contextual Binding

```php
$this->app->when(UserController::class)
          ->needs(PaymentGateway::class)
          ->give(StripePaymentGateway::class);

$this->app->when(AdminController::class)
          ->needs(PaymentGateway::class)
          ->give(PayPalPaymentGateway::class);
```

### Tagging

```php
$this->app->bind('SpeedReport', function () {
    //
});

$this->app->bind('MemoryReport', function () {
    //
});

$this->app->tag(['SpeedReport', 'MemoryReport'], 'reports');

// Resolve all services with a given tag
$this->app->tagged('reports');
```

## Resolving

### Resolving from the Container

```php
// Resolve by abstract name
$api = $this->app->make('HelpSpot\API');

// Resolve with array of constructor parameters
$api = $this->app->makeWith('HelpSpot\API', ['id' => 1]);

// Shorthand syntax
$api = app('HelpSpot\API');
$api = app()->make('HelpSpot\API');
$api = resolve('HelpSpot\API');
```

### Automatic Injection

The most common way to resolve dependencies is through constructor injection:

```php
public function __construct(UserRepository $users)
{
    $this->users = $users;
}
```

You can also use method injection in controller methods:

```php
public function show(Request $request, $id, UserRepository $users)
{
    $user = $users->find($id);
    return view('user.show', ['user' => $user]);
}
```

## Container Events

The service container fires events when it resolves objects:

```php
// In a service provider
$this->app->resolving(function ($object, $app) {
    // Called when container resolves any object
});

$this->app->resolving(HelpSpot\API::class, function ($api, $app) {
    // Called when container resolves objects of type "HelpSpot\API"
});

$this->app->afterResolving(HelpSpot\API::class, function ($api, $app) {
    // Called after container resolves objects of type "HelpSpot\API"
});
```

## PSR-11 Compatibility

Laravel's service container implements the PSR-11 interface:

```php
use Psr\Container\ContainerInterface;

Route::get('/', function (ContainerInterface $container) {
    $service = $container->get('Service');
    //
});
```

## Practical Examples

### Repository Pattern

```php
// Interface
namespace App\Repositories;

interface UserRepositoryInterface
{
    public function all();
    public function find($id);
    public function create(array $data);
}

// Implementation
namespace App\Repositories;

use App\Models\User;

class EloquentUserRepository implements UserRepositoryInterface
{
    public function all()
    {
        return User::all();
    }
    
    public function find($id)
    {
        return User::find($id);
    }
    
    public function create(array $data)
    {
        return User::create($data);
    }
}

// Binding in AppServiceProvider
public function register()
{
    $this->app->bind(
        \App\Repositories\UserRepositoryInterface::class,
        \App\Repositories\EloquentUserRepository::class
    );
}

// Usage in controller
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepositoryInterface;

class UserController extends Controller
{
    protected $users;
    
    public function __construct(UserRepositoryInterface $users)
    {
        $this->users = $users;
    }
    
    public function index()
    {
        $users = $this->users->all();
        return view('users.index', compact('users'));
    }
}
```

### Service Class

```php
// Service class
namespace App\Services;

use App\Models\Order;
use App\Services\PaymentGateway;
use App\Services\InventoryService;

class OrderService
{
    protected $paymentGateway;
    protected $inventory;
    
    public function __construct(PaymentGateway $paymentGateway, InventoryService $inventory)
    {
        $this->paymentGateway = $paymentGateway;
        $this->inventory = $inventory;
    }
    
    public function processOrder(array $items, array $paymentDetails)
    {
        // Check inventory
        foreach ($items as $item) {
            if (!$this->inventory->isAvailable($item['product_id'], $item['quantity'])) {
                throw new \Exception('Product not available');
            }
        }
        
        // Process payment
        $payment = $this->paymentGateway->charge(
            $paymentDetails['amount'],
            $paymentDetails['token']
        );
        
        // Create order
        $order = Order::create([
            'payment_id' => $payment->id,
            'amount' => $paymentDetails['amount'],
            'status' => 'completed',
        ]);
        
        // Update inventory
        foreach ($items as $item) {
            $this->inventory->decrement($item['product_id'], $item['quantity']);
            $order->items()->create($item);
        }
        
        return $order;
    }
}

// Usage in controller
public function store(Request $request, OrderService $orderService)
{
    $order = $orderService->processOrder(
        $request->input('items'),
        $request->input('payment')
    );
    
    return response()->json($order, 201);
}
```

## Advanced Container Concepts

### Extending Resolved Instances

```php
// In a service provider
$this->app->extend(PaymentGateway::class, function ($service, $app) {
    return new PaymentGatewayDecorator($service);
});
```

### Overriding Concrete Classes

```php
// In a service provider
$this->app->bind(ServiceClass::class, function ($app) {
    return new CustomServiceClass();
});
```

### Rebinding

```php
// In a service provider
$this->app->rebinding('cache', function ($app, $cache) {
    $app->make('views')->flush();
});
```

### Container Aware Classes

```php
namespace App\Services;

use Illuminate\Contracts\Container\Container;

class ReportGenerator
{
    protected $container;
    
    public function __construct(Container $container)
    {
        $this->container = $container;
    }
    
    public function generate()
    {
        $logger = $this->container->make('log');
        $logger->info('Generating report');
        
        // Generate report
    }
}
```

## Best Practices

1. **Prefer constructor injection** over method injection when possible
2. **Type-hint interfaces** instead of concrete implementations
3. **Keep service providers organized** by responsibility
4. **Use contextual binding** for complex dependency scenarios
5. **Avoid the service locator pattern** (calling `app()` or `resolve()` directly in your code)
6. **Use singletons judiciously** for services that should maintain state
7. **Leverage automatic resolution** when possible instead of manual binding
8. **Use container events** for cross-cutting concerns
9. **Consider using Laravel's built-in facades** for commonly used services
10. **Test your bindings** to ensure proper resolution

## References

- [Laravel Service Container Documentation](https://laravel.com/docs/12.x/container)
- [PSR-11: Container Interface](https://www.php-fig.org/psr/psr-11/)
- [Laravel Dependency Injection](https://laravel.com/docs/12.x/providers)