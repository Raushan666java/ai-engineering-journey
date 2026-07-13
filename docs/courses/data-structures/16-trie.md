# Chapter 16: Trie (Prefix Tree)

**Prev:** [Chapter 15: B-Trees and B+ Trees](15-b-trees.md) | **Next:** [Chapter 17: Segment Tree and Fenwick Tree](17-segment-tree.md)

## Learning Objectives

> **One-Sentence Takeaway:** Tries provide O(L) string operations independent of dictionary size and excel at prefix matching where hash tables and BSTs fall short.

- Define the trie data structure and its use for string keys.
- Implement insertion, search, and prefix matching.
- Apply tries to autocomplete and word break problems.
- Analyze trie space and time complexity.

## Why Tries Matter

**Real-World Analogy:** Imagine your phone's contact list with 10,000 names. When you type "Joh" into the search bar, your phone instantly shows "Johnson", "Johansson", "John", "Johny" — every contact whose name starts with those three letters. It does NOT scan all 10,000 names one by one. Instead, it uses a **trie-like structure**: it follows the path J ? o ? h, then collects every name branching from there. A hash table cannot do this. A BST would need O(L log n). A trie does it in O(L + results) — the prefix length plus the number of matches, completely independent of dictionary size.

## Chapter at a Glance

| Topic | Key Insight | Practical Takeaway |
|-------|-------------|-------------------|
| Trie structure | Characters on edges, words end at marked nodes | Path from root = prefix of stored strings |
| Search | O(L) regardless of dictionary size | 2x faster than BST for string keys |
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
    D --> E[Yes arrow Follow edge]
    D --> F[No arrow Create new node]
    E --> G[More chars?]
    F --> G
    G --> H[Yes arrow continue]
    G --> I[No arrow Mark end of word]
    I --> J[Operations]
    J --> K[Search O(L)]
    J --> L[Prefix Match O(L)]
    J --> M[Autocomplete O(L+Results)]
    J --> N[Word Break DP]
    J --> O[Delete O(L)]
    J --> P[Longest Prefix O(L)]
```

## Theory

> **One-Sentence Takeaway:** Trie search time depends only on key length, not on the number of stored strings, making it uniquely suited for large dictionaries.

![Trie Flowchart](https://raw.githubusercontent.com/Raushan666java/ai-engineering-journey/main/docs/assets/images/diagrams/data-structures/ch16-trie.png)

### Definition

<a href="../../../assets/images/diagrams/data-structures/16-trie/definition-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/data-structures/16-trie/definition-handwritten.svg" alt="Handwritten: Definition" width="30%">
</a>
<a href="../../../assets/images/diagrams/data-structures/16-trie/definition-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/data-structures/16-trie/definition-diagram.svg" alt="Diagram: Definition" width="30%">
</a>
<a href="../../../assets/images/diagrams/data-structures/16-trie/definition-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/data-structures/16-trie/definition-sticky.svg" alt="Sticky Note: Definition" width="30%">
</a>


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

<a href="../../../assets/images/diagrams/data-structures/16-trie/complexity-handwritten.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/data-structures/16-trie/complexity-handwritten.svg" alt="Handwritten: Complexity" width="30%">
</a>
<a href="../../../assets/images/diagrams/data-structures/16-trie/complexity-diagram.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/data-structures/16-trie/complexity-diagram.svg" alt="Diagram: Complexity" width="30%">
</a>
<a href="../../../assets/images/diagrams/data-structures/16-trie/complexity-sticky.svg" target="_blank" rel="noopener">
  <img src="../../../assets/images/diagrams/data-structures/16-trie/complexity-sticky.svg" alt="Sticky Note: Complexity" width="30%">
</a>


| Operation | Trie | BST | Hash Table |
|-----------|------|-----|------------|
| Insert | O(L) | O(L log n) | O(L) avg |
| Search | O(L) | O(L log n) | O(L) avg |
| Prefix match | O(L + k) | O(L log n + k) | Not supported |
| Space | O(N x L) | O(N) | O(N) |

Where L is the key length and k is the number of matching results.

---

## 1. Trie Structure

### Real-World Analogy

Think of a trie as a **warehouse aisle-organizer**. Each aisle is labelled with a letter. To store "apple", a worker walks from the entrance (root) through A-aisle, P-aisle, P-aisle, L-aisle, E-aisle, and puts a red flag at the last shelf to mark "a word ends here". Any string sharing a prefix shares those aisles.

### Structure

Each trie node contains:
- **Children**: array or map of child pointers (26 for lowercase English, 256 for ASCII, or a hash map for general Unicode)
- **End-of-word flag**: boolean marking whether any word ends at this node

TrieNode {
    children: map[char, TrieNode]
    isEndOfWord: bool
}

### Algorithm Steps

1. A trie is a rooted tree where each node corresponds to a single character.
2. The root node is empty — it stores no character.
3. Each path from root to a leaf (or internal node) spells a string by concatenating the characters along the path.
4. Nodes with isEndOfWord = true indicate at least one complete word ends there.
5. Words that are prefixes of other words share the same path (e.g., "app" and "apple" share "app").

---

## 2. Insert Operation

### Real-World Analogy

Adding a new contact "Bob" to your phone: you check if B exists from root — yes. Then check if o exists under B — yes. Then check if b exists under o — no, so you create a new b entry and mark it as a complete contact.

### Algorithm Steps

1. Start at the root node. Set current = root.
2. For each character c in the word (left to right):
   - If c exists in current.children, follow it: current = current.children[c].
   - If c does NOT exist, create a new TrieNode, add it to current.children[c], then move to it.
3. After processing all characters, set current.isEndOfWord = true.

### Pseudocode

```
function insert(word):
    current = root
    for each character c in word:
        if c not in current.children:
            current.children[c] = new TrieNode()
        current = current.children[c]
    current.isEndOfWord = true
