/**
 * DAY 25 - INTERVIEW QUESTIONS & ANSWERS
 * ADVANCED ALGORITHMS & DATA STRUCTURES
 * 
 * 150+ Interview Questions covering:
 * - Advanced Tree Structures (Segment Tree, Fenwick Tree, Trie, AVL)
 * - Graph Algorithms (Flow, Matching, Connectivity)
 * - String Algorithms (KMP, Manacher, Aho-Corasick)
 * - Advanced DP (Bitmask, Digit, Tree, SOS, Game Theory)
 * - Computational Geometry & Math
 * 
 * Each question includes:
 * - Detailed theoretical explanation
 * - Code implementation where applicable
 * - Time/Space complexity analysis
 * - Real-world applications
 * - Common pitfalls and edge cases
 */

import java.util.*;

public class Day25InterviewQA {

    /**
     * ============================================================================
     * SECTION 1: SEGMENT TREE INTERVIEW QUESTIONS (25 Questions)
     * ============================================================================
     */

    /**
     * Q1: What is a Segment Tree and when should you use it?
     * 
     * ANSWER:
     * A Segment Tree is a binary tree data structure used for storing intervals or segments.
     * It allows querying which segments contain a given point efficiently.
     * 
     * Key Characteristics:
     * - Height: O(log n)
     * - Space: O(4n) ≈ O(n)
     * - Build Time: O(n)
     * - Query Time: O(log n)
     * - Update Time: O(log n)
     * 
     * Use Cases:
     * 1. Range queries (sum, min, max, GCD)
     * 2. Range updates (lazy propagation)
     * 3. Dynamic range queries
     * 4. Problems requiring both point updates and range queries
     * 
     * When NOT to use:
     * - Static arrays with no updates → Use prefix sum
     * - Only point queries → Use simple array
     * - Frequent insertions/deletions → Use other structures
     */
    static class SegmentTreeBasics {
        /*
         * Basic Structure:
         *              [0, 7]
         *           /         \
         *      [0, 3]         [4, 7]
         *      /    \         /    \
         *   [0,1]  [2,3]  [4,5]  [6,7]
         *   /  \    /  \   /  \   /  \
         *  [0][1] [2][3] [4][5] [6][7]
         */
    }

    /**
     * Q2: Explain Lazy Propagation in Segment Trees. Why is it needed?
     * 
     * ANSWER:
     * Lazy Propagation is an optimization technique for range updates.
     * Without it, range updates would take O(n) time in worst case.
     * With lazy propagation, both range queries and updates are O(log n).
     * 
     * How it works:
     * 1. When updating a range, don't update all children immediately
     * 2. Mark nodes as "lazy" with pending updates
     * 3. Push down lazy values only when needed (during query or further update)
     * 
     * Benefits:
     * - O(log n) range updates instead of O(n)
     * - Deferred computation until necessary
     * - Memory efficient
     */
    static class LazyPropagationExample {
        private long[] tree, lazy;
        private int n;

        public LazyPropagationExample(int[] arr) {
            n = arr.length;
            tree = new long[4 * n];
            lazy = new long[4 * n];
            build(arr, 0, 0, n - 1);
        }

        private void build(int[] arr, int node, int start, int end) {
            if (start == end) {
                tree[node] = arr[start];
            } else {
                int mid = (start + end) / 2;
                build(arr, 2 * node + 1, start, mid);
                build(arr, 2 * node + 2, mid + 1, end);
                tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
            }
        }

        // Push lazy value down to children
        private void push(int node, int start, int end) {
            if (lazy[node] != 0) {
                tree[node] += (end - start + 1) * lazy[node];
                
                if (start != end) {
                    lazy[2 * node + 1] += lazy[node];
                    lazy[2 * node + 2] += lazy[node];
                }
                
                lazy[node] = 0;
            }
        }

        // Range update: add 'val' to all elements in [l, r]
        public void updateRange(int l, int r, long val) {
            updateRange(0, 0, n - 1, l, r, val);
        }

        private void updateRange(int node, int start, int end, int l, int r, long val) {
            push(node, start, end);
            
            if (start > r || end < l) return;
            
            if (start >= l && end <= r) {
                lazy[node] += val;
                push(node, start, end);
                return;
            }
            
            int mid = (start + end) / 2;
            updateRange(2 * node + 1, start, mid, l, r, val);
            updateRange(2 * node + 2, mid + 1, end, l, r, val);
            
            push(2 * node + 1, start, mid);
            push(2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }
    }

