public class ArrayOperations {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};

        // 1. Array Traversal
        System.out.println("Original Array:");
        traverseArray(arr);

        // 2. Array Insertion (at end)
        arr = insertAtEnd(arr, 60);
        System.out.println("After inserting 60:");
        traverseArray(arr);

        // 3. Array Deletion (by value)
        arr = deleteByValue(arr, 30);
        System.out.println("After deleting 30:");
        traverseArray(arr);

        // 4. Linear Search
        int searchElement = 40;
        int index = linearSearch(arr, searchElement);
        if (index != -1) {
            System.out.println("Element " + searchElement + " found at index: " + index);
        } else {
            System.out.println("Element " + searchElement + " not found");
        }

        // 5. Find Maximum and Minimum
        int[] stats = findMaxMin(arr);
        System.out.println("Maximum element: " + stats[0]);
        System.out.println("Minimum element: " + stats[1]);

        // 6. Array Reversal
        arr = reverseArray(arr);
        System.out.println("Reversed Array:");
        traverseArray(arr);
    }

    // Method to traverse and print array
    public static void traverseArray(int[] arr) {
        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
        System.out.println();
    }

    // Method to insert element at end
    public static int[] insertAtEnd(int[] arr, int element) {
        int[] newArr = new int[arr.length + 1];
        for (int i = 0; i < arr.length; i++) {
            newArr[i] = arr[i];
        }
        newArr[arr.length] = element;
        return newArr;
    }

    // Method to delete element by value
    public static int[] deleteByValue(int[] arr, int value) {
        int count = 0;
        for (int num : arr) {
            if (num != value) count++;
        }

        int[] newArr = new int[count];
        int index = 0;
        for (int num : arr) {
            if (num != value) {
                newArr[index++] = num;
            }
        }
        return newArr;
    }

    // Linear Search implementation
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i;
            }
        }
        return -1;
    }

    // Find maximum and minimum elements
    public static int[] findMaxMin(int[] arr) {
        if (arr.length == 0) {
            return new int[] {Integer.MIN_VALUE, Integer.MAX_VALUE};
        }

        int max = arr[0];
        int min = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return new int[] {max, min};
    }

    // Array reversal
    public static int[] reverseArray(int[] arr) {
        int[] reversed = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            reversed[i] = arr[arr.length - 1 - i];
        }
        return reversed;
    }
}