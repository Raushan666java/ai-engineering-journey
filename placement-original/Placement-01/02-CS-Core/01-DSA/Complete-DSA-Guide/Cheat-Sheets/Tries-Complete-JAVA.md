# 🌳 Tries (Prefix Trees) - Complete Question Set (Love Babbar + Striver)
## Total: 8 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Trie Fundamentals:
1. **Prefix Tree** - Tree data structure for storing strings
2. **Character-based Branching** - Each node represents a character
3. **Path to Leaf** - Complete path represents a string
4. **Common Prefixes** - Shared prefixes use same path
5. **Applications** - Autocomplete, spell checker, word games

### Trie Structure & Operations:
```java
class TrieNode {
    TrieNode[] children;
    boolean isEndOfWord;
    int wordCount; // Number of words ending at this node
    int prefixCount; // Number of words with this prefix
    
    public TrieNode() {
        children = new TrieNode[26]; // For lowercase a-z
        isEndOfWord = false;
        wordCount = 0;
        prefixCount = 0;
    }
}

class Trie {
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    // Insert word into trie
    public void insert(String word) {
        TrieNode current = root;
        
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            
            if (current.children[index] == null) {
                current.children[index] = new TrieNode();
            }
            
            current = current.children[index];
            current.prefixCount++;
        }
        
        current.isEndOfWord = true;
        current.wordCount++;
    }
    
    // Search for exact word
    public boolean search(String word) {
        TrieNode node = searchNode(word);
        return node != null && node.isEndOfWord;
    }
    
    // Check if any word starts with prefix
    public boolean startsWith(String prefix) {
        return searchNode(prefix) != null;
    }
    
    // Helper method to find node for given string
    private TrieNode searchNode(String str) {
        TrieNode current = root;
        
        for (char ch : str.toCharArray()) {
            int index = ch - 'a';
            
            if (current.children[index] == null) {
                return null;
            }
            
            current = current.children[index];
        }
        
        return current;
    }
    
    // Delete word from trie
    public void delete(String word) {
        delete(root, word, 0);
    }
    
    private boolean delete(TrieNode current, String word, int index) {
        if (index == word.length()) {
            if (!current.isEndOfWord) {
                return false; // Word doesn't exist
            }
            
            current.isEndOfWord = false;
            current.wordCount--;
            
            // Return true if current has no children
            return !hasChildren(current);
        }
        
        char ch = word.charAt(index);
        TrieNode node = current.children[ch - 'a'];
        
        if (node == null) {
            return false; // Word doesn't exist
        }
        
        boolean shouldDeleteChild = delete(node, word, index + 1);
        
        if (shouldDeleteChild) {
            current.children[ch - 'a'] = null;
            node.prefixCount--;
            
            // Return true if current is not end of word and has no children
            return !current.isEndOfWord && !hasChildren(current);
        }
        
        return false;
    }
    
    private boolean hasChildren(TrieNode node) {
        for (TrieNode child : node.children) {
            if (child != null) return true;
        }
        return false;
    }
}
```

### Trie Patterns:
1. **Word Search** - Exact word matching
2. **Prefix Matching** - Finding all words with given prefix
3. **Autocomplete** - Suggesting words based on prefix
4. **Word Break** - Dictionary-based string segmentation
5. **Longest Common Prefix** - Finding shared prefixes

---

## 💡 Love Babbar Trie Questions (449-453)

### 449. Implement Trie
**Problem**: Design and implement a trie data structure  
**Difficulty**: Medium  
**Pattern**: Basic Trie with Insert/Search/StartsWith

