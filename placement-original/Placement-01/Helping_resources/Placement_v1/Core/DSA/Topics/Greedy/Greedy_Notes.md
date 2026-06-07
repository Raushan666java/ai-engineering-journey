# Greedy Algorithms: Comprehensive Notes

## 1. Introduction to Greedy Algorithms

Greedy algorithms build up a solution piece by piece, always choosing the next piece that offers the most immediate benefit. These algorithms make locally optimal choices at each step with the hope of finding a global optimum.

### Key Characteristics
- **Greedy Choice Property**: A global optimum can be reached by making locally optimal choices
- **Optimal Substructure**: An optimal solution contains optimal solutions to its subproblems
- **Irrevocable Decisions**: Once a choice is made, it's never reconsidered

### When to Use Greedy Algorithms
Greedy algorithms are suitable when:
- The problem has optimal substructure
- A locally optimal choice leads to a globally optimal solution
- There are no constraints that require looking ahead or backtracking

## 2. Common Greedy Algorithm Problems

### Activity Selection Problem
Select the maximum number of activities that can be performed by a single person, assuming only one activity can be performed at a time.

```java
public int maxActivities(int[] start, int[] finish) {
    // Create activity pairs and sort by finish time
    int[][] activities = new int[start.length][2];
    for (int i = 0; i < start.length; i++) {
        activities[i][0] = start[i];
        activities[i][1] = finish[i];
    }
    
    Arrays.sort(activities, (a, b) -> a[1] - b[1]);
    
    int count = 1;  // First activity is always selected
    int lastFinish = activities[0][1];
    
    for (int i = 1; i < activities.length; i++) {
        // If this activity starts after the last selected activity finishes
        if (activities[i][0] >= lastFinish) {
            count++;
            lastFinish = activities[i][1];
        }
    }
    
    return count;
}
```

### Fractional Knapsack
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

### Huffman Coding
Construct an optimal prefix code for data compression.

```java
class HuffmanNode {
    char character;
    int frequency;
    HuffmanNode left, right;
    
    public HuffmanNode(char character, int frequency) {
        this.character = character;
        this.frequency = frequency;
    }
    
    public HuffmanNode(int frequency, HuffmanNode left, HuffmanNode right) {
        this.frequency = frequency;
        this.left = left;
        this.right = right;
    }
}

public Map<Character, String> buildHuffmanCodes(char[] chars, int[] frequencies) {
    int n = chars.length;
    
    // Create a priority queue to store nodes
    PriorityQueue<HuffmanNode> pq = new PriorityQueue<>((a, b) -> a.frequency - b.frequency);
    
    // Create leaf nodes and add them to the priority queue
    for (int i = 0; i < n; i++) {
        pq.offer(new HuffmanNode(chars[i], frequencies[i]));
    }
    
    // Build Huffman tree
    while (pq.size() > 1) {
        HuffmanNode left = pq.poll();
        HuffmanNode right = pq.poll();
        
        HuffmanNode parent = new HuffmanNode(left.frequency + right.frequency, left, right);
        pq.offer(parent);
    }
    
    // Root of the Huffman tree
    HuffmanNode root = pq.poll();
    
    // Generate codes
    Map<Character, String> codes = new HashMap<>();
    generateCodes(root, "", codes);
    
    return codes;
}

private void generateCodes(HuffmanNode node, String code, Map<Character, String> codes) {
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
```

### Minimum Spanning Tree (Kruskal's Algorithm)
Find a subset of edges that forms a tree including every vertex, with minimum total edge weight.

```java
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
```

### Minimum Spanning Tree (Prim's Algorithm)
Another approach to find a minimum spanning tree.

```java
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
```

### Dijkstra's Shortest Path Algorithm
Find the shortest path from a source vertex to all other vertices in a weighted graph.

```java
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
```

### Job Sequencing with Deadlines
Schedule jobs to maximize profit when each job has a deadline and profit.

```java
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
```

### Coin Change (Greedy Approach)
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

## 3. Greedy vs Dynamic Programming

| Aspect | Greedy | Dynamic Programming |
|--------|--------|---------------------|
| Decision Making | Makes locally optimal choices | Considers all possible choices |
| Optimization | May not always find global optimum | Always finds global optimum |
| Efficiency | Generally more efficient | May be less efficient |
| Applicability | Limited to problems with greedy choice property | Wider range of problems |
| Complexity | Usually simpler to implement | Often more complex |

