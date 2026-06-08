package dsa.day61;

import java.util.*;
import java.util.concurrent.ThreadLocalRandom;

/**
 * Day 61: Skip Lists & Advanced Tree Structures
 * 
 * Comprehensive implementations of probabilistic and self-balancing trees:
 * 1. Skip List - probabilistic multi-level linked list
 * 2. Splay Tree - self-adjusting BST with move-to-root
 * 3. Treap - BST + heap hybrid with randomized priorities
 * 4. AVL Tree - strictly balanced BST with rotations
 * 
 * These structures provide alternatives to standard balanced trees:
 * - Skip Lists: Simpler than Red-Black trees, concurrent-friendly
 * - Splay Trees: Cache-efficient, no balancing metadata
 * - Treaps: Randomized balancing, persistent structure friendly
 * - AVL Trees: Strictest balance, fastest lookups
 */
public class AdvancedTrees {

    /**
     * Skip List: Probabilistic data structure providing O(log n) expected time.
     * 
     * Key Idea:
     * - Multi-level linked list where each level is an "express lane"
     * - Level 0 contains all elements (complete sorted list)
     * - Level i contains subset of level i-1 with probability p (typically 0.5)
     * - Search starts at highest level and drops down when overshooting
     * 
     * Structure (example with 4 levels):
     * L3: -∞ ---------------------------------> 30 -----> +∞
     * L2: -∞ --------> 12 -----------> 25 ---> 30 -----> +∞
     * L1: -∞ -> 7 ---> 12 -> 18 -----> 25 ---> 30 -> 35 -> +∞
     * L0: -∞ -> 7 -> 9 -> 12 -> 18 -> 22 -> 25 -> 30 -> 35 -> +∞
     * 
     * Expected Height: O(log n) when p = 0.5
     * Expected Space: O(n) (each element appears 2 times on average)
     * 
     * Time Complexity:
     * - Search: O(log n) expected
     * - Insert: O(log n) expected
     * - Delete: O(log n) expected
     * 
     * Real-world Usage:
     * - Redis: Sorted Sets (ZADD, ZRANGE commands)
     * - LevelDB: MemTable implementation
     * - Java: ConcurrentSkipListMap (lock-free concurrent map)
     */
    public static class SkipList<K extends Comparable<K>, V> {
        private static final double P = 0.5; // Promotion probability
        private static final int MAX_LEVEL = 32; // Maximum height
        
        private final Node<K, V> head;
        private int level; // Current max level
        private int size;
        private final Random random;

        private static class Node<K, V> {
            final K key;
            V value;
            final Node<K, V>[] forward; // Forward pointers at each level

            @SuppressWarnings("unchecked")
            Node(K key, V value, int level) {
                this.key = key;
                this.value = value;
                this.forward = new Node[level + 1];
            }
        }

        @SuppressWarnings("unchecked")
        public SkipList() {
            this.head = new Node<>(null, null, MAX_LEVEL);
            this.level = 0;
            this.size = 0;
            this.random = new Random(42); // Fixed seed for determinism
        }

        /**
         * Search for key in skip list.
         * 
         * Algorithm:
         * 1. Start at highest level of head node
         * 2. Move forward while next node's key < search key
         * 3. Drop down one level and repeat
         * 4. At level 0, check if next node has the key
         * 
         * Time Complexity: O(log n) expected
         */
        public V get(K key) {
            Node<K, V> node = findNode(key);
            return (node != null && node.key.equals(key)) ? node.value : null;
        }

        public boolean containsKey(K key) {
            return get(key) != null;
        }

