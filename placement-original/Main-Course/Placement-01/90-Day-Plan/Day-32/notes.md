# Day 32 Notes

## Key Concepts Learned
- Recursive and iterative traversals (preorder, inorder, postorder, BFS)
- BST operations (insert, search, delete) and invariants
- LCA via parent mapping and depth equalization

## Important Formulas/Algorithms
- [Formula 1]
- [Formula 2]

## Code Snippets
```java
// Iterative preorder
public static List<Integer> preorderIter(Node root) { List<Integer> out = new ArrayList<>(); if (root==null) return out; Deque<Node> st = new ArrayDeque<>(); st.push(root); while(!st.isEmpty()){ Node n=st.pop(); out.add(n.val); if (n.right!=null) st.push(n.right); if (n.left!=null) st.push(n.left);} return out; }
```

## Questions & Doubts
- [Question 1]
- [Question 2]

## Mistakes Made
- [Mistake 1 and correction]
- [Mistake 2 and correction]

## Future Reference
- [Topic to revisit]
- [Concept to practice more]

## Personal Reflections
[How did the day go? What could be improved?]

## Action Items for Tomorrow
- Add JUnit tests for tree traversal/operations
- Add heavy-case tests (large random trees) for performance profiling
- Add a short visualizer for BFS layers (quiet mode) if useful