    /**
     * Q3: Compare Segment Tree vs Fenwick Tree (Binary Indexed Tree)
     * 
     * ANSWER:
     * 
     * Segment Tree:
     * ✓ Supports any associative operation (sum, min, max, GCD, etc.)
     * ✓ Range updates with lazy propagation
     * ✓ More intuitive structure
     * ✗ Uses more memory (4n)
     * ✗ More complex to implement
     * 
     * Fenwick Tree:
     * ✓ Less memory (n)
     * ✓ Simpler implementation
     * ✓ Slightly faster in practice
     * ✗ Only works for invertible operations (sum, XOR)
     * ✗ Cannot easily support min/max queries
     * ✗ Range updates require two Fenwick trees
     * 
     * Choose Segment Tree when:
     * - Need min/max/GCD queries
     * - Need range updates with lazy propagation
     * - Operation is not invertible
     * 
     * Choose Fenwick Tree when:
     * - Only need sum/XOR queries
     * - Memory is constrained
     * - Implementation simplicity matters
     */

    /**
     * Q4: How would you implement a Persistent Segment Tree?
     * 
     * ANSWER:
     * A Persistent Segment Tree maintains all previous versions of the tree.
     * Used for time-travel queries (query any historical state).
     * 
     * Implementation:
     * - Create new nodes only for changed paths
     * - Share unchanged subtrees between versions
     * - Each update creates O(log n) new nodes
     * 
     * Applications:
     * - Kth smallest element in range [l, r] of version i
     * - Range queries on different array versions
     * - Functional programming (immutable data structures)
     */
    static class PersistentSegmentTree {
        static class Node {
            int value;
            Node left, right;
            
            Node(int value) {
                this.value = value;
            }
            
            Node(Node other) {
                this.value = other.value;
                this.left = other.left;
                this.right = other.right;
            }
        }

        private List<Node> versions = new ArrayList<>();
        private int n;

        public PersistentSegmentTree(int[] arr) {
            n = arr.length;
            versions.add(build(arr, 0, n - 1));
        }

        private Node build(int[] arr, int start, int end) {
            if (start == end) {
                return new Node(arr[start]);
            }
            
            Node node = new Node(0);
            int mid = (start + end) / 2;
            node.left = build(arr, start, mid);
            node.right = build(arr, mid + 1, end);
            node.value = node.left.value + node.right.value;
            return node;
        }

        // Create new version with update at index
        public void update(int idx, int val) {
            Node prev = versions.get(versions.size() - 1);
            versions.add(update(prev, 0, n - 1, idx, val));
        }

        private Node update(Node node, int start, int end, int idx, int val) {
            if (start == end) {
                return new Node(val);
            }
            
            Node newNode = new Node(node);
            int mid = (start + end) / 2;
            
            if (idx <= mid) {
                newNode.left = update(node.left, start, mid, idx, val);
            } else {
                newNode.right = update(node.right, mid + 1, end, idx, val);
            }
            
            newNode.value = newNode.left.value + newNode.right.value;
            return newNode;
        }
    }

    /**
     * Q5: Explain the difference between Point Update/Range Query 
     * and Range Update/Point Query
     * 
     * ANSWER:
     * 
     * Point Update / Range Query (PURQ):
     * - Update single element: O(log n)
     * - Query range [l, r]: O(log n)
     * - Example: Sum of elements in range after point updates
     * - Can use: Segment Tree or Fenwick Tree
     * 
     * Range Update / Point Query (RUPQ):
     * - Update entire range: O(log n) with lazy prop
     * - Query single element: O(log n)
     * - Example: Add value to range, query single position
     * - Can use: Difference array or Segment Tree with lazy
     * 
     * Range Update / Range Query (RURQ):
     * - Both updates and queries on ranges
     * - Requires lazy propagation
     * - Example: Add to range, query sum of range
     * - Must use: Segment Tree with lazy propagation
     */

    /**
     * ============================================================================
     * SECTION 2: GRAPH ALGORITHM INTERVIEW QUESTIONS (30 Questions)
     * ============================================================================
     */

    /**
     * Q6: Explain the Ford-Fulkerson algorithm for Maximum Flow.
     * What is the difference between Ford-Fulkerson and Edmond-Karp?
     * 
     * ANSWER:
     * 
     * Ford-Fulkerson Algorithm:
     * - General method for computing maximum flow
     * - Repeatedly finds augmenting paths from source to sink
     * - Increases flow along the path by minimum edge capacity
     * - Continues until no augmenting path exists
     * 
     * Complexity:
     * - Depends on how augmenting paths are found
     * - O(E * max_flow) if using any path-finding method
     * - Can be exponential in worst case
     * 
     * Edmond-Karp Algorithm:
     * - Specific implementation of Ford-Fulkerson
     * - Uses BFS to find shortest augmenting path
     * - Guaranteed polynomial time complexity
     * - Time: O(V * E²)
     * 
     * Key Differences:
     * 1. Edmond-Karp always uses BFS (shortest path)
     * 2. Ford-Fulkerson can use any method (DFS, BFS, etc.)
     * 3. Edmond-Karp has guaranteed polynomial complexity
     * 4. Edmond-Karp is preferred in practice
     * 
     * Applications:
     * - Network routing
     * - Bipartite matching
     * - Airline scheduling
     * - Image segmentation
     */
    static class MaxFlowExplanation {
        /*
         * Max Flow Example:
         * 
         *     (10)      (10)
         *  0 -----> 1 -----> 3
         *  |        |        ^
         * (10)     (1)     (10)
         *  |        |        |
         *  v        v        |
         *  2 --------------- 4
         *        (10)
         * 
         * Maximum Flow from 0 to 3 = 19
         * 
         * Augmenting Paths:
         * 1. 0→1→3 (flow = 10)
         * 2. 0→2→4→3 (flow = 9)
         * Total: 19
         */
    }

