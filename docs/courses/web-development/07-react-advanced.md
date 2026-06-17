# Chapter 7 — React Advanced

## Learning Objectives

By the end of this chapter, you will be able to:

1. Manage mutable references and DOM access using `useRef`.
2. Memoize expensive computations with `useMemo` and callback identity with `useCallback`.
3. Manage complex state transitions with `useReducer`.
4. Share state across the component tree using `useContext` and the Context API.
5. Build custom hooks that encapsulate reusable logic.
6. Implement client-side routing using React Router.
7. Use error boundaries, portals, and performance optimization techniques.

## Theory

![React Advanced Flowchart](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/web-development/07-react-advanced.png)

### 7.1 useRef

`useRef` creates a mutable object that persists across renders without causing re-renders when mutated.

```jsx
import { useRef, useEffect } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return <input ref={inputRef} type="text" />;
}
```

**Use cases:**

```jsx
function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div>
      <video ref={videoRef} src={src} />
      <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}

// Storing previous value
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// Tracking render count
function RenderCounter() {
  const count = useRef(0);
  count.current++;
  return <p>Rendered {count.current} times</p>;
}
```

### 7.2 useMemo and useCallback

`useMemo` caches the result of a computation; `useCallback` caches a function reference.

```jsx
import { useMemo, useCallback } from 'react';

// useMemo — cache computed values
function ExpensiveList({ items, filter }) {
  const filtered = useMemo(() => {
    console.log('Filtering...');
    return items.filter((item) =>
      item.name.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price, 0),
    [items]
  );

  return (
    <div>
      <ul>
        {filtered.map((item) => (
          <li key={item.id}>{item.name} — ${item.price}</li>
        ))}
      </ul>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

// useCallback — cache function references
function ProductPage({ productId, onAddToCart }) {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`/api/products/${productId}`)
      .then((r) => r.json())
      .then(setProduct);
  }, [productId]);

  // Stable reference — does not re-create unless productId changes
  const handleAdd = useCallback(() => {
    onAddToCart(productId);
  }, [productId, onAddToCart]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <AddToCartButton onAdd={handleAdd} />
    </div>
  );
}
```

**Optimization rules:**
- Only use `useMemo` for genuinely expensive computations (iterations, complex transforms).
- Only use `useCallback` when passing callbacks to optimized child components (wrapped in `React.memo`).
- Premature optimization adds complexity — measure first, then memoize.

### 7.3 useReducer

`useReducer` handles complex state logic with multiple sub-values or transitions that depend on previous state.

```jsx
import { useReducer } from 'react';

const initialState = {
  items: [],
  total: 0,
  discount: 0,
};

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newItems = [...state.items, action.payload];
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price, 0),
      };
    }
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter((_, i) => i !== action.index);
      return {
        ...state,
        items: newItems,
        total: newItems.reduce((sum, item) => sum + item.price, 0),
      };
    }
    case 'APPLY_DISCOUNT': {
      return {
        ...state,
        discount: Math.min(action.percentage, 50), // Cap at 50%
      };
    }
    case 'CLEAR_CART':
      return initialState;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function ShoppingCart() {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const addItem = (item) => dispatch({ type: 'ADD_ITEM', payload: item });
  const removeItem = (index) => dispatch({ type: 'REMOVE_ITEM', index });
  const applyDiscount = (pct) => dispatch({ type: 'APPLY_DISCOUNT', percentage: pct });

  const finalTotal = cart.total * (1 - cart.discount / 100);

  return (
    <div>
      {cart.items.map((item, i) => (
        <div key={i}>
          {item.name} — ${item.price}
          <button onClick={() => removeItem(i)}>Remove</button>
        </div>
      ))}
      <p>Subtotal: ${cart.total.toFixed(2)}</p>
      <p>Discount: {cart.discount}%</p>
      <p>Total: ${finalTotal.toFixed(2)}</p>
    </div>
  );
}
```

### 7.4 useContext

Context provides a way to pass data through the component tree without manually threading props at every level.

```jsx
import { createContext, useContext, useState } from 'react';

// Create context
const AuthContext = createContext(null);

// Provider component
function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = async (email, password) => {
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Login failed');
    const userData = await response.json();
    setUser(userData);
    return userData;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for consuming
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Using the context
function ProfileButton() {
  const { user, logout } = useAuth();
  return (
    <div>
      <span>{user?.name}</span>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <MainContent />
    </AuthProvider>
  );
}
```

### 7.5 Custom Hooks

Custom hooks extract reusable stateful logic into functions that may use other hooks.

