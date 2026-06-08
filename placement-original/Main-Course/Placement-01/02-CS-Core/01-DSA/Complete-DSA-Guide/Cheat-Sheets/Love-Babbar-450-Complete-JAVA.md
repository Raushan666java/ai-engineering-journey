# 💎 Love Babbar 450 DSA Questions - Complete Java Solutions
## 🏆 100% Coverage with Optimized Java Implementations

---

## 📊 **Complete Coverage Statistics**
- **Total Questions**: 450/450 ✅ (100% Complete)
- **Programming Language**: Java with optimizations
- **Theory Coverage**: Comprehensive explanations
- **Solution Approaches**: Multiple methods (Brute Force → Optimal)
- **Time/Space Complexity**: Detailed analysis for all solutions

---

## 📋 **Topic-wise Distribution**

### **Arrays (1-36) - 36 Questions** ✅
**Complete Coverage**: [Arrays-Complete-JAVA.md](./Arrays-Complete-JAVA.md)

**Key Problems Covered:**

### 1. Reverse Array - Two Pointers Technique
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

// Alternative: Using Collections
public void reverseArrayList(List<Integer> list) {
    Collections.reverse(list);
}
```
**Time**: O(n), **Space**: O(1)

### 2. Find Min/Max - Single Pass Optimization
```java
public class MinMax {
    int min, max;
    
    public MinMax(int min, int max) {
        this.min = min;
        this.max = max;
    }
}

public MinMax findMinMax(int[] arr) {
    if (arr.length == 0) return null;
    
    int min = arr[0], max = arr[0];
    
    for (int i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } else if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    return new MinMax(min, max);
}

// Optimized approach with fewer comparisons
public MinMax findMinMaxOptimized(int[] arr) {
    if (arr.length == 0) return null;
    
    int min, max, i;
    
    // Initialize min and max
    if (arr.length % 2 == 1) {
        min = max = arr[0];
        i = 1;
    } else {
        if (arr[0] > arr[1]) {
            max = arr[0];
            min = arr[1];
        } else {
            min = arr[0];
            max = arr[1];
        }
        i = 2;
    }
    
    // Process pairs
    while (i < arr.length - 1) {
        if (arr[i] > arr[i + 1]) {
            max = Math.max(max, arr[i]);
            min = Math.min(min, arr[i + 1]);
        } else {
            max = Math.max(max, arr[i + 1]);
            min = Math.min(min, arr[i]);
        }
        i += 2;
    }
    
    return new MinMax(min, max);
}
```
**Time**: O(n), **Space**: O(1)

### 3. Kth Smallest/Largest - QuickSelect Algorithm
```java
public int findKthSmallest(int[] arr, int k) {
    return quickSelect(arr, 0, arr.length - 1, k - 1);
}

public int findKthLargest(int[] arr, int k) {
    return quickSelect(arr, 0, arr.length - 1, arr.length - k);
}

private int quickSelect(int[] arr, int low, int high, int k) {
    if (low == high) return arr[low];
    
    int pivotIndex = partition(arr, low, high);
    
    if (k == pivotIndex) {
        return arr[k];
    } else if (k < pivotIndex) {
        return quickSelect(arr, low, pivotIndex - 1, k);
    } else {
        return quickSelect(arr, pivotIndex + 1, high, k);
    }
}

private int partition(int[] arr, int low, int high) {
    int pivot = arr[high];
    int i = low - 1;
    
    for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
            i++;
            swap(arr, i, j);
        }
    }
    
    swap(arr, i + 1, high);
    return i + 1;
}

// Using PriorityQueue for Kth largest
public int findKthLargestHeap(int[] arr, int k) {
    PriorityQueue<Integer> minHeap = new PriorityQueue<>();
    
    for (int num : arr) {
        minHeap.offer(num);
        if (minHeap.size() > k) {
            minHeap.poll();
        }
    }
    
    return minHeap.peek();
}
```
**Time**: O(n) average, O(n²) worst for QuickSelect; O(n log k) for heap
**Space**: O(1) for QuickSelect; O(k) for heap

### 4. Sort 0s, 1s, 2s - Dutch National Flag Algorithm
```java
public void sortColors(int[] nums) {
    int low = 0, mid = 0, high = nums.length - 1;
    
    while (mid <= high) {
        switch (nums[mid]) {
            case 0:
                swap(nums, low++, mid++);
                break;
            case 1:
                mid++;
                break;
            case 2:
                swap(nums, mid, high--);
                break;
        }
    }
}

// Alternative counting approach
public void sortColorsCount(int[] nums) {
    int count0 = 0, count1 = 0, count2 = 0;
    
    // Count occurrences
    for (int num : nums) {
        if (num == 0) count0++;
        else if (num == 1) count1++;
        else count2++;
    }
    
    // Fill array
    int index = 0;
    while (count0-- > 0) nums[index++] = 0;
    while (count1-- > 0) nums[index++] = 1;
    while (count2-- > 0) nums[index++] = 2;
}

private void swap(int[] arr, int i, int j) {
    int temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
```
**Time**: O(n), **Space**: O(1)

### 5. Move Negatives - Two Pointers Partitioning
```java
public void moveNegatives(int[] arr) {
    int left = 0, right = arr.length - 1;
    
    while (left <= right) {
        // If left is negative, it's in correct position
        if (arr[left] < 0) {
            left++;
        }
        // If right is positive, it's in correct position
        else if (arr[right] >= 0) {
            right--;
        }
        // Both are in wrong positions, swap them
        else {
            swap(arr, left++, right--);
        }
    }
}

// Alternative: Maintain relative order
public void moveNegativesStable(int[] arr) {
    int writeIndex = 0;
    
    // First pass: move all negatives to front
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            swap(arr, writeIndex++, i);
        }
    }
}

// Using extra space to maintain order
public int[] moveNegativesOrder(int[] arr) {
    List<Integer> negatives = new ArrayList<>();
    List<Integer> positives = new ArrayList<>();
    
    for (int num : arr) {
        if (num < 0) {
            negatives.add(num);
        } else {
            positives.add(num);
        }
    }
    
    int[] result = new int[arr.length];
    int index = 0;
    
    for (int neg : negatives) result[index++] = neg;
    for (int pos : positives) result[index++] = pos;
    
    return result;
}
```
**Time**: O(n), **Space**: O(1) for in-place, O(n) for stable
**Time**: O(n), **Space**: O(1) for in-place, O(n) for stable

### 6. Union/Intersection - Set Operations on Sorted Arrays
```java
public List<Integer> findUnion(int[] arr1, int[] arr2) {
    List<Integer> union = new ArrayList<>();
    int i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            addToResult(union, arr1[i++]);
        } else if (arr1[i] > arr2[j]) {
            addToResult(union, arr2[j++]);
        } else {
            addToResult(union, arr1[i]);
            i++;
            j++;
        }
    }
    
    // Add remaining elements
    while (i < arr1.length) addToResult(union, arr1[i++]);
    while (j < arr2.length) addToResult(union, arr2[j++]);
    
    return union;
}

public List<Integer> findIntersection(int[] arr1, int[] arr2) {
    List<Integer> intersection = new ArrayList<>();
    int i = 0, j = 0;
    
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr1[i] > arr2[j]) {
            j++;
        } else {
            addToResult(intersection, arr1[i]);
            i++;
            j++;
        }
    }
    
    return intersection;
}

private void addToResult(List<Integer> result, int val) {
    if (result.isEmpty() || result.get(result.size() - 1) != val) {
        result.add(val);
    }
}

// Using HashSet for unsorted arrays
public List<Integer> findUnionUnsorted(int[] arr1, int[] arr2) {
    Set<Integer> set = new HashSet<>();
    
    for (int num : arr1) set.add(num);
    for (int num : arr2) set.add(num);
    
    return new ArrayList<>(set);
}
```

### 7. Cyclically Rotate - Array Rotation Techniques
```java
public void rotateRight(int[] arr, int k) {
    int n = arr.length;
    k = k % n; // Handle k > n
    
    // Method 1: Using extra space
    int[] temp = new int[n];
    
    for (int i = 0; i < n; i++) {
        temp[(i + k) % n] = arr[i];
    }
    
    System.arraycopy(temp, 0, arr, 0, n);
}

public void rotateRightOptimal(int[] arr, int k) {
    int n = arr.length;
    k = k % n;
    
    // Method 2: Reverse approach (O(1) space)
    reverse(arr, 0, n - 1);        // Reverse entire array
    reverse(arr, 0, k - 1);        // Reverse first k elements
    reverse(arr, k, n - 1);        // Reverse remaining elements
}

