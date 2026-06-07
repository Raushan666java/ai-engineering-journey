import java.util.*;

public class DivideAndConquerBasics {

    // Merge sort implementation
    static void mergeSort(int[] a) { if (a == null || a.length <= 1) return; mergeSortRec(a, 0, a.length-1); }
    static void mergeSortRec(int[] a, int l, int r) {
        if (l >= r) return; int m = (l + r) >>> 1; mergeSortRec(a, l, m); mergeSortRec(a, m+1, r); merge(a, l, m, r);
    }
    static void merge(int[] a, int l, int m, int r) {
        int n1 = m-l+1, n2 = r-m; int[] L = new int[n1]; int[] R = new int[n2];
        System.arraycopy(a, l, L, 0, n1); System.arraycopy(a, m+1, R, 0, n2);
        int i=0,j=0,k=l; while(i<n1 && j<n2){ if (L[i]<=R[j]) a[k++]=L[i++]; else a[k++]=R[j++]; }
        while(i<n1) a[k++]=L[i++]; while(j<n2) a[k++]=R[j++];
    }

    // Quick sort (random pivot)
    static void quickSort(int[] a) { if (a==null||a.length<=1) return; quickSortRec(a, 0, a.length-1); }
    static final Random rnd = new Random(12345);
    static void quickSortRec(int[] a, int l, int r){ if (l>=r) return; int p = partition(a, l, r); quickSortRec(a, l, p-1); quickSortRec(a, p+1, r); }
    static int partition(int[] a, int l, int r){ int pivotIdx = l + rnd.nextInt(r-l+1); int pivot = a[pivotIdx]; swap(a, pivotIdx, r); int store=l; for (int i=l;i<r;i++){ if (a[i] < pivot){ swap(a, i, store); store++; }} swap(a, store, r); return store; }
    static void swap(int[] a, int i, int j){ int tmp=a[i]; a[i]=a[j]; a[j]=tmp; }

    // Closest pair (divide & conquer): returns squared distance for simplicity
    static double closestPairDist(int[][] points) {
        int n = points.length; if (n < 2) return Double.POSITIVE_INFINITY;
        int[][] pts = points.clone(); Arrays.sort(pts, Comparator.comparingInt(p -> p[0]));
        int[][] tmp = new int[n][2]; return Math.sqrt(closestRec(pts, tmp, 0, n-1));
    }
    static long sq(int x){ return (long)x * x; }
    static long dist2(int[] a, int[] b){ return sq(a[0]-b[0]) + sq(a[1]-b[1]); }
    static long closestRec(int[][] pts, int[][] tmp, int l, int r){ if (r - l <= 0) return Long.MAX_VALUE; if (r - l == 1) return dist2(pts[l], pts[r]); int m = (l + r) >>> 1; long dL = closestRec(pts, tmp, l, m); long dR = closestRec(pts, tmp, m+1, r); long d = Math.min(dL, dR);
        // Merge by y
        int i = l, j = m+1, k = l;
        while (i <= m && j <= r) tmp[k++] = (pts[i][1] <= pts[j][1]) ? pts[i++] : pts[j++];
        while (i <= m) tmp[k++] = pts[i++]; while (j <= r) tmp[k++] = pts[j++];
        for (int s = l; s <= r; s++) pts[s] = tmp[s];
        // Build strip
        List<int[]> strip = new ArrayList<>();
        int midx = pts[m][0]; for (int s = l; s <= r; s++) if (sq(pts[s][0] - midx) < d) strip.add(pts[s]);
        for (int s = 0; s < strip.size(); s++) {
            for (int t = s+1; t < strip.size() && t < s+8; t++) { d = Math.min(d, dist2(strip.get(s), strip.get(t))); }
        }
        return d;
    }

    public static void main(String[] args){
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;

        int[] a = new int[]{5,2,9,1,5,6};
        int[] a1 = a.clone(); mergeSort(a1);
        System.out.println("Merge sorted: " + Arrays.toString(a1));
        int[] a2 = a.clone(); quickSort(a2);
        System.out.println("Quick sorted: " + Arrays.toString(a2));

        int[][] pts = new int[][]{{0,0},{5,6},{3,4},{1,1},{2,2}}; // closest pair between (0,0) and (1,1) = sqrt(2)
        double cp = closestPairDist(pts);
        System.out.println("Closest pair distance: " + cp);

        if (ci) {
            boolean ok=true;
            // Validate sorted outputs
            int[] exp = new int[]{1,2,5,5,6,9}; ok &= Arrays.equals(a1, exp); ok &= Arrays.equals(a2, exp);
            // Check closest pair sqrt(2) approx
            ok &= Math.abs(cp - Math.sqrt(2.0)) < 1e-9;
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
