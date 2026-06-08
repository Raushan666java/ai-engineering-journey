/**
 * DAY 5: METHODS & RECURSION - PRACTICE PROBLEMS
 * 30 Comprehensive Problems with Complete Solutions
 * 
 * Topics Covered:
 * - Method basics (Problems 1-5)
 * - Method overloading (Problems 6-10)
 * - Basic recursion (Problems 11-15)
 * - Advanced recursion (Problems 16-20)
 * - Recursion optimization (Problems 21-25)
 * - Real-world applications (Problems 26-30)
 */

public class Day5PracticeProblems {
    
    public static void main(String[] args) {
        System.out.println("╔═══════════════════════════════════════════════════════╗");
        System.out.println("║   DAY 5: METHODS & RECURSION - 30 PRACTICE PROBLEMS   ║");
        System.out.println("╚═══════════════════════════════════════════════════════╝\n");
        
        // Run all problems
        runMethodProblems();
        runRecursionProblems();
        runAdvancedProblems();
    }
    
    static void runMethodProblems() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 1: METHOD BASICS (Problems 1-10)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 1
        System.out.println("Problem 1: Check if number is prime");
        System.out.println("isPrime(7) = " + isPrime(7));
        System.out.println("isPrime(10) = " + isPrime(10));
        
        // Problem 2
        System.out.println("\nProblem 2: Calculate factorial");
        System.out.println("factorial(5) = " + factorial(5));
        System.out.println("factorial(0) = " + factorial(0));
        
        // Problem 3
        System.out.println("\nProblem 3: Find GCD of two numbers");
        System.out.println("gcd(48, 18) = " + gcd(48, 18));
        System.out.println("gcd(100, 50) = " + gcd(100, 50));
        
        // Problem 4
        System.out.println("\nProblem 4: Check if number is Armstrong");
        System.out.println("isArmstrong(153) = " + isArmstrong(153));
        System.out.println("isArmstrong(123) = " + isArmstrong(123));
        
        // Problem 5
        System.out.println("\nProblem 5: Reverse a number");
        System.out.println("reverseNumber(12345) = " + reverseNumber(12345));
        System.out.println("reverseNumber(100) = " + reverseNumber(100));
        
        // Problem 6
        System.out.println("\nProblem 6: Method Overloading - Calculate area");
        System.out.println("Square area(5) = " + area(5));
        System.out.println("Rectangle area(5, 10) = " + area(5, 10));
        System.out.println("Circle area(7.0) = " + area(7.0));
        
        // Problem 7
        System.out.println("\nProblem 7: Method Overloading - Max of numbers");
        System.out.println("max(5, 10) = " + max(5, 10));
        System.out.println("max(5, 10, 15) = " + max(5, 10, 15));
        System.out.println("max(int[]) = " + max(new int[]{3, 7, 2, 9, 1}));
        
        // Problem 8
        System.out.println("\nProblem 8: Calculate sum with varargs");
        System.out.println("sum(1, 2, 3) = " + sum(1, 2, 3));
        System.out.println("sum(1, 2, 3, 4, 5) = " + sum(1, 2, 3, 4, 5));
        
        // Problem 9
        System.out.println("\nProblem 9: Check palindrome");
        System.out.println("isPalindrome(121) = " + isPalindrome(121));
        System.out.println("isPalindrome(123) = " + isPalindrome(123));
        