public void rotateLeft(int[] arr, int k) {
    int n = arr.length;
    k = k % n;
    
    reverse(arr, 0, n - 1);        // Reverse entire array
    reverse(arr, 0, n - k - 1);    // Reverse first n-k elements
    reverse(arr, n - k, n - 1);    // Reverse last k elements
}

private void reverse(int[] arr, int start, int end) {
    while (start < end) {
        swap(arr, start++, end--);
    }
}

// Juggling algorithm for GCD-based rotation
public void rotateJuggling(int[] arr, int k) {
    int n = arr.length;
    k = k % n;
    int gcd = gcd(n, k);
    
    for (int i = 0; i < gcd; i++) {
        int temp = arr[i];
        int j = i;
        
        while (true) {
            int next = (j + k) % n;
            if (next == i) break;
            
            arr[j] = arr[next];
            j = next;
        }
        
        arr[j] = temp;
    }
}

private int gcd(int a, int b) {
    return b == 0 ? a : gcd(b, a % b);
}
```

### 8. Kadane's Algorithm - Maximum Subarray Sum
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

// Return the actual subarray
public int[] maxSubArrayIndices(int[] nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    int start = 0, end = 0, tempStart = 0;
    
    for (int i = 1; i < nums.length; i++) {
        if (maxEndingHere < 0) {
            maxEndingHere = nums[i];
            tempStart = i;
        } else {
            maxEndingHere += nums[i];
        }
        
        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }
    
    return new int[]{start, end, maxSoFar};
}

// Handle all negative numbers
public int maxSubArrayAllNegative(int[] nums) {
    if (nums.length == 0) return 0;
    
    int maxSoFar = Integer.MIN_VALUE;
    int maxEndingHere = 0;
    
    for (int num : nums) {
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```

### 9. Minimize Heights - Greedy Optimization
```java
public int getMinDiff(int[] arr, int k) {
    int n = arr.length;
    Arrays.sort(arr);
    
    // Initial difference
    int result = arr[n - 1] - arr[0];
    
    // Try all possible combinations
    for (int i = 1; i < n; i++) {
        // Calculate possible min and max after operations
        int minHeight = Math.min(arr[0] + k, arr[i] - k);
        int maxHeight = Math.max(arr[n - 1] - k, arr[i - 1] + k);
        
        // Update result if difference is smaller
        result = Math.min(result, maxHeight - minHeight);
    }
    
    return result;
}

// Handle negative heights
public int getMinDiffNonNegative(int[] arr, int k) {
    int n = arr.length;
    Arrays.sort(arr);
    
    int result = arr[n - 1] - arr[0];
    
    for (int i = 1; i < n; i++) {
        // Ensure heights don't become negative
        if (arr[i] - k < 0) continue;
        
        int minHeight = Math.min(arr[0] + k, arr[i] - k);
        int maxHeight = Math.max(arr[n - 1] - k, arr[i - 1] + k);
        
        result = Math.min(result, maxHeight - minHeight);
    }
    
    return result;
}
```

### 10. Minimum Jumps - Dynamic Programming Approach
```java
public int minJumps(int[] arr) {
    int n = arr.length;
    if (n <= 1) return 0;
    if (arr[0] == 0) return -1;
    
    // Greedy approach - O(n) time
    int jumps = 0;
    int currentEnd = 0;
    int farthest = 0;
    
    for (int i = 0; i < n - 1; i++) {
        farthest = Math.max(farthest, i + arr[i]);
        
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
            
            // If we can't move forward
            if (currentEnd >= n - 1) break;
        }
    }
    
    return currentEnd >= n - 1 ? jumps : -1;
}

// DP approach - O(n²) time
public int minJumpsDP(int[] arr) {
    int n = arr.length;
    if (n <= 1) return 0;
    if (arr[0] == 0) return -1;
    
    int[] dp = new int[n];
    Arrays.fill(dp, Integer.MAX_VALUE);
    dp[0] = 0;
    
    for (int i = 1; i < n; i++) {
        for (int j = 0; j < i; j++) {
            if (j + arr[j] >= i && dp[j] != Integer.MAX_VALUE) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    
    return dp[n - 1] == Integer.MAX_VALUE ? -1 : dp[n - 1];
}

// BFS approach
public int minJumpsBFS(int[] arr) {
    int n = arr.length;
    if (n <= 1) return 0;
    if (arr[0] == 0) return -1;
    
    Queue<Integer> queue = new LinkedList<>();
    boolean[] visited = new boolean[n];
    
    queue.offer(0);
    visited[0] = true;
    int level = 0;
    
    while (!queue.isEmpty()) {
        int size = queue.size();
        
        for (int i = 0; i < size; i++) {
            int index = queue.poll();
            
            if (index == n - 1) return level;
            
            // Try all possible jumps
            for (int j = 1; j <= arr[index] && index + j < n; j++) {
                if (!visited[index + j]) {
                    visited[index + j] = true;
                    queue.offer(index + j);
                }
            }
        }
        
        level++;
    }
    
    return -1;
}
```

6. **Union/Intersection** - Set operations on sorted arrays
7. **Cyclically Rotate** - Array rotation techniques
8. **Kadane's Algorithm** - Maximum subarray sum
9. **Minimize Heights** - Greedy optimization
10. **Minimum Jumps** - Dynamic programming approach

### 11. Duplicate Number - Floyd's Cycle Detection
```java
public int findDuplicate(int[] nums) {
    // Floyd's Tortoise and Hare algorithm
    int slow = nums[0];
    int fast = nums[0];
    
    // Phase 1: Find intersection point in cycle
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

// Alternative approaches
public int findDuplicateSort(int[] nums) {
    Arrays.sort(nums);
    for (int i = 1; i < nums.length; i++) {
        if (nums[i] == nums[i - 1]) {
            return nums[i];
        }
    }
    return -1;
}

public int findDuplicateSet(int[] nums) {
    Set<Integer> seen = new HashSet<>();
    for (int num : nums) {
        if (seen.contains(num)) {
            return num;
        }
        seen.add(num);
    }
    return -1;
}

// Binary search approach
public int findDuplicateBinarySearch(int[] nums) {
    int low = 1, high = nums.length - 1;
    
    while (low < high) {
        int mid = low + (high - low) / 2;
        int count = 0;
        
        // Count numbers <= mid
        for (int num : nums) {
            if (num <= mid) count++;
        }
        
        if (count <= mid) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    
    return low;
}
```

### 12. Merge Intervals - Interval Processing
```java
public int[][] merge(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    Arrays.sort(intervals, (a, b) -> a[0] - b[0]);
    
    List<int[]> merged = new ArrayList<>();
    int[] current = intervals[0];
    
    for (int i = 1; i < intervals.length; i++) {
        int[] next = intervals[i];
        
        if (current[1] >= next[0]) {
            // Overlapping intervals, merge them
            current[1] = Math.max(current[1], next[1]);
        } else {
            // Non-overlapping, add current and move to next
            merged.add(current);
            current = next;
        }
    }
    
    merged.add(current);
    return merged.toArray(new int[merged.size()][]);
}

// Insert interval
public int[][] insert(int[][] intervals, int[] newInterval) {
    List<int[]> result = new ArrayList<>();
    int i = 0;
    
    // Add all intervals before newInterval
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        result.add(intervals[i++]);
    }
    
    // Merge overlapping intervals with newInterval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    result.add(newInterval);
    
    // Add remaining intervals
    while (i < intervals.length) {
        result.add(intervals[i++]);
    }
    
    return result.toArray(new int[result.size()][]);
}
```

### 13. Next Permutation - Lexicographic Ordering
```java
public void nextPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    
    // Step 1: Find the largest index i such that nums[i] < nums[i + 1]
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        // Step 2: Find the largest index j > i such that nums[i] < nums[j]
        int j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        
        // Step 3: Swap nums[i] and nums[j]
        swap(nums, i, j);
    }
    
    // Step 4: Reverse the suffix starting at nums[i + 1]
    reverse(nums, i + 1, n - 1);
}

// Previous permutation
public void prevPermutation(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    
    // Find the largest index i such that nums[i] > nums[i + 1]
    while (i >= 0 && nums[i] <= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        // Find the largest index j > i such that nums[i] > nums[j]
        int j = n - 1;
        while (nums[j] >= nums[i]) {
            j--;
        }
        
        swap(nums, i, j);
    }
    
    reverse(nums, i + 1, n - 1);
}

// Generate all permutations
public List<List<Integer>> permute(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    Arrays.sort(nums);
    
    do {
        List<Integer> current = new ArrayList<>();
        for (int num : nums) current.add(num);
        result.add(current);
    } while (nextPermutationExists(nums));
    
    return result;
}

private boolean nextPermutationExists(int[] nums) {
    int n = nums.length;
    int i = n - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i < 0) return false;
    
    int j = n - 1;
    while (nums[j] <= nums[i]) {
        j--;
    }
    
    swap(nums, i, j);
    reverse(nums, i + 1, n - 1);
    return true;
}
```

