import java.util.*;

public class FenwickBasics {
    static class Fenwick {
        int n; long[] bit;
        Fenwick(int n) { this.n = n; bit = new long[n+1]; }
        void add(int idx, long val) { for (int i = idx+1; i <= n; i += i & -i) bit[i] += val; }
        long sumPrefix(int idx) { long s = 0; for (int i = idx+1; i > 0; i -= i & -i) s += bit[i]; return s; }
        long rangeSum(int l, int r) { if (r<l) return 0; return sumPrefix(r) - (l==0 ? 0 : sumPrefix(l-1)); }
    }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a) || "--test".equals(a)) ci=true;

        Fenwick f = new Fenwick(5);
        int[] arr = {1,2,3,4,5};
        for (int i=0;i<arr.length;i++) f.add(i, arr[i]);
        long prefixBefore = f.sumPrefix(2);
        long rangeBefore = f.rangeSum(1,3);
        System.out.println("prefix sum(0..2) = " + prefixBefore);
        System.out.println("range sum(1..3) = " + rangeBefore);
        f.add(2, 5); // arr[2] += 5
        long prefixAfter = f.sumPrefix(2);
        long rangeAfter = f.rangeSum(1,3);
        System.out.println("new prefix sum(0..2) = " + prefixAfter);
        System.out.println("new range sum(1..3) = " + rangeAfter);

        if (ci) {
            boolean ok = true;
            ok &= (prefixAfter == 11);
            ok &= (rangeBefore == 9);
            ok &= (rangeAfter == 14);
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
