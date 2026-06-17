# Chapter 17: Laravel Boost â€” AI-Assisted Development

---
## Learning Objectives
- Understand Laravel Boost's architecture and how it bridges AI agents with Laravel
- Install and configure Boost in a Laravel application
- Use Boost's 15+ specialized tools for code generation and diagnostics
- Leverage vectorized documentation and AI guidelines for convention-aware code
- Integrate Boost with Cursor, Claude Code, OpenCode, and GitHub Copilot
- Build custom guidelines for team-specific conventions
---

## Theory

![Laravel Boost](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/laravel/17-boost.png)


### 17.1 What Is Laravel Boost?

Laravel Boost is a package that acts as a bridge between AI coding agents and your Laravel application. When an AI agent writes Laravel code without Boost, it relies on its training data â€” which may reference an older version of Laravel, use deprecated patterns, or miss framework-specific conventions. Boost solves this by providing three things:

1. **Laravel-specific tools** â€” 15+ executable tools that let the agent inspect your actual application
2. **Vectorized documentation** â€” 17,000+ pieces of Laravel ecosystem documentation embedded for semantic search
3. **AI guidelines** â€” Laravel-maintained guidance for framework conventions, testing patterns, and pitfalls

The architecture works like this:

```
AI Agent (Cursor, Claude Code, OpenCode, Copilot)
    â”‚
    â”œâ”€â”€ Reads .ai/guidelines/* â”€â”€â”€â”€â–º Convention rules
    â”œâ”€â”€ Calls Boost tools â”€â”€â”€â”€â”€â”€â”€â”€â”€â–º Live app introspection
    â””â”€â”€ Queries docs vectors â”€â”€â”€â”€â”€â”€â–º Version-matched documentation
    â”‚
    â–¼
Generates code that matches:
    - Correct Laravel version APIs
    - Your app's existing patterns
    - Framework best practices
    - Working test suites
```

Boost supports PHP 8.1+ and Laravel 10 through 13. It auto-detects your installed package versions and targets the correct documentation for each.

### 17.2 Installation

Install Boost as a dev dependency and run its interactive installer:

```php
composer require laravel/boost --dev

php artisan boost:install
```

The installer is interactive. It detects your environment and asks targeted questions:

```php
$ php artisan boost:install

â”Œ Laravel Boost Installer â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
â”‚                                                    â”‚
â”‚   Detected: Laravel 13.x, PHP 8.4                  â”‚
â”‚   Detected IDE: Visual Studio Code                 â”‚
â”‚   Detected OS: Windows                             â”‚
â”‚                                                    â”‚
â”‚   â—‡ Which AI coding agents do you use?             â”‚
â”‚     â–  Cursor                                       â”‚
â”‚     â–  Claude Code                                  â”‚
â”‚     â–¡ OpenCode                                     â”‚
â”‚     â–¡ GitHub Copilot                               â”‚
â”‚                                                    â”‚
â”‚   â—‡ Install example custom guidelines?  [Yes/No]   â”‚
â”‚                                                    â”‚
â”‚   â—‡ Generate Boost configuration?       [Yes/No]   â”‚
â”‚                                                    â”‚
â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜

âœ” Boost installed successfully!

  Next steps:
  1. Review .ai/guidelines/ for Laravel best practices
  2. Run `php artisan boost:check` to verify the setup
  3. Open your AI agent and try: "Create a blog post model with migration"
```

The installer creates the `.ai/` directory structure in your project root:

```
.ai/
â”œâ”€â”€ guidelines/
â”‚   â”œâ”€â”€ laravel-conventions.md
â”‚   â”œâ”€â”€ testing-standards.md
â”‚   â”œâ”€â”€ security-best-practices.md
â”‚   â””â”€â”€ elqouent-patterns.md
â”œâ”€â”€ boost.json
â””â”€â”€ tools/
    â””â”€â”€ ...
```

The `boost.json` configuration file stores your preferences:

```json
{
    "version": "1.0.0",
    "laravel_version": "13.x",
    "agents": ["cursor", "claude-code"],
    "guidelines_path": ".ai/guidelines",
    "tools_enabled": true,
    "docs_auto_query": true,
    "version_targeting": "installed"
}
```

### 17.3 Vectorized Documentation

