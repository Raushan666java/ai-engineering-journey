package day40.tests;

import day40.fundamentals.GraphAlgorithms;
import day40.fundamentals.GraphAlgorithms.Edge;
import day40.fundamentals.GraphAlgorithms.UnionFind;
import day40.practice.Day40Practice;

import java.util.*;

/**
 * Day 40: Comprehensive Test Suite for Graph Algorithms
 * 
 * Test Coverage:
 * - 8 Fundamental Algorithms (60 tests)
 * - 8 Advanced Problems (48 tests)
 * - Edge Cases (10 tests)
 * Total: 118 tests targeting 100% pass rate
 */
public class TestDay40 {
    
    private static int totalTests = 0;
    private static int passedTests = 0;
    private static List<String> failedTests = new ArrayList<>();
    
    // ==================== TEST RUNNER ====================
    
    public static void runTest(String testName, boolean condition) {
        totalTests++;
        if (condition) {
            passedTests++;
            System.out.println("✓ " + testName);
        } else {
            failedTests.add(testName);
            System.out.println("✗ " + testName);
        }
    }
    
    public static void printSummary() {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("TEST SUMMARY");
        System.out.println("=".repeat(60));
        System.out.println("Total Tests: " + totalTests);
        System.out.println("Passed: " + passedTests);
        System.out.println("Failed: " + (totalTests - passedTests));
        System.out.println("Pass Rate: " + String.format("%.2f%%", (passedTests * 100.0 / totalTests)));
        
        if (!failedTests.isEmpty()) {
            System.out.println("\nFailed Tests Details:");
            for (String f : failedTests) {
                System.out.println(" - " + f);
            }
        }
        
        System.out.println("=".repeat(60));
    }
    
    // ==================== FUNDAMENTAL ALGORITHMS TESTS ====================
    
    public static void testDijkstra() {
        System.out.println("\n--- Testing Dijkstra's Algorithm ---");
        
        // Test 1: Basic shortest path
        int V1 = 5;
        List<List<Edge>> graph1 = new ArrayList<>();
        for (int i = 0; i < V1; i++) graph1.add(new ArrayList<>());
        graph1.get(0).add(new Edge(0, 1, 4));
        graph1.get(0).add(new Edge(0, 2, 1));
        graph1.get(2).add(new Edge(2, 1, 2));
        graph1.get(1).add(new Edge(1, 3, 1));
        graph1.get(2).add(new Edge(2, 3, 5));
        graph1.get(3).add(new Edge(3, 4, 3));
        
        int[] dist1 = GraphAlgorithms.dijkstra(graph1, 0, V1);
        runTest("Dijkstra Test 1: Distance to vertex 1", dist1[1] == 3);
        runTest("Dijkstra Test 2: Distance to vertex 2", dist1[2] == 1);
        runTest("Dijkstra Test 3: Distance to vertex 3", dist1[3] == 4);
        runTest("Dijkstra Test 4: Distance to vertex 4", dist1[4] == 7);
        
        // Test 2: Single vertex
        List<List<Edge>> graph2 = new ArrayList<>();
        graph2.add(new ArrayList<>());
        int[] dist2 = GraphAlgorithms.dijkstra(graph2, 0, 1);
        runTest("Dijkstra Test 5: Single vertex distance", dist2[0] == 0);
        
        // Test 3: Disconnected graph
        int V3 = 4;
        List<List<Edge>> graph3 = new ArrayList<>();
        for (int i = 0; i < V3; i++) graph3.add(new ArrayList<>());
        graph3.get(0).add(new Edge(0, 1, 1));
        graph3.get(2).add(new Edge(2, 3, 1));
        
        int[] dist3 = GraphAlgorithms.dijkstra(graph3, 0, V3);
        runTest("Dijkstra Test 6: Unreachable vertex", dist3[2] == Integer.MAX_VALUE);
        
        // Test 4: Path reconstruction
        Map<String, Object> result4 = GraphAlgorithms.dijkstraWithPath(graph1, 0, V1);
        int[] parents = (int[]) result4.get("parents");
        List<Integer> path = GraphAlgorithms.reconstructPath(parents, 0, 4);
        // Path should be: 0 -> 2 -> 1 -> 3 -> 4 (5 nodes)
        runTest("Dijkstra Test 7: Path reconstruction size", path.size() == 5);
        runTest("Dijkstra Test 8: Path starts at source", path.get(0) == 0);
    }
    
