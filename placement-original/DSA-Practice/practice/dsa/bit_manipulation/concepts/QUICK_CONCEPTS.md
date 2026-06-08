# BIT MANIPULATION - QUICK CONCEPTS

## Core Concepts

### 1. Basic Bit Operations

#### Bitwise Operators
```java
// AND: Set bit if both are 1
int and = a & b;

// OR: Set bit if either is 1
int or = a | b;

// XOR: Set bit if different
int xor = a ^ b;

// NOT: Flip all bits
int not = ~a;

// Left shift: Multiply by 2^n
int left = a << n;

// Right shift: Divide by 2^n
int right = a >> n;

// Unsigned right shift
int unsigned = a >>> n;
```

### 2. Common Bit Tricks

#### Check if even/odd
```java
boolean isEven = (n & 1) == 0;
boolean isOdd = (n & 1) == 1;
```

#### Check if power of 2
```java
boolean isPowerOfTwo = n > 0 && (n & (n - 1)) == 0;
```

#### Get lowest set bit
```java
int lowestSetBit = n & -n;
```

#### Clear lowest set bit
```java
int clearLowest = n & (n - 1);
```

#### Count set bits (Brian Kernighan's algorithm)
```java
int countBits(int n) {
    int count = 0;
    while (n != 0) {
        n &= (n - 1);
        count++;
    }
    return count;
}
```

### 3. Bit Manipulation Patterns

#### Find single number (XOR all elements)
```java
int findSingle(int[] nums) {
    int result = 0;
    for (int num : nums) {
        result ^= num;
    }
    return result;
}
```

#### Find two single numbers
```java
int[] findTwoSingles(int[] nums) {
    int xor = 0;
    for (int num : nums) xor ^= num;

    int diff = xor & -xor; // Get rightmost set bit

    int x = 0, y = 0;
    for (int num : nums) {
        if ((num & diff) != 0) x ^= num;
        else y ^= num;
    }

    return new int[]{x, y};
}
```

#### Generate all subsets using bit manipulation
```java
List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    int total = 1 << n; // 2^n subsets

    for (int mask = 0; mask < total; mask++) {
        List<Integer> subset = new ArrayList<>();
        for (int i = 0; i < n; i++) {
            if ((mask & (1 << i)) != 0) {
                subset.add(nums[i]);
            }
        }
        result.add(subset);
    }

    return result;
}
```

### 4. Advanced Techniques

#### Bitwise AND of range [m, n]
```java
int rangeBitwiseAnd(int m, int n) {
    while (n > m) {
        n &= (n - 1); // Clear lowest set bit
    }
    return n;
}
```

#### Reverse bits
```java
int reverseBits(int n) {
    int result = 0;
    for (int i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    return result;
}
```

#### Divide two integers using bit manipulation
```java
int divide(int dividend, int divisor) {
    if (divisor == 0) throw new ArithmeticException();

    long result = 0;
    long a = Math.abs((long)dividend);
    long b = Math.abs((long)divisor);

    while (a >= b) {
        long temp = b;
        long multiple = 1;
        while (a >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }

        a -= temp;
        result += multiple;
    }

    // Handle sign
    if ((dividend < 0) ^ (divisor < 0)) {
        result = -result;
    }

    return (int) Math.min(Math.max(result, Integer.MIN_VALUE), Integer.MAX_VALUE);
}
```

### 5. Bit Manipulation for Math

#### Check if number is power of 4
```java
boolean isPowerOfFour(int n) {
    return n > 0 && (n & (n - 1)) == 0 && (n & 0x55555555) != 0;
}
```

#### Find position of only set bit
```java
int findPosition(int n) {
    if ((n & (n - 1)) != 0) return -1; // More than one bit set
    int pos = 0;
    while (n > 1) {
        n >>= 1;
        pos++;
    }
    return pos;
}
```

#### Swap two numbers without temp
```java
void swap(int[] arr, int i, int j) {
    arr[i] = arr[i] ^ arr[j];
    arr[j] = arr[i] ^ arr[j];
    arr[i] = arr[i] ^ arr[j];
}
```

### 6. Bit Manipulation in Arrays

#### Find missing number
```java
int findMissing(int[] nums) {
    int n = nums.length + 1;
    int expectedXor = 0;
    for (int i = 1; i <= n; i++) {
        expectedXor ^= i;
    }

    int actualXor = 0;
    for (int num : nums) {
        actualXor ^= num;
    }

    return expectedXor ^ actualXor;
}
```

#### Find duplicate number
```java
int findDuplicate(int[] nums) {
    int slow = nums[0];
    int fast = nums[0];

    // Find meeting point
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow != fast);

    // Find start of cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
}
```

### 7. Gray Code

#### Generate Gray code sequence
```java
List<Integer> grayCode(int n) {
    List<Integer> result = new ArrayList<>();
    int total = 1 << n;

    for (int i = 0; i < total; i++) {
        result.add(i ^ (i >> 1));
    }

    return result;
}
```

#### Convert binary to Gray code
```java
int binaryToGray(int n) {
    return n ^ (n >> 1);
}
```

#### Convert Gray code to binary
```java
int grayToBinary(int gray) {
    int binary = gray;
    while (gray > 0) {
        gray >>= 1;
        binary ^= gray;
    }
    return binary;
}
```

### 8. Interview Tips

#### Problem-Solving Approach
1. **Identify bit manipulation**: XOR, AND, OR operations needed?
2. **Choose right approach**: Math vs bit manipulation
3. **Handle edge cases**: Negative numbers, overflow, zero
4. **Consider constraints**: Time limits, space constraints
5. **Test thoroughly**: Various inputs including edge cases

#### Common Patterns
- **Single number problems**: Use XOR
- **Counting problems**: Brian Kernighan's algorithm
- **Range problems**: Find common prefix
- **Subset problems**: Bit masks
- **Math problems**: Bit operations for efficiency

#### Performance Considerations
- **Time complexity**: O(1) for most operations
- **Space complexity**: O(1) auxiliary space usually
- **Cache efficiency**: Bit operations are fast
- **Integer overflow**: Use long for intermediate results

#### Debugging Tips
- **Print binary representation**: `Integer.toBinaryString(n)`
- **Check bit positions**: Use masks and shifts
- **Verify edge cases**: 0, 1, negative numbers, MAX_INT
- **Use assertions**: Verify bit operation results

Remember: Bit manipulation problems often have elegant solutions using XOR, AND, and bit tricks. Master the basic operations and common patterns for efficient problem-solving!