```

### Dry Run — Insertion Trace

Insert words: "cat", "car", "dog"

**Insert "cat":**

| Step | Current Node | Char | Action | Trie State |
|------|-------------|------|--------|------------|
| 1 | root | c | c not in children create node | root arrow [c] |
| 2 | c | a | a not in children create node | root arrow c arrow [a] |
| 3 | a | t | t not in children create node | root arrow c arrow a arrow [t] |
| 4 | t | — | Mark isEndOfWord = true | root arrow c arrow a arrow t(!) |

**Insert "car":**

| Step | Current Node | Char | Action | Trie State |
|------|-------------|------|--------|------------|
| 1 | root | c | c exists follow | root arrow [c] arrow a arrow t(!) |
| 2 | c | a | a exists follow | root arrow c arrow [a] arrow t(!) |
| 3 | a | r | r not in children create node | root arrow c arrow a arrow t(!), [r] |
| 4 | r | — | Mark isEndOfWord = true | root arrow c arrow a arrow t(!), r(!) |

**Insert "dog":**

| Step | Current Node | Char | Action | Trie State |
|------|-------------|------|--------|------------|
| 1 | root | d | d not in children create node | root arrow c, [d] |
| 2 | d | o | o not in children create node | root arrow c, d arrow [o] |
| 3 | o | g | g not in children create node | root arrow c, d arrow o arrow [g] |
| 4 | g | — | Mark isEndOfWord = true | root arrow c, d arrow o arrow g(!) |

**Final trie:**
```
        root
       /    \
      c      d
     /        \
    a          o
   / \          \
  t(!) r(!)      g(!)
```

### Implementations

```cpp
// C++
class TrieNode {
public:
    TrieNode* children[26];
    bool isEndOfWord;
    TrieNode() : isEndOfWord(false) {
        for (int i = 0; i < 26; i++) children[i] = nullptr;
    }
};

class Trie {
private:
    TrieNode* root;
public:
    Trie() { root = new TrieNode(); }
    void insert(string word) {
        TrieNode* cur = root;
        for (char c : word) {
            int idx = c - 'a';
            if (!cur->children[idx]) cur->children[idx] = new TrieNode();
            cur = cur->children[idx];
        }
        cur->isEndOfWord = true;
    }
};
```

```python
# Python
class TrieNode:
    def __init__(self):
        self.children = {}
        self.isEnd = False

class Trie:
    def __init__(self):
        self.root = TrieNode()
    def insert(self, word: str) -> None:
        cur = self.root
        for ch in word:
            if ch not in cur.children:
                cur.children[ch] = TrieNode()
            cur = cur.children[ch]
        cur.isEnd = True
```

```java
// Java
class TrieNode {
    TrieNode[] children = new TrieNode[26];
    boolean isEnd;
}

class Trie {
    private TrieNode root;
    public Trie() { root = new TrieNode(); }
    public void insert(String word) {
        TrieNode cur = root;
        for (char c : word.toCharArray()) {
            int idx = c - 'a';
            if (cur.children[idx] == null) cur.children[idx] = new TrieNode();
            cur = cur.children[idx];
        }
        cur.isEnd = true;
    }
}
```

### Complexity Analysis

- **Time:** O(L) — each character of the word is processed exactly once. No rebalancing, no hashing overhead, no collisions.
- **Space:** O(N x L) worst-case — if no strings share prefixes, every character of every word creates a new node. Each node stores 26 pointers (or a hash map entry) plus a boolean.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| O(L) insert independent of dictionary size | High memory overhead (26 child pointers per node) |
| Handles variable-length keys naturally | Insertion slower than hash table for single operations |
| Supports prefix operations | Array-based tries waste space on sparse alphabets |
| No collision handling needed | Not cache-friendly — pointer chasing across nodes |

### Edge Cases

- **Empty string:** Inserting "" should mark the root as a valid word. Searching "" returns root.isEndOfWord.
- **Duplicate words:** Inserting "cat" twice is idempotent — the second call leaves isEndOfWord as true (no change).
- **Prefix is also a word:** Inserting "app" then "apple" — after both inserts, the node at "app" is marked as end-of-word, and "apple" extends from it.
- **Case sensitivity:** "Cat" and "cat" differ if we use ASCII-lowercase indexing; use a case-folded key or a hash-map-based trie for case-insensitive behavior.

---

## 3. Search Operation

### Real-World Analogy

Looking up a word in a dictionary: you flip to the starting letter's section, then the next letter's subsection, and so on until you either find the word or reach a dead end. You never check every word on every page.

### Algorithm Steps

1. Start at current = root.
2. For each character c in the word:
   - If c is NOT in current.children, return false (word not found).
   - Else follow the child: current = current.children[c].
3. After all characters, return current.isEndOfWord.

### Pseudocode

```
function search(word):
    current = root
    for each character c in word:
        if c not in current.children:
            return false
        current = current.children[c]
    return current.isEndOfWord
```

### Dry Run — Search Trace

Trie contains: "cat", "car", "dog"

**Search "car":**

| Step | Current | Char | Action |
|------|---------|------|--------|
| 1 | root | c | c exists follow |
| 2 | c | a | a exists follow |
| 3 | a | r | r exists follow |
| 4 | r | — | Return isEndOfWord = true check |

**Search "can":**

| Step | Current | Char | Action |
|------|---------|------|--------|
| 1 | root | c | c exists follow |
| 2 | c | a | a exists follow |
| 3 | a | n | n does NOT exist return false x |

### Implementations

```cpp
// C++
bool search(string word) {
    TrieNode* cur = root;
    for (char c : word) {
        int idx = c - 'a';
        if (!cur->children[idx]) return false;
        cur = cur->children[idx];
    }
    return cur->isEndOfWord;
}
```

```python
# Python
def search(self, word: str) -> bool:
    cur = self.root
    for ch in word:
        if ch not in cur.children:
            return False
        cur = cur.children[ch]
    return cur.isEnd
```

```java
// Java
public boolean search(String word) {
    TrieNode cur = root;
    for (char c : word.toCharArray()) {
        int idx = c - 'a';
        if (cur.children[idx] == null) return false;
        cur = cur.children[idx];
    }
    return cur.isEnd;
}
```

### Complexity Analysis

- **Time:** O(L) — one child-pointer lookup per character. No hash collisions to resolve, no tree rebalancing. Compare to BST: O(L log n).
- **Space:** O(1) — uses only a pointer variable regardless of dictionary size.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| O(L) search regardless of n — ideal for large dictionaries | Slower than hash table O(1) average for single exact lookup |
| Predictable worst-case (no collisions) | Cannot search by value — only by prefix/string |
| Naturally supports prefix search alongside exact search | Cache misses due to pointer chasing |

### Edge Cases

- **Word not found:** Returns false if any character is missing or if the full path exists but isEndOfWord is false (e.g., searching "app" when only "apple" is inserted).
- **Empty string search:** Returns root.isEndOfWord.
- **Word longer than any stored string:** Returns false when a character is missing.
- **Non-existent prefix:** Returns false early at the first missing character.

---

## 4. Delete Operation

### Real-World Analogy

Removing a contact "Bob" from your phone: you navigate B, o, b, remove the "b" shelf marker (end-of-word flag), and if that shelf has no other contacts branching from it, you dismantle the entire B-o-b branch to save space.

### Algorithm Steps

1. Recursively traverse the word character by character.
2. At the last node, set isEndOfWord = false.
3. After returning from recursion, check if the current node has any remaining children AND isEndOfWord is false. If neither, delete the node and tell the parent to remove it.

### Pseudocode

```
function delete(word):
    deleteRecursive(root, word, 0)

