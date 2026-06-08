# 🚀 **DAY 8: RECURSION FUNDAMENTALS & JAVA ADVANCED OOP**
## Complete Study Plan for Day 8 of 90-Day Placement Preparation

---

## 📅 **DAY 8 OVERVIEW**
**Date**: January 1, 2026 (Week 2 - Day 1)  
**Focus**: Recursion Fundamentals + Java Advanced OOP Concepts  
**Total Study Time**: 9 hours  
**Target**: Master recursive thinking and Java inheritance patterns  
**Week 2 Theme**: Recursion, Backtracking, and Tree Data Structures

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: Recursion Theory & Mental Model (1.5 hours)**

#### 📚 **Learning Objectives**
- Understand recursion call stack and execution flow
- Learn to identify base case and recursive case
- Master recursive problem-solving approach
- Compare recursion vs iteration trade-offs

#### **Study Resources**
- **Video**: [Recursion by Abdul Bari](https://www.youtube.com/watch?v=kx6DfrYfWnQ) (35 min)
- **Video**: [Recursion Basics](https://www.youtube.com/watch?v=IJDJ0kBx2LM) (20 min)
- **GeeksforGeeks**: [Introduction to Recursion](https://www.geeksforgeeks.org/introduction-to-recursion-data-structure-and-algorithm-tutorials/)

**📝 Key Concepts:**
```
✅ What is Recursion?
   - A function that calls itself
   - Breaks problem into smaller subproblems
   - Essential for trees, graphs, divide-and-conquer

✅ Anatomy of Recursion:
   1. Base Case: Stopping condition (prevents infinite loop)
   2. Recursive Case: Function calls itself with modified input
   3. Return Statement: Combines results

✅ Recursion Call Stack:
   Function Call → Push to Stack → Execute → Return → Pop from Stack
   
   Example: factorial(3)
   Stack: factorial(3) → factorial(2) → factorial(1) → factorial(0)
   Return: 1 → 1 → 2 → 6

✅ When to Use Recursion:
   - Tree/Graph traversal
   - Divide and conquer algorithms
   - Dynamic programming (with memoization)
   - Backtracking problems
   - Mathematical sequences

✅ Recursion vs Iteration:
   Recursion:
   - Cleaner, more intuitive code
   - Uses more memory (call stack)
   - Can cause stack overflow
   
   Iteration:
   - Uses less memory
   - Usually faster
   - May be more complex to write
```

#### **📝 Basic Recursion Implementation (45 min)**

**Example 1: Factorial**
```java
// n! = n × (n-1)!
// Base case: 0! = 1

public int factorial(int n) {
    // Base case
    if (n == 0 || n == 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

// Call stack for factorial(4):
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1  [BASE CASE]
// Returns: 1 → 2 → 6 → 24
```

**Example 2: Fibonacci Sequence**
```java
// fib(n) = fib(n-1) + fib(n-2)
// Base cases: fib(0) = 0, fib(1) = 1

public int fibonacci(int n) {
    // Base cases
    if (n == 0) return 0;
    if (n == 1) return 1;
    
    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Note: This has exponential time complexity O(2^n)
// Can be optimized with memoization to O(n)
```

**Example 3: Sum of Natural Numbers**
```java
// sum(n) = n + sum(n-1)
// Base case: sum(1) = 1

public int sum(int n) {
    if (n == 1) {
        return 1;
    }
    return n + sum(n - 1);
}
```

**Example 4: Print Numbers (Forward & Backward)**
```java
// Print 1 to n
public void printForward(int n) {
    if (n == 0) return;
    printForward(n - 1);  // Recursive call BEFORE print
    System.out.print(n + " ");
}

// Print n to 1
public void printBackward(int n) {
    if (n == 0) return;
    System.out.print(n + " ");  // Print BEFORE recursive call
    printBackward(n - 1);
}
```

---

### **7:30 AM - 9:00 AM: Recursion Problem Solving (1.5 hours)**

#### **Problem 1: Power Calculation (LeetCode #50)** ⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Recursion with optimization  
**Time**: 30 minutes

**Problem Statement**:
Implement pow(x, n), which calculates x raised to the power n.

**Naive Solution:**
```java
// Time: O(n), Space: O(n) due to call stack
public double myPow(double x, int n) {
    if (n == 0) return 1.0;
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    return x * myPow(x, n - 1);
}
```

**Optimized Solution (Fast Exponentiation):**
```java
// Time: O(log n), Space: O(log n)
public double myPow(double x, int n) {
    if (n == 0) return 1.0;
    
    long N = n;  // Handle integer overflow
    if (N < 0) {
        x = 1 / x;
        N = -N;
    }
    
    return fastPow(x, N);
}

private double fastPow(double x, long n) {
    if (n == 0) return 1.0;
    
    double half = fastPow(x, n / 2);
    
    if (n % 2 == 0) {
        return half * half;        // Even: x^4 = (x^2)^2
    } else {
        return half * half * x;    // Odd: x^5 = x * (x^2)^2
    }
}
```

**Key Learning**: Divide and conquer reduces O(n) to O(log n)

---

#### **Problem 2: Reverse a String (Recursion)** ⭐⭐
**Difficulty**: Easy  
**Topic**: String recursion  
**Time**: 20 minutes

**Problem Statement**:
Reverse a string using recursion.

**Solution:**
```java
public String reverseString(String str) {
    // Base case
    if (str.isEmpty()) {
        return str;
    }
    
    // Recursive case: last char + reverse of remaining
    return str.charAt(str.length() - 1) + 
           reverseString(str.substring(0, str.length() - 1));
}

// Alternative approach
public String reverse(String str) {
    if (str.length() <= 1) return str;
    
    return reverse(str.substring(1)) + str.charAt(0);
}

// Example: reverse("hello")
// reverse("ello") + 'h'
// reverse("llo") + 'e' + 'h'
// reverse("lo") + 'l' + 'e' + 'h'
// reverse("o") + 'l' + 'l' + 'e' + 'h'
// "o" + 'l' + 'l' + 'e' + 'h' = "olleh"
```

---

#### **Problem 3: Sum of Digits** ⭐⭐
**Difficulty**: Easy  
**Topic**: Number recursion  
**Time**: 20 minutes

**Problem Statement**:
Find sum of digits of a number using recursion.

**Solution:**
```java
public int sumOfDigits(int n) {
    // Base case
    if (n == 0) {
        return 0;
    }
    
    // Recursive case: last digit + sum of remaining
    return (n % 10) + sumOfDigits(n / 10);
}

// Example: sumOfDigits(1234)
// 4 + sumOfDigits(123)
// 4 + 3 + sumOfDigits(12)
// 4 + 3 + 2 + sumOfDigits(1)
// 4 + 3 + 2 + 1 + sumOfDigits(0)
// 4 + 3 + 2 + 1 + 0 = 10
```

---

## 🌅 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 3:30 PM: Java Advanced OOP - Inheritance (1.5 hours)**

#### 📚 **Inheritance Deep Dive**

**Study Resources**:
- **Video**: [Inheritance in Java](https://www.youtube.com/watch?v=9JpNY-XAseg) (25 min)
- **Java Docs**: [Inheritance Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/subclasses.html)

**📝 Key Concepts:**
```
✅ Inheritance (IS-A Relationship):
   - Allows a class to inherit properties and methods from another class
   - Parent Class (Superclass) → Child Class (Subclass)
   - Promotes code reusability
   - Supports polymorphism

✅ Types of Inheritance:
   1. Single Inheritance: A → B
   2. Multilevel Inheritance: A → B → C
   3. Hierarchical Inheritance: A → B, A → C
   4. Multiple Inheritance: NOT supported in Java (use interfaces)

✅ Key Keywords:
   - extends: Create subclass
   - super: Access parent class members
   - this: Access current class members
   - final: Prevent inheritance/overriding
```

#### **Inheritance Implementation**
```java
// Parent class (Superclass)
class Animal {
    String name;
    int age;
    
    // Constructor
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
}

// Child class (Subclass)
class Dog extends Animal {
    String breed;
    
    // Constructor
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    // New method specific to Dog
    public void bark() {
        System.out.println(name + " is barking");
    }
    
    // Override parent method
    @Override
    public void eat() {
        System.out.println(name + " the " + breed + " is eating dog food");
    }
}

// Usage
public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", 3, "Golden Retriever");
        dog.eat();    // Overridden method
        dog.sleep();  // Inherited method
        dog.bark();   // Dog-specific method
    }
}
```

#### **Method Overriding**
```java
class Parent {
    public void display() {
        System.out.println("Parent display");
    }
    
    public void show() {
        System.out.println("Parent show");
    }
}

class Child extends Parent {
    // Override display method
    @Override
    public void display() {
        super.display();  // Call parent method
        System.out.println("Child display");
    }
    
    // Inherited show method
}

// Rules for Method Overriding:
// 1. Same method signature (name, parameters)
// 2. Same or covariant return type
// 3. Cannot have more restrictive access modifier
// 4. Cannot override final, static, or private methods
```

#### **Super Keyword Usage**
```java
class Vehicle {
    int maxSpeed = 120;
    
    public void start() {
        System.out.println("Vehicle starting");
    }
}

class Car extends Vehicle {
    int maxSpeed = 180;
    
    public void displaySpeed() {
        System.out.println("Car max speed: " + maxSpeed);           // 180
        System.out.println("Vehicle max speed: " + super.maxSpeed); // 120
    }
    
    @Override
    public void start() {
        super.start();  // Call parent method first
        System.out.println("Car engine started");
    }
}
```

---

### **3:30 PM - 5:00 PM: Polymorphism & Abstract Classes (1.5 hours)**

#### **Polymorphism (Many Forms)**
```java
// Compile-time Polymorphism (Method Overloading)
class Calculator {
    public int add(int a, int b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
}

// Runtime Polymorphism (Method Overriding)
class Shape {
    public void draw() {
        System.out.println("Drawing shape");
    }
}

class Circle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

class Rectangle extends Shape {
    @Override
    public void draw() {
        System.out.println("Drawing rectangle");
    }
}

// Usage
Shape shape1 = new Circle();      // Upcasting
Shape shape2 = new Rectangle();
shape1.draw();  // "Drawing circle" - Runtime polymorphism
shape2.draw();  // "Drawing rectangle"
```

#### **Abstract Classes**
```java
// Abstract class - cannot be instantiated
abstract class Employee {
    String name;
    int id;
    
    public Employee(String name, int id) {
        this.name = name;
        this.id = id;
    }
    
    // Abstract method - must be implemented by subclass
    abstract double calculateSalary();
    
    // Concrete method
    public void displayInfo() {
        System.out.println("Employee: " + name + ", ID: " + id);
    }
}

class FullTimeEmployee extends Employee {
    double monthlySalary;
    
    public FullTimeEmployee(String name, int id, double salary) {
        super(name, id);
        this.monthlySalary = salary;
    }
    
    @Override
    double calculateSalary() {
        return monthlySalary;
    }
}

class PartTimeEmployee extends Employee {
    double hourlyRate;
    int hoursWorked;
    
    public PartTimeEmployee(String name, int id, double rate, int hours) {
        super(name, id);
        this.hourlyRate = rate;
        this.hoursWorked = hours;
    }
    
    @Override
    double calculateSalary() {
        return hourlyRate * hoursWorked;
    }
}

// Usage
Employee emp1 = new FullTimeEmployee("Alice", 101, 5000);
Employee emp2 = new PartTimeEmployee("Bob", 102, 20, 80);

System.out.println(emp1.calculateSalary());  // 5000
System.out.println(emp2.calculateSalary());  // 1600
```

---

## 🌆 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:30 PM: Advanced Recursion Problems (1.5 hours)**

#### **Problem 4: Climbing Stairs (LeetCode #70)** ⭐⭐⭐
**Difficulty**: Easy (but important pattern)  
**Topic**: Dynamic Programming foundation  
**Time**: 30 minutes

**Problem Statement**:
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. How many distinct ways can you climb to the top?

**Solution:**
```java
// Recursive solution (exponential time)
public int climbStairs(int n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    
    return climbStairs(n - 1) + climbStairs(n - 2);
}

// Optimized with Memoization O(n)
public int climbStairsMemo(int n) {
    int[] memo = new int[n + 1];
    return helper(n, memo);
}

private int helper(int n, int[] memo) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    
    if (memo[n] != 0) return memo[n];
    
    memo[n] = helper(n - 1, memo) + helper(n - 2, memo);
    return memo[n];
}
```

---

#### **Problem 5: Generate Parentheses (LeetCode #22)** ⭐⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Backtracking (Introduction)  
**Time**: 35 minutes

**Problem Statement**:
Generate all combinations of well-formed parentheses for n pairs.

**Solution:**
```java
public List<String> generateParenthesis(int n) {
    List<String> result = new ArrayList<>();
    backtrack(result, "", 0, 0, n);
    return result;
}

private void backtrack(List<String> result, String current, 
                       int open, int close, int max) {
    // Base case
    if (current.length() == max * 2) {
        result.add(current);
        return;
    }
    
    // Add opening parenthesis if we haven't used all
    if (open < max) {
        backtrack(result, current + "(", open + 1, close, max);
    }
    
    // Add closing parenthesis if it doesn't exceed opening
    if (close < open) {
        backtrack(result, current + ")", open, close + 1, max);
    }
}

// Example: n = 2
// Output: ["(())", "()()"]
```

---

#### **Problem 6: Permutations (LeetCode #46)** ⭐⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Backtracking  
**Time**: 25 minutes

**Solution:**
```java
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<>(), nums);
    return result;
}

private void backtrack(List<List<Integer>> result, 
                       List<Integer> current, int[] nums) {
    // Base case: permutation complete
    if (current.size() == nums.length) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int num : nums) {
        if (current.contains(num)) continue;  // Skip used elements
        
        current.add(num);                     // Choose
        backtrack(result, current, nums);     // Explore
        current.remove(current.size() - 1);   // Unchoose (backtrack)
    }
}
```

---

### **8:30 PM - 9:30 PM: Recursion Patterns & Practice (1 hour)**

#### **Common Recursion Patterns**

**Pattern 1: Linear Recursion**
```java
// Single recursive call per function execution
public void countdown(int n) {
    if (n == 0) return;
    System.out.println(n);
    countdown(n - 1);
}
```

**Pattern 2: Binary Recursion**
```java
// Two recursive calls per function execution
public int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**Pattern 3: Tail Recursion**
```java
// Recursive call is the last operation
public int factorial(int n, int accumulator) {
    if (n == 0) return accumulator;
    return factorial(n - 1, n * accumulator);
}
```

**Pattern 4: Multiple Recursion**
```java
// More than two recursive calls
public void towerOfHanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        System.out.println("Move disk 1 from " + from + " to " + to);
        return;
    }
    towerOfHanoi(n - 1, from, aux, to);
    System.out.println("Move disk " + n + " from " + from + " to " + to);
    towerOfHanoi(n - 1, aux, to, from);
}
```

---

### **9:30 PM - 10:00 PM: Day Summary & Tomorrow's Prep (30 minutes)**

#### **📊 Day 8 Achievements**
- [ ] Recursion theory and call stack understood
- [ ] Basic recursion problems solved (factorial, fibonacci, etc.)
- [ ] 6 recursion problems completed
- [ ] Java inheritance and polymorphism mastered
- [ ] Abstract classes implementation learned

#### **🎯 Key Learnings**
1. Every recursion needs a base case
2. Recursion naturally breaks problems into subproblems
3. Memoization optimizes recursive solutions
4. Inheritance promotes code reusability
5. Polymorphism enables flexible design

#### **📝 Tomorrow's Preview: DAY 9 - BACKTRACKING FUNDAMENTALS**
Topics:
- Backtracking algorithm pattern
- N-Queens problem
- Sudoku solver
- Subsets and combinations

---

## ✅ **DAY 8 COMPLETION CHECKLIST**

### **Morning Session**
- [ ] Recursion theory studied
- [ ] Call stack mechanism understood
- [ ] Power calculation solved (LeetCode #50)
- [ ] String reversal recursion practiced
- [ ] Sum of digits problem solved

### **Afternoon Session**
- [ ] Java inheritance concepts mastered
- [ ] Method overriding implemented
- [ ] Polymorphism examples practiced
- [ ] Abstract classes created

### **Evening Session**
- [ ] Climbing Stairs solved (LeetCode #70)
- [ ] Generate Parentheses solved (LeetCode #22)
- [ ] Permutations solved (LeetCode #46)
- [ ] Recursion patterns studied

### **Daily Goals**
- [ ] 6+ recursion problems solved ✅
- [ ] Java OOP advanced concepts learned ✅
- [ ] Notes updated ✅
- [ ] 9 hours completed ✅

---

## 📚 **RESOURCES FOR DAY 8**

**Videos:**
- Abdul Bari - Recursion (35 min)
- freeCodeCamp - Java OOP Tutorial (60 min)

**Reading:**
- GeeksforGeeks - Recursion Complete Guide
- Java Documentation - Inheritance

**Practice:**
- LeetCode Recursion Tag
- HackerRank Recursion Module

---

**End of Day 8 | Next: Day 9 - Backtracking Fundamentals** 🚀
