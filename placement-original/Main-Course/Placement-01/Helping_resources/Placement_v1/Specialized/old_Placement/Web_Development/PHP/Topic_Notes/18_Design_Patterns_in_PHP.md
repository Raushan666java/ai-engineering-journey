# Design Patterns in PHP

Design patterns are reusable solutions to common problems in software design. They represent best practices evolved over time by experienced software developers.

## Creational Patterns

### Singleton

Ensures a class has only one instance and provides a global point of access to it.

```php
<?php
class Database {
    private static $instance = null;
    private $connection;
    
    private function __construct() {
        $this->connection = new PDO('mysql:host=localhost;dbname=test', 'user', 'password');
    }
    
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    public function query($sql) {
        return $this->connection->query($sql);
    }
    
    // Prevent cloning
    private function __clone() {}
    
    // Prevent unserialization
    private function __wakeup() {}
}

// Usage
$db = Database::getInstance();
$users = $db->query("SELECT * FROM users");
```

### Factory

Creates objects without exposing the instantiation logic to the client.

```php
<?php
interface Logger {
    public function log($message);
}

class FileLogger implements Logger {
    public function log($message) {
        file_put_contents('app.log', $message . PHP_EOL, FILE_APPEND);
    }
}

class DatabaseLogger implements Logger {
    public function log($message) {
        // Log to database
    }
}

class LoggerFactory {
    public static function createLogger($type) {
        switch ($type) {
            case 'file':
                return new FileLogger();
            case 'database':
                return new DatabaseLogger();
            default:
                throw new InvalidArgumentException("Invalid logger type");
        }
    }
}

// Usage
$logger = LoggerFactory::createLogger('file');
$logger->log('This is a test message');
```

### Abstract Factory

Provides an interface for creating families of related objects without specifying their concrete classes.

```php
<?php
// Abstract product interfaces
interface Button {
    public function render();
}

interface Input {
    public function render();
}

// Concrete products for Bootstrap
class BootstrapButton implements Button {
    public function render() {
        return '<button class="btn btn-primary">Click Me</button>';
    }
}

class BootstrapInput implements Input {
    public function render() {
        return '<input class="form-control">';
    }
}

// Concrete products for Material
class MaterialButton implements Button {
    public function render() {
        return '<button class="mdc-button">Click Me</button>';
    }
}

class MaterialInput implements Input {
    public function render() {
        return '<input class="mdc-input">';
    }
}

// Abstract factory interface
interface UIFactory {
    public function createButton(): Button;
    public function createInput(): Input;
}

// Concrete factories
class BootstrapFactory implements UIFactory {
    public function createButton(): Button {
        return new BootstrapButton();
    }
    
    public function createInput(): Input {
        return new BootstrapInput();
    }
}

class MaterialFactory implements UIFactory {
    public function createButton(): Button {
        return new MaterialButton();
    }
    
    public function createInput(): Input {
        return new MaterialInput();
    }
}

// Usage
function createUI(UIFactory $factory) {
    $button = $factory->createButton();
    $input = $factory->createInput();
    
    return $button->render() . $input->render();
}

// Create Bootstrap UI
$bootstrapUI = createUI(new BootstrapFactory());

// Create Material UI
$materialUI = createUI(new MaterialFactory());
```

### Builder

Separates the construction of a complex object from its representation.

```php
<?php
class QueryBuilder {
    private $select = '*';
    private $from = '';
    private $where = [];
    private $orderBy = [];
    
    public function select($select) {
        $this->select = $select;
        return $this;
    }
    
    public function from($from) {
        $this->from = $from;
        return $this;
    }
    
    public function where($column, $operator, $value) {
        $this->where[] = "$column $operator '$value'";
        return $this;
    }
    
    public function orderBy($column, $direction = 'ASC') {
        $this->orderBy[] = "$column $direction";
        return $this;
    }
    
    public function build() {
        $query = "SELECT {$this->select} FROM {$this->from}";
        
        if (!empty($this->where)) {
            $query .= " WHERE " . implode(' AND ', $this->where);
        }
        
        if (!empty($this->orderBy)) {
            $query .= " ORDER BY " . implode(', ', $this->orderBy);
        }
        
        return $query;
    }
}

// Usage
$query = (new QueryBuilder())
    ->select('name, email')
    ->from('users')
    ->where('age', '>', 18)
    ->orderBy('name')
    ->build();

echo $query; // SELECT name, email FROM users WHERE age > '18' ORDER BY name ASC
```

