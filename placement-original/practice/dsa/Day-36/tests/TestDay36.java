package day36.tests;

import day36.unionfind.UnionFind;
import day36.unionfind.UnionFind.*;
import day36.practice.Day36Practice;
import java.util.*;

/**
 * Comprehensive test suite for Day 36 Union-Find implementations
 */
public class TestDay36 {
    
    private static int testsPassed = 0;
    private static int testsFailed = 0;
    
    public static void main(String[] args) {
        System.out.println("=== Running Day 36 Test Suite ===\n");
        
        testBasicUnionFind();
        testUnionFindByRank();
        testUnionFindBySize();
        testCycleDetection();
        testMST();
        testPracticeProblems();
        
        System.out.println("\n=== Test Results ===");
        System.out.println("Tests Passed: " + testsPassed);
        System.out.println("Tests Failed: " + testsFailed);
        
        if (testsFailed == 0) {
            System.out.println("\n✓ All tests passed!");
        } else {
            System.out.println("\n✗ Some tests failed!");
        }
    }
    
    private static void testBasicUnionFind() {
        System.out.println("Testing Basic Union-Find:");
        
        BasicUnionFind uf = new BasicUnionFind(10);
        
        // Test initial state
        assertEqual(uf.getComponents(), 10, "Initial components");
        
        // Test union
        uf.union(0, 1);
        uf.union(2, 3);
        assertEqual(uf.getComponents(), 8, "After 2 unions");
        
        // Test connectivity
        assertTrue(uf.isConnected(0, 1), "0 and 1 connected");
        assertFalse(uf.isConnected(0, 2), "0 and 2 not connected");
        
        // Test transitive connection
        uf.union(1, 2);
        assertTrue(uf.isConnected(0, 3), "Transitive: 0-1-2-3 connected");
        
        System.out.println();
    }
    
    private static void testUnionFindByRank() {
        System.out.println("Testing Union-Find by Rank:");
        
        UnionFindByRank uf = new UnionFindByRank(10);
        
        // Build chain: 0-1-2-3-4
        uf.union(0, 1);
        uf.union(1, 2);
        uf.union(2, 3);
        uf.union(3, 4);
        
        assertEqual(uf.getComponents(), 6, "After chain unions");
        assertTrue(uf.isConnected(0, 4), "Chain connected");
        
        System.out.println();
    }
    
    private static void testUnionFindBySize() {
        System.out.println("Testing Union-Find by Size:");
        
        UnionFindBySize uf = new UnionFindBySize(10);
        
        uf.union(0, 1);
        uf.union(2, 3);
        uf.union(4, 5);
        
        assertEqual(uf.getComponentSize(0), 2, "Component size of 0");
        assertEqual(uf.getComponentSize(2), 2, "Component size of 2");
        
        uf.union(0, 2);
        assertEqual(uf.getComponentSize(0), 4, "Merged component size");
        
        System.out.println();
    }
    
    private static void testCycleDetection() {
        System.out.println("Testing Cycle Detection:");
        
        // No cycle
        int[][] edges1 = {{0,1}, {1,2}, {2,3}};
        assertFalse(day36.unionfind.UnionFind.hasCycle(4, edges1), "No cycle in tree");
        
        // Has cycle
        int[][] edges2 = {{0,1}, {1,2}, {2,0}};
        assertTrue(day36.unionfind.UnionFind.hasCycle(3, edges2), "Cycle detected");
        
        System.out.println();
    }
    
    private static void testMST() {
        System.out.println("Testing Minimum Spanning Tree:");
        
        // Test Min Cost Connect Points
        int[][] points = {{0,0}, {2,2}, {3,10}, {5,2}, {7,0}};
        int cost = Day36Practice.minCostConnectPoints(points);
        assertEqual(cost, 20, "Min cost to connect points");
        
        // Test simple MST
        int[][] points2 = {{0,0}, {1,1}, {1,0}};
        int cost2 = Day36Practice.minCostConnectPoints(points2);
        assertEqual(cost2, 2, "Triangle MST");
        
        System.out.println();
    }
    