```java
class Trie {
    class TrieNode {
        TrieNode[] children;
        boolean isWord;
        
        TrieNode() {
            children = new TrieNode[26];
            isWord = false;
        }
    }
    
    private TrieNode root;
    
    public Trie() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode node = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        
        node.isWord = true;
    }
    
    public boolean search(String word) {
        TrieNode node = getNode(word);
        return node != null && node.isWord;
    }
    
    public boolean startsWith(String prefix) {
        return getNode(prefix) != null;
    }
    
    private TrieNode getNode(String word) {
        TrieNode node = root;
        
        for (char c : word.toCharArray()) {
            int index = c - 'a';
            if (node.children[index] == null) {
                return null;
            }
            node = node.children[index];
        }
        
        return node;
    }
    
    // Get all words with given prefix
    public List<String> getWordsWithPrefix(String prefix) {
        List<String> result = new ArrayList<>();
        TrieNode prefixNode = getNode(prefix);
        
        if (prefixNode != null) {
            dfs(prefixNode, new StringBuilder(prefix), result);
        }
        
        return result;
    }
    
    private void dfs(TrieNode node, StringBuilder current, List<String> result) {
        if (node.isWord) {
            result.add(current.toString());
        }
        
        for (int i = 0; i < 26; i++) {
            if (node.children[i] != null) {
                current.append((char) ('a' + i));
                dfs(node.children[i], current, result);
                current.deleteCharAt(current.length() - 1);
            }
        }
    }
    
    // Count words with given prefix
    public int countWordsWithPrefix(String prefix) {
        TrieNode prefixNode = getNode(prefix);
        return prefixNode != null ? countWords(prefixNode) : 0;
    }
    
    private int countWords(TrieNode node) {
        int count = node.isWord ? 1 : 0;
        
        for (TrieNode child : node.children) {
            if (child != null) {
                count += countWords(child);
            }
        }
        
        return count;
    }
    
    // Find longest common prefix
    public String longestCommonPrefix() {
        StringBuilder lcp = new StringBuilder();
        TrieNode node = root;
        
        while (node != null) {
            int childCount = 0;
            int nextIndex = -1;
            
            for (int i = 0; i < 26; i++) {
                if (node.children[i] != null) {
                    childCount++;
                    nextIndex = i;
                }
            }
            
            // Stop if more than one child or end of word
            if (childCount != 1 || node.isWord) {
                break;
            }
            
            lcp.append((char) ('a' + nextIndex));
            node = node.children[nextIndex];
        }
        
        return lcp.toString();
    }
}
```
**Time**: O(m) for operations where m is word length, **Space**: O(ALPHABET_SIZE × N × M)

---

### 450. Longest Word with All Prefixes
**Problem**: Find longest word such that all its prefixes exist  
**Difficulty**: Medium  
**Pattern**: Trie + DFS for Validation

```java
public String longestWord(String[] words) {
    Trie trie = new Trie();
    
    // Insert all words into trie
    for (String word : words) {
        trie.insert(word);
    }
    
    String result = "";
    
    // Check each word if all prefixes exist
    for (String word : words) {
        if (hasAllPrefixes(trie, word)) {
            if (word.length() > result.length() || 
                (word.length() == result.length() && word.compareTo(result) < 0)) {
                result = word;
            }
        }
    }
    
    return result;
}

private boolean hasAllPrefixes(Trie trie, String word) {
    for (int i = 1; i <= word.length(); i++) {
        if (!trie.search(word.substring(0, i))) {
            return false;
        }
    }
    return true;
}

// Alternative approach using DFS in trie
public String longestWordDFS(String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    return dfsLongestWord(trie.root, "");
}

private String dfsLongestWord(TrieNode node, String current) {
    String longest = current;
    
    for (int i = 0; i < 26; i++) {
        if (node.children[i] != null && node.children[i].isWord) {
            String candidate = dfsLongestWord(node.children[i], current + (char)('a' + i));
            
            if (candidate.length() > longest.length() || 
                (candidate.length() == longest.length() && candidate.compareTo(longest) < 0)) {
                longest = candidate;
            }
        }
    }
    
    return longest;
}

// Find all words that can be built character by character
public List<String> findAllBuildableWords(String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    List<String> result = new ArrayList<>();
    
    for (String word : words) {
        if (canBeBuildChar(trie, word)) {
            result.add(word);
        }
    }
    
    return result;
}

private boolean canBeBuildChar(Trie trie, String word) {
    TrieNode node = trie.root;
    
    for (char c : word.toCharArray()) {
        int index = c - 'a';
        if (node.children[index] == null) {
            return false;
        }
        node = node.children[index];
        
        // Each prefix must be a complete word
        if (!node.isWord) {
            return false;
        }
    }
    
    return true;
}

// Count words that can be built from other words
public int countBuildableWords(String[] words) {
    Trie trie = new Trie();
    Set<String> wordSet = new HashSet<>(Arrays.asList(words));
    
    for (String word : words) {
        trie.insert(word);
    }
    
    int count = 0;
    
    for (String word : words) {
        if (canBeBuildFromOthers(word, wordSet)) {
            count++;
        }
    }
    
    return count;
}

private boolean canBeBuildFromOthers(String word, Set<String> wordSet) {
    if (word.length() <= 1) return false;
    
    boolean[] dp = new boolean[word.length() + 1];
    dp[0] = true;
    
    for (int i = 1; i <= word.length(); i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j]) {
                String substring = word.substring(j, i);
                if (wordSet.contains(substring) && !substring.equals(word)) {
                    dp[i] = true;
                    break;
                }
            }
        }
    }
    
    return dp[word.length()];
}
```
**Time**: O(sum of all word lengths), **Space**: O(sum of all word lengths)

