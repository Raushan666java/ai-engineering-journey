---
title: Service Providers — Laravel
---

# Service Providers

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

If they ask *"how does Laravel boot?"* — this is the answer. Service providers are the seams where the framework, packages, and your app meet.

This drill gives you a 4-sentence script, the `register` vs `boot` split (the most common follow-up), and the patterns you need.

---

## Inhale.

The interviewer asks:

> *"What's a service provider? What goes in `register` vs `boot`?"*

Pause. Then deliver.

---

## The Script — 4 sentences

> *"A service provider is Laravel's bootstrap mechanism — it's where you register bindings with the container, configure packages, and run any startup wiring before the app handles a request. Every framework feature you use — routing, validation, queues, mail — is wired up via a provider."*
>
> *"Providers have two methods. `register()` runs first and should only do container bindings — no calling other services, because they may not be registered yet. `boot()` runs after all providers are registered, so it's safe to use any service — that's where you add view composers, validation rules, route macros, or event listeners."*
>
> *"You register providers in `bootstrap/providers.php` since Laravel 11, or in `config/app.php` before that. Package providers are auto-discovered via the package's `composer.json`."*
>
> *"In my fest portal I had a `RazorpayServiceProvider` that bound the gateway interface in `register` and registered a Blade directive `@razorpayKey` in `boot`. The split forced me to think clearly about *what needs other services* vs *what's pure binding*."*

Four sentences. Definition → `register` vs `boot` rule → registration location → real anecdote. **Fifty-five seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **bootstrap mechanism**, not *"a class with two methods"*. Concept first.

Sentence 2 — **the rule with the reason**. *"`register` runs first… `boot` runs after all registers."* That single sentence prevents the most common Laravel bug — calling services in `register` and getting *"unresolved binding"*.

Sentence 3 — **version awareness** (`bootstrap/providers.php` since 11).

Sentence 4 — **practical split** with a real provider you wrote.

---

## Show me the code

```php
// Anatomy of a service provider
namespace App\Providers;

use App\Contracts\PaymentGateway;
use App\Services\RazorpayGateway;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\ServiceProvider;

class RazorpayServiceProvider extends ServiceProvider
{
    /**
     * register() — bind things into the container.
     * DO NOT use other services here — they may not be registered yet.
     */
    public function register(): void
    {
        $this->app->singleton(PaymentGateway::class, function ($app) {
            return new RazorpayGateway(
                config('services.razorpay.key'),
                config('services.razorpay.secret'),
            );
        });
    }

    /**
     * boot() — runs after ALL providers are registered.
     * Safe to use any service here.
     */
    public function boot(): void
    {
        Blade::directive('razorpayKey', function () {
            return "<?php echo config('services.razorpay.key'); ?>";
        });
    }
}
```

```php
// Laravel 11+ registration — bootstrap/providers.php
return [
    App\Providers\AppServiceProvider::class,
    App\Providers\RazorpayServiceProvider::class,
];
```

```php
// Laravel 10 and earlier — config/app.php
'providers' => [
    // ...framework providers
    App\Providers\AppServiceProvider::class,
    App\Providers\RazorpayServiceProvider::class,
],
```

```php
// Deferred provider — boots only when its binding is resolved
use Illuminate\Contracts\Support\DeferrableProvider;

class RazorpayServiceProvider extends ServiceProvider implements DeferrableProvider
{
    public function register(): void
    {
        $this->app->singleton(PaymentGateway::class, RazorpayGateway::class);
    }

    public function provides(): array
    {
        return [PaymentGateway::class];
    }
}
// Saves a few ms on requests that never touch payments.
```

```php
// AppServiceProvider — the catch-all
class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        // Bind app-wide singletons
    }

    public function boot(): void
    {
        // Common boot tasks
        \Illuminate\Database\Eloquent\Model::preventLazyLoading(! app()->isProduction());
        \Illuminate\Http\Resources\Json\JsonResource::withoutWrapping();
        \Illuminate\Support\Facades\URL::forceScheme('https');
    }
}
```

```php
// Package auto-discovery — composer.json of the package
{
    "extra": {
        "laravel": {
            "providers": [
                "VendorName\\Package\\PackageServiceProvider"
            ],
            "aliases": {
                "Package": "VendorName\\Package\\Facades\\Package"
            }
        }
    }
}
// Laravel reads this on `composer install` and auto-registers.
```

