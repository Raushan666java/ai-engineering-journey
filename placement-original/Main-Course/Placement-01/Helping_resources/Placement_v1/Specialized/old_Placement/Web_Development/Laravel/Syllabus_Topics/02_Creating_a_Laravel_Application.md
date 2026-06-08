# 2. Creating a Laravel Application

## Prerequisites
- PHP 8.2+ with required extensions
  - BCMath, Ctype, Fileinfo, JSON, Mbstring, OpenSSL, PDO, Tokenizer, XML
- Composer (Dependency Manager for PHP)
- Database system (MySQL, PostgreSQL, SQLite, SQL Server)
- Web server (Apache, Nginx) or Laravel's built-in server

## Installation Methods

### Via Composer Create-Project
```bash
composer create-project laravel/laravel example-app
cd example-app
php artisan serve
```

### Via Laravel Installer
```bash
composer global require laravel/installer
laravel new example-app
cd example-app
php artisan serve
```

### Using Laravel Herd
- Simplified local development environment for macOS/Windows
- Includes PHP, MySQL, Redis, and other services
- Automatic virtual host configuration
- Zero-configuration setup

## Development Environments

### Laravel Sail (Docker)
- Pre-configured Docker environment
- Includes PHP, MySQL, Redis, Mailhog, etc.
- Simple CLI commands for container management
- Ideal for consistent development environments

### Laravel Homestead (Vagrant)
- Pre-packaged Vagrant box
- Includes PHP, Nginx, MySQL, PostgreSQL, Redis, etc.
- Cross-platform compatibility
- Suitable for team development

### Laravel Valet (macOS)
- Lightweight development environment for macOS
- Uses native services (Nginx, DnsMasq)
- Minimal resource usage
- Automatic site discovery

## Project Structure

### Root Directory
- `.env` - Environment configuration
- `artisan` - Command-line interface
- `composer.json` - Dependency management
- `package.json` - Frontend dependencies

### App Directory
- `app/Http/Controllers` - Request handlers
- `app/Models` - Eloquent models
- `app/Providers` - Service providers

### Configuration
- `config/` - Application configuration files

### Resources
- `resources/views` - Blade templates
- `resources/js` - JavaScript files
- `resources/css` - CSS files

### Routes
- `routes/web.php` - Web routes
- `routes/api.php` - API routes

### Database
- `database/migrations` - Database structure
- `database/seeders` - Sample data

### Public
- `public/` - Publicly accessible files
- `public/index.php` - Application entry point

## Running the Application
- Development server: `php artisan serve`
- Sail: `./vendor/bin/sail up`
- Valet: `http://app-name.test`
- Homestead: Configure in Homestead.yaml

## Best Learning Methods
- Follow the official installation guide: https://laravel.com/docs/12.x/installation
- Practice creating and running new Laravel projects
- Experiment with different development environments
- Study the project structure and understand each directory's purpose
- Use `php artisan about` to view application information