        /**
         * Insert key-value pair into skip list.
         * 
         * Algorithm:
         * 1. Find insertion position (like search)
         * 2. Randomly determine new node's level
         * 3. Create node and update forward pointers at all levels
         * 
         * Time Complexity: O(log n) expected
         */
        public void put(K key, V value) {
            @SuppressWarnings("unchecked")
            Node<K, V>[] update = new Node[MAX_LEVEL + 1];
            Node<K, V> current = head;

            // Find insertion position and track update path
            for (int i = level; i >= 0; i--) {
                while (current.forward[i] != null && 
                       current.forward[i].key.compareTo(key) < 0) {
                    current = current.forward[i];
                }
                update[i] = current;
            }

            current = current.forward[0];

            // Update existing key
            if (current != null && current.key.equals(key)) {
                current.value = value;
                return;
            }

            // Insert new key
            int newLevel = randomLevel();
            if (newLevel > level) {
                for (int i = level + 1; i <= newLevel; i++) {
                    update[i] = head;
                }
                level = newLevel;
            }

            Node<K, V> newNode = new Node<>(key, value, newLevel);
            for (int i = 0; i <= newLevel; i++) {
                newNode.forward[i] = update[i].forward[i];
                update[i].forward[i] = newNode;
            }

            size++;
        }

        /**
         * Remove key from skip list.
         * 
         * Time Complexity: O(log n) expected
         */
        public V remove(K key) {
            @SuppressWarnings("unchecked")
            Node<K, V>[] update = new Node[MAX_LEVEL + 1];
            Node<K, V> current = head;

            // Find node to delete and track update path
            for (int i = level; i >= 0; i--) {
                while (current.forward[i] != null && 
                       current.forward[i].key.compareTo(key) < 0) {
                    current = current.forward[i];
                }
                update[i] = current;
            }

            current = current.forward[0];

            if (current == null || !current.key.equals(key)) {
                return null; // Key not found
            }

            // Remove node by updating forward pointers
            for (int i = 0; i <= level; i++) {
                if (update[i].forward[i] != current) {
                    break;
                }
                update[i].forward[i] = current.forward[i];
            }

            // Update level if necessary
            while (level > 0 && head.forward[level] == null) {
                level--;
            }

            size--;
            return current.value;
        }

        /**
         * Find node with key or predecessor.
         */
        private Node<K, V> findNode(K key) {
            Node<K, V> current = head;

            for (int i = level; i >= 0; i--) {
                while (current.forward[i] != null && 
                       current.forward[i].key.compareTo(key) < 0) {
                    current = current.forward[i];
                }
            }

            return current.forward[0];
        }

        /**
         * Generate random level for new node.
         * 
         * Geometric distribution: P(level = k) = p^k * (1-p)
         * Expected value: 1/(1-p) = 2 when p=0.5
         */
        private int randomLevel() {
            int lvl = 0;
            while (lvl < MAX_LEVEL && random.nextDouble() < P) {
                lvl++;
            }
            return lvl;
        }

        public int size() {
            return size;
        }

        public boolean isEmpty() {
            return size == 0;
        }

        /**
         * Get all entries in sorted order.
         */
        public List<Map.Entry<K, V>> entryList() {
            List<Map.Entry<K, V>> entries = new ArrayList<>();
            Node<K, V> current = head.forward[0];
            
            while (current != null) {
                entries.add(new AbstractMap.SimpleEntry<>(current.key, current.value));
                current = current.forward[0];
            }
            
            return entries;
        }
    }

    /**
     * Splay Tree: Self-adjusting binary search tree.
     * 
     * Key Idea:
     * - Every access (search/insert/delete) moves accessed node to root
     * - Uses "splaying" operations (zig, zig-zig, zig-zag)
     * - Recently accessed nodes stay near root → cache-friendly
     * 
     * Amortized Analysis:
     * - Any sequence of m operations takes O(m log n) time
     * - Individual operation can be O(n), but amortized is O(log n)
     * 
     * Time Complexity:
     * - Search/Insert/Delete: O(log n) amortized, O(n) worst case
     * 
     * Space Complexity: O(n), no balance factor stored
     * 
     * Real-world Usage:
     * - Compilers: Symbol tables (recent symbols accessed often)
     * - Caches: LRU-like behavior built-in
     * - Windows NT: Virtual memory management
     */
    public static class SplayTree<K extends Comparable<K>, V> {
        private Node<K, V> root;
        private int size;

