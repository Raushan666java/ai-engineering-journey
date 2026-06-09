---
title: The N+1 Query Problem — Laravel Eloquent
---

# The N+1 Query Problem

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

If you list Laravel on your resume, this question **will** be asked. It separates students who copy-pasted CRUD tutorials from candidates who've actually shipped production code.

This drill gives you a 4-sentence answer, code that demonstrates the fix, and the follow-up questions you must be ready for.

---

## Inhale.

Picture the scene. The interviewer leans in. You're three minutes into a Laravel deep-dive.

> *"So… how does Eloquent handle relationships? And what's the N+1 problem?"*

Don't answer fast. Pause for one beat. Then deliver the script.

---

## The Script — 4 sentences

> *"The N+1 problem is when you fetch a parent collection in one query, and then loop through it accessing a relationship — Laravel fires one extra query per child. So loading 100 users and printing each user's profile becomes 101 queries: 1 for users, 100 for profiles."*
>
> *"The fix is **eager loading** with `::with()`. `User::with('profile')->get()` makes it exactly 2 queries — one for users, one for all profiles at once, joined in PHP. Laravel's collection mapping handles the rest."*
>
> *"I caught this in my fest portal project — Laravel Debugbar showed 2,000 queries on the user list page because I was lazy-loading the team relationship inside a Blade `@foreach`. Adding `::with('team')` dropped it to 3 queries."*
>
> *"To prevent it from happening again, I now enable `Model::preventLazyLoading()` in `AppServiceProvider` for non-production environments — it throws an exception the moment lazy loading happens, so I see it in dev, not in prod logs."*

Four sentences. Definition → fix → real anecdote → senior-level prevention. **Forty-five seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **definition with a number**. *"100 users becomes 101 queries"* sticks in their head better than *"it's inefficient."* They mentally upgrade your level the moment you say *"101."*

Sentence 2 — **fix with exact syntax**. You name the method (`::with()`), you state the result (*"2 queries"*), you don't wave hands. Interviewer ticks the box.

Sentence 3 — **real project anecdote with a metric**. *"2,000 queries → 3 queries"* is your war story. Anecdote with a number means *you actually shipped this*. No one fakes specific numbers.

Sentence 4 — **senior-level prevention**. `Model::preventLazyLoading()` is the kind of detail only people who've debugged this in production know. Drop it. The interviewer will ask one follow-up and then move on, satisfied.

---

## Show me the code

The interviewer might say: *"Can you write the bad version and the good version?"*

Here's what you write on the whiteboard or shared editor:

```php
// ❌ BAD — N+1
$users = User::all();            // 1 query
foreach ($users as $user) {
    echo $user->profile->city;   // +1 query per user
}
// Total: 1 + N queries
```

```php
// ✅ GOOD — Eager loading
$users = User::with('profile')->get();   // 2 queries total
foreach ($users as $user) {
    echo $user->profile->city;            // no extra queries
}
```

```php
// ✅ NESTED — works for chains
$users = User::with('profile.country', 'posts.comments')->get();
```

```php
// ✅ CONDITIONAL — load with constraints
$users = User::with(['posts' => function ($q) {
    $q->where('published', true)->latest();
}])->get();
```

```php
// ✅ COUNT WITHOUT LOAD — just need the number
$users = User::withCount('posts')->get();
// $user->posts_count is available, no posts loaded
```

```php
// ✅ PREVENT IN DEV — AppServiceProvider::boot()
use Illuminate\Database\Eloquent\Model;

public function boot(): void
{
    Model::preventLazyLoading(! app()->isProduction());
}
```

You don't memorize all six. You memorize **the first two**. The other four are for follow-ups.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** Out loud. Time it. Should land at 40–50 seconds.
- [ ] **Day 2 — Write the BAD and GOOD code blocks from memory.** No copy-paste. Open a fresh editor, write both, verify the syntax compiles in your project.
- [ ] **Day 3 — Run it in your actual project.** Open Laravel Debugbar. Load a page with a relationship. Count the queries. Now add `::with()`. Count again. **You need to have seen the number drop with your own eyes** — that's how you'll talk about it convincingly.
- [ ] **Day 4 — Drill the 4 follow-up questions** (below) until each has a 1–2 sentence answer.
- [ ] **Day 5 — Mock interview.** Ask a friend to say *"explain N+1 in Eloquent."* Deliver the 4-sentence script without notes. Then have them ask any 2 follow-ups. Pass = no filler, no *"umm"*.

---

## Follow-up questions you must be ready for

