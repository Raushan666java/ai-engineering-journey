import java.util.*;

public class BinarySearchBasics {
    public static int lowerBound(int[] a, int x) {
        int l=0, r=a.length; while(l<r){ int m=(l+r)/2; if (a[m] < x) l = m+1; else r=m; } return l; }
    public static int upperBound(int[] a, int x) { int l=0,r=a.length; while(l<r){ int m=(l+r)/2; if (a[m] <= x) l = m+1; else r=m; } return l; }
    public static int searchInRotated(int[] a, int x) {
        int n=a.length; int l=0, r=n-1;
        while (l<=r){ int m=(l+r)/2; if (a[m]==x) return m; if (a[l] <= a[m]) { if (x >= a[l] && x < a[m]) r = m-1; else l = m+1; } else { if (x > a[m] && x <= a[r]) l = m+1; else r = m-1; } }
        return -1; }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        int[] a = {1,2,2,2,3,4,5};
        System.out.println("lowerBound(2) = " + lowerBound(a,2));
        System.out.println("upperBound(2) = " + upperBound(a,2));
        int[] rot = {4,5,6,7,0,1,2};
        System.out.println("searchInRotated(0) = " + searchInRotated(rot,0));

        if (ci) {
            boolean ok = true;
            ok &= (lowerBound(a,2) == 1);
            ok &= (upperBound(a,2) == 4);
            ok &= (searchInRotated(rot,0) == 4);
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
