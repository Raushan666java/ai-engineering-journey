# Laravel + Inertia.js Integration — Complete Guide

## Table of Contents

1. Understanding Inertia.js
2. Server-Side (Laravel) Setup
3. Client-Side (React) Setup
4. Routing & Navigation
5. Sharing Data (Props)
6. Forms & Validation
7. Asset Management
8. Advanced Patterns
9. Performance Optimization
10. Debugging

---

## 1. Understanding Inertia.js

### What is Inertia?

Inertia.js is a library that allows you to build single-page applications using classic server-side routing and controllers.

**Key Concepts:**

- **No API needed**: Controllers return Inertia responses directly
- **Server-side routing**: Routes defined in Laravel (routes/web.php)
- **Client-side navigation**: SPA-like navigation without full page reloads
- **Props**: Data passed from Laravel controllers to React components

### How It Works

```
1. User clicks link
2. Inertia intercepts the click
3. Makes XHR request to server with X-Inertia header
4. Laravel returns JSON with component name + props
5. Inertia mounts the React component with props
6. No full page reload!
```

---

## 2. Server-Side (Laravel) Setup

### Installation

```bash
composer require inertiajs/inertia-laravel
php artisan inertia:middleware
```

### Register Middleware

```php
// app/Http/Kernel.php
protected $middlewareGroups = [
    'web' => [
        // ... other middleware
        \App\Http\Middleware\HandleInertiaRequests::class,
    ],
];
```

### Root Template

```php
// resources/views/app.blade.php
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @viteReactRefresh
    @vite(['resources/js/app.tsx', 'resources/scss/app.scss'])
    @inertiaHead
</head>
<body>
    @inertia
</body>
</html>
```

### HandleInertiaRequests Middleware

```php
// app/Http/Middleware/HandleInertiaRequests.php
namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    /**
     * Root template that's loaded on the first page visit.
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // Shared with ALL Inertia responses
            'auth' => [
                'user' => $request->user() ? [
                    'id' => $request->user()->id,
                    'name' => $request->user()->name,
                    'email' => $request->user()->email,
                    'role' => $request->user()->role,
                ] : null,
            ],

            // Flash messages
            'flash' => [
                'success' => fn () => $request->session()->get('success'),
                'error' => fn () => $request->session()->get('error'),
            ],

            // CSRF token
            'csrf_token' => csrf_token(),

            // App URL
            'app_url' => config('app.url'),
        ]);
    }
}
```

### Controller Examples

**Rendering a Page**

```php
// app/Http/Controllers/DashboardController.php
namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Dashboard', [
            'stats' => [
                'totalProjects' => 42,
                'activeOrders' => 15,
                'revenue' => 125000,
            ],
        ]);
    }
}
```

**With Eloquent Data**

```php
public function show(User $user): Response
{
    return Inertia::render('Users/Show', [
        'user' => $user->only('id', 'name', 'email', 'created_at'),
        'projects' => $user->projects()->get(['id', 'title', 'status']),
    ]);
}
```

**With Pagination**

```php
public function index(): Response
{
    return Inertia::render('Projects/Index', [
        'projects' => Project::query()
            ->latest()
            ->paginate(20)
            ->through(fn ($project) => [
                'id' => $project->id,
                'title' => $project->title,
                'status' => $project->status,
                'created_at' => $project->created_at->toDateString(),
            ]),
    ]);
}
```

**Lazy Loading Props**

```php
public function show(Project $project): Response
{
    return Inertia::render('Projects/Show', [
        'project' => $project,

        // Only loaded when requested
        'comments' => Inertia::lazy(fn () => $project->comments()->latest()->get()),

        // Or use optional
        'stats' => Inertia::optional(fn () => $this->getExpensiveStats($project)),
    ]);
}
```

---

## 3. Client-Side (React) Setup

### Installation

```bash
npm install @inertiajs/react
```

### App Initialization

```tsx
// resources/js/app.tsx
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { Provider } from "react-redux";
import { store } from "./lib/store";

createInertiaApp({
    title: (title) => (title ? `${title} - Karmabhoomi` : "Karmabhoomi"),

    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        ),

    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(
            <Provider store={store}>
                <App {...props} />
            </Provider>,
        );
    },

    progress: {
        color: "#4B5563",
        showSpinner: true,
    },
});
```

### Page Component

