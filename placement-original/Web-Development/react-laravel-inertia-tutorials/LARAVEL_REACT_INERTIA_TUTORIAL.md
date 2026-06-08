# Laravel + React + Inertia — Step-by-Step Tutorial (Template Driven)

> Use this guide as a canonical, step-by-step tutorial to learn and implement a full-featured app using Laravel (backend), Inertia (glue), and React (frontend, TypeScript). Each module follows the same template: Objective → Time → Commands → Files → Example Code → Exercise → Success Criteria.

---

## How to use this tutorial ✅

- Follow modules in order. Each module is self-contained but builds on prior modules.
- After completing each exercise, run the tests and commit small changes.
- Use the included checklists and acceptance criteria to verify progress.

---

## Module Template (Use for every module)

1. **Objective** — Concise goal
2. **Time** — Estimate
3. **Commands** — CLI commands to run
4. **Files to edit / create** — Paths
5. **Step-by-step** — Detailed steps with code snippets
6. **Exercise** — Hands-on task
7. **Success Criteria** — How to confirm completion

---

## Module 0 — Environment & Project Setup (30–60 mins)

- Objective: Install dependencies, configure `.env`, run migrations, run dev servers.
- Time: 30–60 minutes

Commands

```bash
composer install
cp .env.example .env
php artisan key:generate
npm install
npm run dev
php artisan migrate --seed
php artisan serve
```

Files

- `.env` (configure DB)
- `composer.json`, `package.json`

Steps

1. Clone the repo and install Composer packages.
2. Copy `.env.example` → `.env` and set DB credentials for local env.
3. Generate app key and run migrations & seeders.
4. Install NPM packages and start Vite dev server.

Exercise

- Confirm the app loads at http://127.0.0.1:8000 and seeded admin user can login.

Success

- App loads, login works, no JS build errors.

---

## Module 1 — Add Inertia + React to Laravel (45–90 mins)

- Objective: Install Inertia server & React client, configure Vite and initial page.
- Time: 45–90 minutes

Commands

```bash
composer require inertiajs/inertia-laravel
npm install @inertiajs/react @inertiajs/progress
npm install react react-dom
```

Files

- `vite.config.js` / `vite.config.ts`
- `resources/js/app.tsx`, `resources/js/main.tsx`
- `app/Http/Controllers/WelcomeController.php` (example)
- `routes/web.php`

Steps

1. Install Inertia server package and client packages.
2. Add initial React entrypoint: `resources/js/app.tsx` with Inertia app.
3. Update `vite.config.ts` to include `@vitejs/plugin-react` and `laravel-vite-plugin`.
4. Create a test route and controller that returns `Inertia::render('Welcome')`.
5. Create `resources/js/Pages/Welcome.tsx` with a small component.

Example: `routes/web.php`

```php
Route::get('/', function () {
    return Inertia::render('Welcome', ['time' => now()]);
});
```

Exercise

- Create `Welcome` page and ensure visiting `/` renders the React component via Inertia.

Success

- Page renders and shows the `time` prop from Laravel.

---

## Module 2 — TypeScript Setup & Types (30–60 mins)

- Objective: Add TypeScript and shared type definitions.
- Time: 30–60 minutes

Commands

```bash
npm install --save-dev typescript @types/react @types/react-dom
npx tsc --init
npm run types # if configured
```

Files

- `tsconfig.json`
- `resources/js/types/index.ts`

Steps

1. Configure `tsconfig.json` with `jsx: react-jsx` and include `resources/js`.
2. Rename `resources/js/Pages/*.tsx` and `resources/js/app.tsx` to `.tsx` if needed.
3. Create `resources/js/types/index.ts` with common interfaces: `User`, `Project`, `PaginatedResponse`.

Exercise

- Type the `Welcome` page props and fix TypeScript errors.

Success

- `npm run types` passes with no errors.

---

## Module 3 — Authentication & Role-Based Redirects (1–2 hours)

- Objective: Implement auth (Laravel Breeze optional) and role-based redirect.
- Time: 1–2 hours

Commands

```bash
composer require laravel/breeze --dev
php artisan breeze:install react
npm install
npm run dev
php artisan migrate
```

