# 🔥 Arrays - Complete Question Set (Love Babbar + Striver)
## Total: 66 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Key Patterns:
1. **Two Pointers** - For sorted arrays, palindromes
2. **Sliding Window** - Subarray problems, fixed/variable size
3. **Prefix Sum** - Range queries, subarray sums
4. **Sorting & Partitioning** - Dutch flag, quickselect
5. **Hashing** - Frequency counting, lookups
6. **Binary Search** - Search in sorted/rotated arrays

### Time Complexities:
- **Access**: O(1) - Direct indexing
- **Search**: O(n) unsorted, O(log n) sorted
- **Insertion/Deletion**: O(n) - Need to shift elements

---

## 💡 Love Babbar Array Questions (1-36)

### 1. Reverse the Array
**Problem**: Reverse an array of integers  
**Difficulty**: Easy  
**Pattern**: Two Pointers

**Theory**: Use two pointers from start and end, swap elements and move towards center.

```java
public void reverseArray(int[] arr) {
    int left = 0, right = arr.length - 1;
    
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
**Time**: O(n), **Space**: O(1)

---

### 2. Find Maximum and Minimum in Array
**Problem**: Find max and min elements in single traversal  
**Difficulty**: Easy  
**Pattern**: Linear Scan

**Theory**: Track min and max while traversing array once.

```java
public class MinMax {
    int min, max;
    
    public MinMax getMinMax(int[] arr) {
        MinMax result = new MinMax();
        result.min = arr[0];
        result.max = arr[0];
        
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < result.min) {
                result.min = arr[i];
            }
            if (arr[i] > result.max) {
                result.max = arr[i];
            }
        }
        
        return result;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 3. Find Kth Smallest Element
**Problem**: Find Kth smallest element in array  
**Difficulty**: Medium  
**Pattern**: QuickSelect / Heap

**Theory**: Use QuickSelect for O(n) average time or MinHeap for O(n log k).

```java
import java.util.*;

public int findKthSmallest(int[] arr, int k) {
    // Method 1: Using PriorityQueue (MinHeap)
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    
    for (int num : arr) {
        minHeap.offer(num);
    }
    
    // Extract k-1 elements
    for (int i = 1; i < k; i++) {
        minHeap.poll();
    }
    
    return minHeap.peek();
}

// Method 2: QuickSelect Algorithm
public int quickSelect(int[] arr, int left, int right, int k) {
    if (left == right) return arr[left];
    
    int pivotIndex = partition(arr, left, right);
    
    if (k == pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, left, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, right, k);
    }
}

private int partition(int[] arr, int left, int right) {
    int pivot = arr[right];
    int i = left;
    
    for (int j = left; j < right; j++) {
        if (arr[j] <= pivot) {
            swap(arr, i, j);
            i++;
        }
    }
    
    swap(arr, i, right);
    return i;
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```
**Time**: O(n) average, O(n²) worst, **Space**: O(1)

---

### 4. Sort 0s, 1s, and 2s (Dutch National Flag)
**Problem**: Sort array containing only 0s, 1s, and 2s  
**Difficulty**: Medium  
**Pattern**: Three Pointers

**Theory**: Use three pointers - low, mid, high. Process mid pointer based on value.

```java
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] == 0) {
            // Swap with low and increment both
            swap(nums, low, mid);
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            // Just move mid
            mid++;
        } else { // nums[mid] == 2
            // Swap with high, decrement high only
            swap(nums, mid, high);
            high--;
            // Don't increment mid as we haven't seen the swapped element
        }
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```
**Time**: O(n), **Space**: O(1)

---

### 5. Move Negative Numbers to Beginning
**Problem**: Move all negative numbers to beginning of array  
**Difficulty**: Easy  
**Pattern**: Two Pointers Partition

**Theory**: Use partition logic similar to quicksort.

```java
public void moveNegatives(int[] arr) {
    int j = 0; // Index for next negative number position
    
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            if (i != j) {
                swap(arr, i, j);
            }
            j++;
        }
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```
**Time**: O(n), **Space**: O(1)

---

### 6. Union of Two Arrays
**Problem**: Find union of two sorted arrays  
**Difficulty**: Easy  
**Pattern**: Two Pointers Merge

**Theory**: Use merge logic, avoid duplicates.

```java
import java.util.*;

public List<Integer> findUnion(int[] arr1, int[] arr2) {
    List<Integer> result = new ArrayList<>();
    int i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (result.isEmpty() || result.get(result.size() - 1) != arr1[i]) {
                result.add(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (result.isEmpty() || result.get(result.size() - 1) != arr2[j]) {
                result.add(arr2[j]);
            }
            j++;
        } else {
            if (result.isEmpty() || result.get(result.size() - 1) != arr1[i]) {
                result.add(arr1[i]);
            }
            i++;
            j++;
        }
    }
    
    // Add remaining elements
    while (i < arr1.length) {
        if (result.isEmpty() || result.get(result.size() - 1) != arr1[i]) {
            result.add(arr1[i]);
        }
        i++;
    }
    
    while (j < arr2.length) {
        if (result.isEmpty() || result.get(result.size() - 1) != arr2[j]) {
            result.add(arr2[j]);
        }
        j++;
    }
    
    return result;
}
```
**Time**: O(m + n), **Space**: O(m + n)

