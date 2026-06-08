# Arrays - Complete Practice Guide

## 📋 Overview
Arrays are fundamental data structures that store elements of the same type in contiguous memory locations. They provide O(1) access time by index but have fixed size limitations.

## 🎯 Difficulty Breakdown

### Easy Level (15 Problems)
- **Basic Operations**: Find max/min, reverse, rotate
- **Search Problems**: Linear search, binary search
- **Simple Modifications**: Remove duplicates, move zeros
- **Two Pointers**: Pair sum, remove element

### Medium Level (20 Problems)
- **Subarray Problems**: Maximum subarray, subarray sum equals k
- **Sorting Applications**: Sort colors, merge intervals
- **Matrix Operations**: Spiral traversal, rotate matrix
- **Advanced Search**: Find peak element, search in rotated array

### Hard Level (10 Problems)
- **Complex Subarrays**: Maximum product subarray, longest subarray
- **Matrix Challenges**: Word search, largest rectangle
- **Advanced Algorithms**: Trapping rain water, median of arrays

## 📚 Key Concepts

### Array Operations
- **Access**: O(1) time complexity
- **Search**: O(n) linear, O(log n) binary
- **Insertion/Deletion**: O(n) in middle, O(1) at ends
- **Space**: Contiguous memory allocation

### Common Patterns
- **Two Pointers**: Opposite ends, same direction
- **Sliding Window**: Fixed/variable size windows
- **Prefix Sum**: Cumulative sum arrays
- **Kadane's Algorithm**: Maximum subarray sum

### Time Complexities
- **Traversal**: O(n)
- **Binary Search**: O(log n)
- **Sorting**: O(n log n)
- **Nested Operations**: O(n²)

## 🔧 Implementation Notes

### Java Array Characteristics
```java
// Declaration and initialization
int[] arr = new int[10];
int[] arr2 = {1, 2, 3, 4, 5};

// Common pitfalls
arr.length; // Property, not method
Arrays.copyOf(arr, n); // For resizing
Arrays.fill(arr, 0); // Initialize with value
```

### Edge Cases to Consider
- Empty arrays
- Single element arrays
- Arrays with duplicates
- Negative numbers
- Integer overflow
- Large constraints (10^5 elements)

## 📋 Problem Categories

### 1. Basic Operations
- Find maximum/minimum element
- Array reversal
- Left/right rotation
- Remove duplicates

### 2. Search Problems
- Linear search
- Binary search
- Search in rotated sorted array
- Find peak element

### 3. Subarray Problems
- Maximum subarray sum
- Subarray with given sum
- Longest subarray with sum k
- Product of subarray

### 4. Two Pointers
- Pair with given sum
- Remove duplicates in-place
- Container with most water
- Trapping rain water

### 5. Matrix Operations
- Spiral traversal
- Rotate matrix 90 degrees
- Search in 2D matrix
- Set matrix zeros

### 6. Advanced Problems
- Merge intervals
- Next permutation
- Find missing number
- Majority element

## 🎯 Interview Tips

### Common Questions
1. **"Find the maximum subarray sum"** - Kadane's algorithm
2. **"Search in rotated sorted array"** - Modified binary search
3. **"Two sum problem"** - HashMap vs Two pointers
4. **"Remove duplicates"** - Two pointers in-place

### Optimization Techniques
- Use two pointers to avoid O(n²) solutions
- Prefix sums for range queries
- Binary search for sorted arrays
- HashMap for O(1) lookups

### Space-Time Tradeoffs
- O(n) space for hash maps vs O(1) space with two pointers
- Preprocessing for multiple queries
- In-place modifications to save space

## 📈 Learning Progression

1. **Week 1**: Basic operations and search
2. **Week 2**: Two pointers and sliding window
3. **Week 3**: Subarray problems and Kadane's
4. **Week 4**: Matrix problems and advanced topics

## 🔗 Related Topics
- **Strings**: Similar traversal patterns
- **Linked Lists**: Different access patterns
- **Stacks/Queues**: Array-based implementations
- **Dynamic Programming**: Subarray problems

## 📝 Practice Strategy

### Daily Goals
- 3-5 easy problems
- 2-3 medium problems
- 1 hard problem (with hints)

### Review Process
- Implement multiple approaches
- Analyze time/space complexity
- Identify edge cases
- Compare with optimal solutions

### Red Flags
- O(n²) solutions for large inputs
- Not handling empty arrays
- Integer overflow issues
- Incorrect boundary conditions

Remember: Arrays are the foundation of algorithmic problem-solving. Master these patterns and you'll have strong fundamentals for more complex data structures!
