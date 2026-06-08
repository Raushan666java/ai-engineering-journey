
/**
 * Modern Java Features - Complete Implementation
 * Topic: Lambda expressions, Streams API, Optional, Date/Time API, Records, Sealed classes
 * Difficulty: Advanced
 * Estimated Time: 100 minutes
 */

import java.util.*;
import java.util.stream.*;
import java.util.function.*;
import java.time.*;
import java.time.format.*;
import java.time.temporal.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

// ==========================================
// 1. LAMBDA EXPRESSIONS AND FUNCTIONAL INTERFACES
// ==========================================

/**
 * Functional interfaces and lambda expressions
 */
class LambdaExpressions {

    // Built-in functional interfaces
    Predicate<String> isEmpty = String::isEmpty;
    Predicate<String> isNotEmpty = s -> !s.isEmpty();

    Function<String, Integer> stringLength = String::length;
    Function<String, String> toUpperCase = String::toUpperCase;

    Consumer<String> printString = System.out::println;
    Consumer<String> printUpper = s -> System.out.println(s.toUpperCase());

    Supplier<String> getCurrentTime = () -> LocalTime.now().toString();
    Supplier<Double> getRandom = Math::random;

    // Custom functional interface
    @FunctionalInterface
    interface Calculator {
        double calculate(double a, double b);
    }

    @FunctionalInterface
    interface Processor<T> {
        void process(T item);
    }

    /**
     * Demonstrate lambda expressions
     */
    public static void demonstrateLambdas() {
        System.out.println("=== LAMBDA EXPRESSIONS DEMONSTRATION ===");

        // Traditional approach vs Lambda
        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "Diana");

        // Traditional anonymous class
        System.out.println("Traditional approach:");
        names.forEach(new Consumer<String>() {
            @Override
            public void accept(String s) {
                System.out.println(s.toUpperCase());
            }
        });

        // Lambda expression
        System.out.println("Lambda approach:");
        names.forEach(s -> System.out.println(s.toUpperCase()));

        // Method reference
        System.out.println("Method reference:");
        names.forEach(System.out::println);

        // Custom functional interface
        Calculator add = (a, b) -> a + b;
        Calculator multiply = (a, b) -> a * b;
        Calculator power = Math::pow;

        System.out.println("5 + 3 = " + add.calculate(5, 3));
        System.out.println("5 * 3 = " + multiply.calculate(5, 3));
        System.out.println("2 ^ 3 = " + power.calculate(2, 3));

        // Generic processor
        Processor<String> stringProcessor = s -> System.out.println("Processing: " + s);
        Processor<Integer> intProcessor = n -> System.out.println("Number: " + n * 2);

        stringProcessor.process("Hello");
        intProcessor.process(42);

        // Suppliers
        Supplier<String> timeSupplier = () -> LocalTime.now().format(DateTimeFormatter.ofPattern("HH:mm:ss"));
        System.out.println("Current time: " + timeSupplier.get());
        System.out.println("Random number: " + getRandom.get());
        System.out.println();
    }

    /**
     * Demonstrate method references
     */
    public static void demonstrateMethodReferences() {
        System.out.println("=== METHOD REFERENCES DEMONSTRATION ===");

        List<String> words = Arrays.asList("hello", "world", "java", "streams");

        // Static method reference
        words.stream()
             .map(String::toUpperCase)
             .forEach(System.out::println);

        // Instance method reference (of arbitrary object)
        words.stream()
             .map(String::length)
             .forEach(System.out::println);

        // Instance method reference (of particular object)
        String prefix = "Prefix: ";
        words.forEach(prefix::concat);

        // Constructor reference
        Supplier<List<String>> listSupplier = ArrayList::new;
        List<String> newList = listSupplier.get();
        newList.add("Created with constructor reference");
        System.out.println(newList);
        System.out.println();
    }
}

// ==========================================
// 2. STREAMS API
// ==========================================

/**
 * Comprehensive Streams API demonstration
 */
class StreamsAPIDemo {

    static class Person {
        private String name;
        private int age;
        private String city;
        private double salary;

        public Person(String name, int age, String city, double salary) {
            this.name = name;
            this.age = age;
            this.city = city;
            this.salary = salary;
        }

        public String getName() { return name; }
        public int getAge() { return age; }
        public String getCity() { return city; }
        public double getSalary() { return salary; }

