public class BitManipulationBasics {
    public static int popcount(int x) { return Integer.bitCount(x); }
    public static int lowbit(int x) { return x & -x; }
    public static boolean isPowerOfTwo(int x) { return x > 0 && (x & (x - 1)) == 0; }
    public static void main(String[] args) {
        boolean ci=false; if (args!=null) for (String a: args) if ("--ci".equals(a)||"--test".equals(a)) ci=true;
        int x=29; System.out.println("popcount(29) = " + popcount(x)); // 29 = 11101 => 4
        System.out.println("lowbit(29) = " + lowbit(x));
        System.out.println("isPowerOfTwo(16) = " + isPowerOfTwo(16));
        if (ci) {
            boolean ok=true; ok &= (popcount(29) == 4); ok &= (lowbit(29) == 1); ok &= isPowerOfTwo(16);
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}        }
    }
}