        // Problem 10
        System.out.println("\nProblem 10: Convert to binary");
        System.out.println("toBinary(10) = " + toBinary(10));
        System.out.println("toBinary(255) = " + toBinary(255));
        System.out.println();
    }
    
    static void runRecursionProblems() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 2: RECURSION BASICS (Problems 11-20)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 11
        System.out.println("Problem 11: Factorial using recursion");
        System.out.println("factorialRecursive(5) = " + factorialRecursive(5));
        System.out.println("factorialRecursive(7) = " + factorialRecursive(7));
        
        // Problem 12
        System.out.println("\nProblem 12: Fibonacci using recursion");
        System.out.println("fibonacci(6) = " + fibonacci(6));
        System.out.println("fibonacci(10) = " + fibonacci(10));
        
        // Problem 13
        System.out.println("\nProblem 13: Sum of digits using recursion");
        System.out.println("sumOfDigits(1234) = " + sumOfDigits(1234));
        System.out.println("sumOfDigits(9876) = " + sumOfDigits(9876));
        
        // Problem 14
        System.out.println("\nProblem 14: Power using recursion");
        System.out.println("power(2, 5) = " + power(2, 5));
        System.out.println("power(3, 4) = " + power(3, 4));
        
        // Problem 15
        System.out.println("\nProblem 15: Count digits using recursion");
        System.out.println("countDigits(12345) = " + countDigits(12345));
        System.out.println("countDigits(100) = " + countDigits(100));
        
        // Problem 16
        System.out.println("\nProblem 16: Reverse string using recursion");
        System.out.println("reverseString(\"hello\") = " + reverseString("hello"));
        System.out.println("reverseString(\"Java\") = " + reverseString("Java"));
        
        // Problem 17
        System.out.println("\nProblem 17: Check palindrome using recursion");
        System.out.println("isPalindromeRecursive(\"racecar\") = " + isPalindromeRecursive("racecar"));
        System.out.println("isPalindromeRecursive(\"hello\") = " + isPalindromeRecursive("hello"));
        
        // Problem 18
        System.out.println("\nProblem 18: Binary search using recursion");
        int[] arr = {1, 3, 5, 7, 9, 11, 13, 15};
        System.out.println("binarySearch([1,3,5,7,9,11,13,15], 7) = " + binarySearch(arr, 7, 0, arr.length - 1));
        System.out.println("binarySearch([1,3,5,7,9,11,13,15], 10) = " + binarySearch(arr, 10, 0, arr.length - 1));
        
        // Problem 19
        System.out.println("\nProblem 19: GCD using recursion");
        System.out.println("gcdRecursive(48, 18) = " + gcdRecursive(48, 18));
        System.out.println("gcdRecursive(100, 50) = " + gcdRecursive(100, 50));
        
        // Problem 20
        System.out.println("\nProblem 20: Array sum using recursion");
        int[] nums = {1, 2, 3, 4, 5};
        System.out.println("arraySum([1,2,3,4,5]) = " + arraySum(nums, 0));
        System.out.println("arraySum([10,20,30]) = " + arraySum(new int[]{10,20,30}, 0));
        System.out.println();
    }
    
    static void runAdvancedProblems() {
        System.out.println("=".repeat(70));
        System.out.println("SECTION 3: ADVANCED RECURSION (Problems 21-30)");
        System.out.println("=".repeat(70) + "\n");
        
        // Problem 21
        System.out.println("Problem 21: Tower of Hanoi");
        System.out.println("Moving 3 disks:");
        towerOfHanoi(3, 'A', 'C', 'B');
        
        // Problem 22
        System.out.println("\nProblem 22: Generate all subsets");
        System.out.println("Subsets of [1,2,3]:");
        generateSubsets(new int[]{1, 2, 3}, 0, "");
        
        // Problem 23
        System.out.println("\nProblem 23: Print all permutations");
        System.out.println("Permutations of 'ABC':");
        printPermutations("ABC", "");
        
        // Problem 24
        System.out.println("\nProblem 24: N-Queens count");
        System.out.println("Number of solutions for 4-Queens: " + nQueens(4));
        
        // Problem 25
        System.out.println("\nProblem 25: Fibonacci with memoization");
        System.out.println("fibonacci(40) with memo = " + fibonacciMemo(40, new long[41]));
        
        // Problem 26
        System.out.println("\nProblem 26: Josephus problem");
        System.out.println("josephus(7, 3) = " + josephus(7, 3));
        System.out.println("josephus(5, 2) = " + josephus(5, 2));
        
        // Problem 27
        System.out.println("\nProblem 27: Count paths in grid");
        System.out.println("countPaths(3, 3) = " + countPaths(3, 3));
        System.out.println("countPaths(2, 2) = " + countPaths(2, 2));
        
        // Problem 28
        System.out.println("\nProblem 28: Decimal to any base");
        System.out.println("decimalToBase(255, 16) = " + decimalToBase(255, 16));
        System.out.println("decimalToBase(10, 2) = " + decimalToBase(10, 2));
        
        // Problem 29
        System.out.println("\nProblem 29: String subsequences count");
        System.out.println("countSubsequences(\"abc\") = " + countSubsequences("abc"));
        System.out.println("countSubsequences(\"ab\") = " + countSubsequences("ab"));
        
        // Problem 30
        System.out.println("\nProblem 30: Merge sort");
        int[] unsorted = {64, 34, 25, 12, 22, 11, 90};
        System.out.print("Before sort: ");
        printArray(unsorted);
        mergeSort(unsorted, 0, unsorted.length - 1);
        System.out.print("After sort:  ");
        printArray(unsorted);
    }
    
    // ============================================
    // PROBLEM SOLUTIONS (1-10): METHOD BASICS
    // ============================================
    
    // Problem 1: Check if number is prime
    static boolean isPrime(int n) {
        if (n <= 1) return false;
        if (n <= 3) return true;
        if (n % 2 == 0 || n % 3 == 0) return false;
        
        for (int i = 5; i * i <= n; i += 6) {
            if (n % i == 0 || n % (i + 2) == 0) {
                return false;
            }
        }
        return true;
    }
    
    // Problem 2: Calculate factorial
    static long factorial(int n) {
        if (n < 0) return -1;
        if (n == 0 || n == 1) return 1;
        
        long result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
    
    // Problem 3: Find GCD
    static int gcd(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    // Problem 4: Check Armstrong number
    static boolean isArmstrong(int n) {
        int original = n;
        int digits = String.valueOf(n).length();
        int sum = 0;
        
        while (n > 0) {
            int digit = n % 10;
            sum += Math.pow(digit, digits);
            n /= 10;
        }
        
        return sum == original;
    }
    
    // Problem 5: Reverse number
    static int reverseNumber(int n) {
        int reversed = 0;
        while (n != 0) {
            reversed = reversed * 10 + n % 10;
            n /= 10;
        }
        return reversed;
    }
    
    // Problem 6: Method Overloading - Area
    static int area(int side) {
        return side * side;  // Square
    }
    
    static int area(int length, int width) {
        return length * width;  // Rectangle
    }
    
    static double area(double radius) {
        return Math.PI * radius * radius;  // Circle
    }
    
    // Problem 7: Method Overloading - Max
    static int max(int a, int b) {
        return a > b ? a : b;
    }
    
    static int max(int a, int b, int c) {
        return max(max(a, b), c);
    }
    
    static int max(int[] arr) {
        int maximum = arr[0];
        for (int num : arr) {
            if (num > maximum) maximum = num;
        }
        return maximum;
    }
    
    // Problem 8: Sum with varargs
    static int sum(int... numbers) {
        int total = 0;
        for (int num : numbers) {
            total += num;
        }
        return total;
    }
    
    // Problem 9: Check palindrome
    static boolean isPalindrome(int n) {
        return n == reverseNumber(n);
    }
    
    // Problem 10: Convert to binary
    static String toBinary(int n) {
        if (n == 0) return "0";
        
        StringBuilder binary = new StringBuilder();
        while (n > 0) {
            binary.insert(0, n % 2);
            n /= 2;
        }
        return binary.toString();
    }
    
    // ============================================
    // PROBLEM SOLUTIONS (11-20): RECURSION BASICS
    // ============================================
    
    // Problem 11: Factorial using recursion
    static long factorialRecursive(int n) {
        if (n == 0 || n == 1) return 1;
        return n * factorialRecursive(n - 1);
    }
    
    // Problem 12: Fibonacci using recursion
    static int fibonacci(int n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    // Problem 13: Sum of digits using recursion
    static int sumOfDigits(int n) {
        if (n == 0) return 0;
        return n % 10 + sumOfDigits(n / 10);
    }
    
    // Problem 14: Power using recursion
    static int power(int base, int exp) {
        if (exp == 0) return 1;
        return base * power(base, exp - 1);
    }
    
    // Problem 15: Count digits using recursion
    static int countDigits(int n) {
        if (n == 0) return 0;
        return 1 + countDigits(n / 10);
    }
    
    // Problem 16: Reverse string using recursion
    static String reverseString(String str) {
        if (str.isEmpty()) return str;
        return reverseString(str.substring(1)) + str.charAt(0);
    }
    
    // Problem 17: Check palindrome using recursion
    static boolean isPalindromeRecursive(String str) {
        if (str.length() <= 1) return true;
        if (str.charAt(0) != str.charAt(str.length() - 1)) return false;
        return isPalindromeRecursive(str.substring(1, str.length() - 1));
    }
    
    // Problem 18: Binary search using recursion
    static int binarySearch(int[] arr, int target, int left, int right) {
        if (left > right) return -1;
        
        int mid = left + (right - left) / 2;
        
        if (arr[mid] == target) return mid;
        if (arr[mid] > target) return binarySearch(arr, target, left, mid - 1);
        return binarySearch(arr, target, mid + 1, right);
    }
    
    // Problem 19: GCD using recursion
    static int gcdRecursive(int a, int b) {
        if (b == 0) return a;
        return gcdRecursive(b, a % b);
    }
    
    // Problem 20: Array sum using recursion
    static int arraySum(int[] arr, int index) {
        if (index >= arr.length) return 0;
        return arr[index] + arraySum(arr, index + 1);
    }
    
    // ============================================
    // PROBLEM SOLUTIONS (21-30): ADVANCED RECURSION
    // ============================================
    
    // Problem 21: Tower of Hanoi
    static void towerOfHanoi(int n, char from, char to, char aux) {
        if (n == 1) {
            System.out.println("Move disk 1 from " + from + " to " + to);
            return;
        }
        
        towerOfHanoi(n - 1, from, aux, to);
        System.out.println("Move disk " + n + " from " + from + " to " + to);
        towerOfHanoi(n - 1, aux, to, from);
    }
    
    // Problem 22: Generate all subsets
    static void generateSubsets(int[] arr, int index, String current) {
        if (index == arr.length) {
            System.out.println("[" + current + "]");
            return;
        }
        
        // Exclude current element
        generateSubsets(arr, index + 1, current);
        
        // Include current element
        generateSubsets(arr, index + 1, 
            current.isEmpty() ? arr[index] + "" : current + "," + arr[index]);
    }
    
    // Problem 23: Print all permutations
    static void printPermutations(String str, String prefix) {
        if (str.length() == 0) {
            System.out.println(prefix);
            return;
        }
        
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            String remaining = str.substring(0, i) + str.substring(i + 1);
            printPermutations(remaining, prefix + ch);
        }
    }
    
    // Problem 24: N-Queens count
    static int nQueens(int n) {
        return solveNQueens(new int[n], 0, n);
    }
    
    static int solveNQueens(int[] board, int row, int n) {
        if (row == n) return 1;
        
        int count = 0;
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;
                count += solveNQueens(board, row + 1, n);
            }
        }
        return count;
    }
    
    static boolean isSafe(int[] board, int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i] == col || 
                Math.abs(board[i] - col) == Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }
    
    // Problem 25: Fibonacci with memoization
    static long fibonacciMemo(int n, long[] memo) {
        if (n <= 1) return n;
        if (memo[n] != 0) return memo[n];
        
        memo[n] = fibonacciMemo(n - 1, memo) + fibonacciMemo(n - 2, memo);
        return memo[n];
    }
    
    // Problem 26: Josephus problem
    static int josephus(int n, int k) {
        if (n == 1) return 0;
        return (josephus(n - 1, k) + k) % n;
    }
    
    // Problem 27: Count paths in grid
    static int countPaths(int m, int n) {
        if (m == 1 || n == 1) return 1;
        return countPaths(m - 1, n) + countPaths(m, n - 1);
    }
    
    // Problem 28: Decimal to any base
    static String decimalToBase(int n, int base) {
        if (n == 0) return "";
        
        int digit = n % base;
        String digitChar = digit < 10 ? String.valueOf(digit) : 
                          String.valueOf((char)('A' + digit - 10));
        
        return decimalToBase(n / base, base) + digitChar;
    }
    
    // Problem 29: Count string subsequences
    static int countSubsequences(String str) {
        if (str.isEmpty()) return 1;
        
        // Each character can be included or excluded
        return 2 * countSubsequences(str.substring(1));
    }
    
    // Problem 30: Merge sort
    static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = left + (right - left) / 2;
            
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }
    
    static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;
        
        int[] L = new int[n1];
        int[] R = new int[n2];
        
        for (int i = 0; i < n1; i++) L[i] = arr[left + i];
        for (int i = 0; i < n2; i++) R[i] = arr[mid + 1 + i];
        
        int i = 0, j = 0, k = left;
        
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k++] = L[i++];
            } else {
                arr[k++] = R[j++];
            }
        }
        
        while (i < n1) arr[k++] = L[i++];
        while (j < n2) arr[k++] = R[j++];
    }
    
    // Helper method
    static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
