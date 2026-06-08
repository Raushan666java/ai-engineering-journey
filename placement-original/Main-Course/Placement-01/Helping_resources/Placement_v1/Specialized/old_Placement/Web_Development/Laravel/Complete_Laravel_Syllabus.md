# Complete Laravel Syllabus

## Introduction to Laravel

### 1. Prologue
- Laravel philosophy and principles
- History and evolution of Laravel
- Laravel's place in the PHP ecosystem
- Laravel's design goals and target audience

### 2. Release Notes
- Understanding Laravel versioning
- Major features in Laravel 12.x
- Backward compatibility considerations
- Release cycle and support policy
- LTS (Long Term Support) versions

### 3. Upgrade Guide
- Upgrading from previous versions
- Breaking changes between versions
- Deprecated features and alternatives
- Using Laravel Shift for automated upgrades
- Testing strategies during upgrades

### 4. Contribution Guide
- Laravel GitHub repositories
- Pull request workflow
- Coding standards and style guide
- Testing requirements
- Documentation contributions
- Security vulnerability reporting

## Getting Started

### 5. Installation
- Server requirements
- Installing Laravel via Composer
- Laravel installer tool
- Creating a new Laravel project
- Development environment options:
  - Laravel Sail (Docker)
  - Laravel Homestead (Vagrant)
  - Laravel Valet (macOS)
  - Laravel Herd (macOS/Windows)
- Initial configuration steps

### 6. Configuration
- Environment configuration (.env files)
- Configuration caching
- Accessing configuration values
- Environment detection
- Maintenance mode
- Directory structure overview
- Configuration files explained

### 7. Directory Structure
- Root directory files
- App directory structure
- Config directory
- Database directory
- Public directory
- Resources directory
- Routes directory
- Storage directory
- Tests directory
- Vendor directory
- Best practices for organizing code

### 8. Frontend
- Frontend scaffolding options
- Working with CSS and JavaScript
- Vite integration
- Asset compilation
- Managing frontend dependencies
- SPA setup with Laravel backend

### 9. Starter Kits
- Laravel Breeze
  - Blade stack
  - Inertia stack (Vue/React)
  - API stack
- Laravel Jetstream
  - Livewire stack
  - Inertia stack
- Teams functionality
- Profile management
- Two-factor authentication
- API support with Sanctum

### 10. Deployment
- Server requirements for production
- Deployment strategies
- Optimization commands
  - Route caching
  - Config caching
  - View caching
- Web server configuration
  - Apache
  - Nginx
- Deployment platforms
  - Laravel Forge
  - Laravel Vapor
  - Laravel Envoyer
- Continuous integration/deployment

## Architecture Concepts

### 11. Request Lifecycle
- Entry points (public/index.php)
- Bootstrap process
- HTTP/Console kernels
- Service provider registration
- Request handling
- Middleware pipeline
- Route matching
- Controller dispatch
- Response generation
- Middleware (again, in reverse)
- Sending the response

### 12. Service Container
- Dependency injection concepts
- Binding interfaces to implementations
- Automatic resolution
- Contextual binding
- Tagging
- Extending resolved services
- Container events
- PSR-11 compatibility

### 13. Service Providers
- Service provider purpose
- Register vs. boot methods
- Deferred providers
- Creating custom service providers
- Registering services
- Booting services
- Package service providers
- Configuration publishing

### 14. Facades
- Facade pattern in Laravel
- How facades work
- Real-time facades
- Facade class reference
- Creating custom facades
- Testing with facades
- Facade vs. dependency injection

## The Basics

### 15. Routing
- Basic route definitions
- Available router methods
- Route parameters
- Named routes
- Route groups
- Route model binding
- Route caching
- Form method spoofing
- CORS handling
- Rate limiting
- Subdomain routing

### 16. Middleware
- Defining middleware
- Registering middleware
- Global middleware
- Route middleware
- Middleware groups
- Middleware parameters
- Terminable middleware
- Middleware sorting

### 17. CSRF Protection
- Understanding CSRF vulnerabilities
- Laravel's CSRF protection
- CSRF tokens in forms
- CSRF tokens in JavaScript
- Excluding routes from CSRF protection
- X-CSRF-TOKEN header
- CSRF cookie

### 18. Controllers
- Basic controllers
- Single action controllers
- Resource controllers
- Nested resource controllers
- API resource controllers
- Dependency injection in controllers
- Route caching with controllers

### 19. Requests
- Accessing request data
- Input retrieval
- Old input
- Cookies
- Files
- Request path and method
- Request headers
- Content negotiation
- PSR-7 requests

### 20. Responses
- Basic responses
- Redirects
- View responses
- JSON responses
- File downloads
- File responses
- Response macros
- Response types
- Custom responses
- PSR-7 responses

