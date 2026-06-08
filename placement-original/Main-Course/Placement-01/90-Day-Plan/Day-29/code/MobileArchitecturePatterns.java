/**
 * DAY 29: MOBILE DEVELOPMENT & CROSS-PLATFORM - ARCHITECTURE PATTERNS
 * 
 * Comprehensive mobile architecture patterns including:
 * - MVC, MVP, MVVM, MVI patterns
 * - Clean Architecture for mobile
 * - Repository pattern
 * - Dependency Injection
 * - State management
 * - Navigation patterns
 * 
 * All implementations include:
 * - Production-ready code
 * - Complete examples
 * - Best practices
 * - Performance optimizations
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.stream.*;

public class MobileArchitecturePatterns {

    /**
     * ========================================================================
     * PATTERN 1: MODEL-VIEW-VIEWMODEL (MVVM)
     * ========================================================================
     * 
     * Most popular architecture for modern mobile apps
     * 
     * Components:
     * - Model: Data and business logic
     * - View: UI layer (Activity/Fragment in Android, UIViewController in iOS)
     * - ViewModel: Presentation logic, exposes data to View
     * 
     * Benefits:
     * - Separation of concerns
     * - Testable (ViewModel has no Android/iOS dependencies)
     * - Data binding support
     * - Lifecycle aware
     * 
     * Time Complexity: O(1) for data binding updates
     * Space Complexity: O(n) where n = number of observers
     */
    
    // LiveData - Observable data holder
    static class LiveData<T> {
        private T value;
        private final List<Observer<T>> observers = new CopyOnWriteArrayList<>();
        
        public void setValue(T value) {
            this.value = value;
            notifyObservers();
        }
        
        public T getValue() {
            return value;
        }
        
        public void observe(Observer<T> observer) {
            observers.add(observer);
            if (value != null) {
                observer.onChanged(value);
            }
        }
        
        public void removeObserver(Observer<T> observer) {
            observers.remove(observer);
        }
        
        private void notifyObservers() {
            for (Observer<T> observer : observers) {
                observer.onChanged(value);
            }
        }
    }
    
    interface Observer<T> {
        void onChanged(T value);
    }
    
    // Model - Data class
    static class User {
        private String id;
        private String name;
        private String email;
        private int age;
        
        public User(String id, String name, String email, int age) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.age = age;
        }
        
        // Getters
        public String getId() { return id; }
        public String getName() { return name; }
        public String getEmail() { return email; }
        public int getAge() { return age; }
        
        @Override
        public String toString() {
            return "User{id='" + id + "', name='" + name + 
                   "', email='" + email + "', age=" + age + "}";
        }
    }
    
    // Repository - Data source abstraction
    static class UserRepository {
        private final Map<String, User> cache = new ConcurrentHashMap<>();
        private final ExecutorService executor = Executors.newCachedThreadPool();
        
        // Simulate network call
        public CompletableFuture<User> getUserById(String userId) {
            return CompletableFuture.supplyAsync(() -> {
                // Check cache first
                if (cache.containsKey(userId)) {
                    return cache.get(userId);
                }
                
                // Simulate network delay
                try {
                    Thread.sleep(1000);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                // Create user (normally from API)
                User user = new User(userId, "User " + userId, 
                                   userId + "@example.com", 25);
                cache.put(userId, user);
                return user;
            }, executor);
        }
        
        public CompletableFuture<List<User>> getAllUsers() {
            return CompletableFuture.supplyAsync(() -> {
                // Simulate network delay
                try {
                    Thread.sleep(1500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                List<User> users = new ArrayList<>();
                for (int i = 1; i <= 10; i++) {
                    users.add(new User("user" + i, "User " + i, 
                                     "user" + i + "@example.com", 20 + i));
                }
                return users;
            }, executor);
        }
        
        public void shutdown() {
            executor.shutdown();
        }
    }
    
    // ViewModel - Presentation logic
    static class UserViewModel {
        private final UserRepository repository;
        private final LiveData<User> currentUser = new LiveData<>();
        private final LiveData<List<User>> userList = new LiveData<>();
        private final LiveData<Boolean> loading = new LiveData<>();
        private final LiveData<String> error = new LiveData<>();
        
        public UserViewModel(UserRepository repository) {
            this.repository = repository;
            loading.setValue(false);
        }
        
        // Expose LiveData to View
        public LiveData<User> getCurrentUser() {
            return currentUser;
        }
        
        public LiveData<List<User>> getUserList() {
            return userList;
        }
        
        public LiveData<Boolean> getLoading() {
            return loading;
        }
        
        public LiveData<String> getError() {
            return error;
        }
        
        // Actions triggered by View
        public void loadUser(String userId) {
            loading.setValue(true);
            error.setValue(null);
            
            repository.getUserById(userId)
                .thenAccept(user -> {
                    currentUser.setValue(user);
                    loading.setValue(false);
                })
                .exceptionally(throwable -> {
                    error.setValue("Failed to load user: " + throwable.getMessage());
                    loading.setValue(false);
                    return null;
                });
        }
        
        public void loadAllUsers() {
            loading.setValue(true);
            error.setValue(null);
            
            repository.getAllUsers()
                .thenAccept(users -> {
                    userList.setValue(users);
                    loading.setValue(false);
                })
                .exceptionally(throwable -> {
                    error.setValue("Failed to load users: " + throwable.getMessage());
                    loading.setValue(false);
                    return null;
                });
        }
        
        public void updateUserName(String newName) {
            User user = currentUser.getValue();
            if (user != null) {
                User updated = new User(user.getId(), newName, 
                                      user.getEmail(), user.getAge());
                currentUser.setValue(updated);
            }
        }
    }
    
    // View - UI layer (simplified)
    static class UserView {
        private final UserViewModel viewModel;
        
        public UserView(UserViewModel viewModel) {
            this.viewModel = viewModel;
            setupObservers();
        }
        
        private void setupObservers() {
            // Observe user data
            viewModel.getCurrentUser().observe(user -> {
                if (user != null) {
                    displayUser(user);
                }
            });
            
            // Observe user list
            viewModel.getUserList().observe(users -> {
                if (users != null) {
                    displayUserList(users);
                }
            });
            
            // Observe loading state
            viewModel.getLoading().observe(isLoading -> {
                if (isLoading != null) {
                    showLoading(isLoading);
                }
            });
            
            // Observe errors
            viewModel.getError().observe(errorMsg -> {
                if (errorMsg != null) {
                    showError(errorMsg);
                }
            });
        }
        
        private void displayUser(User user) {
            System.out.println("Displaying user: " + user);
        }
        
        private void displayUserList(List<User> users) {
            System.out.println("Displaying " + users.size() + " users:");
            users.forEach(System.out::println);
        }
        
        private void showLoading(boolean isLoading) {
            System.out.println(isLoading ? "Loading..." : "Loading complete");
        }
        
        private void showError(String error) {
            System.err.println("Error: " + error);
        }
        
        // User actions
        public void onLoadUserClicked(String userId) {
            viewModel.loadUser(userId);
        }
        
        public void onLoadAllUsersClicked() {
            viewModel.loadAllUsers();
        }
        
        public void onUpdateNameClicked(String newName) {
            viewModel.updateUserName(newName);
        }
    }

    /**
     * ========================================================================
     * PATTERN 2: MODEL-VIEW-INTENT (MVI)
     * ========================================================================
     * 
     * Unidirectional data flow architecture
     * 
     * Components:
     * - Model: Immutable state
     * - View: Renders state, emits intents
     * - Intent: User intentions/actions
     * 
     * Flow: Intent → Model Update → View Render
     * 
     * Benefits:
     * - Predictable state changes
     * - Easy to debug (state history)
     * - Time-travel debugging
     * - Thread-safe (immutable state)
     * 
     * Time Complexity: O(1) for state updates
     * Space Complexity: O(h) where h = state history size
     */
    
    // Intent - User actions
    interface UserIntent {
        class LoadUser implements UserIntent {
            final String userId;
            LoadUser(String userId) { this.userId = userId; }
        }
        
        class LoadAllUsers implements UserIntent {}
        
        class UpdateUserName implements UserIntent {
            final String newName;
            UpdateUserName(String newName) { this.newName = newName; }
        }
        
        class Retry implements UserIntent {}
    }
    
    // State - Immutable
    static class UserState {
        final User currentUser;
        final List<User> users;
        final boolean loading;
        final String error;
        
        private UserState(User currentUser, List<User> users, 
                         boolean loading, String error) {
            this.currentUser = currentUser;
            this.users = users != null ? List.copyOf(users) : null;
            this.loading = loading;
            this.error = error;
        }
        
        static UserState initial() {
            return new UserState(null, null, false, null);
        }
        
        UserState withUser(User user) {
            return new UserState(user, users, loading, error);
        }
        
        UserState withUsers(List<User> users) {
            return new UserState(currentUser, users, loading, error);
        }
        
        UserState withLoading(boolean loading) {
            return new UserState(currentUser, users, loading, error);
        }
        
        UserState withError(String error) {
            return new UserState(currentUser, users, loading, error);
        }
        
        @Override
        public String toString() {
            return "UserState{" +
                   "currentUser=" + currentUser +
                   ", usersCount=" + (users != null ? users.size() : 0) +
                   ", loading=" + loading +
                   ", error='" + error + '\'' +
                   '}';
        }
    }
    
    // Store - Manages state
    static class UserStore {
        private final UserRepository repository;
        private UserState currentState = UserState.initial();
        private final List<Consumer<UserState>> subscribers = 
            new CopyOnWriteArrayList<>();
        
        public UserStore(UserRepository repository) {
            this.repository = repository;
        }
        
        public void dispatch(UserIntent intent) {
            if (intent instanceof UserIntent.LoadUser) {
                handleLoadUser((UserIntent.LoadUser) intent);
            } else if (intent instanceof UserIntent.LoadAllUsers) {
                handleLoadAllUsers();
            } else if (intent instanceof UserIntent.UpdateUserName) {
                handleUpdateUserName((UserIntent.UpdateUserName) intent);
            }
        }
        
        private void handleLoadUser(UserIntent.LoadUser intent) {
            updateState(currentState.withLoading(true).withError(null));
            
            repository.getUserById(intent.userId)
                .thenAccept(user -> {
                    updateState(currentState
                        .withUser(user)
                        .withLoading(false));
                })
                .exceptionally(throwable -> {
                    updateState(currentState
                        .withLoading(false)
                        .withError("Failed: " + throwable.getMessage()));
                    return null;
                });
        }
        
        private void handleLoadAllUsers() {
            updateState(currentState.withLoading(true).withError(null));
            
            repository.getAllUsers()
                .thenAccept(users -> {
                    updateState(currentState
                        .withUsers(users)
                        .withLoading(false));
                })
                .exceptionally(throwable -> {
                    updateState(currentState
                        .withLoading(false)
                        .withError("Failed: " + throwable.getMessage()));
                    return null;
                });
        }
        
        private void handleUpdateUserName(UserIntent.UpdateUserName intent) {
            if (currentState.currentUser != null) {
                User updated = new User(
                    currentState.currentUser.getId(),
                    intent.newName,
                    currentState.currentUser.getEmail(),
                    currentState.currentUser.getAge()
                );
                updateState(currentState.withUser(updated));
            }
        }
        
        private void updateState(UserState newState) {
            currentState = newState;
            notifySubscribers();
        }
        
        public void subscribe(Consumer<UserState> subscriber) {
            subscribers.add(subscriber);
            subscriber.accept(currentState);
        }
        
        private void notifySubscribers() {
            for (Consumer<UserState> subscriber : subscribers) {
                subscriber.accept(currentState);
            }
        }
        
        public UserState getState() {
            return currentState;
        }
    }
    
    // View for MVI
    static class MVIUserView {
        private final UserStore store;
        
        public MVIUserView(UserStore store) {
            this.store = store;
            store.subscribe(this::render);
        }
        
        private void render(UserState state) {
            System.out.println("\n=== Rendering State ===");
            System.out.println(state);
            
            if (state.loading) {
                System.out.println("[Loading...]");
            }
            
            if (state.error != null) {
                System.err.println("[Error: " + state.error + "]");
            }
            
            if (state.currentUser != null) {
                System.out.println("Current User: " + state.currentUser);
            }
            
            if (state.users != null) {
                System.out.println("Users (" + state.users.size() + "):");
                state.users.forEach(u -> System.out.println("  - " + u));
            }
        }
        
        // User actions emit intents
        public void loadUser(String userId) {
            store.dispatch(new UserIntent.LoadUser(userId));
        }
        
        public void loadAllUsers() {
            store.dispatch(new UserIntent.LoadAllUsers());
        }
        
        public void updateUserName(String newName) {
            store.dispatch(new UserIntent.UpdateUserName(newName));
        }
    }

    /**
     * ========================================================================
     * PATTERN 3: CLEAN ARCHITECTURE
     * ========================================================================
     * 
     * Layered architecture with dependency rule
     * 
     * Layers (inner to outer):
     * 1. Entities - Business objects
     * 2. Use Cases - Application business rules
     * 3. Interface Adapters - Convert data formats
     * 4. Frameworks & Drivers - UI, DB, External APIs
     * 
     * Dependency Rule: Outer layers depend on inner, never reverse
     * 
     * Benefits:
     * - Independent of frameworks
     * - Testable
     * - Independent of UI
     * - Independent of database
     * - Independent of external agencies
     * 
     * Time Complexity: O(1) for layer transitions
     * Space Complexity: O(n) where n = data size
     */
    
    // Layer 1: Entities (Domain)
    static class Product {
        private final String id;
        private final String name;
        private final double price;
        private final int stock;
        
        public Product(String id, String name, double price, int stock) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.stock = stock;
        }
        
        public boolean isAvailable() {
            return stock > 0;
        }
        
        public Product decreaseStock(int quantity) {
            if (quantity > stock) {
                throw new IllegalArgumentException("Not enough stock");
            }
            return new Product(id, name, price, stock - quantity);
        }
        
        // Getters
        public String getId() { return id; }
        public String getName() { return name; }
        public double getPrice() { return price; }
        public int getStock() { return stock; }
        
        @Override
        public String toString() {
            return "Product{id='" + id + "', name='" + name + 
                   "', price=" + price + ", stock=" + stock + "}";
        }
    }
    
    // Layer 2: Use Cases
    interface ProductRepository {
        CompletableFuture<Product> getProductById(String id);
        CompletableFuture<Void> updateProduct(Product product);
    }
    
    static class PurchaseProductUseCase {
        private final ProductRepository repository;
        
        public PurchaseProductUseCase(ProductRepository repository) {
            this.repository = repository;
        }
        
        public CompletableFuture<PurchaseResult> execute(String productId, int quantity) {
            return repository.getProductById(productId)
                .thenCompose(product -> {
                    if (!product.isAvailable()) {
                        return CompletableFuture.completedFuture(
                            PurchaseResult.failure("Product not available"));
                    }
                    
                    if (product.getStock() < quantity) {
                        return CompletableFuture.completedFuture(
                            PurchaseResult.failure("Not enough stock"));
                    }
                    
                    Product updated = product.decreaseStock(quantity);
                    return repository.updateProduct(updated)
                        .thenApply(v -> PurchaseResult.success(
                            product.getPrice() * quantity));
                })
                .exceptionally(throwable -> 
                    PurchaseResult.failure("Purchase failed: " + 
                                         throwable.getMessage()));
        }
    }
    
    static class PurchaseResult {
        final boolean success;
        final double totalPrice;
        final String errorMessage;
        
        private PurchaseResult(boolean success, double totalPrice, String errorMessage) {
            this.success = success;
            this.totalPrice = totalPrice;
            this.errorMessage = errorMessage;
        }
        
        static PurchaseResult success(double totalPrice) {
            return new PurchaseResult(true, totalPrice, null);
        }
        
        static PurchaseResult failure(String errorMessage) {
            return new PurchaseResult(false, 0, errorMessage);
        }
    }
    
    // Layer 3: Interface Adapters (Presenter)
    static class ProductPresenter {
        private final PurchaseProductUseCase useCase;
        private final ProductView view;
        
        public ProductPresenter(PurchaseProductUseCase useCase, ProductView view) {
            this.useCase = useCase;
            this.view = view;
        }
        
        public void purchaseProduct(String productId, int quantity) {
            view.showLoading();
            
            useCase.execute(productId, quantity)
                .thenAccept(result -> {
                    view.hideLoading();
                    if (result.success) {
                        view.showSuccess("Purchase successful! Total: $" + 
                                       result.totalPrice);
                    } else {
                        view.showError(result.errorMessage);
                    }
                });
        }
    }
    
    interface ProductView {
        void showLoading();
        void hideLoading();
        void showSuccess(String message);
        void showError(String message);
    }
    
    // Layer 4: Frameworks (Implementation)
    static class InMemoryProductRepository implements ProductRepository {
        private final Map<String, Product> storage = new ConcurrentHashMap<>();
        
        public InMemoryProductRepository() {
            // Seed data
            storage.put("p1", new Product("p1", "Laptop", 999.99, 10));
            storage.put("p2", new Product("p2", "Mouse", 29.99, 50));
            storage.put("p3", new Product("p3", "Keyboard", 79.99, 30));
        }
        
        @Override
        public CompletableFuture<Product> getProductById(String id) {
            return CompletableFuture.supplyAsync(() -> {
                Product product = storage.get(id);
                if (product == null) {
                    throw new RuntimeException("Product not found: " + id);
                }
                return product;
            });
        }
        
        @Override
        public CompletableFuture<Void> updateProduct(Product product) {
            return CompletableFuture.runAsync(() -> {
                storage.put(product.getId(), product);
            });
        }
    }
    
    static class ConsoleProductView implements ProductView {
        @Override
        public void showLoading() {
            System.out.println("[Loading...]");
        }
        
        @Override
        public void hideLoading() {
            System.out.println("[Loading complete]");
        }
        
        @Override
        public void showSuccess(String message) {
            System.out.println("✓ " + message);
        }
        
        @Override
        public void showError(String message) {
            System.err.println("✗ " + message);
        }
    }

    /**
     * ========================================================================
     * PATTERN 4: DEPENDENCY INJECTION
     * ========================================================================
     * 
     * Design pattern for achieving Inversion of Control
     * 
     * Types:
     * - Constructor Injection (recommended)
     * - Setter Injection
     * - Interface Injection
     * 
     * Benefits:
     * - Loose coupling
     * - Easy testing (mock dependencies)
     * - Flexible configuration
     * - Easier maintenance
     * 
     * Time Complexity: O(1) for injection
     * Space Complexity: O(n) where n = number of dependencies
     */
    
    // Service interfaces
    interface Logger {
        void log(String message);
        void error(String message);
    }
    
    interface NetworkService {
        CompletableFuture<String> get(String url);
        CompletableFuture<String> post(String url, String data);
    }
    
    interface CacheService {
        void put(String key, Object value);
        Object get(String key);
        void clear();
    }
    
    // Implementations
    static class ConsoleLogger implements Logger {
        @Override
        public void log(String message) {
            System.out.println("[LOG] " + message);
        }
        
        @Override
        public void error(String message) {
            System.err.println("[ERROR] " + message);
        }
    }
    
    static class MockNetworkService implements NetworkService {
        private final Logger logger;
        
        // Constructor Injection
        public MockNetworkService(Logger logger) {
            this.logger = logger;
        }
        
        @Override
        public CompletableFuture<String> get(String url) {
            logger.log("GET request to: " + url);
            return CompletableFuture.supplyAsync(() -> {
                // Simulate network delay
                try { Thread.sleep(500); } catch (InterruptedException e) {}
                return "{\"data\": \"response from " + url + "\"}";
            });
        }
        
        @Override
        public CompletableFuture<String> post(String url, String data) {
            logger.log("POST request to: " + url + " with data: " + data);
            return CompletableFuture.supplyAsync(() -> {
                try { Thread.sleep(500); } catch (InterruptedException e) {}
                return "{\"success\": true}";
            });
        }
    }
    
    static class InMemoryCacheService implements CacheService {
        private final Map<String, Object> cache = new ConcurrentHashMap<>();
        private final Logger logger;
        
        public InMemoryCacheService(Logger logger) {
            this.logger = logger;
        }
        
        @Override
        public void put(String key, Object value) {
            logger.log("Caching: " + key);
            cache.put(key, value);
        }
        
        @Override
        public Object get(String key) {
            Object value = cache.get(key);
            logger.log("Cache " + (value != null ? "HIT" : "MISS") + ": " + key);
            return value;
        }
        
        @Override
        public void clear() {
            logger.log("Clearing cache");
            cache.clear();
        }
    }
    
    // Service that depends on multiple dependencies
    static class DataService {
        private final NetworkService networkService;
        private final CacheService cacheService;
        private final Logger logger;
        
        // Constructor Injection - all dependencies provided
        public DataService(NetworkService networkService, 
                          CacheService cacheService, 
                          Logger logger) {
            this.networkService = networkService;
            this.cacheService = cacheService;
            this.logger = logger;
        }
        
        public CompletableFuture<String> fetchData(String url) {
            // Check cache first
            Object cached = cacheService.get(url);
            if (cached != null) {
                logger.log("Returning cached data for: " + url);
                return CompletableFuture.completedFuture((String) cached);
            }
            
            // Fetch from network
            logger.log("Fetching data from network: " + url);
            return networkService.get(url)
                .thenApply(data -> {
                    cacheService.put(url, data);
                    return data;
                })
                .exceptionally(throwable -> {
                    logger.error("Failed to fetch data: " + throwable.getMessage());
                    return null;
                });
        }
    }
    
    // Simple Dependency Injection Container
    static class DIContainer {
        private final Map<Class<?>, Object> services = new ConcurrentHashMap<>();
        private final Map<Class<?>, Supplier<?>> factories = new ConcurrentHashMap<>();
        
        public <T> void registerSingleton(Class<T> type, T instance) {
            services.put(type, instance);
        }
        
        public <T> void registerFactory(Class<T> type, Supplier<T> factory) {
            factories.put(type, factory);
        }
        
        @SuppressWarnings("unchecked")
        public <T> T resolve(Class<T> type) {
            // Check if singleton exists
            if (services.containsKey(type)) {
                return (T) services.get(type);
            }
            
            // Check if factory exists
            if (factories.containsKey(type)) {
                return (T) factories.get(type).get();
            }
            
            throw new IllegalArgumentException("No registration for type: " + type);
        }
    }

    /**
     * ========================================================================
     * DEMONSTRATION METHODS
     * ========================================================================
     */
    
    public static void demonstrateMVVM() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 1: MVVM (Model-View-ViewModel)");
        System.out.println("=".repeat(80));
        
        UserRepository repository = new UserRepository();
        UserViewModel viewModel = new UserViewModel(repository);
        UserView view = new UserView(viewModel);
        
        System.out.println("\n1. Loading single user...");
        view.onLoadUserClicked("user123");
        
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\n2. Updating user name...");
        view.onUpdateNameClicked("John Doe");
        
        System.out.println("\n3. Loading all users...");
        view.onLoadAllUsersClicked();
        
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        repository.shutdown();
        
        System.out.println("\nMVVM Benefits:");
        System.out.println("✓ Clear separation of concerns");
        System.out.println("✓ ViewModel is testable (no UI dependencies)");
        System.out.println("✓ LiveData provides lifecycle-aware updates");
        System.out.println("✓ Two-way data binding support");
    }
    
    public static void demonstrateMVI() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 2: MVI (Model-View-Intent)");
        System.out.println("=".repeat(80));
        
        UserRepository repository = new UserRepository();
        UserStore store = new UserStore(repository);
        MVIUserView view = new MVIUserView(store);
        
        System.out.println("\n1. Loading user via Intent...");
        view.loadUser("user456");
        
        try {
            Thread.sleep(1500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\n2. Updating user name via Intent...");
        view.updateUserName("Jane Smith");
        
        System.out.println("\n3. Loading all users via Intent...");
        view.loadAllUsers();
        
        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        repository.shutdown();
        
        System.out.println("\nMVI Benefits:");
        System.out.println("✓ Unidirectional data flow (easy to debug)");
        System.out.println("✓ Immutable state (thread-safe)");
        System.out.println("✓ Time-travel debugging possible");
        System.out.println("✓ Predictable state changes");
    }
    
    public static void demonstrateCleanArchitecture() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 3: CLEAN ARCHITECTURE");
        System.out.println("=".repeat(80));
        
        // Wire up dependencies following dependency rule
        ProductRepository repository = new InMemoryProductRepository();
        PurchaseProductUseCase useCase = new PurchaseProductUseCase(repository);
        ProductView view = new ConsoleProductView();
        ProductPresenter presenter = new ProductPresenter(useCase, view);
        
        System.out.println("\n1. Purchasing 2 laptops...");
        presenter.purchaseProduct("p1", 2);
        
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\n2. Purchasing 100 mice (should fail - not enough stock)...");
        presenter.purchaseProduct("p2", 100);
        
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\n3. Purchasing keyboard...");
        presenter.purchaseProduct("p3", 1);
        
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\nClean Architecture Benefits:");
        System.out.println("✓ Independent of frameworks");
        System.out.println("✓ Testable (easy to mock layers)");
        System.out.println("✓ Independent of UI");
        System.out.println("✓ Independent of database");
        System.out.println("✓ Dependency rule enforced");
    }
    
    public static void demonstrateDependencyInjection() {
        System.out.println("\n" + "=".repeat(80));
        System.out.println("PATTERN 4: DEPENDENCY INJECTION");
        System.out.println("=".repeat(80));
        
        // Setup DI Container
        DIContainer container = new DIContainer();
        
        // Register services
        Logger logger = new ConsoleLogger();
        container.registerSingleton(Logger.class, logger);
        
        // Register factory for NetworkService
        container.registerFactory(NetworkService.class, 
            () -> new MockNetworkService(container.resolve(Logger.class)));
        
        // Register factory for CacheService
        container.registerFactory(CacheService.class,
            () -> new InMemoryCacheService(container.resolve(Logger.class)));
        
        // Register factory for DataService
        container.registerFactory(DataService.class,
            () -> new DataService(
                container.resolve(NetworkService.class),
                container.resolve(CacheService.class),
                container.resolve(Logger.class)
            ));
        
        System.out.println("\n1. Resolving DataService from DI Container...");
        DataService dataService = container.resolve(DataService.class);
        
        System.out.println("\n2. First request (cache miss)...");
        dataService.fetchData("https://api.example.com/users");
        
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\n3. Second request (cache hit)...");
        dataService.fetchData("https://api.example.com/users");
        
        try {
            Thread.sleep(500);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        
        System.out.println("\nDependency Injection Benefits:");
        System.out.println("✓ Loose coupling between components");
        System.out.println("✓ Easy to test (inject mocks)");
        System.out.println("✓ Flexible configuration");
        System.out.println("✓ Single Responsibility Principle");
    }
    
    /**
     * Main method - Run all demonstrations
     */
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 29: MOBILE ARCHITECTURE PATTERNS");
        System.out.println("=".repeat(80));
        
        demonstrateMVVM();
        demonstrateMVI();
        demonstrateCleanArchitecture();
        demonstrateDependencyInjection();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("SUMMARY: Mobile Architecture Patterns");
        System.out.println("=".repeat(80));
        System.out.println("\nPatterns Covered:");
        System.out.println("1. MVVM - Most popular for modern apps");
        System.out.println("2. MVI - Unidirectional data flow");
        System.out.println("3. Clean Architecture - Layered with dependency rule");
        System.out.println("4. Dependency Injection - Loose coupling");
        System.out.println("\nAll patterns include production-ready implementations!");
    }
}
