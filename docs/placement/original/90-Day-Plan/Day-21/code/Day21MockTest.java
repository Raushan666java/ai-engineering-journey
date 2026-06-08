import java.lang.reflect.Method;
import java.util.*;

public class Day21MockTest {
    static class Result { String name; boolean passed; long timeNs; String message; }

    public static void main(String[] args) {
        System.out.println("Running Day 21: Week 3 Review & Mock Test");
        List<Result> results = new ArrayList<>();

        // List of demo classes to run. Add/remove as needed.
        String[] demoClasses = {
            "..Day-15.code.SortingBasics", // placeholder if exists
            "Day-16.code.SearchLibrary",
            "Day-17.code.RecursionBasics",
            "Day-17.code.Backtracking",
            "Day-17.code.RecursionVisualizer",
            "Day-18.code.DPBasics",
            "Day-18.code.DynamicProgramming",
            "Day-18.code.DPVisualizer",
            "Day-19.code.GreedyBasics",
            "Day-19.code.GreedyVisualizer"
        };

        for (String cls : demoClasses) {
            Result r = new Result();
            r.name = cls;
            long start = System.nanoTime();
            try {
                // Use reflection to load and run main if present
                Class<?> c = Class.forName(toQualifiedName(cls));
                Method m = c.getMethod("main", String[].class);
                String[] emptyArgs = new String[0];
                m.invoke(null, (Object) emptyArgs);
                r.passed = true;
                r.message = "OK";
            } catch (ClassNotFoundException e) {
                r.passed = false;
                r.message = "Class not found: " + e.getMessage();
            } catch (NoSuchMethodException e) {
                r.passed = false;
                r.message = "No main method: " + e.getMessage();
            } catch (Exception e) {
                r.passed = false;
                r.message = "Exception: " + e.getCause();
            }
            r.timeNs = System.nanoTime() - start;
            results.add(r);
            System.out.println(String.format("  %s -> %s (time= %,d ns) : %s", r.name, r.passed ? "PASS" : "FAIL", r.timeNs, r.message));
        }

        // Summarize
        long totalTime = 0; int passCount = 0;
        for (Result r : results) {
            totalTime += r.timeNs;
            if (r.passed) passCount++;
        }
        System.out.println();
        System.out.println("Mock Test Summary: ");
        System.out.println("  Passed: " + passCount + " / " + results.size());
        System.out.println("  Total time: " + totalTime + " ns");
        System.out.println("Done.");
    }

    private static String toQualifiedName(String s) {
        // Some helper to transform the path-like name into actual class name
        // e.g., Day-17.code.RecursionBasics -> Day_17.code.RecursionBasics or adjust if needed
        return s.replace("-", "_");
    }
}