The interviewer hears your script and immediately fires one of these. Have a 1–2 sentence answer ready for each.

### "What if the relationship is nested?"

> *"Dot notation in `with()` — `User::with('profile.country')->get()`. You can also pass an array for multiple top-level relations: `with(['profile', 'posts'])`."*

### "How is `with()` different from `load()`?"

> *"`with()` is eager — you call it when building the query. `load()` is **lazy eager loading** — you call it on an already-fetched collection, when you decide later that you need the relationship. Both produce the same query count, just at different points in the flow."*

### "What about `withCount` vs `loadCount`?"

> *"Same pattern — `withCount('posts')` at query build time, `loadCount('posts')` on an existing collection. Adds a `posts_count` attribute without loading the posts themselves. Use when you only need the count, not the rows."*

### "What if I just need to check if a relationship exists?"

> *"`whereHas()` for filtering — `User::whereHas('posts')->get()` returns only users who have posts. `has('posts')` is the shorthand without a callback. Doesn't load the posts, just filters."*

### "Trap: what's wrong with this — `User::with('posts')->where('posts.published', true)`?"

> *"That `where` clause targets the parent table, not the eager-loaded relation. The query will fail or filter wrong. You constrain the eager load with a closure: `with(['posts' => fn($q) => $q->where('published', true)])`. The parent `where` is for filtering users; the closure is for filtering their posts."*

### "How would you detect N+1 in production?"

> *"Three options. (1) `Model::preventLazyLoading()` in non-prod — throws on lazy access, you catch it before deploy. (2) Laravel Telescope in staging — watches query counts per request. (3) APM tools like New Relic or Datadog in prod — flag slow endpoints with high query counts. I prefer option 1 — fail loud in dev, not silent in prod."*

---

## Recovery — when you blank

If you forget the definition mid-sentence, **buy time with the example**:

> *"Let me show it with a concrete case — if I have 100 users and I loop printing each user's profile, that's…"*

By the time you write `User::all()` and `foreach`, your brain catches up. The interviewer thinks you're being deliberate. You're actually recovering.

If you forget the fix syntax, **never guess**. Say:

> *"The method is on the query builder — `with` or `load` depending on whether the collection is already fetched. Let me write it out."*

Then write it. The act of typing recovers most students.

If you forget the anecdote, **swap projects on the fly**. Any project with a `@foreach` over a relationship works:

> *"In my [other project], the dashboard listed [items] with their [parent], and the page was slow. Same pattern — added `::with()`, queries dropped from [round number] to [single digit]."*

Round numbers (50, 100, 1000) are safer than precise numbers (47, 213) if you're not sure.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Says *"use joins instead"* | Misses that Eloquent eager loads use 2 separate queries, not joins, on purpose (collection mapping in PHP) | Eager load = 2 queries. JOIN = 1 query but raw rows, no model hydration. |
| Confuses `with` and `load` | Senior interviewer's gotcha — they'll ask both | `with` = eager at build time. `load` = lazy-eager on existing collection. |
| Says *"call `lazy()` to fix it"* | `lazy()` is for chunking large result sets, not for N+1 | Don't conflate. `lazy()` solves memory, `with()` solves query count. |
| No anecdote | Sounds like you read a blog, never shipped it | Always pair the definition with one real project moment |
| Forgets `preventLazyLoading` | Tells them you don't run prod-quality code | Mention it as the *prevention* layer, even if you don't elaborate |

---

## Variants

=== "30s — Quick screen"

    > "N+1 is when fetching a collection then looping over a relationship — Laravel fires one extra query per row. Fix: `User::with('profile')->get()` — 2 queries instead of 101. I caught one in my fest portal that was firing 2,000 queries on a list page."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the 4-sentence script. Then write the BAD + GOOD code. Then mention `withCount`, `whereHas`, and `preventLazyLoading` as related tools. Close with: *"Want me to walk through how I'd profile a slow endpoint for query patterns?"* — that pivots to your Laravel performance story if they have time.

---

## After you drill this

When this drill is **● Drilled**, you have unlocked one of the top 5 most-asked Laravel questions. Combined with the rest of the Laravel phase, you make the Laravel round feel routine.

Next drills in this phase:

→ **Service Container & Dependency Injection** — *the 3-minute explanation*
→ **Middleware Pipeline** — *what happens between request and controller*
→ **Queues & Jobs in Production** — *why your background email failed silently*

---

*Update your status badge at the top of this page once you can deliver the 4-sentence script, write both code blocks from memory, and answer any 2 of the 6 follow-ups without notes.*
