# 🚀 **DAY 5: PATTERN MATCHING & JAVA INHERITANCE**
## Complete Study Plan for Day 5 of 90-Day Placement Preparation

---

## 📅 **DAY 5 OVERVIEW**
**Date**: December 5, 2025  
**Focus**: KMP Algorithm + Inheritance & Polymorphism  
**Total Study Time**: 9 hours  
**Target**: Master pattern matching and OOP principles  

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: DSA - Pattern Matching (KMP) (1.5 hours)**

####  **Learning Objectives**
- Understand naive pattern matching limitations
- Learn KMP (Knuth-Morris-Pratt) algorithm
- Build LPS (Longest Prefix Suffix) array
- Optimize pattern searching from O(mn) to O(m+n)

#### **Study Resources**
- **GeeksforGeeks**: [KMP Algorithm](https://www.geeksforgeeks.org/kmp-algorithm-for-pattern-searching/)
- **Video**: [Abdul Bari KMP](https://www.youtube.com/watch?v=V5-7GzOfADQ) (30 min)
- **Video**: [Tushar Roy KMP](https://www.youtube.com/watch?v=GTJr8OvyEVQ) (15 min)

**📝 Key Concepts:**
```
✅ Naive Approach: O(m×n)
   - Check pattern at every position
   - Restart from next position on mismatch
   
✅ KMP Algorithm: O(m+n)
   - Preprocessing: Build LPS array
   - Searching: Use LPS to avoid redundant comparisons
   
✅ LPS Array:
   - Longest Proper Prefix which is also Suffix
   - Helps skip unnecessary comparisons
   - Time: O(m) where m = pattern length
```

**KMP Implementation:**
```java
class KMP {
    // Build LPS (Longest Prefix Suffix) array
    private static int[] computeLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int len = 0;  // Length of previous longest prefix suffix
        int i = 1;
        
        lps[0] = 0;  // lps[0] is always 0
        
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                len++;
                lps[i] = len;
                i++;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i] = 0;
                    i++;
                }
            }
        }
        return lps;
    }
    
    // KMP Search
    public static List<Integer> search(String text, String pattern) {
        List<Integer> result = new ArrayList<>();
        int n = text.length();
        int m = pattern.length();
        
        // Build LPS array
        int[] lps = computeLPS(pattern);
        
        int i = 0;  // Index for text
        int j = 0;  // Index for pattern
        
        while (i < n) {
            if (pattern.charAt(j) == text.charAt(i)) {
                i++;
                j++;
            }
            
            if (j == m) {
                // Pattern found at index (i - j)
                result.add(i - j);
                j = lps[j - 1];
            } else if (i < n && pattern.charAt(j) != text.charAt(i)) {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        
        return result;
    }
    
    public static void main(String[] args) {
        String text = "ABABDABACDABABCABAB";
        String pattern = "ABABCABAB";
        
        List<Integer> positions = search(text, pattern);
        System.out.println("Pattern found at indices: " + positions);
        
        // Example: LPS array for "ABABCABAB"
        // Pattern: A B A B C A B A B
        // LPS:     0 0 1 2 0 1 2 3 4
    }
}
```

**LPS Array Examples:**
```
Pattern: "AAAA"
LPS:     [0, 1, 2, 3]

Pattern: "ABCDE"
LPS:     [0, 0, 0, 0, 0]

Pattern: "AABAACAABAA"
LPS:     [0, 1, 0, 1, 2, 0, 1, 2, 3, 4, 5]

Pattern: "ABABCABAB"
LPS:     [0, 0, 1, 2, 0, 1, 2, 3, 4]
```

---

### **7:30 AM - 9:00 AM: Java - Inheritance & Polymorphism (1.5 hours)**

#### **1. Inheritance Basics (40 min)**
```java
// Base class (Parent/Super class)
class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age);
    }
}

// Derived class (Child/Sub class)
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    // Method specific to Dog
    public void bark() {
        System.out.println(name + " is barking: Woof!");
    }
    
    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " (Dog) is eating dog food");
    }
    
    @Override
    public void displayInfo() {
        super.displayInfo();  // Call parent method
        System.out.println("Breed: " + breed);
    }
}

class Cat extends Animal {
    private String color;
    
    public Cat(String name, int age, String color) {
        super(name, age);
        this.color = color;
    }
    
    public void meow() {
        System.out.println(name + " is meowing: Meow!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " (Cat) is eating fish");
    }
}

class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        dog.displayInfo();
        dog.eat();
        dog.sleep();
        dog.bark();
        
        Cat cat = new Cat("Whiskers", 2, "Orange");
        cat.displayInfo();
        cat.eat();
        cat.meow();
    }
}
```

#### **2. Types of Inheritance (20 min)**
```java
// Single Inheritance: A → B
class Vehicle {
    void move() {
        System.out.println("Vehicle moves");
    }
}

class Car extends Vehicle {
    void honk() {
        System.out.println("Car honks");
    }
}

// Multilevel Inheritance: A → B → C
class SportsCar extends Car {
    void turboBoost() {
        System.out.println("Turbo activated!");
    }
}

// Hierarchical Inheritance: A → B, A → C
class Bird {
    void eat() {
        System.out.println("Bird eats");
    }
}

class Parrot extends Bird {
    void speak() {
        System.out.println("Parrot speaks");
    }
}

class Sparrow extends Bird {
    void fly() {
        System.out.println("Sparrow flies");
    }
}

// Note: Java doesn't support Multiple Inheritance (class from multiple classes)
// But supports it through Interfaces (covered later)
```

#### **3. Polymorphism (30 min)**
```java
// Compile-time Polymorphism (Method Overloading)
class Calculator {
    // Same method name, different parameters
    public int add(int a, int b) {
        return a + b;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
}

// Runtime Polymorphism (Method Overriding)
class Shape {
    public void draw() {
        System.out.println("Drawing a shape");
    }
    
    public double area() {
        return 0;
    }
}

class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle");
    }
    
    @Override
    public double area() {
        return Math.PI * radius * radius;
    }
}

class Rectangle extends Shape {
    private double length, width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a rectangle");
    }
    
    @Override
    public double area() {
        return length * width;
    }
}

class PolymorphismDemo {
    public static void main(String[] args) {
        // Polymorphic reference
        Shape shape1 = new Circle(5);
        Shape shape2 = new Rectangle(4, 6);
        
        shape1.draw();  // Calls Circle's draw()
        System.out.println("Area: " + shape1.area());
        
        shape2.draw();  // Calls Rectangle's draw()
        System.out.println("Area: " + shape2.area());
        
        // Array of shapes
        Shape[] shapes = {
            new Circle(3),
            new Rectangle(5, 7),
            new Circle(4)
        };
        
        for (Shape shape : shapes) {
            shape.draw();
            System.out.println("Area: " + shape.area());
        }
    }
}
```

---

## 🕑 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 5:00 PM: LeetCode - Advanced String Problems (3 hours)**

#### **Problem 1: Implement strStr() (Find Needle in Haystack)** ⭐ EASY
**LeetCode #28**
- **URL**: https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/
- **Time**: 45 minutes

**Solutions:**
```java
// Naive Approach
class Solution {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        
        int n = haystack.length();
        int m = needle.length();
        
        for (int i = 0; i <= n - m; i++) {
            int j;
            for (j = 0; j < m; j++) {
                if (haystack.charAt(i + j) != needle.charAt(j)) {
                    break;
                }
            }
            if (j == m) return i;
        }
        
        return -1;
    }
}
// Time: O(m×n), Space: O(1)

// KMP Approach (Optimal)
class SolutionKMP {
    public int strStr(String haystack, String needle) {
        if (needle.isEmpty()) return 0;
        
        int n = haystack.length();
        int m = needle.length();
        
        // Build LPS array
        int[] lps = computeLPS(needle);
        
        int i = 0, j = 0;
        while (i < n) {
            if (haystack.charAt(i) == needle.charAt(j)) {
                i++;
                j++;
            }
            
            if (j == m) {
                return i - j;  // Pattern found
            } else if (i < n && haystack.charAt(i) != needle.charAt(j)) {
                if (j != 0) {
                    j = lps[j - 1];
                } else {
                    i++;
                }
            }
        }
        
        return -1;
    }
    
    private int[] computeLPS(String pattern) {
        int m = pattern.length();
        int[] lps = new int[m];
        int len = 0, i = 1;
        
        while (i < m) {
            if (pattern.charAt(i) == pattern.charAt(len)) {
                lps[i++] = ++len;
            } else {
                if (len != 0) {
                    len = lps[len - 1];
                } else {
                    lps[i++] = 0;
                }
            }
        }
        return lps;
    }
}
// Time: O(m+n), Space: O(m)
```

---

#### **Problem 2: Repeated Substring Pattern** ⭐ EASY
**LeetCode #459**
- **URL**: https://leetcode.com/problems/repeated-substring-pattern/
- **Time**: 40 minutes

**Solutions:**
```java
// Approach 1: Check all divisors
class Solution {
    public boolean repeatedSubstringPattern(String s) {
        int n = s.length();
        
        for (int len = 1; len <= n / 2; len++) {
            if (n % len == 0) {
                String pattern = s.substring(0, len);
                StringBuilder sb = new StringBuilder();
                
                int times = n / len;
                for (int i = 0; i < times; i++) {
                    sb.append(pattern);
                }
                
                if (sb.toString().equals(s)) {
                    return true;
                }
            }
        }
        
        return false;
    }
}

// Approach 2: String concatenation trick
class Solution2 {
    public boolean repeatedSubstringPattern(String s) {
        String doubled = s + s;
        String sub = doubled.substring(1, doubled.length() - 1);
        return sub.contains(s);
    }
}
// If s is made of repeated substrings, removing first and last char
// from (s+s) will still contain s

// Example: s = "abcabc"
// doubled = "abcabcabcabc"
// sub = "bcabcabcab" (contains "abcabc")
```

---

#### **Problem 3: String Compression** ⭐⭐ MEDIUM
**LeetCode #443**
- **URL**: https://leetcode.com/problems/string-compression/
- **Time**: 50 minutes

**Solution:**
```java
class Solution {
    public int compress(char[] chars) {
        int write = 0;  // Position to write
        int read = 0;   // Position to read
        
        while (read < chars.length) {
            char current = chars[read];
            int count = 0;
            
            // Count consecutive characters
            while (read < chars.length && chars[read] == current) {
                read++;
                count++;
            }
            
            // Write character
            chars[write++] = current;
            
            // Write count if > 1
            if (count > 1) {
                String countStr = String.valueOf(count);
                for (char c : countStr.toCharArray()) {
                    chars[write++] = c;
                }
            }
        }
        
        return write;
    }
}
// Time: O(n), Space: O(1)

// Example:
// Input: ["a","a","b","b","c","c","c"]
// Output: ["a","2","b","2","c","3"], return 6
```

---

## 🕖 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:00 PM: Theory - DBMS Normalization (1 hour)**

#### **Database Normalization**

**📖 Resources:**
- **GeeksforGeeks**: [Normalization](https://www.geeksforgeeks.org/normal-forms-in-dbms/)
- **Video**: [Normalization Explained](https://www.youtube.com/watch?v=xoTyrdT9SZI)

**Key Concepts:**

**1. Why Normalize? (10 min)**
```
Problems with unnormalized data:
- Data redundancy (repeated data)
- Update anomalies
- Insertion anomalies
- Deletion anomalies

Benefits:
- Eliminates redundancy
- Ensures data integrity
- Reduces storage space
- Easier to maintain
```

**2. First Normal Form (1NF) (15 min)**
```
Rules:
1. Each column contains atomic (indivisible) values
2. Each column contains values of single type
3. Each column has unique name
4. Order doesn't matter

Example - BEFORE 1NF:
StudentID | Name  | Phone
1         | John  | 123, 456
2         | Jane  | 789

AFTER 1NF:
StudentID | Name  | Phone
1         | John  | 123
1         | John  | 456
2         | Jane  | 789
```

**3. Second Normal Form (2NF) (15 min)**
```
Rules:
1. Must be in 1NF
2. No partial dependency (non-key attributes fully dependent on primary key)

Example - BEFORE 2NF (Composite key: StudentID + CourseID):
StudentID | CourseID | StudentName | CourseName | Grade
1         | CS101    | John        | Java       | A
1         | CS102    | John        | Python     | B

Problem: StudentName depends only on StudentID (partial dependency)

AFTER 2NF:
Student Table:
StudentID | StudentName
1         | John

Course Table:
CourseID  | CourseName
CS101     | Java
CS102     | Python

Enrollment Table:
StudentID | CourseID | Grade
1         | CS101    | A
1         | CS102    | B
```

**4. Third Normal Form (3NF) (15 min)**
```
Rules:
1. Must be in 2NF
2. No transitive dependency (non-key attributes depend only on primary key)

Example - BEFORE 3NF:
StudentID | Name | ZipCode | City     | State
1         | John | 12345   | New York | NY

Problem: City and State depend on ZipCode (transitive dependency)

AFTER 3NF:
Student Table:
StudentID | Name | ZipCode
1         | John | 12345

ZipCode Table:
ZipCode | City     | State
12345   | New York | NY
```

**5. BCNF, 4NF, 5NF (Overview) (5 min)**
```
BCNF (Boyce-Codd NF): Stricter version of 3NF
4NF: Removes multi-valued dependencies
5NF: Removes join dependencies

Most applications use up to 3NF in practice.
```

---

### **8:00 PM - 9:30 PM: Project - Backend API Planning (1.5 hours)**

#### **REST API Design for Student Management**

**1. API Endpoints Design (45 min)**
```java
// StudentController.java
import java.util.*;

public class StudentController {
    private StudentManager manager = new StudentManager();
    
    // CREATE - Add new student
    // POST /api/students
    public Response addStudent(Student student) {
        manager.addStudent(student);
        return new Response(201, "Student created successfully", student);
    }
    
    // READ - Get all students
    // GET /api/students
    public Response getAllStudents() {
        List<Student> students = manager.getAllStudents();
        return new Response(200, "Success", students);
    }
    
    // READ - Get student by ID
    // GET /api/students/{id}
    public Response getStudentById(String id) {
        Student student = manager.searchById(id);
        if (student != null) {
            return new Response(200, "Success", student);
        }
        return new Response(404, "Student not found", null);
    }
    
    // UPDATE - Update student
    // PUT /api/students/{id}
    public Response updateStudent(String id, Student updatedStudent) {
        boolean success = manager.updateStudent(id, updatedStudent);
        if (success) {
            return new Response(200, "Student updated", updatedStudent);
        }
        return new Response(404, "Student not found", null);
    }
    
    // DELETE - Delete student
    // DELETE /api/students/{id}
    public Response deleteStudent(String id) {
        boolean success = manager.deleteStudent(id);
        if (success) {
            return new Response(200, "Student deleted", null);
        }
        return new Response(404, "Student not found", null);
    }
    
    // SEARCH - Search students by name
    // GET /api/students/search?name=John
    public Response searchByName(String name) {
        List<Student> results = manager.searchByName(name);
        return new Response(200, "Success", results);
    }
    
    // STATISTICS - Get top performers
    // GET /api/students/top?limit=10
    public Response getTopPerformers(int limit) {
        List<Student> top = manager.getTopPerformers(limit);
        return new Response(200, "Success", top);
    }
}

// Response class
class Response {
    private int statusCode;
    private String message;
    private Object data;
    
    public Response(int statusCode, String message, Object data) {
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
    }
    
    // Getters and toString()
}
```

**2. Enhanced StudentManager (45 min)**
```java
import java.util.*;
import java.util.stream.*;

public class StudentManager {
    private Map<String, Student> students;  // For O(1) lookup
    private List<Student> studentList;      // For ordering
    
    public StudentManager() {
        students = new HashMap<>();
        studentList = new ArrayList<>();
    }
    
    public void addStudent(Student student) {
        students.put(student.getId(), student);
        studentList.add(student);
    }
    
    public Student searchById(String id) {
        return students.get(id);
    }
    
    public List<Student> searchByName(String name) {
        return studentList.stream()
            .filter(s -> s.getName().toLowerCase().contains(name.toLowerCase()))
            .collect(Collectors.toList());
    }
    
    public boolean updateStudent(String id, Student updatedStudent) {
        if (students.containsKey(id)) {
            students.put(id, updatedStudent);
            // Update in list as well
            for (int i = 0; i < studentList.size(); i++) {
                if (studentList.get(i).getId().equals(id)) {
                    studentList.set(i, updatedStudent);
                    break;
                }
            }
            return true;
        }
        return false;
    }
    
    public boolean deleteStudent(String id) {
        Student removed = students.remove(id);
        if (removed != null) {
            studentList.removeIf(s -> s.getId().equals(id));
            return true;
        }
        return false;
    }
    
    public List<Student> getAllStudents() {
        return new ArrayList<>(studentList);
    }
    
    public List<Student> getTopPerformers(int limit) {
        return studentList.stream()
            .sorted((s1, s2) -> Double.compare(s2.getAverage(), s1.getAverage()))
            .limit(limit)
            .collect(Collectors.toList());
    }
    
    public Map<String, Double> getStatistics() {
        Map<String, Double> stats = new HashMap<>();
        
        if (studentList.isEmpty()) return stats;
        
        double sum = studentList.stream()
            .mapToDouble(Student::getAverage)
            .sum();
        
        stats.put("average", sum / studentList.size());
        stats.put("highest", studentList.stream()
            .mapToDouble(Student::getAverage)
            .max()
            .orElse(0.0));
        stats.put("lowest", studentList.stream()
            .mapToDouble(Student::getAverage)
            .min()
            .orElse(0.0));
        stats.put("totalStudents", (double) studentList.size());
        
        return stats;
    }
}
```

---

### **9:30 PM - 10:00 PM: Daily Review (30 min)**

**✅ Today's Achievements:**
```
1. KMP pattern matching algorithm
2. LPS array construction and usage
3. Java inheritance (single, multilevel, hierarchical)
4. Polymorphism (compile-time & runtime)
5. Method overloading and overriding
6. Solved 3 advanced string problems
7. DBMS normalization (1NF, 2NF, 3NF)
8. REST API design principles
```

**✅ Problems Solved:**
```
1. Implement strStr() (LeetCode #28) ✅
2. Repeated Substring Pattern (LeetCode #459) ✅
3. String Compression (LeetCode #443) ✅
```

**✅ Progress:**
- Total problems: 18 (Days 1-5)
- Week 1: 70% complete
- On track with 90-day plan

**🎯 Tomorrow (Day 6):**
```
- Matrix problems (2D arrays)
- Java encapsulation and abstraction
- SQL basics (DDL, DML)
- 3 medium-level problems
```

---

## 📝 **DAY 5 COMPLETE CHECKLIST**

- [ ] KMP algorithm mastery ✓
- [ ] Inheritance concepts ✓
- [ ] Polymorphism understanding ✓
- [ ] 3 string problems solved ✓
- [ ] Normalization (1NF-3NF) ✓
- [ ] API design planning ✓
- [ ] GitHub commit ✓

---

## 🎯 **MOTIVATION**

> "The only limit to our realization of tomorrow will be our doubts of today." - FDR

**Day 5 Complete! You're mastering advanced algorithms! KMP is interview gold! 🏆**

**Week 1 Progress: 18/25 problems completed! Almost there! 💪**

---

**🎉 Day 5 Done! Weekend approaching - stay strong! 🚀**
