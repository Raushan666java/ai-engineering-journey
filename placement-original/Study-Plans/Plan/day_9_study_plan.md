# 🚀 **DAY 9: BACKTRACKING FUNDAMENTALS & JAVA INTERFACES**
## Complete Study Plan for Day 9 of 90-Day Placement Preparation

---

## 📅 **DAY 9 OVERVIEW**
**Date**: January 2, 2026 (Week 2 - Day 2)  
**Focus**: Backtracking Algorithm Pattern + Java Interfaces  
**Total Study Time**: 9 hours  
**Target**: Master backtracking technique and interface-based design  
**Key Skill**: Learn to explore all possibilities and backtrack when needed

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: Backtracking Theory & Framework (1.5 hours)**

#### 📚 **Learning Objectives**
- Understand backtracking algorithm paradigm
- Learn the backtracking decision tree approach
- Master the "choose, explore, unchoose" pattern
- Identify when to use backtracking

#### **Study Resources**
- **Video**: [Backtracking by Abdul Bari](https://www.youtube.com/watch?v=DKCbsiDBN6c) (30 min)
- **Video**: [Backtracking Explained](https://www.youtube.com/watch?v=Zq4upTEaQyM) (20 min)
- **GeeksforGeeks**: [Backtracking Introduction](https://www.geeksforgeeks.org/backtracking-introduction/)

**📝 Key Concepts:**
```
✅ What is Backtracking?
   - Algorithmic technique for solving problems recursively
   - Try to build solution incrementally
   - Remove solutions that fail to satisfy constraints
   - "Backtrack" when a solution doesn't work

✅ Backtracking vs Recursion vs Brute Force:
   - Brute Force: Try all possibilities (inefficient)
   - Recursion: Break problem into subproblems
   - Backtracking: Recursion + pruning invalid paths

✅ Backtracking Template:
   function backtrack(state):
       if is_solution(state):
           add_to_result(state)
           return
       
       for each choice in choices:
           if is_valid(choice):
               make_choice(choice)         # Choose
               backtrack(new_state)        # Explore
               undo_choice(choice)         # Unchoose (Backtrack)

✅ When to Use Backtracking:
   - Permutations and combinations
   - Sudoku, N-Queens puzzles
   - Pathfinding with constraints
   - Subset generation
   - Constraint satisfaction problems

✅ Time Complexity:
   - Usually exponential: O(b^d)
   - b = branching factor, d = depth
   - Pruning reduces actual runtime
```

#### **📝 Backtracking Framework Implementation (45 min)**

**Generic Backtracking Template:**
```java
class BacktrackingSolution {
    List<List<Integer>> result = new ArrayList<>();
    
    public List<List<Integer>> solve(int[] candidates) {
        backtrack(new ArrayList<>(), candidates, 0);
        return result;
    }
    
    private void backtrack(List<Integer> current, int[] candidates, int start) {
        // Base case: solution found
        if (isValidSolution(current)) {
            result.add(new ArrayList<>(current));
            return;  // or continue based on problem
        }
        
        // Try all possible choices
        for (int i = start; i < candidates.length; i++) {
            // Skip invalid choices
            if (!isValid(current, candidates[i])) {
                continue;
            }
            
            // Make choice
            current.add(candidates[i]);
            
            // Explore with this choice
            backtrack(current, candidates, i + 1);
            
            // Undo choice (backtrack)
            current.remove(current.size() - 1);
        }
    }
    
    private boolean isValidSolution(List<Integer> current) {
        // Define what makes a valid solution
        return true;
    }
    
    private boolean isValid(List<Integer> current, int candidate) {
        // Define validation logic
        return true;
    }
}
```

---

### **7:30 AM - 9:00 AM: Backtracking Problem Solving (1.5 hours)**

#### **Problem 1: Subsets (LeetCode #78)** ⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Subset generation  
**Time**: 30 minutes

**Problem Statement**:
Given an integer array nums of unique elements, return all possible subsets (the power set).

**Example**:
```
Input: nums = [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**Solution:**
```java
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    backtrack(result, new ArrayList<>(), nums, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, 
                       List<Integer> current, int[] nums, int start) {
    // Add current subset to result (all subsets are valid)
    result.add(new ArrayList<>(current));
    
    // Try adding each remaining element
    for (int i = start; i < nums.length; i++) {
        current.add(nums[i]);              // Choose
        backtrack(result, current, nums, i + 1);  // Explore
        current.remove(current.size() - 1);  // Unchoose
    }
}

// Time Complexity: O(2^n) - 2^n subsets
// Space Complexity: O(n) - recursion depth
```

---

#### **Problem 2: Combination Sum (LeetCode #39)** ⭐⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Combinations with reuse  
**Time**: 35 minutes

**Problem Statement**:
Find all unique combinations in candidates where the numbers sum to target.
Same number may be chosen unlimited times.

**Example**:
```
Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
```

**Solution:**
```java
public List<List<Integer>> combinationSum(int[] candidates, int target) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(candidates);  // Optional: helps pruning
    backtrack(result, new ArrayList<>(), candidates, target, 0);
    return result;
}

private void backtrack(List<List<Integer>> result, List<Integer> current,
                       int[] candidates, int remaining, int start) {
    if (remaining < 0) {
        return;  // Exceeded target, backtrack
    }
    
    if (remaining == 0) {
        result.add(new ArrayList<>(current));  // Found valid combination
        return;
    }
    
    for (int i = start; i < candidates.length; i++) {
        current.add(candidates[i]);
        // Note: i not i+1 because we can reuse same element
        backtrack(result, current, candidates, remaining - candidates[i], i);
        current.remove(current.size() - 1);
    }
}

// Time Complexity: O(N^(T/M))
// N = candidates length, T = target, M = minimal value
```

---

#### **Problem 3: Letter Combinations of Phone Number (LeetCode #17)** ⭐⭐⭐
**Difficulty**: Medium  
**Topic**: Backtracking with mapping  
**Time**: 25 minutes

**Solution:**
```java
class Solution {
    private static final String[] KEYPAD = {
        "",     // 0
        "",     // 1
        "abc",  // 2
        "def",  // 3
        "ghi",  // 4
        "jkl",  // 5
        "mno",  // 6
        "pqrs", // 7
        "tuv",  // 8
        "wxyz"  // 9
    };
    
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits == null || digits.length() == 0) {
            return result;
        }
        backtrack(result, new StringBuilder(), digits, 0);
        return result;
    }
    
    private void backtrack(List<String> result, StringBuilder current,
                           String digits, int index) {
        // Base case: processed all digits
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }
        
        // Get letters for current digit
        String letters = KEYPAD[digits.charAt(index) - '0'];
        
        // Try each letter
        for (char letter : letters.toCharArray()) {
            current.append(letter);              // Choose
            backtrack(result, current, digits, index + 1);  // Explore
            current.deleteCharAt(current.length() - 1);  // Unchoose
        }
    }
}