        @Override
        public String toString() {
            return String.format("%s (%d, %s, $%.2f)", name, age, city, salary);
        }
    }

    /**
     * Demonstrate basic stream operations
     */
    public static void demonstrateBasicStreams() {
        System.out.println("=== BASIC STREAMS DEMONSTRATION ===");

        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

        // Filter, map, collect
        List<Integer> evenSquares = numbers.stream()
                                          .filter(n -> n % 2 == 0)
                                          .map(n -> n * n)
                                          .collect(Collectors.toList());
        System.out.println("Even squares: " + evenSquares);

        // Sum using reduce
        int sum = numbers.stream().reduce(0, Integer::sum);
        System.out.println("Sum: " + sum);

        // Average
        double average = numbers.stream()
                               .mapToInt(Integer::intValue)
                               .average()
                               .orElse(0.0);
        System.out.println("Average: " + average);

        // Count elements matching predicate
        long count = numbers.stream()
                           .filter(n -> n > 5)
                           .count();
        System.out.println("Numbers > 5: " + count);

        // Find first element
        Optional<Integer> firstEven = numbers.stream()
                                            .filter(n -> n % 2 == 0)
                                            .findFirst();
        System.out.println("First even number: " + firstEven.orElse(-1));

        // Any match, all match, none match
        boolean anyEven = numbers.stream().anyMatch(n -> n % 2 == 0);
        boolean allEven = numbers.stream().allMatch(n -> n % 2 == 0);
        boolean noneNegative = numbers.stream().noneMatch(n -> n < 0);

        System.out.println("Any even: " + anyEven);
        System.out.println("All even: " + allEven);
        System.out.println("None negative: " + noneNegative);
        System.out.println();
    }

    /**
     * Demonstrate advanced stream operations
     */
    public static void demonstrateAdvancedStreams() {
        System.out.println("=== ADVANCED STREAMS DEMONSTRATION ===");

        List<Person> people = Arrays.asList(
            new Person("Alice", 25, "New York", 75000),
            new Person("Bob", 30, "London", 80000),
            new Person("Charlie", 35, "Paris", 90000),
            new Person("Diana", 28, "Tokyo", 85000),
            new Person("Eve", 32, "Berlin", 95000)
        );

        // Group by city
        Map<String, List<Person>> byCity = people.stream()
                                                .collect(Collectors.groupingBy(Person::getCity));
        System.out.println("People by city:");
        byCity.forEach((city, persons) ->
            System.out.println(city + ": " + persons.stream()
                                                   .map(Person::getName)
                                                   .collect(Collectors.joining(", "))));

        // Partition by age
        Map<Boolean, List<Person>> byAge = people.stream()
                                                .collect(Collectors.partitioningBy(p -> p.getAge() > 30));
        System.out.println("\nPeople over 30:");
        byAge.get(true).forEach(p -> System.out.println("- " + p.getName()));

        // Statistics
        DoubleSummaryStatistics salaryStats = people.stream()
                                                    .collect(Collectors.summarizingDouble(Person::getSalary));
        System.out.println("\nSalary statistics:");
        System.out.println("Count: " + salaryStats.getCount());
        System.out.println("Average: $" + String.format("%.2f", salaryStats.getAverage()));
        System.out.println("Min: $" + salaryStats.getMin());
        System.out.println("Max: $" + salaryStats.getMax());

        // Top 3 highest paid
        List<Person> topEarners = people.stream()
                                       .sorted(Comparator.comparingDouble(Person::getSalary).reversed())
                                       .limit(3)
                                       .collect(Collectors.toList());
        System.out.println("\nTop 3 earners:");
        topEarners.forEach(p -> System.out.println("- " + p.getName() + ": $" + p.getSalary()));

        // Flat map example
        List<List<String>> listOfLists = Arrays.asList(
            Arrays.asList("A", "B"),
            Arrays.asList("C", "D"),
            Arrays.asList("E", "F")
        );

        List<String> flattened = listOfLists.stream()
                                          .flatMap(List::stream)
                                          .collect(Collectors.toList());
        System.out.println("\nFlattened list: " + flattened);
        System.out.println();
    }

