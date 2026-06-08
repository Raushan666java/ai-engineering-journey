# Day 22 Notes: Graphs

## Key Concepts
- Graph representation: adjacency list vs adjacency matrix
- BFS: shortest path in unweighted graphs, layer-by-layer traversal
- DFS: recursion tree, backtracking, strongly connected components
- Dijkstra: shortest path (non-negative weights) using a min-heap
- Kruskal: MST using union-find; Prim's algorithm alternative
- Topological sort: Kahn's algorithm & DFS approach; cycle detection

## Common Pitfalls
- Mixing representation (using matrix for large sparse graphs) — prefer adjacency list for large sparse graphs
- Forgetting to reset visited array in repeated traversals
- Dijkstra can't handle negative edge weights — use Bellman-Ford for those cases

## Action Items
- Add runtime complexity comments on each algorithm
- Add `--quiet` flag to `GraphVisualizer` to make CI runs fast
- Write JUnit tests for key methods to ensure determinism and regression testing
# Day 22 Notes

## Key Concepts Learned
- [Concept 1]
- [Concept 2]
- [Concept 3]

## Important Formulas/Algorithms
- [Formula 1]
- [Formula 2]

## Code Snippets
`java
// Important code snippet from today
public class Example {
    // code here
}
`

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
- [Action 1]
- [Action 2]
- [Action 3]
