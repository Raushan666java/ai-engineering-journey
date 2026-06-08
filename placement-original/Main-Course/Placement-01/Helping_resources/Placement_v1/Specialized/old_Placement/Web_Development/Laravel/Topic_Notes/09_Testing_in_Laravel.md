# Testing in Laravel

Laravel provides a robust testing framework built on top of PHPUnit, making it easy to test your applications with expressive, readable tests.

## Testing Basics

### Test Directory Structure

Laravel's default test directory structure:

```
tests/
├── Feature/       # Feature tests
├── Unit/          # Unit tests
├── CreatesApplication.php
├── TestCase.php
```

- **Unit Tests**: Test individual components in isolation
- **Feature Tests**: Test larger portions of your code, including how components interact

### Creating Tests

```bash
# Create a unit test
php artisan make:test UserTest --unit

# Create a feature test
php artisan make:test UserControllerTest
```

### Basic Test Structure

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     */
    public function test_the_application_returns_a_successful_response(): void
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }
}
```

### Running Tests

```bash
# Run all tests
php artisan test

# Run a specific test file
php artisan test --filter=UserTest

# Run a specific test method
php artisan test --filter=UserTest::test_user_can_be_created

# Run tests with coverage report (requires Xdebug)
php artisan test --coverage

# Run tests with coverage and minimum threshold
php artisan test --coverage --min=80
```

## HTTP Tests

### Making Requests

```php
// GET request
$response = $this->get('/users');

// POST request
$response = $this->post('/users', [
    'name' => 'John Doe',
    'email' => 'john@example.com',
]);

// PUT request
$response = $this->put('/users/1', [
    'name' => 'Updated Name',
]);

// PATCH request
$response = $this->patch('/users/1', [
    'name' => 'Updated Name',
]);

// DELETE request
$response = $this->delete('/users/1');

// With headers
$response = $this->withHeaders([
    'X-API-KEY' => 'secret',
])->get('/api/users');

// JSON request
$response = $this->postJson('/api/users', [
    'name' => 'John Doe',
    'email' => 'john@example.com',
]);

// File upload
$response = $this->post('/avatar', [
    'avatar' => UploadedFile::fake()->image('avatar.jpg'),
]);
```

### Response Assertions

```php
// Status assertions
$response->assertStatus(200);
$response->assertOk();              // 200
$response->assertCreated();         // 201
$response->assertNoContent();       // 204
$response->assertBadRequest();      // 400
$response->assertUnauthorized();    // 401
$response->assertForbidden();       // 403
$response->assertNotFound();        // 404

// Redirect assertions
$response->assertRedirect('/dashboard');
$response->assertRedirectToRoute('dashboard');

// Content assertions
$response->assertSee('Welcome');
$response->assertDontSee('Error');
$response->assertSeeText('Welcome');
$response->assertDontSeeText('Error');
$response->assertSeeInOrder(['First', 'Second']);

// JSON assertions
$response->assertJson(['name' => 'John']);
$response->assertJsonPath('user.name', 'John');
$response->assertJsonCount(3, 'users');
$response->assertJsonStructure(['user' => ['name', 'email']]);
$response->assertJsonFragment(['name' => 'John']);
$response->assertJsonMissing(['name' => 'Jane']);

// View assertions
$response->assertViewIs('users.index');
$response->assertViewHas('users');
$response->assertViewHasAll(['users', 'count']);
$response->assertViewMissing('admins');

// Header assertions
$response->assertHeader('Content-Type', 'application/json');
$response->assertHeaderMissing('X-CSRF-TOKEN');

// Cookie assertions
$response->assertCookie('name', 'value');
$response->assertCookieMissing('name');
```

### Testing Authentication

```php
// Acting as a user
$user = User::factory()->create();
$response = $this->actingAs($user)->get('/dashboard');

// Acting as a user with specific guard
$response = $this->actingAs($user, 'api')->getJson('/api/user');

// Assert authenticated
$this->assertAuthenticated();
$this->assertAuthenticated('api');

// Assert guest
$this->assertGuest();
$this->assertGuest('api');
```

### Testing Validation

```php
// Test validation errors
$response = $this->post('/users', []);
$response->assertSessionHasErrors(['name', 'email']);

// Test specific validation error
$response = $this->post('/users', ['name' => 'John']);
$response->assertSessionHasErrors('email');

// Test validation error message
$response->assertSessionHasErrors([
    'email' => 'The email field is required.',
]);

// Test no validation errors
$response = $this->post('/users', [
    'name' => 'John Doe',
    'email' => 'john@example.com',
]);
$response->assertSessionHasNoErrors();
```

## Database Testing

### Setup

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\User;

class UserTest extends TestCase
{
    // Reset the database after each test
    use RefreshDatabase;
    
    // ...
}
```