    /**
     * Demonstrate parallel streams
     */
    public static void demonstrateParallelStreams() {
        System.out.println("=== PARALLEL STREAMS DEMONSTRATION ===");

        List<Integer> numbers = new ArrayList<>();
        for (int i = 1; i <= 1000000; i++) {
            numbers.add(i);
        }

        // Sequential processing
        long startTime = System.nanoTime();
        long sequentialSum = numbers.stream()
                                   .mapToLong(Integer::longValue)
                                   .sum();
        long sequentialTime = System.nanoTime() - startTime;

        // Parallel processing
        startTime = System.nanoTime();
        long parallelSum = numbers.parallelStream()
                                 .mapToLong(Integer::longValue)
                                 .sum();
        long parallelTime = System.nanoTime() - startTime;

        System.out.println("Sequential sum: " + sequentialSum + " (Time: " + sequentialTime / 1000000 + " ms)");
        System.out.println("Parallel sum: " + parallelSum + " (Time: " + parallelTime / 1000000 + " ms)");
        System.out.println("Speedup: " + String.format("%.2fx", (double) sequentialTime / parallelTime));

        // Demonstrate thread usage in parallel streams
        System.out.println("\nParallel stream thread usage:");
        numbers.parallelStream()
               .limit(10)
               .forEach(n -> System.out.println("Number: " + n + " processed by " + Thread.currentThread().getName()));
        System.out.println();
    }

    /**
     * Demonstrate stream creation methods
     */
    public static void demonstrateStreamCreation() {
        System.out.println("=== STREAM CREATION METHODS ===");

        // From collection
        List<String> list = Arrays.asList("A", "B", "C");
        Stream<String> streamFromList = list.stream();

        // From array
        String[] array = {"X", "Y", "Z"};
        Stream<String> streamFromArray = Arrays.stream(array);

        // Using Stream.of()
        Stream<String> streamOf = Stream.of("P", "Q", "R");

        // Infinite streams
        Stream<Integer> infiniteStream = Stream.iterate(1, n -> n + 1);
        List<Integer> firstTen = infiniteStream.limit(10).collect(Collectors.toList());
        System.out.println("First 10 numbers: " + firstTen);

        // Generate random numbers
        Stream<Double> randoms = Stream.generate(Math::random).limit(5);
        List<Double> randomList = randoms.collect(Collectors.toList());
        System.out.println("Random numbers: " + randomList);

        // From file (conceptual)
        // try (Stream<String> lines = Files.lines(Paths.get("file.txt"))) {
        //     lines.forEach(System.out::println);
        // }

        System.out.println();
    }
}

// ==========================================
// 3. OPTIONAL CLASS
// ==========================================

/**
 * Optional class comprehensive demonstration
 */
class OptionalDemo {

    static class User {
        private String name;
        private Optional<String> email;
        private Optional<Address> address;

        public User(String name, String email, Address address) {
            this.name = name;
            this.email = Optional.ofNullable(email);
            this.address = Optional.ofNullable(address);
        }

        public String getName() { return name; }
        public Optional<String> getEmail() { return email; }
        public Optional<Address> getAddress() { return address; }
    }

    static class Address {
        private String street;
        private String city;
        private Optional<String> postalCode;

        public Address(String street, String city, String postalCode) {
            this.street = street;
            this.city = city;
            this.postalCode = Optional.ofNullable(postalCode);
        }

        public String getStreet() { return street; }
        public String getCity() { return city; }
        public Optional<String> getPostalCode() { return postalCode; }

        @Override
        public String toString() {
            return street + ", " + city + (postalCode.isPresent() ? " " + postalCode.get() : "");
        }
    }

    /**
     * Demonstrate Optional basic operations
     */
    public static void demonstrateOptionalBasics() {
        System.out.println("=== OPTIONAL BASICS ===");

        // Creating Optionals
        Optional<String> present = Optional.of("Hello");
        Optional<String> empty = Optional.empty();
        Optional<String> nullable = Optional.ofNullable(null);

        System.out.println("Present: " + present.isPresent());
        System.out.println("Empty: " + empty.isPresent());
        System.out.println("Nullable: " + nullable.isPresent());

        // Getting values
        System.out.println("Present value: " + present.get());
        System.out.println("Present or default: " + present.orElse("Default"));
        System.out.println("Empty or default: " + empty.orElse("Default"));

        // Using orElseGet (lazy evaluation)
        System.out.println("Empty orElseGet: " + empty.orElseGet(() -> "Computed default"));

        // Using orElseThrow
        try {
            empty.orElseThrow(() -> new RuntimeException("Value not present"));
        } catch (RuntimeException e) {
            System.out.println("Caught exception: " + e.getMessage());
        }

        // Conditional execution
        present.ifPresent(s -> System.out.println("Present value: " + s));
        empty.ifPresent(s -> System.out.println("This won't print"));

        // Filtering and mapping
        Optional<String> filtered = present.filter(s -> s.length() > 3);
        System.out.println("Filtered (length > 3): " + filtered.isPresent());

        Optional<Integer> mapped = present.map(String::length);
        System.out.println("Mapped to length: " + mapped.orElse(-1));
        System.out.println();
    }

