# ⚛️ STAGE 1E — React & Next.js

> **Level:** Beginner → Advanced | **Duration:** 2–3 Weeks

---

## 📋 Topics

1. React Fundamentals
2. JSX & Components
3. Props & State
4. Hooks Deep Dive
5. Component Patterns
6. Next.js Framework
7. Routing & SSR/SSG
8. API Routes in Next.js
9. Connecting to Laravel Backend

---

## 1. React Fundamentals

### What Is React?
A JavaScript library for building user interfaces with components.

### Setup
```bash
npx -y create-next-app@latest my-app --typescript --tailwind --app --eslint
```

### Core Concept: Components
```jsx
// Everything is a component
function WelcomeCard({ name, role }) {
  return (
    <div className="card">
      <h2>Hello, {name}!</h2>
      <p>Role: {role}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <WelcomeCard name="Raushan" role="Full Stack Dev" />
      <WelcomeCard name="AI Bot" role="Agent" />
    </div>
  );
}
```

---

## 2. JSX Rules

```jsx
// 1. Must return single parent element
return (
  <div>
    <h1>Title</h1>
    <p>Content</p>
  </div>
);

// 2. Use className (not class)
<div className="container">

// 3. JavaScript expressions in {}
<h1>{user.name}</h1>
<p>{isActive ? 'Active' : 'Inactive'}</p>

// 4. Self-closing tags
<img src={url} alt="photo" />
<input type="text" />

// 5. Conditional rendering
{isLoggedIn && <Dashboard />}
{isAdmin ? <AdminPanel /> : <UserPanel />}

// 6. List rendering
{items.map(item => (
  <li key={item.id}>{item.name}</li>
))}
```

---

## 3. Props & State

### Props (Read-only, parent → child)
```jsx
function ProductCard({ product, onAddToCart }) {
  return (
    <div>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}
```

### State (Mutable, component-level)
```jsx
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(prev => prev - 1)}>-</button>
    </div>
  );
}
```

---

## 4. Hooks Deep Dive

### useState — Component State
```jsx
const [user, setUser] = useState({ name: '', email: '' });
const [items, setItems] = useState([]);
const [loading, setLoading] = useState(false);
```

### useEffect — Side Effects
```jsx
import { useEffect, useState } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Runs when userId changes
    setLoading(true);
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      });

    // Cleanup function
    return () => {
      // Cancel requests, clear timers, etc.
    };
  }, [userId]); // Dependency array

  if (loading) return <p>Loading...</p>;
  return <h1>{user.name}</h1>;
}
```

### useRef — DOM References & Persistent Values
```jsx
function SearchBox() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus(); // Auto-focus on mount
  }, []);

  return <input ref={inputRef} type="text" placeholder="Search..." />;
}
```

### useMemo & useCallback — Performance
```jsx
// Memoize expensive computation
const sortedProducts = useMemo(() => {
  return products.sort((a, b) => a.price - b.price);
}, [products]);

// Memoize callback to prevent re-renders
const handleDelete = useCallback((id) => {
  setItems(prev => prev.filter(item => item.id !== id));
}, []);
```

### Custom Hooks
```jsx
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage
function Products() {
  const { data: products, loading } = useApi('/api/products');
  if (loading) return <Spinner />;
  return products.map(p => <ProductCard key={p.id} product={p} />);
}
```

---

## 5. Next.js Framework

### Why Next.js?
- Server-side rendering (SSR)
- Static site generation (SSG)
- File-based routing
- API routes
- Image optimization
- Built-in TypeScript

### App Router (Next.js 14+)
```
app/
├── layout.tsx        # Root layout
├── page.tsx          # Home page (/)
├── loading.tsx       # Loading UI
├── error.tsx         # Error UI
├── products/
│   ├── page.tsx      # /products
│   └── [id]/
│       └── page.tsx  # /products/:id
├── dashboard/
│   ├── layout.tsx    # Dashboard layout
│   └── page.tsx      # /dashboard
└── api/
    └── scrape/
        └── route.ts  # API: POST /api/scrape
```

### Server Components (Default)
```tsx
// app/products/page.tsx — Server Component (runs on server)
async function ProductsPage() {
  // This fetches on the server — no loading spinner needed
  const res = await fetch('http://localhost:8080/api/v1/products');
  const products = await res.json();

  return (
    <div>
      <h1>Products</h1>
      {products.data.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price.formatted}</p>
        </div>
      ))}
    </div>
  );
}
```

### Client Components (Interactive)
```tsx
'use client'; // Must add this directive

import { useState } from 'react';

export function AddToCartButton({ productId }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    await fetch('/api/cart', {
      method: 'POST',
      body: JSON.stringify({ product_id: productId }),
    });
    setLoading(false);
  }

  return (
    <button onClick={handleClick} disabled={loading}>
      {loading ? 'Adding...' : 'Add to Cart'}
    </button>
  );
}
```

---

## 6. Connecting to Laravel Backend

### API Service
```tsx
// lib/api.ts
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';

class ApiService {
  private token: string | null = null;

  setToken(token: string) {
    this.token = token;
  }

  private async request(endpoint: string, options: RequestInit = {}) {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }

    const res = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers: { ...headers, ...options.headers },
    });

    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    return res.json();
  }

  // Auth
  login(email: string, password: string) {
    return this.request('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  // Products
  getProducts(params?: Record<string, string>) {
    const query = new URLSearchParams(params).toString();
    return this.request(`/products?${query}`);
  }

  getProduct(id: number) {
    return this.request(`/products/${id}`);
  }
}

export const api = new ApiService();
```

---

## 🎯 Practice Tasks
- [ ] Build a product listing page with React
- [ ] Create custom useApi hook
- [ ] Set up Next.js with App Router
- [ ] Connect Next.js frontend to Laravel API
- [ ] Build login/register flow with Sanctum

---

*Next: [State Management & Auth →](./02_STATE_AUTH.md)*
