/**
 * Day 10: Streams and Lambda Expressions - Practice Problems
 * 
 * 10 comprehensive problems covering:
 * - Lambda expressions
 * - Functional interfaces
 * - Stream operations (filter, map, flatMap, reduce)
 * - Collectors API
 * - Optional handling
 * - Real-world scenarios
 */

import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class practice_problems {
    public static void main(String[] args) {
        System.out.println("=== Streams & Lambda Practice Problems ===\n");
        
        // Problem 1: Filter and Transform
        System.out.println("Problem 1: Filter even numbers and square them");
        problem1();
        
        // Problem 2: GroupBy and Count
        System.out.println("\nProblem 2: Group employees by department and count");
        problem2();
        
        // Problem 3: FlatMap for Nested Collections
        System.out.println("\nProblem 3: Get all unique skills from employees");
        problem3();
        
        // Problem 4: Find Top N Elements
        System.out.println("\nProblem 4: Find top 3 highest paid employees");
        problem4();
        
        // Problem 5: String Operations
        System.out.println("\nProblem 5: Find longest word in sentences");
        problem5();
        
        // Problem 6: Complex Grouping
        System.out.println("\nProblem 6: Calculate average salary by department and age group");
        problem6();
        
        // Problem 7: Reduce Operations
        System.out.println("\nProblem 7: Calculate total order value with discount");
        problem7();
        
        // Problem 8: Custom Predicate Composition
        System.out.println("\nProblem 8: Filter products with complex criteria");
        problem8();
        
        // Problem 9: Optional and Stream
        System.out.println("\nProblem 9: Find employee with highest salary in department");
        problem9();
        
        // Problem 10: Data Transformation Pipeline
        System.out.println("\nProblem 10: Transform and aggregate transaction data");
        problem10();
    }
    
    // Problem 1: Filter even numbers and square them
    static void problem1() {
        List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        List<Integer> result = numbers.stream()
            .filter(n -> n % 2 == 0)
            .map(n -> n * n)
            .collect(Collectors.toList());
        
        System.out.println("Input: " + numbers);
        System.out.println("Output: " + result);
        System.out.println("Expected: [4, 16, 36, 64, 100]");
    }
    
    // Problem 2: Group employees by department and count
    static void problem2() {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 75000),
            new Employee("Bob", "HR", 60000),
            new Employee("Charlie", "IT", 90000),
            new Employee("David", "Finance", 70000),
            new Employee("Eve", "HR", 80000)
        );
        
        Map<String, Long> result = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.counting()
            ));
        
        System.out.println("Department Count:");
        result.forEach((dept, count) -> System.out.println("  " + dept + ": " + count));
    }
    
    // Problem 3: FlatMap for nested collections
    static void problem3() {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 75000, Arrays.asList("Java", "Python", "SQL")),
            new Employee("Bob", "HR", 60000, Arrays.asList("Excel", "Communication")),
            new Employee("Charlie", "IT", 90000, Arrays.asList("Java", "AWS", "Docker"))
        );
        
        Set<String> allSkills = employees.stream()
            .flatMap(e -> e.getSkills().stream())
            .collect(Collectors.toSet());
        
        System.out.println("All unique skills: " + allSkills);
    }
    
    // Problem 4: Find top 3 highest paid employees
    static void problem4() {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 75000),
            new Employee("Bob", "HR", 60000),
            new Employee("Charlie", "IT", 90000),
            new Employee("David", "Finance", 70000),
            new Employee("Eve", "HR", 80000),
            new Employee("Frank", "IT", 65000)
        );
        
        List<Employee> top3 = employees.stream()
            .sorted(Comparator.comparing(Employee::getSalary).reversed())
            .limit(3)
            .collect(Collectors.toList());
        
        System.out.println("Top 3 Earners:");
        top3.forEach(e -> System.out.println("  " + e.getName() + ": $" + e.getSalary()));
    }
    
    // Problem 5: Find longest word in sentences
    static void problem5() {
        List<String> sentences = Arrays.asList(
            "Java Streams are powerful",
            "Lambda expressions simplify code",
            "Functional programming is elegant"
        );
        
        Optional<String> longestWord = sentences.stream()
            .flatMap(s -> Arrays.stream(s.split(" ")))
            .max(Comparator.comparing(String::length));
        
        System.out.println("Longest word: " + longestWord.orElse("N/A"));
    }
    
    // Problem 6: Calculate average salary by department and age group
    static void problem6() {
        List<EmployeeWithAge> employees = Arrays.asList(
            new EmployeeWithAge("Alice", 30, "IT", 75000),
            new EmployeeWithAge("Bob", 25, "HR", 60000),
            new EmployeeWithAge("Charlie", 35, "IT", 90000),
            new EmployeeWithAge("David", 28, "Finance", 70000),
            new EmployeeWithAge("Eve", 32, "HR", 80000)
        );
        
        Map<String, Map<String, Double>> result = employees.stream()
            .collect(Collectors.groupingBy(
                EmployeeWithAge::getDepartment,
                Collectors.groupingBy(
                    e -> e.getAge() < 30 ? "Junior" : "Senior",
                    Collectors.averagingDouble(EmployeeWithAge::getSalary)
                )
            ));
        
        System.out.println("Average Salary by Department and Age Group:");
        result.forEach((dept, ageMap) -> {
            System.out.println("  " + dept + ":");
            ageMap.forEach((ageGroup, avg) -> 
                System.out.println("    " + ageGroup + ": $" + String.format("%.2f", avg)));
        });
    }
    
    // Problem 7: Calculate total order value with discount
    static void problem7() {
        List<Order> orders = Arrays.asList(
            new Order("ORD001", 100.0, 10),
            new Order("ORD002", 200.0, 15),
            new Order("ORD003", 150.0, 5),
            new Order("ORD004", 300.0, 20)
        );
        
        // Total after applying discounts
        double total = orders.stream()
            .mapToDouble(o -> o.getAmount() * (1 - o.getDiscount() / 100.0))
            .sum();
        
        System.out.println("Total after discounts: $" + String.format("%.2f", total));
    }
    
    // Problem 8: Filter products with complex criteria
    static void problem8() {
        List<Product> products = Arrays.asList(
            new Product("Laptop", 1200.0, "Electronics", 4.5),
            new Product("Mouse", 25.0, "Electronics", 4.0),
            new Product("Desk", 300.0, "Furniture", 4.2),
            new Product("Chair", 200.0, "Furniture", 4.8),
            new Product("Monitor", 400.0, "Electronics", 4.6)
        );
        
        // Complex predicate: Electronics with price > 100 and rating > 4.0
        Predicate<Product> isElectronics = p -> p.getCategory().equals("Electronics");
        Predicate<Product> isPriceAbove100 = p -> p.getPrice() > 100;
        Predicate<Product> isHighRated = p -> p.getRating() > 4.0;
        
        Predicate<Product> complexCriteria = isElectronics
            .and(isPriceAbove100)
            .and(isHighRated);
        
        List<Product> filtered = products.stream()
            .filter(complexCriteria)
            .collect(Collectors.toList());
        
        System.out.println("High-value Electronics:");
        filtered.forEach(p -> System.out.println("  " + p.getName() + 
            " ($" + p.getPrice() + ", Rating: " + p.getRating() + ")"));
    }
    
    // Problem 9: Find employee with highest salary in department
    static void problem9() {
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", "IT", 75000),
            new Employee("Bob", "HR", 60000),
            new Employee("Charlie", "IT", 90000),
            new Employee("David", "Finance", 70000),
            new Employee("Eve", "HR", 80000)
        );
        
        String department = "IT";
        
        Optional<Employee> highestPaid = employees.stream()
            .filter(e -> e.getDepartment().equals(department))
            .max(Comparator.comparing(Employee::getSalary));
        
        highestPaid.ifPresentOrElse(
            e -> System.out.println("Highest paid in " + department + ": " + 
                e.getName() + " ($" + e.getSalary() + ")"),
            () -> System.out.println("No employees in " + department)
        );
    }
    
    // Problem 10: Transform and aggregate transaction data
    static void problem10() {
        List<Transaction> transactions = Arrays.asList(
            new Transaction("Alice", "Debit", 100.0, "2024-01-15"),
            new Transaction("Bob", "Credit", 200.0, "2024-01-16"),
            new Transaction("Alice", "Credit", 150.0, "2024-01-17"),
            new Transaction("Charlie", "Debit", 300.0, "2024-01-18"),
            new Transaction("Bob", "Debit", 50.0, "2024-01-19")
        );
        
        // Calculate net balance per person
        Map<String, Double> balances = transactions.stream()
            .collect(Collectors.groupingBy(
                Transaction::getPerson,
                Collectors.summingDouble(t -> 
                    t.getType().equals("Credit") ? t.getAmount() : -t.getAmount()
                )
            ));
        
        System.out.println("Net Balance by Person:");
        balances.forEach((person, balance) -> 
            System.out.println("  " + person + ": $" + String.format("%.2f", balance)));
        
        // Find total credits and debits
        Map<String, Double> totals = transactions.stream()
            .collect(Collectors.groupingBy(
                Transaction::getType,
                Collectors.summingDouble(Transaction::getAmount)
            ));
        
        System.out.println("\nTotal Credits: $" + totals.get("Credit"));
        System.out.println("Total Debits: $" + totals.get("Debit"));
    }
}