    /**
     * Demonstrate Optional with complex objects
     */
    public static void demonstrateOptionalComplex() {
        System.out.println("=== OPTIONAL WITH COMPLEX OBJECTS ===");

        // Create users with varying data completeness
        User user1 = new User("Alice", "alice@example.com",
                            new Address("123 Main St", "Anytown", "12345"));
        User user2 = new User("Bob", null, null);
        User user3 = new User("Charlie", "charlie@example.com",
                            new Address("456 Oak Ave", "Somewhere", null));

        List<User> users = Arrays.asList(user1, user2, user3);

        // Extract emails safely
        System.out.println("User emails:");
        users.forEach(user -> {
            String email = user.getEmail().orElse("No email");
            System.out.println(user.getName() + ": " + email);
        });

        // Get cities safely
        System.out.println("\nUser cities:");
        users.forEach(user -> {
            String city = user.getAddress()
                             .flatMap(Address::getPostalCode)
                             .orElse("No postal code");
            System.out.println(user.getName() + ": " + city);
        });

        // Complex chaining
        System.out.println("\nComplex optional chaining:");
        users.forEach(user -> {
            String result = user.getAddress()
                               .map(Address::getCity)
                               .filter(city -> city.length() > 5)
                               .map(city -> city.toUpperCase())
                               .orElse("Unknown");
            System.out.println(user.getName() + " -> " + result);
        });
        System.out.println();
    }
}

// ==========================================
// 4. NEW DATE/TIME API
// ==========================================

/**
 * Comprehensive Date/Time API demonstration
 */
class DateTimeAPIDemo {

    /**
     * Demonstrate LocalDate, LocalTime, LocalDateTime
     */
    public static void demonstrateLocalDateTime() {
        System.out.println("=== LOCAL DATE/TIME DEMONSTRATION ===");

        // Current date and time
        LocalDate today = LocalDate.now();
        LocalTime now = LocalTime.now();
        LocalDateTime current = LocalDateTime.now();

        System.out.println("Today: " + today);
        System.out.println("Now: " + now);
        System.out.println("Current: " + current);

        // Creating specific dates
        LocalDate birthday = LocalDate.of(1990, 5, 15);
        LocalTime meeting = LocalTime.of(14, 30);
        LocalDateTime event = LocalDateTime.of(2024, 12, 25, 10, 0);

        System.out.println("Birthday: " + birthday);
        System.out.println("Meeting: " + meeting);
        System.out.println("Event: " + event);

        // Date arithmetic
        LocalDate tomorrow = today.plusDays(1);
        LocalDate nextWeek = today.plusWeeks(1);
        LocalDate lastMonth = today.minusMonths(1);

        System.out.println("Tomorrow: " + tomorrow);
        System.out.println("Next week: " + nextWeek);
        System.out.println("Last month: " + lastMonth);

        // Time arithmetic
        LocalTime inTwoHours = now.plusHours(2);
        LocalTime tenMinutesAgo = now.minusMinutes(10);

        System.out.println("In 2 hours: " + inTwoHours);
        System.out.println("10 minutes ago: " + tenMinutesAgo);

        // Getting components
        System.out.println("Year: " + today.getYear());
        System.out.println("Month: " + today.getMonth() + " (" + today.getMonthValue() + ")");
        System.out.println("Day: " + today.getDayOfMonth());
        System.out.println("Day of week: " + today.getDayOfWeek());
        System.out.println("Day of year: " + today.getDayOfYear());
        System.out.println();
    }

