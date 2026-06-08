# 🔢 Bit Manipulation - Complete Question Set (Love Babbar + Striver)
## Total: 15 Questions with Java Solutions & Theory

---

## 📋 Theory & Patterns

### Bit Manipulation Fundamentals:
1. **Bit Operations** - AND, OR, XOR, NOT, Left Shift, Right Shift
2. **Binary Representation** - How numbers are stored in binary
3. **Two's Complement** - Representation of negative numbers
4. **Bit Tricks** - Efficient operations using bit properties
5. **Applications** - Set operations, fast arithmetic, optimization

### Essential Bit Operations:
```java
public class BitOperations {
    // Basic operations
    public static void basicOperations() {
        int a = 5;  // 101 in binary
        int b = 3;  // 011 in binary
        
        System.out.println(a & b);   // AND: 001 = 1
        System.out.println(a | b);   // OR:  111 = 7
        System.out.println(a ^ b);   // XOR: 110 = 6
        System.out.println(~a);      // NOT: ...11111010 = -6
        System.out.println(a << 1);  // Left shift: 1010 = 10
        System.out.println(a >> 1);  // Right shift: 10 = 2
    }
    
    // Check if bit at position i is set
    public static boolean isBitSet(int num, int i) {
        return (num & (1 << i)) != 0;
    }
    
    // Set bit at position i
    public static int setBit(int num, int i) {
        return num | (1 << i);
    }
    
    // Clear bit at position i
    public static int clearBit(int num, int i) {
        return num & ~(1 << i);
    }
    
    // Toggle bit at position i
    public static int toggleBit(int num, int i) {
        return num ^ (1 << i);
    }
    
    // Count number of set bits
    public static int countSetBits(int num) {
        int count = 0;
        while (num != 0) {
            count++;
            num &= (num - 1); // Remove rightmost set bit
        }
        return count;
    }
    
    // Check if number is power of 2
    public static boolean isPowerOfTwo(int num) {
        return num > 0 && (num & (num - 1)) == 0;
    }
    
    // Get rightmost set bit
    public static int getRightmostSetBit(int num) {
        return num & (-num);
    }
}
```

### Important Bit Patterns:
1. **XOR Properties** - a ^ a = 0, a ^ 0 = a, XOR is commutative and associative
2. **Power of 2** - n & (n-1) == 0 for powers of 2
3. **Even/Odd** - n & 1 == 0 for even numbers
4. **Multiplication/Division by 2** - Left/right shift by 1
5. **Set Bits** - n & (n-1) removes rightmost set bit

---

## 💡 Love Babbar Bit Manipulation Questions (434-448)

### 434. Count Set Bits
**Problem**: Count number of 1s in binary representation  
**Difficulty**: Easy  
**Pattern**: Brian Kernighan's Algorithm

```java
public int hammingWeight(int n) {
    int count = 0;
    
    while (n != 0) {
        count++;
        n &= (n - 1); // Remove rightmost set bit
    }
    
    return count;
}

// Alternative approach using built-in method
public int hammingWeightBuiltIn(int n) {
    return Integer.bitCount(n);
}

// Lookup table approach
public int hammingWeightLookup(int n) {
    // Precomputed count for 0-15
    int[] bitCount = {0, 1, 1, 2, 1, 2, 2, 3, 1, 2, 2, 3, 2, 3, 3, 4};
    
    int count = 0;
    while (n != 0) {
        count += bitCount[n & 15]; // Get last 4 bits
        n >>>= 4; // Unsigned right shift by 4
    }
    
    return count;
}

// Count set bits in range [1, n]
public int countSetBitsInRange(int n) {
    int count = 0;
    
    for (int i = 1; i <= n; i++) {
        count += hammingWeight(i);
    }
    
    return count;
}

// Optimized count set bits in range using bit pattern
public int countSetBitsInRangeOptimized(int n) {
    if (n == 0) return 0;
    
    // Find the highest set bit position
    int highestBit = 0;
    int temp = n;
    while (temp > 0) {
        highestBit++;
        temp >>= 1;
    }
    
    // Calculate count using pattern
    int powerOf2 = 1 << (highestBit - 1);
    int count = (highestBit - 1) * powerOf2 / 2; // Count from pattern
    count += (n - powerOf2 + 1); // Count of highest bit
    count += countSetBitsInRangeOptimized(n - powerOf2); // Recurse
    
    return count;
}

// Count set bits for all numbers 0 to n
public int[] countBits(int n) {
    int[] dp = new int[n + 1];
    
    for (int i = 1; i <= n; i++) {
        dp[i] = dp[i >> 1] + (i & 1);
        // dp[i] = dp[i & (i - 1)] + 1; // Alternative
    }
    
    return dp;
}
```
**Time**: O(k) where k is number of set bits, **Space**: O(1)