### Prototype

Creates new objects by cloning existing ones.

```php
<?php
abstract class DocumentPrototype {
    protected $title;
    protected $content;
    
    abstract public function __clone();
    
    public function getTitle() {
        return $this->title;
    }
    
    public function setTitle($title) {
        $this->title = $title;
    }
    
    public function getContent() {
        return $this->content;
    }
    
    public function setContent($content) {
        $this->content = $content;
    }
}

class TextDocument extends DocumentPrototype {
    public function __construct() {
        $this->title = "Text Document";
        $this->content = "Default text content";
    }
    
    public function __clone() {
        // Perform deep copy operations if needed
    }
}

class SpreadsheetDocument extends DocumentPrototype {
    public function __construct() {
        $this->title = "Spreadsheet Document";
        $this->content = "Default spreadsheet content";
    }
    
    public function __clone() {
        // Perform deep copy operations if needed
    }
}

// Usage
$textPrototype = new TextDocument();
$spreadsheetPrototype = new SpreadsheetDocument();

// Create new documents by cloning
$textDoc1 = clone $textPrototype;
$textDoc1->setTitle("Meeting Notes");
$textDoc1->setContent("Discussion points...");

$spreadsheetDoc1 = clone $spreadsheetPrototype;
$spreadsheetDoc1->setTitle("Budget");
$spreadsheetDoc1->setContent("Financial data...");
```

## Structural Patterns

### Adapter

Allows objects with incompatible interfaces to collaborate.

```php
<?php
// Target interface
interface PaymentProcessor {
    public function processPayment($amount);
}

// Adaptee (incompatible interface)
class PayPalAPI {
    public function makePayment($sum, $currency = 'USD') {
        return "PayPal payment of $sum $currency processed";
    }
}

// Adapter
class PayPalAdapter implements PaymentProcessor {
    private $paypal;
    
    public function __construct(PayPalAPI $paypal) {
        $this->paypal = $paypal;
    }
    
    public function processPayment($amount) {
        return $this->paypal->makePayment($amount);
    }
}

// Client code
function processOrder(PaymentProcessor $processor, $amount) {
    return $processor->processPayment($amount);
}

// Usage
$paypal = new PayPalAPI();
$adapter = new PayPalAdapter($paypal);
echo processOrder($adapter, 100); // PayPal payment of 100 USD processed
```

### Bridge

Separates an abstraction from its implementation so that both can vary independently.

```php
<?php
// Implementation interface
interface Renderer {
    public function renderTitle($title);
    public function renderText($text);
    public function renderImage($url);
}

// Concrete implementations
class HTMLRenderer implements Renderer {
    public function renderTitle($title) {
        return "<h1>$title</h1>";
    }
    
    public function renderText($text) {
        return "<p>$text</p>";
    }
    
    public function renderImage($url) {
        return "<img src='$url'>";
    }
}

class JSONRenderer implements Renderer {
    public function renderTitle($title) {
        return json_encode(['title' => $title]);
    }
    
    public function renderText($text) {
        return json_encode(['text' => $text]);
    }
    
    public function renderImage($url) {
        return json_encode(['image' => $url]);
    }
}

// Abstraction
abstract class Page {
    protected $renderer;
    
    public function __construct(Renderer $renderer) {
        $this->renderer = $renderer;
    }
    
    abstract public function render();
}

// Refined abstraction
class SimplePage extends Page {
    private $title;
    private $content;
    
    public function __construct(Renderer $renderer, $title, $content) {
        parent::__construct($renderer);
        $this->title = $title;
        $this->content = $content;
    }
    
    public function render() {
        return $this->renderer->renderTitle($this->title) . 
               $this->renderer->renderText($this->content);
    }
}

// Usage
$htmlRenderer = new HTMLRenderer();
$jsonRenderer = new JSONRenderer();

$htmlPage = new SimplePage($htmlRenderer, "Home", "Welcome to our website");
$jsonPage = new SimplePage($jsonRenderer, "Home", "Welcome to our website");

echo $htmlPage->render(); // <h1>Home</h1><p>Welcome to our website</p>
echo $jsonPage->render(); // {"title":"Home"}{"text":"Welcome to our website"}
```

### Composite

Composes objects into tree structures to represent part-whole hierarchies.

