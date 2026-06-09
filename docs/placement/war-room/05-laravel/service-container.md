---
title: Service Container & IoC — Laravel
---

# The Service Container

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This is the question that separates students who *use* Laravel from candidates who *understand* it. If you cannot explain the container in two minutes, the interviewer assumes you copy-paste from Stack Overflow.

This drill gives you a 4-sentence script, the five binding patterns you must know, and the follow-ups that always come next.

---

## Inhale.

The whiteboard is open. The interviewer types:

> *"Walk me through Laravel's service container. What is it actually doing?"*

Do not start with *"so the container is…"*. Pause. Then deliver.

---

## The Script — 4 sentences

> *"The service container is Laravel's IoC container — it's an object resolver and a dependency-injection engine. You tell it 'when something asks for this interface, build this concrete class' through bindings, and the container handles instantiation, recursion into constructor dependencies, and lifecycle."*
>
> *"There are three main binding types — `bind` makes a new instance each time, `singleton` shares one instance for the request lifecycle, and `instance` registers an existing object. You can also do contextual bindings — 'when class A asks for X, give it Y; when class B asks for X, give it Z'."*
>
> *"Every controller, job, listener, and command in Laravel is resolved through the container — that's why type-hinting in a constructor just works. The framework reflects on the constructor signature and recursively resolves each dependency."*
>
> *"In my fest portal I bound a `PaymentGateway` interface to `RazorpayGateway` in `AppServiceProvider`. When the test suite ran I swapped the binding to `FakePaymentGateway` in one line. That's the real win of the container — testable, swappable, no `new` calls scattered through the code."*

Four sentences. Definition → bindings → why it matters → real anecdote. **Fifty-five seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **two roles named**: *resolver* and *DI engine*. Most candidates only know one role. Naming both says you have read the framework, not just used the facades.

Sentence 2 — **three binding types with their lifetimes**. Specific. Numeric. Easy for the interviewer to tick.

Sentence 3 — **the framework-wide claim**: controllers, jobs, listeners, commands. You make the container sound foundational because it is.

Sentence 4 — **swap-in-test anecdote**. This is the *why* of IoC. If you cannot tell a swap story, you do not understand the container, you just use it.

---

## Show me the code

The interviewer will say: *"Show me each binding type."*

```php
// 1. bind() — new instance every resolve
use App\Services\PaymentGateway;
use App\Services\RazorpayGateway;

$this->app->bind(PaymentGateway::class, RazorpayGateway::class);

// Each call to app(PaymentGateway::class) returns a fresh RazorpayGateway
```

```php
// 2. singleton() — one instance per request lifecycle
$this->app->singleton(PaymentGateway::class, function ($app) {
    return new RazorpayGateway(
        config('services.razorpay.key'),
        config('services.razorpay.secret')
    );
});
```

```php
// 3. instance() — register an existing object
$gateway = new RazorpayGateway('key', 'secret');
$this->app->instance(PaymentGateway::class, $gateway);
```

```php
// 4. Contextual binding — different concrete per consumer
use App\Http\Controllers\CheckoutController;
use App\Http\Controllers\RefundController;

$this->app->when(CheckoutController::class)
    ->needs(PaymentGateway::class)
    ->give(RazorpayGateway::class);

$this->app->when(RefundController::class)
    ->needs(PaymentGateway::class)
    ->give(StripeGateway::class);
```

```php
// 5. Tagged services — group related bindings
$this->app->bind('SmsReport', SmsReport::class);
$this->app->bind('EmailReport', EmailReport::class);
$this->app->tag(['SmsReport', 'EmailReport'], 'reports');

$this->app->bind('ReportAggregator', function ($app) {
    return new ReportAggregator($app->tagged('reports'));
});
```

```php
// Resolving — four equivalent ways
$gateway = app(PaymentGateway::class);
$gateway = resolve(PaymentGateway::class);
$gateway = $this->app->make(PaymentGateway::class);

// Or just type-hint in a controller — Laravel injects it
public function __construct(protected PaymentGateway $gateway) {}
```

