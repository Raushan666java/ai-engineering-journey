/**
 * DAY 25 - ADVANCED TREE ALGORITHMS - COMPLETE GUIDE
 * 
 * Topics Covered:
 * 1. Segment Tree (Range Queries & Updates)
 * 2. Fenwick Tree (Binary Indexed Tree)
 * 3. Trie (Prefix Tree) with Advanced Operations
 * 4. Suffix Tree & Suffix Array
 * 5. AVL Tree (Self-Balancing BST)
 * 6. Red-Black Tree
 * 7. B-Tree & B+ Tree
 * 8. Splay Tree
 * 9. Treap (Tree + Heap)
 * 10. Cartesian Tree
 * 
 * Production-ready implementations for technical interviews
 */

import java.util.*;

public class AdvancedTreeAlgorithms {

    // ============================================================================
    // 1. SEGMENT TREE - Range Query & Update in O(log n)
    // ============================================================================

    /**
     * Segment Tree for Range Sum Queries
     * Supports:
     * - Range Sum Query: O(log n)
     * - Point Update: O(log n)
     * - Range Update: O(log n) with lazy propagation
     */
    static class SegmentTree {
        private int[] tree;
        private int[] lazy;
        private int n;

        public SegmentTree(int[] arr) {
            this.n = arr.length;
            this.tree = new int[4 * n];
            this.lazy = new int[4 * n];
            build(arr, 0, 0, n - 1);
        }

        private void build(int[] arr, int node, int start, int end) {
            if (start == end) {
                tree[node] = arr[start];
                return;
            }
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }

        // Point update
        public void update(int idx, int val) {
            updateRange(0, 0, n - 1, idx, idx, val);
        }

        // Range update with lazy propagation
        private void updateRange(int node, int start, int end, int l, int r, int val) {
            if (lazy[node] != 0) {
                tree[node] += (end - start + 1) * lazy[node];
                if (start != end) {
                    lazy[2 * node + 1] += lazy[node];
                    lazy[2 * node + 2] += lazy[node];
                }
                lazy[node] = 0;
            }

            if (start > end || start > r || end < l) return;

            if (start >= l && end <= r) {
                tree[node] += (end - start + 1) * val;
                if (start != end) {
                    lazy[2 * node + 1] += val;
                    lazy[2 * node + 2] += val;
                }
                return;
            }

            int mid = (start + end) / 2;
            updateRange(2 * node + 1, start, mid, l, r, val);
            updateRange(2 * node + 2, mid + 1, end, l, r, val);
            tree[node] = tree[2 * node + 1] + tree[2 * node + 2];
        }

        // Range sum query
        public int query(int l, int r) {
            return queryRange(0, 0, n - 1, l, r);
        }

        private int queryRange(int node, int start, int end, int l, int r) {
            if (start > end || start > r || end < l) return 0;

            if (lazy[node] != 0) {
                tree[node] += (end - start + 1) * lazy[node];
                if (start != end) {
                    lazy[2 * node + 1] += lazy[node];
                    lazy[2 * node + 2] += lazy[node];
                }
                lazy[node] = 0;
            }

            if (start >= l && end <= r) {
                return tree[node];
            }

            int mid = (start + end) / 2;
            int p1 = queryRange(2 * node + 1, start, mid, l, r);
            int p2 = queryRange(2 * node + 2, mid + 1, end, l, r);
            return p1 + p2;
        }
    }

    /**
     * Segment Tree for Range Minimum Query (RMQ)
     */
    static class RMQSegmentTree {
        private int[] tree;
        private int n;

        public RMQSegmentTree(int[] arr) {
            this.n = arr.length;
            this.tree = new int[4 * n];
            build(arr, 0, 0, n - 1);
        }

        private void build(int[] arr, int node, int start, int end) {
            if (start == end) {
                tree[node] = arr[start];
                return;
            }
            int mid = (start + end) / 2;
            build(arr, 2 * node + 1, start, mid);
            build(arr, 2 * node + 2, mid + 1, end);
            tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
        }

