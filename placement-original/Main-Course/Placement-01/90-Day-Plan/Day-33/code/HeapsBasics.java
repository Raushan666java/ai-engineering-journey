import java.util.*;

public class HeapsBasics {
    // Heap sort using PriorityQueue
    public static int[] heapSort(int[] a) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int x: a) pq.add(x);
        int[] res = new int[a.length]; int i=0; while(!pq.isEmpty()) res[i++]=pq.poll();
        return res;
    }

    // Top K elements (largest)
    public static int[] topK(int[] a, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        for (int v: a) {
            pq.add(v); if (pq.size() > k) pq.poll();
        }
        int[] res = new int[pq.size()]; int i=res.length-1; while(!pq.isEmpty()) res[i--]=pq.poll(); return res;
    }

    // Merge k sorted arrays using heap
    public static int[] mergeK(int[][] lists) {
        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(x->x[0]));
        int total = 0; for (int i=0;i<lists.length;i++) if (lists[i].length>0) { pq.add(new int[]{lists[i][0], i, 0}); total += lists[i].length; }
        int[] out = new int[total]; int idx = 0;
        while (!pq.isEmpty()) {
            int[] top = pq.poll(); out[idx++] = top[0]; int i = top[1], j = top[2]; j++; if (j < lists[i].length) pq.add(new int[]{lists[i][j], i, j});
        }
        return out;
    }

    public static void main(String[] args) {
        boolean ci = false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;

        int[] a = {5,1,8,3,7,2};
        System.out.println("Original: " + Arrays.toString(a));
        System.out.println("HeapSort: " + Arrays.toString(heapSort(a)));

        int[] top3 = topK(a, 3);
        System.out.println("Top 3: " + Arrays.toString(top3));

        int[][] lists = {{1,4,7},{2,5,8,10},{0,3,6}};
        System.out.println("Merged: " + Arrays.toString(mergeK(lists)));

        if (ci) {
            boolean ok = true;
            ok &= Arrays.equals(heapSort(a), new int[]{1,2,3,5,7,8});
            // topK returns elements sorted descending (largest to smallest)
            ok &= Arrays.equals(top3, new int[]{8,7,5});
            ok &= Arrays.equals(mergeK(lists), new int[]{0,1,2,3,4,5,6,7,8,10});
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