---

### 451. Maximum XOR Trie
**Problem**: Find maximum XOR of any two numbers using trie  
**Difficulty**: Hard  
**Pattern**: Binary Trie for Bit Manipulation

```java
class XORTrie {
    class TrieNode {
        TrieNode[] children;
        
        TrieNode() {
            children = new TrieNode[2]; // 0 and 1
        }
    }
    
    private TrieNode root;
    
    public XORTrie() {
        root = new TrieNode();
    }
    
    public void insert(int num) {
        TrieNode node = root;
        
        // Process from most significant bit (31st bit) to least significant
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            
            if (node.children[bit] == null) {
                node.children[bit] = new TrieNode();
            }
            
            node = node.children[bit];
        }
    }
    
    public int findMaxXOR(int num) {
        TrieNode node = root;
        int maxXor = 0;
        
        for (int i = 31; i >= 0; i--) {
            int bit = (num >> i) & 1;
            int oppositeBit = 1 - bit;
            
            if (node.children[oppositeBit] != null) {
                maxXor |= (1 << i);
                node = node.children[oppositeBit];
            } else {
                node = node.children[bit];
            }
        }
        
        return maxXor;
    }
}

public int findMaximumXOR(int[] nums) {
    XORTrie trie = new XORTrie();
    int maxXor = 0;
    
    for (int num : nums) {
        trie.insert(num);
        maxXor = Math.max(maxXor, trie.findMaxXOR(num));
    }
    
    return maxXor;
}

// Maximum XOR with queries
public int[] maximizeXor(int[] nums, int[][] queries) {
    Arrays.sort(nums);
    
    // Sort queries by limit
    Integer[] indices = new Integer[queries.length];
    for (int i = 0; i < queries.length; i++) {
        indices[i] = i;
    }
    Arrays.sort(indices, (a, b) -> queries[a][1] - queries[b][1]);
    
    int[] result = new int[queries.length];
    XORTrie trie = new XORTrie();
    int numIndex = 0;
    
    for (int i : indices) {
        int x = queries[i][0];
        int limit = queries[i][1];
        
        // Add all numbers <= limit to trie
        while (numIndex < nums.length && nums[numIndex] <= limit) {
            trie.insert(nums[numIndex]);
            numIndex++;
        }
        
        result[i] = numIndex > 0 ? trie.findMaxXOR(x) : -1;
    }
    
    return result;
}

// Minimum XOR pair
public int findMinXORPair(int[] nums) {
    XORTrie trie = new XORTrie();
    int minXor = Integer.MAX_VALUE;
    
    for (int num : nums) {
        if (trie.root.children[0] != null || trie.root.children[1] != null) {
            minXor = Math.min(minXor, findMinXOR(trie, num));
        }
        trie.insert(num);
    }
    
    return minXor;
}

private int findMinXOR(XORTrie trie, int num) {
    TrieNode node = trie.root;
    int minXor = 0;
    
    for (int i = 31; i >= 0; i--) {
        int bit = (num >> i) & 1;
        
        if (node.children[bit] != null) {
            node = node.children[bit];
        } else {
            minXor |= (1 << i);
            node = node.children[1 - bit];
        }
    }
    
    return minXor;
}
```
**Time**: O(32 × n), **Space**: O(32 × n)

---

### 452. Word Search II
**Problem**: Find all words in 2D board using trie  
**Difficulty**: Hard  
**Pattern**: Trie + Backtracking on Grid

