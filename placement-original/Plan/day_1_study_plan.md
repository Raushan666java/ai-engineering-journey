# 🚀 **DAY 1: ARRAYS BASICS & JAVA SETUP**
## Complete Study Plan for First Day of 90-Day Placement Preparation

---

## 📅 **DAY 1 OVERVIEW**
**Date**: November 3, 2025  
**Focus**: Array Fundamentals + Java Environment Setup  
**Total Study Time**: 9 hours  
**Target**: Strong foundation in arrays and Java basics  

---

## 🕐 **MORNING SESSION (6:00 AM - 9:00 AM)**

### **6:00 AM - 7:00 AM: DSA - Array Basics (1 hour)**

#### **Learning Objectives**
- Understand array data structure
- Learn array operations (traversal, insertion, deletion)
- Master basic array concepts

#### **Study Resources**

**📖 Primary Reading:**
- **GeeksforGeeks**: [Arrays in Data Structures](https://www.geeksforgeeks.org/array-data-structure/)
- **Tutorialspoint**: [Java Arrays](https://www.tutorialspoint.com/java/java_arrays.htm)

**🎥 Video Resources:**
1. **Abdul Bari - Array Basics** (15 min)
   - URL: https://www.youtube.com/watch?v=55l-aZ7_F24
   - Focus: Array fundamentals, memory representation

2. **freeCodeCamp - Arrays Explained** (10 min)
   - URL: https://www.youtube.com/watch?v=37E9ckMDdTk
   - Focus: Array operations and use cases

**📝 Key Concepts to Cover:**
```
✅ Array Declaration & Initialization
✅ Array Traversal (for loop, enhanced for loop)
✅ Array Insertion & Deletion
✅ Array Length & Bounds
✅ Memory Representation
✅ Time Complexity Analysis
```

#### **Practice Tasks**
- Read array basics from GeeksforGeeks (20 min)
- Watch Abdul Bari video (15 min)
- Take notes on key concepts (15 min)
- Draw memory diagrams for arrays (10 min)

---

### **7:00 AM - 8:00 AM: Java Environment Setup (1 hour)**

#### **Installation Steps**

**Step 1: Download JDK (Java Development Kit)**
```
1. Visit Oracle JDK Download Page:
   URL: https://www.oracle.com/java/technologies/downloads/

2. Download JDK 17 (LTS - Long Term Support):
   - Choose: Windows x64 Installer (if Windows)
   - File: jdk-17_windows-x64_bin.exe (approx 150MB)

3. Alternative: OpenJDK (Free)
   URL: https://adoptium.net/temurin/releases/
   - Download: OpenJDK 17 (Temurin)
```

**Step 2: Install JDK**
```
Windows Installation:
1. Run downloaded .exe file
2. Click "Next" through all prompts
3. Choose installation directory (default is fine)
4. Complete installation
5. Note the installation path (usually: C:\Program Files\Java\jdk-17)

Verification:
1. Open Command Prompt
2. Type: java -version
3. Expected output: Java version "17.x.x"
4. Type: javac -version
5. Expected output: javac 17.x.x
```

**Step 3: Set Environment Variables (Windows)**
```
1. Right-click "This PC" → Properties → Advanced system settings
2. Click "Environment Variables"
3. Under "System variables", find "Path"
4. Click "Edit" → "New"
5. Add: C:\Program Files\Java\jdk-17\bin
6. Click OK to save

Verification:
1. Open new Command Prompt
2. Type: java -version
3. Type: javac -version
4. Both should work from any directory
```

**Step 4: Install IDE - Visual Studio Code**
```
1. Download VS Code:
   URL: https://code.visualstudio.com/download

2. Install VS Code:
   - Run installer
   - Accept all defaults
   - Complete installation

3. Install Java Extensions:
   - Open VS Code
   - Go to Extensions (Ctrl+Shift+X)
   - Search and install:
     * "Extension Pack for Java" by Microsoft
     * "Java Test Runner" by Microsoft
     * "Maven for Java" by Microsoft
```

**Step 5: Install IDE - IntelliJ IDEA Community (Optional)**
```
1. Download IntelliJ IDEA Community:
   URL: https://www.jetbrains.com/idea/download/

2. Install:
   - Run installer
   - Choose "Community Edition"
   - Accept defaults
   - Complete installation
```

#### **First Java Program**
```
1. Create Project Folder:
   - Create folder: C:\JavaProjects\Day1

2. Create HelloWorld.java:
   ```java
   public class HelloWorld {
       public static void main(String[] args) {
           System.out.println("Hello, World!");
           System.out.println("Day 1 of 90-Day Placement Prep!");
       }
   }
   ```

3. Compile and Run:
   - Open Command Prompt in project folder
   - Compile: javac HelloWorld.java
   - Run: java HelloWorld
   - Expected output:
     Hello, World!
     Day 1 of 90-Day Placement Prep!
```

---

### **8:00 AM - 9:00 AM: Java Syntax & Data Types (1 hour)**

#### **Learning Objectives**
- Master Java syntax basics
- Understand primitive data types
- Learn variable declaration and initialization

#### **Study Resources**

**📖 Documentation:**
- **Oracle Java Tutorials**: [Language Basics](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/index.html)
- **GeeksforGeeks**: [Java Basic Syntax](https://www.geeksforgeeks.org/java-basic-syntax/)

**🎥 Video Resources:**
1. **Telusko - Java Basics** (20 min)
   - URL: https://www.youtube.com/watch?v=8cm1x4bC610
   - Focus: Syntax, data types, variables

2. **freeCodeCamp - Java for Beginners** (30 min)
   - URL: https://www.youtube.com/watch?v=eIrMbAQSU34
   - Focus: Complete Java basics overview

**📝 Key Concepts:**
```
✅ Java Program Structure
✅ Class Declaration
✅ Main Method
✅ Print Statements
✅ Primitive Data Types:
   - int, long, short, byte
   - float, double
   - char, boolean
✅ Variable Declaration & Initialization
✅ Naming Conventions
✅ Comments (single-line, multi-line)
```

#### **Practice Tasks**
- Create multiple Java programs testing different data types
- Practice variable declarations and initializations
- Write programs with different print statements

---

## 🕐 **AFTERNOON SESSION (2:00 PM - 5:00 PM)**

### **2:00 PM - 3:30 PM: Array Practice Problems (1.5 hours)**

#### **LeetCode Problems to Solve**

**Problem 1: Two Sum (Easy)**
```
URL: https://leetcode.com/problems/two-sum/
Time: 30 minutes

Approach:
- Use HashMap to store complement values
- Iterate through array once
- Return indices when complement found

Solution Template:
```java
import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement)) {
                return new int[] { map.get(complement), i };
            }
            map.put(nums[i], i);
        }
        return new int[] {};
    }
}
```
```

