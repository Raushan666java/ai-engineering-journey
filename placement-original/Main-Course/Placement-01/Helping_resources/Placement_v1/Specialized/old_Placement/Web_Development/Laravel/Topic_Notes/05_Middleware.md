# Middleware in Laravel

Middleware provides a convenient mechanism for filtering HTTP requests entering your application. For example, Laravel includes middleware that verifies the user is authenticated. If not, the middleware will redirect the user to the login screen. However, if the user is authenticated, the middleware will allow the request to proceed further into the application.

## Introduction to Middleware

Middleware acts as a bridge between a request and a response. It's a series of "layers" that the HTTP request must pass through before reaching your application.

![Middleware Diagram](https://laravel.com/img/docs/middleware.png)

Each middleware can:
- Pass the request further into the application
- Perform actions before or after passing the request deeper into the application
- Terminate the request and return a response

## Creating Middleware

### Generating Middleware

You can create a new middleware using the `make:middleware` Artisan command:

```bash
php artisan make:middleware CheckAge
```

This will place a new `CheckAge` class within your `app/Http/Middleware` directory:

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckAge
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if ($request->age <= 200) {
            return redirect('home');
        }

        return $next($request);
    }
}
```

### Middleware Structure

The `handle` method receives two parameters:
1. `$request` - The HTTP request
2. `$next` - A closure that should be called to pass the request deeper into the application

In this example, the middleware only allows access if the `age` parameter is greater than 200. Otherwise, it redirects to the `home` URI.

### Before & After Middleware

Middleware can perform tasks before or after passing the request deeper into the application:

#### Before Middleware

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class BeforeMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        // Perform action before the request is handled...
        
        return $next($request);
    }
}
```

#### After Middleware

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AfterMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        
        // Perform action after the request is handled...
        
        return $response;
    }
}
```

## Registering Middleware

### Global Middleware

Global middleware runs during every HTTP request to your application. To register middleware as global, add it to the `$middleware` property in the `app/Http/Kernel.php` file:

```php
protected $middleware = [
    // \App\Http\Middleware\TrustHosts::class,
    \App\Http\Middleware\TrustProxies::class,
    \Illuminate\Http\Middleware\HandleCors::class,
    \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
    \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
    \App\Http\Middleware\TrimStrings::class,
    \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
];
```

### Route Middleware

Route middleware runs only on specific routes. To register route middleware, add it to the `$routeMiddleware` property in the `app/Http/Kernel.php` file:

```php
protected $middlewareAliases = [
    'auth' => \App\Http\Middleware\Authenticate::class,
    'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
    'auth.session' => \Illuminate\Session\Middleware\AuthenticateSession::class,
    'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
    'can' => \Illuminate\Auth\Middleware\Authorize::class,
    'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
    'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
    'signed' => \App\Http\Middleware\ValidateSignature::class,
    'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
    'age' => \App\Http\Middleware\CheckAge::class,
];
```

### Middleware Groups

Middleware groups allow you to group several middleware under a single key, making it convenient to apply them to routes:

```php
protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
        \Illuminate\Session\Middleware\StartSession::class,
        \Illuminate\View\Middleware\ShareErrorsFromSession::class,
        \App\Http\Middleware\VerifyCsrfToken::class,
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],

    'api' => [
        // \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
        \Illuminate\Routing\Middleware\ThrottleRequests::class.':api',
        \Illuminate\Routing\Middleware\SubstituteBindings::class,
    ],
];
```

## Applying Middleware

### To Routes

```php
// Single middleware
Route::get('/profile', function () {
    // ...
})->middleware('auth');

// Multiple middleware
Route::get('/profile', function () {
    // ...
})->middleware(['auth', 'verified']);

// Middleware with parameters
Route::get('/post/{id}', function ($id) {
    // ...
})->middleware('role:editor');

// Middleware group
Route::get('/dashboard', function () {
    // ...
})->middleware('web');
```

### To Route Groups

```php
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        // ...
    });
    
    Route::get('/account', function () {
        // ...
    });
});
```

### To Controllers

```php
class UserController extends Controller
{
    public function __construct()
    {
        // Apply to all methods
        $this->middleware('auth');
        
        // Apply to specific methods
        $this->middleware('log')->only('index');
        
        // Apply to all methods except
        $this->middleware('subscribed')->except(['store', 'update']);
    }
}
```

## Middleware Parameters

Sometimes your middleware may need additional parameters. You can pass these parameters to your middleware by appending them after the middleware name:

```php
// Route definition
Route::put('/post/{id}', function ($id) {
    // ...
})->middleware('role:editor,author');
```

```php
<?php

namespace App\Http\Middleware;

use Closure;

