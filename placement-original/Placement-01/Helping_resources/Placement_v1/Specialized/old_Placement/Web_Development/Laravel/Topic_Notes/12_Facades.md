# Facades in Laravel

Facades provide a static interface to classes that are available in the application's service container. They offer the benefit of a terse, expressive syntax while maintaining more testability and flexibility than traditional static methods.

## Introduction to Facades

Laravel facades provide a "static" interface to classes that are available in the application's service container. Laravel ships with many facades which provide access to almost all of Laravel's features.

```php
use Illuminate\Support\Facades\Cache;

Route::get('/users', function () {
    return Cache::get('users');
});
```

Behind the scenes, when you call a method on a facade like `Cache::get()`, Laravel resolves the Cache facade out of the service container and calls the `get` method on the underlying class.

## How Facades Work

Facades work through the use of PHP's magic method `__callStatic()`. This method intercepts static method calls and redirects them to the appropriate object from the service container.

```php
<?php

namespace Illuminate\Support\Facades;

abstract class Facade
{
    // ...

    /**
     * Handle dynamic, static calls to the object.
     *
     * @param  string  $method
     * @param  array  $args
     * @return mixed
     */
    public static function __callStatic($method, $args)
    {
        $instance = static::getFacadeRoot();

        return $instance->$method(...$args);
    }
    
    // ...
}
```

Each facade class defines a `getFacadeAccessor` method that returns the name of the service container binding:

```php
<?php

namespace Illuminate\Support\Facades;

class Cache extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'cache';
    }
}
```

## Common Laravel Facades

Laravel provides many facades for its core services:

### Cache

```php
use Illuminate\Support\Facades\Cache;

// Store an item in the cache
Cache::put('key', 'value', $seconds);

// Retrieve an item from the cache
$value = Cache::get('key');

// Retrieve an item or return a default value
$value = Cache::get('key', 'default');

// Store an item forever
Cache::forever('key', 'value');

// Remove an item from the cache
Cache::forget('key');

// Clear the entire cache
Cache::flush();
```

### Route

```php
use Illuminate\Support\Facades\Route;

// Define a route
Route::get('/users', [UserController::class, 'index']);

// Named route
Route::get('/user/{id}', [UserController::class, 'show'])->name('user.show');

// Route groups
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});

// Current route information
$name = Route::currentRouteName();
$action = Route::currentRouteAction();
```

### Auth

```php
use Illuminate\Support\Facades\Auth;

// Get the authenticated user
$user = Auth::user();

// Check if the user is authenticated
if (Auth::check()) {
    // User is logged in
}

// Attempt to authenticate a user
if (Auth::attempt(['email' => $email, 'password' => $password])) {
    // Authentication successful
}

// Log out the user
Auth::logout();
```

### DB

```php
use Illuminate\Support\Facades\DB;

// Query builder
$users = DB::table('users')->where('active', 1)->get();

// Raw queries
$users = DB::select('select * from users where active = ?', [1]);

// Transactions
DB::transaction(function () {
    DB::table('users')->update(['votes' => 1]);
    DB::table('posts')->delete();
});
```

### Log

```php
use Illuminate\Support\Facades\Log;

// Log messages at different levels
Log::emergency($message);
Log::alert($message);
Log::critical($message);
Log::error($message);
Log::warning($message);
Log::notice($message);
Log::info($message);
Log::debug($message);

// Log with context data
Log::info('User failed to login.', ['id' => $user->id]);
```

### Storage

```php
use Illuminate\Support\Facades\Storage;

// Get a disk instance
$disk = Storage::disk('s3');

// Store a file
Storage::put('file.txt', 'Contents');

// Get a file's contents
$contents = Storage::get('file.txt');

// Check if a file exists
if (Storage::exists('file.txt')) {
    // File exists
}

// Delete a file
Storage::delete('file.txt');
```

### Validator

```php
use Illuminate\Support\Facades\Validator;

// Create a validator
$validator = Validator::make($request->all(), [
    'name' => 'required|max:255',
    'email' => 'required|email|unique:users',
    'password' => 'required|min:6|confirmed',
]);

// Check if validation fails
if ($validator->fails()) {
    return redirect()->back()->withErrors($validator);
}
```

### View

```php
use Illuminate\Support\Facades\View;

// Return a view
return View::make('greeting', ['name' => 'James']);

// Check if a view exists
if (View::exists('emails.customer')) {
    // View exists
}

// Share data with all views
View::share('key', 'value');
```

### URL

