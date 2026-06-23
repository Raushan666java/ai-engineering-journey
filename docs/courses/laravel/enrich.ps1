# Enrich all 14 Laravel chapter files
# PowerShell script - reads, enriches, writes each file

$dir = "C:\xampp\htdocs\ai-engineering-journey\docs\courses\laravel"

function Add-NavLine {
    param([string]$content, [string]$prevName, [string]$prevFile, [string]$nextName, [string]$nextFile)
    $titleLine = ($content -split "`n")[0]
    $navLine = "`n> **Previous:** [$prevName](./$prevFile) | **Next:** [$nextName](./$nextFile)"
    $content = $content -replace [regex]::Escape($titleLine), ($titleLine + $navLine)
    return $content
}

function Add-AfterObjectives {
    param([string]$content, [string]$tableContent, [string]$roadmapContent)
    # Find the end of Learning Objectives (the "---" line after objectives)
    $pattern = "(## Learning Objectives[\s\S]*?)(?=---)"
    if ($content -match $pattern) {
        $objectivesSection = $matches[1]
        $glanceBlock = "`n$tableContent`n`n$roadmapContent`n"
        $content = $content -replace [regex]::Escape($objectivesSection), ($objectivesSection.TrimEnd() + $glanceBlock)
    }
    return $content
}

function Add-TakeawayAfterH2 {
    param([string]$content, [string]$h2Text, [string]$takeaway)
    $pattern = "## $h2Text[\s\S]*?(?=^## )"
    if ($content -match $pattern) {
        $section = $matches[0]
        # Find the end of the section content (looking ahead to next ##)
        # Insert takeaway right after the heading line
        $headingLine = "## $h2Text"
        $takeawayBlock = "`n`n> **One-Sentence Takeaway:** $takeaway`n"
        $newSection = $section -replace [regex]::Escape($headingLine), ($headingLine + $takeawayBlock)
        $content = $content -replace [regex]::Escape($section), $newSection
    }
    return $content
}

function Insert-BeforeSummary {
    param([string]$content, [string]$insertBlock)
    $pattern = "(?=^## Summary)"
    $content = $content -replace $pattern, "`n$insertBlock`n"
    return $content
}

function Insert-AfterLine {
    param([string]$content, [string]$afterLine, [string]$insertBlock)
    $pattern = "($afterLine.*)"
    $content = $content -replace $pattern, ('$1' + "`n" + $insertBlock)
    return $content
}

function Insert-Callout {
    param([string]$content, [string]$afterText, [string]$callout)
    $content = $content -replace [regex]::Escape($afterText), ($afterText + "`n`n$callout")
    return $content
}

# ============================================================
# CH03 - Blade Frontend
# ============================================================
Write-Host "Processing 03-blade-frontend.md..." -ForegroundColor Green
$f = "$dir\03-blade-frontend.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Architecture & Routing" -prevFile "02-architecture-routing" -nextName "Eloquent ORM, Database & Migrations" -nextFile "04-eloquent-database"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Blade Syntax | Echo syntax, conditionals, loops, raw PHP |
| Template Inheritance | @extends, @section, @yield, @parent, @stack |
| Components | Class-based, anonymous, slots, attributes |
| Vite Integration | @vite(), HMR, production builds |
| Forms & CSRF | CSRF protection, method spoofing, old() helper |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Blade Syntax] --> B[Template Inheritance]
    B --> C[Blade Components]
    C --> D[Vite Integration]
    C --> E[Forms & CSRF]
    D --> F[Layout Strategies]
    E --> F
    F --> G[Real-World Patterns]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Blade compiles to cached PHP and provides expressive template constructs with zero runtime overhead."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.1 Blade Syntax" -takeaway "Blade's echo syntax automatically escapes output, preventing XSS while offering clean conditional and loop constructs."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.2 Template Inheritance" -takeaway "Template inheritance via @extends/@section/@yield provides a clean parent-child layout hierarchy."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.3 Components" -takeaway "Blade components offer encapsulated, reusable UI elements with slots and attribute bags, superseding @include for most use cases."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.4 Blade with Vite" -takeaway "Vite integration delivers HMR in development and versioned asset bundles in production through the @vite() directive."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.5 Layouts: Inheritance vs Components" -takeaway "Use inheritance for single-layout sites and components for multi-layout flexibility."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.6 Forms and CSRF" -takeaway "CSRF protection is automatic with @csrf, and method spoofing via @method enables PUT/PATCH/DELETE in HTML forms."
$content = Add-TakeawayAfterH2 -content $content -h2Text "3.7 Push, Stack, and One-Time Includes" -takeaway "@push and @stack enable deferred injection of scripts and styles from child to parent layouts."

$content = Insert-AfterLine -content $content -afterLine "#### The `\$loop` Variable" -callout @'
> **Pro Tip:** The `$loop->parent` property is invaluable when rendering nested collections — it lets you access the outer loop's iteration count from within an inner loop without passing additional variables.
'@

$content = Insert-AfterLine -content $content -afterLine "#### Anonymous Components" -callout @'
> **Remember:** Anonymous components use `@props()` to declare their attributes instead of a PHP constructor. They are ideal for simple, stateless presentational components like form inputs or buttons.
'@
$content = Insert-AfterLine -content $content -afterLine "#### The `\$attributes` Bag" -callout @'
> **Warning:** The `$attributes->merge()` method merges classes, not replaces them. To override a class, provide it after the default — Laravel deduplicates automatically.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Template Inheritance | Blade Components |
|---------|---------------------|-----------------|
| Architecture | Parent-child layout hierarchy | Encapsulated, composable units |
| Best For | Single-layout sites | Multi-layout, complex UIs |
| Content Injection | @section / @yield | Slots (default + named) |
| Attribute Handling | None built-in | $attributes bag with merge, class, filter |
| Reusability | Limited to layout | Highly reusable across views |
| Logic | Controller provides data | Class methods + @props() |

## Quick Reference — Blade Directives

| Directive | Purpose | Example |
|-----------|---------|---------|
| `{{ }}` | Escaped output | `{{ $user->name }}` |
| `{!! !!}` | Raw output | `{!! $html !!}` |
| `@if/@elseif/@else` | Conditionals | `@if ($score > 90) A @endif` |
| `@unless` | Negative conditional | `@unless ($user->banned)` |
| `@forelse` | Loop with empty state | `@forelse ($posts as $p) ... @empty ... @endforelse` |
| `@csrf` | CSRF token field | `@csrf` |
| `@method` | HTTP method spoofing | `@method('PUT')` |
| `@push/@stack` | Deferred injection | `@push('scripts') ... @endpush` |
| `@vite()` | Asset loading | `@vite(['css/app.css'])` |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS Dashboard |
|---------|------|-----------|---------------|
| @extends/@section | Blog layout with sidebar | Product page with filters | Admin layout with nav |
| Blade Components | Alert, Card, Button | ProductCard, CartItem | DataTable, ChartWidget |
| Named Slots | Card header/footer | Modal with title/body/actions | Panel with toolbar/content |
| Forms + @csrf | Comment form | Checkout form | Settings form |
| @push/@stack | Page-specific scripts | Checkout JS bundle | Chart library per page |
| Vite @vite | Blog CSS/JS | Product gallery | Dashboard bundle |

## Chapter Quiz

**1. Which Blade directive renders escaped output?**
- a) `{!! !!}`
- b) `{{ }}`
- c) `@raw`
- d) `@echo`

**2. How do you declare a named slot in a component template?**
- a) `@slot('name')`
- b) `{{ $name }}`
- c) `{{ $slot->name }}`
- d) `{{ $name ?? $slot }}`

**3. What does `$attributes->merge(['class' => 'p-4'])` do?**
- a) Replaces all existing classes
- b) Appends 'p-4' to any existing classes
- c) Overwrites the class attribute entirely
- d) Throws an error if class exists

**4. Which directive must appear in every HTML form that sends POST requests?**
- a) `@method`
- b) `@csrf`
- c) `@push`
- d) `@vite`

**Answers: 1-b, 2-a, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH04 - Eloquent Database
# ============================================================
Write-Host "Processing 04-eloquent-database.md..." -ForegroundColor Green
$f = "$dir\04-eloquent-database.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Blade Templating, Components & Frontend" -prevFile "03-blade-frontend" -nextName "Authentication, Authorization & Security" -nextFile "05-auth-security"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Migrations | Schema Builder, columns, modifiers, indexes, foreign keys |
| Seeders & Factories | Faker data, factory states, sequences |
| Eloquent Models | Fillable/guarded, casts, soft deletes, global scopes |
| Relationships | One-to-one, one-to-many, many-to-many, polymorphic |
| Eager Loading | N+1 prevention, lazy loading, constrained loads |
| Accessors & Mutators | Attribute transformation, custom casts |
| Collections | Eloquent collection methods, custom collections |
| Events & Observers | Model lifecycle hooks, observer classes |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Migrations & Schema] --> B[Seeders & Factories]
    B --> C[Eloquent Models]
    C --> D[Relationships]
    D --> E[Eager Loading]
    C --> F[Accessors/Mutators]
    F --> G[Collections]
    C --> H[Events & Observers]
    E --> I[N+1 Prevention]
    H --> I
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Laravel's database layer provides version-controlled migrations, expressive schema definitions, and a powerful ORM for data interaction."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Migration System" -takeaway "Migrations act as version control for your database schema, with reversible up()/down() methods for deterministic team collaboration."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Schema Builder" -takeaway "The Schema Builder offers a fluent interface for defining column types, modifiers, indexes, and foreign key constraints across all supported databases."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Seeders & Factories" -takeaway "Factories with Faker generate realistic test data; states and sequences enable fine-grained variation for comprehensive testing scenarios."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Eloquent Models" -takeaway "Eloquent follows convention-over-configuration for table names and primary keys, with fillable/guarded protection against mass-assignment vulnerabilities."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Relationships" -takeaway "Laravel supports six relationship types including polymorphic variants, with clean fluent syntax for defining and querying related models."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Eager Loading" -takeaway "Eager loading via with() eliminates the N+1 query problem, reducing database queries from 1+N to just 2 for parent-child relationship loops."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Accessors, Mutators, and Casts" -takeaway "Modern Laravel uses Attribute::make with explicit get/set closures for transforming attribute values between database and PHP representations."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Model Events & Observers" -takeaway "Observers centralize model lifecycle logic into single classes, keeping controllers clean and ensuring consistent behavior across all model interactions."

