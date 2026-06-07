# 💎 Love Babbar 450 DSA Questions - Complete Cheat Sheet

## 📋 Table of Contents
- [Array Problems (1-36)](#array-problems-1-36)
- [Matrix Problems (37-46)](#matrix-problems-37-46)
- [String Problems (47-75)](#string-problems-47-75)
- [Searching & Sorting (76-121)](#searching--sorting-76-121)
- [Linked List (122-158)](#linked-list-122-158)
- [Binary Trees (159-188)](#binary-trees-159-188)
- [Binary Search Trees (189-210)](#binary-search-trees-189-210)
- [Greedy (211-240)](#greedy-211-240)
- [Backtracking (241-264)](#backtracking-241-264)
- [Stacks and Queues (265-294)](#stacks-and-queues-265-294)
- [Heap (295-314)](#heap-295-314)
- [Graph (315-344)](#graph-315-344)
- [Trie (345-350)](#trie-345-350)
- [Dynamic Programming (351-423)](#dynamic-programming-351-423)
- [Bit Manipulation (424-450)](#bit-manipulation-424-450)

---

## Array Problems (1-36)

### 1. Reverse the Array
**Problem**: Reverse an array of integers
**Difficulty**: Easy

**Approach**: Two pointers from both ends
```cpp
void reverseArray(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    
    while (left < right) {
        swap(arr[left], arr[right]);
        left++;
        right--;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 2. Find Maximum and Minimum in Array
**Problem**: Find max and min elements in array
**Difficulty**: Easy

**Approach**: Single pass with comparison
```cpp
pair<int, int> getMinMax(vector<int>& arr) {
    int minVal = arr[0], maxVal = arr[0];
    
    for (int i = 1; i < arr.size(); i++) {
        minVal = min(minVal, arr[i]);
        maxVal = max(maxVal, arr[i]);
    }
    
    return {minVal, maxVal};
}
```
**Time**: O(n), **Space**: O(1)

---

### 3. Find Kth Smallest Element
**Problem**: [LeetCode 215](https://leetcode.com/problems/kth-largest-element-in-an-array/)
**Difficulty**: Medium

**Approach**: QuickSelect Algorithm
```cpp
int quickSelect(vector<int>& nums, int left, int right, int k) {
    if (left == right) return nums[left];
    
    int pivotIndex = partition(nums, left, right);
    
    if (k == pivotIndex) {
        return nums[k];
    } else if (k < pivotIndex) {
        return quickSelect(nums, left, pivotIndex - 1, k);
    } else {
        return quickSelect(nums, pivotIndex + 1, right, k);
    }
}

int partition(vector<int>& nums, int left, int right) {
    int pivot = nums[right];
    int i = left;
    
    for (int j = left; j < right; j++) {
        if (nums[j] <= pivot) {
            swap(nums[i], nums[j]);
            i++;
        }
    }
    
    swap(nums[i], nums[right]);
    return i;
}

int findKthSmallest(vector<int>& arr, int k) {
    return quickSelect(arr, 0, arr.size() - 1, k - 1);
}
```
**Time**: O(n) average, O(n²) worst, **Space**: O(1)

---

### 4. Sort 0s, 1s, and 2s (Dutch Flag)
**Problem**: [LeetCode 75](https://leetcode.com/problems/sort-colors/)
**Difficulty**: Medium

**Approach**: Three pointers
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
**Time**: O(n), **Space**: O(1)

---

### 5. Move Negative Numbers to Beginning
**Problem**: Move all negative numbers to beginning
**Difficulty**: Easy

**Approach**: Two pointers partition
```cpp
void moveNegatives(vector<int>& arr) {
    int left = 0;
    
    for (int right = 0; right < arr.size(); right++) {
        if (arr[right] < 0) {
            if (left != right) {
                swap(arr[left], arr[right]);
            }
            left++;
        }
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 6. Union of Two Arrays
**Problem**: Find union of two sorted arrays
**Difficulty**: Easy

**Approach**: Two pointers merge
```cpp
vector<int> findUnion(vector<int>& arr1, vector<int>& arr2) {
    vector<int> result;
    int i = 0, j = 0;
    
    while (i < arr1.size() && j < arr2.size()) {
        if (arr1[i] < arr2[j]) {
            if (result.empty() || result.back() != arr1[i]) {
                result.push_back(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (result.empty() || result.back() != arr2[j]) {
                result.push_back(arr2[j]);
            }
            j++;
        } else {
            if (result.empty() || result.back() != arr1[i]) {
                result.push_back(arr1[i]);
            }
            i++;
            j++;
        }
    }
    
    while (i < arr1.size()) {
        if (result.empty() || result.back() != arr1[i]) {
            result.push_back(arr1[i]);
        }
        i++;
    }
    
    while (j < arr2.size()) {
        if (result.empty() || result.back() != arr2[j]) {
            result.push_back(arr2[j]);
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

**Approach**: Store last element and shift
```cpp
void rotate(vector<int>& arr) {
    if (arr.size() <= 1) return;
    
    int last = arr.back();
    
    for (int i = arr.size() - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    
    arr[0] = last;
}
```
**Time**: O(n), **Space**: O(1)

---

### 8. Kadane's Algorithm
**Problem**: [LeetCode 53](https://leetcode.com/problems/maximum-subarray/)
**Difficulty**: Easy

**Approach**: Dynamic programming approach
```cpp
int maxSubArray(vector<int>& nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        maxEndingHere = max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```
**Time**: O(n), **Space**: O(1)

---

### 9. Minimize the Heights II
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/minimize-the-heights3351/1)
**Difficulty**: Medium

**Approach**: Sort and try all possible modifications
```cpp
int getMinDiff(vector<int>& arr, int n, int k) {
    sort(arr.begin(), arr.end());
    
    int ans = arr[n-1] - arr[0];
    int small = arr[0] + k;
    int big = arr[n-1] - k;
    
    if (small > big) swap(small, big);
    
    for (int i = 1; i < n-1; i++) {
        int subtract = arr[i] - k;
        int add = arr[i] + k;
        
        if (subtract >= small || add <= big) continue;
        
        if (big - subtract <= add - small) {
            small = subtract;
        } else {
            big = add;
        }
    }
    
    return min(ans, big - small);
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 10. Minimum Number of Jumps
**Problem**: [LeetCode 45](https://leetcode.com/problems/jump-game-ii/)
**Difficulty**: Medium

**Approach**: Greedy approach
```cpp
int jump(vector<int>& nums) {
    int jumps = 0;
    int currentEnd = 0;
    int farthest = 0;
    
    for (int i = 0; i < nums.size() - 1; i++) {
        farthest = max(farthest, i + nums[i]);
        
        if (i == currentEnd) {
            jumps++;
            currentEnd = farthest;
        }
    }
    
    return jumps;
}
```
**Time**: O(n), **Space**: O(1)

---

### 11. Find Duplicate Number
**Problem**: [LeetCode 287](https://leetcode.com/problems/find-the-duplicate-number/)
**Difficulty**: Medium

**Approach**: Floyd's Cycle Detection
```cpp
int findDuplicate(vector<int>& nums) {
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
```
**Time**: O(n), **Space**: O(1)

---

### 12. Merge Without Extra Space
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/merge-two-sorted-arrays-1587115620/1)
**Difficulty**: Hard

**Approach**: Gap method
```cpp
void merge(vector<int>& arr1, vector<int>& arr2) {
    int n = arr1.size();
    int m = arr2.size();
    int gap = ceil((double)(n + m) / 2);
    
    while (gap > 0) {
        int i = 0;
        int j = gap;
        
        while (j < (n + m)) {
            if (j < n) {
                // Both in arr1
                if (arr1[i] > arr1[j]) {
                    swap(arr1[i], arr1[j]);
                }
            } else if (i < n) {
                // i in arr1, j in arr2
                if (arr1[i] > arr2[j - n]) {
                    swap(arr1[i], arr2[j - n]);
                }
            } else {
                // Both in arr2
                if (arr2[i - n] > arr2[j - n]) {
                    swap(arr2[i - n], arr2[j - n]);
                }
            }
            i++;
            j++;
        }
        
        if (gap == 1) break;
        gap = ceil((double)gap / 2);
    }
}
```
**Time**: O((n+m) log(n+m)), **Space**: O(1)

---

### 13. Inversion Count
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1)
**Difficulty**: Medium

**Approach**: Merge Sort approach
```cpp
long long mergeAndCount(vector<int>& arr, int temp[], int left, int mid, int right) {
    int i = left, j = mid + 1, k = left;
    long long invCount = 0;
    
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            invCount += (mid - i + 1);
        }
    }
    
    while (i <= mid) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = left; i <= right; i++) {
        arr[i] = temp[i];
    }
    
    return invCount;
}

long long mergeSortAndCount(vector<int>& arr, int temp[], int left, int right) {
    long long invCount = 0;
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        invCount += mergeSortAndCount(arr, temp, left, mid);
        invCount += mergeSortAndCount(arr, temp, mid + 1, right);
        invCount += mergeAndCount(arr, temp, left, mid, right);
    }
    return invCount;
}

long long getInvCount(vector<int>& arr) {
    int n = arr.size();
    int* temp = new int[n];
    long long result = mergeSortAndCount(arr, temp, 0, n - 1);
    delete[] temp;
    return result;
}
```
**Time**: O(n log n), **Space**: O(n)

---

### 14. Best Time to Buy and Sell Stock
**Problem**: [LeetCode 121](https://leetcode.com/problems/best-time-to-buy-and-sell-stock/)
**Difficulty**: Easy

**Approach**: Track minimum price and maximum profit
```cpp
int maxProfit(vector<int>& prices) {
    int minPrice = prices[0];
    int maxProfit = 0;
    
    for (int i = 1; i < prices.size(); i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = max(maxProfit, prices[i] - minPrice);
        }
    }
    
    return maxProfit;
}
```
**Time**: O(n), **Space**: O(1)

---

### 15. Count Pairs with Given Sum
**Problem**: Count pairs in array with sum equal to given value
**Difficulty**: Easy

**Approach**: Hash map approach
```cpp
int getPairsCount(vector<int>& arr, int sum) {
    unordered_map<int, int> freq;
    int count = 0;
    
    for (int num : arr) {
        int complement = sum - num;
        if (freq.find(complement) != freq.end()) {
            count += freq[complement];
        }
        freq[num]++;
    }
    
    return count;
}
```
**Time**: O(n), **Space**: O(n)

---

### 16. Common Elements in Three Arrays
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/common-elements1132/1)
**Difficulty**: Easy

**Approach**: Three pointers
```cpp
vector<int> commonElements(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) {
    vector<int> result;
    int i = 0, j = 0, k = 0;
    
    while (i < arr1.size() && j < arr2.size() && k < arr3.size()) {
        if (arr1[i] == arr2[j] && arr2[j] == arr3[k]) {
            // Skip duplicates
            if (result.empty() || result.back() != arr1[i]) {
                result.push_back(arr1[i]);
            }
            i++; j++; k++;
        } else if (arr1[i] < arr2[j]) {
            i++;
        } else if (arr2[j] < arr3[k]) {
            j++;
        } else {
            k++;
        }
    }
    
    return result;
}
```
**Time**: O(n1 + n2 + n3), **Space**: O(1)

---

### 17. Rearrange Array Alternately
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/array-of-alternate-ve-and-ve-nos1401/1)
**Difficulty**: Medium

**Approach**: Two pointers approach
```cpp
void rearrange(vector<int>& arr) {
    vector<int> pos, neg;
    
    // Separate positive and negative numbers
    for (int num : arr) {
        if (num >= 0) {
            pos.push_back(num);
        } else {
            neg.push_back(num);
        }
    }
    
    int i = 0, p = 0, n = 0;
    
    // Alternate placement
    while (p < pos.size() && n < neg.size()) {
        if (i % 2 == 0) {
            arr[i] = pos[p++];
        } else {
            arr[i] = neg[n++];
        }
        i++;
    }
    
    // Fill remaining elements
    while (p < pos.size()) {
        arr[i++] = pos[p++];
    }
    
    while (n < neg.size()) {
        arr[i++] = neg[n++];
    }
}
```
**Time**: O(n), **Space**: O(n)

---

### 18. Subarray with 0 Sum
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/subarray-with-0-sum-1587115621/1)
**Difficulty**: Easy

**Approach**: Prefix sum with hash set
```cpp
bool subArrayExists(vector<int>& arr) {
    unordered_set<int> prefixSums;
    int sum = 0;
    
    for (int num : arr) {
        sum += num;
        
        // If sum is 0 or sum already exists
        if (sum == 0 || prefixSums.find(sum) != prefixSums.end()) {
            return true;
        }
        
        prefixSums.insert(sum);
    }
    
    return false;
}
```
**Time**: O(n), **Space**: O(n)

---

### 19. Factorial of Large Number
**Problem**: Calculate factorial of a large number
**Difficulty**: Medium

**Approach**: Use vector to store digits
```cpp
void multiply(vector<int>& result, int num) {
    int carry = 0;
    
    for (int i = 0; i < result.size(); i++) {
        int prod = result[i] * num + carry;
        result[i] = prod % 10;
        carry = prod / 10;
    }
    
    while (carry) {
        result.push_back(carry % 10);
        carry /= 10;
    }
}

vector<int> factorial(int n) {
    vector<int> result;
    result.push_back(1);
    
    for (int i = 2; i <= n; i++) {
        multiply(result, i);
    }
    
    reverse(result.begin(), result.end());
    return result;
}
```
**Time**: O(n²), **Space**: O(n)

---

### 20. Maximum Product Subarray
**Problem**: [LeetCode 152](https://leetcode.com/problems/maximum-product-subarray/)
**Difficulty**: Medium

**Approach**: Track both max and min products
```cpp
int maxProduct(vector<int>& nums) {
    int maxSoFar = nums[0];
    int maxEndingHere = nums[0];
    int minEndingHere = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        int temp = maxEndingHere;
        
        maxEndingHere = max({nums[i], maxEndingHere * nums[i], minEndingHere * nums[i]});
        minEndingHere = min({nums[i], temp * nums[i], minEndingHere * nums[i]});
        
        maxSoFar = max(maxSoFar, maxEndingHere);
    }
    
    return maxSoFar;
}
```
**Time**: O(n), **Space**: O(1)

---

### 21. Longest Consecutive Subsequence
**Problem**: [LeetCode 128](https://leetcode.com/problems/longest-consecutive-sequence/)
**Difficulty**: Medium

**Approach**: Hash set for O(1) lookups
```cpp
int longestConsecutive(vector<int>& nums) {
    unordered_set<int> numSet(nums.begin(), nums.end());
    int longestStreak = 0;
    
    for (int num : numSet) {
        // Only start counting from the beginning of a sequence
        if (numSet.find(num - 1) == numSet.end()) {
            int currentNum = num;
            int currentStreak = 1;
            
            while (numSet.find(currentNum + 1) != numSet.end()) {
                currentNum++;
                currentStreak++;
            }
            
            longestStreak = max(longestStreak, currentStreak);
        }
    }
    
    return longestStreak;
}
```
**Time**: O(n), **Space**: O(n)

---

### 22. Elements More Than n/k Times
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/count-element-occurences/1)
**Difficulty**: Medium

**Approach**: Modified Boyer-Moore Algorithm
```cpp
vector<int> moreThanNdK(vector<int>& arr, int k) {
    int n = arr.size();
    unordered_map<int, int> candidates;
    
    // Phase 1: Find potential candidates
    for (int num : arr) {
        if (candidates.find(num) != candidates.end()) {
            candidates[num]++;
        } else if (candidates.size() < k - 1) {
            candidates[num] = 1;
        } else {
            for (auto it = candidates.begin(); it != candidates.end();) {
                it->second--;
                if (it->second == 0) {
                    it = candidates.erase(it);
                } else {
                    ++it;
                }
            }
        }
    }
    
    // Phase 2: Verify candidates
    vector<int> result;
    for (auto& p : candidates) {
        int count = 0;
        for (int num : arr) {
            if (num == p.first) count++;
        }
        if (count > n / k) {
            result.push_back(p.first);
        }
    }
    
    return result;
}
```
**Time**: O(nk), **Space**: O(k)

---

### 23. Maximum Profit by Buying and Selling Stock Multiple Times
**Problem**: [LeetCode 122](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/)
**Difficulty**: Easy

**Approach**: Greedy - capture all positive differences
```cpp
int maxProfit(vector<int>& prices) {
    int profit = 0;
    
    for (int i = 1; i < prices.size(); i++) {
        if (prices[i] > prices[i - 1]) {
            profit += prices[i] - prices[i - 1];
        }
    }
    
    return profit;
}
```
**Time**: O(n), **Space**: O(1)

---

### 24. Array Subset of Another Array
**Problem**: Check if array is subset of another array
**Difficulty**: Easy

**Approach**: Hash set approach
```cpp
bool isSubset(vector<int>& arr1, vector<int>& arr2) {
    unordered_set<int> set1(arr1.begin(), arr1.end());
    
    for (int num : arr2) {
        if (set1.find(num) == set1.end()) {
            return false;
        }
    }
    
    return true;
}
```
**Time**: O(m + n), **Space**: O(m)

---

### 25. Triplet Sum in Array
**Problem**: [LeetCode 15](https://leetcode.com/problems/3sum/)
**Difficulty**: Medium

**Approach**: Sort + Two pointers
```cpp
vector<vector<int>> threeSum(vector<int>& nums) {
    vector<vector<int>> result;
    int n = nums.size();
    
    if (n < 3) return result;
    
    sort(nums.begin(), nums.end());
    
    for (int i = 0; i < n - 2; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        
        int left = i + 1, right = n - 1;
        
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            
            if (sum == 0) {
                result.push_back({nums[i], nums[left], nums[right]});
                
                while (left < right && nums[left] == nums[left + 1]) left++;
                while (left < right && nums[right] == nums[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }
    
    return result;
}
```
**Time**: O(n²), **Space**: O(1)

---

### 26. Trapping Rain Water
**Problem**: [LeetCode 42](https://leetcode.com/problems/trapping-rain-water/)
**Difficulty**: Hard

**Approach**: Two pointers
```cpp
int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0;
    int water = 0;
    
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                water += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                water += rightMax - height[right];
            }
            right--;
        }
    }
    
    return water;
}
```
**Time**: O(n), **Space**: O(1)

---

### 27. Chocolate Distribution Problem
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/chocolate-distribution-problem3825/1)
**Difficulty**: Easy

**Approach**: Sort and find minimum difference in window
```cpp
int findMinDiff(vector<int>& arr, int m) {
    if (m == 0 || arr.size() == 0) return 0;
    if (arr.size() < m) return -1;
    
    sort(arr.begin(), arr.end());
    
    int minDiff = INT_MAX;
    
    for (int i = 0; i + m - 1 < arr.size(); i++) {
        int diff = arr[i + m - 1] - arr[i];
        minDiff = min(minDiff, diff);
    }
    
    return minDiff;
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 28. Smallest Subarray with Sum Greater than X
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/smallest-subarray-with-sum-greater-than-x0651/1)
**Difficulty**: Medium

**Approach**: Sliding window
```cpp
int smallestSubWithSum(vector<int>& arr, int x) {
    int n = arr.size();
    int minLength = n + 1;
    int left = 0, sum = 0;
    
    for (int right = 0; right < n; right++) {
        sum += arr[right];
        
        while (sum > x && left <= right) {
            minLength = min(minLength, right - left + 1);
            sum -= arr[left];
            left++;
        }
    }
    
    return (minLength == n + 1) ? 0 : minLength;
}
```
**Time**: O(n), **Space**: O(1)

---

### 29. Three Way Partitioning
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/three-way-partitioning/1)
**Difficulty**: Medium

**Approach**: Dutch flag algorithm modification
```cpp
void threeWayPartition(vector<int>& arr, int a, int b) {
    int low = 0, mid = 0, high = arr.size() - 1;
    
    while (mid <= high) {
        if (arr[mid] < a) {
            swap(arr[low], arr[mid]);
            low++;
            mid++;
        } else if (arr[mid] > b) {
            swap(arr[mid], arr[high]);
            high--;
        } else {
            mid++;
        }
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 30. Minimum Swaps to Sort
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/minimum-swaps/1)
**Difficulty**: Medium

**Approach**: Cycle detection in permutation
```cpp
int minSwaps(vector<int>& nums) {
    int n = nums.size();
    vector<pair<int, int>> arrPos(n);
    
    for (int i = 0; i < n; i++) {
        arrPos[i] = {nums[i], i};
    }
    
    sort(arrPos.begin(), arrPos.end());
    
    vector<bool> visited(n, false);
    int swaps = 0;
    
    for (int i = 0; i < n; i++) {
        if (visited[i] || arrPos[i].second == i) continue;
        
        int cycleSize = 0;
        int j = i;
        
        while (!visited[j]) {
            visited[j] = true;
            j = arrPos[j].second;
            cycleSize++;
        }
        
        if (cycleSize > 0) {
            swaps += (cycleSize - 1);
        }
    }
    
    return swaps;
}
```
**Time**: O(n log n), **Space**: O(n)

---

### 31. Palindromic Array
**Problem**: Check if array can form palindrome
**Difficulty**: Easy

**Approach**: Count odd frequencies
```cpp
bool canFormPalindrome(vector<int>& arr) {
    unordered_map<int, int> freq;
    
    for (int num : arr) {
        freq[num]++;
    }
    
    int oddCount = 0;
    for (auto& p : freq) {
        if (p.second % 2 == 1) {
            oddCount++;
        }
    }
    
    return oddCount <= 1;
}
```
**Time**: O(n), **Space**: O(n)

---

### 32. Median of Two Sorted Arrays
**Problem**: [LeetCode 4](https://leetcode.com/problems/median-of-two-sorted-arrays/)
**Difficulty**: Hard

**Approach**: Binary search
```cpp
double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) {
        return findMedianSortedArrays(nums2, nums1);
    }
    
    int m = nums1.size(), n = nums2.size();
    int left = 0, right = m;
    
    while (left <= right) {
        int cut1 = (left + right) / 2;
        int cut2 = (m + n + 1) / 2 - cut1;
        
        int left1 = (cut1 == 0) ? INT_MIN : nums1[cut1 - 1];
        int left2 = (cut2 == 0) ? INT_MIN : nums2[cut2 - 1];
        
        int right1 = (cut1 == m) ? INT_MAX : nums1[cut1];
        int right2 = (cut2 == n) ? INT_MAX : nums2[cut2];
        
        if (left1 <= right2 && left2 <= right1) {
            if ((m + n) % 2 == 0) {
                return (max(left1, left2) + min(right1, right2)) / 2.0;
            } else {
                return max(left1, left2);
            }
        } else if (left1 > right2) {
            right = cut1 - 1;
        } else {
            left = cut1 + 1;
        }
    }
    
    return 1.0;
}
```
**Time**: O(log(min(m,n))), **Space**: O(1)

---

### 33. Majority Element
**Problem**: [LeetCode 169](https://leetcode.com/problems/majority-element/)
**Difficulty**: Easy

**Approach**: Boyer-Moore Voting Algorithm
```cpp
int majorityElement(vector<int>& nums) {
    int candidate = nums[0];
    int count = 1;
    
    for (int i = 1; i < nums.size(); i++) {
        if (count == 0) {
            candidate = nums[i];
            count = 1;
        } else if (nums[i] == candidate) {
            count++;
        } else {
            count--;
        }
    }
    
    return candidate;
}
```
**Time**: O(n), **Space**: O(1)

---

### 34. Two Numbers with Odd Occurrences
**Problem**: Find two numbers that appear odd number of times
**Difficulty**: Medium

**Approach**: XOR properties
```cpp
vector<int> twoOddNum(vector<int>& arr) {
    int xorAll = 0;
    
    // XOR all elements
    for (int num : arr) {
        xorAll ^= num;
    }
    
    // Find rightmost set bit
    int rightmostSetBit = xorAll & (-xorAll);
    
    int x = 0, y = 0;
    
    // Divide numbers into two groups based on set bit
    for (int num : arr) {
        if (num & rightmostSetBit) {
            x ^= num;
        } else {
            y ^= num;
        }
    }
    
    return {max(x, y), min(x, y)};
}
```
**Time**: O(n), **Space**: O(1)

---

### 35. Minimum Swaps and K Together
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/minimum-swaps-required-to-bring-all-elements-less-than-or-equal-to-k-together4847/1)
**Difficulty**: Medium

**Approach**: Sliding window
```cpp
int minSwap(vector<int>& arr, int k) {
    int n = arr.size();
    
    // Count elements <= k
    int count = 0;
    for (int num : arr) {
        if (num <= k) count++;
    }
    
    if (count == 0) return 0;
    
    // Count bad elements in first window
    int bad = 0;
    for (int i = 0; i < count; i++) {
        if (arr[i] > k) bad++;
    }
    
    int minSwaps = bad;
    
    // Slide the window
    for (int i = count; i < n; i++) {
        if (arr[i - count] > k) bad--;
        if (arr[i] > k) bad++;
        minSwaps = min(minSwaps, bad);
    }
    
    return minSwaps;
}
```
**Time**: O(n), **Space**: O(1)

---

### 36. Smallest Positive Missing Number
**Problem**: [LeetCode 41](https://leetcode.com/problems/first-missing-positive/)
**Difficulty**: Hard

**Approach**: Cyclic sort approach
```cpp
int firstMissingPositive(vector<int>& nums) {
    int n = nums.size();
    
    // Place each positive number at its correct position
    for (int i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] != nums[i]) {
            swap(nums[i], nums[nums[i] - 1]);
        }
    }
    
    // Find first missing positive
    for (int i = 0; i < n; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    
    return n + 1;
}
```
**Time**: O(n), **Space**: O(1)

---

## Matrix Problems (37-46)

### 37. Spiral Matrix
**Problem**: [LeetCode 54](https://leetcode.com/problems/spiral-matrix/)
**Difficulty**: Medium

**Approach**: Boundary traversal
```cpp
vector<int> spiralOrder(vector<vector<int>>& matrix) {
    vector<int> result;
    if (matrix.empty()) return result;
    
    int top = 0, bottom = matrix.size() - 1;
    int left = 0, right = matrix[0].size() - 1;
    
    while (top <= bottom && left <= right) {
        // Traverse right
        for (int col = left; col <= right; col++) {
            result.push_back(matrix[top][col]);
        }
        top++;
        
        // Traverse down
        for (int row = top; row <= bottom; row++) {
            result.push_back(matrix[row][right]);
        }
        right--;
        
        // Traverse left
        if (top <= bottom) {
            for (int col = right; col >= left; col--) {
                result.push_back(matrix[bottom][col]);
            }
            bottom--;
        }
        
        // Traverse up
        if (left <= right) {
            for (int row = bottom; row >= top; row--) {
                result.push_back(matrix[row][left]);
            }
            left++;
        }
    }
    
    return result;
}
```
**Time**: O(m×n), **Space**: O(1)

---

### 38. Search in Row-wise and Column-wise Sorted Matrix
**Problem**: [LeetCode 240](https://leetcode.com/problems/search-a-2d-matrix-ii/)
**Difficulty**: Medium

**Approach**: Start from top-right corner
```cpp
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.empty() || matrix[0].empty()) return false;
    
    int row = 0;
    int col = matrix[0].size() - 1;
    
    while (row < matrix.size() && col >= 0) {
        if (matrix[row][col] == target) {
            return true;
        } else if (matrix[row][col] > target) {
            col--;
        } else {
            row++;
        }
    }
    
    return false;
}
```
**Time**: O(m + n), **Space**: O(1)

---

### 39. Find Median in Row-wise Sorted Matrix
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1)
**Difficulty**: Medium

**Approach**: Binary search on answer
```cpp
int countSmallerOrEqual(vector<int>& row, int target) {
    int left = 0, right = row.size() - 1;
    int count = 0;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (row[mid] <= target) {
            count = mid + 1;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return count;
}

int median(vector<vector<int>>& matrix) {
    int m = matrix.size();
    int n = matrix[0].size();
    
    int minVal = matrix[0][0];
    int maxVal = matrix[0][n - 1];
    
    for (int i = 1; i < m; i++) {
        minVal = min(minVal, matrix[i][0]);
        maxVal = max(maxVal, matrix[i][n - 1]);
    }
    
    int desired = (m * n + 1) / 2;
    
    while (minVal < maxVal) {
        int mid = minVal + (maxVal - minVal) / 2;
        int count = 0;
        
        for (int i = 0; i < m; i++) {
            count += countSmallerOrEqual(matrix[i], mid);
        }
        
        if (count < desired) {
            minVal = mid + 1;
        } else {
            maxVal = mid;
        }
    }
    
    return minVal;
}
```
**Time**: O(m log n log(max-min)), **Space**: O(1)

---

### 40. Row with Maximum 1s
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/row-with-max-1s0023/1)
**Difficulty**: Medium

**Approach**: Start from top-right corner
```cpp
int rowWithMax1s(vector<vector<int>>& arr) {
    int m = arr.size();
    int n = arr[0].size();
    
    int row = 0, col = n - 1;
    int maxRowIndex = -1;
    
    while (row < m && col >= 0) {
        if (arr[row][col] == 1) {
            maxRowIndex = row;
            col--;
        } else {
            row++;
        }
    }
    
    return maxRowIndex;
}
```
**Time**: O(m + n), **Space**: O(1)

---

### 41. Print Elements in Sorted Order Using O(1) Extra Space
**Problem**: Sort matrix elements in row-major order
**Difficulty**: Hard

**Approach**: Selection sort with 2D indexing
```cpp
void sortMatrix(vector<vector<int>>& matrix) {
    int m = matrix.size();
    int n = matrix[0].size();
    
    for (int i = 0; i < m * n - 1; i++) {
        int minIdx = i;
        
        for (int j = i + 1; j < m * n; j++) {
            if (matrix[j / n][j % n] < matrix[minIdx / n][minIdx % n]) {
                minIdx = j;
            }
        }
        
        swap(matrix[i / n][i % n], matrix[minIdx / n][minIdx % n]);
    }
}
```
**Time**: O((mn)²), **Space**: O(1)

---

### 42. Maximum Size Rectangle
**Problem**: [LeetCode 85](https://leetcode.com/problems/maximal-rectangle/)
**Difficulty**: Hard

**Approach**: Use largest rectangle in histogram for each row
```cpp
int largestRectangleArea(vector<int>& heights) {
    stack<int> s;
    int maxArea = 0;
    int n = heights.size();
    
    for (int i = 0; i <= n; i++) {
        int h = (i == n) ? 0 : heights[i];
        
        while (!s.empty() && h < heights[s.top()]) {
            int height = heights[s.top()];
            s.pop();
            
            int width = s.empty() ? i : i - s.top() - 1;
            maxArea = max(maxArea, height * width);
        }
        
        s.push(i);
    }
    
    return maxArea;
}

int maximalRectangle(vector<vector<char>>& matrix) {
    if (matrix.empty()) return 0;
    
    int m = matrix.size();
    int n = matrix[0].size();
    vector<int> heights(n, 0);
    int maxArea = 0;
    
    for (int i = 0; i < m; i++) {
        for (int j = 0; j < n; j++) {
            heights[j] = (matrix[i][j] == '1') ? heights[j] + 1 : 0;
        }
        
        maxArea = max(maxArea, largestRectangleArea(heights));
    }
    
    return maxArea;
}
```
**Time**: O(m×n), **Space**: O(n)

---

### 43. Find Specific Pair in Matrix
**Problem**: Find maximum value of mat[c][d] - mat[a][b] where c > a and d > b
**Difficulty**: Medium

**Approach**: Preprocess matrix to find maximum suffix
```cpp
int findMaxValue(vector<vector<int>>& mat) {
    int m = mat.size();
    int n = mat[0].size();
    
    // Create matrix to store maximum value from (i,j) to bottom-right
    vector<vector<int>> maxVal(m, vector<int>(n));
    
    // Fill last row and column
    maxVal[m-1][n-1] = mat[m-1][n-1];
    
    for (int j = n-2; j >= 0; j--) {
        maxVal[m-1][j] = max(mat[m-1][j], maxVal[m-1][j+1]);
    }
    
    for (int i = m-2; i >= 0; i--) {
        maxVal[i][n-1] = max(mat[i][n-1], maxVal[i+1][n-1]);
    }
    
    // Fill rest of the matrix
    for (int i = m-2; i >= 0; i--) {
        for (int j = n-2; j >= 0; j--) {
            maxVal[i][j] = max({mat[i][j], maxVal[i][j+1], maxVal[i+1][j]});
        }
    }
    
    int maxDiff = INT_MIN;
    
    for (int i = 0; i < m-1; i++) {
        for (int j = 0; j < n-1; j++) {
            maxDiff = max(maxDiff, maxVal[i+1][j+1] - mat[i][j]);
        }
    }
    
    return maxDiff;
}
```
**Time**: O(m×n), **Space**: O(m×n)

---

### 44. Rotate Matrix by 90 Degrees
**Problem**: [LeetCode 48](https://leetcode.com/problems/rotate-image/)
**Difficulty**: Medium

**Approach**: Transpose then reverse each row
```cpp
void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    
    // Transpose
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    
    // Reverse each row
    for (int i = 0; i < n; i++) {
        reverse(matrix[i].begin(), matrix[i].end());
    }
}
```
**Time**: O(n²), **Space**: O(1)

---

### 45. Kth Element in Matrix
**Problem**: [LeetCode 378](https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/)
**Difficulty**: Medium

**Approach**: Binary search on answer
```cpp
int countSmallerOrEqual(vector<vector<int>>& matrix, int target) {
    int count = 0;
    int n = matrix.size();
    int row = n - 1, col = 0;
    
    while (row >= 0 && col < n) {
        if (matrix[row][col] <= target) {
            count += row + 1;
            col++;
        } else {
            row--;
        }
    }
    
    return count;
}

int kthSmallest(vector<vector<int>>& matrix, int k) {
    int n = matrix.size();
    int left = matrix[0][0];
    int right = matrix[n-1][n-1];
    
    while (left < right) {
        int mid = left + (right - left) / 2;
        int count = countSmallerOrEqual(matrix, mid);
        
        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    
    return left;
}
```
**Time**: O(n log(max-min)), **Space**: O(1)

---

### 46. Common Elements in All Rows
**Problem**: Find common elements in all rows of matrix
**Difficulty**: Medium

**Approach**: Hash map to count occurrences
```cpp
vector<int> findCommonElements(vector<vector<int>>& matrix) {
    int m = matrix.size();
    int n = matrix[0].size();
    unordered_map<int, int> freq;
    
    // Count frequency of each element in first row
    for (int j = 0; j < n; j++) {
        freq[matrix[0][j]]++;
    }
    
    // For remaining rows, mark elements present in first row
    for (int i = 1; i < m; i++) {
        unordered_set<int> seen;
        
        for (int j = 0; j < n; j++) {
            if (freq.find(matrix[i][j]) != freq.end() && seen.find(matrix[i][j]) == seen.end()) {
                freq[matrix[i][j]]++;
                seen.insert(matrix[i][j]);
            }
        }
    }
    
    vector<int> result;
    for (auto& p : freq) {
        if (p.second == m) {
            result.push_back(p.first);
        }
    }
    
    sort(result.begin(), result.end());
    return result;
}
```
**Time**: O(m×n), **Space**: O(n)

---

## String Problems (47-75)

### 47. Reverse a String
**Problem**: Reverse characters in a string
**Difficulty**: Easy

**Approach**: Two pointers
```cpp
void reverseString(vector<char>& s) {
    int left = 0, right = s.size() - 1;
    
    while (left < right) {
        swap(s[left], s[right]);
        left++;
        right--;
    }
}
```
**Time**: O(n), **Space**: O(1)

---

### 48. Check Palindrome
**Problem**: Check if string is palindrome
**Difficulty**: Easy

**Approach**: Two pointers ignoring non-alphanumeric
```cpp
bool isPalindrome(string s) {
    int left = 0, right = s.length() - 1;
    
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        
        if (tolower(s[left]) != tolower(s[right])) {
            return false;
        }
        
        left++;
        right--;
    }
    
    return true;
}
```
**Time**: O(n), **Space**: O(1)

---

### 49. Find Duplicate Characters
**Problem**: Find all duplicate characters in string
**Difficulty**: Easy

**Approach**: Hash map frequency counting
```cpp
void findDuplicates(string str) {
    unordered_map<char, int> freq;
    
    for (char c : str) {
        freq[c]++;
    }
    
    cout << "Duplicate characters: ";
    for (auto& p : freq) {
        if (p.second > 1) {
            cout << p.first << " ";
        }
    }
}
```
**Time**: O(n), **Space**: O(1) - limited to 256 characters

---

### 50. Check if Strings are Rotation
**Problem**: Check if one string is rotation of another
**Difficulty**: Medium

**Approach**: Concatenate and search
```cpp
bool areRotations(string s1, string s2) {
    if (s1.length() != s2.length()) return false;
    
    string concat = s1 + s1;
    return concat.find(s2) != string::npos;
}
```
**Time**: O(n), **Space**: O(n)

---

### 51. Check if Strings are Shuffles
**Problem**: Check if third string is shuffle of two strings
**Difficulty**: Medium

**Approach**: Dynamic Programming
```cpp
bool isInterleave(string s1, string s2, string s3) {
    int m = s1.length(), n = s2.length(), l = s3.length();
    
    if (m + n != l) return false;
    
    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
    
    dp[0][0] = true;
    
    // Fill first row
    for (int j = 1; j <= n; j++) {
        dp[0][j] = dp[0][j-1] && (s2[j-1] == s3[j-1]);
    }
    
    // Fill first column
    for (int i = 1; i <= m; i++) {
        dp[i][0] = dp[i-1][0] && (s1[i-1] == s3[i-1]);
    }
    
    // Fill rest of the table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            dp[i][j] = (dp[i-1][j] && s1[i-1] == s3[i+j-1]) ||
                       (dp[i][j-1] && s2[j-1] == s3[i+j-1]);
        }
    }
    
    return dp[m][n];
}
```
**Time**: O(m×n), **Space**: O(m×n)

---

### 52. Count and Say
**Problem**: [LeetCode 38](https://leetcode.com/problems/count-and-say/)
**Difficulty**: Medium

**Approach**: Iterative string building
```cpp
string countAndSay(int n) {
    string result = "1";
    
    for (int i = 1; i < n; i++) {
        string next = "";
        int count = 1;
        char current = result[0];
        
        for (int j = 1; j < result.length(); j++) {
            if (result[j] == current) {
                count++;
            } else {
                next += to_string(count) + current;
                current = result[j];
                count = 1;
            }
        }
        
        next += to_string(count) + current;
        result = next;
    }
    
    return result;
}
```
**Time**: O(n × L) where L is length of string, **Space**: O(L)

---

### 53. Longest Palindromic Substring
**Problem**: [LeetCode 5](https://leetcode.com/problems/longest-palindromic-substring/)
**Difficulty**: Medium

**Approach**: Expand around centers
```cpp
string expandAroundCenter(string s, int left, int right) {
    while (left >= 0 && right < s.length() && s[left] == s[right]) {
        left--;
        right++;
    }
    return s.substr(left + 1, right - left - 1);
}

string longestPalindrome(string s) {
    if (s.empty()) return "";
    
    string longest = "";
    
    for (int i = 0; i < s.length(); i++) {
        // Odd length palindromes
        string odd = expandAroundCenter(s, i, i);
        if (odd.length() > longest.length()) {
            longest = odd;
        }
        
        // Even length palindromes
        string even = expandAroundCenter(s, i, i + 1);
        if (even.length() > longest.length()) {
            longest = even;
        }
    }
    
    return longest;
}
```
**Time**: O(n²), **Space**: O(1)

---

### 54. Longest Repeating Subsequence
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/longest-repeating-subsequence2004/1)
**Difficulty**: Medium

**Approach**: Dynamic Programming (LCS variant)
```cpp
int longestRepeatingSubsequence(string str) {
    int n = str.length();
    vector<vector<int>> dp(n + 1, vector<int>(n + 1, 0));
    
    for (int i = 1; i <= n; i++) {
        for (int j = 1; j <= n; j++) {
            if (str[i-1] == str[j-1] && i != j) {
                dp[i][j] = 1 + dp[i-1][j-1];
            } else {
                dp[i][j] = max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }
    
    return dp[n][n];
}
```
**Time**: O(n²), **Space**: O(n²)

---

### 55. Print All Subsequences
**Problem**: Print all subsequences of a string
**Difficulty**: Medium

**Approach**: Recursive backtracking
```cpp
void printSubsequences(string str, string current, int index) {
    if (index == str.length()) {
        cout << current << endl;
        return;
    }
    
    // Include current character
    printSubsequences(str, current + str[index], index + 1);
    
    // Exclude current character
    printSubsequences(str, current, index + 1);
}

void printAllSubsequences(string str) {
    printSubsequences(str, "", 0);
}
```
**Time**: O(2^n), **Space**: O(n) - recursion depth

---

### 56. Print All Permutations
**Problem**: [LeetCode 46](https://leetcode.com/problems/permutations/)
**Difficulty**: Medium

**Approach**: Backtracking with swapping
```cpp
void permuteHelper(vector<int>& nums, int start, vector<vector<int>>& result) {
    if (start == nums.size()) {
        result.push_back(nums);
        return;
    }
    
    for (int i = start; i < nums.size(); i++) {
        swap(nums[start], nums[i]);
        permuteHelper(nums, start + 1, result);
        swap(nums[start], nums[i]); // backtrack
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;
    permuteHelper(nums, 0, result);
    return result;
}
```
**Time**: O(n! × n), **Space**: O(n)

---

### 57. Split Binary String
**Problem**: Split string into equal 0s and 1s
**Difficulty**: Medium

**Approach**: Count balance and track splits
```cpp
int maxBalancedSubstrings(string s) {
    int count = 0;
    int balance = 0;
    
    for (char c : s) {
        if (c == '0') {
            balance--;
        } else {
            balance++;
        }
        
        if (balance == 0) {
            count++;
        }
    }
    
    return count;
}
```
**Time**: O(n), **Space**: O(1)

---

### 58. Word Wrap Problem
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/word-wrap1646/1)
**Difficulty**: Hard

**Approach**: Dynamic Programming
```cpp
int wordWrap(vector<int>& nums, int k) {
    int n = nums.size();
    vector<int> dp(n, INT_MAX);
    
    for (int i = 0; i < n; i++) {
        int lineLength = 0;
        
        for (int j = i; j < n; j++) {
            lineLength += nums[j];
            
            if (lineLength > k) break;
            
            int cost;
            if (j == n - 1) {
                cost = 0; // Last line
            } else {
                int spaces = k - lineLength;
                cost = spaces * spaces;
            }
            
            if (i == 0) {
                dp[j] = cost;
            } else if (dp[i-1] != INT_MAX) {
                dp[j] = min(dp[j], dp[i-1] + cost);
            }
            
            lineLength++; // Add space for next word
        }
    }
    
    return dp[n-1];
}
```
**Time**: O(n²), **Space**: O(n)

---

### 59. Edit Distance
**Problem**: [LeetCode 72](https://leetcode.com/problems/edit-distance/)
**Difficulty**: Hard

**Approach**: Dynamic Programming
```cpp
int minDistance(string word1, string word2) {
    int m = word1.length(), n = word2.length();
    vector<vector<int>> dp(m + 1, vector<int>(n + 1));
    
    // Initialize base cases
    for (int i = 0; i <= m; i++) dp[i][0] = i;
    for (int j = 0; j <= n; j++) dp[0][j] = j;
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (word1[i-1] == word2[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            } else {
                dp[i][j] = 1 + min({
                    dp[i-1][j],    // Delete
                    dp[i][j-1],    // Insert
                    dp[i-1][j-1]   // Replace
                });
            }
        }
    }
    
    return dp[m][n];
}
```
**Time**: O(m×n), **Space**: O(m×n)

---

### 60. Find Next Greater Element
**Problem**: Next greater element for each character
**Difficulty**: Medium

**Approach**: Stack-based approach
```cpp
string nextGreaterElement(string s) {
    int n = s.length();
    string result = s;
    stack<int> st;
    
    for (int i = 0; i < n; i++) {
        while (!st.empty() && s[st.top()] < s[i]) {
            result[st.top()] = s[i];
            st.pop();
        }
        st.push(i);
    }
    
    // Elements with no greater element
    while (!st.empty()) {
        result[st.top()] = '?';
        st.pop();
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 61. Balanced Parentheses
**Problem**: [LeetCode 20](https://leetcode.com/problems/valid-parentheses/)
**Difficulty**: Easy

**Approach**: Stack for matching pairs
```cpp
bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> pairs = {{')', '('}, {']', '['}, {'}', '{'}};
    
    for (char c : s) {
        if (c == '(' || c == '[' || c == '{') {
            st.push(c);
        } else {
            if (st.empty() || st.top() != pairs[c]) {
                return false;
            }
            st.pop();
        }
    }
    
    return st.empty();
}
```
**Time**: O(n), **Space**: O(n)

---

### 62. Remove Brackets
**Problem**: Remove brackets from algebraic expression
**Difficulty**: Medium

**Approach**: Stack to track signs
```cpp
string removeBrackets(string s) {
    stack<int> signs;
    signs.push(1);
    
    string result = "";
    int sign = 1;
    
    for (int i = 0; i < s.length(); i++) {
        char c = s[i];
        
        if (c == '+') {
            sign = signs.top();
        } else if (c == '-') {
            sign = -signs.top();
        } else if (c == '(') {
            signs.push(sign);
        } else if (c == ')') {
            signs.pop();
        } else {
            if (sign == 1) {
                result += c;
            } else {
                if (c == '+') result += '-';
                else if (c == '-') result += '+';
                else result += c;
            }
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 63. Find Duplicate Parentheses
**Problem**: Check for duplicate parentheses in expression
**Difficulty**: Medium

**Approach**: Stack to track content between parentheses
```cpp
bool findDuplicateParentheses(string s) {
    stack<char> st;
    
    for (char c : s) {
        if (c == ')') {
            int count = 0;
            
            while (!st.empty() && st.top() != '(') {
                st.pop();
                count++;
            }
            
            if (!st.empty()) st.pop(); // Remove '('
            
            if (count <= 1) return true; // Duplicate found
        } else {
            st.push(c);
        }
    }
    
    return false;
}
```
**Time**: O(n), **Space**: O(n)

---

### 64. Find All Anagrams
**Problem**: [LeetCode 438](https://leetcode.com/problems/find-all-anagrams-in-a-string/)
**Difficulty**: Medium

**Approach**: Sliding window with frequency count
```cpp
vector<int> findAnagrams(string s, string p) {
    vector<int> result;
    if (s.length() < p.length()) return result;
    
    vector<int> pCount(26, 0), sCount(26, 0);
    
    // Count frequency of pattern
    for (char c : p) {
        pCount[c - 'a']++;
    }
    
    int windowSize = p.length();
    
    // Check first window
    for (int i = 0; i < windowSize; i++) {
        sCount[s[i] - 'a']++;
    }
    
    if (sCount == pCount) {
        result.push_back(0);
    }
    
    // Slide the window
    for (int i = windowSize; i < s.length(); i++) {
        sCount[s[i] - 'a']++;
        sCount[s[i - windowSize] - 'a']--;
        
        if (sCount == pCount) {
            result.push_back(i - windowSize + 1);
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(1)

---

### 65. Smallest Window Substring
**Problem**: [LeetCode 76](https://leetcode.com/problems/minimum-window-substring/)
**Difficulty**: Hard

**Approach**: Sliding window with two pointers
```cpp
string minWindow(string s, string t) {
    if (s.empty() || t.empty()) return "";
    
    unordered_map<char, int> tCount, windowCount;
    
    for (char c : t) {
        tCount[c]++;
    }
    
    int required = tCount.size();
    int formed = 0;
    int left = 0, right = 0;
    
    int minLen = INT_MAX;
    int minLeft = 0;
    
    while (right < s.length()) {
        char c = s[right];
        windowCount[c]++;
        
        if (tCount.find(c) != tCount.end() && windowCount[c] == tCount[c]) {
            formed++;
        }
        
        while (left <= right && formed == required) {
            if (right - left + 1 < minLen) {
                minLen = right - left + 1;
                minLeft = left;
            }
            
            char leftChar = s[left];
            windowCount[leftChar]--;
            
            if (tCount.find(leftChar) != tCount.end() && windowCount[leftChar] < tCount[leftChar]) {
                formed--;
            }
            
            left++;
        }
        
        right++;
    }
    
    return minLen == INT_MAX ? "" : s.substr(minLeft, minLen);
}
```
**Time**: O(|s| + |t|), **Space**: O(|s| + |t|)

---

### 66. Wildcard Pattern Matching
**Problem**: [LeetCode 44](https://leetcode.com/problems/wildcard-matching/)
**Difficulty**: Hard

**Approach**: Dynamic Programming
```cpp
bool isMatch(string s, string p) {
    int m = s.length(), n = p.length();
    vector<vector<bool>> dp(m + 1, vector<bool>(n + 1, false));
    
    dp[0][0] = true;
    
    // Handle patterns with *
    for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') {
            dp[0][j] = dp[0][j-1];
        }
    }
    
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            if (p[j-1] == '*') {
                dp[i][j] = dp[i-1][j] || dp[i][j-1];
            } else if (p[j-1] == '?' || s[i-1] == p[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            }
        }
    }
    
    return dp[m][n];
}
```
**Time**: O(m×n), **Space**: O(m×n)

---

### 67. Replace PI with 3.14
**Problem**: Replace all occurrences of "pi" with "3.14"
**Difficulty**: Easy

**Approach**: String traversal and replacement
```cpp
string replacePi(string str) {
    string result = "";
    
    for (int i = 0; i < str.length(); i++) {
        if (i < str.length() - 1 && str.substr(i, 2) == "pi") {
            result += "3.14";
            i++; // Skip next character
        } else {
            result += str[i];
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 68. Remove All Adjacent Duplicates
**Problem**: [LeetCode 1047](https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/)
**Difficulty**: Easy

**Approach**: Stack-like approach
```cpp
string removeDuplicates(string s) {
    string result = "";
    
    for (char c : s) {
        if (!result.empty() && result.back() == c) {
            result.pop_back();
        } else {
            result.push_back(c);
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(n)

---

### 69. String Matching with Finite Automata
**Problem**: Implement KMP string matching
**Difficulty**: Hard

**Approach**: KMP Algorithm with LPS array
```cpp
vector<int> computeLPS(string pattern) {
    int m = pattern.length();
    vector<int> lps(m, 0);
    int len = 0;
    int i = 1;
    
    while (i < m) {
        if (pattern[i] == pattern[len]) {
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

vector<int> KMPSearch(string text, string pattern) {
    vector<int> result;
    int n = text.length();
    int m = pattern.length();
    
    vector<int> lps = computeLPS(pattern);
    
    int i = 0, j = 0;
    
    while (i < n) {
        if (pattern[j] == text[i]) {
            i++;
            j++;
        }
        
        if (j == m) {
            result.push_back(i - j);
            j = lps[j - 1];
        } else if (i < n && pattern[j] != text[i]) {
            if (j != 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    
    return result;
}
```
**Time**: O(n + m), **Space**: O(m)

---

### 70. Boyer Moore Algorithm
**Problem**: Implement Boyer-Moore string matching
**Difficulty**: Hard

**Approach**: Bad character heuristic
```cpp
vector<int> badCharHeuristic(string pattern) {
    vector<int> badChar(256, -1);
    
    for (int i = 0; i < pattern.length(); i++) {
        badChar[(int)pattern[i]] = i;
    }
    
    return badChar;
}

vector<int> boyerMooreSearch(string text, string pattern) {
    vector<int> result;
    int n = text.length();
    int m = pattern.length();
    
    vector<int> badChar = badCharHeuristic(pattern);
    
    int shift = 0;
    
    while (shift <= (n - m)) {
        int j = m - 1;
        
        while (j >= 0 && pattern[j] == text[shift + j]) {
            j--;
        }
        
        if (j < 0) {
            result.push_back(shift);
            shift += (shift + m < n) ? m - badChar[text[shift + m]] : 1;
        } else {
            shift += max(1, j - badChar[text[shift + j]]);
        }
    }
    
    return result;
}
```
**Time**: O(nm) worst case, O(n/m) best case, **Space**: O(256)

---

### 71. Longest Common Prefix
**Problem**: [LeetCode 14](https://leetcode.com/problems/longest-common-prefix/)
**Difficulty**: Easy

**Approach**: Vertical scanning
```cpp
string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    
    for (int i = 0; i < strs[0].length(); i++) {
        char c = strs[0][i];
        
        for (int j = 1; j < strs.size(); j++) {
            if (i >= strs[j].length() || strs[j][i] != c) {
                return strs[0].substr(0, i);
            }
        }
    }
    
    return strs[0];
}
```
**Time**: O(S) where S is sum of all characters, **Space**: O(1)

---

### 72. Number of Customers Unable to Get Computer
**Problem**: Track customers who couldn't get computer in cafe
**Difficulty**: Medium

**Approach**: Simulation with tracking
```cpp
int countCustomers(string seq, int n) {
    vector<bool> computers(n, false);
    unordered_set<char> waiting;
    int unable = 0;
    
    for (char c : seq) {
        if (waiting.find(c) != waiting.end()) {
            // Customer leaving
            waiting.erase(c);
            // Find and free the computer
            for (int i = 0; i < n; i++) {
                if (computers[i]) {
                    computers[i] = false;
                    break;
                }
            }
        } else {
            // Customer arriving
            bool allocated = false;
            
            for (int i = 0; i < n; i++) {
                if (!computers[i]) {
                    computers[i] = true;
                    waiting.insert(c);
                    allocated = true;
                    break;
                }
            }
            
            if (!allocated) {
                unable++;
            }
        }
    }
    
    return unable;
}
```
**Time**: O(n×m) where m is sequence length, **Space**: O(n)

---

### 73. Transform One String to Another
**Problem**: Check if string can be transformed using allowed operations
**Difficulty**: Medium

**Approach**: BFS or character frequency check
```cpp
bool canTransform(string start, string end) {
    if (start.length() != end.length()) return false;
    
    vector<int> freq(26, 0);
    
    for (int i = 0; i < start.length(); i++) {
        freq[start[i] - 'a']++;
        freq[end[i] - 'a']--;
    }
    
    for (int count : freq) {
        if (count != 0) return false;
    }
    
    return true;
}
```
**Time**: O(n), **Space**: O(1)

---

### 74. Isomorphic Strings
**Problem**: [LeetCode 205](https://leetcode.com/problems/isomorphic-strings/)
**Difficulty**: Easy

**Approach**: Character mapping with bijection check
```cpp
bool isIsomorphic(string s, string t) {
    if (s.length() != t.length()) return false;
    
    unordered_map<char, char> mapST, mapTS;
    
    for (int i = 0; i < s.length(); i++) {
        char c1 = s[i], c2 = t[i];
        
        if (mapST.find(c1) != mapST.end()) {
            if (mapST[c1] != c2) return false;
        } else {
            mapST[c1] = c2;
        }
        
        if (mapTS.find(c2) != mapTS.end()) {
            if (mapTS[c2] != c1) return false;
        } else {
            mapTS[c2] = c1;
        }
    }
    
    return true;
}
```
**Time**: O(n), **Space**: O(1) - limited character set

---

### 75. Recursively Print Sentences
**Problem**: Print all possible sentences from word arrays
**Difficulty**: Medium

**Approach**: Recursive backtracking
```cpp
void printSentences(vector<vector<string>>& lists, string current, int index) {
    if (index == lists.size()) {
        cout << current << endl;
        return;
    }
    
    for (string word : lists[index]) {
        string newSentence = current.empty() ? word : current + " " + word;
        printSentences(lists, newSentence, index + 1);
    }
}

void printAllSentences(vector<vector<string>>& lists) {
    if (lists.empty()) return;
    printSentences(lists, "", 0);
}
```
**Time**: O(∏ |lists[i]|), **Space**: O(depth)

---

## Summary

This comprehensive cheat sheet covers the first 75 problems from Love Babbar's 450 DSA Questions, organized by topics:

### **Array Problems (1-36)** ✅
- **Basic Operations**: Reverse, find min/max, Kth smallest
- **Sorting Techniques**: Dutch flag algorithm, move negatives
- **Subarray Problems**: Kadane's algorithm, maximum product
- **Advanced Techniques**: Floyd's cycle detection, merge without extra space

### **Matrix Problems (37-46)** ✅
- **Traversal Patterns**: Spiral traversal, boundary traversal
- **Search Algorithms**: Binary search in 2D, staircase search
- **Optimization Problems**: Maximum rectangle, median finding
- **Transformation**: Rotation, sorting with O(1) space

### Key Features:
✅ **Complete Solutions** with optimized approaches
✅ **Time & Space Complexity** analysis for each problem
✅ **Multiple Approaches** where applicable
✅ **Platform Links** for practice
✅ **Detailed Explanations** of algorithms used

### Patterns Covered:
1. **Two Pointers** - Dutch flag, array partitioning
2. **Sliding Window** - Smallest subarray, minimum swaps
3. **Hash Maps** - Frequency counting, subset checking
4. **Binary Search** - Kth element, median finding
5. **Greedy Algorithms** - Jump game, stock profit
6. **Mathematical** - Factorial, XOR properties

Continue with the remaining topics to complete your DSA preparation journey! 🚀

---

## Searching & Sorting (76-121)

### 76. First and Last Position in Sorted Array
**Problem**: [LeetCode 34](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/)
**Difficulty**: Medium

**Approach**: Binary search for first and last occurrence
```cpp
vector<int> searchRange(vector<int>& nums, int target) {
    vector<int> result = {-1, -1};
    
    // Find first occurrence
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result[0] = mid;
            right = mid - 1; // Continue searching left
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    // Find last occurrence
    left = 0;
    right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
            result[1] = mid;
            left = mid + 1; // Continue searching right
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```
**Time**: O(log n), **Space**: O(1)

---

### 77. Fixed Point (Value Equal to Index)
**Problem**: Find index where arr[i] = i in sorted array
**Difficulty**: Easy

**Approach**: Binary search with index comparison
```cpp
int findFixedPoint(vector<int>& arr) {
    int left = 0, right = arr.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == mid) {
            return mid;
        } else if (arr[mid] < mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}
```
**Time**: O(log n), **Space**: O(1)

---

### 78. Search in Rotated Sorted Array
**Problem**: [LeetCode 33](https://leetcode.com/problems/search-in-rotated-sorted-array/)
**Difficulty**: Medium

**Approach**: Binary search with rotation detection
```cpp
int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (nums[mid] == target) {
            return mid;
        }
        
        // Check which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    
    return -1;
}
```
**Time**: O(log n), **Space**: O(1)

---

### 79. Square Root using Binary Search
**Problem**: Find square root of number using binary search
**Difficulty**: Easy

**Approach**: Binary search on answer
```cpp
int mySqrt(int x) {
    if (x == 0) return 0;
    
    int left = 1, right = x;
    int result = 0;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (mid <= x / mid) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```
**Time**: O(log n), **Space**: O(1)

---

### 80. Aggressive Cows Problem
**Problem**: [SPOJ AGGRCOW](https://www.spoj.com/problems/AGGRCOW/)
**Difficulty**: Hard

**Approach**: Binary search on answer
```cpp
bool canPlaceCows(vector<int>& stalls, int cows, int minDist) {
    int count = 1;
    int lastPos = stalls[0];
    
    for (int i = 1; i < stalls.size(); i++) {
        if (stalls[i] - lastPos >= minDist) {
            count++;
            lastPos = stalls[i];
            if (count >= cows) return true;
        }
    }
    
    return false;
}

int aggressiveCows(vector<int>& stalls, int cows) {
    sort(stalls.begin(), stalls.end());
    
    int left = 1;
    int right = stalls.back() - stalls[0];
    int result = 0;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (canPlaceCows(stalls, cows, mid)) {
            result = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}
```
**Time**: O(n log n + n log(max-min)), **Space**: O(1)

---

### 81. Book Allocation Problem
**Problem**: Minimize maximum pages allocated to students
**Difficulty**: Hard

**Approach**: Binary search on maximum pages
```cpp
bool isPossible(vector<int>& books, int students, int maxPages) {
    int studentCount = 1;
    int currentPages = 0;
    
    for (int pages : books) {
        if (pages > maxPages) return false;
        
        if (currentPages + pages <= maxPages) {
            currentPages += pages;
        } else {
            studentCount++;
            currentPages = pages;
            if (studentCount > students) return false;
        }
    }
    
    return true;
}

int allocateBooks(vector<int>& books, int students) {
    if (books.size() < students) return -1;
    
    int left = *max_element(books.begin(), books.end());
    int right = accumulate(books.begin(), books.end(), 0);
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        
        if (isPossible(books, students, mid)) {
            result = mid;
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return result;
}
```
**Time**: O(n log(sum)), **Space**: O(1)

---

## Summary Update

This comprehensive cheat sheet now covers **81 problems** from Love Babbar's 450 DSA Questions:

### **Array Problems (1-36)** ✅
### **Matrix Problems (37-46)** ✅  
### **String Problems (47-75)** ✅
### **Searching & Sorting (76-81)** ✅ (Partial)

### Key Searching & Sorting Patterns:
1. **Binary Search Variations** - Rotated arrays, floor/ceil, first/last occurrence
2. **Binary Search on Answer** - Aggressive cows, book allocation, optimization problems
3. **Mathematical Binary Search** - Square roots, cube roots
4. **Array Partitioning Problems** - Minimize maximum allocation

### Advanced Problem Types:
✅ **SPOJ Problems** - Competitive programming challenges
✅ **Optimization Problems** - Minimize maximum, maximize minimum scenarios
✅ **Real-world Applications** - Resource allocation, scheduling problems

**Progress**: 81/450 problems completed with detailed solutions! 🎯

Continue building with Linked Lists, Trees, and advanced topics...
