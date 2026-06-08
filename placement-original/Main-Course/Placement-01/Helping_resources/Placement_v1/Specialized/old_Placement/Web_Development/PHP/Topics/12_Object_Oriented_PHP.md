# 12. Object-Oriented PHP

## Classes and Objects

### Basic Class Definition
```php
class Car {
    // Properties (attributes)
    public $color;
    public $brand;
    public $year;
    
    // Constructor
    public function __construct($color, $brand, $year) {
        $this->color = $color;
        $this->brand = $brand;
        $this->year = $year;
    }
    
    // Methods
    public function getInfo() {
        return "A $this->color $this->brand from $this->year";
    }
    
    public function drive() {
        return "The $this->brand is driving";
    }
}

// Creating an object (instance)
$myCar = new Car('red', 'Toyota', 2020);

// Accessing properties
echo $myCar->color; // red

// Calling methods
echo $myCar->getInfo(); // A red Toyota from 2020
```

### Constructor and Destructor
```php
class Database {
    private $connection;
    
    // Constructor - called when object is created
    public function __construct($host, $username, $password) {
        echo "Connecting to database...\n";
        $this->connection = new mysqli($host, $username, $password);
    }
    
    // Destructor - called when object is destroyed
    public function __destruct() {
        echo "Closing database connection...\n";
        $this->connection->close();
    }
}

// Constructor is called
$db = new Database('localhost', 'root', 'password');

// Some operations...

// Destructor is called when script ends or when unset($db) is called
unset($db);
```

### Constructor Property Promotion (PHP 8.0+)
```php
class Point {
    // Properties defined and initialized in constructor
    public function __construct(
        public float $x = 0.0,
        public float $y = 0.0,
        public float $z = 0.0,
    ) {}
    
    public function distance(): float {
        return sqrt($this->x ** 2 + $this->y ** 2 + $this->z ** 2);
    }
}

$point = new Point(1.0, 2.0, 3.0);
echo $point->distance(); // 3.7416573867739
```

## Properties and Methods

### Access Modifiers
```php
class User {
    // Access modifiers
    public $username;      // Accessible from anywhere
    protected $email;      // Accessible from this class and child classes
    private $password;     // Accessible only from this class
    
    public function __construct($username, $email, $password) {
        $this->username = $username;
        $this->email = $email;
        $this->password = $password;
    }
    
    public function getEmail() {
        return $this->email; // Can access protected property
    }
    
    public function verifyPassword($input) {
        return password_verify($input, $this->password); // Can access private property
    }
}

$user = new User('john', 'john@example.com', password_hash('secret', PASSWORD_DEFAULT));

echo $user->username; // Accessible
// echo $user->email; // Error: Cannot access protected property
// echo $user->password; // Error: Cannot access private property

echo $user->getEmail(); // Accessible through public method
```

### Property Types (PHP 7.4+)
```php
class Product {
    public string $name;
    public float $price;
    public ?string $description; // Nullable type
    public int $stock = 0; // With default value
    
    public function __construct(string $name, float $price, ?string $description = null) {
        $this->name = $name;
        $this->price = $price;
        $this->description = $description;
    }
}

$product = new Product('Phone', 499.99);
// $product->price = 'expensive'; // Error: Must be of type float
```

### Static Properties and Methods
```php
class MathUtils {
    // Static property
    public static $pi = 3.14159;
    
    // Static method
    public static function square($number) {
        return $number * $number;
    }
    
    // Static method using static property
    public static function circleArea($radius) {
        return self::$pi * self::square($radius);
    }
}

// Accessing static members without creating an instance
echo MathUtils::$pi; // 3.14159
echo MathUtils::square(4); // 16
echo MathUtils::circleArea(5); // ~78.54
```

### Constants
```php
class PaymentStatus {
    // Class constants
    const PENDING = 'pending';
    const COMPLETED = 'completed';
    const FAILED = 'failed';
    const REFUNDED = 'refunded';
    
    public function isCompleted($status) {
        return $status === self::COMPLETED;
    }
}

// Accessing constants
echo PaymentStatus::PENDING; // pending

$payment = new PaymentStatus();
if ($payment->isCompleted(PaymentStatus::COMPLETED)) {
    echo "Payment is completed";
}
```