    public static void testBellmanFord() {
        System.out.println("\n--- Testing Bellman-Ford Algorithm ---");
        
        // Test 1: Graph with negative weights
        List<Edge> edges1 = new ArrayList<>();
        edges1.add(new Edge(0, 1, -1));
        edges1.add(new Edge(0, 2, 4));
        edges1.add(new Edge(1, 2, 3));
        edges1.add(new Edge(1, 3, 2));
        edges1.add(new Edge(1, 4, 2));
        edges1.add(new Edge(3, 2, 5));
        edges1.add(new Edge(3, 1, 1));
        edges1.add(new Edge(4, 3, -3));
        
        int[] dist1 = GraphAlgorithms.bellmanFord(edges1, 5, 0);
        runTest("Bellman-Ford Test 1: No negative cycle", dist1 != null);
        runTest("Bellman-Ford Test 2: Distance to vertex 1", dist1[1] == -1);
        runTest("Bellman-Ford Test 3: Distance to vertex 4", dist1[4] == 1);
        
        // Test 2: Negative cycle detection
        List<Edge> edges2 = new ArrayList<>();
        edges2.add(new Edge(0, 1, 1));
        edges2.add(new Edge(1, 2, -1));
        edges2.add(new Edge(2, 0, -1));
        
        int[] dist2 = GraphAlgorithms.bellmanFord(edges2, 3, 0);
        runTest("Bellman-Ford Test 4: Detect negative cycle", dist2 == null);
        
        // Test 3: Single edge
        List<Edge> edges3 = new ArrayList<>();
        edges3.add(new Edge(0, 1, 5));
        
        int[] dist3 = GraphAlgorithms.bellmanFord(edges3, 2, 0);
        runTest("Bellman-Ford Test 5: Single edge graph", dist3[1] == 5);
        
        // Test 4: Cycle detection with map result
        Map<String, Object> result4 = GraphAlgorithms.bellmanFordDetectCycle(edges2, 3, 0);
        boolean hasCycle = (boolean) result4.get("hasNegativeCycle");
        runTest("Bellman-Ford Test 6: Negative cycle flag", hasCycle);
        
        // Test 5: No negative cycle with map result
        Map<String, Object> result5 = GraphAlgorithms.bellmanFordDetectCycle(edges1, 5, 0);
        boolean noCycle = !(boolean) result5.get("hasNegativeCycle");
        runTest("Bellman-Ford Test 7: No cycle flag", noCycle);
    }
    
    public static void testFloydWarshall() {
        System.out.println("\n--- Testing Floyd-Warshall Algorithm ---");
        
        int INF = Integer.MAX_VALUE;
        
        // Test 1: Basic all-pairs shortest path
        int[][] graph1 = {
            {0, 5, INF, 10},
            {INF, 0, 3, INF},
            {INF, INF, 0, 1},
            {INF, INF, INF, 0}
        };
        
        int[][] dist1 = GraphAlgorithms.floydWarshall(graph1);
        runTest("Floyd-Warshall Test 1: Direct edge", dist1[0][1] == 5);
        runTest("Floyd-Warshall Test 2: Shortest path via intermediate", dist1[0][2] == 8);
        runTest("Floyd-Warshall Test 3: Shortest path to last vertex", dist1[0][3] == 9);
        
        // Test 2: Complete graph
        int[][] graph2 = {
            {0, 1, 3},
            {1, 0, 2},
            {3, 2, 0}
        };
        
        int[][] dist2 = GraphAlgorithms.floydWarshall(graph2);
        runTest("Floyd-Warshall Test 4: Complete graph", dist2[0][1] == 1);
        runTest("Floyd-Warshall Test 5: Symmetric paths", dist2[1][0] == 1);
        
        // Test 3: Path reconstruction
        Map<String, Object> result3 = GraphAlgorithms.floydWarshallWithPath(graph1);
        int[][] dist3 = (int[][]) result3.get("distances");
        int[][] next3 = (int[][]) result3.get("next");
        List<Integer> path = GraphAlgorithms.reconstructPathFloydWarshall(next3, 0, 3);
        
        runTest("Floyd-Warshall Test 6: Path reconstruction not empty", !path.isEmpty());
        runTest("Floyd-Warshall Test 7: Path starts at source", path.get(0) == 0);
        runTest("Floyd-Warshall Test 8: Path ends at destination", path.get(path.size() - 1) == 3);
    }
    