Boost embeds 17,000+ documentation pages from the Laravel ecosystem using the same pgvector technology from Chapter 16. When an agent needs to write Laravel code, it queries these vectors to find the exact API documentation matching the installed version:

```php
// Inside Boost's internal query engine (simplified)
$results = BoostDocs::search('Laravel broadcasting with Pusher')
    ->version('13.x')
    ->limit(5)
    ->get();

foreach ($results as $doc) {
    echo $doc->title;      // "Broadcasting: Laravel 13.x"
    echo $doc->content;    // Full documentation text
    echo $doc->package;    // "laravel/framework"
    echo $doc->similarity; // 0.91
}
```

The documentation coverage includes:

- Laravel core framework (`laravel/framework`)
- Laravel packages (Cashier, Horizon, Telescope, Passport, Sanctum, etc.)
- First-party tools (Forge, Vapor, Envoyer, Nightwatch)
- Community packages maintained by the Laravel team

Version targeting is automatic. If your `composer.json` requires `laravel/framework: ^13.0`, Boost queries the 13.x documentation bundle. This prevents the agent from using APIs that do not exist in your version:

```php
// Boost's internal version resolver
$installedVersion = Composer::getInstalledVersion('laravel/framework');
$docsBundle = BoostDocs::forVersion($installedVersion);
```

### 17.4 Tools

Boost provides over 15 specialized tools that AI agents invoke during development. Here are the most important ones:

**Package Detection**

The agent checks which packages are installed before generating code:

```php
// Tool: detect_packages
// The agent calls this to inspect composer.json

$packages = Boost::tools()->detectPackages();

// Returns:
// [
//     'laravel/framework' => '13.0.0',
//     'laravel/cashier' => '15.0.0',
//     'spatie/laravel-permission' => '6.0.0',
//     'spatie/laravel-medialibrary' => '11.0.0',
// ]
```

**Database Querying**

The agent inspects your database schema to generate accurate migrations and queries:

```php
// Tool: query_database
// The agent inspects table structures before writing queries

$schema = Boost::tools()->getTableSchema('users');

// Returns:
// [
//     'table' => 'users',
//     'columns' => [
//         ['name' => 'id', 'type' => 'bigint unsigned', 'auto_increment' => true],
//         ['name' => 'name', 'type' => 'varchar(255)'],
//         ['name' => 'email', 'type' => 'varchar(255)', 'unique' => true],
//         ['name' => 'email_verified_at', 'type' => 'timestamp', 'nullable' => true],
//         ['name' => 'password', 'type' => 'varchar(255)'],
//         ['name' => 'remember_token', 'type' => 'varchar(100)', 'nullable' => true],
//         ['name' => 'created_at', 'type' => 'timestamp', 'nullable' => true],
//         ['name' => 'updated_at', 'type' => 'timestamp', 'nullable' => true],
//     ],
//     'indexes' => [
//         ['name' => 'users_email_unique', 'columns' => ['email'], 'unique' => true],
//     ],
// ]
```

**Documentation Search**

The agent queries version-matched docs for the specific APIs it needs:

```php
// Tool: search_docs
// The agent searches for relevant documentation before writing code

$docs = Boost::tools()->searchDocs(
    query: 'Rate limiting with RateLimiter facade',
    version: '13.x',
    limit: 3
);
```

**Browser Log Reader**

When debugging frontend issues, the agent reads browser console logs:

```php
// Tool: read_browser_logs
// The agent reads the latest Laravel debugbar or browser logs

$logs = Boost::tools()->readBrowserLogs();
```

**Test Generation**

The agent generates PHPUnit or PEST tests that match your existing test patterns:

```php
// Tool: generate_test
// The agent examines existing tests to match style, then generates new ones

$testCode = Boost::tools()->generateTest([
    'type' => 'feature',
    'target' => 'App\Http\Controllers\PostController@store',
    'style' => 'pest',
]);
```

**Tinker Code Execution**

The agent executes throwaway code in your application context to verify assumptions:

```php
// Tool: tinker_execute
// The agent runs code via Artisan Tinker to test a hypothesis

$result = Boost::tools()->tinker('User::where("email", "test@example.com")->exists()');
// Returns: true
```

All tools are accessed through a unified facade that the AI agent uses automatically during development.

### 17.5 AI Guidelines

