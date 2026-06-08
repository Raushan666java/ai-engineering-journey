# Day 3: Loops & Arrays - Study Notes
**90-Day Comprehensive Placement Preparation**

---

## 📋 Table of Contents

1. [Loop Fundamentals](#loop-fundamentals)
2. [Array Basics](#array-basics)
3. [Array Operations](#array-operations)
4. [Searching Algorithms](#searching-algorithms)
5. [Sorting Algorithms](#sorting-algorithms)
6. [Time Complexity](#time-complexity)
7. [Common Patterns](#common-patterns)
8. [Interview Tips](#interview-tips)
9. [Practice Problems](#practice-problems)

---

## 🔄 Loop Fundamentals

### Types of Loops

#### 1. **for Loop**
```java
// Traditional for loop
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// Multiple variables
for (int i = 0, j = 10; i < 10 && j > 0; i++, j--) {
    System.out.println("i: " + i + ", j: " + j);
}
```

**When to use:**
- When you know the number of iterations
- When you need precise control over loop variable
- For iterating through arrays with index

#### 2. **while Loop**
```java
// Basic while loop
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}

// Sentinel-controlled loop
Scanner scanner = new Scanner(System.in);
int input = 0;
while (input != -1) {
    input = scanner.nextInt();
}
```

**When to use:**
- When number of iterations is unknown
- When loop should continue until a condition becomes false
- For input validation

#### 3. **do-while Loop**
```java
// Execute at least once
int choice;
do {
    System.out.println("Menu:");
    System.out.println("1. Option 1");
    System.out.println("2. Option 2");
    System.out.println("3. Exit");
    choice = scanner.nextInt();
} while (choice != 3);
```

**When to use:**
- When loop body must execute at least once
- For menu-driven programs
- When validation is needed after first execution

#### 4. **Enhanced for-each Loop**
```java
// Array traversal
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}

// Collection traversal
ArrayList<String> names = new ArrayList<>();
for (String name : names) {
    System.out.println(name);
}
```

**When to use:**
- When you need to access every element
- When you don't need the index
- For read-only operations on arrays/collections

### Loop Control Statements

#### **break Statement**
```java
// Exit loop immediately
for (int i = 0; i < 100; i++) {
    if (i == 50) {
        break; // Exit loop when i equals 50
    }
    System.out.println(i);
}
```

#### **continue Statement**
```java
// Skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // Skip even numbers
    }
    System.out.println(i); // Only odd numbers printed
}
```

#### **Labeled Statements**
```java
// Break out of nested loops
outer: for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 2 && j == 2) {
            break outer; // Break out of both loops
        }
    }
}
```

---

## 📊 Array Basics

### Declaration and Initialization

#### **Method 1: Declaration then Initialization**
```java
int[] numbers;           // Declaration
numbers = new int[5];    // Initialization with default values (0)
```

#### **Method 2: Direct Initialization**
```java
int[] numbers = {1, 2, 3, 4, 5};        // Size inferred
int[] numbers = new int[]{1, 2, 3, 4, 5}; // Explicit size
```

#### **Method 3: Using new keyword**
```java
int[] numbers = new int[5]; // All elements initialized to 0
```

### Array Properties

```java
int[] arr = {10, 20, 30, 40, 50};

System.out.println(arr.length);    // 5 (final property)
System.out.println(arr[0]);        // First element: 10
System.out.println(arr[4]);        // Last element: 50
System.out.println(arr[arr.length-1]); // Last element: 50
```

### Multi-dimensional Arrays

#### **2D Arrays**
```java
// Declaration and initialization
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Jagged arrays (different row lengths)
int[][] jagged = {
    {1, 2},
    {3, 4, 5},
    {6, 7, 8, 9}
};

// Access elements
int element = matrix[1][2]; // Row 1, Column 2 = 6
```

#### **3D Arrays**
```java
int[][][] cube = new int[2][3][4]; // 2 layers, 3 rows, 4 columns
cube[0][1][2] = 42; // Access element
```

---

## 🔧 Array Operations

### Basic Operations

#### **Traversal**
```java
int[] arr = {1, 2, 3, 4, 5};

// Traditional for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Enhanced for-each loop
for (int num : arr) {
    System.out.println(num);
}
```

#### **Searching**
```java
// Linear search
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;
}

// Binary search (requires sorted array)
public static int binarySearch(int[] arr, int target) {
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

#### **Modification**
```java
int[] arr = {1, 2, 3, 4, 5};

// Update element
arr[2] = 99; // Change index 2 to 99

// Insert at end (if space allows)
arr[arr.length - 1] = 100;

// Safe update with bounds checking
if (index >= 0 && index < arr.length) {
    arr[index] = newValue;
}
```

### Array Manipulation

#### **Reversal**
```java
public static void reverse(int[] arr) {
    int start = 0, end = arr.length - 1;
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
```

#### **Rotation**
```java
// Left rotation by k positions
public static void rotateLeft(int[] arr, int k) {
    k = k % arr.length;
    reverse(arr, 0, k-1);        // Reverse first k elements
    reverse(arr, k, arr.length-1); // Reverse remaining elements
    reverse(arr, 0, arr.length-1); // Reverse entire array
}

// Right rotation by k positions
public static void rotateRight(int[] arr, int k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length-1);     // Reverse entire array
    reverse(arr, 0, k-1);             // Reverse first k elements
    reverse(arr, k, arr.length-1);     // Reverse remaining elements
}
```

#### **Copying**
```java
// Method 1: Manual copy
int[] copy1 = new int[original.length];
for (int i = 0; i < original.length; i++) {
    copy1[i] = original[i];
}

// Method 2: Using clone()
int[] copy2 = original.clone();

// Method 3: Using System.arraycopy()
int[] copy3 = new int[original.length];
System.arraycopy(original, 0, copy3, 0, original.length);

// Method 4: Using Arrays.copyOf()
int[] copy4 = java.util.Arrays.copyOf(original, original.length);
```

---

## 🔍 Searching Algorithms

### Linear Search
- **Time Complexity:** O(n)
- **Space Complexity:** O(1)
- **Best Case:** O(1) - element found at first position
- **Worst Case:** O(n) - element not found or at last position

```java
public static int linearSearch(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i; // Found at index i
        }
    }
    return -1; // Not found
}
```

### Binary Search
- **Time Complexity:** O(log n)
- **Space Complexity:** O(1)
- **Requirements:** Array must be sorted
- **Best Case:** O(1) - element at middle
- **Worst Case:** O(log n)

```java
public static int binarySearch(int[] arr, int target) {
    int left = 0;
    int right = arr.length - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}
```

---

## 🔄 Sorting Algorithms

### Bubble Sort
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Stable:** Yes
- **In-place:** Yes

```java
public static void bubbleSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                int temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
```

### Selection Sort
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Stable:** No
- **In-place:** Yes

```java
public static void selectionSort(int[] arr) {
    int n = arr.length;
    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap
        int temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
}
```

### Insertion Sort
- **Time Complexity:** O(n²)
- **Space Complexity:** O(1)
- **Stable:** Yes
- **In-place:** Yes

```java
public static void insertionSort(int[] arr) {
    int n = arr.length;
    for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;

        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
}
```

---

## ⏱️ Time Complexity

### Big O Notation
- **O(1):** Constant time - array access, simple operations
- **O(log n):** Logarithmic time - binary search
- **O(n):** Linear time - linear search, single loop traversal
- **O(n log n):** Linearithmic time - efficient sorting algorithms
- **O(n²):** Quadratic time - bubble sort, nested loops
- **O(2^n):** Exponential time - recursive algorithms with multiple calls

### Common Operations
```java
int[] arr = new int[1000];

// O(1) - Constant time
int first = arr[0];           // Array access
int length = arr.length;      // Length property

// O(n) - Linear time
int sum = 0;
for (int num : arr) {         // Single loop
    sum += num;
}

// O(n²) - Quadratic time
for (int i = 0; i < arr.length; i++) {
    for (int j = 0; j < arr.length; j++) {  // Nested loops
        // Some operation
    }
}

// O(log n) - Logarithmic time
int index = Arrays.binarySearch(arr, target);  // Binary search
```

---

## 🎯 Common Patterns

### Pattern 1: Two Pointer Technique
```java
// Reverse array
public static void reverse(int[] arr) {
    int left = 0;
    int right = arr.length - 1;

    while (left < right) {
        // Swap elements
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left++;
        right--;
    }
}
```

### Pattern 2: Sliding Window
```java
// Find maximum sum of subarray of size k
public static int maxSubarraySum(int[] arr, int k) {
    int maxSum = 0;
    int windowSum = 0;

    // Calculate sum of first window
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    maxSum = windowSum;

    // Slide the window
    for (int i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
```

### Pattern 3: Frequency Counting
```java
// Count frequency of each element
public static int[] countFrequency(int[] arr) {
    int max = findMaximum(arr);
    int[] frequency = new int[max + 1];

    for (int num : arr) {
        frequency[num]++;
    }

    return frequency;
}
```

### Pattern 4: Prefix Sum
```java
// Calculate prefix sum array
public static int[] prefixSum(int[] arr) {
    int[] prefix = new int[arr.length];
    prefix[0] = arr[0];

    for (int i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }

    return prefix;
}
```

---

## 🎤 Interview Tips

### Common Questions

#### **Loop Questions**
1. **Infinite Loop Prevention**
   ```java
   // Wrong
   for (int i = 0; i >= 0; i++) { }

   // Correct
   for (int i = 0; i < limit; i++) { }
   ```

2. **Loop Variable Scope**
   ```java
   // Variable declared inside loop - scope limited
   for (int i = 0; i < 10; i++) {
       // i is only accessible here
   }

   // Variable declared outside loop - wider scope
   int i;
   for (i = 0; i < 10; i++) {
       // i accessible outside loop too
   }
   ```

#### **Array Questions**
1. **ArrayIndexOutOfBoundsException**
   ```java
   // Always check bounds
   if (index >= 0 && index < arr.length) {
       // Safe to access arr[index]
   }
   ```

2. **Array Length vs Capacity**
   ```java
   int[] arr = new int[10];
   System.out.println(arr.length); // Always 10

   // Arrays don't automatically resize in Java
   // Use ArrayList for dynamic sizing
   ```

3. **Multi-dimensional Arrays**
   ```java
   // Matrix traversal
   for (int i = 0; i < matrix.length; i++) {
       for (int j = 0; j < matrix[i].length; j++) {
           // Access matrix[i][j]
       }
   }
   ```

### Problem-Solving Approach

#### **Step-by-Step Method**
1. **Understand the Problem**
   - Read carefully
   - Identify input/output
   - Note constraints

2. **Choose Data Structure**
   - Arrays for fixed-size collections
   - ArrayList for dynamic collections
   - HashMap for key-value pairs

3. **Select Algorithm**
   - Linear search for unsorted data
   - Binary search for sorted data
   - Sorting algorithms for ordered data

4. **Handle Edge Cases**
   - Empty arrays
   - Single element arrays
   - Arrays with duplicates
   - Null arrays

5. **Consider Time/Space Complexity**
   - Choose optimal algorithm
   - Balance time vs space trade-offs

### Common Mistakes to Avoid

#### **Loop Mistakes**
```java
// Off-by-one error
for (int i = 0; i <= arr.length; i++) { // Wrong: <=
    // Will cause ArrayIndexOutOfBoundsException
}

// Correct
for (int i = 0; i < arr.length; i++) {
    // Safe access
}
```

#### **Array Mistakes**
```java
// Null pointer exception
int[] arr = null;
arr[0] = 5; // NullPointerException

// Correct
int[] arr = new int[5];
arr[0] = 5;
```

#### **Logic Mistakes**
```java
// Wrong: modifying loop variable inside loop
for (int i = 0; i < 10; i++) {
    if (someCondition) {
        i = 5; // Don't modify loop variable
    }
}

// Correct: use continue or break
for (int i = 0; i < 10; i++) {
    if (someCondition) {
        continue; // Skip this iteration
    }
}
```

---

## 📝 Practice Problems

### Easy Problems
1. **Sum of Array Elements**
2. **Find Maximum/Minimum**
3. **Count Even/Odd Numbers**
4. **Print Array in Reverse**
5. **Linear Search Implementation**

### Medium Problems
6. **Remove Duplicates**
7. **Rotate Array**
8. **Find Second Largest**
9. **Array Intersection**
10. **Move Zeros to End**

### Hard Problems
11. **Two Sum Problem**
12. **Maximum Subarray Sum**
13. **Merge Intervals**
14. **Product of Array Except Self**
15. **Find Missing Number**

### Pattern-Based Practice
- **Two Pointers:** Reverse array, remove duplicates
- **Sliding Window:** Maximum sum subarray, minimum window
- **Prefix Sum:** Range sum queries, equilibrium index
- **Frequency Count:** Most frequent element, unique elements

---

## 🎯 Key Takeaways

### Loops
- **for loops:** Best for known iterations
- **while loops:** Best for unknown iterations
- **do-while:** Execute at least once
- **Enhanced for:** Simple traversal

### Arrays
- **Declaration:** `int[] arr = new int[5];`
- **Initialization:** `int[] arr = {1, 2, 3, 4, 5};`
- **Access:** `arr[index]` (0-based)
- **Length:** `arr.length` (final)

### Algorithms
- **Linear Search:** O(n) - simple, works on unsorted
- **Binary Search:** O(log n) - fast, requires sorted
- **Bubble Sort:** O(n²) - simple, stable
- **Selection Sort:** O(n²) - simple, unstable
- **Insertion Sort:** O(n²) - efficient for small arrays

### Best Practices
- Always check array bounds
- Use enhanced for-each when possible
- Choose appropriate loop type
- Consider time complexity
- Handle edge cases
- Write readable, maintainable code

---

**Remember:** Loops and arrays are fundamental to programming. Master these patterns and you'll be able to solve complex algorithmic problems! 🚀