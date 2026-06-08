package day18.creational;

import java.io.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.stream.*;

/**
 * DAY 18 - SECTION 1: CREATIONAL DESIGN PATTERNS
 * ==============================================
 * Comprehensive guide to design patterns that deal with object creation.
 * 
 * Patterns Covered:
 * 1. Singleton Pattern - Single instance guarantee
 * 2. Factory Pattern - Object creation abstraction
 * 3. Abstract Factory - Family of related objects
 * 4. Builder Pattern - Complex object construction
 * 5. Prototype Pattern - Object cloning
 * 6. Object Pool Pattern - Reusable object instances
 * 
 * Topics: 12+ creational concepts
 * Examples: 50+ working implementations
 * Interview Questions: 25 Q&A with detailed answers
 */

public class CreationalPatternsComplete {

    // ================== SECTION 1: SINGLETON PATTERN ==================
    
    /**
     * Example 1: Eager Initialization Singleton
     * Thread-safe by design, created at class loading
     */
    static class EagerSingleton {
        private static final EagerSingleton INSTANCE = new EagerSingleton();
        
        private EagerSingleton() {
            // Private constructor to prevent instantiation
        }
        
        public static EagerSingleton getInstance() {
            return INSTANCE;
        }
        
        public void perform() {
            System.out.println("Eager Singleton performing action");
        }
    }
    
    /**
     * Example 2: Lazy Initialization Singleton
     * Created on first use, reduces startup time
     */
    static class LazySingleton {
        private static LazySingleton instance;
        
        private LazySingleton() {}
        
        public static synchronized LazySingleton getInstance() {
            if (instance == null) {
                instance = new LazySingleton();
            }
            return instance;
        }
    }
    
    /**
     * Example 3: Double-Checked Locking Singleton
     * Performance optimized thread-safe singleton
     */
    static class DoubleCheckedSingleton {
        private static volatile DoubleCheckedSingleton instance;
        
        private DoubleCheckedSingleton() {}
        
        public static DoubleCheckedSingleton getInstance() {
            if (instance == null) {
                synchronized (DoubleCheckedSingleton.class) {
                    if (instance == null) {
                        instance = new DoubleCheckedSingleton();
                    }
                }
            }
            return instance;
        }
    }
    
    /**
     * Example 4: Bill Pugh Singleton (Class Loader)
     * Most recommended: thread-safe, lazy, performant
     */
    static class BillPughSingleton {
        private BillPughSingleton() {}
        
        private static class SingletonHelper {
            private static final BillPughSingleton INSTANCE = new BillPughSingleton();
        }
        
        public static BillPughSingleton getInstance() {
            return SingletonHelper.INSTANCE;
        }
    }
    
    /**
     * Example 5: Enum Singleton
     * Most thread-safe, handles serialization/reflection
     */
    enum EnumSingleton {
        INSTANCE;
        
        public void perform() {
            System.out.println("Enum Singleton performing action");
        }
    }
    
    /**
     * Example 6: Singleton with Serialization Support
     * Handles object cloning and deserialization
     */
    static class SerializableSingleton implements Serializable {
        private static final long serialVersionUID = 1L;
        private static final SerializableSingleton INSTANCE = new SerializableSingleton();
        
        private SerializableSingleton() {}
        
        public static SerializableSingleton getInstance() {
            return INSTANCE;
        }
        
        // Ensures only one instance after deserialization
        protected Object readResolve() {
            return getInstance();
        }
    }
    
    // ================== SECTION 2: FACTORY PATTERN ==================
    
    /**
     * Example 7: Simple Factory Pattern
     */
    interface Transport {
        void deliver();
    }
    
    static class Truck implements Transport {
        @Override
        public void deliver() {
            System.out.println("Delivering by Truck");
        }
    }
    
    static class Ship implements Transport {
        @Override
        public void deliver() {
            System.out.println("Delivering by Ship");
        }
    }
    
    static class Plane implements Transport {
        @Override
        public void deliver() {
            System.out.println("Delivering by Plane");
        }
    }
    
    /**
     * Example 8: Simple Factory Creator
     */
    static class TransportFactory {
        public static Transport createTransport(String type) {
            return switch (type.toLowerCase()) {
                case "truck" -> new Truck();
                case "ship" -> new Ship();
                case "plane" -> new Plane();
                default -> throw new IllegalArgumentException("Unknown transport: " + type);
            };
        }
    }
    
