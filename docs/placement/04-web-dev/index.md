<div class="module-hero">
    <div class="module-hero-icon">🌐</div>
    <div class="module-hero-body">
        <h1>Web Development — Frontend se Backend tak</h1>
        <p>Ye section tujhe complete web developer banata hai. HTML/CSS se lekar Laravel + React full-stack tak. Sab kuch <code>original/Web-Development/WebDev/</code> aur <code>original/Main-Course/Placement-01/04-Web-Development/</code> mein hai.</p>
        <div class="module-hero-meta">
            <span>📂 original/Main-Course/Placement-01/04-Web-Development/Web-Development-Complete.md</span>
            <span>📄 1075 lines · Full roadmap</span>
        </div>
    </div>
</div>

<div class="roadmap-path">
    <div class="roadmap-step" data-step="1">
        <strong>HTML5</strong>
        <span>Semantics, Forms, SEO, ARIA Accessibility</span>
    </div>
    <div class="roadmap-step" data-step="2">
        <strong>CSS3</strong>
        <span>Flexbox, Grid, Animations, Responsive Design</span>
    </div>
    <div class="roadmap-step" data-step="3">
        <strong>JavaScript</strong>
        <span>DOM, ES6+, Async/Await, Fetch API</span>
    </div>
    <div class="roadmap-step" data-step="4">
        <strong>Backend (PHP / Laravel / Node)</strong>
        <span>MVC, REST APIs, Eloquent, Express.js</span>
    </div>
    <div class="roadmap-step" data-step="5">
        <strong>Databases</strong>
        <span>MySQL, PostgreSQL, MongoDB — Joins, Indexes, Aggregation</span>
    </div>
    <div class="roadmap-step" data-step="6">
        <strong>Full-Stack</strong>
        <span>React + Laravel + Inertia — E-commerce, Blog CMS, Social Dashboard</span>
    </div>
</div>

<div class="phase-section">
    <div class="phase-header">
        <span class="phase-number">01</span>
        <h2>Frontend</h2>
    </div>
    <div class="phase-body">

### HTML5

`original/Main-Course/Placement-01/04-Web-Development/Web-Development-Complete.md` se padh:

#### Core Concepts

1. **Document Structure** — DOCTYPE, head, body, meta tags, SEO
2. **Semantic Elements** — header, nav, main, section, article, aside, footer
3. **Forms** — input types, validation, accessibility (ARIA)

```html
<header>
    <nav>
        <ul><li><a href="#home">Home</a></li></ul>
    </nav>
</header>
<main>
    <section id="hero">
        <h1>Welcome</h1>
    </section>
    <article>
        <h2>Article Title</h2>
        <time datetime="2025-08-03">August 3, 2025</time>
    </article>
    <aside>
        <h3>Related Links</h3>
    </aside>
</main>
<footer>...</footer>
```

#### Practice Projects

1. Personal portfolio page
2. Blog layout with articles
3. E-commerce product page
4. Restaurant menu webpage
5. Event registration form

### CSS3

**Source**: `Web-Development-Complete.md` — Frontend Fundamentals

#### Core Concepts

<table class="table-dash">
    <tr><th>Topic</th><th>Details</th></tr>
    <tr><td>Selectors & Specificity</td><td>Class, ID, attribute, pseudo-classes, cascade</td></tr>
    <tr><td>Box Model</td><td>content, padding, border, margin — <span class="tag tag-hot">Interview Must</span></td></tr>
    <tr><td>Units</td><td>px, em, rem, %, vh, vw</td></tr>
    <tr><td>Colors & Typography</td><td>hex, rgb, hsl, web fonts</td></tr>
</table>

#### Layout Techniques

