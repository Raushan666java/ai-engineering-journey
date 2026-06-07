# React Hooks — Complete Deep Dive

## Table of Contents

1. useState — Managing State
2. useEffect — Side Effects & Lifecycle
3. useRef — Mutable References
4. useMemo — Memoizing Values
5. useCallback — Memoizing Functions
6. useContext — Global State
7. useReducer — Complex State Logic
8. Custom Hooks — Reusable Logic
9. Hook Rules & Best Practices
10. Common Patterns & Examples

---

## 1. useState — Managing State

### Basic Usage

```tsx
import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={() => setCount(count - 1)}>-</button>
        </div>
    );
}
```

### With TypeScript

```tsx
// Inferred type
const [count, setCount] = useState(0); // number

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
```

### Functional Updates

```tsx
// When new state depends on previous state, use function
function Counter() {
    const [count, setCount] = useState(0);

    // Bad: May not work correctly
    const increment = () => {
        setCount(count + 1);
        setCount(count + 1); // Still only adds 1!
    };

    // Good: Always correct
    const increment = () => {
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1); // Correctly adds 2
    };

    return <button onClick={increment}>Count: {count}</button>;
}
```

### Lazy Initialization

```tsx
// Expensive calculation runs on every render
const [data, setData] = useState(expensiveComputation());

// Better: Only runs once
const [data, setData] = useState(() => expensiveComputation());

// Example
function DataTable() {
    const [data, setData] = useState(() => {
        const saved = localStorage.getItem("tableData");
        return saved ? JSON.parse(saved) : [];
    });

    return <Table data={data} />;
}
```

---

## 2. useEffect — Side Effects & Lifecycle

### Basic Usage

```tsx
import { useEffect } from "react";

function Component() {
    const [count, setCount] = useState(0);

    // Runs after every render
    useEffect(() => {
        console.log("Component rendered");
    });

    // Runs once on mount
    useEffect(() => {
        console.log("Component mounted");
    }, []);

    // Runs when count changes
    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return <div>Count: {count}</div>;
}
```

### Cleanup Functions

```tsx
function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds((s) => s + 1);
        }, 1000);

        // Cleanup: runs before re-running effect or unmounting
        return () => {
            clearInterval(interval);
        };
    }, []);

    return <div>Seconds: {seconds}</div>;
}
```

### Data Fetching

```tsx
function UserProfile({ userId }: { userId: number }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchUser() {
            try {
                setLoading(true);
                const response = await fetch(`/api/users/${userId}`);
                const data = await response.json();

                if (!cancelled) {
                    setUser(data);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err.message);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchUser();

        // Cleanup: prevent state updates if component unmounts
        return () => {
            cancelled = true;
        };
    }, [userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!user) return <div>No user found</div>;

    return (
        <div>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    );
}
```

### Event Listeners

```tsx
function WindowSize() {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {size.width} x {size.height}
        </div>
    );
}
```

### Multiple Effects

```tsx
function Dashboard() {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    // Separate concerns into different effects
    useEffect(() => {
        fetchUser().then(setUser);
    }, []);

    useEffect(() => {
        if (user) {
            fetchPosts(user.id).then(setPosts);
        }
    }, [user]);

    useEffect(() => {
        document.title = user ? `${user.name}'s Dashboard` : "Dashboard";
    }, [user]);

    return <div>...</div>;
}
```

---

## 3. useRef — Mutable References

### DOM References

```tsx
function TextInput() {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        inputRef.current?.focus();
    };

    useEffect(() => {
        // Auto-focus on mount
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    );
}
```

### Storing Mutable Values

```tsx
function Component() {
    const renderCount = useRef(0);
    const previousValue = useRef<string>("");

    useEffect(() => {
        renderCount.current += 1;
        console.log(`Rendered ${renderCount.current} times`);
    });

    const [value, setValue] = useState("");

    useEffect(() => {
        previousValue.current = value;
    }, [value]);

    return (
        <div>
            <input value={value} onChange={(e) => setValue(e.target.value)} />
            <p>Current: {value}</p>
            <p>Previous: {previousValue.current}</p>
            <p>Renders: {renderCount.current}</p>
        </div>
    );
}
```

### Avoiding Stale Closures

```tsx
function Timer() {
    const [count, setCount] = useState(0);
    const countRef = useRef(count);

    // Keep ref in sync with state
    useEffect(() => {
        countRef.current = count;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => {
            // Can access latest count via ref
            console.log("Latest count:", countRef.current);
        }, 1000);

        return () => clearInterval(interval);
    }, []); // Empty deps, but still gets latest count!

    return <div>Count: {count}</div>;
}
```

---

## 4. useMemo — Memoizing Values

### Basic Usage

```tsx
import { useMemo } from "react";