```php
<?php
// Component interface
interface FileSystemComponent {
    public function getName(): string;
    public function getSize(): int;
    public function render(): string;
}

// Leaf
class File implements FileSystemComponent {
    private $name;
    private $size;
    
    public function __construct(string $name, int $size) {
        $this->name = $name;
        $this->size = $size;
    }
    
    public function getName(): string {
        return $this->name;
    }
    
    public function getSize(): int {
        return $this->size;
    }
    
    public function render(): string {
        return "File: {$this->name} ({$this->size} bytes)";
    }
}

// Composite
class Directory implements FileSystemComponent {
    private $name;
    private $components = [];
    
    public function __construct(string $name) {
        $this->name = $name;
    }
    
    public function add(FileSystemComponent $component) {
        $this->components[] = $component;
    }
    
    public function remove(FileSystemComponent $component) {
        $index = array_search($component, $this->components, true);
        if ($index !== false) {
            unset($this->components[$index]);
        }
    }
    
    public function getName(): string {
        return $this->name;
    }
    
    public function getSize(): int {
        $size = 0;
        foreach ($this->components as $component) {
            $size += $component->getSize();
        }
        return $size;
    }
    
    public function render(): string {
        $result = "Directory: {$this->name} (";
        $result .= $this->getSize() . " bytes)\n";
        
        foreach ($this->components as $component) {
            $result .= "  " . str_replace("\n", "\n  ", $component->render()) . "\n";
        }
        
        return $result;
    }
}

// Usage
$file1 = new File("file1.txt", 100);
$file2 = new File("file2.txt", 200);
$file3 = new File("file3.txt", 300);

$dir1 = new Directory("Folder 1");
$dir1->add($file1);
$dir1->add($file2);

$dir2 = new Directory("Folder 2");
$dir2->add($file3);

$root = new Directory("Root");
$root->add($dir1);
$root->add($dir2);

echo $root->render();
```

### Decorator

Attaches additional responsibilities to objects dynamically.

```php
<?php
// Component interface
interface Notifier {
    public function send($message);
}

// Concrete component
class EmailNotifier implements Notifier {
    private $email;
    
    public function __construct($email) {
        $this->email = $email;
    }
    
    public function send($message) {
        return "Sending email to {$this->email}: $message";
    }
}

// Base decorator
abstract class NotifierDecorator implements Notifier {
    protected $wrapped;
    
    public function __construct(Notifier $wrapped) {
        $this->wrapped = $wrapped;
    }
}

// Concrete decorators
class SMSNotifier extends NotifierDecorator {
    private $phone;
    
    public function __construct(Notifier $wrapped, $phone) {
        parent::__construct($wrapped);
        $this->phone = $phone;
    }
    
    public function send($message) {
        return $this->wrapped->send($message) . "\n" . 
               "Sending SMS to {$this->phone}: $message";
    }
}

class SlackNotifier extends NotifierDecorator {
    private $channel;
    
    public function __construct(Notifier $wrapped, $channel) {
        parent::__construct($wrapped);
        $this->channel = $channel;
    }
    
    public function send($message) {
        return $this->wrapped->send($message) . "\n" . 
               "Posting to Slack channel {$this->channel}: $message";
    }
}

// Usage
$notifier = new EmailNotifier("admin@example.com");
echo $notifier->send("System error!") . "\n";

// Decorate with SMS notification
$notifier = new SMSNotifier($notifier, "+1234567890");
echo $notifier->send("System error!") . "\n";

// Decorate with Slack notification
$notifier = new SlackNotifier($notifier, "#alerts");
echo $notifier->send("System error!");
```

### Facade

Provides a simplified interface to a complex subsystem.

```php
<?php
// Complex subsystem classes
class CPU {
    public function freeze() { return "CPU: Freezing processor\n"; }
    public function jump($position) { return "CPU: Jumping to position $position\n"; }
    public function execute() { return "CPU: Executing commands\n"; }
}

class Memory {
    public function load($position, $data) { 
        return "Memory: Loading data '$data' at position $position\n"; 
    }
}

class HardDrive {
    public function read($sector, $size) { 
        return "HardDrive: Reading $size bytes from sector $sector\n"; 
    }
}

// Facade
class ComputerFacade {
    private $cpu;
    private $memory;
    private $hardDrive;
    
    public function __construct() {
        $this->cpu = new CPU();
        $this->memory = new Memory();
        $this->hardDrive = new HardDrive();
    }
    
    public function start() {
        $result = $this->cpu->freeze();
        $result .= $this->hardDrive->read(0, 8192);
        $result .= $this->memory->load(0, "BOOT_SECTOR");
        $result .= $this->cpu->jump(0);
        $result .= $this->cpu->execute();
        return $result;
    }
}

// Usage
$computer = new ComputerFacade();
echo $computer->start();
```