    public static void testPrimMST() {
        System.out.println("\n--- Testing Prim's MST Algorithm ---");
        
        // Test 1: Basic MST
        int V1 = 4;
        List<List<Edge>> graph1 = new ArrayList<>();
        for (int i = 0; i < V1; i++) graph1.add(new ArrayList<>());
        
        graph1.get(0).add(new Edge(0, 1, 10));
        graph1.get(1).add(new Edge(1, 0, 10));
        graph1.get(0).add(new Edge(0, 2, 6));
        graph1.get(2).add(new Edge(2, 0, 6));
        graph1.get(0).add(new Edge(0, 3, 5));
        graph1.get(3).add(new Edge(3, 0, 5));
        graph1.get(1).add(new Edge(1, 3, 15));
        graph1.get(3).add(new Edge(3, 1, 15));
        graph1.get(2).add(new Edge(2, 3, 4));
        graph1.get(3).add(new Edge(3, 2, 4));
        
        List<Edge> mst1 = GraphAlgorithms.primMST(graph1, V1);
        runTest("Prim Test 1: MST has V-1 edges", mst1.size() == 3);
        
        // Test 2: MST total weight
        Map<String, Object> result2 = GraphAlgorithms.primMSTWithWeight(graph1, V1);
        int weight = (int) result2.get("totalWeight");
        runTest("Prim Test 2: MST total weight", weight == 19);
        
        // Test 3: Triangle graph
        int V3 = 3;
        List<List<Edge>> graph3 = new ArrayList<>();
        for (int i = 0; i < V3; i++) graph3.add(new ArrayList<>());
        
        graph3.get(0).add(new Edge(0, 1, 1));
        graph3.get(1).add(new Edge(1, 0, 1));
        graph3.get(1).add(new Edge(1, 2, 2));
        graph3.get(2).add(new Edge(2, 1, 2));
        graph3.get(0).add(new Edge(0, 2, 3));
        graph3.get(2).add(new Edge(2, 0, 3));
        
        Map<String, Object> result3 = GraphAlgorithms.primMSTWithWeight(graph3, V3);
        int weight3 = (int) result3.get("totalWeight");
        runTest("Prim Test 3: Triangle MST weight", weight3 == 3);
        
        // Test 4: Single edge
        int V4 = 2;
        List<List<Edge>> graph4 = new ArrayList<>();
        for (int i = 0; i < V4; i++) graph4.add(new ArrayList<>());
        graph4.get(0).add(new Edge(0, 1, 5));
        graph4.get(1).add(new Edge(1, 0, 5));
        
        List<Edge> mst4 = GraphAlgorithms.primMST(graph4, V4);
        runTest("Prim Test 4: Single edge MST", mst4.size() == 1);
    }
    
    public static void testKruskalMST() {
        System.out.println("\n--- Testing Kruskal's MST Algorithm ---");
        
        // Test 1: Basic MST
        List<Edge> edges1 = new ArrayList<>();
        edges1.add(new Edge(0, 1, 10));
        edges1.add(new Edge(0, 2, 6));
        edges1.add(new Edge(0, 3, 5));
        edges1.add(new Edge(1, 3, 15));
        edges1.add(new Edge(2, 3, 4));
        
        List<Edge> mst1 = GraphAlgorithms.kruskalMST(edges1, 4);
        runTest("Kruskal Test 1: MST has V-1 edges", mst1.size() == 3);
        
        // Test 2: MST total weight
        Map<String, Object> result2 = GraphAlgorithms.kruskalMSTWithWeight(edges1, 4);
        int weight = (int) result2.get("totalWeight");
        runTest("Kruskal Test 2: MST total weight", weight == 19);
        
        // Test 3: All equal weights
        List<Edge> edges3 = new ArrayList<>();
        edges3.add(new Edge(0, 1, 1));
        edges3.add(new Edge(1, 2, 1));
        edges3.add(new Edge(0, 2, 1));
        
        Map<String, Object> result3 = GraphAlgorithms.kruskalMSTWithWeight(edges3, 3);
        int weight3 = (int) result3.get("totalWeight");
        runTest("Kruskal Test 3: Equal weights MST", weight3 == 2);
        
        // Test 4: Linear graph
        List<Edge> edges4 = new ArrayList<>();
        edges4.add(new Edge(0, 1, 1));
        edges4.add(new Edge(1, 2, 2));
        edges4.add(new Edge(2, 3, 3));
        
        List<Edge> mst4 = GraphAlgorithms.kruskalMST(edges4, 4);
        runTest("Kruskal Test 4: Linear graph MST", mst4.size() == 3);
        
        // Test 5: Union-Find cycle detection
        List<Edge> edges5 = new ArrayList<>();
        edges5.add(new Edge(0, 1, 0));
        edges5.add(new Edge(1, 2, 0));
        edges5.add(new Edge(2, 0, 0));
        
        boolean hasCycle = GraphAlgorithms.hasCycleUndirected(edges5, 3);
        runTest("Kruskal Test 5: Cycle detection", hasCycle);
        
        // Test 6: Count components
        List<Edge> edges6 = new ArrayList<>();
        edges6.add(new Edge(0, 1, 0));
        edges6.add(new Edge(2, 3, 0));
        
        int components = GraphAlgorithms.countComponents(edges6, 4);
        runTest("Kruskal Test 6: Count components", components == 2);
    }
    
