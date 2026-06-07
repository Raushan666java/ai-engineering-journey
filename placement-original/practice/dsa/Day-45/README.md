# Day 45: Trie Data Structure - Prefix Tree Mastery

## 📋 Overview
**Focus**: Complete Trie implementation, prefix matching, auto-complete systems, advanced Trie applications  
**Difficulty**: Medium to Hard  
**Time Required**: 9 hours  
**Problems to Solve**: 8 comprehensive Trie problems  

## 🎯 Learning Objectives
- Master Trie data structure and its implementation
- Understand prefix matching and search operations
- Learn Trie applications (auto-complete, spell check, IP routing)
- Implement complex Trie variations (compressed, ternary)
- Apply Tries to solve real-world problems
- Optimize memory usage in Trie structures

## 📚 Today's Topics

### 1. Trie Fundamentals
- **Structure**: Tree-like data structure for storing strings
- **Node Design**: Character storage, children map, end-of-word flag
- **Operations**: Insert O(m), Search O(m), Delete O(m), where m = word length
- **Memory**: O(ALPHABET_SIZE * N * M) where N = number of words, M = avg length

### 2. Core Trie Operations
```
Insert(word):
  1. Start from root
  2. For each character in word:
     - If child node doesn't exist, create it
     - Move to child node
  3. Mark last node as end-of-word

Search(word):
  1. Start from root
  2. For each character:
     - If child doesn't exist, return false
     - Move to child
  3. Check if last node is end-of-word

StartsWith(prefix):
  1. Same as Search but without checking end-of-word
```

### 3. Trie Applications

#### **Auto-Complete Systems**
- Store dictionary of words
- Given prefix, return all words with that prefix
- Used in: Search engines, IDE code completion, mobile keyboards
- Time: O(p + n) where p = prefix length, n = result count

#### **Spell Checking**
- Store valid words in Trie
- Check if word exists
- Suggest corrections using edit distance
- Find words within k edits

#### **IP Routing (Longest Prefix Matching)**
- Store IP addresses as binary strings
- Find longest matching prefix for routing
- Critical in network routers

#### **Word Games**
- Boggle board: Find all valid words
- Scrabble: Check word validity
- Crossword puzzles: Find fitting words

### 4. Trie Variations

#### **Compressed Trie (Radix Tree)**
- Merge nodes with single child
- Reduces space by storing substrings
- Used in: Git, routing tables

#### **Ternary Search Tree**
- Each node has 3 children: less, equal, greater
- Space efficient alternative
- Better cache locality

#### **Suffix Tree**
- Trie of all suffixes of a string
- Pattern matching in O(m) time
- Used in: Bioinformatics, data compression

## 💻 Problems Breakdown

### Problem Set

| # | Problem | Difficulty | Pattern | Time | Space |
|---|---------|------------|---------|------|-------|
| 1 | Implement Trie (Prefix Tree) | Medium | Basic Implementation | O(m) | O(n*m) |
| 2 | Add and Search Word | Medium | Wildcard Search | O(m) | O(n*m) |
| 3 | Word Search II | Hard | Trie + Backtracking | O(m*n*4^L) | O(n*m) |
| 4 | Replace Words | Medium | Prefix Matching | O(n*m) | O(n*m) |
| 5 | Maximum XOR | Medium | Bit Manipulation Trie | O(n) | O(n) |
| 6 | Palindrome Pairs | Hard | Trie + Palindrome | O(n*k²) | O(n*k) |
| 7 | Design Search Autocomplete | Hard | Trie + Priority Queue | O(p+k log k) | O(n*m) |
| 8 | Stream of Characters | Medium | Reverse Trie | O(m) | O(n*m) |

## 🔍 Problem Analysis

### Problem 1: Implement Trie (Prefix Tree)
**LeetCode #208**

Implement Trie with:
- `insert(word)`: Insert word into trie
- `search(word)`: Return true if word exists
- `startsWith(prefix)`: Return true if any word starts with prefix

```java
Example:
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // true
trie.search("app");     // false
trie.startsWith("app"); // true
trie.insert("app");
trie.search("app");     // true
```

**Key Insights**:
- Use HashMap for children (flexible alphabet size)
- Boolean flag for word end
- All operations O(word length)

### Problem 2: Design Add and Search Words Data Structure
**LeetCode #211**

Support wildcard '.' matching any single character.

```java
Example:
WordDictionary dict = new WordDictionary();
dict.addWord("bad");
dict.addWord("dad");
dict.addWord("mad");
dict.search("pad"); // false
dict.search("bad"); // true
dict.search(".ad"); // true (matches bad, dad, mad)
dict.search("b.."); // true (matches bad)
```

**Key Insights**:
- Use DFS/backtracking for wildcard search
- Try all branches when encountering '.'
- Worst case O(26^m) for all wildcards

### Problem 3: Word Search II
**LeetCode #212**

Given m×n board and list of words, find all words on board.
Words constructed from sequentially adjacent cells (no reuse).

```java
Example:
board = [['o','a','a','n'],
         ['e','t','a','e'],
         ['i','h','k','r'],
         ['i','f','l','v']]
words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
```