```jsx
// useFetch — generic data fetching
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setError(null);

    fetch(url, options)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        if (!cancelled) setData(json);
      })
      .catch((err) => {
        if (!cancelled) setError(err.message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => { cancelled = true; };
  }, [url]);

  return { data, loading, error };
}

// useLocalStorage — synced with localStorage
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    localStorage.setItem(key, JSON.stringify(valueToStore));
  };

  return [storedValue, setValue];
}

// useMediaQuery — responsive breakpoints
function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

// Usage
function ResponsiveComponent() {
  const { data: users, loading } = useFetch('/api/users');
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  if (loading) return <p>Loading...</p>;

  return (
    <div className={isMobile ? 'mobile' : 'desktop'}>
      <h1>Users ({theme} mode)</h1>
      <button onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}>
        Toggle Theme
      </button>
      <ul>
        {users?.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </div>
  );
}
```

### 7.6 React Router

React Router provides declarative client-side routing.

```jsx
import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useNavigate, Outlet } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<ProductList />} />
          <Route path=":id" element={<ProductDetail />} />
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

// Nested routes with Outlet
function Products() {
  return (
    <div>
      <h1>Products</h1>
      <Outlet /> {/* Child routes render here */}
    </div>
  );
}

// Route parameters
function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Product {id}</h2>
      <button onClick={() => navigate('/products')}>Back to Products</button>
    </div>
  );
}
```

### 7.7 Error Boundaries

Error boundaries catch JavaScript errors in their child component tree, log the error, and display a fallback UI.

```jsx
import { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error('Error caught by boundary:', error, info.componentStack);
    // Send to error tracking service
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div role="alert">
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
          <button onClick={() => this.setState({ hasError: false, error: null })}>
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

### 7.8 Portals

Portals render children into a different DOM node outside the parent hierarchy.

```jsx
import { createPortal } from 'react-dom';

function Modal({ open, onClose, children }) {
  if (!open) return null;

  return createPortal(
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} aria-label="Close">X</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
}
```

### 7.9 Performance Optimization

```jsx
import { memo } from 'react';

// React.memo — prevent re-render when props haven't changed (shallow comparison)
const ExpensiveChart = memo(function ExpensiveChart({ data, config }) {
  return <svg>{/* Complex rendering */}</svg>;
});

// Usage with useCallback ensures memoized children don't re-render
function Dashboard() {
  const [filter, setFilter] = useState('all');
  const [data, setData] = useState([]);

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  const filteredData = useMemo(
    () => data.filter((d) => filter === 'all' || d.category === filter),
    [data, filter]
  );

  return (
    <div>
      <FilterBar onChange={handleFilterChange} />
      <ExpensiveChart data={filteredData} config={chartConfig} />
    </div>
  );
}
```

### 7.10 React DevTools

React DevTools (browser extension) provides:
- **Components tab**: Inspect component tree, props, state, hooks values in real time.
- **Profiler tab**: Record performance flamegraphs showing render duration and reason.
- **Source maps**: Navigate from component to source file.

## Summary

- `useRef` persists mutable values across renders without causing re-renders.
- `useMemo` and `useCallback` memoize values and functions to avoid wasted work.
- `useReducer` handles complex state transitions with a reducer function.
- Context API with `useContext` provides dependency injection across the component tree.
- Custom hooks encapsulate reusable stateful logic following naming conventions.
- React Router enables declarative, nested client-side routing.
- Error boundaries catch rendering errors in child trees.
- Portals render content outside the parent DOM hierarchy.
- `React.memo` and memoization hooks optimize re-renders.
- React DevTools enables real-time inspection and profiling.

## Exercises

### Review Questions

1. What is the difference between `useRef` and `useState`? When would you choose one over the other?
2. Explain the concept of "lifting state up" and how Context API changes this pattern.
3. Why does `useCallback` help with performance and what happens if its dependency array is incorrect?
4. What are the limitations of error boundaries? What types of errors do they not catch?

### Application Problems

5. Build a custom hook `useDebounce(value, delay)` that returns a debounced version of the value. Demonstrate its use in a search input that waits 300ms before triggering an API call.
6. Implement a `ThemeProvider` context with `useTheme` hook that provides `theme` (light/dark) and `toggleTheme` to all descendants. Persist the choice in localStorage.
7. Create a `useIntersectionObserver` custom hook that takes options and returns a `ref` to attach to an element, plus an `isVisible` boolean. Use it to build an infinite scroll component.

### Challenge Problem

8. Build a complete shopping cart application featuring:
   - **Product listing** with add-to-cart functionality
   - **Cart** managed with `useReducer` supporting add, remove, quantity update, and clear
   - **Checkout form** with field-level validation and form-wide submission
   - **Theme toggle** using Context
   - **Routing** with React Router: `/products`, `/cart`, `/checkout`, `/order-confirmation`
   - **Custom hook** `useLocalStorage` for persisting the cart
   - **Error boundary** wrapping the product detail page
   - **Memoized** product list to prevent unnecessary re-renders
   - No external state management library — only React built-ins