        private static class Node<K, V> {
            K key;
            V value;
            Node<K, V> left, right, parent;

            Node(K key, V value) {
                this.key = key;
                this.value = value;
            }
        }

        /**
         * Search for key and splay to root.
         * 
         * Time Complexity: O(log n) amortized
         */
        public V get(K key) {
            root = splay(root, key);
            if (root == null || !root.key.equals(key)) {
                return null;
            }
            return root.value;
        }

        /**
         * Insert key-value pair and splay to root.
         * 
         * Time Complexity: O(log n) amortized
         */
        public void put(K key, V value) {
            if (root == null) {
                root = new Node<>(key, value);
                size++;
                return;
            }

            root = splay(root, key);

            if (root.key.equals(key)) {
                root.value = value;
                return;
            }

            Node<K, V> newNode = new Node<>(key, value);
            if (key.compareTo(root.key) < 0) {
                newNode.right = root;
                newNode.left = root.left;
                root.left = null;
            } else {
                newNode.left = root;
                newNode.right = root.right;
                root.right = null;
            }

            root = newNode;
            size++;
        }

        /**
         * Remove key and splay predecessor/successor to root.
         * 
         * Time Complexity: O(log n) amortized
         */
        public V remove(K key) {
            if (root == null) {
                return null;
            }

            root = splay(root, key);

            if (!root.key.equals(key)) {
                return null; // Key not found
            }

            V value = root.value;

            if (root.left == null) {
                root = root.right;
            } else {
                Node<K, V> rightSubtree = root.right;
                root = splay(root.left, key); // Splay max of left subtree
                root.right = rightSubtree;
            }

            size--;
            return value;
        }

        /**
         * Splay operation: Move node with key to root using rotations.
         * 
         * Three cases:
         * 1. Zig: Node is child of root (single rotation)
         * 2. Zig-Zig: Node and parent are both left/right children (double rotation same direction)
         * 3. Zig-Zag: Node is left child, parent is right child or vice versa (double rotation opposite)
         */
        private Node<K, V> splay(Node<K, V> node, K key) {
            if (node == null) {
                return null;
            }

            int cmp = key.compareTo(node.key);

            if (cmp < 0) {
                if (node.left == null) {
                    return node;
                }

                int cmp2 = key.compareTo(node.left.key);
                if (cmp2 < 0) {
                    // Zig-Zig (left-left)
                    node.left.left = splay(node.left.left, key);
                    node = rotateRight(node);
                } else if (cmp2 > 0) {
                    // Zig-Zag (left-right)
                    node.left.right = splay(node.left.right, key);
                    if (node.left.right != null) {
                        node.left = rotateLeft(node.left);
                    }
                }

                return (node.left == null) ? node : rotateRight(node);
            } else if (cmp > 0) {
                if (node.right == null) {
                    return node;
                }

                int cmp2 = key.compareTo(node.right.key);
                if (cmp2 > 0) {
                    // Zig-Zig (right-right)
                    node.right.right = splay(node.right.right, key);
                    node = rotateLeft(node);
                } else if (cmp2 < 0) {
                    // Zig-Zag (right-left)
                    node.right.left = splay(node.right.left, key);
                    if (node.right.left != null) {
                        node.right = rotateRight(node.right);
                    }
                }

                return (node.right == null) ? node : rotateLeft(node);
            } else {
                return node; // Key found
            }
        }

        /**
         * Right rotation:
         *       y              x
         *      / \            / \
         *     x   C    =>    A   y
         *    / \                / \
         *   A   B              B   C
         */
        private Node<K, V> rotateRight(Node<K, V> y) {
            Node<K, V> x = y.left;
            y.left = x.right;
            x.right = y;
            return x;
        }

        /**
         * Left rotation:
         *     x                y
         *    / \              / \
         *   A   y      =>    x   C
         *      / \          / \
         *     B   C        A   B
         */
        private Node<K, V> rotateLeft(Node<K, V> x) {
            Node<K, V> y = x.right;
            x.right = y.left;
            y.left = x;
            return y;
        }

