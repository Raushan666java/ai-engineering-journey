package tries.questions;

/*
 * 1. TRIE IMPLEMENTATION
 *
 * Problem Statement:
 * Implement a trie (prefix tree) with insert, search, and startsWith methods.
 * The trie should be able to handle lowercase English letters.
 *
 * Conceptual Understanding:
 * - Trie is a tree data structure for efficient string storage and retrieval
 * - Each node represents a character, edges represent character transitions
 * - Root represents empty string, leaves represent complete words
 * - Insert: traverse/create nodes for each character, mark end of word
 * - Search: traverse nodes matching characters, check end of word flag
 * - StartsWith: traverse nodes matching prefix characters
 * - Time: O(m) where m is string length, Space: O(N*M) where N=words, M=avg length
 *
 * Time Complexity: O(m) for all operations where m is string length
 * Space Complexity: O(N*M) where N is number of words, M is average word length
 */

import java.util.*;

// Basic Trie Node
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    int count; // Optional: count of words passing through this node

    public TrieNode() {
        children = new TrieNode[26]; // For lowercase English letters
        isEndOfWord = false;
        count = 0;
    }
}

// Basic Trie Implementation
class Trie {
    private TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    // Insert a word into the trie
    public void insert(String word) {
        if (word == null || word.isEmpty()) {
            return;
        }

        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
            node.count++; // Increment count of words passing through
        }
        node.isEndOfWord = true;
    }

    // Search for a word in the trie
    public boolean search(String word) {
        if (word == null || word.isEmpty()) {
            return false;
        }

        TrieNode node = findNode(word);
        return node != null && node.isEndOfWord;
    }

    // Check if any word starts with the given prefix
    public boolean startsWith(String prefix) {
        if (prefix == null || prefix.isEmpty()) {
            return true;
        }

        return findNode(prefix) != null;
    }

    // Helper method to find node for a given string
    private TrieNode findNode(String str) {
        TrieNode node = root;
        for (char c : str.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return null;
            }
            node = node.children[index];
        }
        return node;
    }

    // Get count of words with given prefix
    public int countWordsWithPrefix(String prefix) {
        TrieNode node = findNode(prefix);
        return node != null ? node.count : 0;
    }

    // Check if trie is empty
    public boolean isEmpty() {
        return root.count == 0;
    }

    // Get total number of words in trie
    public int size() {
        return root.count;
    }
}

// Enhanced Trie with Delete Operation
class TrieWithDelete {
    private TrieNode root;

    public TrieWithDelete() {
        root = new TrieNode();
    }

    public void insert(String word) {
        if (word == null || word.isEmpty()) {
            return;
        }

        TrieNode node = root;
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
            node.count++;
        }
        node.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieNode node = findNode(word);
        return node != null && node.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        return findNode(prefix) != null;
    }

    // Delete a word from trie
    public boolean delete(String word) {
        if (word == null || word.isEmpty()) {
            return false;
        }

        return deleteHelper(root, word, 0);
    }

    private boolean deleteHelper(TrieNode node, String word, int index) {
        if (index == word.length()) {
            // Reached end of word
            if (!node.isEndOfWord) {
                return false; // Word doesn't exist
            }
            node.isEndOfWord = false;
            return node.count == 0; // Can delete if no words pass through
        }

        int charIndex = word.charAt(index) - 'a';
        if (node.children[charIndex] == null) {
            return false; // Word doesn't exist
        }

        boolean shouldDeleteCurrentNode = deleteHelper(node.children[charIndex], word, index + 1);

        if (shouldDeleteCurrentNode) {
            node.children[charIndex] = null;
            node.count--;
            return node.count == 0 && !node.isEndOfWord;
        }

        node.count--;
        return false;
    }

    private TrieNode findNode(String str) {
        TrieNode node = root;
        for (char c : str.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return null;
            }
            node = node.children[index];
        }
        return node;
    }
}

// Trie with HashMap (for Unicode support)
class TrieHashMap {
    private Map<Character, TrieHashMap> children;
    private boolean isEndOfWord;

    public TrieHashMap() {
        children = new HashMap<>();
        isEndOfWord = false;
    }

    public void insert(String word) {
        TrieHashMap node = this;
        for (char c : word.toCharArray()) {
            node.children.putIfAbsent(c, new TrieHashMap());
            node = node.children.get(c);
        }
        node.isEndOfWord = true;
    }

    public boolean search(String word) {
        TrieHashMap node = findNode(word);
        return node != null && node.isEndOfWord;
    }

    public boolean startsWith(String prefix) {
        return findNode(prefix) != null;
    }

    private TrieHashMap findNode(String str) {
        TrieHashMap node = this;
        for (char c : str.toCharArray()) {
            if (!node.children.containsKey(c)) {
                return null;
            }
            node = node.children.get(c);
        }
        return node;
    }
}

// Compressed Trie (Radix Tree)
class CompressedTrie {
    private CompressedTrieNode root;

    private static class CompressedTrieNode {
        Map<String, CompressedTrieNode> children;
        boolean isEndOfWord;

        public CompressedTrieNode() {
            children = new HashMap<>();
            isEndOfWord = false;
        }
    }

    public CompressedTrie() {
        root = new CompressedTrieNode();
    }

