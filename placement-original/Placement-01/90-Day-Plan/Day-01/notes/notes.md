# 📝 **DAY 1 NOTES**
## Personal Notes and Learnings - Array Basics & Java Setup

---

## 📅 **SESSION NOTES**

### **Morning Session (6:00 AM - 9:00 AM)**

#### **6:00-7:00 AM: DSA - Array Basics**
**Key Concepts Learned:**
- Arrays are fixed-size, contiguous memory blocks
- Elements accessed using zero-based indexing
- Array declaration: `int[] arr = new int[5];`
- Array initialization: `int[] arr = {1, 2, 3, 4, 5};`

**Memory Representation:**
```
Array: [10][20][30][40][50]
Index:   0   1   2   3   4
Address: 100 104 108 112 116 (assuming 4 bytes per int)
```

**Important Points:**
- Arrays have fixed size in Java
- ArrayList is dynamic alternative
- Time complexity: O(1) access, O(n) search

**Questions/Doubts:**
- How does ArrayList work internally?
- Difference between primitive and object arrays?

---

#### **7:00-8:00 AM: Java Environment Setup**
**Installation Steps Completed:**
- Downloaded JDK 17 from Oracle
- Installed JDK in: C:\Program Files\Java\jdk-17
- Set JAVA_HOME environment variable
- Added to PATH: C:\Program Files\Java\jdk-17\bin
- Verified installation: java -version, javac -version

**VS Code Setup:**
- Installed VS Code
- Added Java extensions:
  - Extension Pack for Java
  - Java Test Runner
  - Maven for Java
- Created first Java program: HelloWorld.java

**Commands Used:**
```bash
# Compile Java program
javac HelloWorld.java

# Run Java program
java HelloWorld
```

**Issues Faced & Solutions:**
- Environment variable not recognized → Restarted command prompt
- Extension installation failed → Reinstalled VS Code

---

#### **8:00-9:00 AM: Java Syntax & Data Types**
**Primitive Data Types:**
- `int`: 32-bit integer (-2^31 to 2^31-1)
- `long`: 64-bit integer (-2^63 to 2^63-1)
- `float`: 32-bit floating point
- `double`: 64-bit floating point (default for decimals)
- `char`: 16-bit Unicode character
- `boolean`: true/false

**Java Program Structure:**
```java
public class ClassName {
    public static void main(String[] args) {
        // Code here
    }
}
```

**Variable Declaration:**
```java
int age = 25;
double salary = 50000.50;
char grade = 'A';
boolean isStudent = true;
```

---

### **Afternoon Session (2:00 PM - 5:00 PM)**

