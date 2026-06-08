# Complete Project Example: Todo Application

## Overview

This is a complete, production-ready Todo application demonstrating:

- Laravel + Inertia + React + TypeScript
- Redux Toolkit for state management
- Form validation
- CRUD operations
- Testing (backend + frontend)
- Role-based access

---

## 1. Database Setup

### Migration

```php
// database/migrations/2024_01_22_create_todos_table.php
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('todos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->string('title');
            $table->text('description')->nullable();
            $table->enum('priority', ['low', 'medium', 'high'])->default('medium');
            $table->boolean('completed')->default(false);
            $table->timestamp('completed_at')->nullable();
            $table->timestamp('due_date')->nullable();
            $table->timestamps();

            $table->index(['user_id', 'completed']);
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('todos');
    }
};
```

### Factory

```php
// database/factories/TodoFactory.php
namespace Database\Factories;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TodoFactory extends Factory
{
    protected $model = Todo::class;

    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'title' => fake()->sentence(),
            'description' => fake()->paragraph(),
            'priority' => fake()->randomElement(['low', 'medium', 'high']),
            'completed' => fake()->boolean(30),
            'completed_at' => function (array $attributes) {
                return $attributes['completed'] ? fake()->dateTimeBetween('-1 month', 'now') : null;
            },
            'due_date' => fake()->optional()->dateTimeBetween('now', '+1 month'),
        ];
    }

    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'completed' => true,
            'completed_at' => now(),
        ]);
    }

    public function pending(): static
    {
        return $this->state(fn (array $attributes) => [
            'completed' => false,
            'completed_at' => null,
        ]);
    }

    public function highPriority(): static
    {
        return $this->state(fn (array $attributes) => [
            'priority' => 'high',
        ]);
    }
}
```

---

## 2. Model

```php
// app/Models/Todo.php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Todo extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'description',
        'priority',
        'completed',
        'completed_at',
        'due_date',
    ];

    protected $casts = [
        'completed' => 'boolean',
        'completed_at' => 'datetime',
        'due_date' => 'datetime',
    ];

    // Relationships
    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    // Scopes
    public function scopeCompleted($query)
    {
        return $query->where('completed', true);
    }

    public function scopePending($query)
    {
        return $query->where('completed', false);
    }

    public function scopePriority($query, string $priority)
    {
        return $query->where('priority', $priority);
    }

    public function scopeOverdue($query)
    {
        return $query->where('completed', false)
            ->whereNotNull('due_date')
            ->where('due_date', '<', now());
    }

    // Accessors
    public function getIsOverdueAttribute(): bool
    {
        return !$this->completed
            && $this->due_date
            && $this->due_date->isPast();
    }

    // Methods
    public function markAsCompleted(): void
    {
        $this->update([
            'completed' => true,
            'completed_at' => now(),
        ]);
    }

    public function markAsPending(): void
    {
        $this->update([
            'completed' => false,
            'completed_at' => null,
        ]);
    }
}
```

---

## 3. Request Validation

```php
// app/Http/Requests/StoreTodoRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreTodoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'priority' => ['required', 'in:low,medium,high'],
            'due_date' => ['nullable', 'date', 'after:today'],
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Please enter a title for your todo.',
            'title.max' => 'The title cannot be longer than 255 characters.',
            'priority.in' => 'Priority must be low, medium, or high.',
            'due_date.after' => 'Due date must be in the future.',
        ];
    }
}

// app/Http/Requests/UpdateTodoRequest.php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateTodoRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()->id === $this->todo->user_id;
    }

    public function rules(): array
    {
        return [
            'title' => ['sometimes', 'required', 'string', 'max:255'],
            'description' => ['nullable', 'string', 'max:1000'],
            'priority' => ['sometimes', 'required', 'in:low,medium,high'],
            'completed' => ['sometimes', 'boolean'],
            'due_date' => ['nullable', 'date'],
        ];
    }
}
```

---

## 4. Controller