        public int size() {
            return size;
        }

        public boolean isEmpty() {
            return size == 0;
        }
    }

    /**
     * Treap: Tree + Heap hybrid structure.
     * 
     * Key Idea:
     * - Binary search tree by key (maintains BST property)
     * - Max-heap by priority (parent priority > children priorities)
     * - Priorities assigned randomly → probabilistic balancing
     * 
     * Properties:
     * - For fixed priorities, treap structure is unique
     * - Random priorities → expected height O(log n)
     * - Rotations maintain both BST and heap properties
     * 
     * Time Complexity:
     * - Search/Insert/Delete: O(log n) expected
     * 
     * Space Complexity: O(n)
     * 
     * Real-world Usage:
     * - Persistent data structures (functional programming)
     * - Randomized algorithms requiring determinism
     * - Implicit treaps for sequence operations
     */
    public static class Treap<K extends Comparable<K>, V> {
        private Node<K, V> root;
        private int size;
        private final Random random;

        private static class Node<K, V> {
            K key;
            V value;
            int priority; // Random priority for heap property
            Node<K, V> left, right;

            Node(K key, V value, int priority) {
                this.key = key;
                this.value = value;
                this.priority = priority;
            }
        }

        public Treap() {
            this.random = new Random(42); // Fixed seed for determinism
        }

        /**
         * Search for key (standard BST search).
         * 
         * Time Complexity: O(log n) expected
         */
        public V get(K key) {
            Node<K, V> node = findNode(root, key);
            return (node != null) ? node.value : null;
        }

        private Node<K, V> findNode(Node<K, V> node, K key) {
            if (node == null) {
                return null;
            }

            int cmp = key.compareTo(node.key);
            if (cmp < 0) {
                return findNode(node.left, key);
            } else if (cmp > 0) {
                return findNode(node.right, key);
            } else {
                return node;
            }
        }

        /**
         * Insert key-value pair with random priority.
         * 
         * Algorithm:
         * 1. Insert like standard BST
         * 2. Rotate upward if priority > parent priority (maintain heap)
         * 
         * Time Complexity: O(log n) expected
         */
        public void put(K key, V value) {
            int priority = random.nextInt();
            root = insert(root, key, value, priority);
        }

        private Node<K, V> insert(Node<K, V> node, K key, V value, int priority) {
            if (node == null) {
                size++;
                return new Node<>(key, value, priority);
            }

            int cmp = key.compareTo(node.key);
            if (cmp < 0) {
                node.left = insert(node.left, key, value, priority);
                // Rotate right if left child has higher priority
                if (node.left.priority > node.priority) {
                    node = rotateRight(node);
                }
            } else if (cmp > 0) {
                node.right = insert(node.right, key, value, priority);
                // Rotate left if right child has higher priority
                if (node.right.priority > node.priority) {
                    node = rotateLeft(node);
                }
            } else {
                node.value = value; // Update existing key
            }

            return node;
        }

        /**
         * Remove key by rotating down to leaf.
         * 
         * Algorithm:
         * 1. Find node to delete
         * 2. Rotate node down (choose rotation to maintain heap property)
         * 3. Delete when node becomes leaf
         * 
         * Time Complexity: O(log n) expected
         */
        public V remove(K key) {
            if (root == null) {
                return null;
            }

            // Find value before deletion
            V value = get(key);
            if (value == null) {
                return null;
            }

            root = delete(root, key);
            size--;
            return value;
        }

        private Node<K, V> delete(Node<K, V> node, K key) {
            if (node == null) {
                return null;
            }

            int cmp = key.compareTo(node.key);
            if (cmp < 0) {
                node.left = delete(node.left, key);
            } else if (cmp > 0) {
                node.right = delete(node.right, key);
            } else {
                // Found node to delete
                if (node.left == null) {
                    return node.right;
                } else if (node.right == null) {
                    return node.left;
                } else {
                    // Rotate node down based on child priorities
                    if (node.left.priority > node.right.priority) {
                        node = rotateRight(node);
                        node.right = delete(node.right, key);
                    } else {
                        node = rotateLeft(node);
                        node.left = delete(node.left, key);
                    }
                }
            }

            return node;
        }

