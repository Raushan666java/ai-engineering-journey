# Web Development — Frontend se Backend tak

Ye section tujhe complete web developer banata hai. HTML/CSS se lekar Laravel + React full-stack tak. Sab kuch `Placement/WebDev/` aur `Placement/Placement-01/04-Web-Development/` mein hai.

## Frontend

### HTML5

`Placement/Placement-01/04-Web-Development/Web-Development-Complete.md` se padh:

- Semantic HTML (header, nav, main, article, section, aside, footer)
- Forms, Input Types, Validation
- Accessibility (ARIA attributes, alt text)
- SEO meta tags

### CSS3

- **Layout**: Flexbox (1D), Grid (2D)
- **Responsive**: Media queries, mobile-first approach
- **Animations**: Transitions, Keyframes, Transforms
- **Advanced**: CSS Variables, Calc, Custom Properties

```css
/* Flexbox Example */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

/* Grid Example */
.grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

### JavaScript

**Complete syllabus**: `Placement/WebDev/JavaScript/` (19 modules)

Key topics for web dev:
- DOM Manipulation (module 09)
- Events (module 10)
- ES6+ (module 11): arrow functions, destructuring, spread, modules
- Async JS (module 12): fetch API, promises, async/await
- Browser APIs (module 18): localStorage, sessionStorage, geolocation

### jQuery

`Placement/WebDev/JavaScript/` mein jQuery ke 15 modules hain:

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

### AJAX

`Placement/WebDev/JavaScript/AJAX_Detailed_Syllabus.md`:
- XMLHttpRequest
- Fetch API
- JSON handling
- CORS, error handling

### React Basics

Reference: `Placement/react-laravel-inertia-tutorials/` (7 parts):

1. React Fundamentals
2. React Hooks
3. TypeScript + React
4. State Management
5. Laravel + Inertia
6. Complete Todo Example
7. Testing

## Backend

### PHP

`Placement/WebDev/PHP/PHP_Syllabus.md` + `php-for-laravel/` (16 topics).

### Laravel

`Placement/WebDev/Laravel/Laravel_12x_Detailed_Syllabus.md`:

```
MVC → Routes → Controllers → Blade → Eloquent
→ Auth → API → Testing → Queues → Events → Broadcasting
```

### Node.js Basics

- Express.js routing
- npm package management
- REST API building
- Middleware concept

## Databases

- **MySQL**: Joins, Subqueries, Indexes, Normalization
- **PostgreSQL**: Advanced queries, JSON support
- **MongoDB**: Document model, aggregation pipeline

## Full-Stack Projects

Reference `Placement/Placement-01/07-Projects/Project-Portfolio.md`:

1. **E-commerce** (PHP + MySQL): Product catalog, cart, orders
2. **Blog CMS** (Laravel): Posts, categories, comments
3. **Task Manager** (JS + LocalStorage): CRUD, filters, drag-drop
4. **Social Dashboard** (React + Laravel): Auth, posts, likes

### React + Laravel + Inertia

Full tutorial: `Placement/react-laravel-inertia-tutorials/REACT_LARAVEL_INERTIA_COMPLETE.md`

```bash
composer create-project laravel/laravel my-app
composer require inertiajs/inertia-laravel
npm install @inertiajs/react
```

## Checklist

- [ ] HTML5 semantics aur forms complete kiye
- [ ] CSS3 flexbox, grid, animations practice ki
- [ ] JavaScript DOM, Events, ES6+, Async padh liya
- [ ] jQuery + AJAX complete kiya
- [ ] React fundamentals + hooks seekhe
- [ ] PHP + Laravel syllabus cover kiya
- [ ] MySQL Joins + Normalization practice ki
- [ ] React + Laravel + Inertia tutorial follow kiya
- [ ] Full-stack project banaya