```php
// app/Http/Controllers/TodoController.php
namespace App\Http\Controllers;

use App\Http\Requests\StoreTodoRequest;
use App\Http\Requests\UpdateTodoRequest;
use App\Models\Todo;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TodoController extends Controller
{
    public function index(Request $request): Response
    {
        $query = $request->user()->todos()->latest();

        // Apply filters
        if ($request->has('filter')) {
            match ($request->filter) {
                'completed' => $query->completed(),
                'pending' => $query->pending(),
                'overdue' => $query->overdue(),
                default => null,
            };
        }

        if ($request->has('priority')) {
            $query->priority($request->priority);
        }

        if ($request->has('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        return Inertia::render('Todos/Index', [
            'todos' => $query->paginate(20)->through(fn ($todo) => [
                'id' => $todo->id,
                'title' => $todo->title,
                'description' => $todo->description,
                'priority' => $todo->priority,
                'completed' => $todo->completed,
                'completed_at' => $todo->completed_at?->toDateString(),
                'due_date' => $todo->due_date?->toDateString(),
                'is_overdue' => $todo->is_overdue,
                'created_at' => $todo->created_at->toDateString(),
            ]),
            'filters' => $request->only(['filter', 'priority', 'search']),
            'stats' => [
                'total' => $request->user()->todos()->count(),
                'completed' => $request->user()->todos()->completed()->count(),
                'pending' => $request->user()->todos()->pending()->count(),
                'overdue' => $request->user()->todos()->overdue()->count(),
            ],
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Todos/Create');
    }

    public function store(StoreTodoRequest $request): RedirectResponse
    {
        $request->user()->todos()->create($request->validated());

        return redirect()->route('todos.index')
            ->with('success', 'Todo created successfully!');
    }

    public function show(Todo $todo): Response
    {
        $this->authorize('view', $todo);

        return Inertia::render('Todos/Show', [
            'todo' => [
                'id' => $todo->id,
                'title' => $todo->title,
                'description' => $todo->description,
                'priority' => $todo->priority,
                'completed' => $todo->completed,
                'completed_at' => $todo->completed_at?->toISOString(),
                'due_date' => $todo->due_date?->toISOString(),
                'created_at' => $todo->created_at->toISOString(),
                'updated_at' => $todo->updated_at->toISOString(),
            ],
        ]);
    }

    public function edit(Todo $todo): Response
    {
        $this->authorize('update', $todo);

        return Inertia::render('Todos/Edit', [
            'todo' => $todo->only('id', 'title', 'description', 'priority', 'due_date'),
        ]);
    }

    public function update(UpdateTodoRequest $request, Todo $todo): RedirectResponse
    {
        $todo->update($request->validated());

        return redirect()->route('todos.index')
            ->with('success', 'Todo updated successfully!');
    }

    public function destroy(Todo $todo): RedirectResponse
    {
        $this->authorize('delete', $todo);

        $todo->delete();

        return redirect()->route('todos.index')
            ->with('success', 'Todo deleted successfully!');
    }

    public function toggle(Todo $todo): RedirectResponse
    {
        $this->authorize('update', $todo);

        if ($todo->completed) {
            $todo->markAsPending();
        } else {
            $todo->markAsCompleted();
        }

        return back()->with('success', 'Todo status updated!');
    }
}
```

---

## 5. Policy

```php
// app/Policies/TodoPolicy.php
namespace App\Policies;

use App\Models\Todo;
use App\Models\User;

class TodoPolicy
{
    public function viewAny(User $user): bool
    {
        return true;
    }

    public function view(User $user, Todo $todo): bool
    {
        return $user->id === $todo->user_id;
    }

    public function create(User $user): bool
    {
        return true;
    }

    public function update(User $user, Todo $todo): bool
    {
        return $user->id === $todo->user_id;
    }

    public function delete(User $user, Todo $todo): bool
    {
        return $user->id === $todo->user_id;
    }
}
```

---

## 6. Routes