---

### 435. Find Two Non-Repeating Elements
**Problem**: Find two numbers that appear once in array where all others appear twice  
**Difficulty**: Medium  
**Pattern**: XOR + Bit Grouping

```java
public int[] singleNumber(int[] nums) {
    // XOR all numbers - result will be a ^ b
    int xorResult = 0;
    for (int num : nums) {
        xorResult ^= num;
    }
    
    // Find rightmost set bit in xorResult
    int rightmostSetBit = xorResult & (-xorResult);
    
    int num1 = 0, num2 = 0;
    
    // Divide numbers into two groups based on rightmost set bit
    for (int num : nums) {
        if ((num & rightmostSetBit) != 0) {
            num1 ^= num;
        } else {
            num2 ^= num;
        }
    }
    
    return new int[]{num1, num2};
}

// Find three non-repeating elements (all others appear twice)
public int[] threeNonRepeating(int[] nums) {
    // This requires a different approach as XOR won't work directly
    Map<Integer, Integer> count = new HashMap<>();
    
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
    
    List<Integer> result = new ArrayList<>();
    for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
        if (entry.getValue() == 1) {
            result.add(entry.getKey());
        }
    }
    
    return result.stream().mapToInt(i -> i).toArray();
}

// Find single number when all others appear three times
public int singleNumberThrice(int[] nums) {
    int ones = 0, twos = 0;
    
    for (int num : nums) {
        ones = (ones ^ num) & ~twos;
        twos = (twos ^ num) & ~ones;
    }
    
    return ones;
}

// Find single number when all others appear k times
public int singleNumberK(int[] nums, int k) {
    int[] bitCount = new int[32];
    
    // Count bits at each position
    for (int num : nums) {
        for (int i = 0; i < 32; i++) {
            if ((num & (1 << i)) != 0) {
                bitCount[i]++;
            }
        }
    }
    
    int result = 0;
    
    // If bit count is not divisible by k, it's from the single number
    for (int i = 0; i < 32; i++) {
        if (bitCount[i] % k != 0) {
            result |= (1 << i);
        }
    }
    
    return result;
}

// Generalized approach for finding numbers appearing odd times
public List<Integer> findOddOccurring(int[] nums) {
    Map<Integer, Integer> count = new HashMap<>();
    
    for (int num : nums) {
        count.put(num, count.getOrDefault(num, 0) + 1);
    }
    
    List<Integer> result = new ArrayList<>();
    for (Map.Entry<Integer, Integer> entry : count.entrySet()) {
        if (entry.getValue() % 2 == 1) {
            result.add(entry.getKey());
        }
    }
    
    return result;
}
```
**Time**: O(n), **Space**: O(1)

---

### 436. Power of 2
**Problem**: Check if number is power of 2  
**Difficulty**: Easy  
**Pattern**: Bit Count/AND Operation