$content = Insert-Callout -content $content -afterText "php artisan schema:dump --prune`n// Dumps and prunes all existing migration files" -callout @'
> **Pro Tip:** Use `schema:dump --prune` in CI/CD pipelines to dramatically speed up deployments. Laravel loads the schema dump first, then runs only new individual migrations — this can reduce deployment time from minutes to seconds on large projects.
'@
$content = Insert-Callout -content $content -afterText "`$table->unique(['user_id', 'role_id']);`" -callout @'
> **Warning:** Always add a unique composite index on pivot tables to prevent duplicate relationships. Without it, `attach()` could create duplicate rows unless you're deliberately allowing multiple same-type relationships.
'@
$content = Insert-Callout -content $content -afterText "Model::handleLazyLoadingViolationUsing(function (`$model, `$relation) {" -callout @'
> **Remember:** Enable `Model::preventLazyLoading(!$this->app->isProduction())` in your AppServiceProvider during development. It detects N+1 issues immediately rather than discovering them under production load.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Eloquent ORM | Query Builder | Raw SQL |
|---------|-------------|---------------|---------|
| Abstraction | Full ORM with relationships | Fluent query construction | String SQL |
| SQL Injection | Prevented (parameter binding) | Prevented (parameter binding) | Developer responsibility |
| Relationships | Built-in (6 types) | Manual JOINs | Manual JOINs |
| Hydration | Eloquent model instances | StdClass objects | StdClass objects |
| Mass Assignment | Protected via fillable/guarded | Not applicable | Not applicable |
| Best For | Complex domain logic | Simple CRUD, reports | Custom database features |

## Quick Reference — Artisan Commands

| Command | Purpose |
|---------|---------|
| `php artisan make:migration create_posts_table` | Create migration |
| `php artisan migrate` | Run pending migrations |
| `php artisan migrate:fresh --seed` | Drop all tables, migrate, seed |
| `php artisan make:model Post -mfsc` | Model with migration, factory, seeder, controller |
| `php artisan make:factory PostFactory --model=Post` | Create factory |
| `php artisan make:observer PostObserver --model=Post` | Create observer |
| `php artisan schema:dump --prune` | Squash migrations |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS |
|---------|------|-----------|------|
| Migrations | posts, comments tables | products, orders, inventory | tenants, subscriptions |
| Polymorphic | Comments on posts/videos | Reviews on products/orders | Notifications per entity |
| Eager Loading | Post + author + comments | Order + items + product | Tenant + users + plan |
| Soft Deletes | Archived posts | Cancelled orders | Deactivated tenants |
| Global Scopes | Published only | Active products only | Tenant scoping |

## Chapter Quiz

**1. Which Eloquent relationship type uses a morphs() column pair?**
- a) HasManyThrough
- b) BelongsToMany
- c) MorphMany
- d) HasOne

**2. What is the purpose of the $fillable property on an Eloquent model?**
- a) Define which columns are nullable
- b) Whitelist attributes for mass assignment
- c) Specify the table name
- d) Declare relationship methods

**3. How does eager loading solve the N+1 problem?**
- a) It caches all queries in memory
- b) It loads related data in a single additional query
- c) It limits results to N records
- d) It disables lazy loading globally

**4. What does the SoftDeletes trait add to a model?**
- a) Automatic timestamps
- b) A deleted_at column for soft deletion
- c) Cascade delete behavior
- d) Force delete protection

**Answers: 1-c, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH05 - Auth Security
# ============================================================
Write-Host "Processing 05-auth-security.md..." -ForegroundColor Green
$f = "$dir\05-auth-security.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Eloquent ORM, Database & Migrations" -prevFile "04-eloquent-database" -nextName "Queues, Jobs, Notifications & Mail" -nextFile "06-queues-notifications"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Starter Kits | Breeze, Jetstream, Bootcamp |
| Session Auth | Login flow, guards, providers, remember-me |
| API Auth | Sanctum tokens, SPA auth, abilities |
| Authorization | Gates, Policies, auto-discovery |
| Form Requests | Validation rules, after hooks, custom rules |
| Security | CSRF, XSS, SQL injection, rate limiting |
| Password Mgmt | Hashing, validation rules, reset flow |
| Email Verification | MustVerifyEmail, signed routes |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Starter Kits] --> B[Session Auth]
    B --> C[Sanctum API Auth]
    C --> D[Authorization Gates/Policies]
    D --> E[Form Requests & Validation]
    E --> F[Security Protections]
    F --> G[Password & Email Verification]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Laravel provides comprehensive authentication and authorization tooling from starter kits to fine-grained policy control."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Authentication Starter Kits" -takeaway "Breeze offers minimal auth scaffolding while Jetstream adds teams, two-factor auth, and API token management."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Session-Based Authentication" -takeaway "Auth::attempt() with session regeneration prevents session fixation, and remember-me tokens provide persistent login across sessions."
$content = Add-TakeawayAfterH2 -content $content -h2Text "API Authentication with Sanctum" -takeaway "Sanctum provides both token-based API auth for mobile/third-party clients and cookie-based SPA auth for first-party frontends."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Authorization" -takeaway "Gates define simple closures for authorization checks, while Policies organize per-model authorization logic with auto-discovery."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Form Requests & Validation" -takeaway "Form requests encapsulate validation and authorization into single classes with after-validation hooks and custom rule objects."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Security" -takeaway "Laravel provides automatic CSRF protection, Blade XSS escaping, parameter-bound SQL queries, and fillable/guarded mass-assignment protection."

$content = Insert-Callout -content $content -afterText "throw ValidationException::withMessages([" -callout @'
> **Remember:** Always call `$request->session()->regenerate()` after successful login. This prevents session fixation attacks where an attacker forces a known session ID on a victim.
'@
$content = Insert-Callout -content $content -afterText "php artisan make:policy PostPolicy --model=Post // Auto-generates CRUD methods" -callout @'
> **Pro Tip:** Use `php artisan make:policy PostPolicy --model=Post` to auto-generate CRUD policy methods (viewAny, view, create, update, delete, restore, forceDelete) — this saves significant boilerplate.
'@
$content = Insert-Callout -content $content -afterText "DB::select(\"SELECT * FROM users WHERE email = '{\$request->email}'\")" -callout @'
> **Warning:** Never interpolate user input directly into SQL strings. Always use Eloquent, the query builder, or parameterized raw queries. String interpolation is the most common cause of SQL injection vulnerabilities.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Gates | Policies |
|---------|-------|----------|
| Scope | General abilities (view, admin) | Per-model CRUD operations |
| Definition | Closure in AuthServiceProvider | Class with method per ability |
| Auto-Discovery | Manual registration | Automatic by naming convention |
| Organization | Grouped by ability | Grouped by model |
| Complexity | Simple checks | Complex, multi-ability logic |
| Best For | Admin checks, feature flags | Model resource authorization |

## Quick Reference — Auth Middleware

| Middleware | Purpose |
|-----------|---------|
| `auth` | Require authenticated user |
| `guest` | Only unauthenticated users |
| `verified` | Require email verification |
| `password.confirm` | Re-prompt password confirmation |
| `can:update,post` | Authorize via policy or gate |
| `throttle:api` | Apply rate limiting |
| `auth:sanctum` | Sanctum API token auth |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS Admin |
|---------|------|-----------|-----------|
| Auth Guard | web (session) | web + sanctum | web + sanctum + admin |
| Policy | PostPolicy (owner-only edit) | OrderPolicy (buyer/viewer) | TeamPolicy (role-based) |
| Gates | Moderate comments | Approve refunds | Manage billing |
| Rate Limit | Login 5/min | Checkout 3/min | API 100/min |
| 2FA | Optional | Required for payouts | Required for admins |

## Chapter Quiz

**1. Which trait must a User model use for Sanctum API token authentication?**
- a) HasApiTokens
- b) MustVerifyEmail
- c) Notifiable
- d) SoftDeletes

**2. What is the purpose of $request->session()->regenerate() after login?**
- a) Log out old sessions
- b) Prevent session fixation attacks
- c) Speed up the login process
- d) Encrypt session data

**3. How does Policy auto-discovery work?**
- a) By scanning the app directory
- b) Convention: App\Models\Post → App\Policies\PostPolicy
- c) By listing policies in a config file
- d) By implementing an interface

**4. Which Blade syntax automatically escapes output to prevent XSS?**
- a) `{!! !!}`
- b) `{{ }}`
- c) `@raw`
- d) `@escape`

**Answers: 1-a, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH06 - Queues Notifications
# ============================================================
Write-Host "Processing 06-queues-notifications.md..." -ForegroundColor Green
$f = "$dir\06-queues-notifications.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Authentication, Authorization & Security" -prevFile "05-auth-security" -nextName "API Development & Integration" -nextFile "07-api-development"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Queue Drivers | sync, database, redis, sqs, beanstalkd |
| Jobs | Creating, dispatching, chaining, batching |
| Job Configuration | PHP attributes, middleware, unique jobs |
| Queue Workers | Horizon, supervisor, balancing |
| Notifications | Multi-channel delivery, via() method |
| Mail | Mailables, markdown templates, attachments |
| Events & Listeners | Event system, queued listeners, subscribers |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Queue Drivers] --> B[Jobs & Dispatching]
    B --> C[Job Chaining]
    B --> D[Job Batching]
    B --> E[Job Middleware]
    C --> F[Queue Workers & Horizon]
    D --> F
    E --> G[Notifications]
    G --> H[Mail]
    G --> I[Events & Listeners]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Laravel's queue system provides a unified API across multiple backends, enabling asynchronous job processing at any scale."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Queue Drivers" -takeaway "Queue drivers abstract job processing across backends from sync (testing) through redis (production) to sqs (AWS-native scaling)."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Jobs" -takeaway "Jobs encapsulate discrete tasks that can be dispatched immediately, with delay, chained sequentially, or batched for parallel execution."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Laravel Horizon" -takeaway "Horizon provides a Redis-powered dashboard with auto-balancing, failure monitoring, job tagging, and per-queue configuration."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Notifications" -takeaway "The notification system delivers messages across mail, database, broadcast, Slack, SMS, and custom channels with a single via() method."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Mail" -takeaway "Mailables use Envelope, Content, and Attachment objects with Markdown templates for responsive, branded email delivery."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Events & Listeners" -takeaway "Events decouple business logic; queued listeners via ShouldQueue prevent slow operations from blocking the HTTP response."

