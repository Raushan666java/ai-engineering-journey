# Testing React + Laravel Applications — Complete Guide

## Table of Contents

1. Testing Philosophy & Strategy
2. Backend Testing (PHPUnit)
3. Frontend Testing (Jest + RTL)
4. Integration Testing
5. E2E Testing
6. Test Coverage
7. CI/CD Integration
8. Best Practices

---

## 1. Testing Philosophy & Strategy

### Testing Pyramid

```
       /\
      /E2E\           Few, slow, expensive
     /------\
    /Integ.  \        Some, moderate speed
   /----------\
  / Unit Tests \      Many, fast, cheap
 /--------------\
```

### What to Test

- ✅ **Critical paths**: Login, checkout, payment
- ✅ **Business logic**: Calculations, validations
- ✅ **User interactions**: Forms, buttons, navigation
- ✅ **Edge cases**: Empty states, errors, boundaries
- ❌ **Implementation details**: Internal state, private methods
- ❌ **Third-party code**: Libraries, frameworks

### Test Organization

```
tests/
  Feature/          # Laravel feature tests (HTTP, routes)
  Unit/             # Laravel unit tests (models, services)
  components/       # React component tests
  integration/      # Integration tests
  e2e/             # End-to-end tests
```

---

## 2. Backend Testing (PHPUnit)

### Setup

```bash
composer require --dev phpunit/phpunit
php artisan test
```

### Configuration

```xml
<!-- phpunit.xml -->
<?xml version="1.0" encoding="UTF-8"?>
<phpunit bootstrap="vendor/autoload.php">
    <testsuites>
        <testsuite name="Unit">
            <directory>tests/Unit</directory>
        </testsuite>
        <testsuite name="Feature">
            <directory>tests/Feature</directory>
        </testsuite>
    </testsuites>
    <php>
        <env name="APP_ENV" value="testing"/>
        <env name="DB_CONNECTION" value="sqlite"/>
        <env name="DB_DATABASE" value=":memory:"/>
    </php>
</phpunit>
```

### Unit Tests

**Model Test**

```php
// tests/Unit/TodoTest.php
namespace Tests\Unit;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TodoTest extends TestCase
{
    use RefreshDatabase;

    public function test_todo_belongs_to_user()
    {
        $user = User::factory()->create();
        $todo = Todo::factory()->create(['user_id' => $user->id]);

        $this->assertInstanceOf(User::class, $todo->user);
        $this->assertEquals($user->id, $todo->user->id);
    }

    public function test_mark_as_completed_sets_completed_status()
    {
        $todo = Todo::factory()->create(['completed' => false]);

        $todo->markAsCompleted();

        $this->assertTrue($todo->completed);
        $this->assertNotNull($todo->completed_at);
    }

    public function test_is_overdue_returns_true_for_overdue_todo()
    {
        $todo = Todo::factory()->create([
            'completed' => false,
            'due_date' => now()->subDay(),
        ]);

        $this->assertTrue($todo->is_overdue);
    }

    public function test_scope_completed_filters_completed_todos()
    {
        Todo::factory()->create(['completed' => true]);
        Todo::factory()->create(['completed' => true]);
        Todo::factory()->create(['completed' => false]);

        $completedTodos = Todo::completed()->get();

        $this->assertCount(2, $completedTodos);
        $this->assertTrue($completedTodos->every(fn($todo) => $todo->completed));
    }
}
```

### Feature Tests

**Route Test**