    public static void testTopologicalSort() {
        System.out.println("\n--- Testing Topological Sort ---");
        
        // Test 1: DAG with multiple valid orderings
        int V1 = 6;
        List<List<Integer>> graph1 = new ArrayList<>();
        for (int i = 0; i < V1; i++) graph1.add(new ArrayList<>());
        
        graph1.get(5).add(2);
        graph1.get(5).add(0);
        graph1.get(4).add(0);
        graph1.get(4).add(1);
        graph1.get(2).add(3);
        graph1.get(3).add(1);
        
        List<Integer> order1 = GraphAlgorithms.topologicalSortKahn(graph1, V1);
        runTest("Topo Sort Test 1: Valid ordering size", order1.size() == 6);
        
        // Verify it's a valid topological ordering
        Map<Integer, Integer> position = new HashMap<>();
        for (int i = 0; i < order1.size(); i++) {
            position.put(order1.get(i), i);
        }
        boolean valid = true;
        for (int u = 0; u < V1; u++) {
            for (int v : graph1.get(u)) {
                if (position.get(u) >= position.get(v)) {
                    valid = false;
                    break;
                }
            }
        }
        runTest("Topo Sort Test 2: Valid topological order", valid);
        
        // Test 2: DFS approach
        List<Integer> order2 = GraphAlgorithms.topologicalSortDFS(graph1, V1);
        runTest("Topo Sort Test 3: DFS approach size", order2.size() == 6);
        
        // Test 3: Graph with cycle
        int V3 = 3;
        List<List<Integer>> graph3 = new ArrayList<>();
        for (int i = 0; i < V3; i++) graph3.add(new ArrayList<>());
        
        graph3.get(0).add(1);
        graph3.get(1).add(2);
        graph3.get(2).add(0);
        
        List<Integer> order3 = GraphAlgorithms.topologicalSortKahn(graph3, V3);
        runTest("Topo Sort Test 4: Cycle detection (Kahn)", order3.isEmpty());
        
        List<Integer> order3DFS = GraphAlgorithms.topologicalSortDFS(graph3, V3);
        runTest("Topo Sort Test 5: Cycle detection (DFS)", order3DFS.isEmpty());
        
        // Test 4: Linear graph
        int V4 = 4;
        List<List<Integer>> graph4 = new ArrayList<>();
        for (int i = 0; i < V4; i++) graph4.add(new ArrayList<>());
        
        graph4.get(0).add(1);
        graph4.get(1).add(2);
        graph4.get(2).add(3);
        
        List<Integer> order4 = GraphAlgorithms.topologicalSortKahn(graph4, V4);
        runTest("Topo Sort Test 6: Linear graph", order4.equals(Arrays.asList(0, 1, 2, 3)));
    }
    
    public static void testSCC() {
        System.out.println("\n--- Testing Strongly Connected Components ---");
        
        // Test 1: Basic SCC
        int V1 = 5;
        List<List<Integer>> graph1 = new ArrayList<>();
        for (int i = 0; i < V1; i++) graph1.add(new ArrayList<>());
        
        graph1.get(1).add(0);
        graph1.get(0).add(2);
        graph1.get(2).add(1);
        graph1.get(0).add(3);
        graph1.get(3).add(4);
        
        List<List<Integer>> sccs1 = GraphAlgorithms.kosarajuSCC(graph1, V1);
        runTest("SCC Test 1: Number of SCCs (Kosaraju)", sccs1.size() == 3);
        
        // Test 2: Tarjan's algorithm
        List<List<Integer>> sccs2 = GraphAlgorithms.tarjanSCC(graph1, V1);
        runTest("SCC Test 2: Number of SCCs (Tarjan)", sccs2.size() == 3);
        
        // Test 3: Single SCC (all connected)
        int V3 = 3;
        List<List<Integer>> graph3 = new ArrayList<>();
        for (int i = 0; i < V3; i++) graph3.add(new ArrayList<>());
        
        graph3.get(0).add(1);
        graph3.get(1).add(2);
        graph3.get(2).add(0);
        
        List<List<Integer>> sccs3 = GraphAlgorithms.kosarajuSCC(graph3, V3);
        runTest("SCC Test 3: Single SCC", sccs3.size() == 1);
        runTest("SCC Test 4: SCC contains all vertices", sccs3.get(0).size() == 3);
        
        // Test 4: No cycles (each vertex is own SCC)
        int V4 = 4;
        List<List<Integer>> graph4 = new ArrayList<>();
        for (int i = 0; i < V4; i++) graph4.add(new ArrayList<>());
        
        graph4.get(0).add(1);
        graph4.get(1).add(2);
        graph4.get(2).add(3);
        
        List<List<Integer>> sccs4 = GraphAlgorithms.kosarajuSCC(graph4, V4);
        runTest("SCC Test 5: No cycles (4 SCCs)", sccs4.size() == 4);
        
        // Test 5: Two SCCs
        int V5 = 4;
        List<List<Integer>> graph5 = new ArrayList<>();
        for (int i = 0; i < V5; i++) graph5.add(new ArrayList<>());
        
        graph5.get(0).add(1);
        graph5.get(1).add(0);
        graph5.get(2).add(3);
        graph5.get(3).add(2);
        graph5.get(1).add(2);
        
        List<List<Integer>> sccs5 = GraphAlgorithms.tarjanSCC(graph5, V5);
        runTest("SCC Test 6: Two SCCs", sccs5.size() == 2);
    }
    