$content = Insert-Callout -content $content -afterText "public function uniqueId(): string" -callout @'
> **Pro Tip:** Always implement `ShouldBeUnique` for jobs that process the same resource (e.g., transcoding a video, generating a report). Without it, duplicate jobs can flood the queue and waste processing capacity.
'@
$content = Insert-Callout -content $content -afterText "php artisan make:notification OrderShipped" -callout @'
> **Remember:** Implement `ShouldQueue` on notification classes that send mail — otherwise the email is sent synchronously during the HTTP request, increasing response time by hundreds of milliseconds.
'@
$content = Insert-Callout -content $content -afterText "// Conditional dispatch`nEvent::dispatchIf(" -callout @'
> **Warning:** When using job batching, ensure your batch callback closures don't capture heavy objects. Only capture IDs and re-query inside the callback to avoid serialization issues.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Job Chaining | Job Batching |
|---------|-------------|-------------|
| Execution | Sequential (one after another) | Parallel (all at once) |
| Failure Handling | Chain stops on failure | Tracks per-job failure |
| Callbacks | catch() on chain failure | then(), catch(), finally() |
| Use Case | Payment → Ship → Notify | Process multiple uploads |
| Ordering | Strict order guaranteed | No ordering guarantee |

## Quick Reference — Queue Artisan Commands

| Command | Purpose |
|---------|---------|
| `php artisan make:job ProcessPodcast` | Create a job class |
| `php artisan queue:work redis --tries=3` | Start a queue worker |
| `php artisan queue:restart` | Gracefully restart all workers |
| `php artisan horizon` | Start Horizon dashboard |
| `php artisan make:notification OrderShipped` | Create notification |
| `php artisan make:mail OrderConfirmation --markdown=emails.orders.confirmed` | Create mailable |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS |
|---------|------|-----------|------|
| Queue Driver | redis (single) | sqs + redis | redis (multiple queues) |
| High Priority Queue | — | Payment processing | Subscription billing |
| Batched Jobs | Image thumbnailing | Bulk order import | CSV user import |
| Notified Channels | Email + database | Email + SMS + Slack | Email + Slack + Webhook |
| Horizon Supervisors | 1 (default) | 3 (payments, email, default) | 5 per service tier |

## Chapter Quiz

**1. Which interface prevents duplicate instances of the same job on the queue?**
- a) ShouldQueue
- b) ShouldBeUnique
- c) ShouldBeEncrypted
- d) UniqueJob

**2. What does Bus::chain() do?**
- a) Runs all jobs in parallel
- b) Runs jobs sequentially, stopping on failure
- c) Groups jobs for batch tracking
- d) Distributes jobs across workers

**3. Which method on a notification class determines which channels to send through?**
- a) channels()
- b) via()
- c) to()
- d) send()

**4. What is the purpose of Laravel Horizon?**
- a) A debugging toolbar
- b) A Redis queue dashboard with auto-balancing
- c) A testing framework
- d) A mail preview tool

**Answers: 1-b, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH07 - API Development
# ============================================================
Write-Host "Processing 07-api-development.md..." -ForegroundColor Green
$f = "$dir\07-api-development.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Queues, Jobs, Notifications & Mail" -prevFile "06-queues-notifications" -nextName "Broadcasting, Events & Real-Time Features" -nextFile "08-broadcasting-realtime"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| RESTful Design | HTTP verbs, status codes, HATEOAS |
| Resource Controllers | apiResource, nested, shallow nesting |
| API Resources | JsonResource, conditional attributes, pagination |
| JSON:API | Native support in Laravel 13 |
| Sanctum Auth | Token creation, abilities, expiry |
| Versioning | URI, header, query parameter strategies |
| Rate Limiting | Limiters, throttle middleware |
| Error Handling | Exception rendering, custom exceptions |
| GraphQL | Lighthouse schema-first integration |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[RESTful Design] --> B[Resource Controllers]
    B --> C[API Resources]
    C --> D[JSON:API]
    D --> E[Sanctum Auth]
    E --> F[Versioning]
    F --> G[Rate Limiting]
    G --> H[Error Handling]
    G --> I[GraphQL]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "RESTful APIs treat server data as resources accessed through standard HTTP verbs with consistent status codes."
$content = Add-TakeawayAfterH2 -content $content -h2Text "RESTful API Design" -takeaway "API endpoints represent nouns (resources) not verbs (actions), with GET/POST/PUT/PATCH/DELETE mapping to CRUD operations."
$content = Add-TakeawayAfterH2 -content $content -h2Text "API Resources & Collections" -takeaway "API Resources transform Eloquent models into JSON with conditional attributes, relationship inclusion, and automatic pagination metadata."
$content = Add-TakeawayAfterH2 -content $content -h2Text "JSON:API Resources (Laravel 13)" -takeaway "Laravel 13's native JSON:API support provides structured resources with relationship inclusion (?include) and sparse fieldsets (?fields)."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Sanctum Token Authentication" -takeaway "Sanctum provides token authentication with typed abilities, configurable expiry, and straightforward revocation."
$content = Add-TakeawayAfterH2 -content $content -h2Text "API Versioning" -takeaway "URI versioning is the simplest approach, while header-based versioning keeps URLs clean but requires more client configuration."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Rate Limiting" -takeaway "Rate limiting via RateLimiter::for() and the throttle middleware protects API endpoints from abuse and brute-force attacks."

$content = Insert-Callout -content $content -afterText "| PUT       | `/users/{id}`  | Full user update     |" -callout @'
> **Remember:** PUT replaces the entire resource — missing fields are set to null. PATCH only applies partial modifications. Use PUT sparingly; PATCH is almost always the better choice for update endpoints.
'@
$content = Insert-Callout -content $content -afterText "php artisan make:resource UserResource" -callout @'
> **Pro Tip:** Use `$this->whenLoaded('relation')` in API Resources to conditionally include relationships only when they've been eager loaded. This prevents silent N+1 queries from accidental resource usage.
'@
$content = Insert-Callout -content $content -afterText "RateLimiter::for('api', function (Request `$request) {" -callout @'
> **Warning:** Always differentiate rate limits between authenticated and unauthenticated users. Authenticated users should get higher limits (e.g., 100/min) than guests (e.g., 30/min) to prevent IP-based shared limits from affecting legitimate users.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | REST | GraphQL |
|---------|------|---------|
| Data Fetching | Fixed response structure | Client-specified fields |
| Over-fetching | Common | Eliminated |
| Endpoints | Multiple (one per resource) | Single endpoint |
| Versioning | URI/header required | Schema evolution |
| Caching | HTTP caching (ETag, Last-Modified) | Complex (per-query) |
| Tooling | Swagger/OpenAPI | GraphiQL, Apollo DevTools |

## Quick Reference — HTTP Status Codes

| Code | Meaning | Use Case |
|------|---------|----------|
| 200 | OK | Successful GET, PUT, PATCH |
| 201 | Created | Successful POST (new resource) |
| 204 | No Content | Successful DELETE |
| 400 | Bad Request | Malformed request body |
| 401 | Unauthorized | Missing/invalid authentication |
| 403 | Forbidden | Authenticated but not authorized |
| 404 | Not Found | Resource does not exist |
| 422 | Unprocessable Entity | Validation failure |
| 429 | Too Many Requests | Rate limit exceeded |
| 500 | Internal Server Error | Unexpected server error |

## Cross-Application Matrix

| Concept | Blog API | E-Commerce API | SaaS API |
|---------|---------|---------------|----------|
| Auth | Sanctum tokens | Sanctum + OAuth | Sanctum + API keys |
| Versioning | v1 URI prefix | v1 → v2 header | v2 URI prefix |
| Pagination | Cursor-based | LengthAware 20/page | Cursor 50/page |
| Rate Limit | 60/min auth, 20/min guest | 100/min auth, 10/min guest | Tiered by plan |
| Error Format | JSON:API errors | Custom error codes | RFC 7807 Problem Details |

## Chapter Quiz

**1. Which artisan command generates the correct routes for an API-only resource?**
- a) Route::resource()
- b) Route::apiResource()
- c) Route::restResource()
- d) Route::jsonResource()

**2. What does Sanctum's tokenCan() method check?**
- a) Token expiration date
- b) Token ability/permission
- c) Token creation time
- d) Token IP restriction

**3. Which pagination method avoids the COUNT query and is stable with new insertions?**
- a) paginate()
- b) simplePaginate()
- c) cursorPaginate()
- d) lengthAwarePaginate()

**4. What is the purpose of $this->whenLoaded() in an API Resource?**
- a) Load a relationship lazily
- b) Conditionally include data when relation is loaded
- c) Eager load a relationship
- d) Filter relationship results