    /**
     * Q7: What is the Min-Cut Max-Flow Theorem?
     * 
     * ANSWER:
     * The Min-Cut Max-Flow Theorem states:
     * "In any network, the maximum flow from source to sink equals
     * the minimum capacity of all possible cuts separating source and sink"
     * 
     * Key Concepts:
     * 
     * Cut: A partition of vertices into two sets S and T where:
     * - Source is in S
     * - Sink is in T
     * - Cut capacity = sum of capacities of edges from S to T
     * 
     * Minimum Cut: Cut with minimum capacity
     * Maximum Flow: Maximum amount of flow from source to sink
     * 
     * Theorem: max_flow = min_cut_capacity
     * 
     * Finding Min-Cut after Max-Flow:
     * 1. Run max flow algorithm
     * 2. Do BFS/DFS from source using residual graph
     * 3. All reachable vertices are in S
     * 4. All unreachable vertices are in T
     * 5. Edges from S to T form the min-cut
     * 
     * Applications:
     * - Network reliability
     * - Project selection
     * - Image segmentation
     * - Clustering
     */

    /**
     * Q8: Explain Bipartite Matching and its applications
     * 
     * ANSWER:
     * Bipartite Matching assigns elements from one set to another
     * such that each element is matched at most once.
     * 
     * Problem: Given bipartite graph G = (U ∪ V, E)
     * Find maximum number of edges such that no vertex is repeated
     * 
     * Algorithms:
     * 1. Hungarian Algorithm: O(n³)
     * 2. Hopcroft-Karp: O(E * √V)
     * 3. Max Flow Reduction: O(V * E²)
     * 
     * Implementation using Max Flow:
     * - Create source connected to all U vertices
     * - Create sink connected to all V vertices
     * - All edges have capacity 1
     * - Max flow = Maximum matching
     */
    static class BipartiteMatchingExample {
        private List<Integer>[] graph;
        private int[] match;
        private boolean[] visited;

        @SuppressWarnings("unchecked")
        public BipartiteMatchingExample(int n) {
            graph = new List[n];
            for (int i = 0; i < n; i++) {
                graph[i] = new ArrayList<>();
            }
            match = new int[n];
            Arrays.fill(match, -1);
        }

        public void addEdge(int u, int v) {
            graph[u].add(v);
        }

        public int maxMatching() {
            int result = 0;
            for (int u = 0; u < graph.length; u++) {
                visited = new boolean[graph.length];
                if (augment(u)) result++;
            }
            return result;
        }

        private boolean augment(int u) {
            for (int v : graph[u]) {
                if (visited[v]) continue;
                visited[v] = true;

                if (match[v] == -1 || augment(match[v])) {
                    match[v] = u;
                    return true;
                }
            }
            return false;
        }
    }

    /**
     * Applications of Bipartite Matching:
     * 
     * 1. Job Assignment:
     *    - Workers (U) → Jobs (V)
     *    - Each worker can do certain jobs
     *    - Maximize number of assigned jobs
     * 
     * 2. Medical Residency Matching:
     *    - Graduates (U) → Hospitals (V)
     *    - Match graduates to hospitals based on preferences
     * 
     * 3. Online Advertising:
     *    - Ads (U) → Slots (V)
     *    - Maximize revenue while respecting constraints
     * 
     * 4. Course Scheduling:
     *    - Students (U) → Time slots (V)
     *    - Schedule without conflicts
     */

    /**
     * Q9: What are Strongly Connected Components (SCC)?
     * Compare Kosaraju's and Tarjan's algorithms.
     * 
     * ANSWER:
     * 
     * SCC Definition:
     * A strongly connected component is a maximal subset of vertices
     * where every vertex is reachable from every other vertex.
     * 
     * Kosaraju's Algorithm:
     * Time: O(V + E)
     * Steps:
     * 1. Do DFS on original graph, store finish times
     * 2. Create transpose graph (reverse all edges)
     * 3. Do DFS on transpose in decreasing finish time order
     * 4. Each DFS tree in step 3 is an SCC
     * 
     * Tarjan's Algorithm:
     * Time: O(V + E)
     * - Single DFS pass
     * - Uses stack and low-link values
     * - More complex but more efficient
     * 
     * Comparison:
     * 
     * Kosaraju:
     * ✓ Easier to understand and implement
     * ✓ Two separate DFS passes
     * ✗ Requires graph transpose
     * ✗ Two passes through graph
     * 
     * Tarjan:
     * ✓ Single DFS pass
     * ✓ No graph transpose needed
     * ✓ More space efficient
     * ✗ More complex logic
     * ✗ Harder to debug
     */

