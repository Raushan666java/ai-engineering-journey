package dsa.day55;

import java.util.*;

/**
 * Day 55: B-Tree Implementation (in-memory)
 *
 * - Supports insert and search for integer keys.
 * - Parameterized by minimum degree t (t >= 2). Each node stores between t-1 and 2t-1 keys.
 * - Implements splitChild and insertNonFull according to CLRS / standard algorithms.
 *
 * Complexity:
 * - Search: O(t * log_t N) ~ O(log N)
 * - Insert: O(t * log_t N) due to splits
 *
 * This implementation focuses on correctness, clarity, and testability (suitable for interview discussion).
 */
public class BTree {
    private final int t; // minimum degree
    private Node root;

    private static class Node {
        int n; // number of keys
        int[] keys;
        Node[] children;
        boolean leaf;

        Node(int t, boolean leaf) {
            this.leaf = leaf;
            this.keys = new int[2 * t - 1];
            this.children = new Node[2 * t];
            this.n = 0;
        }

        int findKey(int k) {
            int idx = 0;
            while (idx < n && keys[idx] < k) idx++;
            return idx;
        }
    }

    public BTree(int t) {
        if (t < 2) throw new IllegalArgumentException("BTree minimum degree must be >= 2");
        this.t = t;
        this.root = new Node(t, true);
    }

    public boolean search(int k) { return search(root, k) != null; }

    private Node search(Node x, int k) {
        int i = 0;
        while (i < x.n && k > x.keys[i]) i++;
        if (i < x.n && x.keys[i] == k) return x;
        if (x.leaf) return null;
        return search(x.children[i], k);
    }

    public void insert(int k) {
        Node r = root;
        if (r.n == 2 * t - 1) {
            Node s = new Node(t, false);
            root = s;
            s.children[0] = r;
            splitChild(s, 0, r);
            insertNonFull(s, k);
        } else insertNonFull(r, k);
    }

    private void splitChild(Node parent, int i, Node y) {
        Node z = new Node(t, y.leaf);
        z.n = t - 1;
        for (int j = 0; j < t - 1; j++) z.keys[j] = y.keys[j + t];
        if (!y.leaf) for (int j = 0; j < t; j++) z.children[j] = y.children[j + t];
        y.n = t - 1;

        for (int j = parent.n; j >= i + 1; j--) parent.children[j + 1] = parent.children[j];
        parent.children[i + 1] = z;

        for (int j = parent.n - 1; j >= i; j--) parent.keys[j + 1] = parent.keys[j];
        parent.keys[i] = y.keys[t - 1];
        parent.n = parent.n + 1;
    }

    private void insertNonFull(Node x, int k) {
        int i = x.n - 1;
        if (x.leaf) {
            while (i >= 0 && x.keys[i] > k) { x.keys[i + 1] = x.keys[i]; i--; }
            x.keys[i + 1] = k;
            x.n = x.n + 1;
        } else {
            while (i >= 0 && x.keys[i] > k) i--;
            i++;
            if (x.children[i].n == 2 * t - 1) {
                splitChild(x, i, x.children[i]);
                if (x.keys[i] < k) i++;
            }
            insertNonFull(x.children[i], k);
        }
    }

    // For testing: inorder traversal of keys
    public List<Integer> toList() {
        List<Integer> res = new ArrayList<>();
        traverse(root, res);
        return res;
    }

    private void traverse(Node x, List<Integer> res) {
        int i;
        for (i = 0; i < x.n; i++) {
            if (!x.leaf) traverse(x.children[i], res);
            res.add(x.keys[i]);
        }
        if (!x.leaf) traverse(x.children[i], res);
    }
}
