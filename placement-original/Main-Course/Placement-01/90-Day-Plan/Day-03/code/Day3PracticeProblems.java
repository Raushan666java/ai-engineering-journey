/**
 * 30 PRACTICE PROBLEMS - DAY 3
 * Loops and Arrays mastery through hands-on practice
 */

import java.util.Arrays;

public class Day3PracticeProblems {
    
    public static void main(String[] args) {
        System.out.println("╔════════════════════════════════════╗");
        System.out.println("║   DAY 3 - 30 PRACTICE PROBLEMS     ║");
        System.out.println("║   Loops & Arrays Mastery           ║");
        System.out.println("╚════════════════════════════════════╝\n");
        
        // Run all problems
        problem01(); problem02(); problem03(); problem04(); problem05();
        problem06(); problem07(); problem08(); problem09(); problem10();
        problem11(); problem12(); problem13(); problem14(); problem15();
        problem16(); problem17(); problem18(); problem19(); problem20();
        problem21(); problem22(); problem23(); problem24(); problem25();
        problem26(); problem27(); problem28(); problem29(); problem30();
        
        System.out.println("\n🎉 ALL 30 PROBLEMS COMPLETED! 🎉");
    }
    
    // LOOP PROBLEMS (1-15)
    
    static void problem01() {
        System.out.println("Problem 1: Sum of first 100 natural numbers");
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum + "\n");
    }
    
    static void problem02() {
        System.out.println("Problem 2: Factorial of 10");
        long factorial = 1;
        for (int i = 1; i <= 10; i++) {
            factorial *= i;
        }
        System.out.println("10! = " + factorial + "\n");
    }
    
    static void problem03() {
        System.out.println("Problem 3: Print Fibonacci sequence (first 15 terms)");
        int a = 0, b = 1;
        System.out.print(a + " " + b + " ");
        for (int i = 3; i <= 15; i++) {
            int next = a + b;
            System.out.print(next + " ");
            a = b;
            b = next;
        }
        System.out.println("\n");
    }
    
    static void problem04() {
        System.out.println("Problem 4: Count digits in 987654321");
        int num = 987654321;
        int count = 0;
        while (num > 0) {
            count++;
            num /= 10;
        }
        System.out.println("Number of digits: " + count + "\n");
    }
    
    static void problem05() {
        System.out.println("Problem 5: Reverse number 56789");
        int original = 56789;
        int reversed = 0;
        while (original > 0) {
            reversed = reversed * 10 + original % 10;
            original /= 10;
        }
        System.out.println("Reversed: " + reversed + "\n");
    }
    
    static void problem06() {
        System.out.println("Problem 6: Check if 16461 is palindrome");
        int num = 16461;
        int temp = num, reversed = 0;
        while (temp > 0) {
            reversed = reversed * 10 + temp % 10;
            temp /= 10;
        }
        System.out.println(num + " is " + (num == reversed ? "a palindrome" : "not a palindrome") + "\n");
    }
    
    static void problem07() {
        System.out.println("Problem 7: Check if 153 is Armstrong number");
        int num = 153;
        int temp = num, sum = 0;
        while (temp > 0) {
            int digit = temp % 10;
            sum += digit * digit * digit;
            temp /= 10;
        }
        System.out.println(num + " is " + (num == sum ? "an Armstrong number" : "not an Armstrong number") + "\n");
    }
    
    static void problem08() {
        System.out.println("Problem 8: Print all prime numbers from 1 to 50");
        for (int num = 2; num <= 50; num++) {
            boolean isPrime = true;
            for (int i = 2; i <= Math.sqrt(num); i++) {
                if (num % i == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) System.out.print(num + " ");
        }
        System.out.println("\n");
    }
    
    static void problem09() {
        System.out.println("Problem 9: GCD of 48 and 18");
        int a = 48, b = 18;
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        System.out.println("GCD: " + a + "\n");
    }
    
    static void problem10() {
        System.out.println("Problem 10: LCM of 12 and 18");
        int a = 12, b = 18;
        int gcd = findGCD(a, b);
        int lcm = (a * b) / gcd;
        System.out.println("LCM: " + lcm + "\n");
    }
    
    static int findGCD(int a, int b) {
        while (b != 0) {
            int temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
    
    static void problem11() {
        System.out.println("Problem 11: Sum of digits of 123456");
        int num = 123456, sum = 0;
        while (num > 0) {
            sum += num % 10;
            num /= 10;
        }
        System.out.println("Sum of digits: " + sum + "\n");
    }
    
    static void problem12() {
        System.out.println("Problem 12: Product of digits of 1234");
        int num = 1234, product = 1;
        while (num > 0) {
            product *= num % 10;
            num /= 10;
        }
        System.out.println("Product of digits: " + product + "\n");
    }
    
    static void problem13() {
        System.out.println("Problem 13: Print multiplication table of 13");
        for (int i = 1; i <= 10; i++) {
            System.out.println("13 x " + i + " = " + (13 * i));
        }
        System.out.println();
    }
    
    static void problem14() {
        System.out.println("Problem 14: Count even and odd digits in 123456");
        int num = 123456, even = 0, odd = 0;
        while (num > 0) {
            if ((num % 10) % 2 == 0) even++;
            else odd++;
            num /= 10;
        }
        System.out.println("Even: " + even + ", Odd: " + odd + "\n");
    }
    
    static void problem15() {
        System.out.println("Problem 15: Check if 28 is a perfect number");
        int num = 28, sum = 0;
        for (int i = 1; i < num; i++) {
            if (num % i == 0) sum += i;
        }
        System.out.println(num + " is " + (sum == num ? "a perfect number" : "not a perfect number") + "\n");
    }
    
    // ARRAY PROBLEMS (16-30)
    
    static void problem16() {
        System.out.println("Problem 16: Find max and min in array");
        int[] arr = {34, 67, 23, 89, 12, 56};
        int max = arr[0], min = arr[0];
        for (int num : arr) {
            if (num > max) max = num;
            if (num < min) min = num;
        }
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Max: " + max + ", Min: " + min + "\n");
    }
    
    static void problem17() {
        System.out.println("Problem 17: Calculate average of array");
        int[] arr = {10, 20, 30, 40, 50};
        int sum = 0;
        for (int num : arr) sum += num;
        double avg = sum / (double) arr.length;
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Average: " + avg + "\n");
    }
    
    static void problem18() {
        System.out.println("Problem 18: Reverse an array");
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr));
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        System.out.println("Reversed: " + Arrays.toString(arr) + "\n");
    }
    
    static void problem19() {
        System.out.println("Problem 19: Find second largest element");
        int[] arr = {12, 35, 1, 10, 34, 1};
        int first = Integer.MIN_VALUE, second = Integer.MIN_VALUE;
        for (int num : arr) {
            if (num > first) {
                second = first;
                first = num;
            } else if (num > second && num != first) {
                second = num;
            }
        }
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Second largest: " + second + "\n");
    }
    
    static void problem20() {
        System.out.println("Problem 20: Check if array is sorted");
        int[] arr = {1, 2, 3, 4, 5};
        boolean isSorted = true;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < arr[i - 1]) {
                isSorted = false;
                break;
            }
        }
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Is sorted: " + isSorted + "\n");
    }
    
    static void problem21() {
        System.out.println("Problem 21: Linear search for 30");
        int[] arr = {10, 25, 30, 15, 40};
        int target = 30, index = -1;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                index = i;
                break;
            }
        }
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Found at index: " + index + "\n");
    }
    
    static void problem22() {
        System.out.println("Problem 22: Count occurrences of 3");
        int[] arr = {1, 3, 5, 3, 7, 3, 9};
        int target = 3, count = 0;
        for (int num : arr) {
            if (num == target) count++;
        }
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Occurrences of 3: " + count + "\n");
    }
    
    static void problem23() {
        System.out.println("Problem 23: Move all zeros to end");
        int[] arr = {0, 1, 0, 3, 12};
        System.out.println("Original: " + Arrays.toString(arr));
        int j = 0;
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] != 0) {
                arr[j++] = arr[i];
            }
        }
        while (j < arr.length) {
            arr[j++] = 0;
        }
        System.out.println("After moving zeros: " + Arrays.toString(arr) + "\n");
    }
    
    static void problem24() {
        System.out.println("Problem 24: Find missing number (1 to n)");
        int[] arr = {1, 2, 4, 5, 6};
        int n = arr.length + 1;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int num : arr) actualSum += num;
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Missing number: " + (expectedSum - actualSum) + "\n");
    }
    
    static void problem25() {
        System.out.println("Problem 25: Remove duplicates from sorted array");
        int[] arr = {1, 1, 2, 2, 3, 4, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr));
        int j = 0;
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] != arr[j]) {
                j++;
                arr[j] = arr[i];
            }
        }
        System.out.print("After removing duplicates: ");
        for (int i = 0; i <= j; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println("\n");
    }
    
    static void problem26() {
        System.out.println("Problem 26: Rotate array left by 2");
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr));
        int k = 2;
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        reverse(arr, 0, arr.length - 1);
        System.out.println("After rotating left by 2: " + Arrays.toString(arr) + "\n");
    }
    
    static void reverse(int[] arr, int start, int end) {
        while (start < end) {
            int temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
    
    static void problem27() {
        System.out.println("Problem 27: Matrix row and column sums");
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        System.out.println("Matrix:");
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
        
        System.out.print("Row sums: ");
        for (int i = 0; i < matrix.length; i++) {
            int sum = 0;
            for (int j = 0; j < matrix[i].length; j++) {
                sum += matrix[i][j];
            }
            System.out.print(sum + " ");
        }
        System.out.println();
        
        System.out.print("Column sums: ");
        for (int j = 0; j < matrix[0].length; j++) {
            int sum = 0;
            for (int i = 0; i < matrix.length; i++) {
                sum += matrix[i][j];
            }
            System.out.print(sum + " ");
        }
        System.out.println("\n");
    }
    
    static void problem28() {
        System.out.println("Problem 28: Transpose a matrix");
        int[][] matrix = {{1, 2, 3}, {4, 5, 6}};
        System.out.println("Original:");
        for (int[] row : matrix) {
            System.out.println(Arrays.toString(row));
        }
        
        int[][] transposed = new int[matrix[0].length][matrix.length];
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                transposed[j][i] = matrix[i][j];
            }
        }
        
        System.out.println("Transposed:");
        for (int[] row : transposed) {
            System.out.println(Arrays.toString(row));
        }
        System.out.println();
    }
    
    static void problem29() {
        System.out.println("Problem 29: Find pair with sum 9");
        int[] arr = {2, 7, 11, 15};
        int target = 9;
        System.out.println("Array: " + Arrays.toString(arr));
        System.out.println("Target sum: " + target);
        
        boolean found = false;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[i] + arr[j] == target) {
                    System.out.println("Pair found: [" + arr[i] + ", " + arr[j] + "]");
                    found = true;
                    break;
                }
            }
            if (found) break;
        }
        System.out.println();
    }
    
    static void problem30() {
        System.out.println("Problem 30: Merge two sorted arrays");
        int[] arr1 = {1, 3, 5, 7};
        int[] arr2 = {2, 4, 6, 8};
        int[] merged = new int[arr1.length + arr2.length];
        
        int i = 0, j = 0, k = 0;
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] < arr2[j]) {
                merged[k++] = arr1[i++];
            } else {
                merged[k++] = arr2[j++];
            }
        }
        
        while (i < arr1.length) {
            merged[k++] = arr1[i++];
        }
        
        while (j < arr2.length) {
            merged[k++] = arr2[j++];
        }
        
        System.out.println("Array 1: " + Arrays.toString(arr1));
        System.out.println("Array 2: " + Arrays.toString(arr2));
        System.out.println("Merged: " + Arrays.toString(merged) + "\n");
    }
}