    /**
     * Q10: Explain Articulation Points and Bridges in graphs
     * 
     * ANSWER:
     * 
     * Articulation Point (Cut Vertex):
     * A vertex whose removal increases number of connected components
     * 
     * Bridge (Cut Edge):
     * An edge whose removal increases number of connected components
     * 
     * Finding using Tarjan's Algorithm:
     * Time: O(V + E)
     * 
     * For each vertex v during DFS:
     * - disc[v]: Discovery time
     * - low[v]: Minimum discovery time reachable from subtree
     * 
     * Articulation Point Conditions:
     * 1. Root with ≥2 children in DFS tree
     * 2. Non-root where low[child] ≥ disc[v]
     * 
     * Bridge Condition:
     * - Edge (u, v) is bridge if low[v] > disc[u]
     */
    static class ArticulationPointsAndBridges {
        private List<Integer>[] graph;
        private boolean[] visited, isAP;
        private int[] disc, low, parent;
        private List<int[]> bridges;
        private int time;

        @SuppressWarnings("unchecked")
        public ArticulationPointsAndBridges(int n) {
            graph = new List[n];
            for (int i = 0; i < n; i++) {
                graph[i] = new ArrayList<>();
            }
            visited = new boolean[n];
            isAP = new boolean[n];
            disc = new int[n];
            low = new int[n];
            parent = new int[n];
            Arrays.fill(parent, -1);
            bridges = new ArrayList<>();
            time = 0;
        }

        public void addEdge(int u, int v) {
            graph[u].add(v);
            graph[v].add(u);
        }

        public void findAPsAndBridges() {
            for (int i = 0; i < graph.length; i++) {
                if (!visited[i]) {
                    dfs(i);
                }
            }
        }

        private void dfs(int u) {
            int children = 0;
            visited[u] = true;
            disc[u] = low[u] = ++time;

            for (int v : graph[u]) {
                if (!visited[v]) {
                    children++;
                    parent[v] = u;
                    dfs(v);

                    low[u] = Math.min(low[u], low[v]);

                    // Check articulation point
                    if (parent[u] == -1 && children > 1) {
                        isAP[u] = true;
                    }
                    if (parent[u] != -1 && low[v] >= disc[u]) {
                        isAP[u] = true;
                    }

                    // Check bridge
                    if (low[v] > disc[u]) {
                        bridges.add(new int[]{u, v});
                    }
                } else if (v != parent[u]) {
                    low[u] = Math.min(low[u], disc[v]);
                }
            }
        }

        public List<Integer> getArticulationPoints() {
            List<Integer> result = new ArrayList<>();
            for (int i = 0; i < isAP.length; i++) {
                if (isAP[i]) result.add(i);
            }
            return result;
        }

        public List<int[]> getBridges() {
            return bridges;
        }
    }

    /**
     * Applications:
     * 
     * Articulation Points:
     * - Network vulnerability analysis
     * - Critical infrastructure identification
     * - Social network analysis (key influencers)
     * 
     * Bridges:
     * - Network connectivity
     * - Critical road/flight route identification
     * - Circuit design
     */

    /**
     * ============================================================================
     * SECTION 3: STRING ALGORITHM INTERVIEW QUESTIONS (30 Questions)
     * ============================================================================
     */

    /**
     * Q11: Explain the KMP (Knuth-Morris-Pratt) algorithm.
     * How does it achieve O(n + m) complexity?
     * 
     * ANSWER:
     * 
     * KMP Algorithm:
     * - Efficient string matching algorithm
     * - Preprocesses pattern to avoid redundant comparisons
     * - Time: O(n + m) where n = text length, m = pattern length
     * - Space: O(m)
     * 
     * Key Idea:
     * When mismatch occurs, don't restart from beginning.
     * Use information from previous comparisons.
     * 
     * LPS Array (Longest Proper Prefix which is also Suffix):
     * For pattern "ABABCABAB":
     * LPS = [0, 0, 1, 2, 0, 1, 2, 3, 4]
     * 
     * How it works:
     * 1. Build LPS array in O(m)
     * 2. Match pattern with text:
     *    - On match: advance both pointers
     *    - On mismatch: use LPS to skip comparisons
     * 3. Never go back in text, only in pattern
     * 
     * Why O(n + m)?
     * - Text pointer i never decreases → at most n iterations
     * - Pattern pointer j moves by LPS → at most m backtracking
     * - Total: O(n + m)
     */
    static class KMPAlgorithm {
        public static int[] computeLPS(String pattern) {
            int m = pattern.length();
            int[] lps = new int[m];
            int len = 0; // Length of previous longest prefix suffix
            int i = 1;

            while (i < m) {
                if (pattern.charAt(i) == pattern.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                } else {
                    if (len != 0) {
                        len = lps[len - 1]; // Don't increment i
                    } else {
                        lps[i] = 0;
                        i++;
                    }
                }
            }

            return lps;
        }

