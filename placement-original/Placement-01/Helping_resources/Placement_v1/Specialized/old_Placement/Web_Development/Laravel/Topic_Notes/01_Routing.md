# Laravel Routing

## Introduction to Routing

Routing in Laravel is the mechanism that maps HTTP requests to specific controller actions or closures. The Laravel router allows you to define all the routes for your application in a clean, expressive manner.

All Laravel routes are defined in the route files within the `routes` directory:

- `routes/web.php` - Routes for web interface (sessions, CSRF protection)
- `routes/api.php` - Routes for API (stateless, rate limiting)
- `routes/console.php` - Console (Artisan) commands
- `routes/channels.php` - Broadcasting channels
- `routes/admin.php` - Custom route files (optional)

## Basic Route Definitions

### Basic GET Route

```php
use Illuminate\Support\Facades\Route;

Route::get('/greeting', function () {
    return 'Hello World';
});
```

### Available Router Methods

```php
// Basic HTTP verbs
Route::get($uri, $callback);
Route::post($uri, $callback);
Route::put($uri, $callback);
Route::patch($uri, $callback);
Route::delete($uri, $callback);
Route::options($uri, $callback);

// Register route for multiple HTTP verbs
Route::match(['get', 'post'], '/match', function () {
    return 'This responds to GET or POST';
});

// Register route for all HTTP verbs
Route::any('/any', function () {
    return 'This responds to any HTTP verb';
});
```

### Dependency Injection in Routes

```php
use Illuminate\Http\Request;

Route::get('/users', function (Request $request) {
    // Access request data
    $name = $request->input('name');
    
    return 'Hello, ' . $name;
});
```

### Redirect Routes

```php
// Simple redirect
Route::redirect('/here', '/there');

// With custom status code
Route::redirect('/here', '/there', 301);

// Permanent redirect (301)
Route::permanentRedirect('/here', '/there');
```

### View Routes

```php
// Simple view route
Route::view('/welcome', 'welcome');

// With data
Route::view('/welcome', 'welcome', ['name' => 'Taylor']);
```

## Route Parameters

### Required Parameters

```php
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
});
```

### Optional Parameters

```php
Route::get('/user/{name?}', function ($name = 'John') {
    return $name;
});
```

### Regular Expression Constraints

```php
// Single constraint
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
})->where('id', '[0-9]+');

// Multiple constraints
Route::get('/user/{id}/{name}', function ($id, $name) {
    return 'User '.$id.' with name '.$name;
})->where([
    'id' => '[0-9]+',
    'name' => '[a-z]+'
]);

// Common pattern constraints
Route::get('/user/{id}', function ($id) {
    return 'User '.$id;
})->whereNumber('id');

Route::get('/user/{name}', function ($name) {
    return 'User '.$name;
})->whereAlpha('name');

Route::get('/user/{id}/{slug}', function ($id, $slug) {
    return 'Post '.$id.' with slug '.$slug;
})->whereNumber('id')->whereAlphaNumeric('slug');

// Available pattern constraints
// whereAlpha()
// whereAlphaNumeric()
// whereNumber()
// whereUuid()
// whereUlid()
// whereIn(['foo', 'bar'])
```

### Global Constraints

```php
// In App\Providers\RouteServiceProvider
public function boot()
{
    Route::pattern('id', '[0-9]+');
}
```

### Encoded Forward Slashes

```php
Route::get('/search/{search}', function ($search) {
    return $search;
})->where('search', '.*');
```

## Named Routes

Named routes allow you to generate URLs or redirects for specific routes without being coupled to the actual URL.

```php
// Defining a named route
Route::get('/user/profile', function () {
    return 'Profile';
})->name('profile');

// Generating URLs for named routes
$url = route('profile');

// With parameters
Route::get('/user/{id}/profile', function ($id) {
    return 'Profile '.$id;
})->name('profile');

$url = route('profile', ['id' => 1]);

// Checking the current route
if ($request->routeIs('profile')) {
    // Current route name is "profile"
}
```

## Route Groups

Route groups allow you to share route attributes across multiple routes without defining those attributes on each individual route.

### Middleware

```php
Route::middleware(['first', 'second'])->group(function () {
    Route::get('/', function () {
        // Uses first & second middleware
    });

    Route::get('/user/profile', function () {
        // Uses first & second middleware
    });
});
```

### Controllers

```php
use App\Http\Controllers\OrderController;

Route::controller(OrderController::class)->group(function () {
    Route::get('/orders/{id}', 'show');
    Route::post('/orders', 'store');
});
```

### Route Prefixes

```php
Route::prefix('admin')->group(function () {
    Route::get('/users', function () {
        // Matches "/admin/users"
    });
});
```

### Name Prefixes

```php
Route::name('admin.')->group(function () {
    Route::get('/users', function () {
        // Route assigned name "admin.users"
    })->name('users');
});
```

### Combining Group Attributes

```php
Route::middleware(['auth'])
    ->prefix('admin')
    ->name('admin.')
    ->namespace('App\\Http\\Controllers\\Admin')
    ->group(function () {
        // All routes are prefixed with "/admin"
        // All routes have the "admin." name prefix
        // All routes use the "App\Http\Controllers\Admin" namespace
        // All routes use the "auth" middleware
    });
```

