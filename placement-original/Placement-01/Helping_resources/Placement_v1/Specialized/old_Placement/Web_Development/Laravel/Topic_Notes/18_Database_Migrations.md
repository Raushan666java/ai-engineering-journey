# Database Migrations in Laravel

Database migrations are like version control for your database, allowing your team to define and share the application's database schema. Migrations make it easy to create, modify, and share database tables across different environments.

## Introduction to Migrations

Migrations are PHP files that contain two methods: `up()` and `down()`. The `up()` method is used to add new tables, columns, or indexes to your database, while the `down()` method should reverse the operations performed by the `up()` method.

## Generating Migrations

You can create a migration using the `make:migration` Artisan command:

```bash
# Create a migration to create a new table
php artisan make:migration create_users_table

# Create a migration to modify an existing table
php artisan make:migration add_votes_to_users_table

# Create a migration with a specific path
php artisan make:migration create_users_table --path=database/migrations/tenant
```

The generated migration file will be placed in the `database/migrations` directory with a timestamp prefix:

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
```

## Migration Structure

A migration class contains two methods:

1. **up()**: Performs the migration (create tables, add columns, etc.)
2. **down()**: Reverses the migration (drop tables, remove columns, etc.)

## Running Migrations

To run all outstanding migrations:

```bash
php artisan migrate
```

To run migrations with options:

```bash
# Force migrations in production
php artisan migrate --force

# Run migrations without prompting for confirmation
php artisan migrate --no-interaction

# Output SQL statements without running migrations
php artisan migrate --pretend

# Run migrations for a specific path
php artisan migrate --path=database/migrations/tenant

# Run migrations for a specific database connection
php artisan migrate --database=tenant
```

## Rolling Back Migrations

To roll back the latest migration operation:

```bash
php artisan migrate:rollback
```

To roll back a specific number of migrations:

```bash
php artisan migrate:rollback --step=5
```

To roll back all migrations:

```bash
php artisan migrate:reset
```

To roll back all migrations and run them again:

```bash
php artisan migrate:refresh

# Refresh and run seeders
php artisan migrate:refresh --seed
```

To drop all tables and run all migrations:

```bash
php artisan migrate:fresh

# Fresh and run seeders
php artisan migrate:fresh --seed
```

## Tables

### Creating Tables

```php
Schema::create('users', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email')->unique();
    $table->timestamps();
});
```

### Checking If Tables Exist

```php
if (Schema::hasTable('users')) {
    // The "users" table exists...
}

if (Schema::hasColumn('users', 'email')) {
    // The "users" table exists and has an "email" column...
}
```

### Renaming / Dropping Tables

```php
// Rename a table
Schema::rename('old_table_name', 'new_table_name');

// Drop a table
Schema::drop('users');

