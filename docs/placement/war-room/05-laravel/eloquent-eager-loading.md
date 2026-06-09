---
title: Eager Loading — with, load, withCount
---

# Eager Loading Deep Dive

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

If [N+1](n-plus-one.md) is *the problem*, eager loading is *the toolkit*. The interviewer will go past `with()` and ask about `load`, `withCount`, conditional eager, `loadMissing`, and `withWhereHas`. You need every tool named.

This drill gives you a 4-sentence script, every eager-loading method, and the difference between `with` and `load`.

---

## Inhale.

The interviewer asks:

> *"You said eager loading fixes N+1. Walk me through all the eager-loading tools Eloquent gives you."*

Pause. Then deliver.

---

## The Script — 4 sentences

> *"Lazy loading fetches a relationship on demand — `$user->profile` fires a query the first time. Eager loading fetches relationships upfront in a separate query and matches them in PHP, so 100 users + their profiles becomes 2 queries instead of 101."*
>
> *"`with('profile')` is the build-time form — you declare it on the query before fetching. `load('profile')` is the runtime form — call it on an already-fetched collection when you decide later you need the relationship. `loadMissing` is `load`'s idempotent twin — skips relations already loaded."*
>
> *"`withCount('posts')` adds a `posts_count` attribute without loading the posts themselves — for *number-of* questions. `withExists('posts')` is the same pattern for boolean — *does this user have any posts?* Both produce subqueries, no extra round trips."*
>
> *"For constrained eager loads — *only published posts* — use a closure: `with(['posts' => fn ($q) => $q->where('published', true)])`. For filtering parents by a relation that's also loaded, `withWhereHas` does both in one call. In my fest portal switching from `whereHas` + `with` to `withWhereHas` cut one query and one bug."*

Four sentences. Definition → with vs load → count/exists → constraints + anecdote. **Sixty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **definition with numbers**. *"2 instead of 101"* sticks.

Sentence 2 — **with / load / loadMissing trio**, each with its trigger condition.

Sentence 3 — **count / exists pair** — both subquery-based, both common in dashboards.

Sentence 4 — **constraint syntax** + the `withWhereHas` upgrade. This is the senior-level tool.

---

## Show me the code

```php
// 1. with() — build-time eager loading
$users = User::with('profile')->get();
$users = User::with(['profile', 'posts'])->get();   // multiple
$users = User::with('posts.comments.author')->get(); // nested, dot notation
```

```php
// 2. load() — runtime eager loading on existing collection
$users = User::all();        // already fetched
// ... later decide we need profiles
$users->load('profile');
$users->load(['profile', 'posts']);
```

```php
// 3. loadMissing() — load only if not already loaded
$users = User::with('profile')->get();
$users->loadMissing('profile');   // no-op
$users->loadMissing('posts');     // loads posts
```

```php
// 4. Conditional eager — closure constraints
$users = User::with(['posts' => function ($query) {
    $query->where('published', true)
          ->latest()
          ->limit(5);
}])->get();

// Short arrow syntax
$users = User::with([
    'posts' => fn ($q) => $q->where('published', true),
])->get();
```

```php
// 5. Select only specific columns from a relation
$users = User::with('posts:id,user_id,title')->get();
// MUST include the FK (user_id), or matching breaks
```

```php
// 6. withCount() — count related rows without loading them
$users = User::withCount('posts')->get();
foreach ($users as $user) {
    echo $user->posts_count;  // automatic attribute
}

// Multiple counts, with constraints
$users = User::withCount([
    'posts',
    'posts as published_posts_count' => fn ($q) => $q->where('published', true),
])->get();

// Runtime equivalent
$users = User::all();
$users->loadCount('posts');
```

```php
// 7. withExists() — boolean instead of count
$users = User::withExists('posts')->get();
foreach ($users as $user) {
    if ($user->posts_exists) { /* ... */ }
}
```

```php
// 8. withSum / withMax / withMin / withAvg — aggregate subqueries
$users = User::withSum('orders', 'total')
             ->withMax('orders', 'created_at')
             ->get();

// $user->orders_sum_total, $user->orders_max_created_at
```

```php
// 9. has() / whereHas() — filter parents by relation
User::has('posts')->get();                       // users with ≥ 1 post
User::has('posts', '>=', 3)->get();              // users with 3+ posts
User::whereHas('posts', fn ($q) =>
    $q->where('published', true)
)->get();                                         // users with ≥ 1 published post
User::doesntHave('posts')->get();                // users with 0 posts
```

```php
// 10. withWhereHas — filter AND eager-load in one call (Laravel 9+)
$users = User::withWhereHas('posts', fn ($q) =>
    $q->where('published', true)
)->get();

// Equivalent to:
// User::with(['posts' => fn ($q) => $q->where('published', true)])
//     ->whereHas('posts', fn ($q) => $q->where('published', true))
//     ->get();
// But ONE constraint definition, not two.
```

