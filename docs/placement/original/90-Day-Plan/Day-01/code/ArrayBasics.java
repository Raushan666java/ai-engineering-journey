public class ArrayBasics {
    public static void main(String[] args) {
        // Array declaration and initialization
        int[] numbers = {1, 2, 3, 4, 5};

        // Array traversal
        System.out.println("Array elements:");
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("Index " + i + ": " + numbers[i]);
        }

        // Array operations
        System.out.println("Array length: " + numbers.length);

        // Enhanced for loop
        System.out.println("Using enhanced for loop:");
        for (int num : numbers) {
            System.out.println(num);
        }

        // Array modification
        numbers[2] = 10; // Change index 2 to 10
        System.out.println("After modification:");
        for (int num : numbers) {
            System.out.println(num);
        }
    }
}