```java
public boolean isPowerOfTwo(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}

// Count method
public boolean isPowerOfTwoCount(int n) {
    return n > 0 && Integer.bitCount(n) == 1;
}

// Logarithmic method
public boolean isPowerOfTwoLog(int n) {
    if (n <= 0) return false;
    
    double logResult = Math.log(n) / Math.log(2);
    return Math.abs(logResult - Math.round(logResult)) < 1e-10;
}

// Find next power of 2
public int nextPowerOfTwo(int n) {
    if (n <= 0) return 1;
    if (isPowerOfTwo(n)) return n;
    
    n--;
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    
    return n + 1;
}

// Find previous power of 2
public int previousPowerOfTwo(int n) {
    if (n <= 1) return 1;
    
    return 1 << (31 - Integer.numberOfLeadingZeros(n - 1));
}

// Check if number is power of 4
public boolean isPowerOfFour(int n) {
    // Power of 4 is also power of 2 and has set bit at even position
    return n > 0 && (n & (n - 1)) == 0 && (n & 0x55555555) != 0;
}

// Find largest power of 2 less than or equal to n
public int largestPowerOfTwo(int n) {
    if (n < 1) return 0;
    
    n |= n >> 1;
    n |= n >> 2;
    n |= n >> 4;
    n |= n >> 8;
    n |= n >> 16;
    
    return n - (n >> 1);
}

// Count powers of 2 in range [1, n]
public int countPowersOfTwo(int n) {
    if (n <= 0) return 0;
    
    return 32 - Integer.numberOfLeadingZeros(n);
}
```
**Time**: O(1), **Space**: O(1)

---

### 437. Bit Difference
**Problem**: Count bit differences between two numbers  
**Difficulty**: Easy  
**Pattern**: XOR + Count Set Bits

```java
public int countBitDifferences(int a, int b) {
    int xor = a ^ b;
    return countSetBits(xor);
}

private int countSetBits(int n) {
    int count = 0;
    while (n != 0) {
        count++;
        n &= (n - 1);
    }
    return count;
}

// Sum of bit differences for all pairs in array
public int sumBitDifferences(int[] arr) {
    int n = arr.length;
    int totalDiff = 0;
    
    // Check each bit position
    for (int i = 0; i < 32; i++) {
        int countOnes = 0;
        
        // Count how many numbers have bit i set
        for (int num : arr) {
            if ((num & (1 << i)) != 0) {
                countOnes++;
            }
        }
        
        int countZeros = n - countOnes;
        
        // Each pair with different bits contributes 2 to total difference
        totalDiff += 2 * countOnes * countZeros;
    }
    
    return totalDiff;
}

// Minimum bit flips to convert a to b
public int minBitFlips(int a, int b) {
    return countSetBits(a ^ b);
}

// Maximum XOR of two numbers in array
public int findMaxXOR(int[] arr) {
    int maxXor = 0;
    int mask = 0;
    
    for (int i = 31; i >= 0; i--) {
        mask |= (1 << i);
        Set<Integer> prefixes = new HashSet<>();
        
        for (int num : arr) {
            prefixes.add(num & mask);
        }
        
        int candidate = maxXor | (1 << i);
        
        for (int prefix : prefixes) {
            if (prefixes.contains(candidate ^ prefix)) {
                maxXor = candidate;
                break;
            }
        }
    }
    
    return maxXor;
}

// Hamming distance between all pairs
public int totalHammingDistance(int[] nums) {
    int totalDistance = 0;
    
    for (int i = 0; i < 32; i++) {
        int onesCount = 0;
        
        for (int num : nums) {
            onesCount += (num >> i) & 1;
        }
        
        totalDistance += onesCount * (nums.length - onesCount);
    }
    
    return totalDistance;
}
```
**Time**: O(n × 32), **Space**: O(1)

---

### 438. Swap Bits
**Problem**: Swap bits at given positions  
**Difficulty**: Medium  
**Pattern**: Bit Manipulation + Conditional Swap

