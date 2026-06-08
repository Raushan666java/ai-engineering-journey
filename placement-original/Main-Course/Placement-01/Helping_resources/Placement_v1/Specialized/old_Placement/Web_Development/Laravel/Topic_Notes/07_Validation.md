# Validation in Laravel

Validation is a crucial part of any web application. Laravel provides several ways to validate incoming data, making it easy to ensure that user input meets your application's requirements.

## Basic Validation

### Validating a Request

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'published_at' => 'nullable|date',
        ]);
        
        // The validated data is available in $validated
        // Create post with validated data
        $post = Post::create($validated);
        
        return redirect()->route('posts.show', $post);
    }
}
```

### Validation Error Handling

If validation fails, Laravel automatically redirects the user back to the previous page and flashes the validation errors to the session.

```php
// In your Blade template
@if ($errors->any())
    <div class="alert alert-danger">
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

<form method="POST" action="/posts">
    @csrf
    
    <div>
        <label for="title">Title</label>
        <input id="title" name="title" value="{{ old('title') }}">
        @error('title')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
    </div>
    
    <div>
        <label for="body">Body</label>
        <textarea id="body" name="body">{{ old('body') }}</textarea>
        @error('body')
            <div class="alert alert-danger">{{ $message }}</div>
        @enderror
    </div>
    
    <button type="submit">Submit</button>
</form>
```

### API Validation

For API requests, Laravel returns validation errors as JSON:

```php
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'body' => 'required|string',
    ]);
    
    // Create post with validated data
    $post = Post::create($validated);
    
    return response()->json($post, 201);
}
```

If validation fails, Laravel returns a 422 Unprocessable Entity response with the validation errors:

```json
{
    "message": "The given data was invalid.",
    "errors": {
        "title": [
            "The title field is required."
        ],
        "body": [
            "The body field is required."
        ]
    }
}
```

## Form Request Validation

For complex validation scenarios, you can create dedicated Form Request classes:

```bash
php artisan make:request StorePostRequest
```

```php
<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true; // Or check permissions here
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255|unique:posts',
            'body' => 'required|string',
            'category_id' => 'required|exists:categories,id',
            'tags' => 'array',
            'tags.*' => 'exists:tags,id',
            'published_at' => 'nullable|date',
        ];
    }
    
    /**
     * Get custom messages for validator errors.
     */
    public function messages(): array
    {
        return [
            'title.required' => 'A title is required',
            'title.unique' => 'This title has already been used',
            'body.required' => 'A post body is required',
            'category_id.exists' => 'The selected category is invalid',
        ];
    }
    
    /**
     * Get custom attributes for validator errors.
     */
    public function attributes(): array
    {
        return [
            'category_id' => 'category',
            'published_at' => 'publication date',
        ];
    }
    
    /**
     * Prepare the data for validation.
     */
    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => \Str::slug($this->title),
        ]);
    }
    
    /**
     * Handle a passed validation attempt.
     */
    protected function passedValidation(): void
    {
        $this->replace(['sanitized' => true] + $this->all());
    }
}
```

Using the Form Request in your controller:

```php
<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;

class PostController extends Controller
{
    public function store(StorePostRequest $request)
    {
        // The request is validated automatically
        $validated = $request->validated();
        
        // Or get all validated data including those added in prepareForValidation
        $safe = $request->safe()->all();
        
        // Create post with validated data
        $post = Post::create($validated);
        
        return redirect()->route('posts.show', $post);
    }
}
```

## Validation Rules

Laravel provides a wide range of validation rules:

### Basic Rules

```php
$rules = [
    'name' => 'required|string|max:255',
    'email' => 'required|email|unique:users,email',
    'password' => 'required|min:8|confirmed',
    'age' => 'required|integer|min:18',
    'website' => 'nullable|url',
    'agree' => 'accepted',
];
```

### Array Validation

```php
$rules = [
    'user' => 'required|array',
    'user.name' => 'required|string',
    'user.email' => 'required|email',
    
    'items' => 'required|array|min:1',
    'items.*.id' => 'required|integer|exists:products,id',
    'items.*.quantity' => 'required|integer|min:1',
];
```

### File Validation

```php
$rules = [
    'photo' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    'document' => 'required|file|mimes:pdf,doc,docx|max:10240',
    'files' => 'required|array',
    'files.*' => 'file|mimes:pdf,doc,docx|max:2048',
];
```

### Date Validation

```php
$rules = [
    'start_date' => 'required|date',
    'end_date' => 'required|date|after:start_date',
    'birth_date' => 'required|date|before:today',
    'appointment' => 'required|date|after_or_equal:today|before:+30 days',
];
```

### Conditional Validation

```php
$rules = [
    'payment_type' => 'required|in:credit_card,paypal',
    'card_number' => 'required_if:payment_type,credit_card',
    'card_expiry' => 'required_if:payment_type,credit_card',
    'paypal_email' => 'required_if:payment_type,paypal|email',
    
    'has_company' => 'boolean',
    'company_name' => 'required_if:has_company,1',
    'vat_number' => 'required_with:company_name',
];
```

### Regular Expression Validation

```php
$rules = [
    'username' => 'required|regex:/^[a-zA-Z0-9_]+$/',
    'postal_code' => 'required|regex:/^[0-9]{5}$/',
    'phone' => 'required|regex:/^([0-9\s\-\+\(\)]*)$/',
];
```

### Custom Rule Objects

```php
<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class Uppercase implements ValidationRule
{
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (strtoupper($value) !== $value) {
            $fail("The {$attribute} must be uppercase.");
        }
    }
}
```

Using the custom rule:

```php
use App\Rules\Uppercase;

