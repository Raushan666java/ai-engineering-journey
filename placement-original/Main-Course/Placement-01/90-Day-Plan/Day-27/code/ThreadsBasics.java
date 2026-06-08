public class ThreadsBasics {
    static class Worker implements Runnable {
        String name; Worker(String name) { this.name = name; }
        public void run() {
            for (int i=0;i<5;i++) {
                System.out.println(name + " - step " + i);
                try { Thread.sleep(30); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
            }
        }
    }
    public static void main(String[] args) throws Exception {
        boolean ci = false; for (String a: args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        Thread t1 = new Thread(new Worker("A"));
        Thread t2 = new Thread(new Worker("B"));
        t1.start(); t2.start();
        t1.join(); t2.join();
        System.out.println("Threads completed.");
        if (ci) { System.out.println("CI_OK"); System.exit(0); }
    }
}
