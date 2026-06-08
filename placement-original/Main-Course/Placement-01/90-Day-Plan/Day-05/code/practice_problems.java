/**
 * Day 5 - Practice Problems for Arrays & Collections
 * Contains 12 progressive problems
 */

import java.util.*;

public class practice_problems {

    public static void main(String[] args) {
        System.out.println("=== DAY 5 PRACTICE PROBLEMS ===\n");

        // BASIC (1-4)
        System.out.println("BASIC PROBLEMS");
        int[] arr = {1, 2, 3, 4, 5};
        System.out.println("Reverse: " + Arrays.toString(reverseArray(arr)));
        System.out.println("Max: " + findMax(arr));
        System.out.println("Contains 3: " + contains(arr, 3));
        System.out.println("Linear search index of 4: " + linearSearch(arr, 4));

        // INTERMEDIATE (5-8)
        System.out.println("\nINTERMEDIATE PROBLEMS");
        System.out.println("Rotate by 2: " + Arrays.toString(rotateCopy(arr, 2)));
        int[] arr2 = {2, -1, 3, 5, -2, 1};
        System.out.println("Max subarray sum (Kadane): " + kadane(arr2));
        List<Integer> duplicates = findDuplicates(new int[]{1,2,3,2,1,4});
        System.out.println("Duplicates: " + duplicates);
        System.out.println("Two Sum (unsorted) indices: " + Arrays.toString(twoSumUnsorted(new int[]{5,2,3,8}, 10)));

        // ADVANCED (9-12)
        System.out.println("\nADVANCED PROBLEMS");
        System.out.println("Common elements in arrays: " + Arrays.toString(commonElements(new int[]{1,2,3}, new int[]{2,3,4})));
        System.out.println("Top K frequent elements: " + mostFrequent(new int[]{1,1,2,2,3,3,1}, 2));
        System.out.println("Group anagrams: " + groupAnagrams(new String[]{"eat","tea","tan","ate"}));
        int[][] matrix = {{1,2,3},{4,5,6},{7,8,9}};
        System.out.println("Rotate matrix 90deg: ");
        rotateMatrix(matrix);
        for (int[] row : matrix) System.out.println(Arrays.toString(row));
    }

    // Basic
    public static int[] reverseArray(int[] arr) {
        int[] res = new int[arr.length];
        for (int i = 0; i < arr.length; i++) res[i] = arr[arr.length - 1 - i];
        return res;
    }

    public static int findMax(int[] arr) {
        int max = Integer.MIN_VALUE;
        for (int v : arr) if (v > max) max = v;
        return max;
    }

    public static boolean contains(int[] arr, int x) {
        for (int v : arr) if (v == x) return true;
        return false;
    }

    public static int linearSearch(int[] arr, int x) {
        for (int i = 0; i < arr.length; i++) if (arr[i] == x) return i;
        return -1;
    }

    // Intermediate
    public static int[] rotateCopy(int[] arr, int k) {
        int n = arr.length; int[] res = new int[n];
        k = k % n;
        for (int i = 0; i < n; i++) res[(i + k) % n] = arr[i];
        return res;
    }

    public static int kadane(int[] arr) {
        int maxEndingHere = arr[0], maxSoFar = arr[0];
        for (int i = 1; i < arr.length; i++) {
            maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
            maxSoFar = Math.max(maxSoFar, maxEndingHere);
        }
        return maxSoFar;
    }

    public static List<Integer> findDuplicates(int[] arr) {
        Set<Integer> seen = new HashSet<>();
        Set<Integer> dups = new LinkedHashSet<>();
        for (int v : arr) {
            if (!seen.add(v)) dups.add(v);
        }
        return new ArrayList<>(dups);
    }

    public static int[] twoSumUnsorted(int[] arr, int target) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr.length; i++) {
            int need = target - arr[i];
            if (map.containsKey(need)) return new int[]{map.get(need), i};
            map.put(arr[i], i);
        }
        return new int[]{-1, -1};
    }

    // Advanced
    public static int[] commonElements(int[] a, int[] b) {
        Set<Integer> set = new HashSet<>();
        for (int v : a) set.add(v);
        List<Integer> res = new ArrayList<>();
        for (int v : b) if (set.contains(v)) res.add(v);
        return res.stream().mapToInt(i -> i).toArray();
    }

    public static List<Integer> mostFrequent(int[] arr, int k) {
        Map<Integer, Integer> freq = new HashMap<>();
        for (int v : arr) freq.put(v, freq.getOrDefault(v, 0) + 1);
        PriorityQueue<Integer> pq = new PriorityQueue<>((a,b) -> freq.get(b) - freq.get(a));
        pq.addAll(freq.keySet());
        List<Integer> res = new ArrayList<>();
        for (int i = 0; i < k && !pq.isEmpty(); i++) res.add(pq.poll());
        return res;
    }

    public static List<List<String>> groupAnagrams(String[] arr) {
        Map<String, List<String>> map = new HashMap<>();
        for (String s : arr) {
            char[] a = s.toCharArray(); Arrays.sort(a);
            String key = new String(a);
            map.computeIfAbsent(key, k -> new ArrayList<>()).add(s);
        }
        return new ArrayList<>(map.values());
    }

    public static void rotateMatrix(int[][] matrix) {
        int n = matrix.length;
        // transpose
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                int tmp = matrix[i][j]; matrix[i][j] = matrix[j][i]; matrix[j][i] = tmp;
            }
        }
        // reverse each row
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n / 2; j++) {
                int tmp = matrix[i][j]; matrix[i][j] = matrix[i][n - j - 1]; matrix[i][n - j - 1] = tmp;
            }
        }
    }
}
