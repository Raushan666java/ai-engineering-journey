/*
 * FUNCTIONAL DESIGN PATTERNS
 * Day 10: Streams API, Lambda Expressions & Functional Programming
 * 
 * This file demonstrates how classic design patterns are implemented
 * using functional programming with lambdas and streams in Java.
 * 
 * PATTERNS COVERED:
 * 1. Strategy Pattern (with Lambdas)
 * 2. Chain of Responsibility (Functional)
 * 3. Command Pattern (Functional)
 * 4. Observer Pattern (Functional)
 * 5. Template Method (Functional)
 * 6. Builder Pattern (Fluent API)
 * 7. Decorator Pattern (Function Composition)
 * 8. Factory Pattern (Function References)
 */

import java.util.*;
import java.util.function.*;
import java.util.stream.*;

public class FunctionalDesignPatterns {

    // ============================================================================
    // PATTERN 1: STRATEGY PATTERN WITH LAMBDAS
    // ============================================================================
    
    /*
     * TRADITIONAL: Multiple strategy classes implementing interface
     * FUNCTIONAL: Strategies as lambda expressions
     */
    
    public static class StrategyPattern {
        
        @FunctionalInterface
        interface ValidationStrategy {
            boolean validate(String input);
        }
        
        // Traditional approach would need multiple classes
        // With lambdas, strategies are inline
        
        public static void demonstrateStrategy() {
            System.out.println("\n=== Strategy Pattern ===");
            
            // Define strategies as lambdas
            ValidationStrategy notEmpty = s -> s != null && !s.isEmpty();
            ValidationStrategy minLength = s -> s != null && s.length() >= 5;
            ValidationStrategy alphanumeric = s -> s != null && s.matches("[a-zA-Z0-9]+");
            ValidationStrategy email = s -> s != null && s.matches("^[A-Za-z0-9+_.-]+@(.+)$");
            
            // Validator that uses strategy
            class Validator {
                private final ValidationStrategy strategy;
                
                public Validator(ValidationStrategy strategy) {
                    this.strategy = strategy;
                }
                
                public boolean validate(String input) {
                    return strategy.validate(input);
                }
            }
            
            // Use different strategies
            Validator lengthValidator = new Validator(minLength);
            Validator emailValidator = new Validator(email);
            
            String[] testInputs = {"test", "test@email.com", "abc123", null};
            
            for (String input : testInputs) {
                System.out.println("'" + input + "' min length: " + 
                    lengthValidator.validate(input));
                System.out.println("'" + input + "' email: " + 
                    emailValidator.validate(input));
            }
            
            // Combining strategies
            ValidationStrategy combined = notEmpty
                .and(minLength)
                .and(alphanumeric);
            
            // Note: Need to make ValidationStrategy extend Predicate or add and() method
        }
        
        // Sorting Strategy Example
        public static void sortingStrategy() {
            System.out.println("\n=== Sorting Strategy ===");
            
            List<Person> people = Arrays.asList(
                new Person("Charlie", 35),
                new Person("Alice", 25),
                new Person("Bob", 30)
            );
            
            // Different sorting strategies as lambdas
            Comparator<Person> byName = (p1, p2) -> p1.getName().compareTo(p2.getName());
            Comparator<Person> byAge = Comparator.comparingInt(Person::getAge);
            Comparator<Person> byNameDesc = byName.reversed();
            
            System.out.println("By name: ");
            people.stream()
                .sorted(byName)
                .forEach(System.out::println);
            
            System.out.println("\nBy age: ");
            people.stream()
                .sorted(byAge)
                .forEach(System.out::println);
        }
    }

    // ============================================================================
    // PATTERN 2: CHAIN OF RESPONSIBILITY (FUNCTIONAL)
    // ============================================================================
    
    public static class ChainOfResponsibilityPattern {
        
        @FunctionalInterface
        interface ProcessingStep<T> {
            Optional<T> process(T input);
            
            default ProcessingStep<T> andThen(ProcessingStep<T> next) {
                return input -> {
                    Optional<T> result = this.process(input);
                    return result.isPresent() ? result : next.process(input);
                };
            }
        }
        
