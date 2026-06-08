# 🚀 **DAY 3: SLIDING WINDOW TECHNIQUE & JAVA ARRAYS**
## Complete Study Plan for Day 3 of 90-Day Placement Preparation

---

## 📅 **DAY 3 OVERVIEW**
**Date**: December 3, 2025  
**Focus**: Sliding Window Pattern + Java Arrays & Methods  
**Total Study Time**: 9 hours  
**Target**: Master sliding window optimization technique  

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: DSA - Sliding Window Technique (1.5 hours)**

#### **Learning Objectives**
- Understand sliding window pattern for subarray/substring problems
- Differentiate between fixed and variable size windows
- Optimize brute force O(n²) to O(n) using sliding window
- Master window expansion and contraction logic

#### **Study Resources**

**📖 Primary Reading:**
- **GeeksforGeeks**: [Sliding Window Technique](https://www.geeksforgeeks.org/window-sliding-technique/)
- **LeetCode**: [Sliding Window Patterns](https://leetcode.com/discuss/study-guide/657507/Sliding-Window-for-Beginners-Problems-or-Template)

**🎥 Video Resources:**
1. **NeetCode - Sliding Window** (15 min)
   - URL: https://www.youtube.com/watch?v=jM2dhDPYMQM
   - Focus: Pattern recognition and template

2. **take U forward - Sliding Window** (25 min)
   - URL: https://www.youtube.com/watch?v=9kdHxplyl5I
   - Focus: Multiple problem variations

**📝 Key Concepts:**
```
✅ Sliding Window Types:
   1. Fixed Size Window (constant k)
   2. Variable Size Window (dynamic expansion/contraction)

✅ Common Patterns:
   - Maximum/Minimum sum of k elements
   - Longest substring with conditions
   - Find all anagrams in string
   - Minimum window substring

✅ Template Structure:
   - Initialize window (left, right pointers)
   - Expand window (move right)
   - Process current window
   - Contract window when needed (move left)
   - Track optimal result

✅ Time Complexity: O(n) - each element visited at most twice
✅ Space Complexity: Usually O(k) or O(1)
```

#### **Sliding Window Template:**
```java
// Fixed Size Window
int maxSum(int[] arr, int k) {
    int n = arr.length;
    int windowSum = 0, maxSum = 0;
    
    // First window
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;
    
    // Slide the window
    for (int i = k; i < n; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }
    return maxSum;
}

// Variable Size Window
int longestSubstring(String s) {
    Set<Character> set = new HashSet<>();
    int left = 0, maxLen = 0;
    
    for (int right = 0; right < s.length(); right++) {
        // Expand window
        while (set.contains(s.charAt(right))) {
            // Contract window
            set.remove(s.charAt(left));
            left++;
        }
        set.add(s.charAt(right));
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
```

---

### **7:30 AM - 9:00 AM: Java Arrays & Methods (1.5 hours)**

#### **Topics to Cover**

**1. Array Declaration and Initialization (20 min)**
```java
// Different ways to declare arrays
int[] numbers1 = new int[5];                    // Default values (0)
int[] numbers2 = {1, 2, 3, 4, 5};              // Array literal
int[] numbers3 = new int[]{10, 20, 30};        // Explicit initialization

// Multi-dimensional arrays
int[][] matrix = new int[3][4];                 // 3x4 matrix
int[][] grid = {{1,2}, {3,4}, {5,6}};          // Jagged array

// Array of objects
String[] names = {"Alice", "Bob", "Charlie"};
Person[] people = new Person[10];
```

**2. Array Methods and Operations (30 min)**
```java
import java.util.Arrays;

class ArrayOperations {
    public static void main(String[] args) {
        int[] arr = {5, 2, 8, 1, 9};
        
        // 1. Length
        System.out.println("Length: " + arr.length);
        
        // 2. Sorting
        Arrays.sort(arr);
        System.out.println("Sorted: " + Arrays.toString(arr));
        
        // 3. Binary Search (array must be sorted)
        int index = Arrays.binarySearch(arr, 8);
        System.out.println("Index of 8: " + index);
        
        // 4. Fill
        int[] filled = new int[5];
        Arrays.fill(filled, 7);
        System.out.println("Filled: " + Arrays.toString(filled));
        
        // 5. Copy
        int[] copy1 = Arrays.copyOf(arr, arr.length);
        int[] copy2 = Arrays.copyOfRange(arr, 1, 4);
        
        // 6. Equals
        boolean areEqual = Arrays.equals(arr, copy1);
        System.out.println("Equal: " + areEqual);
        
        // 7. Compare
        int comparison = Arrays.compare(arr, copy1);
        
        // 8. Convert to String
        String arrString = Arrays.toString(arr);
        System.out.println(arrString);
    }
}
```

**3. Java Methods (40 min)**
```java
class MethodsDemo {
    // Method with return value
    public static int add(int a, int b) {
        return a + b;
    }
    
    // Method without return value (void)
    public static void greet(String name) {
        System.out.println("Hello, " + name);
    }
    
    // Method with array parameter
    public static int sumArray(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
    
    // Method returning array
    public static int[] getRange(int start, int end) {
        int[] range = new int[end - start + 1];
        for (int i = 0; i < range.length; i++) {
            range[i] = start + i;
        }
        return range;
    }
    
    // Method overloading
    public static int multiply(int a, int b) {
        return a * b;
    }
    
    public static double multiply(double a, double b) {
        return a * b;
    }
    
    public static int multiply(int a, int b, int c) {
        return a * b * c;
    }
    
    // Varargs (variable arguments)
    public static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    public static void main(String[] args) {
        System.out.println(add(5, 3));
        greet("Alice");
        
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Sum: " + sumArray(arr));
        
        System.out.println("Product: " + multiply(2, 3));
        System.out.println("Sum: " + sum(1, 2, 3, 4, 5));
    }
}
```

**4. Pass by Value vs Reference (20 min)**
```java
class PassByExample {
    // Primitive types: pass by value (copy)
    public static void modifyPrimitive(int x) {
        x = 100;  // Only modifies local copy
    }
    
    // Arrays: pass by reference
    public static void modifyArray(int[] arr) {
        arr[0] = 100;  // Modifies original array
    }
    
    public static void main(String[] args) {
        int num = 5;
        modifyPrimitive(num);
        System.out.println(num);  // Still 5
        
        int[] array = {1, 2, 3};
        modifyArray(array);
        System.out.println(array[0]);  // Now 100
    }
}
```

---

## 🕑 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 5:00 PM: LeetCode Practice - Sliding Window Problems (3 hours)**

#### **Problem 1: Maximum Average Subarray I** ⭐ EASY
**LeetCode #643**
- **URL**: https://leetcode.com/problems/maximum-average-subarray-i/
- **Time**: 30-40 minutes
- **Type**: Fixed Size Sliding Window

**Problem Statement:**
Find contiguous subarray of length k with maximum average value.

**Approach:**
```
1. Calculate sum of first k elements (initial window)
2. Slide window by adding next element and removing first
3. Track maximum sum found
4. Return max sum / k as average
```

**Solution:**
```java
class Solution {
    public double findMaxAverage(int[] nums, int k) {
        // Calculate first window sum
        int windowSum = 0;
        for (int i = 0; i < k; i++) {
            windowSum += nums[i];
        }
        
        int maxSum = windowSum;
        
        // Slide the window
        for (int i = k; i < nums.length; i++) {
            // Add new element, remove old element
            windowSum = windowSum + nums[i] - nums[i - k];
            maxSum = Math.max(maxSum, windowSum);
        }
        
        return (double) maxSum / k;
    }
}
```

**Complexity:**
- Time: O(n) - single pass through array
- Space: O(1) - constant extra space

---

#### **Problem 2: Longest Substring Without Repeating Characters** ⭐⭐ MEDIUM
**LeetCode #3**
- **URL**: https://leetcode.com/problems/longest-substring-without-repeating-characters/
- **Time**: 40-50 minutes
- **Type**: Variable Size Sliding Window

**Problem Statement:**
Find length of longest substring without repeating characters.

**Approach:**
```
1. Use Set to track characters in current window
2. Expand window by moving right pointer
3. If duplicate found, contract window from left
4. Track maximum window size
```

**Solution:**
```java
class Solution {
    public int lengthOfLongestSubstring(String s) {
        Set<Character> window = new HashSet<>();
        int left = 0;
        int maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);
            
            // Contract window until no duplicate
            while (window.contains(currentChar)) {
                window.remove(s.charAt(left));
                left++;
            }
            
            // Expand window
            window.add(currentChar);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}

// Alternative: Using HashMap for character indices
class Solution2 {
    public int lengthOfLongestSubstring(String s) {
        Map<Character, Integer> charIndex = new HashMap<>();
        int left = 0;
        int maxLength = 0;
        
        for (int right = 0; right < s.length(); right++) {
            char currentChar = s.charAt(right);
            
            // If character seen before and in current window
            if (charIndex.containsKey(currentChar) && 
                charIndex.get(currentChar) >= left) {
                left = charIndex.get(currentChar) + 1;
            }
            
            charIndex.put(currentChar, right);
            maxLength = Math.max(maxLength, right - left + 1);
        }
        
        return maxLength;
    }
}
```

**Complexity:**
- Time: O(n) - each character visited at most twice
- Space: O(min(n, m)) where m is charset size

---

#### **Problem 3: Minimum Size Subarray Sum** ⭐⭐ MEDIUM
**LeetCode #209**
- **URL**: https://leetcode.com/problems/minimum-size-subarray-sum/
- **Time**: 40-50 minutes
- **Type**: Variable Size Sliding Window

**Problem Statement:**
Find minimal length of contiguous subarray with sum ≥ target.

**Approach:**
```
1. Expand window by adding elements until sum >= target
2. Once condition met, try to minimize by contracting from left
3. Track minimum window size that satisfies condition
4. Return 0 if no valid window found
```

**Solution:**
```java
class Solution {
    public int minSubArrayLen(int target, int[] nums) {
        int left = 0;
        int windowSum = 0;
        int minLength = Integer.MAX_VALUE;
        
        for (int right = 0; right < nums.length; right++) {
            // Expand window
            windowSum += nums[right];
            
            // Contract window while condition is satisfied
            while (windowSum >= target) {
                minLength = Math.min(minLength, right - left + 1);
                windowSum -= nums[left];
                left++;
            }
        }
        
        return minLength == Integer.MAX_VALUE ? 0 : minLength;
    }
}
```

**Complexity:**
- Time: O(n) - each element processed at most twice
- Space: O(1)

---

#### **Problem 4: Permutation in String** ⭐⭐ MEDIUM
**LeetCode #567**
- **URL**: https://leetcode.com/problems/permutation-in-string/
- **Time**: 50-60 minutes
- **Type**: Fixed Size Sliding Window with Frequency Map

**Problem Statement:**
Check if s2 contains permutation of s1.

**Approach:**
```
1. Count frequency of characters in s1
2. Use sliding window of size s1.length() on s2
3. Compare frequency maps at each window position
4. Return true if frequencies match
```

**Solution:**
```java
class Solution {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;
        
        // Frequency arrays for lowercase letters
        int[] s1Freq = new int[26];
        int[] windowFreq = new int[26];
        
        // Count s1 characters
        for (char c : s1.toCharArray()) {
            s1Freq[c - 'a']++;
        }
        
        int windowSize = s1.length();
        
        // Process first window
        for (int i = 0; i < windowSize; i++) {
            windowFreq[s2.charAt(i) - 'a']++;
        }
        
        if (Arrays.equals(s1Freq, windowFreq)) return true;
        
        // Slide the window
        for (int i = windowSize; i < s2.length(); i++) {
            // Add new character
            windowFreq[s2.charAt(i) - 'a']++;
            // Remove old character
            windowFreq[s2.charAt(i - windowSize) - 'a']--;
            
            if (Arrays.equals(s1Freq, windowFreq)) return true;
        }
        
        return false;
    }
}

// Optimized: Count matching characters
class Solution2 {
    public boolean checkInclusion(String s1, String s2) {
        if (s1.length() > s2.length()) return false;
        
        int[] count = new int[26];
        for (char c : s1.toCharArray()) {
            count[c - 'a']++;
        }
        
        int left = 0, right = 0, required = s1.length();
        
        while (right < s2.length()) {
            // If character is needed, decrease required count
            if (count[s2.charAt(right) - 'a'] > 0) {
                required--;
            }
            count[s2.charAt(right) - 'a']--;
            right++;
            
            // If all characters matched
            if (required == 0) return true;
            
            // Maintain window size
            if (right - left == s1.length()) {
                if (count[s2.charAt(left) - 'a'] >= 0) {
                    required++;
                }
                count[s2.charAt(left) - 'a']++;
                left++;
            }
        }
        
        return false;
    }
}
```

**Complexity:**
- Time: O(n) where n = s2.length()
- Space: O(1) - fixed size array (26)

---

## 🕖 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:00 PM: Theory - Complexity Analysis (1 hour)**

#### **Best, Worst, and Average Case Analysis**

**📖 Study Resources:**
- **Article**: https://www.geeksforgeeks.org/analysis-of-algorithms-set-2-asymptotic-analysis/
- **Video**: https://www.youtube.com/watch?v=FEnwM0OyHJY

**Key Concepts:**

**1. Best Case Analysis (Ω notation)**
```java
// Binary Search Best Case: O(1)
int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;  // Found immediately!
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
// Best Case: Element is at middle position - O(1)
// Average Case: O(log n)
// Worst Case: Element not present - O(log n)
```

**2. Average Case Analysis (Θ notation)**
```java
// Linear Search Average Case: O(n/2) = O(n)
int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) return i;
    }
    return -1;
}
// Best Case: Element at first position - O(1)
// Average Case: Element in middle - O(n/2) = O(n)
// Worst Case: Element at last or not present - O(n)
```

**3. Worst Case Analysis (O notation)**
```java
// Quick Sort Worst Case: O(n²)
void quickSort(int[] arr, int low, int high) {
    if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
    }
}
// Best Case: Balanced partitions - O(n log n)
// Average Case: O(n log n)
// Worst Case: Already sorted array - O(n²)
```

**4. Amortized Analysis**
```java
// ArrayList add() - Amortized O(1)
// Most additions are O(1), but occasionally O(n) when resizing
// Over n operations, total cost is O(n), so amortized cost is O(1)
```

---

### **8:00 PM - 9:30 PM: Project Work - Structure Planning (1.5 hours)**

#### **Project: Student Management System**

**1. Project Overview (15 min)**
```
Name: Student Management System
Type: Console-based Java Application
Purpose: Practice OOP concepts and data structures
Features:
- Add/Update/Delete students
- Search students
- Display all students
- Calculate statistics (average, top performers)
- Save/Load data from file
```

**2. Class Design (30 min)**
```java
// Student.java
public class Student {
    private String id;
    private String name;
    private int age;
    private double[] marks;  // Marks in different subjects
    
    // Constructor
    public Student(String id, String name, int age, double[] marks) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.marks = marks;
    }
    
    // Getters and Setters
    public String getId() { return id; }
    public String getName() { return name; }
    public int getAge() { return age; }
    public double[] getMarks() { return marks; }
    
    // Calculate average marks
    public double getAverage() {
        double sum = 0;
        for (double mark : marks) {
            sum += mark;
        }
        return sum / marks.length;
    }
    
    // Display student info
    public void display() {
        System.out.println("ID: " + id);
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Average: " + getAverage());
    }
}

// StudentManager.java
import java.util.*;

public class StudentManager {
    private ArrayList<Student> students;
    
    public StudentManager() {
        students = new ArrayList<>();
    }
    
    // Add student
    public void addStudent(Student student) {
        students.add(student);
    }
    
    // Search by ID
    public Student searchById(String id) {
        for (Student student : students) {
            if (student.getId().equals(id)) {
                return student;
            }
        }
        return null;
    }
    
    // Delete student
    public boolean deleteStudent(String id) {
        return students.removeIf(s -> s.getId().equals(id));
    }
    
    // Display all
    public void displayAll() {
        for (Student student : students) {
            student.display();
            System.out.println("---");
        }
    }
    
    // Get top performers
    public List<Student> getTopPerformers(int count) {
        List<Student> sorted = new ArrayList<>(students);
        sorted.sort((s1, s2) -> 
            Double.compare(s2.getAverage(), s1.getAverage()));
        return sorted.subList(0, Math.min(count, sorted.size()));
    }
}
```

**3. Main Application (30 min)**
```java
// Main.java
import java.util.Scanner;

public class Main {
    private static StudentManager manager = new StudentManager();
    private static Scanner scanner = new Scanner(System.in);
    
    public static void main(String[] args) {
        while (true) {
            displayMenu();
            int choice = scanner.nextInt();
            scanner.nextLine(); // Consume newline
            
            switch (choice) {
                case 1: addStudent(); break;
                case 2: searchStudent(); break;
                case 3: deleteStudent(); break;
                case 4: displayAll(); break;
                case 5: showTopPerformers(); break;
                case 6: System.exit(0);
                default: System.out.println("Invalid choice!");
            }
        }
    }
    
    private static void displayMenu() {
        System.out.println("\n=== Student Management System ===");
        System.out.println("1. Add Student");
        System.out.println("2. Search Student");
        System.out.println("3. Delete Student");
        System.out.println("4. Display All Students");
        System.out.println("5. Top Performers");
        System.out.println("6. Exit");
        System.out.print("Enter choice: ");
    }
    
    private static void addStudent() {
        System.out.print("Enter ID: ");
        String id = scanner.nextLine();
        System.out.print("Enter Name: ");
        String name = scanner.nextLine();
        System.out.print("Enter Age: ");
        int age = scanner.nextInt();
        
        System.out.print("Number of subjects: ");
        int numSubjects = scanner.nextInt();
        double[] marks = new double[numSubjects];
        
        for (int i = 0; i < numSubjects; i++) {
            System.out.print("Enter marks for subject " + (i+1) + ": ");
            marks[i] = scanner.nextDouble();
        }
        
        Student student = new Student(id, name, age, marks);
        manager.addStudent(student);
        System.out.println("Student added successfully!");
    }
    
    // Implement other methods similarly...
}
```

**4. GitHub Commit (15 min)**
```powershell
# Create project directory
cd C:\xampp\htdocs\Placement
mkdir Projects\StudentManagementSystem
cd Projects\StudentManagementSystem

# Create files
# Add the code above to respective files

# Git operations
git add .
git commit -m "Day 3: Project structure planning - Student Management System"
git push origin main
```

---

### **9:30 PM - 10:00 PM: Daily Review & Planning (30 min)**

#### **Review Checklist**

**✅ What I Learned Today:**
```
1. Sliding window technique (fixed & variable size)
2. When to use sliding window vs other approaches
3. Java array methods (sort, search, copy, fill)
4. Java method declaration, overloading, varargs
5. Pass by value vs reference in Java
6. Complexity analysis (best, average, worst cases)
```

**✅ Problems Solved:**
```
1. Maximum Average Subarray (LeetCode #643) ✅
2. Longest Substring Without Repeating (LeetCode #3) ✅
3. Minimum Size Subarray Sum (LeetCode #209) ✅
4. Permutation in String (LeetCode #567) ✅
```

**✅ Code Statistics:**
```
- Total problems solved today: 4
- Cumulative problems (Days 1-3): 11
- Lines of code written: ~250
- Project classes created: 3
```

**✅ Update Progress Tracker:**
- Fill in Day 3 section in DAILY_PROGRESS_TRACKER.md
- Update GitHub with today's work
- Note sliding window pattern learnings

**🎯 Tomorrow's Preview (Day 4):**
```
- String manipulation techniques
- Java OOP: Classes and Objects
- String problems on LeetCode (4 problems)
- DBMS: Introduction and ER diagrams
- Database schema design for project
```

---

## 📝 **DAY 3 CHECKLIST**

### Morning (6:00 AM - 9:00 AM)
- [ ] Study sliding window technique theory
- [ ] Watch NeetCode and take U forward videos
- [ ] Learn Java array methods
- [ ] Understand method declaration and overloading
- [ ] Practice with example programs

### Afternoon (2:00 PM - 5:00 PM)
- [ ] Solve LeetCode #643 (Maximum Average Subarray)
- [ ] Solve LeetCode #3 (Longest Substring)
- [ ] Solve LeetCode #209 (Minimum Size Subarray Sum)
- [ ] Solve LeetCode #567 (Permutation in String)
- [ ] Submit all solutions and verify

### Evening (7:00 PM - 10:00 PM)
- [ ] Study complexity analysis (best/worst/average)
- [ ] Design Student Management System
- [ ] Create project structure and classes
- [ ] Write main application logic
- [ ] Commit code to GitHub
- [ ] Update progress tracker

---

## 💡 **TIPS FOR DAY 3**

1. **Sliding Window Recognition:**
   - Keyword: "subarray", "substring", "contiguous"
   - Look for optimization opportunity from O(n²) to O(n)
   - Identify if window size is fixed or variable

2. **Template Usage:**
   - Start with the template provided
   - Modify based on problem requirements
   - Track what to add/remove from window

3. **Java Arrays:**
   - Always use Arrays.toString() for printing
   - Remember Arrays.sort() is in-place
   - Binary search requires sorted array

4. **Project Development:**
   - Plan before coding
   - Follow OOP principles
   - Write clean, readable code

---

## 🎯 **SUCCESS METRICS FOR DAY 3**

✅ **Must Complete:**
- Master sliding window pattern ✓
- Solve at least 3 sliding window problems ✓
- Learn Java arrays and methods ✓
- Start project structure ✓

✅ **Bonus:**
- Solve all 4 problems
- Understand complexity tradeoffs
- Complete project class design

---

## 📚 **ADDITIONAL RESOURCES**

### Sliding Window
- [LeetCode Pattern Guide](https://leetcode.com/tag/sliding-window/)
- [14 Patterns to Ace Interview](https://hackernoon.com/14-patterns-to-ace-any-coding-interview-question-c5bb3357f6ed)

### Java Arrays
- [Oracle Java Arrays Tutorial](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/arrays.html)
- [Java Methods](https://www.w3schools.com/java/java_methods.asp)

---

## 🔥 **MOTIVATION**

> "Success is the sum of small efforts repeated day in and day out." - Robert Collier

**Day 3 Focus**: You're learning optimization techniques that separate good programmers from great ones. Sliding window is a game-changer! 🚀

**Progress Check**: 11 problems in 3 days! You're on track! 💪

---

**🎉 Let's Make Day 3 Count! 🚀**
