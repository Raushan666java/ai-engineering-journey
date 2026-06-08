# Object-Oriented PHP

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" that contain data and code. PHP has robust support for OOP, allowing developers to create maintainable and reusable code.

## Classes and Objects

### Basic Class Definition

A class is a blueprint for creating objects. It defines properties (attributes) and methods (functions) that the objects will have.

```php
<?php
// Define a class
class Car {
    // Properties (attributes)
    public $brand;
    public $color;
    public $year;
    
    // Constructor - called when an object is created
    public function __construct($brand, $color, $year) {
        $this->brand = $brand;
        $this->color = $color;
        $this->year = $year;
    }
    
    // Method
    public function getInfo() {
        return "A $this->color $this->brand from $this->year";
    }
    
    // Method with parameters
    public function setColor($newColor) {
        $this->color = $newColor;
    }
}

// Create an object (instance of the class)
$myCar = new Car("Toyota", "blue", 2020);

// Access properties
echo $myCar->brand;  // Toyota
echo $myCar->color;  // blue

// Call methods
echo $myCar->getInfo();  // A blue Toyota from 2020

// Change property using a method
$myCar->setColor("red");
echo $myCar->getInfo();  // A red Toyota from 2020

// Change property directly
$myCar->year = 2021;
echo $myCar->getInfo();  // A red Toyota from 2021
?>
```

### Constructor and Destructor

```php
<?php
class Database {
    private $connection;
    private $host;
    private $username;
    private $password;
    private $database;
    
    // Constructor - initialize the object
    public function __construct($host, $username, $password, $database) {
        $this->host = $host;
        $this->username = $username;
        $this->password = $password;
        $this->database = $database;
        
        $this->connect();
    }
    
    private function connect() {
        $this->connection = new mysqli(
            $this->host,
            $this->username,
            $this->password,
            $this->database
        );
        
        if ($this->connection->connect_error) {
            die("Connection failed: " . $this->connection->connect_error);
        }
        
        echo "Connected successfully<br>";
    }
    
    // Destructor - clean up when object is destroyed
    public function __destruct() {
        if ($this->connection) {
            $this->connection->close();
            echo "Connection closed<br>";
        }
    }
    
    public function query($sql) {
        return $this->connection->query($sql);
    }
}

// Create object
$db = new Database("localhost", "username", "password", "mydb");

// Use object
$result = $db->query("SELECT * FROM users");

// Object is automatically destroyed at the end of the script
// or when you call unset($db)
unset($db); // This will trigger the destructor
?>
```

### Constructor Property Promotion (PHP 8.0+)

```php
<?php
// Traditional way
class Point {
    public float $x;
    public float $y;
    public float $z;
    
    public function __construct(float $x = 0.0, float $y = 0.0, float $z = 0.0) {
        $this->x = $x;
        $this->y = $y;
        $this->z = $z;
    }
}

// With constructor property promotion
class Point {
    public function __construct(
        public float $x = 0.0,
        public float $y = 0.0,
        public float $z = 0.0,
    ) {}
    
    public function distanceFromOrigin(): float {
        return sqrt($this->x ** 2 + $this->y ** 2 + $this->z ** 2);
    }
}

$point = new Point(1.0, 2.0, 3.0);
echo $point->distanceFromOrigin(); // 3.7416573867739
?>
```

## Access Modifiers

PHP has three access modifiers that control the visibility of properties and methods:

```php
<?php
class User {
    // Public - accessible from anywhere
    public $username;
    
    // Protected - accessible within the class and child classes
    protected $email;
    
    // Private - accessible only within this class
    private $password;
    
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
    
    private function hashPassword($password) {
        return password_hash($password, PASSWORD_DEFAULT);
    }
}

$user = new User("john_doe", "john@example.com", "secret123");

// Public access
echo $user->username; // Works

// Protected and private access
// echo $user->email;    // Error: Cannot access protected property
// echo $user->password; // Error: Cannot access private property

// Access through public methods
echo $user->getEmail(); // Works
var_dump($user->verifyPassword("secret123")); // Works

// Private method
// $user->hashPassword("test"); // Error: Call to private method
?>
```