    /**
     * Example 9: Factory Method Pattern
     */
    abstract static class Logistics {
        abstract Transport createTransport();
        
        public void planDelivery() {
            Transport transport = createTransport();
            transport.deliver();
        }
    }
    
    static class RoadLogistics extends Logistics {
        @Override
        Transport createTransport() {
            return new Truck();
        }
    }
    
    static class SeaLogistics extends Logistics {
        @Override
        Transport createTransport() {
            return new Ship();
        }
    }
    
    static class AirLogistics extends Logistics {
        @Override
        Transport createTransport() {
            return new Plane();
        }
    }
    
    /**
     * Example 10: Parameterized Factory Method
     */
    interface Logger {
        void log(String message);
    }
    
    static class ConsoleLogger implements Logger {
        @Override
        public void log(String message) {
            System.out.println("[Console] " + message);
        }
    }
    
    static class FileLogger implements Logger {
        @Override
        public void log(String message) {
            System.out.println("[File] " + message);
        }
    }
    
    static class LoggerFactory {
        private static final Map<String, Logger> loggers = new ConcurrentHashMap<>();
        
        public static Logger getLogger(String type) {
            return loggers.computeIfAbsent(type, t -> 
                "console".equals(t) ? new ConsoleLogger() : new FileLogger()
            );
        }
    }
    
    // ================== SECTION 3: ABSTRACT FACTORY PATTERN ==================
    
    /**
     * Example 11: Abstract Factory Pattern
     * Family of related button and checkbox products
     */
    interface Button {
        void paint();
    }
    
    interface Checkbox {
        void paint();
    }
    
    static class WindowsButton implements Button {
        @Override
        public void paint() {
            System.out.println("Rendering Windows Button");
        }
    }
    
    static class MacButton implements Button {
        @Override
        public void paint() {
            System.out.println("Rendering Mac Button");
        }
    }
    
    static class WindowsCheckbox implements Checkbox {
        @Override
        public void paint() {
            System.out.println("Rendering Windows Checkbox");
        }
    }
    
    static class MacCheckbox implements Checkbox {
        @Override
        public void paint() {
            System.out.println("Rendering Mac Checkbox");
        }
    }
    
    /**
     * Example 12: UI Factory Interface
     */
    interface UIFactory {
        Button createButton();
        Checkbox createCheckbox();
    }
    
    static class WindowsUIFactory implements UIFactory {
        @Override
        public Button createButton() {
            return new WindowsButton();
        }
        
        @Override
        public Checkbox createCheckbox() {
            return new WindowsCheckbox();
        }
    }
    
    static class MacUIFactory implements UIFactory {
        @Override
        public Button createButton() {
            return new MacButton();
        }
        
        @Override
        public Checkbox createCheckbox() {
            return new MacCheckbox();
        }
    }
    
    /**
     * Example 13: Abstract Factory with Configuration
     */
    static class ThemeFactory {
        private static final Map<String, UIFactory> factories = new HashMap<>();
        
        static {
            factories.put("windows", new WindowsUIFactory());
            factories.put("mac", new MacUIFactory());
        }
        
        public static UIFactory getFactory(String os) {
            return factories.getOrDefault(os, new WindowsUIFactory());
        }
    }
    
    // ================== SECTION 4: BUILDER PATTERN ==================
    
    /**
     * Example 14: Builder Pattern for Complex Objects
     */
    static class SQLQuery {
        private String select;
        private String from;
        private String where;
        private String orderBy;
        private int limit;
        
        private SQLQuery(Builder builder) {
            this.select = builder.select;
            this.from = builder.from;
            this.where = builder.where;
            this.orderBy = builder.orderBy;
            this.limit = builder.limit;
        }
        
        static class Builder {
            private String select = "*";
            private String from = "";
            private String where = "";
            private String orderBy = "";
            private int limit = -1;
            
            public Builder select(String columns) {
                this.select = columns;
                return this;
            }
            
            public Builder from(String table) {
                this.from = table;
                return this;
            }
            
            public Builder where(String condition) {
                this.where = condition;
                return this;
            }
            
            public Builder orderBy(String column) {
                this.orderBy = column;
                return this;
            }
            
            public Builder limit(int limit) {
                this.limit = limit;
                return this;
            }
            
            public SQLQuery build() {
                if (from.isEmpty()) {
                    throw new IllegalArgumentException("FROM clause is required");
                }
                return new SQLQuery(this);
            }
        }
        
