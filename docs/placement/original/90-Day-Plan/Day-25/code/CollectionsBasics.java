import java.util.*;

public class CollectionsBasics {
    public static void main(String[] args) {
        System.out.println("ArrayList vs LinkedList basics:");
        List<Integer> al = new ArrayList<>();
        List<Integer> ll = new LinkedList<>();
        for (int i = 0; i < 1000; i++) { al.add(i); ll.add(i); }
        long start = System.nanoTime(); al.add(0, -1); long a1 = System.nanoTime() - start;
        start = System.nanoTime(); ll.add(0, -1); long l1 = System.nanoTime() - start;
        System.out.println("Insert at index 0 - ArrayList: " + a1 + " ns, LinkedList: " + l1 + " ns");

        start = System.nanoTime(); al.get(500); long a2 = System.nanoTime() - start;
        start = System.nanoTime(); ((LinkedList<Integer>)ll).get(500); long l2 = System.nanoTime() - start;
        System.out.println("Access at index 500 - ArrayList: " + a2 + " ns, LinkedList: " + l2 + " ns");

        System.out.println("HashMap vs TreeMap basics:");
        Map<String,Integer> hm = new HashMap<>(); Map<String,Integer> tm = new TreeMap<>();
        hm.put("apple", 10); hm.put("banana", 5); tm.put("apple", 10); tm.put("banana", 5);
        System.out.println("HashMap keys: " + hm.keySet());
        System.out.println("TreeMap keys (sorted): " + tm.keySet());

        Set<Integer> hs = new HashSet<>(); hs.add(3); hs.add(1); hs.add(2); System.out.println("HashSet iteration: " + hs);
        Set<Integer> ts = new TreeSet<>(); ts.add(3); ts.add(1); ts.add(2); System.out.println("TreeSet iteration (sorted): " + ts);

        // Show use-case: frequency map
        String[] arr = {"a","b","a","c","b","a"}; Map<String,Integer> freq = new HashMap<>();
        for (String s: arr) freq.put(s, freq.getOrDefault(s, 0) + 1);
        System.out.println("Frequency map: " + freq);
        if (args != null && args.length > 0) {
            for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) {
                boolean ok = tm.keySet().equals(new TreeSet<>(Arrays.asList("apple","banana"))) && freq.get("a")==3 && freq.get("b")==2 && freq.get("c")==1;
                if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}            }
        }
    }
}