## Inheritance

Inheritance allows a class to inherit properties and methods from another class.

```php
<?php
// Parent class
class Vehicle {
    protected $brand;
    protected $color;
    protected $year;
    
    public function __construct($brand, $color, $year) {
        $this->brand = $brand;
        $this->color = $color;
        $this->year = $year;
    }
    
    public function getInfo() {
        return "A $this->color $this->brand from $this->year";
    }
    
    public function start() {
        return "The vehicle is starting...";
    }
}

// Child class
class Car extends Vehicle {
    private $doors;
    
    public function __construct($brand, $color, $year, $doors) {
        // Call parent constructor
        parent::__construct($brand, $color, $year);
        $this->doors = $doors;
    }
    
    // Override parent method
    public function getInfo() {
        // Call parent method
        $info = parent::getInfo();
        return "$info with $this->doors doors";
    }
    
    // New method in child class
    public function honk() {
        return "Beep beep!";
    }
}

// Create objects
$vehicle = new Vehicle("Generic", "white", 2020);
$car = new Car("Toyota", "blue", 2020, 4);

// Call methods
echo $vehicle->getInfo(); // A white Generic from 2020
echo $vehicle->start();   // The vehicle is starting...

echo $car->getInfo();     // A blue Toyota from 2020 with 4 doors
echo $car->start();       // The vehicle is starting...
echo $car->honk();        // Beep beep!
?>
```

### Final Keyword

The `final` keyword prevents a class or method from being extended or overridden.

```php
<?php
// Final class cannot be extended
final class CreditCard {
    protected $number;
    protected $expiry;
    
    public function __construct($number, $expiry) {
        $this->number = $number;
        $this->expiry = $expiry;
    }
    
    public function getLastFour() {
        return substr($this->number, -4);
    }
}

// This would cause an error
// class DebitCard extends CreditCard {}

class Vehicle {
    // Final method cannot be overridden in child classes
    final public function getVIN() {
        return "VIN generation logic";
    }
    
    public function start() {
        return "Starting...";
    }
}

class Car extends Vehicle {
    // This is allowed
    public function start() {
        return "Car " . parent::start();
    }
    
    // This would cause an error
    // public function getVIN() {
    //     return "Custom VIN logic";
    // }
}
?>
```

## Abstract Classes and Methods

Abstract classes cannot be instantiated and may contain abstract methods that must be implemented by child classes.

```php
<?php
// Abstract class
abstract class Shape {
    protected $color;
    
    public function __construct($color) {
        $this->color = $color;
    }
    
    // Abstract method (no implementation)
    abstract public function calculateArea();
    
    // Regular method
    public function getColor() {
        return $this->color;
    }
}

// Concrete class implementing abstract class
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

// Cannot instantiate abstract class
// $shape = new Shape("red"); // Error

// Create concrete objects
$circle = new Circle("blue", 5);
$rectangle = new Rectangle("green", 4, 6);

// Call methods
echo $circle->getColor();       // blue
echo $circle->calculateArea();  // 78.54
echo $rectangle->calculateArea(); // 24
?>
```

## Interfaces

Interfaces define a contract for classes without implementing the methods.

