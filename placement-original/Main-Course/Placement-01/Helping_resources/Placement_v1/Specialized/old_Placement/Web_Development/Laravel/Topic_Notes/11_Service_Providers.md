# Service Providers in Laravel

Service providers are the central place to configure your application. They are responsible for bootstrapping all of Laravel's components, such as the database, queue, validation, and routing components.

## Introduction to Service Providers

Service providers are the central place of all Laravel application bootstrapping. Your own application, as well as all of Laravel's core services, are bootstrapped via service providers.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Register bindings in the container
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Bootstrap code after all services are registered
    }
}
```

## Writing Service Providers

### Basic Structure

All service providers extend the `Illuminate\Support\ServiceProvider` class. Most service providers contain a `register` and a `boot` method.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\Stripe;

class PaymentServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(Stripe::class, function ($app) {
            return new Stripe($app->make('config')->get('services.stripe.secret'));
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Bootstrap code
    }
}
```

### The Register Method

The `register` method is where you should bind things into the service container. You should never attempt to register any event listeners, routes, or any other functionality within the `register` method.

```php
public function register(): void
{
    // Simple binding
    $this->app->bind('translator', function ($app) {
        return new Translator($app['translation.loader'], $app['config']['app.locale']);
    });
    
    // Singleton binding
    $this->app->singleton('cache', function ($app) {
        return new CacheManager($app);
    });
    
    // Binding an interface to an implementation
    $this->app->bind(
        \App\Contracts\PaymentGateway::class,
        \App\Services\StripePaymentGateway::class
    );
}
```

### The Boot Method

The `boot` method is called after all other service providers have been registered, meaning you have access to all other services that have been registered by the framework.

```php
public function boot(): void
{
    // Use other services that have been registered
    $translator = $this->app->make('translator');
    
    // Register view composers
    view()->composer('dashboard', function ($view) {
        $view->with('stats', $this->getStats());
    });
    
    // Register event listeners
    \Event::listen('user.registered', function ($user) {
        // Send welcome email
    });
    
    // Register validation rules
    \Validator::extend('strong_password', function ($attribute, $value, $parameters, $validator) {
        return preg_match('/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/', $value);
    });
}
```

## Registering Providers

All service providers are registered in the `config/app.php` configuration file:

```php
'providers' => [
    // Laravel Framework Service Providers...
    Illuminate\Auth\AuthServiceProvider::class,
    Illuminate\Broadcasting\BroadcastServiceProvider::class,
    // ...

    // Package Service Providers...
    Laravel\Tinker\TinkerServiceProvider::class,

    // Application Service Providers...
    App\Providers\AppServiceProvider::class,
    App\Providers\AuthServiceProvider::class,
    App\Providers\EventServiceProvider::class,
    App\Providers\RouteServiceProvider::class,
    App\Providers\PaymentServiceProvider::class,
],
```

## Deferred Providers

If your provider is only registering bindings in the service container, you may choose to defer its registration until one of the registered bindings is actually needed. This will improve the performance of your application, since the provider is not loaded on every request.

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use App\Services\ReportGenerator;

class ReportServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = true;

    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(ReportGenerator::class, function ($app) {
            return new ReportGenerator($app->make('cache'));
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [ReportGenerator::class];
    }
}
```

## Common Service Provider Types

### Route Service Provider

```php
<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to your application's "home" route.
     *
     * @var string
     */
    public const HOME = '/dashboard';

    /**
     * Define your route model bindings, pattern filters, etc.
     */
    public function boot(): void
    {
        // Define route model bindings
        Route::model('user', \App\Models\User::class);
        
        // Define route patterns
        Route::pattern('id', '[0-9]+');
        
        $this->routes(function () {
            Route::middleware('web')
                ->group(base_path('routes/web.php'));

            Route::prefix('api')
                ->middleware('api')
                ->group(base_path('routes/api.php'));
        });
    }
}
```

### Event Service Provider

```php
<?php

namespace App\Providers;