    /**
     * Demonstrate formatting and parsing
     */
    public static void demonstrateFormatting() {
        System.out.println("=== DATE/TIME FORMATTING ===");

        LocalDateTime now = LocalDateTime.now();

        // Built-in formatters
        DateTimeFormatter isoFormatter = DateTimeFormatter.ISO_LOCAL_DATE_TIME;
        DateTimeFormatter dateFormatter = DateTimeFormatter.ISO_LOCAL_DATE;
        DateTimeFormatter timeFormatter = DateTimeFormatter.ISO_LOCAL_TIME;

        System.out.println("ISO DateTime: " + now.format(isoFormatter));
        System.out.println("ISO Date: " + now.format(dateFormatter));
        System.out.println("ISO Time: " + now.format(timeFormatter));

        // Custom formatters
        DateTimeFormatter customFormatter = DateTimeFormatter.ofPattern("EEEE, MMMM d, yyyy 'at' h:mm a");
        DateTimeFormatter shortFormatter = DateTimeFormatter.ofPattern("MM/dd/yyyy HH:mm");

        System.out.println("Custom format: " + now.format(customFormatter));
        System.out.println("Short format: " + now.format(shortFormatter));

        // Parsing
        String dateString = "2024-12-25";
        String dateTimeString = "2024-12-25T10:30:00";

        LocalDate parsedDate = LocalDate.parse(dateString);
        LocalDateTime parsedDateTime = LocalDateTime.parse(dateTimeString);

        System.out.println("Parsed date: " + parsedDate);
        System.out.println("Parsed datetime: " + parsedDateTime);

        // Parsing with custom format
        String customDateString = "December 25, 2024";
        DateTimeFormatter customParseFormatter = DateTimeFormatter.ofPattern("MMMM d, yyyy");
        LocalDate parsedCustom = LocalDate.parse(customDateString, customParseFormatter);
        System.out.println("Parsed custom: " + parsedCustom);
        System.out.println();
    }

    /**
     * Demonstrate ZonedDateTime and time zones
     */
    public static void demonstrateTimeZones() {
        System.out.println("=== TIME ZONES DEMONSTRATION ===");

        // Current time in different zones
        ZonedDateTime utc = ZonedDateTime.now(ZoneId.of("UTC"));
        ZonedDateTime ny = ZonedDateTime.now(ZoneId.of("America/New_York"));
        ZonedDateTime london = ZonedDateTime.now(ZoneId.of("Europe/London"));
        ZonedDateTime tokyo = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));

        System.out.println("UTC: " + utc);
        System.out.println("New York: " + ny);
        System.out.println("London: " + london);
        System.out.println("Tokyo: " + tokyo);

        // Converting between zones
        ZonedDateTime nyTime = utc.withZoneSameInstant(ZoneId.of("America/New_York"));
        System.out.println("UTC converted to NY: " + nyTime);

        // Available zone IDs
        Set<String> zoneIds = ZoneId.getAvailableZoneIds();
        System.out.println("Available time zones: " + zoneIds.size());
        System.out.println("Sample zones: " +
                          zoneIds.stream().limit(5).collect(Collectors.joining(", ")));

        // OffsetDateTime
        OffsetDateTime offsetTime = OffsetDateTime.now();
        System.out.println("Offset time: " + offsetTime);
        System.out.println();
    }

    /**
     * Demonstrate Period and Duration
     */
    public static void demonstratePeriodDuration() {
        System.out.println("=== PERIOD AND DURATION ===");

        LocalDate startDate = LocalDate.of(2024, 1, 1);
        LocalDate endDate = LocalDate.of(2024, 12, 31);

        Period period = Period.between(startDate, endDate);
        System.out.println("Period between dates: " + period);
        System.out.println("Years: " + period.getYears() + ", Months: " + period.getMonths() +
                         ", Days: " + period.getDays());

        LocalTime startTime = LocalTime.of(9, 0);
        LocalTime endTime = LocalTime.of(17, 30);

        Duration duration = Duration.between(startTime, endTime);
        System.out.println("Duration between times: " + duration);
        System.out.println("Hours: " + duration.toHours() + ", Minutes: " + duration.toMinutes());

        // Adding periods and durations
        LocalDate futureDate = startDate.plus(period);
        LocalTime futureTime = startTime.plus(duration);

        System.out.println("Start date + period: " + futureDate);
        System.out.println("Start time + duration: " + futureTime);
        System.out.println();
    }
}

// ==========================================
// 5. RECORDS AND SEALED CLASSES (JAVA 14/15+)
// ==========================================

/**
 * Records demonstration (Java 14+)
 */
class RecordsDemo {

    // Simple record
    record Person(String name, int age) {}

    // Record with custom methods
    record Employee(String name, int age, String department, double salary) {
        // Custom constructor
        public Employee(String name, int age, String department) {
            this(name, age, department, 50000.0);
        }