```php
<?php
// Define an interface
interface Drivable {
    public function drive();
    public function stop();
}

// Another interface
interface Flyable {
    public function fly();
    public function land();
}

// Class implementing a single interface
class Car implements Drivable {
    public function drive() {
        return "Car is driving on the road";
    }
    
    public function stop() {
        return "Car has stopped";
    }
}

// Class implementing multiple interfaces
class FlyingCar implements Drivable, Flyable {
    public function drive() {
        return "Flying car is driving on the road";
    }
    
    public function stop() {
        return "Flying car has stopped";
    }
    
    public function fly() {
        return "Flying car is flying";
    }
    
    public function land() {
        return "Flying car has landed";
    }
}

// Function that accepts any Drivable object
function testDrive(Drivable $vehicle) {
    echo $vehicle->drive() . "<br>";
    echo $vehicle->stop() . "<br>";
}

// Create objects
$car = new Car();
$flyingCar = new FlyingCar();

// Use function with different objects
testDrive($car);       // Works
testDrive($flyingCar); // Also works
?>
```

### Interface Inheritance

Interfaces can extend other interfaces.

```php
<?php
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

$dog = new Dog();
echo $dog->eat();    // Dog is eating
echo $dog->breathe(); // Dog is breathing
?>
```

## Traits

Traits provide a mechanism for code reuse in single inheritance languages like PHP.

```php
<?php
// Define a trait
trait Logger {
    protected $logFile = 'app.log';
    
    public function log($message) {
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[$timestamp] $message" . PHP_EOL;
        file_put_contents($this->logFile, $logMessage, FILE_APPEND);
    }
    
    public function setLogFile($file) {
        $this->logFile = $file;
    }
}

// Another trait
trait Timestampable {
    protected $createdAt;
    protected $updatedAt;
    
    public function setCreatedAt() {
        $this->createdAt = new DateTime();
    }
    
    public function setUpdatedAt() {
        $this->updatedAt = new DateTime();
    }
    
    public function getCreatedAt() {
        return $this->createdAt;
    }
    
    public function getUpdatedAt() {
        return $this->updatedAt;
    }
}

// Class using traits
class User {
    // Use traits
    use Logger, Timestampable;
    
    private $name;
    
    public function __construct($name) {
        $this->name = $name;
        $this->setCreatedAt();
        $this->log("User $name created");
    }
    
    public function rename($newName) {
        $this->log("User renamed from $this->name to $newName");
        $this->name = $newName;
        $this->setUpdatedAt();
    }
}

$user = new User("John");
$user->rename("Jane");
$user->setLogFile('user.log');
$user->log("Custom log message");

echo "Created: " . $user->getCreatedAt()->format('Y-m-d H:i:s') . "<br>";
echo "Updated: " . $user->getUpdatedAt()->format('Y-m-d H:i:s') . "<br>";
?>
```

### Trait Method Conflict Resolution

```php
<?php
trait A {
    public function hello() {
        return "Hello from A";
    }
    
    public function greet() {
        return "Greet from A";
    }
}

trait B {
    public function hello() {
        return "Hello from B";
    }
    
    public function greet() {
        return "Greet from B";
    }
}

class MyClass {
    // Resolve conflicts
    use A, B {
        // Use B's version of hello
        B::hello insteadof A;
        
        // Use A's version of greet
        A::greet insteadof B;
        
        // Alias A's hello method to helloA
        A::hello as helloA;
    }
}

$obj = new MyClass();
echo $obj->hello();  // Hello from B
echo $obj->helloA(); // Hello from A
echo $obj->greet();  // Greet from A
?>
```

### Trait Visibility Modification

```php
<?php
trait Authenticator {
    public function login() {
        return "User logged in";
    }
    
    public function logout() {
        return "User logged out";
    }
}

class Admin {
    use Authenticator {
        // Change visibility of trait methods
        login as protected;
        logout as private;
    }
    
    public function adminLogin() {
        return "Admin " . $this->login();
    }
    
    public function adminLogout() {
        return "Admin " . $this->logout();
    }
}

$admin = new Admin();
echo $admin->adminLogin();  // Admin User logged in
echo $admin->adminLogout(); // Admin User logged out

// These would cause errors
// echo $admin->login();  // Error: Call to protected method
// echo $admin->logout(); // Error: Call to private method
?>
```

## Namespaces

Namespaces help organize code and avoid naming conflicts.

