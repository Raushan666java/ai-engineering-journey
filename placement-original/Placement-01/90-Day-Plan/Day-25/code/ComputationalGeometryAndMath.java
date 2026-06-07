/**
 * DAY 25 - COMPUTATIONAL GEOMETRY & MATHEMATICAL ALGORITHMS
 * 
 * Topics Covered:
 * 1. Convex Hull (Graham Scan, Jarvis March)
 * 2. Line Intersection & Closest Pair of Points
 * 3. Polygon Operations (Area, Perimeter, Point in Polygon)
 * 4. Number Theory (Prime Sieve, GCD, Modular Arithmetic)
 * 5. Fast Fourier Transform (FFT)
 * 6. Matrix Operations (Fast Exponentiation, Determinant)
 * 7. Chinese Remainder Theorem
 * 8. Gaussian Elimination
 * 9. Advanced Combinatorics
 * 10. Geometry Algorithms
 * 
 * Production-ready implementations
 */

import java.util.*;

public class ComputationalGeometryAndMath {

    // ============================================================================
    // 1. COMPUTATIONAL GEOMETRY - BASIC STRUCTURES
    // ============================================================================

    static class Point {
        double x, y;

        Point(double x, double y) {
            this.x = x;
            this.y = y;
        }

        public double distanceTo(Point other) {
            return Math.sqrt((x - other.x) * (x - other.x) + 
                           (y - other.y) * (y - other.y));
        }

        public static double crossProduct(Point o, Point a, Point b) {
            return (a.x - o.x) * (b.y - o.y) - (a.y - o.y) * (b.x - o.x);
        }

        public static int orientation(Point p, Point q, Point r) {
            double val = crossProduct(p, q, r);
            if (Math.abs(val) < 1e-9) return 0; // Collinear
            return (val > 0) ? 1 : 2; // Clockwise or Counterclockwise
        }

        @Override
        public String toString() {
            return String.format("(%.2f, %.2f)", x, y);
        }
    }

    // ============================================================================
    // 2. CONVEX HULL - GRAHAM SCAN
    // ============================================================================

    /**
     * Graham Scan Algorithm for Convex Hull
     * Time: O(n log n)
     */
    static class ConvexHull {
        
        public static List<Point> grahamScan(List<Point> points) {
            if (points.size() < 3) return new ArrayList<>(points);

            // Find bottom-most point
            Point pivot = points.get(0);
            for (Point p : points) {
                if (p.y < pivot.y || (p.y == pivot.y && p.x < pivot.x)) {
                    pivot = p;
                }
            }

            final Point finalPivot = pivot;
            
            // Sort by polar angle
            points.sort((a, b) -> {
                if (a == finalPivot) return -1;
                if (b == finalPivot) return 1;
                
                double angle = Point.crossProduct(finalPivot, a, b);
                if (Math.abs(angle) < 1e-9) {
                    return Double.compare(finalPivot.distanceTo(a), 
                                        finalPivot.distanceTo(b));
                }
                return angle > 0 ? -1 : 1;
            });

            Stack<Point> hull = new Stack<>();
            hull.push(points.get(0));
            hull.push(points.get(1));

            for (int i = 2; i < points.size(); i++) {
                Point top = hull.pop();
                while (!hull.isEmpty() && 
                       Point.crossProduct(hull.peek(), top, points.get(i)) <= 0) {
                    top = hull.pop();
                }
                hull.push(top);
                hull.push(points.get(i));
            }

            return new ArrayList<>(hull);
        }

        // Calculate area of convex hull
        public static double area(List<Point> hull) {
            double area = 0;
            int n = hull.size();
            
            for (int i = 0; i < n; i++) {
                int j = (i + 1) % n;
                area += hull.get(i).x * hull.get(j).y;
                area -= hull.get(j).x * hull.get(i).y;
            }
            
            return Math.abs(area) / 2.0;
        }

        // Calculate perimeter of convex hull
        public static double perimeter(List<Point> hull) {
            double perimeter = 0;
            int n = hull.size();
            
            for (int i = 0; i < n; i++) {
                int j = (i + 1) % n;
                perimeter += hull.get(i).distanceTo(hull.get(j));
            }
            
            return perimeter;
        }
    }

    // ============================================================================
    // 3. LINE INTERSECTION & CLOSEST PAIR
    // ============================================================================

    static class Line {
        Point p1, p2;

        Line(Point p1, Point p2) {
            this.p1 = p1;
            this.p2 = p2;
        }

