---
title: Eloquent Mutators & Accessors
---

# Mutators & Accessors

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This question filters out tutorial-skimmers. You need to know both directions (set vs get), the old syntax, the new `Attribute::make()` syntax, and `$casts` — because the interviewer will ask which to use when.

This drill gives you a 3-sentence script, both syntaxes side by side, and the casting overlap.

---

## Inhale.

The interviewer asks:

> *"What's the difference between a mutator and an accessor in Eloquent?"*

Pause. Then deliver.

---

## The Script — 3 sentences

> *"An **accessor** transforms an attribute when you read it from the model — `$user->full_name` derived from `first_name` and `last_name`. A **mutator** transforms an attribute when you set it — hashing a password automatically when you assign `$user->password = 'plain'`."*
>
> *"Pre-Laravel 9 you wrote `getFullNameAttribute` and `setPasswordAttribute`. Laravel 9+ introduced the `Attribute::make(get: …, set: …)` syntax — one method, both directions, optional caching, and cleaner closures."*
>
> *"For simple type conversions like dates, booleans, JSON, enums, or encryption — use `$casts` instead. Casts are declarative, faster than accessors, and integrate with Eloquent's serialization. I use accessors for derived values, mutators for normalization on write, and casts for type coercion."*

Three sentences. Direction → old vs new syntax → casts boundary + decision rule. **Fifty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **directionally explicit** — *"read"* vs *"set"*. Plus a real example each.

Sentence 2 — **version awareness**. New syntax (`Attribute::make`) signals Laravel 9+ literacy.

Sentence 3 — **the decision rule**. Most candidates miss `$casts`. You name it and give the rule for when to use what.

---

## Show me the code

```php
// 1. Old syntax — getXxxAttribute / setXxxAttribute (pre-Laravel 9)
class User extends Model
{
    // Accessor — derived from other columns, no DB column needed
    public function getFullNameAttribute(): string
    {
        return trim("{$this->first_name} {$this->last_name}");
    }

    // Mutator — runs on assignment, before save
    public function setPasswordAttribute(string $value): void
    {
        $this->attributes['password'] = bcrypt($value);
    }
}

// Usage
$user->full_name;          // accessor fires
$user->password = 'plain'; // mutator hashes
$user->save();             // saves the hashed value
```

```php
// 2. New syntax — Attribute::make() (Laravel 9+)
use Illuminate\Database\Eloquent\Casts\Attribute;

class User extends Model
{
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn () => trim("{$this->first_name} {$this->last_name}"),
        );
    }

    protected function password(): Attribute
    {
        return Attribute::make(
            set: fn (string $value) => bcrypt($value),
        );
    }

    // Both directions on one column — JSON column treated as object
    protected function preferences(): Attribute
    {
        return Attribute::make(
            get: fn (?string $value) => $value ? json_decode($value, true) : [],
            set: fn (array $value) => json_encode($value),
        );
    }
}

// Usage — identical
$user->full_name;
$user->password = 'plain';
$user->preferences = ['theme' => 'dark'];
```

```php
// Accessing other attributes in the new syntax — via $attributes array
protected function fullName(): Attribute
{
    return Attribute::make(
        get: fn (mixed $value, array $attributes) =>
            trim("{$attributes['first_name']} {$attributes['last_name']}"),
    );
}
```

```php
// Caching computed accessors (expensive derived values)
protected function options(): Attribute
{
    return Attribute::make(
        get: fn (string $value) => $this->expensiveDecode($value),
    )->shouldCache();
}
```

```php
// 3. $casts — declarative type conversion (prefer over mutator/accessor for types)
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Casts\AsCollection;

class User extends Model
{
    protected $casts = [
        'is_admin'      => 'boolean',
        'email_verified_at' => 'datetime',
        'options'       => 'array',           // JSON ↔ PHP array
        'settings'      => AsCollection::class, // JSON ↔ Collection
        'meta'          => AsArrayObject::class, // JSON ↔ ArrayObject (mutable)
        'role'          => UserRole::class,    // enum cast
        'ssn'           => 'encrypted',        // encrypt at rest
        'price'         => 'decimal:2',
    ];
}

// Now $user->is_admin returns true/false instead of "1"/"0"
// $user->options = ['a' => 1] is JSON-encoded on save
// $user->role returns a UserRole enum instance
```

```php
// Custom cast — full control beyond mutator+accessor
namespace App\Casts;

use Illuminate\Contracts\Database\Eloquent\CastsAttributes;

class Money implements CastsAttributes
{
    public function get($model, $key, $value, $attributes): ?int
    {
        return $value === null ? null : (int) ($value * 100); // dollars to cents
    }

    public function set($model, $key, $value, $attributes): array
    {
        return [$key => $value / 100];
    }
}

class Product extends Model
{
    protected $casts = ['price' => Money::class];
}
```