**Key Insights**:
- Build Trie from word list
- DFS on board, matching Trie paths
- Mark visited cells, backtrack
- Remove found words to avoid duplicates

### Problem 4: Replace Words
**LeetCode #648**

Replace words in sentence with their shortest root from dictionary.

```java
Example:
dictionary = ["cat","bat","rat"]
sentence = "the cattle was rattled by the battery"
Output: "the cat was rat by the bat"
```

**Key Insights**:
- Insert all roots into Trie
- For each word, find shortest prefix in Trie
- Replace if root found

### Problem 5: Maximum XOR of Two Numbers
**LeetCode #421**

Find maximum XOR of two numbers in array.

```java
Example:
nums = [3,10,5,25,2,8]
Output: 28
Explanation: 5 XOR 25 = 28 (101 XOR 11001)
```

**Key Insights**:
- Build binary Trie (0/1 children)
- For each number, find complement that maximizes XOR
- Go opposite direction in Trie when possible

### Problem 6: Palindrome Pairs
**LeetCode #336**

Find all pairs (i, j) where words[i] + words[j] is a palindrome.

```java
Example:
words = ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]]
Explanation: "abcddcba", "dcbaabcd", "slls", "llssssll"
```

**Key Insights**:
- Store reversed words in Trie
- For each word, check:
  1. If reverse exists as complete word
  2. If prefix forms palindrome + rest has reverse
  3. If suffix forms palindrome + rest has reverse

### Problem 7: Design Search Autocomplete System
**LeetCode #642**

Implement autocomplete returning top 3 historical hot sentences.

```java
Example:
Input: ["i love you", "island", "ironman"]
Typing "i" → return ["i love you", "island", "ironman"]
Typing " " → return ["i love you"]
```

**Key Insights**:
- Store sentences with frequency in Trie
- Track current prefix as user types
- Use priority queue for top-k results
- Handle backspace and completion

### Problem 8: Stream of Characters
**LeetCode #1032**

Query stream of characters, return true if any suffix matches word.

```java
Example:
words = ["cd","f","kl"]
stream = "abcdefghijkl"
query('a') → false
query('b') → false
query('c') → false
query('d') → true  (cd found)
```

**Key Insights**:
- Build Trie with reversed words
- Maintain query buffer
- Check suffixes in Trie

## 📊 Time Complexity Summary

| Operation | Basic Trie | Binary Trie | Compressed Trie |
|-----------|-----------|-------------|-----------------|
| Insert | O(m) | O(log V) | O(m) |
| Search | O(m) | O(log V) | O(m) |
| StartsWith | O(m) | O(log V) | O(m) |
| Delete | O(m) | O(log V) | O(m) |
| Space | O(ALPHABET * n * m) | O(n * log V) | O(total chars) |

Where:
- m = word length
- n = number of words
- V = maximum value (for binary Trie)
- ALPHABET = 26 for lowercase English

## 🎯 Implementation Patterns

### Pattern 1: Standard Trie Node
```java
class TrieNode {
    Map<Character, TrieNode> children;
    boolean isEndOfWord;
    
    TrieNode() {
        children = new HashMap<>();
        isEndOfWord = false;
    }
}
```

### Pattern 2: Binary Trie Node (for numbers)
```java
class BitTrieNode {
    BitTrieNode zero;
    BitTrieNode one;
    
    BitTrieNode() {
        zero = null;
        one = null;
    }
}
```

### Pattern 3: Trie with Metadata
```java
class TrieNodeWithData {
    Map<Character, TrieNodeWithData> children;
    boolean isEnd;
    String word;      // Store complete word
    int frequency;    // For autocomplete
    List<String> suggestions;  // Top suggestions
}
```

### Pattern 4: Space-Optimized (Array)
```java
class TrieNode {
    TrieNode[] children = new TrieNode[26];  // For lowercase a-z
    boolean isEnd;
}
```

## 🔄 Trie Operations Implementation

### Insert Operation
```java
public void insert(String word) {
    TrieNode node = root;
    for (char c : word.toCharArray()) {
        node.children.putIfAbsent(c, new TrieNode());
        node = node.children.get(c);
    }
    node.isEndOfWord = true;
}
```

### Search Operation
```java
public boolean search(String word) {
    TrieNode node = searchPrefix(word);
    return node != null && node.isEndOfWord;
}

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
```

### Delete Operation
```java
public void delete(String word) {
    deleteHelper(root, word, 0);
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
```

## 💡 Pro Tips

### Memory Optimization
1. **Array vs HashMap**: Use array for fixed alphabets (faster), HashMap for large/variable alphabets
2. **Compressed Trie**: Merge single-child chains
3. **Lazy Deletion**: Mark nodes instead of physical deletion
4. **Reference Counting**: Track word count per node

### Performance Tips
1. **Early Termination**: Stop search if prefix not found
2. **Caching**: Cache common prefix results
3. **Batch Operations**: Insert multiple words efficiently
4. **Iterative over Recursive**: Avoid stack overhead

### Common Pitfalls
1. **Not marking end-of-word**: "app" and "apple" distinction
2. **Memory leaks**: Ensure proper deletion
3. **Case sensitivity**: Normalize input
4. **Empty string**: Handle edge case
5. **Wildcard overflow**: Limit recursion depth

