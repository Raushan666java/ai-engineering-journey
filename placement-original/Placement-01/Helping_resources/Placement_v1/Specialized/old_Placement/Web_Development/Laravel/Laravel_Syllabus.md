# Laravel Comprehensive Syllabus

## 1. Introduction to Laravel
- Laravel philosophy and principles
- MVC architecture in Laravel
- Laravel ecosystem overview
- Laravel versioning and LTS releases
- Setting up development environment
- Laravel Sail (Docker development environment)
- Laravel Valet for Mac
- Homestead virtual machine

## 2. Installation & Configuration
- Installing Laravel via Composer
- Project structure overview
- Environment configuration (.env files)
- Configuration caching
- Maintenance mode
- Directory structure best practices
- Laravel artisan CLI tool
- Helper functions

## 3. Routing & Controllers
- Basic routing syntax
- Route parameters and constraints
- Named routes
- Route groups and prefixes
- Route model binding (implicit & explicit)
- Resource controllers
- Single action controllers
- Route caching
- Middleware implementation
- Controller namespacing

## 4. Request Lifecycle
- Entry points (public/index.php)
- Service providers
- Service container
- Facades
- Dependency injection
- Request handling
- Response generation
- HTTP middleware
- Terminable middleware

## 5. Blade Templating
- Blade syntax and directives
- Template inheritance (layouts)
- Components and slots
- Anonymous components
- Including subviews
- Stacks and prepends
- Custom Blade directives
- Blade and JavaScript frameworks
- Asset compilation with Vite
- Form handling in Blade

## 6. Eloquent ORM
- Model creation and conventions
- Database migrations
- Database seeding
- Query builder
- Eloquent relationships
  - One-to-one
  - One-to-many
  - Many-to-many
  - Has-many-through
  - Polymorphic relationships
- Eager loading vs lazy loading
- Accessors and mutators
- Attribute casting
- Model events and observers
- Soft deletes
- Query scopes

## 7. Database & Migrations
- Database configuration
- Migration structure
- Creating and running migrations
- Rolling back migrations
- Modifying tables
- Foreign key constraints
- Indexes
- Raw SQL queries
- Multiple database connections
- Database transactions
- Query logging

## 8. Authentication & Authorization
- Built-in authentication
- Laravel Breeze starter kit
- Laravel Jetstream
- Custom authentication
- Password reset functionality
- Email verification
- Authorization with Gates
- Policies for model authorization
- Middleware for authentication
- API authentication with Sanctum
- Social authentication

## 9. Validation & Error Handling
- Form request validation
- Validator facade
- Custom validation rules
- Validation error messages
- Error handling and reporting
- Custom exception handling
- Logging configuration
- Debug and production error modes
- Form requests
- Validation rule objects

## 10. File Storage
- Configuration and drivers
- Local file operations
- Cloud storage (S3, etc.)
- File uploads
- Symbolic links
- File downloads
- Image manipulation with Intervention Image
- Storage facade
- Temporary URLs
- File visibility

## 11. Laravel as an API Backend
- API resource controllers
- API resources and transformations
- API versioning strategies
- Content negotiation
- Rate limiting
- API documentation
- Sanctum for API authentication
- Token-based authentication
- SPA authentication
- Mobile application authentication
- CORS configuration
- API testing

## 12. Testing in Laravel
- PHPUnit configuration
- Feature tests
- Unit tests
- HTTP tests
- Console tests
- Browser tests with Laravel Dusk
- Mocking
- Database testing
- Test factories
- Parallel testing
- TDD workflow in Laravel

## 13. Security
- CSRF protection
- XSS prevention
- SQL injection prevention
- Mass assignment protection
- Authentication security
- Encryption and hashing
- HTTPS and secure cookies
- Password hashing
- API security best practices
- Security headers

## 14. Caching & Performance
- Cache configuration
- Cache drivers
- Cache tags
- Cache locking
- Full-page caching
- Data caching strategies
- Query caching
- Route caching
- Config caching
- Optimizing Composer
- Optimizing Autoloader
- Deployment optimization

## 15. Queues & Background Jobs
- Queue configuration
- Queue drivers
- Creating and dispatching jobs
- Delayed jobs
- Job batching
- Job chaining
- Rate limiting
- Handling failed jobs
- Horizon dashboard
- Supervisor configuration
- Queue workers

## 16. Events & Broadcasting
- Event classes
- Event listeners
- Event subscribers
- Broadcasting events
- Channels and presence channels
- WebSockets with Laravel Echo
- Pusher integration
- Redis broadcasting
- Private and presence channels
- Client-side implementation

## 17. Task Scheduling
- Scheduling with Artisan commands
- Cron expressions
- Schedule frequency options
- Preventing task overlaps
- Task output handling
- Task hooks
- Maintenance mode considerations
- Timezone handling
- Background task execution
- Task monitoring

## 18. Packages & Ecosystem
- Laravel Breeze
- Laravel Jetstream
- Laravel Sanctum
- Laravel Fortify
- Laravel Socialite
- Laravel Horizon
- Laravel Telescope
- Laravel Nova
- Laravel Vapor
- Laravel Forge
- Laravel Envoyer
- Cashier for subscription billing
- Scout for full-text search
- Passport for OAuth

## 19. Advanced Topics
- Service container deep dive
- Custom Artisan commands
- Macros and custom extensions
- Collection pipeline
- Localization and internationalization
- Custom middleware
- Custom validation rules
- Custom Blade directives
- Package development
- Laravel internals

## 20. Deployment & DevOps
- Deployment strategies
- Server requirements
- Web server configuration (Nginx/Apache)
- Environment-specific configuration
- Deployment automation
- CI/CD pipelines
- Laravel Forge
- Laravel Vapor
- Laravel Envoyer
- Monitoring and logging
- Performance optimization

## Learning Resources
- Official Laravel Documentation: https://laravel.com/docs/12.x
- Laracasts: https://laracasts.com
- Laravel News: https://laravel-news.com
- Laravel Podcast: https://laravelpodcast.com
- Laravel GitHub: https://github.com/laravel/laravel