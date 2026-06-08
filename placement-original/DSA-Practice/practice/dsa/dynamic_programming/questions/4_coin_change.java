package dynamic_programming.questions;

/*
 * 4. COIN CHANGE (LeetCode 322)
 *
 * Problem Statement:
 * You are given an integer array coins representing coins of different denominations
 * and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 *
 * Conceptual Understanding:
 * - Find minimum number of coins to make exact amount
 * - Unbounded knapsack problem variant
 * - DP state: dp[i] = min coins to make amount i
 * - Base case: dp[0] = 0
 * - Transition: dp[i] = min(dp[i], dp[i - coin] + 1) for each coin
 * - Handle impossible cases (return -1)
 *
 * Time Complexity: O(amount * coins.length)
 * Space Complexity: O(amount)
 */

import java.util.*;

class CoinChange4 {

    // Method 1: Recursive with memoization (Top-down)
    public int coinChangeMemo(int[] coins, int amount) {
        if (amount == 0) return 0;
        if (coins == null || coins.length == 0) return -1;

        int[] memo = new int[amount + 1];
        Arrays.fill(memo, -2); // -2 means not computed
        return coinChangeHelper(coins, amount, memo);
    }

    private int coinChangeHelper(int[] coins, int remaining, int[] memo) {
        if (remaining == 0) return 0;
        if (remaining < 0) return -1;
        if (memo[remaining] != -2) return memo[remaining];

        int minCoins = Integer.MAX_VALUE;
        for (int coin : coins) {
            int result = coinChangeHelper(coins, remaining - coin, memo);
            if (result >= 0) {
                minCoins = Math.min(minCoins, result + 1);
            }
        }

        memo[remaining] = (minCoins == Integer.MAX_VALUE) ? -1 : minCoins;
        return memo[remaining];
    }

    // Method 2: Bottom-up dynamic programming
    public int coinChangeDP(int[] coins, int amount) {
        if (amount == 0) return 0;
        if (coins == null || coins.length == 0) return -1;

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

    // Method 3: BFS approach (find minimum coins)
    public int coinChangeBFS(int[] coins, int amount) {
        if (amount == 0) return 0;
        if (coins == null || coins.length == 0) return -1;

        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        queue.offer(0);
        visited.add(0);
        int level = 0;

        while (!queue.isEmpty()) {
            int size = queue.size();
            level++;

            for (int i = 0; i < size; i++) {
                int current = queue.poll();

                for (int coin : coins) {
                    int next = current + coin;

                    if (next == amount) return level;

                    if (next < amount && !visited.contains(next)) {
                        visited.add(next);
                        queue.offer(next);
                    }
                }
            }
        }

        return -1;
    }

    // Method 4: Greedy approach (may not work for all cases)
    public int coinChangeGreedy(int[] coins, int amount) {
        if (amount == 0) return 0;
        if (coins == null || coins.length == 0) return -1;

        Arrays.sort(coins);
        int count = 0;

        for (int i = coins.length - 1; i >= 0; i--) {
            while (amount >= coins[i]) {
                amount -= coins[i];
                count++;
            }
            if (amount == 0) break;
        }

        return amount == 0 ? count : -1;
    }

    // Method 5: Coin change with unlimited coins (complete solution)
    public static class CoinChangeResult {
        int minCoins;
        List<Integer> coinsUsed;
        boolean possible;

        public CoinChangeResult(int minCoins, List<Integer> coinsUsed, boolean possible) {
            this.minCoins = minCoins;
            this.coinsUsed = coinsUsed;
            this.possible = possible;
        }

        @Override
        public String toString() {
            if (!possible) return "Impossible";
            return String.format("Coins=%d, Used=%s", minCoins, coinsUsed);
        }
    }

    public CoinChangeResult coinChangeWithCoins(int[] coins, int amount) {
        if (amount == 0) {
            return new CoinChangeResult(0, new ArrayList<>(), true);
        }
        if (coins == null || coins.length == 0) {
            return new CoinChangeResult(-1, null, false);
        }

        int[] dp = new int[amount + 1];
        int[] coinUsed = new int[amount + 1];
        Arrays.fill(dp, amount + 1);
        Arrays.fill(coinUsed, -1);
        dp[0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int j = 0; j < coins.length; j++) {
                if (coins[j] <= i && dp[i - coins[j]] + 1 < dp[i]) {
                    dp[i] = dp[i - coins[j]] + 1;
                    coinUsed[i] = j;
                }
            }
        }

        if (dp[amount] > amount) {
            return new CoinChangeResult(-1, null, false);
        }

        // Reconstruct the solution
        List<Integer> coinsUsed = new ArrayList<>();
        int current = amount;
        while (current > 0) {
            int coinIndex = coinUsed[current];
            coinsUsed.add(coins[coinIndex]);
            current -= coins[coinIndex];
        }

        return new CoinChangeResult(dp[amount], coinsUsed, true);
    }