function deleteRecursive(node, word, depth):
    if node is null: return false
    if depth == length(word):
        if not node.isEndOfWord: return false
        node.isEndOfWord = false
        return node.children is empty
    c = word[depth]
    if c not in node.children: return false
    shouldDelete = deleteRecursive(node.children[c], word, depth + 1)
    if shouldDelete:
        delete node.children[c]
        remove c from node.children
        return node.children is empty AND not node.isEndOfWord
    return false
```

### Dry Run — Delete Trace

Trie contains: "cat"(!), "car"(!), "dog"(!)

**Delete "car":**

| Step | Node | Char | Depth | Action |
|------|------|------|-------|--------|
| 1 | root | c | 0 | Recurse to c |
| 2 | c | a | 1 | Recurse to a |
| 3 | a | r | 2 | Recurse to r |
| 4 | r | — | 3 | Set isEndOfWord = false. Children? None. shouldDelete = true |
| 5 | a | — | Back | Delete child r. a has another child (t). keep a |
| 6 | c | — | Back | No change |
| 7 | root | — | Back | No change |

Trie after delete: "cat"(!), "dog"(!). "car" removed.

**Delete "ca" (not inserted):**

| Step | Node | Char | Depth | Action |
|------|------|------|-------|--------|
| 1 | root | c | 0 | Recurse to c |
| 2 | c | a | 1 | Recurse to a |
| 3 | a | — | 2 | depth == 2 == len("ca"). isEndOfWord? false. Return false |

No nodes modified — correct because "ca" was never inserted as a word.

### Implementations

```cpp
// C++
bool deleteRecursive(TrieNode* node, const string& word, int depth) {
    if (!node) return false;
    if (depth == word.length()) {
        if (!node->isEndOfWord) return false;
        node->isEndOfWord = false;
        for (int i = 0; i < 26; i++)
            if (node->children[i]) return false;
        return true;
    }
    int idx = word[depth] - 'a';
    if (!node->children[idx]) return false;
    bool shouldDelete = deleteRecursive(node->children[idx], word, depth + 1);
    if (shouldDelete) {
        delete node->children[idx];
        node->children[idx] = nullptr;
        if (node->isEndOfWord) return false;
        for (int i = 0; i < 26; i++)
            if (node->children[i]) return false;
        return true;
    }
    return false;
}

void deleteWord(string word) {
    deleteRecursive(root, word, 0);
}
```

```python
# Python
def _delete(self, node, word, depth):
    if not node:
        return False
    if depth == len(word):
        if not node.isEnd:
            return False
        node.isEnd = False
        return len(node.children) == 0
    ch = word[depth]
    if ch not in node.children:
        return False
    should_delete = self._delete(node.children[ch], word, depth + 1)
    if should_delete:
        del node.children[ch]
        return len(node.children) == 0 and not node.isEnd
    return False

def delete(self, word: str) -> None:
    self._delete(self.root, word, 0)
```

```java
// Java
private boolean deleteRecursive(TrieNode node, String word, int depth) {
    if (node == null) return false;
    if (depth == word.length()) {
        if (!node.isEnd) return false;
        node.isEnd = false;
        for (TrieNode child : node.children)
            if (child != null) return false;
        return true;
    }
    int idx = word.charAt(depth) - 'a';
    if (node.children[idx] == null) return false;
    boolean shouldDelete = deleteRecursive(node.children[idx], word, depth + 1);
    if (shouldDelete) {
        node.children[idx] = null;
        if (node.isEnd) return false;
        for (TrieNode child : node.children)
            if (child != null) return false;
        return true;
    }
    return false;
}

public void delete(String word) {
    deleteRecursive(root, word, 0);
}
```

### Complexity Analysis

- **Time:** O(L) — worst-case traverses all L characters of the word. The cleanup check at each node iterates over 26 children (constant). So total is O(L x 26) = O(L).
- **Space:** O(L) for the recursion stack depth in worst case (unbalanced deletion path).

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Cascading cleanup frees unused nodes automatically | Recursive implementation may overflow stack for very long strings |
| Only traverses the exact word path | Iterative version requires tracking parent pointers or using a stack |
| No reorganization needed (unlike BST deletion) | Checking 26 children at each node for cleanup has constant but non-zero overhead |

### Edge Cases

- **Word not in trie:** Returns without modifying any node.
- **Word is a prefix of another word** (e.g., delete "app" when "apple" exists): Only sets isEndOfWord = false at the last node. No nodes are deleted because the path is shared.
- **Multiple words end at the same node:** Rare, but isEndOfWord is a boolean — use a counter if frequency tracking is needed.
- **Empty string:** Deleting "" unmarks root.isEndOfWord. Root itself is never deleted.

---

## 5. Prefix Search (startsWith)

### Real-World Analogy

You type "Joh" into Google search and it instantly shows "John", "Johnson", "Johansson" — it doesn't need to search the entire web index. It just follows the J-o-h path and collects everything below.

### Algorithm Steps

1. Traverse the prefix character by character from root.
2. If any character is missing along the path, return false.
3. If the entire prefix is traversed, return true (regardless of isEndOfWord).

### Pseudocode

```
function startsWith(prefix):
    current = root
    for each character c in prefix:
        if c not in current.children:
            return false
        current = current.children[c]
    return true
