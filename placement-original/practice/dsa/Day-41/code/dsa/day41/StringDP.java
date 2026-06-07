package dsa.day41;

/**
 * Compatibility wrapper for original implementation in package day41.fundamentals
 * Delegates key static methods used by tests to the original class.
 */
public class StringDP {
    public static int minCut(String s) {
        return day41.fundamentals.StringDP.minCut(s);
    }

    public static int numDistinct(String s, String t) {
        return day41.fundamentals.StringDP.numDistinct(s, t);
    }

    public static int minDistance(String word1, String word2) {
        return day41.fundamentals.StringDP.minDistance(word1, word2);
    }
}
