---
title: Eloquent Relationships — All 7 Types
---

# Eloquent Relationships

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This is the "do you actually know Eloquent" filter. Most candidates name 3 relationship types and stop. You will name all 7, with the foreign key conventions for each.

This drill gives you a 4-sentence script, a code example for every relationship, and the polymorphic gotcha.

---

## Inhale.

The interviewer asks:

> *"Walk me through all the relationship types in Eloquent."*

Pause. Then deliver — and count on your fingers.

---

## The Script — 4 sentences

> *"Eloquent has seven relationship types. The simple ones — `hasOne`, `hasMany`, `belongsTo` — model one-to-one and one-to-many between two tables, where the child table holds the foreign key."*
>
> *"`belongsToMany` handles many-to-many via a pivot table, which Eloquent doesn't auto-create — you write the migration yourself. `hasOneThrough` and `hasManyThrough` reach across an intermediate table — like a country has many posts through users."*
>
> *"The polymorphic family — `morphOne`, `morphMany`, `morphTo`, `morphToMany` — let one model attach to many parent types via a `*_type` and `*_id` column pair. Common use is comments that can belong to posts, videos, or articles, all in one comments table."*
>
> *"Foreign key conventions follow snake_case + `_id` — `user_id` on `posts`. You override with the second argument if your column doesn't match. In my fest portal I used `morphMany` on a single `Attachment` model so events, sponsors, and speakers could all have files without three separate tables."*

Four sentences. Seven types grouped → pivot caveat → polymorphic → conventions + anecdote. **Sixty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **groups the simple three**. Easier to remember and to deliver.

Sentence 2 — **pivot caveat**. *"Eloquent doesn't auto-create the pivot"* — a real gotcha you've hit.

Sentence 3 — **names the polymorphic four**. Plus a concrete example interviewers love (single comments table).

Sentence 4 — **convention naming + override + anecdote**. You sound like you've actually used `morphMany`.

---

## Show me the code

```php
// 1. hasOne — one-to-one (parent → child)
class User extends Model
{
    public function profile()
    {
        return $this->hasOne(Profile::class);
        // Assumes profiles.user_id. Override:
        // return $this->hasOne(Profile::class, 'fk_user_id', 'id');
    }
}

// Inverse
class Profile extends Model
{
    public function user()
    {
        return $this->belongsTo(User::class);
        // Assumes profiles.user_id. Override:
        // return $this->belongsTo(User::class, 'fk_user_id', 'id');
    }
}
```

```php
// 2. hasMany — one-to-many
class User extends Model
{
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}

// Usage
$user->posts;                          // Collection of posts
$user->posts()->where('published', true)->get();
$user->posts()->create(['title' => 'Hi']);  // sets user_id automatically
```

```php
// 3. belongsTo — child → parent
class Post extends Model
{
    public function author()
    {
        return $this->belongsTo(User::class, 'user_id');
    }
}

// Usage
$post->author->name;
$post->author()->associate($user);    // sets FK without saving
$post->save();
```

```php
// 4. belongsToMany — many-to-many via pivot
class User extends Model
{
    public function roles()
    {
        return $this->belongsToMany(Role::class);
        // Assumes pivot table 'role_user' (alphabetical), with user_id + role_id
        // Override: belongsToMany(Role::class, 'user_roles', 'uid', 'rid')
    }
}

// Pivot table migration (you write this)
Schema::create('role_user', function (Blueprint $table) {
    $table->foreignId('user_id')->constrained()->cascadeOnDelete();
    $table->foreignId('role_id')->constrained()->cascadeOnDelete();
    $table->timestamps();             // optional, requires ->withTimestamps()
    $table->primary(['user_id', 'role_id']);
});

// Pivot operations
$user->roles()->attach($roleId);
$user->roles()->detach($roleId);
$user->roles()->sync([1, 2, 3]);
$user->roles()->syncWithoutDetaching([4]);

// Access pivot data
foreach ($user->roles as $role) {
    echo $role->pivot->created_at;
}
// To read extra pivot columns: ->withPivot('approved_at') in the relation
```

```php
// 5. hasManyThrough — A → B → C (no direct FK from A to C)
class Country extends Model
{
    public function posts()
    {
        return $this->hasManyThrough(
            Post::class,    // target
            User::class,    // intermediate (users.country_id, posts.user_id)
        );
    }
}

// Country has many Posts through Users
$country->posts;   // all posts by users from that country
```

```php
// 6. Polymorphic one-to-many — morphMany / morphTo
class Comment extends Model
{
    public function commentable()
    {
        return $this->morphTo();
        // Reads commentable_type + commentable_id columns
    }
}

class Post extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

class Video extends Model
{
    public function comments()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
}

// Migration
Schema::create('comments', function (Blueprint $table) {
    $table->id();
    $table->text('body');
    $table->morphs('commentable');   // commentable_id + commentable_type, indexed
    $table->timestamps();
});

// Usage
$post->comments()->create(['body' => 'Nice!']);
$comment->commentable;     // returns the Post or Video
```

