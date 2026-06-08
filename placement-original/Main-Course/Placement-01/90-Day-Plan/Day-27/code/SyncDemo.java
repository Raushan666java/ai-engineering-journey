import java.util.concurrent.locks.ReentrantLock;

public class SyncDemo {
    static class Counter {
        private int count = 0; public void inc() { count++; } public int get() { return count; }
    }
    static class SyncCounter {
        private int count = 0; public synchronized void inc() { count++; } public int get(){ return count; }
    }
    static class LockCounter {
        private int count = 0; private final ReentrantLock lock = new ReentrantLock();
        public void inc() { lock.lock(); try { count++; } finally { lock.unlock(); } } public int get(){ return count; }
    }
    public static void main(String[] args) throws Exception {
        boolean ci = false; for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        Counter uc = new Counter(); SyncCounter sc = new SyncCounter(); LockCounter lc = new LockCounter();
        Runnable r1 = () -> { for (int i=0;i<1000;i++) uc.inc(); };
        Runnable r2 = () -> { for (int i=0;i<1000;i++) sc.inc(); };
        Runnable r3 = () -> { for (int i=0;i<1000;i++) lc.inc(); };
        Thread t1 = new Thread(r1), t2 = new Thread(r1); t1.start(); t2.start(); t1.join(); t2.join();
        System.out.println("Unsafe counter (expected 2000) -> " + uc.get());
        Thread t3 = new Thread(r2), t4 = new Thread(r2); t3.start(); t4.start(); t3.join(); t4.join();
        System.out.println("Synchronized counter (expected 2000) -> " + sc.get());
        Thread t5 = new Thread(r3), t6 = new Thread(r3); t5.start(); t6.start(); t5.join(); t6.join();
        int lockCount = lc.get(); System.out.println("Lock-based counter (expected 2000) -> " + lockCount);
        if (ci) {
            if (sc.get() == 2000 && lockCount == 2000) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}        }
    }
}
