package day38.practice;

import java.util.*;

/**
 * DAY 38: Dynamic Programming Practice Problems
 * 
 * 8 Essential DP Problems covering various patterns:
 * 1. Min Cost Climbing Stairs (LC 746)
 * 2. Delete and Earn (LC 740)
 * 3. Word Break (LC 139)
 * 4. Perfect Squares (LC 279)
 * 5. Partition Equal Subset Sum (LC 416)
 * 6. Target Sum (LC 494)
 * 7. Counting Bits (LC 338)
 * 8. Integer Break (LC 343)
 */
public class Day38Practice {

    // ==================== PROBLEM 1: Min Cost Climbing Stairs (LC 746) ====================
    
    /**
     * Min Cost Climbing Stairs - Choose starting step (0 or 1)
     * 
     * Time: O(n), Space: O(n)
     * 
     * Example: cost = [10,15,20] → 15 (start at index 1, pay 15, reach top)
     * 
     * DP State: dp[i] = min cost to reach step i
     * Transition: dp[i] = cost[i] + min(dp[i-1], dp[i-2])
     */
    public static int minCostClimbingStairs(int[] cost) {
        int n = cost.length;
        int[] dp = new int[n];
        dp[0] = cost[0];
        dp[1] = cost[1];
        
        for (int i = 2; i < n; i++) {
            dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
        }
        
        // Can start from last or second last step
        return Math.min(dp[n - 1], dp[n - 2]);
    }
    
    /**
     * Space Optimized O(1)
     */
    public static int minCostClimbingStairsOptimized(int[] cost) {
        int prev2 = cost[0];
        int prev1 = cost[1];
        
        for (int i = 2; i < cost.length; i++) {
            int curr = cost[i] + Math.min(prev1, prev2);
            prev2 = prev1;
            prev1 = curr;
        }
        
        return Math.min(prev1, prev2);
    }
    
    // ==================== PROBLEM 2: Delete and Earn (LC 740) ====================
    
    /**
     * Delete and Earn - Delete num and all num-1 and num+1
     * 
     * Time: O(n + max), Space: O(max)
     * 
     * Example: nums = [3,4,2] → 6 (delete 3 twice, earn 6)
     * 
     * Key Insight: Convert to House Robber problem
     * Count frequency, then treat as adjacent houses
     */
    public static int deleteAndEarn(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        
        int max = 0;
        for (int num : nums) {
            max = Math.max(max, num);
        }
        
        // Count frequency and calculate points
        int[] points = new int[max + 1];
        for (int num : nums) {
            points[num] += num;
        }
        
        // House Robber on points array
        if (max == 0) return 0;
        if (max == 1) return points[1];
        
        int prev2 = points[0];
        int prev1 = Math.max(points[0], points[1]);
        
        for (int i = 2; i <= max; i++) {
            int curr = Math.max(prev1, prev2 + points[i]);
            prev2 = prev1;
            prev1 = curr;
        }
        
        return prev1;
    }
    
    // ==================== PROBLEM 3: Word Break (LC 139) ====================
    
