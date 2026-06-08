# State Management with Redux Toolkit — Complete Guide

## Table of Contents

1. Introduction to Redux Toolkit
2. Store Configuration
3. Creating Slices
4. Async Operations (Thunks)
5. Selectors
6. Redux in React Components
7. Advanced Patterns
8. Redux DevTools
9. Best Practices
10. Complete Examples

---

## 1. Introduction to Redux Toolkit

### Why Redux?

- **Centralized state**: Single source of truth for application state
- **Predictable**: State changes through pure functions (reducers)
- **Debuggable**: Time-travel debugging with DevTools
- **Testable**: Pure functions are easy to test

### Why Redux Toolkit?

- Less boilerplate than plain Redux
- Built-in best practices
- Simplified store setup
- Integrated Immer for immutable updates
- Built-in async middleware (thunks)

### Installation

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 2. Store Configuration

### Basic Store Setup

```tsx
// lib/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
    },
    // Middleware is included by default (thunk, etc)
    // DevTools is enabled by default in development
});

// Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### Typed Hooks

```tsx
// hooks/redux.ts
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../lib/store";

// Use throughout app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### Provider Setup

```tsx
// app.tsx or main entry
import { Provider } from "react-redux";
import { store } from "./lib/store";

function App() {
    return (
        <Provider store={store}>
            <YourApp />
        </Provider>
    );
}
```

---

## 3. Creating Slices

### Basic Slice

```tsx
// lib/slices/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
    value: number;
    step: number;
}

const initialState: CounterState = {
    value: 0,
    step: 1,
};

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            // Immer allows "mutating" code
            state.value += state.step;
        },
        decrement: (state) => {
            state.value -= state.step;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        setStep: (state, action: PayloadAction<number>) => {
            state.step = action.payload;
        },
        reset: (state) => {
            state.value = 0;
            state.step = 1;
        },
    },
});

// Export actions
export const { increment, decrement, incrementByAmount, setStep, reset } =
    counterSlice.actions;

// Export reducer
export default counterSlice.reducer;
```

### Complex Slice Example

```tsx
// lib/slices/todoSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    text: string;
    completed: boolean;
    createdAt: string;
}

interface TodoState {
    todos: Todo[];
    filter: "all" | "active" | "completed";
    loading: boolean;
    error: string | null;
}

const initialState: TodoState = {
    todos: [],
    filter: "all",
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
                createdAt: new Date().toISOString(),
            });
        },
        toggleTodo: (state, action: PayloadAction<number>) => {
            const todo = state.todos.find((t) => t.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action: PayloadAction<number>) => {
            state.todos = state.todos.filter((t) => t.id !== action.payload);
        },
        updateTodoText: (
            state,
            action: PayloadAction<{ id: number; text: string }>,
        ) => {
            const todo = state.todos.find((t) => t.id === action.payload.id);
            if (todo) {
                todo.text = action.payload.text;
            }
        },
        setFilter: (
            state,
            action: PayloadAction<"all" | "active" | "completed">,
        ) => {
            state.filter = action.payload;
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((t) => !t.completed);
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
    },
});

export const {
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodoText,
    setFilter,
    clearCompleted,
    setLoading,
    setError,
} = todoSlice.actions;

export default todoSlice.reducer;
```

---

## 4. Async Operations (Thunks)

### Basic Async Thunk

```tsx
// lib/slices/userSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserState {
    currentUser: User | null;
    users: User[];
    loading: boolean;
    error: string | null;
}

const initialState: UserState = {
    currentUser: null,
    users: [],
    loading: false,
    error: null,
};

// Async thunk for fetching user
export const fetchUser = createAsyncThunk(
    "user/fetchUser",
    async (userId: number, { rejectWithValue }) => {
        try {
            const response = await fetch(`/api/users/${userId}`);
            if (!response.ok) throw new Error("Failed to fetch user");
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// Async thunk for fetching all users
export const fetchUsers = createAsyncThunk(
    "user/fetchUsers",
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch("/api/users");
            if (!response.ok) throw new Error("Failed to fetch users");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

// Async thunk with arguments
export const updateUser = createAsyncThunk(
    "user/updateUser",
    async (
        { id, data }: { id: number; data: Partial<User> },
        { rejectWithValue },
    ) => {
        try {
            const response = await fetch(`/api/users/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });
            if (!response.ok) throw new Error("Failed to update user");
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    },
);

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        clearError: (state) => {
            state.error = null;
        },
        logout: (state) => {
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        // fetchUser
        builder.addCase(fetchUser.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
        });
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // fetchUsers
        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        });
        builder.addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload as string;
        });

        // updateUser
        builder.addCase(updateUser.fulfilled, (state, action) => {
            state.currentUser = action.payload;
            // Update in users list if exists
            const index = state.users.findIndex(
                (u) => u.id === action.payload.id,
            );
            if (index !== -1) {
                state.users[index] = action.payload;
            }
        });
    },
});