### Proxy

Provides a surrogate or placeholder for another object to control access to it.

```php
<?php
// Subject interface
interface Image {
    public function display();
}

// Real subject
class RealImage implements Image {
    private $filename;
    
    public function __construct($filename) {
        $this->filename = $filename;
        $this->loadFromDisk();
    }
    
    private function loadFromDisk() {
        echo "Loading image: {$this->filename}\n";
    }
    
    public function display() {
        echo "Displaying image: {$this->filename}\n";
    }
}

// Proxy
class ProxyImage implements Image {
    private $filename;
    private $realImage = null;
    
    public function __construct($filename) {
        $this->filename = $filename;
    }
    
    public function display() {
        if ($this->realImage === null) {
            $this->realImage = new RealImage($this->filename);
        }
        $this->realImage->display();
    }
}

// Usage
$image = new ProxyImage("photo.jpg");
// Image is not loaded at this point

// Image will be loaded at this point
$image->display();

// Image will not be loaded again, already cached
$image->display();
```

## Behavioral Patterns

### Observer

Defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified.

```php
<?php
// Subject interface
interface Subject {
    public function attach(Observer $observer);
    public function detach(Observer $observer);
    public function notify();
}

// Observer interface
interface Observer {
    public function update(Subject $subject);
}

// Concrete subject
class NewsPublisher implements Subject {
    private $observers = [];
    private $latestNews;
    
    public function attach(Observer $observer) {
        $this->observers[] = $observer;
    }
    
    public function detach(Observer $observer) {
        $key = array_search($observer, $this->observers, true);
        if ($key !== false) {
            unset($this->observers[$key]);
        }
    }
    
    public function notify() {
        foreach ($this->observers as $observer) {
            $observer->update($this);
        }
    }
    
    public function publishNews($news) {
        $this->latestNews = $news;
        $this->notify();
    }
    
    public function getLatestNews() {
        return $this->latestNews;
    }
}

// Concrete observers
class EmailSubscriber implements Observer {
    private $email;
    
    public function __construct($email) {
        $this->email = $email;
    }
    
    public function update(Subject $subject) {
        if ($subject instanceof NewsPublisher) {
            echo "Sending email to {$this->email}: " . $subject->getLatestNews() . "\n";
        }
    }
}

class SMSSubscriber implements Observer {
    private $phone;
    
    public function __construct($phone) {
        $this->phone = $phone;
    }
    
    public function update(Subject $subject) {
        if ($subject instanceof NewsPublisher) {
            echo "Sending SMS to {$this->phone}: " . $subject->getLatestNews() . "\n";
        }
    }
}

// Usage
$publisher = new NewsPublisher();

$emailSubscriber = new EmailSubscriber("user@example.com");
$smsSubscriber = new SMSSubscriber("+1234567890");

$publisher->attach($emailSubscriber);
$publisher->attach($smsSubscriber);

$publisher->publishNews("Breaking news: PHP 8.2 released!");

$publisher->detach($smsSubscriber);

$publisher->publishNews("Another news: New design patterns article published!");
```

### Strategy

Defines a family of algorithms, encapsulates each one, and makes them interchangeable.

