/**
 * Day 45: Trie Data Structure - Complete Implementation and Applications
 * 
 * This file contains comprehensive Trie implementations covering:
 * 1. Basic Trie (Standard Implementation)
 * 2. Wildcard Search Trie
 * 3. Word Search II (Trie + Backtracking)
 * 4. Replace Words (Prefix Matching)
 * 5. Maximum XOR (Binary Trie)
 * 6. Palindrome Pairs (Advanced Trie)
 * 7. Search Autocomplete System
 * 8. Stream of Characters (Reverse Trie)
 * 
 * Each problem includes:
 * - Multiple solution approaches
 * - Detailed complexity analysis
 * - Comprehensive test cases
 * - Real-world applications
 * 
 * @author Placement Preparation
 * @version 1.0
 */

package dsa.day45;

import java.util.*;

public class TrieDataStructure {
    
    // ==================== PROBLEM 1: IMPLEMENT TRIE (PREFIX TREE) ====================
    
    /**
     * Problem 1: Implement Trie (Prefix Tree)
     * 
     * Implement a Trie with insert, search, and startsWith operations.
     * 
     * LeetCode #208
     * 
     * Time: O(m) for all operations, where m = word length
     * Space: O(n * m * ALPHABET_SIZE) where n = number of words
     */
    static class Trie {
        private TrieNode root;
        
        class TrieNode {
            Map<Character, TrieNode> children;
            boolean isEndOfWord;
            
            TrieNode() {
                children = new HashMap<>();
                isEndOfWord = false;
            }
        }
        
        public Trie() {
            root = new TrieNode();
        }
        
