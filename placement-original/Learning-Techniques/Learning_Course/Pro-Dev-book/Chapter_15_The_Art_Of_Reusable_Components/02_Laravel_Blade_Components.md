# 🔪 Laravel Blade Components

### 📂 The Pro Folder Structure

To write elite-level, enterprise Laravel applications, you must organize your component architecture cleanly. Do not dump every component into the root `components` folder. Group them by their domain.

**The Golden Structure:**
```text
resources/views/
├── layouts/
│   └── app.blade.php
│
├── components/
│   ├── form/                   <-- Centralize your form engine here
│   │   ├── input.blade.php
│   │   ├── textarea.blade.php
│   │   ├── select.blade.php
│   │   ├── checkbox.blade.php
│   │   └── button.blade.php
│   │
│   ├── ui/                     <-- General Visual Elements
│   │   ├── alert.blade.php
│   │   ├── card.blade.php
│   │   └── modal.blade.php
```

To automatically generate these files, use the Artisan command:
`php artisan make:component Form/Input --view` (The `--view` flag creates anonymous components, avoiding bulky PHP classes when unnecessary).

---

### 🧱 Building The Core Form Engine

Here is the exact code a Senior SaaS Engineer uses to build their forms. 

#### 1. The Input Component (`components/form/input.blade.php`)

This handles everything: the label, the asterisk for required fields, the preservation of data if the validation fails (`old()`), the dynamic CSS classes, and the error display.

```blade
@props([
    'label' => false,
    'name',
    'type' => 'text',
    'required' => false,
    'value' => null
])

<div class="mb-4">
    @if($label)
        <label for="{{ $name }}" class="block text-sm font-medium text-gray-700">
            {{ $label }}
            @if($required) <span class="text-red-500">*</span> @endif
        </label>
    @endif

    <input
        type="{{ $type }}"
        name="{{ $name }}"
        id="{{ $name }}"
        value="{{ old($name, $value) }}"
        {{ $attributes->merge([
            'class' => 'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ' . ($errors->has($name) ? 'border-red-500 ring-red-500' : '')
        ]) }}
    >

    @error($name)
        <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
    @enderror
</div>
```

**How to use it:**
```blade
<x-form.input label="Email Address" name="email" type="email" required placeholder="john@doe.com" />
```
*Note the incredible power of `$attributes->merge()`. Even though we didn't define `placeholder` in the `@props`, passing it to the component automatically merges it onto the `<input>` tag!*

---

#### 2. The Select Dropdown (`components/form/select.blade.php`)

Managing "selected" states in raw HTML dropdowns is a nightmare. This component automates it.

```blade
@props([
    'label' => false,
    'name',
    'options' => [],
    'value' => null
])

<div class="mb-4">
    @if($label)
        <label for="{{ $name }}" class="block text-sm font-medium text-gray-700">{{ $label }}</label>
    @endif

    <select 
        name="{{ $name }}" 
        id="{{ $name }}" 
        {{ $attributes->merge(['class' => 'mt-1 block w-full rounded-md border-gray-300']) }}
    >
        <option value="">Select an option...</option>
        @foreach($options as $key => $text)
            <option value="{{ $key }}" {{ old($name, $value) == $key ? 'selected' : '' }}>
                {{ $text }}
            </option>
        @endforeach
    </select>

    @error($name)
        <p class="mt-2 text-sm text-red-600">{{ $message }}</p>
    @enderror
</div>
```

**How to use it:**
```blade
<x-form.select label="User Role" name="role" :options="['admin' => 'Administrator', 'user' => 'Standard User']" />
```

#### 3. The Reusable Button (`components/form/button.blade.php`)

```blade
@props(['type' => 'submit'])

<button type="{{ $type }}" {{ $attributes->merge([
    'class' => 'inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
]) }}>
    {{ $slot }}
</button>
```

**Summary:** By utilizing `@props`, dynamic `$attributes->merge()`, and the magical `$slot` variable, you abstract hundreds of lines of visual HTML complexity into single, incredibly powerful API tags. This is how enterprise Laravel is written.