```java
public int swapBits(int num, int i, int j) {
    // Check if bits at positions i and j are different
    if (((num >> i) & 1) != ((num >> j) & 1)) {
        // Toggle both bits
        num ^= (1 << i) | (1 << j);
    }
    
    return num;
}

// Swap odd and even bits
public int swapOddEvenBits(int num) {
    // Mask for even bits: 0x55555555 = ...01010101
    // Mask for odd bits: 0xAAAAAAAA = ...10101010
    
    int evenBits = num & 0x55555555; // Extract even bits
    int oddBits = num & 0xAAAAAAAA;  // Extract odd bits
    
    return (evenBits << 1) | (oddBits >> 1); // Swap and combine
}

// Reverse bits in integer
public int reverseBits(int n) {
    int result = 0;
    
    for (int i = 0; i < 32; i++) {
        result = (result << 1) | (n & 1);
        n >>= 1;
    }
    
    return result;
}

// Optimized bit reversal using lookup table
public int reverseBitsOptimized(int n) {
    // Precomputed reverse for 8-bit numbers
    int[] reverseTable = new int[256];
    
    // Initialize lookup table (this can be precomputed)
    for (int i = 0; i < 256; i++) {
        int reverse = 0;
        int temp = i;
        for (int j = 0; j < 8; j++) {
            reverse = (reverse << 1) | (temp & 1);
            temp >>= 1;
        }
        reverseTable[i] = reverse;
    }
    
    // Reverse using lookup table
    return (reverseTable[n & 0xFF] << 24) |
           (reverseTable[(n >> 8) & 0xFF] << 16) |
           (reverseTable[(n >> 16) & 0xFF] << 8) |
           (reverseTable[(n >> 24) & 0xFF]);
}

// Swap nibbles (4-bit groups)
public int swapNibbles(int num) {
    return ((num & 0x0F) << 4) | ((num & 0xF0) >> 4);
}

// Rotate bits left
public int rotateLeft(int num, int k) {
    k = k % 32; // Handle rotation > 32
    return (num << k) | (num >>> (32 - k));
}

// Rotate bits right
public int rotateRight(int num, int k) {
    k = k % 32;
    return (num >>> k) | (num << (32 - k));
}
```
**Time**: O(1), **Space**: O(1)

---

## 🚀 Striver Bit Manipulation Questions

### S1. XOR Queries of Subarray
**Problem**: Answer XOR queries on subarray ranges  
**Difficulty**: Medium  
**Pattern**: Prefix XOR

```java
public int[] xorQueries(int[] arr, int[][] queries) {
    int n = arr.length;
    int[] prefixXor = new int[n + 1];
    
    // Build prefix XOR array
    for (int i = 0; i < n; i++) {
        prefixXor[i + 1] = prefixXor[i] ^ arr[i];
    }
    
    int[] result = new int[queries.length];
    
    for (int i = 0; i < queries.length; i++) {
        int left = queries[i][0];
        int right = queries[i][1];
        
        // XOR of range [left, right] = prefixXor[right+1] ^ prefixXor[left]
        result[i] = prefixXor[right + 1] ^ prefixXor[left];
    }
    
    return result;
}

// XOR of all subarrays
public int xorOfAllSubarrays(int[] arr) {
    int n = arr.length;
    int totalXor = 0;
    
    for (int i = 0; i < n; i++) {
        // Element at index i appears in (i+1) * (n-i) subarrays
        int frequency = (i + 1) * (n - i);
        
        // If frequency is odd, include element in result
        if (frequency % 2 == 1) {
            totalXor ^= arr[i];
        }
    }
    
    return totalXor;
}

// Maximum XOR for any path in binary tree
class TreeNode {
    int val;
    TreeNode left, right;
    TreeNode(int val) { this.val = val; }
}

public int maxPathXOR(TreeNode root) {
    if (root == null) return 0;
    
    List<Integer> allPaths = new ArrayList<>();
    findAllPaths(root, 0, allPaths);
    
    return allPaths.stream().mapToInt(Integer::intValue).max().orElse(0);
}

private void findAllPaths(TreeNode node, int currentXor, List<Integer> paths) {
    if (node == null) return;
    
    currentXor ^= node.val;
    
    if (node.left == null && node.right == null) {
        paths.add(currentXor);
        return;
    }
    
    findAllPaths(node.left, currentXor, paths);
    findAllPaths(node.right, currentXor, paths);
}

// Count triplets with XOR equal to zero
public int countTripletsXorZero(int[] arr) {
    int n = arr.length;
    int count = 0;
    
    for (int i = 0; i < n - 2; i++) {
        for (int j = i + 1; j < n - 1; j++) {
            for (int k = j + 1; k < n; k++) {
                if ((arr[i] ^ arr[j] ^ arr[k]) == 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
}
```
**Time**: O(n) for queries, **Space**: O(n)

