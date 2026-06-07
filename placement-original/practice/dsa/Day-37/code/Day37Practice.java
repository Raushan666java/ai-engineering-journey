package day37.practice;

import java.util.*;

/**
 * DAY 37: Week 5 Assessment - 6 Comprehensive Graph Problems
 * 
 * Problems cover:
 * 1. Word Ladder II - Multiple shortest paths
 * 2. Graph Valid Tree - Connectivity + Cycle detection
 * 3. Swim in Rising Water - Binary search + BFS
 * 4. Evaluate Division - Graph with weighted edges
 * 5. Parallel Courses II - Topological sort with constraints
 * 6. Count Unreachable Pairs - Union-Find application
 */
public class Day37Practice {

    // ==================== PROBLEM 1: Word Ladder II (LC 126) ====================
    /**
     * Find ALL shortest transformation sequences from beginWord to endWord
     * 
     * Time: O(N * L * 26^L) where N = wordList size, L = word length
     * Space: O(N * L)
     * 
     * Example:
     * Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]
     * Output: [["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]
     */
    public static List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        List<List<String>> result = new ArrayList<>();
        Set<String> wordSet = new HashSet<>(wordList);
        
        if (!wordSet.contains(endWord)) return result;
        
        // BFS to find all parents for each word
        Map<String, List<String>> parents = new HashMap<>();
        Map<String, Integer> distance = new HashMap<>();
        
        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        distance.put(beginWord, 0);
        
        boolean found = false;
        int level = 0;
        
        while (!queue.isEmpty() && !found) {
            int size = queue.size();
            Set<String> visited = new HashSet<>();
            
            for (int i = 0; i < size; i++) {
                String word = queue.poll();
                char[] chars = word.toCharArray();
                
                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];
                    
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        
                        chars[j] = c;
                        String next = new String(chars);
                        
                        if (!wordSet.contains(next)) continue;
                        
                        if (!distance.containsKey(next)) {
                            distance.put(next, level + 1);
                            visited.add(next);
                            
                            if (next.equals(endWord)) {
                                found = true;
                            }
                        }
                        
                        if (distance.get(next) == level + 1) {
                            parents.computeIfAbsent(next, k -> new ArrayList<>()).add(word);
                        }
                    }
                    