```php
<?php
// Strategy interface
interface PaymentStrategy {
    public function pay($amount);
}

// Concrete strategies
class CreditCardStrategy implements PaymentStrategy {
    private $name;
    private $cardNumber;
    private $cvv;
    private $expiryDate;
    
    public function __construct($name, $cardNumber, $cvv, $expiryDate) {
        $this->name = $name;
        $this->cardNumber = $cardNumber;
        $this->cvv = $cvv;
        $this->expiryDate = $expiryDate;
    }
    
    public function pay($amount) {
        return "Paid $amount using Credit Card";
    }
}

class PayPalStrategy implements PaymentStrategy {
    private $email;
    private $password;
    
    public function __construct($email, $password) {
        $this->email = $email;
        $this->password = $password;
    }
    
    public function pay($amount) {
        return "Paid $amount using PayPal";
    }
}

class BitcoinStrategy implements PaymentStrategy {
    private $address;
    
    public function __construct($address) {
        $this->address = $address;
    }
    
    public function pay($amount) {
        return "Paid $amount using Bitcoin";
    }
}

// Context
class ShoppingCart {
    private $items = [];
    
    public function addItem($item) {
        $this->items[] = $item;
    }
    
    public function calculateTotal() {
        $sum = 0;
        foreach ($this->items as $item) {
            $sum += $item['price'];
        }
        return $sum;
    }
    
    public function pay(PaymentStrategy $paymentMethod) {
        $amount = $this->calculateTotal();
        return $paymentMethod->pay($amount);
    }
}

// Usage
$cart = new ShoppingCart();
$cart->addItem(['id' => 1, 'name' => 'Item 1', 'price' => 100]);
$cart->addItem(['id' => 2, 'name' => 'Item 2', 'price' => 50]);

// Pay with credit card
$creditCard = new CreditCardStrategy("John Doe", "1234567890123456", "123", "12/25");
echo $cart->pay($creditCard) . "\n";

// Pay with PayPal
$paypal = new PayPalStrategy("john@example.com", "password");
echo $cart->pay($paypal) . "\n";

// Pay with Bitcoin
$bitcoin = new BitcoinStrategy("1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa");
echo $cart->pay($bitcoin);
```

### Command

Encapsulates a request as an object, allowing parameterization of clients with different requests, queuing of requests, and logging of operations.

```php
<?php
// Command interface
interface Command {
    public function execute();
    public function undo();
}

// Receiver
class Light {
    private $isOn = false;
    
    public function turnOn() {
        $this->isOn = true;
        return "Light turned on";
    }
    
    public function turnOff() {
        $this->isOn = false;
        return "Light turned off";
    }
}

// Concrete commands
class LightOnCommand implements Command {
    private $light;
    
    public function __construct(Light $light) {
        $this->light = $light;
    }
    
    public function execute() {
        return $this->light->turnOn();
    }
    
    public function undo() {
        return $this->light->turnOff();
    }
}

class LightOffCommand implements Command {
    private $light;
    
    public function __construct(Light $light) {
        $this->light = $light;
    }
    
    public function execute() {
        return $this->light->turnOff();
    }
    
    public function undo() {
        return $this->light->turnOn();
    }
}

// Invoker
class RemoteControl {
    private $command;
    
    public function setCommand(Command $command) {
        $this->command = $command;
    }
    
    public function pressButton() {
        return $this->command->execute();
    }
    
    public function pressUndo() {
        return $this->command->undo();
    }
}

// Usage
$light = new Light();
$lightOn = new LightOnCommand($light);
$lightOff = new LightOffCommand($light);

$remote = new RemoteControl();

$remote->setCommand($lightOn);
echo $remote->pressButton() . "\n"; // Light turned on

$remote->setCommand($lightOff);
echo $remote->pressButton() . "\n"; // Light turned off

echo $remote->pressUndo() . "\n"; // Light turned on
```

### Iterator

Provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

```php
<?php
// Iterator interface is built into PHP

// Concrete aggregate
class BookCollection implements IteratorAggregate {
    private $books = [];
    
    public function addBook($title, $author) {
        $this->books[] = [
            'title' => $title,
            'author' => $author
        ];
    }
    
    public function getIterator(): Traversable {
        return new ArrayIterator($this->books);
    }
}

// Custom iterator
class BookIterator implements Iterator {
    private $books = [];
    private $position = 0;
    
    public function __construct($books) {
        $this->books = $books;
    }
    
    public function current() {
        return $this->books[$this->position];
    }
    
    public function key() {
        return $this->position;
    }
    
    public function next() {
        $this->position++;
    }
    
    public function rewind() {
        $this->position = 0;
    }
    
    public function valid() {
        return isset($this->books[$this->position]);
    }
}

// Usage with built-in iterator
$collection = new BookCollection();
$collection->addBook("Design Patterns", "Gang of Four");
$collection->addBook("Clean Code", "Robert C. Martin");
$collection->addBook("Refactoring", "Martin Fowler");

foreach ($collection as $book) {
    echo "{$book['title']} by {$book['author']}\n";
}
```

### Mediator

Defines an object that encapsulates how a set of objects interact.

