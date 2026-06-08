package arrays.questions;

/*
 * 2. BEST TIME TO BUY AND SELL STOCK (LeetCode 121)
 *
 * Problem Statement:
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing a
 * different day in the future to sell that stock. Return the maximum profit you can achieve
 * from this transaction. If you cannot achieve any profit, return 0.
 *
 * Conceptual Understanding:
 * - Find maximum difference between two elements where smaller comes before larger
 * - Buy low, sell high (future day)
 * - Single transaction only
 * - Time: O(n), Space: O(1)
 * - Alternative: O(n²) brute force, O(n log n) with divide and conquer
 * - Kadane's algorithm variant for maximum subarray difference
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

class BestTimeToBuyAndSellStock2 {

    // Method 1: One pass (most efficient)
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

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

    // Method 2: Brute force (O(n²))
    public int maxProfitBruteForce(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int maxProfit = 0;

        for (int i = 0; i < prices.length - 1; i++) {
            for (int j = i + 1; j < prices.length; j++) {
                int profit = prices[j] - prices[i];
                if (profit > maxProfit) {
                    maxProfit = profit;
                }
            }
        }

        return maxProfit;
    }

    // Method 3: Using Kadane's algorithm concept
    public int maxProfitKadane(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        // Convert to profit array: prices[i+1] - prices[i]
        int[] profits = new int[prices.length - 1];
        for (int i = 0; i < profits.length; i++) {
            profits[i] = prices[i + 1] - prices[i];
        }

        // Find maximum subarray sum
        int maxCurrent = profits[0];
        int maxGlobal = profits[0];

        for (int i = 1; i < profits.length; i++) {
            maxCurrent = Math.max(profits[i], maxCurrent + profits[i]);
            if (maxCurrent > maxGlobal) {
                maxGlobal = maxCurrent;
            }
        }

        return Math.max(0, maxGlobal);
    }

    // Method 4: Two pointers approach
    public int maxProfitTwoPointers(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int left = 0; // Buy day
        int right = 1; // Sell day
        int maxProfit = 0;

        while (right < prices.length) {
            if (prices[right] > prices[left]) {
                // Potential profit
                maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
            } else {
                // Update buy day to current sell day
                left = right;
            }
            right++;
        }

        return maxProfit;
    }

    // Method 5: Dynamic programming
    public int maxProfitDP(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int[] dp = new int[prices.length];
        int minPrice = prices[0];

        for (int i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
        }

        return dp[prices.length - 1];
    }

    // Method 6: Using streams (educational)
    public int maxProfitStreams(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        return java.util.stream.IntStream.range(0, prices.length)
                .mapToObj(i -> java.util.stream.IntStream.range(i + 1, prices.length)
                        .map(j -> prices[j] - prices[i])
                        .max()
                        .orElse(0))
                .mapToInt(Integer::intValue)
                .max()
                .orElse(0);
    }

    // Method 7: Divide and conquer (O(n log n))
    public int maxProfitDivideConquer(int[] prices) {
        return maxProfitHelper(prices, 0, prices.length - 1);
    }

    private int maxProfitHelper(int[] prices, int start, int end) {
        if (start >= end) {
            return 0;
        }

        int mid = start + (end - start) / 2;

        // Max profit in left half
        int leftProfit = maxProfitHelper(prices, start, mid);

        // Max profit in right half
        int rightProfit = maxProfitHelper(prices, mid + 1, end);

        // Max profit across midpoint
        int minLeft = Integer.MAX_VALUE;
        for (int i = start; i <= mid; i++) {
            minLeft = Math.min(minLeft, prices[i]);
        }

        int maxRight = Integer.MIN_VALUE;
        for (int i = mid + 1; i <= end; i++) {
            maxRight = Math.max(maxRight, prices[i]);
        }

        int crossProfit = maxRight - minLeft;

        return Math.max(Math.max(leftProfit, rightProfit), crossProfit);
    }

    // Method 8: With transaction fee (variation)
    public int maxProfitWithFee(int[] prices, int fee) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int minPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] < minPrice) {
                minPrice = prices[i];
            } else if (prices[i] - minPrice - fee > maxProfit) {
                maxProfit = prices[i] - minPrice - fee;
            }
        }

        return Math.max(0, maxProfit);
    }

    // Method 9: Multiple transactions (variation)
    public int maxProfitMultipleTransactions(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] > prices[i - 1]) {
                maxProfit += prices[i] - prices[i - 1];
            }
        }

        return maxProfit;
    }

    // Method 10: With cooldown (variation)
    public int maxProfitWithCooldown(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int[] dp = new int[prices.length];
        int minPrice = prices[0];

        for (int i = 1; i < prices.length; i++) {
            minPrice = Math.min(minPrice, prices[i]);
            if (i >= 2) {
                dp[i] = Math.max(dp[i - 1], Math.max(dp[i - 2], prices[i] - minPrice));
            } else {
                dp[i] = Math.max(dp[i - 1], prices[i] - minPrice);
            }
        }

        return dp[prices.length - 1];
    }

    // Method 11: Best time with at most k transactions
    public int maxProfitKTransactions(int[] prices, int k) {
        if (prices == null || prices.length <= 1 || k <= 0) {
            return 0;
        }

        if (k >= prices.length / 2) {
            // Can do as many transactions as we want
            return maxProfitMultipleTransactions(prices);
        }

        int[][] dp = new int[k + 1][prices.length];

        for (int i = 1; i <= k; i++) {
            int maxDiff = -prices[0];
            for (int j = 1; j < prices.length; j++) {
                dp[i][j] = Math.max(dp[i][j - 1], prices[j] + maxDiff);
                maxDiff = Math.max(maxDiff, dp[i - 1][j] - prices[j]);
            }
        }

        return dp[k][prices.length - 1];
    }

    // Method 12: Find all profitable periods
    public java.util.List<int[]> findAllProfitablePeriods(int[] prices) {
        java.util.List<int[]> profitablePeriods = new java.util.ArrayList<>();

        for (int i = 0; i < prices.length - 1; i++) {
            for (int j = i + 1; j < prices.length; j++) {
                if (prices[j] > prices[i]) {
                    profitablePeriods.add(new int[]{i, j, prices[j] - prices[i]});
                }
            }
        }

        return profitablePeriods;
    }

    // Test cases
    public static void main(String[] args) {
        BestTimeToBuyAndSellStock2 solution = new BestTimeToBuyAndSellStock2();

        // Test Case 1: Basic increasing
        int[] prices1 = {7, 1, 5, 3, 6, 4};
        System.out.println("Max profit: " + solution.maxProfit(prices1)); // Expected: 5

        // Test Case 2: Decreasing prices
        int[] prices2 = {7, 6, 4, 3, 1};
        System.out.println("Max profit: " + solution.maxProfit(prices2)); // Expected: 0

        // Test Case 3: Single element
        int[] prices3 = {5};
        System.out.println("Max profit: " + solution.maxProfit(prices3)); // Expected: 0

        // Test Case 4: Performance comparison
        int[] largeArray = new int[10000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = (int)(Math.random() * 1000);
        }

        long startTime, endTime;

        // One pass approach
        startTime = System.nanoTime();
        int result1 = solution.maxProfit(largeArray);
        endTime = System.nanoTime();
        System.out.println("\nOne pass result: " + result1 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Brute force approach
        startTime = System.nanoTime();
        int result2 = solution.maxProfitBruteForce(largeArray);
        endTime = System.nanoTime();
        System.out.println("Brute force result: " + result2 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Test Case 5: Edge cases
        System.out.println("\nEdge cases:");

        // Two elements - profit
        int[] twoProfit = {1, 2};
        System.out.println("Two elements profit: " + solution.maxProfit(twoProfit));

        // Two elements - no profit
        int[] twoNoProfit = {2, 1};
        System.out.println("Two elements no profit: " + solution.maxProfit(twoNoProfit));

        // All same prices
        int[] samePrices = {3, 3, 3, 3};
        System.out.println("Same prices: " + solution.maxProfit(samePrices));

        // Test Case 6: Variations
        int[] prices = {1, 3, 2, 8, 4, 9};

        System.out.println("\nVariations:");
        System.out.println("Multiple transactions: " + solution.maxProfitMultipleTransactions(prices));
        System.out.println("With fee (fee=2): " + solution.maxProfitWithFee(prices, 2));
        System.out.println("With cooldown: " + solution.maxProfitWithCooldown(prices));
        System.out.println("At most 2 transactions: " + solution.maxProfitKTransactions(prices, 2));

        // Test Case 7: All profitable periods
        java.util.List<int[]> periods = solution.findAllProfitablePeriods(new int[]{1, 3, 2, 5});
        System.out.println("All profitable periods:");
        for (int[] period : periods) {
            System.out.println("Buy day " + period[0] + ", Sell day " + period[1] + ", Profit: " + period[2]);
        }
    }
}