        // Custom method
        public boolean isHighEarner() {
            return salary > 100000;
        }
    }

    // Record with validation
    record Point(int x, int y) {
        public Point {
            if (x < 0 || y < 0) {
                throw new IllegalArgumentException("Coordinates must be non-negative");
            }
        }

        // Computed property
        public double distanceFromOrigin() {
            return Math.sqrt(x * x + y * y);
        }
    }

    /**
     * Demonstrate records
     */
    public static void demonstrateRecords() {
        System.out.println("=== RECORDS DEMONSTRATION ===");

        Person person = new Person("Alice", 30);
        System.out.println("Person: " + person);
        System.out.println("Name: " + person.name());
        System.out.println("Age: " + person.age());

        Employee emp1 = new Employee("Bob", 35, "Engineering", 95000);
        Employee emp2 = new Employee("Charlie", 28, "Design"); // Uses custom constructor

        System.out.println("Employee 1: " + emp1);
        System.out.println("Employee 2: " + emp2);
        System.out.println("Bob is high earner: " + emp1.isHighEarner());
        System.out.println("Charlie is high earner: " + emp2.isHighEarner());

        Point point = new Point(3, 4);
        System.out.println("Point: " + point);
        System.out.println("Distance from origin: " + point.distanceFromOrigin());

        // Records are immutable
        // person.age = 31; // This would not compile

        // Equality based on components
        Person person2 = new Person("Alice", 30);
        System.out.println("Persons equal: " + person.equals(person2));
        System.out.println();
    }
}

// ==========================================
// 6. COMPLETABLE FUTURE (ASYNC PROGRAMMING)
// ==========================================

/**
 * CompletableFuture demonstration
 */
class CompletableFutureDemo {

    /**
     * Simulate async operation
     */
    private static String fetchData(String source) {
        try {
            Thread.sleep(1000); // Simulate network delay
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        }
        return "Data from " + source;
    }

    /**
     * Demonstrate basic CompletableFuture
     */
    public static void demonstrateBasicCompletableFuture() {
        System.out.println("=== BASIC COMPLETABLE FUTURE ===");

        // Create and run async task
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() ->
            fetchData("Database"));

        // Process result when ready
        future.thenAccept(result -> System.out.println("Received: " + result));