```php
// tests/Feature/TodoControllerTest.php
namespace Tests\Feature;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TodoControllerTest extends TestCase
{
    use RefreshDatabase;

    public function test_index_displays_users_todos()
    {
        $user = User::factory()->create();
        $userTodos = Todo::factory()->count(3)->create(['user_id' => $user->id]);
        $otherTodos = Todo::factory()->count(2)->create();

        $response = $this->actingAs($user)->get(route('todos.index'));

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('Todos/Index')
                ->has('todos.data', 3)
        );
    }

    public function test_store_creates_todo_with_valid_data()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post(route('todos.store'), [
            'title' => 'New Todo',
            'description' => 'Todo description',
            'priority' => 'high',
            'due_date' => now()->addDays(7)->toDateString(),
        ]);

        $response->assertRedirect(route('todos.index'));
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('todos', [
            'user_id' => $user->id,
            'title' => 'New Todo',
            'priority' => 'high',
        ]);
    }

    public function test_store_fails_with_invalid_data()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post(route('todos.store'), [
            'title' => '', // Required field
            'priority' => 'invalid', // Invalid enum value
        ]);

        $response->assertSessionHasErrors(['title', 'priority']);
        $this->assertEquals(0, Todo::count());
    }

    public function test_user_cannot_update_others_todo()
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();
        $todo = Todo::factory()->create(['user_id' => $user2->id]);

        $response = $this->actingAs($user1)->put(route('todos.update', $todo), [
            'title' => 'Updated Title',
        ]);

        $response->assertForbidden();
    }

    public function test_toggle_changes_completion_status()
    {
        $user = User::factory()->create();
        $todo = Todo::factory()->create([
            'user_id' => $user->id,
            'completed' => false,
        ]);

        $response = $this->actingAs($user)
            ->post(route('todos.toggle', $todo));

        $response->assertRedirect();
        $this->assertTrue($todo->fresh()->completed);
    }

    public function test_destroy_deletes_todo()
    {
        $user = User::factory()->create();
        $todo = Todo::factory()->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)
            ->delete(route('todos.destroy', $todo));

        $response->assertRedirect(route('todos.index'));
        $this->assertDatabaseMissing('todos', ['id' => $todo->id]);
    }
}
```

**Authentication Test**

```php
// tests/Feature/Auth/AuthenticationTest.php
namespace Tests\Feature\Auth;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class AuthenticationTest extends TestCase
{
    use RefreshDatabase;

    public function test_users_can_authenticate()
    {
        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'password',
        ]);

        $this->assertAuthenticated();
        $response->assertRedirect('/dashboard');
    }

    public function test_users_cannot_authenticate_with_invalid_password()
    {
        $user = User::factory()->create();

        $response = $this->post('/login', [
            'email' => $user->email,
            'password' => 'wrong-password',
        ]);

        $this->assertGuest();
        $response->assertSessionHasErrors();
    }

    public function test_admin_redirected_to_admin_dashboard()
    {
        $admin = User::factory()->create(['role' => 'admin']);

        $response = $this->post('/login', [
            'email' => $admin->email,
            'password' => 'password',
        ]);

        $response->assertRedirect('/admin/dashboard');
    }
}
```

---

## 3. Frontend Testing (Jest + RTL)

### Setup

```bash
npm install --save-dev @testing-library/react @testing-library/jest-dom @testing-library/user-event jest jest-environment-jsdom
```

### Configuration

```js
// jest.config.js
export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/tests/setup.ts"],
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/resources/js/$1",
        "\\.(css|scss)$": "identity-obj-proxy",
    },
    transform: {
        "^.+\\.tsx?$": [
            "ts-jest",
            {
                tsconfig: {
                    jsx: "react-jsx",
                },
            },
        ],
    },
};
```

```ts
// tests/setup.ts
import "@testing-library/jest-dom";
```

### Component Tests

**Simple Component**

```tsx
// tests/components/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "@/components/ui/Button";

describe("Button", () => {
    it("renders with label", () => {
        render(<Button>Click me</Button>);
        expect(screen.getByText("Click me")).toBeInTheDocument();
    });

    it("calls onClick when clicked", () => {
        const handleClick = jest.fn();
        render(<Button onClick={handleClick}>Click me</Button>);

        fireEvent.click(screen.getByText("Click me"));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it("is disabled when disabled prop is true", () => {
        render(<Button disabled>Disabled</Button>);

        const button = screen.getByText("Disabled");
        expect(button).toBeDisabled();
    });

    it("applies variant class", () => {
        render(<Button variant="primary">Primary</Button>);

        const button = screen.getByText("Primary");
        expect(button).toHaveClass("btn-primary");
    });
});
```