function ExpensiveComponent({ items, filter }) {
    // Only recalculate when items or filter changes
    const filteredItems = useMemo(() => {
        console.log("Filtering items...");
        return items.filter((item) =>
            item.name.toLowerCase().includes(filter.toLowerCase()),
        );
    }, [items, filter]);

    return (
        <ul>
            {filteredItems.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}
```

### Complex Calculations

```tsx
function DataAnalytics({ data }) {
    const statistics = useMemo(() => {
        console.log("Computing statistics...");

        const sum = data.reduce((acc, val) => acc + val, 0);
        const mean = sum / data.length;
        const sorted = [...data].sort((a, b) => a - b);
        const median = sorted[Math.floor(sorted.length / 2)];

        return { sum, mean, median };
    }, [data]);

    return (
        <div>
            <p>Sum: {statistics.sum}</p>
            <p>Mean: {statistics.mean}</p>
            <p>Median: {statistics.median}</p>
        </div>
    );
}
```

### Reference Equality

```tsx
function Parent() {
    const [count, setCount] = useState(0);

    // Without useMemo: new object every render
    const config = { theme: "dark", count };

    // With useMemo: same reference until count changes
    const configMemo = useMemo(() => ({ theme: "dark", count }), [count]);

    return <Child config={configMemo} />;
}

const Child = React.memo(({ config }) => {
    console.log("Child rendered");
    return <div>{config.theme}</div>;
});
```

---

## 5. useCallback — Memoizing Functions

### Basic Usage

```tsx
import { useCallback } from "react";

function Parent() {
    const [count, setCount] = useState(0);

    // Function recreated on every render
    const handleClick = () => {
        console.log("Clicked");
    };

    // Function memoized, only recreates if dependencies change
    const handleClickMemo = useCallback(() => {
        console.log("Clicked");
    }, []);

    return <Child onClick={handleClickMemo} />;
}
```

### With Dependencies

```tsx
function TodoList({ todos }) {
    const [filter, setFilter] = useState("all");

    // Recreates only when filter changes
    const getFilteredTodos = useCallback(() => {
        return todos.filter((todo) => {
            if (filter === "completed") return todo.completed;
            if (filter === "active") return !todo.completed;
            return true;
        });
    }, [todos, filter]);

    return <FilteredList getTodos={getFilteredTodos} />;
}
```

### Common Pattern

```tsx
function SearchBox() {
    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const search = useCallback(async (searchQuery: string) => {
        const response = await fetch(`/api/search?q=${searchQuery}`);
        const data = await response.json();
        setResults(data);
    }, []);

    useEffect(() => {
        if (query) {
            const timeoutId = setTimeout(() => search(query), 300);
            return () => clearTimeout(timeoutId);
        }
    }, [query, search]);

    return (
        <div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <ResultsList results={results} />
        </div>
    );
}
```

---

## 6. useContext — Global State

### Creating Context

```tsx
import { createContext, useContext, useState, ReactNode } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within ThemeProvider");
    }
    return context;
}
```

### Using Context

```tsx
function App() {
    return (
        <ThemeProvider>
            <Header />
            <Main />
        </ThemeProvider>
    );
}

function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={`header-${theme}`}>
            <button onClick={toggleTheme}>
                Toggle to {theme === "light" ? "dark" : "light"} mode
            </button>
        </header>
    );
}
```

---

## 7. useReducer — Complex State Logic

### Basic Usage

```tsx
import { useReducer } from "react";

type State = { count: number };
type Action =
    | { type: "increment" }
    | { type: "decrement" }
    | { type: "reset" }
    | { type: "set"; payload: number };

function reducer(state: State, action: Action): State {
    switch (action.type) {
        case "increment":
            return { count: state.count + 1 };
        case "decrement":
            return { count: state.count - 1 };
        case "reset":
            return { count: 0 };
        case "set":
            return { count: action.payload };
        default:
            return state;
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: "increment" })}>+</button>
            <button onClick={() => dispatch({ type: "decrement" })}>-</button>
            <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
    );
}
```

### Complex Example: Todo App

```tsx
interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

