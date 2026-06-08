# Mathematical Algorithms

## Overview
Mathematical algorithms are computational procedures that solve mathematical problems. These algorithms are fundamental to many areas of computer science and are often used as building blocks for more complex algorithms.

## Number Theory Algorithms

### 1. Greatest Common Divisor (GCD)
Find the largest positive integer that divides two integers without a remainder.

#### Euclidean Algorithm
```java
public int gcd(int a, int b) {
    while (b != 0) {
        int temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
```

#### Recursive Implementation
```java
public int gcdRecursive(int a, int b) {
    if (b == 0) {
        return a;
    }
    return gcdRecursive(b, a % b);
}
```

### 2. Least Common Multiple (LCM)
Find the smallest positive integer that is divisible by both a and b.

```java
public int lcm(int a, int b) {
    return a * (b / gcd(a, b));
}
```

### 3. Prime Number Algorithms

#### Check if a number is prime
```java
public boolean isPrime(int n) {
    if (n <= 1) {
        return false;
    }
    if (n <= 3) {
        return true;
    }
    if (n % 2 == 0 || n % 3 == 0) {
        return false;
    }
    
    for (int i = 5; i * i <= n; i += 6) {
        if (n % i == 0 || n % (i + 2) == 0) {
            return false;
        }
    }
    return true;
}
```

#### Sieve of Eratosthenes (Find all primes up to n)
```java
public List<Integer> sieveOfEratosthenes(int n) {
    boolean[] isPrime = new boolean[n + 1];
    Arrays.fill(isPrime, true);
    
    isPrime[0] = isPrime[1] = false;
    
    for (int i = 2; i * i <= n; i++) {
        if (isPrime[i]) {
            for (int j = i * i; j <= n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    List<Integer> primes = new ArrayList<>();
    for (int i = 2; i <= n; i++) {
        if (isPrime[i]) {
            primes.add(i);
        }
    }
    
    return primes;
}
```

### 4. Prime Factorization
Decompose a number into its prime factors.

```java
public Map<Integer, Integer> primeFactorization(int n) {
    Map<Integer, Integer> factors = new HashMap<>();
    
    // Handle 2 separately
    while (n % 2 == 0) {
        factors.put(2, factors.getOrDefault(2, 0) + 1);
        n /= 2;
    }
    
    // Check odd factors
    for (int i = 3; i * i <= n; i += 2) {
        while (n % i == 0) {
            factors.put(i, factors.getOrDefault(i, 0) + 1);
            n /= i;
        }
    }
    
    // If n is a prime number greater than 2
    if (n > 2) {
        factors.put(n, factors.getOrDefault(n, 0) + 1);
    }
    
    return factors;
}
```

### 5. Modular Exponentiation
Calculate (x^n) % m efficiently.

```java
public long modPow(long base, long exponent, long modulus) {
    if (modulus == 1) return 0;
    
    long result = 1;
    base = base % modulus;
    
    while (exponent > 0) {
        // If exponent is odd, multiply result with base
        if ((exponent & 1) == 1) {
            result = (result * base) % modulus;
        }
        
        // Exponent must be even now
        exponent >>= 1; // Divide exponent by 2
        base = (base * base) % modulus;
    }
    
    return result;
}
```

### 6. Modular Multiplicative Inverse
Find the modular multiplicative inverse of a number.

```java
// Using Extended Euclidean Algorithm
public int modInverse(int a, int m) {
    int[] result = extendedGCD(a, m);
    int gcd = result[0];
    int x = result[1];
    
    if (gcd != 1) {
        throw new ArithmeticException("Modular inverse does not exist");
    }
    
    // Make sure x is positive
    return (x % m + m) % m;
}

// Extended Euclidean Algorithm
public int[] extendedGCD(int a, int b) {
    if (a == 0) {
        return new int[]{b, 0, 1};
    }
    
    int[] result = extendedGCD(b % a, a);
    int gcd = result[0];
    int y = result[1];
    int x = result[2] - (b / a) * result[1];
    
    return new int[]{gcd, x, y};
}
```

### 7. Chinese Remainder Theorem
Solve a system of linear congruences.

```java
public int chineseRemainderTheorem(int[] num, int[] rem) {
    int k = num.length;
    
    // Compute product of all numbers
    int prod = 1;
    for (int i = 0; i < k; i++) {
        prod *= num[i];
    }
    
    int result = 0;
    
    // Apply Chinese Remainder Theorem formula
    for (int i = 0; i < k; i++) {
        int pp = prod / num[i];
        result += rem[i] * modInverse(pp, num[i]) * pp;
    }
    
    return result % prod;
}
```

## Combinatorial Algorithms

