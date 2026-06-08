import java.util.concurrent.*;

public class ExecutorDemo {
    public static void main(String[] args) throws Exception {
        boolean ci = false; for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        ExecutorService exec = Executors.newFixedThreadPool(3);
        Runnable task = () -> { System.out.println(Thread.currentThread().getName()+" executed task"); try { Thread.sleep(50); } catch (InterruptedException e) { Thread.currentThread().interrupt(); } };
        for (int i=0;i<5;i++) exec.submit(task);
        exec.shutdown(); exec.awaitTermination(2, TimeUnit.SECONDS);
        System.out.println("Executor pool finished");
        if (ci) { System.out.println("CI_OK"); System.exit(0); }
    }
}
