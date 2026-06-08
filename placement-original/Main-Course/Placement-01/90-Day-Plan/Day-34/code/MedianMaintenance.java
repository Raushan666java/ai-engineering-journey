import java.util.*;

public class MedianMaintenance {
    static class MedianHeap {
        PriorityQueue<Integer> lo; // max-heap
        PriorityQueue<Integer> hi; // min-heap
        MedianHeap() {
            lo = new PriorityQueue<>(Collections.reverseOrder());
            hi = new PriorityQueue<>();
        }
        void add(int x) {
            if (lo.isEmpty() || x <= lo.peek()) lo.add(x); else hi.add(x);
            balance();
        }
        void balance(){ if (lo.size() - hi.size() > 1) hi.add(lo.poll()); else if (hi.size() - lo.size() > 1) lo.add(hi.poll()); }
        double median() { if (lo.size() == hi.size()) return (lo.peek() + hi.peek()) / 2.0; return lo.size() > hi.size() ? lo.peek() : hi.peek(); }
    }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a) || "--test".equals(a)) ci=true;
        MedianHeap mh = new MedianHeap();
        int[] arr = {5,1,8,3,7,2};
        List<Double> medians = new ArrayList<>();
        for (int v: arr) { mh.add(v); medians.add(mh.median()); }
        System.out.println("Medians sequence: " + medians);

        if (ci) {
            double[] expected = {5.0, 3.0, 5.0, 4.0, 5.0, 4.0};
            boolean ok = true; for (int i=0;i<expected.length;i++) if (Math.abs(medians.get(i) - expected[i]) > 1e-9) ok=false;
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
