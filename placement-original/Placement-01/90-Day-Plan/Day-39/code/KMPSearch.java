import java.util.*;

public class KMPSearch {
    public static int[] buildLPS(String pat) {
        int m = pat.length(); int[] lps = new int[m]; int len=0; int i=1; while (i<m) {
            if (pat.charAt(i)==pat.charAt(len)) { lps[i++] = ++len; } else { if (len!=0) len = lps[len-1]; else lps[i++]=0; }
        }
        return lps;
    }

    public static int search(String txt, String pat) {
        int n = txt.length(); int m = pat.length(); int[] lps = buildLPS(pat); int i=0,j=0; while (i<n) {
            if (txt.charAt(i)==pat.charAt(j)) { i++; j++; if (j==m) return i-j; }
            else if (j>0) j = lps[j-1]; else i++;
        }
        return -1;
    }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        String txt = "abxabcabcaby"; String pat = "abcaby"; int pos = search(txt, pat);
        System.out.println("Pattern found at index: " + pos);
        int[] lps = buildLPS(pat); System.out.println("LPS: " + Arrays.toString(lps));
        if (ci) {
            boolean ok = true; ok &= (pos == 6); ok &= Arrays.equals(lps, new int[]{0,0,0,1,2,0}); if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}        }
    }
}