### When Greedy Fails
Greedy algorithms don't always produce optimal solutions. They fail when:
- The problem doesn't have the greedy choice property
- Local optimum doesn't lead to global optimum
- Future choices depend on past choices

**Example: Coin Change Problem**
- For US coins [1, 5, 10, 25], greedy works
- For denominations [1, 3, 4], greedy fails:
  - To make 6, greedy gives [4, 1, 1] (3 coins)
  - Optimal solution is [3, 3] (2 coins)

## 4. Proving Greedy Algorithms

To prove a greedy algorithm is correct:
1. **Greedy Choice Property**: Show that a greedy choice is always part of some optimal solution
2. **Optimal Substructure**: Show that after making a greedy choice, what remains is a subproblem with the property that if we solve it optimally, we arrive at an optimal solution to the original problem

### Example: Activity Selection Problem
1. **Greedy Choice**: Select the activity with the earliest finish time
2. **Proof**:
   - Let A be the set of activities selected by the greedy algorithm
   - Let O be an optimal solution
   - If A = O, we're done
   - If A ≠ O, we can replace an activity in O with an activity in A to get a new optimal solution
   - This shows that the greedy choice is always part of some optimal solution

## 5. Common Greedy Algorithm Patterns

### 1. Sort and Select
- Sort elements based on some criteria
- Select elements in order based on the sorted criteria

**Examples**: Activity Selection, Fractional Knapsack

### 2. Priority Queue
- Use a priority queue to always select the best option
- Update the queue as you make selections

**Examples**: Huffman Coding, Dijkstra's Algorithm

### 3. Incremental Construction
- Build the solution incrementally
- Make the best choice at each step

**Examples**: Prim's Algorithm, Kruskal's Algorithm

### 4. Interval Scheduling
- Sort intervals by some criteria (start time, end time, duration)
- Select intervals that don't overlap

**Examples**: Activity Selection, Interval Scheduling

## 6. Time and Space Complexity Analysis

| Algorithm | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Activity Selection | O(n log n) | O(n) |
| Fractional Knapsack | O(n log n) | O(n) |
| Huffman Coding | O(n log n) | O(n) |
| Kruskal's Algorithm | O(E log E) | O(V + E) |
| Prim's Algorithm | O(V²) or O(E log V) with heap | O(V) |
| Dijkstra's Algorithm | O(V²) or O(E log V) with heap | O(V) |
| Job Sequencing | O(n²) | O(n) |
| Coin Change (Greedy) | O(n) | O(1) |

## 7. When to Use Greedy Algorithms

Greedy algorithms are suitable for problems where:
- Making locally optimal choices leads to a global optimum
- The problem has optimal substructure
- Greedy choice property holds
- You need an efficient solution (even if it's not always optimal)

## 8. Common Mistakes and Pitfalls

1. **Assuming Greedy Always Works**: Not all problems can be solved optimally with greedy algorithms
2. **Not Proving Correctness**: Always verify that the greedy approach gives the optimal solution
3. **Incorrect Greedy Choice**: Choosing the wrong criteria for making greedy decisions
4. **Overlooking Edge Cases**: Not handling special cases or empty inputs
5. **Inefficient Implementation**: Not using appropriate data structures (like priority queues)

## 9. Advanced Greedy Techniques

### Matroid Theory
A mathematical structure that generalizes the concept of linear independence in vector spaces and provides a framework for proving the optimality of greedy algorithms.

### Exchange Arguments
A technique used to prove the correctness of greedy algorithms by showing that any solution can be transformed into the greedy solution without making it worse.

### Greedy Algorithms with Lookahead
Sometimes, looking ahead a few steps can improve the performance of greedy algorithms.

## 10. Resources for Further Learning

1. **Books**:
   - "Introduction to Algorithms" by CLRS
   - "Algorithm Design" by Kleinberg and Tardos

2. **Online Platforms**:
   - LeetCode: Greedy section
   - GeeksforGeeks: Greedy Algorithms
   - HackerRank: Greedy challenges

3. **YouTube Channels**:
   - Abdul Bari
   - Back To Back SWE
   - Tushar Roy - Coding Made Simple