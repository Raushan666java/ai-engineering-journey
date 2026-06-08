/**
 * Day 10: Collectors API Deep Dive
 * 
 * Topics Covered:
 * - Basic Collectors (toList, toSet, toMap)
 * - Joining Collectors
 * - Grouping Collectors (groupingBy)
 * - Partitioning Collectors (partitioningBy)
 * - Statistical Collectors (counting, averaging, summarizing)
 * - Custom Collectors
 * - Downstream Collectors
 */

import java.util.*;
import java.util.stream.*;
import java.util.function.*;

public class collectors_demo {
    public static void main(String[] args) {
        System.out.println("=== Collectors API Deep Dive ===\n");
        
        // Sample data
        List<Employee> employees = Arrays.asList(
            new Employee("Alice", 30, 75000, "IT"),
            new Employee("Bob", 25, 60000, "HR"),
            new Employee("Charlie", 35, 90000, "IT"),
            new Employee("David", 28, 70000, "Finance"),
            new Employee("Eve", 32, 80000, "HR"),
            new Employee("Frank", 29, 65000, "IT"),
            new Employee("Grace", 33, 85000, "Finance")
        );
        
        // ============ BASIC COLLECTORS ============
        
        // 1. toList(), toSet()
        System.out.println("1. Basic Collection Collectors:");
        
        List<String> namesList = employees.stream()
            .map(Employee::getName)
            .collect(Collectors.toList());
        
        Set<String> departments = employees.stream()
            .map(Employee::getDepartment)
            .collect(Collectors.toSet());
        
        System.out.println("Names (List): " + namesList);
        System.out.println("Departments (Set): " + departments);
        System.out.println();
        
        // 2. toMap()
        System.out.println("2. toMap Collector:");
        
        Map<String, Integer> nameToAge = employees.stream()
            .collect(Collectors.toMap(
                Employee::getName,
                Employee::getAge
            ));
        
        System.out.println("Name to Age:");
        nameToAge.forEach((name, age) -> System.out.println("  " + name + " -> " + age));
        System.out.println();
        
        // 3. toMap with Duplicate Key Handling
        System.out.println("3. toMap with Duplicate Key Handling:");
        
        // Map department to highest salary
        Map<String, Double> deptToMaxSalary = employees.stream()
            .collect(Collectors.toMap(
                Employee::getDepartment,
                Employee::getSalary,
                Double::max  // Merge function for duplicate keys
            ));
        
        System.out.println("Department to Max Salary:");
        deptToMaxSalary.forEach((dept, salary) -> 
            System.out.println("  " + dept + " -> $" + salary));
        System.out.println();
        
        // 4. toMap with TreeMap
        System.out.println("4. toMap with TreeMap (sorted):");
        
        Map<String, Integer> sortedNameToAge = employees.stream()
            .collect(Collectors.toMap(
                Employee::getName,
                Employee::getAge,
                (a, b) -> a,
                TreeMap::new  // Specify map implementation
            ));
        
        System.out.println("Sorted Name to Age:");
        sortedNameToAge.forEach((name, age) -> System.out.println("  " + name + " -> " + age));
        System.out.println();
        
        // ============ JOINING COLLECTORS ============
        
        // 5. joining()
        System.out.println("5. Joining Strings:");
        
        String joined = employees.stream()
            .map(Employee::getName)
            .collect(Collectors.joining());
        
        String joinedComma = employees.stream()
            .map(Employee::getName)
            .collect(Collectors.joining(", "));
        
        String joinedDelimited = employees.stream()
            .map(Employee::getName)
            .collect(Collectors.joining(", ", "[", "]"));
        
        System.out.println("Simple join: " + joined);
        System.out.println("With comma: " + joinedComma);
        System.out.println("With delimiters: " + joinedDelimited);
        System.out.println();
        
        // ============ GROUPING COLLECTORS ============
        
        // 6. groupingBy - Simple Grouping
        System.out.println("6. groupingBy - Simple Grouping:");
        
        Map<String, List<Employee>> byDepartment = employees.stream()
            .collect(Collectors.groupingBy(Employee::getDepartment));
        
        System.out.println("Employees by Department:");
        byDepartment.forEach((dept, emps) -> {
            System.out.println("  " + dept + ":");
            emps.forEach(e -> System.out.println("    " + e.getName()));
        });
        System.out.println();
        
        // 7. groupingBy with Counting
        System.out.println("7. groupingBy with Counting:");
        
        Map<String, Long> countByDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.counting()
            ));
        
        System.out.println("Employee count by Department:");
        countByDept.forEach((dept, count) -> 
            System.out.println("  " + dept + ": " + count));
        System.out.println();
        
        // 8. groupingBy with Mapping
        System.out.println("8. groupingBy with Mapping:");
        
        Map<String, List<String>> namesByDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.mapping(Employee::getName, Collectors.toList())
            ));
        
        System.out.println("Names by Department:");
        namesByDept.forEach((dept, names) -> 
            System.out.println("  " + dept + ": " + names));
        System.out.println();
        
        // 9. groupingBy with Averaging
        System.out.println("9. groupingBy with Averaging:");
        
        Map<String, Double> avgSalaryByDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.averagingDouble(Employee::getSalary)
            ));
        
        System.out.println("Average Salary by Department:");
        avgSalaryByDept.forEach((dept, avg) -> 
            System.out.println("  " + dept + ": $" + String.format("%.2f", avg)));
        System.out.println();
        
        // 10. groupingBy with Summing
        System.out.println("10. groupingBy with Summing:");
        
        Map<String, Double> totalSalaryByDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.summingDouble(Employee::getSalary)
            ));
        
        System.out.println("Total Salary by Department:");
        totalSalaryByDept.forEach((dept, total) -> 
            System.out.println("  " + dept + ": $" + total));
        System.out.println();
        
        // 11. groupingBy with Max/Min
        System.out.println("11. groupingBy with Max:");
        
        Map<String, Optional<Employee>> highestPaidByDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.maxBy(Comparator.comparing(Employee::getSalary))
            ));
        
        System.out.println("Highest Paid by Department:");
        highestPaidByDept.forEach((dept, emp) -> 
            System.out.println("  " + dept + ": " + emp.map(Employee::getName).orElse("N/A")));
        System.out.println();
        
        // 12. Multi-level Grouping
        System.out.println("12. Multi-level Grouping:");
        
        // Group by department, then by age range
        Map<String, Map<String, List<Employee>>> multiLevel = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.groupingBy(e -> e.getAge() < 30 ? "Young" : "Senior")
            ));
        
        System.out.println("Multi-level Grouping (Dept -> Age Group):");
        multiLevel.forEach((dept, ageMap) -> {
            System.out.println("  " + dept + ":");
            ageMap.forEach((ageGroup, emps) -> {
                System.out.println("    " + ageGroup + ": " + 
                    emps.stream().map(Employee::getName).collect(Collectors.joining(", ")));
            });
        });
        System.out.println();
        
        // ============ PARTITIONING COLLECTORS ============
        
        // 13. partitioningBy - Boolean Classification
        System.out.println("13. partitioningBy:");
        
        Map<Boolean, List<Employee>> partitionByAge = employees.stream()
            .collect(Collectors.partitioningBy(e -> e.getAge() >= 30));
        
        System.out.println("Partition by Age (>=30):");
        System.out.println("  Seniors: " + partitionByAge.get(true).stream()
            .map(Employee::getName).collect(Collectors.joining(", ")));
        System.out.println("  Juniors: " + partitionByAge.get(false).stream()
            .map(Employee::getName).collect(Collectors.joining(", ")));
        System.out.println();
        
        // 14. partitioningBy with Downstream
        System.out.println("14. partitioningBy with Downstream:");
        
        Map<Boolean, Long> partitionCount = employees.stream()
            .collect(Collectors.partitioningBy(
                e -> e.getSalary() > 70000,
                Collectors.counting()
            ));
        
        System.out.println("High Salary (>70k) Count: " + partitionCount.get(true));
        System.out.println("Low Salary (<=70k) Count: " + partitionCount.get(false));
        System.out.println();
        
        // ============ STATISTICAL COLLECTORS ============
        
        // 15. counting()
        System.out.println("15. counting():");
        
        long totalEmployees = employees.stream()
            .collect(Collectors.counting());
        
        System.out.println("Total Employees: " + totalEmployees);
        System.out.println();
        
        // 16. summarizingInt/Double
        System.out.println("16. summarizingDouble:");
        
        DoubleSummaryStatistics salaryStats = employees.stream()
            .collect(Collectors.summarizingDouble(Employee::getSalary));
        
        System.out.println("Salary Statistics:");
        System.out.println("  Count: " + salaryStats.getCount());
        System.out.println("  Sum: $" + salaryStats.getSum());
        System.out.println("  Min: $" + salaryStats.getMin());
        System.out.println("  Max: $" + salaryStats.getMax());
        System.out.println("  Average: $" + String.format("%.2f", salaryStats.getAverage()));
        System.out.println();
        
        // 17. minBy, maxBy
        System.out.println("17. minBy, maxBy:");
        
        Optional<Employee> youngest = employees.stream()
            .collect(Collectors.minBy(Comparator.comparing(Employee::getAge)));
        
        Optional<Employee> oldest = employees.stream()
            .collect(Collectors.maxBy(Comparator.comparing(Employee::getAge)));
        
        System.out.println("Youngest: " + youngest.map(Employee::getName).orElse("N/A"));
        System.out.println("Oldest: " + oldest.map(Employee::getName).orElse("N/A"));
        System.out.println();
        
        // ============ ADVANCED PATTERNS ============
        
        // 18. Collecting and Then
        System.out.println("18. collectingAndThen:");
        
        List<Employee> topEarners = employees.stream()
            .collect(Collectors.collectingAndThen(
                Collectors.toList(),
                list -> {
                    list.sort(Comparator.comparing(Employee::getSalary).reversed());
                    return list.subList(0, Math.min(3, list.size()));
                }
            ));
        
        System.out.println("Top 3 Earners:");
        topEarners.forEach(e -> System.out.println("  " + e.getName() + ": $" + e.getSalary()));
        System.out.println();
        
        // 19. filtering Collector (Java 9+)
        System.out.println("19. filtering Collector:");
        
        Map<String, List<Employee>> seniorsByDept = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.filtering(
                    e -> e.getAge() >= 30,
                    Collectors.toList()
                )
            ));
        
        System.out.println("Senior Employees (>=30) by Department:");
        seniorsByDept.forEach((dept, emps) -> 
            System.out.println("  " + dept + ": " + 
                emps.stream().map(Employee::getName).collect(Collectors.joining(", "))));
        System.out.println();
        
        // 20. flatMapping Collector (Java 9+)
        System.out.println("20. flatMapping Collector:");
        
        List<Student> students = Arrays.asList(
            new Student("Alice", Arrays.asList("Math", "Physics")),
            new Student("Bob", Arrays.asList("Math", "Chemistry")),
            new Student("Charlie", Arrays.asList("Physics", "Biology"))
        );
        
        Set<String> allSubjects = students.stream()
            .collect(Collectors.flatMapping(
                s -> s.getSubjects().stream(),
                Collectors.toSet()
            ));
        
        System.out.println("All Subjects: " + allSubjects);
        System.out.println();
        
        // 21. teeing Collector (Java 12+) - Simulate with custom approach
        System.out.println("21. Multiple Statistics:");
        
        // Calculate both average and max salary
        Map<String, Object> stats = new HashMap<>();
        double avgSalary = employees.stream()
            .collect(Collectors.averagingDouble(Employee::getSalary));
        double maxSalary = employees.stream()
            .mapToDouble(Employee::getSalary)
            .max()
            .orElse(0);
        
        System.out.println("Average Salary: $" + String.format("%.2f", avgSalary));
        System.out.println("Max Salary: $" + maxSalary);
        System.out.println();
        
        // ============ PRACTICAL EXAMPLES ============
        
        // 22. Complex Report Generation
        System.out.println("22. Department Report:");
        
        Map<String, DepartmentSummary> deptSummaries = employees.stream()
            .collect(Collectors.groupingBy(
                Employee::getDepartment,
                Collectors.collectingAndThen(
                    Collectors.toList(),
                    list -> new DepartmentSummary(
                        list.size(),
                        list.stream().mapToDouble(Employee::getSalary).average().orElse(0),
                        list.stream().mapToDouble(Employee::getSalary).sum()
                    )
                )
            ));
        
        System.out.println("Department Summaries:");
        deptSummaries.forEach((dept, summary) -> {
            System.out.println("  " + dept + ":");
            System.out.println("    Employees: " + summary.getCount());
            System.out.println("    Avg Salary: $" + String.format("%.2f", summary.getAvgSalary()));
            System.out.println("    Total Salary: $" + summary.getTotalSalary());
        });
        
        System.out.println("\n=== Collectors Demo Complete ===");
    }
}