    public void insert(String word) {
        insertHelper(root, word);
    }

    private void insertHelper(CompressedTrieNode node, String word) {
        if (word.isEmpty()) {
            node.isEndOfWord = true;
            return;
        }

        // Find the longest prefix that matches
        String matchingPrefix = "";
        CompressedTrieNode nextNode = null;

        for (Map.Entry<String, CompressedTrieNode> entry : node.children.entrySet()) {
            String key = entry.getKey();
            String common = getCommonPrefix(word, key);

            if (!common.isEmpty()) {
                matchingPrefix = common;
                nextNode = entry.getValue();
                break;
            }
        }

        if (matchingPrefix.isEmpty()) {
            // No matching prefix, create new node
            CompressedTrieNode newNode = new CompressedTrieNode();
            node.children.put(word, newNode);
            newNode.isEndOfWord = true;
        } else {
            // Split the existing edge if necessary
            String remainingWord = word.substring(matchingPrefix.length());
            String remainingKey = nextNode != null ?
                getRemainingPart(word, matchingPrefix) : "";

            if (!remainingWord.isEmpty()) {
                insertHelper(nextNode, remainingWord);
            } else {
                nextNode.isEndOfWord = true;
            }
        }
    }

    private String getCommonPrefix(String s1, String s2) {
        int minLen = Math.min(s1.length(), s2.length());
        for (int i = 0; i < minLen; i++) {
            if (s1.charAt(i) != s2.charAt(i)) {
                return s1.substring(0, i);
            }
        }
        return s1.substring(0, minLen);
    }

    private String getRemainingPart(String word, String prefix) {
        return word.startsWith(prefix) ? word.substring(prefix.length()) : word;
    }

    public boolean search(String word) {
        return searchHelper(root, word);
    }

    private boolean searchHelper(CompressedTrieNode node, String word) {
        if (word.isEmpty()) {
            return node.isEndOfWord;
        }

        for (Map.Entry<String, CompressedTrieNode> entry : node.children.entrySet()) {
            String key = entry.getKey();
            if (word.startsWith(key)) {
                return searchHelper(entry.getValue(), word.substring(key.length()));
            }
        }

        return false;
    }
}

// Test class
public class TrieImplementation1 {
    public static void main(String[] args) {
        System.out.println("=== Basic Trie Implementation ===");
        Trie trie = new Trie();

        // Insert words
        trie.insert("apple");
        trie.insert("app");
        trie.insert("application");
        trie.insert("bat");
        trie.insert("ball");
        trie.insert("cat");

        // Search operations
        System.out.println("Search 'apple': " + trie.search("apple"));        // true
        System.out.println("Search 'app': " + trie.search("app"));            // true
        System.out.println("Search 'appl': " + trie.search("appl"));          // false
        System.out.println("Search 'bat': " + trie.search("bat"));            // true
        System.out.println("Search 'ball': " + trie.search("ball"));          // true
        System.out.println("Search 'dog': " + trie.search("dog"));            // false

        // Prefix operations
        System.out.println("Starts with 'app': " + trie.startsWith("app"));  // true
        System.out.println("Starts with 'ba': " + trie.startsWith("ba"));    // true
        System.out.println("Starts with 'ca': " + trie.startsWith("ca"));    // true
        System.out.println("Starts with 'd': " + trie.startsWith("d"));      // false

        // Count operations
        System.out.println("Words with prefix 'app': " + trie.countWordsWithPrefix("app")); // 3
        System.out.println("Words with prefix 'b': " + trie.countWordsWithPrefix("b"));     // 2
        System.out.println("Total words: " + trie.size());

        System.out.println("\n=== Trie with Delete Operation ===");
        TrieWithDelete trieDelete = new TrieWithDelete();

        trieDelete.insert("hello");
        trieDelete.insert("help");
        trieDelete.insert("held");

        System.out.println("Search 'hello': " + trieDelete.search("hello")); // true
        System.out.println("Delete 'hello': " + trieDelete.delete("hello")); // true
        System.out.println("Search 'hello': " + trieDelete.search("hello")); // false
        System.out.println("Search 'help': " + trieDelete.search("help"));   // true

        System.out.println("\n=== HashMap Trie (Unicode Support) ===");
        TrieHashMap unicodeTrie = new TrieHashMap();

        unicodeTrie.insert("hello");
        unicodeTrie.insert("héllo"); // With accent
        unicodeTrie.insert("привет"); // Cyrillic

        System.out.println("Search 'hello': " + unicodeTrie.search("hello"));
        System.out.println("Search 'héllo': " + unicodeTrie.search("héllo"));
        System.out.println("Search 'привет': " + unicodeTrie.search("привет"));

        System.out.println("\n=== Edge Cases ===");
        Trie edgeTrie = new Trie();

        // Empty string
        edgeTrie.insert("");
        System.out.println("Search empty: " + edgeTrie.search(""));

        // Single character
        edgeTrie.insert("a");
        System.out.println("Search 'a': " + edgeTrie.search("a"));
        System.out.println("Starts with 'a': " + edgeTrie.startsWith("a"));

        // Null inputs
        try {
            edgeTrie.insert(null);
            edgeTrie.search(null);
        } catch (Exception e) {
            System.out.println("Null handling: " + e.getMessage());
        }
    }
}