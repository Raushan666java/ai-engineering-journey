package day36.unionfind;

import java.util.*;

/**
 * DAY 36: Union-Find (Disjoint Set Union) - Complete Implementation
 * 
 * Topics Covered:
 * 1. Basic Union-Find with path compression
 * 2. Union by rank/size optimization
 * 3. Applications: Connected components, cycle detection, MST
 * 4. Advanced: Dynamic connectivity, online queries
 */
public class UnionFind {

    // ==================== CORE UNION-FIND IMPLEMENTATIONS ====================
    
    /**
     * Basic Union-Find with Path Compression
     * Time: O(α(n)) per operation (inverse Ackermann - practically constant)
     * Space: O(n)
     */
    public static class BasicUnionFind {
        private int[] parent;
        public int components;
        
        public BasicUnionFind(int n) {
            parent = new int[n];
            components = n;
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }
        
        // Find with path compression
        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }
        
        // Union operation
        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) {
                return false; // Already connected
            }
            
            parent[rootX] = rootY;
            components--;
            return true;
        }
        
        public boolean isConnected(int x, int y) {
            return find(x) == find(y);
        }
        
        public int getComponents() {
            return components;
        }
    }
    
    /**
     * Union-Find with Rank (Height-based optimization)
     * Ensures tree stays balanced
     */
    public static class UnionFindByRank {
        private int[] parent;
        private int[] rank;
        private int components;
        
        public UnionFindByRank(int n) {
            parent = new int[n];
            rank = new int[n];
            components = n;
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                rank[i] = 0;
            }
        }
        
        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }
        
        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) {
                return false;
            }
            
            // Attach smaller rank tree under root of higher rank tree
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
        
        public boolean isConnected(int x, int y) {
            return find(x) == find(y);
        }
        
        public int getComponents() {
            return components;
        }
    }
    
    /**
     * Union-Find with Size (Weight-based optimization)
     * Tracks size of each component
     */
    public static class UnionFindBySize {
        private int[] parent;
        private int[] size;
        private int components;
        
        public UnionFindBySize(int n) {
            parent = new int[n];
            size = new int[n];
            components = n;
            for (int i = 0; i < n; i++) {
                parent[i] = i;
                size[i] = 1;
            }
        }
        
        public int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]);
            }
            return parent[x];
        }
        
        public boolean union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) {
                return false;
            }
            
            // Attach smaller tree under larger tree
            if (size[rootX] < size[rootY]) {
                parent[rootX] = rootY;
                size[rootY] += size[rootX];
            } else {
                parent[rootY] = rootX;
                size[rootX] += size[rootY];
            }
            
            components--;
            return true;
        }
        
        public boolean isConnected(int x, int y) {
            return find(x) == find(y);
        }
        
        public int getComponentSize(int x) {
            return size[find(x)];
        }
        
        public int getComponents() {
            return components;
        }
    }
    
    // ==================== APPLICATIONS ====================
    
    /**
     * Detect cycle in undirected graph
     * Time: O(E * α(V))
     */
    public static boolean hasCycle(int n, int[][] edges) {
        BasicUnionFind uf = new BasicUnionFind(n);
        
        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            
            // If nodes are already connected, adding edge creates cycle
            if (uf.isConnected(u, v)) {
                return true;
            }
            
            uf.union(u, v);
        }
        
        return false;
    }
    
    /**
     * Count number of connected components
     */
    public static int countComponents(int n, int[][] edges) {
        BasicUnionFind uf = new BasicUnionFind(n);
        
        for (int[] edge : edges) {
            uf.union(edge[0], edge[1]);
        }
        
        return uf.getComponents();
    }
    
    /**
     * Kruskal's Algorithm for Minimum Spanning Tree
     * Time: O(E log E) for sorting + O(E * α(V)) for union-find
     */
    public static class Edge implements Comparable<Edge> {
        int u, v, weight;
        
        public Edge(int u, int v, int weight) {
            this.u = u;
            this.v = v;
            this.weight = weight;
        }
        
        @Override
        public int compareTo(Edge other) {
            return Integer.compare(this.weight, other.weight);
        }
    }
    
    public static List<Edge> kruskalMST(int n, List<Edge> edges) {
        List<Edge> mst = new ArrayList<>();
        Collections.sort(edges);
        
        UnionFindByRank uf = new UnionFindByRank(n);
        
        for (Edge edge : edges) {
            if (uf.union(edge.u, edge.v)) {
                mst.add(edge);
                
                // MST has exactly n-1 edges
                if (mst.size() == n - 1) {
                    break;
                }
            }
        }
        
        return mst;
    }
    
    /**
     * Account Merge Problem (LeetCode 721)
     * Group accounts that share common emails
     */
    public static List<List<String>> accountsMerge(List<List<String>> accounts) {
        int n = accounts.size();
        UnionFindBySize uf = new UnionFindBySize(n);
        
        // Map email to account index
        Map<String, Integer> emailToAccount = new HashMap<>();
        
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
        Map<Integer, Set<String>> components = new HashMap<>();
        
        for (int i = 0; i < n; i++) {
            int root = uf.find(i);
            components.putIfAbsent(root, new TreeSet<>());
            
            for (int j = 1; j < accounts.get(i).size(); j++) {
                components.get(root).add(accounts.get(i).get(j));
            }
        }
        
        // Build result
        List<List<String>> result = new ArrayList<>();
        
        for (Map.Entry<Integer, Set<String>> entry : components.entrySet()) {
            List<String> merged = new ArrayList<>();
            merged.add(accounts.get(entry.getKey()).get(0)); // Name
            merged.addAll(entry.getValue()); // Sorted emails
            result.add(merged);
        }
        
        return result;
    }
    
    /**
     * Redundant Connection (LeetCode 684)
     * Find edge that when removed makes tree
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
     * Number of Islands II (LeetCode 305)
     * Dynamic addition of islands
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
            
            // Check 4 neighbors
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
    
    // ==================== DEMO ====================
    
    public static void main(String[] args) {
        System.out.println("=== Day 36: Union-Find Demonstrations ===\n");
        
        // Demo 1: Basic Union-Find
        System.out.println("1. Basic Union-Find:");
        BasicUnionFind uf1 = new BasicUnionFind(5);
        System.out.println("Initial components: " + uf1.getComponents());
        uf1.union(0, 1);
        uf1.union(2, 3);
        System.out.println("After unions: " + uf1.getComponents());
        System.out.println("0 and 1 connected? " + uf1.isConnected(0, 1));
        System.out.println("0 and 2 connected? " + uf1.isConnected(0, 2));
        
        // Demo 2: Cycle Detection
        System.out.println("\n2. Cycle Detection:");
        int[][] edges1 = {{0,1}, {1,2}, {2,3}};
        System.out.println("Edges: [[0,1], [1,2], [2,3]]");
        System.out.println("Has cycle? " + hasCycle(4, edges1));
        
        int[][] edges2 = {{0,1}, {1,2}, {2,0}};
        System.out.println("Edges: [[0,1], [1,2], [2,0]]");
        System.out.println("Has cycle? " + hasCycle(3, edges2));
        
        // Demo 3: Connected Components
        System.out.println("\n3. Connected Components:");
        int[][] edges3 = {{0,1}, {1,2}, {3,4}};
        System.out.println("Edges: [[0,1], [1,2], [3,4]]");
        System.out.println("Components: " + countComponents(5, edges3));
        
        // Demo 4: Kruskal's MST
        System.out.println("\n4. Minimum Spanning Tree (Kruskal's):");
        List<Edge> edges4 = new ArrayList<>();
        edges4.add(new Edge(0, 1, 4));
        edges4.add(new Edge(0, 2, 3));
        edges4.add(new Edge(1, 2, 1));
        edges4.add(new Edge(1, 3, 2));
        edges4.add(new Edge(2, 3, 4));
        
        List<Edge> mst = kruskalMST(4, edges4);
        System.out.println("MST edges:");
        int totalWeight = 0;
        for (Edge e : mst) {
            System.out.println("  (" + e.u + ", " + e.v + ") weight: " + e.weight);
            totalWeight += e.weight;
        }
        System.out.println("Total MST weight: " + totalWeight);
        
        // Demo 5: Accounts Merge
        System.out.println("\n5. Accounts Merge:");
        List<List<String>> accounts = new ArrayList<>();
        accounts.add(Arrays.asList("John", "john@mail.com", "john_work@mail.com"));
        accounts.add(Arrays.asList("John", "john123@mail.com"));
        accounts.add(Arrays.asList("John", "john_work@mail.com", "john123@mail.com"));
        
        List<List<String>> merged = accountsMerge(accounts);
        System.out.println("Merged accounts:");
        for (List<String> account : merged) {
            System.out.println("  " + account);
        }
        
        System.out.println("\n✓ All demonstrations completed successfully!");
    }
}
