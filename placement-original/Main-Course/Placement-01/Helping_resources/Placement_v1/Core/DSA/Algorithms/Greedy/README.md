# Greedy Algorithms

## Overview
Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. These algorithms make locally optimal choices at each step with the hope of finding a global optimum.

## Key Characteristics

1. **Greedy Choice Property**: A global optimum can be reached by making locally optimal choices.
2. **Optimal Substructure**: An optimal solution contains optimal solutions to its subproblems.
3. **Irrevocable Decisions**: Once a choice is made, it's never reconsidered.

## When to Use Greedy Algorithms

Greedy algorithms are suitable when:
- The problem has optimal substructure
- A locally optimal choice leads to a globally optimal solution
- There are no constraints that require looking ahead or backtracking

## Common Greedy Algorithms

### 1. Activity Selection Problem
Select the maximum number of activities that can be performed by a single person, assuming only one activity can be performed at a time.

```java
public int maxActivities(int[] start, int[] finish) {
    // Assuming activities are already sorted by finish time
    int n = start.length;
    if (n == 0) return 0;
    
    int count = 1;  // First activity is always selected
    int lastFinish = finish[0];
    
    for (int i = 1; i < n; i++) {
        // If this activity starts after the last selected activity finishes
        if (start[i] >= lastFinish) {
            count++;
            lastFinish = finish[i];
        }
    }
    
    return count;
}
```

### 2. Fractional Knapsack
Fill a knapsack with fractions of items to maximize value, given weight constraints.

```java
public double fractionalKnapsack(int[] values, int[] weights, int capacity) {
    int n = values.length;
    
    // Create item pairs and sort by value/weight ratio in descending order
    Item[] items = new Item[n];
    for (int i = 0; i < n; i++) {
        items[i] = new Item(values[i], weights[i]);
    }
    
    Arrays.sort(items, (a, b) -> Double.compare(b.ratio, a.ratio));
    
    double totalValue = 0;
    int currentWeight = 0;
    
    for (Item item : items) {
        // If we can take the whole item
        if (currentWeight + item.weight <= capacity) {
            totalValue += item.value;
            currentWeight += item.weight;
        } else {
            // Take a fraction of the item
            int remainingCapacity = capacity - currentWeight;
            totalValue += item.value * ((double) remainingCapacity / item.weight);
            break;
        }
    }
    
    return totalValue;
}

class Item {
    int value;
    int weight;
    double ratio;
    
    public Item(int value, int weight) {
        this.value = value;
        this.weight = weight;
        this.ratio = (double) value / weight;
    }
}
```

### 3. Huffman Coding
Construct an optimal prefix code for data compression.

```java
public class HuffmanCoding {
    class Node {
        char character;
        int frequency;
        Node left, right;
        
        public Node(char character, int frequency) {
            this.character = character;
            this.frequency = frequency;
        }
        
        public Node(int frequency, Node left, Node right) {
            this.frequency = frequency;
            this.left = left;
            this.right = right;
        }
    }
    
    public Map<Character, String> buildHuffmanCodes(char[] chars, int[] frequencies) {
        int n = chars.length;
        
        // Create a priority queue to store nodes
        PriorityQueue<Node> pq = new PriorityQueue<>((a, b) -> a.frequency - b.frequency);
        
        // Create leaf nodes and add them to the priority queue
        for (int i = 0; i < n; i++) {
            pq.offer(new Node(chars[i], frequencies[i]));
        }
        
        // Build Huffman tree
        while (pq.size() > 1) {
            Node left = pq.poll();
            Node right = pq.poll();
            
            Node parent = new Node(left.frequency + right.frequency, left, right);
            pq.offer(parent);
        }
        
        // Root of the Huffman tree
        Node root = pq.poll();
        
        // Generate codes
        Map<Character, String> codes = new HashMap<>();
        generateCodes(root, "", codes);
        
        return codes;
    }
    
    private void generateCodes(Node node, String code, Map<Character, String> codes) {
        if (node == null) return;
        
        // If this is a leaf node, store the code
        if (node.left == null && node.right == null) {
            codes.put(node.character, code);
            return;
        }
        
        // Traverse left (add 0)
        generateCodes(node.left, code + "0", codes);
        
        // Traverse right (add 1)
        generateCodes(node.right, code + "1", codes);
    }
}
```

### 4. Minimum Spanning Tree (Kruskal's Algorithm)
Find a subset of edges that forms a tree including every vertex, with minimum total edge weight.