### 21. Views
- Creating views
- Passing data to views
- View composers
- View creators
- Optimizing views
- Nested view directories
- Sharing data with all views
- Custom view engines

### 22. Blade Templates
- Blade syntax
- Template inheritance
- Components and slots
- Anonymous components
- Including subviews
- Stacks
- Service injection
- Extending Blade
- Custom directives
- Custom if statements
- Forms and CSRF
- Validation errors

### 23. Asset Bundling
- Vite integration
- Configuring Vite
- Using Vite in templates
- Hot module replacement
- Building for production
- Working with CSS and JavaScript
- Managing dependencies
- Environment variables

### 24. URL Generation
- Basic URL generation
- URLs for named routes
- Controller action URLs
- Default values
- URL signing
- Current URL helpers

### 25. Session
- Configuration
- Drivers
- Accessing session data
- Flash data
- Adding custom session drivers
- Session blocking

### 26. Validation
- Validation quickstart
- Form request validation
- Manually creating validators
- Error messages
- Validation rules
- Custom validation rules
- Custom error messages
- Custom validation attributes
- After validation hooks

### 27. Error Handling
- Configuration
- Exception handler
- HTTP exceptions
- Custom HTTP responses
- Reportable exceptions
- Renderable exceptions
- Ignoring exceptions by type
- Error logging
- Debug mode

### 28. Logging
- Configuration
- Log levels
- Writing to logs
- Custom channels
- Channel stacks
- Creating custom drivers
- Monolog integration

## Digging Deeper

### 29. Artisan Console
- Available commands
- Command I/O
- Generating commands
- Command structure
- Command arguments
- Command options
- Command input/output
- Registering commands
- Programmatically executing commands
- Stub customization

### 30. Broadcasting
- Configuration
- Driver prerequisites
- Concept overview
- Defining broadcast events
- Authorizing channels
- Broadcasting events
- Receiving broadcasts
- Presence channels
- Client events
- Notifications

### 31. Cache
- Configuration
- Cache usage
- Retrieving items
- Storing items
- Removing items
- Atomic locks
- Cache tags
- Adding custom cache drivers
- Cache events

### 32. Collections
- Introduction
- Creating collections
- Available methods
- Higher order messages
- Lazy collections
- Custom collections
- Extending collections

### 33. Concurrency
- Concurrent tasks
- Concurrent batch processing
- Concurrent PHP processes
- Handling results
- Error handling
- Timeouts
- Throttling

### 34. Context
- Request context
- Scoped bindings
- Contextual data
- Context propagation
- Context in queued jobs
- Testing with context

### 35. Contracts
- Introduction to contracts
- Contract reference
- How to use contracts
- When to use contracts
- Contract vs. facade

### 36. Events
- Introduction
- Registering events & listeners
- Defining events
- Defining listeners
- Queued event listeners
- Dispatching events
- Event subscribers
- Event discovery

### 37. File Storage
- Configuration
- Obtaining disk instances
- Retrieving files
- Storing files
- Deleting files
- Directories
- Custom filesystems
- Testing file uploads

### 38. Helpers
- Available methods
- Arrays & objects
- Paths
- Strings
- URLs
- Miscellaneous
- Custom helpers

### 39. HTTP Client
- Making requests
- Request data
- Headers
- Authentication
- Timeout
- Retries
- Error handling
- Guzzle options
- Testing
- Macros & stub customization

### 40. Localization
- Configuration
- Defining translation strings
- Retrieving translation strings
- Pluralization
- Overriding package language files
- Configuring the locale

### 41. Mail
- Generating mailables
- Writing mailables
- Configuring the sender
- Configuring the view
- Attachments
- Inline attachments
- Queueing mail
- Rendering mailables
- Previewing mailables
- Localizing mailables
- Testing mail

### 42. Notifications
- Introduction
- Generating notifications
- Sending notifications
- Mail notifications
- Markdown mail notifications
- Database notifications
- Broadcast notifications
- SMS notifications
- Slack notifications
- Custom channels
- On-demand notifications

### 43. Package Development
- Introduction
- Package discovery
- Service providers
- Resources
- Commands
- Public assets
- Publishing file groups
- Package development workflow

### 44. Processes
- Introduction
- Invoking processes
- Process pools
- Process chains
- Asynchronous processes
- Handling output
- Handling errors
- Testing processes

### 45. Queues
- Introduction
- Connections vs. queues
- Creating & dispatching jobs
- Job middleware
- Delayed dispatching
- Job batching
- Queueing closures
- Running the queue worker
- Supervisor configuration
- Dealing with failed jobs
- Job events