**Answers: 1-b, 2-b, 3-c, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH08 - Broadcasting Realtime
# ============================================================
Write-Host "Processing 08-broadcasting-realtime.md..." -ForegroundColor Green
$f = "$dir\08-broadcasting-realtime.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "API Development & Integration" -prevFile "07-api-development" -nextName "Service Container, Facades & Package Development" -nextFile "09-container-packages"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Event System | Event classes, listeners, contracts |
| Laravel Reverb | First-party WebSocket server, configuration |
| Broadcasting Channels | Public, private, presence, authorization |
| Echo Client | Channel subscription, event listening |
| Presence Channels | Online users, joining/leaving events |
| SSE | Server-Sent Events for unidirectional streaming |
| Notification Events | Broadcast notification channel |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Event System] --> B[Laravel Reverb]
    B --> C[Broadcasting Channels]
    C --> D[Public Channels]
    C --> E[Private Channels]
    C --> F[Presence Channels]
    D --> G[Echo Client]
    E --> G
    F --> G
    G --> H[Real-Time Chat]
    G --> I[Notifications]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Laravel's event system with broadcasting enables real-time server-to-client communication through WebSockets."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Event System Deep Dive" -takeaway "Events are lightweight data carriers while listeners contain business logic; ShouldBroadcast pushes events to WebSocket clients."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Laravel Reverb" -takeaway "Reverb is a first-party Laravel WebSocket server that scales horizontally with Redis, eliminating the need for third-party services like Pusher."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Broadcasting" -takeaway "Channels come in three types: public (no auth), private (user authorization), and presence (with visible connected member list)."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Echo Client Library" -takeaway "Echo subscribes to channels using .listen(), .notification(), .whisper(), and presence methods like .here(), .joining(), .leaving()."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Presence Channels" -takeaway "Presence channels expose real-time user awareness — showing who is online, joining, or leaving a specific channel."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Server-Sent Events" -takeaway "SSE provides a simpler WebSocket alternative for unidirectional server-to-client streaming over plain HTTP."

$content = Insert-Callout -content $content -afterText "`$request->validate(['body' => 'required|string|max:5000'])['body']," -callout @'
> **Pro Tip:** Always use `broadcast(new Event)->toOthers()` when the sending user should not see their own event. This prevents double-rendering in chat applications where the sender already optimistically inserted their message.
'@
$content = Insert-Callout -content $content -afterText "return ['id' => `$user->id, 'name' => `$user->name];" -callout @'
> **Remember:** Presence channel authorization callbacks must return an associative array of user data (not just true/false). The array is sent to all connected clients so they can display online user information.
'@
$content = Insert-Callout -content $content -afterText "Echo.join(`chat.\`${chatId}`)" -callout @'
> **Warning:** Echo channel names must match the backend channel name exactly. For private channels, the JavaScript side must prefix with `private-` (Echo.private() handles this automatically). For presence channels, Echo.join() adds the `presence-` prefix.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | WebSockets (Reverb/Pusher) | Server-Sent Events |
|---------|---------------------------|-------------------|
| Direction | Bidirectional | Server → Client only |
| Protocol | WebSocket (WS/WSS) | HTTP |
| Browser Support | Universal | Universal (EventSource API) |
| Connection Type | Persistent | Persistent |
| Complexity | Higher (handshake, reconnection) | Lower (simple HTTP stream) |
| Use Case | Chat, collaboration | Notifications, status updates |

## Quick Reference — Broadcasting Artisan Commands

| Command | Purpose |
|---------|---------|
| `composer require laravel/reverb` | Install Reverb |
| `php artisan reverb:start` | Start Reverb server |
| `php artisan make:channel ChatChannel` | Create channel class |
| `npm install laravel-echo pusher-js` | Install Echo client |

## Cross-Application Matrix

| Concept | Chat App | Collaboration | Live Dashboard |
|---------|---------|--------------|---------------|
| Channel Type | Presence | Private (per-document) | Public (announcements) |
| Events per Second | 10-50 | 50-200 (cursor moves) | 1-5 (periodic refresh) |
| Whisper Events | Typing indicators | Cursor positions | — |
| Presence Data | Online users | Editors per document | Active viewers |
| Scaling | Redis for multi-server | Redis for multi-server | Single server sufficient |

## Chapter Quiz

**1. Which interface must an event implement to be broadcast to WebSocket clients?**
- a) ShouldQueue
- b) ShouldBroadcast
- c) ShouldBeUnique
- d) ShouldDispatch

**2. What is the difference between Echo.private() and Echo.join()?**
- a) private() is for authenticated users, join() is for guests
- b) private() subscribes to private channels, join() subscribes to presence channels
- c) join() requires a callback, private() does not
- d) There is no difference

**3. What does broadcastAs() method define on a broadcast event?**
- a) The channel name
- b) The event name for client-side listening
- c) The queue connection
- d) The authorization logic

**4. Which type of channel exposes here(), joining(), and leaving() events?**
- a) Public
- b) Private
- c) Presence
- d) Mixed

**Answers: 1-b, 2-b, 3-b, 4-c**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH09 - Container Packages
# ============================================================
Write-Host "Processing 09-container-packages.md..." -ForegroundColor Green
$f = "$dir\09-container-packages.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Broadcasting, Events & Real-Time Features" -prevFile "08-broadcasting-realtime" -nextName "Testing, Debugging & Observability" -nextFile "10-testing-observability"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Service Container | bind, singleton, contextual, extend, tagged |
| Service Providers | Registration, booting, deferral |
| Facades | Static proxies, real-time facades, trade-offs |
| Package Development | Discovery, publishing, service providers |
| Artisan Commands | Signature, input, output, progress bars |
| Scheduled Tasks | Frequencies, hooks, overlapping prevention |
| Concurrency | Process facade, pools, Concurrency::run |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Service Container] --> B[Service Providers]
    B --> C[Facades]
    C --> D[Package Development]
    D --> E[Artisan Commands]
    E --> F[Scheduled Tasks]
    F --> G[Concurrency & Processes]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "The service container manages class dependencies and performs automatic resolution, serving as the foundation of Laravel's IoC architecture."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Service Container Deep Dive" -takeaway "bind() creates new instances on each resolution, singleton() returns the same instance, and contextual binding provides different implementations per consumer."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Service Providers" -takeaway "Providers follow register() for container bindings and boot() for using registered services; deferrable providers load only when their services are requested."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Facades" -takeaway "Facades provide static-like proxies to container bindings; real-time facades use the Facades prefix for any class without creating a facade class."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Package Development" -takeaway "Laravel packages use Composer's extra.laravel section for auto-discovery and provide helpers for publishing config, migrations, assets, and routes."
$content = Add-TakeawayAfterH2 -content $content -h2Text "Scheduled Tasks" -takeaway "The task scheduler offers 20+ frequency methods with hooks, overlapping prevention via cache locks, and single-server execution semantics."

$content = Insert-Callout -content $content -afterText "// In boot() of AppServiceProvider`n    RateLimiter::for('payments'" -callout @'
> **Remember:** Never resolve services from the container in the `register()` method. Only bind interfaces to implementations there. Service resolution belongs in `boot()` after all providers have registered their bindings.
'@
$content = Insert-Callout -content $content -afterText "use Facades\App\Services\PaymentService;" -callout @'
> **Pro Tip:** Real-time facades (prefixing any class with Facades) are excellent for prototyping. But for production, create explicit facades — they provide better IDE support and are more discoverable by other developers.
'@
$content = Insert-Callout -content $content -afterText "`$schedule->command('analytics:sync')`n        ->hourly()`n        ->withoutOverlapping(60)" -callout @'
> **Warning:** Always use `withoutOverlapping()` for tasks that could exceed their scheduled interval. Without this, overlapping task instances can cause race conditions, duplicate processing, and database contention.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | bind() | singleton() | instance() |
|---------|--------|-------------|------------|
| Resolution | New instance each time | Same instance every time | Pre-built object |
| Lazy Loading | Yes (resolved on first access) | Yes | No (object must exist) |
| Testing | Easy to swap | Easy to swap | Very easy (direct mock) |
| Use Case | Stateless services | Stateful services, config | Pre-configured objects |
| Memory | Higher (multiple instances) | Lower (shared instance) | Same as singleton |

## Quick Reference — Container Methods

| Method | Purpose |
|--------|---------|
| `$app->bind(Abstract, Concrete)` | Register implementation |
| `$app->singleton(Abstract, Concrete)` | Shared instance |
| `$app->instance(Abstract, $object)` | Register existing object |
| `$app->when(Class)->needs(Interface)->give(...)` | Contextual binding |
| `$app->tag([...], 'tag')` | Group bindings |
| `$app->tagged('tag')` | Resolve tagged group |
| `$app->extend(Abstract, Closure)` | Decorate resolved instance |
| `$app->resolving(Abstract, Closure)` | Resolution event hook |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS |
|---------|------|-----------|------|
| Container Bindings | Markdown parser | PaymentGateway interface | TenantResolver |
| Providers | BlogServiceProvider | PaymentServiceProvider | MultiTenantProvider |
| Facades | Blog:: | Cart:: | Tenant:: |
| Scheduled Tasks | Weekly cleanup | Daily report at 6AM | Hourly billing sync |
| Artisan Commands | blog:status | reports:generate | tenants:purge |

## Chapter Quiz

**1. What is the difference between bind() and singleton()?**
- a) bind() creates a new instance each resolution; singleton() reuses the same instance
- b) bind() is for interfaces; singleton() is for classes
- c) singleton() is faster than bind()
- d) bind() requires a closure; singleton() requires a class name

**2. What phase should container bindings be registered in a service provider?**
- a) boot()
- b) register()
- c) provides()
- d) constructor

**3. How does a real-time facade work?**
- a) By extending the Facade class
- b) By prefixing any class with Facades
- c) By implementing FacadeInterface
- d) By adding a @Facade annotation

**4. What does ->withoutOverlapping() prevent?**
- a) Duplicate cron job executions
- b) Concurrent PHP processes
- c) Cache stampede
- d) Memory leaks