```css
/* Modern CSS Reset — har project mein use karo */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* CSS Variables */
:root {
    --primary-color: #3498db;
    --border-radius: 8px;
}

/* Flexbox — 1D layout */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

/* Grid — 2D layout */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

#### Responsive Design

- Media queries: `@media (max-width: 768px)`
- Mobile-first approach — pehle mobile, phir desktop
- Flexible images, viewport meta tag
- rem/em based sizing for scalability

#### Animations & Transitions

```css
.element {
    transition: all 0.3s ease;
}
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}
```

### JavaScript

**Complete syllabus**: `original/Web-Development/WebDev/JavaScript/` (19 modules)

Key topics for web dev:
- <span class="tag tag-method">DOM</span> DOM Manipulation (module 09) — querySelector, createElement, event delegation
- <span class="tag tag-method">Events</span> Events (module 10) — bubbling, capturing, preventDefault
- <span class="tag tag-method">ES6+</span> ES6+ (module 11): arrow functions, destructuring, spread, modules
- <span class="tag tag-method">Async</span> Async JS (module 12): fetch API, promises, async/await
- <span class="tag tag-method">Browser</span> Browser APIs (module 18): localStorage, sessionStorage, geolocation

### jQuery

`original/Web-Development/WebDev/JavaScript/` mein jQuery ke 15 modules hain:

```javascript
// jQuery Ajax Example
$.ajax({
    url: '/api/users',
    method: 'GET',
    success: function(data) {
        console.log(data);
    }
});
```

**Key jQuery Concepts**: DOM traversal, event handling, effects, AJAX shorthand.

### AJAX

`original/Web-Development/WebDev/JavaScript/AJAX_Detailed_Syllabus.md`:
- XMLHttpRequest (legacy)
- Fetch API (modern, promise-based)
- JSON parsing & stringifying
- CORS, error handling strategies

### React Basics

Reference: `original/Web-Development/react-laravel-inertia-tutorials/` (7 parts):

1. React Fundamentals — JSX, components, props
2. React Hooks — useState, useEffect, useContext, custom hooks
3. TypeScript + React — props typing, generics
4. State Management — Context API, Redux basics
5. Laravel + Inertia — server-side rendering with React
6. Complete Todo Example — CRUD fullstack
7. Testing — React Testing Library, Vitest
    </div>
</div>

<div class="phase-section">
    <div class="phase-header">
        <span class="phase-number">02</span>
        <h2>Backend</h2>
    </div>
    <div class="phase-body">

### PHP

`original/Web-Development/WebDev/PHP/PHP_Syllabus.md` + `php-for-laravel/` (16 topics).

```php
<?php
// PHP Basics — OOP + PDO

class User {
    private $name;
    private $email;
    private $password;

    public function __construct($name, $email, $password) {
        $this->name = $name;
        $this->email = $email;
        $this->password = password_hash($password, PASSWORD_DEFAULT);
    }

    public function verifyPassword($password) {
        return password_verify($password, $this->password);
    }
}

// PDO Database Connection
class Database {
    private $pdo;

    public function __construct() {
        $this->pdo = new PDO(
            "mysql:host=localhost;dbname=myapp",
            "root", "",
            [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
        );
    }

    public function fetchAll($sql, $params = []) {
        $stmt = $this->pdo->prepare($sql);
        $stmt->execute($params);
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}

// Form handling
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
    if (!$email) { echo "Invalid email"; exit; }
}
```

**Interview Topics:** `password_hash()` vs md5, PDO vs MySQLi, SQL injection prevention, CSRF tokens, session security.

### Laravel

`original/Web-Development/WebDev/Laravel/Laravel_12x_Detailed_Syllabus.md`:

```
MVC → Routes → Controllers → Blade → Eloquent
→ Auth → API → Testing → Queues → Events → Broadcasting
```

```php
// Route (routes/web.php)
Route::resource('users', UserController::class);
Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index']);
});

// Model with relationships
class User extends Authenticatable {
    public function posts() { return $this->hasMany(Post::class); }
    public function comments() { return $this->hasMany(Comment::class); }
}

// Controller with pagination
class UserController extends Controller {
    public function index() {
        $users = User::with('posts')->paginate(10);
        return view('users.index', compact('users'));
    }

    public function store(Request $request) {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);
        $user = User::create($validated);
        return redirect()->route('users.show', $user);
    }
}

// Blade Template (resources/views/users/index.blade.php)
@foreach($users as $user)
    <tr>
        <td>{{ $user->id }}</td>
        <td>{{ $user->name }}</td>
        <td>{{ $user->email }}</td>
        <td>{{ $user->posts->count() }}</td>
    </tr>
@endforeach
{{ $users->links() }}

// Migration
Schema::create('posts', function (Blueprint $table) {
    $table->id();
    $table->foreignId('user_id')->constrained()->cascadeOnDelete();
    $table->string('title');
    $table->text('body');
    $table->timestamps();
});
```

**Eloquent Advanced Topics:** relationships (hasManyThrough, morphMany, belongsToMany), mutators, accessors, global scopes, eager loading, N+1 problem solution.

**Interview Patterns:** Service-Repository pattern, SOLID in Laravel, Facade vs Dependency Injection, Eloquent vs Query Builder.

### Node.js Basics

```javascript
const express = require('express');
const app = express();
app.use(express.json());

// REST API route
app.get('/api/users', async (req, res) => {
    const users = await User.find().select('-password');
    res.json({ success: true, data: users });
});

// Middleware — auth check
const auth = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.status(401).json({ error: 'Unauthorized' });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ error: 'Invalid token' });
        req.user = decoded;
        next();
    });
};

