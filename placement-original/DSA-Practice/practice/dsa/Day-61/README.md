# Day 61: Skip Lists & Advanced Tree Structures

## 📋 Overview
Master probabilistic and self-balancing tree structures that provide efficient search, insertion, and deletion operations. Skip Lists offer a simpler alternative to balanced trees with randomization, while advanced tree variants (Splay Trees, Treaps) optimize for specific access patterns.

## 🎯 Learning Objectives
By the end of Day 61, you will:
- Implement Skip Lists with probabilistic balancing
- Build Splay Trees with move-to-root heuristic
- Create Treaps (Tree + Heap hybrid structures)
- Design AVL Trees with rotation optimizations
- Understand trade-offs between different balanced tree structures
- Apply these patterns to concurrent data structures

## 📚 Topics Covered

### 1. **Skip List**
- Probabilistic alternative to balanced trees
- Multi-level linked list with express lanes
- Randomized height assignment
- **Time Complexity**: O(log n) expected for search/insert/delete
- **Space Complexity**: O(n) expected
- **Use Cases**: Concurrent sorted sets (Redis), lock-free data structures

### 2. **Splay Tree**
- Self-adjusting binary search tree
- Move-to-root on every access (splaying)
- Amortized O(log n) operations
- **Time Complexity**: O(log n) amortized, O(n) worst case per operation
- **Space Complexity**: O(n)
- **Use Cases**: Caches (frequently accessed items move to top), compilers

### 3. **Treap (Tree + Heap)**
- Binary search tree by key, max-heap by priority
- Randomized priorities for probabilistic balancing
- **Time Complexity**: O(log n) expected for all operations
- **Space Complexity**: O(n)
- **Use Cases**: Randomized algorithms, persistent data structures

### 4. **AVL Tree (Advanced)**
- Strictly balanced BST (height difference ≤ 1)
- Rotation-based rebalancing after modifications
- **Time Complexity**: O(log n) worst case for all operations
- **Space Complexity**: O(n)
- **Use Cases**: Databases requiring guaranteed O(log n), read-heavy workloads

## 💡 Key Insights

### When to Use Each Structure:
1. **Skip List**: Concurrent access, lock-free algorithms, simpler implementation than trees
2. **Splay Tree**: Temporal locality (recent accesses likely repeated), caching
3. **Treap**: Need both randomization and BST property, persistent structures
4. **AVL Tree**: Strict balance required, read-heavy (more reads than writes)

### Trade-offs:
- **Skip List vs BST**: Easier to implement, cache-friendly, but probabilistic guarantees
- **Splay Tree**: No balancing info stored, but worst-case O(n) per operation
- **Treap vs AVL**: Simpler rotations, randomized, but expected (not guaranteed) O(log n)
- **AVL vs Red-Black**: AVL more strictly balanced (faster lookups), Red-Black faster insertions

## 🔗 Related Patterns
- **Concurrent Programming**: Lock-free Skip Lists (ConcurrentSkipListMap in Java)
- **Caching**: Splay Trees for LRU-like behavior
- **Databases**: B-Trees for disk-based, Skip Lists for in-memory
- **Gaming**: Treaps for leaderboards with randomized insertion

## 📈 Complexity Summary

| Structure   | Search (Avg) | Insert (Avg) | Delete (Avg) | Search (Worst) | Space   | Balancing     |
|-------------|--------------|--------------|--------------|----------------|---------|---------------|
| Skip List   | O(log n)     | O(log n)     | O(log n)     | O(n)           | O(n)    | Probabilistic |
| Splay Tree  | O(log n)*    | O(log n)*    | O(log n)*    | O(n)           | O(n)    | Self-adjusting|
| Treap       | O(log n)     | O(log n)     | O(log n)     | O(n)           | O(n)    | Randomized    |
| AVL Tree    | O(log n)     | O(log n)     | O(log n)     | O(log n)       | O(n)    | Strict rotations|

*Amortized time complexity

## 🔍 Interview Relevance
- **Design Questions**: "Implement a concurrent sorted set" → Skip List
- **Optimization**: "Design a cache-friendly BST" → Splay Tree
- **Randomization**: "Balance tree without storing balance info" → Treap
- **Guarantees**: "Need guaranteed O(log n) operations" → AVL Tree
- **Trade-off Analysis**: Compare Skip List simplicity vs Red-Black Tree performance

## 📝 Practice Problems
1. Implement Skip List with customizable max level
2. Build Splay Tree and demonstrate amortized analysis
3. Create Treap with split/merge operations
4. Implement AVL Tree with double rotations
5. Compare Skip List vs AVL Tree for sorted map implementation
6. Design lock-free Skip List for concurrent access

## 🎓 Deep Dive Topics
- **Skip List Probability**: Why p=0.5 gives O(log n) expected height
- **Splay Tree Amortization**: Potential function analysis
- **Treap Persistence**: Immutable treaps with path copying
- **AVL Rotations**: Single vs double rotations, when to use each
- **Concurrent Skip Lists**: CAS operations for lock-free insertions
- **Cache Locality**: Skip List array-based vs pointer-based

## 🚀 Next Steps
- Day 62: **Tries & Radix Trees** (prefix-based structures)
- Day 63: **Segment Trees & Fenwick Trees** (range queries)
- Day 64: **Suffix Trees & Suffix Arrays** (string algorithms)

---

**🔥 Pro Tip**: In interviews, mention Skip Lists when discussing alternatives to Red-Black Trees—they're conceptually simpler and perform similarly in practice (used in Redis, LevelDB, MemSQL).

**📌 Remember**: Skip List height is O(log n) *expected*, not guaranteed. For hard real-time systems requiring guaranteed bounds, prefer AVL or Red-Black Trees!