```php
// Publishing config from a package
public function boot(): void
{
    $this->publishes([
        __DIR__.'/../config/razorpay.php' => config_path('razorpay.php'),
    ], 'razorpay-config');

    $this->loadMigrationsFrom(__DIR__.'/../database/migrations');
    $this->loadRoutesFrom(__DIR__.'/../routes/web.php');
    $this->loadViewsFrom(__DIR__.'/../resources/views', 'razorpay');
}
```

Memorize the provider anatomy. Everything else is follow-up territory.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** 50–60 seconds.
- [ ] **Day 2 — Write a provider with a binding in `register` and a Blade directive in `boot`.** From memory.
- [ ] **Day 3 — Find one provider in your project and explain why each line is in `register` or `boot`.**
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"what goes in `register` vs `boot`?"* You answer with the rule + one example each in under 60 seconds.

---

## Follow-up questions you must be ready for

### "Why can't I use services in `register()`?"

> *"Because Laravel runs every provider's `register` first, then every provider's `boot`. If you call another service in `register`, that service's binding may not be registered yet — you get `BindingResolutionException`. `boot` runs after all registers, so it's guaranteed safe."*

### "What's a deferred provider?"

> *"A provider that only boots when its binding is actually requested. Implements `DeferrableProvider`, declares `provides()` listing the bindings. Saves a tiny amount of boot time per request — useful for rarely-used services like a PDF generator."*

### "Difference between a service provider and a facade?"

> *"A service provider **registers** services into the container. A facade is a **static accessor** to one already-registered service. The provider runs once at boot; the facade is just syntactic sugar around `app()`."*

### "How does Laravel know what providers to load?"

> *"Three sources. (1) Framework providers — listed internally by the framework. (2) Your app's providers — `bootstrap/providers.php` since Laravel 11, `config/app.php` before. (3) Package providers — auto-discovered from each package's `composer.json` `extra.laravel.providers` array on `composer install`."*

### "What's `AppServiceProvider` typically used for?"

> *"App-wide boot wiring. `preventLazyLoading`, `Schema::defaultStringLength`, `URL::forceScheme('https')` on prod, global view composers, custom validation rules. Anything that's app-wide and doesn't deserve its own dedicated provider."*

### "Can I disable a package's auto-discovered provider?"

> *"Yes — `extra.laravel.dont-discover` in your app's `composer.json`, listing the package names. Then register manually in `bootstrap/providers.php` or skip entirely. Useful when you want to load a package's provider conditionally."*

---

## Recovery — when you blank

If you forget the `register` vs `boot` rule, fall back to:

> *"`register` is for bindings only. `boot` is for everything else."*

That's the 80% answer.

If you forget `DeferrableProvider`, skip it.

If you forget where providers are registered, say:

> *"There's a providers config — `bootstrap/providers.php` or `config/app.php` depending on the version."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Calls `Cache::get()` in `register()` | `BindingResolutionException` at boot | Only bindings in `register`. Side effects in `boot` |
| Says facades are providers | Different concepts | Provider = registration. Facade = accessor |
| Forgets package auto-discovery | Looks like they've never installed a package | Mention `composer.json` `extra.laravel` |
| Puts route definitions in `register` | Router not booted yet | Routes go in `boot` (or `loadRoutesFrom`) |
| Forgets to add custom provider to `providers.php` | Provider silently never runs | Always end *"and I register it in `bootstrap/providers.php`"* |

---

## Variants

=== "30s — Quick screen"

    > "Service providers are Laravel's bootstrap mechanism. `register` is for container bindings — no calling other services. `boot` runs after all providers are registered, safe for view composers, validation rules, Blade directives. I register them in `bootstrap/providers.php`."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Whiteboard a provider with `register` and `boot`. Explain the boot order — every `register` first, then every `boot`. Mention `DeferrableProvider` for boot-time optimization. Close with package auto-discovery via `composer.json`.

---

## After you drill this

When this is **● Drilled**, you have the full picture of Laravel's boot process. You can answer any *"how is X wired up at startup?"* question.

Next drills:

→ **[Service Container](service-container.md)** — *what providers are registering into*
→ **[Facades](facades.md)** — *the static accessor on top of providers*
→ **[Middleware Pipeline](middleware-pipeline.md)** — *what runs per request after boot*

---

*Update your status badge once you can deliver the 4-sentence script cold, write a provider class from memory, and answer the `register` vs `boot` question in one sentence.*