// Drop a table if it exists
Schema::dropIfExists('users');
```

### Table Options

```php
// Create a table with specific options
Schema::create('users', function (Blueprint $table) {
    $table->engine = 'InnoDB';
    $table->charset = 'utf8mb4';
    $table->collation = 'utf8mb4_unicode_ci';
    $table->temporary();
    
    // Columns...
});
```

## Columns

### Column Types

```php
Schema::create('users', function (Blueprint $table) {
    // Auto-incrementing ID
    $table->id();                           // BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY
    $table->bigIncrements('id');            // BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY
    $table->increments('id');               // INT UNSIGNED AUTO_INCREMENT PRIMARY KEY
    
    // Integer types
    $table->integer('votes');               // INTEGER
    $table->tinyInteger('votes');           // TINYINT
    $table->smallInteger('votes');          // SMALLINT
    $table->mediumInteger('votes');         // MEDIUMINT
    $table->bigInteger('votes');            // BIGINT
    $table->unsignedInteger('votes');       // UNSIGNED INTEGER
    $table->unsignedTinyInteger('votes');   // UNSIGNED TINYINT
    $table->unsignedSmallInteger('votes');  // UNSIGNED SMALLINT
    $table->unsignedMediumInteger('votes'); // UNSIGNED MEDIUMINT
    $table->unsignedBigInteger('votes');    // UNSIGNED BIGINT
    
    // Decimal types
    $table->decimal('amount', 8, 2);        // DECIMAL with precision and scale
    $table->unsignedDecimal('amount', 8, 2); // UNSIGNED DECIMAL
    $table->float('amount', 8, 2);          // FLOAT with precision and scale
    $table->double('amount', 8, 2);         // DOUBLE with precision and scale
    
    // String types
    $table->char('code', 4);                // CHAR with length
    $table->string('name', 100);            // VARCHAR with length (default 255)
    $table->text('description');            // TEXT
    $table->mediumText('description');      // MEDIUMTEXT
    $table->longText('description');        // LONGTEXT
    
    // Date and time types
    $table->date('created_at');             // DATE
    $table->dateTime('created_at');         // DATETIME
    $table->dateTimeTz('created_at');       // DATETIME with timezone
    $table->time('sunrise');                // TIME
    $table->timeTz('sunrise');              // TIME with timezone
    $table->timestamp('added_at');          // TIMESTAMP
    $table->timestampTz('added_at');        // TIMESTAMP with timezone
    $table->timestamps();                   // created_at and updated_at TIMESTAMP columns
    $table->timestampsTz();                 // created_at and updated_at TIMESTAMP columns with timezone
    $table->softDeletes();                  // deleted_at TIMESTAMP column for soft deletes
    $table->softDeletesTz();                // deleted_at TIMESTAMP column with timezone
    $table->year('birth_year');             // YEAR
    
    // Boolean and binary types
    $table->boolean('confirmed');           // BOOLEAN (TINYINT(1))
    $table->binary('data');                 // BLOB
    
    // Enumeration and JSON types
    $table->enum('difficulty', ['easy', 'medium', 'hard']); // ENUM
    $table->json('options');                // JSON
    $table->jsonb('options');               // JSONB (PostgreSQL)
    
    // Geometry types (MySQL/PostgreSQL)
    $table->geometry('positions');          // GEOMETRY
    $table->point('position');              // POINT
    $table->lineString('line');             // LINESTRING
    $table->polygon('area');                // POLYGON
    $table->multiPoint('positions');        // MULTIPOINT
    $table->multiLineString('lines');       // MULTILINESTRING
    $table->multiPolygon('areas');          // MULTIPOLYGON
    $table->geometryCollection('collection'); // GEOMETRYCOLLECTION
    
    // Other types
    $table->uuid('id');                     // UUID
    $table->ulid('id');                     // ULID
    $table->ipAddress('visitor');           // IP address (VARCHAR)
    $table->macAddress('device');           // MAC address (VARCHAR)
    
    // Generated columns (MySQL)
    $table->computed('full_name', 'CONCAT(first_name, " ", last_name)');
    
    // Convenience columns
    $table->rememberToken();                // VARCHAR(100) NULL for "remember me" token
    $table->foreignId('user_id');           // UNSIGNED BIGINT for foreign keys
});
```

### Column Modifiers

```php
Schema::create('users', function (Blueprint $table) {
    $table->string('email')
          ->after('name')           // Place column after another column
          ->autoIncrement()         // Set INTEGER columns as auto-increment
          ->charset('utf8mb4')      // Specify a character set (MySQL)
          ->collation('utf8mb4_unicode_ci') // Specify a collation (MySQL)
          ->comment('User email address') // Add a comment to the column
          ->default('user@example.com') // Set a default value
          ->first()                 // Place column at the beginning of the table
          ->from(10)                // Set the starting value of an auto-incrementing field
          ->invisible()             // Make the column invisible (MySQL)
          ->nullable($value = true) // Allow NULL values
          ->storedAs($expression)   // Create a stored generated column (MySQL)
          ->unsigned()              // Set INTEGER columns as UNSIGNED
          ->useCurrent()            // Set TIMESTAMP columns to use CURRENT_TIMESTAMP
          ->useCurrentOnUpdate()    // Set TIMESTAMP columns to use CURRENT_TIMESTAMP on update
          ->virtualAs($expression); // Create a virtual generated column (MySQL)
});
```

### Modifying Columns

To modify columns, you need to install the `doctrine/dbal` package:

```bash
composer require doctrine/dbal
```

Then you can modify columns in your migrations:

```php
Schema::table('users', function (Blueprint $table) {
    // Change column type
    $table->string('name', 50)->change();
    
    // Change column nullability
    $table->string('email')->nullable()->change();
    
    // Rename a column
    $table->renameColumn('from', 'to');
    
    // Drop a column
    $table->dropColumn('votes');
    
    // Drop multiple columns
    $table->dropColumn(['votes', 'avatar', 'location']);
});
```

## Indexes

### Adding Indexes

```php
Schema::table('users', function (Blueprint $table) {
    // Basic indexes
    $table->primary('id');                      // Add a primary key
    $table->primary(['id', 'parent_id']);       // Add a composite primary key
    $table->unique('email');                    // Add a unique index
    $table->unique(['state', 'city']);          // Add a composite unique index
    $table->index('state');                     // Add a basic index
    $table->index(['account_id', 'created_at']); // Add a composite index
    $table->spatialIndex('location');           // Add a spatial index (MySQL/PostgreSQL)
    
    // Fluent definitions
    $table->string('email')->unique();
    $table->integer('votes')->index();
    
    // Index names
    $table->unique('email', 'unique_email');
});
```

### Renaming Indexes

```php
Schema::table('users', function (Blueprint $table) {
    $table->renameIndex('from', 'to');
});
```

### Dropping Indexes

```php
Schema::table('users', function (Blueprint $table) {
    $table->dropPrimary('users_id_primary');
    $table->dropUnique('users_email_unique');
    $table->dropIndex('users_state_index');
    $table->dropSpatialIndex('users_location_spatialindex');
    
    // Drop indexes using array syntax
    $table->dropIndex(['account_id', 'created_at']);
});
```

## Foreign Keys

### Adding Foreign Keys

```php
Schema::table('posts', function (Blueprint $table) {
    // Basic foreign key
    $table->unsignedBigInteger('user_id');
    $table->foreign('user_id')->references('id')->on('users');
    
    // Shorthand method
    $table->foreignId('user_id')->constrained();
    
    // With table specified
    $table->foreignId('user_id')->constrained('users');
    
    // With column specified
    $table->foreignId('admin_id')->constrained('users', 'id');
    
    // With onDelete and onUpdate actions
    $table->foreignId('user_id')
          ->constrained()
          ->onDelete('cascade')
          ->onUpdate('cascade');
});
```

### Dropping Foreign Keys

```php
Schema::table('posts', function (Blueprint $table) {
    $table->dropForeign('posts_user_id_foreign');
    
    // Drop foreign key using array syntax
    $table->dropForeign(['user_id']);
});
```

### Foreign Key Constraints

```php
Schema::table('posts', function (Blueprint $table) {
    $table->foreignId('user_id')
          ->constrained()
          ->onDelete('cascade')     // CASCADE, SET NULL, NO ACTION, RESTRICT
          ->onUpdate('restrict');   // CASCADE, SET NULL, NO ACTION, RESTRICT
});
```

## Events

Laravel fires the following events during migrations:

- `Illuminate\Database\Events\MigrationsStarted`
- `Illuminate\Database\Events\MigrationsEnded`
- `Illuminate\Database\Events\MigrationStarted`
- `Illuminate\Database\Events\MigrationEnded`

You can listen for these events in your `EventServiceProvider`:

```php
/**
 * The event listener mappings for the application.
 *
 * @var array
 */