### Database Assertions

```php
// Assert record exists
$this->assertDatabaseHas('users', [
    'email' => 'john@example.com',
]);

// Assert record doesn't exist
$this->assertDatabaseMissing('users', [
    'email' => 'nonexistent@example.com',
]);

// Assert record count
$this->assertDatabaseCount('users', 3);

// Assert soft deleted
$this->assertSoftDeleted('users', [
    'email' => 'john@example.com',
]);

// Assert not soft deleted
$this->assertNotSoftDeleted('users', [
    'email' => 'john@example.com',
]);
```

### Model Factories

```php
<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = User::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'name' => $this->faker->name(),
            'email' => $this->faker->unique()->safeEmail(),
            'email_verified_at' => now(),
            'password' => bcrypt('password'),
            'remember_token' => Str::random(10),
        ];
    }
    
    /**
     * Indicate that the user is an admin.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function admin()
    {
        return $this->state(function (array $attributes) {
            return [
                'is_admin' => true,
            ];
        });
    }
}
```

### Using Factories in Tests

```php
// Create a single model
$user = User::factory()->create();

// Create a model with specific attributes
$user = User::factory()->create([
    'name' => 'John Doe',
]);

// Create a model with a state
$admin = User::factory()->admin()->create();

// Create multiple models
$users = User::factory()->count(3)->create();

// Create model but don't persist to database
$user = User::factory()->make();

// Create model with relationships
$user = User::factory()
    ->has(Post::factory()->count(3))
    ->create();

// Create model for relationship
$post = Post::factory()
    ->for(User::factory()->state([
        'name' => 'John Doe',
    ]))
    ->create();
```

### Seeding the Database

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Database\Seeders\UserSeeder;

class UserTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_users_can_be_listed()
    {
        // Seed the database
        $this->seed();
        
        // Or seed specific seeders
        $this->seed(UserSeeder::class);
        
        // Test logic...
    }
}
```

## Mocking

### Mocking Objects

```php
<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\PaymentGateway;
use App\Services\OrderService;
use Mockery;

class OrderServiceTest extends TestCase
{
    public function test_order_can_be_processed()
    {
        // Create a mock
        $paymentGateway = Mockery::mock(PaymentGateway::class);
        
        // Set expectations
        $paymentGateway->shouldReceive('charge')
                      ->once()
                      ->with(100, 'usd')
                      ->andReturn(true);
        
        // Inject the mock
        $orderService = new OrderService($paymentGateway);
        
        // Execute the method that uses the mock
        $result = $orderService->process(100, 'usd');
        
        // Assert the result
        $this->assertTrue($result);
    }
    
    protected function tearDown(): void
    {
        Mockery::close();
        parent::tearDown();
    }
}
```

### Mocking Facades

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use Illuminate\Support\Facades\Http;

class ApiTest extends TestCase
{
    public function test_external_api_is_called()
    {
        // Mock HTTP facade
        Http::fake([
            'api.example.com/*' => Http::response(['data' => ['id' => 1]], 200),
            '*' => Http::response('Not Found', 404),
        ]);
        
        // Make request that uses Http facade
        $response = $this->get('/api/fetch-data');
        
        // Assert response
        $response->assertOk();
        $response->assertJson(['id' => 1]);
        
        // Assert HTTP facade was called
        Http::assertSent(function ($request) {
            return $request->url() == 'https://api.example.com/data' &&
                   $request->method() == 'GET';
        });
    }
}
```

### Available Facade Fakes

```php
// Cache fake
Cache::fake();
Cache::shouldReceive('get')->with('key')->andReturn('value');
Cache::assertCalled('get', ['key']);

// Event fake
Event::fake();
Event::assertDispatched(OrderShipped::class);
Event::assertNotDispatched(OrderShipped::class);
Event::assertNothingDispatched();

// Mail fake
Mail::fake();
Mail::assertSent(OrderShipped::class);
Mail::assertSent(OrderShipped::class, function ($mail) use ($order) {
    return $mail->order->id === $order->id;
});
Mail::assertNotSent(OrderShipped::class);

// Notification fake
Notification::fake();
Notification::assertSentTo($user, OrderShipped::class);
Notification::assertNotSentTo($user, OrderShipped::class);

// Queue fake
Queue::fake();
Queue::assertPushed(ProcessPodcast::class);
Queue::assertPushedOn('podcasts', ProcessPodcast::class);
Queue::assertNotPushed(ProcessPodcast::class);

// Storage fake
Storage::fake('avatars');
$response = $this->post('/avatar', [
    'avatar' => UploadedFile::fake()->image('avatar.jpg'),
]);
Storage::disk('avatars')->assertExists('avatar.jpg');
Storage::disk('avatars')->assertMissing('missing.jpg');

// Bus fake
Bus::fake();
Bus::assertDispatched(ProcessPodcast::class);
Bus::assertNotDispatched(ProcessPodcast::class);

// Validation fake
Validator::shouldReceive('make')
    ->once()
    ->with(['name' => 'John'], ['name' => 'required'])
    ->andReturn(Validator::shouldReceive('fails')
        ->once()
        ->andReturn(false)
    );
```

