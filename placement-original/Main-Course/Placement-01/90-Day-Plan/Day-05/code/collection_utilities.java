import java.util.*;

public class collection_utilities {

    // Frequency map of an array
    public static <T> Map<T, Integer> frequencyMap(T[] arr) {
        Map<T, Integer> map = new HashMap<>();
        for (T x : arr) map.put(x, map.getOrDefault(x, 0) + 1);
        return map;
    }

    // Reverse an ArrayList in place
    public static <T> void reverseList(List<T> list) {
        Collections.reverse(list);
    }

    // Intersection of two sets
    public static <T> Set<T> intersection(Set<T> a, Set<T> b) {
        Set<T> res = new HashSet<>(a);
        res.retainAll(b);
        return res;
    }

    public static Map<Integer, Integer> frequencyMapInt(int[] arr) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int x : arr) map.put(x, map.getOrDefault(x, 0) + 1);
        return map;
    }

}
