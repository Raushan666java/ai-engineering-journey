# Blade Templates in Laravel

Blade is Laravel's powerful templating engine that combines the simplicity of plain PHP with elegant syntax for common tasks. It allows you to write clean, maintainable templates while providing features like template inheritance, components, and more.

## Basic Syntax

### Displaying Data

```blade
{{-- Display a variable --}}
<p>Hello, {{ $name }}</p>

{{-- Escaped output (default) --}}
{{ $content }}

{{-- Unescaped output (use with caution) --}}
{!! $htmlContent !!}

{{-- Display with default value --}}
{{ $name ?? 'Guest' }}
```

### Control Structures

#### Conditionals

```blade
{{-- If statement --}}
@if ($user->isAdmin())
    <p>Admin panel</p>
@elseif ($user->isEditor())
    <p>Editor tools</p>
@else
    <p>User dashboard</p>
@endif

{{-- Unless statement (inverse of if) --}}
@unless ($user->isSubscribed())
    <p>Please subscribe to access this content.</p>
@endunless

{{-- Isset and empty checks --}}
@isset($record)
    <p>Record ID: {{ $record->id }}</p>
@endisset

@empty($users)
    <p>No users found.</p>
@endempty

{{-- Auth directives --}}
@auth
    <p>You are logged in.</p>
@endauth

@guest
    <p>Please log in.</p>
@endguest

{{-- Environment directives --}}
@production
    <p>Production environment</p>
@endproduction

@env('local')
    <p>Local environment</p>
@endenv
```

#### Switch Statements

```blade
@switch($role)
    @case('admin')
        <p>Administrator</p>
        @break
    @case('editor')
        <p>Editor</p>
        @break
    @default
        <p>User</p>
@endswitch
```

#### Loops

```blade
{{-- For loop --}}
@for ($i = 0; $i < 10; $i++)
    <p>Item {{ $i }}</p>
@endfor

{{-- Foreach loop --}}
@foreach ($users as $user)
    <p>{{ $user->name }}</p>
@endforeach

{{-- With empty check --}}
@forelse ($users as $user)
    <p>{{ $user->name }}</p>
@empty
    <p>No users found.</p>
@endforelse

{{-- While loop --}}
@while ($condition)
    <p>Looping...</p>
@endwhile

{{-- Loop variable --}}
@foreach ($users as $user)
    @if ($loop->first)
        <p>This is the first iteration</p>
    @endif
    
    <p>{{ $loop->iteration }} / {{ $loop->count }}</p>
    
    @if ($loop->last)
        <p>This is the last iteration</p>
    @endif
@endforeach
```

### PHP Code

```blade
{{-- Raw PHP code --}}
@php
    $total = 0;
    foreach ($items as $item) {
        $total += $item->price;
    }
@endphp

<p>Total: ${{ number_format($total, 2) }}</p>
```

## Template Inheritance

### Defining a Layout

```blade
{{-- resources/views/layouts/app.blade.php --}}
<!DOCTYPE html>
<html>
<head>
    <title>@yield('title', 'Default Title')</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    @yield('styles')
</head>
<body>
    <header>
        @include('partials.nav')
    </header>
    
    <main>
        @yield('content')
    </main>
    
    <footer>
        @include('partials.footer')
    </footer>
    
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('scripts')
</body>
</html>
```

### Extending a Layout

```blade
{{-- resources/views/pages/home.blade.php --}}
@extends('layouts.app')

@section('title', 'Home Page')

@section('styles')
    <link rel="stylesheet" href="{{ asset('css/home.css') }}">
@endsection

@section('content')
    <h1>Welcome to our site!</h1>
    <p>This is the home page content.</p>
@endsection

@section('scripts')
    <script src="{{ asset('js/home.js') }}"></script>
@endsection
```

### Sections with Appending

```blade
{{-- Parent layout --}}
@section('sidebar')
    <p>Main sidebar content</p>
@show

{{-- Child view --}}
@section('sidebar')
    @parent
    <p>Additional sidebar content</p>
@endsection
```

## Components

### Class-Based Components

#### Component Class

```php
<?php
// app/View/Components/Alert.php
namespace App\View\Components;

use Illuminate\View\Component;

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
    
    // Helper method
    public function classes()
    {
        return [
            'alert',
            'alert-' . $this->type,
        ];
    }
}
```

#### Component Template

```blade
{{-- resources/views/components/alert.blade.php --}}
<div {{ $attributes->merge(['class' => implode(' ', $classes())]) }}>
    <div class="alert-icon">
        @if ($type === 'success')
            <svg><!-- Success icon --></svg>
        @elseif ($type === 'error')
            <svg><!-- Error icon --></svg>
        @else
            <svg><!-- Info icon --></svg>
        @endif
    </div>
    
    <div class="alert-content">
        @if ($message)
            {{ $message }}
        @else
            {{ $slot }}
        @endif
    </div>
    
    @if ($dismissible ?? false)
        <button {{ $attributes->get('close-attributes') }} class="alert-close">&times;</button>
    @endif
</div>
```

