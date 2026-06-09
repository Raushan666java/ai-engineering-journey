---
title: Validation & Form Requests — Laravel
---

# Validation & Form Requests

> **Status:** ○ Planned · Edit this line to ◐ Practicing · ● Drilled

Validation is the line between "works on my machine" and "production-ready". Interviewers ask this to see if you separate validation from controller logic — fat controllers vs clean ones.

This drill gives you a 3-sentence script, the 3 ways to validate, and why Form Requests win for anything beyond toy apps.

---

## Inhale.

The interviewer asks:

> *"How do you validate input in Laravel? Show me the cleanest way."*

Pause. Then deliver.

---

## The Script — 3 sentences

> *"Three ways. Inline `$request->validate([...])` for simple cases. Manual `Validator::make($data, $rules)->validate()` when the data isn't on a request — like console commands or jobs. And **Form Request classes** — `php artisan make:request StorePostRequest` — for anything beyond a one-off form."*
>
> *"Form Requests are my default — type-hint one in a controller and Laravel auto-runs `authorize()` first, then `rules()`, throws `ValidationException` if either fails, and only enters the controller body if both pass. The controller stays focused on the success path, validation lives in its own class, tests can hit each layer independently."*
>
> *"For my fest portal I had 15 endpoints. Inline `validate()` made the controllers 60+ lines each. Moving to FormRequest dropped controllers to 8–12 lines and let me reuse `StoreEventRequest` rules between the web form and the API endpoint with one line — that's the SOLID payoff."*

Three sentences. Three ways → why FormRequest wins → real anecdote. **Fifty-five seconds spoken.**

---

## The Anatomy — why this wins

Sentence 1 — **names all three approaches** with a one-line trigger for when to use each.

Sentence 2 — **the flow** — `authorize`, `rules`, throw, controller. Five words, complete picture.

Sentence 3 — **before/after metric** — 60 lines → 8 lines. Reuse story.

---

## Show me the code

```php
// 1. Inline validate() — simplest, fine for prototypes
public function store(Request $request)
{
    $validated = $request->validate([
        'title' => ['required', 'string', 'max:255'],
        'body'  => ['required', 'string'],
        'tags'  => ['array'],
        'tags.*' => ['string', 'max:20'],
    ]);

    Post::create($validated);
    return redirect('/posts');
}
```

```php
// 2. Manual Validator facade — when no request object
use Illuminate\Support\Facades\Validator;

$data = ['title' => 'Hi'];

$validator = Validator::make($data, [
    'title' => ['required', 'string', 'max:255'],
]);

if ($validator->fails()) {
    return back()->withErrors($validator)->withInput();
}

// Or throw on failure
$validator->validate();

// In a command/job
Validator::make($payload, $rules)->validate();
```

```php
// 3. Form Request — the production default
// php artisan make:request StorePostRequest

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StorePostRequest extends FormRequest
{
    public function authorize(): bool
    {
        return $this->user()?->can('create', \App\Models\Post::class) ?? false;
    }

    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'slug'  => [
                'required',
                'alpha_dash',
                Rule::unique('posts')->ignore($this->route('post')),
            ],
            'body'        => ['required', 'string', 'min:50'],
            'category_id' => ['required', 'exists:categories,id'],
            'tags'        => ['array', 'max:5'],
            'tags.*'      => ['string', 'max:20'],
            'published_at'=> ['nullable', 'date', 'after:now'],
        ];
    }

    public function messages(): array
    {
        return [
            'title.required' => 'Every post needs a title.',
            'body.min'       => 'Posts must be at least :min characters.',
        ];
    }

    public function attributes(): array
    {
        return [
            'category_id' => 'category',
        ];
    }

    // Run BEFORE validation rules
    protected function prepareForValidation(): void
    {
        $this->merge([
            'slug' => str($this->title)->slug(),
        ]);
    }

    // Run AFTER core rules — custom complex validation
    public function withValidator($validator): void
    {
        $validator->after(function ($validator) {
            if ($this->published_at && $this->user()->isOnFreeTier()) {
                $validator->errors()->add('published_at',
                    'Scheduling is a paid feature.');
            }
        });
    }
}
```

```php
// Controller — pristine
class PostController
{
    public function store(StorePostRequest $request)
    {
        $post = Post::create($request->validated());

        return redirect()->route('posts.show', $post);
    }
}
// No validation. No auth check. Just the success path.
```

```php
// Conditional rules
public function rules(): array
{
    return [
        'type' => ['required', 'in:event,workshop,talk'],
        'speaker_id' => [
            'required_if:type,talk',
            'nullable',
            'exists:speakers,id',
        ],
        'capacity' => [
            Rule::requiredIf(fn () => in_array($this->type, ['event', 'workshop'])),
            'integer', 'min:1',
        ],
    ];
}

// sometimes — only validate if present
'phone' => ['sometimes', 'string', 'regex:/^[0-9]{10}$/'],
```

```php
// Common rule set — keep this in your head
'required', 'nullable', 'sometimes', 'filled', 'present',
'string', 'integer', 'numeric', 'boolean', 'array', 'date',
'email', 'url', 'uuid', 'ip', 'json',
'min:N', 'max:N', 'between:a,b', 'size:N',
'in:a,b,c', 'not_in:a,b', 'regex:/.../',
'unique:table,col', 'exists:table,col',
'before:date', 'after:date', 'date_format:Y-m-d',
'confirmed',                    // password + password_confirmation
'same:other_field', 'different:other_field',
'mimes:jpg,png', 'image', 'max:2048',  // for files (in KB)
'alpha', 'alpha_num', 'alpha_dash',
Rule::in([1, 2, 3]),
Rule::unique('posts')->ignore($id),
Rule::exists('categories', 'id')->where(fn ($q) => $q->where('active', true)),
```

