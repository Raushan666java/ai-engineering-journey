# Algorithm Pattern Recognition

## Overview
Pattern recognition in algorithms is the ability to identify common problem-solving approaches that can be applied to a wide range of problems. Recognizing these patterns can significantly speed up problem-solving and help in tackling new problems efficiently.

## Common Algorithm Patterns

### 1. Sliding Window
**Description**: Used for problems involving arrays or strings where we need to find a subarray or substring that satisfies certain conditions.

**When to use**:
- Problems involving subarrays or substrings
- Finding maximum/minimum/average of all subarrays of size k
- Finding longest/shortest subarray with a given condition

**Template**:
```java
public int slidingWindow(int[] nums, int k) {
    int n = nums.length;
    int result = 0;
    int windowSum = 0;
    
    // Initialize window
    for (int i = 0; i < k; i++) {
        windowSum += nums[i];
    }
    result = windowSum;
    
    // Slide window
    for (int i = k; i < n; i++) {
        windowSum = windowSum + nums[i] - nums[i - k];
        result = Math.max(result, windowSum);
    }
    
    return result;
}
```

**Variable-size window**:
```java
public int variableSlidingWindow(int[] nums, int target) {
    int n = nums.length;
    int left = 0;
    int sum = 0;
    int minLength = Integer.MAX_VALUE;
    
    for (int right = 0; right < n; right++) {
        sum += nums[right];
        
        while (sum >= target) {
            minLength = Math.min(minLength, right - left + 1);
            sum -= nums[left++];
        }
    }
    
    return minLength == Integer.MAX_VALUE ? 0 : minLength;
}
```