        public static void demonstrateChain() {
            System.out.println("\n=== Chain of Responsibility ===");
            
            // Text processing chain
            Function<String, String> trimStep = String::trim;
            Function<String, String> lowercaseStep = String::toLowerCase;
            Function<String, String> removeSpecialChars = s -> s.replaceAll("[^a-z0-9 ]", "");
            Function<String, String> removeExtraSpaces = s -> s.replaceAll("\\s+", " ");
            
            // Compose the chain
            Function<String, String> processingChain = trimStep
                .andThen(lowercaseStep)
                .andThen(removeSpecialChars)
                .andThen(removeExtraSpaces);
            
            String input = "  Hello,   WORLD!!!   123  ";
            String output = processingChain.apply(input);
            
            System.out.println("Input:  '" + input + "'");
            System.out.println("Output: '" + output + "'");
            
            // Request handling chain
            Function<Request, Optional<String>> authHandler = req -> 
                req.hasAuth() ? Optional.of(req.getData()) : Optional.empty();
            
            Function<Request, Optional<String>> validationHandler = req ->
                req.isValid() ? Optional.of(req.getData()) : Optional.empty();
            
            Function<Request, Optional<String>> processingHandler = req ->
                Optional.of("Processed: " + req.getData());
            
            // Chain handlers
            Function<Request, Optional<String>> handlerChain = authHandler
                .andThen(opt -> opt.isPresent() ? validationHandler.apply(new Request(opt.get(), true, true)) : Optional.empty())
                .andThen(opt -> opt.isPresent() ? processingHandler.apply(new Request(opt.get(), true, true)) : Optional.empty());
            
            Request request = new Request("Test Data", true, true);
            Optional<String> result = handlerChain.apply(request);
            System.out.println("\nRequest result: " + result.orElse("Failed"));
        }
    }
    
    static class Request {
        private String data;
        private boolean hasAuth;
        private boolean isValid;
        
        public Request(String data, boolean hasAuth, boolean isValid) {
            this.data = data;
            this.hasAuth = hasAuth;
            this.isValid = isValid;
        }
        
        public String getData() { return data; }
        public boolean hasAuth() { return hasAuth; }
        public boolean isValid() { return isValid; }
    }

    // ============================================================================
    // PATTERN 3: COMMAND PATTERN (FUNCTIONAL)
    // ============================================================================
    
    public static class CommandPattern {
        
        @FunctionalInterface
        interface Command {
            void execute();
        }
        
        // Macro command that executes multiple commands
        public static class MacroCommand implements Command {
            private List<Command> commands;
            
            public MacroCommand(List<Command> commands) {
                this.commands = commands;
            }
            
            @Override
            public void execute() {
                commands.forEach(Command::execute);
            }
        }
        
        public static void demonstrateCommand() {
            System.out.println("\n=== Command Pattern ===");
            
            // Commands as lambdas
            Command saveCommand = () -> System.out.println("Saving...");
            Command printCommand = () -> System.out.println("Printing...");
            Command emailCommand = () -> System.out.println("Sending email...");
            
            // Execute individual commands
            saveCommand.execute();
            
            // Macro command
            MacroCommand publishMacro = new MacroCommand(Arrays.asList(
                saveCommand,
                printCommand,
                emailCommand
            ));
            
            System.out.println("\nExecuting publish macro:");
            publishMacro.execute();
            
            // Command queue
            Queue<Command> commandQueue = new LinkedList<>(Arrays.asList(
                () -> System.out.println("Command 1"),
                () -> System.out.println("Command 2"),
                () -> System.out.println("Command 3")
            ));
            
            System.out.println("\nProcessing command queue:");
            commandQueue.forEach(Command::execute);
        }
    }

    // ============================================================================
    // PATTERN 4: OBSERVER PATTERN (FUNCTIONAL)
    // ============================================================================
    
    public static class ObserverPattern {
        
        @FunctionalInterface
        interface Observer<T> {
            void update(T event);
        }
        
        public static class Observable<T> {
            private final List<Observer<T>> observers = new ArrayList<>();
            
            public void subscribe(Observer<T> observer) {
                observers.add(observer);
            }
            
            public void unsubscribe(Observer<T> observer) {
                observers.remove(observer);
            }
            
            public void notifyObservers(T event) {
                observers.forEach(observer -> observer.update(event));
            }
        }
        
        public static void demonstrateObserver() {
            System.out.println("\n=== Observer Pattern ===");
            
            Observable<String> eventBus = new Observable<>();
            
            // Observers as lambdas
            Observer<String> logger = event -> System.out.println("[LOG] " + event);
            Observer<String> emailer = event -> System.out.println("[EMAIL] Sending: " + event);
            Observer<String> smsHandler = event -> System.out.println("[SMS] Sending: " + event);
            
            // Subscribe observers
            eventBus.subscribe(logger);
            eventBus.subscribe(emailer);
            eventBus.subscribe(smsHandler);
            
            // Trigger event
            eventBus.notifyObservers("User logged in");
            
            System.out.println();
            
            // Unsubscribe one
            eventBus.unsubscribe(smsHandler);
            eventBus.notifyObservers("User updated profile");
        }
        
        // Functional Reactive Style
        public static void demonstrateReactiveStyle() {
            System.out.println("\n=== Reactive Style ===");
            
            List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5);
            
