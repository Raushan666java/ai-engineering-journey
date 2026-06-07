import java.util.concurrent.*;
import java.util.*;

public class ConcurrentCollectionsDemo {
    public static void main(String[] args) throws Exception {
        boolean ci = false; for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        ConcurrentHashMap<String, Integer> chm = new ConcurrentHashMap<>();
        chm.put("a", 1); chm.put("b", 2); chm.put("c", 3);
        chm.computeIfAbsent("d", k -> 4);
        System.out.println("ConcurrentHashMap snapshot: " + chm);

        ConcurrentLinkedQueue<Integer> q = new ConcurrentLinkedQueue<>();
        q.add(1); q.add(2); q.add(3);
        Integer first = q.poll(); System.out.println("ConcurrentLinkedQueue poll: " + first + " remaining: " + q);
        if (ci) {
            boolean ok = chm.containsKey("a") && chm.containsKey("b") && chm.containsKey("c") && chm.containsKey("d") && first == 1 && q.size() == 2;
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}        
        }
    }
}
