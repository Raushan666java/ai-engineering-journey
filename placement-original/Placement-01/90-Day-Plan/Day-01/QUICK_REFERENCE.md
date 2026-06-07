# 🚀 Day 1 - Quick Reference Guide

## 📁 All Files Location
```
Day-01/
├── study_plan.md              ← Complete 9-hour study guide
├── README.md                  ← Overview and resources
├── progress.md                ← Progress tracker
├── DAY_1_COMPLETE_SUMMARY.md  ← This summary
├── resources.md               ← Additional resources
└── code/
    ├── HelloWorld.java
    ├── DataTypesDemo.java
    ├── OperatorsDemo.java
    ├── UserInputDemo.java
    ├── SimpleCalculator.java
    ├── TwoSum.java
    ├── PalindromeNumber.java
    ├── RomanToInteger.java
    └── PatternPrograms.java
```

---

## ⚡ Quick Commands

### Compile & Run
```bash
# Navigate to Day-01/code folder
cd Day-01/code

# Compile
javac HelloWorld.java

# Run
java HelloWorld
```

### Run All Programs at Once
```bash
# Compile all
javac *.java

# Run specific programs
java HelloWorld
java DataTypesDemo
java SimpleCalculator
java TwoSum
java PalindromeNumber
java RomanToInteger
java PatternPrograms
```

### Git Commands
```bash
# Check status
git status

# Add all files
git add .

# Commit
git commit -m "Day 1: Java basics and LeetCode"

# Push
git push origin main
```

---

## 📝 Code Templates

### Basic Program Template
```java
public class ProgramName {
    public static void main(String[] args) {
        // Your code here
    }
}
```

### Scanner Input Template
```java
import java.util.Scanner;

public class ProgramName {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter number: ");
        int num = sc.nextInt();
        
        System.out.print("Enter text: ");
        String text = sc.next();
        
        sc.close();
    }
}
```

### HashMap Template
```java
import java.util.HashMap;
import java.util.Map;

public class ProgramName {
    public static void main(String[] args) {
        Map<Integer, Integer> map = new HashMap<>();
        
        // Add
        map.put(key, value);
        
        // Get
        int value = map.get(key);
        
        // Check
        if (map.containsKey(key)) {
            // key exists
        }
    }
}
```

### LeetCode Solution Template
```java
class Solution {
    public ReturnType methodName(Parameters) {
        // Your solution here
        return result;
    }
}

// Test class
public class ProblemName {
    public static void main(String[] args) {
        Solution sol = new Solution();
        // Test cases
    }
}
```

---

## 🎯 Data Types Quick Reference

| Type    | Size    | Range            | Default | Example      |
|---------|---------|------------------|---------|--------------|
| byte    | 8 bits  | -128 to 127      | 0       | `byte b=10;` |
| short   | 16 bits | -32768 to 32767  | 0       | `short s=100;`|
| int     | 32 bits | -2³¹ to 2³¹-1    | 0       | `int i=1000;`|
| long    | 64 bits | -2⁶³ to 2⁶³-1    | 0L      | `long l=10000L;`|
| float   | 32 bits | ~±3.4E+38        | 0.0f    | `float f=3.14f;`|
| double  | 64 bits | ~±1.7E+308       | 0.0d    | `double d=3.14;`|
| char    | 16 bits | 0 to 65535       | '\u0000'| `char c='A';`|
| boolean | 1 bit   | true/false       | false   | `boolean b=true;`|

---

## 🔧 Operators Cheat Sheet

### Arithmetic
```java
+   Addition        a + b
-   Subtraction     a - b
*   Multiplication  a * b
/   Division        a / b
%   Modulus        a % b
```

### Relational
```java
==  Equal to           a == b
!=  Not equal          a != b
>   Greater than       a > b
<   Less than          a < b
>=  Greater or equal   a >= b
<=  Less or equal      a <= b
```

### Logical
```java
&&  AND    (a > 0 && b > 0)
||  OR     (a > 0 || b > 0)
!   NOT    !(a > 0)
```

### Assignment
```java
=    a = 10
+=   a += 5   // a = a + 5
-=   a -= 5   // a = a - 5
*=   a *= 2   // a = a * 2
/=   a /= 2   // a = a / 2
%=   a %= 3   // a = a % 3
```

### Increment/Decrement
```java
i++   Post-increment
++i   Pre-increment
i--   Post-decrement
--i   Pre-decrement
```

---

## 📊 Big O Complexity Cheat Sheet

