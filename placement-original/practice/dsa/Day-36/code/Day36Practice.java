package day36.practice;

import day36.unionfind.UnionFind.*;
import java.util.*;

/**
 * DAY 36: Union-Find Practice Problems - 25 Solved Problems
 * 
 * Problem Categories:
 * 1. Basic Union-Find Operations (1-5)
 * 2. Graph Connectivity (6-10)
 * 3. Minimum Spanning Tree (11-13)
 * 4. Grid Problems (14-17)
 * 5. Advanced Applications (18-25)
 */
public class Day36Practice {

    // ==================== BASIC UNION-FIND (1-5) ====================
    
    /**
     * Problem 1: Number of Connected Components in Undirected Graph (LeetCode 323)
     * Given n nodes and edges, count connected components
     * Time: O(E * α(V)), Space: O(V)
     */
    public static int countComponents(int n, int[][] edges) {
        BasicUnionFind uf = new BasicUnionFind(n);
        
        for (int[] edge : edges) {
            uf.union(edge[0], edge[1]);
        }
        
        return uf.getComponents();
    }
    
    /**
     * Problem 2: Friend Circles (LeetCode 547)
     * Given friendship matrix, count number of friend circles
     * Time: O(N^2 * α(N)), Space: O(N)
     */
    public static int findCircleNum(int[][] isConnected) {
        int n = isConnected.length;
        BasicUnionFind uf = new BasicUnionFind(n);
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isConnected[i][j] == 1) {
                    uf.union(i, j);
                }
            }
        }
        
        return uf.getComponents();
    }
    
    /**
     * Problem 3: Redundant Connection (LeetCode 684)
     * Find edge that makes tree into graph with cycle
     * Time: O(E * α(V)), Space: O(V)
     */
    public static int[] findRedundantConnection(int[][] edges) {
        int n = edges.length;
        BasicUnionFind uf = new BasicUnionFind(n + 1);
        
        for (int[] edge : edges) {
            if (!uf.union(edge[0], edge[1])) {
                return edge; // This edge creates cycle
            }
        }
        
        return new int[0];
    }
    
    /**
     * Problem 4: Redundant Connection II (LeetCode 685)
     * Find redundant edge in directed graph
     * Time: O(N * α(N)), Space: O(N)
     */
    public static int[] findRedundantDirectedConnection(int[][] edges) {
        int n = edges.length;
        int[] parent = new int[n + 1];
        Arrays.fill(parent, 0);
        
        int[] candidate1 = null;
        int[] candidate2 = null;
        
        // Step 1: Find node with two parents
        for (int[] edge : edges) {
            int u = edge[0], v = edge[1];
            
            if (parent[v] != 0) {
                candidate1 = new int[]{parent[v], v};
                candidate2 = edge;
                edge[1] = 0; // Invalidate this edge temporarily
            } else {
                parent[v] = u;
            }
        }
        
        // Step 2: Check for cycle
        BasicUnionFind uf = new BasicUnionFind(n + 1);
        
        for (int[] edge : edges) {
            if (edge[1] == 0) continue;
            
            if (!uf.union(edge[0], edge[1])) {
                // Cycle found
                if (candidate1 == null) {
                    return edge;
                }
                return candidate1;
            }
        }
        
        return candidate2;
    }
    
    /**
     * Problem 5: Most Stones Removed with Same Row or Column (LeetCode 947)
     * Remove stones that share row or column
     * Time: O(N * α(N)), Space: O(N)
     */
    public static int removeStones(int[][] stones) {
        int n = stones.length;
        BasicUnionFind uf = new BasicUnionFind(n);
        
        // Map to track stones by row and column
        Map<Integer, Integer> rowMap = new HashMap<>();
        Map<Integer, Integer> colMap = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int row = stones[i][0];
            int col = stones[i][1];
            
            if (rowMap.containsKey(row)) {
                uf.union(i, rowMap.get(row));
            } else {
                rowMap.put(row, i);
            }
            
            if (colMap.containsKey(col)) {
                uf.union(i, colMap.get(col));
            } else {
                colMap.put(col, i);
            }
        }
        
        return n - uf.getComponents();
    }
    
    // ==================== GRAPH CONNECTIVITY (6-10) ====================
    
    /**
     * Problem 6: Satisfiability of Equality Equations (LeetCode 990)
     * Check if equations are satisfiable
     * Time: O(N * α(26)), Space: O(26)
     */
    public static boolean equationsPossible(String[] equations) {
        BasicUnionFind uf = new BasicUnionFind(26);
        
        // Process all equality equations first
        for (String eq : equations) {
            if (eq.charAt(1) == '=') {
                int x = eq.charAt(0) - 'a';
                int y = eq.charAt(3) - 'a';
                uf.union(x, y);
            }
        }
        
        // Check inequality equations
        for (String eq : equations) {
            if (eq.charAt(1) == '!') {
                int x = eq.charAt(0) - 'a';
                int y = eq.charAt(3) - 'a';
                
                if (uf.isConnected(x, y)) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    /**
     * Problem 7: Accounts Merge (LeetCode 721)
     * Merge accounts with common emails
     * Time: O(N * K * α(N)), Space: O(N * K) where K is average emails per account
     */
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        int n = accounts.size();
        UnionFindBySize uf = new UnionFindBySize(n);
        
        Map<String, Integer> emailToAccount = new HashMap<>();
        
        // Union accounts with common emails
        for (int i = 0; i < n; i++) {
            for (int j = 1; j < accounts.get(i).size(); j++) {
                String email = accounts.get(i).get(j);
                
                if (emailToAccount.containsKey(email)) {
                    uf.union(i, emailToAccount.get(email));
                } else {
                    emailToAccount.put(email, i);
                }
            }
        }
        
        // Group emails by root account
        Map<Integer, Set<String>> groups = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int root = uf.find(i);
            groups.putIfAbsent(root, new TreeSet<>());
            
            for (int j = 1; j < accounts.get(i).size(); j++) {
                groups.get(root).add(accounts.get(i).get(j));
            }
        }
        
        // Build result
        List<List<String>> result = new ArrayList<>();
        
        for (Map.Entry<Integer, Set<String>> entry : groups.entrySet()) {
            List<String> merged = new ArrayList<>();
            merged.add(accounts.get(entry.getKey()).get(0));
            merged.addAll(entry.getValue());
            result.add(merged);
        }
        
        return result;
    }
    
    /**
     * Problem 8: Smallest String With Swaps (LeetCode 1202)
     * Swap characters at connected indices to get lexicographically smallest string
     * Time: O(N * α(N) + N log N), Space: O(N)
     */
    public static String smallestStringWithSwaps(String s, List<List<Integer>> pairs) {
        int n = s.length();
        BasicUnionFind uf = new BasicUnionFind(n);
        
        // Union connected indices
        for (List<Integer> pair : pairs) {
            uf.union(pair.get(0), pair.get(1));
        }
        
        // Group characters by component
        Map<Integer, List<Integer>> groups = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int root = uf.find(i);
            groups.putIfAbsent(root, new ArrayList<>());
            groups.get(root).add(i);
        }
        
        char[] result = s.toCharArray();
        
        // Sort characters in each component
        for (List<Integer> indices : groups.values()) {
            List<Character> chars = new ArrayList<>();
            for (int i : indices) {
                chars.add(s.charAt(i));
            }
            Collections.sort(chars);
            Collections.sort(indices);
            
            for (int i = 0; i < indices.size(); i++) {
                result[indices.get(i)] = chars.get(i);
            }
        }
        
        return new String(result);
    }
    
    /**
     * Problem 9: Minimize Malware Spread (LeetCode 924)
     * Remove one infected node to minimize spread
     * Time: O(N^2 * α(N)), Space: O(N)
     */
    public static int minMalwareSpread(int[][] graph, int[] initial) {
        int n = graph.length;
        BasicUnionFind uf = new BasicUnionFind(n);
        
        // Build connected components
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (graph[i][j] == 1) {
                    uf.union(i, j);
                }
            }
        }
        
        // Count infected nodes in each component
        Map<Integer, Integer> infectedCount = new HashMap<>();
        Map<Integer, Integer> componentSize = new HashMap<>();
        
        Arrays.sort(initial);
        
        for (int node : initial) {
            int root = uf.find(node);
            infectedCount.put(root, infectedCount.getOrDefault(root, 0) + 1);
        }
        
        for (int i = 0; i < n; i++) {
            int root = uf.find(i);
            componentSize.put(root, componentSize.getOrDefault(root, 0) + 1);
        }
        
        int result = initial[0];
        int maxSaved = 0;
        
        for (int node : initial) {
            int root = uf.find(node);
            
            // Only saves if this is the only infected in component
            if (infectedCount.get(root) == 1) {
                int saved = componentSize.get(root);
                
                if (saved > maxSaved) {
                    maxSaved = saved;
                    result = node;
                }
            }
        }
        
        return result;
    }
    
    /**
     * Problem 10: Evaluate Division (LeetCode 399) - Union-Find variant
     * Given equations and values, evaluate queries
     * Time: O((E + Q) * α(V)), Space: O(V)
     */
    public static double[] calcEquation(List<List<String>> equations, 
                                       double[] values, 
                                       List<List<String>> queries) {
        Map<String, String> parent = new HashMap<>();
        Map<String, Double> ratio = new HashMap<>();
        
        // Initialize
        for (List<String> eq : equations) {
            parent.put(eq.get(0), eq.get(0));
            parent.put(eq.get(1), eq.get(1));
            ratio.put(eq.get(0), 1.0);
            ratio.put(eq.get(1), 1.0);
        }
        
        // Union with weighted ratio
        for (int i = 0; i < equations.size(); i++) {
            String a = equations.get(i).get(0);
            String b = equations.get(i).get(1);
            double value = values[i];
            
            String rootA = find(a, parent, ratio);
            String rootB = find(b, parent, ratio);
            
            if (!rootA.equals(rootB)) {
                parent.put(rootB, rootA);
                ratio.put(rootB, value * ratio.get(a) / ratio.get(b));
            }
        }
        
        double[] result = new double[queries.size()];
        
        for (int i = 0; i < queries.size(); i++) {
            String c = queries.get(i).get(0);
            String d = queries.get(i).get(1);
            
            if (!parent.containsKey(c) || !parent.containsKey(d)) {
                result[i] = -1.0;
            } else {
                String rootC = find(c, parent, ratio);
                String rootD = find(d, parent, ratio);
                
                if (!rootC.equals(rootD)) {
                    result[i] = -1.0;
                } else {
                    result[i] = ratio.get(c) / ratio.get(d);
                }
            }
        }
        
        return result;
    }
    
    private static String find(String x, Map<String, String> parent, Map<String, Double> ratio) {
        if (!parent.get(x).equals(x)) {
            String originalParent = parent.get(x);
            String root = find(originalParent, parent, ratio);
            parent.put(x, root);
            ratio.put(x, ratio.get(x) * ratio.get(originalParent));
        }
        return parent.get(x);
    }
    
    // ==================== MINIMUM SPANNING TREE (11-13) ====================
    
    /**
     * Problem 11: Min Cost to Connect All Points (LeetCode 1584)
     * Connect all points with minimum Manhattan distance
     * Time: O(N^2 log N), Space: O(N^2)
     */
    public static int minCostConnectPoints(int[][] points) {
        int n = points.length;
        List<Edge> edges = new ArrayList<>();
        
        // Generate all possible edges
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int dist = Math.abs(points[i][0] - points[j][0]) + 
                          Math.abs(points[i][1] - points[j][1]);
                edges.add(new Edge(i, j, dist));
            }
        }
        
        // Kruskal's algorithm
        Collections.sort(edges);
        UnionFindByRank uf = new UnionFindByRank(n);
        
        int totalCost = 0;
        int edgesUsed = 0;
        
        for (Edge edge : edges) {
            if (uf.union(edge.u, edge.v)) {
                totalCost += edge.weight;
                edgesUsed++;
                
                if (edgesUsed == n - 1) {
                    break;
                }
            }
        }
        
        return totalCost;
    }
    
    /**
     * Problem 12: Connecting Cities With Minimum Cost (LeetCode 1135)
     * Minimum cost to connect all cities
     * Time: O(E log E), Space: O(V)
     */
    public static int minimumCost(int n, int[][] connections) {
        List<Edge> edges = new ArrayList<>();
        
        for (int[] conn : connections) {
            edges.add(new Edge(conn[0] - 1, conn[1] - 1, conn[2]));
        }
        
        Collections.sort(edges);
        UnionFindByRank uf = new UnionFindByRank(n);
        
        int totalCost = 0;
        int edgesUsed = 0;
        
        for (Edge edge : edges) {
            if (uf.union(edge.u, edge.v)) {
                totalCost += edge.weight;
                edgesUsed++;
            }
        }
        
        return edgesUsed == n - 1 ? totalCost : -1;
    }
    
    /**
     * Problem 13: Optimize Water Distribution (LeetCode 1168)
     * Minimum cost to supply water to all houses
     * Time: O(N^2 log N), Space: O(N^2)
     */
    public static int minCostToSupplyWater(int n, int[] wells, int[][] pipes) {
        List<Edge> edges = new ArrayList<>();
        
        // Add virtual node 0 connected to all houses with well costs
        for (int i = 0; i < n; i++) {
            edges.add(new Edge(0, i + 1, wells[i]));
        }
        
        // Add pipe connections
        for (int[] pipe : pipes) {
            edges.add(new Edge(pipe[0], pipe[1], pipe[2]));
        }
        
        // Kruskal's algorithm
        Collections.sort(edges);
        UnionFindByRank uf = new UnionFindByRank(n + 1);
        
        int totalCost = 0;
        
        for (Edge edge : edges) {
            if (uf.union(edge.u, edge.v)) {
                totalCost += edge.weight;
            }
        }
        
        return totalCost;
    }
    
    // ==================== GRID PROBLEMS (14-17) ====================
    
    /**
     * Problem 14: Number of Islands (LeetCode 200) - Union-Find approach
     * Count islands in 2D grid
     * Time: O(M * N * α(M*N)), Space: O(M * N)
     */
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;
        
        int m = grid.length;
        int n = grid[0].length;
        BasicUnionFind uf = new BasicUnionFind(m * n);
        int waterCount = 0;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == '0') {
                    waterCount++;
                } else {
                    // Check right and down neighbors
                    if (j + 1 < n && grid[i][j + 1] == '1') {
                        uf.union(i * n + j, i * n + j + 1);
                    }
                    if (i + 1 < m && grid[i + 1][j] == '1') {
                        uf.union(i * n + j, (i + 1) * n + j);
                    }
                }
            }
        }
        
        return uf.getComponents() - waterCount;
    }
    
    /**
     * Problem 15: Number of Islands II (LeetCode 305)
     * Count islands after each addLand operation
     * Time: O(K * α(M*N)), Space: O(M * N) where K is operations
     */
    public static List<Integer> numIslands2(int m, int n, int[][] positions) {
        List<Integer> result = new ArrayList<>();
        BasicUnionFind uf = new BasicUnionFind(m * n);
        boolean[] isLand = new boolean[m * n];
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        
        for (int[] pos : positions) {
            int x = pos[0], y = pos[1];
            int idx = x * n + y;
            
            if (isLand[idx]) {
                result.add(uf.getComponents());
                continue;
            }
            
            isLand[idx] = true;
            uf.components++;
            
            for (int i = 0; i < 4; i++) {
                int nx = x + dx[i];
                int ny = y + dy[i];
                
                if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
                    int nidx = nx * n + ny;
                    if (isLand[nidx]) {
                        uf.union(idx, nidx);
                    }
                }
            }
            
            result.add(uf.getComponents());
        }
        
        return result;
    }
    
    /**
     * Problem 16: Surrounded Regions (LeetCode 130)
     * Capture surrounded regions
     * Time: O(M * N * α(M*N)), Space: O(M * N)
     */
    public static void solve(char[][] board) {
        if (board == null || board.length == 0) return;
        
        int m = board.length;
        int n = board[0].length;
        BasicUnionFind uf = new BasicUnionFind(m * n + 1);
        int dummyNode = m * n;
        
        // Union border 'O' cells with dummy node
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'O') {
                    int idx = i * n + j;
                    
                    if (i == 0 || i == m - 1 || j == 0 || j == n - 1) {
                        uf.union(idx, dummyNode);
                    } else {
                        // Union with adjacent 'O' cells
                        if (board[i - 1][j] == 'O') {
                            uf.union(idx, (i - 1) * n + j);
                        }
                        if (board[i][j - 1] == 'O') {
                            uf.union(idx, i * n + j - 1);
                        }
                    }
                }
            }
        }
        
        // Flip cells not connected to border
        for (int i = 1; i < m - 1; i++) {
            for (int j = 1; j < n - 1; j++) {
                if (board[i][j] == 'O') {
                    int idx = i * n + j;
                    if (!uf.isConnected(idx, dummyNode)) {
                        board[i][j] = 'X';
                    }
                }
            }
        }
    }
    
    /**
     * Problem 17: Bricks Falling When Hit (LeetCode 803)
     * Count bricks that fall after each hit
     * Time: O(R * C * K * α(R*C)), Space: O(R * C)
     */
    public static int[] hitBricks(int[][] grid, int[][] hits) {
        int m = grid.length;
        int n = grid[0].length;
        int[] result = new int[hits.length];
        
        // Mark hit positions
        for (int[] hit : hits) {
            grid[hit[0]][hit[1]]--;
        }
        
        // Build union-find with remaining bricks
        UnionFindBySize uf = new UnionFindBySize(m * n + 1);
        int roof = m * n;
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (grid[i][j] == 1) {
                    unionAround(i, j, grid, uf, n);
                    if (i == 0) {
                        uf.union(i * n + j, roof);
                    }
                }
            }
        }
        
        // Process hits in reverse
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        
        for (int i = hits.length - 1; i >= 0; i--) {
            int x = hits[i][0];
            int y = hits[i][1];
            grid[x][y]++;
            
            if (grid[x][y] == 1) {
                int prevRoofSize = uf.getComponentSize(roof);
                
                if (x == 0) {
                    uf.union(x * n + y, roof);
                }
                
                unionAround(x, y, grid, uf, n);
                int newRoofSize = uf.getComponentSize(roof);
                result[i] = Math.max(0, newRoofSize - prevRoofSize - 1);
            }
        }
        
        return result;
    }
    
    private static void unionAround(int i, int j, int[][] grid, UnionFindBySize uf, int n) {
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        
        for (int k = 0; k < 4; k++) {
            int ni = i + dx[k];
            int nj = j + dy[k];
            
            if (ni >= 0 && ni < grid.length && nj >= 0 && nj < n && grid[ni][nj] == 1) {
                uf.union(i * n + j, ni * n + nj);
            }
        }
    }
    
    // ==================== ADVANCED (18-25) ====================
    
    /**
     * Problem 18: Longest Consecutive Sequence (LeetCode 128) - Union-Find variant
     * Find longest consecutive sequence
     * Time: O(N * α(N)), Space: O(N)
     */
    public static int longestConsecutive(int[] nums) {
        if (nums.length == 0) return 0;
        
        Map<Integer, Integer> map = new HashMap<>();
        UnionFindBySize uf = new UnionFindBySize(nums.length);
        
        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                continue;
            }
            
            map.put(nums[i], i);
            
            if (map.containsKey(nums[i] - 1)) {
                uf.union(i, map.get(nums[i] - 1));
            }
            
            if (map.containsKey(nums[i] + 1)) {
                uf.union(i, map.get(nums[i] + 1));
            }
        }
        
        int maxSize = 1;
        for (int i = 0; i < nums.length; i++) {
            maxSize = Math.max(maxSize, uf.getComponentSize(i));
        }
        
        return maxSize;
    }
    
    /**
     * Problem 19: Sentence Similarity II (LeetCode 737)
     * Check if sentences are similar with transitive pairs
     * Time: O(N + P * α(W)), Space: O(W)
     */
    public static boolean areSentencesSimilarTwo(String[] sentence1, 
                                                 String[] sentence2, 
                                                 List<List<String>> similarPairs) {
        if (sentence1.length != sentence2.length) return false;
        
        Map<String, Integer> wordIndex = new HashMap<>();
        int idx = 0;
        
        for (List<String> pair : similarPairs) {
            if (!wordIndex.containsKey(pair.get(0))) {
                wordIndex.put(pair.get(0), idx++);
            }
            if (!wordIndex.containsKey(pair.get(1))) {
                wordIndex.put(pair.get(1), idx++);
            }
        }
        
        BasicUnionFind uf = new BasicUnionFind(idx);
        
        for (List<String> pair : similarPairs) {
            uf.union(wordIndex.get(pair.get(0)), wordIndex.get(pair.get(1)));
        }
        
        for (int i = 0; i < sentence1.length; i++) {
            if (sentence1[i].equals(sentence2[i])) continue;
            
            if (!wordIndex.containsKey(sentence1[i]) || 
                !wordIndex.containsKey(sentence2[i])) {
                return false;
            }
            
            if (!uf.isConnected(wordIndex.get(sentence1[i]), 
                               wordIndex.get(sentence2[i]))) {
                return false;
            }
        }
        
        return true;
    }
    
    /**
     * Problem 20: Similar String Groups (LeetCode 839)
     * Count groups of similar strings
     * Time: O(N^2 * M * α(N)), Space: O(N)
     */
    public static int numSimilarGroups(String[] strs) {
        int n = strs.length;
        BasicUnionFind uf = new BasicUnionFind(n);
        
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if (isSimilar(strs[i], strs[j])) {
                    uf.union(i, j);
                }
            }
        }
        
        return uf.getComponents();
    }
    
    private static boolean isSimilar(String a, String b) {
        int diff = 0;
        for (int i = 0; i < a.length(); i++) {
            if (a.charAt(i) != b.charAt(i)) {
                diff++;
                if (diff > 2) return false;
            }
        }
        return diff == 0 || diff == 2;
    }
    
    /**
     * Problem 21: Checking Existence of Edge Length Limited Paths (LeetCode 1697)
     * Answer queries about edge-limited paths
     * Time: O((E + Q) log E), Space: O(E + Q)
     */
    public static boolean[] distanceLimitedPathsExist(int n, int[][] edgeList, int[][] queries) {
        // Sort edges by weight
        List<Edge> edges = new ArrayList<>();
        for (int[] e : edgeList) {
            edges.add(new Edge(e[0], e[1], e[2]));
        }
        Collections.sort(edges);
        
        // Sort queries by limit with original index
        int[][] queriesWithIndex = new int[queries.length][4];
        for (int i = 0; i < queries.length; i++) {
            queriesWithIndex[i] = new int[]{queries[i][0], queries[i][1], queries[i][2], i};
        }
        Arrays.sort(queriesWithIndex, (a, b) -> Integer.compare(a[2], b[2]));
        
        boolean[] result = new boolean[queries.length];
        BasicUnionFind uf = new BasicUnionFind(n);
        int edgeIdx = 0;
        
        for (int[] q : queriesWithIndex) {
            int u = q[0], v = q[1], limit = q[2], idx = q[3];
            
            // Add all edges with weight < limit
            while (edgeIdx < edges.size() && edges.get(edgeIdx).weight < limit) {
                Edge e = edges.get(edgeIdx);
                uf.union(e.u, e.v);
                edgeIdx++;
            }
            
            result[idx] = uf.isConnected(u, v);
        }
        
        return result;
    }
    
    /**
     * Problem 22: Number of Operations to Make Network Connected (LeetCode 1319)
     * Minimum operations to connect all computers
     * Time: O(E * α(V)), Space: O(V)
     */
    public static int makeConnected(int n, int[][] connections) {
        if (connections.length < n - 1) {
            return -1; // Not enough cables
        }
        
        BasicUnionFind uf = new BasicUnionFind(n);
        
        for (int[] conn : connections) {
            uf.union(conn[0], conn[1]);
        }
        
        return uf.getComponents() - 1;
    }
    
    /**
     * Problem 23: Largest Component Size by Common Factor (LeetCode 952)
     * Find largest component where nodes share common factor
     * Time: O(N * sqrt(M) * α(N)), Space: O(N + M)
     */
    public static int largestComponentSize(int[] nums) {
        int n = nums.length;
        UnionFindBySize uf = new UnionFindBySize(n);
        Map<Integer, Integer> factorToIndex = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int num = nums[i];
            
            // Find all prime factors
            for (int factor = 2; factor * factor <= num; factor++) {
                if (num % factor == 0) {
                    if (factorToIndex.containsKey(factor)) {
                        uf.union(i, factorToIndex.get(factor));
                    } else {
                        factorToIndex.put(factor, i);
                    }
                    
                    while (num % factor == 0) {
                        num /= factor;
                    }
                }
            }
            
            if (num > 1) {
                if (factorToIndex.containsKey(num)) {
                    uf.union(i, factorToIndex.get(num));
                } else {
                    factorToIndex.put(num, i);
                }
            }
        }
        
        int maxSize = 1;
        for (int i = 0; i < n; i++) {
            maxSize = Math.max(maxSize, uf.getComponentSize(i));
        }
        
        return maxSize;
    }
    
    /**
     * Problem 24: Swim in Rising Water (LeetCode 778)
     * Minimum time to swim from top-left to bottom-right
     * Time: O(N^2 log N), Space: O(N^2)
     */
    public static int swimInWater(int[][] grid) {
        int n = grid.length;
        List<int[]> cells = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                cells.add(new int[]{grid[i][j], i, j});
            }
        }
        
        Collections.sort(cells, (a, b) -> Integer.compare(a[0], b[0]));
        
        BasicUnionFind uf = new BasicUnionFind(n * n);
        int[] dx = {0, 0, 1, -1};
        int[] dy = {1, -1, 0, 0};
        
        for (int[] cell : cells) {
            int time = cell[0], x = cell[1], y = cell[2];
            int idx = x * n + y;
            
            for (int k = 0; k < 4; k++) {
                int nx = x + dx[k];
                int ny = y + dy[k];
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && grid[nx][ny] <= time) {
                    uf.union(idx, nx * n + ny);
                }
            }
            
            if (uf.isConnected(0, n * n - 1)) {
                return time;
            }
        }
        
        return -1;
    }
    
    /**
     * Problem 25: Remove Max Number of Edges to Keep Graph Fully Traversable (LeetCode 1579)
     * Maximum removable edges while keeping graph traversable
     * Time: O(E * α(V)), Space: O(V)
     */
    public static int maxNumEdgesToRemove(int n, int[][] edges) {
        UnionFindByRank ufAlice = new UnionFindByRank(n + 1);
        UnionFindByRank ufBob = new UnionFindByRank(n + 1);
        
        int edgesUsed = 0;
        
        // Process type 3 edges (both can use) first
        for (int[] edge : edges) {
            if (edge[0] == 3) {
                if (ufAlice.union(edge[1], edge[2]) | ufBob.union(edge[1], edge[2])) {
                    edgesUsed++;
                }
            }
        }
        
        // Process type 1 (Alice) and type 2 (Bob) edges
        for (int[] edge : edges) {
            if (edge[0] == 1) {
                if (ufAlice.union(edge[1], edge[2])) {
                    edgesUsed++;
                }
            } else if (edge[0] == 2) {
                if (ufBob.union(edge[1], edge[2])) {
                    edgesUsed++;
                }
            }
        }
        
        // Check if both graphs are fully connected
        if (ufAlice.getComponents() != 2 || ufBob.getComponents() != 2) {
            return -1; // +1 for index 0 which is unused
        }
        
        return edges.length - edgesUsed;
    }
    
    // ==================== UTILITY ====================
    
    static class Edge implements Comparable<Edge> {
        int u, v, weight;
        
        Edge(int u, int v, int weight) {
            this.u = u;
            this.v = v;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 36: Union-Find Practice Problems ===\n");
        
        // Test Problem 1: Count Components
        System.out.println("1. Count Components:");
        int[][] edges1 = {{0,1}, {1,2}, {3,4}};
        System.out.println("Components in graph: " + countComponents(5, edges1));
        
        // Test Problem 2: Friend Circles
        System.out.println("\n2. Friend Circles:");
        int[][] friends = {{1,1,0}, {1,1,0}, {0,0,1}};
        System.out.println("Number of friend circles: " + findCircleNum(friends));
        
        // Test Problem 3: Redundant Connection
        System.out.println("\n3. Redundant Connection:");
        int[][] edges3 = {{1,2}, {1,3}, {2,3}};
        System.out.println("Redundant edge: " + Arrays.toString(findRedundantConnection(edges3)));
        
        // Test Problem 11: Min Cost Connect Points
        System.out.println("\n4. Min Cost to Connect Points:");
        int[][] points = {{0,0}, {2,2}, {3,10}, {5,2}, {7,0}};
        System.out.println("Minimum cost: " + minCostConnectPoints(points));
        
        // Test Problem 14: Number of Islands
        System.out.println("\n5. Number of Islands:");
        char[][] grid = {
            {'1','1','0','0','0'},
            {'1','1','0','0','0'},
            {'0','0','1','0','0'},
            {'0','0','0','1','1'}
        };
        System.out.println("Number of islands: " + numIslands(grid));
        
        // Test Problem 18: Longest Consecutive
        System.out.println("\n6. Longest Consecutive Sequence:");
        int[] nums = {100, 4, 200, 1, 3, 2};
        System.out.println("Longest consecutive: " + longestConsecutive(nums));
        
        System.out.println("\n✓ All practice problems demonstrated!");
    }
}