protected $listen = [
    'Illuminate\Database\Events\MigrationsStarted' => [
        'App\Listeners\MigrationsStartedListener',
    ],
];
```

## Best Practices

1. **Keep migrations small and focused**: Each migration should do one thing
2. **Make migrations reversible**: Ensure `down()` methods properly reverse `up()` methods
3. **Use foreign key constraints**: Maintain referential integrity
4. **Add indexes for frequently queried columns**: Improve query performance
5. **Use descriptive migration names**: Make it clear what each migration does
6. **Test migrations**: Ensure they work correctly before deploying
7. **Use timestamps**: Add `created_at` and `updated_at` columns to track changes
8. **Document complex migrations**: Add comments for complex logic
9. **Use soft deletes**: Consider using soft deletes instead of permanent deletion
10. **Be careful with production data**: Test migrations on a copy of production data

## Common Migration Patterns

### Creating a Pivot Table

```php
Schema::create('role_user', function (Blueprint $table) {
    $table->id();
    $table->foreignId('role_id')->constrained()->onDelete('cascade');
    $table->foreignId('user_id')->constrained()->onDelete('cascade');
    $table->timestamps();
    
    $table->unique(['role_id', 'user_id']);
});
```

### Adding Soft Deletes

```php
Schema::table('users', function (Blueprint $table) {
    $table->softDeletes();
});
```

### Adding Timestamps

```php
Schema::table('users', function (Blueprint $table) {
    $table->timestamps();
});
```

### Creating a Settings Table

```php
Schema::create('settings', function (Blueprint $table) {
    $table->id();
    $table->string('key')->unique();
    $table->text('value')->nullable();
    $table->timestamps();
});
```

### Creating a Polymorphic Relationship

```php
Schema::create('images', function (Blueprint $table) {
    $table->id();
    $table->string('url');
    $table->morphs('imageable'); // Creates imageable_id and imageable_type
    $table->timestamps();
});
```

## References

- [Laravel Migrations Documentation](https://laravel.com/docs/12.x/migrations)
- [Laravel Schema Builder Documentation](https://laravel.com/docs/12.x/migrations#creating-tables)
- [Laravel Foreign Key Constraints Documentation](https://laravel.com/docs/12.x/migrations#foreign-key-constraints)