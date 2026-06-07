# Bit Manipulation Algorithms

## Overview
Bit manipulation involves applying logical operations on binary representations of numbers to solve problems efficiently. These techniques can significantly optimize solutions for certain types of problems.

## Basic Bit Operations

### 1. Basic Operators
- **AND (`&`)**: Sets each bit to 1 if both bits are 1
- **OR (`|`)**: Sets each bit to 1 if at least one bit is 1
- **XOR (`^`)**: Sets each bit to 1 if only one bit is 1
- **NOT (`~`)**: Inverts all bits
- **Left Shift (`<<`)**: Shifts bits left, filling with zeros
- **Right Shift (`>>`)**: Shifts bits right, preserving sign bit
- **Unsigned Right Shift (`>>>`)**: Shifts bits right, filling with zeros

### 2. Common Bit Operations

#### Check if a bit is set
```java
boolean isBitSet(int num, int position) {
    return (num & (1 << position)) != 0;
}
```

#### Set a bit
```java
int setBit(int num, int position) {
    return num | (1 << position);
}
```

#### Clear a bit
```java
int clearBit(int num, int position) {
    return num & ~(1 << position);
}
```

#### Toggle a bit
```java
int toggleBit(int num, int position) {
    return num ^ (1 << position);
}
```

#### Clear rightmost set bit
```java
int clearRightmostSetBit(int num) {
    return num & (num - 1);
}
```

#### Isolate rightmost set bit
```java
int isolateRightmostSetBit(int num) {
    return num & -num;
}
```

#### Count set bits (Brian Kernighan's Algorithm)
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

## Common Bit Manipulation Techniques

### 1. Check if a number is a power of 2
```java
boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
```

### 2. Find the position of the rightmost set bit
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

### 3. Swap two numbers without using a temporary variable
```java
void swapWithoutTemp(int a, int b) {
    a = a ^ b;
    b = a ^ b;
    a = a ^ b;
}
```

### 4. Find the single number in an array where all other numbers appear twice
```java
int singleNumber(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

### 5. Generate all subsets of a set
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

## Advanced Bit Manipulation Techniques

### 1. Counting bits from 0 to n
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

### 2. Find the missing number in an array containing n distinct numbers from 0 to n
```java
int missingNumber(int[] nums) {
    int result = nums.length;
    for (int i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    return result;
}
```

### 3. Sum of two integers without using + or - operators
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

### 4. Reverse bits of an integer
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

### 5. Find the two single numbers in an array where all other numbers appear twice
```java
int[] singleNumbers(int[] nums) {
    // Get XOR of all numbers
    int xor = 0;
    for (int num : nums) {
        xor ^= num;
    }
    
    // Find the rightmost set bit in xor
    int rightmostSetBit = xor & -xor;
    
    // Divide numbers into two groups and XOR separately
    int a = 0, b = 0;
    for (int num : nums) {
        if ((num & rightmostSetBit) != 0) {
            a ^= num;
        } else {
            b ^= num;
        }
    }
    
    return new int[]{a, b};
}
```

## Bit Manipulation Tricks

### 1. Multiply by 2ⁿ
```java
int multiplyByPowerOf2(int num, int n) {
    return num << n;
}
```

### 2. Divide by 2ⁿ
```java
int divideByPowerOf2(int num, int n) {
    return num >> n;
}
```

### 3. Check if a number is odd
```java
boolean isOdd(int num) {
    return (num & 1) == 1;
}
```

### 4. Flip the case of a character
```java
char flipCase(char ch) {
    return (char)(ch ^ 32);
}
```

### 5. Find the minimum of two integers without branching
```java
int min(int a, int b) {
    return b ^ ((a ^ b) & -(a < b ? 1 : 0));
}
```

### 6. Find the maximum of two integers without branching
```java
int max(int a, int b) {
    return a ^ ((a ^ b) & -(a < b ? 1 : 0));
}
```

## Common Bit Masks

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

## When to Use Bit Manipulation

Bit manipulation is particularly useful for:
- Optimizing space usage (storing multiple boolean flags in a single integer)
- Speeding up arithmetic operations
- Solving problems involving sets and subsets
- Working with binary data or flags
- Low-level programming and embedded systems

## Common Mistakes and Pitfalls

1. **Operator precedence**: Bit operators have lower precedence than arithmetic operators
2. **Sign extension**: Right shift (`>>`) preserves the sign bit, which may lead to unexpected results
3. **Integer overflow**: Be careful when shifting bits, especially with large numbers
4. **Language-specific behavior**: Bit manipulation may behave differently across programming languages
5. **Readability**: Bit manipulation can make code harder to understand if not properly documented

## Practice Problems

1. [Single Number](https://leetcode.com/problems/single-number/)
2. [Number of 1 Bits](https://leetcode.com/problems/number-of-1-bits/)
3. [Counting Bits](https://leetcode.com/problems/counting-bits/)
4. [Missing Number](https://leetcode.com/problems/missing-number/)
5. [Reverse Bits](https://leetcode.com/problems/reverse-bits/)
6. [Bitwise AND of Numbers Range](https://leetcode.com/problems/bitwise-and-of-numbers-range/)
7. [Single Number II](https://leetcode.com/problems/single-number-ii/)
8. [Single Number III](https://leetcode.com/problems/single-number-iii/)
9. [Power of Two](https://leetcode.com/problems/power-of-two/)
10. [Sum of Two Integers](https://leetcode.com/problems/sum-of-two-integers/)