## Inheritance

### Basic Inheritance
```php
// Parent class
class Vehicle {
    protected $brand;
    protected $year;
    
    public function __construct($brand, $year) {
        $this->brand = $brand;
        $this->year = $year;
    }
    
    public function getInfo() {
        return "$this->brand from $this->year";
    }
    
    public function start() {
        return "Vehicle starting...";
    }
}

// Child class
class Car extends Vehicle {
    private $doors;
    
    public function __construct($brand, $year, $doors) {
        parent::__construct($brand, $year); // Call parent constructor
        $this->doors = $doors;
    }
    
    // Override parent method
    public function getInfo() {
        return parent::getInfo() . " with $this->doors doors";
    }
    
    // New method in child class
    public function honk() {
        return "Beep beep!";
    }
}

$car = new Car('Toyota', 2020, 4);
echo $car->getInfo(); // Toyota from 2020 with 4 doors
echo $car->start(); // Vehicle starting...
echo $car->honk(); // Beep beep!
```

### Final Keyword
```php
// Final class cannot be extended
final class CreditCard {
    // Implementation
}

class Vehicle {
    // Final method cannot be overridden in child classes
    final public function getVIN() {
        return "VIN generation logic";
    }
}
```

### Abstract Classes and Methods
```php
// Abstract class cannot be instantiated
abstract class Shape {
    protected $color;
    
    public function __construct($color) {
        $this->color = $color;
    }
    
    // Abstract method must be implemented by child classes
    abstract public function calculateArea();
    
    // Regular method
    public function getColor() {
        return $this->color;
    }
}

class Circle extends Shape {
    private $radius;
    
    public function __construct($color, $radius) {
        parent::__construct($color);
        $this->radius = $radius;
    }
    
    // Implementation of abstract method
    public function calculateArea() {
        return pi() * $this->radius * $this->radius;
    }
}

class Rectangle extends Shape {
    private $width;
    private $height;
    
    public function __construct($color, $width, $height) {
        parent::__construct($color);
        $this->width = $width;
        $this->height = $height;
    }
    
    // Implementation of abstract method
    public function calculateArea() {
        return $this->width * $this->height;
    }
}

// $shape = new Shape('red'); // Error: Cannot instantiate abstract class

$circle = new Circle('blue', 5);
echo $circle->calculateArea(); // ~78.54
echo $circle->getColor(); // blue

$rectangle = new Rectangle('green', 4, 6);
echo $rectangle->calculateArea(); // 24
```

## Interfaces

### Basic Interface
```php
// Interface defines a contract
interface Drivable {
    public function drive();
    public function stop();
}

interface Flyable {
    public function fly();
    public function land();
}

// Class implementing interfaces
class Car implements Drivable {
    public function drive() {
        return "Car is driving";
    }
    
    public function stop() {
        return "Car has stopped";
    }
}

class Airplane implements Drivable, Flyable {
    public function drive() {
        return "Airplane is taxiing";
    }
    
    public function stop() {
        return "Airplane has stopped";
    }
    
    public function fly() {
        return "Airplane is flying";
    }
    
    public function land() {
        return "Airplane is landing";
    }
}

// Type hinting with interfaces
function travel(Drivable $vehicle) {
    echo $vehicle->drive();
    echo $vehicle->stop();
}

travel(new Car()); // Works
travel(new Airplane()); // Also works
```

### Interface Inheritance
```php
interface Animal {
    public function eat();
}

interface Mammal extends Animal {
    public function breathe();
}

class Dog implements Mammal {
    public function eat() {
        return "Dog is eating";
    }
    
    public function breathe() {
        return "Dog is breathing";
    }
}
```

## Traits

### Basic Trait Usage
```php
// Trait - reusable code
trait Logger {
    public function log($message) {
        echo "[" . date('Y-m-d H:i:s') . "] $message\n";
    }
}

trait FileOperations {
    public function readFile($filename) {
        return file_get_contents($filename);
    }
    
    public function writeFile($filename, $content) {
        return file_put_contents($filename, $content);
    }
}

// Using traits in classes
class User {
    use Logger;
    
    public function login() {
        $this->log("User logged in");
    }
}

class FileManager {
    use Logger, FileOperations;
    
    public function copyFile($source, $destination) {
        $content = $this->readFile($source);
        $this->writeFile($destination, $content);
        $this->log("File copied from $source to $destination");
    }
}

$user = new User();
$user->log("Test message"); // [2023-06-15 14:30:25] Test message

$fileManager = new FileManager();
$fileManager->copyFile('source.txt', 'destination.txt');
```

