/**
 * DAY 29: MOBILE STATE MANAGEMENT & NAVIGATION - COMPREHENSIVE GUIDE
 * 
 * Topics Covered:
 * 1. State Management Patterns (Redux, BLoC, Provider)
 * 2. Navigation Patterns (Stack, Tab, Drawer)
 * 3. Deep Linking & Universal Links
 * 4. Screen State Persistence
 * 5. Reactive Programming (RxJava, Kotlin Flow)
 * 6. Memory Management
 * 7. Configuration Changes
 * 8. Background Tasks
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.stream.*;

public class MobileStateManagement {

    /**
     * ========================================================================
     * PATTERN 1: REDUX-STYLE STATE MANAGEMENT
     * ========================================================================
     * 
     * Redux Pattern:
     * - Single source of truth (global state)
     * - State is read-only
     * - Changes via pure functions (reducers)
     * 
     * Flow: Action → Reducer → New State → UI Update
     * 
     * Benefits:
     * - Predictable state updates
     * - Time-travel debugging
     * - Easy testing
     * - Middleware support
     * 
     * Use Cases:
     * - Complex app state
     * - Cross-screen state sharing
     * - State persistence
     */
    
    // App State (immutable)
    static class AppState {
        public final AuthState auth;
        public final CartState cart;
        public final UIState ui;
        
        public AppState(AuthState auth, CartState cart, UIState ui) {
            this.auth = auth;
            this.cart = cart;
            this.ui = ui;
        }
        
        public static AppState initial() {
            return new AppState(
                AuthState.initial(),
                CartState.initial(),
                UIState.initial()
            );
        }
        
        public AppState withAuth(AuthState auth) {
            return new AppState(auth, this.cart, this.ui);
        }
        
        public AppState withCart(CartState cart) {
            return new AppState(this.auth, cart, this.ui);
        }
        
        public AppState withUI(UIState ui) {
            return new AppState(this.auth, this.cart, ui);
        }
    }
    
    static class AuthState {
        public final boolean isAuthenticated;
        public final String userId;
        public final String token;
        
        public AuthState(boolean isAuthenticated, String userId, String token) {
            this.isAuthenticated = isAuthenticated;
            this.userId = userId;
            this.token = token;
        }
        
        public static AuthState initial() {
            return new AuthState(false, null, null);
        }
    }
    
    static class CartState {
        public final List<CartItem> items;
        public final double total;
        
        public CartState(List<CartItem> items, double total) {
            this.items = new ArrayList<>(items);
            this.total = total;
        }
        
        public static CartState initial() {
            return new CartState(new ArrayList<>(), 0.0);
        }
        
        public CartState addItem(CartItem item) {
            List<CartItem> newItems = new ArrayList<>(this.items);
            
            // Check if item already exists
            boolean found = false;
            for (int i = 0; i < newItems.size(); i++) {
                CartItem existing = newItems.get(i);
                if (existing.productId.equals(item.productId)) {
                    newItems.set(i, existing.increaseQuantity(item.quantity));
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                newItems.add(item);
            }
            
            double newTotal = newItems.stream()
                .mapToDouble(CartItem::getSubtotal)
                .sum();
            
            return new CartState(newItems, newTotal);
        }
        
        public CartState removeItem(String productId) {
            List<CartItem> newItems = this.items.stream()
                .filter(item -> !item.productId.equals(productId))
                .collect(Collectors.toList());
            
            double newTotal = newItems.stream()
                .mapToDouble(CartItem::getSubtotal)
                .sum();
            
            return new CartState(newItems, newTotal);
        }
        
        public CartState clear() {
            return new CartState(new ArrayList<>(), 0.0);
        }
    }
    
    static class CartItem {
        public final String productId;
        public final String name;
        public final double price;
        public final int quantity;
        
        public CartItem(String productId, String name, double price, int quantity) {
            this.productId = productId;
            this.name = name;
            this.price = price;
            this.quantity = quantity;
        }
        
        public double getSubtotal() {
            return price * quantity;
        }
        
        public CartItem increaseQuantity(int amount) {
            return new CartItem(productId, name, price, quantity + amount);
        }
    }
    
    static class UIState {
        public final boolean isLoading;
        public final String currentScreen;
        public final Map<String, Object> screenData;
        
        public UIState(boolean isLoading, String currentScreen, Map<String, Object> screenData) {
            this.isLoading = isLoading;
            this.currentScreen = currentScreen;
            this.screenData = new HashMap<>(screenData);
        }
        
        public static UIState initial() {
            return new UIState(false, "home", new HashMap<>());
        }
    }
    
    // Actions
    interface Action {
        // Auth actions
        class Login implements Action {
            public final String userId;
            public final String token;
            public Login(String userId, String token) {
                this.userId = userId;
                this.token = token;
            }
        }
        
        class Logout implements Action {}
        
        // Cart actions
        class AddToCart implements Action {
            public final CartItem item;
            public AddToCart(CartItem item) { this.item = item; }
        }
        
        class RemoveFromCart implements Action {
            public final String productId;
            public RemoveFromCart(String productId) { this.productId = productId; }
        }
        
        class ClearCart implements Action {}
        
        // UI actions
        class SetLoading implements Action {
            public final boolean loading;
            public SetLoading(boolean loading) { this.loading = loading; }
        }
        
        class Navigate implements Action {
            public final String screen;
            public Navigate(String screen) { this.screen = screen; }
        }
    }
    
    // Reducer (pure function)
    static class AppReducer {
        public AppState reduce(AppState state, Action action) {
            if (action instanceof Action.Login) {
                Action.Login login = (Action.Login) action;
                AuthState newAuth = new AuthState(true, login.userId, login.token);
                return state.withAuth(newAuth);
            }
            
            if (action instanceof Action.Logout) {
                return state.withAuth(AuthState.initial())
                           .withCart(CartState.initial());
            }
            
            if (action instanceof Action.AddToCart) {
                Action.AddToCart add = (Action.AddToCart) action;
                CartState newCart = state.cart.addItem(add.item);
                return state.withCart(newCart);
            }
            
            if (action instanceof Action.RemoveFromCart) {
                Action.RemoveFromCart remove = (Action.RemoveFromCart) action;
                CartState newCart = state.cart.removeItem(remove.productId);
                return state.withCart(newCart);
            }
            
            if (action instanceof Action.ClearCart) {
                return state.withCart(CartState.initial());
            }
            
            if (action instanceof Action.SetLoading) {
                Action.SetLoading setLoading = (Action.SetLoading) action;
                UIState newUI = new UIState(setLoading.loading, state.ui.currentScreen, state.ui.screenData);
                return state.withUI(newUI);
            }
            
            if (action instanceof Action.Navigate) {
                Action.Navigate nav = (Action.Navigate) action;
                UIState newUI = new UIState(state.ui.isLoading, nav.screen, state.ui.screenData);
                return state.withUI(newUI);
            }
            
            return state;
        }
    }
    
    // Store (manages state and subscriptions)
    static class Store {
        private AppState currentState;
        private final AppReducer reducer;
        private final List<Consumer<AppState>> subscribers = new ArrayList<>();
        private final List<Middleware> middlewares = new ArrayList<>();
        
        public Store(AppReducer reducer) {
            this.reducer = reducer;
            this.currentState = AppState.initial();
        }
        
        public void addMiddleware(Middleware middleware) {
            middlewares.add(middleware);
        }
        
        public void subscribe(Consumer<AppState> subscriber) {
            subscribers.add(subscriber);
            subscriber.accept(currentState);
        }
        
        public void dispatch(Action action) {
            // Run middlewares
            for (Middleware middleware : middlewares) {
                middleware.process(currentState, action, this);
            }
            
            // Reduce state
            AppState newState = reducer.reduce(currentState, action);
            
            if (newState != currentState) {
                currentState = newState;
                notifySubscribers();
            }
        }
        
        private void notifySubscribers() {
            for (Consumer<AppState> subscriber : subscribers) {
                subscriber.accept(currentState);
            }
        }
        
        public AppState getState() {
            return currentState;
        }
    }
    
    // Middleware (intercepts actions)
    interface Middleware {
        void process(AppState state, Action action, Store store);
    }
    
    // Logger Middleware
    static class LoggerMiddleware implements Middleware {
        @Override
        public void process(AppState state, Action action, Store store) {
            System.out.println("Action: " + action.getClass().getSimpleName());
        }
    }
    
    // Persistence Middleware
    static class PersistenceMiddleware implements Middleware {
        @Override
        public void process(AppState state, Action action, Store store) {
            if (action instanceof Action.Login || action instanceof Action.Logout) {
                // Simulate saving to SharedPreferences/UserDefaults
                System.out.println("Persisting auth state...");
            }
        }
    }
    
    /**
     * REDUX DEMONSTRATION
     * 
     * Time Complexity: O(1) for dispatch, O(n) for state updates
     * Space Complexity: O(n) for state storage
     */
    static void demonstrateRedux() {
        System.out.println("\n=== Redux State Management ===\n");
        
        Store store = new Store(new AppReducer());
        store.addMiddleware(new LoggerMiddleware());
        store.addMiddleware(new PersistenceMiddleware());
        
        // Subscribe to state changes
        store.subscribe(state -> {
            System.out.println("State Updated:");
            System.out.println("  Authenticated: " + state.auth.isAuthenticated);
            if (state.auth.isAuthenticated) {
                System.out.println("  User ID: " + state.auth.userId);
            }
            System.out.println("  Cart Items: " + state.cart.items.size());
            System.out.println("  Cart Total: $" + String.format("%.2f", state.cart.total));
            System.out.println("  Current Screen: " + state.ui.currentScreen);
            System.out.println();
        });
        
        // User actions
        System.out.println("User Action: Login");
        store.dispatch(new Action.Login("user123", "token_abc"));
        
        System.out.println("User Action: Add items to cart");
        store.dispatch(new Action.AddToCart(new CartItem("p1", "Laptop", 999.99, 1)));
        store.dispatch(new Action.AddToCart(new CartItem("p2", "Mouse", 29.99, 2)));
        store.dispatch(new Action.AddToCart(new CartItem("p1", "Laptop", 999.99, 1))); // Increase quantity
        
        System.out.println("User Action: Navigate to cart");
        store.dispatch(new Action.Navigate("cart"));
        
        System.out.println("User Action: Remove item");
        store.dispatch(new Action.RemoveFromCart("p2"));
        
        System.out.println("User Action: Logout");
        store.dispatch(new Action.Logout());
        
        System.out.println("✓ Redux Benefits:");
        System.out.println("  - Single source of truth");
        System.out.println("  - Predictable state updates");
        System.out.println("  - Middleware support");
        System.out.println("  - Time-travel debugging");
    }
    
    /**
     * ========================================================================
     * PATTERN 2: NAVIGATION STATE MANAGEMENT
     * ========================================================================
     * 
     * Navigation Patterns:
     * - Stack Navigation: Push/pop screens
     * - Tab Navigation: Switch between tabs
     * - Drawer Navigation: Slide-out menu
     * - Modal Navigation: Overlay screens
     * 
     * Deep Linking: Open specific screen from URL
     * 
     * State Persistence: Save/restore navigation state
     */
    
    // Navigation State
    static class NavigationState {
        private final Stack<Screen> backStack = new Stack<>();
        private String currentTab = "home";
        private boolean drawerOpen = false;
        
        public void push(Screen screen) {
            backStack.push(screen);
            System.out.println("Navigated to: " + screen.name);
        }
        
        public Screen pop() {
            if (!backStack.isEmpty()) {
                Screen screen = backStack.pop();
                System.out.println("Back from: " + screen.name);
                return screen;
            }
            return null;
        }
        
        public Screen getCurrentScreen() {
            return backStack.isEmpty() ? null : backStack.peek();
        }
        
        public void switchTab(String tab) {
            this.currentTab = tab;
            System.out.println("Switched to tab: " + tab);
        }
        
        public void toggleDrawer() {
            drawerOpen = !drawerOpen;
            System.out.println("Drawer " + (drawerOpen ? "opened" : "closed"));
        }
        
        public int getBackStackSize() {
            return backStack.size();
        }
        
        // Serialize for persistence
        public Map<String, Object> toMap() {
            Map<String, Object> state = new HashMap<>();
            state.put("backStack", backStack.stream()
                .map(Screen::toMap)
                .collect(Collectors.toList()));
            state.put("currentTab", currentTab);
            return state;
        }
    }
    
    static class Screen {
        public final String name;
        public final Map<String, Object> params;
        
        public Screen(String name, Map<String, Object> params) {
            this.name = name;
            this.params = new HashMap<>(params);
        }
        
        public Screen(String name) {
            this(name, new HashMap<>());
        }
        
        public Map<String, Object> toMap() {
            Map<String, Object> map = new HashMap<>();
            map.put("name", name);
            map.put("params", params);
            return map;
        }
    }
    
    // Deep Link Handler
    static class DeepLinkHandler {
        private final NavigationState navState;
        
        public DeepLinkHandler(NavigationState navState) {
            this.navState = navState;
        }
        
        public void handleDeepLink(String url) {
            System.out.println("Handling deep link: " + url);
            
            // Parse URL: myapp://product/123?source=email
            if (url.startsWith("myapp://product/")) {
                String productId = url.substring("myapp://product/".length()).split("\\?")[0];
                Map<String, Object> params = new HashMap<>();
                params.put("productId", productId);
                params.put("source", "deeplink");
                
                navState.push(new Screen("product_detail", params));
            } else if (url.startsWith("myapp://cart")) {
                navState.push(new Screen("cart"));
            }
        }
    }
    
    /**
     * NAVIGATION DEMONSTRATION
     * 
     * Time Complexity: O(1) for push/pop
     * Space Complexity: O(n) for back stack
     */
    static void demonstrateNavigation() {
        System.out.println("\n=== Navigation Management ===\n");
        
        NavigationState navState = new NavigationState();
        DeepLinkHandler deepLinkHandler = new DeepLinkHandler(navState);
        
        // Stack navigation
        System.out.println("Stack Navigation:");
        navState.push(new Screen("home"));
        navState.push(new Screen("product_list"));
        
        Map<String, Object> params = new HashMap<>();
        params.put("productId", "p123");
        navState.push(new Screen("product_detail", params));
        
        System.out.println("Back stack size: " + navState.getBackStackSize());
        
        navState.pop();
        navState.pop();
        
        System.out.println("\nTab Navigation:");
        navState.switchTab("home");
        navState.switchTab("search");
        navState.switchTab("profile");
        
        System.out.println("\nDrawer Navigation:");
        navState.toggleDrawer();
        navState.toggleDrawer();
        
        System.out.println("\nDeep Linking:");
        deepLinkHandler.handleDeepLink("myapp://product/456?source=email");
        deepLinkHandler.handleDeepLink("myapp://cart");
        
        System.out.println("\nNavigation State Persistence:");
        Map<String, Object> savedState = navState.toMap();
        System.out.println("Saved state: " + savedState);
        
        System.out.println("\n✓ Navigation Benefits:");
        System.out.println("  - Organized screen flow");
        System.out.println("  - Deep linking support");
        System.out.println("  - State persistence");
        System.out.println("  - Multiple patterns");
    }
    
    /**
     * ========================================================================
     * PATTERN 3: REACTIVE PROGRAMMING WITH OBSERVABLES
     * ========================================================================
     * 
     * Reactive Programming:
     * - Asynchronous data streams
     * - Declarative event handling
     * - Automatic UI updates
     * 
     * Similar to:
     * - RxJava (Android)
     * - Kotlin Flow (Android)
     * - Combine (iOS)
     * - RxJS (React Native)
     */
    
    // Simple Observable implementation
    static class Observable<T> {
        private final List<Consumer<T>> observers = new ArrayList<>();
        private T currentValue;
        
        public Observable(T initialValue) {
            this.currentValue = initialValue;
        }
        
        public void subscribe(Consumer<T> observer) {
            observers.add(observer);
            observer.accept(currentValue); // Emit current value
        }
        
        public void emit(T value) {
            this.currentValue = value;
            for (Consumer<T> observer : observers) {
                observer.accept(value);
            }
        }
        
        public T getValue() {
            return currentValue;
        }
        
        // Operators
        public <R> Observable<R> map(Function<T, R> mapper) {
            Observable<R> mapped = new Observable<>(mapper.apply(currentValue));
            this.subscribe(value -> mapped.emit(mapper.apply(value)));
            return mapped;
        }
        
        public Observable<T> filter(Predicate<T> predicate) {
            Observable<T> filtered = new Observable<>(currentValue);
            this.subscribe(value -> {
                if (predicate.test(value)) {
                    filtered.emit(value);
                }
            });
            return filtered;
        }
        
        public static <A, B, R> Observable<R> combineLatest(
            Observable<A> obsA,
            Observable<B> obsB,
            BiFunction<A, B, R> combiner) {
            
            R initial = combiner.apply(obsA.getValue(), obsB.getValue());
            Observable<R> combined = new Observable<>(initial);
            
            obsA.subscribe(a -> combined.emit(combiner.apply(a, obsB.getValue())));
            obsB.subscribe(b -> combined.emit(combiner.apply(obsA.getValue(), b)));
            
            return combined;
        }
    }
    
    // Example: Search with debounce
    static class SearchViewModel {
        private final Observable<String> searchQuery = new Observable<>("");
        private final Observable<List<String>> searchResults = new Observable<>(new ArrayList<>());
        private final Observable<Boolean> isLoading = new Observable<>(false);
        
        private ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
        private ScheduledFuture<?> searchTask;
        
        public SearchViewModel() {
            // Debounce search query
            searchQuery.subscribe(query -> {
                if (searchTask != null) {
                    searchTask.cancel(false);
                }
                
                if (query.isEmpty()) {
                    searchResults.emit(new ArrayList<>());
                    return;
                }
                
                isLoading.emit(true);
                
                // Debounce: Wait 300ms before searching
                searchTask = scheduler.schedule(() -> {
                    performSearch(query);
                }, 300, TimeUnit.MILLISECONDS);
            });
        }
        
        private void performSearch(String query) {
            // Simulate API call
            try {
                Thread.sleep(200);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
            }
            
            List<String> results = Arrays.asList(
                query + " - Result 1",
                query + " - Result 2",
                query + " - Result 3"
            );
            
            searchResults.emit(results);
            isLoading.emit(false);
        }
        
        public void setSearchQuery(String query) {
            searchQuery.emit(query);
        }
        
        public Observable<List<String>> getSearchResults() {
            return searchResults;
        }
        
        public Observable<Boolean> getIsLoading() {
            return isLoading;
        }
        
        public void shutdown() {
            scheduler.shutdown();
        }
    }
    
    /**
     * REACTIVE PROGRAMMING DEMONSTRATION
     * 
     * Time Complexity: O(1) for emit, O(n) for notify observers
     * Space Complexity: O(n) for observers list
     */
    static void demonstrateReactive() {
        System.out.println("\n=== Reactive Programming ===\n");
        
        // Simple observable
        System.out.println("Simple Observable:");
        Observable<Integer> counter = new Observable<>(0);
        
        counter.subscribe(value -> System.out.println("Observer 1: " + value));
        counter.subscribe(value -> System.out.println("Observer 2: " + value * 2));
        
        counter.emit(1);
        counter.emit(2);
        counter.emit(3);
        
        // Operators
        System.out.println("\nObservable Operators:");
        Observable<Integer> numbers = new Observable<>(5);
        
        Observable<Integer> doubled = numbers.map(n -> n * 2);
        doubled.subscribe(value -> System.out.println("Doubled: " + value));
        
        Observable<Integer> evens = numbers.filter(n -> n % 2 == 0);
        evens.subscribe(value -> System.out.println("Even: " + value));
        
        numbers.emit(10);
        numbers.emit(15);
        numbers.emit(20);
        
        // Combine observables
        System.out.println("\nCombine Observables:");
        Observable<String> firstName = new Observable<>("John");
        Observable<String> lastName = new Observable<>("Doe");
        
        Observable<String> fullName = Observable.combineLatest(
            firstName, lastName,
            (first, last) -> first + " " + last
        );
        
        fullName.subscribe(name -> System.out.println("Full name: " + name));
        
        firstName.emit("Jane");
        lastName.emit("Smith");
        
        // Search with debounce
        System.out.println("\nSearch with Debounce:");
        SearchViewModel searchVM = new SearchViewModel();
        
        searchVM.getSearchResults().subscribe(results -> {
            System.out.println("Search results (" + results.size() + "):");
            for (String result : results) {
                System.out.println("  - " + result);
            }
        });
        
        searchVM.getIsLoading().subscribe(loading -> {
            if (loading) System.out.println("Searching...");
        });
        
        searchVM.setSearchQuery("mobile");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        
        searchVM.setSearchQuery("mobile app");
        try { Thread.sleep(100); } catch (InterruptedException e) {}
        
        searchVM.setSearchQuery("mobile app development");
        try { Thread.sleep(600); } catch (InterruptedException e) {}
        
        searchVM.shutdown();
        
        System.out.println("\n✓ Reactive Benefits:");
        System.out.println("  - Declarative event handling");
        System.out.println("  - Automatic UI updates");
        System.out.println("  - Composable operators");
        System.out.println("  - Simplified async code");
    }
    
    /**
     * ========================================================================
     * MAIN METHOD
     * ========================================================================
     */
    public static void main(String[] args) {
        System.out.println("=".repeat(80));
        System.out.println("DAY 29: MOBILE STATE MANAGEMENT & NAVIGATION");
        System.out.println("=".repeat(80));
        
        demonstrateRedux();
        demonstrateNavigation();
        demonstrateReactive();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("All state management patterns demonstrated!");
        System.out.println("=".repeat(80));
    }
}
