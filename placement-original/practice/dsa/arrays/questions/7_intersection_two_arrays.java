package arrays.questions;

/*
 * 7. INTERSECTION OF TWO ARRAYS (LeetCode 349)
 *
 * Problem Statement:
 * Given two integer arrays nums1 and nums2, return an array of their intersection.
 * Each element in the result must be unique and you may return the result in any order.
 *
 * Conceptual Understanding:
 * - Find common elements between two arrays
 * - Result should contain unique elements only
 * - Order doesn't matter
 * - Time: O(n+m), Space: O(min(n,m)) for hash set
 * - Alternative: O(n log n + m log m) with sorting
 * - Use HashSet for O(1) lookups
 *
 * Time Complexity: O(n+m)
 * Space Complexity: O(min(n,m))
 */

class IntersectionOfTwoArrays7 {

    // Method 1: HashSet approach (most efficient)
    public int[] intersection(int[] nums1, int[] nums2) {
        java.util.Set<Integer> set1 = new java.util.HashSet<>();
        java.util.Set<Integer> resultSet = new java.util.HashSet<>();

        // Add all elements from nums1 to set1
        for (int num : nums1) {
            set1.add(num);
        }

        // Check nums2 against set1
        for (int num : nums2) {
            if (set1.contains(num)) {
                resultSet.add(num);
            }
        }

        // Convert set to array
        int[] result = new int[resultSet.size()];
        int index = 0;
        for (int num : resultSet) {
            result[index++] = num;
        }

        return result;
    }