$request->validate([
    'name' => ['required', new Uppercase],
]);
```

### Invokable Rule Classes

```php
<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\InvokableRule;

class Uppercase implements InvokableRule
{
    /**
     * Run the validation rule.
     */
    public function __invoke(string $attribute, mixed $value, Closure $fail): void
    {
        if (strtoupper($value) !== $value) {
            $fail("The {$attribute} must be uppercase.");
        }
    }
}
```

### Implicit Rules

```php
<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Contracts\Validation\ImplicitRule;

class NotEmptyString implements ValidationRule, ImplicitRule
{
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (!is_string($value) || trim($value) === '') {
            $fail("The {$attribute} cannot be empty.");
        }
    }
}
```

## Custom Validation Messages

### In Controller

```php
$validated = $request->validate([
    'title' => 'required|string|max:255',
    'body' => 'required|string',
], [
    'title.required' => 'A title is required',
    'title.max' => 'The title cannot be longer than 255 characters',
    'body.required' => 'A post body is required',
]);
```

### In Form Request

```php
public function messages(): array
{
    return [
        'title.required' => 'A title is required',
        'title.max' => 'The title cannot be longer than 255 characters',
        'body.required' => 'A post body is required',
    ];
}
```

### In Language Files

```php
// resources/lang/en/validation.php
'custom' => [
    'title' => [
        'required' => 'A title is required',
        'max' => 'The title cannot be longer than :max characters',
    ],
    'body' => [
        'required' => 'A post body is required',
    ],
],
```

## Manually Creating Validators

```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PostController extends Controller
{
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);
        
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }
        
        // Get validated data
        $validated = $validator->validated();
        
        // Create post with validated data
        $post = Post::create($validated);
        
        return redirect()->route('posts.show', $post);
    }
}
```

### Custom Validation Logic

```php
$validator = Validator::make($request->all(), [
    'title' => 'required|string|max:255',
    'body' => 'required|string',
]);

$validator->after(function ($validator) use ($request) {
    if (strpos($request->title, 'forbidden') !== false) {
        $validator->errors()->add('title', 'The title contains forbidden words.');
    }
});

if ($validator->fails()) {
    return redirect()->back()
        ->withErrors($validator)
        ->withInput();
}
```

## Advanced Validation Techniques

### Validating Arrays

```php
$rules = [
    'users' => 'required|array|min:1',
    'users.*.name' => 'required|string|max:255',
    'users.*.email' => 'required|email|distinct',
    'users.*.roles' => 'array',
    'users.*.roles.*' => 'exists:roles,id',
];
```

### Validating Nested Data

```php
$rules = [
    'user.name' => 'required|string|max:255',
    'user.email' => 'required|email',
    'user.profile.bio' => 'nullable|string',
    'user.profile.website' => 'nullable|url',
];
```

### Validating JSON

```php
$rules = [
    'options' => 'required|json',
];

// After validation, you can access the JSON data
$options = json_decode($request->options, true);
```

### Validating Dates

```php
$rules = [
    'start_date' => 'required|date_format:Y-m-d',
    'end_date' => 'required|date_format:Y-m-d|after_or_equal:start_date',
    'birth_date' => 'required|date|before:today',
    'appointment' => 'required|date|after_or_equal:today|before:+30 days',
];
```

### Validating Passwords

```php
use Illuminate\Validation\Rules\Password;