```php
<?php
// Mediator interface
interface ChatMediator {
    public function sendMessage($message, $user);
    public function addUser($user);
}

// Colleague interface
abstract class User {
    protected $mediator;
    protected $name;
    
    public function __construct($name, $mediator) {
        $this->name = $name;
        $this->mediator = $mediator;
    }
    
    abstract public function send($message);
    abstract public function receive($message);
}

// Concrete mediator
class ChatRoom implements ChatMediator {
    private $users = [];
    
    public function addUser($user) {
        $this->users[] = $user;
    }
    
    public function sendMessage($message, $user) {
        foreach ($this->users as $u) {
            // Don't send message back to sender
            if ($u !== $user) {
                $u->receive($message);
            }
        }
    }
}

// Concrete colleague
class ChatUser extends User {
    public function send($message) {
        echo "{$this->name} sends: $message\n";
        $this->mediator->sendMessage($message, $this);
    }
    
    public function receive($message) {
        echo "{$this->name} receives: $message\n";
    }
}

// Usage
$chatroom = new ChatRoom();

$john = new ChatUser("John", $chatroom);
$jane = new ChatUser("Jane", $chatroom);
$bob = new ChatUser("Bob", $chatroom);

$chatroom->addUser($john);
$chatroom->addUser($jane);
$chatroom->addUser($bob);

$john->send("Hi everyone!");
$jane->send("Hey John!");
```

### State

Allows an object to alter its behavior when its internal state changes.

```php
<?php
// State interface
interface OrderState {
    public function processOrder(Order $order);
    public function cancelOrder(Order $order);
    public function getStatus(): string;
}

// Concrete states
class NewOrderState implements OrderState {
    public function processOrder(Order $order) {
        echo "Processing new order...\n";
        $order->setState(new ProcessingOrderState());
    }
    
    public function cancelOrder(Order $order) {
        echo "Cancelling new order...\n";
        $order->setState(new CancelledOrderState());
    }
    
    public function getStatus(): string {
        return "New";
    }
}

class ProcessingOrderState implements OrderState {
    public function processOrder(Order $order) {
        echo "Order is already being processed...\n";
        $order->setState(new ShippedOrderState());
    }
    
    public function cancelOrder(Order $order) {
        echo "Cancelling processing order...\n";
        $order->setState(new CancelledOrderState());
    }
    
    public function getStatus(): string {
        return "Processing";
    }
}

class ShippedOrderState implements OrderState {
    public function processOrder(Order $order) {
        echo "Order has already been shipped...\n";
    }
    
    public function cancelOrder(Order $order) {
        echo "Cannot cancel shipped order...\n";
    }
    
    public function getStatus(): string {
        return "Shipped";
    }
}

class CancelledOrderState implements OrderState {
    public function processOrder(Order $order) {
        echo "Cannot process cancelled order...\n";
    }
    
    public function cancelOrder(Order $order) {
        echo "Order is already cancelled...\n";
    }
    
    public function getStatus(): string {
        return "Cancelled";
    }
}

// Context
class Order {
    private $state;
    private $orderId;
    
    public function __construct($orderId) {
        $this->orderId = $orderId;
        $this->state = new NewOrderState();
    }
    
    public function setState(OrderState $state) {
        $this->state = $state;
    }
    
    public function getState(): OrderState {
        return $this->state;
    }
    
    public function processOrder() {
        $this->state->processOrder($this);
    }
    
    public function cancelOrder() {
        $this->state->cancelOrder($this);
    }
    
    public function getStatus(): string {
        return $this->state->getStatus();
    }
}

// Usage
$order = new Order("ORD-12345");
echo "Order status: " . $order->getStatus() . "\n";

$order->processOrder();
echo "Order status: " . $order->getStatus() . "\n";

$order->processOrder();
echo "Order status: " . $order->getStatus() . "\n";

$order->cancelOrder();
echo "Order status: " . $order->getStatus() . "\n";

$order->processOrder();
echo "Order status: " . $order->getStatus() . "\n";
```

### Template Method

Defines the skeleton of an algorithm in a method, deferring some steps to subclasses.

```php
<?php
// Abstract class with template method
abstract class Report {
    // Template method
    public function generate() {
        $this->header();
        $this->content();
        $this->footer();
        $this->send();
    }
    
    // Abstract methods to be implemented by subclasses
    abstract protected function header();
    abstract protected function content();
    abstract protected function footer();
    
    // Hook method with default implementation
    protected function send() {
        echo "Report generated and ready for distribution.\n";
    }
}

// Concrete implementations
class PDFReport extends Report {
    protected function header() {
        echo "PDF Header\n";
    }
    
    protected function content() {
        echo "PDF Content\n";
    }
    
    protected function footer() {
        echo "PDF Footer\n";
    }
    
    protected function send() {
        parent::send();
        echo "PDF report sent via email.\n";
    }
}

class HTMLReport extends Report {
    protected function header() {
        echo "HTML Header\n";
    }
    
    protected function content() {
        echo "HTML Content\n";
    }
    
    protected function footer() {
        echo "HTML Footer\n";
    }
}

// Usage
$pdfReport = new PDFReport();
$pdfReport->generate();

echo "\n";

$htmlReport = new HTMLReport();
$htmlReport->generate();
```