**Form Component**

```tsx
// tests/components/TodoForm.test.tsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoForm from "@/components/Todos/TodoForm";

describe("TodoForm", () => {
    it("renders all form fields", () => {
        render(<TodoForm onSubmit={jest.fn()} />);

        expect(screen.getByLabelText(/title/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/priority/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/due date/i)).toBeInTheDocument();
    });

    it("submits form with valid data", async () => {
        const user = userEvent.setup();
        const onSubmit = jest.fn();

        render(<TodoForm onSubmit={onSubmit} />);

        await user.type(screen.getByLabelText(/title/i), "New Todo");
        await user.type(
            screen.getByLabelText(/description/i),
            "Todo description",
        );
        await user.selectOptions(screen.getByLabelText(/priority/i), "high");

        await user.click(screen.getByRole("button", { name: /submit/i }));

        await waitFor(() => {
            expect(onSubmit).toHaveBeenCalledWith({
                title: "New Todo",
                description: "Todo description",
                priority: "high",
                due_date: null,
            });
        });
    });

    it("shows validation errors", async () => {
        const user = userEvent.setup();
        render(<TodoForm onSubmit={jest.fn()} />);

        // Submit without filling required fields
        await user.click(screen.getByRole("button", { name: /submit/i }));

        expect(screen.getByText(/title is required/i)).toBeInTheDocument();
    });

    it("pre-fills form when editing", () => {
        const initialData = {
            title: "Existing Todo",
            description: "Description",
            priority: "medium",
            due_date: "2024-12-31",
        };

        render(<TodoForm onSubmit={jest.fn()} initialData={initialData} />);

        expect(screen.getByLabelText(/title/i)).toHaveValue("Existing Todo");
        expect(screen.getByLabelText(/priority/i)).toHaveValue("medium");
    });
});
```

**List Component**

```tsx
// tests/components/TodoList.test.tsx
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "@/components/Todos/TodoList";
import { Todo } from "@/types/todo";

const mockTodos: Todo[] = [
    {
        id: 1,
        title: "Todo 1",
        description: "Description 1",
        priority: "high",
        completed: false,
        completed_at: null,
        due_date: null,
        created_at: "2024-01-01",
    },
    {
        id: 2,
        title: "Todo 2",
        description: "Description 2",
        priority: "low",
        completed: true,
        completed_at: "2024-01-15",
        due_date: null,
        created_at: "2024-01-01",
    },
];

describe("TodoList", () => {
    it("renders all todos", () => {
        render(
            <TodoList
                todos={mockTodos}
                onToggle={jest.fn()}
                onDelete={jest.fn()}
            />,
        );

        expect(screen.getByText("Todo 1")).toBeInTheDocument();
        expect(screen.getByText("Todo 2")).toBeInTheDocument();
    });

    it("shows empty state when no todos", () => {
        render(
            <TodoList todos={[]} onToggle={jest.fn()} onDelete={jest.fn()} />,
        );

        expect(screen.getByText(/no todos found/i)).toBeInTheDocument();
    });

    it("calls onToggle when checkbox is clicked", async () => {
        const user = userEvent.setup();
        const onToggle = jest.fn();

        render(
            <TodoList
                todos={mockTodos}
                onToggle={onToggle}
                onDelete={jest.fn()}
            />,
        );

        const firstCheckbox = screen.getAllByRole("checkbox")[0];
        await user.click(firstCheckbox);

        expect(onToggle).toHaveBeenCalledWith(1);
    });

    it("calls onDelete when delete button is clicked", async () => {
        const user = userEvent.setup();
        const onDelete = jest.fn();

        render(
            <TodoList
                todos={mockTodos}
                onToggle={jest.fn()}
                onDelete={onDelete}
            />,
        );

        const deleteButtons = screen.getAllByRole("button", {
            name: /delete/i,
        });
        await user.click(deleteButtons[0]);

        expect(onDelete).toHaveBeenCalledWith(1);
    });

    it("shows priority badge", () => {
        render(
            <TodoList
                todos={mockTodos}
                onToggle={jest.fn()}
                onDelete={jest.fn()}
            />,
        );

        expect(screen.getByText("high")).toBeInTheDocument();
        expect(screen.getByText("low")).toBeInTheDocument();
    });
});
```