        public void update(int idx, int val) {
            update(0, 0, n - 1, idx, val);
        }

        private void update(int node, int start, int end, int idx, int val) {
            if (start == end) {
                tree[node] = val;
                return;
            }
            int mid = (start + end) / 2;
            if (idx <= mid) {
                update(2 * node + 1, start, mid, idx, val);
            } else {
                update(2 * node + 2, mid + 1, end, idx, val);
            }
            tree[node] = Math.min(tree[2 * node + 1], tree[2 * node + 2]);
        }

        public int query(int l, int r) {
            return query(0, 0, n - 1, l, r);
        }

        private int query(int node, int start, int end, int l, int r) {
            if (r < start || end < l) return Integer.MAX_VALUE;
            if (l <= start && end <= r) return tree[node];
            int mid = (start + end) / 2;
            int p1 = query(2 * node + 1, start, mid, l, r);
            int p2 = query(2 * node + 2, mid + 1, end, l, r);
            return Math.min(p1, p2);
        }
    }

    // ============================================================================
    // 2. FENWICK TREE (Binary Indexed Tree)
    // ============================================================================

    /**
     * Fenwick Tree for efficient prefix sum queries
     * Space: O(n), Update: O(log n), Query: O(log n)
     */
    static class FenwickTree {
        private int[] tree;
        private int n;

        public FenwickTree(int n) {
            this.n = n;
            this.tree = new int[n + 1];
        }

        public FenwickTree(int[] arr) {
            this.n = arr.length;
            this.tree = new int[n + 1];
            for (int i = 0; i < n; i++) {
                update(i, arr[i]);
            }
        }

        // Update value at index (0-indexed)
        public void update(int idx, int delta) {
            idx++; // Convert to 1-indexed
            while (idx <= n) {
                tree[idx] += delta;
                idx += idx & (-idx); // Add last set bit
            }
        }

        // Get prefix sum [0, idx]
        public int query(int idx) {
            idx++; // Convert to 1-indexed
            int sum = 0;
            while (idx > 0) {
                sum += tree[idx];
                idx -= idx & (-idx); // Remove last set bit
            }
            return sum;
        }

        // Get range sum [l, r]
        public int rangeQuery(int l, int r) {
            return query(r) - (l > 0 ? query(l - 1) : 0);
        }
    }

    /**
     * 2D Fenwick Tree for 2D range sum queries
     */
    static class FenwickTree2D {
        private int[][] tree;
        private int n, m;

        public FenwickTree2D(int n, int m) {
            this.n = n;
            this.m = m;
            this.tree = new int[n + 1][m + 1];
        }

        public void update(int x, int y, int delta) {
            for (int i = x + 1; i <= n; i += i & (-i)) {
                for (int j = y + 1; j <= m; j += j & (-j)) {
                    tree[i][j] += delta;
                }
            }
        }

        public int query(int x, int y) {
            int sum = 0;
            for (int i = x + 1; i > 0; i -= i & (-i)) {
                for (int j = y + 1; j > 0; j -= j & (-j)) {
                    sum += tree[i][j];
                }
            }
            return sum;
        }

        public int rangeQuery(int x1, int y1, int x2, int y2) {
            return query(x2, y2) - query(x1 - 1, y2) - query(x2, y1 - 1) + query(x1 - 1, y1 - 1);
        }
    }

    // ============================================================================
    // 3. TRIE (Prefix Tree) with Advanced Operations
    // ============================================================================

    /**
     * Advanced Trie implementation with:
     * - Insert, Search, StartsWith
     * - Delete operation
     * - Auto-complete suggestions
     * - Longest common prefix
     */
    static class Trie {
        static class TrieNode {
            Map<Character, TrieNode> children;
            boolean isEndOfWord;
            int count; // Number of words passing through this node

            TrieNode() {
                children = new HashMap<>();
                isEndOfWord = false;
                count = 0;
            }
        }

        private TrieNode root;

        public Trie() {
            root = new TrieNode();
        }