```php
<?php
// File: App/Models/User.php
namespace App\Models;

class User {
    public $name;
    
    public function __construct($name) {
        $this->name = $name;
    }
}

// File: App/Services/UserService.php
namespace App\Services;

use App\Models\User;

class UserService {
    public function createUser($name) {
        return new User($name);
    }
}

// File: index.php
require_once 'App/Models/User.php';
require_once 'App/Services/UserService.php';

// Using fully qualified name
$user1 = new \App\Models\User("John");

// Using import
use App\Models\User;
use App\Services\UserService;

$user2 = new User("Jane");
$service = new UserService();
$user3 = $service->createUser("Bob");

// Using alias
use App\Models\User as UserModel;
$user4 = new UserModel("Alice");
?>
```

### Multiple Namespaces in One File

```php
<?php
namespace App\Models {
    class User {
        public $name;
        
        public function __construct($name) {
            $this->name = $name;
        }
    }
    
    class Product {
        public $name;
        
        public function __construct($name) {
            $this->name = $name;
        }
    }
}

namespace App\Services {
    class UserService {
        public function createUser($name) {
            return new \App\Models\User($name);
        }
    }
}

// Global code
namespace {
    use App\Models\User;
    use App\Services\UserService;
    
    $user = new User("John");
    $service = new UserService();
}
?>
```

## Magic Methods

PHP provides several "magic" methods that allow you to define special behaviors for your classes.

```php
<?php
class Product {
    private $data = [];
    
    // Called when creating an object
    public function __construct($name, $price) {
        $this->data['name'] = $name;
        $this->data['price'] = $price;
    }
    
    // Called when reading data from inaccessible (protected or private) or non-existing properties
    public function __get($name) {
        if (array_key_exists($name, $this->data)) {
            return $this->data[$name];
        }
        return null;
    }
    
    // Called when writing data to inaccessible (protected or private) or non-existing properties
    public function __set($name, $value) {
        $this->data[$name] = $value;
    }
    
    // Called when isset() is used on inaccessible (protected or private) or non-existing properties
    public function __isset($name) {
        return isset($this->data[$name]);
    }
    
    // Called when unset() is used on inaccessible (protected or private) or non-existing properties
    public function __unset($name) {
        unset($this->data[$name]);
    }
    
    // Called when an object is treated as a string
    public function __toString() {
        return $this->data['name'] . ': $' . number_format($this->data['price'], 2);
    }
    
    // Called when an object is treated as a function
    public function __invoke($quantity = 1) {
        return $this->data['price'] * $quantity;
    }
    
    // Called when cloning an object
    public function __clone() {
        // Create a deep copy of objects if needed
        foreach ($this->data as $key => $value) {
            if (is_object($value)) {
                $this->data[$key] = clone $value;
            }
        }
    }
    
    // Called during serialization
    public function __sleep() {
        // Return array of property names to serialize
        return ['data'];
    }
    
    // Called during unserialization
    public function __wakeup() {
        // Reconnect to database or perform other initialization
    }
    
    // Called for var_export()
    public static function __set_state($array) {
        $obj = new self($array['data']['name'], $array['data']['price']);
        return $obj;
    }
    
    // Called for var_dump() (PHP 5.6+)
    public function __debugInfo() {
        return [
            'name' => $this->data['name'],
            'price' => $this->data['price'],
            'formatted_price' => '$' . number_format($this->data['price'], 2)
        ];
    }
}

// Create object
$product = new Product("Laptop", 999.99);

// __get and __set
echo $product->name;  // Laptop
$product->color = "Silver";
echo $product->color; // Silver

// __isset and __unset
var_dump(isset($product->name)); // bool(true)
unset($product->name);
var_dump(isset($product->name)); // bool(false)

// __toString
echo $product; // Laptop: $999.99

// __invoke
echo $product(3); // 2999.97 (price * quantity)

// __clone
$product2 = clone $product;
$product2->price = 1299.99;
echo $product->price;  // 999.99
echo $product2->price; // 1299.99

// __sleep and __wakeup
$serialized = serialize($product);
$unserialized = unserialize($serialized);

// __debugInfo
var_dump($product);
?>
```