## 🎓 Real-World Applications

### 1. Search Engines
- **Google Search**: Autocomplete suggestions
- **Implementation**: Trie with frequency ranking
- **Scale**: Billions of queries, distributed Tries

### 2. IDE Code Completion
- **VS Code**: IntelliSense suggestions
- **Implementation**: Trie with semantic ranking
- **Features**: Context-aware, type checking

### 3. Network Routing
- **IP Routing Tables**: Longest prefix matching
- **Implementation**: Binary Trie (Patricia tree)
- **Performance**: Hardware-level optimization

### 4. Spell Checkers
- **MS Word**: Red underline suggestions
- **Implementation**: Trie + Edit distance
- **Features**: Context-aware, learning

### 5. Bioinformatics
- **DNA Sequence Matching**: Pattern search
- **Implementation**: Suffix trees/tries
- **Scale**: Genome-sized data

## 📈 Performance Comparison

### Trie vs Other Data Structures

| Operation | Trie | HashMap | Binary Search Tree |
|-----------|------|---------|-------------------|
| Insert | O(m) | O(1) avg | O(log n) avg |
| Search | O(m) | O(1) avg | O(log n) avg |
| Prefix Search | O(p+k) | O(n*m) | O(n*m) |
| Sorted Order | Yes | No | Yes |
| Space | O(n*m*ALPHABET) | O(n*m) | O(n*m) |

**When to use Trie**:
- ✅ Prefix-based operations frequent
- ✅ Dictionary/autocomplete features
- ✅ Pattern matching needed
- ✅ Memory not severely constrained

**When NOT to use Trie**:
- ❌ Simple key-value lookup only
- ❌ Severe memory constraints
- ❌ Small datasets (overhead not worth it)
- ❌ No prefix operations needed

## 📚 Resources

### Essential Reading
- [GeeksforGeeks: Trie Data Structure](https://www.geeksforgeeks.org/trie-insert-and-search/)
- [Wikipedia: Trie](https://en.wikipedia.org/wiki/Trie)
- [Algorithms 4th Edition - Chapter on Tries](https://algs4.cs.princeton.edu/52trie/)

### Video Tutorials
- [Abdul Bari: Trie Implementation](https://www.youtube.com/watch?v=AXjmTQ8LEoI)
- [William Fiset: Trie Algorithms](https://www.youtube.com/watch?v=3CbFFVHQrk4)
- [Tushar Roy: Trie Problems](https://www.youtube.com/watch?v=AXjmTQ8LEoI)

### Practice Platforms
- LeetCode: Trie Tagged Problems (30+ problems)
- InterviewBit: Trie Section
- HackerRank: Trie Challenges
- Codeforces: String Algorithm Section

### Advanced Topics
- Suffix Trees and Arrays
- Aho-Corasick Algorithm (multi-pattern matching)
- Radix Trees (Patricia Tries)
- Ternary Search Trees

## ✅ Day 45 Checklist

### Concepts Mastery
- [ ] Understand Trie structure and node design
- [ ] Master insert, search, delete operations
- [ ] Learn prefix matching techniques
- [ ] Understand memory implications
- [ ] Know when to use Trie vs alternatives

### Problems Completion
- [ ] Implement Trie (Prefix Tree)
- [ ] Add and Search Word (wildcard)
- [ ] Word Search II (board search)
- [ ] Replace Words (prefix replacement)
- [ ] Maximum XOR (binary trie)
- [ ] Palindrome Pairs (advanced)
- [ ] Design Search Autocomplete
- [ ] Stream of Characters

### Interview Preparation
- [ ] Explain Trie to interviewer clearly
- [ ] Code Trie from scratch (no hints)
- [ ] Optimize for time and space
- [ ] Handle edge cases properly
- [ ] Analyze time/space complexity

### Mock Interview
- [ ] Complete 1 full mock interview
- [ ] Receive feedback on approach
- [ ] Improve communication skills
- [ ] Practice whiteboard coding

## 🎯 Learning Outcomes

By the end of Day 45, you will:
1. ✅ Master Trie data structure implementation
2. ✅ Solve prefix-based problems efficiently
3. ✅ Understand real-world Trie applications
4. ✅ Optimize Trie memory usage
5. ✅ Handle complex Trie variations
6. ✅ Be confident in Trie interview questions
7. ✅ Complete your first mock interview
8. ✅ Apply Tries to autocomplete systems

## 🚀 Next Steps

### Day 46 Preview: Segment Trees & Fenwick Trees
- Range query optimization
- Point updates and range queries
- Lazy propagation
- Binary Indexed Trees
- Advanced range problems

### Week 7 Focus
- Advanced data structures (Trie, Segment Tree, DSU)
- Mock interviews (3 rounds)
- System design deep dives
- Complex problem-solving patterns

---

**Remember**: Tries are powerful for prefix operations but come with memory overhead. Always analyze if a Trie is the right choice for your problem. Focus on understanding the pattern recognition that leads to Trie solutions!

**Good luck with Day 45! Master the Trie! 🌳**
