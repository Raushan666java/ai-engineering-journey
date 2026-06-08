# 🔢 Arrays Theory - Complete Guide

## 📋 Table of Contents
- [Introduction to Arrays](#introduction-to-arrays)
- [Array Operations](#array-operations)
- [Common Patterns & Techniques](#common-patterns--techniques)
- [Time & Space Complexity](#time--space-complexity)
- [Advanced Concepts](#advanced-concepts)
- [Practice Problems by Category](#practice-problems-by-category)

---

## Introduction to Arrays

### What is an Array?
An **array** is a collection of elements stored at contiguous memory locations. Arrays are one of the fundamental data structures in computer science.

### Key Characteristics:
- **Fixed Size**: Size is determined at declaration (in static arrays)
- **Homogeneous**: All elements are of the same data type
- **Indexed Access**: Elements accessed using indices (0-based in most languages)
- **Contiguous Memory**: Elements stored in consecutive memory locations

### Array Declaration:
```cpp
// Static array
int arr[5] = {1, 2, 3, 4, 5};

// Dynamic array (vector in C++)
vector<int> arr = {1, 2, 3, 4, 5};
vector<int> arr(n); // Size n, initialized to 0
```

### Memory Layout:
```
Array: [10, 20, 30, 40, 50]
Index:  0   1   2   3   4
Memory: |10|20|30|40|50|
Address: 100 104 108 112 116 (assuming 4 bytes per int)
```

---

## Array Operations

### 1. **Traversal**
**Operation**: Visit all elements in the array
```cpp
// Forward traversal
for (int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}

// Reverse traversal
for (int i = n - 1; i >= 0; i--) {
    cout << arr[i] << " ";
}

// Range-based loop (C++)
for (int element : arr) {
    cout << element << " ";
}
```
**Time**: O(n), **Space**: O(1)

---

### 2. **Insertion**
**Operation**: Add elements to the array

#### At End:
```cpp
void insertAtEnd(vector<int>& arr, int value) {
    arr.push_back(value);
}
```
**Time**: O(1) amortized, **Space**: O(1)

#### At Beginning:
```cpp
void insertAtBeginning(vector<int>& arr, int value) {
    arr.insert(arr.begin(), value);
}
```
**Time**: O(n), **Space**: O(1)

#### At Specific Position:
```cpp
void insertAtPosition(vector<int>& arr, int pos, int value) {
    arr.insert(arr.begin() + pos, value);
}
```
**Time**: O(n), **Space**: O(1)

---

### 3. **Deletion**
**Operation**: Remove elements from the array

#### From End:
```cpp
void deleteFromEnd(vector<int>& arr) {
    if (!arr.empty()) {
        arr.pop_back();
    }
}
```
**Time**: O(1), **Space**: O(1)

#### From Beginning:
```cpp
void deleteFromBeginning(vector<int>& arr) {
    if (!arr.empty()) {
        arr.erase(arr.begin());
    }
}
```
**Time**: O(n), **Space**: O(1)

#### From Specific Position:
```cpp
void deleteFromPosition(vector<int>& arr, int pos) {
    if (pos >= 0 && pos < arr.size()) {
        arr.erase(arr.begin() + pos);
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 4. **Searching**
**Operation**: Find elements in the array

#### Linear Search:
```cpp
int linearSearch(vector<int>& arr, int target) {
    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] == target) {
            return i;
        }
    }
    return -1; // Not found
}
```
**Time**: O(n), **Space**: O(1)

#### Binary Search (for sorted arrays):
```cpp
int binarySearch(vector<int>& arr, int target) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        else if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    
    return -1; // Not found
}
```
**Time**: O(log n), **Space**: O(1)

---

### 5. **Sorting**
**Operation**: Arrange elements in order

#### Built-in Sort:
```cpp
sort(arr.begin(), arr.end()); // Ascending
sort(arr.rbegin(), arr.rend()); // Descending

// Custom comparator
sort(arr.begin(), arr.end(), greater<int>()); // Descending
```
**Time**: O(n log n), **Space**: O(log n)

---

## Common Patterns & Techniques

### 1. **Two Pointers Technique**
Used for problems involving pairs, subarrays, or when you need to process array from both ends.

#### Example: Two Sum in Sorted Array
```cpp
vector<int> twoSum(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        if (sum == target) {
            return {left, right};
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return {}; // Not found
}
```

#### Applications:
- Remove duplicates from sorted array
- Container with most water
- 3Sum problem
- Palindrome checking

---

### 2. **Sliding Window Technique**
Used for subarray problems where you need to find optimal subarray of fixed or variable size.

#### Fixed Size Window:
```cpp
int maxSumSubarray(vector<int>& arr, int k) {
    int n = arr.size();
    if (n < k) return -1;
    
    int windowSum = 0;
    for (int i = 0; i < k; i++) {
        windowSum += arr[i];
    }
    
    int maxSum = windowSum;
    for (int i = k; i < n; i++) {
        windowSum = windowSum - arr[i - k] + arr[i];
        maxSum = max(maxSum, windowSum);
    }
    
    return maxSum;
}
```

#### Variable Size Window:
```cpp
int longestSubarrayWithSumK(vector<int>& arr, int k) {
    int left = 0, sum = 0, maxLength = 0;
    
    for (int right = 0; right < arr.size(); right++) {
        sum += arr[right];
        
        while (sum > k) {
            sum -= arr[left];
            left++;
        }
        
        if (sum == k) {
            maxLength = max(maxLength, right - left + 1);
        }
    }
    
    return maxLength;
}
```

#### Applications:
- Maximum sum subarray of size k
- Longest substring without repeating characters
- Minimum window substring
- Subarray with given sum

---

### 3. **Prefix Sum Technique**
Used for range sum queries and subarray sum problems.

#### Basic Prefix Sum:
```cpp
vector<int> computePrefixSum(vector<int>& arr) {
    int n = arr.size();
    vector<int> prefix(n);
    
    prefix[0] = arr[0];
    for (int i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + arr[i];
    }
    
    return prefix;
}

int rangeSum(vector<int>& prefix, int left, int right) {
    if (left == 0) return prefix[right];
    return prefix[right] - prefix[left - 1];
}
```

#### Applications:
- Range sum queries
- Subarray sum equals k
- Maximum subarray sum
- 2D matrix range sum

---

### 4. **Hash Map/Set Technique**
Used for problems requiring fast lookups, counting, or finding complements.

#### Example: Two Sum
```cpp
vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map;
    
    for (int i = 0; i < nums.size(); i++) {
        int complement = target - nums[i];
        
        if (map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        
        map[nums[i]] = i;
    }
    
    return {};
}
```

#### Applications:
- Two sum, three sum, four sum
- Finding duplicates
- Longest consecutive sequence
- Subarray with zero sum

---

### 5. **Kadane's Algorithm**
Used for finding maximum sum subarray.

```cpp
int maxSubarraySum(vector<int>& nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        maxEndingHere = max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

#### Variations:
- Maximum product subarray
- Maximum sum circular subarray
- Maximum sum with no two adjacent elements

---

### 6. **Dutch National Flag Algorithm**
Used for partitioning arrays into three parts.

```cpp
void sortColors(vector<int>& nums) {
    int low = 0, mid = 0, high = nums.size() - 1;
    
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums[low], nums[mid]);
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums[mid], nums[high]);
            high--;
        }
    }
}
```

#### Applications:
- Sort colors (0s, 1s, 2s)
- Partition array around pivot
- Move zeros to end

---

### 7. **Floyd's Cycle Detection**
Used for finding duplicates in arrays where elements represent indices.

```cpp
int findDuplicate(vector<int>& nums) {
    int slow = nums[0];
    int fast = nums[0];
    
    // Phase 1: Find intersection point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);
    
    // Phase 2: Find entrance to cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }
    
    return slow;
}
```

---

## Time & Space Complexity

### Common Operations:
| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Access | O(1) | O(1) |
| Search (Unsorted) | O(n) | O(1) |
| Search (Sorted) | O(log n) | O(1) |
| Insertion (End) | O(1) amortized | O(1) |
| Insertion (Beginning/Middle) | O(n) | O(1) |
| Deletion (End) | O(1) | O(1) |
| Deletion (Beginning/Middle) | O(n) | O(1) |
| Sorting | O(n log n) | O(log n) |

### Algorithm Complexities:
| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Two Pointers | O(n) | O(1) |
| Sliding Window | O(n) | O(1) |
| Prefix Sum | O(n) | O(n) |
| Hash Map Lookup | O(n) | O(n) |
| Kadane's Algorithm | O(n) | O(1) |
| Dutch Flag | O(n) | O(1) |
| Floyd's Cycle | O(n) | O(1) |

---

## Advanced Concepts

### 1. **Dynamic Arrays**
Arrays that can grow or shrink during runtime.

#### Implementation:
```cpp
class DynamicArray {
private:
    int* data;
    int size;
    int capacity;
    
public:
    DynamicArray() : size(0), capacity(1) {
        data = new int[capacity];
    }
    
    void push_back(int value) {
        if (size == capacity) {
            resize();
        }
        data[size++] = value;
    }
    
private:
    void resize() {
        capacity *= 2;
        int* newData = new int[capacity];
        for (int i = 0; i < size; i++) {
            newData[i] = data[i];
        }
        delete[] data;
        data = newData;
    }
};
```

### 2. **2D Arrays**
Arrays of arrays, useful for matrix operations.

```cpp
// Static 2D array
int matrix[3][4];

// Dynamic 2D array (vector of vectors)
vector<vector<int>> matrix(rows, vector<int>(cols, 0));

// Access elements
matrix[i][j] = value;
```

#### Common 2D Array Operations:
- Matrix traversal (row-wise, column-wise, diagonal)
- Matrix rotation
- Spiral traversal
- Search in sorted matrix

### 3. **Bit Manipulation with Arrays**
Using bitwise operations for efficient array operations.

```cpp
// Check if number appears odd number of times
int findOddOccurrence(vector<int>& arr) {
    int result = 0;
    for (int num : arr) {
        result ^= num;
    }
    return result;
}

// Count set bits in all numbers
int countTotalSetBits(vector<int>& arr) {
    int count = 0;
    for (int num : arr) {
        count += __builtin_popcount(num);
    }
    return count;
}
```

### 4. **Array Rotation**
Rotating array elements left or right.

```cpp
// Left rotation by k positions
void leftRotate(vector<int>& arr, int k) {
    int n = arr.size();
    k = k % n;
    
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
    reverse(arr.begin(), arr.end());
}

// Right rotation by k positions
void rightRotate(vector<int>& arr, int k) {
    int n = arr.size();
    k = k % n;
    
    reverse(arr.begin(), arr.end());
    reverse(arr.begin(), arr.begin() + k);
    reverse(arr.begin() + k, arr.end());
}
```

---

## Practice Problems by Category

### **Basic Operations**
1. Find maximum and minimum element
2. Reverse an array
3. Sum of array elements
4. Second largest element
5. Count occurrences of element

### **Searching & Sorting**
1. Linear search and binary search
2. First and last occurrence in sorted array
3. Search in rotated sorted array
4. Find peak element
5. Search in 2D matrix

### **Two Pointers**
1. Two sum in sorted array
2. Remove duplicates from sorted array
3. Container with most water
4. Three sum problem
5. Move zeros to end

### **Sliding Window**
1. Maximum sum subarray of size k
2. Longest substring without repeating characters
3. Minimum window substring
4. Subarray with given sum
5. Maximum of all subarrays of size k

### **Prefix Sum**
1. Range sum query
2. Subarray sum equals k
3. Maximum subarray sum (Kadane's)
4. Equilibrium index
5. Count of subarrays with sum zero

### **Advanced Problems**
1. Next permutation
2. Majority element (Boyer-Moore)
3. Merge intervals
4. Product of array except self
5. Spiral matrix traversal

### **Mathematical**
1. Pascal's triangle
2. Rotate matrix 90 degrees
3. Set matrix zeros
4. Diagonal traversal
5. Matrix multiplication

---

## Key Takeaways

1. **Choose the Right Technique**: Different problems require different approaches
2. **Time vs Space Tradeoff**: Sometimes using extra space can reduce time complexity
3. **Edge Cases**: Always consider empty arrays, single elements, and boundary conditions
4. **In-place Operations**: Many array problems can be solved without extra space
5. **Pattern Recognition**: Most array problems follow common patterns

### Common Mistakes to Avoid:
- Array index out of bounds
- Integer overflow in sum calculations
- Not handling empty arrays
- Forgetting to check array size before operations
- Inefficient nested loops when single pass is sufficient

---

This comprehensive guide covers all fundamental and advanced array concepts needed for competitive programming and technical interviews. Practice problems in each category to master array manipulation techniques! 🚀
