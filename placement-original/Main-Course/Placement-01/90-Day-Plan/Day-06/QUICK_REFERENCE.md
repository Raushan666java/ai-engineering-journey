# DAY 6: QUICK REFERENCE GUIDE
## Classes, Objects & Constructors - Syntax Cheat Sheet

---

## 📌 CLASS DECLARATION

### Basic Class Structure
```java
public class ClassName {
    // Instance variables (fields)
    dataType fieldName;
    
    // Constructor
    public ClassName() {
        // initialization
    }
    
    // Methods
    returnType methodName() {
        // method body
    }
}
```

### Example
```java
public class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    void displayInfo() {
        System.out.println(name + " is " + age + " years old");
    }
}
```

---

## 📌 OBJECT CREATION

### Syntax
```java
ClassName objectName = new ClassName();
```

### 3-Step Process
```java
// 1. Declaration
ClassName objectName;

// 2. Instantiation
objectName = new ClassName();

// 3. Initialization (via constructor)
// Combined:
ClassName objectName = new ClassName(arguments);
```

### Examples
```java
Person p1 = new Person();              // Default constructor
Person p2 = new Person("Alice", 25);   // Parameterized constructor
```

---

## 📌 ACCESSING MEMBERS

### Dot Operator
```java
objectName.fieldName     // Access field
objectName.methodName()  // Call method
```

### Example
```java
Person person = new Person("Bob", 30);
System.out.println(person.name);  // Access field
person.displayInfo();             // Call method
```

---

## 📌 CONSTRUCTORS

### Default Constructor
```java
public class ClassName {
    public ClassName() {
        // No parameters
        // Initialize with default values
    }
}
```

### Parameterized Constructor
```java
public class Person {
    String name;
    int age;
    
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
}
```

### Constructor Overloading
```java
public class Book {
    String title;
    String author;
    int pages;
    
    // Constructor 1
    public Book() {
        this.title = "Unknown";
        this.author = "Unknown";
        this.pages = 0;
    }
    
    // Constructor 2
    public Book(String title) {
        this(title, "Unknown", 0);
    }
    
    // Constructor 3
    public Book(String title, String author) {
        this(title, author, 0);
    }
    
    // Constructor 4
    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
}
```

### Constructor Chaining
```java
public class Rectangle {
    double length;
    double width;
    
    public Rectangle() {
        this(1, 1);  // Call 2-param constructor
    }
    
    public Rectangle(double side) {
        this(side, side);  // Call 2-param constructor
    }
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
}
```

### Copy Constructor
```java
public class Point {
    int x, y;
    
    // Regular constructor
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    
    // Copy constructor
    public Point(Point other) {
        this.x = other.x;
        this.y = other.y;
    }
}

// Usage:
Point p1 = new Point(10, 20);
Point p2 = new Point(p1);  // Copy of p1
```

---

## 📌 'this' KEYWORD

### Referring to Instance Variables
```java
public class Person {
    String name;
    
    public Person(String name) {
        this.name = name;  // Disambiguate
    }
}
```

### Calling Another Constructor
```java
public class Student {
    String name;
    int rollNo;
    
    public Student(String name) {
        this(name, 0);  // Call 2-param constructor
    }
    
    public Student(String name, int rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
}
```

### Returning Current Object
```java
public class Builder {
    String name;
    
    public Builder setName(String name) {
        this.name = name;
        return this;  // Return current object
    }
}

// Usage (Method chaining):
Builder b = new Builder().setName("Alice");
```

---

## 📌 ENCAPSULATION

### Private Fields + Public Methods
```java
public class BankAccount {
    private double balance;  // Private field
    
    // Public getter
    public double getBalance() {
        return balance;
    }
    
    // Public setter with validation
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        }
    }
    
    // Business method
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }
}
```

---

## 📌 HASH-BASED DATA STRUCTURES

### Hash Function
```java
private static final int BUCKET_SIZE = 769;  // Prime number

private int hash(int key) {
    return key % BUCKET_SIZE;
}
```