### Redux Tests

**Slice Test**

```tsx
// tests/redux/todoSlice.test.ts
import todoReducer, {
    addTodo,
    toggleTodo,
    deleteTodo,
} from "@/lib/slices/todoSlice";

describe("todoSlice", () => {
    const initialState = {
        todos: [],
        filter: "all",
        loading: false,
        error: null,
    };

    it("should handle initial state", () => {
        expect(todoReducer(undefined, { type: "unknown" })).toEqual(
            initialState,
        );
    });

    it("should handle addTodo", () => {
        const actual = todoReducer(initialState, addTodo("New todo"));

        expect(actual.todos).toHaveLength(1);
        expect(actual.todos[0].text).toBe("New todo");
        expect(actual.todos[0].completed).toBe(false);
    });

    it("should handle toggleTodo", () => {
        const previousState = {
            ...initialState,
            todos: [{ id: 1, text: "Todo 1", completed: false }],
        };

        const actual = todoReducer(previousState, toggleTodo(1));

        expect(actual.todos[0].completed).toBe(true);
    });

    it("should handle deleteTodo", () => {
        const previousState = {
            ...initialState,
            todos: [
                { id: 1, text: "Todo 1", completed: false },
                { id: 2, text: "Todo 2", completed: false },
            ],
        };

        const actual = todoReducer(previousState, deleteTodo(1));

        expect(actual.todos).toHaveLength(1);
        expect(actual.todos[0].id).toBe(2);
    });
});
```

**Selector Test**

```tsx
// tests/redux/selectors.test.ts
import { selectFilteredTodos, selectTodoStats } from "@/lib/slices/todoSlice";

describe("todo selectors", () => {
    const state = {
        todos: {
            todos: [
                { id: 1, text: "Todo 1", completed: false },
                { id: 2, text: "Todo 2", completed: true },
                { id: 3, text: "Todo 3", completed: false },
            ],
            filter: "active",
        },
    };

    it("selectFilteredTodos returns active todos", () => {
        const result = selectFilteredTodos(state);

        expect(result).toHaveLength(2);
        expect(result.every((t) => !t.completed)).toBe(true);
    });

    it("selectTodoStats returns correct stats", () => {
        const result = selectTodoStats(state);

        expect(result).toEqual({
            total: 3,
            completed: 1,
            active: 2,
        });
    });
});
```

---

## 4. Integration Testing

### Inertia Integration

```tsx
// tests/integration/TodoPages.test.tsx
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { createInertiaApp } from "@inertiajs/react";
import TodosIndex from "@/Pages/Todos/Index";

// Mock Inertia
jest.mock("@inertiajs/react", () => ({
    ...jest.requireActual("@inertiajs/react"),
    router: {
        visit: jest.fn(),
        post: jest.fn(),
        delete: jest.fn(),
    },
}));

describe("Todos Index Page", () => {
    const props = {
        auth: { user: { id: 1, name: "Test User", role: "user" } },
        todos: {
            data: [
                { id: 1, title: "Todo 1", completed: false, priority: "high" },
                { id: 2, title: "Todo 2", completed: true, priority: "low" },
            ],
            links: {},
            meta: {},
        },
        filters: {},
        stats: { total: 2, completed: 1, pending: 1, overdue: 0 },
    };

    it("renders todos from server", () => {
        render(<TodosIndex {...props} />);

        expect(screen.getByText("Todo 1")).toBeInTheDocument();
        expect(screen.getByText("Todo 2")).toBeInTheDocument();
    });

    it("displays stats correctly", () => {
        render(<TodosIndex {...props} />);

        expect(screen.getByText("2")).toBeInTheDocument(); // Total
        expect(screen.getByText("1")).toBeInTheDocument(); // Completed & Pending
    });

    it("navigates to create page when clicking create button", async () => {
        const user = userEvent.setup();
        const { router } = require("@inertiajs/react");

        render(<TodosIndex {...props} />);

        await user.click(screen.getByRole("link", { name: /create todo/i }));

        // Verify navigation happened
        expect(router.visit).toHaveBeenCalledWith("/todos/create");
    });
});
```

