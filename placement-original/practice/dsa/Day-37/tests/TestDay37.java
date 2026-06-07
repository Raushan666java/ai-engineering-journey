package day37.tests;

import day37.review.Week5Review;
import day37.review.Week5Review.*;
import day37.practice.Day37Practice;

import java.util.*;

/**
 * Comprehensive Test Suite for Day 37
 * Tests all Week 5 review algorithms and practice problems
 */
public class TestDay37 {
    
    private static int testsRun = 0;
    private static int testsPassed = 0;
    
    // ==================== TEST UTILITIES ====================
    
    private static void assertEquals(Object expected, Object actual, String testName) {
        testsRun++;
        if (expected == null && actual == null || expected != null && expected.equals(actual)) {
            testsPassed++;
            System.out.println("✓ " + testName);
        } else {
            System.out.println("✗ " + testName);
            System.out.println("  Expected: " + expected);
            System.out.println("  Actual: " + actual);
        }
    }
    
    private static void assertTrue(boolean condition, String testName) {
        testsRun++;
        if (condition) {
            testsPassed++;
            System.out.println("✓ " + testName);
        } else {
            System.out.println("✗ " + testName);
        }
    }
    
    private static void assertArrayEquals(int[] expected, int[] actual, String testName) {
        assertEquals(Arrays.toString(expected), Arrays.toString(actual), testName);
    }
    
    private static void assertArrayEquals(double[] expected, double[] actual, String testName) {
        testsRun++;
        boolean equal = true;
        if (expected.length != actual.length) {
            equal = false;
        } else {
            for (int i = 0; i < expected.length; i++) {
                if (Math.abs(expected[i] - actual[i]) > 0.00001) {
                    equal = false;
                    break;
                }
            }
        }
        
        if (equal) {
            testsPassed++;
            System.out.println("✓ " + testName);
        } else {
            System.out.println("✗ " + testName);
            System.out.println("  Expected: " + Arrays.toString(expected));
            System.out.println("  Actual: " + Arrays.toString(actual));
        }
    }
    
    // ==================== WEEK 5 REVIEW TESTS ====================
    
    public static void testGraphTraversals() {
        System.out.println("\n--- Testing Graph Traversals ---");
        
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).addAll(Arrays.asList(1, 2));
        graph.get(1).addAll(Arrays.asList(0, 3));
        graph.get(2).addAll(Arrays.asList(0, 4));
        graph.get(3).addAll(Arrays.asList(1));
        graph.get(4).addAll(Arrays.asList(2));
        
        List<Integer> bfsResult = Week5Review.bfs(graph, 0);
        assertTrue(bfsResult.size() == 5, "Test BFS visits all nodes");
        assertTrue(bfsResult.get(0) == 0, "Test BFS starts from source");
        