---

### S2. Subsets using Bit Manipulation
**Problem**: Generate all subsets using bit manipulation  
**Difficulty**: Medium  
**Pattern**: Bitmask Enumeration

```java
public List<List<Integer>> subsets(int[] nums) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    
    // Generate all possible bitmasks (2^n possibilities)
    for (int mask = 0; mask < (1 << n); mask++) {
        List<Integer> subset = new ArrayList<>();
        
        for (int i = 0; i < n; i++) {
            // Check if i-th bit is set in mask
            if ((mask & (1 << i)) != 0) {
                subset.add(nums[i]);
            }
        }
        
        result.add(subset);
    }
    
    return result;
}

// Subsets with given XOR
public List<List<Integer>> subsetsWithXor(int[] nums, int targetXor) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    
    for (int mask = 0; mask < (1 << n); mask++) {
        List<Integer> subset = new ArrayList<>();
        int currentXor = 0;
        
        for (int i = 0; i < n; i++) {
            if ((mask & (1 << i)) != 0) {
                subset.add(nums[i]);
                currentXor ^= nums[i];
            }
        }
        
        if (currentXor == targetXor) {
            result.add(subset);
        }
    }
    
    return result;
}

// Count subsets with even XOR
public int countSubsetsWithEvenXor(int[] nums) {
    int n = nums.length;
    int evenCount = 0;
    
    for (int mask = 0; mask < (1 << n); mask++) {
        int xor = 0;
        
        for (int i = 0; i < n; i++) {
            if ((mask & (1 << i)) != 0) {
                xor ^= nums[i];
            }
        }
        
        if (xor % 2 == 0) {
            evenCount++;
        }
    }
    
    return evenCount;
}

// Maximum subset XOR
public int maxSubsetXor(int[] nums) {
    int maxXor = 0;
    int n = nums.length;
    
    for (int mask = 1; mask < (1 << n); mask++) {
        int currentXor = 0;
        
        for (int i = 0; i < n; i++) {
            if ((mask & (1 << i)) != 0) {
                currentXor ^= nums[i];
            }
        }
        
        maxXor = Math.max(maxXor, currentXor);
    }
    
    return maxXor;
}

// Generate k-size subsets using bit manipulation
public List<List<Integer>> kSizeSubsets(int[] nums, int k) {
    List<List<Integer>> result = new ArrayList<>();
    int n = nums.length;
    
    for (int mask = 0; mask < (1 << n); mask++) {
        if (Integer.bitCount(mask) == k) {
            List<Integer> subset = new ArrayList<>();
            
            for (int i = 0; i < n; i++) {
                if ((mask & (1 << i)) != 0) {
                    subset.add(nums[i]);
                }
            }
            
            result.add(subset);
        }
    }
    
    return result;
}
```
**Time**: O(n × 2ⁿ), **Space**: O(2ⁿ)

---

### S3. Divide Two Integers
**Problem**: Divide without using multiplication, division, or mod  
**Difficulty**: Medium  
**Pattern**: Bit Shifting for Fast Division