### 1. Factorial
Calculate n! (n factorial).

```java
public long factorial(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("Factorial is not defined for negative numbers");
    }
    
    long result = 1;
    for (int i = 2; i <= n; i++) {
        result *= i;
    }
    
    return result;
}
```

### 2. Permutations
Calculate nPr (number of ways to arrange r items from n distinct items).

```java
public long permutations(int n, int r) {
    if (n < r || n < 0 || r < 0) {
        throw new IllegalArgumentException("Invalid input");
    }
    
    long result = 1;
    for (int i = n; i > n - r; i--) {
        result *= i;
    }
    
    return result;
}
```

### 3. Combinations
Calculate nCr (number of ways to choose r items from n distinct items).

```java
public long combinations(int n, int r) {
    if (n < r || n < 0 || r < 0) {
        throw new IllegalArgumentException("Invalid input");
    }
    
    // Optimize by using the smaller value of r or n-r
    r = Math.min(r, n - r);
    
    long result = 1;
    for (int i = 1; i <= r; i++) {
        result *= (n - (i - 1));
        result /= i;
    }
    
    return result;
}
```

### 4. Catalan Numbers
Calculate the nth Catalan number.

```java
public long catalanNumber(int n) {
    if (n < 0) {
        throw new IllegalArgumentException("Invalid input");
    }
    
    // Using the formula: C(n) = (2n)! / ((n+1)! * n!)
    return combinations(2 * n, n) / (n + 1);
}
```

### 5. Fibonacci Numbers
Calculate the nth Fibonacci number.

```java
// Iterative approach
public long fibonacci(int n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    
    long a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        long temp = a + b;
        a = b;
        b = temp;
    }
    
    return b;
}

// Matrix exponentiation approach (O(log n))
public long fibonacciMatrix(int n) {
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }
    
    long[][] F = {{1, 1}, {1, 0}};
    power(F, n - 1);
    
    return F[0][0];
}

private void power(long[][] F, int n) {
    if (n <= 1) {
        return;
    }
    
    long[][] M = {{1, 1}, {1, 0}};
    
    power(F, n / 2);
    multiply(F, F);
    
    if (n % 2 != 0) {
        multiply(F, M);
    }
}

private void multiply(long[][] F, long[][] M) {
    long a = F[0][0] * M[0][0] + F[0][1] * M[1][0];
    long b = F[0][0] * M[0][1] + F[0][1] * M[1][1];
    long c = F[1][0] * M[0][0] + F[1][1] * M[1][0];
    long d = F[1][0] * M[0][1] + F[1][1] * M[1][1];
    
    F[0][0] = a;
    F[0][1] = b;
    F[1][0] = c;
    F[1][1] = d;
}
```

## Numerical Algorithms

### 1. Binary Exponentiation
Calculate x^n efficiently.

```java
public long binaryExponentiation(long base, long exponent) {
    if (exponent < 0) {
        throw new IllegalArgumentException("Exponent must be non-negative");
    }
    
    long result = 1;
    while (exponent > 0) {
        if ((exponent & 1) == 1) {
            result *= base;
        }
        base *= base;
        exponent >>= 1;
    }
    
    return result;
}
```

### 2. Newton-Raphson Method
Find the root of a function using Newton's method.

```java
public double sqrt(double n, double epsilon) {
    double x = n;
    double root;
    
    while (true) {
        root = 0.5 * (x + (n / x));
        
        if (Math.abs(root - x) < epsilon) {
            break;
        }
        
        x = root;
    }
    
    return root;
}
```

### 3. Matrix Operations

#### Matrix Multiplication
```java
public int[][] multiplyMatrix(int[][] A, int[][] B) {
    int n = A.length;
    int m = A[0].length;
    int p = B[0].length;
    
    if (m != B.length) {
        throw new IllegalArgumentException("Incompatible matrix dimensions");
    }
    
    int[][] C = new int[n][p];
    
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < p; j++) {
            for (int k = 0; k < m; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    
    return C;
}
```

#### Matrix Exponentiation
```java
public int[][] matrixPower(int[][] A, int n) {
    int size = A.length;
    
    // Initialize result as identity matrix
    int[][] result = new int[size][size];
    for (int i = 0; i < size; i++) {
        result[i][i] = 1;
    }
    
    while (n > 0) {
        if ((n & 1) == 1) {
            result = multiplyMatrix(result, A);
        }
        A = multiplyMatrix(A, A);
        n >>= 1;
    }
    
    return result;
}
```

### 4. Numerical Integration