### Trait Method Conflict Resolution
```php
trait A {
    public function hello() {
        return "Hello from A";
    }
}

trait B {
    public function hello() {
        return "Hello from B";
    }
}

class MyClass {
    use A, B {
        // Resolve conflict by specifying which trait's method to use
        B::hello insteadof A;
        // Alias A's hello method to helloA
        A::hello as helloA;
    }
}

$obj = new MyClass();
echo $obj->hello(); // Hello from B
echo $obj->helloA(); // Hello from A
```

### Trait Visibility Modification
```php
trait Authenticator {
    public function login() {
        // Login logic
    }
    
    public function logout() {
        // Logout logic
    }
}

class Admin {
    use Authenticator {
        // Change visibility of trait methods
        login as protected;
        logout as private;
    }
}
```

## Namespaces

### Basic Namespace Usage
```php
// File: Models/User.php
namespace App\Models;

class User {
    public function __construct() {
        echo "App\\Models\\User instance created";
    }
}

// File: Controllers/UserController.php
namespace App\Controllers;

// Import the User class
use App\Models\User;

class UserController {
    public function index() {
        $user = new User();
        // ...
    }
}

// Alternative without use statement
$user = new \App\Models\User();
```

### Multiple Namespaces
```php
namespace App\Models {
    class User {
        // ...
    }
    
    class Product {
        // ...
    }
}

namespace App\Controllers {
    class UserController {
        // ...
    }
}
```

### Importing Classes with Aliases
```php
namespace App\Controllers;

// Import with alias
use App\Models\User as UserModel;
use App\Services\Authentication as Auth;

class UserController {
    public function register() {
        $user = new UserModel();
        Auth::register($user);
    }
}
```

## Magic Methods

### Common Magic Methods
```php
class Product {
    private $data = [];
    
    // Called when creating an object
    public function __construct($name, $price) {
        $this->data['name'] = $name;
        $this->data['price'] = $price;
    }
    
    // Called when object is treated as a string
    public function __toString() {
        return $this->data['name'] . ': $' . $this->data['price'];
    }
    
    // Called when accessing non-existent or inaccessible properties
    public function __get($name) {
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        return null;
    }
    
    // Called when writing to non-existent or inaccessible properties
    public function __set($name, $value) {
        $this->data[$name] = $value;
    }
    
    // Called when checking if a property exists with isset() or empty()
    public function __isset($name) {
        return isset($this->data[$name]);
    }
    
    // Called when unset() is used on a property
    public function __unset($name) {
        unset($this->data[$name]);
    }
    
    // Called when invoking an object as a function
    public function __invoke($quantity) {
        return $this->data['price'] * $quantity;
    }
    
    // Called when cloning an object
    public function __clone() {
        // Deep copy if needed
        $this->data = array_map(function($value) {
            return is_object($value) ? clone $value : $value;
        }, $this->data);
    }
    
    // Called when serializing an object
    public function __sleep() {
        // Return array of property names to serialize
        return ['data'];
    }
    
    // Called when unserializing an object
    public function __wakeup() {
        // Reconnect resources, etc.
    }
}

$product = new Product('Laptop', 999.99);

// __toString
echo $product; // Laptop: $999.99

// __get and __set
echo $product->name; // Laptop
$product->color = 'Silver';
echo $product->color; // Silver

// __isset and __unset
var_dump(isset($product->price)); // bool(true)
unset($product->price);
var_dump(isset($product->price)); // bool(false)

// __invoke
echo $product(3); // 2999.97 (price * quantity)

// __clone
$product2 = clone $product;
```

## Type Hinting and Return Types