        private Node<K, V> rotateRight(Node<K, V> y) {
            Node<K, V> x = y.left;
            y.left = x.right;
            x.right = y;
            return x;
        }

        private Node<K, V> rotateLeft(Node<K, V> x) {
            Node<K, V> y = x.right;
            x.right = y.left;
            y.left = x;
            return y;
        }

        /**
         * Split treap into two treaps: (< key) and (>= key).
         * Useful for range operations.
         */
        public Pair<Treap<K, V>, Treap<K, V>> split(K key) {
            Pair<Node<K, V>, Node<K, V>> nodes = splitNode(root, key);
            Treap<K, V> left = new Treap<>();
            left.root = nodes.first;
            Treap<K, V> right = new Treap<>();
            right.root = nodes.second;
            return new Pair<>(left, right);
        }

        private Pair<Node<K, V>, Node<K, V>> splitNode(Node<K, V> node, K key) {
            if (node == null) {
                return new Pair<>(null, null);
            }

            if (key.compareTo(node.key) < 0) {
                Pair<Node<K, V>, Node<K, V>> split = splitNode(node.left, key);
                node.left = split.second;
                return new Pair<>(split.first, node);
            } else {
                Pair<Node<K, V>, Node<K, V>> split = splitNode(node.right, key);
                node.right = split.first;
                return new Pair<>(node, split.second);
            }
        }

        public int size() {
            return size;
        }

        public boolean isEmpty() {
            return size == 0;
        }
    }

    /**
     * AVL Tree: Strictly balanced binary search tree.
     * 
     * Key Idea:
     * - Height difference between left and right subtrees ≤ 1 (balance factor)
     * - After insertion/deletion, rebalance using rotations
     * - Four rotation types: LL, RR, LR, RL
     * 
     * Balance Factor: height(left) - height(right)
     * - Valid range: {-1, 0, 1}
     * - If |balance| > 1, rebalance needed
     * 
     * Time Complexity:
     * - Search/Insert/Delete: O(log n) worst case (guaranteed)
     * 
     * Space Complexity: O(n)
     * 
     * Real-world Usage:
     * - In-memory databases (guaranteed O(log n))
     * - File systems requiring strict balance
     * - Real-time systems (predictable performance)
     */
    public static class AVLTree<K extends Comparable<K>, V> {
        private Node<K, V> root;
        private int size;

        private static class Node<K, V> {
            K key;
            V value;
            Node<K, V> left, right;
            int height; // Height of subtree rooted at this node

            Node(K key, V value) {
                this.key = key;
                this.value = value;
                this.height = 1;
            }
        }

        /**
         * Search for key (standard BST search).
         * 
         * Time Complexity: O(log n) worst case
         */
        public V get(K key) {
            Node<K, V> node = findNode(root, key);
            return (node != null) ? node.value : null;
        }

        private Node<K, V> findNode(Node<K, V> node, K key) {
            if (node == null) {
                return null;
            }

            int cmp = key.compareTo(node.key);
            if (cmp < 0) {
                return findNode(node.left, key);
            } else if (cmp > 0) {
                return findNode(node.right, key);
            } else {
                return node;
            }
        }

        /**
         * Insert key-value pair and rebalance.
         * 
         * Algorithm:
         * 1. Insert like standard BST
         * 2. Update heights on path back to root
         * 3. Check balance factor at each node
         * 4. Perform rotations if |balance| > 1
         * 
         * Time Complexity: O(log n) worst case
         */
        public void put(K key, V value) {
            root = insert(root, key, value);
        }