---

## 5. E2E Testing (Playwright/Cypress)

### Playwright Setup

```bash
npm install --save-dev @playwright/test
npx playwright install
```

```ts
// tests/e2e/todos.spec.ts
import { test, expect } from "@playwright/test";

test.describe("Todo Management", () => {
    test.beforeEach(async ({ page }) => {
        // Login
        await page.goto("/login");
        await page.fill('[name="email"]', "test@example.com");
        await page.fill('[name="password"]', "password");
        await page.click('button[type="submit"]');
        await page.waitForURL("/dashboard");
    });

    test("create a new todo", async ({ page }) => {
        await page.goto("/todos");
        await page.click("text=Create Todo");

        await page.fill('[name="title"]', "E2E Test Todo");
        await page.fill('[name="description"]', "Created via E2E test");
        await page.selectOption('[name="priority"]', "high");
        await page.click('button[type="submit"]');

        await expect(page.locator("text=E2E Test Todo")).toBeVisible();
    });

    test("toggle todo completion", async ({ page }) => {
        await page.goto("/todos");

        const checkbox = page.locator('input[type="checkbox"]').first();
        await checkbox.click();

        await expect(page.locator(".alert-success")).toBeVisible();
    });

    test("delete todo with confirmation", async ({ page }) => {
        await page.goto("/todos");

        page.on("dialog", (dialog) => dialog.accept());
        await page.click('button:has-text("Delete")');

        await expect(page.locator(".alert-success")).toBeVisible();
    });
});
```

---

## 6. Test Coverage

### Generate Coverage

```bash
# Backend
php artisan test --coverage --min=80

# Frontend
npm test -- --coverage --coverageThreshold='{"global":{"branches":80,"functions":80,"lines":80}}'
```

### Coverage Report

```bash
# View HTML report
npm test -- --coverage
# Opens coverage/lcov-report/index.html
```

---

## 7. CI/CD Integration

### GitHub Actions

```yaml
# .github/workflows/tests.yml
name: Tests

on: [push, pull_request]

jobs:
    backend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - name: Setup PHP
              uses: shivammathur/setup-php@v2
              with:
                  php-version: "8.2"
            - name: Install dependencies
              run: composer install
            - name: Run tests
              run: php artisan test --coverage

    frontend:
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v3
            - name: Setup Node
              uses: actions/setup-node@v3
              with:
                  node-version: "20"
            - name: Install dependencies
              run: npm ci
            - name: Run tests
              run: npm test -- --coverage
```

---

## 8. Best Practices

### DO ✅

- Test behavior, not implementation
- Use meaningful test names
- Follow AAA pattern (Arrange, Act, Assert)
- Mock external dependencies
- Test edge cases
- Keep tests focused and small
- Use factories and seeders

### DON'T ❌

- Test framework code
- Test third-party libraries
- Duplicate tests
- Make tests dependent on each other
- Ignore failing tests
- Skip test cleanup

---

## Practice Exercises

### Exercise 1: Test Todo Component

Write comprehensive tests for TodoItem component.

### Exercise 2: Test API Endpoint

Write feature tests for all Todo CRUD endpoints.

### Exercise 3: E2E User Flow

Write E2E test for complete user journey.

### Exercise 4: Test Redux Actions

Write tests for async thunks and selectors.

---

## Next Steps

- Run all tests: `php artisan test && npm test`
- Set up CI/CD pipeline
- Monitor test coverage
- Practice TDD (Test-Driven Development)