Files

- `app/Http/Controllers/Auth/*`
- `app/Providers/RouteServiceProvider.php`
- `resources/js/Pages/Auth/*`
- `database/migrations/*` (user role column)

Steps

1. Install Breeze with React preset or use existing auth controllers.
2. Add `role` column to users migration and add `hasRole()` method to `User` model.
3. Update `AuthenticatedSessionController::store()` to `redirect()->intended(RouteServiceProvider::home())` and implement `RouteServiceProvider::home()` that returns role-aware paths.
4. Add `RedirectIfAuthenticated` middleware to use role-aware home.

Exercise

- Test login flow: regular user -> `/dashboard`, admin -> `/admin/dashboard`, vendor -> `/dashboard-job`.
- Add PHPUnit tests under `tests/Feature/Auth` to assert redirects.

Success

- Tests pass and application redirects users according to role.

---

## Module 4 — Pages, Controllers & Inertia Props (1–2 hours)

- Objective: Build a `Projects` resource with server props and Inertia rendering.
- Time: 1–2 hours

Commands

```bash
php artisan make:controller ProjectController --resource
php artisan make:model Project -m
php artisan migrate
```

Files

- `app/Http/Controllers/ProjectController.php`
- `resources/js/Pages/Projects/Index.tsx`
- `resources/js/Pages/Projects/Show.tsx`

Steps

1. Create `Project` model and migration; add sample seeder data.
2. Build `index` method to `Inertia::render('Projects/Index', ['projects' => $projects])` with pagination.
3. Create `resources/js/Pages/Projects/Index.tsx` to read props and render list with `Link`.
4. Implement `GET /projects` route with `auth` middleware.

Exercise

- Ensure `projects` list renders and pagination works.

Success

- Page shows projects from server and handles query parameters (page, filter).

---

## Module 5 — Layouts, Admin Wrapper & Dynamic Layouts (45–90 mins)

- Objective: Use layouts; show admin layout for admin users.
- Time: 45–90 minutes

Files

- `resources/js/Layouts/index.tsx`
- `resources/js/Layouts/AdminLayout/*`
- `resources/js/Pages/*` (set `.layout` property)

Steps

1. Implement a default `Layout` that includes header, footer and sidebar.
2. Add `AdminLayoutWrapper` which contains admin chrome.
3. In `resources/js/Layouts/index.tsx`, read `usePage().props.auth.user` and choose admin wrapper for `user.role === 'admin'`.
4. Alternatively, pages can set `Page.layout = page => <Layout>{page}</Layout>`.

Exercise

- Log in as admin and verify admin layout loads.

Success

- Admin pages render inside the admin chrome; normal users see default layout.

---

## Module 6 — State Management & Redux Toolkit (1–2 hours)

- Objective: Configure Redux store and create a `projects` slice with async thunks.
- Time: 1–2 hours

Commands

```bash
npm install @reduxjs/toolkit react-redux
```

Files

- `resources/js/lib/store.ts`
- `resources/js/lib/slices/projectsSlice.ts`
- `resources/js/hooks/redux.ts`

Steps

1. Create store with `configureStore()` and include `projects` slice.
2. Use `createAsyncThunk` for fetching projects from `/api/projects`.
3. Create typed hooks `useAppDispatch` and `useAppSelector`.
4. Provide the store in `resources/js/main.tsx` with `<Provider store={store}>`.

Exercise

- Dispatch `fetchProjects` on `Projects/Index` mount and render results from Redux instead of props.

Success

- UI shows projects from store; state updates are visible in Redux DevTools.

---

## Module 7 — Forms & Validation (Inertia forms + Server validation) (1 hour)

- Objective: Use Inertia `useForm` to build forms with server validation.
- Time: 45–60 minutes

Files

- `resources/js/Pages/Projects/Create.tsx`
- `app/Http/Controllers/ProjectController.php` (store() validation)

Steps

1. Use `const { data, setData, post, processing, errors } = useForm({ name: '', description: '' })`.
2. Call `post('/projects')` and show errors from `errors.name`.
3. Validate request in Laravel controller and redirect back with validation messages.

Exercise

