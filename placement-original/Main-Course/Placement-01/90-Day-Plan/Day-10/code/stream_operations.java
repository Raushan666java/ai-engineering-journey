/**
 * Day 10: Stream Operations Deep Dive
 * 
 * Topics Covered:
 * - filter() - Filtering data
 * - map() - Transforming data
 * - flatMap() - Flattening nested structures
 * - reduce() - Aggregation operations
 * - collect() - Collectors API
 * - Advanced stream patterns
 */

import java.util.*;
import java.util.stream.*;

public class stream_operations {
    public static void main(String[] args) {
        System.out.println("=== Stream Operations Deep Dive ===\n");
        
        // ============ FILTER OPERATIONS ============
        
        // 1. Simple Filter
        System.out.println("1. Simple Filter:");
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        List<Integer> evens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        
        System.out.println("Original: " + numbers);
        System.out.println("Even: " + evens);
        System.out.println();
        
        // 2. Multiple Filters (Chaining)
        System.out.println("2. Chaining Filters:");
        List<Integer> result = numbers.stream()
            .filter(n -> n % 2 == 0)    // Even numbers
            .filter(n -> n > 5)          // Greater than 5
            .filter(n -> n < 10)         // Less than 10
            .collect(Collectors.toList());
        
        System.out.println("Even, >5, <10: " + result);
        System.out.println();
        
        // 3. Filter with Objects
        System.out.println("3. Filter Objects:");
        List<Person> people = Arrays.asList(
            new Person("Alice", 30, "New York"),
            new Person("Bob", 25, "London"),
            new Person("Charlie", 35, "New York"),
            new Person("David", 28, "Paris"),
            new Person("Eve", 32, "London")
        );
        
        List<Person> adults = people.stream()
            .filter(p -> p.getAge() >= 30)
            .collect(Collectors.toList());
        
        List<Person> newYorkers = people.stream()
            .filter(p -> p.getCity().equals("New York"))
            .collect(Collectors.toList());
        
        System.out.println("Adults (>=30):");
        adults.forEach(p -> System.out.println("  " + p));
        System.out.println("New Yorkers:");
        newYorkers.forEach(p -> System.out.println("  " + p));
        System.out.println();
        
        // ============ MAP OPERATIONS ============
        
        // 4. Simple Map
        System.out.println("4. Simple Map:");
        List<Integer> doubled = numbers.stream()
            .map(n -> n * 2)
            .collect(Collectors.toList());
        
        System.out.println("Original: " + numbers);
        System.out.println("Doubled: " + doubled);
        System.out.println();
        
        // 5. Map to Different Type
        System.out.println("5. Map to Different Type:");
        List<String> words = Arrays.asList("java", "python", "javascript");
        
        List<Integer> lengths = words.stream()
            .map(String::length)
            .collect(Collectors.toList());
        
        System.out.println("Words: " + words);
        System.out.println("Lengths: " + lengths);
        System.out.println();
        
        // 6. Map Objects
        System.out.println("6. Map Objects:");
        List<String> names = people.stream()
            .map(Person::getName)
            .collect(Collectors.toList());
        
        List<Integer> ages = people.stream()
            .map(Person::getAge)
            .collect(Collectors.toList());
        
        System.out.println("Names: " + names);
        System.out.println("Ages: " + ages);
        System.out.println();
        
        // 7. Map with Transformation
        System.out.println("7. Map with Transformation:");
        List<PersonDTO> dtos = people.stream()
            .map(p -> new PersonDTO(p.getName().toUpperCase(), p.getAge()))
            .collect(Collectors.toList());
        
        System.out.println("Person DTOs:");
        dtos.forEach(dto -> System.out.println("  " + dto));
        System.out.println();
        
        // ============ FLATMAP OPERATIONS ============
        
        // 8. FlatMap - Flatten List of Lists
        System.out.println("8. FlatMap - Flatten Lists:");
        List<List<Integer>> listOfLists = Arrays.asList(
            Arrays.asList(1, 2, 3),
            Arrays.asList(4, 5, 6),
            Arrays.asList(7, 8, 9)
        );
        
        List<Integer> flattened = listOfLists.stream()
            .flatMap(List::stream)
            .collect(Collectors.toList());
        
        System.out.println("List of lists: " + listOfLists);
        System.out.println("Flattened: " + flattened);
        System.out.println();
        
        // 9. FlatMap - Split Strings
        System.out.println("9. FlatMap - Split Strings:");
        List<String> sentences = Arrays.asList(
            "Hello World",
            "Java Streams",
            "FlatMap Example"
        );
        
        List<String> allWords = sentences.stream()
            .flatMap(sentence -> Arrays.stream(sentence.split(" ")))
            .collect(Collectors.toList());
        
        System.out.println("Sentences: " + sentences);
        System.out.println("All words: " + allWords);
        System.out.println();
        
        // 10. FlatMap with Objects
        System.out.println("10. FlatMap with Objects:");
        List<Department> departments = Arrays.asList(
            new Department("IT", Arrays.asList("Alice", "Bob", "Charlie")),
            new Department("HR", Arrays.asList("David", "Eve")),
            new Department("Sales", Arrays.asList("Frank", "Grace"))
        );
        
        List<String> allEmployees = departments.stream()
            .flatMap(dept -> dept.getEmployees().stream())
            .collect(Collectors.toList());
        
        System.out.println("All employees: " + allEmployees);
        System.out.println();
        
        // ============ REDUCE OPERATIONS ============
        
        // 11. Reduce - Sum
        System.out.println("11. Reduce - Sum:");
        int sum = numbers.stream()
            .reduce(0, (a, b) -> a + b);
        
        int sum2 = numbers.stream()
            .reduce(0, Integer::sum);
        
        System.out.println("Numbers: " + numbers);
        System.out.println("Sum (lambda): " + sum);
        System.out.println("Sum (method ref): " + sum2);
        System.out.println();
        
        // 12. Reduce - Product
        System.out.println("12. Reduce - Product:");
        int product = numbers.stream()
            .reduce(1, (a, b) -> a * b);
        
        System.out.println("Product: " + product);
        System.out.println();
        
        // 13. Reduce - Max/Min
        System.out.println("13. Reduce - Max/Min:");
        Optional<Integer> max = numbers.stream()
            .reduce(Integer::max);
        
        Optional<Integer> min = numbers.stream()
            .reduce(Integer::min);
        
        System.out.println("Max: " + max.orElse(0));
        System.out.println("Min: " + min.orElse(0));
        System.out.println();
        
        // 14. Reduce - String Concatenation
        System.out.println("14. Reduce - String Concatenation:");
        String concatenated = words.stream()
            .reduce("", (a, b) -> a + b);
        
        String withCommas = words.stream()
            .reduce("", (a, b) -> a.isEmpty() ? b : a + ", " + b);
        
        System.out.println("Words: " + words);
        System.out.println("Concatenated: " + concatenated);
        System.out.println("With commas: " + withCommas);
        System.out.println();
        
        // 15. Reduce with Complex Objects
        System.out.println("15. Reduce - Total Salary:");
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 75000),
            new Employee("Bob", 60000),
            new Employee("Charlie", 90000)
        );
        
        double totalSalary = employees.stream()
            .map(Employee::getSalary)
            .reduce(0.0, Double::sum);
        
        System.out.println("Total salary: $" + totalSalary);
        System.out.println();
        
        // ============ COLLECT OPERATIONS ============
        
        // 16. Collect to List/Set
        System.out.println("16. Collect to List/Set:");
        List<Integer> evenList = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toList());
        
        Set<Integer> evenSet = numbers.stream()
            .filter(n -> n % 2 == 0)
            .collect(Collectors.toSet());
        
        System.out.println("Even list: " + evenList);
        System.out.println("Even set: " + evenSet);
        System.out.println();
        
        // 17. Collect to Map
        System.out.println("17. Collect to Map:");
        Map<String, Integer> nameToAge = people.stream()
            .collect(Collectors.toMap(
                Person::getName,
                Person::getAge
            ));
        
        System.out.println("Name to Age map:");
        nameToAge.forEach((name, age) -> System.out.println("  " + name + " -> " + age));
        System.out.println();
        
        // 18. Joining Strings
        System.out.println("18. Joining Strings:");
        String joined = words.stream()
            .collect(Collectors.joining());
        
        String joinedWithComma = words.stream()
            .collect(Collectors.joining(", "));
        
        String joinedWithDelimiters = words.stream()
            .collect(Collectors.joining(", ", "[", "]"));
        
        System.out.println("Simple join: " + joined);
        System.out.println("With comma: " + joinedWithComma);
        System.out.println("With delimiters: " + joinedWithDelimiters);
        System.out.println();
        
        // ============ COMBINING OPERATIONS ============
        
        // 19. Filter + Map + Collect
        System.out.println("19. Filter + Map + Collect:");
        List<String> adultNames = people.stream()
            .filter(p -> p.getAge() >= 30)
            .map(Person::getName)
            .map(String::toUpperCase)
            .sorted()
            .collect(Collectors.toList());
        
        System.out.println("Adult names (sorted): " + adultNames);
        System.out.println();
        
        // 20. FlatMap + Filter + Map
        System.out.println("20. FlatMap + Filter + Map:");
        List<String> longWords = sentences.stream()
            .flatMap(s -> Arrays.stream(s.split(" ")))
            .filter(w -> w.length() > 4)
            .map(String::toLowerCase)
            .distinct()
            .collect(Collectors.toList());
        
        System.out.println("Long words (>4 chars): " + longWords);
        System.out.println();
        
        // 21. Complex Pipeline
        System.out.println("21. Complex Pipeline:");
        
        // Calculate average age of people in each city
        Map<String, Double> avgAgeByCity = people.stream()
            .collect(Collectors.groupingBy(
                Person::getCity,
                Collectors.averagingInt(Person::getAge)
            ));
        
        System.out.println("Average age by city:");
        avgAgeByCity.forEach((city, avg) -> 
            System.out.println("  " + city + ": " + avg));
        System.out.println();
        
        // 22. Parallel Stream Operations
        System.out.println("22. Parallel Stream:");
        List<Integer> largeList = IntStream.rangeClosed(1, 1000000)
            .boxed()
            .collect(Collectors.toList());
        
        long start = System.currentTimeMillis();
        long count = largeList.parallelStream()
            .filter(n -> n % 2 == 0)
            .count();
        long end = System.currentTimeMillis();
        
        System.out.println("Even numbers count: " + count);
        System.out.println("Time: " + (end - start) + "ms");
        System.out.println();
        
        // 23. Practical Example - Data Processing
        System.out.println("23. Practical Data Processing:");
        
        List<Order> orders = Arrays.asList(
            new Order("ORD001", 100.0, "Pending"),
            new Order("ORD002", 200.0, "Completed"),
            new Order("ORD003", 150.0, "Completed"),
            new Order("ORD004", 300.0, "Pending"),
            new Order("ORD005", 250.0, "Completed")
        );
        
        // Total value of completed orders
        double completedTotal = orders.stream()
            .filter(o -> o.getStatus().equals("Completed"))
            .mapToDouble(Order::getAmount)
            .sum();
        
        // Order IDs of pending orders
        List<String> pendingIds = orders.stream()
            .filter(o -> o.getStatus().equals("Pending"))
            .map(Order::getId)
            .collect(Collectors.toList());
        
        System.out.println("Completed orders total: $" + completedTotal);
        System.out.println("Pending order IDs: " + pendingIds);
        
        System.out.println("\n=== Stream Operations Complete ===");
    }
}

