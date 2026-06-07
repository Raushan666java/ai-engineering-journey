package bit_manipulation.questions;

/*
 * 8. MAXIMUM XOR OF TWO NUMBERS IN AN ARRAY (LeetCode 421)
 *
 * Problem Statement:
 * Given an integer array nums, return the maximum result of nums[i] XOR nums[j],
 * where 0 <= i <= j < n.
 *
 * Conceptual Understanding:
 * - Trie-based approach: Build binary trie for numbers
 * - For each number, find maximum XOR by traversing trie
 * - At each bit, prefer opposite bit for maximum XOR
 * - Time: O(n * 32), Space: O(n * 32)
 * - Brute force is O(n^2), too slow for large n
 * - Trie approach is optimal for this problem
 *
 * Time Complexity: O(n * 32)
 * Space Complexity: O(n * 32)
 */

class MaximumXOR8 {

    // Trie Node
    static class TrieNode {
        TrieNode[] children = new TrieNode[2];
    }

    // Method 1: Trie-based approach (most efficient)
    public int findMaximumXOR(int[] nums) {
        if (nums == null || nums.length < 2) return 0;

        // Build trie
        TrieNode root = new TrieNode();
        for (int num : nums) {
            insert(root, num);
        }

        int maxXOR = 0;

        // For each number, find maximum XOR
        for (int num : nums) {
            maxXOR = Math.max(maxXOR, findMaxXOR(root, num));
        }

        return maxXOR;
    }

