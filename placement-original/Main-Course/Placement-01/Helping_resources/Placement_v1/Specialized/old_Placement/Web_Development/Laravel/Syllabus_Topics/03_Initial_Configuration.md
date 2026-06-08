# 3. Initial Configuration

## Environment Configuration

### .env File
- Environment-specific configuration
- Not committed to version control
- Key-value pairs format
- Accessed via `env()` helper function
- Example settings:
  ```
  APP_NAME=Laravel
  APP_ENV=local
  APP_KEY=base64:your-key
  APP_DEBUG=true
  APP_URL=http://localhost
  ```

### Environment Types
- `local` - Development environment
- `testing` - Testing environment
- `staging` - Pre-production environment
- `production` - Live environment

### Environment Detection
```php
App::environment('local');
App::environment(['local', 'staging']);
```

## Configuration Files

### Config Directory Structure
- `app.php` - Application configuration
- `auth.php` - Authentication settings
- `broadcasting.php` - Event broadcasting
- `cache.php` - Cache configuration
- `database.php` - Database connections
- `filesystems.php` - File storage
- `mail.php` - Email configuration
- `queue.php` - Queue settings
- `services.php` - Third-party services
- `session.php` - Session handling
- `view.php` - View rendering

### Accessing Configuration
```php
$value = config('app.name');
config(['app.timezone' => 'America/Chicago']);
```

## Essential Configuration

### Application Key
- Used for encryption
- Generate with: `php artisan key:generate`
- Stored in `.env` as `APP_KEY`

### Debug Mode
- Controls error detail display
- Set with `APP_DEBUG` in `.env`
- Should be `false` in production

### Timezone and Locale
```php
// config/app.php
'timezone' => 'UTC',
'locale' => 'en',
'fallback_locale' => 'en',
'faker_locale' => 'en_US',
```

### URL Configuration
```php
// .env
APP_URL=http://example.com

// config/app.php
'url' => env('APP_URL', 'http://localhost'),
'asset_url' => env('ASSET_URL'),
```

## Database Configuration

### Database Connections
- Configured in `config/database.php`
- Connection details in `.env`
```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

### Running Migrations
- Create database tables: `php artisan migrate`
- Rollback migrations: `php artisan migrate:rollback`
- Refresh migrations: `php artisan migrate:refresh`
- Status check: `php artisan migrate:status`

## Maintenance Mode

### Enabling/Disabling
```bash
php artisan down --message="Upgrading Database" --retry=60
php artisan up
```

### Maintenance Mode Options
- `--message` - Custom message
- `--retry` - Retry after seconds
- `--secret` - Maintenance mode bypass token
- `--status` - HTTP status code
- `--redirect` - URL to redirect to

## Configuration Caching

### Cache Commands
```bash
php artisan config:cache  # Create cached config file
php artisan config:clear  # Remove cached config file
```

### When to Use
- Production environments
- Improves performance
- Not recommended during development

## Best Learning Methods
- Edit the `.env` file and try different settings
- Run and rollback migrations to understand database setup
- Explore the `config` directory and understand each file's purpose
- Practice configuration caching in development
- Create environment-specific configurations
- Reference: https://laravel.com/docs/12.x/configuration