        private Node<K, V> insert(Node<K, V> node, K key, V value) {
            // Standard BST insertion
            if (node == null) {
                size++;
                return new Node<>(key, value);
            }

            int cmp = key.compareTo(node.key);
            if (cmp < 0) {
                node.left = insert(node.left, key, value);
            } else if (cmp > 0) {
                node.right = insert(node.right, key, value);
            } else {
                node.value = value;
                return node;
            }

            // Update height
            updateHeight(node);

            // Check balance and rebalance if needed
            return rebalance(node);
        }

        /**
         * Remove key and rebalance.
         * 
         * Time Complexity: O(log n) worst case
         */
        public V remove(K key) {
            if (root == null) {
                return null;
            }

            V value = get(key);
            if (value == null) {
                return null;
            }

            root = delete(root, key);
            size--;
            return value;
        }

        private Node<K, V> delete(Node<K, V> node, K key) {
            if (node == null) {
                return null;
            }

            int cmp = key.compareTo(node.key);
            if (cmp < 0) {
                node.left = delete(node.left, key);
            } else if (cmp > 0) {
                node.right = delete(node.right, key);
            } else {
                // Found node to delete
                if (node.left == null) {
                    return node.right;
                } else if (node.right == null) {
                    return node.left;
                } else {
                    // Node has two children: find inorder successor
                    Node<K, V> successor = findMin(node.right);
                    node.key = successor.key;
                    node.value = successor.value;
                    node.right = delete(node.right, successor.key);
                }
            }

            // Update height and rebalance
            updateHeight(node);
            return rebalance(node);
        }

        /**
         * Rebalance node if balance factor > 1.
         * 
         * Four cases:
         * 1. Left-Left: Right rotation
         * 2. Right-Right: Left rotation
         * 3. Left-Right: Left rotation on left child, then right rotation
         * 4. Right-Left: Right rotation on right child, then left rotation
         */
        private Node<K, V> rebalance(Node<K, V> node) {
            int balance = getBalance(node);

            // Left-heavy
            if (balance > 1) {
                if (getBalance(node.left) < 0) {
                    // Left-Right case
                    node.left = rotateLeft(node.left);
                }
                // Left-Left case
                return rotateRight(node);
            }

            // Right-heavy
            if (balance < -1) {
                if (getBalance(node.right) > 0) {
                    // Right-Left case
                    node.right = rotateRight(node.right);
                }
                // Right-Right case
                return rotateLeft(node);
            }

            return node;
        }

        /**
         * Right rotation (Left-Left case):
         *       y              x
         *      / \            / \
         *     x   C    =>    A   y
         *    / \                / \
         *   A   B              B   C
         */
        private Node<K, V> rotateRight(Node<K, V> y) {
            Node<K, V> x = y.left;
            Node<K, V> B = x.right;

            x.right = y;
            y.left = B;

            updateHeight(y);
            updateHeight(x);

            return x;
        }

        /**
         * Left rotation (Right-Right case):
         *     x                y
         *    / \              / \
         *   A   y      =>    x   C
         *      / \          / \
         *     B   C        A   B
         */
        private Node<K, V> rotateLeft(Node<K, V> x) {
            Node<K, V> y = x.right;
            Node<K, V> B = y.left;

            y.left = x;
            x.right = B;

            updateHeight(x);
            updateHeight(y);

            return y;
        }

        private int height(Node<K, V> node) {
            return (node == null) ? 0 : node.height;
        }

        private void updateHeight(Node<K, V> node) {
            node.height = 1 + Math.max(height(node.left), height(node.right));
        }

        private int getBalance(Node<K, V> node) {
            return (node == null) ? 0 : height(node.left) - height(node.right);
        }

        private Node<K, V> findMin(Node<K, V> node) {
            while (node.left != null) {
                node = node.left;
            }
            return node;
        }

        public int size() {
            return size;
        }

        public boolean isEmpty() {
            return size == 0;
        }

        public int getHeight() {
            return height(root);
        }
    }

    /**
     * Utility class for pair values.
     */
    private static class Pair<F, S> {
        final F first;
        final S second;

        Pair(F first, S second) {
            this.first = first;
            this.second = second;
        }
    }
}