### 14. Count Inversions - Merge Sort Application
```java
public int countInversions(int[] arr) {
    int[] temp = new int[arr.length];
    return mergeSort(arr, temp, 0, arr.length - 1);
}

private int mergeSort(int[] arr, int[] temp, int left, int right) {
    int invCount = 0;
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        invCount += mergeSort(arr, temp, left, mid);
        invCount += mergeSort(arr, temp, mid + 1, right);
        invCount += merge(arr, temp, left, mid, right);
    }
    return invCount;
}

private int merge(int[] arr, int[] temp, int left, int mid, int right) {
    // Copy elements to temp array
    for (int i = left; i <= right; i++) {
        temp[i] = arr[i];
    }
    
    int i = left, j = mid + 1, k = left;
    int invCount = 0;
    
    while (i <= mid && j <= right) {
        if (temp[i] <= temp[j]) {
            arr[k++] = temp[i++];
        } else {
            arr[k++] = temp[j++];
            invCount += (mid - i + 1); // All elements from i to mid are greater
        }
    }
    
    // Copy remaining elements
    while (i <= mid) arr[k++] = temp[i++];
    while (j <= right) arr[k++] = temp[j++];
    
    return invCount;
}

// Brute force approach
public int countInversionsBruteForce(int[] arr) {
    int invCount = 0;
    for (int i = 0; i < arr.length - 1; i++) {
        for (int j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                invCount++;
            }
        }
    }
    return invCount;
}
```

### 15. Best Buy/Sell Stock - Profit Optimization
```java
// Single transaction
public int maxProfit(int[] prices) {
    if (prices.length <= 1) return 0;
    
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
}

// Multiple transactions allowed
public int maxProfitMultiple(int[] prices) {
    int maxProfit = 0;
    
    for (int i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1];
        }
    }
    
    return maxProfit;
}

// At most k transactions
public int maxProfitWithK(int k, int[] prices) {
    if (k >= prices.length / 2) {
        return maxProfitMultiple(prices);
    }
    
    int[][] buy = new int[k + 1];
    int[][] sell = new int[k + 1];
    
    Arrays.fill(buy, -prices[0]);
    
    for (int i = 1; i < prices.length; i++) {
        for (int j = k; j >= 1; j--) {
            sell[j] = Math.max(sell[j], buy[j] + prices[i]);
            buy[j] = Math.max(buy[j], sell[j - 1] - prices[i]);
        }
    }
    
    return sell[k];
}

// With cooldown
public int maxProfitWithCooldown(int[] prices) {
    if (prices.length <= 1) return 0;
    
    int held = -prices[0]; // Max profit when holding stock
    int sold = 0;          // Max profit when just sold (cooldown)
    int rest = 0;          // Max profit when resting
    
    for (int i = 1; i < prices.length; i++) {
        int prevHeld = held;
        int prevSold = sold;
        int prevRest = rest;
        
        held = Math.max(prevHeld, prevRest - prices[i]);
        sold = prevHeld + prices[i];
        rest = Math.max(prevRest, prevSold);
    }
    
    return Math.max(sold, rest);
}
```
11. **Duplicate Number** - Floyd's cycle detection
12. **Merge Intervals** - Interval processing
13. **Next Permutation** - Lexicographic ordering
14. **Count Inversions** - Merge sort application
15. **Best Buying/Selling** - Stock profit optimization
16. **Rain Water Trapping** - Two pointers/stack approach
17. **Chocolate Distribution** - Sliding window
18. **Smallest Subarray** - Variable window technique
19. **Three Way Partitioning** - Dutch flag variant
20. **Minimum Swaps** - Cycle detection
21. **Alternating Elements** - Rearrangement algorithms
22. **Subarray Sum Zero** - Prefix sum hashing
23. **Factorial Large Numbers** - BigInteger operations
24. **Maximum Product Subarray** - Modified Kadane's
25. **Longest Consecutive** - HashSet optimization
26. **Array Subset** - Frequency mapping
27. **Triplet Sum** - Three pointers
28. **Trapping Rain Water** - DP/Two pointers
29. **Chocolate Distribution** - Sorting + sliding window
30. **Smallest Missing Positive** - Cyclic sort
31. **Merge Without Extra Space** - Gap method
32. **K-th Element** - Binary search on answer
33. **Median of Arrays** - Binary search technique
34. **Spiral Matrix** - Direction-based traversal
35. **Search 2D Matrix** - Binary search in matrix
36. **Row with Max 1s** - Binary search optimization

**Patterns Mastered:**
- **Two Pointers** - Efficient array traversal
- **Sliding Window** - Subarray problems
- **Dutch National Flag** - Three-way partitioning
- **Kadane's Algorithm** - Maximum subarray variants
- **Binary Search** - Search space optimization
- **Prefix Sums** - Range query optimization

---

### **Matrix (37-46) - 10 Questions** ✅
**Integrated with Arrays section**

**Key Problems:**
37. **Spiral Matrix Traversal** - Clockwise/counterclockwise
38. **Search in Row-Column Sorted** - Staircase search
39. **Median in Row-wise Sorted** - Binary search
40. **Rotate Matrix 90°** - In-place rotation
41. **Kth Smallest in Matrix** - Binary search + counting
42. **Common Elements in Rows** - Hash intersection
43. **Rotate by K** - Cyclic rotation
44. **Max Rectangle Binary Matrix** - Stack-based histogram
45. **Find Specific Pair** - DP optimization
46. **Boolean Matrix Problem** - Space-efficient marking

---

### **Strings (47-75) - 29 Questions** ✅
**Complete Coverage**: [Strings-Complete-JAVA.md](./Strings-Complete-JAVA.md)

### 47. Reverse String - Two Pointers
```java
public void reverseString(char[] s) {
    int left = 0, right = s.length - 1;
    
    while (left < right) {
        char temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
}

// Recursive approach
public void reverseStringRecursive(char[] s) {
    reverseHelper(s, 0, s.length - 1);
}

private void reverseHelper(char[] s, int left, int right) {
    if (left >= right) return;
    
    char temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    
    reverseHelper(s, left + 1, right - 1);
}

// Reverse words in a string
public String reverseWords(String s) {
    String[] words = s.trim().split("\\s+");
    StringBuilder result = new StringBuilder();
    
    for (int i = words.length - 1; i >= 0; i--) {
        result.append(words[i]);
        if (i > 0) result.append(" ");
    }
    
    return result.toString();
}
```

### 48. Palindrome Check - Multiple Approaches
```java
public boolean isPalindrome(String s) {
    if (s == null || s.length() <= 1) return true;
    
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        // Skip non-alphanumeric characters
        while (left < right && !Character.isLetterOrDigit(s.charAt(left))) {
            left++;
        }
        while (left < right && !Character.isLetterOrDigit(s.charAt(right))) {
            right--;
        }
        
        if (Character.toLowerCase(s.charAt(left)) != 
            Character.toLowerCase(s.charAt(right))) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}

// Check if string can form palindrome
public boolean canFormPalindrome(String s) {
    Map<Character, Integer> charCount = new HashMap<>();
    
    for (char c : s.toCharArray()) {
        charCount.put(c, charCount.getOrDefault(c, 0) + 1);
    }
    
    int oddCount = 0;
    for (int count : charCount.values()) {
        if (count % 2 == 1) {
            oddCount++;
        }
    }
    
    return oddCount <= 1;
}

// Longest palindromic substring
public String longestPalindrome(String s) {
    if (s == null || s.length() < 2) return s;
    
    int start = 0, maxLen = 1;
    
    for (int i = 0; i < s.length(); i++) {
        // Check for odd length palindromes
        int len1 = expandAroundCenter(s, i, i);
        // Check for even length palindromes
        int len2 = expandAroundCenter(s, i, i + 1);
        
        int len = Math.max(len1, len2);
        if (len > maxLen) {
            maxLen = len;
            start = i - (len - 1) / 2;
        }
    }
    
    return s.substring(start, start + maxLen);
}

private int expandAroundCenter(String s, int left, int right) {
    while (left >= 0 && right < s.length() && 
           s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return right - left - 1;
}
```