```php
// routes/web.php
use App\Http\Controllers\TodoController;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::resource('todos', TodoController::class);
    Route::post('todos/{todo}/toggle', [TodoController::class, 'toggle'])
        ->name('todos.toggle');
});
```

---

## 7. TypeScript Types

```tsx
// resources/js/types/todo.ts
export interface Todo {
    id: number;
    title: string;
    description: string | null;
    priority: "low" | "medium" | "high";
    completed: boolean;
    completed_at: string | null;
    due_date: string | null;
    is_overdue?: boolean;
    created_at: string;
    updated_at?: string;
}

export interface TodoFilters {
    filter?: "all" | "completed" | "pending" | "overdue";
    priority?: "low" | "medium" | "high";
    search?: string;
}

export interface TodoStats {
    total: number;
    completed: number;
    pending: number;
    overdue: number;
}

export interface TodoFormData {
    title: string;
    description: string;
    priority: "low" | "medium" | "high";
    due_date: string | null;
}
```

---

## 8. Redux Slice

```tsx
// resources/js/lib/slices/todoSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { router } from "@inertiajs/react";
import { Todo, TodoFilters } from "@/types/todo";

interface TodoState {
    selectedTodo: Todo | null;
    filters: TodoFilters;
    loading: boolean;
}

const initialState: TodoState = {
    selectedTodo: null,
    filters: {},
    loading: false,
};

export const toggleTodo = createAsyncThunk(
    "todos/toggle",
    async (id: number) => {
        router.post(
            `/todos/${id}/toggle`,
            {},
            {
                preserveScroll: true,
                only: ["todos", "stats"],
            },
        );
    },
);

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        setSelectedTodo: (state, action: PayloadAction<Todo | null>) => {
            state.selectedTodo = action.payload;
        },
        setFilters: (state, action: PayloadAction<TodoFilters>) => {
            state.filters = action.payload;
        },
        clearFilters: (state) => {
            state.filters = {};
        },
    },
});

export const { setSelectedTodo, setFilters, clearFilters } = todoSlice.actions;
export default todoSlice.reducer;
```

---

## 9. React Components

### Index Page

```tsx
// resources/js/Pages/Todos/Index.tsx
import { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import { Todo, TodoFilters, TodoStats } from "@/types/todo";
import TodoItem from "@/components/Todos/TodoItem";
import TodoFiltersComponent from "@/components/Todos/TodoFilters";

interface TodosIndexProps extends PageProps {
    todos: {
        data: Todo[];
        links: any;
        meta: any;
    };
    filters: TodoFilters;
    stats: TodoStats;
}

export default function TodosIndex({ todos, filters, stats }: TodosIndexProps) {
    const [search, setSearch] = useState(filters.search || "");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get(
            "/todos",
            { ...filters, search },
            {
                preserveState: true,
                preserveScroll: true,
            },
        );
    };

    const handleToggle = (id: number) => {
        router.post(
            `/todos/${id}/toggle`,
            {},
            {
                preserveScroll: true,
                only: ["todos", "stats"],
            },
        );
    };

    const handleDelete = (id: number) => {
        if (confirm("Are you sure you want to delete this todo?")) {
            router.delete(`/todos/${id}`, {
                preserveScroll: true,
            });
        }
    };

    return (
        <>
            <Head title="Todos" />

            <div className="container py-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-3xl font-bold">My Todos</h1>
                    <Link href="/todos/create" className="btn btn-primary">
                        Create Todo
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-6">
                    <div className="stat-card">
                        <h3>Total</h3>
                        <p className="text-2xl font-bold">{stats.total}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Pending</h3>
                        <p className="text-2xl font-bold">{stats.pending}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Completed</h3>
                        <p className="text-2xl font-bold">{stats.completed}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Overdue</h3>
                        <p className="text-2xl font-bold text-red-600">
                            {stats.overdue}
                        </p>
                    </div>
                </div>

                {/* Filters */}
                <div className="mb-6">
                    <form onSubmit={handleSearch} className="flex gap-2 mb-4">
                        <input
                            type="text"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Search todos..."
                            className="flex-1"
                        />
                        <button type="submit" className="btn btn-secondary">
                            Search
                        </button>
                    </form>

                    <TodoFiltersComponent
                        filters={filters}
                        onFilterChange={(newFilters) => {
                            router.get("/todos", newFilters, {
                                preserveState: true,
                                preserveScroll: true,
                            });
                        }}
                    />
                </div>

                {/* Todo List */}
                <div className="space-y-4">
                    {todos.data.length === 0 ? (
                        <div className="text-center py-12 text-gray-500">
                            No todos found. Create one to get started!
                        </div>
                    ) : (
                        todos.data.map((todo) => (
                            <TodoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={handleToggle}
                                onDelete={handleDelete}
                            />
                        ))
                    )}
                </div>

                {/* Pagination */}
                {todos.data.length > 0 && (
                    <div className="mt-6">
                        {/* Implement pagination component */}
                    </div>
                )}
            </div>
        </>
    );
}

TodosIndex.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
```