**Answers: 1-a, 2-b, 3-b, 4-a**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH10 - Testing Observability
# ============================================================
Write-Host "Processing 10-testing-observability.md..." -ForegroundColor Green
$f = "$dir\10-testing-observability.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Service Container, Facades & Package Development" -prevFile "09-container-packages" -nextName "Caching, Performance & Octane" -nextFile "11-caching-performance"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| PHPUnit | Configuration, test directory structure, artisan test runner |
| PEST | Fluent syntax, expectations, arch tests |
| HTTP Tests | Request simulation, response assertions, auth |
| Database Tests | Factories, states, sequences, assertions |
| Feature vs Unit | Scope, speed, decision guide |
| Mocks & Fakes | Bus, Event, Mail, Notification, Queue, Storage, Http |
| Dusk | Browser testing, page objects, components |
| Telescope | Debug dashboard, filtering, tagging |
| Pulse | Production monitoring, custom cards |
| Debugging Tools | dd(), Ray, Debugbar, Ignition |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[PHPUnit Config] --> B[PEST Syntax]
    B --> C[HTTP Tests]
    B --> D[Database Tests]
    C --> E[Feature Tests]
    C --> F[Unit Tests]
    E --> G[Mocks & Fakes]
    F --> G
    G --> H[Dusk Browser Tests]
    H --> I[Telescope]
    I --> J[Pulse]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Laravel provides a comprehensive testing ecosystem from unit tests through browser tests with deep observability tooling."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.1 PHPUnit in Laravel" -takeaway "Laravel ships with PHPUnit configured via phpunit.xml.dist, supporting parallel testing and multiple database migration traits."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.2 PEST" -takeaway "PEST provides expressive testing syntax with it(), describe(), expectations, higher-order tests, and architectural constraint enforcement."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.3 HTTP Tests" -takeaway "HTTP test helpers simulate the full request/response cycle with rich assertion methods for status codes, JSON, sessions, and database state."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.5 Feature vs. Unit Tests" -takeaway "Feature tests exercise the full stack while unit tests isolate single classes; the choice depends on whether you need integration confidence or fast feedback."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.6 Mocks & Fakes" -takeaway "Laravel's system of fakes (Bus, Event, Mail, Notification, Http, Storage, Queue) prevents side effects and enables precise assertions."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.7 Browser Tests with Dusk" -takeaway "Dusk provides browser-level testing with element interaction, page objects, and component objects driven by a real Chrome instance."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.8 Laravel Telescope" -takeaway "Telescope offers deep development-time observability across requests, queries, jobs, mail, and cache with filtering and tagging."
$content = Add-TakeawayAfterH2 -content $content -h2Text "10.9 Laravel Pulse" -takeaway "Pulse delivers real-time production monitoring via dashboard cards for servers, slow queries, jobs, exceptions, and cache performance."

$content = Insert-Callout -content $content -afterText "php artisan test tests/Feature/PostControllerTest.php" -callout @'
> **Pro Tip:** Use `php artisan test --parallel` (Laravel 11+) to run tests across multiple worker processes. Combined with `RefreshDatabase`, this can cut CI test suite time by 60-80% with zero configuration.
'@
$content = Insert-Callout -content $content -afterText "`$browser->click('.selector')" -callout @'
> **Remember:** Dusk tests run in a real Chrome instance. Use `->screenshot('name')` during test development to capture the browser state when tests fail — it's invaluable for debugging failing selectors or assertions.
'@
$content = Insert-Callout -content $content -afterText "Gate::define('viewTelescope', function (?User `$user) {" -callout @'
> **Warning:** Never deploy Telescope with the default access gate in production. Always restrict access to admin users only, and consider using Pulse instead for production monitoring — Telescope is designed for local development.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Feature Tests | Unit Tests |
|---------|-------------|------------|
| Scope | Full request/response cycle | Single class in isolation |
| Speed | Slower (app boot, DB) | Fast (milliseconds) |
| Database | Yes (RefreshDatabase) | No (mock/stub) |
| Confidence | High (system as user would) | Moderate (unit logic only) |
| Best For | Controllers, API, workflows | Services, helpers, formatters |

## Quick Reference — Test Assertions

| Assertion | Purpose |
|-----------|---------|
| `assertOk()` | Status 200 |
| `assertCreated()` | Status 201 |
| `assertNoContent()` | Status 204 |
| `assertUnauthorized()` | Status 401 |
| `assertForbidden()` | Status 403 |
| `assertNotFound()` | Status 404 |
| `assertJsonPath('key', value)` | Specific JSON value |
| `assertDatabaseHas('table', [...])` | Database record exists |
| `assertSessionHas('key')` | Session has value |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS |
|---------|------|-----------|------|
| Test Strategy | Feature-heavy | Feature + Unit mix | Unit-heavy + Integration |
| Fakes Used | Mail, Event | Http, Queue, Mail | Http, Notification, Queue |
| Dusk Tests | Comment flow | Checkout flow | Onboarding flow |
| Telescope Focus | Query N+1 | Payment debugging | Tenant scoping |
| Pulse Cards | Popular posts | Sales dashboard | Per-tier usage |

## Chapter Quiz

**1. What is the difference between RefreshDatabase and DatabaseMigrations?**
- a) RefreshDatabase wraps tests in transactions; DatabaseMigrations runs migrate:fresh before each test
- b) RefreshDatabase is for MySQL; DatabaseMigrations is for PostgreSQL
- c) There is no difference
- d) RefreshDatabase is faster; DatabaseMigrations is more reliable

**2. Which PEST feature enforces that dd() and dump() are not used in production code?**
- a) it() blocks
- b) describe() groups
- c) Arch tests
- d) Higher-order tests

**3. What does Bus::fake() do?**
- a) Prevents jobs from being dispatched
- b) Catches dispatched jobs for assertion without executing them
- c) Fakes the queue connection
- d) Creates fake job data

**4. Which tool is designed for production monitoring, not local development?**
- a) Telescope
- b) Debugbar
- c) Pulse
- d) Ray

**Answers: 1-a, 2-c, 3-b, 4-c**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH11 - Caching Performance
# ============================================================
Write-Host "Processing 11-caching-performance.md..." -ForegroundColor Green
$f = "$dir\11-caching-performance.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Testing, Debugging & Observability" -prevFile "10-testing-observability" -nextName "Laravel AI SDK — Agents, Prompting & Structured Output" -nextFile "12-ai-sdk-agents"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Cache Drivers | File, database, redis, dynamodb, array |
| Cache API | put, remember, tags, atomic locks |
| Cache Tags | Grouped invalidation with Redis/Memcached |
| Atomic Locks | Distributed mutex, blocking locks |
| Redis Optimization | Commands, pub/sub, pipelines, sentinel |
| Database Performance | Indexing, N+1 detection, chunking |
| Eager Loading | Nested, lazy, default, constrained |
| Laravel Octane | Swoole/RoadRunner, state management |
| Caching Strategies | Cache-aside, write-through, write-behind |
| Asset Optimization | Vite splitting, CDN, image optimization |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Cache Drivers] --> B[Cache API]
    B --> C[Cache Tags]
    B --> D[Atomic Locks]
    B --> E[Redis Optimization]
    F[Database Performance] --> G[Eager Loading]
    G --> H[Laravel Octane]
    I[Caching Strategies] --> J[Asset Optimization]
    H --> J
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "Theory" -takeaway "Laravel supports seven cache drivers and a comprehensive Cache API with tags, atomic locks, and TTL management."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.1 Cache Drivers" -takeaway "File is simplest for development, Redis is the production workhorse with tag support, and DynamoDB offers managed serverless caching on AWS."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.2 Cache API" -takeaway "The Cache facade provides put, remember, forever, pull, add, many, increment, decrement, and the new touch() method for TTL extension."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.3 Cache Tags" -takeaway "Cache tags group related entries for bulk invalidation; tags require Redis or Memcached and are the preferred pattern for grouped cache."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.4 Atomic Locks" -takeaway "Atomic locks provide distributed mutex across servers, supporting blocking locks, auto-release on exceptions, and cross-request locking."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.6 Database Performance" -takeaway "Database optimization centers on composite indexing (equality columns first), N+1 prevention, chunking large datasets, and read/write connection separation."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.8 Laravel Octane" -takeaway "Octane eliminates framework boot overhead by keeping the application in memory, with Swoole and RoadRunner as the supported application servers."
$content = Add-TakeawayAfterH2 -content $content -h2Text "11.10 Caching Strategies" -takeaway "Cache-aside is simplest, write-through keeps cache fresh but costs write latency, and write-behind absorbs traffic spikes at risk of data loss."

$content = Insert-Callout -content $content -afterText "CACHE_STORE=redis`nREDIS_CLIENT=phpredis" -callout @'
> **Pro Tip:** Use `phpredis` over `predis` for production. phpredis is a C extension that uses less memory, supports more Redis features (like Sentinel and Cluster natively), and is significantly faster than the pure-PHP predis library.
'@
$content = Insert-Callout -content $content -afterText "Cache::tags(['posts', 'published'])->flush();" -callout @'
> **Remember:** Cache tags only work with Redis and Memcached. Attempting to use tags with file, database, or DynamoDB drivers throws a CacheException. Always check your driver before relying on tag-based invalidation.
'@
$content = Insert-Callout -content $content -afterText "// Lazy loading detected" -callout @'
> **Warning:** Enable `Model::preventLazyLoading(!$this->app->isProduction())` in AppServiceProvider. In production, use `Model::handleLazyLoadingViolationUsing()` to log violations instead of throwing exceptions. The performance cost of lazy loading is often invisible until traffic spikes.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Strategy | Cache Hit | Cache Miss | Write Performance | Data Freshness |
|----------|-----------|------------|-------------------|---------------|
| Cache-Aside (Lazy) | Return cached | Compute + store | Fast | TTL-dependent |
| Write-Through | Return cached | — | Slower (dual write) | Always fresh |
| Write-Behind | Return cached | — | Fastest (async) | Risk of loss |

## Quick Reference — Cache Methods

| Method | Purpose |
|--------|---------|
| `Cache::put('key', $val, 3600)` | Store with TTL |
| `Cache::remember('key', 3600, fn)` | Get or store if missing |
| `Cache::tags(['posts'])->flush()` | Flush group by tag |
| `Cache::lock('key', 10)->get(fn)` | Atomic lock with auto-release |
| `Cache::touch('key', 3600)` | Extend TTL (Laravel 13) |
| `Cache::increment('counter')` | Atomic increment |

## Cross-Application Matrix

| Concept | Blog | E-Commerce | SaaS |
|---------|------|-----------|------|
| Cache-aside | Post queries | Product listing | Tenant config |
| Write-through | Post creation | Order placement | Subscription update |
| Write-behind | View counter | Inventory sync | Usage metrics |
| Tags | posts, categories | products, inventory, prices | tenants, plans, features |
| Octane | Not needed | Product browsing | API-heavy workloads |