```php
// Accessing validated data — three ways
$request->validated();           // all validated fields
$request->validated('title');    // single field, with optional default
$request->safe()->only(['title', 'body']);
$request->safe()->except(['_token']);
```

```php
// Custom Rule class — for reusable complex validation
// php artisan make:rule ValidIndianPhone

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class ValidIndianPhone implements ValidationRule
{
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (! preg_match('/^[6-9][0-9]{9}$/', $value)) {
            $fail('The :attribute is not a valid Indian mobile number.');
        }
    }
}

// Usage
'phone' => ['required', new ValidIndianPhone],
```

Memorize the FormRequest skeleton (`authorize`, `rules`, `messages`) and the controller stub that uses it.

---

## The 5-day practice drill

- [ ] **Day 1 — Recite the 3-sentence script, 5×.** 50–60 seconds.
- [ ] **Day 2 — Write `StorePostRequest` from memory.** `authorize`, `rules`, `messages`. Verify it works in a fresh project.
- [ ] **Day 3 — Refactor one controller's inline `validate()` to a FormRequest. Run tests. Confirm behavior unchanged.**
- [ ] **Day 4 — Drill the 5 follow-ups below.**
- [ ] **Day 5 — Mock interview.** Friend asks *"validate input"*. You answer + write a FormRequest in 60 seconds.

---

## Follow-up questions you must be ready for

### "What happens when validation fails?"

> *"Laravel throws `ValidationException`. For web requests with `Accept: text/html`, Laravel auto-redirects back with `withErrors($errors)` and `withInput()`. For JSON requests, it returns a `422 Unprocessable Entity` with `{ message, errors: {...} }`. The controller body never runs."*

### "What does `authorize()` do?"

> *"Runs **before** `rules()`. Return `true` to allow, `false` to throw `AuthorizationException` → `403`. Common pattern: `return $this->user()?->can('update', $this->route('post'))`. Pure auth check; no validation logic here."*

### "Difference between `sometimes` and `nullable`?"

> *"`nullable` — field is allowed to be `null`, other rules skip if it's null. `sometimes` — field is only validated **if present** in the input. `sometimes` means *don't enforce required*. `nullable` means *if present, null is okay*. Often combined: `['sometimes', 'nullable', 'string']`."*

### "How do you reuse rules between Store and Update requests?"

> *"Inherit. `class UpdatePostRequest extends StorePostRequest`, override `rules()` to call `parent::rules()` then merge with edit-specific rules — `Rule::unique('posts')->ignore($this->route('post'))` so the current row doesn't conflict. Or extract a `protected function baseRules()` in a parent."*

### "Why use `prepareForValidation`?"

> *"Mutates the input **before** validation runs. Slug from title, normalize phone numbers, trim whitespace, lowercase emails. Pairs well with `withValidator` for after-the-fact checks — the two hooks let you sandwich custom logic around the core rules."*

### "Inline vs FormRequest — when use which?"

> *"Inline `validate()` for one-off forms with ≤ 3 rules and no auth check. FormRequest for everything else — anything with auth, custom messages, reusability, or more than a handful of rules. Inline grows ugly fast; FormRequest stays clean indefinitely."*

---

## Recovery — when you blank

If you forget `prepareForValidation`, skip it — it's bonus.

If you forget the rule strings, name a few you remember:

> *"`required`, `string`, `max:255`, `email`, `unique:table` — and I'd look up the long-tail rules in the docs."*

That's honest and accurate.

---

## Common traps

| Trap | Why it kills | Fix |
|---|---|---|
| Puts validation in the controller body manually | Fat controller, untestable | Use FormRequest |
| Forgets `authorize()` exists | Misses the auth-first pattern | Always pair `rules` with `authorize` |
| Uses `$request->all()` instead of `validated()` | Mass assignment risk | Always use `validated()` or `safe()` |
| Confuses `required` with `present` | Different semantics | `present` = key exists, even if empty. `required` = key exists AND not empty |
| Writes complex regex in inline `validate()` | Unreadable | Extract to a custom Rule class |

---

## Variants

=== "30s — Quick screen"

    > "Three ways — inline `$request->validate()`, manual `Validator::make()`, or a FormRequest class. FormRequest is the default — type-hint it in the controller, Laravel runs `authorize` then `rules` before your code touches anything. Controller body stays clean — just the success path."

=== "45s — Default"

    See main 3-sentence script above.

=== "3min — Deep dive"

    Deliver the script. Whiteboard a `StorePostRequest` with `authorize`, `rules`, `messages`. Show the controller using it — 3 lines. Mention `prepareForValidation` for input normalization and `withValidator` for cross-field rules. Close with a custom Rule class as the *"reusable complex rule"* escape hatch.

---

## After you drill this

When this is **● Drilled**, your controllers stay slim and the *"how do you keep controllers thin"* question is one-shot.

Next drills:

→ **[Authorization: Policies](authorization-policies.md)** — *what `authorize()` calls into*
→ **[Authentication: Sanctum](authentication-sanctum.md)** — *who's making the request*
→ **[Dependency Injection](dependency-injection.md)** — *the broader pattern FormRequest uses*

---

*Update your status badge once you can write a FormRequest from memory and explain when to use inline vs FormRequest in one sentence.*
