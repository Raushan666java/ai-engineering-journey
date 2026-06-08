# TypeScript with React — Complete Guide

## Table of Contents

1. TypeScript Basics for React
2. Component Props Typing
3. Event Handling Types
4. Hooks with TypeScript
5. Generic Components
6. Utility Types
7. Advanced Patterns
8. Type Definitions for This Project
9. Common Patterns & Examples

---

## 1. TypeScript Basics for React

### Setting Up TypeScript

```json
// tsconfig.json
{
    "compilerOptions": {
        "target": "ES2020",
        "lib": ["ES2020", "DOM", "DOM.Iterable"],
        "jsx": "react-jsx",
        "module": "ESNext",
        "moduleResolution": "bundler",
        "strict": true,
        "esModuleInterop": true,
        "skipLibCheck": true,
        "resolveJsonModule": true
    }
}
```

### Basic Types

```tsx
// Primitives
const name: string = "John";
const age: number = 25;
const isActive: boolean = true;
const nothing: null = null;
const notDefined: undefined = undefined;

// Arrays
const numbers: number[] = [1, 2, 3];
const strings: Array<string> = ["a", "b", "c"];

// Objects
const user: { name: string; age: number } = {
    name: "John",
    age: 25,
};

// Union types
let value: string | number = "hello";
value = 42; // OK

// Literal types
let status: "idle" | "loading" | "success" | "error" = "idle";

// Any (avoid when possible)
let anything: any = "hello";
anything = 42; // No error

// Unknown (safer than any)
let something: unknown = "hello";
if (typeof something === "string") {
    console.log(something.toUpperCase()); // OK after type check
}
```

### Interfaces vs Types

```tsx
// Interface (preferred for objects)
interface User {
    id: number;
    name: string;
    email: string;
    role?: "admin" | "user"; // optional
}

// Type alias
type User = {
    id: number;
    name: string;
    email: string;
    role?: "admin" | "user";
};

// Extending interfaces
interface AdminUser extends User {
    permissions: string[];
}

// Intersection types
type AdminUser = User & {
    permissions: string[];
};

// Interface can be reopened (declaration merging)
interface User {
    avatar?: string; // Adds to existing User interface
}

// Type cannot be reopened
// Use interfaces for objects, types for unions/primitives
```

---

## 2. Component Props Typing

### Function Component Props

```tsx
// Using interface (recommended)
interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: "primary" | "secondary";
    disabled?: boolean;
}

function Button({
    label,
    onClick,
    variant = "primary",
    disabled,
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

// Inline type (for simple components)
function Greeting({ name }: { name: string }) {
    return <h1>Hello, {name}!</h1>;
}

// React.FC (includes children automatically, but not recommended)
const Button: React.FC<ButtonProps> = ({ label, onClick, children }) => {
    return (
        <button onClick={onClick}>
            {label}
            {children}
        </button>
    );
};
```

### Children Props

```tsx
import { ReactNode } from "react";

interface CardProps {
    title: string;
    children: ReactNode; // Any renderable content
}

function Card({ title, children }: CardProps) {
    return (
        <div className="card">
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
}

// More specific children types
interface TabsProps {
    children: React.ReactElement<TabProps> | React.ReactElement<TabProps>[];
}
```

### Props with Spread Attributes

```tsx
import { ButtonHTMLAttributes } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    isLoading?: boolean;
}

function CustomButton({
    variant = "primary",
    isLoading,
    children,
    ...rest
}: CustomButtonProps) {
    return (
        <button className={`btn btn-${variant}`} disabled={isLoading} {...rest}>
            {isLoading ? "Loading..." : children}
        </button>
    );
}

// Usage: all button props are available
<CustomButton variant="primary" onClick={handleClick} type="submit">
    Save
</CustomButton>;
```

---

## 3. Event Handling Types

### Common Event Types

