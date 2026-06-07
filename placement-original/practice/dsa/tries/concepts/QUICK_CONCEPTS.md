# TRIES (PREFIX TREES) - QUICK CONCEPTS

## Core Concepts

### 1. Trie Node Structure
```java
class TrieNode {
    TrieNode[] children = new TrieNode[26]; // For lowercase English
    boolean isEndOfWord = false;
    int count = 0; // Optional: count words passing through
}
```

### 2. Basic Operations

#### Insert Operation
```java
public void insert(String word) {
    TrieNode node = root;
    for (char c : word.toCharArray()) {
        int index = c - 'a';
        if (node.children[index] == null) {
            node.children[index] = new TrieNode();
        }
        node = node.children[index];
    }
    node.isEndOfWord = true;
}
```

#### Search Operation
```java
public boolean search(String word) {
    TrieNode node = root;
    for (char c : word.toCharArray()) {
        int index = c - 'a';
        if (node.children[index] == null) {
            return false;
        }
        node = node.children[index];
    }
    return node.isEndOfWord;
}
```

#### Starts With Operation
```java
public boolean startsWith(String prefix) {
    TrieNode node = root;
    for (char c : prefix.toCharArray()) {
        int index = c - 'a';
        if (node.children[index] == null) {
            return false;
        }
        node = node.children[index];
    }
    return true;
}
```

### 3. Advanced Trie Features

#### With Word Count
```java
class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEndOfWord = false;
    int wordCount = 0; // Words ending here
    int prefixCount = 0; // Words passing through
}
```

#### Delete Operation
```java
public boolean delete(String word) {
    return deleteHelper(root, word, 0);
}

private boolean deleteHelper(TrieNode node, String word, int index) {
    if (index == word.length()) {
        if (!node.isEndOfWord) return false;
        node.isEndOfWord = false;
        return node.children.length == 0; // Can delete if no children
    }

    int charIndex = word.charAt(index) - 'a';
    if (node.children[charIndex] == null) return false;

    boolean shouldDelete = deleteHelper(node.children[charIndex], word, index + 1);

    if (shouldDelete) {
        node.children[charIndex] = null;
        return !node.isEndOfWord && node.children.length == 0;
    }

    return false;
}
```

### 4. Common Patterns

#### Autocomplete (DFS Traversal)
```java
public List<String> getSuggestions(String prefix) {
    List<String> result = new ArrayList<>();
    TrieNode node = findNode(prefix);
    if (node == null) return result;

    dfs(node, new StringBuilder(prefix), result);
    return result;
}

private void dfs(TrieNode node, StringBuilder current, List<String> result) {
    if (node.isEndOfWord) {
        result.add(current.toString());
    }

    for (int i = 0; i < 26; i++) {
        if (node.children[i] != null) {
            current.append((char)('a' + i));
            dfs(node.children[i], current, result);
            current.deleteCharAt(current.length() - 1);
        }
    }
}
```

#### Word Search in 2D Board
- Use trie to store dictionary words
- DFS from each board cell
- Prune search using trie structure
- Mark visited cells to avoid cycles

#### Longest Common Prefix
```java
public String longestCommonPrefix(String[] strs) {
    if (strs == null || strs.length == 0) return "";

    TrieNode node = root;
    StringBuilder prefix = new StringBuilder();

    for (char c : strs[0].toCharArray()) {
        int index = c - 'a';
        if (node.children[index] == null) break;

        prefix.append(c);
        node = node.children[index];

        // Check if all strings have this prefix
        for (int i = 1; i < strs.length; i++) {
            if (i >= strs[i].length() || strs[i].charAt(i-1) != c) {
                return prefix.substring(0, prefix.length() - 1);
            }
        }
    }

    return prefix.toString();
}
```

### 5. Memory Optimization

#### Compressed Trie (Radix Tree)
- Merge nodes with single child
- Store strings instead of single characters
- Reduce memory usage for sparse tries

#### Ternary Search Tree
- Each node has 3 children: left, middle, right
- Middle child for equal values
- Better space efficiency than standard trie

### 6. Applications and Use Cases

#### Autocomplete System
- Insert all dictionary words
- For partial input, find node and traverse all paths
- Return top suggestions by frequency

#### Spell Checker
- Insert correct words into trie
- For misspelled word, find closest matches
- Use edit distance for suggestions

#### IP Routing
- Store IP prefixes in trie
- Each bit represents a decision
- Longest prefix matching for routing

### 7. Performance Considerations

#### Time Complexity Analysis
- **Insert/Search**: O(m) where m is word length
- **Prefix Search**: O(m + k) where k is number of matches
- **Memory**: O(N*M) where N is words, M is average length

#### Space Optimization
- Use HashMap instead of array for Unicode
- Compress common prefixes
- Lazy initialization of children arrays

#### Concurrency
- Read operations are thread-safe
- Write operations need synchronization
- Consider copy-on-write for high read scenarios

### 8. Interview Tips

#### Implementation Questions
- **Start with basic operations**: Insert, search, startsWith
- **Handle edge cases**: Empty strings, null inputs
- **Choose data structure**: Array vs HashMap
- **Consider memory constraints**: Large datasets

#### Problem-Solving Approach
1. **Identify trie usage**: String prefix operations needed?
2. **Design node structure**: What data to store per node?
3. **Implement core operations**: Insert, search, traversal
4. **Handle special cases**: Wildcards, case sensitivity
5. **Optimize for constraints**: Time, space, memory

#### Common Mistakes
- **Null pointer exceptions**: Check node existence
- **Character indexing**: Handle case sensitivity
- **Memory leaks**: Clean up unused nodes
- **Traversal bugs**: Correct DFS implementation
- **Edge cases**: Empty strings, single characters

#### Advanced Techniques
- **Wildcard matching**: Support . and * patterns
- **Frequency counting**: Track word popularity
- **Serialization**: Save/load trie from disk
- **Distributed tries**: Handle large-scale data

Remember: Tries excel at prefix-based operations and are fundamental for string processing problems. Master the basic structure and traversal patterns for efficient implementations!