## Testing Artisan Commands

```php
<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class CommandTest extends TestCase
{
    public function test_console_command()
    {
        // Call command
        $this->artisan('email:send')
             ->expectsQuestion('What is your name?', 'John Doe')
             ->expectsQuestion('Which user should receive the email?', 'taylor@laravel.com')
             ->expectsOutput('Email sent!')
             ->assertExitCode(0);
    }
    
    public function test_command_with_options()
    {
        $this->artisan('email:send', [
            'user' => 'taylor@laravel.com',
            '--queue' => 'default',
        ])->assertExitCode(0);
    }
}
```

## Testing Views

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;

class ViewTest extends TestCase
{
    public function test_welcome_view_can_be_rendered()
    {
        $view = $this->view('welcome', ['name' => 'John']);
        
        $view->assertSee('John');
        $view->assertSeeInOrder(['Welcome', 'John']);
        $view->assertDontSee('Error');
    }
    
    public function test_user_view_receives_correct_data()
    {
        $user = User::factory()->create();
        
        $view = $this->view('users.show', ['user' => $user]);
        
        $view->assertSee($user->name);
        $view->assertViewHas('user', $user);
    }
}
```

## Testing API Resources

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Http\Resources\UserResource;

class UserResourceTest extends TestCase
{
    public function test_user_resource_returns_correct_data()
    {
        $user = User::factory()->create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);
        
        $resource = new UserResource($user);
        $data = $resource->toArray(request());
        
        $this->assertEquals('John Doe', $data['name']);
        $this->assertEquals('john@example.com', $data['email']);
        $this->assertArrayNotHasKey('password', $data);
    }
}
```

## Testing Jobs and Events

### Testing Jobs

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Jobs\ProcessPodcast;
use App\Models\Podcast;
use Illuminate\Support\Facades\Queue;

class JobTest extends TestCase
{
    public function test_podcast_is_processed()
    {
        Queue::fake();
        
        $podcast = Podcast::factory()->create();
        
        // Dispatch the job
        ProcessPodcast::dispatch($podcast);
        
        // Assert job was pushed to the queue
        Queue::assertPushed(ProcessPodcast::class, function ($job) use ($podcast) {
            return $job->podcast->id === $podcast->id;
        });
        
        // Assert job was pushed to a specific queue
        Queue::assertPushedOn('processing', ProcessPodcast::class);
        
        // Assert job was not pushed
        Queue::assertNotPushed(SendEmail::class);
    }
}
```

### Testing Events

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Events\OrderShipped;
use App\Models\Order;
use Illuminate\Support\Facades\Event;

class EventTest extends TestCase
{
    public function test_order_shipped_event_is_dispatched()
    {
        Event::fake();
        
        $order = Order::factory()->create();
        
        // Perform the action that triggers the event
        $order->ship();
        
        // Assert event was dispatched
        Event::assertDispatched(OrderShipped::class, function ($event) use ($order) {
            return $event->order->id === $order->id;
        });
        
        // Assert event was dispatched twice
        Event::assertDispatched(OrderShipped::class, 2);
        
        // Assert event has listeners
        Event::assertListening(
            OrderShipped::class,
            SendShipmentNotification::class
        );
    }
}
```

## Testing Middleware

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Http\Middleware\EnsureUserIsAdmin;
use Illuminate\Http\Request;
use App\Models\User;

class MiddlewareTest extends TestCase
{
    public function test_non_admin_users_are_redirected()
    {
        $user = User::factory()->create([
            'is_admin' => false,
        ]);
        
        $request = Request::create('/admin/dashboard', 'GET');
        $request->setUserResolver(function () use ($user) {
            return $user;
        });
        
        $middleware = new EnsureUserIsAdmin;
        
        $response = $middleware->handle($request, function () {
            return 'OK';
        });
        
        $this->assertEquals(302, $response->getStatusCode());
        $this->assertEquals(url('/'), $response->getTargetUrl());
    }
    
