/**
 * LeetCode #121 - Best Time to Buy and Sell Stock
 * Difficulty: Easy
 * 
 * Problem: You are given an array prices where prices[i] is the price of 
 * a given stock on the ith day. You want to maximize your profit by choosing 
 * a single day to buy one stock and choosing a different day in the future 
 * to sell that stock. Return the maximum profit you can achieve from this 
 * transaction. If you cannot achieve any profit, return 0.
 * 
 * Examples:
 * Input: prices = [7,1,5,3,6,4]
 * Output: 5
 * Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
 * 
 * Input: prices = [7,6,4,3,1]
 * Output: 0
 * Explanation: No profit possible (prices keep decreasing).
 */

import java.util.Arrays;

public class BestTimeToBuyStock {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════╗");
        System.out.println("║  LeetCode #121: Best Time to Buy and Sell Stock ║");
        System.out.println("╚════════════════════════════════════════════════╝\n");
        
        // Test cases
        int[][] testCases = {
            {7, 1, 5, 3, 6, 4},
            {7, 6, 4, 3, 1},
            {2, 4, 1},
            {1, 2, 3, 4, 5},
            {5, 4, 3, 2, 1}
        };
        
        int[] expectedOutputs = {5, 0, 2, 4, 0};
        
        for (int i = 0; i < testCases.length; i++) {
            System.out.println("Test Case " + (i + 1) + ": " + Arrays.toString(testCases[i]));
            System.out.println("Expected: " + expectedOutputs[i]);
            
            int result1 = maxProfit_BruteForce(testCases[i]);
            int result2 = maxProfit_Optimal(testCases[i]);
            
            System.out.println("Brute Force: " + result1 + 
                             (result1 == expectedOutputs[i] ? " ✅" : " ❌"));
            System.out.println("Optimal:     " + result2 + 
                             (result2 == expectedOutputs[i] ? " ✅" : " ❌"));
            System.out.println();
        }
        
        // Detailed walkthrough
        detailedWalkthrough();
        
