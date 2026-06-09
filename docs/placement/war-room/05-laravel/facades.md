---
title: Facades — Laravel
---

# Facades

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

*"`Cache::get()` looks like a static method but isn't. Explain."* — this is the trap question. Answer it wrong and the interviewer marks you down. Answer it right and they upgrade you on the spot.

This drill gives you a 4-sentence script, the exact resolution path under `Cache::get('x')`, and the test-mocking pattern.

---

## Inhale.

The interviewer asks:

> *"Facades. What are they really? Is `Cache::get()` a static method call?"*

Pause. Then deliver.

---

## The Script — 4 sentences

> *"A facade is a static proxy to an instance method resolved from the service container — it looks like a static call but it isn't really static. `Cache::get('key')` calls the `Cache` facade's `__callStatic`, which uses `getFacadeAccessor` to fetch the service name, resolves it from the container, and forwards the call to the instance."*
>
> *"So `Cache::get('key')` is essentially `app('cache')->get('key')`. The static syntax is sugar. The container does the work."*
>
> *"Facades are mockable in tests because of this — `Cache::shouldReceive('get')->with('key')->andReturn('value')` swaps the underlying instance with a Mockery mock. That's why facades and testability coexist despite looking static."*
>
> *"Real-time facades give you the same pattern for any class without writing a facade — prefix the class with `Facades\\` in `use` and Laravel generates a facade on the fly. I used this in my fest portal to mock a third-party SDK in tests without writing a facade class."*

Four sentences. What it is → equivalence → mockability → real-time facades. **Fifty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **states it's not static, then explains the mechanism**. `__callStatic` is the magic-method term the interviewer wants to hear.

Sentence 2 — **equivalence**. `Cache::get('key')` ≡ `app('cache')->get('key')`. One line. Demystifies the whole thing.

Sentence 3 — **mockability is the answer to the testability objection**. They were going to ask it. You preempted.

Sentence 4 — **real-time facades** signals you've read past the basics.

---

## Show me the code

```php
// Under the hood — Illuminate\Support\Facades\Cache
class Cache extends Facade
{
    protected static function getFacadeAccessor(): string
    {
        return 'cache'; // container binding name
    }
}

// Base Facade::__callStatic
public static function __callStatic($method, $args)
{
    $instance = static::getFacadeRoot(); // app('cache')

    return $instance->$method(...$args);
}
```

```php
// Three equivalent calls
use Illuminate\Support\Facades\Cache;

Cache::get('user.1');                  // facade
app('cache')->get('user.1');           // container helper
resolve('cache')->get('user.1');       // alias for app()

// Or via dependency injection (preferred for testability)
public function show(\Illuminate\Contracts\Cache\Repository $cache)
{
    return $cache->get('user.1');
}
```

```php
// Mocking a facade in a test
use Illuminate\Support\Facades\Cache;

public function test_user_show_caches_response(): void
{
    Cache::shouldReceive('get')
        ->once()
        ->with('user.1')
        ->andReturn(['id' => 1, 'name' => 'Raushan']);

    $this->getJson('/users/1')
        ->assertOk()
        ->assertJson(['name' => 'Raushan']);
}

// Spy version — assert AFTER the call
Cache::spy();
$this->getJson('/users/1');
Cache::shouldHaveReceived('get')->with('user.1');

// Fake version — many facades ship with one
Cache::fake();        // also: Queue::fake(), Mail::fake(), Event::fake(), Bus::fake()
```

```php
// Real-time facade — facade any class without writing one
namespace App\Services;

class Publisher
{
    public function publish(string $msg): void { /* ... */ }
}

// In your code
use Facades\App\Services\Publisher;

Publisher::publish('hello');

// Now mockable in tests:
Publisher::shouldReceive('publish')->with('hello');
```

```php
// Aliasing facades — config/app.php (mostly auto-aliased now)
'aliases' => Facade::defaultAliases()->merge([
    'Cache' => Illuminate\Support\Facades\Cache::class,
])->toArray(),
```

```php
// Facade vs helper — most facades have a global helper
Cache::get('key');     cache('key');
Session::get('key');   session('key');
Route::get(...);       // no helper — facade only
Log::info(...);        info(...);
```

