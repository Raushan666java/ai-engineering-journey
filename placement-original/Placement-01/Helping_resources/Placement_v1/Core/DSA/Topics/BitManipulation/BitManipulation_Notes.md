# Bit Manipulation: Comprehensive Notes

## 1. Introduction to Bit Manipulation

Bit manipulation involves applying logical operations on binary representations of numbers to solve problems efficiently. These techniques can significantly optimize solutions for certain types of problems.

### Why Bit Manipulation?
- **Efficiency**: Operations are extremely fast at the hardware level
- **Space Optimization**: Represent multiple boolean values in a single integer
- **Algorithmic Advantages**: Solve certain problems with elegant solutions

### Binary Representation
Every number can be represented in binary form using only 0s and 1s.
```
Decimal: 13
Binary:  00001101
```

## 2. Basic Bit Operations

### Bitwise Operators
- **AND (`&`)**: Sets each bit to 1 if both bits are 1
- **OR (`|`)**: Sets each bit to 1 if at least one bit is 1
- **XOR (`^`)**: Sets each bit to 1 if only one bit is 1
- **NOT (`~`)**: Inverts all bits
- **Left Shift (`<<`)**: Shifts bits left, filling with zeros
- **Right Shift (`>>`)**: Shifts bits right, preserving sign bit
- **Unsigned Right Shift (`>>>`)**: Shifts bits right, filling with zeros

### Examples
```java
// AND
5 & 3 = 101 & 011 = 001 = 1

// OR
5 | 3 = 101 | 011 = 111 = 7

// XOR
5 ^ 3 = 101 ^ 011 = 110 = 6

// NOT
~5 = ~(00000101) = 11111010 = -6 (in two's complement)

// Left Shift
5 << 1 = 00000101 << 1 = 00001010 = 10

// Right Shift
5 >> 1 = 00000101 >> 1 = 00000010 = 2
```

## 3. Common Bit Operations

### Check if a bit is set
```java
boolean isBitSet(int num, int position) {
    return (num & (1 << position)) != 0;
}
```

### Set a bit
```java
int setBit(int num, int position) {
    return num | (1 << position);
}
```

### Clear a bit
```java
int clearBit(int num, int position) {
    return num & ~(1 << position);
}
```

### Toggle a bit
```java
int toggleBit(int num, int position) {
    return num ^ (1 << position);
}
```

### Clear rightmost set bit
```java
int clearRightmostSetBit(int num) {
    return num & (num - 1);
}
```

### Isolate rightmost set bit
```java
int isolateRightmostSetBit(int num) {
    return num & -num;
}
```

### Count set bits (Brian Kernighan's Algorithm)
```java
int countSetBits(int num) {
    int count = 0;
    while (num > 0) {
        num &= (num - 1);
        count++;
    }
    return count;
}
```

## 4. Advanced Bit Manipulation Techniques

### Check if a number is a power of 2
```java
boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
```

### Find the position of the rightmost set bit
```java
int rightmostSetBitPosition(int n) {
    if (n == 0) return -1;
    
    int position = 0;
    while ((n & 1) == 0) {
        n >>= 1;
        position++;
    }
    return position;
}
```

### Swap two numbers without using a temporary variable
```java
void swapWithoutTemp(int a, int b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}
```

### Find the single number in an array where all other numbers appear twice
```java
int singleNumber(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

### Generate all subsets of a set
```java
List<List<Integer>> generateSubsets(int[] nums) {
    List<List<Integer>> subsets = new ArrayList<>();
    int n = nums.length;
    int totalSubsets = 1 << n; // 2^n subsets
    
    for (int i = 0; i < totalSubsets; i++) {
        List<Integer> subset = new ArrayList<>();
        for (int j = 0; j < n; j++) {
            // Check if jth bit is set in i
            if ((i & (1 << j)) != 0) {
                subset.add(nums[j]);
            }
        }
        subsets.add(subset);
    }
    
    return subsets;
}
```

## 5. Bit Manipulation in Competitive Programming

### Counting bits from 0 to n
```java
int[] countBits(int n) {
    int[] result = new int[n + 1];
    for (int i = 1; i <= n; i++) {
        // Use previously calculated results
        result[i] = result[i & (i - 1)] + 1;
    }
    return result;
}
```

### Find the missing number in an array containing n distinct numbers from 0 to n
```java
int missingNumber(int[] nums) {
    int result = nums.length;
    for (int i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    return result;
}
```

### Sum of two integers without using + or - operators
```java
int getSum(int a, int b) {
    while (b != 0) {
        int carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
```

### Reverse bits of an integer
```java
int reverseBits(int n) {
    int result = 0;
    for (int i = 0; i < 32; i++) {
        result <<= 1;
        result |= (n & 1);
        n >>= 1;
    }
    return result;
}
```

## 6. Bit Manipulation Tricks

### Multiply by 2ⁿ
```java
int multiplyByPowerOf2(int num, int n) {
    return num << n;
}
```

### Divide by 2ⁿ
```java
int divideByPowerOf2(int num, int n) {
    return num >> n;
}
```

### Check if a number is odd
```java
boolean isOdd(int num) {
    return (num & 1) == 1;
}
```

### Flip the case of a character
```java
char flipCase(char ch) {
    return (char)(ch ^ 32);
}
```

### Find the minimum of two integers without branching
```java
int min(int a, int b) {
    return b ^ ((a ^ b) & -(a < b ? 1 : 0));
}
```

## 7. Common Bit Masks

```java
// Masks for common operations
final int SET_BIT_1 = 1;                  // 00000001
final int SET_BIT_2 = 1 << 1;             // 00000010
final int SET_BIT_3 = 1 << 2;             // 00000100
final int LOWEST_8_BITS = 0xFF;           // 11111111
final int LOWEST_16_BITS = 0xFFFF;        // 1111111111111111
final int EVEN_BITS = 0xAAAAAAAA;         // 10101010...
final int ODD_BITS = 0x55555555;          // 01010101...
```

## 8. Time and Space Complexity

| Operation | Time Complexity | Space Complexity |
|-----------|----------------|-----------------|
| Basic Bit Operations | O(1) | O(1) |
| Count Set Bits | O(k) where k is the number of set bits | O(1) |
| Generate All Subsets | O(2^n) | O(n * 2^n) |
| Bit Manipulation Tricks | O(1) | O(1) |

## 9. When to Use Bit Manipulation

Bit manipulation is particularly useful for:
- Optimizing space usage (storing multiple boolean flags in a single integer)
- Speeding up arithmetic operations
- Solving problems involving sets and subsets
- Working with binary data or flags
- Low-level programming and embedded systems

## 10. Common Interview Questions

1. Count the number of set bits in an integer
2. Find the single number in an array where all other numbers appear twice
3. Check if a number is a power of 2
4. Swap two numbers without using a temporary variable
5. Find the missing number in an array
6. Generate all possible subsets of a set
7. Reverse bits of an integer
8. Find the two single numbers in an array where all other numbers appear twice
9. Count the number of bits needed to flip to convert one number to another
10. Find the maximum XOR of two numbers in an array

## Resources for Further Learning

1. **Books**:
   - "Hacker's Delight" by Henry S. Warren, Jr.
   - "Programming Pearls" by Jon Bentley

2. **Online Platforms**:
   - LeetCode: Bit Manipulation section
   - GeeksforGeeks: Bit Magic
   - HackerRank: Bit Manipulation challenges

3. **YouTube Channels**:
   - mycodeschool
   - Back To Back SWE
   - Tushar Roy - Coding Made Simple