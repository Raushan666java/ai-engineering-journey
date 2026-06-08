# 🔴 Laravel Development - Complete Syllabus
*Duration: 8-10 weeks | Focus: Modern PHP Framework Development*

## Prerequisites: PHP Fundamentals (Week 0)

### PHP Basics
- PHP syntax, variables, data types
- Control structures (if/else, loops, switch)
- Functions and scope
- Arrays and string manipulation
- Object-Oriented Programming (classes, objects, inheritance)
- Namespaces and autoloading
- Error handling and exceptions
- File handling and sessions
- Database connectivity with PDO
- Composer dependency management

## Week 1: Laravel Fundamentals 🟢

### Getting Started
**Installation & Environment Setup**
- Laravel installation via Composer
- Development environment setup (XAMPP/WAMP/Docker)
- Artisan CLI introduction
- Environment configuration (.env files)
- Application key generation

**Directory Structure & Architecture**
- Laravel directory structure overview
- MVC architecture pattern
- Service container and dependency injection
- Application lifecycle
- Configuration files structure

**Routing System**
- Basic routing (GET, POST, PUT, DELETE)
- Route parameters and constraints
- Named routes and route helpers
- Route groups and prefixes
- Route model binding
- Middleware integration
- Resource routing
- API routing

**Controllers**
- Controller creation and structure
- Resource controllers and CRUD operations
- Controller middleware
- Dependency injection in controllers
- Request handling and validation
- Response types (views, JSON, redirects)
- Single action controllers

**Blade Templating Engine**
- Blade syntax and directives
- Template inheritance and sections
- Blade components and slots
- Conditional statements and loops
- Including sub-views
- CSRF protection
- Asset compilation with Vite
- Custom Blade directives

## Week 2: Database & Eloquent ORM 🟡

### Database Management
**Database Configuration**
- Database connection setup
- Multiple database connections
- Database configuration options
- Connection pooling and optimization

**Migrations**
- Creating and running migrations
- Migration file structure
- Schema builder methods
- Modifying existing tables
- Rolling back migrations
- Migration status and batch management

**Eloquent ORM**
- Model creation and conventions
- Mass assignment and fillable properties
- Attribute casting and mutators/accessors
- Model events and observers
- Soft deletes and timestamps
- Query scopes (local and global)
- Model factories for testing
- Eloquent serialization

**Eloquent Relationships**
- One-to-One relationships
- One-to-Many relationships
- Many-to-Many relationships
- Polymorphic relationships
- Has-One-Through and Has-Many-Through
- Relationship constraints and eager loading
- Pivot tables and intermediate models
- Relationship querying and filtering

**Query Builder**
- Basic CRUD operations
- Query constraints and conditions
- Joins and subqueries
- Aggregation functions
- Raw expressions and queries
- Pagination and chunking
- Database transactions
- Query optimization techniques

**Database Seeding**
- Seeder classes and factory integration
- Database state management
- Production seeding strategies

## Week 3: Authentication & Security 🟠

### Authentication System
**User Authentication**
- Laravel authentication scaffolding (Breeze, Jetstream)
- Manual authentication implementation
- Session management and guards
- Remember me functionality
- Password reset and email verification
- Multi-factor authentication
- Social authentication (OAuth)
- API authentication with Sanctum/Passport

**Authorization & Permissions**
- Gates and policies
- Role-based access control
- Permission systems
- Authorization middleware
- Policy auto-discovery
- Resource-based authorization
- Authorization in Blade templates
- Custom authorization logic

**Middleware System**
- Creating custom middleware
- Global, route, and group middleware
- Middleware parameters
- Terminable middleware
- Middleware priority and ordering
- Built-in middleware overview
- CORS and security middleware

### Security Features
**Application Security**
- CSRF protection
- XSS prevention
- SQL injection protection
- Mass assignment protection
- Encryption and hashing
- Rate limiting and throttling
- Security headers and HTTPS
- Input sanitization and validation

## Week 4: Forms & Validation 🟠

### Form Handling
**Request Processing**
- HTTP request lifecycle
- Request data access and manipulation
- File upload handling
- Request validation basics
- Form method spoofing
- CSRF token management

**Validation System**
- Validation rules and syntax
- Custom validation rules
- Form Request classes
- Validation error handling
- Conditional validation
- Array and nested validation
- File validation
- Database validation rules

## Week 5: API Development 🟠

### RESTful API Design
**API Architecture**
- REST principles and conventions
- API versioning strategies
- Resource-based URL design
- HTTP status codes and methods
- API documentation standards
- Content negotiation
- HATEOAS implementation