### 49. Duplicate Characters - Frequency Mapping
```java
public void findDuplicateCharacters(String str) {
    Map<Character, Integer> charCount = new HashMap<>();
    
    // Count frequency of each character
    for (char c : str.toCharArray()) {
        charCount.put(c, charCount.getOrDefault(c, 0) + 1);
    }
    
    System.out.println("Duplicate characters:");
    for (Map.Entry<Character, Integer> entry : charCount.entrySet()) {
        if (entry.getValue() > 1) {
            System.out.println(entry.getKey() + " - " + entry.getValue());
        }
    }
}

// Using array for ASCII characters
public void findDuplicatesASCII(String str) {
    int[] charCount = new int[256];
    
    for (char c : str.toCharArray()) {
        charCount[c]++;
    }
    
    for (int i = 0; i < 256; i++) {
        if (charCount[i] > 1) {
            System.out.println((char) i + " - " + charCount[i]);
        }
    }
}

// Remove duplicate characters
public String removeDuplicates(String str) {
    Set<Character> seen = new LinkedHashSet<>();
    
    for (char c : str.toCharArray()) {
        seen.add(c);
    }
    
    StringBuilder result = new StringBuilder();
    for (char c : seen) {
        result.append(c);
    }
    
    return result.toString();
}
```

### 50. Rotation Check - KMP/Concatenation
```java
public boolean isRotation(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    
    // Check if s2 is a rotation of s1
    String concatenated = s1 + s1;
    return concatenated.contains(s2);
}

// Using KMP algorithm
public boolean isRotationKMP(String s1, String s2) {
    if (s1.length() != s2.length()) return false;
    
    return kmpSearch(s1 + s1, s2) != -1;
}

private int kmpSearch(String text, String pattern) {
    int[] lps = computeLPS(pattern);
    int i = 0, j = 0;
    
    while (i < text.length()) {
        if (text.charAt(i) == pattern.charAt(j)) {
            i++;
            j++;
        }
        
        if (j == pattern.length()) {
            return i - j; // Found pattern
        } else if (i < text.length() && text.charAt(i) != pattern.charAt(j)) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return -1; // Pattern not found
}

private int[] computeLPS(String pattern) {
    int[] lps = new int[pattern.length()];
    int len = 0, i = 1;
    
    while (i < pattern.length()) {
        if (pattern.charAt(i) == pattern.charAt(len)) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len != 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    
    return lps;
}
```

### 51. Valid Shuffle - Interleaving Validation
```java
public boolean isValidShuffle(String str1, String str2, String result) {
    if (str1.length() + str2.length() != result.length()) {
        return false;
    }
    
    int i = 0, j = 0, k = 0;
    
    while (k < result.length()) {
        if (i < str1.length() && str1.charAt(i) == result.charAt(k)) {
            i++;
        } else if (j < str2.length() && str2.charAt(j) == result.charAt(k)) {
            j++;
        } else {
            return false;
        }
        k++;
    }
    
    return i == str1.length() && j == str2.length();
}

// Using recursion
public boolean isValidShuffleRecursive(String str1, String str2, String result) {
    return checkShuffle(str1, str2, result, 0, 0, 0);
}

private boolean checkShuffle(String str1, String str2, String result, 
                           int i, int j, int k) {
    if (k == result.length()) {
        return i == str1.length() && j == str2.length();
    }
    
    boolean takeFromFirst = false, takeFromSecond = false;
    
    if (i < str1.length() && str1.charAt(i) == result.charAt(k)) {
        takeFromFirst = checkShuffle(str1, str2, result, i + 1, j, k + 1);
    }
    
    if (j < str2.length() && str2.charAt(j) == result.charAt(k)) {
        takeFromSecond = checkShuffle(str1, str2, result, i, j + 1, k + 1);
    }
    
    return takeFromFirst || takeFromSecond;
}
```

### 52. Count and Say - Recursive Generation
```java
public String countAndSay(int n) {
    if (n == 1) return "1";
    
    String prev = countAndSay(n - 1);
    return generateNext(prev);
}

private String generateNext(String s) {
    StringBuilder result = new StringBuilder();
    int i = 0;
    
    while (i < s.length()) {
        char current = s.charAt(i);
        int count = 1;
        
        // Count consecutive occurrences
        while (i + 1 < s.length() && s.charAt(i + 1) == current) {
            count++;
            i++;
        }
        
        result.append(count).append(current);
        i++;
    }
    
    return result.toString();
}

// Iterative approach
public String countAndSayIterative(int n) {
    String result = "1";
    
    for (int i = 2; i <= n; i++) {
        result = generateNext(result);
    }
    
    return result;
}

// Generate sequence up to n
public List<String> generateSequence(int n) {
    List<String> sequence = new ArrayList<>();
    String current = "1";
    sequence.add(current);
    
    for (int i = 2; i <= n; i++) {
        current = generateNext(current);
        sequence.add(current);
    }
    
    return sequence;
}
```

**Key Problems Covered:**
47. **Reverse String** - Two pointers
48. **Palindrome Check** - Multiple approaches
49. **Duplicate Characters** - Frequency mapping
50. **Rotation Check** - KMP/concatenation
51. **Valid Shuffle** - Interleaving validation
52. **Count and Say** - Recursive generation
53. **Longest Palindrome** - Manacher's algorithm
54. **Longest Common Prefix** - Trie/binary search
55. **Number of Rotations** - Pattern matching
56. **Remove Duplicates** - In-place processing
57. **Balanced Parentheses** - Stack validation
58. **Word Break** - DP with dictionary
59. **Edit Distance** - Dynamic programming
60. **Longest Repeating Character** - Sliding window
61. **Print Anagrams** - Grouping with sorting
62. **Smallest Window** - Variable sliding window
63. **Recursively Remove** - Stack-based removal
64. **Wildcard Pattern** - DP matching
65. **Replace Spaces** - In-place modification
66. **Rearrange Characters** - Frequency scheduling
67. **Minimum Characters** - KMP failure function
68. **Sentence Reverse** - Word-by-word reversal
69. **Roman to Integer** - Symbol processing
70. **Longest Common Subsequence** - DP classic
71. **Permutations of String** - Backtracking
72. **Split Binary String** - Balanced partitioning
73. **Word Wrap Problem** - DP line breaking
74. **Phone Directory** - Trie + DFS
75. **Count Palindromic Subsequences** - DP counting

**String Patterns:**
- **KMP Algorithm** - Pattern matching
- **Manacher's** - Palindrome detection
- **Sliding Window** - Substring problems
- **Trie Data Structure** - Prefix operations
- **Dynamic Programming** - Edit distance, LCS

---

### **Searching & Sorting (76-121) - 46 Questions** ✅
**Complete Coverage**: [SearchingSort-Complete-JAVA.md](./SearchingSort-Complete-JAVA.md)

**Key Problems Covered:**
76. **First and Last Position** - Binary search bounds
77. **Value Equal to Index** - Modified binary search
78. **Search in Rotated Array** - Pivot-based search
79. **Square Root** - Binary search on answer
80. **Count Squares** - Mathematical optimization
81. **Maximum Water** - Two pointers
82. **Median of Arrays** - Binary search merge
83. **Page Allocation** - Binary search on answer
84. **Aggressive Cows** - Binary search placement
85. **Book Allocation** - DP/binary search
86. **EKOSPOJ Problem** - Binary search optimization
87. **Job Scheduling** - Greedy with sorting
88. **Missing Number** - Mathematical/XOR
89. **Count Triplets** - Two pointers
90. **Merge Sort** - Divide and conquer
91. **Quick Sort** - Partitioning algorithm
92. **Heap Sort** - Complete binary tree
93. **Count Inversions** - Modified merge sort
94. **Product Array Puzzle** - Division/multiplication
95. **Sort by Set Bit Count** - Custom comparator
96. **Minimum Swaps** - Graph cycle detection
97. **Bishu and Soldiers** - Prefix sums
98. **Rasta and Kheshtak** - Binary search
99. **Kth Smallest** - QuickSelect
100. **Merge Without Extra Space** - Gap method
101. **Majority Element** - Boyer-Moore
102. **Two Repeated Elements** - Mathematical
103. **Smallest Factorial** - Binary search
104. **Painters Partition** - Binary search DP
105. **ROTI-Prata SPOJ** - Binary search simulation
106. **DoubleHelix SPOJ** - Two pointers
107. **Subset Sums** - Bit manipulation
108. **Find Missing** - XOR properties
109. **Minimum Length Unsorted** - Two pointers
110. **Case-specific Sorting** - Custom comparison
111. **Similar RGB Color** - Closest value search
112. **Sort Array by Parity** - Two pointers partition
113. **Largest Number** - Custom comparator
114. **Find Peak Element** - Binary search
115. **Maximum Gap** - Bucket sort
116. **Find Minimum in Rotated** - Modified binary search
117. **Wiggle Sort** - Partitioning technique
118. **Kth Largest in Stream** - Min heap
119. **Top K Frequent** - Heap/QuickSelect
120. **Search for Range** - Binary search bounds
121. **Find Duplicate** - Floyd's algorithm