```tsx
import {
    MouseEvent,
    ChangeEvent,
    FormEvent,
    KeyboardEvent,
    FocusEvent,
} from "react";

function FormComponent() {
    // Click events
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log("Button clicked", e.currentTarget);
    };

    // Input change
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log("Value:", e.target.value);
    };

    // Textarea change
    const handleTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        console.log("Text:", e.target.value);
    };

    // Select change
    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        console.log("Selected:", e.target.value);
    };

    // Form submit
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log("Form data:", Object.fromEntries(formData));
    };

    // Keyboard events
    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            console.log("Enter pressed");
        }
    };

    // Focus events
    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
        console.log("Input focused");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleInputChange} onKeyDown={handleKeyDown} />
            <textarea onChange={handleTextareaChange} />
            <select onChange={handleSelectChange}>
                <option value="1">Option 1</option>
            </select>
            <button onClick={handleClick}>Submit</button>
        </form>
    );
}
```

### Generic Event Handler

```tsx
type EventHandler<T = HTMLElement> = (e: MouseEvent<T>) => void;

interface ButtonProps {
    onClick: EventHandler<HTMLButtonElement>;
}

interface LinkProps {
    onClick: EventHandler<HTMLAnchorElement>;
}
```

---

## 4. Hooks with TypeScript

### useState

```tsx
import { useState } from "react";

// Type inference
const [count, setCount] = useState(0); // number
const [name, setName] = useState(""); // string

// Explicit type
const [user, setUser] = useState<User | null>(null);

// Union type
const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
);

// Complex type
interface FormData {
    name: string;
    email: string;
    age: number;
}

const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    age: 0,
});

// Array
const [items, setItems] = useState<string[]>([]);
const [todos, setTodos] = useState<Todo[]>([]);
```

### useEffect

```tsx
import { useEffect } from "react";

// No return type needed
useEffect(() => {
    console.log("Effect ran");
}, []);

// With cleanup
useEffect(() => {
    const timer = setInterval(() => {}, 1000);

    // Cleanup function
    return () => clearInterval(timer);
}, []);

// Async effects (use IIFE)
useEffect(() => {
    async function fetchData() {
        const data = await fetch("/api/data");
        // ...
    }
    fetchData();
}, []);
```

### useRef

```tsx
import { useRef, useEffect } from "react";

function Component() {
    // DOM ref (initialize with null)
    const inputRef = useRef<HTMLInputElement>(null);

    // Mutable value ref (initialize with value)
    const countRef = useRef<number>(0);

    useEffect(() => {
        // Optional chaining for null safety
        inputRef.current?.focus();

        // Direct access for mutable values
        countRef.current += 1;
    }, []);

    return <input ref={inputRef} />;
}
```

### useCallback & useMemo

```tsx
import { useCallback, useMemo } from "react";

function Component() {
    // useCallback with typed function
    const handleClick = useCallback((id: number) => {
        console.log("Clicked:", id);
    }, []);

    // useMemo with typed return
    const expensiveValue = useMemo<number>(() => {
        return performExpensiveCalculation();
    }, []);

    // Type inference usually works
    const memoizedValue = useMemo(() => {
        return { count: 0, name: "test" };
    }, []); // Type: { count: number; name: string; }
}
```

### useReducer

```tsx
import { useReducer } from "react";

// State type
interface State {
    count: number;
    error: string | null;
}

// Action types (discriminated union)
type Action =
    | { type: "INCREMENT" }
    | { type: "DECREMENT" }
    | { type: "SET"; payload: number }
    | { type: "ERROR"; payload: string };

// Reducer with types
function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + 1 };
        case "DECREMENT":
            return { ...state, count: state.count - 1 };
        case "SET":
            return { ...state, count: action.payload };
        case "ERROR":
            return { ...state, error: action.payload };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0, error: null });

    return (
        <div>
            <p>{state.count}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "SET", payload: 100 })}>
                Set 100
            </button>
        </div>
    );
}
```

### Custom Hooks

```tsx
function useLocalStorage<T>(
    key: string,
    initialValue: T,
): [T, (value: T) => void] {
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch {
            return initialValue;
        }
    });

    const setValue = (value: T) => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
}

// Usage
const [theme, setTheme] = useLocalStorage<"light" | "dark">("theme", "light");
```

---

## 5. Generic Components

### Generic List Component