    // Method 2: Sort and two pointers
    public int[] intersectionSort(int[] nums1, int[] nums2) {
        java.util.Arrays.sort(nums1);
        java.util.Arrays.sort(nums2);

        java.util.Set<Integer> resultSet = new java.util.HashSet<>();
        int i = 0, j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                resultSet.add(nums1[i]);
                i++;
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return resultSet.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 3: Brute force (O(n*m))
    public int[] intersectionBruteForce(int[] nums1, int[] nums2) {
        java.util.Set<Integer> resultSet = new java.util.HashSet<>();

        for (int num1 : nums1) {
            for (int num2 : nums2) {
                if (num1 == num2) {
                    resultSet.add(num1);
                    break; // No need to check further for this num1
                }
            }
        }

        int[] result = new int[resultSet.size()];
        int index = 0;
        for (int num : resultSet) {
            result[index++] = num;
        }

        return result;
    }

    // Method 4: Using HashMap with frequency
    public int[] intersectionHashMap(int[] nums1, int[] nums2) {
        java.util.Map<Integer, Integer> map = new java.util.HashMap<>();
        java.util.Set<Integer> resultSet = new java.util.HashSet<>();

        // Count frequency in nums1
        for (int num : nums1) {
            map.put(num, map.getOrDefault(num, 0) + 1);
        }

        // Check nums2
        for (int num : nums2) {
            if (map.containsKey(num) && map.get(num) > 0) {
                resultSet.add(num);
                map.put(num, 0); // Mark as used to avoid duplicates
            }
        }

        return resultSet.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 5: Binary search approach
    public int[] intersectionBinarySearch(int[] nums1, int[] nums2) {
        java.util.Arrays.sort(nums2); // Sort the smaller array for binary search
        java.util.Set<Integer> resultSet = new java.util.HashSet<>();

        for (int num : nums1) {
            if (binarySearch(nums2, num)) {
                resultSet.add(num);
            }
        }

        return resultSet.stream().mapToInt(Integer::intValue).toArray();
    }

    private boolean binarySearch(int[] arr, int target) {
        int left = 0, right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;

            if (arr[mid] == target) {
                return true;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return false;
    }

    // Method 6: Using streams (educational)
    public int[] intersectionStreams(int[] nums1, int[] nums2) {
        java.util.Set<Integer> set1 = java.util.Arrays.stream(nums1)
                .boxed()
                .collect(java.util.stream.Collectors.toSet());

        return java.util.Arrays.stream(nums2)
                .distinct()
                .filter(set1::contains)
                .toArray();
    }

    // Method 7: Intersection with duplicates (variation)
    public int[] intersectionWithDuplicates(int[] nums1, int[] nums2) {
        java.util.Map<Integer, Integer> map1 = new java.util.HashMap<>();
        java.util.Map<Integer, Integer> map2 = new java.util.HashMap<>();

        // Count frequencies
        for (int num : nums1) {
            map1.put(num, map1.getOrDefault(num, 0) + 1);
        }
        for (int num : nums2) {
            map2.put(num, map2.getOrDefault(num, 0) + 1);
        }

        java.util.List<Integer> result = new java.util.ArrayList<>();

        // Take minimum frequency for each common element
        for (int num : map1.keySet()) {
            if (map2.containsKey(num)) {
                int minFreq = Math.min(map1.get(num), map2.get(num));
                for (int i = 0; i < minFreq; i++) {
                    result.add(num);
                }
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 8: Symmetric difference (A Δ B = (A - B) ∪ (B - A))
    public int[] symmetricDifference(int[] nums1, int[] nums2) {
        java.util.Set<Integer> set1 = new java.util.HashSet<>();
        java.util.Set<Integer> set2 = new java.util.HashSet<>();

        for (int num : nums1) set1.add(num);
        for (int num : nums2) set2.add(num);

        java.util.Set<Integer> symmetricDiff = new java.util.HashSet<>(set1);
        symmetricDiff.addAll(set2);

        java.util.Set<Integer> intersection = new java.util.HashSet<>(set1);
        intersection.retainAll(set2);

        symmetricDiff.removeAll(intersection);

        return symmetricDiff.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 9: Union of two arrays
    public int[] union(int[] nums1, int[] nums2) {
        java.util.Set<Integer> set = new java.util.HashSet<>();

        for (int num : nums1) set.add(num);
        for (int num : nums2) set.add(num);

        return set.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 10: Intersection of multiple arrays
    public int[] intersectionMultiple(int[][] arrays) {
        if (arrays == null || arrays.length == 0) {
            return new int[0];
        }

        java.util.Set<Integer> result = new java.util.HashSet<>();
        for (int num : arrays[0]) {
            result.add(num);
        }

        for (int i = 1; i < arrays.length; i++) {
            java.util.Set<Integer> current = new java.util.HashSet<>();
            for (int num : arrays[i]) {
                current.add(num);
            }
            result.retainAll(current);
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Method 11: Intersection with custom objects
    public static class CustomObject {
        int id;
        String name;

        public CustomObject(int id, String name) {
            this.id = id;
            this.name = name;
        }

        @Override
        public boolean equals(Object obj) {
            if (this == obj) return true;
            if (obj == null || getClass() != obj.getClass()) return false;
            CustomObject that = (CustomObject) obj;
            return id == that.id;
        }

        @Override
        public int hashCode() {
            return Integer.hashCode(id);
        }

        @Override
        public String toString() {
            return "CustomObject{id=" + id + ", name='" + name + "'}";
        }
    }

    public java.util.Set<CustomObject> intersectionCustom(CustomObject[] arr1, CustomObject[] arr2) {
        java.util.Set<CustomObject> set1 = new java.util.HashSet<>(java.util.Arrays.asList(arr1));
        java.util.Set<CustomObject> result = new java.util.HashSet<>();

        for (CustomObject obj : arr2) {
            if (set1.contains(obj)) {
                result.add(obj);
            }
        }

        return result;
    }

    // Method 12: Intersection of sorted arrays (optimized)
    public int[] intersectionSorted(int[] nums1, int[] nums2) {
        // Assume both arrays are sorted
        java.util.List<Integer> result = new java.util.ArrayList<>();
        int i = 0, j = 0;

        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] == nums2[j]) {
                if (result.isEmpty() || result.get(result.size() - 1) != nums1[i]) {
                    result.add(nums1[i]);
                }
                i++;
                j++;
            } else if (nums1[i] < nums2[j]) {
                i++;
            } else {
                j++;
            }
        }

        return result.stream().mapToInt(Integer::intValue).toArray();
    }

    // Test cases
    public static void main(String[] args) {
        IntersectionOfTwoArrays7 solution = new IntersectionOfTwoArrays7();

        // Test Case 1: Basic intersection
        int[] nums1_1 = {1, 2, 2, 1};
        int[] nums2_1 = {2, 2};
        int[] result1 = solution.intersection(nums1_1, nums2_1);
        System.out.print("Intersection: ");
        for (int num : result1) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [2]

        // Test Case 2: No intersection
        int[] nums1_2 = {1, 2, 3};
        int[] nums2_2 = {4, 5, 6};
        int[] result2 = solution.intersection(nums1_2, nums2_2);
        System.out.print("No intersection: ");
        for (int num : result2) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: []

        // Test Case 3: Multiple common elements
        int[] nums1_3 = {1, 2, 3, 4};
        int[] nums2_3 = {2, 4, 6, 8};
        int[] result3 = solution.intersection(nums1_3, nums2_3);
        System.out.print("Multiple common: ");
        for (int num : result3) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [2, 4]

        // Test Case 4: Performance comparison
        int[] large1 = new int[10000];
        int[] large2 = new int[10000];

        for (int i = 0; i < 10000; i++) {
            large1[i] = i;
            large2[i] = i + 5000; // Some overlap
        }

        long startTime, endTime;

        // HashSet approach
        startTime = System.nanoTime();
        int[] resultHash = solution.intersection(large1, large2);
        endTime = System.nanoTime();
        System.out.println("\nHashSet result size: " + resultHash.length + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Sort approach
        startTime = System.nanoTime();
        int[] resultSort = solution.intersectionSort(large1.clone(), large2.clone());
        endTime = System.nanoTime();
        System.out.println("Sort result size: " + resultSort.length + " (" + (endTime - startTime) / 1000000 + " ms)");

        // Test Case 5: With duplicates (variation)
        int[] nums1_5 = {1, 2, 2, 3, 3, 3};
        int[] nums2_5 = {2, 2, 3, 3};
        int[] resultDup = solution.intersectionWithDuplicates(nums1_5, nums2_5);
        System.out.print("With duplicates: ");
        for (int num : resultDup) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [2, 2, 3, 3]

        // Test Case 6: Symmetric difference
        int[] nums1_6 = {1, 2, 3, 4};
        int[] nums2_6 = {3, 4, 5, 6};
        int[] symDiff = solution.symmetricDifference(nums1_6, nums2_6);
        System.out.print("Symmetric difference: ");
        for (int num : symDiff) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 5, 6]

        // Test Case 7: Union
        int[] unionResult = solution.union(nums1_6, nums2_6);
        System.out.print("Union: ");
        for (int num : unionResult) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [1, 2, 3, 4, 5, 6]

        // Test Case 8: Multiple arrays intersection
        int[][] multiArrays = {{1, 2, 3}, {2, 3, 4}, {2, 3, 5}};
        int[] multiResult = solution.intersectionMultiple(multiArrays);
        System.out.print("Multiple intersection: ");
        for (int num : multiResult) {
            System.out.print(num + " ");
        }
        System.out.println(); // Expected: [2, 3]

        // Test Case 9: Custom objects
        CustomObject[] arr1 = {
            new CustomObject(1, "Alice"),
            new CustomObject(2, "Bob"),
            new CustomObject(3, "Charlie")
        };
        CustomObject[] arr2 = {
            new CustomObject(2, "Bob"),
            new CustomObject(4, "David")
        };
        java.util.Set<CustomObject> customResult = solution.intersectionCustom(arr1, arr2);
        System.out.println("Custom objects intersection: " + customResult);

        // Test Case 10: Edge cases
        System.out.println("\nEdge cases:");

        // Empty arrays
        int[] empty1 = {};
        int[] empty2 = {1, 2, 3};
        int[] emptyResult = solution.intersection(empty1, empty2);
        System.out.println("Empty arrays: " + java.util.Arrays.toString(emptyResult));

        // Single element
        int[] single1 = {5};
        int[] single2 = {5};
        int[] singleResult = solution.intersection(single1, single2);
        System.out.println("Single element: " + java.util.Arrays.toString(singleResult));

        // Large numbers
        int[] largeNums1 = {Integer.MAX_VALUE, 1};
        int[] largeNums2 = {Integer.MAX_VALUE, 2};
        int[] largeResult = solution.intersection(largeNums1, largeNums2);
        System.out.println("Large numbers: " + java.util.Arrays.toString(largeResult));

        // Negative numbers
        int[] neg1 = {-1, -2, 1};
        int[] neg2 = {-2, -3, 1};
        int[] negResult = solution.intersection(neg1, neg2);
        System.out.println("Negative numbers: " + java.util.Arrays.toString(negResult));
    }
}