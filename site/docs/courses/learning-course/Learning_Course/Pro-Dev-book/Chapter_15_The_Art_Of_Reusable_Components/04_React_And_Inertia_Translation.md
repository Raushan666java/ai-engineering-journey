---
slug: /learning-course/Learning_Course/Pro-Dev-book/Chapter_15_The_Art_Of_Reusable_Components/04_React_And_Inertia_Translation
title: "⚛️ React & Inertia Translation"
sidebar_label: "⚛️ React & Inertia Translation"
sidebar_position: 4
---
# ⚛️ React & Inertia Translation

### 🌉 The Paradigm Shift to JavaScript

While Laravel Blade Components provide elite encapsulation on the server, the modern SaaS industry is rapidly moving toward Single Page Applications (SPAs) powered by React, Vue, and Inertia.js.

The magnificent truth? **The exact same Pro Developer component mindset applies 100% to React.**

Instead of `@props` and Blade Directives, you use **Destructured Arguments** and **JSX**.

---

### 1. The React Input Component

Here is the exact equivalent of the Laravel Blade Input Component, translated into a modern React functional component (often used alongside Inertia.js to handle Laravel's validation errors natively).

```jsx
// resources/js/Components/Form/Input.jsx

import React from 'react';

export default function Input({ 
    label, 
    name, 
    type = 'text', 
    value, 
    onChange, 
    error, 
    required = false, 
    ...props // Attribute forwarding!
}) {
    return (
        <div className="mb-4">
            {label && (
                <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}

            <input
                id={name}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                className={`mt-1 block w-full rounded-md shadow-sm sm:text-sm 
                    ${error 
                        ? 'border-red-500 ring-red-500 focus:border-red-500 focus:ring-red-500' 
                        : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
                    }`}
                {...props} // Spreading extra attributes like placeholder, disabled, etc.
            />

            {error && (
                <p className="mt-2 text-sm text-red-600">{error}</p>
            )}
        </div>
    );
}
```

**Key Differences vs Blade:**
1.  **State Management (`onChange`):** In Blade, the server generates the raw HTML string once. In React, the input is "Controlling" the UI. You must pass an `onChange` handler so the parent form knows when the user types a character.
2.  **Explicit Errors (`error` prop):** Blade can magically pull errors out of the global Session (`$errors->has()`). React is isolated. You must explicitly pass the error text downward from the Inertia page props.
3.  **Forwarding Props (`...props`):** This is the React equivalent of `$attributes->merge()`. It takes any extra HTML attribute (like `placeholder="Enter email"`) and spreads it directly onto the `<input>` element.

---

### 2. Form Usage in Inertia.js

Using our newly created React component inside a modern Laravel/Inertia page is identical to the universal Create/Edit pattern we used in Blade, but leveraging Inertia's `useForm` hook for state management.

```jsx
// resources/js/Pages/Users/Form.jsx

import React from 'react';
import { useForm } from '@inertiajs/react';
import Input from '@/Components/Form/Input';
import Button from '@/Components/Form/Button';

export default function UserForm({ user = null }) {
    // Determine mode based on if the controller passed a 'user' prop
    const isEditMode = !!user;

    // Inertia's useForm hook handles data, errors, and loading states!
    const { data, setData, post, put, processing, errors } = useForm({
        name: user?.name || '',
        email: user?.email || '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (isEditMode) {
            put(route('users.update', user.id));
        } else {
            post(route('users.store'));
        }
    };

    return (
        <div className="p-6 bg-white rounded shadow max-w-xl mx-auto mt-10">
            <h2 className="text-xl font-bold mb-6">
                {isEditMode ? `Edit User: ${user.name}` : 'Create New User'}
            </h2>

            <form onSubmit={handleSubmit}>
                <Input 
                    label="Full Name"
                    name="name"
                    value={data.name}
                    onChange={(e) => setData('name', e.target.value)}
                    error={errors.name}
                    required
                />

                <Input 
                    label="Email Address"
                    name="email"
                    type="email"
                    value={data.email}
                    onChange={(e) => setData('email', e.target.value)}
                    error={errors.email}
                    required
                />

                <div className="mt-6 flex justify-end">
                    <Button type="submit" disabled={processing}>
                        {processing ? 'Saving...' : (isEditMode ? 'Save Changes' : 'Create User')}
                    </Button>
                </div>
            </form>
        </div>
    );
}
```

### 🏆 The Real World Impact

Notice how perfectly clean the `UserForm` file is. 
*   There are no raw `<label>` tags. 
*   There are no conditional red borders cluttering the form logic.
*   We use the exact same file to Create a new user or Update an existing one, just by checking `isEditMode`.

This is the ultimate intersection of modern JavaScript (React) and the Pro Developer Architecture!