export const { clearError, logout } = userSlice.actions;
export default userSlice.reducer;
```

### Thunk with Extra Arguments

```tsx
// Configure store with extra arguments
import api from "./api";

export const store = configureStore({
    reducer: {
        // ...
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: { api },
            },
        }),
});

// Use in thunk
export const fetchData = createAsyncThunk(
    "data/fetch",
    async (id: number, { extra }) => {
        const { api } = extra as { api: typeof import("./api").default };
        return await api.getData(id);
    },
);
```

---

## 5. Selectors

### Basic Selectors

```tsx
// lib/slices/todoSlice.ts
import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

// Simple selectors
export const selectTodos = (state: RootState) => state.todos.todos;
export const selectFilter = (state: RootState) => state.todos.filter;
export const selectLoading = (state: RootState) => state.todos.loading;

// Memoized selector using createSelector
export const selectFilteredTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
        switch (filter) {
            case "active":
                return todos.filter((t) => !t.completed);
            case "completed":
                return todos.filter((t) => t.completed);
            default:
                return todos;
        }
    },
);

// Selector with multiple computations
export const selectTodoStats = createSelector([selectTodos], (todos) => ({
    total: todos.length,
    completed: todos.filter((t) => t.completed).length,
    active: todos.filter((t) => !t.completed).length,
}));

// Selector with parameters (using factory pattern)
export const selectTodoById = (id: number) =>
    createSelector([selectTodos], (todos) => todos.find((t) => t.id === id));
```

### Using Selectors

```tsx
function TodoList() {
    const filteredTodos = useAppSelector(selectFilteredTodos);
    const stats = useAppSelector(selectTodoStats);

    return (
        <div>
            <p>
                Total: {stats.total}, Active: {stats.active}
            </p>
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
}

function TodoDetail({ id }: { id: number }) {
    const todo = useAppSelector(selectTodoById(id));

    if (!todo) return <div>Todo not found</div>;

    return <div>{todo.text}</div>;
}
```

---

## 6. Redux in React Components

### Dispatching Actions

```tsx
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
    increment,
    decrement,
    incrementByAmount,
} from "@/lib/slices/counterSlice";

function Counter() {
    const dispatch = useAppDispatch();
    const count = useAppSelector((state) => state.counter.value);
    const step = useAppSelector((state) => state.counter.step);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        </div>
    );
}
```

### Async Operations

```tsx
import { fetchUser, fetchUsers } from "@/lib/slices/userSlice";

function UserProfile({ userId }: { userId: number }) {
    const dispatch = useAppDispatch();
    const { currentUser, loading, error } = useAppSelector(
        (state) => state.user,
    );

    useEffect(() => {
        dispatch(fetchUser(userId));
    }, [dispatch, userId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!currentUser) return <div>No user found</div>;

    return (
        <div>
            <h2>{currentUser.name}</h2>
            <p>{currentUser.email}</p>
        </div>
    );
}
```

### Form with Redux

```tsx
function TodoForm() {
    const dispatch = useAppDispatch();
    const [text, setText] = useState("");

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add todo..."
            />
            <button type="submit">Add</button>
        </form>
    );
}
```

---

## 7. Advanced Patterns

### Normalized State

```tsx
// lib/slices/postsSlice.ts
import {
    createSlice,
    createEntityAdapter,
    PayloadAction,
} from "@reduxjs/toolkit";

interface Post {
    id: number;
    title: string;
    content: string;
    authorId: number;
}

// Entity adapter for normalized state
const postsAdapter = createEntityAdapter<Post>({
    selectId: (post) => post.id,
    sortComparer: (a, b) => b.id - a.id, // Sort by id descending
});

const postsSlice = createSlice({
    name: "posts",
    initialState: postsAdapter.getInitialState({
        loading: false,
        error: null as string | null,
    }),
    reducers: {
        postAdded: postsAdapter.addOne,
        postUpdated: postsAdapter.updateOne,
        postRemoved: postsAdapter.removeOne,
        postsReceived: postsAdapter.setAll,
    },
});

// Selectors
export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds,
} = postsAdapter.getSelectors((state: RootState) => state.posts);

export const { postAdded, postUpdated, postRemoved, postsReceived } =
    postsSlice.actions;
