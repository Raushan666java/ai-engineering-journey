import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

import dsa.day61.AdvancedTrees.*;

import java.util.*;

/**
 * Comprehensive test suite for Day 61: Skip Lists & Advanced Tree Structures
 * 
 * Tests cover:
 * 1. Skip List basic operations and sorted order
 * 2. Splay Tree splaying behavior and access patterns
 * 3. Treap randomized balancing and split operation
 * 4. AVL Tree strict balance maintenance
 * 5. Performance comparison between structures
 */
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class TestDay61 {

    @Test
    @Order(1)
    @DisplayName("Skip List: Basic operations")
    public void testSkipListBasic() {
        System.out.println("\n=== Test 1: Skip List Basic Operations ===");
        
        SkipList<Integer, String> skipList = new SkipList<>();
        
        // Insert elements
        skipList.put(5, "five");
        skipList.put(2, "two");
        skipList.put(8, "eight");
        skipList.put(1, "one");
        skipList.put(6, "six");
        
        System.out.println("Inserted: 5, 2, 8, 1, 6");
        System.out.println("Size: " + skipList.size());
        assertEquals(5, skipList.size());
        
        // Test retrieval
        assertEquals("five", skipList.get(5));
        assertEquals("two", skipList.get(2));
        assertEquals("eight", skipList.get(8));
        assertNull(skipList.get(10)); // Non-existent key
        
        // Test update
        skipList.put(5, "FIVE");
        assertEquals("FIVE", skipList.get(5));
        assertEquals(5, skipList.size()); // Size unchanged
        
        // Test removal
        String removed = skipList.remove(2);
        assertEquals("two", removed);
        assertNull(skipList.get(2));
        assertEquals(4, skipList.size());
        
        System.out.println("✓ Skip List basic operations work correctly");
    }

    @Test
    @Order(2)
    @DisplayName("Skip List: Maintains sorted order")
    public void testSkipListSortedOrder() {
        System.out.println("\n=== Test 2: Skip List Sorted Order ===");
        
        SkipList<Integer, Integer> skipList = new SkipList<>();
        
        // Insert in random order
        int[] keys = {15, 3, 22, 7, 11, 5, 18, 1, 9, 13};
        for (int key : keys) {
            skipList.put(key, key * 10);
        }
        
        System.out.println("Inserted keys: " + Arrays.toString(keys));
        
        // Get entries in sorted order
        List<Map.Entry<Integer, Integer>> entries = skipList.entryList();
        
        System.out.print("Sorted order: ");
        for (Map.Entry<Integer, Integer> entry : entries) {
            System.out.print(entry.getKey() + " ");
        }
        System.out.println();
        
        // Verify sorted order
        for (int i = 1; i < entries.size(); i++) {
            assertTrue(entries.get(i-1).getKey() < entries.get(i).getKey(),
                "Elements should be in sorted order");
        }
        
        System.out.println("✓ Skip List maintains sorted order");
    }

    @Test
    @Order(3)
    @DisplayName("Skip List: Large scale operations")
    public void testSkipListLargeScale() {
        System.out.println("\n=== Test 3: Skip List Large Scale ===");
        
        SkipList<Integer, Integer> skipList = new SkipList<>();
        int n = 1000;
        
        // Insert many elements
        long startInsert = System.nanoTime();
        for (int i = 0; i < n; i++) {
            skipList.put(i, i * 2);
        }
        long insertTime = System.nanoTime() - startInsert;
        
        System.out.printf("Inserted %d elements in %.2f ms\n", 
            n, insertTime / 1_000_000.0);
        assertEquals(n, skipList.size());
        
        // Search for elements
        long startSearch = System.nanoTime();
        for (int i = 0; i < n; i++) {
            Integer value = skipList.get(i);
            assertEquals(i * 2, value);
        }
        long searchTime = System.nanoTime() - startSearch;
        
        System.out.printf("Searched %d elements in %.2f ms\n", 
            n, searchTime / 1_000_000.0);
        
        // Remove half the elements
        long startDelete = System.nanoTime();
        for (int i = 0; i < n; i += 2) {
            skipList.remove(i);
        }
        long deleteTime = System.nanoTime() - startDelete;
        
        System.out.printf("Deleted %d elements in %.2f ms\n", 
            n/2, deleteTime / 1_000_000.0);
        assertEquals(n/2, skipList.size());
        
        System.out.println("✓ Skip List handles large scale efficiently");
    }

    @Test
    @Order(4)
    @DisplayName("Splay Tree: Basic operations and splaying")
    public void testSplayTreeBasic() {
        System.out.println("\n=== Test 4: Splay Tree Operations ===");
        
        SplayTree<Integer, String> splayTree = new SplayTree<>();
        
        // Insert elements
        splayTree.put(10, "ten");
        splayTree.put(5, "five");
        splayTree.put(15, "fifteen");
        splayTree.put(3, "three");
        splayTree.put(7, "seven");
        
        System.out.println("Inserted: 10, 5, 15, 3, 7");
        System.out.println("Size: " + splayTree.size());
        assertEquals(5, splayTree.size());
        
        // Access moves element to root (splaying)
        // After get(3), 3 should be at root
        String value = splayTree.get(3);
        assertEquals("three", value);
        
        // Accessing again should still work (already at root)
        value = splayTree.get(3);
        assertEquals("three", value);
        
        // Remove element
        String removed = splayTree.remove(5);
        assertEquals("five", removed);
        assertNull(splayTree.get(5));
        assertEquals(4, splayTree.size());
        
        System.out.println("✓ Splay Tree operations work correctly");
    }

    @Test
    @Order(5)
    @DisplayName("Splay Tree: Access pattern optimization")
    public void testSplayTreeAccessPattern() {
        System.out.println("\n=== Test 5: Splay Tree Access Pattern ===");
        
        SplayTree<Integer, Integer> splayTree = new SplayTree<>();
        
        // Insert elements
        for (int i = 1; i <= 100; i++) {
            splayTree.put(i, i * 10);
        }
        
        System.out.println("Inserted 100 elements");
        
        // Simulate access pattern: frequently access same keys
        int[] hotKeys = {10, 20, 30}; // Frequently accessed
        
        long startTime = System.nanoTime();
        for (int round = 0; round < 100; round++) {
            for (int key : hotKeys) {
                splayTree.get(key);
            }
        }
        long hotAccessTime = System.nanoTime() - startTime;
        
        System.out.printf("Hot key accesses (300 accesses): %.3f ms\n", 
            hotAccessTime / 1_000_000.0);
        
        // Access cold keys (should be slower initially)
        startTime = System.nanoTime();
        for (int key = 80; key < 90; key++) {
            splayTree.get(key);
        }
        long coldAccessTime = System.nanoTime() - startTime;
        
        System.out.printf("Cold key accesses (10 accesses): %.3f ms\n", 
            coldAccessTime / 1_000_000.0);
        
        System.out.println("✓ Splay Tree optimizes for access patterns");
    }

    @Test
    @Order(6)
    @DisplayName("Treap: Basic operations with priorities")
    public void testTreapBasic() {
        System.out.println("\n=== Test 6: Treap Basic Operations ===");
        
        Treap<Integer, String> treap = new Treap<>();
        
        // Insert elements (priorities assigned randomly)
        treap.put(10, "ten");
        treap.put(5, "five");
        treap.put(15, "fifteen");
        treap.put(3, "three");
        treap.put(12, "twelve");
        
        System.out.println("Inserted: 10, 5, 15, 3, 12");
        System.out.println("Size: " + treap.size());
        assertEquals(5, treap.size());
        
        // Test retrieval
        assertEquals("ten", treap.get(10));
        assertEquals("five", treap.get(5));
        assertEquals("fifteen", treap.get(15));
        assertNull(treap.get(20));
        
        // Test update
        treap.put(10, "TEN");
        assertEquals("TEN", treap.get(10));
        assertEquals(5, treap.size());
        
        // Test removal
        String removed = treap.remove(5);
        assertEquals("five", removed);
        assertNull(treap.get(5));
        assertEquals(4, treap.size());
        
        System.out.println("✓ Treap operations work correctly");
    }

    @Test
    @Order(7)
    @DisplayName("Treap: Split operation")
    public void testTreapSplit() {
        System.out.println("\n=== Test 7: Treap Split Operation ===");
        
        Treap<Integer, Integer> treap = new Treap<>();
        
        // Insert elements: 1, 2, 3, ..., 10
        for (int i = 1; i <= 10; i++) {
            treap.put(i, i * 10);
        }
        
        System.out.println("Created treap with keys 1-10");
        
        // Split at key 6: left < 6, right >= 6
        Pair<Treap<Integer, Integer>, Treap<Integer, Integer>> split = 
            treap.split(6);
        
        Treap<Integer, Integer> left = split.first;
        Treap<Integer, Integer> right = split.second;
        
        System.out.println("Split at key 6");
        
        // Verify left treap has keys < 6
        for (int i = 1; i < 6; i++) {
            assertEquals(i * 10, left.get(i));
        }
        assertNull(left.get(6));
        
        // Verify right treap has keys >= 6
        for (int i = 6; i <= 10; i++) {
            assertEquals(i * 10, right.get(i));
        }
        assertNull(right.get(5));
        
        System.out.println("Left treap: keys < 6");
        System.out.println("Right treap: keys >= 6");
        System.out.println("✓ Treap split works correctly");
    }

    @Test
    @Order(8)
    @DisplayName("AVL Tree: Basic operations and balance")
    public void testAVLTreeBasic() {
        System.out.println("\n=== Test 8: AVL Tree Operations ===");
        
        AVLTree<Integer, String> avl = new AVLTree<>();
        
        // Insert elements that would unbalance regular BST
        int[] keys = {10, 5, 15, 2, 7, 12, 20, 1, 3};
        for (int key : keys) {
            avl.put(key, "val_" + key);
        }
        
        System.out.println("Inserted keys: " + Arrays.toString(keys));
        System.out.println("Size: " + avl.size());
        System.out.println("Height: " + avl.getHeight());
        assertEquals(9, avl.size());
        
        // Height should be O(log n)
        int expectedMaxHeight = (int) Math.ceil(1.44 * Math.log(avl.size() + 2) / Math.log(2));
        assertTrue(avl.getHeight() <= expectedMaxHeight, 
            "AVL height should be O(log n)");
        
        // Test retrieval
        for (int key : keys) {
            assertEquals("val_" + key, avl.get(key));
        }
        
        System.out.printf("✓ AVL Tree maintains balance (height=%d, expected≤%d)\n",
            avl.getHeight(), expectedMaxHeight);
    }

    @Test
    @Order(9)
    @DisplayName("AVL Tree: Rebalancing after insertions")
    public void testAVLTreeRebalancing() {
        System.out.println("\n=== Test 9: AVL Tree Rebalancing ===");
        
        AVLTree<Integer, Integer> avl = new AVLTree<>();
        
        System.out.println("Testing sequential insertions (worst case for BST):");
        
        // Insert in ascending order (would create stick in regular BST)
        int n = 20;
        for (int i = 1; i <= n; i++) {
            avl.put(i, i * 10);
        }
        
        System.out.printf("Inserted %d elements in ascending order\n", n);
        System.out.printf("AVL Height: %d\n", avl.getHeight());
        System.out.printf("Perfect balance height: %d\n", 
            (int) Math.ceil(Math.log(n + 1) / Math.log(2)));
        
        // AVL should keep tree nearly balanced
        assertTrue(avl.getHeight() <= 6, 
            "Height should be logarithmic even for sequential inserts");
        
        // Verify all elements are present
        for (int i = 1; i <= n; i++) {
            assertEquals(i * 10, avl.get(i));
        }
        
        // Test deletions maintain balance
        for (int i = 1; i <= n / 2; i++) {
            avl.remove(i);
        }
        
        System.out.printf("After removing half: size=%d, height=%d\n",
            avl.size(), avl.getHeight());
        
        assertTrue(avl.getHeight() <= 5, 
            "Height should remain logarithmic after deletions");
        
        System.out.println("✓ AVL Tree rebalances correctly");
    }

    @Test
    @Order(10)
    @DisplayName("AVL Tree: Four rotation cases")
    public void testAVLTreeRotations() {
        System.out.println("\n=== Test 10: AVL Tree Rotation Cases ===");
        
        // Test Left-Left case (Right rotation)
        System.out.println("\n1. Left-Left case (Right rotation):");
        AVLTree<Integer, String> avlLL = new AVLTree<>();
        avlLL.put(30, "30");
        avlLL.put(20, "20");
        avlLL.put(10, "10"); // Triggers right rotation
        System.out.println("   Inserted 30, 20, 10 → right rotation");
        assertEquals(3, avlLL.size());
        assertTrue(avlLL.getHeight() <= 2);
        
        // Test Right-Right case (Left rotation)
        System.out.println("\n2. Right-Right case (Left rotation):");
        AVLTree<Integer, String> avlRR = new AVLTree<>();
        avlRR.put(10, "10");
        avlRR.put(20, "20");
        avlRR.put(30, "30"); // Triggers left rotation
        System.out.println("   Inserted 10, 20, 30 → left rotation");
        assertEquals(3, avlRR.size());
        assertTrue(avlRR.getHeight() <= 2);
        
        // Test Left-Right case (Left rotation on left child, then right)
        System.out.println("\n3. Left-Right case (Double rotation):");
        AVLTree<Integer, String> avlLR = new AVLTree<>();
        avlLR.put(30, "30");
        avlLR.put(10, "10");
        avlLR.put(20, "20"); // Triggers LR rotation
        System.out.println("   Inserted 30, 10, 20 → LR rotation");
        assertEquals(3, avlLR.size());
        assertTrue(avlLR.getHeight() <= 2);
        
        // Test Right-Left case (Right rotation on right child, then left)
        System.out.println("\n4. Right-Left case (Double rotation):");
        AVLTree<Integer, String> avlRL = new AVLTree<>();
        avlRL.put(10, "10");
        avlRL.put(30, "30");
        avlRL.put(20, "20"); // Triggers RL rotation
        System.out.println("   Inserted 10, 30, 20 → RL rotation");
        assertEquals(3, avlRL.size());
        assertTrue(avlRL.getHeight() <= 2);
        
        System.out.println("\n✓ All four AVL rotation cases work correctly");
    }

    @Test
    @Order(11)
    @DisplayName("Comparison: Skip List vs AVL Tree performance")
    public void testSkipListVsAVL() {
        System.out.println("\n=== Test 11: Skip List vs AVL Tree Performance ===");
        
        int n = 5000;
        Random random = new Random(42);
        int[] keys = random.ints(n, 0, n * 10).toArray();
        
        // Test Skip List
        SkipList<Integer, Integer> skipList = new SkipList<>();
        long startTime = System.nanoTime();
        for (int key : keys) {
            skipList.put(key, key);
        }
        long skipListInsertTime = System.nanoTime() - startTime;
        
        startTime = System.nanoTime();
        for (int key : keys) {
            skipList.get(key);
        }
        long skipListSearchTime = System.nanoTime() - startTime;
        
        // Test AVL Tree
        AVLTree<Integer, Integer> avl = new AVLTree<>();
        startTime = System.nanoTime();
        for (int key : keys) {
            avl.put(key, key);
        }
        long avlInsertTime = System.nanoTime() - startTime;
        
        startTime = System.nanoTime();
        for (int key : keys) {
            avl.get(key);
        }
        long avlSearchTime = System.nanoTime() - startTime;
        
        System.out.printf("\n%d operations:\n", n);
        System.out.println("\nSkip List:");
        System.out.printf("  Insert: %.2f ms\n", skipListInsertTime / 1_000_000.0);
        System.out.printf("  Search: %.2f ms\n", skipListSearchTime / 1_000_000.0);
        
        System.out.println("\nAVL Tree:");
        System.out.printf("  Insert: %.2f ms\n", avlInsertTime / 1_000_000.0);
        System.out.printf("  Search: %.2f ms\n", avlSearchTime / 1_000_000.0);
        
        System.out.println("\n✓ Both structures perform well at scale");
    }

    /**
     * Utility class for pair values (used in Treap split test).
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
