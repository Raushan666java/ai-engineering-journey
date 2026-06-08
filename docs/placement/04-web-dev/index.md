# Web Development — Frontend se Backend tak

Ye section tujhe complete web developer banata hai. HTML/CSS se lekar Laravel + React full-stack tak. Sab kuch `placement-original/Web-Development/WebDev/` aur `placement-original/Main-Course/Placement-01/04-Web-Development/` mein hai.

**Complete Source**: `placement-original/Main-Course/Placement-01/04-Web-Development/Web-Development-Complete.md` (1075 lines) — 12-week roadmap HTML/CSS se Full-stack tak.

## Frontend

### HTML5

`placement-original/Main-Course/Placement-01/04-Web-Development/Web-Development-Complete.md` se padh:

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

**Source**: `Web-Development-Complete.md` — Week 1-3 Frontend Fundamentals

#### Core Concepts

| Topic | Details |
|-------|---------|
| Selectors & Specificity | Class, ID, attribute, pseudo-classes, cascade |
| Box Model | content, padding, border, margin — interview must |
| Units | px, em, rem, %, vh, vw |
| Colors & Typography | hex, rgb, hsl, web fonts |

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

**Complete syllabus**: `placement-original/Web-Development/WebDev/JavaScript/` (19 modules)

Key topics for web dev:
- DOM Manipulation (module 09) — querySelector, createElement, event delegation
- Events (module 10) — bubbling, capturing, preventDefault
- ES6+ (module 11): arrow functions, destructuring, spread, modules
- Async JS (module 12): fetch API, promises, async/await
- Browser APIs (module 18): localStorage, sessionStorage, geolocation

### jQuery

`placement-original/Web-Development/WebDev/JavaScript/` mein jQuery ke 15 modules hain:

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

`placement-original/Web-Development/WebDev/JavaScript/AJAX_Detailed_Syllabus.md`:
- XMLHttpRequest (legacy)
- Fetch API (modern, promise-based)
- JSON parsing & stringifying
- CORS, error handling strategies

### React Basics

Reference: `placement-original/Web-Development/react-laravel-inertia-tutorials/` (7 parts):

1. React Fundamentals — JSX, components, props
2. React Hooks — useState, useEffect, useContext, custom hooks
3. TypeScript + React — props typing, generics
4. State Management — Context API, Redux basics
5. Laravel + Inertia — server-side rendering with React
6. Complete Todo Example — CRUD fullstack
7. Testing — React Testing Library, Vitest

## Backend

### PHP

`placement-original/Web-Development/WebDev/PHP/PHP_Syllabus.md` + `php-for-laravel/` (16 topics).

### Laravel

`placement-original/Web-Development/WebDev/Laravel/Laravel_12x_Detailed_Syllabus.md`:

```
MVC → Routes → Controllers → Blade → Eloquent
→ Auth → API → Testing → Queues → Events → Broadcasting
```

**Eloquent Advanced Topics**: relationships (hasManyThrough, morphMany), mutators, accessors, scopes, eager loading, N+1 problem.

**Interview Patterns**: Service-Repository pattern, SOLID in Laravel, Facade vs Dependency Injection.

### Node.js Basics

- Express.js routing, middleware
- npm/yarn package management
- REST API building
- Authentication (JWT, sessions)

## Databases

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

## Full-Stack Projects

Reference `placement-original/Main-Course/Placement-01/07-Projects/Project-Portfolio.md`:

1. **E-commerce** (PHP + MySQL): Product catalog, cart, orders, payments
2. **Blog CMS** (Laravel): Posts, categories, comments, tags, search
3. **Task Manager** (JS + LocalStorage): CRUD, filters, drag-drop, categories
4. **Social Dashboard** (React + Laravel): Auth, posts, likes, comments, real-time
5. **URL Shortener** (Laravel + Redis): Unique codes, click tracking, QR generation

### React + Laravel + Inertia

Full tutorial: `placement-original/Web-Development/react-laravel-inertia-tutorials/REACT_LARAVEL_INERTIA_COMPLETE.md`

```bash
composer create-project laravel/laravel my-app
composer require inertiajs/inertia-laravel
npm install @inertiajs/react
```

Inertia approach: Server-side routing + Client-side rendering — no full API needed.

## Study Tips (Hinglish)

- **📅 12-Week Plan**: Pehle 3 weeks frontend (HTML+CSS+JS), agle 3 weeks backend (PHP+Laravel), phir 2 weeks databases, last 4 weeks full-stack projects.
- **💻 Project Driven**: Har concept padhne ke baad immediately ek mini-project banao. Theory 30%, Practice 70%.
- **🎨 CSS Mastery**: Roz 1 layout banao flexbox/grid se. CSS Art challenge try karo — kaafi fun hai aur interview mein bhi puchte hain.
- **🗄️ Database Practice**: SQL queries roz likho. LeetCode Database section is good for practice.
- **✨ Full-Stack Flow**: Ek hi project lo aur usko HTML+CSS → PHP → Laravel → React+Laravel+Inertia step by step upgrade karo. Portfolio ka king piece banega.

## Checklist

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

---

## Notes

<div id="page-notes"></div>