## Chapter Quiz

**1. Which cache driver supports tags?**
- a) File
- b) Database
- c) Redis
- d) Array

**2. What does Cache::touch() do in Laravel 13?**
- a) Deletes a cache entry
- b) Extends TTL without read-write cycle
- c) Creates a new cache entry
- d) Checks if a key exists

**3. What is the cache stampede problem?**
- a) Too many cache keys
- b) Multiple requests simultaneously recomputing expired cache
- c) Cache memory overflow
- d) Slow cache writes

**4. Which Octane server runs as a Go binary?**
- a) Swoole
- b) RoadRunner
- c) FrankenPHP
- d) ReactPHP

**Answers: 1-c, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH12 - AI SDK Agents
# ============================================================
Write-Host "Processing 12-ai-sdk-agents.md..." -ForegroundColor Green
$f = "$dir\12-ai-sdk-agents.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Caching, Performance & Octane" -prevFile "11-caching-performance" -nextName "Laravel AI SDK — Tools, MCP Tools & Provider Tools" -nextFile "13-ai-sdk-tools"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| SDK Architecture | Provider-agnostic design, configuration |
| Agent Creation | Agent interface, Promptable trait |
| Prompting | Static make(), prompt(), configuration |
| Conversation Context | RemembersConversations, forUser(), continue() |
| Structured Output | HasStructuredOutput, JsonSchema builder |
| Streaming | stream(), then(), Vercel protocol |
| Broadcasting | broadcast(), broadcastOnQueue(), channels |
| Queueing | queue(), then(), catch(), job tracking |
| Anonymous Agents | Agent facade, inline creation |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[SDK Architecture] --> B[Installation & Config]
    B --> C[Creating Agents]
    C --> D[Prompting Agents]
    D --> E[Conversation Context]
    D --> F[Structured Output]
    D --> G[Streaming]
    D --> H[Broadcasting]
    D --> I[Queueing]
    C --> J[Anonymous Agents]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "12.1 The AI SDK Architecture" -takeaway "The laravel/ai package provides a unified, provider-agnostic interface for interacting with 14+ AI providers through a single fluent API."
$content = Add-TakeawayAfterH2 -content $content -h2Text "12.4 Creating Agents" -takeaway "Agents encapsulate a system prompt and model configuration; they implement the Agent interface with the Promptable trait providing make() and prompt()."
$content = Add-TakeawayAfterH2 -content $content -h2Text "12.6 Conversation Context" -takeaway "Conversational agents use RemembersConversations to persist multi-turn interactions to the database, with forUser() starting and continue() resuming conversations."
$content = Add-TakeawayAfterH2 -content $content -h2Text "12.7 Structured Output" -takeaway "HasStructuredOutput enables typed JSON responses using the fluent JsonSchema builder with nested objects, arrays, enums, and validation constraints."
$content = Add-TakeawayAfterH2 -content $content -h2Text "12.8 Streaming Responses" -takeaway "The stream() method returns tokens as they arrive, with then() callbacks for post-stream processing and Vercel AI SDK protocol compatibility."
$content = Add-TakeawayAfterH2 -content $content -h2Text "12.10 Queueing Agent Work" -takeaway "The queue() method dispatches agent prompts to the queue for async processing, with then() and catch() callbacks for result handling."

$content = Insert-Callout -content $content -afterText "return ['feedback' => `$response->text()];" -callout @'
> **Pro Tip:** Always log token usage (`$response->inputTokens()` and `$response->outputTokens()`) in production. AI costs scale with usage, and tracking token consumption per endpoint is essential for cost monitoring and optimization.
'@
$content = Insert-Callout -content $content -afterText "return 'You are an expert sales coach" -callout @'
> **Remember:** The system prompt (instructions()) is the most critical factor in agent quality. Invest time in writing clear, specific instructions that include the agent's role, tone, constraints, and expected output format.
'@
$content = Insert-Callout -content $content -afterText "use Laravel\Ai\HasStructuredOutput;" -callout @'
> **Warning:** Structured output enforces the response shape — if the model produces output that violates the schema, the SDK throws an exception. Design your schemas with nullable and optional fields for real-world data variability.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | prompt() | stream() | queue() |
|---------|----------|----------|---------|
| Response | Blocking (full text) | Streaming (chunks) | Async (callback) |
| Latency | Full round-trip | First token fast | Background processing |
| User Experience | Waiting indicator | Real-time token display | Poll/broadcast result |
| Error Handling | Try/catch | then() callback | catch() callback |
| Best For | Simple questions | Chat interfaces | Heavy processing |

## Quick Reference — AI SDK Artisan Commands

| Command | Purpose |
|---------|---------|
| `composer require laravel/ai` | Install AI SDK |
| `php artisan vendor:publish --provider=\"Laravel\Ai\AiServiceProvider\"` | Publish config |
| `php artisan make:agent SalesCoach` | Create agent class |
| `php artisan migrate` | Create conversation tables |

## Cross-Application Matrix

| Concept | Support Bot | Content Generator | Data Extractor |
|---------|------------|------------------|---------------|
| Agent Type | Conversational | Single-prompt | Structured output |
| Context | Multi-turn (forUser) | None (stateless) | None (stateless) |
| Output | Text stream | Text (full response) | Structured JSON |
| Execution | stream() | prompt() | queue() |
| Provider | Anthropic | OpenAI | Gemini |

## Chapter Quiz

**1. Which trait provides the default make() method implementation for agents?**
- a) HasConversations
- b) Promptable
- c) HasStructuredOutput
- d) RemembersConversations

**2. How do you continue an existing conversation with an agent?**
- a) Agent::resume($id)
- b) ->continue($conversationId)
- c) ->resume($conversationId)
- d) ->load($conversationId)

**3. What does HasStructuredOutput enforce?**
- a) Response speed
- b) Typed JSON response shape
- c) Conversation history length
- d) Token limits

**4. Which method enables Vercel AI SDK protocol compatibility?**
- a) usingVercelProtocol()
- b) usingVercelDataProtocol()
- c) enableVercel()
- d) vercelMode()

**Answers: 1-b, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH13 - AI SDK Tools
# ============================================================
Write-Host "Processing 13-ai-sdk-tools.md..." -ForegroundColor Green
$f = "$dir\13-ai-sdk-tools.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Laravel AI SDK — Agents, Prompting & Structured Output" -prevFile "12-ai-sdk-agents" -nextName "Laravel AI SDK — Images, Audio, Transcriptions & Embeddings" -nextFile "14-ai-sdk-media"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Tools Concept | Tool interface, description/schema/handle |
| Creating Tools | Custom tools, database query tools |
| Similarity Search | RAG via vector search, custom queries |
| MCP Tools | Remote/local MCP servers, spread operator |
| Provider Tools | WebSearch, WebFetch, FileSearch |
| Agent Middleware | before()/after() hooks |
| Configuration | Provider, model, timeout defaults |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Tools Concept] --> B[Creating Tools]
    B --> C[Database Query Tools]
    B --> D[Similarity Search RAG]
    C --> E[MCP Tools Integration]
    D --> E
    E --> F[Provider Tools]
    A --> G[Agent Middleware]
    A --> H[Agent Configuration]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "13.1 The Tools Concept" -takeaway "Tools bridge the gap between language models and external systems by letting agents call your code through a typed schema interface during generation."
$content = Add-TakeawayAfterH2 -content $content -h2Text "13.2 Creating Tools" -takeaway "Every tool implements the Tool interface with description() guiding model decisions, schema() defining typed parameters, and handle() executing logic."
$content = Add-TakeawayAfterH2 -content $content -h2Text "13.4 Database Query Tools" -takeaway "Database query tools are the most common pattern, allowing agents to look up orders, users, or products through controlled, parameterized queries."
$content = Add-TakeawayAfterH2 -content $content -h2Text "13.5 Similarity Search Tool" -takeaway "SimilaritySearch provides the foundation for Retrieval-Augmented Generation (RAG) by performing vector search against Eloquent models with embedding columns."
$content = Add-TakeawayAfterH2 -content $content -h2Text "13.6 MCP Tools Integration" -takeaway "MCP tools from remote or local servers are spread into agents using the ... operator, combining external capabilities with local tools."
$content = Add-TakeawayAfterH2 -content $content -h2Text "13.7 Provider Tools" -takeaway "Provider tools like WebSearch, WebFetch, and FileSearch are built-in capabilities configured directly on PendingAgentRequest without custom tool classes."
$content = Add-TakeawayAfterH2 -content $content -h2Text "13.9 Agent Middleware" -takeaway "Agent middleware provides before() and after() hooks for cross-cutting concerns like logging, metrics collection, and access control."

$content = Insert-Callout -content $content -afterText "public function description(): Stringable|string" -callout @'
> **Pro Tip:** The description() return value is critical — the language model uses these descriptions to decide which tool to call. A vague description like 'Gets data' causes incorrect tool selection. Be specific about what the tool does and when to use it.
'@
$content = Insert-Callout -content $content -afterText "if (isset(`$request['order_id'])) {" -callout @'
> **Warning:** Always cast and validate incoming values in handle(). Models send arbitrary types based on their training data. A parameter documented as integer might arrive as a string. Defensive validation prevents runtime errors.
'@
$content = Insert-Callout -content $content -afterText "SimilaritySearch::usingModel(Document::class, 'embedding')" -callout @'
> **Remember:** The minSimilarity threshold directly impacts RAG quality. Start with 0.78 and tune based on your embedding model and use case. Higher values return fewer but more relevant results; lower values increase recall at the cost of noise.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Custom Tools | MCP Tools | Provider Tools |
|---------|-------------|-----------|---------------|
| Definition | PHP Tool class | External server | Provider built-in |
| Hosting | In-app | Remote/local server | Provider-side |
| Schema | JsonSchema in code | Server-defined | Provider-defined |
| Latency | Low (in-process) | Medium (network) | Medium (API call) |
| Use Case | Database queries | GitHub, Slack APIs | Web search, file search |

