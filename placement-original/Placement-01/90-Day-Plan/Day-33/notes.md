# Day 33 Notes

## Key Concepts Learned
- Java PriorityQueue and usage of custom Comparator for max-heap
- Heap sort using min-heap, Top-K via min-heap of size k
- Merge k sorted arrays using a heap of size k

## Important Formulas/Algorithms
- [Formula 1]
- [Formula 2]

## Code Snippets
```java
// Top K (largest) using min-heap of size k
public static int[] topK(int[] a, int k) { PriorityQueue<Integer> pq = new PriorityQueue<>(); for (int v: a) { pq.add(v); if (pq.size()>k) pq.poll(); } int[] r=new int[pq.size()]; int idx = r.length-1; while(!pq.isEmpty()) r[idx--]=pq.poll(); return r; }
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
- Add median maintenance (two heaps) demo
- Add JUnit tests for heap methods
- Add `--quiet` flags for large demo test data