**Example Problems**:
1. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/)
2. [Minimum Size Subarray Sum](https://leetcode.com/problems/minimum-size-subarray-sum/)
3. [Longest Substring Without Repeating Characters](https://leetcode.com/problems/longest-substring-without-repeating-characters/)
4. [Sliding Window Maximum](https://leetcode.com/problems/sliding-window-maximum/)

### 2. Two Pointers
**Description**: Uses two pointers to iterate through the data structure in a specific way, often from opposite ends or at different speeds.

**When to use**:
- Problems involving sorted arrays
- Finding pairs with a specific sum
- Removing duplicates
- Palindrome problems

**Template**:
```java
public int twoPointers(int[] nums, int target) {
    int left = 0;
    int right = nums.length - 1;
    
    while (left < right) {
        int sum = nums[left] + nums[right];
        
        if (sum == target) {
            return true; // or return indices, etc.
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    
    return false;
}
```

**Example Problems**:
1. [Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)
2. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/)
3. [Container With Most Water](https://leetcode.com/problems/container-with-most-water/)
4. [3Sum](https://leetcode.com/problems/3sum/)

### 3. Fast and Slow Pointers
**Description**: Uses two pointers moving at different speeds to solve problems related to cycles or finding a specific position.

**When to use**:
- Cycle detection in linked lists
- Finding the middle of a linked list
- Finding the kth element from the end

**Template**:
```java
public boolean hasCycle(ListNode head) {
    if (head == null) return false;
    
    ListNode slow = head;
    ListNode fast = head;
    
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow == fast) {
            return true; // Cycle detected
        }
    }
    
    return false;
}
```

**Example Problems**:
1. [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
2. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
3. [Middle of the Linked List](https://leetcode.com/problems/middle-of-the-linked-list/)
4. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### 4. Merge Intervals
**Description**: Used for problems involving intervals, such as merging overlapping intervals or finding conflicts.

**When to use**:
- Problems involving intervals or ranges
- Scheduling problems
- Overlapping intervals

**Template**:
```java
public int[][] mergeIntervals(int[][] intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort by start time
    Arrays.sort(intervals, (a, b) -> Integer.compare(a[0], b[0]));
    
    List<int[]> result = new ArrayList<>();
    int[] currentInterval = intervals[0];
    result.add(currentInterval);
    
    for (int[] interval : intervals) {
        // If current interval overlaps with the last merged interval
        if (interval[0] <= currentInterval[1]) {
            // Update end time of current interval
            currentInterval[1] = Math.max(currentInterval[1], interval[1]);
        } else {
            // Add as a new interval
            currentInterval = interval;
            result.add(currentInterval);
        }
    }
    
    return result.toArray(new int[result.size()][]);
}
```

**Example Problems**:
1. [Merge Intervals](https://leetcode.com/problems/merge-intervals/)
2. [Insert Interval](https://leetcode.com/problems/insert-interval/)
3. [Non-overlapping Intervals](https://leetcode.com/problems/non-overlapping-intervals/)
4. [Meeting Rooms II](https://leetcode.com/problems/meeting-rooms-ii/)

### 5. Cyclic Sort
**Description**: Used for problems involving arrays containing numbers in a given range.

**When to use**:
- Problems where array contains numbers in range [1...n]
- Finding missing or duplicate numbers

**Template**:
```java
public void cyclicSort(int[] nums) {
    int i = 0;
    while (i < nums.length) {
        int correctIndex = nums[i] - 1; // Assuming 1-indexed numbers
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] != nums[correctIndex]) {
            // Swap
            int temp = nums[i];
            nums[i] = nums[correctIndex];
            nums[correctIndex] = temp;
        } else {
            i++;
        }
    }
}
```

**Example Problems**:
1. [Missing Number](https://leetcode.com/problems/missing-number/)
2. [Find All Numbers Disappeared in an Array](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/)
3. [Find the Duplicate Number](https://leetcode.com/problems/find-the-duplicate-number/)
4. [First Missing Positive](https://leetcode.com/problems/first-missing-positive/)

### 6. In-place Reversal of Linked List
**Description**: Used for problems requiring reversal of linked lists or parts of linked lists.

**When to use**:
- Reversing a linked list
- Reversing a sublist
- Reordering a linked list

**Template**:
```java
public ListNode reverseList(ListNode head) {
    ListNode prev = null;
    ListNode current = head;
    
    while (current != null) {
        ListNode next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    
    return prev;
}
```

**Example Problems**:
1. [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)
2. [Reverse Linked List II](https://leetcode.com/problems/reverse-linked-list-ii/)
3. [Reverse Nodes in k-Group](https://leetcode.com/problems/reverse-nodes-in-k-group/)
4. [Palindrome Linked List](https://leetcode.com/problems/palindrome-linked-list/)

### 7. Tree BFS/DFS
**Description**: Used for problems involving tree traversal.

**When to use**:
- Level order traversal
- Finding paths in a tree
- Tree validation

**BFS Template**:
```java
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> currentLevel = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            currentLevel.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(currentLevel);
    }
    
    return result;
}
```

**DFS Template**:
```java
public void dfs(TreeNode root) {
    if (root == null) return;
    
    // Process node (pre-order)
    System.out.println(root.val);
    
    dfs(root.left);
    // Process node (in-order)
    
    dfs(root.right);
    // Process node (post-order)
}
```

**Example Problems**:
1. [Binary Tree Level Order Traversal](https://leetcode.com/problems/binary-tree-level-order-traversal/)
2. [Path Sum](https://leetcode.com/problems/path-sum/)
3. [Validate Binary Search Tree](https://leetcode.com/problems/validate-binary-search-tree/)
4. [Binary Tree Maximum Path Sum](https://leetcode.com/problems/binary-tree-maximum-path-sum/)

### 8. Topological Sort
**Description**: Used for problems involving directed graphs and dependencies.

**When to use**:
- Course scheduling
- Task scheduling with dependencies
- Build order

**Template**:
```java
public List<Integer> topologicalSort(List<List<Integer>> adjList) {
    int n = adjList.size();
    int[] inDegree = new int[n];
    
    // Calculate in-degree for each vertex
    for (List<Integer> neighbors : adjList) {
        for (int neighbor : neighbors) {
            inDegree[neighbor]++;
        }
    }
    
    // Add vertices with 0 in-degree to queue
    Queue<Integer> queue = new LinkedList<>();
    for (int i = 0; i < n; i++) {
        if (inDegree[i] == 0) {
            queue.offer(i);
        }
    }
    
    List<Integer> result = new ArrayList<>();
    while (!queue.isEmpty()) {
        int vertex = queue.poll();
        result.add(vertex);
        
        for (int neighbor : adjList.get(vertex)) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] == 0) {
                queue.offer(neighbor);
            }
        }
    }
    
    return result.size() == n ? result : new ArrayList<>(); // Check for cycle
}
```

**Example Problems**:
1. [Course Schedule](https://leetcode.com/problems/course-schedule/)
2. [Course Schedule II](https://leetcode.com/problems/course-schedule-ii/)
3. [Alien Dictionary](https://leetcode.com/problems/alien-dictionary/)
4. [Minimum Height Trees](https://leetcode.com/problems/minimum-height-trees/)

### 9. Trie
**Description**: Used for problems involving string operations and prefix matching.

**When to use**:
- Prefix matching
- Word search
- Autocomplete

**Template**:
```java
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    
    public TrieNode() {
        children = new TrieNode[26]; // Assuming lowercase English letters
        isEndOfWord = false;
    }
}

class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            current = current.children[index];
        }
        
        current.isEndOfWord = true;
    }
    
    public boolean search(String word) {
        TrieNode node = searchPrefix(word);
        return node != null && node.isEndOfWord;
    }
    
    public boolean startsWith(String prefix) {
        return searchPrefix(prefix) != null;
    }
    
    private TrieNode searchPrefix(String word) {
        TrieNode current = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (current.children[index] == null) {
                return null;
            }
            current = current.children[index];
        }
        
        return current;
    }
}
```

**Example Problems**:
1. [Implement Trie (Prefix Tree)](https://leetcode.com/problems/implement-trie-prefix-tree/)
2. [Word Search II](https://leetcode.com/problems/word-search-ii/)
3. [Design Add and Search Words Data Structure](https://leetcode.com/problems/design-add-and-search-words-data-structure/)
4. [Replace Words](https://leetcode.com/problems/replace-words/)

### 10. Dynamic Programming Patterns
**Description**: Used for problems that can be broken down into overlapping subproblems.

**Common DP Patterns**:
1. **0/1 Knapsack**:
   ```java
   public int knapsack(int[] weights, int[] values, int capacity) {
       int n = weights.length;
       int[][] dp = new int[n + 1][capacity + 1];
       
       for (int i = 1; i <= n; i++) {
           for (int w = 1; w <= capacity; w++) {
               if (weights[i - 1] <= w) {
                   dp[i][w] = Math.max(
                       values[i - 1] + dp[i - 1][w - weights[i - 1]],
                       dp[i - 1][w]
                   );
               } else {
                   dp[i][w] = dp[i - 1][w];
               }
           }
       }
       
       return dp[n][capacity];
   }
   ```

2. **Longest Common Subsequence**:
   ```java
   public int longestCommonSubsequence(String text1, String text2) {
       int m = text1.length(), n = text2.length();
       int[][] dp = new int[m + 1][n + 1];
       
       for (int i = 1; i <= m; i++) {
           for (int j = 1; j <= n; j++) {
               if (text1.charAt(i - 1) == text2.charAt(j - 1)) {
                   dp[i][j] = dp[i - 1][j - 1] + 1;
               } else {
                   dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
               }
           }
       }
       
       return dp[m][n];
   }
   ```

3. **Longest Increasing Subsequence**:
   ```java
   public int lengthOfLIS(int[] nums) {
       int n = nums.length;
       int[] dp = new int[n];
       Arrays.fill(dp, 1);
       
       for (int i = 1; i < n; i++) {
           for (int j = 0; j < i; j++) {
               if (nums[i] > nums[j]) {
                   dp[i] = Math.max(dp[i], dp[j] + 1);
               }
           }
       }
       
       int maxLength = 0;
       for (int length : dp) {
           maxLength = Math.max(maxLength, length);
       }
       
       return maxLength;
   }
   ```

**Example Problems**:
1. [Coin Change](https://leetcode.com/problems/coin-change/)
2. [Longest Increasing Subsequence](https://leetcode.com/problems/longest-increasing-subsequence/)
3. [Edit Distance](https://leetcode.com/problems/edit-distance/)
4. [Partition Equal Subset Sum](https://leetcode.com/problems/partition-equal-subset-sum/)

## How to Identify Patterns

### 1. Analyze the Problem Statement
- Look for keywords like "subarray," "substring," "path," "cycle," etc.
- Identify the data structure involved (array, string, linked list, tree, graph)
- Determine what you're trying to find (maximum, minimum, count, etc.)

### 2. Consider the Constraints
- Array size and element range can hint at the expected solution
- Time and space complexity requirements can narrow down the approach

### 3. Draw Examples and Visualize
- Work through small examples to understand the problem
- Visualize how the algorithm should work
- Identify patterns in the solution process

### 4. Match with Known Patterns
- Compare with problems you've solved before
- Try to map the problem to one of the common patterns

## Practice Strategy

1. **Learn the patterns**: Understand the core patterns and when to apply them
2. **Categorize problems**: Group problems by pattern
3. **Practice systematically**: Solve problems from each pattern category
4. **Review and reflect**: Analyze your solutions and identify optimization opportunities
5. **Mix and match**: Some problems may require combining multiple patterns

## Resources for Further Learning

1. **Books**:
   - "Cracking the Coding Interview" by Gayle Laakmann McDowell
   - "Elements of Programming Interviews" by Adnan Aziz, Tsung-Hsien Lee, and Amit Prakash

2. **Online Platforms**:
   - LeetCode
   - HackerRank
   - CodeSignal
   - GeeksforGeeks

3. **Courses**:
   - Grokking the Coding Interview: Patterns for Coding Questions
   - Algorithms Specialization on Coursera
   - AlgoExpert