### HashSet with Chaining
```java
class MyHashSet {
    private LinkedList<Integer>[] buckets;
    private static final int SIZE = 769;
    
    public MyHashSet() {
        buckets = new LinkedList[SIZE];
        for (int i = 0; i < SIZE; i++) {
            buckets[i] = new LinkedList<>();
        }
    }
    
    private int hash(int key) {
        return key % SIZE;
    }
    
    public void add(int key) {
        int index = hash(key);
        if (!buckets[index].contains(key)) {
            buckets[index].add(key);
        }
    }
    
    public boolean contains(int key) {
        int index = hash(key);
        return buckets[index].contains(key);
    }
    
    public void remove(int key) {
        int index = hash(key);
        buckets[index].remove(Integer.valueOf(key));
    }
}
```

### HashMap with Chaining
```java
class MyHashMap {
    class Node {
        int key, value;
        Node next;
        
        Node(int key, int value) {
            this.key = key;
            this.value = value;
        }
    }
    
    private Node[] buckets;
    private static final int SIZE = 769;
    
    public MyHashMap() {
        buckets = new Node[SIZE];
    }
    
    private int hash(int key) {
        return key % SIZE;
    }
    
    public void put(int key, int value) {
        int index = hash(key);
        Node curr = buckets[index];
        
        // Update if key exists
        while (curr != null) {
            if (curr.key == key) {
                curr.value = value;
                return;
            }
            curr = curr.next;
        }
        
        // Insert new node at beginning
        Node newNode = new Node(key, value);
        newNode.next = buckets[index];
        buckets[index] = newNode;
    }
    
    public int get(int key) {
        int index = hash(key);
        Node curr = buckets[index];
        
        while (curr != null) {
            if (curr.key == key) {
                return curr.value;
            }
            curr = curr.next;
        }
        return -1;
    }
    
    public void remove(int key) {
        int index = hash(key);
        Node curr = buckets[index];
        Node prev = null;
        
        while (curr != null) {
            if (curr.key == key) {
                if (prev == null) {
                    buckets[index] = curr.next;
                } else {
                    prev.next = curr.next;
                }
                return;
            }
            prev = curr;
            curr = curr.next;
        }
    }
}
```

---

## 📌 COMMON PATTERNS

### Builder Pattern
```java
public class Car {
    private String brand;
    private String model;
    private int year;
    
    private Car() {}  // Private constructor
    
    public static class Builder {
        private Car car = new Car();
        
        public Builder setBrand(String brand) {
            car.brand = brand;
            return this;
        }
        
        public Builder setModel(String model) {
            car.model = model;
            return this;
        }
        
        public Builder setYear(int year) {
            car.year = year;
            return this;
        }
        
        public Car build() {
            return car;
        }
    }
}

// Usage:
Car car = new Car.Builder()
            .setBrand("Toyota")
            .setModel("Camry")
            .setYear(2024)
            .build();
```

### Validation Pattern
```java
public class Age {
    private int value;
    
    public Age(int value) {
        if (value < 0 || value > 150) {
            throw new IllegalArgumentException("Invalid age");
        }
        this.value = value;
    }
}
```

### Immutable Class
```java
public final class ImmutablePerson {
    private final String name;
    private final int age;
    
    public ImmutablePerson(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public String getName() { return name; }
    public int getAge() { return age; }
    
    // No setters!
}
```

---

## 📌 COMMON MISTAKES & FIXES

### ❌ Mistake 1: Not using 'this'
```java
// Wrong
public Person(String name) {
    name = name;  // Both refer to parameter!
}

// Correct
public Person(String name) {
    this.name = name;
}
```

### ❌ Mistake 2: Modifying after immutable
```java
// Wrong
final Person p = new Person("Alice", 25);
p = new Person("Bob", 30);  // Error: can't reassign final

// But this works:
p.name = "Bob";  // Object is mutable

// Correct immutable:
public final class ImmutablePerson {
    private final String name;
    // No setters
}
```