use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event to listener mappings for the application.
     *
     * @var array<class-string, array<int, class-string>>
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
        ],
        'App\Events\OrderShipped' => [
            'App\Listeners\SendShipmentNotification',
        ],
    ];

    /**
     * Register any events for your application.
     */
    public function boot(): void
    {
        // Register event subscribers
        \Event::subscribe(new \App\Listeners\UserEventSubscriber);
    }
    
    /**
     * Determine if events and listeners should be automatically discovered.
     */
    public function shouldDiscoverEvents(): bool
    {
        return false;
    }
}
```

### Auth Service Provider

```php
<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Models\Post;
use App\Policies\PostPolicy;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        Post::class => PostPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // Register policies
        $this->registerPolicies();
        
        // Define gates
        Gate::define('update-post', function ($user, $post) {
            return $user->id === $post->user_id;
        });
        
        // Define before/after callbacks
        Gate::before(function ($user, $ability) {
            if ($user->isAdministrator()) {
                return true;
            }
        });
    }
}
```

### Broadcasting Service Provider

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Broadcast;
use Illuminate\Support\ServiceProvider;

class BroadcastServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Broadcast::routes();

        require base_path('routes/channels.php');
    }
}
```

## Package Service Providers

When creating a package that integrates with Laravel, you'll typically need to create a service provider to register your package's services with the Laravel application.

```php
<?php

namespace Vendor\Package;

use Illuminate\Support\ServiceProvider;

class PackageServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__.'/../config/package.php', 'package'
        );
        
        $this->app->singleton('package', function ($app) {
            return new Package($app['config']['package']);
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Publish configuration
        $this->publishes([
            __DIR__.'/../config/package.php' => config_path('package.php'),
        ], 'config');
        
        // Publish migrations
        $this->publishes([
            __DIR__.'/../database/migrations/' => database_path('migrations'),
        ], 'migrations');
        
        // Publish views
        $this->publishes([
            __DIR__.'/../resources/views' => resource_path('views/vendor/package'),
        ], 'views');
        
        // Load views
        $this->loadViewsFrom(__DIR__.'/../resources/views', 'package');
        
        // Load translations
        $this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'package');
        
        // Load routes
        $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
        
        // Load migrations
        $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
    }
}
```

## Publishing Package Assets

### Configuration

```php
// Publish configuration
$this->publishes([
    __DIR__.'/../config/package.php' => config_path('package.php'),
], 'config');

// Merge configuration
$this->mergeConfigFrom(
    __DIR__.'/../config/package.php', 'package'
);
```

### Views

```php
// Publish views
$this->publishes([
    __DIR__.'/../resources/views' => resource_path('views/vendor/package'),
], 'views');

// Load views
$this->loadViewsFrom(__DIR__.'/../resources/views', 'package');

// Load views from multiple locations
$this->loadViewsFrom([
    resource_path('views/vendor/package'),
    __DIR__.'/../resources/views',
], 'package');
```

### Translations

```php
// Publish translations
$this->publishes([
    __DIR__.'/../resources/lang' => resource_path('lang/vendor/package'),
], 'lang');

// Load translations
$this->loadTranslationsFrom(__DIR__.'/../resources/lang', 'package');
```

### Migrations

```php
// Publish migrations
$this->publishes([
    __DIR__.'/../database/migrations/' => database_path('migrations'),
], 'migrations');

// Load migrations
$this->loadMigrationsFrom(__DIR__.'/../database/migrations');
```

### Routes

```php
// Load routes
$this->loadRoutesFrom(__DIR__.'/../routes/web.php');
```

### Commands

```php
// Register commands
$this->commands([
    \Vendor\Package\Commands\InstallCommand::class,
    \Vendor\Package\Commands\UpdateCommand::class,
]);
```

## Best Practices

1. **Keep providers focused**: Create separate providers for different concerns
2. **Use the register method correctly**: Only bind things into the container
3. **Use the boot method for everything else**: Event listeners, routes, etc.
4. **Consider deferring providers**: Improve performance by deferring when possible
5. **Use type-hinting**: Make your code more robust with proper type-hinting
6. **Follow naming conventions**: Use descriptive names for your providers
7. **Document your providers**: Add comments to explain complex bindings
8. **Test your providers**: Ensure they register and boot correctly
9. **Use package discovery**: For Laravel packages, use auto-discovery when possible
10. **Organize your bindings**: Group related bindings together

## References

- [Laravel Service Providers Documentation](https://laravel.com/docs/12.x/providers)
- [Laravel Package Development](https://laravel.com/docs/12.x/packages)
- [Laravel Container Documentation](https://laravel.com/docs/12.x/container)