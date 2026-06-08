package practice.dsa.graphs;

/**
 * GRAPHS PRACTICE SOLUTIONS
 * Complete collection of graph problems with solutions
 * Difficulty: Easy → Medium → Hard
 */

import java.util.*;

public class GRAPHS_PRACTICE_SOLUTIONS {

    // ==========================================
    // EASY LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 1: Number of Islands (DFS)
     * Time: O(m*n), Space: O(m*n)
     */
    public static int numIslands(char[][] grid) {
        if (grid == null || grid.length == 0) return 0;

        int islands = 0;
        int rows = grid.length, cols = grid[0].length;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == '1') {
                    islands++;
                    dfs(grid, i, j);
                }
            }
        }
        return islands;
    }

    private static void dfs(char[][] grid, int i, int j) {
        int rows = grid.length, cols = grid[0].length;
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == '0') {
            return;
        }

        grid[i][j] = '0'; // Mark as visited
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }

    /**
     * Problem 2: Clone Graph (DFS)
     * Time: O(V + E), Space: O(V)
     */
    static class Node {
        public int val;
        public List<Node> neighbors;
        public Node() {
            val = 0;
            neighbors = new ArrayList<Node>();
        }
        public Node(int _val) {
            val = _val;
            neighbors = new ArrayList<Node>();
        }
        public Node(int _val, ArrayList<Node> _neighbors) {
            val = _val;
            neighbors = _neighbors;
        }
    }

    public static Node cloneGraph(Node node) {
        if (node == null) return null;
        Map<Node, Node> visited = new HashMap<>();
        return cloneGraphDFS(node, visited);
    }

    private static Node cloneGraphDFS(Node node, Map<Node, Node> visited) {
        if (visited.containsKey(node)) {
            return visited.get(node);
        }

        Node clone = new Node(node.val);
        visited.put(node, clone);

        for (Node neighbor : node.neighbors) {
            clone.neighbors.add(cloneGraphDFS(neighbor, visited));
        }
        return clone;
    }

    /**
     * Problem 3: Max Area of Island (DFS)
     * Time: O(m*n), Space: O(m*n)
     */
    public static int maxAreaOfIsland(int[][] grid) {
        if (grid == null || grid.length == 0) return 0;

        int maxArea = 0;
        int rows = grid.length, cols = grid[0].length;

        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (grid[i][j] == 1) {
                    maxArea = Math.max(maxArea, dfsArea(grid, i, j));
                }
            }
        }
        return maxArea;
    }

    private static int dfsArea(int[][] grid, int i, int j) {
        int rows = grid.length, cols = grid[0].length;
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] == 0) {
            return 0;
        }

        grid[i][j] = 0; // Mark as visited
        int area = 1;
        area += dfsArea(grid, i + 1, j);
        area += dfsArea(grid, i - 1, j);
        area += dfsArea(grid, i, j + 1);
        area += dfsArea(grid, i, j - 1);
        return area;
    }

    /**
     * Problem 4: Find the Town Judge
     * Time: O(n), Space: O(n)
     */
    public static int findJudge(int n, int[][] trust) {
        int[] trustCount = new int[n + 1];

        for (int[] t : trust) {
            trustCount[t[0]]--; // Person who trusts
            trustCount[t[1]]++; // Person who is trusted
        }

        for (int i = 1; i <= n; i++) {
            if (trustCount[i] == n - 1) {
                return i;
            }
        }
        return -1;
    }

    /**
     * Problem 5: Valid Tree
     * Time: O(V + E), Space: O(V + E)
     */
    public static boolean validTree(int n, int[][] edges) {
        if (edges.length != n - 1) return false;

        // Build adjacency list
        List<List<Integer>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] edge : edges) {
            adj.get(edge[0]).add(edge[1]);
            adj.get(edge[1]).add(edge[0]);
        }

        boolean[] visited = new boolean[n];
        if (hasCycle(adj, 0, -1, visited)) return false;

        // Check if all nodes are visited (connected)
        for (boolean v : visited) {
            if (!v) return false;
        }
        return true;
    }

    private static boolean hasCycle(List<List<Integer>> adj, int node, int parent, boolean[] visited) {
        visited[node] = true;

        for (int neighbor : adj.get(node)) {
            if (!visited[neighbor]) {
                if (hasCycle(adj, neighbor, node, visited)) {
                    return true;
                }
            } else if (neighbor != parent) {
                return true;
            }
        }
        return false;
    }

    /**
     * Problem 6: Graph Valid Tree (Union-Find)
     * Time: O(V + E * α(V)), Space: O(V)
     */
    static class UnionFind {
        private int[] parent;
        private int[] rank;

        public UnionFind(int size) {
            parent = new int[size];
            rank = new int[size];
            for (int i = 0; i < size; i++) {
                parent[i] = i;
            }
        }

        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }

        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);

            if (rootX == rootY) return false;

            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
            return true;
        }
    }

    public static boolean validTreeUF(int n, int[][] edges) {
        if (edges.length != n - 1) return false;

        UnionFind uf = new UnionFind(n);
        for (int[] edge : edges) {
            if (!uf.union(edge[0], edge[1])) {
                return false; // Cycle detected
            }
        }
        return true;
    }

    // ==========================================
    // MEDIUM LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 7: Course Schedule (Topological Sort - Kahn's Algorithm)
     * Time: O(V + E), Space: O(V + E)
     */
    public static boolean canFinish(int numCourses, int[][] prerequisites) {
        int[] indegree = new int[numCourses];
        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < numCourses; i++) {
            adj.add(new ArrayList<>());
        }

        for (int[] prereq : prerequisites) {
            adj.get(prereq[1]).add(prereq[0]);
            indegree[prereq[0]]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }

        int coursesTaken = 0;
        while (!queue.isEmpty()) {
            int course = queue.poll();
            coursesTaken++;

            for (int nextCourse : adj.get(course)) {
                indegree[nextCourse]--;
                if (indegree[nextCourse] == 0) {
                    queue.offer(nextCourse);
                }
            }
        }

        return coursesTaken == numCourses;
    }

    /**
     * Problem 8: Pacific Atlantic Water Flow (DFS)
     * Time: O(m*n), Space: O(m*n)
     */
    public static List<List<Integer>> pacificAtlantic(int[][] heights) {
        List<List<Integer>> result = new ArrayList<>();
        if (heights == null || heights.length == 0) return result;

        int rows = heights.length, cols = heights[0].length;
        boolean[][] pacific = new boolean[rows][cols];
        boolean[][] atlantic = new boolean[rows][cols];

        // DFS from Pacific borders
        for (int i = 0; i < rows; i++) {
            dfsWaterFlow(heights, pacific, i, 0, heights[i][0]);
        }
        for (int j = 0; j < cols; j++) {
            dfsWaterFlow(heights, pacific, 0, j, heights[0][j]);
        }

        // DFS from Atlantic borders
        for (int i = 0; i < rows; i++) {
            dfsWaterFlow(heights, atlantic, i, cols - 1, heights[i][cols - 1]);
        }
        for (int j = 0; j < cols; j++) {
            dfsWaterFlow(heights, atlantic, rows - 1, j, heights[rows - 1][j]);
        }

        // Find cells that can reach both oceans
        for (int i = 0; i < rows; i++) {
            for (int j = 0; j < cols; j++) {
                if (pacific[i][j] && atlantic[i][j]) {
                    result.add(Arrays.asList(i, j));
                }
            }
        }
        return result;
    }

    private static void dfsWaterFlow(int[][] heights, boolean[][] visited, int i, int j, int prevHeight) {
        int rows = heights.length, cols = heights[0].length;
        if (i < 0 || i >= rows || j < 0 || j >= cols || visited[i][j] || heights[i][j] < prevHeight) {
            return;
        }

        visited[i][j] = true;
        dfsWaterFlow(heights, visited, i + 1, j, heights[i][j]);
        dfsWaterFlow(heights, visited, i - 1, j, heights[i][j]);
        dfsWaterFlow(heights, visited, i, j + 1, heights[i][j]);
        dfsWaterFlow(heights, visited, i, j - 1, heights[i][j]);
    }

    /**
     * Problem 9: Network Delay Time (Dijkstra's Algorithm)
     * Time: O((V + E) log V), Space: O(V + E)
     */
    public static int networkDelayTime(int[][] times, int n, int k) {
        // Build adjacency list
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] time : times) {
            adj.get(time[0]).add(new int[]{time[1], time[2]});
        }

        // Min-heap for Dijkstra
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        int[] dist = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[k] = 0;
        pq.offer(new int[]{k, 0});

        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0], time = curr[1];

            if (time > dist[node]) continue;

            for (int[] neighbor : adj.get(node)) {
                int nextNode = neighbor[0], nextTime = time + neighbor[1];
                if (nextTime < dist[nextNode]) {
                    dist[nextNode] = nextTime;
                    pq.offer(new int[]{nextNode, nextTime});
                }
            }
        }

        int maxTime = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == Integer.MAX_VALUE) return -1;
            maxTime = Math.max(maxTime, dist[i]);
        }
        return maxTime;
    }

    /**
     * Problem 10: Redundant Connection (Union-Find)
     * Time: O(V + E * α(V)), Space: O(V)
     */
    public static int[] findRedundantConnection(int[][] edges) {
        UnionFind uf = new UnionFind(edges.length + 1);

        for (int[] edge : edges) {
            if (!uf.union(edge[0], edge[1])) {
                return edge; // This edge creates a cycle
            }
        }
        return new int[0]; // Should not reach here for valid input
    }

    // ==========================================
    // HARD LEVEL PROBLEMS
    // ==========================================

    /**
     * Problem 11: Word Ladder (BFS)
     * Time: O(M² * N), Space: O(M² * N)
     */
    public static int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        if (!wordSet.contains(endWord)) return 0;

        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int level = 1;

        while (!queue.isEmpty()) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                String current = queue.poll();
                char[] chars = current.toCharArray();

                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        chars[j] = c;
                        String newWord = new String(chars);

                        if (newWord.equals(endWord)) return level + 1;

                        if (wordSet.contains(newWord)) {
                            queue.offer(newWord);
                            wordSet.remove(newWord);
                        }
                    }
                    chars[j] = original;
                }
            }
            level++;
        }
        return 0;
    }

    /**
     * Problem 12: Critical Connections in a Network (Tarjan's Algorithm)
     * Time: O(V + E), Space: O(V + E)
     */
    public static List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        List<List<Integer>> result = new ArrayList<>();
        List<List<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }

        for (List<Integer> conn : connections) {
            adj.get(conn.get(0)).add(conn.get(1));
            adj.get(conn.get(1)).add(conn.get(0));
        }

        int[] disc = new int[n];
        int[] low = new int[n];
        int[] parent = new int[n];
        boolean[] visited = new boolean[n];
        Arrays.fill(disc, -1);
        Arrays.fill(low, -1);
        Arrays.fill(parent, -1);

        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsCritical(i, 0, disc, low, parent, visited, adj, result);
            }
        }

        return result;
    }

    private static int time = 0;
    private static void dfsCritical(int u, int parent, int[] disc, int[] low, int[] parentArr,
                                   boolean[] visited, List<List<Integer>> adj, List<List<Integer>> result) {
        visited[u] = true;
        disc[u] = low[u] = time++;
        parentArr[u] = parent;

        for (int v : adj.get(u)) {
            if (!visited[v]) {
                dfsCritical(v, u, disc, low, parentArr, visited, adj, result);

                low[u] = Math.min(low[u], low[v]);

                if (low[v] > disc[u]) {
                    result.add(Arrays.asList(u, v));
                }
            } else if (v != parentArr[u]) {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }

    /**
     * Problem 13: Alien Dictionary (Topological Sort)
     * Time: O(C), Space: O(C)
     */
    public static String alienOrder(String[] words) {
        // Build graph
        Map<Character, List<Character>> graph = new HashMap<>();
        Map<Character, Integer> indegree = new HashMap<>();

        // Initialize
        for (String word : words) {
            for (char c : word.toCharArray()) {
                graph.put(c, new ArrayList<>());
                indegree.put(c, 0);
            }
        }

        // Build edges
        for (int i = 0; i < words.length - 1; i++) {
            String word1 = words[i], word2 = words[i + 1];
            int len = Math.min(word1.length(), word2.length());

            for (int j = 0; j < len; j++) {
                char c1 = word1.charAt(j), c2 = word2.charAt(j);
                if (c1 != c2) {
                    graph.get(c1).add(c2);
                    indegree.put(c2, indegree.get(c2) + 1);
                    break;
                }
            }
        }

        // Topological sort using Kahn's algorithm
        Queue<Character> queue = new LinkedList<>();
        for (char c : indegree.keySet()) {
            if (indegree.get(c) == 0) {
                queue.offer(c);
            }
        }

        StringBuilder result = new StringBuilder();
        while (!queue.isEmpty()) {
            char curr = queue.poll();
            result.append(curr);

            for (char next : graph.get(curr)) {
                indegree.put(next, indegree.get(next) - 1);
                if (indegree.get(next) == 0) {
                    queue.offer(next);
                }
            }
        }

        return result.length() == indegree.size() ? result.toString() : "";
    }

    /**
     * Problem 14: Cheapest Flights Within K Stops
     * Time: O(K * E), Space: O(V)
     */
    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Build adjacency list
        List<List<int[]>> adj = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            adj.add(new ArrayList<>());
        }
        for (int[] flight : flights) {
            adj.get(flight[0]).add(new int[]{flight[1], flight[2]});
        }

        // BFS with cost tracking
        int[] costs = new int[n];
        Arrays.fill(costs, Integer.MAX_VALUE);
        costs[src] = 0;

        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{src, 0}); // [city, stops]

        int stops = 0;
        while (!queue.isEmpty() && stops <= k) {
            int size = queue.size();
            for (int i = 0; i < size; i++) {
                int[] curr = queue.poll();
                int city = curr[0], cost = costs[city];

                for (int[] neighbor : adj.get(city)) {
                    int nextCity = neighbor[0], price = neighbor[1];
                    int newCost = cost + price;

                    if (newCost < costs[nextCity]) {
                        costs[nextCity] = newCost;
                        queue.offer(new int[]{nextCity, stops + 1});
                    }
                }
            }
            stops++;
        }

        return costs[dst] == Integer.MAX_VALUE ? -1 : costs[dst];
    }

    // ==========================================
    // UTILITY METHODS
    // ==========================================

    public static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
    }

    // ==========================================
    // TEST METHODS
    // ==========================================

    public static void main(String[] args) {
        System.out.println("=== GRAPHS PRACTICE SOLUTIONS ===\n");

        // Test Number of Islands
        System.out.println("1. Number of Islands");
        char[][] grid1 = {
            {'1', '1', '1', '1', '0'},
            {'1', '1', '0', '1', '0'},
            {'1', '1', '0', '0', '0'},
            {'0', '0', '0', '0', '0'}
        };
        System.out.println("Grid:");
        for (char[] row : grid1) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println("Number of Islands: " + numIslands(grid1));
        System.out.println();

        // Test Find the Town Judge
        System.out.println("2. Find the Town Judge");
        int[][] trust = {{1, 2}, {2, 3}};
        int n = 3;
        System.out.println("Trust: " + Arrays.deepToString(trust));
        System.out.println("Town Judge: " + findJudge(n, trust));
        System.out.println();

        // Test Valid Tree
        System.out.println("3. Valid Tree");
        int[][] edges = {{0, 1}, {0, 2}, {0, 3}, {1, 4}};
        System.out.println("Edges: " + Arrays.deepToString(edges));
        System.out.println("Is Valid Tree: " + validTree(5, edges));
        System.out.println();

        // Test Course Schedule
        System.out.println("4. Course Schedule");
        int[][] prereqs = {{1, 0}, {0, 1}};
        System.out.println("Prerequisites: " + Arrays.deepToString(prereqs));
        System.out.println("Can Finish: " + canFinish(2, prereqs));
        System.out.println();

        // Test Network Delay Time
        System.out.println("5. Network Delay Time");
        int[][] times = {{2, 1, 1}, {2, 3, 1}, {3, 4, 1}};
        System.out.println("Times: " + Arrays.deepToString(times));
        System.out.println("Network Delay: " + networkDelayTime(times, 4, 2));
        System.out.println();

        // Test Word Ladder
        System.out.println("6. Word Ladder");
        List<String> wordList = Arrays.asList("hot", "dot", "dog", "lot", "log", "cog");
        System.out.println("Word List: " + wordList);
        System.out.println("Ladder Length: " + ladderLength("hit", "cog", wordList));
    }
}