```java
public class KruskalMST {
    class Edge {
        int src, dest, weight;
        
        public Edge(int src, int dest, int weight) {
            this.src = src;
            this.dest = dest;
            this.weight = weight;
        }
    }
    
    class DisjointSet {
        int[] parent, rank;
        
        public DisjointSet(int n) {
            parent = new int[n];
            rank = new int[n];
            for (int i = 0; i < n; i++) {
                parent[i] = i;
            }
        }
        
        int find(int x) {
            if (parent[x] != x) {
                parent[x] = find(parent[x]); // Path compression
            }
            return parent[x];
        }
        
        void union(int x, int y) {
            int rootX = find(x);
            int rootY = find(y);
            
            if (rootX == rootY) return;
            
            // Union by rank
            if (rank[rootX] < rank[rootY]) {
                parent[rootX] = rootY;
            } else if (rank[rootX] > rank[rootY]) {
                parent[rootY] = rootX;
            } else {
                parent[rootY] = rootX;
                rank[rootX]++;
            }
        }
    }
    
    public List<Edge> kruskalMST(List<Edge> edges, int vertices) {
        // Sort edges by weight
        Collections.sort(edges, (a, b) -> a.weight - b.weight);
        
        List<Edge> result = new ArrayList<>();
        DisjointSet ds = new DisjointSet(vertices);
        
        for (Edge edge : edges) {
            int srcRoot = ds.find(edge.src);
            int destRoot = ds.find(edge.dest);
            
            // If including this edge doesn't form a cycle
            if (srcRoot != destRoot) {
                result.add(edge);
                ds.union(srcRoot, destRoot);
            }
            
            // Stop when we have V-1 edges
            if (result.size() == vertices - 1) {
                break;
            }
        }
        
        return result;
    }
}
```

### 5. Minimum Spanning Tree (Prim's Algorithm)
Another approach to find a minimum spanning tree.

```java
public class PrimMST {
    public int[][] primMST(int[][] graph) {
        int V = graph.length;
        
        // Array to store constructed MST
        int[] parent = new int[V];
        
        // Key values used to pick minimum weight edge
        int[] key = new int[V];
        
        // To represent set of vertices included in MST
        boolean[] mstSet = new boolean[V];
        
        // Initialize all keys as INFINITE
        Arrays.fill(key, Integer.MAX_VALUE);
        
        // Always include first vertex in MST
        key[0] = 0;     // Make key 0 so this vertex is picked first
        parent[0] = -1;  // First node is always root of MST
        
        for (int count = 0; count < V - 1; count++) {
            // Pick the minimum key vertex from the set of vertices not yet included in MST
            int u = minKey(key, mstSet, V);
            
            // Add the picked vertex to the MST Set
            mstSet[u] = true;
            
            // Update key value and parent index of adjacent vertices
            for (int v = 0; v < V; v++) {
                // graph[u][v] is non zero only for adjacent vertices of u
                // mstSet[v] is false for vertices not yet included in MST
                // Update the key only if graph[u][v] is smaller than key[v]
                if (graph[u][v] != 0 && !mstSet[v] && graph[u][v] < key[v]) {
                    parent[v] = u;
                    key[v] = graph[u][v];
                }
            }
        }
        
        // Construct the MST
        int[][] mst = new int[V-1][3]; // [u, v, weight]
        for (int i = 1; i < V; i++) {
            mst[i-1][0] = parent[i];
            mst[i-1][1] = i;
            mst[i-1][2] = graph[i][parent[i]];
        }
        
        return mst;
    }
    
    private int minKey(int[] key, boolean[] mstSet, int V) {
        int min = Integer.MAX_VALUE;
        int minIndex = -1;
        
        for (int v = 0; v < V; v++) {
            if (!mstSet[v] && key[v] < min) {
                min = key[v];
                minIndex = v;
            }
        }
        
        return minIndex;
    }
}
```

### 6. Dijkstra's Shortest Path Algorithm
Find the shortest path from a source vertex to all other vertices in a weighted graph.

```java
public class Dijkstra {
    public int[] dijkstra(int[][] graph, int src) {
        int V = graph.length;
        int[] dist = new int[V];
        boolean[] visited = new boolean[V];
        
        // Initialize distances
        Arrays.fill(dist, Integer.MAX_VALUE);
        dist[src] = 0;
        
        for (int count = 0; count < V - 1; count++) {
            // Find the minimum distance vertex from the set of vertices not yet processed
            int u = minDistance(dist, visited, V);
            
            // Mark the picked vertex as processed
            visited[u] = true;
            
            // Update dist value of adjacent vertices
            for (int v = 0; v < V; v++) {
                // Update dist[v] only if:
                // 1. There is an edge from u to v
                // 2. v is not in visited
                // 3. Total weight of path from src to v through u is smaller than current value of dist[v]
                if (!visited[v] && graph[u][v] != 0 && 
                    dist[u] != Integer.MAX_VALUE && 
                    dist[u] + graph[u][v] < dist[v]) {
                    dist[v] = dist[u] + graph[u][v];
                }
            }
        }
        
        return dist;
    }
    
    private int minDistance(int[] dist, boolean[] visited, int V) {
        int min = Integer.MAX_VALUE;
        int minIndex = -1;
        
        for (int v = 0; v < V; v++) {
            if (!visited[v] && dist[v] <= min) {
                min = dist[v];
                minIndex = v;
            }
        }
        
        return minIndex;
    }
}
```