- Add `Create Project` form and confirm validation messages display client-side.

Success

- Form cannot submit invalid data; errors are shown and preserved after redirect.

---

## Module 8 — API Endpoints & SPA Patterns (1 hour)

- Objective: Add an API resource for projects and consume it with React (axios/fetch or Inertia).
- Time: 1 hour

Files

- `routes/api.php`
- `app/Http/Controllers/API/ProjectApiController.php`

Steps

1. Create API routes and controller methods using `apiResource`.
2. Protect with `auth:sanctum` if needed.
3. Consume API from React components via `fetch` / `axios` or with Inertia `only`/`preserveState` patterns.

Exercise

- Implement a client-side filter that queries `/api/projects?status=active` and updates the project list.

Success

- Filtering works and is fast; API returns JSON properly.

---

## Module 9 — Component Library & Reusable UI (1–2 hours)

- Objective: Create a small design-system of components (Button, Card, Table, Modal).
- Time: 1–2 hours

Files

- `resources/js/components/ui/*`

Steps

1. Create base `Button`, `Input`, `Card` components with TypeScript props.
2. Add accessibility attributes (`aria-*`) and tests.
3. Add stories or a `/showcase` page demonstrating components.

Exercise

- Make a `ProjectCard` component used by Projects list and add Jest tests.

Success

- Components are typed, tested, and added to the showcase page.

---

## Module 10 — Testing (Unit, Component, Feature) (1–3 hours)

- Objective: Add tests and CI-friendly scripts covering backend and frontend.
- Time: 2–3 hours

Commands

```bash
php artisan test
npm run test
npm run types
```

Files

- `tests/Feature/*` (phpunit)
- `resources/js/components/*.test.tsx` (Jest + RTL)

Steps

1. Write feature tests for protected routes and role redirects.
2. Write component tests for UI (rendering, interactions).
3. Configure GitHub Actions to run `php artisan test` and `npm run test`.

Exercise

- Add a test that an admin can access `/admin/dashboard` and non-admin gets 403.

Success

- Tests pass locally and in CI.

---

## Module 11 — Performance & Optimization

- Objective: Measure and improve frontend performance.

Steps

1. Use React Profiler to locate bottlenecks.
2. Memoize heavy components with `React.memo`.
3. Use `useMemo`/`useCallback` to avoid re-renders.
4. Implement code-splitting with `React.lazy` for heavy pages.

Exercise

- Optimize a slow Dashboard widget and demonstrate render improvements.

Success

- Reduced CPU work and improved responsiveness.

---

## Module 12 — Deployment & Production Checklist

- Objective: Build and deploy the optimized app.

Commands

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan migrate --force
```

Checklist

- Build assets (`npm run build`)
- Set proper env vars for production
- Enable caching (config, routes, view)
- Run migrations and seeds
- Setup queue workers and schedule

Success

- App serves static assets and responds quickly.

---

## Troubleshooting & Common Issues

- `Inertia` page not found → check `component` name and file path
- `usePage().props` undefined → ensure `HandleInertiaRequests::share()` sets `auth` data
- Type errors → run `npm run types` and fix issues
- Test DB issues → use in-memory sqlite for CI or set up test DB

---

## Appendix — Example: Build "Todo List" (Full walk-through)

Follow this example to practice the full flow: model → migration → controller → Inertia page → React UI → Redux → tests.

1. `php artisan make:model Todo -m`
2. `php artisan make:controller TodoController`
3. Add resource routes with `auth` middleware
4. Implement controller CRUD methods and return Inertia pages
5. Create `resources/js/Pages/Todos/Index.tsx` with create/edit/delete flows using `useForm` or Redux
6. Add tests: feature tests for routes and component tests for UI

---

## Final Notes

- Work iteratively: small PRs for each module
- Add docs to `docs/` when you add features
- Use the exercises as unit milestones for onboarding new contributors

---

If you want, I can now:

- Scaffold the Todo example (model, migration, controller, pages, tests) in `react-laravel-inertia` folder, or
- Convert this tutorial into a multi-step checklist in `docs/LEARNING_PATH.md` and track progress.

Pick one and I will proceed. 🔧