```php
// $appends — expose accessors in toArray() / toJson()
class User extends Model
{
    protected $appends = ['full_name'];

    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn () => "{$this->first_name} {$this->last_name}",
        );
    }
}

$user->toArray(); // includes 'full_name'
```

Memorize the new `Attribute::make()` syntax for one accessor and one mutator. `$casts` for booleans and dates is the bonus.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 3-sentence script, 5×.** 45–55 seconds.
- [ ] **Day 2 — Write the password mutator and full_name accessor in BOTH syntaxes.** From memory.
- [ ] **Day 3 — Add a custom cast in your project** (e.g. money in cents, or encrypted SSN). Test it.
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"mutator vs accessor vs cast — when use which?"* You answer the decision rule in 30 seconds.

---

## Follow-up questions you must be ready for

### "Why prefer `$casts` over mutator/accessor for types?"

> *"`$casts` is declarative — one line in an array, no method, no closure. Faster because Laravel knows the type ahead of time. Plays nicely with serialization, mass assignment, and the new typed Eloquent features. Use mutator/accessor only when you need logic, not just type conversion."*

### "What's the difference between `Attribute::make` and the old syntax?"

> *"Same behavior, cleaner code. Old: two methods per attribute (`getXxxAttribute`, `setXxxAttribute`), naming convention enforced. New: one method named after the attribute (camelCase), returns an `Attribute` instance with `get` and/or `set` closures. New syntax also supports `shouldCache()` and `withoutObjectCaching()`."*

### "How do you cache an expensive accessor?"

> *"Append `->shouldCache()` to `Attribute::make()`. The result is cached on the model instance — subsequent reads in the same request return the cached value. Use it when the accessor does heavy work like decryption, JSON decode, or formatting a large structure."*

### "What's `$appends` for?"

> *"By default, accessors don't appear in `toArray()` or `toJson()` — only DB columns do. `$appends = ['full_name']` tells Eloquent to include the accessor in serialization. Common for API responses where the consumer expects derived fields."*

### "When use a custom cast instead of mutator/accessor?"

> *"When the transformation is reusable across models — money, encryption, value objects. Custom casts implement `CastsAttributes` with `get` and `set` methods, and live in their own class. Mutator/accessor is per-model; custom cast is per-codebase."*

### "What if I want the mutator to run on insert too?"

> *"It does. Mutators run on any assignment to the attribute, including mass assignment via `create()` and `fill()`. The only escape hatch is `forceFill()`, which bypasses mutators — only use for low-level seeding."*

---

## Recovery — when you blank

If you forget the new syntax, say:

> *"There are two syntaxes — the old `getXxxAttribute`/`setXxxAttribute` and the newer `Attribute::make`. I'll write the old one — both are valid."*

That's honest and shows you know both exist.

If you forget casts, just describe what you'd do:

> *"For type conversion like booleans or dates, I'd usually use the `$casts` array instead of a full accessor — it's declarative and faster."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Confuses accessor (GET) with mutator (SET) | Reverse the direction | Mnemonic: **A**ccessor = **A**ccess (read). **M**utator = **M**odify (write) |
| Writes a mutator for type conversion | Should be a cast | Mention `$casts` as the alternative |
| Forgets `$appends` for API responses | Derived value missing in JSON | Always pair `$appends` with custom accessors used in APIs |
| Uses old syntax only | Misses Laravel 9+ literacy | Mention both syntaxes |
| Forgets mutators run on mass assignment | Uses raw queries to "skip" mutator | Use `forceFill` or update via query builder if you must bypass |

---

## Variants

=== "30s — Quick screen"

    > "Accessor transforms an attribute on READ — `$user->full_name`. Mutator transforms on WRITE — `$user->password = 'plain'` becomes hashed. New syntax is `Attribute::make(get: …, set: …)`. For simple type conversions, use `$casts` instead — it's faster and declarative."

=== "45s — Default"

    See main 3-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Write the password mutator and full_name accessor in the new syntax. Show `$casts` with boolean, datetime, enum, and encrypted. Mention `$appends` for API serialization. Close with the decision rule — *"accessor for derived values, mutator for write normalization, cast for type coercion."*

---

## After you drill this

When this is **● Drilled**, you can shape your models cleanly without scattering logic in controllers.

Next drills:

→ **[Eloquent Scopes](eloquent-scopes.md)** — *the query-side counterpart*
→ **[Relationships](eloquent-relationships.md)** — *what mutators often work alongside*
→ **[Validation & FormRequest](validation-form-requests.md)** — *the layer above mutators*

---

*Update your status badge once you can write both syntaxes from memory and explain the mutator/accessor/cast decision rule in one sentence.*