### 7. Job Sequencing with Deadlines
Schedule jobs to maximize profit when each job has a deadline and profit.

```java
public class JobSequencing {
    class Job {
        char id;
        int deadline;
        int profit;
        
        public Job(char id, int deadline, int profit) {
            this.id = id;
            this.deadline = deadline;
            this.profit = profit;
        }
    }
    
    public List<Character> scheduleJobs(List<Job> jobs) {
        // Sort jobs by profit in descending order
        Collections.sort(jobs, (a, b) -> b.profit - a.profit);
        
        // Find the maximum deadline
        int maxDeadline = 0;
        for (Job job : jobs) {
            maxDeadline = Math.max(maxDeadline, job.deadline);
        }
        
        // Initialize result array and slot array
        List<Character> result = new ArrayList<>();
        boolean[] slot = new boolean[maxDeadline + 1];
        
        // Process jobs
        for (Job job : jobs) {
            // Find a free slot for this job
            for (int i = job.deadline; i > 0; i--) {
                // If slot is free
                if (!slot[i]) {
                    result.add(job.id);
                    slot[i] = true;
                    break;
                }
            }
        }
        
        return result;
    }
}
```

### 8. Coin Change (Greedy Approach)
Find the minimum number of coins that make a given value (works only for canonical coin systems).

```java
public int minCoins(int[] coins, int amount) {
    // Sort coins in descending order
    Arrays.sort(coins);
    int[] sortedCoins = new int[coins.length];
    for (int i = 0; i < coins.length; i++) {
        sortedCoins[i] = coins[coins.length - 1 - i];
    }
    
    int count = 0;
    int i = 0;
    
    while (amount > 0 && i < sortedCoins.length) {
        // Take as many coins of current denomination as possible
        while (amount >= sortedCoins[i]) {
            amount -= sortedCoins[i];
            count++;
        }
        i++;
    }
    
    return amount == 0 ? count : -1; // Return -1 if amount cannot be made
}
```

## Greedy vs Dynamic Programming

| Aspect | Greedy | Dynamic Programming |
|--------|--------|---------------------|
| Decision Making | Makes locally optimal choices | Considers all possible choices |
| Optimization | May not always find global optimum | Always finds global optimum |
| Efficiency | Generally more efficient | May be less efficient |
| Applicability | Limited to problems with greedy choice property | Wider range of problems |
| Complexity | Usually simpler to implement | Often more complex |

## When Greedy Fails

Greedy algorithms don't always produce optimal solutions. They fail when:
- The problem doesn't have the greedy choice property
- Local optimum doesn't lead to global optimum
- Future choices depend on past choices

**Example: Coin Change Problem**
- For US coins [1, 5, 10, 25], greedy works
- For denominations [1, 3, 4], greedy fails:
  - To make 6, greedy gives [4, 1, 1] (3 coins)
  - Optimal solution is [3, 3] (2 coins)

## Proving Greedy Algorithms

To prove a greedy algorithm is correct:
1. **Greedy Choice Property**: Show that a greedy choice is always part of some optimal solution
2. **Optimal Substructure**: Show that after making a greedy choice, what remains is a subproblem with the property that if we solve it optimally, we arrive at an optimal solution to the original problem

## Practice Problems

1. [Activity Selection](https://practice.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1)
2. [Fractional Knapsack](https://practice.geeksforgeeks.org/problems/fractional-knapsack-1587115620/1)
3. [Huffman Encoding](https://practice.geeksforgeeks.org/problems/huffman-encoding3345/1)
4. [Job Sequencing Problem](https://practice.geeksforgeeks.org/problems/job-sequencing-problem-1587115620/1)
5. [Minimum Platforms](https://practice.geeksforgeeks.org/problems/minimum-platforms-1587115620/1)
6. [Coin Change Problem](https://leetcode.com/problems/coin-change/)
7. [Gas Station](https://leetcode.com/problems/gas-station/)
8. [Jump Game](https://leetcode.com/problems/jump-game/)
9. [Minimum Number of Arrows to Burst Balloons](https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/)
10. [Task Scheduler](https://leetcode.com/problems/task-scheduler/)