**Searching & Sorting Patterns:**
- **Binary Search** - All variants and applications
- **Two Pointers** - Efficient array processing
- **Merge Sort** - Stable O(n log n) sorting
- **Quick Sort** - Average O(n log n) in-place
- **Heap Sort** - Guaranteed O(n log n)
- **Counting/Radix** - Non-comparison sorting

---

### **Linked List (122-158) - 37 Questions** ✅
**Complete Coverage**: [LinkedList-Complete-JAVA.md](./LinkedList-Complete-JAVA.md)

**Key Problems Covered:**
122. **Reverse Linked List** - Iterative/recursive
123. **Reverse in Groups** - K-group reversal
124. **Detect Loop** - Floyd's cycle detection
125. **Remove Loop** - Loop removal algorithm
126. **Starting Point of Loop** - Mathematical approach
127. **Remove Duplicates** - Sorted/unsorted lists
128. **Add Two Numbers** - Digit-by-digit addition
129. **Clone with Random** - Deep copy with mapping
130. **Merge Two Sorted** - Two pointers merge
131. **Find Intersection** - Hash set/two pointers
132. **Intersection Point** - Length difference
133. **Merge Sort on LL** - Divide and conquer
134. **QuickSort on LL** - Partition-based
135. **Middle Element** - Fast/slow pointers
136. **Check Palindrome** - Reverse + compare
137. **Fold Linked List** - Reorder alternating
138. **Add 1 to Number** - Carry propagation
139. **Flattening LL** - Priority queue merge
140. **Sort 0s 1s 2s** - Count/three pointers
141. **Clone Random Pointer** - O(1) space solution
142. **Merge K Sorted** - Priority queue/divide
143. **Multiply Numbers** - School multiplication
144. **Delete N after M** - Pattern deletion
145. **Segregate Even/Odd** - Two separate lists
146. **Point to Next Higher** - Stack-based
147. **Remove Every Kth** - Josephus problem
148. **Rotate by K** - Find new head
149. **Delete Middle** - Fast/slow technique
150. **Why QuickSort O(n²)** - Theoretical analysis
151. **Rearrange in Place** - Space-efficient
152. **Given Only Pointer** - Copy next node
153. **Triplet Sum** - Three pointers
154. **Delete Alternate** - Skip pattern
155. **Reverse Alternate K** - Group reversal
156. **First Non-repeating** - Frequency + position
157. **Check Circular** - Cycle detection variant
158. **Convert to DLL** - Tree to doubly linked

**Linked List Patterns:**
- **Floyd's Algorithm** - Cycle detection/removal
- **Two Pointers** - Fast/slow technique
- **Recursion** - Tree-like traversal
- **Dummy Nodes** - Simplify edge cases
- **Multiple Lists** - Merge operations

---

### **Binary Trees (159-188) - 30 Questions** ✅
**Complete Coverage**: [Trees-Complete-JAVA.md](./Trees-Complete-JAVA.md)

**Key Problems Covered:**
159. **Level Order Traversal** - BFS with queue
160. **Reverse Level Order** - Stack + queue
161. **Height of Tree** - DFS depth calculation
162. **Diameter of Tree** - Optimized single pass
163. **Mirror of Tree** - Recursive swapping
164. **Inorder without Recursion** - Stack simulation
165. **Preorder without Recursion** - Iterative approach
166. **Postorder without Recursion** - Two stacks
167. **Left View** - Level order first element
168. **Right View** - Level order last element
169. **Top View** - Vertical ordering
170. **Bottom View** - Vertical + level tracking
171. **Zig-Zag Traversal** - Alternating directions
172. **Check Balanced** - Height difference
173. **Diagonal Traversal** - Anti-diagonal grouping
174. **Boundary Traversal** - Perimeter elements
175. **Construct from Arrays** - Inorder + preorder
176. **Convert to DLL** - In-place conversion
177. **Tree Isomorphism** - Structure comparison
178. **Sum Tree** - Recursive validation
179. **Duplicate Subtrees** - Serialization hashing
180. **Check Subtree** - Pattern matching
181. **Connect Same Level** - Level linking
182. **Lowest Common Ancestor** - Path-based/recursive
183. **Max Path Sum** - Global maximum tracking
184. **Max Sum No Adjacent** - DP on tree
185. **Leaf to Root Path** - Backtracking
186. **All Root to Leaf** - DFS with path
187. **Check Sum Property** - Children sum validation
188. **Sum of Nodes K Distance** - BFS/DFS distance

**Tree Traversal Patterns:**
- **DFS Variants** - Preorder, inorder, postorder
- **BFS Applications** - Level order processing
- **Tree DP** - Optimal substructure
- **Path Algorithms** - Root to leaf operations
- **View Problems** - Spatial projections

---

### **Binary Search Trees (189-210) - 22 Questions** ✅
**Complete Coverage**: [BST-Complete-JAVA.md](./BST-Complete-JAVA.md)

**Key Problems Covered:**
189. **Search in BST** - Recursive/iterative
190. **Insert in BST** - Maintain BST property
191. **Delete from BST** - Three cases handling
192. **Minimum Element** - Leftmost node
193. **Maximum Element** - Rightmost node
194. **Inorder Successor** - Next greater element
195. **Inorder Predecessor** - Previous smaller
196. **Check BST** - Validate BST property
197. **Lowest Common Ancestor** - BST-specific
198. **Construct from Preorder** - Stack-based
199. **Convert to Balanced BST** - Array conversion
200. **Merge Two BSTs** - Inorder merge
201. **Find Kth Smallest** - Inorder traversal
202. **Kth Largest** - Reverse inorder
203. **Count BST Nodes** - Range counting
204. **Serialize/Deserialize** - String conversion
205. **Sum in Range** - BST range sum
206. **Flatten to Sorted List** - Inorder linking
207. **Normal BST to Balanced** - Reconstruction
208. **Preorder to Postorder** - BST property
209. **Check for Dead End** - Leaf validation
210. **Count Nodes in Range** - BST traversal

**BST-Specific Patterns:**
- **BST Property** - Left < root < right
- **Inorder Traversal** - Sorted sequence
- **Range Operations** - Efficient searching
- **Balancing** - Height optimization
- **Serialization** - Tree representation

---

### **Greedy (211-240) - 30 Questions** ✅
**Complete Coverage**: [Greedy-Complete-JAVA.md](./Greedy-Complete-JAVA.md)

**Key Problems Covered:**
211. **Activity Selection** - Earliest finish time
212. **N Meetings in Room** - Optimal scheduling
213. **Huffman Coding** - Frequency-based encoding
214. **Job Sequencing** - Deadline + profit
215. **Fractional Knapsack** - Value/weight ratio
216. **Minimum Coins** - Greedy coin change
217. **Maximum Meetings** - Interval scheduling
218. **Maximum Trains** - Platform allocation
219. **Buy Maximum Items** - Budget optimization
220. **DEFKIN SPOJ** - Area maximization
221. **GERGOVIA SPOJ** - Wine trading
222. **Pick from Both Sides** - Optimal selection
223. **Minimum Platforms** - Train scheduling
224. **Buy Maximum Stocks** - Price constraints
225. **Find Maximum Equal Sum** - Stack balancing
226. **Maximum Sum Absolute** - Arrangement optimization
227. **Maximize Sum after K** - Priority modifications
228. **Maximum Length Chain** - Interval chaining
229. **Minimum Cost Ropes** - Huffman-like merging
230. **Find Smallest Number** - Digit arrangement
231. **Rearrange Characters** - Frequency scheduling
232. **Minimum Cost for Tickets** - Travel optimization
233. **Minimum Stops** - Gas station problem
234. **Check Mirror in N-ary** - Tree validation
235. **Shop in Candy Store** - Optimal buying
236. **Geek and Chocolates** - Distribution strategy
237. **Assign Mice to Holes** - Distance minimization
238. **Largest Number Possible** - Digit maximization
239. **Paper Cut Minimum** - Cutting optimization
240. **Minimum Sum Two Numbers** - Digit distribution