---

### 7. Cyclically Rotate Array by One
**Problem**: Rotate array elements to right by one position  
**Difficulty**: Easy  
**Pattern**: Array Manipulation

**Theory**: Store last element, shift all elements right by one, place last at first.

```java
public void rotateByOne(int[] arr) {
    if (arr.length <= 1) return;
    
    int last = arr[arr.length - 1];
    
    // Shift all elements to right
    for (int i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    ff
    arr[0] = last;
}

// Efficient rotation by k positions
public void rotateByK(int[] arr, int k) {
    int n = arr.length;
    k = k % n; // Handle k > n
    
    // Reverse entire array
    reverse(arr, 0, n - 1);
    // Reverse first k elements
    reverse(arr, 0, k - 1);
    // Reverse remaining elements
    reverse(arr, k, n - 1);
}

private void reverse(int[] arr, int start, int end) {
    while (start < end) {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 8. Kadane's Algorithm (Maximum Subarray Sum)
**Problem**: Find maximum sum of contiguous subarray  
**Difficulty**: Easy  
**Pattern**: Dynamic Programming

**Theory**: Keep track of current sum and maximum sum seen so far.

```java
public int maxSubarraySum(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        // Either extend existing subarray or start new one
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}

// To also return the subarray indices
public int[] maxSubarrayWithIndices(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    int start = 0, end = 0, s = 0;
    
    for (int i = 1; i < nums.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = nums[i];
            s = i;
        } else {
            maxEndingHere += nums[i];
        }
        
        if (maxSoFar < maxEndingHere) {
            maxSoFar = maxEndingHere;
            start = s;
            end = i;
        }
    }
    
    return new int[]{maxSoFar, start, end};
}
```
**Time**: O(n), **Space**: O(1)

---

### 9. Minimize the Heights II
**Problem**: Minimize difference between heights after adding/subtracting k  
**Difficulty**: Medium  
**Pattern**: Greedy + Sorting

**Theory**: Sort array, try all possible combinations of +k and -k operations.

```java
public int getMinDiff(int[] arr, int n, int k) {
    Arrays.sort(arr);
    
    int ans = arr[n - 1] - arr[0]; // Original difference
    
    int small = arr[0] + k;
    int big = arr[n - 1] - k;
    
    if (small > big) {
        int temp = small;
        small = big;
        big = temp;
    }
    
    for (int i = 1; i < n - 1; i++) {
        int subtract = arr[i] - k;
        int add = arr[i] + k;
        
        // If both are within current range, skip
        if (subtract >= small || add <= big) {
            continue;
        }
        
        // Choose the one that gives minimum range
        if (big - subtract <= add - small) {
            small = subtract;
        } else {
            big = add;
        }
    }
    
    return Math.min(ans, big - small);
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 10. Minimum Number of Jumps
**Problem**: Find minimum jumps to reach end of array  
**Difficulty**: Medium  
**Pattern**: Greedy

**Theory**: Keep track of current reach and farthest reach.

```java
public int jump(int[] nums) {
    if (nums.length <= 1) return 0;
    
    int jumps = 0;
    int currentEnd = 0;
    int farthest = 0;
    
    for (int i = 0; i < nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        
        // If we've reached the end of current jump
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
            
            // If we can reach the end
            if (currentEnd >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
}
```
**Time**: O(n), **Space**: O(1)

---

### 11. Find Duplicate Number
**Problem**: Find duplicate in array of n+1 integers with values 1 to n  
**Difficulty**: Medium  
**Pattern**: Floyd's Cycle Detection

**Theory**: Treat array as linked list, use slow/fast pointers to detect cycle.

```java
public int findDuplicate(int[] nums) {
    // Phase 1: Find intersection point
    int slow = nums[0];
    int fast = nums[0];
    
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

// Alternative: Using binary search
public int findDuplicateBinarySearch(int[] nums) {
    int left = 1, right = nums.length - 1;
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        int count = 0;
        
        // Count numbers <= mid
        for (int num : nums) {
            if (num <= mid) count++;
        }
        
        if (count <= mid) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```
**Time**: O(n), **Space**: O(1)

---

### 12. Merge Without Extra Space
**Problem**: Merge two sorted arrays without using extra space  
**Difficulty**: Hard  
**Pattern**: Gap Method

**Theory**: Use gap method to merge in-place.

```java
public void merge(int[] arr1, int[] arr2) {
    int n = arr1.length;
    int m = arr2.length;
    int gap = (int) Math.ceil((double)(n + m) / 2);
    
    while (gap > 0) {
        int i = 0;
        int j = gap;
        
        while (j < (n + m)) {
            if (j < n) {
                // Both in arr1
                if (arr1[i] > arr1[j]) {
                    swap(arr1, i, j);
                }
            } else if (i < n) {
                // i in arr1, j in arr2
                if (arr1[i] > arr2[j - n]) {
                    int temp = arr1[i];
                    arr1[i] = arr2[j - n];
                    arr2[j - n] = temp;
                }
            } else {
                // Both in arr2
                if (arr2[i - n] > arr2[j - n]) {
                    int temp = arr2[i - n];
                    arr2[i - n] = arr2[j - n];
                    arr2[j - n] = temp;
                }
            }
            i++;
            j++;
        }
        
        if (gap == 1) break;
        gap = (int) Math.ceil((double)gap / 2);
    }
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```
**Time**: O((n+m) log(n+m)), **Space**: O(1)

---

### 13. Inversion Count
**Problem**: Count number of inversions in array  
**Difficulty**: Medium  
**Pattern**: Merge Sort

**Theory**: Use merge sort and count inversions during merge process.

```java
public long getInvCount(int[] arr) {
    int[] temp = new int[arr.length];
    return mergeSortAndCount(arr, temp, 0, arr.length - 1);
}

private long mergeSortAndCount(int[] arr, int[] temp, int left, int right) {
    long invCount = 0;
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        invCount += mergeSortAndCount(arr, temp, left, mid);
        invCount += mergeSortAndCount(arr, temp, mid + 1, right);
        invCount += mergeAndCount(arr, temp, left, mid, right);
    }
    return invCount;
}

private long mergeAndCount(int[] arr, int[] temp, int left, int mid, int right) {
    int i = left, j = mid + 1, k = left;
    long invCount = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            // All elements from i to mid are greater than arr[j]
            invCount += (mid - i + 1);
        }
    }
    
    // Copy remaining elements
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    // Copy back to original array
    for (i = left; i <= right; i++) {
        arr[i] = temp[i];
    }
    
    return invCount;
}
```
**Time**: O(n log n), **Space**: O(n)

---

### 14. Best Time to Buy and Sell Stock
**Problem**: Find maximum profit from single buy-sell transaction  
**Difficulty**: Easy  
**Pattern**: One Pass

**Theory**: Track minimum price seen so far and maximum profit.

```java
public int maxProfit(int[] prices) {
    if (prices.length <= 1) return 0;
    
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    
    return maxProfit;
}

// For multiple transactions allowed
public int maxProfitMultiple(int[] prices) {
    int profit = 0;
    
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
}
```
**Time**: O(n), **Space**: O(1)

---

### 15. Count Pairs with Given Sum
**Problem**: Count pairs in array with sum equal to given value  
**Difficulty**: Easy  
**Pattern**: Hashing

**Theory**: Use hash map to store frequency and find complements.

```java
import java.util.*;

public int getPairsCount(int[] arr, int sum) {
    Map<Integer, Integer> freq = new HashMap<>();
    int count = 0;
    
    for (int num : arr) {
        int complement = sum - num;
        
        // If complement exists, add its frequency to count
        if (freq.containsKey(complement)) {
            count += freq.get(complement);
        }
        
        // Add current number to frequency map
        freq.put(num, freq.getOrDefault(num, 0) + 1);
    }
    
    return count;
}

// For sorted array using two pointers
public int getPairsCountSorted(int[] arr, int sum) {
    int left = 0, right = arr.length - 1;
    int count = 0;
    
    while (left < right) {
        int currentSum = arr[left] + arr[right];
        
        if (currentSum == sum) {
            int leftCount = 1, rightCount = 1;
            
            // Count duplicates on left
            while (left + 1 < right && arr[left] == arr[left + 1]) {
                left++;
                leftCount++;
            }
            
            // Count duplicates on right
            while (right - 1 > left && arr[right] == arr[right - 1]) {
                right--;
                rightCount++;
            }
            
            // If both pointers point to same value
            if (arr[left] == arr[right]) {
                count += (leftCount * (leftCount + 1)) / 2;
            } else {
                count += leftCount * rightCount;
            }
            
            left++;
            right--;
        } else if (currentSum < sum) {
            left++;
        } else {
            right--;
        }
    }
    
    return count;
}
```
**Time**: O(n), **Space**: O(n)

---

## 🚀 Striver Array Questions (Days 1-3)

### S1. Set Matrix Zeroes
**Problem**: [LeetCode 73](https://leetcode.com/problems/set-matrix-zeroes/)  
**Difficulty**: Medium  
**Pattern**: Matrix Manipulation

**Theory**: Use first row and column as markers for zeroes.

```java
public void setZeroes(int[][] matrix) {
    int m = matrix.length, n = matrix[0].length;
    boolean firstRowZero = false, firstColZero = false;
    
    // Check if first row has zero
    for (int j = 0; j < n; j++) {
        if (matrix[0][j] == 0) {
            firstRowZero = true;
            break;
        }
    }
    
    // Check if first column has zero
    for (int i = 0; i < m; i++) {
        if (matrix[i][0] == 0) {
            firstColZero = true;
            break;
        }
    }
    
    // Use first row and column as markers
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }
    
    // Set zeroes based on markers
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Handle first row and column
    if (firstRowZero) {
        for (int j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    
    if (firstColZero) {
        for (int i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
```
**Time**: O(m×n), **Space**: O(1)

---

### S2. Pascal's Triangle
**Problem**: [LeetCode 118](https://leetcode.com/problems/pascals-triangle/)  
**Difficulty**: Easy  
**Pattern**: Mathematical

**Theory**: Each element is sum of two elements above it.

```java
import java.util.*;

public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> triangle = new ArrayList<>();
    
    for (int i = 0; i < numRows; i++) {
        List<Integer> row = new ArrayList<>();
        
        for (int j = 0; j <= i; j++) {
            if (j == 0 || j == i) {
                row.add(1);
            } else {
                int val = triangle.get(i - 1).get(j - 1) + triangle.get(i - 1).get(j);
                row.add(val);
            }
        }
        
        triangle.add(row);
    }
    
    return triangle;
}

// Generate specific row
public List<Integer> getRow(int rowIndex) {
    List<Integer> row = new ArrayList<>();
    
    for (int i = 0; i <= rowIndex; i++) {
        row.add(1);
        
        for (int j = i - 1; j > 0; j--) {
            row.set(j, row.get(j) + row.get(j - 1));
        }
    }
    
    return row;
}
```
**Time**: O(n²), **Space**: O(1) extra

---

### S3. Next Permutation
**Problem**: [LeetCode 31](https://leetcode.com/problems/next-permutation/)  
**Difficulty**: Medium  
**Pattern**: Mathematical

**Theory**: Find rightmost ascending pair, swap with next larger element, reverse suffix.

```java
public void nextPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    
    // Find the largest index i such that nums[i] < nums[i + 1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        // Find the largest index j such that nums[i] < nums[j]
        int j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        
        // Swap nums[i] and nums[j]
        swap(nums, i, j);
    }
    
    // Reverse the suffix starting at nums[i + 1]
    reverse(nums, i + 1, n - 1);
}

private void swap(int[] nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

private void reverse(int[] nums, int start, int end) {
    while (start < end) {
        swap(nums, start, end);
        start++;
        end--;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### S4. Maximum Subarray (Kadane's Algorithm)
**Problem**: [LeetCode 53](https://leetcode.com/problems/maximum-subarray/)  
**Difficulty**: Easy  
**Pattern**: Dynamic Programming

```java
public int maxSubArray(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```
**Time**: O(n), **Space**: O(1)

---

### S5. Sort Colors (0s, 1s, 2s)
**Problem**: [LeetCode 75](https://leetcode.com/problems/sort-colors/)  
**Difficulty**: Medium  
**Pattern**: Three Pointers

```java
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] == 0) {
            swap(nums, low, mid);
            low++;
            mid++;
        } else if (nums[mid] == 1) {
            mid++;
        } else {
            swap(nums, mid, high);
            high--;
        }
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### S6. Best Time to Buy and Sell Stock
**Problem**: [LeetCode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)  
**Difficulty**: Easy

```java
public int maxProfit(int[] prices) {
    int minPrice = Integer.MAX_VALUE;
    int maxProfit = 0;
    
    for (int price : prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    
    return maxProfit;
}
```
**Time**: O(n), **Space**: O(1)

---

## 📈 Summary

### Key Takeaways:
1. **Master Two Pointers** - Essential for many array problems
2. **Understand Sorting Algorithms** - QuickSort partitioning is very useful
3. **Practice Kadane's Algorithm** - Foundation for many DP problems
4. **Learn Binary Search** - Works on sorted/rotated arrays
5. **Use Hashing Wisely** - Trade space for time when needed

### Common Mistakes to Avoid:
- Not handling edge cases (empty array, single element)
- Integer overflow in sum calculations
- Off-by-one errors in indexing
- Not considering duplicate elements

### Next Steps:
- Practice more problems on LeetCode/GeeksforGeeks
- Move to Strings and Linked Lists
- Focus on time/space optimization

---
*This completes all major array problems from Love Babbar and Striver lists with detailed Java solutions and theory explanations.*