export default postsSlice.reducer;
```

### RTK Query (Advanced)

```tsx
// lib/api/apiSlice.ts
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface User {
    id: number;
    name: string;
    email: string;
}

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/users",
            providesTags: ["User"],
        }),
        getUser: builder.query<User, number>({
            query: (id) => `/users/${id}`,
            providesTags: (result, error, id) => [{ type: "User", id }],
        }),
        addUser: builder.mutation<User, Partial<User>>({
            query: (user) => ({
                url: "/users",
                method: "POST",
                body: user,
            }),
            invalidatesTags: ["User"],
        }),
        updateUser: builder.mutation<User, { id: number; data: Partial<User> }>(
            {
                query: ({ id, data }) => ({
                    url: `/users/${id}`,
                    method: "PUT",
                    body: data,
                }),
                invalidatesTags: (result, error, { id }) => [
                    { type: "User", id },
                ],
            },
        ),
    }),
});

export const {
    useGetUsersQuery,
    useGetUserQuery,
    useAddUserMutation,
    useUpdateUserMutation,
} = apiSlice;

// Add to store
import { apiSlice } from "./api/apiSlice";

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        // ... other reducers
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
});
```

---

## 8. Redux DevTools

### Using DevTools

```tsx
// DevTools is enabled by default in development

// Custom DevTools configuration
export const store = configureStore({
    reducer: {
        // ...
    },
    devTools:
        process.env.NODE_ENV !== "production"
            ? {
                  name: "Karmabhoomi App",
                  trace: true,
                  traceLimit: 25,
              }
            : false,
});
```

### Time Travel Debugging

1. Open Redux DevTools in browser
2. See all dispatched actions
3. Jump to any previous state
4. Replay actions
5. Export/import state

---

## 9. Best Practices

### 1. Slice Organization

```
lib/
  slices/
    authSlice.ts
    todoSlice.ts
    userSlice.ts
  store.ts
hooks/
  redux.ts
```

### 2. Keep State Minimal

```tsx
// ❌ Bad: Derived data in state
interface State {
    todos: Todo[];
    completedTodos: Todo[]; // Derived!
    activeTodos: Todo[]; // Derived!
}

// ✅ Good: Calculate in selectors
interface State {
    todos: Todo[];
}

const selectCompletedTodos = createSelector([selectTodos], (todos) =>
    todos.filter((t) => t.completed),
);
```

### 3. Use TypeScript

Always type your state, actions, and thunks.

### 4. Split Large Slices

If a slice grows too large, split it into multiple slices.

### 5. Use Selectors

Always use selectors instead of accessing state directly.

```tsx
// ❌ Bad
const todos = useAppSelector((state) =>
    state.todos.todos.filter((t) => !t.completed),
);

// ✅ Good
const todos = useAppSelector(selectActiveTodos);
```

---

## 10. Complete Examples

### Todo App with Redux

```tsx
// Complete working example
import { useState, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
    addTodo,
    toggleTodo,
    deleteTodo,
    setFilter,
    selectFilteredTodos,
    selectTodoStats,
} from "@/lib/slices/todoSlice";

function TodoApp() {
    const dispatch = useAppDispatch();
    const [text, setText] = useState("");
    const todos = useAppSelector(selectFilteredTodos);
    const stats = useAppSelector(selectTodoStats);
    const filter = useAppSelector((state) => state.todos.filter);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    return (
        <div className="todo-app">
            <h1>Todo App</h1>

            <form onSubmit={handleSubmit}>
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="What needs to be done?"
                />
                <button type="submit">Add</button>
            </form>

            <div className="stats">
                <span>Total: {stats.total}</span>
                <span>Active: {stats.active}</span>
                <span>Completed: {stats.completed}</span>
            </div>

            <div className="filters">
                <button
                    className={filter === "all" ? "active" : ""}
                    onClick={() => dispatch(setFilter("all"))}
                >
                    All
                </button>
                <button
                    className={filter === "active" ? "active" : ""}
                    onClick={() => dispatch(setFilter("active"))}
                >
                    Active
                </button>
                <button
                    className={filter === "completed" ? "active" : ""}
                    onClick={() => dispatch(setFilter("completed"))}
                >
                    Completed
                </button>
            </div>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        className={todo.completed ? "completed" : ""}
                    >
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => dispatch(toggleTodo(todo.id))}
                        />
                        <span>{todo.text}</span>
                        <button onClick={() => dispatch(deleteTodo(todo.id))}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

---

## Practice Exercises

### Exercise 1: Shopping Cart

Build a shopping cart with:

- Add/remove items
- Update quantities
- Calculate total
- Apply discounts

### Exercise 2: User Management

Create user CRUD with:

- Fetch users list
- Create user
- Update user
- Delete user
- Loading states

### Exercise 3: Notification System

Build notifications with:

- Add notification
- Auto-dismiss after delay
- Different types (success, error, warning)
- Animation

---

## Next Steps

- Continue to [Laravel + Inertia Integration](./05_LARAVEL_INERTIA.md)
- Learn [Forms and Validation](./06_FORMS_VALIDATION.md)
- Explore [Testing React + Redux](./07_TESTING.md)