type TodoState = {
    todos: Todo[];
    filter: "all" | "active" | "completed";
};

type TodoAction =
    | { type: "ADD_TODO"; payload: string }
    | { type: "TOGGLE_TODO"; payload: number }
    | { type: "DELETE_TODO"; payload: number }
    | { type: "SET_FILTER"; payload: "all" | "active" | "completed" }
    | { type: "CLEAR_COMPLETED" };

function todoReducer(state: TodoState, action: TodoAction): TodoState {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: Date.now(), text: action.payload, completed: false },
                ],
            };

        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo,
                ),
            };

        case "DELETE_TODO":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };

        case "SET_FILTER":
            return {
                ...state,
                filter: action.payload,
            };

        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter((todo) => !todo.completed),
            };

        default:
            return state;
    }
}

function TodoApp() {
    const [state, dispatch] = useReducer(todoReducer, {
        todos: [],
        filter: "all",
    });

    const filteredTodos = state.todos.filter((todo) => {
        if (state.filter === "active") return !todo.completed;
        if (state.filter === "completed") return todo.completed;
        return true;
    });

    return <div>...</div>;
}
```

---

## 8. Custom Hooks — Reusable Logic

### useLocalStorage

```tsx
function useLocalStorage<T>(key: string, initialValue: T) {
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
    const [theme, setTheme] = useLocalStorage("theme", "light");
    return <button onClick={() => setTheme("dark")}>Set Dark</button>;
}
```

### useFetch

```tsx
function useFetch<T>(url: string) {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let cancelled = false;

        async function fetchData() {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();

                if (!cancelled) {
                    setData(json);
                }
            } catch (err) {
                if (!cancelled) {
                    setError(err.message);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        }

        fetchData();

        return () => {
            cancelled = true;
        };
    }, [url]);

    return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
    const { data, loading, error } = useFetch(`/api/users/${userId}`);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return <div>{data?.name}</div>;
}
```

### useDebounce

```tsx
function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timeoutId);
    }, [value, delay]);

    return debouncedValue;
}

// Usage
function SearchBox() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query, 300);

    useEffect(() => {
        if (debouncedQuery) {
            // API call only after user stops typing for 300ms
            searchAPI(debouncedQuery);
        }
    }, [debouncedQuery]);

    return <input value={query} onChange={(e) => setQuery(e.target.value)} />;
}
```

---

## 9. Hook Rules & Best Practices

### Rules of Hooks

1. **Only call hooks at the top level**
    - Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions**
    - Call from function components or custom hooks

```tsx
// ❌ Bad
function Component({ condition }) {
    if (condition) {
        const [state, setState] = useState(0); // Wrong!
    }

    for (let i = 0; i < 10; i++) {
        useEffect(() => {}); // Wrong!
    }
}

// ✅ Good
function Component({ condition }) {
    const [state, setState] = useState(0);

    useEffect(() => {
        if (condition) {
            // Condition inside effect
        }
    }, [condition]);
}
```

### Dependencies Best Practices

```tsx
// Include all values used in effect
useEffect(() => {
    doSomething(a, b, c);
}, [a, b, c]); // All dependencies listed

// Use functional updates to avoid dependencies
const [count, setCount] = useState(0);
useEffect(() => {
    const interval = setInterval(() => {
        setCount((prev) => prev + 1); // No 'count' dependency needed
    }, 1000);
    return () => clearInterval(interval);
}, []); // Empty array OK

// Extract functions outside component or memoize
const expensiveFunction = useCallback(() => {
    // ...
}, [deps]);
```

---

## Practice Exercises

### Exercise 1: Build useToggle

Create a custom hook that toggles a boolean value.

### Exercise 2: Build useOnClickOutside

Detect clicks outside a component and trigger callback.

### Exercise 3: Build useWindowSize

Track window dimensions and update on resize.

### Exercise 4: Build usePrevious

Store the previous value of a state/prop.

---

## Next Steps

- Continue to [TypeScript with React](./03_TYPESCRIPT_REACT.md)
- Learn [State Management with Redux](./04_STATE_MANAGEMENT.md)
