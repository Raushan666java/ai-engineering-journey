# Chapter 16: Trie (Prefix Tree)

**Prev:** [Chapter 15: B-Trees and B+ Trees](15-b-trees.md) | **Next:** [Chapter 17: Segment Tree and Fenwick Tree](17-segment-tree.md)

## Learning Objectives

> **One-Sentence Takeaway:** Tries provide O(L) string operations independent of dictionary size and excel at prefix matching where hash tables and BSTs fall short.

- Define the trie data structure and its use for string keys.
- Implement insertion, search, and prefix matching.
- Apply tries to autocomplete and word break problems.
- Analyze trie space and time complexity.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Trie structure | Characters on edges, words end at marked nodes | Path from root = prefix of stored strings |
| Search | \(O(L)\) regardless of dictionary size | 2× faster than BST for string keys |
| Prefix matching | Traverse prefix path, collect all descendants | Autocomplete, spell check, IP routing |
| Space overhead | Each node may store 26+ child pointers | Use compressed/radix trie for memory savings |
| Ternary search tree | 3 children (less/equal/greater) per node | Memory-efficient middle ground |
| Applications | Autocomplete, IP routing, DNA matching | Any domain needing fast prefix lookup |

## Chapter Roadmap

```mermaid
flowchart TD
    A[Trie Structure] --> B[Root Node]
    B --> C[Insert word char by char]
    C --> D{Char exists?}
    D --> E[Yes → Follow edge]
    D --> F[No → Create new node]
    E --> G[More chars?]
    F --> G
    G --> H[Yes → continue]
    G --> I[No → Mark end of word]
    I --> J[Operations]
    J --> K[Search O(L)]
    J --> L[Prefix Match O(L)]
    J --> M[Autocomplete O(L+Results)]
    J --> N[Word Break DP]
```

## Theory

> **One-Sentence Takeaway:** Trie search time depends only on key length, not on the number of stored strings, making it uniquely suited for large dictionaries.

![Trie Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch16-trie.png)

### Definition

A **trie** (from "retrieval") is a tree data structure for storing strings. Each node represents a character. A path from root to a node spells a prefix. Nodes may be marked as terminal (end of a word).

```
        root
       / |  \
      a  b   c
     /   |    \
    p    a     a
   / \   |     |
  p   t  t     t
  |   |  |     |
[!]  [!] [!]   s
                |
               [!]

Words: "app", "at", "bat", "cat", "cats"
[!] marks end of a word
```

### Complexity

| Operation | Trie | BST | Hash Table |
|-----------|------|-----|------------|
| Insert | \( O(L) \) | \( O(L \log n) \) | \( O(L) \) avg |
| Search | \( O(L) \) | \( O(L \log n) \) | \( O(L) \) avg |
| Prefix match | \( O(L + k) \) | \( O(L \log n + k) \) | Not supported |
| Space | \( O(N \cdot L) \) | \( O(N) \) | \( O(N) \) |

Where \( L \) is the key length and \( k \) is the number of matching results.

### Applications

- Autocomplete and spell checking
- IP routing (longest prefix matching)
- Word games and search engines
- DNA subsequence matching

## Examples

> **One-Sentence Takeaway:** Code examples show how tries enable fast string operations — search, prefix match, autocomplete, word break — all in O(L) time.

### Example 1: Trie Implementation

```cpp
#include <iostream>
#include <unordered_map>
#include <vector>
#include <string>

class TrieNode {
public:
    std::unordered_map<char, TrieNode*> children;
    bool isEndOfWord;

    TrieNode() : isEndOfWord(false) {}

    ~TrieNode() {
        for (auto& pair : children) delete pair.second;
    }
};

class Trie {
private:
    TrieNode* root;

    void collectAll(TrieNode* node, std::string prefix,
                    std::vector<std::string>& results) const {
        if (node->isEndOfWord) results.push_back(prefix);
        for (const auto& pair : node->children) {
            collectAll(pair.second, prefix + pair.first, results);
        }
    }

public:
    Trie() { root = new TrieNode(); }

    ~Trie() { delete root; }

    // Insert a word into the trie — O(L)
    void insert(const std::string& word) {
        TrieNode* current = root;
        for (char c : word) {
            if (current->children.find(c) == current->children.end()) {
                current->children[c] = new TrieNode();
            }
            current = current->children[c];
        }
        current->isEndOfWord = true;
    }

    // Search for an exact word — O(L)
    bool search(const std::string& word) const {
        TrieNode* current = root;
        for (char c : word) {
            if (current->children.find(c) == current->children.end()) {
                return false;
            }
            current = current->children[c];
        }
        return current->isEndOfWord;
    }

    // Check if any word starts with the given prefix — O(L)
    bool startsWith(const std::string& prefix) const {
        TrieNode* current = root;
        for (char c : prefix) {
            if (current->children.find(c) == current->children.end()) {
                return false;
            }
            current = current->children[c];
        }
        return true;
    }

    // Get all words with the given prefix — O(L + results)
    std::vector<std::string> autocomplete(const std::string& prefix) const {
        TrieNode* current = root;
        for (char c : prefix) {
            if (current->children.find(c) == current->children.end()) {
                return {};
            }
            current = current->children[c];
        }

        std::vector<std::string> results;
        collectAll(current, prefix, results);
        return results;
    }

    // Remove a word
    bool remove(TrieNode* node, const std::string& word, int depth) {
        if (!node) return false;

        if (depth == word.length()) {
            if (!node->isEndOfWord) return false;
            node->isEndOfWord = false;
            return node->children.empty();
        }

        char c = word[depth];
        if (node->children.find(c) == node->children.end()) return false;

        bool shouldDeleteChild = remove(node->children[c], word, depth + 1);

        if (shouldDeleteChild) {
            delete node->children[c];
            node->children.erase(c);
            return node->children.empty() && !node->isEndOfWord;
        }

        return false;
    }

    void remove(const std::string& word) {
        remove(root, word, 0);
    }
};
```

