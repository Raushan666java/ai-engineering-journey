---
title: Middleware Pipeline — Laravel
---

# The Middleware Pipeline

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

Middleware is one of the top 5 Laravel interview questions. If you can draw the pipeline on a whiteboard, you instantly look senior. If you can't, you look like you've never read past *"add middleware to your route"*.

This drill gives you a 4-sentence script, the bootstrap-vs-Kernel split (Laravel 11+ vs 10−), and the follow-ups.

---

## Inhale.

The interviewer asks:

> *"How does middleware actually work? What happens between the request hitting the server and the controller?"*

Pause. Then deliver.

---

## The Script — 4 sentences

> *"Middleware is the chain of classes that a request passes through before reaching the controller, and the response passes back through on the way out. Each middleware can inspect or modify the request, short-circuit by returning a response itself, or pass the request along by calling `$next($request)`."*
>
> *"Laravel has three middleware scopes — global runs on every request, route middleware runs on specific routes, and group middleware (like `web` or `api`) bundles related middleware together. Auth, CSRF, throttling, and session handling are all middleware."*
>
> *"Since Laravel 11 middleware registers in `bootstrap/app.php` using the `withMiddleware` callback. Before 11 it lived in `app/Http/Kernel.php`. The pipeline pattern itself didn't change — only where you declare it."*
>
> *"In my fest portal I wrote a custom `EnsurePaidRegistration` middleware that 403'd users without a paid ticket before they reached the protected route. It saved me from putting that check in every controller — exactly the kind of cross-cutting concern middleware is built for."*

Four sentences. Definition → three scopes → version split → real anecdote. **Fifty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **the onion picture**. *"Pass through… back through on the way out"* — interviewer sees the diagram.

Sentence 2 — **three scopes with examples**. Named, not vague.

Sentence 3 — **version awareness**. Most candidates answer for Laravel 10. Saying *"since 11"* signals you've kept up.

Sentence 4 — **real custom middleware**. You built one. You didn't just use the built-ins.

---

## Show me the code

```php
// Anatomy of a middleware (Laravel 9+)
namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class EnsurePaidRegistration
{
    public function handle(Request $request, Closure $next): Response
    {
        // BEFORE the controller
        if (! $request->user()?->hasPaidTicket()) {
            return response()->json(['error' => 'Payment required'], 403);
        }

        $response = $next($request);

        // AFTER the controller
        $response->headers->set('X-Ticket-Status', 'paid');

        return $response;
    }
}
```

```php
// Laravel 11+ registration — bootstrap/app.php
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
    )
    ->withMiddleware(function (Middleware $middleware) {
        // Global
        $middleware->append(\App\Http\Middleware\TrackRequests::class);

        // Route alias
        $middleware->alias([
            'paid' => \App\Http\Middleware\EnsurePaidRegistration::class,
        ]);

        // Group append
        $middleware->web(append: [
            \App\Http\Middleware\LogPageView::class,
        ]);
    })
    ->withExceptions(fn () => null)
    ->create();
```

```php
// Laravel 10 and earlier — app/Http/Kernel.php
protected $middleware = [
    \App\Http\Middleware\TrackRequests::class, // global
];

protected $middlewareGroups = [
    'web' => [
        \App\Http\Middleware\EncryptCookies::class,
        \Illuminate\Session\Middleware\StartSession::class,
        // ...
    ],
];

protected $middlewareAliases = [
    'paid' => \App\Http\Middleware\EnsurePaidRegistration::class,
];
```

```php
// Applying middleware on routes
Route::get('/dashboard', DashboardController::class)
    ->middleware('auth');

Route::middleware(['auth', 'paid'])->group(function () {
    Route::get('/event', [EventController::class, 'show']);
    Route::post('/event/checkin', [EventController::class, 'checkin']);
});

// Middleware with parameters
Route::get('/admin', AdminController::class)
    ->middleware('role:admin');
```

```php
// Middleware with parameters — handle() signature
public function handle(Request $request, Closure $next, string $role): Response
{
    if (! $request->user()?->hasRole($role)) {
        abort(403);
    }
    return $next($request);
}
```

```php
// Terminable middleware — runs after the response is sent to the browser
class LogRequestLatency
{
    public function handle(Request $request, Closure $next): Response
    {
        $request->attributes->set('start_time', microtime(true));
        return $next($request);
    }

    public function terminate(Request $request, Response $response): void
    {
        $ms = (microtime(true) - $request->attributes->get('start_time')) * 1000;
        logger()->info("Request took {$ms}ms");
    }
}
```