    /**
     * Word Break - Can string be segmented into dictionary words?
     * 
     * Time: O(n² + m) where m = total length of words, Space: O(n + m)
     * 
     * Example: s = "leetcode", wordDict = ["leet","code"] → true
     * 
     * DP State: dp[i] = can s[0..i-1] be segmented?
     * Transition: dp[i] = true if dp[j] && s[j..i-1] in dict for any j < i
     */
    public static boolean wordBreak(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        dp[0] = true;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    break;
                }
            }
        }
        
        return dp[n];
    }
    
    /**
     * Word Break - With path reconstruction
     * Returns the actual segmentation
     */
    public static List<String> wordBreakWithPath(String s, List<String> wordDict) {
        Set<String> dict = new HashSet<>(wordDict);
        int n = s.length();
        boolean[] dp = new boolean[n + 1];
        int[] parent = new int[n + 1];
        Arrays.fill(parent, -1);
        dp[0] = true;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                if (dp[j] && dict.contains(s.substring(j, i))) {
                    dp[i] = true;
                    parent[i] = j;
                    break;
                }
            }
        }
        
        if (!dp[n]) return new ArrayList<>();
        
        // Reconstruct path
        List<String> result = new ArrayList<>();
        int curr = n;
        while (curr > 0) {
            int prev = parent[curr];
            result.add(0, s.substring(prev, curr));
            curr = prev;
        }
        
        return result;
    }
    
    // ==================== PROBLEM 4: Perfect Squares (LC 279) ====================
    
    /**
     * Perfect Squares - Minimum perfect square numbers that sum to n
     * 
     * Time: O(n × √n), Space: O(n)
     * 
     * Example: n = 12 → 3 (4 + 4 + 4)
     * 
     * DP State: dp[i] = min perfect squares to sum to i
     * Transition: dp[i] = min(dp[i], dp[i - j²] + 1) for all j where j² ≤ i
     */
    public static int numSquares(int n) {
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        dp[0] = 0;
        
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j * j <= i; j++) {
                dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
            }
        }
        
        return dp[n];
    }
    
    /**
     * Perfect Squares - BFS approach (alternative)
     * Treats as shortest path problem
     */
    public static int numSquaresBFS(int n) {
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        queue.offer(0);
        visited.add(0);
        
        int level = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            level++;
            
            for (int i = 0; i < size; i++) {
                int curr = queue.poll();
                
                for (int j = 1; j * j <= n; j++) {
                    int next = curr + j * j;
                    
                    if (next == n) return level;
                    
                    if (next < n && !visited.contains(next)) {
                        visited.add(next);
                        queue.offer(next);
                    }
                }
            }
        }
        
        return level;
    }
    
    // ==================== PROBLEM 5: Partition Equal Subset Sum (LC 416) ====================
    
    /**
     * Partition Equal Subset Sum - Can array be partitioned into two equal subsets?
     * 
     * Time: O(n × sum), Space: O(sum)
     * 
     * Example: nums = [1,5,11,5] → true (two subsets: [1,5,5] and [11])
     * 
     * Key Insight: 0/1 Knapsack problem
     * Find if we can make sum/2 using subset of numbers
     */
    public static boolean canPartition(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        if (sum % 2 != 0) return false;
        
        int target = sum / 2;
        boolean[] dp = new boolean[target + 1];
        dp[0] = true;
        
        for (int num : nums) {
            for (int j = target; j >= num; j--) {
                dp[j] = dp[j] || dp[j - num];
            }
        }
        
        return dp[target];
    }
    
    /**
     * With path reconstruction - returns the actual partition
     */
    public static List<List<Integer>> canPartitionWithPath(int[] nums) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        if (sum % 2 != 0) return new ArrayList<>();
        
        int target = sum / 2;
        boolean[][] dp = new boolean[nums.length + 1][target + 1];
        
        for (int i = 0; i <= nums.length; i++) {
            dp[i][0] = true;
        }
        
        for (int i = 1; i <= nums.length; i++) {
            for (int j = 1; j <= target; j++) {
                dp[i][j] = dp[i - 1][j];
                if (j >= nums[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j - nums[i - 1]];
                }
            }
        }
        
        if (!dp[nums.length][target]) return new ArrayList<>();
        
        // Reconstruct partition
        List<Integer> subset1 = new ArrayList<>();
        List<Integer> subset2 = new ArrayList<>();
        
        int i = nums.length, j = target;
        while (i > 0 && j > 0) {
            if (!dp[i - 1][j]) {
                subset1.add(nums[i - 1]);
                j -= nums[i - 1];
            } else {
                subset2.add(nums[i - 1]);
            }
            i--;
        }
        
        return Arrays.asList(subset1, subset2);
    }
    
    // ==================== PROBLEM 6: Target Sum (LC 494) ====================
    
    /**
     * Target Sum - Count ways to assign +/- to reach target
     * 
     * Time: O(n × sum), Space: O(sum)
     * 
     * Example: nums = [1,1,1,1,1], target = 3 → 5 ways
     * 
     * Key Insight: Convert to subset sum problem
     * Let P = positive subset, N = negative subset
     * P - N = target, P + N = sum
     * → P = (sum + target) / 2
     */
    public static int findTargetSumWays(int[] nums, int target) {
        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        
        if (sum < Math.abs(target) || (sum + target) % 2 != 0) {
            return 0;
        }
        
        int subsetSum = (sum + target) / 2;
        int[] dp = new int[subsetSum + 1];
        dp[0] = 1;
        
        for (int num : nums) {
            for (int j = subsetSum; j >= num; j--) {
                dp[j] += dp[j - num];
            }
        }
        
        return dp[subsetSum];
    }
    
    /**
     * Alternative: DFS with memoization
     */
    public static int findTargetSumWaysMemo(int[] nums, int target) {
        Map<String, Integer> memo = new HashMap<>();
        return dfs(nums, 0, 0, target, memo);
    }
    
    private static int dfs(int[] nums, int index, int curr, int target, Map<String, Integer> memo) {
        if (index == nums.length) {
            return curr == target ? 1 : 0;
        }
        
        String key = index + "," + curr;
        if (memo.containsKey(key)) {
            return memo.get(key);
        }
        
        int add = dfs(nums, index + 1, curr + nums[index], target, memo);
        int subtract = dfs(nums, index + 1, curr - nums[index], target, memo);
        
        int result = add + subtract;
        memo.put(key, result);
        return result;
    }
    
    // ==================== PROBLEM 7: Counting Bits (LC 338) ====================
    
    /**
     * Counting Bits - Count 1's in binary representation for 0 to n
     * 
     * Time: O(n), Space: O(n)
     * 
     * Example: n = 5 → [0,1,1,2,1,2]
     * 
     * DP Insight: dp[i] = dp[i >> 1] + (i & 1)
     * Number of 1's = (number of 1's in i/2) + (last bit)
     */
    public static int[] countBits(int n) {
        int[] dp = new int[n + 1];
        
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i >> 1] + (i & 1);
        }
        
        return dp;
    }
    
    /**
     * Alternative: Using i & (i-1) trick
     * i & (i-1) removes the rightmost 1 bit
     */
    public static int[] countBitsAlternative(int n) {
        int[] dp = new int[n + 1];
        
        for (int i = 1; i <= n; i++) {
            dp[i] = dp[i & (i - 1)] + 1;
        }
        
        return dp;
    }
    
    // ==================== PROBLEM 8: Integer Break (LC 343) ====================
    
    /**
     * Integer Break - Break n into sum of positive integers, maximize product
     * 
     * Time: O(n²), Space: O(n)
     * 
     * Example: n = 10 → 36 (3+3+4, product = 3×3×4 = 36)
     * 
     * DP State: dp[i] = max product for integer i
     * Transition: dp[i] = max(dp[i], max(j, dp[j]) × max(i-j, dp[i-j]))
     */
    public static int integerBreak(int n) {
        int[] dp = new int[n + 1];
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j < i; j++) {
                // Either keep j or break it further
                // Either keep i-j or break it further
                dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]));
            }
        }
        
        return dp[n];
    }
    
    /**
     * Optimized O(n) solution using math insight
     * Key: Break into as many 3's as possible
     */
    public static int integerBreakOptimized(int n) {
        if (n == 2) return 1;
        if (n == 3) return 2;
        
        int product = 1;
        
        while (n > 4) {
            product *= 3;
            n -= 3;
        }
        
        product *= n;
        return product;
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 38: DP Practice Problems ===\n");
        
        // Problem 1: Min Cost Climbing Stairs
        System.out.println("1. Min Cost Climbing Stairs:");
        int[] cost1 = {10, 15, 20};
        System.out.println("Cost: " + Arrays.toString(cost1));
        System.out.println("Min cost: " + minCostClimbingStairs(cost1));
        System.out.println("Optimized: " + minCostClimbingStairsOptimized(cost1));
        
        // Problem 2: Delete and Earn
        System.out.println("\n2. Delete and Earn:");
        int[] nums2 = {3, 4, 2};
        System.out.println("Nums: " + Arrays.toString(nums2));
        System.out.println("Max points: " + deleteAndEarn(nums2));
        
        // Problem 3: Word Break
        System.out.println("\n3. Word Break:");
        String s3 = "leetcode";
        List<String> dict3 = Arrays.asList("leet", "code");
        System.out.println("String: " + s3 + ", Dict: " + dict3);
        System.out.println("Can break: " + wordBreak(s3, dict3));
        System.out.println("Segmentation: " + wordBreakWithPath(s3, dict3));
        
        // Problem 4: Perfect Squares
        System.out.println("\n4. Perfect Squares:");
        int n4 = 12;
        System.out.println("n = " + n4);
        System.out.println("Min squares (DP): " + numSquares(n4));
        System.out.println("Min squares (BFS): " + numSquaresBFS(n4));
        
        // Problem 5: Partition Equal Subset Sum
        System.out.println("\n5. Partition Equal Subset Sum:");
        int[] nums5 = {1, 5, 11, 5};
        System.out.println("Nums: " + Arrays.toString(nums5));
        System.out.println("Can partition: " + canPartition(nums5));
        System.out.println("Partitions: " + canPartitionWithPath(nums5));
        
        // Problem 6: Target Sum
        System.out.println("\n6. Target Sum:");
        int[] nums6 = {1, 1, 1, 1, 1};
        int target6 = 3;
        System.out.println("Nums: " + Arrays.toString(nums6) + ", Target: " + target6);
        System.out.println("Ways (DP): " + findTargetSumWays(nums6, target6));
        System.out.println("Ways (Memo): " + findTargetSumWaysMemo(nums6, target6));
        
        // Problem 7: Counting Bits
        System.out.println("\n7. Counting Bits:");
        int n7 = 5;
        System.out.println("n = " + n7);
        System.out.println("Result: " + Arrays.toString(countBits(n7)));
        System.out.println("Alternative: " + Arrays.toString(countBitsAlternative(n7)));
        
        // Problem 8: Integer Break
        System.out.println("\n8. Integer Break:");
        int n8 = 10;
        System.out.println("n = " + n8);
        System.out.println("Max product (DP): " + integerBreak(n8));
        System.out.println("Max product (Math): " + integerBreakOptimized(n8));
        
        System.out.println("\n✓ All 8 practice problems demonstrated!");
    }
}