```tsx
// resources/js/Pages/Dashboard.tsx
import { Head } from "@inertiajs/react";
import AppLayout from "@/Layouts/AppLayout";

interface DashboardProps {
    auth: {
        user: User;
    };
    stats: {
        totalProjects: number;
        activeOrders: number;
        revenue: number;
    };
}

export default function Dashboard({ auth, stats }: DashboardProps) {
    return (
        <>
            <Head title="Dashboard" />

            <div className="container">
                <h1>Welcome, {auth.user.name}!</h1>

                <div className="stats-grid">
                    <div className="stat-card">
                        <h3>Projects</h3>
                        <p>{stats.totalProjects}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Active Orders</h3>
                        <p>{stats.activeOrders}</p>
                    </div>
                    <div className="stat-card">
                        <h3>Revenue</h3>
                        <p>${stats.revenue.toLocaleString()}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

// Assign layout
Dashboard.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
```

---

## 4. Routing & Navigation

### Links

```tsx
import { Link } from "@inertiajs/react";

function Navigation() {
    return (
        <nav>
            {/* Standard link */}
            <Link href="/dashboard">Dashboard</Link>

            {/* With active state */}
            <Link
                href="/projects"
                className={route().current("projects.*") ? "active" : ""}
            >
                Projects
            </Link>

            {/* With method (POST, PUT, DELETE) */}
            <Link href="/logout" method="post" as="button">
                Logout
            </Link>

            {/* Preserve scroll position */}
            <Link href="/projects" preserveScroll>
                Projects
            </Link>

            {/* With data */}
            <Link href="/search" data={{ query: "react" }}>
                Search
            </Link>
        </nav>
    );
}
```

### Programmatic Navigation

```tsx
import { router } from "@inertiajs/react";

function Component() {
    const handleClick = () => {
        // Navigate
        router.visit("/dashboard");

        // With options
        router.visit("/projects", {
            method: "get",
            data: { filter: "active" },
            preserveScroll: true,
            preserveState: true,
            only: ["projects"], // Only reload 'projects' prop
            onSuccess: () => console.log("Success!"),
            onError: (errors) => console.error(errors),
        });

        // POST request
        router.post("/projects", { title: "New Project" });

        // PUT request
        router.put(`/projects/${id}`, data);

        // DELETE request
        router.delete(`/projects/${id}`);

        // Reload current page
        router.reload();

        // Reload with options
        router.reload({ only: ["projects"] });
    };

    return <button onClick={handleClick}>Navigate</button>;
}
```

### Route Helper (Ziggy)

```tsx
import route from "ziggy-js";

function Navigation() {
    return (
        <nav>
            {/* Named routes */}
            <Link href={route("dashboard")}>Dashboard</Link>

            {/* With parameters */}
            <Link href={route("projects.show", { project: 1 })}>
                Project #1
            </Link>

            {/* Check current route */}
            {route().current("dashboard") && <span>Active</span>}

            {/* Check route pattern */}
            {route().current("projects.*") && <span>Projects section</span>}
        </nav>
    );
}
```

---

## 5. Sharing Data (Props)

### Accessing Props

```tsx
import { usePage } from "@inertiajs/react";

function Component() {
    // Get all page props
    const { props } = usePage();

    // Destructure specific props
    const { auth, flash } = usePage().props;

    // Type-safe with TypeScript
    const { auth, flash } = usePage<PageProps>().props;

    return (
        <div>
            <p>User: {auth.user?.name}</p>
            {flash.success && (
                <div className="alert-success">{flash.success}</div>
            )}
        </div>
    );
}
```

### Shared Data (Global)

```php
// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'auth' => [
            'user' => $request->user(),
        ],
        'flash' => [
            'success' => $request->session()->get('success'),
            'error' => $request->session()->get('error'),
        ],
    ]);
}
```

### Page-Specific Props

```php
// Controller
return Inertia::render('Projects/Index', [
    'projects' => Project::all(),
    'filters' => $request->only('search', 'status'),
]);
```

```tsx
// Component
interface ProjectsIndexProps extends PageProps {
    projects: Project[];
    filters: {
        search?: string;
        status?: string;
    };
}

export default function ProjectsIndex({
    projects,
    filters,
}: ProjectsIndexProps) {
    return <div>...</div>;
}
```

### Lazy Props

```php
// Load only when requested
return Inertia::render('Projects/Show', [
    'project' => $project,
    'comments' => Inertia::lazy(fn () => $project->comments),
]);
```

```tsx
// Request lazy props
useEffect(() => {
    router.reload({ only: ["comments"] });
}, []);
```

---

## 6. Forms & Validation

### Using useForm Hook