Memorize the anatomy and the route attachment. The rest are follow-up ammo.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** 45–55 seconds.
- [ ] **Day 2 — Write a middleware from scratch.** `handle($request, Closure $next): Response`. No copy-paste.
- [ ] **Day 3 — Draw the pipeline.** Onion diagram, 3 middleware layers, controller in the middle, request arrow in, response arrow out. Practice until it takes 30 seconds.
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"explain middleware."* You draw + script, total 90 seconds.

---

## Follow-up questions you must be ready for

### "Difference between global, group, and route middleware?"

> *"Global runs on every HTTP request — CSRF, trim strings. Group bundles middleware applied together — the `web` group adds session, cookies, CSRF; the `api` group adds throttling. Route middleware is opt-in per route or per route group — auth, custom permission checks. You pick the scope based on how broad the concern is."*

### "How does the pipeline pattern actually work under the hood?"

> *"Laravel uses `Illuminate\Pipeline\Pipeline`. It takes the request, wraps each middleware in a closure, builds the chain from inside out using `array_reduce`, and calls the outermost closure. Each middleware's `$next($request)` invokes the next closure in the chain. When you return a response, the unwinding begins."*

### "What's terminable middleware?"

> *"A middleware with a `terminate()` method runs after the response is sent to the client — for logging, analytics, queue dispatching. Only works with FastCGI; needs `fastcgi_finish_request`. Use it for work the user shouldn't wait for."*

### "Can middleware modify the response?"

> *"Yes — anything after `$response = $next($request)` and before `return $response` runs on the way out. Add headers, log status codes, transform body. Common pattern for security headers, CORS, response timing."*

### "How do you short-circuit?"

> *"Return a response from `handle` without calling `$next`. The controller never runs. Standard pattern for auth failures — `if (! auth()->check()) return redirect('/login');`. The rest of the pipeline still runs back through on response."*

### "What's the order of middleware execution?"

> *"Top to bottom on the way in, bottom to top on the way out. Laravel 10+ has `$middlewarePriority` in the kernel to force a specific order for middleware that must run in sequence — session before auth, for example. In 11+ you set priority via `withMiddleware`."*

---

## Recovery — when you blank

If you forget the version split, just say:

> *"It's registered in a config file — `bootstrap/app.php` in current Laravel, `Kernel.php` in older versions."*

If you forget `terminate()`, skip it. It's a bonus, not core.

If you forget the pipeline pattern term, say:

> *"It's a chain — each middleware calls the next via a closure, response unwinds on the way out."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Says middleware only runs before the controller | Misses the response side | Always say *"and back through on the way out"* |
| Confuses middleware with service providers | Different lifecycle, different purpose | Providers = boot-time wiring. Middleware = per-request pipeline |
| Forgets to call `$next($request)` | Pipeline dies, no controller runs | Show `return $next($request)` in every example |
| Puts business logic in middleware | Middleware = cross-cutting only | Auth, logging, headers — yes. Domain logic — no |
| Uses Laravel 10 Kernel syntax in a Laravel 11 answer | Out of date | Say *"in 11+ I use `bootstrap/app.php`, in 10 it was `Kernel.php`"* |

---

## Variants

=== "30s — Quick screen"

    > "Middleware is the chain of classes a request passes through before the controller, and the response passes back through on the way out. Three scopes — global, group, route. I use it for auth, throttling, custom permission checks. Returns from `handle` short-circuit the pipeline."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Draw the onion diagram. Show a middleware class with before/after logic. Mention the pipeline pattern internally — `Illuminate\Pipeline\Pipeline`, `array_reduce`. Close with terminable middleware as the *"after response is sent"* case.

---

## After you drill this

When this is **● Drilled**, you own the request-response cycle question. That covers a huge chunk of Laravel rounds.

Next drills:

→ **[Service Providers](service-providers.md)** — *boot-time wiring*
→ **[Authentication: Sanctum](authentication-sanctum.md)** — *the most common middleware use case*
→ **[Validation & FormRequest](validation-form-requests.md)** — *DI + middleware-like validation*

---

*Update your status badge once you can deliver the 4-sentence script cold, draw the pipeline diagram in 30 seconds, and write a middleware class from memory.*
