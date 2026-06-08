# React + Laravel + Inertia: Complete Learning Guide

## 🎯 Learning Goals

Master React fundamentals to advanced patterns and understand how React integrates with Laravel + Inertia.js in this project. Build real features, test them, and deploy confidently.

---

## 📋 Table of Contents

1. [Prerequisites & Environment Setup](#1-prerequisites--environment-setup)
2. [React Fundamentals](#2-react-fundamentals)
3. [React Hooks Deep Dive](#3-react-hooks-deep-dive)
4. [TypeScript with React](#4-typescript-with-react)
5. [State Management (Redux)](#5-state-management-redux)
6. [Laravel + Inertia.js Integration](#6-laravel--inertiajs-integration)
7. [Routing & Navigation](#7-routing--navigation)
8. [Forms & Data Handling](#8-forms--data-handling)
9. [Component Patterns](#9-component-patterns)
10. [Styling & UI Components](#10-styling--ui-components)
11. [Testing Strategies](#11-testing-strategies)
12. [Performance Optimization](#12-performance-optimization)
13. [Debugging & Troubleshooting](#13-debugging--troubleshooting)
14. [Practical Exercises](#14-practical-exercises)
15. [Project-Specific Patterns](#15-project-specific-patterns)

---

## 1) Prerequisites & Environment Setup

### What You Need

- Node.js 18+ and npm/yarn
- PHP 8.1+ and Composer
- Code editor (VS Code recommended)
- Basic JavaScript knowledge
- Basic Laravel knowledge

### Initial Setup

```bash
# Clone repo and install dependencies
cd /var/www/html/karmabhoomi_v1
composer install
npm install

# Configure environment
cp .env.example .env
php artisan key:generate
php artisan migrate --seed

# Start development servers
php artisan serve          # Terminal 1: Laravel server
npm run dev               # Terminal 2: Vite dev server
```

### Verify Setup

- Open http://localhost:8000
- Login with seeded credentials (check database/seeders)
- React DevTools extension installed in browser
- Redux DevTools extension installed

---

## 2) React Fundamentals

### 2.1) What is React?

React is a JavaScript library for building user interfaces. Key concepts:

- **Component-based**: UI is split into reusable pieces
- **Declarative**: Describe what UI should look like, React handles updates
- **Virtual DOM**: Efficient rendering through diffing algorithm

### 2.2) JSX Syntax

JSX lets you write HTML-like code in JavaScript:

```tsx
// JSX - looks like HTML
const element = <h1 className="title">Hello World</h1>;

// Compiles to:
const element = React.createElement(
    "h1",
    { className: "title" },
    "Hello World",
);
```

**Key Rules:**

- Use `className` instead of `class`
- Use `htmlFor` instead of `for`
- Self-closing tags must end with `/>`
- Wrap multiple elements in a fragment: `<>...</>`
- JavaScript expressions in `{}`

**Example:**

```tsx
function Greeting({ name }: { name: string }) {
    const time = new Date().getHours();
    const greeting = time < 12 ? "Good morning" : "Good evening";

    return (
        <div className="greeting">
            <h1>
                {greeting}, {name}!
            </h1>
            <p>Current time: {time}:00</p>
        </div>
    );
}
```

### 2.3) Components

Components are functions that return JSX.

**Function Component (Preferred):**

```tsx
// Simple component
function Welcome() {
    return <h1>Welcome!</h1>;
}

// Component with props
function Button({ label, onClick }: { label: string; onClick: () => void }) {
    return (
        <button className="btn" onClick={onClick}>
            {label}
        </button>
    );
}

// Usage
<Button label="Click me" onClick={() => alert("Clicked!")} />;
```

**Component Composition:**

```tsx
function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="card">
            <div className="card-body">{children}</div>
        </div>
    );
}

// Usage
<Card>
    <h3>Title</h3>
    <p>Content goes here</p>
</Card>;
```

### 2.4) Props

Props are read-only inputs to components.

```tsx
interface UserCardProps {
    name: string;
    email: string;
    role: "admin" | "user" | "vendor";
    avatar?: string; // optional
}

function UserCard({ name, email, role, avatar }: UserCardProps) {
    return (
        <div className="user-card">
            {avatar && <img src={avatar} alt={name} />}
            <h3>{name}</h3>
            <p>{email}</p>
            <span className={`badge badge-${role}`}>{role}</span>
        </div>
    );
}

// Usage
<UserCard name="John Doe" email="john@example.com" role="admin" />;
```

**Props Best Practices:**

- Keep props minimal and focused
- Use TypeScript interfaces for type safety
- Destructure props in function parameters
- Provide default values when appropriate

### 2.5) State with useState

State is mutable data that triggers re-renders.

```tsx
import { useState } from "react";

function Counter() {
    // Declare state variable and setter
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}
```

**State with Objects:**

```tsx
function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: 0,
    });

    const updateField = (field: string, value: any) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    return (
        <form>
            <input
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
            />
            <input
                type="email"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
            />
        </form>
    );
}
```

### 2.6) Events

React uses synthetic events (cross-browser compatible).

```tsx
function EventExamples() {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Button clicked");
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Input value:", e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}
```

### 2.7) Lists & Keys

Render arrays using map with unique keys.

```tsx
interface User {
    id: number;
    name: string;
    email: string;
}

function UserList({ users }: { users: User[] }) {
    return (
        <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong> - {user.email}
                </li>
            ))}
        </ul>
    );
}
```

**Key Rules:**

- Keys must be unique among siblings
- Use stable identifiers (IDs), not array indices
- Keys help React identify which items changed

### 2.8) Conditional Rendering

```tsx
function Dashboard({ user }: { user: User | null }) {
    // Early return
    if (!user) {
        return <div>Please log in</div>;
    }

    return (
        <div>
            {/* Ternary operator */}
            {user.role === "admin" ? <AdminPanel /> : <UserPanel />}

            {/* Logical AND */}
            {user.isVerified && <VerifiedBadge />}

            {/* Nullish coalescing */}
            <p>Welcome, {user.name ?? "Guest"}</p>
        </div>
    );
}
```

---

## 3) React Hooks Deep Dive

### 3.1) useState - Managing State

```tsx
// Simple state
const [count, setCount] = useState(0);

// State with function (lazy initialization)
const [data, setData] = useState(() => {
    const saved = localStorage.getItem("data");
    return saved ? JSON.parse(saved) : [];
});

// Functional updates (when new state depends on previous)
setCount((prev) => prev + 1);

// Multiple state variables
const [name, setName] = useState("");
const [age, setAge] = useState(0);
const [address, setAddress] = useState({ city: "", zip: "" });
```

### 3.2) useEffect - Side Effects

```tsx
import { useEffect } from "react";

function DataFetcher({ userId }: { userId: number }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Run after every render
    useEffect(() => {
        console.log("Component rendered");
    });

    // Run once on mount
    useEffect(() => {
        console.log("Component mounted");
        return () => console.log("Component unmounted");
    }, []);

    // Run when userId changes
    useEffect(() => {
        setLoading(true);
        fetch(`/api/users/${userId}`)
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
                setLoading(false);
            });
    }, [userId]);

    // Cleanup function
    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Tick");
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (loading) return <div>Loading...</div>;
    return <div>User: {user?.name}</div>;
}
```

**useEffect Rules:**

- Declare dependencies in array
- Clean up subscriptions/timers in return function
- Avoid infinite loops (missing dependencies)

### 3.3) useRef - Persistent References

```tsx
import { useRef, useEffect } from "react";

function TextInput() {
    const inputRef = useRef<HTMLInputElement>(null);
    const renderCount = useRef(0);

    useEffect(() => {
        // Focus input on mount
        inputRef.current?.focus();

        // Track renders without causing re-render
        renderCount.current += 1;
    });

    return (
        <div>
            <input ref={inputRef} />
            <p>Renders: {renderCount.current}</p>
        </div>
    );
}
```

### 3.4) useMemo - Memoize Expensive Calculations

```tsx
import { useMemo } from "react";

function DataTable({ data, filter }: { data: any[]; filter: string }) {
    // Only recalculate when data or filter changes
    const filteredData = useMemo(() => {
        console.log("Filtering data...");
        return data.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [data, filter]);

    return (
        <table>
            {filteredData.map((item) => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                </tr>
            ))}
        </table>
    );
}
```

### 3.5) useCallback - Memoize Functions

```tsx
import { useCallback } from "react";

function Parent() {
    const [count, setCount] = useState(0);

    // Function recreated on every render
    const handleClick = () => {
        setCount((c) => c + 1);
    };

    // Function memoized, only recreated if dependencies change
    const handleClickMemo = useCallback(() => {
        setCount((c) => c + 1);
    }, []);

    return <Child onClick={handleClickMemo} />;
}
```

### 3.6) useContext - Share Data Without Props

```tsx
import { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext<"light" | "dark">("light");

// Provider component
function App() {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    return (
        <ThemeContext.Provider value={theme}>
            <Toolbar />
            <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
                Toggle Theme
            </button>
        </ThemeContext.Provider>
    );
}

// Consumer component
function ThemedButton() {
    const theme = useContext(ThemeContext);
    return <button className={`btn-${theme}`}>Button</button>;
}
```

### 3.7) useReducer - Complex State Logic

```tsx
import { useReducer } from "react";

type State = { count: number; history: number[] };
type Action = { type: "increment" } | { type: "decrement" } | { type: "reset" };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return {
                count: state.count + 1,
                history: [...state.history, state.count + 1],
            };
        case "decrement":
            return {
                count: state.count - 1,
                history: [...state.history, state.count - 1],
            };
        case "reset":
            return { count: 0, history: [0] };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0, history: [0] });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
            <p>History: {state.history.join(", ")}</p>
        </div>
    );
}
```

### 3.8) Custom Hooks

```tsx
// resources/js/hooks/useLocalStorage.ts
import { useState, useEffect } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = (value: T | ((val: T) => T)) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            setStoredValue(valueToStore);
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.error(error);
        }
    };

    return [storedValue, setValue] as const;
}

// Usage
function Settings() {
    const [settings, setSettings] = useLocalStorage("app-settings", {
        theme: "light",
        notifications: true,
    });

    return (
        <div>
            <button onClick={() => setSettings({ ...settings, theme: "dark" })}>
                Dark Mode
            </button>
        </div>
    );
}
```

```tsx
// resources/js/hooks/useAuth.ts
import { usePage } from "@inertiajs/react";

export function useAuth() {
    const { props } = usePage();
    const user = (props as any).auth?.user;

    return {
        user,
        isAuthenticated: !!user,
        isAdmin: user?.role === "admin",
        isVendor: user?.role === "vendor",
    };
}

// Usage
function Dashboard() {
    const { user, isAdmin } = useAuth();

    return (
        <div>
            <h1>Welcome, {user?.name}</h1>
            {isAdmin && <AdminPanel />}
        </div>
    );
}
```

---

## 4) TypeScript with React

### 4.1) Why TypeScript?

- Catch errors at compile-time
- Better IDE autocomplete
- Self-documenting code
- Refactoring confidence

### 4.2) Basic Types

```tsx
// Primitives
const name: string = "John";
const age: number = 30;
const isActive: boolean = true;

// Arrays
const numbers: number[] = [1, 2, 3];
const names: Array<string> = ["Alice", "Bob"];

// Objects
const user: { name: string; age: number } = {
    name: "John",
    age: 30,
};

// Union types
type Role = "admin" | "user" | "vendor";
const role: Role = "admin";

// Optional properties
interface User {
    id: number;
    name: string;
    email?: string; // optional
}
```

### 4.3) Component Props Types

```tsx
// Interface for props
interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
    children?: React.ReactNode;
}

function Button({
    label,
    onClick,
    variant = "primary",
    disabled = false,
}: ButtonProps) {
    return (
        <button
            className={`btn btn-${variant}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

// Type for props (alternative)
type CardProps = {
    title: string;
    description?: string;
    children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ title, description, children }) => {
    return (
        <div className="card">
            <h3>{title}</h3>
            {description && <p>{description}</p>}
            {children}
        </div>
    );
};
```

### 4.4) Event Types

```tsx
function EventHandlers() {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Click", e.currentTarget);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Change", e.target.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submit");
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("Enter pressed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} onKeyDown={handleKeyDown} />
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}
```

### 4.5) Generic Types

```tsx
// Generic component
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T extends { id: number }>({ items, renderItem }: ListProps<T>) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

// Usage
interface User {
    id: number;
    name: string;
}

<List<User> items={users} renderItem={(user) => <span>{user.name}</span>} />;
```

### 4.6) Shared Types (Project Structure)

```tsx
// resources/js/types/index.ts
export interface User {
    id: number;
    name: string;
    email: string;
    role: "admin" | "user" | "vendor";
    email_verified_at?: string;
    created_at: string;
    updated_at: string;
}

export interface Project {
    id: number;
    name: string;
    description: string;
    status: "active" | "completed" | "archived";
    user_id: number;
    user?: User;
}

export interface PaginatedResponse<T> {
    data: T[];
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
}

export interface PageProps {
    auth: {
        user: User | null;
    };
    flash?: {
        success?: string;
        error?: string;
    };
}
```

---

## 5) State Management (Redux)

### 5.1) Redux Toolkit Setup

```tsx
// resources/js/lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/uiSlice";
import projectsReducer from "./slices/projectsSlice";

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        projects: projectsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 5.2) Creating Slices

```tsx
// resources/js/lib/slices/projectsSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import type { Project } from "@/types";

interface ProjectsState {
    items: Project[];
    loading: boolean;
    error: string | null;
    selectedId: number | null;
}

const initialState: ProjectsState = {
    items: [],
    loading: false,
    error: null,
    selectedId: null,
};

// Async thunk for fetching projects
export const fetchProjects = createAsyncThunk(
    "projects/fetchProjects",
    async () => {
        const response = await fetch("/api/projects");
        return response.json();
    },
);

const projectsSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setSelected: (state, action: PayloadAction<number>) => {
            state.selectedId = action.payload;
        },
        addProject: (state, action: PayloadAction<Project>) => {
            state.items.push(action.payload);
        },
        removeProject: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((p) => p.id !== action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProjects.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProjects.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchProjects.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Failed to fetch";
            });
    },
});

export const { setSelected, addProject, removeProject } = projectsSlice.actions;
export default projectsSlice.reducer;
```

### 5.3) Typed Hooks

```tsx
// resources/js/hooks/redux.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/lib/store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### 5.4) Using Redux in Components

```tsx
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchProjects, setSelected } from "@/lib/slices/projectsSlice";

function ProjectList() {
    const dispatch = useAppDispatch();
    const { items, loading, error, selectedId } = useAppSelector(
        (state) => state.projects,
    );

    useEffect(() => {
        dispatch(fetchProjects());
    }, [dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <ul>
            {items.map((project) => (
                <li
                    key={project.id}
                    onClick={() => dispatch(setSelected(project.id))}
                    className={selectedId === project.id ? "selected" : ""}
                >
                    {project.name}
                </li>
            ))}
        </ul>
    );
}
```

---

## 6) Laravel + Inertia.js Integration

### 6.1) How Inertia Works

1. Laravel route returns `Inertia::render('ComponentName', $props)`
2. Inertia sends JSON response with component name and props
3. React mounts the component from `resources/js/Pages/...`
4. Subsequent navigation uses XHR (SPA-like)

### 6.2) Server-Side (Laravel)

```php
// routes/web.php
Route::middleware(['auth'])->group(function () {
    Route::get('/projects', [ProjectController::class, 'index'])->name('projects.index');
    Route::get('/projects/{project}', [ProjectController::class, 'show'])->name('projects.show');
});

// app/Http/Controllers/ProjectController.php
namespace App\Http\Controllers;

use App\Models\Project;
use Inertia\Inertia;
use Inertia\Response;

class ProjectController extends Controller
{
    public function index(): Response
    {
        $projects = Project::with('user')
            ->latest()
            ->paginate(10);

        return Inertia::render('Projects/Index', [
            'projects' => $projects,
            'filters' => request()->only(['search', 'status']),
        ]);
    }

    public function show(Project $project): Response
    {
        return Inertia::render('Projects/Show', [
            'project' => $project->load('user', 'tasks'),
        ]);
    }
}
```

### 6.3) Client-Side (React)

```tsx
// resources/js/Pages/Projects/Index.tsx
import { Head, Link } from "@inertiajs/react";
import type { PageProps, Project, PaginatedResponse } from "@/types";

interface ProjectsIndexProps extends PageProps {
    projects: PaginatedResponse<Project>;
    filters: {
        search?: string;
        status?: string;
    };
}

export default function Index({ projects, filters }: ProjectsIndexProps) {
    return (
        <>
            <Head title="Projects" />

            <div className="container">
                <h1>Projects</h1>

                <div className="project-list">
                    {projects.data.map((project) => (
                        <Link
                            key={project.id}
                            href={`/projects/${project.id}`}
                            className="project-card"
                        >
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <span className={`status-${project.status}`}>
                                {project.status}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="pagination">
                    {Array.from(
                        { length: projects.last_page },
                        (_, i) => i + 1,
                    ).map((page) => (
                        <Link
                            key={page}
                            href={`/projects?page=${page}`}
                            className={
                                page === projects.current_page ? "active" : ""
                            }
                        >
                            {page}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}
```

### 6.4) Sharing Data (Middleware)

```php
// app/Http/Middleware/HandleInertiaRequests.php
public function share(Request $request): array
{
    return array_merge(parent::share($request), [
        'auth' => [
            'user' => $request->user() ? [
                'id' => $request->user()->id,
                'name' => $request->user()->name,
                'email' => $request->user()->email,
                'role' => $request->user()->role,
            ] : null,
        ],
        'flash' => [
            'success' => fn () => $request->session()->get('success'),
            'error' => fn () => $request->session()->get('error'),
        ],
        'app' => [
            'name' => config('app.name'),
        ],
    ]);
}
```

```tsx
// Access shared data in any component
import { usePage } from "@inertiajs/react";

function Header() {
    const { props } = usePage<PageProps>();
    const user = props.auth.user;

    return (
        <header>
            <h1>{props.app.name}</h1>
            {user && <span>Hello, {user.name}</span>}
            {props.flash.success && (
                <div className="alert">{props.flash.success}</div>
            )}
        </header>
    );
}
```

### 6.5) Layouts

```tsx
// Method 1: Persistent layout (set on page component)
// resources/js/Pages/Dashboard/Index.tsx
import Layout from '@/Layouts';

function Dashboard() {
    return <div>Dashboard content</div>;
}

Dashboard.layout = (page: React.ReactNode) => <Layout>{page}</Layout>;
export default Dashboard;

// Method 2: Wrap in render (more flexible)
// app/Http/Controllers/DashboardController.php
return Inertia::render('Dashboard/Index')
    ->layout('Layouts/AppLayout');
```

---

## 7) Routing & Navigation

### 7.1) Inertia Links

```tsx
import { Link } from '@inertiajs/react';

// Basic link
<Link href="/dashboard">Dashboard</Link>

// With data (POST request)
<Link href="/projects" method="post" data={{ name: 'New Project' }}>
    Create Project
</Link>

// Preserve scroll position
<Link href="/projects" preserveScroll>Projects</Link>

// Preserve state
<Link href="/projects" preserveState>Projects</Link>

// Replace history (no back button)
<Link href="/projects" replace>Projects</Link>

// Only replace component (keep layout)
<Link href="/projects" only={['projects']}>Projects</Link>
```

### 7.2) Programmatic Navigation

```tsx
import { router } from "@inertiajs/react";

function ProjectActions() {
    const navigateToDashboard = () => {
        router.visit("/dashboard");
    };

    const createProject = () => {
        router.post("/projects", {
            name: "New Project",
            description: "Description",
        });
    };

    const deleteProject = (id: number) => {
        router.delete(`/projects/${id}`, {
            onSuccess: () => alert("Deleted!"),
            onError: (errors) => console.error(errors),
        });
    };

    return (
        <div>
            <button onClick={navigateToDashboard}>Go to Dashboard</button>
            <button onClick={createProject}>Create</button>
            <button onClick={() => deleteProject(1)}>Delete</button>
        </div>
    );
}
```

### 7.3) Active Links

```tsx
import { Link, usePage } from "@inertiajs/react";

function Navigation() {
    const { url } = usePage();

    const isActive = (path: string) => url.startsWith(path);

    return (
        <nav>
            <Link
                href="/dashboard"
                className={isActive("/dashboard") ? "active" : ""}
            >
                Dashboard
            </Link>
            <Link
                href="/projects"
                className={isActive("/projects") ? "active" : ""}
            >
                Projects
            </Link>
        </nav>
    );
}
```

---

## 8) Forms & Data Handling

### 8.1) Inertia Form Helper

```tsx
import { useForm } from "@inertiajs/react";

function CreateProject() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        description: "",
        status: "active" as const,
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
                <label>Name</label>
                <input
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                />
                {errors.name && <span className="error">{errors.name}</span>}
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
                    onChange={(e) => setData("status", e.target.value as any)}
                >
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="archived">Archived</option>
                </select>
            </div>

            <button type="submit" disabled={processing}>
                {processing ? "Creating..." : "Create Project"}
            </button>
        </form>
    );
}
```

### 8.2) File Uploads

```tsx
function UploadForm() {
    const { data, setData, post, progress } = useForm({
        file: null as File | null,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post("/upload", {
            forceFormData: true,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="file"
                onChange={(e) => setData("file", e.target.files![0])}
            />

            {progress && <progress value={progress.percentage} max="100" />}

            <button type="submit">Upload</button>
        </form>
    );
}
```

### 8.3) Form Validation (Server-Side)

```php
// app/Http/Controllers/ProjectController.php
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'required|string',
        'status' => 'required|in:active,completed,archived',
    ]);

    $project = Project::create($validated);

    return redirect()->route('projects.show', $project)
        ->with('success', 'Project created successfully!');
}
```

---

## 9) Component Patterns

### 9.1) Compound Components

```tsx
// Card component with sub-components
const Card = ({ children }: { children: React.ReactNode }) => {
    return <div className="card">{children}</div>;
};

Card.Header = ({ children }: { children: React.ReactNode }) => {
    return <div className="card-header">{children}</div>;
};

Card.Body = ({ children }: { children: React.ReactNode }) => {
    return <div className="card-body">{children}</div>;
};

Card.Footer = ({ children }: { children: React.ReactNode }) => {
    return <div className="card-footer">{children}</div>;
};

// Usage
<Card>
    <Card.Header>
        <h3>Title</h3>
    </Card.Header>
    <Card.Body>
        <p>Content</p>
    </Card.Body>
    <Card.Footer>
        <button>Action</button>
    </Card.Footer>
</Card>;
```

### 9.2) Render Props

```tsx
interface DataFetcherProps<T> {
    url: string;
    children: (
        data: T | null,
        loading: boolean,
        error: string | null,
    ) => React.ReactNode;
}

function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetch(url)
            .then((res) => res.json())
            .then(setData)
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [url]);

    return <>{children(data, loading, error)}</>;
}

// Usage
<DataFetcher<User[]> url="/api/users">
    {(data, loading, error) => {
        if (loading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;
        return (
            <ul>
                {data?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }}
</DataFetcher>;
```

### 9.3) Higher-Order Components (HOC)

```tsx
// HOC to add loading state
function withLoading<P extends object>(Component: React.ComponentType<P>) {
    return function WithLoadingComponent({
        isLoading,
        ...props
    }: P & { isLoading: boolean }) {
        if (isLoading) return <div>Loading...</div>;
        return <Component {...(props as P)} />;
    };
}

// Usage
const UserListWithLoading = withLoading(UserList);
<UserListWithLoading isLoading={loading} users={users} />;
```

---

## 10) Styling & UI Components

### 10.1) Tailwind Utilities

```tsx
function StyledComponents() {
    return (
        <div>
            {/* Layout */}
            <div className="flex items-center justify-between p-4">
                <h1 className="text-2xl font-bold">Title</h1>
                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Action
                </button>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 bg-white shadow rounded">Card 1</div>
                <div className="p-4 bg-white shadow rounded">Card 2</div>
                <div className="p-4 bg-white shadow rounded">Card 3</div>
            </div>

            {/* Responsive */}
            <div className="text-sm md:text-base lg:text-lg">
                Responsive text
            </div>

            {/* Dark mode */}
            <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
                Dark mode support
            </div>
        </div>
    );
}
```

### 10.2) Component Library (Project Structure)

```tsx
// resources/js/components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
    'inline-flex items-center justify-center rounded-md font-medium transition-colors',
    {
        variants: {
            variant: {
                default: 'bg-primary text-white hover:bg-primary/90',
                secondary: 'bg-secondary text-white hover:bg-secondary/90',
                outline: 'border border-input bg-background hover:bg-accent',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
            },
            size: {
                default: 'h-10 px-4 py-2',
                sm: 'h-9 px-3',
                lg: 'h-11 px-8',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
    return (
        <button
            className={buttonVariants({ variant, size, className })}
            {...props}
        />
    );
}

// Usage
<Button>Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline" size="lg">Large Outline</Button>
```

---

## 11) Testing Strategies

### 11.1) Component Testing

```tsx
// resources/js/components/Button.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

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
        render(<Button disabled>Click me</Button>);
        expect(screen.getByText("Click me")).toBeDisabled();
    });
});
```

### 11.2) Hook Testing

```tsx
import { renderHook, act } from "@testing-library/react";
import { useLocalStorage } from "@/hooks/useLocalStorage";

describe("useLocalStorage", () => {
    beforeEach(() => {
        localStorage.clear();
    });

    it("returns initial value", () => {
        const { result } = renderHook(() => useLocalStorage("key", "initial"));
        expect(result.current[0]).toBe("initial");
    });

    it("updates value", () => {
        const { result } = renderHook(() => useLocalStorage("key", "initial"));
        act(() => {
            result.current[1]("updated");
        });
        expect(result.current[0]).toBe("updated");
        expect(localStorage.getItem("key")).toBe(JSON.stringify("updated"));
    });
});
```

### 11.3) Integration Testing (Inertia)

```php
// tests/Feature/ProjectsTest.php
public function test_user_can_view_projects_page()
{
    $user = User::factory()->create();
    $projects = Project::factory()->count(3)->create();

    $response = $this->actingAs($user)->get('/projects');

    $response->assertStatus(200);
    $response->assertInertia(fn ($page) => $page
        ->component('Projects/Index')
        ->has('projects.data', 3)
    );
}
```

---

## 12) Performance Optimization

### 12.1) React.memo

```tsx
const ExpensiveComponent = React.memo(function ExpensiveComponent({
    data,
}: {
    data: any;
}) {
    console.log("Rendering ExpensiveComponent");
    // Expensive render logic
    return <div>{data}</div>;
});

// Only re-renders when data changes
```

### 12.2) Code Splitting

```tsx
import { lazy, Suspense } from "react";

const HeavyComponent = lazy(() => import("./HeavyComponent"));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <HeavyComponent />
        </Suspense>
    );
}
```

### 12.3) Virtualization (Large Lists)

```tsx
import { FixedSizeList } from "react-window";

function VirtualizedList({ items }: { items: any[] }) {
    const Row = ({ index, style }: any) => (
        <div style={style}>{items[index].name}</div>
    );

    return (
        <FixedSizeList
            height={600}
            itemCount={items.length}
            itemSize={50}
            width="100%"
        >
            {Row}
        </FixedSizeList>
    );
}
```

---

## 13) Debugging & Troubleshooting

### 13.1) React DevTools

- Install React DevTools browser extension
- Inspect component tree
- View props and state
- Profile performance

### 13.2) Common Errors

```tsx
// Error: Cannot read property 'x' of undefined
// Solution: Optional chaining
const name = user?.name;

// Error: Objects are not valid as a React child
// Solution: Convert to string
<div>{JSON.stringify(object)}</div>;

// Error: Maximum update depth exceeded
// Solution: Fix infinite loop in useEffect
useEffect(() => {
    setData(newData);
}, [data]); // Remove 'data' from dependencies if it causes loop
```

### 13.3) Debug Console

```tsx
function Component() {
    const value = useSomeHook();

    // Debug hook value
    useEffect(() => {
        console.log("Value changed:", value);
    }, [value]);

    return <div>{value}</div>;
}
```

---

## 14) Practical Exercises

### Exercise 1: Build a Todo List

- Create `resources/js/Pages/Todos/Index.tsx`
- Add CRUD operations (create, read, update, delete)
- Use `useState` for local state
- Add filtering (all, active, completed)
- Persist to backend with Inertia forms

### Exercise 2: User Profile Page

- Fetch user data from server
- Create editable form with validation
- Show avatar upload with preview
- Add success/error notifications
- Write component tests

### Exercise 3: Dashboard Widgets

- Create reusable `Widget` component
- Add Redux slice for dashboard data
- Fetch data on mount with `useEffect`
- Implement loading and error states
- Make responsive with Tailwind

### Exercise 4: Search & Filter

- Build search input with debounce
- Filter list client-side with `useMemo`
- Add URL query params for sharing
- Preserve state on navigation
- Add pagination

---

## 15) Project-Specific Patterns

### 15.1) Page Structure

```
resources/js/Pages/
├── Admin/
│   └── Dashboard/
│       └── Dashboard.tsx
├── Auth/
│   ├── Login.tsx
│   └── Register.tsx
├── Projects/
│   ├── Index.tsx
│   ├── Show.tsx
│   └── Create.tsx
└── Dashboard/
    └── Index.tsx
```

### 15.2) Component Structure

```
resources/js/components/
├── ui/               # Base UI components
│   ├── Button.tsx
│   ├── Input.tsx
│   └── Card.tsx
├── dashboard/        # Dashboard-specific
│   ├── StatsCard.tsx
│   └── RevenueChart.tsx
└── common/          # Shared components
    ├── Header.tsx
    └── Sidebar.tsx
```

### 15.3) Code Organization Best Practices

- One component per file
- Co-locate tests with components (`Button.test.tsx` next to `Button.tsx`)
- Use index files for cleaner imports
- Keep components small (<200 lines)
- Extract logic to custom hooks

---

## 🎓 Learning Checklist

- [ ] Understand JSX syntax and component basics
- [ ] Master useState and useEffect
- [ ] Write TypeScript interfaces for props
- [ ] Create custom hooks
- [ ] Set up Redux slice and use in components
- [ ] Build Inertia page with server props
- [ ] Handle forms with validation
- [ ] Write component tests
- [ ] Optimize performance with React.memo
- [ ] Debug with React DevTools
- [ ] Complete all 4 practical exercises
- [ ] Build a feature end-to-end (route → controller → page → tests)

---

## 📚 Additional Resources

- React Official Docs: https://react.dev
- Inertia.js Docs: https://inertiajs.com
- Redux Toolkit: https://redux-toolkit.js.org
- TypeScript Handbook: https://www.typescriptlang.org/docs
- Testing Library: https://testing-library.com/react
- Laracasts (Laravel + Inertia): https://laracasts.com

---

## 🚀 Next Steps

1. Work through this guide section by section
2. Complete practical exercises
3. Build features in this project
4. Review existing code in `resources/js/Pages`
5. Contribute to the codebase with tests

---

**Ready to start? Begin with Section 2 (React Fundamentals) and work your way through! 🎉**
