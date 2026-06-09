# Chapter 6 — React Basics

## Learning Objectives

By the end of this chapter, you will be able to:

1. Create and render React components using both function and class syntax.
2. Pass data through components using props with proper type expectations.
3. Manage component state using the `useState` hook.
4. Manage side effects using the `useEffect` hook with proper dependency arrays.
5. Conditionally render content using ternaries, logical AND, and conditional variables.
6. Render lists with keys for efficient reconciliation.
7. Build controlled forms with validation and submission handling.
8. Lift shared state to a common ancestor component.

## Theory

### 6.1 JSX

JSX is a syntax extension for JavaScript that resembles HTML. It compiles to `React.createElement` calls.

```jsx
const element = <h1>Hello, World!</h1>;
// Compiles to: React.createElement('h1', null, 'Hello, World!')
```

**JSX rules:**

- Single root element (use `<Fragment>` or `<>...</>`).
- Close all tags (`<br />`, `<img />`).
- Use `className` instead of `class`.
- Use `htmlFor` instead of `for`.
- JavaScript expressions in `{}`.
- Inline styles use camelCase keys with string or number values.

```jsx
const name = 'Alice';
const styles = { color: 'blue', fontSize: 16 };

const greeting = (
  <div className="greeting" style={styles}>
    <h1>Hello, {name}!</h1>
    <p>{2 + 2} years of experience</p>
    <img src="/avatar.png" alt="Avatar" />
  </div>
);
```

### 6.2 Components

**Function components** (modern, recommended):

```jsx
function Welcome({ name, age }) {
  return (
    <div>
      <h1>Welcome, {name}!</h1>
      {age >= 18 && <p>You are of legal age.</p>}
    </div>
  );
}
```

**Class components** (legacy — maintained for historical context):

```jsx
class Welcome extends React.Component {
  render() {
    const { name, age } = this.props;
    return (
      <div>
        <h1>Welcome, {name}!</h1>
        {age >= 18 && <p>You are of legal age.</p>}
      </div>
    );
  }
}
```

### 6.3 Props

Props (properties) are read-only inputs passed from parent to child.

```jsx
// Parent
function App() {
  return <UserProfile name="Alice" email="alice@example.com" roles={['admin', 'editor']} />;
}

// Child
function UserProfile({ name, email, roles }) {
  return (
    <div className="profile">
      <h2>{name}</h2>
      <p>{email}</p>
      <ul>
        {roles.map((role) => (
          <li key={role}>{role}</li>
        ))}
      </ul>
    </div>
  );
}

// Default props
function Button({ variant = 'primary', children, ...rest }) {
  return (
    <button className={`btn btn--${variant}`} {...rest}>
      {children}
    </button>
  );
}
```

### 6.4 State (useState)

State represents mutable data that, when changed, triggers a re-render.

```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prev) => prev + 1); // Functional update — safe in concurrent mode
  };

  const reset = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

**State rules:**
- Do not mutate state directly — always use the setter function.
- State updates are asynchronous — reading state immediately after `setState` yields the old value.
- For objects and arrays, create new references:

```jsx
function UserForm() {
  const [user, setUser] = useState({ name: '', email: '', roles: [] });

  const updateName = (name) => {
    setUser((prev) => ({ ...prev, name }));
  };

  const addRole = (role) => {
    setUser((prev) => ({ ...prev, roles: [...prev.roles, role] }));
  };

  return (
    <form>
      <input value={user.name} onChange={(e) => updateName(e.target.value)} />
    </form>
  );
}
```

### 6.5 Effects (useEffect)

`useEffect` synchronizes a component with external systems (API calls, subscriptions, DOM manipulation, timers).

```jsx
import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchUsers() {
      try {
        setLoading(true);
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        if (!cancelled) {
          setUsers(data);
          setError(null);
        }
      } catch (err) {
        if (!cancelled) setError(err.message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchUsers();

    return () => {
      cancelled = true; // Cleanup — prevents state updates on unmounted component
    };
  }, []); // Empty dependency array = run once on mount

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
}
```

**Dependency array behavior:**

| Deps | When effect runs | Use case |
|------|-----------------|----------|
| `[]` | On mount only | Data fetching, subscriptions |
| `[a, b]` | On mount + when `a` or `b` change | React to prop/state changes |
| omitted | On mount + every render | Rarely useful, usually a mistake |

### 6.6 Conditional Rendering

```jsx
function Dashboard({ user }) {
  // If/else
  if (!user) return <LoginPrompt />;

  // Ternary
  return (
    <div>
      <h1>{user.role === 'admin' ? 'Admin Dashboard' : 'User Dashboard'}</h1>

      {/* Logical AND */}
      {user.isVerified && <Badge type="verified" />}

      {/* Conditional variable */}
      {(() => {
        switch (user.plan) {
          case 'premium':
            return <PremiumFeatures />;
          case 'basic':
            return <BasicFeatures />;
          default:
            return <FreeFeatures />;
        }
      })()}
    </div>
  );
}
```

### 6.7 Lists and Keys

Render dynamic collections using `map`. Every item needs a stable, unique `key` for React's reconciliation algorithm.

```jsx
function TodoList({ items }) {
  return (
    <ul>
      {items.map((todo) => (
        <li key={todo.id}>
          <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
          </span>
        </li>
      ))}
    </ul>
  );
}
```

**Key rules:**
- Use stable IDs from data (`item.id`), never array index unless the list is static and will not be reordered.
- Keys must be unique among siblings, not globally.
- Keys are not passed as props — use a separate prop if the child needs the original ID.

### 6.8 Forms

Controlled components: form state lives in React state, and the `<input>` reflects that state.

```jsx
import { useState } from 'react';