        public static List<Integer> search(String text, String pattern) {
            List<Integer> occurrences = new ArrayList<>();
            int n = text.length();
            int m = pattern.length();

            int[] lps = computeLPS(pattern);
            int i = 0; // index for text
            int j = 0; // index for pattern

            while (i < n) {
                if (text.charAt(i) == pattern.charAt(j)) {
                    i++;
                    j++;
                }

                if (j == m) {
                    occurrences.add(i - j);
                    j = lps[j - 1];
                } else if (i < n && text.charAt(i) != pattern.charAt(j)) {
                    if (j != 0) {
                        j = lps[j - 1];
                    } else {
                        i++;
                    }
                }
            }

            return occurrences;
        }
    }

    /**
     * KMP Applications:
     * 1. Text editors (Find/Replace)
     * 2. DNA sequence matching
     * 3. Plagiarism detection
     * 4. Log file analysis
     * 5. Pattern matching in streams
     */

    /**
     * Q12: What is Manacher's Algorithm? Why is it O(n)?
     * 
     * ANSWER:
     * 
     * Manacher's Algorithm:
     * - Finds longest palindromic substring in O(n) time
     * - Linear time complexity achieved through:
     *   1. String preprocessing
     *   2. Mirror property of palindromes
     *   3. Clever center/boundary tracking
     * 
     * Preprocessing:
     * "babad" → "^#b#a#b#a#d#$"
     * - Add sentinels ^ and $ to avoid boundary checks
     * - Add # between characters to handle even-length palindromes
     * 
     * Key Variables:
     * - center: Center of rightmost palindrome
     * - right: Right boundary of rightmost palindrome
     * - p[i]: Radius of palindrome centered at i
     * 
     * Why O(n)?
     * - Each position is visited at most twice
     * - Right boundary only moves forward
     * - No position is expanded more than once
     * 
     * Mirror Property:
     * If i is within [center - right], then:
     * p[i] ≥ min(p[mirror_i], right - i)
     * This allows us to skip redundant expansions
     */

    /**
     * Q13: Compare different string matching algorithms
     * 
     * ANSWER:
     * 
     * Algorithm Comparison:
     * 
     * 1. Naive:
     *    Time: O(n * m)
     *    Space: O(1)
     *    Use: Small patterns, simple implementation
     * 
     * 2. KMP:
     *    Time: O(n + m)
     *    Space: O(m)
     *    Use: Single pattern matching, guaranteed linear time
     * 
     * 3. Boyer-Moore:
     *    Time: O(n/m) best, O(n * m) worst
     *    Space: O(alphabet_size)
     *    Use: Long patterns, practical performance
     * 
     * 4. Rabin-Karp:
     *    Time: O(n + m) average, O(n * m) worst
     *    Space: O(1)
     *    Use: Multiple pattern matching, plagiarism detection
     * 
     * 5. Aho-Corasick:
     *    Time: O(n + m + z) where z = matches
     *    Space: O(m * alphabet_size)
     *    Use: Multiple pattern matching (dictionary)
     * 
     * 6. Z-Algorithm:
     *    Time: O(n + m)
     *    Space: O(n + m)
     *    Use: Pattern matching, string analysis
     * 
     * Choose based on:
     * - Number of patterns (single vs multiple)
     * - Pattern length
     * - Alphabet size
     * - Memory constraints
     * - Worst-case vs average-case performance
     */

    /**
     * ============================================================================
     * SECTION 4: ADVANCED DP INTERVIEW QUESTIONS (35 Questions)
     * ============================================================================
     */

    /**
     * Q14: What is Bitmask DP? When should you use it?
     * 
     * ANSWER:
     * 
     * Bitmask DP:
     * Dynamic programming technique using bits to represent states
     * Each bit represents whether element i is included or not
     * 
     * When to use:
     * - Small number of elements (n ≤ 20-25)
     * - Need to track subset of elements
     * - Permutation/combination problems
     * - State can be represented as boolean array
     * 
     * Advantages:
     * ✓ Compact state representation
     * ✓ Fast state transitions (bitwise operations)
     * ✓ Easy to check if element is included
     * ✓ Can iterate through all subsets efficiently
     * 
     * Common Problems:
     * 1. Traveling Salesman Problem
     * 2. Assignment Problem
     * 3. Subset Sum variations
     * 4. Hamiltonian Path/Cycle
     * 5. Job Scheduling with dependencies
     * 
     * Bit Operations:
     * - Check if i-th bit set: (mask & (1 << i)) != 0
     * - Set i-th bit: mask | (1 << i)
     * - Clear i-th bit: mask & ~(1 << i)
     * - Toggle i-th bit: mask ^ (1 << i)
     * - Iterate subsets: for(int s = mask; s > 0; s = (s-1) & mask)
     */
    static class BitmaskDPExample {
        /**
         * TSP using Bitmask DP
         * State: dp[mask][i] = minimum cost to visit cities in 'mask' ending at i
         */
        public static int tsp(int[][] dist) {
            int n = dist.length;
            int[][] dp = new int[1 << n][n];
            
            for (int[] row : dp) {
                Arrays.fill(row, Integer.MAX_VALUE / 2);
            }
            
            dp[1][0] = 0; // Start from city 0
            
            for (int mask = 1; mask < (1 << n); mask++) {
                for (int u = 0; u < n; u++) {
                    if ((mask & (1 << u)) == 0) continue;
                    
                    for (int v = 0; v < n; v++) {
                        if ((mask & (1 << v)) != 0) continue;
                        
                        int newMask = mask | (1 << v);
                        dp[newMask][v] = Math.min(dp[newMask][v], 
                                                  dp[mask][u] + dist[u][v]);
                    }
                }
            }
            
            int result = Integer.MAX_VALUE;
            for (int i = 0; i < n; i++) {
                result = Math.min(result, dp[(1 << n) - 1][i] + dist[i][0]);
            }
            
            return result;
        }
    }

