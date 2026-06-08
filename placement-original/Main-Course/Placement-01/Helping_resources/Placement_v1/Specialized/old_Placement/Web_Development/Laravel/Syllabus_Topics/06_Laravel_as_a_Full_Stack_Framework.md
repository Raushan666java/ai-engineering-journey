# 6. Laravel as a Full Stack Framework

## Blade Templating Engine

### Blade Basics
- Template inheritance with `@extends` and `@section`
- Components with `<x-component>` syntax
- Control structures (`@if`, `@foreach`, etc.)
- Template includes with `@include`
- Slots and named slots
- Escaping content with `{{ }}` vs raw output with `{!! !!}`

### Blade Components
```php
// Generate component
// php artisan make:component Alert

class Alert extends Component
{
    public $type;
    public $message;
    
    public function __construct($type = 'info', $message = null)
    {
        $this->type = $type;
        $this->message = $message;
    }
    
    public function render()
    {
        return view('components.alert');
    }
}
```

```blade
<!-- components/alert.blade.php -->
<div class="alert alert-{{ $type }}">
    {{ $message ?? $slot }}
</div>

<!-- Usage -->
<x-alert type="error" message="Something went wrong!" />

<x-alert type="success">
    Your profile has been updated!
</x-alert>
```

### Anonymous Components
```blade
<!-- components/alert.blade.php -->
<div class="alert alert-{{ $type }}">
    {{ $slot }}
</div>

<!-- Usage -->
<x-alert type="error">Something went wrong!</x-alert>
```

## Frontend Asset Management

### Vite Integration
```js
// vite.config.js
import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
});
```

```blade
<!-- In your layout -->
<head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
```

### CSS and JavaScript
- CSS preprocessing with Sass/Less
- JavaScript bundling and transpilation
- Hot Module Replacement (HMR)
- Asset versioning and cache busting

## Authentication Scaffolding

### Laravel Breeze
- Minimal authentication implementation
- Blade or Inertia (Vue/React) versions
- Simple login, registration, password reset
- Email verification
- Installation: `composer require laravel/breeze --dev`

### Laravel Jetstream
- Advanced authentication starter kit
- Team management
- Two-factor authentication
- Browser session management
- Profile photo uploads
- Terms and privacy policy acceptance
- Installation: `composer require laravel/jetstream`

## SPA Hybrid Approaches

### Inertia.js

#### Server-Side Setup
```php
// Install Inertia adapter
// composer require inertiajs/inertia-laravel

// Controller
class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'users' => User::all()
        ]);
    }
}
```

#### Client-Side Setup (Vue.js)
```js
// resources/js/app.js
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
        return pages[`./Pages/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
```

#### Vue Component
```vue
<!-- resources/js/Pages/Users/Index.vue -->
<template>
    <div>
        <h1>Users</h1>
        <ul>
            <li v-for="user in users" :key="user.id">
                {{ user.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        users: Array
    }
}
</script>
```

### Livewire

#### Installation
```bash
composer require livewire/livewire
```

#### Component Creation
```bash
php artisan make:livewire counter
```

#### Livewire Component
```php
// app/Http/Livewire/Counter.php
namespace App\Http\Livewire;

use Livewire\Component;

class Counter extends Component
{
    public $count = 0;
    
    public function increment()
    {
        $this->count++;
    }
    
    public function render()
    {
        return view('livewire.counter');
    }
}
```

```blade
<!-- resources/views/livewire/counter.blade.php -->
<div>
    <h1>{{ $count }}</h1>
    <button wire:click="increment">+</button>
</div>
```

#### Using in Blade
```blade
<head>
    @livewireStyles
</head>
<body>
    <livewire:counter />
    
    @livewireScripts
</body>
```

## Full-Stack Features

### Form Validation
```php
// Controller validation
public function store(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|max:255',
        'email' => 'required|email|unique:users',
        'password' => 'required|min:8|confirmed',
    ]);
    
    // Create user with validated data
}
```

```blade
<!-- Blade form with validation errors -->
<form method="POST" action="/users">
    @csrf
    
    <div>
        <label for="name">Name</label>
        <input id="name" name="name" value="{{ old('name') }}">
        @error('name')
            <span class="error">{{ $message }}</span>
        @enderror
    </div>
    
    <!-- Other fields -->
    
    <button type="submit">Register</button>
</form>
```

### Flash Messages
```php
// In controller
public function update(Request $request, $id)
{
    // Update logic
    
    return redirect('/users')->with('status', 'User updated successfully!');
}
```

```blade
<!-- In view -->
@if (session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
@endif
```

### CSRF Protection
```blade
<form method="POST" action="/profile">
    @csrf
    <!-- Form fields -->
</form>
```

## Best Learning Methods
- Build a complete CRUD application with Blade templates
- Implement authentication with Laravel Breeze or Jetstream
- Create interactive components with Livewire
- Build a SPA with Inertia.js and Vue/React
- Practice form validation and error handling
- Experiment with Vite for asset compilation
- Reference: https://laravel.com/docs/12.x/frontend
