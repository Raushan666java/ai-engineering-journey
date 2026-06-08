/*
 * 6. BEST TIME TO BUY AND SELL STOCK (LeetCode 121)
 *
 * Problem Statement:
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.
 * You want to maximize your profit by choosing a single day to buy one stock and choosing
 * a different day in the future to sell that stock.
 * Return the maximum profit you can achieve from this transaction.
 * If you cannot achieve any profit, return 0.
 *
 * Conceptual Understanding:
 * - This is a classic greedy algorithm problem
 * - We need to find the maximum difference between two prices where buy date < sell date
 * - Greedy approach: track minimum price seen so far and calculate profit at each step
 * - Key insight: The maximum profit is the maximum of (current price - minimum price so far)
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

public class BestTimeBuySellStock {

    // Method 1: Single Pass Greedy Approach
    public int maxProfit(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int minPrice = Integer.MAX_VALUE;  // Minimum price seen so far
        int maxProfit = 0;                  // Maximum profit achieved

        for (int price : prices) {
            // Update minimum price if current price is lower
            if (price < minPrice) {
                minPrice = price;
            }
            // Calculate profit if we sell today
            else if (price - minPrice > maxProfit) {
                maxProfit = price - minPrice;
            }
        }

        return maxProfit;
    }

    // Method 2: Alternative implementation with same logic
    public int maxProfitAlternative(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int minPrice = prices[0];
        int maxProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            // Update minimum price
            minPrice = Math.min(minPrice, prices[i]);

            // Update maximum profit
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }

        return maxProfit;
    }

    // Method 3: Brute Force (for comparison - O(n²))
    public int maxProfitBruteForce(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int maxProfit = 0;

        for (int i = 0; i < prices.length - 1; i++) {
            for (int j = i + 1; j < prices.length; j++) {
                int profit = prices[j] - prices[i];
                maxProfit = Math.max(maxProfit, profit);
            }
        }

        return maxProfit;
    }

    // Method 4: Using Kadane's Algorithm variant
    public int maxProfitKadane(int[] prices) {
        if (prices == null || prices.length <= 1) {
            return 0;
        }

        int maxProfit = 0;
        int currentProfit = 0;

        for (int i = 1; i < prices.length; i++) {
            // Calculate daily profit/loss
            int dailyProfit = prices[i] - prices[i - 1];

            // Add to current profit (Kadane's style)
            currentProfit = Math.max(0, currentProfit + dailyProfit);

            // Update max profit
            maxProfit = Math.max(maxProfit, currentProfit);
        }

        return maxProfit;
    }

    // Test cases
    public static void main(String[] args) {
        BestTimeBuySellStock solution = new BestTimeBuySellStock();

        // Test Case 1: Increasing prices
        int[] prices1 = {7, 1, 5, 3, 6, 4};
        System.out.println("Test 1: " + solution.maxProfit(prices1)); // Expected: 5 (6-1)

        // Test Case 2: Decreasing prices
        int[] prices2 = {7, 6, 4, 3, 1};
        System.out.println("Test 2: " + solution.maxProfit(prices2)); // Expected: 0

        // Test Case 3: Single price
        int[] prices3 = {5};
        System.out.println("Test 3: " + solution.maxProfit(prices3)); // Expected: 0

        // Test Case 4: Empty array
        int[] prices4 = {};
        System.out.println("Test 4: " + solution.maxProfit(prices4)); // Expected: 0

        // Test Case 5: Multiple peaks
        int[] prices5 = {3, 2, 6, 5, 0, 3};
        System.out.println("Test 5: " + solution.maxProfit(prices5)); // Expected: 4 (3-0)
    }
}