## Quick Reference — AI SDK Tool Methods

| Method | Purpose |
|--------|---------|
| `php artisan make:tool RandomNumber` | Create tool class |
| `->withTools([...])` | Register tools on anonymous agent |
| `->withWebSearch(max: 5)` | Enable provider web search |
| `->withWebFetch()` | Enable URL fetching |
| `->withFileSearch(vectorStoreIds: [...])` | Enable file search |
| `SimilaritySearch::usingModel()` | Create vector search tool |

## Cross-Application Matrix

| Concept | Support Agent | Developer Agent | Research Agent |
|---------|--------------|----------------|---------------|
| Custom Tools | OrderLookup | GitHubIssueTool | WebScraperTool |
| MCP Tools | CRM server | GitHub + Slack | Database explorer |
| SimilaritySearch | Product docs | Codebase docs | Research papers |
| Provider Tools | WebSearch (docs) | WebFetch (bug reports) | WebSearch (research) |
| Middleware | Audit logging | Rate limiting | Cost tracking |

## Chapter Quiz

**1. What are the three methods every Tool must implement?**
- a) name(), schema(), execute()
- b) description(), schema(), handle()
- c) instructions(), parameters(), run()
- d) title(), input(), output()

**2. How are MCP tools combined with local tools in an agent?**
- a) Through a configuration file
- b) Using the spread (...) operator
- c) Via dependency injection
- d) Through facade registration

**3. What does withWebSearch() enable?**
- a) URL fetching
- b) Internet search capabilities
- c) Vector store search
- d) File system search

**4. What is the purpose of Agent Middleware?**
- a) To validate tool parameters
- b) To provide before/after hooks for logging and metrics
- c) To authenticate API requests
- d) To cache agent responses

**Answers: 1-b, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH14 - AI SDK Media
# ============================================================
Write-Host "Processing 14-ai-sdk-media.md..." -ForegroundColor Green
$f = "$dir\14-ai-sdk-media.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Laravel AI SDK — Tools, MCP Tools & Provider Tools" -prevFile "13-ai-sdk-tools" -nextName "Laravel MCP — Model Context Protocol" -nextFile "15-mcp"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Image Generation | Text-to-image, provider selection, options |
| Text-to-Speech | Audio synthesis, voice selection |
| Speech-to-Text | Transcription, timestamps |
| Embeddings | Str helper, Embeddings class, batch processing |
| Embedding Caching | Cache keys, observer invalidation |
| Reranking | Cross-encoder rescoring |
| Vector Stores | File management, provider-side storage |
| Failover & Retry | Provider chaining, exponential backoff |
| Testing | Fakes for all AI SDK operations |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Image Generation] --> B[Text-to-Speech]
    B --> C[Speech-to-Text]
    C --> D[Embeddings]
    D --> E[Embedding Caching]
    E --> F[Reranking]
    F --> G[Vector Stores]
    G --> H[Failover & Retry]
    H --> I[Testing & Fakes]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "14.1 Image Generation" -takeaway "The Image class provides a unified interface for generating images across providers like OpenAI (DALL-E 3), Gemini, and Azure."
$content = Add-TakeawayAfterH2 -content $content -h2Text "14.2 Text-to-Speech (TTS) Audio" -takeaway "The Audio class converts text to spoken audio with support for OpenAI TTS-1, ElevenLabs, and Gemini, accepting voice and stability parameters."
$content = Add-TakeawayAfterH2 -content $content -h2Text "14.3 Speech-to-Text Transcription" -takeaway "The Transcript class transcribes audio files to text with Whisper, supporting word-level timestamps for segmented analysis."
$content = Add-TakeawayAfterH2 -content $content -h2Text "14.4 Embeddings" -takeaway "Str::toEmbeddings() handles single texts while Embeddings::for([...])->generate() batch-processes multiple texts in a single API call for efficiency."
$content = Add-TakeawayAfterH2 -content $content -h2Text "14.5 Caching Embeddings" -takeaway "Cache embeddings using content-hash keys to avoid redundant API calls; observer hooks invalidate caches when documents change."
$content = Add-TakeawayAfterH2 -content $content -h2Text "14.6 Reranking" -takeaway "Reranking rescales initial search results using cross-encoder models from Cohere, Jina, and VoyageAI for improved precision."
$content = Add-TakeawayAfterH2 -content $content -h2Text "14.9 Testing AI SDK Operations" -takeaway "The SDK provides fake implementations for Agent, Image, Audio, Transcript, Embedding, and Reranking, enabling deterministic, side-effect-free testing."

$content = Insert-Callout -content $content -afterText "return ['url' => Storage::disk('public')->url(`$filename)];" -callout @'
> **Pro Tip:** Always validate and sanitize image prompts before sending to the API. Provider content policies vary — what works on OpenAI may be rejected by Gemini. Append style guidance ('photorealistic', 'digital art') for consistent results.
'@
$content = Insert-Callout -content $content -afterText "`$embedding = Str::of(`$text)->toEmbeddings();" -callout @'
> **Remember:** Embedding API calls are stateless — generating the same text twice costs twice. Always implement caching with content-hash keys (md5 of the input text) to avoid redundant API costs.
'@
$content = Insert-Callout -content $content -afterText "`$results = Reranking::of(`$documents)->rerank(`$request->input('query'));" -callout @'
> **Warning:** Reranking adds latency and cost per operation. Only rerank the top 20-50 results from your initial retrieval, not the entire corpus. The two-stage retrieve-then-rerank pattern balances speed with accuracy.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Str::toEmbeddings() | Embeddings::for() |
|---------|--------------------|-------------------|
| Scope | Single text | Multiple texts (batch) |
| API Calls | 1 per invocation | 1 for entire batch |
| Efficiency | Lower (per-text call) | Higher (batched) |
| Use Case | Real-time search query | Batch document indexing |

## Quick Reference — AI SDK Media Methods

| Method | Purpose |
|--------|---------|
| `Image::of($prompt)->generate()` | Generate image |
| `Audio::of($text)->generate()` | Text-to-speech |
| `Transcript::of($file)->fromFile()` | Speech-to-text |
| `Str::of($text)->toEmbeddings()` | Single embedding |
| `Embeddings::for([$texts])->generate()` | Batch embeddings |
| `Reranking::of($docs)->rerank($query)` | Re-rank results |

## Cross-Application Matrix

| Concept | Media App | Content Platform | Enterprise Search |
|---------|----------|-----------------|-----------------|
| Image Gen | Thumbnails, covers | Social media posts | Report headers |
| TTS | Audiobooks | Article narration | Accessibility |
| Embeddings | Video descriptions | Article search | Document retrieval |
| Reranking | Search relevance | Content discovery | Compliance search |
| Caching | Video metadata | Article embeddings | Legal documents |

## Chapter Quiz

**1. Which method generates a single text embedding?**
- a) Embeddings::for([$text])->generate()
- b) Str::of($text)->toEmbeddings()
- c) Text::embed($text)
- d) Vector::create($text)

**2. What is the purpose of Reranking in a search pipeline?**
- a) To reduce the number of search results
- b) To rescale initial results using a cross-encoder
- c) To generate search query embeddings
- d) To cache search results

**3. Which facade provides fake implementations for testing?**
- a) Agent::fake(), Image::fake(), Audio::fake()
- b) Mock::fake(), Stub::fake()
- c) Test::fake(), Assert::fake()
- d) Fake::agent(), Fake::image()

**4. How does failover work in the AI SDK?**
- a) By retrying the same provider
- b) By chaining providers with priority ordering
- c) By switching to a local model
- d) By caching the last successful response

**Answers: 1-b, 2-b, 3-a, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH15 - MCP
# ============================================================
Write-Host "Processing 15-mcp.md..." -ForegroundColor Green
$f = "$dir\15-mcp.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Laravel AI SDK — Images, Audio, Transcriptions & Embeddings" -prevFile "14-ai-sdk-media" -nextName "Semantic Search, Vector Search & RAG with pgvector" -nextFile "16-search-rag"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| MCP Overview | Protocol architecture, primitives |
| Server Creation | Attributes, tools/resources/prompts |
| Server Registration | HTTP and local deployment |
| Tools | inputSchema, handle, outputSchema |
| Tool Annotations | ReadOnly, Destructive, Idempotent, OpenWorld |
| Tool Responses | Text, file, structured, streaming |
| Prompts | Templates, arguments, validation |
| Resources | URI-based data, template parameters |
| MCP Apps | Blade/Livewire interactive UIs |
| Authentication | OAuth 2.1, Sanctum tokens |
| MCP Client | Consuming remote servers |
| Testing | HTTP assertions, unit testing |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[MCP Overview] --> B[Creating Servers]
    B --> C[Server Registration]
    C --> D[Tools]
    C --> E[Prompts]
    C --> F[Resources]
    D --> G[Tool Annotations]
    D --> H[Tool Responses]
    F --> I[MCP Apps]
    C --> J[Authentication]
    J --> K[MCP Client]
    K --> L[Testing]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "15.1 MCP Overview" -takeaway "MCP is an open standard defining how AI clients communicate with servers that provide tools, resources, and prompts via JSON-RPC."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.3 Creating Servers" -takeaway "MCP servers are Laravel classes extending Server with PHP attributes for name, version, and instructions, and arrays for tools, resources, and prompts."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.5 Creating Tools" -takeaway "MCP tools define inputSchema for parameters, handle() for execution logic, and outputSchema for response documentation."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.6 Tool Annotations" -takeaway "Annotations like IsReadOnly, IsDestructive, IsIdempotent, and IsOpenWorld communicate behavioral metadata to guide AI agent decision-making."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.7 Tool Responses" -takeaway "Tools return structured responses via Response::text(), Response::fromStorage(), Response::error(), Response::image(), and streaming generators."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.10 MCP Apps" -takeaway "MCP Apps render rich UIs using Blade and Livewire directly within AI agent interfaces, enabling interactive dashboards and forms."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.11 Authentication" -takeaway "Laravel MCP supports OAuth 2.1 for remote AI agents and Sanctum token-based auth for first-party integrations."