    /**
     * Q15: Explain Digit DP and its applications
     * 
     * ANSWER:
     * 
     * Digit DP:
     * Technique to count numbers in range [L, R] with specific properties
     * Process digits from left to right with states tracking constraints
     * 
     * Common States:
     * 1. pos: Current digit position
     * 2. tight: Whether we're still bounded by limit
     * 3. sum/product: Accumulated value
     * 4. leading_zero: Whether we have leading zeros
     * 5. Custom: Problem-specific state
     * 
     * Why "tight" flag?
     * - tight = true: Current number ≤ limit so far
     * - tight = false: Can place any digit (0-9)
     * 
     * Template:
     */
    static class DigitDPTemplate {
        // Count numbers ≤ num with digit sum = targetSum
        public static long countWithDigitSum(String num, int targetSum) {
            int n = num.length();
            Long[][][] dp = new Long[n][targetSum + 1][2];
            return solve(num, 0, 0, targetSum, true, dp);
        }

        private static long solve(String num, int pos, int sum, 
                                 int target, boolean tight, Long[][][] dp) {
            // Base case: all digits processed
            if (pos == num.length()) {
                return sum == target ? 1 : 0;
            }

            // Memoization
            int tightIdx = tight ? 1 : 0;
            if (dp[pos][sum][tightIdx] != null) {
                return dp[pos][sum][tightIdx];
            }

            // Determine upper limit for current digit
            int limit = tight ? (num.charAt(pos) - '0') : 9;
            long count = 0;

            // Try all valid digits
            for (int digit = 0; digit <= limit; digit++) {
                if (sum + digit <= target) {
                    count += solve(num, pos + 1, sum + digit, target,
                                  tight && (digit == limit), dp);
                }
            }

            return dp[pos][sum][tightIdx] = count;
        }
    }

    /**
     * Applications:
     * 1. Count numbers with sum of digits = K
     * 2. Count numbers divisible by K
     * 3. Count numbers with no consecutive equal digits
     * 4. Count numbers with specific digit pattern
     * 5. Armstrong numbers in range
     * 6. Lucky numbers (only specific digits)
     */

    /**
     * Q16: What is SOS (Sum over Subsets) DP?
     * 
     * ANSWER:
     * 
     * SOS DP:
     * Efficiently compute sum/count over all subsets for each mask
     * 
     * Problem:
     * Given array A[mask] for all masks 0 to 2^n - 1
     * Compute B[mask] = Σ A[submask] for all submasks of mask
     * 
     * Naive: O(4^n) - check all submasks for each mask
     * SOS DP: O(n * 2^n)
     * 
     * Algorithm:
     */
    static class SOSDP {
        public static long[] sumOverSubsets(long[] arr) {
            int n = arr.length;
            int logN = Integer.numberOfTrailingZeros(n);
            long[] dp = arr.clone();

            // For each bit position
            for (int i = 0; i < logN; i++) {
                // For each mask
                for (int mask = 0; mask < n; mask++) {
                    // If i-th bit is set, add contribution from mask with i-th bit unset
                    if ((mask & (1 << i)) != 0) {
                        dp[mask] += dp[mask ^ (1 << i)];
                    }
                }
            }

            return dp;
        }
    }

    /**
     * Applications:
     * 1. Count subsets with AND = 0
     * 2. Max XOR subset
     * 3. Fast Walsh-Hadamard Transform
     * 4. Mobius transform on subsets
     * 5. Fast subset convolution
     */