## Type Declarations

PHP 7.0+ supports type declarations for parameters and return types.

```php
<?php
// Basic type declarations
function add(int $a, int $b): int {
    return $a + $b;
}

// Nullable types (PHP 7.1+)
function findUser(int $id): ?array {
    $user = getUserById($id);
    return $user ?: null;
}

// Union types (PHP 8.0+)
function process(string|int $input): string|int {
    if (is_string($input)) {
        return strtoupper($input);
    }
    return $input * 2;
}

// Intersection types (PHP 8.1+)
function handleData(Countable&Iterator $data): int {
    $count = 0;
    foreach ($data as $item) {
        $count++;
    }
    return $count;
}

// void return type (PHP 7.1+)
function logMessage(string $message): void {
    file_put_contents('app.log', $message . PHP_EOL, FILE_APPEND);
    // No return value
}

// never return type (PHP 8.1+)
function throwError(string $message): never {
    throw new Exception($message);
}

// mixed type (PHP 8.0+)
function getValue(string $key): mixed {
    $values = [
        'name' => 'John',
        'age' => 30,
        'active' => true,
        'scores' => [85, 90, 95]
    ];
    return $values[$key] ?? null;
}
?>
```

## Static Properties and Methods

Static properties and methods belong to the class itself, not to any specific instance.

```php
<?php
class MathUtils {
    // Static property
    public static $pi = 3.14159;
    
    // Static counter
    private static $operationCount = 0;
    
    // Static method
    public static function square($number) {
        self::$operationCount++;
        return $number * $number;
    }
    
    // Static method using static property
    public static function circleArea($radius) {
        self::$operationCount++;
        return self::$pi * self::square($radius);
    }
    
    // Get operation count
    public static function getOperationCount() {
        return self::$operationCount;
    }
}

// Using static members without creating an instance
echo MathUtils::$pi; // 3.14159
echo MathUtils::square(4); // 16
echo MathUtils::circleArea(5); // ~78.54
echo MathUtils::getOperationCount(); // 3

// Static properties and methods can also be accessed from an instance
$math = new MathUtils();
echo $math::$pi; // 3.14159
echo $math::square(3); // 9
?>
```

### Late Static Binding

```php
<?php
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
?>
```

## Constants

Class constants provide a way to define fixed values associated with a class.

```php
<?php
class Math {
    // Class constant
    const PI = 3.14159;
    
    // PHP 7.1+ visibility for constants
    public const E = 2.71828;
    protected const GOLDEN_RATIO = 1.61803;
    private const SQRT_2 = 1.41421;
    
    public function getCircleArea($radius) {
        return self::PI * $radius * $radius;
    }
    
    public function getConstants() {
        return [
            'PI' => self::PI,
            'E' => self::E,
            'GOLDEN_RATIO' => self::GOLDEN_RATIO,
            'SQRT_2' => self::SQRT_2
        ];
    }
}

// Access constant from outside the class
echo Math::PI; // 3.14159
echo Math::E;  // 2.71828

// These would cause errors
// echo Math::GOLDEN_RATIO; // Error: Cannot access protected constant
// echo Math::SQRT_2;       // Error: Cannot access private constant

$math = new Math();
echo $math->getCircleArea(5); // ~78.54
print_r($math->getConstants());
?>
```

## Anonymous Classes

PHP 7.0+ supports anonymous classes, which are useful for one-off objects.

