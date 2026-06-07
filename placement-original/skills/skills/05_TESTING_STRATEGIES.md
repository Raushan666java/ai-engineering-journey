# Testing Strategies & Best Practices 🧪

## Complete Testing Guide for Laravel & React Applications

---

## Table of Contents

1. [Testing Fundamentals](#testing-fundamentals)
2. [Laravel Testing](#laravel-testing)
3. [React Testing](#react-testing)
4. [JavaScript Testing](#javascript-testing)
5. [API Testing](#api-testing)
6. [E2E Testing](#e2e-testing)
7. [Test-Driven Development (TDD)](#test-driven-development)
8. [Continuous Integration](#continuous-integration)
9. [Testing Best Practices](#testing-best-practices)
10. [Coverage & Quality Metrics](#coverage-quality-metrics)

---

## Testing Fundamentals

### The Testing Pyramid

```
         /\        E2E Tests (Few)
        /  \       - Test complete user flows
       /----\      - Slow, expensive
      / Inte-\     Integration Tests (Some)
     / gration\    - Test component interactions
    /----------\   - Medium speed, medium cost
   /   Unit     \  Unit Tests (Many)
  /    Tests     \ - Test individual functions/methods
 /________________\- Fast, cheap
```

### Types of Tests

```
1. Unit Tests
   - Test individual functions/methods
   - Fast and isolated
   - Mock external dependencies

2. Integration Tests
   - Test multiple components together
   - Database, API calls
   - More realistic scenarios

3. End-to-End (E2E) Tests
   - Test complete user workflows
   - Browser automation
   - Slowest but most comprehensive

4. Acceptance Tests
   - Verify business requirements
   - User story validation
```

### AAA Pattern

```php
// Arrange - Set up test data
$user = User::factory()->create();

// Act - Perform the action
$response = $this->actingAs($user)->get('/dashboard');

// Assert - Verify the result
$response->assertStatus(200);
```

---

## Laravel Testing

### 1. **PHPUnit Setup**

```xml
<!-- phpunit.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<phpunit xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         bootstrap="vendor/autoload.php"
         colors="true">
    <testsuites>
        <testsuite name="Unit">
            <directory suffix="Test.php">./tests/Unit</directory>
        </testsuite>
        <testsuite name="Feature">
            <directory suffix="Test.php">./tests/Feature</directory>
        </testsuite>
    </testsuites>
    <php>
        <env name="APP_ENV" value="testing"/>
        <env name="DB_CONNECTION" value="sqlite"/>
        <env name="DB_DATABASE" value=":memory:"/>
        <env name="CACHE_DRIVER" value="array"/>
        <env name="SESSION_DRIVER" value="array"/>
        <env name="QUEUE_DRIVER" value="sync"/>
        <env name="MAIL_MAILER" value="array"/>
    </php>
</phpunit>
```

### 2. **Pest PHP (Modern Alternative)**

```php
// Install Pest
composer require pestphp/pest --dev --with-all-dependencies
composer require pestphp/pest-plugin-laravel --dev
php artisan pest:install

// tests/Feature/UserTest.php
use App\Models\User;

it('can create a user', function () {
    $user = User::factory()->create([
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ]);

    expect($user->name)->toBe('John Doe')
        ->and($user->email)->toBe('john@example.com');
});

it('can authenticate a user', function () {
    $user = User::factory()->create();

    $this->post('/login', [
        'email' => $user->email,
        'password' => 'password',
    ])->assertRedirect('/dashboard');

    $this->assertAuthenticatedAs($user);
});

// Run tests
php artisan test
// or
./vendor/bin/pest
```

### 3. **Feature Tests**

```php
// tests/Feature/OrderTest.php
namespace Tests\Feature;

use Tests\TestCase;
use App\Models\User;
use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;

class OrderTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function user_can_create_order()
    {
        // Arrange
        $user = User::factory()->create();
        $product = Product::factory()->create(['price' => 100]);

        // Act
        $response = $this->actingAs($user)->postJson('/api/orders', [
            'items' => [
                ['product_id' => $product->id, 'quantity' => 2]
            ]
        ]);

        // Assert
        $response->assertStatus(201)
            ->assertJsonStructure([
                'data' => ['id', 'total_amount', 'status', 'items']
            ]);

        $this->assertDatabaseHas('orders', [
            'user_id' => $user->id,
            'total_amount' => 200,
            'status' => 'pending',
        ]);
    }

    /** @test */
    public function cannot_create_order_without_items()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/api/orders', [
            'items' => []
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['items']);
    }

    /** @test */
    public function cannot_create_order_with_invalid_product()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->postJson('/api/orders', [
            'items' => [
                ['product_id' => 999, 'quantity' => 1]
            ]
        ]);

        $response->assertStatus(422)
            ->assertJsonValidationErrors(['items.0.product_id']);
    }
}
```

### 4. **Unit Tests**

```php
// tests/Unit/OrderServiceTest.php
namespace Tests\Unit;

use Tests\TestCase;
use App\Services\OrderService;
use App\Services\PaymentService;
use App\Services\InventoryService;
use App\Models\User;
use App\Models\Order;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Mockery;

class OrderServiceTest extends TestCase
{
    use RefreshDatabase;

    /** @test */
    public function it_calculates_order_total_correctly()
    {
        // Mock dependencies
        $paymentService = Mockery::mock(PaymentService::class);
        $inventoryService = Mockery::mock(InventoryService::class);

        $service = new OrderService($paymentService, $inventoryService);

        $items = [
            ['price' => 10.50, 'quantity' => 2],
            ['price' => 25.00, 'quantity' => 1],
        ];

        $total = $service->calculateTotal($items);

        $this->assertEquals(46.00, $total);
    }

    /** @test */
    public function it_processes_payment_successfully()
    {
        $paymentService = Mockery::mock(PaymentService::class);
        $inventoryService = Mockery::mock(InventoryService::class);

        $order = Order::factory()->create(['total_amount' => 100]);

        // Mock payment success
        $paymentService->shouldReceive('charge')
            ->once()
            ->with(100, Mockery::any())
            ->andReturn((object)['success' => true]);

        $service = new OrderService($paymentService, $inventoryService);
        $result = $service->processPayment($order, ['token' => 'test_token']);

        $this->assertTrue($result);
        $this->assertEquals('paid', $order->fresh()->status);
    }

    protected function tearDown(): void
    {
        Mockery::close();
        parent::tearDown();
    }
}
```

### 5. **Database Testing**

```php
/** @test */
public function it_creates_user_with_proper_data()
{
    $user = User::factory()->create([
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ]);

    // Assert database has record
    $this->assertDatabaseHas('users', [
        'email' => 'john@example.com',
        'name' => 'John Doe',
    ]);

    // Assert database doesn't have record
    $this->assertDatabaseMissing('users', [
        'email' => 'wrong@example.com',
    ]);

    // Count records
    $this->assertDatabaseCount('users', 1);

    // Check model exists
    $this->assertTrue($user->exists);
}

/** @test */
public function it_soft_deletes_user()
{
    $user = User::factory()->create();
    $user->delete();

    $this->assertSoftDeleted('users', ['id' => $user->id]);
}

/** @test */
public function it_seeds_database_correctly()
{
    $this->seed(); // Run all seeders
    $this->seed(UserSeeder::class); // Run specific seeder

    $this->assertDatabaseCount('users', 10);
}
```

### 6. **Testing Jobs & Queues**

```php
use Illuminate\Support\Facades\Queue;
use App\Jobs\ProcessOrder;

/** @test */
public function it_dispatches_process_order_job()
{
    Queue::fake();

    $order = Order::factory()->create();

    dispatch(new ProcessOrder($order));

    Queue::assertPushed(ProcessOrder::class, function ($job) use ($order) {
        return $job->order->id === $order->id;
    });
}

/** @test */
public function it_processes_job_successfully()
{
    $order = Order::factory()->create(['status' => 'pending']);

    $job = new ProcessOrder($order);
    $job->handle();

    $this->assertEquals('processing', $order->fresh()->status);
}
```

### 7. **Testing Events**

```php
use Illuminate\Support\Facades\Event;
use App\Events\OrderCreated;

/** @test */
public function it_fires_order_created_event()
{
    Event::fake([OrderCreated::class]);

    $user = User::factory()->create();
    $order = $this->orderService->createOrder($user, $this->orderData);

    Event::assertDispatched(OrderCreated::class, function ($event) use ($order) {
        return $event->order->id === $order->id;
    });
}
```

### 8. **Testing Notifications**

```php
use Illuminate\Support\Facades\Notification;
use App\Notifications\OrderConfirmation;

/** @test */
public function it_sends_order_confirmation_notification()
{
    Notification::fake();

    $user = User::factory()->create();
    $order = Order::factory()->create(['user_id' => $user->id]);

    $user->notify(new OrderConfirmation($order));

    Notification::assertSentTo($user, OrderConfirmation::class);
}
```

### 9. **Testing Mail**

```php
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeEmail;

/** @test */
public function it_sends_welcome_email()
{
    Mail::fake();

    $user = User::factory()->create();

    Mail::to($user)->send(new WelcomeEmail($user));

    Mail::assertSent(WelcomeEmail::class, function ($mail) use ($user) {
        return $mail->hasTo($user->email);
    });
}
```

### 10. **Testing API Resources**

```php
/** @test */
public function it_returns_correct_user_resource_structure()
{
    $user = User::factory()->create([
        'name' => 'John Doe',
        'email' => 'john@example.com',
    ]);

    $response = $this->getJson("/api/users/{$user->id}");

    $response->assertStatus(200)
        ->assertJsonStructure([
            'data' => [
                'id',
                'name',
                'email',
                'created_at',
            ]
        ])
        ->assertJson([
            'data' => [
                'name' => 'John Doe',
                'email' => 'john@example.com',
            ]
        ]);
}
```

---

## React Testing

### 1. **Vitest Setup**

```typescript
// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./tests/setup.ts",
        coverage: {
            provider: "v8",
            reporter: ["text", "json", "html"],
        },
    },
});

// tests/setup.ts
import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

afterEach(() => {
    cleanup();
});
```

### 2. **React Testing Library**

```bash
npm install -D @testing-library/react @testing-library/jest-dom @testing-library/user-event
```

```typescript
// components/UserProfile.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProfile } from './UserProfile';

describe('UserProfile', () => {
    it('renders user name', () => {
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };

        render(<UserProfile user={user} />);

        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
    });

    it('calls onEdit when edit button is clicked', async () => {
        const user = { id: 1, name: 'John Doe', email: 'john@example.com' };
        const onEdit = vi.fn();

        render(<UserProfile user={user} onEdit={onEdit} />);

        const editButton = screen.getByRole('button', { name: /edit/i });
        await userEvent.click(editButton);

        expect(onEdit).toHaveBeenCalledWith(user);
    });

    it('shows loading state', () => {
        render(<UserProfile user={null} loading={true} />);

        expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });

    it('shows error message', () => {
        const error = 'Failed to load user';

        render(<UserProfile user={null} error={error} />);

        expect(screen.getByText(error)).toBeInTheDocument();
    });
});
```

### 3. **Testing Hooks**

```typescript
// hooks/useUser.test.ts
import { renderHook, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { useUser } from "./useUser";

// Mock fetch
global.fetch = vi.fn();

describe("useUser", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("fetches user data successfully", async () => {
        const mockUser = { id: 1, name: "John Doe" };

        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => mockUser,
        });

        const { result } = renderHook(() => useUser(1));

        expect(result.current.loading).toBe(true);

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.data).toEqual(mockUser);
        expect(result.current.error).toBeNull();
    });

    it("handles fetch error", async () => {
        (global.fetch as any).mockRejectedValueOnce(new Error("Network error"));

        const { result } = renderHook(() => useUser(1));

        await waitFor(() => {
            expect(result.current.loading).toBe(false);
        });

        expect(result.current.error).toBe("Network error");
        expect(result.current.data).toBeNull();
    });

    it("refetches when refetch is called", async () => {
        const mockUser = { id: 1, name: "John Doe" };

        (global.fetch as any).mockResolvedValue({
            ok: true,
            json: async () => mockUser,
        });

        const { result } = renderHook(() => useUser(1));

        await waitFor(() => expect(result.current.loading).toBe(false));

        expect(global.fetch).toHaveBeenCalledTimes(1);

        result.current.refetch();

        await waitFor(() => {
            expect(global.fetch).toHaveBeenCalledTimes(2);
        });
    });
});
```

### 4. **Testing Forms**

```typescript
// components/LoginForm.test.tsx
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { LoginForm } from './LoginForm';

describe('LoginForm', () => {
    it('submits form with email and password', async () => {
        const onSubmit = vi.fn();

        render(<LoginForm onSubmit={onSubmit} />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/password/i);
        const submitButton = screen.getByRole('button', { name: /sign in/i });

        await userEvent.type(emailInput, 'john@example.com');
        await userEvent.type(passwordInput, 'password123');
        await userEvent.click(submitButton);

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith({
                email: 'john@example.com',
                password: 'password123',
            });
        });
    });

    it('shows validation errors', async () => {
        render(<LoginForm onSubmit={vi.fn()} />);

        const submitButton = screen.getByRole('button', { name: /sign in/i });
        await userEvent.click(submitButton);

        expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
        expect(await screen.findByText(/password is required/i)).toBeInTheDocument();
    });

    it('disables submit button while loading', async () => {
        render(<LoginForm onSubmit={vi.fn()} loading={true} />);

        const submitButton = screen.getByRole('button', { name: /sign in/i });

        expect(submitButton).toBeDisabled();
    });
});
```

### 5. **Snapshot Testing**

```typescript
import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { UserCard } from './UserCard';

describe('UserCard', () => {
    it('matches snapshot', () => {
        const user = {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            avatar: 'https://example.com/avatar.jpg',
        };

        const { container } = render(<UserCard user={user} />);

        expect(container).toMatchSnapshot();
    });
});
```

---

## JavaScript Testing

### 1. **Unit Tests**

```typescript
// utils/format.test.ts
import { describe, it, expect } from "vitest";
import { formatCurrency, formatDate, slugify } from "./format";

describe("formatCurrency", () => {
    it("formats number as currency", () => {
        expect(formatCurrency(1234.56)).toBe("$1,234.56");
        expect(formatCurrency(0)).toBe("$0.00");
        expect(formatCurrency(1000000)).toBe("$1,000,000.00");
    });

    it("handles negative numbers", () => {
        expect(formatCurrency(-500)).toBe("-$500.00");
    });
});

describe("formatDate", () => {
    it("formats date correctly", () => {
        const date = new Date("2024-01-15T10:30:00Z");
        expect(formatDate(date)).toBe("January 15, 2024");
    });
});

describe("slugify", () => {
    it("converts string to slug", () => {
        expect(slugify("Hello World")).toBe("hello-world");
        expect(slugify("React & TypeScript")).toBe("react-typescript");
        expect(slugify("  Multiple   Spaces  ")).toBe("multiple-spaces");
    });
});
```

### 2. **Async Tests**

```typescript
// api/users.test.ts
import { describe, it, expect, vi, beforeEach } from "vitest";
import { fetchUsers, createUser } from "./users";

global.fetch = vi.fn();

describe("Users API", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("fetches users successfully", async () => {
        const mockUsers = [{ id: 1, name: "John" }];

        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: mockUsers }),
        });

        const users = await fetchUsers();

        expect(users).toEqual(mockUsers);
        expect(global.fetch).toHaveBeenCalledWith("/api/users");
    });

    it("throws error on failed request", async () => {
        (global.fetch as any).mockResolvedValueOnce({
            ok: false,
            status: 500,
        });

        await expect(fetchUsers()).rejects.toThrow("Failed to fetch users");
    });

    it("creates user with correct data", async () => {
        const newUser = { name: "Jane", email: "jane@example.com" };
        const createdUser = { id: 2, ...newUser };

        (global.fetch as any).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ data: createdUser }),
        });

        const result = await createUser(newUser);

        expect(result).toEqual(createdUser);
        expect(global.fetch).toHaveBeenCalledWith("/api/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser),
        });
    });
});
```

---

## E2E Testing

### 1. **Laravel Dusk**

```php
// Install Dusk
composer require --dev laravel/dusk
php artisan dusk:install

// tests/Browser/LoginTest.php
namespace Tests\Browser;

use Laravel\Dusk\Browser;
use Tests\DuskTestCase;
use App\Models\User;

class LoginTest extends DuskTestCase
{
    /** @test */
    public function user_can_login()
    {
        $user = User::factory()->create([
            'email' => 'john@example.com',
            'password' => bcrypt('password123'),
        ]);

        $this->browse(function (Browser $browser) use ($user) {
            $browser->visit('/login')
                    ->type('email', $user->email)
                    ->type('password', 'password123')
                    ->press('Sign In')
                    ->assertPathIs('/dashboard')
                    ->assertSee('Welcome back');
        });
    }

    /** @test */
    public function it_shows_validation_errors()
    {
        $this->browse(function (Browser $browser) {
            $browser->visit('/login')
                    ->press('Sign In')
                    ->assertSee('The email field is required')
                    ->assertSee('The password field is required');
        });
    }
}

// Run Dusk tests
php artisan dusk
```

### 2. **Playwright (Modern Alternative)**

```bash
npm install -D @playwright/test
```

```typescript
// tests/e2e/login.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Login', () => {
    test('user can login successfully', async ({ page }) => {
        await page.goto('/login');

        await page.fill('[name="email"]', 'john@example.com');
        await page.fill('[name="password"]', 'password123');
        await page.click('button:has-text("Sign In")');

        await expect(page).toHaveURL('/dashboard');
        await expect(page.locator('h1')).toContainText('Welcome back');
    });

    test('shows validation errors', async ({ page }) => {
        await page.goto('/login');

        await page.click('button:has-text("Sign In")');

        await expect(page.locator('text=Email is required')).toBeVisible();
        await expect(page.locator('text=Password is required')).toBeVisible();
    });

    test('can navigate to register page', async ({ page }) => {
        await page.goto('/login');

        await page.click('text=Create an account');

        await expect(page).toHaveURL('/register');
    });
});

// Run tests
npx playwright test
npx playwright test --ui  // Interactive mode
npx playwright test --headed  // Show browser
```

---

## Test-Driven Development (TDD)

### TDD Workflow

```
1. Write a failing test (RED)
2. Write minimal code to pass (GREEN)
3. Refactor while keeping tests passing (REFACTOR)
4. Repeat
```

### Example: TDD Process

```php
// Step 1: Write failing test
/** @test */
public function it_calculates_cart_total()
{
    $cart = new Cart();
    $cart->addItem(['price' => 10.00, 'quantity' => 2]);
    $cart->addItem(['price' => 5.00, 'quantity' => 3]);

    $this->assertEquals(35.00, $cart->getTotal());
}

// Step 2: Write minimal code to pass
class Cart
{
    private array $items = [];

    public function addItem(array $item): void
    {
        $this->items[] = $item;
    }

    public function getTotal(): float
    {
        $total = 0;
        foreach ($this->items as $item) {
            $total += $item['price'] * $item['quantity'];
        }
        return $total;
    }
}

// Step 3: Add more tests (discount, tax, etc.)
// Step 4: Refactor code while keeping tests green
```

---

## Testing Best Practices

### 1. **Test Naming**

```php
// ✅ Good: Descriptive names
/** @test */
public function it_prevents_duplicate_email_registration() {}

/** @test */
public function it_sends_welcome_email_after_registration() {}

// ❌ Bad: Vague names
/** @test */
public function test_email() {}

/** @test */
public function test1() {}
```

### 2. **One Assertion Per Test**

```php
// ✅ Good: Focused test
/** @test */
public function it_returns_404_for_missing_user()
{
    $response = $this->getJson('/api/users/999');
    $response->assertStatus(404);
}

/** @test */
public function it_returns_correct_user_data()
{
    $user = User::factory()->create();
    $response = $this->getJson("/api/users/{$user->id}");

    $response->assertJson(['data' => ['name' => $user->name]]);
}

// ❌ Bad: Testing multiple things
/** @test */
public function it_tests_user_endpoints()
{
    // Too many assertions, hard to debug
}
```

### 3. **Use Factories & Seeders**

```php
// ✅ Good: Use factories
$user = User::factory()->create();
$admin = User::factory()->admin()->create();
$posts = Post::factory()->count(5)->create();

// ❌ Bad: Manual creation
$user = new User();
$user->name = 'Test User';
$user->email = 'test@test.com';
$user->save();
```

### 4. **Isolate Tests**

```php
// ✅ Good: Each test is independent
use RefreshDatabase;

/** @test */
public function test_one()
{
    $user = User::factory()->create();
    // Test logic
}

/** @test */
public function test_two()
{
    $user = User::factory()->create();
    // Different test, fresh database
}
```

### 5. **Test Edge Cases**

```typescript
describe("divide", () => {
    it("divides two numbers", () => {
        expect(divide(10, 2)).toBe(5);
    });

    it("handles division by zero", () => {
        expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });

    it("handles negative numbers", () => {
        expect(divide(-10, 2)).toBe(-5);
    });

    it("handles decimal results", () => {
        expect(divide(10, 3)).toBeCloseTo(3.33, 2);
    });
});
```

---

## Coverage & Quality Metrics

### Code Coverage

```bash
# PHPUnit coverage
php artisan test --coverage

# Pest coverage
./vendor/bin/pest --coverage

# Vitest coverage
npm run test -- --coverage

# View HTML report
open coverage/index.html
```

### Quality Metrics

```
Aim for:
- 80%+ code coverage
- 100% coverage for critical paths
- Fast test execution (< 5 minutes)
- Zero flaky tests
- Green CI/CD pipeline
```

---

**Next**: [Performance Optimization →](./06_PERFORMANCE_OPTIMIZATION.md)