```

### Dry Run

Trie contains: "cat", "car", "dog"

**startsWith("ca"):**

| Step | Current | Char | Action |
|------|---------|------|--------|
| 1 | root | c | c exists follow |
| 2 | c | a | a exists follow |
| 3 | a | — | All chars matched return true check |

**startsWith("do"):**

| Step | Current | Char | Action |
|------|---------|------|--------|
| 1 | root | d | d exists follow |
| 2 | d | o | o exists follow |
| 3 | o | — | Return true check |

**startsWith("caa"):**

| Step | Current | Char | Action |
|------|---------|------|--------|
| 1 | root | c | c exists follow |
| 2 | c | a | a exists follow |
| 3 | a | a | a NOT in children of 'a' return false x |

### Implementations

```cpp
// C++
bool startsWith(string prefix) {
    TrieNode* cur = root;
    for (char c : prefix) {
        int idx = c - 'a';
        if (!cur->children[idx]) return false;
        cur = cur->children[idx];
    }
    return true;
}
```

```python
# Python
def startsWith(self, prefix: str) -> bool:
    cur = self.root
    for ch in prefix:
        if ch not in cur.children:
            return False
        cur = cur.children[ch]
    return True
```

```java
// Java
public boolean startsWith(String prefix) {
    TrieNode cur = root;
    for (char c : prefix.toCharArray()) {
        int idx = c - 'a';
        if (cur.children[idx] == null) return false;
        cur = cur.children[idx];
    }
    return true;
}
```

### Complexity Analysis

- **Time:** O(L) — traverse the L characters of the prefix. No scanning of the entire dictionary.
- **Space:** O(1) — just a pointer variable.

---

## 6. Autocomplete

### Real-World Analogy

Google Search autocomplete: you type "how to", and Google suggests "how to tie a tie", "how to make pancakes", "how to lose weight" — all pulled from a prefix tree over millions of search queries.

### Algorithm Steps

1. Traverse the prefix character by character (same as startsWith).
2. From the prefix-ending node, perform DFS to collect all words.
3. At each node, if isEndOfWord is true, add the accumulated string to results.
4. Return the list of results.

### Pseudocode

```
function autocomplete(prefix):
    current = root
    for each character c in prefix:
        if c not in current.children:
            return []
        current = current.children[c]
    results = []
    collectAll(current, prefix, results)
    return results

function collectAll(node, prefix, results):
    if node.isEndOfWord:
        results.append(prefix)
    for each (char, child) in node.children:
        collectAll(child, prefix + char, results)
```

### Dry Run

Trie contains: "app"(!), "apple"(!), "application"(!), "apricot"(!), "banana"(!)

**autocomplete("ap"):**

Traverse root, a, p. From node 'p', DFS:

| Path | isEnd? | Collect |
|------|--------|---------|
| ap + p | true | "app" check |
| ap + p + l | false | — |
| ap + p + l + e | true | "apple" check |
| ap + p + l + i + c + a + t + i + o + n | true | "application" check |
| ap + r | false | — |
| ap + r + i + c + o + t | true | "apricot" check |

Result: ["app", "apple", "application", "apricot"]

### Implementations

```cpp
// C++
void collectAll(TrieNode* node, string prefix, vector<string>& res) {
    if (node->isEndOfWord) res.push_back(prefix);
    for (int i = 0; i < 26; i++) {
        if (node->children[i]) {
            collectAll(node->children[i], prefix + char('a' + i), res);
        }
    }
}

vector<string> autocomplete(string prefix) {
    TrieNode* cur = root;
    for (char c : prefix) {
        int idx = c - 'a';
        if (!cur->children[idx]) return {};
        cur = cur->children[idx];
    }
    vector<string> res;
    collectAll(cur, prefix, res);
    return res;
}
```

```python
# Python
def _collect_all(self, node, prefix, results):
    if node.isEnd:
        results.append(prefix)
    for ch, child in node.children.items():
        self._collect_all(child, prefix + ch, results)

def autocomplete(self, prefix: str):
    cur = self.root
    for ch in prefix:
        if ch not in cur.children:
            return []
        cur = cur.children[ch]
    results = []
    self._collect_all(cur, prefix, results)
    return results
```

```java
// Java
private void collectAll(TrieNode node, String prefix, List<String> res) {
    if (node.isEnd) res.add(prefix);
    for (int i = 0; i < 26; i++) {
        if (node.children[i] != null) {
            collectAll(node.children[i], prefix + (char)('a' + i), res);
        }
    }
}

public List<String> autocomplete(String prefix) {
    TrieNode cur = root;
    for (char c : prefix.toCharArray()) {
        int idx = c - 'a';
        if (cur.children[idx] == null) return new ArrayList<>();
        cur = cur.children[idx];
    }
    List<String> res = new ArrayList<>();
    collectAll(cur, prefix, res);
    return res;
}
```

### Complexity Analysis

- **Time:** O(L + M) where L = prefix length, M = total characters across all matching words. DFS visits every node in the subtree below the prefix.
- **Space:** O(M) for the results list. Recursion stack depth = length of longest matching word.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Prefix matching is built-in — no special index needed | Collecting all results can visit many nodes if the prefix is short |
| Results are in lexicographical order naturally (DFS order) | Memory blowup for short prefixes with many completions |
| O(L) to locate the prefix node, then proportional to output | Top-k results (e.g., top-5) requires priority-queue wrapper |

### Edge Cases

- **No words with prefix:** Returns empty list.
- **Prefix itself is a word:** The prefix appears in the results (e.g., autocomplete("app") when "app" is in the trie).
- **Empty prefix:** Returns all words in the trie.
- **Single character prefix:** Traverses one level, then collects everything below.

---

## 7. Longest Prefix Matching

### Real-World Analogy

IP routing: when a router receives a packet for 192.168.1.35, it checks the routing table for the longest matching prefix. 192.168.1.0/24 matches more specifically than 192.168.0.0/16, so the router sends the packet via the /24 route. This is exactly a longest prefix match on a binary trie (radix tree).

### Algorithm Steps

1. Traverse the trie character by character following the given word.
2. Track the last node where isEndOfWord = true.
3. When traversal stops (missing child or end of word), return the word formed up to the last marked node.

### Pseudocode

```
function longestPrefix(word):
    current = root
    lastMatch = ""
    prefix = ""
    for each character c in word:
        if c not in current.children:
            break
        prefix += c
        current = current.children[c]
        if current.isEndOfWord:
            lastMatch = prefix
    return lastMatch