    private static void testPracticeProblems() {
        System.out.println("Testing Practice Problems:");
        
        // Test 1: Count Components
        int[][] edges = {{0,1}, {1,2}, {3,4}};
        assertEqual(Day36Practice.countComponents(5, edges), 2, "Count components");
        
        // Test 2: Friend Circles
        int[][] friends = {{1,1,0}, {1,1,0}, {0,0,1}};
        assertEqual(Day36Practice.findCircleNum(friends), 2, "Friend circles");
        
        // Test 3: Redundant Connection
        int[][] edges3 = {{1,2}, {1,3}, {2,3}};
        int[] redundant = Day36Practice.findRedundantConnection(edges3);
        assertArrayEqual(redundant, new int[]{2,3}, "Redundant connection");
        
        // Test 5: Remove Stones
        int[][] stones = {{0,0}, {0,1}, {1,0}, {1,2}, {2,1}, {2,2}};
        assertEqual(Day36Practice.removeStones(stones), 5, "Stones removed");
        
        // Test 6: Equations Possible
        String[] eq1 = {"a==b", "b!=a"};
        assertFalse(Day36Practice.equationsPossible(eq1), "Contradictory equations");
        
        String[] eq2 = {"a==b", "b==c", "a==c"};
        assertTrue(Day36Practice.equationsPossible(eq2), "Consistent equations");
        
        // Test 8: Smallest String With Swaps
        List<List<Integer>> pairs = new ArrayList<>();
        pairs.add(Arrays.asList(0, 3));
        pairs.add(Arrays.asList(1, 2));
        String result = Day36Practice.smallestStringWithSwaps("dcab", pairs);
        assertEqual(result, "bacd", "Smallest string with swaps");
        
        // Test 14: Number of Islands
        char[][] grid = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        assertEqual(Day36Practice.numIslands(grid), 3, "Number of islands");
        
        // Test 18: Longest Consecutive
        int[] nums = {100, 4, 200, 1, 3, 2};
        assertEqual(Day36Practice.longestConsecutive(nums), 4, "Longest consecutive");
        
        // Test 20: Similar String Groups
        String[] strs = {"tars","rats","arts","star"};
        assertEqual(Day36Practice.numSimilarGroups(strs), 2, "Similar groups");
        
        // Test 22: Make Connected
        int[][] connections = {{0,1}, {0,2}, {1,2}};
        assertEqual(Day36Practice.makeConnected(4, connections), 1, "Operations to connect");
        
        // Test insufficient cables
        int[][] connections2 = {{0,1}};
        assertEqual(Day36Practice.makeConnected(4, connections2), -1, "Insufficient cables");
        
        System.out.println();
    }
    
    // ==================== ASSERTION UTILITIES ====================
    
    private static void assertEqual(int actual, int expected, String testName) {
        if (actual == expected) {
            System.out.println("  ✓ " + testName);
            testsPassed++;
        } else {
            System.out.println("  ✗ " + testName + " - Expected: " + expected + ", Got: " + actual);
            testsFailed++;
        }
    }
    
    private static void assertEqual(String actual, String expected, String testName) {
        if (actual.equals(expected)) {
            System.out.println("  ✓ " + testName);
            testsPassed++;
        } else {
            System.out.println("  ✗ " + testName + " - Expected: " + expected + ", Got: " + actual);
            testsFailed++;
        }
    }
    
    private static void assertTrue(boolean condition, String testName) {
        if (condition) {
            System.out.println("  ✓ " + testName);
            testsPassed++;
        } else {
            System.out.println("  ✗ " + testName + " - Expected true, Got false");
            testsFailed++;
        }
    }
    
    private static void assertFalse(boolean condition, String testName) {
        if (!condition) {
            System.out.println("  ✓ " + testName);
            testsPassed++;
        } else {
            System.out.println("  ✗ " + testName + " - Expected false, Got true");
            testsFailed++;
        }
    }
    
    private static void assertArrayEqual(int[] actual, int[] expected, String testName) {
        if (Arrays.equals(actual, expected)) {
            System.out.println("  ✓ " + testName);
            testsPassed++;
        } else {
            System.out.println("  ✗ " + testName + " - Expected: " + Arrays.toString(expected) + 
                             ", Got: " + Arrays.toString(actual));
            testsFailed++;
        }
    }
}