### 46. Rate Limiting
- Introduction
- Basic usage
- Defining limiters
- Attaching limiters to routes
- Segmenting rate limits
- Advanced rate limiting

### 47. Strings
- Introduction
- Available methods
- Fluent strings
- Generating strings
- String helpers

### 48. Task Scheduling
- Introduction
- Defining schedules
- Schedule frequency options
- Timezone
- Preventing task overlaps
- Running tasks on one server
- Background tasks
- Task output
- Task hooks
- Events

## Security

### 49. Authentication
- Introduction
- Database considerations
- Starter kits
- Retrieving the authenticated user
- Protecting routes
- Manual authentication
- Remembering users
- Other authentication methods
- HTTP basic authentication
- Adding custom guards
- Adding custom user providers
- Events

### 50. Authorization
- Introduction
- Gates
- Creating policies
- Writing policies
- Authorizing actions
- Policy filters
- Supplying additional context

### 51. Email Verification
- Introduction
- Model preparation
- Database considerations
- Routing
- Protecting routes
- Events
- Customization

### 52. Encryption
- Introduction
- Configuration
- Using the encrypter
- Encrypting cookies

### 53. Hashing
- Introduction
- Configuration
- Basic usage
- Password hashing
- Verifying passwords

### 54. Password Reset
- Introduction
- Database considerations
- Routing
- Requesting the reset link
- Resetting the password
- Customization

## Database

### 55. Database Getting Started
- Introduction
- Configuration
- Read & write connections
- Running SQL queries
- Database transactions
- Connecting to multiple databases
- Connection events
- Monitoring queries
- Database CLI

### 56. Query Builder
- Introduction
- Retrieving results
- Chunking results
- Aggregates
- Select statements
- Raw expressions
- Joins
- Unions
- Where clauses
- Ordering, grouping, limit & offset
- Conditional clauses
- Insert statements
- Update statements
- Delete statements
- Debugging
- Pessimistic locking

### 57. Pagination
- Introduction
- Basic usage
- Displaying results
- Manual pagination
- Customizing pagination URLs
- Cursor pagination
- API pagination responses

### 58. Migrations
- Introduction
- Generating migrations
- Migration structure
- Running migrations
- Rolling back migrations
- Tables
- Columns
- Indexes
- Foreign keys
- Events

### 59. Seeding
- Introduction
- Writing seeders
- Using model factories
- Running seeders
- Seeding production databases

### 60. Redis
- Introduction
- Configuration
- Interacting with Redis
- Pub/sub
- Cache driver
- Queue driver
- Rate limiting

### 61. MongoDB
- Introduction
- Configuration
- Connecting to MongoDB
- Query builder
- Eloquent integration
- Relationships
- Indexing
- Aggregation

## Eloquent ORM

### 62. Eloquent Getting Started
- Introduction
- Defining models
- Model conventions
- Retrieving models
- Collections
- Chunking results
- Advanced subqueries
- Scopes
- Comparing models
- Events
- Global scopes

### 63. Eloquent Relationships
- Introduction
- Defining relationships
- One-to-one
- One-to-many
- Many-to-many
- Has-one-through
- Has-many-through
- One-to-one (polymorphic)
- One-to-many (polymorphic)
- Many-to-many (polymorphic)
- Querying relations
- Eager loading
- Inserting & updating related models
- Touching parent timestamps

### 64. Eloquent Collections
- Introduction
- Available methods
- Custom collections
- Higher order message

### 65. Eloquent Mutators / Casts
- Introduction
- Accessors & mutators
- Attribute casting
- Custom casts
- Array & JSON casting
- Date casting
- Enum casting
- Encryption casting
- Query time casting

### 66. Eloquent API Resources
- Introduction
- Generating resources
- Concept overview
- Resource collections
- Writing resources
- Conditional attributes
- Conditional relationships
- Adding meta data
- Resource responses

### 67. Eloquent Serialization
- Introduction
- Serializing models & collections
- Hiding attributes from JSON
- Appending values to JSON
- Date serialization
- Customizing the serialization process

### 68. Eloquent Factories
- Introduction
- Defining model factories
- Creating models using factories
- Factory states
- Factory callbacks
- Factory relationships
- Using factories within seeders

## Testing

### 69. Testing Getting Started
- Introduction
- Environment
- Creating tests
- Running tests
- Prophetic expectations
- Mocking

### 70. HTTP Tests
- Introduction
- Making requests
- Testing JSON APIs
- Testing file uploads
- Testing views
- Available assertions
- Authentication assertions

### 71. Console Tests
- Introduction
- Expecting input/output
- Console assertions

### 72. Browser Tests
- Introduction to Laravel Dusk
- Installation
- Basic usage
- Creating browsers
- Navigation
- Clicking & typing
- Using JavaScript
- Making assertions
- Taking screenshots
- Available assertions
- Pages
- Components
- Continuous integration

