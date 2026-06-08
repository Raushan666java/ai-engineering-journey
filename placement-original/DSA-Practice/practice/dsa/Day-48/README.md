# Day 48: Bit Manipulation - Mastering Binary Operations

## 📋 Overview
Master bit manipulation techniques and solve problems using bitwise operations. Learn XOR properties, bit masks, and optimize solutions using bit-level operations.

## 🎯 Learning Objectives
- Master fundamental bit operations (AND, OR, XOR, NOT, shifts)
- Understand XOR properties and applications
- Learn bit masking techniques
- Solve problems using bit manipulation
- Apply bit operations for optimization
- Understand cryptography and compression basics

## 📚 Topics Covered

### 1. **Fundamental Bit Operations**
- Bitwise AND, OR, XOR, NOT
- Left shift (<<) and Right shift (>>)
- Unsigned right shift (>>>)
- Bit counting and setting

### 2. **XOR Properties**
- a ^ a = 0 (self-cancellation)
- a ^ 0 = a (identity)
- XOR is commutative and associative
- Finding unique elements

### 3. **Bit Manipulation Techniques**
- Check if bit is set: `(n & (1 << i)) != 0`
- Set bit: `n | (1 << i)`
- Clear bit: `n & ~(1 << i)`
- Toggle bit: `n ^ (1 << i)`
- Count set bits (Hamming Weight)
- Power of 2 check: `(n & (n-1)) == 0`

### 4. **Advanced Applications**
- Subset generation using bitmasks
- Gray code generation
- Bit compression
- Cryptographic operations

## 💻 Problems (12 Total)

### Problem 1: Number of 1 Bits (Hamming Weight)
**Difficulty**: Easy | **LeetCode**: #191
- **Description**: Count number of 1 bits in integer
- **Approach 1**: Loop and check each bit
- **Approach 2**: Brian Kernighan's algorithm `n & (n-1)`
- **Time Complexity**: O(log n) or O(number of set bits)
- **Space Complexity**: O(1)

### Problem 2: Reverse Bits
**Difficulty**: Easy | **LeetCode**: #190
- **Description**: Reverse bits of 32-bit unsigned integer
- **Approach**: Process bit by bit, shift and add
- **Time Complexity**: O(32) = O(1)
- **Space Complexity**: O(1)

### Problem 3: Single Number
**Difficulty**: Easy | **LeetCode**: #136
- **Description**: Find element appearing once when others appear twice
- **Approach**: XOR all elements (duplicates cancel out)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 4: Single Number II
**Difficulty**: Medium | **LeetCode**: #137
- **Description**: Find element appearing once when others appear thrice
- **Approach 1**: Bit counting at each position
- **Approach 2**: State machine with ones and twos
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 5: Bitwise AND of Numbers Range
**Difficulty**: Medium | **LeetCode**: #201
- **Description**: Bitwise AND of all numbers in range [left, right]
- **Approach**: Find common prefix of left and right
- **Time Complexity**: O(log n)
- **Space Complexity**: O(1)

### Problem 6: Maximum XOR of Two Numbers in Array
**Difficulty**: Medium | **LeetCode**: #421
- **Description**: Find maximum XOR of any two numbers in array
- **Approach 1**: Brute force O(n²)
- **Approach 2**: Trie-based approach O(n)
- **Time Complexity**: O(n * 32)
- **Space Complexity**: O(n * 32)

### Problem 7: Power of Two
**Difficulty**: Easy | **LeetCode**: #231
- **Description**: Check if number is power of two
- **Approach**: Use `n > 0 && (n & (n-1)) == 0`
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

### Problem 8: Missing Number
**Difficulty**: Easy | **LeetCode**: #268
- **Description**: Find missing number in array [0, n]
- **Approach**: XOR all indices and values
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### Problem 9: Sum of Two Integers
**Difficulty**: Medium | **LeetCode**: #371
- **Description**: Add two integers without using + or - operators
- **Approach**: Use XOR for sum, AND for carry
- **Time Complexity**: O(log n)
- **Space Complexity**: O(1)

### Problem 10: Subsets (Bitmask Approach)
**Difficulty**: Medium | **LeetCode**: #78
- **Description**: Generate all subsets using bit manipulation
- **Approach**: Use 2^n bitmasks to represent subsets
- **Time Complexity**: O(n * 2^n)
- **Space Complexity**: O(1) excluding output

### Problem 11: Gray Code
**Difficulty**: Medium | **LeetCode**: #89
- **Description**: Generate n-bit Gray code sequence
- **Approach**: Use formula `i ^ (i >> 1)`
- **Time Complexity**: O(2^n)
- **Space Complexity**: O(1) excluding output

### Problem 12: Minimum Flips to Make OR Equal to Target
**Difficulty**: Medium | **LeetCode**: #1318
- **Description**: Find minimum bit flips to make a OR b equal to c
- **Approach**: Check each bit position
- **Time Complexity**: O(log max(a,b,c))
- **Space Complexity**: O(1)

## 🔄 Complexity Analysis

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|------------------|
| Count Set Bits | O(log n) | O(1) |
| Reverse Bits | O(1) | O(1) |
| XOR All Elements | O(n) | O(1) |
| Bit Masking | O(1) | O(1) |
| Subset Generation | O(n * 2^n) | O(1) |
| Trie-based XOR | O(n * 32) | O(n * 32) |

## 💡 Key Patterns