## MVC Pattern

Model-View-Controller is an architectural pattern that separates an application into three main components.

```php
<?php
// Model
class UserModel {
    private $id;
    private $name;
    private $email;
    
    public function __construct($id = null, $name = null, $email = null) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getId() {
        return $this->id;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getEmail() {
        return $this->email;
    }
    
    public function setName($name) {
        $this->name = $name;
    }
    
    public function setEmail($email) {
        $this->email = $email;
    }
    
    public function save() {
        // Save to database
        echo "User saved to database\n";
    }
    
    public static function getById($id) {
        // Get from database
        return new self($id, "User $id", "user$id@example.com");
    }
    
    public static function getAll() {
        // Get all from database
        return [
            new self(1, "User 1", "user1@example.com"),
            new self(2, "User 2", "user2@example.com"),
            new self(3, "User 3", "user3@example.com")
        ];
    }
}

// View
class UserView {
    public function showUser($user) {
        echo "User Details:\n";
        echo "ID: " . $user->getId() . "\n";
        echo "Name: " . $user->getName() . "\n";
        echo "Email: " . $user->getEmail() . "\n";
    }
    
    public function showUserList($users) {
        echo "User List:\n";
        foreach ($users as $user) {
            echo $user->getId() . ": " . $user->getName() . " (" . $user->getEmail() . ")\n";
        }
    }
    
    public function showError($message) {
        echo "Error: $message\n";
    }
}

// Controller
class UserController {
    private $model;
    private $view;
    
    public function __construct() {
        $this->view = new UserView();
    }
    
    public function show($id) {
        $user = UserModel::getById($id);
        if ($user) {
            $this->view->showUser($user);
        } else {
            $this->view->showError("User not found");
        }
    }
    
    public function listAll() {
        $users = UserModel::getAll();
        $this->view->showUserList($users);
    }
    
    public function create($name, $email) {
        $user = new UserModel(null, $name, $email);
        $user->save();
        $this->view->showUser($user);
    }
    
    public function update($id, $name, $email) {
        $user = UserModel::getById($id);
        if ($user) {
            $user->setName($name);
            $user->setEmail($email);
            $user->save();
            $this->view->showUser($user);
        } else {
            $this->view->showError("User not found");
        }
    }
}

// Usage
$controller = new UserController();

// Show all users
$controller->listAll();

echo "\n";

// Show specific user
$controller->show(2);

echo "\n";

// Create new user
$controller->create("New User", "newuser@example.com");

echo "\n";

// Update user
$controller->update(3, "Updated User", "updated@example.com");
```

## Repository Pattern

Mediates between the domain and data mapping layers, acting like an in-memory collection of domain objects.