#### Trapezoidal Rule
```java
public double trapezoidalRule(Function<Double, Double> f, double a, double b, int n) {
    double h = (b - a) / n;
    double sum = 0.5 * (f.apply(a) + f.apply(b));
    
    for (int i = 1; i < n; i++) {
        double x = a + i * h;
        sum += f.apply(x);
    }
    
    return sum * h;
}
```

#### Simpson's Rule
```java
public double simpsonsRule(Function<Double, Double> f, double a, double b, int n) {
    if (n % 2 != 0) {
        n++; // Ensure n is even
    }
    
    double h = (b - a) / n;
    double sum = f.apply(a) + f.apply(b);
    
    for (int i = 1; i < n; i++) {
        double x = a + i * h;
        sum += f.apply(x) * (i % 2 == 0 ? 2 : 4);
    }
    
    return sum * h / 3;
}
```

## Geometric Algorithms

### 1. Distance Between Points
Calculate the Euclidean distance between two points.

```java
public double distance(double x1, double y1, double x2, double y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}
```

### 2. Area of a Triangle
Calculate the area of a triangle using coordinates.

```java
// Using Heron's formula
public double triangleArea(double a, double b, double c) {
    double s = (a + b + c) / 2; // Semi-perimeter
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

// Using coordinates
public double triangleAreaCoordinates(double x1, double y1, double x2, double y2, double x3, double y3) {
    return 0.5 * Math.abs((x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2)));
}
```

### 3. Check if Points are Collinear
Determine if three points lie on the same line.

```java
public boolean areCollinear(double x1, double y1, double x2, double y2, double x3, double y3) {
    // Calculate the area of the triangle formed by the three points
    double area = triangleAreaCoordinates(x1, y1, x2, y2, x3, y3);
    
    // If area is zero (or very close to zero), points are collinear
    return Math.abs(area) < 1e-10;
}
```

### 4. Convex Hull (Graham Scan)
Find the convex hull of a set of points.

```java
public class Point {
    double x, y;
    
    public Point(double x, double y) {
        this.x = x;
        this.y = y;
    }
}

public List<Point> grahamScan(List<Point> points) {
    if (points.size() <= 3) {
        return new ArrayList<>(points);
    }
    
    // Find the point with the lowest y-coordinate (and leftmost if tied)
    Point pivot = points.get(0);
    for (Point point : points) {
        if (point.y < pivot.y || (point.y == pivot.y && point.x < pivot.x)) {
            pivot = point;
        }
    }
    
    // Sort points by polar angle with respect to pivot
    final Point finalPivot = pivot;
    points.sort((p1, p2) -> {
        double angle1 = Math.atan2(p1.y - finalPivot.y, p1.x - finalPivot.x);
        double angle2 = Math.atan2(p2.y - finalPivot.y, p2.x - finalPivot.x);
        
        if (angle1 < angle2) return -1;
        if (angle1 > angle2) return 1;
        
        // If angles are the same, take the closer point
        double dist1 = distance(finalPivot.x, finalPivot.y, p1.x, p1.y);
        double dist2 = distance(finalPivot.x, finalPivot.y, p2.x, p2.y);
        return Double.compare(dist1, dist2);
    });
    
    // Build convex hull
    Stack<Point> hull = new Stack<>();
    hull.push(points.get(0)); // pivot
    hull.push(points.get(1));
    
    for (int i = 2; i < points.size(); i++) {
        Point top = hull.pop();
        
        // Remove points that make a non-left turn
        while (!hull.isEmpty() && !isLeftTurn(hull.peek(), top, points.get(i))) {
            top = hull.pop();
        }
        
        hull.push(top);
        hull.push(points.get(i));
    }
    
    return new ArrayList<>(hull);
}

private boolean isLeftTurn(Point a, Point b, Point c) {
    return (b.x - a.x) * (c.y - a.y) - (b.y - a.y) * (c.x - a.x) > 0;
}
```

## Practice Problems

1. [Count Primes](https://leetcode.com/problems/count-primes/)
2. [Pow(x, n)](https://leetcode.com/problems/powx-n/)
3. [Factorial Trailing Zeroes](https://leetcode.com/problems/factorial-trailing-zeroes/)
4. [GCD of Strings](https://leetcode.com/problems/greatest-common-divisor-of-strings/)
5. [Ugly Number](https://leetcode.com/problems/ugly-number/)
6. [Fraction to Recurring Decimal](https://leetcode.com/problems/fraction-to-recurring-decimal/)
7. [Excel Sheet Column Title](https://leetcode.com/problems/excel-sheet-column-title/)
8. [Rectangle Area](https://leetcode.com/problems/rectangle-area/)
9. [Perfect Squares](https://leetcode.com/problems/perfect-squares/)
10. [Integer to Roman](https://leetcode.com/problems/integer-to-roman/)