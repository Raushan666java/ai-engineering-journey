# Day 3 Quick Reference - Loops & Arrays

## 🔄 Loops Cheat Sheet

### For Loop
```java
// Basic for loop
for (int i = 0; i < 10; i++) {
    System.out.println(i);
}

// Reverse iteration
for (int i = 10; i >= 1; i--) {
    System.out.println(i);
}

// Step by 2
for (int i = 0; i <= 20; i += 2) {
    System.out.println(i);  // Even numbers
}

// Multiple variables
for (int i = 0, j = 10; i < j; i++, j--) {
    System.out.println(i + " " + j);
}

// Infinite loop
for (;;) {
    // Runs forever (use break to exit)
}
```

### While Loop
```java
// Basic while
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}

// Condition-based
int sum = 0, num = 1;
while (sum < 100) {
    sum += num;
    num++;
}

// Input validation
Scanner sc = new Scanner(System.in);
int input;
while (true) {
    input = sc.nextInt();
    if (input > 0) break;
    System.out.println("Enter positive number!");
}
```

### Do-While Loop
```java
// Executes at least once
int i = 0;
do {
    System.out.println(i);
    i++;
} while (i < 10);

// Menu-driven
int choice;
do {
    displayMenu();
    choice = getChoice();
    processChoice(choice);
} while (choice != 0);

// Input validation
int num;
do {
    System.out.print("Enter positive: ");
    num = sc.nextInt();
} while (num <= 0);
```

### Enhanced For Loop (for-each)
```java
// Array iteration
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}

// String array
String[] names = {"Alice", "Bob", "Charlie"};
for (String name : names) {
    System.out.println(name);
}

// 2D array
int[][] matrix = {{1,2,3}, {4,5,6}};
for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}

// Note: Cannot modify array elements or access index
```

### Loop Control Statements
```java
// break - exit loop immediately
for (int i = 0; i < 100; i++) {
    if (i == 50) break;  // Stop at 50
    System.out.println(i);
}

// continue - skip current iteration
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;  // Skip even
    System.out.println(i);  // Print odd only
}

// Labeled break (nested loops)
outer:
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (i * j > 10) break outer;  // Break both loops
        System.out.print(i * j + " ");
    }
}

// Labeled continue
outer:
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        if (j == 3) continue outer;  // Skip to next i
        System.out.print(i + "," + j + " ");
    }
}
```

---

## 📊 Arrays Cheat Sheet

### Array Declaration & Initialization
```java
// Declaration
int[] arr;                    // Preferred
int arr[];                    // Also valid

// Declaration + Allocation
int[] arr = new int[5];       // All elements = 0

// Direct initialization
int[] arr = {1, 2, 3, 4, 5};

// Declare then initialize
int[] arr;
arr = new int[]{1, 2, 3, 4, 5};

// Different types
double[] decimals = {1.5, 2.7, 3.9};
String[] names = {"Alice", "Bob"};
boolean[] flags = {true, false, true};
char[] letters = {'A', 'B', 'C'};
```

### Array Traversal
```java
int[] arr = {10, 20, 30, 40, 50};

// Method 1: Standard for loop
for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}

// Method 2: Enhanced for loop
for (int num : arr) {
    System.out.println(num);
}

// Method 3: Backward iteration
for (int i = arr.length - 1; i >= 0; i--) {
    System.out.println(arr[i]);
}

// Method 4: While loop
int i = 0;
while (i < arr.length) {
    System.out.println(arr[i++]);
}
```

### Common Array Operations
```java
import java.util.Arrays;

// Find min and max
int min = arr[0], max = arr[0];
for (int num : arr) {
    if (num < min) min = num;
    if (num > max) max = num;
}

// Sum and average
int sum = 0;
for (int num : arr) sum += num;
double avg = sum / (double) arr.length;

// Linear search
int target = 30, index = -1;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
        index = i;
        break;
    }
}

// Binary search (array must be sorted)
Arrays.sort(arr);
int idx = Arrays.binarySearch(arr, target);

// Sort array
Arrays.sort(arr);  // Ascending

// Print array
System.out.println(Arrays.toString(arr));

// Copy array
int[] copy = Arrays.copyOf(arr, arr.length);
int[] copy2 = arr.clone();

// Fill array
Arrays.fill(arr, 10);  // All elements = 10

// Compare arrays
boolean equal = Arrays.equals(arr1, arr2);
```

### Array Manipulation
```java
// Reverse array in-place
for (int i = 0; i < arr.length / 2; i++) {
    int temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
}

// OR using two pointers
int left = 0, right = arr.length - 1;
while (left < right) {
    int temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
}

// Rotate right by k (optimal method)
void rotateRight(int[] arr, int k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
}

// Remove duplicates (sorted array)
int j = 0;
for (int i = 1; i < arr.length; i++) {
    if (arr[i] != arr[j]) {
        j++;
        arr[j] = arr[i];
    }
}
// New length = j + 1

// Move zeros to end
int j = 0;
for (int i = 0; i < arr.length; i++) {
    if (arr[i] != 0) {
        arr[j++] = arr[i];
    }
}
while (j < arr.length) {
    arr[j++] = 0;
}
```

