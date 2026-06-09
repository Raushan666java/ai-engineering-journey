---
title: Migrations — Laravel Schema
---

# Migrations

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

This is the *"how do you manage your database?"* question. The wrong answer is *"I use phpMyAdmin"*. The right answer is **migrations** with a clear explanation of `up`/`down`, foreign keys, and rollback.

This drill gives you a 4-sentence script, the full schema builder vocabulary, and the dangers of `migrate:fresh` in prod.

---

## Inhale.

The interviewer asks:

> *"How do migrations work in Laravel? Why use them instead of raw SQL?"*

Pause. Then deliver.

---

## The Script — 4 sentences

> *"Migrations are version control for the database schema — each file describes a change in PHP (`up()`) and how to undo it (`down()`). Running `php artisan migrate` applies pending migrations in timestamp order, tracking which ones have run in a `migrations` table."*
>
> *"The win over raw SQL is portability and reviewability — the same migration runs on every developer's MySQL, the CI's MySQL, and prod's MySQL, and the diff lives in git alongside the code that depends on it."*
>
> *"Schema is built with `Schema::create`, `Schema::table` for alterations, column types like `string`, `integer`, `foreignId`, and modifiers like `nullable`, `unique`, `default`. Foreign keys with `foreignId('user_id')->constrained()->cascadeOnDelete()` are one line — Laravel infers the referenced table."*
>
> *"Rollback is `migrate:rollback --step=1`. `migrate:fresh` drops every table and re-runs — use it freely in dev, never in prod. In my fest portal I learned this the hard way when a `fresh` on staging cost me three days of seeded test data."*

Four sentences. Definition → why over SQL → schema builder + FK syntax → rollback + anecdote. **Sixty seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **version control framing**. *"`up` and `down`"* signals you understand the bidirectional model.

Sentence 2 — **portability** is the *why*. Most candidates skip this and just describe the syntax.

Sentence 3 — **modern FK syntax**. `foreignId()->constrained()->cascadeOnDelete()` is a one-liner that proves you've kept up with Laravel 7+.

Sentence 4 — **`fresh` warning + anecdote**. Real pain = real experience.

---

## Show me the code

```php
// Generate a migration
// php artisan make:migration create_posts_table
// php artisan make:migration add_status_to_posts_table --table=posts

namespace Database\Migrations;

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->id();                                  // bigIncrements
            $table->foreignId('user_id')
                  ->constrained()
                  ->cascadeOnDelete();                     // references users.id
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('body');
            $table->boolean('published')->default(false);
            $table->timestamp('published_at')->nullable();
            $table->json('meta')->nullable();
            $table->timestamps();                          // created_at + updated_at
            $table->softDeletes();                         // deleted_at

            $table->index(['user_id', 'published']);       // composite index
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
```

```php
// Common column types — schema builder vocabulary
$table->id();                                  // bigint auto-increment PK
$table->uuid('id')->primary();                 // UUID PK
$table->ulid('id')->primary();                 // ULID PK (Laravel 9+)
$table->string('name', 100);                   // VARCHAR(100)
$table->char('code', 4);                       // CHAR(4)
$table->text('body');                          // TEXT
$table->longText('content');                   // LONGTEXT
$table->integer('views');                      // INT
$table->bigInteger('count');                   // BIGINT
$table->unsignedTinyInteger('rank');           // 0–255
$table->decimal('price', 8, 2);                // DECIMAL(8,2)
$table->float('rating', 8, 2);                 // FLOAT
$table->boolean('active');
$table->date('birthday');
$table->dateTime('published_at');
$table->timestamp('created_at')->useCurrent();
$table->json('settings');
$table->enum('role', ['admin', 'user', 'guest']);
$table->morphs('commentable');                 // commentable_id + commentable_type + index
$table->uuidMorphs('owner');                   // UUID variant
```

```php
// Modifiers — chained after column type
$table->string('email')->unique();
$table->string('phone')->nullable();
$table->boolean('verified')->default(false);
$table->integer('priority')->default(0)->index();
$table->string('slug')->unique()->after('title');     // column ordering
$table->string('name')->comment('Full display name');  // DB comment
```

```php
// Foreign keys — three styles
// 1. Modern (Laravel 7+) — preferred
$table->foreignId('user_id')->constrained()->cascadeOnDelete();
$table->foreignId('team_id')->nullable()->constrained()->nullOnDelete();
$table->foreignId('category_id')->constrained('categories', 'id');  // explicit table

// 2. Manual
$table->unsignedBigInteger('user_id');
$table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

// 3. Laravel 9+ inline with custom name
$table->foreignIdFor(\App\Models\User::class)->constrained()->cascadeOnDelete();
```

```php
// Altering existing tables
return new class extends Migration
{
    public function up(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->string('status')->default('draft')->after('body');
            $table->index('status');
        });
    }

    public function down(): void
    {
        Schema::table('posts', function (Blueprint $table) {
            $table->dropIndex(['status']);
            $table->dropColumn('status');
        });
    }
};

// Renaming a column — requires doctrine/dbal in Laravel < 10
// $table->renameColumn('from', 'to');
// $table->dropColumn(['col_a', 'col_b']);
```

