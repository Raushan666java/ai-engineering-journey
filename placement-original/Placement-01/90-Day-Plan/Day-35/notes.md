## Key Concepts
- Binary search templates for `lower_bound` and `upper_bound`
- Handling off-by-one and loop invariants
- Rotated array search and pivot logic

## Code Snippets
```java
// lower bound template
int l = 0, r = n;
while (l < r) {
    int m = (l + r) / 2; // or l + (r - l) / 2
    if (a[m] < x) l = m + 1; else r = m;
}
return l;
```

## Action Items for Tomorrow
- Add unit tests for edge cases
- Consider handling duplicates and empty arrays
- Implement variations and deterministic checks