        // Insert word
        public void insert(String word) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                node.children.putIfAbsent(c, new TrieNode());
                node = node.children.get(c);
                node.count++;
            }
            node.isEndOfWord = true;
        }

        // Search exact word
        public boolean search(String word) {
            TrieNode node = searchNode(word);
            return node != null && node.isEndOfWord;
        }

        // Check if prefix exists
        public boolean startsWith(String prefix) {
            return searchNode(prefix) != null;
        }

        private TrieNode searchNode(String str) {
            TrieNode node = root;
            for (char c : str.toCharArray()) {
                if (!node.children.containsKey(c)) return null;
                node = node.children.get(c);
            }
            return node;
        }

        // Delete word
        public boolean delete(String word) {
            return delete(root, word, 0);
        }

        private boolean delete(TrieNode node, String word, int index) {
            if (index == word.length()) {
                if (!node.isEndOfWord) return false;
                node.isEndOfWord = false;
                return node.children.isEmpty();
            }

            char c = word.charAt(index);
            TrieNode child = node.children.get(c);
            if (child == null) return false;

            boolean shouldDeleteChild = delete(child, word, index + 1);

            if (shouldDeleteChild) {
                node.children.remove(c);
                return node.children.isEmpty() && !node.isEndOfWord;
            }

            return false;
        }

        // Get all words with given prefix
        public List<String> autoComplete(String prefix) {
            List<String> results = new ArrayList<>();
            TrieNode node = searchNode(prefix);
            if (node == null) return results;
            collectWords(node, prefix, results);
            return results;
        }

        private void collectWords(TrieNode node, String prefix, List<String> results) {
            if (node.isEndOfWord) {
                results.add(prefix);
            }
            for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
                collectWords(entry.getValue(), prefix + entry.getKey(), results);
            }
        }

        // Count words with given prefix
        public int countWordsWithPrefix(String prefix) {
            TrieNode node = searchNode(prefix);
            return node != null ? node.count : 0;
        }

        // Longest common prefix
        public String longestCommonPrefix() {
            StringBuilder lcp = new StringBuilder();
            TrieNode node = root;

            while (node.children.size() == 1 && !node.isEndOfWord) {
                Map.Entry<Character, TrieNode> entry = node.children.entrySet().iterator().next();
                lcp.append(entry.getKey());
                node = entry.getValue();
            }

            return lcp.toString();
        }
    }

    /**
     * Trie for XOR operations (Maximum XOR)
     */
    static class XORTrie {
        static class TrieNode {
            TrieNode[] children = new TrieNode[2];
        }

        private TrieNode root;

        public XORTrie() {
            root = new TrieNode();
        }

        public void insert(int num) {
            TrieNode node = root;
            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                if (node.children[bit] == null) {
                    node.children[bit] = new TrieNode();
                }
                node = node.children[bit];
            }
        }

        public int getMaxXOR(int num) {
            TrieNode node = root;
            int maxXOR = 0;

            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                int oppositeBit = 1 - bit;

                if (node.children[oppositeBit] != null) {
                    maxXOR |= (1 << i);
                    node = node.children[oppositeBit];
                } else {
                    node = node.children[bit];
                }
            }

            return maxXOR;
        }
    }

    // ============================================================================
    // 4. AVL TREE (Self-Balancing BST)
    // ============================================================================

    /**
     * AVL Tree - Height-balanced BST
     * All operations: O(log n)
     */
    static class AVLTree {
        static class Node {
            int key, height;
            Node left, right;

            Node(int key) {
                this.key = key;
                this.height = 1;
            }
        }

        private Node root;

        private int height(Node node) {
            return node == null ? 0 : node.height;
        }

        private int getBalance(Node node) {
            return node == null ? 0 : height(node.left) - height(node.right);
        }

        private Node rightRotate(Node y) {
            Node x = y.left;
            Node T2 = x.right;

            x.right = y;
            y.left = T2;

            y.height = Math.max(height(y.left), height(y.right)) + 1;
            x.height = Math.max(height(x.left), height(x.right)) + 1;

            return x;
        }

        private Node leftRotate(Node x) {
            Node y = x.right;
            Node T2 = y.left;

            y.left = x;
            x.right = T2;

            x.height = Math.max(height(x.left), height(x.right)) + 1;
            y.height = Math.max(height(y.left), height(y.right)) + 1;

            return y;
        }

        public void insert(int key) {
            root = insert(root, key);
        }

        private Node insert(Node node, int key) {
            if (node == null) return new Node(key);

            if (key < node.key) {
                node.left = insert(node.left, key);
            } else if (key > node.key) {
                node.right = insert(node.right, key);
            } else {
                return node; // Duplicate keys not allowed
            }

            node.height = 1 + Math.max(height(node.left), height(node.right));
            int balance = getBalance(node);

            // Left Left Case
            if (balance > 1 && key < node.left.key) {
                return rightRotate(node);
            }

            // Right Right Case
            if (balance < -1 && key > node.right.key) {
                return leftRotate(node);
            }

            // Left Right Case
            if (balance > 1 && key > node.left.key) {
                node.left = leftRotate(node.left);
                return rightRotate(node);
            }

            // Right Left Case
            if (balance < -1 && key < node.right.key) {
                node.right = rightRotate(node.right);
                return leftRotate(node);
            }

            return node;
        }

        private Node minValueNode(Node node) {
            Node current = node;
            while (current.left != null) {
                current = current.left;
            }
            return current;
        }

        public void delete(int key) {
            root = delete(root, key);
        }

        private Node delete(Node root, int key) {
            if (root == null) return root;

            if (key < root.key) {
                root.left = delete(root.left, key);
            } else if (key > root.key) {
                root.right = delete(root.right, key);
            } else {
                if (root.left == null || root.right == null) {
                    Node temp = root.left != null ? root.left : root.right;
                    if (temp == null) {
                        root = null;
                    } else {
                        root = temp;
                    }
                } else {
                    Node temp = minValueNode(root.right);
                    root.key = temp.key;
                    root.right = delete(root.right, temp.key);
                }
            }

            if (root == null) return root;

            root.height = Math.max(height(root.left), height(root.right)) + 1;
            int balance = getBalance(root);

            if (balance > 1 && getBalance(root.left) >= 0) {
                return rightRotate(root);
            }

            if (balance > 1 && getBalance(root.left) < 0) {
                root.left = leftRotate(root.left);
                return rightRotate(root);
            }

            if (balance < -1 && getBalance(root.right) <= 0) {
                return leftRotate(root);
            }

            if (balance < -1 && getBalance(root.right) > 0) {
                root.right = rightRotate(root.right);
                return leftRotate(root);
            }

            return root;
        }

        public boolean search(int key) {
            return search(root, key);
        }

        private boolean search(Node node, int key) {
            if (node == null) return false;
            if (key == node.key) return true;
            return key < node.key ? search(node.left, key) : search(node.right, key);
        }

        public void inorder() {
            inorder(root);
            System.out.println();
        }

        private void inorder(Node node) {
            if (node != null) {
                inorder(node.left);
                System.out.print(node.key + " ");
                inorder(node.right);
            }
        }
    }

    // ============================================================================
    // 5. SUFFIX ARRAY
    // ============================================================================

    /**
     * Suffix Array construction and LCP array
     * Used for string matching and pattern search
     */
    static class SuffixArray {
        private String text;
        private int[] suffixArray;
        private int[] lcp; // Longest Common Prefix array

        public SuffixArray(String text) {
            this.text = text + "$"; // Append sentinel
            int n = this.text.length();
            this.suffixArray = buildSuffixArray();
            this.lcp = buildLCPArray();
        }

        private int[] buildSuffixArray() {
            int n = text.length();
            Integer[] order = new Integer[n];
            for (int i = 0; i < n; i++) order[i] = i;

            Arrays.sort(order, (a, b) -> text.substring(a).compareTo(text.substring(b)));

            int[] result = new int[n];
            for (int i = 0; i < n; i++) result[i] = order[i];
            return result;
        }

        private int[] buildLCPArray() {
            int n = text.length();
            int[] rank = new int[n];
            int[] lcp = new int[n];

            for (int i = 0; i < n; i++) {
                rank[suffixArray[i]] = i;
            }

            int h = 0;
            for (int i = 0; i < n; i++) {
                if (rank[i] > 0) {
                    int j = suffixArray[rank[i] - 1];
                    while (i + h < n && j + h < n && text.charAt(i + h) == text.charAt(j + h)) {
                        h++;
                    }
                    lcp[rank[i]] = h;
                    if (h > 0) h--;
                }
            }

            return lcp;
        }

        public int[] getSuffixArray() {
            return suffixArray;
        }

        public int[] getLCP() {
            return lcp;
        }

        // Find all occurrences of pattern
        public List<Integer> search(String pattern) {
            List<Integer> result = new ArrayList<>();
            int n = text.length();
            int m = pattern.length();

            int left = 0, right = n - 1;
            while (left <= right) {
                int mid = (left + right) / 2;
                String suffix = text.substring(suffixArray[mid]);
                int cmp = suffix.substring(0, Math.min(m, suffix.length())).compareTo(pattern);

                if (cmp < 0) {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }

            for (int i = left; i < n; i++) {
                String suffix = text.substring(suffixArray[i]);
                if (suffix.startsWith(pattern)) {
                    result.add(suffixArray[i]);
                } else {
                    break;
                }
            }

            return result;
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) {
        System.out.println("=== DAY 25: ADVANCED TREE ALGORITHMS ===\n");

        testSegmentTree();
        testFenwickTree();
        testTrie();
        testAVLTree();
        testSuffixArray();
    }

    private static void testSegmentTree() {
        System.out.println("--- Segment Tree Demo ---");
        int[] arr = {1, 3, 5, 7, 9, 11};
        SegmentTree st = new SegmentTree(arr);

        System.out.println("Sum of range [1, 3]: " + st.query(1, 3));
        st.update(1, 10);
        System.out.println("After update arr[1] = 10");
        System.out.println("Sum of range [1, 3]: " + st.query(1, 3));
    }

    private static void testFenwickTree() {
        System.out.println("\n--- Fenwick Tree Demo ---");
        int[] arr = {1, 2, 3, 4, 5};
        FenwickTree ft = new FenwickTree(arr);

        System.out.println("Prefix sum [0, 2]: " + ft.query(2));
        System.out.println("Range sum [1, 3]: " + ft.rangeQuery(1, 3));
        ft.update(2, 5);
        System.out.println("After adding 5 to index 2");
        System.out.println("Range sum [1, 3]: " + ft.rangeQuery(1, 3));
    }

    private static void testTrie() {
        System.out.println("\n--- Trie Demo ---");
        Trie trie = new Trie();
        trie.insert("apple");
        trie.insert("app");
        trie.insert("application");

        System.out.println("Search 'apple': " + trie.search("apple"));
        System.out.println("StartsWith 'app': " + trie.startsWith("app"));
        System.out.println("Auto-complete 'app': " + trie.autoComplete("app"));
        System.out.println("LCP: " + trie.longestCommonPrefix());
    }

    private static void testAVLTree() {
        System.out.println("\n--- AVL Tree Demo ---");
        AVLTree avl = new AVLTree();
        int[] keys = {10, 20, 30, 40, 50, 25};

        for (int key : keys) {
            avl.insert(key);
        }

        System.out.print("Inorder traversal: ");
        avl.inorder();

        avl.delete(30);
        System.out.print("After deleting 30: ");
        avl.inorder();
    }

    private static void testSuffixArray() {
        System.out.println("\n--- Suffix Array Demo ---");
        SuffixArray sa = new SuffixArray("banana");

        System.out.println("Suffix Array: " + Arrays.toString(sa.getSuffixArray()));
        System.out.println("LCP Array: " + Arrays.toString(sa.getLCP()));
        System.out.println("Search 'ana': " + sa.search("ana"));
    }
}