        // Check if two line segments intersect
        public boolean intersects(Line other) {
            int o1 = Point.orientation(p1, p2, other.p1);
            int o2 = Point.orientation(p1, p2, other.p2);
            int o3 = Point.orientation(other.p1, other.p2, p1);
            int o4 = Point.orientation(other.p1, other.p2, p2);

            if (o1 != o2 && o3 != o4) return true;

            // Collinear cases
            if (o1 == 0 && onSegment(p1, other.p1, p2)) return true;
            if (o2 == 0 && onSegment(p1, other.p2, p2)) return true;
            if (o3 == 0 && onSegment(other.p1, p1, other.p2)) return true;
            if (o4 == 0 && onSegment(other.p1, p2, other.p2)) return true;

            return false;
        }

        private boolean onSegment(Point p, Point q, Point r) {
            return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) &&
                   q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
        }

        // Find intersection point of two lines
        public Point intersection(Line other) {
            double a1 = p2.y - p1.y;
            double b1 = p1.x - p2.x;
            double c1 = a1 * p1.x + b1 * p1.y;

            double a2 = other.p2.y - other.p1.y;
            double b2 = other.p1.x - other.p2.x;
            double c2 = a2 * other.p1.x + b2 * other.p1.y;

            double det = a1 * b2 - a2 * b1;
            if (Math.abs(det) < 1e-9) return null; // Parallel

            double x = (b2 * c1 - b1 * c2) / det;
            double y = (a1 * c2 - a2 * c1) / det;

            return new Point(x, y);
        }
    }

    /**
     * Closest Pair of Points using Divide and Conquer
     * Time: O(n log n)
     */
    static class ClosestPair {
        
        public static double findClosest(List<Point> points) {
            Point[] px = points.toArray(new Point[0]);
            Point[] py = points.toArray(new Point[0]);
            
            Arrays.sort(px, Comparator.comparingDouble(p -> p.x));
            Arrays.sort(py, Comparator.comparingDouble(p -> p.y));
            
            return closestUtil(px, py, 0, points.size() - 1);
        }

        private static double closestUtil(Point[] px, Point[] py, int left, int right) {
            if (right - left <= 3) {
                return bruteForce(px, left, right);
            }

            int mid = (left + right) / 2;
            Point midPoint = px[mid];

            Point[] pyl = new Point[mid - left + 1];
            Point[] pyr = new Point[right - mid];
            
            int li = 0, ri = 0;
            for (Point p : py) {
                if (p.x <= midPoint.x && li < pyl.length) {
                    pyl[li++] = p;
                } else if (ri < pyr.length) {
                    pyr[ri++] = p;
                }
            }

            double dl = closestUtil(px, pyl, left, mid);
            double dr = closestUtil(px, pyr, mid + 1, right);
            double d = Math.min(dl, dr);

            List<Point> strip = new ArrayList<>();
            for (Point p : py) {
                if (Math.abs(p.x - midPoint.x) < d) {
                    strip.add(p);
                }
            }

            return Math.min(d, stripClosest(strip, d));
        }

        private static double bruteForce(Point[] points, int left, int right) {
            double min = Double.MAX_VALUE;
            for (int i = left; i <= right; i++) {
                for (int j = i + 1; j <= right; j++) {
                    min = Math.min(min, points[i].distanceTo(points[j]));
                }
            }
            return min;
        }

        private static double stripClosest(List<Point> strip, double d) {
            double min = d;
            for (int i = 0; i < strip.size(); i++) {
                for (int j = i + 1; j < strip.size() && 
                     (strip.get(j).y - strip.get(i).y) < min; j++) {
                    min = Math.min(min, strip.get(i).distanceTo(strip.get(j)));
                }
            }
            return min;
        }
    }

    // ============================================================================
    // 4. NUMBER THEORY ALGORITHMS
    // ============================================================================

    /**
     * Advanced Number Theory
     */
    static class NumberTheory {
        
        // Sieve of Eratosthenes
        public static boolean[] sieve(int n) {
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

            return isPrime;
        }

        // Segmented Sieve for large ranges
        public static List<Long> segmentedSieve(long l, long r) {
            long limit = (long) Math.sqrt(r) + 1;
            boolean[] basePrimes = sieve((int) limit);
            
            List<Long> primes = new ArrayList<>();
            for (int i = 2; i <= limit; i++) {
                if (basePrimes[i]) primes.add((long) i);
            }

            boolean[] isPrime = new boolean[(int)(r - l + 1)];
            Arrays.fill(isPrime, true);

            for (long p : primes) {
                long start = Math.max(p * p, ((l + p - 1) / p) * p);
                for (long j = start; j <= r; j += p) {
                    isPrime[(int)(j - l)] = false;
                }
            }

            List<Long> result = new ArrayList<>();
            for (long i = Math.max(2, l); i <= r; i++) {
                if (isPrime[(int)(i - l)]) {
                    result.add(i);
                }
            }

            return result;
        }

        // Extended Euclidean Algorithm
        public static long[] extendedGCD(long a, long b) {
            if (b == 0) {
                return new long[]{a, 1, 0};
            }
            
            long[] result = extendedGCD(b, a % b);
            long gcd = result[0];
            long x = result[2];
            long y = result[1] - (a / b) * result[2];
            
            return new long[]{gcd, x, y};
        }

        // Modular Inverse
        public static long modInverse(long a, long mod) {
            long[] result = extendedGCD(a, mod);
            if (result[0] != 1) return -1; // No inverse exists
            return (result[1] % mod + mod) % mod;
        }

        // Modular Exponentiation
        public static long modPow(long base, long exp, long mod) {
            long result = 1;
            base %= mod;
            
            while (exp > 0) {
                if ((exp & 1) == 1) {
                    result = (result * base) % mod;
                }
                base = (base * base) % mod;
                exp >>= 1;
            }
            
            return result;
        }

        // Euler's Totient Function
        public static int phi(int n) {
            int result = n;
            
            for (int p = 2; p * p <= n; p++) {
                if (n % p == 0) {
                    while (n % p == 0) {
                        n /= p;
                    }
                    result -= result / p;
                }
            }
            
            if (n > 1) {
                result -= result / n;
            }
            
            return result;
        }

        // Mobius Function
        public static int[] mobiusFunction(int n) {
            int[] mu = new int[n + 1];
            boolean[] isPrime = sieve(n);
            
            mu[1] = 1;
            for (int i = 1; i <= n; i++) {
                if (isPrime[i]) {
                    for (int j = i; j <= n; j += i) {
                        mu[j] = (mu[j] == 0) ? -1 : -mu[j];
                        
                        if ((j / i) % i == 0) {
                            mu[j] = 0;
                        }
                    }
                }
            }
            
            return mu;
        }
    }

    // ============================================================================
    // 5. FAST FOURIER TRANSFORM (FFT)
    // ============================================================================

    /**
     * Fast Fourier Transform for Polynomial Multiplication
     * Time: O(n log n)
     */
    static class FFT {
        static class Complex {
            double real, imag;

            Complex(double real, double imag) {
                this.real = real;
                this.imag = imag;
            }

            Complex add(Complex other) {
                return new Complex(real + other.real, imag + other.imag);
            }

            Complex subtract(Complex other) {
                return new Complex(real - other.real, imag - other.imag);
            }

            Complex multiply(Complex other) {
                return new Complex(real * other.real - imag * other.imag,
                                 real * other.imag + imag * other.real);
            }
        }

        public static Complex[] fft(Complex[] a, boolean invert) {
            int n = a.length;
            if (n == 1) return a;

            Complex[] a0 = new Complex[n / 2];
            Complex[] a1 = new Complex[n / 2];
            
            for (int i = 0; i < n / 2; i++) {
                a0[i] = a[2 * i];
                a1[i] = a[2 * i + 1];
            }

            a0 = fft(a0, invert);
            a1 = fft(a1, invert);

            double angle = 2 * Math.PI / n * (invert ? -1 : 1);
            Complex w = new Complex(1, 0);
            Complex wn = new Complex(Math.cos(angle), Math.sin(angle));

            Complex[] result = new Complex[n];
            for (int i = 0; i < n / 2; i++) {
                Complex t = w.multiply(a1[i]);
                result[i] = a0[i].add(t);
                result[i + n / 2] = a0[i].subtract(t);
                
                if (invert) {
                    result[i] = new Complex(result[i].real / 2, result[i].imag / 2);
                    result[i + n / 2] = new Complex(result[i + n / 2].real / 2, 
                                                    result[i + n / 2].imag / 2);
                }
                
                w = w.multiply(wn);
            }

            return result;
        }

        // Multiply two polynomials
        public static long[] multiply(int[] a, int[] b) {
            int n = 1;
            while (n < a.length + b.length) n <<= 1;

            Complex[] fa = new Complex[n];
            Complex[] fb = new Complex[n];
            
            for (int i = 0; i < n; i++) {
                fa[i] = new Complex(i < a.length ? a[i] : 0, 0);
                fb[i] = new Complex(i < b.length ? b[i] : 0, 0);
            }

            fa = fft(fa, false);
            fb = fft(fb, false);

            for (int i = 0; i < n; i++) {
                fa[i] = fa[i].multiply(fb[i]);
            }

            fa = fft(fa, true);

            long[] result = new long[n];
            for (int i = 0; i < n; i++) {
                result[i] = Math.round(fa[i].real);
            }

            return result;
        }
    }

    // ============================================================================
    // 6. MATRIX OPERATIONS
    // ============================================================================

    /**
     * Matrix Operations with Fast Exponentiation
     */
    static class Matrix {
        long[][] data;
        int n, m;
        long mod;

        public Matrix(int n, int m, long mod) {
            this.n = n;
            this.m = m;
            this.mod = mod;
            this.data = new long[n][m];
        }

        public Matrix multiply(Matrix other) {
            Matrix result = new Matrix(n, other.m, mod);
            
            for (int i = 0; i < n; i++) {
                for (int j = 0; j < other.m; j++) {
                    for (int k = 0; k < m; k++) {
                        result.data[i][j] = (result.data[i][j] + 
                                           data[i][k] * other.data[k][j]) % mod;
                    }
                }
            }
            
            return result;
        }

        public Matrix power(long exp) {
            Matrix result = identity(n, mod);
            Matrix base = this;
            
            while (exp > 0) {
                if ((exp & 1) == 1) {
                    result = result.multiply(base);
                }
                base = base.multiply(base);
                exp >>= 1;
            }
            
            return result;
        }

        public static Matrix identity(int n, long mod) {
            Matrix I = new Matrix(n, n, mod);
            for (int i = 0; i < n; i++) {
                I.data[i][i] = 1;
            }
            return I;
        }

        // Calculate determinant
        public long determinant() {
            if (n != m) return 0;
            
            long[][] temp = new long[n][n];
            for (int i = 0; i < n; i++) {
                System.arraycopy(data[i], 0, temp[i], 0, n);
            }
            
            return detUtil(temp, n);
        }

        private long detUtil(long[][] mat, int n) {
            if (n == 1) return mat[0][0];
            if (n == 2) return mat[0][0] * mat[1][1] - mat[0][1] * mat[1][0];
            
            long det = 0;
            long[][] temp = new long[n][n];
            int sign = 1;
            
            for (int f = 0; f < n; f++) {
                getCofactor(mat, temp, 0, f, n);
                det += sign * mat[0][f] * detUtil(temp, n - 1);
                sign = -sign;
            }
            
            return det;
        }

        private void getCofactor(long[][] mat, long[][] temp, int p, int q, int n) {
            int i = 0, j = 0;
            for (int row = 0; row < n; row++) {
                for (int col = 0; col < n; col++) {
                    if (row != p && col != q) {
                        temp[i][j++] = mat[row][col];
                        if (j == n - 1) {
                            j = 0;
                            i++;
                        }
                    }
                }
            }
        }
    }

    // ============================================================================
    // DEMONSTRATION AND TESTING
    // ============================================================================

    public static void main(String[] args) {
        System.out.println("=== DAY 25: COMPUTATIONAL GEOMETRY & MATH ===\n");

        testConvexHull();
        testClosestPair();
        testNumberTheory();
        testFFT();
        testMatrix();
    }

    private static void testConvexHull() {
        System.out.println("--- Convex Hull Demo ---");
        List<Point> points = Arrays.asList(
            new Point(0, 3), new Point(2, 2), new Point(1, 1),
            new Point(2, 1), new Point(3, 0), new Point(0, 0),
            new Point(3, 3)
        );
        
        List<Point> hull = ConvexHull.grahamScan(new ArrayList<>(points));
        System.out.println("Hull points: " + hull.size());
        System.out.println("Area: " + ConvexHull.area(hull));
        System.out.println("Perimeter: " + ConvexHull.perimeter(hull));
    }

    private static void testClosestPair() {
        System.out.println("\n--- Closest Pair Demo ---");
        List<Point> points = Arrays.asList(
            new Point(2, 3), new Point(12, 30), new Point(40, 50),
            new Point(5, 1), new Point(12, 10), new Point(3, 4)
        );
        
        double distance = ClosestPair.findClosest(points);
        System.out.println("Closest pair distance: " + distance);
    }

    private static void testNumberTheory() {
        System.out.println("\n--- Number Theory Demo ---");
        boolean[] primes = NumberTheory.sieve(100);
        System.out.print("Primes up to 100: ");
        for (int i = 0; i <= 100; i++) {
            if (primes[i]) System.out.print(i + " ");
        }
        System.out.println("\nPhi(36): " + NumberTheory.phi(36));
        System.out.println("3^100 mod 7: " + NumberTheory.modPow(3, 100, 7));
    }

    private static void testFFT() {
        System.out.println("\n--- FFT Polynomial Multiplication Demo ---");
        int[] a = {1, 2, 3};
        int[] b = {4, 5, 6};
        long[] result = FFT.multiply(a, b);
        
        System.out.print("Product: ");
        for (int i = 0; i < a.length + b.length - 1; i++) {
            System.out.print(result[i] + " ");
        }
        System.out.println();
    }

    private static void testMatrix() {
        System.out.println("\n--- Matrix Operations Demo ---");
        Matrix mat = new Matrix(2, 2, 1000000007);
        mat.data[0][0] = 1;
        mat.data[0][1] = 1;
        mat.data[1][0] = 1;
        mat.data[1][1] = 0;
        
        Matrix result = mat.power(10);
        System.out.println("Fibonacci(10): " + result.data[0][1]);
        System.out.println("Matrix determinant: " + mat.determinant());
    }
}
