/*
 * ============================================================================
 * GENERIC REPOSITORY PATTERN
 * Day 9: Design Patterns with Generics
 * ============================================================================
 * 
 * PATTERN OVERVIEW:
 * The Repository pattern provides a collection-like interface for accessing
 * domain objects. Using generics makes it reusable for any entity type.
 * 
 * Benefits of Generic Repository:
 * - Code reusability across different entity types
 * - Type safety at compile time
 * - Abstraction of data access logic
 * - Easy to mock for testing
 * - Consistent API for CRUD operations
 * 
 * Real-world usage:
 * - Spring Data JPA repositories
 * - DAO (Data Access Object) pattern
 * - ORM frameworks
 * - Database abstraction layers
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class GenericRepositoryPattern {

    // ========================================================================
    // SECTION 1: BASIC GENERIC REPOSITORY INTERFACE
    // ========================================================================

    /**
     * Generic repository interface with CRUD operations
     * @param <T> Entity type
     * @param <ID> Primary key type
     */
    interface Repository<T, ID> {
        // Create
        void save(T entity);
        void saveAll(Collection<T> entities);
        
        // Read
        Optional<T> findById(ID id);
        List<T> findAll();
        boolean existsById(ID id);
        long count();
        
        // Update
        void update(T entity);
        
        // Delete
        void deleteById(ID id);
        void delete(T entity);
        void deleteAll();
    }

    // ========================================================================
    // SECTION 2: IN-MEMORY REPOSITORY IMPLEMENTATION
    // ========================================================================

    /**
     * Generic in-memory implementation using HashMap
     * Demonstrates generic class implementing generic interface
     */
    static abstract class InMemoryRepository<T, ID> implements Repository<T, ID> {
        
        protected final Map<ID, T> storage = new HashMap<>();
        
        /**
         * Abstract method to extract ID from entity
         * Subclasses must implement this
         */
        protected abstract ID getId(T entity);
        
        @Override
        public void save(T entity) {
            ID id = getId(entity);
            storage.put(id, entity);
        }
        
        @Override
        public void saveAll(Collection<T> entities) {
            entities.forEach(this::save);
        }
        
        @Override
        public Optional<T> findById(ID id) {
            return Optional.ofNullable(storage.get(id));
        }
        
        @Override
        public List<T> findAll() {
            return new ArrayList<>(storage.values());
        }
        
        @Override
        public boolean existsById(ID id) {
            return storage.containsKey(id);
        }
        
        @Override
        public long count() {
            return storage.size();
        }
        
        @Override
        public void update(T entity) {
            ID id = getId(entity);
            if (storage.containsKey(id)) {
                storage.put(id, entity);
            } else {
                throw new IllegalArgumentException("Entity not found: " + id);
            }
        }
        
        @Override
        public void deleteById(ID id) {
            storage.remove(id);
        }
        
        @Override
        public void delete(T entity) {
            deleteById(getId(entity));
        }
        
        @Override
        public void deleteAll() {
            storage.clear();
        }
    }

    // ========================================================================
    // SECTION 3: ENTITY MODELS
    // ========================================================================

    /**
     * User entity
     */
    static class User {
        private Long id;
        private String username;
        private String email;
        private int age;
        
        public User(Long id, String username, String email, int age) {
            this.id = id;
            this.username = username;
            this.email = email;
            this.age = age;
        }
        
        // Getters
        public Long getId() { return id; }
        public String getUsername() { return username; }
        public String getEmail() { return email; }
        public int getAge() { return age; }
        
        // Setters
        public void setUsername(String username) { this.username = username; }
        public void setEmail(String email) { this.email = email; }
        public void setAge(int age) { this.age = age; }
        
        @Override
        public String toString() {
            return String.format("User[id=%d, username=%s, email=%s, age=%d]",
                id, username, email, age);
        }
    }
    
    /**
     * Product entity
     */
    static class Product {
        private String sku;
        private String name;
        private double price;
        private int quantity;
        
        public Product(String sku, String name, double price, int quantity) {
            this.sku = sku;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
        
        // Getters
        public String getSku() { return sku; }
        public String getName() { return name; }
        public double getPrice() { return price; }
        public int getQuantity() { return quantity; }
        
        // Setters
        public void setName(String name) { this.name = name; }
        public void setPrice(double price) { this.price = price; }
        public void setQuantity(int quantity) { this.quantity = quantity; }
        
        @Override
        public String toString() {
            return String.format("Product[sku=%s, name=%s, price=%.2f, qty=%d]",
                sku, name, price, quantity);
        }
    }

    // ========================================================================
    // SECTION 4: CONCRETE REPOSITORY IMPLEMENTATIONS
    // ========================================================================

    /**
     * User repository with custom query methods
     */
    static class UserRepository extends InMemoryRepository<User, Long> {
        
        @Override
        protected Long getId(User entity) {
            return entity.getId();
        }
        
        // Custom query methods
        public Optional<User> findByUsername(String username) {
            return storage.values().stream()
                .filter(user -> user.getUsername().equals(username))
                .findFirst();
        }
        
        public List<User> findByAgeGreaterThan(int age) {
            return storage.values().stream()
                .filter(user -> user.getAge() > age)
                .collect(Collectors.toList());
        }
        
        public List<User> findByEmailContaining(String keyword) {
            return storage.values().stream()
                .filter(user -> user.getEmail().contains(keyword))
                .collect(Collectors.toList());
        }
    }
    
    /**
     * Product repository with custom query methods
     */
    static class ProductRepository extends InMemoryRepository<Product, String> {
        
        @Override
        protected String getId(Product entity) {
            return entity.getSku();
        }
        
        // Custom query methods
        public List<Product> findByPriceLessThan(double maxPrice) {
            return storage.values().stream()
                .filter(product -> product.getPrice() < maxPrice)
                .collect(Collectors.toList());
        }
        
        public List<Product> findByQuantityGreaterThan(int minQuantity) {
            return storage.values().stream()
                .filter(product -> product.getQuantity() > minQuantity)
                .collect(Collectors.toList());
        }
        
        public Optional<Product> findMostExpensive() {
            return storage.values().stream()
                .max(Comparator.comparingDouble(Product::getPrice));
        }
    }

    // ========================================================================
    // SECTION 5: ADVANCED - SPECIFICATION PATTERN WITH GENERICS
    // ========================================================================

    /**
     * Generic specification interface for complex queries
     */
    @FunctionalInterface
    interface Specification<T> {
        boolean isSatisfiedBy(T entity);
        
        default Specification<T> and(Specification<T> other) {
            return entity -> this.isSatisfiedBy(entity) && other.isSatisfiedBy(entity);
        }
        
        default Specification<T> or(Specification<T> other) {
            return entity -> this.isSatisfiedBy(entity) || other.isSatisfiedBy(entity);
        }
        
        default Specification<T> not() {
            return entity -> !this.isSatisfiedBy(entity);
        }
    }
    
    /**
     * Enhanced repository with specification support
     */
    static abstract class SpecificationRepository<T, ID> extends InMemoryRepository<T, ID> {
        
        public List<T> findAll(Specification<T> spec) {
            return storage.values().stream()
                .filter(spec::isSatisfiedBy)
                .collect(Collectors.toList());
        }
        
        public Optional<T> findOne(Specification<T> spec) {
            return storage.values().stream()
                .filter(spec::isSatisfiedBy)
                .findFirst();
        }
        
        public long count(Specification<T> spec) {
            return storage.values().stream()
                .filter(spec::isSatisfiedBy)
                .count();
        }
    }

    // ========================================================================
    // SECTION 6: DEMO AND TESTS
    // ========================================================================

    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║       GENERIC REPOSITORY PATTERN DEMONSTRATION             ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝\n");
        
        // User repository demo
        System.out.println("=== User Repository Demo ===");
        UserRepository userRepo = new UserRepository();
        
        // Create users
        userRepo.save(new User(1L, "alice", "alice@example.com", 25));
        userRepo.save(new User(2L, "bob", "bob@example.com", 30));
        userRepo.save(new User(3L, "charlie", "charlie@example.com", 35));
        
        System.out.println("All users: " + userRepo.findAll());
        System.out.println("Count: " + userRepo.count());
        
        // Find by ID
        userRepo.findById(1L).ifPresent(user -> 
            System.out.println("Found by ID: " + user)
        );
        
        // Custom queries
        userRepo.findByUsername("bob").ifPresent(user ->
            System.out.println("Found by username: " + user)
        );
        
        System.out.println("Users older than 25: " + userRepo.findByAgeGreaterThan(25));
        
        // Update
        User alice = userRepo.findById(1L).get();
        alice.setAge(26);
        userRepo.update(alice);
        System.out.println("After update: " + userRepo.findById(1L).get());
        
        // Delete
        userRepo.deleteById(3L);
        System.out.println("After deletion, count: " + userRepo.count());
        System.out.println();
        
        // Product repository demo
        System.out.println("=== Product Repository Demo ===");
        ProductRepository productRepo = new ProductRepository();
        
        // Create products
        productRepo.save(new Product("SKU001", "Laptop", 999.99, 10));
        productRepo.save(new Product("SKU002", "Mouse", 29.99, 50));
        productRepo.save(new Product("SKU003", "Keyboard", 79.99, 30));
        
        System.out.println("All products: " + productRepo.findAll());
        
        // Custom queries
        System.out.println("Products under $100: " + 
            productRepo.findByPriceLessThan(100.0));
        
        System.out.println("Products with quantity > 20: " +
            productRepo.findByQuantityGreaterThan(20));
        
        productRepo.findMostExpensive().ifPresent(product ->
            System.out.println("Most expensive: " + product)
        );
        System.out.println();
        
        // Specification pattern demo
        System.out.println("=== Specification Pattern Demo ===");
        
        class UserSpecificationRepo extends SpecificationRepository<User, Long> {
            @Override
            protected Long getId(User entity) {
                return entity.getId();
            }
        }
        
        UserSpecificationRepo specRepo = new UserSpecificationRepo();
        specRepo.saveAll(Arrays.asList(
            new User(1L, "alice", "alice@gmail.com", 25),
            new User(2L, "bob", "bob@yahoo.com", 30),
            new User(3L, "charlie", "charlie@gmail.com", 35)
        ));
        
        // Create specifications
        Specification<User> isYoung = user -> user.getAge() < 30;
        Specification<User> hasGmail = user -> user.getEmail().endsWith("@gmail.com");
        
        // Combine specifications
        Specification<User> youngWithGmail = isYoung.and(hasGmail);
        
        System.out.println("Young users: " + specRepo.findAll(isYoung));
        System.out.println("Gmail users: " + specRepo.findAll(hasGmail));
        System.out.println("Young Gmail users: " + specRepo.findAll(youngWithGmail));
        
        // Complex specification
        Specification<User> complexSpec = isYoung.or(hasGmail).and(
            user -> user.getUsername().length() > 3
        );
        System.out.println("Complex query: " + specRepo.findAll(complexSpec));
        System.out.println();
        
        // Summary
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║                    PATTERN BENEFITS                        ║");
        System.out.println("╠════════════════════════════════════════════════════════════╣");
        System.out.println("║ ✓ Generic Repository<T, ID> - Reusable for any entity     ║");
        System.out.println("║ ✓ Type-safe operations at compile time                    ║");
        System.out.println("║ ✓ Consistent CRUD API across all entities                 ║");
        System.out.println("║ ✓ Easy to extend with custom query methods                ║");
        System.out.println("║ ✓ Specification pattern for complex queries               ║");
        System.out.println("║ ✓ Abstraction separates data access from business logic   ║");
        System.out.println("║ ✓ Easy to swap implementations (in-memory, DB, etc.)      ║");
        System.out.println("║ ✓ Testable with mock repositories                         ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        System.out.println();
        
        System.out.println("OOP CONCEPTS DEMONSTRATED:");
        System.out.println("  • Generic interfaces: Repository<T, ID>");
        System.out.println("  • Generic abstract classes: InMemoryRepository<T, ID>");
        System.out.println("  • Template Method pattern: abstract getId()");
        System.out.println("  • Optional<T> for safe returns");
        System.out.println("  • Functional interfaces: Specification<T>");
        System.out.println("  • Stream API for querying");
        System.out.println("  • Composition: and(), or(), not()");
    }
}