```php
<?php
// Entity
class User {
    private $id;
    private $name;
    private $email;
    
    public function __construct($id, $name, $email) {
        $this->id = $id;
        $this->name = $name;
        $this->email = $email;
    }
    
    public function getId() {
        return $this->id;
    }
    
    public function getName() {
        return $this->name;
    }
    
    public function getEmail() {
        return $this->email;
    }
    
    public function setName($name) {
        $this->name = $name;
    }
    
    public function setEmail($email) {
        $this->email = $email;
    }
}

// Repository interface
interface UserRepository {
    public function findById($id);
    public function findAll();
    public function save(User $user);
    public function delete($id);
}

// Concrete repository implementation
class MySQLUserRepository implements UserRepository {
    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    public function findById($id) {
        // In a real implementation, this would query the database
        echo "Finding user with ID $id from MySQL database\n";
        return new User($id, "User $id", "user$id@example.com");
    }
    
    public function findAll() {
        // In a real implementation, this would query the database
        echo "Finding all users from MySQL database\n";
        return [
            new User(1, "User 1", "user1@example.com"),
            new User(2, "User 2", "user2@example.com"),
            new User(3, "User 3", "user3@example.com")
        ];
    }
    
    public function save(User $user) {
        // In a real implementation, this would save to the database
        echo "Saving user " . $user->getName() . " to MySQL database\n";
        return $user;
    }
    
    public function delete($id) {
        // In a real implementation, this would delete from the database
        echo "Deleting user with ID $id from MySQL database\n";
        return true;
    }
}

// Service using the repository
class UserService {
    private $repository;
    
    public function __construct(UserRepository $repository) {
        $this->repository = $repository;
    }
    
    public function getUserById($id) {
        return $this->repository->findById($id);
    }
    
    public function getAllUsers() {
        return $this->repository->findAll();
    }
    
    public function createUser($id, $name, $email) {
        $user = new User($id, $name, $email);
        return $this->repository->save($user);
    }
    
    public function updateUser($id, $name, $email) {
        $user = $this->repository->findById($id);
        $user->setName($name);
        $user->setEmail($email);
        return $this->repository->save($user);
    }
    
    public function deleteUser($id) {
        return $this->repository->delete($id);
    }
}

// Usage
$db = new stdClass(); // This would be a real database connection
$repository = new MySQLUserRepository($db);
$service = new UserService($repository);

// Get user by ID
$user = $service->getUserById(1);
echo "Found user: " . $user->getName() . "\n";

// Get all users
$users = $service->getAllUsers();
echo "Found " . count($users) . " users\n";

// Create new user
$service->createUser(4, "New User", "newuser@example.com");

// Update user
$service->updateUser(2, "Updated User", "updated@example.com");

// Delete user
$service->deleteUser(3);
```

## Dependency Injection

A technique where one object supplies the dependencies of another object.

```php
<?php
// Service interfaces
interface Logger {
    public function log($message);
}

interface Mailer {
    public function send($to, $subject, $body);
}

interface UserRepository {
    public function save($user);
}

// Service implementations
class FileLogger implements Logger {
    private $logFile;
    
    public function __construct($logFile) {
        $this->logFile = $logFile;
    }
    
    public function log($message) {
        echo "Logging to {$this->logFile}: $message\n";
    }
}

class SmtpMailer implements Mailer {
    private $host;
    private $port;
    
    public function __construct($host, $port) {
        $this->host = $host;
        $this->port = $port;
    }
    
    public function send($to, $subject, $body) {
        echo "Sending email via SMTP ({$this->host}:{$this->port}):\n";
        echo "To: $to\n";
        echo "Subject: $subject\n";
        echo "Body: $body\n";
    }
}

class MySQLUserRepository implements UserRepository {
    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    public function save($user) {
        echo "Saving user to MySQL database\n";
    }
}

// Service that depends on other services
class UserService {
    private $logger;
    private $mailer;
    private $repository;
    
    // Constructor injection
    public function __construct(Logger $logger, Mailer $mailer, UserRepository $repository) {
        $this->logger = $logger;
        $this->mailer = $mailer;
        $this->repository = $repository;
    }
    
    public function register($email, $password) {
        // Create user
        $user = ['email' => $email, 'password' => password_hash($password, PASSWORD_DEFAULT)];
        
        // Save user
        $this->repository->save($user);
        
        // Log action
        $this->logger->log("User registered: $email");
        
        // Send welcome email
        $this->mailer->send(
            $email,
            "Welcome to our site",
            "Thank you for registering!"
        );
        
        return $user;
    }
}

// Simple dependency injection container
class Container {
    private $services = [];
    private $instances = [];
    
    public function register($name, $factory) {
        $this->services[$name] = $factory;
    }
    
    public function get($name) {
        if (!isset($this->instances[$name])) {
            if (!isset($this->services[$name])) {
                throw new Exception("Service not found: $name");
            }
            $this->instances[$name] = $this->services[$name]($this);
        }
        return $this->instances[$name];
    }
}

// Usage
$container = new Container();

// Register services
$container->register('db', function() {
    return new stdClass(); // This would be a real database connection
});

$container->register('logger', function() {
    return new FileLogger('app.log');
});

$container->register('mailer', function() {
    return new SmtpMailer('smtp.example.com', 25);
});

$container->register('user.repository', function($container) {
    return new MySQLUserRepository($container->get('db'));
});

$container->register('user.service', function($container) {
    return new UserService(
        $container->get('logger'),
        $container->get('mailer'),
        $container->get('user.repository')
    );
});

// Use the service
$userService = $container->get('user.service');
$userService->register('user@example.com', 'password123');
```