**Problem 2: Remove Duplicates from Sorted Array (Easy)**
```
URL: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
Time: 30 minutes

Approach:
- Use two pointers
- One for iteration, one for unique elements
- Return count of unique elements

Solution Hint:
- Initialize slow pointer at index 0
- Fast pointer iterates from index 1
- When different element found, copy to slow pointer
```

**Problem 3: Contains Duplicate (Easy)**
```
URL: https://leetcode.com/problems/contains-duplicate/
Time: 30 minutes

Approach:
- Use HashSet to track seen elements
- Return true if duplicate found
- Time: O(n), Space: O(n)

Solution Template:
```java
import java.util.HashSet;

class Solution {
    public boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }
        return false;
    }
}
```
```

#### **Practice Guidelines**
```
✅ Read problem statement carefully
✅ Understand constraints and examples
✅ Plan solution approach first
✅ Write pseudocode before code
✅ Test with given examples
✅ Consider edge cases
✅ Optimize for time/space complexity
✅ Submit and check results
```

---

### **3:30 PM - 4:30 PM: Time & Space Complexity (1 hour)**

#### **Learning Objectives**
- Understand Big O notation
- Analyze algorithm complexity
- Compare different approaches

#### **Study Resources**

**📖 Reading Materials:**
- **GeeksforGeeks**: [Time Complexity Analysis](https://www.geeksforgeeks.org/analysis-of-algorithms-set-1-asymptotic-analysis/)
- **Big O Cheat Sheet**: https://www.bigocheatsheet.com/

**🎥 Video Resources:**
1. **CS Dojo - Big O Notation** (15 min)
   - URL: https://www.youtube.com/watch?v=v4cd1O4zkGw
   - Focus: Time and space complexity basics

2. **freeCodeCamp - Algorithm Complexity** (20 min)
   - URL: https://www.youtube.com/watch?v=9TlHvipP5yA
   - Focus: Big O analysis examples

**📝 Key Concepts:**
```
✅ Big O Notation Basics:
   - O(1) - Constant time
   - O(log n) - Logarithmic time
   - O(n) - Linear time
   - O(n log n) - Linearithmic time
   - O(n²) - Quadratic time
   - O(2^n) - Exponential time

✅ Space Complexity:
   - O(1) - Constant space
   - O(n) - Linear space
   - O(n²) - Quadratic space

✅ Common Algorithm Complexities:
   - Array traversal: O(n)
   - Binary search: O(log n)
   - Bubble sort: O(n²)
   - Quick sort: O(n log n)
```

#### **Practice Tasks**
- Analyze complexity of array operations
- Compare different sorting algorithms
- Calculate complexity for LeetCode problems solved

---

### **4:30 PM - 5:00 PM: Project Setup (30 minutes)**

#### **Development Environment Setup**

**Step 1: Create Project Structure**
```
Create folder structure:
C:\PlacementPrep\
├── Day1\
│   ├── ArrayBasics.java
│   ├── HelloWorld.java
│   └── notes.txt
├── DSA_Practice\
│   ├── Arrays\
│   ├── Strings\
│   └── LinkedLists\
├── Projects\
│   └── DeveloperLifePlatform\
└── Resources\
    ├── Books\
    ├── Videos\
    └── CheatSheets\
```

**Step 2: Initialize Git Repository**
```
1. Download Git: https://git-scm.com/downloads
2. Install Git with default settings
3. Open Command Prompt in C:\PlacementPrep
4. Initialize repository:
   git init
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"

5. Create .gitignore file:
   # Compiled class files
   *.class

   # IDE files
   .vscode/
   .idea/

   # OS files
   .DS_Store
   Thumbs.db
```

**Step 3: Create GitHub Repository**
```
1. Go to GitHub.com and sign up/login
2. Click "New repository"
3. Repository name: "90-Day-Placement-Prep"
4. Description: "Complete placement preparation journey"
5. Make it Public
6. Don't initialize with README
7. Create repository

8. Connect local repository:
   git remote add origin https://github.com/yourusername/90-Day-Placement-Prep.git
   git branch -M main
   git push -u origin main
```

**Step 4: Create Initial Project Files**
```
Create ArrayBasics.java:
```java
public class ArrayBasics {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};

        // Array traversal
        System.out.println("Array elements:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }

        // Array operations
        System.out.println("Array length: " + numbers.length);

        // Enhanced for loop
        System.out.println("Using enhanced for loop:");
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}
```
```

---

## 🕐 **EVENING SESSION (7:00 PM - 10:00 PM)**

### **7:00 PM - 8:30 PM: Code Implementation & Review (1.5 hours)**

#### **Implement Array Operations**
```java
public class ArrayOperations {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};

        // 1. Array Traversal
        System.out.println("Original Array:");
        traverseArray(arr);

        // 2. Array Insertion (at end)
        arr = insertAtEnd(arr, 60);
        System.out.println("After inserting 60:");
        traverseArray(arr);

        // 3. Array Deletion (by value)
        arr = deleteByValue(arr, 30);
        System.out.println("After deleting 30:");
        traverseArray(arr);
    }

    // Method to traverse and print array
    public static void traverseArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Method to insert element at end
    public static int[] insertAtEnd(int[] arr, int element) {
        int[] newArr = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }
        newArr[arr.length] = element;
        return newArr;
    }

    // Method to delete element by value
    public static int[] deleteByValue(int[] arr, int value) {
        int count = 0;
        for (int num : arr) {
            if (num != value) count++;
        }

        int[] newArr = new int[count];
        int index = 0;
        for (int num : arr) {
            if (num != value) {
                newArr[index++] = num;
            }
        }
        return newArr;
    }
}
```

#### **Practice Array Problems**
- Implement linear search
- Implement array reversal
- Find maximum and minimum elements
- Calculate array sum and average

---

### **8:30 PM - 9:30 PM: Mock Interview Practice (1 hour)**

#### **Self-Interview Session**

**Question 1: What is an Array?**
```
Expected Answer:
- An array is a data structure that stores a fixed-size sequential collection of elements of the same type.
- Elements are stored in contiguous memory locations.
- Each element can be accessed using an index (starting from 0).
- Arrays have fixed size in Java (unlike ArrayList).
```

**Question 2: Explain Array Traversal**
```
Expected Answer:
- Array traversal means visiting each element of the array exactly once.
- Can be done using for loop: for(int i = 0; i < arr.length; i++)
- Or enhanced for loop: for(int num : arr)
- Time complexity: O(n) where n is array size
- Space complexity: O(1) auxiliary space
```

**Question 3: Array vs ArrayList in Java**
```
Expected Answer:
- Array: Fixed size, primitive types, faster access
- ArrayList: Dynamic size, objects only, more flexible
- Array: int[] arr = new int[5];
- ArrayList: ArrayList<Integer> list = new ArrayList<>();
```

#### **Practice Tips**
- Speak out loud as if in real interview
- Explain thought process clearly
- Use proper terminology
- Practice time management (2-3 minutes per answer)

---

### **9:30 PM - 10:00 PM: Daily Review & Planning (30 minutes)**

#### **Daily Progress Review**

**✅ Completed Tasks:**
- [ ] Array basics theory
- [ ] Java environment setup
- [ ] Java syntax and data types
- [ ] 3 LeetCode problems
- [ ] Time complexity basics
- [ ] Project environment setup
- [ ] Code implementation practice
- [ ] Mock interview practice

**📊 Today's Metrics:**
- Study hours: ___/9
- Problems solved: ___/3
- Concepts learned: ___/8
- Code written: ___ lines

**💡 Key Learnings:**
```
1. Array declaration: int[] arr = new int[5];
2. Array traversal: for(int i = 0; i < arr.length; i++)
3. Time complexity: O(n) for traversal
4. Java setup: JDK installation and environment variables
5. IDE setup: VS Code with Java extensions
```

**🔍 Areas for Improvement:**
```
- Practice more array problems
- Improve code explanation skills
- Speed up problem-solving time
- Better understanding of edge cases
```

#### **Tomorrow's Preparation (Day 2)**
```
📚 Topics to Review:
- Array basics (quick revision)
- Java operators and control statements

🎯 Goals for Day 2:
- Solve 4-5 LeetCode problems
- Complete Java control statements
- Practice two-pointer technique
- Update progress tracker

📋 Day 2 Schedule Preview:
- 6:00-7:00 AM: Two-pointer technique (5 problems)
- 7:00-8:00 AM: Java operators & control statements
- 8:00-9:00 AM: LeetCode practice
- 2:00-5:00 PM: Afternoon session
- 7:00-10:00 PM: Evening session
```

---

## 📚 **ADDITIONAL RESOURCES FOR DAY 1**

### **Recommended Books**
- **"Head First Java"** by Kathy Sierra & Bert Bates
  - Chapter 1-2: Java basics
- **"Data Structures and Algorithms in Java"** by Robert Lafore
  - Chapter 2: Arrays

### **Online Platforms**
- **LeetCode**: https://leetcode.com/
  - Create account and start solving
- **GeeksforGeeks**: https://www.geeksforgeeks.org/
  - Java and DSA tutorials
- **Codecademy**: https://www.codecademy.com/
  - Java interactive course

### **YouTube Channels**
- **freeCodeCamp**: https://www.youtube.com/c/Freecodecamp
- **Programming with Mosh**: https://www.youtube.com/c/programmingwithmosh
- **CS Dojo**: https://www.youtube.com/c/CSDojo

### **Practice Platforms**
- **HackerRank**: https://www.hackerrank.com/
- **CodeChef**: https://www.codechef.com/
- **Codeforces**: https://codeforces.com/

---

## 🎯 **DAY 1 SUCCESS CRITERIA**

### **Must Complete:**
✅ Java environment fully set up and working  
✅ Array basics thoroughly understood  
✅ 3 LeetCode problems solved successfully  
✅ Development environment configured  
✅ GitHub repository created and connected  
✅ Daily progress documented  

### **Bonus Achievements:**
🎯 Solve 1-2 additional array problems  
🎯 Create 3-4 Java programs with different concepts  
🎯 Watch 1-2 additional educational videos  
🎯 Set up automated backup for code  

---

## 💡 **MOTIVATIONAL REMINDER**

**"The journey of a thousand miles begins with a single step."**

Today marks the beginning of your 90-day transformation. You've taken the first crucial step by setting up your environment and learning the fundamentals. Remember:

- **Consistency beats intensity** - 9 hours daily for 90 days
- **Quality over quantity** - Understand concepts deeply
- **Practice makes perfect** - Code daily, solve problems daily
- **Track your progress** - Celebrate small wins
- **Stay motivated** - You're building a strong foundation

**Tomorrow brings new challenges and deeper learning. Rest well and prepare for Day 2! 🚀**

---

**📊 Day 1 Completion Checklist:**
- [ ] Morning DSA session completed
- [ ] Java environment setup finished
- [ ] 3 LeetCode problems solved
- [ ] Time complexity basics learned
- [ ] Project environment configured
- [ ] Code implementation practiced
- [ ] Mock interview attempted
- [ ] Daily review completed
- [ ] Progress documented
- [ ] Tomorrow's plan ready

**Total Study Time Today: ___/9 hours**  
**Problems Solved: ___/3**  
**Confidence Level (1-10): ___**  

*End of Day 1 - Great job starting your placement preparation journey! 💪*