#### **2:00-3:30 PM: Array Practice Problems**
**Problem 1: Two Sum (LeetCode #1)**
**Approach:** HashMap to store complement values
**Time Complexity:** O(n)
**Space Complexity:** O(n)
**Edge Cases:** Empty array, no solution, duplicate numbers

**Problem 2: Remove Duplicates from Sorted Array (LeetCode #26)**
**Approach:** Two pointers (slow and fast)
**Time Complexity:** O(n)
**Space Complexity:** O(1)
**Edge Cases:** Empty array, all duplicates, no duplicates

**Problem 3: Contains Duplicate (LeetCode #217)**
**Approach:** HashSet for tracking elements
**Time Complexity:** O(n)
**Space Complexity:** O(n)
**Edge Cases:** Empty array, single element, all unique

**Common Patterns Observed:**
- HashMap for O(n) time solutions
- Two pointers for array manipulation
- HashSet for duplicate detection

---

#### **3:30-4:30 PM: Time & Space Complexity**
**Big O Notation:**
- O(1): Constant time - array access, hash operations
- O(n): Linear time - array traversal, linear search
- O(n²): Quadratic time - nested loops, bubble sort
- O(log n): Logarithmic time - binary search

**Complexity Analysis Examples:**
- Array traversal: O(n)
- Array access by index: O(1)
- Linear search: O(n)
- Two Sum with HashMap: O(n) time, O(n) space

**Key Insights:**
- Time complexity measures algorithm speed
- Space complexity measures memory usage
- Big O describes worst-case scenario
- Consider both time and space trade-offs

---

#### **4:30-5:00 PM: Project Setup**
**Folder Structure Created:**
```
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

**Git Setup:**
- Initialized repository: `git init`
- Configured user: `git config --global user.name "Your Name"`
- Configured email: `git config --global user.email "your.email@example.com"`
- Created .gitignore file

**GitHub Repository:**
- Created repository: "90-Day-Placement-Prep"
- Connected remote: `git remote add origin <url>`
- Initial commit and push

---

### **Evening Session (7:00 PM - 10:00 PM)**

#### **7:00-8:30 PM: Code Implementation & Review**
**ArrayOperations.java Created:**
- traverseArray() - Print array elements
- insertAtEnd() - Add element to end
- deleteByValue() - Remove specific value
- linearSearch() - Find element index
- findMaxMin() - Get max and min values
- reverseArray() - Reverse array elements

**Key Learnings:**
- Arrays are fixed size - need new array for insertion/deletion
- Linear search is O(n) time complexity
- Array reversal can be done in O(n) time
- Edge cases: empty arrays, single elements

---

#### **8:30-9:30 PM: Mock Interview Practice**
**Question 1: What is an Array?**
**My Answer:**
"An array is a data structure that stores a fixed-size sequential collection of elements of the same type. Elements are stored in contiguous memory locations and can be accessed using an index starting from 0."

**Feedback:**
- Good technical definition
- Could add more about memory layout
- Mention ArrayList as dynamic alternative

**Question 2: Explain Array Traversal**
**My Answer:**
"Array traversal means visiting each element once. Use for loop: for(int i = 0; i < arr.length; i++) or enhanced for loop: for(int num : arr). Time complexity is O(n)."

**Feedback:**
- Clear explanation
- Good complexity analysis
- Could mention practical applications

**Question 3: Array vs ArrayList**
**My Answer:**
"Array has fixed size, stores primitives efficiently. ArrayList is dynamic, stores objects, provides more methods. Array: faster access, ArrayList: more flexible."

**Feedback:**
- Good comparison
- Could mention specific use cases
- Add performance implications

---

#### **9:30-10:00 PM: Daily Review & Planning**
**Today's Achievements:**
- Set up complete Java development environment
- Learned array fundamentals and operations
- Solved 3 LeetCode problems successfully
- Created organized project structure
- Practiced mock interview questions

**Challenges Faced:**
- JDK environment variable configuration
- Understanding two-pointer technique initially
- Time management during problem solving

**Solutions Found:**
- Referred to official Oracle documentation
- Watched additional explanation videos
- Broke down problems into smaller steps

---

## 💡 **KEY TAKEAWAYS**

### **Technical Learnings**
1. **Array Declaration**: `int[] arr = new int[5];` or `int[] arr = {1,2,3};`
2. **Array Traversal**: `for(int i = 0; i < arr.length; i++)` or enhanced for loop
3. **Time Complexity**: O(1) for access, O(n) for traversal/search
4. **Java Setup**: JDK installation, environment variables, VS Code extensions
5. **Git Basics**: Repository initialization, GitHub connection, basic commands

### **Problem Solving Insights**
1. **Two Sum**: HashMap provides O(n) solution vs O(n²) brute force
2. **Remove Duplicates**: Two pointers optimize space usage
3. **Contains Duplicate**: HashSet simplifies duplicate detection
4. **Edge Cases**: Always consider empty arrays, single elements, boundary conditions

### **Best Practices Learned**
1. **Environment Setup**: Proper JDK installation and configuration
2. **Code Organization**: Clean folder structure and file naming
3. **Version Control**: Regular commits and meaningful commit messages
4. **Documentation**: Comments in code and README files

---

## ❓ **QUESTIONS & DOUBTS**

### **Technical Questions**
- How does ArrayList implement dynamic sizing internally?
- What are the performance differences between arrays and ArrayLists?
- How does HashMap handle collisions?
- What are the different ways to initialize multi-dimensional arrays?

### **Learning Process Questions**
- How often should I review previously learned concepts?
- What's the best way to practice problem-solving consistently?
- How can I improve my code explanation skills for interviews?
- What resources should I prioritize for different topics?

### **Career-Related Questions**
- What are the most important data structures for coding interviews?
- How much time should I spend on theory vs practice?
- What are the common mistakes beginners make in placement preparation?
- How can I track my progress effectively?

---

## 🎯 **GOALS FOR TOMORROW (DAY 2)**

### **Learning Goals**
- Master two-pointer technique with 5 problems
- Complete Java operators and control statements
- Understand different approaches to array problems
- Improve problem-solving speed

### **Practice Goals**
- Solve 4-5 LeetCode problems
- Implement various array algorithms
- Practice mock interview questions
- Update progress tracker consistently

### **Improvement Goals**
- Better time management during problem solving
- More thorough edge case testing
- Cleaner code structure and documentation
- Consistent daily routine maintenance

---

## 💭 **PERSONAL REFLECTIONS**

### **Today's Experience**
- **Energy Level**: Started high, maintained throughout the day
- **Focus Level**: Good concentration during study sessions
- **Understanding Level**: Solid grasp of array concepts
- **Confidence Level**: Increased after solving problems successfully

### **What Went Well**
- Complete environment setup without major issues
- Successfully solved all assigned LeetCode problems
- Good understanding of time complexity concepts
- Organized project structure and version control

### **Areas for Improvement**
- Could spend more time on mock interview practice
- Need to improve speed in problem identification
- Should practice more edge cases in coding
- Better note-taking during video lectures

### **Motivational Notes**
- Starting the 90-day journey feels exciting and challenging
- The structured approach is helping maintain consistency
- Small wins like solving LeetCode problems boost confidence
- Setting up the environment properly was a good foundation

---

## 📊 **DAILY METRICS SUMMARY**

- **Study Hours**: 9 hours
- **Problems Solved**: 3/3 (LeetCode)
- **Code Files Created**: 4 (HelloWorld.java, ArrayBasics.java, ArrayOperations.java, LeetCodeSolutions.java)
- **Videos Watched**: 4/4
- **Articles Read**: 2/2
- **Confidence Level**: 7/10
- **Understanding Level**: 8/10

---

## 🔗 **USEFUL LINKS SAVED**

### **Documentation**
- Oracle Java Tutorials: https://docs.oracle.com/javase/tutorial/
- VS Code Java Guide: https://code.visualstudio.com/docs/languages/java
- Git Documentation: https://git-scm.com/doc

### **Problem Solutions**
- Two Sum Discussion: https://leetcode.com/problems/two-sum/discuss/
- Array Problems: https://www.geeksforgeeks.org/array-data-structure/

### **Additional Resources**
- Big O Cheat Sheet: https://www.bigocheatsheet.com/
- Java Cheat Sheet: Search for "Java basics cheat sheet PDF"

---

*These notes serve as a personal record of Day 1 learnings. Use this format for future days to track progress and maintain a comprehensive learning journal. Keep documenting doubts and questions for future reference and clarification.*