### Pattern 1: XOR for Unique Elements
```java
// Find element appearing once
int findUnique(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

### Pattern 2: Bit Manipulation Techniques
```java
// Check if i-th bit is set
boolean isSet(int n, int i) {
    return (n & (1 << i)) != 0;
}

// Set i-th bit
int setBit(int n, int i) {
    return n | (1 << i);
}

// Clear i-th bit
int clearBit(int n, int i) {
    return n & ~(1 << i);
}

// Toggle i-th bit
int toggleBit(int n, int i) {
    return n ^ (1 << i);
}
```

### Pattern 3: Count Set Bits (Brian Kernighan's Algorithm)
```java
int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
        n &= (n - 1); // Remove rightmost set bit
        count++;
    }
    return count;
}
```

### Pattern 4: Power of Two Check
```java
boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
```

## 🎓 Real-World Applications

### 1. **Cryptography**
- XOR encryption/decryption
- One-time pad encryption
- Checksum calculation

### 2. **Data Compression**
- Huffman coding
- Run-length encoding
- Bit packing

### 3. **Computer Graphics**
- Color manipulation
- Image processing
- Alpha blending

### 4. **Network Programming**
- IP address manipulation
- Subnet masks
- Packet header operations

### 5. **Database Systems**
- Bitmap indices
- Set operations
- Permission flags

### 6. **Low-Level Programming**
- Register manipulation
- Hardware interfacing
- Memory optimization

## 🚀 Pro Tips

1. **XOR Properties**: Remember self-cancellation property for finding unique elements
2. **Brian Kernighan's Algorithm**: Fastest way to count set bits
3. **Power of 2**: Use `n & (n-1) == 0` trick
4. **Sign Extension**: Be careful with signed vs unsigned right shift
5. **Overflow Prevention**: Use proper data types for bit operations
6. **Bit Masks**: Create masks for specific bit positions
7. **Gray Code**: Use `i ^ (i >> 1)` formula
8. **Negative Numbers**: Understand two's complement representation

## ⚠️ Common Pitfalls

1. **Sign bit handling**: Forgetting signed vs unsigned operations
2. **Integer overflow**: Not considering 32-bit limits
3. **Shift amounts**: Shifting by >= bit width is undefined
4. **Precedence**: Bitwise operators have lower precedence than comparison
5. **Negative shifts**: Left/right shift of negative amounts
6. **AND vs OR confusion**: Mixing up conditions
7. **XOR with different sizes**: Ensure proper type casting

## 📊 Optimization Techniques

### Space Optimization
- Use single integer to store multiple boolean flags
- Bit packing for memory-constrained environments

### Time Optimization
- Replace multiplication/division by powers of 2 with shifts
- Use bit manipulation for modulo with powers of 2

### Code Simplification
- Use bit tricks to simplify conditional logic
- Replace loops with bit operations

## 🧪 Advanced Techniques

### 1. **Subset Generation**
```java
// Generate all subsets using bitmask
for (int mask = 0; mask < (1 << n); mask++) {
    for (int i = 0; i < n; i++) {
        if ((mask & (1 << i)) != 0) {
            // i-th element is in subset
        }
    }
}
```

### 2. **Gray Code Generation**
```java
int grayCode(int i) {
    return i ^ (i >> 1);
}
```

### 3. **Get Rightmost Set Bit**
```java
int rightmostSetBit(int n) {
    return n & (-n);
}
```

### 4. **Turn Off Rightmost Set Bit**
```java
int turnOffRightmost(int n) {
    return n & (n - 1);
}
```

## 📖 Resources
- **LeetCode**: Problems #191, #190, #136, #137, #201, #421, #231, #268, #371, #78, #89, #1318
- **GeeksforGeeks**: [Bit Manipulation](https://www.geeksforgeeks.org/bits-manipulation-important-tactics/)
- **YouTube**: "Bit Hacks" by Stanford CS106B
- **Book**: "Hacker's Delight" by Henry S. Warren
- **Tutorial**: [Bit Twiddling Hacks](https://graphics.stanford.edu/~seander/bithacks.html)

## ✅ Practice Checklist

### Morning Session
- [ ] Learn fundamental bit operations
- [ ] Understand XOR properties
- [ ] Solve Number of 1 Bits
- [ ] Solve Reverse Bits
- [ ] Solve Single Number

### Afternoon Session
- [ ] Master advanced bit operations
- [ ] Study bit manipulation in arrays
- [ ] Learn subset generation with bitmasks
- [ ] Understand cryptography basics

### Evening Session
- [ ] Solve Single Number II
- [ ] Solve Bitwise AND of Numbers Range
- [ ] Solve Maximum XOR of Two Numbers
- [ ] Complete remaining 6 problems
- [ ] Practice mock coding interview

## 🎯 Success Criteria
- ✅ Understand all bit operations
- ✅ Master XOR properties
- ✅ Solve all 12 problems
- ✅ Apply bit manipulation for optimization
- ✅ Complete mock interview successfully

## 🔜 Next Steps
- **Day 49**: Greedy Algorithms
- **Day 50**: Backtracking
- **Day 51**: Week 7 Assessment & Project Work

---
**Time Allocation**: 9 hours total
- Morning: 3 hours (Fundamentals & Basic Problems)
- Afternoon: 3 hours (Advanced Operations & Applications)
- Evening: 3 hours (Complex Problems & Mock Interview)

**Goal**: Master bit manipulation and apply it for efficient problem solving!