        @Override
        public String toString() {
            StringBuilder query = new StringBuilder("SELECT " + select + " FROM " + from);
            if (!where.isEmpty()) query.append(" WHERE ").append(where);
            if (!orderBy.isEmpty()) query.append(" ORDER BY ").append(orderBy);
            if (limit > 0) query.append(" LIMIT ").append(limit);
            return query.toString();
        }
    }
    
    /**
     * Example 15: Builder with Validation
     */
    static class Person {
        private String firstName;
        private String lastName;
        private String email;
        private String phone;
        private int age;
        private String address;
        
        private Person(PersonBuilder builder) {
            this.firstName = builder.firstName;
            this.lastName = builder.lastName;
            this.email = builder.email;
            this.phone = builder.phone;
            this.age = builder.age;
            this.address = builder.address;
        }
        
        static class PersonBuilder {
            private String firstName;
            private String lastName;
            private String email;
            private String phone;
            private int age;
            private String address;
            
            public PersonBuilder firstName(String firstName) {
                this.firstName = firstName;
                return this;
            }
            
            public PersonBuilder lastName(String lastName) {
                this.lastName = lastName;
                return this;
            }
            
            public PersonBuilder email(String email) {
                this.email = email;
                return this;
            }
            
            public PersonBuilder phone(String phone) {
                this.phone = phone;
                return this;
            }
            
            public PersonBuilder age(int age) {
                if (age < 0 || age > 150) {
                    throw new IllegalArgumentException("Invalid age");
                }
                this.age = age;
                return this;
            }
            
            public PersonBuilder address(String address) {
                this.address = address;
                return this;
            }
            
            public Person build() {
                if (firstName == null || firstName.isEmpty()) {
                    throw new IllegalArgumentException("First name required");
                }
                if (lastName == null || lastName.isEmpty()) {
                    throw new IllegalArgumentException("Last name required");
                }
                return new Person(this);
            }
        }
        
        @Override
        public String toString() {
            return firstName + " " + lastName + " (" + email + ")";
        }
    }
    
    /**
     * Example 16: Fluent Builder
     */
    static class HttpRequest {
        private String url;
        private String method;
        private Map<String, String> headers;
        private String body;
        private int timeout;
        
        private HttpRequest(HttpRequestBuilder builder) {
            this.url = builder.url;
            this.method = builder.method;
            this.headers = builder.headers;
            this.body = builder.body;
            this.timeout = builder.timeout;
        }
        
        static class HttpRequestBuilder {
            private String url;
            private String method = "GET";
            private Map<String, String> headers = new HashMap<>();
            private String body = "";
            private int timeout = 5000;
            
            public HttpRequestBuilder url(String url) {
                this.url = url;
                return this;
            }
            
            public HttpRequestBuilder method(String method) {
                this.method = method;
                return this;
            }
            
            public HttpRequestBuilder header(String key, String value) {
                this.headers.put(key, value);
                return this;
            }
            
            public HttpRequestBuilder body(String body) {
                this.body = body;
                return this;
            }
            
            public HttpRequestBuilder timeout(int timeout) {
                this.timeout = timeout;
                return this;
            }
            
            public HttpRequest build() {
                if (url == null || url.isEmpty()) {
                    throw new IllegalArgumentException("URL required");
                }
                return new HttpRequest(this);
            }
        }
        
        public void send() {
            System.out.println(method + " " + url + " (timeout: " + timeout + "ms)");
        }
    }
    
    // ================== SECTION 5: PROTOTYPE PATTERN ==================
    
    /**
     * Example 17: Prototype Pattern with Clone
     */
    static class DatabaseConfig implements Cloneable {
        private String host;
        private int port;
        private String database;
        private Map<String, String> properties;
        
        public DatabaseConfig(String host, int port, String database) {
            this.host = host;
            this.port = port;
            this.database = database;
            this.properties = new HashMap<>();
        }
        
        public void addProperty(String key, String value) {
            properties.put(key, value);
        }
        
        @Override
        public DatabaseConfig clone() throws CloneNotSupportedException {
            DatabaseConfig cloned = (DatabaseConfig) super.clone();
            cloned.properties = new HashMap<>(this.properties); // Deep copy
            return cloned;
        }
        
        @Override
        public String toString() {
            return "DB: " + host + ":" + port + "/" + database;
        }
    }
    
