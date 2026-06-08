# 🚀 Striver SDE Sheet - Complete Question List & Solutions

## 📋 Table of Contents
- [Day 1: Arrays](#day-1-arrays)
- [Day 2: Arrays Part-II](#day-2-arrays-part-ii)
- [Day 3: Arrays/Maths](#day-3-arraysmaths)
- [Day 4: Hashing](#day-4-hashing)
- [Day 5: Linked List](#day-5-linked-list)
- [Day 6: Linked List Part-II](#day-6-linked-list-part-ii)
- [Day 7: 2-Pointer](#day-7-2-pointer)
- [Day 8: Greedy Algorithm](#day-8-greedy-algorithm)
- [Day 9: Recursion](#day-9-recursion)
- [Day 10: Recursion and Backtracking](#day-10-recursion-and-backtracking)
- [Day 11: Binary Search](#day-11-binary-search)
- [Day 12: Heaps](#day-12-heaps)
- [Day 13: Stack and Queue](#day-13-stack-and-queue)
- [Day 14: Stack and Queue Part-II](#day-14-stack-and-queue-part-ii)
- [Day 15: String](#day-15-string)
- [Day 16: String Part-II](#day-16-string-part-ii)
- [Day 17: Binary Tree](#day-17-binary-tree)
- [Day 18: Binary Tree Part-II](#day-18-binary-tree-part-ii)
- [Day 19: Binary Tree Part-III](#day-19-binary-tree-part-iii)
- [Day 20: Binary Search Tree](#day-20-binary-search-tree)
- [Day 21: Binary Search Tree Part-II](#day-21-binary-search-tree-part-ii)
- [Day 22: Binary Trees (Miscellaneous)](#day-22-binary-trees-miscellaneous)
- [Day 23: Graph](#day-23-graph)
- [Day 24: Graph Part-II](#day-24-graph-part-ii)
- [Day 25: Dynamic Programming](#day-25-dynamic-programming)
- [Day 26: Dynamic Programming Part-II](#day-26-dynamic-programming-part-ii)
- [Day 27: Trie](#day-27-trie)

---

## Day 1: Arrays

### 1. Set Matrix Zeros
**Problem**: [LeetCode 73](https://leetcode.com/problems/set-matrix-zeroes/)
**Difficulty**: Medium

**Approach**: Use first row and column as markers
```cpp
void setZeroes(vector<vector<int>>& matrix) {
    int m = matrix.size(), n = matrix[0].size();
    bool firstRow = false, firstCol = false;
    
    // Check if first row has zero
    for (int j = 0; j < n; j++) {
        if (matrix[0][j] == 0) {
            firstRow = true;
            break;
        }
    }
    
    // Check if first column has zero
    for (int i = 0; i < m; i++) {
        if (matrix[i][0] == 0) {
            firstCol = true;
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
    
    // Set zeros based on markers
    for (int i = 1; i < m; i++) {
        for (int j = 1; j < n; j++) {
            if (matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
    }
    
    // Set first row to zero if needed
    if (firstRow) {
        for (int j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }
    
    // Set first column to zero if needed
    if (firstCol) {
        for (int i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }
}
```
**Time**: O(m×n), **Space**: O(1)

---

### 2. Pascal's Triangle
**Problem**: [LeetCode 118](https://leetcode.com/problems/pascals-triangle/)
**Difficulty**: Easy

**Approach**: Generate each row using previous row
```cpp
vector<vector<int>> generate(int numRows) {
    vector<vector<int>> result;
    
    for (int i = 0; i < numRows; i++) {
        vector<int> row(i + 1, 1);
        
        for (int j = 1; j < i; j++) {
            row[j] = result[i-1][j-1] + result[i-1][j];
        }
        
        result.push_back(row);
    }
    
    return result;
}
```
**Time**: O(n²), **Space**: O(n²)

---

### 3. Next Permutation
**Problem**: [LeetCode 31](https://leetcode.com/problems/next-permutation/)
**Difficulty**: Medium

**Approach**: Find the rightmost smaller element, then find next larger element to swap
```cpp
void nextPermutation(vector<int>& nums) {
    int n = nums.size();
    int i = n - 2;
    
    // Find first decreasing element from right
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        // Find the smallest element greater than nums[i]
        int j = n - 1;
        while (nums[j] <= nums[i]) {
            j--;
        }
        swap(nums[i], nums[j]);
    }
    
    // Reverse the suffix
    reverse(nums.begin() + i + 1, nums.end());
}
```
**Time**: O(n), **Space**: O(1)

---

### 4. Kadane's Algorithm (Maximum Subarray)
**Problem**: [LeetCode 53](https://leetcode.com/problems/maximum-subarray/)
**Difficulty**: Easy

**Approach**: Keep track of current sum and maximum sum
```cpp
int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.size(); i++) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    
    return maxSum;
}
```
**Time**: O(n), **Space**: O(1)

---

### 5. Sort Colors (Dutch Flag Algorithm)
**Problem**: [LeetCode 75](https://leetcode.com/problems/sort-colors/)
**Difficulty**: Medium

**Approach**: Three pointers to partition array
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

### 6. Best Time to Buy and Sell Stock
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

## Day 2: Arrays Part-II

### 7. Rotate Matrix
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

### 8. Merge Intervals
**Problem**: [LeetCode 56](https://leetcode.com/problems/merge-intervals/)
**Difficulty**: Medium

**Approach**: Sort intervals and merge overlapping ones
```cpp
vector<vector<int>> merge(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    
    vector<vector<int>> result;
    result.push_back(intervals[0]);
    
    for (int i = 1; i < intervals.size(); i++) {
        if (result.back()[1] >= intervals[i][0]) {
            result.back()[1] = max(result.back()[1], intervals[i][1]);
        } else {
            result.push_back(intervals[i]);
        }
    }
    
    return result;
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 9. Merge Sorted Array
**Problem**: [LeetCode 88](https://leetcode.com/problems/merge-sorted-array/)
**Difficulty**: Easy

**Approach**: Merge from the end to avoid overwriting
```cpp
void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
    
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}
```
**Time**: O(m + n), **Space**: O(1)

---

### 10. Find the Duplicate Number
**Problem**: [LeetCode 287](https://leetcode.com/problems/find-the-duplicate-number/)
**Difficulty**: Medium

**Approach**: Floyd's Cycle Detection (Tortoise and Hare)
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

### 11. Repeat and Missing Number
**Problem**: [InterviewBit](https://www.interviewbit.com/problems/repeat-and-missing-number-array/)
**Difficulty**: Medium

**Approach**: Use mathematical equations
```cpp
vector<int> repeatedNumber(const vector<int>& A) {
    long long n = A.size();
    long long S = (n * (n + 1)) / 2;
    long long P = (n * (n + 1) * (2 * n + 1)) / 6;
    long long missingMinusRepeating = 0, missingPlusRepeating = 0;
    
    for (int i = 0; i < n; i++) {
        S -= (long long)A[i];
        P -= (long long)A[i] * (long long)A[i];
    }
    
    missingMinusRepeating = S;
    missingPlusRepeating = P / S;
    
    int missing = (missingMinusRepeating + missingPlusRepeating) / 2;
    int repeating = missing - missingMinusRepeating;
    
    return {repeating, missing};
}
```
**Time**: O(n), **Space**: O(1)

---

### 12. Inversion Count
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/inversion-of-array-1587115620/1)
**Difficulty**: Medium

**Approach**: Use Merge Sort
```cpp
long long mergeAndCount(vector<int>& arr, int temp[], int left, int mid, int right) {
    int i, j, k;
    long long invCount = 0;
    
    i = left; j = mid; k = left;
    
    while ((i <= mid - 1) && (j <= right)) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
            invCount += (mid - i);
        }
    }
    
    while (i <= mid - 1) temp[k++] = arr[i++];
    while (j <= right) temp[k++] = arr[j++];
    
    for (i = left; i <= right; i++) arr[i] = temp[i];
    
    return invCount;
}

long long mergeSortAndCount(vector<int>& arr, int temp[], int left, int right) {
    long long invCount = 0;
    if (left < right) {
        int mid = (left + right) / 2;
        
        invCount += mergeSortAndCount(arr, temp, left, mid);
        invCount += mergeSortAndCount(arr, temp, mid + 1, right);
        invCount += mergeAndCount(arr, temp, left, mid + 1, right);
    }
    return invCount;
}
```
**Time**: O(n log n), **Space**: O(n)

---

## Day 3: Arrays/Maths

### 13. Search in 2D Matrix
**Problem**: [LeetCode 74](https://leetcode.com/problems/search-a-2d-matrix/)
**Difficulty**: Medium

**Approach**: Treat 2D matrix as 1D sorted array
```cpp
bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int m = matrix.size(), n = matrix[0].size();
    int left = 0, right = m * n - 1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int midValue = matrix[mid / n][mid % n];
        
        if (midValue == target) {
            return true;
        } else if (midValue < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return false;
}
```
**Time**: O(log(m×n)), **Space**: O(1)

---

### 14. Pow(x, n)
**Problem**: [LeetCode 50](https://leetcode.com/problems/powx-n/)
**Difficulty**: Medium

**Approach**: Binary Exponentiation
```cpp
double myPow(double x, int n) {
    if (n == 0) return 1.0;
    
    long long N = abs((long long)n);
    double result = 1.0;
    double current = x;
    
    while (N > 0) {
        if (N % 2 == 1) {
            result *= current;
        }
        current *= current;
        N /= 2;
    }
    
    return n < 0 ? 1.0 / result : result;
}
```
**Time**: O(log n), **Space**: O(1)

---

### 15. Majority Element (>n/2 times)
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

### 16. Majority Element II (>n/3 times)
**Problem**: [LeetCode 229](https://leetcode.com/problems/majority-element-ii/)
**Difficulty**: Medium

**Approach**: Extended Boyer-Moore Algorithm
```cpp
vector<int> majorityElement(vector<int>& nums) {
    int count1 = 0, count2 = 0;
    int candidate1 = 0, candidate2 = 0;
    
    // First pass: find potential candidates
    for (int num : nums) {
        if (num == candidate1) {
            count1++;
        } else if (num == candidate2) {
            count2++;
        } else if (count1 == 0) {
            candidate1 = num;
            count1 = 1;
        } else if (count2 == 0) {
            candidate2 = num;
            count2 = 1;
        } else {
            count1--;
            count2--;
        }
    }
    
    // Second pass: verify candidates
    count1 = count2 = 0;
    for (int num : nums) {
        if (num == candidate1) count1++;
        else if (num == candidate2) count2++;
    }
    
    vector<int> result;
    if (count1 > nums.size() / 3) result.push_back(candidate1);
    if (count2 > nums.size() / 3) result.push_back(candidate2);
    
    return result;
}
```
**Time**: O(n), **Space**: O(1)

---

### 17. Grid Unique Paths
**Problem**: [LeetCode 62](https://leetcode.com/problems/unique-paths/)
**Difficulty**: Medium

**Approach**: Combinatorics - C(m+n-2, m-1)
```cpp
int uniquePaths(int m, int n) {
    int N = m + n - 2;
    int r = min(m - 1, n - 1);
    
    double result = 1;
    
    for (int i = 1; i <= r; i++) {
        result = result * (N - r + i) / i;
    }
    
    return (int)result;
}
```
**Time**: O(min(m,n)), **Space**: O(1)

---

### 18. Reverse Pairs
**Problem**: [LeetCode 493](https://leetcode.com/problems/reverse-pairs/)
**Difficulty**: Hard

**Approach**: Modified Merge Sort
```cpp
int mergeSort(vector<int>& nums, int left, int right) {
    if (left >= right) return 0;
    
    int mid = left + (right - left) / 2;
    int count = mergeSort(nums, left, mid) + mergeSort(nums, mid + 1, right);
    
    // Count reverse pairs
    int j = mid + 1;
    for (int i = left; i <= mid; i++) {
        while (j <= right && nums[i] > 2LL * nums[j]) {
            j++;
        }
        count += (j - (mid + 1));
    }
    
    // Merge
    inplace_merge(nums.begin() + left, nums.begin() + mid + 1, nums.begin() + right + 1);
    
    return count;
}

int reversePairs(vector<int>& nums) {
    return mergeSort(nums, 0, nums.size() - 1);
}
```
**Time**: O(n log n), **Space**: O(n)

---

## Day 4: Hashing

### 19. 2Sum Problem
**Problem**: [LeetCode 1](https://leetcode.com/problems/two-sum/)
**Difficulty**: Easy

**Approach**: Hash map to store complements
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
**Time**: O(n), **Space**: O(n)

---

### 20. 4Sum Problem
**Problem**: [LeetCode 18](https://leetcode.com/problems/4sum/)
**Difficulty**: Medium

**Approach**: Reduce to 2Sum with two pointers
```cpp
vector<vector<int>> fourSum(vector<int>& nums, int target) {
    vector<vector<int>> result;
    int n = nums.size();
    
    if (n < 4) return result;
    
    sort(nums.begin(), nums.end());
    
    for (int i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        
        for (int j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;
            
            int left = j + 1, right = n - 1;
            
            while (left < right) {
                long long sum = (long long)nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum == target) {
                    result.push_back({nums[i], nums[j], nums[left], nums[right]});
                    
                    while (left < right && nums[left] == nums[left + 1]) left++;
                    while (left < right && nums[right] == nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
}
```
**Time**: O(n³), **Space**: O(1)

---

### 21. Longest Consecutive Sequence
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

### 22. Largest Subarray with Zero Sum
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1)
**Difficulty**: Medium

**Approach**: Prefix sum with hash map
```cpp
int maxLen(vector<int>& arr, int n) {
    unordered_map<int, int> map;
    int sum = 0;
    int maxLength = 0;
    
    for (int i = 0; i < n; i++) {
        sum += arr[i];
        
        if (sum == 0) {
            maxLength = i + 1;
        } else if (map.find(sum) != map.end()) {
            maxLength = max(maxLength, i - map[sum]);
        } else {
            map[sum] = i;
        }
    }
    
    return maxLength;
}
```
**Time**: O(n), **Space**: O(n)

---

### 23. Count Number of Subarrays with XOR K
**Problem**: [InterviewBit](https://www.interviewbit.com/problems/subarray-with-given-xor/)
**Difficulty**: Medium

**Approach**: Prefix XOR with hash map
```cpp
int solve(vector<int>& A, int B) {
    unordered_map<int, int> map;
    int xor_sum = 0;
    int count = 0;
    
    for (int i = 0; i < A.size(); i++) {
        xor_sum ^= A[i];
        
        if (xor_sum == B) {
            count++;
        }
        
        if (map.find(xor_sum ^ B) != map.end()) {
            count += map[xor_sum ^ B];
        }
        
        map[xor_sum]++;
    }
    
    return count;
}
```
**Time**: O(n), **Space**: O(n)

---

### 24. Longest Substring Without Repeating Characters
**Problem**: [LeetCode 3](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
**Difficulty**: Medium

**Approach**: Sliding window with hash set
```cpp
int lengthOfLongestSubstring(string s) {
    unordered_set<char> charSet;
    int left = 0, maxLength = 0;
    
    for (int right = 0; right < s.length(); right++) {
        while (charSet.find(s[right]) != charSet.end()) {
            charSet.erase(s[left]);
            left++;
        }
        
        charSet.insert(s[right]);
        maxLength = max(maxLength, right - left + 1);
    }
    
    return maxLength;
}
```
**Time**: O(n), **Space**: O(min(m,n)) where m is charset size

---

## Day 5: Linked List

### 25. Reverse a LinkedList
**Problem**: [LeetCode 206](https://leetcode.com/problems/reverse-linked-list/)
**Difficulty**: Easy

**Approach**: Iterative reversal
```cpp
ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    ListNode* current = head;
    
    while (current) {
        ListNode* next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
```
**Time**: O(n), **Space**: O(1)

---

### 26. Find Middle of LinkedList
**Problem**: [LeetCode 876](https://leetcode.com/problems/middle-of-the-linked-list/)
**Difficulty**: Easy

**Approach**: Two pointers (fast and slow)
```cpp
ListNode* middleNode(ListNode* head) {
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    return slow;
}
```
**Time**: O(n), **Space**: O(1)

---

### 27. Merge Two Sorted Lists
**Problem**: [LeetCode 21](https://leetcode.com/problems/merge-two-sorted-lists/)
**Difficulty**: Easy

**Approach**: Two pointers merge
```cpp
ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    
    while (list1 && list2) {
        if (list1->val <= list2->val) {
            tail->next = list1;
            list1 = list1->next;
        } else {
            tail->next = list2;
            list2 = list2->next;
        }
        tail = tail->next;
    }
    
    tail->next = list1 ? list1 : list2;
    
    return dummy.next;
}
```
**Time**: O(m + n), **Space**: O(1)

---

### 28. Remove Nth Node From End
**Problem**: [LeetCode 19](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)
**Difficulty**: Medium

**Approach**: Two pointers with n gap
```cpp
ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode dummy(0);
    dummy.next = head;
    
    ListNode* first = &dummy;
    ListNode* second = &dummy;
    
    // Move first pointer n+1 steps ahead
    for (int i = 0; i <= n; i++) {
        first = first->next;
    }
    
    // Move both pointers until first reaches end
    while (first) {
        first = first->next;
        second = second->next;
    }
    
    // Remove the nth node
    second->next = second->next->next;
    
    return dummy.next;
}
```
**Time**: O(n), **Space**: O(1)

---

### 29. Add Two Numbers
**Problem**: [LeetCode 2](https://leetcode.com/problems/add-two-numbers/)
**Difficulty**: Medium

**Approach**: Simulate addition with carry
```cpp
ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy(0);
    ListNode* tail = &dummy;
    int carry = 0;
    
    while (l1 || l2 || carry) {
        int sum = carry;
        
        if (l1) {
            sum += l1->val;
            l1 = l1->next;
        }
        
        if (l2) {
            sum += l2->val;
            l2 = l2->next;
        }
        
        carry = sum / 10;
        tail->next = new ListNode(sum % 10);
        tail = tail->next;
    }
    
    return dummy.next;
}
```
**Time**: O(max(m, n)), **Space**: O(max(m, n))

---

### 30. Delete Given Node
**Problem**: [LeetCode 237](https://leetcode.com/problems/delete-node-in-a-linked-list/)
**Difficulty**: Easy

**Approach**: Copy next node's value and delete next node
```cpp
void deleteNode(ListNode* node) {
    node->val = node->next->val;
    node->next = node->next->next;
}
```
**Time**: O(1), **Space**: O(1)

---

## Day 6: Linked List Part-II

### 31. Find Intersection of Two Linked Lists
**Problem**: [LeetCode 160](https://leetcode.com/problems/intersection-of-two-linked-lists/)
**Difficulty**: Easy

**Approach**: Two pointers switching lists
```cpp
ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
    if (!headA || !headB) return nullptr;
    
    ListNode* pA = headA;
    ListNode* pB = headB;
    
    while (pA != pB) {
        pA = pA ? pA->next : headB;
        pB = pB ? pB->next : headA;
    }
    
    return pA;
}
```
**Time**: O(m + n), **Space**: O(1)

---

### 32. Detect Cycle in Linked List
**Problem**: [LeetCode 141](https://leetcode.com/problems/linked-list-cycle/)
**Difficulty**: Easy

**Approach**: Floyd's Cycle Detection
```cpp
bool hasCycle(ListNode* head) {
    if (!head || !head->next) return false;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast) return true;
    }
    
    return false;
}
```
**Time**: O(n), **Space**: O(1)

---

### 33. Reverse LinkedList in Groups of Size K
**Problem**: [LeetCode 25](https://leetcode.com/problems/reverse-nodes-in-k-group/)
**Difficulty**: Hard

**Approach**: Recursive reversal
```cpp
ListNode* reverseKGroup(ListNode* head, int k) {
    // Check if there are k nodes left
    ListNode* curr = head;
    int count = 0;
    
    while (curr && count < k) {
        curr = curr->next;
        count++;
    }
    
    if (count == k) {
        // Reverse first k nodes
        curr = reverseKGroup(curr, k);
        
        while (count > 0) {
            ListNode* tmp = head->next;
            head->next = curr;
            curr = head;
            head = tmp;
            count--;
        }
        
        head = curr;
    }
    
    return head;
}
```
**Time**: O(n), **Space**: O(n/k)

---

### 34. Check if LinkedList is Palindrome
**Problem**: [LeetCode 234](https://leetcode.com/problems/palindrome-linked-list/)
**Difficulty**: Easy

**Approach**: Find middle, reverse second half, compare
```cpp
bool isPalindrome(ListNode* head) {
    if (!head || !head->next) return true;
    
    // Find middle
    ListNode* slow = head;
    ListNode* fast = head;
    
    while (fast->next && fast->next->next) {
        slow = slow->next;
        fast = fast->next->next;
    }
    
    // Reverse second half
    ListNode* secondHalf = reverseList(slow->next);
    
    // Compare both halves
    ListNode* firstHalf = head;
    while (secondHalf) {
        if (firstHalf->val != secondHalf->val) {
            return false;
        }
        firstHalf = firstHalf->next;
        secondHalf = secondHalf->next;
    }
    
    return true;
}

ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    while (head) {
        ListNode* next = head->next;
        head->next = prev;
        prev = head;
        head = next;
    }
    return prev;
}
```
**Time**: O(n), **Space**: O(1)

---

### 35. Find Starting Point of Loop
**Problem**: [LeetCode 142](https://leetcode.com/problems/linked-list-cycle-ii/)
**Difficulty**: Medium

**Approach**: Floyd's Algorithm + Find start
```cpp
ListNode* detectCycle(ListNode* head) {
    if (!head || !head->next) return nullptr;
    
    ListNode* slow = head;
    ListNode* fast = head;
    
    // Detect cycle
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        
        if (slow == fast) break;
    }
    
    if (!fast || !fast->next) return nullptr;
    
    // Find start of cycle
    slow = head;
    while (slow != fast) {
        slow = slow->next;
        fast = fast->next;
    }
    
    return slow;
}
```
**Time**: O(n), **Space**: O(1)

---

### 36. Flattening of LinkedList
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/flattening-a-linked-list/1)
**Difficulty**: Medium

**Approach**: Merge sort approach
```cpp
Node* merge(Node* a, Node* b) {
    if (!a) return b;
    if (!b) return a;
    
    Node* result;
    
    if (a->data < b->data) {
        result = a;
        result->bottom = merge(a->bottom, b);
    } else {
        result = b;
        result->bottom = merge(a, b->bottom);
    }
    
    return result;
}

Node* flatten(Node* root) {
    if (!root || !root->next) return root;
    
    return merge(root, flatten(root->next));
}
```
**Time**: O(n), **Space**: O(1)

---

## Day 7: 2-Pointer

### 37. Clone LinkedList with Random Pointers
**Problem**: [LeetCode 138](https://leetcode.com/problems/copy-list-with-random-pointer/)
**Difficulty**: Medium

**Approach**: Interweaving approach
```cpp
Node* copyRandomList(Node* head) {
    if (!head) return nullptr;
    
    // Step 1: Create copy nodes and interweave
    Node* curr = head;
    while (curr) {
        Node* copy = new Node(curr->val);
        copy->next = curr->next;
        curr->next = copy;
        curr = copy->next;
    }
    
    // Step 2: Set random pointers for copy nodes
    curr = head;
    while (curr) {
        if (curr->random) {
            curr->next->random = curr->random->next;
        }
        curr = curr->next->next;
    }
    
    // Step 3: Separate the two lists
    Node* original = head;
    Node* copyHead = head->next;
    Node* copy = copyHead;
    
    while (original) {
        original->next = original->next->next;
        if (copy->next) {
            copy->next = copy->next->next;
        }
        original = original->next;
        copy = copy->next;
    }
    
    return copyHead;
}
```
**Time**: O(n), **Space**: O(1)

---

### 38. 3Sum
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

### 39. Trapping Rain Water
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

### 40. Remove Duplicates from Sorted Array
**Problem**: [LeetCode 26](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
**Difficulty**: Easy

**Approach**: Two pointers
```cpp
int removeDuplicates(vector<int>& nums) {
    if (nums.empty()) return 0;
    
    int i = 0;
    
    for (int j = 1; j < nums.size(); j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    
    return i + 1;
}
```
**Time**: O(n), **Space**: O(1)

---

### 41. Max Consecutive Ones
**Problem**: [LeetCode 485](https://leetcode.com/problems/max-consecutive-ones/)
**Difficulty**: Easy

**Approach**: Single pass counting
```cpp
int findMaxConsecutiveOnes(vector<int>& nums) {
    int maxCount = 0;
    int currentCount = 0;
    
    for (int num : nums) {
        if (num == 1) {
            currentCount++;
            maxCount = max(maxCount, currentCount);
        } else {
            currentCount = 0;
        }
    }
    
    return maxCount;
}
```
**Time**: O(n), **Space**: O(1)

---

## Day 8: Greedy Algorithm

### 42. N meetings in one room
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1)
**Difficulty**: Easy

**Approach**: Sort by end time and select greedily
```cpp
int maxMeetings(int start[], int end[], int n) {
    vector<pair<int, int>> meetings;
    for (int i = 0; i < n; i++) {
        meetings.push_back({end[i], start[i]});
    }
    
    sort(meetings.begin(), meetings.end());
    
    int count = 1;
    int lastEndTime = meetings[0].first;
    
    for (int i = 1; i < n; i++) {
        if (meetings[i].second > lastEndTime) {
            count++;
            lastEndTime = meetings[i].first;
        }
    }
    
    return count;
}
```
**Time**: O(n log n), **Space**: O(n)

---

### 43. Minimum number of platforms
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1)
**Difficulty**: Medium

**Approach**: Sort arrivals and departures separately
```cpp
int findPlatform(int arr[], int dep[], int n) {
    sort(arr, arr + n);
    sort(dep, dep + n);
    
    int platforms = 1, maxPlatforms = 1;
    int i = 1, j = 0;
    
    while (i < n && j < n) {
        if (arr[i] <= dep[j]) {
            platforms++;
            i++;
        } else {
            platforms--;
            j++;
        }
        maxPlatforms = max(maxPlatforms, platforms);
    }
    
    return maxPlatforms;
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 44. Job Sequencing Problem
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1)
**Difficulty**: Medium

**Approach**: Sort by profit and use Union-Find for scheduling
```cpp
vector<int> JobScheduling(Job arr[], int n) {
    sort(arr, arr + n, [](Job a, Job b) {
        return a.profit > b.profit;
    });
    
    int maxDeadline = 0;
    for (int i = 0; i < n; i++) {
        maxDeadline = max(maxDeadline, arr[i].dead);
    }
    
    vector<int> slot(maxDeadline + 1, -1);
    int jobCount = 0, totalProfit = 0;
    
    for (int i = 0; i < n; i++) {
        for (int j = arr[i].dead; j > 0; j--) {
            if (slot[j] == -1) {
                slot[j] = arr[i].id;
                jobCount++;
                totalProfit += arr[i].profit;
                break;
            }
        }
    }
    
    return {jobCount, totalProfit};
}
```
**Time**: O(n²), **Space**: O(max_deadline)

---

### 45. Fractional Knapsack
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1)
**Difficulty**: Medium

**Approach**: Sort by value-to-weight ratio
```cpp
double fractionalKnapsack(int W, Item arr[], int n) {
    sort(arr, arr + n, [](Item a, Item b) {
        return (double)a.value / a.weight > (double)b.value / b.weight;
    });
    
    double totalValue = 0.0;
    int currentWeight = 0;
    
    for (int i = 0; i < n; i++) {
        if (currentWeight + arr[i].weight <= W) {
            currentWeight += arr[i].weight;
            totalValue += arr[i].value;
        } else {
            int remainingWeight = W - currentWeight;
            totalValue += arr[i].value * ((double)remainingWeight / arr[i].weight);
            break;
        }
    }
    
    return totalValue;
}
```
**Time**: O(n log n), **Space**: O(1)

---

### 46. Minimum number of coins
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/coin-piles5152/1)
**Difficulty**: Easy

**Approach**: Greedy selection from largest denomination
```cpp
vector<int> minPartition(int N) {
    vector<int> denominations = {2000, 500, 200, 100, 50, 20, 10, 5, 2, 1};
    vector<int> result;
    
    for (int coin : denominations) {
        while (N >= coin) {
            result.push_back(coin);
            N -= coin;
        }
    }
    
    return result;
}
```
**Time**: O(1) - fixed number of denominations, **Space**: O(1)

---

## Day 9: Recursion

### 47. Subset Sums
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/subset-sums2234/1)
**Difficulty**: Easy

**Approach**: Generate all subset sums using recursion
```cpp
void generateSubsetSums(vector<int>& arr, int index, int currentSum, vector<int>& result) {
    if (index == arr.size()) {
        result.push_back(currentSum);
        return;
    }
    
    // Include current element
    generateSubsetSums(arr, index + 1, currentSum + arr[index], result);
    
    // Exclude current element
    generateSubsetSums(arr, index + 1, currentSum, result);
}

vector<int> subsetSums(vector<int> arr, int N) {
    vector<int> result;
    generateSubsetSums(arr, 0, 0, result);
    sort(result.begin(), result.end());
    return result;
}
```
**Time**: O(2^n), **Space**: O(2^n)

---

### 48. Subsets II
**Problem**: [LeetCode 90](https://leetcode.com/problems/subsets-ii/)
**Difficulty**: Medium

**Approach**: Backtracking with duplicate handling
```cpp
void backtrack(vector<int>& nums, int start, vector<int>& current, vector<vector<int>>& result) {
    result.push_back(current);
    
    for (int i = start; i < nums.size(); i++) {
        if (i > start && nums[i] == nums[i - 1]) continue;
        
        current.push_back(nums[i]);
        backtrack(nums, i + 1, current, result);
        current.pop_back();
    }
}

vector<vector<int>> subsetsWithDup(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> result;
    vector<int> current;
    backtrack(nums, 0, current, result);
    return result;
}
```
**Time**: O(2^n), **Space**: O(2^n)

---

### 49. Combination Sum
**Problem**: [LeetCode 39](https://leetcode.com/problems/combination-sum/)
**Difficulty**: Medium

**Approach**: Backtracking with reuse allowed
```cpp
void backtrack(vector<int>& candidates, int target, int start, vector<int>& current, vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(current);
        return;
    }
    
    for (int i = start; i < candidates.size(); i++) {
        if (candidates[i] <= target) {
            current.push_back(candidates[i]);
            backtrack(candidates, target - candidates[i], i, current, result);
            current.pop_back();
        }
    }
}

vector<vector<int>> combinationSum(vector<int>& candidates, int target) {
    vector<vector<int>> result;
    vector<int> current;
    sort(candidates.begin(), candidates.end());
    backtrack(candidates, target, 0, current, result);
    return result;
}
```
**Time**: O(2^t) where t is target, **Space**: O(target)

---

### 50. Combination Sum II
**Problem**: [LeetCode 40](https://leetcode.com/problems/combination-sum-ii/)
**Difficulty**: Medium

**Approach**: Backtracking without reuse and duplicate handling
```cpp
void backtrack(vector<int>& candidates, int target, int start, vector<int>& current, vector<vector<int>>& result) {
    if (target == 0) {
        result.push_back(current);
        return;
    }
    
    for (int i = start; i < candidates.size(); i++) {
        if (i > start && candidates[i] == candidates[i - 1]) continue;
        if (candidates[i] > target) break;
        
        current.push_back(candidates[i]);
        backtrack(candidates, target - candidates[i], i + 1, current, result);
        current.pop_back();
    }
}

vector<vector<int>> combinationSum2(vector<int>& candidates, int target) {
    sort(candidates.begin(), candidates.end());
    vector<vector<int>> result;
    vector<int> current;
    backtrack(candidates, target, 0, current, result);
    return result;
}
```
**Time**: O(2^n), **Space**: O(target)

---

### 51. Palindrome Partitioning
**Problem**: [LeetCode 131](https://leetcode.com/problems/palindrome-partitioning/)
**Difficulty**: Medium

**Approach**: Backtracking with palindrome check
```cpp
bool isPalindrome(string& s, int start, int end) {
    while (start < end) {
        if (s[start] != s[end]) return false;
        start++;
        end--;
    }
    return true;
}

void backtrack(string& s, int start, vector<string>& current, vector<vector<string>>& result) {
    if (start == s.length()) {
        result.push_back(current);
        return;
    }
    
    for (int end = start; end < s.length(); end++) {
        if (isPalindrome(s, start, end)) {
            current.push_back(s.substr(start, end - start + 1));
            backtrack(s, end + 1, current, result);
            current.pop_back();
        }
    }
}

vector<vector<string>> partition(string s) {
    vector<vector<string>> result;
    vector<string> current;
    backtrack(s, 0, current, result);
    return result;
}
```
**Time**: O(2^n × n), **Space**: O(n)

---

### 52. Kth Permutation Sequence
**Problem**: [LeetCode 60](https://leetcode.com/problems/permutation-sequence/)
**Difficulty**: Hard

**Approach**: Mathematical approach using factorial
```cpp
string getPermutation(int n, int k) {
    vector<int> factorial(n, 1);
    vector<int> numbers;
    
    // Calculate factorials and create number list
    for (int i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    
    for (int i = 1; i <= n; i++) {
        numbers.push_back(i);
    }
    
    k--; // Convert to 0-indexed
    string result = "";
    
    for (int i = n - 1; i >= 0; i--) {
        int index = k / factorial[i];
        result += to_string(numbers[index]);
        numbers.erase(numbers.begin() + index);
        k %= factorial[i];
    }
    
    return result;
}
```
**Time**: O(n²), **Space**: O(n)

---

## Day 10: Recursion and Backtracking

### 53. Print all permutations of a string/array
**Problem**: [LeetCode 46](https://leetcode.com/problems/permutations/)
**Difficulty**: Medium

**Approach**: Backtracking with swapping
```cpp
void backtrack(vector<int>& nums, int start, vector<vector<int>>& result) {
    if (start == nums.size()) {
        result.push_back(nums);
        return;
    }
    
    for (int i = start; i < nums.size(); i++) {
        swap(nums[start], nums[i]);
        backtrack(nums, start + 1, result);
        swap(nums[start], nums[i]); // backtrack
    }
}

vector<vector<int>> permute(vector<int>& nums) {
    vector<vector<int>> result;
    backtrack(nums, 0, result);
    return result;
}
```
**Time**: O(n! × n), **Space**: O(n)

---

### 54. N-Queens Problem
**Problem**: [LeetCode 51](https://leetcode.com/problems/n-queens/)
**Difficulty**: Hard

**Approach**: Backtracking with conflict checking
```cpp
bool isSafe(vector<string>& board, int row, int col, int n) {
    // Check column
    for (int i = 0; i < row; i++) {
        if (board[i][col] == 'Q') return false;
    }
    
    // Check diagonal
    for (int i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (board[i][j] == 'Q') return false;
    }
    
    // Check anti-diagonal
    for (int i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        if (board[i][j] == 'Q') return false;
    }
    
    return true;
}

void solve(vector<string>& board, int row, int n, vector<vector<string>>& result) {
    if (row == n) {
        result.push_back(board);
        return;
    }
    
    for (int col = 0; col < n; col++) {
        if (isSafe(board, row, col, n)) {
            board[row][col] = 'Q';
            solve(board, row + 1, n, result);
            board[row][col] = '.';
        }
    }
}

vector<vector<string>> solveNQueens(int n) {
    vector<vector<string>> result;
    vector<string> board(n, string(n, '.'));
    solve(board, 0, n, result);
    return result;
}
```
**Time**: O(n!), **Space**: O(n²)

---

### 55. Sudoku Solver
**Problem**: [LeetCode 37](https://leetcode.com/problems/sudoku-solver/)
**Difficulty**: Hard

**Approach**: Backtracking with constraint checking
```cpp
bool isValid(vector<vector<char>>& board, int row, int col, char num) {
    // Check row
    for (int j = 0; j < 9; j++) {
        if (board[row][j] == num) return false;
    }
    
    // Check column
    for (int i = 0; i < 9; i++) {
        if (board[i][col] == num) return false;
    }
    
    // Check 3x3 box
    int startRow = (row / 3) * 3;
    int startCol = (col / 3) * 3;
    
    for (int i = startRow; i < startRow + 3; i++) {
        for (int j = startCol; j < startCol + 3; j++) {
            if (board[i][j] == num) return false;
        }
    }
    
    return true;
}

bool solve(vector<vector<char>>& board) {
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] == '.') {
                for (char num = '1'; num <= '9'; num++) {
                    if (isValid(board, i, j, num)) {
                        board[i][j] = num;
                        if (solve(board)) return true;
                        board[i][j] = '.';
                    }
                }
                return false;
            }
        }
    }
    return true;
}

void solveSudoku(vector<vector<char>>& board) {
    solve(board);
}
```
**Time**: O(9^(n²)), **Space**: O(n²)

---

### 56. M-Coloring Problem
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/m-coloring-problem-1587115620/1)
**Difficulty**: Medium

**Approach**: Backtracking with adjacency check
```cpp
bool isSafe(bool graph[101][101], int V, vector<int>& color, int node, int col) {
    for (int i = 0; i < V; i++) {
        if (graph[node][i] && color[i] == col) {
            return false;
        }
    }
    return true;
}

bool solve(bool graph[101][101], int m, int V, vector<int>& color, int node) {
    if (node == V) return true;
    
    for (int col = 1; col <= m; col++) {
        if (isSafe(graph, V, color, node, col)) {
            color[node] = col;
            if (solve(graph, m, V, color, node + 1)) return true;
            color[node] = 0;
        }
    }
    
    return false;
}

bool graphColoring(bool graph[101][101], int m, int V) {
    vector<int> color(V, 0);
    return solve(graph, m, V, color, 0);
}
```
**Time**: O(m^V), **Space**: O(V)

---

### 57. Rat in a Maze
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/rat-in-a-maze-problem/1)
**Difficulty**: Medium

**Approach**: Backtracking with path tracking
```cpp
void solve(vector<vector<int>>& m, int n, vector<string>& result, 
          string path, int x, int y, vector<vector<int>>& visited) {
    
    if (x == n - 1 && y == n - 1) {
        result.push_back(path);
        return;
    }
    
    // Down
    if (x + 1 < n && !visited[x + 1][y] && m[x + 1][y] == 1) {
        visited[x][y] = 1;
        solve(m, n, result, path + "D", x + 1, y, visited);
        visited[x][y] = 0;
    }
    
    // Left
    if (y - 1 >= 0 && !visited[x][y - 1] && m[x][y - 1] == 1) {
        visited[x][y] = 1;
        solve(m, n, result, path + "L", x, y - 1, visited);
        visited[x][y] = 0;
    }
    
    // Right
    if (y + 1 < n && !visited[x][y + 1] && m[x][y + 1] == 1) {
        visited[x][y] = 1;
        solve(m, n, result, path + "R", x, y + 1, visited);
        visited[x][y] = 0;
    }
    
    // Up
    if (x - 1 >= 0 && !visited[x - 1][y] && m[x - 1][y] == 1) {
        visited[x][y] = 1;
        solve(m, n, result, path + "U", x - 1, y, visited);
        visited[x][y] = 0;
    }
}

vector<string> findPath(vector<vector<int>>& m, int n) {
    vector<string> result;
    if (m[0][0] == 0 || m[n-1][n-1] == 0) return result;
    
    vector<vector<int>> visited(n, vector<int>(n, 0));
    solve(m, n, result, "", 0, 0, visited);
    return result;
}
```
**Time**: O(4^(n²)), **Space**: O(n²)

---

## Day 11: Binary Search

### 58. The Nth root of an integer
**Problem**: Find Nth root of M
**Difficulty**: Medium

**Approach**: Binary search on answer
```cpp
double multiply(double number, int n) {
    double ans = 1.0;
    for (int i = 1; i <= n; i++) {
        ans = ans * number;
    }
    return ans;
}

double findNthRootOfM(int n, long long m) {
    double low = 1;
    double high = m;
    double eps = 1e-6;
    
    while ((high - low) > eps) {
        double mid = (low + high) / 2.0;
        if (multiply(mid, n) < m) {
            low = mid;
        } else {
            high = mid;
        }
    }
    
    return low;
}
```
**Time**: O(log(m) × log(precision)), **Space**: O(1)

---

### 59. Matrix Median
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1)
**Difficulty**: Medium

**Approach**: Binary search on answer with counting
```cpp
int countSmallerThanOrEqual(vector<int>& row, int x) {
    int l = 0, h = row.size() - 1;
    while (l <= h) {
        int md = (l + h) >> 1;
        if (row[md] <= x) {
            l = md + 1;
        } else {
            h = md - 1;
        }
    }
    return l;
}

int median(vector<vector<int>>& matrix, int r, int c) {
    int low = 1;
    int high = 1000000000;
    
    while (low <= high) {
        int mid = (low + high) >> 1;
        int cnt = 0;
        
        for (int i = 0; i < r; i++) {
            cnt += countSmallerThanOrEqual(matrix[i], mid);
        }
        
        if (cnt <= (r * c) / 2) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return low;
}
```
**Time**: O(r × log c × log(10^9)), **Space**: O(1)

---

### 60. Find the element that appears once in sorted array
**Problem**: [LeetCode 540](https://leetcode.com/problems/single-element-in-a-sorted-array/)
**Difficulty**: Medium

**Approach**: Binary search with parity check
```cpp
int singleNonDuplicate(vector<int>& nums) {
    int low = 0, high = nums.size() - 1;
    
    while (low < high) {
        int mid = low + (high - low) / 2;
        
        // Make mid even
        if (mid % 2 == 1) mid--;
        
        if (nums[mid] == nums[mid + 1]) {
            low = mid + 2;
        } else {
            high = mid;
        }
    }
    
    return nums[low];
}
```
**Time**: O(log n), **Space**: O(1)

---

### 61. Search in Rotated Sorted Array
**Problem**: [LeetCode 33](https://leetcode.com/problems/search-in-rotated-sorted-array/)
**Difficulty**: Medium

**Approach**: Binary search with rotation handling
```cpp
int search(vector<int>& nums, int target) {
    int low = 0, high = nums.size() - 1;
    
    while (low <= high) {
        int mid = (low + high) / 2;
        
        if (nums[mid] == target) return mid;
        
        if (nums[low] <= nums[mid]) {
            if (nums[low] <= target && target <= nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    
    return -1;
}
```
**Time**: O(log n), **Space**: O(1)

---

### 62. Median of 2 sorted arrays
**Problem**: [LeetCode 4](https://leetcode.com/problems/median-of-two-sorted-arrays/)
**Difficulty**: Hard

**Approach**: Binary search with partitioning
```cpp
double findMedianSortedArrays(vector<int>& nums1, vector<int>& nums2) {
    if (nums1.size() > nums2.size()) return findMedianSortedArrays(nums2, nums1);
    
    int n1 = nums1.size(), n2 = nums2.size();
    int low = 0, high = n1;
    
    while (low <= high) {
        int cut1 = (low + high) / 2;
        int cut2 = (n1 + n2 + 1) / 2 - cut1;
        
        int left1 = cut1 == 0 ? INT_MIN : nums1[cut1 - 1];
        int left2 = cut2 == 0 ? INT_MIN : nums2[cut2 - 1];
        
        int right1 = cut1 == n1 ? INT_MAX : nums1[cut1];
        int right2 = cut2 == n2 ? INT_MAX : nums2[cut2];
        
        if (left1 <= right2 && left2 <= right1) {
            if ((n1 + n2) % 2 == 0) {
                return (max(left1, left2) + min(right1, right2)) / 2.0;
            } else {
                return max(left1, left2);
            }
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    
    return 1.0;
}
```
**Time**: O(log(min(n1, n2))), **Space**: O(1)

---

### 63. K-th element of two sorted Arrays
**Problem**: Find Kth element in merged sorted arrays
**Difficulty**: Medium

**Approach**: Binary search similar to median
```cpp
int kthElement(vector<int>& nums1, vector<int>& nums2, int n, int m, int k) {
    if (n > m) return kthElement(nums2, nums1, m, n, k);
    
    int low = max(0, k - m), high = min(k, n);
    
    while (low <= high) {
        int cut1 = (low + high) >> 1;
        int cut2 = k - cut1;
        
        int left1 = cut1 == 0 ? INT_MIN : nums1[cut1 - 1];
        int left2 = cut2 == 0 ? INT_MIN : nums2[cut2 - 1];
        
        int right1 = cut1 == n ? INT_MAX : nums1[cut1];
        int right2 = cut2 == m ? INT_MAX : nums2[cut2];
        
        if (left1 <= right2 && left2 <= right1) {
            return max(left1, left2);
        } else if (left1 > right2) {
            high = cut1 - 1;
        } else {
            low = cut1 + 1;
        }
    }
    
    return 1;
}
```
**Time**: O(log(min(n, m))), **Space**: O(1)

---

### 64. Allocate Minimum Number of Pages
**Problem**: [GeeksforGeeks](https://practice.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1)
**Difficulty**: Hard

**Approach**: Binary search on maximum pages
```cpp
bool isPossible(vector<int>& A, int n, int m, int mid) {
    int studentCount = 1;
    int pageSum = 0;
    
    for (int i = 0; i < n; i++) {
        if (pageSum + A[i] <= mid) {
            pageSum += A[i];
        } else {
            studentCount++;
            if (studentCount > m || A[i] > mid) {
                return false;
            }
            pageSum = A[i];
        }
    }
    
    return true;
}

int findPages(vector<int>& A, int n, int m) {
    if (m > n) return -1;
    
    int low = *max_element(A.begin(), A.end());
    int high = accumulate(A.begin(), A.end(), 0);
    
    while (low <= high) {
        int mid = (low + high) / 2;
        if (isPossible(A, n, m, mid)) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    
    return low;
}
```
**Time**: O(n × log(sum)), **Space**: O(1)

---

### 65. Aggressive Cows
**Problem**: [SPOJ AGGRCOW](https://www.spoj.com/problems/AGGRCOW/)
**Difficulty**: Hard

**Approach**: Binary search on minimum distance
```cpp
bool canWePlace(vector<int>& stalls, int dist, int cows) {
    int n = stalls.size();
    int cntCows = 1;
    int last = stalls[0];
    
    for (int i = 1; i < n; i++) {
        if (stalls[i] - last >= dist) {
            cntCows++;
            last = stalls[i];
        }
        if (cntCows >= cows) return true;
    }
    
    return false;
}

int solve(int n, int k, vector<int>& stalls) {
    sort(stalls.begin(), stalls.end());
    int low = 1, high = stalls[n - 1] - stalls[0];
    
    while (low <= high) {
        int mid = (low + high) >> 1;
        if (canWePlace(stalls, mid, k)) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    
    return high;
}
```
**Time**: O(n log n + n log(max_distance)), **Space**: O(1)

---

## Summary

This cheat sheet covers the first 41 problems from Striver's SDE Sheet with detailed solutions and complexity analysis. Each problem includes:

- **Problem link** for practice
- **Difficulty level** 
- **Optimal approach** explanation
- **Complete code solution**
- **Time and Space complexity**

The problems are organized by topic/day as per Striver's original structure, making it easy to follow a systematic preparation plan.

### Key Patterns Covered:
1. **Array manipulation** - Set matrix zeros, rotate matrix, merge intervals
2. **Mathematical algorithms** - Pascal's triangle, power function, majority element
3. **Hashing techniques** - Two sum, longest consecutive sequence, subarray problems
4. **Linked list operations** - Reversal, cycle detection, merging
5. **Two-pointer technique** - 3Sum, trapping rainwater, removing duplicates

Continue with the remaining days to complete the full SDE sheet preparation!
