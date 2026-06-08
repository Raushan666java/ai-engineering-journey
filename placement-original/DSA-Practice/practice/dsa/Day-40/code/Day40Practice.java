package day40.practice;

import java.util.*;

/**
 * Day 40: Advanced Graph Algorithm Problems
 * 
 * LeetCode Hard/Medium Problems:
 * 1. Network Delay Time (LC 743)
 * 2. Cheapest Flights Within K Stops (LC 787)
 * 3. Critical Connections in a Network (LC 1192)
 * 4. Course Schedule II (LC 210)
 * 5. Reconstruct Itinerary (LC 332)
 * 6. Swim in Rising Water (LC 778)
 * 7. Min Cost to Connect All Points (LC 1584)
 * 8. Number of Operations to Make Network Connected (LC 1319)
 * 
 * Each problem includes multiple solution approaches
 */
public class Day40Practice {
    
    // ==================== 1. NETWORK DELAY TIME (LC 743) ====================
    
    /**
     * Network Delay Time - Dijkstra's Algorithm Application
     * 
     * Problem: Find minimum time for all nodes to receive signal
     * 
     * Time: O((V + E) log V)
     * Space: O(V + E)
     * 
     * @param times Array of [source, target, time] edges
     * @param n Number of nodes
     * @param k Starting node
     * @return Minimum time for all nodes to receive signal (-1 if impossible)
     */
    public static int networkDelayTime(int[][] times, int n, int k) {
        // Build adjacency list
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] time : times) {
            graph.putIfAbsent(time[0], new ArrayList<>());
            graph.get(time[0]).add(new int[]{time[1], time[2]});
        }
        
        // Dijkstra's algorithm
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        pq.offer(new int[]{k, 0});
        
        Map<Integer, Integer> dist = new HashMap<>();
        
        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int node = current[0];
            int time = current[1];
            
            if (dist.containsKey(node)) continue;
            dist.put(node, time);
            
            if (graph.containsKey(node)) {
                for (int[] neighbor : graph.get(node)) {
                    int nextNode = neighbor[0];
                    int nextTime = neighbor[1];
                    
                    if (!dist.containsKey(nextNode)) {
                        pq.offer(new int[]{nextNode, time + nextTime});
                    }
                }
            }
        }
        
        if (dist.size() != n) return -1;
        
        int maxTime = 0;
        for (int time : dist.values()) {
            maxTime = Math.max(maxTime, time);
        }
        
        return maxTime;
    }
    
    /**
     * Network Delay Time - Bellman-Ford Approach
     * Better for detecting negative cycles (though not applicable here)
     * 
     * Time: O(V × E)
     * Space: O(V)
     */
    public static int networkDelayTimeBellmanFord(int[][] times, int n, int k) {
        int[] dist = new int[n + 1];
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[k] = 0;
        
        // Relax edges n-1 times
        for (int i = 0; i < n - 1; i++) {
            for (int[] time : times) {
                int u = time[0];
                int v = time[1];
                int w = time[2];
                
                if (dist[u] != Integer.MAX_VALUE && dist[u] + w < dist[v]) {
                    dist[v] = dist[u] + w;
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
    
    // ==================== 2. CHEAPEST FLIGHTS WITHIN K STOPS (LC 787) ====================
    
    /**
     * Cheapest Flights Within K Stops - Modified Dijkstra
     * 
     * Problem: Find cheapest price with at most K stops
     * 
     * Time: O((V + E) log V)
     * Space: O(V + E)
     * 
     * @param n Number of cities
     * @param flights Array of [from, to, price]
     * @param src Source city
     * @param dst Destination city
     * @param k Maximum stops allowed
     * @return Cheapest price (-1 if no route)
     */
    public static int findCheapestPrice(int n, int[][] flights, int src, int dst, int k) {
        // Build graph
        Map<Integer, List<int[]>> graph = new HashMap<>();
        for (int[] flight : flights) {
            graph.putIfAbsent(flight[0], new ArrayList<>());
            graph.get(flight[0]).add(new int[]{flight[1], flight[2]});
        }
        
        // PQ: [city, cost, stops]
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        pq.offer(new int[]{src, 0, 0});
        
        // Track minimum cost to reach each city with certain stops
        int[][] visited = new int[n][k + 2];
        for (int[] row : visited) {
            Arrays.fill(row, Integer.MAX_VALUE);
        }
        
        while (!pq.isEmpty()) {
            int[] current = pq.poll();
            int city = current[0];
            int cost = current[1];
            int stops = current[2];
            
            if (city == dst) return cost;
            
            if (stops > k) continue;
            
            if (cost >= visited[city][stops]) continue;
            visited[city][stops] = cost;
            
            if (graph.containsKey(city)) {
                for (int[] neighbor : graph.get(city)) {
                    int nextCity = neighbor[0];
                    int price = neighbor[1];
                    
                    pq.offer(new int[]{nextCity, cost + price, stops + 1});
                }
            }
        }
        
        return -1;
    }
    
    /**
     * Cheapest Flights - Bellman-Ford Approach (More Natural)
     * 
     * Time: O(K × E)
     * Space: O(V)
     */
    public static int findCheapestPriceBellmanFord(int n, int[][] flights, int src, int dst, int k) {
        int[] prices = new int[n];
        Arrays.fill(prices, Integer.MAX_VALUE);
        prices[src] = 0;
        
        // Relax edges k+1 times (k stops means k+1 edges)
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
    
    // ==================== 3. CRITICAL CONNECTIONS (LC 1192) ====================
    
    /**
     * Critical Connections - Tarjan's Bridge Finding Algorithm
     * 
     * Problem: Find all bridges (critical edges) in network
     * 
     * Time: O(V + E)
     * Space: O(V + E)
     * 
     * @param n Number of servers
     * @param connections List of connections [u, v]
     * @return List of critical connections
     */
    public static List<List<Integer>> criticalConnections(int n, List<List<Integer>> connections) {
        // Build graph
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (List<Integer> conn : connections) {
            int u = conn.get(0);
            int v = conn.get(1);
            graph.get(u).add(v);
            graph.get(v).add(u);
        }
        
        List<List<Integer>> bridges = new ArrayList<>();
        int[] ids = new int[n];
        int[] low = new int[n];
        boolean[] visited = new boolean[n];
        int[] id = {0};
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                dfsForBridges(graph, i, -1, ids, low, visited, bridges, id);
            }
        }
        
        return bridges;
    }
    
    private static void dfsForBridges(List<List<Integer>> graph, int at, int parent,
                                       int[] ids, int[] low, boolean[] visited,
                                       List<List<Integer>> bridges, int[] id) {
        visited[at] = true;
        ids[at] = low[at] = id[0]++;
        
        for (int to : graph.get(at)) {
            if (to == parent) continue;
            
            if (!visited[to]) {
                dfsForBridges(graph, to, at, ids, low, visited, bridges, id);
                low[at] = Math.min(low[at], low[to]);
                
                // Bridge found
                if (ids[at] < low[to]) {
                    bridges.add(Arrays.asList(at, to));
                }
            } else {
                low[at] = Math.min(low[at], ids[to]);
            }
        }
    }
    
    // ==================== 4. COURSE SCHEDULE II (LC 210) ====================
    
    /**
     * Course Schedule II - Topological Sort
     * 
     * Problem: Find valid course order given prerequisites
     * 
     * Time: O(V + E)
     * Space: O(V + E)
     * 
     * @param numCourses Number of courses
     * @param prerequisites Array of [course, prerequisite]
     * @return Valid course order (empty if impossible)
     */
    public static int[] findOrder(int numCourses, int[][] prerequisites) {
        // Build graph
        List<List<Integer>> graph = new ArrayList<>();
        int[] inDegree = new int[numCourses];
        
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] prereq : prerequisites) {
            int course = prereq[0];
            int pre = prereq[1];
            graph.get(pre).add(course);
            inDegree[course]++;
        }
        
        // Kahn's algorithm
        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < numCourses; i++) {
            if (inDegree[i] == 0) {
                queue.offer(i);
            }
        }
        
        int[] order = new int[numCourses];
        int index = 0;
        
        while (!queue.isEmpty()) {
            int course = queue.poll();
            order[index++] = course;
            
            for (int nextCourse : graph.get(course)) {
                inDegree[nextCourse]--;
                if (inDegree[nextCourse] == 0) {
                    queue.offer(nextCourse);
                }
            }
        }
        
        // Check if all courses can be taken
        return index == numCourses ? order : new int[0];
    }
    
    /**
     * Course Schedule II - DFS Approach
     * 
     * Time: O(V + E)
     * Space: O(V)
     */
    public static int[] findOrderDFS(int numCourses, int[][] prerequisites) {
        // Build graph
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < numCourses; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] prereq : prerequisites) {
            graph.get(prereq[1]).add(prereq[0]);
        }
        
        // DFS with cycle detection
        int[] visited = new int[numCourses];  // 0: unvisited, 1: visiting, 2: visited
        Stack<Integer> stack = new Stack<>();
        
        for (int i = 0; i < numCourses; i++) {
            if (visited[i] == 0) {
                if (hasCycle(graph, i, visited, stack)) {
                    return new int[0];
                }
            }
        }
        
        int[] order = new int[numCourses];
        for (int i = 0; i < numCourses; i++) {
            order[i] = stack.pop();
        }
        
        return order;
    }
    
    private static boolean hasCycle(List<List<Integer>> graph, int course,
                                     int[] visited, Stack<Integer> stack) {
        visited[course] = 1;
        
        for (int next : graph.get(course)) {
            if (visited[next] == 1) return true;  // Cycle
            if (visited[next] == 0 && hasCycle(graph, next, visited, stack)) {
                return true;
            }
        }
        
        visited[course] = 2;
        stack.push(course);
        return false;
    }
    
    // ==================== 5. RECONSTRUCT ITINERARY (LC 332) ====================
    
    /**
     * Reconstruct Itinerary - Hierholzer's Algorithm (Eulerian Path)
     * 
     * Problem: Find lexicographically smallest itinerary visiting all tickets
     * 
     * Time: O(E log E)
     * Space: O(E)
     * 
     * @param tickets List of [from, to] tickets
     * @return Itinerary path
     */
    public static List<String> findItinerary(List<List<String>> tickets) {
        // Build graph with priority queues for lexicographic order
        Map<String, PriorityQueue<String>> graph = new HashMap<>();
        
        for (List<String> ticket : tickets) {
            graph.putIfAbsent(ticket.get(0), new PriorityQueue<>());
            graph.get(ticket.get(0)).offer(ticket.get(1));
        }
        
        List<String> itinerary = new LinkedList<>();
        dfsForItinerary(graph, "JFK", itinerary);
        
        return itinerary;
    }
    
    private static void dfsForItinerary(Map<String, PriorityQueue<String>> graph,
                                         String airport, List<String> itinerary) {
        PriorityQueue<String> destinations = graph.get(airport);
        
        while (destinations != null && !destinations.isEmpty()) {
            String next = destinations.poll();
            dfsForItinerary(graph, next, itinerary);
        }
        
        itinerary.add(0, airport);  // Add to front (post-order)
    }
    
    /**
     * Reconstruct Itinerary - Iterative Approach
     */
    public static List<String> findItineraryIterative(List<List<String>> tickets) {
        Map<String, PriorityQueue<String>> graph = new HashMap<>();
        
        for (List<String> ticket : tickets) {
            graph.putIfAbsent(ticket.get(0), new PriorityQueue<>());
            graph.get(ticket.get(0)).offer(ticket.get(1));
        }
        
        List<String> itinerary = new LinkedList<>();
        Stack<String> stack = new Stack<>();
        stack.push("JFK");
        
        while (!stack.isEmpty()) {
            String current = stack.peek();
            PriorityQueue<String> destinations = graph.get(current);
            
            if (destinations == null || destinations.isEmpty()) {
                itinerary.add(0, stack.pop());
            } else {
                stack.push(destinations.poll());
            }
        }
        
        return itinerary;
    }
    
    // ==================== 6. SWIM IN RISING WATER (LC 778) ====================
    
    /**
     * Swim in Rising Water - Binary Search + BFS
     * 
     * Problem: Find minimum time to swim from (0,0) to (n-1,n-1)
     * 
     * Time: O(N² log N)
     * Space: O(N²)
     * 
     * @param grid Grid of elevations
     * @return Minimum time
     */
    public static int swimInWater(int[][] grid) {
        int n = grid.length;
        int left = grid[0][0];
        int right = n * n - 1;
        
        while (left < right) {
            int mid = left + (right - left) / 2;
            
            if (canSwim(grid, mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        
        return left;
    }
    
    private static boolean canSwim(int[][] grid, int time) {
        int n = grid.length;
        if (grid[0][0] > time) return false;
        
        boolean[][] visited = new boolean[n][n];
        Queue<int[]> queue = new LinkedList<>();
        queue.offer(new int[]{0, 0});
        visited[0][0] = true;
        
        int[][] dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        while (!queue.isEmpty()) {
            int[] curr = queue.poll();
            int x = curr[0], y = curr[1];
            
            if (x == n - 1 && y == n - 1) return true;
            
            for (int[] dir : dirs) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && 
                    !visited[nx][ny] && grid[nx][ny] <= time) {
                    visited[nx][ny] = true;
                    queue.offer(new int[]{nx, ny});
                }
            }
        }
        
        return false;
    }
    
    /**
     * Swim in Rising Water - Dijkstra's Approach (Optimal)
     * 
     * Time: O(N² log N)
     * Space: O(N²)
     */
    public static int swimInWaterDijkstra(int[][] grid) {
        int n = grid.length;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[2] - b[2]);
        pq.offer(new int[]{0, 0, grid[0][0]});
        
        boolean[][] visited = new boolean[n][n];
        int[][] dirs = {{0, 1}, {1, 0}, {0, -1}, {-1, 0}};
        
        while (!pq.isEmpty()) {
            int[] curr = pq.poll();
            int x = curr[0], y = curr[1], time = curr[2];
            
            if (x == n - 1 && y == n - 1) return time;
            
            if (visited[x][y]) continue;
            visited[x][y] = true;
            
            for (int[] dir : dirs) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < n && !visited[nx][ny]) {
                    int newTime = Math.max(time, grid[nx][ny]);
                    pq.offer(new int[]{nx, ny, newTime});
                }
            }
        }
        
        return -1;
    }
    
    // ==================== 7. MIN COST TO CONNECT ALL POINTS (LC 1584) ====================
    
    /**
     * Min Cost to Connect All Points - Prim's MST
     * 
     * Problem: Connect all points with minimum Manhattan distance
     * 
     * Time: O(N² log N)
     * Space: O(N²)
     * 
     * @param points Array of [x, y] coordinates
     * @return Minimum cost
     */
    public static int minCostConnectPoints(int[][] points) {
        int n = points.length;
        PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]);
        
        // Start from point 0
        boolean[] visited = new boolean[n];
        pq.offer(new int[]{0, 0});
        
        int totalCost = 0;
        int edges = 0;
        
        while (!pq.isEmpty() && edges < n) {
            int[] curr = pq.poll();
            int point = curr[0];
            int cost = curr[1];
            
            if (visited[point]) continue;
            
            visited[point] = true;
            totalCost += cost;
            edges++;
            
            // Add all edges from this point
            for (int i = 0; i < n; i++) {
                if (!visited[i]) {
                    int dist = Math.abs(points[point][0] - points[i][0]) +
                              Math.abs(points[point][1] - points[i][1]);
                    pq.offer(new int[]{i, dist});
                }
            }
        }
        
        return totalCost;
    }
    
    /**
     * Min Cost to Connect All Points - Kruskal's MST
     * 
     * Time: O(N² log N)
     * Space: O(N²)
     */
    public static int minCostConnectPointsKruskal(int[][] points) {
        int n = points.length;
        List<int[]> edges = new ArrayList<>();
        
        // Generate all edges
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                int dist = Math.abs(points[i][0] - points[j][0]) +
                          Math.abs(points[i][1] - points[j][1]);
                edges.add(new int[]{i, j, dist});
            }
        }
        
        // Sort by distance
        edges.sort((a, b) -> a[2] - b[2]);
        
        // Kruskal with Union-Find
        UnionFind uf = new UnionFind(n);
        int totalCost = 0;
        int edgeCount = 0;
        
        for (int[] edge : edges) {
            if (uf.union(edge[0], edge[1])) {
                totalCost += edge[2];
                edgeCount++;
                if (edgeCount == n - 1) break;
            }
        }
        
        return totalCost;
    }
    
    // ==================== 8. NETWORK CONNECTED OPERATIONS (LC 1319) ====================
    
    /**
     * Number of Operations to Make Network Connected
     * 
     * Problem: Find minimum cable moves to connect all computers
     * 
     * Time: O(V + E)
     * Space: O(V)
     * 
     * @param n Number of computers
     * @param connections List of [u, v] connections
     * @return Minimum operations (-1 if impossible)
     */
    public static int makeConnected(int n, int[][] connections) {
        // Need at least n-1 cables
        if (connections.length < n - 1) return -1;
        
        UnionFind uf = new UnionFind(n);
        
        for (int[] conn : connections) {
            uf.union(conn[0], conn[1]);
        }
        
        // Number of operations = number of components - 1
        return uf.getComponents() - 1;
    }
    
    /**
     * Count components using DFS
     */
    public static int makeConnectedDFS(int n, int[][] connections) {
        if (connections.length < n - 1) return -1;
        
        // Build graph
        List<List<Integer>> graph = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            graph.add(new ArrayList<>());
        }
        
        for (int[] conn : connections) {
            graph.get(conn[0]).add(conn[1]);
            graph.get(conn[1]).add(conn[0]);
        }
        
        // Count components
        boolean[] visited = new boolean[n];
        int components = 0;
        
        for (int i = 0; i < n; i++) {
            if (!visited[i]) {
                components++;
                dfsVisit(graph, i, visited);
            }
        }
        
        return components - 1;
    }
    
    private static void dfsVisit(List<List<Integer>> graph, int node, boolean[] visited) {
        visited[node] = true;
        for (int neighbor : graph.get(node)) {
            if (!visited[neighbor]) {
                dfsVisit(graph, neighbor, visited);
            }
        }
    }
    
    // ==================== UNION-FIND HELPER CLASS ====================
    
    static class UnionFind {
        int[] parent;
        int[] rank;
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
            
            components--;
            return true;
        }
        
        int getComponents() {
            return components;
        }
    }
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 40: Advanced Graph Problems ===\n");
        
        // Demo 1: Network Delay Time
        System.out.println("1. Network Delay Time:");
        int[][] times1 = {{2,1,1},{2,3,1},{3,4,1}};
        int result1 = networkDelayTime(times1, 4, 2);
        System.out.println("Delay time: " + result1 + " (Expected: 2)\n");
        
        // Demo 2: Cheapest Flights
        System.out.println("2. Cheapest Flights Within K Stops:");
        int[][] flights2 = {{0,1,100},{1,2,100},{0,2,500}};
        int result2 = findCheapestPrice(3, flights2, 0, 2, 1);
        System.out.println("Cheapest price: " + result2 + " (Expected: 200)\n");
        
        // Demo 3: Critical Connections
        System.out.println("3. Critical Connections:");
        List<List<Integer>> connections3 = new ArrayList<>();
        connections3.add(Arrays.asList(0, 1));
        connections3.add(Arrays.asList(1, 2));
        connections3.add(Arrays.asList(2, 0));
        connections3.add(Arrays.asList(1, 3));
        List<List<Integer>> result3 = criticalConnections(4, connections3);
        System.out.println("Critical connections: " + result3 + "\n");
        
        // Demo 4: Course Schedule II
        System.out.println("4. Course Schedule II:");
        int[][] prereqs4 = {{1,0},{2,0},{3,1},{3,2}};
        int[] result4 = findOrder(4, prereqs4);
        System.out.println("Course order: " + Arrays.toString(result4) + "\n");
        
        // Demo 5: Reconstruct Itinerary
        System.out.println("5. Reconstruct Itinerary:");
        List<List<String>> tickets5 = new ArrayList<>();
        tickets5.add(Arrays.asList("MUC", "LHR"));
        tickets5.add(Arrays.asList("JFK", "MUC"));
        tickets5.add(Arrays.asList("SFO", "SJC"));
        tickets5.add(Arrays.asList("LHR", "SFO"));
        List<String> result5 = findItinerary(tickets5);
        System.out.println("Itinerary: " + result5 + "\n");
        
        // Demo 6: Swim in Rising Water
        System.out.println("6. Swim in Rising Water:");
        int[][] grid6 = {{0,2},{1,3}};
        int result6 = swimInWaterDijkstra(grid6);
        System.out.println("Minimum time: " + result6 + " (Expected: 3)\n");
        
        // Demo 7: Min Cost Connect Points
        System.out.println("7. Min Cost to Connect All Points:");
        int[][] points7 = {{0,0},{2,2},{3,10},{5,2},{7,0}};
        int result7 = minCostConnectPoints(points7);
        System.out.println("Minimum cost: " + result7 + " (Expected: 20)\n");
        
        // Demo 8: Make Network Connected
        System.out.println("8. Number of Operations to Make Network Connected:");
        int[][] connections8 = {{0,1},{0,2},{1,2}};
        int result8 = makeConnected(4, connections8);
        System.out.println("Operations needed: " + result8 + " (Expected: 1)\n");
        
        System.out.println("All problems demonstrated successfully!");
    }
}