| Notation   | Name          | Example                  | 100 elements |
|------------|---------------|--------------------------|--------------|
| O(1)       | Constant      | Array access             | 1            |
| O(log n)   | Logarithmic   | Binary search            | 7            |
| O(n)       | Linear        | Single loop              | 100          |
| O(n log n) | Linearithmic  | Merge sort               | 700          |
| O(n²)      | Quadratic     | Nested loops             | 10,000       |
| O(2ⁿ)      | Exponential   | Recursive Fibonacci      | huge         |

**Rules:**
1. Drop constants: O(2n) → O(n)
2. Drop non-dominant: O(n² + n) → O(n²)
3. Different inputs: O(a + b), not O(n)
4. Nested loops: O(a × b)

---

## 🎯 LeetCode Solutions Summary

### Two Sum (#1)
```java
// HashMap O(n)
Map<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < nums.length; i++) {
    int complement = target - nums[i];
    if (map.containsKey(complement)) {
        return new int[] {map.get(complement), i};
    }
    map.put(nums[i], i);
}
```

### Palindrome Number (#9)
```java
// Math O(log n)
if (x < 0 || (x % 10 == 0 && x != 0)) return false;
int reversed = 0;
while (x > reversed) {
    reversed = reversed * 10 + x % 10;
    x /= 10;
}
return x == reversed || x == reversed / 10;
```

### Roman to Integer (#13)
```java
// Right to Left
int result = 0, prevValue = 0;
for (int i = s.length() - 1; i >= 0; i--) {
    int current = getValue(s.charAt(i));
    if (current < prevValue) result -= current;
    else result += current;
    prevValue = current;
}
```

---

## 🔄 Pattern Templates

### Right Triangle
```java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

### Pyramid
```java
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) System.out.print(" ");
    for (int k = 1; k <= 2*i-1; k++) System.out.print("*");
    System.out.println();
}
```

---

## ✅ Daily Workflow

### Morning Routine
1. ✅ Open IDE
2. ✅ Review yesterday's code (if Day 2+)
3. ✅ Read today's study_plan.md
4. ✅ Follow morning session

### Afternoon Routine
1. ✅ Open LeetCode
2. ✅ Read problem carefully
3. ✅ Think of approaches
4. ✅ Code brute force first
5. ✅ Optimize to best solution
6. ✅ Test with examples

### Evening Routine
1. ✅ Create/update code
2. ✅ Git add & commit
3. ✅ Git push
4. ✅ Update progress.md
5. ✅ Review day's learning
6. ✅ Plan tomorrow

---

## 🆘 Troubleshooting

### "javac not recognized"
```bash
# Windows: Add to PATH
# System Properties → Environment Variables
# Add: C:\Program Files\Java\jdk-17\bin
```

### "Scanner not found"
```java
// Add at top of file
import java.util.Scanner;
```

### "HashMap not found"
```java
// Add at top
import java.util.HashMap;
import java.util.Map;
```

### Git push fails
```bash
# Set remote if not set
git remote add origin https://github.com/USERNAME/REPO.git

# Force push (careful!)
git push -f origin main
```

---

## 📚 Learning Resources

### Documentation
- [Java SE 17 Docs](https://docs.oracle.com/en/java/javase/17/)
- [Java Tutorials](https://docs.oracle.com/javase/tutorial/)

### Practice
- [LeetCode](https://leetcode.com/)
- [HackerRank](https://www.hackerrank.com/domains/java)

### Videos
- [Java Full Course](https://www.youtube.com/watch?v=eIrMbAQSU34)
- [Big O Explained](https://www.youtube.com/watch?v=v4cd1O4zkGw)

---

## 💡 Pro Tips

1. **Comment your code** - Future you will thank present you
2. **Test edge cases** - Empty arrays, negative numbers, zero
3. **Use meaningful names** - `studentAge` not `x`
4. **Close Scanner** - Always `scanner.close()`
5. **Git often** - Commit after each program
6. **Review daily** - 15 minutes before sleep
7. **Practice typing** - Speed matters in interviews

---

## 🎯 Success Metrics

✅ **Environment:** JDK, IDE, Git all working  
✅ **Programs:** All 18 files created  
✅ **LeetCode:** 3/3 problems solved  
✅ **Understanding:** Can explain Big O  
✅ **Git:** Code pushed to GitHub  
✅ **Ready:** For Day 2

---

**🎉 Day 1 Complete - You're Awesome! 🎉**

Keep this file handy for quick reference throughout your journey!

---

*Last Updated: Day 1*  
*Total Files: 18*  
*LeetCode: 3*  
*Progress: 1.1%*
