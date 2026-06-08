# DAY 5 QUICK REFERENCE: METHODS & RECURSION

Quick syntax reference for Java methods and recursion concepts.

---

## 📌 METHOD BASICS

### **Method Declaration**
```java
accessModifier returnType methodName(parameters) {
    // method body
    return value; // if not void
}
```

### **Examples**
```java
// Void method (no return)
public static void printHello() {
    System.out.println("Hello");
}

// Method with return value
public static int add(int a, int b) {
    return a + b;
}

// Method with multiple parameters
public static double calculateArea(double length, double width) {
    return length * width;
}
```

---

## 📌 ACCESS MODIFIERS

| Modifier | Description |
|----------|-------------|
| `public` | Accessible everywhere |
| `private` | Only within same class |
| `protected` | Same package + subclasses |
| `default` | Same package only (no keyword) |

```java
public class Example {
    public void publicMethod() { }      // Anywhere
    private void privateMethod() { }    // This class only
    protected void protectedMethod() { } // Package + subclass
    void defaultMethod() { }            // Package only
}
```

---

## 📌 METHOD OVERLOADING

Same method name, different parameters.

```java
// Different number of parameters
public static int max(int a, int b) {
    return a > b ? a : b;
}

public static int max(int a, int b, int c) {
    return Math.max(max(a, b), c);
}

// Different types
public static int add(int a, int b) {
    return a + b;
}

public static double add(double a, double b) {
    return a + b;
}

// Different order
public static void print(String msg, int num) {
    System.out.println(msg + ": " + num);
}

public static void print(int num, String msg) {
    System.out.println(num + " - " + msg);
}
```

---

## 📌 VARARGS (Variable Arguments)

```java
// Varargs syntax
public static int sum(int... numbers) {
    int total = 0;
    for (int num : numbers) {
        total += num;
    }
    return total;
}

// Usage
sum(1, 2, 3);           // 6
sum(1, 2, 3, 4, 5);     // 15
sum();                   // 0

// Varargs with other parameters (varargs must be last)
public static void print(String prefix, int... numbers) {
    System.out.print(prefix + ": ");
    for (int num : numbers) {
        System.out.print(num + " ");
    }
}
```

---

## 📌 STATIC VS INSTANCE METHODS

```java
public class Calculator {
    static int staticValue = 100;  // Static variable
    int instanceValue = 50;        // Instance variable
    
    // Static method - belongs to class
    public static int staticMethod() {
        return staticValue;  // Can access static only
        // return instanceValue; // ❌ ERROR
    }
    
    // Instance method - belongs to object
    public int instanceMethod() {
        return instanceValue + staticValue; // ✅ Can access both
    }
}

// Usage
Calculator.staticMethod();           // Call on class
Calculator calc = new Calculator();
calc.instanceMethod();               // Call on object
```

---

## 📌 METHOD CHAINING

```java
public class Calculator {
    private int value = 0;
    
    // Return 'this' to enable chaining
    public Calculator add(int n) {
        value += n;
        return this;
    }
    
    public Calculator multiply(int n) {
        value *= n;
        return this;
    }
    
    public int getResult() {
        return value;
    }
}

// Usage - chain multiple calls
int result = new Calculator()
    .add(5)
    .multiply(2)
    .add(10)
    .getResult();  // 20
```

---

## 📌 PASS BY VALUE

```java
// Primitives - value is copied
public static void modifyPrimitive(int x) {
    x = 100;  // Only changes local copy
}

int num = 5;
modifyPrimitive(num);
System.out.println(num);  // Still 5

// Objects - reference is copied
public static void modifyArray(int[] arr) {
    arr[0] = 100;  // Changes original array
}

int[] numbers = {1, 2, 3};
modifyArray(numbers);
System.out.println(numbers[0]);  // 100
```

---

## 📌 RECURSION BASICS

