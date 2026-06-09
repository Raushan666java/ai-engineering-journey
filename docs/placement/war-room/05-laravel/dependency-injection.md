---
title: Dependency Injection — Laravel
---

# Dependency Injection

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

Every Laravel interview hits this. The phrasing varies — *"explain DI"*, *"why type-hint in constructors"*, *"how do you avoid `new` in a controller"* — same question.

This drill gives you a 3-sentence script, four DI patterns Laravel uses, and the follow-ups.

---

## Inhale.

The interviewer points at a `__construct` line:

> *"Why do you write your controller like this? Why not just `new` the service inside?"*

Pause. Then deliver.

---

## The Script — 3 sentences

> *"Dependency injection means a class receives its dependencies from outside instead of building them itself. Instead of `new PaymentGateway()` inside a controller, I type-hint `PaymentGateway` in the constructor and Laravel's container resolves and injects it for me."*
>
> *"This buys me three things — testability because I can swap a fake in tests with one container binding, single responsibility because the controller doesn't know how to build the gateway, and flexibility because changing the implementation doesn't touch the consumer."*
>
> *"Laravel pushes DI everywhere — constructor injection in controllers and jobs, method injection in route closures and controller methods, even FormRequest is DI in disguise. Anywhere the framework instantiates something, you can type-hint and it just works."*

Three sentences. Definition → three benefits → ubiquity in Laravel. **Forty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **contrast the wrong way with the right way**. *"Instead of `new …` I type-hint"* — the interviewer pictures the code change.

Sentence 2 — **three benefits, numbered**. Most candidates say *"testability"* and stop. You give three. You sound senior.

Sentence 3 — **breadth claim**. You name four injection points. The interviewer files you under *"knows the framework cold"*.

---

## Show me the code

```php
// ❌ BAD — hard-coded dependency, untestable
class CheckoutController
{
    public function store(Request $request)
    {
        $gateway = new RazorpayGateway(config('services.razorpay.key'));
        $gateway->charge($request->amount);
    }
}
```

```php
// ✅ GOOD — constructor injection
use App\Services\PaymentGateway;

class CheckoutController
{
    public function __construct(protected PaymentGateway $gateway) {}

    public function store(Request $request)
    {
        $this->gateway->charge($request->amount);
    }
}
```

```php
// ✅ Method injection — works on controller actions and route closures
public function store(Request $request, PaymentGateway $gateway)
{
    $gateway->charge($request->amount);
}

// Route closure
Route::post('/charge', function (Request $request, PaymentGateway $gateway) {
    $gateway->charge($request->amount);
});
```

```php
// ✅ Route model binding — also DI, but for Eloquent models
// Route: Route::get('/posts/{post}', [PostController::class, 'show']);
public function show(Post $post)
{
    // $post is auto-resolved from the URL slug or ID
    return view('posts.show', compact('post'));
}
```

```php
// ✅ FormRequest — DI for validation
class StorePostRequest extends FormRequest
{
    public function rules(): array
    {
        return ['title' => 'required|max:255'];
    }
}

public function store(StorePostRequest $request)
{
    // Validation already passed before this line runs.
    Post::create($request->validated());
}
```

```php
// ✅ Resolving when you can't type-hint (rare, e.g. inside a static helper)
$gateway = app(PaymentGateway::class);
$gateway = resolve(PaymentGateway::class);
```

```php
// Binding the interface so DI knows what to inject
// AppServiceProvider::register()
public function register(): void
{
    $this->app->bind(
        \App\Contracts\PaymentGateway::class,
        \App\Services\RazorpayGateway::class
    );
}
```

Memorize patterns 1 and 2. The rest are follow-up ammo.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 3-sentence script, 5×.** 35–45 seconds.
- [ ] **Day 2 — Write the BAD and GOOD controller from memory.** No copy-paste.
- [ ] **Day 3 — Refactor one real `new` call in your project to constructor injection.** Run tests. Confirm nothing broke.
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"why DI?"* You answer in 40 seconds, then refactor a small `new` call on the whiteboard.

---

## Follow-up questions you must be ready for

### "What's the difference between constructor and method injection?"

> *"Constructor injection is for dependencies the class needs for its whole lifetime — services, repositories. Method injection is for dependencies only one action needs — the request, a one-off helper. Use constructor by default, method injection when only one method needs it."*

### "How does Laravel know what to inject?"

> *"PHP reflection on the type-hint. The container reads the constructor signature, sees `PaymentGateway $gateway`, looks up the binding for `PaymentGateway`, recursively resolves its dependencies, then passes the result. No annotation or config needed."*

### "What if I need a primitive — a string or int — alongside type-hinted classes?"

> *"Pass them as the second argument to `make` — `app()->make(MyService::class, ['apiKey' => 'xyz'])`. Or use contextual binding with `give`. The container can't guess scalars, you have to be explicit."*

### "Is `Request` injection DI?"

> *"Yes. `Illuminate\Http\Request` is bound as a singleton in the container per request. When you type-hint it, the container hands you the same instance the kernel already built. Same pattern as any other service."*

### "How do you inject when the consumer is created by something other than the container — like an event listener triggered by a queue?"

> *"Listeners, jobs, mailables — all instantiated through the container, so constructor injection works. The job's `handle` method also supports method injection. The only place DI doesn't work is when you `new` the class yourself — at which point you've opted out of the container."*

### "What's the test-time benefit, in one line?"

> *"One container `bind` call in the test swaps the real gateway for a fake. Zero changes to the controller. That's the entire point."*

---

## Recovery — when you blank

If you forget the three benefits, fall back to two:

> *"The two I rely on most are testability — I swap implementations in one line — and single responsibility — the controller doesn't know how to build its dependencies."*

If you forget the term *reflection*, say:

> *"Laravel reads the constructor signature and resolves what's needed."*

That's accurate even without the word.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Says DI is *"just for testing"* | Misses single responsibility and flexibility | Always list three benefits |
| `new`s a service inside a constructor | Defeats the point of DI | If you mention DI, never `new` the same dependency |
| Confuses DI with service location (`app(X)` everywhere) | Service location hides dependencies | Type-hint in constructor = DI. `app()` everywhere = anti-pattern |
| Says facades use DI | Facades use the container, but **bypass** DI | Facades and DI are alternatives, not the same |
| Forgets to bind the interface | Type-hinting an interface with no binding throws `BindingResolutionException` | Bind interfaces in a service provider |

---

## Variants

=== "30s — Quick screen"

    > "DI means the class receives dependencies from outside. I type-hint `PaymentGateway` in the constructor, Laravel's container resolves and injects it. That gives me testability, single responsibility, and easy swapping — change one binding, every consumer sees the new implementation."

=== "45s — Default"

    See main 3-sentence script above.

=== "3min — Deep dive"

    Deliver the 3-sentence script. Whiteboard the BAD-vs-GOOD controller. Show method injection on a route closure. Show FormRequest as DI. Close with: *"This is why I rarely write `new` in application code — the container handles instantiation, I focus on behaviour."*

---

## After you drill this

When this is **● Drilled**, you can answer any *"how is this wired up"* question with confidence.

Next drills:

→ **[Service Container](service-container.md)** — *the engine behind DI*
→ **[Service Providers](service-providers.md)** — *where you register bindings*
→ **[Facades](facades.md)** — *DI's alternative, and when to use which*

---

*Update your status badge once you can deliver the 3-sentence script cold, write both controllers from memory, and answer any 3 of the 6 follow-ups without notes.*