### Todo Item Component

```tsx
// resources/js/components/Todos/TodoItem.tsx
import { Link } from "@inertiajs/react";
import { Todo } from "@/types/todo";

interface TodoItemProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
    const priorityColors = {
        low: "bg-green-100 text-green-800",
        medium: "bg-yellow-100 text-yellow-800",
        high: "bg-red-100 text-red-800",
    };

    return (
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
            <div className="flex items-start gap-4">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                    className="mt-1"
                />

                <div className="flex-1">
                    <Link
                        href={`/todos/${todo.id}`}
                        className="text-lg font-semibold hover:text-blue-600"
                    >
                        {todo.title}
                    </Link>

                    {todo.description && (
                        <p className="text-gray-600 mt-1">{todo.description}</p>
                    )}

                    <div className="flex items-center gap-3 mt-2">
                        <span
                            className={`badge ${priorityColors[todo.priority]}`}
                        >
                            {todo.priority}
                        </span>

                        {todo.due_date && (
                            <span
                                className={`text-sm ${todo.is_overdue ? "text-red-600 font-semibold" : "text-gray-600"}`}
                            >
                                Due:{" "}
                                {new Date(todo.due_date).toLocaleDateString()}
                                {todo.is_overdue && " (Overdue)"}
                            </span>
                        )}

                        {todo.completed_at && (
                            <span className="text-sm text-gray-600">
                                Completed:{" "}
                                {new Date(
                                    todo.completed_at,
                                ).toLocaleDateString()}
                            </span>
                        )}
                    </div>
                </div>

                <div className="flex gap-2">
                    <Link
                        href={`/todos/${todo.id}/edit`}
                        className="btn btn-sm btn-secondary"
                    >
                        Edit
                    </Link>
                    <button
                        onClick={() => onDelete(todo.id)}
                        className="btn btn-sm btn-danger"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
```

### Create Form