**API Controllers & Resources**
- API controller creation
- Resource controllers for APIs
- API resource transformations
- Response formatting
- Error handling in APIs
- Pagination for API responses
- Rate limiting and throttling

**API Authentication & Security**
- Token-based authentication
- Laravel Sanctum for SPA authentication
- Laravel Passport for OAuth2
- JWT authentication
- API key management
- CORS configuration
- API security best practices
- Request signing and verification

### API Testing & Documentation
**API Testing**
- Feature testing for APIs
- API response assertions
- Authentication testing
- Mock external API calls
- Database testing with APIs
- Performance testing

**API Documentation**
- OpenAPI/Swagger integration
- API documentation generation
- Postman collection export
- API versioning documentation
- Interactive API documentation

## Week 6: Advanced Features 🔴

### File Management & Storage
**File System Integration**
- File upload handling and validation
- Storage disk configuration
- Local and cloud storage (S3, Google Cloud)
- File streaming and downloads
- Image manipulation and optimization
- File security and access control
- Temporary file management
- Storage symbolic links

### Queues & Jobs
**Queue System (1 day)**
```php
// Create job
php artisan make:job SendEmailJob

// app/Jobs/SendEmailJob.php
class SendEmailJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $user;
    protected $message;

    public function __construct(User $user, $message)
    {
        $this->user = $user;
        $this->message = $message;
    }

    public function handle()
    {
        // Send email logic
        Mail::to($this->user->email)->send(new WelcomeMail($this->message));
    }

    public function failed(Exception $exception)
    {
        // Handle job failure
        Log::error('Email job failed: ' . $exception->getMessage());
    }
}

// Dispatch job
SendEmailJob::dispatch($user, 'Welcome message');

// Dispatch with delay
SendEmailJob::dispatch($user, 'Welcome message')->delay(now()->addMinutes(10));

// Dispatch to specific queue
SendEmailJob::dispatch($user, 'Welcome message')->onQueue('emails');

// Queue configuration
// .env
QUEUE_CONNECTION=database

// Create queue table
php artisan queue:table
php artisan migrate

// Run queue worker
php artisan queue:work
php artisan queue:work --queue=emails,default
php artisan queue:work --tries=3 --timeout=60

// Failed jobs
php artisan queue:failed-table
php artisan migrate
php artisan queue:retry all
php artisan queue:flush
```

### Events & Listeners
**Event System (1 day)**
```php
// Create event
php artisan make:event UserRegistered

// app/Events/UserRegistered.php
class UserRegistered
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
}

// Create listener
php artisan make:listener SendWelcomeEmail --event=UserRegistered

// app/Listeners/SendWelcomeEmail.php
class SendWelcomeEmail
{
    public function handle(UserRegistered $event)
    {
        Mail::to($event->user->email)->send(new WelcomeMail($event->user));
    }
}

// Register event and listener
// app/Providers/EventServiceProvider.php
protected $listen = [
    UserRegistered::class => [
        SendWelcomeEmail::class,
        LogUserRegistration::class,
    ],
];

// Fire event
event(new UserRegistered($user));
UserRegistered::dispatch($user);

// Model events
class Post extends Model
{
    protected static function boot()
    {
        parent::boot();

        static::created(function ($post) {
            event(new PostCreated($post));
        });

        static::updated(function ($post) {
            Cache::forget("post.{$post->id}");
        });
    }
}
```

## Week 6: Testing & Deployment 🔴

### Testing
**Feature & Unit Tests (2 days)**
```php
// Create test
php artisan make:test PostTest
php artisan make:test PostTest --unit

// tests/Feature/PostTest.php
class PostTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_create_post()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)->post('/posts', [
            'title' => 'Test Post',
            'content' => 'This is test content'
        ]);

        $response->assertStatus(201);
        $this->assertDatabaseHas('posts', [
            'title' => 'Test Post',
            'user_id' => $user->id
        ]);
    }

    public function test_guest_cannot_create_post()
    {
        $response = $this->post('/posts', [
            'title' => 'Test Post',
            'content' => 'This is test content'
        ]);

        $response->assertStatus(302);
        $response->assertRedirect('/login');
    }

    public function test_post_requires_title()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)->post('/posts', [
            'content' => 'This is test content'
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['title']);
    }
}

// API Testing
public function test_api_returns_posts()
{
    $posts = Post::factory()->count(3)->create();
    
    $response = $this->getJson('/api/posts');
    
    $response->assertStatus(200)
             ->assertJsonCount(3, 'data')
             ->assertJsonStructure([
                 'data' => [
                     '*' => ['id', 'title', 'content', 'created_at']
                 ]
             ]);
}

// Database testing
public function test_user_has_posts()
{
    $user = User::factory()->has(Post::factory()->count(3))->create();
    
    $this->assertCount(3, $user->posts);
}

// Factories
// database/factories/PostFactory.php
class PostFactory extends Factory
{
    public function definition()
    {
        return [
            'title' => $this->faker->sentence(),
            'content' => $this->faker->paragraphs(3, true),
            'published' => $this->faker->boolean(),
            'user_id' => User::factory()
        ];
    }

    public function published()
    {
        return $this->state(['published' => true]);
    }
}

// Run tests
php artisan test
php artisan test --filter PostTest
php artisan test --coverage
```