// Helper classes
class Employee {
    private String name;
    private int age;
    private double salary;
    private String department;
    
    public Employee(String name, int age, double salary, String department) {
        this.name = name;
        this.age = age;
        this.salary = salary;
        this.department = department;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    public double getSalary() { return salary; }
    public String getDepartment() { return department; }
    
    @Override
    public String toString() {
        return name + " (" + age + ", $" + salary + ", " + department + ")";
    }
}

class Student {
    private String name;
    private List<String> subjects;
    
    public Student(String name, List<String> subjects) {
        this.name = name;
        this.subjects = subjects;
    }
    
    public String getName() { return name; }
    public List<String> getSubjects() { return subjects; }
}

class DepartmentSummary {
    private int count;
    private double avgSalary;
    private double totalSalary;
    
    public DepartmentSummary(int count, double avgSalary, double totalSalary) {
        this.count = count;
        this.avgSalary = avgSalary;
        this.totalSalary = totalSalary;
    }
    
    public int getCount() { return count; }
    public double getAvgSalary() { return avgSalary; }
    public double getTotalSalary() { return totalSalary; }
}

/**
 * Collectors API Summary:
 * 
 * BASIC COLLECTORS:
 * - toList() - Collect to ArrayList
 * - toSet() - Collect to HashSet
 * - toMap(keyMapper, valueMapper) - Collect to HashMap
 * - toMap(keyMapper, valueMapper, mergeFunction) - Handle duplicates
 * - toMap(keyMapper, valueMapper, mergeFunction, mapSupplier) - Custom Map
 * 
 * STRING COLLECTORS:
 * - joining() - Concatenate strings
 * - joining(delimiter) - Join with delimiter
 * - joining(delimiter, prefix, suffix) - Join with delimiters
 * 
 * GROUPING COLLECTORS:
 * - groupingBy(classifier) - Group into Map<K, List<T>>
 * - groupingBy(classifier, downstream) - Group with downstream collector
 * - groupingBy(classifier, mapFactory, downstream) - Custom Map type
 * 
 * PARTITIONING COLLECTORS:
 * - partitioningBy(predicate) - Split into Map<Boolean, List<T>>
 * - partitioningBy(predicate, downstream) - With downstream collector
 * 
 * STATISTICAL COLLECTORS:
 * - counting() - Count elements
 * - summingInt/Long/Double(mapper) - Sum values
 * - averagingInt/Long/Double(mapper) - Average values
 * - summarizingInt/Long/Double(mapper) - Full statistics
 * - minBy(comparator) - Minimum element
 * - maxBy(comparator) - Maximum element
 * 
 * ADVANCED COLLECTORS:
 * - mapping(mapper, downstream) - Map then collect
 * - filtering(predicate, downstream) - Filter then collect
 * - flatMapping(mapper, downstream) - FlatMap then collect
 * - collectingAndThen(downstream, finisher) - Post-process result
 * - reducing(identity, mapper, op) - Reduce with mapping
 * 
 * Common Patterns:
 * 1. Group and Count: groupingBy(classifier, counting())
 * 2. Group and Sum: groupingBy(classifier, summingDouble(mapper))
 * 3. Group and Average: groupingBy(classifier, averagingDouble(mapper))
 * 4. Group and Collect Names: groupingBy(classifier, mapping(mapper, toList()))
 * 5. Partition and Count: partitioningBy(predicate, counting())
 * 
 * Interview Tips:
 * - Know difference between groupingBy and partitioningBy
 * - Understand downstream collectors
 * - Be able to create multi-level groupings
 * - Know when to use toMap merge function
 * - Understand collectingAndThen for post-processing
 */
