# 🚀 DSA Quick Mastery Guide - Part 3: Trees & Graphs

# 📚 TOPIC 3: TREES & GRAPHS

## Core Concepts

### Tree Fundamentals
```java
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

// Binary Tree Traversals
// Time Complexity: O(n), Space Complexity: O(h) where h is height
```

### Key Tree Techniques

#### 1. Tree Traversals
```java
// DFS Traversals
// Inorder (Left, Root, Right)
public void inorder(TreeNode root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}

// Preorder (Root, Left, Right)
public void preorder(TreeNode root) {
    if (root == null) return;
    System.out.print(root.val + " ");
    preorder(root.left);
    preorder(root.right);
}

// Postorder (Left, Right, Root)
public void postorder(TreeNode root) {
    if (root == null) return;
    postorder(root.left);
    postorder(root.right);
    System.out.print(root.val + " ");
}

// BFS (Level Order Traversal)
public List<List<Integer>> levelOrder(TreeNode root) {
    List<List<Integer>> result = new ArrayList<>();
    if (root == null) return result;
    
    Queue<TreeNode> queue = new LinkedList<>();
    queue.offer(root);
    
    while (!queue.isEmpty()) {
        int levelSize = queue.size();
        List<Integer> level = new ArrayList<>();
        
        for (int i = 0; i < levelSize; i++) {
            TreeNode node = queue.poll();
            level.add(node.val);
            
            if (node.left != null) queue.offer(node.left);
            if (node.right != null) queue.offer(node.right);
        }
        
        result.add(level);
    }
    
    return result;
}
```

#### 2. Binary Search Tree (BST)
```java
// BST Properties:
// 1. Left subtree contains only nodes with values less than the node's value
// 2. Right subtree contains only nodes with values greater than the node's value
// 3. Both left and right subtrees are also BSTs

// BST Search - O(log n) average, O(n) worst
public TreeNode search(TreeNode root, int val) {
    if (root == null || root.val == val) return root;
    if (val < root.val) return search(root.left, val);
    return search(root.right, val);
}

// BST Insert - O(log n) average, O(n) worst
public TreeNode insert(TreeNode root, int val) {
    if (root == null) return new TreeNode(val);
    if (val < root.val) {
        root.left = insert(root.left, val);
    } else if (val > root.val) {
        root.right = insert(root.right, val);
    }
    return root;
}

// BST Delete - O(log n) average, O(n) worst
public TreeNode delete(TreeNode root, int val) {
    if (root == null) return null;
    
    if (val < root.val) {
        root.left = delete(root.left, val);
    } else if (val > root.val) {
        root.right = delete(root.right, val);
    } else {
        // Case 1: Leaf node
        if (root.left == null && root.right == null) {
            return null;
        }
        // Case 2: One child
        else if (root.left == null) {
            return root.right;
        } else if (root.right == null) {
            return root.left;
        }
        // Case 3: Two children
        else {
            // Find inorder successor (smallest in right subtree)
            root.val = findMin(root.right).val;
            root.right = delete(root.right, root.val);
        }
    }
    return root;
}

private TreeNode findMin(TreeNode node) {
    while (node.left != null) {
        node = node.left;
    }
    return node;
}
```

### Graph Fundamentals
```java
// Graph Representations
// 1. Adjacency Matrix - O(V²) space
int[][] adjMatrix = new int[V][V];

// 2. Adjacency List - O(V+E) space
List<List<Integer>> adjList = new ArrayList<>();
for (int i = 0; i < V; i++) {
    adjList.add(new ArrayList<>());
}
```

### Key Graph Techniques

#### 1. Graph Traversals
```java
// DFS - O(V+E) time, O(V) space
public void dfs(List<List<Integer>> adjList, int start, boolean[] visited) {
    visited[start] = true;
    System.out.print(start + " ");
    
    for (int neighbor : adjList.get(start)) {
        if (!visited[neighbor]) {
            dfs(adjList, neighbor, visited);
        }
    }
}

// BFS - O(V+E) time, O(V) space
public void bfs(List<List<Integer>> adjList, int start) {
    boolean[] visited = new boolean[adjList.size()];
    Queue<Integer> queue = new LinkedList<>();
    
    visited[start] = true;
    queue.offer(start);
    
    while (!queue.isEmpty()) {
        int node = queue.poll();
        System.out.print(node + " ");
        
        for (int neighbor : adjList.get(node)) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.offer(neighbor);
            }
        }
    }
}
```