### Parameter and Return Type Declarations
```php
class Calculator {
    // Type hints for parameters and return type
    public function add(int $a, int $b): int {
        return $a + $b;
    }
    
    // Nullable types (PHP 7.1+)
    public function divide(float $a, ?float $b = null): ?float {
        if ($b === null) {
            return null;
        }
        if ($b === 0) {
            throw new \InvalidArgumentException("Cannot divide by zero");
        }
        return $a / $b;
    }
    
    // Union types (PHP 8.0+)
    public function process(string|int $input): string|int {
        if (is_string($input)) {
            return strtoupper($input);
        }
        return $input * 2;
    }
    
    // void return type (PHP 7.1+)
    public function logOperation(string $operation): void {
        // No return value
        echo "Operation performed: $operation";
    }
    
    // mixed type (PHP 8.0+)
    public function getValue(string $key): mixed {
        $values = [
            'name' => 'John',
            'age' => 30,
            'active' => true,
            'scores' => [85, 90, 95]
        ];
        return $values[$key] ?? null;
    }
}
```

## Advanced OOP Concepts

### Method Chaining
```php
class QueryBuilder {
    private $table;
    private $where = [];
    private $orderBy;
    
    public function table(string $table): self {
        $this->table = $table;
        return $this;
    }
    
    public function where(string $column, string $operator, $value): self {
        $this->where[] = [$column, $operator, $value];
        return $this;
    }
    
    public function orderBy(string $column, string $direction = 'ASC'): self {
        $this->orderBy = [$column, $direction];
        return $this;
    }
    
    public function get(): array {
        // Build and execute query
        // Return results
        return []; // Placeholder
    }
}

// Method chaining
$users = (new QueryBuilder())
    ->table('users')
    ->where('age', '>', 18)
    ->where('status', '=', 'active')
    ->orderBy('name', 'ASC')
    ->get();
```

### Late Static Binding
```php
class Model {
    protected static $table;
    
    public static function getTableName() {
        // self::$table would always refer to Model::$table
        // static::$table refers to the called class's $table
        return static::$table;
    }
    
    public static function all() {
        $table = static::getTableName();
        return "SELECT * FROM $table";
    }
}

class User extends Model {
    protected static $table = 'users';
}

class Product extends Model {
    protected static $table = 'products';
}

echo User::all(); // SELECT * FROM users
echo Product::all(); // SELECT * FROM products
```

### Object Cloning
```php
class Address {
    public $street;
    public $city;
    
    public function __construct($street, $city) {
        $this->street = $street;
        $this->city = $city;
    }
}

class Person {
    public $name;
    public $address; // Object reference
    
    public function __construct($name, Address $address) {
        $this->name = $name;
        $this->address = $address;
    }
    
    // Custom clone behavior
    public function __clone() {
        // Deep copy the Address object
        $this->address = clone $this->address;
    }
}

$address = new Address('123 Main St', 'New York');
$person1 = new Person('John', $address);

// Without __clone, $person2->address would reference the same object as $person1->address
$person2 = clone $person1;
$person2->name = 'Jane';
$person2->address->street = '456 Oak Ave';

echo $person1->address->street; // Still '123 Main St' because of deep copy
echo $person2->address->street; // '456 Oak Ave'
```

### Anonymous Classes
```php
// Create an anonymous class instance
$logger = new class {
    public function log($message) {
        echo "[LOG] $message\n";
    }
};

$logger->log('Test message');

// Anonymous class with constructor and interface implementation
$handler = new class('errors.log') implements \Psr\Log\LoggerInterface {
    private $filename;
    
    public function __construct($filename) {
        $this->filename = $filename;
    }
    
    public function emergency($message, array $context = []) {
        $this->log('EMERGENCY', $message, $context);
    }
    
    // Other PSR-3 methods...
    
    private function log($level, $message, array $context) {
        // Implementation
    }
};
```

## Best Learning Methods
- Build a complete object-oriented application (e.g., blog, inventory system)
- Refactor procedural code to OOP
- Implement design patterns (Singleton, Factory, Observer, etc.)
- Create class hierarchies with inheritance
- Practice using interfaces for dependency injection
- Use traits to share functionality between classes
- Explore PHP frameworks to see OOP in action (Laravel, Symfony)
- Reference: https://www.php.net/manual/en/language.oop5.php
