package dsa.day43;

/**
 * Compatibility wrapper for original DPContest implementation in package day43.fundamentals
 * Delegates commonly used static methods to the original implementation.
 */
public class DPContest {
    public static int lengthOfLIS(int[] nums) {
        return day43.fundamentals.DPContest.lengthOfLIS(nums);
    }

    public static int maxProfit(int[] prices) {
        // Use the k-transactions API on the original implementation with a very large k
        return day43.fundamentals.DPContest.maxProfit(Integer.MAX_VALUE / 2, prices);
    }
}
