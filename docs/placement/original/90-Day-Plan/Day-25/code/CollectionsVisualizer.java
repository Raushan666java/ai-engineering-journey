import java.util.*;

public class CollectionsVisualizer {
    public static void main(String[] args) {
        boolean quiet = false; boolean ci = false;
        for (String a : args) if (a.equals("--quiet") || a.equals("-q")) quiet = true;
        for (String a : args) if (a.equals("--ci") || a.equals("--test")) ci = true;

        if (!quiet) System.out.println("Demonstrating insertion order / sorted order differences");
        LinkedHashMap<String,Integer> lhm = new LinkedHashMap<>(); lhm.put("b",2); lhm.put("a",1); lhm.put("c",3);
        HashMap<String,Integer> hm = new HashMap<>(); hm.put("b",2); hm.put("a",1); hm.put("c",3);
        TreeMap<String,Integer> tm = new TreeMap<>(); tm.put("b",2); tm.put("a",1); tm.put("c",3);

        if (!quiet) System.out.println("LinkedHashMap iteration (insertion order): " + lhm.keySet());
        if (!quiet) System.out.println("HashMap iteration (unordered): " + hm.keySet());
        System.out.println("TreeMap iteration (sorted): " + tm.keySet());

        List<Integer> list = new ArrayList<>(); for (int i=0;i<10;i++) list.add(i);
        Collections.shuffle(list);
        if (!quiet) System.out.println("Shuffled list: " + list);
        Collections.sort(list);
        System.out.println("Sorted list: " + list);

        // Performance micro-benchmark for large inserts
        int n = 100_000; List<Integer> aList = new ArrayList<>(); List<Integer> lList = new LinkedList<>();
        for (int i=0;i<n;i++) { aList.add(i); lList.add(i); }
        long s = System.nanoTime(); aList.add(0, -1); long t1 = System.nanoTime() - s;
        s = System.nanoTime(); lList.add(0, -1); long t2 = System.nanoTime() - s;
        if (!quiet) System.out.println("Insert at 0: ArrayList=" + t1 + "ns, LinkedList=" + t2 + "ns");
        else System.out.println("Benchmark Insert at 0 done: " + (t1+t2) + " ns (total)");
        if (ci) {
            boolean ok = new ArrayList<>(tm.keySet()).equals(Arrays.asList("a","b","c")) && list.equals(Arrays.asList(0,1,2,3,4,5,6,7,8,9));
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
