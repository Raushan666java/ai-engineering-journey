# Day 5: Arrays & Collections Notes

## Arrays
- Fixed size, index-based, contiguous memory for primitives and references.
- Default values:
  - numeric primitives: 0
  - booleans: false
  - object references: null

### Declaration & initialization
```java
int[] arr1 = new int[5];
int[] arr2 = {1, 2, 3, 4};
String[] names = new String[]{"Alice", "Bob"};
```

### Traversal
- For loop, enhanced for loop, while loop
- System.arraycopy, Arrays.copyOf

### Multidimensional
- `int[][] matrix = new int[3][3];`
- `matrix[i][j]` indexing
- Jagged arrays: `int[][] jagged = new int[3][]; jagged[0] = new int[2];`

## Java Collections
- ArrayList: dynamic array backed, O(1) amorts for add, O(n) remove
- LinkedList: good for frequent insertion at ends, O(n) random access
- HashSet: unique items, O(1) add/contains
- TreeSet: sorted set, O(log n) operations
- HashMap: key-value store, O(1) get/put

### Iteration
- Iterator vs enhanced for-loop
- Remove safely within Iterator

### Streams (brief)
- map, filter, collect
- Useful for readable transformations

---

### Common algorithms
- Binary Search: sorted array prerequisite
- Two-pointer: for pair sum, partition-like tasks
- Sliding window: variable size or fixed size
- Partitioning & in-place modification

### Complexity
- Array look-up: O(1)
- Linear search: O(n)
- Sorting: O(n log n)
- Insert in ArrayList: O(1) amortized
- Remove first from ArrayList: O(n)

---

## Mini Project: Simple Contact Manager
- Use HashMap<String, String> to map name -> phone
- Operations: add, find, remove, list

## Interview Tips
- Choose ArrayList vs LinkedList depending on access vs insert
- Optimize for memory when using primitive arrays
- For frequency counting, use HashMap