```java
public List<String> findWords(char[][] board, String[] words) {
    Trie trie = new Trie();
    
    // Build trie with all words
    for (String word : words) {
        trie.insert(word);
    }
    
    Set<String> result = new HashSet<>();
    boolean[][] visited = new boolean[board.length][board[0].length];
    
    // Try starting from each cell
    for (int i = 0; i < board.length; i++) {
        for (int j = 0; j < board[0].length; j++) {
            dfsWordSearch(board, i, j, trie.root, "", visited, result);
        }
    }
    
    return new ArrayList<>(result);
}

private void dfsWordSearch(char[][] board, int row, int col, TrieNode node, 
                          String current, boolean[][] visited, Set<String> result) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || 
        visited[row][col]) {
        return;
    }
    
    char ch = board[row][col];
    int index = ch - 'a';
    
    if (node.children[index] == null) {
        return;
    }
    
    node = node.children[index];
    current += ch;
    
    if (node.isWord) {
        result.add(current);
    }
    
    visited[row][col] = true;
    
    // Explore all 4 directions
    int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    for (int[] dir : directions) {
        dfsWordSearch(board, row + dir[0], col + dir[1], node, current, visited, result);
    }
    
    visited[row][col] = false; // Backtrack
}

// Optimized version with trie pruning
public List<String> findWordsOptimized(char[][] board, String[] words) {
    TrieNodeOptimized root = buildTrie(words);
    List<String> result = new ArrayList<>();
    
    for (int i = 0; i < board.length; i++) {
        for (int j = 0; j < board[0].length; j++) {
            dfsOptimized(board, i, j, root, result);
        }
    }
    
    return result;
}

class TrieNodeOptimized {
    TrieNodeOptimized[] children = new TrieNodeOptimized[26];
    String word;
}

private TrieNodeOptimized buildTrie(String[] words) {
    TrieNodeOptimized root = new TrieNodeOptimized();
    
    for (String word : words) {
        TrieNodeOptimized node = root;
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            if (node.children[index] == null) {
                node.children[index] = new TrieNodeOptimized();
            }
            node = node.children[index];
        }
        node.word = word;
    }
    
    return root;
}

private void dfsOptimized(char[][] board, int row, int col, TrieNodeOptimized node, List<String> result) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return;
    }
    
    char ch = board[row][col];
    if (ch == '#' || node.children[ch - 'a'] == null) {
        return;
    }
    
    node = node.children[ch - 'a'];
    
    if (node.word != null) {
        result.add(node.word);
        node.word = null; // Avoid duplicates
    }
    
    board[row][col] = '#'; // Mark as visited
    
    // Explore all 4 directions
    int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    for (int[] dir : directions) {
        dfsOptimized(board, row + dir[0], col + dir[1], node, result);
    }
    
    board[row][col] = ch; // Restore
}

// Count total words found in board
public int countWordsInBoard(char[][] board, String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    Set<String> foundWords = new HashSet<>();
    boolean[][] visited = new boolean[board.length][board[0].length];
    
    for (int i = 0; i < board.length; i++) {
        for (int j = 0; j < board[0].length; j++) {
            dfsCount(board, i, j, trie.root, "", visited, foundWords);
        }
    }
    
    return foundWords.size();
}

private void dfsCount(char[][] board, int row, int col, TrieNode node, 
                     String current, boolean[][] visited, Set<String> foundWords) {
    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || 
        visited[row][col]) {
        return;
    }
    
    char ch = board[row][col];
    int index = ch - 'a';
    
    if (node.children[index] == null) {
        return;
    }
    
    node = node.children[index];
    current += ch;
    
    if (node.isWord) {
        foundWords.add(current);
    }
    
    visited[row][col] = true;
    
    int[][] directions = {{-1, 0}, {1, 0}, {0, -1}, {0, 1}};
    for (int[] dir : directions) {
        dfsCount(board, row + dir[0], col + dir[1], node, current, visited, foundWords);
    }
    
    visited[row][col] = false;
}
```
**Time**: O(m × n × 4^L) where L is max word length, **Space**: O(sum of word lengths)

---

## 🚀 Striver Trie Questions