### 73. Database Testing
- Introduction
- Resetting the database after tests
- Creating factories
- Writing factories
- Factory relationships
- Using seeds
- Available assertions

### 74. Mocking
- Introduction
- Mocking objects
- Bus fake
- Event fake
- HTTP fake
- Mail fake
- Notification fake
- Queue fake
- Storage fake
- Facade fakes

## Official Packages

### 75. Cashier (Stripe)
- Introduction
- Installation
- Configuration
- Subscriptions
- Single charges
- Metered billing
- Subscription trials
- Handling Stripe webhooks
- Receipts
- Handling failed payments
- Strong customer authentication

### 76. Cashier (Paddle)
- Introduction
- Installation
- Configuration
- Subscriptions
- Single charges
- Receipts
- Handling Paddle webhooks
- Handling failed payments

### 77. Dusk
- Introduction
- Installation
- Basic usage
- Browser basics
- Interacting with elements
- Available assertions
- Page objects
- Continuous integration
- Environment handling

### 78. Envoy
- Introduction
- Installation
- Writing tasks
- Variables
- Stories
- Multiple servers
- Parallel execution
- Task macros

### 79. Fortify
- Introduction
- Installation
- Authentication
- Registration
- Password reset
- Email verification
- Profile information
- Password confirmation
- Two-factor authentication
- Customization

### 80. Folio
- Introduction
- Installation
- Page-based routing
- Route parameters
- Middleware
- Layouts
- Nesting
- Customization

### 81. Homestead
- Introduction
- Installation & setup
- Daily usage
- Ports
- PHP versions
- Site types
- Environment configuration
- Updating Homestead

### 82. Horizon
- Introduction
- Installation
- Configuration
- Running Horizon
- Tags
- Notifications
- Metrics
- Silenced jobs
- Upgrading Horizon

### 83. Mix
- Introduction
- Installation & setup
- Working with JavaScript
- Working with stylesheets
- Copying files & directories
- Versioning & cache busting
- Browsersync reloading
- Environment variables
- Notifications

### 84. Octane
- Introduction
- Installation
- Server prerequisites
- Serving applications
- Dependency injection
- Managing memory
- Ticks & intervals
- Concurrent tasks
- Cache
- Tables

### 85. Passport
- Introduction
- Installation
- Configuration
- Issuing access tokens
- Requesting tokens
- Refreshing tokens
- Revoking tokens
- Purging tokens
- Testing

### 86. Pennant
- Introduction
- Installation
- Defining features
- Checking features
- Scoping features
- Feature values
- Storing features
- Testing

### 87. Pint
- Introduction
- Installation
- Running Pint
- Configuring Pint
- Presets
- Rules
- CI integration

### 88. Precognition
- Introduction
- Installation
- Validating forms
- Validating API requests
- Client-side integration
- Testing

### 89. Prompts
- Introduction
- Installation
- Asking questions
- Collecting input
- Menus & selections
- Tables
- Progress bars
- Spin animations
- Customization

### 90. Pulse
- Introduction
- Installation
- Dashboard
- Recorders
- Livewire integration
- Performance monitoring
- Exception monitoring
- Slow queries
- Slow jobs
- Slow requests
- Cache monitoring
- Server monitoring
- Queue monitoring
- User monitoring

### 91. Reverb
- Introduction
- Installation
- Configuration
- Broadcasting events
- Authorizing channels
- Client-side usage
- Scaling
- Monitoring
- Security

### 92. Sail
- Introduction
- Installation
- Starting & stopping
- Configuring Sail
- Sharing sites
- Debugging
- Customizing the build process
- Testing

### 93. Sanctum
- Introduction
- Installation
- API token authentication
- SPA authentication
- Mobile application authentication
- Testing

### 94. Scout
- Introduction
- Installation
- Configuration
- Indexing
- Searching
- Custom engines
- Builder macros
- Testing

### 95. Socialite
- Introduction
- Installation
- Configuration
- Authentication
- Retrieving user details
- Stateless authentication
- Adding custom providers

### 96. Telescope
- Introduction
- Installation
- Configuration
- Dashboard
- Filtering
- Tagging
- Available watchers
- Displaying data

### 97. Valet
- Introduction
- Installation
- Serving sites
- Securing sites
- Sharing sites
- Custom drivers
- Other Valet commands

### 98. API Documentation
- Introduction
- Generating API documentation
- Writing API documentation
- Testing API documentation
- Publishing API documentation

### 99. Changelog
- Understanding Laravel's changelog
- Major version changes
- Minor version changes
- Patch version changes
- Breaking changes
- Deprecations
- New features
- Bug fixes
- Security fixes