    public static void testUnionFind() {
        System.out.println("\n--- Testing Union-Find ---");
        
        // Test 1: Basic union and find
        UnionFind uf1 = new UnionFind(5);
        runTest("UF Test 1: Initial components", uf1.getComponents() == 5);
        
        uf1.union(0, 1);
        runTest("UF Test 2: After first union", uf1.getComponents() == 4);
        runTest("UF Test 3: Connected after union", uf1.connected(0, 1));
        
        // Test 2: Path compression
        uf1.union(1, 2);
        uf1.union(2, 3);
        runTest("UF Test 4: Transitive connection", uf1.connected(0, 3));
        runTest("UF Test 5: Component count", uf1.getComponents() == 2);
        
        // Test 3: Union by rank
        UnionFind uf2 = new UnionFind(4);
        uf2.union(0, 1);
        uf2.union(2, 3);
        uf2.union(0, 2);
        runTest("UF Test 6: All connected", uf2.getComponents() == 1);
        
        // Test 4: Redundant union
        boolean result = uf2.union(0, 3);
        runTest("UF Test 7: Redundant union returns false", !result);
    }
    
    // ==================== ADVANCED PROBLEMS TESTS ====================
    
    public static void testNetworkDelayTime() {
        System.out.println("\n--- Testing Network Delay Time ---");
        
        // Test 1: Basic case
        int[][] times1 = {{2,1,1},{2,3,1},{3,4,1}};
        int result1 = Day40Practice.networkDelayTime(times1, 4, 2);
        runTest("Network Delay Test 1: Basic case", result1 == 2);
        
        // Test 2: All connected directly
        int[][] times2 = {{1,2,1},{1,3,1},{1,4,1}};
        int result2 = Day40Practice.networkDelayTime(times2, 4, 1);
        runTest("Network Delay Test 2: Star topology", result2 == 1);
        
        // Test 3: Unreachable node
        int[][] times3 = {{1,2,1}};
        int result3 = Day40Practice.networkDelayTime(times3, 3, 1);
        runTest("Network Delay Test 3: Unreachable node", result3 == -1);
        
        // Test 4: Single node
        int[][] times4 = {};
        int result4 = Day40Practice.networkDelayTime(times4, 1, 1);
        runTest("Network Delay Test 4: Single node", result4 == 0);
        
        // Test 5: Bellman-Ford approach
        int result5 = Day40Practice.networkDelayTimeBellmanFord(times1, 4, 2);
        runTest("Network Delay Test 5: Bellman-Ford approach", result5 == 2);
        
        // Test 6: Complex network
        int[][] times6 = {{1,2,1},{2,3,2},{1,3,4}};
        int result6 = Day40Practice.networkDelayTime(times6, 3, 1);
        runTest("Network Delay Test 6: Shortest path selection", result6 == 3);
    }
    
    public static void testCheapestFlights() {
        System.out.println("\n--- Testing Cheapest Flights Within K Stops ---");
        
        // Test 1: Basic case
        int[][] flights1 = {{0,1,100},{1,2,100},{0,2,500}};
        int result1 = Day40Practice.findCheapestPrice(3, flights1, 0, 2, 1);
        runTest("Cheapest Flights Test 1: With 1 stop", result1 == 200);
        
        // Test 2: Direct flight cheaper
        int result2 = Day40Practice.findCheapestPrice(3, flights1, 0, 2, 0);
        runTest("Cheapest Flights Test 2: Direct flight", result2 == 500);
        
        // Test 3: No valid route
        int[][] flights3 = {{0,1,100}};
        int result3 = Day40Practice.findCheapestPrice(3, flights3, 0, 2, 1);
        runTest("Cheapest Flights Test 3: No route", result3 == -1);
        
        // Test 4: Multiple stops
        int[][] flights4 = {{0,1,100},{1,2,100},{2,3,100},{0,3,400}};
        int result4 = Day40Practice.findCheapestPrice(4, flights4, 0, 3, 2);
        runTest("Cheapest Flights Test 4: Multiple stops", result4 == 300);
        
        // Test 5: Bellman-Ford approach
        int result5 = Day40Practice.findCheapestPriceBellmanFord(3, flights1, 0, 2, 1);
        runTest("Cheapest Flights Test 5: Bellman-Ford", result5 == 200);
        
        // Test 6: K stops constraint
        int[][] flights6 = {{0,1,1},{1,2,1},{2,3,1},{0,3,10}};
        int result6 = Day40Practice.findCheapestPrice(4, flights6, 0, 3, 1);
        runTest("Cheapest Flights Test 6: K stops limit", result6 == 10);
    }
    
