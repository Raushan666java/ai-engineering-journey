# DAY 18: DESIGN PATTERNS & ARCHITECTURE - QUICK REFERENCE

## 🎯 QUICK NAVIGATION

### Creational Patterns (Object Creation)
- [Singleton](#singleton) - Single instance
- [Factory](#factory) - Object creation
- [Abstract Factory](#abstract-factory) - Family creation
- [Builder](#builder) - Complex construction
- [Prototype](#prototype) - Object cloning
- [Object Pool](#object-pool) - Reuse objects

### Structural Patterns (Object Composition)
- [Adapter](#adapter) - Interface compatibility
- [Decorator](#decorator) - Add behavior
- [Facade](#facade) - Simplified interface
- [Proxy](#proxy) - Placeholder object
- [Bridge](#bridge) - Separate abstraction
- [Composite](#composite) - Tree structure
- [Flyweight](#flyweight) - Share objects

### Behavioral Patterns (Object Communication)
- [Strategy](#strategy) - Algorithm selection
- [Observer](#observer) - Notifications
- [Command](#command) - Request encapsulation
- [State](#state) - Behavior modification
- [Template Method](#template-method) - Algorithm skeleton
- [Iterator](#iterator) - Sequential access
- [Visitor](#visitor) - Add operations
- [Chain of Responsibility](#chain) - Request passing
- [Mediator](#mediator) - Centralized communication
- [Memento](#memento) - State capture

### Architectural Patterns (System Design)
- [MVC](#mvc) - Model-View-Controller
- [Repository](#repository) - Data abstraction
- [Dependency Injection](#dependency-injection) - Loose coupling
- [Layered Architecture](#layered) - Separation of concerns
- [Event-Driven](#event-driven) - Asynchronous events
- [Microservices](#microservices) - Service distribution

---

## CREATIONAL PATTERNS

### Singleton
```java
// Thread-safe singleton with double-checked locking
static class Singleton {
    private static volatile Singleton instance;
    
    public static Singleton getInstance() {
        if (instance == null) {
            synchronized(Singleton.class) {
                if (instance == null) {
                    instance = new Singleton();
                }
            }
        }
        return instance;
    }
}

// OR use Enum (most thread-safe)
enum SingletonEnum {
    INSTANCE;
}
```

**When to use**: Configuration, loggers, database connections, thread pools  
**Pros**: Single instance guarantee, lazy loading  
**Cons**: Hidden dependencies, testing difficulty

---

### Factory
```java
// Simple factory
interface Product { void create(); }

class ProductFactory {
    public static Product create(String type) {
        return switch(type) {
            case "A" -> new ProductA();
            case "B" -> new ProductB();
            default -> throw new IllegalArgumentException();
        };
    }
}

// Usage
Product product = ProductFactory.create("A");
```

**When to use**: Complex object creation, multiple implementations  
**Pros**: Encapsulates creation logic, easy extension  
**Cons**: Too many factory methods

---

### Abstract Factory
```java
interface UIFactory {
    Button createButton();
    Checkbox createCheckbox();
}

class WindowsUIFactory implements UIFactory {
    public Button createButton() { return new WindowsButton(); }
    public Checkbox createCheckbox() { return new WindowsCheckbox(); }
}

// Usage
UIFactory factory = new WindowsUIFactory();
Button btn = factory.createButton();
```

**When to use**: Multiple related object families, theme switching  
**Pros**: Consistent object families, easy to switch  
**Cons**: Complex implementation

---

### Builder
```java
class User {
    private User(Builder builder) {
        this.name = builder.name;
        this.email = builder.email;
        this.age = builder.age;
    }
    
    static class Builder {
        private String name;
        private String email;
        private int age;
        
        public Builder name(String name) { this.name = name; return this; }
        public Builder email(String email) { this.email = email; return this; }
        public Builder age(int age) { this.age = age; return this; }
        
        public User build() {
            if (name == null) throw new IllegalArgumentException("Name required");
            return new User(this);
        }
    }
}

// Usage
User user = new User.Builder()
    .name("John")
    .email("john@example.com")
    .age(30)
    .build();
```

**When to use**: Complex objects with many optional parameters  
**Pros**: Readable construction, validation, immutability  
**Cons**: Extra boilerplate

---

### Prototype
```java
interface Cloneable {
    Object clone() throws CloneNotSupportedException;
}

class Document implements Cloneable {
    private String name;
    private List<String> pages;
    
    @Override
    public Document clone() throws CloneNotSupportedException {
        Document cloned = (Document) super.clone();
        cloned.pages = new ArrayList<>(this.pages); // Deep copy
        return cloned;
    }
}

// Usage
Document doc1 = new Document("Original");
Document doc2 = doc1.clone();
```

**When to use**: Expensive object creation, similar objects  
**Pros**: Avoids expensive initialization, avoids subclass explosion  
**Cons**: Shallow vs deep copy complexity

---

### Object Pool
```java
class ObjectPool<T> {
    private BlockingQueue<T> available;
    
    public T acquire() throws InterruptedException {
        return available.take();
    }
    
    public void release(T obj) throws InterruptedException {
        available.put(obj);
    }
}

// Usage
ObjectPool<Connection> pool = new ObjectPool<>(10);
Connection conn = pool.acquire();
conn.execute("SELECT...");
pool.release(conn);
```

**When to use**: Expensive resources, connection pooling  
**Pros**: Reduces allocation overhead, improves performance  
**Cons**: Resource management complexity

---

## STRUCTURAL PATTERNS

### Adapter
```java
// Old interface
interface LegacyFormat {
    String getLegacyData();
}

// New interface
interface ModernFormat {
    String getModernData();
}

// Adapter
class LegacyAdapter implements ModernFormat {
    private LegacyFormat legacy;
    
    @Override
    public String getModernData() {
        return legacy.getLegacyData().replace("|", ",");
    }
}
```

**When to use**: Incompatible interfaces, legacy integration  
**Pros**: Reuses existing code, decouples incompatible interfaces  
**Cons**: Extra wrapper layer

---

### Decorator
```java
interface DataSource {
    void write(String data);
}

abstract class DataSourceDecorator implements DataSource {
    protected DataSource wrapped;
    public DataSourceDecorator(DataSource wrapped) {
        this.wrapped = wrapped;
    }
}

class EncryptionDecorator extends DataSourceDecorator {
    @Override
    public void write(String data) {
        String encrypted = encrypt(data);
        wrapped.write(encrypted);
    }
}

// Usage
DataSource source = new FileDataSource();
source = new CompressionDecorator(source);
source = new EncryptionDecorator(source);
source.write("data");
```

**When to use**: Add behavior to objects, alternative to inheritance  
**Pros**: Flexible composition, avoids class explosion  
**Cons**: Can become hard to follow

---

### Facade
```java
class HomeTheaterFacade {
    private Amplifier amplifier;
    private Projector projector;
    private Screen screen;
    
    public void watchMovie(String title) {
        amplifier.on();
        projector.on();
        screen.down();
        // ... more setup
    }
    
    public void endMovie() {
        amplifier.off();
        projector.off();
        screen.up();
    }
}

// Usage
HomeTheaterFacade theater = new HomeTheaterFacade();
theater.watchMovie("Inception");
```

**When to use**: Complex subsystems, simplify client code  
**Pros**: Simplified interface, reduces coupling  
**Cons**: May hide important details

---

### Proxy
```java
interface Image {
    void display();
}

class ProxyImage implements Image {
    private String filename;
    private RealImage realImage;
    
    @Override
    public void display() {
        if (realImage == null) {
            realImage = new RealImage(filename); // Lazy load
        }
        realImage.display();
    }
}

// Usage
Image image = new ProxyImage("photo.jpg");
image.display(); // Loads only when needed
```

**When to use**: Lazy loading, access control, caching  
**Pros**: Lazy initialization, resource protection  
**Cons**: Extra indirection

---

### Bridge
```java
interface Color {
    String fill();
}

abstract class Shape {
    protected Color color;
    abstract void draw();
}

class Circle extends Shape {
    @Override
    void draw() {
        System.out.println("Drawing " + color.fill() + " Circle");
    }
}

// Usage
Shape circle = new Circle(new RedColor());
circle.draw();
```

**When to use**: Separate abstraction from implementation  
**Pros**: Flexibility, avoids explosion of subclasses  
**Cons**: Added complexity

---

### Composite
```java
interface Component {
    void operation();
    void add(Component c);
}

class Composite implements Component {
    private List<Component> children = new ArrayList<>();
    
    @Override
    public void operation() {
        children.forEach(Component::operation);
    }
    
    @Override
    public void add(Component c) {
        children.add(c);
    }
}

// Usage
Composite root = new Composite();
root.add(new Leaf());
root.operation();
```

**When to use**: Tree structures, uniform treatment  
**Pros**: Uniform interface, easy composition  
**Cons**: May force leaf nodes to implement unwanted operations

---

### Flyweight
```java
class CharacterFactory {
    private static Map<Character, CharFlyweight> cache;
    
    public static CharFlyweight getCharacter(char ch) {
        return cache.computeIfAbsent(ch, k -> new CharFlyweight(ch));
    }
}

// Usage
Char c1 = CharacterFactory.getCharacter('A');
Char c2 = CharacterFactory.getCharacter('A');
// c1 == c2 (same object)
```

**When to use**: Many similar small objects, memory optimization  
**Pros**: Reduces memory usage, improves performance  
**Cons**: Added complexity

---

## BEHAVIORAL PATTERNS

### Strategy
```java
interface PaymentStrategy {
    void pay(double amount);
}

class ShoppingCart {
    private PaymentStrategy strategy;
    
    public void setPaymentStrategy(PaymentStrategy strategy) {
        this.strategy = strategy;
    }
    
    public void checkout() {
        strategy.pay(total);
    }
}

// Usage
cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout();
```

**Decision Guide**: Different algorithms, runtime selection

---

### Observer
```java
interface Observer {
    void update(String event);
}

class Subject {
    private List<Observer> observers;
    
    public void attach(Observer o) { observers.add(o); }
    
    public void notifyObservers(String event) {
        observers.forEach(o -> o.update(event));
    }
}

// Usage
subject.attach(observer1);
subject.notifyObservers("Event occurred");
```

**Decision Guide**: Multiple dependent objects, event notification

---

### Command
```java
interface Command {
    void execute();
    void undo();
}

class TextEditor {
    private Stack<Command> history;
    
    public void executeCommand(Command cmd) {
        cmd.execute();
        history.push(cmd);
    }
    
    public void undo() {
        Command cmd = history.pop();
        cmd.undo();
    }
}

// Usage
editor.executeCommand(new AddTextCommand("Hello"));
editor.undo();
```

**Decision Guide**: Request encapsulation, undo/redo

---

### State
```java
interface State {
    void handle(Context context);
}

class Context {
    private State state;
    
    public void setState(State state) {
        this.state = state;
    }
    
    public void request() {
        state.handle(this);
    }
}

// Usage
context.setState(new StateA());
context.request();
```

**Decision Guide**: Different behavior based on state

---

## ARCHITECTURAL PATTERNS

### MVC
```
Model: User data/logic
View: Display user information
Controller: Handle user input
```

### Repository
```java
interface UserRepository {
    void save(User user);
    User findById(int id);
}

// Switch between implementations
UserRepository repo = new DatabaseUserRepository();
// OR
UserRepository repo = new InMemoryUserRepository();
```

### Dependency Injection
```java
class Service {
    public Service(Repository repo) {
        this.repo = repo;
    }
}

// Usage
Repository repo = new DatabaseRepository();
Service service = new Service(repo);
```

### Layered Architecture
```
Presentation Layer (UI)
    ↓
Service Layer (Business Logic)
    ↓
Data Layer (Persistence)
```

### Event-Driven
```java
class EventPublisher {
    public void publish(Event event) {
        listeners.forEach(l -> l.onEvent(event));
    }
}
```

### Microservices
```
Service 1 (User Service)
Service 2 (Order Service)
Service 3 (Payment Service)
    ↓
API Gateway
```

---

## 🎓 PATTERN DECISION MATRIX

| Need | Pattern | Example |
|------|---------|---------|
| Single instance | Singleton | Logger, Database |
| Create complex objects | Builder | Configuration |
| Create object family | Abstract Factory | UI Theme |
| Add behavior dynamically | Decorator | Stream filtering |
| Simplify complex system | Facade | Home theater |
| Lazy load objects | Proxy | Image loading |
| Multiple algorithms | Strategy | Payment method |
| Event notification | Observer | Stock prices |
| Request encapsulation | Command | Undo/Redo |
| State-based behavior | State | Connection states |
| Data abstraction | Repository | Database access |
| Loose coupling | Dependency Injection | Service construction |

---

## ⚠️ ANTI-PATTERNS TO AVOID

### ❌ Singleton Abuse
- Hidden dependencies
- Global state
- Testing difficulties

### ❌ Service Locator
- Same problems as Singleton
- Hidden dependencies
- Hard to test

### ❌ God Objects
- Too many responsibilities
- Hard to test and maintain
- Difficult to reuse

### ❌ Leaky Abstraction
- Implementation details leak
- Hard to change implementation
- Breaks encapsulation

---

## ✅ BEST PRACTICES

1. **SOLID Principles First**
   - Single Responsibility
   - Open/Closed
   - Liskov Substitution
   - Interface Segregation
   - Dependency Inversion

2. **Use Simplest Solution**
   - Avoid over-engineering
   - Refactor to patterns when needed
   - Don't force patterns

3. **Know When NOT to Use**
   - Understand trade-offs
   - Consider complexity vs benefit
   - Measure performance impact

4. **Combine Patterns Wisely**
   - Factory + Strategy
   - Decorator + Factory
   - Repository + DI

5. **Test with Patterns**
   - Mock objects
   - Test fixtures
   - Dependency injection enables testing

---

## 📚 PATTERN COMPLEXITY

**Simple** (1-2 hours): Singleton, Adapter, Decorator  
**Intermediate** (2-4 hours): Builder, Strategy, Observer  
**Advanced** (4+ hours): Factory patterns, State, Mediator  
**Expert** (8+ hours): Pattern combinations, architectures

---

**Quality Standard**: Zero Compromise Maintained ✅  
**Study Time**: 12-13 hours recommended  
**Difficulty**: Beginner → Expert progression