Memorize patterns 1, 2, and 4. The rest are for follow-ups.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** Out loud. Time it. 50–60 seconds.
- [ ] **Day 2 — Write all five binding patterns from memory.** No copy-paste. Verify syntax in a fresh Laravel install.
- [ ] **Day 3 — Build a real binding in your project.** Create an interface, two implementations, bind one, swap in a test. Watch it work.
- [ ] **Day 4 — Drill the 5 follow-ups (below) until each is a 1–2 sentence answer.**
- [ ] **Day 5 — Mock interview.** Friend asks *"explain the container."* Deliver the script, then write `bind`, `singleton`, and contextual binding without notes.

---

## Follow-up questions you must be ready for

### "When use `bind` vs `singleton`?"

> *"`singleton` when the object is expensive to build or holds shared state — DB connections, HTTP clients, config-heavy services. `bind` when it's cheap and stateless, or when each consumer must get its own copy. Default to `bind` unless you have a reason to share."*

### "What's the difference between `make()` and `resolve()` and `app()`?"

> *"All three resolve from the container. `app($abstract)` is the helper, `resolve($abstract)` is its alias, `$this->app->make($abstract)` is the explicit method. `make()` also accepts a second argument for constructor parameters the container can't auto-resolve — primitives, scalars."*

### "How does Laravel know which concrete to inject when there's no binding?"

> *"Auto-resolution via reflection. If the type-hint is a concrete class with no interface, the container calls `new` on it after recursively resolving its constructor dependencies. If it's an interface with no binding, you get a `BindingResolutionException`."*

### "What's a contextual binding good for?"

> *"Same interface, different concrete per consumer. Common case: two controllers both depend on a `Disk` contract, one needs S3, one needs local filesystem. Without contextual binding you'd need two interfaces or runtime if-checks. With it, the container wires the right concrete based on who's asking."*

### "What's `singletonIf` or `bindIf`?"

> *"Register only if no binding exists. Useful in package service providers — your package binds a default `Logger`, but if the user already bound their own in `AppServiceProvider`, yours doesn't overwrite it. Lets the application win over the package."*

### "Are singletons request-scoped or app-scoped?"

> *"Request-scoped in HTTP. The container is rebuilt per request — a singleton lives until the response is sent, then dies. In a long-running worker (Octane, queue worker) the singleton lives across requests/jobs, which is a common bug source — stale state leaking between requests. Octane has `flush` hooks for this."*

---

## Recovery — when you blank

If you forget the binding types, **walk through the lifetime**:

> *"Let me think about lifetime — there's the 'always new', the 'shared per request', and the 'pre-built object I'm handing in'. Those map to `bind`, `singleton`, and `instance`."*

If you forget the contextual binding syntax, **describe it in words**:

> *"It's `when ClassA needs Interface give Concrete` — three chained calls on `$this->app`. Let me write it."*

The act of typing recovers most students.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Says *"it's just a class registry"* | Misses DI and auto-resolution | Always say *resolver* and *DI engine* together |
| Confuses `singleton` with global state | Singleton is request-scoped, not app-scoped | Mention the Octane gotcha to prove you know |
| Uses `new` inside a controller after explaining DI | Contradicts your own answer | If you mention DI, **never** show `new` for the same dependency |
| Forgets `BindingResolutionException` | Misses the error case the interviewer asks about | Name the exception by class — *"`BindingResolutionException`"* |
| Calls facades the container | Facades **use** the container, they aren't it | Keep facades and container as separate concepts |

---

## Variants

=== "30s — Quick screen"

    > "The container is Laravel's IoC — it resolves classes and injects dependencies via reflection. Bindings come in three flavours — `bind` for new each time, `singleton` for shared, `instance` for pre-built. I use it to swap a `PaymentGateway` interface for a fake in tests with one line."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the 4-sentence script. Whiteboard `bind`, `singleton`, and contextual binding. Mention auto-resolution via reflection. Close with the Octane singleton gotcha — *"in a long-running worker, singleton state can leak between requests, which is why Octane has flush hooks."*

---

## After you drill this

When this is **● Drilled**, you have the foundation for every other Laravel question — service providers, facades, DI, dependency resolution. They all sit on top of the container.

Next drills:

→ **[Dependency Injection](dependency-injection.md)** — *the practical side of the container*
→ **[Service Providers](service-providers.md)** — *where bindings actually live*
→ **[Facades](facades.md)** — *the static-looking front door to the container*

---

*Update your status badge once you can deliver the 4-sentence script cold, write all five binding patterns from memory, and answer any 3 of the 6 follow-ups without notes.*