        // Wait for completion
        try {
            String result = future.get();
            System.out.println("Final result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * Demonstrate chaining operations
     */
    public static void demonstrateChaining() {
        System.out.println("=== COMPLETABLE FUTURE CHAINING ===");

        CompletableFuture<String> future = CompletableFuture
            .supplyAsync(() -> fetchData("API 1"))
            .thenApply(data -> data.toUpperCase())
            .thenApply(data -> "Processed: " + data)
            .thenApply(data -> data + " (length: " + data.length() + ")");

        try {
            String result = future.get();
            System.out.println("Chained result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * Demonstrate combining multiple futures
     */
    public static void demonstrateCombining() {
        System.out.println("=== COMPLETABLE FUTURE COMBINING ===");

        CompletableFuture<String> future1 = CompletableFuture.supplyAsync(() ->
            fetchData("Service A"));
        CompletableFuture<String> future2 = CompletableFuture.supplyAsync(() ->
            fetchData("Service B"));

        // Combine results
        CompletableFuture<String> combined = future1.thenCombine(future2,
            (result1, result2) -> "Combined: " + result1 + " + " + result2);

        try {
            String result = combined.get();
            System.out.println("Combined result: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }

        // Wait for any to complete
        CompletableFuture<Object> anyFuture = CompletableFuture.anyOf(future1, future2);
        try {
            Object firstResult = anyFuture.get();
            System.out.println("First completed: " + firstResult);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println();
    }

    /**
     * Demonstrate error handling
     */
    public static void demonstrateErrorHandling() {
        System.out.println("=== ERROR HANDLING ===");

        CompletableFuture<String> future = CompletableFuture
            .supplyAsync(() -> {
                if (Math.random() > 0.5) {
                    throw new RuntimeException("Random failure");
                }
                return fetchData("Unreliable Service");
            })
            .exceptionally(ex -> "Fallback data (error: " + ex.getMessage() + ")")
            .thenApply(result -> "Processed: " + result);

        try {
            String result = future.get();
            System.out.println("Result with error handling: " + result);
        } catch (InterruptedException | ExecutionException e) {
            e.printStackTrace();
        }
        System.out.println();
    }
}

// ==========================================
// MAIN METHOD - DEMONSTRATE ALL FEATURES
// ==========================================

public class ModernJavaFeaturesComplete {
    public static void main(String[] args) {
        System.out.println("==========================================");
        System.out.println("     MODERN JAVA FEATURES COMPLETE");
        System.out.println("==========================================\n");

        // Lambda Expressions
        LambdaExpressions.demonstrateLambdas();
        LambdaExpressions.demonstrateMethodReferences();

        // Streams API
        StreamsAPIDemo.demonstrateBasicStreams();
        StreamsAPIDemo.demonstrateAdvancedStreams();
        StreamsAPIDemo.demonstrateParallelStreams();
        StreamsAPIDemo.demonstrateStreamCreation();

        // Optional Class
        OptionalDemo.demonstrateOptionalBasics();
        OptionalDemo.demonstrateOptionalComplex();

        // Date/Time API
        DateTimeAPIDemo.demonstrateLocalDateTime();
        DateTimeAPIDemo.demonstrateFormatting();
        DateTimeAPIDemo.demonstrateTimeZones();
        DateTimeAPIDemo.demonstratePeriodDuration();

        // Records (Java 14+)
        try {
            RecordsDemo.demonstrateRecords();
        } catch (Exception e) {
            System.out.println("Records not available in this Java version: " + e.getMessage());
        }

        // CompletableFuture
        CompletableFutureDemo.demonstrateBasicCompletableFuture();
        CompletableFutureDemo.demonstrateChaining();
        CompletableFutureDemo.demonstrateCombining();
        CompletableFutureDemo.demonstrateErrorHandling();

        System.out.println("==========================================");
        System.out.println("     ALL MODERN FEATURES DEMONSTRATED");
        System.out.println("==========================================");
    }
}

/*
 * COMPILATION AND RUNNING INSTRUCTIONS:
 * ====================================
 *
 * 1. Save this file as: ModernJavaFeaturesComplete.java
 * 2. Compile: javac ModernJavaFeaturesComplete.java
 * 3. Run: java ModernJavaFeaturesComplete
 *
 * REQUIREMENTS:
 * ============
 * - Java 8+ for basic features (streams, lambdas, Optional, Date/Time)
 * - Java 14+ for records
 * - Java 9+ for some collection factory methods
 *
 * EXPECTED OUTPUT:
 * ===============
 * The program demonstrates all modern Java features including:
 * - Lambda expressions and method references
 * - Streams API with various operations
 * - Optional class for null safety
 * - New Date/Time API
 * - Records (if Java 14+ available)
 * - CompletableFuture for async programming
 *
 * KEY LEARNING POINTS:
 * ===================
 * 1. Functional Programming:
 *    - Lambda expressions vs anonymous classes
 *    - Method references (static, instance, constructor)
 *    - Functional interfaces (Predicate, Function, Consumer, Supplier)
 *
 * 2. Streams API:
 *    - Intermediate vs terminal operations
 *    - Lazy evaluation
 *    - Parallel streams for performance
 *    - Collectors for result aggregation
 *
 * 3. Optional:
 *    - Avoiding null pointer exceptions
 *    - Fluent API with map, filter, flatMap
 *    - Proper null handling patterns
 *
 * 4. Date/Time API:
 *    - Immutable date/time classes
 *    - Proper time zone handling
 *    - Formatting and parsing
 *    - Period and Duration for time calculations
 *
 * 5. Records:
 *    - Immutable data classes
 *    - Automatic equals, hashCode, toString
 *    - Pattern matching support
 *
 * INTERVIEW PREPARATION:
 * =====================
 * - What are lambda expressions and when to use them?
 * - Difference between map() and flatMap() in streams?
 * - How does Optional prevent null pointer exceptions?
 * - Why is the new Date/Time API better than java.util.Date?
 * - What are records and how do they differ from classes?
 * - How do parallel streams work?
 * - Explain CompletableFuture and its use cases
 *
 * COMMON INTERVIEW QUESTIONS:
 * ==========================
 * - Convert a list to map using streams
 * - Find maximum/minimum using streams
 * - Handle null values with Optional
 * - Parse and format dates
 * - Implement async operations with CompletableFuture
 * - Use parallel streams for performance
 * - Create records for immutable data
 */