```php
<?php
// Create an anonymous class instance
$logger = new class {
    public function log($message) {
        echo "[" . date('Y-m-d H:i:s') . "] $message<br>";
    }
};

$logger->log("Test message");

// Anonymous class with constructor and implementing an interface
interface Loggable {
    public function log($message);
}

$fileLogger = new class('app.log') implements Loggable {
    private $logFile;
    
    public function __construct($logFile) {
        $this->logFile = $logFile;
    }
    
    public function log($message) {
        $timestamp = date('Y-m-d H:i:s');
        $logMessage = "[$timestamp] $message" . PHP_EOL;
        file_put_contents($this->logFile, $logMessage, FILE_APPEND);
    }
};

$fileLogger->log("Test message");
?>
```

## Enumerations (PHP 8.1+)

```php
<?php
// Basic enum
enum Status {
    case Pending;
    case Active;
    case Suspended;
}

function processStatus(Status $status) {
    return match($status) {
        Status::Pending => 'Processing pending status',
        Status::Active => 'Processing active status',
        Status::Suspended => 'Processing suspended status',
    };
}

$status = Status::Active;
echo processStatus($status); // Processing active status

// Backed enum with values
enum HttpStatus: int {
    case OK = 200;
    case NotFound = 404;
    case ServerError = 500;
    
    public function message(): string {
        return match($this) {
            self::OK => 'OK',
            self::NotFound => 'Not Found',
            self::ServerError => 'Internal Server Error',
        };
    }
}

$status = HttpStatus::NotFound;
echo $status->value; // 404
echo $status->message(); // Not Found

// Check if enum case
$isNotFound = $status === HttpStatus::NotFound; // true

// Get all cases
$cases = HttpStatus::cases();
foreach ($cases as $case) {
    echo $case->name . ': ' . $case->value . '<br>';
}

// Try to get enum from value
$status = HttpStatus::from(404); // NotFound
$status = HttpStatus::tryFrom(418) ?? HttpStatus::NotFound; // NotFound (fallback)
?>
```

## Readonly Properties (PHP 8.1+)

```php
<?php
class Point {
    public readonly float $x;
    public readonly float $y;
    
    public function __construct(float $x, float $y) {
        $this->x = $x;
        $this->y = $y;
    }
}

$point = new Point(1.0, 2.0);
echo $point->x; // 1

// This would cause an error
// $point->x = 5.0; // Error: Cannot modify readonly property
?>
```

## Readonly Classes (PHP 8.2+)

```php
<?php
readonly class User {
    public string $name;
    public string $email;
    
    public function __construct(string $name, string $email) {
        $this->name = $name;
        $this->email = $email;
    }
}

$user = new User("John", "john@example.com");

// This would cause an error
// $user->name = "Jane"; // Error: Cannot modify readonly property
?>
```

## Best Practices

1. **Follow naming conventions**:
   - Classes: PascalCase (e.g., `UserProfile`)
   - Methods and properties: camelCase (e.g., `getUserData()`)
   - Constants: UPPER_SNAKE_CASE (e.g., `MAX_LOGIN_ATTEMPTS`)

2. **Use proper encapsulation**:
   - Make properties private or protected
   - Provide public getter/setter methods when needed

3. **Follow the Single Responsibility Principle**:
   - Each class should have only one reason to change
   - Split large classes into smaller, focused ones

4. **Use type declarations**:
   - Add parameter and return type declarations
   - Makes code more robust and self-documenting

5. **Prefer composition over inheritance**:
   - Use traits and interfaces for code reuse
   - Avoid deep inheritance hierarchies

6. **Use namespaces**:
   - Organize code logically
   - Avoid naming conflicts

7. **Document your code**:
   - Use PHPDoc comments for classes and methods
   - Explain complex logic

8. **Write testable code**:
   - Use dependency injection
   - Avoid global state
   - Make methods focused and predictable

9. **Handle errors properly**:
   - Use exceptions for error conditions
   - Validate input in constructors and methods

10. **Follow SOLID principles**:
    - Single Responsibility Principle
    - Open/Closed Principle
    - Liskov Substitution Principle
    - Interface Segregation Principle
    - Dependency Inversion Principle