### ❌ Mistake 3: Forgetting null check
```java
// Wrong
Person p = null;
p.displayInfo();  // NullPointerException!

// Correct
if (p != null) {
    p.displayInfo();
}
```

### ❌ Mistake 4: Shallow copy instead of deep
```java
// Wrong (shallow copy)
public Point(Point other) {
    this = other;  // Both point to same object
}

// Correct (deep copy)
public Point(Point other) {
    this.x = other.x;
    this.y = other.y;
}
```

---

## 📌 QUICK FORMULAS

### Hash Function
```
index = key % bucket_size
```
- Use prime number for bucket_size (769, 1009, etc.)
- Reduces clustering

### Load Factor
```
load_factor = number_of_items / bucket_size
```
- Optimal: 0.75
- Resize when exceeds threshold

### Distance Between Points
```java
double distance = Math.sqrt(
    Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)
);
```

---

## 📌 CONSTRUCTOR VS METHOD

| Feature | Constructor | Method |
|---------|------------|--------|
| Name | Same as class | Any valid name |
| Return type | None (not even void) | Has return type |
| Invocation | Automatically on object creation | Explicitly called |
| Purpose | Initialize object | Perform operations |
| Inheritance | Not inherited | Inherited |
| this() | Can call another constructor | Cannot call constructor |
| Overloading | Yes | Yes |
| Static | Cannot be static | Can be static |

---

## 📌 TIME COMPLEXITIES

### HashSet/HashMap Operations
| Operation | Time Complexity |
|-----------|----------------|
| add/put | O(1) average |
| contains/get | O(1) average |
| remove | O(1) average |
| Worst case (all collisions) | O(n) |

### Object Operations
| Operation | Time Complexity |
|-----------|----------------|
| Object creation | O(1) |
| Field access | O(1) |
| Method call | O(1) + method time |

---

## 📌 INTERVIEW ONE-LINERS

1. **What is a class?** - Blueprint for creating objects
2. **What is an object?** - Instance of a class
3. **What is a constructor?** - Special method to initialize objects
4. **Constructor vs Method?** - No return type, same name as class
5. **What is 'this'?** - Reference to current object
6. **What is encapsulation?** - Data hiding with access modifiers
7. **How HashMap handles collisions?** - Chaining with linked lists
8. **What is hash function?** - Maps key to bucket index (key % size)
9. **What is load factor?** - Ratio of items to buckets (optimal: 0.75)
10. **Why prime bucket size?** - Better distribution, less clustering

---

## 📌 CODE TEMPLATES

### Template 1: Basic Class
```java
public class ClassName {
    private dataType field1;
    private dataType field2;
    
    public ClassName(dataType field1, dataType field2) {
        this.field1 = field1;
        this.field2 = field2;
    }
    
    public dataType getField1() { return field1; }
    public void setField1(dataType field1) { this.field1 = field1; }
    
    public void displayInfo() {
        System.out.println(field1 + " " + field2);
    }
}
```

### Template 2: With Overloading
```java
public class ClassName {
    private dataType field;
    
    public ClassName() {
        this(defaultValue);
    }
    
    public ClassName(dataType field) {
        this.field = field;
    }
}
```

### Template 3: Hash-based
```java
class HashStructure {
    private static final int SIZE = 769;
    private DataStructure[] buckets = new DataStructure[SIZE];
    
    private int hash(int key) {
        return key % SIZE;
    }
    
    public void operation(int key) {
        int index = hash(key);
        // Handle collision
    }
}
```

---

## 📌 PRACTICE CHECKLIST

Today's Must-Practice:
- [ ] Create 3 classes with different constructors
- [ ] Implement constructor overloading
- [ ] Practice 'this' keyword
- [ ] Design a hash-based structure
- [ ] Solve 10 problems from practice set
- [ ] Explain encapsulation with example
- [ ] Draw object memory diagram

---

**Remember**: Practice makes perfect! 
Review this guide before interviews. 🚀
