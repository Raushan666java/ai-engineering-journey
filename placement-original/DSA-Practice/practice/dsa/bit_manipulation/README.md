# BIT MANIPULATION

## Overview
Bit manipulation involves performing operations on individual bits within binary representations of numbers. These techniques are essential for optimizing space, solving problems efficiently, and understanding low-level computer operations.

## Difficulty Breakdown

### Easy Problems
1. **Single Number** - Find element appearing once (LeetCode 136)
2. **Number of 1 Bits** - Count set bits (LeetCode 191)
3. **Power of Two** - Check if number is power of 2 (LeetCode 231)
4. **Reverse Bits** - Reverse binary representation (LeetCode 190)

### Medium Problems
5. **Single Number II** - Find element appearing once with duplicates (LeetCode 137)
6. **Bitwise AND of Numbers Range** - Range bitwise AND (LeetCode 201)
7. **Counting Bits** - Count set bits for all numbers up to n (LeetCode 338)
8. **Divide Two Integers** - Division using bit operations (LeetCode 29)

### Hard Problems
9. **Maximum XOR of Two Numbers** - Find max XOR pair (LeetCode 421)
10. **Maximum XOR with Element** - XOR queries with constraints (LeetCode 1707)
11. **Subsets** - Generate all subsets using bit manipulation (LeetCode 78)
12. **Gray Code** - Generate Gray code sequence (LeetCode 89)
13. **Bitwise ORs of Subarrays** - Subarray bitwise OR operations (LeetCode 898)
14. **XOR Queries of Subarray** - Range XOR queries (LeetCode 1310)

## Key Concepts

### Basic Bit Operations
- **AND (&)**: Set bit if both bits are 1
- **OR (|)**: Set bit if either bit is 1
- **XOR (^)**: Set bit if bits are different
- **NOT (~)**: Flip all bits
- **Left Shift (<<)**: Multiply by 2^n
- **Right Shift (>>)**: Divide by 2^n (signed)
- **Unsigned Right Shift (>>>)**: Divide by 2^n (unsigned)

### Bit Tricks
- **Check if even/odd**: `n & 1`
- **Multiply by 2**: `n << 1`
- **Divide by 2**: `n >> 1`
- **Check power of 2**: `n & (n-1) == 0`
- **Get lowest set bit**: `n & -n`
- **Clear lowest set bit**: `n & (n-1)`

### Bit Manipulation Patterns
- **Counting bits**: Brian Kernighan's algorithm
- **Finding single number**: XOR all elements
- **Subsets generation**: Use bit masks
- **Range operations**: Bitwise AND/OR of ranges
- **Bit manipulation for math**: Division, multiplication

## Time Complexity

| Operation | Time Complexity | Description |
|-----------|----------------|-------------|
| Basic operations | O(1) | AND, OR, XOR, shifts |
| Count bits | O(log n) | Brian Kernighan's algorithm |
| Generate subsets | O(2^n * n) | All subsets with bit masks |
| Range queries | O(1) to O(n) | Depends on preprocessing |

## Common Interview Questions

1. **Find single number in array**
2. **Count number of 1 bits**
3. **Check if power of two**
4. **Reverse bits of a number**
5. **Find missing number**
6. **Generate all subsets**
7. **Bitwise operations on ranges**
8. **Divide without division operator**
9. **Find two numbers appearing once**
10. **Maximum XOR pair**

## Implementation Notes

- Use unsigned types for bit operations when needed
- Be careful with signed vs unsigned shifts
- Consider endianness for bit reversal
- Use bit manipulation for space optimization
- Combine multiple operations efficiently
- Handle edge cases (0, negative numbers, overflow)

## Question Files
1. `1_single_number.java` - Find element appearing once (LeetCode 136)
2. `2_number_of_1_bits.java` - Count set bits (LeetCode 191)
3. `3_power_of_two.java` - Check if power of 2 (LeetCode 231)
4. `4_reverse_bits.java` - Reverse binary representation (LeetCode 190)
5. `5_single_number_2.java` - Find single number with duplicates (LeetCode 137)
6. `6_bitwise_and_range.java` - Range bitwise AND (LeetCode 201)
7. `7_counting_bits.java` - Count set bits for all numbers (LeetCode 338)
8. `8_divide_integers.java` - Division using bit operations (LeetCode 29)
9. `9_max_xor_pair.java` - Maximum XOR of two numbers (LeetCode 421)
10. `10_subsets.java` - Generate all subsets (LeetCode 78)
11. `11_gray_code.java` - Generate Gray code sequence (LeetCode 89)
12. `12_xor_queries.java` - XOR queries of subarray (LeetCode 1310)