// Helper Classes
class Employee {
    private String name;
    private String department;
    private double salary;
    private List<String> skills;
    
    public Employee(String name, String department, double salary) {
        this(name, department, salary, new ArrayList<>());
    }
    
    public Employee(String name, String department, double salary, List<String> skills) {
        this.name = name;
        this.department = department;
        this.salary = salary;
        this.skills = skills;
    }
    
    public String getName() { return name; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
    public List<String> getSkills() { return skills; }
}

class EmployeeWithAge {
    private String name;
    private int age;
    private String department;
    private double salary;
    
    public EmployeeWithAge(String name, int age, String department, double salary) {
        this.name = name;
        this.age = age;
        this.department = department;
        this.salary = salary;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public String getDepartment() { return department; }
    public double getSalary() { return salary; }
}

class Order {
    private String id;
    private double amount;
    private int discount;
    
    public Order(String id, double amount, int discount) {
        this.id = id;
        this.amount = amount;
        this.discount = discount;
    }
    
    public String getId() { return id; }
    public double getAmount() { return amount; }
    public int getDiscount() { return discount; }
}

class Product {
    private String name;
    private double price;
    private String category;
    private double rating;
    
    public Product(String name, double price, String category, double rating) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.rating = rating;
    }
    
    public String getName() { return name; }
    public double getPrice() { return price; }
    public String getCategory() { return category; }
    public double getRating() { return rating; }
}

class Transaction {
    private String person;
    private String type;
    private double amount;
    private String date;
    