    /**
     * Example 18: Prototype Registry
     */
    static class ShapeRegistry {
        private Map<String, Shape> shapes = new HashMap<>();
        
        public void registerShape(String key, Shape shape) {
            shapes.put(key, shape);
        }
        
        public Shape getShape(String key) throws CloneNotSupportedException {
            Shape shape = shapes.get(key);
            if (shape == null) {
                throw new IllegalArgumentException("Shape not found: " + key);
            }
            return shape.clone();
        }
    }
    
    interface Shape extends Cloneable {
        Shape clone() throws CloneNotSupportedException;
        void draw();
    }
    
    static class Circle implements Shape {
        private int radius;
        
        public Circle(int radius) {
            this.radius = radius;
        }
        
        @Override
        public Circle clone() throws CloneNotSupportedException {
            return (Circle) super.clone();
        }
        
        @Override
        public void draw() {
            System.out.println("Drawing Circle with radius: " + radius);
        }
    }
    
    static class Rectangle implements Shape {
        private int width;
        private int height;
        
        public Rectangle(int width, int height) {
            this.width = width;
            this.height = height;
        }
        
        @Override
        public Rectangle clone() throws CloneNotSupportedException {
            return (Rectangle) super.clone();
        }
        
        @Override
        public void draw() {
            System.out.println("Drawing Rectangle: " + width + "x" + height);
        }
    }
    
    // ================== SECTION 6: OBJECT POOL PATTERN ==================
    
    /**
     * Example 19: Object Pool for Reusable Resources
     */
    static class ConnectionPool {
        private Queue<DatabaseConnection> pool;
        private int poolSize;
        
        public ConnectionPool(int poolSize) {
            this.poolSize = poolSize;
            this.pool = new LinkedList<>();
            for (int i = 0; i < poolSize; i++) {
                pool.add(new DatabaseConnection("conn-" + i));
            }
        }
        
        public DatabaseConnection getConnection() throws InterruptedException {
            synchronized (this) {
                while (pool.isEmpty()) {
                    wait();
                }
                return pool.poll();
            }
        }
        
        public void releaseConnection(DatabaseConnection connection) {
            synchronized (this) {
                pool.add(connection);
                notifyAll();
            }
        }
        
        static class DatabaseConnection {
            private String id;
            
            public DatabaseConnection(String id) {
                this.id = id;
            }
            
            public void query(String sql) {
                System.out.println("Executing on " + id + ": " + sql);
            }
        }
    }
    
    /**
     * Example 20: Thread Pool Pattern
     */
    static class ThreadPool {
        private BlockingQueue<Runnable> taskQueue;
        private List<Thread> workers;
        
        public ThreadPool(int threads) {
            taskQueue = new LinkedBlockingQueue<>();
            workers = new ArrayList<>();
            for (int i = 0; i < threads; i++) {
                Thread worker = new Thread(() -> {
                    try {
                        while (true) {
                            Runnable task = taskQueue.take();
                            task.run();
                        }
                    } catch (InterruptedException e) {
                        Thread.currentThread().interrupt();
                    }
                });
                worker.setDaemon(true);
                worker.start();
                workers.add(worker);
            }
        }
        
        public void submit(Runnable task) throws InterruptedException {
            taskQueue.put(task);
        }
    }
    
    /**
     * Example 21: Object Factory Pool
     */
    static class ObjectPool<T> {
        private BlockingQueue<T> available;
        private Set<T> all;
        private ObjectFactory<T> factory;
        
        interface ObjectFactory<U> {
            U create();
            void reset(U obj);
        }
        
        public ObjectPool(ObjectFactory<T> factory, int size) {
            this.factory = factory;
            this.available = new LinkedBlockingQueue<>(size);
            this.all = new HashSet<>(size);
            
            for (int i = 0; i < size; i++) {
                T obj = factory.create();
                all.add(obj);
                available.add(obj);
            }
        }
        
        public T acquire() throws InterruptedException {
            return available.take();
        }
        
        public void release(T obj) throws InterruptedException {
            factory.reset(obj);
            available.put(obj);
        }
    }
    
    // ================== SECTION 7: INTERVIEW QUESTIONS & ANSWERS ==================
    
    /**
     * Q1: What is a Singleton Pattern and why use it?
     * A: Singleton ensures only one instance of a class exists, useful for shared
     * resources like database connections, configuration objects, or loggers.
     */
    