// Example: "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

---

## 🌅 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 3:30 PM: Java Interfaces (1.5 hours)**

#### 📚 **Interface Concepts**

**Study Resources**:
- **Video**: [Interfaces in Java](https://www.youtube.com/watch?v=GhslBwrRsnw) (25 min)
- **Java Docs**: [Interfaces Tutorial](https://docs.oracle.com/javase/tutorial/java/concepts/interface.html)

**📝 Key Concepts:**
```
✅ What is an Interface?
   - Blueprint of a class
   - Contains only abstract methods (Java 7)
   - Can have default and static methods (Java 8+)
   - Achieves 100% abstraction
   - Supports multiple inheritance

✅ Interface vs Abstract Class:
   Interface:
   - Only abstract methods (before Java 8)
   - Multiple inheritance supported
   - Variables are public static final
   
   Abstract Class:
   - Can have both abstract and concrete methods
   - Single inheritance only
   - Can have instance variables

✅ When to Use Interface:
   - Define a contract for classes
   - Achieve multiple inheritance
   - Loose coupling in design
   - API/framework design
```

#### **Interface Implementation**
```java
// Define interface
interface Animal {
    // Abstract methods (public abstract by default)
    void eat();
    void sleep();
    
    // Default method (Java 8+)
    default void breathe() {
        System.out.println("Breathing...");
    }
    
    // Static method (Java 8+)
    static void info() {
        System.out.println("Animals are living organisms");
    }
}

// Implement interface
class Dog implements Animal {
    @Override
    public void eat() {
        System.out.println("Dog is eating");
    }
    
    @Override
    public void sleep() {
        System.out.println("Dog is sleeping");
    }
    
    // Can override default method
    @Override
    public void breathe() {
        System.out.println("Dog is breathing");
    }
}

// Multiple interfaces
interface Flyable {
    void fly();
}

interface Swimmable {
    void swim();
}

class Duck implements Animal, Flyable, Swimmable {
    @Override
    public void eat() {
        System.out.println("Duck is eating");
    }
    
    @Override
    public void sleep() {
        System.out.println("Duck is sleeping");
    }
    
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
}
```

#### **Interface Examples - Collection Framework**
```java
// List interface example
List<String> arrayList = new ArrayList<>();
List<String> linkedList = new LinkedList<>();

// Map interface example
Map<String, Integer> hashMap = new HashMap<>();
Map<String, Integer> treeMap = new TreeMap<>();

// Set interface example
Set<Integer> hashSet = new HashSet<>();
Set<Integer> treeSet = new TreeSet<>();

// Comparable interface
class Student implements Comparable<Student> {
    String name;
    int marks;
    
    @Override
    public int compareTo(Student other) {
        return this.marks - other.marks;  // Sort by marks
    }
}

// Comparator interface
class StudentNameComparator implements Comparator<Student> {
    @Override
    public int compare(Student s1, Student s2) {
        return s1.name.compareTo(s2.name);  // Sort by name
    }
}
```

---

### **3:30 PM - 5:00 PM: Functional Interfaces & Lambda (1.5 hours)**

#### **Functional Interfaces (Java 8+)**
```java
// Functional interface: has exactly one abstract method
@FunctionalInterface
interface Calculator {
    int calculate(int a, int b);
    
    // Can have default methods
    default void printResult(int result) {
        System.out.println("Result: " + result);
    }
}

// Traditional implementation
Calculator addition = new Calculator() {
    @Override
    public int calculate(int a, int b) {
        return a + b;
    }
};

// Lambda expression (Java 8+)
Calculator addition = (a, b) -> a + b;
Calculator subtraction = (a, b) -> a - b;
Calculator multiplication = (a, b) -> a * b;

// Usage
int result = addition.calculate(10, 5);  // 15
```

#### **Built-in Functional Interfaces**
```java
import java.util.function.*;

// Predicate<T>: boolean test(T t)
Predicate<Integer> isEven = num -> num % 2 == 0;
System.out.println(isEven.test(4));  // true

// Function<T, R>: R apply(T t)
Function<String, Integer> stringLength = str -> str.length();
System.out.println(stringLength.apply("Hello"));  // 5

// Consumer<T>: void accept(T t)
Consumer<String> printer = str -> System.out.println(str);
printer.accept("Hello World");

// Supplier<T>: T get()
Supplier<Double> randomValue = () -> Math.random();
System.out.println(randomValue.get());

// BiFunction<T, U, R>: R apply(T t, U u)
BiFunction<Integer, Integer, Integer> add = (a, b) -> a + b;
System.out.println(add.apply(5, 3));  // 8

// Using with collections
List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6);

// Filter even numbers
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)
    .collect(Collectors.toList());

// Map to squares
List<Integer> squares = numbers.stream()
    .map(n -> n * n)
    .collect(Collectors.toList());

// Sum all numbers
int sum = numbers.stream()
    .reduce(0, (a, b) -> a + b);
```

---

## 🌆 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:30 PM: Classic Backtracking Problems (1.5 hours)**

#### **Problem 4: N-Queens Problem (LeetCode #51)** ⭐⭐⭐⭐⭐
**Difficulty**: Hard  
**Topic**: Classic backtracking  
**Time**: 45 minutes

**Problem Statement**:
Place N chess queens on an N×N chessboard so no two queens attack each other.

**Solution:**
```java
public List<List<String>> solveNQueens(int n) {
    List<List<String>> result = new ArrayList<>();
    char[][] board = new char[n][n];
    
    // Initialize board with '.'
    for (int i = 0; i < n; i++) {
        Arrays.fill(board[i], '.');
    }
    
    backtrack(result, board, 0);
    return result;
}

private void backtrack(List<List<String>> result, char[][] board, int row) {
    if (row == board.length) {
        result.add(construct(board));  // Found valid solution
        return;
    }
    
    for (int col = 0; col < board.length; col++) {
        if (isValid(board, row, col)) {
            board[row][col] = 'Q';  // Place queen
            backtrack(result, board, row + 1);  // Explore
            board[row][col] = '.';  // Remove queen (backtrack)
        }
    }
}

private boolean isValid(char[][] board, int row, int col) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 'Q') return false;
    }
    
    // Check upper-left diagonal
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }
    
    // Check upper-right diagonal
    for (int i = row - 1, j = col + 1; i >= 0 && j < board.length; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }
    
    return true;
}

private List<String> construct(char[][] board) {
    List<String> result = new ArrayList<>();
    for (char[] row : board) {
        result.add(new String(row));
    }
    return result;
}
```

---

#### **Problem 5: Word Search (LeetCode #79)** ⭐⭐⭐⭐
**Difficulty**: Medium  
**Topic**: 2D grid backtracking  
**Time**: 35 minutes

**Solution:**
```java
public boolean exist(char[][] board, String word) {
    for (int i = 0; i < board.length; i++) {
        for (int j = 0; j < board[0].length; j++) {
            if (backtrack(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
}

private boolean backtrack(char[][] board, String word, 
                          int i, int j, int index) {
    // Found complete word
    if (index == word.length()) {
        return true;
    }
    
    // Boundary checks
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
        return false;
    }
    
    // Character doesn't match or already visited
    if (board[i][j] != word.charAt(index)) {
        return false;
    }
    
    // Mark as visited
    char temp = board[i][j];
    board[i][j] = '#';
    
    // Explore all 4 directions
    boolean found = backtrack(board, word, i + 1, j, index + 1) ||
                    backtrack(board, word, i - 1, j, index + 1) ||
                    backtrack(board, word, i, j + 1, index + 1) ||
                    backtrack(board, word, i, j - 1, index + 1);
    
    // Restore (backtrack)
    board[i][j] = temp;
    
    return found;
}
```

---

### **8:30 PM - 9:30 PM: Backtracking Practice & Patterns (1 hour)**

#### **Problem 6: Palindrome Partitioning (LeetCode #131)** ⭐⭐⭐⭐
**Difficulty**: Medium  
**Time**: 30 minutes

**Solution:**
```java
public List<List<String>> partition(String s) {
    List<List<String>> result = new ArrayList<>();
    backtrack(result, new ArrayList<>(), s, 0);
    return result;
}

private void backtrack(List<List<String>> result, List<String> current,
                       String s, int start) {
    if (start == s.length()) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    for (int end = start; end < s.length(); end++) {
        if (isPalindrome(s, start, end)) {
            current.add(s.substring(start, end + 1));
            backtrack(result, current, s, end + 1);
            current.remove(current.size() - 1);
        }
    }
}

private boolean isPalindrome(String s, int left, int right) {
    while (left < right) {
        if (s.charAt(left++) != s.charAt(right--)) {
            return false;
        }
    }
    return true;
}
```

---

### **9:30 PM - 10:00 PM: Day Review & Planning (30 minutes)**

#### **📊 Day 9 Achievements**
- [ ] Backtracking algorithm pattern mastered
- [ ] 6+ backtracking problems solved
- [ ] Java interfaces and functional programming learned
- [ ] Lambda expressions practiced

#### **🎯 Key Backtracking Patterns Learned**
1. **Subset/Combination Pattern**: Try adding each element
2. **Permutation Pattern**: Try each unused element
3. **Grid Search Pattern**: Explore 4 directions
4. **Constraint Satisfaction**: N-Queens, Sudoku

#### **📝 Tomorrow: DAY 10 - BINARY TREES INTRODUCTION**
- Tree data structure basics
- Tree traversal algorithms
- Binary tree problems

---

## ✅ **DAY 9 COMPLETION CHECKLIST**

- [ ] Backtracking framework understood ✅
- [ ] Subsets problem solved ✅
- [ ] Combination Sum solved ✅
- [ ] N-Queens problem solved ✅
- [ ] Word Search completed ✅
- [ ] Java interfaces mastered ✅
- [ ] Lambda expressions learned ✅

---

**End of Day 9 | Next: Day 10 - Binary Trees Introduction** 🌳