```tsx
import { useForm } from "@inertiajs/react";

function CreateProject() {
    const { data, setData, post, processing, errors, reset } = useForm({
        title: "",
        description: "",
        status: "active",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/projects", {
            onSuccess: () => {
                reset();
                alert("Project created!");
            },
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label>
                <input
                    value={data.title}
                    onChange={(e) => setData("title", e.target.value)}
                />
                {errors.title && <span className="error">{errors.title}</span>}
            </div>

            <div>
                <label>Description</label>
                <textarea
                    value={data.description}
                    onChange={(e) => setData("description", e.target.value)}
                />
                {errors.description && (
                    <span className="error">{errors.description}</span>
                )}
            </div>

            <div>
                <label>Status</label>
                <select
                    value={data.status}
                    onChange={(e) => setData("status", e.target.value)}
                >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                </select>
            </div>

            <button type="submit" disabled={processing}>
                {processing ? "Creating..." : "Create Project"}
            </button>
        </form>
    );
}
```

### File Uploads

```tsx
function UploadForm() {
    const { data, setData, post, progress } = useForm({
        avatar: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/profile/avatar", {
            forceFormData: true, // Force multipart/form-data
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={(e) => setData("avatar", e.target.files?.[0] || null)}
            />

            {progress && (
                <progress value={progress.percentage} max="100">
                    {progress.percentage}%
                </progress>
            )}

            <button type="submit">Upload</button>
        </form>
    );
}
```

### Laravel Validation

```php
// Controller
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'required|string',
        'status' => 'required|in:active,completed,pending',
    ]);

    Project::create($validated);

    return redirect()->route('projects.index')
        ->with('success', 'Project created successfully!');
}
```

---

## 7. Asset Management

### Vite Configuration

```js
// vite.config.js
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/js/app.tsx", "resources/scss/app.scss"],
            refresh: true,
        }),
        react(),
    ],
    resolve: {
        alias: {
            "@": "/resources/js",
        },
    },
});
```

### Including Assets

```tsx
// Import images
import logo from "@/images/logo.png";

function Component() {
    return <img src={logo} alt="Logo" />;
}

// Import styles
import "@/scss/components/button.scss";
```

---

## 8. Advanced Patterns

### Persistent Layouts

```tsx
// Layout component
export default function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="app-layout">
            <Header />
            <Sidebar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}

// Page component
function Dashboard() {
    return <div>Dashboard content</div>;
}

Dashboard.layout = (page: React.ReactNode) => <AppLayout>{page}</AppLayout>;
```

### Nested Layouts

```tsx
// Outer layout
function AppLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

// Inner layout
function ProjectLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <ProjectSidebar />
            {children}
        </div>
    );
}

// Page with nested layouts
function ProjectShow() {
    return <div>Project details</div>;
}

ProjectShow.layout = (page: React.ReactNode) => (
    <AppLayout>
        <ProjectLayout>{page}</ProjectLayout>
    </AppLayout>
);
```

### Remember State

```tsx
import { router } from "@inertiajs/react";

function SearchableList() {
    const [search, setSearch] = useState("");

    // Remember state across visits
    useEffect(() => {
        router.remember({ search });
    }, [search]);

    return <input value={search} onChange={(e) => setSearch(e.target.value)} />;
}
```

---

## 9. Performance Optimization

### Partial Reloads

```tsx
// Only reload specific props
router.reload({ only: ["projects"] });

// Reload everything except specific props
router.reload({ except: ["users"] });
```

### Preserve Scroll

```tsx
<Link href="/projects" preserveScroll>
    Projects
</Link>;

router.visit("/projects", { preserveScroll: true });
```

### Preserve State

```tsx
<Link href="/projects" preserveState>
    Projects
</Link>;

router.visit("/projects", { preserveState: true });
```

---

## 10. Debugging

### Check Inertia Responses

```tsx
import { router } from "@inertiajs/react";

router.on("success", (event) => {
    console.log("Page loaded:", event.detail.page);
});

router.on("error", (event) => {
    console.error("Errors:", event.detail.errors);
});
```

### Inspect Props

```tsx
function Component() {
    const page = usePage();
    console.log("All props:", page.props);
    console.log("Component:", page.component);
    console.log("URL:", page.url);

    return <div>...</div>;
}
```

---

## Practice Exercises

### Exercise 1: CRUD Application

Build a complete CRUD for Projects with:

- List with pagination
- Create form
- Edit form
- Delete confirmation
- Search and filters

### Exercise 2: Multi-Step Form

Create a wizard-style form with:

- Multiple steps
- Progress indicator
- Validation per step
- Save and resume later

### Exercise 3: File Upload

Build file upload with:

- Drag and drop
- Progress indicator
- Preview before upload
- Multiple files

---

## Next Steps

- Continue to [Forms and Validation](./06_FORMS_VALIDATION.md)
- Learn [Component Patterns](./07_COMPONENT_PATTERNS.md)
- Explore [Testing](./08_TESTING.md)
