package bit_manipulation.questions;

/*
 * 11. MAXIMUM PRODUCT OF WORD LENGTHS (LeetCode 318)
 *
 * Problem Statement:
 * Given a string array words, return the maximum value of length(word[i]) * length(word[j])
 * where the two words do not share common letters. If no such two words exist, return 0.
 *
 * Conceptual Understanding:
 * - Two words don't share common letters = no overlapping bits in bitmask
 * - Use bit manipulation: each bit represents a letter (a-z)
 * - For each word, create bitmask of letters present
 * - Check pairs: if (mask1 & mask2) == 0, they don't share letters
 * - Time: O(n^2) for checking pairs, Space: O(n) for masks
 * - Can optimize by sorting words by length and early termination
 * - Bit manipulation makes comparison O(1)
 *
 * Time Complexity: O(n^2)
 * Space Complexity: O(n)
 */

class MaximumProductOfWordLengths11 {

    // Method 1: Bit manipulation (most efficient)
    public int maxProduct(String[] words) {
        int n = words.length;
        int[] masks = new int[n];

        // Create bitmasks for each word
        for (int i = 0; i < n; i++) {
            int mask = 0;
            for (char c : words[i].toCharArray()) {
                mask |= (1 << (c - 'a'));
            }
            masks[i] = mask;
        }

        int maxProduct = 0;

        // Check all pairs
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // If no common letters
                if ((masks[i] & masks[j]) == 0) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Method 2: Using HashMap for word to mask mapping
    public int maxProductHashMap(String[] words) {
        java.util.Map<String, Integer> wordToMask = new java.util.HashMap<>();

        for (String word : words) {
            int mask = 0;
            for (char c : word.toCharArray()) {
                mask |= (1 << (c - 'a'));
            }
            wordToMask.put(word, mask);
        }

        int maxProduct = 0;
        java.util.List<String> wordList = java.util.Arrays.asList(words);

        for (int i = 0; i < wordList.size(); i++) {
            for (int j = i + 1; j < wordList.size(); j++) {
                String word1 = wordList.get(i);
                String word2 = wordList.get(j);

                if ((wordToMask.get(word1) & wordToMask.get(word2)) == 0) {
                    maxProduct = Math.max(maxProduct,
                                        word1.length() * word2.length());
                }
            }
        }

        return maxProduct;
    }

    // Method 3: Optimized with sorting by length
    public int maxProductSorted(String[] words) {
        // Sort by length in descending order
        java.util.Arrays.sort(words, (a, b) -> Integer.compare(b.length(), a.length()));

        int n = words.length;
        int[] masks = new int[n];

        // Create masks
        for (int i = 0; i < n; i++) {
            int mask = 0;
            for (char c : words[i].toCharArray()) {
                mask |= (1 << (c - 'a'));
            }
            masks[i] = mask;
        }

        int maxProduct = 0;

        // Check pairs, but can break early if product would be smaller
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Early termination: if current max possible product is smaller
                if (words[i].length() * words[j].length() <= maxProduct) {
                    break;
                }

                if ((masks[i] & masks[j]) == 0) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Method 4: Using sets for character comparison
    @SuppressWarnings("unchecked")
    public int maxProductSets(String[] words) {
        int n = words.length;
        java.util.Set<Character>[] charSets = new java.util.HashSet[n];

        // Create character sets
        for (int i = 0; i < n; i++) {
            charSets[i] = new java.util.HashSet<>();
            for (char c : words[i].toCharArray()) {
                charSets[i].add(c);
            }
        }

        int maxProduct = 0;

        // Check all pairs
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                // Check if sets are disjoint
                boolean disjoint = true;
                for (char c : charSets[i]) {
                    if (charSets[j].contains(c)) {
                        disjoint = false;
                        break;
                    }
                }

                if (disjoint) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Method 5: Using boolean arrays
    public int maxProductBooleanArray(String[] words) {
        int n = words.length;
        boolean[][] charPresent = new boolean[n][26];

        // Mark character presence
        for (int i = 0; i < n; i++) {
            for (char c : words[i].toCharArray()) {
                charPresent[i][c - 'a'] = true;
            }
        }

        int maxProduct = 0;

        // Check all pairs
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                boolean hasCommon = false;

                // Check for common characters
                for (int k = 0; k < 26; k++) {
                    if (charPresent[i][k] && charPresent[j][k]) {
                        hasCommon = true;
                        break;
                    }
                }

                if (!hasCommon) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Method 6: Stream approach
    public int maxProductStream(String[] words) {
        int n = words.length;
        int[] masks = new int[n];

        // Create masks
        for (int i = 0; i < n; i++) {
            masks[i] = words[i].chars()
                             .map(c -> 1 << (c - 'a'))
                             .reduce(0, (a, b) -> a | b);
        }

        return java.util.stream.IntStream.range(0, n)
                                        .boxed()
                                        .flatMap(i -> java.util.stream.IntStream.range(i + 1, n)
                                                                              .mapToObj(j -> new int[]{i, j}))
                                        .filter(pair -> (masks[pair[0]] & masks[pair[1]]) == 0)
                                        .mapToInt(pair -> words[pair[0]].length() * words[pair[1]].length())
                                        .max()
                                        .orElse(0);
    }

    // Method 7: Using Trie (conceptual)
    public int maxProductTrie(String[] words) {
        // This would be complex, better to use bit manipulation
        return maxProduct(words);
    }

    // Method 8: Brute force character comparison
    public int maxProductBruteForce(String[] words) {
        int maxProduct = 0;

        for (int i = 0; i < words.length; i++) {
            for (int j = i + 1; j < words.length; j++) {
                if (noCommonLetters(words[i], words[j])) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    private boolean noCommonLetters(String s1, String s2) {
        boolean[] seen = new boolean[26];

        for (char c : s1.toCharArray()) {
            seen[c - 'a'] = true;
        }

        for (char c : s2.toCharArray()) {
            if (seen[c - 'a']) {
                return false;
            }
        }

        return true;
    }

    // Method 9: Optimized with early termination
    public int maxProductOptimized(String[] words) {
        int n = words.length;
        int[] masks = new int[n];
        int[] lengths = new int[n];

        // Create masks and store lengths
        for (int i = 0; i < n; i++) {
            lengths[i] = words[i].length();
            int mask = 0;
            for (char c : words[i].toCharArray()) {
                mask |= (1 << (c - 'a'));
            }
            masks[i] = mask;
        }

        int maxProduct = 0;

        // Sort indices by length descending
        Integer[] indices = new Integer[n];
        for (int i = 0; i < n; i++) indices[i] = i;
        java.util.Arrays.sort(indices, (a, b) -> Integer.compare(lengths[b], lengths[a]));

        // Check pairs with early termination
        for (int i = 0; i < n; i++) {
            int idx1 = indices[i];
            for (int j = i + 1; j < n; j++) {
                int idx2 = indices[j];

                // If even the maximum possible product is smaller, break
                if (lengths[idx1] * lengths[idx2] <= maxProduct) {
                    break;
                }

                if ((masks[idx1] & masks[idx2]) == 0) {
                    maxProduct = Math.max(maxProduct, lengths[idx1] * lengths[idx2]);
                }
            }
        }

        return maxProduct;
    }

    // Method 10: Using frequency arrays
    public int maxProductFrequency(String[] words) {
        int n = words.length;
        int[][] freq = new int[n][26];

        // Count frequencies
        for (int i = 0; i < n; i++) {
            for (char c : words[i].toCharArray()) {
                freq[i][c - 'a']++;
            }
        }

        int maxProduct = 0;

        // Check pairs
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                boolean hasCommon = false;

                for (int k = 0; k < 26; k++) {
                    if (freq[i][k] > 0 && freq[j][k] > 0) {
                        hasCommon = true;
                        break;
                    }
                }

                if (!hasCommon) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Method 11: Recursive approach (not recommended)
    public int maxProductRecursive(String[] words) {
        return maxProductRecursiveHelper(words, 0, new int[words.length]);
    }

    private int maxProductRecursiveHelper(String[] words, int start, int[] masks) {
        if (start == words.length) {
            return 0;
        }

        // Create mask for current word
        int mask = 0;
        for (char c : words[start].toCharArray()) {
            mask |= (1 << (c - 'a'));
        }
        masks[start] = mask;

        int maxProduct = maxProductRecursiveHelper(words, start + 1, masks);

        // Check with all previous words
        for (int i = 0; i < start; i++) {
            if ((masks[i] & mask) == 0) {
                maxProduct = Math.max(maxProduct,
                                    words[i].length() * words[start].length());
            }
        }

        return maxProduct;
    }

    // Method 12: Using ArrayList and sorting
    public int maxProductArrayList(String[] words) {
        java.util.List<java.util.AbstractMap.SimpleEntry<String, Integer>> wordMasks =
            new java.util.ArrayList<>();

        for (String word : words) {
            int mask = 0;
            for (char c : word.toCharArray()) {
                mask |= (1 << (c - 'a'));
            }
            wordMasks.add(new java.util.AbstractMap.SimpleEntry<>(word, mask));
        }

        // Sort by length descending
        wordMasks.sort((a, b) -> Integer.compare(b.getKey().length(), a.getKey().length()));

        int maxProduct = 0;

        for (int i = 0; i < wordMasks.size(); i++) {
            for (int j = i + 1; j < wordMasks.size(); j++) {
                var entry1 = wordMasks.get(i);
                var entry2 = wordMasks.get(j);

                if (entry1.getKey().length() * entry2.getKey().length() <= maxProduct) {
                    break;
                }

                if ((entry1.getValue() & entry2.getValue()) == 0) {
                    maxProduct = Math.max(maxProduct,
                                        entry1.getKey().length() * entry2.getKey().length());
                }
            }
        }

        return maxProduct;
    }

    // Method 13: Bit manipulation with precomputation
    public int maxProductPrecompute(String[] words) {
        // Precomputation approach would be too memory intensive
        // Better to use the basic bit manipulation approach
        return maxProduct(words);
    }

    // Method 14: Using HashSet for unique characters
    @SuppressWarnings("unchecked")
    public int maxProductHashSet(String[] words) {
        int n = words.length;
        java.util.Set<Character>[] charSets = new java.util.HashSet[n];

        for (int i = 0; i < n; i++) {
            charSets[i] = new java.util.HashSet<>();
            for (char c : words[i].toCharArray()) {
                charSets[i].add(c);
            }
        }

        int maxProduct = 0;

        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                java.util.Set<Character> intersection = new java.util.HashSet<>(charSets[i]);
                intersection.retainAll(charSets[j]);

                if (intersection.isEmpty()) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Method 15: Optimized bit manipulation
    public int maxProductFinal(String[] words) {
        int n = words.length;
        int[] masks = new int[n];

        // Create bitmasks
        for (int i = 0; i < n; i++) {
            for (char c : words[i].toCharArray()) {
                masks[i] |= (1 << (c - 'a'));
            }
        }

        int maxProduct = 0;

        // Check all pairs with bit manipulation
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
                if ((masks[i] & masks[j]) == 0) {
                    maxProduct = Math.max(maxProduct,
                                        words[i].length() * words[j].length());
                }
            }
        }

        return maxProduct;
    }

    // Test cases
    public static void main(String[] args) {
        MaximumProductOfWordLengths11 solution = new MaximumProductOfWordLengths11();

        // Test Case 1: Basic test
        String[] words1 = {"abcw", "baz", "foo", "bar", "xtfn", "abcdef"};
        System.out.println("Words: " + java.util.Arrays.toString(words1));
        System.out.println("Max product: " + solution.maxProduct(words1)); // Expected: 16 (abcw * xtfn)

        // Test Case 2: No common letters
        String[] words2 = {"a", "ab", "abc", "d", "cd", "bcd", "abcd"};
        System.out.println("\nWords: " + java.util.Arrays.toString(words2));
        System.out.println("Max product: " + solution.maxProduct(words2)); // Expected: 4 (ab * cd)

        // Test Case 3: All share common letters
        String[] words3 = {"abc", "bcd", "cde"};
        System.out.println("\nWords: " + java.util.Arrays.toString(words3));
        System.out.println("Max product: " + solution.maxProduct(words3)); // Expected: 0

        // Test Case 4: Single word
        String[] words4 = {"abc"};
        System.out.println("\nWords: " + java.util.Arrays.toString(words4));
        System.out.println("Max product: " + solution.maxProduct(words4)); // Expected: 0

        // Test Case 5: Empty array
        String[] words5 = {};
        System.out.println("\nWords: " + java.util.Arrays.toString(words5));
        System.out.println("Max product: " + solution.maxProduct(words5)); // Expected: 0

        // Test Case 6: Compare different approaches
        String[] testWords = {"abc", "def", "ghi", "jkl"};
        System.out.println("\nComparing approaches for: " + java.util.Arrays.toString(testWords));

        int[] results = {
            solution.maxProduct(testWords),
            solution.maxProductHashMap(testWords),
            solution.maxProductSorted(testWords),
            solution.maxProductBooleanArray(testWords),
            solution.maxProductOptimized(testWords)
        };

        String[] methodNames = {
            "Bit Manipulation", "HashMap", "Sorted", "Boolean Array", "Optimized"
        };

        for (int i = 0; i < results.length; i++) {
            System.out.println(methodNames[i] + ": " + results[i]);
        }

        // Verify all methods give same result
        boolean allEqual = true;
        for (int i = 1; i < results.length; i++) {
            if (results[i] != results[0]) {
                allEqual = false;
                break;
            }
        }
        System.out.println("All methods equal: " + allEqual);

        // Test Case 7: Performance test
        String[] perfWords = new String[100];
        for (int i = 0; i < 100; i++) {
            // Create words with different letters
            StringBuilder sb = new StringBuilder();
            for (int j = 0; j < 5; j++) {
                sb.append((char)('a' + (i * 5 + j) % 26));
            }
            perfWords[i] = sb.toString();
        }

        long startTime, endTime;

        startTime = System.nanoTime();
        for (int i = 0; i < 100; i++) {
            solution.maxProduct(perfWords);
        }
        endTime = System.nanoTime();
        System.out.println("\nBit manipulation (100 runs): " + (endTime - startTime) / 1000000 + " ms");

        startTime = System.nanoTime();
        for (int i = 0; i < 100; i++) {
            solution.maxProductSets(perfWords);
        }
        endTime = System.nanoTime();
        System.out.println("Sets approach (100 runs): " + (endTime - startTime) / 1000000 + " ms");

        // Test Case 8: Words with repeated letters
        String[] words8 = {"aaa", "bbb", "ccc", "abc"};
        System.out.println("\nWords with repeats: " + java.util.Arrays.toString(words8));
        System.out.println("Max product: " + solution.maxProduct(words8)); // Expected: 0 (all share 'a','b', or 'c')

        // Test Case 9: Maximum possible product
        String[] words9 = {"abcdefghijklmnopqrstuvwxyz", "zyxwvutsrqponmlkjihgfedcba"};
        System.out.println("\nMax possible words: " + java.util.Arrays.toString(words9));
        System.out.println("Max product: " + solution.maxProduct(words9)); // Expected: 0 (share all letters)

        String[] words10 = {"abcdefg", "hijklmn"};
        System.out.println("Disjoint long words: " + java.util.Arrays.toString(words10));
        System.out.println("Max product: " + solution.maxProduct(words10)); // Expected: 49
    }
}