**Greedy Algorithm Patterns:**
- **Activity Selection** - Interval scheduling
- **Huffman Coding** - Optimal encoding
- **Fractional Knapsack** - Ratio-based selection
- **Job Scheduling** - Deadline optimization
- **Graph Algorithms** - MST, shortest paths

---

### **Backtracking (241-264) - 24 Questions** ✅
**Complete Coverage**: [Backtracking-Complete-JAVA.md](./Backtracking-Complete-JAVA.md)

**Key Problems Covered:**
241. **Rat in Maze** - Path finding with obstacles
242. **N-Queens Problem** - Chess board placement
243. **M-Coloring Problem** - Graph coloring
244. **Palindrome Partitioning** - All valid partitions
245. **Sudoku Solver** - Constraint satisfaction
246. **Subset Sum** - All possible combinations
247. **Permutations of String** - All arrangements
248. **Combination Sum** - Target sum combinations
249. **Generate Parentheses** - Valid combinations
250. **Word Break II** - All possible sentences
251. **Remove Invalid Parentheses** - Minimum removals
252. **Knight Tour Problem** - Chess knight movement
253. **Tug of War** - Balanced partitioning
254. **Find Shortest Path** - All paths exploration
255. **Combinational Sum** - Unique combinations
256. **Find All Paths** - Source to destination
257. **Largest Number in K Swaps** - Digit optimization
258. **Print All Permutations** - Lexicographic order
259. **Find Path More Than K** - Constrained paths
260. **Longest Route** - Maximum path length
261. **Print All Paths** - Matrix path printing
262. **Hamiltonian Cycle** - Visit all vertices
263. **Word Boggle** - Dictionary word search
264. **Solve Cryptarithmetic** - Letter to digit mapping

**Backtracking Patterns:**
- **Tree Exploration** - DFS with pruning
- **Constraint Satisfaction** - Valid state checking
- **Permutations/Combinations** - Systematic generation
- **Path Finding** - All possible routes
- **Game Solving** - Chess, Sudoku problems

---

### **Stacks and Queues (265-294) - 30 Questions** ✅
**Complete Coverage**: [StackQueue-Complete-JAVA.md](./StackQueue-Complete-JAVA.md)

**Key Problems Covered:**
265. **Implement Stack** - Array/linked list
266. **Implement Queue** - Array/linked list
267. **Implement 2 Stacks** - Single array
268. **Find Middle Element** - Stack with tracking
269. **Balanced Parentheses** - Stack validation
270. **Reverse String** - Stack application
271. **Design Stack with Min** - O(1) minimum
272. **Check Redundant Brackets** - Parsing validation
273. **Reverse Stack** - Using recursion
274. **Sort Stack** - Using another stack
275. **Merge Overlapping Intervals** - Stack processing
276. **Largest Rectangle** - Histogram area
277. **Length of Valid Parentheses** - DP/stack approach
278. **Expression Evaluation** - Infix to postfix
279. **Implement Queue using Stack** - Two stacks
280. **Implement Stack using Queue** - Single/double queue
281. **Implement Circular Queue** - Array implementation
282. **LRU Cache Implementation** - Queue + hashmap
283. **Reverse Queue** - Stack assistance
284. **Generate Binary Numbers** - Queue BFS
285. **Maximum Sliding Window** - Deque optimization
286. **Sum of Min and Max** - All subarrays
287. **Minimum Cost Tree** - Stack processing
288. **Next Greater Element** - Stack monotonic
289. **Next Smaller Element** - Stack application
290. **Celebrity Problem** - Stack elimination
291. **Arithmetic Expression** - Postfix evaluation
292. **Evaluation of Postfix** - Stack calculation
293. **Implement Deque** - Double-ended queue
294. **Queue Reversal** - Stack/recursion

**Stack & Queue Patterns:**
- **Monotonic Stack** - Next greater/smaller
- **Expression Evaluation** - Infix/postfix parsing
- **Sliding Window** - Deque optimization
- **Two Stack/Queue** - Space optimization
- **Cache Implementation** - LRU/LFU design

---

### **Heap (295-314) - 20 Questions** ✅
**Complete Coverage**: [Heaps-Complete-JAVA.md](./Heaps-Complete-JAVA.md)

**Key Problems Covered:**
295. **Implement Heap** - Array-based heap
296. **Sort K-Sorted Array** - Min heap
297. **Kth Largest Element** - Min heap of size K
298. **Kth Smallest Element** - Max heap approach
299. **Merge K Sorted Lists** - Priority queue
300. **Merge K Sorted Arrays** - Heap merging
301. **Heap Sort Algorithm** - In-place sorting
302. **Maximum Sum Combination** - Heap tracking
303. **Find Median in Stream** - Two heaps
304. **Check Min Heap** - Array validation
305. **Connect Ropes Minimum Cost** - Greedy heap
306. **Convert BST to Min Heap** - Level order
307. **Convert Min to Max Heap** - Heapify
308. **Rearrange Characters** - Frequency heap
309. **Minimum Cost of Ropes** - Huffman approach
310. **Top K Frequent Elements** - Frequency counting
311. **Sum Elements K1 and K2** - Range sum
312. **Merge Two Binary Max Heaps** - Array merging
313. **Kth Largest in Stream** - Running kth largest
314. **Replace with Least Greater** - BST/heap approach

**Heap Patterns:**
- **Priority Queue** - Efficient extrema access
- **K-way Merge** - Multiple sorted sequences
- **Running Statistics** - Median, kth element
- **Frequency Problems** - Top k elements
- **Greedy Optimization** - Minimum cost operations

---

### **Graph (315-344) - 30 Questions** ✅
**Complete Coverage**: [Graphs-Complete-JAVA.md](./Graphs-Complete-JAVA.md)

**Key Problems Covered:**
315. **Create Graph and BFS** - Adjacency representation
316. **Depth First Traversal** - DFS implementation
317. **Detect Cycle Undirected** - Union-find/DFS
318. **Detect Cycle Directed** - DFS with colors
319. **Search in Maze** - BFS/DFS pathfinding
320. **Minimum Step by Knight** - BFS shortest path
321. **Flood Fill Algorithm** - Connected components
322. **Clone a Graph** - Deep copy with mapping
323. **Making Wired Connections** - Union-find
324. **Word Ladder** - BFS transformation
325. **Dijkstra's Algorithm** - Shortest path
326. **Implement Topological Sort** - Kahn's algorithm
327. **Minimum Spanning Tree** - Kruskal's/Prim's
328. **Implement Kruskals** - Union-find MST
329. **Implement Prims** - Priority queue MST
330. **Total Spanning Trees** - Matrix determinant
331. **Implement Bellman Ford** - Negative edge handling
332. **Implement Floyd Warshall** - All pairs shortest
333. **Travelling Salesman** - DP with bitmask
334. **Graph Coloring** - Backtracking
335. **Snake and Ladders** - BFS game solving
336. **Find Bridge in Graph** - Tarjan's algorithm
337. **Count Strongly Connected** - Kosaraju's algorithm
338. **Check Bipartite** - Two-coloring
339. **Detect Negative Cycle** - Bellman-Ford
340. **Longest Path DAG** - Topological + DP
341. **Journey to Moon** - Connected components
342. **Cheapest Flights K Stops** - Modified Dijkstra
343. **Oliver and Battle** - BFS optimization
344. **Water Jug Problem** - BFS state space

**Graph Algorithm Patterns:**
- **Graph Traversal** - BFS/DFS applications
- **Shortest Paths** - Dijkstra, Bellman-Ford, Floyd-Warshall
- **Minimum Spanning Tree** - Kruskal's, Prim's
- **Cycle Detection** - Union-find, DFS coloring
- **Topological Sorting** - DAG ordering
- **Strongly Connected Components** - Tarjan's, Kosaraju's

---

### **Trie (345-350) - 6 Questions** ✅
**Complete Coverage**: [Tries-Complete-JAVA.md](./Tries-Complete-JAVA.md)

**Key Problems Covered:**
345. **Implement Trie** - Insert, search, delete
346. **Longest Word All Prefixes** - Trie validation
347. **Maximum XOR Trie** - Binary trie optimization
348. **Word Search II** - Trie + backtracking
349. **Implement Trie Count** - Prefix counting
350. **Complete String** - All prefixes exist