$content = Add-TakeawayAfterH2 -content $content -h2Text "15.12 MCP Client" -takeaway "The MCP client allows Laravel applications to consume remote MCP servers, listing capabilities and invoking tools programmatically."

$content = Insert-Callout -content $content -afterText "composer require laravel/mcp" -callout @'
> **Pro Tip:** Always define server instructions (#[Instructions]) with specific guidance on when to use each tool. This attribute is sent to the AI agent and significantly improves tool selection accuracy.
'@
$content = Insert-Callout -content $content -afterText "`$this->expectException(\Illuminate\Validation\ValidationException::class);" -callout @'
> **Remember:** Test your MCP tools directly using Request::fromArray() for unit tests, and use HTTP JSON-RPC assertions for integration tests. Both approaches are essential for robust MCP server quality.
'@
$content = Insert-Callout -content $content -afterText "Mcp::web('/mcp/weather', WeatherServer::class)" -callout @'
> **Warning:** Always add authentication and rate limiting middleware to HTTP MCP servers. An unauthenticated MCP server exposes your application's internal tools and data to anyone who discovers the endpoint.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | MCP Tools | Provider Tools | Local Tools |
|---------|-----------|---------------|-------------|
| Protocol | JSON-RPC over HTTP | Provider API | In-process |
| Schema | inputSchema + outputSchema | Provider-defined | Tool interface |
| Deployment | Separate server | Provider-managed | Same app |
| Use Case | External API access | Web search, files | Database queries |
| Annotations | IsReadOnly, Destructive | — | — |

## Quick Reference — MCP Artisan Commands

| Command | Purpose |
|---------|---------|
| `composer require laravel/mcp` | Install MCP |
| `php artisan make:mcp-server WeatherServer` | Create server class |
| `php artisan make:mcp-tool CurrentWeatherTool` | Create tool |
| `php artisan make:mcp-prompt WeatherSummaryPrompt` | Create prompt |
| `php artisan make:mcp-resource WeatherAlertResource` | Create resource |

## Cross-Application Matrix

| Concept | Weather Service | CRM System | DevOps Platform |
|---------|---------------|-----------|----------------|
| Server | WeatherServer | CrmServer | DevopsServer |
| Tools | CurrentWeather, Forecast | ContactLookup, CreateTicket | DeployStatus, Rollback |
| Annotations | IsReadOnly, IsOpenWorld | IsDestructive (delete) | IsDestructive (rollback) |
| Auth | Sanctum | OAuth 2.1 | Sanctum + OAuth |
| Deployment | Web + Local | Web only | Local only |

## Chapter Quiz

**1. What are the three core primitives of the MCP protocol?**
- a) Actions, Data, Templates
- b) Tools, Resources, Prompts
- c) Functions, Files, Forms
- d) Commands, Queries, Events

**2. Which annotation tells the AI that a tool modifies or deletes data?**
- a) IsReadOnly
- b) IsDestructive
- c) IsIdempotent
- d) IsOpenWorld

**3. How do you register an HTTP MCP server in routes/ai.php?**
- a) Route::mcp('/endpoint', Server::class)
- b) Mcp::web('/endpoint', Server::class)
- c) Mcp::server('/endpoint', Server::class)
- d) Server::register('/endpoint')

**4. What does inputSchema() define in an MCP tool?**
- a) The response structure
- b) The parameters the AI agent must supply
- c) The server configuration
- d) The error handling logic

**Answers: 1-b, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

# ============================================================
# CH16 - Search RAG
# ============================================================
Write-Host "Processing 16-search-rag.md..." -ForegroundColor Green
$f = "$dir\16-search-rag.md"
$content = [System.IO.File]::ReadAllText($f, [System.Text.Encoding]::UTF8)

$content = Add-NavLine -content $content -prevName "Laravel MCP — Model Context Protocol" -prevFile "15-mcp" -nextName "Boost" -nextFile "17-boost"

$content = Add-AfterObjectives -content $content -tableContent @'
## Chapter at a Glance

| Section | Key Topics |
|---------|-----------|
| Full-Text Search | MySQL MATCH/AGAINST, PostgreSQL tsvector |
| Semantic Search | Embeddings, cosine similarity |
| pgvector | Extension, vector columns, HNSW indexes |
| Embedding Generation | Str::toEmbeddings(), batch processing |
| Vector Search | whereVectorSimilarTo(), auto-embedding |
| Reranking | Cross-encoder rescoring, Collection rerank |
| Laravel Scout | Database engine, full-text attributes |
| RAG Patterns | Full-text + reranking, vector + filters, hybrid |
'@ -roadmapContent @'
## Chapter Roadmap

```mermaid
flowchart LR
    A[Full-Text Search] --> B[Semantic Search Concept]
    B --> C[pgvector Installation]
    C --> D[Generating Embeddings]
    D --> E[Storing Vectors]
    E --> F[Complete Search Pipeline]
    F --> G[Reranking]
    G --> H[Laravel Scout]
    H --> I[RAG Patterns]
```
'@

$content = Add-TakeawayAfterH2 -content $content -h2Text "16.1 Full-Text Search" -takeaway "Full-text search uses database-native MATCH/AGAINST (MySQL) or to_tsvector (PostgreSQL) for stemmed, relevance-ranked keyword search."
$content = Add-TakeawayAfterH2 -content $content -h2Text "16.2 Semantic Search Concept" -takeaway "Semantic search compares vector embeddings using cosine similarity to find meaning-based matches rather than exact keyword matches."
$content = Add-TakeawayAfterH2 -content $content -h2Text "16.3 pgvector Installation" -takeaway "pgvector adds vector data types and HNSW indexes to PostgreSQL, enabling sub-millisecond similarity search at scale."
$content = Add-TakeawayAfterH2 -content $content -h2Text "16.5 Storing Vectors" -takeaway "Cast vector columns to arrays on Eloquent models for automatic serialization and generate embeddings during model creation."
$content = Add-TakeawayAfterH2 -content $content -h2Text "16.8 Laravel Scout" -takeaway "Scout provides a unified search API across engines, with the database engine using full-text indexes and attributes like SearchUsingFullText."
$content = Add-TakeawayAfterH2 -content $content -h2Text "16.9 RAG Patterns" -takeaway "Three RAG patterns serve different needs: full-text + reranking for speed, vector + filters for multi-tenant data, and hybrid for general-purpose search."

$content = Insert-Callout -content $content -afterText "Schema::ensureVectorExtensionExists();" -callout @'
> **Pro Tip:** The HNSW index parameters (ef_construction, m) balance build time vs. accuracy. Start with ef_construction=200 and m=16 for most applications. Increase ef_construction for better quality at the cost of slower index building.
'@
$content = Insert-Callout -content $content -afterText "`$embedding = Str::of(`$document->content)->toEmbeddings();" -callout @'
> **Remember:** Always cache embeddings using content-hash keys during batch indexing. Generating embeddings is both time-consuming and costly — caching prevents redundant API calls during re-indexing operations.
'@
$content = Insert-Callout -content $content -afterText "`$documents = Document::whereVectorSimilarTo(" -callout @'
> **Warning:** The minSimilarity threshold directly impacts RAG answer quality. Too low (0.3) includes irrelevant context that confuses the LLM. Too high (0.85) may miss relevant documents. Tune this per use case — start at 0.4 and adjust based on result quality.
'@

$content = Insert-BeforeSummary -content $content -insertBlock @'
## Concept Comparison

| Feature | Full-Text Search | Vector Search | Hybrid Search |
|---------|-----------------|---------------|---------------|
| Matching | Keywords, stemming | Semantic meaning | Both |
| Language | Query-dependent | Language-agnostic | Both |
| Index | B-tree, GIN | HNSW (IVFFlat) | Both |
| Speed | Fast | Fast (with HNSW) | Moderate |
| Cold Start | Zero config | Embeddings required | Both required |
| Best For | Exact terms, SKU | Synonyms, concepts | General purpose |

## Quick Reference — Search Methods

| Method | Purpose |
|--------|---------|
| `whereFullText(['col1','col2'], $query)` | Full-text search |
| `whereVectorSimilarTo('embedding', $text, 0.4)` | Semantic search (auto-embed) |
| `whereVectorSimilarTo('embedding', $array, 0.4)` | Semantic search (pre-computed) |
| `$collection->rerank('field', $query)` | Re-rank results |
| `Model::search($query)->paginate()` | Scout search |
| `Str::of($text)->toEmbeddings()` | Generate embedding |

## Cross-Application Matrix

| Concept | Documentation | E-Commerce | Support System |
|---------|-------------|-----------|---------------|
| Search Type | Hybrid | Full-text + vector | Vector + filters |
| Primary Index | Full-text (title, body) | Vector (product names) | Vector (articles) |
| Filter | Version, category | Category, price range | Product, tenant |
| Rerank | Top 50 → 10 | Top 20 → 5 | Top 30 → 5 |
| Cache TTL | 5 minutes | 1 minute | 10 minutes |

## Chapter Quiz

**1. Which PostgreSQL operator does pgvector use for cosine distance?**
- a) <#>
- b) <=>
- c) <->
- d) <@>

**2. What does the vector column dimension parameter (e.g., 1536) correspond to?**
- a) The number of rows in the table
- b) The embedding model's output dimensions
- c) The index size
- d) The query timeout

**3. Which Scout attribute enables MySQL MATCH/AGAINST queries?**
- a) SearchUsingPrefix
- b) SearchUsingFullText
- c) SearchUsingLike
- d) SearchUsingMatch

**4. What is the primary benefit of the retrieve-then-rerank pattern?**
- a) Faster queries
- b) Improved precision with manageable cost
- c) Reduced storage
- d) Simpler code

**Answers: 1-b, 2-b, 3-b, 4-b**
'@

[System.IO.File]::WriteAllText($f, $content, [System.Text.Encoding]::UTF8)
Write-Host "  Done." -ForegroundColor Green

Write-Host "`nAll 14 files enriched successfully!" -ForegroundColor Green
Write-Host "Done."