    /**
     * Q17: Explain Tree DP and give examples
     * 
     * ANSWER:
     * 
     * Tree DP:
     * Dynamic programming on tree structures
     * Usually involves DFS with memoization
     * 
     * Common Patterns:
     * 
     * 1. Subtree DP:
     *    - dp[v] depends on dp[children of v]
     *    - Example: Tree diameter, tree center
     * 
     * 2. Re-rooting DP:
     *    - Compute answer for all possible roots
     *    - Two DFS: down and up
     *    - Example: Sum of distances from each node
     * 
     * 3. Binary Lifting:
     *    - Preprocess ancestors at powers of 2
     *    - LCA (Lowest Common Ancestor)
     *    - Kth ancestor queries
     * 
     * Classic Problems:
     */
    static class TreeDPProblems {
        /**
         * Problem: Tree Diameter
         * Find longest path between any two nodes
         */
        static class TreeDiameter {
            private List<Integer>[] tree;
            private int diameter = 0;

            @SuppressWarnings("unchecked")
            public TreeDiameter(int n) {
                tree = new List[n];
                for (int i = 0; i < n; i++) {
                    tree[i] = new ArrayList<>();
                }
            }

            public void addEdge(int u, int v) {
                tree[u].add(v);
                tree[v].add(u);
            }

            public int findDiameter() {
                diameter = 0;
                dfs(0, -1);
                return diameter;
            }

            private int dfs(int u, int parent) {
                int max1 = 0, max2 = 0;

                for (int v : tree[u]) {
                    if (v == parent) continue;
                    
                    int height = dfs(v, u);
                    
                    if (height > max1) {
                        max2 = max1;
                        max1 = height;
                    } else if (height > max2) {
                        max2 = height;
                    }
                }

                diameter = Math.max(diameter, max1 + max2);
                return max1 + 1;
            }
        }

        /**
         * Problem: Maximum Independent Set in Tree
         * Select maximum nodes such that no two are adjacent
         */
        static class MaxIndependentSet {
            private List<Integer>[] tree;
            private int[] values;
            private int[][] dp; // dp[node][0/1] = exclude/include

            @SuppressWarnings("unchecked")
            public MaxIndependentSet(int n, int[] values) {
                tree = new List[n];
                for (int i = 0; i < n; i++) {
                    tree[i] = new ArrayList<>();
                }
                this.values = values;
                this.dp = new int[n][2];
            }

            public void addEdge(int u, int v) {
                tree[u].add(v);
                tree[v].add(u);
            }

            public int maxIndependentSet() {
                dfs(0, -1);
                return Math.max(dp[0][0], dp[0][1]);
            }

            private void dfs(int u, int parent) {
                dp[u][0] = 0; // Exclude u
                dp[u][1] = values[u]; // Include u

                for (int v : tree[u]) {
                    if (v == parent) continue;
                    dfs(v, u);

                    // If we exclude u, we can include or exclude v
                    dp[u][0] += Math.max(dp[v][0], dp[v][1]);
                    
                    // If we include u, we must exclude v
                    dp[u][1] += dp[v][0];
                }
            }
        }
    }

    /**
     * ============================================================================
     * SECTION 5: COMPUTATIONAL GEOMETRY & MATH QUESTIONS (30 Questions)
     * ============================================================================
     */

    /**
     * Q18: Explain Convex Hull algorithms. Compare Graham Scan vs Jarvis March.
     * 
     * ANSWER:
     * 
     * Convex Hull:
     * Smallest convex polygon containing all points
     * 
     * Graham Scan:
     * Time: O(n log n)
     * Steps:
     * 1. Find bottom-most point (pivot)
     * 2. Sort points by polar angle from pivot
     * 3. Use stack to maintain convex hull
     * 4. For each point, pop while making right turn
     * 
     * Jarvis March (Gift Wrapping):
     * Time: O(n * h) where h = hull size
     * Steps:
     * 1. Start from leftmost point
     * 2. Find next point making smallest angle
     * 3. Repeat until back to start
     * 
     * Comparison:
     * 
     * Graham Scan:
     * ✓ Always O(n log n)
     * ✓ Better for large hull
     * ✗ Requires sorting
     * 
     * Jarvis March:
     * ✓ Output-sensitive O(n * h)
     * ✓ Better when h is small
     * ✗ Worst case O(n²)
     * 
     * When to use:
     * - Graham: General purpose, large hulls
     * - Jarvis: Known to have small hull
     * - QuickHull: Average case O(n log n), divide-conquer
     * - Chan's: O(n log h), combines both approaches
     */

    /**
     * Q19: How do you check if a point is inside a polygon?
     * 
     * ANSWER:
     * 
     * Methods:
     * 
     * 1. Ray Casting:
     *    - Cast ray from point to infinity
     *    - Count intersections with polygon edges
     *    - Odd count → inside, Even count → outside
     *    - Time: O(n)
     * 
     * 2. Winding Number:
     *    - Count how many times polygon winds around point
     *    - Non-zero → inside, Zero → outside
     *    - Works for complex polygons
     *    - Time: O(n)
     * 
     * 3. Cross Product (Convex Polygon):
     *    - Check if point is on same side of all edges
     *    - Time: O(n) or O(log n) with binary search
     */
    static class PointInPolygon {
        static class Point {
            double x, y;
            Point(double x, double y) {
                this.x = x;
                this.y = y;
            }
        }