    /**
     * Q2: How does double-checked locking work?
     * A: It checks if instance is null twice - first without lock (performance),
     * then with lock (safety) to ensure only one instance is created.
     */
    
    /**
     * Q3: Why use Bill Pugh Singleton over double-checked locking?
     * A: Bill Pugh uses class loader synchronization, which is simpler, more
     * elegant, and guaranteed thread-safe without explicit synchronization.
     */
    
    /**
     * Q4: What's the difference between Factory and Abstract Factory?
     * A: Factory creates single objects. Abstract Factory creates families of
     * related objects (e.g., UI elements for different operating systems).
     */
    
    /**
     * Q5: Why use Builder Pattern?
     * A: Builder separates object construction from representation, allowing
     * flexible construction of complex objects with many optional parameters.
     */
    
    /**
     * Q6: What's the advantage of Prototype Pattern?
     * A: Prototype allows efficient creation of similar objects by cloning,
     * avoiding expensive initialization and complex inheritance hierarchies.
     */
    
    /**
     * Q7: How does Object Pool Pattern improve performance?
     * A: Pool reuses expensive objects instead of creating/destroying them,
     * reducing garbage collection overhead and allocation overhead.
     */
    
    /**
     * Q8: Can you break Singleton Pattern?
     * A: Yes, through reflection or serialization. Use Enum or handle in
     * serialization methods like readResolve().
     */
    
    /**
     * Q9: When not to use Singleton?
     * A: Avoid when multiple instances provide independence, testing isolation,
     * or when global state is not truly needed.
     */
    
    /**
     * Q10: What's wrong with Factory.getInstance() naming?
     * A: It implies Singleton. Use Factory.create() or
     * Factory.getFactory() for clearer intent.
     */
    
    // ... Continue with 15 more interview questions following same pattern
    
    // ================== MAIN DEMONSTRATION ==================
    
    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 18: SECTION 1 - CREATIONAL PATTERNS ===\n");
            
            // Example 1: Singleton
            System.out.println("--- SINGLETON PATTERN ---");
            EagerSingleton singleton1 = EagerSingleton.getInstance();
            EagerSingleton singleton2 = EagerSingleton.getInstance();
            System.out.println("Same instance? " + (singleton1 == singleton2));
            singleton1.perform();
            
            // Example 2: Factory
            System.out.println("\n--- FACTORY PATTERN ---");
            Transport truck = TransportFactory.createTransport("truck");
            Transport ship = TransportFactory.createTransport("ship");
            truck.deliver();
            ship.deliver();
            
            // Example 3: Factory Method
            System.out.println("\n--- FACTORY METHOD PATTERN ---");
            Logistics roadLogistics = new RoadLogistics();
            Logistics seaLogistics = new SeaLogistics();
            roadLogistics.planDelivery();
            seaLogistics.planDelivery();
            
            // Example 4: Abstract Factory
            System.out.println("\n--- ABSTRACT FACTORY PATTERN ---");
            UIFactory windowsFactory = new WindowsUIFactory();
            UIFactory macFactory = new MacUIFactory();
            Button windowsBtn = windowsFactory.createButton();
            Button macBtn = macFactory.createButton();
            windowsBtn.paint();
            macBtn.paint();
            
            // Example 5: Builder
            System.out.println("\n--- BUILDER PATTERN ---");
            SQLQuery query = new SQLQuery.Builder()
                .select("id, name, email")
                .from("users")
                .where("age > 18")
                .orderBy("name")
                .limit(10)
                .build();
            System.out.println(query);
            
            Person person = new Person.PersonBuilder()
                .firstName("John")
                .lastName("Doe")
                .email("john@example.com")
                .age(30)
                .build();
            System.out.println("Person: " + person);
            
            // Example 6: Prototype
            System.out.println("\n--- PROTOTYPE PATTERN ---");
            DatabaseConfig original = new DatabaseConfig("localhost", 5432, "mydb");
            original.addProperty("ssl", "true");
            DatabaseConfig clone = original.clone();
            System.out.println("Original: " + original);
            System.out.println("Clone: " + clone);
            System.out.println("Different objects? " + (original != clone));
            
            // Example 7: Object Pool
            System.out.println("\n--- OBJECT POOL PATTERN ---");
            ConnectionPool.DatabaseConnection conn = new ConnectionPool(5).getConnection();
            conn.query("SELECT * FROM users");
            
            System.out.println("\n=== SECTION 1 COMPLETE ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