```tsx
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
    keyExtractor: (item: T) => string | number;
}

function List<T>({ items, renderItem, keyExtractor }: ListProps<T>) {
    return (
        <div>
            {items.map((item) => (
                <div key={keyExtractor(item)}>{renderItem(item)}</div>
            ))}
        </div>
    );
}

// Usage
interface User {
    id: number;
    name: string;
}

<List<User>
    items={users}
    renderItem={(user) => <div>{user.name}</div>}
    keyExtractor={(user) => user.id}
/>;
```

### Generic Select Component

```tsx
interface SelectProps<T> {
    options: T[];
    value: T;
    onChange: (value: T) => void;
    getLabel: (option: T) => string;
    getValue: (option: T) => string | number;
}

function Select<T>({
    options,
    value,
    onChange,
    getLabel,
    getValue,
}: SelectProps<T>) {
    return (
        <select
            value={getValue(value)}
            onChange={(e) => {
                const selected = options.find(
                    (opt) => getValue(opt).toString() === e.target.value,
                );
                if (selected) onChange(selected);
            }}
        >
            {options.map((option) => (
                <option key={getValue(option)} value={getValue(option)}>
                    {getLabel(option)}
                </option>
            ))}
        </select>
    );
}

// Usage
interface Status {
    id: number;
    label: string;
}

const statuses: Status[] = [
    { id: 1, label: "Active" },
    { id: 2, label: "Inactive" },
];

<Select<Status>
    options={statuses}
    value={selectedStatus}
    onChange={setSelectedStatus}
    getLabel={(s) => s.label}
    getValue={(s) => s.id}
/>;
```

---

## 6. Utility Types

### Built-in Utility Types

```tsx
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial - all properties optional
type PartialUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number; }

// Required - all properties required
type RequiredUser = Required<PartialUser>;

// Readonly - all properties readonly
type ReadonlyUser = Readonly<User>;

// Pick - select specific properties
type UserNameEmail = Pick<User, "name" | "email">;
// { name: string; email: string; }

// Omit - exclude specific properties
type UserWithoutId = Omit<User, "id">;
// { name: string; email: string; age: number; }

// Record - create object type with keys and values
type UserRoles = Record<number, "admin" | "user" | "vendor">;
// { [key: number]: 'admin' | 'user' | 'vendor' }

// ReturnType - extract return type of function
function getUser() {
    return { id: 1, name: "John" };
}
type UserReturnType = ReturnType<typeof getUser>;
// { id: number; name: string; }

// Parameters - extract function parameter types
function updateUser(id: number, name: string) {}
type UpdateUserParams = Parameters<typeof updateUser>;
// [number, string]
```

### Custom Utility Types

```tsx
// Make specific properties optional
type OptionalFields<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

interface User {
    id: number;
    name: string;
    email: string;
}

type UserWithOptionalEmail = OptionalFields<User, "email">;
// { id: number; name: string; email?: string; }

// Make specific properties required
type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

// Nullable type
type Nullable<T> = T | null;

// Deep Partial
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
```

---

## 7. Advanced Patterns

### Discriminated Unions

```tsx
// Define different states with common discriminator
type AsyncState<T> =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: T }
    | { status: "error"; error: string };

function Component() {
    const [state, setState] = useState<AsyncState<User>>({ status: "idle" });

    // TypeScript narrows type based on discriminator
    if (state.status === "loading") {
        return <div>Loading...</div>;
    }

    if (state.status === "error") {
        return <div>Error: {state.error}</div>; // 'error' property exists
    }

    if (state.status === "success") {
        return <div>User: {state.data.name}</div>; // 'data' property exists
    }

    return <div>Idle</div>;
}
```

### Type Guards

```tsx
interface Dog {
    type: "dog";
    bark: () => void;
}

interface Cat {
    type: "cat";
    meow: () => void;
}

type Animal = Dog | Cat;

// Type guard function
function isDog(animal: Animal): animal is Dog {
    return animal.type === "dog";
}

function handleAnimal(animal: Animal) {
    if (isDog(animal)) {
        animal.bark(); // TypeScript knows it's Dog
    } else {
        animal.meow(); // TypeScript knows it's Cat
    }
}
```

