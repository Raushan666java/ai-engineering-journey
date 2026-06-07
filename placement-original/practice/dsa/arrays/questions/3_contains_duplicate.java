package arrays.questions;

/*
 * 3. CONTAINS DUPLICATE (LeetCode 217)
 *
 * Problem Statement:
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 *
 * Conceptual Understanding:
 * - Check for duplicate elements in array
 * - Return boolean: true if duplicates exist, false if all unique
 * - Time: O(n), Space: O(n) for hash set
 * - Alternative: O(n²) brute force, O(n log n) with sorting
 * - HashSet gives optimal solution for uniqueness checking
 *
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

class ContainsDuplicate3 {

    // Method 1: HashSet approach (most efficient)
    public boolean containsDuplicate(int[] nums) {
        java.util.Set<Integer> set = new java.util.HashSet<>();

        for (int num : nums) {
            if (!set.add(num)) {
                return true;
            }
        }

        return false;
    }

    // Method 2: Brute force (O(n²))
    public boolean containsDuplicateBruteForce(int[] nums) {
        for (int i = 0; i < nums.length - 1; i++) {
            for (int j = i + 1; j < nums.length; j++) {
                if (nums[i] == nums[j]) {
                    return true;
                }
            }
        }

        return false;
    }

    // Method 3: Sort and check adjacent (O(n log n))
    public boolean containsDuplicateSort(int[] nums) {
        java.util.Arrays.sort(nums);

        for (int i = 0; i < nums.length - 1; i++) {
            if (nums[i] == nums[i + 1]) {
                return true;
            }
        }

        return false;
    }

    // Method 4: Using HashMap with frequency count
    public boolean containsDuplicateHashMap(int[] nums) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        for (int num : nums) {
            map.put(num, map.getOrDefault(num, 0) + 1);
            if (map.get(num) > 1) {
                return true;
            }
        }

        return false;
    }

    // Method 5: Using streams (educational)
    public boolean containsDuplicateStreams(int[] nums) {
        return java.util.Arrays.stream(nums)
                .boxed()
                .collect(java.util.stream.Collectors.toSet())
                .size() < nums.length;
    }

    // Method 6: Bit manipulation (for positive integers only)
    public boolean containsDuplicateBitManipulation(int[] nums) {
        // Find min and max to determine bit array size
        int min = Integer.MAX_VALUE;
        int max = Integer.MIN_VALUE;

        for (int num : nums) {
            min = Math.min(min, num);
            max = Math.max(max, num);
        }

        if (max - min > 1000000) { // Too large for bit manipulation
            return containsDuplicate(nums);
        }

        // Shift to make non-negative
        int shift = min < 0 ? -min : 0;
        boolean[] seen = new boolean[max - min + 1];

        for (int num : nums) {
            int index = num + shift;
            if (seen[index]) {
                return true;
            }
            seen[index] = true;
        }

        return false;
    }

    // Method 7: Using TreeSet (maintains order)
    public boolean containsDuplicateTreeSet(int[] nums) {
        java.util.Set<Integer> set = new java.util.TreeSet<>();

        for (int num : nums) {
            if (!set.add(num)) {
                return true;
            }
        }

        return false;
    }

    // Method 8: Using LinkedHashSet (maintains insertion order)
    public boolean containsDuplicateLinkedHashSet(int[] nums) {
        java.util.Set<Integer> set = new java.util.LinkedHashSet<>();

        for (int num : nums) {
            if (!set.add(num)) {
                return true;
            }
        }

        return false;
    }

    // Method 9: Find all duplicates
    public java.util.Set<Integer> findAllDuplicates(int[] nums) {
        java.util.Set<Integer> seen = new java.util.HashSet<>();
        java.util.Set<Integer> duplicates = new java.util.HashSet<>();

        for (int num : nums) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }

        return duplicates;
    }

    // Method 10: Count duplicates
    public int countDuplicates(int[] nums) {
        java.util.Map<Integer, Integer> frequency = new java.util.HashMap<>();

        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        int duplicateCount = 0;
        for (int count : frequency.values()) {
            if (count > 1) {
                duplicateCount++;
            }
        }

        return duplicateCount;
    }

    // Method 11: Find first duplicate
    public int findFirstDuplicate(int[] nums) {
        java.util.Set<Integer> seen = new java.util.HashSet<>();

        for (int num : nums) {
            if (!seen.add(num)) {
                return num;
            }
        }

        return -1; // No duplicate found
    }

    // Method 12: Find all duplicate pairs
    public java.util.List<int[]> findDuplicatePairs(int[] nums) {
        java.util.List<int[]> pairs = new java.util.ArrayList<>();
        java.util.Map<Integer, java.util.List<Integer>> positions = new java.util.HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            positions.computeIfAbsent(nums[i], k -> new java.util.ArrayList<>()).add(i);
        }

        for (java.util.List<Integer> posList : positions.values()) {
            if (posList.size() > 1) {
                // Create pairs from positions
                for (int i = 0; i < posList.size() - 1; i++) {
                    for (int j = i + 1; j < posList.size(); j++) {
                        pairs.add(new int[]{posList.get(i), posList.get(j)});
                    }
                }
            }
        }

        return pairs;
    }

    // Method 13: Contains duplicate within distance k
    public boolean containsNearbyDuplicate(int[] nums, int k) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            if (map.containsKey(nums[i])) {
                if (i - map.get(nums[i]) <= k) {
                    return true;
                }
            }
            map.put(nums[i], i);
        }

        return false;
    }

    // Method 14: Contains duplicate with exactly k duplicates
    public boolean containsExactlyKDuplicates(int[] nums, int k) {
        java.util.Map<Integer, Integer> frequency = new java.util.HashMap<>();

        for (int num : nums) {
            frequency.put(num, frequency.getOrDefault(num, 0) + 1);
        }

        for (int count : frequency.values()) {
            if (count == k) {
                return true;
            }
        }

        return false;
    }

    // Method 15: Remove duplicates in-place (return new length)
    public int removeDuplicates(int[] nums) {
        if (nums.length == 0) {
            return 0;
        }

        int uniqueIndex = 0;

        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[uniqueIndex]) {
                uniqueIndex++;
                nums[uniqueIndex] = nums[i];
            }
        }

        return uniqueIndex + 1;
    }

    // Test cases
    public static void main(String[] args) {
        ContainsDuplicate3 solution = new ContainsDuplicate3();

        // Test Case 1: Has duplicates
        int[] nums1 = {1, 2, 3, 1};
        System.out.println("Has duplicates: " + solution.containsDuplicate(nums1)); // Expected: true

        // Test Case 2: No duplicates
        int[] nums2 = {1, 2, 3, 4};
        System.out.println("Has duplicates: " + solution.containsDuplicate(nums2)); // Expected: false

        // Test Case 3: Empty array
        int[] nums3 = {};
        System.out.println("Has duplicates: " + solution.containsDuplicate(nums3)); // Expected: false

        // Test Case 4: Single element
        int[] nums4 = {1};
        System.out.println("Has duplicates: " + solution.containsDuplicate(nums4)); // Expected: false

        // Test Case 5: All duplicates
        int[] nums5 = {2, 2, 2, 2};
        System.out.println("Has duplicates: " + solution.containsDuplicate(nums5)); // Expected: true

        // Test Case 6: Performance comparison
        int[] largeArray = new int[10000];
        for (int i = 0; i < largeArray.length; i++) {
            largeArray[i] = (int)(Math.random() * 10000);
        }

        long startTime, endTime;

        // HashSet approach
        startTime = System.nanoTime();
        boolean result1 = solution.containsDuplicate(largeArray.clone());
        endTime = System.nanoTime();
        System.out.println("\nHashSet result: " + result1 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Sort approach
        startTime = System.nanoTime();
        boolean result2 = solution.containsDuplicateSort(largeArray.clone());
        endTime = System.nanoTime();
        System.out.println("Sort result: " + result2 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Brute force approach (smaller array for performance)
        int[] smallArray = {1, 2, 3, 4, 5, 1};
        startTime = System.nanoTime();
        boolean result3 = solution.containsDuplicateBruteForce(smallArray);
        endTime = System.nanoTime();
        System.out.println("Brute force result: " + result3 + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Test Case 7: Advanced operations
        int[] testArray = {1, 2, 3, 2, 4, 1, 5};

        System.out.println("\nAdvanced operations:");
        System.out.println("All duplicates: " + solution.findAllDuplicates(testArray));
        System.out.println("Duplicate count: " + solution.countDuplicates(testArray));
        System.out.println("First duplicate: " + solution.findFirstDuplicate(testArray));
        System.out.println("Nearby duplicate (k=2): " + solution.containsNearbyDuplicate(testArray, 2));
        System.out.println("Exactly 2 duplicates: " + solution.containsExactlyKDuplicates(testArray, 2));

        // Test Case 8: Remove duplicates
        int[] removeDupArray = {1, 1, 2, 2, 3, 3};
        int newLength = solution.removeDuplicates(removeDupArray);
        System.out.println("New length after removing duplicates: " + newLength);
        System.out.print("Array after removal: ");
        for (int i = 0; i < newLength; i++) {
            System.out.print(removeDupArray[i] + " ");
        }
        System.out.println();

        // Test Case 9: Duplicate pairs
        java.util.List<int[]> pairs = solution.findDuplicatePairs(new int[]{1, 2, 1, 3, 2});
        System.out.println("Duplicate pairs:");
        for (int[] pair : pairs) {
            System.out.println("[" + pair[0] + ", " + pair[1] + "]");
        }

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");

        // Large numbers
        int[] largeNumbers = {Integer.MAX_VALUE, Integer.MIN_VALUE, Integer.MAX_VALUE};
        System.out.println("Large numbers has duplicate: " + solution.containsDuplicate(largeNumbers));

        // Negative numbers
        int[] negativeNumbers = {-1, -2, -1, -3};
        System.out.println("Negative numbers has duplicate: " + solution.containsDuplicate(negativeNumbers));

        // Mixed positive and negative
        int[] mixedNumbers = {-1, 1, -1, 1, 2};
        System.out.println("Mixed numbers has duplicate: " + solution.containsDuplicate(mixedNumbers));
    }
}