// Helper classes
class Person {
    private String name;
    private int age;
    private String city;
    
    public Person(String name, int age, String city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getCity() { return city; }
    
    @Override
    public String toString() {
        return name + " (" + age + ", " + city + ")";
    }
}

class PersonDTO {
    private String name;
    private int age;
    
    public PersonDTO(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    @Override
    public String toString() {
        return name + " (" + age + ")";
    }
}

class Department {
    private String name;
    private List<String> employees;
    
    public Department(String name, List<String> employees) {
        this.name = name;
        this.employees = employees;
    }
    
    public String getName() { return name; }
    public List<String> getEmployees() { return employees; }
}

class Employee {
    private String name;
    private double salary;
    
    public Employee(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }
    
    public String getName() { return name; }
    public double getSalary() { return salary; }
}

class Order {
    private String id;
    private double amount;
    private String status;
    
    public Order(String id, double amount, String status) {
        this.id = id;
        this.amount = amount;
        this.status = status;
    }
    
    public String getId() { return id; }
    public double getAmount() { return amount; }
    public String getStatus() { return status; }
}

/**
 * Operation Summary:
 * 
 * FILTER:
 * - Selects elements based on predicate
 * - Returns: Stream<T>
 * - Example: filter(n -> n % 2 == 0)
 * 
 * MAP:
 * - Transforms elements one-to-one
 * - Returns: Stream<R>
 * - Example: map(String::length)
 * 
 * FLATMAP:
 * - Transforms elements one-to-many and flattens
 * - Returns: Stream<R>
 * - Example: flatMap(List::stream)
 * 
 * REDUCE:
 * - Combines elements into single result
 * - Returns: T or Optional<T>
 * - Example: reduce(0, Integer::sum)
 * 
 * COLLECT:
 * - Accumulates elements into collection
 * - Returns: Collection
 * - Example: collect(Collectors.toList())
 * 
 * Performance Tips:
 * - Filter early to reduce elements processed
 * - Use primitive streams (IntStream) to avoid boxing
 * - Parallel streams for CPU-intensive operations on large data
 * - Avoid stateful operations in parallel streams
 * 
 * Common Patterns:
 * 1. Filter-Map-Collect: Select, transform, accumulate
 * 2. FlatMap-Filter: Flatten nested structures, then filter
 * 3. Map-Reduce: Transform then aggregate
 * 4. GroupBy: Collect with grouping
 * 5. Partition: Split into two groups
 */