### Example 2: Trie Driver

```cpp
#include "trie.h"

int main() {
    Trie trie;

    trie.insert("apple");
    trie.insert("app");
    trie.insert("application");
    trie.insert("banana");
    trie.insert("band");
    trie.insert("bandana");
    trie.insert("apricot");

    std::cout << "Search 'app': " << (trie.search("app") ? "found" : "not found") << "\n";
    std::cout << "Search 'apple': " << (trie.search("apple") ? "found" : "not found") << "\n";
    std::cout << "Search 'apricot': " << (trie.search("apricot") ? "found" : "not found") << "\n";
    std::cout << "Search 'april': " << (trie.search("april") ? "found" : "not found") << "\n";

    std::cout << "Prefix 'app': " << (trie.startsWith("app") ? "yes" : "no") << "\n";
    std::cout << "Prefix 'apr': " << (trie.startsWith("apr") ? "yes" : "no") << "\n";
    std::cout << "Prefix 'xy': " << (trie.startsWith("xy") ? "yes" : "no") << "\n";

    std::cout << "Autocomplete 'ap': ";
    auto words = trie.autocomplete("ap");
    for (const auto& w : words) std::cout << w << " ";
    std::cout << "\n";

    trie.remove("app");
    std::cout << "After remove 'app', search 'app': "
              << (trie.search("app") ? "found" : "not found") << "\n";
    std::cout << "Search 'apple' still: "
              << (trie.search("apple") ? "found" : "not found") << "\n";

    return 0;
}
```

**Output:**
```
Search 'app': found
Search 'apple': found
Search 'apricot': found
Search 'april': not found
Prefix 'app': yes
Prefix 'apr': yes
Prefix 'xy': no
Autocomplete 'ap': app apple application apricot
After remove 'app', search 'app': not found
Search 'apple' still: found
```

### Example 3: Word Break Problem

```cpp
#include <iostream>
#include <vector>
#include <string>

// Check if a string can be segmented into dictionary words using a trie
bool wordBreak(const std::string& s, const Trie& dict) {
    int n = s.length();
    std::vector<bool> dp(n + 1, false);
    dp[0] = true;

    for (int i = 1; i <= n; ++i) {
        for (int j = 0; j < i; ++j) {
            if (dp[j] && dict.search(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}

int main() {
    Trie dict;
    dict.insert("i");
    dict.insert("like");
    dict.insert("sam");
    dict.insert("sung");
    dict.insert("samsung");
    dict.insert("mobile");
    dict.insert("ice");

    std::string test = "ilikesamsung";
    std::cout << "Can break '" << test << "': "
              << (wordBreak(test, dict) ? "yes" : "no") << "\n";

    test = "ilikesamsungmobile";
    std::cout << "Can break '" << test << "': "
              << (wordBreak(test, dict) ? "yes" : "no") << "\n";

    test = "icecream";
    std::cout << "Can break '" << test << "': "
              << (wordBreak(test, dict) ? "yes" : "no") << "\n";

    return 0;
}
```

**Output:**
```
Can break 'ilikesamsung': yes
Can break 'ilikesamsungmobile': yes
Can break 'icecream': no
```

### Example 4: Count Words with Prefix

```cpp
#include <iostream>
#include <string>

// Efficient prefix count using a modified trie node with count field
struct TrieNodeCount {
    std::unordered_map<char, TrieNodeCount*> children;
    int prefixCount; // number of words passing through this node
    bool isEndOfWord;

    TrieNodeCount() : prefixCount(0), isEndOfWord(false) {}
};

void insertWithCount(TrieNodeCount* root, const std::string& word) {
    TrieNodeCount* current = root;
    for (char c : word) {
        if (current->children.find(c) == current->children.end()) {
            current->children[c] = new TrieNodeCount();
        }
        current = current->children[c];
        current->prefixCount++;
    }
    current->isEndOfWord = true;
}

int countPrefix(TrieNodeCount* root, const std::string& prefix) {
    TrieNodeCount* current = root;
    for (char c : prefix) {
        if (current->children.find(c) == current->children.end()) return 0;
        current = current->children[c];
    }
    return current->prefixCount;
}
```

