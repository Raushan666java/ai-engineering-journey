import java.io.*;
import java.util.*;

public class practice_problems {
    public static void main(String[] args) {
        System.out.println("=== DAY 6: PRACTICE PROBLEMS - EXCEPTIONS ===\n");

        // Problem 1: Valid age validation
        try {
            validateAge(200); // should throw
        } catch (Exception e) {
            System.out.println("Problem1: " + e.getMessage());
        }

        // Problem 2: Parse int robustly
        System.out.println("Problem2: parseInt safe: " + safeParseInt("abc", -1));

        // Problem 3: File read (try-with-resources)
        System.out.println("Problem3: read with resources");
        tryReadingWithResource();

        // Problem 4: Retry with backoff (simulate transient error)
        System.out.println("Problem4: retry operation");
        boolean ok = retryOperation(() -> unreliableOperation(), 3);
        System.out.println("Retry OK: " + ok);
    }

    // Problem 1
    public static void validateAge(int age) throws IllegalArgumentException {
        if (age < 0 || age > 150) throw new IllegalArgumentException("Invalid age: " + age);
        System.out.println("Age OK: " + age);
    }

    // Problem 2
    public static int safeParseInt(String s, int fallback) {
        try {
            return Integer.parseInt(s);
        } catch (NumberFormatException ex) {
            // log and fallback
            System.out.println("safeParseInt: invalid number -> " + s);
            return fallback;
        }
    }

    // Problem 3
    public static void tryReadingWithResource() {
        String data = "lineA\nlineB";
        try (BufferedReader br = new BufferedReader(new StringReader(data))) {
            System.out.println("line1: " + br.readLine());
            System.out.println("line2: " + br.readLine());
        } catch (IOException ex) {
            System.out.println("IO error: " + ex.getMessage());
        }
    }

    // Problem 4: simulate unreliable op
    public static boolean unreliableOperation() {
        if (Math.random() < 0.7) {
            throw new RuntimeException("Transient failure");
        }
        return true;
    }

    public interface Operation { boolean run(); }

    public static boolean retryOperation(Operation op, int retries) {
        int attempt = 0;
        long backoff = 500; // ms
        while (attempt < retries) {
            try {
                attempt++;
                boolean ok = op.run();
                if (ok) return true;
            } catch (RuntimeException ex) {
                System.out.println("Attempt " + attempt + " failed: " + ex.getMessage());
                try { Thread.sleep(backoff); } catch (InterruptedException e) { Thread.currentThread().interrupt(); }
                backoff *= 2;
            }
        }
        return false;
    }
}