### **Structure**
```java
public static returnType recursiveMethod(parameters) {
    // Base case - termination condition
    if (baseCondition) {
        return baseValue;
    }
    
    // Recursive case - call itself
    return recursiveMethod(modifiedParameters);
}
```

### **Examples**
```java
// Factorial: n! = n × (n-1)!
public static int factorial(int n) {
    if (n <= 1) return 1;           // Base case
    return n * factorial(n - 1);    // Recursive case
}

// Fibonacci: fib(n) = fib(n-1) + fib(n-2)
public static int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Power: x^n = x × x^(n-1)
public static int power(int x, int n) {
    if (n == 0) return 1;
    return x * power(x, n - 1);
}
```

---

## 📌 TYPES OF RECURSION

### **1. Linear Recursion**
Single recursive call.
```java
public static int sum(int n) {
    if (n == 0) return 0;
    return n + sum(n - 1);  // One recursive call
}
```

### **2. Binary Recursion**
Two recursive calls.
```java
public static int fibonacci(int n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);  // Two calls
}
```

### **3. Tail Recursion**
Recursive call is last operation.
```java
public static int factorialTail(int n, int accumulator) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator);  // Last operation
}
```

### **4. Multiple Recursion**
More than two recursive calls.
```java
public static void towerOfHanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        System.out.println("Move 1 from " + from + " to " + to);
        return;
    }
    towerOfHanoi(n - 1, from, aux, to);     // Call 1
    System.out.println("Move " + n + " from " + from + " to " + to);
    towerOfHanoi(n - 1, aux, to, from);     // Call 2
}
```

---

## 📌 RECURSION WITH MEMOIZATION

```java
// Without memoization - O(2^n)
public static int fib(int n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// With memoization - O(n)
public static int fibMemo(int n, int[] memo) {
    if (n <= 1) return n;
    
    if (memo[n] != 0) {
        return memo[n];  // Return cached value
    }
    
    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}

// Usage
int[] memo = new int[100];
int result = fibMemo(50, memo);
```

---

## 📌 COMMON RECURSIVE PATTERNS

### **1. Divide and Conquer**
```java
public static int binarySearch(int[] arr, int target, int left, int right) {
    if (left > right) return -1;
    
    int mid = left + (right - left) / 2;
    
    if (arr[mid] == target) return mid;
    if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
    return binarySearch(arr, target, mid + 1, right);
}
```

### **2. Backtracking**
```java
public static void generateSubsets(int[] arr, int index, List<Integer> current) {
    if (index == arr.length) {
        System.out.println(current);
        return;
    }
    
    // Exclude current element
    generateSubsets(arr, index + 1, current);
    
    // Include current element
    current.add(arr[index]);
    generateSubsets(arr, index + 1, current);
    current.remove(current.size() - 1);  // Backtrack
}
```

### **3. Tree Traversal**
```java
public static void inorder(TreeNode root) {
    if (root == null) return;
    
    inorder(root.left);           // Left
    System.out.print(root.val);   // Root
    inorder(root.right);          // Right
}
```

---

## 📌 RECURSION VS ITERATION

| Aspect | Recursion | Iteration |
|--------|-----------|-----------|
| **Readability** | Often clearer | Can be complex |
| **Memory** | Uses call stack | No extra memory |
| **Speed** | Slower (overhead) | Faster |
| **Stack Overflow** | Possible | No |
| **Use Cases** | Trees, graphs | Simple loops |

```java
// Recursive
public static int factorialRec(int n) {
    if (n <= 1) return 1;
    return n * factorialRec(n - 1);
}

// Iterative
public static int factorialIter(int n) {
    int result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
```

---

## 📌 OPTIMIZATION TECHNIQUES