        /**
         * Insert word into trie
         * Time: O(m), Space: O(m) for new nodes
         */
        public void insert(String word) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                node.children.putIfAbsent(c, new TrieNode());
                node = node.children.get(c);
            }
            node.isEndOfWord = true;
        }
        
        /**
         * Search for complete word in trie
         * Time: O(m), Space: O(1)
         */
        public boolean search(String word) {
            TrieNode node = searchPrefix(word);
            return node != null && node.isEndOfWord;
        }
        
        /**
         * Check if any word starts with given prefix
         * Time: O(m), Space: O(1)
         */
        public boolean startsWith(String prefix) {
            return searchPrefix(prefix) != null;
        }
        
        /**
         * Helper: Search for prefix in trie
         */
        private TrieNode searchPrefix(String prefix) {
            TrieNode node = root;
            for (char c : prefix.toCharArray()) {
                if (!node.children.containsKey(c)) {
                    return null;
                }
                node = node.children.get(c);
            }
            return node;
        }
        
        /**
         * Delete word from trie
         * Time: O(m), Space: O(m) for recursion
         */
        public boolean delete(String word) {
            return deleteHelper(root, word, 0);
        }
        
        private boolean deleteHelper(TrieNode node, String word, int index) {
            if (index == word.length()) {
                if (!node.isEndOfWord) return false;
                node.isEndOfWord = false;
                return node.children.isEmpty();
            }
            
            char c = word.charAt(index);
            if (!node.children.containsKey(c)) return false;
            
            TrieNode child = node.children.get(c);
            boolean shouldDeleteChild = deleteHelper(child, word, index + 1);
            
            if (shouldDeleteChild) {
                node.children.remove(c);
                return node.children.isEmpty() && !node.isEndOfWord;
            }
            
            return false;
        }
        
        /**
         * Get all words with given prefix
         * Time: O(p + n), where p = prefix length, n = results
         */
        public List<String> getWordsWithPrefix(String prefix) {
            List<String> result = new ArrayList<>();
            TrieNode node = searchPrefix(prefix);
            
            if (node != null) {
                collectWords(node, prefix, result);
            }
            
            return result;
        }
        
        private void collectWords(TrieNode node, String current, List<String> result) {
            if (node.isEndOfWord) {
                result.add(current);
            }
            
            for (Map.Entry<Character, TrieNode> entry : node.children.entrySet()) {
                collectWords(entry.getValue(), current + entry.getKey(), result);
            }
        }
    }
    
    // ==================== PROBLEM 2: ADD AND SEARCH WORD (WILDCARD) ====================
    
    /**
     * Problem 2: Design Add and Search Words Data Structure
     * 
     * Support wildcard '.' that matches any single character.
     * 
     * LeetCode #211
     * 
     * Time: Insert O(m), Search O(26^m) worst case with all wildcards
     * Space: O(n * m * 26)
     */
    static class WordDictionary {
        private TrieNode root;
        
        class TrieNode {
            Map<Character, TrieNode> children;
            boolean isEnd;
            
            TrieNode() {
                children = new HashMap<>();
                isEnd = false;
            }
        }
        
        public WordDictionary() {
            root = new TrieNode();
        }
        
        /**
         * Add word to dictionary
         */
        public void addWord(String word) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                node.children.putIfAbsent(c, new TrieNode());
                node = node.children.get(c);
            }
            node.isEnd = true;
        }
        
        /**
         * Search word (with wildcard '.' support)
         */
        public boolean search(String word) {
            return searchHelper(word, 0, root);
        }
        
        private boolean searchHelper(String word, int index, TrieNode node) {
            if (index == word.length()) {
                return node.isEnd;
            }
            
            char c = word.charAt(index);
            
            if (c == '.') {
                // Try all possible characters
                for (TrieNode child : node.children.values()) {
                    if (searchHelper(word, index + 1, child)) {
                        return true;
                    }
                }
                return false;
            } else {
                if (!node.children.containsKey(c)) {
                    return false;
                }
                return searchHelper(word, index + 1, node.children.get(c));
            }
        }
    }
    
    // ==================== PROBLEM 3: WORD SEARCH II ====================
    
    /**
     * Problem 3: Word Search II
     * 
     * Find all words from dictionary that exist on board.
     * Words can be constructed from sequentially adjacent cells.
     * 
     * LeetCode #212
     * 
     * Time: O(m * n * 4^L) where L = max word length
     * Space: O(total characters in all words)
     */
    public static List<String> findWords(char[][] board, String[] words) {
        // Build Trie from word list
        TrieNodeWithWord root = new TrieNodeWithWord();
        for (String word : words) {
            TrieNodeWithWord node = root;
            for (char c : word.toCharArray()) {
                if (!node.children.containsKey(c)) {
                    node.children.put(c, new TrieNodeWithWord());
                }
                node = node.children.get(c);
            }
            node.word = word;
        }
        
        Set<String> result = new HashSet<>();
        int m = board.length, n = board[0].length;
        
        // Start DFS from each cell
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                dfsWordSearch(board, i, j, root, result);
            }
        }
        
        return new ArrayList<>(result);
    }
    
    static class TrieNodeWithWord {
        Map<Character, TrieNodeWithWord> children = new HashMap<>();
        String word = null;
    }
    
    private static void dfsWordSearch(char[][] board, int i, int j, 
                                      TrieNodeWithWord node, Set<String> result) {
        if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) {
            return;
        }
        
        char c = board[i][j];
        if (c == '#' || !node.children.containsKey(c)) {
            return;
        }
        
        node = node.children.get(c);
        
        // Found a word
        if (node.word != null) {
            result.add(node.word);
            node.word = null; // Avoid duplicates
        }
        
        // Mark as visited
        board[i][j] = '#';
        
        // Explore 4 directions
        dfsWordSearch(board, i + 1, j, node, result);
        dfsWordSearch(board, i - 1, j, node, result);
        dfsWordSearch(board, i, j + 1, node, result);
        dfsWordSearch(board, i, j - 1, node, result);
        
        // Backtrack
        board[i][j] = c;
    }
    
    // ==================== PROBLEM 4: REPLACE WORDS ====================
    
    /**
     * Problem 4: Replace Words
     * 
     * Replace words in sentence with their shortest root from dictionary.
     * 
     * Example:
     * dictionary = ["cat","bat","rat"]
     * sentence = "the cattle was rattled by the battery"
     * Output: "the cat was rat by the bat"
     * 
     * LeetCode #648
     * 
     * Time: O(n * m) where n = words in sentence, m = avg word length
     * Space: O(d * k) where d = dictionary size, k = avg root length
     */
    public static String replaceWords(List<String> dictionary, String sentence) {
        // Build Trie with dictionary roots
        TrieNode root = new TrieNode();
        for (String word : dictionary) {
            TrieNode node = root;
            for (char c : word.toCharArray()) {
                if (!node.children.containsKey(c)) {
                    node.children.put(c, new TrieNode());
                }
                node = node.children.get(c);
            }
            node.isEnd = true;
        }
        
        // Process each word in sentence
        StringBuilder result = new StringBuilder();
        String[] words = sentence.split(" ");
        
        for (String word : words) {
            if (result.length() > 0) {
                result.append(" ");
            }
            
            // Find shortest root
            String replacement = findShortestRoot(root, word);
            result.append(replacement != null ? replacement : word);
        }
        
        return result.toString();
    }
    
    static class TrieNode {
        Map<Character, TrieNode> children = new HashMap<>();
        boolean isEnd = false;
    }
    
    private static String findShortestRoot(TrieNode root, String word) {
        TrieNode node = root;
        StringBuilder prefix = new StringBuilder();
        
        for (char c : word.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return null;
            }
            prefix.append(c);
            node = node.children.get(c);
            
            // Found a root
            if (node.isEnd) {
                return prefix.toString();
            }
        }
        
        return null;
    }
    
    // ==================== PROBLEM 5: MAXIMUM XOR OF TWO NUMBERS ====================
    
    /**
     * Problem 5: Maximum XOR of Two Numbers in an Array
     * 
     * Find the maximum result of nums[i] XOR nums[j].
     * 
     * Example:
     * Input: nums = [3,10,5,25,2,8]
     * Output: 28
     * Explanation: 5 XOR 25 = 28
     * 
     * LeetCode #421
     * 
     * Approach: Binary Trie
     * - Insert all numbers as 32-bit binary in trie
     * - For each number, find complement that maximizes XOR
     * - Go opposite direction when possible
     * 
     * Time: O(n), Space: O(n)
     */
    public static int findMaximumXOR(int[] nums) {
        BitTrieNode root = new BitTrieNode();
        
        // Insert all numbers into binary trie
        for (int num : nums) {
            BitTrieNode node = root;
            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                if (bit == 0) {
                    if (node.zero == null) {
                        node.zero = new BitTrieNode();
                    }
                    node = node.zero;
                } else {
                    if (node.one == null) {
                        node.one = new BitTrieNode();
                    }
                    node = node.one;
                }
            }
        }
        
        // Find maximum XOR for each number
        int maxXor = 0;
        for (int num : nums) {
            BitTrieNode node = root;
            int currentXor = 0;
            
            for (int i = 31; i >= 0; i--) {
                int bit = (num >> i) & 1;
                
                // Try to go opposite direction for max XOR
                if (bit == 0) {
                    if (node.one != null) {
                        currentXor |= (1 << i);
                        node = node.one;
                    } else {
                        node = node.zero;
                    }
                } else {
                    if (node.zero != null) {
                        currentXor |= (1 << i);
                        node = node.zero;
                    } else {
                        node = node.one;
                    }
                }
            }
            
            maxXor = Math.max(maxXor, currentXor);
        }
        
        return maxXor;
    }
    
    static class BitTrieNode {
        BitTrieNode zero;
        BitTrieNode one;
    }
    
    // ==================== PROBLEM 6: PALINDROME PAIRS ====================
    
    /**
     * Problem 6: Palindrome Pairs
     * 
     * Find all pairs (i, j) where words[i] + words[j] is a palindrome.
     * 
     * Example:
     * Input: words = ["abcd","dcba","lls","s","sssll"]
     * Output: [[0,1],[1,0],[3,2],[2,4]]
     * 
     * LeetCode #336
     * 
     * Approach:
     * 1. Store reversed words in trie with original indices
     * 2. For each word, check:
     *    a. If reverse exists (complete palindrome)
     *    b. If prefix is palindrome, check if rest has reverse
     *    c. If suffix is palindrome, check if rest has reverse
     * 
     * Time: O(n * k²) where k = max word length
     * Space: O(n * k)
     */
    public static List<List<Integer>> palindromePairs(String[] words) {
        List<List<Integer>> result = new ArrayList<>();
        if (words == null || words.length == 0) return result;
        
        // Build trie with reversed words
        PalindromeTrieNode root = new PalindromeTrieNode();
        for (int i = 0; i < words.length; i++) {
            addReversedWord(root, words[i], i);
        }
        
        // Check each word for palindrome pairs
        for (int i = 0; i < words.length; i++) {
            searchPalindromePairs(root, words[i], i, result);
        }
        
        return result;
    }
    
    static class PalindromeTrieNode {
        Map<Character, PalindromeTrieNode> children = new HashMap<>();
        int wordIndex = -1;
        List<Integer> palindromeSuffixIndices = new ArrayList<>();
    }
    
    private static void addReversedWord(PalindromeTrieNode root, String word, int index) {
        PalindromeTrieNode node = root;
        int n = word.length();
        
        for (int i = n - 1; i >= 0; i--) {
            char c = word.charAt(i);
            if (!node.children.containsKey(c)) {
                node.children.put(c, new PalindromeTrieNode());
            }
            
            // Store indices where remaining prefix is palindrome
            if (isPalindrome(word, 0, i)) {
                node.palindromeSuffixIndices.add(index);
            }
            
            node = node.children.get(c);
        }
        
        node.wordIndex = index;
        node.palindromeSuffixIndices.add(index); // Empty string is palindrome
    }
    
    private static void searchPalindromePairs(PalindromeTrieNode root, String word, 
                                              int wordIndex, List<List<Integer>> result) {
        PalindromeTrieNode node = root;
        int n = word.length();
        
        // Case 1: Current word completely consumed, found reverse
        for (int i = 0; i < n; i++) {
            if (node.wordIndex != -1 && node.wordIndex != wordIndex && 
                isPalindrome(word, i, n - 1)) {
                result.add(Arrays.asList(wordIndex, node.wordIndex));
            }
            
            char c = word.charAt(i);
            if (!node.children.containsKey(c)) {
                return;
            }
            node = node.children.get(c);
        }
        
        // Case 2: Reached end of word, check palindrome suffixes
        for (int index : node.palindromeSuffixIndices) {
            if (index != wordIndex) {
                result.add(Arrays.asList(wordIndex, index));
            }
        }
    }
    
    private static boolean isPalindrome(String s, int left, int right) {
        while (left < right) {
            if (s.charAt(left++) != s.charAt(right--)) {
                return false;
            }
        }
        return true;
    }
    
    // ==================== PROBLEM 7: DESIGN SEARCH AUTOCOMPLETE SYSTEM ====================
    
    /**
     * Problem 7: Design Search Autocomplete System
     * 
     * Design a search autocomplete system for a search engine.
     * Return top 3 historical hot sentences that have prefix same as input.
     * 
     * LeetCode #642
     * 
     * Time: Constructor O(k*l), Input O(p + n*log(n)) 
     *       where p = prefix length, n = matches
     * Space: O(k*l) where k = number of sentences, l = avg length
     */
    static class AutocompleteSystem {
        private AutocompleteTrieNode root;
        private AutocompleteTrieNode current;
        private StringBuilder currentInput;
        
        class AutocompleteTrieNode {
            Map<Character, AutocompleteTrieNode> children = new HashMap<>();
            Map<String, Integer> sentences = new HashMap<>(); // sentence -> frequency
        }
        
        class SentenceFreq {
            String sentence;
            int frequency;
            
            SentenceFreq(String s, int f) {
                sentence = s;
                frequency = f;
            }
        }
        
        public AutocompleteSystem(String[] sentences, int[] times) {
            root = new AutocompleteTrieNode();
            current = root;
            currentInput = new StringBuilder();
            
            // Build trie with initial data
            for (int i = 0; i < sentences.length; i++) {
                addSentence(sentences[i], times[i]);
            }
        }
        
        private void addSentence(String sentence, int frequency) {
            AutocompleteTrieNode node = root;
            
            for (char c : sentence.toCharArray()) {
                if (!node.children.containsKey(c)) {
                    node.children.put(c, new AutocompleteTrieNode());
                }
                node = node.children.get(c);
                node.sentences.put(sentence, node.sentences.getOrDefault(sentence, 0) + frequency);
            }
        }
        
        public List<String> input(char c) {
            if (c == '#') {
                // Save current input
                String sentence = currentInput.toString();
                addSentence(sentence, 1);
                
                // Reset
                current = root;
                currentInput = new StringBuilder();
                return new ArrayList<>();
            }
            
            currentInput.append(c);
            
            if (current != null && current.children.containsKey(c)) {
                current = current.children.get(c);
            } else {
                current = null;
                return new ArrayList<>();
            }
            
            // Get top 3 sentences
            PriorityQueue<SentenceFreq> pq = new PriorityQueue<>((a, b) -> {
                if (a.frequency != b.frequency) {
                    return b.frequency - a.frequency; // Higher frequency first
                }
                return a.sentence.compareTo(b.sentence); // Lexicographically smaller first
            });
            
            for (Map.Entry<String, Integer> entry : current.sentences.entrySet()) {
                pq.offer(new SentenceFreq(entry.getKey(), entry.getValue()));
            }
            
            List<String> result = new ArrayList<>();
            for (int i = 0; i < 3 && !pq.isEmpty(); i++) {
                result.add(pq.poll().sentence);
            }
            
            return result;
        }
    }
    
    // ==================== PROBLEM 8: STREAM OF CHARACTERS ====================
    
    /**
     * Problem 8: Stream of Characters
     * 
     * Implement StreamChecker class:
     * - Constructor: Initialize with list of words
     * - query(char): Return true if any suffix of queried characters forms a word
     * 
     * Example:
     * words = ["cd","f","kl"]
     * query('a') -> false
     * query('b') -> false
     * query('c') -> false
     * query('d') -> true (suffix "cd")
     * 
     * LeetCode #1032
     * 
     * Approach: Build trie with reversed words, check suffixes
     * Time: Constructor O(sum of word lengths), Query O(max word length)
     * Space: O(sum of word lengths)
     */
    static class StreamChecker {
        private StreamTrieNode root;
        private StringBuilder stream;
        private int maxLength;
        
        class StreamTrieNode {
            Map<Character, StreamTrieNode> children = new HashMap<>();
            boolean isEnd = false;
        }
        
        public StreamChecker(String[] words) {
            root = new StreamTrieNode();
            stream = new StringBuilder();
            maxLength = 0;
            
            // Build trie with reversed words
            for (String word : words) {
                maxLength = Math.max(maxLength, word.length());
                StreamTrieNode node = root;
                
                for (int i = word.length() - 1; i >= 0; i--) {
                    char c = word.charAt(i);
                    if (!node.children.containsKey(c)) {
                        node.children.put(c, new StreamTrieNode());
                    }
                    node = node.children.get(c);
                }
                node.isEnd = true;
            }
        }
        
        public boolean query(char letter) {
            stream.append(letter);
            
            // Keep stream length manageable
            if (stream.length() > maxLength) {
                stream.deleteCharAt(0);
            }
            
            // Check if any suffix matches
            StreamTrieNode node = root;
            for (int i = stream.length() - 1; i >= 0; i--) {
                char c = stream.charAt(i);
                if (!node.children.containsKey(c)) {
                    return false;
                }
                node = node.children.get(c);
                if (node.isEnd) {
                    return true;
                }
            }
            
            return false;
        }
    }
    
    // ==================== ADDITIONAL: COMPRESSED TRIE (RADIX TREE) ====================
    
    /**
     * Compressed Trie (Radix Tree)
     * 
     * Optimized trie where nodes with single child are merged.
     * Stores substrings instead of single characters.
     * 
     * Space optimization: O(total unique characters) instead of O(n*m*26)
     */
    static class RadixTree {
        private RadixNode root;
        
        class RadixNode {
            Map<String, RadixNode> children = new HashMap<>();
            boolean isEnd = false;
            String key = ""; // Edge label
        }
        
        public RadixTree() {
            root = new RadixNode();
        }
        
        public void insert(String word) {
            insertHelper(root, word, 0);
        }
        
        private void insertHelper(RadixNode node, String word, int start) {
            if (start == word.length()) {
                node.isEnd = true;
                return;
            }
            
            char firstChar = word.charAt(start);
            
            // Find matching edge
            for (Map.Entry<String, RadixNode> entry : node.children.entrySet()) {
                String key = entry.getKey();
                RadixNode child = entry.getValue();
                
                if (key.charAt(0) == firstChar) {
                    int matchLen = getMatchLength(key, word, 0, start);
                    
                    if (matchLen == key.length()) {
                        // Full match, continue to child
                        insertHelper(child, word, start + matchLen);
                    } else {
                        // Partial match, split node
                        splitNode(node, key, child, matchLen, word, start);
                    }
                    return;
                }
            }
            
            // No matching edge, create new
            String newKey = word.substring(start);
            RadixNode newNode = new RadixNode();
            newNode.key = newKey;
            newNode.isEnd = true;
            node.children.put(newKey, newNode);
        }
        
        private void splitNode(RadixNode parent, String oldKey, RadixNode oldChild,
                               int matchLen, String word, int start) {
            // Create intermediate node
            String commonPrefix = oldKey.substring(0, matchLen);
            String oldSuffix = oldKey.substring(matchLen);
            String newSuffix = word.substring(start + matchLen);
            
            RadixNode intermediateNode = new RadixNode();
            intermediateNode.key = commonPrefix;
            
            // Update old child
            oldChild.key = oldSuffix;
            intermediateNode.children.put(oldSuffix, oldChild);
            
            // Add new child if there's remaining word
            if (!newSuffix.isEmpty()) {
                RadixNode newNode = new RadixNode();
                newNode.key = newSuffix;
                newNode.isEnd = true;
                intermediateNode.children.put(newSuffix, newNode);
            } else {
                intermediateNode.isEnd = true;
            }
            
            // Update parent
            parent.children.remove(oldKey);
            parent.children.put(commonPrefix, intermediateNode);
        }
        
        private int getMatchLength(String key, String word, int keyStart, int wordStart) {
            int len = 0;
            while (keyStart + len < key.length() && 
                   wordStart + len < word.length() &&
                   key.charAt(keyStart + len) == word.charAt(wordStart + len)) {
                len++;
            }
            return len;
        }
        
        public boolean search(String word) {
            return searchHelper(root, word, 0);
        }
        
        private boolean searchHelper(RadixNode node, String word, int start) {
            if (start == word.length()) {
                return node.isEnd;
            }
            
            char c = word.charAt(start);
            
            for (Map.Entry<String, RadixNode> entry : node.children.entrySet()) {
                String key = entry.getKey();
                if (key.charAt(0) == c) {
                    if (word.startsWith(key, start)) {
                        return searchHelper(entry.getValue(), word, start + key.length());
                    }
                    return false;
                }
            }
            
            return false;
        }
    }
    
    // ==================== TEST CASES ====================
    
    public static void main(String[] args) {
        System.out.println("=== DAY 45: TRIE DATA STRUCTURE - 8 COMPREHENSIVE PROBLEMS ===\n");
        
        // Problem 1: Implement Trie
        System.out.println("Problem 1: Implement Trie (Prefix Tree)");
        Trie trie = new Trie();
        trie.insert("apple");
        System.out.println("Insert: apple");
        System.out.println("Search apple: " + trie.search("apple")); // true
        System.out.println("Search app: " + trie.search("app")); // false
        System.out.println("StartsWith app: " + trie.startsWith("app")); // true
        trie.insert("app");
        System.out.println("Insert: app");
        System.out.println("Search app: " + trie.search("app")); // true
        System.out.println("Get words with prefix 'app': " + trie.getWordsWithPrefix("app"));
        System.out.println();
        
        // Problem 2: Add and Search Word
        System.out.println("Problem 2: Add and Search Word (Wildcard)");
        WordDictionary dict = new WordDictionary();
        dict.addWord("bad");
        dict.addWord("dad");
        dict.addWord("mad");
        System.out.println("Added: bad, dad, mad");
        System.out.println("Search 'pad': " + dict.search("pad")); // false
        System.out.println("Search 'bad': " + dict.search("bad")); // true
        System.out.println("Search '.ad': " + dict.search(".ad")); // true
        System.out.println("Search 'b..': " + dict.search("b..")); // true
        System.out.println();
        
        // Problem 3: Word Search II
        System.out.println("Problem 3: Word Search II");
        char[][] board = {
            {'o','a','a','n'},
            {'e','t','a','e'},
            {'i','h','k','r'},
            {'i','f','l','v'}
        };
        String[] words = {"oath","pea","eat","rain"};
        System.out.println("Board: [['o','a','a','n'],['e','t','a','e'],['i','h','k','r'],['i','f','l','v']]");
        System.out.println("Words: [oath, pea, eat, rain]");
        System.out.println("Output: " + findWords(board, words));
        System.out.println("Expected: [eat, oath]\n");
        
        // Problem 4: Replace Words
        System.out.println("Problem 4: Replace Words");
        List<String> dictionary = Arrays.asList("cat","bat","rat");
        String sentence = "the cattle was rattled by the battery";
        System.out.println("Dictionary: [cat, bat, rat]");
        System.out.println("Sentence: " + sentence);
        System.out.println("Output: " + replaceWords(dictionary, sentence));
        System.out.println("Expected: the cat was rat by the bat\n");
        
        // Problem 5: Maximum XOR
        System.out.println("Problem 5: Maximum XOR of Two Numbers");
        int[] nums = {3,10,5,25,2,8};
        System.out.println("Input: [3,10,5,25,2,8]");
        System.out.println("Output: " + findMaximumXOR(nums));
        System.out.println("Expected: 28 (5 XOR 25)\n");
        
        // Problem 6: Palindrome Pairs
        System.out.println("Problem 6: Palindrome Pairs");
        String[] palindromeWords = {"abcd","dcba","lls","s","sssll"};
        System.out.println("Input: [abcd, dcba, lls, s, sssll]");
        System.out.println("Output: " + palindromePairs(palindromeWords));
        System.out.println("Expected: [[0,1],[1,0],[3,2],[2,4]]\n");
        
        // Problem 7: Design Search Autocomplete System
        System.out.println("Problem 7: Design Search Autocomplete System");
        String[] autocompleteSentences = {"i love you", "island", "iroman", "i love leetcode"};
        int[] times = {5, 3, 2, 2};
        AutocompleteSystem system = new AutocompleteSystem(autocompleteSentences, times);
        System.out.println("Sentences: [i love you(5), island(3), ironman(2), i love leetcode(2)]");
        System.out.println("Input 'i': " + system.input('i'));
        System.out.println("Input ' ': " + system.input(' '));
        System.out.println("Input 'a': " + system.input('a'));
        System.out.println("Input '#': " + system.input('#'));
        System.out.println();
        
        // Problem 8: Stream of Characters
        System.out.println("Problem 8: Stream of Characters");
        String[] streamWords = {"cd","f","kl"};
        StreamChecker checker = new StreamChecker(streamWords);
        System.out.println("Words: [cd, f, kl]");
        System.out.println("Query 'a': " + checker.query('a')); // false
        System.out.println("Query 'b': " + checker.query('b')); // false
        System.out.println("Query 'c': " + checker.query('c')); // false
        System.out.println("Query 'd': " + checker.query('d')); // true (cd)
        System.out.println("Query 'e': " + checker.query('e')); // false
        System.out.println("Query 'f': " + checker.query('f')); // true (f)
        System.out.println("Query 'g': " + checker.query('g')); // false
        System.out.println("Query 'h': " + checker.query('h')); // false
        System.out.println("Query 'i': " + checker.query('i')); // false
        System.out.println("Query 'j': " + checker.query('j')); // false
        System.out.println("Query 'k': " + checker.query('k')); // false
        System.out.println("Query 'l': " + checker.query('l')); // true (kl)
        System.out.println();
        
        // Additional: Radix Tree Demo
        System.out.println("Additional: Compressed Trie (Radix Tree) Demo");
        RadixTree radixTree = new RadixTree();
        radixTree.insert("romane");
        radixTree.insert("romanus");
        radixTree.insert("romulus");
        radixTree.insert("rubens");
        radixTree.insert("ruber");
        radixTree.insert("rubicon");
        radixTree.insert("rubicundus");
        System.out.println("Inserted: romane, romanus, romulus, rubens, ruber, rubicon, rubicundus");
        System.out.println("Search 'romane': " + radixTree.search("romane")); // true
        System.out.println("Search 'roman': " + radixTree.search("roman")); // false
        System.out.println("Search 'rubicon': " + radixTree.search("rubicon")); // true
        System.out.println();
        
        System.out.println("\n=== ALL TRIE PROBLEMS COMPLETED ===");
        System.out.println("Master these patterns for Trie interview questions!");
        System.out.println("Next: Segment Trees and Fenwick Trees (Day 46)");
    }
}