$rules = [
    'password' => [
        'required',
        'confirmed',
        Password::min(8)
            ->letters()
            ->mixedCase()
            ->numbers()
            ->symbols()
            ->uncompromised(),
    ],
];
```

### Validating Unique Records

```php
$rules = [
    // Basic unique check
    'email' => 'required|email|unique:users',
    
    // Ignore the current user when updating
    'email' => 'required|email|unique:users,email,' . $user->id,
    
    // Specify a custom column name
    'username' => 'required|unique:users,username',
    
    // Additional where clauses
    'email' => 'required|email|unique:users,email,NULL,id,account_id,' . $accountId,
];
```

### Validating Exists Records

```php
$rules = [
    // Basic exists check
    'category_id' => 'required|exists:categories,id',
    
    // Check against a different column
    'username' => 'required|exists:users,username',
    
    // Additional where clauses
    'email' => 'required|exists:users,email,active,1',
];
```

## Validation Events

Laravel fires events during the validation process:

```php
<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Support\ServiceProvider;
use Illuminate\Validation\Events\ValidationFailed;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Event::listen(ValidationFailed::class, function (ValidationFailed $event) {
            // Log validation failure
            \Log::warning('Validation failed', [
                'data' => $event->data,
                'errors' => $event->validator->errors()->toArray(),
            ]);
        });
    }
}
```

## Custom Validation Rules

### Using Closure Rules

```php
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

Validator::make($request->all(), [
    'title' => [
        'required',
        'string',
        'max:255',
        function ($attribute, $value, $fail) {
            if (strtolower($value) === 'forbidden') {
                $fail("The {$attribute} cannot be 'forbidden'.");
            }
        },
    ],
]);
```

### Using Rule Objects

```php
<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NotInArray implements ValidationRule
{
    protected $values;
    
    public function __construct(array $values)
    {
        $this->values = $values;
    }
    
    /**
     * Run the validation rule.
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (in_array($value, $this->values, true)) {
            $fail("The {$attribute} cannot be one of: " . implode(', ', $this->values));
        }
    }
}
```

Using the custom rule:

```php
use App\Rules\NotInArray;

$request->validate([
    'username' => ['required', new NotInArray(['admin', 'root', 'superuser'])],
]);
```

### Extending the Validator

```php
<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Validator;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Validator::extend('alpha_spaces', function ($attribute, $value, $parameters, $validator) {
            return preg_match('/^[\pL\s]+$/u', $value);
        });
        
        Validator::replacer('alpha_spaces', function ($message, $attribute, $rule, $parameters) {
            return str_replace(':attribute', $attribute, 'The :attribute may only contain letters and spaces.');
        });
    }
}
```

Using the custom validation rule:

```php
$request->validate([
    'name' => 'required|alpha_spaces',
]);
```

## Best Practices

1. **Use Form Requests** for complex validation scenarios
2. **Group related validations** in the same Form Request
3. **Add authorization logic** to Form Requests
4. **Use custom validation rules** for reusable validation logic
5. **Validate early** to fail fast
6. **Use type hints** in your validation rules
7. **Provide helpful error messages** for better user experience
8. **Use validation groups** for multi-step forms
9. **Test your validation rules** thoroughly
10. **Consider using validation factories** for testing

## Common Validation Patterns

### Registration Form

```php
$rules = [
    'name' => 'required|string|max:255',
    'email' => 'required|string|email|max:255|unique:users',
    'password' => [
        'required',
        'confirmed',
        Password::min(8)
            ->letters()
            ->mixedCase()
            ->numbers()
            ->symbols(),
    ],
    'terms' => 'accepted',
];
```

### Profile Update Form

```php
$rules = [
    'name' => 'required|string|max:255',
    'email' => 'required|string|email|max:255|unique:users,email,' . $user->id,
    'bio' => 'nullable|string|max:1000',
    'website' => 'nullable|url',
    'avatar' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
];
```

### Search Form

```php
$rules = [
    'query' => 'nullable|string|max:255',
    'category' => 'nullable|exists:categories,id',
    'sort' => 'nullable|in:newest,oldest,popular',
    'per_page' => 'nullable|integer|min:10|max:100',
];
```

### Payment Form

```php
$rules = [
    'payment_method' => 'required|in:credit_card,paypal',
    'card_number' => 'required_if:payment_method,credit_card|string',
    'card_expiry' => 'required_if:payment_method,credit_card|date_format:m/y',
    'card_cvc' => 'required_if:payment_method,credit_card|numeric|digits_between:3,4',
    'paypal_email' => 'required_if:payment_method,paypal|email',
];
```

## References

- [Laravel Validation Documentation](https://laravel.com/docs/12.x/validation)
- [Available Validation Rules](https://laravel.com/docs/12.x/validation#available-validation-rules)
- [Custom Validation Rules](https://laravel.com/docs/12.x/validation#custom-validation-rules)
- [Form Request Validation](https://laravel.com/docs/12.x/validation#form-request-validation)