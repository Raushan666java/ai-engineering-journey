# Quick Reference Guide 🚀

## Fast Access to Essential Development Knowledge

This is your go-to reference for quick lookups while coding.

---

## Common Commands

### Laravel

```bash
# Artisan Commands
php artisan serve                    # Start dev server
php artisan migrate                  # Run migrations
php artisan migrate:fresh --seed     # Fresh database with seeds
php artisan make:controller UserController --resource
php artisan make:model Post -mfsc    # Model, migration, factory, seeder, controller
php artisan route:list               # List all routes
php artisan tinker                   # Interactive shell

# Cache Commands
php artisan cache:clear
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan optimize:clear           # Clear all caches

# Queue Commands
php artisan queue:work
php artisan queue:retry all
php artisan queue:failed

# Testing
php artisan test
php artisan test --filter=UserTest
./vendor/bin/pest
```

### Node/NPM

```bash
# Package Management
npm install
npm install package-name
npm install -D package-name          # Dev dependency
npm update
npm audit fix

# Development
npm run dev                          # Vite dev server
npm run build                        # Production build
npm run test                         # Run tests
npm run test -- --watch              # Watch mode
```

### Git

```bash
# Common Operations
git status
git add .
git commit -m "message"
git push
git pull
git checkout -b feature-name         # New branch
git merge feature-name
git stash                            # Save changes temporarily
git stash pop                        # Restore stashed changes

# Undoing Changes
git reset HEAD~1                     # Undo last commit (keep changes)
git reset --hard HEAD~1              # Undo last commit (discard changes)
git checkout -- filename             # Discard file changes

# History
git log --oneline
git diff
git show commit-hash
```

---

## Code Snippets

### Laravel

```php
// Controller Method
public function store(StoreUserRequest $request)
{
    $user = User::create($request->validated());
    return new UserResource($user);
}

// Eloquent Query
$users = User::where('active', true)
    ->with('posts')
    ->latest()
    ->paginate(20);

// Form Validation
$request->validate([
    'email' => 'required|email|unique:users',
    'name' => 'required|string|max:255',
]);

// Transaction
DB::transaction(function () use ($data) {
    $user = User::create($data);
    $user->profile()->create($profileData);
});

// Job Dispatch
ProcessOrder::dispatch($order);

// Event
event(new OrderCreated($order));

// Cache
Cache::remember('users', 3600, function () {
    return User::all();
});
```

### React/TypeScript

```typescript
// Functional Component
interface Props {
    user: User;
    onUpdate: (user: User) => void;
}

export function UserProfile({ user, onUpdate }: Props) {
    return <div>{user.name}</div>;
}

// useState
const [count, setCount] = useState(0);
const [user, setUser] = useState<User | null>(null);

// useEffect
useEffect(() => {
    fetchData();
    return () => cleanup();
}, [dependency]);

// Fetch Data
const { data, loading, error } = useFetch<User[]>('/api/users');

// Form Handling
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await submitForm(formData);
};
```

---

## Quick Debugging

### Laravel

```php
// Debug Variables
dd($variable);                       // Dump and die
dump($variable);                     // Dump only

// Log
Log::info('Message', ['data' => $data]);
Log::error('Error', ['error' => $e->getMessage()]);

// Query Log
DB::enableQueryLog();
// ... queries ...
dd(DB::getQueryLog());

// Test Route
php artisan tinker
>>> route('users.index');
>>> User::first();
```

### JavaScript/React

```typescript
// Console
console.log("Value:", value);
console.table(array);
console.trace(); // Stack trace
debugger; // Breakpoint

// Performance
console.time("operation");
// ... code ...
console.timeEnd("operation");
```

---

## Testing Quick Reference

### PHPUnit/Pest

```php
// Basic Test
it('creates a user', function () {
    $user = User::factory()->create();
    expect($user)->toBeInstanceOf(User::class);
});

// HTTP Test
$response = $this->getJson('/api/users');
$response->assertStatus(200)
    ->assertJsonStructure(['data']);

// Database
$this->assertDatabaseHas('users', ['email' => 'test@test.com']);
```

### Vitest/React Testing Library

```typescript
// Component Test
it('renders user name', () => {
    render(<UserProfile user={mockUser} />);
    expect(screen.getByText('John Doe')).toBeInTheDocument();
});

// User Interaction
await userEvent.click(button);
await userEvent.type(input, 'text');
```

---

## Environment Setup

### .env Essential Variables

```env
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=database_name
DB_USERNAME=root
DB_PASSWORD=

CACHE_DRIVER=file
QUEUE_CONNECTION=sync
SESSION_DRIVER=file

MAIL_MAILER=log
```

---

## Performance Optimization Checklist

### Laravel

- [ ] Eager load relationships (avoid N+1)
- [ ] Add database indexes
- [ ] Use query caching
- [ ] Optimize images
- [ ] Enable OPcache
- [ ] Queue long-running tasks
- [ ] Use CDN for assets

### React

- [ ] Use React.memo for expensive components
- [ ] Implement code splitting
- [ ] Optimize images (lazy loading)
- [ ] Use production build
- [ ] Minimize bundle size
- [ ] Virtual scrolling for long lists
- [ ] Debounce user input

---

## Security Checklist

- [ ] Validate all user input
- [ ] Use CSRF protection
- [ ] Sanitize output (XSS prevention)
- [ ] Use parameterized queries (SQL injection prevention)
- [ ] Implement rate limiting
- [ ] Use HTTPS in production
- [ ] Keep dependencies updated
- [ ] Implement proper authentication
- [ ] Use environment variables for secrets
- [ ] Enable CORS properly

---

## VS Code Essential Shortcuts

```
Ctrl + P              Quick file open
Ctrl + Shift + P      Command palette
Ctrl + D              Select next occurrence
Ctrl + /              Toggle comment
Alt + ↑/↓             Move line
F2                    Rename symbol
F12                   Go to definition
Ctrl + `              Toggle terminal
```

---

## Common Error Solutions

### "Class not found"

```bash
composer dump-autoload
```

### "Route not found"

```bash
php artisan route:clear
php artisan route:cache
```

### "CSRF token mismatch"

```php
// Add @csrf to forms
// Check session configuration
```

### "Module not found" (Node)

```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Useful Links

- Laravel Docs: https://laravel.com/docs
- React Docs: https://react.dev
- PHP.net: https://php.net
- MDN Web Docs: https://developer.mozilla.org
- Stack Overflow: https://stackoverflow.com
- Laracasts: https://laracasts.com

---

**For detailed guides, see the main skills documentation files!**
