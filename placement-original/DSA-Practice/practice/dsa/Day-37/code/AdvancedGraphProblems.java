package day37.graphs;

import java.util.*;

/**
 * DAY 37: Week 5 Assessment - Advanced Graph Problems
 * 
 * Topics Covered:
 * 1. Graph Traversal Variations (BFS/DFS)
 * 2. Shortest Path Algorithms
 * 3. Topological Sort
 * 4. Strongly Connected Components
 * 5. Bipartite Graphs
 * 6. Graph Coloring
 */
public class AdvancedGraphProblems {

    // ==================== PROBLEM 1: WORD LADDER (LEETCODE 127) ====================
    
    /**
     * Word Ladder - Find shortest transformation sequence
     * Time: O(M^2 × N) where M = word length, N = wordList size
     * Space: O(M × N)
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
                String word = queue.poll();
                
                if (word.equals(endWord)) {
                    return level;
                }
                
                // Try all possible transformations
                char[] chars = word.toCharArray();
                for (int j = 0; j < chars.length; j++) {
                    char original = chars[j];
                    
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == original) continue;
                        
                        chars[j] = c;
                        String newWord = new String(chars);
                        
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
    
    // ==================== PROBLEM 2: COURSE SCHEDULE II (LEETCODE 210) ====================
    
    /**
     * Course Schedule II - Return valid course order (Topological Sort)
     * Time: O(V + E), Space: O(V + E)
     */
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        List<List<Integer>> graph = new ArrayList<>();
        int[] indegree = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] prereq : prerequisites) {
            int course = prereq[0];
            int prerequisite = prereq[1];
            graph.get(prerequisite).add(course);
            indegree[course]++;
        }
        
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }
        
        int[] result = new int[numCourses];
        int index = 0;
        
        while (!queue.isEmpty()) {
            int course = queue.poll();
            result[index++] = course;
            
            for (int next : graph.get(course)) {
                indegree[next]--;
                if (indegree[next] == 0) {
                    queue.offer(next);
                }
            }
        }
        
        return index == numCourses ? result : new int[0];
    }
    
    // ==================== PROBLEM 3: ALIEN DICTIONARY (LEETCODE 269) ====================
    
    /**
     * Alien Dictionary - Determine character order from sorted words
     * Time: O(C) where C = total characters in all words
     * Space: O(1) for 26 characters
     */
    public static String alienOrder(String[] words) {
        Map<Character, Set<Character>> graph = new HashMap<>();
        Map<Character, Integer> indegree = new HashMap<>();
        
        // Initialize graph
        for (String word : words) {
            for (char c : word.toCharArray()) {
                graph.putIfAbsent(c, new HashSet<>());
                indegree.putIfAbsent(c, 0);
            }
        }
        
        // Build graph from adjacent words
        for (int i = 0; i < words.length - 1; i++) {
            String word1 = words[i];
            String word2 = words[i + 1];
            int minLen = Math.min(word1.length(), word2.length());
            
            // Check for invalid ordering
            if (word1.length() > word2.length() && word1.startsWith(word2)) {
                return "";
            }
            
            for (int j = 0; j < minLen; j++) {
                char c1 = word1.charAt(j);
                char c2 = word2.charAt(j);
                
                if (c1 != c2) {
                    if (!graph.get(c1).contains(c2)) {
                        graph.get(c1).add(c2);
                        indegree.put(c2, indegree.get(c2) + 1);
                    }
                    break;
                }
            }
        }
        
        // Topological sort
        Queue<Character> queue = new LinkedList<>();
        for (char c : indegree.keySet()) {
            if (indegree.get(c) == 0) {
                queue.offer(c);
            }
        }
        
        StringBuilder result = new StringBuilder();
        
        while (!queue.isEmpty()) {
            char c = queue.poll();
            result.append(c);
            
            for (char next : graph.get(c)) {
                indegree.put(next, indegree.get(next) - 1);
                if (indegree.get(next) == 0) {
                    queue.offer(next);
                }
            }
        }
        
        return result.length() == indegree.size() ? result.toString() : "";
    }
    
    // ==================== PROBLEM 4: CRITICAL CONNECTIONS (LEETCODE 1192) ====================
    
    /**
     * Critical Connections in Network (Bridges) - Tarjan's Algorithm
     * Time: O(V + E), Space: O(V + E)
     */
    public static List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (List<Integer> conn : connections) {
            int u = conn.get(0), v = conn.get(1);
            graph.get(u).add(v);
            graph.get(v).add(u);
        }
        
        List<List<Integer>> bridges = new ArrayList<>();
        int[] disc = new int[n];
        int[] low = new int[n];
        boolean[] visited = new boolean[n];
        Arrays.fill(disc, -1);
        
        int[] time = {0};
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsForBridges(i, -1, graph, disc, low, visited, bridges, time);
            }
        }
        
        return bridges;
    }
    
    private static void dfsForBridges(int u, int parent, List<List<Integer>> graph,
                                     int[] disc, int[] low, boolean[] visited,
                                     List<List<Integer>> bridges, int[] time) {
        visited[u] = true;
        disc[u] = low[u] = time[0]++;
        
        for (int v : graph.get(u)) {
            if (v == parent) continue;
            
            if (!visited[v]) {
                dfsForBridges(v, u, graph, disc, low, visited, bridges, time);
                low[u] = Math.min(low[u], low[v]);
                
                // Bridge condition
                if (low[v] > disc[u]) {
                    bridges.add(Arrays.asList(u, v));
                }
            } else {
                low[u] = Math.min(low[u], disc[v]);
            }
        }
    }
    
    // ==================== PROBLEM 5: IS GRAPH BIPARTITE (LEETCODE 785) ====================
    
    /**
     * Is Graph Bipartite - Check if graph can be 2-colored
     * Time: O(V + E), Space: O(V)
     */
    public static boolean isBipartite(int[][] graph) {
        int n = graph.length;
        int[] colors = new int[n];
        Arrays.fill(colors, -1);
        
        for (int i = 0; i < n; i++) {
            if (colors[i] == -1) {
                if (!bfsForBipartite(i, graph, colors)) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    private static boolean bfsForBipartite(int start, int[][] graph, int[] colors) {
        Queue<Integer> queue = new LinkedList<>();
        queue.offer(start);
        colors[start] = 0;
        
        while (!queue.isEmpty()) {
            int u = queue.poll();
            
            for (int v : graph[u]) {
                if (colors[v] == -1) {
                    colors[v] = 1 - colors[u];
                    queue.offer(v);
                } else if (colors[v] == colors[u]) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    // ==================== PROBLEM 6: CHEAPEST FLIGHTS WITH K STOPS (LEETCODE 787) ====================
    
    /**
     * Cheapest Flights Within K Stops - Modified Dijkstra/Bellman-Ford
     * Time: O(K × E), Space: O(V)
     */
    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        int[] prices = new int[n];
        Arrays.fill(prices, Integer.MAX_VALUE);
        prices[src] = 0;
        
        for (int i = 0; i <= k; i++) {
            int[] temp = Arrays.copyOf(prices, n);
            
            for (int[] flight : flights) {
                int from = flight[0];
                int to = flight[1];
                int price = flight[2];
                
                if (prices[from] != Integer.MAX_VALUE) {
                    temp[to] = Math.min(temp[to], prices[from] + price);
                }
            }
            
            prices = temp;
        }
        
        return prices[dst] == Integer.MAX_VALUE ? -1 : prices[dst];
    }
    
    // ==================== PROBLEM 7: NETWORK DELAY TIME (LEETCODE 743) ====================
    
    /**
     * Network Delay Time - Dijkstra's Algorithm
     * Time: O((V + E) log V), Space: O(V + E)
     */
    public static int networkDelayTime(int[][] times, int n, int k) {
        List<List<int[]>> graph = new ArrayList<>();
        for (int i = 0; i <= n; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] time : times) {
            graph.get(time[0]).add(new int[]{time[1], time[2]});
        }
        
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        pq.offer(new int[]{k, 0});
        
        int[] dist = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[k] = 0;
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int node = curr[0];
            int time = curr[1];
            
            if (time > dist[node]) continue;
            
            for (int[] edge : graph.get(node)) {
                int next = edge[0];
                int weight = edge[1];
                
                if (dist[node] + weight < dist[next]) {
                    dist[next] = dist[node] + weight;
                    pq.offer(new int[]{next, dist[next]});
                }
            }
        }
        
        int maxTime = 0;
        for (int i = 1; i <= n; i++) {
            if (dist[i] == Integer.MAX_VALUE) {
                return -1;
            }
            maxTime = Math.max(maxTime, dist[i]);
        }
        
        return maxTime;
    }
    
    // ==================== PROBLEM 8: RECONSTRUCT ITINERARY (LEETCODE 332) ====================
    
    /**
     * Reconstruct Itinerary - Eulerian Path (Hierholzer's Algorithm)
     * Time: O(E log E), Space: O(E)
     */
    public static List<String> findItinerary(List<List<String>> tickets) {
        Map<String, PriorityQueue<String>> graph = new HashMap<>();
        
        for (List<String> ticket : tickets) {
            graph.putIfAbsent(ticket.get(0), new PriorityQueue<>());
            graph.get(ticket.get(0)).offer(ticket.get(1));
        }
        
        List<String> result = new ArrayList<>();
        dfsForItinerary("JFK", graph, result);
        Collections.reverse(result);
        
        return result;
    }
    
    private static void dfsForItinerary(String airport, Map<String, PriorityQueue<String>> graph,
                                       List<String> result) {
        PriorityQueue<String> arrivals = graph.get(airport);
        
        while (arrivals != null && !arrivals.isEmpty()) {
            dfsForItinerary(arrivals.poll(), graph, result);
        }
        
        result.add(airport);
    }
    
    // ==================== PROBLEM 9: MINIMUM HEIGHT TREES (LEETCODE 310) ====================
    
    /**
     * Minimum Height Trees - Find tree centers
     * Time: O(V), Space: O(V)
     */
    public static List<Integer> findMinHeightTrees(int n, int[][] edges) {
        if (n == 1) return Arrays.asList(0);
        
        List<Set<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new HashSet<>());
        }
        
        for (int[] edge : edges) {
            graph.get(edge[0]).add(edge[1]);
            graph.get(edge[1]).add(edge[0]);
        }
        
        Queue<Integer> leaves = new LinkedList<>();
        for (int i = 0; i < n; i++) {
            if (graph.get(i).size() == 1) {
                leaves.offer(i);
            }
        }
        
        int remaining = n;
        
        while (remaining > 2) {
            int size = leaves.size();
            remaining -= size;
            
            for (int i = 0; i < size; i++) {
                int leaf = leaves.poll();
                int neighbor = graph.get(leaf).iterator().next();
                graph.get(neighbor).remove(leaf);
                
                if (graph.get(neighbor).size() == 1) {
                    leaves.offer(neighbor);
                }
            }
        }
        
        return new ArrayList<>(leaves);
    }
    
    // ==================== PROBLEM 10: ALL PATHS FROM SOURCE TO TARGET (LEETCODE 797) ====================
    
    /**
     * All Paths from Source to Target - DFS with backtracking
     * Time: O(2^V × V), Space: O(V)
     */
    public static List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> result = new ArrayList<>();
        List<Integer> path = new ArrayList<>();
        path.add(0);
        
        dfsForAllPaths(0, graph, path, result);
        
        return result;
    }
    
    private static void dfsForAllPaths(int node, int[][] graph, List<Integer> path,
                                      List<List<Integer>> result) {
        if (node == graph.length - 1) {
            result.add(new ArrayList<>(path));
            return;
        }
        
        for (int next : graph[node]) {
            path.add(next);
            dfsForAllPaths(next, graph, path, result);
            path.remove(path.size() - 1);
        }
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 37: Advanced Graph Problems ===\n");
        
        // Test 1: Word Ladder
        System.out.println("1. Word Ladder:");
        List<String> wordList = Arrays.asList("hot","dot","dog","lot","log","cog");
        int ladder = ladderLength("hit", "cog", wordList);
        System.out.println("Shortest transformation: " + ladder);
        
        // Test 2: Course Schedule II
        System.out.println("\n2. Course Schedule II:");
        int[][] prereqs = {{1,0}, {2,0}, {3,1}, {3,2}};
        int[] order = findOrder(4, prereqs);
        System.out.println("Course order: " + Arrays.toString(order));
        
        // Test 3: Is Bipartite
        System.out.println("\n3. Is Graph Bipartite:");
        int[][] graph1 = {{1,3}, {0,2}, {1,3}, {0,2}};
        System.out.println("Is bipartite: " + isBipartite(graph1));
        
        // Test 4: Network Delay Time
        System.out.println("\n4. Network Delay Time:");
        int[][] times = {{2,1,1}, {2,3,1}, {3,4,1}};
        System.out.println("Delay time: " + networkDelayTime(times, 4, 2));
        
        // Test 5: Minimum Height Trees
        System.out.println("\n5. Minimum Height Trees:");
        int[][] edges = {{1,0}, {1,2}, {1,3}};
        List<Integer> mht = findMinHeightTrees(4, edges);
        System.out.println("MHT roots: " + mht);
        
        // Test 6: All Paths Source to Target
        System.out.println("\n6. All Paths from Source to Target:");
        int[][] graph2 = {{1,2}, {3}, {3}, {}};
        List<List<Integer>> paths = allPathsSourceTarget(graph2);
        System.out.println("All paths: " + paths);
        
        System.out.println("\n✓ All demonstrations completed!");
    }
}