## Route Model Binding

### Implicit Binding

```php
use App\Models\User;

Route::get('/users/{user}', function (User $user) {
    return $user->email;
});
```

### Customizing The Key

```php
use App\Models\User;

// Using route parameter
Route::get('/users/{user:email}', function (User $user) {
    return $user;
});

// Using model property
// In App\Models\User
public function getRouteKeyName()
{
    return 'slug';
}
```

### Implicit Enum Binding

```php
enum Category: string
{
    case Fruits = 'fruits';
    case People = 'people';
}

Route::get('/categories/{category}', function (Category $category) {
    return $category->value;
});
```

### Explicit Binding

```php
// In App\Providers\RouteServiceProvider
public function boot()
{
    Route::bind('user', function ($value) {
        return User::where('name', $value)->firstOrFail();
    });
}

// Or for a specific route
Route::get('/users/{user}', function (User $user) {
    //
})->bind('user', function ($value) {
    return User::where('name', $value)->firstOrFail();
});
```

## Fallback Routes

```php
Route::fallback(function () {
    return response()->view('errors.404', [], 404);
});
```

## Rate Limiting

### Basic Rate Limiting

```php
// Define a named rate limiter
RateLimiter::for('global', function (Request $request) {
    return Limit::perMinute(1000);
});

// Apply to routes
Route::middleware(['throttle:global'])->group(function () {
    Route::get('/api/basic', function () {
        // Maximum 1000 requests per minute
    });
});
```

### Dynamic Rate Limiting

```php
RateLimiter::for('uploads', function (Request $request) {
    return $request->user()->vipCustomer()
                ? Limit::none()
                : Limit::perMinute(100);
});
```

### Segmenting Rate Limits

```php
RateLimiter::for('api', function (Request $request) {
    return Limit::perMinute(60)->by($request->user()?->id ?: $request->ip());
});
```

### Multiple Rate Limits

```php
RateLimiter::for('login', function (Request $request) {
    return [
        Limit::perMinute(500),
        Limit::perMinute(3)->by($request->input('email')),
    ];
});
```

## Form Method Spoofing

HTML forms only support GET and POST methods. To use other methods (PUT, PATCH, DELETE), you need to spoof them:

```html
<form action="/example" method="POST">
    @csrf
    @method('PUT')
    <!-- Form fields -->
</form>
```

## CORS (Cross-Origin Resource Sharing)

Laravel can automatically respond to CORS OPTIONS requests with values configured in `config/cors.php`:

```php
return [
    'paths' => ['api/*'],
    'allowed_methods' => ['*'],
    'allowed_origins' => ['*'],
    'allowed_origins_patterns' => [],
    'allowed_headers' => ['*'],
    'exposed_headers' => [],
    'max_age' => 0,
    'supports_credentials' => false,
];
```

## Route Caching

For improved performance in production:

```bash
# Generate route cache
php artisan route:cache

# Clear route cache
php artisan route:clear
```

Note: Route caching doesn't work with Closure-based routes. Use controller classes for all routes to use route caching.

## Route List

To see all registered routes:

```bash
php artisan route:list
```

## Best Practices

1. **Use named routes** for easier maintenance and refactoring
2. **Group related routes** to keep your code organized
3. **Use resource controllers** for standard CRUD operations
4. **Avoid Closure routes** in production (can't be cached)
5. **Keep route files organized** by splitting into multiple files for large applications
6. **Use route model binding** to automatically inject models
7. **Apply middleware at the group level** when possible
8. **Use route caching** in production
9. **Follow RESTful conventions** for API routes
10. **Document your routes** for team collaboration

## Common Patterns

### API Versioning

```php
// routes/api.php
Route::prefix('v1')->group(function () {
    Route::apiResource('users', Api\V1\UserController::class);
});

Route::prefix('v2')->group(function () {
    Route::apiResource('users', Api\V2\UserController::class);
});
```

### Admin Routes

```php
// routes/web.php
Route::prefix('admin')
    ->middleware(['auth', 'admin'])
    ->name('admin.')
    ->group(function () {
        Route::get('/dashboard', [AdminController::class, 'dashboard'])->name('dashboard');
        Route::resource('users', AdminUserController::class);
    });
```

### Route Resources

```php
// Basic resource route
Route::resource('photos', PhotoController::class);

// Generates these routes:
// GET /photos - index
// GET /photos/create - create
// POST /photos - store
// GET /photos/{photo} - show
// GET /photos/{photo}/edit - edit
// PUT/PATCH /photos/{photo} - update
// DELETE /photos/{photo} - destroy

// API resource route (no create/edit)
Route::apiResource('photos', PhotoController::class);

// Partial resource
Route::resource('photos', PhotoController::class)->only([
    'index', 'show'
]);

// Or except
Route::resource('photos', PhotoController::class)->except([
    'create', 'store', 'update', 'destroy'
]);
```

## References

- [Laravel Routing Documentation](https://laravel.com/docs/12.x/routing)
- [Laravel API Resource Routes](https://laravel.com/docs/12.x/controllers#resource-controllers)
- [Laravel Middleware Documentation](https://laravel.com/docs/12.x/middleware)