# Request Lifecycle in Laravel

Understanding the Laravel request lifecycle is crucial for effective development. This guide explains how Laravel processes requests from start to finish.

## Entry Point: public/index.php

All requests to a Laravel application enter through the `public/index.php` file. This file serves as the entry point for all HTTP requests.

```php
// public/index.php

// Load the composer autoloader
require __DIR__.'/../vendor/autoload.php';

// Bootstrap the application
$app = require_once __DIR__.'/../bootstrap/app.php';

// Get the HTTP kernel instance
$kernel = $app->make(Illuminate\Contracts\Http\Kernel::class);

// Handle the incoming request and get the response
$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

// Send the response to the browser
$response->send();

// Perform any final actions
$kernel->terminate($request, $response);
```

## Bootstrap Process

The bootstrap process begins in `bootstrap/app.php`, which creates the Laravel application instance:

```php
// bootstrap/app.php

$app = new Illuminate\Foundation\Application(
    $_ENV['APP_BASE_PATH'] ?? dirname(__DIR__)
);

// Register container bindings
$app->singleton(
    Illuminate\Contracts\Http\Kernel::class,
    App\Http\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Console\Kernel::class,
    App\Console\Kernel::class
);

$app->singleton(
    Illuminate\Contracts\Debug\ExceptionHandler::class,
    App\Exceptions\Handler::class
);

return $app;
```

## HTTP Kernel

The HTTP kernel (`App\Http\Kernel`) serves as a central location that all requests flow through. It defines middleware that requests must pass through before being handled by the application.

```php
// app/Http/Kernel.php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * @var array<int, class-string|string>
     */
    protected $middleware = [
        // \App\Http\Middleware\TrustHosts::class,
        \App\Http\Middleware\TrustProxies::class,
        \Illuminate\Http\Middleware\HandleCors::class,
        \App\Http\Middleware\PreventRequestsDuringMaintenance::class,
        \Illuminate\Foundation\Http\Middleware\ValidatePostSize::class,
        \App\Http\Middleware\TrimStrings::class,
        \Illuminate\Foundation\Http\Middleware\ConvertEmptyStringsToNull::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array<string, array<int, class-string|string>>
     */
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

    /**
     * The application's middleware aliases.
     *
     * @var array<string, class-string|string>
     */
    protected $middlewareAliases = [
        'auth' => \App\Http\Middleware\Authenticate::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        // ...
    ];
}
```

## Service Provider Registration

After the application instance is created, service providers are registered. This happens in the `Illuminate\Foundation\Application` class:

```php
// Illuminate\Foundation\Application

protected function registerBaseServiceProviders()
{
    $this->register(new EventServiceProvider($this));
    $this->register(new LogServiceProvider($this));
    $this->register(new RoutingServiceProvider($this));
}

public function registerConfiguredProviders()
{
    $providers = Collection::make($this->config['app.providers'])
        ->partition(function ($provider) {
            return strpos($provider, 'Illuminate\\') === 0;
        });

    $providers->splice(1, 0, [$this->make(PackageManifest::class)->providers()]);

    (new ProviderRepository($this, new Filesystem, $this->getCachedServicesPath()))
        ->load($providers->collapse()->toArray());
}
```

Service providers are registered in two phases:
1. **Register phase**: Basic bindings are registered in the container
2. **Boot phase**: After all providers are registered, they are booted

## Request Handling

Once the application is bootstrapped, the request is handled by the HTTP kernel's `handle` method:

```php
// Illuminate\Foundation\Http\Kernel

public function handle($request)
{
    try {
        $request->enableHttpMethodParameterOverride();

        $response = $this->sendRequestThroughRouter($request);
    } catch (Exception $e) {
        $this->reportException($e);

        $response = $this->renderException($request, $e);
    } catch (Throwable $e) {
        $this->reportException($e = new FatalThrowableError($e));

        $response = $this->renderException($request, $e);
    }

    $this->app['events']->dispatch(
        new RequestHandled($request, $response)
    );

    return $response;
}
```

## Middleware Pipeline

Before the request reaches the route handler, it passes through a series of middleware defined in the HTTP kernel:

```php
// Illuminate\Foundation\Http\Kernel

protected function sendRequestThroughRouter($request)
{
    $this->app->instance('request', $request);

    Facade::clearResolvedInstance('request');

    $this->bootstrap();

    return (new Pipeline($this->app))
        ->send($request)
        ->through($this->app->shouldSkipMiddleware() ? [] : $this->middleware)
        ->then($this->dispatchToRouter());
}
```

The middleware pipeline is a series of "layers" that the request must pass through:

1. Global middleware (defined in `$middleware`)
2. Route middleware groups (defined in `$middlewareGroups`)
3. Route-specific middleware (applied to individual routes)

## Route Matching

After passing through the global middleware, the request is dispatched to the router, which matches it against defined routes:

```php
// Illuminate\Routing\Router

public function dispatch(Request $request)
{
    $this->currentRequest = $request;

    return $this->dispatchToRoute($request);
}

public function dispatchToRoute(Request $request)
{
    return $this->runRoute($request, $this->findRoute($request));
}

protected function findRoute($request)
{
    $this->current = $route = $this->routes->match($request);

    $this->container->instance(Route::class, $route);

    return $route;
}
```

## Controller Dispatch

Once a route is matched, the router dispatches the request to the appropriate controller action or closure:

```php
// Illuminate\Routing\Router

protected function runRoute(Request $request, Route $route)
{
    $request->setRouteResolver(function () use ($route) {
        return $route;
    });

    $this->events->dispatch(new RouteMatched($route, $request));

    return $this->prepareResponse($request,
        $this->runRouteWithinStack($route, $request)
    );
}

protected function runRouteWithinStack(Route $route, Request $request)
{
    $shouldSkipMiddleware = $this->container->bound('middleware.disable') &&
                            $this->container->make('middleware.disable') === true;

    $middleware = $shouldSkipMiddleware ? [] : $this->gatherRouteMiddleware($route);

    return (new Pipeline($this->container))
        ->send($request)
        ->through($middleware)
        ->then(function ($request) use ($route) {
            return $this->prepareResponse(
                $request, $route->run()
            );
        });
}
```

## Response Generation

The controller action or route closure generates a response, which is then prepared by the router:

```php
// Illuminate\Routing\Router

public function prepareResponse($request, $response)
{
    return static::toResponse($request, $response);
}

public static function toResponse($request, $response)
{
    if ($response instanceof Responsable) {
        $response = $response->toResponse($request);
    }

    if ($response instanceof PsrResponseInterface) {
        $response = (new HttpFoundationFactory)->createResponse($response);
    } elseif ($response instanceof Model && $response->wasRecentlyCreated) {
        $response = new JsonResponse($response, 201);
    } elseif (! $response instanceof SymfonyResponse &&
               ($response === null || is_string($response) || is_array($response) || $response instanceof Arrayable ||
                $response instanceof Jsonable || $response instanceof JsonSerializable ||
                $response instanceof ArrayObject || $response instanceof Collection)) {
        $response = new Response($response);
    } elseif (! $response instanceof SymfonyResponse) {
        $response = new Response($response, 200, ['Content-Type' => 'text/html']);
    }

    if ($response->getStatusCode() === Response::HTTP_NOT_MODIFIED) {
        $response->setNotModified();
    }

    return $response->prepare($request);
}
```

## Middleware (Again, in Reverse)

After the response is generated, it passes back through the middleware stack in reverse order. This allows middleware to modify the response before it's sent to the browser.

## Sending the Response

Finally, the response is sent to the browser:

```php
// public/index.php

$response->send();
```

The `send` method outputs the response content and HTTP headers:

```php
// Symfony\Component\HttpFoundation\Response

public function send()
{
    $this->sendHeaders();
    $this->sendContent();

    if (\function_exists('fastcgi_finish_request')) {
        fastcgi_finish_request();
    } elseif (!\in_array(\PHP_SAPI, ['cli', 'phpdbg'], true)) {
        static::closeOutputBuffers(0, true);
    }

    return $this;
}
```

## Termination

After the response is sent, the `terminate` method is called on the kernel:

```php
// public/index.php

$kernel->terminate($request, $response);
```

This allows middleware with a `terminate` method to perform any final actions:

```php
// Illuminate\Foundation\Http\Kernel

public function terminate($request, $response)
{
    $this->terminateMiddleware($request, $response);

    $this->app->terminate();
}

protected function terminateMiddleware($request, $response)
{
    $middlewares = $this->app->shouldSkipMiddleware() ? [] : array_merge(
        $this->gatherRouteMiddleware($request),
        $this->middleware
    );

    foreach ($middlewares as $middleware) {
        if (! is_string($middleware)) {
            continue;
        }

        [$name] = $this->parseMiddleware($middleware);

        $instance = $this->app->make($name);

        if (method_exists($instance, 'terminate')) {
            $instance->terminate($request, $response);
        }
    }
}
```

## Console Kernel

For console commands, a similar but simplified lifecycle is followed using the console kernel:

```php
// Illuminate\Foundation\Console\Kernel

protected function bootstrap()
{
    if (! $this->app->hasBeenBootstrapped()) {
        $this->app->bootstrapWith($this->bootstrappers());
    }

    $this->app->loadDeferredProviders();

    if (! $this->commandsLoaded) {
        $this->commands();

        $this->commandsLoaded = true;
    }
}

public function handle($input, $output = null)
{
    try {
        $this->bootstrap();

        return $this->getArtisan()->run($input, $output);
    } catch (Exception $e) {
        $this->reportException($e);

        $this->renderException($output, $e);

        return 1;
    } catch (Throwable $e) {
        $e = new FatalThrowableError($e);

        $this->reportException($e);

        $this->renderException($output, $e);

        return 1;
    }
}
```

## Request Lifecycle Diagram

```
┌─────────────────────┐
│ public/index.php    │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Bootstrap           │
│ (bootstrap/app.php) │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Service Providers   │
│ (Register)          │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Service Providers   │
│ (Boot)              │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Global Middleware   │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Route Middleware    │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Route Matching      │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Controller/Closure  │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Response Generation │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Middleware (Reverse)│
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Response Sent       │
└───────────┬─────────┘
            │
            ▼
┌─────────────────────┐
│ Termination         │
└─────────────────────┘
```

## Key Points to Remember

1. **Entry Point**: All requests enter through `public/index.php`
2. **Application Instance**: Created in `bootstrap/app.php`
3. **Service Providers**: Registered and booted during bootstrap
4. **Middleware Pipeline**: Requests pass through global and route middleware
5. **Route Matching**: The router matches the request to a defined route
6. **Controller Dispatch**: The matched route is dispatched to a controller or closure
7. **Response Generation**: The controller/closure generates a response
8. **Middleware (Again)**: The response passes back through middleware in reverse
9. **Response Sent**: The response is sent to the browser
10. **Termination**: Final cleanup tasks are performed

## References

- [Laravel Request Lifecycle Documentation](https://laravel.com/docs/12.x/lifecycle)
- [Laravel Middleware Documentation](https://laravel.com/docs/12.x/middleware)
- [Laravel Service Providers Documentation](https://laravel.com/docs/12.x/providers)