### S1. Implement Trie with Count
**Problem**: Trie with count of words and prefixes  
**Difficulty**: Medium  
**Pattern**: Enhanced Trie with Counting

```java
class TrieWithCount {
    class TrieNode {
        TrieNode[] children;
        int wordCount;
        int prefixCount;
        
        TrieNode() {
            children = new TrieNode[26];
            wordCount = 0;
            prefixCount = 0;
        }
    }
    
    private TrieNode root;
    
    public TrieWithCount() {
        root = new TrieNode();
    }
    
    public void insert(String word) {
        TrieNode node = root;
        
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            
            if (node.children[index] == null) {
                node.children[index] = new TrieNode();
            }
            
            node = node.children[index];
            node.prefixCount++;
        }
        
        node.wordCount++;
    }
    
    public int countWordsEqualTo(String word) {
        TrieNode node = findNode(word);
        return node != null ? node.wordCount : 0;
    }
    
    public int countWordsStartingWith(String prefix) {
        TrieNode node = findNode(prefix);
        return node != null ? node.prefixCount : 0;
    }
    
    public void erase(String word) {
        TrieNode node = root;
        
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            node = node.children[index];
            
            if (node == null) return; // Word doesn't exist
            
            node.prefixCount--;
        }
        
        if (node.wordCount > 0) {
            node.wordCount--;
        }
    }
    
    private TrieNode findNode(String str) {
        TrieNode node = root;
        
        for (char ch : str.toCharArray()) {
            int index = ch - 'a';
            
            if (node.children[index] == null) {
                return null;
            }
            
            node = node.children[index];
        }
        
        return node;
    }
    
    // Get all words in trie
    public List<String> getAllWords() {
        List<String> words = new ArrayList<>();
        getAllWordsHelper(root, new StringBuilder(), words);
        return words;
    }
    
    private void getAllWordsHelper(TrieNode node, StringBuilder current, List<String> words) {
        if (node.wordCount > 0) {
            for (int i = 0; i < node.wordCount; i++) {
                words.add(current.toString());
            }
        }
        
        for (int i = 0; i < 26; i++) {
            if (node.children[i] != null) {
                current.append((char) ('a' + i));
                getAllWordsHelper(node.children[i], current, words);
                current.deleteCharAt(current.length() - 1);
            }
        }
    }
    
    // Find shortest unique prefix for each word
    public Map<String, String> getShortestUniquePrefixes(List<String> words) {
        // Insert all words
        for (String word : words) {
            insert(word);
        }
        
        Map<String, String> result = new HashMap<>();
        
        for (String word : words) {
            String shortestPrefix = findShortestUniquePrefix(word);
            result.put(word, shortestPrefix);
        }
        
        return result;
    }
    
    private String findShortestUniquePrefix(String word) {
        TrieNode node = root;
        StringBuilder prefix = new StringBuilder();
        
        for (char ch : word.toCharArray()) {
            int index = ch - 'a';
            node = node.children[index];
            prefix.append(ch);
            
            if (node.prefixCount == 1) {
                break;
            }
        }
        
        return prefix.toString();
    }
}
```
**Time**: O(m) for operations, **Space**: O(ALPHABET_SIZE × N × M)

---

### S2. Complete String
**Problem**: Find longest string where all prefixes exist  
**Difficulty**: Medium  
**Pattern**: Trie + Complete Path Validation