    public Transaction(String person, String type, double amount, String date) {
        this.person = person;
        this.type = type;
        this.amount = amount;
        this.date = date;
    }
    
    public String getPerson() { return person; }
    public String getType() { return type; }
    public double getAmount() { return amount; }
    public String getDate() { return date; }
}

/**
 * Practice Problems Summary:
 * 
 * Problem 1: Filter & Map
 * - Concept: Basic stream operations
 * - Operations: filter(), map(), collect()
 * - Difficulty: Easy
 * 
 * Problem 2: GroupBy & Count
 * - Concept: Grouping with aggregation
 * - Operations: groupingBy(), counting()
 * - Difficulty: Easy
 * 
 * Problem 3: FlatMap
 * - Concept: Flattening nested collections
 * - Operations: flatMap(), collect(toSet())
 * - Difficulty: Medium
 * 
 * Problem 4: Top N Elements
 * - Concept: Sorting and limiting
 * - Operations: sorted(), limit(), collect()
 * - Difficulty: Easy
 * 
 * Problem 5: String Processing
 * - Concept: FlatMap with Optional
 * - Operations: flatMap(), split(), max()
 * - Difficulty: Medium
 * 
 * Problem 6: Multi-level Grouping
 * - Concept: Complex grouping with multiple levels
 * - Operations: groupingBy() nested, averagingDouble()
 * - Difficulty: Hard
 * 
 * Problem 7: Reduce with Calculation
 * - Concept: Mapping and reduction
 * - Operations: mapToDouble(), sum()
 * - Difficulty: Medium
 * 
 * Problem 8: Predicate Composition
 * - Concept: Complex filtering with composed predicates
 * - Operations: Predicate.and(), filter()
 * - Difficulty: Medium
 * 
 * Problem 9: Optional Handling
 * - Concept: Safe value retrieval with Optional
 * - Operations: filter(), max(), ifPresentOrElse()
 * - Difficulty: Medium
 * 
 * Problem 10: Data Transformation
 * - Concept: Complex aggregation with conditional logic
 * - Operations: groupingBy(), summingDouble(), custom mapper
 * - Difficulty: Hard
 * 
 * Key Concepts Practiced:
 * - Lambda expressions
 * - Functional interfaces (Predicate, Function)
 * - Stream operations (filter, map, flatMap, reduce)
 * - Collectors (groupingBy, counting, averaging, summing)
 * - Optional handling
 * - Predicate composition
 * - Method references
 * - Multi-level grouping
 * 
 * Interview Tips:
 * - Practice writing stream pipelines from scratch
 * - Understand when to use flatMap vs map
 * - Know how to compose complex predicates
 * - Be comfortable with multi-level grouping
 * - Understand Optional and safe value handling
 * - Practice time complexity analysis of stream operations
 */