```php
// 7. Polymorphic many-to-many — morphToMany / morphedByMany
class Tag extends Model
{
    public function posts()
    {
        return $this->morphedByMany(Post::class, 'taggable');
    }

    public function videos()
    {
        return $this->morphedByMany(Video::class, 'taggable');
    }
}

class Post extends Model
{
    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }
}

// Pivot migration
Schema::create('taggables', function (Blueprint $table) {
    $table->foreignId('tag_id')->constrained()->cascadeOnDelete();
    $table->morphs('taggable');
});
```

```php
// Polymorphic type column hardening — avoid model class names in DB
use Illuminate\Database\Eloquent\Relations\Relation;

Relation::enforceMorphMap([
    'post'  => \App\Models\Post::class,
    'video' => \App\Models\Video::class,
]);
// Now commentable_type stores 'post' instead of 'App\Models\Post' — safe to rename classes.
```

Memorize the first three. Polymorphic and `belongsToMany` are the follow-up favorites.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** 55–65 seconds.
- [ ] **Day 2 — Write each of the 7 relationships from memory.** No copy-paste. Verify in a fresh Laravel project.
- [ ] **Day 3 — Build a `morphMany` Attachments setup in your project.** Migration + 2 parent models + usage.
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend names a domain (*"a school with students, teachers, classes"*); you map it to the right relationship types in 60 seconds.

---

## Follow-up questions you must be ready for

### "How does `belongsToMany` differ from `hasMany`?"

> *"`hasMany` is one-to-many with a foreign key on the child table. `belongsToMany` is many-to-many via a pivot table with two foreign keys. The pivot table holds the relationship; neither parent table changes. Pivot rows can carry extra columns — timestamps, approved_at — accessed via `pivot` on the related model."*

### "What's the difference between `morphMany` and `morphToMany`?"

> *"`morphMany` is polymorphic **one-to-many** — many comments on one post or video, with `commentable_type` and `commentable_id` on the comments table. `morphToMany` is polymorphic **many-to-many** — many tags on many posts and videos, via a `taggables` pivot table with `taggable_type` and `taggable_id`."*

### "Why use `enforceMorphMap`?"

> *"By default the `*_type` column stores the full class name like `App\Models\Post`. Rename the model and existing rows break. `enforceMorphMap` lets you store short aliases — `'post' => Post::class` — so renames are safe. Always do this in production."*

### "How do you eager-load polymorphic relations?"

> *"`Comment::with('commentable')->get()` works — Eloquent groups comments by `commentable_type` and fires one query per type. For nested loads, `Comment::with('commentable.author')` works for relationships shared across types. For per-type nesting, use `morphWith`."*

### "What's the difference between `attach`, `sync`, and `syncWithoutDetaching`?"

> *"`attach($ids)` adds new pivot rows, ignores existing. `sync($ids)` replaces — removes anything not in the new array, adds anything missing. `syncWithoutDetaching($ids)` is sync minus the detach — only adds new, never removes. Use `sync` for full replacement, `attach` for purely additive, `syncWithoutDetaching` for additive with idempotency."*

### "How do you query a relationship's existence?"

> *"`has` / `whereHas` for filtering. `User::has('posts')->get()` returns users with at least one post. `User::whereHas('posts', fn($q) => $q->where('published', true))->get()` constrains. `doesntHave` and `whereDoesntHave` invert."*

---

## Recovery — when you blank

If you forget polymorphic, say:

> *"I always need a moment with the polymorphic ones — let me draw the columns. `commentable_type`, `commentable_id` — that's the pattern. `morphMany` and `morphTo` are the inverse pair."*

If you forget the pivot table name convention, say:

> *"Alphabetical — for `User` and `Role`, the pivot is `role_user` because R comes before U."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Says Eloquent auto-creates pivot tables | False — you write the migration | Always mention *"you write the pivot migration yourself"* |
| Confuses `hasOne` and `belongsTo` | Wrong side of the FK | FK on child = `belongsTo`. FK on the other end = `hasOne` |
| Forgets polymorphic morphMap | Class renames break the data | Always mention `enforceMorphMap` for prod |
| Names only 3 relationship types | Misses the breadth signal | Always say *"there are 7"* and group them |
| Uses `attach` when they mean `sync` | Duplicates pivot rows | `attach` = additive, `sync` = replacement |

---

## Variants

=== "30s — Quick screen"

    > "Seven relationship types. Simple — `hasOne`, `hasMany`, `belongsTo`. Many-to-many — `belongsToMany` via a pivot. Through — `hasManyThrough` for indirect parents. Polymorphic — `morphMany`, `morphTo`, `morphToMany` for one model attaching to many parent types."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Whiteboard the FK columns for `hasMany` vs `belongsToMany` (pivot) vs `morphMany` (`commentable_type` + `commentable_id`). Mention `enforceMorphMap`. Show one `belongsToMany` migration. Close with the `with()` cross-link to the N+1 drill.

---

## After you drill this

When this is **● Drilled**, the *"explain relationships"* question is one-shot.

Next drills:

→ **[N+1 Problem](n-plus-one.md)** — *the relationship performance question*
→ **[Eager Loading](eloquent-eager-loading.md)** — *`with`, `load`, `withCount`, deep dive*
→ **[Scopes](eloquent-scopes.md)** — *local and global query constraints*

---

*Update your status badge once you can name all 7 types, write each from memory, and answer the `morphMany` vs `morphToMany` question without notes.*