```php
// 11. Lazy eager nested + count combos
$users = User::with(['posts' => fn ($q) =>
    $q->withCount('comments')->latest()->limit(3)
])->get();

// users → top 3 latest posts each → comment count per post
```

```php
// 12. Prevent lazy loading entirely (dev guard)
use Illuminate\Database\Eloquent\Model;

// AppServiceProvider::boot()
Model::preventLazyLoading(! app()->isProduction());
// Throws LazyLoadingViolationException on any lazy access in dev.
```

Memorize `with`, `load`, `withCount`, and the constraint closure. Everything else is follow-up ammo.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** 55–65 seconds.
- [ ] **Day 2 — Write `with`, `load`, `loadMissing`, `withCount`, `withExists` from memory.**
- [ ] **Day 3 — In your project, install Laravel Debugbar. Open a relationship-heavy page. Verify each tool's query count.**
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"name 5 eager loading methods"*. You list 7. They ask *"with vs load"*. You answer in one sentence.

---

## Follow-up questions you must be ready for

### "When use `load` instead of `with`?"

> *"`load` when you've already fetched the collection and *then* discover you need a relationship — typically after a conditional. `with` is always preferable when you know upfront. Both result in the same query count; `with` just keeps the intent at the top of the method."*

### "What's the difference between `withCount` and `loadCount`?"

> *"Same as `with` vs `load`. `withCount('posts')` at query build time. `loadCount('posts')` on an already-fetched collection. Both produce a `posts_count` attribute via a subquery — no posts loaded, just the count."*

### "Why include the FK in `with('posts:id,user_id,title')`?"

> *"Eloquent matches eager-loaded rows back to parents using the foreign key. If you select only `id, title` and skip `user_id`, the matching fails — you get empty relations. Always include the FK in the column selection."*

### "When does `withWhereHas` beat `with` + `whereHas`?"

> *"When the *same constraint* applies to both. `with` + `whereHas` requires duplicating the closure — one for filtering parents, one for filtering the eager load. `withWhereHas` writes the constraint once and uses it for both. Less code, fewer bugs."*

### "How do you eager-load polymorphic relations?"

> *"`Comment::with('commentable')->get()` works — Eloquent groups comments by `commentable_type` and fires one query per type. For per-type nested loads, use `morphWith`: `Comment::with(['commentable' => fn ($q) => $q->morphWith([Post::class => ['author']])])`."*

### "How do you guarantee you'll catch N+1 before production?"

> *"`Model::preventLazyLoading(! app()->isProduction())` in `AppServiceProvider::boot()`. Throws `LazyLoadingViolationException` the moment a relationship is lazy-loaded in dev — you see it in tests and local, never in prod."*

---

## Recovery — when you blank

If you forget the dot notation, say:

> *"Nested relations use dots — `with('posts.comments')`. Or array for multiple top-level."*

If you forget `withWhereHas`, say:

> *"There's a newer method that combines `with` and `whereHas` with one constraint — I always have to look up the exact name. Functionally it's: filter parents and load the relation matching the same condition."*

That's honest and accurate.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Confuses `with` and `load` | Senior gotcha | `with` = build-time. `load` = runtime |
| Forgets FK in column selection | Empty relations | Always include FK with `:id,user_id,…` |
| Uses join instead of `with` for N+1 | JOIN returns flat rows, not hydrated models | Eager load = 2 queries with model hydration. JOIN = 1 query of raw rows |
| Duplicates closure in `with` + `whereHas` | Bug surface | Use `withWhereHas` |
| Forgets `preventLazyLoading` | N+1 reappears | Cite it as the prevention layer |

---

## Variants

=== "30s — Quick screen"

    > "`with('profile')` eager loads at query build time. `load('profile')` after fetch. `withCount('posts')` for count only. Constraint closures for filtered relations. `withWhereHas` for filter+load in one. `preventLazyLoading` in dev catches misses."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Write `with`, `load`, `withCount`, conditional closure, `withWhereHas`. Show `preventLazyLoading` in `AppServiceProvider`. Pivot to the [N+1 drill](n-plus-one.md) as the problem statement.

---

## After you drill this

When this is **● Drilled**, you and N+1 are a one-two punch — you can both diagnose and prevent the most-common Laravel perf issue.

Next drills:

→ **[N+1 Problem](n-plus-one.md)** — *the problem this solves*
→ **[Relationships](eloquent-relationships.md)** — *what you're eager loading*
→ **[Scopes](eloquent-scopes.md)** — *combine scopes with eager loading*

---

*Update your status badge once you can name 7 eager-loading methods and explain `with` vs `load` in one sentence.*