### Conditional Types

```tsx
// Extract 'loading' or 'error' status types
type LoadingOrError<T> = T extends { status: infer S }
    ? S extends "loading" | "error"
        ? T
        : never
    : never;

type State =
    | { status: "idle" }
    | { status: "loading" }
    | { status: "success"; data: any }
    | { status: "error"; error: string };

type ErrorState = LoadingOrError<State>;
// { status: 'loading' } | { status: 'error'; error: string }
```

---

## 8. Type Definitions for This Project

### Global Types (global.d.ts)

```tsx
// Laravel Inertia page props
interface PageProps {
    auth: {
        user: User | null;
    };
    flash?: {
        success?: string;
        error?: string;
    };
}

// User model
interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string | null;
    role: "admin" | "user" | "vendor";
    created_at: string;
    updated_at: string;
}

// Common models
interface Project {
    id: number;
    title: string;
    description: string;
    status: "active" | "completed" | "pending";
    user_id: number;
    created_at: string;
    updated_at: string;
}

interface Order {
    id: number;
    order_number: string;
    status: "pending" | "processing" | "completed" | "cancelled";
    total: number;
    user_id: number;
    created_at: string;
    updated_at: string;
}
```

### Inertia Types

```tsx
import { Page } from "@inertiajs/react";

// Page component with props
interface DashboardProps extends PageProps {
    stats: {
        totalProjects: number;
        activeOrders: number;
        revenue: number;
    };
}

function Dashboard({ auth, stats }: DashboardProps) {
    return <div>Welcome, {auth.user?.name}</div>;
}

// Set layout with typed page
Dashboard.layout = (page: Page<DashboardProps>) => (
    <AppLayout title="Dashboard">{page}</AppLayout>
);
```

---

## 9. Common Patterns & Examples

### Form Component

```tsx
interface LoginFormData {
    email: string;
    password: string;
    remember: boolean;
}

interface LoginFormProps {
    onSubmit: (data: LoginFormData) => void;
    errors?: Partial<Record<keyof LoginFormData, string>>;
}

function LoginForm({ onSubmit, errors }: LoginFormProps) {
    const [formData, setFormData] = useState<LoginFormData>({
        email: "",
        password: "",
        remember: false,
    });

    const handleChange =
        (field: keyof LoginFormData) => (e: ChangeEvent<HTMLInputElement>) => {
            const value =
                e.target.type === "checkbox"
                    ? e.target.checked
                    : e.target.value;
            setFormData((prev) => ({ ...prev, [field]: value }));
        };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={formData.email}
                onChange={handleChange("email")}
            />
            {errors?.email && <span>{errors.email}</span>}

            <input
                type="password"
                value={formData.password}
                onChange={handleChange("password")}
            />
            {errors?.password && <span>{errors.password}</span>}

            <input
                type="checkbox"
                checked={formData.remember}
                onChange={handleChange("remember")}
            />

            <button type="submit">Login</button>
        </form>
    );
}
```

### API Response Types

```tsx
interface ApiResponse<T> {
    data: T;
    message: string;
    status: number;
}

interface ApiError {
    message: string;
    errors?: Record<string, string[]>;
}

async function fetchUser(id: number): Promise<ApiResponse<User>> {
    const response = await fetch(`/api/users/${id}`);

    if (!response.ok) {
        const error: ApiError = await response.json();
        throw new Error(error.message);
    }

    return response.json();
}
```

---

## Practice Exercises

### Exercise 1: Type a Todo Component

Create fully typed todo list with add, toggle, delete functions.

### Exercise 2: Generic Table Component

Build a reusable table with generic row type and column definitions.

### Exercise 3: Form Builder

Create a dynamic form builder with type-safe field definitions.

### Exercise 4: API Client

Build a type-safe API client with proper error handling.

---

## Next Steps

- Continue to [State Management with Redux](./04_STATE_MANAGEMENT.md)
- Learn [Laravel + Inertia Integration](./05_LARAVEL_INERTIA.md)
