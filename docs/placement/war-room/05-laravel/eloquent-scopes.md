---
title: Eloquent Scopes — Local vs Global
---

# Eloquent Scopes

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

Scopes are how Laravel keeps queries clean. If you've ever written `->where('deleted_at', null)->where('published', true)` ten times across your controllers, scopes are the cleanup.

This drill gives you a 3-sentence script, both scope types with the new Laravel 12 attribute syntax, and the soft-delete tie-in.

---

## Inhale.

The interviewer asks:

> *"What are local vs global scopes in Eloquent?"*

Pause. Then deliver.

---

## The Script — 3 sentences

> *"A scope encapsulates a query constraint so you don't repeat it across the codebase. **Local** scopes are opt-in methods on the model — `Post::published()->latest()->get()` — defined as `scopePublished($query)` or with the new `#[Scope]` attribute in Laravel 11+."*
>
> *"**Global** scopes are always applied to every query on a model — you implement the `Scope` contract and register it in the model's `booted()` method. Soft deletes are the classic example — `SoftDeletingScope` auto-adds `where deleted_at is null` to every query."*
>
> *"You opt out of a global scope with `withoutGlobalScope(PublishedScope::class)` when you need to query everything — like an admin view. In my fest portal I used a `TenantScope` global scope so every model query auto-filtered to the current logged-in college, removing the risk of cross-tenant data leaks."*

Three sentences. Local → global → opt-out + anecdote. **Fifty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **purpose first** (*"so you don't repeat"*). Then naming + new syntax.

Sentence 2 — **soft delete tie-in**. Interviewer will ask about soft deletes next; you preempted.

Sentence 3 — **multi-tenancy anecdote**. The exact use case scopes were designed for, told with a real example.

---

## Show me the code

```php
// 1. Local scope — old syntax (still works)
class Post extends Model
{
    public function scopePublished($query)
    {
        return $query->where('published', true)
                     ->whereNotNull('published_at');
    }

    public function scopeAuthoredBy($query, User $user)
    {
        return $query->where('user_id', $user->id);
    }
}

// Usage
Post::published()->latest()->get();
Post::authoredBy($user)->published()->get();
```

```php
// Local scope — Laravel 11+ attribute syntax
use Illuminate\Database\Eloquent\Attributes\Scope;
use Illuminate\Database\Eloquent\Builder;

class Post extends Model
{
    #[Scope]
    protected function published(Builder $query): void
    {
        $query->where('published', true)->whereNotNull('published_at');
    }

    #[Scope]
    protected function authoredBy(Builder $query, User $user): void
    {
        $query->where('user_id', $user->id);
    }
}

// Same usage — cleaner method body
Post::published()->latest()->get();
```

```php
// 2. Global scope — implement the contract
namespace App\Models\Scopes;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;

class PublishedScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        $builder->where('published', true);
    }
}
```

```php
// Register the global scope on the model
class Post extends Model
{
    protected static function booted(): void
    {
        static::addGlobalScope(new PublishedScope);
    }
}

// Now every query auto-filters:
Post::all();                    // WHERE published = 1
Post::where('user_id', 5)->get(); // WHERE published = 1 AND user_id = 5
```

```php
// Anonymous global scope — for simple cases
protected static function booted(): void
{
    static::addGlobalScope('published', function (Builder $builder) {
        $builder->where('published', true);
    });
}
```

```php
// Opt out of a global scope
Post::withoutGlobalScope(PublishedScope::class)->get();   // class-based
Post::withoutGlobalScope('published')->get();              // anonymous (by name)
Post::withoutGlobalScopes()->get();                        // all of them
Post::withoutGlobalScopes([PublishedScope::class])->get(); // selected
```

```php
// Real-world: multi-tenant scope
class TenantScope implements Scope
{
    public function apply(Builder $builder, Model $model): void
    {
        if (auth()->check()) {
            $builder->where('college_id', auth()->user()->college_id);
        }
    }
}

class Event extends Model
{
    protected static function booted(): void
    {
        static::addGlobalScope(new TenantScope);
    }
}

// Every Event query auto-filters by current user's college.
// Admin override:
Event::withoutGlobalScope(TenantScope::class)->get();
```

