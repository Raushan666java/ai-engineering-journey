import java.util.Arrays;

public class TwoPointerBasics {
    public static void main(String[] args) {
        System.out.println("=== Two-Pointer Technique Basics ===\n");

        // Example 1: Opposite Direction - Check if array is sorted
        int[] arr1 = {1, 2, 3, 4, 5};
        System.out.println("Array: " + Arrays.toString(arr1));
        System.out.println("Is sorted: " + isSorted(arr1));
        System.out.println();

        // Example 2: Same Direction - Find middle element
        int[] arr2 = {10, 20, 30, 40, 50, 60};
        System.out.println("Array: " + Arrays.toString(arr2));
        System.out.println("Middle element: " + findMiddle(arr2));
        System.out.println();

        // Example 3: Two pointers for sum
        int[] arr3 = {1, 2, 3, 4, 5, 6};
        int target = 7;
        System.out.println("Array: " + Arrays.toString(arr3));
        System.out.println("Pairs with sum " + target + ":");
        findPairsWithSum(arr3, target);
        System.out.println();

        // Example 4: Reverse array using two pointers
        int[] arr4 = {1, 2, 3, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr4));
        reverseArray(arr4);
        System.out.println("Reversed: " + Arrays.toString(arr4));
        System.out.println();

        // Example 5: Remove duplicates (in-place)
        int[] arr5 = {1, 1, 2, 2, 3, 4, 4, 5};
        System.out.println("Original: " + Arrays.toString(arr5));
        int newLength = removeDuplicates(arr5);
        System.out.println("After removing duplicates: " +
                          Arrays.toString(Arrays.copyOf(arr5, newLength)));
        System.out.println("New length: " + newLength);
    }

    // Check if array is sorted using two pointers
    public static boolean isSorted(int[] arr) {
        if (arr.length <= 1) return true;

        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            if (arr[left] > arr[left + 1]) return false;
            if (arr[right] < arr[right - 1]) return false;
            left++;
            right--;
        }
        return true;
    }

    // Find middle element using slow-fast pointers
    public static int findMiddle(int[] arr) {
        int slow = 0;
        int fast = 0;

        while (fast < arr.length - 1) {
            slow++;
            fast += 2;
        }
        return arr[slow];
    }

    // Find pairs with given sum
    public static void findPairsWithSum(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            int sum = arr[left] + arr[right];
            if (sum == target) {
                System.out.println("(" + arr[left] + ", " + arr[right] + ")");
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    // Reverse array using two pointers
    public static void reverseArray(int[] arr) {
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            // Swap elements
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }
    }

    // Remove duplicates from sorted array
    public static int removeDuplicates(int[] arr) {
        if (arr.length == 0) return 0;

        int slow = 0;
        for (int fast = 1; fast < arr.length; fast++) {
            if (arr[fast] != arr[slow]) {
                slow++;
                arr[slow] = arr[fast];
            }
        }
        return slow + 1;
    }
}