                    chars[j] = original;
                }
            }
            
            queue.addAll(visited);
            level++;
        }
        
        if (!found) return result;
        
        // Backtrack to build all paths
        List<String> path = new ArrayList<>();
        path.add(endWord);
        backtrack(endWord, beginWord, parents, path, result);
        
        return result;
    }
    
    private static void backtrack(String word, String beginWord, 
                                  Map<String, List<String>> parents,
                                  List<String> path, List<List<String>> result) {
        if (word.equals(beginWord)) {
            List<String> validPath = new ArrayList<>(path);
            Collections.reverse(validPath);
            result.add(validPath);
            return;
        }
        
        if (!parents.containsKey(word)) return;
        
        for (String parent : parents.get(word)) {
            path.add(parent);
            backtrack(parent, beginWord, parents, path, result);
            path.remove(path.size() - 1);
        }
    }
    
    // ==================== PROBLEM 2: Graph Valid Tree (LC 261) ====================
    /**
     * Check if undirected graph forms a valid tree
     * Tree conditions: 1) No cycles, 2) All nodes connected
     * 
     * Time: O(V + E), Space: O(V)
     * 
     * Example:
     * Input: n = 5, edges = [[0,1],[0,2],[0,3],[1,4]]
     * Output: true
     */
    public static boolean validTree(int n, int[][] edges) {
        // Tree must have exactly n-1 edges
        if (edges.length != n - 1) return false;
        
        // Build adjacency list
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        
        // Check connectivity with DFS
        boolean[] visited = new boolean[n];
        dfsTree(graph, 0, -1, visited);
        
        // All nodes should be visited
        for (boolean v : visited) {
            if (!v) return false;
        }
        
        return true;
    }
    
    private static void dfsTree(List<List<Integer>> graph, int node, int parent, boolean[] visited) {
        visited[node] = true;
        
        for (int neighbor : graph.get(node)) {
            if (neighbor != parent && !visited[neighbor]) {
                dfsTree(graph, neighbor, node, visited);
            }
        }
    }
    
    // ==================== PROBLEM 3: Swim in Rising Water (LC 778) ====================
    /**
     * Find minimum time to reach bottom-right from top-left
     * Can only move when water level >= grid value
     * 
     * Time: O(N^2 log N), Space: O(N^2)
     * 
     * Example:
     * Input: grid = [[0,2],[1,3]]
     * Output: 3
     */
    public static int swimInWater(int[][] grid) {
        int n = grid.length;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[2] - b[2]);
        boolean[][] visited = new boolean[n][n];
        
        pq.offer(new int[]{0, 0, grid[0][0]});
        visited[0][0] = true;
        
        int[][] dirs = {{-1,0},{1,0},{0,-1},{0,1}};
        int maxTime = grid[0][0];
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int r = curr[0], c = curr[1], time = curr[2];
            maxTime = Math.max(maxTime, time);
            
            if (r == n-1 && c == n-1) return maxTime;
            
            for (int[] dir : dirs) {
                int nr = r + dir[0], nc = c + dir[1];
                
                if (nr >= 0 && nr < n && nc >= 0 && nc < n && !visited[nr][nc]) {
                    visited[nr][nc] = true;
                    pq.offer(new int[]{nr, nc, grid[nr][nc]});
                }
            }
        }
        
        return -1;
    }
    
    // ==================== PROBLEM 4: Evaluate Division (LC 399) ====================
    /**
     * Given equations like a/b = 2.0, b/c = 3.0, compute queries like a/c
     * Build graph with division as edge weights
     * 
     * Time: O(E + Q * (V + E)) where E = equations, Q = queries
     * Space: O(E)
     * 
     * Example:
     * Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], 
     *        queries = [["a","c"],["b","a"],["a","e"]]
     * Output: [6.00000,0.50000,-1.00000]
     */
    public static double[] calcEquation(List<List<String>> equations, double[] values, 
                                       List<List<String>> queries) {
        // Build graph: a -> b with weight value, b -> a with weight 1/value
        Map<String, Map<String, Double>> graph = new HashMap<>();
        
        for (int i = 0; i < equations.size(); i++) {
            String u = equations.get(i).get(0);
            String v = equations.get(i).get(1);
            double val = values[i];
            
            graph.computeIfAbsent(u, k -> new HashMap<>()).put(v, val);
            graph.computeIfAbsent(v, k -> new HashMap<>()).put(u, 1.0 / val);
        }
        
        double[] result = new double[queries.size()];
        
        for (int i = 0; i < queries.size(); i++) {
            String start = queries.get(i).get(0);
            String end = queries.get(i).get(1);
            
            if (!graph.containsKey(start) || !graph.containsKey(end)) {
                result[i] = -1.0;
            } else if (start.equals(end)) {
                result[i] = 1.0;
            } else {
                Set<String> visited = new HashSet<>();
                result[i] = dfsCalc(graph, start, end, visited, 1.0);
            }
        }
        
        return result;
    }
    
    private static double dfsCalc(Map<String, Map<String, Double>> graph, 
                                 String curr, String target, 
                                 Set<String> visited, double product) {
        if (curr.equals(target)) return product;
        
        visited.add(curr);
        
        for (Map.Entry<String, Double> neighbor : graph.get(curr).entrySet()) {
            if (!visited.contains(neighbor.getKey())) {
                double result = dfsCalc(graph, neighbor.getKey(), target, 
                                       visited, product * neighbor.getValue());
                if (result != -1.0) return result;
            }
        }
        
        return -1.0;
    }
    
    // ==================== PROBLEM 5: Parallel Courses II (LC 1494) ====================
    /**
     * Minimum semesters to complete all courses with constraint of k courses per semester
     * Uses bitmask DP with topological sort
     * 
     * Time: O(2^N * N^2), Space: O(2^N)
     * 
     * Example:
     * Input: n = 4, dependencies = [[2,1],[3,1],[1,4]], k = 2
     * Output: 3
     */
    public static int minNumberOfSemesters(int n, int[][] dependencies, int k) {
        int[] prereq = new int[n]; // Bitmask of prerequisites for each course
        
        for (int[] dep : dependencies) {
            int prev = dep[0] - 1;
            int next = dep[1] - 1;
            prereq[next] |= (1 << prev);
        }
        
        int[] dp = new int[1 << n];
        Arrays.fill(dp, n); // Maximum possible semesters
        dp[0] = 0;
        
        for (int mask = 0; mask < (1 << n); mask++) {
            // Find courses that can be taken (prerequisites satisfied)
            int available = 0;
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) == 0 && (mask & prereq[i]) == prereq[i]) {
                    available |= (1 << i);
                }
            }
            
            // Try all subsets of available courses with size <= k
            for (int take = available; take > 0; take = (take - 1) & available) {
                if (Integer.bitCount(take) <= k) {
                    dp[mask | take] = Math.min(dp[mask | take], dp[mask] + 1);
                }
            }
        }
        
        return dp[(1 << n) - 1];
    }
    
    // ==================== PROBLEM 6: Count Unreachable Pairs (LC 2316) ====================
    /**
     * Count pairs of nodes that are not connected in undirected graph
     * 
     * Time: O(V + E), Space: O(V)
     * 
     * Example:
     * Input: n = 3, edges = [[0,1],[0,2],[1,2]]
     * Output: 0 (all nodes are connected)
     * 
     * Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
     * Output: 14
     */
    public static long countPairs(int n, int[][] edges) {
        // Build adjacency list
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        
        // Find all connected components
        boolean[] visited = new boolean[n];
        List<Integer> componentSizes = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                int size = dfsSize(graph, i, visited);
                componentSizes.add(size);
            }
        }
        
        // Count unreachable pairs
        long total = 0;
        long remaining = n;
        
        for (int size : componentSizes) {
            remaining -= size;
            total += (long) size * remaining;
        }
        
        return total;
    }
    
    private static int dfsSize(List<List<Integer>> graph, int node, boolean[] visited) {
        visited[node] = true;
        int size = 1;
        
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                size += dfsSize(graph, neighbor, visited);
            }
        }
        
        return size;
    }
    
    // ==================== ADDITIONAL HELPER METHODS ====================
    
    /**
     * Union-Find helper for tree validation alternative approach
     */
    static class UnionFind {
        int[] parent, rank;
        int components;
        
        UnionFind(int n) {
            parent = new int[n];
            rank = new int[n];
            components = n;
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }
        
        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }
        
        boolean union(int x, int y) {
            int rootX = find(x), rootY = find(y);
            if (rootX == rootY) return false;
            
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
            
            components--;
            return true;
        }
    }
    
    /**
     * Alternative solution for validTree using Union-Find
     */
    public static boolean validTreeUnionFind(int n, int[][] edges) {
        if (edges.length != n - 1) return false;
        
        UnionFind uf = new UnionFind(n);
        
        for (int[] edge : edges) {
            if (!uf.union(edge[0], edge[1])) {
                return false; // Cycle detected
            }
        }
        
        return uf.components == 1;
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 37: Week 5 Assessment Practice ===\n");
        
        // Problem 1: Word Ladder II
        System.out.println("1. Word Ladder II:");
        List<List<String>> ladders = findLadders("hit", "cog", 
            Arrays.asList("hot","dot","dog","lot","log","cog"));
        System.out.println("All shortest paths: " + ladders);
        System.out.println("Number of paths: " + ladders.size());
        
        // Problem 2: Graph Valid Tree
        System.out.println("\n2. Graph Valid Tree:");
        int[][] edges1 = {{0,1},{0,2},{0,3},{1,4}};
        System.out.println("Is valid tree: " + validTree(5, edges1));
        
        int[][] edges2 = {{0,1},{1,2},{2,3},{1,3},{1,4}};
        System.out.println("Is valid tree (with cycle): " + validTree(5, edges2));
        
        // Problem 3: Swim in Rising Water
        System.out.println("\n3. Swim in Rising Water:");
        int[][] grid = {{0,2},{1,3}};
        System.out.println("Minimum time: " + swimInWater(grid));
        
        int[][] grid2 = {{0,1,2,3,4},{24,23,22,21,5},{12,13,14,15,16},{11,17,18,19,20},{10,9,8,7,6}};
        System.out.println("Minimum time (5x5): " + swimInWater(grid2));
        
        // Problem 4: Evaluate Division
        System.out.println("\n4. Evaluate Division:");
        List<List<String>> equations = Arrays.asList(
            Arrays.asList("a","b"),
            Arrays.asList("b","c")
        );
        double[] values = {2.0, 3.0};
        List<List<String>> queries = Arrays.asList(
            Arrays.asList("a","c"),
            Arrays.asList("b","a"),
            Arrays.asList("a","e")
        );
        double[] results = calcEquation(equations, values, queries);
        System.out.println("Results: " + Arrays.toString(results));
        
        // Problem 5: Parallel Courses II
        System.out.println("\n5. Parallel Courses II:");
        int[][] deps = {{2,1},{3,1},{1,4}};
        System.out.println("Minimum semesters: " + minNumberOfSemesters(4, deps, 2));
        
        // Problem 6: Count Unreachable Pairs
        System.out.println("\n6. Count Unreachable Pairs:");
        int[][] edges3 = {{0,2},{0,5},{2,4},{1,6},{5,4}};
        System.out.println("Unreachable pairs: " + countPairs(7, edges3));
        
        int[][] edges4 = {{0,1},{0,2},{1,2}};
        System.out.println("Unreachable pairs (fully connected): " + countPairs(3, edges4));
        
        System.out.println("\n✓ All 6 problems demonstrated successfully!");
        System.out.println("✓ Week 5 assessment completed!");
    }
}