Guidelines are markdown files that tell the AI agent how to write code for your specific project. Laravel ships a default set that covers framework conventions:

```markdown
# .ai/guidelines/laravel-conventions.md

# Laravel Conventions

## Routing

- Use Route Model Binding for all resource routes
- Name routes with dot notation: `posts.show`, `admin.users.index`
- Group related routes with `Route::prefix()` or `Route::middleware()`
- Use `Route::view()` for simple static pages
- Avoid closures in `routes/web.php`; use controller classes

## Eloquent

- Always define `$fillable` or `$guarded` on every model
- Use local scopes for reusable query constraints: `scopeActive()`
- Use eager loading to avoid N+1 queries: `Post::with('comments')->get()`
- Prefer `firstOrCreate()` over manual existence checks
- Use `when()` for conditional query building

## Validation

- Use Form Request classes for complex validation logic
- Keep validation rules in the request, not the controller
- Use rule objects for reusable validation: `new Uppercase()`

## Responses

- Use API Resources for JSON transformation
- Use `tap()` or `higherOrderMessages()` for clean object manipulation
- Return `redirect()->route()` with flash messages for web responses
```

```markdown
# .ai/guidelines/testing-standards.md

# Testing Standards

## Framework

- Use PEST for all new tests
- Name test files with the `.pest.php` extension
- Use descriptive test function names: `it_can_create_a_post_as_authenticated_user()`

## Coverage

- Every controller action must have a feature test
- Every model scope must have a unit test
- Every Form Request must have a validation test
- Every job must have a test for success and failure scenarios

## Factories

- Define model factories for all Eloquent models
- Use factory states for variant data: `User::factory()->unverified()->create()`
- Sequence data when order matters: `User::factory()->count(3)->sequence(...)`

## Assertions

- Prefer `assertDatabaseHas()` over querying the database manually
- Use `assertSessionHas()` for flash message assertions
- Use `assertJsonStructure()` for API response shape validation
- Use `assertStatus()` with explicit HTTP codes
```

Custom guidelines go in the `.ai/guidelines/` directory and can be written as `.blade.php` or `.md` files. Blade files are useful when you need dynamic content in your guidelines:

```php
{{-- .ai/guidelines/deployment-pipeline.blade.php --}}

# Deployment Pipeline

## Branch Strategy

- `main` â€” production-ready code only
- `develop` â€” integration branch for feature work
- `feature/{ticket-number}-{kebab-name}` â€” individual features

## CI Requirements

- All tests must pass before merge
- Code must pass {{ config('app.pint_config') === 'laravel' ? 'Laravel Pint' : 'custom Pint' }} style checks
- No PHPStan errors at level {{ config('app.phpstan_level', 6) }}
- All new code must have {{ config('app.min_test_coverage', 80) }}% coverage

## Deployment

- Deployments happen every {{ config('app.deploy_schedule', 'Tuesday') }} at 10:00 UTC
- Run `php artisan migrate --force` after code deploy
- Clear cache: `php artisan optimize:clear`
- Restart queue: `php artisan queue:restart`
```

### 17.6 Agent Integration

Boost integrates with four major AI coding agents. Each has a slightly different integration mechanism:

**Cursor**

Cursor reads the `.ai/guidelines/` directory automatically. Boost detects Cursor's `.cursorrules` file during installation and merges guidelines:

```bash
# Boost detects Cursor during install and generates:
# .cursorrules â†’ references .ai/guidelines/*.md
```

**Claude Code**

Claude Code uses `CLAUDE.md` as its project-level instruction file. Boost adds a reference during installation:

```markdown
<!-- CLAUDE.md (added by Boost installer) -->

# Laravel Boost

This project uses Laravel Boost. Always read `.ai/guidelines/` before writing code.

Available tools: package detection, schema inspection, docs search, test generation.
```

**OpenCode**

OpenCode reads guidelines from `.opencode/rules/`. Boost creates symlinks or copies during install:

```bash
# Boost creates .opencode/rules/ with references to .ai/guidelines/
```

**GitHub Copilot**

Copilot reads `./github/copilot-instructions.md`. Boost creates this file during installation:

```markdown
# .github/copilot-instructions.md

This project uses Laravel 13. Follow Laravel conventions:
- Use Eloquent ORM, not raw SQL
- Use Form Requests for validation
- Use PEST for testing
- Use Route Model Binding
- See .ai/guidelines/ for complete conventions
```

