# Day 29 Notes

## Key Concepts Learned
- Reverse linked lists (iterative)
- Floyd's cycle detection and linked list cycles
- Interval merging and sorting-based merges

## Important Formulas/Algorithms
- [Formula 1]
- [Formula 2]

## Code Snippets
```java
 // Reverse linked list
 public static ListNode reverse(ListNode head) { ListNode prev=null, cur=head; while(cur!=null) { ListNode nx=cur.next; cur.next=prev; prev=cur; cur=nx; } return prev; }
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
- Write more unit tests for corner cases (empty, single-node lists)
- Time-box your practice: 15+15 mock sessions
- Review common errors and O(n log n) vs O(n^2) pitfalls