### 2D Arrays
```java
// Declaration
int[][] matrix = new int[3][4];  // 3 rows, 4 columns

// Direct initialization
int[][] matrix = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

// Jagged array (different column sizes)
int[][] jagged = {
    {1, 2},
    {3, 4, 5},
    {6}
};

// Row-wise traversal
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Column-wise traversal
for (int j = 0; j < matrix[0].length; j++) {
    for (int i = 0; i < matrix.length; i++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println();
}

// Enhanced for loop
for (int[] row : matrix) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}

// Matrix addition
int[][] sum = new int[rows][cols];
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        sum[i][j] = A[i][j] + B[i][j];
    }
}

// Matrix transpose
int[][] transposed = new int[cols][rows];
for (int i = 0; i < rows; i++) {
    for (int j = 0; j < cols; j++) {
        transposed[j][i] = matrix[i][j];
    }
}
```

---

## 🎯 Common Patterns

### Pattern 1: Find Second Largest
```java
int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
for (int num : arr) {
    if (num > first) {
        second = first;
        first = num;
    } else if (num > second && num != first) {
        second = num;
    }
}
```

### Pattern 2: Two Sum Problem
```java
// Brute force O(n²)
for (int i = 0; i < arr.length; i++) {
    for (int j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] == target) {
            return new int[]{i, j};
        }
    }
}

// HashMap O(n)
HashMap<Integer, Integer> map = new HashMap<>();
for (int i = 0; i < arr.length; i++) {
    int complement = target - arr[i];
    if (map.containsKey(complement)) {
        return new int[]{map.get(complement), i};
    }
    map.put(arr[i], i);
}
```

### Pattern 3: Sliding Window (Max Sum of K elements)
```java
int windowSum = 0;
// First window
for (int i = 0; i < k; i++) {
    windowSum += arr[i];
}
int maxSum = windowSum;

// Slide the window
for (int i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
}
```

### Pattern 4: Two Pointers
```java
// Find pair with sum in sorted array
int left = 0, right = arr.length - 1;
while (left < right) {
    int sum = arr[left] + arr[right];
    if (sum == target) return new int[]{left, right};
    else if (sum < target) left++;
    else right--;
}
```

### Pattern 5: Kadane's Algorithm (Max Subarray Sum)
```java
int maxSum = arr[0], currentSum = arr[0];
for (int i = 1; i < arr.length; i++) {
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    maxSum = Math.max(maxSum, currentSum);
}
```

---

## 🔢 Pattern Printing Templates

### Triangle Pattern
```java
// Right triangle
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}

// Inverted
for (int i = n; i >= 1; i--) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
```

### Pyramid Pattern
```java
for (int i = 1; i <= n; i++) {
    // Print spaces
    for (int j = 1; j <= n - i; j++) {
        System.out.print(" ");
    }
    // Print stars
    for (int j = 1; j <= 2 * i - 1; j++) {
        System.out.print("*");
    }
    System.out.println();
}
```

### Diamond Pattern
```java
// Upper pyramid
for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n - i; j++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
// Lower inverted pyramid
for (int i = n - 1; i >= 1; i--) {
    for (int j = 1; j <= n - i; j++) System.out.print(" ");
    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("*");
    System.out.println();
}
```

### Hollow Rectangle
```java
for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= cols; j++) {
        if (i == 1 || i == rows || j == 1 || j == cols) {
            System.out.print("* ");
        } else {
            System.out.print("  ");
        }
    }
    System.out.println();
}
```

---

## 📝 Common Interview Templates

### Template 1: Array Search
```java
public int search(int[] arr, int target) {
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1;  // Not found
}
```

### Template 2: Array Reverse
```java
public void reverse(int[] arr) {
    int left = 0, right = arr.length - 1;
    while (left < right) {
        int temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
}
```

### Template 3: Find Min/Max
```java
public int findMin(int[] arr) {
    int min = arr[0];
    for (int num : arr) {
        if (num < min) min = num;
    }
    return min;
}
```

### Template 4: Check Sorted
```java
public boolean isSorted(int[] arr) {
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}
```

---

## 🚀 Time Complexity Quick Reference

| Operation | Time Complexity |
|-----------|----------------|
| Access element | O(1) |
| Linear search | O(n) |
| Binary search | O(log n) |
| Bubble sort | O(n²) |
| Selection sort | O(n²) |
| Arrays.sort() | O(n log n) |
| Reverse array | O(n) |
| Rotate array | O(n) |
| Two sum (HashMap) | O(n) |
| Matrix traversal | O(rows × cols) |

---

## 🐛 Common Mistakes to Avoid

```java
// ❌ WRONG: Index out of bounds
arr[arr.length]  // Error! Valid indices: 0 to length-1

// ✅ CORRECT
arr[arr.length - 1]  // Last element

// ❌ WRONG: Comparing arrays
if (arr1 == arr2) { }  // Compares references

// ✅ CORRECT
if (Arrays.equals(arr1, arr2)) { }

// ❌ WRONG: Modifying during enhanced for
for (int num : arr) {
    num = num * 2;  // Doesn't modify array!
}

// ✅ CORRECT
for (int i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
}

// ❌ WRONG: Infinite loop
while (true) {
    // No break statement!
}

// ✅ CORRECT
while (condition) {
    // Ensure condition becomes false
}
```

---

**Print this and keep it handy for quick reference during practice and interviews!** 📄
