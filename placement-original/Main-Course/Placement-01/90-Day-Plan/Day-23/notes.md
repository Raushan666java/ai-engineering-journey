# Day 23 Notes: Advanced Graphs

## Concepts
- Topological sort: use-case in dependency resolution, DAG properties
- Kosaraju for SCC: pass ordering, transpose graph, use in condensation graph
- Bellman-Ford: detect negative cycles, handle negative weight edges
- Floyd-Warshall: O(n^3) approach for all-pairs shortest paths

## Pitfalls
- Kahn's algorithm returns an ordering only for DAG; otherwise detect cycles by remaining indegree nodes
- Bellman-Ford returns false if negative cycles exist; handle gracefully in tests

## Action Items
- Add JUnit tests for topological sort and Bellman-Ford
- Add small example graphs that demonstrate negative weight handling and SCCs
# Day 23 Notes

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
