import java.io.*;
import java.lang.ProcessBuilder;
import java.util.*;

public class Week4Review {
    static class Result { String name; boolean passed; long timeMs; String message; }
    public static void main(String[] args) {
        System.out.println("Running Week 4 Review — Graphs, Collections, Exceptions, Concurrency");
        Map<String, String> classDirs = new LinkedHashMap<>();
        classDirs.put("GraphBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-22\\code");
        classDirs.put("GraphTraversals", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-22\\code");
        classDirs.put("GraphShortestPaths", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-22\\code");
        classDirs.put("GraphMST", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-22\\code");
        classDirs.put("GraphVisualizer", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-22\\code");
        classDirs.put("GraphAdvanced", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-23\\code");
        classDirs.put("GraphFlow", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-24\\code");
        classDirs.put("GraphTarjan", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-24\\code");
        classDirs.put("GraphLCA", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-24\\code");
        classDirs.put("CollectionsBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-25\\code");
        classDirs.put("CollectionsVisualizer", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-25\\code");
        classDirs.put("ExceptionHandlingBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-26\\code");
        classDirs.put("FileIOBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-26\\code");
        classDirs.put("ThreadsBasics", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-27\\code");
        classDirs.put("SyncDemo", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-27\\code");
        classDirs.put("ExecutorDemo", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-27\\code");
        classDirs.put("ConcurrentCollectionsDemo", "c:\\xampp\\htdocs\\Placement\\Placement-01\\90-Day-Plan\\Day-27\\code");
        // done - classDirs mapping contains class names -> dirs

        List<Result> results = new ArrayList<>();
        for (Map.Entry<String, String> entry : classDirs.entrySet()) {
            String cls = entry.getKey(); String dir = entry.getValue();
            Result r = new Result(); r.name = cls; long start = System.nanoTime();
            try {
                ProcessBuilder pb = new ProcessBuilder("java", "-cp", dir, cls, "--ci");
                pb.redirectErrorStream(true);
                Process p = pb.start();
                try (BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()))) {
                    String line; while ((line = reader.readLine()) != null) System.out.println(line);
                }
                int rc = p.waitFor();
                r.passed = rc == 0; r.message = rc == 0 ? "OK" : "ExitCode=" + rc;
            } catch (Exception e) { r.passed = false; r.message = e.getMessage(); }
            r.timeMs = (System.nanoTime() - start) / 1_000_000;
            results.add(r);
            System.out.println(String.format("%s -> %s (time=%d ms) %s", r.name, r.passed ? "PASS" : "FAIL", r.timeMs, r.message));
        }
        long total = 0; int passCount = 0; for (Result r : results) { total += r.timeMs; if (r.passed) passCount++; }
        System.out.println("Week 4 review — Passed: " + passCount + " / " + results.size() + " total time=" + total + " ms");
    }
}