```php
// Common artisan commands
// php artisan migrate                # run pending
// php artisan migrate --pretend      # show SQL without running
// php artisan migrate --step         # run + record each in its own batch (easier rollback)
// php artisan migrate:status         # what's run, what's pending
// php artisan migrate:rollback       # roll back the last batch
// php artisan migrate:rollback --step=2
// php artisan migrate:reset          # roll back ALL
// php artisan migrate:refresh        # rollback + migrate
// php artisan migrate:fresh          # DROP all tables + migrate (DEV ONLY)
// php artisan migrate:fresh --seed   # + seeders
```

```php
// Conditional logic — environment-aware migrations
public function up(): void
{
    if (app()->environment('production')) {
        // skip a dev-only seed migration
        return;
    }
    // ...
}
```

Memorize `Schema::create`, `foreignId()->constrained()->cascadeOnDelete()`, and the timestamps/softDeletes pair.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 4-sentence script, 5×.** 55–65 seconds.
- [ ] **Day 2 — Write a `create_posts_table` migration from memory.** Include FK, soft deletes, composite index.
- [ ] **Day 3 — Write a follow-up `add_status_to_posts_table` migration with proper `up` and `down`.**
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"how do migrations work?"* You answer in 60 seconds + write a posts migration.

---

## Follow-up questions you must be ready for

### "What's `migrate:fresh` vs `migrate:refresh`?"

> *"`fresh` drops every table then re-runs all migrations — fast, ignores `down()`. `refresh` runs `down()` on every migration in reverse, then `up()` — slower but tests your `down()` methods. Use `fresh` in dev for speed, `refresh` when you want to verify rollback works."*

### "When do you NOT add a `down()` method?"

> *"In data migrations where rollback is impossible — like backfilling a column from external data. You can write `throw new Exception('Irreversible')` to fail loudly if someone tries. Most schema migrations should have a real `down()` so rollback works in CI and prod."*

### "What's a 'batch' in migrations?"

> *"Migrations run together share a batch number, recorded in the `migrations` table. `migrate:rollback` undoes the most recent batch. Two migrations run in the same `php artisan migrate` are in the same batch, so they roll back together. `--step` flag puts each in its own batch."*

### "How do you change a column type or name?"

> *"`$table->renameColumn('old', 'new')` for renames. To change type — `$table->string('email', 100)->change()`. Pre-Laravel 10, both require `composer require doctrine/dbal`. Laravel 11+ has native support for most type changes."*

### "Why are migration files prefixed with a timestamp?"

> *"To enforce execution order. Laravel reads filenames sorted ascending and runs them in that order. The timestamp prevents merge conflicts — two developers adding migrations on different branches get different timestamps, both run cleanly. Never rename or reorder timestamps after committing."*

### "How do you seed test data?"

> *"`php artisan make:seeder PostSeeder`, fill the `run()` method with model factories or raw inserts, register in `DatabaseSeeder::run()`, then `php artisan db:seed` or `migrate:fresh --seed`. Factories are the modern way — `Post::factory()->count(50)->create()`."*

---

## Recovery — when you blank

If you forget the FK syntax, fall back to two-step:

> *"There's a one-liner — `foreignId(...)->constrained()`. If I'm rusty I write the manual version — `unsignedBigInteger` then `foreign(...)->references(...)->on(...)`."*

If you forget rollback commands, just say:

> *"Roll back the last batch with `migrate:rollback`. Reset everything with `migrate:reset` or nuke and rebuild with `migrate:fresh` — dev only."*

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Says `migrate:fresh` is safe in prod | Drops all tables — career-ending | Always say *"`fresh` is DEV ONLY"* |
| Forgets `down()` method | Rollback breaks | Either write `down()` or `throw new Exception('Irreversible')` |
| Edits an already-run migration file | Migration was recorded but new code differs | Always create a NEW migration to alter, never edit a run one |
| Names FK column wrong | Auto-constraint fails | Use `user_id` → `users.id` convention, override only when needed |
| Forgets indexes | Slow queries on FK lookups | `foreignId` auto-indexes the FK column. Add composite indexes manually |

---

## Variants

=== "30s — Quick screen"

    > "Migrations are PHP schema files with `up` and `down` methods, run in timestamp order, tracked in a `migrations` table. Portable across environments, reviewable in git. `Schema::create` for new tables, `Schema::table` for alterations. Rollback with `migrate:rollback`; never use `migrate:fresh` on prod."

=== "45s — Default"

    See main 4-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Whiteboard a `create_posts_table` migration with FK, soft deletes, composite index. Show an `add_status_to_posts_table` follow-up. Mention seeders + factories. Close with the `migrate:fresh` warning and the *"never edit a run migration"* rule.

---

## After you drill this

When this is **● Drilled**, the schema-management question is one-shot.

Next drills:

→ **[Eloquent Relationships](eloquent-relationships.md)** — *what migrations create the schema for*
→ **[Validation & FormRequest](validation-form-requests.md)** — *the layer above DB writes*
→ **[Eager Loading](eloquent-eager-loading.md)** — *queries against your schema*

---

*Update your status badge once you can write a `create_posts_table` migration from memory and explain `migrate:fresh` vs `refresh` in one sentence.*