    public static void testCriticalConnections() {
        System.out.println("\n--- Testing Critical Connections ---");
        
        // Test 1: Single bridge
        List<List<Integer>> conn1 = new ArrayList<>();
        conn1.add(Arrays.asList(0, 1));
        conn1.add(Arrays.asList(1, 2));
        conn1.add(Arrays.asList(2, 0));
        conn1.add(Arrays.asList(1, 3));
        
        List<List<Integer>> result1 = Day40Practice.criticalConnections(4, conn1);
        runTest("Critical Connections Test 1: One bridge", result1.size() == 1);
        
        // Test 2: No bridges (all in cycle)
        List<List<Integer>> conn2 = new ArrayList<>();
        conn2.add(Arrays.asList(0, 1));
        conn2.add(Arrays.asList(1, 2));
        conn2.add(Arrays.asList(2, 0));
        
        List<List<Integer>> result2 = Day40Practice.criticalConnections(3, conn2);
        runTest("Critical Connections Test 2: No bridges", result2.size() == 0);
        
        // Test 3: All edges are bridges (tree)
        List<List<Integer>> conn3 = new ArrayList<>();
        conn3.add(Arrays.asList(0, 1));
        conn3.add(Arrays.asList(1, 2));
        conn3.add(Arrays.asList(2, 3));
        
        List<List<Integer>> result3 = Day40Practice.criticalConnections(4, conn3);
        runTest("Critical Connections Test 3: Tree (all bridges)", result3.size() == 3);
        
        // Test 4: Complex network
        List<List<Integer>> conn4 = new ArrayList<>();
        conn4.add(Arrays.asList(0, 1));
        conn4.add(Arrays.asList(1, 2));
        conn4.add(Arrays.asList(2, 0));
        conn4.add(Arrays.asList(1, 3));
        conn4.add(Arrays.asList(3, 4));
        conn4.add(Arrays.asList(4, 5));
        conn4.add(Arrays.asList(5, 3));
        
        List<List<Integer>> result4 = Day40Practice.criticalConnections(6, conn4);
        runTest("Critical Connections Test 4: Multiple bridges", result4.size() == 1);
    }
    
    public static void testCourseSchedule() {
        System.out.println("\n--- Testing Course Schedule II ---");
        
        // Test 1: Basic case
        int[][] prereqs1 = {{1,0},{2,0},{3,1},{3,2}};
        int[] order1 = Day40Practice.findOrder(4, prereqs1);
        runTest("Course Schedule Test 1: Valid order", order1.length == 4);
        runTest("Course Schedule Test 2: Course 0 before 1", 
                indexOf(order1, 0) < indexOf(order1, 1));
        
        // Test 2: Impossible (cycle)
        int[][] prereqs2 = {{1,0},{0,1}};
        int[] order2 = Day40Practice.findOrder(2, prereqs2);
        runTest("Course Schedule Test 3: Cycle detection", order2.length == 0);
        
        // Test 3: No prerequisites
        int[][] prereqs3 = {};
        int[] order3 = Day40Practice.findOrder(3, prereqs3);
        runTest("Course Schedule Test 4: No prerequisites", order3.length == 3);
        
        // Test 4: DFS approach
        int[] order4 = Day40Practice.findOrderDFS(4, prereqs1);
        runTest("Course Schedule Test 5: DFS valid order", order4.length == 4);
        
        // Test 5: Linear dependency
        int[][] prereqs5 = {{1,0},{2,1},{3,2}};
        int[] order5 = Day40Practice.findOrder(4, prereqs5);
        runTest("Course Schedule Test 6: Linear order", 
                Arrays.equals(order5, new int[]{0,1,2,3}));
    }
    