#### Using the Component

```blade
{{-- Basic usage --}}
<x-alert type="success" message="Operation successful!" />

{{-- With slot content --}}
<x-alert type="error">
    <strong>Error!</strong> Something went wrong.
</x-alert>

{{-- With attributes --}}
<x-alert type="warning" class="mt-4" id="login-alert" :dismissible="true">
    Please log in to continue.
</x-alert>
```

### Anonymous Components

```blade
{{-- resources/views/components/card.blade.php --}}
<div {{ $attributes->merge(['class' => 'card']) }}>
    @if (isset($header))
        <div class="card-header">{{ $header }}</div>
    @endif
    
    <div class="card-body">
        {{ $slot }}
    </div>
    
    @if (isset($footer))
        <div class="card-footer">{{ $footer }}</div>
    @endif
</div>
```

```blade
{{-- Using the anonymous component --}}
<x-card class="mt-4">
    <x-slot:header>
        User Profile
    </x-slot:header>
    
    <p>User profile content here.</p>
    
    <x-slot:footer>
        Last updated: {{ $user->updated_at->format('Y-m-d') }}
    </x-slot:footer>
</x-card>
```

### Inline Components

```blade
@component('components.alert', ['type' => 'success'])
    Operation completed successfully!
@endcomponent
```

## Slots

### Default Slot

```blade
{{-- Component template --}}
<div class="alert">
    {{ $slot }}
</div>

{{-- Usage --}}
<x-alert>
    This content goes into the default slot.
</x-alert>
```

### Named Slots

```blade
{{-- Component template --}}
<div class="modal">
    <div class="modal-header">{{ $header }}</div>
    <div class="modal-body">{{ $slot }}</div>
    <div class="modal-footer">{{ $footer }}</div>
</div>

{{-- Usage --}}
<x-modal>
    <x-slot:header>
        Modal Title
    </x-slot:header>
    
    <p>Modal content goes here.</p>
    
    <x-slot:footer>
        <button>Close</button>
        <button>Save</button>
    </x-slot:footer>
</x-modal>
```

### Scoped Slots

```blade
{{-- Component template --}}
<div>
    @foreach ($items as $item)
        {{ $item($item) }}
    @endforeach
</div>

{{-- Usage --}}
<x-list :items="$users">
    <x-slot:item>
        <div class="user-card">
            <h3>{{ $item->name }}</h3>
            <p>{{ $item->email }}</p>
        </div>
    </x-slot:item>
</x-list>
```

## Attributes

### Attribute Handling

```blade
{{-- Component template --}}
<div {{ $attributes }}>
    {{ $slot }}
</div>

{{-- Merging classes --}}
<div {{ $attributes->merge(['class' => 'default-class']) }}>
    {{ $slot }}
</div>

{{-- Filtering attributes --}}
<div {{ $attributes->filter(fn ($value, $key) => $key !== 'data-custom') }}>
    {{ $slot }}
</div>

{{-- Getting specific attributes --}}
<div class="card" {{ $attributes->except('class') }}>
    {{ $slot }}
</div>
```

## Including Subviews

### Basic Includes

```blade
{{-- Include a view --}}
@include('partials.header')

{{-- Include with data --}}
@include('partials.user', ['user' => $user])

{{-- Include if exists --}}
@includeIf('partials.sidebar', ['some' => 'data'])

{{-- Include when condition is true --}}
@includeWhen($user->isAdmin(), 'partials.admin-menu')

{{-- Include unless condition is true --}}
@includeUnless($user->isBlocked(), 'partials.user-menu')

{{-- Include first existing view --}}
@includeFirst(['custom.header', 'default.header'])
```

### Each Directive

```blade
{{-- Loop through data and include a view for each item --}}
@each('partials.comment', $comments, 'comment', 'partials.no-comments')
```

## Stacks

```blade
{{-- Define a stack in the layout --}}
<head>
    <title>My Site</title>
    @stack('styles')
</head>

<body>
    @yield('content')
    
    <script src="{{ asset('js/app.js') }}"></script>
    @stack('scripts')
</body>

{{-- Push to a stack in a child view --}}
@push('styles')
    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
@endpush

@push('scripts')
    <script src="{{ asset('js/custom.js') }}"></script>
@endpush

{{-- Prepend to a stack --}}
@prepend('scripts')
    <script src="{{ asset('js/first.js') }}"></script>
@endprepend
```

## Forms and CSRF Protection

```blade
<form method="POST" action="/profile">
    @csrf
    
    <input type="text" name="name" value="{{ old('name') }}">
    
    @error('name')
        <div class="error">{{ $message }}</div>
    @enderror
    
    {{-- Method spoofing for PUT, PATCH, DELETE --}}
    @method('PUT')
    
    <button type="submit">Update</button>
</form>
```