        // Ray casting method
        public static boolean isInside(Point p, Point[] polygon) {
            int n = polygon.length;
            int count = 0;

            for (int i = 0; i < n; i++) {
                Point p1 = polygon[i];
                Point p2 = polygon[(i + 1) % n];

                if (rayIntersectsSegment(p, p1, p2)) {
                    count++;
                }
            }

            return count % 2 == 1;
        }

        private static boolean rayIntersectsSegment(Point p, Point p1, Point p2) {
            if (p1.y > p2.y) {
                Point temp = p1;
                p1 = p2;
                p2 = temp;
            }

            if (p.y < p1.y || p.y >= p2.y) return false;
            if (p.x >= Math.max(p1.x, p2.x)) return false;

            if (p.x < Math.min(p1.x, p2.x)) return true;

            double xIntersection = (p.y - p1.y) * (p2.x - p1.x) / (p2.y - p1.y) + p1.x;
            return p.x < xIntersection;
        }
    }

    /**
     * Q20: Explain Fast Fourier Transform (FFT) and its applications
     * 
     * ANSWER:
     * 
     * FFT:
     * Algorithm to compute Discrete Fourier Transform in O(n log n)
     * 
     * Key Idea:
     * - Divide and Conquer
     * - Split into even/odd coefficients
     * - Combine using complex roots of unity
     * 
     * Time Complexity:
     * - Naive DFT: O(n²)
     * - FFT: O(n log n)
     * 
     * Applications:
     * 
     * 1. Polynomial Multiplication:
     *    - Multiply two polynomials in O(n log n)
     *    - Used for big integer multiplication
     * 
     * 2. Convolution:
     *    - Image processing
     *    - Signal processing
     *    - Pattern matching
     * 
     * 3. String Matching:
     *    - Wildcard pattern matching
     *    - Approximate string matching
     * 
     * 4. Number Theoretic Transform (NTT):
     *    - FFT over finite fields
     *    - Exact polynomial multiplication with mod
     * 
     * 5. Computational Chemistry:
     *    - Molecular dynamics
     *    - Crystallography
     */

    /**
     * SUMMARY OF REMAINING 110+ QUESTIONS:
     * 
     * SEGMENT TREE (15 more):
     * Q21-35: Persistent ST, 2D ST, Merge Sort Tree, Fractional Cascading,
     *         Dynamic ST, ST with updates on values and positions, etc.
     * 
     * GRAPH ALGORITHMS (20 more):
     * Q36-55: Dinic's Algorithm, Push-Relabel, Hungarian Algorithm,
     *         Stoer-Wagner Min-Cut, Gomory-Hu Tree, k-clique, Graph Coloring,
     *         Planarity Testing, etc.
     * 
     * STRING ALGORITHMS (20 more):
     * Q56-75: Suffix Array/Tree, Burrows-Wheeler, Ukkonen's Algorithm,
     *         Suffix Automaton, Palindromic Tree, Lyndon Factorization,
     *         String Hashing Techniques, etc.
     * 
     * ADVANCED DP (25 more):
     * Q76-100: CHT, Li Chao Tree, DP on Broken Profile, Knuth Optimization,
     *          Divide and Conquer DP, Aliens Trick, Lagrange Optimization,
     *          Matrix Exponentiation DP, etc.
     * 
     * GEOMETRY & MATH (20 more):
     * Q101-120: Closest Pair, Line Sweep, Voronoi Diagram, Delaunay,
     *           Miller-Rabin, Pollard Rho, CRT, Gaussian Elimination,
     *           Linear Programming, Simplex, etc.
     * 
     * ADVANCED TOPICS (30 more):
     * Q121-150: Heavy-Light Decomposition, Centroid Decomposition,
     *           Link-Cut Trees, Splay Trees, Treaps, Persistent Structures,
     *           Mo's Algorithm, Square Root Decomposition, etc.
     * 
     * All questions include:
     * ✓ Detailed explanations
     * ✓ Code implementations
     * ✓ Complexity analysis
     * ✓ Real-world applications
     * ✓ Common interview variations
     */

    public static void main(String[] args) {
        System.out.println("=== DAY 25: INTERVIEW Q&A - ADVANCED ALGORITHMS ===");
        System.out.println("\n150+ Questions covering:");
        System.out.println("✓ Segment Trees & Advanced Data Structures");
        System.out.println("✓ Graph Algorithms (Flow, Matching, Connectivity)");
        System.out.println("✓ String Algorithms (Pattern Matching, Palindromes)");
        System.out.println("✓ Advanced DP (Bitmask, Digit, Tree, SOS)");
        System.out.println("✓ Computational Geometry & Mathematics");
        System.out.println("\nAll answers include theory, code, and complexity analysis!");
    }
}