    public function test_admin_users_can_access_admin_pages()
    {
        $user = User::factory()->create([
            'is_admin' => true,
        ]);
        
        $response = $this->actingAs($user)->get('/admin/dashboard');
        
        $response->assertStatus(200);
    }
}
```

## Testing File Uploads

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

class FileUploadTest extends TestCase
{
    public function test_avatars_can_be_uploaded()
    {
        Storage::fake('avatars');
        
        $file = UploadedFile::fake()->image('avatar.jpg');
        
        $response = $this->post('/avatar', [
            'avatar' => $file,
        ]);
        
        $response->assertStatus(200);
        
        // Assert the file was stored
        Storage::disk('avatars')->assertExists($file->hashName());
        
        // Assert a file does not exist
        Storage::disk('avatars')->assertMissing('missing.jpg');
    }
    
    public function test_large_files_are_not_accepted()
    {
        Storage::fake('documents');
        
        $file = UploadedFile::fake()->create('document.pdf', 2048); // 2MB
        
        $response = $this->post('/documents', [
            'document' => $file,
        ]);
        
        $response->assertSessionHasErrors('document');
        Storage::disk('documents')->assertMissing($file->hashName());
    }
}
```

## Testing Authentication and Authorization

```php
<?php

namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

class AuthTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_users_can_authenticate_using_the_login_screen()
    {
        $user = User::factory()->create();
        
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);
        
        $this->assertAuthenticated();
        $response->assertRedirect('/dashboard');
    }
    
    public function test_users_can_not_authenticate_with_invalid_password()
    {
        $user = User::factory()->create();
        
        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);
        
        $this->assertGuest();
    }
    
    public function test_users_can_access_protected_routes_when_authenticated()
    {
        $user = User::factory()->create();
        
        $response = $this->actingAs($user)->get('/dashboard');
        
        $response->assertStatus(200);
    }
    
    public function test_users_cannot_access_protected_routes_when_unauthenticated()
    {
        $response = $this->get('/dashboard');
        
        $response->assertRedirect('/login');
    }
}
```

## Testing with Laravel Dusk

Laravel Dusk provides an expressive, easy-to-use browser automation and testing API.

### Installation

```bash
composer require --dev laravel/dusk
php artisan dusk:install
```

### Writing Browser Tests

```php
<?php

namespace Tests\Browser;

use Tests\DuskTestCase;
use Laravel\Dusk\Browser;
use App\Models\User;

class LoginTest extends DuskTestCase
{
    public function test_users_can_login()
    {
        $user = User::factory()->create([
            'email' => 'test@example.com',
        ]);
        
        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
                    ->type('email', $user->email)
                    ->type('password', 'password')
                    ->press('Login')
                    ->assertPathIs('/dashboard')
                    ->assertSee('Welcome');
        });
    }
    
    public function test_users_can_register()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/register')
                    ->type('name', 'Test User')
                    ->type('email', 'test@example.com')
                    ->type('password', 'password')
                    ->type('password_confirmation', 'password')
                    ->press('Register')
                    ->assertPathIs('/dashboard');
        });
    }
}
```

### Running Dusk Tests

```bash
# Run all Dusk tests
php artisan dusk

# Run specific test
php artisan dusk tests/Browser/LoginTest.php

# Run specific test method
php artisan dusk --filter test_users_can_login
```

## Parallel Testing

Laravel supports running tests in parallel to speed up your test suite:

```bash
php artisan test --parallel
```

To configure parallel testing, update your `phpunit.xml` file:

```xml
<phpunit>
    <!-- ... -->
    <testsuites>
        <!-- ... -->
    </testsuites>
    <coverage>
        <!-- ... -->
    </coverage>
    <php>
        <!-- ... -->
        <server name="CACHE_DRIVER" value="array"/>
        <server name="DB_CONNECTION" value="sqlite"/>
        <server name="DB_DATABASE" value=":memory:"/>
        <server name="MAIL_MAILER" value="array"/>
        <server name="QUEUE_CONNECTION" value="sync"/>
        <server name="SESSION_DRIVER" value="array"/>
    </php>
</phpunit>
```

## Test Coverage

Laravel provides a simple way to generate test coverage reports:

```bash
php artisan test --coverage
```

To enforce a minimum coverage threshold:

```bash
php artisan test --coverage --min=80
```

## Best Practices

1. **Use descriptive test names**: Clearly describe what is being tested
2. **Follow the AAA pattern**: Arrange, Act, Assert
3. **Use factories**: Create test data efficiently
4. **Use database transactions**: Speed up tests by wrapping them in transactions
5. **Mock external services**: Don't rely on external services in tests
6. **Test edge cases**: Test boundary conditions and error scenarios
7. **Keep tests independent**: Tests should not depend on each other
8. **Use feature tests for integration**: Test how components work together
9. **Use unit tests for complex logic**: Test individual components in isolation
10. **Run tests frequently**: Ideally on every code change

## References

- [Laravel Testing Documentation](https://laravel.com/docs/12.x/testing)
- [Laravel Dusk Documentation](https://laravel.com/docs/12.x/dusk)
- [PHPUnit Documentation](https://phpunit.de/documentation.html)
- [Mockery Documentation](http://docs.mockery.io/en/latest/)