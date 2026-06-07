# 🔐 STAGE 1F — State Management & Authentication

> **Level:** Intermediate | **Duration:** 1 Week

---

## 📋 Topics
1. State Management (Context API, Zustand)
2. JWT Authentication Flow
3. OAuth (Google, GitHub Login)
4. Protected Routes
5. Token Management

---

## 1. State Management

### Context API (Built-in)
```jsx
// contexts/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      fetch('/api/v1/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => res.json())
        .then(data => setUser(data.user))
        .catch(() => logout());
    }
  }, [token]);

  const login = async (email, password) => {
    const res = await fetch('/api/v1/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setToken(data.token);
    setUser(data.user);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setUser(null); setToken(null);
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
```

### Zustand (Recommended — Simple & Powerful)
```bash
npm install zustand
```

```jsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      login: async (email, password) => {
        const res = await fetch('/api/v1/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        set({ user: data.user, token: data.token });
      },
      logout: () => set({ user: null, token: null }),
    }),
    { name: 'auth-storage' }
  )
);

// Usage in any component
function Navbar() {
  const { user, logout } = useAuthStore();
  return user ? (
    <div>
      <span>{user.name}</span>
      <button onClick={logout}>Logout</button>
    </div>
  ) : <a href="/login">Login</a>;
}
```

---

## 2. Protected Routes (Next.js)
```tsx
// middleware.ts (Next.js)
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const isAuthPage = request.nextUrl.pathname.startsWith('/login');

  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  if (token && isAuthPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
}

export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
```

---

## 3. OAuth Flow (Laravel Socialite)
```php
// Laravel backend
Route::get('/auth/google', [SocialController::class, 'redirect']);
Route::get('/auth/google/callback', [SocialController::class, 'callback']);

class SocialController extends Controller
{
    public function redirect() {
        return Socialite::driver('google')->redirect();
    }

    public function callback() {
        $googleUser = Socialite::driver('google')->user();
        $user = User::updateOrCreate(
            ['email' => $googleUser->email],
            ['name' => $googleUser->name, 'google_id' => $googleUser->id]
        );
        $token = $user->createToken('auth')->plainTextToken;
        return redirect("/auth/callback?token={$token}");
    }
}
```

---

## 🎯 Practice Tasks
- [ ] Implement auth context with login/logout
- [ ] Set up Zustand store for global state
- [ ] Build protected routes in Next.js
- [ ] Implement Google OAuth with Laravel Socialite
- [ ] Create token refresh mechanism

---

*Next: [Docker Mastery →](../../02_devops-infrastructure/01_DOCKER_MASTERY.md)*