```java
public int divide(int dividend, int divisor) {
    // Handle overflow cases
    if (dividend == Integer.MIN_VALUE && divisor == -1) {
        return Integer.MAX_VALUE;
    }
    
    // Determine sign of result
    boolean negative = (dividend < 0) ^ (divisor < 0);
    
    // Work with positive numbers
    long absDividend = Math.abs((long) dividend);
    long absDivisor = Math.abs((long) divisor);
    
    long result = 0;
    
    while (absDividend >= absDivisor) {
        long temp = absDivisor;
        long multiple = 1;
        
        // Find largest multiple of divisor that fits in dividend
        while (absDividend >= (temp << 1)) {
            temp <<= 1;
            multiple <<= 1;
        }
        
        absDividend -= temp;
        result += multiple;
    }
    
    return negative ? (int) -result : (int) result;
}

// Fast multiplication using bit shifting
public long multiply(long a, long b) {
    if (a == 0 || b == 0) return 0;
    
    boolean negative = (a < 0) ^ (b < 0);
    a = Math.abs(a);
    b = Math.abs(b);
    
    long result = 0;
    
    while (b > 0) {
        if ((b & 1) == 1) {
            result += a;
        }
        a <<= 1;
        b >>= 1;
    }
    
    return negative ? -result : result;
}

// Integer square root using binary search
public int mySqrt(int x) {
    if (x < 2) return x;
    
    long left = 1, right = x / 2;
    
    while (left <= right) {
        long mid = left + (right - left) / 2;
        long square = mid * mid;
        
        if (square == x) {
            return (int) mid;
        } else if (square < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return (int) right;
}

// Power function using bit manipulation
public double myPow(double x, int n) {
    if (n == 0) return 1.0;
    
    long absN = Math.abs((long) n);
    double result = 1.0;
    
    while (absN > 0) {
        if ((absN & 1) == 1) {
            result *= x;
        }
        x *= x;
        absN >>= 1;
    }
    
    return n < 0 ? 1.0 / result : result;
}

// GCD using bit manipulation
public int gcdBitwise(int a, int b) {
    if (a == 0) return b;
    if (b == 0) return a;
    
    // Find common factors of 2
    int shift = 0;
    while (((a | b) & 1) == 0) {
        a >>= 1;
        b >>= 1;
        shift++;
    }
    
    // Remove factors of 2 from a
    while ((a & 1) == 0) {
        a >>= 1;
    }
    
    while (b != 0) {
        // Remove factors of 2 from b
        while ((b & 1) == 0) {
            b >>= 1;
        }
        
        // Ensure a <= b
        if (a > b) {
            int temp = a;
            a = b;
            b = temp;
        }
        
        b = b - a;
    }
    
    return a << shift;
}
```
**Time**: O(log n), **Space**: O(1)

---

## 📈 Summary

### Key Bit Manipulation Patterns Mastered:
1. **Set/Clear/Toggle Bits** - Basic bit operations for specific positions
2. **Count Set Bits** - Brian Kernighan's algorithm and lookup tables
3. **XOR Properties** - Finding unique elements and solving array problems
4. **Power of 2 Detection** - Using n & (n-1) == 0 property
5. **Bit Masks** - Generating subsets and representing sets
6. **Fast Arithmetic** - Division and multiplication using bit shifts

### Important Algorithms:
- **Brian Kernighan's Algorithm** - Efficient set bit counting
- **XOR for Duplicates** - Finding unique elements in arrays
- **Bit Masking** - Subset generation and dynamic programming
- **Fast Division** - Using bit shifts for optimization
- **Bit Reversal** - Various techniques for reversing bit patterns

### Essential Bit Tricks:
- **n & (n-1)** - Removes rightmost set bit
- **n & (-n)** - Isolates rightmost set bit
- **n ^ n** - Always equals 0
- **n | 0** - Always equals n
- **n << k** - Multiplies by 2^k
- **n >> k** - Divides by 2^k (for positive numbers)

### Common Applications:
- **Set Operations** - Union, intersection using bit masks
- **Fast Arithmetic** - Multiplication, division, power
- **Space Optimization** - Representing boolean arrays
- **Subset Problems** - Dynamic programming with bitmasks
- **Cryptography** - XOR operations for encryption

### Performance Benefits:
- **Speed** - Bit operations are fastest CPU operations
- **Space** - Compact representation of information
- **Elegance** - Often shorter and more elegant solutions
- **Hardware** - Direct mapping to processor instructions

### Problem-Solving Strategy:
1. **Identify Pattern** - Look for powers of 2, XOR properties, bit positions
2. **Choose Technique** - Bit manipulation vs traditional approach
3. **Handle Edge Cases** - Negative numbers, overflow, zero
4. **Optimize** - Use bit tricks for common operations
5. **Test Thoroughly** - Bit operations can be error-prone

### Next Steps:
- Practice more complex bit manipulation problems
- Learn bitwise DP (like subset sum with bitmasks)
- Study bit manipulation in competitive programming
- Move to Tries and remaining specialized topics

---
*This completes the comprehensive bit manipulation section with detailed Java solutions and optimization techniques.*