            // Stream acts like observable
            numbers.stream()
                .peek(n -> System.out.println("Processing: " + n))
                .map(n -> n * 2)
                .peek(n -> System.out.println("After doubling: " + n))
                .filter(n -> n > 5)
                .forEach(n -> System.out.println("Final: " + n));
        }
    }

    // ============================================================================
    // PATTERN 5: TEMPLATE METHOD (FUNCTIONAL)
    // ============================================================================
    
    public static class TemplateMethodPattern {
        
        public static class DataProcessor<T> {
            private final Supplier<T> dataLoader;
            private final Function<T, T> transformer;
            private final Consumer<T> dataSaver;
            
            public DataProcessor(
                Supplier<T> dataLoader,
                Function<T, T> transformer,
                Consumer<T> dataSaver
            ) {
                this.dataLoader = dataLoader;
                this.transformer = transformer;
                this.dataSaver = dataSaver;
            }
            
            public void process() {
                System.out.println("Starting process...");
                T data = dataLoader.get();
                System.out.println("Data loaded");
                
                T transformed = transformer.apply(data);
                System.out.println("Data transformed");
                
                dataSaver.accept(transformed);
                System.out.println("Data saved");
                System.out.println("Process complete");
            }
        }
        
        public static void demonstrateTemplate() {
            System.out.println("\n=== Template Method Pattern ===");
            
            // CSV Processor
            DataProcessor<String> csvProcessor = new DataProcessor<>(
                () -> "csv,data,here",                    // Load
                data -> data.toUpperCase(),                // Transform
                data -> System.out.println("Saving CSV: " + data)  // Save
            );
            
            csvProcessor.process();
            
            System.out.println();
            
            // JSON Processor
            DataProcessor<String> jsonProcessor = new DataProcessor<>(
                () -> "{\"key\":\"value\"}",
                data -> data.replace("\"", "'"),
                data -> System.out.println("Saving JSON: " + data)
            );
            
            jsonProcessor.process();
        }
    }

    // ============================================================================
    // PATTERN 6: BUILDER PATTERN (FLUENT API WITH FUNCTIONS)
    // ============================================================================
    
    public static class BuilderPattern {
        
        public static class Person {
            private final String name;
            private final int age;
            private final String email;
            private final String phone;
            
            private Person(Builder builder) {
                this.name = builder.name;
                this.age = builder.age;
                this.email = builder.email;
                this.phone = builder.phone;
            }
            
            public static class Builder {
                private String name;
                private int age;
                private String email;
                private String phone;
                
                public Builder withName(String name) {
                    this.name = name;
                    return this;
                }
                
                public Builder withAge(int age) {
                    this.age = age;
                    return this;
                }
                
                public Builder withEmail(String email) {
                    this.email = email;
                    return this;
                }
                
                public Builder withPhone(String phone) {
                    this.phone = phone;
                    return this;
                }
                
                public Person build() {
                    return new Person(this);
                }
            }
            
            @Override
            public String toString() {
                return String.format("Person{name='%s', age=%d, email='%s', phone='%s'}",
                    name, age, email, phone);
            }
        }
        
        // Functional Builder
        public static class FunctionalBuilder<T> {
            private final Supplier<T> instantiator;
            private List<Consumer<T>> modifiers = new ArrayList<>();
            
            public FunctionalBuilder(Supplier<T> instantiator) {
                this.instantiator = instantiator;
            }
            
            public FunctionalBuilder<T> with(Consumer<T> modifier) {
                modifiers.add(modifier);
                return this;
            }
            
            public T build() {
                T instance = instantiator.get();
                modifiers.forEach(modifier -> modifier.accept(instance));
                return instance;
            }
        }
        
        public static void demonstrateBuilder() {
            System.out.println("\n=== Builder Pattern ===");
            
            // Traditional builder
            Person person1 = new Person.Builder()
                .withName("Alice")
                .withAge(25)
                .withEmail("alice@email.com")
                .withPhone("123-456-7890")
                .build();
            
            System.out.println("Traditional: " + person1);
            
            // Functional builder example
            StringBuilder sb = new FunctionalBuilder<>(StringBuilder::new)
                .with(b -> b.append("Hello"))
                .with(b -> b.append(" "))
                .with(b -> b.append("World"))
                .build();
            
            System.out.println("Functional: " + sb.toString());
        }
    }

    // ============================================================================
    // PATTERN 7: DECORATOR PATTERN (FUNCTION COMPOSITION)
    // ============================================================================
    
    public static class DecoratorPattern {
        
        // Decorating functions with additional behavior
        public static <T, R> Function<T, R> logged(Function<T, R> function, String name) {
            return input -> {
                System.out.println("[" + name + "] Input: " + input);
                R result = function.apply(input);
                System.out.println("[" + name + "] Output: " + result);
                return result;
            };
        }
        
        public static <T, R> Function<T, R> timed(Function<T, R> function) {
            return input -> {
                long start = System.nanoTime();
                R result = function.apply(input);
                long end = System.nanoTime();
                System.out.println("Execution time: " + (end - start) / 1_000_000.0 + "ms");
                return result;
            };
        }
        
        public static <T, R> Function<T, R> cached(Function<T, R> function) {
            Map<T, R> cache = new HashMap<>();
            return input -> cache.computeIfAbsent(input, function);
        }
        
        public static void demonstrateDecorator() {
            System.out.println("\n=== Decorator Pattern ===");
            
            // Base function
            Function<Integer, Integer> square = x -> {
                try { Thread.sleep(100); } catch (InterruptedException e) {}
                return x * x;
            };
            
            // Decorate with logging
            Function<Integer, Integer> loggedSquare = logged(square, "Square");
            System.out.println("Result: " + loggedSquare.apply(5));
            
            System.out.println();
            
            // Decorate with timing
            Function<Integer, Integer> timedSquare = timed(square);
            System.out.println("Result: " + timedSquare.apply(5));
            
            System.out.println();
            
            // Decorate with caching
            Function<Integer, Integer> cachedSquare = cached(timed(square));
            System.out.println("First call:");
            cachedSquare.apply(5);
            System.out.println("Second call (cached):");
            cachedSquare.apply(5);
            
            System.out.println();
            
            // Multiple decorators
            Function<Integer, Integer> fullyDecorated = 
                logged(
                    timed(
                        cached(square)
                    ),
                    "Decorated"
                );
            
            System.out.println("Fully decorated:");
            fullyDecorated.apply(5);
        }
    }

    // ============================================================================
    // PATTERN 8: FACTORY PATTERN (FUNCTION REFERENCES)
    // ============================================================================
    
    public static class FactoryPattern {
        
        interface Shape {
            void draw();
        }
        
        static class Circle implements Shape {
            public void draw() { System.out.println("Drawing Circle"); }
        }
        
        static class Square implements Shape {
            public void draw() { System.out.println("Drawing Square"); }
        }
        
        static class Triangle implements Shape {
            public void draw() { System.out.println("Drawing Triangle"); }
        }
        
        // Traditional factory
        public static Shape createShape(String type) {
            switch (type) {
                case "circle": return new Circle();
                case "square": return new Square();
                case "triangle": return new Triangle();
                default: throw new IllegalArgumentException("Unknown shape");
            }
        }
        
        // Functional factory using map of suppliers
        private static final Map<String, Supplier<Shape>> shapeFactory = Map.of(
            "circle", Circle::new,
            "square", Square::new,
            "triangle", Triangle::new
        );
        
        public static Shape createShapeFunctional(String type) {
            return Optional.ofNullable(shapeFactory.get(type))
                .map(Supplier::get)
                .orElseThrow(() -> new IllegalArgumentException("Unknown shape: " + type));
        }
        
        public static void demonstrateFactory() {
            System.out.println("\n=== Factory Pattern ===");
            
            // Traditional
            System.out.println("Traditional factory:");
            createShape("circle").draw();
            createShape("square").draw();
            
            // Functional
            System.out.println("\nFunctional factory:");
            createShapeFunctional("circle").draw();
            createShapeFunctional("triangle").draw();
            
            // Factory with parameters
            BiFunction<String, Integer, String> messageFactory = (template, count) ->
                String.format(template, count);
            
            String message = messageFactory.apply("You have %d new messages", 5);
            System.out.println("\nParameterized factory: " + message);
        }
    }

    // ============================================================================
    // HELPER CLASSES
    // ============================================================================
    
    static class Person {
        private String name;
        private int age;
        
        public Person(String name, int age) {
            this.name = name;
            this.age = age;
        }
        
        public String getName() { return name; }
        public int getAge() { return age; }
        
        @Override
        public String toString() {
            return name + "(" + age + ")";
        }
    }

    // ============================================================================
    // MAIN METHOD
    // ============================================================================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════════╗");
        System.out.println("║          FUNCTIONAL DESIGN PATTERNS                        ║");
        System.out.println("║          Day 10: Functional Programming                    ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
        
        StrategyPattern.demonstrateStrategy();
        StrategyPattern.sortingStrategy();
        
        ChainOfResponsibilityPattern.demonstrateChain();
        
        CommandPattern.demonstrateCommand();
        
        ObserverPattern.demonstrateObserver();
        ObserverPattern.demonstrateReactiveStyle();
        
        TemplateMethodPattern.demonstrateTemplate();
        
        BuilderPattern.demonstrateBuilder();
        
        DecoratorPattern.demonstrateDecorator();
        
        FactoryPattern.demonstrateFactory();
        
        System.out.println("\n╔════════════════════════════════════════════════════════════╗");
        System.out.println("║          FUNCTIONAL DESIGN PATTERNS COMPLETE!              ║");
        System.out.println("╚════════════════════════════════════════════════════════════╝");
    }
}