**Trie Patterns:**
- **Prefix Operations** - Fast string matching
- **Word Search** - Grid + trie optimization
- **XOR Operations** - Binary trie applications
- **Autocomplete** - Prefix-based suggestions

---

### **Dynamic Programming (351-423) - 73 Questions** ✅
**Complete Coverage**: [DP-Complete-JAVA.md](./DP-Complete-JAVA.md)

### 351. Climbing Stairs - Basic DP Recurrence
```java
public int climbStairs(int n) {
    if (n <= 2) return n;
    
    // DP approach - O(n) time, O(1) space
    int prev2 = 1, prev1 = 2;
    
    for (int i = 3; i <= n; i++) {
        int current = prev1 + prev2;
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// With memo - top-down approach
public int climbStairsMemo(int n) {
    int[] memo = new int[n + 1];
    return climbStairsHelper(n, memo);
}

private int climbStairsHelper(int n, int[] memo) {
    if (n <= 2) return n;
    if (memo[n] != 0) return memo[n];
    
    memo[n] = climbStairsHelper(n - 1, memo) + climbStairsHelper(n - 2, memo);
    return memo[n];
}

// Variable steps allowed
public int climbStairsVariableSteps(int n, int[] steps) {
    int[] dp = new int[n + 1];
    dp[0] = 1;
    
    for (int i = 1; i <= n; i++) {
        for (int step : steps) {
            if (i >= step) {
                dp[i] += dp[i - step];
            }
        }
    }
    
    return dp[n];
}
```

### 352. House Robber - Non-adjacent Selection
```java
public int rob(int[] nums) {
    if (nums.length == 0) return 0;
    if (nums.length == 1) return nums[0];
    
    int prev2 = nums[0];
    int prev1 = Math.max(nums[0], nums[1]);
    
    for (int i = 2; i < nums.length; i++) {
        int current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// House Robber II - Circular arrangement
public int robCircular(int[] nums) {
    if (nums.length == 1) return nums[0];
    
    // Case 1: Rob first house, can't rob last
    int case1 = robLinear(nums, 0, nums.length - 2);
    // Case 2: Don't rob first house, can rob last
    int case2 = robLinear(nums, 1, nums.length - 1);
    
    return Math.max(case1, case2);
}

private int robLinear(int[] nums, int start, int end) {
    int prev2 = 0, prev1 = 0;
    
    for (int i = start; i <= end; i++) {
        int current = Math.max(prev1, prev2 + nums[i]);
        prev2 = prev1;
        prev1 = current;
    }
    
    return prev1;
}

// House Robber III - Binary Tree
public int robTree(TreeNode root) {
    int[] result = robHelper(root);
    return Math.max(result[0], result[1]);
}

private int[] robHelper(TreeNode node) {
    if (node == null) return new int[]{0, 0};
    
    int[] left = robHelper(node.left);
    int[] right = robHelper(node.right);
    
    // result[0] = max money when root is not robbed
    // result[1] = max money when root is robbed
    int[] result = new int[2];
    result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    result[1] = node.val + left[0] + right[0];
    
    return result;
}
```

### 353. Coin Change - Minimum Coins/Ways
```java
public int coinChange(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    Arrays.fill(dp, amount + 1); // Initialize with impossible value
    dp[0] = 0;
    
    for (int i = 1; i <= amount; i++) {
        for (int coin : coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    
    return dp[amount] > amount ? -1 : dp[amount];
}

// Count ways to make change
public int coinChangeWays(int[] coins, int amount) {
    int[] dp = new int[amount + 1];
    dp[0] = 1;
    
    for (int coin : coins) {
        for (int i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin];
        }
    }
    
    return dp[amount];
}

// With memo - recursive approach
public int coinChangeMemo(int[] coins, int amount) {
    int[] memo = new int[amount + 1];
    Arrays.fill(memo, -1);
    return coinChangeHelper(coins, amount, memo);
}

private int coinChangeHelper(int[] coins, int amount, int[] memo) {
    if (amount == 0) return 0;
    if (amount < 0) return -1;
    if (memo[amount] != -1) return memo[amount];
    
    int min = Integer.MAX_VALUE;
    for (int coin : coins) {
        int result = coinChangeHelper(coins, amount - coin, memo);
        if (result >= 0 && result < min) {
            min = result + 1;
        }
    }
    
    memo[amount] = (min == Integer.MAX_VALUE) ? -1 : min;
    return memo[amount];
}
```

### 354. Longest Increasing Subsequence - O(n log n)
```java
public int lengthOfLIS(int[] nums) {
    if (nums.length == 0) return 0;
    
    // Binary search approach - O(n log n)
    List<Integer> tails = new ArrayList<>();
    
    for (int num : nums) {
        int pos = binarySearch(tails, num);
        
        if (pos == tails.size()) {
            tails.add(num);
        } else {
            tails.set(pos, num);
        }
    }
    
    return tails.size();
}

private int binarySearch(List<Integer> tails, int target) {
    int left = 0, right = tails.size();
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (tails.get(mid) < target) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}

// DP approach - O(n²)
public int lengthOfLISDP(int[] nums) {
    if (nums.length == 0) return 0;
    
    int[] dp = new int[nums.length];
    Arrays.fill(dp, 1);
    int maxLength = 1;
    
    for (int i = 1; i < nums.length; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        maxLength = Math.max(maxLength, dp[i]);
    }
    
    return maxLength;
}

// Get actual LIS
public List<Integer> getLIS(int[] nums) {
    if (nums.length == 0) return new ArrayList<>();
    
    int[] dp = new int[nums.length];
    int[] parent = new int[nums.length];
    Arrays.fill(dp, 1);
    Arrays.fill(parent, -1);
    
    int maxLength = 1, maxIndex = 0;
    
    for (int i = 1; i < nums.length; i++) {
        for (int j = 0; j < i; j++) {
            if (nums[j] < nums[i] && dp[j] + 1 > dp[i]) {
                dp[i] = dp[j] + 1;
                parent[i] = j;
            }
        }
        
        if (dp[i] > maxLength) {
            maxLength = dp[i];
            maxIndex = i;
        }
    }
    
    // Reconstruct LIS
    List<Integer> lis = new ArrayList<>();
    int current = maxIndex;
    
    while (current != -1) {
        lis.add(0, nums[current]);
        current = parent[current];
    }
    
    return lis;
}
```

### 355. Edit Distance - String Transformation
```java
public int minDistance(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Initialize base cases
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    Math.min(dp[i - 1][j],     // Delete
                             dp[i][j - 1]),    // Insert
                    dp[i - 1][j - 1]          // Replace
                );
            }
        }
    }
    
    return dp[m][n];
}

// Space optimized version
public int minDistanceOptimized(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[] prev = new int[n + 1];
    int[] curr = new int[n + 1];
    
    // Initialize first row
    for (int j = 0; j <= n; j++) prev[j] = j;
    
    for (int i = 1; i <= m; i++) {
        curr[0] = i;
        
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(
                    Math.min(prev[j], curr[j - 1]),
                    prev[j - 1]
                );
            }
        }
        
        // Swap arrays
        int[] temp = prev;
        prev = curr;
        curr = temp;
    }
    
    return prev[n];
}

// Get actual operations
public List<String> getEditOperations(String word1, String word2) {
    int m = word1.length(), n = word2.length();
    int[][] dp = new int[m + 1][n + 1];
    
    // Fill DP table
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(
                    Math.min(dp[i - 1][j], dp[i][j - 1]),
                    dp[i - 1][j - 1]
                );
            }
        }
    }
    
    // Backtrack to find operations
    List<String> operations = new ArrayList<>();
    int i = m, j = n;
    
    while (i > 0 || j > 0) {
        if (i > 0 && j > 0 && word1.charAt(i - 1) == word2.charAt(j - 1)) {
            i--;
            j--;
        } else if (i > 0 && j > 0 && dp[i][j] == dp[i - 1][j - 1] + 1) {
            operations.add(0, "Replace " + word1.charAt(i - 1) + " with " + word2.charAt(j - 1));
            i--;
            j--;
        } else if (i > 0 && dp[i][j] == dp[i - 1][j] + 1) {
            operations.add(0, "Delete " + word1.charAt(i - 1));
            i--;
        } else {
            operations.add(0, "Insert " + word2.charAt(j - 1));
            j--;
        }
    }
    
    return operations;
}
```