app.listen(3000, () => console.log('Server running on port 3000'));
```

- Express.js routing, middleware
- npm/yarn package management
- REST API building
- Authentication (JWT, sessions)
- Environment variables (.env)
    </div>
</div>

<div class="phase-section">
    <div class="phase-header">
        <span class="phase-number">03</span>
        <h2>Databases</h2>
    </div>
    <div class="phase-body">

### MySQL

**Key Concepts**: Joins (INNER, LEFT, RIGHT, CROSS), Subqueries, Indexes (B-tree, composite), Normalization (1NF-3NF), Transactions (ACID), EXPLAIN query plan.

### PostgreSQL

**Key Concepts**: Advanced queries (window functions, CTEs), JSON/JSONB support, Array & Hstore data types, Full-text search.

### MongoDB

**Key Concepts**: Document model, Collections, Aggregation Pipeline, Indexes, Replica Sets, Embedding vs Referencing.

### Interview SQL Questions

1. Nth highest salary — `LIMIT 1 OFFSET n-1` or `DENSE_RANK()`
2. Department-wise max salary — `GROUP BY` + `JOIN`
3. Duplicate rows remove — `ROW_NUMBER()` + `PARTITION BY`
4. Index performance — `EXPLAIN` output interpret karo
    </div>
</div>

<div class="phase-section">
  <div class="phase-header">
    <span class="phase-number">04</span>
    <h2>Full-Stack Projects</h2>
  </div>
  <div class="phase-body">

Reference `original/Main-Course/Placement-01/07-Projects/Project-Portfolio.md`:

1. **E-commerce** (PHP + MySQL): Product catalog, cart, orders, payments
2. **Blog CMS** (Laravel): Posts, categories, comments, tags, search
3. **Task Manager** (JS + LocalStorage): CRUD, filters, drag-drop, categories
4. **Social Dashboard** (React + Laravel): Auth, posts, likes, comments, real-time
5. **URL Shortener** (Laravel + Redis): Unique codes, click tracking, QR generation

### React + Laravel + Inertia

Full tutorial: `original/Web-Development/react-laravel-inertia-tutorials/REACT_LARAVEL_INERTIA_COMPLETE.md`

```bash
composer create-project laravel/laravel my-app
composer require inertiajs/inertia-laravel
npm install @inertiajs/react
```

Inertia approach: Server-side routing + Client-side rendering — no full API needed.

### Deployment Basics

```bash
# Laravel on shared hosting
git push origin main
composer install --optimize
php artisan migrate
php artisan config:cache
php artisan route:cache

# Frontend build
npm run build

# Node.js on VPS
npm install
pm2 start app.js
pm2 save
pm2 startup
```

**Key Concepts:** Shared hosting vs VPS, CPanel, Nginx config, Environment variables, SSL certificates, CI/CD basics.

<div class="tip-banner">
    <span class="tip-badge">💡 Bhai Ka Gyaan</span>
    <strong>Study Sequence:</strong> Pehle frontend (HTML+CSS+JS), phir backend (PHP+Laravel), phir databases, finally full-stack projects.<br>
    <strong>Project Driven:</strong> Har concept padhne ke baad immediately ek mini-project banao. Theory 30%, Practice 70%.<br>
    <strong>CSS Mastery:</strong> Roz 1 layout banao flexbox/grid se. CSS Art challenge try karo — kaafi fun hai aur interview mein bhi puchte hain.<br>
    <strong>Database Practice:</strong> SQL queries roz likho. LeetCode Database section is good for practice.<br>
    <strong>Full-Stack Flow:</strong> Ek hi project lo aur usko HTML+CSS → PHP → Laravel → React+Laravel+Inertia step by step upgrade karo. Portfolio ka king piece banega.
</div>

  </div>
</div>

## Checklist

<div class="checklist-visual">
    <span class="check-cat">⏳ In Progress — Tick as you go</span>

- [ ] HTML5 semantics aur forms complete kiye
- [ ] HTML practice projects (5) banaye
- [ ] CSS3 flexbox, grid, animations practice ki
- [ ] CSS responsive design (mobile-first) seekha
- [ ] JavaScript DOM, Events, ES6+, Async padh liya
- [ ] jQuery + AJAX complete kiya
- [ ] React fundamentals + hooks seekhe
- [ ] PHP + Laravel syllabus cover kiya
- [ ] SQL joins, subqueries, normalization practice ki
- [ ] Full-stack project banaya (E-commerce ya Blog)
- [ ] React + Laravel + Inertia tutorial follow kiya

</div>

---

## 📂 Original Deep Content

The full Web Development original content:

- [Web Development Complete Guide](../original/04-Web-Development/Web-Development-Complete.md)

---

## Notes

<div id="page-notes"></div>