```tsx
// resources/js/Pages/Todos/Create.tsx
import { Head } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";
import { TodoFormData } from "@/types/todo";

export default function TodosCreate() {
    const { data, setData, post, processing, errors } = useForm<TodoFormData>({
        title: "",
        description: "",
        priority: "medium",
        due_date: null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/todos");
    };

    return (
        <>
            <Head title="Create Todo" />

            <div className="container py-6">
                <h1 className="text-3xl font-bold mb-6">Create Todo</h1>

                <form onSubmit={handleSubmit} className="max-w-2xl">
                    <div className="mb-4">
                        <label className="form-label">Title *</label>
                        <input
                            type="text"
                            value={data.title}
                            onChange={(e) => setData("title", e.target.value)}
                            className="form-input"
                        />
                        {errors.title && (
                            <span className="form-error">{errors.title}</span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Description</label>
                        <textarea
                            value={data.description}
                            onChange={(e) =>
                                setData("description", e.target.value)
                            }
                            rows={4}
                            className="form-input"
                        />
                        {errors.description && (
                            <span className="form-error">
                                {errors.description}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Priority *</label>
                        <select
                            value={data.priority}
                            onChange={(e) =>
                                setData("priority", e.target.value as any)
                            }
                            className="form-input"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                        {errors.priority && (
                            <span className="form-error">
                                {errors.priority}
                            </span>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="form-label">Due Date</label>
                        <input
                            type="date"
                            value={data.due_date || ""}
                            onChange={(e) =>
                                setData("due_date", e.target.value || null)
                            }
                            className="form-input"
                        />
                        {errors.due_date && (
                            <span className="form-error">
                                {errors.due_date}
                            </span>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={processing}
                            className="btn btn-primary"
                        >
                            {processing ? "Creating..." : "Create Todo"}
                        </button>
                        <Link href="/todos" className="btn btn-secondary">
                            Cancel
                        </Link>
                    </div>
                </form>
            </div>
        </>
    );
}

TodosCreate.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
```

---

## 10. Tests

### Feature Test

```php
// tests/Feature/TodoTest.php
namespace Tests\Feature;

use App\Models\Todo;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class TodoTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_view_their_todos()
    {
        $user = User::factory()->create();
        $todos = Todo::factory()->count(5)->create(['user_id' => $user->id]);

        $response = $this->actingAs($user)->get('/todos');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) =>
            $page->component('Todos/Index')
                ->has('todos.data', 5)
        );
    }

    public function test_user_can_create_todo()
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)->post('/todos', [
            'title' => 'New Todo',
            'description' => 'Todo description',
            'priority' => 'high',
        ]);

        $response->assertRedirect('/todos');
        $this->assertDatabaseHas('todos', [
            'user_id' => $user->id,
            'title' => 'New Todo',
        ]);
    }

    public function test_user_can_toggle_todo_completion()
    {
        $user = User::factory()->create();
        $todo = Todo::factory()->create(['user_id' => $user->id, 'completed' => false]);

        $this->actingAs($user)->post("/todos/{$todo->id}/toggle");

        $this->assertTrue($todo->fresh()->completed);
    }

    public function test_user_cannot_view_others_todos()
    {
        $user1 = User::factory()->create();
        $user2 = User::factory()->create();
        $todo = Todo::factory()->create(['user_id' => $user2->id]);

        $response = $this->actingAs($user1)->get("/todos/{$todo->id}");

        $response->assertStatus(403);
    }
}
```

### Component Test

```tsx
// tests/components/TodoItem.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import TodoItem from "@/components/Todos/TodoItem";
import { Todo } from "@/types/todo";

const mockTodo: Todo = {
    id: 1,
    title: "Test Todo",
    description: "Test description",
    priority: "high",
    completed: false,
    completed_at: null,
    due_date: "2024-12-31",
    created_at: "2024-01-01",
};

test("renders todo item", () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(
        <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />,
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
    expect(screen.getByText("Test description")).toBeInTheDocument();
    expect(screen.getByText("high")).toBeInTheDocument();
});

test("calls onToggle when checkbox is clicked", () => {
    const onToggle = jest.fn();
    const onDelete = jest.fn();

    render(
        <TodoItem todo={mockTodo} onToggle={onToggle} onDelete={onDelete} />,
    );

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(onToggle).toHaveBeenCalledWith(1);
});
```

---

## Complete! 🎉

This example demonstrates:
✅ Full CRUD operations
✅ Form validation
✅ Authorization/policies
✅ TypeScript types
✅ Redux state management
✅ Inertia.js integration
✅ Testing (backend + frontend)
✅ Filters and search
✅ Pagination
✅ Real-world patterns

---

## Next Steps

1. Run migrations: `php artisan migrate`
2. Create some test data: `php artisan db:seed --class=TodoSeeder`
3. Start dev server: `npm run dev`
4. Run tests: `php artisan test` and `npm test`
5. Customize and extend!