### **1. Memoization (Top-Down)**
```java
public static int fib(int n, int[] memo) {
    if (n <= 1) return n;
    if (memo[n] != 0) return memo[n];
    
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

### **2. Dynamic Programming (Bottom-Up)**
```java
public static int fib(int n) {
    if (n <= 1) return n;
    
    int[] dp = new int[n + 1];
    dp[0] = 0;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    
    return dp[n];
}
```

### **3. Space Optimization**
```java
public static int fib(int n) {
    if (n <= 1) return n;
    
    int prev2 = 0, prev1 = 1;
    
    for (int i = 2; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}
```

---

## 📌 BINARY EXPONENTIATION

```java
// Fast power - O(log n)
public static long power(long x, int n) {
    if (n == 0) return 1;
    
    long half = power(x, n / 2);
    
    if (n % 2 == 0) {
        return half * half;        // x^n = (x^(n/2))^2
    } else {
        return x * half * half;    // x^n = x * x^(n-1)
    }
}

// Iterative version
public static long powerIterative(long x, int n) {
    long result = 1;
    long current = x;
    
    while (n > 0) {
        if ((n & 1) == 1) {
            result *= current;
        }
        current *= current;
        n >>= 1;
    }
    
    return result;
}
```

---

## 📌 COMMON MISTAKES

❌ **Missing base case**
```java
// Wrong - infinite recursion
public static int bad(int n) {
    return n + bad(n - 1);  // No base case!
}

// Correct
public static int good(int n) {
    if (n == 0) return 0;   // Base case
    return n + good(n - 1);
}
```

❌ **Wrong base case**
```java
// Wrong - doesn't handle n=0
public static int factorial(int n) {
    if (n == 1) return 1;
    return n * factorial(n - 1);
}

// Correct
public static int factorial(int n) {
    if (n <= 1) return 1;   // Handles 0 and 1
    return n * factorial(n - 1);
}
```

❌ **Not progressing toward base case**
```java
// Wrong - infinite loop
public static int bad(int n) {
    if (n == 0) return 0;
    return n + bad(n);  // Same value, no progress!
}

// Correct
public static int good(int n) {
    if (n == 0) return 0;
    return n + good(n - 1);  // Moves toward base case
}
```

---

## 📌 COMPLEXITY REFERENCE

| Algorithm | Time (Naive) | Time (Optimized) | Space |
|-----------|--------------|------------------|-------|
| Factorial | O(n) | O(n) | O(n) or O(1) |
| Fibonacci | O(2^n) | O(n) with memo | O(n) or O(1) |
| Power | O(n) | O(log n) | O(log n) or O(1) |
| Binary Search | O(log n) | O(log n) | O(log n) or O(1) |
| Merge Sort | O(n log n) | O(n log n) | O(n) |

---

## 📌 WHEN TO USE RECURSION

✅ **Good for:**
- Tree/graph traversal
- Divide and conquer (merge sort, quick sort)
- Backtracking (N-Queens, Sudoku)
- Mathematical sequences
- Nested structures

❌ **Avoid for:**
- Simple loops
- Very deep recursion (stack overflow)
- When iteration is clearer
- Memory-constrained environments

---

## 📌 INTERVIEW TEMPLATES

### **Basic Recursion**
```java
public static type recursive(params) {
    // 1. Base case
    if (baseCondition) {
        return baseValue;
    }
    
    // 2. Recursive case
    return combine(recursive(smaller), ...);
}
```

### **Recursion with Memoization**
```java
public static type solve(params, memo) {
    // 1. Base case
    if (baseCondition) return baseValue;
    
    // 2. Check memo
    if (memo[key] != null) return memo[key];
    
    // 3. Compute and store
    memo[key] = combine(solve(smaller, memo), ...);
    return memo[key];
}
```

### **Backtracking**
```java
public static void backtrack(params, current, result) {
    // 1. Base case - found solution
    if (isComplete(current)) {
        result.add(new ArrayList<>(current));
        return;
    }
    
    // 2. Try all options
    for (option : options) {
        current.add(option);           // Choose
        backtrack(params, current, result);  // Explore
        current.remove(current.size() - 1);  // Unchoose (backtrack)
    }
}
```

---

**Keep this reference handy while coding!** 🚀