```

### Dry Run

Trie contains: "a"(!), "ap"(!), "app"(!), "appl"(!), "apple"(!)

**longestPrefix("applepie"):**

| Step | Current | Char | Prefix | isEnd? | lastMatch |
|------|---------|------|--------|--------|-----------|
| 1 | root | a | "a" | true | "a" |
| 2 | a | p | "ap" | true | "ap" |
| 3 | p | p | "app" | true | "app" |
| 4 | p | l | "appl" | true | "appl" |
| 5 | l | e | "apple" | true | "apple" |
| 6 | e | p | — | break (no child 'p') | return "apple" |

**longestPrefix("apricot"):**

| Step | Current | Char | Prefix | isEnd? | lastMatch |
|------|---------|------|--------|--------|-----------|
| 1 | root | a | "a" | true | "a" |
| 2 | a | p | "ap" | true | "ap" |
| 3 | p | r | "apr" | false | "ap" |
| 4 | r | i | "apri" | false | "ap" |
| 5 | i | c | "apric" | false | "ap" |
| 6 | c | o | "aprico" | false | "ap" |
| 7 | o | t | "apricot" | false | "ap" |

Return "ap".

### Implementations

```cpp
// C++
string longestPrefix(string word) {
    TrieNode* cur = root;
    string prefix, lastMatch;
    for (char c : word) {
        int idx = c - 'a';
        if (!cur->children[idx]) break;
        prefix += c;
        cur = cur->children[idx];
        if (cur->isEndOfWord) lastMatch = prefix;
    }
    return lastMatch;
}
```

```python
# Python
def longestPrefix(self, word: str) -> str:
    cur = self.root
    prefix, last_match = "", ""
    for ch in word:
        if ch not in cur.children:
            break
        prefix += ch
        cur = cur.children[ch]
        if cur.isEnd:
            last_match = prefix
    return last_match
```

```java
// Java
public String longestPrefix(String word) {
    TrieNode cur = root;
    StringBuilder prefix = new StringBuilder();
    String lastMatch = "";
    for (char c : word.toCharArray()) {
        int idx = c - 'a';
        if (cur.children[idx] == null) break;
        prefix.append(c);
        cur = cur.children[idx];
        if (cur.isEnd) lastMatch = prefix.toString();
    }
    return lastMatch;
}
```

### Complexity Analysis

- **Time:** O(L) — one pass through the word. Each step is a constant-time child lookup.
- **Space:** O(1) — only string variables for tracking.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| O(L) time — much faster than checking each dictionary entry | Only prefix-bound, not substring-bound |
| Natural use for IP routing, URL routing | Requires all prefixes to be inserted first |
| Returns the most specific match automatically | Memory overhead of the trie itself |

### Edge Cases

- **No prefix matches:** Returns empty string.
- **Entire word is a prefix:** If the full word exists as a prefix in the trie, returns the entire word.
- **Word shorter than any prefix:** Traverses as far as the word allows; returns the longest valid prefix found.
- **No prefixes inserted at all:** Always returns "".

---

## 8. Word Break Problem

### Real-World Analogy

Your phone's predictive text suggests "iloveyou" can be split into "i love you". Given a string without spaces and a dictionary of valid words, determine if the string can be segmented into dictionary words.

### Algorithm Steps (DP + Trie)

1. Build a trie from the dictionary.
2. Let dp[i] = true if substring s[0:i] can be segmented.
3. Set dp[0] = true (empty string).
4. For each end index i from 1 to n:
   - For each start index j from 0 to i-1:
     - If dp[j] is true AND s[j:i] is in the trie, set dp[i] = true and break.

### Pseudocode

```
function wordBreak(s, dictionary):
    trie = buildTrie(dictionary)
    n = s.length
    dp = array of size n+1, all false
    dp[0] = true
    for i = 1 to n:
        for j = 0 to i-1:
            if dp[j] AND trie.search(s[j:i]):
                dp[i] = true
                break
    return dp[n]
```

### Dry Run

Dictionary: ["i", "like", "sam", "sung", "samsung"]
String: "ilikesamsung"

Build trie:
```
        root
       /   \
      i     l
     (!)    |
            i
             \
              k
               \
                e(!)
```

dp array initialization: dp[0] = true

| i | s[0:i] | j | s[j:i] | dp[j] | trie search? | dp[i] |
|---|--------|---|--------|-------|--------------|-------|
| 1 | "i" | 0 | "i" | true | true | true |
| 2 | "il" | 0 | "il" | true | false | — |
| | | 1 | "l" | true | false | false |
| 3 | "ili" | 0 | "ili" | true | false | — |
| | | 1 | "li" | true | false | — |
| | | 2 | "i" | false | — | false |
| 4 | "ilik" | ... | ... | ... | ... | false |
| 5 | "ilike" | 0 | "ilike" | true | false | — |
| | | 1 | "like" | true | true | true |
| 6 | "ilikes" | 0 | "ilikes" | true | false | — |
| | | 1 | "likes" | true | false | — |
| | | 5 | "s" | true | false | false |
| 7 | "ilikesa" | ... | ... | ... | ... | false |
| 8 | "ilikesam" | 0 | "ilikesam" | true | false | — |
| | | 5 | "sam" | true | true | true |
| 9 | "ilikesams" | 0 | "ilikesams" | true | false | — |
| | | 5 | "sams" | true | false | — |
| | | 8 | "s" | true | false | false |
| 10 | "ilikesamsu" | ... | ... | ... | ... | false |
| 11 | "ilikesamsung" | 0 | "ilikesamsung" | true | false | — |
| | | 5 | "samsung" | true | true | true |

dp[11] = true, so "i like samsung"

### Implementations

```cpp
// C++
bool wordBreak(string s, vector<string>& dict) {
    Trie trie;
    for (const string& w : dict) trie.insert(w);
    int n = s.length();
    vector<bool> dp(n + 1, false);
    dp[0] = true;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && trie.search(s.substr(j, i - j))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}
```

```python
# Python
def wordBreak(s: str, wordDict: List[str]) -> bool:
    trie = Trie()
    for w in wordDict:
        trie.insert(w)
    n = len(s)
    dp = [False] * (n + 1)
    dp[0] = True
    for i in range(1, n + 1):
        for j in range(i):
            if dp[j] and trie.search(s[j:i]):
                dp[i] = True
                break
    return dp[n]