class RoleMiddleware
{
    public function handle($request, Closure $next, ...$roles)
    {
        if (! $request->user()->hasAnyRole($roles)) {
            // Redirect or abort...
            return redirect('home');
        }

        return $next($request);
    }
}
```

## Terminable Middleware

Sometimes a middleware may need to do some work after the HTTP response has been sent to the browser. For example, the "session" middleware writes the session data to storage after the response has been sent to the browser:

```php
<?php

namespace App\Http\Middleware;

use Closure;

class TerminableMiddleware
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
    
    public function terminate($request, $response)
    {
        // Perform action after response has been sent to browser...
    }
}
```

The `terminate` method should receive both the request and the response. Once you have defined a terminable middleware, you should add it to the list of route or global middleware in the `app/Http/Kernel.php` file.

## Common Laravel Middleware

### Authentication Middleware

```php
// app/Http/Middleware/Authenticate.php
public function handle($request, Closure $next, ...$guards)
{
    if ($this->auth->guard($guards[0] ?? null)->guest()) {
        return $request->expectsJson()
            ? response()->json(['message' => 'Unauthenticated.'], 401)
            : redirect()->guest(route('login'));
    }

    return $next($request);
}
```

### CSRF Protection Middleware

```php
// app/Http/Middleware/VerifyCsrfToken.php
public function handle($request, Closure $next)
{
    if (
        $this->isReading($request) ||
        $this->runningUnitTests() ||
        $this->inExceptArray($request) ||
        $this->tokensMatch($request)
    ) {
        return $this->addCookieToResponse($request, $next($request));
    }

    throw new TokenMismatchException('CSRF token mismatch.');
}
```

### Rate Limiting Middleware

```php
// Using the throttle middleware
Route::middleware(['throttle:60,1'])->group(function () {
    Route::get('/api/users', function () {
        // Maximum of 60 requests per minute...
    });
});
```

## Creating Custom Rate Limiters

```php
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter;

// In AppServiceProvider or RouteServiceProvider
public function boot()
{
    RateLimiter::for('api', function (Request $request) {
        return $request->user()
            ? Limit::perMinute(60)->by($request->user()->id)
            : Limit::perMinute(10)->by($request->ip());
    });
}

// Using the custom rate limiter
Route::middleware(['throttle:api'])->group(function () {
    Route::get('/api/users', function () {
        // ...
    });
});
```

## Middleware Sorting

Sometimes you may need middleware to execute in a specific order. You can specify this by setting the `$middlewarePriority` property in the `app/Http/Kernel.php` file:

```php
protected $middlewarePriority = [
    \Illuminate\Cookie\Middleware\EncryptCookies::class,
    \Illuminate\Session\Middleware\StartSession::class,
    \Illuminate\View\Middleware\ShareErrorsFromSession::class,
    \Illuminate\Contracts\Auth\Middleware\AuthenticatesRequests::class,
    \Illuminate\Routing\Middleware\ThrottleRequests::class,
    \Illuminate\Routing\Middleware\ThrottleRequestsWithRedis::class,
    \Illuminate\Contracts\Session\Middleware\AuthenticatesSessions::class,
    \Illuminate\Routing\Middleware\SubstituteBindings::class,
    \Illuminate\Auth\Middleware\Authorize::class,
];
```

## Best Practices

1. **Keep middleware focused** - Each middleware should have a single responsibility
2. **Use middleware for cross-cutting concerns** - Authentication, logging, CSRF protection, etc.
3. **Consider performance** - Middleware runs on every request, so keep it efficient
4. **Use parameters** - Make middleware flexible with parameters
5. **Group related middleware** - Use middleware groups for common combinations
6. **Order matters** - Be aware of the execution order of middleware
7. **Use terminable middleware** when appropriate - For tasks that should happen after the response is sent
8. **Test your middleware** - Write tests to ensure middleware behaves as expected

## Common Use Cases

### Localization Middleware

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\App;

class SetLocale
{
    public function handle($request, Closure $next)
    {
        if ($request->has('locale')) {
            App::setLocale($request->locale);
            session()->put('locale', $request->locale);
        } elseif (session()->has('locale')) {
            App::setLocale(session()->get('locale'));
        }

        return $next($request);
    }
}
```

### Logging Middleware

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Log;

class LogRequests
{
    public function handle($request, Closure $next)
    {
        Log::info('Request', [
            'method' => $request->method(),
            'url' => $request->fullUrl(),
            'ip' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        return $next($request);
    }
}
```

### Maintenance Mode Middleware

```php
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Http\Middleware\PreventRequestsDuringMaintenance as Middleware;

class PreventRequestsDuringMaintenance extends Middleware
{
    protected $except = [
        '/api/*',
        '/admin/*',
    ];
}
```

## References

- [Laravel Middleware Documentation](https://laravel.com/docs/12.x/middleware)
- [HTTP Kernel Source Code](https://github.com/laravel/framework/blob/12.x/src/Illuminate/Foundation/Http/Kernel.php)
- [Laravel Rate Limiting](https://laravel.com/docs/12.x/routing#rate-limiting)