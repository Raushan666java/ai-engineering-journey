/**
 * Day 5 - Arrays Basics
 * Demonstrations of Java arrays: declaration, traversal, copying, basic algorithms
 */

import java.util.Arrays;

public class arrays_basics {

    public static void main(String[] args) {
        System.out.println("=== ARRAYS BASICS - DAY 5 ===\n");

        demonstrateDeclarationAndInitialization();
        demonstrateTraversal();
        demonstrateCopying();
        demonstrateSearch();
        demonstrateBasicSorting();
        demonstrateMultiDimensional();
    }

    public static void demonstrateDeclarationAndInitialization() {
        System.out.println("1. DECLARATION & INITIALIZATION");
        int[] arr1 = new int[5]; // default values
        int[] arr2 = {1, 2, 3, 4};
        String[] names = new String[]{"Alice", "Bob", "Charlie"};

        System.out.println("arr1: " + Arrays.toString(arr1));
        System.out.println("arr2: " + Arrays.toString(arr2));
        System.out.println("names: " + Arrays.toString(names));
        System.out.println();
    }

    public static void demonstrateTraversal() {
        System.out.println("2. TRAVERSAL");
        int[] arr = {2, 4, 6, 8, 10};

        // classic for loop
        System.out.println("Classic for loop:");
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();

        // enhanced for loop
        System.out.println("Enhanced for loop:");
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();

        // streams (Java 8+)
        System.out.println("Stream forEach:");
        Arrays.stream(arr).forEach(x -> System.out.print(x + " "));
        System.out.println();

        System.out.println();
    }

    public static void demonstrateCopying() {
        System.out.println("3. COPYING ARRAYS");
        int[] src = {1, 2, 3, 4, 5};
        int[] dest1 = Arrays.copyOf(src, src.length); // deep copy for primitives
        int[] dest2 = new int[10];
        System.arraycopy(src, 0, dest2, 2, src.length);

        System.out.println("src: " + Arrays.toString(src));
        System.out.println("dest1: " + Arrays.toString(dest1));
        System.out.println("dest2: " + Arrays.toString(dest2));
        System.out.println();
    }

    public static void demonstrateSearch() {
        System.out.println("4. SEARCH (linear & binary)");
        int[] arr = {3, 6, 2, 9, 1};

        System.out.println("linear search for 9: " + linearSearch(arr, 9));

        // binary requires sorted array
        Arrays.sort(arr);
        System.out.println("sorted: " + Arrays.toString(arr));
        int idx = Arrays.binarySearch(arr, 2);
        System.out.println("binary search index of 2: " + idx);
        System.out.println();
    }

    public static void demonstrateBasicSorting() {
        System.out.println("5. BASIC SORTING");
        int[] arr = {5, 1, 3, 2, 4};
        System.out.println("Before sort: " + Arrays.toString(arr));
        Arrays.sort(arr);
        System.out.println("After sort:  " + Arrays.toString(arr));

        // descending order
        Integer[] arrBoxed = {5, 1, 3, 2, 4};
        Arrays.sort(arrBoxed, java.util.Collections.reverseOrder());
        System.out.println("Descending (boxed): " + Arrays.toString(arrBoxed));

        System.out.println();
    }

    public static void demonstrateMultiDimensional() {
        System.out.println("6. MULTI-DIMENSIONAL ARRAYS");

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        System.out.println("Matrix:");
        for (int i = 0; i < matrix.length; i++) {
            System.out.println(Arrays.toString(matrix[i]));
        }

        // Jagged array
        int[][] jagged = new int[3][];
        jagged[0] = new int[] {1};
        jagged[1] = new int[] {2, 3};
        jagged[2] = new int[] {4, 5, 6};

        System.out.println("Jagged:");
        for (int[] row : jagged) {
            System.out.println(Arrays.toString(row));
        }

        System.out.println();
    }

    // helper: linear search
    public static int linearSearch(int[] arr, int x) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) return i;
        }
        return -1;
    }
}