### 17.7 Custom Guidelines

Adding project-specific guidelines is as simple as placing a file in `.ai/guidelines/`:

```markdown
# .ai/guidelines/billing-patterns.md

# Billing Patterns

This project uses Laravel Cashier v15 with Stripe.

## Subscription Handling

- Always create subscriptions through `$user->newSubscription()`
- Use subscription names matching the plan type: 'default', 'enterprise'
- Call `$subscription->cancel()` for cancellations, never delete subscriptions
- Store Stripe customer IDs in the `stripe_id` column on the users table

## Invoicing

- Generate invoices through Cashier: `$user->invoice()`
- Always set a description when creating invoices
- Use `$user->invoices()` for listing, never query `cashier_invoices` directly

## Webhook Handling

- Route Stripe webhooks through Cashier's built-in controller
- Do not add custom webhook endpoints unless absolutely necessary
- Handle `invoice.payment_succeeded` to update payment status in local DB

## Testing

- Use Cashier's `withStripeCredentials()` test helper
- Mock Stripe API calls with `Http::fake()` targeting `api.stripe.com/*`
- Never call Stripe's production API in tests
```

Boost automatically includes all `.md` and `.blade.php` files in `.ai/guidelines/` during `boost:install`. You do not need to register them manually.

### 17.8 Agentic Development

Laravel is uniquely suited as an "agent-ready" framework. Its consistent conventions allow AI agents to predict file locations, naming patterns, and architectural choices with high accuracy:

```php
// An AI agent, guided by Boost, can predict:

// File location: app/Models/Post.php
// Based on: naming convention + boost knows Laravel puts models in app/Models
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Post extends Model
{
    protected $fillable = [
        'title',
        'slug',
        'body',
        'user_id',
        'published_at',
    ];

    protected function casts(): array
    {
        return [
            'published_at' => 'datetime',
        ];
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function comments(): HasMany
    {
        return $this->hasMany(Comment::class);
    }

    public function scopePublished($query)
    {
        return $query->whereNotNull('published_at');
    }
}
```

The key properties that make Laravel agent-ready:

- **Naming conventions**: Model files are always `StudlyCase` and singular; migration files are always `yyyy_mm_dd_hhmmss_descriptive_name.php`
- **Directory structure**: Controllers in `app/Http/Controllers/`, Models in `app/Models/`, etc.
- **Well-defined patterns**: Resource controllers, Form Requests, API Resources, Job classes
- **Comprehensive documentation**: Every feature documented with examples that match the naming conventions

### 17.9 Complete Example: Boost-Driven Feature Development

This example shows the full workflow of setting up Boost and having an AI agent build a feature:

```bash
# Step 1: Install Boost
composer require laravel/boost --dev
php artisan boost:install

# Step 2: Verify the setup
php artisan boost:check

# Output:
# â”Œ Laravel Boost Status â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”
# â”‚                                          â”‚
# â”‚  Laravel Version:  13.x                  â”‚
# â”‚  PHP Version:      8.4                   â”‚
# â”‚  Guidelines:       4 files loaded        â”‚
# â”‚  Tools:            15 available           â”‚
# â”‚  Docs Vectors:     17,234 pieces          â”‚
# â”‚  Agent:            Cursor (detected)     â”‚
# â”‚  Status:           âœ… All systems go    â”‚
# â”‚                                          â”‚
# â””â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”˜
```

The AI agent now receives Boost's context. When the developer requests a feature, the agent follows this pipeline:

```php
// Developer: "Create a product review system with ratings"

// Phase 1 â€” Agent reads guidelines
// Reads: .ai/guidelines/laravel-conventions.md
// Reads: .ai/guidelines/testing-standards.md
// Reads: .ai/guidelines/eloquent-patterns.md

// Phase 2 â€” Agent inspects existing codebase
$packages = Boost::tools()->detectPackages();
// Laravel 13.x, spatie/laravel-permission, laravel/cashier

$schema = Boost::tools()->getTableSchema('products');
// Already has: id, name, description, price, user_id

// Phase 3 â€” Agent queries version-matched docs
$docs = Boost::tools()->searchDocs(
    query: 'one-to-many relationship validation',
    version: '13.x'
);

// Phase 4 â€” Agent generates the feature

// Migration
Schema::create('reviews', function (Blueprint $table) {
    $table->id();
    $table->foreignId('product_id')->constrained()->cascadeOnDelete();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete();
    $table->tinyInteger('rating')->unsigned();
    $table->text('body')->nullable();
    $table->timestamps();

    $table->unique(['product_id', 'user_id']);
});

// Model
class Review extends Model
{
    protected $fillable = ['rating', 'body'];

    protected function casts(): array
    {
        return [
            'rating' => 'integer',
        ];
    }

    public function product(): BelongsTo
    {
        return $this->belongsTo(Product::class);
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}

// Form Request
class StoreReviewRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'rating' => ['required', 'integer', 'between:1,5'],
            'body' => ['nullable', 'string', 'max:5000'],
        ];
    }
}

// Controller
class ProductReviewController extends Controller
{
    public function store(StoreReviewRequest $request, Product $product): RedirectResponse
    {
        $review = $product->reviews()->create([
            ...$request->validated(),
            'user_id' => $request->user()->id,
        ]);

        return redirect()
            ->route('products.show', $product)
            ->with('success', 'Review added successfully.');
    }
}

// Phase 5 â€” Agent generates tests (PEST style)
it('authenticated user can review a product', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();

    $this->actingAs($user)
        ->post(route('reviews.store', $product), [
            'rating' => 5,
            'body' => 'Excellent product!',
        ])
        ->assertRedirect()
        ->assertSessionHas('success');

    $this->assertDatabaseHas('reviews', [
        'product_id' => $product->id,
        'user_id' => $user->id,
        'rating' => 5,
    ]);
});

it('prevents duplicate reviews from the same user', function () {
    $user = User::factory()->create();
    $product = Product::factory()->create();

    Review::factory()->create([
        'product_id' => $product->id,
        'user_id' => $user->id,
    ]);

    $this->actingAs($user)
        ->post(route('reviews.store', $product), [
            'rating' => 3,
            'body' => 'Second review attempt.',
        ])
        ->assertSessionHasErrors('product_id');
});
```

---

## Summary
- Laravel Boost bridges AI coding agents with Laravel applications through tools, docs, and guidelines
- Installation is interactive and auto-detects IDE, agent, and Laravel version
- 17,000+ vectorized documentation pieces are version-targeted to installed packages
- 15+ specialized tools let agents inspect schemas, search docs, generate tests, and execute code
- AI guidelines in `.ai/guidelines/` define conventions for routing, Eloquent, testing, and more
- Boost integrates with Cursor, Claude Code, OpenCode, and GitHub Copilot
- Custom guidelines can be `.md` or `.blade.php` files and are auto-included
- Laravel's consistent conventions make it naturally "agent-ready" for AI-assisted development
- The `boost:check` command verifies the full setup is working

## Exercises

### Review Questions
1. What three components does Laravel Boost provide to AI agents?
2. How does Boost's version targeting prevent an AI agent from using deprecated or nonexistent APIs?
3. What is the purpose of the `.ai/guidelines/` directory, and what file formats does it accept?
4. List four of Boost's specialized tools and describe what each does.
5. How does Boost integrate with each of the four supported AI coding agents?

### Application Problems
1. Install Laravel Boost in a Laravel 13 application and run the interactive installer for Cursor. Verify the setup with `boost:check`.
2. Write a custom guideline file for API versioning conventions specific to your application, covering URL prefixing, header-based versioning, and deprecation handling.
3. Using Boost's tool system, write a PEST test for a `ProductController@store` action that validates the request and creates a product. Run the test to confirm it passes.

### Challenge Problem
Set up a complete Boost-driven development workflow:
- Install Boost with Claude Code integration
- Write custom guidelines for a team-specific billing pattern involving Cashier and Stripe webhooks
- Instruct the AI agent to build a complete subscription management feature with:
  - A migration for a `subscriptions` table with proper foreign keys
  - A `SubscriptionController` with `store`, `cancel`, and `resume` methods
  - A `SubscriptionPolicy` for authorization
  - PEST tests for each controller action
  - All code must follow the custom billing guidelines
- Verify the generated code passes `php artisan pint --test` and all generated tests pass