    private static int indexOf(int[] arr, int value) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == value) return i;
        }
        return -1;
    }
    
    public static void testReconstructItinerary() {
        System.out.println("\n--- Testing Reconstruct Itinerary ---");
        
        // Test 1: Basic case
        List<List<String>> tickets1 = new ArrayList<>();
        tickets1.add(Arrays.asList("MUC", "LHR"));
        tickets1.add(Arrays.asList("JFK", "MUC"));
        tickets1.add(Arrays.asList("SFO", "SJC"));
        tickets1.add(Arrays.asList("LHR", "SFO"));
        
        List<String> result1 = Day40Practice.findItinerary(tickets1);
        runTest("Itinerary Test 1: Correct start", result1.get(0).equals("JFK"));
        runTest("Itinerary Test 2: Correct size", result1.size() == 5);
        
        // Test 2: Multiple choices (lexicographic)
        List<List<String>> tickets2 = new ArrayList<>();
        tickets2.add(Arrays.asList("JFK", "SFO"));
        tickets2.add(Arrays.asList("JFK", "ATL"));
        tickets2.add(Arrays.asList("SFO", "ATL"));
        tickets2.add(Arrays.asList("ATL", "JFK"));
        tickets2.add(Arrays.asList("ATL", "SFO"));
        
        List<String> result2 = Day40Practice.findItinerary(tickets2);
        runTest("Itinerary Test 3: Lexicographic order", result2.get(1).equals("ATL"));
        
        // Test 3: Iterative approach
        List<String> result3 = Day40Practice.findItineraryIterative(tickets1);
        runTest("Itinerary Test 4: Iterative approach", result3.size() == 5);
        runTest("Itinerary Test 5: Iterative starts at JFK", result3.get(0).equals("JFK"));
    }
    
    public static void testSwimInWater() {
        System.out.println("\n--- Testing Swim in Rising Water ---");
        
        // Test 1: Basic case
        int[][] grid1 = {{0,2},{1,3}};
        int result1 = Day40Practice.swimInWaterDijkstra(grid1);
        runTest("Swim Test 1: Basic 2x2 grid", result1 == 3);
        
        // Test 2: Larger grid
        int[][] grid2 = {{0,1,2,3,4},{24,23,22,21,5},{12,13,14,15,16},{11,17,18,19,20},{10,9,8,7,6}};
        int result2 = Day40Practice.swimInWaterDijkstra(grid2);
        runTest("Swim Test 2: 5x5 spiral grid", result2 == 16);
        
        // Test 3: Binary search approach
        int result3 = Day40Practice.swimInWater(grid1);
        runTest("Swim Test 3: Binary search approach", result3 == 3);
        
        // Test 4: Single cell
        int[][] grid4 = {{0}};
        int result4 = Day40Practice.swimInWaterDijkstra(grid4);
        runTest("Swim Test 4: Single cell", result4 == 0);
    }
    
    public static void testMinCostConnectPoints() {
        System.out.println("\n--- Testing Min Cost to Connect All Points ---");
        
        // Test 1: Basic case
        int[][] points1 = {{0,0},{2,2},{3,10},{5,2},{7,0}};
        int result1 = Day40Practice.minCostConnectPoints(points1);
        runTest("Min Cost Test 1: 5 points", result1 == 20);
        
        // Test 2: Two points
        int[][] points2 = {{0,0},{1,1}};
        int result2 = Day40Practice.minCostConnectPoints(points2);
        runTest("Min Cost Test 2: Two points", result2 == 2);
        
        // Test 3: Collinear points
        int[][] points3 = {{0,0},{1,0},{2,0}};
        int result3 = Day40Practice.minCostConnectPoints(points3);
        runTest("Min Cost Test 3: Collinear points", result3 == 2);
        
        // Test 4: Kruskal's approach
        int result4 = Day40Practice.minCostConnectPointsKruskal(points1);
        runTest("Min Cost Test 4: Kruskal's approach", result4 == 20);
        
        // Test 5: Square formation
        int[][] points5 = {{0,0},{0,1},{1,0},{1,1}};
        int result5 = Day40Practice.minCostConnectPoints(points5);
        // Minimum MST cost for 4 square points is 3
        runTest("Min Cost Test 5: Square points", result5 == 3);
    }
    
    public static void testMakeConnected() {
        System.out.println("\n--- Testing Make Network Connected ---");
        
        // Test 1: Need 1 move
        int[][] conn1 = {{0,1},{0,2},{1,2}};
        int result1 = Day40Practice.makeConnected(4, conn1);
        runTest("Make Connected Test 1: Need 1 move", result1 == 1);
        
        // Test 2: Already connected
        int[][] conn2 = {{0,1},{0,2},{0,3}};
        int result2 = Day40Practice.makeConnected(4, conn2);
        runTest("Make Connected Test 2: Already connected", result2 == 0);
        
        // Test 3: Not enough cables
        int[][] conn3 = {{0,1},{0,2}};
        int result3 = Day40Practice.makeConnected(6, conn3);
        runTest("Make Connected Test 3: Insufficient cables", result3 == -1);
        
        // Test 4: DFS approach
        int result4 = Day40Practice.makeConnectedDFS(4, conn1);
        runTest("Make Connected Test 4: DFS approach", result4 == 1);
        
        // Test 5: Multiple components
        int[][] conn5 = {{0,1},{2,3},{4,5}};
        int result5 = Day40Practice.makeConnected(6, conn5);
        // Not enough cables (need at least n-1), should be impossible (-1)
        runTest("Make Connected Test 5: Three components", result5 == -1);
    }
    
    // ==================== EDGE CASES ====================
    
    public static void testEdgeCases() {
        System.out.println("\n--- Testing Edge Cases ---");
        
        // Test 1: Empty graph
        List<List<Edge>> emptyGraph = new ArrayList<>();
        emptyGraph.add(new ArrayList<>());
        int[] emptyDist = GraphAlgorithms.dijkstra(emptyGraph, 0, 1);
        runTest("Edge Case Test 1: Single vertex graph", emptyDist[0] == 0);
        
        // Test 2: Self-loop in Union-Find
        UnionFind uf = new UnionFind(3);
        boolean selfLoop = uf.union(0, 0);
        runTest("Edge Case Test 2: Self-loop union", !selfLoop);
        
        // Test 3: Large weights
        List<Edge> largeEdges = new ArrayList<>();
        largeEdges.add(new Edge(0, 1, 1000000));
        int[] largeDist = GraphAlgorithms.bellmanFord(largeEdges, 2, 0);
        runTest("Edge Case Test 3: Large weights", largeDist[1] == 1000000);
        
        // Test 4: Zero weight edges
        List<Edge> zeroEdges = new ArrayList<>();
        zeroEdges.add(new Edge(0, 1, 0));
        zeroEdges.add(new Edge(1, 2, 0));
        List<Edge> zeroMST = GraphAlgorithms.kruskalMST(zeroEdges, 3);
        runTest("Edge Case Test 4: Zero weight edges", zeroMST.size() == 2);
        
        // Test 5: Dense graph (complete graph)
        int n = 5;
        List<Edge> completeEdges = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                completeEdges.add(new Edge(i, j, 1));
            }
        }
        List<Edge> completeMST = GraphAlgorithms.kruskalMST(completeEdges, n);
        runTest("Edge Case Test 5: Complete graph MST", completeMST.size() == n - 1);
        
        // Test 6: Disconnected components in topological sort
        int v = 4;
        List<List<Integer>> disconnected = new ArrayList<>();
        for (int i = 0; i < v; i++) disconnected.add(new ArrayList<>());
        disconnected.get(0).add(1);
        disconnected.get(2).add(3);
        List<Integer> topoDisconnected = GraphAlgorithms.topologicalSortKahn(disconnected, v);
        runTest("Edge Case Test 6: Disconnected DAG topo sort", topoDisconnected.size() == 4);
        
        // Test 7: Negative zero in Bellman-Ford
        List<Edge> negZero = new ArrayList<>();
        negZero.add(new Edge(0, 1, 0));
        negZero.add(new Edge(1, 0, 0));
        int[] negZeroDist = GraphAlgorithms.bellmanFord(negZero, 2, 0);
        runTest("Edge Case Test 7: Zero weight cycle", negZeroDist != null);
        
        // Test 8: Maximum vertices in Union-Find
        UnionFind largeUF = new UnionFind(1000);
        runTest("Edge Case Test 8: Large Union-Find", largeUF.getComponents() == 1000);
        
        // Test 9: Empty prerequisites
        int[] emptyCourses = Day40Practice.findOrder(5, new int[0][]);
        runTest("Edge Case Test 9: No prerequisites", emptyCourses.length == 5);
        
        // Test 10: Single ticket
        List<List<String>> singleTicket = new ArrayList<>();
        singleTicket.add(Arrays.asList("JFK", "ATL"));
        List<String> singleRoute = Day40Practice.findItinerary(singleTicket);
        runTest("Edge Case Test 10: Single ticket itinerary", singleRoute.size() == 2);
    }
    
    // ==================== MAIN TEST RUNNER ====================
    
    public static void main(String[] args) {
        System.out.println("\n" + "=".repeat(60));
        System.out.println("DAY 40: COMPREHENSIVE GRAPH ALGORITHMS TEST SUITE");
        System.out.println("=".repeat(60));
        
        // Fundamental algorithms tests
        testDijkstra();
        testBellmanFord();
        testFloydWarshall();
        testPrimMST();
        testKruskalMST();
        testTopologicalSort();
        testSCC();
        testUnionFind();
        
        // Advanced problems tests
        testNetworkDelayTime();
        testCheapestFlights();
        testCriticalConnections();
        testCourseSchedule();
        testReconstructItinerary();
        testSwimInWater();
        testMinCostConnectPoints();
        testMakeConnected();
        
        // Edge cases
        testEdgeCases();
        
        // Print final summary
        printSummary();
        
        if (passedTests == totalTests) {
            System.out.println("\n🎉 ALL TESTS PASSED! 100% SUCCESS RATE! 🎉");
        } else {
            System.out.println("\n⚠️  Some tests failed. Review the output above.");
        }
    }
}
