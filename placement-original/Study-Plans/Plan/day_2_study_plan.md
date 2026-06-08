# 🚀 **DAY 2: TWO-POINTER TECHNIQUE & JAVA CONTROL FLOW**
## Complete Study Plan for Day 2 of 90-Day Placement Preparation

---

## 📅 **DAY 2 OVERVIEW**
**Date**: December 2, 2025  
**Focus**: Two-Pointer Technique + Java Control Statements  
**Total Study Time**: 9 hours  
**Target**: Master two-pointer pattern and Java control flow  

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:30 AM: DSA - Two-Pointer Technique (1.5 hours)**

#### **Learning Objectives**
- Understand two-pointer pattern and when to use it
- Master different two-pointer variations
- Learn to optimize O(n²) solutions to O(n)
- Solve problems efficiently using two pointers

#### **Study Resources**

**📖 Primary Reading:**
- **GeeksforGeeks**: [Two Pointers Technique](https://www.geeksforgeeks.org/two-pointers-technique/)
- **LeetCode**: [Two Pointer Pattern Guide](https://leetcode.com/discuss/study-guide/1688903/Solved-all-two-pointers-problems-in-100-days)

**🎥 Video Resources:**
1. **NeetCode - Two Pointer Pattern** (20 min)
   - URL: https://www.youtube.com/watch?v=wEhq7k8_7Ik
   - Focus: Pattern recognition and implementation

2. **Abdul Bari - Two Pointer Problems** (15 min)
   - URL: https://www.youtube.com/watch?v=On03HWe2tZM
   - Focus: Common problem patterns

**📝 Key Concepts to Cover:**
```
✅ Two-Pointer Patterns:
   1. Opposite Direction (start & end)
   2. Same Direction (fast & slow)
   3. Sliding Window (will cover Day 3)

✅ Common Use Cases:
   - Pair sum in sorted array
   - Remove duplicates
   - Container with most water
   - Three sum problem
   - Palindrome checking

✅ Time Complexity: O(n) vs O(n²)
✅ Space Complexity: O(1) in-place operations
```

#### **Study Plan (90 minutes):**
```
⏰ 0-20 min: Read GeeksforGeeks article + take notes
⏰ 20-40 min: Watch NeetCode video
⏰ 40-60 min: Watch Abdul Bari explanation
⏰ 60-90 min: Understand algorithm with examples
```

---

### **7:30 AM - 9:00 AM: Java Control Statements (1.5 hours)**

#### **Topics to Cover**

**1. Conditional Statements (30 min)**
```java
// if-else statement
int age = 18;
if (age >= 18) {
    System.out.println("Adult");
} else {
    System.out.println("Minor");
}

// if-else-if ladder
int marks = 85;
if (marks >= 90) {
    System.out.println("Grade: A+");
} else if (marks >= 80) {
    System.out.println("Grade: A");
} else if (marks >= 70) {
    System.out.println("Grade: B");
} else {
    System.out.println("Grade: C");
}

// switch statement
int day = 3;
switch (day) {
    case 1:
        System.out.println("Monday");
        break;
    case 2:
        System.out.println("Tuesday");
        break;
    case 3:
        System.out.println("Wednesday");
        break;
    default:
        System.out.println("Other day");
}

// Ternary operator
int num = 10;
String result = (num % 2 == 0) ? "Even" : "Odd";
```

**2. Loops (45 min)**
```java
// for loop
for (int i = 0; i < 5; i++) {
    System.out.println("Iteration: " + i);
}

// Enhanced for loop (for-each)
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}

// while loop
int count = 0;
while (count < 5) {
    System.out.println("Count: " + count);
    count++;
}

// do-while loop
int i = 0;
do {
    System.out.println("Value: " + i);
    i++;
} while (i < 5);

// Nested loops
for (int row = 1; row <= 3; row++) {
    for (int col = 1; col <= 3; col++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

**3. Jump Statements (15 min)**
```java
// break statement
for (int i = 0; i < 10; i++) {
    if (i == 5) break;
    System.out.println(i);
}

// continue statement
for (int i = 0; i < 5; i++) {
    if (i == 2) continue;
    System.out.println(i);
}

// return statement (in methods)
public static int findMax(int a, int b) {
    if (a > b) return a;
    return b;
}
```

#### **Practice Exercises (Java)**
```java
// Exercise 1: Print multiplication table
for (int i = 1; i <= 10; i++) {
    System.out.println("5 x " + i + " = " + (5 * i));
}

// Exercise 2: Find factorial
int n = 5, factorial = 1;
for (int i = 1; i <= n; i++) {
    factorial *= i;
}
System.out.println("Factorial: " + factorial);

// Exercise 3: Print pattern
/*
*
**
***
****
*****
*/
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

#### **Study Resources:**
- **JavaTPoint**: https://www.javatpoint.com/java-if-else
- **W3Schools**: https://www.w3schools.com/java/java_conditions.asp
- **GeeksforGeeks**: https://www.geeksforgeeks.org/loops-in-java/

---

## 🕑 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 5:00 PM: LeetCode Practice - Two-Pointer Problems (3 hours)**

#### **Problem 1: Two Sum II - Input Array Is Sorted** ⭐ EASY
**LeetCode #167**
- **URL**: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
- **Time**: 30-40 minutes
- **Difficulty**: Easy

**Problem Statement:**
Given a sorted array, find two numbers that add up to a target.

**Approach:**
```
1. Use two pointers: left = 0, right = n-1
2. Calculate sum = arr[left] + arr[right]
3. If sum == target: return [left+1, right+1]
4. If sum < target: move left pointer right
5. If sum > target: move right pointer left
```

**Solution Template:**
```java
class Solution {
    public int[] twoSum(int[] numbers, int target) {
        int left = 0;
        int right = numbers.length - 1;
        
        while (left < right) {
            int sum = numbers[left] + numbers[right];
            
            if (sum == target) {
                return new int[]{left + 1, right + 1};
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
        
        return new int[]{-1, -1}; // No solution found
    }
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

---

#### **Problem 2: Remove Duplicates from Sorted Array** ⭐ EASY
**LeetCode #26**
- **URL**: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
- **Time**: 30-40 minutes

**Problem Statement:**
Remove duplicates from sorted array in-place and return the new length.

**Approach:**
```
1. Use two pointers: i (slow), j (fast)
2. i tracks position for unique elements
3. j scans through array
4. When arr[j] != arr[i], increment i and copy arr[j] to arr[i]
```

**Solution Template:**
```java
class Solution {
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) return 0;
        
        int i = 0; // slow pointer
        
        for (int j = 1; j < nums.length; j++) { // fast pointer
            if (nums[j] != nums[i]) {
                i++;
                nums[i] = nums[j];
            }
        }
        
        return i + 1;
    }
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

---

#### **Problem 3: Valid Palindrome** ⭐ EASY
**LeetCode #125**
- **URL**: https://leetcode.com/problems/valid-palindrome/
- **Time**: 30-40 minutes

**Problem Statement:**
Check if a string is a palindrome (ignoring non-alphanumeric characters and case).

**Approach:**
```
1. Two pointers: left = 0, right = s.length - 1
2. Skip non-alphanumeric characters
3. Compare characters (case-insensitive)
4. Move pointers towards center
```

**Solution Template:**
```java
class Solution {
    public boolean isPalindrome(String s) {
        int left = 0;
        int right = s.length() - 1;
        
        while (left < right) {
            // Skip non-alphanumeric from left
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
                left++;
            }
            
            // Skip non-alphanumeric from right
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
                right--;
            }
            
            // Compare characters
            if (Character.toLowerCase(s.charAt(left)) != 
                Character.toLowerCase(s.charAt(right))) {
                return false;
            }
            
            left++;
            right--;
        }
        
        return true;
    }
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

---

#### **Problem 4: Container With Most Water** ⭐⭐ MEDIUM
**LeetCode #11**
- **URL**: https://leetcode.com/problems/container-with-most-water/
- **Time**: 40-50 minutes

**Problem Statement:**
Given heights array, find two lines that form container with maximum water.

**Approach:**
```
1. Two pointers: left = 0, right = n-1
2. Calculate area = min(height[left], height[right]) * (right - left)
3. Track maximum area
4. Move pointer with smaller height inward
```

**Solution Template:**
```java
class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxArea = 0;
        
        while (left < right) {
            // Calculate current area
            int width = right - left;
            int minHeight = Math.min(height[left], height[right]);
            int area = width * minHeight;
            
            // Update maximum
            maxArea = Math.max(maxArea, area);
            
            // Move pointer with smaller height
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxArea;
    }
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

---

## 🕖 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:30 PM: Theory - Big O Notation Deep Dive (1.5 hours)**

#### **Understanding Big O Notation**

**📖 Study Resources:**
- **Article**: https://www.freecodecamp.org/news/big-o-notation-why-it-matters-and-why-it-doesnt-1674cfa8a23c/
- **Video**: https://www.youtube.com/watch?v=Mo4vesaut8g (Abdul Bari - 30 min)
- **Interactive**: https://www.bigocheatsheet.com/

**Key Concepts:**

**1. Time Complexity Classes (30 min)**
```
O(1)        - Constant time
O(log n)    - Logarithmic (Binary Search)
O(n)        - Linear (Single loop)
O(n log n)  - Linearithmic (Merge Sort)
O(n²)       - Quadratic (Nested loops)
O(2ⁿ)       - Exponential (Fibonacci recursion)
O(n!)       - Factorial (Permutations)
```

**2. Comparison Examples (30 min)**
```java
// O(1) - Constant
int getFirst(int[] arr) {
    return arr[0];
}

// O(n) - Linear
int sum(int[] arr) {
    int total = 0;
    for (int num : arr) {
        total += num;
    }
    return total;
}

// O(n²) - Quadratic
void printPairs(int[] arr) {
    for (int i = 0; i < arr.length; i++) {
        for (int j = 0; j < arr.length; j++) {
            System.out.println(arr[i] + ", " + arr[j]);
        }
    }
}

// O(log n) - Logarithmic
int binarySearch(int[] arr, int target) {
    int left = 0, right = arr.length - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
```

**3. Space Complexity (30 min)**
```java
// O(1) space
int sum(int[] arr) {
    int total = 0; // Only one variable
    for (int num : arr) {
        total += num;
    }
    return total;
}

// O(n) space
int[] double(int[] arr) {
    int[] result = new int[arr.length]; // New array of size n
    for (int i = 0; i < arr.length; i++) {
        result[i] = arr[i] * 2;
    }
    return result;
}
```

---

### **8:30 PM - 9:30 PM: GitHub Repository Setup (1 hour)**

#### **Step-by-Step GitHub Setup**

**1. Create GitHub Account (if not done)**
- Go to: https://github.com
- Sign up with email

**2. Create New Repository (10 min)**
```
Repository Name: placement-preparation-90-days
Description: My 90-day journey to crack technical interviews
Visibility: Public (to showcase your progress)
Initialize with: README.md
Add .gitignore: Java
License: MIT (optional)
```

**3. Clone Repository Locally (5 min)**
```powershell
# Open PowerShell in your desired location
cd C:\xampp\htdocs\Placement
git clone https://github.com/YOUR-USERNAME/placement-preparation-90-days.git
cd placement-preparation-90-days
```

**4. Create Folder Structure (10 min)**
```powershell
# Create directories
mkdir DSA_Practice
mkdir DSA_Practice\Arrays
mkdir DSA_Practice\Strings
mkdir DSA_Practice\LinkedLists
mkdir DSA_Practice\Trees
mkdir DSA_Practice\Graphs
mkdir Java_Programs
mkdir Java_Programs\Day1
mkdir Java_Programs\Day2
mkdir Projects
mkdir Notes
mkdir Progress
```

**5. Add Today's Code (15 min)**
```powershell
# Create a file for Day 2 solutions
# Add your LeetCode solutions to DSA_Practice\Arrays\
```

**6. Commit and Push (10 min)**
```powershell
git add .
git commit -m "Day 2: Two-pointer technique solutions and Java control flow practice"
git push origin main
```

**7. Create README.md (10 min)**
```markdown
# 90-Day Placement Preparation Journey

## Progress Tracker
- **Day 1**: Arrays basics, Java setup ✅
- **Day 2**: Two-pointer technique, Java control flow ✅
- **Day 3**: Coming soon...

## Topics Covered
### Data Structures & Algorithms
- Arrays
- Two-Pointer Technique

### Programming (Java)
- Basics and Setup
- Control Statements
- Loops

## Problem Solving Stats
- Total Problems Solved: 7
- Easy: 7
- Medium: 0
- Hard: 0
```

---

### **9:30 PM - 10:00 PM: Daily Review & Planning (30 min)**

#### **Review Checklist**

**✅ What I Learned Today:**
```
1. Two-pointer technique and its patterns
2. When to use two pointers vs brute force
3. Java control statements (if-else, switch)
4. Different types of loops in Java
5. Big O notation fundamentals
6. GitHub repository management
```

**✅ Problems Solved:**
```
1. Two Sum II (LeetCode #167) ✅
2. Remove Duplicates (LeetCode #26) ✅
3. Valid Palindrome (LeetCode #125) ✅
4. Container With Most Water (LeetCode #11) ✅
```

**✅ Update Progress Tracker:**
- Fill in Day 2 section in DAILY_PROGRESS_TRACKER.md
- Mark problems as solved
- Note any challenges faced
- Record total study hours

**🎯 Tomorrow's Preview (Day 3):**
```
- Sliding Window Technique
- Java Arrays and Methods
- 4 Medium-level problems
- Complexity analysis practice
```

---

## 📝 **DAY 2 CHECKLIST**

### Morning (6:00 AM - 9:00 AM)
- [ ] Study two-pointer technique (theory)
- [ ] Watch video tutorials (NeetCode & Abdul Bari)
- [ ] Learn Java control statements
- [ ] Practice loops and conditionals
- [ ] Write 5 Java practice programs

### Afternoon (2:00 PM - 5:00 PM)
- [ ] Solve LeetCode #167 (Two Sum II)
- [ ] Solve LeetCode #26 (Remove Duplicates)
- [ ] Solve LeetCode #125 (Valid Palindrome)
- [ ] Solve LeetCode #11 (Container With Most Water)
- [ ] Submit all solutions

### Evening (7:00 PM - 10:00 PM)
- [ ] Study Big O notation (1.5 hours)
- [ ] Setup GitHub repository
- [ ] Push today's code to GitHub
- [ ] Update progress tracker
- [ ] Plan Day 3 tasks

---

## 💡 **TIPS FOR DAY 2**

1. **Two-Pointer Pattern Recognition:**
   - Look for sorted arrays
   - Look for in-place operations
   - Look for pair/triplet sum problems

2. **Java Practice:**
   - Write code, don't just read
   - Test with different inputs
   - Use IDE debugger to understand flow

3. **Problem Solving:**
   - Read problem 2-3 times
   - Draw examples on paper
   - Think of brute force first
   - Then optimize with two pointers

4. **Time Management:**
   - Don't spend >40 min on one problem
   - If stuck, check hints
   - Learn from editorial solutions

5. **GitHub Best Practices:**
   - Commit daily
   - Write meaningful commit messages
   - Keep code organized

---

## 🎯 **SUCCESS METRICS FOR DAY 2**

✅ **Must Complete:**
- Understand two-pointer technique ✓
- Solve at least 3 LeetCode problems ✓
- Learn Java control flow ✓
- Create GitHub repository ✓

✅ **Bonus:**
- Solve all 4 problems
- Write clean, commented code
- Create project README

---

## 📚 **ADDITIONAL RESOURCES**

### Two-Pointer Technique
- [LeetCode Pattern Guide](https://leetcode.com/discuss/study-guide/1688903/)
- [NeetCode Roadmap](https://neetcode.io/roadmap)

### Java Control Flow
- [Oracle Java Tutorials](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html)
- [Java For Loop Examples](https://www.programiz.com/java-programming/for-loop)

### Big O Notation
- [Big O Cheat Sheet](https://www.bigocheatsheet.com/)
- [FreeCodeCamp Guide](https://www.freecodecamp.org/news/big-o-notation/)

---

## 🔥 **MOTIVATION**

> "The only way to do great work is to love what you do." - Steve Jobs

**Day 2 Focus**: You're building the foundation for pattern recognition. Two-pointer is one of the most asked patterns in interviews. Master it today!

**Remember**: Consistency > Intensity. Show up every day! 💪

---

**🎉 Good Luck with Day 2! Let's crush it! 🚀**