#### 2. Shortest Path Algorithms
```java
// Dijkstra's Algorithm - O((V+E)logV) time with priority queue
public int[] dijkstra(List<List<int[]>> adjList, int start) {
    int n = adjList.size();
    int[] dist = new int[n];
    Arrays.fill(dist, Integer.MAX_VALUE);
    dist[start] = 0;
    
    PriorityQueue<int[]> pq = new PriorityQueue<>((a, b) -> a[1] - b[1]); // [node, distance]
    pq.offer(new int[]{start, 0});
    
    while (!pq.isEmpty()) {
        int[] curr = pq.poll();
        int node = curr[0], distance = curr[1];
        
        if (distance > dist[node]) continue; // Skip if we found a better path
        
        for (int[] edge : adjList.get(node)) {
            int neighbor = edge[0], weight = edge[1];
            int newDist = dist[node] + weight;
            
            if (newDist < dist[neighbor]) {
                dist[neighbor] = newDist;
                pq.offer(new int[]{neighbor, newDist});
            }
        }
    }
    
    return dist;
}
```

## 🎯 Problem Patterns & Solutions

### Pattern 1: Tree Recursion
```java
// Maximum Depth of Binary Tree
public int maxDepth(TreeNode root) {
    if (root == null) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

// Symmetric Tree
public boolean isSymmetric(TreeNode root) {
    if (root == null) return true;
    return isMirror(root.left, root.right);
}

private boolean isMirror(TreeNode left, TreeNode right) {
    if (left == null && right == null) return true;
    if (left == null || right == null) return false;
    
    return (left.val == right.val) && 
           isMirror(left.left, right.right) && 
           isMirror(left.right, right.left);
}
```

### Pattern 2: Graph Search
```java
// Number of Islands (DFS)
public int numIslands(char[][] grid) {
    if (grid == null || grid.length == 0) return 0;
    int count = 0;
    int rows = grid.length, cols = grid[0].length;
    
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < cols; j++) {
            if (grid[i][j] == '1') {
                count++;
                dfs(grid, i, j);
            }
        }
    }
    
    return count;
}

private void dfs(char[][] grid, int i, int j) {
    int rows = grid.length, cols = grid[0].length;
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != '1') {
        return;
    }
    
    grid[i][j] = '0'; // Mark as visited
    
    dfs(grid, i + 1, j);
    dfs(grid, i - 1, j);
    dfs(grid, i, j + 1);
    dfs(grid, i, j - 1);
}

// Course Schedule (Cycle Detection)
public boolean canFinish(int numCourses, int[][] prerequisites) {
    List<List<Integer>> adjList = new ArrayList<>();
    for (int i = 0; i < numCourses; i++) {
        adjList.add(new ArrayList<>());
    }
    
    for (int[] prereq : prerequisites) {
        adjList.get(prereq[1]).add(prereq[0]);
    }
    
    // 0 = unvisited, 1 = visiting, 2 = visited
    int[] visited = new int[numCourses];
    
    for (int i = 0; i < numCourses; i++) {
        if (visited[i] == 0 && hasCycle(adjList, visited, i)) {
            return false;
        }
    }
    
    return true;
}

private boolean hasCycle(List<List<Integer>> adjList, int[] visited, int node) {
    if (visited[node] == 1) return true; // Cycle detected
    if (visited[node] == 2) return false; // Already processed
    
    visited[node] = 1; // Mark as visiting
    
    for (int neighbor : adjList.get(node)) {
        if (hasCycle(adjList, visited, neighbor)) {
            return true;
        }
    }
    
    visited[node] = 2; // Mark as visited
    return false;
}
```

## 🔄 Quick Revision Questions

### Easy Level
1. Maximum depth of binary tree
2. Validate binary search tree
3. Symmetric tree
4. Path sum
5. Invert binary tree

### Medium Level
1. Binary tree level order traversal
2. Construct binary tree from preorder and inorder traversal
3. Lowest common ancestor of a binary tree
4. Number of islands
5. Course schedule (detect cycle in directed graph)

### Hard Level
1. Serialize and deserialize binary tree
2. Binary tree maximum path sum
3. Word ladder (shortest transformation sequence)
4. Alien dictionary (topological sort)
5. Longest increasing path in a matrix