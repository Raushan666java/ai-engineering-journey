import java.util.*;

public class NumberTheoryBasics {
    public static long gcd(long a, long b) { if (b==0) return a; return gcd(b, a % b); }
    public static long lcm(long a, long b) { return a / gcd(a, b) * b; }
    public static long modPow(long a, long e, long mod) { long res=1%mod; a%=mod; while (e>0) { if ((e & 1)==1) res = (res * a) % mod; a = (a * a) % mod; e >>= 1; } return res; }

    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        System.out.println("gcd(48,18) = " + gcd(48,18));
        System.out.println("lcm(12,30) = " + lcm(12,30));
        System.out.println("modPow(2,10,1000) = " + modPow(2,10,1000));
        if (ci) {
            boolean ok=true; ok &= (gcd(48,18)==6); ok &= (lcm(12,30) == 60); ok &= (modPow(2,10,1000) == 24); if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}        }
    }
}