```php
use Illuminate\Support\Facades\URL;

// Generate a URL
$url = URL::to('/posts');

// Generate a URL for a named route
$url = URL::route('user.profile', ['id' => 1]);

// Generate a URL for a controller action
$url = URL::action([UserController::class, 'profile'], ['id' => 1]);

// Generate a signed URL
$url = URL::signedRoute('unsubscribe', ['user' => 1]);

// Generate a temporary signed URL
$url = URL::temporarySignedRoute(
    'unsubscribe', now()->addMinutes(30), ['user' => 1]
);
```

### Config

```php
use Illuminate\Support\Facades\Config;

// Get a configuration value
$value = Config::get('app.timezone');

// Get a configuration value with a default
$value = Config::get('app.timezone', 'UTC');

// Set a configuration value at runtime
Config::set('app.timezone', 'America/Chicago');
```

## Real-Time Facades

Laravel allows you to create real-time facades for any class by prefixing the namespace with `Facades`:

```php
<?php

namespace App\Services;

class PaymentProcessor
{
    public function process($amount)
    {
        // Process payment
    }
}
```

Instead of injecting this class, you can use a real-time facade:

```php
use Facades\App\Services\PaymentProcessor;

Route::get('/payment', function () {
    PaymentProcessor::process(100);
});
```

Behind the scenes, Laravel will resolve the class from the container and call the method dynamically.

## Creating Custom Facades

You can create your own facades for your application's services:

1. Create a facade class:

```php
<?php

namespace App\Facades;

use Illuminate\Support\Facades\Facade;

class Calculator extends Facade
{
    /**
     * Get the registered name of the component.
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return 'calculator';
    }
}
```

2. Register the binding in a service provider:

```php
<?php

namespace App\Providers;

use App\Services\Calculator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('calculator', function ($app) {
            return new Calculator();
        });
    }
}
```

3. Add a facade alias in `config/app.php`:

```php
'aliases' => [
    // ...
    'Calculator' => App\Facades\Calculator::class,
],
```

4. Use your facade:

```php
use App\Facades\Calculator;

Route::get('/calculate', function () {
    return Calculator::add(2, 3);
});
```

## Testing with Facades

Laravel makes it easy to mock facades in your tests:

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_cache_facade()
    {
        // Mock the Cache facade
        Cache::shouldReceive('get')
            ->with('key')
            ->once()
            ->andReturn('value');
            
        // Call code that uses the Cache facade
        $value = Cache::get('key');
        
        // Assert the result
        $this->assertEquals('value', $value);
    }
}
```

## Facade vs. Dependency Injection

### Advantages of Facades

1. **Concise syntax**: Facades provide a terse, expressive syntax
2. **Easy to use**: No need to configure constructor parameters or type hints
3. **Testability**: Laravel facades can be easily mocked in tests

### Advantages of Dependency Injection

1. **Explicit dependencies**: Dependencies are clearly defined in the constructor
2. **More flexibility**: Easier to swap implementations or pass different parameters
3. **Better testability**: Dependencies can be easily mocked without static method mocking

### When to Use Each

- **Use facades** for quick access to Laravel services, especially in controllers and routes
- **Use dependency injection** for services that might need different implementations or configurations

```php
// Using a facade
use Illuminate\Support\Facades\Cache;

class UserController extends Controller
{
    public function index()
    {
        $users = Cache::remember('users', 60, function () {
            return User::all();
        });
        
        return view('users.index', compact('users'));
    }
}

// Using dependency injection
use Illuminate\Contracts\Cache\Repository as Cache;

class UserController extends Controller
{
    protected $cache;
    
    public function __construct(Cache $cache)
    {
        $this->cache = $cache;
    }
    
    public function index()
    {
        $users = $this->cache->remember('users', 60, function () {
            return User::all();
        });
        
        return view('users.index', compact('users'));
    }
}
```

## Best Practices

1. **Understand what's happening**: Remember that facades are just static interfaces to container services
2. **Use appropriate imports**: Always import facades at the top of your file
3. **Consider readability**: Choose between facades and dependency injection based on what makes your code more readable
4. **Be consistent**: Try to be consistent in your approach across your application
5. **Test properly**: Make sure you know how to mock facades in your tests
6. **Use real-time facades** for your own services when appropriate
7. **Don't overuse**: Not everything needs to be a facade
8. **Know the alternatives**: Be familiar with both facades and dependency injection
9. **Use IDE helpers**: Install Laravel IDE helper for better autocompletion
10. **Read the documentation**: Understand what methods are available on each facade

## References

- [Laravel Facades Documentation](https://laravel.com/docs/12.x/facades)
- [Laravel Service Container Documentation](https://laravel.com/docs/12.x/container)
- [Laravel Testing Documentation](https://laravel.com/docs/12.x/testing)