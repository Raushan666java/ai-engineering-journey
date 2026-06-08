# 🚀 **DAY 4: STRING MANIPULATION & JAVA OOP BASICS**
## Complete Study Plan for Day 4 of 90-Day Placement Preparation

---

## 📅 **DAY 4 OVERVIEW**
**Date**: December 4, 2025  
**Focus**: String Algorithms + Object-Oriented Programming  
**Total Study Time**: 9 hours  
**Target**: Master string manipulation and OOP fundamentals  

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: DSA - String Manipulation Basics (1.5 hours)**

#### **Learning Objectives**
- Understand string immutability in Java
- Master string manipulation techniques
- Learn common string algorithms
- Use StringBuilder vs String efficiently

####

 **Study Resources**

**📖 Primary Reading:**
- **GeeksforGeeks**: [String Data Structure](https://www.geeksforgeeks.org/string-data-structure/)
- **JavaTPoint**: [Java String](https://www.javatpoint.com/java-string)

**🎥 Video Resources:**
1. **Abdul Bari - String Algorithms** (20 min)
   - URL: https://www.youtube.com/watch?v=V5-7GzOfADQ
2. **CS Dojo - String Problems** (15 min)
   - URL: https://www.youtube.com/watch?v=qQ8vS2btsxI

**📝 Key Concepts:**
```
✅ String Basics:
   - Immutability concept
   - String pool in Java
   - String vs StringBuilder vs StringBuffer
   
✅ Common Operations:
   - Concatenation
   - Substring extraction
   - Character manipulation
   - Case conversion
   - Trimming and splitting
   
✅ String Algorithms:
   - Reverse string
   - Palindrome checking
   - Anagram detection
   - Pattern matching
   - Character frequency counting
   
✅ Time Complexity:
   - String concatenation: O(n²) vs O(n) with StringBuilder
   - charAt(): O(1)
   - substring(): O(n)
```

#### **String Operations in Java:**
```java
class StringOperations {
    public static void main(String[] args) {
        // 1. String Creation
        String s1 = "Hello";              // String literal (pool)
        String s2 = new String("Hello");  // New object (heap)
        String s3 = "Hello";              // Points to same pool object as s1
        
        System.out.println(s1 == s2);     // false (different objects)
        System.out.println(s1 == s3);     // true (same pool reference)
        System.out.println(s1.equals(s2)); // true (same content)
        
        // 2. Common Methods
        String text = "  Java Programming  ";
        
        System.out.println(text.length());           // 20
        System.out.println(text.charAt(5));          // 'v'
        System.out.println(text.substring(2, 6));    // "Java"
        System.out.println(text.toLowerCase());      // "  java programming  "
        System.out.println(text.toUpperCase());      // "  JAVA PROGRAMMING  "
        System.out.println(text.trim());             // "Java Programming"
        System.out.println(text.replace("Java", "Python")); // "  Python Programming  "
        System.out.println(text.contains("Program")); // true
        System.out.println(text.startsWith("  J"));  // true
        System.out.println(text.endsWith("  "));     // true
        System.out.println(text.indexOf("Pro"));     // 7
        
        // 3. String Split
        String csv = "apple,banana,orange";
        String[] fruits = csv.split(",");
        for (String fruit : fruits) {
            System.out.println(fruit);
        }
        
        // 4. String Join
        String joined = String.join("-", "2025", "12", "04");
        System.out.println(joined);  // "2025-12-04"
        
        // 5. StringBuilder (Mutable)
        StringBuilder sb = new StringBuilder();
        sb.append("Hello");
        sb.append(" ");
        sb.append("World");
        sb.insert(5, " Java");
        sb.delete(0, 6);
        sb.reverse();
        System.out.println(sb.toString());
        
        // 6. Character Array Conversion
        String str = "Hello";
        char[] chars = str.toCharArray();
        chars[0] = 'h';
        String modified = new String(chars);
        System.out.println(modified);  // "hello"
    }
}
```

---

### **7:30 AM - 9:00 AM: Java OOP - Classes & Objects (1.5 hours)**

#### **Topics to Cover**

**1. Class Definition and Object Creation (30 min)**
```java
// Class definition
public class Car {
    // Instance variables (attributes/properties)
    String brand;
    String model;
    int year;
    double price;
    
    // Constructor (default)
    public Car() {
        brand = "Unknown";
        model = "Unknown";
        year = 2024;
        price = 0.0;
    }
    
    // Parameterized constructor
    public Car(String brand, String model, int year, double price) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
    }
    
    // Methods (behaviors)
    public void start() {
        System.out.println(brand + " " + model + " is starting...");
    }
    
    public void displayInfo() {
        System.out.println("Brand: " + brand);
        System.out.println("Model: " + model);
        System.out.println("Year: " + year);
        System.out.println("Price: $" + price);
    }
    
    public double calculateDepreciation(int years) {
        return price * Math.pow(0.9, years);
    }
}

// Using the class
class Main {
    public static void main(String[] args) {
        // Object creation
        Car car1 = new Car();  // Default constructor
        car1.displayInfo();
        
        Car car2 = new Car("Toyota", "Camry", 2024, 30000);
        car2.start();
        car2.displayInfo();
        
        double futureValue = car2.calculateDepreciation(5);
        System.out.println("Value after 5 years: $" + futureValue);
    }
}
```

**2. Getters and Setters (Encapsulation Preview) (20 min)**
```java
public class BankAccount {
    private String accountNumber;
    private double balance;
    private String ownerName;
    
    public BankAccount(String accountNumber, String ownerName) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = 0.0;
    }
    
    // Getter methods
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getOwnerName() {
        return ownerName;
    }
    
    // Setter with validation
    public void setOwnerName(String ownerName) {
        if (ownerName != null && !ownerName.isEmpty()) {
            this.ownerName = ownerName;
        }
    }
    
    // Business methods
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited: $" + amount);
        } else {
            System.out.println("Invalid amount");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrawn: $" + amount);
            return true;
        }
        System.out.println("Insufficient funds");
        return false;
    }
}
```

**3. Static Members (30 min)**
```java
public class Counter {
    // Static variable (shared by all instances)
    private static int count = 0;
    
    // Instance variable (unique to each object)
    private int id;
    
    public Counter() {
        count++;
        id = count;
    }
    
    // Static method
    public static int getCount() {
        return count;
        // Cannot access 'id' here (non-static)
    }
    
    // Instance method
    public int getId() {
        return id;
        // Can access both 'id' and 'count'
    }
    
    public static void main(String[] args) {
        System.out.println("Initial count: " + Counter.getCount());
        
        Counter c1 = new Counter();
        Counter c2 = new Counter();
        Counter c3 = new Counter();
        
        System.out.println("Total objects: " + Counter.getCount());
        System.out.println("c1 ID: " + c1.getId());
        System.out.println("c2 ID: " + c2.getId());
        System.out.println("c3 ID: " + c3.getId());
    }
}
```

**4. this Keyword (20 min)**
```java
public class Person {
    private String name;
    private int age;
    
    // Constructor
    public Person(String name, int age) {
        this.name = name;  // 'this' refers to instance variable
        this.age = age;
    }
    
    // Method returning current object
    public Person setName(String name) {
        this.name = name;
        return this;  // Return current object for method chaining
    }
    
    public Person setAge(int age) {
        this.age = age;
        return this;
    }
    
    public void display() {
        System.out.println("Name: " + this.name + ", Age: " + this.age);
    }
    
    public static void main(String[] args) {
        // Method chaining
        Person p = new Person("Alice", 25);
        p.setName("Bob").setAge(30).display();
    }
}
```

---

## 🕑 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 5:00 PM: LeetCode Practice - String Problems (3 hours)**

#### **Problem 1: Valid Anagram** ⭐ EASY
**LeetCode #242**
- **URL**: https://leetcode.com/problems/valid-anagram/
- **Time**: 30 minutes

**Problem:** Check if two strings are anagrams.

**Solutions:**
```java
// Approach 1: Sorting
class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        char[] sChars = s.toCharArray();
        char[] tChars = t.toCharArray();
        
        Arrays.sort(sChars);
        Arrays.sort(tChars);
        
        return Arrays.equals(sChars, tChars);
    }
}
// Time: O(n log n), Space: O(1)

// Approach 2: Frequency Count (Better)
class Solution2 {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) return false;
        
        int[] count = new int[26];
        
        for (int i = 0; i < s.length(); i++) {
            count[s.charAt(i) - 'a']++;
            count[t.charAt(i) - 'a']--;
        }
        
        for (int c : count) {
            if (c != 0) return false;
        }
        
        return true;
    }
}
// Time: O(n), Space: O(1)
```

---

#### **Problem 2: Longest Palindromic Substring** ⭐⭐ MEDIUM
**LeetCode #5**
- **URL**: https://leetcode.com/problems/longest-palindromic-substring/
- **Time**: 50 minutes

**Problem:** Find longest palindromic substring.

**Solution:**
```java
class Solution {
    public String longestPalindrome(String s) {
        if (s == null || s.length() < 1) return "";
        
        int start = 0, end = 0;
        
        for (int i = 0; i < s.length(); i++) {
            // Check for odd-length palindromes (center is single char)
            int len1 = expandAroundCenter(s, i, i);
            // Check for even-length palindromes (center is between chars)
            int len2 = expandAroundCenter(s, i, i + 1);
            
            int len = Math.max(len1, len2);
            
            if (len > end - start) {
                start = i - (len - 1) / 2;
                end = i + len / 2;
            }
        }
        
        return s.substring(start, end + 1);
    }
    
    private int expandAroundCenter(String s, int left, int right) {
        while (left >= 0 && right < s.length() && 
               s.charAt(left) == s.charAt(right)) {
            left--;
            right++;
        }
        return right - left - 1;
    }
}
// Time: O(n²), Space: O(1)
```

---

#### **Problem 3: Group Anagrams** ⭐⭐ MEDIUM
**LeetCode #49**
- **URL**: https://leetcode.com/problems/group-anagrams/
- **Time**: 40 minutes

**Problem:** Group anagrams together from array of strings.

**Solution:**
```java
class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            // Sort string to use as key
            char[] chars = str.toCharArray();
            Arrays.sort(chars);
            String key = new String(chars);
            
            // Add to corresponding group
            if (!map.containsKey(key)) {
                map.put(key, new ArrayList<>());
            }
            map.get(key).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
}
// Time: O(n * k log k) where n = number of strings, k = max string length
// Space: O(n * k)

// Optimized: Using character count as key
class Solution2 {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List<String>> map = new HashMap<>();
        
        for (String str : strs) {
            int[] count = new int[26];
            for (char c : str.toCharArray()) {
                count[c - 'a']++;
            }
            
            // Create key from count array
            StringBuilder keyBuilder = new StringBuilder();
            for (int i = 0; i < 26; i++) {
                keyBuilder.append('#');
                keyBuilder.append(count[i]);
            }
            String key = keyBuilder.toString();
            
            map.putIfAbsent(key, new ArrayList<>());
            map.get(key).add(str);
        }
        
        return new ArrayList<>(map.values());
    }
}
// Time: O(n * k), Space: O(n * k)
```

---

#### **Problem 4: Longest Common Prefix** ⭐ EASY
**LeetCode #14**
- **URL**: https://leetcode.com/problems/longest-common-prefix/
- **Time**: 30 minutes

**Problem:** Find longest common prefix among array of strings.

**Solutions:**
```java
// Approach 1: Horizontal Scanning
class Solution {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        
        String prefix = strs[0];
        
        for (int i = 1; i < strs.length; i++) {
            while (strs[i].indexOf(prefix) != 0) {
                prefix = prefix.substring(0, prefix.length() - 1);
                if (prefix.isEmpty()) return "";
            }
        }
        
        return prefix;
    }
}
// Time: O(S) where S = sum of all characters
// Space: O(1)

// Approach 2: Vertical Scanning
class Solution2 {
    public String longestCommonPrefix(String[] strs) {
        if (strs.length == 0) return "";
        
        for (int i = 0; i < strs[0].length(); i++) {
            char c = strs[0].charAt(i);
            
            for (int j = 1; j < strs.length; j++) {
                if (i >= strs[j].length() || strs[j].charAt(i) != c) {
                    return strs[0].substring(0, i);
                }
            }
        }
        
        return strs[0];
    }
}
// Time: O(S), Space: O(1)
```

---

## 🕖 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:00 PM: Theory - DBMS Introduction (1 hour)**

#### **Database Management System Basics**

**📖 Study Resources:**
- **GeeksforGeeks**: [DBMS Introduction](https://www.geeksforgeeks.org/introduction-of-dbms/)
- **Video**: [DBMS Complete Course](https://www.youtube.com/watch?v=kBdlM6hNDAE)

**Key Concepts:**

**1. What is DBMS? (15 min)**
```
Definition: Software system for creating and managing databases

Advantages:
- Data independence
- Efficient data access
- Data integrity and security
- Concurrent access
- Backup and recovery
- Reduced redundancy

Types of DBMS:
- Hierarchical
- Network
- Relational (RDBMS) ← Most common
- Object-oriented
- NoSQL
```

**2. ER Diagrams (Entity-Relationship) (45 min)**
```
Components:

1. Entity: Real-world object (Rectangle)
   Example: Student, Course, Teacher
   
2. Attribute: Property of entity (Oval)
   - Simple: Cannot be divided (Name, Age)
   - Composite: Can be divided (Address = Street + City + ZIP)
   - Derived: Calculated from other attributes (Age from DOB)
   - Multi-valued: Multiple values (Phone numbers)
   - Key: Uniquely identifies entity (Student ID)

3. Relationship: Association between entities (Diamond)
   - One-to-One (1:1): Student ← → Passport
   - One-to-Many (1:N): Teacher → Students
   - Many-to-Many (M:N): Students ←→ Courses

4. Cardinality: Number of instances
5. Participation: Total (must participate) or Partial (may participate)
```

**Example ER Diagram:**
```
Student Management System:

Entities:
- STUDENT (student_id, name, email, phone, dob)
- COURSE (course_id, course_name, credits, department)
- TEACHER (teacher_id, name, department, salary)

Relationships:
- ENROLLS: STUDENT (M) ←→ (N) COURSE
- TEACHES: TEACHER (1) → (N) COURSE
```

---

### **8:00 PM - 9:30 PM: Project - Database Schema Design (1.5 hours)**

#### **Design Database for Student Management System**

**1. Identify Entities and Attributes (30 min)**
```sql
-- STUDENT Table
CREATE TABLE Student (
    student_id VARCHAR(10) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    phone VARCHAR(15),
    date_of_birth DATE,
    enrollment_date DATE DEFAULT CURRENT_DATE,
    address VARCHAR(200)
);

-- COURSE Table
CREATE TABLE Course (
    course_id VARCHAR(10) PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    credits INT CHECK (credits > 0),
    department VARCHAR(50),
    description TEXT
);

-- TEACHER Table
CREATE TABLE Teacher (
    teacher_id VARCHAR(10) PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(50),
    salary DECIMAL(10, 2),
    hire_date DATE
);

-- ENROLLMENT Table (Many-to-Many: Student-Course)
CREATE TABLE Enrollment (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id VARCHAR(10),
    course_id VARCHAR(10),
    enrollment_date DATE DEFAULT CURRENT_DATE,
    grade CHAR(2),
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id),
    UNIQUE (student_id, course_id)
);

-- TEACHING Table (Teacher-Course relationship)
CREATE TABLE Teaching (
    teaching_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id VARCHAR(10),
    course_id VARCHAR(10),
    semester VARCHAR(20),
    year INT,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id),
    FOREIGN KEY (course_id) REFERENCES Course(course_id)
);
```

**2. Sample Data Insertion (30 min)**
```sql
-- Insert Students
INSERT INTO Student VALUES
('S001', 'John', 'Doe', 'john@email.com', '1234567890', '2002-05-15', '2024-08-01', '123 Main St'),
('S002', 'Jane', 'Smith', 'jane@email.com', '0987654321', '2003-03-20', '2024-08-01', '456 Oak Ave'),
('S003', 'Mike', 'Johnson', 'mike@email.com', '5551234567', '2002-11-10', '2024-08-01', '789 Pine Rd');

-- Insert Courses
INSERT INTO Course VALUES
('CS101', 'Introduction to Programming', 4, 'Computer Science', 'Learn Java basics'),
('CS201', 'Data Structures', 4, 'Computer Science', 'Arrays, Lists, Trees, Graphs'),
('MATH101', 'Calculus I', 3, 'Mathematics', 'Differential calculus');

-- Insert Teachers
INSERT INTO Teacher VALUES
('T001', 'Dr. Alan', 'Turing', 'turing@university.edu', 'Computer Science', 75000.00, '2015-01-15'),
('T002', 'Prof. Ada', 'Lovelace', 'ada@university.edu', 'Computer Science', 80000.00, '2010-08-20');

-- Insert Enrollments
INSERT INTO Enrollment (student_id, course_id, grade) VALUES
('S001', 'CS101', 'A'),
('S001', 'MATH101', 'B+'),
('S002', 'CS101', 'A-'),
('S002', 'CS201', 'A'),
('S003', 'CS101', 'B');

-- Insert Teaching assignments
INSERT INTO Teaching (teacher_id, course_id, semester, year) VALUES
('T001', 'CS101', 'Fall', 2024),
('T001', 'CS201', 'Spring', 2025),
('T002', 'CS201', 'Fall', 2024);
```

**3. Common Queries (30 min)**
```sql
-- Query 1: Get all students with their courses
SELECT s.first_name, s.last_name, c.course_name, e.grade
FROM Student s
JOIN Enrollment e ON s.student_id = e.student_id
JOIN Course c ON e.course_id = c.course_id;

-- Query 2: Find students enrolled in specific course
SELECT s.first_name, s.last_name, s.email
FROM Student s
JOIN Enrollment e ON s.student_id = e.student_id
WHERE e.course_id = 'CS101';

-- Query 3: Get teacher's courses
SELECT t.first_name, t.last_name, c.course_name
FROM Teacher t
JOIN Teaching tg ON t.teacher_id = tg.teacher_id
JOIN Course c ON tg.course_id = c.course_id;

-- Query 4: Calculate student GPA
SELECT s.student_id, s.first_name, s.last_name, 
       COUNT(e.course_id) as total_courses,
       AVG(
           CASE 
               WHEN e.grade = 'A' THEN 4.0
               WHEN e.grade = 'A-' THEN 3.7
               WHEN e.grade = 'B+' THEN 3.3
               WHEN e.grade = 'B' THEN 3.0
               ELSE 2.0
           END
       ) as gpa
FROM Student s
LEFT JOIN Enrollment e ON s.student_id = e.student_id
GROUP BY s.student_id;

-- Query 5: Find courses with no enrollments
SELECT c.*
FROM Course c
LEFT JOIN Enrollment e ON c.course_id = e.course_id
WHERE e.enrollment_id IS NULL;
```

---

### **9:30 PM - 10:00 PM: Daily Review (30 min)**

**✅ Today's Achievements:**
```
1. String manipulation techniques in Java
2. String immutability and StringBuilder usage
3. Java OOP basics: classes, objects, constructors
4. Static members and 'this' keyword
5. Solved 4 string problems on LeetCode
6. DBMS introduction and ER diagrams
7. Designed complete database schema
```

**✅ Problems Solved:**
```
1. Valid Anagram (LeetCode #242) ✅
2. Longest Palindromic Substring (LeetCode #5) ✅
3. Group Anagrams (LeetCode #49) ✅
4. Longest Common Prefix (LeetCode #14) ✅
```

**✅ Update Trackers:**
- Day 4 in DAILY_PROGRESS_TRACKER.md
- Cumulative: 15 problems (Days 1-4)
- GitHub commit with today's work

**🎯 Tomorrow (Day 5):**
```
- Pattern matching algorithms (KMP)
- Java inheritance and polymorphism
- Advanced string problems
- DBMS normalization (1NF, 2NF, 3NF)
```

---

## 📝 **DAY 4 COMPLETE CHECKLIST**

- [ ] String manipulation theory ✓
- [ ] Java OOP concepts ✓
- [ ] 4 LeetCode string problems ✓
- [ ] DBMS introduction ✓
- [ ] ER diagram design ✓
- [ ] Database schema creation ✓
- [ ] GitHub update ✓

---

## 🎯 **MOTIVATION**

> "The expert in anything was once a beginner." - Helen Hayes

**You've completed 4 days! 15 problems solved! Keep the momentum! 🚀**

**Tomorrow**: Pattern matching with KMP algorithm - a classic interview topic!

---

**🎉 Day 4 Complete! See you tomorrow! 💪**