```

```java
// Java
public boolean wordBreak(String s, List<String> wordDict) {
    Trie trie = new Trie();
    for (String w : wordDict) trie.insert(w);
    int n = s.length();
    boolean[] dp = new boolean[n + 1];
    dp[0] = true;
    for (int i = 1; i <= n; i++) {
        for (int j = 0; j < i; j++) {
            if (dp[j] && trie.search(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[n];
}
```

### Complexity Analysis

- **Time:** O(n sup2 x L) naive — for each of n sup2 substrings, a trie search of O(L). Can be optimized to O(n sup2) by traversing the trie during the inner loop instead of calling search each time.
- **Space:** O(n + trie size) — dp array of size n+1 plus the trie structure.

### Advantages & Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| Trie makes substring lookup O(L) instead of O(n) per check | DP approach is O(n sup2) — can be slow for very long strings |
| Naturally handles large dictionaries | Trie insertion overhead for the dictionary |
| Easy to modify to return all possible segmentations | Two-step process (build trie, then DP) |

### Edge Cases

- **Empty string:** dp[0] is true by definition (empty string can always be segmented).
- **No valid segmentation:** Returns false (e.g., "icecream" with dict ["i", "like"]).
- **Multiple valid segmentations:** Basic DP returns true/false; extend to store parent pointers for full reconstruction.
- **Entire string is one dictionary word:** dp[n] becomes true in the i=n, j=0 check.

---

## Trie vs Hash Table vs BST — Comparison Table

| Metric | Trie | Hash Table | BST |
|--------|------|------------|-----|
| Exact search | O(L) | O(1) avg | O(L log n) |
| Insert | O(L) | O(1) avg | O(L log n) |
| Delete | O(L) | O(1) avg | O(L log n) |
| Prefix search | O(L + k) | O(n) (full scan) | O(L log n + k) |
| Longest prefix match | O(L) | Not supported | O(L log n) |
| Ordered iteration | Yes (DFS) | No | Yes (in-order) |
| Space | O(N x L) | O(N) | O(N) |
| Collision handling | None needed | Chaining/open addressing | Rebalancing |
| Cache locality | Poor (pointer chasing) | Good (array-based) | Poor |
| Variable-length keys | Natural | Requires hashing | Natural |
| Best for | Prefix operations, dictionaries | Key-value lookups | Ordered data |

---

## Interview Corner

### 1. Word Break (LeetCode 139)

**Problem:** Given a string s and a dictionary of words, determine if s can be segmented into space-separated dictionary words.

**Solution:** DP + Trie (see Word Break section above). Optimization: instead of calling search for each substring, traverse the trie while extending the end index to achieve O(n sup2) time.

### 2. Word Search II (LeetCode 212)

**Problem:** Given an m x n board of characters and a list of words, find all words from the list that appear on the board (adjacent cells, horizontal or vertical).

**Trie-based solution:** Insert all words into a trie. DFS from each cell, traversing the trie simultaneously. Stop when the current trie node has no children for the next character. Use isEndOfWord to collect matches.

Time: O(m x n x 4 sup L) where L = max word length
Space: O(total characters in all words)

**Key optimization:** Remove the word from the trie after finding it (set isEndOfWord = false) to avoid duplicates.

### 3. Longest Word in Dictionary (LeetCode 720)

**Problem:** Find the longest word in the dictionary that can be built one character at a time using other words in the dictionary.

**Trie solution:** Insert all words. DFS the trie: at each node, only recurse if isEndOfWord is true (the prefix must be a valid word). Track the longest valid path.

### 4. Replace Words (LeetCode 648)

**Problem:** Replace words in a sentence with their shortest root from a dictionary.

**Trie solution:** Insert all roots into a trie. For each word in the sentence, traverse the trie character by character. At the first node where isEndOfWord = true, replace the word with the accumulated prefix. If no root is found after traversing the full word, keep the original.

Time: O(N + M) where N = total chars in dictionary, M = total chars in sentence
Space: O(N) for the trie

### 5. Design Add and Search Words Data Structure (LeetCode 211)

**Problem:** Design a data structure supporting addWord(word) and search(word) where "." in search matches any character.

**Trie solution:** Standard insert. For search with wildcard ".", use DFS/backtracking: at a "." node, explore ALL children.

```python
def search(self, word: str) -> bool:
    def dfs(node, i):
        if i == len(word):
            return node.isEnd
        if word[i] == '.':
            for child in node.children.values():
                if dfs(child, i + 1):
                    return True
            return False
        if word[i] not in node.children:
            return False
        return dfs(node.children[word[i]], i + 1)
    return dfs(self.root, 0)
```

---

## Applications in Real Systems

| Application | How Trie Is Used | Example |
|-------------|-----------------|---------|
| Google Search Autocomplete | Prefix tree over billions of search queries; top-k results with frequency-weighted ranking | Typing "how to" shows "how to tie a tie", "how to make pancakes" |
| Spell Checker | Trie stores valid dictionary; edit-distance traversal suggests corrections | "accomodate" to "accommodate" |
| IP Routing (Longest Prefix Match) | Binary trie (radix tree) stores routing table; routers find most specific match | 192.168.1.35 matches 192.168.1.0/24 over 192.168.0.0/16 |
| T9 Predictive Text | Trie maps digit sequences to words; 2-"abc", 4-"ghi", etc. | "43556" to "hello" |
| DNA Subsequence Search | Trie over genome patterns; prefix search finds gene subsequences in O(L) | Finding "ATG" start codons in a genome |
| URL Router (Express.js, Django) | Compressed trie maps URL paths to handlers | /api/users/:id/profile matches /api/users/42/profile |

---

## Pro Tips

> **One-Sentence Takeaway:** Tries outperform hash tables at prefix matching and ordered iteration; compress them via radix trees when memory is a concern.

- **Trie search is O(L) regardless of n**: Search time depends only on string length, not on the number of stored strings. This makes tries ideal for dictionaries with millions of entries.
- **Tries excel where hash tables fail**: Hash tables cannot efficiently find all strings with a given prefix, support ordered iteration, or handle variable-length keys without hashing overhead. Tries do all three.
- **Compressed trie (radix tree) saves memory**: Merge nodes with single children into one node. This reduces the number of nodes from O(total characters) to O(number of unique strings).
- **Ternary search tree bridges trie and BST**: Each node has three children (less, equal, greater). It uses less memory than a trie but has O(L) search — a good middle ground.
- **Wildcard search requires backtracking**: The "." in LeetCode 211 means you cannot simply traverse — you must branch to all children and backtrack.

## One-Sentence Takeaways

- A trie stores strings as paths in a tree with characters as edges.
- Search, insert, and lookup are O(L) where L is the string length.
- Prefix matching is natural and efficient — just traverse the prefix path.
- Space can be large: each character may require a 26-element array per node.
- Compressed tries (radix trees) merge single-child paths to reduce nodes.
- Ternary search trees combine trie-like search with BST-like memory.
- Delete requires cascading cleanup — only remove nodes not shared by other words.
- Word break combines tries with DP for O(n sup2) dictionary-based segmentation.
- IP routing uses binary trie longest-prefix matching for multi-million entry tables.
- Wildcard search turns a linear traversal into a branching DFS with backtracking.

## Concept Comparison Table

| Feature | Trie | Hash Table | BST | Ternary Search Tree |
|---------|------|------------|-----|-------------------|
| Search time | O(L) | O(1) avg | O(L log n) | O(L) |
| Prefix matching | Yes | No | Slow | Yes |
| Ordered iteration | Yes (DFS) | No | Yes | Yes |
| Space (ASCII keys) | High | Moderate | Low | Low |
| Variable-length keys | Natural | Hash needed | Natural | Natural |
| Memory per character | Pointer array | None | 2 pointers + key | 3 pointers + char |

## Quick Reference: Trie vs Alternatives

| Operation | Trie | Hash Table | BST |
|-----------|------|------------|-----|
| Exact search | O(L) | O(1) | O(L log n) |
| Insert | O(L) | O(1) | O(L log n) |
| Delete | O(L) | O(1) | O(L log n) |
| Prefix search | O(L + results) | O(n) | O(n) |
| Longest prefix match | O(L) | Not supported | O(L) |
| Space | O(sum characters) | O(n) | O(n) |

## Cross-Application Matrix

| Application | Why Trie |
|-------------|----------|
| Autocomplete | Prefix matching, fast suggestions |
| Spell checker | Dictionary with prefix correction |
| IP routing (longest prefix) | Radix tree = compressed trie |
| DNA sequence search | Pattern matching in genomes |
| Text prediction | Efficient prefix-based prediction |
| URL router (web framework) | Path prefix matching |
| T9 predictive text | Map digit sequences to words |

## Common Mistakes & GFG Deepening

### Common Mistakes (GFG-Style)

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| Confusing trie search with hash table search | Trie search is O(key_length) regardless of collisions; hash table is O(1) average | Use trie when prefix search or ordered keys matter; hash table for pure existence |
| Not handling empty string as a valid key | Empty string terminates at root; root needs an `isEndOfWord` flag | Set `root.isEndOfWord = true` if empty string is valid |
| Forgetting to free/deallocate children recursively (in low-level languages) | Only deleting the root leaks all child nodes | Recursively delete children in destructor; or use smart pointers |
| Using arrays for children (wasteful for large alphabets) | Array of 26 for English fine, but 256 ASCII or 1114112 Unicode is huge | Use hash map or array-of-pointers with null checks; for Unicode use Map or ternary search tree |
| Trie for sparse keysets wastes memory | Most nodes have only 1-2 children, but array allocates space for full alphabet | Use a compressed trie/radix tree or ternary search tree for sparse data |
| Not marking isEndOfWord correctly during deletion | Decrementing counts without checking leaf status leaves stale flags | Only clear isEndOfWord when no children remain and it's not a prefix of another word |
| Ternary search tree confusion with trie | TST saves memory but has O(log n) search vs trie O(k) | TST = hybrid, each node has 3 children (less/same/more). Use for sparse, trie for dense |

### TypeScript Trie Implementation

```typescript
class TrieNode {
    children: Map<string, TrieNode> = new Map();
    isEndOfWord: boolean = false;
    frequency: number = 0; // for prefix counting
}

class Trie {
    private root: TrieNode = new TrieNode();

    insert(word: string): void {
        let node = this.root;
        for (const ch of word) {
            if (!node.children.has(ch)) {
                node.children.set(ch, new TrieNode());
            }
            node = node.children.get(ch)!;
            node.frequency++; // count prefix occurrences
        }
        node.isEndOfWord = true;
    }

    search(word: string): boolean {
        const node = this._traverse(word);
        return node !== null && node.isEndOfWord;
    }

    startsWith(prefix: string): boolean {
        return this._traverse(prefix) !== null;
    }

    countPrefix(prefix: string): number {
        const node = this._traverse(prefix);
        return node ? node.frequency : 0;
    }

    delete(word: string): boolean {
        return this._delete(this.root, word, 0);
    }

    private _delete(node: TrieNode, word: string, depth: number): boolean {
        if (depth === word.length) {
            if (!node.isEndOfWord) return false;
            node.isEndOfWord = false;
            return node.children.size === 0;
        }
        const ch = word[depth];
        const child = node.children.get(ch);
        if (!child) return false;
        
        const shouldDelete = this._delete(child, word, depth + 1);
        if (shouldDelete) {
            node.children.delete(ch);
            return node.children.size === 0 && !node.isEndOfWord;
        }
        return false;
    }

    private _traverse(prefix: string): TrieNode | null {
        let node = this.root;
        for (const ch of prefix) {
            if (!node.children.has(ch)) return null;
            node = node.children.get(ch)!;
        }
        return node;
    }

    // Auto-complete: find all words with given prefix
    autoComplete(prefix: string): string[] {
        const node = this._traverse(prefix);
        if (!node) return [];
        const results: string[] = [];
        this._collectWords(node, prefix, results);
        return results;
    }

    private _collectWords(node: TrieNode, prefix: string, results: string[]): void {
        if (node.isEndOfWord) results.push(prefix);
        for (const [ch, child] of node.children) {
            this._collectWords(child, prefix + ch, results);
        }
    }

    // Find longest common prefix among all words
    longestCommonPrefix(): string {
        let node = this.root;
        let prefix = '';
        while (node.children.size === 1 && !node.isEndOfWord) {
            const [ch, child] = node.children.entries().next().value;
            prefix += ch;
            node = child;
        }
        return prefix;
    }
}

// Word search in a grid using Trie (LC 212)
function findWords(board: string[][], words: string[]): string[] {
    const trie = new Trie();
    for (const w of words) trie.insert(w);
    const result = new Set<string>();
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    
    function dfs(r: number, c: number, node: TrieNode, path: string): void {
        if (node.isEndOfWord) result.add(path);
        if (r < 0 || r >= board.length || c < 0 || c >= board[0].length) return;
        const ch = board[r][c];
        const child = node.children.get(ch);
        if (!child) return;
        
        board[r][c] = '#'; // mark visited
        for (const [dr, dc] of dirs) dfs(r + dr, c + dc, child, path + ch);
        board[r][c] = ch; // restore
    }
    
    for (let r = 0; r < board.length; r++) {
        for (let c = 0; c < board[0].length; c++) {
            dfs(r, c, trie['root'], '');
        }
    }
    return [...result];
}
```

### Additional MCQs (GFG Pattern)

8. **What is the space complexity of a trie storing n strings of average length L over an alphabet of size A?**
   - a) O(n)
   - b) O(nL)
   - c) O(nL × A) ✓ (worst-case: each char creates A children)
   - d) O(A)

9. **A ternary search tree (TST) node stores:**
   - a) One character and three child pointers ✓
   - b) Three characters and one pointer
   - c) A character array
   - d) A hash map

10. **The number of nodes in a trie for the set {a, aa, aaa, ..., a^k} is:**
    - a) k
    - b) k(k+1)/2 ✓
    - c) 2^k
    - d) k²

11. **Trie is preferred over hash set when:**
    - a) Memory is the primary concern
    - b) Prefix queries are frequent ✓
    - c) Insert order must be preserved
    - d) The key set is small

12. **A compressed trie (radix tree) compresses:**
    - a) Leaf nodes into arrays
    - b) Chains of single-child nodes into a single node ✓
    - c) All nodes into a hash map
    - d) Characters into bits

13. **In the word search II problem (LC 212), using a trie reduces time complexity from:**
    - a) O(k × m × n) to O(k)
    - b) O(m × n × 4^L) to O(m × n × 4^L) with pruning ✓ (trie prunes search)
    - c) O(L²) to O(L)
    - d) O(k log k) to O(k)

**Answers:** 8-c, 9-a, 10-b, 11-b, 12-b, 13-b

### Additional Exercises (GFG Pattern)

11. **Replace words (LC 648)**: Given a dictionary of roots and a sentence, replace all words with their shortest root prefix. Use a trie.

12. **Longest word in dictionary (LC 720)**: Find the longest word that can be built one character at a time from other words in a dictionary.

13. **Map sum pairs (LC 677)**: Design a map that supports `insert(key, val)` and `sum(prefix)` returning sum of all values of keys starting with the prefix.

14. **Palindrome pairs (LC 336)**: Given a list of words, find all pairs of distinct indices (i, j) such that words[i] + words[j] is a palindrome. Use trie + reverse lookup.

15. **Stream of characters (LC 1032)**: Design a data structure that supports `query(letter)` returning true if any previously seen word suffix matches. Use a reversed trie.

16. **Design search autocomplete system (LC 642)**: Design a system that suggests top-3 sentences given a prefix, based on previous query frequencies.

17. **Extract all words matching a wildcard pattern**: Given a trie and a pattern with '?' wildcard, return all words matching the pattern.

18. **Phone directory with trie**: Given a list of contacts and a phone number string, suggest all contacts matching the prefix as digits are typed.

19. **Maximum XOR of two numbers in an array (LC 421)**: Use a binary trie to find two numbers whose XOR is maximum.

### Trie Variants Comparison

| Variant | Node Structure | Space | Search Time | Use Case |
|---------|---------------|-------|-------------|----------|
| Standard Trie | Array of A pointers | O(nL × A) | O(L) | Dense alphabets, small A |
| Hash-map based Trie | Map<char, node> | O(nL) | O(L) | Unicode, sparse keys |
| Compressed Trie (Radix Tree) | String + children | O(n) | O(L) | IP routing, longest prefix |
| Ternary Search Tree | 3 child pointers | O(n) | O(L + log n) | Sparse keys, memory-limited |
| Suffix Trie | Pointer to suffix | O(n²) | O(L) | String matching |
| Patricia Trie | Bit-level indexing | Compact | O(L) | IP routing, memory-constrained |
   - c) Hash function
   - d) Tree height

2. **What operation is natural in tries but impossible in hash tables?**
   - a) Exact lookup
   - b) Prefix matching
   - c) Insertion
   - d) Deletion

3. **What reduces memory in a compressed trie?**
   - a) Fewer characters
   - b) Merging single-child paths
   - c) Using arrays
   - d) Hashing keys

4. **A ternary search tree node has how many children?**
   - a) 2
   - b) 3
   - c) 26
   - d) Unlimited

5. **Which data structure is a compressed trie used for IP routing?**
   - a) B-tree
   - b) Radix tree
   - c) Hash table
   - d) AVL tree

6. **What happens when deleting "app" from a trie that also contains "apple"?**
   - a) Both words are removed
   - b) Only "app" is removed; "apple" remains
   - c) The trie throws an error
   - d) Nodes along "app" are deleted

7. **In Word Search II, why do we remove a word from the trie after finding it?**
   - a) To save memory
   - b) To avoid duplicate results
   - c) To speed up future searches
   - d) To prevent infinite loops

**Answers:** 1-b, 2-b, 3-b, 4-b, 5-b, 6-b, 7-b

## Summary

- A trie stores strings as paths in a tree, with characters on edges.
- Operations run in O(L) time independent of the number of stored strings.
- The trie supports prefix matching naturally, which hash tables cannot.
- Space can be optimized with compressed tries (radix trees) or ternary search trees.
- Delete uses cascading cleanup to remove unshared nodes.
- Word break combines tries with dynamic programming for string segmentation.
- Longest prefix matching is the backbone of IP routing tables.
- Wildcard search in tries requires DFS backtracking over all child paths.
- Tries are fundamental to autocomplete, spell check, IP routing, and DNA sequence analysis.

## Exercises

### Review Questions

1. Why is trie search faster than BST search for string keys?
2. What is the space complexity of a trie, and how can it be reduced?
3. Why can a hash table not efficiently support prefix matching?
4. Explain the cascading cleanup in trie deletion — when can a node be safely deleted?
5. How does wildcard search (LeetCode 211) differ from standard search in a trie?

### Application Problems

6. Implement a **reverse trie** to find suffixes (e.g., words ending with "ing").
7. Write a function to find the longest common prefix among a set of strings using a trie.
8. Implement a **ternary search tree** (TST) as an alternative to a trie with lower memory overhead.
9. Implement **Word Search II** (LeetCode 212) using a trie as the core data structure.
10. Write a program that uses a trie to implement **T9 predictive text**: given a digit sequence, return all matching dictionary words.

### Challenge Problem

11. Implement a **compressed trie** (radix tree / Patricia trie) where edges with single-child paths are concatenated. Compare insertion and search time against the standard trie for a large dictionary.

