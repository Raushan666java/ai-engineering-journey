# 07. Visibility: public/private/protected

**Time:** 3 minutes

## Public
Accessible everywhere

```php
class User {
    public string $name; // Accessible anywhere
}
$user->name; // OK
```

## Protected
Accessible in class and child classes

```php
class Model {
    protected function validate() {}
}
class User extends Model {
    public function save() {
        $this->validate(); // OK - same family
    }
}
```

## Private
Only accessible in defining class

```php
class User {
    private string $password;
    public function setPassword($pwd) {
        $this->password = bcrypt($pwd); // OK
    }
}
// $user->password; // ERROR
```

## Laravel Example

```php
class User extends Model {
    protected $fillable = ['name', 'email']; // Child classes can access
    private $secretKey = 'abc123'; // Only this class
    public $timestamps = true; // Anyone can access
}
```

**Next:** [08. Static and Auto-Resolving](08_Static_and_AutoResolving.md)
