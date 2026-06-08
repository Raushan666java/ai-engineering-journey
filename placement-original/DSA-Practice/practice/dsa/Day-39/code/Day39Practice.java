package day39.practice;

import java.util.*;

/**
 * Day 39: Advanced 2D DP Practice Problems
 * 
 * Practice Problems:
 * 1. Maximal Square
 * 2. Maximal Rectangle
 * 3. Burst Balloons
 * 4. Matrix Chain Multiplication
 * 5. Palindrome Partitioning II
 * 6. Scramble String
 * 7. Dungeon Game
 * 8. Cherry Pickup
 * 
 * Each problem includes multiple approaches and optimizations
 */
public class Day39Practice {
    
    // ==================== 1. MAXIMAL SQUARE ====================
    
    /**
     * LC 221: Maximal Square
     * 
     * Problem: Find largest square containing only 1's in binary matrix.
     * Example: [["1","0","1","0","0"],
     *           ["1","0","1","1","1"],
     *           ["1","1","1","1","1"],
     *           ["1","0","0","1","0"]] → 4 (2×2 square)
     * 
     * Approach: 2D DP
     * State: dp[i][j] = side length of largest square with bottom-right at (i,j)
     * Transition: If matrix[i][j] == '1':
     *             dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int maximalSquare(char[][] matrix) {
        if (matrix == null || matrix.length == 0) return 0;
        
        int m = matrix.length, n = matrix[0].length;
        int[][] dp = new int[m + 1][n + 1];
        int maxSide = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    dp[i][j] = Math.min(dp[i - 1][j],
                               Math.min(dp[i][j - 1], dp[i - 1][j - 1])) + 1;
                    maxSide = Math.max(maxSide, dp[i][j]);
                }
            }
        }
        
        return maxSide * maxSide;
    }
    
    /**
     * Maximal Square Space Optimized: O(n) space
     */
    public static int maximalSquareOptimized(char[][] matrix) {
        if (matrix == null || matrix.length == 0) return 0;
        
        int m = matrix.length, n = matrix[0].length;
        int[] prev = new int[n + 1];
        int[] curr = new int[n + 1];
        int maxSide = 0;
        
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                if (matrix[i - 1][j - 1] == '1') {
                    curr[j] = Math.min(prev[j], Math.min(curr[j - 1], prev[j - 1])) + 1;
                    maxSide = Math.max(maxSide, curr[j]);
                } else {
                    curr[j] = 0;
                }
            }
            int[] temp = prev;
            prev = curr;
            curr = temp;
        }
        
        return maxSide * maxSide;
    }
    
    // ==================== 2. MAXIMAL RECTANGLE ====================
    
    /**
     * LC 85: Maximal Rectangle
     * 
     * Problem: Find largest rectangle containing only 1's in binary matrix.
     * Example: [["1","0","1","0","0"],
     *           ["1","0","1","1","1"],
     *           ["1","1","1","1","1"],
     *           ["1","0","0","1","0"]] → 6 (2×3 rectangle)
     * 
     * Approach: Use largest rectangle in histogram for each row
     * Time: O(m × n), Space: O(n)
     */
    public static int maximalRectangle(char[][] matrix) {
        if (matrix == null || matrix.length == 0) return 0;
        
        int m = matrix.length, n = matrix[0].length;
        int[] heights = new int[n];
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            // Update heights for current row
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    heights[j]++;
                } else {
                    heights[j] = 0;
                }
            }
            // Find max rectangle in histogram
            maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
        }
        
        return maxArea;
    }
    
    /**
     * Helper: Largest Rectangle in Histogram
     */
    private static int largestRectangleInHistogram(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int n = heights.length;
        
        for (int i = 0; i < n; i++) {
            while (!stack.isEmpty() && heights[i] < heights[stack.peek()]) {
                int h = heights[stack.pop()];
                int w = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, h * w);
            }
            stack.push(i);
        }
        
        while (!stack.isEmpty()) {
            int h = heights[stack.pop()];
            int w = stack.isEmpty() ? n : n - stack.peek() - 1;
            maxArea = Math.max(maxArea, h * w);
        }
        
        return maxArea;
    }
    
    /**
     * Maximal Rectangle using DP (alternative approach)
     */
    public static int maximalRectangleDP(char[][] matrix) {
        if (matrix == null || matrix.length == 0) return 0;
        
        int m = matrix.length, n = matrix[0].length;
        int[] left = new int[n];
        int[] right = new int[n];
        int[] height = new int[n];
        Arrays.fill(right, n);
        
        int maxArea = 0;
        
        for (int i = 0; i < m; i++) {
            int curLeft = 0, curRight = n;
            
            // Update height
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    height[j]++;
                } else {
                    height[j] = 0;
                }
            }
            
            // Update left boundary
            for (int j = 0; j < n; j++) {
                if (matrix[i][j] == '1') {
                    left[j] = Math.max(left[j], curLeft);
                } else {
                    left[j] = 0;
                    curLeft = j + 1;
                }
            }
            
            // Update right boundary
            for (int j = n - 1; j >= 0; j--) {
                if (matrix[i][j] == '1') {
                    right[j] = Math.min(right[j], curRight);
                } else {
                    right[j] = n;
                    curRight = j;
                }
            }
            
            // Calculate area
            for (int j = 0; j < n; j++) {
                maxArea = Math.max(maxArea, (right[j] - left[j]) * height[j]);
            }
        }
        
        return maxArea;
    }
    
    // ==================== 3. BURST BALLOONS ====================
    
    /**
     * LC 312: Burst Balloons
     * 
     * Problem: Burst balloons to maximize coins. Coins = nums[i-1] × nums[i] × nums[i+1].
     * Example: [3,1,5,8] → 167
     * 
     * Approach: Interval DP (think about which balloon to burst LAST)
     * State: dp[i][j] = max coins from bursting balloons (i, j) (exclusive)
     * Transition: For each k in (i, j), assume k is burst last:
     *             dp[i][j] = max(dp[i][k] + nums[i]*nums[k]*nums[j] + dp[k][j])
     * 
     * Time: O(n³), Space: O(n²)
     */
    public static int maxCoins(int[] nums) {
        int n = nums.length;
        // Add boundary balloons
        int[] arr = new int[n + 2];
        arr[0] = 1;
        arr[n + 1] = 1;
        for (int i = 0; i < n; i++) {
            arr[i + 1] = nums[i];
        }
        
        int[][] dp = new int[n + 2][n + 2];
        
        // Length of subarray
        for (int len = 2; len <= n + 1; len++) {
            for (int i = 0; i + len <= n + 1; i++) {
                int j = i + len;
                // Try bursting balloon k last
                for (int k = i + 1; k < j; k++) {
                    dp[i][j] = Math.max(dp[i][j],
                        dp[i][k] + arr[i] * arr[k] * arr[j] + dp[k][j]);
                }
            }
        }
        
        return dp[0][n + 1];
    }
    
    /**
     * Burst Balloons with Memoization (top-down)
     */
    public static int maxCoinsMemo(int[] nums) {
        int n = nums.length;
        int[] arr = new int[n + 2];
        arr[0] = 1;
        arr[n + 1] = 1;
        for (int i = 0; i < n; i++) {
            arr[i + 1] = nums[i];
        }
        
        int[][] memo = new int[n + 2][n + 2];
        return burstBalloonsHelper(arr, 0, n + 1, memo);
    }
    
    private static int burstBalloonsHelper(int[] arr, int left, int right, int[][] memo) {
        if (left + 1 == right) return 0;
        if (memo[left][right] > 0) return memo[left][right];
        
        int maxCoins = 0;
        for (int k = left + 1; k < right; k++) {
            int coins = arr[left] * arr[k] * arr[right];
            coins += burstBalloonsHelper(arr, left, k, memo);
            coins += burstBalloonsHelper(arr, k, right, memo);
            maxCoins = Math.max(maxCoins, coins);
        }
        
        memo[left][right] = maxCoins;
        return maxCoins;
    }
    
    // ==================== 4. MATRIX CHAIN MULTIPLICATION ====================
    
    /**
     * Matrix Chain Multiplication
     * 
     * Problem: Find optimal way to multiply chain of matrices.
     * Example: matrices A(10×20), B(20×30), C(30×40), D(40×30)
     *          Dimensions: [10, 20, 30, 40, 30]
     *          Optimal: (A(BC))D with 26,000 operations
     * 
     * Approach: Interval DP
     * State: dp[i][j] = min operations to multiply matrices from i to j
     * Transition: dp[i][j] = min(dp[i][k] + dp[k+1][j] + p[i-1]*p[k]*p[j])
     * 
     * Time: O(n³), Space: O(n²)
     */
    public static int matrixChainMultiplication(int[] p) {
        int n = p.length - 1; // Number of matrices
        int[][] dp = new int[n][n];
        
        // Length of chain
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                // Try splitting at different positions
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                    dp[i][j] = Math.min(dp[i][j], cost);
                }
            }
        }
        
        return dp[0][n - 1];
    }
    
    /**
     * Matrix Chain Multiplication with parenthesization
     */
    public static String matrixChainOrder(int[] p) {
        int n = p.length - 1;
        int[][] dp = new int[n][n];
        int[][] split = new int[n][n];
        
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;
                dp[i][j] = Integer.MAX_VALUE;
                
                for (int k = i; k < j; k++) {
                    int cost = dp[i][k] + dp[k + 1][j] + p[i] * p[k + 1] * p[j + 1];
                    if (cost < dp[i][j]) {
                        dp[i][j] = cost;
                        split[i][j] = k;
                    }
                }
            }
        }
        
        return buildParenthesization(split, 0, n - 1);
    }
    
    private static String buildParenthesization(int[][] split, int i, int j) {
        if (i == j) {
            return "A" + (i + 1);
        }
        
        int k = split[i][j];
        String left = buildParenthesization(split, i, k);
        String right = buildParenthesization(split, k + 1, j);
        return "(" + left + right + ")";
    }
    
    // ==================== 5. PALINDROME PARTITIONING II ====================
    
    /**
     * LC 132: Palindrome Partitioning II
     * 
     * Problem: Minimum cuts needed to partition string into palindromes.
     * Example: "aab" → 1 (aa|b)
     * 
     * Approach: 2D DP for palindrome check + 1D DP for min cuts
     * State: cuts[i] = min cuts for s[0..i]
     * 
     * Time: O(n²), Space: O(n²)
     */
    public static int minCut(String s) {
        int n = s.length();
        boolean[][] isPalin = new boolean[n][n];
        
        // Build palindrome table
        for (int i = n - 1; i >= 0; i--) {
            for (int j = i; j < n; j++) {
                if (s.charAt(i) == s.charAt(j) && (j - i <= 2 || isPalin[i + 1][j - 1])) {
                    isPalin[i][j] = true;
                }
            }
        }
        
        // Calculate min cuts
        int[] cuts = new int[n];
        for (int j = 0; j < n; j++) {
            if (isPalin[0][j]) {
                cuts[j] = 0;
            } else {
                cuts[j] = j; // Max cuts
                for (int i = 0; i < j; i++) {
                    if (isPalin[i + 1][j]) {
                        cuts[j] = Math.min(cuts[j], cuts[i] + 1);
                    }
                }
            }
        }
        
        return cuts[n - 1];
    }
    
    /**
     * Palindrome Partitioning II - Optimized
     */
    public static int minCutOptimized(String s) {
        int n = s.length();
        int[] cuts = new int[n];
        boolean[][] isPalin = new boolean[n][n];
        
        for (int i = 0; i < n; i++) {
            cuts[i] = i; // Max possible cuts
            for (int j = 0; j <= i; j++) {
                if (s.charAt(j) == s.charAt(i) && (i - j <= 2 || isPalin[j + 1][i - 1])) {
                    isPalin[j][i] = true;
                    cuts[i] = (j == 0) ? 0 : Math.min(cuts[i], cuts[j - 1] + 1);
                }
            }
        }
        
        return cuts[n - 1];
    }
    
    // ==================== 6. SCRAMBLE STRING ====================
    
    /**
     * LC 87: Scramble String
     * 
     * Problem: Check if s2 is scrambled version of s1 (by recursively dividing and swapping).
     * Example: s1 = "great", s2 = "rgeat" → true
     * 
     * Approach: 3D DP (or memoization with string keys)
     * State: dp[i][j][len] = whether s1[i..i+len-1] matches s2[j..j+len-1]
     * 
     * Time: O(n⁴), Space: O(n³)
     */
    public static boolean isScramble(String s1, String s2) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        int n = s1.length();
        boolean[][][] dp = new boolean[n][n][n + 1];
        
        // Base case: length 1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                dp[i][j][1] = (s1.charAt(i) == s2.charAt(j));
            }
        }
        
        // Try all lengths
        for (int len = 2; len <= n; len++) {
            for (int i = 0; i <= n - len; i++) {
                for (int j = 0; j <= n - len; j++) {
                    // Try all split positions
                    for (int k = 1; k < len; k++) {
                        // No swap
                        if (dp[i][j][k] && dp[i + k][j + k][len - k]) {
                            dp[i][j][len] = true;
                            break;
                        }
                        // Swap
                        if (dp[i][j + len - k][k] && dp[i + k][j][len - k]) {
                            dp[i][j][len] = true;
                            break;
                        }
                    }
                }
            }
        }
        
        return dp[0][0][n];
    }
    
    /**
     * Scramble String with Memoization (more intuitive)
     */
    public static boolean isScrambleMemo(String s1, String s2) {
        Map<String, Boolean> memo = new HashMap<>();
        return isScrambleHelper(s1, s2, memo);
    }
    
    private static boolean isScrambleHelper(String s1, String s2, Map<String, Boolean> memo) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        String key = s1 + "#" + s2;
        if (memo.containsKey(key)) return memo.get(key);
        
        // Check if characters match
        int[] count = new int[26];
        for (int i = 0; i < s1.length(); i++) {
            count[s1.charAt(i) - 'a']++;
            count[s2.charAt(i) - 'a']--;
        }
        for (int c : count) {
            if (c != 0) {
                memo.put(key, false);
                return false;
            }
        }
        
        // Try all split positions
        for (int i = 1; i < s1.length(); i++) {
            // No swap
            if (isScrambleHelper(s1.substring(0, i), s2.substring(0, i), memo) &&
                isScrambleHelper(s1.substring(i), s2.substring(i), memo)) {
                memo.put(key, true);
                return true;
            }
            // Swap
            if (isScrambleHelper(s1.substring(0, i), s2.substring(s2.length() - i), memo) &&
                isScrambleHelper(s1.substring(i), s2.substring(0, s2.length() - i), memo)) {
                memo.put(key, true);
                return true;
            }
        }
        
        memo.put(key, false);
        return false;
    }
    
    // ==================== 7. DUNGEON GAME ====================
    
    /**
     * LC 174: Dungeon Game
     * 
     * Problem: Find minimum initial health to reach bottom-right (health never drops below 1).
     * Example: [[-2,-3,3],[-5,-10,1],[10,30,-5]] → 7
     * 
     * Approach: 2D DP (bottom-up from destination)
     * State: dp[i][j] = min health needed at (i,j) to reach destination
     * Transition: dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j])
     * 
     * Time: O(m × n), Space: O(m × n)
     */
    public static int calculateMinimumHP(int[][] dungeon) {
        int m = dungeon.length, n = dungeon[0].length;
        int[][] dp = new int[m][n];
        
        // Start from bottom-right
        dp[m - 1][n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
        
        // Last column
        for (int i = m - 2; i >= 0; i--) {
            dp[i][n - 1] = Math.max(1, dp[i + 1][n - 1] - dungeon[i][n - 1]);
        }
        
        // Last row
        for (int j = n - 2; j >= 0; j--) {
            dp[m - 1][j] = Math.max(1, dp[m - 1][j + 1] - dungeon[m - 1][j]);
        }
        
        // Fill table
        for (int i = m - 2; i >= 0; i--) {
            for (int j = n - 2; j >= 0; j--) {
                int minHealthNeeded = Math.min(dp[i + 1][j], dp[i][j + 1]);
                dp[i][j] = Math.max(1, minHealthNeeded - dungeon[i][j]);
            }
        }
        
        return dp[0][0];
    }
    
    /**
     * Dungeon Game Space Optimized: O(n) space
     */
    public static int calculateMinimumHPOptimized(int[][] dungeon) {
        int m = dungeon.length, n = dungeon[0].length;
        int[] dp = new int[n];
        
        dp[n - 1] = Math.max(1, 1 - dungeon[m - 1][n - 1]);
        
        // Last row
        for (int j = n - 2; j >= 0; j--) {
            dp[j] = Math.max(1, dp[j + 1] - dungeon[m - 1][j]);
        }
        
        // Process remaining rows
        for (int i = m - 2; i >= 0; i--) {
            dp[n - 1] = Math.max(1, dp[n - 1] - dungeon[i][n - 1]);
            for (int j = n - 2; j >= 0; j--) {
                int minHealthNeeded = Math.min(dp[j], dp[j + 1]);
                dp[j] = Math.max(1, minHealthNeeded - dungeon[i][j]);
            }
        }
        
        return dp[0];
    }
    
    // ==================== 8. CHERRY PICKUP ====================
    
    /**
     * LC 741: Cherry Pickup
     * 
     * Problem: Pick max cherries going from (0,0) to (n-1,n-1) and back.
     * Example: [[0,1,-1],[1,0,-1],[1,1,1]] → 5
     * 
     * Approach: 3D DP (two people walking together)
     * Think of it as two people going from (0,0) to (n-1,n-1) simultaneously
     * State: dp[r1][c1][r2] = max cherries (c2 can be derived from r1,c1,r2)
     * 
     * Time: O(n³), Space: O(n³)
     */
    public static int cherryPickup(int[][] grid) {
        int n = grid.length;
        int[][][] dp = new int[n][n][n];
        
        // Initialize with -1 (impossible)
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                Arrays.fill(dp[i][j], -1);
            }
        }
        
        dp[0][0][0] = grid[0][0];
        
        for (int r1 = 0; r1 < n; r1++) {
            for (int c1 = 0; c1 < n; c1++) {
                for (int r2 = 0; r2 < n; r2++) {
                    int c2 = r1 + c1 - r2;
                    if (c2 < 0 || c2 >= n) continue;
                    if (grid[r1][c1] == -1 || grid[r2][c2] == -1) continue;
                    if (dp[r1][c1][r2] < 0) continue;
                    
                    int cherries = dp[r1][c1][r2];
                    
                    // Try all 4 directions for both persons
                    for (int i = 0; i <= 1; i++) {
                        for (int j = 0; j <= 1; j++) {
                            int nr1 = r1 + i;
                            int nc1 = c1 + (1 - i);
                            int nr2 = r2 + j;
                            int nc2 = c2 + (1 - j);
                            
                            if (nr1 >= n || nc1 >= n || nr2 >= n || nc2 >= n) continue;
                            if (grid[nr1][nc1] == -1 || grid[nr2][nc2] == -1) continue;
                            
                            int newCherries = cherries + grid[nr1][nc1];
                            if (nr1 != nr2 || nc1 != nc2) {
                                newCherries += grid[nr2][nc2];
                            }
                            
                            dp[nr1][nc1][nr2] = Math.max(dp[nr1][nc1][nr2], newCherries);
                        }
                    }
                }
            }
        }
        
        return Math.max(0, dp[n - 1][n - 1][n - 1]);
    }
    
    /**
     * Cherry Pickup with Memoization (top-down, cleaner)
     */
    public static int cherryPickupMemo(int[][] grid) {
        int n = grid.length;
        Integer[][][] memo = new Integer[n][n][n];
        int result = cherryPickupHelper(grid, 0, 0, 0, memo);
        return Math.max(0, result);
    }
    
    private static int cherryPickupHelper(int[][] grid, int r1, int c1, int r2, Integer[][][] memo) {
        int n = grid.length;
        int c2 = r1 + c1 - r2;
        
        // Out of bounds or hit thorn
        if (r1 >= n || c1 >= n || r2 >= n || c2 >= n || 
            grid[r1][c1] == -1 || grid[r2][c2] == -1) {
            return Integer.MIN_VALUE;
        }
        
        // Reached destination
        if (r1 == n - 1 && c1 == n - 1) {
            return grid[r1][c1];
        }
        
        if (memo[r1][c1][r2] != null) {
            return memo[r1][c1][r2];
        }
        
        int cherries = grid[r1][c1];
        if (r1 != r2 || c1 != c2) {
            cherries += grid[r2][c2];
        }
        
        // Try all 4 combinations
        int max = Math.max(
            Math.max(
                cherryPickupHelper(grid, r1 + 1, c1, r2 + 1, memo),
                cherryPickupHelper(grid, r1 + 1, c1, r2, memo)
            ),
            Math.max(
                cherryPickupHelper(grid, r1, c1 + 1, r2 + 1, memo),
                cherryPickupHelper(grid, r1, c1 + 1, r2, memo)
            )
        );
        
        cherries += max;
        memo[r1][c1][r2] = cherries;
        return cherries;
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 39: Advanced 2D DP Practice ===\n");
        
        // Demo 1: Maximal Square
        System.out.println("1. Maximal Square:");
        char[][] matrix1 = {
            {'1','0','1','0','0'},
            {'1','0','1','1','1'},
            {'1','1','1','1','1'},
            {'1','0','0','1','0'}
        };
        System.out.println("Max square area: " + maximalSquare(matrix1));
        System.out.println("Space optimized: " + maximalSquareOptimized(matrix1));
        
        // Demo 2: Maximal Rectangle
        System.out.println("\n2. Maximal Rectangle:");
        System.out.println("Max rectangle area: " + maximalRectangle(matrix1));
        System.out.println("DP approach: " + maximalRectangleDP(matrix1));
        
        // Demo 3: Burst Balloons
        System.out.println("\n3. Burst Balloons:");
        int[] balloons = {3, 1, 5, 8};
        System.out.println("Balloons: " + Arrays.toString(balloons));
        System.out.println("Max coins: " + maxCoins(balloons));
        System.out.println("Memoization: " + maxCoinsMemo(balloons));
        
        // Demo 4: Matrix Chain Multiplication
        System.out.println("\n4. Matrix Chain Multiplication:");
        int[] dimensions = {10, 20, 30, 40, 30};
        System.out.println("Dimensions: " + Arrays.toString(dimensions));
        System.out.println("Min operations: " + matrixChainMultiplication(dimensions));
        System.out.println("Parenthesization: " + matrixChainOrder(dimensions));
        
        // Demo 5: Palindrome Partitioning II
        System.out.println("\n5. Palindrome Partitioning II:");
        String s = "aab";
        System.out.println("String: " + s);
        System.out.println("Min cuts: " + minCut(s));
        System.out.println("Optimized: " + minCutOptimized(s));
        
        // Demo 6: Scramble String
        System.out.println("\n6. Scramble String:");
        String s1 = "great", s2 = "rgeat";
        System.out.println("S1: " + s1 + ", S2: " + s2);
        System.out.println("Is scramble: " + isScramble(s1, s2));
        System.out.println("Memoization: " + isScrambleMemo(s1, s2));
        
        // Demo 7: Dungeon Game
        System.out.println("\n7. Dungeon Game:");
        int[][] dungeon = {{-2,-3,3},{-5,-10,1},{10,30,-5}};
        System.out.println("Dungeon:");
        for (int[] row : dungeon) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println("Min initial health: " + calculateMinimumHP(dungeon));
        System.out.println("Space optimized: " + calculateMinimumHPOptimized(dungeon));
        
        // Demo 8: Cherry Pickup
        System.out.println("\n8. Cherry Pickup:");
        int[][] grid = {{0,1,-1},{1,0,-1},{1,1,1}};
        System.out.println("Grid:");
        for (int[] row : grid) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println("Max cherries: " + cherryPickup(grid));
        System.out.println("Memoization: " + cherryPickupMemo(grid));
    }
}