function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field on change
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.username.trim()) newErrors.username = 'Username is required';
    if (!form.email.includes('@')) newErrors.email = 'Valid email is required';
    if (form.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        setSubmitted(true);
      }
    } catch (err) {
      setErrors({ form: err.message });
    }
  };

  if (submitted) return <p>Thank you for registering!</p>;

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          aria-invalid={!!errors.username}
          aria-describedby={errors.username ? 'username-error' : undefined}
        />
        {errors.username && <p id="username-error" role="alert">{errors.username}</p>}
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
        {errors.email && <p role="alert">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p role="alert">{errors.password}</p>}
      </div>

      {errors.form && <p role="alert" className="error">{errors.form}</p>}

      <button type="submit" disabled={submitted}>Register</button>
    </form>
  );
}
```

### 6.9 Lifting State Up

When multiple components need to share the same state, move the state to their nearest common ancestor.

```jsx
function TemperatureConverter() {
  const [celsius, setCelsius] = useState(0);

  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div>
      <CelsiusInput value={celsius} onChange={setCelsius} />
      <FahrenheitDisplay value={fahrenheit} />
    </div>
  );
}

function CelsiusInput({ value, onChange }) {
  return (
    <label>
      Celsius:
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </label>
  );
}

function FahrenheitDisplay({ value }) {
  return <p>Fahrenheit: {value.toFixed(1)}</p>;
}
```

## Summary

- JSX compiles to `React.createElement` and enables HTML-like syntax in JavaScript.
- Function components are the standard approach; props are read-only inputs.
- `useState` manages mutable state; state updates must use the setter with new references.
- `useEffect` handles side effects with proper cleanup and dependency tracking.
- Conditional rendering uses ternaries, logical AND, and conditional variables.
- List rendering requires stable `key` props for efficient reconciliation.
- Controlled forms keep form state in React, enabling validation and submission handling.
- Lifting state up shares state across sibling components via a common ancestor.

## Exercises

### Review Questions

1. Why must React keys be stable, unique, and not rely on array indices?
2. What is the purpose of the cleanup function returned by `useEffect`?
3. Explain the difference between controlled and uncontrolled components.
4. What happens if you omit the dependency array in `useEffect`?

### Application Problems

5. Build a `Stopwatch` component with start, stop, and reset buttons using `useState` and `useEffect` with `setInterval`. Clean up the interval on unmount.
6. Create a `ProductList` component that fetches from `/api/products`, displays loading/error/data states, and renders each product as a card with image, name, and price.
7. Implement a `SearchFilter` component that takes a list of items and renders a search input that filters the list in real time as the user types.

### Challenge Problem

8. Build a multi-step checkout form with the following steps: (1) Shipping Address, (2) Payment Method, (3) Order Review, (4) Confirmation. Use a single parent component (`Checkout`) that holds all form state as a single object and passes down only the relevant slice to each step component. Implement:
   - Navigation between steps with "Back" and "Next" buttons
   - Per-step validation before allowing progression
   - An order summary sidebar that updates as data is entered
   - A progress indicator showing steps completed vs remaining
   - Form data persistence across step transitions (not cleared on back)
   - A final submission handler that logs the complete data to the console
   - Disabled "Next" when the current step's data is invalid
