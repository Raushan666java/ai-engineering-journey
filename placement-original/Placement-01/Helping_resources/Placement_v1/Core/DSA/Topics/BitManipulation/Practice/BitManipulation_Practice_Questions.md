# Bit Manipulation Practice Questions

## Easy Problems

### 1. Single Number
**Problem**: Given a non-empty array of integers, every element appears twice except for one. Find that single one.

**Example**:
```
Input: [2,2,1]
Output: 1
```

**Approach**: Use XOR operation. XOR of a number with itself is 0, and XOR of a number with 0 is the number itself.

```java
public int singleNumber(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 2. Number of 1 Bits
**Problem**: Write a function that takes an unsigned integer and returns the number of '1' bits it has.

**Example**:
```
Input: n = 00000000000000000000000000001011
Output: 3
```

**Approach**: Use Brian Kernighan's algorithm to count set bits.

```java
public int hammingWeight(int n) {
    int count = 0;
    while (n != 0) {
        n &= (n - 1); // Clear the least significant set bit
        count++;
    }
    return count;
}
```

**Time Complexity**: O(k) where k is the number of set bits  
**Space Complexity**: O(1)

### 3. Power of Two
**Problem**: Given an integer, determine if it is a power of two.

**Example**:
```
Input: 16
Output: true
Explanation: 2^4 = 16
```

**Approach**: A power of 2 has exactly one bit set in its binary representation.

```java
public boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}
```

**Time Complexity**: O(1)  
**Space Complexity**: O(1)

### 4. Missing Number
**Problem**: Given an array containing n distinct numbers taken from 0 to n, find the missing number.

**Example**:
```
Input: [3,0,1]
Output: 2
```

**Approach**: Use XOR to find the missing number.

```java
public int missingNumber(int[] nums) {
    int result = nums.length;
    for (int i = 0; i < nums.length; i++) {
        result ^= i ^ nums[i];
    }
    return result;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 5. Reverse Bits
**Problem**: Reverse bits of a given 32 bits unsigned integer.

**Example**:
```
Input: 00000010100101000001111010011100
Output: 00111001011110000010100101000000
```

**Approach**: Iterate through all 32 bits, building the result.

```java
public int reverseBits(int n) {
    int result = 0;
    for (int i = 0; i < 32; i++) {
        result <<= 1;
        result |= (n & 1);
        n >>= 1;
    }
    return result;
}
```

**Time Complexity**: O(1) - constant 32 iterations  
**Space Complexity**: O(1)

## Medium Problems

### 6. Counting Bits
**Problem**: Given a non-negative integer num, for every number i in the range 0 ≤ i ≤ num, calculate the number of 1's in their binary representation and return them as an array.

**Example**:
```
Input: 5
Output: [0,1,1,2,1,2]
Explanation:
0 -> 0
1 -> 1
2 -> 10
3 -> 11
4 -> 100
5 -> 101
```

**Approach**: Use dynamic programming with bit manipulation.

```java
public int[] countBits(int num) {
    int[] result = new int[num + 1];
    for (int i = 1; i <= num; i++) {
        result[i] = result[i & (i - 1)] + 1;
    }
    return result;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### 7. Sum of Two Integers
**Problem**: Calculate the sum of two integers without using the + and - operators.

**Example**:
```
Input: a = 1, b = 2
Output: 3
```

**Approach**: Use bit manipulation to simulate addition.

```java
public int getSum(int a, int b) {
    while (b != 0) {
        int carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}
```

**Time Complexity**: O(log n)  
**Space Complexity**: O(1)

### 8. Bitwise AND of Numbers Range
**Problem**: Given a range [m, n] where 0 ≤ m ≤ n ≤ 2^31 - 1, return the bitwise AND of all numbers in this range, inclusive.

**Example**:
```
Input: [5,7]
Output: 4
```

**Approach**: Find the common prefix of m and n in their binary representations.

```java
public int rangeBitwiseAnd(int m, int n) {
    int shift = 0;
    // Find the common prefix
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
}
```

**Time Complexity**: O(log n)  
**Space Complexity**: O(1)

### 9. Single Number II
**Problem**: Given an array of integers, every element appears three times except for one, which appears exactly once. Find that single one.

**Example**:
```
Input: [2,2,3,2]
Output: 3
```

**Approach**: Count the number of 1s at each bit position.

```java
public int singleNumber(int[] nums) {
    int result = 0;
    
    for (int i = 0; i < 32; i++) {
        int sum = 0;
        for (int num : nums) {
            sum += (num >> i) & 1;
        }
        sum %= 3;
        result |= sum << i;
    }
    
    return result;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 10. Subsets
**Problem**: Given a set of distinct integers, return all possible subsets.

**Example**:
```
Input: [1,2,3]
Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
```

**Approach**: Use bit manipulation to generate all subsets.

```java
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    int totalSubsets = 1 << n; // 2^n subsets
    
    for (int i = 0; i < totalSubsets; i++) {
        List<Integer> subset = new ArrayList<>();
        for (int j = 0; j < n; j++) {
            if ((i & (1 << j)) != 0) {
                subset.add(nums[j]);
            }
        }
        result.add(subset);
    }
    
    return result;
}
```

**Time Complexity**: O(n * 2^n)  
**Space Complexity**: O(n * 2^n)

## Hard Problems

### 11. Single Number III
**Problem**: Given an array of numbers, in which exactly two elements appear only once and all the other elements appear exactly twice, find the two elements that appear only once.

**Example**:
```
Input: [1,2,1,3,2,5]
Output: [3,5]
```

**Approach**: Use XOR to find the two single numbers.

```java
public int[] singleNumber(int[] nums) {
    // Get XOR of the two single numbers
    int xor = 0;
    for (int num : nums) {
        xor ^= num;
    }
    
    // Find the rightmost set bit
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

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 12. Maximum XOR of Two Numbers in an Array
**Problem**: Given an array of integers, find the maximum XOR of any two integers.

**Example**:
```
Input: [3,10,5,25,2,8]
Output: 28
Explanation: The maximum XOR is 5 ^ 25 = 28
```

**Approach**: Use a trie to find the maximum XOR.

```java
public int findMaximumXOR(int[] nums) {
    int maxXOR = 0;
    int mask = 0;
    
    // Try to find the maximum XOR bit by bit from left to right
    for (int i = 31; i >= 0; i--) {
        // Set the i-th bit in mask
        mask |= (1 << i);
        
        // Collect all prefixes of length (32-i) in the array
        Set<Integer> prefixes = new HashSet<>();
        for (int num : nums) {
            prefixes.add(num & mask);
        }
        
        // Check if we can find two prefixes whose XOR equals to the potential maximum
        int potentialMax = maxXOR | (1 << i);
        for (int prefix : prefixes) {
            if (prefixes.contains(prefix ^ potentialMax)) {
                maxXOR = potentialMax;
                break;
            }
        }
    }
    
    return maxXOR;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(n)

### 13. UTF-8 Validation
**Problem**: Validate if a given array of integers represents a valid UTF-8 encoding.

**Example**:
```
Input: [197, 130, 1]
Output: true
```

**Approach**: Check the number of bytes for each character based on the leading bits.

```java
public boolean validUtf8(int[] data) {
    int remainingBytes = 0;
    
    for (int num : data) {
        if (remainingBytes == 0) {
            if ((num >> 7) == 0) {
                // 1-byte character
                continue;
            } else if ((num >> 5) == 0b110) {
                // 2-byte character
                remainingBytes = 1;
            } else if ((num >> 4) == 0b1110) {
                // 3-byte character
                remainingBytes = 2;
            } else if ((num >> 3) == 0b11110) {
                // 4-byte character
                remainingBytes = 3;
            } else {
                return false;
            }
        } else {
            // Check if the byte starts with 10
            if ((num >> 6) != 0b10) {
                return false;
            }
            remainingBytes--;
        }
    }
    
    return remainingBytes == 0;
}
```

**Time Complexity**: O(n)  
**Space Complexity**: O(1)

### 14. Minimum Number of Flips to Make a OR b Equal to c
**Problem**: Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make (a OR b == c).

**Example**:
```
Input: a = 2, b = 6, c = 5
Output: 3
```

**Approach**: Check each bit position and count the required flips.

```java
public int minFlips(int a, int b, int c) {
    int flips = 0;
    
    for (int i = 0; i < 32; i++) {
        int bitA = (a >> i) & 1;
        int bitB = (b >> i) & 1;
        int bitC = (c >> i) & 1;
        
        if (bitC == 0) {
            // If c has 0, both a and b should have 0
            flips += (bitA + bitB);
        } else {
            // If c has 1, at least one of a or b should have 1
            if (bitA == 0 && bitB == 0) {
                flips += 1;
            }
        }
    }
    
    return flips;
}
```

**Time Complexity**: O(1) - constant 32 iterations  
**Space Complexity**: O(1)

### 15. Minimum One Bit Operations to Make Integers Zero
**Problem**: Given an integer n, you need to find the minimum number of operations to make n equal to 0.

In one operation, you can:
1. Change the rightmost (0th) bit in the binary representation of n.
2. Change the ith bit in the binary representation of n if the (i-1)th bit is set to 1 and all bits from 0 to (i-2) are set to 0.

**Example**:
```
Input: n = 6
Output: 4
```

**Approach**: Use Gray code properties.

```java
public int minimumOneBitOperations(int n) {
    if (n == 0) return 0;
    
    int k = 0;
    int mask = n;
    
    // Find the position of the most significant bit
    while (mask != 0) {
        mask >>= 1;
        k++;
    }
    
    // Calculate using the formula for Gray code
    return (1 << k) - 1 - minimumOneBitOperations(n ^ (1 << (k - 1)));
}
```

**Time Complexity**: O(log n)  
**Space Complexity**: O(log n) due to recursion

## Company-Specific Questions

### Google
- Single Number (Easy)
- Missing Number (Easy)
- Maximum XOR of Two Numbers in an Array (Hard)

### Amazon
- Number of 1 Bits (Easy)
- Counting Bits (Medium)
- UTF-8 Validation (Hard)

### Facebook
- Power of Two (Easy)
- Bitwise AND of Numbers Range (Medium)
- Single Number III (Hard)

### Microsoft
- Reverse Bits (Easy)
- Sum of Two Integers (Medium)
- Minimum Number of Flips to Make a OR b Equal to c (Hard)

## Interview Tips for Bit Manipulation

1. **Understand the basic operations**: Make sure you know how AND, OR, XOR, NOT, and shifts work.

2. **Memorize common bit tricks**:
   - Check if a number is odd: `n & 1 == 1`
   - Check if a number is a power of 2: `n > 0 && (n & (n - 1)) == 0`
   - Clear the rightmost set bit: `n & (n - 1)`
   - Isolate the rightmost set bit: `n & -n`

3. **Practice bit visualization**: Be able to quickly visualize what happens when you apply bit operations.

4. **Use XOR properties**:
   - `a ^ a = 0`
   - `a ^ 0 = a`
   - `a ^ b ^ a = b`

5. **Think about bit patterns**: Many problems can be solved by recognizing patterns in the binary representation.

6. **Consider edge cases**: Don't forget about negative numbers, zero, and integer overflow.

7. **Optimize space**: Use bit manipulation to compress data when appropriate.

8. **Explain your approach**: Clearly explain your bit manipulation approach during interviews, as it can be hard to follow.