### Deployment
**Production Setup (1 day)**
```bash
# Environment setup
cp .env.example .env.production

# Production .env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database
DB_USERNAME=your_username
DB_PASSWORD=your_password

CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

# Optimization commands
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan event:cache

# Clear caches
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear

# Database
php artisan migrate --force
php artisan db:seed --force

# Storage link
php artisan storage:link

# Queue worker (supervisor)
# /etc/supervisor/conf.d/laravel-worker.conf
[program:laravel-worker]
process_name=%(program_name)s_%(process_num)02d
command=php /path/to/your/app/artisan queue:work --sleep=3 --tries=3
autostart=true
autorestart=true
user=www-data
numprocs=8
redirect_stderr=true
stdout_logfile=/path/to/your/app/worker.log
```

**CI/CD with GitHub Actions (1 day)**
```yaml
# .github/workflows/laravel.yml
name: Laravel

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      mysql:
        image: mysql:8.0
        env:
          MYSQL_ROOT_PASSWORD: password
          MYSQL_DATABASE: test_db
        ports:
          - 3306:3306
        options: --health-cmd="mysqladmin ping" --health-interval=10s --health-timeout=5s --health-retries=3

    steps:
    - uses: actions/checkout@v2

    - name: Setup PHP
      uses: shivammathur/setup-php@v2
      with:
        php-version: '8.1'
        extensions: mbstring, dom, fileinfo, mysql

    - name: Copy .env
      run: php -r "file_exists('.env') || copy('.env.example', '.env');"

    - name: Install Dependencies
      run: composer install -q --no-ansi --no-interaction --no-scripts --no-progress --prefer-dist

    - name: Generate key
      run: php artisan key:generate

    - name: Directory Permissions
      run: chmod -R 777 storage bootstrap/cache

    - name: Create Database
      run: |
        mkdir -p database
        touch database/database.sqlite

    - name: Execute tests
      env:
        DB_CONNECTION: mysql
        DB_HOST: 127.0.0.1
        DB_PORT: 3306
        DB_DATABASE: test_db
        DB_USERNAME: root
        DB_PASSWORD: password
      run: vendor/bin/phpunit

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'

    steps:
    - name: Deploy to server
      uses: appleboy/ssh-action@v0.1.2
      with:
        host: ${{ secrets.HOST }}
        username: ${{ secrets.USERNAME }}
        key: ${{ secrets.KEY }}
        script: |
          cd /path/to/your/app
          git pull origin main
          composer install --optimize-autoloader --no-dev
          php artisan migrate --force
          php artisan config:cache
          php artisan route:cache
          php artisan view:cache
          php artisan queue:restart
```

## Interview Preparation

### Common Laravel Interview Questions
1. Explain Laravel's MVC architecture
2. What is Eloquent ORM and how does it work?
3. Difference between `get()` and `first()` methods
4. What are Laravel Service Providers?
5. Explain middleware and its types
6. What is the difference between `Route::resource` and `Route::apiResource`?
7. How does Laravel handle database migrations?
8. Explain Laravel's queue system
9. What are Laravel Events and Listeners?
10. How do you optimize Laravel application performance?

### Laravel Best Practices
- Follow PSR standards and Laravel conventions
- Use Eloquent relationships instead of manual joins
- Implement proper validation using Form Requests
- Use queues for time-consuming tasks
- Cache frequently accessed data
- Write comprehensive tests
- Use Laravel's built-in security features
- Keep controllers thin, models fat
- Use service classes for complex business logic
- Implement proper error handling and logging

## Resources
- **Documentation**: [Laravel Official Docs](https://laravel.com/docs)
- **Learning**: [Laracasts](https://laracasts.com/), [Laravel Daily](https://laraveldaily.com/)
- **Tools**: [Laravel Debugbar](https://github.com/barryvdh/laravel-debugbar), [Laravel Telescope](https://laravel.com/docs/telescope)
- **Testing**: [Pest PHP](https://pestphp.com/), [Laravel Dusk](https://laravel.com/docs/dusk)
- **Deployment**: [Laravel Forge](https://forge.laravel.com/), [Laravel Envoyer](https://envoyer.io/)