    // Method 6: Coin change with limited coins
    public int coinChangeLimited(int[] coins, int[] counts, int amount) {
        if (amount == 0) return 0;

        int[][] dp = new int[coins.length + 1][amount + 1];

        // Initialize dp table
        for (int i = 0; i <= coins.length; i++) {
            Arrays.fill(dp[i], Integer.MAX_VALUE / 2);
            dp[i][0] = 0;
        }

        for (int i = 1; i <= coins.length; i++) {
            int coin = coins[i - 1];
            int count = counts[i - 1];

            for (int j = 1; j <= amount; j++) {
                // Don't use this coin
                dp[i][j] = dp[i - 1][j];

                // Use this coin (up to count times)
                for (int k = 1; k <= count && k * coin <= j; k++) {
                    if (dp[i - 1][j - k * coin] != Integer.MAX_VALUE / 2) {
                        dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - k * coin] + k);
                    }
                }
            }
        }

        return dp[coins.length][amount] == Integer.MAX_VALUE / 2 ? -1 : dp[coins.length][amount];
    }

    // Method 7: Performance analysis
    public static class CoinChangeStats {
        int coinCount;
        int amount;
        int minCoins;
        long timeMs;
        String method;
        boolean possible;

        public CoinChangeStats(int coinCount, int amount, int minCoins, long timeMs,
                             String method, boolean possible) {
            this.coinCount = coinCount;
            this.amount = amount;
            this.minCoins = minCoins;
            this.timeMs = timeMs;
            this.method = method;
            this.possible = possible;
        }

        @Override
        public String toString() {
            return String.format("Coins=%d, Amount=%d, MinCoins=%d, Time=%dms, Method=%s, Possible=%s",
                               coinCount, amount, minCoins, timeMs, method, possible);
        }
    }

    public CoinChangeStats analyzeCoinChange(int[] coins, int amount, String method) {
        long startTime = System.nanoTime();
        int minCoins = -1;
        boolean possible = false;

        switch (method) {
            case "memo":
                minCoins = coinChangeMemo(coins, amount);
                possible = minCoins != -1;
                break;
            case "dp":
                minCoins = coinChangeDP(coins, amount);
                possible = minCoins != -1;
                break;
            case "bfs":
                minCoins = coinChangeBFS(coins, amount);
                possible = minCoins != -1;
                break;
            case "greedy":
                minCoins = coinChangeGreedy(coins, amount);
                possible = minCoins != -1;
                break;
        }

        long timeMs = (System.nanoTime() - startTime) / 1_000_000;
        return new CoinChangeStats(coins.length, amount, minCoins, timeMs, method, possible);
    }

    // Method 8: Validate coin change result
    public boolean validateCoinChange(int[] coins, int amount, CoinChangeResult result) {
        if (!result.possible) return amount != 0; // Should be impossible only if amount > 0

        if (result.coinsUsed == null || result.coinsUsed.size() != result.minCoins) {
            return false;
        }

        // Check if coins are valid
        Set<Integer> validCoins = new HashSet<>();
        for (int coin : coins) validCoins.add(coin);

        int sum = 0;
        for (int coin : result.coinsUsed) {
            if (!validCoins.contains(coin)) return false;
            sum += coin;
        }

        return sum == amount;
    }

    // Method 9: All possible ways to make change
    public int coinChangeWays(int[] coins, int amount) {
        if (amount == 0) return 1;
        if (coins == null || coins.length == 0) return 0;

        int[] dp = new int[amount + 1];
        dp[0] = 1;

        for (int coin : coins) {
            for (int i = coin; i <= amount; i++) {
                dp[i] += dp[i - coin];
            }
        }

        return dp[amount];
    }

    // Method 10: Minimum coins with coin constraints
    public int coinChangeWithConstraints(int[] coins, int amount, int maxCoins) {
        if (amount == 0) return 0;

        int[][] dp = new int[amount + 1][maxCoins + 1];
        for (int[] row : dp) Arrays.fill(row, -1);
        dp[0][0] = 0;

        for (int i = 1; i <= amount; i++) {
            for (int j = 1; j <= maxCoins; j++) {
                for (int coin : coins) {
                    if (coin <= i && dp[i - coin][j - 1] != -1) {
                        if (dp[i][j] == -1 || dp[i - coin][j - 1] + 1 < dp[i][j]) {
                            dp[i][j] = dp[i - coin][j - 1] + 1;
                        }
                    }
                }
            }
        }

        int minCoins = -1;
        for (int j = 1; j <= maxCoins; j++) {
            if (dp[amount][j] != -1) {
                if (minCoins == -1 || dp[amount][j] < minCoins) {
                    minCoins = dp[amount][j];
                }
            }
        }

        return minCoins;
    }

    // Method 11: Coin change with denominations
    public List<List<Integer>> coinChangeAllCombinations(int[] coins, int amount) {
        List<List<Integer>> result = new ArrayList<>();
        Arrays.sort(coins);
        backtrack(coins, amount, 0, new ArrayList<>(), result);
        return result;
    }

    private void backtrack(int[] coins, int remaining, int start, List<Integer> current, List<List<Integer>> result) {
        if (remaining == 0) {
            result.add(new ArrayList<>(current));
            return;
        }

        for (int i = start; i < coins.length; i++) {
            if (coins[i] <= remaining) {
                current.add(coins[i]);
                backtrack(coins, remaining - coins[i], i, current, result);
                current.remove(current.size() - 1);
            }
        }
    }

    // Method 12: Advanced coin change with memoization and optimization
    public int coinChangeOptimized(int[] coins, int amount) {
        if (amount == 0) return 0;
        if (coins == null || coins.length == 0) return -1;

        // Sort coins in descending order for optimization
        Arrays.sort(coins);
        reverse(coins);

        int[] memo = new int[amount + 1];
        Arrays.fill(memo, -2);
        return coinChangeOptimizedHelper(coins, amount, memo);
    }

    private int coinChangeOptimizedHelper(int[] coins, int remaining, int[] memo) {
        if (remaining == 0) return 0;
        if (remaining < 0) return -1;
        if (memo[remaining] != -2) return memo[remaining];

        int minCoins = Integer.MAX_VALUE;
        for (int coin : coins) {
            if (coin > remaining) continue; // Optimization: skip larger coins

            int result = coinChangeOptimizedHelper(coins, remaining - coin, memo);
            if (result >= 0) {
                minCoins = Math.min(minCoins, result + 1);
            }
        }

        memo[remaining] = (minCoins == Integer.MAX_VALUE) ? -1 : minCoins;
        return memo[remaining];
    }

    private void reverse(int[] arr) {
        int left = 0, right = arr.length - 1;
        while (left < right) {
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }

    // Test cases
    public static void main(String[] args) {
        CoinChange4 solution = new CoinChange4();

        // Test Case 1: Basic coin change
        System.out.println("=== Coin Change ===");
        int[] coins1 = {1, 2, 5};
        int amount1 = 11;
        System.out.println("Coins: " + Arrays.toString(coins1) + ", Amount: " + amount1);

        System.out.println("Memoization: " + solution.coinChangeMemo(coins1, amount1));
        System.out.println("DP: " + solution.coinChangeDP(coins1, amount1));
        System.out.println("BFS: " + solution.coinChangeBFS(coins1, amount1));
        System.out.println("Greedy: " + solution.coinChangeGreedy(coins1, amount1));

        // Test Case 2: With coin tracking
        CoinChangeResult result = solution.coinChangeWithCoins(coins1, amount1);
        System.out.println("With coins: " + result);

        // Test Case 3: Limited coins
        int[] counts = {2, 1, 1}; // 2 ones, 1 two, 1 five
        System.out.println("Limited coins: " + solution.coinChangeLimited(coins1, counts, 7));

        // Test Case 4: Performance analysis
        CoinChangeStats stats = solution.analyzeCoinChange(coins1, amount1, "dp");
        System.out.println("Analysis: " + stats);

        // Test Case 5: Validation
        boolean valid = solution.validateCoinChange(coins1, amount1, result);
        System.out.println("Result valid: " + valid);

        // Test Case 6: Number of ways
        System.out.println("Number of ways: " + solution.coinChangeWays(coins1, amount1));

        // Test Case 7: With constraints
        System.out.println("Max 3 coins: " + solution.coinChangeWithConstraints(coins1, amount1, 3));

        // Test Case 8: All combinations
        List<List<Integer>> combinations = solution.coinChangeAllCombinations(coins1, 5);
        System.out.println("All combinations for 5: " + combinations);

        // Test Case 9: Optimized version
        System.out.println("Optimized: " + solution.coinChangeOptimized(coins1, amount1));

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Amount 0: " + solution.coinChangeDP(coins1, 0));
        System.out.println("No coins: " + solution.coinChangeDP(new int[]{}, 5));
        System.out.println("Impossible: " + solution.coinChangeDP(new int[]{2}, 3));

        // Test Case 11: Compare methods
        System.out.println("\nMethod comparison:");
        int[] testCoins = {1, 3, 4};
        int testAmount = 6;
        for (String method : Arrays.asList("memo", "dp", "bfs", "greedy")) {
            CoinChangeStats s = solution.analyzeCoinChange(testCoins, testAmount, method);
            System.out.println(method + ": " + s.minCoins + " coins, " + s.timeMs + "ms");
        }

        // Test Case 12: Large amount
        int[] largeCoins = {1, 2, 5, 10, 20, 50, 100};
        CoinChangeStats largeStats = solution.analyzeCoinChange(largeCoins, 999, "dp");
        System.out.println("Large amount: " + largeStats);
    }
}