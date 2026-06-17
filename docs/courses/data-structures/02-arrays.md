# Chapter 2: Arrays

## Learning Objectives

- Distinguish between static and dynamic arrays.
- Implement insertion, deletion, and traversal on arrays.
- Solve problems using the two-pointer technique.
- Manipulate 2D arrays and matrices.

## Theory

![Arrays and Linked Lists Comparison](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/data-structures/ch02-arrays-lists.png)

### Static Arrays

A static array is a contiguous block of memory holding elements of the same type. The size is fixed at allocation time. Access is \( O(1) \) by index because the address can be computed as `base + index * sizeof(element)`.

**Operations and complexity:**

| Operation | Complexity | Notes |
|-----------|------------|-------|
| Access by index | \( O(1) \) | Direct computation |
| Search (unsorted) | \( O(n) \) | Linear scan |
| Insert at end | \( O(1) \) | If space available |
| Insert at arbitrary position | \( O(n) \) | Shift elements |
| Delete at arbitrary position | \( O(n) \) | Shift elements |

### Dynamic Arrays

A dynamic array (e.g., `std::vector`) doubles its capacity when full. The amortized cost of an insertion at the end is \( O(1) \), though an individual insertion may trigger an \( O(n) \) resize.

### Two-Dimensional Arrays

A 2D array is stored in row-major order (C/C++ convention): the entire first row occupies contiguous memory, followed by the second row, etc. Element `a[i][j]` is at address `base + (i * cols + j) * sizeof(T)`.

## Examples

### Example 1: Static Array Operations

```cpp
#include <iostream>

int main() {
    int arr[5] = {10, 20, 30, 40, 50};

    // Access: O(1)
    std::cout << "arr[2] = " << arr[2] << "\n";

    // Linear search: O(n)
    int target = 40;
    for (int i = 0; i < 5; ++i) {
        if (arr[i] == target) {
            std::cout << "Found " << target << " at index " << i << "\n";
            break;
        }
    }

    // Insertion at position 2 (requires shifting)
    int pos = 2, val = 25;
    int temp[6] = {0};
    for (int i = 0; i < 5; ++i) temp[i] = arr[i];
    for (int i = 5; i > pos; --i) temp[i] = temp[i - 1];
    temp[pos] = val;
    std::cout << "After insertion: ";
    for (int x : temp) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Output:**
```
arr[2] = 30
Found 40 at index 3
After insertion: 10 20 25 30 40 50
```

### Example 2: Dynamic Array (std::vector)

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v;

    // Push back (amortized O(1))
    for (int i = 1; i <= 5; ++i) {
        v.push_back(i * 10);
    }

    std::cout << "Size: " << v.size() << ", Capacity: " << v.capacity() << "\n";

    // Insert at beginning: O(n)
    v.insert(v.begin(), 5);
    std::cout << "After insert at front: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";

    // Erase at index 2: O(n)
    v.erase(v.begin() + 2);
    std::cout << "After erase at index 2: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";

    return 0;
}
```

**Output:**
```
Size: 5, Capacity: 8
After insert at front: 5 10 20 30 40 50
After erase at index 2: 5 10 30 40 50
```

### Example 3: Rotate Array

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// Rotate array left by k positions — O(n) time, O(1) space
void rotateLeft(std::vector<int>& arr, int k) {
    int n = arr.size();
    if (n == 0) return;
    k = k % n;
    std::reverse(arr.begin(), arr.begin() + k);
    std::reverse(arr.begin() + k, arr.end());
    std::reverse(arr.begin(), arr.end());
}

int main() {
    std::vector<int> arr = {1, 2, 3, 4, 5, 6, 7};
    rotateLeft(arr, 3);
    std::cout << "Rotated left by 3: ";
    for (int x : arr) std::cout << x << " ";
    std::cout << "\n";
    return 0;
}
```

**Output:**
```
Rotated left by 3: 4 5 6 7 1 2 3
```

### Example 4: Two-Pointer Technique

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

// Find pair in sorted array that sums to target — O(n)
std::pair<int, int> twoSumSorted(const std::vector<int>& arr, int target) {
    int i = 0, j = arr.size() - 1;
    while (i < j) {
        int sum = arr[i] + arr[j];
        if (sum == target) return {i, j};
        if (sum < target) ++i;
        else --j;
    }
    return {-1, -1};
}

int main() {
    std::vector<int> arr = {1, 3, 5, 7, 9, 11};
    auto [i, j] = twoSumSorted(arr, 12);
    std::cout << "Indices: " << i << ", " << j
              << " (" << arr[i] << " + " << arr[j] << " = 12)\n";
    return 0;
}
```

**Output:**
```
Indices: 1, 5 (3 + 11 = 12)
```

### Example 5: Matrix Transpose

```cpp
#include <iostream>
#include <vector>

using Matrix = std::vector<std::vector<int>>;

Matrix transpose(const Matrix& mat) {
    int rows = mat.size(), cols = mat[0].size();
    Matrix result(cols, std::vector<int>(rows));
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            result[j][i] = mat[i][j];
        }
    }
    return result;
}

void printMatrix(const Matrix& mat) {
    for (const auto& row : mat) {
        for (int x : row) std::cout << x << " ";
        std::cout << "\n";
    }
}

int main() {
    Matrix mat = {{1, 2, 3}, {4, 5, 6}};
    std::cout << "Original:\n";
    printMatrix(mat);

    Matrix t = transpose(mat);
    std::cout << "Transposed:\n";
    printMatrix(t);

    return 0;
}
```

**Output:**
```
Original:
1 2 3
4 5 6
Transposed:
1 4
2 5
3 6
```

## Summary

- Static arrays offer \( O(1) \) access but fixed size; dynamic arrays grow on demand.
- Inserting or deleting in the middle costs \( O(n) \) due to shifting.
- The two-pointer technique reduces nested loops to \( O(n) \) on sorted sequences.
- 2D arrays follow row-major order; transposition swaps dimensions.

## Exercises

### Review Questions

1. Why is array access \( O(1) \)?
2. What is the amortized cost of `push_back` on a dynamic array? Explain.
3. How does row-major order affect cache performance compared to column-major traversal?

### Application Problems

4. Implement a function to merge two sorted arrays into one sorted array in \( O(n + m) \) time.
5. Write a program to find the majority element (appears more than n/2 times) in \( O(n) \) time and \( O(1) \) space.
6. Implement a matrix multiplication function for two \( m \times n \) and \( n \times p \) matrices.

### Challenge Problem

7. The **Maximum Subarray** problem: given an integer array, find the contiguous subarray with the largest sum. Implement Kadane's algorithm in \( O(n) \) time.