Memorize the equivalence and `Cache::shouldReceive`. Real-time facades are the senior-level kicker.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** 45–55 seconds.
- [ ] **Day 2 — Write `Cache::get('x')` and the equivalent `app('cache')->get('x')` from memory.** Add the `__callStatic` skeleton.
- [ ] **Day 3 — Write a test using `Cache::shouldReceive`.** Run it. Watch it pass without touching real cache.
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"is `Cache::get` static?"* You explain `__callStatic` and getFacadeAccessor in 60 seconds.

---

## Follow-up questions you must be ready for

### "If facades aren't really static, why do they look static?"

> *"Convenience syntax. `Cache::get('k')` is shorter and more readable than `app('cache')->get('k')` in 90% of code paths. PHP's `__callStatic` magic method lets the facade catch the static call and forward it to the resolved instance."*

### "Don't facades hide dependencies?"

> *"Yes — that's the trade-off. A class using `Cache::get` doesn't declare cache as a constructor dependency, so it's invisible to anyone reading the constructor. The mitigation is testability via `shouldReceive` and `fake`, which gives you most of the DI benefit. For larger services I still prefer constructor injection."*

### "How do you mock a facade?"

> *"`Cache::shouldReceive('get')->with('key')->andReturn('value')` — Mockery under the hood. For send/dispatch-style facades, `Cache::fake()` swaps in a recording fake — you can later assert `Cache::shouldHaveReceived('get')` without setting expectations up front."*

### "What's a real-time facade?"

> *"Prefix any class with `Facades\\` in the `use` statement and Laravel generates a facade for it at runtime. Lets you treat your own classes as facades without writing the facade class — useful for legacy code where you want test mocks without refactoring to DI."*

### "Facade or helper — which to use?"

> *"Personal preference. Facades make the dependency obvious from the import — `use Cache`. Helpers are shorter. Test mocking works on facades, not helpers. I default to facades when I'll mock it in tests, helpers for one-off calls."*

### "Why does `getFacadeAccessor()` return a string instead of a class name?"

> *"Historical. The string is the container binding key — `'cache'` resolves to whatever `cache` is bound to. Modern bindings often use the contract class name, so you'll also see facades returning class names from `getFacadeAccessor`. Both work."*

---

## Recovery — when you blank

If you forget `__callStatic`, just say:

> *"PHP has a magic method that fires when you call a static method that doesn't exist — the facade uses that to forward to the container."*

That's the same answer in plain English.

If you forget `shouldReceive`, say:

> *"Facades expose a Mockery-based mocking API — you swap the underlying instance with a mock in one line."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Calls facades *"static methods"* | Wrong, and the interviewer's main gotcha | *"Static-looking, not actually static"* |
| Says facades are untestable | Wrong — `shouldReceive` and `fake` exist | Always mention testing in the same sentence |
| Confuses facade with service provider | Different layers | Provider = registration. Facade = accessor |
| Uses facades for everything | Hides dependencies | DI for services, facades for framework conveniences |
| Forgets real-time facades | Misses the senior-level detail | Mention `Facades\\` prefix at least once |

---

## Variants

=== "30s — Quick screen"

    > "Facades are static-looking proxies to container-resolved instances. `Cache::get('k')` is sugar for `app('cache')->get('k')` — uses `__callStatic` under the hood. They're mockable in tests via `Cache::shouldReceive`. Real-time facades let you facade any class with a `Facades\\` prefix."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the 4-sentence script. Walk through the `Cache` facade source — `getFacadeAccessor`, `__callStatic`, `getFacadeRoot`. Show a test using `shouldReceive`. Mention real-time facades. Close with the trade-off — *"facades hide deps, DI shows them; I use facades for framework stuff and DI for my own services."*

---

## After you drill this

When this is **● Drilled**, the *"is it really static?"* gotcha is dead. You can confidently use facades without being marked down.

Next drills:

→ **[Service Container](service-container.md)** — *what facades resolve from*
→ **[Service Providers](service-providers.md)** — *where the binding lives*
→ **[Dependency Injection](dependency-injection.md)** — *the explicit alternative*

---

*Update your status badge once you can deliver the 4-sentence script cold, write the `__callStatic` flow on a whiteboard, and mock a facade in a passing test.*