    private void insert(TrieNode root, int num) {
        TrieNode node = root;
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            if (node.children[bit] == null) {
                node.children[bit] = new TrieNode();
            }
            node = node.children[bit];
        }
    }

    private int findMaxXOR(TrieNode root, int num) {
        TrieNode node = root;
        int xor = 0;

        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            int oppositeBit = 1 - bit;

            // Prefer opposite bit for maximum XOR
            if (node.children[oppositeBit] != null) {
                xor |= (1 << i);
                node = node.children[oppositeBit];
            } else if (node.children[bit] != null) {
                node = node.children[bit];
            } else {
                break; // Should not happen
            }
        }

        return xor;
    }

    // Method 2: Brute force (O(n^2) - too slow for large n)
    public int findMaximumXORBruteForce(int[] nums) {
        int maxXOR = 0;

        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                maxXOR = Math.max(maxXOR, nums[i] ^ nums[j]);
            }
        }

        return maxXOR;
    }

    // Method 3: Using HashSet for each bit position
    public int findMaximumXORHashSet(int[] nums) {
        int maxXOR = 0;
        int mask = 0;

        // From MSB to LSB
        for (int i = 31; i >= 0; i--) {
            mask |= (1 << i);
            java.util.Set<Integer> set = new java.util.HashSet<>();

            // Store prefixes
            for (int num : nums) {
                set.add(num & mask);
            }

            // Check if we can get a larger XOR
            int temp = maxXOR | (1 << i);
            for (int prefix : set) {
                if (set.contains(temp ^ prefix)) {
                    maxXOR = temp;
                    break;
                }
            }
        }

        return maxXOR;
    }

    // Method 4: Optimized trie with early termination
    public int findMaximumXOREarlyTermination(int[] nums) {
        if (nums == null || nums.length < 2) return 0;

        TrieNode root = new TrieNode();
        int maxXOR = 0;

        // Insert first number
        insert(root, nums[0]);

        for (int i = 1; i < nums.length; i++) {
            // Find max XOR with current number
            int currentXOR = findMaxXOR(root, nums[i]);
            maxXOR = Math.max(maxXOR, currentXOR);

            // Insert current number for future comparisons
            insert(root, nums[i]);
        }

        return maxXOR;
    }

    // Method 5: Using bit manipulation with masks
    public int findMaximumXORMasks(int[] nums) {
        int maxXOR = 0;
        int mask = 0;

        for (int i = 31; i >= 0; i--) {
            mask = (mask << 1) | 1;
            java.util.Set<Integer> set = new java.util.HashSet<>();

            for (int num : nums) {
                set.add(num & mask);
            }

            int temp = maxXOR | (1 << i);
            for (int prefix : set) {
                if (set.contains((temp >> i) ^ prefix)) {
                    maxXOR = temp;
                    break;
                }
            }
        }

        return maxXOR;
    }

    // Method 6: Recursive trie building
    public int findMaximumXORRecursive(int[] nums) {
        if (nums == null || nums.length < 2) return 0;

        TrieNode root = buildTrie(nums, 31);
        return findMaxXORRecursive(root, root, 31, 0);
    }

    private TrieNode buildTrie(int[] nums, int bit) {
        if (bit < 0) return null;

        TrieNode node = new TrieNode();

        for (int num : nums) {
            int b = (num >> bit) & 1;
            if (node.children[b] == null) {
                node.children[b] = new TrieNode();
            }
        }

        // Recursively build for both children if they exist
        for (int i = 0; i < 2; i++) {
            if (node.children[i] != null) {
                java.util.List<Integer> subset = new java.util.ArrayList<>();
                for (int num : nums) {
                    if (((num >> bit) & 1) == i) {
                        subset.add(num);
                    }
                }
                node.children[i] = buildTrie(subset.stream().mapToInt(Integer::intValue).toArray(), bit - 1);
            }
        }

        return node;
    }

    private int findMaxXORRecursive(TrieNode node1, TrieNode node2, int bit, int currentXOR) {
        if (bit < 0 || node1 == null || node2 == null) return currentXOR;

        int maxXOR = 0;

        // Try to set this bit in XOR
        for (int b1 = 0; b1 < 2; b1++) {
            if (node1.children[b1] == null) continue;

            for (int b2 = 0; b2 < 2; b2++) {
                if (node2.children[b2] == null) continue;

                int newXOR = currentXOR | ((b1 ^ b2) << bit);
                int subXOR = findMaxXORRecursive(node1.children[b1], node2.children[b2],
                                                bit - 1, newXOR);
                maxXOR = Math.max(maxXOR, subXOR);
            }
        }

        return maxXOR;
    }

    // Method 7: Using streams and collections
    public int findMaximumXORStreams(int[] nums) {
        int maxXOR = 0;
        for (int i = 0; i < nums.length; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                maxXOR = Math.max(maxXOR, nums[i] ^ nums[j]);
            }
        }
        return maxXOR;
    }

    // Method 8: Bit by bit approach
    public int findMaximumXORBitByBit(int[] nums) {
        int maxXOR = 0;

        for (int i = 31; i >= 0; i--) {
            int bitMask = 1 << i;
            java.util.Set<Integer> prefixes = new java.util.HashSet<>();

            for (int num : nums) {
                prefixes.add(num >> i);
            }

            int candidate = maxXOR | bitMask;

            for (int prefix : prefixes) {
                if (prefixes.contains((candidate >> i) ^ prefix)) {
                    maxXOR = candidate;
                    break;
                }
            }
        }

        return maxXOR;
    }

    // Method 9: Optimized with single trie pass
    public int findMaximumXORSinglePass(int[] nums) {
        TrieNode root = new TrieNode();
        int maxXOR = 0;

        for (int num : nums) {
            insert(root, num);
            int currentMax = findMaxXOR(root, num);
            maxXOR = Math.max(maxXOR, currentMax);
        }

        return maxXOR;
    }

    // Method 10: Using priority queue (conceptual)
    public int findMaximumXORPriorityQueue(int[] nums) {
        // This is not the most efficient, but shows alternative approach
        java.util.PriorityQueue<Integer> pq = new java.util.PriorityQueue<>(
            (a, b) -> (nums[a] ^ nums[b]) - (nums[Math.max(a, b)] ^ nums[Math.min(a, b)])
        );

        // Add indices
        for (int i = 0; i < nums.length; i++) {
            pq.add(i);
        }

        int maxXOR = 0;
        while (!pq.isEmpty()) {
            int i = pq.poll();
            for (int j : pq) {
                maxXOR = Math.max(maxXOR, nums[i] ^ nums[j]);
            }
        }

        return maxXOR;
    }

    // Test cases
    public static void main(String[] args) {
        MaximumXOR8 solution = new MaximumXOR8();

        // Test Case 1: Basic test
        int[] nums1 = {3, 10, 5, 25, 2, 8};
        System.out.println("Array: " + java.util.Arrays.toString(nums1));
        System.out.println("Maximum XOR: " + solution.findMaximumXOR(nums1)); // Expected: 28 (5^25=28)

        // Test Case 2: Small array
        int[] nums2 = {1, 2};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums2));
        System.out.println("Maximum XOR: " + solution.findMaximumXOR(nums2)); // Expected: 3 (1^2=3)

        // Test Case 3: All same numbers
        int[] nums3 = {5, 5, 5};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums3));
        System.out.println("Maximum XOR: " + solution.findMaximumXOR(nums3)); // Expected: 0

        // Test Case 4: Powers of two
        int[] nums4 = {1, 2, 4, 8, 16};
        System.out.println("\nArray: " + java.util.Arrays.toString(nums4));
        System.out.println("Maximum XOR: " + solution.findMaximumXOR(nums4)); // Expected: 24 (16^8=24)

        // Test Case 5: Compare approaches (small array for brute force)
        int[] testNums = {1, 3, 5, 7};
        System.out.println("\nComparing approaches for: " + java.util.Arrays.toString(testNums));

        int[] results = {
            solution.findMaximumXOR(testNums),
            solution.findMaximumXORBruteForce(testNums),
            solution.findMaximumXORHashSet(testNums),
            solution.findMaximumXOREarlyTermination(testNums),
            solution.findMaximumXORSinglePass(testNums)
        };

        String[] methodNames = {
            "Trie", "Brute Force", "HashSet", "Early Termination", "Single Pass"
        };

        for (int i = 0; i < results.length; i++) {
            System.out.println(methodNames[i] + ": " + results[i]);
        }

        // Verify trie and brute force give same result
        boolean trieCorrect = results[0] == results[1];
        System.out.println("Trie matches brute force: " + trieCorrect);

        // Test Case 6: Large numbers
        int[] nums6 = {Integer.MAX_VALUE, Integer.MAX_VALUE - 1, 0};
        System.out.println("\nLarge numbers: " + solution.findMaximumXOR(nums6));

        // Test Case 7: Edge cases
        System.out.println("\nEdge cases:");
        System.out.println("Null array: " + solution.findMaximumXOR(null));
        System.out.println("Single element: " + solution.findMaximumXOR(new int[]{5}));
        System.out.println("Empty array: " + solution.findMaximumXOR(new int[]{}));

        // Test Case 8: Performance test
        int[] largeArray = new int[1000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = i;
        }

        long startTime = System.nanoTime();
        int result = solution.findMaximumXOR(largeArray);
        long endTime = System.nanoTime();

        System.out.println("\nLarge array (1000 elements) result: " + result);
        System.out.println("Time taken: " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 9: All zeros
        int[] nums9 = {0, 0, 0};
        System.out.println("\nAll zeros: " + solution.findMaximumXOR(nums9)); // Expected: 0

        // Test Case 10: Negative numbers
        int[] nums10 = {-1, -2, -3};
        System.out.println("Negative numbers: " + solution.findMaximumXOR(nums10)); // Expected: 1 (-2^-3=1)
    }
}