## 💡 Pro Tips

> **One-Sentence Takeaway:** Tries outperform hash tables at prefix matching and ordered iteration; compress them via radix trees when memory is a concern.

- **Trie search is \(O(L)\) regardless of \(n\)**: Search time depends only on string length, not on the number of stored strings. This makes tries ideal for dictionaries with millions of entries.
- **Tries excel where hash tables fail**: Hash tables cannot efficiently find all strings with a given prefix, support ordered iteration, or handle variable-length keys without hashing overhead. Tries do all three.
- **Compressed trie (radix tree) saves memory**: Merge nodes with single children into one node. This reduces the number of nodes from \(O(\text{total characters})\) to \(O(\text{number of unique strings})\).
- **Ternary search tree bridges trie and BST**: Each node has three children (less, equal, greater). It uses less memory than a trie but has \(O(L)\) search — a good middle ground.

## One-Sentence Takeaways

- A trie stores strings as paths in a tree with characters as edges.
- Search, insert, and lookup are \(O(L)\) where \(L\) is the string length.
- Prefix matching is natural and efficient — just traverse the prefix path.
- Space can be large: each character may require a 26-element array per node.
- Compressed tries (radix trees) merge single-child paths to reduce nodes.
- Ternary search trees combine trie-like search with BST-like memory.

## Concept Comparison Table

| Feature | Trie | Hash Table | BST | Ternary Search Tree |
|---------|------|------------|-----|-------------------|
| Search time | \(O(L)\) | \(O(1)\) avg | \(O(L \log n)\) | \(O(L)\) |
| Prefix matching | Yes | No | Slow | Yes |
| Ordered iteration | Yes (DFS) | No | Yes | Yes |
| Space (ASCII keys) | High | Moderate | Low | Low |
| Variable-length keys | Natural | Hash needed | Natural | Natural |
| Memory per character | Pointer array | None | 2 pointers + key | 3 pointers + char |

## Quick Reference: Trie vs Alternatives

| Operation | Trie | Hash Table | BST |
|-----------|------|------------|-----|
| Exact search | \(O(L)\) | \(O(1)\) | \(O(L \log n)\) |
| Insert | \(O(L)\) | \(O(1)\) | \(O(L \log n)\) |
| Delete | \(O(L)\) | \(O(1)\) | \(O(L \log n)\) |
| Prefix search | \(O(L + \text{results})\) | \(O(n)\) | \(O(n)\) |
| Longest prefix match | \(O(L)\) | Not supported | \(O(L)\) |
| Space | \(O(\sum \text{characters})\) | \(O(n)\) | \(O(n)\) |

## Cross-Application Matrix

| Application | Why Trie |
|-------------|----------|
| Autocomplete | Prefix matching, fast suggestions |
| Spell checker | Dictionary with prefix correction |
| IP routing (longest prefix) | Radix tree = compressed trie |
| DNA sequence search | Pattern matching in genomes |
| Text prediction | Efficient prefix-based prediction |
| URL router (web framework) | Path prefix matching |

## Chapter Quiz

1. **Trie search time depends on:**
   - a) Number of stored strings
   - b) String length ✅
   - c) Hash function
   - d) Tree height

2. **What operation is natural in tries but impossible in hash tables?**
   - a) Exact lookup
   - b) Prefix matching ✅
   - c) Insertion
   - d) Deletion

3. **What reduces memory in a compressed trie?**
   - a) Fewer characters
   - b) Merging single-child paths ✅
   - c) Using arrays
   - d) Hashing keys

4. **A ternary search tree node has how many children?**
   - a) 2
   - b) 3 ✅
   - c) 26
   - d) Unlimited

5. **Which data structure is a compressed trie used for IP routing?**
   - a) B-tree
   - b) Radix tree ✅
   - c) Hash table
   - d) AVL tree

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b

## Summary

- A trie stores strings as paths in a tree, with characters on edges.
- Operations run in \( O(L) \) time independent of the number of stored strings.
- The trie supports prefix matching naturally, which hash tables cannot.
- Space can be optimized with compressed tries (radix trees) or ternary search trees.
- Tries are fundamental to autocomplete, spell check, IP routing, and DNA sequence analysis.

## Exercises

### Review Questions

1. Why is trie search faster than BST search for string keys?
2. What is the space complexity of a trie, and how can it be reduced?
3. Why can a hash table not efficiently support prefix matching?

### Application Problems

4. Implement a **reverse trie** to find suffixes (e.g., words ending with "ing").
5. Write a function to find the longest common prefix among a set of strings using a trie.
6. Implement a **ternary search tree** (TST) as an alternative to a trie with lower memory overhead.

### Challenge Problem

7. Implement a **compressed trie** (radix tree / Patricia trie) where edges with single-child paths are concatenated. Compare insertion and search time against the standard trie for a large dictionary.