```java
public String completeString(String[] words) {
    Trie trie = new Trie();
    
    // Insert all words
    for (String word : words) {
        trie.insert(word);
    }
    
    String result = "";
    
    // Check each word for complete string property
    for (String word : words) {
        if (isCompleteString(trie, word)) {
            if (word.length() > result.length() || 
                (word.length() == result.length() && word.compareTo(result) < 0)) {
                result = word;
            }
        }
    }
    
    return result.isEmpty() ? "None" : result;
}

private boolean isCompleteString(Trie trie, String word) {
    TrieNode node = trie.root;
    
    for (char ch : word.toCharArray()) {
        int index = ch - 'a';
        
        if (node.children[index] == null || !node.children[index].isWord) {
            return false;
        }
        
        node = node.children[index];
    }
    
    return true;
}

// Alternative: Find all complete strings
public List<String> findAllCompleteStrings(String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    List<String> completeStrings = new ArrayList<>();
    
    for (String word : words) {
        if (isCompleteString(trie, word)) {
            completeStrings.add(word);
        }
    }
    
    // Sort by length (descending) then lexicographically
    completeStrings.sort((a, b) -> {
        if (a.length() != b.length()) {
            return b.length() - a.length();
        }
        return a.compareTo(b);
    });
    
    return completeStrings;
}

// Count complete strings
public int countCompleteStrings(String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    int count = 0;
    
    for (String word : words) {
        if (isCompleteString(trie, word)) {
            count++;
        }
    }
    
    return count;
}

// Find complete strings with DFS
public List<String> findCompleteStringsDFS(String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    List<String> result = new ArrayList<>();
    dfsCompleteStrings(trie.root, new StringBuilder(), result);
    
    return result;
}

private void dfsCompleteStrings(TrieNode node, StringBuilder current, List<String> result) {
    if (node.isWord) {
        result.add(current.toString());
    }
    
    for (int i = 0; i < 26; i++) {
        if (node.children[i] != null && node.children[i].isWord) {
            current.append((char) ('a' + i));
            dfsCompleteStrings(node.children[i], current, result);
            current.deleteCharAt(current.length() - 1);
        }
    }
}

// Check if trie has complete string property
public boolean hasCompleteStringProperty(String[] words) {
    Trie trie = new Trie();
    
    for (String word : words) {
        trie.insert(word);
    }
    
    return dfsCheckComplete(trie.root);
}

private boolean dfsCheckComplete(TrieNode node) {
    boolean hasCompleteChild = false;
    
    for (int i = 0; i < 26; i++) {
        if (node.children[i] != null) {
            if (!node.children[i].isWord) {
                return false; // Found incomplete path
            }
            
            if (dfsCheckComplete(node.children[i])) {
                hasCompleteChild = true;
            }
        }
    }
    
    return true;
}
```
**Time**: O(sum of word lengths), **Space**: O(sum of word lengths)

---

## 📈 Summary

### Key Trie Patterns Mastered:
1. **Basic Operations** - Insert, search, startsWith with character-by-character processing
2. **Word Building** - Finding words that can be built from prefixes
3. **Bit Manipulation Tries** - Binary tries for XOR operations
4. **Grid Word Search** - Combining trie with backtracking on 2D grids
5. **Counting & Statistics** - Enhanced tries with word and prefix counts
6. **Complete Strings** - Validating that all prefixes exist

### Important Algorithms:
- **Standard Trie** - Basic string storage and retrieval
- **Binary Trie** - For bit manipulation and XOR problems
- **Word Search** - Grid traversal with trie-guided search
- **Autocomplete** - Prefix-based word suggestions
- **Unique Prefix Finding** - Shortest distinguishing prefixes

### Trie Optimizations:
- **Memory Efficiency** - Compressed tries for space optimization
- **Lazy Deletion** - Marking nodes instead of actual removal
- **Path Compression** - Combining single-child chains
- **Reference Counting** - Tracking word and prefix counts

### Common Applications:
- **Autocomplete Systems** - Real-time word suggestions
- **Spell Checkers** - Dictionary-based word validation
- **IP Routing** - Longest prefix matching
- **Word Games** - Boggle, Scrabble word finding
- **String Matching** - Efficient multi-pattern search

### Performance Characteristics:
- **Insert/Search** - O(m) where m is string length
- **Space Usage** - O(ALPHABET_SIZE × N × M) worst case
- **Prefix Operations** - Very fast for prefix-based queries
- **Memory Locality** - Good cache performance for common prefixes

### Problem-Solving Strategy:
1. **Identify Use Case** - String prefix operations, word building, XOR problems
2. **Choose Trie Type** - Character trie vs binary trie vs compressed trie
3. **Design Node Structure** - What additional information to store
4. **Implement Operations** - Insert, search, delete with proper handling
5. **Optimize** - Consider space/time tradeoffs and specific use case needs

### Next Steps:
- Practice more advanced trie applications
- Learn about compressed tries (radix trees)
- Study suffix trees and suffix arrays
- Move to final topic: Searching & Sorting algorithms

---
*This completes the comprehensive tries section with detailed Java solutions and optimization techniques.*