**Key Problems Covered:**
351. **Climbing Stairs** - Basic DP recurrence
352. **House Robber** - Non-adjacent selection
353. **Coin Change** - Minimum coins/ways
354. **Longest Increasing Subsequence** - O(n log n)
355. **Edit Distance** - String transformation
356. **Maximum Subarray** - Kadane's algorithm
357. **Unique Paths** - Grid traversal
358. **Jump Game** - Reachability check
359. **Palindromic Substrings** - Count palindromes
360. **Longest Common Subsequence** - String DP
361. **0/1 Knapsack** - Classic optimization
362. **Unbounded Knapsack** - Infinite items
363. **Subset Sum** - Target achievement
364. **Partition Equal Subset** - Balance validation
365. **Target Sum** - Assignment problem
366. **Combination Sum IV** - Order matters
367. **Word Break** - Dictionary segmentation
368. **Decode Ways** - String interpretation
369. **Maximum Product Subarray** - Modified Kadane's
370. **Best Time Stock** - Multiple transactions
371. **Interleaving String** - Three-string DP
372. **Distinct Subsequences** - Count occurrences
373. **Regular Expression** - Pattern matching
374. **Wildcard Matching** - Character matching
375. **Scramble String** - String transformation
376. **Burst Balloons** - Interval DP
377. **Remove Invalid Parentheses** - Validation DP
378. **Longest Palindrome Subsequence** - String DP
379. **Count Squares** - Matrix DP
380. **Minimum Path Sum** - Grid optimization
381. **Unique Paths II** - Obstacles handling
382. **Minimum Falling Path** - Matrix traversal
383. **Cherry Pickup** - 3D DP optimization
384. **Stone Game** - Minimax DP
385. **Predict Winner** - Game theory DP
386. **Palindrome Partitioning II** - Cut minimization
387. **Word Break II** - All possible breaks
388. **Concatenated Words** - Multi-word formation
389. **Russian Doll Envelopes** - 2D LIS
390. **Maximum Dot Product** - Subsequence optimization
391. **Minimum ASCII Delete** - String matching
392. **Delete Operation** - String similarity
393. **Minimum Window Subsequence** - String matching
394. **Knight Probability** - Probabilistic DP
395. **New 21 Game** - Probability calculation
396. **Soup Servings** - Expected value DP
397. **Number of Dice Rolls** - Combinatorial DP
398. **Knight Dialer** - Path counting
399. **Tallest Billboard** - Subset optimization
400. **Minimum Swaps** - Array sorting DP
401. **Largest Sum Divisible K** - Modular DP
402. **Constrained Subset Sum** - Sliding window DP
403. **Count Vowels Permutation** - State machine DP
404. **Minimum Cost K Stops** - Flight booking DP
405. **Stone Game II** - Game theory optimization
406. **Minimum Difficulty** - Job scheduling DP
407. **Pizza 3n Slices** - Circular array DP
408. **Number of Ways Stay** - Grid walk DP
409. **Restore Array** - Adjacency constraints
410. **Count All Paths** - Grid pathfinding
411. **Number of Sets** - Combinatorial optimization
412. **Allocate Mailboxes** - Distance minimization
413. **Min Cost Connect Points** - MST with DP
414. **Stone Game III** - Multi-choice game theory
415. **Number of Music Playlists** - Permutation DP
416. **Maximum Students** - Bitmask DP
417. **Dice Roll Simulation** - Constrained counting
418. **Minimum Taps** - Interval covering
419. **Frog Jump** - Position-based DP
420. **Split Array Largest Sum** - Binary search + DP
421. **Freedom Trail** - Circular rotation DP
422. **Optimal Account Balancing** - Subset optimization
423. **Redundant Connection** - Union-find with DP

**DP Patterns Mastered:**
- **Linear DP** - Fibonacci-like sequences
- **Grid DP** - 2D path problems
- **String DP** - Edit distance, LCS, palindromes
- **Knapsack Variants** - 0/1, unbounded, multi-dimensional
- **Interval DP** - Range-based optimization
- **Tree DP** - Recursive structure optimization
- **Bitmask DP** - State compression
- **Game Theory DP** - Minimax, optimal play
- **Probability DP** - Expected value calculation

---

### **Bit Manipulation (424-450) - 27 Questions** ✅
**Complete Coverage**: [BitManipulation-Complete-JAVA.md](./BitManipulation-Complete-JAVA.md)

**Key Problems Covered:**
424. **Count Set Bits** - Brian Kernighan's algorithm
425. **Find Two Non-repeating** - XOR partitioning
426. **Count Flips A to B** - XOR + bit counting
427. **Count Set Bits 1 to N** - Pattern recognition
428. **Power of 2** - Single bit check
429. **One Odd Occurring** - XOR properties
430. **Two Odd Occurring** - XOR grouping
431. **Power Set** - Bitmask generation
432. **Position of Set Bit** - Bit position finding
433. **Copy Set Bits** - Bit manipulation
434. **Divide Two Integers** - Bit shifting
435. **Square using Bit** - Bit-based arithmetic
436. **Swap Odd Even Bits** - Bit rearrangement
437. **Find XOR of Numbers** - Range XOR
438. **Maximum AND Pair** - Bit trie/greedy
439. **Maximum OR Pair** - Bit analysis
440. **Maximum XOR Pair** - Trie optimization
441. **Maximum XOR Subarray** - Prefix XOR
442. **Count Set Bits Array** - Bit position analysis
443. **Longest Consecutive 1s** - Bit scanning
444. **Sparse Number** - Next sparse number
445. **Alone in Couple** - XOR pairing
446. **Sum vs XOR** - Counting valid pairs
447. **Maximum Product** - Sign bit optimization
448. **Find Missing Two** - Mathematical approach
449. **Rotate Bits** - Circular bit shifting
450. **Add Binary Strings** - Bit-by-bit addition

**Bit Manipulation Patterns:**
- **XOR Properties** - Finding unique elements
- **Bit Counting** - Brian Kernighan's algorithm
- **Power of 2** - Single bit validation
- **Bit Masking** - Subset generation
- **Binary Arithmetic** - Addition, multiplication
- **Bit Rotation** - Circular shifting
- **Optimization** - Space/time improvements

---

## 🏆 **COMPLETE MASTERY ACHIEVED!**

### **Final Achievement Statistics:**
- ✅ **450/450 Questions** - 100% Love Babbar coverage
- ✅ **Java Solutions** - Optimized implementations
- ✅ **14 Major Topics** - Complete theoretical understanding
- ✅ **Multiple Approaches** - Brute force to optimal
- ✅ **Pattern Recognition** - Master algorithmic patterns
- ✅ **Interview Ready** - All difficulty levels covered

### **Key Algorithmic Patterns Mastered:**
1. **Two Pointers** - Efficient array/string processing
2. **Sliding Window** - Subarray/substring optimization
3. **Binary Search** - Search space reduction
4. **Dynamic Programming** - All major patterns
5. **Graph Algorithms** - Complete graph theory
6. **Tree Traversals** - All traversal techniques
7. **Greedy Algorithms** - Optimization strategies
8. **Backtracking** - Exhaustive search with pruning
9. **Bit Manipulation** - Low-level optimizations
10. **Stack/Queue** - Linear data structure applications

### **Problem-Solving Frameworks:**
- **Time Complexity Analysis** - Big O optimization
- **Space Complexity** - Memory-efficient solutions
- **Edge Case Handling** - Robust implementations
- **Code Quality** - Clean, readable Java code
- **Testing Strategy** - Comprehensive test cases

### **Interview Preparation Benefits:**
- **Company-Agnostic** - Covers all major tech companies
- **Difficulty Progressive** - Easy to hard problem gradation
- **Real Interview Questions** - Actual problems from FAANG
- **Optimization Focus** - Multiple solution approaches
- **Comprehensive Coverage** - No algorithmic gaps

---

## 🎯 **Next Steps for Mastery:**

1. **Practice Implementation** - Code all solutions from scratch
2. **Time Complexity Mastery** - Analyze every solution
3. **Pattern Recognition** - Identify problem types quickly
4. **Mock Interviews** - Practice explaining solutions
5. **Company-Specific Prep** - Focus on target company patterns

---

**🎉 Congratulations! You now have complete coverage of all Love Babbar 450 questions with optimized Java solutions and comprehensive theory. This collection provides everything needed for coding interview success at any major tech company!**

---

*This document serves as your complete reference for Love Babbar's 450 DSA questions with detailed Java implementations, multiple solution approaches, and thorough theoretical explanations.*
