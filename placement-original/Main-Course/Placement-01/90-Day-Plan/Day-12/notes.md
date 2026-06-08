# Day 12 Notes — Trees (Part 1)

## Key Concepts Learned
- Binary Tree structure: nodes with left and right pointers
- Tree traversals: inorder, preorder, postorder (recursive and iterative)
- Level-order traversal (BFS) using Queue
- Binary Search Tree (BST) invariants and operations

## Important Algorithms / Patterns
- Recursive DFS for traversal (pre/in/post)  
- Iterative preorder/inorder using Stack  
- Level-order using Queue  
- BST insert/search using recursion or iteration

## Example Code Snippets
```java
// Inorder traversal (recursive)
void inorder(Node root) {
    if (root == null) return;
    inorder(root.left);
    System.out.print(root.val + " ");
    inorder(root.right);
}
```

## Questions & Doubts
- When to prefer iterative traversal vs recursive?  
- How to balance BST insertions dynamically? (AVL/Red-black trees overview)

## Mistakes & Corrections
- Mistake: Not checking for null pointer in BFS — add null checks before next jumps.  
- Correction: Always validate input tree before running algorithms.

## Future Reference
- Read about AVL trees and Red-Black trees (Day 13)  
- Practice iterative tree traversals using explicit stacks

## Personal Reflections
- Practiced both implementation and whiteboard explanations; focus on iterative traversals next

## Action Items for Tomorrow
- Create LCA examples and practice implementing iterative inorder using stack
- Try edge cases for null and skewed trees