```php
// Soft deletes — the built-in global scope
use Illuminate\Database\Eloquent\SoftDeletes;

class Post extends Model
{
    use SoftDeletes;
}

// Behind the scenes, SoftDeletes registers SoftDeletingScope:
// every query adds: WHERE deleted_at IS NULL
// $post->delete() sets deleted_at instead of DELETE.

Post::withTrashed()->get();      // include soft-deleted
Post::onlyTrashed()->get();      // only soft-deleted
$post->restore();                // un-soft-delete
$post->forceDelete();            // actual DELETE
```

Memorize one local + one global scope. Soft deletes is the bonus.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 3-sentence script, 5×.** 45–55 seconds.
- [ ] **Day 2 — Write a local scope (old + new attribute syntax) and a global scope from memory.**
- [ ] **Day 3 — Add a global scope to one model in your project. Run a query. Verify the SQL with `toSql()`.**
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"local vs global scopes"*. You answer + write a `TenantScope` in 90 seconds.

---

## Follow-up questions you must be ready for

### "When use a global scope vs a local scope?"

> *"Global when the constraint **must always** apply — multi-tenancy, soft deletes, published-only. Local when the constraint is **opt-in** — `latest`, `popular`, `searchable`. Rule of thumb — if forgetting it would leak data or break business logic, make it global."*

### "What's a downside of global scopes?"

> *"They're invisible. A junior reading `Post::all()` doesn't see the `where` clause being auto-added — bugs feel like Eloquent is broken. Mitigation: document the scope clearly, use `dd(Post::query()->toSql())` to inspect, and only use global scopes where forgetting them is dangerous."*

### "How does soft delete actually work?"

> *"The `SoftDeletes` trait does two things — adds a `SoftDeletingScope` global scope that filters out rows where `deleted_at` is set, and overrides `delete()` to set `deleted_at = now()` instead of issuing `DELETE`. `forceDelete()` bypasses the trait for actual deletion."*

### "Can you pass parameters to a global scope?"

> *"Not directly — global scopes are registered once. You parameterize them via dependencies — the `TenantScope` reads `auth()->user()` at query time. If you need true parameters, use a local scope instead."*

### "Difference between scope and accessor/mutator?"

> *"Scopes operate on the **query builder** — they shape the SQL. Accessors and mutators transform **attribute values** on a loaded model — they don't touch the query. Different layers, different jobs."*

### "How do you make a scope chainable?"

> *"Local scopes are chainable by default — they return the query builder. With the new attribute syntax, the method has `void` return and the builder is modified in place. Just make sure the body modifies `$query`, not creates a new one."*

---

## Recovery — when you blank

If you forget the attribute syntax, just say:

> *"Two ways to write a local scope — the classic `scopePublished` method, or the new `#[Scope]` attribute in Laravel 11+."*

If you forget how to opt out of a global scope, say:

> *"`withoutGlobalScope(ClassName::class)` on the query."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Confuses scope with accessor | Different layers | Scope = query builder. Accessor = model attribute |
| Forgets `booted()` registration | Global scope silently never runs | Always show the `booted()` method |
| Doesn't mention soft deletes as a global scope | Misses the classic example | Always cite `SoftDeletingScope` |
| Uses global scope for opt-in constraints | Makes admin views painful | Opt-in = local. Always-on = global |
| Forgets `withoutGlobalScopes()` | Doesn't know how to bypass | Mention the opt-out methods |

---

## Variants

=== "30s — Quick screen"

    > "Local scopes are opt-in methods on the model — `Post::published()->get()`. Global scopes are always applied — register via `booted()` calling `addGlobalScope`. Soft deletes is a built-in global scope. Opt out with `withoutGlobalScope(ClassName::class)`."

=== "45s — Default"

    See main 3-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Write a local scope with the new attribute syntax. Write a `TenantScope` global scope with the `booted()` registration. Show `Post::withoutGlobalScope(TenantScope::class)` for the admin escape hatch. Mention `SoftDeletes` as the canonical global scope.

---

## After you drill this

When this is **● Drilled**, you can keep your controllers clean and answer the multi-tenancy question without panic.

Next drills:

→ **[Eager Loading](eloquent-eager-loading.md)** — *the perf side of queries*
→ **[Mutators & Accessors](eloquent-mutators-accessors.md)** — *the attribute side*
→ **[Relationships](eloquent-relationships.md)** — *what scopes often filter*

---

*Update your status badge once you can write both scope types from memory and explain when to choose which in one sentence.*