        // Performance comparison
        performanceComparison();
    }
    
    /**
     * APPROACH 1: Brute Force
     * Try all possible buy-sell combinations
     * 
     * Time Complexity: O(n²)
     * Space Complexity: O(1)
     * 
     * Logic:
     * - For each day, consider it as buy day
     * - Check all future days as potential sell days
     * - Track maximum profit
     * 
     * ❌ Cons: Too slow for large inputs
     */
    public static int maxProfit_BruteForce(int[] prices) {
        int maxProfit = 0;
        
        // Try all buy days
        for (int buyDay = 0; buyDay < prices.length; buyDay++) {
            // Try all sell days after buy day
            for (int sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
                int profit = prices[sellDay] - prices[buyDay];
                maxProfit = Math.max(maxProfit, profit);
            }
        }
        
        return maxProfit;
    }
    
    /**
     * APPROACH 2: One Pass - Optimal (BEST)
     * Track minimum price seen so far and maximum profit
     * 
     * Time Complexity: O(n) - single pass
     * Space Complexity: O(1) - only two variables
     * 
     * Logic:
     * - Keep track of minimum price seen so far (best buy price)
     * - For each day, calculate profit if we sell today
     * - Update maximum profit if current profit is better
     * 
     * Key Insight: We want to buy at lowest price and sell at highest 
     * price AFTER the buy day. So track minimum price as we go.
     * 
     * ✅ This is the OPTIMAL solution for interviews!
     */
    public static int maxProfit_Optimal(int[] prices) {
        if (prices == null || prices.length < 2) {
            return 0;  // Can't make any transaction
        }
        
        int minPrice = prices[0];  // Minimum price seen so far
        int maxProfit = 0;         // Maximum profit found
        
        for (int i = 1; i < prices.length; i++) {
            // Calculate profit if we sell at current price
            int currentProfit = prices[i] - minPrice;
            
            // Update max profit if current is better
            maxProfit = Math.max(maxProfit, currentProfit);
            
            // Update minimum price if current is lower
            minPrice = Math.min(minPrice, prices[i]);
        }
        
        return maxProfit;
    }
    
    /**
     * APPROACH 3: With Buy/Sell Day Tracking
     * Same as optimal but also tracks which days to buy/sell
     */
    public static void maxProfit_WithDays(int[] prices) {
        if (prices == null || prices.length < 2) {
            System.out.println("Not enough data for transaction");
            return;
        }
        
        int minPrice = prices[0];
        int maxProfit = 0;
        int buyDay = 0;
        int sellDay = 0;
        int tempBuyDay = 0;
        
        for (int i = 1; i < prices.length; i++) {
            // If current price is lower, update minimum and temp buy day
            if (prices[i] < minPrice) {
                minPrice = prices[i];
                tempBuyDay = i;
            }
            
            // Calculate profit
            int currentProfit = prices[i] - minPrice;
            
            // If profit is better, update
            if (currentProfit > maxProfit) {
                maxProfit = currentProfit;
                buyDay = tempBuyDay;
                sellDay = i;
            }
        }
        
        System.out.println("Array: " + Arrays.toString(prices));
        if (maxProfit > 0) {
            System.out.println("Buy on day " + buyDay + " at price " + prices[buyDay]);
            System.out.println("Sell on day " + sellDay + " at price " + prices[sellDay]);
            System.out.println("Maximum Profit: " + maxProfit);
        } else {
            System.out.println("No profit possible");
        }
    }
    
    /**
     * Detailed walkthrough with example
     */
    public static void detailedWalkthrough() {
        System.out.println("=".repeat(50));
        System.out.println("DETAILED WALKTHROUGH");
        System.out.println("=".repeat(50));
        
        int[] prices = {7, 1, 5, 3, 6, 4};
        System.out.println("Prices: " + Arrays.toString(prices));
        System.out.println("\nDay-by-day analysis:");
        
        int minPrice = prices[0];
        int maxProfit = 0;
        
        System.out.println("Day 0: Price=7, MinPrice=7, Profit=0");
        
        for (int i = 1; i < prices.length; i++) {
            int currentProfit = prices[i] - minPrice;
            
            System.out.printf("Day %d: Price=%d, MinPrice=%d, ", i, prices[i], minPrice);
            System.out.printf("CurrentProfit=%d, MaxProfit=%d", currentProfit, maxProfit);
            
            if (currentProfit > maxProfit) {
                System.out.print(" ← New max profit!");
                maxProfit = currentProfit;
            }
            
            if (prices[i] < minPrice) {
                System.out.print(" ← New min price!");
                minPrice = prices[i];
            }
            
            System.out.println();
        }
        
        System.out.println("\nFinal Answer: " + maxProfit);
        System.out.println();
    }
    
    /**
     * Performance comparison
     */
    public static void performanceComparison() {
        System.out.println("=".repeat(50));
        System.out.println("PERFORMANCE COMPARISON");
        System.out.println("=".repeat(50));
        
        // Create large test array
        int[] largePrices = new int[100000];
        for (int i = 0; i < largePrices.length; i++) {
            largePrices[i] = (int)(Math.random() * 1000);
        }
        
        // Test Optimal approach
        long start = System.nanoTime();
        int result = maxProfit_Optimal(largePrices);
        long time = System.nanoTime() - start;
        
        System.out.println("Array size: 100,000 elements");
        System.out.println("Optimal approach: " + time/1000000.0 + " ms");
        System.out.println("Max profit found: " + result);
        System.out.println("\n✅ Single pass O(n) is extremely efficient!");
    }
    
    /**
     * INTERVIEW TIPS:
     * 
     * 1. Clarify constraints:
     *    - Can prices be negative? (Usually no)
     *    - Minimum array size? (Usually >= 1)
     *    - Can we buy and sell on same day? (Usually no)
     * 
     * 2. Explain the intuition:
     *    - We want to buy low and sell high
     *    - Keep track of minimum price (best buy opportunity)
     *    - Calculate profit at each step
     * 
     * 3. Mention brute force first, then optimize
     * 
     * 4. Time complexity: O(n) is optimal - can't do better
     * 
     * 5. Follow-up questions:
     *    - Multiple transactions allowed? (LeetCode #122)
     *    - At most 2 transactions? (LeetCode #123)
     *    - At most k transactions? (LeetCode #188)
     *    - With cooldown? (LeetCode #309)
     *    - With transaction fee? (LeetCode #714)
     * 
     * 6. Edge cases to mention:
     *    - Empty array or single element
     *    - Prices always decreasing (profit = 0)
     *    - Prices always increasing (buy first, sell last)
     */
}