## Service Injection

```blade
@inject('metrics', 'App\Services\MetricsService')

<div>
    Monthly Revenue: {{ $metrics->getMonthlyRevenue() }}
</div>
```

## Custom Directives

### Defining Custom Directives

```php
<?php
// In a service provider's boot method
public function boot()
{
    // Simple directive
    Blade::directive('datetime', function ($expression) {
        return "<?php echo ($expression)->format('Y-m-d H:i:s'); ?>";
    });
    
    // Directive with parameters
    Blade::directive('currency', function ($expression) {
        return "<?php echo '$' . number_format($expression, 2); ?>";
    });
    
    // Directive with multiple parameters
    Blade::directive('routeIs', function ($expression) {
        return "<?php if (request()->routeIs($expression)): ?>";
    });
    Blade::directive('endrouteIs', function () {
        return "<?php endif; ?>";
    });
}
```

### Using Custom Directives

```blade
{{-- Using the custom directives --}}
<p>Date: @datetime($user->created_at)</p>
<p>Price: @currency($product->price)</p>

@routeIs('home')
    <p>You are on the home page.</p>
@endrouteIs
```

## Custom If Statements

```php
<?php
// In a service provider's boot method
public function boot()
{
    Blade::if('env', function ($environment) {
        return app()->environment($environment);
    });
    
    Blade::if('role', function ($role) {
        return auth()->check() && auth()->user()->hasRole($role);
    });
}
```

```blade
@env('local')
    <p>You are in the local environment.</p>
@elseenv('testing')
    <p>You are in the testing environment.</p>
@else
    <p>You are in production.</p>
@endenv

@role('admin')
    <p>You have admin access.</p>
@else
    <p>You don't have admin access.</p>
@endrole
```

## Asset Compilation

### Vite Integration

```blade
{{-- In your layout --}}
<head>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>

{{-- For specific builds --}}
@vite('resources/js/admin.js', 'admin-build')
```

## Caching and Optimization

```bash
# Cache views for better performance
php artisan view:cache

# Clear view cache during development
php artisan view:clear
```

## Best Practices

1. **Use template inheritance** for consistent layouts
2. **Create components** for reusable UI elements
3. **Keep logic out of templates** - use view composers or component classes
4. **Use proper escaping** - default to `{{ }}` over `{!! !!}`
5. **Organize views logically** - use subdirectories for organization
6. **Use meaningful names** for views, components, and sections
7. **Cache views in production** for better performance
8. **Minimize logic in Blade templates** - move complex logic to controllers or view models
9. **Use comments** `{{-- Comment --}}` for documentation
10. **Follow consistent indentation** for readability

## Common Patterns

### Master Layout

```blade
{{-- resources/views/layouts/master.blade.php --}}
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    
    <title>@yield('title', config('app.name'))</title>
    
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    @stack('styles')
</head>
<body class="@yield('body-class')">
    <div id="app">
        @include('layouts.partials.nav')
        
        @if (session('status'))
            <x-alert type="success" :message="session('status')" />
        @endif
        
        <main class="container">
            @yield('content')
        </main>
        
        @include('layouts.partials.footer')
    </div>
    
    @stack('scripts')
</body>
</html>
```

### Form Components

```blade
{{-- resources/views/components/form/input.blade.php --}}
@props(['name', 'label' => null, 'type' => 'text', 'value' => null])

<div class="form-group">
    @if ($label)
        <label for="{{ $name }}">{{ $label }}</label>
    @endif
    
    <input 
        type="{{ $type }}" 
        name="{{ $name }}" 
        id="{{ $name }}" 
        value="{{ old($name, $value) }}" 
        {{ $attributes->merge(['class' => 'form-control ' . ($errors->has($name) ? 'is-invalid' : '')]) }}
    >
    
    @error($name)
        <div class="invalid-feedback">{{ $message }}</div>
    @enderror
</div>
```

```blade
{{-- Usage --}}
<form method="POST" action="/users">
    @csrf
    
    <x-form.input name="name" label="Name" :value="$user->name" required />
    <x-form.input name="email" label="Email" type="email" :value="$user->email" />
    <x-form.input name="password" label="Password" type="password" />
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

### View Composers

```php
<?php
// app/Providers/ViewServiceProvider.php
namespace App\Providers;

use App\Models\Category;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;

class ViewServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Using closure based composers
        View::composer('partials.sidebar', function ($view) {
            $view->with('categories', Category::all());
        });
        
        // Using class based composers
        View::composer('dashboard.*', 'App\Http\View\Composers\DashboardComposer');
        
        // Share data with all views
        View::share('siteName', config('app.name'));
    }
}
```

## References

- [Laravel Blade Documentation](https://laravel.com/docs/12.x/blade)
- [Laravel Components](https://laravel.com/docs/12.x/blade#components)
- [Laravel Vite Documentation](https://laravel.com/docs/12.x/vite)