        List<Integer> dfsResult = Week5Review.dfs(graph, 0);
        assertTrue(dfsResult.size() == 5, "Test DFS visits all nodes");
        assertTrue(dfsResult.get(0) == 0, "Test DFS starts from source");
    }
    
    public static void testUnionFind() {
        System.out.println("\n--- Testing Union-Find ---");
        
        UnionFind uf = new UnionFind(5);
        
        assertEquals(5, uf.getComponents(), "Test initial components");
        
        assertTrue(uf.union(0, 1), "Test union returns true for new connection");
        assertEquals(4, uf.getComponents(), "Test components after union");
        
        assertTrue(uf.isConnected(0, 1), "Test connected nodes");
        assertTrue(!uf.isConnected(0, 2), "Test disconnected nodes");
        
        uf.union(2, 3);
        uf.union(1, 3);
        assertEquals(2, uf.getComponents(), "Test multiple unions");
        assertTrue(uf.isConnected(0, 3), "Test transitive connectivity");
        
        assertEquals(4, uf.getSize(0), "Test component size");
    }
    
    public static void testCycleDetection() {
        System.out.println("\n--- Testing Cycle Detection ---");
        
        // Undirected graph without cycle
        List<List<Integer>> tree = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            tree.add(new ArrayList<>());
        }
        tree.get(0).addAll(Arrays.asList(1, 2));
        tree.get(1).add(0);
        tree.get(2).addAll(Arrays.asList(0, 3));
        tree.get(3).add(2);
        
        assertTrue(!Week5Review.hasCycleUndirected(tree), "Test tree has no cycle");
        
        // Add cycle
        tree.get(1).add(3);
        tree.get(3).add(1);
        assertTrue(Week5Review.hasCycleUndirected(tree), "Test graph with cycle");
        
        // Directed acyclic graph
        List<List<Integer>> dag = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            dag.add(new ArrayList<>());
        }
        dag.get(0).addAll(Arrays.asList(1, 2));
        dag.get(1).add(3);
        dag.get(2).add(3);
        
        assertTrue(!Week5Review.hasCycleDirected(dag), "Test DAG has no cycle");
        
        // Add back edge
        dag.get(3).add(0);
        assertTrue(Week5Review.hasCycleDirected(dag), "Test directed graph with cycle");
    }
    
    public static void testTopologicalSort() {
        System.out.println("\n--- Testing Topological Sort ---");
        
        List<List<Integer>> dag = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            dag.add(new ArrayList<>());
        }
        dag.get(0).addAll(Arrays.asList(1, 2));
        dag.get(1).add(3);
        dag.get(2).add(3);
        
        List<Integer> bfsOrder = Week5Review.topologicalSortBFS(dag);
        List<Integer> dfsOrder = Week5Review.topologicalSortDFS(dag);
        
        assertEquals(4, bfsOrder.size(), "Test topological sort BFS size");
        assertEquals(4, dfsOrder.size(), "Test topological sort DFS size");
        
        // Verify topological property: if u -> v, then u comes before v
        assertTrue(bfsOrder.indexOf(0) < bfsOrder.indexOf(1), "Test BFS topological order");
        assertTrue(bfsOrder.indexOf(0) < bfsOrder.indexOf(2), "Test BFS topological order");
        assertTrue(bfsOrder.indexOf(1) < bfsOrder.indexOf(3), "Test BFS topological order");
        assertTrue(bfsOrder.indexOf(2) < bfsOrder.indexOf(3), "Test BFS topological order");
        
        assertTrue(dfsOrder.indexOf(0) < dfsOrder.indexOf(1), "Test DFS topological order");
        assertTrue(dfsOrder.indexOf(0) < dfsOrder.indexOf(2), "Test DFS topological order");
        assertTrue(dfsOrder.indexOf(1) < dfsOrder.indexOf(3), "Test DFS topological order");
        assertTrue(dfsOrder.indexOf(2) < dfsOrder.indexOf(3), "Test DFS topological order");
    }
    
    public static void testDijkstra() {
        System.out.println("\n--- Testing Dijkstra's Algorithm ---");
        
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).add(new int[]{1, 4});
        graph.get(0).add(new int[]{2, 1});
        graph.get(2).add(new int[]{1, 2});
        graph.get(1).add(new int[]{3, 1});
        graph.get(2).add(new int[]{3, 5});
        graph.get(3).add(new int[]{4, 3});
        
        int[] dist = Week5Review.dijkstra(graph, 0);
        
        assertEquals(0, dist[0], "Test distance to source");
        assertEquals(3, dist[1], "Test shortest path to node 1");
        assertEquals(1, dist[2], "Test shortest path to node 2");
        assertEquals(4, dist[3], "Test shortest path to node 3");
        assertEquals(7, dist[4], "Test shortest path to node 4");
    }
    
    // ==================== DAY 37 PRACTICE TESTS ====================
    
    public static void testWordLadderII() {
        System.out.println("\n--- Testing Word Ladder II ---");
        
        List<List<String>> result = Day37Practice.findLadders("hit", "cog",
            Arrays.asList("hot","dot","dog","lot","log","cog"));
        
        assertEquals(2, result.size(), "Test number of shortest paths");
        assertEquals(5, result.get(0).size(), "Test path length");
        assertEquals("hit", result.get(0).get(0), "Test path starts with hit");
        assertEquals("cog", result.get(0).get(result.get(0).size()-1), "Test path ends with cog");
        
        // Test no solution
        List<List<String>> noSolution = Day37Practice.findLadders("hit", "cog",
            Arrays.asList("hot","dot","dog","lot","log"));
        assertEquals(0, noSolution.size(), "Test no solution case");
    }
    
    public static void testValidTree() {
        System.out.println("\n--- Testing Graph Valid Tree ---");
        
        // Valid tree
        int[][] edges1 = {{0,1},{0,2},{0,3},{1,4}};
        assertTrue(Day37Practice.validTree(5, edges1), "Test valid tree");
        
        // Graph with cycle
        int[][] edges2 = {{0,1},{1,2},{2,3},{1,3},{1,4}};
        assertTrue(!Day37Practice.validTree(5, edges2), "Test invalid tree (cycle)");
        
        // Disconnected graph
        int[][] edges3 = {{0,1},{2,3}};
        assertTrue(!Day37Practice.validTree(4, edges3), "Test invalid tree (disconnected)");
        
        // Test with union-find
        assertTrue(Day37Practice.validTreeUnionFind(5, edges1), "Test valid tree (union-find)");
        assertTrue(!Day37Practice.validTreeUnionFind(5, edges2), "Test invalid tree (union-find)");
    }
    
    public static void testSwimInWater() {
        System.out.println("\n--- Testing Swim in Rising Water ---");
        
        int[][] grid1 = {{0,2},{1,3}};
        assertEquals(3, Day37Practice.swimInWater(grid1), "Test 2x2 grid");
        
        int[][] grid2 = {{0,1,2,3,4},{24,23,22,21,5},{12,13,14,15,16},
                         {11,17,18,19,20},{10,9,8,7,6}};
        assertEquals(16, Day37Practice.swimInWater(grid2), "Test 5x5 grid");
    }
    
    public static void testEvaluateDivision() {
        System.out.println("\n--- Testing Evaluate Division ---");
        
        List<List<String>> equations = Arrays.asList(
            Arrays.asList("a","b"),
            Arrays.asList("b","c")
        );
        double[] values = {2.0, 3.0};
        List<List<String>> queries = Arrays.asList(
            Arrays.asList("a","c"),
            Arrays.asList("b","a"),
            Arrays.asList("a","e"),
            Arrays.asList("a","a")
        );
        
        double[] expected = {6.0, 0.5, -1.0, 1.0};
        double[] result = Day37Practice.calcEquation(equations, values, queries);
        
        assertArrayEquals(expected, result, "Test evaluate division");
    }
    
    public static void testParallelCourses() {
        System.out.println("\n--- Testing Parallel Courses II ---");
        
        int[][] deps1 = {{2,1},{3,1},{1,4}};
        assertEquals(3, Day37Practice.minNumberOfSemesters(4, deps1, 2), 
                    "Test parallel courses with k=2");
        
        int[][] deps2 = {};
        assertEquals(3, Day37Practice.minNumberOfSemesters(5, deps2, 2),
                    "Test no dependencies (5 courses, k=2 means ceil(5/2) = 3 semesters)");
        
        int[][] deps3 = {{2,1},{3,1},{4,1},{1,5}};
        assertEquals(6, Day37Practice.minNumberOfSemesters(11, deps3, 2),
                    "Test larger graph");
    }
    
    public static void testCountUnreachablePairs() {
        System.out.println("\n--- Testing Count Unreachable Pairs ---");
        
        int[][] edges1 = {{0,2},{0,5},{2,4},{1,6},{5,4}};
        assertEquals(14L, Day37Practice.countPairs(7, edges1), "Test disconnected components");
        
        int[][] edges2 = {{0,1},{0,2},{1,2}};
        assertEquals(0L, Day37Practice.countPairs(3, edges2), "Test fully connected");
        
        int[][] edges3 = {};
        assertEquals(21L, Day37Practice.countPairs(7, edges3), "Test no edges");
    }
    
    // ==================== INTEGRATION TESTS ====================
    
    public static void testMSTAlgorithms() {
        System.out.println("\n--- Testing MST Algorithms ---");
        
        List<Edge> edges = new ArrayList<>();
        edges.add(new Edge(0, 1, 4));
        edges.add(new Edge(0, 2, 1));
        edges.add(new Edge(1, 2, 2));
        edges.add(new Edge(1, 3, 1));
        edges.add(new Edge(2, 3, 5));
        edges.add(new Edge(3, 4, 3));
        
        List<Edge> mst = Week5Review.kruskalMST(5, edges);
        
        assertEquals(4, mst.size(), "Test MST has n-1 edges");
        
        int totalWeight = 0;
        for (Edge e : mst) {
            totalWeight += e.weight;
        }
        assertEquals(7, totalWeight, "Test MST total weight");
    }
    
    public static void testStronglyConnectedComponents() {
        System.out.println("\n--- Testing Strongly Connected Components ---");
        
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < 5; i++) {
            graph.add(new ArrayList<>());
        }
        graph.get(0).add(1);
        graph.get(1).add(2);
        graph.get(2).add(0);
        graph.get(1).add(3);
        graph.get(3).add(4);
        
        List<List<Integer>> sccs = Week5Review.kosarajuSCC(graph);
        
        assertEquals(3, sccs.size(), "Test number of SCCs");
        
        // Verify SCC sizes
        boolean hasSize3 = false, hasSize1_1 = false, hasSize1_2 = false;
        for (List<Integer> scc : sccs) {
            if (scc.size() == 3) hasSize3 = true;
            else if (scc.size() == 1) {
                if (!hasSize1_1) hasSize1_1 = true;
                else hasSize1_2 = true;
            }
        }
        
        assertTrue(hasSize3 && hasSize1_1 && hasSize1_2, "Test SCC composition");
    }
    
    // ==================== MAIN TEST RUNNER ====================
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════════════════════════╗");
        System.out.println("║       DAY 37 COMPREHENSIVE TEST SUITE                 ║");
        System.out.println("║       Week 5 Assessment - Graphs & Union-Find         ║");
        System.out.println("╚════════════════════════════════════════════════════════╝");
        
        // Week 5 Review Tests
        testGraphTraversals();
        testUnionFind();
        testCycleDetection();
        testTopologicalSort();
        testDijkstra();
        testMSTAlgorithms();
        testStronglyConnectedComponents();
        
        // Day 37 Practice Tests
        testWordLadderII();
        testValidTree();
        testSwimInWater();
        testEvaluateDivision();
        testParallelCourses();
        testCountUnreachablePairs();
        
        // Summary
        System.out.println("\n╔════════════════════════════════════════════════════════╗");
        System.out.println("║                    TEST SUMMARY                        ║");
        System.out.println("╠════════════════════════════════════════════════════════╣");
        System.out.printf("║  Tests Run:    %-40d║%n", testsRun);
        System.out.printf("║  Tests Passed: %-40d║%n", testsPassed);
        System.out.printf("║  Tests Failed: %-40d║%n", testsRun - testsPassed);
        System.out.printf("║  Success Rate: %.2f%%%-35s║%n", 
                         (testsPassed * 100.0 / testsRun), "");
        System.out.println("╚════════════════════════════════════════════════════════╝");
        
        if (testsPassed == testsRun) {
            System.out.println("\n🎉 ALL TESTS PASSED! Week 5 assessment completed successfully!");
        } else {
            System.out.println("\n⚠ Some tests failed. Please review the output above.");
        }
    }
}
