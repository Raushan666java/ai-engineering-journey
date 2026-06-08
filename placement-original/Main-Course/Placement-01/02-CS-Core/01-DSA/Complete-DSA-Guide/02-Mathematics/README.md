# Mathematics for DSA

## Table of Contents
- [Introduction](#introduction)
- [1. Number Theory](#1-number-theory)
- [2. Combinatorics](#2-combinatorics)
- [3. Probability](#3-probability)
- [4. Logarithms and Exponents](#4-logarithms-and-exponents)
- [5. Modular Arithmetic](#5-modular-arithmetic)
- [6. Practice Problems](#6-practice-problems)
- [7. Resources](#7-resources)

## Introduction

Mathematical concepts form the foundation of many algorithms and data structures. Understanding these concepts not only helps in solving complex problems but also improves algorithm design and analysis skills. This section covers essential mathematical concepts required for DSA.

## 1. Number Theory

### 1.1 Prime Numbers
- **Definition**: A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.
- **Primality Test**: Determining if a number n is prime
  ```cpp
  bool isPrime(int n) {
      if (n <= 1) return false;
      if (n <= 3) return true;
      if (n % 2 == 0 || n % 3 == 0) return false;
      
      for (int i = 5; i * i <= n; i += 6) {
          if (n % i == 0 || n % (i + 2) == 0)
              return false;
      }
      return true;
  }
  ```

### 1.2 GCD and LCM
- **Greatest Common Divisor (GCD)**: Largest positive integer that divides each of the given integers without a remainder.
- **Least Common Multiple (LCM)**: Smallest positive integer that is divisible by each of the given integers.

#### Euclidean Algorithm for GCD
```cpp
int gcd(int a, int b) {
    if (b == 0)
        return a;
    return gcd(b, a % b);
}
```

#### LCM using GCD
```cpp
int lcm(int a, int b) {
    return (a * b) / gcd(a, b);
}
```

### 1.3 Sieve of Eratosthenes
- Algorithm to find all prime numbers up to a given limit
```cpp
vector<bool> sieve(int n) {
    vector<bool> isPrime(n+1, true);
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i)
                isPrime[j] = false;
        }
    }
    return isPrime;
}
```

### 1.4 Extended Euclidean Algorithm
- Finds integers x and y such that ax + by = gcd(a, b)
```cpp
pair<int, int> extendedGCD(int a, int b) {
    if (b == 0)
        return {1, 0};
        
    auto [x1, y1] = extendedGCD(b, a % b);
    int x = y1;
    int y = x1 - (a / b) * y1;
    
    return {x, y};
}
```

## 2. Combinatorics

### 2.1 Permutations
- **Definition**: Arrangement of r objects from a set of n objects where order matters.
- **Formula**: P(n, r) = n! / (n - r)!
- **Implementation**:
  ```cpp
  // Calculating nPr
  int permutation(int n, int r) {
      if (r > n) return 0;
      int result = 1;
      for (int i = n; i > n - r; i--) {
          result *= i;
      }
      return result;
  }
  ```

### 2.2 Combinations
- **Definition**: Selection of r objects from a set of n objects where order doesn't matter.
- **Formula**: C(n, r) = n! / (r! * (n - r)!)
- **Implementation**:
  ```cpp
  // Calculating nCr
  int combination(int n, int r) {
      if (r > n) return 0;
      if (r > n - r) r = n - r; // Optimization
      
      int result = 1;
      for (int i = 1; i <= r; i++) {
          result *= (n - r + i);
          result /= i;
      }
      return result;
  }
  ```

### 2.3 Pascal's Triangle
- Useful for calculating combinations efficiently
```cpp
vector<vector<int>> pascalTriangle(int n) {
    vector<vector<int>> result(n);
    
    for (int i = 0; i < n; i++) {
        result[i].resize(i + 1);
        result[i][0] = result[i][i] = 1;
        
        for (int j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    return result;
}
```

## 3. Probability

### 3.1 Basic Probability
- **Definition**: Probability of an event = (Number of favorable outcomes) / (Total number of possible outcomes)

### 3.2 Applications in Algorithms
- **Randomized Algorithms**: QuickSort with random pivot, Randomized Selection
- **Monte Carlo Methods**: Approximation algorithms
- **Example**: Randomized Quick Sort
  ```cpp
  int partition(vector<int>& arr, int low, int high) {
      // Random pivot selection
      int randomIndex = low + rand() % (high - low + 1);
      swap(arr[randomIndex], arr[high]);
      
      int pivot = arr[high];
      int i = low - 1;
      
      for (int j = low; j < high; j++) {
          if (arr[j] <= pivot) {
              i++;
              swap(arr[i], arr[j]);
          }
      }
      swap(arr[i + 1], arr[high]);
      return i + 1;
  }
  ```

## 4. Logarithms and Exponents

### 4.1 Properties of Logarithms
- log(a × b) = log(a) + log(b)
- log(a / b) = log(a) - log(b)
- log(a^b) = b × log(a)
- log_a(b) = log_c(b) / log_c(a) (Change of base formula)

### 4.2 Applications in Algorithm Analysis
- **Binary Search**: O(log n)
- **Merge Sort, Quick Sort**: O(n log n)
- **Binary Tree Operations**: O(log n) for balanced trees

### 4.3 Fast Exponentiation (Binary Exponentiation)
- Compute a^b in O(log b) time
```cpp
int power(int a, int b) {
    int result = 1;
    while (b > 0) {
        if (b & 1) result = result * a;
        a = a * a;
        b >>= 1;
    }
    return result;
}
```

## 5. Modular Arithmetic

### 5.1 Basic Operations
- Addition: (a + b) % m = ((a % m) + (b % m)) % m
- Subtraction: (a - b) % m = ((a % m) - (b % m) + m) % m
- Multiplication: (a * b) % m = ((a % m) * (b % m)) % m

### 5.2 Modular Exponentiation
```cpp
int modPower(int a, int b, int mod) {
    int result = 1;
    a = a % mod;
    while (b > 0) {
        if (b & 1) result = (1LL * result * a) % mod;
        a = (1LL * a * a) % mod;
        b >>= 1;
    }
    return result;
}
```

### 5.3 Modular Multiplicative Inverse
- When m is prime, a^(m-2) ≡ a^(-1) (mod m)
```cpp
int modInverse(int a, int m) {
    return modPower(a, m - 2, m);
}
```

## 6. Practice Problems

### 6.1 GCD and LCM Problems
1. [LeetCode 1979: Find Greatest Common Divisor of Array](https://leetcode.com/problems/find-greatest-common-divisor-of-array/)
2. [LeetCode 2413: Smallest Even Multiple](https://leetcode.com/problems/smallest-even-multiple/)
3. [GFG: LCM And GCD](https://practice.geeksforgeeks.org/problems/lcm-and-gcd4516/1)

### 6.2 Prime Numbers and Sieve
1. [LeetCode 204: Count Primes](https://leetcode.com/problems/count-primes/)
2. [SPOJ: Prime Generator](https://www.spoj.com/problems/PRIME1/)
3. [GFG: Sieve of Eratosthenes](https://practice.geeksforgeeks.org/problems/sieve-of-eratosthenes5242/1)

### 6.3 Combinatorics Problems
1. [LeetCode 62: Unique Paths](https://leetcode.com/problems/unique-paths/)
2. [LeetCode 118: Pascal's Triangle](https://leetcode.com/problems/pascals-triangle/)
3. [GFG: nCr](https://practice.geeksforgeeks.org/problems/ncr1019/1)

### 6.4 Modular Arithmetic Problems
1. [LeetCode 50: Pow(x, n)](https://leetcode.com/problems/powx-n/)
2. [LeetCode 372: Super Pow](https://leetcode.com/problems/super-pow/)
3. [GFG: Modular Multiplicative Inverse](https://practice.geeksforgeeks.org/problems/modular-multiplicative-inverse-1587115620/1)

## 7. Resources

### 7.1 Books
- "Concrete Mathematics" by Graham, Knuth, and Patashnik
- "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (Chapter on Number Theory)

### 7.2 Online Resources
- [Khan Academy: Number Theory](https://www.khanacademy.org/math/number-theory)
- [GeeksforGeeks: Mathematics for DSA](https://www.geeksforgeeks.org/mathematical-algorithms/)
- [Competitive Programmer's Handbook by Antti Laaksonen](https://cses.fi/book/book.pdf) (Chapter on Mathematics)

### 7.3 Practice Platforms
- [LeetCode Math Problems](https://leetcode.com/tag/math/)
- [Codeforces Number Theory Contest](https://codeforces.com/blog/entry/49494)
- [Project Euler](https://projecteuler.net/) (Mathematical programming problems)

---

## Key Takeaways

1. **Number Theory**: Foundation for many algorithms, especially in cryptography and optimization problems.
2. **Combinatorics**: Essential for counting problems, dynamic programming, and probability calculations.
3. **Logarithms**: Critical for understanding complexity analysis and designing efficient algorithms.
4. **Modular Arithmetic**: Necessary for handling large numbers and solving problems with constraints.

## Love Babbar & Striver Sheet Problems (Mathematics)

### Love Babbar Sheet (Mathematics)
1. [Count trailing zeros in factorial](https://practice.geeksforgeeks.org/problems/trailing-zeroes-in-factorial5134/1)
2. [Find Last Digit of a^b](https://practice.geeksforgeeks.org/problems/find-last-digit-of-ab-for-large-numbers1936/1)
3. [Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)
4. [Power of Two](https://leetcode.com/problems/power-of-two/)
5. [Factorial of Large Numbers](https://practice.geeksforgeeks.org/problems/factorials-of-large-numbers2508/1)

### Striver SDE Sheet (Mathematics)
1. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
2. [Count Primes](https://leetcode.com/problems/count-primes/)
3. [Excel Sheet Column Number](https://leetcode.com/problems/excel-sheet-column-number/)
4. [Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)
5. [Unique Paths](https://leetcode.com/problems/unique-paths/)
