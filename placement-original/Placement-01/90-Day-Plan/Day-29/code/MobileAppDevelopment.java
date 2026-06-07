/**
 * DAY 29: MOBILE & CROSS-PLATFORM DEVELOPMENT - COMPREHENSIVE GUIDE
 * 
 * Topics Covered:
 * 1. Android Development Fundamentals
 * 2. iOS Development Patterns
 * 3. React Native Cross-Platform
 * 4. Flutter Development
 * 5. Mobile Architecture Patterns (MVVM, MVI, Clean Architecture)
 * 6. Mobile State Management
 * 7. Mobile Networking & Caching
 * 8. Mobile Security Best Practices
 * 9. Mobile Performance Optimization
 * 10. Mobile Testing Strategies
 * 
 * This file demonstrates mobile development concepts using Java/pseudo-code
 * to illustrate patterns applicable across platforms.
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.io.*;

public class MobileAppDevelopment {

    /**
     * ========================================================================
     * PATTERN 1: MVVM (Model-View-ViewModel) ARCHITECTURE
     * ========================================================================
     * 
     * MVVM separates UI logic from business logic for better testability
     * and maintainability.
     * 
     * Components:
     * - Model: Data and business logic
     * - View: UI components (Activity/Fragment/Composable)
     * - ViewModel: Mediator between View and Model, holds UI state
     * 
     * Benefits:
     * - Testable business logic
     * - Survives configuration changes
     * - Clear separation of concerns
     * 
     * Use Cases:
     * - Android Jetpack (LiveData, StateFlow)
     * - iOS (Combine framework)
     * - React Native (MobX, Redux)
     */
    
    // Model: User data entity
    static class User {
        private String id;
        private String name;
        private String email;
        private String avatarUrl;
        private long lastUpdated;
        
        public User(String id, String name, String email) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.lastUpdated = System.currentTimeMillis();
        }
        
        // Getters and setters
        public String getId() { return id; }
        public String getName() { return name; }
        public String getEmail() { return email; }
        public String getAvatarUrl() { return avatarUrl; }
        public void setAvatarUrl(String url) { this.avatarUrl = url; }
    }
    
    // Repository: Data source abstraction
    static class UserRepository {
        private final Map<String, User> localCache = new ConcurrentHashMap<>();
        private final ExecutorService executor = Executors.newCachedThreadPool();
        
        // Simulate network fetch
        public CompletableFuture<User> fetchUser(String userId) {
            return CompletableFuture.supplyAsync(() -> {
                // Check cache first
                User cached = localCache.get(userId);
                if (cached != null && !isCacheExpired(cached)) {
                    System.out.println("Returning cached user: " + userId);
                    return cached;
                }
                
                // Simulate network delay
                try {
                    Thread.sleep(500);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                // Simulate network response
                User user = new User(userId, "User " + userId, userId + "@example.com");
                user.setAvatarUrl("https://api.example.com/avatar/" + userId);
                
                // Cache the result
                localCache.put(userId, user);
                System.out.println("Fetched user from network: " + userId);
                return user;
            }, executor);
        }
        
        public CompletableFuture<List<User>> fetchUsers(List<String> userIds) {
            List<CompletableFuture<User>> futures = new ArrayList<>();
            for (String id : userIds) {
                futures.add(fetchUser(id));
            }
            
            return CompletableFuture.allOf(futures.toArray(new CompletableFuture[0]))
                .thenApply(v -> futures.stream()
                    .map(CompletableFuture::join)
                    .collect(java.util.stream.Collectors.toList()));
        }
        
        private boolean isCacheExpired(User user) {
            long cacheValidityMs = 5 * 60 * 1000; // 5 minutes
            return System.currentTimeMillis() - user.lastUpdated > cacheValidityMs;
        }
        
        public void shutdown() {
            executor.shutdown();
        }
    }
    
    // ViewModel: UI state holder and business logic
    static class UserViewModel {
        // In real Android, this would be LiveData or StateFlow
        // Here we use simple observable pattern
        
        private final UserRepository repository;
        private final List<Observer<UIState>> observers = new ArrayList<>();
        private UIState currentState = new UIState.Loading();
        
        public UserViewModel(UserRepository repository) {
            this.repository = repository;
        }
        
        // UI State sealed class pattern
        interface UIState {
            class Loading implements UIState {
                @Override
                public String toString() { return "Loading..."; }
            }
            
            class Success implements UIState {
                public final User user;
                public Success(User user) { this.user = user; }
                
                @Override
                public String toString() {
                    return "Success: " + user.getName();
                }
            }
            
            class Error implements UIState {
                public final String message;
                public Error(String message) { this.message = message; }
                
                @Override
                public String toString() {
                    return "Error: " + message;
                }
            }
        }
        
        // Observer pattern for state updates
        interface Observer<T> {
            void onChanged(T value);
        }
        
        public void observe(Observer<UIState> observer) {
            observers.add(observer);
            observer.onChanged(currentState); // Emit current state
        }
        
        private void setState(UIState newState) {
            this.currentState = newState;
            for (Observer<UIState> observer : observers) {
                observer.onChanged(newState);
            }
        }
        
        // Public API for View to call
        public void loadUser(String userId) {
            setState(new UIState.Loading());
            
            repository.fetchUser(userId)
                .thenAccept(user -> setState(new UIState.Success(user)))
                .exceptionally(error -> {
                    setState(new UIState.Error(error.getMessage()));
                    return null;
                });
        }
        
        public void refreshUser(String userId) {
            // Force refresh by clearing cache
            repository.localCache.remove(userId);
            loadUser(userId);
        }
    }
    
    /**
     * MVVM DEMONSTRATION
     * 
     * Time Complexity: O(1) for state updates, O(n) for network fetch
     * Space Complexity: O(n) for cached users
     * 
     * Key Benefits:
     * 1. Testable ViewModel (no Android dependencies)
     * 2. Reactive UI updates
     * 3. Survives configuration changes
     * 4. Clear separation of concerns
     */
    static void demonstrateMVVM() {
        System.out.println("\n=== MVVM Architecture Pattern ===\n");
        
        UserRepository repository = new UserRepository();
        UserViewModel viewModel = new UserViewModel(repository);
        
        // View observes ViewModel state
        viewModel.observe(state -> {
            System.out.println("UI State Changed: " + state);
            
            if (state instanceof UserViewModel.UIState.Success) {
                User user = ((UserViewModel.UIState.Success) state).user;
                System.out.println("  Name: " + user.getName());
                System.out.println("  Email: " + user.getEmail());
                System.out.println("  Avatar: " + user.getAvatarUrl());
            }
        });
        
        // User interaction: Load user
        System.out.println("Action: Loading user...");
        viewModel.loadUser("user123");
        
        // Wait for async operation
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        
        // User interaction: Refresh
        System.out.println("\nAction: Refreshing user...");
        viewModel.refreshUser("user123");
        
        try { Thread.sleep(1000); } catch (InterruptedException e) {}
        
        repository.shutdown();
        
        System.out.println("\n✓ MVVM Benefits:");
        System.out.println("  - Testable business logic");
        System.out.println("  - Reactive UI updates");
        System.out.println("  - Survives config changes");
        System.out.println("  - Clean separation");
    }
    
    /**
     * ========================================================================
     * PATTERN 2: MVI (Model-View-Intent) ARCHITECTURE
     * ========================================================================
     * 
     * MVI is a unidirectional data flow architecture inspired by Redux.
     * 
     * Components:
     * - Model: Immutable state
     * - View: Renders state and emits intents
     * - Intent: User actions/events
     * 
     * Flow: Intent → Reducer → New State → View
     * 
     * Benefits:
     * - Predictable state changes
     * - Time-travel debugging
     * - Easy to test
     * - Thread-safe (immutable state)
     * 
     * Use Cases:
     * - Complex UI with many interactions
     * - Apps requiring state history
     * - Collaborative features
     */
    
    // State: Immutable app state
    static class TodoState {
        public final List<TodoItem> todos;
        public final boolean isLoading;
        public final String error;
        
        public TodoState(List<TodoItem> todos, boolean isLoading, String error) {
            this.todos = new ArrayList<>(todos); // Defensive copy
            this.isLoading = isLoading;
            this.error = error;
        }
        
        // Initial state factory
        public static TodoState initial() {
            return new TodoState(new ArrayList<>(), false, null);
        }
        
        // Copy with modifications (builder pattern)
        public TodoState withLoading(boolean loading) {
            return new TodoState(this.todos, loading, this.error);
        }
        
        public TodoState withTodos(List<TodoItem> todos) {
            return new TodoState(todos, this.isLoading, this.error);
        }
        
        public TodoState withError(String error) {
            return new TodoState(this.todos, false, error);
        }
    }
    
    static class TodoItem {
        public final String id;
        public final String title;
        public final boolean completed;
        
        public TodoItem(String id, String title, boolean completed) {
            this.id = id;
            this.title = title;
            this.completed = completed;
        }
        
        public TodoItem toggleCompleted() {
            return new TodoItem(this.id, this.title, !this.completed);
        }
    }
    
    // Intent: User actions
    interface TodoIntent {
        class LoadTodos implements TodoIntent {}
        
        class AddTodo implements TodoIntent {
            public final String title;
            public AddTodo(String title) { this.title = title; }
        }
        
        class ToggleTodo implements TodoIntent {
            public final String id;
            public ToggleTodo(String id) { this.id = id; }
        }
        
        class DeleteTodo implements TodoIntent {
            public final String id;
            public DeleteTodo(String id) { this.id = id; }
        }
    }
    
    // Reducer: Pure function (State, Intent) → New State
    static class TodoReducer {
        private final TodoRepository todoRepository;
        
        public TodoReducer(TodoRepository repository) {
            this.todoRepository = repository;
        }
        
        public CompletableFuture<TodoState> reduce(TodoState currentState, TodoIntent intent) {
            if (intent instanceof TodoIntent.LoadTodos) {
                return handleLoadTodos(currentState);
            } else if (intent instanceof TodoIntent.AddTodo) {
                return handleAddTodo(currentState, (TodoIntent.AddTodo) intent);
            } else if (intent instanceof TodoIntent.ToggleTodo) {
                return handleToggleTodo(currentState, (TodoIntent.ToggleTodo) intent);
            } else if (intent instanceof TodoIntent.DeleteTodo) {
                return handleDeleteTodo(currentState, (TodoIntent.DeleteTodo) intent);
            }
            
            return CompletableFuture.completedFuture(currentState);
        }
        
        private CompletableFuture<TodoState> handleLoadTodos(TodoState state) {
            TodoState loadingState = state.withLoading(true);
            
            return todoRepository.fetchTodos()
                .thenApply(todos -> new TodoState(todos, false, null))
                .exceptionally(error -> state.withError(error.getMessage()));
        }
        
        private CompletableFuture<TodoState> handleAddTodo(TodoState state, TodoIntent.AddTodo intent) {
            String id = "todo_" + System.currentTimeMillis();
            TodoItem newTodo = new TodoItem(id, intent.title, false);
            
            return todoRepository.addTodo(newTodo)
                .thenApply(success -> {
                    List<TodoItem> updatedTodos = new ArrayList<>(state.todos);
                    updatedTodos.add(newTodo);
                    return state.withTodos(updatedTodos);
                })
                .exceptionally(error -> state.withError(error.getMessage()));
        }
        
        private CompletableFuture<TodoState> handleToggleTodo(TodoState state, TodoIntent.ToggleTodo intent) {
            List<TodoItem> updatedTodos = new ArrayList<>();
            for (TodoItem todo : state.todos) {
                if (todo.id.equals(intent.id)) {
                    updatedTodos.add(todo.toggleCompleted());
                } else {
                    updatedTodos.add(todo);
                }
            }
            
            return CompletableFuture.completedFuture(state.withTodos(updatedTodos));
        }
        
        private CompletableFuture<TodoState> handleDeleteTodo(TodoState state, TodoIntent.DeleteTodo intent) {
            List<TodoItem> updatedTodos = state.todos.stream()
                .filter(todo -> !todo.id.equals(intent.id))
                .collect(java.util.stream.Collectors.toList());
            
            return CompletableFuture.completedFuture(state.withTodos(updatedTodos));
        }
    }
    
    static class TodoRepository {
        private final List<TodoItem> storage = new ArrayList<>();
        
        public CompletableFuture<List<TodoItem>> fetchTodos() {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    Thread.sleep(300); // Simulate network
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                return new ArrayList<>(storage);
            });
        }
        
        public CompletableFuture<Boolean> addTodo(TodoItem todo) {
            return CompletableFuture.supplyAsync(() -> {
                storage.add(todo);
                return true;
            });
        }
    }
    
    // Store: Manages state and processes intents
    static class TodoStore {
        private TodoState currentState = TodoState.initial();
        private final TodoReducer reducer;
        private final List<Consumer<TodoState>> subscribers = new ArrayList<>();
        
        public TodoStore(TodoReducer reducer) {
            this.reducer = reducer;
        }
        
        public void subscribe(Consumer<TodoState> subscriber) {
            subscribers.add(subscriber);
            subscriber.accept(currentState); // Emit current state
        }
        
        public void dispatch(TodoIntent intent) {
            System.out.println("Intent: " + intent.getClass().getSimpleName());
            
            reducer.reduce(currentState, intent)
                .thenAccept(newState -> {
                    currentState = newState;
                    notifySubscribers();
                });
        }
        
        private void notifySubscribers() {
            for (Consumer<TodoState> subscriber : subscribers) {
                subscriber.accept(currentState);
            }
        }
        
        public TodoState getCurrentState() {
            return currentState;
        }
    }
    
    /**
     * MVI DEMONSTRATION
     * 
     * Time Complexity: O(1) for dispatching, O(n) for state updates
     * Space Complexity: O(n) for state storage
     * 
     * Key Benefits:
     * 1. Unidirectional data flow
     * 2. Predictable state changes
     * 3. Time-travel debugging possible
     * 4. Thread-safe (immutable state)
     */
    static void demonstrateMVI() {
        System.out.println("\n=== MVI Architecture Pattern ===\n");
        
        TodoRepository repository = new TodoRepository();
        TodoReducer reducer = new TodoReducer(repository);
        TodoStore store = new TodoStore(reducer);
        
        // View subscribes to state changes
        store.subscribe(state -> {
            System.out.println("State Updated:");
            System.out.println("  Loading: " + state.isLoading);
            System.out.println("  Todos: " + state.todos.size());
            if (state.error != null) {
                System.out.println("  Error: " + state.error);
            }
            for (TodoItem todo : state.todos) {
                System.out.println("    - " + todo.title + 
                    (todo.completed ? " ✓" : ""));
            }
            System.out.println();
        });
        
        // User interactions (View emits intents)
        store.dispatch(new TodoIntent.AddTodo("Learn MVI architecture"));
        try { Thread.sleep(200); } catch (InterruptedException e) {}
        
        store.dispatch(new TodoIntent.AddTodo("Build mobile app"));
        try { Thread.sleep(200); } catch (InterruptedException e) {}
        
        store.dispatch(new TodoIntent.AddTodo("Master React Native"));
        try { Thread.sleep(200); } catch (InterruptedException e) {}
        
        // Toggle completion
        TodoState state = store.getCurrentState();
        if (!state.todos.isEmpty()) {
            store.dispatch(new TodoIntent.ToggleTodo(state.todos.get(0).id));
            try { Thread.sleep(200); } catch (InterruptedException e) {}
        }
        
        System.out.println("✓ MVI Benefits:");
        System.out.println("  - Unidirectional data flow");
        System.out.println("  - Predictable state changes");
        System.out.println("  - Easy debugging");
        System.out.println("  - Thread-safe");
    }
    
    /**
     * ========================================================================
     * PATTERN 3: CLEAN ARCHITECTURE FOR MOBILE
     * ========================================================================
     * 
     * Clean Architecture organizes code into layers with dependency rules.
     * 
     * Layers (from inside out):
     * 1. Domain: Business logic, entities, use cases (no dependencies)
     * 2. Data: Repositories, data sources, mappers
     * 3. Presentation: UI, ViewModels, presenters
     * 
     * Dependency Rule: Inner layers don't know about outer layers
     * 
     * Benefits:
     * - Highly testable
     * - Framework independent
     * - Scalable
     * - Maintainable
     * 
     * Use Cases:
     * - Large enterprise apps
     * - Multi-platform projects
     * - Long-term maintenance projects
     */
    
    // DOMAIN LAYER (innermost - no dependencies)
    
    // Entity: Core business object
    static class Product {
        public final String id;
        public final String name;
        public final double price;
        public final int quantity;
        
        public Product(String id, String name, double price, int quantity) {
            this.id = id;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
        
        // Business logic
        public boolean isInStock() {
            return quantity > 0;
        }
        
        public double getTotalValue() {
            return price * quantity;
        }
    }
    
    // Repository Interface (domain defines, data implements)
    interface ProductRepository {
        CompletableFuture<List<Product>> getProducts();
        CompletableFuture<Product> getProductById(String id);
        CompletableFuture<Boolean> updateProduct(Product product);
    }
    
    // Use Case: Encapsulates business logic
    static class GetProductsUseCase {
        private final ProductRepository repository;
        
        public GetProductsUseCase(ProductRepository repository) {
            this.repository = repository;
        }
        
        public CompletableFuture<List<Product>> execute(boolean onlyInStock) {
            return repository.getProducts()
                .thenApply(products -> {
                    if (onlyInStock) {
                        return products.stream()
                            .filter(Product::isInStock)
                            .collect(java.util.stream.Collectors.toList());
                    }
                    return products;
                });
        }
    }
    
    static class UpdateProductQuantityUseCase {
        private final ProductRepository repository;
        
        public UpdateProductQuantityUseCase(ProductRepository repository) {
            this.repository = repository;
        }
        
        public CompletableFuture<Boolean> execute(String productId, int newQuantity) {
            return repository.getProductById(productId)
                .thenCompose(product -> {
                    if (product == null) {
                        return CompletableFuture.completedFuture(false);
                    }
                    
                    Product updated = new Product(
                        product.id,
                        product.name,
                        product.price,
                        newQuantity
                    );
                    
                    return repository.updateProduct(updated);
                });
        }
    }
    
    // DATA LAYER
    
    // Data Transfer Object (DTO) for API
    static class ProductDTO {
        public String id;
        public String name;
        public double price;
        public int stock;
        
        // Mapper: DTO → Domain Entity
        public Product toDomain() {
            return new Product(id, name, price, stock);
        }
        
        // Mapper: Domain Entity → DTO
        public static ProductDTO fromDomain(Product product) {
            ProductDTO dto = new ProductDTO();
            dto.id = product.id;
            dto.name = product.name;
            dto.price = product.price;
            dto.stock = product.quantity;
            return dto;
        }
    }
    
    // Data Source: Remote API
    static class RemoteProductDataSource {
        public CompletableFuture<List<ProductDTO>> fetchProducts() {
            return CompletableFuture.supplyAsync(() -> {
                // Simulate API call
                try {
                    Thread.sleep(400);
                } catch (InterruptedException e) {
                    Thread.currentThread().interrupt();
                }
                
                List<ProductDTO> products = new ArrayList<>();
                
                ProductDTO p1 = new ProductDTO();
                p1.id = "p1"; p1.name = "Laptop"; p1.price = 999.99; p1.stock = 5;
                products.add(p1);
                
                ProductDTO p2 = new ProductDTO();
                p2.id = "p2"; p2.name = "Mouse"; p2.price = 29.99; p2.stock = 0;
                products.add(p2);
                
                ProductDTO p3 = new ProductDTO();
                p3.id = "p3"; p3.name = "Keyboard"; p3.price = 79.99; p3.stock = 3;
                products.add(p3);
                
                return products;
            });
        }
    }
    
    // Data Source: Local cache/database
    static class LocalProductDataSource {
        private final Map<String, ProductDTO> cache = new ConcurrentHashMap<>();
        
        public void saveProducts(List<ProductDTO> products) {
            for (ProductDTO product : products) {
                cache.put(product.id, product);
            }
        }
        
        public List<ProductDTO> getProducts() {
            return new ArrayList<>(cache.values());
        }
        
        public ProductDTO getProductById(String id) {
            return cache.get(id);
        }
        
        public void updateProduct(ProductDTO product) {
            cache.put(product.id, product);
        }
    }
    
    // Repository Implementation (implements domain interface)
    static class ProductRepositoryImpl implements ProductRepository {
        private final RemoteProductDataSource remoteDataSource;
        private final LocalProductDataSource localDataSource;
        
        public ProductRepositoryImpl(
            RemoteProductDataSource remoteDataSource,
            LocalProductDataSource localDataSource) {
            this.remoteDataSource = remoteDataSource;
            this.localDataSource = localDataSource;
        }
        
        @Override
        public CompletableFuture<List<Product>> getProducts() {
            // Try local first, then remote
            List<ProductDTO> local = localDataSource.getProducts();
            if (!local.isEmpty()) {
                System.out.println("Loading from cache...");
                return CompletableFuture.completedFuture(
                    local.stream()
                        .map(ProductDTO::toDomain)
                        .collect(java.util.stream.Collectors.toList())
                );
            }
            
            // Fetch from remote and cache
            System.out.println("Loading from API...");
            return remoteDataSource.fetchProducts()
                .thenApply(dtos -> {
                    localDataSource.saveProducts(dtos);
                    return dtos.stream()
                        .map(ProductDTO::toDomain)
                        .collect(java.util.stream.Collectors.toList());
                });
        }
        
        @Override
        public CompletableFuture<Product> getProductById(String id) {
            return CompletableFuture.supplyAsync(() -> {
                ProductDTO dto = localDataSource.getProductById(id);
                return dto != null ? dto.toDomain() : null;
            });
        }
        
        @Override
        public CompletableFuture<Boolean> updateProduct(Product product) {
            return CompletableFuture.supplyAsync(() -> {
                ProductDTO dto = ProductDTO.fromDomain(product);
                localDataSource.updateProduct(dto);
                // In real app, also sync to remote
                return true;
            });
        }
    }
    
    // PRESENTATION LAYER
    
    static class ProductViewModel {
        private final GetProductsUseCase getProductsUseCase;
        private final UpdateProductQuantityUseCase updateQuantityUseCase;
        
        public ProductViewModel(
            GetProductsUseCase getProductsUseCase,
            UpdateProductQuantityUseCase updateQuantityUseCase) {
            this.getProductsUseCase = getProductsUseCase;
            this.updateQuantityUseCase = updateQuantityUseCase;
        }
        
        public void loadProducts(boolean onlyInStock, Consumer<List<Product>> onSuccess) {
            getProductsUseCase.execute(onlyInStock)
                .thenAccept(onSuccess);
        }
        
        public void updateQuantity(String productId, int newQuantity, Consumer<Boolean> onResult) {
            updateQuantityUseCase.execute(productId, newQuantity)
                .thenAccept(onResult);
        }
    }
    
    /**
     * CLEAN ARCHITECTURE DEMONSTRATION
     * 
     * Time Complexity: O(n) for fetching products
     * Space Complexity: O(n) for caching
     * 
     * Key Benefits:
     * 1. Testable at every layer
     * 2. Framework independent
     * 3. Scalable architecture
     * 4. Clear separation of concerns
     */
    static void demonstrateCleanArchitecture() {
        System.out.println("\n=== Clean Architecture Pattern ===\n");
        
        // Dependency injection (outer → inner)
        RemoteProductDataSource remoteDataSource = new RemoteProductDataSource();
        LocalProductDataSource localDataSource = new LocalProductDataSource();
        ProductRepository repository = new ProductRepositoryImpl(remoteDataSource, localDataSource);
        
        GetProductsUseCase getProductsUseCase = new GetProductsUseCase(repository);
        UpdateProductQuantityUseCase updateQuantityUseCase = 
            new UpdateProductQuantityUseCase(repository);
        
        ProductViewModel viewModel = new ProductViewModel(getProductsUseCase, updateQuantityUseCase);
        
        // Load all products
        System.out.println("Loading all products...");
        viewModel.loadProducts(false, products -> {
            System.out.println("Loaded " + products.size() + " products:");
            for (Product p : products) {
                System.out.println("  - " + p.name + ": $" + p.price + 
                    " (Qty: " + p.quantity + ")");
            }
        });
        
        try { Thread.sleep(600); } catch (InterruptedException e) {}
        
        // Load only in-stock products
        System.out.println("\nLoading in-stock products...");
        viewModel.loadProducts(true, products -> {
            System.out.println("In-stock products: " + products.size());
            for (Product p : products) {
                System.out.println("  - " + p.name + " (" + p.quantity + " available)");
            }
        });
        
        try { Thread.sleep(200); } catch (InterruptedException e) {}
        
        // Update quantity
        System.out.println("\nUpdating product quantity...");
        viewModel.updateQuantity("p2", 10, success -> {
            System.out.println("Update " + (success ? "successful" : "failed"));
        });
        
        try { Thread.sleep(200); } catch (InterruptedException e) {}
        
        // Verify update
        viewModel.loadProducts(true, products -> {
            System.out.println("\nAfter update, in-stock products: " + products.size());
        });
        
        try { Thread.sleep(200); } catch (InterruptedException e) {}
        
        System.out.println("\n✓ Clean Architecture Benefits:");
        System.out.println("  - Domain layer has zero dependencies");
        System.out.println("  - Business logic is testable");
        System.out.println("  - Framework can be swapped");
        System.out.println("  - Clear layer boundaries");
    }
    
    /**
     * ========================================================================
     * MAIN METHOD - RUN ALL DEMONSTRATIONS
     * ========================================================================
     */
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 29: MOBILE & CROSS-PLATFORM DEVELOPMENT");
        System.out.println("=".repeat(80));
        
        // Pattern 1: MVVM
        demonstrateMVVM();
        
        // Pattern 2: MVI
        demonstrateMVI();
        
        // Pattern 3: Clean Architecture
        demonstrateCleanArchitecture();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("All mobile architecture patterns demonstrated successfully!");
        System.out.println("=".repeat(80));
    }
}
