import java.util.*;

public class NQueensBasics {
    static int count=0;
    static void solve(int n, int row, boolean[] cols, boolean[] diag1, boolean[] diag2) {
        if (row==n) { count++; return; }
        for (int c=0;c<n;c++) {
            int d1=row-c+n-1; int d2=row+c;
            if (cols[c]||diag1[d1]||diag2[d2]) continue;
            cols[c]=diag1[d1]=diag2[d2]=true;
            solve(n,row+1,cols,diag1,diag2);
            cols[c]=diag1[d1]=diag2[d2]=false;
        }
    }
    public static int countNQueens(int n) { count=0; solve(n,0,new boolean[n],new boolean[2*n-1], new boolean[2*n-1]); return count; }
    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        int c= countNQueens(8);
        System.out.println("N-Queens(8) count = " + c);
        if (ci) {
            boolean ok = c==92; if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
